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
     *
     * @memberOf ArrayCollection
     */
    /**
     * Appends an item to the end of the data provider.
     *
     *
     * \@memberOf ArrayCollection
     * @param {?} item
     * @return {?}
     */
    ArrayCollection.prototype.addItem = /**
     * Appends an item to the end of the data provider.
     *
     *
     * \@memberOf ArrayCollection
     * @param {?} item
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
     *
     * @memberOf ArrayCollection
     */
    /**
     * Adds a new item to the data provider at the specified index.
     *
     *
     * \@memberOf ArrayCollection
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    ArrayCollection.prototype.addItemAt = /**
     * Adds a new item to the data provider at the specified index.
     *
     *
     * \@memberOf ArrayCollection
     * @param {?} item
     * @param {?} index
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
     * @memberOf ArrayCollection
     */
    /**
     *  Appends multiple items to the end of the DataProvider and dispatches a CollectionEvent.ADD event.
     *
     * \@memberOf ArrayCollection
     * @param {?} items
     * @return {?}
     */
    ArrayCollection.prototype.addItems = /**
     *  Appends multiple items to the end of the DataProvider and dispatches a CollectionEvent.ADD event.
     *
     * \@memberOf ArrayCollection
     * @param {?} items
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
     * @memberOf ArrayCollection
     */
    /**
     * Adds several items to the data provider at the specified index and dispatches a CollectionEvent.ADD event.
     *
     * \@memberOf ArrayCollection
     * @param {?} items
     * @param {?} index
     * @return {?}
     */
    ArrayCollection.prototype.addItemsAt = /**
     * Adds several items to the data provider at the specified index and dispatches a CollectionEvent.ADD event.
     *
     * \@memberOf ArrayCollection
     * @param {?} items
     * @param {?} index
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
     * @memberOf ArrayCollection
     */
    /**
     * Concatenates the specified items to the end of the current data provider.
     *
     * \@memberOf ArrayCollection
     * @param {?} items
     * @return {?}
     */
    ArrayCollection.prototype.concat = /**
     * Concatenates the specified items to the end of the current data provider.
     *
     * \@memberOf ArrayCollection
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this.addItems(items);
    };
    /**
     * Returns the item at the specified index.
     *
     * @memberOf ArrayCollection
     */
    /**
     * Returns the item at the specified index.
     *
     * \@memberOf ArrayCollection
     * @param {?} index
     * @return {?}
     */
    ArrayCollection.prototype.getItemAt = /**
     * Returns the item at the specified index.
     *
     * \@memberOf ArrayCollection
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.isEditing ? this.editData[index] : this.source[index];
    };
    /**
     *  Returns the index of the specified item.
     *
     * @memberOf ArrayCollection
     */
    /**
     *  Returns the index of the specified item.
     *
     * \@memberOf ArrayCollection
     * @param {?} item
     * @return {?}
     */
    ArrayCollection.prototype.getItemIndex = /**
     *  Returns the index of the specified item.
     *
     * \@memberOf ArrayCollection
     * @param {?} item
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
     * \@memberOf ArrayCollection
     * @param {?} newData
     * @return {?}
     */
    ArrayCollection.prototype.merge = /**
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
     * \@memberOf ArrayCollection
     * @param {?} newData
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
     * @memberOf ArrayCollection
     */
    /**
     * Removes the specified item from the data provider and dispatches a CollectionEvent.REMOVE event.
     *
     * \@memberOf ArrayCollection
     * @param {?} item
     * @return {?}
     */
    ArrayCollection.prototype.removeItem = /**
     * Removes the specified item from the data provider and dispatches a CollectionEvent.REMOVE event.
     *
     * \@memberOf ArrayCollection
     * @param {?} item
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
     * @memberOf ArrayCollection
     */
    /**
     * Removes the item at the specified index and dispatches a CollectionEvent.REMOVE event.
     *
     * \@memberOf ArrayCollection
     * @param {?} index
     * @return {?}
     */
    ArrayCollection.prototype.removeItemAt = /**
     * Removes the item at the specified index and dispatches a CollectionEvent.REMOVE event.
     *
     * \@memberOf ArrayCollection
     * @param {?} index
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
     * @memberOf ArrayCollection
     */
    /**
     * Replaces an existing item with a new item and dispatches a CollectionEvent.REPLACE event.
     *
     * \@memberOf ArrayCollection
     * @param {?} newItem
     * @param {?} oldItem
     * @return {?}
     */
    ArrayCollection.prototype.replaceItem = /**
     * Replaces an existing item with a new item and dispatches a CollectionEvent.REPLACE event.
     *
     * \@memberOf ArrayCollection
     * @param {?} newItem
     * @param {?} oldItem
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
     * @memberOf ArrayCollection
     */
    /**
     * Replaces the item at the specified index and dispatches a CollectionEvent.REPLACE event.
     *
     * \@memberOf ArrayCollection
     * @param {?} newItem
     * @param {?} index
     * @return {?}
     */
    ArrayCollection.prototype.replaceItemAt = /**
     * Replaces the item at the specified index and dispatches a CollectionEvent.REPLACE event.
     *
     * \@memberOf ArrayCollection
     * @param {?} newItem
     * @param {?} index
     * @return {?}
     */
    function (newItem, index) {
        this.filterData.splice(index, 1, newItem);
    };
    Object.defineProperty(ArrayCollection.prototype, "sort", {
        /**
         * Sorts the items that the data provider contains and dispatches a CollectionEvent.SORT event.
         *
         * @memberOf ArrayCollection
         */
        get: /**
         * Sorts the items that the data provider contains and dispatches a CollectionEvent.SORT event.
         *
         * \@memberOf ArrayCollection
         * @return {?}
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
     * @memberOf ArrayCollection
     */
    /**
     * Sorts the items that the data provider contains by the specified field and dispatches a CollectionEvent.SORT event.
     *
     * \@memberOf ArrayCollection
     * @param {?} fieldName
     * @param {?=} reverse
     * @return {?}
     */
    ArrayCollection.prototype.sortOn = /**
     * Sorts the items that the data provider contains by the specified field and dispatches a CollectionEvent.SORT event.
     *
     * \@memberOf ArrayCollection
     * @param {?} fieldName
     * @param {?=} reverse
     * @return {?}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXlDb2xsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEtcHJvdmlkZXIvQXJyYXlDb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBZTlDOzs7Ozs7Ozs7Ozs7OztJQVNFLHlCQUFZLE1BQXFCO1FBQXJCLHVCQUFBLEVBQUEsV0FBcUI7UUFSakMsZUFBVSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUNoRixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFVLEdBQWEsRUFBRSxDQUFDO1FBQzFCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFlLEVBQUUsQ0FBQztRQUdyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsc0JBQUksbUNBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrQ0FBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFJOzs7O1FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7Ozs7SUFFRCxpQ0FBTzs7O0lBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFFRCxtQ0FBUzs7O0lBQVQ7UUFDRSxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCxtQ0FBUzs7O0lBQVQ7UUFDRSxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCxvQ0FBVTs7O0lBQVY7UUFDRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDhCQUFJOzs7O0lBQUo7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCw4QkFBSTs7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILGdDQUFNOzs7O0lBQU47UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7O0lBQ0gsaUNBQU87Ozs7Ozs7O0lBQVAsVUFBUSxJQUFPO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxlQUFlLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7Ozs7O0lBQ0gsbUNBQVM7Ozs7Ozs7OztJQUFULFVBQVUsSUFBTyxFQUFFLEtBQWE7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksZUFBZSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7OztJQUNILGtDQUFROzs7Ozs7O0lBQVIsVUFBUyxLQUFlOztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBLEtBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQSxDQUFDLElBQUksNEJBQUksS0FBSyxHQUFFLENBQUMsQ0FBQyxDQUFBLEtBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQSxDQUFDLElBQUksNEJBQUksS0FBSyxFQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLGVBQWUsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7Ozs7SUFDSCxvQ0FBVTs7Ozs7Ozs7SUFBVixVQUFXLEtBQWUsRUFBRSxLQUFhOztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBLEtBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQSxDQUFDLE1BQU0sNkJBQUMsS0FBSyxFQUFFLENBQUMsR0FBSyxLQUFLLEdBQUUsQ0FBQyxDQUFDLENBQUEsS0FBQSxJQUFJLENBQUMsTUFBTSxDQUFBLENBQUMsTUFBTSw2QkFBQyxLQUFLLEVBQUUsQ0FBQyxHQUFLLEtBQUssRUFBQyxDQUFDO0lBQ3JHLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsK0JBQUs7Ozs7OztJQUFMO1FBQ0UsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7Ozs7SUFDSCw4QkFBSTs7Ozs7OztJQUFKLFVBQUssS0FBWTtRQUNmLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7Ozs7SUFDSCxnQ0FBTTs7Ozs7OztJQUFOLFVBQU8sS0FBZTtRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7OztJQUNILG1DQUFTOzs7Ozs7O0lBQVQsVUFBVSxLQUFhO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7Ozs7SUFDSCxzQ0FBWTs7Ozs7OztJQUFaLFVBQWEsSUFBTztRQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILG9DQUFVOzs7Ozs7SUFBVjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxlQUFlLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtQ0FBbUM7SUFFbkM7Ozs7T0FJRztJQUNILHlDQUF5QztJQUV6Qzs7OztPQUlHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNILCtCQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUwsVUFBTSxPQUFpQjs7O1lBQ3JCLEtBQWtCLElBQUEsWUFBQSxpQkFBQSxPQUFPLENBQUEsZ0NBQUEscURBQUU7Z0JBQXRCLElBQU0sR0FBRyxvQkFBQTs7b0JBQ04sUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7Z0JBQ3hDLElBQUksUUFBUSxFQUFFO29CQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUNqQztxQkFBTTtvQkFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNuQjthQUNGOzs7Ozs7Ozs7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILG1DQUFTOzs7Ozs7SUFBVDtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxlQUFlLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7Ozs7SUFDSCxvQ0FBVTs7Ozs7OztJQUFWLFVBQVcsSUFBTzs7WUFDVixLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDckMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7OztJQUNILHNDQUFZOzs7Ozs7O0lBQVosVUFBYSxLQUFhOztZQUNsQixPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7OztJQUNILHFDQUFXOzs7Ozs7OztJQUFYLFVBQVksT0FBWSxFQUFFLE9BQVk7O1lBQzlCLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQztRQUN4QyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7Ozs7SUFDSCx1Q0FBYTs7Ozs7Ozs7SUFBYixVQUFjLE9BQVksRUFBRSxLQUFhO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQU9ELHNCQUFJLGlDQUFJO1FBTFI7Ozs7V0FJRzs7Ozs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7Ozs7O1FBRUQsVUFBUyxLQUFpQjtZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQzs7O09BTEE7SUFPRDs7OztPQUlHOzs7Ozs7Ozs7SUFDSCxnQ0FBTTs7Ozs7Ozs7SUFBTixVQUFPLFNBQWMsRUFBRSxPQUFlO1FBQWYsd0JBQUEsRUFBQSxlQUFlO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksZUFBZSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsc0JBQUksbUNBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7OztRQUVELFVBQVcsS0FBVTtZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQzs7O09BTEE7Ozs7OztJQU9ELGtDQUFROzs7OztJQUFSLFVBQVMsU0FBYyxFQUFFLEtBQWlCO1FBQWpCLHNCQUFBLEVBQUEsWUFBaUI7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELHNDQUFZOzs7O0lBQVosVUFBYSxLQUFzQjtRQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsaUNBQU87OztJQUFQOztRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7WUFDL0UsS0FBbUIsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXBDLElBQU0sSUFBSSxXQUFBO2dCQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdkM7Ozs7Ozs7OztRQUNELEtBQUssSUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM5QixJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkM7U0FDRjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILGlDQUFPOzs7Ozs7SUFBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN0RCxDQUFDOzs7O0lBRUQsZ0NBQU07OztJQUFOO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3RELENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFoVUQsSUFnVUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBL1RDLHFDQUFnRjs7SUFDaEYsaUNBQXNCOztJQUN0QixtQ0FBd0I7O0lBQ3hCLG9DQUEyQjs7SUFDM0IscUNBQTBCOztJQUMxQixrQ0FBa0I7O0lBQ2xCLGdDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5nXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFwcFxuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4vQ29sbGVjdGlvbic7XG5pbXBvcnQgeyBDb2xsZWN0aW9uRXZlbnQgfSBmcm9tICcuL0NvbGxlY3Rpb25FdmVudCc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbi8qKlxuICogQmFzZSBDbGFzcyBmb3IgYWxsIENvbGxlY3Rpb24gYmFzZWQgZGF0YSBwcm92aWRlcnNcbiAqXG4gKiBAZXhhbXBsZVxuICogIHZhciBkcDpEYXRhUHJvdmlkZXIgPSBuZXcgRGF0YVByb3ZpZGVyKCk7XG4gKiAgZHAuYWRkSXRlbSh7bGFiZWw6XCJJdGVtIDFcIn0pO1xuICogIGRwLmFkZEl0ZW0oe2xhYmVsOlwiSXRlbSAyXCJ9KTtcbiAqICBkcC5hZGRJdGVtKHtsYWJlbDpcIkl0ZW0gM1wifSk7XG4gKiAgZHAuYWRkSXRlbSh7bGFiZWw6XCJJdGVtIDRcIn0pO1xuXG4gKiAgdmFyIG15TGlzdDpMaXN0ID0gbmV3IExpc3QoKTtcbiAqICBteUxpc3QuZGF0YVByb3ZpZGVyID0gZHA7XG4gKi9cbmV4cG9ydCBjbGFzcyBBcnJheUNvbGxlY3Rpb248VD4gaW1wbGVtZW50cyBDb2xsZWN0aW9uPFQ+IHtcbiAgZGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPENvbGxlY3Rpb25FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPENvbGxlY3Rpb25FdmVudD4oKTtcbiAgc291cmNlOiBBcnJheTxUPiA9IFtdO1xuICBlZGl0RGF0YTogQXJyYXk8VD4gPSBbXTtcbiAgaXNFZGl0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIGZpbHRlckRhdGE6IEFycmF5PFQ+ID0gW107XG4gIF9maWx0ZXI6IGFueSA9IHt9O1xuICBfc29ydDogQXJyYXk8YW55PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTogQXJyYXk8VD4gPSBbXSkge1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIHRoaXMuZWRpdERhdGEgPSB0aGlzLmNvcHkodGhpcy5zb3VyY2UpO1xuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuc291cmNlLnNsaWNlKCk7XG4gIH1cblxuICBnZXQgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbHRlckRhdGEubGVuZ3RoO1xuICB9XG5cbiAgZ2V0IHRvdGFsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyRGF0YS5sZW5ndGg7XG4gIH1cblxuICBnZXQgbGlzdCgpOiBBcnJheTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyRGF0YTtcbiAgfVxuXG4gIGlzRW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoIDw9IDAgJiYgIXRoaXMuaXNMb2FkaW5nKCkgJiYgIXRoaXMuaGFzRXJyb3JzKCk7XG4gIH1cblxuICBoYXNFcnJvcnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNMb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzRmlsdGVyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX2ZpbHRlcikubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gc3dpdGNoIHRoZSBpc0VkaXRpbmdmbGFnIGZvciB0aGUgZGF0YSBzb3VyY2VcbiAgICovXG4gIGVkaXQoKSB7XG4gICAgdGhpcy5pc0VkaXRpbmcgPSB0cnVlO1xuICAgIHRoaXMuZWRpdERhdGEgPSB0aGlzLmNvcHkodGhpcy5zb3VyY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBsZWF2ZSBlZGl0IG1vZGUgYW5kIHJlc2V0IHNvdXJjZVxuICAgKi9cbiAgdW5kbygpIHtcbiAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuc291cmNlID0gdGhpcy5jb3B5KHRoaXMuZWRpdERhdGEpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBsZWF2ZSBlZGl0IG1vZGUgYW5kIHNhdmUgZWRpdERhdGFcbiAgICovXG4gIGNvbW1pdCgpIHtcbiAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuc291cmNlID0gdGhpcy5maWx0ZXJEYXRhLnNsaWNlKCk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhbiBpdGVtIHRvIHRoZSBlbmQgb2YgdGhlIGRhdGEgcHJvdmlkZXIuXG4gICAqXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGFkZEl0ZW0oaXRlbTogVCk6IHZvaWQge1xuICAgIHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YS5wdXNoKGl0ZW0pIDogdGhpcy5zb3VyY2UucHVzaChpdGVtKTtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5BREQsIFtpdGVtXSkpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBuZXcgaXRlbSB0byB0aGUgZGF0YSBwcm92aWRlciBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBhZGRJdGVtQXQoaXRlbTogVCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YS5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pIDogdGhpcy5zb3VyY2Uuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5BREQsIFtpdGVtXSkpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqICBBcHBlbmRzIG11bHRpcGxlIGl0ZW1zIHRvIHRoZSBlbmQgb2YgdGhlIERhdGFQcm92aWRlciBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5BREQgZXZlbnQuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGFkZEl0ZW1zKGl0ZW1zOiBBcnJheTxUPik6IHZvaWQge1xuICAgIHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YS5wdXNoKC4uLml0ZW1zKSA6IHRoaXMuc291cmNlLnB1c2goLi4uaXRlbXMpO1xuICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LkFERCwgaXRlbXMpKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHNldmVyYWwgaXRlbXMgdG8gdGhlIGRhdGEgcHJvdmlkZXIgYXQgdGhlIHNwZWNpZmllZCBpbmRleCBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5BREQgZXZlbnQuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGFkZEl0ZW1zQXQoaXRlbXM6IEFycmF5PFQ+LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhLnNwbGljZShpbmRleCwgMCwgLi4uaXRlbXMpIDogdGhpcy5zb3VyY2Uuc3BsaWNlKGluZGV4LCAwLCAuLi5pdGVtcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIGN1cnJlbnQgQXJyYXlDb2xsZWN0aW9uIGFueS5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgY2xvbmUoKTogQXJyYXlDb2xsZWN0aW9uPFQ+IHtcbiAgICByZXR1cm4gbmV3IEFycmF5Q29sbGVjdGlvbih0aGlzLmlzRWRpdGluZyA/IHRoaXMuY29weSh0aGlzLmVkaXREYXRhKSA6IHRoaXMuY29weSh0aGlzLnNvdXJjZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBjdXJyZW50IEFycmF5Q29sbGVjdGlvbiBhbnkuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGNvcHkoYXJyYXk6IGFueVtdKSB7XG4gICAgcmV0dXJuIEhlbHBlcnMuZGVlcENsb25lKGFycmF5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25jYXRlbmF0ZXMgdGhlIHNwZWNpZmllZCBpdGVtcyB0byB0aGUgZW5kIG9mIHRoZSBjdXJyZW50IGRhdGEgcHJvdmlkZXIuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGNvbmNhdChpdGVtczogQXJyYXk8VD4pOiB2b2lkIHtcbiAgICB0aGlzLmFkZEl0ZW1zKGl0ZW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGdldEl0ZW1BdChpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhW2luZGV4XSA6IHRoaXMuc291cmNlW2luZGV4XTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIHNwZWNpZmllZCBpdGVtLlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBnZXRJdGVtSW5kZXgoaXRlbTogVCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YS5pbmRleE9mKGl0ZW0pIDogdGhpcy5zb3VyY2UuaW5kZXhPZihpdGVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZhbGlkYXRlcyBhbGwgdGhlIGRhdGEgaXRlbXMgdGhhdCB0aGUgRGF0YVByb3ZpZGVyIGNvbnRhaW5zIGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LklOVkFMSURBVEVfQUxMIGV2ZW50LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBpbnZhbGlkYXRlKCk6IHZvaWQge1xuICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LklOVkFMSURBVEVfQUxMKSk7XG4gIH1cblxuICAvKipcbiAgICogSW52YWxpZGF0ZXMgdGhlIHNwZWNpZmllZCBpdGVtLlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICAvLyBpbnZhbGlkYXRlSXRlbShpdGVtOmFueSk6dm9pZCB7fVxuXG4gIC8qKlxuICAgKiBJbnZhbGlkYXRlcyB0aGUgaXRlbSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICAvLyBpbnZhbGlkYXRlSXRlbUF0KGluZGV4Om51bWJlcik6dm9pZCB7fVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIHRoZSBzcGVjaWZpZWQgZGF0YSBpbnRvIHRoZSBkYXRhIHRoYXQgdGhlIGRhdGEgcHJvdmlkZXIgY29udGFpbnMgYW5kIHJlbW92ZXMgYW55IGR1cGxpY2F0ZSBpdGVtcy5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgbWVyZ2UobmV3RGF0YTogQXJyYXk8VD4pOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IG9iaiBvZiBuZXdEYXRhKSB7XG4gICAgICBjb25zdCBleGlzdGluZyA9IH50aGlzLmdldEl0ZW1JbmRleChvYmopO1xuICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgIHRoaXMucmVwbGFjZUl0ZW0ob2JqLCBleGlzdGluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZEl0ZW0ob2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgaXRlbXMgZnJvbSB0aGUgZGF0YSBwcm92aWRlciBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5SRU1PVkVfQUxMIGV2ZW50LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICByZW1vdmVBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zb3VyY2UgPSBbXTtcbiAgICB0aGlzLmVkaXREYXRhID0gW107XG4gICAgdGhpcy5maWx0ZXJEYXRhID0gW107XG4gICAgdGhpcy5vbkRhdGFDaGFuZ2UobmV3IENvbGxlY3Rpb25FdmVudChDb2xsZWN0aW9uRXZlbnQuUkVNT1ZFX0FMTCwgW10pKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBzcGVjaWZpZWQgaXRlbSBmcm9tIHRoZSBkYXRhIHByb3ZpZGVyIGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LlJFTU9WRSBldmVudC5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgcmVtb3ZlSXRlbShpdGVtOiBUKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChpdGVtKTtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVJdGVtQXQoaW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleCBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5SRU1PVkUgZXZlbnQuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIHJlbW92ZUl0ZW1BdChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgc3VjY2VzcyA9ICEhdGhpcy5zb3VyY2Uuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbiBleGlzdGluZyBpdGVtIHdpdGggYSBuZXcgaXRlbSBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5SRVBMQUNFIGV2ZW50LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICByZXBsYWNlSXRlbShuZXdJdGVtOiBhbnksIG9sZEl0ZW06IGFueSk6IGFueSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChvbGRJdGVtKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5yZXBsYWNlSXRlbUF0KG5ld0l0ZW0sIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleCBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5SRVBMQUNFIGV2ZW50LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICByZXBsYWNlSXRlbUF0KG5ld0l0ZW06IGFueSwgaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgdGhpcy5maWx0ZXJEYXRhLnNwbGljZShpbmRleCwgMSwgbmV3SXRlbSk7XG4gIH1cblxuICAvKipcbiAgICogU29ydHMgdGhlIGl0ZW1zIHRoYXQgdGhlIGRhdGEgcHJvdmlkZXIgY29udGFpbnMgYW5kIGRpc3BhdGNoZXMgYSBDb2xsZWN0aW9uRXZlbnQuU09SVCBldmVudC5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgZ2V0IHNvcnQoKTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnQ7XG4gIH1cblxuICBzZXQgc29ydCh2YWx1ZTogQXJyYXk8YW55Pikge1xuICAgIHRoaXMuX3NvcnQgPSB2YWx1ZTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTb3J0cyB0aGUgaXRlbXMgdGhhdCB0aGUgZGF0YSBwcm92aWRlciBjb250YWlucyBieSB0aGUgc3BlY2lmaWVkIGZpZWxkIGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LlNPUlQgZXZlbnQuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIHNvcnRPbihmaWVsZE5hbWU6IGFueSwgcmV2ZXJzZSA9IGZhbHNlKTogQXJyYXk8VD4ge1xuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyRGF0YS5zb3J0KEhlbHBlcnMuc29ydEJ5RmllbGQoZmllbGROYW1lLCByZXZlcnNlKSk7XG4gICAgdGhpcy5vbkRhdGFDaGFuZ2UobmV3IENvbGxlY3Rpb25FdmVudChDb2xsZWN0aW9uRXZlbnQuU09SVCkpO1xuICAgIHJldHVybiB0aGlzLmZpbHRlckRhdGE7XG4gIH1cblxuICBnZXQgZmlsdGVyKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcjtcbiAgfVxuXG4gIHNldCBmaWx0ZXIodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2ZpbHRlciA9IHZhbHVlO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgZmlsdGVyT24oZmllbGROYW1lOiBhbnksIHZhbHVlOiBhbnkgPSBudWxsKTogQXJyYXk8VD4ge1xuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyRGF0YS5maWx0ZXIoSGVscGVycy5maWx0ZXJCeUZpZWxkKGZpZWxkTmFtZSwgdmFsdWUpKTtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJEYXRhO1xuICB9XG5cbiAgb25EYXRhQ2hhbmdlKGV2ZW50OiBDb2xsZWN0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cblxuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YS5zbGljZSgpIDogdGhpcy5zb3VyY2Uuc2xpY2UoKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5fc29ydC5yZXZlcnNlKCkpIHtcbiAgICAgIHRoaXMuc29ydE9uKGl0ZW0uZmllbGQsIGl0ZW0ucmV2ZXJzZSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX2ZpbHRlcikge1xuICAgICAgaWYgKGtleSkge1xuICAgICAgICB0aGlzLmZpbHRlck9uKGtleSwgdGhpcy5fZmlsdGVyW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5DSEFOR0UsIHRoaXMuZmlsdGVyRGF0YSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gQXJyYXkgYW55IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBkYXRhIHRoYXQgdGhlIGRhdGEgcHJvdmlkZXIgY29udGFpbnMuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIHRvQXJyYXkoKTogQXJyYXk8VD4ge1xuICAgIHJldHVybiB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGEgOiB0aGlzLnNvdXJjZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhIDogdGhpcy5zb3VyY2U7XG4gIH1cbn1cbiJdfQ==