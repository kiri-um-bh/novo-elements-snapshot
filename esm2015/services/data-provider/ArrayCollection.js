/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXlDb2xsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEtcHJvdmlkZXIvQXJyYXlDb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQWU5QyxNQUFNLE9BQU8sZUFBZTs7OztJQVMxQixZQUFZLFNBQW1CLEVBQUU7UUFSakMsZUFBVSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUNoRixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFVLEdBQWEsRUFBRSxDQUFDO1FBQzFCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFlLEVBQUUsQ0FBQztRQUdyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsVUFBVSxD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OztJQUVELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdEQsQ0FBQztDQUNGOzs7SUFwV0MscUNBQWdGOztJQUNoRixpQ0FBc0I7O0lBQ3RCLG1DQUF3Qjs7SUFDeEIsb0NBQTJCOztJQUMzQixxQ0FBMEI7O0lBQzFCLGtDQUFrQjs7SUFDbEIsZ0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTmdcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQXBwXG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi9Db2xsZWN0aW9uJztcbmltcG9ydCB7IENvbGxlY3Rpb25FdmVudCB9IGZyb20gJy4vQ29sbGVjdGlvbkV2ZW50JztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuLyoqXG4gKiBCYXNlIENsYXNzIGZvciBhbGwgQ29sbGVjdGlvbiBiYXNlZCBkYXRhIHByb3ZpZGVyc1xuICpcbiAqIEBleGFtcGxlXG4gKiAgdmFyIGRwOkRhdGFQcm92aWRlciA9IG5ldyBEYXRhUHJvdmlkZXIoKTtcbiAqICBkcC5hZGRJdGVtKHtsYWJlbDpcIkl0ZW0gMVwifSk7XG4gKiAgZHAuYWRkSXRlbSh7bGFiZWw6XCJJdGVtIDJcIn0pO1xuICogIGRwLmFkZEl0ZW0oe2xhYmVsOlwiSXRlbSAzXCJ9KTtcbiAqICBkcC5hZGRJdGVtKHtsYWJlbDpcIkl0ZW0gNFwifSk7XG5cbiAqICB2YXIgbXlMaXN0Okxpc3QgPSBuZXcgTGlzdCgpO1xuICogIG15TGlzdC5kYXRhUHJvdmlkZXIgPSBkcDtcbiAqL1xuZXhwb3J0IGNsYXNzIEFycmF5Q29sbGVjdGlvbjxUPiBpbXBsZW1lbnRzIENvbGxlY3Rpb248VD4ge1xuICBkYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q29sbGVjdGlvbkV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sbGVjdGlvbkV2ZW50PigpO1xuICBzb3VyY2U6IEFycmF5PFQ+ID0gW107XG4gIGVkaXREYXRhOiBBcnJheTxUPiA9IFtdO1xuICBpc0VkaXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZmlsdGVyRGF0YTogQXJyYXk8VD4gPSBbXTtcbiAgX2ZpbHRlcjogYW55ID0ge307XG4gIF9zb3J0OiBBcnJheTxhbnk+ID0gW107XG5cbiAgY29uc3RydWN0b3Ioc291cmNlOiBBcnJheTxUPiA9IFtdKSB7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgdGhpcy5lZGl0RGF0YSA9IHRoaXMuY29weSh0aGlzLnNvdXJjZSk7XG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5zb3VyY2Uuc2xpY2UoKTtcbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyRGF0YS5sZW5ndGg7XG4gIH1cblxuICBnZXQgdG90YWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJEYXRhLmxlbmd0aDtcbiAgfVxuXG4gIGdldCBsaXN0KCk6IEFycmF5PFQ+IHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJEYXRhO1xuICB9XG5cbiAgaXNFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggPD0gMCAmJiAhdGhpcy5pc0xvYWRpbmcoKSAmJiAhdGhpcy5oYXNFcnJvcnMoKTtcbiAgfVxuXG4gIGhhc0Vycm9ycygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0xvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNGaWx0ZXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fZmlsdGVyKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBzd2l0Y2ggdGhlIGlzRWRpdGluZ2ZsYWcgZm9yIHRoZSBkYXRhIHNvdXJjZVxuICAgKi9cbiAgZWRpdCgpIHtcbiAgICB0aGlzLmlzRWRpdGluZyA9IHRydWU7XG4gICAgdGhpcy5lZGl0RGF0YSA9IHRoaXMuY29weSh0aGlzLnNvdXJjZSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGxlYXZlIGVkaXQgbW9kZSBhbmQgcmVzZXQgc291cmNlXG4gICAqL1xuICB1bmRvKCkge1xuICAgIHRoaXMuaXNFZGl0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5zb3VyY2UgPSB0aGlzLmNvcHkodGhpcy5lZGl0RGF0YSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGxlYXZlIGVkaXQgbW9kZSBhbmQgc2F2ZSBlZGl0RGF0YVxuICAgKi9cbiAgY29tbWl0KCkge1xuICAgIHRoaXMuaXNFZGl0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5zb3VyY2UgPSB0aGlzLmZpbHRlckRhdGEuc2xpY2UoKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGFuIGl0ZW0gdG8gdGhlIGVuZCBvZiB0aGUgZGF0YSBwcm92aWRlci5cbiAgICpcbiAgICogQHBhcmFtIGl0ZW1cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgYWRkSXRlbShpdGVtOiBUKTogdm9pZCB7XG4gICAgdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhLnB1c2goaXRlbSkgOiB0aGlzLnNvdXJjZS5wdXNoKGl0ZW0pO1xuICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LkFERCwgW2l0ZW1dKSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5ldyBpdGVtIHRvIHRoZSBkYXRhIHByb3ZpZGVyIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqXG4gICAqIEBwYXJhbSBpdGVtXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBhZGRJdGVtQXQoaXRlbTogVCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YS5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pIDogdGhpcy5zb3VyY2Uuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5BREQsIFtpdGVtXSkpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqICBBcHBlbmRzIG11bHRpcGxlIGl0ZW1zIHRvIHRoZSBlbmQgb2YgdGhlIERhdGFQcm92aWRlciBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5BREQgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBpdGVtc1xuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBhZGRJdGVtcyhpdGVtczogQXJyYXk8VD4pOiB2b2lkIHtcbiAgICB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGEucHVzaCguLi5pdGVtcykgOiB0aGlzLnNvdXJjZS5wdXNoKC4uLml0ZW1zKTtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5BREQsIGl0ZW1zKSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBzZXZlcmFsIGl0ZW1zIHRvIHRoZSBkYXRhIHByb3ZpZGVyIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXggYW5kIGRpc3BhdGNoZXMgYSBDb2xsZWN0aW9uRXZlbnQuQUREIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbXNcbiAgICogQHBhcmFtIGluZGV4XG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGFkZEl0ZW1zQXQoaXRlbXM6IEFycmF5PFQ+LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhLnNwbGljZShpbmRleCwgMCwgLi4uaXRlbXMpIDogdGhpcy5zb3VyY2Uuc3BsaWNlKGluZGV4LCAwLCAuLi5pdGVtcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIGN1cnJlbnQgQXJyYXlDb2xsZWN0aW9uIGFueS5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgY2xvbmUoKTogQXJyYXlDb2xsZWN0aW9uPFQ+IHtcbiAgICByZXR1cm4gbmV3IEFycmF5Q29sbGVjdGlvbih0aGlzLmlzRWRpdGluZyA/IHRoaXMuY29weSh0aGlzLmVkaXREYXRhKSA6IHRoaXMuY29weSh0aGlzLnNvdXJjZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBjdXJyZW50IEFycmF5Q29sbGVjdGlvbiBhbnkuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGNvcHkoYXJyYXk6IGFueVtdKTogYW55W10ge1xuICAgIHJldHVybiBIZWxwZXJzLmRlZXBDbG9uZShhcnJheSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uY2F0ZW5hdGVzIHRoZSBzcGVjaWZpZWQgaXRlbXMgdG8gdGhlIGVuZCBvZiB0aGUgY3VycmVudCBkYXRhIHByb3ZpZGVyLlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbXNcbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgY29uY2F0KGl0ZW1zOiBBcnJheTxUPik6IHZvaWQge1xuICAgIHRoaXMuYWRkSXRlbXMoaXRlbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICpcbiAgICogQHBhcmFtIGluZGV4XG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGdldEl0ZW1BdChpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhW2luZGV4XSA6IHRoaXMuc291cmNlW2luZGV4XTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIHNwZWNpZmllZCBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbVxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBnZXRJdGVtSW5kZXgoaXRlbTogVCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YS5pbmRleE9mKGl0ZW0pIDogdGhpcy5zb3VyY2UuaW5kZXhPZihpdGVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZhbGlkYXRlcyBhbGwgdGhlIGRhdGEgaXRlbXMgdGhhdCB0aGUgRGF0YVByb3ZpZGVyIGNvbnRhaW5zIGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LklOVkFMSURBVEVfQUxMIGV2ZW50LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBpbnZhbGlkYXRlKCk6IHZvaWQge1xuICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LklOVkFMSURBVEVfQUxMKSk7XG4gIH1cblxuICAvKipcbiAgICogSW52YWxpZGF0ZXMgdGhlIHNwZWNpZmllZCBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbVxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICAvLyBpbnZhbGlkYXRlSXRlbShpdGVtOmFueSk6dm9pZCB7fVxuXG4gIC8qKlxuICAgKiBJbnZhbGlkYXRlcyB0aGUgaXRlbSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKlxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgLy8gaW52YWxpZGF0ZUl0ZW1BdChpbmRleDpudW1iZXIpOnZvaWQge31cblxuICAvKipcbiAgICogQXBwZW5kcyB0aGUgc3BlY2lmaWVkIGRhdGEgaW50byB0aGUgZGF0YSB0aGF0IHRoZSBkYXRhIHByb3ZpZGVyIGNvbnRhaW5zIGFuZCByZW1vdmVzIGFueSBkdXBsaWNhdGUgaXRlbXMuXG4gICAqXG4gICAqIEBwYXJhbSBuZXdEYXRhXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIG1lcmdlKG5ld0RhdGE6IEFycmF5PFQ+KTogdm9pZCB7XG4gICAgZm9yIChsZXQgb2JqIG9mIG5ld0RhdGEpIHtcbiAgICAgIGxldCBleGlzdGluZyA9IH50aGlzLmdldEl0ZW1JbmRleChvYmopO1xuICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgIHRoaXMucmVwbGFjZUl0ZW0ob2JqLCBleGlzdGluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZEl0ZW0ob2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgaXRlbXMgZnJvbSB0aGUgZGF0YSBwcm92aWRlciBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5SRU1PVkVfQUxMIGV2ZW50LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICByZW1vdmVBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zb3VyY2UgPSBbXTtcbiAgICB0aGlzLmVkaXREYXRhID0gW107XG4gICAgdGhpcy5maWx0ZXJEYXRhID0gW107XG4gICAgdGhpcy5vbkRhdGFDaGFuZ2UobmV3IENvbGxlY3Rpb25FdmVudChDb2xsZWN0aW9uRXZlbnQuUkVNT1ZFX0FMTCwgW10pKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBzcGVjaWZpZWQgaXRlbSBmcm9tIHRoZSBkYXRhIHByb3ZpZGVyIGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LlJFTU9WRSBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIGl0ZW1cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgcmVtb3ZlSXRlbShpdGVtOiBUKTogYm9vbGVhbiB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXgoaXRlbSk7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlSXRlbUF0KGluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXggYW5kIGRpc3BhdGNoZXMgYSBDb2xsZWN0aW9uRXZlbnQuUkVNT1ZFIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgcmVtb3ZlSXRlbUF0KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBsZXQgc3VjY2VzcyA9ICEhdGhpcy5zb3VyY2Uuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbiBleGlzdGluZyBpdGVtIHdpdGggYSBuZXcgaXRlbSBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5SRVBMQUNFIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gbmV3SXRlbVxuICAgKiBAcGFyYW0gb2xkSXRlbVxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICByZXBsYWNlSXRlbShuZXdJdGVtOiBhbnksIG9sZEl0ZW06IGFueSk6IGFueSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXgob2xkSXRlbSk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMucmVwbGFjZUl0ZW1BdChuZXdJdGVtLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXggYW5kIGRpc3BhdGNoZXMgYSBDb2xsZWN0aW9uRXZlbnQuUkVQTEFDRSBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIG5ld0l0ZW1cbiAgICogQHBhcmFtIGluZGV4XG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIHJlcGxhY2VJdGVtQXQobmV3SXRlbTogYW55LCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICB0aGlzLmZpbHRlckRhdGEuc3BsaWNlKGluZGV4LCAxLCBuZXdJdGVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTb3J0cyB0aGUgaXRlbXMgdGhhdCB0aGUgZGF0YSBwcm92aWRlciBjb250YWlucyBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5TT1JUIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gc29ydEFyZ3NcbiAgICogQHJldHVybnMgbnVsbFxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBnZXQgc29ydCgpOiBBcnJheTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fc29ydDtcbiAgfVxuXG4gIHNldCBzb3J0KHZhbHVlOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy5fc29ydCA9IHZhbHVlO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNvcnRzIHRoZSBpdGVtcyB0aGF0IHRoZSBkYXRhIHByb3ZpZGVyIGNvbnRhaW5zIGJ5IHRoZSBzcGVjaWZpZWQgZmllbGQgYW5kIGRpc3BhdGNoZXMgYSBDb2xsZWN0aW9uRXZlbnQuU09SVCBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIGZpZWxkTmFtZVxuICAgKiBAcGFyYW0gW29wdGlvbnM9bnVsbF1cbiAgICogQHJldHVybnMgbnVsbFxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBzb3J0T24oZmllbGROYW1lOiBhbnksIHJldmVyc2UgPSBmYWxzZSk6IEFycmF5PFQ+IHtcbiAgICB0aGlzLmZpbHRlckRhdGEgPSB0aGlzLmZpbHRlckRhdGEuc29ydChIZWxwZXJzLnNvcnRCeUZpZWxkKGZpZWxkTmFtZSwgcmV2ZXJzZSkpO1xuICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LlNPUlQpKTtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJEYXRhO1xuICB9XG5cbiAgZ2V0IGZpbHRlcigpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXI7XG4gIH1cblxuICBzZXQgZmlsdGVyKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9maWx0ZXIgPSB2YWx1ZTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIGZpbHRlck9uKGZpZWxkTmFtZTogYW55LCB2YWx1ZTogYW55ID0gbnVsbCk6IEFycmF5PFQ+IHtcbiAgICB0aGlzLmZpbHRlckRhdGEgPSB0aGlzLmZpbHRlckRhdGEuZmlsdGVyKEhlbHBlcnMuZmlsdGVyQnlGaWVsZChmaWVsZE5hbWUsIHZhbHVlKSk7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyRGF0YTtcbiAgfVxuXG4gIG9uRGF0YUNoYW5nZShldmVudDogQ29sbGVjdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlckRhdGEgPSB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGEuc2xpY2UoKSA6IHRoaXMuc291cmNlLnNsaWNlKCk7XG4gICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLl9zb3J0LnJldmVyc2UoKSkge1xuICAgICAgdGhpcy5zb3J0T24oaXRlbS5maWVsZCwgaXRlbS5yZXZlcnNlKTtcbiAgICB9XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuX2ZpbHRlcikge1xuICAgICAgaWYgKGtleSkge1xuICAgICAgICB0aGlzLmZpbHRlck9uKGtleSwgdGhpcy5fZmlsdGVyW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5DSEFOR0UsIHRoaXMuZmlsdGVyRGF0YSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gQXJyYXkgYW55IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBkYXRhIHRoYXQgdGhlIGRhdGEgcHJvdmlkZXIgY29udGFpbnMuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIHRvQXJyYXkoKTogQXJyYXk8VD4ge1xuICAgIHJldHVybiB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGEgOiB0aGlzLnNvdXJjZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhIDogdGhpcy5zb3VyY2U7XG4gIH1cbn1cbiJdfQ==