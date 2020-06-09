/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/Table.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// Vendor
import * as dateFns from 'date-fns';
import { debounceTime } from 'rxjs/operators';
// APP
import { CollectionEvent } from '../../services/data-provider/CollectionEvent';
import { PagedArrayCollection } from '../../services/data-provider/PagedArrayCollection';
import { NovoLabelService } from '../../services/novo-label-service';
import { FormUtils } from '../../utils/form-utils/FormUtils';
import { Helpers } from '../../utils/Helpers';
import { notify } from '../../utils/notifier/notifier.util';
import { ControlFactory, ReadOnlyControl } from './../form/FormControls';
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
            this._dataProvider.dataChange.pipe(debounceTime(100)).subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
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
                            _this.pageSelected = _this.pagedData.filter((/**
                             * @param {?} r
                             * @return {?}
                             */
                            function (r) { return r._selected; }));
                            _this.rowSelectHandler();
                        }
                        // Find that columns we might need to sum up via the footer
                        /** @type {?} */
                        var columnsToSum_1 = [];
                        /** @type {?} */
                        var columnSums_1 = {};
                        if (_this.config.footers) {
                            _this.config.footers.forEach((/**
                             * @param {?} config
                             * @return {?}
                             */
                            function (config) {
                                columnsToSum_1.push.apply(columnsToSum_1, tslib_1.__spread(config.columns));
                            }));
                            // Only have unique columns, filter out duplicates
                            columnsToSum_1 = columnsToSum_1.filter((/**
                             * @param {?} item
                             * @param {?} index
                             * @param {?} array
                             * @return {?}
                             */
                            function (item, index, array) { return array.indexOf(item) === index; }));
                        }
                        // Make a form for each row
                        /** @type {?} */
                        var tableFormRows_1 = (/** @type {?} */ (_this.tableForm.controls['rows']));
                        _this._rows.forEach((/**
                         * @param {?} row
                         * @param {?} index
                         * @return {?}
                         */
                        function (row, index) {
                            /** @type {?} */
                            var rowControls = [];
                            row.controls = {};
                            row._editing = {};
                            row._expanded = _this.config.expandAll;
                            row.rowId = _this._rows.length;
                            _this.columns.forEach((/**
                             * @param {?} column
                             * @return {?}
                             */
                            function (column) {
                                // Use the control passed or use a ReadOnlyControl so that the form has the values
                                /** @type {?} */
                                var control = column.editorConfig
                                    ? ControlFactory.create(column.editorType, column.editorConfig)
                                    : new ReadOnlyControl({ key: column.name });
                                row.controls[column.name] = control;
                                rowControls.push(control);
                            }));
                            _this.formUtils.setInitialValues(rowControls, row, false);
                            tableFormRows_1.push(_this.formUtils.toFormGroup(rowControls));
                            // Setup the total footer if configured
                            // Array of keys to total
                            if (columnsToSum_1.length !== 0) {
                                columnsToSum_1.forEach((/**
                                 * @param {?} column
                                 * @return {?}
                                 */
                                function (column) {
                                    if (Helpers.isBlank(columnSums_1[column])) {
                                        columnSums_1[column] = 0;
                                    }
                                    columnSums_1[column] += row[column];
                                }));
                            }
                        }));
                        if (_this.mode === NovoTableMode.EDIT) {
                            _this.setTableEdit();
                        }
                        // Setup the footers (if any)
                        if (_this.config.footers) {
                            _this.footers = [];
                            _this.config.footers.forEach((/**
                             * @param {?} footerConfig
                             * @param {?} footerConfigIndex
                             * @return {?}
                             */
                            function (footerConfig, footerConfigIndex) {
                                /** @type {?} */
                                var footer = {};
                                footer[footerConfig.labelColumn] = footerConfig.label;
                                footerConfig.columns.forEach((/**
                                 * @param {?} column
                                 * @return {?}
                                 */
                                function (column) {
                                    if (footerConfig.method === 'AVG' && _this._rows.length !== 0) {
                                        footer[column] = columnSums_1[column] / _this._rows.length;
                                    }
                                    else {
                                        footer[column] = columnSums_1[column];
                                    }
                                }));
                                _this.footers.push(footer);
                            }));
                        }
                        break;
                    default:
                        break;
                }
            }));
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
            this.filterInputs.forEach((/**
             * @param {?} filterInput
             * @return {?}
             */
            function (filterInput) {
                if (filterInput.nativeElement) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () { return filterInput.nativeElement.focus(); }), 0);
                }
            }));
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
     * @return {?}
     */
    NovoTableElement.prototype.setupColumnDefaults = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Check columns for cell option types
        this.columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
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
        }));
    };
    /**
     * @return {?}
     */
    NovoTableElement.prototype.ngDoCheck = /**
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
     * @return {?}
     */
    NovoTableElement.prototype.getPageStart = /**
     * @return {?}
     */
    function () {
        return this.config.paging ? (this.dataProvider.page - 1) * this.dataProvider.pageSize : 0;
    };
    /**
     * @return {?}
     */
    NovoTableElement.prototype.getPageEnd = /**
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
     * @param {?} column
     * @param {?} filter
     * @return {?}
     */
    NovoTableElement.prototype.onFilterClick = /**
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
     * @param {?} column
     * @return {?}
     */
    NovoTableElement.prototype.onFilterClear = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            column.filter = null;
            column.freetextFilter = null;
            _this.onFilterChange();
            if (column.originalOptions) {
                column.options = column.originalOptions;
            }
        }));
    };
    /**
     * @return {?}
     */
    NovoTableElement.prototype.clearAllSortAndFilters = /**
     * @return {?}
     */
    function () {
        if (this.config.filtering) {
            this.columns.forEach((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
                column.filter = null;
                column.sort = null;
            }));
        }
    };
    /**
     * @description This method updates the row data to reflect the active filters.
     */
    /**
     * \@description This method updates the row data to reflect the active filters.
     * @param {?=} event
     * @return {?}
     */
    NovoTableElement.prototype.onFilterChange = /**
     * \@description This method updates the row data to reflect the active filters.
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        var e_1, _a;
        if (this.config.filtering) {
            // Array of filters
            /** @type {?} */
            var filters = this.columns.filter((/**
             * @param {?} col
             * @return {?}
             */
            function (col) { return !Helpers.isEmpty(col.filter); }));
            if (filters.length) {
                /** @type {?} */
                var query = {};
                var _loop_1 = function (column) {
                    if (Helpers.isFunction(column.match)) {
                        query[column.name] = (/**
                         * @param {?} value
                         * @param {?} record
                         * @return {?}
                         */
                        function (value, record) {
                            return column.match(record, column.filter);
                        });
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
                            options = column.filter.map((/**
                             * @param {?} opt
                             * @return {?}
                             */
                            function (opt) { return opt.value; }));
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
                    isActive = column.filter.some((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        return item.label === filter.label;
                    }));
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
     * @param {?} column
     * @return {?}
     */
    NovoTableElement.prototype.onSortChange = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        var e_2, _a;
        var _this = this;
        this.currentSortColumn = column;
        /** @type {?} */
        var sortedColumns = this.columns.filter((/**
         * @param {?} thisColumn
         * @return {?}
         */
        function (thisColumn) {
            return thisColumn.sort && thisColumn !== _this.currentSortColumn;
        }));
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
     * @return {?}
     */
    NovoTableElement.prototype.fireTableChangeEvent = /**
     * @return {?}
     */
    function () {
        // Construct a table change object
        /** @type {?} */
        var onTableChange = {};
        /** @type {?} */
        var filters = this.columns.filter((/**
         * @param {?} col
         * @return {?}
         */
        function (col) { return col.filter && col.filter.length; }));
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
     * @param {?} event
     * @return {?}
     */
    NovoTableElement.prototype.onOrderChange = /**
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
     * @param {?} expanded
     * @return {?}
     */
    NovoTableElement.prototype.expandAllOnPage = /**
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
     * @param {?=} data
     * @return {?}
     */
    NovoTableElement.prototype.selectPage = /**
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
            this.selected = this.dataProvider.list.filter((/**
             * @param {?} r
             * @return {?}
             */
            function (r) { return r._selected; }));
            this.pageSelected = this.pagedData.filter((/**
             * @param {?} r
             * @return {?}
             */
            function (r) { return r._selected; }));
            this.emitSelected(this.selected);
            // Only show the select all message when there is only one new page selected at a time
            this.selectedPageCount++;
            this.showSelectAllMessage = this.selectedPageCount === 1 && this.selected.length !== this.dataProvider.total;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoTableElement.prototype.selectAll = /**
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
     * @param {?=} data
     * @return {?}
     */
    NovoTableElement.prototype.rowSelectHandler = /**
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        // this.pagedData = this.rows.slice(this.getPageStart(), this.getPageEnd());
        this.pageSelected = this.pagedData.filter((/**
         * @param {?} r
         * @return {?}
         */
        function (r) { return r._selected; }));
        this.selected = this.dataProvider.list.filter((/**
         * @param {?} r
         * @return {?}
         */
        function (r) { return r._selected; }));
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
     * @param {?} selected
     * @return {?}
     */
    NovoTableElement.prototype.emitSelected = /**
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        this.onRowSelect.emit({ length: selected.length, selected: selected });
    };
    /**
     * @param {?} row
     * @return {?}
     */
    NovoTableElement.prototype.rowClickHandler = /**
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
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (event.startDate && event.endDate) {
                _this.onFilterChange();
            }
        }), 10);
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
            var newOptions = config.filtering.originalOptions.filter((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
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
            }));
            config.filtering.options = newOptions;
            config.filtering.filter = config.filtering.freetextFilter;
        }
        else {
            config.filtering.options = config.filtering.originalOptions;
        }
        this.onFilterChange();
    };
    /**
     * @description Sets the Table into EDIT mode, based on the row/column passed you can enter in a few states
     * (1) setTableEdit() - don't pass any to put the FULL table into edit mode
     * (2) setTableEdit(1) - pass only row to put that FULL row of the table into edit mode
     * (3) setTableEdit(1, 1) - pass row and column to put that column of the row of the table into edit mode
     * @memberOf NovoTableElement
     */
    /**
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
        this._rows.forEach((/**
         * @param {?} row
         * @param {?} rowIndex
         * @return {?}
         */
        function (row, rowIndex) {
            row._editing = row._editing || {};
            _this.columns.forEach((/**
             * @param {?} column
             * @param {?} columnIndex
             * @return {?}
             */
            function (column, columnIndex) {
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
            }));
        }));
    };
    /**
     * @description Leaves edit mode for the Table and puts everything back to VIEW only
     * @memberOf NovoTableElement
     * @param cancel - whether or not to save data or undo
     */
    /**
     * \@description Leaves edit mode for the Table and puts everything back to VIEW only
     * \@memberOf NovoTableElement
     * @private
     * @param {?} cancel - whether or not to save data or undo
     * @return {?}
     */
    NovoTableElement.prototype.leaveEditMode = /**
     * \@description Leaves edit mode for the Table and puts everything back to VIEW only
     * \@memberOf NovoTableElement
     * @private
     * @param {?} cancel - whether or not to save data or undo
     * @return {?}
     */
    function (cancel) {
        var _this = this;
        this.mode = NovoTableMode.VIEW;
        this._rows.forEach((/**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            row._editing = row._editing || {};
            _this.columns.forEach((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
                row._editing[column.name] = false;
            }));
        }));
        if (cancel) {
            this._dataProvider.undo();
        }
        else {
            this._dataProvider.commit();
        }
        this.hideToastMessage();
    };
    /**
     * @description Adds a new row into the table to be edited, can be called from a local reference of the table in your template
     * @memberOf NovoTableElement
     */
    /**
     * \@description Adds a new row into the table to be edited, can be called from a local reference of the table in your template
     * \@memberOf NovoTableElement
     * @param {?=} defaultValue
     * @return {?}
     */
    NovoTableElement.prototype.addEditableRow = /**
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
        this.columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            // Use the control passed or use a ReadOnlyControl so that the form has the values
            /** @type {?} */
            var control = column.editorConfig
                ? ControlFactory.create(column.editorType, column.editorConfig)
                : new ReadOnlyControl({ key: column.name });
            control.value = null; // remove copied column value
            row.controls[column.name] = control;
            row._editing[column.name] = !column.viewOnly;
            rowControls.push(control);
        }));
        this.formUtils.setInitialValues(rowControls, defaultValue, false);
        tableFormRows.push(this.formUtils.toFormGroup(rowControls));
        this._rows.push(row);
    };
    /**
     * @description Validates the Form inside of the Table, if there are errors it will display/return the errors for each row.
     * If there are no errors, then it will return ONLY the changed data for each row, the data returned will be in the form:
     * { id: ID_OF_RECORD, key: value } -- data that was updated
     * { id: undefined, key: value } -- data that was added
     * @memberOf NovoTableElement
     */
    /**
     * \@description Validates the Form inside of the Table, if there are errors it will display/return the errors for each row.
     * If there are no errors, then it will return ONLY the changed data for each row, the data returned will be in the form:
     * { id: ID_OF_RECORD, key: value } -- data that was updated
     * { id: undefined, key: value } -- data that was added
     * \@memberOf NovoTableElement
     * @return {?}
     */
    NovoTableElement.prototype.validateAndGetUpdatedData = /**
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
            ((/** @type {?} */ (this.tableForm.controls['rows']))).controls.forEach((/**
             * @param {?} formGroup
             * @param {?} index
             * @return {?}
             */
            function (formGroup, index) {
                /** @type {?} */
                var changedRow = null;
                /** @type {?} */
                var error = null;
                // Go over the form group controls
                Object.keys(formGroup.controls).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
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
                }));
                if (changedRow) {
                    changedRows_1.push(changedRow);
                }
                if (error) {
                    errors_1.push({ errors: error, row: _this._rows[index], index: index });
                }
            }));
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
     * @description Refresh the data provider and leave edit mode
     * @memberOf NovoTableElement
     */
    /**
     * \@description Refresh the data provider and leave edit mode
     * \@memberOf NovoTableElement
     * @return {?}
     */
    NovoTableElement.prototype.cancelEditing = /**
     * \@description Refresh the data provider and leave edit mode
     * \@memberOf NovoTableElement
     * @return {?}
     */
    function () {
        this.leaveEditMode(true);
    };
    /**
     * @description Refresh the data provider and leave edit mode
     * @memberOf NovoTableElement
     */
    /**
     * \@description Refresh the data provider and leave edit mode
     * \@memberOf NovoTableElement
     * @return {?}
     */
    NovoTableElement.prototype.saveChanges = /**
     * \@description Refresh the data provider and leave edit mode
     * \@memberOf NovoTableElement
     * @return {?}
     */
    function () {
        this.leaveEditMode(false);
    };
    /**
     * @description Displays a toast message inside of the table
     * @memberOf NovoTableElement
     */
    /**
     * \@description Displays a toast message inside of the table
     * \@memberOf NovoTableElement
     * @param {?} toast
     * @param {?=} hideDelay
     * @return {?}
     */
    NovoTableElement.prototype.displayToastMessage = /**
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
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.hideToastMessage(); }), hideDelay);
        }
    };
    /**
     * @description Force hide the toast message
     * @memberOf NovoTableElement
     */
    /**
     * \@description Force hide the toast message
     * \@memberOf NovoTableElement
     * @return {?}
     */
    NovoTableElement.prototype.hideToastMessage = /**
     * \@description Force hide the toast message
     * \@memberOf NovoTableElement
     * @return {?}
     */
    function () {
        var _this = this;
        this.toast = null;
        // Hack to make the table display properly after hiding the toast
        this.grossFlagToAvoidTheTableFromBeingUglyWhenHidingTheToast = true;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.grossFlagToAvoidTheTableFromBeingUglyWhenHidingTheToast = false;
        }));
    };
    /**
     * @description display the loading overlay on the table
     * @memberOf NovoTableElement
     */
    /**
     * \@description display the loading overlay on the table
     * \@memberOf NovoTableElement
     * @param {?} show
     * @return {?}
     */
    NovoTableElement.prototype.toggleLoading = /**
     * \@description display the loading overlay on the table
     * \@memberOf NovoTableElement
     * @param {?} show
     * @return {?}
     */
    function (show) {
        this.loading = show;
    };
    /**
     * @description hide a column in edit or view mode
     * @memberOf NovoTableElement
     */
    /**
     * \@description hide a column in edit or view mode
     * \@memberOf NovoTableElement
     * @param {?} column
     * @return {?}
     */
    NovoTableElement.prototype.isColumnHidden = /**
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
    /** @nocollapse */
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
    /**
     * @type {?}
     * @private
     */
    NovoTableElement.prototype.formUtils;
    /**
     * @type {?}
     * @private
     */
    NovoTableElement.prototype.builder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvVGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVcsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUE4QixXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXBGLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFekUscUNBMkJDOzs7SUF6QkMsaUNBTUU7O0lBRUYsa0NBS0c7O0lBRUgsb0NBQTBCOztJQUMxQixrQ0FBd0I7O0lBQ3hCLG1DQUE4Qjs7SUFDOUIsbUNBQThCOztJQUM5Qiw0Q0FBMkI7O0lBQzNCLG9DQUFvQjs7SUFDcEIscUNBQXFCOztJQUNyQiwwQ0FBc0I7O0lBQ3RCLG9DQUFvQjs7SUFDcEIsMkNBQTJCOzs7QUFJN0IsSUFBWSxhQUFhO0lBQ3ZCLElBQUksR0FBSTtJ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LEtBQUs7Z0NBRUwsS0FBSzt1QkFFTCxLQUFLOzZCQUdMLE1BQU07OEJBRU4sTUFBTTtnQ0FFTixNQUFNO3VCQTJCTixLQUFLOytCQWdCTCxLQUFLOztJQXdyQlIsdUJBQUM7Q0FBQSxBQS82QkQsSUErNkJDO1NBNXZCWSxnQkFBZ0I7OztJQUMzQix3Q0FDb0M7O0lBRXBDLGtDQUM2Qjs7SUFDN0IsbUNBQ29COztJQUNwQixpQ0FDYzs7SUFDZCxrREFDd0M7O0lBQ3hDLGdDQUN5Qzs7SUFDekMsb0NBQzBCOztJQUMxQix5Q0FDNkI7O0lBQzdCLGdDQUN1Qjs7SUFFdkIsc0NBQ21EOztJQUNuRCx1Q0FDb0Q7O0lBQ3BELHlDQUNzRDs7SUFFdEQseUNBQXlDOztJQUN6QyxpQ0FBdUI7O0lBQ3ZCLG9DQUEwQjs7SUFDMUIsb0NBQXFCOztJQUNyQixrQ0FBd0I7O0lBQ3hCLHFDQUEyQjs7SUFDM0IseUNBQStCOztJQUMvQixvQ0FBcUI7O0lBQ3JCLDZDQUE4Qjs7SUFDOUIsZ0RBQXNDOztJQUN0Qyw2Q0FBdUI7O0lBQ3ZCLHFDQUEyQjs7SUFDM0Isd0NBQWtCOztJQUlsQiw4Q0FBNkI7O0lBQzdCLHlDQUFxQzs7SUFDckMscUNBQWdEOztJQUNoRCxpQ0FBK0Q7O0lBQy9ELG1DQUFvQjs7SUFDcEIsbUZBQWdGOztJQUNoRixtQ0FBZ0M7O0lBMkhwQixrQ0FBK0I7Ozs7O0lBQUUscUNBQTRCOzs7OztJQUFFLG1DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBEb0NoZWNrLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4vLyBBUFBcbmltcG9ydCB7IENvbGxlY3Rpb25FdmVudCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtcHJvdmlkZXIvQ29sbGVjdGlvbkV2ZW50JztcbmltcG9ydCB7IFBhZ2VkQXJyYXlDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS1wcm92aWRlci9QYWdlZEFycmF5Q29sbGVjdGlvbic7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1VdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm0tdXRpbHMvRm9ybVV0aWxzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IG5vdGlmeSB9IGZyb20gJy4uLy4uL3V0aWxzL25vdGlmaWVyL25vdGlmaWVyLnV0aWwnO1xuaW1wb3J0IHsgQ29udHJvbEZhY3RvcnksIFJlYWRPbmx5Q29udHJvbCB9IGZyb20gJy4vLi4vZm9ybS9Gb3JtQ29udHJvbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9UYWJsZUNvbmZpZyB7XG4gIC8vIFBhZ2luZyBjb25maWdcbiAgcGFnaW5nPzoge1xuICAgIGN1cnJlbnQ6IG51bWJlcjsgLy8gY3VycmVudCBwYWdlXG4gICAgaXRlbXNQZXJQYWdlOiBudW1iZXI7IC8vIGl0ZW1zIHBlciBwYWdlXG4gICAgb25QYWdlQ2hhbmdlOiBGdW5jdGlvbjsgLy8gZnVuY3Rpb24gdG8gaGFuZGxlIHBhZ2UgY2hhbmdpbmdcbiAgICByb3dPcHRpb25zPzogeyB2YWx1ZTogbnVtYmVyOyBsYWJlbDogc3RyaW5nIH1bXTsgLy8gcGFnZSBvcHRpb25zXG4gICAgZGlzYWJsZVBhZ2VTZWxlY3Rpb24/OiBib29sZWFuOyAvLyBkaXNhYmxlcyB0aGUgcGFnZXMgZnJvbSBiZWluZyBzZWxlY3RlZFxuICB9O1xuICAvLyBGb290ZXIgY29uZmlnICh0b3RhbCBmb290ZXIpXG4gIGZvb3RlcnM/OiBBcnJheTx7XG4gICAgY29sdW1uczogQXJyYXk8c3RyaW5nPjsgLy8gc3RyaW5nIGFycmF5IG9mIGNvbHVtbnMgdG8gdG90YWxcbiAgICBtZXRob2Q6IHN0cmluZzsgLy8gbWV0aG9kIHRvIHVzZSBmb3IgdGhlIGZvb3RlciwgU1VNIHwgQVZHLCBkZWZhdWx0cyB0byBTVU1cbiAgICBsYWJlbENvbHVtbjogc3RyaW5nOyAvLyBjb2x1bW4gdG8gdXNlIGFzIHRoZSBcInRvdGFsXCIgbGFiZWxcbiAgICBsYWJlbDogc3RyaW5nOyAvLyBsYWJlbCB0byB1c2UgaW4gdGhlIFwidG90YWxcIiBsYWJlbFxuICB9PjtcbiAgLy8gVE9ETzogV2hlbiB0aGVzZSB0eXBlcyBhcmUgZW5mb3JjZWQgYXMgYGJvb2xlYW4gfCBGdW5jdGlvbmAsIHRoZXJlJ3MgYSBsaW50IGVycm9yLiBUaGF0J3MgYSBidWcuXG4gIGZpbHRlcmluZz86IGJvb2xlYW4gfCBhbnk7IC8vIFR1cm4gb24gZmlsdGVyaW5nIGZvciB0aGUgdGFibGUsIGJvb2xlYW4gb3IgZnVuY3Rpb24gZm9yIGZpbHRlcmluZyBjYWxsYmFja1xuICBzb3J0aW5nPzogYm9vbGVhbiB8IGFueTsgLy8gVHVybiBvbiBzb3J0aW5nIGZvciB0aGUgdGFibGUsIGJvb2xlYW4gb3IgZnVuY3Rpb24gZm9yIHNvcnRpbmcgY2FsbGJhY2tcbiAgb3JkZXJpbmc/OiBib29sZWFuIHwgRnVuY3Rpb247IC8vIFR1cm4gb24gb3JkZXJpbmcgZm9yIHRoZSB0YWJsZSwgYm9vbGVhbiBvciBmdW5jdGlvbiBmb3Igb3JkZXJpbmcgY2FsbGJhY2tcbiAgcmVzaXppbmc/OiBib29sZWFuIHwgRnVuY3Rpb247IC8vIFR1cm4gb24gcmVzaXppbmcgZm9yIHRoZSB0YWJsZSwgYm9vbGVhbiBvciBmdW5jdGlvbiBmb3IgcmVzaXppbmcgY2FsbGJhY2tcbiAgcm93U2VsZWN0aW9uU3R5bGU/OiBzdHJpbmc7IC8vIFJvdyBzZWxlY3Rpb24gc3R5bGUsIGNoZWNrYm94IG9yIHJvd1xuICByb3dTZWxlY3Q/OiBib29sZWFuOyAvLyBUdXJuIG9uIHJvdyBzZWxlY3Rpb25cbiAgaGFzRGV0YWlscz86IGJvb2xlYW47IC8vIFR1cm4gb24gZGV0YWlscyByb3cgZm9yIHRoZSB0YWJsZVxuICBkZXRhaWxzUmVuZGVyZXI/OiBhbnk7IC8vIFJlbmRlcmVyL2NvbXBvbmVudCBmb3IgdGhlIGRldGFpbHMgcm93XG4gIGV4cGFuZEFsbD86IGJvb2xlYW47IC8vIHNob3VsZCBBbGwgUm93cyBiZSBleHBhbmRlZCBieSBkZWZhdWx0XG4gIHNlbGVjdEFsbEVuYWJsZWQ/OiBib29sZWFuOyAvLyBBbGxvd3MgdGhlIHRhYmxlLCB3aGlsZSBpbiBzZWxlY3Rpb24gbW9kZSB0byBoYXZlIGEgc2VsZWN0IGFsbCBhdCB0aGUgdG9wXG59XG5cbi8vIFRPRE8gLSBzdXBwb3J0ICgxKSBjbGlja2luZyBjZWxsIHRvIGVkaXQsICgyKSBjbGlja2luZyByb3cgdG8gZWRpdCwgKDMpIGJ1dHRvbiB0byB0cmlnZ2VyIGZ1bGwgdGFibGUgdG8gZWRpdFxuZXhwb3J0IGVudW0gTm92b1RhYmxlTW9kZSB7XG4gIFZJRVcgPSAxLFxuICBFRElUID0gMixcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10YWJsZScsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIudGhlbWVdJzogJ3RoZW1lJyxcbiAgICAnW2NsYXNzLmVkaXRpbmddJzogJ21vZGUgPT09IE5vdm9UYWJsZU1vZGUuRURJVCcsXG4gICAgJ1tjbGFzcy5ub3ZvLXRhYmxlLWxvYWRpbmddJzogJ2xvYWRpbmcnLFxuICB9LFxuICAvLyBkaXJlY3RpdmVzOiBbXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGhlYWRlciAqbmdJZj1cImNvbHVtbnMubGVuZ3RoXCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJub3ZvLXRhYmxlLWhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxub3ZvLXBhZ2luYXRpb24gKm5nSWY9XCJjb25maWcucGFnaW5nICYmICEoZGF0YVByb3ZpZGVyLmlzRW1wdHkoKSAmJiAhZGF0YVByb3ZpZGVyLmlzRmlsdGVyZWQoKSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd09wdGlvbnNdPVwiY29uZmlnLnBhZ2luZy5yb3dPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlUGFnZVNlbGVjdGlvbl09XCJjb25maWcucGFnaW5nLmRpc2FibGVQYWdlU2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsocGFnZSldPVwiZGF0YVByb3ZpZGVyLnBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhpdGVtc1BlclBhZ2UpXT1cImRhdGFQcm92aWRlci5wYWdlU2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdG90YWxJdGVtc109XCJkYXRhUHJvdmlkZXIudG90YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUGFnZUNoYW5nZSk9XCJvblBhZ2VDaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgIDwvbm92by1wYWdpbmF0aW9uPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8tdGFibGUtYWN0aW9uc1wiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tdGFibGUtbG9hZGluZy1vdmVybGF5XCIgKm5nSWY9XCJsb2FkaW5nIHx8IGRhdGFQcm92aWRlci5pc0xvYWRpbmcoKVwiPlxuICAgICAgICAgICAgPG5vdm8tbG9hZGluZz48L25vdm8tbG9hZGluZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxub3ZvLXRvYXN0ICpuZ0lmPVwidG9hc3RcIiBbdGhlbWVdPVwidG9hc3Q/LnRoZW1lXCIgW2ljb25dPVwidG9hc3Q/Lmljb25cIiBbbWVzc2FnZV09XCJ0b2FzdD8ubWVzc2FnZVwiPjwvbm92by10b2FzdD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLWNvbnRhaW5lclwiICpuZ0lmPVwiIWdyb3NzRmxhZ1RvQXZvaWRUaGVUYWJsZUZyb21CZWluZ1VnbHlXaGVuSGlkaW5nVGhlVG9hc3RcIj5cbiAgICAgICAgICAgIDxub3ZvLWZvcm0gaGlkZUhlYWRlcj1cInRydWVcIiBbZm9ybV09XCJ0YWJsZUZvcm1cIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIGRhdGFUYWJsZVwiIFtjbGFzcy50YWJsZS1kZXRhaWxzXT1cImNvbmZpZy5oYXNEZXRhaWxzXCIgcm9sZT1cImdyaWRcIj5cbiAgICAgICAgICAgICAgICA8IS0tIHNraXBTb3J0QW5kRmlsdGVyQ2xlYXIgaXMgYSBoYWNrIHJpZ2h0IG5vdywgd2lsbCBiZSByZW1vdmVkIG9uY2UgQ2FudmFzIGlzIHJlZmFjdG9yZWQgLS0+XG4gICAgICAgICAgICAgICAgPHRoZWFkICpuZ0lmPVwiY29sdW1ucy5sZW5ndGggJiYgKCFkYXRhUHJvdmlkZXIuaXNFbXB0eSgpIHx8IGRhdGFQcm92aWRlci5pc0ZpbHRlcmVkKCkgfHwgc2tpcFNvcnRBbmRGaWx0ZXJDbGVhciB8fCBlZGl0aW5nKVwiPlxuICAgICAgICAgICAgICAgICAgICA8dHIgcm9sZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBERVRBSUxTIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicm93LWFjdGlvbnNcIiAqbmdJZj1cImNvbmZpZy5oYXNEZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwibmV4dFwiIChjbGljayk9XCJleHBhbmRBbGxPblBhZ2UoY29uZmlnLmV4cGFuZEFsbClcIiAqbmdJZj1cIiFjb25maWcuZXhwYW5kQWxsXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiZXhwYW5kLWFsbFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgaWNvbj1cInNvcnQtZGVzY1wiIChjbGljayk9XCJleHBhbmRBbGxPblBhZ2UoY29uZmlnLmV4cGFuZEFsbClcIiAqbmdJZj1cImNvbmZpZy5leHBhbmRBbGxcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJjb2xsYXBzZS1hbGxcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIENIRUNLQk9YIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicm93LWFjdGlvbnMgY2hlY2tib3ggbWFzcy1hY3Rpb25cIiAqbmdJZj1cImNvbmZpZy5yb3dTZWxlY3Rpb25TdHlsZSA9PT0gJ2NoZWNrYm94J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLWNoZWNrYm94IFsobmdNb2RlbCldPVwibWFzdGVyXCIgW2luZGV0ZXJtaW5hdGVdPVwicGFnZVNlbGVjdGVkLmxlbmd0aCA+IDAgJiYgcGFnZVNlbGVjdGVkLmxlbmd0aCA8IHBhZ2VkRGF0YS5sZW5ndGhcIiAobmdNb2RlbENoYW5nZSk9XCJzZWxlY3RQYWdlKCRldmVudClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJzZWxlY3QtYWxsLWNoZWNrYm94XCIgW3Rvb2x0aXBdPVwibWFzdGVyID8gbGFiZWxzLmRlc2VsZWN0QWxsIDogbGFiZWxzLnNlbGVjdEFsbE9uUGFnZVwiIHRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCI+PC9ub3ZvLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gVEFCTEUgSEVBREVSUyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBbbmdDbGFzc109XCJ7ICdtYXNzLWFjdGlvbic6IGNvbmZpZz8ucm93U2VsZWN0aW9uU3R5bGUgPT09ICdjaGVja2JveCcsICdhY3Rpb25zJzogY29sdW1uPy5hY3Rpb25zPy5pdGVtcz8ubGVuZ3RoID4gMCwgJ3ByZXZpZXcnOiBjb2x1bW4/Lm5hbWUgPT09ICdwcmV2aWV3JyB9XCIgW25vdm9UaE9yZGVyYWJsZV09XCJjb2x1bW5cIiAob25PcmRlckNoYW5nZSk9XCJvbk9yZGVyQ2hhbmdlKCRldmVudClcIiBbaGlkZGVuXT1cImlzQ29sdW1uSGlkZGVuKGNvbHVtbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGgtZ3JvdXBcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY29sdW1uLmlkIHx8IGNvbHVtbi5uYW1lXCIgKm5nSWY9XCIhY29sdW1uLmhpZGVIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBMQUJFTCAmIFNPUlQgQVJST1dTIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGgtdGl0bGVcIiBbbmdDbGFzc109XCIoY29uZmlnLnNvcnRpbmcgIT09IGZhbHNlICYmIGNvbHVtbi5zb3J0aW5nICE9PSBmYWxzZSkgPyAnc29ydGFibGUnIDogJydcIiBbbm92b1RoU29ydGFibGVdPVwiY29uZmlnXCIgW2NvbHVtbl09XCJjb2x1bW5cIiAob25Tb3J0Q2hhbmdlKT1cIm9uU29ydENoYW5nZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3sgY29sdW1uLnRpdGxlIHx8IGNvbHVtbi5sYWJlbCB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtc29ydC1pY29uc1wiIHRvb2x0aXBQb3NpdGlvbj1cImJvdHRvbVwiIFt0b29sdGlwXT1cImxhYmVscy5zb3J0XCIgW25nQ2xhc3NdPVwiY29sdW1uLnNvcnQgfHwgJydcIiAqbmdJZj1cImNvbmZpZy5zb3J0aW5nICE9PSBmYWxzZSAmJiBjb2x1bW4uc29ydGluZyAhPT0gZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1hcnJvdy11cFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1hcnJvdy1kb3duXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEZJTFRFUiBEUk9QLURPV04gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLWRyb3Bkb3duIHNpZGU9XCJyaWdodFwiICpuZ0lmPVwiY29uZmlnLmZpbHRlcmluZyAhPT0gZmFsc2UgJiYgY29sdW1uLmZpbHRlcmluZyAhPT0gZmFsc2VcIiBjbGFzcz1cImNvbHVtbi1maWx0ZXJzXCIgKHRvZ2dsZWQpPVwib25Ecm9wZG93blRvZ2dsZWQoJGV2ZW50LCBjb2x1bW4ubmFtZSlcIiBwYXJlbnRTY3JvbGxTZWxlY3Rvcj1cIi50YWJsZS1jb250YWluZXJcIiBjb250YWluZXJDbGFzcz1cInRhYmxlLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aGVtZT1cImljb25cIiBpY29uPVwiZmlsdGVyXCIgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tXCIgW3Rvb2x0aXBdPVwibGFiZWxzLmZpbHRlcnNcIiBbY2xhc3MuZmlsdGVyZWRdPVwiY29sdW1uLmZpbHRlciB8fCBjb2x1bW4uZmlsdGVyPT09ZmFsc2VcIiAoY2xpY2spPVwiZm9jdXNJbnB1dCgpXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEZJTFRFUiBPUFRJT05TIExJU1QgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlzdCAqbmdJZj1cIihjb2x1bW4/Lm9wdGlvbnM/Lmxlbmd0aCB8fCBjb2x1bW4/Lm9yaWdpbmFsT3B0aW9ucz8ubGVuZ3RoKSAmJiBjb2x1bW4/LnR5cGUgIT09ICdkYXRlJyAmJiB0b2dnbGVkRHJvcGRvd25NYXBbY29sdW1uLm5hbWVdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0gY2xhc3M9XCJmaWx0ZXItc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGxhYmVscy5maWx0ZXJzIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImRpYWxvZ3VlXCIgY29sb3I9XCJuZWdhdGl2ZVwiIGljb249XCJ0aW1lc1wiIChjbGljayk9XCJvbkZpbHRlckNsZWFyKGNvbHVtbilcIiAqbmdJZj1cImNvbHVtbi5maWx0ZXIgfHwgY29sdW1uLmZpbHRlcj09PWZhbHNlXCI+e3sgbGFiZWxzLmNsZWFyIH19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAqbmdJZj1cIiEhY29sdW1uLmFsbG93Q3VzdG9tVGV4dE9wdGlvblwiIFthdHRyLmlkXT1cImNvbHVtbi5uYW1lICsgJy1pbnB1dCdcIiBbbm92b1RhYmxlRmlsdGVyXT1cImNvbHVtblwiIChvbkZpbHRlckNoYW5nZSk9XCJvbkZpbHRlcktleXdvcmRzKCRldmVudClcIiBbKG5nTW9kZWwpXT1cImNvbHVtbi5mcmVldGV4dEZpbHRlclwiIGtlZXBGaWx0ZXJGb2N1c2VkICNmaWx0ZXJJbnB1dC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtIFtuZ0NsYXNzXT1cInsgYWN0aXZlOiBpc0ZpbHRlckFjdGl2ZShjb2x1bW4sIG9wdGlvbikgfVwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29sdW1uLm9wdGlvbnNcIiAoY2xpY2spPVwib25GaWx0ZXJDbGljayhjb2x1bW4sIG9wdGlvbilcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiZ2V0T3B0aW9uRGF0YUF1dG9tYXRpb25JZChvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uIH19PC9zcGFuPiA8aSBjbGFzcz1cImJoaS1jaGVja1wiICpuZ0lmPVwiaXNGaWx0ZXJBY3RpdmUoY29sdW1uLCBvcHRpb24pXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRklMVEVSIFNFQVJDSCBJTlBVVCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaXN0ICpuZ0lmPVwiIShjb2x1bW4/Lm9wdGlvbnM/Lmxlbmd0aCB8fCBjb2x1bW4/Lm9yaWdpbmFsT3B0aW9ucz8ubGVuZ3RoKSAmJiB0b2dnbGVkRHJvcGRvd25NYXBbY29sdW1uLm5hbWVdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0gY2xhc3M9XCJmaWx0ZXItc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGxhYmVscy5maWx0ZXJzIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImRpYWxvZ3VlXCIgY29sb3I9XCJuZWdhdGl2ZVwiIGljb249XCJ0aW1lc1wiIChjbGljayk9XCJvbkZpbHRlckNsZWFyKGNvbHVtbilcIiAqbmdJZj1cImNvbHVtbi5maWx0ZXJcIj57eyBsYWJlbHMuY2xlYXIgfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFthdHRyLmlkXT1cImNvbHVtbi5uYW1lICsgJy1pbnB1dCdcIiBbbm92b1RhYmxlRmlsdGVyXT1cImNvbHVtblwiIChvbkZpbHRlckNoYW5nZSk9XCJvbkZpbHRlckNoYW5nZSgkZXZlbnQpXCIgWyhuZ01vZGVsKV09XCJjb2x1bW4uZmlsdGVyXCIga2VlcEZpbHRlckZvY3VzZWQgI2ZpbHRlcklucHV0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEZJTFRFUiBEQVRFIE9QVElPTlMgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlzdCAqbmdJZj1cImNvbHVtbj8ub3B0aW9ucz8ubGVuZ3RoICYmIGNvbHVtbj8udHlwZSA9PT0gJ2RhdGUnICYmIHRvZ2dsZWREcm9wZG93bk1hcFtjb2x1bW4ubmFtZV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbSBjbGFzcz1cImZpbHRlci1zZWFyY2hcIiAqbmdJZj1cIiFjb2x1bW4uY2FsZW5kZXJTaG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGxhYmVscy5maWx0ZXJzIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImRpYWxvZ3VlXCIgY29sb3I9XCJuZWdhdGl2ZVwiIGljb249XCJ0aW1lc1wiIChjbGljayk9XCJvbkZpbHRlckNsZWFyKGNvbHVtbilcIiAqbmdJZj1cImNvbHVtbi5maWx0ZXJcIj57eyBsYWJlbHMuY2xlYXIgfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtIFtuZ0NsYXNzXT1cInsgYWN0aXZlOiBpc0ZpbHRlckFjdGl2ZShjb2x1bW4sIG9wdGlvbikgfVwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29sdW1uLm9wdGlvbnNcIiAoY2xpY2spPVwib25GaWx0ZXJDbGljayhjb2x1bW4sIG9wdGlvbilcIiBba2VlcE9wZW5dPVwib3B0aW9uLnJhbmdlXCIgW2hpZGRlbl09XCJjb2x1bW4uY2FsZW5kZXJTaG93XCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIihvcHRpb24/LmxhYmVsIHx8IG9wdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgb3B0aW9uPy5sYWJlbCB8fCBvcHRpb24gfX0gPGkgY2xhc3M9XCJiaGktY2hlY2tcIiAqbmdJZj1cImlzRmlsdGVyQWN0aXZlKGNvbHVtbiwgb3B0aW9uKVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWNvbnRhaW5lclwiIFtoaWRkZW5dPVwiIWNvbHVtbi5jYWxlbmRlclNob3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAoY2xpY2spPVwiY29sdW1uLmNhbGVuZGVyU2hvdz1mYWxzZVwiPjxpIGNsYXNzPVwiYmhpLXByZXZpb3VzXCI+PC9pPnt7IGxhYmVscy5iYWNrVG9QcmVzZXRGaWx0ZXJzIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLWRhdGUtcGlja2VyICNyYW5nZVBpY2tlciAob25TZWxlY3QpPVwib25DYWxlbmRlclNlbGVjdChjb2x1bW4sICRldmVudClcIiBbKG5nTW9kZWwpXT1cImNvbHVtbi5maWx0ZXJcIiByYW5nZT1cInRydWVcIj48L25vdm8tZGF0ZS1waWNrZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbm92by1kcm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8IS0tIFRBQkxFIERBVEEgLS0+XG4gICAgICAgICAgICAgICAgPHRib2R5ICpuZ0lmPVwiIWRhdGFQcm92aWRlci5pc0VtcHR5KCkgfHwgZWRpdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ0YWJsZS1zZWxlY3Rpb24tcm93XCIgKm5nSWY9XCJjb25maWcucm93U2VsZWN0aW9uU3R5bGUgPT09ICdjaGVja2JveCcgJiYgc2hvd1NlbGVjdEFsbE1lc3NhZ2UgJiYgY29uZmlnLnNlbGVjdEFsbEVuYWJsZWRcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJ0YWJsZS1zZWxlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xhYmVscy5zZWxlY3RlZFJlY29yZHMoc2VsZWN0ZWQubGVuZ3RoKX19IDxhIChjbGljayk9XCJzZWxlY3RBbGwodHJ1ZSlcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJhbGwtbWF0Y2hpbmctcmVjb3Jkc1wiPnt7bGFiZWxzLnRvdGFsUmVjb3JkcyhkYXRhUHJvdmlkZXIudG90YWwpfX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LXJvdz1cIiRpbXBsaWNpdFwiIGxldC1pPVwiaW5kZXhcIiBbbmdGb3JPZl09XCJyb3dzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ0YWJsZS1yb3dcIiBbbmdDbGFzc109XCJyb3cuY3VzdG9tQ2xhc3MgfHwgJydcIiBbaWRdPVwibmFtZSArICctJyArIHJvd1tyb3dJZGVudGlmaWVyXVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJyb3cuaWRcIiAoY2xpY2spPVwicm93Q2xpY2tIYW5kbGVyKHJvdylcIiBbY2xhc3MuYWN0aXZlXT1cInJvdy5pZCA9PT0gYWN0aXZlSWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyb3ctYWN0aW9uc1wiICpuZ0lmPVwiY29uZmlnLmhhc0RldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwibmV4dFwiIChjbGljayk9XCJyb3cuX2V4cGFuZGVkPSFyb3cuX2V4cGFuZGVkXCIgKm5nSWY9XCIhcm93Ll9leHBhbmRlZFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIGljb249XCJzb3J0LWRlc2NcIiAoY2xpY2spPVwicm93Ll9leHBhbmRlZD0hcm93Ll9leHBhbmRlZFwiICpuZ0lmPVwicm93Ll9leHBhbmRlZFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicm93LWFjdGlvbnMgY2hlY2tib3hcIiAqbmdJZj1cImNvbmZpZy5yb3dTZWxlY3Rpb25TdHlsZSA9PT0gJ2NoZWNrYm94J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bm92by1jaGVja2JveCBbKG5nTW9kZWwpXT1cInJvdy5fc2VsZWN0ZWRcIiAobmdNb2RlbENoYW5nZSk9XCJyb3dTZWxlY3RIYW5kbGVyKHJvdylcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJzZWxlY3Qtcm93LWNoZWNrYm94XCI+PC9ub3ZvLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjb2x1bW4uaWQgfHwgY29sdW1uLm5hbWVcIiBbY2xhc3Mubm92by1mb3JtLXJvd109XCJlZGl0YWJsZVwiIFtoaWRkZW5dPVwiaXNDb2x1bW5IaWRkZW4oY29sdW1uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bm92by10YWJsZS1jZWxsICpuZ0lmPVwicm93Ll9lZGl0aW5nICYmICFyb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdXCIgW2hhc0VkaXRvcl09XCJlZGl0YWJsZVwiIFtjb2x1bW5dPVwiY29sdW1uXCIgW3Jvd109XCJyb3dcIiBbZm9ybV09XCJnZXRSb3dDb250cm9sRm9ybShpKVwiPjwvbm92by10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bm92by1jb250cm9sICpuZ0lmPVwicm93Ll9lZGl0aW5nICYmIHJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV1cIiBjb25kZW5zZWQ9XCJ0cnVlXCIgW2Zvcm1dPVwiZ2V0Um93Q29udHJvbEZvcm0oaSlcIiBbY29udHJvbF09XCJyb3cuY29udHJvbHNbY29sdW1uLm5hbWVdXCI+PC9ub3ZvLWNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJkZXRhaWxzLXJvd1wiICpuZ0lmPVwiY29uZmlnLmhhc0RldGFpbHNcIiBbaGlkZGVuXT1cIiFyb3cuX2V4cGFuZGVkXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidkZXRhaWxzLXJvdy0nK3Jvdy5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJvdy1hY3Rpb25zXCI+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgW2F0dHIuY29sc3Bhbl09XCJjb25maWcucm93U2VsZWN0aW9uU3R5bGUgPT09ICdjaGVja2JveCcgPyAoY29sdW1ucy5sZW5ndGggKyAxKSA6IGNvbHVtbnMubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLXJvdy1kZXRhaWxzIFtkYXRhXT1cInJvd1wiIFtyZW5kZXJlcl09XCJjb25maWcuZGV0YWlsc1JlbmRlcmVyXCI+PC9ub3ZvLXJvdy1kZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPCEtLSBOTyBUQUJMRSBEQVRBIFBMQUNFSE9MREVSIC0tPlxuICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cInRhYmxlLW1lc3NhZ2VcIiAqbmdJZj1cImRhdGFQcm92aWRlci5pc0VtcHR5KCkgJiYgIWRhdGFQcm92aWRlci5pc0ZpbHRlcmVkKCkgJiYgIWVkaXRpbmdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJlbXB0eS10YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICNlbXB0eW1lc3NhZ2U+PG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RhYmxlLWVtcHR5LW1lc3NhZ2VdXCI+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1lbXB0eS1tZXNzYWdlXCIgKm5nSWY9XCJlbXB0eW1lc3NhZ2UuY2hpbGROb2Rlcy5sZW5ndGggPT0gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PGkgY2xhc3M9XCJiaGktc2VhcmNoLXF1ZXN0aW9uXCI+PC9pPiB7eyBsYWJlbHMuZW1wdHlUYWJsZU1lc3NhZ2UgfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwhLS0gTk8gTUFUQ0hJTkcgUkVDT1JEUyAtLT5cbiAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3M9XCJ0YWJsZS1tZXNzYWdlXCIgKm5nSWY9XCJkYXRhUHJvdmlkZXIuaXNFbXB0eSgpICYmIGRhdGFQcm92aWRlci5pc0ZpbHRlcmVkKClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJlbXB0eS10YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICNub21hdGNobWVzc2FnZT48bmctY29udGVudCBzZWxlY3Q9XCJbdGFibGUtbm8tbWF0Y2hpbmctcmVjb3Jkcy1tZXNzYWdlXVwiPjwvbmctY29udGVudD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm8tbWF0Y2hpbmctcmVjb3Jkc1wiICpuZ0lmPVwibm9tYXRjaG1lc3NhZ2UuY2hpbGROb2Rlcy5sZW5ndGggPT0gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PGkgY2xhc3M9XCJiaGktc2VhcmNoLXF1ZXN0aW9uXCI+PC9pPiB7eyBsYWJlbHMubm9NYXRjaGluZ1JlY29yZHNNZXNzYWdlIH19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8IS0tIFRBQkxFIERBVEEgRVJST1IgUExBQ0VIT0xERVIgLS0+XG4gICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzPVwidGFibGUtbWVzc2FnZVwiICpuZ0lmPVwiZGF0YVByb3ZpZGVyLmhhc0Vycm9ycygpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwidGFibGUtZXJyb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgI2Vycm9ybWVzc2FnZT48bmctY29udGVudCBzZWxlY3Q9XCJbdGFibGUtZXJyb3ItbWVzc2FnZV1cIj48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLWVycm9yLW1lc3NhZ2VcIiAqbmdJZj1cImVycm9ybWVzc2FnZS5jaGlsZE5vZGVzLmxlbmd0aCA9PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND48aSBjbGFzcz1cImJoaS1jYXV0aW9uXCI+PC9pPiB7eyBsYWJlbHMuZXJyb3JlZFRhYmxlTWVzc2FnZSB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPHRmb290ICpuZ0lmPVwiIWNvbmZpZy5mb290ZXJzXCIgW25nQ2xhc3NdPVwiZGF0YVByb3ZpZGVyLmxlbmd0aCAlIDIgPT0gMCA/ICdvZGQnIDogJ2V2ZW4nXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8tdGFibGUtZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rmb290PlxuICAgICAgICAgICAgICAgIDx0Zm9vdCAqbmdGb3I9XCJsZXQgZm9vdGVyIG9mIGZvb3RlcnM7bGV0IGkgPSBpbmRleDtcIiBjbGFzcz1cIm5vdm8tdGFibGUtdG90YWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiKGNvbHVtbi5pZCB8fCBjb2x1bW4ubmFtZSkgKyAnLXRvdGFsLScgKyBpXCI+e3sgZm9vdGVyW2NvbHVtbi5uYW1lXSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Zm9vdD5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvbm92by1mb3JtPlxuICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJsZUVsZW1lbnQgaW1wbGVtZW50cyBEb0NoZWNrIHtcbiAgQFZpZXdDaGlsZHJlbignZmlsdGVySW5wdXQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgZmlsdGVySW5wdXRzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cbiAgQElucHV0KClcbiAgY29uZmlnOiBOb3ZvVGFibGVDb25maWcgPSB7fTtcbiAgQElucHV0KClcbiAgY29sdW1uczogQXJyYXk8YW55PjtcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2tpcFNvcnRBbmRGaWx0ZXJDbGVhcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBtb2RlOiBOb3ZvVGFibGVNb2RlID0gTm92b1RhYmxlTW9kZS5WSUVXO1xuICBASW5wdXQoKVxuICBlZGl0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICByb3dJZGVudGlmaWVyOiBzdHJpbmcgPSAnaWQnO1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmcgPSAndGFibGUnO1xuXG4gIEBPdXRwdXQoKVxuICBvblJvd0NsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIG9uUm93U2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIG9uVGFibGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIF9kYXRhUHJvdmlkZXI6IFBhZ2VkQXJyYXlDb2xsZWN0aW9uPGFueT47XG4gIF9yb3dzOiBBcnJheTxhbnk+ID0gW107XG4gIHNlbGVjdGVkOiBBcnJheTxhbnk+ID0gW107XG4gIGFjdGl2ZUlkOiBudW1iZXIgPSAwO1xuICBtYXN0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZXhwYW5kQWxsOiBib29sZWFuID0gZmFsc2U7XG4gIGluZGV0ZXJtaW5hdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbGFzdFBhZ2U6IG51bWJlciA9IDA7XG4gIHNlbGVjdGVkUGFnZUNvdW50OiBudW1iZXIgPSAwO1xuICBzaG93U2VsZWN0QWxsTWVzc2FnZTogYm9vbGVhbiA9IGZhbHNlO1xuICBjdXJyZW50U29ydENvbHVtbjogYW55O1xuICBwYWdlZERhdGE6IEFycmF5PGFueT4gPSBbXTtcbiAgcGFnZVNlbGVjdGVkOiBhbnk7XG4gIC8vIE1hcCB0byBrZWVwIHRyYWNrIG9mIHdoYXQgZHJvcGRvd25zIGFyZSB0b2dnbGVkXG4gIC8vIFVzZWQgdG8gcHJvcGVybHkgKm5nSWYgdGhlIDxsaXN0PiBzbyB0aGF0IHRoZSBrZWVwRmlsdGVyRm9jdXNlZCBEaXJlY3RpdmVcbiAgLy8gd2lsbCBwcm9wZXJseSBmaXJlIHRoZSBuZ0FmdGVyVmlld0luaXQgZXZlbnRcbiAgdG9nZ2xlZERyb3Bkb3duTWFwOiBhbnkgPSB7fTtcbiAgcHVibGljIE5vdm9UYWJsZU1vZGUgPSBOb3ZvVGFibGVNb2RlO1xuICBwdWJsaWMgdGFibGVGb3JtOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcbiAgcHVibGljIHRvYXN0OiB7IHRoZW1lOiBzdHJpbmc7IGljb246IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nIH07XG4gIHB1YmxpYyBmb290ZXJzID0gW107XG4gIHB1YmxpYyBncm9zc0ZsYWdUb0F2b2lkVGhlVGFibGVGcm9tQmVpbmdVZ2x5V2hlbkhpZGluZ1RoZVRvYXN0OiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IHJvd3Mocm93czogQXJyYXk8YW55Pikge1xuICAgIHRoaXMuZGF0YVByb3ZpZGVyID0gcm93cztcbiAgICBpZiAocm93cyAmJiByb3dzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0dXBDb2x1bW5EZWZhdWx0cygpO1xuICAgIH1cbiAgICAvLyB0aGlzIGlzIGEgdGVtcG9yYXJ5L2hhY2t5IGZpeCB1bnRpbCBhc3luYyBkYXRhbG9hZGluZyBpcyBoYW5kbGVkIHdpdGhpbiB0aGUgdGFibGVcbiAgICBpZiAoIXRoaXMuc2tpcFNvcnRBbmRGaWx0ZXJDbGVhcikge1xuICAgICAgdGhpcy5jbGVhckFsbFNvcnRBbmRGaWx0ZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvd3M7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGF0YVByb3ZpZGVyKGRwOiBhbnkpIHtcbiAgICB0aGlzLl9kYXRhUHJvdmlkZXIgPSBBcnJheS5pc0FycmF5KGRwKSA/IG5ldyBQYWdlZEFycmF5Q29sbGVjdGlvbjxhbnk+KGRwKSA6IGRwO1xuICAgIHRoaXMuX2RhdGFQcm92aWRlci5kYXRhQ2hhbmdlLnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpLnN1YnNjcmliZSgoZXZlbnQ6IENvbGxlY3Rpb25FdmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgQ29sbGVjdGlvbkV2ZW50LkNIQU5HRTpcbiAgICAgICAgICB0aGlzLl9yb3dzID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAvLyBTZXR1cCBmb3JtXG4gICAgICAgICAgdGhpcy50YWJsZUZvcm0gPSB0aGlzLmJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgcm93czogdGhpcy5idWlsZGVyLmFycmF5KFtdKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBSZW1vdmUgYWxsIHNlbGVjdGlvbiBvbiBzb3J0IGNoYW5nZSBpZiBzZWxlY3Rpb24gaXMgb25cbiAgICAgICAgICBpZiAodGhpcy5jb25maWcucm93U2VsZWN0aW9uU3R5bGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZWREYXRhID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHRoaXMucGFnZVNlbGVjdGVkID0gdGhpcy5wYWdlZERhdGEuZmlsdGVyKChyKSA9PiByLl9zZWxlY3RlZCk7XG4gICAgICAgICAgICB0aGlzLnJvd1NlbGVjdEhhbmRsZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRmluZCB0aGF0IGNvbHVtbnMgd2UgbWlnaHQgbmVlZCB0byBzdW0gdXAgdmlhIHRoZSBmb290ZXJcbiAgICAgICAgICBsZXQgY29sdW1uc1RvU3VtID0gW107XG4gICAgICAgICAgY29uc3QgY29sdW1uU3VtcyA9IHt9O1xuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5mb290ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5mb290ZXJzLmZvckVhY2goKGNvbmZpZykgPT4ge1xuICAgICAgICAgICAgICBjb2x1bW5zVG9TdW0ucHVzaCguLi5jb25maWcuY29sdW1ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIE9ubHkgaGF2ZSB1bmlxdWUgY29sdW1ucywgZmlsdGVyIG91dCBkdXBsaWNhdGVzXG4gICAgICAgICAgICBjb2x1bW5zVG9TdW0gPSBjb2x1bW5zVG9TdW0uZmlsdGVyKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IGFycmF5LmluZGV4T2YoaXRlbSkgPT09IGluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gTWFrZSBhIGZvcm0gZm9yIGVhY2ggcm93XG4gICAgICAgICAgY29uc3QgdGFibGVGb3JtUm93cyA9IDxGb3JtQXJyYXk+dGhpcy50YWJsZUZvcm0uY29udHJvbHNbJ3Jvd3MnXTtcbiAgICAgICAgICB0aGlzLl9yb3dzLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRyb2xzID0gW107XG4gICAgICAgICAgICByb3cuY29udHJvbHMgPSB7fTtcbiAgICAgICAgICAgIHJvdy5fZWRpdGluZyA9IHt9O1xuICAgICAgICAgICAgcm93Ll9leHBhbmRlZCA9IHRoaXMuY29uZmlnLmV4cGFuZEFsbDtcbiAgICAgICAgICAgIHJvdy5yb3dJZCA9IHRoaXMuX3Jvd3MubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAvLyBVc2UgdGhlIGNvbnRyb2wgcGFzc2VkIG9yIHVzZSBhIFJlYWRPbmx5Q29udHJvbCBzbyB0aGF0IHRoZSBmb3JtIGhhcyB0aGUgdmFsdWVzXG4gICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2wgPSBjb2x1bW4uZWRpdG9yQ29uZmlnXG4gICAgICAgICAgICAgICAgPyBDb250cm9sRmFjdG9yeS5jcmVhdGUoY29sdW1uLmVkaXRvclR5cGUsIGNvbHVtbi5lZGl0b3JDb25maWcpXG4gICAgICAgICAgICAgICAgOiBuZXcgUmVhZE9ubHlDb250cm9sKHsga2V5OiBjb2x1bW4ubmFtZSB9KTtcbiAgICAgICAgICAgICAgcm93LmNvbnRyb2xzW2NvbHVtbi5uYW1lXSA9IGNvbnRyb2w7XG4gICAgICAgICAgICAgIHJvd0NvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZm9ybVV0aWxzLnNldEluaXRpYWxWYWx1ZXMocm93Q29udHJvbHMsIHJvdywgZmFsc2UpO1xuICAgICAgICAgICAgdGFibGVGb3JtUm93cy5wdXNoKHRoaXMuZm9ybVV0aWxzLnRvRm9ybUdyb3VwKHJvd0NvbnRyb2xzKSk7XG4gICAgICAgICAgICAvLyBTZXR1cCB0aGUgdG90YWwgZm9vdGVyIGlmIGNvbmZpZ3VyZWRcbiAgICAgICAgICAgIC8vIEFycmF5IG9mIGtleXMgdG8gdG90YWxcbiAgICAgICAgICAgIGlmIChjb2x1bW5zVG9TdW0ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgIGNvbHVtbnNUb1N1bS5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoSGVscGVycy5pc0JsYW5rKGNvbHVtblN1bXNbY29sdW1uXSkpIHtcbiAgICAgICAgICAgICAgICAgIGNvbHVtblN1bXNbY29sdW1uXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbHVtblN1bXNbY29sdW1uXSArPSByb3dbY29sdW1uXTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gTm92b1RhYmxlTW9kZS5FRElUKSB7XG4gICAgICAgICAgICB0aGlzLnNldFRhYmxlRWRpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBTZXR1cCB0aGUgZm9vdGVycyAoaWYgYW55KVxuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5mb290ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmZvb3RlcnMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmZvb3RlcnMuZm9yRWFjaCgoZm9vdGVyQ29uZmlnLCBmb290ZXJDb25maWdJbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBmb290ZXIgPSB7fTtcbiAgICAgICAgICAgICAgZm9vdGVyW2Zvb3RlckNvbmZpZy5sYWJlbENvbHVtbl0gPSBmb290ZXJDb25maWcubGFiZWw7XG4gICAgICAgICAgICAgIGZvb3RlckNvbmZpZy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmb290ZXJDb25maWcubWV0aG9kID09PSAnQVZHJyAmJiB0aGlzLl9yb3dzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgZm9vdGVyW2NvbHVtbl0gPSBjb2x1bW5TdW1zW2NvbHVtbl0gLyB0aGlzLl9yb3dzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZm9vdGVyW2NvbHVtbl0gPSBjb2x1bW5TdW1zW2NvbHVtbl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy5mb290ZXJzLnB1c2goZm9vdGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGhpcy5jb25maWcucGFnaW5nKSB7XG4gICAgICB0aGlzLl9kYXRhUHJvdmlkZXIucGFnZSA9IHRoaXMuY29uZmlnLnBhZ2luZy5jdXJyZW50O1xuICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLnBhZ2VTaXplID0gdGhpcy5jb25maWcucGFnaW5nLml0ZW1zUGVyUGFnZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUGFnaW5nIHR1cm5lZCBvZmYsIHJldHVybiBiYXNpY2FsbHkgYWxsIG9mIHRoZSBkYXRhXG4gICAgICB0aGlzLl9kYXRhUHJvdmlkZXIucGFnZSA9IDE7XG4gICAgICB0aGlzLl9kYXRhUHJvdmlkZXIucGFnZVNpemUgPSA1MDA7XG4gICAgfVxuICAgIGlmIChkcCAmJiBkcC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldHVwQ29sdW1uRGVmYXVsdHMoKTtcbiAgICB9XG4gICAgdGhpcy5fZGF0YVByb3ZpZGVyLnJlZnJlc2goKTtcbiAgfVxuICBnZXQgZGF0YVByb3ZpZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhUHJvdmlkZXI7XG4gIH1cblxuICBnZXQgZWRpdGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSBOb3ZvVGFibGVNb2RlLkVESVQ7XG4gIH1cblxuICBnZXQgZm9ybVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnRhYmxlRm9ybS52YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHByaXZhdGUgZm9ybVV0aWxzOiBGb3JtVXRpbHMsIHByaXZhdGUgYnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICBub3RpZnkoJ1tEZXByZWNhdGVkXTogVGhlIHRhYmxlIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSBtaWdyYXRlIHRvIG5vdm8tZGF0YS10YWJsZXMhJyk7XG4gIH1cblxuICBvbkRyb3Bkb3duVG9nZ2xlZChldmVudCwgY29sdW1uKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGVkRHJvcGRvd25NYXBbY29sdW1uXSA9IGV2ZW50O1xuICB9XG5cbiAgZm9jdXNJbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maWx0ZXJJbnB1dHMgJiYgdGhpcy5maWx0ZXJJbnB1dHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmZpbHRlcklucHV0cy5mb3JFYWNoKChmaWx0ZXJJbnB1dCkgPT4ge1xuICAgICAgICBpZiAoZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpLCAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25QYWdlQ2hhbmdlKGV2ZW50KSB7XG4gICAgLy8gdGhpcy5kYXRhUHJvdmlkZXIucGFnZSA9IGV2ZW50LnBhZ2U7XG4gICAgLy8gdGhpcy5kYXRhUHJvdmlkZXIucGFnZVNpemUgPSBldmVudC5pdGVtc1BlclBhZ2U7XG4gIH1cblxuICBnZXRPcHRpb25EYXRhQXV0b21hdGlvbklkKG9wdGlvbikge1xuICAgIGlmICghSGVscGVycy5pc0JsYW5rKG9wdGlvbi52YWx1ZSkpIHtcbiAgICAgIHJldHVybiBvcHRpb24udmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb247XG4gIH1cblxuICBzZXR1cENvbHVtbkRlZmF1bHRzKCkge1xuICAgIC8vIENoZWNrIGNvbHVtbnMgZm9yIGNlbGwgb3B0aW9uIHR5cGVzXG4gICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgaWYgKGNvbHVtbiAmJiBjb2x1bW4udHlwZSkge1xuICAgICAgICBzd2l0Y2ggKGNvbHVtbi50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICAvLyBTZXQgb3B0aW9ucyBiYXNlZCBvbiBkYXRlcyBpZiB0aGVyZSBhcmUgbm9uZVxuICAgICAgICAgICAgY29sdW1uLm9wdGlvbnMgPSBjb2x1bW4ub3B0aW9ucyB8fCB0aGlzLmdldERlZmF1bHRPcHRpb25zKGNvbHVtbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBpZiAodGhpcy5jb25maWcucGFnaW5nICYmIHRoaXMuY29uZmlnLnBhZ2luZy5jdXJyZW50ICE9PSB0aGlzLmxhc3RQYWdlKSB7XG4gICAgICB0aGlzLnJvd1NlbGVjdEhhbmRsZXIoKTtcbiAgICAgIHRoaXMuc2hvd1NlbGVjdEFsbE1lc3NhZ2UgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5sYXN0UGFnZSA9IHRoaXMuY29uZmlnLnBhZ2luZyA/IHRoaXMuY29uZmlnLnBhZ2luZy5jdXJyZW50IDogMTtcbiAgfVxuXG4gIGdldFBhZ2VTdGFydCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5wYWdpbmcgPyAodGhpcy5kYXRhUHJvdmlkZXIucGFnZSAtIDEpICogdGhpcy5kYXRhUHJvdmlkZXIucGFnZVNpemUgOiAwO1xuICB9XG5cbiAgZ2V0UGFnZUVuZCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5wYWdpbmcgJiYgdGhpcy5kYXRhUHJvdmlkZXIucGFnZVNpemUgPiAtMSA/IHRoaXMuZ2V0UGFnZVN0YXJ0KCkgKyB0aGlzLmRhdGFQcm92aWRlci5wYWdlU2l6ZSA6IHRoaXMucm93cy5sZW5ndGg7XG4gIH1cblxuICBnZXRSb3dDb250cm9sRm9ybShpKTogQWJzdHJhY3RDb250cm9sIHtcbiAgICBjb25zdCB0YWJsZUZvcm1Sb3dzID0gPEZvcm1BcnJheT50aGlzLnRhYmxlRm9ybS5jb250cm9sc1sncm93cyddO1xuICAgIHJldHVybiB0YWJsZUZvcm1Sb3dzLmNvbnRyb2xzW2ldO1xuICB9XG5cbiAgb25GaWx0ZXJDbGljayhjb2x1bW4sIGZpbHRlcikge1xuICAgIGlmIChmaWx0ZXIucmFuZ2UgJiYgIWNvbHVtbi5jYWxlbmRhclNob3cpIHtcbiAgICAgIGNvbHVtbi5jYWxlbmRlclNob3cgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb2x1bW4uZmlsdGVyKSAmJiBjb2x1bW4ubXVsdGlwbGUpIHtcbiAgICAgIGlmICh+Y29sdW1uLmZpbHRlci5pbmRleE9mKGZpbHRlcikpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGZpbHRlclxuICAgICAgICBjb2x1bW4uZmlsdGVyLnNwbGljZShjb2x1bW4uZmlsdGVyLmluZGV4T2YoZmlsdGVyKSwgMSk7XG4gICAgICAgIGlmIChmaWx0ZXIucmFuZ2UpIHtcbiAgICAgICAgICBjb2x1bW4uY2FsZW5kZXJTaG93ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29sdW1uLmZpbHRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb2x1bW4uZmlsdGVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQWRkIGZpbHRlclxuICAgICAgICBjb2x1bW4uZmlsdGVyLnB1c2goZmlsdGVyKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbHVtbi5tdWx0aXBsZSkge1xuICAgICAgY29sdW1uLmZpbHRlciA9IG5ldyBBcnJheSgpO1xuICAgICAgY29sdW1uLmZpbHRlci5wdXNoKEhlbHBlcnMuaXNCbGFuayhmaWx0ZXIudmFsdWUpID8gZmlsdGVyIDogZmlsdGVyLnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sdW1uLmZpbHRlciA9IEhlbHBlcnMuaXNCbGFuayhmaWx0ZXIudmFsdWUpID8gZmlsdGVyIDogZmlsdGVyLnZhbHVlO1xuICAgIH1cbiAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlKCk7XG4gIH1cblxuICBvbkZpbHRlckNsZWFyKGNvbHVtbjogYW55KTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb2x1bW4uZmlsdGVyID0gbnVsbDtcbiAgICAgIGNvbHVtbi5mcmVldGV4dEZpbHRlciA9IG51bGw7XG4gICAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlKCk7XG4gICAgICBpZiAoY29sdW1uLm9yaWdpbmFsT3B0aW9ucykge1xuICAgICAgICBjb2x1bW4ub3B0aW9ucyA9IGNvbHVtbi5vcmlnaW5hbE9wdGlvbnM7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjbGVhckFsbFNvcnRBbmRGaWx0ZXJzKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXJpbmcpIHtcbiAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgY29sdW1uLmZpbHRlciA9IG51bGw7XG4gICAgICAgIGNvbHVtbi5zb3J0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBtZXRob2QgdXBkYXRlcyB0aGUgcm93IGRhdGEgdG8gcmVmbGVjdCB0aGUgYWN0aXZlIGZpbHRlcnMuXG4gICAqL1xuICBvbkZpbHRlckNoYW5nZShldmVudD86IEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmZpbHRlcmluZykge1xuICAgICAgLy8gQXJyYXkgb2YgZmlsdGVyc1xuICAgICAgY29uc3QgZmlsdGVycyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbCkgPT4gIUhlbHBlcnMuaXNFbXB0eShjb2wuZmlsdGVyKSk7XG4gICAgICBpZiAoZmlsdGVycy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHF1ZXJ5ID0ge307XG4gICAgICAgIGZvciAoY29uc3QgY29sdW1uIG9mIGZpbHRlcnMpIHtcbiAgICAgICAgICBpZiAoSGVscGVycy5pc0Z1bmN0aW9uKGNvbHVtbi5tYXRjaCkpIHtcbiAgICAgICAgICAgIHF1ZXJ5W2NvbHVtbi5uYW1lXSA9ICh2YWx1ZSwgcmVjb3JkKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBjb2x1bW4ubWF0Y2gocmVjb3JkLCBjb2x1bW4uZmlsdGVyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4ucHJlRmlsdGVyICYmIEhlbHBlcnMuaXNGdW5jdGlvbihjb2x1bW4ucHJlRmlsdGVyKSkge1xuICAgICAgICAgICAgcXVlcnkgPSBPYmplY3QuYXNzaWduKHt9LCBxdWVyeSwgY29sdW1uLnByZUZpbHRlcih0aGlzLmVzY2FwZUNoYXJhY3RlcnMoY29sdW1uLmZpbHRlcikpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY29sdW1uLmZpbHRlcikpIHtcbiAgICAgICAgICAgIC8vIFRoZSBmaWx0ZXJzIGFyZSBhbiBhcnJheSAobXVsdGktc2VsZWN0KSwgY2hlY2sgdmFsdWVcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0gY29sdW1uLmZpbHRlcjtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgYW4gYXJyYXkgb2Yge3ZhbHVlOiAnJywgbGFiZWxzOiAnJ31cbiAgICAgICAgICAgIGlmIChvcHRpb25zWzBdLnZhbHVlIHx8IG9wdGlvbnNbMF0ubGFiZWwpIHtcbiAgICAgICAgICAgICAgb3B0aW9ucyA9IGNvbHVtbi5maWx0ZXIubWFwKChvcHQpID0+IG9wdC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWVyeVtjb2x1bW4ubmFtZV0gPSB7IGFueTogb3B0aW9ucyB9O1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29sdW1uLnR5cGUgJiYgY29sdW1uLnR5cGUgPT09ICdkYXRlJykge1xuICAgICAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXIuc3RhcnREYXRlICYmIGNvbHVtbi5maWx0ZXIuZW5kRGF0ZSkge1xuICAgICAgICAgICAgICBxdWVyeVtjb2x1bW4ubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgbWluOiBkYXRlRm5zLnN0YXJ0T2ZEYXkoY29sdW1uLmZpbHRlci5zdGFydERhdGUpLFxuICAgICAgICAgICAgICAgIG1heDogZGF0ZUZucy5zdGFydE9mRGF5KGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZEYXkoY29sdW1uLmZpbHRlci5lbmREYXRlKSwgMSkpLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcXVlcnlbY29sdW1uLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgIG1pbjogY29sdW1uLmZpbHRlci5taW4gPyBkYXRlRm5zLmFkZERheXMoZGF0ZUZucy5zdGFydE9mVG9kYXkoKSwgY29sdW1uLmZpbHRlci5taW4pIDogZGF0ZUZucy5zdGFydE9mVG9kYXkoKSxcbiAgICAgICAgICAgICAgICBtYXg6IGNvbHVtbi5maWx0ZXIubWF4ID8gZGF0ZUZucy5hZGREYXlzKGRhdGVGbnMuc3RhcnRPZlRvbW9ycm93KCksIGNvbHVtbi5maWx0ZXIubWF4KSA6IGRhdGVGbnMuc3RhcnRPZlRvbW9ycm93KCksXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXJ5W2NvbHVtbi5uYW1lXSA9IGNvbHVtbi5maWx0ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChIZWxwZXJzLmlzRnVuY3Rpb24odGhpcy5jb25maWcuZmlsdGVyaW5nKSkge1xuICAgICAgICAgIHRoaXMuY29uZmlnLmZpbHRlcmluZyhxdWVyeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLmZpbHRlciA9IHF1ZXJ5O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9kYXRhUHJvdmlkZXIuZmlsdGVyID0ge307XG4gICAgICB9XG4gICAgICAvLyBUcmlja2xlIGRvd24gdG8ga2VlcCBzb3J0XG4gICAgICAvLyB0aGlzLm9uU29ydENoYW5nZSh0aGlzLmN1cnJlbnRTb3J0Q29sdW1uKTtcbiAgICAgIHRoaXMuZmlyZVRhYmxlQ2hhbmdlRXZlbnQoKTtcblxuICAgICAgLy8gSWYgcGFnaW5nLCByZXNldCBwYWdlXG4gICAgICBpZiAodGhpcy5jb25maWcucGFnaW5nKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLnBhZ2luZy5jdXJyZW50ID0gMTtcbiAgICAgIH1cbiAgICAgIC8vIFJlbW92ZSBhbGwgc2VsZWN0aW9uIG9uIHNvcnQgY2hhbmdlIGlmIHNlbGVjdGlvbiBpcyBvblxuICAgICAgaWYgKHRoaXMuY29uZmlnLnJvd1NlbGVjdGlvblN0eWxlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlc2NhcGVDaGFyYWN0ZXJzKGZpbHRlcikge1xuICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGZpbHRlci5yZXBsYWNlKC8nL2csICdcXCdcXCcnKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlcjtcbiAgfVxuXG4gIGlzRmlsdGVyQWN0aXZlKGNvbHVtbiwgZmlsdGVyKTogYm9vbGVhbiB7XG4gICAgLy8gVE9ETzogVGhpcyBuZWVkcyB0byBiZSByZWZhY3RvcmVkXG4gICAgbGV0IGlzQWN0aXZlID0gZmFsc2U7XG4gICAgaWYgKGNvbHVtbiAmJiAhSGVscGVycy5pc0JsYW5rKGNvbHVtbi5maWx0ZXIpICYmICFIZWxwZXJzLmlzQmxhbmsoZmlsdGVyKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29sdW1uLmZpbHRlcikpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWx0ZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaXNBY3RpdmUgPSBjb2x1bW4uZmlsdGVyLnNvbWUoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmxhYmVsID09PSBmaWx0ZXIubGFiZWw7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNBY3RpdmUgPSBjb2x1bW4uZmlsdGVyLmluY2x1ZGVzKGZpbHRlcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29sdW1uLmZpbHRlciA9PT0gdHlwZW9mIGZpbHRlcikge1xuICAgICAgICAgIGlzQWN0aXZlID0gY29sdW1uLmZpbHRlciA9PT0gZmlsdGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlzQWN0aXZlID0gY29sdW1uLmZpbHRlciA9PT0gZmlsdGVyLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc0FjdGl2ZTtcbiAgfVxuXG4gIG9uU29ydENoYW5nZShjb2x1bW4pIHtcbiAgICB0aGlzLmN1cnJlbnRTb3J0Q29sdW1uID0gY29sdW1uO1xuICAgIGNvbnN0IHNvcnRlZENvbHVtbnM6IGFueSA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKHRoaXNDb2x1bW4pID0+IHtcbiAgICAgIHJldHVybiB0aGlzQ29sdW1uLnNvcnQgJiYgdGhpc0NvbHVtbiAhPT0gdGhpcy5jdXJyZW50U29ydENvbHVtbjtcbiAgICB9KTtcbiAgICBmb3IgKGNvbnN0IHNvcnRlZENvbHVtbiBvZiBzb3J0ZWRDb2x1bW5zKSB7XG4gICAgICBzb3J0ZWRDb2x1bW4uc29ydCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGNvbHVtbikge1xuICAgICAgaWYgKEhlbHBlcnMuaXNGdW5jdGlvbih0aGlzLmNvbmZpZy5zb3J0aW5nKSkge1xuICAgICAgICB0aGlzLmNvbmZpZy5zb3J0aW5nKCk7XG4gICAgICB9IGVsc2UgaWYgKEhlbHBlcnMuaXNGdW5jdGlvbihjb2x1bW4ucHJlU29ydCkpIHtcbiAgICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLnNvcnQgPSBbXS5jb25jYXQoY29sdW1uLnByZVNvcnQoY29sdW1uKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9kYXRhUHJvdmlkZXIuc29ydCA9IFt7IGZpZWxkOiBjb2x1bW4uY29tcGFyZSB8fCBjb2x1bW4ubmFtZSwgcmV2ZXJzZTogY29sdW1uLnNvcnQgPT09ICdkZXNjJyB9XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGaXJlIHRhYmxlIGNoYW5nZSBldmVudFxuICAgIC8vIHRoaXMuZmlyZVRhYmxlQ2hhbmdlRXZlbnQoKTtcblxuICAgIC8vIElmIHBhZ2luZywgcmVzZXQgcGFnZVxuICAgIGlmICh0aGlzLmNvbmZpZy5wYWdpbmcpIHtcbiAgICAgIHRoaXMuY29uZmlnLnBhZ2luZy5jdXJyZW50ID0gMTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWxsIHNlbGVjdGlvbiBvbiBzb3J0IGNoYW5nZSBpZiBzZWxlY3Rpb24gaXMgb25cbiAgICBpZiAodGhpcy5jb25maWcucm93U2VsZWN0aW9uU3R5bGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBmaXJlVGFibGVDaGFuZ2VFdmVudCgpIHtcbiAgICAvLyBDb25zdHJ1Y3QgYSB0YWJsZSBjaGFuZ2Ugb2JqZWN0XG4gICAgY29uc3Qgb25UYWJsZUNoYW5nZTogYW55ID0ge307XG4gICAgY29uc3QgZmlsdGVycyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbCkgPT4gY29sLmZpbHRlciAmJiBjb2wuZmlsdGVyLmxlbmd0aCk7XG4gICAgb25UYWJsZUNoYW5nZS5maWx0ZXIgPSBmaWx0ZXJzLmxlbmd0aCA/IGZpbHRlcnMgOiBmYWxzZTtcbiAgICBvblRhYmxlQ2hhbmdlLnNvcnQgPSB0aGlzLmN1cnJlbnRTb3J0Q29sdW1uID8gdGhpcy5jdXJyZW50U29ydENvbHVtbiA6IGZhbHNlO1xuICAgIG9uVGFibGVDaGFuZ2Uucm93cyA9IHRoaXMucm93cztcblxuICAgIC8vIEVtaXQgZXZlbnRcbiAgICB0aGlzLm9uVGFibGVDaGFuZ2UuZW1pdChvblRhYmxlQ2hhbmdlKTtcbiAgfVxuXG4gIGZpbmRDb2x1bW5JbmRleCh2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5jb2x1bW5zW2ldLm5hbWUgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIG9uT3JkZXJDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBvbGRJbmRleCA9IHRoaXMuZmluZENvbHVtbkluZGV4KGV2ZW50LmZpcnN0Lm5hbWUpO1xuICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5maW5kQ29sdW1uSW5kZXgoZXZlbnQuc2Vjb25kLm5hbWUpO1xuICAgIHRoaXMuY29sdW1ucy5zcGxpY2UobmV3SW5kZXgsIDAsIHRoaXMuY29sdW1ucy5zcGxpY2Uob2xkSW5kZXgsIDEpWzBdKTtcbiAgICB0aGlzLm9uU29ydENoYW5nZSh0aGlzLmN1cnJlbnRTb3J0Q29sdW1uKTtcbiAgfVxuXG4gIGV4cGFuZEFsbE9uUGFnZShleHBhbmRlZCkge1xuICAgIHRoaXMuY29uZmlnLmV4cGFuZEFsbCA9ICFleHBhbmRlZDtcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiB0aGlzLmRhdGFQcm92aWRlci5saXN0KSB7XG4gICAgICByb3cuX2V4cGFuZGVkID0gdGhpcy5jb25maWcuZXhwYW5kQWxsO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdFBhZ2UoZGF0YT86IGFueSkge1xuICAgIGlmICghdGhpcy5tYXN0ZXIpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsKGZhbHNlKTtcbiAgICAgIC8vIE9ubHkgc2hvdyB0aGUgc2VsZWN0IGFsbCBtZXNzYWdlIHdoZW4gdGhlcmUgaXMgb25seSBvbmUgbmV3IHBhZ2Ugc2VsZWN0ZWQgYXQgYSB0aW1lXG4gICAgICB0aGlzLnNlbGVjdGVkUGFnZUNvdW50ID0gdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCA+IDAgPyB0aGlzLnNlbGVjdGVkUGFnZUNvdW50IC0gMSA6IDA7XG4gICAgICB0aGlzLnNob3dTZWxlY3RBbGxNZXNzYWdlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgLy8gdGhpcy5wYWdlZERhdGEgPSB0aGlzLnJvd3Muc2xpY2UodGhpcy5nZXRQYWdlU3RhcnQoKSwgdGhpcy5nZXRQYWdlRW5kKCkpO1xuICAgICAgZm9yIChjb25zdCByb3cgb2YgdGhpcy5wYWdlZERhdGEpIHtcbiAgICAgICAgcm93Ll9zZWxlY3RlZCA9IHRoaXMubWFzdGVyO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuZGF0YVByb3ZpZGVyLmxpc3QuZmlsdGVyKChyKSA9PiByLl9zZWxlY3RlZCk7XG4gICAgICB0aGlzLnBhZ2VTZWxlY3RlZCA9IHRoaXMucGFnZWREYXRhLmZpbHRlcigocikgPT4gci5fc2VsZWN0ZWQpO1xuICAgICAgdGhpcy5lbWl0U2VsZWN0ZWQodGhpcy5zZWxlY3RlZCk7XG4gICAgICAvLyBPbmx5IHNob3cgdGhlIHNlbGVjdCBhbGwgbWVzc2FnZSB3aGVuIHRoZXJlIGlzIG9ubHkgb25lIG5ldyBwYWdlIHNlbGVjdGVkIGF0IGEgdGltZVxuICAgICAgdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCsrO1xuICAgICAgdGhpcy5zaG93U2VsZWN0QWxsTWVzc2FnZSA9IHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgPT09IDEgJiYgdGhpcy5zZWxlY3RlZC5sZW5ndGggIT09IHRoaXMuZGF0YVByb3ZpZGVyLnRvdGFsO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEFsbCh2YWx1ZSkge1xuICAgIHRoaXMubWFzdGVyID0gdmFsdWU7XG4gICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCByb3cgb2YgdGhpcy5kYXRhUHJvdmlkZXIubGlzdCkge1xuICAgICAgcm93Ll9zZWxlY3RlZCA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWUgPyB0aGlzLmRhdGFQcm92aWRlci5saXN0IDogW107XG4gICAgdGhpcy5zaG93U2VsZWN0QWxsTWVzc2FnZSA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgPSB0aGlzLnNlbGVjdGVkUGFnZUNvdW50ID4gMCA/IHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgLSAxIDogMDtcbiAgICB0aGlzLnJvd1NlbGVjdEhhbmRsZXIoKTtcbiAgfVxuXG4gIHJvd1NlbGVjdEhhbmRsZXIoZGF0YT86IGFueSkge1xuICAgIC8vIHRoaXMucGFnZWREYXRhID0gdGhpcy5yb3dzLnNsaWNlKHRoaXMuZ2V0UGFnZVN0YXJ0KCksIHRoaXMuZ2V0UGFnZUVuZCgpKTtcbiAgICB0aGlzLnBhZ2VTZWxlY3RlZCA9IHRoaXMucGFnZWREYXRhLmZpbHRlcigocikgPT4gci5fc2VsZWN0ZWQpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmRhdGFQcm92aWRlci5saXN0LmZpbHRlcigocikgPT4gci5fc2VsZWN0ZWQpO1xuICAgIGlmICh0aGlzLnBhZ2VTZWxlY3RlZC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMubWFzdGVyID0gZmFsc2U7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGFnZVNlbGVjdGVkLmxlbmd0aCA9PT0gdGhpcy5wYWdlZERhdGEubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hc3RlciA9IHRydWU7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXN0ZXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG5cbiAgICAgIC8vIEJyZWFraW5nIHRoZSBzZWxlY3RlZCBwYWdlIGNvdW50XG4gICAgICB0aGlzLnNob3dTZWxlY3RBbGxNZXNzYWdlID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbGVjdGVkUGFnZUNvdW50ID0gdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCA+IDAgPyB0aGlzLnNlbGVjdGVkUGFnZUNvdW50IC0gMSA6IDA7XG4gICAgfVxuICAgIHRoaXMuZW1pdFNlbGVjdGVkKHRoaXMuc2VsZWN0ZWQpO1xuICB9XG5cbiAgZW1pdFNlbGVjdGVkKHNlbGVjdGVkKSB7XG4gICAgdGhpcy5vblJvd1NlbGVjdC5lbWl0KHsgbGVuZ3RoOiBzZWxlY3RlZC5sZW5ndGgsIHNlbGVjdGVkIH0pO1xuICB9XG5cbiAgcm93Q2xpY2tIYW5kbGVyKHJvdykge1xuICAgIGlmICh0aGlzLmNvbmZpZy5yb3dTZWxlY3QpIHtcbiAgICAgIHRoaXMuYWN0aXZlSWQgPSByb3cuaWQgfHwgMDtcbiAgICAgIHRoaXMub25Sb3dDbGljay5lbWl0KHJvdyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGVmYXVsdE9wdGlvbnMoY29sdW1uKSB7XG4gICAgLy8gVE9ETyAtIG5lZWRzIHRvIGNvbWUgZnJvbSBsYWJlbCBzZXJ2aWNlIC0gaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvaXNzdWVzLzExNlxuICAgIGNvbnN0IG9wdHM6IGFueVtdID0gW1xuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDFEYXksIG1pbjogLTEsIG1heDogMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDdEYXlzLCBtaW46IC03LCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QzMERheXMsIG1pbjogLTMwLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3Q5MERheXMsIG1pbjogLTkwLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QxWWVhciwgbWluOiAtMzY2LCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQxRGF5LCBtaW46IDAsIG1heDogMSB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDdEYXlzLCBtaW46IDAsIG1heDogNyB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDMwRGF5cywgbWluOiAwLCBtYXg6IDMwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0OTBEYXlzLCBtaW46IDAsIG1heDogOTAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQxWWVhciwgbWluOiAwLCBtYXg6IDM2NiB9LFxuICAgIF07XG5cbiAgICBpZiAoY29sdW1uICYmIGNvbHVtbi5yYW5nZSkge1xuICAgICAgb3B0cy5wdXNoKHtcbiAgICAgICAgbGFiZWw6IHRoaXMubGFiZWxzLmN1c3RvbURhdGVSYW5nZSxcbiAgICAgICAgcmFuZ2U6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdHM7XG4gIH1cblxuICBvbkNhbGVuZGVyU2VsZWN0KGNvbHVtbiwgZXZlbnQpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChldmVudC5zdGFydERhdGUgJiYgZXZlbnQuZW5kRGF0ZSkge1xuICAgICAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlKCk7XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25GaWx0ZXJLZXl3b3Jkcyhjb25maWcpIHtcbiAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5maWx0ZXJpbmcgJiYgY29uZmlnLmZpbHRlcmluZy5mcmVldGV4dEZpbHRlcikge1xuICAgICAgY29uc3QgZmlsdGVyS2V5d29yZHMgPSBjb25maWcuZmlsdGVyaW5nLmZyZWV0ZXh0RmlsdGVyLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoIWNvbmZpZy5maWx0ZXJpbmcub3JpZ2luYWxPcHRpb25zKSB7XG4gICAgICAgIGNvbmZpZy5maWx0ZXJpbmcub3JpZ2luYWxPcHRpb25zID0gY29uZmlnLmZpbHRlcmluZy5vcHRpb25zO1xuICAgICAgfVxuICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IGNvbmZpZy5maWx0ZXJpbmcub3JpZ2luYWxPcHRpb25zLmZpbHRlcigob3B0aW9uKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG9wdGlvbiAmJiBvcHRpb24ubGFiZWwgPyBvcHRpb24ubGFiZWwgOiBvcHRpb247XG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKSA/IHZhbHVlLnRvTG93ZXJDYXNlKCkgOiB2YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBmaWx0ZXJLZXl3b3Jkcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKH52YWx1ZS5pbmRleE9mKGZpbHRlcktleXdvcmRzKSB8fCB+dmFsdWUuaW5kZXhPZihmaWx0ZXJLZXl3b3JkcykpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIGNvbmZpZy5maWx0ZXJpbmcub3B0aW9ucyA9IG5ld09wdGlvbnM7XG4gICAgICBjb25maWcuZmlsdGVyaW5nLmZpbHRlciA9IGNvbmZpZy5maWx0ZXJpbmcuZnJlZXRleHRGaWx0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy5maWx0ZXJpbmcub3B0aW9ucyA9IGNvbmZpZy5maWx0ZXJpbmcub3JpZ2luYWxPcHRpb25zO1xuICAgIH1cbiAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFNldHMgdGhlIFRhYmxlIGludG8gRURJVCBtb2RlLCBiYXNlZCBvbiB0aGUgcm93L2NvbHVtbiBwYXNzZWQgeW91IGNhbiBlbnRlciBpbiBhIGZldyBzdGF0ZXNcbiAgICogKDEpIHNldFRhYmxlRWRpdCgpIC0gZG9uJ3QgcGFzcyBhbnkgdG8gcHV0IHRoZSBGVUxMIHRhYmxlIGludG8gZWRpdCBtb2RlXG4gICAqICgyKSBzZXRUYWJsZUVkaXQoMSkgLSBwYXNzIG9ubHkgcm93IHRvIHB1dCB0aGF0IEZVTEwgcm93IG9mIHRoZSB0YWJsZSBpbnRvIGVkaXQgbW9kZVxuICAgKiAoMykgc2V0VGFibGVFZGl0KDEsIDEpIC0gcGFzcyByb3cgYW5kIGNvbHVtbiB0byBwdXQgdGhhdCBjb2x1bW4gb2YgdGhlIHJvdyBvZiB0aGUgdGFibGUgaW50byBlZGl0IG1vZGVcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICovXG4gIHNldFRhYmxlRWRpdChyb3dOdW1iZXI/OiBudW1iZXIsIGNvbHVtbk51bWJlcj86IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubW9kZSA9IE5vdm9UYWJsZU1vZGUuRURJVDtcbiAgICB0aGlzLl9kYXRhUHJvdmlkZXIuZWRpdCgpO1xuICAgIHRoaXMuX3Jvd3MuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgcm93Ll9lZGl0aW5nID0gcm93Ll9lZGl0aW5nIHx8IHt9O1xuICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbiwgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi52aWV3T25seSkge1xuICAgICAgICAgIHJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV0gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChIZWxwZXJzLmlzRW1wdHkocm93TnVtYmVyKSAmJiBIZWxwZXJzLmlzRW1wdHkoY29sdW1uTnVtYmVyKSkge1xuICAgICAgICAgIHJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV0gPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCFIZWxwZXJzLmlzRW1wdHkocm93TnVtYmVyKSAmJiByb3dJbmRleCA9PT0gTnVtYmVyKHJvd051bWJlcikgJiYgSGVscGVycy5pc0VtcHR5KGNvbHVtbk51bWJlcikpIHtcbiAgICAgICAgICByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAhSGVscGVycy5pc0VtcHR5KHJvd051bWJlcikgJiZcbiAgICAgICAgICAhSGVscGVycy5pc0VtcHR5KGNvbHVtbk51bWJlcikgJiZcbiAgICAgICAgICByb3dJbmRleCA9PT0gTnVtYmVyKHJvd051bWJlcikgJiZcbiAgICAgICAgICBjb2x1bW5JbmRleCA9PT0gTnVtYmVyKGNvbHVtbk51bWJlcilcbiAgICAgICAgKSB7XG4gICAgICAgICAgcm93Ll9lZGl0aW5nW2NvbHVtbi5uYW1lXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm93Ll9lZGl0aW5nW2NvbHVtbi5uYW1lXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gTGVhdmVzIGVkaXQgbW9kZSBmb3IgdGhlIFRhYmxlIGFuZCBwdXRzIGV2ZXJ5dGhpbmcgYmFjayB0byBWSUVXIG9ubHlcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICogQHBhcmFtIGNhbmNlbCAtIHdoZXRoZXIgb3Igbm90IHRvIHNhdmUgZGF0YSBvciB1bmRvXG4gICAqL1xuICBwcml2YXRlIGxlYXZlRWRpdE1vZGUoY2FuY2VsOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5tb2RlID0gTm92b1RhYmxlTW9kZS5WSUVXO1xuICAgIHRoaXMuX3Jvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICByb3cuX2VkaXRpbmcgPSByb3cuX2VkaXRpbmcgfHwge307XG4gICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIHJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV0gPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChjYW5jZWwpIHtcbiAgICAgIHRoaXMuX2RhdGFQcm92aWRlci51bmRvKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGFQcm92aWRlci5jb21taXQoKTtcbiAgICB9XG4gICAgdGhpcy5oaWRlVG9hc3RNZXNzYWdlKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEFkZHMgYSBuZXcgcm93IGludG8gdGhlIHRhYmxlIHRvIGJlIGVkaXRlZCwgY2FuIGJlIGNhbGxlZCBmcm9tIGEgbG9jYWwgcmVmZXJlbmNlIG9mIHRoZSB0YWJsZSBpbiB5b3VyIHRlbXBsYXRlXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICBhZGRFZGl0YWJsZVJvdyhkZWZhdWx0VmFsdWU6IGFueSA9IHt9KTogdm9pZCB7XG4gICAgY29uc3QgdGFibGVGb3JtUm93cyA9IDxGb3JtQXJyYXk+dGhpcy50YWJsZUZvcm0uY29udHJvbHNbJ3Jvd3MnXTtcbiAgICBjb25zdCByb3c6IGFueSA9IHt9O1xuICAgIGNvbnN0IHJvd0NvbnRyb2xzID0gW107XG4gICAgcm93LmNvbnRyb2xzID0ge307XG4gICAgcm93Ll9lZGl0aW5nID0ge307XG4gICAgcm93LnJvd0lkID0gdGhpcy5fcm93cy5sZW5ndGggKyAxO1xuICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgIC8vIFVzZSB0aGUgY29udHJvbCBwYXNzZWQgb3IgdXNlIGEgUmVhZE9ubHlDb250cm9sIHNvIHRoYXQgdGhlIGZvcm0gaGFzIHRoZSB2YWx1ZXNcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBjb2x1bW4uZWRpdG9yQ29uZmlnXG4gICAgICAgID8gQ29udHJvbEZhY3RvcnkuY3JlYXRlKGNvbHVtbi5lZGl0b3JUeXBlLCBjb2x1bW4uZWRpdG9yQ29uZmlnKVxuICAgICAgICA6IG5ldyBSZWFkT25seUNvbnRyb2woeyBrZXk6IGNvbHVtbi5uYW1lIH0pO1xuICAgICAgY29udHJvbC52YWx1ZSA9IG51bGw7IC8vIHJlbW92ZSBjb3BpZWQgY29sdW1uIHZhbHVlXG4gICAgICByb3cuY29udHJvbHNbY29sdW1uLm5hbWVdID0gY29udHJvbDtcbiAgICAgIHJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV0gPSAhY29sdW1uLnZpZXdPbmx5O1xuICAgICAgcm93Q29udHJvbHMucHVzaChjb250cm9sKTtcbiAgICB9KTtcbiAgICB0aGlzLmZvcm1VdGlscy5zZXRJbml0aWFsVmFsdWVzKHJvd0NvbnRyb2xzLCBkZWZhdWx0VmFsdWUsIGZhbHNlKTtcbiAgICB0YWJsZUZvcm1Sb3dzLnB1c2godGhpcy5mb3JtVXRpbHMudG9Gb3JtR3JvdXAocm93Q29udHJvbHMpKTtcbiAgICB0aGlzLl9yb3dzLnB1c2gocm93KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVmFsaWRhdGVzIHRoZSBGb3JtIGluc2lkZSBvZiB0aGUgVGFibGUsIGlmIHRoZXJlIGFyZSBlcnJvcnMgaXQgd2lsbCBkaXNwbGF5L3JldHVybiB0aGUgZXJyb3JzIGZvciBlYWNoIHJvdy5cbiAgICogSWYgdGhlcmUgYXJlIG5vIGVycm9ycywgdGhlbiBpdCB3aWxsIHJldHVybiBPTkxZIHRoZSBjaGFuZ2VkIGRhdGEgZm9yIGVhY2ggcm93LCB0aGUgZGF0YSByZXR1cm5lZCB3aWxsIGJlIGluIHRoZSBmb3JtOlxuICAgKiB7IGlkOiBJRF9PRl9SRUNPUkQsIGtleTogdmFsdWUgfSAtLSBkYXRhIHRoYXQgd2FzIHVwZGF0ZWRcbiAgICogeyBpZDogdW5kZWZpbmVkLCBrZXk6IHZhbHVlIH0gLS0gZGF0YSB0aGF0IHdhcyBhZGRlZFxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgdmFsaWRhdGVBbmRHZXRVcGRhdGVkRGF0YSgpOiB7IGNoYW5nZWQ/OiBhbnlbXTsgZXJyb3JzPzogeyBlcnJvcnM6IGFueTsgcm93OiBhbnk7IGluZGV4OiBudW1iZXIgfVtdIH0ge1xuICAgIGlmICh0aGlzLnRhYmxlRm9ybSAmJiB0aGlzLnRhYmxlRm9ybS5jb250cm9scyAmJiB0aGlzLnRhYmxlRm9ybS5jb250cm9sc1sncm93cyddKSB7XG4gICAgICBjb25zdCBjaGFuZ2VkUm93cyA9IFtdO1xuICAgICAgY29uc3QgZXJyb3JzID0gW107XG4gICAgICAvLyBHbyBvdmVyIHRoZSBGb3JtQXJyYXkncyBjb250cm9sc1xuICAgICAgKHRoaXMudGFibGVGb3JtLmNvbnRyb2xzWydyb3dzJ10gYXMgRm9ybUFycmF5KS5jb250cm9scy5mb3JFYWNoKChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBsZXQgY2hhbmdlZFJvdyA9IG51bGw7XG4gICAgICAgIGxldCBlcnJvciA9IG51bGw7XG4gICAgICAgIC8vIEdvIG92ZXIgdGhlIGZvcm0gZ3JvdXAgY29udHJvbHNcbiAgICAgICAgT2JqZWN0LmtleXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtR3JvdXAuY29udHJvbHNba2V5XTtcbiAgICAgICAgICAvLyBIYW5kbGUgdmFsdWUgY2hhbmdpbmdcbiAgICAgICAgICBpZiAoY29udHJvbCAmJiBjb250cm9sLmRpcnR5ICYmICFjb250cm9sLmVycm9ycykge1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2VkUm93KSB7XG4gICAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgSUQsIHNvIHdlIGhhdmUgc29tZSBrZXkgdG8gc2F2ZSBhZ2FpbnN0XG4gICAgICAgICAgICAgIGNoYW5nZWRSb3cgPSB7fTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd3NbaW5kZXhdLmlkKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZFJvdy5pZCA9IHRoaXMuX3Jvd3NbaW5kZXhdLmlkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBkaXJ0eSwgZ3JhYiB2YWx1ZSBvZmYgdGhlIGZvcm1cbiAgICAgICAgICAgIGNoYW5nZWRSb3dba2V5XSA9IHRoaXMudGFibGVGb3JtLnZhbHVlWydyb3dzJ11baW5kZXhdW2tleV07XG4gICAgICAgICAgICAvLyBTZXQgdmFsdWUgYmFjayB0byByb3cgKHNob3VsZCBiZSBhbHJlYWR5IGRvbmUgdmlhIHRoZSBzZXJ2ZXIgY2FsbCwgYnV0IGRvIGl0IGFueXdheSlcbiAgICAgICAgICAgIHRoaXMuX3Jvd3NbaW5kZXhdW2tleV0gPSBjaGFuZ2VkUm93W2tleV07XG4gICAgICAgICAgfSBlbHNlIGlmIChjb250cm9sICYmIGNvbnRyb2wuZXJyb3JzKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JzXG4gICAgICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICAgIGVycm9yID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvcltrZXldID0gY29udHJvbC5lcnJvcnM7XG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY2hhbmdlZFJvdykge1xuICAgICAgICAgIGNoYW5nZWRSb3dzLnB1c2goY2hhbmdlZFJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goeyBlcnJvcnM6IGVycm9yLCByb3c6IHRoaXMuX3Jvd3NbaW5kZXhdLCBpbmRleCB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXQgPSB7fTtcbiAgICAgIC8vIFJldHVybiBlcnJvcnMgaWYgYW55LCBvdGhlcndpc2UgcmV0dXJuIHRoZSBjaGFuZ2VkIHJvd3NcbiAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB7IGNoYW5nZWQ6IGNoYW5nZWRSb3dzIH07XG4gICAgICB9XG4gICAgICByZXR1cm4geyBlcnJvcnMgfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJlZnJlc2ggdGhlIGRhdGEgcHJvdmlkZXIgYW5kIGxlYXZlIGVkaXQgbW9kZVxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgY2FuY2VsRWRpdGluZygpOiB2b2lkIHtcbiAgICB0aGlzLmxlYXZlRWRpdE1vZGUodHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJlZnJlc2ggdGhlIGRhdGEgcHJvdmlkZXIgYW5kIGxlYXZlIGVkaXQgbW9kZVxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgc2F2ZUNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5sZWF2ZUVkaXRNb2RlKGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRGlzcGxheXMgYSB0b2FzdCBtZXNzYWdlIGluc2lkZSBvZiB0aGUgdGFibGVcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICovXG4gIGRpc3BsYXlUb2FzdE1lc3NhZ2UodG9hc3Q6IHsgaWNvbjogc3RyaW5nOyB0aGVtZTogc3RyaW5nOyBtZXNzYWdlOiBzdHJpbmcgfSwgaGlkZURlbGF5PzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy50b2FzdCA9IHRvYXN0O1xuICAgIGlmIChoaWRlRGVsYXkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oaWRlVG9hc3RNZXNzYWdlKCksIGhpZGVEZWxheSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBGb3JjZSBoaWRlIHRoZSB0b2FzdCBtZXNzYWdlXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICBoaWRlVG9hc3RNZXNzYWdlKCk6IHZvaWQge1xuICAgIHRoaXMudG9hc3QgPSBudWxsO1xuICAgIC8vIEhhY2sgdG8gbWFrZSB0aGUgdGFibGUgZGlzcGxheSBwcm9wZXJseSBhZnRlciBoaWRpbmcgdGhlIHRvYXN0XG4gICAgdGhpcy5ncm9zc0ZsYWdUb0F2b2lkVGhlVGFibGVGcm9tQmVpbmdVZ2x5V2hlbkhpZGluZ1RoZVRvYXN0ID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZ3Jvc3NGbGFnVG9Bdm9pZFRoZVRhYmxlRnJvbUJlaW5nVWdseVdoZW5IaWRpbmdUaGVUb2FzdCA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBkaXNwbGF5IHRoZSBsb2FkaW5nIG92ZXJsYXkgb24gdGhlIHRhYmxlXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICB0b2dnbGVMb2FkaW5nKHNob3c6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBzaG93O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBoaWRlIGEgY29sdW1uIGluIGVkaXQgb3IgdmlldyBtb2RlXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICBpc0NvbHVtbkhpZGRlbihjb2x1bW46IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVkaXRpbmcgPyAhIWNvbHVtbi5oaWRlQ29sdW1uT25FZGl0IDogISFjb2x1bW4uaGlkZUNvbHVtbk9uVmlldztcbiAgfVxufVxuIl19