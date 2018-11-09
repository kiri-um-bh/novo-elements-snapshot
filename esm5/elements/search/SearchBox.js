/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Component, Input, Output, EventEmitter, ViewChild, forwardRef, ElementRef, HostBinding, ChangeDetectorRef, NgZone, ChangeDetectionStrategy, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TAB, ENTER, ESCAPE } from '@angular/cdk/keycodes';
// APP
import { NovoOverlayTemplateComponent } from '../overlay/Overlay';
import { NovoLabelService } from '../../services/novo-label-service';
// Value accessor for the component (supports ngModel)
/** @type {?} */
var SEARCH_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NovoSearchBoxElement; }),
    multi: true,
};
var NovoSearchBoxElement = /** @class */ (function () {
    function NovoSearchBoxElement(element, labels, _changeDetectorRef, _zone) {
        this.element = element;
        this.labels = labels;
        this._changeDetectorRef = _changeDetectorRef;
        this._zone = _zone;
        this.icon = 'search';
        this.placeholder = 'Search...';
        this.alwaysOpen = false;
        this.theme = 'positive';
        this.closeOnSelect = true;
        this.searchChanged = new EventEmitter();
        this.focused = false;
        /**
         * View -> model callback called when value changes
         */
        this._onChange = function () { };
        /**
         * View -> model callback called when autocomplete has been touched
         */
        this._onTouched = function () { };
    }
    /**
     * @name showFasterFind
     * @description This function shows the picker and adds the active class (for animation)
     */
    /**
     * \@name showFasterFind
     * \@description This function shows the picker and adds the active class (for animation)
     * @param {?=} event
     * @param {?=} forceClose
     * @return {?}
     */
    NovoSearchBoxElement.prototype.showSearch = /**
     * \@name showFasterFind
     * \@description This function shows the picker and adds the active class (for animation)
     * @param {?=} event
     * @param {?=} forceClose
     * @return {?}
     */
    function (event, forceClose) {
        var _this = this;
        if (forceClose === void 0) { forceClose = false; }
        if (!this.panelOpen) {
            // Reset search
            // Set focus on search
            setTimeout(function () {
                /** @type {?} */
                var element = _this.input.nativeElement;
                if (element) {
                    element.focus();
                }
            }, 10);
        }
    };
    /**
     * @return {?}
     */
    NovoSearchBoxElement.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._zone.run(function () {
            _this.focused = true;
            _this.openPanel();
        });
    };
    /**
     * @return {?}
     */
    NovoSearchBoxElement.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.focused = false;
    };
    /** BEGIN: Convenient Panel Methods. */
    /**
     * BEGIN: Convenient Panel Methods.
     * @return {?}
     */
    NovoSearchBoxElement.prototype.openPanel = /**
     * BEGIN: Convenient Panel Methods.
     * @return {?}
     */
    function () {
        this.overlay.openPanel();
    };
    /**
     * @return {?}
     */
    NovoSearchBoxElement.prototype.closePanel = /**
     * @return {?}
     */
    function () {
        this.overlay.closePanel();
    };
    Object.defineProperty(NovoSearchBoxElement.prototype, "panelOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.overlay && this.overlay.panelOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoSearchBoxElement.prototype, "active", {
        get: /**
         * @return {?}
         */
        function () {
            return this.panelOpen || this.alwaysOpen;
        },
        enumerable: true,
        configurable: true
    });
    /** END: Convenient Panel Methods. */
    /**
     * END: Convenient Panel Methods.
     * @param {?} event
     * @return {?}
     */
    NovoSearchBoxElement.prototype._handleKeydown = /**
     * END: Convenient Panel Methods.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if ((event.keyCode === ESCAPE || event.keyCode === ENTER || event.keyCode === TAB) && this.panelOpen) {
            this.closePanel();
            event.stopPropagation();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoSearchBoxElement.prototype._handleInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (document.activeElement === event.target) {
            this._onChange(((/** @type {?} */ (event.target))).value);
            if (this.debounceSearchChange) {
                clearTimeout(this.debounceSearchChange);
            }
            this.debounceSearchChange = setTimeout(function () {
                _this.searchChanged.emit(((/** @type {?} */ (event.target))).value);
            }, 400);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoSearchBoxElement.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._setValue(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoSearchBoxElement.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoSearchBoxElement.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoSearchBoxElement.prototype._setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        /** @type {?} */
        var toDisplay = value;
        if (value && this.displayField) {
            toDisplay = value.hasOwnProperty(this.displayField) ? value[this.displayField] : value;
        }
        // Simply falling back to an empty string if the display value is falsy does not work properly.
        // The display value can also be the number zero and shouldn't fall back to an empty string.
        this.displayValue = toDisplay ? toDisplay : '';
        this.input.nativeElement.value = this.displayValue;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     */
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     * @param {?} event
     * @return {?}
     */
    NovoSearchBoxElement.prototype.setValueAndClose = /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event && event.value) {
            this._setValue(event.value);
            this._onChange(event.value);
        }
        this.closePanel();
    };
    /**
     * Clear any previous selected option and emit a selection change event for this option
     */
    /**
     * Clear any previous selected option and emit a selection change event for this option
     * @param {?} skip
     * @return {?}
     */
    NovoSearchBoxElement.prototype.clearValue = /**
     * Clear any previous selected option and emit a selection change event for this option
     * @param {?} skip
     * @return {?}
     */
    function (skip) {
        this.writeValue(null);
        this._onChange(null);
    };
    NovoSearchBoxElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-search',
                    providers: [SEARCH_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n        <!-- SEARCH ICON -->\n        <button theme=\"fab\" [color]=\"theme\" [icon]=\"icon\" (click)=\"showSearch()\" [tooltip]=\"hint\" tooltipPosition=\"bottom\" data-automation-id=\"novo-search-fab\"></button>\n        <!-- SEARCH INPUT -->\n        <input type=\"text\" [attr.name]=\"name\" [attr.value]=\"displayValue\" [attr.placeholder]=\"placeholder\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" (keydown)=\"_handleKeydown($event)\" (input)=\"_handleInput($event)\" #input data-automation-id=\"novo-search-input\"/>\n        <!-- SEARCH OVERLAY -->\n        <novo-overlay-template [parent]=\"element\" [closeOnSelect]=\"closeOnSelect\" position=\"above-below\" (select)=\"closePanel()\" (closing)=\"onBlur()\">\n            <ng-content></ng-content>\n        </novo-overlay-template>\n    "
                }] }
    ];
    /** @nocollapse */
    NovoSearchBoxElement.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NovoLabelService },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    NovoSearchBoxElement.propDecorators = {
        name: [{ type: Input }],
        icon: [{ type: Input }],
        placeholder: [{ type: Input }],
        alwaysOpen: [{ type: Input }],
        theme: [{ type: Input }],
        closeOnSelect: [{ type: Input }],
        displayField: [{ type: Input }],
        displayValue: [{ type: Input }],
        hint: [{ type: Input }],
        searchChanged: [{ type: Output }],
        focused: [{ type: HostBinding, args: ['class.focused',] }],
        overlay: [{ type: ViewChild, args: [NovoOverlayTemplateComponent,] }],
        input: [{ type: ViewChild, args: ['input',] }],
        active: [{ type: HostBinding, args: ['class.active',] }]
    };
    return NovoSearchBoxElement;
}());
export { NovoSearchBoxElement };
if (false) {
    /** @type {?} */
    NovoSearchBoxElement.prototype.name;
    /** @type {?} */
    NovoSearchBoxElement.prototype.icon;
    /** @type {?} */
    NovoSearchBoxElement.prototype.placeholder;
    /** @type {?} */
    NovoSearchBoxElement.prototype.alwaysOpen;
    /** @type {?} */
    NovoSearchBoxElement.prototype.theme;
    /** @type {?} */
    NovoSearchBoxElement.prototype.closeOnSelect;
    /** @type {?} */
    NovoSearchBoxElement.prototype.displayField;
    /** @type {?} */
    NovoSearchBoxElement.prototype.displayValue;
    /** @type {?} */
    NovoSearchBoxElement.prototype.hint;
    /** @type {?} */
    NovoSearchBoxElement.prototype.searchChanged;
    /** @type {?} */
    NovoSearchBoxElement.prototype.focused;
    /** @type {?} */
    NovoSearchBoxElement.prototype.value;
    /**
     * View -> model callback called when value changes
     * @type {?}
     */
    NovoSearchBoxElement.prototype._onChange;
    /**
     * View -> model callback called when autocomplete has been touched
     * @type {?}
     */
    NovoSearchBoxElement.prototype._onTouched;
    /**
     * Element for the panel containing the autocomplete options.
     * @type {?}
     */
    NovoSearchBoxElement.prototype.overlay;
    /** @type {?} */
    NovoSearchBoxElement.prototype.input;
    /** @type {?} */
    NovoSearchBoxElement.prototype.debounceSearchChange;
    /** @type {?} */
    NovoSearchBoxElement.prototype.element;
    /** @type {?} */
    NovoSearchBoxElement.prototype.labels;
    /** @type {?} */
    NovoSearchBoxElement.prototype._changeDetectorRef;
    /** @type {?} */
    NovoSearchBoxElement.prototype._zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQm94LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NlYXJjaC9TZWFyY2hCb3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTNELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7SUFHL0QscUJBQXFCLEdBQUc7SUFDNUIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsQ0FBQztJQUNuRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBRUQ7SUFxREUsOEJBQ1MsT0FBbUIsRUFDbkIsTUFBd0IsRUFDdkIsa0JBQXFDLEVBQ3JDLEtBQWE7UUFIZCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3ZCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQXRDaEIsU0FBSSxHQUFXLFFBQVEsQ0FBQztRQUV4QixnQkFBVyxHQUFXLFdBQVcsQ0FBQztRQUVsQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCLFVBQUssR0FBVyxVQUFVLENBQUM7UUFFM0Isa0JB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O0lBQy9CLGtEQUE2Qzs7SUFDN0MscUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVmlld0NoaWxkLFxuICBmb3J3YXJkUmVmLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE5nWm9uZSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVEFCLCBFTlRFUiwgRVNDQVBFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL292ZXJsYXkvT3ZlcmxheSc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBTRUFSQ0hfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvU2VhcmNoQm94RWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zZWFyY2gnLFxuICBwcm92aWRlcnM6IFtTRUFSQ0hfVkFMVUVfQUNDRVNTT1JdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPCEtLSBTRUFSQ0ggSUNPTiAtLT5cbiAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImZhYlwiIFtjb2xvcl09XCJ0aGVtZVwiIFtpY29uXT1cImljb25cIiAoY2xpY2spPVwic2hvd1NlYXJjaCgpXCIgW3Rvb2x0aXBdPVwiaGludFwiIHRvb2x0aXBQb3NpdGlvbj1cImJvdHRvbVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tc2VhcmNoLWZhYlwiPjwvYnV0dG9uPlxuICAgICAgICA8IS0tIFNFQVJDSCBJTlBVVCAtLT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW2F0dHIubmFtZV09XCJuYW1lXCIgW2F0dHIudmFsdWVdPVwiZGlzcGxheVZhbHVlXCIgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiAoZm9jdXMpPVwib25Gb2N1cygpXCIgKGJsdXIpPVwib25CbHVyKClcIiAoa2V5ZG93bik9XCJfaGFuZGxlS2V5ZG93bigkZXZlbnQpXCIgKGlucHV0KT1cIl9oYW5kbGVJbnB1dCgkZXZlbnQpXCIgI2lucHV0IGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tc2VhcmNoLWlucHV0XCIvPlxuICAgICAgICA8IS0tIFNFQVJDSCBPVkVSTEFZIC0tPlxuICAgICAgICA8bm92by1vdmVybGF5LXRlbXBsYXRlIFtwYXJlbnRdPVwiZWxlbWVudFwiIFtjbG9zZU9uU2VsZWN0XT1cImNsb3NlT25TZWxlY3RcIiBwb3NpdGlvbj1cImFib3ZlLWJlbG93XCIgKHNlbGVjdCk9XCJjbG9zZVBhbmVsKClcIiAoY2xvc2luZyk9XCJvbkJsdXIoKVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L25vdm8tb3ZlcmxheS10ZW1wbGF0ZT5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2VhcmNoQm94RWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KClcbiAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgcHVibGljIGljb246IHN0cmluZyA9ICdzZWFyY2gnO1xuICBASW5wdXQoKVxuICBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdTZWFyY2guLi4nO1xuICBASW5wdXQoKVxuICBwdWJsaWMgYWx3YXlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgdGhlbWU6IHN0cmluZyA9ICdwb3NpdGl2ZSc7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjbG9zZU9uU2VsZWN0OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgcHVibGljIGRpc3BsYXlGaWVsZDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGlzcGxheVZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBoaW50OiBzdHJpbmc7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc2VhcmNoQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mb2N1c2VkJylcbiAgZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgdmFsdWU6IGFueTtcblxuICAvKiogVmlldyAtPiBtb2RlbCBjYWxsYmFjayBjYWxsZWQgd2hlbiB2YWx1ZSBjaGFuZ2VzICovXG4gIF9vbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgLyoqIFZpZXcgLT4gbW9kZWwgY2FsbGJhY2sgY2FsbGVkIHdoZW4gYXV0b2NvbXBsZXRlIGhhcyBiZWVuIHRvdWNoZWQgKi9cbiAgX29uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIC8qKiBFbGVtZW50IGZvciB0aGUgcGFuZWwgY29udGFpbmluZyB0aGUgYXV0b2NvbXBsZXRlIG9wdGlvbnMuICovXG4gIEBWaWV3Q2hpbGQoTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudClcbiAgb3ZlcmxheTogYW55O1xuICBAVmlld0NoaWxkKCdpbnB1dCcpXG4gIGlucHV0OiBhbnk7XG5cbiAgcHJpdmF0ZSBkZWJvdW5jZVNlYXJjaENoYW5nZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX3pvbmU6IE5nWm9uZSxcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzaG93RmFzdGVyRmluZFxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzaG93cyB0aGUgcGlja2VyIGFuZCBhZGRzIHRoZSBhY3RpdmUgY2xhc3MgKGZvciBhbmltYXRpb24pXG4gICAqL1xuICBzaG93U2VhcmNoKGV2ZW50PzogYW55LCBmb3JjZUNsb3NlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMucGFuZWxPcGVuKSB7XG4gICAgICAvLyBSZXNldCBzZWFyY2hcbiAgICAgIC8vIFNldCBmb2N1cyBvbiBzZWFyY2hcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH1cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICB9KTtcbiAgfVxuICBvbkJsdXIoKSB7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gIH1cbiAgLyoqIEJFR0lOOiBDb252ZW5pZW50IFBhbmVsIE1ldGhvZHMuICovXG4gIG9wZW5QYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXkub3BlblBhbmVsKCk7XG4gIH1cbiAgY2xvc2VQYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXkuY2xvc2VQYW5lbCgpO1xuICB9XG4gIGdldCBwYW5lbE9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkucGFuZWxPcGVuO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYW5lbE9wZW4gfHwgdGhpcy5hbHdheXNPcGVuO1xuICB9XG4gIC8qKiBFTkQ6IENvbnZlbmllbnQgUGFuZWwgTWV0aG9kcy4gKi9cblxuICBfaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICgoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFIHx8IGV2ZW50LmtleUNvZGUgPT09IEVOVEVSIHx8IGV2ZW50LmtleUNvZGUgPT09IFRBQikgJiYgdGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG4gIF9oYW5kbGVJbnB1dChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xuXG4gICAgICBpZiAodGhpcy5kZWJvdW5jZVNlYXJjaENoYW5nZSkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVNlYXJjaENoYW5nZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRlYm91bmNlU2VhcmNoQ2hhbmdlID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2VhcmNoQ2hhbmdlZC5lbWl0KChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xuICAgICAgfSwgNDAwKTtcbiAgICB9XG4gIH1cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fc2V0VmFsdWUodmFsdWUpO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KSB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cbiAgcHJpdmF0ZSBfc2V0VmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICBsZXQgdG9EaXNwbGF5ID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlICYmIHRoaXMuZGlzcGxheUZpZWxkKSB7XG4gICAgICB0b0Rpc3BsYXkgPSB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSh0aGlzLmRpc3BsYXlGaWVsZCkgPyB2YWx1ZVt0aGlzLmRpc3BsYXlGaWVsZF0gOiB2YWx1ZTtcbiAgICB9XG4gICAgLy8gU2ltcGx5IGZhbGxpbmcgYmFjayB0byBhbiBlbXB0eSBzdHJpbmcgaWYgdGhlIGRpc3BsYXkgdmFsdWUgaXMgZmFsc3kgZG9lcyBub3Qgd29yayBwcm9wZXJseS5cbiAgICAvLyBUaGUgZGlzcGxheSB2YWx1ZSBjYW4gYWxzbyBiZSB0aGUgbnVtYmVyIHplcm8gYW5kIHNob3VsZG4ndCBmYWxsIGJhY2sgdG8gYW4gZW1wdHkgc3RyaW5nLlxuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdG9EaXNwbGF5ID8gdG9EaXNwbGF5IDogJyc7XG4gICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5kaXNwbGF5VmFsdWU7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgY2xvc2VzIHRoZSBwYW5lbCwgYW5kIGlmIGEgdmFsdWUgaXMgc3BlY2lmaWVkLCBhbHNvIHNldHMgdGhlIGFzc29jaWF0ZWRcbiAgICogY29udHJvbCB0byB0aGF0IHZhbHVlLiBJdCB3aWxsIGFsc28gbWFyayB0aGUgY29udHJvbCBhcyBkaXJ0eSBpZiB0aGlzIGludGVyYWN0aW9uXG4gICAqIHN0ZW1tZWQgZnJvbSB0aGUgdXNlci5cbiAgICovXG4gIHB1YmxpYyBzZXRWYWx1ZUFuZENsb3NlKGV2ZW50OiBhbnkgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LnZhbHVlKSB7XG4gICAgICB0aGlzLl9zZXRWYWx1ZShldmVudC52YWx1ZSk7XG4gICAgICB0aGlzLl9vbkNoYW5nZShldmVudC52YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFueSBwcmV2aW91cyBzZWxlY3RlZCBvcHRpb24gYW5kIGVtaXQgYSBzZWxlY3Rpb24gY2hhbmdlIGV2ZW50IGZvciB0aGlzIG9wdGlvblxuICAgKi9cbiAgcHVibGljIGNsZWFyVmFsdWUoc2tpcDogYW55KSB7XG4gICAgdGhpcy53cml0ZVZhbHVlKG51bGwpO1xuICAgIHRoaXMuX29uQ2hhbmdlKG51bGwpO1xuICB9XG59XG4iXX0=