/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZWRBcnJheUNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvZGF0YS1wcm92aWRlci9QYWdlZEFycmF5Q29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVwRCxNQUFNLE9BQU8sb0JBQXdCLFNBQVEsZUFBa0I7Ozs7SUFLN0QsWUFBWSxTQUFtQixFQUFFO1FBQy9CLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUxoQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGNBQVMsR0FBVyxFQUFFLENBQUM7SUFJdkIsQ0FBQzs7OztJQUVELElBQUksYUFBYTs7WUFDWCxNQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVE7UUFDdkQsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELElBQUksSUFBSSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLFFBQVEsQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtZQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0UsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkM7UUFDRCxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDNUIsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Y7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFOztnQkFDZCxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFROztnQkFDdkMsR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUTs7Z0JBQzNCLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1lBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDakY7SUFDSCxDQUFDO0NBQ0Y7OztJQW5GQyxxQ0FBa0I7O0lBQ2xCLDhDQUEyQjs7SUFDM0IseUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFycmF5Q29sbGVjdGlvbiB9IGZyb20gJy4vQXJyYXlDb2xsZWN0aW9uJztcbmltcG9ydCB7IFBhZ2VkQ29sbGVjdGlvbiB9IGZyb20gJy4vUGFnZWRDb2xsZWN0aW9uJztcbmltcG9ydCB7IENvbGxlY3Rpb25FdmVudCB9IGZyb20gJy4vQ29sbGVjdGlvbkV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFBhZ2VkQXJyYXlDb2xsZWN0aW9uPFQ+IGV4dGVuZHMgQXJyYXlDb2xsZWN0aW9uPFQ+IGltcGxlbWVudHMgUGFnZWRDb2xsZWN0aW9uPFQ+IHtcbiAgX3BhZ2U6IG51bWJlciA9IDE7XG4gIF9udW1iZXJPZlBhZ2VzOiBudW1iZXIgPSAxO1xuICBfcGFnZVNpemU6IG51bWJlciA9IDEwO1xuXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTogQXJyYXk8VD4gPSBbXSkge1xuICAgIHN1cGVyKHNvdXJjZSk7XG4gIH1cblxuICBnZXQgbnVtYmVyT2ZQYWdlcygpOiBudW1iZXIge1xuICAgIGxldCByZXN1bHQ6IG51bWJlciA9IHRoaXMuc291cmNlLmxlbmd0aCAvIHRoaXMucGFnZVNpemU7XG4gICAgcmVzdWx0ID0gTWF0aC5jZWlsKHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldCBwYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cblxuICBzZXQgcGFnZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZSA9IHZhbHVlO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgZ2V0IHBhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplO1xuICB9XG5cbiAgc2V0IHBhZ2VTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlU2l6ZSA9IHZhbHVlO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgbmV4dCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLnBhZ2UgPT09IHRoaXMubnVtYmVyT2ZQYWdlcykge1xuICAgICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgICB9XG4gICAgdGhpcy5wYWdlKys7XG4gICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgfVxuXG4gIHByZXYoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5fcGFnZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgICB9XG4gICAgdGhpcy5wYWdlLS07XG4gICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgfVxuXG4gIGZpcnN0KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMucGFnZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgICB9XG4gICAgdGhpcy5wYWdlID0gMTtcbiAgICByZXR1cm4gdGhpcy5wYWdlO1xuICB9XG5cbiAgbGFzdCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLnBhZ2UgPT09IHRoaXMubnVtYmVyT2ZQYWdlcykge1xuICAgICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgICB9XG4gICAgdGhpcy5wYWdlID0gdGhpcy5udW1iZXJPZlBhZ2VzO1xuICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gIH1cblxuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuaXNFZGl0aW5nID8gdGhpcy5lZGl0RGF0YS5zbGljZSgpIDogdGhpcy5zb3VyY2Uuc2xpY2UoKTtcbiAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuX3NvcnQucmV2ZXJzZSgpKSB7XG4gICAgICB0aGlzLnNvcnRPbihpdGVtLmZpZWxkLCBpdGVtLnJldmVyc2UpO1xuICAgIH1cbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fZmlsdGVyKSB7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHRoaXMuZmlsdGVyT24oa2V5LCB0aGlzLl9maWx0ZXJba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2UgPj0gMCkge1xuICAgICAgbGV0IHN0YXJ0ID0gKHRoaXMucGFnZSAtIDEpICogdGhpcy5wYWdlU2l6ZTtcbiAgICAgIGxldCBlbmQgPSBzdGFydCArIHRoaXMucGFnZVNpemU7XG4gICAgICBsZXQgcmVzdWx0ID0gdGhpcy5maWx0ZXJEYXRhLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgICAgdGhpcy5vbkRhdGFDaGFuZ2UobmV3IENvbGxlY3Rpb25FdmVudChDb2xsZWN0aW9uRXZlbnQuQ0hBTkdFLCByZXN1bHQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkRhdGFDaGFuZ2UobmV3IENvbGxlY3Rpb25FdmVudChDb2xsZWN0aW9uRXZlbnQuQ0hBTkdFLCB0aGlzLmZpbHRlckRhdGEpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==