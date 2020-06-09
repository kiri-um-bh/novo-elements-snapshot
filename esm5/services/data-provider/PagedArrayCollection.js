import { __extends, __values } from "tslib";
import { ArrayCollection } from './ArrayCollection';
import { CollectionEvent } from './CollectionEvent';
var PagedArrayCollection = /** @class */ (function (_super) {
    __extends(PagedArrayCollection, _super);
    function PagedArrayCollection(source) {
        if (source === void 0) { source = []; }
        var _this = _super.call(this, source) || this;
        _this._page = 1;
        _this._numberOfPages = 1;
        _this._pageSize = 10;
        return _this;
    }
    Object.defineProperty(PagedArrayCollection.prototype, "numberOfPages", {
        get: function () {
            var result = this.source.length / this.pageSize;
            result = Math.ceil(result);
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagedArrayCollection.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            this._page = value;
            this.refresh();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagedArrayCollection.prototype, "pageSize", {
        get: function () {
            return this._pageSize;
        },
        set: function (value) {
            this._pageSize = value;
            this.refresh();
        },
        enumerable: true,
        configurable: true
    });
    PagedArrayCollection.prototype.next = function () {
        if (this.page === this.numberOfPages) {
            return this.page;
        }
        this.page++;
        return this.page;
    };
    PagedArrayCollection.prototype.prev = function () {
        if (this._page === 1) {
            return this.page;
        }
        this.page--;
        return this.page;
    };
    PagedArrayCollection.prototype.first = function () {
        if (this.page === 1) {
            return this.page;
        }
        this.page = 1;
        return this.page;
    };
    PagedArrayCollection.prototype.last = function () {
        if (this.page === this.numberOfPages) {
            return this.page;
        }
        this.page = this.numberOfPages;
        return this.page;
    };
    PagedArrayCollection.prototype.refresh = function () {
        var e_1, _a;
        this.filterData = this.isEditing ? this.editData.slice() : this.source.slice();
        try {
            for (var _b = __values(this._sort.reverse()), _c = _b.next(); !_c.done; _c = _b.next()) {
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
            var start = (this.page - 1) * this.pageSize;
            var end = start + this.pageSize;
            var result = this.filterData.slice(start, end);
            this.onDataChange(new CollectionEvent(CollectionEvent.CHANGE, result));
        }
        else {
            this.onDataChange(new CollectionEvent(CollectionEvent.CHANGE, this.filterData));
        }
    };
    return PagedArrayCollection;
}(ArrayCollection));
export { PagedArrayCollection };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZWRBcnJheUNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvZGF0YS1wcm92aWRlci9QYWdlZEFycmF5Q29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdwRDtJQUE2Qyx3Q0FBa0I7SUFLN0QsOEJBQVksTUFBcUI7UUFBckIsdUJBQUEsRUFBQSxXQUFxQjtRQUFqQyxZQUNFLGtCQUFNLE1BQU0sQ0FBQyxTQUNkO1FBTkQsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixvQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMzQixlQUFTLEdBQVcsRUFBRSxDQUFDOztJQUl2QixDQUFDO0lBRUQsc0JBQUksK0NBQWE7YUFBakI7WUFDRSxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3hELE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0NBQUk7YUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO2FBRUQsVUFBUyxLQUFhO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixDQUFDOzs7T0FMQTtJQU9ELHNCQUFJLDBDQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzthQUVELFVBQWEsS0FBYTtZQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQzs7O09BTEE7SUFPRCxtQ0FBSSxHQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxtQ0FBSSxHQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELG9DQUFLLEdBQUw7UUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxtQ0FBSSxHQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsc0NBQU8sR0FBUDs7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7O1lBQy9FLEtBQW1CLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXBDLElBQU0sSUFBSSxXQUFBO2dCQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdkM7Ozs7Ozs7OztRQUNELEtBQUssSUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM5QixJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkM7U0FDRjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDbEIsSUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDOUMsSUFBTSxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDakY7SUFDSCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBcEZELENBQTZDLGVBQWUsR0FvRjNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXJyYXlDb2xsZWN0aW9uIH0gZnJvbSAnLi9BcnJheUNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgQ29sbGVjdGlvbkV2ZW50IH0gZnJvbSAnLi9Db2xsZWN0aW9uRXZlbnQnO1xuaW1wb3J0IHsgUGFnZWRDb2xsZWN0aW9uIH0gZnJvbSAnLi9QYWdlZENvbGxlY3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgUGFnZWRBcnJheUNvbGxlY3Rpb248VD4gZXh0ZW5kcyBBcnJheUNvbGxlY3Rpb248VD4gaW1wbGVtZW50cyBQYWdlZENvbGxlY3Rpb248VD4ge1xuICBfcGFnZTogbnVtYmVyID0gMTtcbiAgX251bWJlck9mUGFnZXM6IG51bWJlciA9IDE7XG4gIF9wYWdlU2l6ZTogbnVtYmVyID0gMTA7XG5cbiAgY29uc3RydWN0b3Ioc291cmNlOiBBcnJheTxUPiA9IFtdKSB7XG4gICAgc3VwZXIoc291cmNlKTtcbiAgfVxuXG4gIGdldCBudW1iZXJPZlBhZ2VzKCk6IG51bWJlciB7XG4gICAgbGV0IHJlc3VsdDogbnVtYmVyID0gdGhpcy5zb3VyY2UubGVuZ3RoIC8gdGhpcy5wYWdlU2l6ZTtcbiAgICByZXN1bHQgPSBNYXRoLmNlaWwocmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0IHBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuXG4gIHNldCBwYWdlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlID0gdmFsdWU7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBnZXQgcGFnZVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVNpemU7XG4gIH1cblxuICBzZXQgcGFnZVNpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2VTaXplID0gdmFsdWU7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBuZXh0KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMucGFnZSA9PT0gdGhpcy5udW1iZXJPZlBhZ2VzKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYWdlO1xuICAgIH1cbiAgICB0aGlzLnBhZ2UrKztcbiAgICByZXR1cm4gdGhpcy5wYWdlO1xuICB9XG5cbiAgcHJldigpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLl9wYWdlID09PSAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYWdlO1xuICAgIH1cbiAgICB0aGlzLnBhZ2UtLTtcbiAgICByZXR1cm4gdGhpcy5wYWdlO1xuICB9XG5cbiAgZmlyc3QoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5wYWdlID09PSAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYWdlO1xuICAgIH1cbiAgICB0aGlzLnBhZ2UgPSAxO1xuICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gIH1cblxuICBsYXN0KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMucGFnZSA9PT0gdGhpcy5udW1iZXJPZlBhZ2VzKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYWdlO1xuICAgIH1cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLm51bWJlck9mUGFnZXM7XG4gICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgfVxuXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5pc0VkaXRpbmcgPyB0aGlzLmVkaXREYXRhLnNsaWNlKCkgOiB0aGlzLnNvdXJjZS5zbGljZSgpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLl9zb3J0LnJldmVyc2UoKSkge1xuICAgICAgdGhpcy5zb3J0T24oaXRlbS5maWVsZCwgaXRlbS5yZXZlcnNlKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fZmlsdGVyKSB7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHRoaXMuZmlsdGVyT24oa2V5LCB0aGlzLl9maWx0ZXJba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2UgPj0gMCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSAodGhpcy5wYWdlIC0gMSkgKiB0aGlzLnBhZ2VTaXplO1xuICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyB0aGlzLnBhZ2VTaXplO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5maWx0ZXJEYXRhLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgICAgdGhpcy5vbkRhdGFDaGFuZ2UobmV3IENvbGxlY3Rpb25FdmVudChDb2xsZWN0aW9uRXZlbnQuQ0hBTkdFLCByZXN1bHQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkRhdGFDaGFuZ2UobmV3IENvbGxlY3Rpb25FdmVudChDb2xsZWN0aW9uRXZlbnQuQ0hBTkdFLCB0aGlzLmZpbHRlckRhdGEpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==