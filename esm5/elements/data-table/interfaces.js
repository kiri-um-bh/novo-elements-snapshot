/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function IDataTablePreferences() { }
if (false) {
    /** @type {?} */
    IDataTablePreferences.prototype.name;
    /** @type {?|undefined} */
    IDataTablePreferences.prototype.pageSize;
    /** @type {?|undefined} */
    IDataTablePreferences.prototype.displayedColumns;
}
/**
 * @record
 * @template T
 */
export function IDataTableColumn() { }
if (false) {
    /** @type {?} */
    IDataTableColumn.prototype.id;
    /** @type {?|undefined} */
    IDataTableColumn.prototype.label;
    /** @type {?|undefined} */
    IDataTableColumn.prototype.labelIcon;
    /** @type {?|undefined} */
    IDataTableColumn.prototype.enabled;
    /** @type {?} */
    IDataTableColumn.prototype.type;
    /** @type {?|undefined} */
    IDataTableColumn.prototype.template;
    /** @type {?|undefined} */
    IDataTableColumn.prototype.format;
    /** @type {?|undefined} */
    IDataTableColumn.prototype.disabled;
    /** @type {?|undefined} */
    IDataTableColumn.prototype.cellClass;
    /** @type {?|undefined} */
    IDataTableColumn.prototype.disabledFunc;
    /** @type {?|undefined} */
    IDataTableColumn.prototype.handlers;
    /** @type {?|undefined} */
    IDataTableColumn.prototype.width;
    /** @type {?|undefined} */
    IDataTableColumn.prototype.sortable;
    /** @type {?|undefined} */
    IDataTableColumn.prototype.filterable;
    /** @type {?|undefined} */
    IDataTableColumn.prototype.resizable;
    /** @type {?|undefined} */
    IDataTableColumn.prototype.action;
    /** @type {?|undefined} */
    IDataTableColumn.prototype.attributes;
    /** @type {?|undefined} */
    IDataTableColumn.prototype.initialResizable;
}
/**
 * @record
 */
export function IDataTablePaginationOptions() { }
if (false) {
    /** @type {?} */
    IDataTablePaginationOptions.prototype.theme;
    /** @type {?|undefined} */
    IDataTablePaginationOptions.prototype.page;
    /** @type {?} */
    IDataTablePaginationOptions.prototype.pageSize;
    /** @type {?} */
    IDataTablePaginationOptions.prototype.pageSizeOptions;
}
/**
 * @record
 */
export function IDataTableColumnSortConfig() { }
if (false) {
    /** @type {?|undefined} */
    IDataTableColumnSortConfig.prototype.transform;
}
/**
 * @record
 */
export function IDataTableColumnFilterConfig() { }
if (false) {
    /** @type {?} */
    IDataTableColumnFilterConfig.prototype.type;
    /** @type {?|undefined} */
    IDataTableColumnFilterConfig.prototype.options;
    /** @type {?|undefined} */
    IDataTableColumnFilterConfig.prototype.allowCustomRange;
    /** @type {?|undefined} */
    IDataTableColumnFilterConfig.prototype.transform;
}
/**
 * @record
 */
export function IDataTableColumnFilterOption() { }
if (false) {
    /** @type {?} */
    IDataTableColumnFilterOption.prototype.label;
    /** @type {?|undefined} */
    IDataTableColumnFilterOption.prototype.value;
    /** @type {?|undefined} */
    IDataTableColumnFilterOption.prototype.min;
    /** @type {?|undefined} */
    IDataTableColumnFilterOption.prototype.max;
}
/**
 * @record
 */
export function IDataTableSearchOptions() { }
if (false) {
    /** @type {?|undefined} */
    IDataTableSearchOptions.prototype.placeholder;
    /** @type {?|undefined} */
    IDataTableSearchOptions.prototype.tooltip;
}
/**
 * @record
 */
export function IDataTableSortFilter() { }
if (false) {
    /** @type {?} */
    IDataTableSortFilter.prototype.id;
    /** @type {?|undefined} */
    IDataTableSortFilter.prototype.direction;
    /** @type {?|undefined} */
    IDataTableSortFilter.prototype.active;
    /** @type {?|undefined} */
    IDataTableSortFilter.prototype.filter;
}
/**
 * @record
 */
export function IDataTableChangeEvent() { }
if (false) {
    /** @type {?|undefined} */
    IDataTableChangeEvent.prototype.sort;
    /** @type {?|undefined} */
    IDataTableChangeEvent.prototype.filter;
    /** @type {?|undefined} */
    IDataTableChangeEvent.prototype.page;
    /** @type {?|undefined} */
    IDataTableChangeEvent.prototype.pageSize;
    /** @type {?|undefined} */
    IDataTableChangeEvent.prototype.globalSearch;
}
/**
 * @record
 */
export function IDataTableSelectionChangeEvent() { }
if (false) {
    /** @type {?} */
    IDataTableSelectionChangeEvent.prototype.selected;
}
/**
 * @record
 */
export function IDataTablePaginationEvent() { }
if (false) {
    /** @type {?} */
    IDataTablePaginationEvent.prototype.page;
    /** @type {?} */
    IDataTablePaginationEvent.prototype.pageSize;
    /** @type {?} */
    IDataTablePaginationEvent.prototype.length;
}
/**
 * @record
 * @template T
 */
export function IDataTableService() { }
if (false) {
    /**
     * @param {?} sort
     * @param {?} filter
     * @param {?} page
     * @param {?} pageSize
     * @param {?=} globalSearch
     * @param {?=} outsideFilter
     * @return {?}
     */
    IDataTableService.prototype.getTableResults = function (sort, filter, page, pageSize, globalSearch, outsideFilter) { };
}
/**
 * @record
 * @template T
 */
export function IDataTableCell() { }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL2ludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLDJDQUlDOzs7SUFIQyxxQ0FBYTs7SUFDYix5Q0FBa0I7O0lBQ2xCLGlEQUE0Qjs7Ozs7O0FBRzlCLHNDQStDQzs7O0lBOUNDLDhCQUFXOztJQUNYLGlDQUFlOztJQUNmLHFDQUFtQjs7SUFDbkIsbUNBQWtCOztJQUNsQixnQ0FZYTs7SUFDYixvQ0FBa0I7O0lBQ2xCLGtDQUEyQjs7SUFDM0Isb0NBQW1COztJQUNuQixxQ0FBK0I7O0lBQy9CLHdDQUFtQzs7SUFDbkMsb0NBRUU7O0lBQ0YsaUNBQWU7O0lBQ2Ysb0NBQWdEOztJQUNoRCxzQ0FBb0Q7O0lBQ3BELHFDQUFvQjs7SUFDcEIsa0NBV0U7O0lBQ0Ysc0NBQW9DOztJQUNwQyw0Q0FHRTs7Ozs7QUFHSixpREFLQzs7O0lBSkMsNENBQTJDOztJQUMzQywyQ0FBYzs7SUFDZCwrQ0FBaUI7O0lBQ2pCLHNEQUErRDs7Ozs7QUFHakUsZ0RBRUM7OztJQURDLCtDQUFxQjs7Ozs7QUFHdkIsa0RBS0M7OztJQUpDLDRDQUF1RDs7SUFDdkQsK0NBQW9EOztJQUNwRCx3REFBMkI7O0lBQzNCLGlEQUFxQjs7Ozs7QUFHdkIsa0RBS0M7OztJQUpDLDZDQUFjOztJQUNkLDZDQUFZOztJQUNaLDJDQUFhOztJQUNiLDJDQUFhOzs7OztBQUdmLDZDQUdDOzs7SUFGQyw4Q0FBcUI7O0lBQ3JCLDBDQUFpQjs7Ozs7QUFHbkIsMENBS0M7OztJQUpDLGtDQUFXOztJQUNYLHlDQUFtQjs7SUFDbkIsc0NBQWlCOztJQUNqQixzQ0FBMEI7Ozs7O0FBRzVCLDJDQU1DOzs7SUFMQyxxQ0FBcUM7O0lBQ3JDLHVDQUF1Qzs7SUFDdkMscUNBQWM7O0lBQ2QseUNBQWtCOztJQUNsQiw2Q0FBc0I7Ozs7O0FBR3hCLG9EQUVDOzs7SUFEQyxrREFBZ0I7Ozs7O0FBR2xCLCtDQUlDOzs7SUFIQyx5Q0FBYTs7SUFDYiw2Q0FBaUI7O0lBQ2pCLDJDQUFlOzs7Ozs7QUFHakIsdUNBU0M7Ozs7Ozs7Ozs7O0lBUkMsdUhBTytDOzs7Ozs7QUFHakQsb0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVQcmVmZXJlbmNlcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGFnZVNpemU/OiBudW1iZXI7XG4gIGRpc3BsYXllZENvbHVtbnM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlQ29sdW1uPFQ+IHtcbiAgaWQ6IHN0cmluZztcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGxhYmVsSWNvbj86IHN0cmluZztcbiAgZW5hYmxlZD86IGJvb2xlYW47XG4gIHR5cGU6XG4gICAgfCAndGV4dCdcbiAgICB8ICdsaW5rJ1xuICAgIHwgJ2xpbms6dGVsJ1xuICAgIHwgJ2xpbms6bWFpbHRvJ1xuICAgIHwgJ2RhdGUnXG4gICAgfCAnZGF0ZXRpbWUnXG4gICAgfCAndGltZSdcbiAgICB8ICdjdXJyZW5jeSdcbiAgICB8ICdudW1iZXInXG4gICAgfCAncGVyY2VudCdcbiAgICB8ICdhY3Rpb24nXG4gICAgfCAnZXhwYW5kJztcbiAgdGVtcGxhdGU/OiBzdHJpbmc7XG4gIGZvcm1hdD86IHN0cmluZyB8IHN0cmluZ1tdO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGNlbGxDbGFzcz86IChyb3c6IFQpID0+IHN0cmluZztcbiAgZGlzYWJsZWRGdW5jPzogKHJvdzogVCkgPT4gYm9vbGVhbjtcbiAgaGFuZGxlcnM/OiB7XG4gICAgY2xpY2s/KHsgb3JpZ2luYWxFdmVudDogTW91c2VFdmVudCwgcm93OiBUIH0pOiB2b2lkO1xuICB9O1xuICB3aWR0aD86IG51bWJlcjtcbiAgc29ydGFibGU/OiBib29sZWFuIHwgSURhdGFUYWJsZUNvbHVtblNvcnRDb25maWc7XG4gIGZpbHRlcmFibGU/OiBib29sZWFuIHwgSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZztcbiAgcmVzaXphYmxlPzogYm9vbGVhbjtcbiAgYWN0aW9uPzoge1xuICAgIGljb24/OiBzdHJpbmc7XG4gICAgdG9vbHRpcD86IHN0cmluZztcbiAgICBvcHRpb25zPzoge1xuICAgICAgbGFiZWw6IHN0cmluZztcbiAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgIGNsaWNrKHsgb3JpZ2luYWxFdmVudDogTW91c2VFdmVudCwgcm93OiBUIH0pOiB2b2lkO1xuICAgICAgfTtcbiAgICAgIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgICAgIGRpc2FibGVkRnVuYz86IChyb3c6IFQpID0+IGJvb2xlYW47XG4gICAgfVtdO1xuICB9O1xuICBhdHRyaWJ1dGVzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTsgLy8gZm9yIGFueSBjdXN0b20gY29uZmlnIGluIGNlbGxzXG4gIGluaXRpYWxSZXNpemFibGU/OiB7XG4gICAgcmVzaXphYmxlOiBib29sZWFuO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZVBhZ2luYXRpb25PcHRpb25zIHtcbiAgdGhlbWU6ICdiYXNpYycgfCAnc3RhbmRhcmQnIHwgJ2Jhc2ljLXdpZGUnO1xuICBwYWdlPzogbnVtYmVyO1xuICBwYWdlU2l6ZTogbnVtYmVyO1xuICBwYWdlU2l6ZU9wdGlvbnM6IG51bWJlcltdIHwgeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlQ29sdW1uU29ydENvbmZpZyB7XG4gIHRyYW5zZm9ybT86IEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWcge1xuICB0eXBlOiAndGV4dCcgfCAnbnVtYmVyJyB8ICdkYXRlJyB8ICdzZWxlY3QnIHwgJ2N1c3RvbSc7XG4gIG9wdGlvbnM/OiBzdHJpbmdbXSB8IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb25bXTtcbiAgYWxsb3dDdXN0b21SYW5nZT86IGJvb2xlYW47XG4gIHRyYW5zZm9ybT86IEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb24ge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZT86IGFueTtcbiAgbWluPzogbnVtYmVyO1xuICBtYXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZVNlYXJjaE9wdGlvbnMge1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgdG9vbHRpcD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlU29ydEZpbHRlciB7XG4gIGlkOiBzdHJpbmc7XG4gIGRpcmVjdGlvbj86IHN0cmluZztcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgZmlsdGVyPzogc3RyaW5nIHwgYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlQ2hhbmdlRXZlbnQge1xuICBzb3J0PzogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH07XG4gIGZpbHRlcj86IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9O1xuICBwYWdlPzogbnVtYmVyO1xuICBwYWdlU2l6ZT86IG51bWJlcjtcbiAgZ2xvYmFsU2VhcmNoPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVTZWxlY3Rpb25DaGFuZ2VFdmVudCB7XG4gIHNlbGVjdGVkOiBhbnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlUGFnaW5hdGlvbkV2ZW50IHtcbiAgcGFnZTogbnVtYmVyO1xuICBwYWdlU2l6ZTogbnVtYmVyO1xuICBsZW5ndGg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlU2VydmljZTxUPiB7XG4gIGdldFRhYmxlUmVzdWx0cyhcbiAgICBzb3J0OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmc7IHRyYW5zZm9ybT86IEZ1bmN0aW9uIH0sXG4gICAgZmlsdGVyOiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmc7IHRyYW5zZm9ybT86IEZ1bmN0aW9uIH0sXG4gICAgcGFnZTogbnVtYmVyLFxuICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgZ2xvYmFsU2VhcmNoPzogc3RyaW5nLFxuICAgIG91dHNpZGVGaWx0ZXI/OiBhbnksXG4gICk6IE9ic2VydmFibGU8eyByZXN1bHRzOiBUW107IHRvdGFsOiBudW1iZXIgfT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZUNlbGw8VD4ge31cbiJdfQ==