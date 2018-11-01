/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.name = 'novo-data-table';
        this.rowIdentifier = 'id';
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
        this.state.onExpandChange();
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
     * @return {?}
     */
    NovoDataTable.prototype.configureColumns = /**
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
            this.columnsLoaded = true;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoDataTable.prototype.scrollListener = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var left = ((/** @type {?} */ (event.target))).scrollLeft;
        if (left !== this.scrollLeft) {
            this.scrollLeft = ((/** @type {?} */ (event.target))).scrollLeft;
            this.ref.markForCheck();
        }
        if (this.fixedHeader) {
            /** @type {?} */
            var top_1 = ((/** @type {?} */ (event.target))).scrollTop;
            /** @type {?} */
            var header = ((/** @type {?} */ (this.novoDataTableContainer.nativeElement))).querySelector(':scope > cdk-table > novo-data-table-header-row');
            header.style.transform = "translateY(" + top_1 + "px)";
        }
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
                    template: "\n    <header *ngIf=\"(!(dataSource?.totallyEmpty && !state.userFiltered) && !loading) || forceShowHeader\"\n            [class.empty]=\"hideGlobalSearch && !paginationOptions && !templates['customActions']\">\n      <ng-container *ngTemplateOutlet=\"templates['customHeader']\"></ng-container>\n        <novo-search\n            alwaysOpen=\"true\"\n            (searchChanged)=\"onSearchChange($event)\"\n            [(ngModel)]=\"state.globalSearch\"\n            *ngIf=\"!hideGlobalSearch\"\n            [placeholder]=\"searchOptions?.placeholder\"\n            [hint]=\"searchOptions?.tooltip\">\n        </novo-search>\n        <novo-data-table-pagination\n            *ngIf=\"paginationOptions\"\n            [theme]=\"paginationOptions.theme\"\n            [length]=\"dataSource?.currentTotal\"\n            [page]=\"paginationOptions.page\"\n            [pageSize]=\"paginationOptions.pageSize\"\n            [pageSizeOptions]=\"paginationOptions.pageSizeOptions\">\n        </novo-data-table-pagination>\n        <div class=\"novo-data-table-actions\" *ngIf=\"templates['customActions']\">\n          <ng-container *ngTemplateOutlet=\"templates['customActions']\"></ng-container>\n        </div>\n    </header>\n    <div class=\"novo-data-table-loading-mask\" *ngIf=\"dataSource?.loading || loading\" data-automation-id=\"novo-data-table-loading\">\n        <novo-loading></novo-loading>\n    </div>\n    <div class=\"novo-data-table-outside-container\">\n        <div class=\"novo-data-table-custom-filter\" *ngIf=\"customFilter\">\n          <ng-container *ngTemplateOutlet=\"templates['customFilter']\"></ng-container>\n        </div>\n        <div #novoDataTableContainer class=\"novo-data-table-container\" [class.empty-user-filtered]=\"dataSource?.currentlyEmpty && state.userFiltered\" [class.empty]=\"dataSource?.totallyEmpty && !dataSource?.loading && !loading && !state.userFiltered && !dataSource.pristine\">\n            <cdk-table *ngIf=\"(columns?.length > 0) && columnsLoaded && dataSource\" [dataSource]=\"dataSource\" [trackBy]=\"trackByFn\" novoDataTableSortFilter [class.expandable]=\"expandable\" [class.empty]=\"dataSource?.currentlyEmpty && state.userFiltered\" [hidden]=\"dataSource?.totallyEmpty && !state.userFiltered\">\n                <ng-container cdkColumnDef=\"selection\">\n                    <novo-data-table-checkbox-header-cell *cdkHeaderCellDef></novo-data-table-checkbox-header-cell>\n                    <novo-data-table-checkbox-cell *cdkCellDef=\"let row; let i = index\" [row]=\"row\"></novo-data-table-checkbox-cell>\n                </ng-container>\n                <ng-container cdkColumnDef=\"expand\">\n                    <novo-data-table-expand-header-cell *cdkHeaderCellDef></novo-data-table-expand-header-cell>\n                    <novo-data-table-expand-cell *cdkCellDef=\"let row; let i = index\" [row]=\"row\"></novo-data-table-expand-cell>\n                </ng-container>\n                <ng-container *ngFor=\"let column of columns;trackBy: trackColumnsBy\" [cdkColumnDef]=\"column.id\">\n                  <novo-data-table-header-cell *cdkHeaderCellDef [column]=\"column\" [novo-data-table-cell-config]=\"column\" [defaultSort]=\"defaultSort\" [class.empty]=\"column?.type === 'action' && !column?.label\" [class.button-header-cell]=\"column?.type === 'expand' || (column?.type === 'action' && !column?.action?.options)\" [class.dropdown-header-cell]=\"column?.type === 'action' && column?.action?.options\"></novo-data-table-header-cell>\n                  <novo-data-table-cell *cdkCellDef=\"let row\" [column]=\"column\" [row]=\"row\" [template]=\"columnToTemplate[column.id]\" [class.empty]=\"column?.type === 'action' && !column?.label\" [class.button-cell]=\"column?.type === 'expand' || (column?.type === 'action' && !column?.action?.options)\" [class.dropdown-cell]=\"column?.type === 'action' && column?.action?.options\"></novo-data-table-cell>\n                </ng-container>\n                <novo-data-table-header-row *cdkHeaderRowDef=\"displayedColumns\" data-automation-id=\"novo-data-table-header-row\"></novo-data-table-header-row>\n                <novo-data-table-row *cdkRowDef=\"let row; columns: displayedColumns\" [novoDataTableExpand]=\"detailRowTemplate\" [row]=\"row\" [id]=\"name + '-' + row[rowIdentifier]\" [dataAutomationId]=\"row[rowIdentifier]\"></novo-data-table-row>\n            </cdk-table>\n            <div class=\"novo-data-table-footer\" *ngIf=\"templates['footer']\">\n              <ng-container *ngTemplateOutlet=\"templates['footer']; context: {$implicit: columns, data: dataSource.data}\"></ng-container>\n            </div>\n            <div class=\"novo-data-table-no-results-container\" [style.left.px]=\"scrollLeft\" *ngIf=\"dataSource?.currentlyEmpty && state.userFiltered && !dataSource?.loading && !loading && !dataSource.pristine\">\n              <div class=\"novo-data-table-empty-message\" >\n                <ng-container *ngTemplateOutlet=\"templates['noResultsMessage'] || templates['defaultNoResultsMessage']\"></ng-container>\n              </div>\n            </div>\n        </div>\n        <div class=\"novo-data-table-empty-container\" *ngIf=\"dataSource?.totallyEmpty && !dataSource?.loading && !loading && !state.userFiltered && !dataSource.pristine\">\n          <div class=\"novo-data-table-empty-message\">\n            <ng-container *ngTemplateOutlet=\"templates['emptyMessage'] || templates['defaultNoResultsMessage']\"></ng-container>\n          </div>\n        </div>\n    </div>\n\n      <!-- DEFAULT CELL TEMPLATE -->\n    <ng-template novoTemplate=\"textCellTemplate\"\n          let-row\n          let-col=\"col\">\n          <span [style.width.px]=\"col?.width\" [style.min-width.px]=\"col?.width\" [style.max-width.px]=\"col?.width\">{{ row[col.id] | dataTableInterpolate:col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"dateCellTemplate\"\n          let-row\n          let-col=\"col\">\n          <span>{{ row[col.id] | dataTableInterpolate:col | dataTableDateRenderer:col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"datetimeCellTemplate\"\n          let-row\n          let-col=\"col\">\n          <span>{{ row[col.id] | dataTableInterpolate:col | dataTableDateTimeRenderer:col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"timeCellTemplate\"\n          let-row\n          let-col=\"col\">\n          <span>{{ row[col.id] | dataTableInterpolate:col | dataTableTimeRenderer:col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"currencyCellTemplate\"\n          let-row\n          let-col=\"col\">\n          <span>{{ row[col.id] | dataTableInterpolate:col | dataTableCurrencyRenderer:col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"numberCellTemplate\"\n          let-row\n          let-col=\"col\">\n          <span>{{ row[col.id] | dataTableInterpolate:col | dataTableNumberRenderer:col }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"percentCellTemplate\"\n        let-row\n        let-col=\"col\">\n        <span>{{ row[col.id] | dataTableInterpolate:col | dataTableNumberRenderer:col:true }}</span>\n    </ng-template>\n    <ng-template novoTemplate=\"linkCellTemplate\"\n          let-row\n          let-col=\"col\">\n          <a (click)=\"col.handlers?.click({originalEvent: $event, row: row})\" [style.width.px]=\"col?.width\" [style.min-width.px]=\"col?.width\" [style.max-width.px]=\"col?.width\">{{ row[col.id] | dataTableInterpolate:col }}</a>\n    </ng-template>\n    <ng-template novoTemplate=\"telCellTemplate\"\n          let-row\n          let-col=\"col\">\n        <a href=\"tel:{{ row[col.id] | dataTableInterpolate:col }}\" [target]=\"col?.attributes?.target\">{{ row[col.id] | dataTableInterpolate:col }}</a>\n    </ng-template>\n    <ng-template novoTemplate=\"mailtoCellTemplate\"\n          let-row\n          let-col=\"col\">\n          <a href=\"mailto:{{ row[col.id] | dataTableInterpolate:col }}\" [target]=\"col?.attributes?.target\">{{ row[col.id] | dataTableInterpolate:col }}</a>\n    </ng-template>\n    <ng-template novoTemplate=\"buttonCellTemplate\"\n          let-row\n          let-col=\"col\">\n          <p [tooltip]=\"col?.action?.tooltip\" tooltipPosition=\"right\">\n            <i class=\"bhi-{{ col?.action?.icon }} data-table-icon\" (click)=\"col.handlers?.click({ originalEvent: $event, row: row })\" [class.disabled]=\"isDisabled(col, row)\"></i>\n          </p>\n    </ng-template>\n    <ng-template novoTemplate=\"dropdownCellTemplate\"\n          let-row\n          let-col=\"col\">\n          <novo-dropdown parentScrollSelector=\".novo-data-table-container\" containerClass=\"novo-data-table-dropdown\">\n            <button type=\"button\" theme=\"dialogue\" icon=\"collapse\" inverse>{{ col.label }}</button>\n            <list>\n                <item *ngFor=\"let option of col?.action?.options\" (action)=\"option.handlers.click({ originalEvent: $event?.originalEvent, row: row })\" [disabled]=\"isDisabled(option, row)\">\n                    <span [attr.data-automation-id]=\"option.label\">{{ option.label }}</span>\n                </item>\n            </list>\n        </novo-dropdown>\n    </ng-template>\n    <ng-template novoTemplate=\"defaultNoResultsMessage\">\n      <h4><i class=\"bhi-search-question\"></i> {{ labels.noMatchingRecordsMessage }}</h4>\n    </ng-template>\n    <ng-template novoTemplate=\"defaultEmptyMessage\">\n      <h4><i class=\"bhi-search-question\"></i> {{ labels.emptyTableMessage }}</h4>\n    </ng-template>\n    <ng-template novoTemplate=\"expandedRow\">\n      You did not provide an \"expandedRow\" template!\n    </ng-template>\n    <ng-template #detailRowTemplate let-row>\n      <div class=\"novo-data-table-detail-row\" [@expand] style=\"overflow: hidden\">\n        <ng-container *ngTemplateOutlet=\"templates['expandedRow']; context: {$implicit: row}\"></ng-container>\n      </div>\n    </ng-template>\n    <!-- CUSTOM CELLS PASSED IN -->\n    <ng-content></ng-content>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [DataTableState]
                }] }
    ];
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
        displayedColumns: [{ type: Input }],
        paginationOptions: [{ type: Input }],
        searchOptions: [{ type: Input }],
        defaultSort: [{ type: Input }],
        name: [{ type: Input }],
        rowIdentifier: [{ type: Input }],
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
    NovoDataTable.prototype.trackByFn;
    /** @type {?} */
    NovoDataTable.prototype.templates;
    /** @type {?} */
    NovoDataTable.prototype.fixedHeader;
    /** @type {?} */
    NovoDataTable.prototype._customFilter;
    /** @type {?} */
    NovoDataTable.prototype._hasExandedRows;
    /** @type {?} */
    NovoDataTable.prototype._forceShowHeader;
    /** @type {?} */
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
    /** @type {?} */
    NovoDataTable.prototype.outsideFilterSubscription;
    /** @type {?} */
    NovoDataTable.prototype.refreshSubscription;
    /** @type {?} */
    NovoDataTable.prototype.resetSubscription;
    /** @type {?} */
    NovoDataTable.prototype.paginationSubscription;
    /** @type {?} */
    NovoDataTable.prototype._columns;
    /** @type {?} */
    NovoDataTable.prototype.scrollListenerHandler;
    /** @type {?} */
    NovoDataTable.prototype.labels;
    /** @type {?} */
    NovoDataTable.prototype.ref;
    /** @type {?} */
    NovoDataTable.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUVaLGlCQUFpQixFQUVqQixlQUFlLEVBQ2YsU0FBUyxFQUNULFlBQVksRUFFWixVQUFVLEVBQ1YsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTlELE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxJQUFJLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBUzlGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQUU5RTtJQThVRSx1QkFBbUIsTUFBd0IsRUFBVSxHQUFzQixFQUFTLEtBQXdCO1FBQTVHLGlCQWdCQztRQWhCa0IsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFTLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBeks1RyxrQ0FBNkIsR0FBWSxLQUFLLENBQUM7UUFtQy9D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QUFLO21DQVNMLEtBQUs7cUNBVUwsTUFBTTt3QkFrQk4sV0FBVyxTQUFDLGFBQWE7K0JBS3pCLFdBQVcsU0FBQyxlQUFlOztJQTZOOUIsb0JBQUM7Q0FBQSxBQXRpQkQsSUFzaUJDO1NBbllZLGFBQWE7OztJQUN4QixzREFDK0M7O0lBRS9DLHdDQUN5Qzs7SUFDekMseUNBQzBDOztJQUMxQywrQ0FDbUM7O0lBbUJuQyx5Q0FBbUM7O0lBRW5DLDBDQUMrQzs7SUFDL0Msc0NBQ3VDOztJQUN2QyxvQ0FDMkM7O0lBQzNDLDZCQUNpQzs7SUFDakMsc0NBQzZCOztJQUM3QixrQ0FDOEM7O0lBQzlDLGtDQUNvRDs7SUFDcEQsb0NBQzZCOztJQW9FN0Isc0NBQStCOztJQVMvQix3Q0FBaUM7O0lBU2pDLHlDQUFrQzs7SUFVbEMsMENBQTBDOztJQUUxQywyQ0FDb0c7O0lBRXBHLG1DQUFzQzs7SUFDdEMsZ0NBQStCOztJQUMvQix5Q0FBa0U7O0lBQ2xFLHNDQUFzQzs7SUFDdEMsa0NBQTBDOztJQUMxQyxtQ0FBOEI7O0lBQzlCLG1DQUFtQzs7SUFFbkMsa0RBQWdEOztJQUNoRCw0Q0FBMEM7O0lBQzFDLDBDQUF3Qzs7SUFDeEMsK0NBQTZDOztJQUM3QyxpQ0FBd0M7O0lBQ3hDLDhDQUFtQzs7SUFZdkIsK0JBQStCOztJQUFFLDRCQUE4Qjs7SUFBRSw4QkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25EZXN0cm95LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkcmVuLFxuICBUZW1wbGF0ZVJlZixcbiAgRWxlbWVudFJlZixcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlIGFzIGFuaW1TdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuaW1wb3J0IHtcbiAgSURhdGFUYWJsZUNvbHVtbixcbiAgSURhdGFUYWJsZVBhZ2luYXRpb25PcHRpb25zLFxuICBJRGF0YVRhYmxlU2VhcmNoT3B0aW9ucyxcbiAgSURhdGFUYWJsZVNlcnZpY2UsXG4gIElEYXRhVGFibGVQcmVmZXJlbmNlcyxcbn0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IERhdGFUYWJsZVNvdXJjZSB9IGZyb20gJy4vZGF0YS10YWJsZS5zb3VyY2UnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVTdGF0ZSB9IGZyb20gJy4vc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9UZW1wbGF0ZSB9IGZyb20gJy4uL2NvbW1vbi9ub3ZvLXRlbXBsYXRlL25vdm8tdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IG5vdGlmeSB9IGZyb20gJy4uLy4uL3V0aWxzL25vdGlmaWVyL25vdGlmaWVyLnV0aWwnO1xuaW1wb3J0IHsgU3RhdGljRGF0YVRhYmxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc3RhdGljLWRhdGEtdGFibGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0YS10YWJsZScsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdleHBhbmQnLCBbXG4gICAgICBhbmltU3RhdGUoJ3ZvaWQnLCBzdHlsZSh7IGhlaWdodDogJzBweCcsIG1pbkhlaWdodDogJzAnLCB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9KSksXG4gICAgICBhbmltU3RhdGUoJyonLCBzdHlsZSh7IGhlaWdodDogJyonLCB2aXNpYmlsaXR5OiAndmlzaWJsZScgfSkpLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA8PT4gKicsIGFuaW1hdGUoJzcwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpJykpLFxuICAgIF0pLFxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoZWFkZXIgKm5nSWY9XCIoIShkYXRhU291cmNlPy50b3RhbGx5RW1wdHkgJiYgIXN0YXRlLnVzZXJGaWx0ZXJlZCkgJiYgIWxvYWRpbmcpIHx8IGZvcmNlU2hvd0hlYWRlclwiXG4gICAgICAgICAgICBbY2xhc3MuZW1wdHldPVwiaGlkZUdsb2JhbFNlYXJjaCAmJiAhcGFnaW5hdGlvbk9wdGlvbnMgJiYgIXRlbXBsYXRlc1snY3VzdG9tQWN0aW9ucyddXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydjdXN0b21IZWFkZXInXVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8bm92by1zZWFyY2hcbiAgICAgICAgICAgIGFsd2F5c09wZW49XCJ0cnVlXCJcbiAgICAgICAgICAgIChzZWFyY2hDaGFuZ2VkKT1cIm9uU2VhcmNoQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzdGF0ZS5nbG9iYWxTZWFyY2hcIlxuICAgICAgICAgICAgKm5nSWY9XCIhaGlkZUdsb2JhbFNlYXJjaFwiXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwic2VhcmNoT3B0aW9ucz8ucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgW2hpbnRdPVwic2VhcmNoT3B0aW9ucz8udG9vbHRpcFwiPlxuICAgICAgICA8L25vdm8tc2VhcmNoPlxuICAgICAgICA8bm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb25cbiAgICAgICAgICAgICpuZ0lmPVwicGFnaW5hdGlvbk9wdGlvbnNcIlxuICAgICAgICAgICAgW3RoZW1lXT1cInBhZ2luYXRpb25PcHRpb25zLnRoZW1lXCJcbiAgICAgICAgICAgIFtsZW5ndGhdPVwiZGF0YVNvdXJjZT8uY3VycmVudFRvdGFsXCJcbiAgICAgICAgICAgIFtwYWdlXT1cInBhZ2luYXRpb25PcHRpb25zLnBhZ2VcIlxuICAgICAgICAgICAgW3BhZ2VTaXplXT1cInBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplXCJcbiAgICAgICAgICAgIFtwYWdlU2l6ZU9wdGlvbnNdPVwicGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemVPcHRpb25zXCI+XG4gICAgICAgIDwvbm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtYWN0aW9uc1wiICpuZ0lmPVwidGVtcGxhdGVzWydjdXN0b21BY3Rpb25zJ11cIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydjdXN0b21BY3Rpb25zJ11cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1sb2FkaW5nLW1hc2tcIiAqbmdJZj1cImRhdGFTb3VyY2U/LmxvYWRpbmcgfHwgbG9hZGluZ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1sb2FkaW5nXCI+XG4gICAgICAgIDxub3ZvLWxvYWRpbmc+PC9ub3ZvLWxvYWRpbmc+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1vdXRzaWRlLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWN1c3RvbS1maWx0ZXJcIiAqbmdJZj1cImN1c3RvbUZpbHRlclwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbJ2N1c3RvbUZpbHRlciddXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICNub3ZvRGF0YVRhYmxlQ29udGFpbmVyIGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWNvbnRhaW5lclwiIFtjbGFzcy5lbXB0eS11c2VyLWZpbHRlcmVkXT1cImRhdGFTb3VyY2U/LmN1cnJlbnRseUVtcHR5ICYmIHN0YXRlLnVzZXJGaWx0ZXJlZFwiIFtjbGFzcy5lbXB0eV09XCJkYXRhU291cmNlPy50b3RhbGx5RW1wdHkgJiYgIWRhdGFTb3VyY2U/LmxvYWRpbmcgJiYgIWxvYWRpbmcgJiYgIXN0YXRlLnVzZXJGaWx0ZXJlZCAmJiAhZGF0YVNvdXJjZS5wcmlzdGluZVwiPlxuICAgICAgICAgICAgPGNkay10YWJsZSAqbmdJZj1cIihjb2x1bW5zPy5sZW5ndGggPiAwKSAmJiBjb2x1bW5zTG9hZGVkICYmIGRhdGFTb3VyY2VcIiBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW3RyYWNrQnldPVwidHJhY2tCeUZuXCIgbm92b0RhdGFUYWJsZVNvcnRGaWx0ZXIgW2NsYXNzLmV4cGFuZGFibGVdPVwiZXhwYW5kYWJsZVwiIFtjbGFzcy5lbXB0eV09XCJkYXRhU291cmNlPy5jdXJyZW50bHlFbXB0eSAmJiBzdGF0ZS51c2VyRmlsdGVyZWRcIiBbaGlkZGVuXT1cImRhdGFTb3VyY2U/LnRvdGFsbHlFbXB0eSAmJiAhc3RhdGUudXNlckZpbHRlcmVkXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBjZGtDb2x1bW5EZWY9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPG5vdm8tZGF0YS10YWJsZS1jaGVja2JveC1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj48L25vdm8tZGF0YS10YWJsZS1jaGVja2JveC1oZWFkZXItY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPG5vdm8tZGF0YS10YWJsZS1jaGVja2JveC1jZWxsICpjZGtDZWxsRGVmPVwibGV0IHJvdzsgbGV0IGkgPSBpbmRleFwiIFtyb3ddPVwicm93XCI+PC9ub3ZvLWRhdGEtdGFibGUtY2hlY2tib3gtY2VsbD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cImV4cGFuZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bm92by1kYXRhLXRhYmxlLWV4cGFuZC1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj48L25vdm8tZGF0YS10YWJsZS1leHBhbmQtaGVhZGVyLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLWRhdGEtdGFibGUtZXhwYW5kLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgcm93OyBsZXQgaSA9IGluZGV4XCIgW3Jvd109XCJyb3dcIj48L25vdm8tZGF0YS10YWJsZS1leHBhbmQtY2VsbD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uczt0cmFja0J5OiB0cmFja0NvbHVtbnNCeVwiIFtjZGtDb2x1bW5EZWZdPVwiY29sdW1uLmlkXCI+XG4gICAgICAgICAgICAgICAgICA8bm92by1kYXRhLXRhYmxlLWhlYWRlci1jZWxsICpjZGtIZWFkZXJDZWxsRGVmIFtjb2x1bW5dPVwiY29sdW1uXCIgW25vdm8tZGF0YS10YWJsZS1jZWxsLWNvbmZpZ109XCJjb2x1bW5cIiBbZGVmYXVsdFNvcnRdPVwiZGVmYXVsdFNvcnRcIiBbY2xhc3MuZW1wdHldPVwiY29sdW1uPy50eXBlID09PSAnYWN0aW9uJyAmJiAhY29sdW1uPy5sYWJlbFwiIFtjbGFzcy5idXR0b24taGVhZGVyLWNlbGxdPVwiY29sdW1uPy50eXBlID09PSAnZXhwYW5kJyB8fCAoY29sdW1uPy50eXBlID09PSAnYWN0aW9uJyAmJiAhY29sdW1uPy5hY3Rpb24/Lm9wdGlvbnMpXCIgW2NsYXNzLmRyb3Bkb3duLWhlYWRlci1jZWxsXT1cImNvbHVtbj8udHlwZSA9PT0gJ2FjdGlvbicgJiYgY29sdW1uPy5hY3Rpb24/Lm9wdGlvbnNcIj48L25vdm8tZGF0YS10YWJsZS1oZWFkZXItY2VsbD5cbiAgICAgICAgICAgICAgICAgIDxub3ZvLWRhdGEtdGFibGUtY2VsbCAqY2RrQ2VsbERlZj1cImxldCByb3dcIiBbY29sdW1uXT1cImNvbHVtblwiIFtyb3ddPVwicm93XCIgW3RlbXBsYXRlXT1cImNvbHVtblRvVGVtcGxhdGVbY29sdW1uLmlkXVwiIFtjbGFzcy5lbXB0eV09XCJjb2x1bW4/LnR5cGUgPT09ICdhY3Rpb24nICYmICFjb2x1bW4/LmxhYmVsXCIgW2NsYXNzLmJ1dHRvbi1jZWxsXT1cImNvbHVtbj8udHlwZSA9PT0gJ2V4cGFuZCcgfHwgKGNvbHVtbj8udHlwZSA9PT0gJ2FjdGlvbicgJiYgIWNvbHVtbj8uYWN0aW9uPy5vcHRpb25zKVwiIFtjbGFzcy5kcm9wZG93bi1jZWxsXT1cImNvbHVtbj8udHlwZSA9PT0gJ2FjdGlvbicgJiYgY29sdW1uPy5hY3Rpb24/Lm9wdGlvbnNcIj48L25vdm8tZGF0YS10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxub3ZvLWRhdGEtdGFibGUtaGVhZGVyLXJvdyAqY2RrSGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1oZWFkZXItcm93XCI+PC9ub3ZvLWRhdGEtdGFibGUtaGVhZGVyLXJvdz5cbiAgICAgICAgICAgICAgICA8bm92by1kYXRhLXRhYmxlLXJvdyAqY2RrUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1uc1wiIFtub3ZvRGF0YVRhYmxlRXhwYW5kXT1cImRldGFpbFJvd1RlbXBsYXRlXCIgW3Jvd109XCJyb3dcIiBbaWRdPVwibmFtZSArICctJyArIHJvd1tyb3dJZGVudGlmaWVyXVwiIFtkYXRhQXV0b21hdGlvbklkXT1cInJvd1tyb3dJZGVudGlmaWVyXVwiPjwvbm92by1kYXRhLXRhYmxlLXJvdz5cbiAgICAgICAgICAgIDwvY2RrLXRhYmxlPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1mb290ZXJcIiAqbmdJZj1cInRlbXBsYXRlc1snZm9vdGVyJ11cIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlc1snZm9vdGVyJ107IGNvbnRleHQ6IHskaW1wbGljaXQ6IGNvbHVtbnMsIGRhdGE6IGRhdGFTb3VyY2UuZGF0YX1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1uby1yZXN1bHRzLWNvbnRhaW5lclwiIFtzdHlsZS5sZWZ0LnB4XT1cInNjcm9sbExlZnRcIiAqbmdJZj1cImRhdGFTb3VyY2U/LmN1cnJlbnRseUVtcHR5ICYmIHN0YXRlLnVzZXJGaWx0ZXJlZCAmJiAhZGF0YVNvdXJjZT8ubG9hZGluZyAmJiAhbG9hZGluZyAmJiAhZGF0YVNvdXJjZS5wcmlzdGluZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWVtcHR5LW1lc3NhZ2VcIiA+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlc1snbm9SZXN1bHRzTWVzc2FnZSddIHx8IHRlbXBsYXRlc1snZGVmYXVsdE5vUmVzdWx0c01lc3NhZ2UnXVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1lbXB0eS1jb250YWluZXJcIiAqbmdJZj1cImRhdGFTb3VyY2U/LnRvdGFsbHlFbXB0eSAmJiAhZGF0YVNvdXJjZT8ubG9hZGluZyAmJiAhbG9hZGluZyAmJiAhc3RhdGUudXNlckZpbHRlcmVkICYmICFkYXRhU291cmNlLnByaXN0aW5lXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1lbXB0eS1tZXNzYWdlXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydlbXB0eU1lc3NhZ2UnXSB8fCB0ZW1wbGF0ZXNbJ2RlZmF1bHROb1Jlc3VsdHNNZXNzYWdlJ11cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICAgIDwhLS0gREVGQVVMVCBDRUxMIFRFTVBMQVRFIC0tPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJ0ZXh0Q2VsbFRlbXBsYXRlXCJcbiAgICAgICAgICBsZXQtcm93XG4gICAgICAgICAgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgICAgIDxzcGFuIFtzdHlsZS53aWR0aC5weF09XCJjb2w/LndpZHRoXCIgW3N0eWxlLm1pbi13aWR0aC5weF09XCJjb2w/LndpZHRoXCIgW3N0eWxlLm1heC13aWR0aC5weF09XCJjb2w/LndpZHRoXCI+e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTpjb2wgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiZGF0ZUNlbGxUZW1wbGF0ZVwiXG4gICAgICAgICAgbGV0LXJvd1xuICAgICAgICAgIGxldC1jb2w9XCJjb2xcIj5cbiAgICAgICAgICA8c3Bhbj57eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOmNvbCB8IGRhdGFUYWJsZURhdGVSZW5kZXJlcjpjb2wgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiZGF0ZXRpbWVDZWxsVGVtcGxhdGVcIlxuICAgICAgICAgIGxldC1yb3dcbiAgICAgICAgICBsZXQtY29sPVwiY29sXCI+XG4gICAgICAgICAgPHNwYW4+e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTpjb2wgfCBkYXRhVGFibGVEYXRlVGltZVJlbmRlcmVyOmNvbCB9fTwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJ0aW1lQ2VsbFRlbXBsYXRlXCJcbiAgICAgICAgICBsZXQtcm93XG4gICAgICAgICAgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgICAgIDxzcGFuPnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6Y29sIHwgZGF0YVRhYmxlVGltZVJlbmRlcmVyOmNvbCB9fTwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJjdXJyZW5jeUNlbGxUZW1wbGF0ZVwiXG4gICAgICAgICAgbGV0LXJvd1xuICAgICAgICAgIGxldC1jb2w9XCJjb2xcIj5cbiAgICAgICAgICA8c3Bhbj57eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOmNvbCB8IGRhdGFUYWJsZUN1cnJlbmN5UmVuZGVyZXI6Y29sIH19PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cIm51bWJlckNlbGxUZW1wbGF0ZVwiXG4gICAgICAgICAgbGV0LXJvd1xuICAgICAgICAgIGxldC1jb2w9XCJjb2xcIj5cbiAgICAgICAgICA8c3Bhbj57eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOmNvbCB8IGRhdGFUYWJsZU51bWJlclJlbmRlcmVyOmNvbCB9fTwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJwZXJjZW50Q2VsbFRlbXBsYXRlXCJcbiAgICAgICAgbGV0LXJvd1xuICAgICAgICBsZXQtY29sPVwiY29sXCI+XG4gICAgICAgIDxzcGFuPnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6Y29sIHwgZGF0YVRhYmxlTnVtYmVyUmVuZGVyZXI6Y29sOnRydWUgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwibGlua0NlbGxUZW1wbGF0ZVwiXG4gICAgICAgICAgbGV0LXJvd1xuICAgICAgICAgIGxldC1jb2w9XCJjb2xcIj5cbiAgICAgICAgICA8YSAoY2xpY2spPVwiY29sLmhhbmRsZXJzPy5jbGljayh7b3JpZ2luYWxFdmVudDogJGV2ZW50LCByb3c6IHJvd30pXCIgW3N0eWxlLndpZHRoLnB4XT1cImNvbD8ud2lkdGhcIiBbc3R5bGUubWluLXdpZHRoLnB4XT1cImNvbD8ud2lkdGhcIiBbc3R5bGUubWF4LXdpZHRoLnB4XT1cImNvbD8ud2lkdGhcIj57eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOmNvbCB9fTwvYT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJ0ZWxDZWxsVGVtcGxhdGVcIlxuICAgICAgICAgIGxldC1yb3dcbiAgICAgICAgICBsZXQtY29sPVwiY29sXCI+XG4gICAgICAgIDxhIGhyZWY9XCJ0ZWw6e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTpjb2wgfX1cIiBbdGFyZ2V0XT1cImNvbD8uYXR0cmlidXRlcz8udGFyZ2V0XCI+e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTpjb2wgfX08L2E+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwibWFpbHRvQ2VsbFRlbXBsYXRlXCJcbiAgICAgICAgICBsZXQtcm93XG4gICAgICAgICAgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTpjb2wgfX1cIiBbdGFyZ2V0XT1cImNvbD8uYXR0cmlidXRlcz8udGFyZ2V0XCI+e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTpjb2wgfX08L2E+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiYnV0dG9uQ2VsbFRlbXBsYXRlXCJcbiAgICAgICAgICBsZXQtcm93XG4gICAgICAgICAgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgICAgIDxwIFt0b29sdGlwXT1cImNvbD8uYWN0aW9uPy50b29sdGlwXCIgdG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXt7IGNvbD8uYWN0aW9uPy5pY29uIH19IGRhdGEtdGFibGUtaWNvblwiIChjbGljayk9XCJjb2wuaGFuZGxlcnM/LmNsaWNrKHsgb3JpZ2luYWxFdmVudDogJGV2ZW50LCByb3c6IHJvdyB9KVwiIFtjbGFzcy5kaXNhYmxlZF09XCJpc0Rpc2FibGVkKGNvbCwgcm93KVwiPjwvaT5cbiAgICAgICAgICA8L3A+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiZHJvcGRvd25DZWxsVGVtcGxhdGVcIlxuICAgICAgICAgIGxldC1yb3dcbiAgICAgICAgICBsZXQtY29sPVwiY29sXCI+XG4gICAgICAgICAgPG5vdm8tZHJvcGRvd24gcGFyZW50U2Nyb2xsU2VsZWN0b3I9XCIubm92by1kYXRhLXRhYmxlLWNvbnRhaW5lclwiIGNvbnRhaW5lckNsYXNzPVwibm92by1kYXRhLXRhYmxlLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aGVtZT1cImRpYWxvZ3VlXCIgaWNvbj1cImNvbGxhcHNlXCIgaW52ZXJzZT57eyBjb2wubGFiZWwgfX08L2J1dHRvbj5cbiAgICAgICAgICAgIDxsaXN0PlxuICAgICAgICAgICAgICAgIDxpdGVtICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29sPy5hY3Rpb24/Lm9wdGlvbnNcIiAoYWN0aW9uKT1cIm9wdGlvbi5oYW5kbGVycy5jbGljayh7IG9yaWdpbmFsRXZlbnQ6ICRldmVudD8ub3JpZ2luYWxFdmVudCwgcm93OiByb3cgfSlcIiBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZChvcHRpb24sIHJvdylcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIm9wdGlvbi5sYWJlbFwiPnt7IG9wdGlvbi5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgIDwvbm92by1kcm9wZG93bj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJkZWZhdWx0Tm9SZXN1bHRzTWVzc2FnZVwiPlxuICAgICAgPGg0PjxpIGNsYXNzPVwiYmhpLXNlYXJjaC1xdWVzdGlvblwiPjwvaT4ge3sgbGFiZWxzLm5vTWF0Y2hpbmdSZWNvcmRzTWVzc2FnZSB9fTwvaDQ+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiZGVmYXVsdEVtcHR5TWVzc2FnZVwiPlxuICAgICAgPGg0PjxpIGNsYXNzPVwiYmhpLXNlYXJjaC1xdWVzdGlvblwiPjwvaT4ge3sgbGFiZWxzLmVtcHR5VGFibGVNZXNzYWdlIH19PC9oND5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJleHBhbmRlZFJvd1wiPlxuICAgICAgWW91IGRpZCBub3QgcHJvdmlkZSBhbiBcImV4cGFuZGVkUm93XCIgdGVtcGxhdGUhXG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI2RldGFpbFJvd1RlbXBsYXRlIGxldC1yb3c+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWRldGFpbC1yb3dcIiBbQGV4cGFuZF0gc3R5bGU9XCJvdmVyZmxvdzogaGlkZGVuXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbJ2V4cGFuZGVkUm93J107IGNvbnRleHQ6IHskaW1wbGljaXQ6IHJvd31cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPCEtLSBDVVNUT00gQ0VMTFMgUEFTU0VEIElOIC0tPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0RhdGFUYWJsZVN0YXRlXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZTxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZ2xvYmFsLXNlYXJjaC1oaWRkZW4nKVxuICBnbG9iYWxTZWFyY2hIaWRkZW5DbGFzc1RvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTm92b1RlbXBsYXRlKVxuICBjdXN0b21UZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOb3ZvVGVtcGxhdGU+O1xuICBAVmlld0NoaWxkcmVuKE5vdm9UZW1wbGF0ZSlcbiAgZGVmYXVsdFRlbXBsYXRlczogUXVlcnlMaXN0PE5vdm9UZW1wbGF0ZT47XG4gIEBWaWV3Q2hpbGQoJ25vdm9EYXRhVGFibGVDb250YWluZXInKVxuICBub3ZvRGF0YVRhYmxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNwbGF5ZWRDb2x1bW5zKGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHRoaXMuZGlzcGxheWVkQ29sdW1ucyAmJiB0aGlzLmRpc3BsYXllZENvbHVtbnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBpZiAodGhpcy5uYW1lICE9PSAnbm92by1kYXRhLXRhYmxlJykge1xuICAgICAgICB0aGlzLnByZWZlcmVuY2VzQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgZGlzcGxheWVkQ29sdW1uczogZGlzcGxheWVkQ29sdW1ucyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3RpZnkoJ011c3QgaGF2ZSBbbmFtZV0gc2V0IG9uIGRhdGEtdGFibGUgdG8gdXNlIHByZWZlcmVuY2VzIScpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9kaXNhYmxlZENvbHVtbnMgPSBkaXNwbGF5ZWRDb2x1bW5zO1xuICB9XG4gIGdldCBkaXNwbGF5ZWRDb2x1bW5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWRDb2x1bW5zO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkQ29sdW1uczogc3RyaW5nW107XG5cbiAgQElucHV0KClcbiAgcGFnaW5hdGlvbk9wdGlvbnM6IElEYXRhVGFibGVQYWdpbmF0aW9uT3B0aW9ucztcbiAgQElucHV0KClcbiAgc2VhcmNoT3B0aW9uczogSURhdGFUYWJsZVNlYXJjaE9wdGlvbnM7XG4gIEBJbnB1dCgpXG4gIGRlZmF1bHRTb3J0OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfTtcbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nID0gJ25vdm8tZGF0YS10YWJsZSc7XG4gIEBJbnB1dCgpXG4gIHJvd0lkZW50aWZpZXI6IHN0cmluZyA9ICdpZCc7XG4gIEBJbnB1dCgpXG4gIHRyYWNrQnlGbjogRnVuY3Rpb24gPSAoaW5kZXgsIGl0ZW0pID0+IGl0ZW0uaWRcbiAgQElucHV0KClcbiAgdGVtcGxhdGVzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPGFueT4gfSA9IHt9O1xuICBASW5wdXQoKVxuICBmaXhlZEhlYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRhVGFibGVTZXJ2aWNlKHNlcnZpY2U6IElEYXRhVGFibGVTZXJ2aWNlPFQ+KSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgaWYgKCFzZXJ2aWNlKSB7XG4gICAgICBzZXJ2aWNlID0gbmV3IFN0YXRpY0RhdGFUYWJsZVNlcnZpY2UoW10pO1xuICAgIH1cbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgRGF0YVRhYmxlU291cmNlPFQ+KHNlcnZpY2UsIHRoaXMuc3RhdGUsIHRoaXMucmVmKTtcbiAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcm93cyhyb3dzOiBUW10pIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICBsZXQgc2VydmljZSA9IG5ldyBTdGF0aWNEYXRhVGFibGVTZXJ2aWNlKHJvd3MpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBEYXRhVGFibGVTb3VyY2U8VD4oc2VydmljZSwgdGhpcy5zdGF0ZSwgdGhpcy5yZWYpO1xuICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBvdXRzaWRlRmlsdGVyKG91dHNpZGVGaWx0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+KSB7XG4gICAgLy8gVW5zdWJzY3JpYmVcbiAgICBpZiAodGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm91dHNpZGVGaWx0ZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKG91dHNpZGVGaWx0ZXIpIHtcbiAgICAgIC8vIFJlLXN1YnNjcmliZVxuICAgICAgdGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uID0gb3V0c2lkZUZpbHRlci5zdWJzY3JpYmUoKGZpbHRlcjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUub3V0c2lkZUZpbHRlciA9IGZpbHRlcjtcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBnbG9iYWxTZWFyY2g6IHRoaXMuc3RhdGUuZ2xvYmFsU2VhcmNoLCBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSk7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHJlZnJlc2hTdWJqZWN0KHJlZnJlc2hTdWJqZWN0OiBFdmVudEVtaXR0ZXI8YW55Pikge1xuICAgIC8vIFVuc3Vic2NyaWJlXG4gICAgaWYgKHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmIChyZWZyZXNoU3ViamVjdCkge1xuICAgICAgLy8gUmUtc3Vic2NyaWJlXG4gICAgICB0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24gPSByZWZyZXNoU3ViamVjdC5zdWJzY3JpYmUoKGZpbHRlcjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUuaXNGb3JjZVJlZnJlc2ggPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZXMubmV4dCh7IGdsb2JhbFNlYXJjaDogdGhpcy5zdGF0ZS5nbG9iYWxTZWFyY2gsIGZpbHRlcjogdGhpcy5zdGF0ZS5maWx0ZXIsIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCB9KTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgY29sdW1ucyhjb2x1bW5zOiBJRGF0YVRhYmxlQ29sdW1uPFQ+W10pIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gY29sdW1ucztcbiAgICB0aGlzLmNvbmZpZ3VyZUNvbHVtbnMoKTtcbiAgfVxuICBnZXQgY29sdW1ucygpOiBJRGF0YVRhYmxlQ29sdW1uPFQ+W10ge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGN1c3RvbUZpbHRlcih2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fY3VzdG9tRmlsdGVyID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBjdXN0b21GaWx0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUZpbHRlcjtcbiAgfVxuICBwcml2YXRlIF9jdXN0b21GaWx0ZXI6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGhhc0V4YW5kZWRSb3dzKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oYXNFeGFuZGVkUm93cyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgaGFzRXhhbmRlZFJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0V4YW5kZWRSb3dzO1xuICB9XG4gIHByaXZhdGUgX2hhc0V4YW5kZWRSb3dzOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmb3JjZVNob3dIZWFkZXIodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2ZvcmNlU2hvd0hlYWRlciA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgZm9yY2VTaG93SGVhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JjZVNob3dIZWFkZXI7XG4gIH1cbiAgcHJpdmF0ZSBfZm9yY2VTaG93SGVhZGVyOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBoaWRlR2xvYmFsU2VhcmNoKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWRlR2xvYmFsU2VhcmNoID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICAgIHRoaXMuZ2xvYmFsU2VhcmNoSGlkZGVuQ2xhc3NUb2dnbGUgPSB0aGlzLl9oaWRlR2xvYmFsU2VhcmNoO1xuICB9XG4gIGdldCBoaWRlR2xvYmFsU2VhcmNoKCkge1xuICAgIHJldHVybiB0aGlzLl9oaWRlR2xvYmFsU2VhcmNoO1xuICB9XG4gIHByaXZhdGUgX2hpZGVHbG9iYWxTZWFyY2g6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKVxuICBwcmVmZXJlbmNlc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlUHJlZmVyZW5jZXM+ID0gbmV3IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlUHJlZmVyZW5jZXM+KCk7XG5cbiAgcHVibGljIGRhdGFTb3VyY2U6IERhdGFUYWJsZVNvdXJjZTxUPjtcbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgY29sdW1uVG9UZW1wbGF0ZTogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxhbnk+IH0gPSB7fTtcbiAgcHVibGljIGNvbHVtbnNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNlbGVjdGlvbjogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG4gIHB1YmxpYyBzY3JvbGxMZWZ0OiBudW1iZXIgPSAwO1xuICBwdWJsaWMgZXhwYW5kYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgb3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHJlZnJlc2hTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSByZXNldFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHBhZ2luYXRpb25TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfY29sdW1uczogSURhdGFUYWJsZUNvbHVtbjxUPltdO1xuICBwcml2YXRlIHNjcm9sbExpc3RlbmVySGFuZGxlcjogYW55O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZW1wdHknKVxuICBnZXQgZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZSAmJiB0aGlzLmRhdGFTb3VyY2UudG90YWxseUVtcHR5O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sb2FkaW5nJylcbiAgZ2V0IGxvYWRpbmdDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nIHx8ICh0aGlzLmRhdGFTb3VyY2UgJiYgdGhpcy5kYXRhU291cmNlLmxvYWRpbmcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgc3RhdGU6IERhdGFUYWJsZVN0YXRlPFQ+KSB7XG4gICAgdGhpcy5zY3JvbGxMaXN0ZW5lckhhbmRsZXIgPSB0aGlzLnNjcm9sbExpc3RlbmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYWdpbmF0aW9uU3Vic2NyaXB0aW9uID0gdGhpcy5zdGF0ZS5wYWdpbmF0aW9uU291cmNlLnN1YnNjcmliZSgoZXZlbnQ6IHsgaXNQYWdlU2l6ZUNoYW5nZTogYm9vbGVhbjsgcGFnZVNpemU6IG51bWJlciB9KSA9PiB7XG4gICAgICBpZiAodGhpcy5uYW1lICE9PSAnbm92by1kYXRhLXRhYmxlJykge1xuICAgICAgICBpZiAoZXZlbnQuaXNQYWdlU2l6ZUNoYW5nZSkge1xuICAgICAgICAgIHRoaXMucHJlZmVyZW5jZXNDaGFuZ2VkLmVtaXQoeyBuYW1lOiB0aGlzLm5hbWUsIHBhZ2VTaXplOiBldmVudC5wYWdlU2l6ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm90aWZ5KCdNdXN0IGhhdmUgW25hbWVdIHNldCBvbiBkYXRhLXRhYmxlIHRvIHVzZSBwcmVmZXJlbmNlcyEnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnJlc2V0U3Vic2NyaXB0aW9uID0gdGhpcy5zdGF0ZS5yZXNldFNvdXJjZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm5vdm9EYXRhVGFibGVDb250YWluZXIpIHtcbiAgICAgICh0aGlzLm5vdm9EYXRhVGFibGVDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50KS5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbExpc3RlbmVySGFuZGxlcik7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZXNldFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5yZXNldFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzcGxheWVkQ29sdW1ucyAmJiB0aGlzLmRpc3BsYXllZENvbHVtbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmV4cGFuZGFibGUgPSB0aGlzLmRpc3BsYXllZENvbHVtbnMuaW5jbHVkZXMoJ2V4cGFuZCcpO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdGVtcGxhdGVzIGRlZmluZWQgaGVyZVxuICAgIHRoaXMuZGVmYXVsdFRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAvLyBPbmx5IG92ZXJyaWRlIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdFxuICAgICAgaWYgKCF0aGlzLnRlbXBsYXRlc1tpdGVtLmdldFR5cGUoKV0pIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXNbaXRlbS5nZXRUeXBlKCldID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBDdXN0b20gdGVtcGxhdGVzIHBhc3NlZCBpblxuICAgIHRoaXMuY3VzdG9tVGVtcGxhdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIC8vIE92ZXJyaWRlIGFueXRoaW5nIHRoYXQgaXMgY3VzdG9tIGFuZCBpbiBIVE1MXG4gICAgICB0aGlzLnRlbXBsYXRlc1tpdGVtLmdldFR5cGUoKV0gPSBpdGVtLnRlbXBsYXRlO1xuICAgIH0pO1xuICAgIC8vIExvYWQgY29sdW1uc1xuICAgIHRoaXMuY29uZmlndXJlQ29sdW1ucygpO1xuXG4gICAgLy8gU3RhdGVcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uT3B0aW9ucyAmJiAhdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlKSB7XG4gICAgICB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2UgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uT3B0aW9ucyAmJiAhdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZSkge1xuICAgICAgdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZSA9IDUwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uT3B0aW9ucyAmJiAhdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZU9wdGlvbnMpIHtcbiAgICAgIHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemVPcHRpb25zID0gWzEwLCAyNSwgNTAsIDEwMF07XG4gICAgfVxuICAgIHRoaXMuc3RhdGUucGFnZSA9IHRoaXMucGFnaW5hdGlvbk9wdGlvbnMgPyB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2UgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGF0ZS5wYWdlU2l6ZSA9IHRoaXMucGFnaW5hdGlvbk9wdGlvbnMgPyB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplIDogdW5kZWZpbmVkO1xuXG4gICAgLy8gU2Nyb2xsaW5nIGluc2lkZSB0YWJsZVxuICAgICh0aGlzLm5vdm9EYXRhVGFibGVDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbExpc3RlbmVySGFuZGxlcik7XG5cbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBvblNlYXJjaENoYW5nZSh0ZXJtOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlLmdsb2JhbFNlYXJjaCA9IHRlcm07XG4gICAgdGhpcy5zdGF0ZS5yZXNldChmYWxzZSwgdHJ1ZSk7XG4gICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBnbG9iYWxTZWFyY2g6IHRlcm0sIGZpbHRlcjogdGhpcy5zdGF0ZS5maWx0ZXIsIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCB9KTtcbiAgfVxuXG4gIHB1YmxpYyB0cmFja0NvbHVtbnNCeShpbmRleDogbnVtYmVyLCBpdGVtOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KSB7XG4gICAgcmV0dXJuIGl0ZW0uaWQ7XG4gIH1cblxuICBwdWJsaWMgaXNEaXNhYmxlZChjaGVjazogYW55LCByb3c6IFQpOiBib29sZWFuIHtcbiAgICBpZiAoY2hlY2suZGlzYWJsZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoY2hlY2suZGlzYWJsZWRGdW5jKSB7XG4gICAgICByZXR1cm4gY2hlY2suZGlzYWJsZWRGdW5jKHJvdyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0V4cGFuZGVkKHJvdzogVCk6IGJvb2xlYW4ge1xuICAgIGlmICghcm93KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN0YXRlLmV4cGFuZGVkUm93cy5oYXMoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCk7XG4gIH1cblxuICBwdWJsaWMgZXhwYW5kUm93KHJvdzogVCk6IHZvaWQge1xuICAgIGxldCBleHBhbmRlZCA9IHRoaXMuaXNFeHBhbmRlZChyb3cpO1xuXG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICB0aGlzLnN0YXRlLmV4cGFuZGVkUm93cy5kZWxldGUoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUuZXhwYW5kZWRSb3dzLmFkZChgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5vbkV4cGFuZENoYW5nZSgpO1xuICB9XG5cbiAgcHVibGljIGV4cGFuZFJvd3MoZXhwYW5kOiBib29sZWFuKTogdm9pZCB7XG4gICAgKHRoaXMuZGF0YVNvdXJjZS5kYXRhIHx8IFtdKS5mb3JFYWNoKChyb3c6IFQpID0+IHtcbiAgICAgIGlmICghZXhwYW5kKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZXhwYW5kZWRSb3dzLmRlbGV0ZShgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZXhwYW5kZWRSb3dzLmFkZChgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlLm9uRXhwYW5kQ2hhbmdlKCk7XG4gIH1cblxuICBwdWJsaWMgYWxsQ3VycmVudFJvd3NFeHBhbmRlZCgpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5pc0V4cGFuZGVkKCh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSlbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgaXNTZWxlY3RlZChyb3c6IFQpOiBib29sZWFuIHtcbiAgICBpZiAoIXJvdykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MuaGFzKGAke3Jvd1t0aGlzLnJvd0lkZW50aWZpZXJdfWApO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdFJvdyhyb3c6IFQpOiB2b2lkIHtcbiAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQocm93KTtcblxuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MuZGVsZXRlKGAke3Jvd1t0aGlzLnJvd0lkZW50aWZpZXJdfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5zZXQoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCwgcm93KTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5vblNlbGVjdGlvbkNoYW5nZSgpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdFJvd3Moc2VsZWN0ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAodGhpcy5kYXRhU291cmNlLmRhdGEgfHwgW10pLmZvckVhY2goKHJvdzogVCkgPT4ge1xuICAgICAgaWYgKCFzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5kZWxldGUoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5zZXQoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCwgcm93KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlLm9uU2VsZWN0aW9uQ2hhbmdlKCk7XG4gIH1cblxuICBwdWJsaWMgYWxsQ3VycmVudFJvd3NTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5pc1NlbGVjdGVkKCh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSlbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZUNvbHVtbnMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sdW1ucyAmJiB0aGlzLmNvbHVtbnMubGVuZ3RoICE9PSAwICYmIE9iamVjdC5rZXlzKHRoaXMudGVtcGxhdGVzKS5sZW5ndGggIT09IDApIHtcbiAgICAgIC8vIEZpZ3VyZSB0aGUgY29sdW1uIHRlbXBsYXRlc1xuICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPikgPT4ge1xuICAgICAgICAvLyBGaWd1cmUgdGhlIHRlbXBsYXRlXG4gICAgICAgIGxldCB0ZW1wbGF0ZU5hbWU6IHN0cmluZztcbiAgICAgICAgaWYgKGNvbHVtbi50ZW1wbGF0ZSkge1xuICAgICAgICAgIC8vIFBhc3MgaXQgaW4gYXMgdGVtcGxhdGVcbiAgICAgICAgICB0ZW1wbGF0ZU5hbWUgPSBjb2x1bW4udGVtcGxhdGU7XG4gICAgICAgIH0gZWxzZSBpZiAoISF0aGlzLnRlbXBsYXRlc1tjb2x1bW4uaWRdKSB7XG4gICAgICAgICAgLy8gQ3VzdG9tIHRlbXBsYXRlIGZvciB0aGUgY29sdW1uIGlkXG4gICAgICAgICAgdGVtcGxhdGVOYW1lID0gY29sdW1uLmlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIERlZmF1bHQgdG8gdGhlIGRlZmF1bENlbGxUZW1wbGF0ZVxuICAgICAgICAgIGlmIChjb2x1bW4udHlwZSA9PT0gJ2FjdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW4uYWN0aW9uICYmIGNvbHVtbi5hY3Rpb24ub3B0aW9ucykge1xuICAgICAgICAgICAgICB0ZW1wbGF0ZU5hbWUgPSAnZHJvcGRvd25DZWxsVGVtcGxhdGUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGVtcGxhdGVOYW1lID0gJ2J1dHRvbkNlbGxUZW1wbGF0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW4udHlwZSA9PT0gJ2xpbms6dGVsJyB8fCBjb2x1bW4udHlwZSA9PT0gJ2xpbms6bWFpbHRvJykge1xuICAgICAgICAgICAgICB0ZW1wbGF0ZU5hbWUgPSBgJHtjb2x1bW4udHlwZS5zcGxpdCgnOicpWzFdfUNlbGxUZW1wbGF0ZWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0ZW1wbGF0ZU5hbWUgPSBgJHtjb2x1bW4udHlwZX1DZWxsVGVtcGxhdGVgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbHVtblRvVGVtcGxhdGVbY29sdW1uLmlkXSA9IHRoaXMudGVtcGxhdGVzW3RlbXBsYXRlTmFtZV07XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29sdW1uc0xvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxMaXN0ZW5lcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgbGVmdDogbnVtYmVyID0gKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5zY3JvbGxMZWZ0O1xuICAgIGlmIChsZWZ0ICE9PSB0aGlzLnNjcm9sbExlZnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsTGVmdCA9IChldmVudC50YXJnZXQgYXMgRWxlbWVudCkuc2Nyb2xsTGVmdDtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5maXhlZEhlYWRlcikge1xuICAgICAgY29uc3QgdG9wOiBudW1iZXIgPSAoZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQpLnNjcm9sbFRvcDtcbiAgICAgIGNvbnN0IGhlYWRlcjogYW55ID0gKHRoaXMubm92b0RhdGFUYWJsZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICc6c2NvcGUgPiBjZGstdGFibGUgPiBub3ZvLWRhdGEtdGFibGUtaGVhZGVyLXJvdycsXG4gICAgICApO1xuICAgICAgaGVhZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dG9wfXB4KWA7XG4gICAgfVxuICB9XG59XG4iXX0=