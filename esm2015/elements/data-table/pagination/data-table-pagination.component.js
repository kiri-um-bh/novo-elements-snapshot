/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, HostBinding, } from '@angular/core';
import { NovoLabelService } from '../../../services/novo-label-service';
import { DataTableState } from '../state/data-table-state.service';
/** @type {?} */
const DEFAULT_PAGE_SIZE = 50;
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
        this.resetSubscription = this.state.resetSource.subscribe(() => {
            this.page = 0;
            this.changeDetectorRef.markForCheck();
        });
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
     * @return {?}
     */
    updateDisplayedPageSizeOptions() {
        if (!this._initialized) {
            return;
        }
        if (!this.displayedPageSizeOptions) {
            this.displayedPageSizeOptions = [];
            this.pageSizeOptions.forEach((option) => {
                if (option.hasOwnProperty('value')) {
                    this.displayedPageSizeOptions.push(option);
                }
                else {
                    this.displayedPageSizeOptions.push({
                        value: option,
                        label: option,
                    });
                }
            });
        }
        this.longRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, false);
        this.shortRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, true);
        this.totalPages = this.calculateTotalPages();
        this.pages = this.getPages(this.page, this.totalPages);
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @param {?=} isPageSizeChange
     * @return {?}
     */
    emitPageEvent(isPageSizeChange = false) {
        /** @type {?} */
        let event = {
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
     * @return {?}
     */
    calculateTotalPages() {
        /** @type {?} */
        const totalPages = this.pageSize < 1 ? 1 : Math.ceil(this.length / this.pageSize);
        return Math.max(totalPages || 0, 1);
    }
    /**
     * @param {?} number
     * @param {?} text
     * @param {?} isActive
     * @return {?}
     */
    makePage(number, text, isActive) {
        return {
            number: number,
            text: text,
            active: isActive,
        };
    }
    /**
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    getPages(currentPage, totalPages) {
        /** @type {?} */
        let pages = [];
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
        <novo-select [options]="displayedPageSizeOptions" [placeholder]="labels.select" [(ngModel)]="pageSize" (onSelect)="changePageSize($event.selected)" data-automation-id="pager-select"></novo-select>
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
NovoDataTablePagination.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NovoLabelService },
    { type: DataTableState }
];
NovoDataTablePagination.propDecorators = {
    theme: [{ type: HostBinding, args: ['class',] }, { type: Input }],
    page: [{ type: Input }],
    pageSize: [{ type: Input }],
    pageSizeOptions: [{ type: Input }],
    length: [{ type: Input }],
    pageChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NovoDataTablePagination.prototype.theme;
    /** @type {?} */
    NovoDataTablePagination.prototype._page;
    /** @type {?} */
    NovoDataTablePagination.prototype._pageSize;
    /** @type {?} */
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
    /** @type {?} */
    NovoDataTablePagination.prototype.resetSubscription;
    /** @type {?} */
    NovoDataTablePagination.prototype.totalPages;
    /** @type {?} */
    NovoDataTablePagination.prototype._initialized;
    /** @type {?} */
    NovoDataTablePagination.prototype.changeDetectorRef;
    /** @type {?} */
    NovoDataTablePagination.prototype.labels;
    /** @type {?} */
    NovoDataTablePagination.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1wYWdpbmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL3BhZ2luYXRpb24vZGF0YS10YWJsZS1wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7O01BRTdELGlCQUFpQixHQUFHLEVBQUU7O01BQ3RCLG1CQUFtQixHQUFHLENBQUM7Ozs7QUF1RDdCLE1BQU07Ozs7OztJQWlFSixZQUFvQixpQkFBb0MsRUFBUyxNQUF3QixFQUFVLEtBQXdCO1FBQXZHLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBOUQzSCxVQUFLLEdBQVcsVUFBVSxDQUFDO1FBYTNCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFxQlYscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBY3JDLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFHcEIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUE2QixDQUFDO1FBWXpELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzdELElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FB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RSxFQUFFOztrQkFDbEQsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEtBQUssV0FBVyxDQUFDO1lBQzdFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQS9QRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnRFQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQXRFQyxpQkFBaUI7WUFZVixnQkFBZ0I7WUFDaEIsY0FBYzs7O29CQTJEcEIsV0FBVyxTQUFDLE9BQU8sY0FDbkIsS0FBSzttQkFHTCxLQUFLO3VCQWFMLEtBQUs7OEJBV0wsS0FBSztxQkFVTCxLQUFLO3lCQWNMLE1BQU07Ozs7SUFwRFAsd0NBRTJCOztJQWEzQix3Q0FBa0I7O0lBV2xCLDRDQUEwQjs7SUFVMUIsbURBQXFDOztJQWNyQywwQ0FBb0I7O0lBRXBCLDZDQUMyRDs7SUFFM0QsMkRBQW9FOztJQUNwRSxpREFBOEI7O0lBQzlCLGtEQUErQjs7SUFDL0Isd0NBQWtFOztJQUVsRSxvREFBd0M7O0lBQ3hDLDZDQUEwQjs7SUFDMUIsK0NBQThCOztJQUVsQixvREFBNEM7O0lBQUUseUNBQStCOztJQUFFLHdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSURhdGFUYWJsZVBhZ2luYXRpb25FdmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL2RhdGEtdGFibGUtc3RhdGUuc2VydmljZSc7XG5cbmNvbnN0IERFRkFVTFRfUEFHRV9TSVpFID0gNTA7XG5jb25zdCBNQVhfUEFHRVNfRElTUExBWUVEID0gNTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRoZW1lID09PSAnYmFzaWMnIHx8IHRoZW1lID09PSAnYmFzaWMtd2lkZSdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uLXNpemVcIj5cbiAgICAgICAgICAgIDxub3ZvLXRpbGVzICpuZ0lmPVwiZGlzcGxheWVkUGFnZVNpemVPcHRpb25zLmxlbmd0aCA+IDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJwYWdlU2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uc109XCJkaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImNoYW5nZVBhZ2VTaXplKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb24tdGlsZXNcIj5cbiAgICAgICAgICAgIDwvbm92by10aWxlcz5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJkaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMubGVuZ3RoIDw9IDFcIj57eyBwYWdlU2l6ZSB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLXJhbmdlLWxhYmVsLWxvbmdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbi1yYW5nZS1sYWJlbC1sb25nXCI+XG4gICAgICAgICAgICB7eyBsb25nUmFuZ2VMYWJlbCB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1yYW5nZS1sYWJlbC1zaG9ydFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uLXJhbmdlLWxhYmVsLXNob3J0XCI+XG4gICAgICAgICAgICB7eyBzaG9ydFJhbmdlTGFiZWwgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3BhY2VyIG5vdm8tZGF0YS10YWJsZS1zcGFjZXJcIiAqbmdJZj1cInRoZW1lID09PSAnYmFzaWMtd2lkZSdcIj48L3NwYW4+XG4gICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb24tbmF2aWdhdGlvbi1wcmV2aW91c1wiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInByZXZpb3VzUGFnZSgpXCJcbiAgICAgICAgICAgICAgICBpY29uPVwicHJldmlvdXNcIlxuICAgICAgICAgICAgICAgIHNpZGU9XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWhhc1ByZXZpb3VzUGFnZSgpXCJcbiAgICAgICAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbi1wcmV2aW91c1wiPlxuICAgICAgICAgICAgPHNwYW4+e3sgbGFiZWxzLnByZXZpb3VzIH19PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImRpYWxvZ3VlXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbi1uYXZpZ2F0aW9uLW5leHRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJuZXh0UGFnZSgpXCJcbiAgICAgICAgICAgICAgICBpY29uPVwibmV4dFwiXG4gICAgICAgICAgICAgICAgc2lkZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWhhc05leHRQYWdlKClcIlxuICAgICAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uLW5leHRcIj5cbiAgICAgICAgICAgIDxzcGFuPnt7IGxhYmVscy5uZXh0IH19PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRoZW1lID09PSAnc3RhbmRhcmQnXCI+XG4gICAgICAgIDxoNSBjbGFzcz1cInJvd3NcIj57eyBsYWJlbHMuaXRlbXNQZXJQYWdlIH19PC9oNT5cbiAgICAgICAgPG5vdm8tc2VsZWN0IFtvcHRpb25zXT1cImRpc3BsYXllZFBhZ2VTaXplT3B0aW9uc1wiIFtwbGFjZWhvbGRlcl09XCJsYWJlbHMuc2VsZWN0XCIgWyhuZ01vZGVsKV09XCJwYWdlU2l6ZVwiIChvblNlbGVjdCk9XCJjaGFuZ2VQYWdlU2l6ZSgkZXZlbnQuc2VsZWN0ZWQpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXItc2VsZWN0XCI+PC9ub3ZvLXNlbGVjdD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGFjZXJcIj48L3NwYW4+XG4gICAgICAgIDx1bCBjbGFzcz1cInBhZ2VyXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXJcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VcIiAoY2xpY2spPVwic2VsZWN0UGFnZShwYWdlIC0gMSlcIiBbbmdDbGFzc109XCJ7ICdkaXNhYmxlZCc6IHBhZ2UgPT09IDAgfVwiPjxpIGNsYXNzPVwiYmhpLXByZXZpb3VzXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXItcHJldmlvdXNcIj48L2k+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VcIiBbbmdDbGFzc109XCJ7YWN0aXZlOiBwLm51bWJlciA9PT0gcGFnZSArIDF9XCIgKm5nRm9yPVwibGV0IHAgb2YgcGFnZXNcIiAoY2xpY2spPVwic2VsZWN0UGFnZShwLm51bWJlciAtIDEpXCI+e3sgcC50ZXh0IH19PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VcIiAoY2xpY2spPVwic2VsZWN0UGFnZShwYWdlICsgMSlcIiBbbmdDbGFzc109XCJ7ICdkaXNhYmxlZCc6IHBhZ2UgKyAxID09PSB0b3RhbFBhZ2VzIH1cIj48aSBjbGFzcz1cImJoaS1uZXh0XCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXItbmV4dFwiPjwvaT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlUGFnaW5hdGlvbjxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmcgPSAnc3RhbmRhcmQnO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBwYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cbiAgc2V0IHBhZ2UocGFnZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZSA9IHBhZ2U7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmxvbmdSYW5nZUxhYmVsID0gdGhpcy5sYWJlbHMuZ2V0UmFuZ2VUZXh0KHRoaXMucGFnZSwgdGhpcy5wYWdlU2l6ZSwgdGhpcy5sZW5ndGgsIGZhbHNlKTtcbiAgICB0aGlzLnNob3J0UmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCB0cnVlKTtcbiAgICB0aGlzLnN0YXRlLnBhZ2UgPSB0aGlzLl9wYWdlO1xuICB9XG4gIF9wYWdlOiBudW1iZXIgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBwYWdlU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZTtcbiAgfVxuICBzZXQgcGFnZVNpemUocGFnZVNpemU6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMoKTtcbiAgICB0aGlzLnN0YXRlLnBhZ2VTaXplID0gdGhpcy5fcGFnZVNpemU7XG4gIH1cbiAgcHJpdmF0ZSBfcGFnZVNpemU6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBnZXQgcGFnZVNpemVPcHRpb25zKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVNpemVPcHRpb25zO1xuICB9XG4gIHNldCBwYWdlU2l6ZU9wdGlvbnMocGFnZVNpemVPcHRpb25zOiBhbnlbXSkge1xuICAgIHRoaXMuX3BhZ2VTaXplT3B0aW9ucyA9IHBhZ2VTaXplT3B0aW9ucztcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXllZFBhZ2VTaXplT3B0aW9ucygpO1xuICB9XG4gIHByaXZhdGUgX3BhZ2VTaXplT3B0aW9uczogYW55W10gPSBbXTtcblxuICBASW5wdXQoKVxuICBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcbiAgfVxuICBzZXQgbGVuZ3RoKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgdGhpcy5fbGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5sb25nUmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCBmYWxzZSk7XG4gICAgdGhpcy5zaG9ydFJhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgdHJ1ZSk7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICB9XG4gIF9sZW5ndGg6IG51bWJlciA9IDA7XG5cbiAgQE91dHB1dCgpXG4gIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPElEYXRhVGFibGVQYWdpbmF0aW9uRXZlbnQ+KCk7XG5cbiAgcHVibGljIGRpc3BsYXllZFBhZ2VTaXplT3B0aW9uczogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXTtcbiAgcHVibGljIGxvbmdSYW5nZUxhYmVsOiBzdHJpbmc7XG4gIHB1YmxpYyBzaG9ydFJhbmdlTGFiZWw6IHN0cmluZztcbiAgcHVibGljIHBhZ2VzOiB7IG51bWJlcjogbnVtYmVyOyB0ZXh0OiBzdHJpbmc7IGFjdGl2ZTogYm9vbGVhbiB9W107XG5cbiAgcHJpdmF0ZSByZXNldFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwdWJsaWMgdG90YWxQYWdlczogbnVtYmVyO1xuICBwcml2YXRlIF9pbml0aWFsaXplZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcHJpdmF0ZSBzdGF0ZTogRGF0YVRhYmxlU3RhdGU8VD4pIHtcbiAgICB0aGlzLnJlc2V0U3Vic2NyaXB0aW9uID0gdGhpcy5zdGF0ZS5yZXNldFNvdXJjZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5wYWdlID0gMDtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheWVkUGFnZVNpemVPcHRpb25zKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZXNldFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdFBhZ2UocGFnZSkge1xuICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgdGhpcy5lbWl0UGFnZUV2ZW50KCk7XG4gIH1cblxuICBwdWJsaWMgbmV4dFBhZ2UoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc05leHRQYWdlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wYWdlKys7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgIHRoaXMuZW1pdFBhZ2VFdmVudCgpO1xuICB9XG5cbiAgcHVibGljIHByZXZpb3VzUGFnZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzUHJldmlvdXNQYWdlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wYWdlLS07XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgIHRoaXMuZW1pdFBhZ2VFdmVudCgpO1xuICB9XG5cbiAgcHVibGljIGhhc1ByZXZpb3VzUGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlID49IDEgJiYgdGhpcy5wYWdlU2l6ZSAhPT0gMDtcbiAgfVxuXG4gIHB1YmxpYyBoYXNOZXh0UGFnZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKHRoaXMubGVuZ3RoIC8gdGhpcy5wYWdlU2l6ZSkgLSAxO1xuICAgIHJldHVybiB0aGlzLnBhZ2UgPCBudW1iZXJPZlBhZ2VzICYmIHRoaXMucGFnZVNpemUgIT09IDA7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucGFnZSA9IDA7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuICAgIHRoaXMuZW1pdFBhZ2VFdmVudCh0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRGlzcGxheWVkUGFnZVNpemVPcHRpb25zKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmRpc3BsYXllZFBhZ2VTaXplT3B0aW9ucykge1xuICAgICAgdGhpcy5kaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMucGFnZVNpemVPcHRpb25zLmZvckVhY2goKG9wdGlvbjogYW55KSA9PiB7XG4gICAgICAgIGlmIChvcHRpb24uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXllZFBhZ2VTaXplT3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMucHVzaCh7XG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uLFxuICAgICAgICAgICAgbGFiZWw6IG9wdGlvbixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubG9uZ1JhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgZmFsc2UpO1xuICAgIHRoaXMuc2hvcnRSYW5nZUxhYmVsID0gdGhpcy5sYWJlbHMuZ2V0UmFuZ2VUZXh0KHRoaXMucGFnZSwgdGhpcy5wYWdlU2l6ZSwgdGhpcy5sZW5ndGgsIHRydWUpO1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdFBhZ2VFdmVudChpc1BhZ2VTaXplQ2hhbmdlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBsZXQgZXZlbnQgPSB7XG4gICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICBwYWdlU2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgIGxlbmd0aDogdGhpcy5sZW5ndGgsXG4gICAgICBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLFxuICAgICAgc29ydDogdGhpcy5zdGF0ZS5zb3J0LFxuICAgIH07XG4gICAgdGhpcy5wYWdlQ2hhbmdlLm5leHQoZXZlbnQpO1xuICAgIHRoaXMuc3RhdGUucGFnZSA9IHRoaXMucGFnZTtcbiAgICB0aGlzLnN0YXRlLnBhZ2VTaXplID0gdGhpcy5wYWdlU2l6ZTtcbiAgICB0aGlzLmxvbmdSYW5nZUxhYmVsID0gdGhpcy5sYWJlbHMuZ2V0UmFuZ2VUZXh0KHRoaXMucGFnZSwgdGhpcy5wYWdlU2l6ZSwgdGhpcy5sZW5ndGgsIGZhbHNlKTtcbiAgICB0aGlzLnNob3J0UmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCB0cnVlKTtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoZXZlbnQpO1xuICAgIHRoaXMuc3RhdGUub25QYWdpbmF0aW9uQ2hhbmdlKGlzUGFnZVNpemVDaGFuZ2UsIHRoaXMucGFnZVNpemUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVUb3RhbFBhZ2VzKCkge1xuICAgIGNvbnN0IHRvdGFsUGFnZXMgPSB0aGlzLnBhZ2VTaXplIDwgMSA/IDEgOiBNYXRoLmNlaWwodGhpcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKTtcbiAgICByZXR1cm4gTWF0aC5tYXgodG90YWxQYWdlcyB8fCAwLCAxKTtcbiAgfVxuXG4gIHByaXZhdGUgbWFrZVBhZ2UobnVtYmVyOiBudW1iZXIsIHRleHQ6IHN0cmluZywgaXNBY3RpdmU6IGJvb2xlYW4pOiB7IG51bWJlcjogbnVtYmVyOyB0ZXh0OiBzdHJpbmc7IGFjdGl2ZTogYm9vbGVhbiB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgbnVtYmVyOiBudW1iZXIsXG4gICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgYWN0aXZlOiBpc0FjdGl2ZSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYWdlcyhjdXJyZW50UGFnZTogbnVtYmVyLCB0b3RhbFBhZ2VzOiBudW1iZXIpOiB7IG51bWJlcjogbnVtYmVyOyB0ZXh0OiBzdHJpbmc7IGFjdGl2ZTogYm9vbGVhbiB9W10ge1xuICAgIGxldCBwYWdlcyA9IFtdO1xuXG4gICAgLy8gRGVmYXVsdCBwYWdlIGxpbWl0c1xuICAgIGxldCBzdGFydFBhZ2UgPSAxO1xuICAgIGxldCBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICBjb25zdCBpc01heFNpemVkID0gTUFYX1BBR0VTX0RJU1BMQVlFRCA8IHRvdGFsUGFnZXM7XG5cbiAgICAvLyBSZWNvbXB1dGUgaWYgbWF4UGFnZXNEaXNwbGF5ZWRcbiAgICBpZiAoaXNNYXhTaXplZCkge1xuICAgICAgLy8gQ3VycmVudCBwYWdlIGlzIGRpc3BsYXllZCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB2aXNpYmxlIG9uZXNcbiAgICAgIHN0YXJ0UGFnZSA9IE1hdGgubWF4KGN1cnJlbnRQYWdlIC0gTWF0aC5mbG9vcihNQVhfUEFHRVNfRElTUExBWUVEIC8gMiksIDEpO1xuICAgICAgZW5kUGFnZSA9IHN0YXJ0UGFnZSArIE1BWF9QQUdFU19ESVNQTEFZRUQgLSAxO1xuXG4gICAgICAvLyBBZGp1c3QgaWYgbGltaXQgaXMgZXhjZWVkZWRcbiAgICAgIGlmIChlbmRQYWdlID4gdG90YWxQYWdlcykge1xuICAgICAgICBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICAgICAgc3RhcnRQYWdlID0gZW5kUGFnZSAtIE1BWF9QQUdFU19ESVNQTEFZRUQgKyAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBwYWdlIG51bWJlciBsaW5rc1xuICAgIGZvciAobGV0IG51bWJlciA9IHN0YXJ0UGFnZTsgbnVtYmVyIDw9IGVuZFBhZ2U7IG51bWJlcisrKSB7XG4gICAgICBjb25zdCBwYWdlID0gdGhpcy5tYWtlUGFnZShudW1iZXIsIG51bWJlci50b1N0cmluZygpLCBudW1iZXIgPT09IGN1cnJlbnRQYWdlKTtcbiAgICAgIHBhZ2VzLnB1c2gocGFnZSk7XG4gICAgfVxuICAgIHJldHVybiBwYWdlcztcbiAgfVxufVxuIl19