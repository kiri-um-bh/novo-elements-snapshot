/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/configure-columns/configure-columns-dropdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, } from '@angular/core';
// APP
import { BasePickerResults } from '../../picker/extras/base-picker-results/BasePickerResults';
var ConfigureColumnsDropdown = /** @class */ (function (_super) {
    tslib_1.__extends(ConfigureColumnsDropdown, _super);
    function ConfigureColumnsDropdown(element, ref) {
        var _this = _super.call(this, element, ref) || this;
        _this.applyColumnConfig = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    ConfigureColumnsDropdown.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.matches = this.columns;
    };
    /**
     * @param {?=} emit
     * @return {?}
     */
    ConfigureColumnsDropdown.prototype.saveColumns = /**
     * @param {?=} emit
     * @return {?}
     */
    function (emit) {
        if (emit === void 0) { emit = true; }
        if (this.columns) {
            /** @type {?} */
            var enabledColumns = this.columns.filter((/**
             * @param {?} column
             * @return {?}
             */
            function (column) { return column.enabled; }));
            this.displayedColumns = tslib_1.__spread(enabledColumns.map((/**
             * @param {?} column
             * @return {?}
             */
            function (column) { return column.id; })));
            this.ref.markForCheck();
            if (emit) {
                this.applyColumnConfig.emit(this.displayedColumns);
            }
        }
        this.clearQuickSearch();
    };
    /**
     * @return {?}
     */
    ConfigureColumnsDropdown.prototype.clearQuickSearch = /**
     * @return {?}
     */
    function () {
        this.term = '';
    };
    /**
     * @return {?}
     */
    ConfigureColumnsDropdown.prototype.processSearch = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.matches = this.columns.filter((/**
         * @param {?} column
         * @return {?}
         */
        function (column) { return column.label.toLowerCase().includes(_this.term.toLowerCase()); }));
        this.ref.markForCheck();
    };
    ConfigureColumnsDropdown.decorators = [
        { type: Component, args: [{
                    selector: 'configure-columns-dropdown',
                    template: "<novo-dropdown side=\"left\" containerClass=\"configure-columns-dropdown\">\r\n    <button theme=\"secondary\"\r\n            icon=\"collapse\"><i class=\"bhi-columns\"></i>Columns</button>\r\n    <div class=\"configure-columns-dropdown-list-options\">\r\n        <div class=\"picker-input-filter\">\r\n            <div class=\"input-container\">\r\n                <input [(ngModel)]=\"term\" type=\"text\">\r\n                <i class=\"bhi-search\" *ngIf=\"term === ''\"></i>\r\n                <i class=\"bhi-times\" *ngIf=\"term !== ''\" (click)=\"clearQuickSearch()\"></i>\r\n            </div>\r\n        </div>\r\n        <!--section class=\"picker-loading\" *ngIf=\"isLoading && !matches?.length\">\r\n            <novo-loading theme=\"line\"></novo-loading>\r\n        </section-->\r\n        <list class=\"results-list\" direction=\"vertical\" *ngIf=\"matches?.length > 0 && !hasError\">\r\n            <item keepOpen=\"true\" *ngFor=\"let column of matches\">\r\n                <item-title>\r\n                    <span class=\"column-name\">\r\n                        <novo-checkbox [(ngModel)]=\"column.enabled\"></novo-checkbox>\r\n                        <span>{{ column.label }}</span>\r\n                    </span>\r\n                </item-title>\r\n            </item>\r\n        </list>\r\n    </div>\r\n    <item>\r\n        <div class=\"configure-columns-footer\">\r\n        <button theme=\"standard\"\r\n                (click)=\"clearQuickSearch()\">Cancel</button>\r\n        <button theme=\"primary\"\r\n                icon=\"check\"\r\n                (click)=\"saveColumns()\">Save</button>\r\n        </div>\r\n    </item>\r\n\r\n</novo-dropdown>\r\n"
                }] }
    ];
    /** @nocollapse */
    ConfigureColumnsDropdown.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    ConfigureColumnsDropdown.propDecorators = {
        columns: [{ type: Input }],
        applyColumnConfig: [{ type: Output }]
    };
    return ConfigureColumnsDropdown;
}(BasePickerResults));
export { ConfigureColumnsDropdown };
if (false) {
    /** @type {?} */
    ConfigureColumnsDropdown.prototype.columns;
    /** @type {?} */
    ConfigureColumnsDropdown.prototype.displayedColumns;
    /** @type {?} */
    ConfigureColumnsDropdown.prototype.applyColumnConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJlLWNvbHVtbnMtZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvY29uZmlndXJlLWNvbHVtbnMvY29uZmlndXJlLWNvbHVtbnMtZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQ0gsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEdBQ1QsTUFBTSxlQUFlLENBQUM7O0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBRTlGO0lBSThDLG9EQUFpQjtJQU8zRCxrQ0FDSSxPQUFtQixFQUNuQixHQUFzQjtRQUYxQixZQUlJLGtCQUFNLE9BQU8sRUFBRSxHQUFHLENBQUMsU0FDdEI7UUFQUyx1QkFBaUIsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQzs7SUFPakYsQ0FBQzs7OztJQUVELDhDQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELDhDQUFXOzs7O0lBQVgsVUFBWSxJQUFXO1FBQVgscUJBQUEsRUFBQSxXQUFXO1FBQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTs7Z0JBQ1IsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztZQUFDLFVBQUMsTUFBVyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUM7WUFDM0UsSUFBSSxDQUFDLGdCQUFnQixvQkFBTyxjQUFjLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsTUFBVyxJQUFLLE9BQUEsTUFBTSxDQUFDLEVBQUUsRUFBVCxDQUFTLEVBQUMsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDeEIsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUN0RDtTQUNKO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELG1EQUFnQjs7O0lBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELGdEQUFhOzs7SUFBYjtRQUFBLGlCQUdDO1FBRkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBNUQsQ0FBNEQsRUFBQyxDQUFDO1FBQzdHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Z0JBekNKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxpcURBQWdEO2lCQUNuRDs7OztnQkFaRyxVQUFVO2dCQUZWLGlCQUFpQjs7OzBCQWdCaEIsS0FBSztvQ0FJTCxNQUFNOztJQWlDWCwrQkFBQztDQUFBLEFBMUNELENBSThDLGlCQUFpQixHQXNDOUQ7U0F0Q1ksd0JBQXdCOzs7SUFDakMsMkNBQXNCOztJQUV0QixvREFBd0I7O0lBRXhCLHFEQUFpRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxyXG5pbXBvcnQge1xyXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBPdXRwdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIEFQUFxyXG5pbXBvcnQgeyBCYXNlUGlja2VyUmVzdWx0cyB9IGZyb20gJy4uLy4uL3BpY2tlci9leHRyYXMvYmFzZS1waWNrZXItcmVzdWx0cy9CYXNlUGlja2VyUmVzdWx0cyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY29uZmlndXJlLWNvbHVtbnMtZHJvcGRvd24nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpZ3VyZS1jb2x1bW5zLWRyb3Bkb3duLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlndXJlQ29sdW1uc0Ryb3Bkb3duIGV4dGVuZHMgQmFzZVBpY2tlclJlc3VsdHMgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgQElucHV0KCkgY29sdW1uczogYW55O1xyXG5cclxuICAgIHB1YmxpYyBkaXNwbGF5ZWRDb2x1bW5zO1xyXG5cclxuICAgIEBPdXRwdXQoKSBhcHBseUNvbHVtbkNvbmZpZzogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKGVsZW1lbnQsIHJlZik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5jb2x1bW5zO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVDb2x1bW5zKGVtaXQgPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29sdW1ucykge1xyXG4gICAgICAgICAgICBjb25zdCBlbmFibGVkQ29sdW1ucyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbHVtbjogYW55KSA9PiBjb2x1bW4uZW5hYmxlZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IFsuLi5lbmFibGVkQ29sdW1ucy5tYXAoKGNvbHVtbjogYW55KSA9PiBjb2x1bW4uaWQpXTtcclxuICAgICAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICAgIGlmIChlbWl0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5Q29sdW1uQ29uZmlnLmVtaXQodGhpcy5kaXNwbGF5ZWRDb2x1bW5zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsZWFyUXVpY2tTZWFyY2goKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclF1aWNrU2VhcmNoKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGVybSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NTZWFyY2goKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sdW1uKSA9PiBjb2x1bW4ubGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnRlcm0udG9Mb3dlckNhc2UoKSkpO1xyXG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==