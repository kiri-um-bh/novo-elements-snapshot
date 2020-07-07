/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/data-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewChild, EventEmitter, ChangeDetectorRef, ContentChildren, QueryList, ViewChildren, ElementRef, Output, } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { animate, state as animState, style, transition, trigger } from '@angular/animations';
import { DataTableSource } from './data-table.source';
import { NovoLabelService } from '../../services/novo-label-service';
import { DataTableState } from './state/data-table-state.service';
import { NovoTemplate } from '../common/novo-template/novo-template.directive';
import { notify } from '../../utils/notifier/notifier.util';
import { StaticDataTableService } from './services/static-data-table.service';
/**
 * @template T
 */
var NovoDataTable = /** @class */ (function () {
    function NovoDataTable(labels, ref, state) {
        var _this = this;
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
        function (index, item) { return item.id; });
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
        function (event) {
            if (_this.name !== 'novo-data-table') {
                _this.preferencesChanged.emit({ name: _this.name, sort: event.sort, filter: event.filter, globalSearch: event.globalSearch });
            }
            else {
                notify('Must have [name] set on data-table to use preferences!');
            }
        }));
        this.paginationSubscription = this.state.paginationSource.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this.name !== 'novo-data-table') {
                if (event.isPageSizeChange) {
                    _this.preferencesChanged.emit({ name: _this.name, pageSize: event.pageSize });
                }
            }
            else {
                notify('Must have [name] set on data-table to use preferences!');
            }
        }));
        this.resetSubscription = this.state.resetSource.subscribe((/**
         * @return {?}
         */
        function () {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.ref.detectChanges();
            }), 300);
        }));
    }
    Object.defineProperty(NovoDataTable.prototype, "displayedColumns", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledColumns;
        },
        set: /**
         * @param {?} displayedColumns
         * @return {?}
         */
        function (displayedColumns) {
            var _this = this;
            if (this.displayedColumns && this.displayedColumns.length !== 0) {
                if (this.name !== 'novo-data-table') {
                    this.preferencesChanged.emit({
                        name: this.name,
                        displayedColumns: displayedColumns,
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
                function () {
                    _this.scrollListener();
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoDataTable.prototype, "dataTableService", {
        set: /**
         * @param {?} service
         * @return {?}
         */
        function (service) {
            this.loading = false;
            if (!service) {
                service = new StaticDataTableService([]);
            }
            this.dataSource = new DataTableSource(service, this.state, this.ref);
            this.ref.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoDataTable.prototype, "rows", {
        set: /**
         * @param {?} rows
         * @return {?}
         */
        function (rows) {
            this.loading = false;
            /** @type {?} */
            var service = new StaticDataTableService(rows);
            this.dataSource = new DataTableSource(service, this.state, this.ref);
            this.ref.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoDataTable.prototype, "outsideFilter", {
        set: /**
         * @param {?} outsideFilter
         * @return {?}
         */
        function (outsideFilter) {
            var _this = this;
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
                function (filter) {
                    _this.state.outsideFilter = filter;
                    _this.state.updates.next({ globalSearch: _this.state.globalSearch, filter: _this.state.filter, sort: _this.state.sort });
                    _this.ref.markForCheck();
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoDataTable.prototype, "refreshSubject", {
        set: /**
         * @param {?} refreshSubject
         * @return {?}
         */
        function (refreshSubject) {
            var _this = this;
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
                function (filter) {
                    _this.state.isForceRefresh = true;
                    _this.state.updates.next({ globalSearch: _this.state.globalSearch, filter: _this.state.filter, sort: _this.state.sort });
                    _this.ref.markForCheck();
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoDataTable.prototype, "columns", {
        get: /**
         * @return {?}
         */
        function () {
            return this._columns;
        },
        set: /**
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            this._columns = columns;
            this.configureColumns();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoDataTable.prototype, "customFilter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._customFilter;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._customFilter = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoDataTable.prototype, "hasExandedRows", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasExandedRows;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._hasExandedRows = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoDataTable.prototype, "forceShowHeader", {
        get: /**
         * @return {?}
         */
        function () {
            return this._forceShowHeader;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._forceShowHeader = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoDataTable.prototype, "hideGlobalSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hideGlobalSearch;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._hideGlobalSearch = coerceBooleanProperty(v);
            this.globalSearchHiddenClassToggle = this._hideGlobalSearch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoDataTable.prototype, "empty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dataSource && this.dataSource.totallyEmpty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoDataTable.prototype, "loadingClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.loading || (this.dataSource && this.dataSource.loading);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoDataTable.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    NovoDataTable.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.displayedColumns && this.displayedColumns.length) {
            this.expandable = this.displayedColumns.includes('expand');
        }
        // Default templates defined here
        this.defaultTemplates.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            // Only override if it doesn't already exist
            if (!_this.templates[item.getType()]) {
                _this.templates[item.getType()] = item.template;
            }
        }));
        // Custom templates passed in
        this.customTemplates.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            // Override anything that is custom and in HTML
            _this.templates[item.getType()] = item.template;
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
    };
    /**
     * @param {?} term
     * @return {?}
     */
    NovoDataTable.prototype.onSearchChange = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        this.state.globalSearch = term;
        this.state.reset(false, true);
        this.state.updates.next({ globalSearch: term, filter: this.state.filter, sort: this.state.sort });
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    NovoDataTable.prototype.trackColumnsBy = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.id;
    };
    /**
     * @param {?} check
     * @param {?} row
     * @return {?}
     */
    NovoDataTable.prototype.isDisabled = /**
     * @param {?} check
     * @param {?} row
     * @return {?}
     */
    function (check, row) {
        if (check.disabled === true) {
            return true;
        }
        if (check.disabledFunc) {
            return check.disabledFunc(row);
        }
        return false;
    };
    /**
     * @param {?} row
     * @return {?}
     */
    NovoDataTable.prototype.isExpanded = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        if (!row) {
            return false;
        }
        return this.state.expandedRows.has("" + row[this.rowIdentifier]);
    };
    /**
     * @param {?} row
     * @return {?}
     */
    NovoDataTable.prototype.expandRow = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        /** @type {?} */
        var expanded = this.isExpanded(row);
        if (expanded) {
            this.state.expandedRows.delete("" + row[this.rowIdentifier]);
        }
        else {
            this.state.expandedRows.add("" + row[this.rowIdentifier]);
        }
        this.state.onExpandChange(((/** @type {?} */ (((/** @type {?} */ (row)))))).id);
    };
    /**
     * @param {?} expand
     * @return {?}
     */
    NovoDataTable.prototype.expandRows = /**
     * @param {?} expand
     * @return {?}
     */
    function (expand) {
        var _this = this;
        (this.dataSource.data || []).forEach((/**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            if (!expand) {
                _this.state.expandedRows.delete("" + row[_this.rowIdentifier]);
            }
            else {
                _this.state.expandedRows.add("" + row[_this.rowIdentifier]);
            }
        }));
        this.state.onExpandChange();
    };
    /**
     * @return {?}
     */
    NovoDataTable.prototype.allCurrentRowsExpanded = /**
     * @return {?}
     */
    function () {
        for (var i = 0; i < (this.dataSource.data || []).length; i++) {
            if (!this.isExpanded((this.dataSource.data || [])[i])) {
                return false;
            }
        }
        return true;
    };
    /**
     * @param {?} row
     * @return {?}
     */
    NovoDataTable.prototype.isSelected = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        if (!row) {
            return false;
        }
        return this.state.selectedRows.has("" + row[this.rowIdentifier]);
    };
    /**
     * @param {?} row
     * @return {?}
     */
    NovoDataTable.prototype.selectRow = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        /** @type {?} */
        var selected = this.isSelected(row);
        if (selected) {
            this.state.selectedRows.delete("" + row[this.rowIdentifier]);
        }
        else {
            this.state.selectedRows.set("" + row[this.rowIdentifier], row);
        }
        this.state.onSelectionChange();
    };
    /**
     * @param {?} selected
     * @return {?}
     */
    NovoDataTable.prototype.selectRows = /**
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        var _this = this;
        (this.dataSource.data || []).forEach((/**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            if (!selected) {
                _this.state.selectedRows.delete("" + row[_this.rowIdentifier]);
            }
            else {
                _this.state.selectedRows.set("" + row[_this.rowIdentifier], row);
            }
        }));
        this.state.onSelectionChange();
    };
    /**
     * @return {?}
     */
    NovoDataTable.prototype.allCurrentRowsSelected = /**
     * @return {?}
     */
    function () {
        for (var i = 0; i < (this.dataSource.data || []).length; i++) {
            if (!this.isSelected((this.dataSource.data || [])[i])) {
                return false;
            }
        }
        return true;
    };
    /**
     * @private
     * @return {?}
     */
    NovoDataTable.prototype.configureLastDisplayedColumn = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.columns && this.displayedColumns && 0 !== this.columns.length && 0 !== this.displayedColumns.length) {
            this.columns.forEach((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
                if (column.initialResizable) {
                    column.resizable = column.initialResizable.resizable;
                    column.width = column.initialResizable.width;
                    column.initialResizable = undefined;
                }
            }));
            /** @type {?} */
            var resizableColumns_1 = this.displayedColumns.filter((/**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                return (_this.columns.findIndex((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    return column.resizable && column.id === name;
                })) !== -1);
            }));
            if (resizableColumns_1 && resizableColumns_1.length > 0) {
                /** @type {?} */
                var lastResizableColumn = this.columns.find((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    return column.id === resizableColumns_1[resizableColumns_1.length - 1];
                }));
                lastResizableColumn.initialResizable = {
                    resizable: lastResizableColumn.resizable,
                    width: lastResizableColumn.width,
                };
                lastResizableColumn.width = undefined;
                lastResizableColumn.resizable = false;
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NovoDataTable.prototype.configureColumns = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.columns && this.columns.length !== 0 && Object.keys(this.templates).length !== 0) {
            // Figure the column templates
            this.columns.forEach((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
                // Figure the template
                /** @type {?} */
                var templateName;
                if (column.template) {
                    // Pass it in as template
                    templateName = column.template;
                }
                else if (!!_this.templates[column.id]) {
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
                            templateName = column.type.split(':')[1] + "CellTemplate";
                        }
                        else {
                            templateName = column.type + "CellTemplate";
                        }
                    }
                }
                _this.columnToTemplate[column.id] = _this.templates[templateName];
            }));
            this.configureLastDisplayedColumn();
            this.columnsLoaded = true;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NovoDataTable.prototype.scrollListener = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var target = (/** @type {?} */ (this.novoDataTableContainer.nativeElement));
        /** @type {?} */
        var left = target.scrollLeft;
        if (left !== this.scrollLeft) {
            this.scrollLeft = target.scrollLeft;
        }
        this.ref.markForCheck();
    };
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
                    template: "\n    <header\n      *ngIf=\"(!(dataSource?.totallyEmpty && !state.userFiltered) && !loading) || forceShowHeader\"\n      [class.empty]=\"hideGlobalSearch && !paginationOptions && !templates['customActions']\"\n    >\n      <ng-container *ngTemplateOutlet=\"templates['customHeader']\"></ng-container>\n      <novo-search\n        alwaysOpen=\"true\"\n        (searchChanged)=\"onSearchChange($event)\"\n        [(ngModel)]=\"state.globalSearch\"\n        *ngIf=\"!hideGlobalSearch\"\n        [placeholder]=\"searchOptions?.placeholder\"\n        [hint]=\"searchOptions?.tooltip\"\n      >\n      </novo-search>\n      <novo-data-table-pagination\n        *ngIf=\"paginationOptions\"\n        [theme]=\"paginationOptions.theme\"\n        [length]=\"dataSource?.currentTotal\"\n        [page]=\"paginationOptions.page\"\n        [pageSize]=\"paginationOptions.pageSize\"\n        [pageSizeOptions]=\"paginationOptions.pageSizeOptions\"\n        [dataFeatureId]=\"paginatorDataFeatureId\"\n      >\n      </novo-data-table-pagination>\n      <div class=\"novo-data-table-actions\" *ngIf=\"templates['customActions']\">\n        <ng-container *ngTemplateOutlet=\"templates['customActions']\"></ng-container>\n      </div>\n    </header>\n    <div class=\"novo-data-table-loading-mask\" *ngIf=\"dataSource?.loading || loading\" data-automation-id=\"novo-data-table-loading\">\n      <novo-loading></novo-loading>\n    </div>\n    <div class=\"novo-data-table-outside-container\" [ngClass]=\"{ 'novo-data-table-outside-container-fixed': fixedHeader }\">\n      <div class=\"novo-data-table-custom-filter\" *ngIf=\"customFilter\">\n        <ng-container *ngTemplateOutlet=\"templates['customFilter']\"></ng-container>\n      </div>\n      <div\n        #novoDataTableContainer\n        class=\"novo-data-table-container\"\n        [ngClass]=\"{ 'novo-data-table-container-fixed': fixedHeader }\"\n        [class.empty-user-filtered]=\"dataSource?.currentlyEmpty && state.userFiltered\"\n        [class.empty]=\"dataSource?.totallyEmpty && !dataSource?.loading && !loading && !state.userFiltered && !dataSource.pristine\"\n      >\n        <cdk-table\n          *ngIf=\"columns?.length > 0 && columnsLoaded && dataSource\"\n          [dataSource]=\"dataSource\"\n          [trackBy]=\"trackByFn\"\n          novoDataTableSortFilter\n          [class.expandable]=\"expandable\"\n          [class.empty]=\"dataSource?.currentlyEmpty && state.userFiltered\"\n          [hidden]=\"dataSource?.totallyEmpty && !state.userFiltered\"\n        >\n          <ng-container cdkColumnDef=\"selection\">\n            <novo-data-table-checkbox-header-cell *cdkHeaderCellDef></novo-data-table-checkbox-header-cell>\n            <novo-data-table-checkbox-cell *cdkCellDef=\"let row; let i = index\" [row]=\"row\"></novo-data-table-checkbox-cell>\n          </ng-container>\n          <ng-container cdkColumnDef=\"expand\">\n            <novo-data-table-expand-header-cell *cdkHeaderCellDef></novo-data-table-expand-header-cell>\n            <novo-data-table-expand-cell *cdkCellDef=\"let row; let i = index\" [row]=\"row\"></novo-data-table-expand-cell>\n          </ng-container>\n          <ng-container *ngFor=\"let column of columns; trackBy: trackColumnsBy\" [cdkColumnDef]=\"column.id\">\n            <novo-data-table-header-cell\n              *cdkHeaderCellDef\n              [column]=\"column\"\n              [filterTemplate]=\"templates['column-filter-' + column.id]\"\n              [novo-data-table-cell-config]=\"column\"\n              [resized]=\"resized\"\n              [defaultSort]=\"defaultSort\"\n              [allowMultipleFilters]=\"allowMultipleFilters\"\n              [class.empty]=\"column?.type === 'action' && !column?.label\"\n              [class.button-header-cell]=\"column?.type === 'expand' || (column?.type === 'action' && !column?.action?.options)\"\n              [class.dropdown-header-cell]=\"column?.type === 'action' && column?.action?.options\"\n              [class.fixed-header]=\"fixedHeader\"\n            ></novo-data-table-header-cell>\n            <novo-data-table-cell\n              *cdkCellDef=\"let row\"\n              [resized]=\"resized\"\n              [column]=\"column\"\n              [row]=\"row\"\n              [template]=\"columnToTemplate[column.id]\"\n              [class.empty]=\"column?.type === 'action' && !column?.label\"\n              [class.button-cell]=\"column?.type === 'expand' || (column?.type === 'action' && !column?.action?.options)\"\n              [class.dropdown-cell]=\"column?.type === 'action' && column?.action?.options\"\n            ></novo-data-table-cell>\n          </ng-container>\n          <novo-data-table-header-row\n            *cdkHeaderRowDef=\"displayedColumns\"\n            [fixedHeader]=\"fixedHeader\"\n            data-automation-id=\"novo-data-table-header-row\"\n          ></novo-data-table-header-row>\n          <novo-data-table-row\n            *cdkRowDef=\"let row; columns: displayedColumns\"\n            [ngClass]=\"{ active: row[rowIdentifier] == activeRowIdentifier }\"\n            [novoDataTableExpand]=\"detailRowTemplate\"\n            [row]=\"row\"\n            [id]=\"name + '-' + row[rowIdentifier]\"\n            [dataAutomationId]=\"row[rowIdentifier]\"\n          ></novo-data-table-row>\n        </cdk-table>\n        <div class=\"novo-data-table-footer\" *ngIf=\"templates['footer']\">\n          <ng-container *ngTemplateOutlet=\"templates['footer']; context: { $implicit: columns, data: dataSource.data }\"></ng-container>\n        </div>\n        <div\n          class=\"novo-data-table-no-results-container\"\n          [style.left.px]=\"scrollLeft\"\n          *ngIf=\"dataSource?.currentlyEmpty && state.userFiltered && !dataSource?.loading && !loading && !dataSource.pristine\"\n        >\n          <div class=\"novo-data-table-empty-message\">\n            <ng-container *ngTemplateOutlet=\"templates['noResultsMessage'] || templates['defaultNoResultsMessage']\"></ng-container>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"novo-data-table-empty-container\"\n        *ngIf=\"dataSource?.totallyEmpty && !dataSource?.loading && !loading && !state.userFiltered && !dataSource.pristine\"\n      >\n        <div class=\"novo-data-table-empty-message\">\n          <ng-container *ngTemplateOutlet=\"templates['emptyMessage'] || templates['defaultNoResultsMessage']\"></ng-container>\n        </div>\n      </div>\n    </div>\n    <!-- DEFAULT CELL TEMPLATE -->\n    <ng-template novoTemplate=\"textCellTemplate\" let-row let-col=\"col\">\n      <span [style.width.px]=\"col?.width\" [style.min-width.px]=\"col?.width\" [style.max-width.px]=\"col?.width\">{{\n        row[col.id] | dataTableInterpolate: col\n      }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"dateCellTemplate\" let-row let-col=\"col\">\n      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableDateRenderer: col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"datetimeCellTemplate\" let-row let-col=\"col\">\n      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableDateTimeRenderer: col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"timeCellTemplate\" let-row let-col=\"col\">\n      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableTimeRenderer: col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"currencyCellTemplate\" let-row let-col=\"col\">\n      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableCurrencyRenderer: col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"bigdecimalCellTemplate\" let-row let-col=\"col\">\n      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableBigDecimalRenderer: col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"numberCellTemplate\" let-row let-col=\"col\">\n      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableNumberRenderer: col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"percentCellTemplate\" let-row let-col=\"col\">\n      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableNumberRenderer: col:true }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"linkCellTemplate\" let-row let-col=\"col\">\n      <a\n        [attr.data-feature-id]=\"col?.attributes?.dataFeatureId\"\n        (click)=\"col.handlers?.click({ originalEvent: $event, row: row })\"\n        [style.width.px]=\"col?.width\"\n        [style.min-width.px]=\"col?.width\"\n        [style.max-width.px]=\"col?.width\"\n        >{{ row[col.id] | dataTableInterpolate: col }}</a\n      >\n    </ng-template>\n    <ng-template novoTemplate=\"telCellTemplate\" let-row let-col=\"col\">\n      <a href=\"tel:{{ row[col.id] | dataTableInterpolate: col }}\" [target]=\"col?.attributes?.target\">{{\n        row[col.id] | dataTableInterpolate: col\n      }}</a>\n    </ng-template>\n    <ng-template novoTemplate=\"mailtoCellTemplate\" let-row let-col=\"col\">\n      <a href=\"mailto:{{ row[col.id] | dataTableInterpolate: col }}\" [target]=\"col?.attributes?.target\">{{\n        row[col.id] | dataTableInterpolate: col\n      }}</a>\n    </ng-template>\n    <ng-template novoTemplate=\"buttonCellTemplate\" let-row let-col=\"col\">\n      <p [tooltip]=\"col?.action?.tooltip\" tooltipPosition=\"right\" [attr.data-feature-id]=\"col?.attributes?.dataFeatureId\">\n        <i\n          class=\"bhi-{{ col?.action?.icon }} data-table-icon\"\n          (click)=\"col.handlers?.click({ originalEvent: $event, row: row })\"\n          [class.disabled]=\"isDisabled(col, row)\"\n        ></i>\n      </p>\n    </ng-template>\n    <ng-template novoTemplate=\"dropdownCellTemplate\" let-row let-col=\"col\">\n      <novo-dropdown parentScrollSelector=\".novo-data-table-container\" containerClass=\"novo-data-table-dropdown\">\n        <button type=\"button\" theme=\"dialogue\" [icon]=\"col.action.icon\" inverse>{{ col.label }}</button>\n        <list>\n          <item\n            *ngFor=\"let option of col?.action?.options\"\n            (action)=\"option.handlers.click({ originalEvent: $event?.originalEvent, row: row })\"\n            [disabled]=\"isDisabled(option, row)\"\n          >\n            <span [attr.data-automation-id]=\"option.label\">{{ option.label }}</span>\n          </item>\n        </list>\n      </novo-dropdown>\n    </ng-template>\n    <ng-template novoTemplate=\"defaultNoResultsMessage\">\n      <h4><i class=\"bhi-search-question\"></i> {{ labels.noMatchingRecordsMessage }}</h4>\n    </ng-template>\n    <ng-template novoTemplate=\"defaultEmptyMessage\">\n      <h4><i class=\"bhi-search-question\"></i> {{ labels.emptyTableMessage }}</h4>\n    </ng-template>\n    <ng-template novoTemplate=\"expandedRow\"> You did not provide an \"expandedRow\" template! </ng-template>\n    <ng-template #detailRowTemplate let-row>\n      <div class=\"novo-data-table-detail-row\" [@expand] style=\"overflow: hidden\">\n        <ng-container *ngTemplateOutlet=\"templates['expandedRow']; context: { $implicit: row }\"></ng-container>\n      </div>\n    </ng-template>\n    <!-- CUSTOM CELLS PASSED IN -->\n    <ng-content></ng-content>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [DataTableState]
                }] }
    ];
    /** @nocollapse */
    NovoDataTable.ctorParameters = function () { return [
        { type: NovoLabelService },
        { type: ChangeDetectorRef },
        { type: DataTableState }
    ]; };
    NovoDataTable.propDecorators = {
        globalSearchHiddenClassToggle: [{ type: HostBinding, args: ['class.global-search-hidden',] }],
        customTemplates: [{ type: ContentChildren, args: [NovoTemplate,] }],
        defaultTemplates: [{ type: ViewChildren, args: [NovoTemplate,] }],
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
        loadingClass: [{ type: HostBinding, args: ['class.loading',] }]
    };
    return NovoDataTable;
}());
export { NovoDataTable };
if (false) {
    /** @type {?} */
    NovoDataTable.prototype.globalSearchHiddenClassToggle;
    /** @type {?} */
    NovoDataTable.prototype.customTemplates;
    /** @type {?} */
    NovoDataTable.prototype.defaultTemplates;
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
    NovoDataTable.prototype.labels;
    /**
     * @type {?}
     * @private
     */
    NovoDataTable.prototype.ref;
    /** @type {?} */
    NovoDataTable.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFFWixpQkFBaUIsRUFFakIsZUFBZSxFQUNmLFNBQVMsRUFDVCxZQUFZLEVBRVosVUFBVSxFQUNWLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssSUFBSSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVU5RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMvRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7QUFFOUU7SUFzWUUsdUJBQW1CLE1BQXdCLEVBQVUsR0FBc0IsRUFBUyxLQUF3QjtRQUE1RyxpQkE2QkM7UUE3QmtCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQTNLakUsa0NBQTZCLEdBQVksS0FBSyxDQUFDO1FBS2hG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TCxLQUFLO3lDQUNMLEtBQUs7bUNBRUwsS0FBSzt1QkFVTCxLQUFLO2dDQVFMLEtBQUs7aUNBZ0JMLEtBQUs7MEJBZ0JMLEtBQUs7K0JBU0wsS0FBSztpQ0FTTCxLQUFLO2tDQVNMLEtBQUs7bUNBU0wsS0FBSztxQ0FVTCxNQUFNO3dCQW1CTixXQUFXLFNBQUMsYUFBYTsrQkFLekIsV0FBVyxTQUFDLGVBQWU7O0lBOFE5QixvQkFBQztDQUFBLEFBL29CRCxJQStvQkM7U0FyYlksYUFBYTs7O0lBQ3hCLHNEQUEwRjs7SUFFMUYsd0NBQXdFOztJQUN4RSx5Q0FBc0U7O0lBQ3RFLCtDQUEyRjs7SUFDM0YsZ0NBQTBFOzs7OztJQTBCMUUseUNBQW1DOztJQUVuQywwQ0FBd0Q7O0lBQ3hELHNDQUFnRDs7SUFDaEQsb0NBQW9EOztJQUNwRCw2QkFBa0M7O0lBQ2xDLDZDQUFzQzs7SUFDdEMsc0NBQThCOztJQUM5Qiw0Q0FBa0M7O0lBRWxDLGtDQUE4Qzs7SUFDOUMsa0NBQTZEOztJQUM3RCxvQ0FBNkI7O0lBQzdCLCtDQUF3Qzs7Ozs7SUFvRXhDLHNDQUErQjs7Ozs7SUFTL0Isd0NBQWlDOzs7OztJQVNqQyx5Q0FBa0M7Ozs7O0lBVWxDLDBDQUEwQzs7SUFFMUMsMkNBQThHOztJQUU5RyxtQ0FBc0M7O0lBQ3RDLGdDQUErQjs7SUFDL0IseUNBQWtFOztJQUNsRSxzQ0FBc0M7O0lBQ3RDLGtDQUEwQzs7SUFDMUMsbUNBQThCOztJQUM5QixtQ0FBbUM7Ozs7O0lBRW5DLGtEQUFnRDs7Ozs7SUFDaEQsNENBQTBDOzs7OztJQUMxQywwQ0FBd0M7Ozs7O0lBQ3hDLCtDQUE2Qzs7Ozs7SUFDN0MsK0NBQTZDOzs7OztJQUM3QyxpQ0FBd0M7Ozs7O0lBQ3hDLDhDQUFtQzs7Ozs7SUFDbkMsb0NBQXFDOztJQVl6QiwrQkFBK0I7Ozs7O0lBQUUsNEJBQThCOztJQUFFLDhCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkRlc3Ryb3ksXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGRyZW4sXG4gIFRlbXBsYXRlUmVmLFxuICBFbGVtZW50UmVmLFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUgYXMgYW5pbVN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQge1xuICBJRGF0YVRhYmxlQ29sdW1uLFxuICBJRGF0YVRhYmxlUGFnaW5hdGlvbk9wdGlvbnMsXG4gIElEYXRhVGFibGVTZWFyY2hPcHRpb25zLFxuICBJRGF0YVRhYmxlU2VydmljZSxcbiAgSURhdGFUYWJsZVByZWZlcmVuY2VzLFxuICBJRGF0YVRhYmxlRmlsdGVyLFxufSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgRGF0YVRhYmxlU291cmNlIH0gZnJvbSAnLi9kYXRhLXRhYmxlLnNvdXJjZSc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZS9kYXRhLXRhYmxlLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b1RlbXBsYXRlIH0gZnJvbSAnLi4vY29tbW9uL25vdm8tdGVtcGxhdGUvbm92by10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG5pbXBvcnQgeyBTdGF0aWNEYXRhVGFibGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zdGF0aWMtZGF0YS10YWJsZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRhLXRhYmxlJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2V4cGFuZCcsIFtcbiAgICAgIGFuaW1TdGF0ZSgndm9pZCcsIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JywgbWluSGVpZ2h0OiAnMCcsIHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pKSxcbiAgICAgIGFuaW1TdGF0ZSgnKicsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIHZpc2liaWxpdHk6ICd2aXNpYmxlJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkIDw9PiAqJywgYW5pbWF0ZSgnNzBtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSknKSksXG4gICAgXSksXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGhlYWRlclxuICAgICAgKm5nSWY9XCIoIShkYXRhU291cmNlPy50b3RhbGx5RW1wdHkgJiYgIXN0YXRlLnVzZXJGaWx0ZXJlZCkgJiYgIWxvYWRpbmcpIHx8IGZvcmNlU2hvd0hlYWRlclwiXG4gICAgICBbY2xhc3MuZW1wdHldPVwiaGlkZUdsb2JhbFNlYXJjaCAmJiAhcGFnaW5hdGlvbk9wdGlvbnMgJiYgIXRlbXBsYXRlc1snY3VzdG9tQWN0aW9ucyddXCJcbiAgICA+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydjdXN0b21IZWFkZXInXVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPG5vdm8tc2VhcmNoXG4gICAgICAgIGFsd2F5c09wZW49XCJ0cnVlXCJcbiAgICAgICAgKHNlYXJjaENoYW5nZWQpPVwib25TZWFyY2hDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwic3RhdGUuZ2xvYmFsU2VhcmNoXCJcbiAgICAgICAgKm5nSWY9XCIhaGlkZUdsb2JhbFNlYXJjaFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJzZWFyY2hPcHRpb25zPy5wbGFjZWhvbGRlclwiXG4gICAgICAgIFtoaW50XT1cInNlYXJjaE9wdGlvbnM/LnRvb2x0aXBcIlxuICAgICAgPlxuICAgICAgPC9ub3ZvLXNlYXJjaD5cbiAgICAgIDxub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvblxuICAgICAgICAqbmdJZj1cInBhZ2luYXRpb25PcHRpb25zXCJcbiAgICAgICAgW3RoZW1lXT1cInBhZ2luYXRpb25PcHRpb25zLnRoZW1lXCJcbiAgICAgICAgW2xlbmd0aF09XCJkYXRhU291cmNlPy5jdXJyZW50VG90YWxcIlxuICAgICAgICBbcGFnZV09XCJwYWdpbmF0aW9uT3B0aW9ucy5wYWdlXCJcbiAgICAgICAgW3BhZ2VTaXplXT1cInBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplXCJcbiAgICAgICAgW3BhZ2VTaXplT3B0aW9uc109XCJwYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZU9wdGlvbnNcIlxuICAgICAgICBbZGF0YUZlYXR1cmVJZF09XCJwYWdpbmF0b3JEYXRhRmVhdHVyZUlkXCJcbiAgICAgID5cbiAgICAgIDwvbm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb24+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWFjdGlvbnNcIiAqbmdJZj1cInRlbXBsYXRlc1snY3VzdG9tQWN0aW9ucyddXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbJ2N1c3RvbUFjdGlvbnMnXVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1sb2FkaW5nLW1hc2tcIiAqbmdJZj1cImRhdGFTb3VyY2U/LmxvYWRpbmcgfHwgbG9hZGluZ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1sb2FkaW5nXCI+XG4gICAgICA8bm92by1sb2FkaW5nPjwvbm92by1sb2FkaW5nPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtb3V0c2lkZS1jb250YWluZXJcIiBbbmdDbGFzc109XCJ7ICdub3ZvLWRhdGEtdGFibGUtb3V0c2lkZS1jb250YWluZXItZml4ZWQnOiBmaXhlZEhlYWRlciB9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWN1c3RvbS1maWx0ZXJcIiAqbmdJZj1cImN1c3RvbUZpbHRlclwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydjdXN0b21GaWx0ZXInXVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgICNub3ZvRGF0YVRhYmxlQ29udGFpbmVyXG4gICAgICAgIGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWNvbnRhaW5lclwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsgJ25vdm8tZGF0YS10YWJsZS1jb250YWluZXItZml4ZWQnOiBmaXhlZEhlYWRlciB9XCJcbiAgICAgICAgW2NsYXNzLmVtcHR5LXVzZXItZmlsdGVyZWRdPVwiZGF0YVNvdXJjZT8uY3VycmVudGx5RW1wdHkgJiYgc3RhdGUudXNlckZpbHRlcmVkXCJcbiAgICAgICAgW2NsYXNzLmVtcHR5XT1cImRhdGFTb3VyY2U/LnRvdGFsbHlFbXB0eSAmJiAhZGF0YVNvdXJjZT8ubG9hZGluZyAmJiAhbG9hZGluZyAmJiAhc3RhdGUudXNlckZpbHRlcmVkICYmICFkYXRhU291cmNlLnByaXN0aW5lXCJcbiAgICAgID5cbiAgICAgICAgPGNkay10YWJsZVxuICAgICAgICAgICpuZ0lmPVwiY29sdW1ucz8ubGVuZ3RoID4gMCAmJiBjb2x1bW5zTG9hZGVkICYmIGRhdGFTb3VyY2VcIlxuICAgICAgICAgIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIlxuICAgICAgICAgIFt0cmFja0J5XT1cInRyYWNrQnlGblwiXG4gICAgICAgICAgbm92b0RhdGFUYWJsZVNvcnRGaWx0ZXJcbiAgICAgICAgICBbY2xhc3MuZXhwYW5kYWJsZV09XCJleHBhbmRhYmxlXCJcbiAgICAgICAgICBbY2xhc3MuZW1wdHldPVwiZGF0YVNvdXJjZT8uY3VycmVudGx5RW1wdHkgJiYgc3RhdGUudXNlckZpbHRlcmVkXCJcbiAgICAgICAgICBbaGlkZGVuXT1cImRhdGFTb3VyY2U/LnRvdGFsbHlFbXB0eSAmJiAhc3RhdGUudXNlckZpbHRlcmVkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwic2VsZWN0aW9uXCI+XG4gICAgICAgICAgICA8bm92by1kYXRhLXRhYmxlLWNoZWNrYm94LWhlYWRlci1jZWxsICpjZGtIZWFkZXJDZWxsRGVmPjwvbm92by1kYXRhLXRhYmxlLWNoZWNrYm94LWhlYWRlci1jZWxsPlxuICAgICAgICAgICAgPG5vdm8tZGF0YS10YWJsZS1jaGVja2JveC1jZWxsICpjZGtDZWxsRGVmPVwibGV0IHJvdzsgbGV0IGkgPSBpbmRleFwiIFtyb3ddPVwicm93XCI+PC9ub3ZvLWRhdGEtdGFibGUtY2hlY2tib3gtY2VsbD5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cImV4cGFuZFwiPlxuICAgICAgICAgICAgPG5vdm8tZGF0YS10YWJsZS1leHBhbmQtaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+PC9ub3ZvLWRhdGEtdGFibGUtZXhwYW5kLWhlYWRlci1jZWxsPlxuICAgICAgICAgICAgPG5vdm8tZGF0YS10YWJsZS1leHBhbmQtY2VsbCAqY2RrQ2VsbERlZj1cImxldCByb3c7IGxldCBpID0gaW5kZXhcIiBbcm93XT1cInJvd1wiPjwvbm92by1kYXRhLXRhYmxlLWV4cGFuZC1jZWxsPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zOyB0cmFja0J5OiB0cmFja0NvbHVtbnNCeVwiIFtjZGtDb2x1bW5EZWZdPVwiY29sdW1uLmlkXCI+XG4gICAgICAgICAgICA8bm92by1kYXRhLXRhYmxlLWhlYWRlci1jZWxsXG4gICAgICAgICAgICAgICpjZGtIZWFkZXJDZWxsRGVmXG4gICAgICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgW2ZpbHRlclRlbXBsYXRlXT1cInRlbXBsYXRlc1snY29sdW1uLWZpbHRlci0nICsgY29sdW1uLmlkXVwiXG4gICAgICAgICAgICAgIFtub3ZvLWRhdGEtdGFibGUtY2VsbC1jb25maWddPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgW3Jlc2l6ZWRdPVwicmVzaXplZFwiXG4gICAgICAgICAgICAgIFtkZWZhdWx0U29ydF09XCJkZWZhdWx0U29ydFwiXG4gICAgICAgICAgICAgIFthbGxvd011bHRpcGxlRmlsdGVyc109XCJhbGxvd011bHRpcGxlRmlsdGVyc1wiXG4gICAgICAgICAgICAgIFtjbGFzcy5lbXB0eV09XCJjb2x1bW4/LnR5cGUgPT09ICdhY3Rpb24nICYmICFjb2x1bW4/LmxhYmVsXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmJ1dHRvbi1oZWFkZXItY2VsbF09XCJjb2x1bW4/LnR5cGUgPT09ICdleHBhbmQnIHx8IChjb2x1bW4/LnR5cGUgPT09ICdhY3Rpb24nICYmICFjb2x1bW4/LmFjdGlvbj8ub3B0aW9ucylcIlxuICAgICAgICAgICAgICBbY2xhc3MuZHJvcGRvd24taGVhZGVyLWNlbGxdPVwiY29sdW1uPy50eXBlID09PSAnYWN0aW9uJyAmJiBjb2x1bW4/LmFjdGlvbj8ub3B0aW9uc1wiXG4gICAgICAgICAgICAgIFtjbGFzcy5maXhlZC1oZWFkZXJdPVwiZml4ZWRIZWFkZXJcIlxuICAgICAgICAgICAgPjwvbm92by1kYXRhLXRhYmxlLWhlYWRlci1jZWxsPlxuICAgICAgICAgICAgPG5vdm8tZGF0YS10YWJsZS1jZWxsXG4gICAgICAgICAgICAgICpjZGtDZWxsRGVmPVwibGV0IHJvd1wiXG4gICAgICAgICAgICAgIFtyZXNpemVkXT1cInJlc2l6ZWRcIlxuICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAgICAgICAgIFtyb3ddPVwicm93XCJcbiAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cImNvbHVtblRvVGVtcGxhdGVbY29sdW1uLmlkXVwiXG4gICAgICAgICAgICAgIFtjbGFzcy5lbXB0eV09XCJjb2x1bW4/LnR5cGUgPT09ICdhY3Rpb24nICYmICFjb2x1bW4/LmxhYmVsXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmJ1dHRvbi1jZWxsXT1cImNvbHVtbj8udHlwZSA9PT0gJ2V4cGFuZCcgfHwgKGNvbHVtbj8udHlwZSA9PT0gJ2FjdGlvbicgJiYgIWNvbHVtbj8uYWN0aW9uPy5vcHRpb25zKVwiXG4gICAgICAgICAgICAgIFtjbGFzcy5kcm9wZG93bi1jZWxsXT1cImNvbHVtbj8udHlwZSA9PT0gJ2FjdGlvbicgJiYgY29sdW1uPy5hY3Rpb24/Lm9wdGlvbnNcIlxuICAgICAgICAgICAgPjwvbm92by1kYXRhLXRhYmxlLWNlbGw+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5vdm8tZGF0YS10YWJsZS1oZWFkZXItcm93XG4gICAgICAgICAgICAqY2RrSGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiXG4gICAgICAgICAgICBbZml4ZWRIZWFkZXJdPVwiZml4ZWRIZWFkZXJcIlxuICAgICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWhlYWRlci1yb3dcIlxuICAgICAgICAgID48L25vdm8tZGF0YS10YWJsZS1oZWFkZXItcm93PlxuICAgICAgICAgIDxub3ZvLWRhdGEtdGFibGUtcm93XG4gICAgICAgICAgICAqY2RrUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1uc1wiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7IGFjdGl2ZTogcm93W3Jvd0lkZW50aWZpZXJdID09IGFjdGl2ZVJvd0lkZW50aWZpZXIgfVwiXG4gICAgICAgICAgICBbbm92b0RhdGFUYWJsZUV4cGFuZF09XCJkZXRhaWxSb3dUZW1wbGF0ZVwiXG4gICAgICAgICAgICBbcm93XT1cInJvd1wiXG4gICAgICAgICAgICBbaWRdPVwibmFtZSArICctJyArIHJvd1tyb3dJZGVudGlmaWVyXVwiXG4gICAgICAgICAgICBbZGF0YUF1dG9tYXRpb25JZF09XCJyb3dbcm93SWRlbnRpZmllcl1cIlxuICAgICAgICAgID48L25vdm8tZGF0YS10YWJsZS1yb3c+XG4gICAgICAgIDwvY2RrLXRhYmxlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWZvb3RlclwiICpuZ0lmPVwidGVtcGxhdGVzWydmb290ZXInXVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbJ2Zvb3RlciddOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29sdW1ucywgZGF0YTogZGF0YVNvdXJjZS5kYXRhIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1uby1yZXN1bHRzLWNvbnRhaW5lclwiXG4gICAgICAgICAgW3N0eWxlLmxlZnQucHhdPVwic2Nyb2xsTGVmdFwiXG4gICAgICAgICAgKm5nSWY9XCJkYXRhU291cmNlPy5jdXJyZW50bHlFbXB0eSAmJiBzdGF0ZS51c2VyRmlsdGVyZWQgJiYgIWRhdGFTb3VyY2U/LmxvYWRpbmcgJiYgIWxvYWRpbmcgJiYgIWRhdGFTb3VyY2UucHJpc3RpbmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1lbXB0eS1tZXNzYWdlXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydub1Jlc3VsdHNNZXNzYWdlJ10gfHwgdGVtcGxhdGVzWydkZWZhdWx0Tm9SZXN1bHRzTWVzc2FnZSddXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWVtcHR5LWNvbnRhaW5lclwiXG4gICAgICAgICpuZ0lmPVwiZGF0YVNvdXJjZT8udG90YWxseUVtcHR5ICYmICFkYXRhU291cmNlPy5sb2FkaW5nICYmICFsb2FkaW5nICYmICFzdGF0ZS51c2VyRmlsdGVyZWQgJiYgIWRhdGFTb3VyY2UucHJpc3RpbmVcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWVtcHR5LW1lc3NhZ2VcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydlbXB0eU1lc3NhZ2UnXSB8fCB0ZW1wbGF0ZXNbJ2RlZmF1bHROb1Jlc3VsdHNNZXNzYWdlJ11cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8IS0tIERFRkFVTFQgQ0VMTCBURU1QTEFURSAtLT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwidGV4dENlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHNwYW4gW3N0eWxlLndpZHRoLnB4XT1cImNvbD8ud2lkdGhcIiBbc3R5bGUubWluLXdpZHRoLnB4XT1cImNvbD8ud2lkdGhcIiBbc3R5bGUubWF4LXdpZHRoLnB4XT1cImNvbD8ud2lkdGhcIj57e1xuICAgICAgICByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2xcbiAgICAgIH19PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImRhdGVDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxzcGFuPnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbCB8IGRhdGFUYWJsZURhdGVSZW5kZXJlcjogY29sIH19PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImRhdGV0aW1lQ2VsbFRlbXBsYXRlXCIgbGV0LXJvdyBsZXQtY29sPVwiY29sXCI+XG4gICAgICA8c3Bhbj57eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2wgfCBkYXRhVGFibGVEYXRlVGltZVJlbmRlcmVyOiBjb2wgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwidGltZUNlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHNwYW4+e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTogY29sIHwgZGF0YVRhYmxlVGltZVJlbmRlcmVyOiBjb2wgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiY3VycmVuY3lDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxzcGFuPnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbCB8IGRhdGFUYWJsZUN1cnJlbmN5UmVuZGVyZXI6IGNvbCB9fTwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJiaWdkZWNpbWFsQ2VsbFRlbXBsYXRlXCIgbGV0LXJvdyBsZXQtY29sPVwiY29sXCI+XG4gICAgICA8c3Bhbj57eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2wgfCBkYXRhVGFibGVCaWdEZWNpbWFsUmVuZGVyZXI6IGNvbCB9fTwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJudW1iZXJDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxzcGFuPnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbCB8IGRhdGFUYWJsZU51bWJlclJlbmRlcmVyOiBjb2wgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwicGVyY2VudENlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHNwYW4+e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTogY29sIHwgZGF0YVRhYmxlTnVtYmVyUmVuZGVyZXI6IGNvbDp0cnVlIH19PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImxpbmtDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxhXG4gICAgICAgIFthdHRyLmRhdGEtZmVhdHVyZS1pZF09XCJjb2w/LmF0dHJpYnV0ZXM/LmRhdGFGZWF0dXJlSWRcIlxuICAgICAgICAoY2xpY2spPVwiY29sLmhhbmRsZXJzPy5jbGljayh7IG9yaWdpbmFsRXZlbnQ6ICRldmVudCwgcm93OiByb3cgfSlcIlxuICAgICAgICBbc3R5bGUud2lkdGgucHhdPVwiY29sPy53aWR0aFwiXG4gICAgICAgIFtzdHlsZS5taW4td2lkdGgucHhdPVwiY29sPy53aWR0aFwiXG4gICAgICAgIFtzdHlsZS5tYXgtd2lkdGgucHhdPVwiY29sPy53aWR0aFwiXG4gICAgICAgID57eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2wgfX08L2FcbiAgICAgID5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJ0ZWxDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxhIGhyZWY9XCJ0ZWw6e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTogY29sIH19XCIgW3RhcmdldF09XCJjb2w/LmF0dHJpYnV0ZXM/LnRhcmdldFwiPnt7XG4gICAgICAgIHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbFxuICAgICAgfX08L2E+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwibWFpbHRvQ2VsbFRlbXBsYXRlXCIgbGV0LXJvdyBsZXQtY29sPVwiY29sXCI+XG4gICAgICA8YSBocmVmPVwibWFpbHRvOnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbCB9fVwiIFt0YXJnZXRdPVwiY29sPy5hdHRyaWJ1dGVzPy50YXJnZXRcIj57e1xuICAgICAgICByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2xcbiAgICAgIH19PC9hPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImJ1dHRvbkNlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHAgW3Rvb2x0aXBdPVwiY29sPy5hY3Rpb24/LnRvb2x0aXBcIiB0b29sdGlwUG9zaXRpb249XCJyaWdodFwiIFthdHRyLmRhdGEtZmVhdHVyZS1pZF09XCJjb2w/LmF0dHJpYnV0ZXM/LmRhdGFGZWF0dXJlSWRcIj5cbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzcz1cImJoaS17eyBjb2w/LmFjdGlvbj8uaWNvbiB9fSBkYXRhLXRhYmxlLWljb25cIlxuICAgICAgICAgIChjbGljayk9XCJjb2wuaGFuZGxlcnM/LmNsaWNrKHsgb3JpZ2luYWxFdmVudDogJGV2ZW50LCByb3c6IHJvdyB9KVwiXG4gICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImlzRGlzYWJsZWQoY29sLCByb3cpXCJcbiAgICAgICAgPjwvaT5cbiAgICAgIDwvcD5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJkcm9wZG93bkNlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPG5vdm8tZHJvcGRvd24gcGFyZW50U2Nyb2xsU2VsZWN0b3I9XCIubm92by1kYXRhLXRhYmxlLWNvbnRhaW5lclwiIGNvbnRhaW5lckNsYXNzPVwibm92by1kYXRhLXRhYmxlLWRyb3Bkb3duXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwiZGlhbG9ndWVcIiBbaWNvbl09XCJjb2wuYWN0aW9uLmljb25cIiBpbnZlcnNlPnt7IGNvbC5sYWJlbCB9fTwvYnV0dG9uPlxuICAgICAgICA8bGlzdD5cbiAgICAgICAgICA8aXRlbVxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb2w/LmFjdGlvbj8ub3B0aW9uc1wiXG4gICAgICAgICAgICAoYWN0aW9uKT1cIm9wdGlvbi5oYW5kbGVycy5jbGljayh7IG9yaWdpbmFsRXZlbnQ6ICRldmVudD8ub3JpZ2luYWxFdmVudCwgcm93OiByb3cgfSlcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWQob3B0aW9uLCByb3cpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwib3B0aW9uLmxhYmVsXCI+e3sgb3B0aW9uLmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgPC9saXN0PlxuICAgICAgPC9ub3ZvLWRyb3Bkb3duPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImRlZmF1bHROb1Jlc3VsdHNNZXNzYWdlXCI+XG4gICAgICA8aDQ+PGkgY2xhc3M9XCJiaGktc2VhcmNoLXF1ZXN0aW9uXCI+PC9pPiB7eyBsYWJlbHMubm9NYXRjaGluZ1JlY29yZHNNZXNzYWdlIH19PC9oND5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJkZWZhdWx0RW1wdHlNZXNzYWdlXCI+XG4gICAgICA8aDQ+PGkgY2xhc3M9XCJiaGktc2VhcmNoLXF1ZXN0aW9uXCI+PC9pPiB7eyBsYWJlbHMuZW1wdHlUYWJsZU1lc3NhZ2UgfX08L2g0PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImV4cGFuZGVkUm93XCI+IFlvdSBkaWQgbm90IHByb3ZpZGUgYW4gXCJleHBhbmRlZFJvd1wiIHRlbXBsYXRlISA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjZGV0YWlsUm93VGVtcGxhdGUgbGV0LXJvdz5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtZGV0YWlsLXJvd1wiIFtAZXhwYW5kXSBzdHlsZT1cIm92ZXJmbG93OiBoaWRkZW5cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlc1snZXhwYW5kZWRSb3cnXTsgY29udGV4dDogeyAkaW1wbGljaXQ6IHJvdyB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwhLS0gQ1VTVE9NIENFTExTIFBBU1NFRCBJTiAtLT5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtEYXRhVGFibGVTdGF0ZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGU8VD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmdsb2JhbC1zZWFyY2gtaGlkZGVuJykgZ2xvYmFsU2VhcmNoSGlkZGVuQ2xhc3NUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAQ29udGVudENoaWxkcmVuKE5vdm9UZW1wbGF0ZSkgY3VzdG9tVGVtcGxhdGVzOiBRdWVyeUxpc3Q8Tm92b1RlbXBsYXRlPjtcbiAgQFZpZXdDaGlsZHJlbihOb3ZvVGVtcGxhdGUpIGRlZmF1bHRUZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOb3ZvVGVtcGxhdGU+O1xuICBAVmlld0NoaWxkKCdub3ZvRGF0YVRhYmxlQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIG5vdm9EYXRhVGFibGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBPdXRwdXQoKSByZXNpemVkOiBFdmVudEVtaXR0ZXI8SURhdGFUYWJsZUNvbHVtbjxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGRpc3BsYXllZENvbHVtbnMoZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10pIHtcbiAgICBpZiAodGhpcy5kaXNwbGF5ZWRDb2x1bW5zICYmIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5sZW5ndGggIT09IDApIHtcbiAgICAgIGlmICh0aGlzLm5hbWUgIT09ICdub3ZvLWRhdGEtdGFibGUnKSB7XG4gICAgICAgIHRoaXMucHJlZmVyZW5jZXNDaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBkaXNwbGF5ZWRDb2x1bW5zLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vdGlmeSgnTXVzdCBoYXZlIFtuYW1lXSBzZXQgb24gZGF0YS10YWJsZSB0byB1c2UgcHJlZmVyZW5jZXMhJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2Rpc2FibGVkQ29sdW1ucyA9IGRpc3BsYXllZENvbHVtbnM7XG4gICAgdGhpcy5jb25maWd1cmVMYXN0RGlzcGxheWVkQ29sdW1uKCk7XG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNjcm9sbExpc3RlbmVyKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzcGxheWVkQ29sdW1ucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkQ29sdW1ucztcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZENvbHVtbnM6IHN0cmluZ1tdO1xuXG4gIEBJbnB1dCgpIHBhZ2luYXRpb25PcHRpb25zOiBJRGF0YVRhYmxlUGFnaW5hdGlvbk9wdGlvbnM7XG4gIEBJbnB1dCgpIHNlYXJjaE9wdGlvbnM6IElEYXRhVGFibGVTZWFyY2hPcHRpb25zO1xuICBASW5wdXQoKSBkZWZhdWx0U29ydDogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH07XG4gIEBJbnB1dCgpIG5hbWUgPSAnbm92by1kYXRhLXRhYmxlJztcbiAgQElucHV0KCkgYWxsb3dNdWx0aXBsZUZpbHRlcnMgPSBmYWxzZTtcbiAgQElucHV0KCkgcm93SWRlbnRpZmllciA9ICdpZCc7XG4gIEBJbnB1dCgpIGFjdGl2ZVJvd0lkZW50aWZpZXIgPSAnJztcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBJbnB1dCgpIHRyYWNrQnlGbiA9IChpbmRleCwgaXRlbSkgPT4gaXRlbS5pZDtcbiAgQElucHV0KCkgdGVtcGxhdGVzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPGFueT4gfSA9IHt9O1xuICBASW5wdXQoKSBmaXhlZEhlYWRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBwYWdpbmF0b3JEYXRhRmVhdHVyZUlkOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGRhdGFUYWJsZVNlcnZpY2Uoc2VydmljZTogSURhdGFUYWJsZVNlcnZpY2U8VD4pIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICBpZiAoIXNlcnZpY2UpIHtcbiAgICAgIHNlcnZpY2UgPSBuZXcgU3RhdGljRGF0YVRhYmxlU2VydmljZShbXSk7XG4gICAgfVxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBEYXRhVGFibGVTb3VyY2U8VD4oc2VydmljZSwgdGhpcy5zdGF0ZSwgdGhpcy5yZWYpO1xuICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCByb3dzKHJvd3M6IFRbXSkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIGNvbnN0IHNlcnZpY2UgPSBuZXcgU3RhdGljRGF0YVRhYmxlU2VydmljZShyb3dzKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgRGF0YVRhYmxlU291cmNlPFQ+KHNlcnZpY2UsIHRoaXMuc3RhdGUsIHRoaXMucmVmKTtcbiAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgb3V0c2lkZUZpbHRlcihvdXRzaWRlRmlsdGVyOiBFdmVudEVtaXR0ZXI8YW55Pikge1xuICAgIC8vIFVuc3Vic2NyaWJlXG4gICAgaWYgKHRoaXMub3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmIChvdXRzaWRlRmlsdGVyKSB7XG4gICAgICAvLyBSZS1zdWJzY3JpYmVcbiAgICAgIHRoaXMub3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbiA9IG91dHNpZGVGaWx0ZXIuc3Vic2NyaWJlKChmaWx0ZXI6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlLm91dHNpZGVGaWx0ZXIgPSBmaWx0ZXI7XG4gICAgICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KHsgZ2xvYmFsU2VhcmNoOiB0aGlzLnN0YXRlLmdsb2JhbFNlYXJjaCwgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlciwgc29ydDogdGhpcy5zdGF0ZS5zb3J0IH0pO1xuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCByZWZyZXNoU3ViamVjdChyZWZyZXNoU3ViamVjdDogRXZlbnRFbWl0dGVyPGFueT4pIHtcbiAgICAvLyBVbnN1YnNjcmliZVxuICAgIGlmICh0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAocmVmcmVzaFN1YmplY3QpIHtcbiAgICAgIC8vIFJlLXN1YnNjcmliZVxuICAgICAgdGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uID0gcmVmcmVzaFN1YmplY3Quc3Vic2NyaWJlKChmaWx0ZXI6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlLmlzRm9yY2VSZWZyZXNoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBnbG9iYWxTZWFyY2g6IHRoaXMuc3RhdGUuZ2xvYmFsU2VhcmNoLCBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSk7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbHVtbnMoY29sdW1uczogSURhdGFUYWJsZUNvbHVtbjxUPltdKSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgdGhpcy5jb25maWd1cmVDb2x1bW5zKCk7XG4gIH1cbiAgZ2V0IGNvbHVtbnMoKTogSURhdGFUYWJsZUNvbHVtbjxUPltdIHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjdXN0b21GaWx0ZXIodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2N1c3RvbUZpbHRlciA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgY3VzdG9tRmlsdGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21GaWx0ZXI7XG4gIH1cbiAgcHJpdmF0ZSBfY3VzdG9tRmlsdGVyOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBoYXNFeGFuZGVkUm93cyh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5faGFzRXhhbmRlZFJvd3MgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IGhhc0V4YW5kZWRSb3dzKCkge1xuICAgIHJldHVybiB0aGlzLl9oYXNFeGFuZGVkUm93cztcbiAgfVxuICBwcml2YXRlIF9oYXNFeGFuZGVkUm93czogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzZXQgZm9yY2VTaG93SGVhZGVyKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9mb3JjZVNob3dIZWFkZXIgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IGZvcmNlU2hvd0hlYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9yY2VTaG93SGVhZGVyO1xuICB9XG4gIHByaXZhdGUgX2ZvcmNlU2hvd0hlYWRlcjogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzZXQgaGlkZUdsb2JhbFNlYXJjaCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZUdsb2JhbFNlYXJjaCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgICB0aGlzLmdsb2JhbFNlYXJjaEhpZGRlbkNsYXNzVG9nZ2xlID0gdGhpcy5faGlkZUdsb2JhbFNlYXJjaDtcbiAgfVxuICBnZXQgaGlkZUdsb2JhbFNlYXJjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZUdsb2JhbFNlYXJjaDtcbiAgfVxuICBwcml2YXRlIF9oaWRlR2xvYmFsU2VhcmNoOiBib29sZWFuID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgcHJlZmVyZW5jZXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8SURhdGFUYWJsZVByZWZlcmVuY2VzPiA9IG5ldyBFdmVudEVtaXR0ZXI8SURhdGFUYWJsZVByZWZlcmVuY2VzPigpO1xuXG4gIHB1YmxpYyBkYXRhU291cmNlOiBEYXRhVGFibGVTb3VyY2U8VD47XG4gIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGNvbHVtblRvVGVtcGxhdGU6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8YW55PiB9ID0ge307XG4gIHB1YmxpYyBjb2x1bW5zTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzZWxlY3Rpb246IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpO1xuICBwdWJsaWMgc2Nyb2xsTGVmdDogbnVtYmVyID0gMDtcbiAgcHVibGljIGV4cGFuZGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIG91dHNpZGVGaWx0ZXJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSByZWZyZXNoU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcmVzZXRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBwYWdpbmF0aW9uU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgc29ydEZpbHRlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9jb2x1bW5zOiBJRGF0YVRhYmxlQ29sdW1uPFQ+W107XG4gIHByaXZhdGUgc2Nyb2xsTGlzdGVuZXJIYW5kbGVyOiBhbnk7XG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmVtcHR5JylcbiAgZ2V0IGVtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UgJiYgdGhpcy5kYXRhU291cmNlLnRvdGFsbHlFbXB0eTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubG9hZGluZycpXG4gIGdldCBsb2FkaW5nQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZGluZyB8fCAodGhpcy5kYXRhU291cmNlICYmIHRoaXMuZGF0YVNvdXJjZS5sb2FkaW5nKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIHN0YXRlOiBEYXRhVGFibGVTdGF0ZTxUPikge1xuICAgIHRoaXMuc2Nyb2xsTGlzdGVuZXJIYW5kbGVyID0gdGhpcy5zY3JvbGxMaXN0ZW5lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc29ydEZpbHRlclN1YnNjcmlwdGlvbiA9IHRoaXMuc3RhdGUuc29ydEZpbHRlclNvdXJjZS5zdWJzY3JpYmUoXG4gICAgICAoZXZlbnQ6IHtcbiAgICAgICAgc29ydDogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nOyB0cmFuc2Zvcm0/OiBGdW5jdGlvbiB9O1xuICAgICAgICBmaWx0ZXI6IElEYXRhVGFibGVGaWx0ZXIgfCBJRGF0YVRhYmxlRmlsdGVyW107XG4gICAgICAgIGdsb2JhbFNlYXJjaDogc3RyaW5nO1xuICAgICAgfSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5uYW1lICE9PSAnbm92by1kYXRhLXRhYmxlJykge1xuICAgICAgICAgIHRoaXMucHJlZmVyZW5jZXNDaGFuZ2VkLmVtaXQoeyBuYW1lOiB0aGlzLm5hbWUsIHNvcnQ6IGV2ZW50LnNvcnQsIGZpbHRlcjogZXZlbnQuZmlsdGVyLCBnbG9iYWxTZWFyY2g6IGV2ZW50Lmdsb2JhbFNlYXJjaCB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub3RpZnkoJ011c3QgaGF2ZSBbbmFtZV0gc2V0IG9uIGRhdGEtdGFibGUgdG8gdXNlIHByZWZlcmVuY2VzIScpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICk7XG4gICAgdGhpcy5wYWdpbmF0aW9uU3Vic2NyaXB0aW9uID0gdGhpcy5zdGF0ZS5wYWdpbmF0aW9uU291cmNlLnN1YnNjcmliZSgoZXZlbnQ6IHsgaXNQYWdlU2l6ZUNoYW5nZTogYm9vbGVhbjsgcGFnZVNpemU6IG51bWJlciB9KSA9PiB7XG4gICAgICBpZiAodGhpcy5uYW1lICE9PSAnbm92by1kYXRhLXRhYmxlJykge1xuICAgICAgICBpZiAoZXZlbnQuaXNQYWdlU2l6ZUNoYW5nZSkge1xuICAgICAgICAgIHRoaXMucHJlZmVyZW5jZXNDaGFuZ2VkLmVtaXQoeyBuYW1lOiB0aGlzLm5hbWUsIHBhZ2VTaXplOiBldmVudC5wYWdlU2l6ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm90aWZ5KCdNdXN0IGhhdmUgW25hbWVdIHNldCBvbiBkYXRhLXRhYmxlIHRvIHVzZSBwcmVmZXJlbmNlcyEnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnJlc2V0U3Vic2NyaXB0aW9uID0gdGhpcy5zdGF0ZS5yZXNldFNvdXJjZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm5vdm9EYXRhVGFibGVDb250YWluZXIpIHtcbiAgICAgICh0aGlzLm5vdm9EYXRhVGFibGVDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50KS5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbExpc3RlbmVySGFuZGxlcik7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZXNldFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5yZXNldFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zb3J0RmlsdGVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnNvcnRGaWx0ZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc3BsYXllZENvbHVtbnMgJiYgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLmxlbmd0aCkge1xuICAgICAgdGhpcy5leHBhbmRhYmxlID0gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLmluY2x1ZGVzKCdleHBhbmQnKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRlbXBsYXRlcyBkZWZpbmVkIGhlcmVcbiAgICB0aGlzLmRlZmF1bHRUZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgLy8gT25seSBvdmVycmlkZSBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3RcbiAgICAgIGlmICghdGhpcy50ZW1wbGF0ZXNbaXRlbS5nZXRUeXBlKCldKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVzW2l0ZW0uZ2V0VHlwZSgpXSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gQ3VzdG9tIHRlbXBsYXRlcyBwYXNzZWQgaW5cbiAgICB0aGlzLmN1c3RvbVRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAvLyBPdmVycmlkZSBhbnl0aGluZyB0aGF0IGlzIGN1c3RvbSBhbmQgaW4gSFRNTFxuICAgICAgdGhpcy50ZW1wbGF0ZXNbaXRlbS5nZXRUeXBlKCldID0gaXRlbS50ZW1wbGF0ZTtcbiAgICB9KTtcbiAgICAvLyBMb2FkIGNvbHVtbnNcbiAgICB0aGlzLmNvbmZpZ3VyZUNvbHVtbnMoKTtcblxuICAgIC8vIFN0YXRlXG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbk9wdGlvbnMgJiYgIXRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZSkge1xuICAgICAgdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbk9wdGlvbnMgJiYgIXRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemUpIHtcbiAgICAgIHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemUgPSA1MDtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbk9wdGlvbnMgJiYgIXRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemVPcHRpb25zKSB7XG4gICAgICB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjUsIDUwLCAxMDBdO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlLnBhZ2UgPSB0aGlzLnBhZ2luYXRpb25PcHRpb25zID8gdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RhdGUucGFnZVNpemUgPSB0aGlzLnBhZ2luYXRpb25PcHRpb25zID8gdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZSA6IHVuZGVmaW5lZDtcblxuICAgIC8vIFNjcm9sbGluZyBpbnNpZGUgdGFibGVcbiAgICAodGhpcy5ub3ZvRGF0YVRhYmxlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxMaXN0ZW5lckhhbmRsZXIpO1xuXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgb25TZWFyY2hDaGFuZ2UodGVybTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZS5nbG9iYWxTZWFyY2ggPSB0ZXJtO1xuICAgIHRoaXMuc3RhdGUucmVzZXQoZmFsc2UsIHRydWUpO1xuICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KHsgZ2xvYmFsU2VhcmNoOiB0ZXJtLCBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSk7XG4gIH1cblxuICBwdWJsaWMgdHJhY2tDb2x1bW5zQnkoaW5kZXg6IG51bWJlciwgaXRlbTogSURhdGFUYWJsZUNvbHVtbjxUPikge1xuICAgIHJldHVybiBpdGVtLmlkO1xuICB9XG5cbiAgcHVibGljIGlzRGlzYWJsZWQoY2hlY2s6IGFueSwgcm93OiBUKTogYm9vbGVhbiB7XG4gICAgaWYgKGNoZWNrLmRpc2FibGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNoZWNrLmRpc2FibGVkRnVuYykge1xuICAgICAgcmV0dXJuIGNoZWNrLmRpc2FibGVkRnVuYyhyb3cpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaXNFeHBhbmRlZChyb3c6IFQpOiBib29sZWFuIHtcbiAgICBpZiAoIXJvdykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5leHBhbmRlZFJvd3MuaGFzKGAke3Jvd1t0aGlzLnJvd0lkZW50aWZpZXJdfWApO1xuICB9XG5cbiAgcHVibGljIGV4cGFuZFJvdyhyb3c6IFQpOiB2b2lkIHtcbiAgICBjb25zdCBleHBhbmRlZCA9IHRoaXMuaXNFeHBhbmRlZChyb3cpO1xuXG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICB0aGlzLnN0YXRlLmV4cGFuZGVkUm93cy5kZWxldGUoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUuZXhwYW5kZWRSb3dzLmFkZChgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5vbkV4cGFuZENoYW5nZSgoKHJvdyBhcyB1bmtub3duKSBhcyB7IGlkOiBudW1iZXIgfSkuaWQpO1xuICB9XG5cbiAgcHVibGljIGV4cGFuZFJvd3MoZXhwYW5kOiBib29sZWFuKTogdm9pZCB7XG4gICAgKHRoaXMuZGF0YVNvdXJjZS5kYXRhIHx8IFtdKS5mb3JFYWNoKChyb3c6IFQpID0+IHtcbiAgICAgIGlmICghZXhwYW5kKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZXhwYW5kZWRSb3dzLmRlbGV0ZShgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZXhwYW5kZWRSb3dzLmFkZChgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlLm9uRXhwYW5kQ2hhbmdlKCk7XG4gIH1cblxuICBwdWJsaWMgYWxsQ3VycmVudFJvd3NFeHBhbmRlZCgpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5pc0V4cGFuZGVkKCh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSlbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgaXNTZWxlY3RlZChyb3c6IFQpOiBib29sZWFuIHtcbiAgICBpZiAoIXJvdykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MuaGFzKGAke3Jvd1t0aGlzLnJvd0lkZW50aWZpZXJdfWApO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdFJvdyhyb3c6IFQpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuaXNTZWxlY3RlZChyb3cpO1xuXG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5kZWxldGUoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLnNldChgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gLCByb3cpO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlLm9uU2VsZWN0aW9uQ2hhbmdlKCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Um93cyhzZWxlY3RlZDogYm9vbGVhbik6IHZvaWQge1xuICAgICh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSkuZm9yRWFjaCgocm93OiBUKSA9PiB7XG4gICAgICBpZiAoIXNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLmRlbGV0ZShgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLnNldChgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gLCByb3cpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc3RhdGUub25TZWxlY3Rpb25DaGFuZ2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBhbGxDdXJyZW50Um93c1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHRoaXMuZGF0YVNvdXJjZS5kYXRhIHx8IFtdKS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLmlzU2VsZWN0ZWQoKHRoaXMuZGF0YVNvdXJjZS5kYXRhIHx8IFtdKVtpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlndXJlTGFzdERpc3BsYXllZENvbHVtbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2x1bW5zICYmIHRoaXMuZGlzcGxheWVkQ29sdW1ucyAmJiAwICE9PSB0aGlzLmNvbHVtbnMubGVuZ3RoICYmIDAgIT09IHRoaXMuZGlzcGxheWVkQ29sdW1ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi5pbml0aWFsUmVzaXphYmxlKSB7XG4gICAgICAgICAgY29sdW1uLnJlc2l6YWJsZSA9IGNvbHVtbi5pbml0aWFsUmVzaXphYmxlLnJlc2l6YWJsZTtcbiAgICAgICAgICBjb2x1bW4ud2lkdGggPSBjb2x1bW4uaW5pdGlhbFJlc2l6YWJsZS53aWR0aDtcbiAgICAgICAgICBjb2x1bW4uaW5pdGlhbFJlc2l6YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXNpemFibGVDb2x1bW5zOiBzdHJpbmdbXSA9IHRoaXMuZGlzcGxheWVkQ29sdW1ucy5maWx0ZXIoXG4gICAgICAgIChuYW1lOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgKGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPik6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW4ucmVzaXphYmxlICYmIGNvbHVtbi5pZCA9PT0gbmFtZTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICkgIT09IC0xXG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgICBpZiAocmVzaXphYmxlQ29sdW1ucyAmJiByZXNpemFibGVDb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbGFzdFJlc2l6YWJsZUNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPiA9IHRoaXMuY29sdW1ucy5maW5kKChjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pID0+IHtcbiAgICAgICAgICByZXR1cm4gY29sdW1uLmlkID09PSByZXNpemFibGVDb2x1bW5zW3Jlc2l6YWJsZUNvbHVtbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIH0pO1xuICAgICAgICBsYXN0UmVzaXphYmxlQ29sdW1uLmluaXRpYWxSZXNpemFibGUgPSB7XG4gICAgICAgICAgcmVzaXphYmxlOiBsYXN0UmVzaXphYmxlQ29sdW1uLnJlc2l6YWJsZSxcbiAgICAgICAgICB3aWR0aDogbGFzdFJlc2l6YWJsZUNvbHVtbi53aWR0aCxcbiAgICAgICAgfTtcbiAgICAgICAgbGFzdFJlc2l6YWJsZUNvbHVtbi53aWR0aCA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGFzdFJlc2l6YWJsZUNvbHVtbi5yZXNpemFibGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZUNvbHVtbnMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sdW1ucyAmJiB0aGlzLmNvbHVtbnMubGVuZ3RoICE9PSAwICYmIE9iamVjdC5rZXlzKHRoaXMudGVtcGxhdGVzKS5sZW5ndGggIT09IDApIHtcbiAgICAgIC8vIEZpZ3VyZSB0aGUgY29sdW1uIHRlbXBsYXRlc1xuICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPikgPT4ge1xuICAgICAgICAvLyBGaWd1cmUgdGhlIHRlbXBsYXRlXG4gICAgICAgIGxldCB0ZW1wbGF0ZU5hbWU6IHN0cmluZztcbiAgICAgICAgaWYgKGNvbHVtbi50ZW1wbGF0ZSkge1xuICAgICAgICAgIC8vIFBhc3MgaXQgaW4gYXMgdGVtcGxhdGVcbiAgICAgICAgICB0ZW1wbGF0ZU5hbWUgPSBjb2x1bW4udGVtcGxhdGU7XG4gICAgICAgIH0gZWxzZSBpZiAoISF0aGlzLnRlbXBsYXRlc1tjb2x1bW4uaWRdKSB7XG4gICAgICAgICAgLy8gQ3VzdG9tIHRlbXBsYXRlIGZvciB0aGUgY29sdW1uIGlkXG4gICAgICAgICAgdGVtcGxhdGVOYW1lID0gY29sdW1uLmlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIERlZmF1bHQgdG8gdGhlIGRlZmF1bENlbGxUZW1wbGF0ZVxuICAgICAgICAgIGlmIChjb2x1bW4udHlwZSA9PT0gJ2FjdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW4uYWN0aW9uICYmIGNvbHVtbi5hY3Rpb24ub3B0aW9ucykge1xuICAgICAgICAgICAgICBpZiAoIWNvbHVtbi5hY3Rpb24uaWNvbikge1xuICAgICAgICAgICAgICAgIGNvbHVtbi5hY3Rpb24uaWNvbiA9ICdjb2xsYXBzZSc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGVtcGxhdGVOYW1lID0gJ2Ryb3Bkb3duQ2VsbFRlbXBsYXRlJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRlbXBsYXRlTmFtZSA9ICdidXR0b25DZWxsVGVtcGxhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY29sdW1uLnR5cGUgPT09ICdsaW5rOnRlbCcgfHwgY29sdW1uLnR5cGUgPT09ICdsaW5rOm1haWx0bycpIHtcbiAgICAgICAgICAgICAgdGVtcGxhdGVOYW1lID0gYCR7Y29sdW1uLnR5cGUuc3BsaXQoJzonKVsxXX1DZWxsVGVtcGxhdGVgO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGVtcGxhdGVOYW1lID0gYCR7Y29sdW1uLnR5cGV9Q2VsbFRlbXBsYXRlYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2x1bW5Ub1RlbXBsYXRlW2NvbHVtbi5pZF0gPSB0aGlzLnRlbXBsYXRlc1t0ZW1wbGF0ZU5hbWVdO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmNvbmZpZ3VyZUxhc3REaXNwbGF5ZWRDb2x1bW4oKTtcbiAgICAgIHRoaXMuY29sdW1uc0xvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQ6IEVsZW1lbnQgPSB0aGlzLm5vdm9EYXRhVGFibGVDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgIGNvbnN0IGxlZnQ6IG51bWJlciA9IHRhcmdldC5zY3JvbGxMZWZ0O1xuICAgIGlmIChsZWZ0ICE9PSB0aGlzLnNjcm9sbExlZnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsTGVmdCA9IHRhcmdldC5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19