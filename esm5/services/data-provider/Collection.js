/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9kYXRhLXByb3ZpZGVyL0NvbGxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQSxnQ0FxR0M7OztJQXBHQyxnQ0FBMEM7O0lBQzFDLDRCQUFlOztJQUNmLDJCQUFjOztJQUNkLDRCQUFpQjs7SUFDakIsZ0NBQXFCOztJQUNyQiwwQkFBZTs7SUFDZiw0QkFBWTs7SUFDWiwwQkFBaUI7Ozs7SUFFakIsK0NBQW1COzs7O0lBQ25CLGlEQUFxQjs7OztJQUNyQixpREFBcUI7Ozs7SUFDckIsa0RBQXNCOzs7Ozs7OztJQVF0QixtREFBdUI7Ozs7Ozs7Ozs7O0lBVXZCLDREQUF3Qzs7Ozs7O0lBTXhDLHFEQUFnQzs7Ozs7Ozs7Ozs7O0lBY2hDLGdFQUFtRDs7Ozs7OztJQVFuRCx3REFBbUM7Ozs7Ozs7Ozs7O0lBbUJuQyxzREFBNkI7Ozs7O0lBSTdCLGlEQUFrQjs7Ozs7OztJQVFsQix5REFBb0M7Ozs7Ozs7SUFRcEMsK0NBQXNCOzs7O0lBRXRCLCtDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbkV2ZW50IH0gZnJvbSAnLi9Db2xsZWN0aW9uRXZlbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbGxlY3Rpb248VD4ge1xuICBkYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q29sbGVjdGlvbkV2ZW50PjtcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIHRvdGFsOiBudW1iZXI7XG4gIHNvdXJjZTogQXJyYXk8VD47XG4gIGZpbHRlckRhdGE6IEFycmF5PFQ+O1xuICBsaXN0OiBBcnJheTxUPjtcbiAgZmlsdGVyOiBhbnk7XG4gIHNvcnQ6IEFycmF5PGFueT47XG5cbiAgaXNFbXB0eSgpOiBib29sZWFuO1xuICBoYXNFcnJvcnMoKTogYm9vbGVhbjtcbiAgaXNMb2FkaW5nKCk6IGJvb2xlYW47XG4gIGlzRmlsdGVyZWQoKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogIEFkZHMgdGhlIHNwZWNpZmllZCBpdGVtIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXG4gICAqICBFcXVpdmFsZW50IHRvIDxjb2RlPmFkZEl0ZW1BdChpdGVtLCBsZW5ndGgpPC9jb2RlPi5cbiAgICpcbiAgICogIEBwYXJhbSBpdGVtIFRoZSBpdGVtIHRvIGFkZC5cbiAgICovXG4gIGFkZEl0ZW0oaXRlbTogVCk6IHZvaWQ7XG4gIC8qKlxuICAgKiAgQWRkcyB0aGUgaXRlbSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKiAgVGhlIGluZGV4IG9mIGFueSBpdGVtIGdyZWF0ZXIgdGhhbiB0aGUgaW5kZXggb2YgdGhlIGFkZGVkIGl0ZW0gaXMgaW5jcmVhc2VkIGJ5IG9uZS5cbiAgICogIElmIHRoZSB0aGUgc3BlY2lmaWVkIGluZGV4IGlzIGxlc3MgdGhhbiB6ZXJvIG9yIGdyZWF0ZXIgdGhhbiB0aGUgbGVuZ3RoXG4gICAqICBvZiB0aGUgbGlzdCwgYSBSYW5nZUVycm9yIGlzIHRocm93bi5cbiAgICogIEBwYXJhbSBpdGVtIFRoZSBpdGVtIHRvIHBsYWNlIGF0IHRoZSBpbmRleC5cbiAgICogIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggYXQgd2hpY2ggdG8gcGxhY2UgdGhlIGl0ZW0uXG4gICAqICBAdGhyb3dzIFJhbmdlRXJyb3IgaWYgaW5kZXggaXMgbGVzcyB0aGFuIDAgb3IgZ3JlYXRlciB0aGFuIHRoZSBsZW5ndGggb2YgdGhlIGxpc3QuXG4gICAqL1xuICBhZGRJdGVtQXQoaXRlbTogVCwgaW5kZXg6IG51bWJlcik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqICBBZGRzIGFsbCBvZiB0aGUgaXRlbXMgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdFxuICAgKiAgQHBhcmFtIGl0ZW1zIFRoZSBpdGVtcyB0byBwbGFjZSBhdCB0aGUgZW5kIG9mIHRoZSBsaXN0LlxuICAgKi9cbiAgYWRkSXRlbXMoaXRlbXM6IEFycmF5PFQ+KTogdm9pZDtcblxuICAvKipcbiAgICogIEdldHMgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICogIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggaW4gdGhlIGxpc3QgZnJvbSB3aGljaCB0byByZXRyaWV2ZSB0aGUgaXRlbS5cbiAgICogIEBwYXJhbSBwcmVmZXRjaCBBbiA8Y29kZT5udW1iZXI8L2NvZGU+IGluZGljYXRpbmcgYm90aCB0aGUgZGlyZWN0aW9uXG4gICAqICBhbmQgbnVtYmVyIG9mIGl0ZW1zIHRvIGZldGNoIGR1cmluZyB0aGUgcmVxdWVzdCBpZiB0aGUgaXRlbSBpc1xuICAgKiAgbm90IGxvY2FsLlxuICAgKiAgQHJldHVybiBUaGUgaXRlbSBhdCB0aGF0IGluZGV4LCBvciA8Y29kZT5udWxsPC9jb2RlPiBpZiB0aGVyZSBpcyBub25lLlxuICAgKiAgQHRocm93cyBteC5jb2xsZWN0aW9ucy5lcnJvcnMuSXRlbVBlbmRpbmdFcnJvciBpZiB0aGUgZGF0YSBmb3IgdGhhdCBpbmRleCBuZWVkcyB0byBiZVxuICAgKiAgbG9hZGVkIGZyb20gYSByZW1vdGUgbG9jYXRpb24uXG4gICAqICBAdGhyb3dzIFJhbmdlRXJyb3IgaWYgPGNvZGU+aW5kZXggJmx0OyAwPC9jb2RlPlxuICAgKiAgb3IgPGNvZGU+aW5kZXggPj0gbGVuZ3RoPC9jb2RlPi5cbiAgICovXG4gIGdldEl0ZW1BdChpbmRleDogbnVtYmVyLCBwcmVmZXRjaDogbnVtYmVyKTogT2JqZWN0O1xuXG4gIC8qKlxuICAgKiAgUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gaWYgaXQgaXMgaW4gdGhlIGxpc3Qgc3VjaCB0aGF0XG4gICAqICBnZXRJdGVtQXQoaW5kZXgpID09IGl0ZW0uXG4gICAqICBAcGFyYW0gaXRlbSBUaGUgaXRlbSB0byBmaW5kLlxuICAgKiAgQHJldHVybiBUaGUgaW5kZXggb2YgdGhlIGl0ZW0sIG9yIC0xIGlmIHRoZSBpdGVtIGlzIG5vdCBpbiB0aGUgbGlzdC5cbiAgICovXG4gIGdldEl0ZW1JbmRleChpdGVtOiBPYmplY3QpOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqICBOb3RpZmllcyB0aGUgdmlldyB0aGF0IGFuIGl0ZW0gaGFzIGJlZW4gdXBkYXRlZC5cbiAgICogIFRoaXMgaXMgdXNlZnVsIGlmIHRoZSBjb250ZW50cyBvZiB0aGUgdmlldyBkbyBub3QgaW1wbGVtZW50XG4gICAqICBJZiBhIHByb3BlcnR5IGlzIHNwZWNpZmllZCB0aGUgdmlldyBtYXkgYmUgYWJsZSB0byBvcHRpbWl6ZSBpdHNcbiAgICogIG5vdGlmaWNhdGlvbiBtZWNoYW5pc20uXG4gICAqICBPdGhlcndpc2UgaXQgbWF5IGNob29zZSB0byBzaW1wbHkgcmVmcmVzaCB0aGUgd2hvbGUgdmlldy5cbiAgICpcbiAgICogIEBwYXJhbSBpdGVtIFRoZSBpdGVtIHdpdGhpbiB0aGUgdmlldyB0aGF0IHdhcyB1cGRhdGVkLlxuICAgKiAgQHBhcmFtIHByb3BlcnR5IFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0aGF0IHdhcyB1cGRhdGVkLlxuICAgKiAgQHBhcmFtIG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgb2YgdGhhdCBwcm9wZXJ0eS4gKElmIHByb3BlcnR5IHdhcyBudWxsLFxuICAgKiAgdGhpcyBjYW4gYmUgdGhlIG9sZCB2YWx1ZSBvZiB0aGUgaXRlbS4pXG4gICAqICBAcGFyYW0gbmV3VmFsdWUgVGhlIG5ldyB2YWx1ZSBvZiB0aGF0IHByb3BlcnR5LiAoSWYgcHJvcGVydHkgd2FzIG51bGwsXG4gICAqICB0aGVyZSdzIG5vIG5lZWQgdG8gc3BlY2lmeSB0aGlzIGFzIHRoZSBpdGVtIGlzIGFzc3VtZWQgdG8gYmVcbiAgICogIHRoZSBuZXcgdmFsdWUuKVxuICAgKi9cbiAgLy8gaXRlbVVwZGF0ZWQoaXRlbTogT2JqZWN0LCBwcm9wZXJ0eT86IE9iamVjdCwgb2xkVmFsdWU/OiBPYmplY3QsIG5ld1ZhbHVlPzogT2JqZWN0KTogdm9pZDtcblxuICByZW1vdmVJdGVtKGl0ZW06IFQpOiBib29sZWFuO1xuICAvKipcbiAgICogIFJlbW92ZXMgYWxsIGl0ZW1zIGZyb20gdGhlIGxpc3QuXG4gICAqL1xuICByZW1vdmVBbGwoKTogdm9pZDtcblxuICAvKipcbiAgICogIFJlbW92ZXMgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleCBhbmQgcmV0dXJucyBpdC5cbiAgICogIEFueSBpdGVtcyB0aGF0IHdlcmUgYWZ0ZXIgdGhpcyBpbmRleCBhcmUgbm93IG9uZSBpbmRleCBlYXJsaWVyLlxuICAgKiAgQHBhcmFtIGluZGV4IFRoZSBpbmRleCBmcm9tIHdoaWNoIHRvIHJlbW92ZSB0aGUgaXRlbS5cbiAgICogIEByZXR1cm4gVGhlIGl0ZW0gdGhhdCB3YXMgcmVtb3ZlZC5cbiAgICovXG4gIHJlbW92ZUl0ZW1BdChpbmRleDogbnVtYmVyKTogT2JqZWN0O1xuXG4gIC8qKlxuICAgKiAgUmV0dXJucyBhbiBBcnJheSB0aGF0IGlzIHBvcHVsYXRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgSUxpc3RcbiAgICogIGltcGxlbWVudGF0aW9uLlxuICAgKiAgVGhpcyBtZXRob2QgY2FuIHRocm93IGFuIEl0ZW1QZW5kaW5nRXJyb3IuXG4gICAqICBAcmV0dXJuIFRoZSBhcnJheS5cbiAgICovXG4gIHRvQXJyYXkoKTogQXJyYXk8YW55PjtcblxuICByZWZyZXNoKCk6IHZvaWQ7XG59XG4iXX0=