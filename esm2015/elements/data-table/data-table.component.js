/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/data-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, state as animState, style, transition, trigger } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, HostBinding, Input, Output, QueryList, ViewChild, ViewChildren, forwardRef } from '@angular/core';
import { NovoLabelService } from '../../services/novo-label-service';
import { notify } from '../../utils/notifier/notifier.util';
import { NovoTemplate } from '../common/novo-template/novo-template.directive';
import { DataTableSource } from './data-table.source';
import { StaticDataTableService } from './services/static-data-table.service';
import { DataTableState } from './state/data-table-state.service';
import { NovoDataTableCellHeader } from './cell-headers/data-table-header-cell.component';
import { NovoDataTableSortFilter } from './sort-filter/sort-filter.directive';
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
     * @param {?} id
     * @param {?} type
     * @param {?} value
     * @param {?} transform
     * @param {?=} allowMultipleFilters
     * @param {?=} selectedOption
     * @return {?}
     */
    filter(id, type, value, transform, allowMultipleFilters = false, selectedOption) {
        this.sortFilterDirective.filter(id, type, value, transform, allowMultipleFilters, selectedOption);
    }
    /**
     * @param {?} id
     * @param {?} value
     * @param {?} transform
     * @return {?}
     */
    sort(id, value, transform) {
        this.sortFilterDirective.sort(id, value, transform);
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
    sortFilterDirective: [{ type: ViewChild, args: [forwardRef((/**
                 * @return {?}
                 */
                () => NovoDataTableSortFilter)), { static: false },] }],
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
    NovoDataTable.prototype.sortFilterDirective;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxJQUFJLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFFVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBRVQsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFVdEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRTFGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7O0FBNE45RSxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBaUx4QixZQUFtQixNQUF3QixFQUFVLEdBQXNCLEVBQVMsS0FBd0I7UUFBekYs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O0lBQUUsNEJBQThCOztJQUFFLDhCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIHN0YXRlIGFzIGFuaW1TdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG5pbXBvcnQgeyBOb3ZvVGVtcGxhdGUgfSBmcm9tICcuLi9jb21tb24vbm92by10ZW1wbGF0ZS9ub3ZvLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVTb3VyY2UgfSBmcm9tICcuL2RhdGEtdGFibGUuc291cmNlJztcbmltcG9ydCB7XG4gIElEYXRhVGFibGVDb2x1bW4sXG4gIElEYXRhVGFibGVGaWx0ZXIsXG4gIElEYXRhVGFibGVQYWdpbmF0aW9uT3B0aW9ucyxcbiAgSURhdGFUYWJsZVByZWZlcmVuY2VzLFxuICBJRGF0YVRhYmxlU2VhcmNoT3B0aW9ucyxcbiAgSURhdGFUYWJsZVNlcnZpY2UsXG4gIElEYXRhVGFibGVTb3J0LFxufSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgU3RhdGljRGF0YVRhYmxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc3RhdGljLWRhdGEtdGFibGUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVTdGF0ZSB9IGZyb20gJy4vc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVDZWxsSGVhZGVyIH0gZnJvbSAnLi9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdEludGVyYWN0aW9uRGljdGlvbmFyeSwgTGlzdEludGVyYWN0aW9uRXZlbnQgfSBmcm9tICcuL0xpc3RJbnRlcmFjdGlvblR5cGVzJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVTb3J0RmlsdGVyIH0gZnJvbSAnLi9zb3J0LWZpbHRlci9zb3J0LWZpbHRlci5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRhdGEtdGFibGUnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZXhwYW5kJywgW1xuICAgICAgYW5pbVN0YXRlKCd2b2lkJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnLCBtaW5IZWlnaHQ6ICcwJywgdmlzaWJpbGl0eTogJ2hpZGRlbicgfSkpLFxuICAgICAgYW5pbVN0YXRlKCcqJywgc3R5bGUoeyBoZWlnaHQ6ICcqJywgdmlzaWJpbGl0eTogJ3Zpc2libGUnIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPD0+IConLCBhbmltYXRlKCc3MG1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKScpKSxcbiAgICBdKSxcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aGVhZGVyXG4gICAgICAqbmdJZj1cIighKGRhdGFTb3VyY2U/LnRvdGFsbHlFbXB0eSAmJiAhc3RhdGUudXNlckZpbHRlcmVkKSAmJiAhbG9hZGluZykgfHwgZm9yY2VTaG93SGVhZGVyXCJcbiAgICAgIFtjbGFzcy5lbXB0eV09XCJoaWRlR2xvYmFsU2VhcmNoICYmICFwYWdpbmF0aW9uT3B0aW9ucyAmJiAhdGVtcGxhdGVzWydjdXN0b21BY3Rpb25zJ11cIlxuICAgID5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbJ2N1c3RvbUhlYWRlciddXCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8bm92by1zZWFyY2hcbiAgICAgICAgYWx3YXlzT3Blbj1cInRydWVcIlxuICAgICAgICAoc2VhcmNoQ2hhbmdlZCk9XCJvblNlYXJjaENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJzdGF0ZS5nbG9iYWxTZWFyY2hcIlxuICAgICAgICAqbmdJZj1cIiFoaWRlR2xvYmFsU2VhcmNoXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInNlYXJjaE9wdGlvbnM/LnBsYWNlaG9sZGVyXCJcbiAgICAgICAgW2hpbnRdPVwic2VhcmNoT3B0aW9ucz8udG9vbHRpcFwiXG4gICAgICA+XG4gICAgICA8L25vdm8tc2VhcmNoPlxuICAgICAgPG5vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uXG4gICAgICAgICpuZ0lmPVwicGFnaW5hdGlvbk9wdGlvbnNcIlxuICAgICAgICBbdGhlbWVdPVwicGFnaW5hdGlvbk9wdGlvbnMudGhlbWVcIlxuICAgICAgICBbbGVuZ3RoXT1cImRhdGFTb3VyY2U/LmN1cnJlbnRUb3RhbFwiXG4gICAgICAgIFtwYWdlXT1cInBhZ2luYXRpb25PcHRpb25zLnBhZ2VcIlxuICAgICAgICBbcGFnZVNpemVdPVwicGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemVcIlxuICAgICAgICBbcGFnZVNpemVPcHRpb25zXT1cInBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplT3B0aW9uc1wiXG4gICAgICAgIFtkYXRhRmVhdHVyZUlkXT1cInBhZ2luYXRvckRhdGFGZWF0dXJlSWRcIlxuICAgICAgPlxuICAgICAgPC9ub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtYWN0aW9uc1wiICpuZ0lmPVwidGVtcGxhdGVzWydjdXN0b21BY3Rpb25zJ11cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlc1snY3VzdG9tQWN0aW9ucyddXCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWxvYWRpbmctbWFza1wiICpuZ0lmPVwiZGF0YVNvdXJjZT8ubG9hZGluZyB8fCBsb2FkaW5nXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWxvYWRpbmdcIj5cbiAgICAgIDxub3ZvLWxvYWRpbmc+PC9ub3ZvLWxvYWRpbmc+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1vdXRzaWRlLWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInsgJ25vdm8tZGF0YS10YWJsZS1vdXRzaWRlLWNvbnRhaW5lci1maXhlZCc6IGZpeGVkSGVhZGVyIH1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtY3VzdG9tLWZpbHRlclwiICpuZ0lmPVwiY3VzdG9tRmlsdGVyXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbJ2N1c3RvbUZpbHRlciddXCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgI25vdm9EYXRhVGFibGVDb250YWluZXJcbiAgICAgICAgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtY29udGFpbmVyXCJcbiAgICAgICAgW25nQ2xhc3NdPVwieyAnbm92by1kYXRhLXRhYmxlLWNvbnRhaW5lci1maXhlZCc6IGZpeGVkSGVhZGVyIH1cIlxuICAgICAgICBbY2xhc3MuZW1wdHktdXNlci1maWx0ZXJlZF09XCJkYXRhU291cmNlPy5jdXJyZW50bHlFbXB0eSAmJiBzdGF0ZS51c2VyRmlsdGVyZWRcIlxuICAgICAgICBbY2xhc3MuZW1wdHldPVwiZGF0YVNvdXJjZT8udG90YWxseUVtcHR5ICYmICFkYXRhU291cmNlPy5sb2FkaW5nICYmICFsb2FkaW5nICYmICFzdGF0ZS51c2VyRmlsdGVyZWQgJiYgIWRhdGFTb3VyY2UucHJpc3RpbmVcIlxuICAgICAgPlxuICAgICAgICA8Y2RrLXRhYmxlXG4gICAgICAgICAgKm5nSWY9XCJjb2x1bW5zPy5sZW5ndGggPiAwICYmIGNvbHVtbnNMb2FkZWQgJiYgZGF0YVNvdXJjZVwiXG4gICAgICAgICAgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiXG4gICAgICAgICAgW3RyYWNrQnldPVwidHJhY2tCeUZuXCJcbiAgICAgICAgICBub3ZvRGF0YVRhYmxlU29ydEZpbHRlclxuICAgICAgICAgIFtjbGFzcy5leHBhbmRhYmxlXT1cImV4cGFuZGFibGVcIlxuICAgICAgICAgIFtjbGFzcy5lbXB0eV09XCJkYXRhU291cmNlPy5jdXJyZW50bHlFbXB0eSAmJiBzdGF0ZS51c2VyRmlsdGVyZWRcIlxuICAgICAgICAgIFtoaWRkZW5dPVwiZGF0YVNvdXJjZT8udG90YWxseUVtcHR5ICYmICFzdGF0ZS51c2VyRmlsdGVyZWRcIlxuICAgICAgICA+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciBjZGtDb2x1bW5EZWY9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICAgIDxub3ZvLWRhdGEtdGFibGUtY2hlY2tib3gtaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+PC9ub3ZvLWRhdGEtdGFibGUtY2hlY2tib3gtaGVhZGVyLWNlbGw+XG4gICAgICAgICAgICA8bm92by1kYXRhLXRhYmxlLWNoZWNrYm94LWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgcm93OyBsZXQgaSA9IGluZGV4XCIgW3Jvd109XCJyb3dcIj48L25vdm8tZGF0YS10YWJsZS1jaGVja2JveC1jZWxsPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwiZXhwYW5kXCI+XG4gICAgICAgICAgICA8bm92by1kYXRhLXRhYmxlLWV4cGFuZC1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj48L25vdm8tZGF0YS10YWJsZS1leHBhbmQtaGVhZGVyLWNlbGw+XG4gICAgICAgICAgICA8bm92by1kYXRhLXRhYmxlLWV4cGFuZC1jZWxsICpjZGtDZWxsRGVmPVwibGV0IHJvdzsgbGV0IGkgPSBpbmRleFwiIFtyb3ddPVwicm93XCI+PC9ub3ZvLWRhdGEtdGFibGUtZXhwYW5kLWNlbGw+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnM7IHRyYWNrQnk6IHRyYWNrQ29sdW1uc0J5XCIgW2Nka0NvbHVtbkRlZl09XCJjb2x1bW4uaWRcIj5cbiAgICAgICAgICAgIDxub3ZvLWRhdGEtdGFibGUtaGVhZGVyLWNlbGxcbiAgICAgICAgICAgICAgKmNka0hlYWRlckNlbGxEZWZcbiAgICAgICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxuICAgICAgICAgICAgICBbZmlsdGVyVGVtcGxhdGVdPVwidGVtcGxhdGVzWydjb2x1bW4tZmlsdGVyLScgKyBjb2x1bW4uaWRdXCJcbiAgICAgICAgICAgICAgW25vdm8tZGF0YS10YWJsZS1jZWxsLWNvbmZpZ109XCJjb2x1bW5cIlxuICAgICAgICAgICAgICBbcmVzaXplZF09XCJyZXNpemVkXCJcbiAgICAgICAgICAgICAgW2RlZmF1bHRTb3J0XT1cImRlZmF1bHRTb3J0XCJcbiAgICAgICAgICAgICAgW2FsbG93TXVsdGlwbGVGaWx0ZXJzXT1cImFsbG93TXVsdGlwbGVGaWx0ZXJzXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmVtcHR5XT1cImNvbHVtbj8udHlwZSA9PT0gJ2FjdGlvbicgJiYgIWNvbHVtbj8ubGFiZWxcIlxuICAgICAgICAgICAgICBbY2xhc3MuYnV0dG9uLWhlYWRlci1jZWxsXT1cImNvbHVtbj8udHlwZSA9PT0gJ2V4cGFuZCcgfHwgKGNvbHVtbj8udHlwZSA9PT0gJ2FjdGlvbicgJiYgIWNvbHVtbj8uYWN0aW9uPy5vcHRpb25zKVwiXG4gICAgICAgICAgICAgIFtjbGFzcy5kcm9wZG93bi1oZWFkZXItY2VsbF09XCJjb2x1bW4/LnR5cGUgPT09ICdhY3Rpb24nICYmIGNvbHVtbj8uYWN0aW9uPy5vcHRpb25zXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmZpeGVkLWhlYWRlcl09XCJmaXhlZEhlYWRlclwiXG4gICAgICAgICAgICA+PC9ub3ZvLWRhdGEtdGFibGUtaGVhZGVyLWNlbGw+XG4gICAgICAgICAgICA8bm92by1kYXRhLXRhYmxlLWNlbGxcbiAgICAgICAgICAgICAgKmNka0NlbGxEZWY9XCJsZXQgcm93XCJcbiAgICAgICAgICAgICAgW3Jlc2l6ZWRdPVwicmVzaXplZFwiXG4gICAgICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgW3Jvd109XCJyb3dcIlxuICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiY29sdW1uVG9UZW1wbGF0ZVtjb2x1bW4uaWRdXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmVtcHR5XT1cImNvbHVtbj8udHlwZSA9PT0gJ2FjdGlvbicgJiYgIWNvbHVtbj8ubGFiZWxcIlxuICAgICAgICAgICAgICBbY2xhc3MuYnV0dG9uLWNlbGxdPVwiY29sdW1uPy50eXBlID09PSAnZXhwYW5kJyB8fCAoY29sdW1uPy50eXBlID09PSAnYWN0aW9uJyAmJiAhY29sdW1uPy5hY3Rpb24/Lm9wdGlvbnMpXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmRyb3Bkb3duLWNlbGxdPVwiY29sdW1uPy50eXBlID09PSAnYWN0aW9uJyAmJiBjb2x1bW4/LmFjdGlvbj8ub3B0aW9uc1wiXG4gICAgICAgICAgICA+PC9ub3ZvLWRhdGEtdGFibGUtY2VsbD5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bm92by1kYXRhLXRhYmxlLWhlYWRlci1yb3dcbiAgICAgICAgICAgICpjZGtIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCJcbiAgICAgICAgICAgIFtmaXhlZEhlYWRlcl09XCJmaXhlZEhlYWRlclwiXG4gICAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtaGVhZGVyLXJvd1wiXG4gICAgICAgICAgPjwvbm92by1kYXRhLXRhYmxlLWhlYWRlci1yb3c+XG4gICAgICAgICAgPG5vdm8tZGF0YS10YWJsZS1yb3dcbiAgICAgICAgICAgICpjZGtSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgYWN0aXZlOiByb3dbcm93SWRlbnRpZmllcl0gPT0gYWN0aXZlUm93SWRlbnRpZmllciB9XCJcbiAgICAgICAgICAgIFtub3ZvRGF0YVRhYmxlRXhwYW5kXT1cImRldGFpbFJvd1RlbXBsYXRlXCJcbiAgICAgICAgICAgIFtyb3ddPVwicm93XCJcbiAgICAgICAgICAgIFtpZF09XCJuYW1lICsgJy0nICsgcm93W3Jvd0lkZW50aWZpZXJdXCJcbiAgICAgICAgICAgIFtkYXRhQXV0b21hdGlvbklkXT1cInJvd1tyb3dJZGVudGlmaWVyXVwiXG4gICAgICAgICAgPjwvbm92by1kYXRhLXRhYmxlLXJvdz5cbiAgICAgICAgPC9jZGstdGFibGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtZm9vdGVyXCIgKm5nSWY9XCJ0ZW1wbGF0ZXNbJ2Zvb3RlciddXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlc1snZm9vdGVyJ107IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb2x1bW5zLCBkYXRhOiBkYXRhU291cmNlLmRhdGEgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwibm92by1kYXRhLXRhYmxlLW5vLXJlc3VsdHMtY29udGFpbmVyXCJcbiAgICAgICAgICBbc3R5bGUubGVmdC5weF09XCJzY3JvbGxMZWZ0XCJcbiAgICAgICAgICAqbmdJZj1cImRhdGFTb3VyY2U/LmN1cnJlbnRseUVtcHR5ICYmIHN0YXRlLnVzZXJGaWx0ZXJlZCAmJiAhZGF0YVNvdXJjZT8ubG9hZGluZyAmJiAhbG9hZGluZyAmJiAhZGF0YVNvdXJjZS5wcmlzdGluZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWVtcHR5LW1lc3NhZ2VcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbJ25vUmVzdWx0c01lc3NhZ2UnXSB8fCB0ZW1wbGF0ZXNbJ2RlZmF1bHROb1Jlc3VsdHNNZXNzYWdlJ11cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtZW1wdHktY29udGFpbmVyXCJcbiAgICAgICAgKm5nSWY9XCJkYXRhU291cmNlPy50b3RhbGx5RW1wdHkgJiYgIWRhdGFTb3VyY2U/LmxvYWRpbmcgJiYgIWxvYWRpbmcgJiYgIXN0YXRlLnVzZXJGaWx0ZXJlZCAmJiAhZGF0YVNvdXJjZS5wcmlzdGluZVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtZW1wdHktbWVzc2FnZVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbJ2VtcHR5TWVzc2FnZSddIHx8IHRlbXBsYXRlc1snZGVmYXVsdE5vUmVzdWx0c01lc3NhZ2UnXVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwhLS0gREVGQVVMVCBDRUxMIFRFTVBMQVRFIC0tPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJ0ZXh0Q2VsbFRlbXBsYXRlXCIgbGV0LXJvdyBsZXQtY29sPVwiY29sXCI+XG4gICAgICA8c3BhbiBbc3R5bGUud2lkdGgucHhdPVwiY29sPy53aWR0aFwiIFtzdHlsZS5taW4td2lkdGgucHhdPVwiY29sPy53aWR0aFwiIFtzdHlsZS5tYXgtd2lkdGgucHhdPVwiY29sPy53aWR0aFwiPnt7XG4gICAgICAgIHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbFxuICAgICAgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiZGF0ZUNlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHNwYW4+e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTogY29sIHwgZGF0YVRhYmxlRGF0ZVJlbmRlcmVyOiBjb2wgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiZGF0ZXRpbWVDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxzcGFuPnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbCB8IGRhdGFUYWJsZURhdGVUaW1lUmVuZGVyZXI6IGNvbCB9fTwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJ0aW1lQ2VsbFRlbXBsYXRlXCIgbGV0LXJvdyBsZXQtY29sPVwiY29sXCI+XG4gICAgICA8c3Bhbj57eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2wgfCBkYXRhVGFibGVUaW1lUmVuZGVyZXI6IGNvbCB9fTwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJjdXJyZW5jeUNlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHNwYW4+e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTogY29sIHwgZGF0YVRhYmxlQ3VycmVuY3lSZW5kZXJlcjogY29sIH19PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImJpZ2RlY2ltYWxDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxzcGFuPnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbCB8IGRhdGFUYWJsZUJpZ0RlY2ltYWxSZW5kZXJlcjogY29sIH19PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cIm51bWJlckNlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHNwYW4+e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTogY29sIHwgZGF0YVRhYmxlTnVtYmVyUmVuZGVyZXI6IGNvbCB9fTwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJwZXJjZW50Q2VsbFRlbXBsYXRlXCIgbGV0LXJvdyBsZXQtY29sPVwiY29sXCI+XG4gICAgICA8c3Bhbj57eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2wgfCBkYXRhVGFibGVOdW1iZXJSZW5kZXJlcjogY29sOnRydWUgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwibGlua0NlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPGFcbiAgICAgICAgW2F0dHIuZGF0YS1mZWF0dXJlLWlkXT1cImNvbD8uYXR0cmlidXRlcz8uZGF0YUZlYXR1cmVJZFwiXG4gICAgICAgIChjbGljayk9XCJjb2wuaGFuZGxlcnM/LmNsaWNrKHsgb3JpZ2luYWxFdmVudDogJGV2ZW50LCByb3c6IHJvdyB9KVwiXG4gICAgICAgIFtzdHlsZS53aWR0aC5weF09XCJjb2w/LndpZHRoXCJcbiAgICAgICAgW3N0eWxlLm1pbi13aWR0aC5weF09XCJjb2w/LndpZHRoXCJcbiAgICAgICAgW3N0eWxlLm1heC13aWR0aC5weF09XCJjb2w/LndpZHRoXCJcbiAgICAgICAgPnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbCB9fTwvYVxuICAgICAgPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cInRlbENlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPGEgaHJlZj1cInRlbDp7eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2wgfX1cIiBbdGFyZ2V0XT1cImNvbD8uYXR0cmlidXRlcz8udGFyZ2V0XCI+e3tcbiAgICAgICAgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTogY29sXG4gICAgICB9fTwvYT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJtYWlsdG9DZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxhIGhyZWY9XCJtYWlsdG86e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTogY29sIH19XCIgW3RhcmdldF09XCJjb2w/LmF0dHJpYnV0ZXM/LnRhcmdldFwiPnt7XG4gICAgICAgIHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbFxuICAgICAgfX08L2E+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiYnV0dG9uQ2VsbFRlbXBsYXRlXCIgbGV0LXJvdyBsZXQtY29sPVwiY29sXCI+XG4gICAgICA8cCBbdG9vbHRpcF09XCJjb2w/LmFjdGlvbj8udG9vbHRpcFwiIHRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCIgW2F0dHIuZGF0YS1mZWF0dXJlLWlkXT1cImNvbD8uYXR0cmlidXRlcz8uZGF0YUZlYXR1cmVJZFwiPlxuICAgICAgICA8aVxuICAgICAgICAgIGNsYXNzPVwiYmhpLXt7IGNvbD8uYWN0aW9uPy5pY29uIH19IGRhdGEtdGFibGUtaWNvblwiXG4gICAgICAgICAgKGNsaWNrKT1cImNvbC5oYW5kbGVycz8uY2xpY2soeyBvcmlnaW5hbEV2ZW50OiAkZXZlbnQsIHJvdzogcm93IH0pXCJcbiAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiaXNEaXNhYmxlZChjb2wsIHJvdylcIlxuICAgICAgICA+PC9pPlxuICAgICAgPC9wPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImRyb3Bkb3duQ2VsbFRlbXBsYXRlXCIgbGV0LXJvdyBsZXQtY29sPVwiY29sXCI+XG4gICAgICA8bm92by1kcm9wZG93biBwYXJlbnRTY3JvbGxTZWxlY3Rvcj1cIi5ub3ZvLWRhdGEtdGFibGUtY29udGFpbmVyXCIgY29udGFpbmVyQ2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtZHJvcGRvd25cIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGhlbWU9XCJkaWFsb2d1ZVwiIFtpY29uXT1cImNvbC5hY3Rpb24uaWNvblwiIGludmVyc2U+e3sgY29sLmxhYmVsIH19PC9idXR0b24+XG4gICAgICAgIDxsaXN0PlxuICAgICAgICAgIDxpdGVtXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbD8uYWN0aW9uPy5vcHRpb25zXCJcbiAgICAgICAgICAgIChhY3Rpb24pPVwib3B0aW9uLmhhbmRsZXJzLmNsaWNrKHsgb3JpZ2luYWxFdmVudDogJGV2ZW50Py5vcmlnaW5hbEV2ZW50LCByb3c6IHJvdyB9KVwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZChvcHRpb24sIHJvdylcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJvcHRpb24ubGFiZWxcIj57eyBvcHRpb24ubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgPC9pdGVtPlxuICAgICAgICA8L2xpc3Q+XG4gICAgICA8L25vdm8tZHJvcGRvd24+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiZGVmYXVsdE5vUmVzdWx0c01lc3NhZ2VcIj5cbiAgICAgIDxoND48aSBjbGFzcz1cImJoaS1zZWFyY2gtcXVlc3Rpb25cIj48L2k+IHt7IGxhYmVscy5ub01hdGNoaW5nUmVjb3Jkc01lc3NhZ2UgfX08L2g0PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImRlZmF1bHRFbXB0eU1lc3NhZ2VcIj5cbiAgICAgIDxoND48aSBjbGFzcz1cImJoaS1zZWFyY2gtcXVlc3Rpb25cIj48L2k+IHt7IGxhYmVscy5lbXB0eVRhYmxlTWVzc2FnZSB9fTwvaDQ+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiZXhwYW5kZWRSb3dcIj4gWW91IGRpZCBub3QgcHJvdmlkZSBhbiBcImV4cGFuZGVkUm93XCIgdGVtcGxhdGUhIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlICNkZXRhaWxSb3dUZW1wbGF0ZSBsZXQtcm93PlxuICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1kZXRhaWwtcm93XCIgW0BleHBhbmRdIHN0eWxlPVwib3ZlcmZsb3c6IGhpZGRlblwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydleHBhbmRlZFJvdyddOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogcm93IH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPCEtLSBDVVNUT00gQ0VMTFMgUEFTU0VEIElOIC0tPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0RhdGFUYWJsZVN0YXRlXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZTxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZ2xvYmFsLXNlYXJjaC1oaWRkZW4nKSBnbG9iYWxTZWFyY2hIaWRkZW5DbGFzc1RvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTm92b1RlbXBsYXRlKSBjdXN0b21UZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOb3ZvVGVtcGxhdGU+O1xuICBAVmlld0NoaWxkcmVuKE5vdm9UZW1wbGF0ZSkgZGVmYXVsdFRlbXBsYXRlczogUXVlcnlMaXN0PE5vdm9UZW1wbGF0ZT47XG4gIEBWaWV3Q2hpbGRyZW4oTm92b0RhdGFUYWJsZUNlbGxIZWFkZXIpIGNlbGxIZWFkZXJzOiBRdWVyeUxpc3Q8Tm92b0RhdGFUYWJsZUNlbGxIZWFkZXI8VD4+O1xuICBAVmlld0NoaWxkKCdub3ZvRGF0YVRhYmxlQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIG5vdm9EYXRhVGFibGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBOb3ZvRGF0YVRhYmxlU29ydEZpbHRlciksIHsgc3RhdGljOiBmYWxzZSB9KSBzb3J0RmlsdGVyRGlyZWN0aXZlOiBOb3ZvRGF0YVRhYmxlU29ydEZpbHRlcjxUPjtcbiAgQE91dHB1dCgpIHJlc2l6ZWQ6IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlQ29sdW1uPFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKVxuICBzZXQgZGlzcGxheWVkQ29sdW1ucyhkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSkge1xuICAgIGlmICh0aGlzLmRpc3BsYXllZENvbHVtbnMgJiYgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgaWYgKHRoaXMubmFtZSAhPT0gJ25vdm8tZGF0YS10YWJsZScpIHtcbiAgICAgICAgdGhpcy5wcmVmZXJlbmNlc0NoYW5nZWQuZW1pdCh7XG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIGRpc3BsYXllZENvbHVtbnMsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm90aWZ5KCdNdXN0IGhhdmUgW25hbWVdIHNldCBvbiBkYXRhLXRhYmxlIHRvIHVzZSBwcmVmZXJlbmNlcyEnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fZGlzYWJsZWRDb2x1bW5zID0gZGlzcGxheWVkQ29sdW1ucztcbiAgICB0aGlzLmNvbmZpZ3VyZUxhc3REaXNwbGF5ZWRDb2x1bW4oKTtcbiAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkaXNwbGF5ZWRDb2x1bW5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWRDb2x1bW5zO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkQ29sdW1uczogc3RyaW5nW107XG5cbiAgQElucHV0KCkgcGFnaW5hdGlvbk9wdGlvbnM6IElEYXRhVGFibGVQYWdpbmF0aW9uT3B0aW9ucztcbiAgQElucHV0KCkgc2VhcmNoT3B0aW9uczogSURhdGFUYWJsZVNlYXJjaE9wdGlvbnM7XG4gIEBJbnB1dCgpIGRlZmF1bHRTb3J0OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfTtcbiAgQElucHV0KCkgbmFtZSA9ICdub3ZvLWRhdGEtdGFibGUnO1xuICBASW5wdXQoKSBhbGxvd011bHRpcGxlRmlsdGVycyA9IGZhbHNlO1xuICBASW5wdXQoKSByb3dJZGVudGlmaWVyID0gJ2lkJztcbiAgQElucHV0KCkgYWN0aXZlUm93SWRlbnRpZmllciA9ICcnO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQElucHV0KCkgdHJhY2tCeUZuID0gKGluZGV4LCBpdGVtKSA9PiBpdGVtLmlkO1xuICBASW5wdXQoKSB0ZW1wbGF0ZXM6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8YW55PiB9ID0ge307XG4gIEBJbnB1dCgpIGZpeGVkSGVhZGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBhZ2luYXRvckRhdGFGZWF0dXJlSWQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgZGF0YVRhYmxlU2VydmljZShzZXJ2aWNlOiBJRGF0YVRhYmxlU2VydmljZTxUPikge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIGlmICghc2VydmljZSkge1xuICAgICAgc2VydmljZSA9IG5ldyBTdGF0aWNEYXRhVGFibGVTZXJ2aWNlKFtdKTtcbiAgICB9XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IERhdGFUYWJsZVNvdXJjZTxUPihzZXJ2aWNlLCB0aGlzLnN0YXRlLCB0aGlzLnJlZik7XG4gICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHJvd3Mocm93czogVFtdKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgY29uc3Qgc2VydmljZSA9IG5ldyBTdGF0aWNEYXRhVGFibGVTZXJ2aWNlKHJvd3MpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBEYXRhVGFibGVTb3VyY2U8VD4oc2VydmljZSwgdGhpcy5zdGF0ZSwgdGhpcy5yZWYpO1xuICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBvdXRzaWRlRmlsdGVyKG91dHNpZGVGaWx0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+KSB7XG4gICAgLy8gVW5zdWJzY3JpYmVcbiAgICBpZiAodGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm91dHNpZGVGaWx0ZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKG91dHNpZGVGaWx0ZXIpIHtcbiAgICAgIC8vIFJlLXN1YnNjcmliZVxuICAgICAgdGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uID0gb3V0c2lkZUZpbHRlci5zdWJzY3JpYmUoKGZpbHRlcjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUub3V0c2lkZUZpbHRlciA9IGZpbHRlcjtcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBnbG9iYWxTZWFyY2g6IHRoaXMuc3RhdGUuZ2xvYmFsU2VhcmNoLCBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSk7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHJlZnJlc2hTdWJqZWN0KHJlZnJlc2hTdWJqZWN0OiBFdmVudEVtaXR0ZXI8YW55Pikge1xuICAgIC8vIFVuc3Vic2NyaWJlXG4gICAgaWYgKHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmIChyZWZyZXNoU3ViamVjdCkge1xuICAgICAgLy8gUmUtc3Vic2NyaWJlXG4gICAgICB0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24gPSByZWZyZXNoU3ViamVjdC5zdWJzY3JpYmUoKGZpbHRlcjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUuaXNGb3JjZVJlZnJlc2ggPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZXMubmV4dCh7IGdsb2JhbFNlYXJjaDogdGhpcy5zdGF0ZS5nbG9iYWxTZWFyY2gsIGZpbHRlcjogdGhpcy5zdGF0ZS5maWx0ZXIsIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCB9KTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgY29sdW1ucyhjb2x1bW5zOiBJRGF0YVRhYmxlQ29sdW1uPFQ+W10pIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gY29sdW1ucztcbiAgICB0aGlzLmNvbmZpZ3VyZUNvbHVtbnMoKTtcbiAgICB0aGlzLnBlcmZvcm1JbnRlcmFjdGlvbnMoJ2luaXQnKTtcbiAgfVxuICBnZXQgY29sdW1ucygpOiBJRGF0YVRhYmxlQ29sdW1uPFQ+W10ge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGN1c3RvbUZpbHRlcih2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fY3VzdG9tRmlsdGVyID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBjdXN0b21GaWx0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUZpbHRlcjtcbiAgfVxuICBwcml2YXRlIF9jdXN0b21GaWx0ZXI6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGhhc0V4YW5kZWRSb3dzKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oYXNFeGFuZGVkUm93cyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgaGFzRXhhbmRlZFJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0V4YW5kZWRSb3dzO1xuICB9XG4gIHByaXZhdGUgX2hhc0V4YW5kZWRSb3dzOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmb3JjZVNob3dIZWFkZXIodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2ZvcmNlU2hvd0hlYWRlciA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgZm9yY2VTaG93SGVhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JjZVNob3dIZWFkZXI7XG4gIH1cbiAgcHJpdmF0ZSBfZm9yY2VTaG93SGVhZGVyOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBoaWRlR2xvYmFsU2VhcmNoKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWRlR2xvYmFsU2VhcmNoID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICAgIHRoaXMuZ2xvYmFsU2VhcmNoSGlkZGVuQ2xhc3NUb2dnbGUgPSB0aGlzLl9oaWRlR2xvYmFsU2VhcmNoO1xuICB9XG4gIGdldCBoaWRlR2xvYmFsU2VhcmNoKCkge1xuICAgIHJldHVybiB0aGlzLl9oaWRlR2xvYmFsU2VhcmNoO1xuICB9XG4gIHByaXZhdGUgX2hpZGVHbG9iYWxTZWFyY2g6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBwcmVmZXJlbmNlc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlUHJlZmVyZW5jZXM+ID0gbmV3IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlUHJlZmVyZW5jZXM+KCk7XG5cbiAgcHVibGljIGRhdGFTb3VyY2U6IERhdGFUYWJsZVNvdXJjZTxUPjtcbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgY29sdW1uVG9UZW1wbGF0ZTogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxhbnk+IH0gPSB7fTtcbiAgcHVibGljIGNvbHVtbnNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNlbGVjdGlvbjogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG4gIHB1YmxpYyBzY3JvbGxMZWZ0OiBudW1iZXIgPSAwO1xuICBwdWJsaWMgZXhwYW5kYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgb3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHJlZnJlc2hTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSByZXNldFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHBhZ2luYXRpb25TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBzb3J0RmlsdGVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2NvbHVtbnM6IElEYXRhVGFibGVDb2x1bW48VD5bXTtcbiAgcHJpdmF0ZSBzY3JvbGxMaXN0ZW5lckhhbmRsZXI6IGFueTtcbiAgcHJpdmF0ZSBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZW1wdHknKVxuICBnZXQgZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZSAmJiB0aGlzLmRhdGFTb3VyY2UudG90YWxseUVtcHR5O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sb2FkaW5nJylcbiAgZ2V0IGxvYWRpbmdDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nIHx8ICh0aGlzLmRhdGFTb3VyY2UgJiYgdGhpcy5kYXRhU291cmNlLmxvYWRpbmcpO1xuICB9XG5cbiAgQElucHV0KCkgbGlzdEludGVyYWN0aW9uczogTGlzdEludGVyYWN0aW9uRGljdGlvbmFyeTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBzdGF0ZTogRGF0YVRhYmxlU3RhdGU8VD4pIHtcbiAgICB0aGlzLnNjcm9sbExpc3RlbmVySGFuZGxlciA9IHRoaXMuc2Nyb2xsTGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNvcnRGaWx0ZXJTdWJzY3JpcHRpb24gPSB0aGlzLnN0YXRlLnNvcnRGaWx0ZXJTb3VyY2Uuc3Vic2NyaWJlKFxuICAgICAgKGV2ZW50OiB7IHNvcnQ6IElEYXRhVGFibGVTb3J0OyBmaWx0ZXI6IElEYXRhVGFibGVGaWx0ZXIgfCBJRGF0YVRhYmxlRmlsdGVyW107IGdsb2JhbFNlYXJjaDogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgaWYgKHRoaXMubmFtZSAhPT0gJ25vdm8tZGF0YS10YWJsZScpIHtcbiAgICAgICAgICB0aGlzLnByZWZlcmVuY2VzQ2hhbmdlZC5lbWl0KHsgbmFtZTogdGhpcy5uYW1lLCBzb3J0OiBldmVudC5zb3J0LCBmaWx0ZXI6IGV2ZW50LmZpbHRlciwgZ2xvYmFsU2VhcmNoOiBldmVudC5nbG9iYWxTZWFyY2ggfSk7XG4gICAgICAgICAgdGhpcy5wZXJmb3JtSW50ZXJhY3Rpb25zKCdjaGFuZ2UnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub3RpZnkoJ011c3QgaGF2ZSBbbmFtZV0gc2V0IG9uIGRhdGEtdGFibGUgdG8gdXNlIHByZWZlcmVuY2VzIScpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICk7XG4gICAgdGhpcy5wYWdpbmF0aW9uU3Vic2NyaXB0aW9uID0gdGhpcy5zdGF0ZS5wYWdpbmF0aW9uU291cmNlLnN1YnNjcmliZSgoZXZlbnQ6IHsgaXNQYWdlU2l6ZUNoYW5nZTogYm9vbGVhbjsgcGFnZVNpemU6IG51bWJlciB9KSA9PiB7XG4gICAgICBpZiAodGhpcy5uYW1lICE9PSAnbm92by1kYXRhLXRhYmxlJykge1xuICAgICAgICBpZiAoZXZlbnQuaXNQYWdlU2l6ZUNoYW5nZSkge1xuICAgICAgICAgIHRoaXMucHJlZmVyZW5jZXNDaGFuZ2VkLmVtaXQoeyBuYW1lOiB0aGlzLm5hbWUsIHBhZ2VTaXplOiBldmVudC5wYWdlU2l6ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm90aWZ5KCdNdXN0IGhhdmUgW25hbWVdIHNldCBvbiBkYXRhLXRhYmxlIHRvIHVzZSBwcmVmZXJlbmNlcyEnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnJlc2V0U3Vic2NyaXB0aW9uID0gdGhpcy5zdGF0ZS5yZXNldFNvdXJjZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbW9kaWZ5Q2VsbEhlYWRlck11bHRpU2VsZWN0RmlsdGVyT3B0aW9ucyhjb2x1bW46IHN0cmluZywgbmV3T3B0aW9uczogeyB2YWx1ZTogYW55OyBsYWJlbDogc3RyaW5nIH1bXSk6IHZvaWQge1xuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuY2VsbEhlYWRlcnMuZmluZCgoY2VsbEhlYWRlcikgPT4gY2VsbEhlYWRlci5pZCA9PT0gY29sdW1uKTtcbiAgICBpZiAoaGVhZGVyICYmIGhlYWRlci5jb25maWcgJiYgaGVhZGVyLmNvbmZpZy5maWx0ZXJDb25maWcgJiYgaGVhZGVyLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9ucykge1xuICAgICAgY29uc3QgZmlsdGVyT3B0aW9uczogYW55W10gPSBoZWFkZXIuY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zO1xuICAgICAgY29uc3Qgb3B0aW9uc1RvS2VlcCA9IGZpbHRlck9wdGlvbnMuZmlsdGVyKFxuICAgICAgICAob3B0KSA9PlxuICAgICAgICAgIGhlYWRlci5pc1NlbGVjdGVkKG9wdCwgaGVhZGVyLm11bHRpU2VsZWN0ZWRPcHRpb25zKSAmJlxuICAgICAgICAgICFuZXdPcHRpb25zLmZpbmQoKG5ld09wdCkgPT4gb3B0LnZhbHVlICYmIG5ld09wdC52YWx1ZSAmJiBuZXdPcHQudmFsdWUgPT09IG9wdC52YWx1ZSksXG4gICAgICApO1xuICAgICAgaGVhZGVyLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9ucyA9IFsuLi5vcHRpb25zVG9LZWVwLCAuLi5uZXdPcHRpb25zXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyLmNvbmZpZy5maWx0ZXJDb25maWdbJ29wdGlvbnMnXSA9IG5ld09wdGlvbnM7XG4gICAgfVxuICAgIGhlYWRlci5zZXR1cEZpbHRlck9wdGlvbnMoKTtcbiAgICBoZWFkZXIuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm5vdm9EYXRhVGFibGVDb250YWluZXIpIHtcbiAgICAgICh0aGlzLm5vdm9EYXRhVGFibGVDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50KS5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbExpc3RlbmVySGFuZGxlcik7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZXNldFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5yZXNldFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zb3J0RmlsdGVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnNvcnRGaWx0ZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc3BsYXllZENvbHVtbnMgJiYgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLmxlbmd0aCkge1xuICAgICAgdGhpcy5leHBhbmRhYmxlID0gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLmluY2x1ZGVzKCdleHBhbmQnKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRlbXBsYXRlcyBkZWZpbmVkIGhlcmVcbiAgICB0aGlzLmRlZmF1bHRUZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgLy8gT25seSBvdmVycmlkZSBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3RcbiAgICAgIGlmICghdGhpcy50ZW1wbGF0ZXNbaXRlbS5nZXRUeXBlKCldKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVzW2l0ZW0uZ2V0VHlwZSgpXSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gQ3VzdG9tIHRlbXBsYXRlcyBwYXNzZWQgaW5cbiAgICB0aGlzLmN1c3RvbVRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAvLyBPdmVycmlkZSBhbnl0aGluZyB0aGF0IGlzIGN1c3RvbSBhbmQgaW4gSFRNTFxuICAgICAgdGhpcy50ZW1wbGF0ZXNbaXRlbS5nZXRUeXBlKCldID0gaXRlbS50ZW1wbGF0ZTtcbiAgICB9KTtcbiAgICAvLyBMb2FkIGNvbHVtbnNcbiAgICB0aGlzLmNvbmZpZ3VyZUNvbHVtbnMoKTtcblxuICAgIC8vIFN0YXRlXG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbk9wdGlvbnMgJiYgIXRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZSkge1xuICAgICAgdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbk9wdGlvbnMgJiYgIXRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemUpIHtcbiAgICAgIHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemUgPSA1MDtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbk9wdGlvbnMgJiYgIXRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemVPcHRpb25zKSB7XG4gICAgICB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjUsIDUwLCAxMDBdO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlLnBhZ2UgPSB0aGlzLnBhZ2luYXRpb25PcHRpb25zID8gdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RhdGUucGFnZVNpemUgPSB0aGlzLnBhZ2luYXRpb25PcHRpb25zID8gdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZSA6IHVuZGVmaW5lZDtcblxuICAgIC8vIFNjcm9sbGluZyBpbnNpZGUgdGFibGVcbiAgICAodGhpcy5ub3ZvRGF0YVRhYmxlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxMaXN0ZW5lckhhbmRsZXIpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIG9uU2VhcmNoQ2hhbmdlKHRlcm06IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUuZ2xvYmFsU2VhcmNoID0gdGVybTtcbiAgICB0aGlzLnN0YXRlLnJlc2V0KGZhbHNlLCB0cnVlKTtcbiAgICB0aGlzLnN0YXRlLnVwZGF0ZXMubmV4dCh7IGdsb2JhbFNlYXJjaDogdGVybSwgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlciwgc29ydDogdGhpcy5zdGF0ZS5zb3J0IH0pO1xuICB9XG5cbiAgcHVibGljIHRyYWNrQ29sdW1uc0J5KGluZGV4OiBudW1iZXIsIGl0ZW06IElEYXRhVGFibGVDb2x1bW48VD4pIHtcbiAgICByZXR1cm4gaXRlbS5pZDtcbiAgfVxuXG4gIHB1YmxpYyBpc0Rpc2FibGVkKGNoZWNrOiBhbnksIHJvdzogVCk6IGJvb2xlYW4ge1xuICAgIGlmIChjaGVjay5kaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChjaGVjay5kaXNhYmxlZEZ1bmMpIHtcbiAgICAgIHJldHVybiBjaGVjay5kaXNhYmxlZEZ1bmMocm93KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzRXhwYW5kZWQocm93OiBUKTogYm9vbGVhbiB7XG4gICAgaWYgKCFyb3cpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZXhwYW5kZWRSb3dzLmhhcyhgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgfVxuXG4gIHB1YmxpYyBleHBhbmRSb3cocm93OiBUKTogdm9pZCB7XG4gICAgY29uc3QgZXhwYW5kZWQgPSB0aGlzLmlzRXhwYW5kZWQocm93KTtcblxuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgdGhpcy5zdGF0ZS5leHBhbmRlZFJvd3MuZGVsZXRlKGAke3Jvd1t0aGlzLnJvd0lkZW50aWZpZXJdfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLmV4cGFuZGVkUm93cy5hZGQoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCk7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUub25FeHBhbmRDaGFuZ2UoKChyb3cgYXMgdW5rbm93bikgYXMgeyBpZDogbnVtYmVyIH0pLmlkKTtcbiAgfVxuXG4gIHB1YmxpYyBleHBhbmRSb3dzKGV4cGFuZDogYm9vbGVhbik6IHZvaWQge1xuICAgICh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSkuZm9yRWFjaCgocm93OiBUKSA9PiB7XG4gICAgICBpZiAoIWV4cGFuZCkge1xuICAgICAgICB0aGlzLnN0YXRlLmV4cGFuZGVkUm93cy5kZWxldGUoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlLmV4cGFuZGVkUm93cy5hZGQoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zdGF0ZS5vbkV4cGFuZENoYW5nZSgpO1xuICB9XG5cbiAgcHVibGljIGFsbEN1cnJlbnRSb3dzRXhwYW5kZWQoKTogYm9vbGVhbiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAodGhpcy5kYXRhU291cmNlLmRhdGEgfHwgW10pLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXRoaXMuaXNFeHBhbmRlZCgodGhpcy5kYXRhU291cmNlLmRhdGEgfHwgW10pW2ldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHVibGljIGlzU2VsZWN0ZWQocm93OiBUKTogYm9vbGVhbiB7XG4gICAgaWYgKCFyb3cpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLmhhcyhgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RSb3cocm93OiBUKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQocm93KTtcblxuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MuZGVsZXRlKGAke3Jvd1t0aGlzLnJvd0lkZW50aWZpZXJdfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5zZXQoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCwgcm93KTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5vblNlbGVjdGlvbkNoYW5nZSgpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdFJvd3Moc2VsZWN0ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAodGhpcy5kYXRhU291cmNlLmRhdGEgfHwgW10pLmZvckVhY2goKHJvdzogVCkgPT4ge1xuICAgICAgaWYgKCFzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5kZWxldGUoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5zZXQoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCwgcm93KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlLm9uU2VsZWN0aW9uQ2hhbmdlKCk7XG4gIH1cblxuICBwdWJsaWMgYWxsQ3VycmVudFJvd3NTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5pc1NlbGVjdGVkKCh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSlbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyKFxuICAgIGlkOiBzdHJpbmcsXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIHZhbHVlOiBhbnksXG4gICAgdHJhbnNmb3JtOiBGdW5jdGlvbixcbiAgICBhbGxvd011bHRpcGxlRmlsdGVyczogYm9vbGVhbiA9IGZhbHNlLFxuICAgIHNlbGVjdGVkT3B0aW9uPzogT2JqZWN0LFxuICAgICk6IHZvaWQge1xuICAgIHRoaXMuc29ydEZpbHRlckRpcmVjdGl2ZS5maWx0ZXIoaWQsIHR5cGUsIHZhbHVlLCB0cmFuc2Zvcm0sIGFsbG93TXVsdGlwbGVGaWx0ZXJzLCBzZWxlY3RlZE9wdGlvbik7XG4gIH1cblxuICBwdWJsaWMgc29ydChpZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCB0cmFuc2Zvcm06IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5zb3J0RmlsdGVyRGlyZWN0aXZlLnNvcnQoaWQsIHZhbHVlLCB0cmFuc2Zvcm0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25maWd1cmVMYXN0RGlzcGxheWVkQ29sdW1uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbHVtbnMgJiYgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zICYmIDAgIT09IHRoaXMuY29sdW1ucy5sZW5ndGggJiYgMCAhPT0gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLmxlbmd0aCkge1xuICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPikgPT4ge1xuICAgICAgICBpZiAoY29sdW1uLmluaXRpYWxSZXNpemFibGUpIHtcbiAgICAgICAgICBjb2x1bW4ucmVzaXphYmxlID0gY29sdW1uLmluaXRpYWxSZXNpemFibGUucmVzaXphYmxlO1xuICAgICAgICAgIGNvbHVtbi53aWR0aCA9IGNvbHVtbi5pbml0aWFsUmVzaXphYmxlLndpZHRoO1xuICAgICAgICAgIGNvbHVtbi5pbml0aWFsUmVzaXphYmxlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlc2l6YWJsZUNvbHVtbnM6IHN0cmluZ1tdID0gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLmZpbHRlcigobmFtZTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgdGhpcy5jb2x1bW5zLmZpbmRJbmRleCgoY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY29sdW1uLnJlc2l6YWJsZSAmJiBjb2x1bW4uaWQgPT09IG5hbWU7XG4gICAgICAgICAgfSkgIT09IC0xXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIGlmIChyZXNpemFibGVDb2x1bW5zICYmIHJlc2l6YWJsZUNvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBsYXN0UmVzaXphYmxlQ29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+ID0gdGhpcy5jb2x1bW5zLmZpbmQoKGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPikgPT4ge1xuICAgICAgICAgIHJldHVybiBjb2x1bW4uaWQgPT09IHJlc2l6YWJsZUNvbHVtbnNbcmVzaXphYmxlQ29sdW1ucy5sZW5ndGggLSAxXTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxhc3RSZXNpemFibGVDb2x1bW4uaW5pdGlhbFJlc2l6YWJsZSA9IHtcbiAgICAgICAgICByZXNpemFibGU6IGxhc3RSZXNpemFibGVDb2x1bW4ucmVzaXphYmxlLFxuICAgICAgICAgIHdpZHRoOiBsYXN0UmVzaXphYmxlQ29sdW1uLndpZHRoLFxuICAgICAgICB9O1xuICAgICAgICBsYXN0UmVzaXphYmxlQ29sdW1uLndpZHRoID0gdW5kZWZpbmVkO1xuICAgICAgICBsYXN0UmVzaXphYmxlQ29sdW1uLnJlc2l6YWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29uZmlndXJlQ29sdW1ucygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2x1bW5zICYmIHRoaXMuY29sdW1ucy5sZW5ndGggIT09IDAgJiYgT2JqZWN0LmtleXModGhpcy50ZW1wbGF0ZXMpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgLy8gRmlndXJlIHRoZSBjb2x1bW4gdGVtcGxhdGVzXG4gICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KSA9PiB7XG4gICAgICAgIC8vIEZpZ3VyZSB0aGUgdGVtcGxhdGVcbiAgICAgICAgbGV0IHRlbXBsYXRlTmFtZTogc3RyaW5nO1xuICAgICAgICBpZiAoY29sdW1uLnRlbXBsYXRlKSB7XG4gICAgICAgICAgLy8gUGFzcyBpdCBpbiBhcyB0ZW1wbGF0ZVxuICAgICAgICAgIHRlbXBsYXRlTmFtZSA9IGNvbHVtbi50ZW1wbGF0ZTtcbiAgICAgICAgfSBlbHNlIGlmICghIXRoaXMudGVtcGxhdGVzW2NvbHVtbi5pZF0pIHtcbiAgICAgICAgICAvLyBDdXN0b20gdGVtcGxhdGUgZm9yIHRoZSBjb2x1bW4gaWRcbiAgICAgICAgICB0ZW1wbGF0ZU5hbWUgPSBjb2x1bW4uaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRGVmYXVsdCB0byB0aGUgZGVmYXVsQ2VsbFRlbXBsYXRlXG4gICAgICAgICAgaWYgKGNvbHVtbi50eXBlID09PSAnYWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKGNvbHVtbi5hY3Rpb24gJiYgY29sdW1uLmFjdGlvbi5vcHRpb25zKSB7XG4gICAgICAgICAgICAgIGlmICghY29sdW1uLmFjdGlvbi5pY29uKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uLmFjdGlvbi5pY29uID0gJ2NvbGxhcHNlJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0ZW1wbGF0ZU5hbWUgPSAnZHJvcGRvd25DZWxsVGVtcGxhdGUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGVtcGxhdGVOYW1lID0gJ2J1dHRvbkNlbGxUZW1wbGF0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW4udHlwZSA9PT0gJ2xpbms6dGVsJyB8fCBjb2x1bW4udHlwZSA9PT0gJ2xpbms6bWFpbHRvJykge1xuICAgICAgICAgICAgICB0ZW1wbGF0ZU5hbWUgPSBgJHtjb2x1bW4udHlwZS5zcGxpdCgnOicpWzFdfUNlbGxUZW1wbGF0ZWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0ZW1wbGF0ZU5hbWUgPSBgJHtjb2x1bW4udHlwZX1DZWxsVGVtcGxhdGVgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbHVtblRvVGVtcGxhdGVbY29sdW1uLmlkXSA9IHRoaXMudGVtcGxhdGVzW3RlbXBsYXRlTmFtZV07XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29uZmlndXJlTGFzdERpc3BsYXllZENvbHVtbigpO1xuICAgICAgdGhpcy5jb2x1bW5zTG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNjcm9sbExpc3RlbmVyKCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldDogRWxlbWVudCA9IHRoaXMubm92b0RhdGFUYWJsZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG4gICAgY29uc3QgbGVmdDogbnVtYmVyID0gdGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgaWYgKGxlZnQgIT09IHRoaXMuc2Nyb2xsTGVmdCkge1xuICAgICAgdGhpcy5zY3JvbGxMZWZ0ID0gdGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgfVxuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcGVyZm9ybUludGVyYWN0aW9ucyhldmVudDogTGlzdEludGVyYWN0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0SW50ZXJhY3Rpb25zKSB7XG4gICAgICBmb3IgKGNvbnN0IGNvbHVtbiBvZiB0aGlzLmNvbHVtbnMpIHtcbiAgICAgICAgY29uc3QgYWxsTGlzdENvbHVtbkludGVyYWN0aW9ucyA9IHRoaXMubGlzdEludGVyYWN0aW9uc1tjb2x1bW4uaWRdO1xuICAgICAgICBjb25zdCBsaXN0Q29sdW1uSW50ZXJhY3Rpb24gPSBhbGxMaXN0Q29sdW1uSW50ZXJhY3Rpb25zICYmIGFsbExpc3RDb2x1bW5JbnRlcmFjdGlvbnMuZmluZCgoaW50KSA9PiBpbnQuZXZlbnQuaW5jbHVkZXMoZXZlbnQpKTtcbiAgICAgICAgaWYgKGxpc3RDb2x1bW5JbnRlcmFjdGlvbikge1xuICAgICAgICAgIGxpc3RDb2x1bW5JbnRlcmFjdGlvbi5zY3JpcHQodGhpcywgY29sdW1uLmlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19