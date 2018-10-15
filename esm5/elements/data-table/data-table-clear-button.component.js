/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { DataTableState } from './state/data-table-state.service';
import { NovoLabelService } from '../../services/novo-label-service';
/**
 * @template T
 */
var NovoDataTableClearButton = /** @class */ (function () {
    function NovoDataTableClearButton(state, ref, labels) {
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
    NovoDataTableClearButton.prototype.clearSort = /**
     * @return {?}
     */
    function () {
        this.state.clearSort();
        this.sortClear.emit(true);
    };
    /**
     * @return {?}
     */
    NovoDataTableClearButton.prototype.clearFilter = /**
     * @return {?}
     */
    function () {
        this.state.clearFilter();
        this.filterClear.emit(true);
    };
    /**
     * @return {?}
     */
    NovoDataTableClearButton.prototype.clearAll = /**
     * @return {?}
     */
    function () {
        this.state.reset();
        this.allClear.emit(true);
        this.sortClear.emit(true);
        this.filterClear.emit(true);
    };
    NovoDataTableClearButton.decorators = [
        { type: Component, args: [{
                    selector: 'novo-data-table-clear-button',
                    template: "\n    <novo-dropdown side=\"right\" class=\"novo-data-table-clear-button\" data-automation-id=\"novo-data-table-clear-dropdown\">\n      <button type=\"button\" theme=\"primary\" color=\"negative\" icon=\"collapse\" data-automation-id=\"novo-data-table-clear-dropdown-btn\">{{ labels.clear }}</button>\n      <list>\n          <item *ngIf=\"state.sort\" (click)=\"clearSort()\" data-automation-id=\"novo-data-table-clear-dropdown-clear-sort\">{{ labels.clearSort }}</item>\n          <item *ngIf=\"state.filter\" (click)=\"clearFilter()\" data-automation-id=\"novo-data-table-clear-dropdown-clear-filter\">{{ labels.clearFilter }}</item>\n          <item *ngIf=\"state.sort && state.filter\" (click)=\"clearAll()\" data-automation-id=\"novo-data-table-clear-dropdown-clear-all\">{{ labels.clearAllNormalCase }}</item>\n      </list>\n    </novo-dropdown>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    NovoDataTableClearButton.ctorParameters = function () { return [
        { type: DataTableState },
        { type: ChangeDetectorRef },
        { type: NovoLabelService }
    ]; };
    NovoDataTableClearButton.propDecorators = {
        sortClear: [{ type: Output }],
        filterClear: [{ type: Output }],
        allClear: [{ type: Output }]
    };
    return NovoDataTableClearButton;
}());
export { NovoDataTableClearButton };
if (false) {
    /** @type {?} */
    NovoDataTableClearButton.prototype.sortClear;
    /** @type {?} */
    NovoDataTableClearButton.prototype.filterClear;
    /** @type {?} */
    NovoDataTableClearButton.prototype.allClear;
    /** @type {?} */
    NovoDataTableClearButton.prototype.state;
    /** @type {?} */
    NovoDataTableClearButton.prototype.ref;
    /** @type {?} */
    NovoDataTableClearButton.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jbGVhci1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS1jbGVhci1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7O0FBRXJFO0lBc0JFLGtDQUFtQixLQUF3QixFQUFVLEdBQXNCLEVBQVMsTUFBd0I7UUFBekYsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBTjVHLGNBQVMsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV0RCxnQkFBVyxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXhELGFBQVEsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUUwRCxDQUFDOzs7O0lBRWhILDRDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELDhDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxRQUFRLEVBQUUsNDFCQVNUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7O2dCQWhCUSxjQUFjO2dCQUY0QyxpQkFBaUI7Z0JBRzNFLGdCQUFnQjs7OzRCQWlCdEIsTUFBTTs4QkFFTixNQUFNOzJCQUVOLE1BQU07O0lBcUJULCtCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0ExQlksd0JBQXdCOzs7SUFDbkMsNkNBQ3NEOztJQUN0RCwrQ0FDd0Q7O0lBQ3hELDRDQUNxRDs7SUFFekMseUNBQStCOztJQUFFLHVDQUE4Qjs7SUFBRSwwQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlU3RhdGUgfSBmcm9tICcuL3N0YXRlL2RhdGEtdGFibGUtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRhLXRhYmxlLWNsZWFyLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5vdm8tZHJvcGRvd24gc2lkZT1cInJpZ2h0XCIgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtY2xlYXItYnV0dG9uXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWNsZWFyLWRyb3Bkb3duXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aGVtZT1cInByaW1hcnlcIiBjb2xvcj1cIm5lZ2F0aXZlXCIgaWNvbj1cImNvbGxhcHNlXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWNsZWFyLWRyb3Bkb3duLWJ0blwiPnt7IGxhYmVscy5jbGVhciB9fTwvYnV0dG9uPlxuICAgICAgPGxpc3Q+XG4gICAgICAgICAgPGl0ZW0gKm5nSWY9XCJzdGF0ZS5zb3J0XCIgKGNsaWNrKT1cImNsZWFyU29ydCgpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWNsZWFyLWRyb3Bkb3duLWNsZWFyLXNvcnRcIj57eyBsYWJlbHMuY2xlYXJTb3J0IH19PC9pdGVtPlxuICAgICAgICAgIDxpdGVtICpuZ0lmPVwic3RhdGUuZmlsdGVyXCIgKGNsaWNrKT1cImNsZWFyRmlsdGVyKClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtY2xlYXItZHJvcGRvd24tY2xlYXItZmlsdGVyXCI+e3sgbGFiZWxzLmNsZWFyRmlsdGVyIH19PC9pdGVtPlxuICAgICAgICAgIDxpdGVtICpuZ0lmPVwic3RhdGUuc29ydCAmJiBzdGF0ZS5maWx0ZXJcIiAoY2xpY2spPVwiY2xlYXJBbGwoKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1jbGVhci1kcm9wZG93bi1jbGVhci1hbGxcIj57eyBsYWJlbHMuY2xlYXJBbGxOb3JtYWxDYXNlIH19PC9pdGVtPlxuICAgICAgPC9saXN0PlxuICAgIDwvbm92by1kcm9wZG93bj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVDbGVhckJ1dHRvbjxUPiB7XG4gIEBPdXRwdXQoKVxuICBzb3J0Q2xlYXI6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGZpbHRlckNsZWFyOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBhbGxDbGVhcjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0ZTogRGF0YVRhYmxlU3RhdGU8VD4sIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cblxuICBjbGVhclNvcnQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZS5jbGVhclNvcnQoKTtcbiAgICB0aGlzLnNvcnRDbGVhci5lbWl0KHRydWUpO1xuICB9XG5cbiAgY2xlYXJGaWx0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZS5jbGVhckZpbHRlcigpO1xuICAgIHRoaXMuZmlsdGVyQ2xlYXIuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIGNsZWFyQWxsKCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUucmVzZXQoKTtcbiAgICB0aGlzLmFsbENsZWFyLmVtaXQodHJ1ZSk7XG4gICAgdGhpcy5zb3J0Q2xlYXIuZW1pdCh0cnVlKTtcbiAgICB0aGlzLmZpbHRlckNsZWFyLmVtaXQodHJ1ZSk7XG4gIH1cbn1cbiJdfQ==