/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, EventEmitter, Input, Output, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
// Vendor
import * as dateFns from 'date-fns';
import { debounceTime } from 'rxjs/operators';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
import { Helpers } from '../../utils/Helpers';
import { FormUtils } from '../../utils/form-utils/FormUtils';
import { ReadOnlyControl, ControlFactory } from './../form/FormControls';
import { CollectionEvent } from '../../services/data-provider/CollectionEvent';
import { PagedArrayCollection } from '../../services/data-provider/PagedArrayCollection';
import { notify } from '../../utils/notifier/notifier.util';
/**
 * @record
 */
export function NovoTableConfig() { }
if (false) {
    /** @type {?|undefined} */
    NovoTableConfig.prototype.paging;
    /** @type {?|undefined} */
    NovoTableConfig.prototype.footers;
    /** @type {?|undefined} */
    NovoTableConfig.prototype.filtering;
    /** @type {?|undefined} */
    NovoTableConfig.prototype.sorting;
    /** @type {?|undefined} */
    NovoTableConfig.prototype.ordering;
    /** @type {?|undefined} */
    NovoTableConfig.prototype.resizing;
    /** @type {?|undefined} */
    NovoTableConfig.prototype.rowSelectionStyle;
    /** @type {?|undefined} */
    NovoTableConfig.prototype.rowSelect;
    /** @type {?|undefined} */
    NovoTableConfig.prototype.hasDetails;
    /** @type {?|undefined} */
    NovoTableConfig.prototype.detailsRenderer;
    /** @type {?|undefined} */
    NovoTableConfig.prototype.expandAll;
    /** @type {?|undefined} */
    NovoTableConfig.prototype.selectAllEnabled;
}
/** @enum {number} */
var NovoTableMode = {
    VIEW: 1,
    EDIT: 2,
};
export { NovoTableMode };
NovoTableMode[NovoTableMode.VIEW] = 'VIEW';
NovoTableMode[NovoTableMode.EDIT] = 'EDIT';
var NovoTableElement = /** @class */ (function () {
    function NovoTableElement(labels, formUtils, builder) {
        this.labels = labels;
        this.formUtils = formUtils;
        this.builder = builder;
        this.config = {};
        this.skipSortAndFilterClear = false;
        this.mode = NovoTableMode.VIEW;
        this.editable = false;
        this.rowIdentifier = 'id';
        this.name = 'table';
        this.onRowClick = new EventEmitter();
        this.onRowSelect = new EventEmitter();
        this.onTableChange = new EventEmitter();
        this._rows = [];
        this.selected = [];
        this.activeId = 0;
        this.master = false;
        this.expandAll = false;
        this.indeterminate = false;
        this.lastPage = 0;
        this.selectedPageCount = 0;
        this.showSelectAllMessage = false;
        this.pagedData = [];
        // Map to keep track of what dropdowns are toggled
        // Used to properly *ngIf the <list> so that the keepFilterFocused Directive
        // will properly fire the ngAfterViewInit event
        this.toggledDropdownMap = {};
        this.NovoTableMode = NovoTableMode;
        this.tableForm = new FormGroup({});
        this.footers = [];
        this.grossFlagToAvoidTheTableFromBeingUglyWhenHidingTheToast = false;
        this.loading = false;
        notify('[Deprecated]: The table is deprecated. Please migrate to novo-data-tables!');
    }
    Object.defineProperty(NovoTableElement.prototype, "rows", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rows;
        },
        set: /**
         * @param {?} rows
         * @return {?}
         */
        function (rows) {
            this.dataProvider = rows;
            if (rows && rows.length > 0) {
                this.setupColumnDefaults();
            }
            // this is a temporary/hacky fix until async dataloading is handled within the table
            if (!this.skipSortAndFilterClear) {
                this.clearAllSortAndFilters();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoTableElement.prototype, "dataProvider", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataProvider;
        },
        set: /**
         * @param {?} dp
         * @return {?}
         */
        function (dp) {
            var _this = this;
            this._dataProvider = Array.isArray(dp) ? new PagedArrayCollection(dp) : dp;
            this._dataProvider.dataChange.pipe(debounceTime(100)).subscribe(function (event) {
                switch (event.type) {
                    case CollectionEvent.CHANGE:
                        _this._rows = event.data;
                        // Setup form
                        _this.tableForm = _this.builder.group({
                            rows: _this.builder.array([]),
                        });
                        // Remove all selection on sort change if selection is on
                        if (_this.config.rowSelectionStyle === 'checkbox') {
                            _this.pagedData = event.data;
                            _this.pageSelected = _this.pagedData.filter(function (r) { return r._selected; });
                            _this.rowSelectHandler();
                        }
                        // Find that columns we might need to sum up via the footer
                        /** @type {?} */
                        var columnsToSum_1 = [];
                        /** @type {?} */
                        var columnSums_1 = {};
                        if (_this.config.footers) {
                            _this.config.footers.forEach(function (config) {
                                columnsToSum_1.push.apply(columnsToSum_1, tslib_1.__spread(config.columns));
                            });
                            // Only have unique columns, filter out duplicates
                            columnsToSum_1 = columnsToSum_1.filter(function (item, index, array) { return array.indexOf(item) === index; });
                        }
                        // Make a form for each row
                        /** @type {?} */
                        var tableFormRows_1 = (/** @type {?} */ (_this.tableForm.controls['rows']));
                        _this._rows.forEach(function (row, index) {
                            /** @type {?} */
                            var rowControls = [];
                            row.controls = {};
                            row._editing = {};
                            row._expanded = _this.config.expandAll;
                            row.rowId = _this._rows.length;
                            _this.columns.forEach(function (column) {
                                // Use the control passed or use a ReadOnlyControl so that the form has the values
                                /** @type {?} */
                                var control = column.editorConfig
                                    ? ControlFactory.create(column.editorType, column.editorConfig)
                                    : new ReadOnlyControl({ key: column.name });
                                row.controls[column.name] = control;
                                rowControls.push(control);
                            });
                            _this.formUtils.setInitialValues(rowControls, row, false);
                            tableFormRows_1.push(_this.formUtils.toFormGroup(rowControls));
                            // Setup the total footer if configured
                            // Array of keys to total
                            if (columnsToSum_1.length !== 0) {
                                columnsToSum_1.forEach(function (column) {
                                    if (Helpers.isBlank(columnSums_1[column])) {
                                        columnSums_1[column] = 0;
                                    }
                                    columnSums_1[column] += row[column];
                                });
                            }
                        });
                        if (_this.mode === NovoTableMode.EDIT) {
                            _this.setTableEdit();
                        }
                        // Setup the footers (if any)
                        if (_this.config.footers) {
                            _this.footers = [];
                            _this.config.footers.forEach(function (footerConfig, footerConfigIndex) {
                                /** @type {?} */
                                var footer = {};
                                footer[footerConfig.labelColumn] = footerConfig.label;
                                footerConfig.columns.forEach(function (column) {
                                    if (footerConfig.method === 'AVG' && _this._rows.length !== 0) {
                                        footer[column] = columnSums_1[column] / _this._rows.length;
                                    }
                                    else {
                                        footer[column] = columnSums_1[column];
                                    }
                                });
                                _this.footers.push(footer);
                            });
                        }
                        break;
                    default:
                        break;
                }
            });
            if (this.config.paging) {
                this._dataProvider.page = this.config.paging.current;
                this._dataProvider.pageSize = this.config.paging.itemsPerPage;
            }
            else {
                // Paging turned off, return basically all of the data
                this._dataProvider.page = 1;
                this._dataProvider.pageSize = 500;
            }
            if (dp && dp.length > 0) {
                this.setupColumnDefaults();
            }
            this._dataProvider.refresh();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoTableElement.prototype, "editing", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === NovoTableMode.EDIT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoTableElement.prototype, "formValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this.tableForm.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @param {?} column
     * @return {?}
     */
    NovoTableElement.prototype.onDropdownToggled = /**
     * @param {?} event
     * @param {?} column
     * @return {?}
     */
    function (event, column) {
        this.toggledDropdownMap[column] = event;
    };
    /**
     * @return {?}
     */
    NovoTableElement.prototype.focusInput = /**
     * @return {?}
     */
    function () {
        if (this.filterInputs && this.filterInputs.length) {
            this.filterInputs.forEach(function (filterInput) {
                if (filterInput.nativeElement) {
                    setTimeout(function () { return filterInput.nativeElement.focus(); }, 0);
                }
            });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoTableElement.prototype.onPageChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // this.dataProvider.page = event.page;
        // this.dataProvider.pageSize = event.itemsPerPage;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    NovoTableElement.prototype.getOptionDataAutomationId = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (!Helpers.isBlank(option.value)) {
            return option.value;
        }
        return option;
    };
    /**
     * @name setupColumnDefaults
     */
    /**
     * \@name setupColumnDefaults
     * @return {?}
     */
    NovoTableElement.prototype.setupColumnDefaults = /**
     * \@name setupColumnDefaults
     * @return {?}
     */
    function () {
        var _this = this;
        // Check columns for cell option types
        this.columns.forEach(function (column) {
            if (column && column.type) {
                switch (column.type) {
                    case 'date':
                        // Set options based on dates if there are none
                        column.options = column.options || _this.getDefaultOptions(column);
                        break;
                    default:
                        break;
                }
            }
        });
    };
    /**
     * @name ngDoCheck
     */
    /**
     * \@name ngDoCheck
     * @return {?}
     */
    NovoTableElement.prototype.ngDoCheck = /**
     * \@name ngDoCheck
     * @return {?}
     */
    function () {
        if (this.config.paging && this.config.paging.current !== this.lastPage) {
            this.rowSelectHandler();
            this.showSelectAllMessage = false;
        }
        this.lastPage = this.config.paging ? this.config.paging.current : 1;
    };
    /**
     * @name getPageStart
     */
    /**
     * \@name getPageStart
     * @return {?}
     */
    NovoTableElement.prototype.getPageStart = /**
     * \@name getPageStart
     * @return {?}
     */
    function () {
        return this.config.paging ? (this.dataProvider.page - 1) * this.dataProvider.pageSize : 0;
    };
    /**
     * @name getPageEnd
     */
    /**
     * \@name getPageEnd
     * @return {?}
     */
    NovoTableElement.prototype.getPageEnd = /**
     * \@name getPageEnd
     * @return {?}
     */
    function () {
        return this.config.paging && this.dataProvider.pageSize > -1 ? this.getPageStart() + this.dataProvider.pageSize : this.rows.length;
    };
    /**
     * @param {?} i
     * @return {?}
     */
    NovoTableElement.prototype.getRowControlForm = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        /** @type {?} */
        var tableFormRows = (/** @type {?} */ (this.tableForm.controls['rows']));
        return tableFormRows.controls[i];
    };
    /**
     * @name onFilterClick
     * @param column
     * @param filter
     */
    /**
     * \@name onFilterClick
     * @param {?} column
     * @param {?} filter
     * @return {?}
     */
    NovoTableElement.prototype.onFilterClick = /**
     * \@name onFilterClick
     * @param {?} column
     * @param {?} filter
     * @return {?}
     */
    function (column, filter) {
        if (filter.range && !column.calendarShow) {
            column.calenderShow = true;
            return;
        }
        if (Array.isArray(column.filter) && column.multiple) {
            if (~column.filter.indexOf(filter)) {
                // Remove filter
                column.filter.splice(column.filter.indexOf(filter), 1);
                if (filter.range) {
                    column.calenderShow = false;
                }
                if (column.filter.length === 0) {
                    column.filter = null;
                }
            }
            else {
                // Add filter
                column.filter.push(filter);
            }
        }
        else if (column.multiple) {
            column.filter = new Array();
            column.filter.push(Helpers.isBlank(filter.value) ? filter : filter.value);
        }
        else {
            column.filter = Helpers.isBlank(filter.value) ? filter : filter.value;
        }
        this.onFilterChange();
    };
    /**
     * @name onFilterClear
     * @param column
     */
    /**
     * \@name onFilterClear
     * @param {?} column
     * @return {?}
     */
    NovoTableElement.prototype.onFilterClear = /**
     * \@name onFilterClear
     * @param {?} column
     * @return {?}
     */
    function (column) {
        var _this = this;
        setTimeout(function () {
            column.filter = null;
            column.freetextFilter = null;
            _this.onFilterChange();
            if (column.originalOptions) {
                column.options = column.originalOptions;
            }
        });
    };
    /**
     * @return {?}
     */
    NovoTableElement.prototype.clearAllSortAndFilters = /**
     * @return {?}
     */
    function () {
        if (this.config.filtering) {
            this.columns.forEach(function (column) {
                column.filter = null;
                column.sort = null;
            });
        }
    };
    /**
     * @name onFilterChange
     *
     * @description This method updates the row data to reflect the active filters.
     */
    /**
     * \@name onFilterChange
     *
     * \@description This method updates the row data to reflect the active filters.
     * @param {?=} event
     * @return {?}
     */
    NovoTableElement.prototype.onFilterChange = /**
     * \@name onFilterChange
     *
     * \@description This method updates the row data to reflect the active filters.
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        var e_1, _a;
        if (this.config.filtering) {
            // Array of filters
            /** @type {?} */
            var filters = this.columns.filter(function (col) { return !Helpers.isEmpty(col.filter); });
            if (filters.length) {
                /** @type {?} */
                var query = {};
                var _loop_1 = function (column) {
                    if (Helpers.isFunction(column.match)) {
                        query[column.name] = function (value, record) {
                            return column.match(record, column.filter);
                        };
                    }
                    else if (column.preFilter && Helpers.isFunction(column.preFilter)) {
                        query = Object.assign({}, query, column.preFilter(this_1.escapeCharacters(column.filter)));
                    }
                    else if (Array.isArray(column.filter)) {
                        // The filters are an array (multi-select), check value
                        /** @type {?} */
                        var options = column.filter;
                        // We have an array of {value: '', labels: ''}
                        if (options[0].value || options[0].label) {
                            options = column.filter.map(function (opt) { return opt.value; });
                        }
                        query[column.name] = { any: options };
                    }
                    else if (column.type && column.type === 'date') {
                        if (column.filter.startDate && column.filter.endDate) {
                            query[column.name] = {
                                min: dateFns.startOfDay(column.filter.startDate),
                                max: dateFns.startOfDay(dateFns.addDays(dateFns.startOfDay(column.filter.endDate), 1)),
                            };
                        }
                        else {
                            query[column.name] = {
                                min: column.filter.min ? dateFns.addDays(dateFns.startOfToday(), column.filter.min) : dateFns.startOfToday(),
                                max: column.filter.max ? dateFns.addDays(dateFns.startOfTomorrow(), column.filter.max) : dateFns.startOfTomorrow(),
                            };
                        }
                    }
                    else {
                        query[column.name] = column.filter;
                    }
                };
                var this_1 = this;
                try {
                    for (var filters_1 = tslib_1.__values(filters), filters_1_1 = filters_1.next(); !filters_1_1.done; filters_1_1 = filters_1.next()) {
                        var column = filters_1_1.value;
                        _loop_1(column);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (filters_1_1 && !filters_1_1.done && (_a = filters_1.return)) _a.call(filters_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (Helpers.isFunction(this.config.filtering)) {
                    this.config.filtering(query);
                }
                else {
                    this._dataProvider.filter = query;
                }
            }
            else {
                this._dataProvider.filter = {};
            }
            // Trickle down to keep sort
            // this.onSortChange(this.currentSortColumn);
            this.fireTableChangeEvent();
            // If paging, reset page
            if (this.config.paging) {
                this.config.paging.current = 1;
            }
            // Remove all selection on sort change if selection is on
            if (this.config.rowSelectionStyle === 'checkbox') {
                this.selectAll(false);
            }
        }
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    NovoTableElement.prototype.escapeCharacters = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        if (typeof filter === 'string') {
            return filter.replace(/'/g, '\'\'');
        }
        return filter;
    };
    /**
     * @param {?} column
     * @param {?} filter
     * @return {?}
     */
    NovoTableElement.prototype.isFilterActive = /**
     * @param {?} column
     * @param {?} filter
     * @return {?}
     */
    function (column, filter) {
        // TODO: This needs to be refactored
        /** @type {?} */
        var isActive = false;
        if (column && !Helpers.isBlank(column.filter) && !Helpers.isBlank(filter)) {
            if (Array.isArray(column.filter)) {
                if (typeof filter !== 'string') {
                    isActive = column.filter.some(function (item) {
                        return item.label === filter.label;
                    });
                }
                else {
                    isActive = column.filter.includes(filter);
                }
            }
            else {
                if (typeof column.filter === typeof filter) {
                    isActive = column.filter === filter;
                }
                else {
                    isActive = column.filter === filter.value;
                }
            }
        }
        return isActive;
    };
    /**
     * @name onSortChange
     * @param newSortColumn
     */
    /**
     * \@name onSortChange
     * @param {?} column
     * @return {?}
     */
    NovoTableElement.prototype.onSortChange = /**
     * \@name onSortChange
     * @param {?} column
     * @return {?}
     */
    function (column) {
        var _this = this;
        var e_2, _a;
        this.currentSortColumn = column;
        /** @type {?} */
        var sortedColumns = this.columns.filter(function (thisColumn) {
            return thisColumn.sort && thisColumn !== _this.currentSortColumn;
        });
        try {
            for (var sortedColumns_1 = tslib_1.__values(sortedColumns), sortedColumns_1_1 = sortedColumns_1.next(); !sortedColumns_1_1.done; sortedColumns_1_1 = sortedColumns_1.next()) {
                var sortedColumn = sortedColumns_1_1.value;
                sortedColumn.sort = null;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (sortedColumns_1_1 && !sortedColumns_1_1.done && (_a = sortedColumns_1.return)) _a.call(sortedColumns_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (column) {
            if (Helpers.isFunction(this.config.sorting)) {
                this.config.sorting();
            }
            else if (Helpers.isFunction(column.preSort)) {
                this._dataProvider.sort = [].concat(column.preSort(column));
            }
            else {
                this._dataProvider.sort = [{ field: column.compare || column.name, reverse: column.sort === 'desc' }];
            }
        }
        // Fire table change event
        // this.fireTableChangeEvent();
        // If paging, reset page
        if (this.config.paging) {
            this.config.paging.current = 1;
        }
        // Remove all selection on sort change if selection is on
        if (this.config.rowSelectionStyle === 'checkbox') {
            this.selectAll(false);
        }
    };
    /**
     * @name fireTableChangeEvent
     */
    /**
     * \@name fireTableChangeEvent
     * @return {?}
     */
    NovoTableElement.prototype.fireTableChangeEvent = /**
     * \@name fireTableChangeEvent
     * @return {?}
     */
    function () {
        // Construct a table change object
        /** @type {?} */
        var onTableChange = {};
        /** @type {?} */
        var filters = this.columns.filter(function (col) { return col.filter && col.filter.length; });
        onTableChange.filter = filters.length ? filters : false;
        onTableChange.sort = this.currentSortColumn ? this.currentSortColumn : false;
        onTableChange.rows = this.rows;
        // Emit event
        this.onTableChange.emit(onTableChange);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoTableElement.prototype.findColumnIndex = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        for (var i = 0; i < this.columns.length; i += 1) {
            if (this.columns[i].name === value) {
                return i;
            }
        }
        return null;
    };
    /**
     * @name onOrderChange
     * @param event
     */
    /**
     * \@name onOrderChange
     * @param {?} event
     * @return {?}
     */
    NovoTableElement.prototype.onOrderChange = /**
     * \@name onOrderChange
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var oldIndex = this.findColumnIndex(event.first.name);
        /** @type {?} */
        var newIndex = this.findColumnIndex(event.second.name);
        this.columns.splice(newIndex, 0, this.columns.splice(oldIndex, 1)[0]);
        this.onSortChange(this.currentSortColumn);
    };
    /**
     * @name selectPage
     */
    /**
     * \@name selectPage
     * @param {?} expanded
     * @return {?}
     */
    NovoTableElement.prototype.expandAllOnPage = /**
     * \@name selectPage
     * @param {?} expanded
     * @return {?}
     */
    function (expanded) {
        var e_3, _a;
        this.config.expandAll = !expanded;
        try {
            for (var _b = tslib_1.__values(this.dataProvider.list), _c = _b.next(); !_c.done; _c = _b.next()) {
                var row = _c.value;
                row._expanded = this.config.expandAll;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    /**
     * @name selectPage
     */
    /**
     * \@name selectPage
     * @param {?=} data
     * @return {?}
     */
    NovoTableElement.prototype.selectPage = /**
     * \@name selectPage
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        var e_4, _a;
        if (!this.master) {
            this.selectAll(false);
            // Only show the select all message when there is only one new page selected at a time
            this.selectedPageCount = this.selectedPageCount > 0 ? this.selectedPageCount - 1 : 0;
            this.showSelectAllMessage = false;
        }
        else {
            this.indeterminate = false;
            try {
                // this.pagedData = this.rows.slice(this.getPageStart(), this.getPageEnd());
                for (var _b = tslib_1.__values(this.pagedData), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var row = _c.value;
                    row._selected = this.master;
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
            this.selected = this.dataProvider.list.filter(function (r) { return r._selected; });
            this.pageSelected = this.pagedData.filter(function (r) { return r._selected; });
            this.emitSelected(this.selected);
            // Only show the select all message when there is only one new page selected at a time
            this.selectedPageCount++;
            this.showSelectAllMessage = this.selectedPageCount === 1 && this.selected.length !== this.dataProvider.total;
        }
    };
    /**
     * @name selectAll
     */
    /**
     * \@name selectAll
     * @param {?} value
     * @return {?}
     */
    NovoTableElement.prototype.selectAll = /**
     * \@name selectAll
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var e_5, _a;
        this.master = value;
        this.indeterminate = false;
        try {
            for (var _b = tslib_1.__values(this.dataProvider.list), _c = _b.next(); !_c.done; _c = _b.next()) {
                var row = _c.value;
                row._selected = value;
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        this.selected = value ? this.dataProvider.list : [];
        this.showSelectAllMessage = false;
        this.selectedPageCount = this.selectedPageCount > 0 ? this.selectedPageCount - 1 : 0;
        this.rowSelectHandler();
    };
    /**
     * @name rowSelectHandler
     */
    /**
     * \@name rowSelectHandler
     * @param {?=} data
     * @return {?}
     */
    NovoTableElement.prototype.rowSelectHandler = /**
     * \@name rowSelectHandler
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        // this.pagedData = this.rows.slice(this.getPageStart(), this.getPageEnd());
        this.pageSelected = this.pagedData.filter(function (r) { return r._selected; });
        this.selected = this.dataProvider.list.filter(function (r) { return r._selected; });
        if (this.pageSelected.length === 0) {
            this.master = false;
            this.indeterminate = false;
        }
        else if (this.pageSelected.length === this.pagedData.length) {
            this.master = true;
            this.indeterminate = false;
        }
        else {
            this.master = false;
            this.indeterminate = true;
            // Breaking the selected page count
            this.showSelectAllMessage = false;
            this.selectedPageCount = this.selectedPageCount > 0 ? this.selectedPageCount - 1 : 0;
        }
        this.emitSelected(this.selected);
    };
    /**
     * @name emitSelected
     * @param selected
     */
    /**
     * \@name emitSelected
     * @param {?} selected
     * @return {?}
     */
    NovoTableElement.prototype.emitSelected = /**
     * \@name emitSelected
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        this.onRowSelect.emit({ length: selected.length, selected: selected });
    };
    /**
     * @name rowClickHandler
     * @param row
     */
    /**
     * \@name rowClickHandler
     * @param {?} row
     * @return {?}
     */
    NovoTableElement.prototype.rowClickHandler = /**
     * \@name rowClickHandler
     * @param {?} row
     * @return {?}
     */
    function (row) {
        if (this.config.rowSelect) {
            this.activeId = row.id || 0;
            this.onRowClick.emit(row);
        }
    };
    /**
     * @param {?} column
     * @return {?}
     */
    NovoTableElement.prototype.getDefaultOptions = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        // TODO - needs to come from label service - https://github.com/bullhorn/novo-elements/issues/116
        /** @type {?} */
        var opts = [
            { label: this.labels.past1Day, min: -1, max: 0 },
            { label: this.labels.past7Days, min: -7, max: 0 },
            { label: this.labels.past30Days, min: -30, max: 0 },
            { label: this.labels.past90Days, min: -90, max: 0 },
            { label: this.labels.past1Year, min: -366, max: 0 },
            { label: this.labels.next1Day, min: 0, max: 1 },
            { label: this.labels.next7Days, min: 0, max: 7 },
            { label: this.labels.next30Days, min: 0, max: 30 },
            { label: this.labels.next90Days, min: 0, max: 90 },
            { label: this.labels.next1Year, min: 0, max: 366 },
        ];
        if (column && column.range) {
            opts.push({
                label: this.labels.customDateRange,
                range: true,
            });
        }
        return opts;
    };
    /**
     * @param {?} column
     * @param {?} event
     * @return {?}
     */
    NovoTableElement.prototype.onCalenderSelect = /**
     * @param {?} column
     * @param {?} event
     * @return {?}
     */
    function (column, event) {
        var _this = this;
        setTimeout(function () {
            if (event.startDate && event.endDate) {
                _this.onFilterChange();
            }
        }, 10);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    NovoTableElement.prototype.onFilterKeywords = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (config && config.filtering && config.filtering.freetextFilter) {
            /** @type {?} */
            var filterKeywords_1 = config.filtering.freetextFilter.toLowerCase();
            if (!config.filtering.originalOptions) {
                config.filtering.originalOptions = config.filtering.options;
            }
            /** @type {?} */
            var newOptions = config.filtering.originalOptions.filter(function (option) {
                /** @type {?} */
                var value = option && option.label ? option.label : option;
                value = value.toLowerCase() ? value.toLowerCase() : value;
                if (value === filterKeywords_1) {
                    return true;
                }
                else if (~value.indexOf(filterKeywords_1) || ~value.indexOf(filterKeywords_1)) {
                    return true;
                }
                return false;
            });
            config.filtering.options = newOptions;
            config.filtering.filter = config.filtering.freetextFilter;
        }
        else {
            config.filtering.options = config.filtering.originalOptions;
        }
        this.onFilterChange();
    };
    /**
     * @name setTableEdit
     * @description Sets the Table into EDIT mode, based on the row/column passed you can enter in a few states
     * (1) setTableEdit() - don't pass any to put the FULL table into edit mode
     * (2) setTableEdit(1) - pass only row to put that FULL row of the table into edit mode
     * (3) setTableEdit(1, 1) - pass row and column to put that column of the row of the table into edit mode
     * @param [rowNumber]
     * @param [columnNumber]
     * @memberOf NovoTableElement
     */
    /**
     * \@name setTableEdit
     * \@description Sets the Table into EDIT mode, based on the row/column passed you can enter in a few states
     * (1) setTableEdit() - don't pass any to put the FULL table into edit mode
     * (2) setTableEdit(1) - pass only row to put that FULL row of the table into edit mode
     * (3) setTableEdit(1, 1) - pass row and column to put that column of the row of the table into edit mode
     * \@memberOf NovoTableElement
     * @param {?=} rowNumber
     * @param {?=} columnNumber
     * @return {?}
     */
    NovoTableElement.prototype.setTableEdit = /**
     * \@name setTableEdit
     * \@description Sets the Table into EDIT mode, based on the row/column passed you can enter in a few states
     * (1) setTableEdit() - don't pass any to put the FULL table into edit mode
     * (2) setTableEdit(1) - pass only row to put that FULL row of the table into edit mode
     * (3) setTableEdit(1, 1) - pass row and column to put that column of the row of the table into edit mode
     * \@memberOf NovoTableElement
     * @param {?=} rowNumber
     * @param {?=} columnNumber
     * @return {?}
     */
    function (rowNumber, columnNumber) {
        var _this = this;
        this.mode = NovoTableMode.EDIT;
        this._dataProvider.edit();
        this._rows.forEach(function (row, rowIndex) {
            row._editing = row._editing || {};
            _this.columns.forEach(function (column, columnIndex) {
                if (column.viewOnly) {
                    row._editing[column.name] = false;
                }
                else if (Helpers.isEmpty(rowNumber) && Helpers.isEmpty(columnNumber)) {
                    row._editing[column.name] = true;
                }
                else if (!Helpers.isEmpty(rowNumber) && rowIndex === Number(rowNumber) && Helpers.isEmpty(columnNumber)) {
                    row._editing[column.name] = true;
                }
                else if (!Helpers.isEmpty(rowNumber) &&
                    !Helpers.isEmpty(columnNumber) &&
                    rowIndex === Number(rowNumber) &&
                    columnIndex === Number(columnNumber)) {
                    row._editing[column.name] = true;
                }
                else {
                    row._editing[column.name] = false;
                }
            });
        });
    };
    /**
     * @name leaveEditMode
     * @description Leaves edit mode for the Table and puts everything back to VIEW only
     * @memberOf NovoTableElement
     * @param cancel - whether or not to save data or undo
     */
    /**
     * \@name leaveEditMode
     * \@description Leaves edit mode for the Table and puts everything back to VIEW only
     * \@memberOf NovoTableElement
     * @param {?} cancel - whether or not to save data or undo
     * @return {?}
     */
    NovoTableElement.prototype.leaveEditMode = /**
     * \@name leaveEditMode
     * \@description Leaves edit mode for the Table and puts everything back to VIEW only
     * \@memberOf NovoTableElement
     * @param {?} cancel - whether or not to save data or undo
     * @return {?}
     */
    function (cancel) {
        var _this = this;
        this.mode = NovoTableMode.VIEW;
        this._rows.forEach(function (row) {
            row._editing = row._editing || {};
            _this.columns.forEach(function (column) {
                row._editing[column.name] = false;
            });
        });
        if (cancel) {
            this._dataProvider.undo();
        }
        else {
            this._dataProvider.commit();
        }
        this.hideToastMessage();
    };
    /**
     * @name addEditableRow
     * @description Adds a new row into the table to be edited, can be called from a local reference of the table in your template
     * @param defaultValue
     * @memberOf NovoTableElement
     */
    /**
     * \@name addEditableRow
     * \@description Adds a new row into the table to be edited, can be called from a local reference of the table in your template
     * \@memberOf NovoTableElement
     * @param {?=} defaultValue
     * @return {?}
     */
    NovoTableElement.prototype.addEditableRow = /**
     * \@name addEditableRow
     * \@description Adds a new row into the table to be edited, can be called from a local reference of the table in your template
     * \@memberOf NovoTableElement
     * @param {?=} defaultValue
     * @return {?}
     */
    function (defaultValue) {
        if (defaultValue === void 0) { defaultValue = {}; }
        /** @type {?} */
        var tableFormRows = (/** @type {?} */ (this.tableForm.controls['rows']));
        /** @type {?} */
        var row = {};
        /** @type {?} */
        var rowControls = [];
        row.controls = {};
        row._editing = {};
        row.rowId = this._rows.length + 1;
        this.columns.forEach(function (column) {
            // Use the control passed or use a ReadOnlyControl so that the form has the values
            /** @type {?} */
            var control = column.editorConfig
                ? ControlFactory.create(column.editorType, column.editorConfig)
                : new ReadOnlyControl({ key: column.name });
            control.value = null; // remove copied column value
            row.controls[column.name] = control;
            row._editing[column.name] = !column.viewOnly;
            rowControls.push(control);
        });
        this.formUtils.setInitialValues(rowControls, defaultValue, false);
        tableFormRows.push(this.formUtils.toFormGroup(rowControls));
        this._rows.push(row);
    };
    /**
     * @name validateAndGetUpdatedData
     * @description Validates the Form inside of the Table, if there are errors it will display/return the errors for each row.
     * If there are no errors, then it will return ONLY the changed data for each row, the data returned will be in the form:
     * { id: ID_OF_RECORD, key: value } -- data that was updated
     * { id: undefined, key: value } -- data that was added
     * @memberOf NovoTableElement
     */
    /**
     * \@name validateAndGetUpdatedData
     * \@description Validates the Form inside of the Table, if there are errors it will display/return the errors for each row.
     * If there are no errors, then it will return ONLY the changed data for each row, the data returned will be in the form:
     * { id: ID_OF_RECORD, key: value } -- data that was updated
     * { id: undefined, key: value } -- data that was added
     * \@memberOf NovoTableElement
     * @return {?}
     */
    NovoTableElement.prototype.validateAndGetUpdatedData = /**
     * \@name validateAndGetUpdatedData
     * \@description Validates the Form inside of the Table, if there are errors it will display/return the errors for each row.
     * If there are no errors, then it will return ONLY the changed data for each row, the data returned will be in the form:
     * { id: ID_OF_RECORD, key: value } -- data that was updated
     * { id: undefined, key: value } -- data that was added
     * \@memberOf NovoTableElement
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.tableForm && this.tableForm.controls && this.tableForm.controls['rows']) {
            /** @type {?} */
            var changedRows_1 = [];
            /** @type {?} */
            var errors_1 = [];
            // Go over the FormArray's controls
            ((/** @type {?} */ (this.tableForm.controls['rows']))).controls.forEach(function (formGroup, index) {
                /** @type {?} */
                var changedRow = null;
                /** @type {?} */
                var error = null;
                // Go over the form group controls
                Object.keys(formGroup.controls).forEach(function (key) {
                    /** @type {?} */
                    var control = formGroup.controls[key];
                    // Handle value changing
                    if (control && control.dirty && !control.errors) {
                        if (!changedRow) {
                            // Append the ID, so we have some key to save against
                            changedRow = {};
                            if (_this._rows[index].id) {
                                changedRow.id = _this._rows[index].id;
                            }
                        }
                        // If dirty, grab value off the form
                        changedRow[key] = _this.tableForm.value['rows'][index][key];
                        // Set value back to row (should be already done via the server call, but do it anyway)
                        _this._rows[index][key] = changedRow[key];
                    }
                    else if (control && control.errors) {
                        // Handle errors
                        if (!error) {
                            error = {};
                        }
                        error[key] = control.errors;
                        control.markAsDirty();
                        control.markAsTouched();
                    }
                });
                if (changedRow) {
                    changedRows_1.push(changedRow);
                }
                if (error) {
                    errors_1.push({ errors: error, row: _this._rows[index], index: index });
                }
            });
            /** @type {?} */
            var ret = {};
            // Return errors if any, otherwise return the changed rows
            if (errors_1.length === 0) {
                return { changed: changedRows_1 };
            }
            return { errors: errors_1 };
        }
    };
    /**
     * @name cancelEditing
     * @description Refresh the data provider and leave edit mode
     * @memberOf NovoTableElement
     */
    /**
     * \@name cancelEditing
     * \@description Refresh the data provider and leave edit mode
     * \@memberOf NovoTableElement
     * @return {?}
     */
    NovoTableElement.prototype.cancelEditing = /**
     * \@name cancelEditing
     * \@description Refresh the data provider and leave edit mode
     * \@memberOf NovoTableElement
     * @return {?}
     */
    function () {
        this.leaveEditMode(true);
    };
    /**
     * @name saveChanges
     * @description Refresh the data provider and leave edit mode
     * @memberOf NovoTableElement
     */
    /**
     * \@name saveChanges
     * \@description Refresh the data provider and leave edit mode
     * \@memberOf NovoTableElement
     * @return {?}
     */
    NovoTableElement.prototype.saveChanges = /**
     * \@name saveChanges
     * \@description Refresh the data provider and leave edit mode
     * \@memberOf NovoTableElement
     * @return {?}
     */
    function () {
        this.leaveEditMode(false);
    };
    /**
     * @name displayToastMessage
     * @description Displays a toast message inside of the table
     * @param toast
     * @param hideDelay
     * @memberOf NovoTableElement
     */
    /**
     * \@name displayToastMessage
     * \@description Displays a toast message inside of the table
     * \@memberOf NovoTableElement
     * @param {?} toast
     * @param {?=} hideDelay
     * @return {?}
     */
    NovoTableElement.prototype.displayToastMessage = /**
     * \@name displayToastMessage
     * \@description Displays a toast message inside of the table
     * \@memberOf NovoTableElement
     * @param {?} toast
     * @param {?=} hideDelay
     * @return {?}
     */
    function (toast, hideDelay) {
        var _this = this;
        this.loading = false;
        this.toast = toast;
        if (hideDelay) {
            setTimeout(function () { return _this.hideToastMessage(); }, hideDelay);
        }
    };
    /**
     * @name hideToastMessage
     * @description Force hide the toast message
     * @memberOf NovoTableElement
     */
    /**
     * \@name hideToastMessage
     * \@description Force hide the toast message
     * \@memberOf NovoTableElement
     * @return {?}
     */
    NovoTableElement.prototype.hideToastMessage = /**
     * \@name hideToastMessage
     * \@description Force hide the toast message
     * \@memberOf NovoTableElement
     * @return {?}
     */
    function () {
        var _this = this;
        this.toast = null;
        // Hack to make the table display properly after hiding the toast
        this.grossFlagToAvoidTheTableFromBeingUglyWhenHidingTheToast = true;
        setTimeout(function () {
            _this.grossFlagToAvoidTheTableFromBeingUglyWhenHidingTheToast = false;
        });
    };
    /**
     * @name toggleLoading
     * @description display the loading overlay on the table
     * @param show
     * @memberOf NovoTableElement
     */
    /**
     * \@name toggleLoading
     * \@description display the loading overlay on the table
     * \@memberOf NovoTableElement
     * @param {?} show
     * @return {?}
     */
    NovoTableElement.prototype.toggleLoading = /**
     * \@name toggleLoading
     * \@description display the loading overlay on the table
     * \@memberOf NovoTableElement
     * @param {?} show
     * @return {?}
     */
    function (show) {
        this.loading = show;
    };
    /**
     * @name isColumnHidden
     * @description hide a column in edit or view mode
     * @param  column
     * @memberOf NovoTableElement
     */
    /**
     * \@name isColumnHidden
     * \@description hide a column in edit or view mode
     * \@memberOf NovoTableElement
     * @param {?} column
     * @return {?}
     */
    NovoTableElement.prototype.isColumnHidden = /**
     * \@name isColumnHidden
     * \@description hide a column in edit or view mode
     * \@memberOf NovoTableElement
     * @param {?} column
     * @return {?}
     */
    function (column) {
        return this.editing ? !!column.hideColumnOnEdit : !!column.hideColumnOnView;
    };
    NovoTableElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-table',
                    host: {
                        '[attr.theme]': 'theme',
                        '[class.editing]': 'mode === NovoTableMode.EDIT',
                        '[class.novo-table-loading]': 'loading',
                    },
                    // directives: [],
                    template: "\n        <header *ngIf=\"columns.length\">\n            <ng-content select=\"novo-table-header\"></ng-content>\n            <div class=\"header-actions\">\n                <novo-pagination *ngIf=\"config.paging && !(dataProvider.isEmpty() && !dataProvider.isFiltered())\"\n                                 [rowOptions]=\"config.paging.rowOptions\"\n                                 [disablePageSelection]=\"config.paging.disablePageSelection\"\n                                 [(page)]=\"dataProvider.page\"\n                                 [(itemsPerPage)]=\"dataProvider.pageSize\"\n                                 [totalItems]=\"dataProvider.total\"\n                                 (onPageChange)=\"onPageChange($event)\">\n                </novo-pagination>\n                <ng-content select=\"novo-table-actions\"></ng-content>\n            </div>\n        </header>\n        <div class=\"novo-table-loading-overlay\" *ngIf=\"loading || dataProvider.isLoading()\">\n            <novo-loading></novo-loading>\n        </div>\n        <novo-toast *ngIf=\"toast\" [theme]=\"toast?.theme\" [icon]=\"toast?.icon\" [message]=\"toast?.message\"></novo-toast>\n        <div class=\"table-container\" *ngIf=\"!grossFlagToAvoidTheTableFromBeingUglyWhenHidingTheToast\">\n            <novo-form hideHeader=\"true\" [form]=\"tableForm\">\n                <table class=\"table table-striped dataTable\" [class.table-details]=\"config.hasDetails\" role=\"grid\">\n                <!-- skipSortAndFilterClear is a hack right now, will be removed once Canvas is refactored -->\n                <thead *ngIf=\"columns.length && (!dataProvider.isEmpty() || dataProvider.isFiltered() || skipSortAndFilterClear || editing)\">\n                    <tr role=\"row\">\n                        <!-- DETAILS -->\n                        <th class=\"row-actions\" *ngIf=\"config.hasDetails\">\n                            <button theme=\"icon\" icon=\"next\" (click)=\"expandAllOnPage(config.expandAll)\" *ngIf=\"!config.expandAll\" data-automation-id=\"expand-all\"></button>\n                            <button theme=\"icon\" icon=\"sort-desc\" (click)=\"expandAllOnPage(config.expandAll)\" *ngIf=\"config.expandAll\" data-automation-id=\"collapse-all\"></button>\n                        </th>\n                        <!-- CHECKBOX -->\n                        <th class=\"row-actions checkbox mass-action\" *ngIf=\"config.rowSelectionStyle === 'checkbox'\">\n                            <novo-checkbox [(ngModel)]=\"master\" [indeterminate]=\"pageSelected.length > 0 && pageSelected.length < pagedData.length\" (ngModelChange)=\"selectPage($event)\" data-automation-id=\"select-all-checkbox\" [tooltip]=\"master ? labels.deselectAll : labels.selectAllOnPage\" tooltipPosition=\"right\"></novo-checkbox>\n                        </th>\n                        <!-- TABLE HEADERS -->\n                        <th *ngFor=\"let column of columns\" [ngClass]=\"{ 'mass-action': config?.rowSelectionStyle === 'checkbox', 'actions': column?.actions?.items?.length > 0, 'preview': column?.name === 'preview' }\" [novoThOrderable]=\"column\" (onOrderChange)=\"onOrderChange($event)\" [hidden]=\"isColumnHidden(column)\">\n                            <div class=\"th-group\" [attr.data-automation-id]=\"column.id || column.name\" *ngIf=\"!column.hideHeader\">\n                                <!-- LABEL & SORT ARROWS -->\n                                <div class=\"th-title\" [ngClass]=\"(config.sorting !== false && column.sorting !== false) ? 'sortable' : ''\" [novoThSortable]=\"config\" [column]=\"column\" (onSortChange)=\"onSortChange($event)\">\n                                    <label>{{ column.title || column.label }}</label>\n                                    <div class=\"table-sort-icons\" tooltipPosition=\"bottom\" [tooltip]=\"labels.sort\" [ngClass]=\"column.sort || ''\" *ngIf=\"config.sorting !== false && column.sorting !== false\">\n                                        <i class=\"bhi-arrow-up\"></i>\n                                        <i class=\"bhi-arrow-down\"></i>\n                                    </div>\n                                </div>\n                                <!-- FILTER DROP-DOWN -->\n                                <novo-dropdown side=\"right\" *ngIf=\"config.filtering !== false && column.filtering !== false\" class=\"column-filters\" (toggled)=\"onDropdownToggled($event, column.name)\" parentScrollSelector=\".table-container\" containerClass=\"table-dropdown\">\n                                    <button type=\"button\" theme=\"icon\" icon=\"filter\" tooltipPosition=\"bottom\" [tooltip]=\"labels.filters\" [class.filtered]=\"column.filter || column.filter===false\" (click)=\"focusInput()\"></button>\n                                    <!-- FILTER OPTIONS LIST -->\n                                    <list *ngIf=\"(column?.options?.length || column?.originalOptions?.length) && column?.type !== 'date' && toggledDropdownMap[column.name]\">\n                                        <item class=\"filter-search\">\n                                            <div class=\"header\">\n                                                <span>{{ labels.filters }}</span>\n                                                <button theme=\"dialogue\" color=\"negative\" icon=\"times\" (click)=\"onFilterClear(column)\" *ngIf=\"column.filter || column.filter===false\">{{ labels.clear }}</button>\n                                            </div>\n                                            <input type=\"text\" *ngIf=\"!!column.allowCustomTextOption\" [attr.id]=\"column.name + '-input'\" [novoTableFilter]=\"column\" (onFilterChange)=\"onFilterKeywords($event)\" [(ngModel)]=\"column.freetextFilter\" keepFilterFocused #filterInput/>\n                                        </item>\n                                        <item [ngClass]=\"{ active: isFilterActive(column, option) }\" *ngFor=\"let option of column.options\" (click)=\"onFilterClick(column, option)\" [attr.data-automation-id]=\"getOptionDataAutomationId(option)\">\n                                            <span>{{ option?.label || option }}</span> <i class=\"bhi-check\" *ngIf=\"isFilterActive(column, option)\"></i>\n                                        </item>\n                                    </list>\n                                    <!-- FILTER SEARCH INPUT -->\n                                    <list *ngIf=\"!(column?.options?.length || column?.originalOptions?.length) && toggledDropdownMap[column.name]\">\n                                        <item class=\"filter-search\">\n                                            <div class=\"header\">\n                                                <span>{{ labels.filters }}</span>\n                                                <button theme=\"dialogue\" color=\"negative\" icon=\"times\" (click)=\"onFilterClear(column)\" *ngIf=\"column.filter\">{{ labels.clear }}</button>\n                                            </div>\n                                            <input type=\"text\" [attr.id]=\"column.name + '-input'\" [novoTableFilter]=\"column\" (onFilterChange)=\"onFilterChange($event)\" [(ngModel)]=\"column.filter\" keepFilterFocused #filterInput/>\n                                        </item>\n                                    </list>\n                                    <!-- FILTER DATE OPTIONS -->\n                                    <list *ngIf=\"column?.options?.length && column?.type === 'date' && toggledDropdownMap[column.name]\">\n                                        <item class=\"filter-search\" *ngIf=\"!column.calenderShow\">\n                                            <div class=\"header\">\n                                                <span>{{ labels.filters }}</span>\n                                                <button theme=\"dialogue\" color=\"negative\" icon=\"times\" (click)=\"onFilterClear(column)\" *ngIf=\"column.filter\">{{ labels.clear }}</button>\n                                            </div>\n                                        </item>\n                                        <item [ngClass]=\"{ active: isFilterActive(column, option) }\" *ngFor=\"let option of column.options\" (click)=\"onFilterClick(column, option)\" [keepOpen]=\"option.range\" [hidden]=\"column.calenderShow\" [attr.data-automation-id]=\"(option?.label || option)\">\n                                            {{ option?.label || option }} <i class=\"bhi-check\" *ngIf=\"isFilterActive(column, option)\"></i>\n                                        </item>\n                                        <div class=\"calendar-container\" [hidden]=\"!column.calenderShow\">\n                                            <div (click)=\"column.calenderShow=false\"><i class=\"bhi-previous\"></i>{{ labels.backToPresetFilters }}</div>\n                                            <novo-date-picker #rangePicker (onSelect)=\"onCalenderSelect(column, $event)\" [(ngModel)]=\"column.filter\" range=\"true\"></novo-date-picker>\n                                        </div>\n                                    </list>\n                                </novo-dropdown>\n                            </div>\n                        </th>\n                    </tr>\n                </thead>\n                <!-- TABLE DATA -->\n                <tbody *ngIf=\"!dataProvider.isEmpty() || editing\">\n                    <tr class=\"table-selection-row\" *ngIf=\"config.rowSelectionStyle === 'checkbox' && showSelectAllMessage && config.selectAllEnabled\" data-automation-id=\"table-selection-row\">\n                        <td colspan=\"100%\">\n                            {{labels.selectedRecords(selected.length)}} <a (click)=\"selectAll(true)\" data-automation-id=\"all-matching-records\">{{labels.totalRecords(dataProvider.total)}}</a>\n                        </td>\n                    </tr>\n                    <ng-template ngFor let-row=\"$implicit\" let-i=\"index\" [ngForOf]=\"rows\">\n                        <tr class=\"table-row\" [ngClass]=\"row.customClass || ''\" [id]=\"name + '-' + row[rowIdentifier]\" [attr.data-automation-id]=\"row.id\" (click)=\"rowClickHandler(row)\" [class.active]=\"row.id === activeId\">\n                            <td class=\"row-actions\" *ngIf=\"config.hasDetails\">\n                                <button theme=\"icon\" icon=\"next\" (click)=\"row._expanded=!row._expanded\" *ngIf=\"!row._expanded\"></button>\n                                <button theme=\"icon\" icon=\"sort-desc\" (click)=\"row._expanded=!row._expanded\" *ngIf=\"row._expanded\"></button>\n                            </td>\n                            <td class=\"row-actions checkbox\" *ngIf=\"config.rowSelectionStyle === 'checkbox'\">\n                                <novo-checkbox [(ngModel)]=\"row._selected\" (ngModelChange)=\"rowSelectHandler(row)\" data-automation-id=\"select-row-checkbox\"></novo-checkbox>\n                            </td>\n                            <td *ngFor=\"let column of columns\" [attr.data-automation-id]=\"column.id || column.name\" [class.novo-form-row]=\"editable\" [hidden]=\"isColumnHidden(column)\">\n                                <novo-table-cell *ngIf=\"row._editing && !row._editing[column.name]\" [hasEditor]=\"editable\" [column]=\"column\" [row]=\"row\" [form]=\"getRowControlForm(i)\"></novo-table-cell>\n                                <novo-control *ngIf=\"row._editing && row._editing[column.name]\" condensed=\"true\" [form]=\"getRowControlForm(i)\" [control]=\"row.controls[column.name]\"></novo-control>\n                            </td>\n                        </tr>\n                        <tr class=\"details-row\" *ngIf=\"config.hasDetails\" [hidden]=\"!row._expanded\" [attr.data-automation-id]=\"'details-row-'+row.id\">\n                            <td class=\"row-actions\"></td>\n                            <td [attr.colspan]=\"config.rowSelectionStyle === 'checkbox' ? (columns.length + 1) : columns.length\">\n                                <novo-row-details [data]=\"row\" [renderer]=\"config.detailsRenderer\"></novo-row-details>\n                            </td>\n                        </tr>\n                    </ng-template>\n                </tbody>\n                <!-- NO TABLE DATA PLACEHOLDER -->\n                <tbody class=\"table-message\" *ngIf=\"dataProvider.isEmpty() && !dataProvider.isFiltered() && !editing\" data-automation-id=\"empty-table\">\n                    <tr>\n                        <td colspan=\"100%\">\n                            <div #emptymessage><ng-content select=\"[table-empty-message]\"></ng-content></div>\n                            <div class=\"table-empty-message\" *ngIf=\"emptymessage.childNodes.length == 0\">\n                                <h4><i class=\"bhi-search-question\"></i> {{ labels.emptyTableMessage }}</h4>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n                <!-- NO MATCHING RECORDS -->\n                <tbody class=\"table-message\" *ngIf=\"dataProvider.isEmpty() && dataProvider.isFiltered()\" data-automation-id=\"empty-table\">\n                    <tr>\n                        <td colspan=\"100%\">\n                            <div #nomatchmessage><ng-content select=\"[table-no-matching-records-message]\"></ng-content></div>\n                            <div class=\"no-matching-records\" *ngIf=\"nomatchmessage.childNodes.length == 0\">\n                                <h4><i class=\"bhi-search-question\"></i> {{ labels.noMatchingRecordsMessage }}</h4>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n                <!-- TABLE DATA ERROR PLACEHOLDER -->\n                <tbody class=\"table-message\" *ngIf=\"dataProvider.hasErrors()\" data-automation-id=\"table-errors\">\n                    <tr>\n                        <td colspan=\"100%\">\n                            <div #errormessage><ng-content select=\"[table-error-message]\"></ng-content></div>\n                            <div class=\"table-error-message\" *ngIf=\"errormessage.childNodes.length == 0\">\n                                <h4><i class=\"bhi-caution\"></i> {{ labels.erroredTableMessage }}</h4>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n                <tfoot *ngIf=\"!config.footers\" [ngClass]=\"dataProvider.length % 2 == 0 ? 'odd' : 'even'\">\n                    <tr>\n                        <td colspan=\"100%\">\n                            <ng-content select=\"novo-table-footer\"></ng-content>\n                        </td>\n                    </tr>\n                </tfoot>\n                <tfoot *ngFor=\"let footer of footers;let i = index;\" class=\"novo-table-total-footer\">\n                    <tr>\n                        <td *ngFor=\"let column of columns\" [attr.data-automation-id]=\"(column.id || column.name) + '-total-' + i\">{{ footer[column.name] }}</td>\n                    </tr>\n                </tfoot>\n            </table>\n        </novo-form>\n    </div>\n    "
                }] }
    ];
    NovoTableElement.ctorParameters = function () { return [
        { type: NovoLabelService },
        { type: FormUtils },
        { type: FormBuilder }
    ]; };
    NovoTableElement.propDecorators = {
        filterInputs: [{ type: ViewChildren, args: ['filterInput', { read: ElementRef },] }],
        config: [{ type: Input }],
        columns: [{ type: Input }],
        theme: [{ type: Input }],
        skipSortAndFilterClear: [{ type: Input }],
        mode: [{ type: Input }],
        editable: [{ type: Input }],
        rowIdentifier: [{ type: Input }],
        name: [{ type: Input }],
        onRowClick: [{ type: Output }],
        onRowSelect: [{ type: Output }],
        onTableChange: [{ type: Output }],
        rows: [{ type: Input }],
        dataProvider: [{ type: Input }]
    };
    return NovoTableElement;
}());
export { NovoTableElement };
if (false) {
    /** @type {?} */
    NovoTableElement.prototype.filterInputs;
    /** @type {?} */
    NovoTableElement.prototype.config;
    /** @type {?} */
    NovoTableElement.prototype.columns;
    /** @type {?} */
    NovoTableElement.prototype.theme;
    /** @type {?} */
    NovoTableElement.prototype.skipSortAndFilterClear;
    /** @type {?} */
    NovoTableElement.prototype.mode;
    /** @type {?} */
    NovoTableElement.prototype.editable;
    /** @type {?} */
    NovoTableElement.prototype.rowIdentifier;
    /** @type {?} */
    NovoTableElement.prototype.name;
    /** @type {?} */
    NovoTableElement.prototype.onRowClick;
    /** @type {?} */
    NovoTableElement.prototype.onRowSelect;
    /** @type {?} */
    NovoTableElement.prototype.onTableChange;
    /** @type {?} */
    NovoTableElement.prototype._dataProvider;
    /** @type {?} */
    NovoTableElement.prototype._rows;
    /** @type {?} */
    NovoTableElement.prototype.selected;
    /** @type {?} */
    NovoTableElement.prototype.activeId;
    /** @type {?} */
    NovoTableElement.prototype.master;
    /** @type {?} */
    NovoTableElement.prototype.expandAll;
    /** @type {?} */
    NovoTableElement.prototype.indeterminate;
    /** @type {?} */
    NovoTableElement.prototype.lastPage;
    /** @type {?} */
    NovoTableElement.prototype.selectedPageCount;
    /** @type {?} */
    NovoTableElement.prototype.showSelectAllMessage;
    /** @type {?} */
    NovoTableElement.prototype.currentSortColumn;
    /** @type {?} */
    NovoTableElement.prototype.pagedData;
    /** @type {?} */
    NovoTableElement.prototype.pageSelected;
    /** @type {?} */
    NovoTableElement.prototype.toggledDropdownMap;
    /** @type {?} */
    NovoTableElement.prototype.NovoTableMode;
    /** @type {?} */
    NovoTableElement.prototype.tableForm;
    /** @type {?} */
    NovoTableElement.prototype.toast;
    /** @type {?} */
    NovoTableElement.prototype.footers;
    /** @type {?} */
    NovoTableElement.prototype.grossFlagToAvoidTheTableFromBeingUglyWhenHidingTheToast;
    /** @type {?} */
    NovoTableElement.prototype.loading;
    /** @type {?} */
    NovoTableElement.prototype.labels;
    /** @type {?} */
    NovoTableElement.prototype.formUtils;
    /** @type {?} */
    NovoTableElement.prototype.builder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvVGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBVyxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBOEIsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFcEYsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUU5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7OztBQUU1RCxxQ0EyQkM7OztJQXpCQyxpQ0FNRTs7SUFFRixrQ0FLRzs7SUFFSCxvQ0FBMEI7O0lBQzFCLGtDQUF3Qjs7SUFDeEIsbUNBQThCOztJQUM5QixtQ0FBOEI7O0lBQzlCLDRDQUEyQjs7SUFDM0Isb0NBQW9COztJQUNwQixxQ0FBcUI7O0lBQ3JCLDBDQUFzQjs7SUFDdEIsb0NBQW9COztJQUNwQiwyQ0FBMkI7Ozs7SUFLM0IsT0FBUTtJQUNSLE9BQVE7Ozs7O0FBR1Y7SUFn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Z0JBQWdCO2dCQUVoQixTQUFTO2dCQVBFLFdBQVc7OzsrQkFvTzVCLFlBQVksU0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO3lCQUdoRCxLQUFLOzBCQUVMLEtBQUs7d0JBRUwsS0FBSzt5Q0FFTCxLQUFLO3VCQUVMLEtBQUs7MkJBRUwsS0FBSztnQ0FFTCxLQUFLO3VCQUVMLEtBQUs7NkJBR0wsTUFBTTs4QkFFTixNQUFNO2dDQUVOLE1BQU07dUJBMkJOLEtBQUs7K0JBZ0JMLEtBQUs7O0lBK3ZCUix1QkFBQztDQUFBLEFBdC9CRCxJQXMvQkM7U0FuMEJZLGdCQUFnQjs7O0lBQzNCLHdDQUNvQzs7SUFFcEMsa0NBQzZCOztJQUM3QixtQ0FDb0I7O0lBQ3BCLGlDQUNjOztJQUNkLGtEQUN3Qzs7SUFDeEMsZ0NBQ3lDOztJQUN6QyxvQ0FDMEI7O0lBQzFCLHlDQUM2Qjs7SUFDN0IsZ0NBQ3VCOztJQUV2QixzQ0FDbUQ7O0lBQ25ELHVDQUNvRDs7SUFDcEQseUNBQ3NEOztJQUV0RCx5Q0FBeUM7O0lBQ3pDLGlDQUF1Qjs7SUFDdkIsb0NBQTBCOztJQUMxQixvQ0FBcUI7O0lBQ3JCLGtDQUF3Qjs7SUFDeEIscUNBQTJCOztJQUMzQix5Q0FBK0I7O0lBQy9CLG9DQUFxQjs7SUFDckIsNkNBQThCOztJQUM5QixnREFBc0M7O0lBQ3RDLDZDQUF1Qjs7SUFDdkIscUNBQTJCOztJQUMzQix3Q0FBa0I7O0lBSWxCLDhDQUE2Qjs7SUFDN0IseUNBQXFDOztJQUNyQyxxQ0FBZ0Q7O0lBQ2hELGlDQUErRDs7SUFDL0QsbUNBQTJCOztJQUMzQixtRkFBZ0Y7O0lBQ2hGLG1DQUFnQzs7SUEySHBCLGtDQUErQjs7SUFBRSxxQ0FBNEI7O0lBQUUsbUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgRG9DaGVjaywgRWxlbWVudFJlZiwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIEZvcm1BcnJheSwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtLXV0aWxzL0Zvcm1VdGlscyc7XG5pbXBvcnQgeyBSZWFkT25seUNvbnRyb2wsIENvbnRyb2xGYWN0b3J5IH0gZnJvbSAnLi8uLi9mb3JtL0Zvcm1Db250cm9scyc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uRXZlbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXByb3ZpZGVyL0NvbGxlY3Rpb25FdmVudCc7XG5pbXBvcnQgeyBQYWdlZEFycmF5Q29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtcHJvdmlkZXIvUGFnZWRBcnJheUNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm92b1RhYmxlQ29uZmlnIHtcbiAgLy8gUGFnaW5nIGNvbmZpZ1xuICBwYWdpbmc/OiB7XG4gICAgY3VycmVudDogbnVtYmVyOyAvLyBjdXJyZW50IHBhZ2VcbiAgICBpdGVtc1BlclBhZ2U6IG51bWJlcjsgLy8gaXRlbXMgcGVyIHBhZ2VcbiAgICBvblBhZ2VDaGFuZ2U6IEZ1bmN0aW9uOyAvLyBmdW5jdGlvbiB0byBoYW5kbGUgcGFnZSBjaGFuZ2luZ1xuICAgIHJvd09wdGlvbnM/OiB7IHZhbHVlOiBudW1iZXI7IGxhYmVsOiBzdHJpbmcgfVtdOyAvLyBwYWdlIG9wdGlvbnNcbiAgICBkaXNhYmxlUGFnZVNlbGVjdGlvbj86IGJvb2xlYW47IC8vIGRpc2FibGVzIHRoZSBwYWdlcyBmcm9tIGJlaW5nIHNlbGVjdGVkXG4gIH07XG4gIC8vIEZvb3RlciBjb25maWcgKHRvdGFsIGZvb3RlcilcbiAgZm9vdGVycz86IEFycmF5PHtcbiAgICBjb2x1bW5zOiBBcnJheTxzdHJpbmc+OyAvLyBzdHJpbmcgYXJyYXkgb2YgY29sdW1ucyB0byB0b3RhbFxuICAgIG1ldGhvZDogc3RyaW5nOyAvLyBtZXRob2QgdG8gdXNlIGZvciB0aGUgZm9vdGVyLCBTVU0gfCBBVkcsIGRlZmF1bHRzIHRvIFNVTVxuICAgIGxhYmVsQ29sdW1uOiBzdHJpbmc7IC8vIGNvbHVtbiB0byB1c2UgYXMgdGhlIFwidG90YWxcIiBsYWJlbFxuICAgIGxhYmVsOiBzdHJpbmc7IC8vIGxhYmVsIHRvIHVzZSBpbiB0aGUgXCJ0b3RhbFwiIGxhYmVsXG4gIH0+O1xuICAvLyBUT0RPOiBXaGVuIHRoZXNlIHR5cGVzIGFyZSBlbmZvcmNlZCBhcyBgYm9vbGVhbiB8IEZ1bmN0aW9uYCwgdGhlcmUncyBhIGxpbnQgZXJyb3IuIFRoYXQncyBhIGJ1Zy5cbiAgZmlsdGVyaW5nPzogYm9vbGVhbiB8IGFueTsgLy8gVHVybiBvbiBmaWx0ZXJpbmcgZm9yIHRoZSB0YWJsZSwgYm9vbGVhbiBvciBmdW5jdGlvbiBmb3IgZmlsdGVyaW5nIGNhbGxiYWNrXG4gIHNvcnRpbmc/OiBib29sZWFuIHwgYW55OyAvLyBUdXJuIG9uIHNvcnRpbmcgZm9yIHRoZSB0YWJsZSwgYm9vbGVhbiBvciBmdW5jdGlvbiBmb3Igc29ydGluZyBjYWxsYmFja1xuICBvcmRlcmluZz86IGJvb2xlYW4gfCBGdW5jdGlvbjsgLy8gVHVybiBvbiBvcmRlcmluZyBmb3IgdGhlIHRhYmxlLCBib29sZWFuIG9yIGZ1bmN0aW9uIGZvciBvcmRlcmluZyBjYWxsYmFja1xuICByZXNpemluZz86IGJvb2xlYW4gfCBGdW5jdGlvbjsgLy8gVHVybiBvbiByZXNpemluZyBmb3IgdGhlIHRhYmxlLCBib29sZWFuIG9yIGZ1bmN0aW9uIGZvciByZXNpemluZyBjYWxsYmFja1xuICByb3dTZWxlY3Rpb25TdHlsZT86IHN0cmluZzsgLy8gUm93IHNlbGVjdGlvbiBzdHlsZSwgY2hlY2tib3ggb3Igcm93XG4gIHJvd1NlbGVjdD86IGJvb2xlYW47IC8vIFR1cm4gb24gcm93IHNlbGVjdGlvblxuICBoYXNEZXRhaWxzPzogYm9vbGVhbjsgLy8gVHVybiBvbiBkZXRhaWxzIHJvdyBmb3IgdGhlIHRhYmxlXG4gIGRldGFpbHNSZW5kZXJlcj86IGFueTsgLy8gUmVuZGVyZXIvY29tcG9uZW50IGZvciB0aGUgZGV0YWlscyByb3dcbiAgZXhwYW5kQWxsPzogYm9vbGVhbjsgLy8gc2hvdWxkIEFsbCBSb3dzIGJlIGV4cGFuZGVkIGJ5IGRlZmF1bHRcbiAgc2VsZWN0QWxsRW5hYmxlZD86IGJvb2xlYW47IC8vIEFsbG93cyB0aGUgdGFibGUsIHdoaWxlIGluIHNlbGVjdGlvbiBtb2RlIHRvIGhhdmUgYSBzZWxlY3QgYWxsIGF0IHRoZSB0b3Bcbn1cblxuLy8gVE9ETyAtIHN1cHBvcnQgKDEpIGNsaWNraW5nIGNlbGwgdG8gZWRpdCwgKDIpIGNsaWNraW5nIHJvdyB0byBlZGl0LCAoMykgYnV0dG9uIHRvIHRyaWdnZXIgZnVsbCB0YWJsZSB0byBlZGl0XG5leHBvcnQgZW51bSBOb3ZvVGFibGVNb2RlIHtcbiAgVklFVyA9IDEsXG4gIEVESVQgPSAyLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRhYmxlJyxcbiAgaG9zdDoge1xuICAgICdbYXR0ci50aGVtZV0nOiAndGhlbWUnLFxuICAgICdbY2xhc3MuZWRpdGluZ10nOiAnbW9kZSA9PT0gTm92b1RhYmxlTW9kZS5FRElUJyxcbiAgICAnW2NsYXNzLm5vdm8tdGFibGUtbG9hZGluZ10nOiAnbG9hZGluZycsXG4gIH0sXG4gIC8vIGRpcmVjdGl2ZXM6IFtdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aGVhZGVyICpuZ0lmPVwiY29sdW1ucy5sZW5ndGhcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8tdGFibGUtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPG5vdm8tcGFnaW5hdGlvbiAqbmdJZj1cImNvbmZpZy5wYWdpbmcgJiYgIShkYXRhUHJvdmlkZXIuaXNFbXB0eSgpICYmICFkYXRhUHJvdmlkZXIuaXNGaWx0ZXJlZCgpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93T3B0aW9uc109XCJjb25maWcucGFnaW5nLnJvd09wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVQYWdlU2VsZWN0aW9uXT1cImNvbmZpZy5wYWdpbmcuZGlzYWJsZVBhZ2VTZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhwYWdlKV09XCJkYXRhUHJvdmlkZXIucGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKGl0ZW1zUGVyUGFnZSldPVwiZGF0YVByb3ZpZGVyLnBhZ2VTaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0b3RhbEl0ZW1zXT1cImRhdGFQcm92aWRlci50b3RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25QYWdlQ2hhbmdlKT1cIm9uUGFnZUNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPC9ub3ZvLXBhZ2luYXRpb24+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibm92by10YWJsZS1hY3Rpb25zXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by10YWJsZS1sb2FkaW5nLW92ZXJsYXlcIiAqbmdJZj1cImxvYWRpbmcgfHwgZGF0YVByb3ZpZGVyLmlzTG9hZGluZygpXCI+XG4gICAgICAgICAgICA8bm92by1sb2FkaW5nPjwvbm92by1sb2FkaW5nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5vdm8tdG9hc3QgKm5nSWY9XCJ0b2FzdFwiIFt0aGVtZV09XCJ0b2FzdD8udGhlbWVcIiBbaWNvbl09XCJ0b2FzdD8uaWNvblwiIFttZXNzYWdlXT1cInRvYXN0Py5tZXNzYWdlXCI+PC9ub3ZvLXRvYXN0PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtY29udGFpbmVyXCIgKm5nSWY9XCIhZ3Jvc3NGbGFnVG9Bdm9pZFRoZVRhYmxlRnJvbUJlaW5nVWdseVdoZW5IaWRpbmdUaGVUb2FzdFwiPlxuICAgICAgICAgICAgPG5vdm8tZm9ybSBoaWRlSGVhZGVyPVwidHJ1ZVwiIFtmb3JtXT1cInRhYmxlRm9ybVwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgZGF0YVRhYmxlXCIgW2NsYXNzLnRhYmxlLWRldGFpbHNdPVwiY29uZmlnLmhhc0RldGFpbHNcIiByb2xlPVwiZ3JpZFwiPlxuICAgICAgICAgICAgICAgIDwhLS0gc2tpcFNvcnRBbmRGaWx0ZXJDbGVhciBpcyBhIGhhY2sgcmlnaHQgbm93LCB3aWxsIGJlIHJlbW92ZWQgb25jZSBDYW52YXMgaXMgcmVmYWN0b3JlZCAtLT5cbiAgICAgICAgICAgICAgICA8dGhlYWQgKm5nSWY9XCJjb2x1bW5zLmxlbmd0aCAmJiAoIWRhdGFQcm92aWRlci5pc0VtcHR5KCkgfHwgZGF0YVByb3ZpZGVyLmlzRmlsdGVyZWQoKSB8fCBza2lwU29ydEFuZEZpbHRlckNsZWFyIHx8IGVkaXRpbmcpXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciByb2xlPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIERFVEFJTFMgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJyb3ctYWN0aW9uc1wiICpuZ0lmPVwiY29uZmlnLmhhc0RldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIGljb249XCJuZXh0XCIgKGNsaWNrKT1cImV4cGFuZEFsbE9uUGFnZShjb25maWcuZXhwYW5kQWxsKVwiICpuZ0lmPVwiIWNvbmZpZy5leHBhbmRBbGxcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJleHBhbmQtYWxsXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwic29ydC1kZXNjXCIgKGNsaWNrKT1cImV4cGFuZEFsbE9uUGFnZShjb25maWcuZXhwYW5kQWxsKVwiICpuZ0lmPVwiY29uZmlnLmV4cGFuZEFsbFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImNvbGxhcHNlLWFsbFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQ0hFQ0tCT1ggLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJyb3ctYWN0aW9ucyBjaGVja2JveCBtYXNzLWFjdGlvblwiICpuZ0lmPVwiY29uZmlnLnJvd1NlbGVjdGlvblN0eWxlID09PSAnY2hlY2tib3gnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tY2hlY2tib3ggWyhuZ01vZGVsKV09XCJtYXN0ZXJcIiBbaW5kZXRlcm1pbmF0ZV09XCJwYWdlU2VsZWN0ZWQubGVuZ3RoID4gMCAmJiBwYWdlU2VsZWN0ZWQubGVuZ3RoIDwgcGFnZWREYXRhLmxlbmd0aFwiIChuZ01vZGVsQ2hhbmdlKT1cInNlbGVjdFBhZ2UoJGV2ZW50KVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInNlbGVjdC1hbGwtY2hlY2tib3hcIiBbdG9vbHRpcF09XCJtYXN0ZXIgPyBsYWJlbHMuZGVzZWxlY3RBbGwgOiBsYWJlbHMuc2VsZWN0QWxsT25QYWdlXCIgdG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIj48L25vdm8tY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBUQUJMRSBIRUFERVJTIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiIFtuZ0NsYXNzXT1cInsgJ21hc3MtYWN0aW9uJzogY29uZmlnPy5yb3dTZWxlY3Rpb25TdHlsZSA9PT0gJ2NoZWNrYm94JywgJ2FjdGlvbnMnOiBjb2x1bW4/LmFjdGlvbnM/Lml0ZW1zPy5sZW5ndGggPiAwLCAncHJldmlldyc6IGNvbHVtbj8ubmFtZSA9PT0gJ3ByZXZpZXcnIH1cIiBbbm92b1RoT3JkZXJhYmxlXT1cImNvbHVtblwiIChvbk9yZGVyQ2hhbmdlKT1cIm9uT3JkZXJDaGFuZ2UoJGV2ZW50KVwiIFtoaWRkZW5dPVwiaXNDb2x1bW5IaWRkZW4oY29sdW1uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aC1ncm91cFwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjb2x1bW4uaWQgfHwgY29sdW1uLm5hbWVcIiAqbmdJZj1cIiFjb2x1bW4uaGlkZUhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIExBQkVMICYgU09SVCBBUlJPV1MgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aC10aXRsZVwiIFtuZ0NsYXNzXT1cIihjb25maWcuc29ydGluZyAhPT0gZmFsc2UgJiYgY29sdW1uLnNvcnRpbmcgIT09IGZhbHNlKSA/ICdzb3J0YWJsZScgOiAnJ1wiIFtub3ZvVGhTb3J0YWJsZV09XCJjb25maWdcIiBbY29sdW1uXT1cImNvbHVtblwiIChvblNvcnRDaGFuZ2UpPVwib25Tb3J0Q2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57eyBjb2x1bW4udGl0bGUgfHwgY29sdW1uLmxhYmVsIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1zb3J0LWljb25zXCIgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tXCIgW3Rvb2x0aXBdPVwibGFiZWxzLnNvcnRcIiBbbmdDbGFzc109XCJjb2x1bW4uc29ydCB8fCAnJ1wiICpuZ0lmPVwiY29uZmlnLnNvcnRpbmcgIT09IGZhbHNlICYmIGNvbHVtbi5zb3J0aW5nICE9PSBmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWFycm93LXVwXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWFycm93LWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRklMVEVSIERST1AtRE9XTiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tZHJvcGRvd24gc2lkZT1cInJpZ2h0XCIgKm5nSWY9XCJjb25maWcuZmlsdGVyaW5nICE9PSBmYWxzZSAmJiBjb2x1bW4uZmlsdGVyaW5nICE9PSBmYWxzZVwiIGNsYXNzPVwiY29sdW1uLWZpbHRlcnNcIiAodG9nZ2xlZCk9XCJvbkRyb3Bkb3duVG9nZ2xlZCgkZXZlbnQsIGNvbHVtbi5uYW1lKVwiIHBhcmVudFNjcm9sbFNlbGVjdG9yPVwiLnRhYmxlLWNvbnRhaW5lclwiIGNvbnRhaW5lckNsYXNzPVwidGFibGUtZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwiaWNvblwiIGljb249XCJmaWx0ZXJcIiB0b29sdGlwUG9zaXRpb249XCJib3R0b21cIiBbdG9vbHRpcF09XCJsYWJlbHMuZmlsdGVyc1wiIFtjbGFzcy5maWx0ZXJlZF09XCJjb2x1bW4uZmlsdGVyIHx8IGNvbHVtbi5maWx0ZXI9PT1mYWxzZVwiIChjbGljayk9XCJmb2N1c0lucHV0KClcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRklMVEVSIE9QVElPTlMgTElTVCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaXN0ICpuZ0lmPVwiKGNvbHVtbj8ub3B0aW9ucz8ubGVuZ3RoIHx8IGNvbHVtbj8ub3JpZ2luYWxPcHRpb25zPy5sZW5ndGgpICYmIGNvbHVtbj8udHlwZSAhPT0gJ2RhdGUnICYmIHRvZ2dsZWREcm9wZG93bk1hcFtjb2x1bW4ubmFtZV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbSBjbGFzcz1cImZpbHRlci1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgbGFiZWxzLmZpbHRlcnMgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiBjb2xvcj1cIm5lZ2F0aXZlXCIgaWNvbj1cInRpbWVzXCIgKGNsaWNrKT1cIm9uRmlsdGVyQ2xlYXIoY29sdW1uKVwiICpuZ0lmPVwiY29sdW1uLmZpbHRlciB8fCBjb2x1bW4uZmlsdGVyPT09ZmFsc2VcIj57eyBsYWJlbHMuY2xlYXIgfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICpuZ0lmPVwiISFjb2x1bW4uYWxsb3dDdXN0b21UZXh0T3B0aW9uXCIgW2F0dHIuaWRdPVwiY29sdW1uLm5hbWUgKyAnLWlucHV0J1wiIFtub3ZvVGFibGVGaWx0ZXJdPVwiY29sdW1uXCIgKG9uRmlsdGVyQ2hhbmdlKT1cIm9uRmlsdGVyS2V5d29yZHMoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwiY29sdW1uLmZyZWV0ZXh0RmlsdGVyXCIga2VlcEZpbHRlckZvY3VzZWQgI2ZpbHRlcklucHV0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0gW25nQ2xhc3NdPVwieyBhY3RpdmU6IGlzRmlsdGVyQWN0aXZlKGNvbHVtbiwgb3B0aW9uKSB9XCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb2x1bW4ub3B0aW9uc1wiIChjbGljayk9XCJvbkZpbHRlckNsaWNrKGNvbHVtbiwgb3B0aW9uKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJnZXRPcHRpb25EYXRhQXV0b21hdGlvbklkKG9wdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgb3B0aW9uPy5sYWJlbCB8fCBvcHRpb24gfX08L3NwYW4+IDxpIGNsYXNzPVwiYmhpLWNoZWNrXCIgKm5nSWY9XCJpc0ZpbHRlckFjdGl2ZShjb2x1bW4sIG9wdGlvbilcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBGSUxURVIgU0VBUkNIIElOUFVUIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpc3QgKm5nSWY9XCIhKGNvbHVtbj8ub3B0aW9ucz8ubGVuZ3RoIHx8IGNvbHVtbj8ub3JpZ2luYWxPcHRpb25zPy5sZW5ndGgpICYmIHRvZ2dsZWREcm9wZG93bk1hcFtjb2x1bW4ubmFtZV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbSBjbGFzcz1cImZpbHRlci1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgbGFiZWxzLmZpbHRlcnMgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiBjb2xvcj1cIm5lZ2F0aXZlXCIgaWNvbj1cInRpbWVzXCIgKGNsaWNrKT1cIm9uRmlsdGVyQ2xlYXIoY29sdW1uKVwiICpuZ0lmPVwiY29sdW1uLmZpbHRlclwiPnt7IGxhYmVscy5jbGVhciB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW2F0dHIuaWRdPVwiY29sdW1uLm5hbWUgKyAnLWlucHV0J1wiIFtub3ZvVGFibGVGaWx0ZXJdPVwiY29sdW1uXCIgKG9uRmlsdGVyQ2hhbmdlKT1cIm9uRmlsdGVyQ2hhbmdlKCRldmVudClcIiBbKG5nTW9kZWwpXT1cImNvbHVtbi5maWx0ZXJcIiBrZWVwRmlsdGVyRm9jdXNlZCAjZmlsdGVySW5wdXQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRklMVEVSIERBVEUgT1BUSU9OUyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaXN0ICpuZ0lmPVwiY29sdW1uPy5vcHRpb25zPy5sZW5ndGggJiYgY29sdW1uPy50eXBlID09PSAnZGF0ZScgJiYgdG9nZ2xlZERyb3Bkb3duTWFwW2NvbHVtbi5uYW1lXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiZmlsdGVyLXNlYXJjaFwiICpuZ0lmPVwiIWNvbHVtbi5jYWxlbmRlclNob3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgbGFiZWxzLmZpbHRlcnMgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiBjb2xvcj1cIm5lZ2F0aXZlXCIgaWNvbj1cInRpbWVzXCIgKGNsaWNrKT1cIm9uRmlsdGVyQ2xlYXIoY29sdW1uKVwiICpuZ0lmPVwiY29sdW1uLmZpbHRlclwiPnt7IGxhYmVscy5jbGVhciB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0gW25nQ2xhc3NdPVwieyBhY3RpdmU6IGlzRmlsdGVyQWN0aXZlKGNvbHVtbiwgb3B0aW9uKSB9XCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb2x1bW4ub3B0aW9uc1wiIChjbGljayk9XCJvbkZpbHRlckNsaWNrKGNvbHVtbiwgb3B0aW9uKVwiIFtrZWVwT3Blbl09XCJvcHRpb24ucmFuZ2VcIiBbaGlkZGVuXT1cImNvbHVtbi5jYWxlbmRlclNob3dcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiKG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBvcHRpb24/LmxhYmVsIHx8IG9wdGlvbiB9fSA8aSBjbGFzcz1cImJoaS1jaGVja1wiICpuZ0lmPVwiaXNGaWx0ZXJBY3RpdmUoY29sdW1uLCBvcHRpb24pXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItY29udGFpbmVyXCIgW2hpZGRlbl09XCIhY29sdW1uLmNhbGVuZGVyU2hvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IChjbGljayk9XCJjb2x1bW4uY2FsZW5kZXJTaG93PWZhbHNlXCI+PGkgY2xhc3M9XCJiaGktcHJldmlvdXNcIj48L2k+e3sgbGFiZWxzLmJhY2tUb1ByZXNldEZpbHRlcnMgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tZGF0ZS1waWNrZXIgI3JhbmdlUGlja2VyIChvblNlbGVjdCk9XCJvbkNhbGVuZGVyU2VsZWN0KGNvbHVtbiwgJGV2ZW50KVwiIFsobmdNb2RlbCldPVwiY29sdW1uLmZpbHRlclwiIHJhbmdlPVwidHJ1ZVwiPjwvbm92by1kYXRlLXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ub3ZvLWRyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDwhLS0gVEFCTEUgREFUQSAtLT5cbiAgICAgICAgICAgICAgICA8dGJvZHkgKm5nSWY9XCIhZGF0YVByb3ZpZGVyLmlzRW1wdHkoKSB8fCBlZGl0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRhYmxlLXNlbGVjdGlvbi1yb3dcIiAqbmdJZj1cImNvbmZpZy5yb3dTZWxlY3Rpb25TdHlsZSA9PT0gJ2NoZWNrYm94JyAmJiBzaG93U2VsZWN0QWxsTWVzc2FnZSAmJiBjb25maWcuc2VsZWN0QWxsRW5hYmxlZFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInRhYmxlLXNlbGVjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bGFiZWxzLnNlbGVjdGVkUmVjb3JkcyhzZWxlY3RlZC5sZW5ndGgpfX0gPGEgKGNsaWNrKT1cInNlbGVjdEFsbCh0cnVlKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImFsbC1tYXRjaGluZy1yZWNvcmRzXCI+e3tsYWJlbHMudG90YWxSZWNvcmRzKGRhdGFQcm92aWRlci50b3RhbCl9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtcm93PVwiJGltcGxpY2l0XCIgbGV0LWk9XCJpbmRleFwiIFtuZ0Zvck9mXT1cInJvd3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRhYmxlLXJvd1wiIFtuZ0NsYXNzXT1cInJvdy5jdXN0b21DbGFzcyB8fCAnJ1wiIFtpZF09XCJuYW1lICsgJy0nICsgcm93W3Jvd0lkZW50aWZpZXJdXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cInJvdy5pZFwiIChjbGljayk9XCJyb3dDbGlja0hhbmRsZXIocm93KVwiIFtjbGFzcy5hY3RpdmVdPVwicm93LmlkID09PSBhY3RpdmVJZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJvdy1hY3Rpb25zXCIgKm5nSWY9XCJjb25maWcuaGFzRGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIGljb249XCJuZXh0XCIgKGNsaWNrKT1cInJvdy5fZXhwYW5kZWQ9IXJvdy5fZXhwYW5kZWRcIiAqbmdJZj1cIiFyb3cuX2V4cGFuZGVkXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgaWNvbj1cInNvcnQtZGVzY1wiIChjbGljayk9XCJyb3cuX2V4cGFuZGVkPSFyb3cuX2V4cGFuZGVkXCIgKm5nSWY9XCJyb3cuX2V4cGFuZGVkXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyb3ctYWN0aW9ucyBjaGVja2JveFwiICpuZ0lmPVwiY29uZmlnLnJvd1NlbGVjdGlvblN0eWxlID09PSAnY2hlY2tib3gnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLWNoZWNrYm94IFsobmdNb2RlbCldPVwicm93Ll9zZWxlY3RlZFwiIChuZ01vZGVsQ2hhbmdlKT1cInJvd1NlbGVjdEhhbmRsZXIocm93KVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInNlbGVjdC1yb3ctY2hlY2tib3hcIj48L25vdm8tY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNvbHVtbi5pZCB8fCBjb2x1bW4ubmFtZVwiIFtjbGFzcy5ub3ZvLWZvcm0tcm93XT1cImVkaXRhYmxlXCIgW2hpZGRlbl09XCJpc0NvbHVtbkhpZGRlbihjb2x1bW4pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLXRhYmxlLWNlbGwgKm5nSWY9XCJyb3cuX2VkaXRpbmcgJiYgIXJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV1cIiBbaGFzRWRpdG9yXT1cImVkaXRhYmxlXCIgW2NvbHVtbl09XCJjb2x1bW5cIiBbcm93XT1cInJvd1wiIFtmb3JtXT1cImdldFJvd0NvbnRyb2xGb3JtKGkpXCI+PC9ub3ZvLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLWNvbnRyb2wgKm5nSWY9XCJyb3cuX2VkaXRpbmcgJiYgcm93Ll9lZGl0aW5nW2NvbHVtbi5uYW1lXVwiIGNvbmRlbnNlZD1cInRydWVcIiBbZm9ybV09XCJnZXRSb3dDb250cm9sRm9ybShpKVwiIFtjb250cm9sXT1cInJvdy5jb250cm9sc1tjb2x1bW4ubmFtZV1cIj48L25vdm8tY29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cImRldGFpbHMtcm93XCIgKm5nSWY9XCJjb25maWcuaGFzRGV0YWlsc1wiIFtoaWRkZW5dPVwiIXJvdy5fZXhwYW5kZWRcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2RldGFpbHMtcm93LScrcm93LmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicm93LWFjdGlvbnNcIj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBbYXR0ci5jb2xzcGFuXT1cImNvbmZpZy5yb3dTZWxlY3Rpb25TdHlsZSA9PT0gJ2NoZWNrYm94JyA/IChjb2x1bW5zLmxlbmd0aCArIDEpIDogY29sdW1ucy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tcm93LWRldGFpbHMgW2RhdGFdPVwicm93XCIgW3JlbmRlcmVyXT1cImNvbmZpZy5kZXRhaWxzUmVuZGVyZXJcIj48L25vdm8tcm93LWRldGFpbHM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8IS0tIE5PIFRBQkxFIERBVEEgUExBQ0VIT0xERVIgLS0+XG4gICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzPVwidGFibGUtbWVzc2FnZVwiICpuZ0lmPVwiZGF0YVByb3ZpZGVyLmlzRW1wdHkoKSAmJiAhZGF0YVByb3ZpZGVyLmlzRmlsdGVyZWQoKSAmJiAhZWRpdGluZ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cImVtcHR5LXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgI2VtcHR5bWVzc2FnZT48bmctY29udGVudCBzZWxlY3Q9XCJbdGFibGUtZW1wdHktbWVzc2FnZV1cIj48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLWVtcHR5LW1lc3NhZ2VcIiAqbmdJZj1cImVtcHR5bWVzc2FnZS5jaGlsZE5vZGVzLmxlbmd0aCA9PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND48aSBjbGFzcz1cImJoaS1zZWFyY2gtcXVlc3Rpb25cIj48L2k+IHt7IGxhYmVscy5lbXB0eVRhYmxlTWVzc2FnZSB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPCEtLSBOTyBNQVRDSElORyBSRUNPUkRTIC0tPlxuICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cInRhYmxlLW1lc3NhZ2VcIiAqbmdJZj1cImRhdGFQcm92aWRlci5pc0VtcHR5KCkgJiYgZGF0YVByb3ZpZGVyLmlzRmlsdGVyZWQoKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImVtcHR5LXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgI25vbWF0Y2htZXNzYWdlPjxuZy1jb250ZW50IHNlbGVjdD1cIlt0YWJsZS1uby1tYXRjaGluZy1yZWNvcmRzLW1lc3NhZ2VdXCI+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuby1tYXRjaGluZy1yZWNvcmRzXCIgKm5nSWY9XCJub21hdGNobWVzc2FnZS5jaGlsZE5vZGVzLmxlbmd0aCA9PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND48aSBjbGFzcz1cImJoaS1zZWFyY2gtcXVlc3Rpb25cIj48L2k+IHt7IGxhYmVscy5ub01hdGNoaW5nUmVjb3Jkc01lc3NhZ2UgfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwhLS0gVEFCTEUgREFUQSBFUlJPUiBQTEFDRUhPTERFUiAtLT5cbiAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3M9XCJ0YWJsZS1tZXNzYWdlXCIgKm5nSWY9XCJkYXRhUHJvdmlkZXIuaGFzRXJyb3JzKClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJ0YWJsZS1lcnJvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAjZXJyb3JtZXNzYWdlPjxuZy1jb250ZW50IHNlbGVjdD1cIlt0YWJsZS1lcnJvci1tZXNzYWdlXVwiPjwvbmctY29udGVudD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtZXJyb3ItbWVzc2FnZVwiICpuZ0lmPVwiZXJyb3JtZXNzYWdlLmNoaWxkTm9kZXMubGVuZ3RoID09IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpIGNsYXNzPVwiYmhpLWNhdXRpb25cIj48L2k+IHt7IGxhYmVscy5lcnJvcmVkVGFibGVNZXNzYWdlIH19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8dGZvb3QgKm5nSWY9XCIhY29uZmlnLmZvb3RlcnNcIiBbbmdDbGFzc109XCJkYXRhUHJvdmlkZXIubGVuZ3RoICUgMiA9PSAwID8gJ29kZCcgOiAnZXZlbidcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibm92by10YWJsZS1mb290ZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGZvb3Q+XG4gICAgICAgICAgICAgICAgPHRmb290ICpuZ0Zvcj1cImxldCBmb290ZXIgb2YgZm9vdGVycztsZXQgaSA9IGluZGV4O1wiIGNsYXNzPVwibm92by10YWJsZS10b3RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCIoY29sdW1uLmlkIHx8IGNvbHVtbi5uYW1lKSArICctdG90YWwtJyArIGlcIj57eyBmb290ZXJbY29sdW1uLm5hbWVdIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rmb290PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9ub3ZvLWZvcm0+XG4gICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYmxlRWxlbWVudCBpbXBsZW1lbnRzIERvQ2hlY2sge1xuICBAVmlld0NoaWxkcmVuKCdmaWx0ZXJJbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KVxuICBmaWx0ZXJJbnB1dHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBASW5wdXQoKVxuICBjb25maWc6IE5vdm9UYWJsZUNvbmZpZyA9IHt9O1xuICBASW5wdXQoKVxuICBjb2x1bW5zOiBBcnJheTxhbnk+O1xuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBza2lwU29ydEFuZEZpbHRlckNsZWFyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIG1vZGU6IE5vdm9UYWJsZU1vZGUgPSBOb3ZvVGFibGVNb2RlLlZJRVc7XG4gIEBJbnB1dCgpXG4gIGVkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHJvd0lkZW50aWZpZXI6IHN0cmluZyA9ICdpZCc7XG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZyA9ICd0YWJsZSc7XG5cbiAgQE91dHB1dCgpXG4gIG9uUm93Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25Sb3dTZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25UYWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgX2RhdGFQcm92aWRlcjogUGFnZWRBcnJheUNvbGxlY3Rpb248YW55PjtcbiAgX3Jvd3M6IEFycmF5PGFueT4gPSBbXTtcbiAgc2VsZWN0ZWQ6IEFycmF5PGFueT4gPSBbXTtcbiAgYWN0aXZlSWQ6IG51bWJlciA9IDA7XG4gIG1hc3RlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBleHBhbmRBbGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaW5kZXRlcm1pbmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBsYXN0UGFnZTogbnVtYmVyID0gMDtcbiAgc2VsZWN0ZWRQYWdlQ291bnQ6IG51bWJlciA9IDA7XG4gIHNob3dTZWxlY3RBbGxNZXNzYWdlOiBib29sZWFuID0gZmFsc2U7XG4gIGN1cnJlbnRTb3J0Q29sdW1uOiBhbnk7XG4gIHBhZ2VkRGF0YTogQXJyYXk8YW55PiA9IFtdO1xuICBwYWdlU2VsZWN0ZWQ6IGFueTtcbiAgLy8gTWFwIHRvIGtlZXAgdHJhY2sgb2Ygd2hhdCBkcm9wZG93bnMgYXJlIHRvZ2dsZWRcbiAgLy8gVXNlZCB0byBwcm9wZXJseSAqbmdJZiB0aGUgPGxpc3Q+IHNvIHRoYXQgdGhlIGtlZXBGaWx0ZXJGb2N1c2VkIERpcmVjdGl2ZVxuICAvLyB3aWxsIHByb3Blcmx5IGZpcmUgdGhlIG5nQWZ0ZXJWaWV3SW5pdCBldmVudFxuICB0b2dnbGVkRHJvcGRvd25NYXA6IGFueSA9IHt9O1xuICBwdWJsaWMgTm92b1RhYmxlTW9kZSA9IE5vdm9UYWJsZU1vZGU7XG4gIHB1YmxpYyB0YWJsZUZvcm06IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe30pO1xuICBwdWJsaWMgdG9hc3Q6IHsgdGhlbWU6IHN0cmluZzsgaWNvbjogc3RyaW5nOyBtZXNzYWdlOiBzdHJpbmcgfTtcbiAgcHVibGljIGZvb3RlcnM6IGFueVtdID0gW107XG4gIHB1YmxpYyBncm9zc0ZsYWdUb0F2b2lkVGhlVGFibGVGcm9tQmVpbmdVZ2x5V2hlbkhpZGluZ1RoZVRvYXN0OiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IHJvd3Mocm93czogQXJyYXk8YW55Pikge1xuICAgIHRoaXMuZGF0YVByb3ZpZGVyID0gcm93cztcbiAgICBpZiAocm93cyAmJiByb3dzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0dXBDb2x1bW5EZWZhdWx0cygpO1xuICAgIH1cbiAgICAvLyB0aGlzIGlzIGEgdGVtcG9yYXJ5L2hhY2t5IGZpeCB1bnRpbCBhc3luYyBkYXRhbG9hZGluZyBpcyBoYW5kbGVkIHdpdGhpbiB0aGUgdGFibGVcbiAgICBpZiAoIXRoaXMuc2tpcFNvcnRBbmRGaWx0ZXJDbGVhcikge1xuICAgICAgdGhpcy5jbGVhckFsbFNvcnRBbmRGaWx0ZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvd3M7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGF0YVByb3ZpZGVyKGRwOiBhbnkpIHtcbiAgICB0aGlzLl9kYXRhUHJvdmlkZXIgPSBBcnJheS5pc0FycmF5KGRwKSA/IG5ldyBQYWdlZEFycmF5Q29sbGVjdGlvbjxhbnk+KGRwKSA6IGRwO1xuICAgIHRoaXMuX2RhdGFQcm92aWRlci5kYXRhQ2hhbmdlLnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpLnN1YnNjcmliZSgoZXZlbnQ6IENvbGxlY3Rpb25FdmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgQ29sbGVjdGlvbkV2ZW50LkNIQU5HRTpcbiAgICAgICAgICB0aGlzLl9yb3dzID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAvLyBTZXR1cCBmb3JtXG4gICAgICAgICAgdGhpcy50YWJsZUZvcm0gPSB0aGlzLmJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgcm93czogdGhpcy5idWlsZGVyLmFycmF5KFtdKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBSZW1vdmUgYWxsIHNlbGVjdGlvbiBvbiBzb3J0IGNoYW5nZSBpZiBzZWxlY3Rpb24gaXMgb25cbiAgICAgICAgICBpZiAodGhpcy5jb25maWcucm93U2VsZWN0aW9uU3R5bGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZWREYXRhID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHRoaXMucGFnZVNlbGVjdGVkID0gdGhpcy5wYWdlZERhdGEuZmlsdGVyKChyKSA9PiByLl9zZWxlY3RlZCk7XG4gICAgICAgICAgICB0aGlzLnJvd1NlbGVjdEhhbmRsZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRmluZCB0aGF0IGNvbHVtbnMgd2UgbWlnaHQgbmVlZCB0byBzdW0gdXAgdmlhIHRoZSBmb290ZXJcbiAgICAgICAgICBsZXQgY29sdW1uc1RvU3VtID0gW107XG4gICAgICAgICAgbGV0IGNvbHVtblN1bXMgPSB7fTtcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcuZm9vdGVycykge1xuICAgICAgICAgICAgdGhpcy5jb25maWcuZm9vdGVycy5mb3JFYWNoKChjb25maWcpID0+IHtcbiAgICAgICAgICAgICAgY29sdW1uc1RvU3VtLnB1c2goLi4uY29uZmlnLmNvbHVtbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBPbmx5IGhhdmUgdW5pcXVlIGNvbHVtbnMsIGZpbHRlciBvdXQgZHVwbGljYXRlc1xuICAgICAgICAgICAgY29sdW1uc1RvU3VtID0gY29sdW1uc1RvU3VtLmZpbHRlcigoaXRlbSwgaW5kZXgsIGFycmF5KSA9PiBhcnJheS5pbmRleE9mKGl0ZW0pID09PSBpbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIE1ha2UgYSBmb3JtIGZvciBlYWNoIHJvd1xuICAgICAgICAgIGxldCB0YWJsZUZvcm1Sb3dzID0gPEZvcm1BcnJheT50aGlzLnRhYmxlRm9ybS5jb250cm9sc1sncm93cyddO1xuICAgICAgICAgIHRoaXMuX3Jvd3MuZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJvd0NvbnRyb2xzID0gW107XG4gICAgICAgICAgICByb3cuY29udHJvbHMgPSB7fTtcbiAgICAgICAgICAgIHJvdy5fZWRpdGluZyA9IHt9O1xuICAgICAgICAgICAgcm93Ll9leHBhbmRlZCA9IHRoaXMuY29uZmlnLmV4cGFuZEFsbDtcbiAgICAgICAgICAgIHJvdy5yb3dJZCA9IHRoaXMuX3Jvd3MubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAvLyBVc2UgdGhlIGNvbnRyb2wgcGFzc2VkIG9yIHVzZSBhIFJlYWRPbmx5Q29udHJvbCBzbyB0aGF0IHRoZSBmb3JtIGhhcyB0aGUgdmFsdWVzXG4gICAgICAgICAgICAgIGxldCBjb250cm9sID0gY29sdW1uLmVkaXRvckNvbmZpZ1xuICAgICAgICAgICAgICAgID8gQ29udHJvbEZhY3RvcnkuY3JlYXRlKGNvbHVtbi5lZGl0b3JUeXBlLCBjb2x1bW4uZWRpdG9yQ29uZmlnKVxuICAgICAgICAgICAgICAgIDogbmV3IFJlYWRPbmx5Q29udHJvbCh7IGtleTogY29sdW1uLm5hbWUgfSk7XG4gICAgICAgICAgICAgIHJvdy5jb250cm9sc1tjb2x1bW4ubmFtZV0gPSBjb250cm9sO1xuICAgICAgICAgICAgICByb3dDb250cm9scy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmZvcm1VdGlscy5zZXRJbml0aWFsVmFsdWVzKHJvd0NvbnRyb2xzLCByb3csIGZhbHNlKTtcbiAgICAgICAgICAgIHRhYmxlRm9ybVJvd3MucHVzaCh0aGlzLmZvcm1VdGlscy50b0Zvcm1Hcm91cChyb3dDb250cm9scykpO1xuICAgICAgICAgICAgLy8gU2V0dXAgdGhlIHRvdGFsIGZvb3RlciBpZiBjb25maWd1cmVkXG4gICAgICAgICAgICAvLyBBcnJheSBvZiBrZXlzIHRvIHRvdGFsXG4gICAgICAgICAgICBpZiAoY29sdW1uc1RvU3VtLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICBjb2x1bW5zVG9TdW0uZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEhlbHBlcnMuaXNCbGFuayhjb2x1bW5TdW1zW2NvbHVtbl0pKSB7XG4gICAgICAgICAgICAgICAgICBjb2x1bW5TdW1zW2NvbHVtbl0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb2x1bW5TdW1zW2NvbHVtbl0gKz0gcm93W2NvbHVtbl07XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICh0aGlzLm1vZGUgPT09IE5vdm9UYWJsZU1vZGUuRURJVCkge1xuICAgICAgICAgICAgdGhpcy5zZXRUYWJsZUVkaXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gU2V0dXAgdGhlIGZvb3RlcnMgKGlmIGFueSlcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcuZm9vdGVycykge1xuICAgICAgICAgICAgdGhpcy5mb290ZXJzID0gW107XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5mb290ZXJzLmZvckVhY2goKGZvb3RlckNvbmZpZywgZm9vdGVyQ29uZmlnSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGZvb3RlciA9IHt9O1xuICAgICAgICAgICAgICBmb290ZXJbZm9vdGVyQ29uZmlnLmxhYmVsQ29sdW1uXSA9IGZvb3RlckNvbmZpZy5sYWJlbDtcbiAgICAgICAgICAgICAgZm9vdGVyQ29uZmlnLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZvb3RlckNvbmZpZy5tZXRob2QgPT09ICdBVkcnICYmIHRoaXMuX3Jvd3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICBmb290ZXJbY29sdW1uXSA9IGNvbHVtblN1bXNbY29sdW1uXSAvIHRoaXMuX3Jvd3MubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBmb290ZXJbY29sdW1uXSA9IGNvbHVtblN1bXNbY29sdW1uXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLmZvb3RlcnMucHVzaChmb290ZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0aGlzLmNvbmZpZy5wYWdpbmcpIHtcbiAgICAgIHRoaXMuX2RhdGFQcm92aWRlci5wYWdlID0gdGhpcy5jb25maWcucGFnaW5nLmN1cnJlbnQ7XG4gICAgICB0aGlzLl9kYXRhUHJvdmlkZXIucGFnZVNpemUgPSB0aGlzLmNvbmZpZy5wYWdpbmcuaXRlbXNQZXJQYWdlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBQYWdpbmcgdHVybmVkIG9mZiwgcmV0dXJuIGJhc2ljYWxseSBhbGwgb2YgdGhlIGRhdGFcbiAgICAgIHRoaXMuX2RhdGFQcm92aWRlci5wYWdlID0gMTtcbiAgICAgIHRoaXMuX2RhdGFQcm92aWRlci5wYWdlU2l6ZSA9IDUwMDtcbiAgICB9XG4gICAgaWYgKGRwICYmIGRwLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0dXBDb2x1bW5EZWZhdWx0cygpO1xuICAgIH1cbiAgICB0aGlzLl9kYXRhUHJvdmlkZXIucmVmcmVzaCgpO1xuICB9XG4gIGdldCBkYXRhUHJvdmlkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFQcm92aWRlcjtcbiAgfVxuXG4gIGdldCBlZGl0aW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09IE5vdm9UYWJsZU1vZGUuRURJVDtcbiAgfVxuXG4gIGdldCBmb3JtVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFibGVGb3JtLnZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcHJpdmF0ZSBmb3JtVXRpbHM6IEZvcm1VdGlscywgcHJpdmF0ZSBidWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgIG5vdGlmeSgnW0RlcHJlY2F0ZWRdOiBUaGUgdGFibGUgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIG1pZ3JhdGUgdG8gbm92by1kYXRhLXRhYmxlcyEnKTtcbiAgfVxuXG4gIG9uRHJvcGRvd25Ub2dnbGVkKGV2ZW50LCBjb2x1bW4pOiB2b2lkIHtcbiAgICB0aGlzLnRvZ2dsZWREcm9wZG93bk1hcFtjb2x1bW5dID0gZXZlbnQ7XG4gIH1cblxuICBmb2N1c0lucHV0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpbHRlcklucHV0cyAmJiB0aGlzLmZpbHRlcklucHV0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZmlsdGVySW5wdXRzLmZvckVhY2goKGZpbHRlcklucHV0KSA9PiB7XG4gICAgICAgIGlmIChmaWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBmaWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCksIDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvblBhZ2VDaGFuZ2UoZXZlbnQpIHtcbiAgICAvLyB0aGlzLmRhdGFQcm92aWRlci5wYWdlID0gZXZlbnQucGFnZTtcbiAgICAvLyB0aGlzLmRhdGFQcm92aWRlci5wYWdlU2l6ZSA9IGV2ZW50Lml0ZW1zUGVyUGFnZTtcbiAgfVxuXG4gIGdldE9wdGlvbkRhdGFBdXRvbWF0aW9uSWQob3B0aW9uKSB7XG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsob3B0aW9uLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIG9wdGlvbi52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZXR1cENvbHVtbkRlZmF1bHRzXG4gICAqL1xuICBzZXR1cENvbHVtbkRlZmF1bHRzKCkge1xuICAgIC8vIENoZWNrIGNvbHVtbnMgZm9yIGNlbGwgb3B0aW9uIHR5cGVzXG4gICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgaWYgKGNvbHVtbiAmJiBjb2x1bW4udHlwZSkge1xuICAgICAgICBzd2l0Y2ggKGNvbHVtbi50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICAvLyBTZXQgb3B0aW9ucyBiYXNlZCBvbiBkYXRlcyBpZiB0aGVyZSBhcmUgbm9uZVxuICAgICAgICAgICAgY29sdW1uLm9wdGlvbnMgPSBjb2x1bW4ub3B0aW9ucyB8fCB0aGlzLmdldERlZmF1bHRPcHRpb25zKGNvbHVtbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBuZ0RvQ2hlY2tcbiAgICovXG4gIG5nRG9DaGVjaygpIHtcbiAgICBpZiAodGhpcy5jb25maWcucGFnaW5nICYmIHRoaXMuY29uZmlnLnBhZ2luZy5jdXJyZW50ICE9PSB0aGlzLmxhc3RQYWdlKSB7XG4gICAgICB0aGlzLnJvd1NlbGVjdEhhbmRsZXIoKTtcbiAgICAgIHRoaXMuc2hvd1NlbGVjdEFsbE1lc3NhZ2UgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5sYXN0UGFnZSA9IHRoaXMuY29uZmlnLnBhZ2luZyA/IHRoaXMuY29uZmlnLnBhZ2luZy5jdXJyZW50IDogMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBnZXRQYWdlU3RhcnRcbiAgICovXG4gIGdldFBhZ2VTdGFydCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5wYWdpbmcgPyAodGhpcy5kYXRhUHJvdmlkZXIucGFnZSAtIDEpICogdGhpcy5kYXRhUHJvdmlkZXIucGFnZVNpemUgOiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGdldFBhZ2VFbmRcbiAgICovXG4gIGdldFBhZ2VFbmQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcucGFnaW5nICYmIHRoaXMuZGF0YVByb3ZpZGVyLnBhZ2VTaXplID4gLTEgPyB0aGlzLmdldFBhZ2VTdGFydCgpICsgdGhpcy5kYXRhUHJvdmlkZXIucGFnZVNpemUgOiB0aGlzLnJvd3MubGVuZ3RoO1xuICB9XG5cbiAgZ2V0Um93Q29udHJvbEZvcm0oaSk6IEFic3RyYWN0Q29udHJvbCB7XG4gICAgbGV0IHRhYmxlRm9ybVJvd3MgPSA8Rm9ybUFycmF5PnRoaXMudGFibGVGb3JtLmNvbnRyb2xzWydyb3dzJ107XG4gICAgcmV0dXJuIHRhYmxlRm9ybVJvd3MuY29udHJvbHNbaV07XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgb25GaWx0ZXJDbGlja1xuICAgKiBAcGFyYW0gY29sdW1uXG4gICAqIEBwYXJhbSBmaWx0ZXJcbiAgICovXG4gIG9uRmlsdGVyQ2xpY2soY29sdW1uLCBmaWx0ZXIpIHtcbiAgICBpZiAoZmlsdGVyLnJhbmdlICYmICFjb2x1bW4uY2FsZW5kYXJTaG93KSB7XG4gICAgICBjb2x1bW4uY2FsZW5kZXJTaG93ID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29sdW1uLmZpbHRlcikgJiYgY29sdW1uLm11bHRpcGxlKSB7XG4gICAgICBpZiAofmNvbHVtbi5maWx0ZXIuaW5kZXhPZihmaWx0ZXIpKSB7XG4gICAgICAgIC8vIFJlbW92ZSBmaWx0ZXJcbiAgICAgICAgY29sdW1uLmZpbHRlci5zcGxpY2UoY29sdW1uLmZpbHRlci5pbmRleE9mKGZpbHRlciksIDEpO1xuICAgICAgICBpZiAoZmlsdGVyLnJhbmdlKSB7XG4gICAgICAgICAgY29sdW1uLmNhbGVuZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29sdW1uLmZpbHRlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFkZCBmaWx0ZXJcbiAgICAgICAgY29sdW1uLmZpbHRlci5wdXNoKGZpbHRlcik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb2x1bW4ubXVsdGlwbGUpIHtcbiAgICAgIGNvbHVtbi5maWx0ZXIgPSBuZXcgQXJyYXkoKTtcbiAgICAgIGNvbHVtbi5maWx0ZXIucHVzaChIZWxwZXJzLmlzQmxhbmsoZmlsdGVyLnZhbHVlKSA/IGZpbHRlciA6IGZpbHRlci52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbHVtbi5maWx0ZXIgPSBIZWxwZXJzLmlzQmxhbmsoZmlsdGVyLnZhbHVlKSA/IGZpbHRlciA6IGZpbHRlci52YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5vbkZpbHRlckNoYW5nZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uRmlsdGVyQ2xlYXJcbiAgICogQHBhcmFtIGNvbHVtblxuICAgKi9cbiAgb25GaWx0ZXJDbGVhcihjb2x1bW46IGFueSk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29sdW1uLmZpbHRlciA9IG51bGw7XG4gICAgICBjb2x1bW4uZnJlZXRleHRGaWx0ZXIgPSBudWxsO1xuICAgICAgdGhpcy5vbkZpbHRlckNoYW5nZSgpO1xuICAgICAgaWYgKGNvbHVtbi5vcmlnaW5hbE9wdGlvbnMpIHtcbiAgICAgICAgY29sdW1uLm9wdGlvbnMgPSBjb2x1bW4ub3JpZ2luYWxPcHRpb25zO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xlYXJBbGxTb3J0QW5kRmlsdGVycygpIHtcbiAgICBpZiAodGhpcy5jb25maWcuZmlsdGVyaW5nKSB7XG4gICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIGNvbHVtbi5maWx0ZXIgPSBudWxsO1xuICAgICAgICBjb2x1bW4uc29ydCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgb25GaWx0ZXJDaGFuZ2VcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgbWV0aG9kIHVwZGF0ZXMgdGhlIHJvdyBkYXRhIHRvIHJlZmxlY3QgdGhlIGFjdGl2ZSBmaWx0ZXJzLlxuICAgKi9cbiAgb25GaWx0ZXJDaGFuZ2UoZXZlbnQ/OiBFdmVudCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXJpbmcpIHtcbiAgICAgIC8vIEFycmF5IG9mIGZpbHRlcnNcbiAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2wpID0+ICFIZWxwZXJzLmlzRW1wdHkoY29sLmZpbHRlcikpO1xuICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBxdWVyeSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBmaWx0ZXJzKSB7XG4gICAgICAgICAgaWYgKEhlbHBlcnMuaXNGdW5jdGlvbihjb2x1bW4ubWF0Y2gpKSB7XG4gICAgICAgICAgICBxdWVyeVtjb2x1bW4ubmFtZV0gPSAodmFsdWUsIHJlY29yZCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gY29sdW1uLm1hdGNoKHJlY29yZCwgY29sdW1uLmZpbHRlcik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29sdW1uLnByZUZpbHRlciAmJiBIZWxwZXJzLmlzRnVuY3Rpb24oY29sdW1uLnByZUZpbHRlcikpIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gT2JqZWN0LmFzc2lnbih7fSwgcXVlcnksIGNvbHVtbi5wcmVGaWx0ZXIodGhpcy5lc2NhcGVDaGFyYWN0ZXJzKGNvbHVtbi5maWx0ZXIpKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbHVtbi5maWx0ZXIpKSB7XG4gICAgICAgICAgICAvLyBUaGUgZmlsdGVycyBhcmUgYW4gYXJyYXkgKG11bHRpLXNlbGVjdCksIGNoZWNrIHZhbHVlXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IGNvbHVtbi5maWx0ZXI7XG4gICAgICAgICAgICAvLyBXZSBoYXZlIGFuIGFycmF5IG9mIHt2YWx1ZTogJycsIGxhYmVsczogJyd9XG4gICAgICAgICAgICBpZiAob3B0aW9uc1swXS52YWx1ZSB8fCBvcHRpb25zWzBdLmxhYmVsKSB7XG4gICAgICAgICAgICAgIG9wdGlvbnMgPSBjb2x1bW4uZmlsdGVyLm1hcCgob3B0KSA9PiBvcHQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVlcnlbY29sdW1uLm5hbWVdID0geyBhbnk6IG9wdGlvbnMgfTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbi50eXBlICYmIGNvbHVtbi50eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW4uZmlsdGVyLnN0YXJ0RGF0ZSAmJiBjb2x1bW4uZmlsdGVyLmVuZERhdGUpIHtcbiAgICAgICAgICAgICAgcXVlcnlbY29sdW1uLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgIG1pbjogZGF0ZUZucy5zdGFydE9mRGF5KGNvbHVtbi5maWx0ZXIuc3RhcnREYXRlKSxcbiAgICAgICAgICAgICAgICBtYXg6IGRhdGVGbnMuc3RhcnRPZkRheShkYXRlRm5zLmFkZERheXMoZGF0ZUZucy5zdGFydE9mRGF5KGNvbHVtbi5maWx0ZXIuZW5kRGF0ZSksIDEpKSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHF1ZXJ5W2NvbHVtbi5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBtaW46IGNvbHVtbi5maWx0ZXIubWluID8gZGF0ZUZucy5hZGREYXlzKGRhdGVGbnMuc3RhcnRPZlRvZGF5KCksIGNvbHVtbi5maWx0ZXIubWluKSA6IGRhdGVGbnMuc3RhcnRPZlRvZGF5KCksXG4gICAgICAgICAgICAgICAgbWF4OiBjb2x1bW4uZmlsdGVyLm1heCA/IGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZUb21vcnJvdygpLCBjb2x1bW4uZmlsdGVyLm1heCkgOiBkYXRlRm5zLnN0YXJ0T2ZUb21vcnJvdygpLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeVtjb2x1bW4ubmFtZV0gPSBjb2x1bW4uZmlsdGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoSGVscGVycy5pc0Z1bmN0aW9uKHRoaXMuY29uZmlnLmZpbHRlcmluZykpIHtcbiAgICAgICAgICB0aGlzLmNvbmZpZy5maWx0ZXJpbmcocXVlcnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2RhdGFQcm92aWRlci5maWx0ZXIgPSBxdWVyeTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLmZpbHRlciA9IHt9O1xuICAgICAgfVxuICAgICAgLy8gVHJpY2tsZSBkb3duIHRvIGtlZXAgc29ydFxuICAgICAgLy8gdGhpcy5vblNvcnRDaGFuZ2UodGhpcy5jdXJyZW50U29ydENvbHVtbik7XG4gICAgICB0aGlzLmZpcmVUYWJsZUNoYW5nZUV2ZW50KCk7XG5cbiAgICAgIC8vIElmIHBhZ2luZywgcmVzZXQgcGFnZVxuICAgICAgaWYgKHRoaXMuY29uZmlnLnBhZ2luZykge1xuICAgICAgICB0aGlzLmNvbmZpZy5wYWdpbmcuY3VycmVudCA9IDE7XG4gICAgICB9XG4gICAgICAvLyBSZW1vdmUgYWxsIHNlbGVjdGlvbiBvbiBzb3J0IGNoYW5nZSBpZiBzZWxlY3Rpb24gaXMgb25cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3dTZWxlY3Rpb25TdHlsZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICB0aGlzLnNlbGVjdEFsbChmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXNjYXBlQ2hhcmFjdGVycyhmaWx0ZXIpIHtcbiAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBmaWx0ZXIucmVwbGFjZSgvJy9nLCAnXFwnXFwnJyk7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXI7XG4gIH1cblxuICBpc0ZpbHRlckFjdGl2ZShjb2x1bW4sIGZpbHRlcik6IGJvb2xlYW4ge1xuICAgIC8vIFRPRE86IFRoaXMgbmVlZHMgdG8gYmUgcmVmYWN0b3JlZFxuICAgIGxldCBpc0FjdGl2ZSA9IGZhbHNlO1xuICAgIGlmIChjb2x1bW4gJiYgIUhlbHBlcnMuaXNCbGFuayhjb2x1bW4uZmlsdGVyKSAmJiAhSGVscGVycy5pc0JsYW5rKGZpbHRlcikpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbHVtbi5maWx0ZXIpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsdGVyICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlzQWN0aXZlID0gY29sdW1uLmZpbHRlci5zb21lKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5sYWJlbCA9PT0gZmlsdGVyLmxhYmVsO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlzQWN0aXZlID0gY29sdW1uLmZpbHRlci5pbmNsdWRlcyhmaWx0ZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIGNvbHVtbi5maWx0ZXIgPT09IHR5cGVvZiBmaWx0ZXIpIHtcbiAgICAgICAgICBpc0FjdGl2ZSA9IGNvbHVtbi5maWx0ZXIgPT09IGZpbHRlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc0FjdGl2ZSA9IGNvbHVtbi5maWx0ZXIgPT09IGZpbHRlci52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNBY3RpdmU7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgb25Tb3J0Q2hhbmdlXG4gICAqIEBwYXJhbSBuZXdTb3J0Q29sdW1uXG4gICAqL1xuICBvblNvcnRDaGFuZ2UoY29sdW1uKSB7XG4gICAgdGhpcy5jdXJyZW50U29ydENvbHVtbiA9IGNvbHVtbjtcbiAgICBsZXQgc29ydGVkQ29sdW1uczogYW55ID0gdGhpcy5jb2x1bW5zLmZpbHRlcigodGhpc0NvbHVtbikgPT4ge1xuICAgICAgcmV0dXJuIHRoaXNDb2x1bW4uc29ydCAmJiB0aGlzQ29sdW1uICE9PSB0aGlzLmN1cnJlbnRTb3J0Q29sdW1uO1xuICAgIH0pO1xuICAgIGZvciAobGV0IHNvcnRlZENvbHVtbiBvZiBzb3J0ZWRDb2x1bW5zKSB7XG4gICAgICBzb3J0ZWRDb2x1bW4uc29ydCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGNvbHVtbikge1xuICAgICAgaWYgKEhlbHBlcnMuaXNGdW5jdGlvbih0aGlzLmNvbmZpZy5zb3J0aW5nKSkge1xuICAgICAgICB0aGlzLmNvbmZpZy5zb3J0aW5nKCk7XG4gICAgICB9IGVsc2UgaWYgKEhlbHBlcnMuaXNGdW5jdGlvbihjb2x1bW4ucHJlU29ydCkpIHtcbiAgICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLnNvcnQgPSBbXS5jb25jYXQoY29sdW1uLnByZVNvcnQoY29sdW1uKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9kYXRhUHJvdmlkZXIuc29ydCA9IFt7IGZpZWxkOiBjb2x1bW4uY29tcGFyZSB8fCBjb2x1bW4ubmFtZSwgcmV2ZXJzZTogY29sdW1uLnNvcnQgPT09ICdkZXNjJyB9XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGaXJlIHRhYmxlIGNoYW5nZSBldmVudFxuICAgIC8vIHRoaXMuZmlyZVRhYmxlQ2hhbmdlRXZlbnQoKTtcblxuICAgIC8vIElmIHBhZ2luZywgcmVzZXQgcGFnZVxuICAgIGlmICh0aGlzLmNvbmZpZy5wYWdpbmcpIHtcbiAgICAgIHRoaXMuY29uZmlnLnBhZ2luZy5jdXJyZW50ID0gMTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWxsIHNlbGVjdGlvbiBvbiBzb3J0IGNoYW5nZSBpZiBzZWxlY3Rpb24gaXMgb25cbiAgICBpZiAodGhpcy5jb25maWcucm93U2VsZWN0aW9uU3R5bGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZmlyZVRhYmxlQ2hhbmdlRXZlbnRcbiAgICovXG4gIGZpcmVUYWJsZUNoYW5nZUV2ZW50KCkge1xuICAgIC8vIENvbnN0cnVjdCBhIHRhYmxlIGNoYW5nZSBvYmplY3RcbiAgICBjb25zdCBvblRhYmxlQ2hhbmdlOiBhbnkgPSB7fTtcbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sKSA9PiBjb2wuZmlsdGVyICYmIGNvbC5maWx0ZXIubGVuZ3RoKTtcbiAgICBvblRhYmxlQ2hhbmdlLmZpbHRlciA9IGZpbHRlcnMubGVuZ3RoID8gZmlsdGVycyA6IGZhbHNlO1xuICAgIG9uVGFibGVDaGFuZ2Uuc29ydCA9IHRoaXMuY3VycmVudFNvcnRDb2x1bW4gPyB0aGlzLmN1cnJlbnRTb3J0Q29sdW1uIDogZmFsc2U7XG4gICAgb25UYWJsZUNoYW5nZS5yb3dzID0gdGhpcy5yb3dzO1xuXG4gICAgLy8gRW1pdCBldmVudFxuICAgIHRoaXMub25UYWJsZUNoYW5nZS5lbWl0KG9uVGFibGVDaGFuZ2UpO1xuICB9XG5cbiAgZmluZENvbHVtbkluZGV4KHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLmNvbHVtbnNbaV0ubmFtZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uT3JkZXJDaGFuZ2VcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBvbk9yZGVyQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3Qgb2xkSW5kZXggPSB0aGlzLmZpbmRDb2x1bW5JbmRleChldmVudC5maXJzdC5uYW1lKTtcbiAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuZmluZENvbHVtbkluZGV4KGV2ZW50LnNlY29uZC5uYW1lKTtcbiAgICB0aGlzLmNvbHVtbnMuc3BsaWNlKG5ld0luZGV4LCAwLCB0aGlzLmNvbHVtbnMuc3BsaWNlKG9sZEluZGV4LCAxKVswXSk7XG4gICAgdGhpcy5vblNvcnRDaGFuZ2UodGhpcy5jdXJyZW50U29ydENvbHVtbik7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2VsZWN0UGFnZVxuICAgKi9cbiAgZXhwYW5kQWxsT25QYWdlKGV4cGFuZGVkKSB7XG4gICAgdGhpcy5jb25maWcuZXhwYW5kQWxsID0gIWV4cGFuZGVkO1xuICAgIGZvciAobGV0IHJvdyBvZiB0aGlzLmRhdGFQcm92aWRlci5saXN0KSB7XG4gICAgICByb3cuX2V4cGFuZGVkID0gdGhpcy5jb25maWcuZXhwYW5kQWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZWxlY3RQYWdlXG4gICAqL1xuICBzZWxlY3RQYWdlKGRhdGE/OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMubWFzdGVyKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbChmYWxzZSk7XG4gICAgICAvLyBPbmx5IHNob3cgdGhlIHNlbGVjdCBhbGwgbWVzc2FnZSB3aGVuIHRoZXJlIGlzIG9ubHkgb25lIG5ldyBwYWdlIHNlbGVjdGVkIGF0IGEgdGltZVxuICAgICAgdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCA9IHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgPiAwID8gdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCAtIDEgOiAwO1xuICAgICAgdGhpcy5zaG93U2VsZWN0QWxsTWVzc2FnZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgIC8vIHRoaXMucGFnZWREYXRhID0gdGhpcy5yb3dzLnNsaWNlKHRoaXMuZ2V0UGFnZVN0YXJ0KCksIHRoaXMuZ2V0UGFnZUVuZCgpKTtcbiAgICAgIGZvciAobGV0IHJvdyBvZiB0aGlzLnBhZ2VkRGF0YSkge1xuICAgICAgICByb3cuX3NlbGVjdGVkID0gdGhpcy5tYXN0ZXI7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5kYXRhUHJvdmlkZXIubGlzdC5maWx0ZXIoKHIpID0+IHIuX3NlbGVjdGVkKTtcbiAgICAgIHRoaXMucGFnZVNlbGVjdGVkID0gdGhpcy5wYWdlZERhdGEuZmlsdGVyKChyKSA9PiByLl9zZWxlY3RlZCk7XG4gICAgICB0aGlzLmVtaXRTZWxlY3RlZCh0aGlzLnNlbGVjdGVkKTtcbiAgICAgIC8vIE9ubHkgc2hvdyB0aGUgc2VsZWN0IGFsbCBtZXNzYWdlIHdoZW4gdGhlcmUgaXMgb25seSBvbmUgbmV3IHBhZ2Ugc2VsZWN0ZWQgYXQgYSB0aW1lXG4gICAgICB0aGlzLnNlbGVjdGVkUGFnZUNvdW50Kys7XG4gICAgICB0aGlzLnNob3dTZWxlY3RBbGxNZXNzYWdlID0gdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCA9PT0gMSAmJiB0aGlzLnNlbGVjdGVkLmxlbmd0aCAhPT0gdGhpcy5kYXRhUHJvdmlkZXIudG90YWw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNlbGVjdEFsbFxuICAgKi9cbiAgc2VsZWN0QWxsKHZhbHVlKSB7XG4gICAgdGhpcy5tYXN0ZXIgPSB2YWx1ZTtcbiAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICBmb3IgKGxldCByb3cgb2YgdGhpcy5kYXRhUHJvdmlkZXIubGlzdCkge1xuICAgICAgcm93Ll9zZWxlY3RlZCA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWUgPyB0aGlzLmRhdGFQcm92aWRlci5saXN0IDogW107XG4gICAgdGhpcy5zaG93U2VsZWN0QWxsTWVzc2FnZSA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgPSB0aGlzLnNlbGVjdGVkUGFnZUNvdW50ID4gMCA/IHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgLSAxIDogMDtcbiAgICB0aGlzLnJvd1NlbGVjdEhhbmRsZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSByb3dTZWxlY3RIYW5kbGVyXG4gICAqL1xuICByb3dTZWxlY3RIYW5kbGVyKGRhdGE/OiBhbnkpIHtcbiAgICAvLyB0aGlzLnBhZ2VkRGF0YSA9IHRoaXMucm93cy5zbGljZSh0aGlzLmdldFBhZ2VTdGFydCgpLCB0aGlzLmdldFBhZ2VFbmQoKSk7XG4gICAgdGhpcy5wYWdlU2VsZWN0ZWQgPSB0aGlzLnBhZ2VkRGF0YS5maWx0ZXIoKHIpID0+IHIuX3NlbGVjdGVkKTtcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5kYXRhUHJvdmlkZXIubGlzdC5maWx0ZXIoKHIpID0+IHIuX3NlbGVjdGVkKTtcbiAgICBpZiAodGhpcy5wYWdlU2VsZWN0ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLm1hc3RlciA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBhZ2VTZWxlY3RlZC5sZW5ndGggPT09IHRoaXMucGFnZWREYXRhLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXN0ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFzdGVyID0gZmFsc2U7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuXG4gICAgICAvLyBCcmVha2luZyB0aGUgc2VsZWN0ZWQgcGFnZSBjb3VudFxuICAgICAgdGhpcy5zaG93U2VsZWN0QWxsTWVzc2FnZSA9IGZhbHNlO1xuICAgICAgdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCA9IHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgPiAwID8gdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCAtIDEgOiAwO1xuICAgIH1cbiAgICB0aGlzLmVtaXRTZWxlY3RlZCh0aGlzLnNlbGVjdGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBlbWl0U2VsZWN0ZWRcbiAgICogQHBhcmFtIHNlbGVjdGVkXG4gICAqL1xuICBlbWl0U2VsZWN0ZWQoc2VsZWN0ZWQpIHtcbiAgICB0aGlzLm9uUm93U2VsZWN0LmVtaXQoeyBsZW5ndGg6IHNlbGVjdGVkLmxlbmd0aCwgc2VsZWN0ZWQ6IHNlbGVjdGVkIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHJvd0NsaWNrSGFuZGxlclxuICAgKiBAcGFyYW0gcm93XG4gICAqL1xuICByb3dDbGlja0hhbmRsZXIocm93KSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnJvd1NlbGVjdCkge1xuICAgICAgdGhpcy5hY3RpdmVJZCA9IHJvdy5pZCB8fCAwO1xuICAgICAgdGhpcy5vblJvd0NsaWNrLmVtaXQocm93KTtcbiAgICB9XG4gIH1cblxuICBnZXREZWZhdWx0T3B0aW9ucyhjb2x1bW4pIHtcbiAgICAvLyBUT0RPIC0gbmVlZHMgdG8gY29tZSBmcm9tIGxhYmVsIHNlcnZpY2UgLSBodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy9pc3N1ZXMvMTE2XG4gICAgbGV0IG9wdHM6IGFueVtdID0gW1xuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDFEYXksIG1pbjogLTEsIG1heDogMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDdEYXlzLCBtaW46IC03LCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QzMERheXMsIG1pbjogLTMwLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3Q5MERheXMsIG1pbjogLTkwLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QxWWVhciwgbWluOiAtMzY2LCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQxRGF5LCBtaW46IDAsIG1heDogMSB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDdEYXlzLCBtaW46IDAsIG1heDogNyB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDMwRGF5cywgbWluOiAwLCBtYXg6IDMwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0OTBEYXlzLCBtaW46IDAsIG1heDogOTAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQxWWVhciwgbWluOiAwLCBtYXg6IDM2NiB9LFxuICAgIF07XG5cbiAgICBpZiAoY29sdW1uICYmIGNvbHVtbi5yYW5nZSkge1xuICAgICAgb3B0cy5wdXNoKHtcbiAgICAgICAgbGFiZWw6IHRoaXMubGFiZWxzLmN1c3RvbURhdGVSYW5nZSxcbiAgICAgICAgcmFuZ2U6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdHM7XG4gIH1cblxuICBvbkNhbGVuZGVyU2VsZWN0KGNvbHVtbiwgZXZlbnQpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChldmVudC5zdGFydERhdGUgJiYgZXZlbnQuZW5kRGF0ZSkge1xuICAgICAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlKCk7XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25GaWx0ZXJLZXl3b3Jkcyhjb25maWcpIHtcbiAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5maWx0ZXJpbmcgJiYgY29uZmlnLmZpbHRlcmluZy5mcmVldGV4dEZpbHRlcikge1xuICAgICAgbGV0IGZpbHRlcktleXdvcmRzID0gY29uZmlnLmZpbHRlcmluZy5mcmVldGV4dEZpbHRlci50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKCFjb25maWcuZmlsdGVyaW5nLm9yaWdpbmFsT3B0aW9ucykge1xuICAgICAgICBjb25maWcuZmlsdGVyaW5nLm9yaWdpbmFsT3B0aW9ucyA9IGNvbmZpZy5maWx0ZXJpbmcub3B0aW9ucztcbiAgICAgIH1cbiAgICAgIGxldCBuZXdPcHRpb25zID0gY29uZmlnLmZpbHRlcmluZy5vcmlnaW5hbE9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gb3B0aW9uICYmIG9wdGlvbi5sYWJlbCA/IG9wdGlvbi5sYWJlbCA6IG9wdGlvbjtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpID8gdmFsdWUudG9Mb3dlckNhc2UoKSA6IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgPT09IGZpbHRlcktleXdvcmRzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAofnZhbHVlLmluZGV4T2YoZmlsdGVyS2V5d29yZHMpIHx8IH52YWx1ZS5pbmRleE9mKGZpbHRlcktleXdvcmRzKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgY29uZmlnLmZpbHRlcmluZy5vcHRpb25zID0gbmV3T3B0aW9ucztcbiAgICAgIGNvbmZpZy5maWx0ZXJpbmcuZmlsdGVyID0gY29uZmlnLmZpbHRlcmluZy5mcmVldGV4dEZpbHRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLmZpbHRlcmluZy5vcHRpb25zID0gY29uZmlnLmZpbHRlcmluZy5vcmlnaW5hbE9wdGlvbnM7XG4gICAgfVxuICAgIHRoaXMub25GaWx0ZXJDaGFuZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZXRUYWJsZUVkaXRcbiAgICogQGRlc2NyaXB0aW9uIFNldHMgdGhlIFRhYmxlIGludG8gRURJVCBtb2RlLCBiYXNlZCBvbiB0aGUgcm93L2NvbHVtbiBwYXNzZWQgeW91IGNhbiBlbnRlciBpbiBhIGZldyBzdGF0ZXNcbiAgICogKDEpIHNldFRhYmxlRWRpdCgpIC0gZG9uJ3QgcGFzcyBhbnkgdG8gcHV0IHRoZSBGVUxMIHRhYmxlIGludG8gZWRpdCBtb2RlXG4gICAqICgyKSBzZXRUYWJsZUVkaXQoMSkgLSBwYXNzIG9ubHkgcm93IHRvIHB1dCB0aGF0IEZVTEwgcm93IG9mIHRoZSB0YWJsZSBpbnRvIGVkaXQgbW9kZVxuICAgKiAoMykgc2V0VGFibGVFZGl0KDEsIDEpIC0gcGFzcyByb3cgYW5kIGNvbHVtbiB0byBwdXQgdGhhdCBjb2x1bW4gb2YgdGhlIHJvdyBvZiB0aGUgdGFibGUgaW50byBlZGl0IG1vZGVcbiAgICogQHBhcmFtIFtyb3dOdW1iZXJdXG4gICAqIEBwYXJhbSBbY29sdW1uTnVtYmVyXVxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgc2V0VGFibGVFZGl0KHJvd051bWJlcj86IG51bWJlciwgY29sdW1uTnVtYmVyPzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5tb2RlID0gTm92b1RhYmxlTW9kZS5FRElUO1xuICAgIHRoaXMuX2RhdGFQcm92aWRlci5lZGl0KCk7XG4gICAgdGhpcy5fcm93cy5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICByb3cuX2VkaXRpbmcgPSByb3cuX2VkaXRpbmcgfHwge307XG4gICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uLCBjb2x1bW5JbmRleCkgPT4ge1xuICAgICAgICBpZiAoY29sdW1uLnZpZXdPbmx5KSB7XG4gICAgICAgICAgcm93Ll9lZGl0aW5nW2NvbHVtbi5uYW1lXSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKEhlbHBlcnMuaXNFbXB0eShyb3dOdW1iZXIpICYmIEhlbHBlcnMuaXNFbXB0eShjb2x1bW5OdW1iZXIpKSB7XG4gICAgICAgICAgcm93Ll9lZGl0aW5nW2NvbHVtbi5uYW1lXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoIUhlbHBlcnMuaXNFbXB0eShyb3dOdW1iZXIpICYmIHJvd0luZGV4ID09PSBOdW1iZXIocm93TnVtYmVyKSAmJiBIZWxwZXJzLmlzRW1wdHkoY29sdW1uTnVtYmVyKSkge1xuICAgICAgICAgIHJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV0gPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkocm93TnVtYmVyKSAmJlxuICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29sdW1uTnVtYmVyKSAmJlxuICAgICAgICAgIHJvd0luZGV4ID09PSBOdW1iZXIocm93TnVtYmVyKSAmJlxuICAgICAgICAgIGNvbHVtbkluZGV4ID09PSBOdW1iZXIoY29sdW1uTnVtYmVyKVxuICAgICAgICApIHtcbiAgICAgICAgICByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGxlYXZlRWRpdE1vZGVcbiAgICogQGRlc2NyaXB0aW9uIExlYXZlcyBlZGl0IG1vZGUgZm9yIHRoZSBUYWJsZSBhbmQgcHV0cyBldmVyeXRoaW5nIGJhY2sgdG8gVklFVyBvbmx5XG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqIEBwYXJhbSBjYW5jZWwgLSB3aGV0aGVyIG9yIG5vdCB0byBzYXZlIGRhdGEgb3IgdW5kb1xuICAgKi9cbiAgcHJpdmF0ZSBsZWF2ZUVkaXRNb2RlKGNhbmNlbDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubW9kZSA9IE5vdm9UYWJsZU1vZGUuVklFVztcbiAgICB0aGlzLl9yb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93Ll9lZGl0aW5nID0gcm93Ll9lZGl0aW5nIHx8IHt9O1xuICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAoY2FuY2VsKSB7XG4gICAgICB0aGlzLl9kYXRhUHJvdmlkZXIudW5kbygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhUHJvdmlkZXIuY29tbWl0KCk7XG4gICAgfVxuICAgIHRoaXMuaGlkZVRvYXN0TWVzc2FnZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGFkZEVkaXRhYmxlUm93XG4gICAqIEBkZXNjcmlwdGlvbiBBZGRzIGEgbmV3IHJvdyBpbnRvIHRoZSB0YWJsZSB0byBiZSBlZGl0ZWQsIGNhbiBiZSBjYWxsZWQgZnJvbSBhIGxvY2FsIHJlZmVyZW5jZSBvZiB0aGUgdGFibGUgaW4geW91ciB0ZW1wbGF0ZVxuICAgKiBAcGFyYW0gZGVmYXVsdFZhbHVlXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICBhZGRFZGl0YWJsZVJvdyhkZWZhdWx0VmFsdWU6IGFueSA9IHt9KTogdm9pZCB7XG4gICAgbGV0IHRhYmxlRm9ybVJvd3MgPSA8Rm9ybUFycmF5PnRoaXMudGFibGVGb3JtLmNvbnRyb2xzWydyb3dzJ107XG4gICAgbGV0IHJvdzogYW55ID0ge307XG4gICAgbGV0IHJvd0NvbnRyb2xzID0gW107XG4gICAgcm93LmNvbnRyb2xzID0ge307XG4gICAgcm93Ll9lZGl0aW5nID0ge307XG4gICAgcm93LnJvd0lkID0gdGhpcy5fcm93cy5sZW5ndGggKyAxO1xuICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgIC8vIFVzZSB0aGUgY29udHJvbCBwYXNzZWQgb3IgdXNlIGEgUmVhZE9ubHlDb250cm9sIHNvIHRoYXQgdGhlIGZvcm0gaGFzIHRoZSB2YWx1ZXNcbiAgICAgIGxldCBjb250cm9sID0gY29sdW1uLmVkaXRvckNvbmZpZ1xuICAgICAgICA/IENvbnRyb2xGYWN0b3J5LmNyZWF0ZShjb2x1bW4uZWRpdG9yVHlwZSwgY29sdW1uLmVkaXRvckNvbmZpZylcbiAgICAgICAgOiBuZXcgUmVhZE9ubHlDb250cm9sKHsga2V5OiBjb2x1bW4ubmFtZSB9KTtcbiAgICAgIGNvbnRyb2wudmFsdWUgPSBudWxsOyAvLyByZW1vdmUgY29waWVkIGNvbHVtbiB2YWx1ZVxuICAgICAgcm93LmNvbnRyb2xzW2NvbHVtbi5uYW1lXSA9IGNvbnRyb2w7XG4gICAgICByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdID0gIWNvbHVtbi52aWV3T25seTtcbiAgICAgIHJvd0NvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gICAgfSk7XG4gICAgdGhpcy5mb3JtVXRpbHMuc2V0SW5pdGlhbFZhbHVlcyhyb3dDb250cm9scywgZGVmYXVsdFZhbHVlLCBmYWxzZSk7XG4gICAgdGFibGVGb3JtUm93cy5wdXNoKHRoaXMuZm9ybVV0aWxzLnRvRm9ybUdyb3VwKHJvd0NvbnRyb2xzKSk7XG4gICAgdGhpcy5fcm93cy5wdXNoKHJvdyk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgdmFsaWRhdGVBbmRHZXRVcGRhdGVkRGF0YVxuICAgKiBAZGVzY3JpcHRpb24gVmFsaWRhdGVzIHRoZSBGb3JtIGluc2lkZSBvZiB0aGUgVGFibGUsIGlmIHRoZXJlIGFyZSBlcnJvcnMgaXQgd2lsbCBkaXNwbGF5L3JldHVybiB0aGUgZXJyb3JzIGZvciBlYWNoIHJvdy5cbiAgICogSWYgdGhlcmUgYXJlIG5vIGVycm9ycywgdGhlbiBpdCB3aWxsIHJldHVybiBPTkxZIHRoZSBjaGFuZ2VkIGRhdGEgZm9yIGVhY2ggcm93LCB0aGUgZGF0YSByZXR1cm5lZCB3aWxsIGJlIGluIHRoZSBmb3JtOlxuICAgKiB7IGlkOiBJRF9PRl9SRUNPUkQsIGtleTogdmFsdWUgfSAtLSBkYXRhIHRoYXQgd2FzIHVwZGF0ZWRcbiAgICogeyBpZDogdW5kZWZpbmVkLCBrZXk6IHZhbHVlIH0gLS0gZGF0YSB0aGF0IHdhcyBhZGRlZFxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgdmFsaWRhdGVBbmRHZXRVcGRhdGVkRGF0YSgpOiB7IGNoYW5nZWQ/OiBhbnlbXTsgZXJyb3JzPzogeyBlcnJvcnM6IGFueTsgcm93OiBhbnk7IGluZGV4OiBudW1iZXIgfVtdIH0ge1xuICAgIGlmICh0aGlzLnRhYmxlRm9ybSAmJiB0aGlzLnRhYmxlRm9ybS5jb250cm9scyAmJiB0aGlzLnRhYmxlRm9ybS5jb250cm9sc1sncm93cyddKSB7XG4gICAgICBsZXQgY2hhbmdlZFJvd3MgPSBbXTtcbiAgICAgIGxldCBlcnJvcnMgPSBbXTtcbiAgICAgIC8vIEdvIG92ZXIgdGhlIEZvcm1BcnJheSdzIGNvbnRyb2xzXG4gICAgICAodGhpcy50YWJsZUZvcm0uY29udHJvbHNbJ3Jvd3MnXSBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzLmZvckVhY2goKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGxldCBjaGFuZ2VkUm93ID0gbnVsbDtcbiAgICAgICAgbGV0IGVycm9yID0gbnVsbDtcbiAgICAgICAgLy8gR28gb3ZlciB0aGUgZm9ybSBncm91cCBjb250cm9sc1xuICAgICAgICBPYmplY3Qua2V5cyhmb3JtR3JvdXAuY29udHJvbHMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgbGV0IGNvbnRyb2wgPSBmb3JtR3JvdXAuY29udHJvbHNba2V5XTtcbiAgICAgICAgICAvLyBIYW5kbGUgdmFsdWUgY2hhbmdpbmdcbiAgICAgICAgICBpZiAoY29udHJvbCAmJiBjb250cm9sLmRpcnR5ICYmICFjb250cm9sLmVycm9ycykge1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2VkUm93KSB7XG4gICAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgSUQsIHNvIHdlIGhhdmUgc29tZSBrZXkgdG8gc2F2ZSBhZ2FpbnN0XG4gICAgICAgICAgICAgIGNoYW5nZWRSb3cgPSB7fTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd3NbaW5kZXhdLmlkKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZFJvdy5pZCA9IHRoaXMuX3Jvd3NbaW5kZXhdLmlkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBkaXJ0eSwgZ3JhYiB2YWx1ZSBvZmYgdGhlIGZvcm1cbiAgICAgICAgICAgIGNoYW5nZWRSb3dba2V5XSA9IHRoaXMudGFibGVGb3JtLnZhbHVlWydyb3dzJ11baW5kZXhdW2tleV07XG4gICAgICAgICAgICAvLyBTZXQgdmFsdWUgYmFjayB0byByb3cgKHNob3VsZCBiZSBhbHJlYWR5IGRvbmUgdmlhIHRoZSBzZXJ2ZXIgY2FsbCwgYnV0IGRvIGl0IGFueXdheSlcbiAgICAgICAgICAgIHRoaXMuX3Jvd3NbaW5kZXhdW2tleV0gPSBjaGFuZ2VkUm93W2tleV07XG4gICAgICAgICAgfSBlbHNlIGlmIChjb250cm9sICYmIGNvbnRyb2wuZXJyb3JzKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JzXG4gICAgICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICAgIGVycm9yID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvcltrZXldID0gY29udHJvbC5lcnJvcnM7XG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY2hhbmdlZFJvdykge1xuICAgICAgICAgIGNoYW5nZWRSb3dzLnB1c2goY2hhbmdlZFJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goeyBlcnJvcnM6IGVycm9yLCByb3c6IHRoaXMuX3Jvd3NbaW5kZXhdLCBpbmRleDogaW5kZXggfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbGV0IHJldCA9IHt9O1xuICAgICAgLy8gUmV0dXJuIGVycm9ycyBpZiBhbnksIG90aGVyd2lzZSByZXR1cm4gdGhlIGNoYW5nZWQgcm93c1xuICAgICAgaWYgKGVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgY2hhbmdlZDogY2hhbmdlZFJvd3MgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGVycm9yczogZXJyb3JzIH07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGNhbmNlbEVkaXRpbmdcbiAgICogQGRlc2NyaXB0aW9uIFJlZnJlc2ggdGhlIGRhdGEgcHJvdmlkZXIgYW5kIGxlYXZlIGVkaXQgbW9kZVxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgY2FuY2VsRWRpdGluZygpOiB2b2lkIHtcbiAgICB0aGlzLmxlYXZlRWRpdE1vZGUodHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2F2ZUNoYW5nZXNcbiAgICogQGRlc2NyaXB0aW9uIFJlZnJlc2ggdGhlIGRhdGEgcHJvdmlkZXIgYW5kIGxlYXZlIGVkaXQgbW9kZVxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgc2F2ZUNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5sZWF2ZUVkaXRNb2RlKGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXNwbGF5VG9hc3RNZXNzYWdlXG4gICAqIEBkZXNjcmlwdGlvbiBEaXNwbGF5cyBhIHRvYXN0IG1lc3NhZ2UgaW5zaWRlIG9mIHRoZSB0YWJsZVxuICAgKiBAcGFyYW0gdG9hc3RcbiAgICogQHBhcmFtIGhpZGVEZWxheVxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgZGlzcGxheVRvYXN0TWVzc2FnZSh0b2FzdDogeyBpY29uOiBzdHJpbmc7IHRoZW1lOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9LCBoaWRlRGVsYXk/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnRvYXN0ID0gdG9hc3Q7XG4gICAgaWYgKGhpZGVEZWxheSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmhpZGVUb2FzdE1lc3NhZ2UoKSwgaGlkZURlbGF5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaGlkZVRvYXN0TWVzc2FnZVxuICAgKiBAZGVzY3JpcHRpb24gRm9yY2UgaGlkZSB0aGUgdG9hc3QgbWVzc2FnZVxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgaGlkZVRvYXN0TWVzc2FnZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRvYXN0ID0gbnVsbDtcbiAgICAvLyBIYWNrIHRvIG1ha2UgdGhlIHRhYmxlIGRpc3BsYXkgcHJvcGVybHkgYWZ0ZXIgaGlkaW5nIHRoZSB0b2FzdFxuICAgIHRoaXMuZ3Jvc3NGbGFnVG9Bdm9pZFRoZVRhYmxlRnJvbUJlaW5nVWdseVdoZW5IaWRpbmdUaGVUb2FzdCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmdyb3NzRmxhZ1RvQXZvaWRUaGVUYWJsZUZyb21CZWluZ1VnbHlXaGVuSGlkaW5nVGhlVG9hc3QgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSB0b2dnbGVMb2FkaW5nXG4gICAqIEBkZXNjcmlwdGlvbiBkaXNwbGF5IHRoZSBsb2FkaW5nIG92ZXJsYXkgb24gdGhlIHRhYmxlXG4gICAqIEBwYXJhbSBzaG93XG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICB0b2dnbGVMb2FkaW5nKHNob3c6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBzaG93O1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzQ29sdW1uSGlkZGVuXG4gICAqIEBkZXNjcmlwdGlvbiBoaWRlIGEgY29sdW1uIGluIGVkaXQgb3IgdmlldyBtb2RlXG4gICAqIEBwYXJhbSAgY29sdW1uXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICBpc0NvbHVtbkhpZGRlbihjb2x1bW46IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVkaXRpbmcgPyAhIWNvbHVtbi5oaWRlQ29sdW1uT25FZGl0IDogISFjb2x1bW4uaGlkZUNvbHVtbk9uVmlldztcbiAgfVxufVxuIl19