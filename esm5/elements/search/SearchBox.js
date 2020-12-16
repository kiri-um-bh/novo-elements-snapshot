/**
 * @fileoverview added by tsickle
 * Generated from: elements/search/SearchBox.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { ENTER, ESCAPE, TAB } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, HostBinding, Input, NgZone, Output, ViewChild, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NovoLabelService } from '../../services/novo-label-service';
// APP
import { NovoOverlayTemplateComponent } from '../overlay/Overlay';
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
        this.position = 'bottom-left';
        this.placeholder = 'Search...';
        this.alwaysOpen = false;
        this.theme = 'positive';
        this.closeOnSelect = true;
        this.keepOpen = false;
        this.searchChanged = new EventEmitter();
        this.applySearch = new EventEmitter();
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
        if (!this.keepOpen || !this.panelOpen) {
            this.focused = false;
        }
    };
    /**
     * @return {?}
     */
    NovoSearchBoxElement.prototype.onSelect = /**
     * @return {?}
     */
    function () {
        if (!this.keepOpen) {
            this.closePanel();
        }
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
        this.focused = false;
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
            if (event.keyCode === ENTER) {
                this.applySearch.emit(event);
            }
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
                    template: "\n    <!-- SEARCH ICON -->\n    <button\n      theme=\"fab\"\n      [color]=\"theme\"\n      [icon]=\"icon\"\n      (click)=\"showSearch()\"\n      [tooltip]=\"hint\"\n      tooltipPosition=\"bottom\"\n      data-automation-id=\"novo-search-fab\"\n    ></button>\n    <!-- SEARCH INPUT -->\n    <input\n      type=\"text\"\n      [attr.name]=\"name\"\n      [attr.value]=\"displayValue\"\n      [attr.placeholder]=\"placeholder\"\n      (focus)=\"onFocus()\"\n      (blur)=\"onBlur()\"\n      (keydown)=\"_handleKeydown($event)\"\n      (input)=\"_handleInput($event)\"\n      #input\n      data-automation-id=\"novo-search-input\"\n    />\n    <!-- SEARCH OVERLAY -->\n    <novo-overlay-template\n      [parent]=\"element\"\n      [closeOnSelect]=\"closeOnSelect\"\n      [position]=\"position\"\n      (select)=\"onSelect()\"\n      (closing)=\"onBlur()\"\n    >\n      <ng-content></ng-content>\n    </novo-overlay-template>\n  "
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
        position: [{ type: Input }],
        placeholder: [{ type: Input }],
        alwaysOpen: [{ type: Input }, { type: HostBinding, args: ['class.always-open',] }],
        theme: [{ type: Input }],
        closeOnSelect: [{ type: Input }],
        displayField: [{ type: Input }],
        displayValue: [{ type: Input }],
        hint: [{ type: Input }],
        keepOpen: [{ type: Input }],
        searchChanged: [{ type: Output }],
        applySearch: [{ type: Output }],
        focused: [{ type: HostBinding, args: ['class.focused',] }],
        overlay: [{ type: ViewChild, args: [NovoOverlayTemplateComponent, { static: true },] }],
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
    NovoSearchBoxElement.prototype.position;
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
    NovoSearchBoxElement.prototype.keepOpen;
    /** @type {?} */
    NovoSearchBoxElement.prototype.searchChanged;
    /** @type {?} */
    NovoSearchBoxElement.prototype.applySearch;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQm94LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NlYXJjaC9TZWFyY2hCb3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQUVyRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0lBRzVELHFCQUFxQixHQUFHO0lBQzVCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsRUFBQztJQUNuRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBRUQ7SUFxRkUsOEJBQ1MsT0FBbUIsRUFDbkIsTUFBd0IsRUFDdkIsa0JBQXFDLEVBQ3JDLEtBQWE7UUFIZCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3ZCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQTdDaEIsU0FBSSxHQUFXLFFBQVEsQ0FBQztRQUV4QixhQUFRLEdBQVcsYUFBYSxDQUFDO1FBRWpDLGdCQUFXLEdBQVcsV0FBVyxDQUFDO1FBR2xDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIs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S0FBSzsrQkFFTCxLQUFLO3VCQUVMLEtBQUs7MkJBRUwsS0FBSztnQ0FFTCxNQUFNOzhCQUVOLE1BQU07MEJBRU4sV0FBVyxTQUFDLGVBQWU7MEJBVTNCLFNBQVMsU0FBQyw0QkFBNEIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7d0JBRXhELFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3lCQXVEbkMsV0FBVyxTQUFDLGNBQWM7O0lBcUU3QiwyQkFBQztDQUFBLEFBNU1ELElBNE1DO1NBcEtZLG9CQUFvQjs7O0lBQy9CLG9DQUNvQjs7SUFDcEIsb0NBQytCOztJQUMvQix3Q0FDd0M7O0lBQ3hDLDJDQUN5Qzs7SUFDekMsMENBRW1DOztJQUNuQyxxQ0FDa0M7O0lBQ2xDLDZDQUNxQzs7SUFDckMsNENBQzRCOztJQUM1Qiw0Q0FDNEI7O0lBQzVCLG9DQUNvQjs7SUFDcEIsd0NBQ2lDOztJQUNqQyw2Q0FDd0U7O0lBQ3hFLDJDQUNvRjs7SUFDcEYsdUNBQ3lCOztJQUN6QixxQ0FBa0I7Ozs7O0lBR2xCLHlDQUEyQzs7Ozs7SUFFM0MsMENBQXNCOzs7OztJQUd0Qix1Q0FDYTs7SUFDYixxQ0FDVzs7Ozs7SUFFWCxvREFBa0M7O0lBR2hDLHVDQUEwQjs7SUFDMUIsc0NBQStCOzs7OztJQUMvQixrREFBNkM7Ozs7O0lBQzdDLHFDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgRU5URVIsIEVTQ0FQRSwgVEFCIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL292ZXJsYXkvT3ZlcmxheSc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgU0VBUkNIX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b1NlYXJjaEJveEVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2VhcmNoJyxcbiAgcHJvdmlkZXJzOiBbU0VBUkNIX1ZBTFVFX0FDQ0VTU09SXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLSBTRUFSQ0ggSUNPTiAtLT5cbiAgICA8YnV0dG9uXG4gICAgICB0aGVtZT1cImZhYlwiXG4gICAgICBbY29sb3JdPVwidGhlbWVcIlxuICAgICAgW2ljb25dPVwiaWNvblwiXG4gICAgICAoY2xpY2spPVwic2hvd1NlYXJjaCgpXCJcbiAgICAgIFt0b29sdGlwXT1cImhpbnRcIlxuICAgICAgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tXCJcbiAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tc2VhcmNoLWZhYlwiXG4gICAgPjwvYnV0dG9uPlxuICAgIDwhLS0gU0VBUkNIIElOUFVUIC0tPlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgW2F0dHIubmFtZV09XCJuYW1lXCJcbiAgICAgIFthdHRyLnZhbHVlXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAoZm9jdXMpPVwib25Gb2N1cygpXCJcbiAgICAgIChibHVyKT1cIm9uQmx1cigpXCJcbiAgICAgIChrZXlkb3duKT1cIl9oYW5kbGVLZXlkb3duKCRldmVudClcIlxuICAgICAgKGlucHV0KT1cIl9oYW5kbGVJbnB1dCgkZXZlbnQpXCJcbiAgICAgICNpbnB1dFxuICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1zZWFyY2gtaW5wdXRcIlxuICAgIC8+XG4gICAgPCEtLSBTRUFSQ0ggT1ZFUkxBWSAtLT5cbiAgICA8bm92by1vdmVybGF5LXRlbXBsYXRlXG4gICAgICBbcGFyZW50XT1cImVsZW1lbnRcIlxuICAgICAgW2Nsb3NlT25TZWxlY3RdPVwiY2xvc2VPblNlbGVjdFwiXG4gICAgICBbcG9zaXRpb25dPVwicG9zaXRpb25cIlxuICAgICAgKHNlbGVjdCk9XCJvblNlbGVjdCgpXCJcbiAgICAgIChjbG9zaW5nKT1cIm9uQmx1cigpXCJcbiAgICA+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9ub3ZvLW92ZXJsYXktdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TZWFyY2hCb3hFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwdWJsaWMgaWNvbjogc3RyaW5nID0gJ3NlYXJjaCc7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwb3NpdGlvbjogc3RyaW5nID0gJ2JvdHRvbS1sZWZ0JztcbiAgQElucHV0KClcbiAgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnU2VhcmNoLi4uJztcbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbHdheXMtb3BlbicpXG4gIHB1YmxpYyBhbHdheXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0aGVtZTogc3RyaW5nID0gJ3Bvc2l0aXZlJztcbiAgQElucHV0KClcbiAgcHVibGljIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGlzcGxheUZpZWxkOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkaXNwbGF5VmFsdWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgcHVibGljIGhpbnQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgcHVibGljIGtlZXBPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc2VhcmNoQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBhcHBseVNlYXJjaDogRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZvY3VzZWQnKVxuICBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyB2YWx1ZTogYW55O1xuXG4gIC8qKiBWaWV3IC0+IG1vZGVsIGNhbGxiYWNrIGNhbGxlZCB3aGVuIHZhbHVlIGNoYW5nZXMgKi9cbiAgX29uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICAvKiogVmlldyAtPiBtb2RlbCBjYWxsYmFjayBjYWxsZWQgd2hlbiBhdXRvY29tcGxldGUgaGFzIGJlZW4gdG91Y2hlZCAqL1xuICBfb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgLyoqIEVsZW1lbnQgZm9yIHRoZSBwYW5lbCBjb250YWluaW5nIHRoZSBhdXRvY29tcGxldGUgb3B0aW9ucy4gKi9cbiAgQFZpZXdDaGlsZChOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBvdmVybGF5OiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgaW5wdXQ6IGFueTtcblxuICBwcml2YXRlIGRlYm91bmNlU2VhcmNoQ2hhbmdlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSxcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfem9uZTogTmdab25lLFxuICApIHt9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNob3dGYXN0ZXJGaW5kXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIHNob3dzIHRoZSBwaWNrZXIgYW5kIGFkZHMgdGhlIGFjdGl2ZSBjbGFzcyAoZm9yIGFuaW1hdGlvbilcbiAgICovXG4gIHNob3dTZWFyY2goZXZlbnQ/OiBhbnksIGZvcmNlQ2xvc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgIC8vIFJlc2V0IHNlYXJjaFxuICAgICAgLy8gU2V0IGZvY3VzIG9uIHNlYXJjaFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICB9XG4gIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMub3BlblBhbmVsKCk7XG4gICAgfSk7XG4gIH1cbiAgb25CbHVyKCkge1xuICAgIGlmICghdGhpcy5rZWVwT3BlbiB8fCAhdGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBvblNlbGVjdCgpIHtcbiAgICBpZiAoIXRoaXMua2VlcE9wZW4pIHtcbiAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgIH1cbiAgfVxuICAvKiogQkVHSU46IENvbnZlbmllbnQgUGFuZWwgTWV0aG9kcy4gKi9cbiAgb3BlblBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheS5vcGVuUGFuZWwoKTtcbiAgfVxuICBjbG9zZVBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheS5jbG9zZVBhbmVsKCk7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gIH1cbiAgZ2V0IHBhbmVsT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5wYW5lbE9wZW47XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhbmVsT3BlbiB8fCB0aGlzLmFsd2F5c09wZW47XG4gIH1cbiAgLyoqIEVORDogQ29udmVuaWVudCBQYW5lbCBNZXRob2RzLiAqL1xuXG4gIF9oYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKChldmVudC5rZXlDb2RlID09PSBFU0NBUEUgfHwgZXZlbnQua2V5Q29kZSA9PT0gRU5URVIgfHwgZXZlbnQua2V5Q29kZSA9PT0gVEFCKSAmJiB0aGlzLnBhbmVsT3Blbikge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVOVEVSKSB7XG4gICAgICAgIHRoaXMuYXBwbHlTZWFyY2guZW1pdChldmVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuICBfaGFuZGxlSW5wdXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICB0aGlzLl9vbkNoYW5nZSgoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcblxuICAgICAgaWYgKHRoaXMuZGVib3VuY2VTZWFyY2hDaGFuZ2UpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VTZWFyY2hDaGFuZ2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWJvdW5jZVNlYXJjaENoYW5nZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNlYXJjaENoYW5nZWQuZW1pdCgoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcbiAgICAgIH0sIDQwMCk7XG4gICAgfVxuICB9XG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX3NldFZhbHVlKHZhbHVlKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSkge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG4gIHByaXZhdGUgX3NldFZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgbGV0IHRvRGlzcGxheSA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSAmJiB0aGlzLmRpc3BsYXlGaWVsZCkge1xuICAgICAgdG9EaXNwbGF5ID0gdmFsdWUuaGFzT3duUHJvcGVydHkodGhpcy5kaXNwbGF5RmllbGQpID8gdmFsdWVbdGhpcy5kaXNwbGF5RmllbGRdIDogdmFsdWU7XG4gICAgfVxuICAgIC8vIFNpbXBseSBmYWxsaW5nIGJhY2sgdG8gYW4gZW1wdHkgc3RyaW5nIGlmIHRoZSBkaXNwbGF5IHZhbHVlIGlzIGZhbHN5IGRvZXMgbm90IHdvcmsgcHJvcGVybHkuXG4gICAgLy8gVGhlIGRpc3BsYXkgdmFsdWUgY2FuIGFsc28gYmUgdGhlIG51bWJlciB6ZXJvIGFuZCBzaG91bGRuJ3QgZmFsbCBiYWNrIHRvIGFuIGVtcHR5IHN0cmluZy5cbiAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHRvRGlzcGxheSA/IHRvRGlzcGxheSA6ICcnO1xuICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuZGlzcGxheVZhbHVlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGNsb3NlcyB0aGUgcGFuZWwsIGFuZCBpZiBhIHZhbHVlIGlzIHNwZWNpZmllZCwgYWxzbyBzZXRzIHRoZSBhc3NvY2lhdGVkXG4gICAqIGNvbnRyb2wgdG8gdGhhdCB2YWx1ZS4gSXQgd2lsbCBhbHNvIG1hcmsgdGhlIGNvbnRyb2wgYXMgZGlydHkgaWYgdGhpcyBpbnRlcmFjdGlvblxuICAgKiBzdGVtbWVkIGZyb20gdGhlIHVzZXIuXG4gICAqL1xuICBwdWJsaWMgc2V0VmFsdWVBbmRDbG9zZShldmVudDogYW55IHwgbnVsbCk6IHZvaWQge1xuICAgIGlmIChldmVudCAmJiBldmVudC52YWx1ZSkge1xuICAgICAgdGhpcy5fc2V0VmFsdWUoZXZlbnQudmFsdWUpO1xuICAgICAgdGhpcy5fb25DaGFuZ2UoZXZlbnQudmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbnkgcHJldmlvdXMgc2VsZWN0ZWQgb3B0aW9uIGFuZCBlbWl0IGEgc2VsZWN0aW9uIGNoYW5nZSBldmVudCBmb3IgdGhpcyBvcHRpb25cbiAgICovXG4gIHB1YmxpYyBjbGVhclZhbHVlKHNraXA6IGFueSkge1xuICAgIHRoaXMud3JpdGVWYWx1ZShudWxsKTtcbiAgICB0aGlzLl9vbkNoYW5nZShudWxsKTtcbiAgfVxufVxuIl19