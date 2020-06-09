import { __values } from "tslib";
// NG2
import { Component, Input, Output, EventEmitter, forwardRef, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { Helpers } from '../../utils/Helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var _c0 = function (a0, a1) { return { active: a0, disabled: a1 }; };
function NovoTilesElement_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵlistener("click", function NovoTilesElement_div_1_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r4); var option_r1 = ctx.$implicit; var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.select($event, option_r1); });
    i0.ɵɵelementStart(1, "input", 3);
    i0.ɵɵlistener("change", function NovoTilesElement_div_1_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r4); var option_r1 = ctx.$implicit; var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.select($event, option_r1); })("focus", function NovoTilesElement_div_1_Template_input_focus_1_listener() { i0.ɵɵrestoreView(_r4); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.setFocus(true); })("blur", function NovoTilesElement_div_1_Template_input_blur_1_listener() { i0.ɵɵrestoreView(_r4); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.setFocus(false); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r1 = ctx.$implicit;
    var i_r2 = ctx.index;
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(9, _c0, option_r1.checked, option_r1.disabled));
    i0.ɵɵattribute("data-automation-id", option_r1.label || option_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", ctx_r0.name)("value", option_r1.checked || option_r1.value || option_r1)("disabled", ctx_r0.disabled);
    i0.ɵɵattribute("id", ctx_r0.name + i_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("for", ctx_r0.name + i_r2)("data-automation-id", option_r1.label || option_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r1.label || option_r1, " ");
} }
// Value accessor for the component (supports ngModel)
var TILES_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NovoTilesElement; }),
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
        this.focused = false;
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    NovoTilesElement.prototype.setFocus = function (focus) {
        this.focused = focus;
    };
    NovoTilesElement.prototype.ngAfterContentInit = function () {
        this.name = this.name || '';
        this.setupOptions();
    };
    NovoTilesElement.prototype.ngOnChanges = function (change) {
        if (change['options'] && change['options'].currentValue && !change['options'].firstChange) {
            this.name = this.name || '';
            this._options = [];
            this.setupOptions();
        }
    };
    NovoTilesElement.prototype.setupOptions = function () {
        var _this = this;
        if (this.options && this.options.length && (this.options[0].value === undefined || this.options[0].value === null)) {
            this._options = this.options.map(function (x) {
                var item = { value: x, label: x, checked: _this.model === x };
                if (item.checked) {
                    _this.setTile(item);
                }
                return item;
            });
        }
        else {
            this._options = this.options.map(function (x) {
                x.checked = _this.model === x.value || (_this.model && _this.model.id === x.value);
                if (x.checked) {
                    _this.setTile(x);
                }
                return x;
            });
        }
        this.ref.markForCheck();
    };
    NovoTilesElement.prototype.select = function (event, item) {
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
                for (var _b = __values(this._options), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    NovoTilesElement.prototype.setTile = function (item) {
        if (item) {
            this.activeTile = item.value;
            this.ref.markForCheck();
        }
    };
    NovoTilesElement.prototype.writeValue = function (model) {
        this.model = model;
        if (!Helpers.isBlank(model)) {
            this.setupOptions();
        }
    };
    NovoTilesElement.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    NovoTilesElement.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    NovoTilesElement.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
    };
    NovoTilesElement.ɵfac = function NovoTilesElement_Factory(t) { return new (t || NovoTilesElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    NovoTilesElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoTilesElement, selectors: [["novo-tiles"]], inputs: { name: "name", options: "options", required: "required", disabled: ["controlDisabled", "disabled"] }, outputs: { onChange: "onChange", onSelectedOptionClick: "onSelectedOptionClick", onDisabledOptionClick: "onDisabledOptionClick" }, features: [i0.ɵɵProvidersFeature([TILES_VALUE_ACCESSOR]), i0.ɵɵNgOnChangesFeature], decls: 2, vars: 5, consts: [[1, "tile-container"], ["class", "tile", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "tile", 3, "ngClass", "click"], ["type", "radio", 1, "tiles-input", 3, "name", "value", "disabled", "change", "focus", "blur"]], template: function NovoTilesElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, NovoTilesElement_div_1_Template, 4, 12, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("active", ctx.focused)("disabled", ctx.disabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx._options);
        } }, directives: [i1.NgForOf, i1.NgClass], encapsulation: 2, changeDetection: 0 });
    return NovoTilesElement;
}());
export { NovoTilesElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTilesElement, [{
        type: Component,
        args: [{
                selector: 'novo-tiles',
                providers: [TILES_VALUE_ACCESSOR],
                template: "\n    <div class=\"tile-container\" [class.active]=\"focused\" [class.disabled]=\"disabled\">\n      <div\n        class=\"tile\"\n        *ngFor=\"let option of _options; let i = index\"\n        [ngClass]=\"{ active: option.checked, disabled: option.disabled }\"\n        (click)=\"select($event, option)\"\n        [attr.data-automation-id]=\"option.label || option\"\n      >\n        <input\n          class=\"tiles-input\"\n          [name]=\"name\"\n          type=\"radio\"\n          [value]=\"option.checked || option.value || option\"\n          [attr.id]=\"name + i\"\n          (change)=\"select($event, option)\"\n          (focus)=\"setFocus(true)\"\n          (blur)=\"setFocus(false)\"\n          [disabled]=\"disabled\"\n        />\n        <label [attr.for]=\"name + i\" [attr.data-automation-id]=\"option.label || option\">\n          {{ option.label || option }}\n        </label>\n      </div>\n    </div>\n  ",
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { name: [{
            type: Input
        }], options: [{
            type: Input
        }], required: [{
            type: Input
        }], disabled: [{
            type: Input,
            args: ['controlDisabled']
        }], onChange: [{
            type: Output
        }], onSelectedOptionClick: [{
            type: Output
        }], onDisabledOptionClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlsZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGlsZXMvVGlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU07QUFDTixPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDVixVQUFVLEVBR1YsaUJBQWlCLEVBQ2pCLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsTUFBTTtBQUNOLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7O0lBY3hDLDhCQU9FO0lBSEEsaU9BQWdDO0lBR2hDLGdDQVdBO0lBTEUscU9BQWlDLDZKQUNmLElBQUksS0FEVywySkFFaEIsS0FBSyxLQUZXO0lBTm5DLGlCQVdBO0lBQUEsNkJBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQVE7SUFDVixpQkFBTTs7Ozs7SUFsQkosMkZBQWlFO0lBRWpFLGtFQUFrRDtJQUloRCxlQUFhO0lBQWIsa0NBQWEsNERBQUEsNkJBQUE7SUFHYix3Q0FBb0I7SUFNZixlQUFxQjtJQUFyQix5Q0FBcUIsb0RBQUE7SUFDMUIsZUFDRjtJQURFLDZEQUNGOztBQWhDUixzREFBc0Q7QUFDdEQsSUFBTSxvQkFBb0IsR0FBRztJQUMzQixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGdCQUFnQixFQUFoQixDQUFnQixDQUFDO0lBQy9DLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQUVGO0lBdURFLDBCQUFvQixPQUFtQixFQUFVLEdBQXNCO1FBQW5ELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXRCdkUsU0FBSSxHQUFXLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFNL0MsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakQsMEJBQXFCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUQsMEJBQXFCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUQsYUFBUSxHQUFlLEVBQUUsQ0FBQztRQUNuQixlQUFVLEdBQVEsSUFBSSxDQUFDO1FBQ3ZCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFHaEMsa0JBQWEsR0FBYSxjQUFPLENBQUMsQ0FBQztRQUNuQyxtQkFBYyxHQUFhLGNBQU8sQ0FBQyxDQUFDO0lBRXNDLENBQUM7SUFFcEUsbUNBQVEsR0FBZixVQUFnQixLQUFjO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw2Q0FBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFZLE1BQXFCO1FBQy9CLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFO1lBQ3pGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELHVDQUFZLEdBQVo7UUFBQSxpQkFtQkM7UUFsQkMsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ2xILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDO2dCQUNqQyxJQUFNLElBQUksR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDL0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNoQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNwQjtnQkFDRCxPQUFPLElBQUksQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDO2dCQUNqQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoRixJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7b0JBQ2IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDakI7Z0JBQ0QsT0FBTyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLEtBQUssRUFBRSxJQUFJOztRQUNoQixJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLE9BQU87YUFDUjs7Z0JBRUQsS0FBcUIsSUFBQSxLQUFBLFNBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBL0IsSUFBTSxNQUFNLFdBQUE7b0JBQ2YsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7aUJBQ3hCOzs7Ozs7Ozs7WUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDekI7YUFBTTtZQUNMLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkM7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxrQ0FBTyxHQUFQLFVBQVEsSUFBSTtRQUNWLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQscUNBQVUsR0FBVixVQUFXLEtBQVU7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELDJDQUFnQixHQUFoQixVQUFpQixFQUFZO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw0Q0FBaUIsR0FBakIsVUFBa0IsRUFBWTtRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsMkNBQWdCLEdBQWhCLFVBQWlCLFFBQWlCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7b0ZBbkhVLGdCQUFnQjt5REFBaEIsZ0JBQWdCLGtUQTdCaEIsQ0FBQyxvQkFBb0IsQ0FBQztZQUUvQiw4QkFDRTtZQUFBLGtFQU9FO1lBZUosaUJBQU07O1lBdkJzQixxQ0FBd0IsMEJBQUE7WUFHaEQsZUFBOEM7WUFBOUMsc0NBQThDOzsyQkFoQ3REO0NBNEtDLEFBbkpELElBbUpDO1NBcEhZLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBL0I1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNqQyxRQUFRLEVBQUUscTZCQXlCVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBRUUsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzttQkFBQyxpQkFBaUI7O2tCQUV2QixNQUFNOztrQkFFTixNQUFNOztrQkFFTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgRWxlbWVudFJlZixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgVElMRVNfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvVGlsZXNFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRpbGVzJyxcbiAgcHJvdmlkZXJzOiBbVElMRVNfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJ0aWxlLWNvbnRhaW5lclwiIFtjbGFzcy5hY3RpdmVdPVwiZm9jdXNlZFwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInRpbGVcIlxuICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIF9vcHRpb25zOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgW25nQ2xhc3NdPVwieyBhY3RpdmU6IG9wdGlvbi5jaGVja2VkLCBkaXNhYmxlZDogb3B0aW9uLmRpc2FibGVkIH1cIlxuICAgICAgICAoY2xpY2spPVwic2VsZWN0KCRldmVudCwgb3B0aW9uKVwiXG4gICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJvcHRpb24ubGFiZWwgfHwgb3B0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3M9XCJ0aWxlcy1pbnB1dFwiXG4gICAgICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uLmNoZWNrZWQgfHwgb3B0aW9uLnZhbHVlIHx8IG9wdGlvblwiXG4gICAgICAgICAgW2F0dHIuaWRdPVwibmFtZSArIGlcIlxuICAgICAgICAgIChjaGFuZ2UpPVwic2VsZWN0KCRldmVudCwgb3B0aW9uKVwiXG4gICAgICAgICAgKGZvY3VzKT1cInNldEZvY3VzKHRydWUpXCJcbiAgICAgICAgICAoYmx1cik9XCJzZXRGb2N1cyhmYWxzZSlcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwibmFtZSArIGlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwib3B0aW9uLmxhYmVsIHx8IG9wdGlvblwiPlxuICAgICAgICAgIHt7IG9wdGlvbi5sYWJlbCB8fCBvcHRpb24gfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RpbGVzRWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmcgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpO1xuICBASW5wdXQoKVxuICBvcHRpb25zOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHJlcXVpcmVkOiBib29sZWFuO1xuICBASW5wdXQoJ2NvbnRyb2xEaXNhYmxlZCcpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBvblNlbGVjdGVkT3B0aW9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25EaXNhYmxlZE9wdGlvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBfb3B0aW9uczogQXJyYXk8YW55PiA9IFtdO1xuICBwdWJsaWMgYWN0aXZlVGlsZTogYW55ID0gbnVsbDtcbiAgcHVibGljIGZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBtb2RlbDogYW55O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBwdWJsaWMgc2V0Rm9jdXMoZm9jdXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzZWQgPSBmb2N1cztcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUgfHwgJyc7XG4gICAgdGhpcy5zZXR1cE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZTogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VbJ29wdGlvbnMnXSAmJiBjaGFuZ2VbJ29wdGlvbnMnXS5jdXJyZW50VmFsdWUgJiYgIWNoYW5nZVsnb3B0aW9ucyddLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUgfHwgJyc7XG4gICAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgICB0aGlzLnNldHVwT3B0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIHNldHVwT3B0aW9ucygpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5sZW5ndGggJiYgKHRoaXMub3B0aW9uc1swXS52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMub3B0aW9uc1swXS52YWx1ZSA9PT0gbnVsbCkpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLm9wdGlvbnMubWFwKCh4KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB7IHZhbHVlOiB4LCBsYWJlbDogeCwgY2hlY2tlZDogdGhpcy5tb2RlbCA9PT0geCB9O1xuICAgICAgICBpZiAoaXRlbS5jaGVja2VkKSB7XG4gICAgICAgICAgdGhpcy5zZXRUaWxlKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLm9wdGlvbnMubWFwKCh4KSA9PiB7XG4gICAgICAgIHguY2hlY2tlZCA9IHRoaXMubW9kZWwgPT09IHgudmFsdWUgfHwgKHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5pZCA9PT0geC52YWx1ZSk7XG4gICAgICAgIGlmICh4LmNoZWNrZWQpIHtcbiAgICAgICAgICB0aGlzLnNldFRpbGUoeCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHg7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBzZWxlY3QoZXZlbnQsIGl0ZW0pIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoIWl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5vblNlbGVjdGVkT3B0aW9uQ2xpY2suZW1pdChpdGVtKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiB0aGlzLl9vcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoaXRlbS52YWx1ZSk7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UoaXRlbS52YWx1ZSk7XG4gICAgICB0aGlzLnNldFRpbGUoaXRlbSk7XG4gICAgICB0aGlzLm1vZGVsID0gaXRlbS52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkRpc2FibGVkT3B0aW9uQ2xpY2suZW1pdChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBzZXRUaWxlKGl0ZW0pIHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdGhpcy5hY3RpdmVUaWxlID0gaXRlbS52YWx1ZTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayhtb2RlbCkpIHtcbiAgICAgIHRoaXMuc2V0dXBPcHRpb25zKCk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==