/**
 * @fileoverview added by tsickle
 * Generated from: services/data-provider/PagedArrayCollection.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ArrayCollection } from './ArrayCollection';
import { CollectionEvent } from './CollectionEvent';
/**
 * @template T
 */
var /**
 * @template T
 */
PagedArrayCollection = /** @class */ (function (_super) {
    tslib_1.__extends(PagedArrayCollection, _super);
    function PagedArrayCollection(source) {
        if (source === void 0) { source = []; }
        var _this = _super.call(this, source) || this;
        _this._page = 1;
        _this._numberOfPages = 1;
        _this._pageSize = 10;
        return _this;
    }
    Object.defineProperty(PagedArrayCollection.prototype, "numberOfPages", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = this.source.length / this.pageSize;
            result = Math.ceil(result);
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagedArrayCollection.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._page = value;
            this.refresh();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagedArrayCollection.prototype, "pageSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageSize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pageSize = value;
            this.refresh();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PagedArrayCollection.prototype.next = /**
     * @return {?}
     */
    function () {
        if (this.page === this.numberOfPages) {
            return this.page;
        }
        this.page++;
        return this.page;
    };
    /**
     * @return {?}
     */
    PagedArrayCollection.prototype.prev = /**
     * @return {?}
     */
    function () {
        if (this._page === 1) {
            return this.page;
        }
        this.page--;
        return this.page;
    };
    /**
     * @return {?}
     */
    PagedArrayCollection.prototype.first = /**
     * @return {?}
     */
    function () {
        if (this.page === 1) {
            return this.page;
        }
        this.page = 1;
        return this.page;
    };
    /**
     * @return {?}
     */
    PagedArrayCollection.prototype.last = /**
     * @return {?}
     */
    function () {
        if (this.page === this.numberOfPages) {
            return this.page;
        }
        this.page = this.numberOfPages;
        return this.page;
    };
    /**
     * @return {?}
     */
    PagedArrayCollection.prototype.refresh = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        this.filterData = this.isEditing ? this.editData.slice() : this.source.slice();
        try {
            for (var _b = tslib_1.__values(this._sort.reverse()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                this.sortOn(item.field, item.reverse);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        for (var key in this._filter) {
            if (key) {
                this.filterOn(key, this._filter[key]);
            }
        }
        if (this.page >= 0) {
            /** @type {?} */
            var start = (this.page - 1) * this.pageSize;
            /** @type {?} */
            var end = start + this.pageSize;
            /** @type {?} */
            var result = this.filterData.slice(start, end);
            this.onDataChange(new CollectionEvent(CollectionEvent.CHANGE, result));
        }
        else {
            this.onDataChange(new CollectionEvent(CollectionEvent.CHANGE, this.filterData));
        }
    };
    return PagedArrayCollection;
}(ArrayCollection));
/**
 * @template T
 */
export { PagedArrayCollection };
if (false) {
    /** @type {?} */
    PagedArrayCollection.prototype._page;
    /** @type {?} */
    PagedArrayCollection.prototype._numberOfPages;
    /** @type {?} */
    PagedArrayCollection.prototype._pageSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZWRBcnJheUNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvZGF0YS1wcm92aWRlci9QYWdlZEFycmF5Q29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRXBEOzs7O0lBQTZDLGdEQUFrQjtJQUs3RCw4QkFBWSxNQUFxQjtRQUFyQix1QkFBQSxFQUFBLFdBQXFCO1FBQWpDLFlBQ0Usa0JBQU0sTUFBTSxDQUFDLFNBQ2Q7UUFORCxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGVBQVMsR0FBVyxFQUFFLENBQUM7O0lBSXZCLENBQUM7SUFFRCxzQkFBSSwrQ0FBYTs7OztRQUFqQjs7Z0JBQ00sTUFBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRO1lBQ3ZELE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0NBQUk7Ozs7UUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7OztRQUVELFVBQVMsS0FBYTtZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQzs7O09BTEE7SUFPRCxzQkFBSSwwQ0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBRUQsVUFBYSxLQUFhO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdB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dCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXJyYXlDb2xsZWN0aW9uIH0gZnJvbSAnLi9BcnJheUNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgUGFnZWRDb2xsZWN0aW9uIH0gZnJvbSAnLi9QYWdlZENvbGxlY3Rpb24nO1xuaW1wb3J0IHsgQ29sbGVjdGlvbkV2ZW50IH0gZnJvbSAnLi9Db2xsZWN0aW9uRXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgUGFnZWRBcnJheUNvbGxlY3Rpb248VD4gZXh0ZW5kcyBBcnJheUNvbGxlY3Rpb248VD4gaW1wbGVtZW50cyBQYWdlZENvbGxlY3Rpb248VD4ge1xuICBfcGFnZTogbnVtYmVyID0gMTtcbiAgX251bWJlck9mUGFnZXM6IG51bWJlciA9IDE7XG4gIF9wYWdlU2l6ZTogbnVtYmVyID0gMTA7XG5cbiAgY29uc3RydWN0b3Ioc291cmNlOiBBcnJheTxUPiA9IFtdKSB7XG4gICAgc3VwZXIoc291cmNlKTtcbiAgfVxuXG4gIGdldCBudW1iZXJPZlBhZ2VzKCk6IG51bWJlciB7XG4gICAgbGV0IHJlc3VsdDogbnVtYmVyID0gdGhpcy5zb3VyY2UubGVuZ3RoIC8gdGhpcy5wYWdlU2l6ZTtcbiAgICByZXN1bHQgPSBNYXRoLmNlaWwocmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0IHBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuXG4gIHNldCBwYWdlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlID0gdmFsdWU7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBnZXQgcGFnZVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVNpemU7XG4gIH1cblxuICBzZXQgcGFnZVNpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2VTaXplID0gdmFsdWU7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBuZXh0KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMucGFnZSA9PT0gdGhpcy5udW1iZXJPZlBhZ2VzKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYWdlO1xuICAgIH1cbiAgICB0aGlzLnBhZ2UrKztcbiAgICByZXR1cm4gdGhpcy5wYWdlO1xuICB9XG5cbiAgcHJldigpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLl9wYWdlID09PSAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYWdlO1xuICAgIH1cbiAgICB0aGlzLnBhZ2UtLTtcbiAgICByZXR1cm4gdGhpcy5wYWdlO1xuICB9XG5cbiAgZmlyc3QoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5wYWdlID09PSAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYWdlO1xuICAgIH1cbiAgICB0aGlzLnBhZ2UgPSAxO1xuICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gIH1cblxuICBsYXN0KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMucGFnZSA9PT0gdGhpcy5udW1iZXJPZlBhZ2VzKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYWdlO1xuICAgIH1cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLm51bWJlck9mUGFnZXM7XG4gICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgfVxuXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhLnNsaWNlKCkgOiB0aGlzLnNvdXJjZS5zbGljZSgpO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5fc29ydC5yZXZlcnNlKCkpIHtcbiAgICAgIHRoaXMuc29ydE9uKGl0ZW0uZmllbGQsIGl0ZW0ucmV2ZXJzZSk7XG4gICAgfVxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9maWx0ZXIpIHtcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJPbihrZXksIHRoaXMuX2ZpbHRlcltrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucGFnZSA+PSAwKSB7XG4gICAgICBsZXQgc3RhcnQgPSAodGhpcy5wYWdlIC0gMSkgKiB0aGlzLnBhZ2VTaXplO1xuICAgICAgbGV0IGVuZCA9IHN0YXJ0ICsgdGhpcy5wYWdlU2l6ZTtcbiAgICAgIGxldCByZXN1bHQgPSB0aGlzLmZpbHRlckRhdGEuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5DSEFOR0UsIHJlc3VsdCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5DSEFOR0UsIHRoaXMuZmlsdGVyRGF0YSkpO1xuICAgIH1cbiAgfVxufVxuIl19