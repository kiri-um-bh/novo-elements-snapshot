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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL2ludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLDJDQUlDOzs7SUFIQyxxQ0FBYTs7SUFDYix5Q0FBa0I7O0lBQ2xCLGlEQUE0Qjs7Ozs7O0FBRzlCLHNDQTBDQzs7O0lBekNDLDhCQUFXOztJQUNYLGlDQUFlOztJQUNmLHFDQUFtQjs7SUFDbkIsbUNBQWtCOztJQUNsQixnQ0FZYTs7SUFDYixvQ0FBa0I7O0lBQ2xCLGtDQUEyQjs7SUFDM0Isb0NBQW1COztJQUNuQixxQ0FBK0I7O0lBQy9CLHdDQUFtQzs7SUFDbkMsb0NBRUU7O0lBQ0YsaUNBQWU7O0lBQ2Ysb0NBQWdEOztJQUNoRCxzQ0FBb0Q7O0lBQ3BELGtDQVdFOztJQUNGLHNDQUFvQzs7Ozs7QUFHdEMsaURBS0M7OztJQUpDLDRDQUEyQzs7SUFDM0MsMkNBQWM7O0lBQ2QsK0NBQWlCOztJQUNqQixzREFBK0Q7Ozs7O0FBR2pFLGdEQUVDOzs7SUFEQywrQ0FBcUI7Ozs7O0FBR3ZCLGtEQUtDOzs7SUFKQyw0Q0FBNEM7O0lBQzVDLCtDQUFvRDs7SUFDcEQsd0RBQTJCOztJQUMzQixpREFBcUI7Ozs7O0FBR3ZCLGtEQUtDOzs7SUFKQyw2Q0FBYzs7SUFDZCw2Q0FBWTs7SUFDWiwyQ0FBYTs7SUFDYiwyQ0FBYTs7Ozs7QUFHZiw2Q0FHQzs7O0lBRkMsOENBQXFCOztJQUNyQiwwQ0FBaUI7Ozs7O0FBR25CLDBDQUtDOzs7SUFKQyxrQ0FBVzs7SUFDWCx5Q0FBbUI7O0lBQ25CLHNDQUFpQjs7SUFDakIsc0NBQTBCOzs7OztBQUc1QiwyQ0FNQzs7O0lBTEMscUNBQXFDOztJQUNyQyx1Q0FBdUM7O0lBQ3ZDLHFDQUFjOztJQUNkLHlDQUFrQjs7SUFDbEIsNkNBQXNCOzs7OztBQUd4QixvREFFQzs7O0lBREMsa0RBQWdCOzs7OztBQUdsQiwrQ0FJQzs7O0lBSEMseUNBQWE7O0lBQ2IsNkNBQWlCOztJQUNqQiwyQ0FBZTs7Ozs7O0FBR2pCLHVDQVNDOzs7Ozs7Ozs7OztJQVJDLHVIQU8rQzs7Ozs7O0FBR2pELG9DQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlUHJlZmVyZW5jZXMge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBhZ2VTaXplPzogbnVtYmVyO1xuICBkaXNwbGF5ZWRDb2x1bW5zPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZUNvbHVtbjxUPiB7XG4gIGlkOiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBsYWJlbEljb24/OiBzdHJpbmc7XG4gIGVuYWJsZWQ/OiBib29sZWFuO1xuICB0eXBlOlxuICAgIHwgJ3RleHQnXG4gICAgfCAnbGluaydcbiAgICB8ICdsaW5rOnRlbCdcbiAgICB8ICdsaW5rOm1haWx0bydcbiAgICB8ICdkYXRlJ1xuICAgIHwgJ2RhdGV0aW1lJ1xuICAgIHwgJ3RpbWUnXG4gICAgfCAnY3VycmVuY3knXG4gICAgfCAnbnVtYmVyJ1xuICAgIHwgJ3BlcmNlbnQnXG4gICAgfCAnYWN0aW9uJ1xuICAgIHwgJ2V4cGFuZCc7XG4gIHRlbXBsYXRlPzogc3RyaW5nO1xuICBmb3JtYXQ/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjZWxsQ2xhc3M/OiAocm93OiBUKSA9PiBzdHJpbmc7XG4gIGRpc2FibGVkRnVuYz86IChyb3c6IFQpID0+IGJvb2xlYW47XG4gIGhhbmRsZXJzPzoge1xuICAgIGNsaWNrPyh7IG9yaWdpbmFsRXZlbnQ6IE1vdXNlRXZlbnQsIHJvdzogVCB9KTogdm9pZDtcbiAgfTtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIHNvcnRhYmxlPzogYm9vbGVhbiB8IElEYXRhVGFibGVDb2x1bW5Tb3J0Q29uZmlnO1xuICBmaWx0ZXJhYmxlPzogYm9vbGVhbiB8IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWc7XG4gIGFjdGlvbj86IHtcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIHRvb2x0aXA/OiBzdHJpbmc7XG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgICBoYW5kbGVyczoge1xuICAgICAgICBjbGljayh7IG9yaWdpbmFsRXZlbnQ6IE1vdXNlRXZlbnQsIHJvdzogVCB9KTogdm9pZDtcbiAgICAgIH07XG4gICAgICBkaXNhYmxlZD86IGJvb2xlYW47XG4gICAgICBkaXNhYmxlZEZ1bmM/OiAocm93OiBUKSA9PiBib29sZWFuO1xuICAgIH1bXTtcbiAgfTtcbiAgYXR0cmlidXRlcz86IHsgW2tleTogc3RyaW5nXTogYW55IH07IC8vIGZvciBhbnkgY3VzdG9tIGNvbmZpZyBpbiBjZWxsc1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVQYWdpbmF0aW9uT3B0aW9ucyB7XG4gIHRoZW1lOiAnYmFzaWMnIHwgJ3N0YW5kYXJkJyB8ICdiYXNpYy13aWRlJztcbiAgcGFnZT86IG51bWJlcjtcbiAgcGFnZVNpemU6IG51bWJlcjtcbiAgcGFnZVNpemVPcHRpb25zOiBudW1iZXJbXSB8IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZUNvbHVtblNvcnRDb25maWcge1xuICB0cmFuc2Zvcm0/OiBGdW5jdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnIHtcbiAgdHlwZTogJ3RleHQnIHwgJ251bWJlcicgfCAnZGF0ZScgfCAnc2VsZWN0JztcbiAgb3B0aW9ucz86IHN0cmluZ1tdIHwgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbltdO1xuICBhbGxvd0N1c3RvbVJhbmdlPzogYm9vbGVhbjtcbiAgdHJhbnNmb3JtPzogRnVuY3Rpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlPzogYW55O1xuICBtaW4/OiBudW1iZXI7XG4gIG1heD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlU2VhcmNoT3B0aW9ucyB7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICB0b29sdGlwPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVTb3J0RmlsdGVyIHtcbiAgaWQ6IHN0cmluZztcbiAgZGlyZWN0aW9uPzogc3RyaW5nO1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBmaWx0ZXI/OiBzdHJpbmcgfCBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVDaGFuZ2VFdmVudCB7XG4gIHNvcnQ/OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfTtcbiAgZmlsdGVyPzogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH07XG4gIHBhZ2U/OiBudW1iZXI7XG4gIHBhZ2VTaXplPzogbnVtYmVyO1xuICBnbG9iYWxTZWFyY2g/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZVNlbGVjdGlvbkNoYW5nZUV2ZW50IHtcbiAgc2VsZWN0ZWQ6IGFueVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVQYWdpbmF0aW9uRXZlbnQge1xuICBwYWdlOiBudW1iZXI7XG4gIHBhZ2VTaXplOiBudW1iZXI7XG4gIGxlbmd0aDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVTZXJ2aWNlPFQ+IHtcbiAgZ2V0VGFibGVSZXN1bHRzKFxuICAgIHNvcnQ6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZzsgdHJhbnNmb3JtPzogRnVuY3Rpb24gfSxcbiAgICBmaWx0ZXI6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZzsgdHJhbnNmb3JtPzogRnVuY3Rpb24gfSxcbiAgICBwYWdlOiBudW1iZXIsXG4gICAgcGFnZVNpemU6IG51bWJlcixcbiAgICBnbG9iYWxTZWFyY2g/OiBzdHJpbmcsXG4gICAgb3V0c2lkZUZpbHRlcj86IGFueSxcbiAgKTogT2JzZXJ2YWJsZTx7IHJlc3VsdHM6IFRbXTsgdG90YWw6IG51bWJlciB9Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlQ2VsbDxUPiB7fVxuIl19