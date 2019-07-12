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
            this.loading = true;
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
                    this.loading = false;
                    this.state.dataLoaded.next();
                });
            });
            return data.results;
        }), catchError((err, caught) => {
            this.loading = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5zb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLnNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBYyxLQUFLLEVBQUUsRUFBRSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMzRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLdkUsTUFBTSxPQUFPLGVBQW1CLFNBQVEsVUFBYTs7Ozs7O0lBbUJuRCxZQUFvQixZQUFrQyxFQUFVLEtBQXdCLEVBQVUsR0FBc0I7UUFDdEgsS0FBSyxFQUFFLENBQUM7UUFEVSxpQkFBWSxHQUFaLFlBQVksQ0FBc0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBbEJqSCxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUlmLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFZaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDdEI7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dkIsbUNBQXVCOztJQUN2QiwrQkFBaUI7Ozs7O0lBQ2pCLHFDQUFpQzs7Ozs7SUFFakMsbUNBQWtDOzs7OztJQVV0Qix1Q0FBMEM7Ozs7O0lBQUUsZ0NBQWdDOzs7OztJQUFFLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgbWVyZ2UsIG9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERhdGFUYWJsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZS9kYXRhLXRhYmxlLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSURhdGFUYWJsZVNlcnZpY2UgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlU291cmNlPFQ+IGV4dGVuZHMgRGF0YVNvdXJjZTxUPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHB1YmxpYyB0b3RhbCA9IDA7XG4gIHB1YmxpYyBjdXJyZW50VG90YWwgPSAwO1xuICBwdWJsaWMgY3VycmVudCA9IDA7XG4gIHB1YmxpYyBsb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBwcmlzdGluZSA9IHRydWU7XG4gIHB1YmxpYyBkYXRhOiBUW107XG4gIHByaXZhdGUgY29ubmVjdFN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgdG90YWxTZXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBnZXQgdG90YWxseUVtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRvdGFsID09PSAwO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRseUVtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQgPT09IDA7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhYmxlU2VydmljZTogSURhdGFUYWJsZVNlcnZpY2U8VD4sIHByaXZhdGUgc3RhdGU6IERhdGFUYWJsZVN0YXRlPFQ+LCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29ubmVjdFN1YiA9IHRoaXMuY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMudG90YWxTZXQgfHwgdGhpcy5jdXJyZW50VG90YWwgPiB0aGlzLnRvdGFsKSB7XG4gICAgICAgIHRoaXMudG90YWwgPSB0aGlzLmN1cnJlbnRUb3RhbDtcbiAgICAgICAgdGhpcy50b3RhbFNldCA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jb25uZWN0U3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgY29ubmVjdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGRpc3BsYXlEYXRhQ2hhbmdlczogYW55ID0gW3RoaXMuc3RhdGUudXBkYXRlc107XG4gICAgcmV0dXJuIG1lcmdlKC4uLmRpc3BsYXlEYXRhQ2hhbmdlcykucGlwZShcbiAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgIHRoaXMucHJpc3RpbmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGVTZXJ2aWNlLmdldFRhYmxlUmVzdWx0cyhcbiAgICAgICAgICB0aGlzLnN0YXRlLnNvcnQsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5maWx0ZXIsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wYWdlLFxuICAgICAgICAgIHRoaXMuc3RhdGUucGFnZVNpemUsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5nbG9iYWxTZWFyY2gsXG4gICAgICAgICAgdGhpcy5zdGF0ZS5vdXRzaWRlRmlsdGVyLFxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBtYXAoKGRhdGE6IHsgcmVzdWx0czogVFtdOyB0b3RhbDogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNGb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB0aGlzLnRvdGFsU2V0ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5pc0ZvcmNlUmVmcmVzaCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFRvdGFsID0gZGF0YS50b3RhbDtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gZGF0YS5yZXN1bHRzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YS5yZXN1bHRzO1xuICAgICAgICAvLyBDbGVhciBzZWxlY3Rpb25cbiAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5vblNlbGVjdGlvbkNoYW5nZSgpO1xuICAgICAgICAvLyBNYXJrIGNoYW5nZXNcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YUxvYWRlZC5uZXh0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGF0YS5yZXN1bHRzO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKChlcnIsIGNhdWdodCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIsIGNhdWdodCk7IC8vIHRzbGludDogZGlzYWJsZS1saW5lXG4gICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdCgpOiB2b2lkIHt9XG59XG4iXX0=