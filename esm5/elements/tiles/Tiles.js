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
                x.checked = _this.model === x.value;
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
                    template: "\n        <div class=\"tile-container\" [class.active]=\"focused\" [class.disabled]=\"disabled\">\n            <div class=\"tile\" *ngFor=\"let option of _options; let i = index\" [ngClass]=\"{active: option.checked, disabled: option.disabled}\" (click)=\"select($event, option)\" [attr.data-automation-id]=\"option.label || option\">\n                <input class=\"tiles-input\" [name]=\"name\" type=\"radio\" [value]=\"option.checked || option\" [attr.id]=\"name + i\" (change)=\"select($event, option)\" (focus)=\"setFocus(true)\" (blur)=\"setFocus(false)\" [disabled]=\"disabled\">\n                <label [attr.for]=\"name + i\" [attr.data-automation-id]=\"option.label || option\">\n                    {{ option.label || option }}\n                </label>\n            </div>\n            <span class=\"active-indicator\" [@tileState]=\"state\" [hidden]=\"activeTile === undefined || activeTile === null\"></span>\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlsZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGlsZXMvVGlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLFVBQVUsRUFHVixpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUVqRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztJQUd4QyxvQkFBb0IsR0FBRztJQUMzQixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLEVBQUM7SUFDL0MsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQUVEO0lBMkRFLDBCQUFvQixPQUFtQixFQUFVLEdBQXNCO1FBQW5ELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXZCdkUsU0FBSSxHQUFXLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFNL0MsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakQsMEJBQXFCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUQsMEJBQXFCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUQsYUFBUSxHQUFlLEVBQUUsQ0FBQztRQUNuQixlQUFVLEdBQVEsSUFBSSxDQUFD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Q0QsVUFBVSxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzs0QkFDMUQsVUFBVSxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3lCQUM1RCxDQUFDO3FCQUNIO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFuREMsVUFBVTtnQkFHVixpQkFBaUI7Ozt1QkFrRGhCLEtBQUs7MEJBRUwsS0FBSzsyQkFFTCxLQUFLOzJCQUVMLEtBQUssU0FBQyxpQkFBaUI7MkJBRXZCLE1BQU07d0NBRU4sTUFBTTt3Q0FFTixNQUFNOztJQXVIVCx1QkFBQztDQUFBLEFBdEtELElBc0tDO1NBcElZLGdCQUFnQjs7O0lBQzNCLGdDQUMrQzs7SUFDL0MsbUNBQ2E7O0lBQ2Isb0NBQ2tCOztJQUNsQixvQ0FDMEI7O0lBQzFCLG9DQUNpRDs7SUFDakQsaURBQzhEOztJQUM5RCxpREFDOEQ7O0lBRTlELG9DQUEwQjs7SUFDMUIsc0NBQThCOztJQUM5QixpQ0FBa0M7O0lBQ2xDLG1DQUFnQzs7SUFFaEMsaUNBQVc7O0lBQ1gseUNBQW1DOztJQUNuQywwQ0FBb0M7Ozs7O0lBRXhCLG1DQUEyQjs7Ozs7SUFBRSwrQkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBFbGVtZW50UmVmLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IFRJTEVTX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b1RpbGVzRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10aWxlcycsXG4gIHByb3ZpZGVyczogW1RJTEVTX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpbGUtY29udGFpbmVyXCIgW2NsYXNzLmFjdGl2ZV09XCJmb2N1c2VkXCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGlsZVwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgX29wdGlvbnM7IGxldCBpID0gaW5kZXhcIiBbbmdDbGFzc109XCJ7YWN0aXZlOiBvcHRpb24uY2hlY2tlZCwgZGlzYWJsZWQ6IG9wdGlvbi5kaXNhYmxlZH1cIiAoY2xpY2spPVwic2VsZWN0KCRldmVudCwgb3B0aW9uKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJvcHRpb24ubGFiZWwgfHwgb3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidGlsZXMtaW5wdXRcIiBbbmFtZV09XCJuYW1lXCIgdHlwZT1cInJhZGlvXCIgW3ZhbHVlXT1cIm9wdGlvbi5jaGVja2VkIHx8IG9wdGlvblwiIFthdHRyLmlkXT1cIm5hbWUgKyBpXCIgKGNoYW5nZSk9XCJzZWxlY3QoJGV2ZW50LCBvcHRpb24pXCIgKGZvY3VzKT1cInNldEZvY3VzKHRydWUpXCIgKGJsdXIpPVwic2V0Rm9jdXMoZmFsc2UpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJuYW1lICsgaVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJvcHRpb24ubGFiZWwgfHwgb3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IG9wdGlvbi5sYWJlbCB8fCBvcHRpb24gfX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjdGl2ZS1pbmRpY2F0b3JcIiBbQHRpbGVTdGF0ZV09XCJzdGF0ZVwiIFtoaWRkZW5dPVwiYWN0aXZlVGlsZSA9PT0gdW5kZWZpbmVkIHx8IGFjdGl2ZVRpbGUgPT09IG51bGxcIj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCd0aWxlU3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2luYWN0aXZlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICdhY3RpdmUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1vdXQnKSksXG4gICAgXSksXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGlsZXNFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCk7XG4gIEBJbnB1dCgpXG4gIG9wdGlvbnM6IGFueTtcbiAgQElucHV0KClcbiAgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgnY29udHJvbERpc2FibGVkJylcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpXG4gIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIG9uU2VsZWN0ZWRPcHRpb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBvbkRpc2FibGVkT3B0aW9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIF9vcHRpb25zOiBBcnJheTxhbnk+ID0gW107XG4gIHB1YmxpYyBhY3RpdmVUaWxlOiBhbnkgPSBudWxsO1xuICBwdWJsaWMgc3RhdGU6IFN0cmluZyA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbW9kZWw6IGFueTtcbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgcHVibGljIHNldEZvY3VzKGZvY3VzOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c2VkID0gZm9jdXM7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lIHx8ICcnO1xuICAgIHRoaXMuc2V0dXBPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2U6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlWydvcHRpb25zJ10gJiYgY2hhbmdlWydvcHRpb25zJ10uY3VycmVudFZhbHVlICYmICFjaGFuZ2VbJ29wdGlvbnMnXS5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lIHx8ICcnO1xuICAgICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5zZXR1cE9wdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICBzZXR1cE9wdGlvbnMoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubGVuZ3RoICYmICh0aGlzLm9wdGlvbnNbMF0udmFsdWUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLm9wdGlvbnNbMF0udmFsdWUgPT09IG51bGwpKSB7XG4gICAgICB0aGlzLl9vcHRpb25zID0gdGhpcy5vcHRpb25zLm1hcCgoeCkgPT4ge1xuICAgICAgICBsZXQgaXRlbSA9IHsgdmFsdWU6IHgsIGxhYmVsOiB4LCBjaGVja2VkOiB0aGlzLm1vZGVsID09PSB4IH07XG4gICAgICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcbiAgICAgICAgICB0aGlzLnNldFRpbGUoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMub3B0aW9ucy5tYXAoKHgpID0+IHtcbiAgICAgICAgeC5jaGVja2VkID0gdGhpcy5tb2RlbCA9PT0geC52YWx1ZTtcbiAgICAgICAgaWYgKHguY2hlY2tlZCkge1xuICAgICAgICAgIHRoaXMuc2V0VGlsZSh4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHNlbGVjdChldmVudCwgaXRlbSkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmICghaXRlbS5kaXNhYmxlZCkge1xuICAgICAgaWYgKGl0ZW0uY2hlY2tlZCkge1xuICAgICAgICB0aGlzLm9uU2VsZWN0ZWRPcHRpb25DbGljay5lbWl0KGl0ZW0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IG9wdGlvbiBvZiB0aGlzLl9vcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoaXRlbS52YWx1ZSk7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UoaXRlbS52YWx1ZSk7XG4gICAgICB0aGlzLnNldFRpbGUoaXRlbSk7XG4gICAgICB0aGlzLm1vZGVsID0gaXRlbS52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkRpc2FibGVkT3B0aW9uQ2xpY2suZW1pdChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBzZXRUaWxlKGl0ZW0pIHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdGhpcy5hY3RpdmVUaWxlID0gaXRlbS52YWx1ZTtcbiAgICAgIHRoaXMubW92ZVRpbGUoKTtcbiAgICB9XG4gIH1cblxuICBtb3ZlVGlsZSgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBpbmQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLWluZGljYXRvcicpO1xuICAgICAgbGV0IGVsID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRpbGUuYWN0aXZlJyk7XG4gICAgICBpZiAoaW5kICYmIGVsKSB7XG4gICAgICAgIGxldCB3OiBudW1iZXIgPSBlbC5jbGllbnRXaWR0aDtcbiAgICAgICAgbGV0IGxlZnQ6IG51bWJlciA9IGVsLm9mZnNldExlZnQgLSBlbC5vZmZzZXRUb3A7IC8vIFJlbW92ZXMgdGhlIGJvcmRlciB3aWR0aCB0aGF0IEZpcmVmb3ggYWRkcyB3aXRob3V0IGFmZmVjdGluZyBvdGhlciBicm93c2Vyc1xuICAgICAgICBpbmQuc3R5bGUud2lkdGggPSBgY2FsYygke3d9cHggKyAwLjMyZW0pYDtcbiAgICAgICAgaW5kLnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayhtb2RlbCkpIHtcbiAgICAgIHRoaXMuc2V0dXBPcHRpb25zKCk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==