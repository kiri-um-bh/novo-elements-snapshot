/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXlDb2xsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEtcHJvdmlkZXIvQXJyYXlDb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFlOUM7Ozs7Ozs7Ozs7Ozs7O0lBU0UseUJBQVksTUFBcUI7UUFBckIsdUJBQUEsRUFBQSxXQUFxQjtRQVJqQyxlQUFVLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ2hGLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBYSxFQUFFLENBQUM7UUFDMUIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNsQixVQUFLLEdBQWUsRUFBRSxDQUFDO1FBR3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxzQkFBSSxtQ0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lB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Q0FBQyxNQUFNLENBQUM7SUFDdEQsQ0FBQzs7OztJQUVELGdDQUFNOzs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN0RCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBcldELElBcVdDOzs7Ozs7Ozs7Ozs7Ozs7OztJQXBXQyxxQ0FBZ0Y7O0lBQ2hGLGlDQUFzQjs7SUFDdEIsbUNBQXdCOztJQUN4QixvQ0FBMkI7O0lBQzNCLHFDQUEwQjs7SUFDMUIsa0NBQWtCOztJQUNsQixnQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZ1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBcHBcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuL0NvbGxlY3Rpb24nO1xuaW1wb3J0IHsgQ29sbGVjdGlvbkV2ZW50IH0gZnJvbSAnLi9Db2xsZWN0aW9uRXZlbnQnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG4vKipcbiAqIEJhc2UgQ2xhc3MgZm9yIGFsbCBDb2xsZWN0aW9uIGJhc2VkIGRhdGEgcHJvdmlkZXJzXG4gKlxuICogQGV4YW1wbGVcbiAqICB2YXIgZHA6RGF0YVByb3ZpZGVyID0gbmV3IERhdGFQcm92aWRlcigpO1xuICogIGRwLmFkZEl0ZW0oe2xhYmVsOlwiSXRlbSAxXCJ9KTtcbiAqICBkcC5hZGRJdGVtKHtsYWJlbDpcIkl0ZW0gMlwifSk7XG4gKiAgZHAuYWRkSXRlbSh7bGFiZWw6XCJJdGVtIDNcIn0pO1xuICogIGRwLmFkZEl0ZW0oe2xhYmVsOlwiSXRlbSA0XCJ9KTtcblxuICogIHZhciBteUxpc3Q6TGlzdCA9IG5ldyBMaXN0KCk7XG4gKiAgbXlMaXN0LmRhdGFQcm92aWRlciA9IGRwO1xuICovXG5leHBvcnQgY2xhc3MgQXJyYXlDb2xsZWN0aW9uPFQ+IGltcGxlbWVudHMgQ29sbGVjdGlvbjxUPiB7XG4gIGRhdGFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDb2xsZWN0aW9uRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxDb2xsZWN0aW9uRXZlbnQ+KCk7XG4gIHNvdXJjZTogQXJyYXk8VD4gPSBbXTtcbiAgZWRpdERhdGE6IEFycmF5PFQ+ID0gW107XG4gIGlzRWRpdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBmaWx0ZXJEYXRhOiBBcnJheTxUPiA9IFtdO1xuICBfZmlsdGVyOiBhbnkgPSB7fTtcbiAgX3NvcnQ6IEFycmF5PGFueT4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IEFycmF5PFQ+ID0gW10pIHtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB0aGlzLmVkaXREYXRhID0gdGhpcy5jb3B5KHRoaXMuc291cmNlKTtcbiAgICB0aGlzLmZpbHRlckRhdGEgPSB0aGlzLnNvdXJjZS5zbGljZSgpO1xuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJEYXRhLmxlbmd0aDtcbiAgfVxuXG4gIGdldCB0b3RhbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmZpbHRlckRhdGEubGVuZ3RoO1xuICB9XG5cbiAgZ2V0IGxpc3QoKTogQXJyYXk8VD4ge1xuICAgIHJldHVybiB0aGlzLmZpbHRlckRhdGE7XG4gIH1cblxuICBpc0VtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aCA8PSAwICYmICF0aGlzLmlzTG9hZGluZygpICYmICF0aGlzLmhhc0Vycm9ycygpO1xuICB9XG5cbiAgaGFzRXJyb3JzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzTG9hZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0ZpbHRlcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9maWx0ZXIpLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHN3aXRjaCB0aGUgaXNFZGl0aW5nZmxhZyBmb3IgdGhlIGRhdGEgc291cmNlXG4gICAqL1xuICBlZGl0KCkge1xuICAgIHRoaXMuaXNFZGl0aW5nID0gdHJ1ZTtcbiAgICB0aGlzLmVkaXREYXRhID0gdGhpcy5jb3B5KHRoaXMuc291cmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gbGVhdmUgZWRpdCBtb2RlIGFuZCByZXNldCBzb3VyY2VcbiAgICovXG4gIHVuZG8oKSB7XG4gICAgdGhpcy5pc0VkaXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnNvdXJjZSA9IHRoaXMuY29weSh0aGlzLmVkaXREYXRhKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gbGVhdmUgZWRpdCBtb2RlIGFuZCBzYXZlIGVkaXREYXRhXG4gICAqL1xuICBjb21taXQoKSB7XG4gICAgdGhpcy5pc0VkaXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnNvdXJjZSA9IHRoaXMuZmlsdGVyRGF0YS5zbGljZSgpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYW4gaXRlbSB0byB0aGUgZW5kIG9mIHRoZSBkYXRhIHByb3ZpZGVyLlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbVxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBhZGRJdGVtKGl0ZW06IFQpOiB2b2lkIHtcbiAgICB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGEucHVzaChpdGVtKSA6IHRoaXMuc291cmNlLnB1c2goaXRlbSk7XG4gICAgdGhpcy5vbkRhdGFDaGFuZ2UobmV3IENvbGxlY3Rpb25FdmVudChDb2xsZWN0aW9uRXZlbnQuQURELCBbaXRlbV0pKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbmV3IGl0ZW0gdG8gdGhlIGRhdGEgcHJvdmlkZXIgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICpcbiAgICogQHBhcmFtIGl0ZW1cbiAgICogQHBhcmFtIGluZGV4XG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGFkZEl0ZW1BdChpdGVtOiBULCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhLnNwbGljZShpbmRleCwgMCwgaXRlbSkgOiB0aGlzLnNvdXJjZS5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xuICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LkFERCwgW2l0ZW1dKSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogIEFwcGVuZHMgbXVsdGlwbGUgaXRlbXMgdG8gdGhlIGVuZCBvZiB0aGUgRGF0YVByb3ZpZGVyIGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LkFERCBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIGl0ZW1zXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGFkZEl0ZW1zKGl0ZW1zOiBBcnJheTxUPik6IHZvaWQge1xuICAgIHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YS5wdXNoKC4uLml0ZW1zKSA6IHRoaXMuc291cmNlLnB1c2goLi4uaXRlbXMpO1xuICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LkFERCwgaXRlbXMpKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHNldmVyYWwgaXRlbXMgdG8gdGhlIGRhdGEgcHJvdmlkZXIgYXQgdGhlIHNwZWNpZmllZCBpbmRleCBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5BREQgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBpdGVtc1xuICAgKiBAcGFyYW0gaW5kZXhcbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgYWRkSXRlbXNBdChpdGVtczogQXJyYXk8VD4sIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGEuc3BsaWNlKGluZGV4LCAwLCAuLi5pdGVtcykgOiB0aGlzLnNvdXJjZS5zcGxpY2UoaW5kZXgsIDAsIC4uLml0ZW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgY3VycmVudCBBcnJheUNvbGxlY3Rpb24gYW55LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBjbG9uZSgpOiBBcnJheUNvbGxlY3Rpb248VD4ge1xuICAgIHJldHVybiBuZXcgQXJyYXlDb2xsZWN0aW9uKHRoaXMuaXNFZGl0aW5nID8gdGhpcy5jb3B5KHRoaXMuZWRpdERhdGEpIDogdGhpcy5jb3B5KHRoaXMuc291cmNlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIGN1cnJlbnQgQXJyYXlDb2xsZWN0aW9uIGFueS5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgY29weShhcnJheTogYW55W10pOiBhbnlbXSB7XG4gICAgcmV0dXJuIEhlbHBlcnMuZGVlcENsb25lKGFycmF5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25jYXRlbmF0ZXMgdGhlIHNwZWNpZmllZCBpdGVtcyB0byB0aGUgZW5kIG9mIHRoZSBjdXJyZW50IGRhdGEgcHJvdmlkZXIuXG4gICAqXG4gICAqIEBwYXJhbSBpdGVtc1xuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICBjb25jYXQoaXRlbXM6IEFycmF5PFQ+KTogdm9pZCB7XG4gICAgdGhpcy5hZGRJdGVtcyhpdGVtcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlbSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKlxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgZ2V0SXRlbUF0KGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGFbaW5kZXhdIDogdGhpcy5zb3VyY2VbaW5kZXhdO1xuICB9XG5cbiAgLyoqXG4gICAqICBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgc3BlY2lmaWVkIGl0ZW0uXG4gICAqXG4gICAqIEBwYXJhbSBpdGVtXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGdldEl0ZW1JbmRleChpdGVtOiBUKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhLmluZGV4T2YoaXRlbSkgOiB0aGlzLnNvdXJjZS5pbmRleE9mKGl0ZW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEludmFsaWRhdGVzIGFsbCB0aGUgZGF0YSBpdGVtcyB0aGF0IHRoZSBEYXRhUHJvdmlkZXIgY29udGFpbnMgYW5kIGRpc3BhdGNoZXMgYSBDb2xsZWN0aW9uRXZlbnQuSU5WQUxJREFURV9BTEwgZXZlbnQuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGludmFsaWRhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5vbkRhdGFDaGFuZ2UobmV3IENvbGxlY3Rpb25FdmVudChDb2xsZWN0aW9uRXZlbnQuSU5WQUxJREFURV9BTEwpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZhbGlkYXRlcyB0aGUgc3BlY2lmaWVkIGl0ZW0uXG4gICAqXG4gICAqIEBwYXJhbSBpdGVtXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIC8vIGludmFsaWRhdGVJdGVtKGl0ZW06YW55KTp2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEludmFsaWRhdGVzIHRoZSBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICAvLyBpbnZhbGlkYXRlSXRlbUF0KGluZGV4Om51bWJlcik6dm9pZCB7fVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIHRoZSBzcGVjaWZpZWQgZGF0YSBpbnRvIHRoZSBkYXRhIHRoYXQgdGhlIGRhdGEgcHJvdmlkZXIgY29udGFpbnMgYW5kIHJlbW92ZXMgYW55IGR1cGxpY2F0ZSBpdGVtcy5cbiAgICpcbiAgICogQHBhcmFtIG5ld0RhdGFcbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgbWVyZ2UobmV3RGF0YTogQXJyYXk8VD4pOiB2b2lkIHtcbiAgICBmb3IgKGxldCBvYmogb2YgbmV3RGF0YSkge1xuICAgICAgbGV0IGV4aXN0aW5nID0gfnRoaXMuZ2V0SXRlbUluZGV4KG9iaik7XG4gICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgdGhpcy5yZXBsYWNlSXRlbShvYmosIGV4aXN0aW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkSXRlbShvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBpdGVtcyBmcm9tIHRoZSBkYXRhIHByb3ZpZGVyIGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LlJFTU9WRV9BTEwgZXZlbnQuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIHJlbW92ZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnNvdXJjZSA9IFtdO1xuICAgIHRoaXMuZWRpdERhdGEgPSBbXTtcbiAgICB0aGlzLmZpbHRlckRhdGEgPSBbXTtcbiAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5SRU1PVkVfQUxMLCBbXSkpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIHNwZWNpZmllZCBpdGVtIGZyb20gdGhlIGRhdGEgcHJvdmlkZXIgYW5kIGRpc3BhdGNoZXMgYSBDb2xsZWN0aW9uRXZlbnQuUkVNT1ZFIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gaXRlbVxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICByZW1vdmVJdGVtKGl0ZW06IFQpOiBib29sZWFuIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChpdGVtKTtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVJdGVtQXQoaW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleCBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5SRU1PVkUgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKlxuICAgKiBAbWVtYmVyT2YgQXJyYXlDb2xsZWN0aW9uXG4gICAqL1xuICByZW1vdmVJdGVtQXQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGxldCBzdWNjZXNzID0gISF0aGlzLnNvdXJjZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFuIGV4aXN0aW5nIGl0ZW0gd2l0aCBhIG5ldyBpdGVtIGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LlJFUExBQ0UgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBuZXdJdGVtXG4gICAqIEBwYXJhbSBvbGRJdGVtXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIHJlcGxhY2VJdGVtKG5ld0l0ZW06IGFueSwgb2xkSXRlbTogYW55KTogYW55IHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChvbGRJdGVtKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5yZXBsYWNlSXRlbUF0KG5ld0l0ZW0sIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBpbmRleCBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5SRVBMQUNFIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gbmV3SXRlbVxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgcmVwbGFjZUl0ZW1BdChuZXdJdGVtOiBhbnksIGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgIHRoaXMuZmlsdGVyRGF0YS5zcGxpY2UoaW5kZXgsIDEsIG5ld0l0ZW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNvcnRzIHRoZSBpdGVtcyB0aGF0IHRoZSBkYXRhIHByb3ZpZGVyIGNvbnRhaW5zIGFuZCBkaXNwYXRjaGVzIGEgQ29sbGVjdGlvbkV2ZW50LlNPUlQgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBzb3J0QXJnc1xuICAgKiBAcmV0dXJucyBudWxsXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIGdldCBzb3J0KCk6IEFycmF5PGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0O1xuICB9XG5cbiAgc2V0IHNvcnQodmFsdWU6IEFycmF5PGFueT4pIHtcbiAgICB0aGlzLl9zb3J0ID0gdmFsdWU7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogU29ydHMgdGhlIGl0ZW1zIHRoYXQgdGhlIGRhdGEgcHJvdmlkZXIgY29udGFpbnMgYnkgdGhlIHNwZWNpZmllZCBmaWVsZCBhbmQgZGlzcGF0Y2hlcyBhIENvbGxlY3Rpb25FdmVudC5TT1JUIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZmllbGROYW1lXG4gICAqIEBwYXJhbSBbb3B0aW9ucz1udWxsXVxuICAgKiBAcmV0dXJucyBudWxsXG4gICAqXG4gICAqIEBtZW1iZXJPZiBBcnJheUNvbGxlY3Rpb25cbiAgICovXG4gIHNvcnRPbihmaWVsZE5hbWU6IGFueSwgcmV2ZXJzZSA9IGZhbHNlKTogQXJyYXk8VD4ge1xuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyRGF0YS5zb3J0KEhlbHBlcnMuc29ydEJ5RmllbGQoZmllbGROYW1lLCByZXZlcnNlKSk7XG4gICAgdGhpcy5vbkRhdGFDaGFuZ2UobmV3IENvbGxlY3Rpb25FdmVudChDb2xsZWN0aW9uRXZlbnQuU09SVCkpO1xuICAgIHJldHVybiB0aGlzLmZpbHRlckRhdGE7XG4gIH1cblxuICBnZXQgZmlsdGVyKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcjtcbiAgfVxuXG4gIHNldCBmaWx0ZXIodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2ZpbHRlciA9IHZhbHVlO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgZmlsdGVyT24oZmllbGROYW1lOiBhbnksIHZhbHVlOiBhbnkgPSBudWxsKTogQXJyYXk8VD4ge1xuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyRGF0YS5maWx0ZXIoSGVscGVycy5maWx0ZXJCeUZpZWxkKGZpZWxkTmFtZSwgdmFsdWUpKTtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJEYXRhO1xuICB9XG5cbiAgb25EYXRhQ2hhbmdlKGV2ZW50OiBDb2xsZWN0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cblxuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YS5zbGljZSgpIDogdGhpcy5zb3VyY2Uuc2xpY2UoKTtcbiAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuX3NvcnQucmV2ZXJzZSgpKSB7XG4gICAgICB0aGlzLnNvcnRPbihpdGVtLmZpZWxkLCBpdGVtLnJldmVyc2UpO1xuICAgIH1cbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fZmlsdGVyKSB7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHRoaXMuZmlsdGVyT24oa2V5LCB0aGlzLl9maWx0ZXJba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LkNIQU5HRSwgdGhpcy5maWx0ZXJEYXRhKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBBcnJheSBhbnkgcmVwcmVzZW50YXRpb24gb2YgdGhlIGRhdGEgdGhhdCB0aGUgZGF0YSBwcm92aWRlciBjb250YWlucy5cbiAgICpcbiAgICogQG1lbWJlck9mIEFycmF5Q29sbGVjdGlvblxuICAgKi9cbiAgdG9BcnJheSgpOiBBcnJheTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YSA6IHRoaXMuc291cmNlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGEgOiB0aGlzLnNvdXJjZTtcbiAgfVxufVxuIl19