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
            var header = target.querySelector(':scope > cdk-table > novo-data-table-header-row');
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
                    template: "\n    <header *ngIf=\"(!(dataSource?.totallyEmpty && !state.userFiltered) && !loading) || forceShowHeader\"\n            [class.empty]=\"hideGlobalSearch && !paginationOptions && !templates['customActions']\">\n      <ng-container *ngTemplateOutlet=\"templates['customHeader']\"></ng-container>\n      <novo-search\n        alwaysOpen=\"true\"\n        (searchChanged)=\"onSearchChange($event)\"\n        [(ngModel)]=\"state.globalSearch\"\n        *ngIf=\"!hideGlobalSearch\"\n        [placeholder]=\"searchOptions?.placeholder\"\n        [hint]=\"searchOptions?.tooltip\">\n      </novo-search>\n      <novo-data-table-pagination\n        *ngIf=\"paginationOptions\"\n        [theme]=\"paginationOptions.theme\"\n        [length]=\"dataSource?.currentTotal\"\n        [page]=\"paginationOptions.page\"\n        [pageSize]=\"paginationOptions.pageSize\"\n        [pageSizeOptions]=\"paginationOptions.pageSizeOptions\">\n      </novo-data-table-pagination>\n      <div class=\"novo-data-table-actions\" *ngIf=\"templates['customActions']\">\n        <ng-container *ngTemplateOutlet=\"templates['customActions']\"></ng-container>\n      </div>\n    </header>\n    <div class=\"novo-data-table-loading-mask\" *ngIf=\"dataSource?.loading || loading\" data-automation-id=\"novo-data-table-loading\">\n      <novo-loading></novo-loading>\n    </div>\n    <div class=\"novo-data-table-outside-container\">\n      <div class=\"novo-data-table-custom-filter\" *ngIf=\"customFilter\">\n        <ng-container *ngTemplateOutlet=\"templates['customFilter']\"></ng-container>\n      </div>\n      <div #novoDataTableContainer class=\"novo-data-table-container\" [class.empty-user-filtered]=\"dataSource?.currentlyEmpty && state.userFiltered\" [class.empty]=\"dataSource?.totallyEmpty && !dataSource?.loading && !loading && !state.userFiltered && !dataSource.pristine\">\n        <cdk-table *ngIf=\"(columns?.length > 0) && columnsLoaded && dataSource\" [dataSource]=\"dataSource\" [trackBy]=\"trackByFn\" novoDataTableSortFilter [class.expandable]=\"expandable\" [class.empty]=\"dataSource?.currentlyEmpty && state.userFiltered\" [hidden]=\"dataSource?.totallyEmpty && !state.userFiltered\">\n          <ng-container cdkColumnDef=\"selection\">\n            <novo-data-table-checkbox-header-cell *cdkHeaderCellDef></novo-data-table-checkbox-header-cell>\n            <novo-data-table-checkbox-cell *cdkCellDef=\"let row; let i = index\" [row]=\"row\"></novo-data-table-checkbox-cell>\n          </ng-container>\n          <ng-container cdkColumnDef=\"expand\">\n            <novo-data-table-expand-header-cell *cdkHeaderCellDef></novo-data-table-expand-header-cell>\n            <novo-data-table-expand-cell *cdkCellDef=\"let row; let i = index\" [row]=\"row\"></novo-data-table-expand-cell>\n          </ng-container>\n          <ng-container *ngFor=\"let column of columns;trackBy: trackColumnsBy\" [cdkColumnDef]=\"column.id\">\n            <novo-data-table-header-cell *cdkHeaderCellDef [column]=\"column\" [filterTemplate]=\"templates['column-filter-'+column.id]\" [novo-data-table-cell-config]=\"column\" [resized]=\"resized\" [defaultSort]=\"defaultSort\" [class.empty]=\"column?.type === 'action' && !column?.label\" [class.button-header-cell]=\"column?.type === 'expand' || (column?.type === 'action' && !column?.action?.options)\" [class.dropdown-header-cell]=\"column?.type === 'action' && column?.action?.options\"></novo-data-table-header-cell>\n            <novo-data-table-cell *cdkCellDef=\"let row\" [resized]=\"resized\" [column]=\"column\" [row]=\"row\" [template]=\"columnToTemplate[column.id]\" [class.empty]=\"column?.type === 'action' && !column?.label\" [class.button-cell]=\"column?.type === 'expand' || (column?.type === 'action' && !column?.action?.options)\" [class.dropdown-cell]=\"column?.type === 'action' && column?.action?.options\"></novo-data-table-cell>\n          </ng-container>\n          <novo-data-table-header-row *cdkHeaderRowDef=\"displayedColumns\" data-automation-id=\"novo-data-table-header-row\"></novo-data-table-header-row>\n          <novo-data-table-row *cdkRowDef=\"let row; columns: displayedColumns\" [ngClass]=\"{ 'active': row[rowIdentifier] == activeRowIdentifier }\" [novoDataTableExpand]=\"detailRowTemplate\" [row]=\"row\" [id]=\"name + '-' + row[rowIdentifier]\" [dataAutomationId]=\"row[rowIdentifier]\"></novo-data-table-row>\n        </cdk-table>\n        <div class=\"novo-data-table-footer\" *ngIf=\"templates['footer']\">\n          <ng-container *ngTemplateOutlet=\"templates['footer']; context: {$implicit: columns, data: dataSource.data}\"></ng-container>\n        </div>\n        <div class=\"novo-data-table-no-results-container\" [style.left.px]=\"scrollLeft\" *ngIf=\"dataSource?.currentlyEmpty && state.userFiltered && !dataSource?.loading && !loading && !dataSource.pristine\">\n          <div class=\"novo-data-table-empty-message\" >\n            <ng-container *ngTemplateOutlet=\"templates['noResultsMessage'] || templates['defaultNoResultsMessage']\"></ng-container>\n          </div>\n        </div>\n      </div>\n      <div class=\"novo-data-table-empty-container\" *ngIf=\"dataSource?.totallyEmpty && !dataSource?.loading && !loading && !state.userFiltered && !dataSource.pristine\">\n        <div class=\"novo-data-table-empty-message\">\n          <ng-container *ngTemplateOutlet=\"templates['emptyMessage'] || templates['defaultNoResultsMessage']\"></ng-container>\n        </div>\n      </div>\n    </div>\n    <!-- DEFAULT CELL TEMPLATE -->\n    <ng-template novoTemplate=\"textCellTemplate\"\n                 let-row\n                 let-col=\"col\">\n      <span [style.width.px]=\"col?.width\" [style.min-width.px]=\"col?.width\" [style.max-width.px]=\"col?.width\">{{ row[col.id] | dataTableInterpolate:col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"dateCellTemplate\"\n                 let-row\n                 let-col=\"col\">\n      <span>{{ row[col.id] | dataTableInterpolate:col | dataTableDateRenderer:col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"datetimeCellTemplate\"\n                 let-row\n                 let-col=\"col\">\n      <span>{{ row[col.id] | dataTableInterpolate:col | dataTableDateTimeRenderer:col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"timeCellTemplate\"\n                 let-row\n                 let-col=\"col\">\n      <span>{{ row[col.id] | dataTableInterpolate:col | dataTableTimeRenderer:col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"currencyCellTemplate\"\n                 let-row\n                 let-col=\"col\">\n      <span>{{ row[col.id] | dataTableInterpolate:col | dataTableCurrencyRenderer:col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"numberCellTemplate\"\n                 let-row\n                 let-col=\"col\">\n      <span>{{ row[col.id] | dataTableInterpolate:col | dataTableNumberRenderer:col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"percentCellTemplate\"\n                 let-row\n                 let-col=\"col\">\n      <span>{{ row[col.id] | dataTableInterpolate:col | dataTableNumberRenderer:col:true }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"linkCellTemplate\"\n                 let-row\n                 let-col=\"col\">\n      <a (click)=\"col.handlers?.click({originalEvent: $event, row: row})\" [style.width.px]=\"col?.width\" [style.min-width.px]=\"col?.width\" [style.max-width.px]=\"col?.width\">{{ row[col.id] | dataTableInterpolate:col }}</a>\n    </ng-template>\n    <ng-template novoTemplate=\"telCellTemplate\"\n                 let-row\n                 let-col=\"col\">\n      <a href=\"tel:{{ row[col.id] | dataTableInterpolate:col }}\" [target]=\"col?.attributes?.target\">{{ row[col.id] | dataTableInterpolate:col }}</a>\n    </ng-template>\n    <ng-template novoTemplate=\"mailtoCellTemplate\"\n                 let-row\n                 let-col=\"col\">\n      <a href=\"mailto:{{ row[col.id] | dataTableInterpolate:col }}\" [target]=\"col?.attributes?.target\">{{ row[col.id] | dataTableInterpolate:col }}</a>\n    </ng-template>\n    <ng-template novoTemplate=\"buttonCellTemplate\"\n                 let-row\n                 let-col=\"col\">\n      <p [tooltip]=\"col?.action?.tooltip\" tooltipPosition=\"right\">\n        <i class=\"bhi-{{ col?.action?.icon }} data-table-icon\" (click)=\"col.handlers?.click({ originalEvent: $event, row: row })\" [class.disabled]=\"isDisabled(col, row)\"></i>\n      </p>\n    </ng-template>\n    <ng-template novoTemplate=\"dropdownCellTemplate\"\n                 let-row\n                 let-col=\"col\">\n      <novo-dropdown parentScrollSelector=\".novo-data-table-container\" containerClass=\"novo-data-table-dropdown\">\n        <button type=\"button\" theme=\"dialogue\" icon=\"collapse\" inverse>{{ col.label }}</button>\n        <list>\n          <item *ngFor=\"let option of col?.action?.options\" (action)=\"option.handlers.click({ originalEvent: $event?.originalEvent, row: row })\" [disabled]=\"isDisabled(option, row)\">\n            <span [attr.data-automation-id]=\"option.label\">{{ option.label }}</span>\n          </item>\n        </list>\n      </novo-dropdown>\n    </ng-template>\n    <ng-template novoTemplate=\"defaultNoResultsMessage\">\n      <h4><i class=\"bhi-search-question\"></i> {{ labels.noMatchingRecordsMessage }}</h4>\n    </ng-template>\n    <ng-template novoTemplate=\"defaultEmptyMessage\">\n      <h4><i class=\"bhi-search-question\"></i> {{ labels.emptyTableMessage }}</h4>\n    </ng-template>\n    <ng-template novoTemplate=\"expandedRow\">\n      You did not provide an \"expandedRow\" template!\n    </ng-template>\n    <ng-template #detailRowTemplate let-row>\n      <div class=\"novo-data-table-detail-row\" [@expand] style=\"overflow: hidden\">\n        <ng-container *ngTemplateOutlet=\"templates['expandedRow']; context: {$implicit: row}\"></ng-container>\n      </div>\n    </ng-template>\n    <!-- CUSTOM CELLS PASSED IN -->\n    <ng-content></ng-content>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUVaLGlCQUFpQixFQUVqQixlQUFlLEVBQ2YsU0FBUyxFQUNULFlBQVksRUFFWixVQUFVLEVBQ1YsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTlELE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxJQUFJLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBUzlGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQUU5RTtJQTBWRSx1QkFBbUIsTUFBd0IsRUFBVSxHQUFzQixFQUFTLEtBQXdCO1FBQTVHLGlCQWdCQztRQWhCa0IsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFTLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBdEw1RyxrQ0FBNkIsR0FBWSxLQUFLLENBQUM7UUFTL0Ms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QVNqQyx5Q0FBa0M7Ozs7O0lBVWxDLDBDQUEwQzs7SUFFMUMsMkNBQ29HOztJQUVwRyxtQ0FBc0M7O0lBQ3RDLGdDQUErQjs7SUFDL0IseUNBQWtFOztJQUNsRSxzQ0FBc0M7O0lBQ3RDLGtDQUEwQzs7SUFDMUMsbUNBQThCOztJQUM5QixtQ0FBbUM7Ozs7O0lBRW5DLGtEQUFnRDs7Ozs7SUFDaEQsNENBQTBDOzs7OztJQUMxQywwQ0FBd0M7Ozs7O0lBQ3hDLCtDQUE2Qzs7Ozs7SUFDN0MsaUNBQXdDOzs7OztJQUN4Qyw4Q0FBbUM7Ozs7O0lBQ25DLG9DQUFxQzs7SUFZekIsK0JBQStCOzs7OztJQUFFLDRCQUE4Qjs7SUFBRSw4QkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25EZXN0cm95LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkcmVuLFxuICBUZW1wbGF0ZVJlZixcbiAgRWxlbWVudFJlZixcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlIGFzIGFuaW1TdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuaW1wb3J0IHtcbiAgSURhdGFUYWJsZUNvbHVtbixcbiAgSURhdGFUYWJsZVBhZ2luYXRpb25PcHRpb25zLFxuICBJRGF0YVRhYmxlU2VhcmNoT3B0aW9ucyxcbiAgSURhdGFUYWJsZVNlcnZpY2UsXG4gIElEYXRhVGFibGVQcmVmZXJlbmNlcyxcbn0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IERhdGFUYWJsZVNvdXJjZSB9IGZyb20gJy4vZGF0YS10YWJsZS5zb3VyY2UnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVTdGF0ZSB9IGZyb20gJy4vc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9UZW1wbGF0ZSB9IGZyb20gJy4uL2NvbW1vbi9ub3ZvLXRlbXBsYXRlL25vdm8tdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IG5vdGlmeSB9IGZyb20gJy4uLy4uL3V0aWxzL25vdGlmaWVyL25vdGlmaWVyLnV0aWwnO1xuaW1wb3J0IHsgU3RhdGljRGF0YVRhYmxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc3RhdGljLWRhdGEtdGFibGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0YS10YWJsZScsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdleHBhbmQnLCBbXG4gICAgICBhbmltU3RhdGUoJ3ZvaWQnLCBzdHlsZSh7IGhlaWdodDogJzBweCcsIG1pbkhlaWdodDogJzAnLCB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9KSksXG4gICAgICBhbmltU3RhdGUoJyonLCBzdHlsZSh7IGhlaWdodDogJyonLCB2aXNpYmlsaXR5OiAndmlzaWJsZScgfSkpLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA8PT4gKicsIGFuaW1hdGUoJzcwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpJykpLFxuICAgIF0pLFxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoZWFkZXIgKm5nSWY9XCIoIShkYXRhU291cmNlPy50b3RhbGx5RW1wdHkgJiYgIXN0YXRlLnVzZXJGaWx0ZXJlZCkgJiYgIWxvYWRpbmcpIHx8IGZvcmNlU2hvd0hlYWRlclwiXG4gICAgICAgICAgICBbY2xhc3MuZW1wdHldPVwiaGlkZUdsb2JhbFNlYXJjaCAmJiAhcGFnaW5hdGlvbk9wdGlvbnMgJiYgIXRlbXBsYXRlc1snY3VzdG9tQWN0aW9ucyddXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydjdXN0b21IZWFkZXInXVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPG5vdm8tc2VhcmNoXG4gICAgICAgIGFsd2F5c09wZW49XCJ0cnVlXCJcbiAgICAgICAgKHNlYXJjaENoYW5nZWQpPVwib25TZWFyY2hDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwic3RhdGUuZ2xvYmFsU2VhcmNoXCJcbiAgICAgICAgKm5nSWY9XCIhaGlkZUdsb2JhbFNlYXJjaFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJzZWFyY2hPcHRpb25zPy5wbGFjZWhvbGRlclwiXG4gICAgICAgIFtoaW50XT1cInNlYXJjaE9wdGlvbnM/LnRvb2x0aXBcIj5cbiAgICAgIDwvbm92by1zZWFyY2g+XG4gICAgICA8bm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb25cbiAgICAgICAgKm5nSWY9XCJwYWdpbmF0aW9uT3B0aW9uc1wiXG4gICAgICAgIFt0aGVtZV09XCJwYWdpbmF0aW9uT3B0aW9ucy50aGVtZVwiXG4gICAgICAgIFtsZW5ndGhdPVwiZGF0YVNvdXJjZT8uY3VycmVudFRvdGFsXCJcbiAgICAgICAgW3BhZ2VdPVwicGFnaW5hdGlvbk9wdGlvbnMucGFnZVwiXG4gICAgICAgIFtwYWdlU2l6ZV09XCJwYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZVwiXG4gICAgICAgIFtwYWdlU2l6ZU9wdGlvbnNdPVwicGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemVPcHRpb25zXCI+XG4gICAgICA8L25vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uPlxuICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1hY3Rpb25zXCIgKm5nSWY9XCJ0ZW1wbGF0ZXNbJ2N1c3RvbUFjdGlvbnMnXVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydjdXN0b21BY3Rpb25zJ11cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtbG9hZGluZy1tYXNrXCIgKm5nSWY9XCJkYXRhU291cmNlPy5sb2FkaW5nIHx8IGxvYWRpbmdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtbG9hZGluZ1wiPlxuICAgICAgPG5vdm8tbG9hZGluZz48L25vdm8tbG9hZGluZz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLW91dHNpZGUtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWN1c3RvbS1maWx0ZXJcIiAqbmdJZj1cImN1c3RvbUZpbHRlclwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydjdXN0b21GaWx0ZXInXVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2ICNub3ZvRGF0YVRhYmxlQ29udGFpbmVyIGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWNvbnRhaW5lclwiIFtjbGFzcy5lbXB0eS11c2VyLWZpbHRlcmVkXT1cImRhdGFTb3VyY2U/LmN1cnJlbnRseUVtcHR5ICYmIHN0YXRlLnVzZXJGaWx0ZXJlZFwiIFtjbGFzcy5lbXB0eV09XCJkYXRhU291cmNlPy50b3RhbGx5RW1wdHkgJiYgIWRhdGFTb3VyY2U/LmxvYWRpbmcgJiYgIWxvYWRpbmcgJiYgIXN0YXRlLnVzZXJGaWx0ZXJlZCAmJiAhZGF0YVNvdXJjZS5wcmlzdGluZVwiPlxuICAgICAgICA8Y2RrLXRhYmxlICpuZ0lmPVwiKGNvbHVtbnM/Lmxlbmd0aCA+IDApICYmIGNvbHVtbnNMb2FkZWQgJiYgZGF0YVNvdXJjZVwiIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbdHJhY2tCeV09XCJ0cmFja0J5Rm5cIiBub3ZvRGF0YVRhYmxlU29ydEZpbHRlciBbY2xhc3MuZXhwYW5kYWJsZV09XCJleHBhbmRhYmxlXCIgW2NsYXNzLmVtcHR5XT1cImRhdGFTb3VyY2U/LmN1cnJlbnRseUVtcHR5ICYmIHN0YXRlLnVzZXJGaWx0ZXJlZFwiIFtoaWRkZW5dPVwiZGF0YVNvdXJjZT8udG90YWxseUVtcHR5ICYmICFzdGF0ZS51c2VyRmlsdGVyZWRcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cInNlbGVjdGlvblwiPlxuICAgICAgICAgICAgPG5vdm8tZGF0YS10YWJsZS1jaGVja2JveC1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj48L25vdm8tZGF0YS10YWJsZS1jaGVja2JveC1oZWFkZXItY2VsbD5cbiAgICAgICAgICAgIDxub3ZvLWRhdGEtdGFibGUtY2hlY2tib3gtY2VsbCAqY2RrQ2VsbERlZj1cImxldCByb3c7IGxldCBpID0gaW5kZXhcIiBbcm93XT1cInJvd1wiPjwvbm92by1kYXRhLXRhYmxlLWNoZWNrYm94LWNlbGw+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciBjZGtDb2x1bW5EZWY9XCJleHBhbmRcIj5cbiAgICAgICAgICAgIDxub3ZvLWRhdGEtdGFibGUtZXhwYW5kLWhlYWRlci1jZWxsICpjZGtIZWFkZXJDZWxsRGVmPjwvbm92by1kYXRhLXRhYmxlLWV4cGFuZC1oZWFkZXItY2VsbD5cbiAgICAgICAgICAgIDxub3ZvLWRhdGEtdGFibGUtZXhwYW5kLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgcm93OyBsZXQgaSA9IGluZGV4XCIgW3Jvd109XCJyb3dcIj48L25vdm8tZGF0YS10YWJsZS1leHBhbmQtY2VsbD5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uczt0cmFja0J5OiB0cmFja0NvbHVtbnNCeVwiIFtjZGtDb2x1bW5EZWZdPVwiY29sdW1uLmlkXCI+XG4gICAgICAgICAgICA8bm92by1kYXRhLXRhYmxlLWhlYWRlci1jZWxsICpjZGtIZWFkZXJDZWxsRGVmIFtjb2x1bW5dPVwiY29sdW1uXCIgW2ZpbHRlclRlbXBsYXRlXT1cInRlbXBsYXRlc1snY29sdW1uLWZpbHRlci0nK2NvbHVtbi5pZF1cIiBbbm92by1kYXRhLXRhYmxlLWNlbGwtY29uZmlnXT1cImNvbHVtblwiIFtyZXNpemVkXT1cInJlc2l6ZWRcIiBbZGVmYXVsdFNvcnRdPVwiZGVmYXVsdFNvcnRcIiBbY2xhc3MuZW1wdHldPVwiY29sdW1uPy50eXBlID09PSAnYWN0aW9uJyAmJiAhY29sdW1uPy5sYWJlbFwiIFtjbGFzcy5idXR0b24taGVhZGVyLWNlbGxdPVwiY29sdW1uPy50eXBlID09PSAnZXhwYW5kJyB8fCAoY29sdW1uPy50eXBlID09PSAnYWN0aW9uJyAmJiAhY29sdW1uPy5hY3Rpb24/Lm9wdGlvbnMpXCIgW2NsYXNzLmRyb3Bkb3duLWhlYWRlci1jZWxsXT1cImNvbHVtbj8udHlwZSA9PT0gJ2FjdGlvbicgJiYgY29sdW1uPy5hY3Rpb24/Lm9wdGlvbnNcIj48L25vdm8tZGF0YS10YWJsZS1oZWFkZXItY2VsbD5cbiAgICAgICAgICAgIDxub3ZvLWRhdGEtdGFibGUtY2VsbCAqY2RrQ2VsbERlZj1cImxldCByb3dcIiBbcmVzaXplZF09XCJyZXNpemVkXCIgW2NvbHVtbl09XCJjb2x1bW5cIiBbcm93XT1cInJvd1wiIFt0ZW1wbGF0ZV09XCJjb2x1bW5Ub1RlbXBsYXRlW2NvbHVtbi5pZF1cIiBbY2xhc3MuZW1wdHldPVwiY29sdW1uPy50eXBlID09PSAnYWN0aW9uJyAmJiAhY29sdW1uPy5sYWJlbFwiIFtjbGFzcy5idXR0b24tY2VsbF09XCJjb2x1bW4/LnR5cGUgPT09ICdleHBhbmQnIHx8IChjb2x1bW4/LnR5cGUgPT09ICdhY3Rpb24nICYmICFjb2x1bW4/LmFjdGlvbj8ub3B0aW9ucylcIiBbY2xhc3MuZHJvcGRvd24tY2VsbF09XCJjb2x1bW4/LnR5cGUgPT09ICdhY3Rpb24nICYmIGNvbHVtbj8uYWN0aW9uPy5vcHRpb25zXCI+PC9ub3ZvLWRhdGEtdGFibGUtY2VsbD5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bm92by1kYXRhLXRhYmxlLWhlYWRlci1yb3cgKmNka0hlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtaGVhZGVyLXJvd1wiPjwvbm92by1kYXRhLXRhYmxlLWhlYWRlci1yb3c+XG4gICAgICAgICAgPG5vdm8tZGF0YS10YWJsZS1yb3cgKmNka1Jvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnNcIiBbbmdDbGFzc109XCJ7ICdhY3RpdmUnOiByb3dbcm93SWRlbnRpZmllcl0gPT0gYWN0aXZlUm93SWRlbnRpZmllciB9XCIgW25vdm9EYXRhVGFibGVFeHBhbmRdPVwiZGV0YWlsUm93VGVtcGxhdGVcIiBbcm93XT1cInJvd1wiIFtpZF09XCJuYW1lICsgJy0nICsgcm93W3Jvd0lkZW50aWZpZXJdXCIgW2RhdGFBdXRvbWF0aW9uSWRdPVwicm93W3Jvd0lkZW50aWZpZXJdXCI+PC9ub3ZvLWRhdGEtdGFibGUtcm93PlxuICAgICAgICA8L2Nkay10YWJsZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1mb290ZXJcIiAqbmdJZj1cInRlbXBsYXRlc1snZm9vdGVyJ11cIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydmb290ZXInXTsgY29udGV4dDogeyRpbXBsaWNpdDogY29sdW1ucywgZGF0YTogZGF0YVNvdXJjZS5kYXRhfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1uby1yZXN1bHRzLWNvbnRhaW5lclwiIFtzdHlsZS5sZWZ0LnB4XT1cInNjcm9sbExlZnRcIiAqbmdJZj1cImRhdGFTb3VyY2U/LmN1cnJlbnRseUVtcHR5ICYmIHN0YXRlLnVzZXJGaWx0ZXJlZCAmJiAhZGF0YVNvdXJjZT8ubG9hZGluZyAmJiAhbG9hZGluZyAmJiAhZGF0YVNvdXJjZS5wcmlzdGluZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtZW1wdHktbWVzc2FnZVwiID5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbJ25vUmVzdWx0c01lc3NhZ2UnXSB8fCB0ZW1wbGF0ZXNbJ2RlZmF1bHROb1Jlc3VsdHNNZXNzYWdlJ11cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtZW1wdHktY29udGFpbmVyXCIgKm5nSWY9XCJkYXRhU291cmNlPy50b3RhbGx5RW1wdHkgJiYgIWRhdGFTb3VyY2U/LmxvYWRpbmcgJiYgIWxvYWRpbmcgJiYgIXN0YXRlLnVzZXJGaWx0ZXJlZCAmJiAhZGF0YVNvdXJjZS5wcmlzdGluZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWVtcHR5LW1lc3NhZ2VcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydlbXB0eU1lc3NhZ2UnXSB8fCB0ZW1wbGF0ZXNbJ2RlZmF1bHROb1Jlc3VsdHNNZXNzYWdlJ11cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8IS0tIERFRkFVTFQgQ0VMTCBURU1QTEFURSAtLT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwidGV4dENlbGxUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgIGxldC1yb3dcbiAgICAgICAgICAgICAgICAgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHNwYW4gW3N0eWxlLndpZHRoLnB4XT1cImNvbD8ud2lkdGhcIiBbc3R5bGUubWluLXdpZHRoLnB4XT1cImNvbD8ud2lkdGhcIiBbc3R5bGUubWF4LXdpZHRoLnB4XT1cImNvbD8ud2lkdGhcIj57eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOmNvbCB9fTwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJkYXRlQ2VsbFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgbGV0LXJvd1xuICAgICAgICAgICAgICAgICBsZXQtY29sPVwiY29sXCI+XG4gICAgICA8c3Bhbj57eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOmNvbCB8IGRhdGFUYWJsZURhdGVSZW5kZXJlcjpjb2wgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiZGF0ZXRpbWVDZWxsVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICBsZXQtcm93XG4gICAgICAgICAgICAgICAgIGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxzcGFuPnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6Y29sIHwgZGF0YVRhYmxlRGF0ZVRpbWVSZW5kZXJlcjpjb2wgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwidGltZUNlbGxUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgIGxldC1yb3dcbiAgICAgICAgICAgICAgICAgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHNwYW4+e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTpjb2wgfCBkYXRhVGFibGVUaW1lUmVuZGVyZXI6Y29sIH19PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImN1cnJlbmN5Q2VsbFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgbGV0LXJvd1xuICAgICAgICAgICAgICAgICBsZXQtY29sPVwiY29sXCI+XG4gICAgICA8c3Bhbj57eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOmNvbCB8IGRhdGFUYWJsZUN1cnJlbmN5UmVuZGVyZXI6Y29sIH19PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cIm51bWJlckNlbGxUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgIGxldC1yb3dcbiAgICAgICAgICAgICAgICAgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHNwYW4+e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTpjb2wgfCBkYXRhVGFibGVOdW1iZXJSZW5kZXJlcjpjb2wgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwicGVyY2VudENlbGxUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgIGxldC1yb3dcbiAgICAgICAgICAgICAgICAgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHNwYW4+e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTpjb2wgfCBkYXRhVGFibGVOdW1iZXJSZW5kZXJlcjpjb2w6dHJ1ZSB9fTwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJsaW5rQ2VsbFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgbGV0LXJvd1xuICAgICAgICAgICAgICAgICBsZXQtY29sPVwiY29sXCI+XG4gICAgICA8YSAoY2xpY2spPVwiY29sLmhhbmRsZXJzPy5jbGljayh7b3JpZ2luYWxFdmVudDogJGV2ZW50LCByb3c6IHJvd30pXCIgW3N0eWxlLndpZHRoLnB4XT1cImNvbD8ud2lkdGhcIiBbc3R5bGUubWluLXdpZHRoLnB4XT1cImNvbD8ud2lkdGhcIiBbc3R5bGUubWF4LXdpZHRoLnB4XT1cImNvbD8ud2lkdGhcIj57eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOmNvbCB9fTwvYT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJ0ZWxDZWxsVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICBsZXQtcm93XG4gICAgICAgICAgICAgICAgIGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxhIGhyZWY9XCJ0ZWw6e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTpjb2wgfX1cIiBbdGFyZ2V0XT1cImNvbD8uYXR0cmlidXRlcz8udGFyZ2V0XCI+e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTpjb2wgfX08L2E+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwibWFpbHRvQ2VsbFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgbGV0LXJvd1xuICAgICAgICAgICAgICAgICBsZXQtY29sPVwiY29sXCI+XG4gICAgICA8YSBocmVmPVwibWFpbHRvOnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6Y29sIH19XCIgW3RhcmdldF09XCJjb2w/LmF0dHJpYnV0ZXM/LnRhcmdldFwiPnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6Y29sIH19PC9hPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImJ1dHRvbkNlbGxUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgIGxldC1yb3dcbiAgICAgICAgICAgICAgICAgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHAgW3Rvb2x0aXBdPVwiY29sPy5hY3Rpb24/LnRvb2x0aXBcIiB0b29sdGlwUG9zaXRpb249XCJyaWdodFwiPlxuICAgICAgICA8aSBjbGFzcz1cImJoaS17eyBjb2w/LmFjdGlvbj8uaWNvbiB9fSBkYXRhLXRhYmxlLWljb25cIiAoY2xpY2spPVwiY29sLmhhbmRsZXJzPy5jbGljayh7IG9yaWdpbmFsRXZlbnQ6ICRldmVudCwgcm93OiByb3cgfSlcIiBbY2xhc3MuZGlzYWJsZWRdPVwiaXNEaXNhYmxlZChjb2wsIHJvdylcIj48L2k+XG4gICAgICA8L3A+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiZHJvcGRvd25DZWxsVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICBsZXQtcm93XG4gICAgICAgICAgICAgICAgIGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxub3ZvLWRyb3Bkb3duIHBhcmVudFNjcm9sbFNlbGVjdG9yPVwiLm5vdm8tZGF0YS10YWJsZS1jb250YWluZXJcIiBjb250YWluZXJDbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1kcm9wZG93blwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aGVtZT1cImRpYWxvZ3VlXCIgaWNvbj1cImNvbGxhcHNlXCIgaW52ZXJzZT57eyBjb2wubGFiZWwgfX08L2J1dHRvbj5cbiAgICAgICAgPGxpc3Q+XG4gICAgICAgICAgPGl0ZW0gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb2w/LmFjdGlvbj8ub3B0aW9uc1wiIChhY3Rpb24pPVwib3B0aW9uLmhhbmRsZXJzLmNsaWNrKHsgb3JpZ2luYWxFdmVudDogJGV2ZW50Py5vcmlnaW5hbEV2ZW50LCByb3c6IHJvdyB9KVwiIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkKG9wdGlvbiwgcm93KVwiPlxuICAgICAgICAgICAgPHNwYW4gW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIm9wdGlvbi5sYWJlbFwiPnt7IG9wdGlvbi5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgIDwvbGlzdD5cbiAgICAgIDwvbm92by1kcm9wZG93bj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJkZWZhdWx0Tm9SZXN1bHRzTWVzc2FnZVwiPlxuICAgICAgPGg0PjxpIGNsYXNzPVwiYmhpLXNlYXJjaC1xdWVzdGlvblwiPjwvaT4ge3sgbGFiZWxzLm5vTWF0Y2hpbmdSZWNvcmRzTWVzc2FnZSB9fTwvaDQ+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiZGVmYXVsdEVtcHR5TWVzc2FnZVwiPlxuICAgICAgPGg0PjxpIGNsYXNzPVwiYmhpLXNlYXJjaC1xdWVzdGlvblwiPjwvaT4ge3sgbGFiZWxzLmVtcHR5VGFibGVNZXNzYWdlIH19PC9oND5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJleHBhbmRlZFJvd1wiPlxuICAgICAgWW91IGRpZCBub3QgcHJvdmlkZSBhbiBcImV4cGFuZGVkUm93XCIgdGVtcGxhdGUhXG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI2RldGFpbFJvd1RlbXBsYXRlIGxldC1yb3c+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWRldGFpbC1yb3dcIiBbQGV4cGFuZF0gc3R5bGU9XCJvdmVyZmxvdzogaGlkZGVuXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbJ2V4cGFuZGVkUm93J107IGNvbnRleHQ6IHskaW1wbGljaXQ6IHJvd31cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPCEtLSBDVVNUT00gQ0VMTFMgUEFTU0VEIElOIC0tPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0RhdGFUYWJsZVN0YXRlXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZTxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZ2xvYmFsLXNlYXJjaC1oaWRkZW4nKVxuICBnbG9iYWxTZWFyY2hIaWRkZW5DbGFzc1RvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTm92b1RlbXBsYXRlKVxuICBjdXN0b21UZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOb3ZvVGVtcGxhdGU+O1xuICBAVmlld0NoaWxkcmVuKE5vdm9UZW1wbGF0ZSlcbiAgZGVmYXVsdFRlbXBsYXRlczogUXVlcnlMaXN0PE5vdm9UZW1wbGF0ZT47XG4gIEBWaWV3Q2hpbGQoJ25vdm9EYXRhVGFibGVDb250YWluZXInKVxuICBub3ZvRGF0YVRhYmxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAT3V0cHV0KClcbiAgcmVzaXplZDogRXZlbnRFbWl0dGVyPElEYXRhVGFibGVDb2x1bW48VD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNwbGF5ZWRDb2x1bW5zKGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHRoaXMuZGlzcGxheWVkQ29sdW1ucyAmJiB0aGlzLmRpc3BsYXllZENvbHVtbnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBpZiAodGhpcy5uYW1lICE9PSAnbm92by1kYXRhLXRhYmxlJykge1xuICAgICAgICB0aGlzLnByZWZlcmVuY2VzQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgZGlzcGxheWVkQ29sdW1uczogZGlzcGxheWVkQ29sdW1ucyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3RpZnkoJ011c3QgaGF2ZSBbbmFtZV0gc2V0IG9uIGRhdGEtdGFibGUgdG8gdXNlIHByZWZlcmVuY2VzIScpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9kaXNhYmxlZENvbHVtbnMgPSBkaXNwbGF5ZWRDb2x1bW5zO1xuICAgIHRoaXMuY29uZmlndXJlTGFzdERpc3BsYXllZENvbHVtbigpO1xuICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3BsYXllZENvbHVtbnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZENvbHVtbnM7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWRDb2x1bW5zOiBzdHJpbmdbXTtcblxuICBASW5wdXQoKVxuICBwYWdpbmF0aW9uT3B0aW9uczogSURhdGFUYWJsZVBhZ2luYXRpb25PcHRpb25zO1xuICBASW5wdXQoKVxuICBzZWFyY2hPcHRpb25zOiBJRGF0YVRhYmxlU2VhcmNoT3B0aW9ucztcbiAgQElucHV0KClcbiAgZGVmYXVsdFNvcnQ6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9O1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmcgPSAnbm92by1kYXRhLXRhYmxlJztcbiAgQElucHV0KClcbiAgcm93SWRlbnRpZmllcjogc3RyaW5nID0gJ2lkJztcbiAgQElucHV0KClcbiAgYWN0aXZlUm93SWRlbnRpZmllcjogc3RyaW5nID0gJyc7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBASW5wdXQoKVxuICB0cmFja0J5Rm46IEZ1bmN0aW9uID0gKGluZGV4LCBpdGVtKSA9PiBpdGVtLmlkXG4gIEBJbnB1dCgpXG4gIHRlbXBsYXRlczogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxhbnk+IH0gPSB7fTtcbiAgQElucHV0KClcbiAgZml4ZWRIZWFkZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgZGF0YVRhYmxlU2VydmljZShzZXJ2aWNlOiBJRGF0YVRhYmxlU2VydmljZTxUPikge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIGlmICghc2VydmljZSkge1xuICAgICAgc2VydmljZSA9IG5ldyBTdGF0aWNEYXRhVGFibGVTZXJ2aWNlKFtdKTtcbiAgICB9XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IERhdGFUYWJsZVNvdXJjZTxUPihzZXJ2aWNlLCB0aGlzLnN0YXRlLCB0aGlzLnJlZik7XG4gICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHJvd3Mocm93czogVFtdKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgbGV0IHNlcnZpY2UgPSBuZXcgU3RhdGljRGF0YVRhYmxlU2VydmljZShyb3dzKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgRGF0YVRhYmxlU291cmNlPFQ+KHNlcnZpY2UsIHRoaXMuc3RhdGUsIHRoaXMucmVmKTtcbiAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgb3V0c2lkZUZpbHRlcihvdXRzaWRlRmlsdGVyOiBFdmVudEVtaXR0ZXI8YW55Pikge1xuICAgIC8vIFVuc3Vic2NyaWJlXG4gICAgaWYgKHRoaXMub3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmIChvdXRzaWRlRmlsdGVyKSB7XG4gICAgICAvLyBSZS1zdWJzY3JpYmVcbiAgICAgIHRoaXMub3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbiA9IG91dHNpZGVGaWx0ZXIuc3Vic2NyaWJlKChmaWx0ZXI6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlLm91dHNpZGVGaWx0ZXIgPSBmaWx0ZXI7XG4gICAgICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KHsgZ2xvYmFsU2VhcmNoOiB0aGlzLnN0YXRlLmdsb2JhbFNlYXJjaCwgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlciwgc29ydDogdGhpcy5zdGF0ZS5zb3J0IH0pO1xuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCByZWZyZXNoU3ViamVjdChyZWZyZXNoU3ViamVjdDogRXZlbnRFbWl0dGVyPGFueT4pIHtcbiAgICAvLyBVbnN1YnNjcmliZVxuICAgIGlmICh0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAocmVmcmVzaFN1YmplY3QpIHtcbiAgICAgIC8vIFJlLXN1YnNjcmliZVxuICAgICAgdGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uID0gcmVmcmVzaFN1YmplY3Quc3Vic2NyaWJlKChmaWx0ZXI6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlLmlzRm9yY2VSZWZyZXNoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBnbG9iYWxTZWFyY2g6IHRoaXMuc3RhdGUuZ2xvYmFsU2VhcmNoLCBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSk7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbHVtbnMoY29sdW1uczogSURhdGFUYWJsZUNvbHVtbjxUPltdKSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgdGhpcy5jb25maWd1cmVDb2x1bW5zKCk7XG4gIH1cbiAgZ2V0IGNvbHVtbnMoKTogSURhdGFUYWJsZUNvbHVtbjxUPltdIHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjdXN0b21GaWx0ZXIodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2N1c3RvbUZpbHRlciA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgY3VzdG9tRmlsdGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21GaWx0ZXI7XG4gIH1cbiAgcHJpdmF0ZSBfY3VzdG9tRmlsdGVyOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBoYXNFeGFuZGVkUm93cyh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5faGFzRXhhbmRlZFJvd3MgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IGhhc0V4YW5kZWRSb3dzKCkge1xuICAgIHJldHVybiB0aGlzLl9oYXNFeGFuZGVkUm93cztcbiAgfVxuICBwcml2YXRlIF9oYXNFeGFuZGVkUm93czogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzZXQgZm9yY2VTaG93SGVhZGVyKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9mb3JjZVNob3dIZWFkZXIgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IGZvcmNlU2hvd0hlYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9yY2VTaG93SGVhZGVyO1xuICB9XG4gIHByaXZhdGUgX2ZvcmNlU2hvd0hlYWRlcjogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzZXQgaGlkZUdsb2JhbFNlYXJjaCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZUdsb2JhbFNlYXJjaCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgICB0aGlzLmdsb2JhbFNlYXJjaEhpZGRlbkNsYXNzVG9nZ2xlID0gdGhpcy5faGlkZUdsb2JhbFNlYXJjaDtcbiAgfVxuICBnZXQgaGlkZUdsb2JhbFNlYXJjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZUdsb2JhbFNlYXJjaDtcbiAgfVxuICBwcml2YXRlIF9oaWRlR2xvYmFsU2VhcmNoOiBib29sZWFuID0gdHJ1ZTtcblxuICBAT3V0cHV0KClcbiAgcHJlZmVyZW5jZXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8SURhdGFUYWJsZVByZWZlcmVuY2VzPiA9IG5ldyBFdmVudEVtaXR0ZXI8SURhdGFUYWJsZVByZWZlcmVuY2VzPigpO1xuXG4gIHB1YmxpYyBkYXRhU291cmNlOiBEYXRhVGFibGVTb3VyY2U8VD47XG4gIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGNvbHVtblRvVGVtcGxhdGU6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8YW55PiB9ID0ge307XG4gIHB1YmxpYyBjb2x1bW5zTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzZWxlY3Rpb246IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpO1xuICBwdWJsaWMgc2Nyb2xsTGVmdDogbnVtYmVyID0gMDtcbiAgcHVibGljIGV4cGFuZGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIG91dHNpZGVGaWx0ZXJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSByZWZyZXNoU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcmVzZXRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBwYWdpbmF0aW9uU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2NvbHVtbnM6IElEYXRhVGFibGVDb2x1bW48VD5bXTtcbiAgcHJpdmF0ZSBzY3JvbGxMaXN0ZW5lckhhbmRsZXI6IGFueTtcbiAgcHJpdmF0ZSBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZW1wdHknKVxuICBnZXQgZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZSAmJiB0aGlzLmRhdGFTb3VyY2UudG90YWxseUVtcHR5O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sb2FkaW5nJylcbiAgZ2V0IGxvYWRpbmdDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nIHx8ICh0aGlzLmRhdGFTb3VyY2UgJiYgdGhpcy5kYXRhU291cmNlLmxvYWRpbmcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgc3RhdGU6IERhdGFUYWJsZVN0YXRlPFQ+KSB7XG4gICAgdGhpcy5zY3JvbGxMaXN0ZW5lckhhbmRsZXIgPSB0aGlzLnNjcm9sbExpc3RlbmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYWdpbmF0aW9uU3Vic2NyaXB0aW9uID0gdGhpcy5zdGF0ZS5wYWdpbmF0aW9uU291cmNlLnN1YnNjcmliZSgoZXZlbnQ6IHsgaXNQYWdlU2l6ZUNoYW5nZTogYm9vbGVhbjsgcGFnZVNpemU6IG51bWJlciB9KSA9PiB7XG4gICAgICBpZiAodGhpcy5uYW1lICE9PSAnbm92by1kYXRhLXRhYmxlJykge1xuICAgICAgICBpZiAoZXZlbnQuaXNQYWdlU2l6ZUNoYW5nZSkge1xuICAgICAgICAgIHRoaXMucHJlZmVyZW5jZXNDaGFuZ2VkLmVtaXQoeyBuYW1lOiB0aGlzLm5hbWUsIHBhZ2VTaXplOiBldmVudC5wYWdlU2l6ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm90aWZ5KCdNdXN0IGhhdmUgW25hbWVdIHNldCBvbiBkYXRhLXRhYmxlIHRvIHVzZSBwcmVmZXJlbmNlcyEnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnJlc2V0U3Vic2NyaXB0aW9uID0gdGhpcy5zdGF0ZS5yZXNldFNvdXJjZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm5vdm9EYXRhVGFibGVDb250YWluZXIpIHtcbiAgICAgICh0aGlzLm5vdm9EYXRhVGFibGVDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50KS5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbExpc3RlbmVySGFuZGxlcik7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZXNldFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5yZXNldFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzcGxheWVkQ29sdW1ucyAmJiB0aGlzLmRpc3BsYXllZENvbHVtbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmV4cGFuZGFibGUgPSB0aGlzLmRpc3BsYXllZENvbHVtbnMuaW5jbHVkZXMoJ2V4cGFuZCcpO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdGVtcGxhdGVzIGRlZmluZWQgaGVyZVxuICAgIHRoaXMuZGVmYXVsdFRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAvLyBPbmx5IG92ZXJyaWRlIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdFxuICAgICAgaWYgKCF0aGlzLnRlbXBsYXRlc1tpdGVtLmdldFR5cGUoKV0pIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXNbaXRlbS5nZXRUeXBlKCldID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBDdXN0b20gdGVtcGxhdGVzIHBhc3NlZCBpblxuICAgIHRoaXMuY3VzdG9tVGVtcGxhdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIC8vIE92ZXJyaWRlIGFueXRoaW5nIHRoYXQgaXMgY3VzdG9tIGFuZCBpbiBIVE1MXG4gICAgICB0aGlzLnRlbXBsYXRlc1tpdGVtLmdldFR5cGUoKV0gPSBpdGVtLnRlbXBsYXRlO1xuICAgIH0pO1xuICAgIC8vIExvYWQgY29sdW1uc1xuICAgIHRoaXMuY29uZmlndXJlQ29sdW1ucygpO1xuXG4gICAgLy8gU3RhdGVcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uT3B0aW9ucyAmJiAhdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlKSB7XG4gICAgICB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2UgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uT3B0aW9ucyAmJiAhdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZSkge1xuICAgICAgdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZSA9IDUwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uT3B0aW9ucyAmJiAhdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZU9wdGlvbnMpIHtcbiAgICAgIHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemVPcHRpb25zID0gWzEwLCAyNSwgNTAsIDEwMF07XG4gICAgfVxuICAgIHRoaXMuc3RhdGUucGFnZSA9IHRoaXMucGFnaW5hdGlvbk9wdGlvbnMgPyB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2UgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGF0ZS5wYWdlU2l6ZSA9IHRoaXMucGFnaW5hdGlvbk9wdGlvbnMgPyB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplIDogdW5kZWZpbmVkO1xuXG4gICAgLy8gU2Nyb2xsaW5nIGluc2lkZSB0YWJsZVxuICAgICh0aGlzLm5vdm9EYXRhVGFibGVDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbExpc3RlbmVySGFuZGxlcik7XG5cbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBvblNlYXJjaENoYW5nZSh0ZXJtOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlLmdsb2JhbFNlYXJjaCA9IHRlcm07XG4gICAgdGhpcy5zdGF0ZS5yZXNldChmYWxzZSwgdHJ1ZSk7XG4gICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBnbG9iYWxTZWFyY2g6IHRlcm0sIGZpbHRlcjogdGhpcy5zdGF0ZS5maWx0ZXIsIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCB9KTtcbiAgfVxuXG4gIHB1YmxpYyB0cmFja0NvbHVtbnNCeShpbmRleDogbnVtYmVyLCBpdGVtOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KSB7XG4gICAgcmV0dXJuIGl0ZW0uaWQ7XG4gIH1cblxuICBwdWJsaWMgaXNEaXNhYmxlZChjaGVjazogYW55LCByb3c6IFQpOiBib29sZWFuIHtcbiAgICBpZiAoY2hlY2suZGlzYWJsZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoY2hlY2suZGlzYWJsZWRGdW5jKSB7XG4gICAgICByZXR1cm4gY2hlY2suZGlzYWJsZWRGdW5jKHJvdyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0V4cGFuZGVkKHJvdzogVCk6IGJvb2xlYW4ge1xuICAgIGlmICghcm93KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN0YXRlLmV4cGFuZGVkUm93cy5oYXMoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCk7XG4gIH1cblxuICBwdWJsaWMgZXhwYW5kUm93KHJvdzogVCk6IHZvaWQge1xuICAgIGxldCBleHBhbmRlZCA9IHRoaXMuaXNFeHBhbmRlZChyb3cpO1xuXG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICB0aGlzLnN0YXRlLmV4cGFuZGVkUm93cy5kZWxldGUoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUuZXhwYW5kZWRSb3dzLmFkZChgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5vbkV4cGFuZENoYW5nZSgoKHJvdyBhcyB1bmtub3duKSBhcyB7IGlkOiBudW1iZXIgfSkuaWQpO1xuICB9XG5cbiAgcHVibGljIGV4cGFuZFJvd3MoZXhwYW5kOiBib29sZWFuKTogdm9pZCB7XG4gICAgKHRoaXMuZGF0YVNvdXJjZS5kYXRhIHx8IFtdKS5mb3JFYWNoKChyb3c6IFQpID0+IHtcbiAgICAgIGlmICghZXhwYW5kKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZXhwYW5kZWRSb3dzLmRlbGV0ZShgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZXhwYW5kZWRSb3dzLmFkZChgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlLm9uRXhwYW5kQ2hhbmdlKCk7XG4gIH1cblxuICBwdWJsaWMgYWxsQ3VycmVudFJvd3NFeHBhbmRlZCgpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5pc0V4cGFuZGVkKCh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSlbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgaXNTZWxlY3RlZChyb3c6IFQpOiBib29sZWFuIHtcbiAgICBpZiAoIXJvdykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MuaGFzKGAke3Jvd1t0aGlzLnJvd0lkZW50aWZpZXJdfWApO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdFJvdyhyb3c6IFQpOiB2b2lkIHtcbiAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQocm93KTtcblxuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MuZGVsZXRlKGAke3Jvd1t0aGlzLnJvd0lkZW50aWZpZXJdfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5zZXQoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCwgcm93KTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5vblNlbGVjdGlvbkNoYW5nZSgpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdFJvd3Moc2VsZWN0ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAodGhpcy5kYXRhU291cmNlLmRhdGEgfHwgW10pLmZvckVhY2goKHJvdzogVCkgPT4ge1xuICAgICAgaWYgKCFzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5kZWxldGUoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5zZXQoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCwgcm93KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlLm9uU2VsZWN0aW9uQ2hhbmdlKCk7XG4gIH1cblxuICBwdWJsaWMgYWxsQ3VycmVudFJvd3NTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5pc1NlbGVjdGVkKCh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSlbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZUxhc3REaXNwbGF5ZWRDb2x1bW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sdW1ucyAmJiB0aGlzLmRpc3BsYXllZENvbHVtbnMgJiYgMCAhPT0gdGhpcy5jb2x1bW5zLmxlbmd0aCAmJiAwICE9PSB0aGlzLmRpc3BsYXllZENvbHVtbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4uaW5pdGlhbFJlc2l6YWJsZSkge1xuICAgICAgICAgIGNvbHVtbi5yZXNpemFibGUgPSBjb2x1bW4uaW5pdGlhbFJlc2l6YWJsZS5yZXNpemFibGU7XG4gICAgICAgICAgY29sdW1uLndpZHRoID0gY29sdW1uLmluaXRpYWxSZXNpemFibGUud2lkdGg7XG4gICAgICAgICAgY29sdW1uLmluaXRpYWxSZXNpemFibGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVzaXphYmxlQ29sdW1uczogc3RyaW5nW10gPSB0aGlzLmRpc3BsYXllZENvbHVtbnMuZmlsdGVyKFxuICAgICAgICAobmFtZTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5maW5kSW5kZXgoXG4gICAgICAgICAgICAgIChjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sdW1uLnJlc2l6YWJsZSAmJiBjb2x1bW4uaWQgPT09IG5hbWU7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApICE9PSAtMVxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgICAgaWYgKHJlc2l6YWJsZUNvbHVtbnMgJiYgcmVzaXphYmxlQ29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGxhc3RSZXNpemFibGVDb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4gPSB0aGlzLmNvbHVtbnMuZmluZCgoY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvbHVtbi5pZCA9PT0gcmVzaXphYmxlQ29sdW1uc1tyZXNpemFibGVDb2x1bW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB9KTtcbiAgICAgICAgbGFzdFJlc2l6YWJsZUNvbHVtbi5pbml0aWFsUmVzaXphYmxlID0ge1xuICAgICAgICAgIHJlc2l6YWJsZTogbGFzdFJlc2l6YWJsZUNvbHVtbi5yZXNpemFibGUsXG4gICAgICAgICAgd2lkdGg6IGxhc3RSZXNpemFibGVDb2x1bW4ud2lkdGgsXG4gICAgICAgIH07XG4gICAgICAgIGxhc3RSZXNpemFibGVDb2x1bW4ud2lkdGggPSB1bmRlZmluZWQ7XG4gICAgICAgIGxhc3RSZXNpemFibGVDb2x1bW4ucmVzaXphYmxlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb25maWd1cmVDb2x1bW5zKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbHVtbnMgJiYgdGhpcy5jb2x1bW5zLmxlbmd0aCAhPT0gMCAmJiBPYmplY3Qua2V5cyh0aGlzLnRlbXBsYXRlcykubGVuZ3RoICE9PSAwKSB7XG4gICAgICAvLyBGaWd1cmUgdGhlIGNvbHVtbiB0ZW1wbGF0ZXNcbiAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pID0+IHtcbiAgICAgICAgLy8gRmlndXJlIHRoZSB0ZW1wbGF0ZVxuICAgICAgICBsZXQgdGVtcGxhdGVOYW1lOiBzdHJpbmc7XG4gICAgICAgIGlmIChjb2x1bW4udGVtcGxhdGUpIHtcbiAgICAgICAgICAvLyBQYXNzIGl0IGluIGFzIHRlbXBsYXRlXG4gICAgICAgICAgdGVtcGxhdGVOYW1lID0gY29sdW1uLnRlbXBsYXRlO1xuICAgICAgICB9IGVsc2UgaWYgKCEhdGhpcy50ZW1wbGF0ZXNbY29sdW1uLmlkXSkge1xuICAgICAgICAgIC8vIEN1c3RvbSB0ZW1wbGF0ZSBmb3IgdGhlIGNvbHVtbiBpZFxuICAgICAgICAgIHRlbXBsYXRlTmFtZSA9IGNvbHVtbi5pZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBEZWZhdWx0IHRvIHRoZSBkZWZhdWxDZWxsVGVtcGxhdGVcbiAgICAgICAgICBpZiAoY29sdW1uLnR5cGUgPT09ICdhY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoY29sdW1uLmFjdGlvbiAmJiBjb2x1bW4uYWN0aW9uLm9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgdGVtcGxhdGVOYW1lID0gJ2Ryb3Bkb3duQ2VsbFRlbXBsYXRlJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRlbXBsYXRlTmFtZSA9ICdidXR0b25DZWxsVGVtcGxhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY29sdW1uLnR5cGUgPT09ICdsaW5rOnRlbCcgfHwgY29sdW1uLnR5cGUgPT09ICdsaW5rOm1haWx0bycpIHtcbiAgICAgICAgICAgICAgdGVtcGxhdGVOYW1lID0gYCR7Y29sdW1uLnR5cGUuc3BsaXQoJzonKVsxXX1DZWxsVGVtcGxhdGVgO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGVtcGxhdGVOYW1lID0gYCR7Y29sdW1uLnR5cGV9Q2VsbFRlbXBsYXRlYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2x1bW5Ub1RlbXBsYXRlW2NvbHVtbi5pZF0gPSB0aGlzLnRlbXBsYXRlc1t0ZW1wbGF0ZU5hbWVdO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmNvbmZpZ3VyZUxhc3REaXNwbGF5ZWRDb2x1bW4oKTtcbiAgICAgIHRoaXMuY29sdW1uc0xvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQ6IEVsZW1lbnQgPSB0aGlzLm5vdm9EYXRhVGFibGVDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgIGxldCBsZWZ0OiBudW1iZXIgPSB0YXJnZXQuc2Nyb2xsTGVmdDtcbiAgICBpZiAobGVmdCAhPT0gdGhpcy5zY3JvbGxMZWZ0KSB7XG4gICAgICB0aGlzLnNjcm9sbExlZnQgPSB0YXJnZXQuc2Nyb2xsTGVmdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZml4ZWRIZWFkZXIpIHtcbiAgICAgIGNvbnN0IHRvcDogbnVtYmVyID0gdGFyZ2V0LnNjcm9sbFRvcDtcbiAgICAgIGNvbnN0IGhlYWRlcjogYW55ID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IGNkay10YWJsZSA+IG5vdm8tZGF0YS10YWJsZS1oZWFkZXItcm93Jyk7XG4gICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgIGhlYWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3RvcH1weClgO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19