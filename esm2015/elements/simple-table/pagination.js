/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { NovoLabelService } from '../../services/novo-label-service';
import { NovoActivityTableState } from './state';
/** @type {?} */
const DEFAULT_PAGE_SIZE = 50;
export class NovoSimpleTablePagination {
    /**
     * @param {?} changeDetectorRef
     * @param {?} labels
     * @param {?} state
     */
    constructor(changeDetectorRef, labels, state) {
        this.changeDetectorRef = changeDetectorRef;
        this.labels = labels;
        this.state = state;
        this._page = 0;
        this._length = 0;
        this._pageSizeOptions = [];
        this.pageChange = new EventEmitter();
        if (state && state.onReset) {
            this.resetSubscription = this.state.onReset.subscribe((clear) => {
                if (clear) {
                    this.page = 0;
                    this.changeDetectorRef.markForCheck();
                }
            });
        }
    }
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} page
     * @return {?}
     */
    set page(page) {
        this._page = page;
        this.changeDetectorRef.markForCheck();
        this.longRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, false);
        this.shortRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, true);
        this.state.page = this._page;
    }
    /**
     * @return {?}
     */
    get length() {
        return this._length;
    }
    /**
     * @param {?} length
     * @return {?}
     */
    set length(length) {
        this._length = length;
        this.changeDetectorRef.markForCheck();
        this.longRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, false);
        this.shortRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, true);
    }
    /**
     * @return {?}
     */
    get pageSize() {
        return this._pageSize;
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    set pageSize(pageSize) {
        this._pageSize = pageSize;
        this.updateDisplayedPageSizeOptions();
        this.state.pageSize = this._pageSize;
    }
    /**
     * @return {?}
     */
    get pageSizeOptions() {
        return this._pageSizeOptions;
    }
    /**
     * @param {?} pageSizeOptions
     * @return {?}
     */
    set pageSizeOptions(pageSizeOptions) {
        this._pageSizeOptions = pageSizeOptions;
        this.updateDisplayedPageSizeOptions();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._initialized = true;
        this.updateDisplayedPageSizeOptions();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.resetSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    nextPage() {
        if (!this.hasNextPage()) {
            return;
        }
        this.page++;
        this.emitPageEvent();
    }
    /**
     * @return {?}
     */
    previousPage() {
        if (!this.hasPreviousPage()) {
            return;
        }
        this.page--;
        this.emitPageEvent();
    }
    /**
     * @return {?}
     */
    hasPreviousPage() {
        return this.page >= 1 && this.pageSize !== 0;
    }
    /**
     * @return {?}
     */
    hasNextPage() {
        /** @type {?} */
        const numberOfPages = Math.ceil(this.length / this.pageSize) - 1;
        return this.page < numberOfPages && this.pageSize !== 0;
    }
    /**
     * @param {?} pageSize
     * @return {?}
     */
    changePageSize(pageSize) {
        this.page = 0;
        this.pageSize = pageSize;
        this.emitPageEvent();
    }
    /**
     * @private
     * @return {?}
     */
    updateDisplayedPageSizeOptions() {
        if (!this._initialized) {
            return;
        }
        if (!this.pageSize) {
            this._pageSize = this.pageSizeOptions.length !== 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
        }
        this.displayedPageSizeOptions = this.pageSizeOptions.slice();
        if (this.displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
            this.displayedPageSizeOptions.push(this.pageSize);
        }
        this.displayedPageSizeOptions.sort((a, b) => a - b);
        this.changeDetectorRef.markForCheck();
        this.longRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, false);
        this.shortRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, true);
    }
    /**
     * @private
     * @return {?}
     */
    emitPageEvent() {
        /** @type {?} */
        let event = {
            page: this.page,
            pageSize: this.pageSize,
            length: this.length,
        };
        this.pageChange.next(event);
        this.state.page = this.page;
        this.state.pageSize = this.pageSize;
        this.longRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, false);
        this.shortRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, true);
        this.state.updates.next(event);
    }
}
NovoSimpleTablePagination.decorators = [
    { type: Component, args: [{
                selector: 'novo-simple-table-pagination',
                template: `
        <div class="novo-simple-table-pagination-size">
            <novo-tiles *ngIf="displayedPageSizeOptions.length > 1"
                        [(ngModel)]="pageSize"
                        [options]="displayedPageSizeOptions"
                        (onChange)="changePageSize($event)"
                        data-automation-id="novo-simple-table-pagination-tiles">
            </novo-tiles>
            <div *ngIf="displayedPageSizeOptions.length <= 1">{{ pageSize }}</div>
        </div>

        <div class="novo-simple-table-range-label-long"data-automation-id="novo-simple-table-pagination-range-label-long">
            {{ longRangeLabel }}
        </div>
        <div class="novo-simple-table-range-label-short"data-automation-id="novo-simple-table-pagination-range-label-short">
            {{ shortRangeLabel }}
        </div>

        <button theme="dialogue" type="button"
                class="novo-simple-table-pagination-navigation-previous"
                (click)="previousPage()"
                icon="previous"
                side="left"
                [disabled]="!hasPreviousPage()"
                data-automation-id="novo-simple-table-pagination-previous">
            <span>{{ labels.previous }}</span>
        </button>
        <button theme="dialogue" type="button"
                class="novo-simple-table-pagination-navigation-next"
                (click)="nextPage()"
                icon="next"
                side="right"
                [disabled]="!hasNextPage()"
                data-automation-id="novo-simple-table-pagination-next">
            <span>{{ labels.next }}</span>
        </button>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NovoSimpleTablePagination.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NovoLabelService },
    { type: NovoActivityTableState }
];
NovoSimpleTablePagination.propDecorators = {
    page: [{ type: Input }],
    length: [{ type: Input }],
    pageSize: [{ type: Input }],
    pageSizeOptions: [{ type: Input }],
    pageChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NovoSimpleTablePagination.prototype._initialized;
    /** @type {?} */
    NovoSimpleTablePagination.prototype._page;
    /** @type {?} */
    NovoSimpleTablePagination.prototype._length;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleTablePagination.prototype._pageSize;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleTablePagination.prototype._pageSizeOptions;
    /** @type {?} */
    NovoSimpleTablePagination.prototype.pageChange;
    /** @type {?} */
    NovoSimpleTablePagination.prototype.displayedPageSizeOptions;
    /** @type {?} */
    NovoSimpleTablePagination.prototype.longRangeLabel;
    /** @type {?} */
    NovoSimpleTablePagination.prototype.shortRangeLabel;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleTablePagination.prototype.resetSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleTablePagination.prototype.changeDetectorRef;
    /** @type {?} */
    NovoSimpleTablePagination.prototype.labels;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleTablePagination.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvcGFnaW5hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJdEksT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sU0FBUyxDQUFDOztNQUUzQyxpQkFBaUIsR0FBRyxFQUFFO0FBMkM1QixNQUFNLE9BQU8seUJBQXlCOzs7Ozs7SUEwRHBDLFlBQW9CLGlCQUFvQyxFQUFTLE1BQXdCLEVBQVUsS0FBNkI7UUFBNUcsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBd0I7UUE1Q2hJLFVBQUssR0FBVyxDQUFDLENBQUM7UUFZbEIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQXFCWixxQkFBZ0IsR0FBYSxFQUFFLENBQUM7UUFHeEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUE2QixDQUFDO1FBU3pELElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO2dCQUN2RSxJQUFJLEtBQUssRUFBRTtvQkFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztvQkFDZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ3ZDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUFoRUQsSUFDSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBQ0QsSUFBSSxJQUFJLENBQUMsSUFBWTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7OztJQUdELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELElBQUksTUFBTSxDQUFDLE1BQWM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRixDQUFDOzs7O0lBR0QsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBQ0QsSUFBSSxRQUFRLENBQUMsUUFBZ0I7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBR0QsSUFDSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7O0lBQ0QsSUFBSSxlQUFlLENBQUMsZUFBeUI7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztRQUN4QyxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7O0lBdUJNLFFBQVE7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVNLFFBQVE7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3ZCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRU0sWUFBWTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQzNCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRU0sZUFBZTtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFTSxXQUFXOztjQUNWLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDaEUsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7OztJQUVNLGNBQWMsQ0FBQyxRQUFnQjtRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVPLDhCQUE4QjtRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7U0FDbEc7UUFDRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3RCxJQUFJLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQy9ELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9GLENBQUM7Ozs7O0lBRU8sYUFBYTs7WUFDZixLQUFLLEdBQUc7WUFDVixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBbkxGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW9DUDtnQkFDSCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQWpEaUMsaUJBQWlCO1lBSTFDLGdCQUFnQjtZQUNoQixzQkFBc0I7OzttQkFnRDVCLEtBQUs7cUJBYUwsS0FBSzt1QkFZTCxLQUFLOzhCQVdMLEtBQUs7eUJBVUwsTUFBTTs7Ozs7OztJQWhEUCxpREFBOEI7O0lBYTlCLDBDQUFrQjs7SUFZbEIsNENBQW9COzs7OztJQVdwQiw4Q0FBMEI7Ozs7O0lBVTFCLHFEQUF3Qzs7SUFFeEMsK0NBQzJEOztJQUUzRCw2REFBMEM7O0lBQzFDLG1EQUE4Qjs7SUFDOUIsb0RBQStCOzs7OztJQUUvQixzREFBd0M7Ozs7O0lBRTVCLHNEQUE0Qzs7SUFBRSwyQ0FBK0I7Ozs7O0lBQUUsMENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOb3ZvU2ltcGxlUGFnaW5hdGlvbkV2ZW50IH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b0FjdGl2aXR5VGFibGVTdGF0ZSB9IGZyb20gJy4vc3RhdGUnO1xuXG5jb25zdCBERUZBVUxUX1BBR0VfU0laRSA9IDUwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS10YWJsZS1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tc2ltcGxlLXRhYmxlLXBhZ2luYXRpb24tc2l6ZVwiPlxuICAgICAgICAgICAgPG5vdm8tdGlsZXMgKm5nSWY9XCJkaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMubGVuZ3RoID4gMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInBhZ2VTaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cImRpc3BsYXllZFBhZ2VTaXplT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2UpPVwiY2hhbmdlUGFnZVNpemUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLXNpbXBsZS10YWJsZS1wYWdpbmF0aW9uLXRpbGVzXCI+XG4gICAgICAgICAgICA8L25vdm8tdGlsZXM+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZGlzcGxheWVkUGFnZVNpemVPcHRpb25zLmxlbmd0aCA8PSAxXCI+e3sgcGFnZVNpemUgfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tc2ltcGxlLXRhYmxlLXJhbmdlLWxhYmVsLWxvbmdcImRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tc2ltcGxlLXRhYmxlLXBhZ2luYXRpb24tcmFuZ2UtbGFiZWwtbG9uZ1wiPlxuICAgICAgICAgICAge3sgbG9uZ1JhbmdlTGFiZWwgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXNpbXBsZS10YWJsZS1yYW5nZS1sYWJlbC1zaG9ydFwiZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1zaW1wbGUtdGFibGUtcGFnaW5hdGlvbi1yYW5nZS1sYWJlbC1zaG9ydFwiPlxuICAgICAgICAgICAge3sgc2hvcnRSYW5nZUxhYmVsIH19XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibm92by1zaW1wbGUtdGFibGUtcGFnaW5hdGlvbi1uYXZpZ2F0aW9uLXByZXZpb3VzXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJldmlvdXNQYWdlKClcIlxuICAgICAgICAgICAgICAgIGljb249XCJwcmV2aW91c1wiXG4gICAgICAgICAgICAgICAgc2lkZT1cImxlZnRcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhaGFzUHJldmlvdXNQYWdlKClcIlxuICAgICAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tc2ltcGxlLXRhYmxlLXBhZ2luYXRpb24tcHJldmlvdXNcIj5cbiAgICAgICAgICAgIDxzcGFuPnt7IGxhYmVscy5wcmV2aW91cyB9fTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibm92by1zaW1wbGUtdGFibGUtcGFnaW5hdGlvbi1uYXZpZ2F0aW9uLW5leHRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJuZXh0UGFnZSgpXCJcbiAgICAgICAgICAgICAgICBpY29uPVwibmV4dFwiXG4gICAgICAgICAgICAgICAgc2lkZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWhhc05leHRQYWdlKClcIlxuICAgICAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tc2ltcGxlLXRhYmxlLXBhZ2luYXRpb24tbmV4dFwiPlxuICAgICAgICAgICAgPHNwYW4+e3sgbGFiZWxzLm5leHQgfX08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlVGFibGVQYWdpbmF0aW9uIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9pbml0aWFsaXplZDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBnZXQgcGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG4gIHNldCBwYWdlKHBhZ2U6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2UgPSBwYWdlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5sb25nUmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCBmYWxzZSk7XG4gICAgdGhpcy5zaG9ydFJhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgdHJ1ZSk7XG4gICAgdGhpcy5zdGF0ZS5wYWdlID0gdGhpcy5fcGFnZTtcbiAgfVxuICBfcGFnZTogbnVtYmVyID0gMDtcblxuICBASW5wdXQoKVxuICBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcbiAgfVxuICBzZXQgbGVuZ3RoKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgdGhpcy5fbGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5sb25nUmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCBmYWxzZSk7XG4gICAgdGhpcy5zaG9ydFJhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgdHJ1ZSk7XG4gIH1cbiAgX2xlbmd0aDogbnVtYmVyID0gMDtcblxuICBASW5wdXQoKVxuICBnZXQgcGFnZVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVNpemU7XG4gIH1cbiAgc2V0IHBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheWVkUGFnZVNpemVPcHRpb25zKCk7XG4gICAgdGhpcy5zdGF0ZS5wYWdlU2l6ZSA9IHRoaXMuX3BhZ2VTaXplO1xuICB9XG4gIHByaXZhdGUgX3BhZ2VTaXplOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2VTaXplT3B0aW9ucygpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplT3B0aW9ucztcbiAgfVxuICBzZXQgcGFnZVNpemVPcHRpb25zKHBhZ2VTaXplT3B0aW9uczogbnVtYmVyW10pIHtcbiAgICB0aGlzLl9wYWdlU2l6ZU9wdGlvbnMgPSBwYWdlU2l6ZU9wdGlvbnM7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMoKTtcbiAgfVxuICBwcml2YXRlIF9wYWdlU2l6ZU9wdGlvbnM6IG51bWJlcltdID0gW107XG5cbiAgQE91dHB1dCgpXG4gIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE5vdm9TaW1wbGVQYWdpbmF0aW9uRXZlbnQ+KCk7XG5cbiAgcHVibGljIGRpc3BsYXllZFBhZ2VTaXplT3B0aW9uczogbnVtYmVyW107XG4gIHB1YmxpYyBsb25nUmFuZ2VMYWJlbDogc3RyaW5nO1xuICBwdWJsaWMgc2hvcnRSYW5nZUxhYmVsOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSByZXNldFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIHN0YXRlOiBOb3ZvQWN0aXZpdHlUYWJsZVN0YXRlKSB7XG4gICAgaWYgKHN0YXRlICYmIHN0YXRlLm9uUmVzZXQpIHtcbiAgICAgIHRoaXMucmVzZXRTdWJzY3JpcHRpb24gPSB0aGlzLnN0YXRlLm9uUmVzZXQuc3Vic2NyaWJlKChjbGVhcjogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAoY2xlYXIpIHtcbiAgICAgICAgICB0aGlzLnBhZ2UgPSAwO1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgbmV4dFBhZ2UoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc05leHRQYWdlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wYWdlKys7XG4gICAgdGhpcy5lbWl0UGFnZUV2ZW50KCk7XG4gIH1cblxuICBwdWJsaWMgcHJldmlvdXNQYWdlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNQcmV2aW91c1BhZ2UoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBhZ2UtLTtcbiAgICB0aGlzLmVtaXRQYWdlRXZlbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyBoYXNQcmV2aW91c1BhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA+PSAxICYmIHRoaXMucGFnZVNpemUgIT09IDA7XG4gIH1cblxuICBwdWJsaWMgaGFzTmV4dFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbCh0aGlzLmxlbmd0aCAvIHRoaXMucGFnZVNpemUpIC0gMTtcbiAgICByZXR1cm4gdGhpcy5wYWdlIDwgbnVtYmVyT2ZQYWdlcyAmJiB0aGlzLnBhZ2VTaXplICE9PSAwO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2UgPSAwO1xuICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB0aGlzLmVtaXRQYWdlRXZlbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRGlzcGxheWVkUGFnZVNpemVPcHRpb25zKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnBhZ2VTaXplKSB7XG4gICAgICB0aGlzLl9wYWdlU2l6ZSA9IHRoaXMucGFnZVNpemVPcHRpb25zLmxlbmd0aCAhPT0gMCA/IHRoaXMucGFnZVNpemVPcHRpb25zWzBdIDogREVGQVVMVF9QQUdFX1NJWkU7XG4gICAgfVxuICAgIHRoaXMuZGlzcGxheWVkUGFnZVNpemVPcHRpb25zID0gdGhpcy5wYWdlU2l6ZU9wdGlvbnMuc2xpY2UoKTtcbiAgICBpZiAodGhpcy5kaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMuaW5kZXhPZih0aGlzLnBhZ2VTaXplKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuZGlzcGxheWVkUGFnZVNpemVPcHRpb25zLnB1c2godGhpcy5wYWdlU2l6ZSk7XG4gICAgfVxuICAgIHRoaXMuZGlzcGxheWVkUGFnZVNpemVPcHRpb25zLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMubG9uZ1JhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgZmFsc2UpO1xuICAgIHRoaXMuc2hvcnRSYW5nZUxhYmVsID0gdGhpcy5sYWJlbHMuZ2V0UmFuZ2VUZXh0KHRoaXMucGFnZSwgdGhpcy5wYWdlU2l6ZSwgdGhpcy5sZW5ndGgsIHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0UGFnZUV2ZW50KCk6IHZvaWQge1xuICAgIGxldCBldmVudCA9IHtcbiAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgIHBhZ2VTaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgbGVuZ3RoOiB0aGlzLmxlbmd0aCxcbiAgICB9O1xuICAgIHRoaXMucGFnZUNoYW5nZS5uZXh0KGV2ZW50KTtcbiAgICB0aGlzLnN0YXRlLnBhZ2UgPSB0aGlzLnBhZ2U7XG4gICAgdGhpcy5zdGF0ZS5wYWdlU2l6ZSA9IHRoaXMucGFnZVNpemU7XG4gICAgdGhpcy5sb25nUmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCBmYWxzZSk7XG4gICAgdGhpcy5zaG9ydFJhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgdHJ1ZSk7XG4gICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoZXZlbnQpO1xuICB9XG59XG4iXX0=