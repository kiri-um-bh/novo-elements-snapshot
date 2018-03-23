import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { IDataTablePaginationEvent } from '../interfaces';
import { NovoLabelService } from '../../../services/novo-label-service';
import { DataTableState } from '../state';
export declare class NovoDataTablePagination implements OnInit, OnDestroy {
    private changeDetectorRef;
    labels: NovoLabelService;
    private state;
    theme: string;
    page: number;
    _page: number;
    length: number;
    _length: number;
    pageSize: number;
    private _pageSize;
    pageSizeOptions: any[];
    private _pageSizeOptions;
    pageChange: EventEmitter<IDataTablePaginationEvent>;
    displayedPageSizeOptions: {
        value: string;
        label: string;
    }[];
    longRangeLabel: string;
    shortRangeLabel: string;
    pages: {
        number: number;
        text: string;
        active: boolean;
    }[];
    private resetSubscription;
    private totalPages;
    private _initialized;
    constructor(changeDetectorRef: ChangeDetectorRef, labels: NovoLabelService, state: DataTableState);
    ngOnInit(): void;
    ngOnDestroy(): void;
    selectPage(page: any): void;
    nextPage(): void;
    previousPage(): void;
    hasPreviousPage(): boolean;
    hasNextPage(): boolean;
    changePageSize(pageSize: number): void;
    private updateDisplayedPageSizeOptions();
    private emitPageEvent();
    private calculateTotalPages();
    private makePage(number, text, isActive);
    private getPages(currentPage, totalPages);
}
