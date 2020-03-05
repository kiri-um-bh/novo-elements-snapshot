/**
 * @fileoverview added by tsickle
 * Generated from: elements/tiles/Tiles.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, Input, Output, EventEmitter, forwardRef, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
// APP
import { Helpers } from '../../utils/Helpers';
// Value accessor for the component (supports ngModel)
/** @type {?} */
var TILES_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NovoTilesElement; })),
    multi: true,
};
var NovoTilesElement = /** @class */ (function () {
    function NovoTilesElement(element, ref) {
        this.element = element;
        this.ref = ref;
        this.name = new Date().getTime().toString();
        this.disabled = false;
        this.onChange = new EventEmitter();
        this.onSelectedOptionClick = new EventEmitter();
        this.onDisabledOptionClick = new EventEmitter();
        this._options = [];
        this.activeTile = null;
        this.state = 'inactive';
        this.focused = false;
        this.onModelChange = (/**
         * @return {?}
         */
        function () { });
        this.onModelTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @param {?} focus
     * @return {?}
     */
    NovoTilesElement.prototype.setFocus = /**
     * @param {?} focus
     * @return {?}
     */
    function (focus) {
        this.focused = focus;
    };
    /**
     * @return {?}
     */
    NovoTilesElement.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.name = this.name || '';
        this.setupOptions();
    };
    /**
     * @param {?} change
     * @return {?}
     */
    NovoTilesElement.prototype.ngOnChanges = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        if (change['options'] && change['options'].currentValue && !change['options'].firstChange) {
            this.name = this.name || '';
            this._options = [];
            this.setupOptions();
        }
    };
    /**
     * @return {?}
     */
    NovoTilesElement.prototype.setupOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.options && this.options.length && (this.options[0].value === undefined || this.options[0].value === null)) {
            this._options = this.options.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                /** @type {?} */
                var item = { value: x, label: x, checked: _this.model === x };
                if (item.checked) {
                    _this.setTile(item);
                }
                return item;
            }));
        }
        else {
            this._options = this.options.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                x.checked = _this.model === x.value || (_this.model && _this.model.id === x.value);
                if (x.checked) {
                    _this.setTile(x);
                }
                return x;
            }));
        }
        this.ref.markForCheck();
    };
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    NovoTilesElement.prototype.select = /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    function (event, item) {
        var e_1, _a;
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        if (!item.disabled) {
            if (item.checked) {
                this.onSelectedOptionClick.emit(item);
                return;
            }
            try {
                for (var _b = tslib_1.__values(this._options), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var option = _c.value;
                    option.checked = false;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            item.checked = !item.checked;
            this.onChange.emit(item.value);
            this.onModelChange(item.value);
            this.setTile(item);
            this.model = item.value;
        }
        else {
            this.onDisabledOptionClick.emit(item);
        }
        this.ref.markForCheck();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NovoTilesElement.prototype.setTile = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item) {
            this.activeTile = item.value;
            this.moveTile();
        }
    };
    /**
     * @return {?}
     */
    NovoTilesElement.prototype.moveTile = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var ind = _this.element.nativeElement.querySelector('.active-indicator');
            /** @type {?} */
            var el = _this.element.nativeElement.querySelector('.tile.active');
            if (ind && el) {
                /** @type {?} */
                var w = el.clientWidth;
                /** @type {?} */
                var left = el.offsetLeft - el.offsetTop;
                ind.style.width = "calc(" + w + "px + 0.32em)";
                ind.style.left = left + "px";
                _this.state = 'active';
                _this.ref.markForCheck();
            }
        }));
    };
    /**
     * @param {?} model
     * @return {?}
     */
    NovoTilesElement.prototype.writeValue = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        this.model = model;
        if (!Helpers.isBlank(model)) {
            this.setupOptions();
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoTilesElement.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoTilesElement.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    NovoTilesElement.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.disabled = disabled;
    };
    NovoTilesElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-tiles',
                    providers: [TILES_VALUE_ACCESSOR],
                    template: "\n    <div class=\"tile-container\" [class.active]=\"focused\" [class.disabled]=\"disabled\">\n      <div\n        class=\"tile\"\n        *ngFor=\"let option of _options; let i = index\"\n        [ngClass]=\"{ active: option.checked, disabled: option.disabled }\"\n        (click)=\"select($event, option)\"\n        [attr.data-automation-id]=\"option.label || option\"\n      >\n        <input\n          class=\"tiles-input\"\n          [name]=\"name\"\n          type=\"radio\"\n          [value]=\"option.checked || option.value || option\"\n          [attr.id]=\"name + i\"\n          (change)=\"select($event, option)\"\n          (focus)=\"setFocus(true)\"\n          (blur)=\"setFocus(false)\"\n          [disabled]=\"disabled\"\n        />\n        <label [attr.for]=\"name + i\" [attr.data-automation-id]=\"option.label || option\">\n          {{ option.label || option }}\n        </label>\n      </div>\n      <span class=\"active-indicator\" [@tileState]=\"state\" [hidden]=\"activeTile === undefined || activeTile === null\"></span>\n    </div>\n  ",
                    animations: [
                        trigger('tileState', [
                            state('inactive', style({
                                opacity: '0',
                            })),
                            state('active', style({
                                opacity: '1',
                            })),
                            transition('inactive => active', animate('200ms ease-in')),
                            transition('active => inactive', animate('200ms ease-out')),
                        ]),
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NovoTilesElement.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    NovoTilesElement.propDecorators = {
        name: [{ type: Input }],
        options: [{ type: Input }],
        required: [{ type: Input }],
        disabled: [{ type: Input, args: ['controlDisabled',] }],
        onChange: [{ type: Output }],
        onSelectedOptionClick: [{ type: Output }],
        onDisabledOptionClick: [{ type: Output }]
    };
    return NovoTilesElement;
}());
export { NovoTilesElement };
if (false) {
    /** @type {?} */
    NovoTilesElement.prototype.name;
    /** @type {?} */
    NovoTilesElement.prototype.options;
    /** @type {?} */
    NovoTilesElement.prototype.required;
    /** @type {?} */
    NovoTilesElement.prototype.disabled;
    /** @type {?} */
    NovoTilesElement.prototype.onChange;
    /** @type {?} */
    NovoTilesElement.prototype.onSelectedOptionClick;
    /** @type {?} */
    NovoTilesElement.prototype.onDisabledOptionClick;
    /** @type {?} */
    NovoTilesElement.prototype._options;
    /** @type {?} */
    NovoTilesElement.prototype.activeTile;
    /** @type {?} */
    NovoTilesElement.prototype.state;
    /** @type {?} */
    NovoTilesElement.prototype.focused;
    /** @type {?} */
    NovoTilesElement.prototype.model;
    /** @type {?} */
    NovoTilesElement.prototype.onModelChange;
    /** @type {?} */
    NovoTilesElement.prototype.onModelTouched;
    /**
     * @type {?}
     * @private
     */
    NovoTilesElement.prototype.element;
    /**
     * @type {?}
     * @private
     */
    NovoTilesElement.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlsZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGlsZXMvVGlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLFVBQVUsRUFHVixpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUVqRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztJQUd4QyxvQkFBb0IsR0FBRztJQUMzQixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLEVBQUM7SUFDL0MsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQUVEO0lBMkVFLDBCQUFvQixPQUFtQixFQUFVLEdBQXNCO1FBQW5ELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXZCdkUsU0FBSSxHQUFXLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFNL0MsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakQsMEJBQXFCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUQsMEJBQXFCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUQsYUFBUSxHQUFlLEVBQUUsQ0FBQztRQUNuQixlQUFVLEdBQVEsSUFBSSxDQUFD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Q0FDSDs0QkFDRCxLQUFLLENBQ0gsUUFBUSxFQUNSLEtBQUssQ0FBQztnQ0FDSixPQUFPLEVBQUUsR0FBRzs2QkFDYixDQUFDLENBQ0g7NEJBQ0QsVUFBVSxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzs0QkFDMUQsVUFBVSxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3lCQUM1RCxDQUFDO3FCQUNIO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFuRUMsVUFBVTtnQkFHVixpQkFBaUI7Ozt1QkFrRWhCLEtBQUs7MEJBRUwsS0FBSzsyQkFFTCxLQUFLOzJCQUVMLEtBQUssU0FBQyxpQkFBaUI7MkJBRXZCLE1BQU07d0NBRU4sTUFBTTt3Q0FFTixNQUFNOztJQXVIVCx1QkFBQztDQUFBLEFBdExELElBc0xDO1NBcElZLGdCQUFnQjs7O0lBQzNCLGdDQUMrQzs7SUFDL0MsbUNBQ2E7O0lBQ2Isb0NBQ2tCOztJQUNsQixvQ0FDMEI7O0lBQzFCLG9DQUNpRDs7SUFDakQsaURBQzhEOztJQUM5RCxpREFDOEQ7O0lBRTlELG9DQUEwQjs7SUFDMUIsc0NBQThCOztJQUM5QixpQ0FBa0M7O0lBQ2xDLG1DQUFnQzs7SUFFaEMsaUNBQVc7O0lBQ1gseUNBQW1DOztJQUNuQywwQ0FBb0M7Ozs7O0lBRXhCLG1DQUEyQjs7Ozs7SUFBRSwrQkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBFbGVtZW50UmVmLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IFRJTEVTX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b1RpbGVzRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10aWxlcycsXG4gIHByb3ZpZGVyczogW1RJTEVTX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwidGlsZS1jb250YWluZXJcIiBbY2xhc3MuYWN0aXZlXT1cImZvY3VzZWRcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJ0aWxlXCJcbiAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBfb3B0aW9uczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsgYWN0aXZlOiBvcHRpb24uY2hlY2tlZCwgZGlzYWJsZWQ6IG9wdGlvbi5kaXNhYmxlZCB9XCJcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdCgkZXZlbnQsIG9wdGlvbilcIlxuICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwib3B0aW9uLmxhYmVsIHx8IG9wdGlvblwiXG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzPVwidGlsZXMtaW5wdXRcIlxuICAgICAgICAgIFtuYW1lXT1cIm5hbWVcIlxuICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi5jaGVja2VkIHx8IG9wdGlvbi52YWx1ZSB8fCBvcHRpb25cIlxuICAgICAgICAgIFthdHRyLmlkXT1cIm5hbWUgKyBpXCJcbiAgICAgICAgICAoY2hhbmdlKT1cInNlbGVjdCgkZXZlbnQsIG9wdGlvbilcIlxuICAgICAgICAgIChmb2N1cyk9XCJzZXRGb2N1cyh0cnVlKVwiXG4gICAgICAgICAgKGJsdXIpPVwic2V0Rm9jdXMoZmFsc2UpXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgW2F0dHIuZm9yXT1cIm5hbWUgKyBpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIm9wdGlvbi5sYWJlbCB8fCBvcHRpb25cIj5cbiAgICAgICAgICB7eyBvcHRpb24ubGFiZWwgfHwgb3B0aW9uIH19XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYWN0aXZlLWluZGljYXRvclwiIFtAdGlsZVN0YXRlXT1cInN0YXRlXCIgW2hpZGRlbl09XCJhY3RpdmVUaWxlID09PSB1bmRlZmluZWQgfHwgYWN0aXZlVGlsZSA9PT0gbnVsbFwiPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3RpbGVTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnaW5hY3RpdmUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2FjdGl2ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBhbmltYXRlKCcyMDBtcyBlYXNlLW91dCcpKSxcbiAgICBdKSxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UaWxlc0VsZW1lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nID0gbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKTtcbiAgQElucHV0KClcbiAgb3B0aW9uczogYW55O1xuICBASW5wdXQoKVxuICByZXF1aXJlZDogYm9vbGVhbjtcbiAgQElucHV0KCdjb250cm9sRGlzYWJsZWQnKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KClcbiAgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25TZWxlY3RlZE9wdGlvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIG9uRGlzYWJsZWRPcHRpb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgX29wdGlvbnM6IEFycmF5PGFueT4gPSBbXTtcbiAgcHVibGljIGFjdGl2ZVRpbGU6IGFueSA9IG51bGw7XG4gIHB1YmxpYyBzdGF0ZTogU3RyaW5nID0gJ2luYWN0aXZlJztcbiAgcHVibGljIGZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBtb2RlbDogYW55O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBwdWJsaWMgc2V0Rm9jdXMoZm9jdXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzZWQgPSBmb2N1cztcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUgfHwgJyc7XG4gICAgdGhpcy5zZXR1cE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZTogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VbJ29wdGlvbnMnXSAmJiBjaGFuZ2VbJ29wdGlvbnMnXS5jdXJyZW50VmFsdWUgJiYgIWNoYW5nZVsnb3B0aW9ucyddLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUgfHwgJyc7XG4gICAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgICB0aGlzLnNldHVwT3B0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIHNldHVwT3B0aW9ucygpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5sZW5ndGggJiYgKHRoaXMub3B0aW9uc1swXS52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMub3B0aW9uc1swXS52YWx1ZSA9PT0gbnVsbCkpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLm9wdGlvbnMubWFwKCh4KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB7IHZhbHVlOiB4LCBsYWJlbDogeCwgY2hlY2tlZDogdGhpcy5tb2RlbCA9PT0geCB9O1xuICAgICAgICBpZiAoaXRlbS5jaGVja2VkKSB7XG4gICAgICAgICAgdGhpcy5zZXRUaWxlKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLm9wdGlvbnMubWFwKCh4KSA9PiB7XG4gICAgICAgIHguY2hlY2tlZCA9IHRoaXMubW9kZWwgPT09IHgudmFsdWUgfHwgKHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5pZCA9PT0geC52YWx1ZSk7XG4gICAgICAgIGlmICh4LmNoZWNrZWQpIHtcbiAgICAgICAgICB0aGlzLnNldFRpbGUoeCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHg7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBzZWxlY3QoZXZlbnQsIGl0ZW0pIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoIWl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5vblNlbGVjdGVkT3B0aW9uQ2xpY2suZW1pdChpdGVtKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiB0aGlzLl9vcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoaXRlbS52YWx1ZSk7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UoaXRlbS52YWx1ZSk7XG4gICAgICB0aGlzLnNldFRpbGUoaXRlbSk7XG4gICAgICB0aGlzLm1vZGVsID0gaXRlbS52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkRpc2FibGVkT3B0aW9uQ2xpY2suZW1pdChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBzZXRUaWxlKGl0ZW0pIHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdGhpcy5hY3RpdmVUaWxlID0gaXRlbS52YWx1ZTtcbiAgICAgIHRoaXMubW92ZVRpbGUoKTtcbiAgICB9XG4gIH1cblxuICBtb3ZlVGlsZSgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGluZCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtaW5kaWNhdG9yJyk7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aWxlLmFjdGl2ZScpO1xuICAgICAgaWYgKGluZCAmJiBlbCkge1xuICAgICAgICBjb25zdCB3OiBudW1iZXIgPSBlbC5jbGllbnRXaWR0aDtcbiAgICAgICAgY29uc3QgbGVmdDogbnVtYmVyID0gZWwub2Zmc2V0TGVmdCAtIGVsLm9mZnNldFRvcDsgLy8gUmVtb3ZlcyB0aGUgYm9yZGVyIHdpZHRoIHRoYXQgRmlyZWZveCBhZGRzIHdpdGhvdXQgYWZmZWN0aW5nIG90aGVyIGJyb3dzZXJzXG4gICAgICAgIGluZC5zdHlsZS53aWR0aCA9IGBjYWxjKCR7d31weCArIDAuMzJlbSlgO1xuICAgICAgICBpbmQuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIGlmICghSGVscGVycy5pc0JsYW5rKG1vZGVsKSkge1xuICAgICAgdGhpcy5zZXR1cE9wdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxufVxuIl19