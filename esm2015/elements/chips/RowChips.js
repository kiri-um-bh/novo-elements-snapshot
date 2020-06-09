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
const ɵNovoRowChipElement_BaseFactory = i0.ɵɵgetInheritedFactory(NovoRowChipElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm93Q2hpcHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2hpcHMvUm93Q2hpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sU0FBUyxDQUFDOzs7Ozs7Ozs7SUFXYyw0QkFBeUU7SUFBL0IseUxBQTBCO0lBQUMsaUJBQUk7Ozs7SUFnQnpJLDhCQUFnRTtJQUFBLFlBQWtCO0lBQUEsaUJBQU07OztJQUF4QixlQUFrQjtJQUFsQixxQ0FBa0I7OztJQURwRiw4QkFDRTtJQUFBLDBFQUFnRTtJQUNsRSxpQkFBTTs7O0lBRHNCLGVBQXFDO0lBQXJDLCtDQUFxQzs7O0lBRWpFLDhCQUEwSDtJQUFBLFlBQStCO0lBQUEsaUJBQU07OztJQUFyQyxlQUErQjtJQUEvQix3REFBK0I7OztJQVF2SiwrQkFBK0Q7SUFBQSw0QkFBTTtJQUFBLFlBQXVCO0lBQUEsaUJBQU87SUFBQSxpQkFBTTs7OztJQUFwQyxlQUF1QjtJQUF2Qiw2Q0FBdUI7Ozs7SUFQOUYseUNBT0U7SUFGQSw2UEFBK0IsZ1BBQUE7SUFFL0IscUZBQStEO0lBQ2pFLGlCQUFnQjs7OztJQUxkLHNEQUFtQztJQURuQywwSEFBMEMsdUNBQUE7SUFLakIsZUFBcUM7SUFBckMsK0NBQXFDOzs7O0lBRWhFLHVDQWdCYztJQVRWLG1PQUF1QixpTUFBQSx5TUFBQSxtTUFBQSxzTUFBQSxtTUFBQTtJQVMzQixpQkFBYzs7O0lBZFYsb0RBQStCLHlCQUFBLGlEQUFBLHFDQUFBLG1DQUFBLDZCQUFBLDBCQUFBLG1DQUFBOztBQXZDM0Msc0RBQXNEO0FBQ3RELE1BQU0sb0JBQW9CLEdBQUc7SUFDM0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQU1GLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxlQUFlO0lBQ3JELFFBQVEsQ0FBQyxDQUFDO1FBQ1IsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzsrR0FIVSxrQkFBa0I7dURBQWxCLGtCQUFrQjs7UUFGbEIsOEJBQW9DO1FBQUEsa0JBQVk7UUFBYSwrREFBcUU7UUFBSSxpQkFBTTs7UUFBdkQsZUFBaUI7UUFBakIsb0NBQWlCOztpRUFFdEcsa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FKOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsOElBQThJO2FBQ3pKOztBQWlERCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZ0JBQWdCO0lBSXZELFlBQVksT0FBbUIsRUFBRSxjQUE4QixFQUFFLE1BQXdCO1FBQ3ZGLEtBQUssQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBSHpDLGtCQUFhLEdBQVksSUFBSSxDQUFDO0lBSTlCLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBSztRQUNiLE9BQU87SUFDVCxDQUFDOztzRkFWVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjs7c0ZBeENuQixDQUFDLG9CQUFvQixDQUFDO1FBSzNCLG9FQUNFO1FBRUYsb0VBQTBIO1FBQzFILHdGQU9FOztRQUVGLG9GQWdCQTtRQUNBLDhCQUNJO1FBQUEsZ0NBQXNCO1FBQzFCLGlCQUFNOztRQWhDOEIsMkNBQXdCO1FBR2xCLGVBQStFO1FBQS9FLDBHQUErRTtRQUV2SCxlQUFtQztRQUFuQywwREFBbUM7UUF1QmpDLGVBQTZEO1FBQTdELDBGQUE2RDsyQ0F6QzVELGtCQUFrQjtrREFnRGxCLG1CQUFtQjtjQTFDL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNqQyxJQUFJLEVBQUU7b0JBQ0osb0JBQW9CLEVBQUUsa0JBQWtCO2lCQUN6QztnQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQ1I7YUFDSDs7a0JBRUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuaW1wb3J0IHsgTm92b0NoaXBFbGVtZW50LCBOb3ZvQ2hpcHNFbGVtZW50IH0gZnJvbSAnLi9DaGlwcyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0hJUFNfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvUm93Q2hpcHNFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXJvdy1jaGlwJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibm92by1yb3ctY2hpcHMtY29sdW1uc1wiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48aSBjbGFzcz1cImJoaS1kZWxldGUtb1wiICpuZ0lmPVwiIWRpc2FibGVkXCIgKGNsaWNrKT1cIm9uUmVtb3ZlKCRldmVudClcIj48L2k+PC9kaXY+YCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1Jvd0NoaXBFbGVtZW50IGV4dGVuZHMgTm92b0NoaXBFbGVtZW50IHtcbiAgb25TZWxlY3QoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXJvdy1jaGlwcycsXG4gIHByb3ZpZGVyczogW0NISVBTX1ZBTFVFX0FDQ0VTU09SXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Mud2l0aC12YWx1ZV0nOiAnaXRlbXMubGVuZ3RoID4gMCcsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXJvdy1jaGlwcy1jb2x1bW5zXCIgKm5nSWY9XCJpdGVtcy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1sYWJlbFwiICpuZ0Zvcj1cImxldCBjb2x1bW4gb2Ygc291cmNlLmNvbHVtbnNcIj57eyBjb2x1bW4ubGFiZWwgfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXJvdy1jaGlwcy1lbXB0eS1tZXNzYWdlXCIgKm5nSWY9XCJzb3VyY2UuZW1wdHlSZWFkT25seU1lc3NhZ2UgJiYgZGlzYWJsZVBpY2tlcklucHV0ICYmIGl0ZW1zLmxlbmd0aCA9PT0gMFwiPnt7c291cmNlLmVtcHR5UmVhZE9ubHlNZXNzYWdlfX08L2Rpdj5cbiAgICAgICAgPG5vdm8tcm93LWNoaXBcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfaXRlbXMgfCBhc3luY1wiXG4gICAgICAgICAgW3R5cGVdPVwidHlwZSB8fCBpdGVtPy52YWx1ZT8uc2VhcmNoRW50aXR5XCJcbiAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXRlbSA9PSBzZWxlY3RlZFwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAgICAgKHJlbW92ZSk9XCJyZW1vdmUoJGV2ZW50LCBpdGVtKVwiXG4gICAgICAgICAgKHNlbGVjdCk9XCJzZWxlY3QoJGV2ZW50LCBpdGVtKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tZGF0YVwiICpuZ0Zvcj1cImxldCBjb2x1bW4gb2Ygc291cmNlLmNvbHVtbnNcIj48c3Bhbj57eyBjb2x1bW4uZGF0YShpdGVtKSB9fTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPC9ub3ZvLXJvdy1jaGlwPlxuICAgICAgICA8bm92by1waWNrZXJcbiAgICAgICAgICAgIGNsZWFyVmFsdWVPblNlbGVjdD1cInRydWVcIlxuICAgICAgICAgICAgW2Nsb3NlT25TZWxlY3RdPVwiY2xvc2VPblNlbGVjdFwiXG4gICAgICAgICAgICBbY29uZmlnXT1cInNvdXJjZVwiXG4gICAgICAgICAgICBbZGlzYWJsZVBpY2tlcklucHV0XT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAgICAgICBbaGlkZGVuXT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpdGVtVG9BZGRcIlxuICAgICAgICAgICAgKHNlbGVjdCk9XCJhZGQoJGV2ZW50KVwiXG4gICAgICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAgICh0eXBpbmcpPVwib25UeXBpbmcoJGV2ZW50KVwiXG4gICAgICAgICAgICAoYmx1cik9XCJvblRvdWNoZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICBbc2VsZWN0ZWRdPVwiaXRlbXNcIlxuICAgICAgICAgICAgW292ZXJyaWRlRWxlbWVudF09XCJlbGVtZW50XCJcbiAgICAgICAgICAgICpuZ0lmPVwiIW1heGxlbmd0aCB8fCAobWF4bGVuZ3RoICYmIGl0ZW1zLmxlbmd0aCA8IG1heGxlbmd0aClcIj5cbiAgICAgICAgPC9ub3ZvLXBpY2tlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8c3BhbiAjcHJldmlldz48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1Jvd0NoaXBzRWxlbWVudCBleHRlbmRzIE5vdm9DaGlwc0VsZW1lbnQge1xuICBASW5wdXQoKVxuICBjbG9zZU9uU2VsZWN0OiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMsIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbXBvbmVudFV0aWxzLCBsYWJlbHMpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=