/**
 * @fileoverview added by tsickle
 * Generated from: elements/simple-table/interfaces.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
export function SimpleTableColumn() { }
if (false) {
    /** @type {?} */
    SimpleTableColumn.prototype.id;
    /** @type {?} */
    SimpleTableColumn.prototype.label;
    /** @type {?|undefined} */
    SimpleTableColumn.prototype.renderType;
    /** @type {?} */
    SimpleTableColumn.prototype.renderer;
    /** @type {?|undefined} */
    SimpleTableColumn.prototype.customClass;
    /** @type {?|undefined} */
    SimpleTableColumn.prototype.width;
    /** @type {?|undefined} */
    SimpleTableColumn.prototype.config;
    /**
     * @param {?} row
     * @return {?}
     */
    SimpleTableColumn.prototype.onClick = function (row) { };
}
/**
 * @record
 */
export function SimpleTablePaginationOptions() { }
if (false) {
    /** @type {?|undefined} */
    SimpleTablePaginationOptions.prototype.page;
    /** @type {?|undefined} */
    SimpleTablePaginationOptions.prototype.pageSize;
    /** @type {?|undefined} */
    SimpleTablePaginationOptions.prototype.pageSizeOptions;
}
/**
 * @record
 */
export function SimpleTableColumnFilterConfig() { }
if (false) {
    /** @type {?} */
    SimpleTableColumnFilterConfig.prototype.type;
    /** @type {?|undefined} */
    SimpleTableColumnFilterConfig.prototype.options;
    /** @type {?|undefined} */
    SimpleTableColumnFilterConfig.prototype.allowCustomRange;
}
/**
 * @record
 */
export function SimpleTableColumnFilterOption() { }
if (false) {
    /** @type {?} */
    SimpleTableColumnFilterOption.prototype.label;
    /** @type {?|undefined} */
    SimpleTableColumnFilterOption.prototype.value;
    /** @type {?|undefined} */
    SimpleTableColumnFilterOption.prototype.min;
    /** @type {?|undefined} */
    SimpleTableColumnFilterOption.prototype.max;
}
/**
 * @record
 */
export function SimpleTableSearchOptions() { }
if (false) {
    /** @type {?|undefined} */
    SimpleTableSearchOptions.prototype.placeholder;
    /** @type {?|undefined} */
    SimpleTableSearchOptions.prototype.tooltip;
}
/**
 * @record
 * @template T
 */
export function SimpleTableActionColumnOption() { }
if (false) {
    /** @type {?} */
    SimpleTableActionColumnOption.prototype.label;
    /** @type {?|undefined} */
    SimpleTableActionColumnOption.prototype.disabled;
    /**
     * @param {?} row
     * @return {?}
     */
    SimpleTableActionColumnOption.prototype.onClick = function (row) { };
    /**
     * @param {?} row
     * @return {?}
     */
    SimpleTableActionColumnOption.prototype.disabledCheck = function (row) { };
}
/**
 * @record
 * @template T
 */
export function SimpleTableActionColumn() { }
if (false) {
    /** @type {?} */
    SimpleTableActionColumn.prototype.id;
    /** @type {?|undefined} */
    SimpleTableActionColumn.prototype.icon;
    /** @type {?|undefined} */
    SimpleTableActionColumn.prototype.label;
    /** @type {?|undefined} */
    SimpleTableActionColumn.prototype.disabled;
    /** @type {?|undefined} */
    SimpleTableActionColumn.prototype.options;
    /**
     * @param {?} row
     * @return {?}
     */
    SimpleTableActionColumn.prototype.disabledCheck = function (row) { };
    /**
     * @param {?} row
     * @return {?}
     */
    SimpleTableActionColumn.prototype.onClick = function (row) { };
}
/**
 * @record
 */
export function NovoSimpleSortFilter() { }
if (false) {
    /** @type {?} */
    NovoSimpleSortFilter.prototype.id;
    /** @type {?|undefined} */
    NovoSimpleSortFilter.prototype.direction;
    /** @type {?|undefined} */
    NovoSimpleSortFilter.prototype.active;
    /** @type {?|undefined} */
    NovoSimpleSortFilter.prototype.filter;
}
/**
 * @record
 */
export function NovoSimpleTableChange() { }
if (false) {
    /** @type {?|undefined} */
    NovoSimpleTableChange.prototype.sort;
    /** @type {?|undefined} */
    NovoSimpleTableChange.prototype.filter;
    /** @type {?|undefined} */
    NovoSimpleTableChange.prototype.page;
    /** @type {?|undefined} */
    NovoSimpleTableChange.prototype.pageSize;
    /** @type {?|undefined} */
    NovoSimpleTableChange.prototype.globalSearch;
}
/**
 * @record
 */
export function NovoSimpleSelectionChange() { }
if (false) {
    /** @type {?} */
    NovoSimpleSelectionChange.prototype.selected;
}
/**
 * @record
 */
export function NovoSimplePaginationEvent() { }
if (false) {
    /** @type {?} */
    NovoSimplePaginationEvent.prototype.page;
    /** @type {?} */
    NovoSimplePaginationEvent.prototype.pageSize;
    /** @type {?} */
    NovoSimplePaginationEvent.prototype.length;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvaW50ZXJmYWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Q0FrQkM7OztJQWpCQywrQkFBVzs7SUFDWCxrQ0FBYzs7SUFDZCx1Q0FBNkI7O0lBQzdCLHFDQUFtQjs7SUFDbkIsd0NBQWtDOztJQUVsQyxrQ0FBZTs7SUFDZixtQ0FTRTs7Ozs7SUFYRix5REFBc0I7Ozs7O0FBY3hCLGtEQUlDOzs7SUFIQyw0Q0FBYzs7SUFDZCxnREFBa0I7O0lBQ2xCLHVEQUEyQjs7Ozs7QUFHN0IsbURBSUM7OztJQUhDLDZDQUFpQzs7SUFDakMsZ0RBQXFEOztJQUNyRCx5REFBMkI7Ozs7O0FBRzdCLG1EQUtDOzs7SUFKQyw4Q0FBYzs7SUFDZCw4Q0FBWTs7SUFDWiw0Q0FBYTs7SUFDYiw0Q0FBYTs7Ozs7QUFHZiw4Q0FHQzs7O0lBRkMsK0NBQXFCOztJQUNyQiwyQ0FBaUI7Ozs7OztBQUduQixtREFLQzs7O0lBSkMsOENBQWM7O0lBRWQsaURBQW1COzs7OztJQURuQixxRUFBd0I7Ozs7O0lBRXhCLDJFQUFnQzs7Ozs7O0FBR2xDLDZDQVFDOzs7SUFQQyxxQ0FBVzs7SUFDWCx1Q0FBYzs7SUFDZCx3Q0FBZTs7SUFDZiwyQ0FBbUI7O0lBRW5CLDBDQUE2Qzs7Ozs7SUFEN0MscUVBQWdDOzs7OztJQUVoQywrREFBdUI7Ozs7O0FBR3pCLDBDQUtDOzs7SUFKQyxrQ0FBVzs7SUFDWCx5Q0FBbUI7O0lBQ25CLHNDQUFpQjs7SUFDakIsc0NBQTBCOzs7OztBQUc1QiwyQ0FNQzs7O0lBTEMscUNBQXFDOztJQUNyQyx1Q0FBdUM7O0lBQ3ZDLHFDQUFjOztJQUNkLHlDQUFrQjs7SUFDbEIsNkNBQXNCOzs7OztBQUd4QiwrQ0FFQzs7O0lBREMsNkNBQWdCOzs7OztBQUdsQiwrQ0FJQzs7O0lBSEMseUNBQWE7O0lBQ2IsNkNBQWlCOztJQUNqQiwyQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgU2ltcGxlVGFibGVDb2x1bW48VD4ge1xuICBpZDogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICByZW5kZXJUeXBlPzogJ3RleHQnIHwgJ2xpbmsnO1xuICByZW5kZXJlcjogRnVuY3Rpb247XG4gIGN1c3RvbUNsYXNzPzogKHJvdz86IFQpID0+IHN0cmluZztcbiAgb25DbGljaz8ocm93OiBUKTogYW55O1xuICB3aWR0aD86IG51bWJlcjtcbiAgY29uZmlnPzoge1xuICAgIHNvcnRhYmxlPzogYm9vbGVhbjtcbiAgICBmaWx0ZXJhYmxlPzogYm9vbGVhbjtcbiAgICB0cmFuc2Zvcm1zPzoge1xuICAgICAgZmlsdGVyPzogRnVuY3Rpb247XG4gICAgICBzb3J0PzogRnVuY3Rpb247XG4gICAgfTtcbiAgICBzb3J0VHJhbnNmb3JtPzogRnVuY3Rpb247XG4gICAgZmlsdGVyQ29uZmlnPzogU2ltcGxlVGFibGVDb2x1bW5GaWx0ZXJDb25maWc7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2ltcGxlVGFibGVQYWdpbmF0aW9uT3B0aW9ucyB7XG4gIHBhZ2U/OiBudW1iZXI7XG4gIHBhZ2VTaXplPzogbnVtYmVyO1xuICBwYWdlU2l6ZU9wdGlvbnM/OiBudW1iZXJbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaW1wbGVUYWJsZUNvbHVtbkZpbHRlckNvbmZpZyB7XG4gIHR5cGU6ICd0ZXh0JyB8ICdkYXRlJyB8ICdzZWxlY3QnO1xuICBvcHRpb25zPzogc3RyaW5nW10gfCBTaW1wbGVUYWJsZUNvbHVtbkZpbHRlck9wdGlvbltdO1xuICBhbGxvd0N1c3RvbVJhbmdlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaW1wbGVUYWJsZUNvbHVtbkZpbHRlck9wdGlvbiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlPzogYW55O1xuICBtaW4/OiBudW1iZXI7XG4gIG1heD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaW1wbGVUYWJsZVNlYXJjaE9wdGlvbnMge1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgdG9vbHRpcD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaW1wbGVUYWJsZUFjdGlvbkNvbHVtbk9wdGlvbjxUPiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIG9uQ2xpY2socm93OiBUKTogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGRpc2FibGVkQ2hlY2s/KHJvdzogVCk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2ltcGxlVGFibGVBY3Rpb25Db2x1bW48VD4ge1xuICBpZDogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBsYWJlbD86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZENoZWNrPyhyb3c6IFQpOiBib29sZWFuO1xuICBvcHRpb25zPzogU2ltcGxlVGFibGVBY3Rpb25Db2x1bW5PcHRpb248VD5bXTtcbiAgb25DbGljaz8ocm93OiBUKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3ZvU2ltcGxlU29ydEZpbHRlciB7XG4gIGlkOiBzdHJpbmc7XG4gIGRpcmVjdGlvbj86IHN0cmluZztcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgZmlsdGVyPzogc3RyaW5nIHwgYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3ZvU2ltcGxlVGFibGVDaGFuZ2Uge1xuICBzb3J0PzogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH07XG4gIGZpbHRlcj86IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9O1xuICBwYWdlPzogbnVtYmVyO1xuICBwYWdlU2l6ZT86IG51bWJlcjtcbiAgZ2xvYmFsU2VhcmNoPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9TaW1wbGVTZWxlY3Rpb25DaGFuZ2Uge1xuICBzZWxlY3RlZDogYW55W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm92b1NpbXBsZVBhZ2luYXRpb25FdmVudCB7XG4gIHBhZ2U6IG51bWJlcjtcbiAgcGFnZVNpemU6IG51bWJlcjtcbiAgbGVuZ3RoOiBudW1iZXI7XG59XG4iXX0=