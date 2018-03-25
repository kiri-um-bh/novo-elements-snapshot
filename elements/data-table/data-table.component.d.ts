import { EventEmitter, AfterContentInit, ChangeDetectorRef, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import { IDataTableColumn, IDataTablePaginationOptions, IDataTableSearchOptions, IDataTableService } from './interfaces';
import { DataTableSource } from './data-table.source';
import { NovoLabelService } from '../../services/novo-label-service';
import { DataTableState } from './state/data-table-state.service';
import { NovoTemplate } from '../common/novo-template/novo-template.directive';
export declare class NovoDataTable<T> implements AfterContentInit, OnDestroy {
    labels: NovoLabelService;
    private ref;
    state: DataTableState;
    globalSearchHiddenClassToggle: boolean;
    customTemplates: QueryList<NovoTemplate>;
    defaultTemplates: QueryList<NovoTemplate>;
    displayedColumns: string[];
    paginationOptions: IDataTablePaginationOptions;
    searchOptions: IDataTableSearchOptions;
    defaultSort: {
        id: string;
        value: string;
    };
    name: string;
    rowIdentifier: string;
    trackByFn: Function;
    dataTableService: IDataTableService<T>;
    rows: T[];
    outsideFilter: EventEmitter<any>;
    columns: IDataTableColumn<T>[];
    customFilter: boolean;
    private _customFilter;
    forceShowHeader: boolean;
    private _forceShowHeader;
    hideGlobalSearch: boolean;
    private _hideGlobalSearch;
    dataSource: DataTableSource<T>;
    loading: boolean;
    templates: {
        [key: string]: TemplateRef<any>;
    };
    columnToTemplate: {
        [key: string]: TemplateRef<any>;
    };
    columnsLoaded: boolean;
    private outsideFilterSubscription;
    private _columns;
    readonly empty: boolean;
    readonly loadingClass: boolean;
    constructor(labels: NovoLabelService, ref: ChangeDetectorRef, state: DataTableState);
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    onSearchChange(term: string): void;
    trackColumnsBy(index: number, item: IDataTableColumn<T>): string;
    private configureColumns();
}
