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
    IDataTablePreferences.prototype.sort;
    /** @type {?|undefined} */
    IDataTablePreferences.prototype.filter;
    /** @type {?|undefined} */
    IDataTablePreferences.prototype.globalSearch;
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
 */
export function IDataTableFilter() { }
if (false) {
    /** @type {?} */
    IDataTableFilter.prototype.id;
    /** @type {?} */
    IDataTableFilter.prototype.value;
    /** @type {?|undefined} */
    IDataTableFilter.prototype.transform;
    /** @type {?|undefined} */
    IDataTableFilter.prototype.type;
    /** @type {?|undefined} */
    IDataTableFilter.prototype.selectedOption;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL2ludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLDJDQU9DOzs7SUFOQyxxQ0FBYTs7SUFDYixxQ0FBcUM7O0lBQ3JDLHVDQUErQzs7SUFDL0MsNkNBQW1COztJQUNuQix5Q0FBa0I7O0lBQ2xCLGlEQUE0Qjs7Ozs7O0FBRzlCLHNDQWdEQzs7O0lBL0NDLDhCQUFXOztJQUNYLGlDQUFlOztJQUNmLHFDQUFtQjs7SUFDbkIsbUNBQWtCOztJQUNsQixnQ0FhYTs7SUFDYixvQ0FBa0I7O0lBQ2xCLGtDQUEyQjs7SUFDM0Isb0NBQW1COztJQUNuQixxQ0FBK0I7O0lBQy9CLHdDQUFtQzs7SUFDbkMsb0NBRUU7O0lBQ0YsaUNBQWU7O0lBQ2Ysb0NBQWdEOztJQUNoRCxzQ0FBb0Q7O0lBQ3BELHFDQUFvQjs7SUFDcEIsa0NBV0U7O0lBQ0Ysc0NBQW9DOztJQUNwQyw0Q0FHRTs7Ozs7QUFHSixpREFLQzs7O0lBSkMsNENBQTJDOztJQUMzQywyQ0FBYzs7SUFDZCwrQ0FBaUI7O0lBQ2pCLHNEQUErRDs7Ozs7QUFHakUsZ0RBRUM7OztJQURDLCtDQUFxQjs7Ozs7QUFHdkIsa0RBS0M7OztJQUpDLDRDQUF3RTs7SUFDeEUsK0NBQW9EOztJQUNwRCx3REFBMkI7O0lBQzNCLGlEQUFxQjs7Ozs7QUFHdkIsa0RBS0M7OztJQUpDLDZDQUFjOztJQUNkLDZDQUFZOztJQUNaLDJDQUFhOztJQUNiLDJDQUFhOzs7OztBQUdmLDZDQUdDOzs7SUFGQyw4Q0FBcUI7O0lBQ3JCLDBDQUFpQjs7Ozs7QUFHbkIsMENBS0M7OztJQUpDLGtDQUFXOztJQUNYLHlDQUFtQjs7SUFDbkIsc0NBQWlCOztJQUNqQixzQ0FBMEI7Ozs7O0FBRzVCLDJDQU1DOzs7SUFMQyxxQ0FBcUM7O0lBQ3JDLHVDQUErQzs7SUFDL0MscUNBQWM7O0lBQ2QseUNBQWtCOztJQUNsQiw2Q0FBc0I7Ozs7O0FBR3hCLG9EQUVDOzs7SUFEQyxrREFBZ0I7Ozs7O0FBR2xCLCtDQUlDOzs7SUFIQyx5Q0FBYTs7SUFDYiw2Q0FBaUI7O0lBQ2pCLDJDQUFlOzs7OztBQUdqQixzQ0FNQzs7O0lBTEMsOEJBQVc7O0lBQ1gsaUNBQXlCOztJQUN6QixxQ0FBcUI7O0lBQ3JCLGdDQUFjOztJQUNkLDBDQUF3Qjs7Ozs7O0FBRzFCLHVDQVNDOzs7Ozs7Ozs7OztJQVJDLHVIQU8rQzs7Ozs7O0FBR2pELG9DQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlUHJlZmVyZW5jZXMge1xuICBuYW1lOiBzdHJpbmc7XG4gIHNvcnQ/OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfTtcbiAgZmlsdGVyPzogSURhdGFUYWJsZUZpbHRlciB8IElEYXRhVGFibGVGaWx0ZXJbXTtcbiAgZ2xvYmFsU2VhcmNoPzogYW55O1xuICBwYWdlU2l6ZT86IG51bWJlcjtcbiAgZGlzcGxheWVkQ29sdW1ucz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVDb2x1bW48VD4ge1xuICBpZDogc3RyaW5nO1xuICBsYWJlbD86IHN0cmluZztcbiAgbGFiZWxJY29uPzogc3RyaW5nO1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgdHlwZTpcbiAgICB8ICd0ZXh0J1xuICAgIHwgJ2xpbmsnXG4gICAgfCAnbGluazp0ZWwnXG4gICAgfCAnbGluazptYWlsdG8nXG4gICAgfCAnZGF0ZSdcbiAgICB8ICdkYXRldGltZSdcbiAgICB8ICd0aW1lJ1xuICAgIHwgJ2N1cnJlbmN5J1xuICAgIHwgJ2JpZ2RlY2ltYWwnXG4gICAgfCAnbnVtYmVyJ1xuICAgIHwgJ3BlcmNlbnQnXG4gICAgfCAnYWN0aW9uJ1xuICAgIHwgJ2V4cGFuZCc7XG4gIHRlbXBsYXRlPzogc3RyaW5nO1xuICBmb3JtYXQ/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjZWxsQ2xhc3M/OiAocm93OiBUKSA9PiBzdHJpbmc7XG4gIGRpc2FibGVkRnVuYz86IChyb3c6IFQpID0+IGJvb2xlYW47XG4gIGhhbmRsZXJzPzoge1xuICAgIGNsaWNrPyh7IG9yaWdpbmFsRXZlbnQ6IE1vdXNlRXZlbnQsIHJvdzogVCB9KTogdm9pZDtcbiAgfTtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIHNvcnRhYmxlPzogYm9vbGVhbiB8IElEYXRhVGFibGVDb2x1bW5Tb3J0Q29uZmlnO1xuICBmaWx0ZXJhYmxlPzogYm9vbGVhbiB8IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWc7XG4gIHJlc2l6YWJsZT86IGJvb2xlYW47XG4gIGFjdGlvbj86IHtcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIHRvb2x0aXA/OiBzdHJpbmc7XG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgICBoYW5kbGVyczoge1xuICAgICAgICBjbGljayh7IG9yaWdpbmFsRXZlbnQ6IE1vdXNlRXZlbnQsIHJvdzogVCB9KTogdm9pZDtcbiAgICAgIH07XG4gICAgICBkaXNhYmxlZD86IGJvb2xlYW47XG4gICAgICBkaXNhYmxlZEZ1bmM/OiAocm93OiBUKSA9PiBib29sZWFuO1xuICAgIH1bXTtcbiAgfTtcbiAgYXR0cmlidXRlcz86IHsgW2tleTogc3RyaW5nXTogYW55IH07IC8vIGZvciBhbnkgY3VzdG9tIGNvbmZpZyBpbiBjZWxsc1xuICBpbml0aWFsUmVzaXphYmxlPzoge1xuICAgIHJlc2l6YWJsZTogYm9vbGVhbjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVQYWdpbmF0aW9uT3B0aW9ucyB7XG4gIHRoZW1lOiAnYmFzaWMnIHwgJ3N0YW5kYXJkJyB8ICdiYXNpYy13aWRlJztcbiAgcGFnZT86IG51bWJlcjtcbiAgcGFnZVNpemU6IG51bWJlcjtcbiAgcGFnZVNpemVPcHRpb25zOiBudW1iZXJbXSB8IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZUNvbHVtblNvcnRDb25maWcge1xuICB0cmFuc2Zvcm0/OiBGdW5jdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnIHtcbiAgdHlwZTogJ3RleHQnIHwgJ251bWJlcicgfCAnZGF0ZScgfCAnc2VsZWN0JyB8ICdtdWx0aS1zZWxlY3QnIHwgJ2N1c3RvbSc7XG4gIG9wdGlvbnM/OiBzdHJpbmdbXSB8IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb25bXTtcbiAgYWxsb3dDdXN0b21SYW5nZT86IGJvb2xlYW47XG4gIHRyYW5zZm9ybT86IEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb24ge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZT86IGFueTtcbiAgbWluPzogbnVtYmVyO1xuICBtYXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZVNlYXJjaE9wdGlvbnMge1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgdG9vbHRpcD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlU29ydEZpbHRlciB7XG4gIGlkOiBzdHJpbmc7XG4gIGRpcmVjdGlvbj86IHN0cmluZztcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgZmlsdGVyPzogc3RyaW5nIHwgYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlQ2hhbmdlRXZlbnQge1xuICBzb3J0PzogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH07XG4gIGZpbHRlcj86IElEYXRhVGFibGVGaWx0ZXIgfCBJRGF0YVRhYmxlRmlsdGVyW107XG4gIHBhZ2U/OiBudW1iZXI7XG4gIHBhZ2VTaXplPzogbnVtYmVyO1xuICBnbG9iYWxTZWFyY2g/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZVNlbGVjdGlvbkNoYW5nZUV2ZW50IHtcbiAgc2VsZWN0ZWQ6IGFueVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVQYWdpbmF0aW9uRXZlbnQge1xuICBwYWdlOiBudW1iZXI7XG4gIHBhZ2VTaXplOiBudW1iZXI7XG4gIGxlbmd0aDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVGaWx0ZXIge1xuICBpZDogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW107XG4gIHRyYW5zZm9ybT86IEZ1bmN0aW9uO1xuICB0eXBlPzogc3RyaW5nO1xuICBzZWxlY3RlZE9wdGlvbj86IE9iamVjdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlU2VydmljZTxUPiB7XG4gIGdldFRhYmxlUmVzdWx0cyhcbiAgICBzb3J0OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmc7IHRyYW5zZm9ybT86IEZ1bmN0aW9uIH0sXG4gICAgZmlsdGVyOiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmc7IHRyYW5zZm9ybT86IEZ1bmN0aW9uIH0gfCBJRGF0YVRhYmxlRmlsdGVyIHwgSURhdGFUYWJsZUZpbHRlcltdLFxuICAgIHBhZ2U6IG51bWJlcixcbiAgICBwYWdlU2l6ZTogbnVtYmVyLFxuICAgIGdsb2JhbFNlYXJjaD86IHN0cmluZyxcbiAgICBvdXRzaWRlRmlsdGVyPzogYW55LFxuICApOiBPYnNlcnZhYmxlPHsgcmVzdWx0czogVFtdOyB0b3RhbDogbnVtYmVyIH0+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVDZWxsPFQ+IHt9XG4iXX0=