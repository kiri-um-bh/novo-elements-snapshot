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
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 2);
    i0.ɵɵlistener("click", function NovoRowChipElement_i_2_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.onRemove($event); });
    i0.ɵɵelementEnd();
} }
const _c0 = ["*"];
function NovoRowChipsElement_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(column_r6.label);
} }
function NovoRowChipsElement_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, NovoRowChipsElement_div_0_div_1_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.source.columns);
} }
function NovoRowChipsElement_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
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
    const column_r9 = ctx.$implicit;
    const item_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(column_r9.data(item_r7));
} }
function NovoRowChipsElement_novo_row_chip_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-row-chip", 10);
    i0.ɵɵlistener("remove", function NovoRowChipsElement_novo_row_chip_2_Template_novo_row_chip_remove_0_listener($event) { i0.ɵɵrestoreView(_r12); const item_r7 = ctx.$implicit; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.remove($event, item_r7); })("select", function NovoRowChipsElement_novo_row_chip_2_Template_novo_row_chip_select_0_listener($event) { i0.ɵɵrestoreView(_r12); const item_r7 = ctx.$implicit; const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.select($event, item_r7); });
    i0.ɵɵtemplate(1, NovoRowChipsElement_novo_row_chip_2_div_1_Template, 3, 1, "div", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected", item_r7 == ctx_r2.selected);
    i0.ɵɵproperty("type", ctx_r2.type || (item_r7 == null ? null : item_r7.value == null ? null : item_r7.value.searchEntity))("disabled", ctx_r2.disablePickerInput);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.source.columns);
} }
function NovoRowChipsElement_novo_picker_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-picker", 13);
    i0.ɵɵlistener("ngModelChange", function NovoRowChipsElement_novo_picker_4_Template_novo_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.itemToAdd = $event; })("select", function NovoRowChipsElement_novo_picker_4_Template_novo_picker_select_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.add($event); })("keydown", function NovoRowChipsElement_novo_picker_4_Template_novo_picker_keydown_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.onKeyDown($event); })("focus", function NovoRowChipsElement_novo_picker_4_Template_novo_picker_focus_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.onFocus($event); })("typing", function NovoRowChipsElement_novo_picker_4_Template_novo_picker_typing_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.onTyping($event); })("blur", function NovoRowChipsElement_novo_picker_4_Template_novo_picker_blur_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.onTouched($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("closeOnSelect", ctx_r3.closeOnSelect)("config", ctx_r3.source)("disablePickerInput", ctx_r3.disablePickerInput)("hidden", ctx_r3.disablePickerInput)("placeholder", ctx_r3.placeholder)("ngModel", ctx_r3.itemToAdd)("selected", ctx_r3.items)("overrideElement", ctx_r3.element);
} }
// Value accessor for the component (supports ngModel)
const CHIPS_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoRowChipsElement),
    multi: true,
};
export class NovoRowChipElement extends NovoChipElement {
    onSelect(e) {
        return false;
    }
}
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
const ɵNovoRowChipElement_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(NovoRowChipElement);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoRowChipElement, [{
        type: Component,
        args: [{
                selector: 'novo-row-chip',
                template: `<div class="novo-row-chips-columns"><ng-content></ng-content><i class="bhi-delete-o" *ngIf="!disabled" (click)="onRemove($event)"></i></div>`,
            }]
    }], null, null); })();
export class NovoRowChipsElement extends NovoChipsElement {
    constructor(element, componentUtils, labels) {
        super(element, componentUtils, labels);
        this.closeOnSelect = true;
    }
    onKeyDown(event) {
        return;
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoRowChipsElement, [{
        type: Component,
        args: [{
                selector: 'novo-row-chips',
                providers: [CHIPS_VALUE_ACCESSOR],
                host: {
                    '[class.with-value]': 'items.length > 0',
                },
                template: `
        <div class="novo-row-chips-columns" *ngIf="items.length > 0">
          <div class="column-label" *ngFor="let column of source.columns">{{ column.label }}</div>
        </div>
        <div class="novo-row-chips-empty-message" *ngIf="source.emptyReadOnlyMessage && disablePickerInput && items.length === 0">{{source.emptyReadOnlyMessage}}</div>
        <novo-row-chip
          *ngFor="let item of _items | async"
          [type]="type || item?.value?.searchEntity"
          [class.selected]="item == selected"
          [disabled]="disablePickerInput"
          (remove)="remove($event, item)"
          (select)="select($event, item)">
          <div class="column-data" *ngFor="let column of source.columns"><span>{{ column.data(item) }}</span></div>
        </novo-row-chip>
        <novo-picker
            clearValueOnSelect="true"
            [closeOnSelect]="closeOnSelect"
            [config]="source"
            [disablePickerInput]="disablePickerInput"
            [hidden]="disablePickerInput"
            [placeholder]="placeholder"
            [(ngModel)]="itemToAdd"
            (select)="add($event)"
            (keydown)="onKeyDown($event)"
            (focus)="onFocus($event)"
            (typing)="onTyping($event)"
            (blur)="onTouched($event)"
            [selected]="items"
            [overrideElement]="element"
            *ngIf="!maxlength || (maxlength && items.length < maxlength)">
        </novo-picker>
        <div class="preview-container">
            <span #preview></span>
        </div>
   `,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i2.ComponentUtils }, { type: i3.NovoLabelService }]; }, { closeOnSelect: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm93Q2hpcHMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2hpcHMvUm93Q2hpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sU0FBUyxDQUFDOzs7Ozs7Ozs7SUFXYyw0QkFBeUU7SUFBL0IseUxBQTBCO0lBQUMsaUJBQUk7Ozs7SUFnQnpJLDhCQUFnRTtJQUFBLFlBQWtCO0lBQUEsaUJBQU07OztJQUF4QixlQUFrQjtJQUFsQixxQ0FBa0I7OztJQURwRiw4QkFDRTtJQUFBLDBFQUFnRTtJQUNsRSxpQkFBTTs7O0lBRHNCLGVBQXFDO0lBQXJDLCtDQUFxQzs7O0lBRWpFLDhCQUEwSDtJQUFBLFlBQStCO0lBQUEsaUJBQU07OztJQUFyQyxlQUErQjtJQUEvQix3REFBK0I7OztJQVF2SiwrQkFBK0Q7SUFBQSw0QkFBTTtJQUFBLFlBQXVCO0lBQUEsaUJBQU87SUFBQSxpQkFBTTs7OztJQUFwQyxlQUF1QjtJQUF2Qiw2Q0FBdUI7Ozs7SUFQOUYseUNBT0U7SUFGQSw2UEFBK0IsZ1BBQUE7SUFFL0IscUZBQStEO0lBQ2pFLGlCQUFnQjs7OztJQUxkLHNEQUFtQztJQURuQywwSEFBMEMsdUNBQUE7SUFLakIsZUFBcUM7SUFBckMsK0NBQXFDOzs7O0lBRWhFLHVDQWdCYztJQVRWLG1PQUF1QixpTUFBQSx5TUFBQSxtTUFBQSxzTUFBQSxtTUFBQTtJQVMzQixpQkFBYzs7O0lBZFYsb0RBQStCLHlCQUFBLGlEQUFBLHFDQUFBLG1DQUFBLDZCQUFBLDBCQUFBLG1DQUFBOztBQXZDM0Msc0RBQXNEO0FBQ3RELE1BQU0sb0JBQW9CLEdBQUc7SUFDM0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQU1GLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxlQUFlO0lBQ3JELFFBQVEsQ0FBQyxDQUFDO1FBQ1IsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzsrR0FIVSxrQkFBa0I7dURBQWxCLGtCQUFrQjs7UUFGbEIsOEJBQW9DO1FBQUEsa0JBQVk7UUFBYSwrREFBcUU7UUFBSSxpQkFBTTs7UUFBdkQsZUFBaUI7UUFBakIsb0NBQWlCOzsrRUFFdEcsa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FKOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsOElBQThJO2FBQ3pKOztBQWlERCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZ0JBQWdCO0lBSXZELFlBQVksT0FBbUIsRUFBRSxjQUE4QixFQUFFLE1BQXdCO1FBQ3ZGLEtBQUssQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBSHpDLGtCQUFhLEdBQVksSUFBSSxDQUFDO0lBSTlCLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBSztRQUNiLE9BQU87SUFDVCxDQUFDOztzRkFWVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjs7c0ZBeENuQixDQUFDLG9CQUFvQixDQUFDO1FBSzNCLG9FQUNFO1FBRUYsb0VBQTBIO1FBQzFILHdGQU9FOztRQUVGLG9GQWdCQTtRQUNBLDhCQUNJO1FBQUEsZ0NBQXNCO1FBQzFCLGlCQUFNOztRQWhDOEIsMkNBQXdCO1FBR2xCLGVBQStFO1FBQS9FLDBHQUErRTtRQUV2SCxlQUFtQztRQUFuQywwREFBbUM7UUF1QmpDLGVBQTZEO1FBQTdELDBGQUE2RDsyQ0F6QzVELGtCQUFrQjtrREFnRGxCLG1CQUFtQjtjQTFDL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNqQyxJQUFJLEVBQUU7b0JBQ0osb0JBQW9CLEVBQUUsa0JBQWtCO2lCQUN6QztnQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQ1I7YUFDSDt5SEFHQyxhQUFhO2tCQURaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzJztcbmltcG9ydCB7IE5vdm9DaGlwRWxlbWVudCwgTm92b0NoaXBzRWxlbWVudCB9IGZyb20gJy4vQ2hpcHMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IENISVBTX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b1Jvd0NoaXBzRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1yb3ctY2hpcCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5vdm8tcm93LWNoaXBzLWNvbHVtbnNcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PGkgY2xhc3M9XCJiaGktZGVsZXRlLW9cIiAqbmdJZj1cIiFkaXNhYmxlZFwiIChjbGljayk9XCJvblJlbW92ZSgkZXZlbnQpXCI+PC9pPjwvZGl2PmAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Sb3dDaGlwRWxlbWVudCBleHRlbmRzIE5vdm9DaGlwRWxlbWVudCB7XG4gIG9uU2VsZWN0KGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1yb3ctY2hpcHMnLFxuICBwcm92aWRlcnM6IFtDSElQU19WQUxVRV9BQ0NFU1NPUl0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLndpdGgtdmFsdWVdJzogJ2l0ZW1zLmxlbmd0aCA+IDAnLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1yb3ctY2hpcHMtY29sdW1uc1wiICpuZ0lmPVwiaXRlbXMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tbGFiZWxcIiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIHNvdXJjZS5jb2x1bW5zXCI+e3sgY29sdW1uLmxhYmVsIH19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1yb3ctY2hpcHMtZW1wdHktbWVzc2FnZVwiICpuZ0lmPVwic291cmNlLmVtcHR5UmVhZE9ubHlNZXNzYWdlICYmIGRpc2FibGVQaWNrZXJJbnB1dCAmJiBpdGVtcy5sZW5ndGggPT09IDBcIj57e3NvdXJjZS5lbXB0eVJlYWRPbmx5TWVzc2FnZX19PC9kaXY+XG4gICAgICAgIDxub3ZvLXJvdy1jaGlwXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgX2l0ZW1zIHwgYXN5bmNcIlxuICAgICAgICAgIFt0eXBlXT1cInR5cGUgfHwgaXRlbT8udmFsdWU/LnNlYXJjaEVudGl0eVwiXG4gICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cIml0ZW0gPT0gc2VsZWN0ZWRcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlUGlja2VySW5wdXRcIlxuICAgICAgICAgIChyZW1vdmUpPVwicmVtb3ZlKCRldmVudCwgaXRlbSlcIlxuICAgICAgICAgIChzZWxlY3QpPVwic2VsZWN0KCRldmVudCwgaXRlbSlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLWRhdGFcIiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIHNvdXJjZS5jb2x1bW5zXCI+PHNwYW4+e3sgY29sdW1uLmRhdGEoaXRlbSkgfX08L3NwYW4+PC9kaXY+XG4gICAgICAgIDwvbm92by1yb3ctY2hpcD5cbiAgICAgICAgPG5vdm8tcGlja2VyXG4gICAgICAgICAgICBjbGVhclZhbHVlT25TZWxlY3Q9XCJ0cnVlXCJcbiAgICAgICAgICAgIFtjbG9zZU9uU2VsZWN0XT1cImNsb3NlT25TZWxlY3RcIlxuICAgICAgICAgICAgW2NvbmZpZ109XCJzb3VyY2VcIlxuICAgICAgICAgICAgW2Rpc2FibGVQaWNrZXJJbnB1dF09XCJkaXNhYmxlUGlja2VySW5wdXRcIlxuICAgICAgICAgICAgW2hpZGRlbl09XCJkaXNhYmxlUGlja2VySW5wdXRcIlxuICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaXRlbVRvQWRkXCJcbiAgICAgICAgICAgIChzZWxlY3QpPVwiYWRkKCRldmVudClcIlxuICAgICAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgICAodHlwaW5nKT1cIm9uVHlwaW5nKCRldmVudClcIlxuICAgICAgICAgICAgKGJsdXIpPVwib25Ub3VjaGVkKCRldmVudClcIlxuICAgICAgICAgICAgW3NlbGVjdGVkXT1cIml0ZW1zXCJcbiAgICAgICAgICAgIFtvdmVycmlkZUVsZW1lbnRdPVwiZWxlbWVudFwiXG4gICAgICAgICAgICAqbmdJZj1cIiFtYXhsZW5ndGggfHwgKG1heGxlbmd0aCAmJiBpdGVtcy5sZW5ndGggPCBtYXhsZW5ndGgpXCI+XG4gICAgICAgIDwvbm92by1waWNrZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHNwYW4gI3ByZXZpZXc+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Sb3dDaGlwc0VsZW1lbnQgZXh0ZW5kcyBOb3ZvQ2hpcHNFbGVtZW50IHtcbiAgQElucHV0KClcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzLCBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb21wb25lbnRVdGlscywgbGFiZWxzKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19