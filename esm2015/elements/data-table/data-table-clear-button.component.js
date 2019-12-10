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
    <novo-dropdown side="right" class="novo-data-table-clear-button" data-automation-id="novo-data-table-clear-dropdown">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jbGVhci1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS1jbGVhci1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQWdCckUsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7O0lBUW5DLFlBQW1CLEtBQXdCLEVBQVUsR0FBc0IsRUFBUyxNQUF3QjtRQUF6RixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFONUcsY0FBUyxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRELGdCQUFXLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEQsYUFBUSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTBELENBQUM7Ozs7SUFFaEgsU0FBUztRQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFoQlEsY0FBYztZQUY0QyxpQkFBaUI7WUFHM0UsZ0JBQWdCOzs7d0JBaUJ0QixNQUFNOzBCQUVOLE1BQU07dUJBRU4sTUFBTTs7OztJQUpQLDZDQUNzRDs7SUFDdEQsK0NBQ3dEOztJQUN4RCw0Q0FDcUQ7O0lBRXpDLHlDQUErQjs7Ozs7SUFBRSx1Q0FBOEI7O0lBQUUsMENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGFUYWJsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZS9kYXRhLXRhYmxlLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0YS10YWJsZS1jbGVhci1idXR0b24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxub3ZvLWRyb3Bkb3duIHNpZGU9XCJyaWdodFwiIGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWNsZWFyLWJ1dHRvblwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1jbGVhci1kcm9wZG93blwiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGhlbWU9XCJwcmltYXJ5XCIgY29sb3I9XCJuZWdhdGl2ZVwiIGljb249XCJjb2xsYXBzZVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1jbGVhci1kcm9wZG93bi1idG5cIj57eyBsYWJlbHMuY2xlYXIgfX08L2J1dHRvbj5cbiAgICAgIDxsaXN0PlxuICAgICAgICAgIDxpdGVtICpuZ0lmPVwic3RhdGUuc29ydFwiIChjbGljayk9XCJjbGVhclNvcnQoKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1jbGVhci1kcm9wZG93bi1jbGVhci1zb3J0XCI+e3sgbGFiZWxzLmNsZWFyU29ydCB9fTwvaXRlbT5cbiAgICAgICAgICA8aXRlbSAqbmdJZj1cInN0YXRlLmZpbHRlclwiIChjbGljayk9XCJjbGVhckZpbHRlcigpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWNsZWFyLWRyb3Bkb3duLWNsZWFyLWZpbHRlclwiPnt7IGxhYmVscy5jbGVhckZpbHRlciB9fTwvaXRlbT5cbiAgICAgICAgICA8aXRlbSAqbmdJZj1cInN0YXRlLnNvcnQgJiYgc3RhdGUuZmlsdGVyXCIgKGNsaWNrKT1cImNsZWFyQWxsKClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtY2xlYXItZHJvcGRvd24tY2xlYXItYWxsXCI+e3sgbGFiZWxzLmNsZWFyQWxsTm9ybWFsQ2FzZSB9fTwvaXRlbT5cbiAgICAgIDwvbGlzdD5cbiAgICA8L25vdm8tZHJvcGRvd24+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlQ2xlYXJCdXR0b248VD4ge1xuICBAT3V0cHV0KClcbiAgc29ydENsZWFyOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBmaWx0ZXJDbGVhcjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgYWxsQ2xlYXI6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhdGU6IERhdGFUYWJsZVN0YXRlPFQ+LCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgY2xlYXJTb3J0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUuY2xlYXJTb3J0KCk7XG4gICAgdGhpcy5zb3J0Q2xlYXIuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIGNsZWFyRmlsdGVyKCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUuY2xlYXJGaWx0ZXIoKTtcbiAgICB0aGlzLmZpbHRlckNsZWFyLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBjbGVhckFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlLnJlc2V0KCk7XG4gICAgdGhpcy5hbGxDbGVhci5lbWl0KHRydWUpO1xuICAgIHRoaXMuc29ydENsZWFyLmVtaXQodHJ1ZSk7XG4gICAgdGhpcy5maWx0ZXJDbGVhci5lbWl0KHRydWUpO1xuICB9XG59XG4iXX0=