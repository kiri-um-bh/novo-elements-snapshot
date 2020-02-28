/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/pagination/data-table-pagination.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, HostBinding, } from '@angular/core';
import { NovoLabelService } from '../../../services/novo-label-service';
import { DataTableState } from '../state/data-table-state.service';
/** @type {?} */
const MAX_PAGES_DISPLAYED = 5;
/**
 * @template T
 */
export class NovoDataTablePagination {
    /**
     * @param {?} changeDetectorRef
     * @param {?} labels
     * @param {?} state
     */
    constructor(changeDetectorRef, labels, state) {
        this.changeDetectorRef = changeDetectorRef;
        this.labels = labels;
        this.state = state;
        this.theme = 'standard';
        this._page = 0;
        this._pageSizeOptions = [];
        this._length = 0;
        this.pageChange = new EventEmitter();
        this.resetSubscription = this.state.resetSource.subscribe((/**
         * @return {?}
         */
        () => {
            this.page = 0;
            this.changeDetectorRef.markForCheck();
        }));
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
        this.totalPages = this.calculateTotalPages();
        this.pages = this.getPages(this.page, this.totalPages);
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
     * @param {?} page
     * @return {?}
     */
    selectPage(page) {
        this.page = page;
        this.emitPageEvent();
    }
    /**
     * @return {?}
     */
    nextPage() {
        if (!this.hasNextPage()) {
            return;
        }
        this.page++;
        this.pages = this.getPages(this.page, this.totalPages);
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
        this.pages = this.getPages(this.page, this.totalPages);
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
        this.emitPageEvent(true);
    }
    /**
     * @private
     * @return {?}
     */
    updateDisplayedPageSizeOptions() {
        if (!this._initialized) {
            return;
        }
        if (!this.displayedPageSizeOptions) {
            this.displayedPageSizeOptions = [];
            this.pageSizeOptions.forEach((/**
             * @param {?} option
             * @return {?}
             */
            (option) => {
                if (option.hasOwnProperty('value')) {
                    this.displayedPageSizeOptions.push(option);
                }
                else {
                    this.displayedPageSizeOptions.push({
                        value: option,
                        label: option,
                    });
                }
            }));
        }
        this.longRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, false);
        this.shortRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, true);
        this.totalPages = this.calculateTotalPages();
        this.pages = this.getPages(this.page, this.totalPages);
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @private
     * @param {?=} isPageSizeChange
     * @return {?}
     */
    emitPageEvent(isPageSizeChange = false) {
        /** @type {?} */
        const event = {
            page: this.page,
            pageSize: this.pageSize,
            length: this.length,
            filter: this.state.filter,
            sort: this.state.sort,
        };
        this.pageChange.next(event);
        this.state.page = this.page;
        this.state.pageSize = this.pageSize;
        this.longRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, false);
        this.shortRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, true);
        this.totalPages = this.calculateTotalPages();
        this.pages = this.getPages(this.page, this.totalPages);
        this.state.updates.next(event);
        this.state.onPaginationChange(isPageSizeChange, this.pageSize);
    }
    /**
     * @private
     * @return {?}
     */
    calculateTotalPages() {
        /** @type {?} */
        const totalPages = this.pageSize < 1 ? 1 : Math.ceil(this.length / this.pageSize);
        return Math.max(totalPages || 0, 1);
    }
    /**
     * @private
     * @param {?} number
     * @param {?} text
     * @param {?} isActive
     * @return {?}
     */
    makePage(number, text, isActive) {
        return {
            number,
            text,
            active: isActive,
        };
    }
    /**
     * @private
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    getPages(currentPage, totalPages) {
        /** @type {?} */
        const pages = [];
        // Default page limits
        /** @type {?} */
        let startPage = 1;
        /** @type {?} */
        let endPage = totalPages;
        /** @type {?} */
        const isMaxSized = MAX_PAGES_DISPLAYED < totalPages;
        // Recompute if maxPagesDisplayed
        if (isMaxSized) {
            // Current page is displayed in the middle of the visible ones
            startPage = Math.max(currentPage - Math.floor(MAX_PAGES_DISPLAYED / 2), 1);
            endPage = startPage + MAX_PAGES_DISPLAYED - 1;
            // Adjust if limit is exceeded
            if (endPage > totalPages) {
                endPage = totalPages;
                startPage = endPage - MAX_PAGES_DISPLAYED + 1;
            }
        }
        // Add page number links
        for (let number = startPage; number <= endPage; number++) {
            /** @type {?} */
            const page = this.makePage(number, number.toString(), number === currentPage);
            pages.push(page);
        }
        return pages;
    }
}
NovoDataTablePagination.decorators = [
    { type: Component, args: [{
                selector: 'novo-data-table-pagination',
                template: `
      <ng-container *ngIf="theme === 'basic' || theme === 'basic-wide'">
        <div class="novo-data-table-pagination-size">
            <novo-tiles *ngIf="displayedPageSizeOptions.length > 1"
                        [(ngModel)]="pageSize"
                        [options]="displayedPageSizeOptions"
                        (onChange)="changePageSize($event)"
                        data-automation-id="novo-data-table-pagination-tiles">
            </novo-tiles>
            <div *ngIf="displayedPageSizeOptions.length <= 1">{{ pageSize }}</div>
        </div>

        <div class="novo-data-table-range-label-long" data-automation-id="novo-data-table-pagination-range-label-long">
            {{ longRangeLabel }}
        </div>
        <div class="novo-data-table-range-label-short" data-automation-id="novo-data-table-pagination-range-label-short">
            {{ shortRangeLabel }}
        </div>
        <span class="spacer novo-data-table-spacer" *ngIf="theme === 'basic-wide'"></span>
        <button theme="dialogue" type="button"
                class="novo-data-table-pagination-navigation-previous"
                (click)="previousPage()"
                icon="previous"
                side="left"
                [disabled]="!hasPreviousPage()"
                data-automation-id="novo-data-table-pagination-previous">
            <span>{{ labels.previous }}</span>
        </button>
        <button theme="dialogue" type="button"
                class="novo-data-table-pagination-navigation-next"
                (click)="nextPage()"
                icon="next"
                side="right"
                [disabled]="!hasNextPage()"
                data-automation-id="novo-data-table-pagination-next">
            <span>{{ labels.next }}</span>
        </button>
      </ng-container>
      <ng-container *ngIf="theme === 'standard'">
        <h5 class="rows">{{ labels.itemsPerPage }}</h5>
        <novo-select
          [options]="displayedPageSizeOptions"
          [placeholder]="labels.select"
          [(ngModel)]="pageSize"
          (onSelect)="changePageSize($event.selected)"
          data-automation-id="pager-select"
          [attr.data-feature-id]="dataFeatureId">
        </novo-select>
        <span class="spacer"></span>
        <ul class="pager" data-automation-id="pager">
            <li class="page" (click)="selectPage(page - 1)" [ngClass]="{ 'disabled': page === 0 }"><i class="bhi-previous" data-automation-id="pager-previous"></i></li>
            <li class="page" [ngClass]="{active: p.number === page + 1}" *ngFor="let p of pages" (click)="selectPage(p.number - 1)">{{ p.text }}</li>
            <li class="page" (click)="selectPage(page + 1)" [ngClass]="{ 'disabled': page + 1 === totalPages }"><i class="bhi-next" data-automation-id="pager-next"></i></li>
        </ul>
      </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NovoDataTablePagination.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NovoLabelService },
    { type: DataTableState }
];
NovoDataTablePagination.propDecorators = {
    theme: [{ type: HostBinding, args: ['class',] }, { type: Input }],
    page: [{ type: Input }],
    pageSize: [{ type: Input }],
    dataFeatureId: [{ type: Input }],
    pageSizeOptions: [{ type: Input }],
    length: [{ type: Input }],
    pageChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NovoDataTablePagination.prototype.theme;
    /** @type {?} */
    NovoDataTablePagination.prototype._page;
    /**
     * @type {?}
     * @private
     */
    NovoDataTablePagination.prototype._pageSize;
    /** @type {?} */
    NovoDataTablePagination.prototype.dataFeatureId;
    /**
     * @type {?}
     * @private
     */
    NovoDataTablePagination.prototype._pageSizeOptions;
    /** @type {?} */
    NovoDataTablePagination.prototype._length;
    /** @type {?} */
    NovoDataTablePagination.prototype.pageChange;
    /** @type {?} */
    NovoDataTablePagination.prototype.displayedPageSizeOptions;
    /** @type {?} */
    NovoDataTablePagination.prototype.longRangeLabel;
    /** @type {?} */
    NovoDataTablePagination.prototype.shortRangeLabel;
    /** @type {?} */
    NovoDataTablePagination.prototype.pages;
    /**
     * @type {?}
     * @private
     */
    NovoDataTablePagination.prototype.resetSubscription;
    /** @type {?} */
    NovoDataTablePagination.prototype.totalPages;
    /**
     * @type {?}
     * @private
     */
    NovoDataTablePagination.prototype._initialized;
    /**
     * @type {?}
     * @private
     */
    NovoDataTablePagination.prototype.changeDetectorRef;
    /** @type {?} */
    NovoDataTablePagination.prototype.labels;
    /**
     * @type {?}
     * @private
     */
    NovoDataTablePagination.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1wYWdpbmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL3BhZ2luYXRpb24vZGF0YS10YWJsZS1wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztNQUU3RCxtQkFBbUIsR0FBRyxDQUFDOzs7O0FBOEQ3QixNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFpRWxDLFlBQW9CLGlCQUFvQyxFQUFTLE1BQXdCLEVBQVUsS0FBd0I7UUFBdkcsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUE5RDNILFVBQUssR0FBVyxVQUFVLENBQUM7UUFhM0IsVUFBSyxHQUFXLENBQUMsQ0FBQztRQXNCVixxQkFBZ0IsR0FBVSxFQUFFLENBQUM7UUFjckMsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUVWLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBNkIsQ0FBQztRQVluRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQzdELElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lB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QUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEtBQUssV0FBVyxDQUFDO1lBQzdFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQXRRRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdURUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBNUVDLGlCQUFpQjtZQVlWLGdCQUFnQjtZQUNoQixjQUFjOzs7b0JBaUVwQixXQUFXLFNBQUMsT0FBTyxjQUNuQixLQUFLO21CQUdMLEtBQUs7dUJBYUwsS0FBSzs0QkFVTCxLQUFLOzhCQUVMLEtBQUs7cUJBVUwsS0FBSzt5QkFjTCxNQUFNOzs7O0lBckRQLHdDQUUyQjs7SUFhM0Isd0NBQWtCOzs7OztJQVdsQiw0Q0FBMEI7O0lBQzFCLGdEQUErQjs7Ozs7SUFVL0IsbURBQXFDOztJQWNyQywwQ0FBb0I7O0lBRXBCLDZDQUFxRTs7SUFFckUsMkRBQW9FOztJQUNwRSxpREFBOEI7O0lBQzlCLGtEQUErQjs7SUFDL0Isd0NBQWtFOzs7OztJQUVsRSxvREFBd0M7O0lBQ3hDLDZDQUEwQjs7Ozs7SUFDMUIsK0NBQThCOzs7OztJQUVsQixvREFBNEM7O0lBQUUseUNBQStCOzs7OztJQUFFLHdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSURhdGFUYWJsZVBhZ2luYXRpb25FdmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL2RhdGEtdGFibGUtc3RhdGUuc2VydmljZSc7XG5cbmNvbnN0IE1BWF9QQUdFU19ESVNQTEFZRUQgPSA1O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGhlbWUgPT09ICdiYXNpYycgfHwgdGhlbWUgPT09ICdiYXNpYy13aWRlJ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb24tc2l6ZVwiPlxuICAgICAgICAgICAgPG5vdm8tdGlsZXMgKm5nSWY9XCJkaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMubGVuZ3RoID4gMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInBhZ2VTaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cImRpc3BsYXllZFBhZ2VTaXplT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2UpPVwiY2hhbmdlUGFnZVNpemUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbi10aWxlc1wiPlxuICAgICAgICAgICAgPC9ub3ZvLXRpbGVzPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImRpc3BsYXllZFBhZ2VTaXplT3B0aW9ucy5sZW5ndGggPD0gMVwiPnt7IHBhZ2VTaXplIH19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtcmFuZ2UtbGFiZWwtbG9uZ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uLXJhbmdlLWxhYmVsLWxvbmdcIj5cbiAgICAgICAgICAgIHt7IGxvbmdSYW5nZUxhYmVsIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLXJhbmdlLWxhYmVsLXNob3J0XCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb24tcmFuZ2UtbGFiZWwtc2hvcnRcIj5cbiAgICAgICAgICAgIHt7IHNob3J0UmFuZ2VMYWJlbCB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGFjZXIgbm92by1kYXRhLXRhYmxlLXNwYWNlclwiICpuZ0lmPVwidGhlbWUgPT09ICdiYXNpYy13aWRlJ1wiPjwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImRpYWxvZ3VlXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbi1uYXZpZ2F0aW9uLXByZXZpb3VzXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJldmlvdXNQYWdlKClcIlxuICAgICAgICAgICAgICAgIGljb249XCJwcmV2aW91c1wiXG4gICAgICAgICAgICAgICAgc2lkZT1cImxlZnRcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhaGFzUHJldmlvdXNQYWdlKClcIlxuICAgICAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uLXByZXZpb3VzXCI+XG4gICAgICAgICAgICA8c3Bhbj57eyBsYWJlbHMucHJldmlvdXMgfX08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uLW5hdmlnYXRpb24tbmV4dFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm5leHRQYWdlKClcIlxuICAgICAgICAgICAgICAgIGljb249XCJuZXh0XCJcbiAgICAgICAgICAgICAgICBzaWRlPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhaGFzTmV4dFBhZ2UoKVwiXG4gICAgICAgICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb24tbmV4dFwiPlxuICAgICAgICAgICAgPHNwYW4+e3sgbGFiZWxzLm5leHQgfX08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGhlbWUgPT09ICdzdGFuZGFyZCdcIj5cbiAgICAgICAgPGg1IGNsYXNzPVwicm93c1wiPnt7IGxhYmVscy5pdGVtc1BlclBhZ2UgfX08L2g1PlxuICAgICAgICA8bm92by1zZWxlY3RcbiAgICAgICAgICBbb3B0aW9uc109XCJkaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnNcIlxuICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJsYWJlbHMuc2VsZWN0XCJcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cInBhZ2VTaXplXCJcbiAgICAgICAgICAob25TZWxlY3QpPVwiY2hhbmdlUGFnZVNpemUoJGV2ZW50LnNlbGVjdGVkKVwiXG4gICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXItc2VsZWN0XCJcbiAgICAgICAgICBbYXR0ci5kYXRhLWZlYXR1cmUtaWRdPVwiZGF0YUZlYXR1cmVJZFwiPlxuICAgICAgICA8L25vdm8tc2VsZWN0PlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNwYWNlclwiPjwvc3Bhbj5cbiAgICAgICAgPHVsIGNsYXNzPVwicGFnZXJcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlclwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZVwiIChjbGljayk9XCJzZWxlY3RQYWdlKHBhZ2UgLSAxKVwiIFtuZ0NsYXNzXT1cInsgJ2Rpc2FibGVkJzogcGFnZSA9PT0gMCB9XCI+PGkgY2xhc3M9XCJiaGktcHJldmlvdXNcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlci1wcmV2aW91c1wiPjwvaT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZVwiIFtuZ0NsYXNzXT1cInthY3RpdmU6IHAubnVtYmVyID09PSBwYWdlICsgMX1cIiAqbmdGb3I9XCJsZXQgcCBvZiBwYWdlc1wiIChjbGljayk9XCJzZWxlY3RQYWdlKHAubnVtYmVyIC0gMSlcIj57eyBwLnRleHQgfX08L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZVwiIChjbGljayk9XCJzZWxlY3RQYWdlKHBhZ2UgKyAxKVwiIFtuZ0NsYXNzXT1cInsgJ2Rpc2FibGVkJzogcGFnZSArIDEgPT09IHRvdGFsUGFnZXMgfVwiPjxpIGNsYXNzPVwiYmhpLW5leHRcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlci1uZXh0XCI+PC9pPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVQYWdpbmF0aW9uPFQ+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZyA9ICdzdGFuZGFyZCc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuICBzZXQgcGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlID0gcGFnZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMubG9uZ1JhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgZmFsc2UpO1xuICAgIHRoaXMuc2hvcnRSYW5nZUxhYmVsID0gdGhpcy5sYWJlbHMuZ2V0UmFuZ2VUZXh0KHRoaXMucGFnZSwgdGhpcy5wYWdlU2l6ZSwgdGhpcy5sZW5ndGgsIHRydWUpO1xuICAgIHRoaXMuc3RhdGUucGFnZSA9IHRoaXMuX3BhZ2U7XG4gIH1cbiAgX3BhZ2U6IG51bWJlciA9IDA7XG5cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplO1xuICB9XG4gIHNldCBwYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXllZFBhZ2VTaXplT3B0aW9ucygpO1xuICAgIHRoaXMuc3RhdGUucGFnZVNpemUgPSB0aGlzLl9wYWdlU2l6ZTtcbiAgfVxuICBwcml2YXRlIF9wYWdlU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBkYXRhRmVhdHVyZUlkOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2VTaXplT3B0aW9ucygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplT3B0aW9ucztcbiAgfVxuICBzZXQgcGFnZVNpemVPcHRpb25zKHBhZ2VTaXplT3B0aW9uczogYW55W10pIHtcbiAgICB0aGlzLl9wYWdlU2l6ZU9wdGlvbnMgPSBwYWdlU2l6ZU9wdGlvbnM7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMoKTtcbiAgfVxuICBwcml2YXRlIF9wYWdlU2l6ZU9wdGlvbnM6IGFueVtdID0gW107XG5cbiAgQElucHV0KClcbiAgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XG4gIH1cbiAgc2V0IGxlbmd0aChsZW5ndGg6IG51bWJlcikge1xuICAgIHRoaXMuX2xlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMubG9uZ1JhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgZmFsc2UpO1xuICAgIHRoaXMuc2hvcnRSYW5nZUxhYmVsID0gdGhpcy5sYWJlbHMuZ2V0UmFuZ2VUZXh0KHRoaXMucGFnZSwgdGhpcy5wYWdlU2l6ZSwgdGhpcy5sZW5ndGgsIHRydWUpO1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgfVxuICBfbGVuZ3RoOiBudW1iZXIgPSAwO1xuXG4gIEBPdXRwdXQoKSBwYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlUGFnaW5hdGlvbkV2ZW50PigpO1xuXG4gIHB1YmxpYyBkaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnM6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W107XG4gIHB1YmxpYyBsb25nUmFuZ2VMYWJlbDogc3RyaW5nO1xuICBwdWJsaWMgc2hvcnRSYW5nZUxhYmVsOiBzdHJpbmc7XG4gIHB1YmxpYyBwYWdlczogeyBudW1iZXI6IG51bWJlcjsgdGV4dDogc3RyaW5nOyBhY3RpdmU6IGJvb2xlYW4gfVtdO1xuXG4gIHByaXZhdGUgcmVzZXRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHVibGljIHRvdGFsUGFnZXM6IG51bWJlcjtcbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHByaXZhdGUgc3RhdGU6IERhdGFUYWJsZVN0YXRlPFQ+KSB7XG4gICAgdGhpcy5yZXNldFN1YnNjcmlwdGlvbiA9IHRoaXMuc3RhdGUucmVzZXRTb3VyY2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMucGFnZSA9IDA7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXllZFBhZ2VTaXplT3B0aW9ucygpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVzZXRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RQYWdlKHBhZ2UpIHtcbiAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgIHRoaXMuZW1pdFBhZ2VFdmVudCgpO1xuICB9XG5cbiAgcHVibGljIG5leHRQYWdlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNOZXh0UGFnZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGFnZSsrO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgICB0aGlzLmVtaXRQYWdlRXZlbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyBwcmV2aW91c1BhZ2UoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc1ByZXZpb3VzUGFnZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGFnZS0tO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgICB0aGlzLmVtaXRQYWdlRXZlbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyBoYXNQcmV2aW91c1BhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA+PSAxICYmIHRoaXMucGFnZVNpemUgIT09IDA7XG4gIH1cblxuICBwdWJsaWMgaGFzTmV4dFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbCh0aGlzLmxlbmd0aCAvIHRoaXMucGFnZVNpemUpIC0gMTtcbiAgICByZXR1cm4gdGhpcy5wYWdlIDwgbnVtYmVyT2ZQYWdlcyAmJiB0aGlzLnBhZ2VTaXplICE9PSAwO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2UgPSAwO1xuICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB0aGlzLmVtaXRQYWdlRXZlbnQodHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZURpc3BsYXllZFBhZ2VTaXplT3B0aW9ucygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5kaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMpIHtcbiAgICAgIHRoaXMuZGlzcGxheWVkUGFnZVNpemVPcHRpb25zID0gW107XG4gICAgICB0aGlzLnBhZ2VTaXplT3B0aW9ucy5mb3JFYWNoKChvcHRpb246IGFueSkgPT4ge1xuICAgICAgICBpZiAob3B0aW9uLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMucHVzaChvcHRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGlzcGxheWVkUGFnZVNpemVPcHRpb25zLnB1c2goe1xuICAgICAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgICAgICAgIGxhYmVsOiBvcHRpb24sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmxvbmdSYW5nZUxhYmVsID0gdGhpcy5sYWJlbHMuZ2V0UmFuZ2VUZXh0KHRoaXMucGFnZSwgdGhpcy5wYWdlU2l6ZSwgdGhpcy5sZW5ndGgsIGZhbHNlKTtcbiAgICB0aGlzLnNob3J0UmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCB0cnVlKTtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGVtaXRQYWdlRXZlbnQoaXNQYWdlU2l6ZUNoYW5nZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICBwYWdlU2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIGxlbmd0aDogdGhpcy5sZW5ndGgsXG4gICAgICBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLFxuICAgICAgc29ydDogdGhpcy5zdGF0ZS5zb3J0LFxuICAgIH07XG4gICAgdGhpcy5wYWdlQ2hhbmdlLm5leHQoZXZlbnQpO1xuICAgIHRoaXMuc3RhdGUucGFnZSA9IHRoaXMucGFnZTtcbiAgICB0aGlzLnN0YXRlLnBhZ2VTaXplID0gdGhpcy5wYWdlU2l6ZTtcbiAgICB0aGlzLmxvbmdSYW5nZUxhYmVsID0gdGhpcy5sYWJlbHMuZ2V0UmFuZ2VUZXh0KHRoaXMucGFnZSwgdGhpcy5wYWdlU2l6ZSwgdGhpcy5sZW5ndGgsIGZhbHNlKTtcbiAgICB0aGlzLnNob3J0UmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCB0cnVlKTtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoZXZlbnQpO1xuICAgIHRoaXMuc3RhdGUub25QYWdpbmF0aW9uQ2hhbmdlKGlzUGFnZVNpemVDaGFuZ2UsIHRoaXMucGFnZVNpemUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVUb3RhbFBhZ2VzKCkge1xuICAgIGNvbnN0IHRvdGFsUGFnZXMgPSB0aGlzLnBhZ2VTaXplIDwgMSA/IDEgOiBNYXRoLmNlaWwodGhpcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKTtcbiAgICByZXR1cm4gTWF0aC5tYXgodG90YWxQYWdlcyB8fCAwLCAxKTtcbiAgfVxuXG4gIHByaXZhdGUgbWFrZVBhZ2UobnVtYmVyOiBudW1iZXIsIHRleHQ6IHN0cmluZywgaXNBY3RpdmU6IGJvb2xlYW4pOiB7IG51bWJlcjogbnVtYmVyOyB0ZXh0OiBzdHJpbmc7IGFjdGl2ZTogYm9vbGVhbiB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgbnVtYmVyLFxuICAgICAgdGV4dCxcbiAgICAgIGFjdGl2ZTogaXNBY3RpdmUsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFnZXMoY3VycmVudFBhZ2U6IG51bWJlciwgdG90YWxQYWdlczogbnVtYmVyKTogeyBudW1iZXI6IG51bWJlcjsgdGV4dDogc3RyaW5nOyBhY3RpdmU6IGJvb2xlYW4gfVtdIHtcbiAgICBjb25zdCBwYWdlcyA9IFtdO1xuXG4gICAgLy8gRGVmYXVsdCBwYWdlIGxpbWl0c1xuICAgIGxldCBzdGFydFBhZ2UgPSAxO1xuICAgIGxldCBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICBjb25zdCBpc01heFNpemVkID0gTUFYX1BBR0VTX0RJU1BMQVlFRCA8IHRvdGFsUGFnZXM7XG5cbiAgICAvLyBSZWNvbXB1dGUgaWYgbWF4UGFnZXNEaXNwbGF5ZWRcbiAgICBpZiAoaXNNYXhTaXplZCkge1xuICAgICAgLy8gQ3VycmVudCBwYWdlIGlzIGRpc3BsYXllZCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB2aXNpYmxlIG9uZXNcbiAgICAgIHN0YXJ0UGFnZSA9IE1hdGgubWF4KGN1cnJlbnRQYWdlIC0gTWF0aC5mbG9vcihNQVhfUEFHRVNfRElTUExBWUVEIC8gMiksIDEpO1xuICAgICAgZW5kUGFnZSA9IHN0YXJ0UGFnZSArIE1BWF9QQUdFU19ESVNQTEFZRUQgLSAxO1xuXG4gICAgICAvLyBBZGp1c3QgaWYgbGltaXQgaXMgZXhjZWVkZWRcbiAgICAgIGlmIChlbmRQYWdlID4gdG90YWxQYWdlcykge1xuICAgICAgICBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICAgICAgc3RhcnRQYWdlID0gZW5kUGFnZSAtIE1BWF9QQUdFU19ESVNQTEFZRUQgKyAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBwYWdlIG51bWJlciBsaW5rc1xuICAgIGZvciAobGV0IG51bWJlciA9IHN0YXJ0UGFnZTsgbnVtYmVyIDw9IGVuZFBhZ2U7IG51bWJlcisrKSB7XG4gICAgICBjb25zdCBwYWdlID0gdGhpcy5tYWtlUGFnZShudW1iZXIsIG51bWJlci50b1N0cmluZygpLCBudW1iZXIgPT09IGN1cnJlbnRQYWdlKTtcbiAgICAgIHBhZ2VzLnB1c2gocGFnZSk7XG4gICAgfVxuICAgIHJldHVybiBwYWdlcztcbiAgfVxufVxuIl19