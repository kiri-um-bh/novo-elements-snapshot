import { __extends } from "tslib";
// NG2
import { Component, forwardRef, ElementRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
import { ComponentUtils } from '../../utils/component-utils/ComponentUtils';
import { NovoChipElement, NovoChipsElement } from './Chips';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../utils/component-utils/ComponentUtils";
import * as i3 from "../../services/novo-label-service";
import * as i4 from "../picker/Picker";
import * as i5 from "@angular/forms";
function NovoRowChipElement_i_2_Template(rf, ctx) { if (rf & 1) {
    var _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 2);
    i0.ɵɵlistener("click", function NovoRowChipElement_i_2_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r2); var ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.onRemove($event); });
    i0.ɵɵelementEnd();
} }
var _c0 = ["*"];
function NovoRowChipsElement_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(column_r6.label);
} }
function NovoRowChipsElement_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, NovoRowChipsElement_div_0_div_1_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.source.columns);
} }
function NovoRowChipsElement_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.source.emptyReadOnlyMessage);
} }
function NovoRowChipsElement_novo_row_chip_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r9 = ctx.$implicit;
    var item_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(column_r9.data(item_r7));
} }
function NovoRowChipsElement_novo_row_chip_2_Template(rf, ctx) { if (rf & 1) {
    var _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-row-chip", 10);
    i0.ɵɵlistener("remove", function NovoRowChipsElement_novo_row_chip_2_Template_novo_row_chip_remove_0_listener($event) { i0.ɵɵrestoreView(_r12); var item_r7 = ctx.$implicit; var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.remove($event, item_r7); })("select", function NovoRowChipsElement_novo_row_chip_2_Template_novo_row_chip_select_0_listener($event) { i0.ɵɵrestoreView(_r12); var item_r7 = ctx.$implicit; var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.select($event, item_r7); });
    i0.ɵɵtemplate(1, NovoRowChipsElement_novo_row_chip_2_div_1_Template, 3, 1, "div", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r7 = ctx.$implicit;
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected", item_r7 == ctx_r2.selected);
    i0.ɵɵproperty("type", ctx_r2.type || (item_r7 == null ? null : item_r7.value == null ? null : item_r7.value.searchEntity))("disabled", ctx_r2.disablePickerInput);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.source.columns);
} }
function NovoRowChipsElement_novo_picker_4_Template(rf, ctx) { if (rf & 1) {
    var _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-picker", 13);
    i0.ɵɵlistener("ngModelChange", function NovoRowChipsElement_novo_picker_4_Template_novo_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r15); var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.itemToAdd = $event; })("select", function NovoRowChipsElement_novo_picker_4_Template_novo_picker_select_0_listener($event) { i0.ɵɵrestoreView(_r15); var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.add($event); })("keydown", function NovoRowChipsElement_novo_picker_4_Template_novo_picker_keydown_0_listener($event) { i0.ɵɵrestoreView(_r15); var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.onKeyDown($event); })("focus", function NovoRowChipsElement_novo_picker_4_Template_novo_picker_focus_0_listener($event) { i0.ɵɵrestoreView(_r15); var ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.onFocus($event); })("typing", function NovoRowChipsElement_novo_picker_4_Template_novo_picker_typing_0_listener($event) { i0.ɵɵrestoreView(_r15); var ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.onTyping($event); })("blur", function NovoRowChipsElement_novo_picker_4_Template_novo_picker_blur_0_listener($event) { i0.ɵɵrestoreView(_r15); var ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.onTouched($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("closeOnSelect", ctx_r3.closeOnSelect)("config", ctx_r3.source)("disablePickerInput", ctx_r3.disablePickerInput)("hidden", ctx_r3.disablePickerInput)("placeholder", ctx_r3.placeholder)("ngModel", ctx_r3.itemToAdd)("selected", ctx_r3.items)("overrideElement", ctx_r3.element);
} }
// Value accessor for the component (supports ngModel)
var CHIPS_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NovoRowChipsElement; }),
    multi: true,
};
var NovoRowChipElement = /** @class */ (function (_super) {
    __extends(NovoRowChipElement, _super);
    function NovoRowChipElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NovoRowChipElement.prototype.onSelect = function (e) {
        return false;
    };
    NovoRowChipElement.ɵfac = function NovoRowChipElement_Factory(t) { return ɵNovoRowChipElement_BaseFactory(t || NovoRowChipElement); };
    NovoRowChipElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoRowChipElement, selectors: [["novo-row-chip"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[1, "novo-row-chips-columns"], ["class", "bhi-delete-o", 3, "click", 4, "ngIf"], [1, "bhi-delete-o", 3, "click"]], template: function NovoRowChipElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵtemplate(2, NovoRowChipElement_i_2_Template, 1, 0, "i", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.disabled);
        } }, directives: [i1.NgIf], encapsulation: 2 });
    return NovoRowChipElement;
}(NovoChipElement));
export { NovoRowChipElement };
var ɵNovoRowChipElement_BaseFactory = i0.ɵɵgetInheritedFactory(NovoRowChipElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoRowChipElement, [{
        type: Component,
        args: [{
                selector: 'novo-row-chip',
                template: "<div class=\"novo-row-chips-columns\"><ng-content></ng-content><i class=\"bhi-delete-o\" *ngIf=\"!disabled\" (click)=\"onRemove($event)\"></i></div>",
            }]
    }], null, null); })();
var NovoRowChipsElement = /** @class */ (function (_super) {
    __extends(NovoRowChipsElement, _super);
    function NovoRowChipsElement(element, componentUtils, labels) {
        var _this = _super.call(this, element, componentUtils, labels) || this;
        _this.closeOnSelect = true;
        return _this;
    }
    NovoRowChipsElement.prototype.onKeyDown = function (event) {
        return;
    };
    NovoRowChipsElement.ɵfac = function NovoRowChipsElement_Factory(t) { return new (t || NovoRowChipsElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.ComponentUtils), i0.ɵɵdirectiveInject(i3.NovoLabelService)); };
    NovoRowChipsElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoRowChipsElement, selectors: [["novo-row-chips"]], hostVars: 2, hostBindings: function NovoRowChipsElement_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("with-value", ctx.items.length > 0);
        } }, inputs: { closeOnSelect: "closeOnSelect" }, features: [i0.ɵɵProvidersFeature([CHIPS_VALUE_ACCESSOR]), i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 6, consts: [["class", "novo-row-chips-columns", 4, "ngIf"], ["class", "novo-row-chips-empty-message", 4, "ngIf"], [3, "type", "selected", "disabled", "remove", "select", 4, "ngFor", "ngForOf"], ["clearValueOnSelect", "true", 3, "closeOnSelect", "config", "disablePickerInput", "hidden", "placeholder", "ngModel", "selected", "overrideElement", "ngModelChange", "select", "keydown", "focus", "typing", "blur", 4, "ngIf"], [1, "preview-container"], ["preview", ""], [1, "novo-row-chips-columns"], ["class", "column-label", 4, "ngFor", "ngForOf"], [1, "column-label"], [1, "novo-row-chips-empty-message"], [3, "type", "disabled", "remove", "select"], ["class", "column-data", 4, "ngFor", "ngForOf"], [1, "column-data"], ["clearValueOnSelect", "true", 3, "closeOnSelect", "config", "disablePickerInput", "hidden", "placeholder", "ngModel", "selected", "overrideElement", "ngModelChange", "select", "keydown", "focus", "typing", "blur"]], template: function NovoRowChipsElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NovoRowChipsElement_div_0_Template, 2, 1, "div", 0);
            i0.ɵɵtemplate(1, NovoRowChipsElement_div_1_Template, 2, 1, "div", 1);
            i0.ɵɵtemplate(2, NovoRowChipsElement_novo_row_chip_2_Template, 2, 5, "novo-row-chip", 2);
            i0.ɵɵpipe(3, "async");
            i0.ɵɵtemplate(4, NovoRowChipsElement_novo_picker_4_Template, 1, 8, "novo-picker", 3);
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵelement(6, "span", null, 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.items.length > 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.source.emptyReadOnlyMessage && ctx.disablePickerInput && ctx.items.length === 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 4, ctx._items));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.maxlength || ctx.maxlength && ctx.items.length < ctx.maxlength);
        } }, directives: [i1.NgIf, i1.NgForOf, NovoRowChipElement, i4.NovoPickerElement, i5.NgControlStatus, i5.NgModel], pipes: [i1.AsyncPipe], encapsulation: 2 });
    return NovoRowChipsElement;
}(NovoChipsElement));
export { NovoRowChipsElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoRowChipsElement, [{
        type: Component,
        args: [{
                selector: 'novo-row-chips',
                providers: [CHIPS_VALUE_ACCESSOR],
                host: {
                    '[class.with-value]': 'items.length > 0',
                },
                template: "\n        <div class=\"novo-row-chips-columns\" *ngIf=\"items.length > 0\">\n          <div class=\"column-label\" *ngFor=\"let column of source.columns\">{{ column.label }}</div>\n        </div>\n        <div class=\"novo-row-chips-empty-message\" *ngIf=\"source.emptyReadOnlyMessage && disablePickerInput && items.length === 0\">{{source.emptyReadOnlyMessage}}</div>\n        <novo-row-chip\n          *ngFor=\"let item of _items | async\"\n          [type]=\"type || item?.value?.searchEntity\"\n          [class.selected]=\"item == selected\"\n          [disabled]=\"disablePickerInput\"\n          (remove)=\"remove($event, item)\"\n          (select)=\"select($event, item)\">\n          <div class=\"column-data\" *ngFor=\"let column of source.columns\"><span>{{ column.data(item) }}</span></div>\n        </novo-row-chip>\n        <novo-picker\n            clearValueOnSelect=\"true\"\n            [closeOnSelect]=\"closeOnSelect\"\n            [config]=\"source\"\n            [disablePickerInput]=\"disablePickerInput\"\n            [hidden]=\"disablePickerInput\"\n            [placeholder]=\"placeholder\"\n            [(ngModel)]=\"itemToAdd\"\n            (select)=\"add($event)\"\n            (keydown)=\"onKeyDown($event)\"\n            (focus)=\"onFocus($event)\"\n            (typing)=\"onTyping($event)\"\n            (blur)=\"onTouched($event)\"\n            [selected]=\"items\"\n            [overrideElement]=\"element\"\n            *ngIf=\"!maxlength || (maxlength && items.length < maxlength)\">\n        </novo-picker>\n        <div class=\"preview-container\">\n            <span #preview></span>\n        </div>\n   ",
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i2.ComponentUtils }, { type: i3.NovoLabelService }]; }, { closeOnSelect: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm93Q2hpcHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2hpcHMvUm93Q2hpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE1BQU07QUFDTixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7Ozs7O0lBV2MsNEJBQXlFO0lBQS9CLHVMQUEwQjtJQUFDLGlCQUFJOzs7O0lBZ0J6SSw4QkFBZ0U7SUFBQSxZQUFrQjtJQUFBLGlCQUFNOzs7SUFBeEIsZUFBa0I7SUFBbEIscUNBQWtCOzs7SUFEcEYsOEJBQ0U7SUFBQSwwRUFBZ0U7SUFDbEUsaUJBQU07OztJQURzQixlQUFxQztJQUFyQywrQ0FBcUM7OztJQUVqRSw4QkFBMEg7SUFBQSxZQUErQjtJQUFBLGlCQUFNOzs7SUFBckMsZUFBK0I7SUFBL0Isd0RBQStCOzs7SUFRdkosK0JBQStEO0lBQUEsNEJBQU07SUFBQSxZQUF1QjtJQUFBLGlCQUFPO0lBQUEsaUJBQU07Ozs7SUFBcEMsZUFBdUI7SUFBdkIsNkNBQXVCOzs7O0lBUDlGLHlDQU9FO0lBRkEseVBBQStCLDRPQUFBO0lBRS9CLHFGQUErRDtJQUNqRSxpQkFBZ0I7Ozs7SUFMZCxzREFBbUM7SUFEbkMsMEhBQTBDLHVDQUFBO0lBS2pCLGVBQXFDO0lBQXJDLCtDQUFxQzs7OztJQUVoRSx1Q0FnQmM7SUFUVixpT0FBdUIsK0xBQUEsdU1BQUEsaU1BQUEsb01BQUEsaU1BQUE7SUFTM0IsaUJBQWM7OztJQWRWLG9EQUErQix5QkFBQSxpREFBQSxxQ0FBQSxtQ0FBQSw2QkFBQSwwQkFBQSxtQ0FBQTs7QUF2QzNDLHNEQUFzRDtBQUN0RCxJQUFNLG9CQUFvQixHQUFHO0lBQzNCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLENBQUM7SUFDbEQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBRUY7SUFJd0Msc0NBQWU7SUFKdkQ7O0tBUUM7SUFIQyxxQ0FBUSxHQUFSLFVBQVMsQ0FBQztRQUNSLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzttSEFIVSxrQkFBa0I7MkRBQWxCLGtCQUFrQjs7WUFGbEIsOEJBQW9DO1lBQUEsa0JBQVk7WUFBYSwrREFBcUU7WUFBSSxpQkFBTTs7WUFBdkQsZUFBaUI7WUFBakIsb0NBQWlCOzs2QkFqQm5IO0NBdUJDLEFBUkQsQ0FJd0MsZUFBZSxHQUl0RDtTQUpZLGtCQUFrQjsrREFBbEIsa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FKOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsc0pBQThJO2FBQ3pKOztBQU9EO0lBMEN5Qyx1Q0FBZ0I7SUFJdkQsNkJBQVksT0FBbUIsRUFBRSxjQUE4QixFQUFFLE1BQXdCO1FBQXpGLFlBQ0Usa0JBQU0sT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUMsU0FDdkM7UUFKRCxtQkFBYSxHQUFZLElBQUksQ0FBQzs7SUFJOUIsQ0FBQztJQUVELHVDQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ2IsT0FBTztJQUNULENBQUM7MEZBVlUsbUJBQW1COzREQUFuQixtQkFBbUI7OzBGQXhDbkIsQ0FBQyxvQkFBb0IsQ0FBQztZQUszQixvRUFDRTtZQUVGLG9FQUEwSDtZQUMxSCx3RkFPRTs7WUFFRixvRkFnQkE7WUFDQSw4QkFDSTtZQUFBLGdDQUFzQjtZQUMxQixpQkFBTTs7WUFoQzhCLDJDQUF3QjtZQUdsQixlQUErRTtZQUEvRSwwR0FBK0U7WUFFdkgsZUFBbUM7WUFBbkMsMERBQW1DO1lBdUJqQyxlQUE2RDtZQUE3RCwwRkFBNkQ7K0NBekM1RCxrQkFBa0I7OEJBbkIvQjtDQThFQyxBQXJERCxDQTBDeUMsZ0JBQWdCLEdBV3hEO1NBWFksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0ExQy9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDakMsSUFBSSxFQUFFO29CQUNKLG9CQUFvQixFQUFFLGtCQUFrQjtpQkFDekM7Z0JBQ0QsUUFBUSxFQUFFLDhtREFrQ1I7YUFDSDs7a0JBRUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuaW1wb3J0IHsgTm92b0NoaXBFbGVtZW50LCBOb3ZvQ2hpcHNFbGVtZW50IH0gZnJvbSAnLi9DaGlwcyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0hJUFNfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvUm93Q2hpcHNFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXJvdy1jaGlwJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibm92by1yb3ctY2hpcHMtY29sdW1uc1wiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48aSBjbGFzcz1cImJoaS1kZWxldGUtb1wiICpuZ0lmPVwiIWRpc2FibGVkXCIgKGNsaWNrKT1cIm9uUmVtb3ZlKCRldmVudClcIj48L2k+PC9kaXY+YCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1Jvd0NoaXBFbGVtZW50IGV4dGVuZHMgTm92b0NoaXBFbGVtZW50IHtcbiAgb25TZWxlY3QoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXJvdy1jaGlwcycsXG4gIHByb3ZpZGVyczogW0NISVBTX1ZBTFVFX0FDQ0VTU09SXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Mud2l0aC12YWx1ZV0nOiAnaXRlbXMubGVuZ3RoID4gMCcsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXJvdy1jaGlwcy1jb2x1bW5zXCIgKm5nSWY9XCJpdGVtcy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1sYWJlbFwiICpuZ0Zvcj1cImxldCBjb2x1bW4gb2Ygc291cmNlLmNvbHVtbnNcIj57eyBjb2x1bW4ubGFiZWwgfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXJvdy1jaGlwcy1lbXB0eS1tZXNzYWdlXCIgKm5nSWY9XCJzb3VyY2UuZW1wdHlSZWFkT25seU1lc3NhZ2UgJiYgZGlzYWJsZVBpY2tlcklucHV0ICYmIGl0ZW1zLmxlbmd0aCA9PT0gMFwiPnt7c291cmNlLmVtcHR5UmVhZE9ubHlNZXNzYWdlfX08L2Rpdj5cbiAgICAgICAgPG5vdm8tcm93LWNoaXBcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfaXRlbXMgfCBhc3luY1wiXG4gICAgICAgICAgW3R5cGVdPVwidHlwZSB8fCBpdGVtPy52YWx1ZT8uc2VhcmNoRW50aXR5XCJcbiAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXRlbSA9PSBzZWxlY3RlZFwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAgICAgKHJlbW92ZSk9XCJyZW1vdmUoJGV2ZW50LCBpdGVtKVwiXG4gICAgICAgICAgKHNlbGVjdCk9XCJzZWxlY3QoJGV2ZW50LCBpdGVtKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tZGF0YVwiICpuZ0Zvcj1cImxldCBjb2x1bW4gb2Ygc291cmNlLmNvbHVtbnNcIj48c3Bhbj57eyBjb2x1bW4uZGF0YShpdGVtKSB9fTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPC9ub3ZvLXJvdy1jaGlwPlxuICAgICAgICA8bm92by1waWNrZXJcbiAgICAgICAgICAgIGNsZWFyVmFsdWVPblNlbGVjdD1cInRydWVcIlxuICAgICAgICAgICAgW2Nsb3NlT25TZWxlY3RdPVwiY2xvc2VPblNlbGVjdFwiXG4gICAgICAgICAgICBbY29uZmlnXT1cInNvdXJjZVwiXG4gICAgICAgICAgICBbZGlzYWJsZVBpY2tlcklucHV0XT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAgICAgICBbaGlkZGVuXT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpdGVtVG9BZGRcIlxuICAgICAgICAgICAgKHNlbGVjdCk9XCJhZGQoJGV2ZW50KVwiXG4gICAgICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAgICh0eXBpbmcpPVwib25UeXBpbmcoJGV2ZW50KVwiXG4gICAgICAgICAgICAoYmx1cik9XCJvblRvdWNoZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICBbc2VsZWN0ZWRdPVwiaXRlbXNcIlxuICAgICAgICAgICAgW292ZXJyaWRlRWxlbWVudF09XCJlbGVtZW50XCJcbiAgICAgICAgICAgICpuZ0lmPVwiIW1heGxlbmd0aCB8fCAobWF4bGVuZ3RoICYmIGl0ZW1zLmxlbmd0aCA8IG1heGxlbmd0aClcIj5cbiAgICAgICAgPC9ub3ZvLXBpY2tlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8c3BhbiAjcHJldmlldz48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1Jvd0NoaXBzRWxlbWVudCBleHRlbmRzIE5vdm9DaGlwc0VsZW1lbnQge1xuICBASW5wdXQoKVxuICBjbG9zZU9uU2VsZWN0OiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMsIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbXBvbmVudFV0aWxzLCBsYWJlbHMpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=