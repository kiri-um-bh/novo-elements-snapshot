/**
 * @fileoverview added by tsickle
 * Generated from: services/data-provider/PagedArrayCollection.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ArrayCollection } from './ArrayCollection';
import { CollectionEvent } from './CollectionEvent';
/**
 * @template T
 */
export class PagedArrayCollection extends ArrayCollection {
    /**
     * @param {?=} source
     */
    constructor(source = []) {
        super(source);
        this._page = 1;
        this._numberOfPages = 1;
        this._pageSize = 10;
    }
    /**
     * @return {?}
     */
    get numberOfPages() {
        /** @type {?} */
        let result = this.source.length / this.pageSize;
        result = Math.ceil(result);
        return result;
    }
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        this._page = value;
        this.refresh();
    }
    /**
     * @return {?}
     */
    get pageSize() {
        return this._pageSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set pageSize(value) {
        this._pageSize = value;
        this.refresh();
    }
    /**
     * @return {?}
     */
    next() {
        if (this.page === this.numberOfPages) {
            return this.page;
        }
        this.page++;
        return this.page;
    }
    /**
     * @return {?}
     */
    prev() {
        if (this._page === 1) {
            return this.page;
        }
        this.page--;
        return this.page;
    }
    /**
     * @return {?}
     */
    first() {
        if (this.page === 1) {
            return this.page;
        }
        this.page = 1;
        return this.page;
    }
    /**
     * @return {?}
     */
    last() {
        if (this.page === this.numberOfPages) {
            return this.page;
        }
        this.page = this.numberOfPages;
        return this.page;
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
        if (this.page >= 0) {
            /** @type {?} */
            let start = (this.page - 1) * this.pageSize;
            /** @type {?} */
            let end = start + this.pageSize;
            /** @type {?} */
            let result = this.filterData.slice(start, end);
            this.onDataChange(new CollectionEvent(CollectionEvent.CHANGE, result));
        }
        else {
            this.onDataChange(new CollectionEvent(CollectionEvent.CHANGE, this.filterData));
        }
    }
}
if (false) {
    /** @type {?} */
    PagedArrayCollection.prototype._page;
    /** @type {?} */
    PagedArrayCollection.prototype._numberOfPages;
    /** @type {?} */
    PagedArrayCollection.prototype._pageSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZWRBcnJheUNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvZGF0YS1wcm92aWRlci9QYWdlZEFycmF5Q29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFcEQsTUFBTSxPQUFPLG9CQUF3QixTQUFRLGVBQWtCOzs7O0lBSzdELFlBQVksU0FBbUIsRUFBRTtRQUMvQixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFMaEIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMzQixjQUFTLEdBQVcsRUFBRSxDQUFDO0lBSXZCLENBQUM7Ozs7SUFFRCxJQUFJLGFBQWE7O1lBQ1gsTUFBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRO1FBQ3ZELE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLElBQUksQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9FLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzVCLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN2QztTQUNGO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTs7Z0JBQ2QsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUTs7Z0JBQ3ZDLEdBQUcsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVE7O2dCQUMzQixNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztZQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN4RTthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ2pGO0lBQ0gsQ0FBQztDQUNGOzs7SUFuRkMscUNBQWtCOztJQUNsQiw4Q0FBMkI7O0lBQzNCLHlDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBcnJheUNvbGxlY3Rpb24gfSBmcm9tICcuL0FycmF5Q29sbGVjdGlvbic7XG5pbXBvcnQgeyBQYWdlZENvbGxlY3Rpb24gfSBmcm9tICcuL1BhZ2VkQ29sbGVjdGlvbic7XG5pbXBvcnQgeyBDb2xsZWN0aW9uRXZlbnQgfSBmcm9tICcuL0NvbGxlY3Rpb25FdmVudCc7XG5cbmV4cG9ydCBjbGFzcyBQYWdlZEFycmF5Q29sbGVjdGlvbjxUPiBleHRlbmRzIEFycmF5Q29sbGVjdGlvbjxUPiBpbXBsZW1lbnRzIFBhZ2VkQ29sbGVjdGlvbjxUPiB7XG4gIF9wYWdlOiBudW1iZXIgPSAxO1xuICBfbnVtYmVyT2ZQYWdlczogbnVtYmVyID0gMTtcbiAgX3BhZ2VTaXplOiBudW1iZXIgPSAxMDtcblxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IEFycmF5PFQ+ID0gW10pIHtcbiAgICBzdXBlcihzb3VyY2UpO1xuICB9XG5cbiAgZ2V0IG51bWJlck9mUGFnZXMoKTogbnVtYmVyIHtcbiAgICBsZXQgcmVzdWx0OiBudW1iZXIgPSB0aGlzLnNvdXJjZS5sZW5ndGggLyB0aGlzLnBhZ2VTaXplO1xuICAgIHJlc3VsdCA9IE1hdGguY2VpbChyZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXQgcGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIGdldCBwYWdlU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZTtcbiAgfVxuXG4gIHNldCBwYWdlU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZVNpemUgPSB2YWx1ZTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIG5leHQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5wYWdlID09PSB0aGlzLm51bWJlck9mUGFnZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gICAgfVxuICAgIHRoaXMucGFnZSsrO1xuICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gIH1cblxuICBwcmV2KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuX3BhZ2UgPT09IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gICAgfVxuICAgIHRoaXMucGFnZS0tO1xuICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gIH1cblxuICBmaXJzdCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLnBhZ2UgPT09IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gICAgfVxuICAgIHRoaXMucGFnZSA9IDE7XG4gICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgfVxuXG4gIGxhc3QoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5wYWdlID09PSB0aGlzLm51bWJlck9mUGFnZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gICAgfVxuICAgIHRoaXMucGFnZSA9IHRoaXMubnVtYmVyT2ZQYWdlcztcbiAgICByZXR1cm4gdGhpcy5wYWdlO1xuICB9XG5cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlckRhdGEgPSB0aGlzLmlzRWRpdGluZyA/IHRoaXMuZWRpdERhdGEuc2xpY2UoKSA6IHRoaXMuc291cmNlLnNsaWNlKCk7XG4gICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLl9zb3J0LnJldmVyc2UoKSkge1xuICAgICAgdGhpcy5zb3J0T24oaXRlbS5maWVsZCwgaXRlbS5yZXZlcnNlKTtcbiAgICB9XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuX2ZpbHRlcikge1xuICAgICAgaWYgKGtleSkge1xuICAgICAgICB0aGlzLmZpbHRlck9uKGtleSwgdGhpcy5fZmlsdGVyW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5wYWdlID49IDApIHtcbiAgICAgIGxldCBzdGFydCA9ICh0aGlzLnBhZ2UgLSAxKSAqIHRoaXMucGFnZVNpemU7XG4gICAgICBsZXQgZW5kID0gc3RhcnQgKyB0aGlzLnBhZ2VTaXplO1xuICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuZmlsdGVyRGF0YS5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LkNIQU5HRSwgcmVzdWx0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LkNIQU5HRSwgdGhpcy5maWx0ZXJEYXRhKSk7XG4gICAgfVxuICB9XG59XG4iXX0=