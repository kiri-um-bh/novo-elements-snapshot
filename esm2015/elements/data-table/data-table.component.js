/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/data-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, state as animState, style, transition, trigger } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, HostBinding, Input, Output, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { NovoLabelService } from '../../services/novo-label-service';
import { notify } from '../../utils/notifier/notifier.util';
import { NovoTemplate } from '../common/novo-template/novo-template.directive';
import { DataTableSource } from './data-table.source';
import { StaticDataTableService } from './services/static-data-table.service';
import { DataTableState } from './state/data-table-state.service';
import { NovoDataTableCellHeader } from './cell-headers/data-table-header-cell.component';
/**
 * @template T
 */
export class NovoDataTable {
    /**
     * @param {?} labels
     * @param {?} ref
     * @param {?} state
     */
    constructor(labels, ref, state) {
        this.labels = labels;
        this.ref = ref;
        this.state = state;
        this.globalSearchHiddenClassToggle = false;
        this.resized = new EventEmitter();
        this.name = 'novo-data-table';
        this.allowMultipleFilters = false;
        this.rowIdentifier = 'id';
        this.activeRowIdentifier = '';
        // prettier-ignore
        this.trackByFn = (/**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        (index, item) => item.id);
        this.templates = {};
        this.fixedHeader = false;
        this._hideGlobalSearch = true;
        this.preferencesChanged = new EventEmitter();
        this.loading = true;
        this.columnToTemplate = {};
        this.columnsLoaded = false;
        this.selection = new Set();
        this.scrollLeft = 0;
        this.expandable = false;
        this.initialized = false;
        this.scrollListenerHandler = this.scrollListener.bind(this);
        this.sortFilterSubscription = this.state.sortFilterSource.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (this.name !== 'novo-data-table') {
                this.preferencesChanged.emit({ name: this.name, sort: event.sort, filter: event.filter, globalSearch: event.globalSearch });
                this.performInteractions('change');
            }
            else {
                notify('Must have [name] set on data-table to use preferences!');
            }
        }));
        this.paginationSubscription = this.state.paginationSource.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (this.name !== 'novo-data-table') {
                if (event.isPageSizeChange) {
                    this.preferencesChanged.emit({ name: this.name, pageSize: event.pageSize });
                }
            }
            else {
                notify('Must have [name] set on data-table to use preferences!');
            }
        }));
        this.resetSubscription = this.state.resetSource.subscribe((/**
         * @return {?}
         */
        () => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.ref.detectChanges();
            }), 300);
        }));
    }
    /**
     * @param {?} displayedColumns
     * @return {?}
     */
    set displayedColumns(displayedColumns) {
        if (this.displayedColumns && this.displayedColumns.length !== 0) {
            if (this.name !== 'novo-data-table') {
                this.preferencesChanged.emit({
                    name: this.name,
                    displayedColumns,
                });
            }
            else {
                notify('Must have [name] set on data-table to use preferences!');
            }
        }
        this._disabledColumns = displayedColumns;
        this.configureLastDisplayedColumn();
        if (this.initialized) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.scrollListener();
            }));
        }
    }
    /**
     * @return {?}
     */
    get displayedColumns() {
        return this._disabledColumns;
    }
    /**
     * @param {?} service
     * @return {?}
     */
    set dataTableService(service) {
        this.loading = false;
        if (!service) {
            service = new StaticDataTableService([]);
        }
        this.dataSource = new DataTableSource(service, this.state, this.ref);
        this.ref.detectChanges();
    }
    /**
     * @param {?} rows
     * @return {?}
     */
    set rows(rows) {
        this.loading = false;
        /** @type {?} */
        const service = new StaticDataTableService(rows);
        this.dataSource = new DataTableSource(service, this.state, this.ref);
        this.ref.detectChanges();
    }
    /**
     * @param {?} outsideFilter
     * @return {?}
     */
    set outsideFilter(outsideFilter) {
        // Unsubscribe
        if (this.outsideFilterSubscription) {
            this.outsideFilterSubscription.unsubscribe();
        }
        if (outsideFilter) {
            // Re-subscribe
            this.outsideFilterSubscription = outsideFilter.subscribe((/**
             * @param {?} filter
             * @return {?}
             */
            (filter) => {
                this.state.outsideFilter = filter;
                this.state.updates.next({ globalSearch: this.state.globalSearch, filter: this.state.filter, sort: this.state.sort });
                this.ref.markForCheck();
            }));
        }
    }
    /**
     * @param {?} refreshSubject
     * @return {?}
     */
    set refreshSubject(refreshSubject) {
        // Unsubscribe
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
        if (refreshSubject) {
            // Re-subscribe
            this.refreshSubscription = refreshSubject.subscribe((/**
             * @param {?} filter
             * @return {?}
             */
            (filter) => {
                this.state.isForceRefresh = true;
                this.state.updates.next({ globalSearch: this.state.globalSearch, filter: this.state.filter, sort: this.state.sort });
                this.ref.markForCheck();
            }));
        }
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    set columns(columns) {
        this._columns = columns;
        this.configureColumns();
        this.performInteractions('init');
    }
    /**
     * @return {?}
     */
    get columns() {
        return this._columns;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set customFilter(v) {
        this._customFilter = coerceBooleanProperty(v);
    }
    /**
     * @return {?}
     */
    get customFilter() {
        return this._customFilter;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set hasExandedRows(v) {
        this._hasExandedRows = coerceBooleanProperty(v);
    }
    /**
     * @return {?}
     */
    get hasExandedRows() {
        return this._hasExandedRows;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set forceShowHeader(v) {
        this._forceShowHeader = coerceBooleanProperty(v);
    }
    /**
     * @return {?}
     */
    get forceShowHeader() {
        return this._forceShowHeader;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set hideGlobalSearch(v) {
        this._hideGlobalSearch = coerceBooleanProperty(v);
        this.globalSearchHiddenClassToggle = this._hideGlobalSearch;
    }
    /**
     * @return {?}
     */
    get hideGlobalSearch() {
        return this._hideGlobalSearch;
    }
    /**
     * @return {?}
     */
    get empty() {
        return this.dataSource && this.dataSource.totallyEmpty;
    }
    /**
     * @return {?}
     */
    get loadingClass() {
        return this.loading || (this.dataSource && this.dataSource.loading);
    }
    /**
     * @param {?} column
     * @param {?} newOptions
     * @return {?}
     */
    modifyCellHeaderMultiSelectFilterOptions(column, newOptions) {
        /** @type {?} */
        const header = this.cellHeaders.find((/**
         * @param {?} cellHeader
         * @return {?}
         */
        (cellHeader) => cellHeader.id === column));
        if (header && header.config && header.config.filterConfig && header.config.filterConfig.options) {
            /** @type {?} */
            const filterOptions = header.config.filterConfig.options;
            /** @type {?} */
            const optionsToKeep = filterOptions.filter((/**
             * @param {?} opt
             * @return {?}
             */
            (opt) => header.isSelected(opt, header.multiSelectedOptions) &&
                !newOptions.find((/**
                 * @param {?} newOpt
                 * @return {?}
                 */
                (newOpt) => opt.value && newOpt.value && newOpt.value === opt.value))));
            header.config.filterConfig.options = [...optionsToKeep, ...newOptions];
        }
        else {
            header.config.filterConfig['options'] = newOptions;
        }
        header.setupFilterOptions();
        header.changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.outsideFilterSubscription) {
            this.outsideFilterSubscription.unsubscribe();
        }
        if (this.novoDataTableContainer) {
            ((/** @type {?} */ (this.novoDataTableContainer.nativeElement))).removeEventListener('scroll', this.scrollListenerHandler);
        }
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
        if (this.resetSubscription) {
            this.resetSubscription.unsubscribe();
        }
        if (this.sortFilterSubscription) {
            this.sortFilterSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.displayedColumns && this.displayedColumns.length) {
            this.expandable = this.displayedColumns.includes('expand');
        }
        // Default templates defined here
        this.defaultTemplates.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            // Only override if it doesn't already exist
            if (!this.templates[item.getType()]) {
                this.templates[item.getType()] = item.template;
            }
        }));
        // Custom templates passed in
        this.customTemplates.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            // Override anything that is custom and in HTML
            this.templates[item.getType()] = item.template;
        }));
        // Load columns
        this.configureColumns();
        // State
        if (this.paginationOptions && !this.paginationOptions.page) {
            this.paginationOptions.page = 0;
        }
        if (this.paginationOptions && !this.paginationOptions.pageSize) {
            this.paginationOptions.pageSize = 50;
        }
        if (this.paginationOptions && !this.paginationOptions.pageSizeOptions) {
            this.paginationOptions.pageSizeOptions = [10, 25, 50, 100];
        }
        this.state.page = this.paginationOptions ? this.paginationOptions.page : undefined;
        this.state.pageSize = this.paginationOptions ? this.paginationOptions.pageSize : undefined;
        // Scrolling inside table
        ((/** @type {?} */ (this.novoDataTableContainer.nativeElement))).addEventListener('scroll', this.scrollListenerHandler);
        this.initialized = true;
        this.ref.markForCheck();
    }
    /**
     * @param {?} term
     * @return {?}
     */
    onSearchChange(term) {
        this.state.globalSearch = term;
        this.state.reset(false, true);
        this.state.updates.next({ globalSearch: term, filter: this.state.filter, sort: this.state.sort });
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    trackColumnsBy(index, item) {
        return item.id;
    }
    /**
     * @param {?} check
     * @param {?} row
     * @return {?}
     */
    isDisabled(check, row) {
        if (check.disabled === true) {
            return true;
        }
        if (check.disabledFunc) {
            return check.disabledFunc(row);
        }
        return false;
    }
    /**
     * @param {?} row
     * @return {?}
     */
    isExpanded(row) {
        if (!row) {
            return false;
        }
        return this.state.expandedRows.has(`${row[this.rowIdentifier]}`);
    }
    /**
     * @param {?} row
     * @return {?}
     */
    expandRow(row) {
        /** @type {?} */
        const expanded = this.isExpanded(row);
        if (expanded) {
            this.state.expandedRows.delete(`${row[this.rowIdentifier]}`);
        }
        else {
            this.state.expandedRows.add(`${row[this.rowIdentifier]}`);
        }
        this.state.onExpandChange(((/** @type {?} */ (((/** @type {?} */ (row)))))).id);
    }
    /**
     * @param {?} expand
     * @return {?}
     */
    expandRows(expand) {
        (this.dataSource.data || []).forEach((/**
         * @param {?} row
         * @return {?}
         */
        (row) => {
            if (!expand) {
                this.state.expandedRows.delete(`${row[this.rowIdentifier]}`);
            }
            else {
                this.state.expandedRows.add(`${row[this.rowIdentifier]}`);
            }
        }));
        this.state.onExpandChange();
    }
    /**
     * @return {?}
     */
    allCurrentRowsExpanded() {
        for (let i = 0; i < (this.dataSource.data || []).length; i++) {
            if (!this.isExpanded((this.dataSource.data || [])[i])) {
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} row
     * @return {?}
     */
    isSelected(row) {
        if (!row) {
            return false;
        }
        return this.state.selectedRows.has(`${row[this.rowIdentifier]}`);
    }
    /**
     * @param {?} row
     * @return {?}
     */
    selectRow(row) {
        /** @type {?} */
        const selected = this.isSelected(row);
        if (selected) {
            this.state.selectedRows.delete(`${row[this.rowIdentifier]}`);
        }
        else {
            this.state.selectedRows.set(`${row[this.rowIdentifier]}`, row);
        }
        this.state.onSelectionChange();
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    selectRows(selected) {
        (this.dataSource.data || []).forEach((/**
         * @param {?} row
         * @return {?}
         */
        (row) => {
            if (!selected) {
                this.state.selectedRows.delete(`${row[this.rowIdentifier]}`);
            }
            else {
                this.state.selectedRows.set(`${row[this.rowIdentifier]}`, row);
            }
        }));
        this.state.onSelectionChange();
    }
    /**
     * @return {?}
     */
    allCurrentRowsSelected() {
        for (let i = 0; i < (this.dataSource.data || []).length; i++) {
            if (!this.isSelected((this.dataSource.data || [])[i])) {
                return false;
            }
        }
        return true;
    }
    /**
     * @private
     * @return {?}
     */
    configureLastDisplayedColumn() {
        if (this.columns && this.displayedColumns && 0 !== this.columns.length && 0 !== this.displayedColumns.length) {
            this.columns.forEach((/**
             * @param {?} column
             * @return {?}
             */
            (column) => {
                if (column.initialResizable) {
                    column.resizable = column.initialResizable.resizable;
                    column.width = column.initialResizable.width;
                    column.initialResizable = undefined;
                }
            }));
            /** @type {?} */
            const resizableColumns = this.displayedColumns.filter((/**
             * @param {?} name
             * @return {?}
             */
            (name) => {
                return (this.columns.findIndex((/**
                 * @param {?} column
                 * @return {?}
                 */
                (column) => {
                    return column.resizable && column.id === name;
                })) !== -1);
            }));
            if (resizableColumns && resizableColumns.length > 0) {
                /** @type {?} */
                const lastResizableColumn = this.columns.find((/**
                 * @param {?} column
                 * @return {?}
                 */
                (column) => {
                    return column.id === resizableColumns[resizableColumns.length - 1];
                }));
                lastResizableColumn.initialResizable = {
                    resizable: lastResizableColumn.resizable,
                    width: lastResizableColumn.width,
                };
                lastResizableColumn.width = undefined;
                lastResizableColumn.resizable = false;
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    configureColumns() {
        if (this.columns && this.columns.length !== 0 && Object.keys(this.templates).length !== 0) {
            // Figure the column templates
            this.columns.forEach((/**
             * @param {?} column
             * @return {?}
             */
            (column) => {
                // Figure the template
                /** @type {?} */
                let templateName;
                if (column.template) {
                    // Pass it in as template
                    templateName = column.template;
                }
                else if (!!this.templates[column.id]) {
                    // Custom template for the column id
                    templateName = column.id;
                }
                else {
                    // Default to the defaulCellTemplate
                    if (column.type === 'action') {
                        if (column.action && column.action.options) {
                            if (!column.action.icon) {
                                column.action.icon = 'collapse';
                            }
                            templateName = 'dropdownCellTemplate';
                        }
                        else {
                            templateName = 'buttonCellTemplate';
                        }
                    }
                    else {
                        if (column.type === 'link:tel' || column.type === 'link:mailto') {
                            templateName = `${column.type.split(':')[1]}CellTemplate`;
                        }
                        else {
                            templateName = `${column.type}CellTemplate`;
                        }
                    }
                }
                this.columnToTemplate[column.id] = this.templates[templateName];
            }));
            this.configureLastDisplayedColumn();
            this.columnsLoaded = true;
        }
    }
    /**
     * @private
     * @return {?}
     */
    scrollListener() {
        /** @type {?} */
        const target = (/** @type {?} */ (this.novoDataTableContainer.nativeElement));
        /** @type {?} */
        const left = target.scrollLeft;
        if (left !== this.scrollLeft) {
            this.scrollLeft = target.scrollLeft;
        }
        this.ref.markForCheck();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    performInteractions(event) {
        if (this.listInteractions) {
            for (const column of this.columns) {
                /** @type {?} */
                const allListColumnInteractions = this.listInteractions[column.id];
                /** @type {?} */
                const listColumnInteraction = allListColumnInteractions && allListColumnInteractions.find((/**
                 * @param {?} int
                 * @return {?}
                 */
                (int) => int.event.includes(event)));
                if (listColumnInteraction) {
                    listColumnInteraction.script(this, column.id);
                }
            }
        }
    }
}
NovoDataTable.decorators = [
    { type: Component, args: [{
                selector: 'novo-data-table',
                animations: [
                    trigger('expand', [
                        animState('void', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
                        animState('*', style({ height: '*', visibility: 'visible' })),
                        transition('void <=> *', animate('70ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ],
                template: `
    <header
      *ngIf="(!(dataSource?.totallyEmpty && !state.userFiltered) && !loading) || forceShowHeader"
      [class.empty]="hideGlobalSearch && !paginationOptions && !templates['customActions']"
    >
      <ng-container *ngTemplateOutlet="templates['customHeader']"></ng-container>
      <novo-search
        alwaysOpen="true"
        (searchChanged)="onSearchChange($event)"
        [(ngModel)]="state.globalSearch"
        *ngIf="!hideGlobalSearch"
        [placeholder]="searchOptions?.placeholder"
        [hint]="searchOptions?.tooltip"
      >
      </novo-search>
      <novo-data-table-pagination
        *ngIf="paginationOptions"
        [theme]="paginationOptions.theme"
        [length]="dataSource?.currentTotal"
        [page]="paginationOptions.page"
        [pageSize]="paginationOptions.pageSize"
        [pageSizeOptions]="paginationOptions.pageSizeOptions"
        [dataFeatureId]="paginatorDataFeatureId"
      >
      </novo-data-table-pagination>
      <div class="novo-data-table-actions" *ngIf="templates['customActions']">
        <ng-container *ngTemplateOutlet="templates['customActions']"></ng-container>
      </div>
    </header>
    <div class="novo-data-table-loading-mask" *ngIf="dataSource?.loading || loading" data-automation-id="novo-data-table-loading">
      <novo-loading></novo-loading>
    </div>
    <div class="novo-data-table-outside-container" [ngClass]="{ 'novo-data-table-outside-container-fixed': fixedHeader }">
      <div class="novo-data-table-custom-filter" *ngIf="customFilter">
        <ng-container *ngTemplateOutlet="templates['customFilter']"></ng-container>
      </div>
      <div
        #novoDataTableContainer
        class="novo-data-table-container"
        [ngClass]="{ 'novo-data-table-container-fixed': fixedHeader }"
        [class.empty-user-filtered]="dataSource?.currentlyEmpty && state.userFiltered"
        [class.empty]="dataSource?.totallyEmpty && !dataSource?.loading && !loading && !state.userFiltered && !dataSource.pristine"
      >
        <cdk-table
          *ngIf="columns?.length > 0 && columnsLoaded && dataSource"
          [dataSource]="dataSource"
          [trackBy]="trackByFn"
          novoDataTableSortFilter
          [class.expandable]="expandable"
          [class.empty]="dataSource?.currentlyEmpty && state.userFiltered"
          [hidden]="dataSource?.totallyEmpty && !state.userFiltered"
        >
          <ng-container cdkColumnDef="selection">
            <novo-data-table-checkbox-header-cell *cdkHeaderCellDef></novo-data-table-checkbox-header-cell>
            <novo-data-table-checkbox-cell *cdkCellDef="let row; let i = index" [row]="row"></novo-data-table-checkbox-cell>
          </ng-container>
          <ng-container cdkColumnDef="expand">
            <novo-data-table-expand-header-cell *cdkHeaderCellDef></novo-data-table-expand-header-cell>
            <novo-data-table-expand-cell *cdkCellDef="let row; let i = index" [row]="row"></novo-data-table-expand-cell>
          </ng-container>
          <ng-container *ngFor="let column of columns; trackBy: trackColumnsBy" [cdkColumnDef]="column.id">
            <novo-data-table-header-cell
              *cdkHeaderCellDef
              [column]="column"
              [filterTemplate]="templates['column-filter-' + column.id]"
              [novo-data-table-cell-config]="column"
              [resized]="resized"
              [defaultSort]="defaultSort"
              [allowMultipleFilters]="allowMultipleFilters"
              [class.empty]="column?.type === 'action' && !column?.label"
              [class.button-header-cell]="column?.type === 'expand' || (column?.type === 'action' && !column?.action?.options)"
              [class.dropdown-header-cell]="column?.type === 'action' && column?.action?.options"
              [class.fixed-header]="fixedHeader"
            ></novo-data-table-header-cell>
            <novo-data-table-cell
              *cdkCellDef="let row"
              [resized]="resized"
              [column]="column"
              [row]="row"
              [template]="columnToTemplate[column.id]"
              [class.empty]="column?.type === 'action' && !column?.label"
              [class.button-cell]="column?.type === 'expand' || (column?.type === 'action' && !column?.action?.options)"
              [class.dropdown-cell]="column?.type === 'action' && column?.action?.options"
            ></novo-data-table-cell>
          </ng-container>
          <novo-data-table-header-row
            *cdkHeaderRowDef="displayedColumns"
            [fixedHeader]="fixedHeader"
            data-automation-id="novo-data-table-header-row"
          ></novo-data-table-header-row>
          <novo-data-table-row
            *cdkRowDef="let row; columns: displayedColumns"
            [ngClass]="{ active: row[rowIdentifier] == activeRowIdentifier }"
            [novoDataTableExpand]="detailRowTemplate"
            [row]="row"
            [id]="name + '-' + row[rowIdentifier]"
            [dataAutomationId]="row[rowIdentifier]"
          ></novo-data-table-row>
        </cdk-table>
        <div class="novo-data-table-footer" *ngIf="templates['footer']">
          <ng-container *ngTemplateOutlet="templates['footer']; context: { $implicit: columns, data: dataSource.data }"></ng-container>
        </div>
        <div
          class="novo-data-table-no-results-container"
          [style.left.px]="scrollLeft"
          *ngIf="dataSource?.currentlyEmpty && state.userFiltered && !dataSource?.loading && !loading && !dataSource.pristine"
        >
          <div class="novo-data-table-empty-message">
            <ng-container *ngTemplateOutlet="templates['noResultsMessage'] || templates['defaultNoResultsMessage']"></ng-container>
          </div>
        </div>
      </div>
      <div
        class="novo-data-table-empty-container"
        *ngIf="dataSource?.totallyEmpty && !dataSource?.loading && !loading && !state.userFiltered && !dataSource.pristine"
      >
        <div class="novo-data-table-empty-message">
          <ng-container *ngTemplateOutlet="templates['emptyMessage'] || templates['defaultNoResultsMessage']"></ng-container>
        </div>
      </div>
    </div>
    <!-- DEFAULT CELL TEMPLATE -->
    <ng-template novoTemplate="textCellTemplate" let-row let-col="col">
      <span [style.width.px]="col?.width" [style.min-width.px]="col?.width" [style.max-width.px]="col?.width">{{
        row[col.id] | dataTableInterpolate: col
      }}</span>
    </ng-template>
    <ng-template novoTemplate="dateCellTemplate" let-row let-col="col">
      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableDateRenderer: col }}</span>
    </ng-template>
    <ng-template novoTemplate="datetimeCellTemplate" let-row let-col="col">
      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableDateTimeRenderer: col }}</span>
    </ng-template>
    <ng-template novoTemplate="timeCellTemplate" let-row let-col="col">
      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableTimeRenderer: col }}</span>
    </ng-template>
    <ng-template novoTemplate="currencyCellTemplate" let-row let-col="col">
      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableCurrencyRenderer: col }}</span>
    </ng-template>
    <ng-template novoTemplate="bigdecimalCellTemplate" let-row let-col="col">
      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableBigDecimalRenderer: col }}</span>
    </ng-template>
    <ng-template novoTemplate="numberCellTemplate" let-row let-col="col">
      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableNumberRenderer: col }}</span>
    </ng-template>
    <ng-template novoTemplate="percentCellTemplate" let-row let-col="col">
      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableNumberRenderer: col:true }}</span>
    </ng-template>
    <ng-template novoTemplate="linkCellTemplate" let-row let-col="col">
      <a
        [attr.data-feature-id]="col?.attributes?.dataFeatureId"
        (click)="col.handlers?.click({ originalEvent: $event, row: row })"
        [style.width.px]="col?.width"
        [style.min-width.px]="col?.width"
        [style.max-width.px]="col?.width"
        >{{ row[col.id] | dataTableInterpolate: col }}</a
      >
    </ng-template>
    <ng-template novoTemplate="telCellTemplate" let-row let-col="col">
      <a href="tel:{{ row[col.id] | dataTableInterpolate: col }}" [target]="col?.attributes?.target">{{
        row[col.id] | dataTableInterpolate: col
      }}</a>
    </ng-template>
    <ng-template novoTemplate="mailtoCellTemplate" let-row let-col="col">
      <a href="mailto:{{ row[col.id] | dataTableInterpolate: col }}" [target]="col?.attributes?.target">{{
        row[col.id] | dataTableInterpolate: col
      }}</a>
    </ng-template>
    <ng-template novoTemplate="buttonCellTemplate" let-row let-col="col">
      <p [tooltip]="col?.action?.tooltip" tooltipPosition="right" [attr.data-feature-id]="col?.attributes?.dataFeatureId">
        <i
          class="bhi-{{ col?.action?.icon }} data-table-icon"
          (click)="col.handlers?.click({ originalEvent: $event, row: row })"
          [class.disabled]="isDisabled(col, row)"
        ></i>
      </p>
    </ng-template>
    <ng-template novoTemplate="dropdownCellTemplate" let-row let-col="col">
      <novo-dropdown parentScrollSelector=".novo-data-table-container" containerClass="novo-data-table-dropdown">
        <button type="button" theme="dialogue" [icon]="col.action.icon" inverse>{{ col.label }}</button>
        <list>
          <item
            *ngFor="let option of col?.action?.options"
            (action)="option.handlers.click({ originalEvent: $event?.originalEvent, row: row })"
            [disabled]="isDisabled(option, row)"
          >
            <span [attr.data-automation-id]="option.label">{{ option.label }}</span>
          </item>
        </list>
      </novo-dropdown>
    </ng-template>
    <ng-template novoTemplate="defaultNoResultsMessage">
      <h4><i class="bhi-search-question"></i> {{ labels.noMatchingRecordsMessage }}</h4>
    </ng-template>
    <ng-template novoTemplate="defaultEmptyMessage">
      <h4><i class="bhi-search-question"></i> {{ labels.emptyTableMessage }}</h4>
    </ng-template>
    <ng-template novoTemplate="expandedRow"> You did not provide an "expandedRow" template! </ng-template>
    <ng-template #detailRowTemplate let-row>
      <div class="novo-data-table-detail-row" [@expand] style="overflow: hidden">
        <ng-container *ngTemplateOutlet="templates['expandedRow']; context: { $implicit: row }"></ng-container>
      </div>
    </ng-template>
    <!-- CUSTOM CELLS PASSED IN -->
    <ng-content></ng-content>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [DataTableState]
            }] }
];
/** @nocollapse */
NovoDataTable.ctorParameters = () => [
    { type: NovoLabelService },
    { type: ChangeDetectorRef },
    { type: DataTableState }
];
NovoDataTable.propDecorators = {
    globalSearchHiddenClassToggle: [{ type: HostBinding, args: ['class.global-search-hidden',] }],
    customTemplates: [{ type: ContentChildren, args: [NovoTemplate,] }],
    defaultTemplates: [{ type: ViewChildren, args: [NovoTemplate,] }],
    cellHeaders: [{ type: ViewChildren, args: [NovoDataTableCellHeader,] }],
    novoDataTableContainer: [{ type: ViewChild, args: ['novoDataTableContainer', { static: false },] }],
    resized: [{ type: Output }],
    displayedColumns: [{ type: Input }],
    paginationOptions: [{ type: Input }],
    searchOptions: [{ type: Input }],
    defaultSort: [{ type: Input }],
    name: [{ type: Input }],
    allowMultipleFilters: [{ type: Input }],
    rowIdentifier: [{ type: Input }],
    activeRowIdentifier: [{ type: Input }],
    trackByFn: [{ type: Input }],
    templates: [{ type: Input }],
    fixedHeader: [{ type: Input }],
    paginatorDataFeatureId: [{ type: Input }],
    dataTableService: [{ type: Input }],
    rows: [{ type: Input }],
    outsideFilter: [{ type: Input }],
    refreshSubject: [{ type: Input }],
    columns: [{ type: Input }],
    customFilter: [{ type: Input }],
    hasExandedRows: [{ type: Input }],
    forceShowHeader: [{ type: Input }],
    hideGlobalSearch: [{ type: Input }],
    preferencesChanged: [{ type: Output }],
    empty: [{ type: HostBinding, args: ['class.empty',] }],
    loadingClass: [{ type: HostBinding, args: ['class.loading',] }],
    listInteractions: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoDataTable.prototype.globalSearchHiddenClassToggle;
    /** @type {?} */
    NovoDataTable.prototype.customTemplates;
    /** @type {?} */
    NovoDataTable.prototype.defaultTemplates;
    /** @type {?} */
    NovoDataTable.prototype.cellHeaders;
    /** @type {?} */
    NovoDataTable.prototype.novoDataTableContainer;
    /** @type {?} */
    NovoDataTable.prototype.resized;
    /**
     * @type {?}
     * @private
     */
    NovoDataTable.prototype._disabledColumns;
    /** @type {?} */
    NovoDataTable.prototype.paginationOptions;
    /** @type {?} */
    NovoDataTable.prototype.searchOptions;
    /** @type {?} */
    NovoDataTable.prototype.defaultSort;
    /** @type {?} */
    NovoDataTable.prototype.name;
    /** @type {?} */
    NovoDataTable.prototype.allowMultipleFilters;
    /** @type {?} */
    NovoDataTable.prototype.rowIdentifier;
    /** @type {?} */
    NovoDataTable.prototype.activeRowIdentifier;
    /** @type {?} */
    NovoDataTable.prototype.trackByFn;
    /** @type {?} */
    NovoDataTable.prototype.templates;
    /** @type {?} */
    NovoDataTable.prototype.fixedHeader;
    /** @type {?} */
    NovoDataTable.prototype.paginatorDataFeatureId;
    /**
     * @type {?}
     * @private
     */
    NovoDataTable.prototype._customFilter;
    /**
     * @type {?}
     * @private
     */
    NovoDataTable.prototype._hasExandedRows;
    /**
     * @type {?}
     * @private
     */
    NovoDataTable.prototype._forceShowHeader;
    /**
     * @type {?}
     * @private
     */
    NovoDataTable.prototype._hideGlobalSearch;
    /** @type {?} */
    NovoDataTable.prototype.preferencesChanged;
    /** @type {?} */
    NovoDataTable.prototype.dataSource;
    /** @type {?} */
    NovoDataTable.prototype.loading;
    /** @type {?} */
    NovoDataTable.prototype.columnToTemplate;
    /** @type {?} */
    NovoDataTable.prototype.columnsLoaded;
    /** @type {?} */
    NovoDataTable.prototype.selection;
    /** @type {?} */
    NovoDataTable.prototype.scrollLeft;
    /** @type {?} */
    NovoDataTable.prototype.expandable;
    /**
     * @type {?}
     * @private
     */
    NovoDataTable.prototype.outsideFilterSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoDataTable.prototype.refreshSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoDataTable.prototype.resetSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoDataTable.prototype.paginationSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoDataTable.prototype.sortFilterSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoDataTable.prototype._columns;
    /**
     * @type {?}
     * @private
     */
    NovoDataTable.prototype.scrollListenerHandler;
    /**
     * @type {?}
     * @private
     */
    NovoDataTable.prototype.initialized;
    /** @type {?} */
    NovoDataTable.prototype.listInteractions;
    /** @type {?} */
    NovoDataTable.prototype.labels;
    /**
     * @type {?}
     * @private
     */
    NovoDataTable.prototype.ref;
    /** @type {?} */
    NovoDataTable.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxJQUFJLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBRVQsU0FBUyxFQUNULFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVV0RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saURBQWlELENBQUM7Ozs7QUE2TjFGLE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUFnTHhCLFlBQW1CLE1BQXdCLEVBQVUsR0FBc0IsRUFBUyxLQUF3QjtRQUF6RixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVMsVUFB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Qzs7SUFFbEMsa0NBQThDOztJQUM5QyxrQ0FBNkQ7O0lBQzdELG9DQUE2Qjs7SUFDN0IsK0NBQXdDOzs7OztJQXFFeEMsc0NBQStCOzs7OztJQVMvQix3Q0FBaUM7Ozs7O0lBU2pDLHlDQUFrQzs7Ozs7SUFVbEMsMENBQTBDOztJQUUxQywyQ0FBOEc7O0lBRTlHLG1DQUFzQzs7SUFDdEMsZ0NBQStCOztJQUMvQix5Q0FBa0U7O0lBQ2xFLHNDQUFzQzs7SUFDdEMsa0NBQTBDOztJQUMxQyxtQ0FBOEI7O0lBQzlCLG1DQUFtQzs7Ozs7SUFFbkMsa0RBQWdEOzs7OztJQUNoRCw0Q0FBMEM7Ozs7O0lBQzFDLDBDQUF3Qzs7Ozs7SUFDeEMsK0NBQTZDOzs7OztJQUM3QywrQ0FBNkM7Ozs7O0lBQzdDLGlDQUF3Qzs7Ozs7SUFDeEMsOENBQW1DOzs7OztJQUNuQyxvQ0FBcUM7O0lBWXJDLHlDQUFxRDs7SUFFekMsK0JBQStCOzs7OztJQUFFLDRCQUE4Qjs7SUFBRSw4QkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSBhcyBhbmltU3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG5pbXBvcnQgeyBOb3ZvVGVtcGxhdGUgfSBmcm9tICcuLi9jb21tb24vbm92by10ZW1wbGF0ZS9ub3ZvLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVTb3VyY2UgfSBmcm9tICcuL2RhdGEtdGFibGUuc291cmNlJztcbmltcG9ydCB7XG4gIElEYXRhVGFibGVDb2x1bW4sXG4gIElEYXRhVGFibGVGaWx0ZXIsXG4gIElEYXRhVGFibGVQYWdpbmF0aW9uT3B0aW9ucyxcbiAgSURhdGFUYWJsZVByZWZlcmVuY2VzLFxuICBJRGF0YVRhYmxlU2VhcmNoT3B0aW9ucyxcbiAgSURhdGFUYWJsZVNlcnZpY2UsXG4gIElEYXRhVGFibGVTb3J0LFxufSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgU3RhdGljRGF0YVRhYmxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc3RhdGljLWRhdGEtdGFibGUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVTdGF0ZSB9IGZyb20gJy4vc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVDZWxsSGVhZGVyIH0gZnJvbSAnLi9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdEludGVyYWN0aW9uRGljdGlvbmFyeSwgTGlzdEludGVyYWN0aW9uRXZlbnQgfSBmcm9tICcuL0xpc3RJbnRlcmFjdGlvblR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRhLXRhYmxlJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2V4cGFuZCcsIFtcbiAgICAgIGFuaW1TdGF0ZSgndm9pZCcsIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JywgbWluSGVpZ2h0OiAnMCcsIHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pKSxcbiAgICAgIGFuaW1TdGF0ZSgnKicsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIHZpc2liaWxpdHk6ICd2aXNpYmxlJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkIDw9PiAqJywgYW5pbWF0ZSgnNzBtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSknKSksXG4gICAgXSksXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGhlYWRlclxuICAgICAgKm5nSWY9XCIoIShkYXRhU291cmNlPy50b3RhbGx5RW1wdHkgJiYgIXN0YXRlLnVzZXJGaWx0ZXJlZCkgJiYgIWxvYWRpbmcpIHx8IGZvcmNlU2hvd0hlYWRlclwiXG4gICAgICBbY2xhc3MuZW1wdHldPVwiaGlkZUdsb2JhbFNlYXJjaCAmJiAhcGFnaW5hdGlvbk9wdGlvbnMgJiYgIXRlbXBsYXRlc1snY3VzdG9tQWN0aW9ucyddXCJcbiAgICA+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydjdXN0b21IZWFkZXInXVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPG5vdm8tc2VhcmNoXG4gICAgICAgIGFsd2F5c09wZW49XCJ0cnVlXCJcbiAgICAgICAgKHNlYXJjaENoYW5nZWQpPVwib25TZWFyY2hDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwic3RhdGUuZ2xvYmFsU2VhcmNoXCJcbiAgICAgICAgKm5nSWY9XCIhaGlkZUdsb2JhbFNlYXJjaFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJzZWFyY2hPcHRpb25zPy5wbGFjZWhvbGRlclwiXG4gICAgICAgIFtoaW50XT1cInNlYXJjaE9wdGlvbnM/LnRvb2x0aXBcIlxuICAgICAgPlxuICAgICAgPC9ub3ZvLXNlYXJjaD5cbiAgICAgIDxub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvblxuICAgICAgICAqbmdJZj1cInBhZ2luYXRpb25PcHRpb25zXCJcbiAgICAgICAgW3RoZW1lXT1cInBhZ2luYXRpb25PcHRpb25zLnRoZW1lXCJcbiAgICAgICAgW2xlbmd0aF09XCJkYXRhU291cmNlPy5jdXJyZW50VG90YWxcIlxuICAgICAgICBbcGFnZV09XCJwYWdpbmF0aW9uT3B0aW9ucy5wYWdlXCJcbiAgICAgICAgW3BhZ2VTaXplXT1cInBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplXCJcbiAgICAgICAgW3BhZ2VTaXplT3B0aW9uc109XCJwYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZU9wdGlvbnNcIlxuICAgICAgICBbZGF0YUZlYXR1cmVJZF09XCJwYWdpbmF0b3JEYXRhRmVhdHVyZUlkXCJcbiAgICAgID5cbiAgICAgIDwvbm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb24+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWFjdGlvbnNcIiAqbmdJZj1cInRlbXBsYXRlc1snY3VzdG9tQWN0aW9ucyddXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbJ2N1c3RvbUFjdGlvbnMnXVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1sb2FkaW5nLW1hc2tcIiAqbmdJZj1cImRhdGFTb3VyY2U/LmxvYWRpbmcgfHwgbG9hZGluZ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1sb2FkaW5nXCI+XG4gICAgICA8bm92by1sb2FkaW5nPjwvbm92by1sb2FkaW5nPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtb3V0c2lkZS1jb250YWluZXJcIiBbbmdDbGFzc109XCJ7ICdub3ZvLWRhdGEtdGFibGUtb3V0c2lkZS1jb250YWluZXItZml4ZWQnOiBmaXhlZEhlYWRlciB9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWN1c3RvbS1maWx0ZXJcIiAqbmdJZj1cImN1c3RvbUZpbHRlclwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydjdXN0b21GaWx0ZXInXVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgICNub3ZvRGF0YVRhYmxlQ29udGFpbmVyXG4gICAgICAgIGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWNvbnRhaW5lclwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsgJ25vdm8tZGF0YS10YWJsZS1jb250YWluZXItZml4ZWQnOiBmaXhlZEhlYWRlciB9XCJcbiAgICAgICAgW2NsYXNzLmVtcHR5LXVzZXItZmlsdGVyZWRdPVwiZGF0YVNvdXJjZT8uY3VycmVudGx5RW1wdHkgJiYgc3RhdGUudXNlckZpbHRlcmVkXCJcbiAgICAgICAgW2NsYXNzLmVtcHR5XT1cImRhdGFTb3VyY2U/LnRvdGFsbHlFbXB0eSAmJiAhZGF0YVNvdXJjZT8ubG9hZGluZyAmJiAhbG9hZGluZyAmJiAhc3RhdGUudXNlckZpbHRlcmVkICYmICFkYXRhU291cmNlLnByaXN0aW5lXCJcbiAgICAgID5cbiAgICAgICAgPGNkay10YWJsZVxuICAgICAgICAgICpuZ0lmPVwiY29sdW1ucz8ubGVuZ3RoID4gMCAmJiBjb2x1bW5zTG9hZGVkICYmIGRhdGFTb3VyY2VcIlxuICAgICAgICAgIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIlxuICAgICAgICAgIFt0cmFja0J5XT1cInRyYWNrQnlGblwiXG4gICAgICAgICAgbm92b0RhdGFUYWJsZVNvcnRGaWx0ZXJcbiAgICAgICAgICBbY2xhc3MuZXhwYW5kYWJsZV09XCJleHBhbmRhYmxlXCJcbiAgICAgICAgICBbY2xhc3MuZW1wdHldPVwiZGF0YVNvdXJjZT8uY3VycmVudGx5RW1wdHkgJiYgc3RhdGUudXNlckZpbHRlcmVkXCJcbiAgICAgICAgICBbaGlkZGVuXT1cImRhdGFTb3VyY2U/LnRvdGFsbHlFbXB0eSAmJiAhc3RhdGUudXNlckZpbHRlcmVkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwic2VsZWN0aW9uXCI+XG4gICAgICAgICAgICA8bm92by1kYXRhLXRhYmxlLWNoZWNrYm94LWhlYWRlci1jZWxsICpjZGtIZWFkZXJDZWxsRGVmPjwvbm92by1kYXRhLXRhYmxlLWNoZWNrYm94LWhlYWRlci1jZWxsPlxuICAgICAgICAgICAgPG5vdm8tZGF0YS10YWJsZS1jaGVja2JveC1jZWxsICpjZGtDZWxsRGVmPVwibGV0IHJvdzsgbGV0IGkgPSBpbmRleFwiIFtyb3ddPVwicm93XCI+PC9ub3ZvLWRhdGEtdGFibGUtY2hlY2tib3gtY2VsbD5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cImV4cGFuZFwiPlxuICAgICAgICAgICAgPG5vdm8tZGF0YS10YWJsZS1leHBhbmQtaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+PC9ub3ZvLWRhdGEtdGFibGUtZXhwYW5kLWhlYWRlci1jZWxsPlxuICAgICAgICAgICAgPG5vdm8tZGF0YS10YWJsZS1leHBhbmQtY2VsbCAqY2RrQ2VsbERlZj1cImxldCByb3c7IGxldCBpID0gaW5kZXhcIiBbcm93XT1cInJvd1wiPjwvbm92by1kYXRhLXRhYmxlLWV4cGFuZC1jZWxsPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zOyB0cmFja0J5OiB0cmFja0NvbHVtbnNCeVwiIFtjZGtDb2x1bW5EZWZdPVwiY29sdW1uLmlkXCI+XG4gICAgICAgICAgICA8bm92by1kYXRhLXRhYmxlLWhlYWRlci1jZWxsXG4gICAgICAgICAgICAgICpjZGtIZWFkZXJDZWxsRGVmXG4gICAgICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgW2ZpbHRlclRlbXBsYXRlXT1cInRlbXBsYXRlc1snY29sdW1uLWZpbHRlci0nICsgY29sdW1uLmlkXVwiXG4gICAgICAgICAgICAgIFtub3ZvLWRhdGEtdGFibGUtY2VsbC1jb25maWddPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgW3Jlc2l6ZWRdPVwicmVzaXplZFwiXG4gICAgICAgICAgICAgIFtkZWZhdWx0U29ydF09XCJkZWZhdWx0U29ydFwiXG4gICAgICAgICAgICAgIFthbGxvd011bHRpcGxlRmlsdGVyc109XCJhbGxvd011bHRpcGxlRmlsdGVyc1wiXG4gICAgICAgICAgICAgIFtjbGFzcy5lbXB0eV09XCJjb2x1bW4/LnR5cGUgPT09ICdhY3Rpb24nICYmICFjb2x1bW4/LmxhYmVsXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmJ1dHRvbi1oZWFkZXItY2VsbF09XCJjb2x1bW4/LnR5cGUgPT09ICdleHBhbmQnIHx8IChjb2x1bW4/LnR5cGUgPT09ICdhY3Rpb24nICYmICFjb2x1bW4/LmFjdGlvbj8ub3B0aW9ucylcIlxuICAgICAgICAgICAgICBbY2xhc3MuZHJvcGRvd24taGVhZGVyLWNlbGxdPVwiY29sdW1uPy50eXBlID09PSAnYWN0aW9uJyAmJiBjb2x1bW4/LmFjdGlvbj8ub3B0aW9uc1wiXG4gICAgICAgICAgICAgIFtjbGFzcy5maXhlZC1oZWFkZXJdPVwiZml4ZWRIZWFkZXJcIlxuICAgICAgICAgICAgPjwvbm92by1kYXRhLXRhYmxlLWhlYWRlci1jZWxsPlxuICAgICAgICAgICAgPG5vdm8tZGF0YS10YWJsZS1jZWxsXG4gICAgICAgICAgICAgICpjZGtDZWxsRGVmPVwibGV0IHJvd1wiXG4gICAgICAgICAgICAgIFtyZXNpemVkXT1cInJlc2l6ZWRcIlxuICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAgICAgICAgIFtyb3ddPVwicm93XCJcbiAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cImNvbHVtblRvVGVtcGxhdGVbY29sdW1uLmlkXVwiXG4gICAgICAgICAgICAgIFtjbGFzcy5lbXB0eV09XCJjb2x1bW4/LnR5cGUgPT09ICdhY3Rpb24nICYmICFjb2x1bW4/LmxhYmVsXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmJ1dHRvbi1jZWxsXT1cImNvbHVtbj8udHlwZSA9PT0gJ2V4cGFuZCcgfHwgKGNvbHVtbj8udHlwZSA9PT0gJ2FjdGlvbicgJiYgIWNvbHVtbj8uYWN0aW9uPy5vcHRpb25zKVwiXG4gICAgICAgICAgICAgIFtjbGFzcy5kcm9wZG93bi1jZWxsXT1cImNvbHVtbj8udHlwZSA9PT0gJ2FjdGlvbicgJiYgY29sdW1uPy5hY3Rpb24/Lm9wdGlvbnNcIlxuICAgICAgICAgICAgPjwvbm92by1kYXRhLXRhYmxlLWNlbGw+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5vdm8tZGF0YS10YWJsZS1oZWFkZXItcm93XG4gICAgICAgICAgICAqY2RrSGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiXG4gICAgICAgICAgICBbZml4ZWRIZWFkZXJdPVwiZml4ZWRIZWFkZXJcIlxuICAgICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWhlYWRlci1yb3dcIlxuICAgICAgICAgID48L25vdm8tZGF0YS10YWJsZS1oZWFkZXItcm93PlxuICAgICAgICAgIDxub3ZvLWRhdGEtdGFibGUtcm93XG4gICAgICAgICAgICAqY2RrUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1uc1wiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7IGFjdGl2ZTogcm93W3Jvd0lkZW50aWZpZXJdID09IGFjdGl2ZVJvd0lkZW50aWZpZXIgfVwiXG4gICAgICAgICAgICBbbm92b0RhdGFUYWJsZUV4cGFuZF09XCJkZXRhaWxSb3dUZW1wbGF0ZVwiXG4gICAgICAgICAgICBbcm93XT1cInJvd1wiXG4gICAgICAgICAgICBbaWRdPVwibmFtZSArICctJyArIHJvd1tyb3dJZGVudGlmaWVyXVwiXG4gICAgICAgICAgICBbZGF0YUF1dG9tYXRpb25JZF09XCJyb3dbcm93SWRlbnRpZmllcl1cIlxuICAgICAgICAgID48L25vdm8tZGF0YS10YWJsZS1yb3c+XG4gICAgICAgIDwvY2RrLXRhYmxlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWZvb3RlclwiICpuZ0lmPVwidGVtcGxhdGVzWydmb290ZXInXVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbJ2Zvb3RlciddOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29sdW1ucywgZGF0YTogZGF0YVNvdXJjZS5kYXRhIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1uby1yZXN1bHRzLWNvbnRhaW5lclwiXG4gICAgICAgICAgW3N0eWxlLmxlZnQucHhdPVwic2Nyb2xsTGVmdFwiXG4gICAgICAgICAgKm5nSWY9XCJkYXRhU291cmNlPy5jdXJyZW50bHlFbXB0eSAmJiBzdGF0ZS51c2VyRmlsdGVyZWQgJiYgIWRhdGFTb3VyY2U/LmxvYWRpbmcgJiYgIWxvYWRpbmcgJiYgIWRhdGFTb3VyY2UucHJpc3RpbmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1lbXB0eS1tZXNzYWdlXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydub1Jlc3VsdHNNZXNzYWdlJ10gfHwgdGVtcGxhdGVzWydkZWZhdWx0Tm9SZXN1bHRzTWVzc2FnZSddXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWVtcHR5LWNvbnRhaW5lclwiXG4gICAgICAgICpuZ0lmPVwiZGF0YVNvdXJjZT8udG90YWxseUVtcHR5ICYmICFkYXRhU291cmNlPy5sb2FkaW5nICYmICFsb2FkaW5nICYmICFzdGF0ZS51c2VyRmlsdGVyZWQgJiYgIWRhdGFTb3VyY2UucHJpc3RpbmVcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWVtcHR5LW1lc3NhZ2VcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydlbXB0eU1lc3NhZ2UnXSB8fCB0ZW1wbGF0ZXNbJ2RlZmF1bHROb1Jlc3VsdHNNZXNzYWdlJ11cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8IS0tIERFRkFVTFQgQ0VMTCBURU1QTEFURSAtLT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwidGV4dENlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHNwYW4gW3N0eWxlLndpZHRoLnB4XT1cImNvbD8ud2lkdGhcIiBbc3R5bGUubWluLXdpZHRoLnB4XT1cImNvbD8ud2lkdGhcIiBbc3R5bGUubWF4LXdpZHRoLnB4XT1cImNvbD8ud2lkdGhcIj57e1xuICAgICAgICByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2xcbiAgICAgIH19PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImRhdGVDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxzcGFuPnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbCB8IGRhdGFUYWJsZURhdGVSZW5kZXJlcjogY29sIH19PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImRhdGV0aW1lQ2VsbFRlbXBsYXRlXCIgbGV0LXJvdyBsZXQtY29sPVwiY29sXCI+XG4gICAgICA8c3Bhbj57eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2wgfCBkYXRhVGFibGVEYXRlVGltZVJlbmRlcmVyOiBjb2wgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwidGltZUNlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHNwYW4+e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTogY29sIHwgZGF0YVRhYmxlVGltZVJlbmRlcmVyOiBjb2wgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiY3VycmVuY3lDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxzcGFuPnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbCB8IGRhdGFUYWJsZUN1cnJlbmN5UmVuZGVyZXI6IGNvbCB9fTwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJiaWdkZWNpbWFsQ2VsbFRlbXBsYXRlXCIgbGV0LXJvdyBsZXQtY29sPVwiY29sXCI+XG4gICAgICA8c3Bhbj57eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2wgfCBkYXRhVGFibGVCaWdEZWNpbWFsUmVuZGVyZXI6IGNvbCB9fTwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJudW1iZXJDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxzcGFuPnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbCB8IGRhdGFUYWJsZU51bWJlclJlbmRlcmVyOiBjb2wgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwicGVyY2VudENlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHNwYW4+e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTogY29sIHwgZGF0YVRhYmxlTnVtYmVyUmVuZGVyZXI6IGNvbDp0cnVlIH19PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImxpbmtDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxhXG4gICAgICAgIFthdHRyLmRhdGEtZmVhdHVyZS1pZF09XCJjb2w/LmF0dHJpYnV0ZXM/LmRhdGFGZWF0dXJlSWRcIlxuICAgICAgICAoY2xpY2spPVwiY29sLmhhbmRsZXJzPy5jbGljayh7IG9yaWdpbmFsRXZlbnQ6ICRldmVudCwgcm93OiByb3cgfSlcIlxuICAgICAgICBbc3R5bGUud2lkdGgucHhdPVwiY29sPy53aWR0aFwiXG4gICAgICAgIFtzdHlsZS5taW4td2lkdGgucHhdPVwiY29sPy53aWR0aFwiXG4gICAgICAgIFtzdHlsZS5tYXgtd2lkdGgucHhdPVwiY29sPy53aWR0aFwiXG4gICAgICAgID57eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2wgfX08L2FcbiAgICAgID5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJ0ZWxDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxhIGhyZWY9XCJ0ZWw6e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTogY29sIH19XCIgW3RhcmdldF09XCJjb2w/LmF0dHJpYnV0ZXM/LnRhcmdldFwiPnt7XG4gICAgICAgIHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbFxuICAgICAgfX08L2E+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwibWFpbHRvQ2VsbFRlbXBsYXRlXCIgbGV0LXJvdyBsZXQtY29sPVwiY29sXCI+XG4gICAgICA8YSBocmVmPVwibWFpbHRvOnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbCB9fVwiIFt0YXJnZXRdPVwiY29sPy5hdHRyaWJ1dGVzPy50YXJnZXRcIj57e1xuICAgICAgICByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2xcbiAgICAgIH19PC9hPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImJ1dHRvbkNlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHAgW3Rvb2x0aXBdPVwiY29sPy5hY3Rpb24/LnRvb2x0aXBcIiB0b29sdGlwUG9zaXRpb249XCJyaWdodFwiIFthdHRyLmRhdGEtZmVhdHVyZS1pZF09XCJjb2w/LmF0dHJpYnV0ZXM/LmRhdGFGZWF0dXJlSWRcIj5cbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzcz1cImJoaS17eyBjb2w/LmFjdGlvbj8uaWNvbiB9fSBkYXRhLXRhYmxlLWljb25cIlxuICAgICAgICAgIChjbGljayk9XCJjb2wuaGFuZGxlcnM/LmNsaWNrKHsgb3JpZ2luYWxFdmVudDogJGV2ZW50LCByb3c6IHJvdyB9KVwiXG4gICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImlzRGlzYWJsZWQoY29sLCByb3cpXCJcbiAgICAgICAgPjwvaT5cbiAgICAgIDwvcD5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJkcm9wZG93bkNlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPG5vdm8tZHJvcGRvd24gcGFyZW50U2Nyb2xsU2VsZWN0b3I9XCIubm92by1kYXRhLXRhYmxlLWNvbnRhaW5lclwiIGNvbnRhaW5lckNsYXNzPVwibm92by1kYXRhLXRhYmxlLWRyb3Bkb3duXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwiZGlhbG9ndWVcIiBbaWNvbl09XCJjb2wuYWN0aW9uLmljb25cIiBpbnZlcnNlPnt7IGNvbC5sYWJlbCB9fTwvYnV0dG9uPlxuICAgICAgICA8bGlzdD5cbiAgICAgICAgICA8aXRlbVxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb2w/LmFjdGlvbj8ub3B0aW9uc1wiXG4gICAgICAgICAgICAoYWN0aW9uKT1cIm9wdGlvbi5oYW5kbGVycy5jbGljayh7IG9yaWdpbmFsRXZlbnQ6ICRldmVudD8ub3JpZ2luYWxFdmVudCwgcm93OiByb3cgfSlcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWQob3B0aW9uLCByb3cpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwib3B0aW9uLmxhYmVsXCI+e3sgb3B0aW9uLmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgPC9saXN0PlxuICAgICAgPC9ub3ZvLWRyb3Bkb3duPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImRlZmF1bHROb1Jlc3VsdHNNZXNzYWdlXCI+XG4gICAgICA8aDQ+PGkgY2xhc3M9XCJiaGktc2VhcmNoLXF1ZXN0aW9uXCI+PC9pPiB7eyBsYWJlbHMubm9NYXRjaGluZ1JlY29yZHNNZXNzYWdlIH19PC9oND5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJkZWZhdWx0RW1wdHlNZXNzYWdlXCI+XG4gICAgICA8aDQ+PGkgY2xhc3M9XCJiaGktc2VhcmNoLXF1ZXN0aW9uXCI+PC9pPiB7eyBsYWJlbHMuZW1wdHlUYWJsZU1lc3NhZ2UgfX08L2g0PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImV4cGFuZGVkUm93XCI+IFlvdSBkaWQgbm90IHByb3ZpZGUgYW4gXCJleHBhbmRlZFJvd1wiIHRlbXBsYXRlISA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjZGV0YWlsUm93VGVtcGxhdGUgbGV0LXJvdz5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtZGV0YWlsLXJvd1wiIFtAZXhwYW5kXSBzdHlsZT1cIm92ZXJmbG93OiBoaWRkZW5cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlc1snZXhwYW5kZWRSb3cnXTsgY29udGV4dDogeyAkaW1wbGljaXQ6IHJvdyB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwhLS0gQ1VTVE9NIENFTExTIFBBU1NFRCBJTiAtLT5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtEYXRhVGFibGVTdGF0ZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGU8VD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmdsb2JhbC1zZWFyY2gtaGlkZGVuJykgZ2xvYmFsU2VhcmNoSGlkZGVuQ2xhc3NUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAQ29udGVudENoaWxkcmVuKE5vdm9UZW1wbGF0ZSkgY3VzdG9tVGVtcGxhdGVzOiBRdWVyeUxpc3Q8Tm92b1RlbXBsYXRlPjtcbiAgQFZpZXdDaGlsZHJlbihOb3ZvVGVtcGxhdGUpIGRlZmF1bHRUZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOb3ZvVGVtcGxhdGU+O1xuICBAVmlld0NoaWxkcmVuKE5vdm9EYXRhVGFibGVDZWxsSGVhZGVyKSBjZWxsSGVhZGVyczogUXVlcnlMaXN0PE5vdm9EYXRhVGFibGVDZWxsSGVhZGVyPFQ+PjtcbiAgQFZpZXdDaGlsZCgnbm92b0RhdGFUYWJsZUNvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBub3ZvRGF0YVRhYmxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAT3V0cHV0KCkgcmVzaXplZDogRXZlbnRFbWl0dGVyPElEYXRhVGFibGVDb2x1bW48VD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNwbGF5ZWRDb2x1bW5zKGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHRoaXMuZGlzcGxheWVkQ29sdW1ucyAmJiB0aGlzLmRpc3BsYXllZENvbHVtbnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBpZiAodGhpcy5uYW1lICE9PSAnbm92by1kYXRhLXRhYmxlJykge1xuICAgICAgICB0aGlzLnByZWZlcmVuY2VzQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgZGlzcGxheWVkQ29sdW1ucyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3RpZnkoJ011c3QgaGF2ZSBbbmFtZV0gc2V0IG9uIGRhdGEtdGFibGUgdG8gdXNlIHByZWZlcmVuY2VzIScpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9kaXNhYmxlZENvbHVtbnMgPSBkaXNwbGF5ZWRDb2x1bW5zO1xuICAgIHRoaXMuY29uZmlndXJlTGFzdERpc3BsYXllZENvbHVtbigpO1xuICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3BsYXllZENvbHVtbnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZENvbHVtbnM7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWRDb2x1bW5zOiBzdHJpbmdbXTtcblxuICBASW5wdXQoKSBwYWdpbmF0aW9uT3B0aW9uczogSURhdGFUYWJsZVBhZ2luYXRpb25PcHRpb25zO1xuICBASW5wdXQoKSBzZWFyY2hPcHRpb25zOiBJRGF0YVRhYmxlU2VhcmNoT3B0aW9ucztcbiAgQElucHV0KCkgZGVmYXVsdFNvcnQ6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9O1xuICBASW5wdXQoKSBuYW1lID0gJ25vdm8tZGF0YS10YWJsZSc7XG4gIEBJbnB1dCgpIGFsbG93TXVsdGlwbGVGaWx0ZXJzID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJvd0lkZW50aWZpZXIgPSAnaWQnO1xuICBASW5wdXQoKSBhY3RpdmVSb3dJZGVudGlmaWVyID0gJyc7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBASW5wdXQoKSB0cmFja0J5Rm4gPSAoaW5kZXgsIGl0ZW0pID0+IGl0ZW0uaWQ7XG4gIEBJbnB1dCgpIHRlbXBsYXRlczogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxhbnk+IH0gPSB7fTtcbiAgQElucHV0KCkgZml4ZWRIZWFkZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgcGFnaW5hdG9yRGF0YUZlYXR1cmVJZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRhVGFibGVTZXJ2aWNlKHNlcnZpY2U6IElEYXRhVGFibGVTZXJ2aWNlPFQ+KSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgaWYgKCFzZXJ2aWNlKSB7XG4gICAgICBzZXJ2aWNlID0gbmV3IFN0YXRpY0RhdGFUYWJsZVNlcnZpY2UoW10pO1xuICAgIH1cbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgRGF0YVRhYmxlU291cmNlPFQ+KHNlcnZpY2UsIHRoaXMuc3RhdGUsIHRoaXMucmVmKTtcbiAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcm93cyhyb3dzOiBUW10pIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICBjb25zdCBzZXJ2aWNlID0gbmV3IFN0YXRpY0RhdGFUYWJsZVNlcnZpY2Uocm93cyk7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IERhdGFUYWJsZVNvdXJjZTxUPihzZXJ2aWNlLCB0aGlzLnN0YXRlLCB0aGlzLnJlZik7XG4gICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG91dHNpZGVGaWx0ZXIob3V0c2lkZUZpbHRlcjogRXZlbnRFbWl0dGVyPGFueT4pIHtcbiAgICAvLyBVbnN1YnNjcmliZVxuICAgIGlmICh0aGlzLm91dHNpZGVGaWx0ZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMub3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAob3V0c2lkZUZpbHRlcikge1xuICAgICAgLy8gUmUtc3Vic2NyaWJlXG4gICAgICB0aGlzLm91dHNpZGVGaWx0ZXJTdWJzY3JpcHRpb24gPSBvdXRzaWRlRmlsdGVyLnN1YnNjcmliZSgoZmlsdGVyOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0ZS5vdXRzaWRlRmlsdGVyID0gZmlsdGVyO1xuICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZXMubmV4dCh7IGdsb2JhbFNlYXJjaDogdGhpcy5zdGF0ZS5nbG9iYWxTZWFyY2gsIGZpbHRlcjogdGhpcy5zdGF0ZS5maWx0ZXIsIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCB9KTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcmVmcmVzaFN1YmplY3QocmVmcmVzaFN1YmplY3Q6IEV2ZW50RW1pdHRlcjxhbnk+KSB7XG4gICAgLy8gVW5zdWJzY3JpYmVcbiAgICBpZiAodGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHJlZnJlc2hTdWJqZWN0KSB7XG4gICAgICAvLyBSZS1zdWJzY3JpYmVcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbiA9IHJlZnJlc2hTdWJqZWN0LnN1YnNjcmliZSgoZmlsdGVyOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0ZS5pc0ZvcmNlUmVmcmVzaCA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KHsgZ2xvYmFsU2VhcmNoOiB0aGlzLnN0YXRlLmdsb2JhbFNlYXJjaCwgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlciwgc29ydDogdGhpcy5zdGF0ZS5zb3J0IH0pO1xuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjb2x1bW5zKGNvbHVtbnM6IElEYXRhVGFibGVDb2x1bW48VD5bXSkge1xuICAgIHRoaXMuX2NvbHVtbnMgPSBjb2x1bW5zO1xuICAgIHRoaXMuY29uZmlndXJlQ29sdW1ucygpO1xuICAgIHRoaXMucGVyZm9ybUludGVyYWN0aW9ucygnaW5pdCcpO1xuICB9XG4gIGdldCBjb2x1bW5zKCk6IElEYXRhVGFibGVDb2x1bW48VD5bXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgY3VzdG9tRmlsdGVyKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jdXN0b21GaWx0ZXIgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IGN1c3RvbUZpbHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tRmlsdGVyO1xuICB9XG4gIHByaXZhdGUgX2N1c3RvbUZpbHRlcjogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzZXQgaGFzRXhhbmRlZFJvd3ModjogYm9vbGVhbikge1xuICAgIHRoaXMuX2hhc0V4YW5kZWRSb3dzID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBoYXNFeGFuZGVkUm93cygpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzRXhhbmRlZFJvd3M7XG4gIH1cbiAgcHJpdmF0ZSBfaGFzRXhhbmRlZFJvd3M6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGZvcmNlU2hvd0hlYWRlcih2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZm9yY2VTaG93SGVhZGVyID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBmb3JjZVNob3dIZWFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvcmNlU2hvd0hlYWRlcjtcbiAgfVxuICBwcml2YXRlIF9mb3JjZVNob3dIZWFkZXI6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGhpZGVHbG9iYWxTZWFyY2godjogYm9vbGVhbikge1xuICAgIHRoaXMuX2hpZGVHbG9iYWxTZWFyY2ggPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gICAgdGhpcy5nbG9iYWxTZWFyY2hIaWRkZW5DbGFzc1RvZ2dsZSA9IHRoaXMuX2hpZGVHbG9iYWxTZWFyY2g7XG4gIH1cbiAgZ2V0IGhpZGVHbG9iYWxTZWFyY2goKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGVHbG9iYWxTZWFyY2g7XG4gIH1cbiAgcHJpdmF0ZSBfaGlkZUdsb2JhbFNlYXJjaDogYm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpIHByZWZlcmVuY2VzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPElEYXRhVGFibGVQcmVmZXJlbmNlcz4gPSBuZXcgRXZlbnRFbWl0dGVyPElEYXRhVGFibGVQcmVmZXJlbmNlcz4oKTtcblxuICBwdWJsaWMgZGF0YVNvdXJjZTogRGF0YVRhYmxlU291cmNlPFQ+O1xuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBjb2x1bW5Ub1RlbXBsYXRlOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPGFueT4gfSA9IHt9O1xuICBwdWJsaWMgY29sdW1uc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc2VsZWN0aW9uOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKTtcbiAgcHVibGljIHNjcm9sbExlZnQ6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBleHBhbmRhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBvdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcmVmcmVzaFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHJlc2V0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcGFnaW5hdGlvblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHNvcnRGaWx0ZXJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfY29sdW1uczogSURhdGFUYWJsZUNvbHVtbjxUPltdO1xuICBwcml2YXRlIHNjcm9sbExpc3RlbmVySGFuZGxlcjogYW55O1xuICBwcml2YXRlIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5lbXB0eScpXG4gIGdldCBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlICYmIHRoaXMuZGF0YVNvdXJjZS50b3RhbGx5RW1wdHk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxvYWRpbmcnKVxuICBnZXQgbG9hZGluZ0NsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWRpbmcgfHwgKHRoaXMuZGF0YVNvdXJjZSAmJiB0aGlzLmRhdGFTb3VyY2UubG9hZGluZyk7XG4gIH1cblxuICBASW5wdXQoKSBsaXN0SW50ZXJhY3Rpb25zOiBMaXN0SW50ZXJhY3Rpb25EaWN0aW9uYXJ5O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIHN0YXRlOiBEYXRhVGFibGVTdGF0ZTxUPikge1xuICAgIHRoaXMuc2Nyb2xsTGlzdGVuZXJIYW5kbGVyID0gdGhpcy5zY3JvbGxMaXN0ZW5lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc29ydEZpbHRlclN1YnNjcmlwdGlvbiA9IHRoaXMuc3RhdGUuc29ydEZpbHRlclNvdXJjZS5zdWJzY3JpYmUoXG4gICAgICAoZXZlbnQ6IHsgc29ydDogSURhdGFUYWJsZVNvcnQ7IGZpbHRlcjogSURhdGFUYWJsZUZpbHRlciB8IElEYXRhVGFibGVGaWx0ZXJbXTsgZ2xvYmFsU2VhcmNoOiBzdHJpbmcgfSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5uYW1lICE9PSAnbm92by1kYXRhLXRhYmxlJykge1xuICAgICAgICAgIHRoaXMucHJlZmVyZW5jZXNDaGFuZ2VkLmVtaXQoeyBuYW1lOiB0aGlzLm5hbWUsIHNvcnQ6IGV2ZW50LnNvcnQsIGZpbHRlcjogZXZlbnQuZmlsdGVyLCBnbG9iYWxTZWFyY2g6IGV2ZW50Lmdsb2JhbFNlYXJjaCB9KTtcbiAgICAgICAgICB0aGlzLnBlcmZvcm1JbnRlcmFjdGlvbnMoJ2NoYW5nZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vdGlmeSgnTXVzdCBoYXZlIFtuYW1lXSBzZXQgb24gZGF0YS10YWJsZSB0byB1c2UgcHJlZmVyZW5jZXMhJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKTtcbiAgICB0aGlzLnBhZ2luYXRpb25TdWJzY3JpcHRpb24gPSB0aGlzLnN0YXRlLnBhZ2luYXRpb25Tb3VyY2Uuc3Vic2NyaWJlKChldmVudDogeyBpc1BhZ2VTaXplQ2hhbmdlOiBib29sZWFuOyBwYWdlU2l6ZTogbnVtYmVyIH0pID0+IHtcbiAgICAgIGlmICh0aGlzLm5hbWUgIT09ICdub3ZvLWRhdGEtdGFibGUnKSB7XG4gICAgICAgIGlmIChldmVudC5pc1BhZ2VTaXplQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5wcmVmZXJlbmNlc0NoYW5nZWQuZW1pdCh7IG5hbWU6IHRoaXMubmFtZSwgcGFnZVNpemU6IGV2ZW50LnBhZ2VTaXplIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3RpZnkoJ011c3QgaGF2ZSBbbmFtZV0gc2V0IG9uIGRhdGEtdGFibGUgdG8gdXNlIHByZWZlcmVuY2VzIScpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMucmVzZXRTdWJzY3JpcHRpb24gPSB0aGlzLnN0YXRlLnJlc2V0U291cmNlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBtb2RpZnlDZWxsSGVhZGVyTXVsdGlTZWxlY3RGaWx0ZXJPcHRpb25zKGNvbHVtbjogc3RyaW5nLCBuZXdPcHRpb25zOiB7IHZhbHVlOiBhbnk7IGxhYmVsOiBzdHJpbmcgfVtdKTogdm9pZCB7XG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5jZWxsSGVhZGVycy5maW5kKChjZWxsSGVhZGVyKSA9PiBjZWxsSGVhZGVyLmlkID09PSBjb2x1bW4pO1xuICAgIGlmIChoZWFkZXIgJiYgaGVhZGVyLmNvbmZpZyAmJiBoZWFkZXIuY29uZmlnLmZpbHRlckNvbmZpZyAmJiBoZWFkZXIuY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zKSB7XG4gICAgICBjb25zdCBmaWx0ZXJPcHRpb25zOiBhbnlbXSA9IGhlYWRlci5jb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnM7XG4gICAgICBjb25zdCBvcHRpb25zVG9LZWVwID0gZmlsdGVyT3B0aW9ucy5maWx0ZXIoXG4gICAgICAgIChvcHQpID0+XG4gICAgICAgICAgaGVhZGVyLmlzU2VsZWN0ZWQob3B0LCBoZWFkZXIubXVsdGlTZWxlY3RlZE9wdGlvbnMpICYmXG4gICAgICAgICAgIW5ld09wdGlvbnMuZmluZCgobmV3T3B0KSA9PiBvcHQudmFsdWUgJiYgbmV3T3B0LnZhbHVlICYmIG5ld09wdC52YWx1ZSA9PT0gb3B0LnZhbHVlKSxcbiAgICAgICk7XG4gICAgICBoZWFkZXIuY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zID0gWy4uLm9wdGlvbnNUb0tlZXAsIC4uLm5ld09wdGlvbnNdO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIuY29uZmlnLmZpbHRlckNvbmZpZ1snb3B0aW9ucyddID0gbmV3T3B0aW9ucztcbiAgICB9XG4gICAgaGVhZGVyLnNldHVwRmlsdGVyT3B0aW9ucygpO1xuICAgIGhlYWRlci5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm91dHNpZGVGaWx0ZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubm92b0RhdGFUYWJsZUNvbnRhaW5lcikge1xuICAgICAgKHRoaXMubm92b0RhdGFUYWJsZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsTGlzdGVuZXJIYW5kbGVyKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlc2V0U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnJlc2V0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNvcnRGaWx0ZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc29ydEZpbHRlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzcGxheWVkQ29sdW1ucyAmJiB0aGlzLmRpc3BsYXllZENvbHVtbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmV4cGFuZGFibGUgPSB0aGlzLmRpc3BsYXllZENvbHVtbnMuaW5jbHVkZXMoJ2V4cGFuZCcpO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdGVtcGxhdGVzIGRlZmluZWQgaGVyZVxuICAgIHRoaXMuZGVmYXVsdFRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAvLyBPbmx5IG92ZXJyaWRlIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdFxuICAgICAgaWYgKCF0aGlzLnRlbXBsYXRlc1tpdGVtLmdldFR5cGUoKV0pIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXNbaXRlbS5nZXRUeXBlKCldID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBDdXN0b20gdGVtcGxhdGVzIHBhc3NlZCBpblxuICAgIHRoaXMuY3VzdG9tVGVtcGxhdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIC8vIE92ZXJyaWRlIGFueXRoaW5nIHRoYXQgaXMgY3VzdG9tIGFuZCBpbiBIVE1MXG4gICAgICB0aGlzLnRlbXBsYXRlc1tpdGVtLmdldFR5cGUoKV0gPSBpdGVtLnRlbXBsYXRlO1xuICAgIH0pO1xuICAgIC8vIExvYWQgY29sdW1uc1xuICAgIHRoaXMuY29uZmlndXJlQ29sdW1ucygpO1xuXG4gICAgLy8gU3RhdGVcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uT3B0aW9ucyAmJiAhdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlKSB7XG4gICAgICB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2UgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uT3B0aW9ucyAmJiAhdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZSkge1xuICAgICAgdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZSA9IDUwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uT3B0aW9ucyAmJiAhdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZU9wdGlvbnMpIHtcbiAgICAgIHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemVPcHRpb25zID0gWzEwLCAyNSwgNTAsIDEwMF07XG4gICAgfVxuICAgIHRoaXMuc3RhdGUucGFnZSA9IHRoaXMucGFnaW5hdGlvbk9wdGlvbnMgPyB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2UgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGF0ZS5wYWdlU2l6ZSA9IHRoaXMucGFnaW5hdGlvbk9wdGlvbnMgPyB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplIDogdW5kZWZpbmVkO1xuXG4gICAgLy8gU2Nyb2xsaW5nIGluc2lkZSB0YWJsZVxuICAgICh0aGlzLm5vdm9EYXRhVGFibGVDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbExpc3RlbmVySGFuZGxlcik7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgb25TZWFyY2hDaGFuZ2UodGVybTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZS5nbG9iYWxTZWFyY2ggPSB0ZXJtO1xuICAgIHRoaXMuc3RhdGUucmVzZXQoZmFsc2UsIHRydWUpO1xuICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KHsgZ2xvYmFsU2VhcmNoOiB0ZXJtLCBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSk7XG4gIH1cblxuICBwdWJsaWMgdHJhY2tDb2x1bW5zQnkoaW5kZXg6IG51bWJlciwgaXRlbTogSURhdGFUYWJsZUNvbHVtbjxUPikge1xuICAgIHJldHVybiBpdGVtLmlkO1xuICB9XG5cbiAgcHVibGljIGlzRGlzYWJsZWQoY2hlY2s6IGFueSwgcm93OiBUKTogYm9vbGVhbiB7XG4gICAgaWYgKGNoZWNrLmRpc2FibGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNoZWNrLmRpc2FibGVkRnVuYykge1xuICAgICAgcmV0dXJuIGNoZWNrLmRpc2FibGVkRnVuYyhyb3cpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaXNFeHBhbmRlZChyb3c6IFQpOiBib29sZWFuIHtcbiAgICBpZiAoIXJvdykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5leHBhbmRlZFJvd3MuaGFzKGAke3Jvd1t0aGlzLnJvd0lkZW50aWZpZXJdfWApO1xuICB9XG5cbiAgcHVibGljIGV4cGFuZFJvdyhyb3c6IFQpOiB2b2lkIHtcbiAgICBjb25zdCBleHBhbmRlZCA9IHRoaXMuaXNFeHBhbmRlZChyb3cpO1xuXG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICB0aGlzLnN0YXRlLmV4cGFuZGVkUm93cy5kZWxldGUoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUuZXhwYW5kZWRSb3dzLmFkZChgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5vbkV4cGFuZENoYW5nZSgoKHJvdyBhcyB1bmtub3duKSBhcyB7IGlkOiBudW1iZXIgfSkuaWQpO1xuICB9XG5cbiAgcHVibGljIGV4cGFuZFJvd3MoZXhwYW5kOiBib29sZWFuKTogdm9pZCB7XG4gICAgKHRoaXMuZGF0YVNvdXJjZS5kYXRhIHx8IFtdKS5mb3JFYWNoKChyb3c6IFQpID0+IHtcbiAgICAgIGlmICghZXhwYW5kKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZXhwYW5kZWRSb3dzLmRlbGV0ZShgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZXhwYW5kZWRSb3dzLmFkZChgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlLm9uRXhwYW5kQ2hhbmdlKCk7XG4gIH1cblxuICBwdWJsaWMgYWxsQ3VycmVudFJvd3NFeHBhbmRlZCgpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5pc0V4cGFuZGVkKCh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSlbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgaXNTZWxlY3RlZChyb3c6IFQpOiBib29sZWFuIHtcbiAgICBpZiAoIXJvdykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MuaGFzKGAke3Jvd1t0aGlzLnJvd0lkZW50aWZpZXJdfWApO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdFJvdyhyb3c6IFQpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuaXNTZWxlY3RlZChyb3cpO1xuXG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5kZWxldGUoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLnNldChgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gLCByb3cpO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlLm9uU2VsZWN0aW9uQ2hhbmdlKCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Um93cyhzZWxlY3RlZDogYm9vbGVhbik6IHZvaWQge1xuICAgICh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSkuZm9yRWFjaCgocm93OiBUKSA9PiB7XG4gICAgICBpZiAoIXNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLmRlbGV0ZShgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLnNldChgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gLCByb3cpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc3RhdGUub25TZWxlY3Rpb25DaGFuZ2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBhbGxDdXJyZW50Um93c1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHRoaXMuZGF0YVNvdXJjZS5kYXRhIHx8IFtdKS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLmlzU2VsZWN0ZWQoKHRoaXMuZGF0YVNvdXJjZS5kYXRhIHx8IFtdKVtpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlndXJlTGFzdERpc3BsYXllZENvbHVtbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2x1bW5zICYmIHRoaXMuZGlzcGxheWVkQ29sdW1ucyAmJiAwICE9PSB0aGlzLmNvbHVtbnMubGVuZ3RoICYmIDAgIT09IHRoaXMuZGlzcGxheWVkQ29sdW1ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi5pbml0aWFsUmVzaXphYmxlKSB7XG4gICAgICAgICAgY29sdW1uLnJlc2l6YWJsZSA9IGNvbHVtbi5pbml0aWFsUmVzaXphYmxlLnJlc2l6YWJsZTtcbiAgICAgICAgICBjb2x1bW4ud2lkdGggPSBjb2x1bW4uaW5pdGlhbFJlc2l6YWJsZS53aWR0aDtcbiAgICAgICAgICBjb2x1bW4uaW5pdGlhbFJlc2l6YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXNpemFibGVDb2x1bW5zOiBzdHJpbmdbXSA9IHRoaXMuZGlzcGxheWVkQ29sdW1ucy5maWx0ZXIoKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHRoaXMuY29sdW1ucy5maW5kSW5kZXgoKGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPik6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5yZXNpemFibGUgJiYgY29sdW1uLmlkID09PSBuYW1lO1xuICAgICAgICAgIH0pICE9PSAtMVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICBpZiAocmVzaXphYmxlQ29sdW1ucyAmJiByZXNpemFibGVDb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbGFzdFJlc2l6YWJsZUNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPiA9IHRoaXMuY29sdW1ucy5maW5kKChjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pID0+IHtcbiAgICAgICAgICByZXR1cm4gY29sdW1uLmlkID09PSByZXNpemFibGVDb2x1bW5zW3Jlc2l6YWJsZUNvbHVtbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIH0pO1xuICAgICAgICBsYXN0UmVzaXphYmxlQ29sdW1uLmluaXRpYWxSZXNpemFibGUgPSB7XG4gICAgICAgICAgcmVzaXphYmxlOiBsYXN0UmVzaXphYmxlQ29sdW1uLnJlc2l6YWJsZSxcbiAgICAgICAgICB3aWR0aDogbGFzdFJlc2l6YWJsZUNvbHVtbi53aWR0aCxcbiAgICAgICAgfTtcbiAgICAgICAgbGFzdFJlc2l6YWJsZUNvbHVtbi53aWR0aCA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGFzdFJlc2l6YWJsZUNvbHVtbi5yZXNpemFibGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZUNvbHVtbnMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sdW1ucyAmJiB0aGlzLmNvbHVtbnMubGVuZ3RoICE9PSAwICYmIE9iamVjdC5rZXlzKHRoaXMudGVtcGxhdGVzKS5sZW5ndGggIT09IDApIHtcbiAgICAgIC8vIEZpZ3VyZSB0aGUgY29sdW1uIHRlbXBsYXRlc1xuICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPikgPT4ge1xuICAgICAgICAvLyBGaWd1cmUgdGhlIHRlbXBsYXRlXG4gICAgICAgIGxldCB0ZW1wbGF0ZU5hbWU6IHN0cmluZztcbiAgICAgICAgaWYgKGNvbHVtbi50ZW1wbGF0ZSkge1xuICAgICAgICAgIC8vIFBhc3MgaXQgaW4gYXMgdGVtcGxhdGVcbiAgICAgICAgICB0ZW1wbGF0ZU5hbWUgPSBjb2x1bW4udGVtcGxhdGU7XG4gICAgICAgIH0gZWxzZSBpZiAoISF0aGlzLnRlbXBsYXRlc1tjb2x1bW4uaWRdKSB7XG4gICAgICAgICAgLy8gQ3VzdG9tIHRlbXBsYXRlIGZvciB0aGUgY29sdW1uIGlkXG4gICAgICAgICAgdGVtcGxhdGVOYW1lID0gY29sdW1uLmlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIERlZmF1bHQgdG8gdGhlIGRlZmF1bENlbGxUZW1wbGF0ZVxuICAgICAgICAgIGlmIChjb2x1bW4udHlwZSA9PT0gJ2FjdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW4uYWN0aW9uICYmIGNvbHVtbi5hY3Rpb24ub3B0aW9ucykge1xuICAgICAgICAgICAgICBpZiAoIWNvbHVtbi5hY3Rpb24uaWNvbikge1xuICAgICAgICAgICAgICAgIGNvbHVtbi5hY3Rpb24uaWNvbiA9ICdjb2xsYXBzZSc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGVtcGxhdGVOYW1lID0gJ2Ryb3Bkb3duQ2VsbFRlbXBsYXRlJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRlbXBsYXRlTmFtZSA9ICdidXR0b25DZWxsVGVtcGxhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY29sdW1uLnR5cGUgPT09ICdsaW5rOnRlbCcgfHwgY29sdW1uLnR5cGUgPT09ICdsaW5rOm1haWx0bycpIHtcbiAgICAgICAgICAgICAgdGVtcGxhdGVOYW1lID0gYCR7Y29sdW1uLnR5cGUuc3BsaXQoJzonKVsxXX1DZWxsVGVtcGxhdGVgO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGVtcGxhdGVOYW1lID0gYCR7Y29sdW1uLnR5cGV9Q2VsbFRlbXBsYXRlYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2x1bW5Ub1RlbXBsYXRlW2NvbHVtbi5pZF0gPSB0aGlzLnRlbXBsYXRlc1t0ZW1wbGF0ZU5hbWVdO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmNvbmZpZ3VyZUxhc3REaXNwbGF5ZWRDb2x1bW4oKTtcbiAgICAgIHRoaXMuY29sdW1uc0xvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQ6IEVsZW1lbnQgPSB0aGlzLm5vdm9EYXRhVGFibGVDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgIGNvbnN0IGxlZnQ6IG51bWJlciA9IHRhcmdldC5zY3JvbGxMZWZ0O1xuICAgIGlmIChsZWZ0ICE9PSB0aGlzLnNjcm9sbExlZnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsTGVmdCA9IHRhcmdldC5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHBlcmZvcm1JbnRlcmFjdGlvbnMoZXZlbnQ6IExpc3RJbnRlcmFjdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGlzdEludGVyYWN0aW9ucykge1xuICAgICAgZm9yIChjb25zdCBjb2x1bW4gb2YgdGhpcy5jb2x1bW5zKSB7XG4gICAgICAgIGNvbnN0IGFsbExpc3RDb2x1bW5JbnRlcmFjdGlvbnMgPSB0aGlzLmxpc3RJbnRlcmFjdGlvbnNbY29sdW1uLmlkXTtcbiAgICAgICAgY29uc3QgbGlzdENvbHVtbkludGVyYWN0aW9uID0gYWxsTGlzdENvbHVtbkludGVyYWN0aW9ucyAmJiBhbGxMaXN0Q29sdW1uSW50ZXJhY3Rpb25zLmZpbmQoKGludCkgPT4gaW50LmV2ZW50LmluY2x1ZGVzKGV2ZW50KSk7XG4gICAgICAgIGlmIChsaXN0Q29sdW1uSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICBsaXN0Q29sdW1uSW50ZXJhY3Rpb24uc2NyaXB0KHRoaXMsIGNvbHVtbi5pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==