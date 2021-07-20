// NG2
import { Component, ElementRef, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
import { ComponentUtils } from '../../utils/component-utils/ComponentUtils';
import { NovoChipElement } from './Chip';
import { NovoChipsElement } from './Chips';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../utils/component-utils/ComponentUtils";
import * as i3 from "../../services/novo-label-service";
import * as i4 from "../field/field";
import * as i5 from "../field/input";
import * as i6 from "@angular/forms";
import * as i7 from "../picker/Picker";
function NovoRowChipElement_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 2);
    i0.ɵɵlistener("click", function NovoRowChipElement_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.remove(); });
    i0.ɵɵelementEnd();
} }
const _c0 = ["*"];
function NovoRowChipsElement_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r6 = ctx.$implicit;
    i0.ɵɵstyleProp("flex-basis", column_r6.width || 200, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(column_r6.label);
} }
function NovoRowChipsElement_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, NovoRowChipsElement_div_0_div_1_Template, 2, 3, "div", 7);
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
    i0.ɵɵtextInterpolate1(" ", ctx_r1.source.emptyReadOnlyMessage, " ");
} }
function NovoRowChipsElement_novo_row_chip_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "novo-field");
    i0.ɵɵelementStart(2, "input", 14);
    i0.ɵɵlistener("ngModelChange", function NovoRowChipsElement_novo_row_chip_2_div_1_ng_container_1_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r14); const column_r9 = i0.ɵɵnextContext().$implicit; const item_r7 = i0.ɵɵnextContext().$implicit; return (item_r7.value[column_r9.name] = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r9 = i0.ɵɵnextContext().$implicit;
    const item_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("type", column_r9.type || "text")("ngModel", item_r7.value[column_r9.name]);
} }
function NovoRowChipsElement_novo_row_chip_2_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r9 = i0.ɵɵnextContext().$implicit;
    const item_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(column_r9.data(item_r7));
} }
function NovoRowChipsElement_novo_row_chip_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, NovoRowChipsElement_novo_row_chip_2_div_1_ng_container_1_Template, 3, 2, "ng-container", 13);
    i0.ɵɵtemplate(2, NovoRowChipsElement_novo_row_chip_2_div_1_ng_container_2_Template, 3, 1, "ng-container", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r9 = ctx.$implicit;
    i0.ɵɵstyleProp("flex-basis", column_r9.width || 200, "px");
    i0.ɵɵclassProp("editable", column_r9.editable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r9.editable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r9.editable);
} }
function NovoRowChipsElement_novo_row_chip_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-row-chip", 10);
    i0.ɵɵlistener("removed", function NovoRowChipsElement_novo_row_chip_2_Template_novo_row_chip_removed_0_listener($event) { i0.ɵɵrestoreView(_r21); const item_r7 = ctx.$implicit; const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.remove($event, item_r7); })("selectionChange", function NovoRowChipsElement_novo_row_chip_2_Template_novo_row_chip_selectionChange_0_listener($event) { i0.ɵɵrestoreView(_r21); const item_r7 = ctx.$implicit; const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.select($event, item_r7); });
    i0.ɵɵtemplate(1, NovoRowChipsElement_novo_row_chip_2_div_1_Template, 3, 6, "div", 11);
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
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-picker", 15);
    i0.ɵɵlistener("ngModelChange", function NovoRowChipsElement_novo_picker_4_Template_novo_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.itemToAdd = $event; })("select", function NovoRowChipsElement_novo_picker_4_Template_novo_picker_select_0_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.add($event); })("keydown", function NovoRowChipsElement_novo_picker_4_Template_novo_picker_keydown_0_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.onKeyDown($event); })("focus", function NovoRowChipsElement_novo_picker_4_Template_novo_picker_focus_0_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.onFocus($event); })("typing", function NovoRowChipsElement_novo_picker_4_Template_novo_picker_typing_0_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.onTyping($event); })("blur", function NovoRowChipsElement_novo_picker_4_Template_novo_picker_blur_0_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.onTouched($event); });
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
NovoRowChipElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoRowChipElement, selectors: [["novo-row-chip"]], hostAttrs: ["role", "option", 1, "novo-row-chip", "novo-focus-indicator"], hostVars: 10, hostBindings: function NovoRowChipElement_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function NovoRowChipElement_click_HostBindingHandler($event) { return ctx._handleClick($event); })("keydown", function NovoRowChipElement_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); })("focus", function NovoRowChipElement_focus_HostBindingHandler() { return ctx.focus(); })("blur", function NovoRowChipElement_blur_HostBindingHandler() { return ctx._blur(); });
    } if (rf & 2) {
        i0.ɵɵattribute("tabindex", ctx.disabled ? null : ctx.tabIndex)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString())("aria-selected", ctx.ariaSelected);
        i0.ɵɵclassProp("novo-row-chip-selected", ctx.selected)("novo-row-chip-with-trailing-icon", ctx.removeIcon)("novo-row-chip-disabled", ctx.disabled);
    } }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[1, "novo-row-chips-columns"], ["class", "bhi-delete-o", 3, "click", 4, "ngIf"], [1, "bhi-delete-o", 3, "click"]], template: function NovoRowChipElement_Template(rf, ctx) { if (rf & 1) {
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
                template: `
    <div class="novo-row-chips-columns">
      <ng-content></ng-content>
      <i class="bhi-delete-o" *ngIf="!disabled" (click)="remove()"></i>
    </div>
  `,
                host: {
                    class: 'novo-row-chip novo-focus-indicator',
                    '[attr.tabindex]': 'disabled ? null : tabIndex',
                    role: 'option',
                    '[class.novo-row-chip-selected]': 'selected',
                    '[class.novo-row-chip-with-trailing-icon]': 'removeIcon',
                    '[class.novo-row-chip-disabled]': 'disabled',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-selected]': 'ariaSelected',
                    '(click)': '_handleClick($event)',
                    '(keydown)': '_handleKeydown($event)',
                    '(focus)': 'focus()',
                    '(blur)': '_blur()',
                },
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
    } }, inputs: { closeOnSelect: "closeOnSelect" }, features: [i0.ɵɵProvidersFeature([CHIPS_VALUE_ACCESSOR]), i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 6, consts: [["class", "novo-row-chips-columns", 4, "ngIf"], ["class", "novo-row-chips-empty-message", 4, "ngIf"], [3, "type", "selected", "disabled", "removed", "selectionChange", 4, "ngFor", "ngForOf"], ["clearValueOnSelect", "true", 3, "closeOnSelect", "config", "disablePickerInput", "hidden", "placeholder", "ngModel", "selected", "overrideElement", "ngModelChange", "select", "keydown", "focus", "typing", "blur", 4, "ngIf"], [1, "preview-container"], ["preview", ""], [1, "novo-row-chips-columns"], ["class", "column-label", 3, "flexBasis", 4, "ngFor", "ngForOf"], [1, "column-label"], [1, "novo-row-chips-empty-message"], [3, "type", "disabled", "removed", "selectionChange"], ["class", "column-data", 3, "editable", "flexBasis", 4, "ngFor", "ngForOf"], [1, "column-data"], [4, "ngIf"], ["novoInput", "", 3, "type", "ngModel", "ngModelChange"], ["clearValueOnSelect", "true", 3, "closeOnSelect", "config", "disablePickerInput", "hidden", "placeholder", "ngModel", "selected", "overrideElement", "ngModelChange", "select", "keydown", "focus", "typing", "blur"]], template: function NovoRowChipsElement_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.NgIf, i1.NgForOf, NovoRowChipElement, i4.NovoFieldElement, i5.NovoInput, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i7.NovoPickerElement], pipes: [i1.AsyncPipe], encapsulation: 2 });
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
      <div class="column-label" [style.flexBasis.px]="column.width || 200" *ngFor="let column of source.columns">{{ column.label }}</div>
    </div>
    <div class="novo-row-chips-empty-message" *ngIf="source.emptyReadOnlyMessage && disablePickerInput && items.length === 0">
      {{ source.emptyReadOnlyMessage }}
    </div>
    <novo-row-chip
      *ngFor="let item of _items | async"
      [type]="type || item?.value?.searchEntity"
      [class.selected]="item == selected"
      [disabled]="disablePickerInput"
      (removed)="remove($event, item)"
      (selectionChange)="select($event, item)"
    >
      <div
        class="column-data"
        [class.editable]="column.editable"
        [style.flexBasis.px]="column.width || 200"
        *ngFor="let column of source.columns"
      >
        <ng-container *ngIf="column.editable">
          <novo-field>
            <input novoInput [type]="column.type || 'text'" [(ngModel)]="item.value[column.name]" />
          </novo-field>
        </ng-container>
        <ng-container *ngIf="!column.editable">
          <span>{{ column.data(item) }}</span>
        </ng-container>
      </div>
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
      *ngIf="!maxlength || (maxlength && items.length < maxlength)"
    >
    </novo-picker>
    <div class="preview-container">
      <span #preview></span>
    </div>
  `,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i2.ComponentUtils }, { type: i3.NovoLabelService }]; }, { closeOnSelect: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm93Q2hpcHMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2hpcHMvUm93Q2hpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7SUFjckMsNEJBQWlFO0lBQXZCLDJLQUFrQjtJQUFDLGlCQUFJOzs7O0lBaUNqRSw4QkFBMkc7SUFBQSxZQUFrQjtJQUFBLGlCQUFNOzs7SUFBekcsMERBQTBDO0lBQXVDLGVBQWtCO0lBQWxCLHFDQUFrQjs7O0lBRC9ILDhCQUNFO0lBQUEsMEVBQTJHO0lBQzdHLGlCQUFNOzs7SUFEaUUsZUFBcUM7SUFBckMsK0NBQXFDOzs7SUFFNUcsOEJBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQU07OztJQURKLGVBQ0Y7SUFERSxtRUFDRjs7OztJQWVJLDZCQUNFO0lBQUEsa0NBQ0U7SUFBQSxpQ0FDRjtJQURrRCw0VEFBcUM7SUFBckYsaUJBQ0Y7SUFBQSxpQkFBYTtJQUNmLDBCQUFlOzs7O0lBRk0sZUFBOEI7SUFBOUIsK0NBQThCLDBDQUFBOzs7SUFHbkQsNkJBQ0U7SUFBQSw0QkFBTTtJQUFBLFlBQXVCO0lBQUEs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QUUsa0JBQWtCO2lCQUN6QztnQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvRFQ7YUFDRjt5SEFHQyxhQUFhO2tCQURaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzJztcbmltcG9ydCB7IE5vdm9DaGlwRWxlbWVudCB9IGZyb20gJy4vQ2hpcCc7XG5pbXBvcnQgeyBOb3ZvQ2hpcHNFbGVtZW50IH0gZnJvbSAnLi9DaGlwcyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0hJUFNfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvUm93Q2hpcHNFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXJvdy1jaGlwJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwibm92by1yb3ctY2hpcHMtY29sdW1uc1wiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPGkgY2xhc3M9XCJiaGktZGVsZXRlLW9cIiAqbmdJZj1cIiFkaXNhYmxlZFwiIChjbGljayk9XCJyZW1vdmUoKVwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbm92by1yb3ctY2hpcCBub3ZvLWZvY3VzLWluZGljYXRvcicsXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdkaXNhYmxlZCA/IG51bGwgOiB0YWJJbmRleCcsXG4gICAgcm9sZTogJ29wdGlvbicsXG4gICAgJ1tjbGFzcy5ub3ZvLXJvdy1jaGlwLXNlbGVjdGVkXSc6ICdzZWxlY3RlZCcsXG4gICAgJ1tjbGFzcy5ub3ZvLXJvdy1jaGlwLXdpdGgtdHJhaWxpbmctaWNvbl0nOiAncmVtb3ZlSWNvbicsXG4gICAgJ1tjbGFzcy5ub3ZvLXJvdy1jaGlwLWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJ1thdHRyLmRpc2FibGVkXSc6ICdkaXNhYmxlZCB8fCBudWxsJyxcbiAgICAnW2F0dHIuYXJpYS1kaXNhYmxlZF0nOiAnZGlzYWJsZWQudG9TdHJpbmcoKScsXG4gICAgJ1thdHRyLmFyaWEtc2VsZWN0ZWRdJzogJ2FyaWFTZWxlY3RlZCcsXG4gICAgJyhjbGljayknOiAnX2hhbmRsZUNsaWNrKCRldmVudCknLFxuICAgICcoa2V5ZG93biknOiAnX2hhbmRsZUtleWRvd24oJGV2ZW50KScsXG4gICAgJyhmb2N1cyknOiAnZm9jdXMoKScsXG4gICAgJyhibHVyKSc6ICdfYmx1cigpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1Jvd0NoaXBFbGVtZW50IGV4dGVuZHMgTm92b0NoaXBFbGVtZW50IHtcbiAgb25TZWxlY3QoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXJvdy1jaGlwcycsXG4gIHByb3ZpZGVyczogW0NISVBTX1ZBTFVFX0FDQ0VTU09SXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Mud2l0aC12YWx1ZV0nOiAnaXRlbXMubGVuZ3RoID4gMCcsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tcm93LWNoaXBzLWNvbHVtbnNcIiAqbmdJZj1cIml0ZW1zLmxlbmd0aCA+IDBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tbGFiZWxcIiBbc3R5bGUuZmxleEJhc2lzLnB4XT1cImNvbHVtbi53aWR0aCB8fCAyMDBcIiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIHNvdXJjZS5jb2x1bW5zXCI+e3sgY29sdW1uLmxhYmVsIH19PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tcm93LWNoaXBzLWVtcHR5LW1lc3NhZ2VcIiAqbmdJZj1cInNvdXJjZS5lbXB0eVJlYWRPbmx5TWVzc2FnZSAmJiBkaXNhYmxlUGlja2VySW5wdXQgJiYgaXRlbXMubGVuZ3RoID09PSAwXCI+XG4gICAgICB7eyBzb3VyY2UuZW1wdHlSZWFkT25seU1lc3NhZ2UgfX1cbiAgICA8L2Rpdj5cbiAgICA8bm92by1yb3ctY2hpcFxuICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgX2l0ZW1zIHwgYXN5bmNcIlxuICAgICAgW3R5cGVdPVwidHlwZSB8fCBpdGVtPy52YWx1ZT8uc2VhcmNoRW50aXR5XCJcbiAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJpdGVtID09IHNlbGVjdGVkXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlUGlja2VySW5wdXRcIlxuICAgICAgKHJlbW92ZWQpPVwicmVtb3ZlKCRldmVudCwgaXRlbSlcIlxuICAgICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3QoJGV2ZW50LCBpdGVtKVwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImNvbHVtbi1kYXRhXCJcbiAgICAgICAgW2NsYXNzLmVkaXRhYmxlXT1cImNvbHVtbi5lZGl0YWJsZVwiXG4gICAgICAgIFtzdHlsZS5mbGV4QmFzaXMucHhdPVwiY29sdW1uLndpZHRoIHx8IDIwMFwiXG4gICAgICAgICpuZ0Zvcj1cImxldCBjb2x1bW4gb2Ygc291cmNlLmNvbHVtbnNcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLmVkaXRhYmxlXCI+XG4gICAgICAgICAgPG5vdm8tZmllbGQ+XG4gICAgICAgICAgICA8aW5wdXQgbm92b0lucHV0IFt0eXBlXT1cImNvbHVtbi50eXBlIHx8ICd0ZXh0J1wiIFsobmdNb2RlbCldPVwiaXRlbS52YWx1ZVtjb2x1bW4ubmFtZV1cIiAvPlxuICAgICAgICAgIDwvbm92by1maWVsZD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29sdW1uLmVkaXRhYmxlXCI+XG4gICAgICAgICAgPHNwYW4+e3sgY29sdW1uLmRhdGEoaXRlbSkgfX08L3NwYW4+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9ub3ZvLXJvdy1jaGlwPlxuICAgIDxub3ZvLXBpY2tlclxuICAgICAgY2xlYXJWYWx1ZU9uU2VsZWN0PVwidHJ1ZVwiXG4gICAgICBbY2xvc2VPblNlbGVjdF09XCJjbG9zZU9uU2VsZWN0XCJcbiAgICAgIFtjb25maWddPVwic291cmNlXCJcbiAgICAgIFtkaXNhYmxlUGlja2VySW5wdXRdPVwiZGlzYWJsZVBpY2tlcklucHV0XCJcbiAgICAgIFtoaWRkZW5dPVwiZGlzYWJsZVBpY2tlcklucHV0XCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICBbKG5nTW9kZWwpXT1cIml0ZW1Ub0FkZFwiXG4gICAgICAoc2VsZWN0KT1cImFkZCgkZXZlbnQpXCJcbiAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcbiAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxuICAgICAgKHR5cGluZyk9XCJvblR5cGluZygkZXZlbnQpXCJcbiAgICAgIChibHVyKT1cIm9uVG91Y2hlZCgkZXZlbnQpXCJcbiAgICAgIFtzZWxlY3RlZF09XCJpdGVtc1wiXG4gICAgICBbb3ZlcnJpZGVFbGVtZW50XT1cImVsZW1lbnRcIlxuICAgICAgKm5nSWY9XCIhbWF4bGVuZ3RoIHx8IChtYXhsZW5ndGggJiYgaXRlbXMubGVuZ3RoIDwgbWF4bGVuZ3RoKVwiXG4gICAgPlxuICAgIDwvbm92by1waWNrZXI+XG4gICAgPGRpdiBjbGFzcz1cInByZXZpZXctY29udGFpbmVyXCI+XG4gICAgICA8c3BhbiAjcHJldmlldz48L3NwYW4+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Sb3dDaGlwc0VsZW1lbnQgZXh0ZW5kcyBOb3ZvQ2hpcHNFbGVtZW50IHtcbiAgQElucHV0KClcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzLCBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb21wb25lbnRVdGlscywgbGFiZWxzKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19