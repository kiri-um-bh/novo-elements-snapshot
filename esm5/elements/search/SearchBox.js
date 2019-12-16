/**
 * @fileoverview added by tsickle
 * Generated from: elements/search/SearchBox.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "\n    <!-- SEARCH ICON -->\n    <button\n      theme=\"fab\"\n      [color]=\"theme\"\n      [icon]=\"icon\"\n      (click)=\"showSearch()\"\n      [tooltip]=\"hint\"\n      tooltipPosition=\"bottom\"\n      data-automation-id=\"novo-search-fab\"\n    ></button>\n    <!-- SEARCH INPUT -->\n    <input\n      type=\"text\"\n      [attr.name]=\"name\"\n      [attr.value]=\"displayValue\"\n      [attr.placeholder]=\"placeholder\"\n      (focus)=\"onFocus()\"\n      (blur)=\"onBlur()\"\n      (keydown)=\"_handleKeydown($event)\"\n      (input)=\"_handleInput($event)\"\n      #input\n      data-automation-id=\"novo-search-input\"\n    />\n    <!-- SEARCH OVERLAY -->\n    <novo-overlay-template\n      [parent]=\"element\"\n      [closeOnSelect]=\"closeOnSelect\"\n      position=\"above-below\"\n      (select)=\"closePanel()\"\n      (closing)=\"onBlur()\"\n    >\n      <ng-content></ng-content>\n    </novo-overlay-template>\n  "
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
        overlay: [{ type: ViewChild, args: [NovoOverlayTemplateComponent, { static: false },] }],
        input: [{ type: ViewChild, args: ['input', { static: true },] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQm94LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NlYXJjaC9TZWFyY2hCb3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTix1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUUzRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7O0lBRy9ELHFCQUFxQixHQUFHO0lBQzVCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsRUFBQztJQUNuRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBRUQ7SUE4RUUsOEJBQ1MsT0FBbUIsRUFDbkIsTUFBd0IsRUFDdkIsa0JBQXFDLEVBQ3JDLEtBQWE7UUFIZCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3ZCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQXRDaEIsU0FBSSxHQUFXLFFBQVEsQ0FBQztRQUV4QixnQkFBVyxHQUFXLFdBQVcsQ0FBQztRQUVsQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCLFVBQUssR0FBVyxVQUFVLENBQUM7UUFFM0Is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MENBQXNCOzs7OztJQUd0Qix1Q0FDYTs7SUFDYixxQ0FDVzs7Ozs7SUFFWCxvREFBa0M7O0lBR2hDLHVDQUEwQjs7SUFDMUIsc0NBQStCOzs7OztJQUMvQixrREFBNkM7Ozs7O0lBQzdDLHFDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdDaGlsZCxcbiAgZm9yd2FyZFJlZixcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBOZ1pvbmUsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRBQiwgRU5URVIsIEVTQ0FQRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9vdmVybGF5L092ZXJsYXknO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgU0VBUkNIX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b1NlYXJjaEJveEVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2VhcmNoJyxcbiAgcHJvdmlkZXJzOiBbU0VBUkNIX1ZBTFVFX0FDQ0VTU09SXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLSBTRUFSQ0ggSUNPTiAtLT5cbiAgICA8YnV0dG9uXG4gICAgICB0aGVtZT1cImZhYlwiXG4gICAgICBbY29sb3JdPVwidGhlbWVcIlxuICAgICAgW2ljb25dPVwiaWNvblwiXG4gICAgICAoY2xpY2spPVwic2hvd1NlYXJjaCgpXCJcbiAgICAgIFt0b29sdGlwXT1cImhpbnRcIlxuICAgICAgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tXCJcbiAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tc2VhcmNoLWZhYlwiXG4gICAgPjwvYnV0dG9uPlxuICAgIDwhLS0gU0VBUkNIIElOUFVUIC0tPlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgW2F0dHIubmFtZV09XCJuYW1lXCJcbiAgICAgIFthdHRyLnZhbHVlXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAoZm9jdXMpPVwib25Gb2N1cygpXCJcbiAgICAgIChibHVyKT1cIm9uQmx1cigpXCJcbiAgICAgIChrZXlkb3duKT1cIl9oYW5kbGVLZXlkb3duKCRldmVudClcIlxuICAgICAgKGlucHV0KT1cIl9oYW5kbGVJbnB1dCgkZXZlbnQpXCJcbiAgICAgICNpbnB1dFxuICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1zZWFyY2gtaW5wdXRcIlxuICAgIC8+XG4gICAgPCEtLSBTRUFSQ0ggT1ZFUkxBWSAtLT5cbiAgICA8bm92by1vdmVybGF5LXRlbXBsYXRlXG4gICAgICBbcGFyZW50XT1cImVsZW1lbnRcIlxuICAgICAgW2Nsb3NlT25TZWxlY3RdPVwiY2xvc2VPblNlbGVjdFwiXG4gICAgICBwb3NpdGlvbj1cImFib3ZlLWJlbG93XCJcbiAgICAgIChzZWxlY3QpPVwiY2xvc2VQYW5lbCgpXCJcbiAgICAgIChjbG9zaW5nKT1cIm9uQmx1cigpXCJcbiAgICA+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9ub3ZvLW92ZXJsYXktdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TZWFyY2hCb3hFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwdWJsaWMgaWNvbjogc3RyaW5nID0gJ3NlYXJjaCc7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nID0gJ1NlYXJjaC4uLic7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBhbHdheXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0aGVtZTogc3RyaW5nID0gJ3Bvc2l0aXZlJztcbiAgQElucHV0KClcbiAgcHVibGljIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGlzcGxheUZpZWxkOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkaXNwbGF5VmFsdWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgcHVibGljIGhpbnQ6IHN0cmluZztcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBzZWFyY2hDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZvY3VzZWQnKVxuICBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyB2YWx1ZTogYW55O1xuXG4gIC8qKiBWaWV3IC0+IG1vZGVsIGNhbGxiYWNrIGNhbGxlZCB3aGVuIHZhbHVlIGNoYW5nZXMgKi9cbiAgX29uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICAvKiogVmlldyAtPiBtb2RlbCBjYWxsYmFjayBjYWxsZWQgd2hlbiBhdXRvY29tcGxldGUgaGFzIGJlZW4gdG91Y2hlZCAqL1xuICBfb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgLyoqIEVsZW1lbnQgZm9yIHRoZSBwYW5lbCBjb250YWluaW5nIHRoZSBhdXRvY29tcGxldGUgb3B0aW9ucy4gKi9cbiAgQFZpZXdDaGlsZChOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgb3ZlcmxheTogYW55O1xuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gIGlucHV0OiBhbnk7XG5cbiAgcHJpdmF0ZSBkZWJvdW5jZVNlYXJjaENoYW5nZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX3pvbmU6IE5nWm9uZSxcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzaG93RmFzdGVyRmluZFxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzaG93cyB0aGUgcGlja2VyIGFuZCBhZGRzIHRoZSBhY3RpdmUgY2xhc3MgKGZvciBhbmltYXRpb24pXG4gICAqL1xuICBzaG93U2VhcmNoKGV2ZW50PzogYW55LCBmb3JjZUNsb3NlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMucGFuZWxPcGVuKSB7XG4gICAgICAvLyBSZXNldCBzZWFyY2hcbiAgICAgIC8vIFNldCBmb2N1cyBvbiBzZWFyY2hcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH1cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLl96b25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICB9KTtcbiAgfVxuICBvbkJsdXIoKSB7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gIH1cbiAgLyoqIEJFR0lOOiBDb252ZW5pZW50IFBhbmVsIE1ldGhvZHMuICovXG4gIG9wZW5QYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXkub3BlblBhbmVsKCk7XG4gIH1cbiAgY2xvc2VQYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXkuY2xvc2VQYW5lbCgpO1xuICB9XG4gIGdldCBwYW5lbE9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkucGFuZWxPcGVuO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYW5lbE9wZW4gfHwgdGhpcy5hbHdheXNPcGVuO1xuICB9XG4gIC8qKiBFTkQ6IENvbnZlbmllbnQgUGFuZWwgTWV0aG9kcy4gKi9cblxuICBfaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICgoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFIHx8IGV2ZW50LmtleUNvZGUgPT09IEVOVEVSIHx8IGV2ZW50LmtleUNvZGUgPT09IFRBQikgJiYgdGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG4gIF9oYW5kbGVJbnB1dChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xuXG4gICAgICBpZiAodGhpcy5kZWJvdW5jZVNlYXJjaENoYW5nZSkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVNlYXJjaENoYW5nZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRlYm91bmNlU2VhcmNoQ2hhbmdlID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2VhcmNoQ2hhbmdlZC5lbWl0KChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xuICAgICAgfSwgNDAwKTtcbiAgICB9XG4gIH1cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fc2V0VmFsdWUodmFsdWUpO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KSB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cbiAgcHJpdmF0ZSBfc2V0VmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICBsZXQgdG9EaXNwbGF5ID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlICYmIHRoaXMuZGlzcGxheUZpZWxkKSB7XG4gICAgICB0b0Rpc3BsYXkgPSB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSh0aGlzLmRpc3BsYXlGaWVsZCkgPyB2YWx1ZVt0aGlzLmRpc3BsYXlGaWVsZF0gOiB2YWx1ZTtcbiAgICB9XG4gICAgLy8gU2ltcGx5IGZhbGxpbmcgYmFjayB0byBhbiBlbXB0eSBzdHJpbmcgaWYgdGhlIGRpc3BsYXkgdmFsdWUgaXMgZmFsc3kgZG9lcyBub3Qgd29yayBwcm9wZXJseS5cbiAgICAvLyBUaGUgZGlzcGxheSB2YWx1ZSBjYW4gYWxzbyBiZSB0aGUgbnVtYmVyIHplcm8gYW5kIHNob3VsZG4ndCBmYWxsIGJhY2sgdG8gYW4gZW1wdHkgc3RyaW5nLlxuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdG9EaXNwbGF5ID8gdG9EaXNwbGF5IDogJyc7XG4gICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5kaXNwbGF5VmFsdWU7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgY2xvc2VzIHRoZSBwYW5lbCwgYW5kIGlmIGEgdmFsdWUgaXMgc3BlY2lmaWVkLCBhbHNvIHNldHMgdGhlIGFzc29jaWF0ZWRcbiAgICogY29udHJvbCB0byB0aGF0IHZhbHVlLiBJdCB3aWxsIGFsc28gbWFyayB0aGUgY29udHJvbCBhcyBkaXJ0eSBpZiB0aGlzIGludGVyYWN0aW9uXG4gICAqIHN0ZW1tZWQgZnJvbSB0aGUgdXNlci5cbiAgICovXG4gIHB1YmxpYyBzZXRWYWx1ZUFuZENsb3NlKGV2ZW50OiBhbnkgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LnZhbHVlKSB7XG4gICAgICB0aGlzLl9zZXRWYWx1ZShldmVudC52YWx1ZSk7XG4gICAgICB0aGlzLl9vbkNoYW5nZShldmVudC52YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFueSBwcmV2aW91cyBzZWxlY3RlZCBvcHRpb24gYW5kIGVtaXQgYSBzZWxlY3Rpb24gY2hhbmdlIGV2ZW50IGZvciB0aGlzIG9wdGlvblxuICAgKi9cbiAgcHVibGljIGNsZWFyVmFsdWUoc2tpcDogYW55KSB7XG4gICAgdGhpcy53cml0ZVZhbHVlKG51bGwpO1xuICAgIHRoaXMuX29uQ2hhbmdlKG51bGwpO1xuICB9XG59XG4iXX0=