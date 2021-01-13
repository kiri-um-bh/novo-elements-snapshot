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
const ɵNovoDropdownCell_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(NovoDropdownCell);
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
          <item
            *ngFor="let option of config.options"
            (action)="onClick(config, option, option.value)"
            [class.active]="(option || option.value) === value"
          >
            <span [attr.data-automation-id]="option.label || option">{{ option.label || option }}</span>
            <i *ngIf="(option || option.value) === value" class="bhi-check"></i>
          </item>
          <hr *ngIf="i < meta.dropdownCellConfig.length - 1" />
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcGRvd25DZWxsLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL2Ryb3Bkb3duLWNlbGwvRHJvcGRvd25DZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxNQUFNO0FBQ04sT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7SUFpQm5ELDRDQUE4QztJQUFBLFlBQXFCO0lBQUEsaUJBQXVCOzs7SUFBNUMsZUFBcUI7SUFBckIsd0NBQXFCOzs7SUFPakUsdUJBQW9FOzs7O0lBTnRFLCtCQUtFO0lBSEEsd1RBQWdEO0lBR2hELDRCQUF5RDtJQUFBLFlBQTRCO0lBQUEsaUJBQU87SUFDNUYsbUZBQWdFO0lBQ2xFLGlCQUFPOzs7O0lBSkwseUVBQW1EO0lBRTdDLGVBQWtEO0lBQWxELGtFQUFrRDtJQUFDLGVBQTRCO0lBQTVCLGtEQUE0QjtJQUNsRixlQUEwQztJQUExQyxzRUFBMEM7OztJQUUvQyxxQkFDRjs7O0lBWEEsNkJBQ0U7SUFBQSxrSEFBOEM7SUFDOUMsa0ZBS0U7SUFHRiw4RUFDRjtJQUFBLDBCQUFlOzs7OztJQVZTLGVBQXVCO0lBQXZCLHlDQUF1QjtJQUUzQyxlQUFxQztJQUFyQywyQ0FBcUM7SUFPbkMsZUFBOEM7SUFBOUMsdUVBQThDOztBQU01RCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsWUFBWTtJQU16QyxRQUFRO1FBQ2IsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7SUFFTSxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLO1FBQ2xDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLElBQUksTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7eUdBaEJVLGdCQUFnQjtxREFBaEIsZ0JBQWdCO1FBckJ6Qix3Q0FDRTtRQUFBLGlDQUNFO1FBQUEsK0JBQW9EO1FBQUEsWUFBVztRQUFBLGlCQUFPO1FBQ3hFLGlCQUFTO1FBQ1QsNEJBQ0U7UUFBQSxtRkFDRTtRQVdKLGlCQUFPO1FBQ1QsaUJBQWdCOztRQWhCd0MsZUFBVztRQUFYLCtCQUFXO1FBR2pELGVBQTZEO1FBQTdELHFEQUE2RDs7NkVBZ0J0RSxnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQXhCNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQlQ7YUFDRjtnQkFHQyxJQUFJO2tCQURILEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBCYXNlUmVuZGVyZXIgfSBmcm9tICcuLi9iYXNlLXJlbmRlcmVyL0Jhc2VSZW5kZXJlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU5vdm9Ecm9wZG93bkNlbGxDb25maWcge1xuICBjYXRlZ29yeT86IHN0cmluZztcbiAgY2FsbGJhY2s/OiBGdW5jdGlvbjtcbiAgb3B0aW9uczogKHsgbGFiZWw/OiBzdHJpbmc7IHZhbHVlPzogc3RyaW5nOyBjYWxsYmFjaz86IEZ1bmN0aW9uIH0gfCBzdHJpbmcpW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZHJvcGRvd24tY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5vdm8tZHJvcGRvd24gcGFyZW50U2Nyb2xsU2VsZWN0b3I9XCIudGFibGUtY29udGFpbmVyXCIgY29udGFpbmVyQ2xhc3M9XCJub3ZvLXRhYmxlLWRyb3Bkb3duLWNlbGxcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwic2Vjb25kYXJ5XCIgaWNvbj1cImNvbGxhcHNlXCIgaW52ZXJzZT5cbiAgICAgICAgPHNwYW4gZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kcm9wZG93bi1jZWxsLXZhbHVlXCI+e3sgdmFsdWUgfX08L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxsaXN0PlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb25maWcgb2YgbWV0YS5kcm9wZG93bkNlbGxDb25maWc7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICA8ZHJvcGRvd24taXRlbS1oZWFkZXIgKm5nSWY9XCJjb25maWcuY2F0ZWdvcnlcIj57eyBjb25maWcuY2F0ZWdvcnkgfX08L2Ryb3Bkb3duLWl0ZW0taGVhZGVyPlxuICAgICAgICAgIDxpdGVtXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbmZpZy5vcHRpb25zXCJcbiAgICAgICAgICAgIChhY3Rpb24pPVwib25DbGljayhjb25maWcsIG9wdGlvbiwgb3B0aW9uLnZhbHVlKVwiXG4gICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIihvcHRpb24gfHwgb3B0aW9uLnZhbHVlKSA9PT0gdmFsdWVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJvcHRpb24ubGFiZWwgfHwgb3B0aW9uXCI+e3sgb3B0aW9uLmxhYmVsIHx8IG9wdGlvbiB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiKG9wdGlvbiB8fCBvcHRpb24udmFsdWUpID09PSB2YWx1ZVwiIGNsYXNzPVwiYmhpLWNoZWNrXCI+PC9pPlxuICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICA8aHIgKm5nSWY9XCJpIDwgbWV0YS5kcm9wZG93bkNlbGxDb25maWcubGVuZ3RoIC0gMVwiIC8+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9saXN0PlxuICAgIDwvbm92by1kcm9wZG93bj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0Ryb3Bkb3duQ2VsbCBleHRlbmRzIEJhc2VSZW5kZXJlciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIG1ldGE6IGFueTtcbiAgQElucHV0KClcbiAgdmFsdWU6IGFueTtcblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gQ2hlY2sgZm9yIGFuZCBmaXggYmFkIGNvbmZpZ1xuICAgIGlmICghdGhpcy5tZXRhLmRyb3Bkb3duQ2VsbENvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFwiZHJvcGRvd25DZWxsQ29uZmlnXCIgb24gdGhlIGNvbHVtbiBzZXR1cCcpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNsaWNrKGNvbmZpZywgb3B0aW9uLCB2YWx1ZSk6IHZvaWQge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gb3B0aW9uLmNhbGxiYWNrIHx8IGNvbmZpZy5jYWxsYmFjaztcbiAgICBjYWxsYmFjayh0aGlzLmRhdGEsIHZhbHVlIHx8IG9wdGlvbik7XG4gIH1cbn1cbiJdfQ==