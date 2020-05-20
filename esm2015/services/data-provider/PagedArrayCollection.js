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
        for (const item of this._sort.reverse()) {
            this.sortOn(item.field, item.reverse);
        }
        for (const key in this._filter) {
            if (key) {
                this.filterOn(key, this._filter[key]);
            }
        }
        if (this.page >= 0) {
            /** @type {?} */
            const start = (this.page - 1) * this.pageSize;
            /** @type {?} */
            const end = start + this.pageSize;
            /** @type {?} */
            const result = this.filterData.slice(start, end);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZWRBcnJheUNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvZGF0YS1wcm92aWRlci9QYWdlZEFycmF5Q29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFHcEQsTUFBTSxPQUFPLG9CQUF3QixTQUFRLGVBQWtCOzs7O0lBSzdELFlBQVksU0FBbUIsRUFBRTtRQUMvQixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFMaEIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMzQixjQUFTLEdBQVcsRUFBRSxDQUFDO0lBSXZCLENBQUM7Ozs7SUFFRCxJQUFJLGFBQWE7O1lBQ1gsTUFBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRO1FBQ3ZELE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLElBQUksQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9FLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzlCLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN2QztTQUNGO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTs7a0JBQ1osS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUTs7a0JBQ3ZDLEdBQUcsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVE7O2tCQUMzQixNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztZQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN4RTthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ2pGO0lBQ0gsQ0FBQztDQUNGOzs7SUFuRkMscUNBQWtCOztJQUNsQiw4Q0FBMkI7O0lBQzNCLHlDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFycmF5Q29sbGVjdGlvbiB9IGZyb20gJy4vQXJyYXlDb2xsZWN0aW9uJztcbmltcG9ydCB7IENvbGxlY3Rpb25FdmVudCB9IGZyb20gJy4vQ29sbGVjdGlvbkV2ZW50JztcbmltcG9ydCB7IFBhZ2VkQ29sbGVjdGlvbiB9IGZyb20gJy4vUGFnZWRDb2xsZWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIFBhZ2VkQXJyYXlDb2xsZWN0aW9uPFQ+IGV4dGVuZHMgQXJyYXlDb2xsZWN0aW9uPFQ+IGltcGxlbWVudHMgUGFnZWRDb2xsZWN0aW9uPFQ+IHtcbiAgX3BhZ2U6IG51bWJlciA9IDE7XG4gIF9udW1iZXJPZlBhZ2VzOiBudW1iZXIgPSAxO1xuICBfcGFnZVNpemU6IG51bWJlciA9IDEwO1xuXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTogQXJyYXk8VD4gPSBbXSkge1xuICAgIHN1cGVyKHNvdXJjZSk7XG4gIH1cblxuICBnZXQgbnVtYmVyT2ZQYWdlcygpOiBudW1iZXIge1xuICAgIGxldCByZXN1bHQ6IG51bWJlciA9IHRoaXMuc291cmNlLmxlbmd0aCAvIHRoaXMucGFnZVNpemU7XG4gICAgcmVzdWx0ID0gTWF0aC5jZWlsKHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldCBwYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cblxuICBzZXQgcGFnZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZSA9IHZhbHVlO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgZ2V0IHBhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplO1xuICB9XG5cbiAgc2V0IHBhZ2VTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlU2l6ZSA9IHZhbHVlO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgbmV4dCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLnBhZ2UgPT09IHRoaXMubnVtYmVyT2ZQYWdlcykge1xuICAgICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgICB9XG4gICAgdGhpcy5wYWdlKys7XG4gICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgfVxuXG4gIHByZXYoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5fcGFnZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgICB9XG4gICAgdGhpcy5wYWdlLS07XG4gICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgfVxuXG4gIGZpcnN0KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMucGFnZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgICB9XG4gICAgdGhpcy5wYWdlID0gMTtcbiAgICByZXR1cm4gdGhpcy5wYWdlO1xuICB9XG5cbiAgbGFzdCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLnBhZ2UgPT09IHRoaXMubnVtYmVyT2ZQYWdlcykge1xuICAgICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgICB9XG4gICAgdGhpcy5wYWdlID0gdGhpcy5udW1iZXJPZlBhZ2VzO1xuICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gIH1cblxuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YS5zbGljZSgpIDogdGhpcy5zb3VyY2Uuc2xpY2UoKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5fc29ydC5yZXZlcnNlKCkpIHtcbiAgICAgIHRoaXMuc29ydE9uKGl0ZW0uZmllbGQsIGl0ZW0ucmV2ZXJzZSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX2ZpbHRlcikge1xuICAgICAgaWYgKGtleSkge1xuICAgICAgICB0aGlzLmZpbHRlck9uKGtleSwgdGhpcy5fZmlsdGVyW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5wYWdlID49IDApIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gKHRoaXMucGFnZSAtIDEpICogdGhpcy5wYWdlU2l6ZTtcbiAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgdGhpcy5wYWdlU2l6ZTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZmlsdGVyRGF0YS5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LkNIQU5HRSwgcmVzdWx0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25EYXRhQ2hhbmdlKG5ldyBDb2xsZWN0aW9uRXZlbnQoQ29sbGVjdGlvbkV2ZW50LkNIQU5HRSwgdGhpcy5maWx0ZXJEYXRhKSk7XG4gICAgfVxuICB9XG59XG4iXX0=