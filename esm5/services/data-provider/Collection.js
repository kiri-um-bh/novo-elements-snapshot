/**
 * @fileoverview added by tsickle
 * Generated from: services/data-provider/Collection.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
export function Collection() { }
if (false) {
    /** @type {?} */
    Collection.prototype.dataChange;
    /** @type {?} */
    Collection.prototype.length;
    /** @type {?} */
    Collection.prototype.total;
    /** @type {?} */
    Collection.prototype.source;
    /** @type {?} */
    Collection.prototype.filterData;
    /** @type {?} */
    Collection.prototype.list;
    /** @type {?} */
    Collection.prototype.filter;
    /** @type {?} */
    Collection.prototype.sort;
    /**
     * @return {?}
     */
    Collection.prototype.isEmpty = function () { };
    /**
     * @return {?}
     */
    Collection.prototype.hasErrors = function () { };
    /**
     * @return {?}
     */
    Collection.prototype.isLoading = function () { };
    /**
     * @return {?}
     */
    Collection.prototype.isFiltered = function () { };
    /**
     *  Adds the specified item to the end of the list.
     *  Equivalent to <code>addItemAt(item, length)</code>.
     *
     * @param {?} item The item to add.
     * @return {?}
     */
    Collection.prototype.addItem = function (item) { };
    /**
     *  Adds the item at the specified index.
     *  The index of any item greater than the index of the added item is increased by one.
     *  If the the specified index is less than zero or greater than the length
     *  of the list, a RangeError is thrown.
     * @throws RangeError if index is less than 0 or greater than the length of the list.
     * @param {?} item The item to place at the index.
     * @param {?} index The index at which to place the item.
     * @return {?}
     */
    Collection.prototype.addItemAt = function (item, index) { };
    /**
     *  Adds all of the items to the end of the list
     * @param {?} items The items to place at the end of the list.
     * @return {?}
     */
    Collection.prototype.addItems = function (items) { };
    /**
     *  Gets the item at the specified index.
     * @throws mx.collections.errors.ItemPendingError if the data for that index needs to be
     *  loaded from a remote location. / RangeError if <code>index &lt; 0</code>
     *  or <code>index >= length</code>.
     * @param {?} index The index in the list from which to retrieve the item.
     * @param {?} prefetch An <code>number</code> indicating both the direction
     *  and number of items to fetch during the request if the item is
     *  not local.
     * @return {?} The item at that index, or <code>null</code> if there is none.
     */
    Collection.prototype.getItemAt = function (index, prefetch) { };
    /**
     *  Returns the index of the item if it is in the list such that
     *  getItemAt(index) == item.
     * @param {?} item The item to find.
     * @return {?} The index of the item, or -1 if the item is not in the list.
     */
    Collection.prototype.getItemIndex = function (item) { };
    /**
     *  Notifies the view that an item has been updated.
     *  This is useful if the contents of the view do not implement
     *  If a property is specified the view may be able to optimize its
     *  notification mechanism.
     *  Otherwise it may choose to simply refresh the whole view.
     *
     * @param {?} item The item within the view that was updated.
     * @return {?}
     */
    Collection.prototype.removeItem = function (item) { };
    /**
     *  Removes all items from the list.
     * @return {?}
     */
    Collection.prototype.removeAll = function () { };
    /**
     *  Removes the item at the specified index and returns it.
     *  Any items that were after this index are now one index earlier.
     * @param {?} index The index from which to remove the item.
     * @return {?} The item that was removed.
     */
    Collection.prototype.removeItemAt = function (index) { };
    /**
     *  Returns an Array that is populated in the same order as the IList
     *  implementation.
     *  This method can throw an ItemPendingError.
     * @return {?} The array.
     */
    Collection.prototype.toArray = function () { };
    /**
     * @return {?}
     */
    Collection.prototype.refresh = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9kYXRhLXByb3ZpZGVyL0NvbGxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0EsZ0NBcUdDOzs7SUFwR0MsZ0NBQTBDOztJQUMxQyw0QkFBZTs7SUFDZiwyQkFBYzs7SUFDZCw0QkFBaUI7O0lBQ2pCLGdDQUFxQjs7SUFDckIsMEJBQWU7O0lBQ2YsNEJBQVk7O0lBQ1osMEJBQWlCOzs7O0lBRWpCLCtDQUFtQjs7OztJQUNuQixpREFBcUI7Ozs7SUFDckIsaURBQXFCOzs7O0lBQ3JCLGtEQUFzQjs7Ozs7Ozs7SUFRdEIsbURBQXVCOzs7Ozs7Ozs7OztJQVV2Qiw0REFBd0M7Ozs7OztJQU14QyxxREFBZ0M7Ozs7Ozs7Ozs7OztJQWNoQyxnRUFBbUQ7Ozs7Ozs7SUFRbkQsd0RBQW1DOzs7Ozs7Ozs7OztJQW1CbkMsc0RBQTZCOzs7OztJQUk3QixpREFBa0I7Ozs7Ozs7SUFRbEIseURBQW9DOzs7Ozs7O0lBUXBDLCtDQUFzQjs7OztJQUV0QiwrQ0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbGxlY3Rpb25FdmVudCB9IGZyb20gJy4vQ29sbGVjdGlvbkV2ZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBDb2xsZWN0aW9uPFQ+IHtcbiAgZGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPENvbGxlY3Rpb25FdmVudD47XG4gIGxlbmd0aDogbnVtYmVyO1xuICB0b3RhbDogbnVtYmVyO1xuICBzb3VyY2U6IEFycmF5PFQ+O1xuICBmaWx0ZXJEYXRhOiBBcnJheTxUPjtcbiAgbGlzdDogQXJyYXk8VD47XG4gIGZpbHRlcjogYW55O1xuICBzb3J0OiBBcnJheTxhbnk+O1xuXG4gIGlzRW1wdHkoKTogYm9vbGVhbjtcbiAgaGFzRXJyb3JzKCk6IGJvb2xlYW47XG4gIGlzTG9hZGluZygpOiBib29sZWFuO1xuICBpc0ZpbHRlcmVkKCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBBZGRzIHRoZSBzcGVjaWZpZWQgaXRlbSB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxuICAgKiAgRXF1aXZhbGVudCB0byA8Y29kZT5hZGRJdGVtQXQoaXRlbSwgbGVuZ3RoKTwvY29kZT4uXG4gICAqXG4gICAqICBAcGFyYW0gaXRlbSBUaGUgaXRlbSB0byBhZGQuXG4gICAqL1xuICBhZGRJdGVtKGl0ZW06IFQpOiB2b2lkO1xuICAvKipcbiAgICogIEFkZHMgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICogIFRoZSBpbmRleCBvZiBhbnkgaXRlbSBncmVhdGVyIHRoYW4gdGhlIGluZGV4IG9mIHRoZSBhZGRlZCBpdGVtIGlzIGluY3JlYXNlZCBieSBvbmUuXG4gICAqICBJZiB0aGUgdGhlIHNwZWNpZmllZCBpbmRleCBpcyBsZXNzIHRoYW4gemVybyBvciBncmVhdGVyIHRoYW4gdGhlIGxlbmd0aFxuICAgKiAgb2YgdGhlIGxpc3QsIGEgUmFuZ2VFcnJvciBpcyB0aHJvd24uXG4gICAqICBAcGFyYW0gaXRlbSBUaGUgaXRlbSB0byBwbGFjZSBhdCB0aGUgaW5kZXguXG4gICAqICBAcGFyYW0gaW5kZXggVGhlIGluZGV4IGF0IHdoaWNoIHRvIHBsYWNlIHRoZSBpdGVtLlxuICAgKiAgQHRocm93cyBSYW5nZUVycm9yIGlmIGluZGV4IGlzIGxlc3MgdGhhbiAwIG9yIGdyZWF0ZXIgdGhhbiB0aGUgbGVuZ3RoIG9mIHRoZSBsaXN0LlxuICAgKi9cbiAgYWRkSXRlbUF0KGl0ZW06IFQsIGluZGV4OiBudW1iZXIpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiAgQWRkcyBhbGwgb2YgdGhlIGl0ZW1zIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICogIEBwYXJhbSBpdGVtcyBUaGUgaXRlbXMgdG8gcGxhY2UgYXQgdGhlIGVuZCBvZiB0aGUgbGlzdC5cbiAgICovXG4gIGFkZEl0ZW1zKGl0ZW1zOiBBcnJheTxUPik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqICBHZXRzIHRoZSBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqICBAcGFyYW0gaW5kZXggVGhlIGluZGV4IGluIHRoZSBsaXN0IGZyb20gd2hpY2ggdG8gcmV0cmlldmUgdGhlIGl0ZW0uXG4gICAqICBAcGFyYW0gcHJlZmV0Y2ggQW4gPGNvZGU+bnVtYmVyPC9jb2RlPiBpbmRpY2F0aW5nIGJvdGggdGhlIGRpcmVjdGlvblxuICAgKiAgYW5kIG51bWJlciBvZiBpdGVtcyB0byBmZXRjaCBkdXJpbmcgdGhlIHJlcXVlc3QgaWYgdGhlIGl0ZW0gaXNcbiAgICogIG5vdCBsb2NhbC5cbiAgICogIEByZXR1cm4gVGhlIGl0ZW0gYXQgdGhhdCBpbmRleCwgb3IgPGNvZGU+bnVsbDwvY29kZT4gaWYgdGhlcmUgaXMgbm9uZS5cbiAgICogIEB0aHJvd3MgbXguY29sbGVjdGlvbnMuZXJyb3JzLkl0ZW1QZW5kaW5nRXJyb3IgaWYgdGhlIGRhdGEgZm9yIHRoYXQgaW5kZXggbmVlZHMgdG8gYmVcbiAgICogIGxvYWRlZCBmcm9tIGEgcmVtb3RlIGxvY2F0aW9uLlxuICAgKiAgQHRocm93cyBSYW5nZUVycm9yIGlmIDxjb2RlPmluZGV4ICZsdDsgMDwvY29kZT5cbiAgICogIG9yIDxjb2RlPmluZGV4ID49IGxlbmd0aDwvY29kZT4uXG4gICAqL1xuICBnZXRJdGVtQXQoaW5kZXg6IG51bWJlciwgcHJlZmV0Y2g6IG51bWJlcik6IE9iamVjdDtcblxuICAvKipcbiAgICogIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBpdGVtIGlmIGl0IGlzIGluIHRoZSBsaXN0IHN1Y2ggdGhhdFxuICAgKiAgZ2V0SXRlbUF0KGluZGV4KSA9PSBpdGVtLlxuICAgKiAgQHBhcmFtIGl0ZW0gVGhlIGl0ZW0gdG8gZmluZC5cbiAgICogIEByZXR1cm4gVGhlIGluZGV4IG9mIHRoZSBpdGVtLCBvciAtMSBpZiB0aGUgaXRlbSBpcyBub3QgaW4gdGhlIGxpc3QuXG4gICAqL1xuICBnZXRJdGVtSW5kZXgoaXRlbTogT2JqZWN0KTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiAgTm90aWZpZXMgdGhlIHZpZXcgdGhhdCBhbiBpdGVtIGhhcyBiZWVuIHVwZGF0ZWQuXG4gICAqICBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgY29udGVudHMgb2YgdGhlIHZpZXcgZG8gbm90IGltcGxlbWVudFxuICAgKiAgSWYgYSBwcm9wZXJ0eSBpcyBzcGVjaWZpZWQgdGhlIHZpZXcgbWF5IGJlIGFibGUgdG8gb3B0aW1pemUgaXRzXG4gICAqICBub3RpZmljYXRpb24gbWVjaGFuaXNtLlxuICAgKiAgT3RoZXJ3aXNlIGl0IG1heSBjaG9vc2UgdG8gc2ltcGx5IHJlZnJlc2ggdGhlIHdob2xlIHZpZXcuXG4gICAqXG4gICAqICBAcGFyYW0gaXRlbSBUaGUgaXRlbSB3aXRoaW4gdGhlIHZpZXcgdGhhdCB3YXMgdXBkYXRlZC5cbiAgICogIEBwYXJhbSBwcm9wZXJ0eSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdGhhdCB3YXMgdXBkYXRlZC5cbiAgICogIEBwYXJhbSBvbGRWYWx1ZSBUaGUgb2xkIHZhbHVlIG9mIHRoYXQgcHJvcGVydHkuIChJZiBwcm9wZXJ0eSB3YXMgbnVsbCxcbiAgICogIHRoaXMgY2FuIGJlIHRoZSBvbGQgdmFsdWUgb2YgdGhlIGl0ZW0uKVxuICAgKiAgQHBhcmFtIG5ld1ZhbHVlIFRoZSBuZXcgdmFsdWUgb2YgdGhhdCBwcm9wZXJ0eS4gKElmIHByb3BlcnR5IHdhcyBudWxsLFxuICAgKiAgdGhlcmUncyBubyBuZWVkIHRvIHNwZWNpZnkgdGhpcyBhcyB0aGUgaXRlbSBpcyBhc3N1bWVkIHRvIGJlXG4gICAqICB0aGUgbmV3IHZhbHVlLilcbiAgICovXG4gIC8vIGl0ZW1VcGRhdGVkKGl0ZW06IE9iamVjdCwgcHJvcGVydHk/OiBPYmplY3QsIG9sZFZhbHVlPzogT2JqZWN0LCBuZXdWYWx1ZT86IE9iamVjdCk6IHZvaWQ7XG5cbiAgcmVtb3ZlSXRlbShpdGVtOiBUKTogYm9vbGVhbjtcbiAgLyoqXG4gICAqICBSZW1vdmVzIGFsbCBpdGVtcyBmcm9tIHRoZSBsaXN0LlxuICAgKi9cbiAgcmVtb3ZlQWxsKCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqICBSZW1vdmVzIHRoZSBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXggYW5kIHJldHVybnMgaXQuXG4gICAqICBBbnkgaXRlbXMgdGhhdCB3ZXJlIGFmdGVyIHRoaXMgaW5kZXggYXJlIG5vdyBvbmUgaW5kZXggZWFybGllci5cbiAgICogIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggZnJvbSB3aGljaCB0byByZW1vdmUgdGhlIGl0ZW0uXG4gICAqICBAcmV0dXJuIFRoZSBpdGVtIHRoYXQgd2FzIHJlbW92ZWQuXG4gICAqL1xuICByZW1vdmVJdGVtQXQoaW5kZXg6IG51bWJlcik6IE9iamVjdDtcblxuICAvKipcbiAgICogIFJldHVybnMgYW4gQXJyYXkgdGhhdCBpcyBwb3B1bGF0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIElMaXN0XG4gICAqICBpbXBsZW1lbnRhdGlvbi5cbiAgICogIFRoaXMgbWV0aG9kIGNhbiB0aHJvdyBhbiBJdGVtUGVuZGluZ0Vycm9yLlxuICAgKiAgQHJldHVybiBUaGUgYXJyYXkuXG4gICAqL1xuICB0b0FycmF5KCk6IEFycmF5PGFueT47XG5cbiAgcmVmcmVzaCgpOiB2b2lkO1xufVxuIl19