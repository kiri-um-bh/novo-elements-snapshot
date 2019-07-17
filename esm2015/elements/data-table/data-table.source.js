/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.connectSub = this.connect().subscribe(() => {
            if (!this.totalSet || this.currentTotal > this.total) {
                this.total = this.currentTotal;
                this.totalSet = true;
            }
            this.loading = false;
            this.ref.markForCheck();
        });
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
    ngOnDestroy() {
        this.connectSub.unsubscribe();
    }
    /**
     * @return {?}
     */
    connect() {
        /** @type {?} */
        const displayDataChanges = [this.state.updates];
        return merge(...displayDataChanges).pipe(startWith(null), switchMap(() => {
            this.pristine = false;
            if (this.state.isForceRefresh) {
                this.loading = true;
            }
            return this.tableService.getTableResults(this.state.sort, this.state.filter, this.state.page, this.state.pageSize, this.state.globalSearch, this.state.outsideFilter);
        }), map((data) => {
            if (this.state.isForceRefresh) {
                this.totalSet = false;
                this.state.isForceRefresh = false;
            }
            this.currentTotal = data.total;
            this.current = data.results.length;
            this.data = data.results;
            // Clear selection
            this.state.selectedRows.clear();
            this.state.onSelectionChange();
            // Mark changes
            setTimeout(() => {
                this.ref.markForCheck();
                setTimeout(() => {
                    this.state.dataLoaded.next();
                });
            });
            return data.results;
        }), catchError((err, caught) => {
            console.error(err, caught); // tslint: disable-line
            return of(null);
        }));
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
    DataTableSource.prototype.connectSub;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLnNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBYSxLQUFLLEVBQUUsRUFBRSxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUt2RSxNQUFNLE9BQU8sZUFBbUIsU0FBUSxVQUFhOzs7Ozs7SUFtQm5ELFlBQW9CLFlBQWtDLEVBQVUsS0FBd0IsRUFBVSxHQUFzQjtRQUN0SCxLQUFLLEVBQUUsQ0FBQztRQURVLGlCQUFZLEdBQVosWUFBWSxDQUFzQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFsQmpILFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBSWYsYUFBUSxHQUFZLEtBQUssQ0FBQztRQVloQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUN0QjtZ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O0lBQ2pCLHFDQUFpQzs7Ozs7SUFFakMsbUNBQWtDOzs7OztJQVV0Qix1Q0FBMEM7Ozs7O0lBQUUsZ0NBQWdDOzs7OztJQUFFLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgbWVyZ2UsIG9mLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlU3RhdGUgfSBmcm9tICcuL3N0YXRlL2RhdGEtdGFibGUtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBJRGF0YVRhYmxlU2VydmljZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVTb3VyY2U8VD4gZXh0ZW5kcyBEYXRhU291cmNlPFQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHVibGljIHRvdGFsID0gMDtcbiAgcHVibGljIGN1cnJlbnRUb3RhbCA9IDA7XG4gIHB1YmxpYyBjdXJyZW50ID0gMDtcbiAgcHVibGljIGxvYWRpbmcgPSBmYWxzZTtcbiAgcHVibGljIHByaXN0aW5lID0gdHJ1ZTtcbiAgcHVibGljIGRhdGE6IFRbXTtcbiAgcHJpdmF0ZSBjb25uZWN0U3ViOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSB0b3RhbFNldDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGdldCB0b3RhbGx5RW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudG90YWwgPT09IDA7XG4gIH1cblxuICBnZXQgY3VycmVudGx5RW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudCA9PT0gMDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFibGVTZXJ2aWNlOiBJRGF0YVRhYmxlU2VydmljZTxUPiwgcHJpdmF0ZSBzdGF0ZTogRGF0YVRhYmxlU3RhdGU8VD4sIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jb25uZWN0U3ViID0gdGhpcy5jb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy50b3RhbFNldCB8fCB0aGlzLmN1cnJlbnRUb3RhbCA+IHRoaXMudG90YWwpIHtcbiAgICAgICAgdGhpcy50b3RhbCA9IHRoaXMuY3VycmVudFRvdGFsO1xuICAgICAgICB0aGlzLnRvdGFsU2V0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbm5lY3RTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25uZWN0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgZGlzcGxheURhdGFDaGFuZ2VzOiBhbnkgPSBbdGhpcy5zdGF0ZS51cGRhdGVzXTtcbiAgICByZXR1cm4gbWVyZ2UoLi4uZGlzcGxheURhdGFDaGFuZ2VzKS5waXBlKFxuICAgICAgc3RhcnRXaXRoKG51bGwpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgICAgdGhpcy5wcmlzdGluZSA9IGZhbHNlO1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzRm9yY2VSZWZyZXNoKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGVTZXJ2aWNlLmdldFRhYmxlUmVzdWx0cyhcbiAgICAgICAgICB0aGlzLnN0YXRlLnNvcnQsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5maWx0ZXIsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wYWdlLFxuICAgICAgICAgIHRoaXMuc3RhdGUucGFnZVNpemUsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5nbG9iYWxTZWFyY2gsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5vdXRzaWRlRmlsdGVyLFxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBtYXAoKGRhdGE6IHsgcmVzdWx0czogVFtdOyB0b3RhbDogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNGb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB0aGlzLnRvdGFsU2V0ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5pc0ZvcmNlUmVmcmVzaCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFRvdGFsID0gZGF0YS50b3RhbDtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gZGF0YS5yZXN1bHRzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YS5yZXN1bHRzO1xuICAgICAgICAvLyBDbGVhciBzZWxlY3Rpb25cbiAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5vblNlbGVjdGlvbkNoYW5nZSgpO1xuICAgICAgICAvLyBNYXJrIGNoYW5nZXNcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGFMb2FkZWQubmV4dCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRhdGEucmVzdWx0cztcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyLCBjYXVnaHQpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIsIGNhdWdodCk7IC8vIHRzbGludDogZGlzYWJsZS1saW5lXG4gICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdCgpOiB2b2lkIHt9XG59XG4iXX0=