/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL2ludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLDJDQU9DOzs7SUFOQyxxQ0FBYTs7SUFDYixxQ0FBcUM7O0lBQ3JDLHVDQUErQzs7SUFDL0MsNkNBQW1COztJQUNuQix5Q0FBa0I7O0lBQ2xCLGlEQUE0Qjs7Ozs7O0FBRzlCLHNDQWlEQzs7O0lBaERDLDhCQUFXOztJQUNYLGlDQUFlOztJQUNmLHFDQUFtQjs7SUFDbkIsbUNBQWtCOztJQUNsQixnQ0FhYTs7SUFDYixvQ0FBa0I7O0lBQ2xCLGtDQUEyQjs7SUFDM0Isb0NBQW1COztJQUNuQixxQ0FBK0I7O0lBQy9CLHdDQUFtQzs7SUFDbkMsb0NBRUU7O0lBQ0YsaUNBQWU7O0lBQ2Ysb0NBQWdEOztJQUNoRCxzQ0FBb0Q7O0lBQ3BELHFDQUFvQjs7SUFDcEIsa0NBV0U7O0lBQ0Ysc0NBQW9DOztJQUNwQyw0Q0FHRTs7SUFDRixpREFBZ0M7Ozs7O0FBR2xDLGlEQUtDOzs7SUFKQyw0Q0FBMkM7O0lBQzNDLDJDQUFjOztJQUNkLCtDQUFpQjs7SUFDakIsc0RBQStEOzs7OztBQUdqRSxnREFFQzs7O0lBREMsK0NBQXFCOzs7OztBQUd2QixrREFLQzs7O0lBSkMsNENBQXdFOztJQUN4RSwrQ0FBb0Q7O0lBQ3BELHdEQUEyQjs7SUFDM0IsaURBQXFCOzs7OztBQUd2QixrREFLQzs7O0lBSkMsNkNBQWM7O0lBQ2QsNkNBQVk7O0lBQ1osMkNBQWE7O0lBQ2IsMkNBQWE7Ozs7O0FBR2YsNkNBR0M7OztJQUZDLDhDQUFxQjs7SUFDckIsMENBQWlCOzs7OztBQUduQiwwQ0FLQzs7O0lBSkMsa0NBQVc7O0lBQ1gseUNBQW1COztJQUNuQixzQ0FBaUI7O0lBQ2pCLHNDQUEwQjs7Ozs7QUFHNUIsMkNBTUM7OztJQUxDLHFDQUFxQzs7SUFDckMsdUNBQStDOztJQUMvQyxxQ0FBYzs7SUFDZCx5Q0FBa0I7O0lBQ2xCLDZDQUFzQjs7Ozs7QUFHeEIsb0RBRUM7OztJQURDLGtEQUFnQjs7Ozs7QUFHbEIsK0NBSUM7OztJQUhDLHlDQUFhOztJQUNiLDZDQUFpQjs7SUFDakIsMkNBQWU7Ozs7O0FBR2pCLHNDQU1DOzs7SUFMQyw4QkFBVzs7SUFDWCxpQ0FBeUI7O0lBQ3pCLHFDQUFxQjs7SUFDckIsZ0NBQWM7O0lBQ2QsMENBQXdCOzs7Ozs7QUFHMUIsdUNBU0M7Ozs7Ozs7Ozs7O0lBUkMsdUhBTytDOzs7Ozs7QUFHakQsb0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVQcmVmZXJlbmNlcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgc29ydD86IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9O1xuICBmaWx0ZXI/OiBJRGF0YVRhYmxlRmlsdGVyIHwgSURhdGFUYWJsZUZpbHRlcltdO1xuICBnbG9iYWxTZWFyY2g/OiBhbnk7XG4gIHBhZ2VTaXplPzogbnVtYmVyO1xuICBkaXNwbGF5ZWRDb2x1bW5zPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZUNvbHVtbjxUPiB7XG4gIGlkOiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBsYWJlbEljb24/OiBzdHJpbmc7XG4gIGVuYWJsZWQ/OiBib29sZWFuO1xuICB0eXBlOlxuICAgIHwgJ3RleHQnXG4gICAgfCAnbGluaydcbiAgICB8ICdsaW5rOnRlbCdcbiAgICB8ICdsaW5rOm1haWx0bydcbiAgICB8ICdkYXRlJ1xuICAgIHwgJ2RhdGV0aW1lJ1xuICAgIHwgJ3RpbWUnXG4gICAgfCAnY3VycmVuY3knXG4gICAgfCAnYmlnZGVjaW1hbCdcbiAgICB8ICdudW1iZXInXG4gICAgfCAncGVyY2VudCdcbiAgICB8ICdhY3Rpb24nXG4gICAgfCAnZXhwYW5kJztcbiAgdGVtcGxhdGU/OiBzdHJpbmc7XG4gIGZvcm1hdD86IHN0cmluZyB8IHN0cmluZ1tdO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGNlbGxDbGFzcz86IChyb3c6IFQpID0+IHN0cmluZztcbiAgZGlzYWJsZWRGdW5jPzogKHJvdzogVCkgPT4gYm9vbGVhbjtcbiAgaGFuZGxlcnM/OiB7XG4gICAgY2xpY2s/KHsgb3JpZ2luYWxFdmVudDogTW91c2VFdmVudCwgcm93OiBUIH0pOiB2b2lkO1xuICB9O1xuICB3aWR0aD86IG51bWJlcjtcbiAgc29ydGFibGU/OiBib29sZWFuIHwgSURhdGFUYWJsZUNvbHVtblNvcnRDb25maWc7XG4gIGZpbHRlcmFibGU/OiBib29sZWFuIHwgSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZztcbiAgcmVzaXphYmxlPzogYm9vbGVhbjtcbiAgYWN0aW9uPzoge1xuICAgIGljb24/OiBzdHJpbmc7XG4gICAgdG9vbHRpcD86IHN0cmluZztcbiAgICBvcHRpb25zPzoge1xuICAgICAgbGFiZWw6IHN0cmluZztcbiAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgIGNsaWNrKHsgb3JpZ2luYWxFdmVudDogTW91c2VFdmVudCwgcm93OiBUIH0pOiB2b2lkO1xuICAgICAgfTtcbiAgICAgIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgICAgIGRpc2FibGVkRnVuYz86IChyb3c6IFQpID0+IGJvb2xlYW47XG4gICAgfVtdO1xuICB9O1xuICBhdHRyaWJ1dGVzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTsgLy8gZm9yIGFueSBjdXN0b20gY29uZmlnIGluIGNlbGxzXG4gIGluaXRpYWxSZXNpemFibGU/OiB7XG4gICAgcmVzaXphYmxlOiBib29sZWFuO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gIH07XG4gIHJpZ2h0QWxpZ25DZWxsQ29udGVudD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZVBhZ2luYXRpb25PcHRpb25zIHtcbiAgdGhlbWU6ICdiYXNpYycgfCAnc3RhbmRhcmQnIHwgJ2Jhc2ljLXdpZGUnO1xuICBwYWdlPzogbnVtYmVyO1xuICBwYWdlU2l6ZTogbnVtYmVyO1xuICBwYWdlU2l6ZU9wdGlvbnM6IG51bWJlcltdIHwgeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlQ29sdW1uU29ydENvbmZpZyB7XG4gIHRyYW5zZm9ybT86IEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWcge1xuICB0eXBlOiAndGV4dCcgfCAnbnVtYmVyJyB8ICdkYXRlJyB8ICdzZWxlY3QnIHwgJ211bHRpLXNlbGVjdCcgfCAnY3VzdG9tJztcbiAgb3B0aW9ucz86IHN0cmluZ1tdIHwgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbltdO1xuICBhbGxvd0N1c3RvbVJhbmdlPzogYm9vbGVhbjtcbiAgdHJhbnNmb3JtPzogRnVuY3Rpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlPzogYW55O1xuICBtaW4/OiBudW1iZXI7XG4gIG1heD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlU2VhcmNoT3B0aW9ucyB7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICB0b29sdGlwPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVTb3J0RmlsdGVyIHtcbiAgaWQ6IHN0cmluZztcbiAgZGlyZWN0aW9uPzogc3RyaW5nO1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBmaWx0ZXI/OiBzdHJpbmcgfCBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVDaGFuZ2VFdmVudCB7XG4gIHNvcnQ/OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfTtcbiAgZmlsdGVyPzogSURhdGFUYWJsZUZpbHRlciB8IElEYXRhVGFibGVGaWx0ZXJbXTtcbiAgcGFnZT86IG51bWJlcjtcbiAgcGFnZVNpemU/OiBudW1iZXI7XG4gIGdsb2JhbFNlYXJjaD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVRhYmxlU2VsZWN0aW9uQ2hhbmdlRXZlbnQge1xuICBzZWxlY3RlZDogYW55W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZVBhZ2luYXRpb25FdmVudCB7XG4gIHBhZ2U6IG51bWJlcjtcbiAgcGFnZVNpemU6IG51bWJlcjtcbiAgbGVuZ3RoOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZUZpbHRlciB7XG4gIGlkOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgdHJhbnNmb3JtPzogRnVuY3Rpb247XG4gIHR5cGU/OiBzdHJpbmc7XG4gIHNlbGVjdGVkT3B0aW9uPzogT2JqZWN0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhVGFibGVTZXJ2aWNlPFQ+IHtcbiAgZ2V0VGFibGVSZXN1bHRzKFxuICAgIHNvcnQ6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZzsgdHJhbnNmb3JtPzogRnVuY3Rpb24gfSxcbiAgICBmaWx0ZXI6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZzsgdHJhbnNmb3JtPzogRnVuY3Rpb24gfSB8IElEYXRhVGFibGVGaWx0ZXIgfCBJRGF0YVRhYmxlRmlsdGVyW10sXG4gICAgcGFnZTogbnVtYmVyLFxuICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgZ2xvYmFsU2VhcmNoPzogc3RyaW5nLFxuICAgIG91dHNpZGVGaWx0ZXI/OiBhbnksXG4gICk6IE9ic2VydmFibGU8eyByZXN1bHRzOiBUW107IHRvdGFsOiBudW1iZXIgfT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFUYWJsZUNlbGw8VD4ge31cbiJdfQ==