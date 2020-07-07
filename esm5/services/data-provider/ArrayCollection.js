/**
 * @fileoverview added by tsickle
 * Generated from: services/data-provider/ArrayCollection.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
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
ArrayCollection = /** @class */ (function () {
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
        get: /**
         * @return {?}
         */
        function () {
            return this.filterData.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayCollection.prototype, "total", {
        get: /**
         * @return {?}
         */
        function () {
            return this.filterData.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayCollection.prototype, "list", {
        get: /**
         * @return {?}
         */
        function () {
            return this.filterData;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ArrayCollection.prototype.isEmpty = /**
     * @return {?}
     */
    function () {
        return this.length <= 0 && !this.isLoading() && !this.hasErrors();
    };
    /**
     * @return {?}
     */
    ArrayCollection.prototype.hasErrors = /**
     * @return {?}
     */
    function () {
        return false;
    };
    /**
     * @return {?}
     */
    ArrayCollection.prototype.isLoading = /**
     * @return {?}
     */
    function () {
        return false;
    };
    /**
     * @return {?}
     */
    ArrayCollection.prototype.isFiltered = /**
     * @return {?}
     */
    function () {
        return Object.keys(this._filter).length > 0;
    };
    /**
     * Method to switch the isEditingflag for the data source
     */
    /**
     * Method to switch the isEditingflag for the data source
     * @return {?}
     */
    ArrayCollection.prototype.edit = /**
     * Method to switch the isEditingflag for the data source
     * @return {?}
     */
    function () {
        this.isEditing = true;
        this.editData = this.copy(this.source);
    };
    /**
     * Method to leave edit mode and reset source
     */
    /**
     * Method to leave edit mode and reset source
     * @return {?}
     */
    ArrayCollection.prototype.undo = /**
     * Method to leave edit mode and reset source
     * @return {?}
     */
    function () {
        this.isEditing = false;
        this.source = this.copy(this.editData);
        this.refresh();
    };
    /**
     * Method to leave edit mode and save editData
     */
    /**
     * Method to leave edit mode and save editData
     * @return {?}
     */
    ArrayCollection.prototype.commit = /**
     * Method to leave edit mode and save editData
     * @return {?}
     */
    function () {
        this.isEditing = false;
        this.source = this.filterData.slice();
        this.refresh();
    };
    /**
     * Appends an item to the end of the data provider.
     *
     * @param item
     *
     * @memberOf ArrayCollection
     */
    /**
     * Appends an item to the end of the data provider.
     *
     * \@memberOf ArrayCollection
     * @param {?} item
     *
     * @return {?}
     */
    ArrayCollection.prototype.addItem = /**
     * Appends an item to the end of the data provider.
     *
     * \@memberOf ArrayCollection
     * @param {?} item
     *
     * @return {?}
     */
    function (item) {
        this.isEditing ? this.editData.push(item) : this.source.push(item);
        this.onDataChange(new CollectionEvent(CollectionEvent.ADD, [item]));
        this.refresh();
    };
    /**
     * Adds a new item to the data provider at the specified index.
     *
     * @param item
     * @param index
     *
     * @memberOf ArrayCollection
     */
    /**
     * Adds a new item to the data provider at the specified index.
     *
     * \@memberOf ArrayCollection
     * @param {?} item
     * @param {?} index
     *
     * @return {?}
     */
    ArrayCollection.prototype.addItemAt = /**
     * Adds a new item to the data provider at the specified index.
     *
     * \@memberOf ArrayCollection
     * @param {?} item
     * @param {?} index
     *
     * @return {?}
     */
    function (item, index) {
        this.isEditing ? this.editData.splice(index, 0, item) : this.source.splice(index, 0, item);
        this.onDataChange(new CollectionEvent(CollectionEvent.ADD, [item]));
        this.refresh();
    };
    /**
     *  Appends multiple items to the end of the DataProvider and dispatches a CollectionEvent.ADD event.
     *
     * @param items
     *
     * @memberOf ArrayCollection
     */
    /**
     *  Appends multiple items to the end of the DataProvider and dispatches a CollectionEvent.ADD event.
     *
     * \@memberOf ArrayCollection
     * @param {?} items
     *
     * @return {?}
     */
    ArrayCollection.prototype.addItems = /**
     *  Appends multiple items to the end of the DataProvider and dispatches a CollectionEvent.ADD event.
     *
     * \@memberOf ArrayCollection
     * @param {?} items
     *
     * @return {?}
     */
    function (items) {
        var _a, _b;
        this.isEditing ? (_a = this.editData).push.apply(_a, tslib_1.__spread(items)) : (_b = this.source).push.apply(_b, tslib_1.__spread(items));
        this.onDataChange(new CollectionEvent(CollectionEvent.ADD, items));
        this.refresh();
    };
    /**
     * Adds several items to the data provider at the specified index and dispatches a CollectionEvent.ADD event.
     *
     * @param items
     * @param index
     *
     * @memberOf ArrayCollection
     */
    /**
     * Adds several items to the data provider at the specified index and dispatches a CollectionEvent.ADD event.
     *
     * \@memberOf ArrayCollection
     * @param {?} items
     * @param {?} index
     *
     * @return {?}
     */
    ArrayCollection.prototype.addItemsAt = /**
     * Adds several items to the data provider at the specified index and dispatches a CollectionEvent.ADD event.
     *
     * \@memberOf ArrayCollection
     * @param {?} items
     * @param {?} index
     *
     * @return {?}
     */
    function (items, index) {
        var _a, _b;
        this.isEditing ? (_a = this.editData).splice.apply(_a, tslib_1.__spread([index, 0], items)) : (_b = this.source).splice.apply(_b, tslib_1.__spread([index, 0], items));
    };
    /**
     * Creates a copy of the current ArrayCollection any.
     *
     * @memberOf ArrayCollection
     */
    /**
     * Creates a copy of the current ArrayCollection any.
     *
     * \@memberOf ArrayCollection
     * @return {?}
     */
    ArrayCollection.prototype.clone = /**
     * Creates a copy of the current ArrayCollection any.
     *
     * \@memberOf ArrayCollection
     * @return {?}
     */
    function () {
        return new ArrayCollection(this.isEditing ? this.copy(this.editData) : this.copy(this.source));
    };
    /**
     * Creates a copy of the current ArrayCollection any.
     *
     * @memberOf ArrayCollection
     */
    /**
     * Creates a copy of the current ArrayCollection any.
     *
     * \@memberOf ArrayCollection
     * @param {?} array
     * @return {?}
     */
    ArrayCollection.prototype.copy = /**
     * Creates a copy of the current ArrayCollection any.
     *
     * \@memberOf ArrayCollection
     * @param {?} array
     * @return {?}
     */
    function (array) {
        return Helpers.deepClone(array);
    };
    /**
     * Concatenates the specified items to the end of the current data provider.
     *
     * @param items
     *
     * @memberOf ArrayCollection
     */
    /**
     * Concatenates the specified items to the end of the current data provider.
     *
     * \@memberOf ArrayCollection
     * @param {?} items
     *
     * @return {?}
     */
    ArrayCollection.prototype.concat = /**
     * Concatenates the specified items to the end of the current data provider.
     *
     * \@memberOf ArrayCollection
     * @param {?} items
     *
     * @return {?}
     */
    function (items) {
        this.addItems(items);
    };
    /**
     * Returns the item at the specified index.
     *
     * @param index
     *
     * @memberOf ArrayCollection
     */
    /**
     * Returns the item at the specified index.
     *
     * \@memberOf ArrayCollection
     * @param {?} index
     *
     * @return {?}
     */
    ArrayCollection.prototype.getItemAt = /**
     * Returns the item at the specified index.
     *
     * \@memberOf ArrayCollection
     * @param {?} index
     *
     * @return {?}
     */
    function (index) {
        return this.isEditing ? this.editData[index] : this.source[index];
    };
    /**
     *  Returns the index of the specified item.
     *
     * @param item
     *
     * @memberOf ArrayCollection
     */
    /**
     *  Returns the index of the specified item.
     *
     * \@memberOf ArrayCollection
     * @param {?} item
     *
     * @return {?}
     */
    ArrayCollection.prototype.getItemIndex = /**
     *  Returns the index of the specified item.
     *
     * \@memberOf ArrayCollection
     * @param {?} item
     *
     * @return {?}
     */
    function (item) {
        return this.isEditing ? this.editData.indexOf(item) : this.source.indexOf(item);
    };
    /**
     * Invalidates all the data items that the DataProvider contains and dispatches a CollectionEvent.INVALIDATE_ALL event.
     *
     * @memberOf ArrayCollection
     */
    /**
     * Invalidates all the data items that the DataProvider contains and dispatches a CollectionEvent.INVALIDATE_ALL event.
     *
     * \@memberOf ArrayCollection
     * @return {?}
     */
    ArrayCollection.prototype.invalidate = /**
     * Invalidates all the data items that the DataProvider contains and dispatches a CollectionEvent.INVALIDATE_ALL event.
     *
     * \@memberOf ArrayCollection
     * @return {?}
     */
    function () {
        this.onDataChange(new CollectionEvent(CollectionEvent.INVALIDATE_ALL));
    };
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
     * @param newData
     *
     * @memberOf ArrayCollection
     */
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
    ArrayCollection.prototype.merge = /**
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
    function (newData) {
        var e_1, _a;
        try {
            for (var newData_1 = tslib_1.__values(newData), newData_1_1 = newData_1.next(); !newData_1_1.done; newData_1_1 = newData_1.next()) {
                var obj = newData_1_1.value;
                /** @type {?} */
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
    /**
     * Removes all items from the data provider and dispatches a CollectionEvent.REMOVE_ALL event.
     *
     * \@memberOf ArrayCollection
     * @return {?}
     */
    ArrayCollection.prototype.removeAll = /**
     * Removes all items from the data provider and dispatches a CollectionEvent.REMOVE_ALL event.
     *
     * \@memberOf ArrayCollection
     * @return {?}
     */
    function () {
        this.source = [];
        this.editData = [];
        this.filterData = [];
        this.onDataChange(new CollectionEvent(CollectionEvent.REMOVE_ALL, []));
        this.refresh();
    };
    /**
     * Removes the specified item from the data provider and dispatches a CollectionEvent.REMOVE event.
     *
     * @param item
     *
     * @memberOf ArrayCollection
     */
    /**
     * Removes the specified item from the data provider and dispatches a CollectionEvent.REMOVE event.
     *
     * \@memberOf ArrayCollection
     * @param {?} item
     *
     * @return {?}
     */
    ArrayCollection.prototype.removeItem = /**
     * Removes the specified item from the data provider and dispatches a CollectionEvent.REMOVE event.
     *
     * \@memberOf ArrayCollection
     * @param {?} item
     *
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var index = this.getItemIndex(item);
        return this.removeItemAt(index);
    };
    /**
     * Removes the item at the specified index and dispatches a CollectionEvent.REMOVE event.
     *
     * @param index
     *
     * @memberOf ArrayCollection
     */
    /**
     * Removes the item at the specified index and dispatches a CollectionEvent.REMOVE event.
     *
     * \@memberOf ArrayCollection
     * @param {?} index
     *
     * @return {?}
     */
    ArrayCollection.prototype.removeItemAt = /**
     * Removes the item at the specified index and dispatches a CollectionEvent.REMOVE event.
     *
     * \@memberOf ArrayCollection
     * @param {?} index
     *
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var success = !!this.source.splice(index, 1);
        this.refresh();
        return success;
    };
    /**
     * Replaces an existing item with a new item and dispatches a CollectionEvent.REPLACE event.
     *
     * @param newItem
     * @param oldItem
     *
     * @memberOf ArrayCollection
     */
    /**
     * Replaces an existing item with a new item and dispatches a CollectionEvent.REPLACE event.
     *
     * \@memberOf ArrayCollection
     * @param {?} newItem
     * @param {?} oldItem
     *
     * @return {?}
     */
    ArrayCollection.prototype.replaceItem = /**
     * Replaces an existing item with a new item and dispatches a CollectionEvent.REPLACE event.
     *
     * \@memberOf ArrayCollection
     * @param {?} newItem
     * @param {?} oldItem
     *
     * @return {?}
     */
    function (newItem, oldItem) {
        /** @type {?} */
        var index = this.getItemIndex(oldItem);
        if (index >= 0) {
            this.replaceItemAt(newItem, index);
        }
    };
    /**
     * Replaces the item at the specified index and dispatches a CollectionEvent.REPLACE event.
     *
     * @param newItem
     * @param index
     *
     * @memberOf ArrayCollection
     */
    /**
     * Replaces the item at the specified index and dispatches a CollectionEvent.REPLACE event.
     *
     * \@memberOf ArrayCollection
     * @param {?} newItem
     * @param {?} index
     *
     * @return {?}
     */
    ArrayCollection.prototype.replaceItemAt = /**
     * Replaces the item at the specified index and dispatches a CollectionEvent.REPLACE event.
     *
     * \@memberOf ArrayCollection
     * @param {?} newItem
     * @param {?} index
     *
     * @return {?}
     */
    function (newItem, index) {
        this.filterData.splice(index, 1, newItem);
    };
    Object.defineProperty(ArrayCollection.prototype, "sort", {
        /**
         * Sorts the items that the data provider contains and dispatches a CollectionEvent.SORT event.
         *
         * @param sortArgs
         * @returns null
         *
         * @memberOf ArrayCollection
         */
        get: /**
         * Sorts the items that the data provider contains and dispatches a CollectionEvent.SORT event.
         *
         * \@memberOf ArrayCollection
         * @return {?} null
         *
         */
        function () {
            return this._sort;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._sort = value;
            this.refresh();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sorts the items that the data provider contains by the specified field and dispatches a CollectionEvent.SORT event.
     *
     * @param fieldName
     * @param [options=null]
     * @returns null
     *
     * @memberOf ArrayCollection
     */
    /**
     * Sorts the items that the data provider contains by the specified field and dispatches a CollectionEvent.SORT event.
     *
     * \@memberOf ArrayCollection
     * @param {?} fieldName
     * @param {?=} reverse
     * @return {?} null
     *
     */
    ArrayCollection.prototype.sortOn = /**
     * Sorts the items that the data provider contains by the specified field and dispatches a CollectionEvent.SORT event.
     *
     * \@memberOf ArrayCollection
     * @param {?} fieldName
     * @param {?=} reverse
     * @return {?} null
     *
     */
    function (fieldName, reverse) {
        if (reverse === void 0) { reverse = false; }
        this.filterData = this.filterData.sort(Helpers.sortByField(fieldName, reverse));
        this.onDataChange(new CollectionEvent(CollectionEvent.SORT));
        return this.filterData;
    };
    Object.defineProperty(ArrayCollection.prototype, "filter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._filter;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._filter = value;
            this.refresh();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} fieldName
     * @param {?=} value
     * @return {?}
     */
    ArrayCollection.prototype.filterOn = /**
     * @param {?} fieldName
     * @param {?=} value
     * @return {?}
     */
    function (fieldName, value) {
        if (value === void 0) { value = null; }
        this.filterData = this.filterData.filter(Helpers.filterByField(fieldName, value));
        return this.filterData;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ArrayCollection.prototype.onDataChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.dataChange.emit(event);
    };
    /**
     * @return {?}
     */
    ArrayCollection.prototype.refresh = /**
     * @return {?}
     */
    function () {
        var e_2, _a;
        this.filterData = this.isEditing ? this.editData.slice() : this.source.slice();
        try {
            for (var _b = tslib_1.__values(this._sort.reverse()), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    /**
     * Creates an Array any representation of the data that the data provider contains.
     *
     * \@memberOf ArrayCollection
     * @return {?}
     */
    ArrayCollection.prototype.toArray = /**
     * Creates an Array any representation of the data that the data provider contains.
     *
     * \@memberOf ArrayCollection
     * @return {?}
     */
    function () {
        return this.isEditing ? this.editData : this.source;
    };
    /**
     * @return {?}
     */
    ArrayCollection.prototype.toJSON = /**
     * @return {?}
     */
    function () {
        return this.isEditing ? this.editData : this.source;
    };
    return ArrayCollection;
}());
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
export { ArrayCollection };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXlDb2xsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEtcHJvdmlkZXIvQXJyYXlDb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBZTlDOzs7Ozs7Ozs7Ozs7OztJQVNFLHlCQUFZLE1BQXFCO1FBQXJCLHVCQUFBLEVBQUEsV0FBcUI7UUFSakMsZUFBVSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUNoRixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFVLEdBQWEsRUFBRSxDQUFDO1FBQzFCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFlLEVBQUUsQ0FBQztRQUdyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsc0JBQUksbUNBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrQ0FBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFJOzs7O1FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7Ozs7SUFFRCxpQ0FBTzs7O0lBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFFRCxtQ0FBUzs7O0lBQVQ7UUFDRSxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCxtQ0FBUzs7O0lBQVQ7UUFDRSxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCxvQ0FBVTs7O0lBQVY7UUFDRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDhCQUFJOzs7O0lBQUo7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCw4QkFBSTs7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILGdDQUFNOzs7O0lBQU47UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNILGlDQUFPOzs7Ozs7OztJQUFQLFVBQVEsSUFBTztRQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksZUFBZSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7Ozs7OztPQU9HOzs7Ozs7Ozs7O0lBQ0gsbUNBQVM7Ozs7Ozs7OztJQUFULFVBQVUsSUFBTyxFQUFFLEtBQWE7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksZUFBZSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNILGtDQUFROzs7Ozs7OztJQUFSLFVBQVMsS0FBZTs7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxLQUFBLElBQUksQ0FBQyxRQUFRLENBQUEsQ0FBQyxJQUFJLDRCQUFJLEtBQUssR0FBRSxDQUFDLENBQUMsQ0FBQSxLQUFBLElBQUksQ0FBQyxNQUFNLENBQUEsQ0FBQyxJQUFJLDRCQUFJLEtBQUssRUFBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxlQUFlLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRzs7Ozs7Ozs7OztJQUNILG9DQUFVOzs7Ozs7Ozs7SUFBVixVQUFXLEtBQWUsRUFBRSxLQUFhOztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBLEtBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQSxDQUFDLE1BQU0sNkJBQUMsS0FBSyxFQUFFLENBQUMsR0FBSyxLQUFLLEdBQUUsQ0FBQyxDQUFDLENBQUEsS0FBQSxJQUFJLENBQUMsTUFBTSxDQUFBLENBQUMsTUFBTSw2QkFBQyxLQUFLLEVBQUUsQ0FBQyxHQUFLLEtBQUssRUFBQyxDQUFDO0lBQ3JHLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsK0JBQUs7Ozs7OztJQUFMO1FBQ0UsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7Ozs7SUFDSCw4QkFBSTs7Ozs7OztJQUFKLFVBQUssS0FBWTtRQUNmLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7Ozs7SUFDSCxnQ0FBTTs7Ozs7Ozs7SUFBTixVQUFPLEtBQWU7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7Ozs7SUFDSCxtQ0FBUzs7Ozs7Ozs7SUFBVCxVQUFVLEtBQWE7UUFDckIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNILHNDQUFZOzs7Ozs7OztJQUFaLFVBQWEsSUFBTztRQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILG9DQUFVOzs7Ozs7SUFBVjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxlQUFlLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILG1DQUFtQztJQUVuQzs7Ozs7O09BTUc7SUFDSCx5Q0FBeUM7SUFFekM7Ozs7OztPQU1HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ0gsK0JBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFMLFVBQU0sT0FBaUI7OztZQUNyQixLQUFrQixJQUFBLFlBQUEsaUJBQUEsT0FBTyxDQUFBLGdDQUFBLHFEQUFFO2dCQUF0QixJQUFNLEdBQUcsb0JBQUE7O29CQUNOLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO2dCQUN4QyxJQUFJLFFBQVEsRUFBRTtvQkFDWixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDakM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDbkI7YUFDRjs7Ozs7Ozs7O0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCxtQ0FBUzs7Ozs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksZUFBZSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7O0lBQ0gsb0NBQVU7Ozs7Ozs7O0lBQVYsVUFBVyxJQUFPOztZQUNWLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztRQUNyQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7O0lBQ0gsc0NBQVk7Ozs7Ozs7O0lBQVosVUFBYSxLQUFhOztZQUNsQixPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7Ozs7Ozs7Ozs7SUFDSCxxQ0FBVzs7Ozs7Ozs7O0lBQVgsVUFBWSxPQUFZLEVBQUUsT0FBWTs7WUFDOUIsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO1FBQ3hDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7O09BT0c7Ozs7Ozs7Ozs7SUFDSCx1Q0FBYTs7Ozs7Ozs7O0lBQWIsVUFBYyxPQUFZLEVBQUUsS0FBYTtRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFVRCxzQkFBSSxpQ0FBSTtRQVJSOzs7Ozs7O1dBT0c7Ozs7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7Ozs7UUFFRCxVQUFTLEtBQWlCO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixDQUFDOzs7T0FMQTtJQU9EOzs7Ozs7OztPQVFHOzs7Ozs7Ozs7O0lBQ0gsZ0NBQU07Ozs7Ozs7OztJQUFOLFVBQU8sU0FBYyxFQUFFLE9BQWU7UUFBZix3QkFBQSxFQUFBLGVBQWU7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxzQkFBSSxtQ0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7Ozs7O1FBRUQsVUFBVyxLQUFVO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixDQUFDOzs7T0FMQTs7Ozs7O0lBT0Qsa0NBQVE7Ozs7O0lBQVIsVUFBUyxTQUFjLEVBQUUsS0FBaUI7UUFBakIsc0JBQUEsRUFBQSxZQUFpQjtRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEYsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsc0NBQVk7Ozs7SUFBWixVQUFhLEtBQXNCO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxpQ0FBTzs7O0lBQVA7O1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDOztZQUMvRSxLQUFtQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBcEMsSUFBTSxJQUFJLFdBQUE7Z0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN2Qzs7Ozs7Ozs7O1FBQ0QsS0FBSyxJQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzlCLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN2QztTQUNGO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsaUNBQU87Ozs7OztJQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCxnQ0FBTTs7O0lBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdEQsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXJXRCxJQXFXQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFwV0MscUNBQWdGOztJQUNoRixpQ0FBc0I7O0lBQ3RCLG1DQUF3Qjs7SUFDeEIsb0NBQTJCOztJQUMzQixxQ0FBMEI7O0lBQzFCLGtDQUFrQjs7SUFDbEIsZ0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTmdcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQXBwXG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi9Db2xsZWN0aW9uJztcbmltcG9ydCB7IENvbGxlY3Rpb25FdmVudCB9IGZyb20gJy4vQ29sbGVjdGlvbkV2ZW50JztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuLyoqXG4gKiBCYXNlIENsYXNzIGZvciBhbGwgQ29sbGVjdGlvbiBiYXNlZCBkYXRhIHByb3ZpZGVyc1xuICpcbiAqIEBleGFtcGxlXG4gKiAgdmFyIGRwOkRhdGFQcm92aWRlciA9IG5ldyBEYXRhUHJvdmlkZXIoKTtcbiAqICBkcC5hZGRJdGVtKHtsYWJlbDpcIkl0ZW0gMVwifSk7XG4gKiAgZHAuYWRkSXRlbSh7bGFiZWw6XCJJdGVtIDJcIn0pO1xuICogIGRwLmFkZEl0ZW0oe2xhYmVsOlwiSXRlbSAzXCJ9KTtcbiAqICBkcC5hZGRJdGVtKHtsYWJlbDpcIkl0ZW0gNFwifSk7XG5cbiAqICB2YXIgbXlMaXN0Okxpc3QgPSBuZXcgTGlzdCgpO1xuICogIG15TGlzdC5kYXRhUHJvdmlkZXIgPSBkcDtcbiAqL1xuZXhwb3J0IGNsYXNzIEFycmF5Q29sbGVjdGlvbjxUPiBpbXBsZW1lbnRzIENvbGxlY3Rpb248VD4ge1xuICBkYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Q29sbGVjdGlvbkV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q29sbGVjdGlvbkV2ZW50PigpO1xuICBzb3VyY2U6IEFycmF5PFQ+ID0gW107XG4gIGVkaXREYXRhOiBBcnJheTxUPiA9IFtdO1xuICBpc0VkaXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZmlsdGVyRGF0YTogQXJyYXk8VD4gPSBbXTtcbiAgX2ZpbHRlcjogYW55ID0ge307XG4gIF9zb3J0OiBBcnJheTxhbnk+ID0gW107XG5cbiAgY29uc3RydWN0b3Ioc291cmNlOiBBcnJheTxUPiA9IFtdKSB7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgdGhpcy5lZGl0RGF0YSA9IHRoaXMuY29weSh0aGlzLnNvdXJjZSk7XG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5zb3VyY2Uuc2xpY2UoKTtcbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyRGF0YS5sZW5ndGg7XG4gIH1cblxuICBnZXQgdG90YWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJEYXRhLmxlbmd0aDtcbiAgfVxuXG4gIGdldCBsaXN0KCk6IEFycmF5PFQ+IHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJEYXRhO1xuICB9XG5cbiAgaXNFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggPD0gMCAmJiAhdGhpcy5pc0xvYWRpbmcoKSAmJiAhdGhpcy5oYXNFcnJvcnMoKTtcbiAgfVxuXG4gIGhhc0Vycm9ycygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0xvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNGaWx0ZXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fZmlsdGVyKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBzd2l0Y2ggdGhlIGlzRWRpdGluZ2ZsYWcgZm9yIHRoZSBkYXRhIHNvdXJjZVxuICAgKi9cbiAgZWRpdCgpIHtcbiAgICB0aGlzLmlzRWRpdGluZyA9IHRydWU7XG4gICAgdGhpcy5lZGl0RGF0YSA9IHRoaXMuY29weSh0aGlzLnNvdXJjZSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGxlYXZlIGVkaXQgbW9kZSBhbmQgcmVzZXQgc291cmNlXG4gICAqL1xuICB1bmRvKCkge1xuICAgIHRoaXMuaXNFZGl0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5zb3VyY2UgPSB0aGlzLmNvcHkodGhpcy5lZGl0RGF0YSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGxlYXZlIGVkaXQgbW9kZSBhbmQgc2F2ZSBlZGl0RGF0YVxuICAgKi9cbiAgY29tbWl0KCkge1xuICAgIHRoaXMuaXNFZGl0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5zb3VyY2UgPSB0aGlzLmZpbHRlckRhdGEuc2xpY2UoKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGFuIGl0ZW0gdG8gdGhlIGVuZCBvZiB0aGUgZGF0YSBwcm92aWRlci5cbiAgICpcbiAgICogQHBhcmFtIGl0ZW1cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgYWRkSXRlbShpdGVtOiBUKTogdm9pZCB7XG4gICAgdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhLnB1c2goaXRlbSkgOiB0aGlzLnNvdXJjZS5wdXNoKGl0ZW0pO1xuICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LkFERCwgW2l0ZW1dKSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5ldyBpdGVtIHRvIHRoZSBkYXRhIHByb3ZpZGVyIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqXG4gICAqIEBwYXJhbSBpdGVtXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBhZGRJdGVtQXQoaXRlbTogVCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YS5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pIDogdGhpcy5zb3VyY2Uuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5BREQsIFtpdGVtXSkpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqICBBcHBlbmRzIG11bHRpcGxlIGl0ZW1zIHRvIHRoZSBlbmQgb2YgdGhlIERhdGFQcm92aWRlciBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5BREQgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBpdGVtc1xuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBhZGRJdGVtcyhpdGVtczogQXJyYXk8VD4pOiB2b2lkIHtcbiAgICB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGEucHVzaCguLi5pdGVtcykgOiB0aGlzLnNvdXJjZS5wdXNoKC4uLml0ZW1zKTtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5BREQsIGl0ZW1zKSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBzZXZlcmFsIGl0ZW1zIHRvIHRoZSBkYXRhIHByb3ZpZGVyIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXggYW5kIGRpc3BhdGNoZXMgYSBDb2xsZWN0aW9uRXZlbnQuQUREIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbXNcbiAgICogQHBhcmFtIGluZGV4XG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGFkZEl0ZW1zQXQoaXRlbXM6IEFycmF5PFQ+LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhLnNwbGljZShpbmRleCwgMCwgLi4uaXRlbXMpIDogdGhpcy5zb3VyY2Uuc3BsaWNlKGluZGV4LCAwLCAuLi5pdGVtcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIGN1cnJlbnQgQXJyYXlDb2xsZWN0aW9uIGFueS5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgY2xvbmUoKTogQXJyYXlDb2xsZWN0aW9uPFQ+IHtcbiAgICByZXR1cm4gbmV3IEFycmF5Q29sbGVjdGlvbih0aGlzLmlzRWRpdGluZyA/IHRoaXMuY29weSh0aGlzLmVkaXREYXRhKSA6IHRoaXMuY29weSh0aGlzLnNvdXJjZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBjdXJyZW50IEFycmF5Q29sbGVjdGlvbiBhbnkuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGNvcHkoYXJyYXk6IGFueVtdKTogYW55W10ge1xuICAgIHJldHVybiBIZWxwZXJzLmRlZXBDbG9uZShhcnJheSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uY2F0ZW5hdGVzIHRoZSBzcGVjaWZpZWQgaXRlbXMgdG8gdGhlIGVuZCBvZiB0aGUgY3VycmVudCBkYXRhIHByb3ZpZGVyLlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbXNcbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgY29uY2F0KGl0ZW1zOiBBcnJheTxUPik6IHZvaWQge1xuICAgIHRoaXMuYWRkSXRlbXMoaXRlbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICpcbiAgICogQHBhcmFtIGluZGV4XG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGdldEl0ZW1BdChpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhW2luZGV4XSA6IHRoaXMuc291cmNlW2luZGV4XTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIHNwZWNpZmllZCBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbVxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBnZXRJdGVtSW5kZXgoaXRlbTogVCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YS5pbmRleE9mKGl0ZW0pIDogdGhpcy5zb3VyY2UuaW5kZXhPZihpdGVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZhbGlkYXRlcyBhbGwgdGhlIGRhdGEgaXRlbXMgdGhhdCB0aGUgRGF0YVByb3ZpZGVyIGNvbnRhaW5zIGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LklOVkFMSURBVEVfQUxMIGV2ZW50LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBpbnZhbGlkYXRlKCk6IHZvaWQge1xuICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LklOVkFMSURBVEVfQUxMKSk7XG4gIH1cblxuICAvKipcbiAgICogSW52YWxpZGF0ZXMgdGhlIHNwZWNpZmllZCBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbVxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICAvLyBpbnZhbGlkYXRlSXRlbShpdGVtOmFueSk6dm9pZCB7fVxuXG4gIC8qKlxuICAgKiBJbnZhbGlkYXRlcyB0aGUgaXRlbSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKlxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgLy8gaW52YWxpZGF0ZUl0ZW1BdChpbmRleDpudW1iZXIpOnZvaWQge31cblxuICAvKipcbiAgICogQXBwZW5kcyB0aGUgc3BlY2lmaWVkIGRhdGEgaW50byB0aGUgZGF0YSB0aGF0IHRoZSBkYXRhIHByb3ZpZGVyIGNvbnRhaW5zIGFuZCByZW1vdmVzIGFueSBkdXBsaWNhdGUgaXRlbXMuXG4gICAqXG4gICAqIEBwYXJhbSBuZXdEYXRhXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIG1lcmdlKG5ld0RhdGE6IEFycmF5PFQ+KTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBvYmogb2YgbmV3RGF0YSkge1xuICAgICAgY29uc3QgZXhpc3RpbmcgPSB+dGhpcy5nZXRJdGVtSW5kZXgob2JqKTtcbiAgICAgIGlmIChleGlzdGluZykge1xuICAgICAgICB0aGlzLnJlcGxhY2VJdGVtKG9iaiwgZXhpc3RpbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRJdGVtKG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIGl0ZW1zIGZyb20gdGhlIGRhdGEgcHJvdmlkZXIgYW5kIGRpc3BhdGNoZXMgYSBDb2xsZWN0aW9uRXZlbnQuUkVNT1ZFX0FMTCBldmVudC5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgcmVtb3ZlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMuc291cmNlID0gW107XG4gICAgdGhpcy5lZGl0RGF0YSA9IFtdO1xuICAgIHRoaXMuZmlsdGVyRGF0YSA9IFtdO1xuICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LlJFTU9WRV9BTEwsIFtdKSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgc3BlY2lmaWVkIGl0ZW0gZnJvbSB0aGUgZGF0YSBwcm92aWRlciBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5SRU1PVkUgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBpdGVtXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIHJlbW92ZUl0ZW0oaXRlbTogVCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXgoaXRlbSk7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlSXRlbUF0KGluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXggYW5kIGRpc3BhdGNoZXMgYSBDb2xsZWN0aW9uRXZlbnQuUkVNT1ZFIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgcmVtb3ZlSXRlbUF0KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBzdWNjZXNzID0gISF0aGlzLnNvdXJjZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFuIGV4aXN0aW5nIGl0ZW0gd2l0aCBhIG5ldyBpdGVtIGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LlJFUExBQ0UgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBuZXdJdGVtXG4gICAqIEBwYXJhbSBvbGRJdGVtXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIHJlcGxhY2VJdGVtKG5ld0l0ZW06IGFueSwgb2xkSXRlbTogYW55KTogYW55IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KG9sZEl0ZW0pO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLnJlcGxhY2VJdGVtQXQobmV3SXRlbSwgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgaXRlbSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LlJFUExBQ0UgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBuZXdJdGVtXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICByZXBsYWNlSXRlbUF0KG5ld0l0ZW06IGFueSwgaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgdGhpcy5maWx0ZXJEYXRhLnNwbGljZShpbmRleCwgMSwgbmV3SXRlbSk7XG4gIH1cblxuICAvKipcbiAgICogU29ydHMgdGhlIGl0ZW1zIHRoYXQgdGhlIGRhdGEgcHJvdmlkZXIgY29udGFpbnMgYW5kIGRpc3BhdGNoZXMgYSBDb2xsZWN0aW9uRXZlbnQuU09SVCBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIHNvcnRBcmdzXG4gICAqIEByZXR1cm5zIG51bGxcbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgZ2V0IHNvcnQoKTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnQ7XG4gIH1cblxuICBzZXQgc29ydCh2YWx1ZTogQXJyYXk8YW55Pikge1xuICAgIHRoaXMuX3NvcnQgPSB2YWx1ZTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTb3J0cyB0aGUgaXRlbXMgdGhhdCB0aGUgZGF0YSBwcm92aWRlciBjb250YWlucyBieSB0aGUgc3BlY2lmaWVkIGZpZWxkIGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LlNPUlQgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBmaWVsZE5hbWVcbiAgICogQHBhcmFtIFtvcHRpb25zPW51bGxdXG4gICAqIEByZXR1cm5zIG51bGxcbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgc29ydE9uKGZpZWxkTmFtZTogYW55LCByZXZlcnNlID0gZmFsc2UpOiBBcnJheTxUPiB7XG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJEYXRhLnNvcnQoSGVscGVycy5zb3J0QnlGaWVsZChmaWVsZE5hbWUsIHJldmVyc2UpKTtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5TT1JUKSk7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyRGF0YTtcbiAgfVxuXG4gIGdldCBmaWx0ZXIoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyO1xuICB9XG5cbiAgc2V0IGZpbHRlcih2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fZmlsdGVyID0gdmFsdWU7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBmaWx0ZXJPbihmaWVsZE5hbWU6IGFueSwgdmFsdWU6IGFueSA9IG51bGwpOiBBcnJheTxUPiB7XG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJEYXRhLmZpbHRlcihIZWxwZXJzLmZpbHRlckJ5RmllbGQoZmllbGROYW1lLCB2YWx1ZSkpO1xuICAgIHJldHVybiB0aGlzLmZpbHRlckRhdGE7XG4gIH1cblxuICBvbkRhdGFDaGFuZ2UoZXZlbnQ6IENvbGxlY3Rpb25FdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhLnNsaWNlKCkgOiB0aGlzLnNvdXJjZS5zbGljZSgpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9zb3J0LnJldmVyc2UoKSkge1xuICAgICAgdGhpcy5zb3J0T24oaXRlbS5maWVsZCwgaXRlbS5yZXZlcnNlKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fZmlsdGVyKSB7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHRoaXMuZmlsdGVyT24oa2V5LCB0aGlzLl9maWx0ZXJba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LkNIQU5HRSwgdGhpcy5maWx0ZXJEYXRhKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBBcnJheSBhbnkgcmVwcmVzZW50YXRpb24gb2YgdGhlIGRhdGEgdGhhdCB0aGUgZGF0YSBwcm92aWRlciBjb250YWlucy5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgdG9BcnJheSgpOiBBcnJheTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YSA6IHRoaXMuc291cmNlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGEgOiB0aGlzLnNvdXJjZTtcbiAgfVxufVxuIl19