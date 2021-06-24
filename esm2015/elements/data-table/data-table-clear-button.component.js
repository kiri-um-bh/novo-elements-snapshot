import { Component, ChangeDetectionStrategy, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { DataTableState } from './state/data-table-state.service';
import { NovoLabelService } from '../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "./state/data-table-state.service";
import * as i2 from "../../services/novo-label-service";
import * as i3 from "../dropdown/Dropdown";
import * as i4 from "../button/Button";
import * as i5 from "@angular/common";
function NovoDataTableClearButton_item_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "item", 5);
    i0.ɵɵlistener("click", function NovoDataTableClearButton_item_4_Template_item_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.clearSort(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.labels.clearSort);
} }
function NovoDataTableClearButton_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "item", 6);
    i0.ɵɵlistener("click", function NovoDataTableClearButton_item_5_Template_item_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.clearFilter(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.labels.clearFilter);
} }
function NovoDataTableClearButton_item_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "item", 7);
    i0.ɵɵlistener("click", function NovoDataTableClearButton_item_6_Template_item_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.clearAll(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.labels.clearAllNormalCase);
} }
export class NovoDataTableClearButton {
    constructor(state, ref, labels) {
        this.state = state;
        this.ref = ref;
        this.labels = labels;
        this.sortClear = new EventEmitter();
        this.filterClear = new EventEmitter();
        this.allClear = new EventEmitter();
    }
    clearSort() {
        this.state.clearSort();
        this.sortClear.emit(true);
    }
    clearFilter() {
        this.state.clearFilter();
        this.filterClear.emit(true);
    }
    clearAll() {
        this.state.reset();
        this.allClear.emit(true);
        this.sortClear.emit(true);
        this.filterClear.emit(true);
    }
}
NovoDataTableClearButton.ɵfac = function NovoDataTableClearButton_Factory(t) { return new (t || NovoDataTableClearButton)(i0.ɵɵdirectiveInject(i1.DataTableState), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.NovoLabelService)); };
NovoDataTableClearButton.ɵcmp = i0.ɵɵdefineComponent({ type: NovoDataTableClearButton, selectors: [["novo-data-table-clear-button"]], outputs: { sortClear: "sortClear", filterClear: "filterClear", allClear: "allClear" }, decls: 7, vars: 4, consts: [["side", "bottom-right", "data-automation-id", "novo-data-table-clear-dropdown", 1, "novo-data-table-clear-button"], ["type", "button", "theme", "primary", "color", "negative", "icon", "collapse", "data-automation-id", "novo-data-table-clear-dropdown-btn"], ["data-automation-id", "novo-data-table-clear-dropdown-clear-sort", 3, "click", 4, "ngIf"], ["data-automation-id", "novo-data-table-clear-dropdown-clear-filter", 3, "click", 4, "ngIf"], ["data-automation-id", "novo-data-table-clear-dropdown-clear-all", 3, "click", 4, "ngIf"], ["data-automation-id", "novo-data-table-clear-dropdown-clear-sort", 3, "click"], ["data-automation-id", "novo-data-table-clear-dropdown-clear-filter", 3, "click"], ["data-automation-id", "novo-data-table-clear-dropdown-clear-all", 3, "click"]], template: function NovoDataTableClearButton_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "novo-dropdown", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "list");
        i0.ɵɵtemplate(4, NovoDataTableClearButton_item_4_Template, 2, 1, "item", 2);
        i0.ɵɵtemplate(5, NovoDataTableClearButton_item_5_Template, 2, 1, "item", 3);
        i0.ɵɵtemplate(6, NovoDataTableClearButton_item_6_Template, 2, 1, "item", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.labels.clear);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.state.sort);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.state.filter);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.state.sort && ctx.state.filter);
    } }, directives: [i3.NovoDropdownElement, i4.NovoButtonElement, i3.NovoDropdownListElement, i5.NgIf, i3.NovoItemElement], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDataTableClearButton, [{
        type: Component,
        args: [{
                selector: 'novo-data-table-clear-button',
                template: `
    <novo-dropdown side="bottom-right" class="novo-data-table-clear-button" data-automation-id="novo-data-table-clear-dropdown">
      <button type="button" theme="primary" color="negative" icon="collapse" data-automation-id="novo-data-table-clear-dropdown-btn">{{ labels.clear }}</button>
      <list>
          <item *ngIf="state.sort" (click)="clearSort()" data-automation-id="novo-data-table-clear-dropdown-clear-sort">{{ labels.clearSort }}</item>
          <item *ngIf="state.filter" (click)="clearFilter()" data-automation-id="novo-data-table-clear-dropdown-clear-filter">{{ labels.clearFilter }}</item>
          <item *ngIf="state.sort && state.filter" (click)="clearAll()" data-automation-id="novo-data-table-clear-dropdown-clear-all">{{ labels.clearAllNormalCase }}</item>
      </list>
    </novo-dropdown>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.DataTableState }, { type: i0.ChangeDetectorRef }, { type: i2.NovoLabelService }]; }, { sortClear: [{
            type: Output
        }], filterClear: [{
            type: Output
        }], allClear: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jbGVhci1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS1jbGVhci1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7Ozs7OztJQVEzRCwrQkFBOEc7SUFBckYsMExBQXFCO0lBQWdFLFlBQXNCO0lBQUEsaUJBQU87OztJQUE3QixlQUFzQjtJQUF0Qiw2Q0FBc0I7Ozs7SUFDcEksK0JBQW9IO0lBQXpGLDRMQUF1QjtJQUFrRSxZQUF3QjtJQUFBLGlCQUFPOzs7SUFBL0IsZUFBd0I7SUFBeEIsK0NBQXdCOzs7O0lBQzVJLCtCQUE0SDtJQUFuRix5TEFBb0I7SUFBK0QsWUFBK0I7SUFBQSxpQkFBTzs7O0lBQXRDLGVBQStCO0lBQS9CLHNEQUErQjs7QUFNckssTUFBTSxPQUFPLHdCQUF3QjtJQVFuQyxZQUFtQixLQUF3QixFQUFVLEdBQXNCLEVBQVMsTUFBd0I7UUFBekYsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBTjVHLGNBQVMsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RCxnQkFBVyxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhELGFBQVEsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUUwRCxDQUFDO0lBRWhILFNBQVM7UUFDUCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0dBekJVLHdCQUF3Qjs2REFBeEIsd0JBQXdCO1FBWGpDLHdDQUNFO1FBQUEsaUNBQStIO1FBQUEsWUFBa0I7UUFBQSxpQkFBUztRQUMxSiw0QkFDSTtRQUFBLDJFQUE4RztRQUM5RywyRUFBb0g7UUFDcEgsMkVBQTRIO1FBQ2hJLGlCQUFPO1FBQ1QsaUJBQWdCOztRQU5pSCxlQUFrQjtRQUFsQixzQ0FBa0I7UUFFdkksZUFBa0I7UUFBbEIscUNBQWtCO1FBQ2xCLGVBQW9CO1FBQXBCLHVDQUFvQjtRQUNwQixlQUFrQztRQUFsQyx5REFBa0M7O2tEQU1yQyx3QkFBd0I7Y0FkcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Z0lBR0MsU0FBUztrQkFEUixNQUFNO1lBR1AsV0FBVztrQkFEVixNQUFNO1lBR1AsUUFBUTtrQkFEUCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGFUYWJsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZS9kYXRhLXRhYmxlLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0YS10YWJsZS1jbGVhci1idXR0b24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxub3ZvLWRyb3Bkb3duIHNpZGU9XCJib3R0b20tcmlnaHRcIiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1jbGVhci1idXR0b25cIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtY2xlYXItZHJvcGRvd25cIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwicHJpbWFyeVwiIGNvbG9yPVwibmVnYXRpdmVcIiBpY29uPVwiY29sbGFwc2VcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtY2xlYXItZHJvcGRvd24tYnRuXCI+e3sgbGFiZWxzLmNsZWFyIH19PC9idXR0b24+XG4gICAgICA8bGlzdD5cbiAgICAgICAgICA8aXRlbSAqbmdJZj1cInN0YXRlLnNvcnRcIiAoY2xpY2spPVwiY2xlYXJTb3J0KClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtY2xlYXItZHJvcGRvd24tY2xlYXItc29ydFwiPnt7IGxhYmVscy5jbGVhclNvcnQgfX08L2l0ZW0+XG4gICAgICAgICAgPGl0ZW0gKm5nSWY9XCJzdGF0ZS5maWx0ZXJcIiAoY2xpY2spPVwiY2xlYXJGaWx0ZXIoKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1jbGVhci1kcm9wZG93bi1jbGVhci1maWx0ZXJcIj57eyBsYWJlbHMuY2xlYXJGaWx0ZXIgfX08L2l0ZW0+XG4gICAgICAgICAgPGl0ZW0gKm5nSWY9XCJzdGF0ZS5zb3J0ICYmIHN0YXRlLmZpbHRlclwiIChjbGljayk9XCJjbGVhckFsbCgpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWNsZWFyLWRyb3Bkb3duLWNsZWFyLWFsbFwiPnt7IGxhYmVscy5jbGVhckFsbE5vcm1hbENhc2UgfX08L2l0ZW0+XG4gICAgICA8L2xpc3Q+XG4gICAgPC9ub3ZvLWRyb3Bkb3duPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZUNsZWFyQnV0dG9uPFQ+IHtcbiAgQE91dHB1dCgpXG4gIHNvcnRDbGVhcjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZmlsdGVyQ2xlYXI6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGFsbENsZWFyOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0YXRlOiBEYXRhVGFibGVTdGF0ZTxUPiwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIGNsZWFyU29ydCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlLmNsZWFyU29ydCgpO1xuICAgIHRoaXMuc29ydENsZWFyLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBjbGVhckZpbHRlcigpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlLmNsZWFyRmlsdGVyKCk7XG4gICAgdGhpcy5maWx0ZXJDbGVhci5lbWl0KHRydWUpO1xuICB9XG5cbiAgY2xlYXJBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZS5yZXNldCgpO1xuICAgIHRoaXMuYWxsQ2xlYXIuZW1pdCh0cnVlKTtcbiAgICB0aGlzLnNvcnRDbGVhci5lbWl0KHRydWUpO1xuICAgIHRoaXMuZmlsdGVyQ2xlYXIuZW1pdCh0cnVlKTtcbiAgfVxufVxuIl19