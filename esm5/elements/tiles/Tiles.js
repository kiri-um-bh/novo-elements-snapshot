/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlsZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGlsZXMvVGlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRUwsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1YsVUFBVSxFQUdWLGlCQUFpQixFQUNqQix1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRWpGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0lBR3hDLG9CQUFvQixHQUFHO0lBQzNCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxnQkFBZ0IsRUFBaEIsQ0FBZ0IsRUFBQztJQUMvQyxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBRUQ7SUEyREUsMEJBQW9CLE9BQW1CLEVBQVUsR0FBc0I7UUFBbkQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBdkJ2RSxTQUFJLEdBQVcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQU0vQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVqRCwwQkFBcUIsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5RCwwQkFBcUIsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5RCxhQUFRLEdBQWUsRUFBRSxDQUFDO1FBQ25CLGVBQVUsR0FBUSxJQUFJLENBQUM7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RCxVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDOzRCQUMxRCxVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7eUJBQzVELENBQUM7cUJBQ0g7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQW5EQyxVQUFVO2dCQUdWLGlCQUFpQjs7O3VCQWtEaEIsS0FBSzswQkFFTCxLQUFLOzJCQUVMLEtBQUs7MkJBRUwsS0FBSyxTQUFDLGlCQUFpQjsyQkFFdkIsTUFBTTt3Q0FFTixNQUFNO3dDQUVOLE1BQU07O0lBdUhULHVCQUFDO0NBQUEsQUF0S0QsSUFzS0M7U0FwSVksZ0JBQWdCOzs7SUFDM0IsZ0NBQytDOztJQUMvQyxtQ0FDYTs7SUFDYixvQ0FDa0I7O0lBQ2xCLG9DQUMwQjs7SUFDMUIsb0NBQ2lEOztJQUNqRCxpREFDOEQ7O0lBQzlELGlEQUM4RDs7SUFFOUQsb0NBQTBCOztJQUMxQixzQ0FBOEI7O0lBQzlCLGlDQUFrQzs7SUFDbEMsbUNBQWdDOztJQUVoQyxpQ0FBVzs7SUFDWCx5Q0FBbUM7O0lBQ25DLDBDQUFvQzs7Ozs7SUFFeEIsbUNBQTJCOzs7OztJQUFFLCtCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgVElMRVNfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvVGlsZXNFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRpbGVzJyxcbiAgcHJvdmlkZXJzOiBbVElMRVNfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGlsZS1jb250YWluZXJcIiBbY2xhc3MuYWN0aXZlXT1cImZvY3VzZWRcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlXCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBfb3B0aW9uczsgbGV0IGkgPSBpbmRleFwiIFtuZ0NsYXNzXT1cInthY3RpdmU6IG9wdGlvbi5jaGVja2VkLCBkaXNhYmxlZDogb3B0aW9uLmRpc2FibGVkfVwiIChjbGljayk9XCJzZWxlY3QoJGV2ZW50LCBvcHRpb24pXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIm9wdGlvbi5sYWJlbCB8fCBvcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0aWxlcy1pbnB1dFwiIFtuYW1lXT1cIm5hbWVcIiB0eXBlPVwicmFkaW9cIiBbdmFsdWVdPVwib3B0aW9uLmNoZWNrZWQgfHwgb3B0aW9uXCIgW2F0dHIuaWRdPVwibmFtZSArIGlcIiAoY2hhbmdlKT1cInNlbGVjdCgkZXZlbnQsIG9wdGlvbilcIiAoZm9jdXMpPVwic2V0Rm9jdXModHJ1ZSlcIiAoYmx1cik9XCJzZXRGb2N1cyhmYWxzZSlcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgW2F0dHIuZm9yXT1cIm5hbWUgKyBpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIm9wdGlvbi5sYWJlbCB8fCBvcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAge3sgb3B0aW9uLmxhYmVsIHx8IG9wdGlvbiB9fVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWN0aXZlLWluZGljYXRvclwiIFtAdGlsZVN0YXRlXT1cInN0YXRlXCIgW2hpZGRlbl09XCJhY3RpdmVUaWxlID09PSB1bmRlZmluZWQgfHwgYWN0aXZlVGlsZSA9PT0gbnVsbFwiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3RpbGVTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnaW5hY3RpdmUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2FjdGl2ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBhbmltYXRlKCcyMDBtcyBlYXNlLW91dCcpKSxcbiAgICBdKSxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UaWxlc0VsZW1lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nID0gbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKTtcbiAgQElucHV0KClcbiAgb3B0aW9uczogYW55O1xuICBASW5wdXQoKVxuICByZXF1aXJlZDogYm9vbGVhbjtcbiAgQElucHV0KCdjb250cm9sRGlzYWJsZWQnKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KClcbiAgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25TZWxlY3RlZE9wdGlvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIG9uRGlzYWJsZWRPcHRpb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgX29wdGlvbnM6IEFycmF5PGFueT4gPSBbXTtcbiAgcHVibGljIGFjdGl2ZVRpbGU6IGFueSA9IG51bGw7XG4gIHB1YmxpYyBzdGF0ZTogU3RyaW5nID0gJ2luYWN0aXZlJztcbiAgcHVibGljIGZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBtb2RlbDogYW55O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBwdWJsaWMgc2V0Rm9jdXMoZm9jdXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzZWQgPSBmb2N1cztcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUgfHwgJyc7XG4gICAgdGhpcy5zZXR1cE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZTogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VbJ29wdGlvbnMnXSAmJiBjaGFuZ2VbJ29wdGlvbnMnXS5jdXJyZW50VmFsdWUgJiYgIWNoYW5nZVsnb3B0aW9ucyddLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUgfHwgJyc7XG4gICAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgICB0aGlzLnNldHVwT3B0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIHNldHVwT3B0aW9ucygpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5sZW5ndGggJiYgKHRoaXMub3B0aW9uc1swXS52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMub3B0aW9uc1swXS52YWx1ZSA9PT0gbnVsbCkpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLm9wdGlvbnMubWFwKCh4KSA9PiB7XG4gICAgICAgIGxldCBpdGVtID0geyB2YWx1ZTogeCwgbGFiZWw6IHgsIGNoZWNrZWQ6IHRoaXMubW9kZWwgPT09IHggfTtcbiAgICAgICAgaWYgKGl0ZW0uY2hlY2tlZCkge1xuICAgICAgICAgIHRoaXMuc2V0VGlsZShpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vcHRpb25zID0gdGhpcy5vcHRpb25zLm1hcCgoeCkgPT4ge1xuICAgICAgICB4LmNoZWNrZWQgPSB0aGlzLm1vZGVsID09PSB4LnZhbHVlO1xuICAgICAgICBpZiAoeC5jaGVja2VkKSB7XG4gICAgICAgICAgdGhpcy5zZXRUaWxlKHgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgc2VsZWN0KGV2ZW50LCBpdGVtKSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKCFpdGVtLmRpc2FibGVkKSB7XG4gICAgICBpZiAoaXRlbS5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMub25TZWxlY3RlZE9wdGlvbkNsaWNrLmVtaXQoaXRlbSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgb3B0aW9uIG9mIHRoaXMuX29wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9uLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDtcbiAgICAgIHRoaXMub25DaGFuZ2UuZW1pdChpdGVtLnZhbHVlKTtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZShpdGVtLnZhbHVlKTtcbiAgICAgIHRoaXMuc2V0VGlsZShpdGVtKTtcbiAgICAgIHRoaXMubW9kZWwgPSBpdGVtLnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uRGlzYWJsZWRPcHRpb25DbGljay5lbWl0KGl0ZW0pO1xuICAgIH1cbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHNldFRpbGUoaXRlbSkge1xuICAgIGlmIChpdGVtKSB7XG4gICAgICB0aGlzLmFjdGl2ZVRpbGUgPSBpdGVtLnZhbHVlO1xuICAgICAgdGhpcy5tb3ZlVGlsZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVUaWxlKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IGluZCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtaW5kaWNhdG9yJyk7XG4gICAgICBsZXQgZWwgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGlsZS5hY3RpdmUnKTtcbiAgICAgIGlmIChpbmQgJiYgZWwpIHtcbiAgICAgICAgbGV0IHc6IG51bWJlciA9IGVsLmNsaWVudFdpZHRoO1xuICAgICAgICBsZXQgbGVmdDogbnVtYmVyID0gZWwub2Zmc2V0TGVmdCAtIGVsLm9mZnNldFRvcDsgLy8gUmVtb3ZlcyB0aGUgYm9yZGVyIHdpZHRoIHRoYXQgRmlyZWZveCBhZGRzIHdpdGhvdXQgYWZmZWN0aW5nIG90aGVyIGJyb3dzZXJzXG4gICAgICAgIGluZC5zdHlsZS53aWR0aCA9IGBjYWxjKCR7d31weCArIDAuMzJlbSlgO1xuICAgICAgICBpbmQuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIGlmICghSGVscGVycy5pc0JsYW5rKG1vZGVsKSkge1xuICAgICAgdGhpcy5zZXR1cE9wdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxufVxuIl19