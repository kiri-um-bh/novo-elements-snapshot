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
     * @return {?}
     */
    IDataTableService.prototype.getTableResults = function (sort, filter, page, pageSize, globalSearch, outsideFilter) { };
}
/**
 * @record
 * @template T
 */
export function IDataTableCell() { }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL2ludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSwyQ0FPQzs7O0lBTkMscUNBQWE7O0lBQ2IscUNBQXNCOztJQUN0Qix1Q0FBK0M7O0lBQy9DLDZDQUFtQjs7SUFDbkIseUNBQWtCOztJQUNsQixpREFBNEI7Ozs7OztBQUc5QixzQ0FrREM7OztJQWpEQyw4QkFBVzs7SUFDWCxpQ0FBZTs7SUFDZixxQ0FBbUI7O0lBQ25CLG1DQUFrQjs7SUFDbEIsZ0NBYWE7O0lBQ2Isb0NBQWtCOztJQUNsQixrQ0FBMkI7O0lBQzNCLG9DQUFtQjs7SUFDbkIscUNBQStCOztJQUMvQix3Q0FBbUM7O0lBQ25DLG9DQUVFOztJQUNGLGlDQUFlOztJQUNmLG9DQUFnRDs7SUFDaEQsc0NBQW9EOztJQUNwRCxxQ0FBb0I7O0lBQ3BCLGtDQVdFOztJQUNGLHNDQUFvQzs7SUFDcEMsNENBR0U7O0lBQ0YsaURBQWdDOztJQUNoQyx5Q0FBdUI7Ozs7O0FBR3pCLGlEQUtDOzs7SUFKQyw0Q0FBMkM7O0lBQzNDLDJDQUFjOztJQUNkLCtDQUFpQjs7SUFDakIsc0RBQStEOzs7OztBQUdqRSxnREFFQzs7O0lBREMsK0NBQXFCOzs7OztBQUd2QixrREFLQzs7O0lBSkMsNENBQXdFOztJQUN4RSwrQ0FBb0Q7O0lBQ3BELHdEQUEyQjs7SUFDM0IsaURBQXFCOzs7OztBQUd2QixrREFLQzs7O0lBSkMsNkNBQWM7O0lBQ2QsNkNBQVk7O0lBQ1osMkNBQWE7O0lBQ2IsMkNBQWE7Ozs7O0FBR2YsNkNBR0M7OztJQUZDLDhDQUFxQjs7SUFDckIsMENBQWlCOzs7OztBQUduQiwwQ0FLQzs7O0lBSkMsa0NBQVc7O0lBQ1gseUNBQW1COztJQUNuQixzQ0FBaUI7O0lBQ2pCLHNDQUEwQjs7Ozs7QUFHNUIsMkNBTUM7OztJQUxDLHFDQUFzQjs7SUFDdEIsdUNBQStDOztJQUMvQyxxQ0FBYzs7SUFDZCx5Q0FBa0I7O0lBQ2xCLDZDQUFzQjs7Ozs7QUFHeEIsb0RBRUM7OztJQURDLGtEQUFnQjs7Ozs7QUFHbEIsK0NBSUM7OztJQUhDLHlDQUFhOztJQUNiLDZDQUFpQjs7SUFDakIsMkNBQWU7Ozs7O0FBR2pCLG9DQUlDOzs7SUFIQyw0QkFBVzs7SUFDWCwrQkFBYzs7SUFDZCxtQ0FBcUI7Ozs7O0FBR3ZCLHNDQU1DOzs7SUFMQyw4QkFBVzs7SUFDWCxpQ0FBeUI7O0lBQ3pCLHFDQUFxQjs7SUFDckIsZ0NBQWM7O0lBQ2QsMENBQXdCOzs7Ozs7QUFHMUIsdUNBU0M7Ozs7Ozs7Ozs7O0lBUkMsdUhBTytDOzs7Ozs7QUFHakQsb0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVQcmVmZXJlbmNlcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgc29ydD86IElEYXRhVGFibGVTb3J0O1xuICBmaWx0ZXI/OiBJRGF0YVRhYmxlRmlsdGVyIHwgSURhdGFUYWJsZUZpbHRlcltdO1xuICBnbG9iYWxTZWFyY2g/OiBhbnk7XG4gIHBhZ2VTaXplPzogbnVtYmVyO1xuICBkaXNwbGF5ZWRDb2x1bW5zPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZUNvbHVtbjxUPiB7XG4gIGlkOiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBsYWJlbEljb24/OiBzdHJpbmc7XG4gIGVuYWJsZWQ/OiBib29sZWFuO1xuICB0eXBlOlxuICAgIHwgJ3RleHQnXG4gICAgfCAnbGluaydcbiAgICB8ICdsaW5rOnRlbCdcbiAgICB8ICdsaW5rOm1haWx0bydcbiAgICB8ICdkYXRlJ1xuICAgIHwgJ2RhdGV0aW1lJ1xuICAgIHwgJ3RpbWUnXG4gICAgfCAnY3VycmVuY3knXG4gICAgfCAnYmlnZGVjaW1hbCdcbiAgICB8ICdudW1iZXInXG4gICAgfCAncGVyY2VudCdcbiAgICB8ICdhY3Rpb24nXG4gICAgfCAnZXhwYW5kJztcbiAgdGVtcGxhdGU/OiBzdHJpbmc7XG4gIGZvcm1hdD86IHN0cmluZyB8IHN0cmluZ1tdO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGNlbGxDbGFzcz86IChyb3c6IFQpID0+IHN0cmluZztcbiAgZGlzYWJsZWRGdW5jPzogKHJvdzogVCkgPT4gYm9vbGVhbjtcbiAgaGFuZGxlcnM/OiB7XG4gICAgY2xpY2s/KHsgb3JpZ2luYWxFdmVudDogTW91c2VFdmVudCwgcm93OiBUIH0pOiB2b2lkO1xuICB9O1xuICB3aWR0aD86IG51bWJlcjtcbiAgc29ydGFibGU/OiBib29sZWFuIHwgSURhdGFUYWJsZUNvbHVtblNvcnRDb25maWc7XG4gIGZpbHRlcmFibGU/OiBib29sZWFuIHwgSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZztcbiAgcmVzaXphYmxlPzogYm9vbGVhbjtcbiAgYWN0aW9uPzoge1xuICAgIGljb24/OiBzdHJpbmc7XG4gICAgdG9vbHRpcD86IHN0cmluZztcbiAgICBvcHRpb25zPzoge1xuICAgICAgbGFiZWw6IHN0cmluZztcbiAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgIGNsaWNrKHsgb3JpZ2luYWxFdmVudDogTW91c2VFdmVudCwgcm93OiBUIH0pOiB2b2lkO1xuICAgICAgfTtcbiAgICAgIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgICAgIGRpc2FibGVkRnVuYz86IChyb3c6IFQpID0+IGJvb2xlYW47XG4gICAgfVtdO1xuICB9O1xuICBhdHRyaWJ1dGVzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTsgLy8gZm9yIGFueSBjdXN0b20gY29uZmlnIGluIGNlbGxzXG4gIGluaXRpYWxSZXNpemFibGU/OiB7XG4gICAgcmVzaXphYmxlOiBib29sZWFuO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gIH07XG4gIHJpZ2h0QWxpZ25DZWxsQ29udGVudD86IGJvb2xlYW47XG4gIGNvbmZpZ3VyYXRpb24/OiBvYmplY3Q7IC8vIGludGVuZGVkIHRvIGJlIGltcGxlbWVudGVkIGJ5IGVhY2ggY29sdW1uIHR5cGUgaWYgYW5kIGFzIG5lZWRlZFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVQYWdpbmF0aW9uT3B0aW9ucyB7XG4gIHRoZW1lOiAnYmFzaWMnIHwgJ3N0YW5kYXJkJyB8ICdiYXNpYy13aWRlJztcbiAgcGFnZT86IG51bWJlcjtcbiAgcGFnZVNpemU6IG51bWJlcjtcbiAgcGFnZVNpemVPcHRpb25zOiBudW1iZXJbXSB8IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZUNvbHVtblNvcnRDb25maWcge1xuICB0cmFuc2Zvcm0/OiBGdW5jdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnIHtcbiAgdHlwZTogJ3RleHQnIHwgJ251bWJlcicgfCAnZGF0ZScgfCAnc2VsZWN0JyB8ICdtdWx0aS1zZWxlY3QnIHwgJ2N1c3RvbSc7XG4gIG9wdGlvbnM/OiBzdHJpbmdbXSB8IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb25bXTtcbiAgYWxsb3dDdXN0b21SYW5nZT86IGJvb2xlYW47XG4gIHRyYW5zZm9ybT86IEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb24ge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZT86IGFueTtcbiAgbWluPzogbnVtYmVyO1xuICBtYXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZVNlYXJjaE9wdGlvbnMge1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgdG9vbHRpcD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlU29ydEZpbHRlciB7XG4gIGlkOiBzdHJpbmc7XG4gIGRpcmVjdGlvbj86IHN0cmluZztcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgZmlsdGVyPzogc3RyaW5nIHwgYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlQ2hhbmdlRXZlbnQge1xuICBzb3J0PzogSURhdGFUYWJsZVNvcnQ7XG4gIGZpbHRlcj86IElEYXRhVGFibGVGaWx0ZXIgfCBJRGF0YVRhYmxlRmlsdGVyW107XG4gIHBhZ2U/OiBudW1iZXI7XG4gIHBhZ2VTaXplPzogbnVtYmVyO1xuICBnbG9iYWxTZWFyY2g/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZVNlbGVjdGlvbkNoYW5nZUV2ZW50IHtcbiAgc2VsZWN0ZWQ6IGFueVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVQYWdpbmF0aW9uRXZlbnQge1xuICBwYWdlOiBudW1iZXI7XG4gIHBhZ2VTaXplOiBudW1iZXI7XG4gIGxlbmd0aDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVTb3J0IHtcbiAgaWQ6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgdHJhbnNmb3JtPzogRnVuY3Rpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZUZpbHRlciB7XG4gIGlkOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgdHJhbnNmb3JtPzogRnVuY3Rpb247XG4gIHR5cGU/OiBzdHJpbmc7XG4gIHNlbGVjdGVkT3B0aW9uPzogT2JqZWN0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVTZXJ2aWNlPFQ+IHtcbiAgZ2V0VGFibGVSZXN1bHRzKFxuICAgIHNvcnQ6IElEYXRhVGFibGVTb3J0LFxuICAgIGZpbHRlcjogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nOyB0cmFuc2Zvcm0/OiBGdW5jdGlvbiB9IHwgSURhdGFUYWJsZUZpbHRlciB8IElEYXRhVGFibGVGaWx0ZXJbXSxcbiAgICBwYWdlOiBudW1iZXIsXG4gICAgcGFnZVNpemU6IG51bWJlcixcbiAgICBnbG9iYWxTZWFyY2g/OiBzdHJpbmcsXG4gICAgb3V0c2lkZUZpbHRlcj86IGFueSxcbiAgKTogT2JzZXJ2YWJsZTx7IHJlc3VsdHM6IFRbXTsgdG90YWw6IG51bWJlciB9Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlQ2VsbDxUPiB7fVxuIl19