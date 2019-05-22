/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.trackByFn = function (index, item) { return item.id; };
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
        this.paginationSubscription = this.state.paginationSource.subscribe(function (event) {
            if (_this.name !== 'novo-data-table') {
                if (event.isPageSizeChange) {
                    _this.preferencesChanged.emit({ name: _this.name, pageSize: event.pageSize });
                }
            }
            else {
                notify('Must have [name] set on data-table to use preferences!');
            }
        });
        this.resetSubscription = this.state.resetSource.subscribe(function () {
            setTimeout(function () {
                _this.ref.detectChanges();
            }, 300);
        });
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
                setTimeout(function () {
                    _this.scrollListener();
                });
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
                this.outsideFilterSubscription = outsideFilter.subscribe(function (filter) {
                    _this.state.outsideFilter = filter;
                    _this.state.updates.next({ globalSearch: _this.state.globalSearch, filter: _this.state.filter, sort: _this.state.sort });
                    _this.ref.markForCheck();
                });
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
                this.refreshSubscription = refreshSubject.subscribe(function (filter) {
                    _this.state.isForceRefresh = true;
                    _this.state.updates.next({ globalSearch: _this.state.globalSearch, filter: _this.state.filter, sort: _this.state.sort });
                    _this.ref.markForCheck();
                });
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
        this.defaultTemplates.forEach(function (item) {
            // Only override if it doesn't already exist
            if (!_this.templates[item.getType()]) {
                _this.templates[item.getType()] = item.template;
            }
        });
        // Custom templates passed in
        this.customTemplates.forEach(function (item) {
            // Override anything that is custom and in HTML
            _this.templates[item.getType()] = item.template;
        });
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
        (this.dataSource.data || []).forEach(function (row) {
            if (!expand) {
                _this.state.expandedRows.delete("" + row[_this.rowIdentifier]);
            }
            else {
                _this.state.expandedRows.add("" + row[_this.rowIdentifier]);
            }
        });
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
        (this.dataSource.data || []).forEach(function (row) {
            if (!selected) {
                _this.state.selectedRows.delete("" + row[_this.rowIdentifier]);
            }
            else {
                _this.state.selectedRows.set("" + row[_this.rowIdentifier], row);
            }
        });
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
            this.columns.forEach(function (column) {
                if (column.initialResizable) {
                    column.resizable = column.initialResizable.resizable;
                    column.width = column.initialResizable.width;
                    column.initialResizable = undefined;
                }
            });
            /** @type {?} */
            var resizableColumns_1 = this.displayedColumns.filter(function (name) {
                return (_this.columns.findIndex(function (column) {
                    return column.resizable && column.id === name;
                }) !== -1);
            });
            if (resizableColumns_1 && resizableColumns_1.length > 0) {
                /** @type {?} */
                var lastResizableColumn = this.columns.find(function (column) {
                    return column.id === resizableColumns_1[resizableColumns_1.length - 1];
                });
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
            this.columns.forEach(function (column) {
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
            });
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
        if (this.fixedHeader) {
            /** @type {?} */
            var top_1 = target.scrollTop;
            /** @type {?} */
            var header = target.querySelector('cdk-table > novo-data-table-header-row');
            if (header) {
                header.style.transform = "translateY(" + top_1 + "px)";
            }
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
                    template: "\n    <header\n      *ngIf=\"(!(dataSource?.totallyEmpty && !state.userFiltered) && !loading) || forceShowHeader\"\n      [class.empty]=\"hideGlobalSearch && !paginationOptions && !templates['customActions']\"\n    >\n      <ng-container *ngTemplateOutlet=\"templates['customHeader']\"></ng-container>\n      <novo-search\n        alwaysOpen=\"true\"\n        (searchChanged)=\"onSearchChange($event)\"\n        [(ngModel)]=\"state.globalSearch\"\n        *ngIf=\"!hideGlobalSearch\"\n        [placeholder]=\"searchOptions?.placeholder\"\n        [hint]=\"searchOptions?.tooltip\"\n      >\n      </novo-search>\n      <novo-data-table-pagination\n        *ngIf=\"paginationOptions\"\n        [theme]=\"paginationOptions.theme\"\n        [length]=\"dataSource?.currentTotal\"\n        [page]=\"paginationOptions.page\"\n        [pageSize]=\"paginationOptions.pageSize\"\n        [pageSizeOptions]=\"paginationOptions.pageSizeOptions\"\n      >\n      </novo-data-table-pagination>\n      <div class=\"novo-data-table-actions\" *ngIf=\"templates['customActions']\">\n        <ng-container *ngTemplateOutlet=\"templates['customActions']\"></ng-container>\n      </div>\n    </header>\n    <div class=\"novo-data-table-loading-mask\" *ngIf=\"dataSource?.loading || loading\" data-automation-id=\"novo-data-table-loading\">\n      <novo-loading></novo-loading>\n    </div>\n    <div class=\"novo-data-table-outside-container\" [ngClass]=\"{ 'novo-data-table-outside-container-fixed': fixedHeader }\">\n      <div class=\"novo-data-table-custom-filter\" *ngIf=\"customFilter\">\n        <ng-container *ngTemplateOutlet=\"templates['customFilter']\"></ng-container>\n      </div>\n      <div\n        #novoDataTableContainer\n        class=\"novo-data-table-container\"\n        [ngClass]=\"{ 'novo-data-table-container-fixed': fixedHeader }\"\n        [class.empty-user-filtered]=\"dataSource?.currentlyEmpty && state.userFiltered\"\n        [class.empty]=\"dataSource?.totallyEmpty && !dataSource?.loading && !loading && !state.userFiltered && !dataSource.pristine\"\n      >\n        <cdk-table\n          *ngIf=\"columns?.length > 0 && columnsLoaded && dataSource\"\n          [dataSource]=\"dataSource\"\n          [trackBy]=\"trackByFn\"\n          novoDataTableSortFilter\n          [class.expandable]=\"expandable\"\n          [class.empty]=\"dataSource?.currentlyEmpty && state.userFiltered\"\n          [hidden]=\"dataSource?.totallyEmpty && !state.userFiltered\"\n        >\n          <ng-container cdkColumnDef=\"selection\">\n            <novo-data-table-checkbox-header-cell *cdkHeaderCellDef></novo-data-table-checkbox-header-cell>\n            <novo-data-table-checkbox-cell *cdkCellDef=\"let row; let i = index\" [row]=\"row\"></novo-data-table-checkbox-cell>\n          </ng-container>\n          <ng-container cdkColumnDef=\"expand\">\n            <novo-data-table-expand-header-cell *cdkHeaderCellDef></novo-data-table-expand-header-cell>\n            <novo-data-table-expand-cell *cdkCellDef=\"let row; let i = index\" [row]=\"row\"></novo-data-table-expand-cell>\n          </ng-container>\n          <ng-container *ngFor=\"let column of columns; trackBy: trackColumnsBy\" [cdkColumnDef]=\"column.id\">\n            <novo-data-table-header-cell\n              *cdkHeaderCellDef\n              [column]=\"column\"\n              [filterTemplate]=\"templates['column-filter-' + column.id]\"\n              [novo-data-table-cell-config]=\"column\"\n              [resized]=\"resized\"\n              [defaultSort]=\"defaultSort\"\n              [allowMultipleFilters]=\"allowMultipleFilters\"\n              [class.empty]=\"column?.type === 'action' && !column?.label\"\n              [class.button-header-cell]=\"column?.type === 'expand' || (column?.type === 'action' && !column?.action?.options)\"\n              [class.dropdown-header-cell]=\"column?.type === 'action' && column?.action?.options\"\n            ></novo-data-table-header-cell>\n            <novo-data-table-cell\n              *cdkCellDef=\"let row\"\n              [resized]=\"resized\"\n              [column]=\"column\"\n              [row]=\"row\"\n              [template]=\"columnToTemplate[column.id]\"\n              [class.empty]=\"column?.type === 'action' && !column?.label\"\n              [class.button-cell]=\"column?.type === 'expand' || (column?.type === 'action' && !column?.action?.options)\"\n              [class.dropdown-cell]=\"column?.type === 'action' && column?.action?.options\"\n            ></novo-data-table-cell>\n          </ng-container>\n          <novo-data-table-header-row\n            *cdkHeaderRowDef=\"displayedColumns\"\n            data-automation-id=\"novo-data-table-header-row\"\n          ></novo-data-table-header-row>\n          <novo-data-table-row\n            *cdkRowDef=\"let row; columns: displayedColumns\"\n            [ngClass]=\"{ active: row[rowIdentifier] == activeRowIdentifier }\"\n            [novoDataTableExpand]=\"detailRowTemplate\"\n            [row]=\"row\"\n            [id]=\"name + '-' + row[rowIdentifier]\"\n            [dataAutomationId]=\"row[rowIdentifier]\"\n          ></novo-data-table-row>\n        </cdk-table>\n        <div class=\"novo-data-table-footer\" *ngIf=\"templates['footer']\">\n          <ng-container *ngTemplateOutlet=\"templates['footer']; context: { $implicit: columns, data: dataSource.data }\"></ng-container>\n        </div>\n        <div\n          class=\"novo-data-table-no-results-container\"\n          [style.left.px]=\"scrollLeft\"\n          *ngIf=\"dataSource?.currentlyEmpty && state.userFiltered && !dataSource?.loading && !loading && !dataSource.pristine\"\n        >\n          <div class=\"novo-data-table-empty-message\">\n            <ng-container *ngTemplateOutlet=\"templates['noResultsMessage'] || templates['defaultNoResultsMessage']\"></ng-container>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"novo-data-table-empty-container\"\n        *ngIf=\"dataSource?.totallyEmpty && !dataSource?.loading && !loading && !state.userFiltered && !dataSource.pristine\"\n      >\n        <div class=\"novo-data-table-empty-message\">\n          <ng-container *ngTemplateOutlet=\"templates['emptyMessage'] || templates['defaultNoResultsMessage']\"></ng-container>\n        </div>\n      </div>\n    </div>\n    <!-- DEFAULT CELL TEMPLATE -->\n    <ng-template novoTemplate=\"textCellTemplate\" let-row let-col=\"col\">\n      <span [style.width.px]=\"col?.width\" [style.min-width.px]=\"col?.width\" [style.max-width.px]=\"col?.width\">{{\n        row[col.id] | dataTableInterpolate: col\n      }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"dateCellTemplate\" let-row let-col=\"col\">\n      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableDateRenderer: col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"datetimeCellTemplate\" let-row let-col=\"col\">\n      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableDateTimeRenderer: col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"timeCellTemplate\" let-row let-col=\"col\">\n      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableTimeRenderer: col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"currencyCellTemplate\" let-row let-col=\"col\">\n      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableCurrencyRenderer: col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"numberCellTemplate\" let-row let-col=\"col\">\n      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableNumberRenderer: col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"percentCellTemplate\" let-row let-col=\"col\">\n      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableNumberRenderer: col:true }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"linkCellTemplate\" let-row let-col=\"col\">\n      <a\n        (click)=\"col.handlers?.click({ originalEvent: $event, row: row })\"\n        [style.width.px]=\"col?.width\"\n        [style.min-width.px]=\"col?.width\"\n        [style.max-width.px]=\"col?.width\"\n        >{{ row[col.id] | dataTableInterpolate: col }}</a\n      >\n    </ng-template>\n    <ng-template novoTemplate=\"telCellTemplate\" let-row let-col=\"col\">\n      <a href=\"tel:{{ row[col.id] | dataTableInterpolate: col }}\" [target]=\"col?.attributes?.target\">{{\n        row[col.id] | dataTableInterpolate: col\n      }}</a>\n    </ng-template>\n    <ng-template novoTemplate=\"mailtoCellTemplate\" let-row let-col=\"col\">\n      <a href=\"mailto:{{ row[col.id] | dataTableInterpolate: col }}\" [target]=\"col?.attributes?.target\">{{\n        row[col.id] | dataTableInterpolate: col\n      }}</a>\n    </ng-template>\n    <ng-template novoTemplate=\"buttonCellTemplate\" let-row let-col=\"col\">\n      <p [tooltip]=\"col?.action?.tooltip\" tooltipPosition=\"right\">\n        <i\n          class=\"bhi-{{ col?.action?.icon }} data-table-icon\"\n          (click)=\"col.handlers?.click({ originalEvent: $event, row: row })\"\n          [class.disabled]=\"isDisabled(col, row)\"\n        ></i>\n      </p>\n    </ng-template>\n    <ng-template novoTemplate=\"dropdownCellTemplate\" let-row let-col=\"col\">\n      <novo-dropdown parentScrollSelector=\".novo-data-table-container\" containerClass=\"novo-data-table-dropdown\">\n        <button type=\"button\" theme=\"dialogue\" icon=\"collapse\" inverse>{{ col.label }}</button>\n        <list>\n          <item\n            *ngFor=\"let option of col?.action?.options\"\n            (action)=\"option.handlers.click({ originalEvent: $event?.originalEvent, row: row })\"\n            [disabled]=\"isDisabled(option, row)\"\n          >\n            <span [attr.data-automation-id]=\"option.label\">{{ option.label }}</span>\n          </item>\n        </list>\n      </novo-dropdown>\n    </ng-template>\n    <ng-template novoTemplate=\"defaultNoResultsMessage\">\n      <h4><i class=\"bhi-search-question\"></i> {{ labels.noMatchingRecordsMessage }}</h4>\n    </ng-template>\n    <ng-template novoTemplate=\"defaultEmptyMessage\">\n      <h4><i class=\"bhi-search-question\"></i> {{ labels.emptyTableMessage }}</h4>\n    </ng-template>\n    <ng-template novoTemplate=\"expandedRow\"> You did not provide an \"expandedRow\" template! </ng-template>\n    <ng-template #detailRowTemplate let-row>\n      <div class=\"novo-data-table-detail-row\" [@expand] style=\"overflow: hidden\">\n        <ng-container *ngTemplateOutlet=\"templates['expandedRow']; context: { $implicit: row }\"></ng-container>\n      </div>\n    </ng-template>\n    <!-- CUSTOM CELLS PASSED IN -->\n    <ng-content></ng-content>\n  ",
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
        novoDataTableContainer: [{ type: ViewChild, args: ['novoDataTableContainer',] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUVaLGlCQUFpQixFQUVqQixlQUFlLEVBQ2YsU0FBUyxFQUNULFlBQVksRUFFWixVQUFVLEVBQ1YsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTlELE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxJQUFJLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBUzlGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQUU5RTtJQTZZRSx1QkFBbUIsTUFBd0IsRUFBVSxHQUFzQixFQUFTLEtBQXdCO1FBQTVHLGlCQWdCQztRQWhCa0IsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFTLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBeEw1RyxrQ0FBNkIsR0FBWSxLQUFLLENBQUM7UUFTL0MsWUFBTyxHQUFzQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBbUNoRSxTQUFJLEdBQVcsaUJBQWlCLENBQUM7UUFFakMseUJBQW9CLEdBQVksS0FBSyxDQUFDO1FBRXRDLGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBRTdCLHdCQUFtQixHQUFXLEVBQUUsQ0FBQzs7UUFHakMsY0FBUyxHQUFhLFVBQUMsS0FBSyxFQUFFLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxFQUFFLEVBQVAsQ0FBTyxDQUFBO1FBRTlDLGNBQVMsR0FBd0MsRUFBRSxDQUFDO1FBRXBELGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBZ0dyQixzQkFBaUIsR0FBWSxJQUFJLENBQUM7UUFHMUMsdUJBQWtCLEdBQXdDLElBQUksWUFBWSxFQUF5QixDQUFDO1FBRzdGLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIscUJBQWdCLEdBQXdDLEVBQUUsQ0FBQztRQUMzRCxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixjQUFTLEdBQWdCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDbkMsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBUTNCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBYW5DLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFzRDtZQUN6SCxJQUFJLEtBQUksQ0FBQyxJQUFJLEtBQUssaUJBQWlCLEVBQUU7Z0JBQ25DLElBQUksS0FBSyxDQUFDLGdCQUFnQixFQUFFO29CQUMxQixLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2lCQUM3RTthQUNGO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO2FBQ2xFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO1lBQ3hELFVBQVUsQ0FBQztnQkFDVCxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzNCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTdMRCxzQkFDSSwyQ0FBZ0I7Ozs7UUFvQnBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDL0IsQ0FBQzs7Ozs7UUF2QkQsVUFDcUIsZ0JBQTBCO1lBRC9DLGlCQW1CQztZQWpCQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDL0QsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGlCQUFpQixFQUFFO29CQUNuQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO3dCQUMzQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7d0JBQ2YsZ0JBQWdCLEVBQUUsZ0JBQWdCO3FCQUNuQyxDQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLHdEQUF3RCxDQUFDLENBQUM7aUJBQ2xFO2FBQ0Y7WUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7WUFDekMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7WUFDcEMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixVQUFVLENBQUM7b0JBQ1QsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN4QixDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQzs7O09BQUE7SUE2QkQsc0JBQ0ksMkNBQWdCOzs7OztRQURwQixVQUNxQixPQUE2QjtZQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNaLE9BQU8sR0FBRyxJQUFJLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzFDO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBSSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLCtCQUFJOzs7OztRQURSLFVBQ1MsSUFBUztZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs7Z0JBQ2pCLE9BQU8sR0FBRyxJQUFJLHNCQUFzQixDQUFDLElBQUksQ0FBQztZQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksZUFBZSxDQUFJLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksd0NBQWE7Ozs7O1FBRGpCLFVBQ2tCLGFBQWdDO1lBRGxELGlCQWNDO1lBWkMsY0FBYztZQUNkLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO2dCQUNsQyxJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDOUM7WUFDRCxJQUFJLGFBQWEsRUFBRTtnQkFDakIsZUFBZTtnQkFDZixJQUFJLENBQUMseUJBQXlCLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQVc7b0JBQ25FLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztvQkFDbEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUNySCxLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUMxQixDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSx5Q0FBYzs7Ozs7UUFEbEIsVUFDbUIsY0FBaUM7WUFEcEQsaUJBY0M7WUFaQyxjQUFjO1lBQ2QsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN4QztZQUNELElBQUksY0FBYyxFQUFFO2dCQUNsQixlQUFlO2dCQUNmLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBVztvQkFDOUQsS0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO29CQUNqQyxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQ3JILEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzFCLENBQUMsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDOzs7T0FBQTtJQUVELHNCQUNJLGtDQUFPOzs7O1FBSVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFQRCxVQUNZLE9BQThCO1lBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBS0Qsc0JBQ0ksdUNBQVk7Ozs7UUFHaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7Ozs7UUFORCxVQUNpQixDQUFVO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7SUFNRCxzQkFDSSx5Q0FBYzs7OztRQUdsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM5QixDQUFDOzs7OztRQU5ELFVBQ21CLENBQVU7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLDBDQUFlOzs7O1FBR25CO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDL0IsQ0FBQzs7Ozs7UUFORCxVQUNvQixDQUFVO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLDJDQUFnQjs7OztRQUlwQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2hDLENBQUM7Ozs7O1FBUEQsVUFDcUIsQ0FBVTtZQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUM5RCxDQUFDOzs7T0FBQTtJQXlCRCxzQkFDSSxnQ0FBSzs7OztRQURUO1lBRUUsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQ3pELENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksdUNBQVk7Ozs7UUFEaEI7WUFFRSxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEUsQ0FBQzs7O09BQUE7Ozs7SUFvQk0sbUNBQVc7OztJQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM5QztRQUNELElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLENBQUMsbUJBQUEsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsRUFBVyxDQUFDLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ2xIO1FBQ0QsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7OztJQUVNLDBDQUFrQjs7O0lBQXpCO1FBQUEsaUJBc0NDO1FBckNDLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7WUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVEO1FBRUQsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ2pDLDRDQUE0QztZQUM1QyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTtnQkFDbkMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ2hEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCw2QkFBNkI7UUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ2hDLCtDQUErQztZQUMvQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7UUFDSCxlQUFlO1FBQ2YsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFeEIsUUFBUTtRQUNSLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRTtZQUMxRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRTtZQUM5RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUN0QztRQUNELElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRTtZQUNyRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDNUQ7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNuRixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUUzRix5QkFBeUI7UUFDekIsQ0FBQyxtQkFBQSxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxFQUFXLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFOUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVNLHNDQUFjOzs7O0lBQXJCLFVBQXNCLElBQVk7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7Ozs7OztJQUVNLHNDQUFjOzs7OztJQUFyQixVQUFzQixLQUFhLEVBQUUsSUFBeUI7UUFDNUQsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7OztJQUVNLGtDQUFVOzs7OztJQUFqQixVQUFrQixLQUFVLEVBQUUsR0FBTTtRQUNsQyxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7WUFDdEIsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVNLGtDQUFVOzs7O0lBQWpCLFVBQWtCLEdBQU07UUFDdEIsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFHLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7OztJQUVNLGlDQUFTOzs7O0lBQWhCLFVBQWlCLEdBQU07O1lBQ2pCLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUVuQyxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFHLENBQUMsQ0FBQztTQUM5RDthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUcsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxtQkFBQSxDQUFDLG1CQUFBLEdBQUcsRUFBVyxDQUFDLEVBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7OztJQUVNLGtDQUFVOzs7O0lBQWpCLFVBQWtCLE1BQWU7UUFBakMsaUJBU0M7UUFSQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQU07WUFDMUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxLQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBRyxHQUFHLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBRyxDQUFDLENBQUM7YUFDOUQ7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUcsQ0FBQyxDQUFDO2FBQzNEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFTSw4Q0FBc0I7OztJQUE3QjtRQUNFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTSxrQ0FBVTs7OztJQUFqQixVQUFrQixHQUFNO1FBQ3RCLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBRyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7SUFFTSxpQ0FBUzs7OztJQUFoQixVQUFpQixHQUFNOztZQUNqQixRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFFbkMsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBRyxDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDaEU7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFTSxrQ0FBVTs7OztJQUFqQixVQUFrQixRQUFpQjtRQUFuQyxpQkFTQztRQVJDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBTTtZQUMxQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNiLEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFHLEdBQUcsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFHLENBQUMsQ0FBQzthQUM5RDtpQkFBTTtnQkFDTCxLQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBRyxHQUFHLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ2hFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDakMsQ0FBQzs7OztJQUVNLDhDQUFzQjs7O0lBQTdCO1FBQ0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckQsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVPLG9EQUE0Qjs7OztJQUFwQztRQUFBLGlCQWdDQztRQS9CQyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtZQUM1RyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQTJCO2dCQUMvQyxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDM0IsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO29CQUNyRCxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7b0JBQzdDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7aUJBQ3JDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7O2dCQUNHLGtCQUFnQixHQUFhLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQzdELFVBQUMsSUFBWTtnQkFDWCxPQUFPLENBQ0wsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQ3BCLFVBQUMsTUFBMkI7b0JBQzFCLE9BQU8sTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQztnQkFDaEQsQ0FBQyxDQUNGLEtBQUssQ0FBQyxDQUFDLENBQ1QsQ0FBQztZQUNKLENBQUMsQ0FDRjtZQUNELElBQUksa0JBQWdCLElBQUksa0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7b0JBQzdDLG1CQUFtQixHQUF3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQTJCO29CQUM3RixPQUFPLE1BQU0sQ0FBQyxFQUFFLEtBQUssa0JBQWdCLENBQUMsa0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNyRSxDQUFDLENBQUM7Z0JBQ0YsbUJBQW1CLENBQUMsZ0JBQWdCLEdBQUc7b0JBQ3JDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQyxTQUFTO29CQUN4QyxLQUFLLEVBQUUsbUJBQW1CLENBQUMsS0FBSztpQkFDakMsQ0FBQztnQkFDRixtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO2dCQUN0QyxtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3ZDO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVPLHdDQUFnQjs7OztJQUF4QjtRQUFBLGlCQWlDQztRQWhDQyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekYsOEJBQThCO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBMkI7OztvQkFFM0MsWUFBb0I7Z0JBQ3hCLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtvQkFDbkIseUJBQXlCO29CQUN6QixZQUFZLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztpQkFDaEM7cUJBQU0sSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQ3RDLG9DQUFvQztvQkFDcEMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7aUJBQzFCO3FCQUFNO29CQUNMLG9DQUFvQztvQkFDcEMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTt3QkFDNUIsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFOzRCQUMxQyxZQUFZLEdBQUcsc0JBQXNCLENBQUM7eUJBQ3ZDOzZCQUFNOzRCQUNMLFlBQVksR0FBRyxvQkFBb0IsQ0FBQzt5QkFDckM7cUJBQ0Y7eUJBQU07d0JBQ0wsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFVBQVUsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLGFBQWEsRUFBRTs0QkFDL0QsWUFBWSxHQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBYyxDQUFDO3lCQUMzRDs2QkFBTTs0QkFDTCxZQUFZLEdBQU0sTUFBTSxDQUFDLElBQUksaUJBQWMsQ0FBQzt5QkFDN0M7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2xFLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7OztJQUVPLHNDQUFjOzs7O0lBQXRCOztZQUNRLE1BQU0sR0FBWSxtQkFBQSxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxFQUFXOztZQUN4RSxJQUFJLEdBQVcsTUFBTSxDQUFDLFVBQVU7UUFDcEMsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7U0FDckM7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7O2dCQUNkLEtBQUcsR0FBVyxNQUFNLENBQUMsU0FBUzs7Z0JBQzlCLE1BQU0sR0FBUSxNQUFNLENBQUMsYUFBYSxDQUFDLHdDQUF3QyxDQUFDO1lBQ2xGLElBQUksTUFBTSxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGdCQUFjLEtBQUcsUUFBSyxDQUFDO2FBQ2pEO1NBQ0Y7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7O2dCQXpvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsUUFBUSxFQUFFOzRCQUNoQixTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQzs0QkFDakYsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDOzRCQUM3RCxVQUFVLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO3lCQUN6RSxDQUFDO3FCQUNIO29CQUNELFFBQVEsRUFBRSxrOFVBc01UO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7aUJBQzVCOzs7O2dCQXhOUSxnQkFBZ0I7Z0JBckJ2QixpQkFBaUI7Z0JBc0JWLGNBQWM7OztnREF5TnBCLFdBQVcsU0FBQyw0QkFBNEI7a0NBR3hDLGVBQWUsU0FBQyxZQUFZO21DQUU1QixZQUFZLFNBQUMsWUFBWTt5Q0FFekIsU0FBUyxTQUFDLHdCQUF3QjswQkFFbEMsTUFBTTttQ0FHTixLQUFLO29DQTBCTCxLQUFLO2dDQUVMLEtBQUs7OEJBRUwsS0FBSzt1QkFFTCxLQUFLO3VDQUVMLEtBQUs7Z0NBRUwsS0FBSztzQ0FFTCxLQUFLOzRCQUdMLEtBQUs7NEJBRUwsS0FBSzs4QkFFTCxLQUFLO21DQUdMLEtBQUs7dUJBVUwsS0FBSztnQ0FRTCxLQUFLO2lDQWdCTCxLQUFLOzBCQWdCTCxLQUFLOytCQVNMLEtBQUs7aUNBU0wsS0FBSztrQ0FTTCxLQUFLO21DQVNMLEtBQUs7cUNBVUwsTUFBTTt3QkFtQk4sV0FBVyxTQUFDLGFBQWE7K0JBS3pCLFdBQVcsU0FBQyxlQUFlOztJQWtROUIsb0JBQUM7Q0FBQSxBQTFvQkQsSUEwb0JDO1NBdmJZLGFBQWE7OztJQUN4QixzREFDK0M7O0lBRS9DLHdDQUN5Qzs7SUFDekMseUNBQzBDOztJQUMxQywrQ0FDbUM7O0lBQ25DLGdDQUNnRTs7Ozs7SUEwQmhFLHlDQUFtQzs7SUFFbkMsMENBQytDOztJQUMvQyxzQ0FDdUM7O0lBQ3ZDLG9DQUMyQzs7SUFDM0MsNkJBQ2lDOztJQUNqQyw2Q0FDc0M7O0lBQ3RDLHNDQUM2Qjs7SUFDN0IsNENBQ2lDOztJQUVqQyxrQ0FDOEM7O0lBQzlDLGtDQUNvRDs7SUFDcEQsb0NBQzZCOzs7OztJQW9FN0Isc0NBQStCOzs7OztJQVMvQix3Q0FBaUM7Ozs7O0lBU2pDLHlDQUFrQzs7Ozs7SUFVbEMsMENBQTBDOztJQUUxQywyQ0FDb0c7O0lBRXBHLG1DQUFzQzs7SUFDdEMsZ0NBQStCOztJQUMvQix5Q0FBa0U7O0lBQ2xFLHNDQUFzQzs7SUFDdEMsa0NBQTBDOztJQUMxQyxtQ0FBOEI7O0lBQzlCLG1DQUFtQzs7Ozs7SUFFbkMsa0RBQWdEOzs7OztJQUNoRCw0Q0FBMEM7Ozs7O0lBQzFDLDBDQUF3Qzs7Ozs7SUFDeEMsK0NBQTZDOzs7OztJQUM3QyxpQ0FBd0M7Ozs7O0lBQ3hDLDhDQUFtQzs7Ozs7SUFDbkMsb0NBQXFDOztJQVl6QiwrQkFBK0I7Ozs7O0lBQUUsNEJBQThCOztJQUFFLDhCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkRlc3Ryb3ksXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGRyZW4sXG4gIFRlbXBsYXRlUmVmLFxuICBFbGVtZW50UmVmLFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUgYXMgYW5pbVN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQge1xuICBJRGF0YVRhYmxlQ29sdW1uLFxuICBJRGF0YVRhYmxlUGFnaW5hdGlvbk9wdGlvbnMsXG4gIElEYXRhVGFibGVTZWFyY2hPcHRpb25zLFxuICBJRGF0YVRhYmxlU2VydmljZSxcbiAgSURhdGFUYWJsZVByZWZlcmVuY2VzLFxufSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgRGF0YVRhYmxlU291cmNlIH0gZnJvbSAnLi9kYXRhLXRhYmxlLnNvdXJjZSc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZS9kYXRhLXRhYmxlLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b1RlbXBsYXRlIH0gZnJvbSAnLi4vY29tbW9uL25vdm8tdGVtcGxhdGUvbm92by10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG5pbXBvcnQgeyBTdGF0aWNEYXRhVGFibGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zdGF0aWMtZGF0YS10YWJsZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRhLXRhYmxlJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2V4cGFuZCcsIFtcbiAgICAgIGFuaW1TdGF0ZSgndm9pZCcsIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JywgbWluSGVpZ2h0OiAnMCcsIHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pKSxcbiAgICAgIGFuaW1TdGF0ZSgnKicsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIHZpc2liaWxpdHk6ICd2aXNpYmxlJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkIDw9PiAqJywgYW5pbWF0ZSgnNzBtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSknKSksXG4gICAgXSksXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGhlYWRlclxuICAgICAgKm5nSWY9XCIoIShkYXRhU291cmNlPy50b3RhbGx5RW1wdHkgJiYgIXN0YXRlLnVzZXJGaWx0ZXJlZCkgJiYgIWxvYWRpbmcpIHx8IGZvcmNlU2hvd0hlYWRlclwiXG4gICAgICBbY2xhc3MuZW1wdHldPVwiaGlkZUdsb2JhbFNlYXJjaCAmJiAhcGFnaW5hdGlvbk9wdGlvbnMgJiYgIXRlbXBsYXRlc1snY3VzdG9tQWN0aW9ucyddXCJcbiAgICA+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydjdXN0b21IZWFkZXInXVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPG5vdm8tc2VhcmNoXG4gICAgICAgIGFsd2F5c09wZW49XCJ0cnVlXCJcbiAgICAgICAgKHNlYXJjaENoYW5nZWQpPVwib25TZWFyY2hDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwic3RhdGUuZ2xvYmFsU2VhcmNoXCJcbiAgICAgICAgKm5nSWY9XCIhaGlkZUdsb2JhbFNlYXJjaFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJzZWFyY2hPcHRpb25zPy5wbGFjZWhvbGRlclwiXG4gICAgICAgIFtoaW50XT1cInNlYXJjaE9wdGlvbnM/LnRvb2x0aXBcIlxuICAgICAgPlxuICAgICAgPC9ub3ZvLXNlYXJjaD5cbiAgICAgIDxub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvblxuICAgICAgICAqbmdJZj1cInBhZ2luYXRpb25PcHRpb25zXCJcbiAgICAgICAgW3RoZW1lXT1cInBhZ2luYXRpb25PcHRpb25zLnRoZW1lXCJcbiAgICAgICAgW2xlbmd0aF09XCJkYXRhU291cmNlPy5jdXJyZW50VG90YWxcIlxuICAgICAgICBbcGFnZV09XCJwYWdpbmF0aW9uT3B0aW9ucy5wYWdlXCJcbiAgICAgICAgW3BhZ2VTaXplXT1cInBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplXCJcbiAgICAgICAgW3BhZ2VTaXplT3B0aW9uc109XCJwYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZU9wdGlvbnNcIlxuICAgICAgPlxuICAgICAgPC9ub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtYWN0aW9uc1wiICpuZ0lmPVwidGVtcGxhdGVzWydjdXN0b21BY3Rpb25zJ11cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlc1snY3VzdG9tQWN0aW9ucyddXCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWxvYWRpbmctbWFza1wiICpuZ0lmPVwiZGF0YVNvdXJjZT8ubG9hZGluZyB8fCBsb2FkaW5nXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWxvYWRpbmdcIj5cbiAgICAgIDxub3ZvLWxvYWRpbmc+PC9ub3ZvLWxvYWRpbmc+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1vdXRzaWRlLWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInsgJ25vdm8tZGF0YS10YWJsZS1vdXRzaWRlLWNvbnRhaW5lci1maXhlZCc6IGZpeGVkSGVhZGVyIH1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtY3VzdG9tLWZpbHRlclwiICpuZ0lmPVwiY3VzdG9tRmlsdGVyXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbJ2N1c3RvbUZpbHRlciddXCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgI25vdm9EYXRhVGFibGVDb250YWluZXJcbiAgICAgICAgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtY29udGFpbmVyXCJcbiAgICAgICAgW25nQ2xhc3NdPVwieyAnbm92by1kYXRhLXRhYmxlLWNvbnRhaW5lci1maXhlZCc6IGZpeGVkSGVhZGVyIH1cIlxuICAgICAgICBbY2xhc3MuZW1wdHktdXNlci1maWx0ZXJlZF09XCJkYXRhU291cmNlPy5jdXJyZW50bHlFbXB0eSAmJiBzdGF0ZS51c2VyRmlsdGVyZWRcIlxuICAgICAgICBbY2xhc3MuZW1wdHldPVwiZGF0YVNvdXJjZT8udG90YWxseUVtcHR5ICYmICFkYXRhU291cmNlPy5sb2FkaW5nICYmICFsb2FkaW5nICYmICFzdGF0ZS51c2VyRmlsdGVyZWQgJiYgIWRhdGFTb3VyY2UucHJpc3RpbmVcIlxuICAgICAgPlxuICAgICAgICA8Y2RrLXRhYmxlXG4gICAgICAgICAgKm5nSWY9XCJjb2x1bW5zPy5sZW5ndGggPiAwICYmIGNvbHVtbnNMb2FkZWQgJiYgZGF0YVNvdXJjZVwiXG4gICAgICAgICAgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiXG4gICAgICAgICAgW3RyYWNrQnldPVwidHJhY2tCeUZuXCJcbiAgICAgICAgICBub3ZvRGF0YVRhYmxlU29ydEZpbHRlclxuICAgICAgICAgIFtjbGFzcy5leHBhbmRhYmxlXT1cImV4cGFuZGFibGVcIlxuICAgICAgICAgIFtjbGFzcy5lbXB0eV09XCJkYXRhU291cmNlPy5jdXJyZW50bHlFbXB0eSAmJiBzdGF0ZS51c2VyRmlsdGVyZWRcIlxuICAgICAgICAgIFtoaWRkZW5dPVwiZGF0YVNvdXJjZT8udG90YWxseUVtcHR5ICYmICFzdGF0ZS51c2VyRmlsdGVyZWRcIlxuICAgICAgICA+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciBjZGtDb2x1bW5EZWY9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICAgIDxub3ZvLWRhdGEtdGFibGUtY2hlY2tib3gtaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+PC9ub3ZvLWRhdGEtdGFibGUtY2hlY2tib3gtaGVhZGVyLWNlbGw+XG4gICAgICAgICAgICA8bm92by1kYXRhLXRhYmxlLWNoZWNrYm94LWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgcm93OyBsZXQgaSA9IGluZGV4XCIgW3Jvd109XCJyb3dcIj48L25vdm8tZGF0YS10YWJsZS1jaGVja2JveC1jZWxsPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwiZXhwYW5kXCI+XG4gICAgICAgICAgICA8bm92by1kYXRhLXRhYmxlLWV4cGFuZC1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj48L25vdm8tZGF0YS10YWJsZS1leHBhbmQtaGVhZGVyLWNlbGw+XG4gICAgICAgICAgICA8bm92by1kYXRhLXRhYmxlLWV4cGFuZC1jZWxsICpjZGtDZWxsRGVmPVwibGV0IHJvdzsgbGV0IGkgPSBpbmRleFwiIFtyb3ddPVwicm93XCI+PC9ub3ZvLWRhdGEtdGFibGUtZXhwYW5kLWNlbGw+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnM7IHRyYWNrQnk6IHRyYWNrQ29sdW1uc0J5XCIgW2Nka0NvbHVtbkRlZl09XCJjb2x1bW4uaWRcIj5cbiAgICAgICAgICAgIDxub3ZvLWRhdGEtdGFibGUtaGVhZGVyLWNlbGxcbiAgICAgICAgICAgICAgKmNka0hlYWRlckNlbGxEZWZcbiAgICAgICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxuICAgICAgICAgICAgICBbZmlsdGVyVGVtcGxhdGVdPVwidGVtcGxhdGVzWydjb2x1bW4tZmlsdGVyLScgKyBjb2x1bW4uaWRdXCJcbiAgICAgICAgICAgICAgW25vdm8tZGF0YS10YWJsZS1jZWxsLWNvbmZpZ109XCJjb2x1bW5cIlxuICAgICAgICAgICAgICBbcmVzaXplZF09XCJyZXNpemVkXCJcbiAgICAgICAgICAgICAgW2RlZmF1bHRTb3J0XT1cImRlZmF1bHRTb3J0XCJcbiAgICAgICAgICAgICAgW2FsbG93TXVsdGlwbGVGaWx0ZXJzXT1cImFsbG93TXVsdGlwbGVGaWx0ZXJzXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmVtcHR5XT1cImNvbHVtbj8udHlwZSA9PT0gJ2FjdGlvbicgJiYgIWNvbHVtbj8ubGFiZWxcIlxuICAgICAgICAgICAgICBbY2xhc3MuYnV0dG9uLWhlYWRlci1jZWxsXT1cImNvbHVtbj8udHlwZSA9PT0gJ2V4cGFuZCcgfHwgKGNvbHVtbj8udHlwZSA9PT0gJ2FjdGlvbicgJiYgIWNvbHVtbj8uYWN0aW9uPy5vcHRpb25zKVwiXG4gICAgICAgICAgICAgIFtjbGFzcy5kcm9wZG93bi1oZWFkZXItY2VsbF09XCJjb2x1bW4/LnR5cGUgPT09ICdhY3Rpb24nICYmIGNvbHVtbj8uYWN0aW9uPy5vcHRpb25zXCJcbiAgICAgICAgICAgID48L25vdm8tZGF0YS10YWJsZS1oZWFkZXItY2VsbD5cbiAgICAgICAgICAgIDxub3ZvLWRhdGEtdGFibGUtY2VsbFxuICAgICAgICAgICAgICAqY2RrQ2VsbERlZj1cImxldCByb3dcIlxuICAgICAgICAgICAgICBbcmVzaXplZF09XCJyZXNpemVkXCJcbiAgICAgICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxuICAgICAgICAgICAgICBbcm93XT1cInJvd1wiXG4gICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJjb2x1bW5Ub1RlbXBsYXRlW2NvbHVtbi5pZF1cIlxuICAgICAgICAgICAgICBbY2xhc3MuZW1wdHldPVwiY29sdW1uPy50eXBlID09PSAnYWN0aW9uJyAmJiAhY29sdW1uPy5sYWJlbFwiXG4gICAgICAgICAgICAgIFtjbGFzcy5idXR0b24tY2VsbF09XCJjb2x1bW4/LnR5cGUgPT09ICdleHBhbmQnIHx8IChjb2x1bW4/LnR5cGUgPT09ICdhY3Rpb24nICYmICFjb2x1bW4/LmFjdGlvbj8ub3B0aW9ucylcIlxuICAgICAgICAgICAgICBbY2xhc3MuZHJvcGRvd24tY2VsbF09XCJjb2x1bW4/LnR5cGUgPT09ICdhY3Rpb24nICYmIGNvbHVtbj8uYWN0aW9uPy5vcHRpb25zXCJcbiAgICAgICAgICAgID48L25vdm8tZGF0YS10YWJsZS1jZWxsPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxub3ZvLWRhdGEtdGFibGUtaGVhZGVyLXJvd1xuICAgICAgICAgICAgKmNka0hlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIlxuICAgICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWhlYWRlci1yb3dcIlxuICAgICAgICAgID48L25vdm8tZGF0YS10YWJsZS1oZWFkZXItcm93PlxuICAgICAgICAgIDxub3ZvLWRhdGEtdGFibGUtcm93XG4gICAgICAgICAgICAqY2RrUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1uc1wiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7IGFjdGl2ZTogcm93W3Jvd0lkZW50aWZpZXJdID09IGFjdGl2ZVJvd0lkZW50aWZpZXIgfVwiXG4gICAgICAgICAgICBbbm92b0RhdGFUYWJsZUV4cGFuZF09XCJkZXRhaWxSb3dUZW1wbGF0ZVwiXG4gICAgICAgICAgICBbcm93XT1cInJvd1wiXG4gICAgICAgICAgICBbaWRdPVwibmFtZSArICctJyArIHJvd1tyb3dJZGVudGlmaWVyXVwiXG4gICAgICAgICAgICBbZGF0YUF1dG9tYXRpb25JZF09XCJyb3dbcm93SWRlbnRpZmllcl1cIlxuICAgICAgICAgID48L25vdm8tZGF0YS10YWJsZS1yb3c+XG4gICAgICAgIDwvY2RrLXRhYmxlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWZvb3RlclwiICpuZ0lmPVwidGVtcGxhdGVzWydmb290ZXInXVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbJ2Zvb3RlciddOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29sdW1ucywgZGF0YTogZGF0YVNvdXJjZS5kYXRhIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1uby1yZXN1bHRzLWNvbnRhaW5lclwiXG4gICAgICAgICAgW3N0eWxlLmxlZnQucHhdPVwic2Nyb2xsTGVmdFwiXG4gICAgICAgICAgKm5nSWY9XCJkYXRhU291cmNlPy5jdXJyZW50bHlFbXB0eSAmJiBzdGF0ZS51c2VyRmlsdGVyZWQgJiYgIWRhdGFTb3VyY2U/LmxvYWRpbmcgJiYgIWxvYWRpbmcgJiYgIWRhdGFTb3VyY2UucHJpc3RpbmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1lbXB0eS1tZXNzYWdlXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydub1Jlc3VsdHNNZXNzYWdlJ10gfHwgdGVtcGxhdGVzWydkZWZhdWx0Tm9SZXN1bHRzTWVzc2FnZSddXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWVtcHR5LWNvbnRhaW5lclwiXG4gICAgICAgICpuZ0lmPVwiZGF0YVNvdXJjZT8udG90YWxseUVtcHR5ICYmICFkYXRhU291cmNlPy5sb2FkaW5nICYmICFsb2FkaW5nICYmICFzdGF0ZS51c2VyRmlsdGVyZWQgJiYgIWRhdGFTb3VyY2UucHJpc3RpbmVcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWVtcHR5LW1lc3NhZ2VcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydlbXB0eU1lc3NhZ2UnXSB8fCB0ZW1wbGF0ZXNbJ2RlZmF1bHROb1Jlc3VsdHNNZXNzYWdlJ11cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8IS0tIERFRkFVTFQgQ0VMTCBURU1QTEFURSAtLT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwidGV4dENlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHNwYW4gW3N0eWxlLndpZHRoLnB4XT1cImNvbD8ud2lkdGhcIiBbc3R5bGUubWluLXdpZHRoLnB4XT1cImNvbD8ud2lkdGhcIiBbc3R5bGUubWF4LXdpZHRoLnB4XT1cImNvbD8ud2lkdGhcIj57e1xuICAgICAgICByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2xcbiAgICAgIH19PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImRhdGVDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxzcGFuPnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbCB8IGRhdGFUYWJsZURhdGVSZW5kZXJlcjogY29sIH19PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImRhdGV0aW1lQ2VsbFRlbXBsYXRlXCIgbGV0LXJvdyBsZXQtY29sPVwiY29sXCI+XG4gICAgICA8c3Bhbj57eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2wgfCBkYXRhVGFibGVEYXRlVGltZVJlbmRlcmVyOiBjb2wgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwidGltZUNlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHNwYW4+e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTogY29sIHwgZGF0YVRhYmxlVGltZVJlbmRlcmVyOiBjb2wgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiY3VycmVuY3lDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxzcGFuPnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbCB8IGRhdGFUYWJsZUN1cnJlbmN5UmVuZGVyZXI6IGNvbCB9fTwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJudW1iZXJDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxzcGFuPnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbCB8IGRhdGFUYWJsZU51bWJlclJlbmRlcmVyOiBjb2wgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwicGVyY2VudENlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHNwYW4+e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTogY29sIHwgZGF0YVRhYmxlTnVtYmVyUmVuZGVyZXI6IGNvbDp0cnVlIH19PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImxpbmtDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxhXG4gICAgICAgIChjbGljayk9XCJjb2wuaGFuZGxlcnM/LmNsaWNrKHsgb3JpZ2luYWxFdmVudDogJGV2ZW50LCByb3c6IHJvdyB9KVwiXG4gICAgICAgIFtzdHlsZS53aWR0aC5weF09XCJjb2w/LndpZHRoXCJcbiAgICAgICAgW3N0eWxlLm1pbi13aWR0aC5weF09XCJjb2w/LndpZHRoXCJcbiAgICAgICAgW3N0eWxlLm1heC13aWR0aC5weF09XCJjb2w/LndpZHRoXCJcbiAgICAgICAgPnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbCB9fTwvYVxuICAgICAgPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cInRlbENlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPGEgaHJlZj1cInRlbDp7eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2wgfX1cIiBbdGFyZ2V0XT1cImNvbD8uYXR0cmlidXRlcz8udGFyZ2V0XCI+e3tcbiAgICAgICAgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTogY29sXG4gICAgICB9fTwvYT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJtYWlsdG9DZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxhIGhyZWY9XCJtYWlsdG86e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTogY29sIH19XCIgW3RhcmdldF09XCJjb2w/LmF0dHJpYnV0ZXM/LnRhcmdldFwiPnt7XG4gICAgICAgIHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbFxuICAgICAgfX08L2E+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiYnV0dG9uQ2VsbFRlbXBsYXRlXCIgbGV0LXJvdyBsZXQtY29sPVwiY29sXCI+XG4gICAgICA8cCBbdG9vbHRpcF09XCJjb2w/LmFjdGlvbj8udG9vbHRpcFwiIHRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCI+XG4gICAgICAgIDxpXG4gICAgICAgICAgY2xhc3M9XCJiaGkte3sgY29sPy5hY3Rpb24/Lmljb24gfX0gZGF0YS10YWJsZS1pY29uXCJcbiAgICAgICAgICAoY2xpY2spPVwiY29sLmhhbmRsZXJzPy5jbGljayh7IG9yaWdpbmFsRXZlbnQ6ICRldmVudCwgcm93OiByb3cgfSlcIlxuICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJpc0Rpc2FibGVkKGNvbCwgcm93KVwiXG4gICAgICAgID48L2k+XG4gICAgICA8L3A+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiZHJvcGRvd25DZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxub3ZvLWRyb3Bkb3duIHBhcmVudFNjcm9sbFNlbGVjdG9yPVwiLm5vdm8tZGF0YS10YWJsZS1jb250YWluZXJcIiBjb250YWluZXJDbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1kcm9wZG93blwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aGVtZT1cImRpYWxvZ3VlXCIgaWNvbj1cImNvbGxhcHNlXCIgaW52ZXJzZT57eyBjb2wubGFiZWwgfX08L2J1dHRvbj5cbiAgICAgICAgPGxpc3Q+XG4gICAgICAgICAgPGl0ZW1cbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29sPy5hY3Rpb24/Lm9wdGlvbnNcIlxuICAgICAgICAgICAgKGFjdGlvbik9XCJvcHRpb24uaGFuZGxlcnMuY2xpY2soeyBvcmlnaW5hbEV2ZW50OiAkZXZlbnQ/Lm9yaWdpbmFsRXZlbnQsIHJvdzogcm93IH0pXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkKG9wdGlvbiwgcm93KVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIm9wdGlvbi5sYWJlbFwiPnt7IG9wdGlvbi5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgIDwvbGlzdD5cbiAgICAgIDwvbm92by1kcm9wZG93bj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJkZWZhdWx0Tm9SZXN1bHRzTWVzc2FnZVwiPlxuICAgICAgPGg0PjxpIGNsYXNzPVwiYmhpLXNlYXJjaC1xdWVzdGlvblwiPjwvaT4ge3sgbGFiZWxzLm5vTWF0Y2hpbmdSZWNvcmRzTWVzc2FnZSB9fTwvaDQ+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiZGVmYXVsdEVtcHR5TWVzc2FnZVwiPlxuICAgICAgPGg0PjxpIGNsYXNzPVwiYmhpLXNlYXJjaC1xdWVzdGlvblwiPjwvaT4ge3sgbGFiZWxzLmVtcHR5VGFibGVNZXNzYWdlIH19PC9oND5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJleHBhbmRlZFJvd1wiPiBZb3UgZGlkIG5vdCBwcm92aWRlIGFuIFwiZXhwYW5kZWRSb3dcIiB0ZW1wbGF0ZSEgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI2RldGFpbFJvd1RlbXBsYXRlIGxldC1yb3c+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWRldGFpbC1yb3dcIiBbQGV4cGFuZF0gc3R5bGU9XCJvdmVyZmxvdzogaGlkZGVuXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbJ2V4cGFuZGVkUm93J107IGNvbnRleHQ6IHsgJGltcGxpY2l0OiByb3cgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8IS0tIENVU1RPTSBDRUxMUyBQQVNTRUQgSU4gLS0+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbRGF0YVRhYmxlU3RhdGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlPFQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5nbG9iYWwtc2VhcmNoLWhpZGRlbicpXG4gIGdsb2JhbFNlYXJjaEhpZGRlbkNsYXNzVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihOb3ZvVGVtcGxhdGUpXG4gIGN1c3RvbVRlbXBsYXRlczogUXVlcnlMaXN0PE5vdm9UZW1wbGF0ZT47XG4gIEBWaWV3Q2hpbGRyZW4oTm92b1RlbXBsYXRlKVxuICBkZWZhdWx0VGVtcGxhdGVzOiBRdWVyeUxpc3Q8Tm92b1RlbXBsYXRlPjtcbiAgQFZpZXdDaGlsZCgnbm92b0RhdGFUYWJsZUNvbnRhaW5lcicpXG4gIG5vdm9EYXRhVGFibGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBPdXRwdXQoKVxuICByZXNpemVkOiBFdmVudEVtaXR0ZXI8SURhdGFUYWJsZUNvbHVtbjxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGRpc3BsYXllZENvbHVtbnMoZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10pIHtcbiAgICBpZiAodGhpcy5kaXNwbGF5ZWRDb2x1bW5zICYmIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5sZW5ndGggIT09IDApIHtcbiAgICAgIGlmICh0aGlzLm5hbWUgIT09ICdub3ZvLWRhdGEtdGFibGUnKSB7XG4gICAgICAgIHRoaXMucHJlZmVyZW5jZXNDaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBkaXNwbGF5ZWRDb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vdGlmeSgnTXVzdCBoYXZlIFtuYW1lXSBzZXQgb24gZGF0YS10YWJsZSB0byB1c2UgcHJlZmVyZW5jZXMhJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2Rpc2FibGVkQ29sdW1ucyA9IGRpc3BsYXllZENvbHVtbnM7XG4gICAgdGhpcy5jb25maWd1cmVMYXN0RGlzcGxheWVkQ29sdW1uKCk7XG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNjcm9sbExpc3RlbmVyKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzcGxheWVkQ29sdW1ucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkQ29sdW1ucztcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZENvbHVtbnM6IHN0cmluZ1tdO1xuXG4gIEBJbnB1dCgpXG4gIHBhZ2luYXRpb25PcHRpb25zOiBJRGF0YVRhYmxlUGFnaW5hdGlvbk9wdGlvbnM7XG4gIEBJbnB1dCgpXG4gIHNlYXJjaE9wdGlvbnM6IElEYXRhVGFibGVTZWFyY2hPcHRpb25zO1xuICBASW5wdXQoKVxuICBkZWZhdWx0U29ydDogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH07XG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZyA9ICdub3ZvLWRhdGEtdGFibGUnO1xuICBASW5wdXQoKVxuICBhbGxvd011bHRpcGxlRmlsdGVyczogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICByb3dJZGVudGlmaWVyOiBzdHJpbmcgPSAnaWQnO1xuICBASW5wdXQoKVxuICBhY3RpdmVSb3dJZGVudGlmaWVyOiBzdHJpbmcgPSAnJztcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBJbnB1dCgpXG4gIHRyYWNrQnlGbjogRnVuY3Rpb24gPSAoaW5kZXgsIGl0ZW0pID0+IGl0ZW0uaWRcbiAgQElucHV0KClcbiAgdGVtcGxhdGVzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPGFueT4gfSA9IHt9O1xuICBASW5wdXQoKVxuICBmaXhlZEhlYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRhVGFibGVTZXJ2aWNlKHNlcnZpY2U6IElEYXRhVGFibGVTZXJ2aWNlPFQ+KSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgaWYgKCFzZXJ2aWNlKSB7XG4gICAgICBzZXJ2aWNlID0gbmV3IFN0YXRpY0RhdGFUYWJsZVNlcnZpY2UoW10pO1xuICAgIH1cbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgRGF0YVRhYmxlU291cmNlPFQ+KHNlcnZpY2UsIHRoaXMuc3RhdGUsIHRoaXMucmVmKTtcbiAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcm93cyhyb3dzOiBUW10pIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICBsZXQgc2VydmljZSA9IG5ldyBTdGF0aWNEYXRhVGFibGVTZXJ2aWNlKHJvd3MpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBEYXRhVGFibGVTb3VyY2U8VD4oc2VydmljZSwgdGhpcy5zdGF0ZSwgdGhpcy5yZWYpO1xuICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBvdXRzaWRlRmlsdGVyKG91dHNpZGVGaWx0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+KSB7XG4gICAgLy8gVW5zdWJzY3JpYmVcbiAgICBpZiAodGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm91dHNpZGVGaWx0ZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKG91dHNpZGVGaWx0ZXIpIHtcbiAgICAgIC8vIFJlLXN1YnNjcmliZVxuICAgICAgdGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uID0gb3V0c2lkZUZpbHRlci5zdWJzY3JpYmUoKGZpbHRlcjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUub3V0c2lkZUZpbHRlciA9IGZpbHRlcjtcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBnbG9iYWxTZWFyY2g6IHRoaXMuc3RhdGUuZ2xvYmFsU2VhcmNoLCBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSk7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHJlZnJlc2hTdWJqZWN0KHJlZnJlc2hTdWJqZWN0OiBFdmVudEVtaXR0ZXI8YW55Pikge1xuICAgIC8vIFVuc3Vic2NyaWJlXG4gICAgaWYgKHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmIChyZWZyZXNoU3ViamVjdCkge1xuICAgICAgLy8gUmUtc3Vic2NyaWJlXG4gICAgICB0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24gPSByZWZyZXNoU3ViamVjdC5zdWJzY3JpYmUoKGZpbHRlcjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUuaXNGb3JjZVJlZnJlc2ggPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZXMubmV4dCh7IGdsb2JhbFNlYXJjaDogdGhpcy5zdGF0ZS5nbG9iYWxTZWFyY2gsIGZpbHRlcjogdGhpcy5zdGF0ZS5maWx0ZXIsIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCB9KTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgY29sdW1ucyhjb2x1bW5zOiBJRGF0YVRhYmxlQ29sdW1uPFQ+W10pIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gY29sdW1ucztcbiAgICB0aGlzLmNvbmZpZ3VyZUNvbHVtbnMoKTtcbiAgfVxuICBnZXQgY29sdW1ucygpOiBJRGF0YVRhYmxlQ29sdW1uPFQ+W10ge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGN1c3RvbUZpbHRlcih2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fY3VzdG9tRmlsdGVyID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBjdXN0b21GaWx0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUZpbHRlcjtcbiAgfVxuICBwcml2YXRlIF9jdXN0b21GaWx0ZXI6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGhhc0V4YW5kZWRSb3dzKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oYXNFeGFuZGVkUm93cyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgaGFzRXhhbmRlZFJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0V4YW5kZWRSb3dzO1xuICB9XG4gIHByaXZhdGUgX2hhc0V4YW5kZWRSb3dzOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmb3JjZVNob3dIZWFkZXIodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2ZvcmNlU2hvd0hlYWRlciA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgZm9yY2VTaG93SGVhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JjZVNob3dIZWFkZXI7XG4gIH1cbiAgcHJpdmF0ZSBfZm9yY2VTaG93SGVhZGVyOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBoaWRlR2xvYmFsU2VhcmNoKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWRlR2xvYmFsU2VhcmNoID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICAgIHRoaXMuZ2xvYmFsU2VhcmNoSGlkZGVuQ2xhc3NUb2dnbGUgPSB0aGlzLl9oaWRlR2xvYmFsU2VhcmNoO1xuICB9XG4gIGdldCBoaWRlR2xvYmFsU2VhcmNoKCkge1xuICAgIHJldHVybiB0aGlzLl9oaWRlR2xvYmFsU2VhcmNoO1xuICB9XG4gIHByaXZhdGUgX2hpZGVHbG9iYWxTZWFyY2g6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKVxuICBwcmVmZXJlbmNlc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlUHJlZmVyZW5jZXM+ID0gbmV3IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlUHJlZmVyZW5jZXM+KCk7XG5cbiAgcHVibGljIGRhdGFTb3VyY2U6IERhdGFUYWJsZVNvdXJjZTxUPjtcbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgY29sdW1uVG9UZW1wbGF0ZTogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxhbnk+IH0gPSB7fTtcbiAgcHVibGljIGNvbHVtbnNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNlbGVjdGlvbjogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG4gIHB1YmxpYyBzY3JvbGxMZWZ0OiBudW1iZXIgPSAwO1xuICBwdWJsaWMgZXhwYW5kYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgb3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHJlZnJlc2hTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSByZXNldFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHBhZ2luYXRpb25TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfY29sdW1uczogSURhdGFUYWJsZUNvbHVtbjxUPltdO1xuICBwcml2YXRlIHNjcm9sbExpc3RlbmVySGFuZGxlcjogYW55O1xuICBwcml2YXRlIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5lbXB0eScpXG4gIGdldCBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlICYmIHRoaXMuZGF0YVNvdXJjZS50b3RhbGx5RW1wdHk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxvYWRpbmcnKVxuICBnZXQgbG9hZGluZ0NsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWRpbmcgfHwgKHRoaXMuZGF0YVNvdXJjZSAmJiB0aGlzLmRhdGFTb3VyY2UubG9hZGluZyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBzdGF0ZTogRGF0YVRhYmxlU3RhdGU8VD4pIHtcbiAgICB0aGlzLnNjcm9sbExpc3RlbmVySGFuZGxlciA9IHRoaXMuc2Nyb2xsTGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhZ2luYXRpb25TdWJzY3JpcHRpb24gPSB0aGlzLnN0YXRlLnBhZ2luYXRpb25Tb3VyY2Uuc3Vic2NyaWJlKChldmVudDogeyBpc1BhZ2VTaXplQ2hhbmdlOiBib29sZWFuOyBwYWdlU2l6ZTogbnVtYmVyIH0pID0+IHtcbiAgICAgIGlmICh0aGlzLm5hbWUgIT09ICdub3ZvLWRhdGEtdGFibGUnKSB7XG4gICAgICAgIGlmIChldmVudC5pc1BhZ2VTaXplQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5wcmVmZXJlbmNlc0NoYW5nZWQuZW1pdCh7IG5hbWU6IHRoaXMubmFtZSwgcGFnZVNpemU6IGV2ZW50LnBhZ2VTaXplIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3RpZnkoJ011c3QgaGF2ZSBbbmFtZV0gc2V0IG9uIGRhdGEtdGFibGUgdG8gdXNlIHByZWZlcmVuY2VzIScpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMucmVzZXRTdWJzY3JpcHRpb24gPSB0aGlzLnN0YXRlLnJlc2V0U291cmNlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm91dHNpZGVGaWx0ZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubm92b0RhdGFUYWJsZUNvbnRhaW5lcikge1xuICAgICAgKHRoaXMubm92b0RhdGFUYWJsZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsTGlzdGVuZXJIYW5kbGVyKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlc2V0U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnJlc2V0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNwbGF5ZWRDb2x1bW5zICYmIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZXhwYW5kYWJsZSA9IHRoaXMuZGlzcGxheWVkQ29sdW1ucy5pbmNsdWRlcygnZXhwYW5kJyk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0ZW1wbGF0ZXMgZGVmaW5lZCBoZXJlXG4gICAgdGhpcy5kZWZhdWx0VGVtcGxhdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIC8vIE9ubHkgb3ZlcnJpZGUgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0XG4gICAgICBpZiAoIXRoaXMudGVtcGxhdGVzW2l0ZW0uZ2V0VHlwZSgpXSkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlc1tpdGVtLmdldFR5cGUoKV0gPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEN1c3RvbSB0ZW1wbGF0ZXMgcGFzc2VkIGluXG4gICAgdGhpcy5jdXN0b21UZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgLy8gT3ZlcnJpZGUgYW55dGhpbmcgdGhhdCBpcyBjdXN0b20gYW5kIGluIEhUTUxcbiAgICAgIHRoaXMudGVtcGxhdGVzW2l0ZW0uZ2V0VHlwZSgpXSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgfSk7XG4gICAgLy8gTG9hZCBjb2x1bW5zXG4gICAgdGhpcy5jb25maWd1cmVDb2x1bW5zKCk7XG5cbiAgICAvLyBTdGF0ZVxuICAgIGlmICh0aGlzLnBhZ2luYXRpb25PcHRpb25zICYmICF0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2UpIHtcbiAgICAgIHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZSA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2luYXRpb25PcHRpb25zICYmICF0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplKSB7XG4gICAgICB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplID0gNTA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2luYXRpb25PcHRpb25zICYmICF0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplT3B0aW9ucykge1xuICAgICAgdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDI1LCA1MCwgMTAwXTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5wYWdlID0gdGhpcy5wYWdpbmF0aW9uT3B0aW9ucyA/IHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0YXRlLnBhZ2VTaXplID0gdGhpcy5wYWdpbmF0aW9uT3B0aW9ucyA/IHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemUgOiB1bmRlZmluZWQ7XG5cbiAgICAvLyBTY3JvbGxpbmcgaW5zaWRlIHRhYmxlXG4gICAgKHRoaXMubm92b0RhdGFUYWJsZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQpLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsTGlzdGVuZXJIYW5kbGVyKTtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIG9uU2VhcmNoQ2hhbmdlKHRlcm06IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUuZ2xvYmFsU2VhcmNoID0gdGVybTtcbiAgICB0aGlzLnN0YXRlLnJlc2V0KGZhbHNlLCB0cnVlKTtcbiAgICB0aGlzLnN0YXRlLnVwZGF0ZXMubmV4dCh7IGdsb2JhbFNlYXJjaDogdGVybSwgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlciwgc29ydDogdGhpcy5zdGF0ZS5zb3J0IH0pO1xuICB9XG5cbiAgcHVibGljIHRyYWNrQ29sdW1uc0J5KGluZGV4OiBudW1iZXIsIGl0ZW06IElEYXRhVGFibGVDb2x1bW48VD4pIHtcbiAgICByZXR1cm4gaXRlbS5pZDtcbiAgfVxuXG4gIHB1YmxpYyBpc0Rpc2FibGVkKGNoZWNrOiBhbnksIHJvdzogVCk6IGJvb2xlYW4ge1xuICAgIGlmIChjaGVjay5kaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChjaGVjay5kaXNhYmxlZEZ1bmMpIHtcbiAgICAgIHJldHVybiBjaGVjay5kaXNhYmxlZEZ1bmMocm93KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzRXhwYW5kZWQocm93OiBUKTogYm9vbGVhbiB7XG4gICAgaWYgKCFyb3cpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZXhwYW5kZWRSb3dzLmhhcyhgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgfVxuXG4gIHB1YmxpYyBleHBhbmRSb3cocm93OiBUKTogdm9pZCB7XG4gICAgbGV0IGV4cGFuZGVkID0gdGhpcy5pc0V4cGFuZGVkKHJvdyk7XG5cbiAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgIHRoaXMuc3RhdGUuZXhwYW5kZWRSb3dzLmRlbGV0ZShgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZS5leHBhbmRlZFJvd3MuYWRkKGAke3Jvd1t0aGlzLnJvd0lkZW50aWZpZXJdfWApO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlLm9uRXhwYW5kQ2hhbmdlKCgocm93IGFzIHVua25vd24pIGFzIHsgaWQ6IG51bWJlciB9KS5pZCk7XG4gIH1cblxuICBwdWJsaWMgZXhwYW5kUm93cyhleHBhbmQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAodGhpcy5kYXRhU291cmNlLmRhdGEgfHwgW10pLmZvckVhY2goKHJvdzogVCkgPT4ge1xuICAgICAgaWYgKCFleHBhbmQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5leHBhbmRlZFJvd3MuZGVsZXRlKGAke3Jvd1t0aGlzLnJvd0lkZW50aWZpZXJdfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5leHBhbmRlZFJvd3MuYWRkKGAke3Jvd1t0aGlzLnJvd0lkZW50aWZpZXJdfWApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc3RhdGUub25FeHBhbmRDaGFuZ2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBhbGxDdXJyZW50Um93c0V4cGFuZGVkKCk6IGJvb2xlYW4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHRoaXMuZGF0YVNvdXJjZS5kYXRhIHx8IFtdKS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLmlzRXhwYW5kZWQoKHRoaXMuZGF0YVNvdXJjZS5kYXRhIHx8IFtdKVtpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBpc1NlbGVjdGVkKHJvdzogVCk6IGJvb2xlYW4ge1xuICAgIGlmICghcm93KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5oYXMoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Um93KHJvdzogVCk6IHZvaWQge1xuICAgIGxldCBzZWxlY3RlZCA9IHRoaXMuaXNTZWxlY3RlZChyb3cpO1xuXG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5kZWxldGUoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLnNldChgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gLCByb3cpO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlLm9uU2VsZWN0aW9uQ2hhbmdlKCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Um93cyhzZWxlY3RlZDogYm9vbGVhbik6IHZvaWQge1xuICAgICh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSkuZm9yRWFjaCgocm93OiBUKSA9PiB7XG4gICAgICBpZiAoIXNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLmRlbGV0ZShgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLnNldChgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gLCByb3cpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc3RhdGUub25TZWxlY3Rpb25DaGFuZ2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBhbGxDdXJyZW50Um93c1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHRoaXMuZGF0YVNvdXJjZS5kYXRhIHx8IFtdKS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLmlzU2VsZWN0ZWQoKHRoaXMuZGF0YVNvdXJjZS5kYXRhIHx8IFtdKVtpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlndXJlTGFzdERpc3BsYXllZENvbHVtbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2x1bW5zICYmIHRoaXMuZGlzcGxheWVkQ29sdW1ucyAmJiAwICE9PSB0aGlzLmNvbHVtbnMubGVuZ3RoICYmIDAgIT09IHRoaXMuZGlzcGxheWVkQ29sdW1ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi5pbml0aWFsUmVzaXphYmxlKSB7XG4gICAgICAgICAgY29sdW1uLnJlc2l6YWJsZSA9IGNvbHVtbi5pbml0aWFsUmVzaXphYmxlLnJlc2l6YWJsZTtcbiAgICAgICAgICBjb2x1bW4ud2lkdGggPSBjb2x1bW4uaW5pdGlhbFJlc2l6YWJsZS53aWR0aDtcbiAgICAgICAgICBjb2x1bW4uaW5pdGlhbFJlc2l6YWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXNpemFibGVDb2x1bW5zOiBzdHJpbmdbXSA9IHRoaXMuZGlzcGxheWVkQ29sdW1ucy5maWx0ZXIoXG4gICAgICAgIChuYW1lOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgKGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPik6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW4ucmVzaXphYmxlICYmIGNvbHVtbi5pZCA9PT0gbmFtZTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICkgIT09IC0xXG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgICBpZiAocmVzaXphYmxlQ29sdW1ucyAmJiByZXNpemFibGVDb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbGFzdFJlc2l6YWJsZUNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPiA9IHRoaXMuY29sdW1ucy5maW5kKChjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pID0+IHtcbiAgICAgICAgICByZXR1cm4gY29sdW1uLmlkID09PSByZXNpemFibGVDb2x1bW5zW3Jlc2l6YWJsZUNvbHVtbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIH0pO1xuICAgICAgICBsYXN0UmVzaXphYmxlQ29sdW1uLmluaXRpYWxSZXNpemFibGUgPSB7XG4gICAgICAgICAgcmVzaXphYmxlOiBsYXN0UmVzaXphYmxlQ29sdW1uLnJlc2l6YWJsZSxcbiAgICAgICAgICB3aWR0aDogbGFzdFJlc2l6YWJsZUNvbHVtbi53aWR0aCxcbiAgICAgICAgfTtcbiAgICAgICAgbGFzdFJlc2l6YWJsZUNvbHVtbi53aWR0aCA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGFzdFJlc2l6YWJsZUNvbHVtbi5yZXNpemFibGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZUNvbHVtbnMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sdW1ucyAmJiB0aGlzLmNvbHVtbnMubGVuZ3RoICE9PSAwICYmIE9iamVjdC5rZXlzKHRoaXMudGVtcGxhdGVzKS5sZW5ndGggIT09IDApIHtcbiAgICAgIC8vIEZpZ3VyZSB0aGUgY29sdW1uIHRlbXBsYXRlc1xuICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPikgPT4ge1xuICAgICAgICAvLyBGaWd1cmUgdGhlIHRlbXBsYXRlXG4gICAgICAgIGxldCB0ZW1wbGF0ZU5hbWU6IHN0cmluZztcbiAgICAgICAgaWYgKGNvbHVtbi50ZW1wbGF0ZSkge1xuICAgICAgICAgIC8vIFBhc3MgaXQgaW4gYXMgdGVtcGxhdGVcbiAgICAgICAgICB0ZW1wbGF0ZU5hbWUgPSBjb2x1bW4udGVtcGxhdGU7XG4gICAgICAgIH0gZWxzZSBpZiAoISF0aGlzLnRlbXBsYXRlc1tjb2x1bW4uaWRdKSB7XG4gICAgICAgICAgLy8gQ3VzdG9tIHRlbXBsYXRlIGZvciB0aGUgY29sdW1uIGlkXG4gICAgICAgICAgdGVtcGxhdGVOYW1lID0gY29sdW1uLmlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIERlZmF1bHQgdG8gdGhlIGRlZmF1bENlbGxUZW1wbGF0ZVxuICAgICAgICAgIGlmIChjb2x1bW4udHlwZSA9PT0gJ2FjdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW4uYWN0aW9uICYmIGNvbHVtbi5hY3Rpb24ub3B0aW9ucykge1xuICAgICAgICAgICAgICB0ZW1wbGF0ZU5hbWUgPSAnZHJvcGRvd25DZWxsVGVtcGxhdGUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGVtcGxhdGVOYW1lID0gJ2J1dHRvbkNlbGxUZW1wbGF0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW4udHlwZSA9PT0gJ2xpbms6dGVsJyB8fCBjb2x1bW4udHlwZSA9PT0gJ2xpbms6bWFpbHRvJykge1xuICAgICAgICAgICAgICB0ZW1wbGF0ZU5hbWUgPSBgJHtjb2x1bW4udHlwZS5zcGxpdCgnOicpWzFdfUNlbGxUZW1wbGF0ZWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0ZW1wbGF0ZU5hbWUgPSBgJHtjb2x1bW4udHlwZX1DZWxsVGVtcGxhdGVgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbHVtblRvVGVtcGxhdGVbY29sdW1uLmlkXSA9IHRoaXMudGVtcGxhdGVzW3RlbXBsYXRlTmFtZV07XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29uZmlndXJlTGFzdERpc3BsYXllZENvbHVtbigpO1xuICAgICAgdGhpcy5jb2x1bW5zTG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNjcm9sbExpc3RlbmVyKCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldDogRWxlbWVudCA9IHRoaXMubm92b0RhdGFUYWJsZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG4gICAgbGV0IGxlZnQ6IG51bWJlciA9IHRhcmdldC5zY3JvbGxMZWZ0O1xuICAgIGlmIChsZWZ0ICE9PSB0aGlzLnNjcm9sbExlZnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsTGVmdCA9IHRhcmdldC5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgICBpZiAodGhpcy5maXhlZEhlYWRlcikge1xuICAgICAgY29uc3QgdG9wOiBudW1iZXIgPSB0YXJnZXQuc2Nyb2xsVG9wO1xuICAgICAgY29uc3QgaGVhZGVyOiBhbnkgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignY2RrLXRhYmxlID4gbm92by1kYXRhLXRhYmxlLWhlYWRlci1yb3cnKTtcbiAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgaGVhZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dG9wfXB4KWA7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=