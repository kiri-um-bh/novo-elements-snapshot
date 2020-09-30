/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NovoSearchBoxElement; })),
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
        this._onChange = (/**
         * @return {?}
         */
        function () { });
        /**
         * View -> model callback called when autocomplete has been touched
         */
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
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
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var element = _this.input.nativeElement;
                if (element) {
                    element.focus();
                }
            }), 10);
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
        this._zone.run((/**
         * @return {?}
         */
        function () {
            _this.focused = true;
            _this.openPanel();
        }));
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
            this.debounceSearchChange = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.searchChanged.emit(((/** @type {?} */ (event.target))).value);
            }), 400);
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
     * @private
     * @param {?} value
     * @return {?}
     */
    NovoSearchBoxElement.prototype._setValue = /**
     * @private
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
    /**
     * @type {?}
     * @private
     */
    NovoSearchBoxElement.prototype.debounceSearchChange;
    /** @type {?} */
    NovoSearchBoxElement.prototype.element;
    /** @type {?} */
    NovoSearchBoxElement.prototype.labels;
    /**
     * @type {?}
     * @private
     */
    NovoSearchBoxElement.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    NovoSearchBoxElement.prototype._zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQm94LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NlYXJjaC9TZWFyY2hCb3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTNELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7SUFHL0QscUJBQXFCLEdBQUc7SUFDNUIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixFQUFDO0lBQ25ELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFRDtJQXFERSw4QkFDUyxPQUFtQixFQUNuQixNQUF3QixFQUN2QixrQkFBcUMsRUFDckMsS0FBYTtRQUhkLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDdkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBdENoQixTQUFJLEdBQVcsUUFBUSxDQUFDO1FBRXhCLGdCQUFXLEdBQVcsV0FBVyxDQUFDO1FBRWxDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsVUFBSyxHQUFXLFVBQVUsQ0FBQztRQUUzQixr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MEI7O0lBQzFCLHNDQUErQjs7Ozs7SUFDL0Isa0RBQTZDOzs7OztJQUM3QyxxQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3Q2hpbGQsXG4gIGZvcndhcmRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgTmdab25lLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUQUIsIEVOVEVSLCBFU0NBUEUgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vb3ZlcmxheS9PdmVybGF5JztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IFNFQVJDSF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9TZWFyY2hCb3hFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNlYXJjaCcsXG4gIHByb3ZpZGVyczogW1NFQVJDSF9WQUxVRV9BQ0NFU1NPUl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8IS0tIFNFQVJDSCBJQ09OIC0tPlxuICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZmFiXCIgW2NvbG9yXT1cInRoZW1lXCIgW2ljb25dPVwiaWNvblwiIChjbGljayk9XCJzaG93U2VhcmNoKClcIiBbdG9vbHRpcF09XCJoaW50XCIgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1zZWFyY2gtZmFiXCI+PC9idXR0b24+XG4gICAgICAgIDwhLS0gU0VBUkNIIElOUFVUIC0tPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbYXR0ci5uYW1lXT1cIm5hbWVcIiBbYXR0ci52YWx1ZV09XCJkaXNwbGF5VmFsdWVcIiBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIChmb2N1cyk9XCJvbkZvY3VzKClcIiAoYmx1cik9XCJvbkJsdXIoKVwiIChrZXlkb3duKT1cIl9oYW5kbGVLZXlkb3duKCRldmVudClcIiAoaW5wdXQpPVwiX2hhbmRsZUlucHV0KCRldmVudClcIiAjaW5wdXQgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1zZWFyY2gtaW5wdXRcIi8+XG4gICAgICAgIDwhLS0gU0VBUkNIIE9WRVJMQVkgLS0+XG4gICAgICAgIDxub3ZvLW92ZXJsYXktdGVtcGxhdGUgW3BhcmVudF09XCJlbGVtZW50XCIgW2Nsb3NlT25TZWxlY3RdPVwiY2xvc2VPblNlbGVjdFwiIHBvc2l0aW9uPVwiYWJvdmUtYmVsb3dcIiAoc2VsZWN0KT1cImNsb3NlUGFuZWwoKVwiIChjbG9zaW5nKT1cIm9uQmx1cigpXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvbm92by1vdmVybGF5LXRlbXBsYXRlPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TZWFyY2hCb3hFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwdWJsaWMgaWNvbjogc3RyaW5nID0gJ3NlYXJjaCc7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nID0gJ1NlYXJjaC4uLic7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBhbHdheXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0aGVtZTogc3RyaW5nID0gJ3Bvc2l0aXZlJztcbiAgQElucHV0KClcbiAgcHVibGljIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGlzcGxheUZpZWxkOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkaXNwbGF5VmFsdWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgcHVibGljIGhpbnQ6IHN0cmluZztcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBzZWFyY2hDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZvY3VzZWQnKVxuICBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyB2YWx1ZTogYW55O1xuXG4gIC8qKiBWaWV3IC0+IG1vZGVsIGNhbGxiYWNrIGNhbGxlZCB3aGVuIHZhbHVlIGNoYW5nZXMgKi9cbiAgX29uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICAvKiogVmlldyAtPiBtb2RlbCBjYWxsYmFjayBjYWxsZWQgd2hlbiBhdXRvY29tcGxldGUgaGFzIGJlZW4gdG91Y2hlZCAqL1xuICBfb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgLyoqIEVsZW1lbnQgZm9yIHRoZSBwYW5lbCBjb250YWluaW5nIHRoZSBhdXRvY29tcGxldGUgb3B0aW9ucy4gKi9cbiAgQFZpZXdDaGlsZChOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50KVxuICBvdmVybGF5OiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0JylcbiAgaW5wdXQ6IGFueTtcblxuICBwcml2YXRlIGRlYm91bmNlU2VhcmNoQ2hhbmdlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSxcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfem9uZTogTmdab25lLFxuICApIHt9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNob3dGYXN0ZXJGaW5kXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIHNob3dzIHRoZSBwaWNrZXIgYW5kIGFkZHMgdGhlIGFjdGl2ZSBjbGFzcyAoZm9yIGFuaW1hdGlvbilcbiAgICovXG4gIHNob3dTZWFyY2goZXZlbnQ/OiBhbnksIGZvcmNlQ2xvc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgIC8vIFJlc2V0IHNlYXJjaFxuICAgICAgLy8gU2V0IGZvY3VzIG9uIHNlYXJjaFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfVxuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgIH0pO1xuICB9XG4gIG9uQmx1cigpIHtcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgfVxuICAvKiogQkVHSU46IENvbnZlbmllbnQgUGFuZWwgTWV0aG9kcy4gKi9cbiAgb3BlblBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheS5vcGVuUGFuZWwoKTtcbiAgfVxuICBjbG9zZVBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheS5jbG9zZVBhbmVsKCk7XG4gIH1cbiAgZ2V0IHBhbmVsT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5wYW5lbE9wZW47XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhbmVsT3BlbiB8fCB0aGlzLmFsd2F5c09wZW47XG4gIH1cbiAgLyoqIEVORDogQ29udmVuaWVudCBQYW5lbCBNZXRob2RzLiAqL1xuXG4gIF9oYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKChldmVudC5rZXlDb2RlID09PSBFU0NBUEUgfHwgZXZlbnQua2V5Q29kZSA9PT0gRU5URVIgfHwgZXZlbnQua2V5Q29kZSA9PT0gVEFCKSAmJiB0aGlzLnBhbmVsT3Blbikge1xuICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cbiAgX2hhbmRsZUlucHV0KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgdGhpcy5fb25DaGFuZ2UoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XG5cbiAgICAgIGlmICh0aGlzLmRlYm91bmNlU2VhcmNoQ2hhbmdlKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlU2VhcmNoQ2hhbmdlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVib3VuY2VTZWFyY2hDaGFuZ2UgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZWFyY2hDaGFuZ2VkLmVtaXQoKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XG4gICAgICB9LCA0MDApO1xuICAgIH1cbiAgfVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuICBwcml2YXRlIF9zZXRWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIGxldCB0b0Rpc3BsYXkgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUgJiYgdGhpcy5kaXNwbGF5RmllbGQpIHtcbiAgICAgIHRvRGlzcGxheSA9IHZhbHVlLmhhc093blByb3BlcnR5KHRoaXMuZGlzcGxheUZpZWxkKSA/IHZhbHVlW3RoaXMuZGlzcGxheUZpZWxkXSA6IHZhbHVlO1xuICAgIH1cbiAgICAvLyBTaW1wbHkgZmFsbGluZyBiYWNrIHRvIGFuIGVtcHR5IHN0cmluZyBpZiB0aGUgZGlzcGxheSB2YWx1ZSBpcyBmYWxzeSBkb2VzIG5vdCB3b3JrIHByb3Blcmx5LlxuICAgIC8vIFRoZSBkaXNwbGF5IHZhbHVlIGNhbiBhbHNvIGJlIHRoZSBudW1iZXIgemVybyBhbmQgc2hvdWxkbid0IGZhbGwgYmFjayB0byBhbiBlbXB0eSBzdHJpbmcuXG4gICAgdGhpcy5kaXNwbGF5VmFsdWUgPSB0b0Rpc3BsYXkgPyB0b0Rpc3BsYXkgOiAnJztcbiAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLmRpc3BsYXlWYWx1ZTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBjbG9zZXMgdGhlIHBhbmVsLCBhbmQgaWYgYSB2YWx1ZSBpcyBzcGVjaWZpZWQsIGFsc28gc2V0cyB0aGUgYXNzb2NpYXRlZFxuICAgKiBjb250cm9sIHRvIHRoYXQgdmFsdWUuIEl0IHdpbGwgYWxzbyBtYXJrIHRoZSBjb250cm9sIGFzIGRpcnR5IGlmIHRoaXMgaW50ZXJhY3Rpb25cbiAgICogc3RlbW1lZCBmcm9tIHRoZSB1c2VyLlxuICAgKi9cbiAgcHVibGljIHNldFZhbHVlQW5kQ2xvc2UoZXZlbnQ6IGFueSB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQudmFsdWUpIHtcbiAgICAgIHRoaXMuX3NldFZhbHVlKGV2ZW50LnZhbHVlKTtcbiAgICAgIHRoaXMuX29uQ2hhbmdlKGV2ZW50LnZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYW55IHByZXZpb3VzIHNlbGVjdGVkIG9wdGlvbiBhbmQgZW1pdCBhIHNlbGVjdGlvbiBjaGFuZ2UgZXZlbnQgZm9yIHRoaXMgb3B0aW9uXG4gICAqL1xuICBwdWJsaWMgY2xlYXJWYWx1ZShza2lwOiBhbnkpIHtcbiAgICB0aGlzLndyaXRlVmFsdWUobnVsbCk7XG4gICAgdGhpcy5fb25DaGFuZ2UobnVsbCk7XG4gIH1cbn1cbiJdfQ==