/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/data-table-clear-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { DataTableState } from './state/data-table-state.service';
import { NovoLabelService } from '../../services/novo-label-service';
/**
 * @template T
 */
export class NovoDataTableClearButton {
    /**
     * @param {?} state
     * @param {?} ref
     * @param {?} labels
     */
    constructor(state, ref, labels) {
        this.state = state;
        this.ref = ref;
        this.labels = labels;
        this.sortClear = new EventEmitter();
        this.filterClear = new EventEmitter();
        this.allClear = new EventEmitter();
    }
    /**
     * @return {?}
     */
    clearSort() {
        this.state.clearSort();
        this.sortClear.emit(true);
    }
    /**
     * @return {?}
     */
    clearFilter() {
        this.state.clearFilter();
        this.filterClear.emit(true);
    }
    /**
     * @return {?}
     */
    clearAll() {
        this.state.reset();
        this.allClear.emit(true);
        this.sortClear.emit(true);
        this.filterClear.emit(true);
    }
}
NovoDataTableClearButton.decorators = [
    { type: Component, args: [{
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
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NovoDataTableClearButton.ctorParameters = () => [
    { type: DataTableState },
    { type: ChangeDetectorRef },
    { type: NovoLabelService }
];
NovoDataTableClearButton.propDecorators = {
    sortClear: [{ type: Output }],
    filterClear: [{ type: Output }],
    allClear: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NovoDataTableClearButton.prototype.sortClear;
    /** @type {?} */
    NovoDataTableClearButton.prototype.filterClear;
    /** @type {?} */
    NovoDataTableClearButton.prototype.allClear;
    /** @type {?} */
    NovoDataTableClearButton.prototype.state;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableClearButton.prototype.ref;
    /** @type {?} */
    NovoDataTableClearButton.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jbGVhci1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS1jbGVhci1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQWdCckUsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7O0lBUW5DLFlBQW1CLEtBQXdCLEVBQVUsR0FBc0IsRUFBUyxNQUF3QjtRQUF6RixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFONUcsY0FBUyxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRELGdCQUFXLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEQsYUFBUSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTBELENBQUM7Ozs7SUFFaEgsU0FBUztRQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFoQlEsY0FBYztZQUY0QyxpQkFBaUI7WUFHM0UsZ0JBQWdCOzs7d0JBaUJ0QixNQUFNOzBCQUVOLE1BQU07dUJBRU4sTUFBTTs7OztJQUpQLDZDQUNzRDs7SUFDdEQsK0NBQ3dEOztJQUN4RCw0Q0FDcUQ7O0lBRXpDLHlDQUErQjs7Ozs7SUFBRSx1Q0FBOEI7O0lBQUUsMENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGFUYWJsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZS9kYXRhLXRhYmxlLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0YS10YWJsZS1jbGVhci1idXR0b24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxub3ZvLWRyb3Bkb3duIHNpZGU9XCJib3R0b20tcmlnaHRcIiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1jbGVhci1idXR0b25cIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtY2xlYXItZHJvcGRvd25cIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwicHJpbWFyeVwiIGNvbG9yPVwibmVnYXRpdmVcIiBpY29uPVwiY29sbGFwc2VcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtY2xlYXItZHJvcGRvd24tYnRuXCI+e3sgbGFiZWxzLmNsZWFyIH19PC9idXR0b24+XG4gICAgICA8bGlzdD5cbiAgICAgICAgICA8aXRlbSAqbmdJZj1cInN0YXRlLnNvcnRcIiAoY2xpY2spPVwiY2xlYXJTb3J0KClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtY2xlYXItZHJvcGRvd24tY2xlYXItc29ydFwiPnt7IGxhYmVscy5jbGVhclNvcnQgfX08L2l0ZW0+XG4gICAgICAgICAgPGl0ZW0gKm5nSWY9XCJzdGF0ZS5maWx0ZXJcIiAoY2xpY2spPVwiY2xlYXJGaWx0ZXIoKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1jbGVhci1kcm9wZG93bi1jbGVhci1maWx0ZXJcIj57eyBsYWJlbHMuY2xlYXJGaWx0ZXIgfX08L2l0ZW0+XG4gICAgICAgICAgPGl0ZW0gKm5nSWY9XCJzdGF0ZS5zb3J0ICYmIHN0YXRlLmZpbHRlclwiIChjbGljayk9XCJjbGVhckFsbCgpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWNsZWFyLWRyb3Bkb3duLWNsZWFyLWFsbFwiPnt7IGxhYmVscy5jbGVhckFsbE5vcm1hbENhc2UgfX08L2l0ZW0+XG4gICAgICA8L2xpc3Q+XG4gICAgPC9ub3ZvLWRyb3Bkb3duPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZUNsZWFyQnV0dG9uPFQ+IHtcbiAgQE91dHB1dCgpXG4gIHNvcnRDbGVhcjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZmlsdGVyQ2xlYXI6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGFsbENsZWFyOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0YXRlOiBEYXRhVGFibGVTdGF0ZTxUPiwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIGNsZWFyU29ydCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlLmNsZWFyU29ydCgpO1xuICAgIHRoaXMuc29ydENsZWFyLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBjbGVhckZpbHRlcigpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlLmNsZWFyRmlsdGVyKCk7XG4gICAgdGhpcy5maWx0ZXJDbGVhci5lbWl0KHRydWUpO1xuICB9XG5cbiAgY2xlYXJBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZS5yZXNldCgpO1xuICAgIHRoaXMuYWxsQ2xlYXIuZW1pdCh0cnVlKTtcbiAgICB0aGlzLnNvcnRDbGVhci5lbWl0KHRydWUpO1xuICAgIHRoaXMuZmlsdGVyQ2xlYXIuZW1pdCh0cnVlKTtcbiAgfVxufVxuIl19