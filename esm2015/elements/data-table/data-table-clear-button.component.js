import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { NovoLabelService } from '../../services/novo-label-service';
import { DataTableState } from './state/data-table-state.service';
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
        i0.ɵɵtextInterpolate1(" ", ctx.labels.clear, " ");
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
      <button type="button" theme="primary" color="negative" icon="collapse" data-automation-id="novo-data-table-clear-dropdown-btn">
        {{ labels.clear }}
      </button>
      <list>
        <item *ngIf="state.sort" (click)="clearSort()" data-automation-id="novo-data-table-clear-dropdown-clear-sort">{{
          labels.clearSort
        }}</item>
        <item *ngIf="state.filter" (click)="clearFilter()" data-automation-id="novo-data-table-clear-dropdown-clear-filter">{{
          labels.clearFilter
        }}</item>
        <item *ngIf="state.sort && state.filter" (click)="clearAll()" data-automation-id="novo-data-table-clear-dropdown-clear-all">{{
          labels.clearAllNormalCase
        }}</item>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jbGVhci1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLWNsZWFyLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7O0lBVTFELCtCQUE4RztJQUFyRiwwTEFBcUI7SUFBZ0UsWUFFNUc7SUFBQSxpQkFBTzs7O0lBRnFHLGVBRTVHO0lBRjRHLDZDQUU1Rzs7OztJQUNGLCtCQUFvSDtJQUF6Riw0TEFBdUI7SUFBa0UsWUFFbEg7SUFBQSxpQkFBTzs7O0lBRjJHLGVBRWxIO0lBRmtILCtDQUVsSDs7OztJQUNGLCtCQUE0SDtJQUFuRix5TEFBb0I7SUFBK0QsWUFFMUg7SUFBQSxpQkFBTzs7O0lBRm1ILGVBRTFIO0lBRjBILHNEQUUxSDs7QUFNVixNQUFNLE9BQU8sd0JBQXdCO0lBUW5DLFlBQW1CLEtBQXdCLEVBQVUsR0FBc0IsRUFBUyxNQUF3QjtRQUF6RixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFONUcsY0FBUyxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRELGdCQUFXLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEQsYUFBUSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTBELENBQUM7SUFFaEgsU0FBUztRQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOztnR0F6QlUsd0JBQXdCOzZEQUF4Qix3QkFBd0I7UUFuQmpDLHdDQUNFO1FBQUEsaUNBQ0U7UUFBQSxZQUNGO1FBQUEsaUJBQVM7UUFDVCw0QkFDRTtRQUFBLDJFQUE4RztRQUc5RywyRUFBb0g7UUFHcEgsMkVBQTRIO1FBRzlILGlCQUFPO1FBQ1QsaUJBQWdCOztRQWJaLGVBQ0Y7UUFERSxpREFDRjtRQUVRLGVBQWtCO1FBQWxCLHFDQUFrQjtRQUdsQixlQUFvQjtRQUFwQix1Q0FBb0I7UUFHcEIsZUFBa0M7UUFBbEMseURBQWtDOztrREFRbkMsd0JBQXdCO2NBdEJwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtnSUFHQyxTQUFTO2tCQURSLE1BQU07WUFHUCxXQUFXO2tCQURWLE1BQU07WUFHUCxRQUFRO2tCQURQLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVRhYmxlU3RhdGUgfSBmcm9tICcuL3N0YXRlL2RhdGEtdGFibGUtc3RhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0YS10YWJsZS1jbGVhci1idXR0b24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxub3ZvLWRyb3Bkb3duIHNpZGU9XCJib3R0b20tcmlnaHRcIiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1jbGVhci1idXR0b25cIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtY2xlYXItZHJvcGRvd25cIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwicHJpbWFyeVwiIGNvbG9yPVwibmVnYXRpdmVcIiBpY29uPVwiY29sbGFwc2VcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtY2xlYXItZHJvcGRvd24tYnRuXCI+XG4gICAgICAgIHt7IGxhYmVscy5jbGVhciB9fVxuICAgICAgPC9idXR0b24+XG4gICAgICA8bGlzdD5cbiAgICAgICAgPGl0ZW0gKm5nSWY9XCJzdGF0ZS5zb3J0XCIgKGNsaWNrKT1cImNsZWFyU29ydCgpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWNsZWFyLWRyb3Bkb3duLWNsZWFyLXNvcnRcIj57e1xuICAgICAgICAgIGxhYmVscy5jbGVhclNvcnRcbiAgICAgICAgfX08L2l0ZW0+XG4gICAgICAgIDxpdGVtICpuZ0lmPVwic3RhdGUuZmlsdGVyXCIgKGNsaWNrKT1cImNsZWFyRmlsdGVyKClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtY2xlYXItZHJvcGRvd24tY2xlYXItZmlsdGVyXCI+e3tcbiAgICAgICAgICBsYWJlbHMuY2xlYXJGaWx0ZXJcbiAgICAgICAgfX08L2l0ZW0+XG4gICAgICAgIDxpdGVtICpuZ0lmPVwic3RhdGUuc29ydCAmJiBzdGF0ZS5maWx0ZXJcIiAoY2xpY2spPVwiY2xlYXJBbGwoKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1jbGVhci1kcm9wZG93bi1jbGVhci1hbGxcIj57e1xuICAgICAgICAgIGxhYmVscy5jbGVhckFsbE5vcm1hbENhc2VcbiAgICAgICAgfX08L2l0ZW0+XG4gICAgICA8L2xpc3Q+XG4gICAgPC9ub3ZvLWRyb3Bkb3duPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZUNsZWFyQnV0dG9uPFQ+IHtcbiAgQE91dHB1dCgpXG4gIHNvcnRDbGVhcjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZmlsdGVyQ2xlYXI6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGFsbENsZWFyOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0YXRlOiBEYXRhVGFibGVTdGF0ZTxUPiwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIGNsZWFyU29ydCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlLmNsZWFyU29ydCgpO1xuICAgIHRoaXMuc29ydENsZWFyLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBjbGVhckZpbHRlcigpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlLmNsZWFyRmlsdGVyKCk7XG4gICAgdGhpcy5maWx0ZXJDbGVhci5lbWl0KHRydWUpO1xuICB9XG5cbiAgY2xlYXJBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZS5yZXNldCgpO1xuICAgIHRoaXMuYWxsQ2xlYXIuZW1pdCh0cnVlKTtcbiAgICB0aGlzLnNvcnRDbGVhci5lbWl0KHRydWUpO1xuICAgIHRoaXMuZmlsdGVyQ2xlYXIuZW1pdCh0cnVlKTtcbiAgfVxufVxuIl19