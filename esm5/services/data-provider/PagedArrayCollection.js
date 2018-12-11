/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZWRBcnJheUNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvZGF0YS1wcm92aWRlci9QYWdlZEFycmF5Q29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFcEQ7Ozs7SUFBNkMsZ0RBQWtCO0lBSzdELDhCQUFZLE1BQXFCO1FBQXJCLHVCQUFBLEVBQUEsV0FBcUI7UUFBakMsWUFDRSxrQkFBTSxNQUFNLENBQUMsU0FDZDtRQU5ELFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IsZUFBUyxHQUFXLEVBQUUsQ0FBQzs7SUFJdkIsQ0FBQztJQUVELHNCQUFJLCtDQUFhOzs7O1FBQWpCOztnQkFDTSxNQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVE7WUFDdkQsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxzQ0FBSTs7OztRQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7Ozs7O1FBRUQsVUFBUyxLQUFhO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixDQUFDOzs7T0FMQTtJQU9ELHNCQUFJLDBDQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFFRCxVQUFhLEtBQWE7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLENBQUM7OztPQUxBOzs7O0lBT0QsbUNBQUk7OztJQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxtQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsb0NBQUs7OztJQUFMO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtZQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsbUNBQUk7OztJQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsc0NBQU87OztJQUFQOztRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7WUFDL0UsS0FBaUIsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQWxDLElBQUksSUFBSSxXQUFBO2dCQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdkM7Ozs7Ozs7OztRQUNELEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM1QixJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkM7U0FDRjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7O2dCQUNkLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVE7O2dCQUN2QyxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFROztnQkFDM0IsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7WUFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDeEU7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUNqRjtJQUNILENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFwRkQsQ0FBNkMsZUFBZSxHQW9GM0Q7Ozs7Ozs7SUFuRkMscUNBQWtCOztJQUNsQiw4Q0FBMkI7O0lBQzNCLHlDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBcnJheUNvbGxlY3Rpb24gfSBmcm9tICcuL0FycmF5Q29sbGVjdGlvbic7XG5pbXBvcnQgeyBQYWdlZENvbGxlY3Rpb24gfSBmcm9tICcuL1BhZ2VkQ29sbGVjdGlvbic7XG5pbXBvcnQgeyBDb2xsZWN0aW9uRXZlbnQgfSBmcm9tICcuL0NvbGxlY3Rpb25FdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBQYWdlZEFycmF5Q29sbGVjdGlvbjxUPiBleHRlbmRzIEFycmF5Q29sbGVjdGlvbjxUPiBpbXBsZW1lbnRzIFBhZ2VkQ29sbGVjdGlvbjxUPiB7XG4gIF9wYWdlOiBudW1iZXIgPSAxO1xuICBfbnVtYmVyT2ZQYWdlczogbnVtYmVyID0gMTtcbiAgX3BhZ2VTaXplOiBudW1iZXIgPSAxMDtcblxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IEFycmF5PFQ+ID0gW10pIHtcbiAgICBzdXBlcihzb3VyY2UpO1xuICB9XG5cbiAgZ2V0IG51bWJlck9mUGFnZXMoKTogbnVtYmVyIHtcbiAgICBsZXQgcmVzdWx0OiBudW1iZXIgPSB0aGlzLnNvdXJjZS5sZW5ndGggLyB0aGlzLnBhZ2VTaXplO1xuICAgIHJlc3VsdCA9IE1hdGguY2VpbChyZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXQgcGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIGdldCBwYWdlU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZTtcbiAgfVxuXG4gIHNldCBwYWdlU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZVNpemUgPSB2YWx1ZTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIG5leHQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5wYWdlID09PSB0aGlzLm51bWJlck9mUGFnZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gICAgfVxuICAgIHRoaXMucGFnZSsrO1xuICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gIH1cblxuICBwcmV2KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuX3BhZ2UgPT09IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gICAgfVxuICAgIHRoaXMucGFnZS0tO1xuICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gIH1cblxuICBmaXJzdCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLnBhZ2UgPT09IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gICAgfVxuICAgIHRoaXMucGFnZSA9IDE7XG4gICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgfVxuXG4gIGxhc3QoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5wYWdlID09PSB0aGlzLm51bWJlck9mUGFnZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gICAgfVxuICAgIHRoaXMucGFnZSA9IHRoaXMubnVtYmVyT2ZQYWdlcztcbiAgICByZXR1cm4gdGhpcy5wYWdlO1xuICB9XG5cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlckRhdGEgPSB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGEuc2xpY2UoKSA6IHRoaXMuc291cmNlLnNsaWNlKCk7XG4gICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLl9zb3J0LnJldmVyc2UoKSkge1xuICAgICAgdGhpcy5zb3J0T24oaXRlbS5maWVsZCwgaXRlbS5yZXZlcnNlKTtcbiAgICB9XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuX2ZpbHRlcikge1xuICAgICAgaWYgKGtleSkge1xuICAgICAgICB0aGlzLmZpbHRlck9uKGtleSwgdGhpcy5fZmlsdGVyW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5wYWdlID49IDApIHtcbiAgICAgIGxldCBzdGFydCA9ICh0aGlzLnBhZ2UgLSAxKSAqIHRoaXMucGFnZVNpemU7XG4gICAgICBsZXQgZW5kID0gc3RhcnQgKyB0aGlzLnBhZ2VTaXplO1xuICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuZmlsdGVyRGF0YS5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LkNIQU5HRSwgcmVzdWx0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LkNIQU5HRSwgdGhpcy5maWx0ZXJEYXRhKSk7XG4gICAgfVxuICB9XG59XG4iXX0=