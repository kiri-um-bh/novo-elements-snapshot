/**
 * @fileoverview added by tsickle
 * Generated from: services/data-provider/ArrayCollection.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Ng
import { EventEmitter } from '@angular/core';
import { CollectionEvent } from './CollectionEvent';
import { Helpers } from '../../utils/Helpers';
/**
 * Base Class for all Collection based data providers
 *
 * \@example
 *  var dp:DataProvider = new DataProvider();
 *  dp.addItem({label:"Item 1"});
 *  dp.addItem({label:"Item 2"});
 *  dp.addItem({label:"Item 3"});
 *  dp.addItem({label:"Item 4"});
 *  var myList:List = new List();
 *  myList.dataProvider = dp;
 * @template T
 */
export class ArrayCollection {
    /**
     * @param {?=} source
     */
    constructor(source = []) {
        this.dataChange = new EventEmitter();
        this.source = [];
        this.editData = [];
        this.isEditing = false;
        this.filterData = [];
        this._filter = {};
        this._sort = [];
        this.source = source;
        this.editData = this.copy(this.source);
        this.filterData = this.source.slice();
    }
    /**
     * @return {?}
     */
    get length() {
        return this.filterData.length;
    }
    /**
     * @return {?}
     */
    get total() {
        return this.filterData.length;
    }
    /**
     * @return {?}
     */
    get list() {
        return this.filterData;
    }
    /**
     * @return {?}
     */
    isEmpty() {
        return this.length <= 0 && !this.isLoading() && !this.hasErrors();
    }
    /**
     * @return {?}
     */
    hasErrors() {
        return false;
    }
    /**
     * @return {?}
     */
    isLoading() {
        return false;
    }
    /**
     * @return {?}
     */
    isFiltered() {
        return Object.keys(this._filter).length > 0;
    }
    /**
     * Method to switch the isEditingflag for the data source
     * @return {?}
     */
    edit() {
        this.isEditing = true;
        this.editData = this.copy(this.source);
    }
    /**
     * Method to leave edit mode and reset source
     * @return {?}
     */
    undo() {
        this.isEditing = false;
        this.source = this.copy(this.editData);
        this.refresh();
    }
    /**
     * Method to leave edit mode and save editData
     * @return {?}
     */
    commit() {
        this.isEditing = false;
        this.source = this.filterData.slice();
        this.refresh();
    }
    /**
     * Appends an item to the end of the data provider.
     *
     * \@memberOf ArrayCollection
     * @param {?} item
     *
     * @return {?}
     */
    addItem(item) {
        this.isEditing ? this.editData.push(item) : this.source.push(item);
        this.onDataChange(new CollectionEvent(CollectionEvent.ADD, [item]));
        this.refresh();
    }
    /**
     * Adds a new item to the data provider at the specified index.
     *
     * \@memberOf ArrayCollection
     * @param {?} item
     * @param {?} index
     *
     * @return {?}
     */
    addItemAt(item, index) {
        this.isEditing ? this.editData.splice(index, 0, item) : this.source.splice(index, 0, item);
        this.onDataChange(new CollectionEvent(CollectionEvent.ADD, [item]));
        this.refresh();
    }
    /**
     *  Appends multiple items to the end of the DataProvider and dispatches a CollectionEvent.ADD event.
     *
     * \@memberOf ArrayCollection
     * @param {?} items
     *
     * @return {?}
     */
    addItems(items) {
        this.isEditing ? this.editData.push(...items) : this.source.push(...items);
        this.onDataChange(new CollectionEvent(CollectionEvent.ADD, items));
        this.refresh();
    }
    /**
     * Adds several items to the data provider at the specified index and dispatches a CollectionEvent.ADD event.
     *
     * \@memberOf ArrayCollection
     * @param {?} items
     * @param {?} index
     *
     * @return {?}
     */
    addItemsAt(items, index) {
        this.isEditing ? this.editData.splice(index, 0, ...items) : this.source.splice(index, 0, ...items);
    }
    /**
     * Creates a copy of the current ArrayCollection any.
     *
     * \@memberOf ArrayCollection
     * @return {?}
     */
    clone() {
        return new ArrayCollection(this.isEditing ? this.copy(this.editData) : this.copy(this.source));
    }
    /**
     * Creates a copy of the current ArrayCollection any.
     *
     * \@memberOf ArrayCollection
     * @param {?} array
     * @return {?}
     */
    copy(array) {
        return Helpers.deepClone(array);
    }
    /**
     * Concatenates the specified items to the end of the current data provider.
     *
     * \@memberOf ArrayCollection
     * @param {?} items
     *
     * @return {?}
     */
    concat(items) {
        this.addItems(items);
    }
    /**
     * Returns the item at the specified index.
     *
     * \@memberOf ArrayCollection
     * @param {?} index
     *
     * @return {?}
     */
    getItemAt(index) {
        return this.isEditing ? this.editData[index] : this.source[index];
    }
    /**
     *  Returns the index of the specified item.
     *
     * \@memberOf ArrayCollection
     * @param {?} item
     *
     * @return {?}
     */
    getItemIndex(item) {
        return this.isEditing ? this.editData.indexOf(item) : this.source.indexOf(item);
    }
    /**
     * Invalidates all the data items that the DataProvider contains and dispatches a CollectionEvent.INVALIDATE_ALL event.
     *
     * \@memberOf ArrayCollection
     * @return {?}
     */
    invalidate() {
        this.onDataChange(new CollectionEvent(CollectionEvent.INVALIDATE_ALL));
    }
    /**
       * Invalidates the specified item.
       *
       * @param item
       *
       * @memberOf ArrayCollection
       */
    // invalidateItem(item:any):void {}
    /**
       * Invalidates the item at the specified index.
       *
       * @param index
       *
       * @memberOf ArrayCollection
       */
    // invalidateItemAt(index:number):void {}
    /**
     * Appends the specified data into the data that the data provider contains and removes any duplicate items.
     *
     * \@memberOf ArrayCollection
     * @param {?} newData
     *
     * @return {?}
     */
    merge(newData) {
        for (const obj of newData) {
            /** @type {?} */
            const existing = ~this.getItemIndex(obj);
            if (existing) {
                this.replaceItem(obj, existing);
            }
            else {
                this.addItem(obj);
            }
        }
    }
    /**
     * Removes all items from the data provider and dispatches a CollectionEvent.REMOVE_ALL event.
     *
     * \@memberOf ArrayCollection
     * @return {?}
     */
    removeAll() {
        this.source = [];
        this.editData = [];
        this.filterData = [];
        this.onDataChange(new CollectionEvent(CollectionEvent.REMOVE_ALL, []));
        this.refresh();
    }
    /**
     * Removes the specified item from the data provider and dispatches a CollectionEvent.REMOVE event.
     *
     * \@memberOf ArrayCollection
     * @param {?} item
     *
     * @return {?}
     */
    removeItem(item) {
        /** @type {?} */
        const index = this.getItemIndex(item);
        return this.removeItemAt(index);
    }
    /**
     * Removes the item at the specified index and dispatches a CollectionEvent.REMOVE event.
     *
     * \@memberOf ArrayCollection
     * @param {?} index
     *
     * @return {?}
     */
    removeItemAt(index) {
        /** @type {?} */
        const success = !!this.source.splice(index, 1);
        this.refresh();
        return success;
    }
    /**
     * Replaces an existing item with a new item and dispatches a CollectionEvent.REPLACE event.
     *
     * \@memberOf ArrayCollection
     * @param {?} newItem
     * @param {?} oldItem
     *
     * @return {?}
     */
    replaceItem(newItem, oldItem) {
        /** @type {?} */
        const index = this.getItemIndex(oldItem);
        if (index >= 0) {
            this.replaceItemAt(newItem, index);
        }
    }
    /**
     * Replaces the item at the specified index and dispatches a CollectionEvent.REPLACE event.
     *
     * \@memberOf ArrayCollection
     * @param {?} newItem
     * @param {?} index
     *
     * @return {?}
     */
    replaceItemAt(newItem, index) {
        this.filterData.splice(index, 1, newItem);
    }
    /**
     * Sorts the items that the data provider contains and dispatches a CollectionEvent.SORT event.
     *
     * \@memberOf ArrayCollection
     * @return {?} null
     *
     */
    get sort() {
        return this._sort;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set sort(value) {
        this._sort = value;
        this.refresh();
    }
    /**
     * Sorts the items that the data provider contains by the specified field and dispatches a CollectionEvent.SORT event.
     *
     * \@memberOf ArrayCollection
     * @param {?} fieldName
     * @param {?=} reverse
     * @return {?} null
     *
     */
    sortOn(fieldName, reverse = false) {
        this.filterData = this.filterData.sort(Helpers.sortByField(fieldName, reverse));
        this.onDataChange(new CollectionEvent(CollectionEvent.SORT));
        return this.filterData;
    }
    /**
     * @return {?}
     */
    get filter() {
        return this._filter;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set filter(value) {
        this._filter = value;
        this.refresh();
    }
    /**
     * @param {?} fieldName
     * @param {?=} value
     * @return {?}
     */
    filterOn(fieldName, value = null) {
        this.filterData = this.filterData.filter(Helpers.filterByField(fieldName, value));
        return this.filterData;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDataChange(event) {
        this.dataChange.emit(event);
    }
    /**
     * @return {?}
     */
    refresh() {
        this.filterData = this.isEditing ? this.editData.slice() : this.source.slice();
        for (const item of this._sort.reverse()) {
            this.sortOn(item.field, item.reverse);
        }
        for (const key in this._filter) {
            if (key) {
                this.filterOn(key, this._filter[key]);
            }
        }
        this.onDataChange(new CollectionEvent(CollectionEvent.CHANGE, this.filterData));
    }
    /**
     * Creates an Array any representation of the data that the data provider contains.
     *
     * \@memberOf ArrayCollection
     * @return {?}
     */
    toArray() {
        return this.isEditing ? this.editData : this.source;
    }
    /**
     * @return {?}
     */
    toJSON() {
        return this.isEditing ? this.editData : this.source;
    }
}
if (false) {
    /** @type {?} */
    ArrayCollection.prototype.dataChange;
    /** @type {?} */
    ArrayCollection.prototype.source;
    /** @type {?} */
    ArrayCollection.prototype.editData;
    /** @type {?} */
    ArrayCollection.prototype.isEditing;
    /** @type {?} */
    ArrayCollection.prototype.filterData;
    /** @type {?} */
    ArrayCollection.prototype._filter;
    /** @type {?} */
    ArrayCollection.prototype._sort;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXlDb2xsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEtcHJvdmlkZXIvQXJyYXlDb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFlOUMsTUFBTSxPQUFPLGVBQWU7Ozs7SUFTMUIsWUFBWSxTQUFtQixFQUFFO1FBUmpDLGVBQVUsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDaEYsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUN0QixhQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBVSxHQUFhLEVBQUUsQ0FBQztRQUMxQixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBZSxFQUFFLENBQUM7UUFHckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFVBQVUs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Ozs7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3RELENBQUM7Q0FDRjs7O0lBcFdDLHFDQUFnRjs7SUFDaEYsaUNBQXNCOztJQUN0QixtQ0FBd0I7O0lBQ3hCLG9DQUEyQjs7SUFDM0IscUNBQTBCOztJQUMxQixrQ0FBa0I7O0lBQ2xCLGdDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5nXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFwcFxuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4vQ29sbGVjdGlvbic7XG5pbXBvcnQgeyBDb2xsZWN0aW9uRXZlbnQgfSBmcm9tICcuL0NvbGxlY3Rpb25FdmVudCc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbi8qKlxuICogQmFzZSBDbGFzcyBmb3IgYWxsIENvbGxlY3Rpb24gYmFzZWQgZGF0YSBwcm92aWRlcnNcbiAqXG4gKiBAZXhhbXBsZVxuICogIHZhciBkcDpEYXRhUHJvdmlkZXIgPSBuZXcgRGF0YVByb3ZpZGVyKCk7XG4gKiAgZHAuYWRkSXRlbSh7bGFiZWw6XCJJdGVtIDFcIn0pO1xuICogIGRwLmFkZEl0ZW0oe2xhYmVsOlwiSXRlbSAyXCJ9KTtcbiAqICBkcC5hZGRJdGVtKHtsYWJlbDpcIkl0ZW0gM1wifSk7XG4gKiAgZHAuYWRkSXRlbSh7bGFiZWw6XCJJdGVtIDRcIn0pO1xuXG4gKiAgdmFyIG15TGlzdDpMaXN0ID0gbmV3IExpc3QoKTtcbiAqICBteUxpc3QuZGF0YVByb3ZpZGVyID0gZHA7XG4gKi9cbmV4cG9ydCBjbGFzcyBBcnJheUNvbGxlY3Rpb248VD4gaW1wbGVtZW50cyBDb2xsZWN0aW9uPFQ+IHtcbiAgZGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPENvbGxlY3Rpb25FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPENvbGxlY3Rpb25FdmVudD4oKTtcbiAgc291cmNlOiBBcnJheTxUPiA9IFtdO1xuICBlZGl0RGF0YTogQXJyYXk8VD4gPSBbXTtcbiAgaXNFZGl0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIGZpbHRlckRhdGE6IEFycmF5PFQ+ID0gW107XG4gIF9maWx0ZXI6IGFueSA9IHt9O1xuICBfc29ydDogQXJyYXk8YW55PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTogQXJyYXk8VD4gPSBbXSkge1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIHRoaXMuZWRpdERhdGEgPSB0aGlzLmNvcHkodGhpcy5zb3VyY2UpO1xuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuc291cmNlLnNsaWNlKCk7XG4gIH1cblxuICBnZXQgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbHRlckRhdGEubGVuZ3RoO1xuICB9XG5cbiAgZ2V0IHRvdGFsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyRGF0YS5sZW5ndGg7XG4gIH1cblxuICBnZXQgbGlzdCgpOiBBcnJheTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyRGF0YTtcbiAgfVxuXG4gIGlzRW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoIDw9IDAgJiYgIXRoaXMuaXNMb2FkaW5nKCkgJiYgIXRoaXMuaGFzRXJyb3JzKCk7XG4gIH1cblxuICBoYXNFcnJvcnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNMb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzRmlsdGVyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX2ZpbHRlcikubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gc3dpdGNoIHRoZSBpc0VkaXRpbmdmbGFnIGZvciB0aGUgZGF0YSBzb3VyY2VcbiAgICovXG4gIGVkaXQoKSB7XG4gICAgdGhpcy5pc0VkaXRpbmcgPSB0cnVlO1xuICAgIHRoaXMuZWRpdERhdGEgPSB0aGlzLmNvcHkodGhpcy5zb3VyY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBsZWF2ZSBlZGl0IG1vZGUgYW5kIHJlc2V0IHNvdXJjZVxuICAgKi9cbiAgdW5kbygpIHtcbiAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuc291cmNlID0gdGhpcy5jb3B5KHRoaXMuZWRpdERhdGEpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBsZWF2ZSBlZGl0IG1vZGUgYW5kIHNhdmUgZWRpdERhdGFcbiAgICovXG4gIGNvbW1pdCgpIHtcbiAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuc291cmNlID0gdGhpcy5maWx0ZXJEYXRhLnNsaWNlKCk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhbiBpdGVtIHRvIHRoZSBlbmQgb2YgdGhlIGRhdGEgcHJvdmlkZXIuXG4gICAqXG4gICAqIEBwYXJhbSBpdGVtXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGFkZEl0ZW0oaXRlbTogVCk6IHZvaWQge1xuICAgIHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YS5wdXNoKGl0ZW0pIDogdGhpcy5zb3VyY2UucHVzaChpdGVtKTtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5BREQsIFtpdGVtXSkpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBuZXcgaXRlbSB0byB0aGUgZGF0YSBwcm92aWRlciBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbVxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgYWRkSXRlbUF0KGl0ZW06IFQsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGEuc3BsaWNlKGluZGV4LCAwLCBpdGVtKSA6IHRoaXMuc291cmNlLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG4gICAgdGhpcy5vbkRhdGFDaGFuZ2UobmV3IENvbGxlY3Rpb25FdmVudChDb2xsZWN0aW9uRXZlbnQuQURELCBbaXRlbV0pKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgQXBwZW5kcyBtdWx0aXBsZSBpdGVtcyB0byB0aGUgZW5kIG9mIHRoZSBEYXRhUHJvdmlkZXIgYW5kIGRpc3BhdGNoZXMgYSBDb2xsZWN0aW9uRXZlbnQuQUREIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbXNcbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgYWRkSXRlbXMoaXRlbXM6IEFycmF5PFQ+KTogdm9pZCB7XG4gICAgdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhLnB1c2goLi4uaXRlbXMpIDogdGhpcy5zb3VyY2UucHVzaCguLi5pdGVtcyk7XG4gICAgdGhpcy5vbkRhdGFDaGFuZ2UobmV3IENvbGxlY3Rpb25FdmVudChDb2xsZWN0aW9uRXZlbnQuQURELCBpdGVtcykpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgc2V2ZXJhbCBpdGVtcyB0byB0aGUgZGF0YSBwcm92aWRlciBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LkFERCBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIGl0ZW1zXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBhZGRJdGVtc0F0KGl0ZW1zOiBBcnJheTxUPiwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YS5zcGxpY2UoaW5kZXgsIDAsIC4uLml0ZW1zKSA6IHRoaXMuc291cmNlLnNwbGljZShpbmRleCwgMCwgLi4uaXRlbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBjdXJyZW50IEFycmF5Q29sbGVjdGlvbiBhbnkuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGNsb25lKCk6IEFycmF5Q29sbGVjdGlvbjxUPiB7XG4gICAgcmV0dXJuIG5ldyBBcnJheUNvbGxlY3Rpb24odGhpcy5pc0VkaXRpbmcgPyB0aGlzLmNvcHkodGhpcy5lZGl0RGF0YSkgOiB0aGlzLmNvcHkodGhpcy5zb3VyY2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgY3VycmVudCBBcnJheUNvbGxlY3Rpb24gYW55LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBjb3B5KGFycmF5OiBhbnlbXSk6IGFueVtdIHtcbiAgICByZXR1cm4gSGVscGVycy5kZWVwQ2xvbmUoYXJyYXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmNhdGVuYXRlcyB0aGUgc3BlY2lmaWVkIGl0ZW1zIHRvIHRoZSBlbmQgb2YgdGhlIGN1cnJlbnQgZGF0YSBwcm92aWRlci5cbiAgICpcbiAgICogQHBhcmFtIGl0ZW1zXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGNvbmNhdChpdGVtczogQXJyYXk8VD4pOiB2b2lkIHtcbiAgICB0aGlzLmFkZEl0ZW1zKGl0ZW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBnZXRJdGVtQXQoaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YVtpbmRleF0gOiB0aGlzLnNvdXJjZVtpbmRleF07XG4gIH1cblxuICAvKipcbiAgICogIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBzcGVjaWZpZWQgaXRlbS5cbiAgICpcbiAgICogQHBhcmFtIGl0ZW1cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgZ2V0SXRlbUluZGV4KGl0ZW06IFQpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGEuaW5kZXhPZihpdGVtKSA6IHRoaXMuc291cmNlLmluZGV4T2YoaXRlbSk7XG4gIH1cblxuICAvKipcbiAgICogSW52YWxpZGF0ZXMgYWxsIHRoZSBkYXRhIGl0ZW1zIHRoYXQgdGhlIERhdGFQcm92aWRlciBjb250YWlucyBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5JTlZBTElEQVRFX0FMTCBldmVudC5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgaW52YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5JTlZBTElEQVRFX0FMTCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEludmFsaWRhdGVzIHRoZSBzcGVjaWZpZWQgaXRlbS5cbiAgICpcbiAgICogQHBhcmFtIGl0ZW1cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgLy8gaW52YWxpZGF0ZUl0ZW0oaXRlbTphbnkpOnZvaWQge31cblxuICAvKipcbiAgICogSW52YWxpZGF0ZXMgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICpcbiAgICogQHBhcmFtIGluZGV4XG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIC8vIGludmFsaWRhdGVJdGVtQXQoaW5kZXg6bnVtYmVyKTp2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgdGhlIHNwZWNpZmllZCBkYXRhIGludG8gdGhlIGRhdGEgdGhhdCB0aGUgZGF0YSBwcm92aWRlciBjb250YWlucyBhbmQgcmVtb3ZlcyBhbnkgZHVwbGljYXRlIGl0ZW1zLlxuICAgKlxuICAgKiBAcGFyYW0gbmV3RGF0YVxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBtZXJnZShuZXdEYXRhOiBBcnJheTxUPik6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgb2JqIG9mIG5ld0RhdGEpIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gfnRoaXMuZ2V0SXRlbUluZGV4KG9iaik7XG4gICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgdGhpcy5yZXBsYWNlSXRlbShvYmosIGV4aXN0aW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkSXRlbShvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBpdGVtcyBmcm9tIHRoZSBkYXRhIHByb3ZpZGVyIGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LlJFTU9WRV9BTEwgZXZlbnQuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIHJlbW92ZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnNvdXJjZSA9IFtdO1xuICAgIHRoaXMuZWRpdERhdGEgPSBbXTtcbiAgICB0aGlzLmZpbHRlckRhdGEgPSBbXTtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5SRU1PVkVfQUxMLCBbXSkpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIHNwZWNpZmllZCBpdGVtIGZyb20gdGhlIGRhdGEgcHJvdmlkZXIgYW5kIGRpc3BhdGNoZXMgYSBDb2xsZWN0aW9uRXZlbnQuUkVNT1ZFIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbVxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICByZW1vdmVJdGVtKGl0ZW06IFQpOiBib29sZWFuIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KGl0ZW0pO1xuICAgIHJldHVybiB0aGlzLnJlbW92ZUl0ZW1BdChpbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgaXRlbSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LlJFTU9WRSBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIGluZGV4XG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIHJlbW92ZUl0ZW1BdChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgc3VjY2VzcyA9ICEhdGhpcy5zb3VyY2Uuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbiBleGlzdGluZyBpdGVtIHdpdGggYSBuZXcgaXRlbSBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5SRVBMQUNFIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gbmV3SXRlbVxuICAgKiBAcGFyYW0gb2xkSXRlbVxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICByZXBsYWNlSXRlbShuZXdJdGVtOiBhbnksIG9sZEl0ZW06IGFueSk6IGFueSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChvbGRJdGVtKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5yZXBsYWNlSXRlbUF0KG5ld0l0ZW0sIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleCBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5SRVBMQUNFIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gbmV3SXRlbVxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgcmVwbGFjZUl0ZW1BdChuZXdJdGVtOiBhbnksIGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgIHRoaXMuZmlsdGVyRGF0YS5zcGxpY2UoaW5kZXgsIDEsIG5ld0l0ZW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNvcnRzIHRoZSBpdGVtcyB0aGF0IHRoZSBkYXRhIHByb3ZpZGVyIGNvbnRhaW5zIGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LlNPUlQgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBzb3J0QXJnc1xuICAgKiBAcmV0dXJucyBudWxsXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGdldCBzb3J0KCk6IEFycmF5PGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0O1xuICB9XG5cbiAgc2V0IHNvcnQodmFsdWU6IEFycmF5PGFueT4pIHtcbiAgICB0aGlzLl9zb3J0ID0gdmFsdWU7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogU29ydHMgdGhlIGl0ZW1zIHRoYXQgdGhlIGRhdGEgcHJvdmlkZXIgY29udGFpbnMgYnkgdGhlIHNwZWNpZmllZCBmaWVsZCBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5TT1JUIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZmllbGROYW1lXG4gICAqIEBwYXJhbSBbb3B0aW9ucz1udWxsXVxuICAgKiBAcmV0dXJucyBudWxsXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIHNvcnRPbihmaWVsZE5hbWU6IGFueSwgcmV2ZXJzZSA9IGZhbHNlKTogQXJyYXk8VD4ge1xuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyRGF0YS5zb3J0KEhlbHBlcnMuc29ydEJ5RmllbGQoZmllbGROYW1lLCByZXZlcnNlKSk7XG4gICAgdGhpcy5vbkRhdGFDaGFuZ2UobmV3IENvbGxlY3Rpb25FdmVudChDb2xsZWN0aW9uRXZlbnQuU09SVCkpO1xuICAgIHJldHVybiB0aGlzLmZpbHRlckRhdGE7XG4gIH1cblxuICBnZXQgZmlsdGVyKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcjtcbiAgfVxuXG4gIHNldCBmaWx0ZXIodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2ZpbHRlciA9IHZhbHVlO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgZmlsdGVyT24oZmllbGROYW1lOiBhbnksIHZhbHVlOiBhbnkgPSBudWxsKTogQXJyYXk8VD4ge1xuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyRGF0YS5maWx0ZXIoSGVscGVycy5maWx0ZXJCeUZpZWxkKGZpZWxkTmFtZSwgdmFsdWUpKTtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJEYXRhO1xuICB9XG5cbiAgb25EYXRhQ2hhbmdlKGV2ZW50OiBDb2xsZWN0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cblxuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YS5zbGljZSgpIDogdGhpcy5zb3VyY2Uuc2xpY2UoKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5fc29ydC5yZXZlcnNlKCkpIHtcbiAgICAgIHRoaXMuc29ydE9uKGl0ZW0uZmllbGQsIGl0ZW0ucmV2ZXJzZSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX2ZpbHRlcikge1xuICAgICAgaWYgKGtleSkge1xuICAgICAgICB0aGlzLmZpbHRlck9uKGtleSwgdGhpcy5fZmlsdGVyW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5DSEFOR0UsIHRoaXMuZmlsdGVyRGF0YSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gQXJyYXkgYW55IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBkYXRhIHRoYXQgdGhlIGRhdGEgcHJvdmlkZXIgY29udGFpbnMuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIHRvQXJyYXkoKTogQXJyYXk8VD4ge1xuICAgIHJldHVybiB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGEgOiB0aGlzLnNvdXJjZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhIDogdGhpcy5zb3VyY2U7XG4gIH1cbn1cbiJdfQ==