import { CdkColumnDef } from '@angular/cdk/table';
import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { NovoLabelService } from '../../../services/novo-label-service';
import { NovoDropdownElement } from '../../dropdown/Dropdown';
import { IDataTableChangeEvent, IDataTableColumn, IDataTableColumnFilterConfig, IDataTableColumnFilterOption, IDataTableSortFilter } from '../interfaces';
import { NovoDataTableSortFilter } from '../sort-filter/sort-filter.directive';
import { DataTableState } from '../state/data-table-state.service';
import * as ɵngcc0 from '@angular/core';
export declare class NovoDataTableCellHeader<T> implements IDataTableSortFilter, OnInit, OnDestroy {
    changeDetectorRef: ChangeDetectorRef;
    labels: NovoLabelService;
    private state;
    private renderer;
    private elementRef;
    _sort: NovoDataTableSortFilter<T>;
    _cdkColumnDef: CdkColumnDef;
    filterInput: ElementRef;
    dropdown: NovoDropdownElement;
    optionFilterInput: ElementRef;
    defaultSort: {
        id: string;
        value: string;
    };
    allowMultipleFilters: boolean;
    resized: EventEmitter<IDataTableColumn<T>>;
    filterTemplate: TemplateRef<any>;
    resizable: boolean;
    set column(column: IDataTableColumn<T>);
    private _rerenderSubscription;
    private changeTimeout;
    label: string;
    icon: string;
    labelIcon: string;
    id: string;
    filter: any;
    direction: string;
    filterActive: boolean;
    sortActive: boolean;
    showCustomRange: boolean;
    activeDateFilter: string;
    config: {
        sortable: boolean;
        filterable: boolean;
        resizable: boolean;
        transforms?: {
            filter?: Function;
            sort?: Function;
        };
        filterConfig?: IDataTableColumnFilterConfig;
    };
    multiSelect: boolean;
    multiSelectedOptions: Array<any>;
    private multiSelectedOptionIsHidden;
    optionFilter: string;
    error: boolean;
    private subscriptions;
    private _column;
    constructor(changeDetectorRef: ChangeDetectorRef, labels: NovoLabelService, state: DataTableState<T>, renderer: Renderer2, elementRef: ElementRef, _sort: NovoDataTableSortFilter<T>, _cdkColumnDef: CdkColumnDef);
    ngOnInit(): void;
    setupFilterOptions(): void;
    ngOnDestroy(): void;
    checkSortFilterState(sortFilterState: IDataTableChangeEvent, initialConfig?: boolean): void;
    isSelected(option: any, optionsList: any): boolean;
    toggleSelection(option: any): void;
    optionPresentCheck(item: any, optionValue: any): boolean;
    cancel(): void;
    filterMultiSelect(): void;
    multiSelectOptionFilter(optionFilter: string): void;
    multiSelectOptionIsHidden(option: string | IDataTableColumnFilterOption): boolean;
    multiSelectHasVisibleOptions(): boolean;
    private getOptionText;
    multiSelectOptionFilterHandleKeydown(event: KeyboardEvent): void;
    private clearOptionFilter;
    startResize(mouseDownEvent: MouseEvent): void;
    toggleCustomRange(event: Event, value: boolean): void;
    focusInput(): void;
    sort(): void;
    filterData(filter?: any): void;
    clearFilter(): void;
    private getNextSortDirection;
    private getDefaultDateFilterOptions;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NovoDataTableCellHeader<any>, [null, null, null, null, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NovoDataTableCellHeader<any>, "[novo-data-table-cell-config]", never, { "allowMultipleFilters": "allowMultipleFilters"; "column": "novo-data-table-cell-config"; "defaultSort": "defaultSort"; "resized": "resized"; "filterTemplate": "filterTemplate"; }, {}, never, never>;
}

//# sourceMappingURL=data-table-header-cell.component.d.ts.map