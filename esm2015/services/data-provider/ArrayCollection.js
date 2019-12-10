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
        for (let obj of newData) {
            /** @type {?} */
            let existing = ~this.getItemIndex(obj);
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
        let index = this.getItemIndex(item);
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
        let success = !!this.source.splice(index, 1);
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
        let index = this.getItemIndex(oldItem);
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
        for (let item of this._sort.reverse()) {
            this.sortOn(item.field, item.reverse);
        }
        for (let key in this._filter) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXlDb2xsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEtcHJvdmlkZXIvQXJyYXlDb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFlOUMsTUFBTSxPQUFPLGVBQWU7Ozs7SUFTMUIsWUFBWSxTQUFtQixFQUFFO1FBUmpDLGVBQVUsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDaEYsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUN0QixhQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBVSxHQUFhLEVBQUUsQ0FBQztRQUMxQixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBZSxFQUFFLENBQUM7UUFHckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFVBQVUs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Ozs7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3RELENBQUM7Q0FDRjs7O0lBcFdDLHFDQUFnRjs7SUFDaEYsaUNBQXNCOztJQUN0QixtQ0FBd0I7O0lBQ3hCLG9DQUEyQjs7SUFDM0IscUNBQTBCOztJQUMxQixrQ0FBa0I7O0lBQ2xCLGdDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5nXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFwcFxuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4vQ29sbGVjdGlvbic7XG5pbXBvcnQgeyBDb2xsZWN0aW9uRXZlbnQgfSBmcm9tICcuL0NvbGxlY3Rpb25FdmVudCc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbi8qKlxuICogQmFzZSBDbGFzcyBmb3IgYWxsIENvbGxlY3Rpb24gYmFzZWQgZGF0YSBwcm92aWRlcnNcbiAqXG4gKiBAZXhhbXBsZVxuICogIHZhciBkcDpEYXRhUHJvdmlkZXIgPSBuZXcgRGF0YVByb3ZpZGVyKCk7XG4gKiAgZHAuYWRkSXRlbSh7bGFiZWw6XCJJdGVtIDFcIn0pO1xuICogIGRwLmFkZEl0ZW0oe2xhYmVsOlwiSXRlbSAyXCJ9KTtcbiAqICBkcC5hZGRJdGVtKHtsYWJlbDpcIkl0ZW0gM1wifSk7XG4gKiAgZHAuYWRkSXRlbSh7bGFiZWw6XCJJdGVtIDRcIn0pO1xuXG4gKiAgdmFyIG15TGlzdDpMaXN0ID0gbmV3IExpc3QoKTtcbiAqICBteUxpc3QuZGF0YVByb3ZpZGVyID0gZHA7XG4gKi9cbmV4cG9ydCBjbGFzcyBBcnJheUNvbGxlY3Rpb248VD4gaW1wbGVtZW50cyBDb2xsZWN0aW9uPFQ+IHtcbiAgZGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPENvbGxlY3Rpb25FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPENvbGxlY3Rpb25FdmVudD4oKTtcbiAgc291cmNlOiBBcnJheTxUPiA9IFtdO1xuICBlZGl0RGF0YTogQXJyYXk8VD4gPSBbXTtcbiAgaXNFZGl0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIGZpbHRlckRhdGE6IEFycmF5PFQ+ID0gW107XG4gIF9maWx0ZXI6IGFueSA9IHt9O1xuICBfc29ydDogQXJyYXk8YW55PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTogQXJyYXk8VD4gPSBbXSkge1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIHRoaXMuZWRpdERhdGEgPSB0aGlzLmNvcHkodGhpcy5zb3VyY2UpO1xuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuc291cmNlLnNsaWNlKCk7XG4gIH1cblxuICBnZXQgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbHRlckRhdGEubGVuZ3RoO1xuICB9XG5cbiAgZ2V0IHRvdGFsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyRGF0YS5sZW5ndGg7XG4gIH1cblxuICBnZXQgbGlzdCgpOiBBcnJheTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyRGF0YTtcbiAgfVxuXG4gIGlzRW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoIDw9IDAgJiYgIXRoaXMuaXNMb2FkaW5nKCkgJiYgIXRoaXMuaGFzRXJyb3JzKCk7XG4gIH1cblxuICBoYXNFcnJvcnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNMb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzRmlsdGVyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX2ZpbHRlcikubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gc3dpdGNoIHRoZSBpc0VkaXRpbmdmbGFnIGZvciB0aGUgZGF0YSBzb3VyY2VcbiAgICovXG4gIGVkaXQoKSB7XG4gICAgdGhpcy5pc0VkaXRpbmcgPSB0cnVlO1xuICAgIHRoaXMuZWRpdERhdGEgPSB0aGlzLmNvcHkodGhpcy5zb3VyY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBsZWF2ZSBlZGl0IG1vZGUgYW5kIHJlc2V0IHNvdXJjZVxuICAgKi9cbiAgdW5kbygpIHtcbiAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuc291cmNlID0gdGhpcy5jb3B5KHRoaXMuZWRpdERhdGEpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBsZWF2ZSBlZGl0IG1vZGUgYW5kIHNhdmUgZWRpdERhdGFcbiAgICovXG4gIGNvbW1pdCgpIHtcbiAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuc291cmNlID0gdGhpcy5maWx0ZXJEYXRhLnNsaWNlKCk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhbiBpdGVtIHRvIHRoZSBlbmQgb2YgdGhlIGRhdGEgcHJvdmlkZXIuXG4gICAqXG4gICAqIEBwYXJhbSBpdGVtXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGFkZEl0ZW0oaXRlbTogVCk6IHZvaWQge1xuICAgIHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YS5wdXNoKGl0ZW0pIDogdGhpcy5zb3VyY2UucHVzaChpdGVtKTtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5BREQsIFtpdGVtXSkpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBuZXcgaXRlbSB0byB0aGUgZGF0YSBwcm92aWRlciBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbVxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgYWRkSXRlbUF0KGl0ZW06IFQsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGEuc3BsaWNlKGluZGV4LCAwLCBpdGVtKSA6IHRoaXMuc291cmNlLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG4gICAgdGhpcy5vbkRhdGFDaGFuZ2UobmV3IENvbGxlY3Rpb25FdmVudChDb2xsZWN0aW9uRXZlbnQuQURELCBbaXRlbV0pKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgQXBwZW5kcyBtdWx0aXBsZSBpdGVtcyB0byB0aGUgZW5kIG9mIHRoZSBEYXRhUHJvdmlkZXIgYW5kIGRpc3BhdGNoZXMgYSBDb2xsZWN0aW9uRXZlbnQuQUREIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbXNcbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgYWRkSXRlbXMoaXRlbXM6IEFycmF5PFQ+KTogdm9pZCB7XG4gICAgdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhLnB1c2goLi4uaXRlbXMpIDogdGhpcy5zb3VyY2UucHVzaCguLi5pdGVtcyk7XG4gICAgdGhpcy5vbkRhdGFDaGFuZ2UobmV3IENvbGxlY3Rpb25FdmVudChDb2xsZWN0aW9uRXZlbnQuQURELCBpdGVtcykpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgc2V2ZXJhbCBpdGVtcyB0byB0aGUgZGF0YSBwcm92aWRlciBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LkFERCBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIGl0ZW1zXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBhZGRJdGVtc0F0KGl0ZW1zOiBBcnJheTxUPiwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YS5zcGxpY2UoaW5kZXgsIDAsIC4uLml0ZW1zKSA6IHRoaXMuc291cmNlLnNwbGljZShpbmRleCwgMCwgLi4uaXRlbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBjdXJyZW50IEFycmF5Q29sbGVjdGlvbiBhbnkuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGNsb25lKCk6IEFycmF5Q29sbGVjdGlvbjxUPiB7XG4gICAgcmV0dXJuIG5ldyBBcnJheUNvbGxlY3Rpb24odGhpcy5pc0VkaXRpbmcgPyB0aGlzLmNvcHkodGhpcy5lZGl0RGF0YSkgOiB0aGlzLmNvcHkodGhpcy5zb3VyY2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgY3VycmVudCBBcnJheUNvbGxlY3Rpb24gYW55LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBjb3B5KGFycmF5OiBhbnlbXSk6IGFueVtdIHtcbiAgICByZXR1cm4gSGVscGVycy5kZWVwQ2xvbmUoYXJyYXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmNhdGVuYXRlcyB0aGUgc3BlY2lmaWVkIGl0ZW1zIHRvIHRoZSBlbmQgb2YgdGhlIGN1cnJlbnQgZGF0YSBwcm92aWRlci5cbiAgICpcbiAgICogQHBhcmFtIGl0ZW1zXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGNvbmNhdChpdGVtczogQXJyYXk8VD4pOiB2b2lkIHtcbiAgICB0aGlzLmFkZEl0ZW1zKGl0ZW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBnZXRJdGVtQXQoaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YVtpbmRleF0gOiB0aGlzLnNvdXJjZVtpbmRleF07XG4gIH1cblxuICAvKipcbiAgICogIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBzcGVjaWZpZWQgaXRlbS5cbiAgICpcbiAgICogQHBhcmFtIGl0ZW1cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgZ2V0SXRlbUluZGV4KGl0ZW06IFQpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGEuaW5kZXhPZihpdGVtKSA6IHRoaXMuc291cmNlLmluZGV4T2YoaXRlbSk7XG4gIH1cblxuICAvKipcbiAgICogSW52YWxpZGF0ZXMgYWxsIHRoZSBkYXRhIGl0ZW1zIHRoYXQgdGhlIERhdGFQcm92aWRlciBjb250YWlucyBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5JTlZBTElEQVRFX0FMTCBldmVudC5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgaW52YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5JTlZBTElEQVRFX0FMTCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEludmFsaWRhdGVzIHRoZSBzcGVjaWZpZWQgaXRlbS5cbiAgICpcbiAgICogQHBhcmFtIGl0ZW1cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgLy8gaW52YWxpZGF0ZUl0ZW0oaXRlbTphbnkpOnZvaWQge31cblxuICAvKipcbiAgICogSW52YWxpZGF0ZXMgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICpcbiAgICogQHBhcmFtIGluZGV4XG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIC8vIGludmFsaWRhdGVJdGVtQXQoaW5kZXg6bnVtYmVyKTp2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgdGhlIHNwZWNpZmllZCBkYXRhIGludG8gdGhlIGRhdGEgdGhhdCB0aGUgZGF0YSBwcm92aWRlciBjb250YWlucyBhbmQgcmVtb3ZlcyBhbnkgZHVwbGljYXRlIGl0ZW1zLlxuICAgKlxuICAgKiBAcGFyYW0gbmV3RGF0YVxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBtZXJnZShuZXdEYXRhOiBBcnJheTxUPik6IHZvaWQge1xuICAgIGZvciAobGV0IG9iaiBvZiBuZXdEYXRhKSB7XG4gICAgICBsZXQgZXhpc3RpbmcgPSB+dGhpcy5nZXRJdGVtSW5kZXgob2JqKTtcbiAgICAgIGlmIChleGlzdGluZykge1xuICAgICAgICB0aGlzLnJlcGxhY2VJdGVtKG9iaiwgZXhpc3RpbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRJdGVtKG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIGl0ZW1zIGZyb20gdGhlIGRhdGEgcHJvdmlkZXIgYW5kIGRpc3BhdGNoZXMgYSBDb2xsZWN0aW9uRXZlbnQuUkVNT1ZFX0FMTCBldmVudC5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgcmVtb3ZlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMuc291cmNlID0gW107XG4gICAgdGhpcy5lZGl0RGF0YSA9IFtdO1xuICAgIHRoaXMuZmlsdGVyRGF0YSA9IFtdO1xuICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LlJFTU9WRV9BTEwsIFtdKSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgc3BlY2lmaWVkIGl0ZW0gZnJvbSB0aGUgZGF0YSBwcm92aWRlciBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5SRU1PVkUgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBpdGVtXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIHJlbW92ZUl0ZW0oaXRlbTogVCk6IGJvb2xlYW4ge1xuICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KGl0ZW0pO1xuICAgIHJldHVybiB0aGlzLnJlbW92ZUl0ZW1BdChpbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgaXRlbSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LlJFTU9WRSBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIGluZGV4XG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIHJlbW92ZUl0ZW1BdChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgbGV0IHN1Y2Nlc3MgPSAhIXRoaXMuc291cmNlLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZXMgYW4gZXhpc3RpbmcgaXRlbSB3aXRoIGEgbmV3IGl0ZW0gYW5kIGRpc3BhdGNoZXMgYSBDb2xsZWN0aW9uRXZlbnQuUkVQTEFDRSBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIG5ld0l0ZW1cbiAgICogQHBhcmFtIG9sZEl0ZW1cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgcmVwbGFjZUl0ZW0obmV3SXRlbTogYW55LCBvbGRJdGVtOiBhbnkpOiBhbnkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KG9sZEl0ZW0pO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLnJlcGxhY2VJdGVtQXQobmV3SXRlbSwgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgaXRlbSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LlJFUExBQ0UgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBuZXdJdGVtXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICByZXBsYWNlSXRlbUF0KG5ld0l0ZW06IGFueSwgaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgdGhpcy5maWx0ZXJEYXRhLnNwbGljZShpbmRleCwgMSwgbmV3SXRlbSk7XG4gIH1cblxuICAvKipcbiAgICogU29ydHMgdGhlIGl0ZW1zIHRoYXQgdGhlIGRhdGEgcHJvdmlkZXIgY29udGFpbnMgYW5kIGRpc3BhdGNoZXMgYSBDb2xsZWN0aW9uRXZlbnQuU09SVCBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIHNvcnRBcmdzXG4gICAqIEByZXR1cm5zIG51bGxcbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgZ2V0IHNvcnQoKTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnQ7XG4gIH1cblxuICBzZXQgc29ydCh2YWx1ZTogQXJyYXk8YW55Pikge1xuICAgIHRoaXMuX3NvcnQgPSB2YWx1ZTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTb3J0cyB0aGUgaXRlbXMgdGhhdCB0aGUgZGF0YSBwcm92aWRlciBjb250YWlucyBieSB0aGUgc3BlY2lmaWVkIGZpZWxkIGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LlNPUlQgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBmaWVsZE5hbWVcbiAgICogQHBhcmFtIFtvcHRpb25zPW51bGxdXG4gICAqIEByZXR1cm5zIG51bGxcbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgc29ydE9uKGZpZWxkTmFtZTogYW55LCByZXZlcnNlID0gZmFsc2UpOiBBcnJheTxUPiB7XG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJEYXRhLnNvcnQoSGVscGVycy5zb3J0QnlGaWVsZChmaWVsZE5hbWUsIHJldmVyc2UpKTtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5TT1JUKSk7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyRGF0YTtcbiAgfVxuXG4gIGdldCBmaWx0ZXIoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyO1xuICB9XG5cbiAgc2V0IGZpbHRlcih2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fZmlsdGVyID0gdmFsdWU7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBmaWx0ZXJPbihmaWVsZE5hbWU6IGFueSwgdmFsdWU6IGFueSA9IG51bGwpOiBBcnJheTxUPiB7XG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJEYXRhLmZpbHRlcihIZWxwZXJzLmZpbHRlckJ5RmllbGQoZmllbGROYW1lLCB2YWx1ZSkpO1xuICAgIHJldHVybiB0aGlzLmZpbHRlckRhdGE7XG4gIH1cblxuICBvbkRhdGFDaGFuZ2UoZXZlbnQ6IENvbGxlY3Rpb25FdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhLnNsaWNlKCkgOiB0aGlzLnNvdXJjZS5zbGljZSgpO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5fc29ydC5yZXZlcnNlKCkpIHtcbiAgICAgIHRoaXMuc29ydE9uKGl0ZW0uZmllbGQsIGl0ZW0ucmV2ZXJzZSk7XG4gICAgfVxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9maWx0ZXIpIHtcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJPbihrZXksIHRoaXMuX2ZpbHRlcltrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5vbkRhdGFDaGFuZ2UobmV3IENvbGxlY3Rpb25FdmVudChDb2xsZWN0aW9uRXZlbnQuQ0hBTkdFLCB0aGlzLmZpbHRlckRhdGEpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIEFycmF5IGFueSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZGF0YSB0aGF0IHRoZSBkYXRhIHByb3ZpZGVyIGNvbnRhaW5zLlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICB0b0FycmF5KCk6IEFycmF5PFQ+IHtcbiAgICByZXR1cm4gdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhIDogdGhpcy5zb3VyY2U7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YSA6IHRoaXMuc291cmNlO1xuICB9XG59XG4iXX0=