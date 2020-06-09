import { __read, __spread, __values } from "tslib";
// Ng
import { EventEmitter } from '@angular/core';
import { CollectionEvent } from './CollectionEvent';
import { Helpers } from '../../utils/Helpers';
/**
 * Base Class for all Collection based data providers
 *
 * @example
 *  var dp:DataProvider = new DataProvider();
 *  dp.addItem({label:"Item 1"});
 *  dp.addItem({label:"Item 2"});
 *  dp.addItem({label:"Item 3"});
 *  dp.addItem({label:"Item 4"});

 *  var myList:List = new List();
 *  myList.dataProvider = dp;
 */
var ArrayCollection = /** @class */ (function () {
    function ArrayCollection(source) {
        if (source === void 0) { source = []; }
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
    Object.defineProperty(ArrayCollection.prototype, "length", {
        get: function () {
            return this.filterData.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayCollection.prototype, "total", {
        get: function () {
            return this.filterData.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayCollection.prototype, "list", {
        get: function () {
            return this.filterData;
        },
        enumerable: true,
        configurable: true
    });
    ArrayCollection.prototype.isEmpty = function () {
        return this.length <= 0 && !this.isLoading() && !this.hasErrors();
    };
    ArrayCollection.prototype.hasErrors = function () {
        return false;
    };
    ArrayCollection.prototype.isLoading = function () {
        return false;
    };
    ArrayCollection.prototype.isFiltered = function () {
        return Object.keys(this._filter).length > 0;
    };
    /**
     * Method to switch the isEditingflag for the data source
     */
    ArrayCollection.prototype.edit = function () {
        this.isEditing = true;
        this.editData = this.copy(this.source);
    };
    /**
     * Method to leave edit mode and reset source
     */
    ArrayCollection.prototype.undo = function () {
        this.isEditing = false;
        this.source = this.copy(this.editData);
        this.refresh();
    };
    /**
     * Method to leave edit mode and save editData
     */
    ArrayCollection.prototype.commit = function () {
        this.isEditing = false;
        this.source = this.filterData.slice();
        this.refresh();
    };
    /**
     * Appends an item to the end of the data provider.
     *
     *
     * @memberOf ArrayCollection
     */
    ArrayCollection.prototype.addItem = function (item) {
        this.isEditing ? this.editData.push(item) : this.source.push(item);
        this.onDataChange(new CollectionEvent(CollectionEvent.ADD, [item]));
        this.refresh();
    };
    /**
     * Adds a new item to the data provider at the specified index.
     *
     *
     * @memberOf ArrayCollection
     */
    ArrayCollection.prototype.addItemAt = function (item, index) {
        this.isEditing ? this.editData.splice(index, 0, item) : this.source.splice(index, 0, item);
        this.onDataChange(new CollectionEvent(CollectionEvent.ADD, [item]));
        this.refresh();
    };
    /**
     *  Appends multiple items to the end of the DataProvider and dispatches a CollectionEvent.ADD event.
     *
     * @memberOf ArrayCollection
     */
    ArrayCollection.prototype.addItems = function (items) {
        var _a, _b;
        this.isEditing ? (_a = this.editData).push.apply(_a, __spread(items)) : (_b = this.source).push.apply(_b, __spread(items));
        this.onDataChange(new CollectionEvent(CollectionEvent.ADD, items));
        this.refresh();
    };
    /**
     * Adds several items to the data provider at the specified index and dispatches a CollectionEvent.ADD event.
     *
     * @memberOf ArrayCollection
     */
    ArrayCollection.prototype.addItemsAt = function (items, index) {
        var _a, _b;
        this.isEditing ? (_a = this.editData).splice.apply(_a, __spread([index, 0], items)) : (_b = this.source).splice.apply(_b, __spread([index, 0], items));
    };
    /**
     * Creates a copy of the current ArrayCollection any.
     *
     * @memberOf ArrayCollection
     */
    ArrayCollection.prototype.clone = function () {
        return new ArrayCollection(this.isEditing ? this.copy(this.editData) : this.copy(this.source));
    };
    /**
     * Creates a copy of the current ArrayCollection any.
     *
     * @memberOf ArrayCollection
     */
    ArrayCollection.prototype.copy = function (array) {
        return Helpers.deepClone(array);
    };
    /**
     * Concatenates the specified items to the end of the current data provider.
     *
     * @memberOf ArrayCollection
     */
    ArrayCollection.prototype.concat = function (items) {
        this.addItems(items);
    };
    /**
     * Returns the item at the specified index.
     *
     * @memberOf ArrayCollection
     */
    ArrayCollection.prototype.getItemAt = function (index) {
        return this.isEditing ? this.editData[index] : this.source[index];
    };
    /**
     *  Returns the index of the specified item.
     *
     * @memberOf ArrayCollection
     */
    ArrayCollection.prototype.getItemIndex = function (item) {
        return this.isEditing ? this.editData.indexOf(item) : this.source.indexOf(item);
    };
    /**
     * Invalidates all the data items that the DataProvider contains and dispatches a CollectionEvent.INVALIDATE_ALL event.
     *
     * @memberOf ArrayCollection
     */
    ArrayCollection.prototype.invalidate = function () {
        this.onDataChange(new CollectionEvent(CollectionEvent.INVALIDATE_ALL));
    };
    /**
     * Invalidates the specified item.
     *
     * @memberOf ArrayCollection
     */
    // invalidateItem(item:any):void {}
    /**
     * Invalidates the item at the specified index.
     *
     * @memberOf ArrayCollection
     */
    // invalidateItemAt(index:number):void {}
    /**
     * Appends the specified data into the data that the data provider contains and removes any duplicate items.
     *
     * @memberOf ArrayCollection
     */
    ArrayCollection.prototype.merge = function (newData) {
        var e_1, _a;
        try {
            for (var newData_1 = __values(newData), newData_1_1 = newData_1.next(); !newData_1_1.done; newData_1_1 = newData_1.next()) {
                var obj = newData_1_1.value;
                var existing = ~this.getItemIndex(obj);
                if (existing) {
                    this.replaceItem(obj, existing);
                }
                else {
                    this.addItem(obj);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (newData_1_1 && !newData_1_1.done && (_a = newData_1.return)) _a.call(newData_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Removes all items from the data provider and dispatches a CollectionEvent.REMOVE_ALL event.
     *
     * @memberOf ArrayCollection
     */
    ArrayCollection.prototype.removeAll = function () {
        this.source = [];
        this.editData = [];
        this.filterData = [];
        this.onDataChange(new CollectionEvent(CollectionEvent.REMOVE_ALL, []));
        this.refresh();
    };
    /**
     * Removes the specified item from the data provider and dispatches a CollectionEvent.REMOVE event.
     *
     * @memberOf ArrayCollection
     */
    ArrayCollection.prototype.removeItem = function (item) {
        var index = this.getItemIndex(item);
        return this.removeItemAt(index);
    };
    /**
     * Removes the item at the specified index and dispatches a CollectionEvent.REMOVE event.
     *
     * @memberOf ArrayCollection
     */
    ArrayCollection.prototype.removeItemAt = function (index) {
        var success = !!this.source.splice(index, 1);
        this.refresh();
        return success;
    };
    /**
     * Replaces an existing item with a new item and dispatches a CollectionEvent.REPLACE event.
     *
     * @memberOf ArrayCollection
     */
    ArrayCollection.prototype.replaceItem = function (newItem, oldItem) {
        var index = this.getItemIndex(oldItem);
        if (index >= 0) {
            this.replaceItemAt(newItem, index);
        }
    };
    /**
     * Replaces the item at the specified index and dispatches a CollectionEvent.REPLACE event.
     *
     * @memberOf ArrayCollection
     */
    ArrayCollection.prototype.replaceItemAt = function (newItem, index) {
        this.filterData.splice(index, 1, newItem);
    };
    Object.defineProperty(ArrayCollection.prototype, "sort", {
        /**
         * Sorts the items that the data provider contains and dispatches a CollectionEvent.SORT event.
         *
         * @memberOf ArrayCollection
         */
        get: function () {
            return this._sort;
        },
        set: function (value) {
            this._sort = value;
            this.refresh();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sorts the items that the data provider contains by the specified field and dispatches a CollectionEvent.SORT event.
     *
     * @memberOf ArrayCollection
     */
    ArrayCollection.prototype.sortOn = function (fieldName, reverse) {
        if (reverse === void 0) { reverse = false; }
        this.filterData = this.filterData.sort(Helpers.sortByField(fieldName, reverse));
        this.onDataChange(new CollectionEvent(CollectionEvent.SORT));
        return this.filterData;
    };
    Object.defineProperty(ArrayCollection.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        set: function (value) {
            this._filter = value;
            this.refresh();
        },
        enumerable: true,
        configurable: true
    });
    ArrayCollection.prototype.filterOn = function (fieldName, value) {
        if (value === void 0) { value = null; }
        this.filterData = this.filterData.filter(Helpers.filterByField(fieldName, value));
        return this.filterData;
    };
    ArrayCollection.prototype.onDataChange = function (event) {
        this.dataChange.emit(event);
    };
    ArrayCollection.prototype.refresh = function () {
        var e_2, _a;
        this.filterData = this.isEditing ? this.editData.slice() : this.source.slice();
        try {
            for (var _b = __values(this._sort.reverse()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                this.sortOn(item.field, item.reverse);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        for (var key in this._filter) {
            if (key) {
                this.filterOn(key, this._filter[key]);
            }
        }
        this.onDataChange(new CollectionEvent(CollectionEvent.CHANGE, this.filterData));
    };
    /**
     * Creates an Array any representation of the data that the data provider contains.
     *
     * @memberOf ArrayCollection
     */
    ArrayCollection.prototype.toArray = function () {
        return this.isEditing ? this.editData : this.source;
    };
    ArrayCollection.prototype.toJSON = function () {
        return this.isEditing ? this.editData : this.source;
    };
    return ArrayCollection;
}());
export { ArrayCollection };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXlDb2xsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEtcHJvdmlkZXIvQXJyYXlDb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxLQUFLO0FBQ0wsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTlDOzs7Ozs7Ozs7Ozs7R0FZRztBQUNIO0lBU0UseUJBQVksTUFBcUI7UUFBckIsdUJBQUEsRUFBQSxXQUFxQjtRQVJqQyxlQUFVLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ2hGLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBYSxFQUFFLENBQUM7UUFDMUIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNsQixVQUFLLEdBQWUsRUFBRSxDQUFDO1FBR3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxzQkFBSSxtQ0FBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFLO2FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBRUQsc0JB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QUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBcEMsSUFBTSxJQUFJLFdBQUE7Z0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN2Qzs7Ozs7Ozs7O1FBQ0QsS0FBSyxJQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzlCLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN2QztTQUNGO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsaUNBQU8sR0FBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN0RCxDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN0RCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBaFVELElBZ1VDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTmdcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQXBwXG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi9Db2xsZWN0aW9uJztcbmltcG9ydCB7IENvbGxlY3Rpb25FdmVudCB9IGZyb20gJy4vQ29sbGVjdGlvbkV2ZW50JztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuLyoqXG4gKiBCYXNlIENsYXNzIGZvciBhbGwgQ29sbGVjdGlvbiBiYXNlZCBkYXRhIHByb3ZpZGVyc1xuICpcbiAqIEBleGFtcGxlXG4gKiAgdmFyIGRwOkRhdGFQcm92aWRlciA9IG5ldyBEYXRhUHJvdmlkZXIoKTtcbiAqICBkcC5hZGRJdGVtKHtsYWJlbDpcIkl0ZW0gMVwifSk7XG4gKiAgZHAuYWRkSXRlbSh7bGFiZWw6XCJJdGVtIDJcIn0pO1xuICogIGRwLmFkZEl0ZW0oe2xhYmVsOlwiSXRlbSAzXCJ9KTtcbiAqICBkcC5hZGRJdGVtKHtsYWJlbDpcIkl0ZW0gNFwifSk7XG5cbiAqICB2YXIgbXlMaXN0Okxpc3QgPSBuZXcgTGlzdCgpO1xuICogIG15TGlzdC5kYXRhUHJvdmlkZXIgPSBkcDtcbiAqL1xuZXhwb3J0IGNsYXNzIEFycmF5Q29sbGVjdGlvbjxUPiBpbXBsZW1lbnRzIENvbGxlY3Rpb248VD4ge1xuICBkYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q29sbGVjdGlvbkV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sbGVjdGlvbkV2ZW50PigpO1xuICBzb3VyY2U6IEFycmF5PFQ+ID0gW107XG4gIGVkaXREYXRhOiBBcnJheTxUPiA9IFtdO1xuICBpc0VkaXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZmlsdGVyRGF0YTogQXJyYXk8VD4gPSBbXTtcbiAgX2ZpbHRlcjogYW55ID0ge307XG4gIF9zb3J0OiBBcnJheTxhbnk+ID0gW107XG5cbiAgY29uc3RydWN0b3Ioc291cmNlOiBBcnJheTxUPiA9IFtdKSB7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgdGhpcy5lZGl0RGF0YSA9IHRoaXMuY29weSh0aGlzLnNvdXJjZSk7XG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5zb3VyY2Uuc2xpY2UoKTtcbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyRGF0YS5sZW5ndGg7XG4gIH1cblxuICBnZXQgdG90YWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJEYXRhLmxlbmd0aDtcbiAgfVxuXG4gIGdldCBsaXN0KCk6IEFycmF5PFQ+IHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJEYXRhO1xuICB9XG5cbiAgaXNFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggPD0gMCAmJiAhdGhpcy5pc0xvYWRpbmcoKSAmJiAhdGhpcy5oYXNFcnJvcnMoKTtcbiAgfVxuXG4gIGhhc0Vycm9ycygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0xvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNGaWx0ZXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fZmlsdGVyKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBzd2l0Y2ggdGhlIGlzRWRpdGluZ2ZsYWcgZm9yIHRoZSBkYXRhIHNvdXJjZVxuICAgKi9cbiAgZWRpdCgpIHtcbiAgICB0aGlzLmlzRWRpdGluZyA9IHRydWU7XG4gICAgdGhpcy5lZGl0RGF0YSA9IHRoaXMuY29weSh0aGlzLnNvdXJjZSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGxlYXZlIGVkaXQgbW9kZSBhbmQgcmVzZXQgc291cmNlXG4gICAqL1xuICB1bmRvKCkge1xuICAgIHRoaXMuaXNFZGl0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5zb3VyY2UgPSB0aGlzLmNvcHkodGhpcy5lZGl0RGF0YSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGxlYXZlIGVkaXQgbW9kZSBhbmQgc2F2ZSBlZGl0RGF0YVxuICAgKi9cbiAgY29tbWl0KCkge1xuICAgIHRoaXMuaXNFZGl0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5zb3VyY2UgPSB0aGlzLmZpbHRlckRhdGEuc2xpY2UoKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGFuIGl0ZW0gdG8gdGhlIGVuZCBvZiB0aGUgZGF0YSBwcm92aWRlci5cbiAgICpcbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgYWRkSXRlbShpdGVtOiBUKTogdm9pZCB7XG4gICAgdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhLnB1c2goaXRlbSkgOiB0aGlzLnNvdXJjZS5wdXNoKGl0ZW0pO1xuICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LkFERCwgW2l0ZW1dKSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5ldyBpdGVtIHRvIHRoZSBkYXRhIHByb3ZpZGVyIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGFkZEl0ZW1BdChpdGVtOiBULCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhLnNwbGljZShpbmRleCwgMCwgaXRlbSkgOiB0aGlzLnNvdXJjZS5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xuICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LkFERCwgW2l0ZW1dKSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogIEFwcGVuZHMgbXVsdGlwbGUgaXRlbXMgdG8gdGhlIGVuZCBvZiB0aGUgRGF0YVByb3ZpZGVyIGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LkFERCBldmVudC5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgYWRkSXRlbXMoaXRlbXM6IEFycmF5PFQ+KTogdm9pZCB7XG4gICAgdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhLnB1c2goLi4uaXRlbXMpIDogdGhpcy5zb3VyY2UucHVzaCguLi5pdGVtcyk7XG4gICAgdGhpcy5vbkRhdGFDaGFuZ2UobmV3IENvbGxlY3Rpb25FdmVudChDb2xsZWN0aW9uRXZlbnQuQURELCBpdGVtcykpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgc2V2ZXJhbCBpdGVtcyB0byB0aGUgZGF0YSBwcm92aWRlciBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LkFERCBldmVudC5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgYWRkSXRlbXNBdChpdGVtczogQXJyYXk8VD4sIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGEuc3BsaWNlKGluZGV4LCAwLCAuLi5pdGVtcykgOiB0aGlzLnNvdXJjZS5zcGxpY2UoaW5kZXgsIDAsIC4uLml0ZW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgY3VycmVudCBBcnJheUNvbGxlY3Rpb24gYW55LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBjbG9uZSgpOiBBcnJheUNvbGxlY3Rpb248VD4ge1xuICAgIHJldHVybiBuZXcgQXJyYXlDb2xsZWN0aW9uKHRoaXMuaXNFZGl0aW5nID8gdGhpcy5jb3B5KHRoaXMuZWRpdERhdGEpIDogdGhpcy5jb3B5KHRoaXMuc291cmNlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIGN1cnJlbnQgQXJyYXlDb2xsZWN0aW9uIGFueS5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgY29weShhcnJheTogYW55W10pIHtcbiAgICByZXR1cm4gSGVscGVycy5kZWVwQ2xvbmUoYXJyYXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmNhdGVuYXRlcyB0aGUgc3BlY2lmaWVkIGl0ZW1zIHRvIHRoZSBlbmQgb2YgdGhlIGN1cnJlbnQgZGF0YSBwcm92aWRlci5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgY29uY2F0KGl0ZW1zOiBBcnJheTxUPik6IHZvaWQge1xuICAgIHRoaXMuYWRkSXRlbXMoaXRlbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgZ2V0SXRlbUF0KGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGFbaW5kZXhdIDogdGhpcy5zb3VyY2VbaW5kZXhdO1xuICB9XG5cbiAgLyoqXG4gICAqICBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgc3BlY2lmaWVkIGl0ZW0uXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGdldEl0ZW1JbmRleChpdGVtOiBUKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhLmluZGV4T2YoaXRlbSkgOiB0aGlzLnNvdXJjZS5pbmRleE9mKGl0ZW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEludmFsaWRhdGVzIGFsbCB0aGUgZGF0YSBpdGVtcyB0aGF0IHRoZSBEYXRhUHJvdmlkZXIgY29udGFpbnMgYW5kIGRpc3BhdGNoZXMgYSBDb2xsZWN0aW9uRXZlbnQuSU5WQUxJREFURV9BTEwgZXZlbnQuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGludmFsaWRhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5vbkRhdGFDaGFuZ2UobmV3IENvbGxlY3Rpb25FdmVudChDb2xsZWN0aW9uRXZlbnQuSU5WQUxJREFURV9BTEwpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZhbGlkYXRlcyB0aGUgc3BlY2lmaWVkIGl0ZW0uXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIC8vIGludmFsaWRhdGVJdGVtKGl0ZW06YW55KTp2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEludmFsaWRhdGVzIHRoZSBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIC8vIGludmFsaWRhdGVJdGVtQXQoaW5kZXg6bnVtYmVyKTp2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgdGhlIHNwZWNpZmllZCBkYXRhIGludG8gdGhlIGRhdGEgdGhhdCB0aGUgZGF0YSBwcm92aWRlciBjb250YWlucyBhbmQgcmVtb3ZlcyBhbnkgZHVwbGljYXRlIGl0ZW1zLlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBtZXJnZShuZXdEYXRhOiBBcnJheTxUPik6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgb2JqIG9mIG5ld0RhdGEpIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gfnRoaXMuZ2V0SXRlbUluZGV4KG9iaik7XG4gICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgdGhpcy5yZXBsYWNlSXRlbShvYmosIGV4aXN0aW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkSXRlbShvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBpdGVtcyBmcm9tIHRoZSBkYXRhIHByb3ZpZGVyIGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LlJFTU9WRV9BTEwgZXZlbnQuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIHJlbW92ZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnNvdXJjZSA9IFtdO1xuICAgIHRoaXMuZWRpdERhdGEgPSBbXTtcbiAgICB0aGlzLmZpbHRlckRhdGEgPSBbXTtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5SRU1PVkVfQUxMLCBbXSkpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIHNwZWNpZmllZCBpdGVtIGZyb20gdGhlIGRhdGEgcHJvdmlkZXIgYW5kIGRpc3BhdGNoZXMgYSBDb2xsZWN0aW9uRXZlbnQuUkVNT1ZFIGV2ZW50LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICByZW1vdmVJdGVtKGl0ZW06IFQpOiBib29sZWFuIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KGl0ZW0pO1xuICAgIHJldHVybiB0aGlzLnJlbW92ZUl0ZW1BdChpbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgaXRlbSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LlJFTU9WRSBldmVudC5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgcmVtb3ZlSXRlbUF0KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBzdWNjZXNzID0gISF0aGlzLnNvdXJjZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFuIGV4aXN0aW5nIGl0ZW0gd2l0aCBhIG5ldyBpdGVtIGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LlJFUExBQ0UgZXZlbnQuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIHJlcGxhY2VJdGVtKG5ld0l0ZW06IGFueSwgb2xkSXRlbTogYW55KTogYW55IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KG9sZEl0ZW0pO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLnJlcGxhY2VJdGVtQXQobmV3SXRlbSwgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgaXRlbSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LlJFUExBQ0UgZXZlbnQuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIHJlcGxhY2VJdGVtQXQobmV3SXRlbTogYW55LCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICB0aGlzLmZpbHRlckRhdGEuc3BsaWNlKGluZGV4LCAxLCBuZXdJdGVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTb3J0cyB0aGUgaXRlbXMgdGhhdCB0aGUgZGF0YSBwcm92aWRlciBjb250YWlucyBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5TT1JUIGV2ZW50LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBnZXQgc29ydCgpOiBBcnJheTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fc29ydDtcbiAgfVxuXG4gIHNldCBzb3J0KHZhbHVlOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy5fc29ydCA9IHZhbHVlO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNvcnRzIHRoZSBpdGVtcyB0aGF0IHRoZSBkYXRhIHByb3ZpZGVyIGNvbnRhaW5zIGJ5IHRoZSBzcGVjaWZpZWQgZmllbGQgYW5kIGRpc3BhdGNoZXMgYSBDb2xsZWN0aW9uRXZlbnQuU09SVCBldmVudC5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgc29ydE9uKGZpZWxkTmFtZTogYW55LCByZXZlcnNlID0gZmFsc2UpOiBBcnJheTxUPiB7XG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJEYXRhLnNvcnQoSGVscGVycy5zb3J0QnlGaWVsZChmaWVsZE5hbWUsIHJldmVyc2UpKTtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5TT1JUKSk7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyRGF0YTtcbiAgfVxuXG4gIGdldCBmaWx0ZXIoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyO1xuICB9XG5cbiAgc2V0IGZpbHRlcih2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fZmlsdGVyID0gdmFsdWU7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBmaWx0ZXJPbihmaWVsZE5hbWU6IGFueSwgdmFsdWU6IGFueSA9IG51bGwpOiBBcnJheTxUPiB7XG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJEYXRhLmZpbHRlcihIZWxwZXJzLmZpbHRlckJ5RmllbGQoZmllbGROYW1lLCB2YWx1ZSkpO1xuICAgIHJldHVybiB0aGlzLmZpbHRlckRhdGE7XG4gIH1cblxuICBvbkRhdGFDaGFuZ2UoZXZlbnQ6IENvbGxlY3Rpb25FdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhLnNsaWNlKCkgOiB0aGlzLnNvdXJjZS5zbGljZSgpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9zb3J0LnJldmVyc2UoKSkge1xuICAgICAgdGhpcy5zb3J0T24oaXRlbS5maWVsZCwgaXRlbS5yZXZlcnNlKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fZmlsdGVyKSB7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHRoaXMuZmlsdGVyT24oa2V5LCB0aGlzLl9maWx0ZXJba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LkNIQU5HRSwgdGhpcy5maWx0ZXJEYXRhKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBBcnJheSBhbnkgcmVwcmVzZW50YXRpb24gb2YgdGhlIGRhdGEgdGhhdCB0aGUgZGF0YSBwcm92aWRlciBjb250YWlucy5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgdG9BcnJheSgpOiBBcnJheTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YSA6IHRoaXMuc291cmNlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGEgOiB0aGlzLnNvdXJjZTtcbiAgfVxufVxuIl19