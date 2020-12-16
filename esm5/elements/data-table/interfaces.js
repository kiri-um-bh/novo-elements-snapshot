/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/interfaces.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    IDataTablePreferences.prototype.advancedFilter;
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
    /** @type {?|undefined} */
    IDataTableColumn.prototype.rightAlignCellContent;
    /** @type {?|undefined} */
    IDataTableColumn.prototype.configuration;
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
    /** @type {?|undefined} */
    IDataTableChangeEvent.prototype.outsideFilter;
    /** @type {?|undefined} */
    IDataTableChangeEvent.prototype.advancedFilter;
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
export function IDataTableSort() { }
if (false) {
    /** @type {?} */
    IDataTableSort.prototype.id;
    /** @type {?} */
    IDataTableSort.prototype.value;
    /** @type {?|undefined} */
    IDataTableSort.prototype.transform;
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
     * @param {?=} advancedFilter
     * @return {?}
     */
    IDataTableService.prototype.getTableResults = function (sort, filter, page, pageSize, globalSearch, outsideFilter, advancedFilter) { };
}
/**
 * @record
 * @template T
 */
export function IDataTableCell() { }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL2ludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSwyQ0FRQzs7O0lBUEMscUNBQWE7O0lBQ2IscUNBQXNCOztJQUN0Qix1Q0FBK0M7O0lBQy9DLCtDQUFvQzs7SUFDcEMsNkNBQW1COztJQUNuQix5Q0FBa0I7O0lBQ2xCLGlEQUE0Qjs7Ozs7O0FBRzlCLHNDQWtEQzs7O0lBakRDLDhCQUFXOztJQUNYLGlDQUFlOztJQUNmLHFDQUFtQjs7SUFDbkIsbUNBQWtCOztJQUNsQixnQ0FhYTs7SUFDYixvQ0FBa0I7O0lBQ2xCLGtDQUEyQjs7SUFDM0Isb0NBQW1COztJQUNuQixxQ0FBK0I7O0lBQy9CLHdDQUFtQzs7SUFDbkMsb0NBRUU7O0lBQ0YsaUNBQWU7O0lBQ2Ysb0NBQWdEOztJQUNoRCxzQ0FBb0Q7O0lBQ3BELHFDQUFvQjs7SUFDcEIsa0NBV0U7O0lBQ0Ysc0NBQW9DOztJQUNwQyw0Q0FHRTs7SUFDRixpREFBZ0M7O0lBQ2hDLHlDQUF1Qjs7Ozs7QUFHekIsaURBS0M7OztJQUpDLDRDQUEyQzs7SUFDM0MsMkNBQWM7O0lBQ2QsK0NBQWlCOztJQUNqQixzREFBK0Q7Ozs7O0FBR2pFLGdEQUVDOzs7SUFEQywrQ0FBcUI7Ozs7O0FBR3ZCLGtEQUtDOzs7SUFKQyw0Q0FBd0U7O0lBQ3hFLCtDQUFvRDs7SUFDcEQsd0RBQTJCOztJQUMzQixpREFBcUI7Ozs7O0FBR3ZCLGtEQUtDOzs7SUFKQyw2Q0FBYzs7SUFDZCw2Q0FBWTs7SUFDWiwyQ0FBYTs7SUFDYiwyQ0FBYTs7Ozs7QUFHZiw2Q0FHQzs7O0lBRkMsOENBQXFCOztJQUNyQiwwQ0FBaUI7Ozs7O0FBR25CLDBDQUtDOzs7SUFKQyxrQ0FBVzs7SUFDWCx5Q0FBbUI7O0lBQ25CLHNDQUFpQjs7SUFDakIsc0NBQTBCOzs7OztBQUc1QiwyQ0FRQzs7O0lBUEMscUNBQXNCOztJQUN0Qix1Q0FBK0M7O0lBQy9DLHFDQUFjOztJQUNkLHlDQUFrQjs7SUFDbEIsNkNBQXNCOztJQUN0Qiw4Q0FBc0Q7O0lBQ3RELCtDQUFvQzs7Ozs7QUFHdEMsb0RBRUM7OztJQURDLGtEQUFnQjs7Ozs7QUFHbEIsK0NBSUM7OztJQUhDLHlDQUFhOztJQUNiLDZDQUFpQjs7SUFDakIsMkNBQWU7Ozs7O0FBR2pCLG9DQUlDOzs7SUFIQyw0QkFBVzs7SUFDWCwrQkFBYzs7SUFDZCxtQ0FBcUI7Ozs7O0FBR3ZCLHNDQU1DOzs7SUFMQyw4QkFBVzs7SUFDWCxpQ0FBeUI7O0lBQ3pCLHFDQUFxQjs7SUFDckIsZ0NBQWM7O0lBQ2QsMENBQXdCOzs7Ozs7QUFHMUIsdUNBVUM7Ozs7Ozs7Ozs7OztJQVRDLHVJQVErQzs7Ozs7O0FBR2pELG9DQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlUHJlZmVyZW5jZXMge1xuICBuYW1lOiBzdHJpbmc7XG4gIHNvcnQ/OiBJRGF0YVRhYmxlU29ydDtcbiAgZmlsdGVyPzogSURhdGFUYWJsZUZpbHRlciB8IElEYXRhVGFibGVGaWx0ZXJbXTtcbiAgYWR2YW5jZWRGaWx0ZXI/OiBJRGF0YVRhYmxlRmlsdGVyW107XG4gIGdsb2JhbFNlYXJjaD86IGFueTtcbiAgcGFnZVNpemU/OiBudW1iZXI7XG4gIGRpc3BsYXllZENvbHVtbnM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlQ29sdW1uPFQ+IHtcbiAgaWQ6IHN0cmluZztcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGxhYmVsSWNvbj86IHN0cmluZztcbiAgZW5hYmxlZD86IGJvb2xlYW47XG4gIHR5cGU6XG4gICAgfCAndGV4dCdcbiAgICB8ICdsaW5rJ1xuICAgIHwgJ2xpbms6dGVsJ1xuICAgIHwgJ2xpbms6bWFpbHRvJ1xuICAgIHwgJ2RhdGUnXG4gICAgfCAnZGF0ZXRpbWUnXG4gICAgfCAndGltZSdcbiAgICB8ICdjdXJyZW5jeSdcbiAgICB8ICdiaWdkZWNpbWFsJ1xuICAgIHwgJ251bWJlcidcbiAgICB8ICdwZXJjZW50J1xuICAgIHwgJ2FjdGlvbidcbiAgICB8ICdleHBhbmQnO1xuICB0ZW1wbGF0ZT86IHN0cmluZztcbiAgZm9ybWF0Pzogc3RyaW5nIHwgc3RyaW5nW107XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY2VsbENsYXNzPzogKHJvdzogVCkgPT4gc3RyaW5nO1xuICBkaXNhYmxlZEZ1bmM/OiAocm93OiBUKSA9PiBib29sZWFuO1xuICBoYW5kbGVycz86IHtcbiAgICBjbGljaz8oeyBvcmlnaW5hbEV2ZW50OiBNb3VzZUV2ZW50LCByb3c6IFQgfSk6IHZvaWQ7XG4gIH07XG4gIHdpZHRoPzogbnVtYmVyO1xuICBzb3J0YWJsZT86IGJvb2xlYW4gfCBJRGF0YVRhYmxlQ29sdW1uU29ydENvbmZpZztcbiAgZmlsdGVyYWJsZT86IGJvb2xlYW4gfCBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnO1xuICByZXNpemFibGU/OiBib29sZWFuO1xuICBhY3Rpb24/OiB7XG4gICAgaWNvbj86IHN0cmluZztcbiAgICB0b29sdGlwPzogc3RyaW5nO1xuICAgIG9wdGlvbnM/OiB7XG4gICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgY2xpY2soeyBvcmlnaW5hbEV2ZW50OiBNb3VzZUV2ZW50LCByb3c6IFQgfSk6IHZvaWQ7XG4gICAgICB9O1xuICAgICAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAgICAgZGlzYWJsZWRGdW5jPzogKHJvdzogVCkgPT4gYm9vbGVhbjtcbiAgICB9W107XG4gIH07XG4gIGF0dHJpYnV0ZXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9OyAvLyBmb3IgYW55IGN1c3RvbSBjb25maWcgaW4gY2VsbHNcbiAgaW5pdGlhbFJlc2l6YWJsZT86IHtcbiAgICByZXNpemFibGU6IGJvb2xlYW47XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgfTtcbiAgcmlnaHRBbGlnbkNlbGxDb250ZW50PzogYm9vbGVhbjtcbiAgY29uZmlndXJhdGlvbj86IG9iamVjdDsgLy8gaW50ZW5kZWQgdG8gYmUgaW1wbGVtZW50ZWQgYnkgZWFjaCBjb2x1bW4gdHlwZSBpZiBhbmQgYXMgbmVlZGVkXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZVBhZ2luYXRpb25PcHRpb25zIHtcbiAgdGhlbWU6ICdiYXNpYycgfCAnc3RhbmRhcmQnIHwgJ2Jhc2ljLXdpZGUnO1xuICBwYWdlPzogbnVtYmVyO1xuICBwYWdlU2l6ZTogbnVtYmVyO1xuICBwYWdlU2l6ZU9wdGlvbnM6IG51bWJlcltdIHwgeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlQ29sdW1uU29ydENvbmZpZyB7XG4gIHRyYW5zZm9ybT86IEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWcge1xuICB0eXBlOiAndGV4dCcgfCAnbnVtYmVyJyB8ICdkYXRlJyB8ICdzZWxlY3QnIHwgJ211bHRpLXNlbGVjdCcgfCAnY3VzdG9tJztcbiAgb3B0aW9ucz86IHN0cmluZ1tdIHwgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbltdO1xuICBhbGxvd0N1c3RvbVJhbmdlPzogYm9vbGVhbjtcbiAgdHJhbnNmb3JtPzogRnVuY3Rpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlPzogYW55O1xuICBtaW4/OiBudW1iZXI7XG4gIG1heD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlU2VhcmNoT3B0aW9ucyB7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICB0b29sdGlwPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVTb3J0RmlsdGVyIHtcbiAgaWQ6IHN0cmluZztcbiAgZGlyZWN0aW9uPzogc3RyaW5nO1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBmaWx0ZXI/OiBzdHJpbmcgfCBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVDaGFuZ2VFdmVudCB7XG4gIHNvcnQ/OiBJRGF0YVRhYmxlU29ydDtcbiAgZmlsdGVyPzogSURhdGFUYWJsZUZpbHRlciB8IElEYXRhVGFibGVGaWx0ZXJbXTtcbiAgcGFnZT86IG51bWJlcjtcbiAgcGFnZVNpemU/OiBudW1iZXI7XG4gIGdsb2JhbFNlYXJjaD86IHN0cmluZztcbiAgb3V0c2lkZUZpbHRlcj86IElEYXRhVGFibGVGaWx0ZXIgfCBJRGF0YVRhYmxlRmlsdGVyW107XG4gIGFkdmFuY2VkRmlsdGVyPzogSURhdGFUYWJsZUZpbHRlcltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVTZWxlY3Rpb25DaGFuZ2VFdmVudCB7XG4gIHNlbGVjdGVkOiBhbnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlUGFnaW5hdGlvbkV2ZW50IHtcbiAgcGFnZTogbnVtYmVyO1xuICBwYWdlU2l6ZTogbnVtYmVyO1xuICBsZW5ndGg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlU29ydCB7XG4gIGlkOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHRyYW5zZm9ybT86IEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVGaWx0ZXIge1xuICBpZDogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW107XG4gIHRyYW5zZm9ybT86IEZ1bmN0aW9uO1xuICB0eXBlPzogc3RyaW5nO1xuICBzZWxlY3RlZE9wdGlvbj86IE9iamVjdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlU2VydmljZTxUPiB7XG4gIGdldFRhYmxlUmVzdWx0cyhcbiAgICBzb3J0OiBJRGF0YVRhYmxlU29ydCxcbiAgICBmaWx0ZXI6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZzsgdHJhbnNmb3JtPzogRnVuY3Rpb24gfSB8IElEYXRhVGFibGVGaWx0ZXIgfCBJRGF0YVRhYmxlRmlsdGVyW10sXG4gICAgcGFnZTogbnVtYmVyLFxuICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgZ2xvYmFsU2VhcmNoPzogc3RyaW5nLFxuICAgIG91dHNpZGVGaWx0ZXI/OiBhbnksXG4gICAgYWR2YW5jZWRGaWx0ZXI/OiBJRGF0YVRhYmxlRmlsdGVyW10sXG4gICk6IE9ic2VydmFibGU8eyByZXN1bHRzOiBUW107IHRvdGFsOiBudW1iZXIgfT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZUNlbGw8VD4ge31cbiJdfQ==