/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@angular/cdk/table';
import { merge, of } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
/**
 * @template T
 */
export class DataTableSource extends DataSource {
    /**
     * @param {?} tableService
     * @param {?} state
     * @param {?} ref
     */
    constructor(tableService, state, ref) {
        super();
        this.tableService = tableService;
        this.state = state;
        this.ref = ref;
        this.total = 0;
        this.currentTotal = 0;
        this.current = 0;
        this.loading = false;
        this.pristine = true;
        this.totalSet = false;
    }
    /**
     * @return {?}
     */
    get totallyEmpty() {
        return this.total === 0;
    }
    /**
     * @return {?}
     */
    get currentlyEmpty() {
        return this.current === 0;
    }
    /**
     * @return {?}
     */
    connect() {
        /** @type {?} */
        const displayDataChanges = [this.state.updates];
        return merge(...displayDataChanges).pipe(startWith(null), switchMap((/**
         * @return {?}
         */
        () => {
            this.pristine = false;
            this.loading = true;
            return this.tableService.getTableResults(this.state.sort, this.state.filter, this.state.page, this.state.pageSize, this.state.globalSearch, this.state.outsideFilter);
        })), map((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (!this.totalSet || this.state.isForceRefresh) {
                this.total = data.total;
                this.totalSet = true;
                this.state.isForceRefresh = false;
            }
            this.currentTotal = data.total;
            this.current = data.results.length;
            this.data = data.results;
            // Clear selection
            this.state.selectedRows.clear();
            this.state.onSelectionChange();
            // Mark changes
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.ref.markForCheck();
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.loading = false;
                    this.state.dataLoaded.next();
                    this.ref.markForCheck();
                }));
            }));
            return data.results;
        })), catchError((/**
         * @param {?} err
         * @param {?} caught
         * @return {?}
         */
        (err, caught) => {
            console.error(err, caught); // tslint: disable-line
            this.loading = false;
            return of(null);
        })));
    }
    /**
     * @return {?}
     */
    disconnect() { }
}
if (false) {
    /** @type {?} */
    DataTableSource.prototype.total;
    /** @type {?} */
    DataTableSource.prototype.currentTotal;
    /** @type {?} */
    DataTableSource.prototype.current;
    /** @type {?} */
    DataTableSource.prototype.loading;
    /** @type {?} */
    DataTableSource.prototype.pristine;
    /** @type {?} */
    DataTableSource.prototype.data;
    /**
     * @type {?}
     * @private
     */
    DataTableSource.prototype.totalSet;
    /**
     * @type {?}
     * @private
     */
    DataTableSource.prototype.tableService;
    /**
     * @type {?}
     * @private
     */
    DataTableSource.prototype.state;
    /**
     * @type {?}
     * @private
     */
    DataTableSource.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLnNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBYyxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUt2RSxNQUFNLE9BQU8sZUFBbUIsU0FBUSxVQUFhOzs7Ozs7SUFrQm5ELFlBQW9CLFlBQWtDLEVBQVUsS0FBd0IsRUFBVSxHQUFzQjtRQUN0SCxLQUFLLEVBQUUsQ0FBQztRQURVLGlCQUFZLEdBQVosWUFBWSxDQUFzQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFqQmpILFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBR2YsYUFBUSxHQUFZLEtBQUssQ0FBQztJQVlsQyxDQUFDOzs7O0lBVkQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQU1NLE9BQU87O2NBQ04sa0JBQWtCLEdBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNwRCxPQUFPLEtBQUssQ0FBQyxHQUFHLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUN0QyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ2YsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQ3pCLENBQUM7UUFDSixDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsQ0FBQyxJQUFxQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQzthQUNuQztZQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN6QixrQkFBa0I7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQy9CLGVBQWU7WUFDZixVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDeEIsVUFBVTs7O2dCQUFDLEdBQUcsRUFBRTtvQkFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzFCLENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7WUFDSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjtZQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVNLFVBQVUsS0FBVSxDQUFDO0NBQzdCOzs7SUFyRUMsZ0NBQWlCOztJQUNqQix1Q0FBd0I7O0lBQ3hCLGtDQUFtQjs7SUFDbkIsa0NBQXVCOztJQUN2QixtQ0FBdUI7O0lBQ3ZCLCtCQUFpQjs7Ozs7SUFFakIsbUNBQWtDOzs7OztJQVV0Qix1Q0FBMEM7Ozs7O0lBQUUsZ0NBQWdDOzs7OztJQUFFLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG1lcmdlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlU3RhdGUgfSBmcm9tICcuL3N0YXRlL2RhdGEtdGFibGUtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBJRGF0YVRhYmxlU2VydmljZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVTb3VyY2U8VD4gZXh0ZW5kcyBEYXRhU291cmNlPFQ+IHtcbiAgcHVibGljIHRvdGFsID0gMDtcbiAgcHVibGljIGN1cnJlbnRUb3RhbCA9IDA7XG4gIHB1YmxpYyBjdXJyZW50ID0gMDtcbiAgcHVibGljIGxvYWRpbmcgPSBmYWxzZTtcbiAgcHVibGljIHByaXN0aW5lID0gdHJ1ZTtcbiAgcHVibGljIGRhdGE6IFRbXTtcblxuICBwcml2YXRlIHRvdGFsU2V0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgZ2V0IHRvdGFsbHlFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbCA9PT0gMDtcbiAgfVxuXG4gIGdldCBjdXJyZW50bHlFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50ID09PSAwO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJsZVNlcnZpY2U6IElEYXRhVGFibGVTZXJ2aWNlPFQ+LCBwcml2YXRlIHN0YXRlOiBEYXRhVGFibGVTdGF0ZTxUPiwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25uZWN0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgZGlzcGxheURhdGFDaGFuZ2VzOiBhbnkgPSBbdGhpcy5zdGF0ZS51cGRhdGVzXTtcbiAgICByZXR1cm4gbWVyZ2UoLi4uZGlzcGxheURhdGFDaGFuZ2VzKS5waXBlKFxuICAgICAgc3RhcnRXaXRoKG51bGwpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgICAgdGhpcy5wcmlzdGluZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy50YWJsZVNlcnZpY2UuZ2V0VGFibGVSZXN1bHRzKFxuICAgICAgICAgIHRoaXMuc3RhdGUuc29ydCxcbiAgICAgICAgICB0aGlzLnN0YXRlLmZpbHRlcixcbiAgICAgICAgICB0aGlzLnN0YXRlLnBhZ2UsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wYWdlU2l6ZSxcbiAgICAgICAgICB0aGlzLnN0YXRlLmdsb2JhbFNlYXJjaCxcbiAgICAgICAgICB0aGlzLnN0YXRlLm91dHNpZGVGaWx0ZXIsXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgoZGF0YTogeyByZXN1bHRzOiBUW107IHRvdGFsOiBudW1iZXIgfSkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMudG90YWxTZXQgfHwgdGhpcy5zdGF0ZS5pc0ZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgIHRoaXMudG90YWwgPSBkYXRhLnRvdGFsO1xuICAgICAgICAgIHRoaXMudG90YWxTZXQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc3RhdGUuaXNGb3JjZVJlZnJlc2ggPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRUb3RhbCA9IGRhdGEudG90YWw7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IGRhdGEucmVzdWx0cy5sZW5ndGg7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGEucmVzdWx0cztcbiAgICAgICAgLy8gQ2xlYXIgc2VsZWN0aW9uXG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUub25TZWxlY3Rpb25DaGFuZ2UoKTtcbiAgICAgICAgLy8gTWFyayBjaGFuZ2VzXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGFMb2FkZWQubmV4dCgpO1xuICAgICAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGF0YS5yZXN1bHRzO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKChlcnIsIGNhdWdodCkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyciwgY2F1Z2h0KTsgLy8gdHNsaW50OiBkaXNhYmxlLWxpbmVcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdCgpOiB2b2lkIHt9XG59XG4iXX0=