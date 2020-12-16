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
                    template: "\n    <novo-dropdown side=\"bottom-right\" class=\"novo-data-table-clear-button\" data-automation-id=\"novo-data-table-clear-dropdown\">\n      <button type=\"button\" theme=\"primary\" color=\"negative\" icon=\"collapse\" data-automation-id=\"novo-data-table-clear-dropdown-btn\">{{ labels.clear }}</button>\n      <list>\n          <item *ngIf=\"state.sort\" (click)=\"clearSort()\" data-automation-id=\"novo-data-table-clear-dropdown-clear-sort\">{{ labels.clearSort }}</item>\n          <item *ngIf=\"state.filter || state.globalSearch\" (click)=\"clearFilter()\" data-automation-id=\"novo-data-table-clear-dropdown-clear-filter\">{{ labels.clearFilter }}</item>\n          <item *ngIf=\"state.sort && (state.filter || state.globalSearch)\" (click)=\"clearAll()\" data-automation-id=\"novo-data-table-clear-dropdown-clear-all\">{{ labels.clearAllNormalCase }}</item>\n      </list>\n    </novo-dropdown>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
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
    /**
     * @type {?}
     * @private
     */
    NovoDataTableClearButton.prototype.ref;
    /** @type {?} */
    NovoDataTableClearButton.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jbGVhci1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS1jbGVhci1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUVyRTtJQXNCRSxrQ0FBbUIsS0FBd0IsRUFBVSxHQUFzQixFQUFTLE1BQXdCO1FBQXpGLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQU41RyxjQUFTLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEQsZ0JBQVcsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RCxhQUFRLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFMEQsQ0FBQzs7OztJQUVoSCw0Q0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCw4Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQXZDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsUUFBUSxFQUFFLGk1QkFTVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBaEJRLGNBQWM7Z0JBRjRDLGlCQUFpQjtnQkFHM0UsZ0JBQWdCOzs7NEJBaUJ0QixNQUFNOzhCQUVOLE1BQU07MkJBRU4sTUFBTTs7SUFxQlQsK0JBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQTFCWSx3QkFBd0I7OztJQUNuQyw2Q0FDc0Q7O0lBQ3RELCtDQUN3RDs7SUFDeEQsNENBQ3FEOztJQUV6Qyx5Q0FBK0I7Ozs7O0lBQUUsdUNBQThCOztJQUFFLDBDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVTdGF0ZSB9IGZyb20gJy4vc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRhdGEtdGFibGUtY2xlYXItYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bm92by1kcm9wZG93biBzaWRlPVwiYm90dG9tLXJpZ2h0XCIgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtY2xlYXItYnV0dG9uXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWNsZWFyLWRyb3Bkb3duXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aGVtZT1cInByaW1hcnlcIiBjb2xvcj1cIm5lZ2F0aXZlXCIgaWNvbj1cImNvbGxhcHNlXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWNsZWFyLWRyb3Bkb3duLWJ0blwiPnt7IGxhYmVscy5jbGVhciB9fTwvYnV0dG9uPlxuICAgICAgPGxpc3Q+XG4gICAgICAgICAgPGl0ZW0gKm5nSWY9XCJzdGF0ZS5zb3J0XCIgKGNsaWNrKT1cImNsZWFyU29ydCgpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWNsZWFyLWRyb3Bkb3duLWNsZWFyLXNvcnRcIj57eyBsYWJlbHMuY2xlYXJTb3J0IH19PC9pdGVtPlxuICAgICAgICAgIDxpdGVtICpuZ0lmPVwic3RhdGUuZmlsdGVyIHx8IHN0YXRlLmdsb2JhbFNlYXJjaFwiIChjbGljayk9XCJjbGVhckZpbHRlcigpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWNsZWFyLWRyb3Bkb3duLWNsZWFyLWZpbHRlclwiPnt7IGxhYmVscy5jbGVhckZpbHRlciB9fTwvaXRlbT5cbiAgICAgICAgICA8aXRlbSAqbmdJZj1cInN0YXRlLnNvcnQgJiYgKHN0YXRlLmZpbHRlciB8fCBzdGF0ZS5nbG9iYWxTZWFyY2gpXCIgKGNsaWNrKT1cImNsZWFyQWxsKClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtY2xlYXItZHJvcGRvd24tY2xlYXItYWxsXCI+e3sgbGFiZWxzLmNsZWFyQWxsTm9ybWFsQ2FzZSB9fTwvaXRlbT5cbiAgICAgIDwvbGlzdD5cbiAgICA8L25vdm8tZHJvcGRvd24+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlQ2xlYXJCdXR0b248VD4ge1xuICBAT3V0cHV0KClcbiAgc29ydENsZWFyOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBmaWx0ZXJDbGVhcjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgYWxsQ2xlYXI6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhdGU6IERhdGFUYWJsZVN0YXRlPFQ+LCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgY2xlYXJTb3J0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUuY2xlYXJTb3J0KCk7XG4gICAgdGhpcy5zb3J0Q2xlYXIuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIGNsZWFyRmlsdGVyKCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUuY2xlYXJGaWx0ZXIoKTtcbiAgICB0aGlzLmZpbHRlckNsZWFyLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBjbGVhckFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlLnJlc2V0KCk7XG4gICAgdGhpcy5hbGxDbGVhci5lbWl0KHRydWUpO1xuICAgIHRoaXMuc29ydENsZWFyLmVtaXQodHJ1ZSk7XG4gICAgdGhpcy5maWx0ZXJDbGVhci5lbWl0KHRydWUpO1xuICB9XG59XG4iXX0=