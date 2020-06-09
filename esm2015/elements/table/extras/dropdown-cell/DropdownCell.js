// NG2
import { Component, Input } from '@angular/core';
// APP
import { BaseRenderer } from '../base-renderer/BaseRenderer';
import * as i0 from "@angular/core";
import * as i1 from "../../../dropdown/Dropdown";
import * as i2 from "../../../button/Button";
import * as i3 from "@angular/common";
function NovoDropdownCell_ng_container_5_dropdown_item_header_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "dropdown-item-header");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const config_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(config_r1.category);
} }
function NovoDropdownCell_ng_container_5_item_2_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 8);
} }
function NovoDropdownCell_ng_container_5_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "item", 6);
    i0.ɵɵlistener("action", function NovoDropdownCell_ng_container_5_item_2_Template_item_action_0_listener() { i0.ɵɵrestoreView(_r11); const option_r7 = ctx.$implicit; const config_r1 = i0.ɵɵnextContext().$implicit; const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onClick(config_r1, option_r7, option_r7.value); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, NovoDropdownCell_ng_container_5_item_2_i_3_Template, 1, 0, "i", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", (option_r7 || option_r7.value) === ctx_r4.value);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-automation-id", option_r7.label || option_r7);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r7.label || option_r7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (option_r7 || option_r7.value) === ctx_r4.value);
} }
function NovoDropdownCell_ng_container_5_hr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr");
} }
function NovoDropdownCell_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NovoDropdownCell_ng_container_5_dropdown_item_header_1_Template, 2, 1, "dropdown-item-header", 4);
    i0.ɵɵtemplate(2, NovoDropdownCell_ng_container_5_item_2_Template, 4, 5, "item", 5);
    i0.ɵɵtemplate(3, NovoDropdownCell_ng_container_5_hr_3_Template, 1, 0, "hr", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const config_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", config_r1.category);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", config_r1.options);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i_r2 < ctx_r0.meta.dropdownCellConfig.length - 1);
} }
export class NovoDropdownCell extends BaseRenderer {
    ngOnInit() {
        // Check for and fix bad config
        if (!this.meta.dropdownCellConfig) {
            throw new Error('Missing "dropdownCellConfig" on the column setup');
        }
    }
    onClick(config, option, value) {
        const callback = option.callback || config.callback;
        callback(this.data, value || option);
    }
}
NovoDropdownCell.ɵfac = function NovoDropdownCell_Factory(t) { return ɵNovoDropdownCell_BaseFactory(t || NovoDropdownCell); };
NovoDropdownCell.ɵcmp = i0.ɵɵdefineComponent({ type: NovoDropdownCell, selectors: [["novo-dropdown-cell"]], inputs: { meta: "meta", value: "value" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 2, consts: [["parentScrollSelector", ".table-container", "containerClass", "novo-table-dropdown-cell"], ["type", "button", "theme", "secondary", "icon", "collapse", "inverse", ""], ["data-automation-id", "novo-dropdown-cell-value"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "active", "action", 4, "ngFor", "ngForOf"], [3, "action"], ["class", "bhi-check", 4, "ngIf"], [1, "bhi-check"]], template: function NovoDropdownCell_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "novo-dropdown", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵelementStart(2, "span", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "list");
        i0.ɵɵtemplate(5, NovoDropdownCell_ng_container_5_Template, 4, 3, "ng-container", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.value);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.meta.dropdownCellConfig);
    } }, directives: [i1.NovoDropdownElement, i2.NovoButtonElement, i1.NovoDropdownListElement, i3.NgForOf, i3.NgIf, i1.NovoDropDownItemHeaderElement, i1.NovoItemElement], encapsulation: 2 });
const ɵNovoDropdownCell_BaseFactory = i0.ɵɵgetInheritedFactory(NovoDropdownCell);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDropdownCell, [{
        type: Component,
        args: [{
                selector: 'novo-dropdown-cell',
                template: `
    <novo-dropdown parentScrollSelector=".table-container" containerClass="novo-table-dropdown-cell">
      <button type="button" theme="secondary" icon="collapse" inverse>
        <span data-automation-id="novo-dropdown-cell-value">{{ value }}</span>
      </button>
      <list>
        <ng-container *ngFor="let config of meta.dropdownCellConfig; let i = index">
          <dropdown-item-header *ngIf="config.category">{{ config.category }}</dropdown-item-header>
          <item *ngFor="let option of config.options" (action)="onClick(config, option, option.value)"
                [class.active]="(option || option.value) === value">
            <span [attr.data-automation-id]="option.label || option">{{ option.label || option }}</span>
            <i *ngIf="(option || option.value) === value" class="bhi-check"></i>
          </item>
          <hr *ngIf="i < meta.dropdownCellConfig.length - 1"/>
        </ng-container>
      </list>
    </novo-dropdown>
  `,
            }]
    }], null, { meta: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcGRvd25DZWxsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RhYmxlL2V4dHJhcy9kcm9wZG93bi1jZWxsL0Ryb3Bkb3duQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsTUFBTTtBQUNOLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7O0lBaUJuRCw0Q0FBOEM7SUFBQSxZQUFxQjtJQUFBLGlCQUF1Qjs7O0lBQTVDLGVBQXFCO0lBQXJCLHdDQUFxQjs7O0lBSWpFLHVCQUFvRTs7OztJQUh0RSwrQkFFRTtJQUYwQyx3VEFBZ0Q7SUFFMUYsNEJBQXlEO0lBQUEsWUFBNEI7SUFBQSxpQkFBTztJQUM1RixtRkFBZ0U7SUFDbEUsaUJBQU87Ozs7SUFIRCx5RUFBbUQ7SUFDakQsZUFBa0Q7SUFBbEQsa0VBQWtEO0lBQUMsZUFBNEI7SUFBNUIsa0RBQTRCO0lBQ2xGLGVBQTBDO0lBQTFDLHNFQUEwQzs7O0lBRS9DLHFCQUNGOzs7SUFSQSw2QkFDRTtJQUFBLGtIQUE4QztJQUM5QyxrRkFFRTtJQUdGLDhFQUNGO0lBQUEsMEJBQWU7Ozs7O0lBUFMsZUFBdUI7SUFBdkIseUNBQXVCO0lBQ3ZDLGVBQXFDO0lBQXJDLDJDQUFxQztJQUt2QyxlQUE4QztJQUE5Qyx1RUFBOEM7O0FBTTVELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxZQUFZO0lBTXpDLFFBQVE7UUFDYiwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQztJQUVNLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUs7UUFDbEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3BELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssSUFBSSxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOzt5R0FoQlUsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7UUFsQnpCLHdDQUNFO1FBQUEsaUNBQ0U7UUFBQSwrQkFBb0Q7UUFBQSxZQUFXO1FBQUEsaUJBQU87UUFDeEUsaUJBQVM7UUFDVCw0QkFDRTtRQUFBLG1GQUNFO1FBUUosaUJBQU87UUFDVCxpQkFBZ0I7O1FBYndDLGVBQVc7UUFBWCwrQkFBVztRQUdqRCxlQUE2RDtRQUE3RCxxREFBNkQ7OytEQWF0RSxnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQXJCNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQlQ7YUFDRjs7a0JBRUUsS0FBSzs7a0JBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEJhc2VSZW5kZXJlciB9IGZyb20gJy4uL2Jhc2UtcmVuZGVyZXIvQmFzZVJlbmRlcmVyJztcblxuZXhwb3J0IGludGVyZmFjZSBJTm92b0Ryb3Bkb3duQ2VsbENvbmZpZyB7XG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xuICBjYWxsYmFjaz86IEZ1bmN0aW9uO1xuICBvcHRpb25zOiAoeyBsYWJlbD86IHN0cmluZzsgdmFsdWU/OiBzdHJpbmc7IGNhbGxiYWNrPzogRnVuY3Rpb24gfSB8IHN0cmluZylbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kcm9wZG93bi1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bm92by1kcm9wZG93biBwYXJlbnRTY3JvbGxTZWxlY3Rvcj1cIi50YWJsZS1jb250YWluZXJcIiBjb250YWluZXJDbGFzcz1cIm5vdm8tdGFibGUtZHJvcGRvd24tY2VsbFwiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGhlbWU9XCJzZWNvbmRhcnlcIiBpY29uPVwiY29sbGFwc2VcIiBpbnZlcnNlPlxuICAgICAgICA8c3BhbiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRyb3Bkb3duLWNlbGwtdmFsdWVcIj57eyB2YWx1ZSB9fTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGxpc3Q+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbmZpZyBvZiBtZXRhLmRyb3Bkb3duQ2VsbENvbmZpZzsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgIDxkcm9wZG93bi1pdGVtLWhlYWRlciAqbmdJZj1cImNvbmZpZy5jYXRlZ29yeVwiPnt7IGNvbmZpZy5jYXRlZ29yeSB9fTwvZHJvcGRvd24taXRlbS1oZWFkZXI+XG4gICAgICAgICAgPGl0ZW0gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb25maWcub3B0aW9uc1wiIChhY3Rpb24pPVwib25DbGljayhjb25maWcsIG9wdGlvbiwgb3B0aW9uLnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCIob3B0aW9uIHx8IG9wdGlvbi52YWx1ZSkgPT09IHZhbHVlXCI+XG4gICAgICAgICAgICA8c3BhbiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwib3B0aW9uLmxhYmVsIHx8IG9wdGlvblwiPnt7IG9wdGlvbi5sYWJlbCB8fCBvcHRpb24gfX08L3NwYW4+XG4gICAgICAgICAgICA8aSAqbmdJZj1cIihvcHRpb24gfHwgb3B0aW9uLnZhbHVlKSA9PT0gdmFsdWVcIiBjbGFzcz1cImJoaS1jaGVja1wiPjwvaT5cbiAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgPGhyICpuZ0lmPVwiaSA8IG1ldGEuZHJvcGRvd25DZWxsQ29uZmlnLmxlbmd0aCAtIDFcIi8+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9saXN0PlxuICAgIDwvbm92by1kcm9wZG93bj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0Ryb3Bkb3duQ2VsbCBleHRlbmRzIEJhc2VSZW5kZXJlciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIG1ldGE6IGFueTtcbiAgQElucHV0KClcbiAgdmFsdWU6IGFueTtcblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gQ2hlY2sgZm9yIGFuZCBmaXggYmFkIGNvbmZpZ1xuICAgIGlmICghdGhpcy5tZXRhLmRyb3Bkb3duQ2VsbENvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFwiZHJvcGRvd25DZWxsQ29uZmlnXCIgb24gdGhlIGNvbHVtbiBzZXR1cCcpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNsaWNrKGNvbmZpZywgb3B0aW9uLCB2YWx1ZSk6IHZvaWQge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gb3B0aW9uLmNhbGxiYWNrIHx8IGNvbmZpZy5jYWxsYmFjaztcbiAgICBjYWxsYmFjayh0aGlzLmRhdGEsIHZhbHVlIHx8IG9wdGlvbik7XG4gIH1cbn1cbiJdfQ==