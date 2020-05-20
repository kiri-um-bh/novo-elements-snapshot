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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZWRBcnJheUNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvZGF0YS1wcm92aWRlci9QYWdlZEFycmF5Q29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBR3BEOzs7O0lBQTZDLGdEQUFrQjtJQUs3RCw4QkFBWSxNQUFxQjtRQUFyQix1QkFBQSxFQUFBLFdBQXFCO1FBQWpDLFlBQ0Usa0JBQU0sTUFBTSxDQUFDLFNBQ2Q7UUFORCxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGVBQVMsR0FBVyxFQUFFLENBQUM7O0lBSXZCLENBQUM7SUFFRCxzQkFBSSwrQ0FBYTs7OztRQUFqQjs7Z0JBQ00sTUFBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRO1lBQ3ZELE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0NBQUk7Ozs7UUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7OztRQUVELFVBQVMsS0FBYTtZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQzs7O09BTEE7SUFPRCxzQkFBSSwwQ0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBRUQsVUFBYSxLQUFhO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdB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dCI6WyJpbXBvcnQgeyBBcnJheUNvbGxlY3Rpb24gfSBmcm9tICcuL0FycmF5Q29sbGVjdGlvbic7XG5pbXBvcnQgeyBDb2xsZWN0aW9uRXZlbnQgfSBmcm9tICcuL0NvbGxlY3Rpb25FdmVudCc7XG5pbXBvcnQgeyBQYWdlZENvbGxlY3Rpb24gfSBmcm9tICcuL1BhZ2VkQ29sbGVjdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBQYWdlZEFycmF5Q29sbGVjdGlvbjxUPiBleHRlbmRzIEFycmF5Q29sbGVjdGlvbjxUPiBpbXBsZW1lbnRzIFBhZ2VkQ29sbGVjdGlvbjxUPiB7XG4gIF9wYWdlOiBudW1iZXIgPSAxO1xuICBfbnVtYmVyT2ZQYWdlczogbnVtYmVyID0gMTtcbiAgX3BhZ2VTaXplOiBudW1iZXIgPSAxMDtcblxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IEFycmF5PFQ+ID0gW10pIHtcbiAgICBzdXBlcihzb3VyY2UpO1xuICB9XG5cbiAgZ2V0IG51bWJlck9mUGFnZXMoKTogbnVtYmVyIHtcbiAgICBsZXQgcmVzdWx0OiBudW1iZXIgPSB0aGlzLnNvdXJjZS5sZW5ndGggLyB0aGlzLnBhZ2VTaXplO1xuICAgIHJlc3VsdCA9IE1hdGguY2VpbChyZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXQgcGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIGdldCBwYWdlU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZTtcbiAgfVxuXG4gIHNldCBwYWdlU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZVNpemUgPSB2YWx1ZTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIG5leHQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5wYWdlID09PSB0aGlzLm51bWJlck9mUGFnZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gICAgfVxuICAgIHRoaXMucGFnZSsrO1xuICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gIH1cblxuICBwcmV2KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuX3BhZ2UgPT09IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gICAgfVxuICAgIHRoaXMucGFnZS0tO1xuICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gIH1cblxuICBmaXJzdCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLnBhZ2UgPT09IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gICAgfVxuICAgIHRoaXMucGFnZSA9IDE7XG4gICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgfVxuXG4gIGxhc3QoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5wYWdlID09PSB0aGlzLm51bWJlck9mUGFnZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gICAgfVxuICAgIHRoaXMucGFnZSA9IHRoaXMubnVtYmVyT2ZQYWdlcztcbiAgICByZXR1cm4gdGhpcy5wYWdlO1xuICB9XG5cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlckRhdGEgPSB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGEuc2xpY2UoKSA6IHRoaXMuc291cmNlLnNsaWNlKCk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuX3NvcnQucmV2ZXJzZSgpKSB7XG4gICAgICB0aGlzLnNvcnRPbihpdGVtLmZpZWxkLCBpdGVtLnJldmVyc2UpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9maWx0ZXIpIHtcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJPbihrZXksIHRoaXMuX2ZpbHRlcltrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucGFnZSA+PSAwKSB7XG4gICAgICBjb25zdCBzdGFydCA9ICh0aGlzLnBhZ2UgLSAxKSAqIHRoaXMucGFnZVNpemU7XG4gICAgICBjb25zdCBlbmQgPSBzdGFydCArIHRoaXMucGFnZVNpemU7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmZpbHRlckRhdGEuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5DSEFOR0UsIHJlc3VsdCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uRGF0YUNoYW5nZShuZXcgQ29sbGVjdGlvbkV2ZW50KENvbGxlY3Rpb25FdmVudC5DSEFOR0UsIHRoaXMuZmlsdGVyRGF0YSkpO1xuICAgIH1cbiAgfVxufVxuIl19