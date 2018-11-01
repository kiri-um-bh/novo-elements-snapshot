/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL2ludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLDJDQUlDOzs7SUFIQyxxQ0FBYTs7SUFDYix5Q0FBa0I7O0lBQ2xCLGlEQUE0Qjs7Ozs7O0FBRzlCLHNDQTJDQzs7O0lBMUNDLDhCQUFXOztJQUNYLGlDQUFlOztJQUNmLHFDQUFtQjs7SUFDbkIsbUNBQWtCOztJQUNsQixnQ0FZYTs7SUFDYixvQ0FBa0I7O0lBQ2xCLGtDQUEyQjs7SUFDM0Isb0NBQW1COztJQUNuQixxQ0FBK0I7O0lBQy9CLHdDQUFtQzs7SUFDbkMsb0NBRUU7O0lBQ0YsaUNBQWU7O0lBQ2Ysb0NBQWdEOztJQUNoRCxzQ0FBb0Q7O0lBQ3BELHFDQUFvQjs7SUFDcEIsa0NBV0U7O0lBQ0Ysc0NBQW9DOzs7OztBQUd0QyxpREFLQzs7O0lBSkMsNENBQTJDOztJQUMzQywyQ0FBYzs7SUFDZCwrQ0FBaUI7O0lBQ2pCLHNEQUErRDs7Ozs7QUFHakUsZ0RBRUM7OztJQURDLCtDQUFxQjs7Ozs7QUFHdkIsa0RBS0M7OztJQUpDLDRDQUE0Qzs7SUFDNUMsK0NBQW9EOztJQUNwRCx3REFBMkI7O0lBQzNCLGlEQUFxQjs7Ozs7QUFHdkIsa0RBS0M7OztJQUpDLDZDQUFjOztJQUNkLDZDQUFZOztJQUNaLDJDQUFhOztJQUNiLDJDQUFhOzs7OztBQUdmLDZDQUdDOzs7SUFGQyw4Q0FBcUI7O0lBQ3JCLDBDQUFpQjs7Ozs7QUFHbkIsMENBS0M7OztJQUpDLGtDQUFXOztJQUNYLHlDQUFtQjs7SUFDbkIsc0NBQWlCOztJQUNqQixzQ0FBMEI7Ozs7O0FBRzVCLDJDQU1DOzs7SUFMQyxxQ0FBcUM7O0lBQ3JDLHVDQUF1Qzs7SUFDdkMscUNBQWM7O0lBQ2QseUNBQWtCOztJQUNsQiw2Q0FBc0I7Ozs7O0FBR3hCLG9EQUVDOzs7SUFEQyxrREFBZ0I7Ozs7O0FBR2xCLCtDQUlDOzs7SUFIQyx5Q0FBYTs7SUFDYiw2Q0FBaUI7O0lBQ2pCLDJDQUFlOzs7Ozs7QUFHakIsdUNBU0M7Ozs7Ozs7Ozs7O0lBUkMsdUhBTytDOzs7Ozs7QUFHakQsb0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVQcmVmZXJlbmNlcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGFnZVNpemU/OiBudW1iZXI7XG4gIGRpc3BsYXllZENvbHVtbnM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlQ29sdW1uPFQ+IHtcbiAgaWQ6IHN0cmluZztcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGxhYmVsSWNvbj86IHN0cmluZztcbiAgZW5hYmxlZD86IGJvb2xlYW47XG4gIHR5cGU6XG4gICAgfCAndGV4dCdcbiAgICB8ICdsaW5rJ1xuICAgIHwgJ2xpbms6dGVsJ1xuICAgIHwgJ2xpbms6bWFpbHRvJ1xuICAgIHwgJ2RhdGUnXG4gICAgfCAnZGF0ZXRpbWUnXG4gICAgfCAndGltZSdcbiAgICB8ICdjdXJyZW5jeSdcbiAgICB8ICdudW1iZXInXG4gICAgfCAncGVyY2VudCdcbiAgICB8ICdhY3Rpb24nXG4gICAgfCAnZXhwYW5kJztcbiAgdGVtcGxhdGU/OiBzdHJpbmc7XG4gIGZvcm1hdD86IHN0cmluZyB8IHN0cmluZ1tdO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGNlbGxDbGFzcz86IChyb3c6IFQpID0+IHN0cmluZztcbiAgZGlzYWJsZWRGdW5jPzogKHJvdzogVCkgPT4gYm9vbGVhbjtcbiAgaGFuZGxlcnM/OiB7XG4gICAgY2xpY2s/KHsgb3JpZ2luYWxFdmVudDogTW91c2VFdmVudCwgcm93OiBUIH0pOiB2b2lkO1xuICB9O1xuICB3aWR0aD86IG51bWJlcjtcbiAgc29ydGFibGU/OiBib29sZWFuIHwgSURhdGFUYWJsZUNvbHVtblNvcnRDb25maWc7XG4gIGZpbHRlcmFibGU/OiBib29sZWFuIHwgSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZztcbiAgcmVzaXphYmxlPzogYm9vbGVhbjtcbiAgYWN0aW9uPzoge1xuICAgIGljb24/OiBzdHJpbmc7XG4gICAgdG9vbHRpcD86IHN0cmluZztcbiAgICBvcHRpb25zPzoge1xuICAgICAgbGFiZWw6IHN0cmluZztcbiAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgIGNsaWNrKHsgb3JpZ2luYWxFdmVudDogTW91c2VFdmVudCwgcm93OiBUIH0pOiB2b2lkO1xuICAgICAgfTtcbiAgICAgIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgICAgIGRpc2FibGVkRnVuYz86IChyb3c6IFQpID0+IGJvb2xlYW47XG4gICAgfVtdO1xuICB9O1xuICBhdHRyaWJ1dGVzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTsgLy8gZm9yIGFueSBjdXN0b20gY29uZmlnIGluIGNlbGxzXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZVBhZ2luYXRpb25PcHRpb25zIHtcbiAgdGhlbWU6ICdiYXNpYycgfCAnc3RhbmRhcmQnIHwgJ2Jhc2ljLXdpZGUnO1xuICBwYWdlPzogbnVtYmVyO1xuICBwYWdlU2l6ZTogbnVtYmVyO1xuICBwYWdlU2l6ZU9wdGlvbnM6IG51bWJlcltdIHwgeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlQ29sdW1uU29ydENvbmZpZyB7XG4gIHRyYW5zZm9ybT86IEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWcge1xuICB0eXBlOiAndGV4dCcgfCAnbnVtYmVyJyB8ICdkYXRlJyB8ICdzZWxlY3QnO1xuICBvcHRpb25zPzogc3RyaW5nW10gfCBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uW107XG4gIGFsbG93Q3VzdG9tUmFuZ2U/OiBib29sZWFuO1xuICB0cmFuc2Zvcm0/OiBGdW5jdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU/OiBhbnk7XG4gIG1pbj86IG51bWJlcjtcbiAgbWF4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVTZWFyY2hPcHRpb25zIHtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIHRvb2x0aXA/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZVNvcnRGaWx0ZXIge1xuICBpZDogc3RyaW5nO1xuICBkaXJlY3Rpb24/OiBzdHJpbmc7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG4gIGZpbHRlcj86IHN0cmluZyB8IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZUNoYW5nZUV2ZW50IHtcbiAgc29ydD86IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9O1xuICBmaWx0ZXI/OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfTtcbiAgcGFnZT86IG51bWJlcjtcbiAgcGFnZVNpemU/OiBudW1iZXI7XG4gIGdsb2JhbFNlYXJjaD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlU2VsZWN0aW9uQ2hhbmdlRXZlbnQge1xuICBzZWxlY3RlZDogYW55W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZVBhZ2luYXRpb25FdmVudCB7XG4gIHBhZ2U6IG51bWJlcjtcbiAgcGFnZVNpemU6IG51bWJlcjtcbiAgbGVuZ3RoOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZVNlcnZpY2U8VD4ge1xuICBnZXRUYWJsZVJlc3VsdHMoXG4gICAgc29ydDogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nOyB0cmFuc2Zvcm0/OiBGdW5jdGlvbiB9LFxuICAgIGZpbHRlcjogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nOyB0cmFuc2Zvcm0/OiBGdW5jdGlvbiB9LFxuICAgIHBhZ2U6IG51bWJlcixcbiAgICBwYWdlU2l6ZTogbnVtYmVyLFxuICAgIGdsb2JhbFNlYXJjaD86IHN0cmluZyxcbiAgICBvdXRzaWRlRmlsdGVyPzogYW55LFxuICApOiBPYnNlcnZhYmxlPHsgcmVzdWx0czogVFtdOyB0b3RhbDogbnVtYmVyIH0+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVDZWxsPFQ+IHt9XG4iXX0=