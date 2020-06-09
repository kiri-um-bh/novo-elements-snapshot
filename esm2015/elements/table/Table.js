/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/Table.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const NovoTableMode = {
    VIEW: 1,
    EDIT: 2,
};
export { NovoTableMode };
NovoTableMode[NovoTableMode.VIEW] = 'VIEW';
NovoTableMode[NovoTableMode.EDIT] = 'EDIT';
export class NovoTableElement {
    /**
     * @param {?} labels
     * @param {?} formUtils
     * @param {?} builder
     */
    constructor(labels, formUtils, builder) {
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
    /**
     * @param {?} rows
     * @return {?}
     */
    set rows(rows) {
        this.dataProvider = rows;
        if (rows && rows.length > 0) {
            this.setupColumnDefaults();
        }
        // this is a temporary/hacky fix until async dataloading is handled within the table
        if (!this.skipSortAndFilterClear) {
            this.clearAllSortAndFilters();
        }
    }
    /**
     * @return {?}
     */
    get rows() {
        return this._rows;
    }
    /**
     * @param {?} dp
     * @return {?}
     */
    set dataProvider(dp) {
        this._dataProvider = Array.isArray(dp) ? new PagedArrayCollection(dp) : dp;
        this._dataProvider.dataChange.pipe(debounceTime(100)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            switch (event.type) {
                case CollectionEvent.CHANGE:
                    this._rows = event.data;
                    // Setup form
                    this.tableForm = this.builder.group({
                        rows: this.builder.array([]),
                    });
                    // Remove all selection on sort change if selection is on
                    if (this.config.rowSelectionStyle === 'checkbox') {
                        this.pagedData = event.data;
                        this.pageSelected = this.pagedData.filter((/**
                         * @param {?} r
                         * @return {?}
                         */
                        (r) => r._selected));
                        this.rowSelectHandler();
                    }
                    // Find that columns we might need to sum up via the footer
                    /** @type {?} */
                    let columnsToSum = [];
                    /** @type {?} */
                    const columnSums = {};
                    if (this.config.footers) {
                        this.config.footers.forEach((/**
                         * @param {?} config
                         * @return {?}
                         */
                        (config) => {
                            columnsToSum.push(...config.columns);
                        }));
                        // Only have unique columns, filter out duplicates
                        columnsToSum = columnsToSum.filter((/**
                         * @param {?} item
                         * @param {?} index
                         * @param {?} array
                         * @return {?}
                         */
                        (item, index, array) => array.indexOf(item) === index));
                    }
                    // Make a form for each row
                    /** @type {?} */
                    const tableFormRows = (/** @type {?} */ (this.tableForm.controls['rows']));
                    this._rows.forEach((/**
                     * @param {?} row
                     * @param {?} index
                     * @return {?}
                     */
                    (row, index) => {
                        /** @type {?} */
                        const rowControls = [];
                        row.controls = {};
                        row._editing = {};
                        row._expanded = this.config.expandAll;
                        row.rowId = this._rows.length;
                        this.columns.forEach((/**
                         * @param {?} column
                         * @return {?}
                         */
                        (column) => {
                            // Use the control passed or use a ReadOnlyControl so that the form has the values
                            /** @type {?} */
                            const control = column.editorConfig
                                ? ControlFactory.create(column.editorType, column.editorConfig)
                                : new ReadOnlyControl({ key: column.name });
                            row.controls[column.name] = control;
                            rowControls.push(control);
                        }));
                        this.formUtils.setInitialValues(rowControls, row, false);
                        tableFormRows.push(this.formUtils.toFormGroup(rowControls));
                        // Setup the total footer if configured
                        // Array of keys to total
                        if (columnsToSum.length !== 0) {
                            columnsToSum.forEach((/**
                             * @param {?} column
                             * @return {?}
                             */
                            (column) => {
                                if (Helpers.isBlank(columnSums[column])) {
                                    columnSums[column] = 0;
                                }
                                columnSums[column] += row[column];
                            }));
                        }
                    }));
                    if (this.mode === NovoTableMode.EDIT) {
                        this.setTableEdit();
                    }
                    // Setup the footers (if any)
                    if (this.config.footers) {
                        this.footers = [];
                        this.config.footers.forEach((/**
                         * @param {?} footerConfig
                         * @param {?} footerConfigIndex
                         * @return {?}
                         */
                        (footerConfig, footerConfigIndex) => {
                            /** @type {?} */
                            const footer = {};
                            footer[footerConfig.labelColumn] = footerConfig.label;
                            footerConfig.columns.forEach((/**
                             * @param {?} column
                             * @return {?}
                             */
                            (column) => {
                                if (footerConfig.method === 'AVG' && this._rows.length !== 0) {
                                    footer[column] = columnSums[column] / this._rows.length;
                                }
                                else {
                                    footer[column] = columnSums[column];
                                }
                            }));
                            this.footers.push(footer);
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
    }
    /**
     * @return {?}
     */
    get dataProvider() {
        return this._dataProvider;
    }
    /**
     * @return {?}
     */
    get editing() {
        return this.mode === NovoTableMode.EDIT;
    }
    /**
     * @return {?}
     */
    get formValue() {
        return this.tableForm.value;
    }
    /**
     * @param {?} event
     * @param {?} column
     * @return {?}
     */
    onDropdownToggled(event, column) {
        this.toggledDropdownMap[column] = event;
    }
    /**
     * @return {?}
     */
    focusInput() {
        if (this.filterInputs && this.filterInputs.length) {
            this.filterInputs.forEach((/**
             * @param {?} filterInput
             * @return {?}
             */
            (filterInput) => {
                if (filterInput.nativeElement) {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => filterInput.nativeElement.focus()), 0);
                }
            }));
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPageChange(event) {
        // this.dataProvider.page = event.page;
        // this.dataProvider.pageSize = event.itemsPerPage;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    getOptionDataAutomationId(option) {
        if (!Helpers.isBlank(option.value)) {
            return option.value;
        }
        return option;
    }
    /**
     * @return {?}
     */
    setupColumnDefaults() {
        // Check columns for cell option types
        this.columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            if (column && column.type) {
                switch (column.type) {
                    case 'date':
                        // Set options based on dates if there are none
                        column.options = column.options || this.getDefaultOptions(column);
                        break;
                    default:
                        break;
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.config.paging && this.config.paging.current !== this.lastPage) {
            this.rowSelectHandler();
            this.showSelectAllMessage = false;
        }
        this.lastPage = this.config.paging ? this.config.paging.current : 1;
    }
    /**
     * @return {?}
     */
    getPageStart() {
        return this.config.paging ? (this.dataProvider.page - 1) * this.dataProvider.pageSize : 0;
    }
    /**
     * @return {?}
     */
    getPageEnd() {
        return this.config.paging && this.dataProvider.pageSize > -1 ? this.getPageStart() + this.dataProvider.pageSize : this.rows.length;
    }
    /**
     * @param {?} i
     * @return {?}
     */
    getRowControlForm(i) {
        /** @type {?} */
        const tableFormRows = (/** @type {?} */ (this.tableForm.controls['rows']));
        return tableFormRows.controls[i];
    }
    /**
     * @param {?} column
     * @param {?} filter
     * @return {?}
     */
    onFilterClick(column, filter) {
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
    }
    /**
     * @param {?} column
     * @return {?}
     */
    onFilterClear(column) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            column.filter = null;
            column.freetextFilter = null;
            this.onFilterChange();
            if (column.originalOptions) {
                column.options = column.originalOptions;
            }
        }));
    }
    /**
     * @return {?}
     */
    clearAllSortAndFilters() {
        if (this.config.filtering) {
            this.columns.forEach((/**
             * @param {?} column
             * @return {?}
             */
            (column) => {
                column.filter = null;
                column.sort = null;
            }));
        }
    }
    /**
     * \@description This method updates the row data to reflect the active filters.
     * @param {?=} event
     * @return {?}
     */
    onFilterChange(event) {
        if (this.config.filtering) {
            // Array of filters
            /** @type {?} */
            const filters = this.columns.filter((/**
             * @param {?} col
             * @return {?}
             */
            (col) => !Helpers.isEmpty(col.filter)));
            if (filters.length) {
                /** @type {?} */
                let query = {};
                for (const column of filters) {
                    if (Helpers.isFunction(column.match)) {
                        query[column.name] = (/**
                         * @param {?} value
                         * @param {?} record
                         * @return {?}
                         */
                        (value, record) => {
                            return column.match(record, column.filter);
                        });
                    }
                    else if (column.preFilter && Helpers.isFunction(column.preFilter)) {
                        query = Object.assign({}, query, column.preFilter(this.escapeCharacters(column.filter)));
                    }
                    else if (Array.isArray(column.filter)) {
                        // The filters are an array (multi-select), check value
                        /** @type {?} */
                        let options = column.filter;
                        // We have an array of {value: '', labels: ''}
                        if (options[0].value || options[0].label) {
                            options = column.filter.map((/**
                             * @param {?} opt
                             * @return {?}
                             */
                            (opt) => opt.value));
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
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    escapeCharacters(filter) {
        if (typeof filter === 'string') {
            return filter.replace(/'/g, '\'\'');
        }
        return filter;
    }
    /**
     * @param {?} column
     * @param {?} filter
     * @return {?}
     */
    isFilterActive(column, filter) {
        // TODO: This needs to be refactored
        /** @type {?} */
        let isActive = false;
        if (column && !Helpers.isBlank(column.filter) && !Helpers.isBlank(filter)) {
            if (Array.isArray(column.filter)) {
                if (typeof filter !== 'string') {
                    isActive = column.filter.some((/**
                     * @param {?} item
                     * @return {?}
                     */
                    (item) => {
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
    }
    /**
     * @param {?} column
     * @return {?}
     */
    onSortChange(column) {
        this.currentSortColumn = column;
        /** @type {?} */
        const sortedColumns = this.columns.filter((/**
         * @param {?} thisColumn
         * @return {?}
         */
        (thisColumn) => {
            return thisColumn.sort && thisColumn !== this.currentSortColumn;
        }));
        for (const sortedColumn of sortedColumns) {
            sortedColumn.sort = null;
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
    }
    /**
     * @return {?}
     */
    fireTableChangeEvent() {
        // Construct a table change object
        /** @type {?} */
        const onTableChange = {};
        /** @type {?} */
        const filters = this.columns.filter((/**
         * @param {?} col
         * @return {?}
         */
        (col) => col.filter && col.filter.length));
        onTableChange.filter = filters.length ? filters : false;
        onTableChange.sort = this.currentSortColumn ? this.currentSortColumn : false;
        onTableChange.rows = this.rows;
        // Emit event
        this.onTableChange.emit(onTableChange);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    findColumnIndex(value) {
        for (let i = 0; i < this.columns.length; i += 1) {
            if (this.columns[i].name === value) {
                return i;
            }
        }
        return null;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onOrderChange(event) {
        /** @type {?} */
        const oldIndex = this.findColumnIndex(event.first.name);
        /** @type {?} */
        const newIndex = this.findColumnIndex(event.second.name);
        this.columns.splice(newIndex, 0, this.columns.splice(oldIndex, 1)[0]);
        this.onSortChange(this.currentSortColumn);
    }
    /**
     * @param {?} expanded
     * @return {?}
     */
    expandAllOnPage(expanded) {
        this.config.expandAll = !expanded;
        for (const row of this.dataProvider.list) {
            row._expanded = this.config.expandAll;
        }
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    selectPage(data) {
        if (!this.master) {
            this.selectAll(false);
            // Only show the select all message when there is only one new page selected at a time
            this.selectedPageCount = this.selectedPageCount > 0 ? this.selectedPageCount - 1 : 0;
            this.showSelectAllMessage = false;
        }
        else {
            this.indeterminate = false;
            // this.pagedData = this.rows.slice(this.getPageStart(), this.getPageEnd());
            for (const row of this.pagedData) {
                row._selected = this.master;
            }
            this.selected = this.dataProvider.list.filter((/**
             * @param {?} r
             * @return {?}
             */
            (r) => r._selected));
            this.pageSelected = this.pagedData.filter((/**
             * @param {?} r
             * @return {?}
             */
            (r) => r._selected));
            this.emitSelected(this.selected);
            // Only show the select all message when there is only one new page selected at a time
            this.selectedPageCount++;
            this.showSelectAllMessage = this.selectedPageCount === 1 && this.selected.length !== this.dataProvider.total;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    selectAll(value) {
        this.master = value;
        this.indeterminate = false;
        for (const row of this.dataProvider.list) {
            row._selected = value;
        }
        this.selected = value ? this.dataProvider.list : [];
        this.showSelectAllMessage = false;
        this.selectedPageCount = this.selectedPageCount > 0 ? this.selectedPageCount - 1 : 0;
        this.rowSelectHandler();
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    rowSelectHandler(data) {
        // this.pagedData = this.rows.slice(this.getPageStart(), this.getPageEnd());
        this.pageSelected = this.pagedData.filter((/**
         * @param {?} r
         * @return {?}
         */
        (r) => r._selected));
        this.selected = this.dataProvider.list.filter((/**
         * @param {?} r
         * @return {?}
         */
        (r) => r._selected));
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
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    emitSelected(selected) {
        this.onRowSelect.emit({ length: selected.length, selected });
    }
    /**
     * @param {?} row
     * @return {?}
     */
    rowClickHandler(row) {
        if (this.config.rowSelect) {
            this.activeId = row.id || 0;
            this.onRowClick.emit(row);
        }
    }
    /**
     * @param {?} column
     * @return {?}
     */
    getDefaultOptions(column) {
        // TODO - needs to come from label service - https://github.com/bullhorn/novo-elements/issues/116
        /** @type {?} */
        const opts = [
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
    }
    /**
     * @param {?} column
     * @param {?} event
     * @return {?}
     */
    onCalenderSelect(column, event) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (event.startDate && event.endDate) {
                this.onFilterChange();
            }
        }), 10);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    onFilterKeywords(config) {
        if (config && config.filtering && config.filtering.freetextFilter) {
            /** @type {?} */
            const filterKeywords = config.filtering.freetextFilter.toLowerCase();
            if (!config.filtering.originalOptions) {
                config.filtering.originalOptions = config.filtering.options;
            }
            /** @type {?} */
            const newOptions = config.filtering.originalOptions.filter((/**
             * @param {?} option
             * @return {?}
             */
            (option) => {
                /** @type {?} */
                let value = option && option.label ? option.label : option;
                value = value.toLowerCase() ? value.toLowerCase() : value;
                if (value === filterKeywords) {
                    return true;
                }
                else if (~value.indexOf(filterKeywords) || ~value.indexOf(filterKeywords)) {
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
    }
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
    setTableEdit(rowNumber, columnNumber) {
        this.mode = NovoTableMode.EDIT;
        this._dataProvider.edit();
        this._rows.forEach((/**
         * @param {?} row
         * @param {?} rowIndex
         * @return {?}
         */
        (row, rowIndex) => {
            row._editing = row._editing || {};
            this.columns.forEach((/**
             * @param {?} column
             * @param {?} columnIndex
             * @return {?}
             */
            (column, columnIndex) => {
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
    }
    /**
     * \@description Leaves edit mode for the Table and puts everything back to VIEW only
     * \@memberOf NovoTableElement
     * @private
     * @param {?} cancel - whether or not to save data or undo
     * @return {?}
     */
    leaveEditMode(cancel) {
        this.mode = NovoTableMode.VIEW;
        this._rows.forEach((/**
         * @param {?} row
         * @return {?}
         */
        (row) => {
            row._editing = row._editing || {};
            this.columns.forEach((/**
             * @param {?} column
             * @return {?}
             */
            (column) => {
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
    }
    /**
     * \@description Adds a new row into the table to be edited, can be called from a local reference of the table in your template
     * \@memberOf NovoTableElement
     * @param {?=} defaultValue
     * @return {?}
     */
    addEditableRow(defaultValue = {}) {
        /** @type {?} */
        const tableFormRows = (/** @type {?} */ (this.tableForm.controls['rows']));
        /** @type {?} */
        const row = {};
        /** @type {?} */
        const rowControls = [];
        row.controls = {};
        row._editing = {};
        row.rowId = this._rows.length + 1;
        this.columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            // Use the control passed or use a ReadOnlyControl so that the form has the values
            /** @type {?} */
            const control = column.editorConfig
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
    }
    /**
     * \@description Validates the Form inside of the Table, if there are errors it will display/return the errors for each row.
     * If there are no errors, then it will return ONLY the changed data for each row, the data returned will be in the form:
     * { id: ID_OF_RECORD, key: value } -- data that was updated
     * { id: undefined, key: value } -- data that was added
     * \@memberOf NovoTableElement
     * @return {?}
     */
    validateAndGetUpdatedData() {
        if (this.tableForm && this.tableForm.controls && this.tableForm.controls['rows']) {
            /** @type {?} */
            const changedRows = [];
            /** @type {?} */
            const errors = [];
            // Go over the FormArray's controls
            ((/** @type {?} */ (this.tableForm.controls['rows']))).controls.forEach((/**
             * @param {?} formGroup
             * @param {?} index
             * @return {?}
             */
            (formGroup, index) => {
                /** @type {?} */
                let changedRow = null;
                /** @type {?} */
                let error = null;
                // Go over the form group controls
                Object.keys(formGroup.controls).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                (key) => {
                    /** @type {?} */
                    const control = formGroup.controls[key];
                    // Handle value changing
                    if (control && control.dirty && !control.errors) {
                        if (!changedRow) {
                            // Append the ID, so we have some key to save against
                            changedRow = {};
                            if (this._rows[index].id) {
                                changedRow.id = this._rows[index].id;
                            }
                        }
                        // If dirty, grab value off the form
                        changedRow[key] = this.tableForm.value['rows'][index][key];
                        // Set value back to row (should be already done via the server call, but do it anyway)
                        this._rows[index][key] = changedRow[key];
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
                    changedRows.push(changedRow);
                }
                if (error) {
                    errors.push({ errors: error, row: this._rows[index], index });
                }
            }));
            /** @type {?} */
            const ret = {};
            // Return errors if any, otherwise return the changed rows
            if (errors.length === 0) {
                return { changed: changedRows };
            }
            return { errors };
        }
    }
    /**
     * \@description Refresh the data provider and leave edit mode
     * \@memberOf NovoTableElement
     * @return {?}
     */
    cancelEditing() {
        this.leaveEditMode(true);
    }
    /**
     * \@description Refresh the data provider and leave edit mode
     * \@memberOf NovoTableElement
     * @return {?}
     */
    saveChanges() {
        this.leaveEditMode(false);
    }
    /**
     * \@description Displays a toast message inside of the table
     * \@memberOf NovoTableElement
     * @param {?} toast
     * @param {?=} hideDelay
     * @return {?}
     */
    displayToastMessage(toast, hideDelay) {
        this.loading = false;
        this.toast = toast;
        if (hideDelay) {
            setTimeout((/**
             * @return {?}
             */
            () => this.hideToastMessage()), hideDelay);
        }
    }
    /**
     * \@description Force hide the toast message
     * \@memberOf NovoTableElement
     * @return {?}
     */
    hideToastMessage() {
        this.toast = null;
        // Hack to make the table display properly after hiding the toast
        this.grossFlagToAvoidTheTableFromBeingUglyWhenHidingTheToast = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.grossFlagToAvoidTheTableFromBeingUglyWhenHidingTheToast = false;
        }));
    }
    /**
     * \@description display the loading overlay on the table
     * \@memberOf NovoTableElement
     * @param {?} show
     * @return {?}
     */
    toggleLoading(show) {
        this.loading = show;
    }
    /**
     * \@description hide a column in edit or view mode
     * \@memberOf NovoTableElement
     * @param {?} column
     * @return {?}
     */
    isColumnHidden(column) {
        return this.editing ? !!column.hideColumnOnEdit : !!column.hideColumnOnView;
    }
}
NovoTableElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-table',
                host: {
                    '[attr.theme]': 'theme',
                    '[class.editing]': 'mode === NovoTableMode.EDIT',
                    '[class.novo-table-loading]': 'loading',
                },
                // directives: [],
                template: `
        <header *ngIf="columns.length">
            <ng-content select="novo-table-header"></ng-content>
            <div class="header-actions">
                <novo-pagination *ngIf="config.paging && !(dataProvider.isEmpty() && !dataProvider.isFiltered())"
                                 [rowOptions]="config.paging.rowOptions"
                                 [disablePageSelection]="config.paging.disablePageSelection"
                                 [(page)]="dataProvider.page"
                                 [(itemsPerPage)]="dataProvider.pageSize"
                                 [totalItems]="dataProvider.total"
                                 (onPageChange)="onPageChange($event)">
                </novo-pagination>
                <ng-content select="novo-table-actions"></ng-content>
            </div>
        </header>
        <div class="novo-table-loading-overlay" *ngIf="loading || dataProvider.isLoading()">
            <novo-loading></novo-loading>
        </div>
        <novo-toast *ngIf="toast" [theme]="toast?.theme" [icon]="toast?.icon" [message]="toast?.message"></novo-toast>
        <div class="table-container" *ngIf="!grossFlagToAvoidTheTableFromBeingUglyWhenHidingTheToast">
            <novo-form hideHeader="true" [form]="tableForm">
                <table class="table table-striped dataTable" [class.table-details]="config.hasDetails" role="grid">
                <!-- skipSortAndFilterClear is a hack right now, will be removed once Canvas is refactored -->
                <thead *ngIf="columns.length && (!dataProvider.isEmpty() || dataProvider.isFiltered() || skipSortAndFilterClear || editing)">
                    <tr role="row">
                        <!-- DETAILS -->
                        <th class="row-actions" *ngIf="config.hasDetails">
                            <button theme="icon" icon="next" (click)="expandAllOnPage(config.expandAll)" *ngIf="!config.expandAll" data-automation-id="expand-all"></button>
                            <button theme="icon" icon="sort-desc" (click)="expandAllOnPage(config.expandAll)" *ngIf="config.expandAll" data-automation-id="collapse-all"></button>
                        </th>
                        <!-- CHECKBOX -->
                        <th class="row-actions checkbox mass-action" *ngIf="config.rowSelectionStyle === 'checkbox'">
                            <novo-checkbox [(ngModel)]="master" [indeterminate]="pageSelected.length > 0 && pageSelected.length < pagedData.length" (ngModelChange)="selectPage($event)" data-automation-id="select-all-checkbox" [tooltip]="master ? labels.deselectAll : labels.selectAllOnPage" tooltipPosition="right"></novo-checkbox>
                        </th>
                        <!-- TABLE HEADERS -->
                        <th *ngFor="let column of columns" [ngClass]="{ 'mass-action': config?.rowSelectionStyle === 'checkbox', 'actions': column?.actions?.items?.length > 0, 'preview': column?.name === 'preview' }" [novoThOrderable]="column" (onOrderChange)="onOrderChange($event)" [hidden]="isColumnHidden(column)">
                            <div class="th-group" [attr.data-automation-id]="column.id || column.name" *ngIf="!column.hideHeader">
                                <!-- LABEL & SORT ARROWS -->
                                <div class="th-title" [ngClass]="(config.sorting !== false && column.sorting !== false) ? 'sortable' : ''" [novoThSortable]="config" [column]="column" (onSortChange)="onSortChange($event)">
                                    <label>{{ column.title || column.label }}</label>
                                    <div class="table-sort-icons" tooltipPosition="bottom" [tooltip]="labels.sort" [ngClass]="column.sort || ''" *ngIf="config.sorting !== false && column.sorting !== false">
                                        <i class="bhi-arrow-up"></i>
                                        <i class="bhi-arrow-down"></i>
                                    </div>
                                </div>
                                <!-- FILTER DROP-DOWN -->
                                <novo-dropdown side="right" *ngIf="config.filtering !== false && column.filtering !== false" class="column-filters" (toggled)="onDropdownToggled($event, column.name)" parentScrollSelector=".table-container" containerClass="table-dropdown">
                                    <button type="button" theme="icon" icon="filter" tooltipPosition="bottom" [tooltip]="labels.filters" [class.filtered]="column.filter || column.filter===false" (click)="focusInput()"></button>
                                    <!-- FILTER OPTIONS LIST -->
                                    <list *ngIf="(column?.options?.length || column?.originalOptions?.length) && column?.type !== 'date' && toggledDropdownMap[column.name]">
                                        <item class="filter-search">
                                            <div class="header">
                                                <span>{{ labels.filters }}</span>
                                                <button theme="dialogue" color="negative" icon="times" (click)="onFilterClear(column)" *ngIf="column.filter || column.filter===false">{{ labels.clear }}</button>
                                            </div>
                                            <input type="text" *ngIf="!!column.allowCustomTextOption" [attr.id]="column.name + '-input'" [novoTableFilter]="column" (onFilterChange)="onFilterKeywords($event)" [(ngModel)]="column.freetextFilter" keepFilterFocused #filterInput/>
                                        </item>
                                        <item [ngClass]="{ active: isFilterActive(column, option) }" *ngFor="let option of column.options" (click)="onFilterClick(column, option)" [attr.data-automation-id]="getOptionDataAutomationId(option)">
                                            <span>{{ option?.label || option }}</span> <i class="bhi-check" *ngIf="isFilterActive(column, option)"></i>
                                        </item>
                                    </list>
                                    <!-- FILTER SEARCH INPUT -->
                                    <list *ngIf="!(column?.options?.length || column?.originalOptions?.length) && toggledDropdownMap[column.name]">
                                        <item class="filter-search">
                                            <div class="header">
                                                <span>{{ labels.filters }}</span>
                                                <button theme="dialogue" color="negative" icon="times" (click)="onFilterClear(column)" *ngIf="column.filter">{{ labels.clear }}</button>
                                            </div>
                                            <input type="text" [attr.id]="column.name + '-input'" [novoTableFilter]="column" (onFilterChange)="onFilterChange($event)" [(ngModel)]="column.filter" keepFilterFocused #filterInput/>
                                        </item>
                                    </list>
                                    <!-- FILTER DATE OPTIONS -->
                                    <list *ngIf="column?.options?.length && column?.type === 'date' && toggledDropdownMap[column.name]">
                                        <item class="filter-search" *ngIf="!column.calenderShow">
                                            <div class="header">
                                                <span>{{ labels.filters }}</span>
                                                <button theme="dialogue" color="negative" icon="times" (click)="onFilterClear(column)" *ngIf="column.filter">{{ labels.clear }}</button>
                                            </div>
                                        </item>
                                        <item [ngClass]="{ active: isFilterActive(column, option) }" *ngFor="let option of column.options" (click)="onFilterClick(column, option)" [keepOpen]="option.range" [hidden]="column.calenderShow" [attr.data-automation-id]="(option?.label || option)">
                                            {{ option?.label || option }} <i class="bhi-check" *ngIf="isFilterActive(column, option)"></i>
                                        </item>
                                        <div class="calendar-container" [hidden]="!column.calenderShow">
                                            <div (click)="column.calenderShow=false"><i class="bhi-previous"></i>{{ labels.backToPresetFilters }}</div>
                                            <novo-date-picker #rangePicker (onSelect)="onCalenderSelect(column, $event)" [(ngModel)]="column.filter" range="true"></novo-date-picker>
                                        </div>
                                    </list>
                                </novo-dropdown>
                            </div>
                        </th>
                    </tr>
                </thead>
                <!-- TABLE DATA -->
                <tbody *ngIf="!dataProvider.isEmpty() || editing">
                    <tr class="table-selection-row" *ngIf="config.rowSelectionStyle === 'checkbox' && showSelectAllMessage && config.selectAllEnabled" data-automation-id="table-selection-row">
                        <td colspan="100%">
                            {{labels.selectedRecords(selected.length)}} <a (click)="selectAll(true)" data-automation-id="all-matching-records">{{labels.totalRecords(dataProvider.total)}}</a>
                        </td>
                    </tr>
                    <ng-template ngFor let-row="$implicit" let-i="index" [ngForOf]="rows">
                        <tr class="table-row" [ngClass]="row.customClass || ''" [id]="name + '-' + row[rowIdentifier]" [attr.data-automation-id]="row.id" (click)="rowClickHandler(row)" [class.active]="row.id === activeId">
                            <td class="row-actions" *ngIf="config.hasDetails">
                                <button theme="icon" icon="next" (click)="row._expanded=!row._expanded" *ngIf="!row._expanded"></button>
                                <button theme="icon" icon="sort-desc" (click)="row._expanded=!row._expanded" *ngIf="row._expanded"></button>
                            </td>
                            <td class="row-actions checkbox" *ngIf="config.rowSelectionStyle === 'checkbox'">
                                <novo-checkbox [(ngModel)]="row._selected" (ngModelChange)="rowSelectHandler(row)" data-automation-id="select-row-checkbox"></novo-checkbox>
                            </td>
                            <td *ngFor="let column of columns" [attr.data-automation-id]="column.id || column.name" [class.novo-form-row]="editable" [hidden]="isColumnHidden(column)">
                                <novo-table-cell *ngIf="row._editing && !row._editing[column.name]" [hasEditor]="editable" [column]="column" [row]="row" [form]="getRowControlForm(i)"></novo-table-cell>
                                <novo-control *ngIf="row._editing && row._editing[column.name]" condensed="true" [form]="getRowControlForm(i)" [control]="row.controls[column.name]"></novo-control>
                            </td>
                        </tr>
                        <tr class="details-row" *ngIf="config.hasDetails" [hidden]="!row._expanded" [attr.data-automation-id]="'details-row-'+row.id">
                            <td class="row-actions"></td>
                            <td [attr.colspan]="config.rowSelectionStyle === 'checkbox' ? (columns.length + 1) : columns.length">
                                <novo-row-details [data]="row" [renderer]="config.detailsRenderer"></novo-row-details>
                            </td>
                        </tr>
                    </ng-template>
                </tbody>
                <!-- NO TABLE DATA PLACEHOLDER -->
                <tbody class="table-message" *ngIf="dataProvider.isEmpty() && !dataProvider.isFiltered() && !editing" data-automation-id="empty-table">
                    <tr>
                        <td colspan="100%">
                            <div #emptymessage><ng-content select="[table-empty-message]"></ng-content></div>
                            <div class="table-empty-message" *ngIf="emptymessage.childNodes.length == 0">
                                <h4><i class="bhi-search-question"></i> {{ labels.emptyTableMessage }}</h4>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <!-- NO MATCHING RECORDS -->
                <tbody class="table-message" *ngIf="dataProvider.isEmpty() && dataProvider.isFiltered()" data-automation-id="empty-table">
                    <tr>
                        <td colspan="100%">
                            <div #nomatchmessage><ng-content select="[table-no-matching-records-message]"></ng-content></div>
                            <div class="no-matching-records" *ngIf="nomatchmessage.childNodes.length == 0">
                                <h4><i class="bhi-search-question"></i> {{ labels.noMatchingRecordsMessage }}</h4>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <!-- TABLE DATA ERROR PLACEHOLDER -->
                <tbody class="table-message" *ngIf="dataProvider.hasErrors()" data-automation-id="table-errors">
                    <tr>
                        <td colspan="100%">
                            <div #errormessage><ng-content select="[table-error-message]"></ng-content></div>
                            <div class="table-error-message" *ngIf="errormessage.childNodes.length == 0">
                                <h4><i class="bhi-caution"></i> {{ labels.erroredTableMessage }}</h4>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot *ngIf="!config.footers" [ngClass]="dataProvider.length % 2 == 0 ? 'odd' : 'even'">
                    <tr>
                        <td colspan="100%">
                            <ng-content select="novo-table-footer"></ng-content>
                        </td>
                    </tr>
                </tfoot>
                <tfoot *ngFor="let footer of footers;let i = index;" class="novo-table-total-footer">
                    <tr>
                        <td *ngFor="let column of columns" [attr.data-automation-id]="(column.id || column.name) + '-total-' + i">{{ footer[column.name] }}</td>
                    </tr>
                </tfoot>
            </table>
        </novo-form>
    </div>
    `
            }] }
];
/** @nocollapse */
NovoTableElement.ctorParameters = () => [
    { type: NovoLabelService },
    { type: FormUtils },
    { type: FormBuilder }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvVGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVyxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQThCLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFcEYsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUU5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDekYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUV6RSxxQ0EyQkM7OztJQXpCQyxpQ0FNRTs7SUFFRixrQ0FLRzs7SUFFSCxvQ0FBMEI7O0lBQzFCLGtDQUF3Qjs7SUFDeEIsbUNBQThCOztJQUM5QixtQ0FBOEI7O0lBQzlCLDRDQUEyQjs7SUFDM0Isb0NBQW9COztJQUNwQixxQ0FBcUI7O0lBQ3JCLDBDQUFzQjs7SUFDdEIsb0NBQW9COztJQUNwQiwyQ0FBMkI7OztBQUk3QixNQUFZLGFBQWE7SUFDdkIsSUFBSSxHQUFJO0lB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eyBDb21wb25lbnQsIERvQ2hlY2ssIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUFycmF5LCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vIEFQUFxuaW1wb3J0IHsgQ29sbGVjdGlvbkV2ZW50IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS1wcm92aWRlci9Db2xsZWN0aW9uRXZlbnQnO1xuaW1wb3J0IHsgUGFnZWRBcnJheUNvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXByb3ZpZGVyL1BhZ2VkQXJyYXlDb2xsZWN0aW9uJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybVV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybS11dGlscy9Gb3JtVXRpbHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG5pbXBvcnQgeyBDb250cm9sRmFjdG9yeSwgUmVhZE9ubHlDb250cm9sIH0gZnJvbSAnLi8uLi9mb3JtL0Zvcm1Db250cm9scyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm92b1RhYmxlQ29uZmlnIHtcbiAgLy8gUGFnaW5nIGNvbmZpZ1xuICBwYWdpbmc/OiB7XG4gICAgY3VycmVudDogbnVtYmVyOyAvLyBjdXJyZW50IHBhZ2VcbiAgICBpdGVtc1BlclBhZ2U6IG51bWJlcjsgLy8gaXRlbXMgcGVyIHBhZ2VcbiAgICBvblBhZ2VDaGFuZ2U6IEZ1bmN0aW9uOyAvLyBmdW5jdGlvbiB0byBoYW5kbGUgcGFnZSBjaGFuZ2luZ1xuICAgIHJvd09wdGlvbnM/OiB7IHZhbHVlOiBudW1iZXI7IGxhYmVsOiBzdHJpbmcgfVtdOyAvLyBwYWdlIG9wdGlvbnNcbiAgICBkaXNhYmxlUGFnZVNlbGVjdGlvbj86IGJvb2xlYW47IC8vIGRpc2FibGVzIHRoZSBwYWdlcyBmcm9tIGJlaW5nIHNlbGVjdGVkXG4gIH07XG4gIC8vIEZvb3RlciBjb25maWcgKHRvdGFsIGZvb3RlcilcbiAgZm9vdGVycz86IEFycmF5PHtcbiAgICBjb2x1bW5zOiBBcnJheTxzdHJpbmc+OyAvLyBzdHJpbmcgYXJyYXkgb2YgY29sdW1ucyB0byB0b3RhbFxuICAgIG1ldGhvZDogc3RyaW5nOyAvLyBtZXRob2QgdG8gdXNlIGZvciB0aGUgZm9vdGVyLCBTVU0gfCBBVkcsIGRlZmF1bHRzIHRvIFNVTVxuICAgIGxhYmVsQ29sdW1uOiBzdHJpbmc7IC8vIGNvbHVtbiB0byB1c2UgYXMgdGhlIFwidG90YWxcIiBsYWJlbFxuICAgIGxhYmVsOiBzdHJpbmc7IC8vIGxhYmVsIHRvIHVzZSBpbiB0aGUgXCJ0b3RhbFwiIGxhYmVsXG4gIH0+O1xuICAvLyBUT0RPOiBXaGVuIHRoZXNlIHR5cGVzIGFyZSBlbmZvcmNlZCBhcyBgYm9vbGVhbiB8IEZ1bmN0aW9uYCwgdGhlcmUncyBhIGxpbnQgZXJyb3IuIFRoYXQncyBhIGJ1Zy5cbiAgZmlsdGVyaW5nPzogYm9vbGVhbiB8IGFueTsgLy8gVHVybiBvbiBmaWx0ZXJpbmcgZm9yIHRoZSB0YWJsZSwgYm9vbGVhbiBvciBmdW5jdGlvbiBmb3IgZmlsdGVyaW5nIGNhbGxiYWNrXG4gIHNvcnRpbmc/OiBib29sZWFuIHwgYW55OyAvLyBUdXJuIG9uIHNvcnRpbmcgZm9yIHRoZSB0YWJsZSwgYm9vbGVhbiBvciBmdW5jdGlvbiBmb3Igc29ydGluZyBjYWxsYmFja1xuICBvcmRlcmluZz86IGJvb2xlYW4gfCBGdW5jdGlvbjsgLy8gVHVybiBvbiBvcmRlcmluZyBmb3IgdGhlIHRhYmxlLCBib29sZWFuIG9yIGZ1bmN0aW9uIGZvciBvcmRlcmluZyBjYWxsYmFja1xuICByZXNpemluZz86IGJvb2xlYW4gfCBGdW5jdGlvbjsgLy8gVHVybiBvbiByZXNpemluZyBmb3IgdGhlIHRhYmxlLCBib29sZWFuIG9yIGZ1bmN0aW9uIGZvciByZXNpemluZyBjYWxsYmFja1xuICByb3dTZWxlY3Rpb25TdHlsZT86IHN0cmluZzsgLy8gUm93IHNlbGVjdGlvbiBzdHlsZSwgY2hlY2tib3ggb3Igcm93XG4gIHJvd1NlbGVjdD86IGJvb2xlYW47IC8vIFR1cm4gb24gcm93IHNlbGVjdGlvblxuICBoYXNEZXRhaWxzPzogYm9vbGVhbjsgLy8gVHVybiBvbiBkZXRhaWxzIHJvdyBmb3IgdGhlIHRhYmxlXG4gIGRldGFpbHNSZW5kZXJlcj86IGFueTsgLy8gUmVuZGVyZXIvY29tcG9uZW50IGZvciB0aGUgZGV0YWlscyByb3dcbiAgZXhwYW5kQWxsPzogYm9vbGVhbjsgLy8gc2hvdWxkIEFsbCBSb3dzIGJlIGV4cGFuZGVkIGJ5IGRlZmF1bHRcbiAgc2VsZWN0QWxsRW5hYmxlZD86IGJvb2xlYW47IC8vIEFsbG93cyB0aGUgdGFibGUsIHdoaWxlIGluIHNlbGVjdGlvbiBtb2RlIHRvIGhhdmUgYSBzZWxlY3QgYWxsIGF0IHRoZSB0b3Bcbn1cblxuLy8gVE9ETyAtIHN1cHBvcnQgKDEpIGNsaWNraW5nIGNlbGwgdG8gZWRpdCwgKDIpIGNsaWNraW5nIHJvdyB0byBlZGl0LCAoMykgYnV0dG9uIHRvIHRyaWdnZXIgZnVsbCB0YWJsZSB0byBlZGl0XG5leHBvcnQgZW51bSBOb3ZvVGFibGVNb2RlIHtcbiAgVklFVyA9IDEsXG4gIEVESVQgPSAyLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRhYmxlJyxcbiAgaG9zdDoge1xuICAgICdbYXR0ci50aGVtZV0nOiAndGhlbWUnLFxuICAgICdbY2xhc3MuZWRpdGluZ10nOiAnbW9kZSA9PT0gTm92b1RhYmxlTW9kZS5FRElUJyxcbiAgICAnW2NsYXNzLm5vdm8tdGFibGUtbG9hZGluZ10nOiAnbG9hZGluZycsXG4gIH0sXG4gIC8vIGRpcmVjdGl2ZXM6IFtdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aGVhZGVyICpuZ0lmPVwiY29sdW1ucy5sZW5ndGhcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8tdGFibGUtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPG5vdm8tcGFnaW5hdGlvbiAqbmdJZj1cImNvbmZpZy5wYWdpbmcgJiYgIShkYXRhUHJvdmlkZXIuaXNFbXB0eSgpICYmICFkYXRhUHJvdmlkZXIuaXNGaWx0ZXJlZCgpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93T3B0aW9uc109XCJjb25maWcucGFnaW5nLnJvd09wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVQYWdlU2VsZWN0aW9uXT1cImNvbmZpZy5wYWdpbmcuZGlzYWJsZVBhZ2VTZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhwYWdlKV09XCJkYXRhUHJvdmlkZXIucGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKGl0ZW1zUGVyUGFnZSldPVwiZGF0YVByb3ZpZGVyLnBhZ2VTaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0b3RhbEl0ZW1zXT1cImRhdGFQcm92aWRlci50b3RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25QYWdlQ2hhbmdlKT1cIm9uUGFnZUNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPC9ub3ZvLXBhZ2luYXRpb24+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibm92by10YWJsZS1hY3Rpb25zXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by10YWJsZS1sb2FkaW5nLW92ZXJsYXlcIiAqbmdJZj1cImxvYWRpbmcgfHwgZGF0YVByb3ZpZGVyLmlzTG9hZGluZygpXCI+XG4gICAgICAgICAgICA8bm92by1sb2FkaW5nPjwvbm92by1sb2FkaW5nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5vdm8tdG9hc3QgKm5nSWY9XCJ0b2FzdFwiIFt0aGVtZV09XCJ0b2FzdD8udGhlbWVcIiBbaWNvbl09XCJ0b2FzdD8uaWNvblwiIFttZXNzYWdlXT1cInRvYXN0Py5tZXNzYWdlXCI+PC9ub3ZvLXRvYXN0PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtY29udGFpbmVyXCIgKm5nSWY9XCIhZ3Jvc3NGbGFnVG9Bdm9pZFRoZVRhYmxlRnJvbUJlaW5nVWdseVdoZW5IaWRpbmdUaGVUb2FzdFwiPlxuICAgICAgICAgICAgPG5vdm8tZm9ybSBoaWRlSGVhZGVyPVwidHJ1ZVwiIFtmb3JtXT1cInRhYmxlRm9ybVwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgZGF0YVRhYmxlXCIgW2NsYXNzLnRhYmxlLWRldGFpbHNdPVwiY29uZmlnLmhhc0RldGFpbHNcIiByb2xlPVwiZ3JpZFwiPlxuICAgICAgICAgICAgICAgIDwhLS0gc2tpcFNvcnRBbmRGaWx0ZXJDbGVhciBpcyBhIGhhY2sgcmlnaHQgbm93LCB3aWxsIGJlIHJlbW92ZWQgb25jZSBDYW52YXMgaXMgcmVmYWN0b3JlZCAtLT5cbiAgICAgICAgICAgICAgICA8dGhlYWQgKm5nSWY9XCJjb2x1bW5zLmxlbmd0aCAmJiAoIWRhdGFQcm92aWRlci5pc0VtcHR5KCkgfHwgZGF0YVByb3ZpZGVyLmlzRmlsdGVyZWQoKSB8fCBza2lwU29ydEFuZEZpbHRlckNsZWFyIHx8IGVkaXRpbmcpXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciByb2xlPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIERFVEFJTFMgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJyb3ctYWN0aW9uc1wiICpuZ0lmPVwiY29uZmlnLmhhc0RldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIGljb249XCJuZXh0XCIgKGNsaWNrKT1cImV4cGFuZEFsbE9uUGFnZShjb25maWcuZXhwYW5kQWxsKVwiICpuZ0lmPVwiIWNvbmZpZy5leHBhbmRBbGxcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJleHBhbmQtYWxsXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwic29ydC1kZXNjXCIgKGNsaWNrKT1cImV4cGFuZEFsbE9uUGFnZShjb25maWcuZXhwYW5kQWxsKVwiICpuZ0lmPVwiY29uZmlnLmV4cGFuZEFsbFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImNvbGxhcHNlLWFsbFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQ0hFQ0tCT1ggLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJyb3ctYWN0aW9ucyBjaGVja2JveCBtYXNzLWFjdGlvblwiICpuZ0lmPVwiY29uZmlnLnJvd1NlbGVjdGlvblN0eWxlID09PSAnY2hlY2tib3gnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tY2hlY2tib3ggWyhuZ01vZGVsKV09XCJtYXN0ZXJcIiBbaW5kZXRlcm1pbmF0ZV09XCJwYWdlU2VsZWN0ZWQubGVuZ3RoID4gMCAmJiBwYWdlU2VsZWN0ZWQubGVuZ3RoIDwgcGFnZWREYXRhLmxlbmd0aFwiIChuZ01vZGVsQ2hhbmdlKT1cInNlbGVjdFBhZ2UoJGV2ZW50KVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInNlbGVjdC1hbGwtY2hlY2tib3hcIiBbdG9vbHRpcF09XCJtYXN0ZXIgPyBsYWJlbHMuZGVzZWxlY3RBbGwgOiBsYWJlbHMuc2VsZWN0QWxsT25QYWdlXCIgdG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIj48L25vdm8tY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBUQUJMRSBIRUFERVJTIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiIFtuZ0NsYXNzXT1cInsgJ21hc3MtYWN0aW9uJzogY29uZmlnPy5yb3dTZWxlY3Rpb25TdHlsZSA9PT0gJ2NoZWNrYm94JywgJ2FjdGlvbnMnOiBjb2x1bW4/LmFjdGlvbnM/Lml0ZW1zPy5sZW5ndGggPiAwLCAncHJldmlldyc6IGNvbHVtbj8ubmFtZSA9PT0gJ3ByZXZpZXcnIH1cIiBbbm92b1RoT3JkZXJhYmxlXT1cImNvbHVtblwiIChvbk9yZGVyQ2hhbmdlKT1cIm9uT3JkZXJDaGFuZ2UoJGV2ZW50KVwiIFtoaWRkZW5dPVwiaXNDb2x1bW5IaWRkZW4oY29sdW1uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aC1ncm91cFwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjb2x1bW4uaWQgfHwgY29sdW1uLm5hbWVcIiAqbmdJZj1cIiFjb2x1bW4uaGlkZUhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIExBQkVMICYgU09SVCBBUlJPV1MgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aC10aXRsZVwiIFtuZ0NsYXNzXT1cIihjb25maWcuc29ydGluZyAhPT0gZmFsc2UgJiYgY29sdW1uLnNvcnRpbmcgIT09IGZhbHNlKSA/ICdzb3J0YWJsZScgOiAnJ1wiIFtub3ZvVGhTb3J0YWJsZV09XCJjb25maWdcIiBbY29sdW1uXT1cImNvbHVtblwiIChvblNvcnRDaGFuZ2UpPVwib25Tb3J0Q2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57eyBjb2x1bW4udGl0bGUgfHwgY29sdW1uLmxhYmVsIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1zb3J0LWljb25zXCIgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tXCIgW3Rvb2x0aXBdPVwibGFiZWxzLnNvcnRcIiBbbmdDbGFzc109XCJjb2x1bW4uc29ydCB8fCAnJ1wiICpuZ0lmPVwiY29uZmlnLnNvcnRpbmcgIT09IGZhbHNlICYmIGNvbHVtbi5zb3J0aW5nICE9PSBmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWFycm93LXVwXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWFycm93LWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRklMVEVSIERST1AtRE9XTiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tZHJvcGRvd24gc2lkZT1cInJpZ2h0XCIgKm5nSWY9XCJjb25maWcuZmlsdGVyaW5nICE9PSBmYWxzZSAmJiBjb2x1bW4uZmlsdGVyaW5nICE9PSBmYWxzZVwiIGNsYXNzPVwiY29sdW1uLWZpbHRlcnNcIiAodG9nZ2xlZCk9XCJvbkRyb3Bkb3duVG9nZ2xlZCgkZXZlbnQsIGNvbHVtbi5uYW1lKVwiIHBhcmVudFNjcm9sbFNlbGVjdG9yPVwiLnRhYmxlLWNvbnRhaW5lclwiIGNvbnRhaW5lckNsYXNzPVwidGFibGUtZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwiaWNvblwiIGljb249XCJmaWx0ZXJcIiB0b29sdGlwUG9zaXRpb249XCJib3R0b21cIiBbdG9vbHRpcF09XCJsYWJlbHMuZmlsdGVyc1wiIFtjbGFzcy5maWx0ZXJlZF09XCJjb2x1bW4uZmlsdGVyIHx8IGNvbHVtbi5maWx0ZXI9PT1mYWxzZVwiIChjbGljayk9XCJmb2N1c0lucHV0KClcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRklMVEVSIE9QVElPTlMgTElTVCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaXN0ICpuZ0lmPVwiKGNvbHVtbj8ub3B0aW9ucz8ubGVuZ3RoIHx8IGNvbHVtbj8ub3JpZ2luYWxPcHRpb25zPy5sZW5ndGgpICYmIGNvbHVtbj8udHlwZSAhPT0gJ2RhdGUnICYmIHRvZ2dsZWREcm9wZG93bk1hcFtjb2x1bW4ubmFtZV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbSBjbGFzcz1cImZpbHRlci1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgbGFiZWxzLmZpbHRlcnMgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiBjb2xvcj1cIm5lZ2F0aXZlXCIgaWNvbj1cInRpbWVzXCIgKGNsaWNrKT1cIm9uRmlsdGVyQ2xlYXIoY29sdW1uKVwiICpuZ0lmPVwiY29sdW1uLmZpbHRlciB8fCBjb2x1bW4uZmlsdGVyPT09ZmFsc2VcIj57eyBsYWJlbHMuY2xlYXIgfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICpuZ0lmPVwiISFjb2x1bW4uYWxsb3dDdXN0b21UZXh0T3B0aW9uXCIgW2F0dHIuaWRdPVwiY29sdW1uLm5hbWUgKyAnLWlucHV0J1wiIFtub3ZvVGFibGVGaWx0ZXJdPVwiY29sdW1uXCIgKG9uRmlsdGVyQ2hhbmdlKT1cIm9uRmlsdGVyS2V5d29yZHMoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwiY29sdW1uLmZyZWV0ZXh0RmlsdGVyXCIga2VlcEZpbHRlckZvY3VzZWQgI2ZpbHRlcklucHV0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0gW25nQ2xhc3NdPVwieyBhY3RpdmU6IGlzRmlsdGVyQWN0aXZlKGNvbHVtbiwgb3B0aW9uKSB9XCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb2x1bW4ub3B0aW9uc1wiIChjbGljayk9XCJvbkZpbHRlckNsaWNrKGNvbHVtbiwgb3B0aW9uKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJnZXRPcHRpb25EYXRhQXV0b21hdGlvbklkKG9wdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgb3B0aW9uPy5sYWJlbCB8fCBvcHRpb24gfX08L3NwYW4+IDxpIGNsYXNzPVwiYmhpLWNoZWNrXCIgKm5nSWY9XCJpc0ZpbHRlckFjdGl2ZShjb2x1bW4sIG9wdGlvbilcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBGSUxURVIgU0VBUkNIIElOUFVUIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpc3QgKm5nSWY9XCIhKGNvbHVtbj8ub3B0aW9ucz8ubGVuZ3RoIHx8IGNvbHVtbj8ub3JpZ2luYWxPcHRpb25zPy5sZW5ndGgpICYmIHRvZ2dsZWREcm9wZG93bk1hcFtjb2x1bW4ubmFtZV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbSBjbGFzcz1cImZpbHRlci1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgbGFiZWxzLmZpbHRlcnMgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiBjb2xvcj1cIm5lZ2F0aXZlXCIgaWNvbj1cInRpbWVzXCIgKGNsaWNrKT1cIm9uRmlsdGVyQ2xlYXIoY29sdW1uKVwiICpuZ0lmPVwiY29sdW1uLmZpbHRlclwiPnt7IGxhYmVscy5jbGVhciB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW2F0dHIuaWRdPVwiY29sdW1uLm5hbWUgKyAnLWlucHV0J1wiIFtub3ZvVGFibGVGaWx0ZXJdPVwiY29sdW1uXCIgKG9uRmlsdGVyQ2hhbmdlKT1cIm9uRmlsdGVyQ2hhbmdlKCRldmVudClcIiBbKG5nTW9kZWwpXT1cImNvbHVtbi5maWx0ZXJcIiBrZWVwRmlsdGVyRm9jdXNlZCAjZmlsdGVySW5wdXQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRklMVEVSIERBVEUgT1BUSU9OUyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaXN0ICpuZ0lmPVwiY29sdW1uPy5vcHRpb25zPy5sZW5ndGggJiYgY29sdW1uPy50eXBlID09PSAnZGF0ZScgJiYgdG9nZ2xlZERyb3Bkb3duTWFwW2NvbHVtbi5uYW1lXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiZmlsdGVyLXNlYXJjaFwiICpuZ0lmPVwiIWNvbHVtbi5jYWxlbmRlclNob3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgbGFiZWxzLmZpbHRlcnMgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiBjb2xvcj1cIm5lZ2F0aXZlXCIgaWNvbj1cInRpbWVzXCIgKGNsaWNrKT1cIm9uRmlsdGVyQ2xlYXIoY29sdW1uKVwiICpuZ0lmPVwiY29sdW1uLmZpbHRlclwiPnt7IGxhYmVscy5jbGVhciB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0gW25nQ2xhc3NdPVwieyBhY3RpdmU6IGlzRmlsdGVyQWN0aXZlKGNvbHVtbiwgb3B0aW9uKSB9XCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb2x1bW4ub3B0aW9uc1wiIChjbGljayk9XCJvbkZpbHRlckNsaWNrKGNvbHVtbiwgb3B0aW9uKVwiIFtrZWVwT3Blbl09XCJvcHRpb24ucmFuZ2VcIiBbaGlkZGVuXT1cImNvbHVtbi5jYWxlbmRlclNob3dcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiKG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBvcHRpb24/LmxhYmVsIHx8IG9wdGlvbiB9fSA8aSBjbGFzcz1cImJoaS1jaGVja1wiICpuZ0lmPVwiaXNGaWx0ZXJBY3RpdmUoY29sdW1uLCBvcHRpb24pXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItY29udGFpbmVyXCIgW2hpZGRlbl09XCIhY29sdW1uLmNhbGVuZGVyU2hvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IChjbGljayk9XCJjb2x1bW4uY2FsZW5kZXJTaG93PWZhbHNlXCI+PGkgY2xhc3M9XCJiaGktcHJldmlvdXNcIj48L2k+e3sgbGFiZWxzLmJhY2tUb1ByZXNldEZpbHRlcnMgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tZGF0ZS1waWNrZXIgI3JhbmdlUGlja2VyIChvblNlbGVjdCk9XCJvbkNhbGVuZGVyU2VsZWN0KGNvbHVtbiwgJGV2ZW50KVwiIFsobmdNb2RlbCldPVwiY29sdW1uLmZpbHRlclwiIHJhbmdlPVwidHJ1ZVwiPjwvbm92by1kYXRlLXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ub3ZvLWRyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDwhLS0gVEFCTEUgREFUQSAtLT5cbiAgICAgICAgICAgICAgICA8dGJvZHkgKm5nSWY9XCIhZGF0YVByb3ZpZGVyLmlzRW1wdHkoKSB8fCBlZGl0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRhYmxlLXNlbGVjdGlvbi1yb3dcIiAqbmdJZj1cImNvbmZpZy5yb3dTZWxlY3Rpb25TdHlsZSA9PT0gJ2NoZWNrYm94JyAmJiBzaG93U2VsZWN0QWxsTWVzc2FnZSAmJiBjb25maWcuc2VsZWN0QWxsRW5hYmxlZFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInRhYmxlLXNlbGVjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bGFiZWxzLnNlbGVjdGVkUmVjb3JkcyhzZWxlY3RlZC5sZW5ndGgpfX0gPGEgKGNsaWNrKT1cInNlbGVjdEFsbCh0cnVlKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImFsbC1tYXRjaGluZy1yZWNvcmRzXCI+e3tsYWJlbHMudG90YWxSZWNvcmRzKGRhdGFQcm92aWRlci50b3RhbCl9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtcm93PVwiJGltcGxpY2l0XCIgbGV0LWk9XCJpbmRleFwiIFtuZ0Zvck9mXT1cInJvd3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRhYmxlLXJvd1wiIFtuZ0NsYXNzXT1cInJvdy5jdXN0b21DbGFzcyB8fCAnJ1wiIFtpZF09XCJuYW1lICsgJy0nICsgcm93W3Jvd0lkZW50aWZpZXJdXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cInJvdy5pZFwiIChjbGljayk9XCJyb3dDbGlja0hhbmRsZXIocm93KVwiIFtjbGFzcy5hY3RpdmVdPVwicm93LmlkID09PSBhY3RpdmVJZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJvdy1hY3Rpb25zXCIgKm5nSWY9XCJjb25maWcuaGFzRGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIGljb249XCJuZXh0XCIgKGNsaWNrKT1cInJvdy5fZXhwYW5kZWQ9IXJvdy5fZXhwYW5kZWRcIiAqbmdJZj1cIiFyb3cuX2V4cGFuZGVkXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgaWNvbj1cInNvcnQtZGVzY1wiIChjbGljayk9XCJyb3cuX2V4cGFuZGVkPSFyb3cuX2V4cGFuZGVkXCIgKm5nSWY9XCJyb3cuX2V4cGFuZGVkXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyb3ctYWN0aW9ucyBjaGVja2JveFwiICpuZ0lmPVwiY29uZmlnLnJvd1NlbGVjdGlvblN0eWxlID09PSAnY2hlY2tib3gnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLWNoZWNrYm94IFsobmdNb2RlbCldPVwicm93Ll9zZWxlY3RlZFwiIChuZ01vZGVsQ2hhbmdlKT1cInJvd1NlbGVjdEhhbmRsZXIocm93KVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInNlbGVjdC1yb3ctY2hlY2tib3hcIj48L25vdm8tY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNvbHVtbi5pZCB8fCBjb2x1bW4ubmFtZVwiIFtjbGFzcy5ub3ZvLWZvcm0tcm93XT1cImVkaXRhYmxlXCIgW2hpZGRlbl09XCJpc0NvbHVtbkhpZGRlbihjb2x1bW4pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLXRhYmxlLWNlbGwgKm5nSWY9XCJyb3cuX2VkaXRpbmcgJiYgIXJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV1cIiBbaGFzRWRpdG9yXT1cImVkaXRhYmxlXCIgW2NvbHVtbl09XCJjb2x1bW5cIiBbcm93XT1cInJvd1wiIFtmb3JtXT1cImdldFJvd0NvbnRyb2xGb3JtKGkpXCI+PC9ub3ZvLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLWNvbnRyb2wgKm5nSWY9XCJyb3cuX2VkaXRpbmcgJiYgcm93Ll9lZGl0aW5nW2NvbHVtbi5uYW1lXVwiIGNvbmRlbnNlZD1cInRydWVcIiBbZm9ybV09XCJnZXRSb3dDb250cm9sRm9ybShpKVwiIFtjb250cm9sXT1cInJvdy5jb250cm9sc1tjb2x1bW4ubmFtZV1cIj48L25vdm8tY29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cImRldGFpbHMtcm93XCIgKm5nSWY9XCJjb25maWcuaGFzRGV0YWlsc1wiIFtoaWRkZW5dPVwiIXJvdy5fZXhwYW5kZWRcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2RldGFpbHMtcm93LScrcm93LmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicm93LWFjdGlvbnNcIj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBbYXR0ci5jb2xzcGFuXT1cImNvbmZpZy5yb3dTZWxlY3Rpb25TdHlsZSA9PT0gJ2NoZWNrYm94JyA/IChjb2x1bW5zLmxlbmd0aCArIDEpIDogY29sdW1ucy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tcm93LWRldGFpbHMgW2RhdGFdPVwicm93XCIgW3JlbmRlcmVyXT1cImNvbmZpZy5kZXRhaWxzUmVuZGVyZXJcIj48L25vdm8tcm93LWRldGFpbHM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8IS0tIE5PIFRBQkxFIERBVEEgUExBQ0VIT0xERVIgLS0+XG4gICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzPVwidGFibGUtbWVzc2FnZVwiICpuZ0lmPVwiZGF0YVByb3ZpZGVyLmlzRW1wdHkoKSAmJiAhZGF0YVByb3ZpZGVyLmlzRmlsdGVyZWQoKSAmJiAhZWRpdGluZ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cImVtcHR5LXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgI2VtcHR5bWVzc2FnZT48bmctY29udGVudCBzZWxlY3Q9XCJbdGFibGUtZW1wdHktbWVzc2FnZV1cIj48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLWVtcHR5LW1lc3NhZ2VcIiAqbmdJZj1cImVtcHR5bWVzc2FnZS5jaGlsZE5vZGVzLmxlbmd0aCA9PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND48aSBjbGFzcz1cImJoaS1zZWFyY2gtcXVlc3Rpb25cIj48L2k+IHt7IGxhYmVscy5lbXB0eVRhYmxlTWVzc2FnZSB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPCEtLSBOTyBNQVRDSElORyBSRUNPUkRTIC0tPlxuICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cInRhYmxlLW1lc3NhZ2VcIiAqbmdJZj1cImRhdGFQcm92aWRlci5pc0VtcHR5KCkgJiYgZGF0YVByb3ZpZGVyLmlzRmlsdGVyZWQoKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImVtcHR5LXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgI25vbWF0Y2htZXNzYWdlPjxuZy1jb250ZW50IHNlbGVjdD1cIlt0YWJsZS1uby1tYXRjaGluZy1yZWNvcmRzLW1lc3NhZ2VdXCI+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuby1tYXRjaGluZy1yZWNvcmRzXCIgKm5nSWY9XCJub21hdGNobWVzc2FnZS5jaGlsZE5vZGVzLmxlbmd0aCA9PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND48aSBjbGFzcz1cImJoaS1zZWFyY2gtcXVlc3Rpb25cIj48L2k+IHt7IGxhYmVscy5ub01hdGNoaW5nUmVjb3Jkc01lc3NhZ2UgfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwhLS0gVEFCTEUgREFUQSBFUlJPUiBQTEFDRUhPTERFUiAtLT5cbiAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3M9XCJ0YWJsZS1tZXNzYWdlXCIgKm5nSWY9XCJkYXRhUHJvdmlkZXIuaGFzRXJyb3JzKClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJ0YWJsZS1lcnJvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAjZXJyb3JtZXNzYWdlPjxuZy1jb250ZW50IHNlbGVjdD1cIlt0YWJsZS1lcnJvci1tZXNzYWdlXVwiPjwvbmctY29udGVudD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtZXJyb3ItbWVzc2FnZVwiICpuZ0lmPVwiZXJyb3JtZXNzYWdlLmNoaWxkTm9kZXMubGVuZ3RoID09IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpIGNsYXNzPVwiYmhpLWNhdXRpb25cIj48L2k+IHt7IGxhYmVscy5lcnJvcmVkVGFibGVNZXNzYWdlIH19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8dGZvb3QgKm5nSWY9XCIhY29uZmlnLmZvb3RlcnNcIiBbbmdDbGFzc109XCJkYXRhUHJvdmlkZXIubGVuZ3RoICUgMiA9PSAwID8gJ29kZCcgOiAnZXZlbidcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibm92by10YWJsZS1mb290ZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGZvb3Q+XG4gICAgICAgICAgICAgICAgPHRmb290ICpuZ0Zvcj1cImxldCBmb290ZXIgb2YgZm9vdGVycztsZXQgaSA9IGluZGV4O1wiIGNsYXNzPVwibm92by10YWJsZS10b3RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCIoY29sdW1uLmlkIHx8IGNvbHVtbi5uYW1lKSArICctdG90YWwtJyArIGlcIj57eyBmb290ZXJbY29sdW1uLm5hbWVdIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rmb290PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9ub3ZvLWZvcm0+XG4gICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYmxlRWxlbWVudCBpbXBsZW1lbnRzIERvQ2hlY2sge1xuICBAVmlld0NoaWxkcmVuKCdmaWx0ZXJJbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KVxuICBmaWx0ZXJJbnB1dHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBASW5wdXQoKVxuICBjb25maWc6IE5vdm9UYWJsZUNvbmZpZyA9IHt9O1xuICBASW5wdXQoKVxuICBjb2x1bW5zOiBBcnJheTxhbnk+O1xuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBza2lwU29ydEFuZEZpbHRlckNsZWFyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIG1vZGU6IE5vdm9UYWJsZU1vZGUgPSBOb3ZvVGFibGVNb2RlLlZJRVc7XG4gIEBJbnB1dCgpXG4gIGVkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHJvd0lkZW50aWZpZXI6IHN0cmluZyA9ICdpZCc7XG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZyA9ICd0YWJsZSc7XG5cbiAgQE91dHB1dCgpXG4gIG9uUm93Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25Sb3dTZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25UYWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgX2RhdGFQcm92aWRlcjogUGFnZWRBcnJheUNvbGxlY3Rpb248YW55PjtcbiAgX3Jvd3M6IEFycmF5PGFueT4gPSBbXTtcbiAgc2VsZWN0ZWQ6IEFycmF5PGFueT4gPSBbXTtcbiAgYWN0aXZlSWQ6IG51bWJlciA9IDA7XG4gIG1hc3RlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBleHBhbmRBbGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaW5kZXRlcm1pbmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBsYXN0UGFnZTogbnVtYmVyID0gMDtcbiAgc2VsZWN0ZWRQYWdlQ291bnQ6IG51bWJlciA9IDA7XG4gIHNob3dTZWxlY3RBbGxNZXNzYWdlOiBib29sZWFuID0gZmFsc2U7XG4gIGN1cnJlbnRTb3J0Q29sdW1uOiBhbnk7XG4gIHBhZ2VkRGF0YTogQXJyYXk8YW55PiA9IFtdO1xuICBwYWdlU2VsZWN0ZWQ6IGFueTtcbiAgLy8gTWFwIHRvIGtlZXAgdHJhY2sgb2Ygd2hhdCBkcm9wZG93bnMgYXJlIHRvZ2dsZWRcbiAgLy8gVXNlZCB0byBwcm9wZXJseSAqbmdJZiB0aGUgPGxpc3Q+IHNvIHRoYXQgdGhlIGtlZXBGaWx0ZXJGb2N1c2VkIERpcmVjdGl2ZVxuICAvLyB3aWxsIHByb3Blcmx5IGZpcmUgdGhlIG5nQWZ0ZXJWaWV3SW5pdCBldmVudFxuICB0b2dnbGVkRHJvcGRvd25NYXA6IGFueSA9IHt9O1xuICBwdWJsaWMgTm92b1RhYmxlTW9kZSA9IE5vdm9UYWJsZU1vZGU7XG4gIHB1YmxpYyB0YWJsZUZvcm06IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe30pO1xuICBwdWJsaWMgdG9hc3Q6IHsgdGhlbWU6IHN0cmluZzsgaWNvbjogc3RyaW5nOyBtZXNzYWdlOiBzdHJpbmcgfTtcbiAgcHVibGljIGZvb3RlcnMgPSBbXTtcbiAgcHVibGljIGdyb3NzRmxhZ1RvQXZvaWRUaGVUYWJsZUZyb21CZWluZ1VnbHlXaGVuSGlkaW5nVGhlVG9hc3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgcm93cyhyb3dzOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy5kYXRhUHJvdmlkZXIgPSByb3dzO1xuICAgIGlmIChyb3dzICYmIHJvd3MubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXR1cENvbHVtbkRlZmF1bHRzKCk7XG4gICAgfVxuICAgIC8vIHRoaXMgaXMgYSB0ZW1wb3JhcnkvaGFja3kgZml4IHVudGlsIGFzeW5jIGRhdGFsb2FkaW5nIGlzIGhhbmRsZWQgd2l0aGluIHRoZSB0YWJsZVxuICAgIGlmICghdGhpcy5za2lwU29ydEFuZEZpbHRlckNsZWFyKSB7XG4gICAgICB0aGlzLmNsZWFyQWxsU29ydEFuZEZpbHRlcnMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgcm93cygpIHtcbiAgICByZXR1cm4gdGhpcy5fcm93cztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRhUHJvdmlkZXIoZHA6IGFueSkge1xuICAgIHRoaXMuX2RhdGFQcm92aWRlciA9IEFycmF5LmlzQXJyYXkoZHApID8gbmV3IFBhZ2VkQXJyYXlDb2xsZWN0aW9uPGFueT4oZHApIDogZHA7XG4gICAgdGhpcy5fZGF0YVByb3ZpZGVyLmRhdGFDaGFuZ2UucGlwZShkZWJvdW5jZVRpbWUoMTAwKSkuc3Vic2NyaWJlKChldmVudDogQ29sbGVjdGlvbkV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgY2FzZSBDb2xsZWN0aW9uRXZlbnQuQ0hBTkdFOlxuICAgICAgICAgIHRoaXMuX3Jvd3MgPSBldmVudC5kYXRhO1xuICAgICAgICAgIC8vIFNldHVwIGZvcm1cbiAgICAgICAgICB0aGlzLnRhYmxlRm9ybSA9IHRoaXMuYnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICByb3dzOiB0aGlzLmJ1aWxkZXIuYXJyYXkoW10pLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIFJlbW92ZSBhbGwgc2VsZWN0aW9uIG9uIHNvcnQgY2hhbmdlIGlmIHNlbGVjdGlvbiBpcyBvblxuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3dTZWxlY3Rpb25TdHlsZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgdGhpcy5wYWdlZERhdGEgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgdGhpcy5wYWdlU2VsZWN0ZWQgPSB0aGlzLnBhZ2VkRGF0YS5maWx0ZXIoKHIpID0+IHIuX3NlbGVjdGVkKTtcbiAgICAgICAgICAgIHRoaXMucm93U2VsZWN0SGFuZGxlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBGaW5kIHRoYXQgY29sdW1ucyB3ZSBtaWdodCBuZWVkIHRvIHN1bSB1cCB2aWEgdGhlIGZvb3RlclxuICAgICAgICAgIGxldCBjb2x1bW5zVG9TdW0gPSBbXTtcbiAgICAgICAgICBjb25zdCBjb2x1bW5TdW1zID0ge307XG4gICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZvb3RlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmZvb3RlcnMuZm9yRWFjaCgoY29uZmlnKSA9PiB7XG4gICAgICAgICAgICAgIGNvbHVtbnNUb1N1bS5wdXNoKC4uLmNvbmZpZy5jb2x1bW5zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gT25seSBoYXZlIHVuaXF1ZSBjb2x1bW5zLCBmaWx0ZXIgb3V0IGR1cGxpY2F0ZXNcbiAgICAgICAgICAgIGNvbHVtbnNUb1N1bSA9IGNvbHVtbnNUb1N1bS5maWx0ZXIoKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4gYXJyYXkuaW5kZXhPZihpdGVtKSA9PT0gaW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBNYWtlIGEgZm9ybSBmb3IgZWFjaCByb3dcbiAgICAgICAgICBjb25zdCB0YWJsZUZvcm1Sb3dzID0gPEZvcm1BcnJheT50aGlzLnRhYmxlRm9ybS5jb250cm9sc1sncm93cyddO1xuICAgICAgICAgIHRoaXMuX3Jvd3MuZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udHJvbHMgPSBbXTtcbiAgICAgICAgICAgIHJvdy5jb250cm9scyA9IHt9O1xuICAgICAgICAgICAgcm93Ll9lZGl0aW5nID0ge307XG4gICAgICAgICAgICByb3cuX2V4cGFuZGVkID0gdGhpcy5jb25maWcuZXhwYW5kQWxsO1xuICAgICAgICAgICAgcm93LnJvd0lkID0gdGhpcy5fcm93cy5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgICAgICAgIC8vIFVzZSB0aGUgY29udHJvbCBwYXNzZWQgb3IgdXNlIGEgUmVhZE9ubHlDb250cm9sIHNvIHRoYXQgdGhlIGZvcm0gaGFzIHRoZSB2YWx1ZXNcbiAgICAgICAgICAgICAgY29uc3QgY29udHJvbCA9IGNvbHVtbi5lZGl0b3JDb25maWdcbiAgICAgICAgICAgICAgICA/IENvbnRyb2xGYWN0b3J5LmNyZWF0ZShjb2x1bW4uZWRpdG9yVHlwZSwgY29sdW1uLmVkaXRvckNvbmZpZylcbiAgICAgICAgICAgICAgICA6IG5ldyBSZWFkT25seUNvbnRyb2woeyBrZXk6IGNvbHVtbi5uYW1lIH0pO1xuICAgICAgICAgICAgICByb3cuY29udHJvbHNbY29sdW1uLm5hbWVdID0gY29udHJvbDtcbiAgICAgICAgICAgICAgcm93Q29udHJvbHMucHVzaChjb250cm9sKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5mb3JtVXRpbHMuc2V0SW5pdGlhbFZhbHVlcyhyb3dDb250cm9scywgcm93LCBmYWxzZSk7XG4gICAgICAgICAgICB0YWJsZUZvcm1Sb3dzLnB1c2godGhpcy5mb3JtVXRpbHMudG9Gb3JtR3JvdXAocm93Q29udHJvbHMpKTtcbiAgICAgICAgICAgIC8vIFNldHVwIHRoZSB0b3RhbCBmb290ZXIgaWYgY29uZmlndXJlZFxuICAgICAgICAgICAgLy8gQXJyYXkgb2Yga2V5cyB0byB0b3RhbFxuICAgICAgICAgICAgaWYgKGNvbHVtbnNUb1N1bS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgY29sdW1uc1RvU3VtLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChIZWxwZXJzLmlzQmxhbmsoY29sdW1uU3Vtc1tjb2x1bW5dKSkge1xuICAgICAgICAgICAgICAgICAgY29sdW1uU3Vtc1tjb2x1bW5dID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29sdW1uU3Vtc1tjb2x1bW5dICs9IHJvd1tjb2x1bW5dO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAodGhpcy5tb2RlID09PSBOb3ZvVGFibGVNb2RlLkVESVQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VGFibGVFZGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFNldHVwIHRoZSBmb290ZXJzIChpZiBhbnkpXG4gICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZvb3RlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuZm9vdGVycyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5jb25maWcuZm9vdGVycy5mb3JFYWNoKChmb290ZXJDb25maWcsIGZvb3RlckNvbmZpZ0luZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGZvb3RlciA9IHt9O1xuICAgICAgICAgICAgICBmb290ZXJbZm9vdGVyQ29uZmlnLmxhYmVsQ29sdW1uXSA9IGZvb3RlckNvbmZpZy5sYWJlbDtcbiAgICAgICAgICAgICAgZm9vdGVyQ29uZmlnLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZvb3RlckNvbmZpZy5tZXRob2QgPT09ICdBVkcnICYmIHRoaXMuX3Jvd3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICBmb290ZXJbY29sdW1uXSA9IGNvbHVtblN1bXNbY29sdW1uXSAvIHRoaXMuX3Jvd3MubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBmb290ZXJbY29sdW1uXSA9IGNvbHVtblN1bXNbY29sdW1uXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLmZvb3RlcnMucHVzaChmb290ZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0aGlzLmNvbmZpZy5wYWdpbmcpIHtcbiAgICAgIHRoaXMuX2RhdGFQcm92aWRlci5wYWdlID0gdGhpcy5jb25maWcucGFnaW5nLmN1cnJlbnQ7XG4gICAgICB0aGlzLl9kYXRhUHJvdmlkZXIucGFnZVNpemUgPSB0aGlzLmNvbmZpZy5wYWdpbmcuaXRlbXNQZXJQYWdlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBQYWdpbmcgdHVybmVkIG9mZiwgcmV0dXJuIGJhc2ljYWxseSBhbGwgb2YgdGhlIGRhdGFcbiAgICAgIHRoaXMuX2RhdGFQcm92aWRlci5wYWdlID0gMTtcbiAgICAgIHRoaXMuX2RhdGFQcm92aWRlci5wYWdlU2l6ZSA9IDUwMDtcbiAgICB9XG4gICAgaWYgKGRwICYmIGRwLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0dXBDb2x1bW5EZWZhdWx0cygpO1xuICAgIH1cbiAgICB0aGlzLl9kYXRhUHJvdmlkZXIucmVmcmVzaCgpO1xuICB9XG4gIGdldCBkYXRhUHJvdmlkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFQcm92aWRlcjtcbiAgfVxuXG4gIGdldCBlZGl0aW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09IE5vdm9UYWJsZU1vZGUuRURJVDtcbiAgfVxuXG4gIGdldCBmb3JtVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFibGVGb3JtLnZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcHJpdmF0ZSBmb3JtVXRpbHM6IEZvcm1VdGlscywgcHJpdmF0ZSBidWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgIG5vdGlmeSgnW0RlcHJlY2F0ZWRdOiBUaGUgdGFibGUgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIG1pZ3JhdGUgdG8gbm92by1kYXRhLXRhYmxlcyEnKTtcbiAgfVxuXG4gIG9uRHJvcGRvd25Ub2dnbGVkKGV2ZW50LCBjb2x1bW4pOiB2b2lkIHtcbiAgICB0aGlzLnRvZ2dsZWREcm9wZG93bk1hcFtjb2x1bW5dID0gZXZlbnQ7XG4gIH1cblxuICBmb2N1c0lucHV0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpbHRlcklucHV0cyAmJiB0aGlzLmZpbHRlcklucHV0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZmlsdGVySW5wdXRzLmZvckVhY2goKGZpbHRlcklucHV0KSA9PiB7XG4gICAgICAgIGlmIChmaWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBmaWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCksIDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvblBhZ2VDaGFuZ2UoZXZlbnQpIHtcbiAgICAvLyB0aGlzLmRhdGFQcm92aWRlci5wYWdlID0gZXZlbnQucGFnZTtcbiAgICAvLyB0aGlzLmRhdGFQcm92aWRlci5wYWdlU2l6ZSA9IGV2ZW50Lml0ZW1zUGVyUGFnZTtcbiAgfVxuXG4gIGdldE9wdGlvbkRhdGFBdXRvbWF0aW9uSWQob3B0aW9uKSB7XG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsob3B0aW9uLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIG9wdGlvbi52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbjtcbiAgfVxuXG4gIHNldHVwQ29sdW1uRGVmYXVsdHMoKSB7XG4gICAgLy8gQ2hlY2sgY29sdW1ucyBmb3IgY2VsbCBvcHRpb24gdHlwZXNcbiAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICBpZiAoY29sdW1uICYmIGNvbHVtbi50eXBlKSB7XG4gICAgICAgIHN3aXRjaCAoY29sdW1uLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICAgIC8vIFNldCBvcHRpb25zIGJhc2VkIG9uIGRhdGVzIGlmIHRoZXJlIGFyZSBub25lXG4gICAgICAgICAgICBjb2x1bW4ub3B0aW9ucyA9IGNvbHVtbi5vcHRpb25zIHx8IHRoaXMuZ2V0RGVmYXVsdE9wdGlvbnMoY29sdW1uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5wYWdpbmcgJiYgdGhpcy5jb25maWcucGFnaW5nLmN1cnJlbnQgIT09IHRoaXMubGFzdFBhZ2UpIHtcbiAgICAgIHRoaXMucm93U2VsZWN0SGFuZGxlcigpO1xuICAgICAgdGhpcy5zaG93U2VsZWN0QWxsTWVzc2FnZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmxhc3RQYWdlID0gdGhpcy5jb25maWcucGFnaW5nID8gdGhpcy5jb25maWcucGFnaW5nLmN1cnJlbnQgOiAxO1xuICB9XG5cbiAgZ2V0UGFnZVN0YXJ0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnBhZ2luZyA/ICh0aGlzLmRhdGFQcm92aWRlci5wYWdlIC0gMSkgKiB0aGlzLmRhdGFQcm92aWRlci5wYWdlU2l6ZSA6IDA7XG4gIH1cblxuICBnZXRQYWdlRW5kKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnBhZ2luZyAmJiB0aGlzLmRhdGFQcm92aWRlci5wYWdlU2l6ZSA+IC0xID8gdGhpcy5nZXRQYWdlU3RhcnQoKSArIHRoaXMuZGF0YVByb3ZpZGVyLnBhZ2VTaXplIDogdGhpcy5yb3dzLmxlbmd0aDtcbiAgfVxuXG4gIGdldFJvd0NvbnRyb2xGb3JtKGkpOiBBYnN0cmFjdENvbnRyb2wge1xuICAgIGNvbnN0IHRhYmxlRm9ybVJvd3MgPSA8Rm9ybUFycmF5PnRoaXMudGFibGVGb3JtLmNvbnRyb2xzWydyb3dzJ107XG4gICAgcmV0dXJuIHRhYmxlRm9ybVJvd3MuY29udHJvbHNbaV07XG4gIH1cblxuICBvbkZpbHRlckNsaWNrKGNvbHVtbiwgZmlsdGVyKSB7XG4gICAgaWYgKGZpbHRlci5yYW5nZSAmJiAhY29sdW1uLmNhbGVuZGFyU2hvdykge1xuICAgICAgY29sdW1uLmNhbGVuZGVyU2hvdyA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbHVtbi5maWx0ZXIpICYmIGNvbHVtbi5tdWx0aXBsZSkge1xuICAgICAgaWYgKH5jb2x1bW4uZmlsdGVyLmluZGV4T2YoZmlsdGVyKSkge1xuICAgICAgICAvLyBSZW1vdmUgZmlsdGVyXG4gICAgICAgIGNvbHVtbi5maWx0ZXIuc3BsaWNlKGNvbHVtbi5maWx0ZXIuaW5kZXhPZihmaWx0ZXIpLCAxKTtcbiAgICAgICAgaWYgKGZpbHRlci5yYW5nZSkge1xuICAgICAgICAgIGNvbHVtbi5jYWxlbmRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2x1bW4uZmlsdGVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbHVtbi5maWx0ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBZGQgZmlsdGVyXG4gICAgICAgIGNvbHVtbi5maWx0ZXIucHVzaChmaWx0ZXIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29sdW1uLm11bHRpcGxlKSB7XG4gICAgICBjb2x1bW4uZmlsdGVyID0gbmV3IEFycmF5KCk7XG4gICAgICBjb2x1bW4uZmlsdGVyLnB1c2goSGVscGVycy5pc0JsYW5rKGZpbHRlci52YWx1ZSkgPyBmaWx0ZXIgOiBmaWx0ZXIudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2x1bW4uZmlsdGVyID0gSGVscGVycy5pc0JsYW5rKGZpbHRlci52YWx1ZSkgPyBmaWx0ZXIgOiBmaWx0ZXIudmFsdWU7XG4gICAgfVxuICAgIHRoaXMub25GaWx0ZXJDaGFuZ2UoKTtcbiAgfVxuXG4gIG9uRmlsdGVyQ2xlYXIoY29sdW1uOiBhbnkpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbHVtbi5maWx0ZXIgPSBudWxsO1xuICAgICAgY29sdW1uLmZyZWV0ZXh0RmlsdGVyID0gbnVsbDtcbiAgICAgIHRoaXMub25GaWx0ZXJDaGFuZ2UoKTtcbiAgICAgIGlmIChjb2x1bW4ub3JpZ2luYWxPcHRpb25zKSB7XG4gICAgICAgIGNvbHVtbi5vcHRpb25zID0gY29sdW1uLm9yaWdpbmFsT3B0aW9ucztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyQWxsU29ydEFuZEZpbHRlcnMoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmZpbHRlcmluZykge1xuICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICBjb2x1bW4uZmlsdGVyID0gbnVsbDtcbiAgICAgICAgY29sdW1uLnNvcnQgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIG1ldGhvZCB1cGRhdGVzIHRoZSByb3cgZGF0YSB0byByZWZsZWN0IHRoZSBhY3RpdmUgZmlsdGVycy5cbiAgICovXG4gIG9uRmlsdGVyQ2hhbmdlKGV2ZW50PzogRXZlbnQpIHtcbiAgICBpZiAodGhpcy5jb25maWcuZmlsdGVyaW5nKSB7XG4gICAgICAvLyBBcnJheSBvZiBmaWx0ZXJzXG4gICAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sKSA9PiAhSGVscGVycy5pc0VtcHR5KGNvbC5maWx0ZXIpKTtcbiAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCkge1xuICAgICAgICBsZXQgcXVlcnkgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBjb2x1bW4gb2YgZmlsdGVycykge1xuICAgICAgICAgIGlmIChIZWxwZXJzLmlzRnVuY3Rpb24oY29sdW1uLm1hdGNoKSkge1xuICAgICAgICAgICAgcXVlcnlbY29sdW1uLm5hbWVdID0gKHZhbHVlLCByZWNvcmQpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5tYXRjaChyZWNvcmQsIGNvbHVtbi5maWx0ZXIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbi5wcmVGaWx0ZXIgJiYgSGVscGVycy5pc0Z1bmN0aW9uKGNvbHVtbi5wcmVGaWx0ZXIpKSB7XG4gICAgICAgICAgICBxdWVyeSA9IE9iamVjdC5hc3NpZ24oe30sIHF1ZXJ5LCBjb2x1bW4ucHJlRmlsdGVyKHRoaXMuZXNjYXBlQ2hhcmFjdGVycyhjb2x1bW4uZmlsdGVyKSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjb2x1bW4uZmlsdGVyKSkge1xuICAgICAgICAgICAgLy8gVGhlIGZpbHRlcnMgYXJlIGFuIGFycmF5IChtdWx0aS1zZWxlY3QpLCBjaGVjayB2YWx1ZVxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBjb2x1bW4uZmlsdGVyO1xuICAgICAgICAgICAgLy8gV2UgaGF2ZSBhbiBhcnJheSBvZiB7dmFsdWU6ICcnLCBsYWJlbHM6ICcnfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnNbMF0udmFsdWUgfHwgb3B0aW9uc1swXS5sYWJlbCkge1xuICAgICAgICAgICAgICBvcHRpb25zID0gY29sdW1uLmZpbHRlci5tYXAoKG9wdCkgPT4gb3B0LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHF1ZXJ5W2NvbHVtbi5uYW1lXSA9IHsgYW55OiBvcHRpb25zIH07XG4gICAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4udHlwZSAmJiBjb2x1bW4udHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICBpZiAoY29sdW1uLmZpbHRlci5zdGFydERhdGUgJiYgY29sdW1uLmZpbHRlci5lbmREYXRlKSB7XG4gICAgICAgICAgICAgIHF1ZXJ5W2NvbHVtbi5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBtaW46IGRhdGVGbnMuc3RhcnRPZkRheShjb2x1bW4uZmlsdGVyLnN0YXJ0RGF0ZSksXG4gICAgICAgICAgICAgICAgbWF4OiBkYXRlRm5zLnN0YXJ0T2ZEYXkoZGF0ZUZucy5hZGREYXlzKGRhdGVGbnMuc3RhcnRPZkRheShjb2x1bW4uZmlsdGVyLmVuZERhdGUpLCAxKSksXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBxdWVyeVtjb2x1bW4ubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgbWluOiBjb2x1bW4uZmlsdGVyLm1pbiA/IGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZUb2RheSgpLCBjb2x1bW4uZmlsdGVyLm1pbikgOiBkYXRlRm5zLnN0YXJ0T2ZUb2RheSgpLFxuICAgICAgICAgICAgICAgIG1heDogY29sdW1uLmZpbHRlci5tYXggPyBkYXRlRm5zLmFkZERheXMoZGF0ZUZucy5zdGFydE9mVG9tb3Jyb3coKSwgY29sdW1uLmZpbHRlci5tYXgpIDogZGF0ZUZucy5zdGFydE9mVG9tb3Jyb3coKSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcXVlcnlbY29sdW1uLm5hbWVdID0gY29sdW1uLmZpbHRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEhlbHBlcnMuaXNGdW5jdGlvbih0aGlzLmNvbmZpZy5maWx0ZXJpbmcpKSB7XG4gICAgICAgICAgdGhpcy5jb25maWcuZmlsdGVyaW5nKHF1ZXJ5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9kYXRhUHJvdmlkZXIuZmlsdGVyID0gcXVlcnk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2RhdGFQcm92aWRlci5maWx0ZXIgPSB7fTtcbiAgICAgIH1cbiAgICAgIC8vIFRyaWNrbGUgZG93biB0byBrZWVwIHNvcnRcbiAgICAgIC8vIHRoaXMub25Tb3J0Q2hhbmdlKHRoaXMuY3VycmVudFNvcnRDb2x1bW4pO1xuICAgICAgdGhpcy5maXJlVGFibGVDaGFuZ2VFdmVudCgpO1xuXG4gICAgICAvLyBJZiBwYWdpbmcsIHJlc2V0IHBhZ2VcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5wYWdpbmcpIHtcbiAgICAgICAgdGhpcy5jb25maWcucGFnaW5nLmN1cnJlbnQgPSAxO1xuICAgICAgfVxuICAgICAgLy8gUmVtb3ZlIGFsbCBzZWxlY3Rpb24gb24gc29ydCBjaGFuZ2UgaWYgc2VsZWN0aW9uIGlzIG9uXG4gICAgICBpZiAodGhpcy5jb25maWcucm93U2VsZWN0aW9uU3R5bGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RBbGwoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVzY2FwZUNoYXJhY3RlcnMoZmlsdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZmlsdGVyLnJlcGxhY2UoLycvZywgJ1xcJ1xcJycpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyO1xuICB9XG5cbiAgaXNGaWx0ZXJBY3RpdmUoY29sdW1uLCBmaWx0ZXIpOiBib29sZWFuIHtcbiAgICAvLyBUT0RPOiBUaGlzIG5lZWRzIHRvIGJlIHJlZmFjdG9yZWRcbiAgICBsZXQgaXNBY3RpdmUgPSBmYWxzZTtcbiAgICBpZiAoY29sdW1uICYmICFIZWxwZXJzLmlzQmxhbmsoY29sdW1uLmZpbHRlcikgJiYgIUhlbHBlcnMuaXNCbGFuayhmaWx0ZXIpKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjb2x1bW4uZmlsdGVyKSkge1xuICAgICAgICBpZiAodHlwZW9mIGZpbHRlciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpc0FjdGl2ZSA9IGNvbHVtbi5maWx0ZXIuc29tZSgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubGFiZWwgPT09IGZpbHRlci5sYWJlbDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc0FjdGl2ZSA9IGNvbHVtbi5maWx0ZXIuaW5jbHVkZXMoZmlsdGVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb2x1bW4uZmlsdGVyID09PSB0eXBlb2YgZmlsdGVyKSB7XG4gICAgICAgICAgaXNBY3RpdmUgPSBjb2x1bW4uZmlsdGVyID09PSBmaWx0ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNBY3RpdmUgPSBjb2x1bW4uZmlsdGVyID09PSBmaWx0ZXIudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzQWN0aXZlO1xuICB9XG5cbiAgb25Tb3J0Q2hhbmdlKGNvbHVtbikge1xuICAgIHRoaXMuY3VycmVudFNvcnRDb2x1bW4gPSBjb2x1bW47XG4gICAgY29uc3Qgc29ydGVkQ29sdW1uczogYW55ID0gdGhpcy5jb2x1bW5zLmZpbHRlcigodGhpc0NvbHVtbikgPT4ge1xuICAgICAgcmV0dXJuIHRoaXNDb2x1bW4uc29ydCAmJiB0aGlzQ29sdW1uICE9PSB0aGlzLmN1cnJlbnRTb3J0Q29sdW1uO1xuICAgIH0pO1xuICAgIGZvciAoY29uc3Qgc29ydGVkQ29sdW1uIG9mIHNvcnRlZENvbHVtbnMpIHtcbiAgICAgIHNvcnRlZENvbHVtbi5zb3J0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoY29sdW1uKSB7XG4gICAgICBpZiAoSGVscGVycy5pc0Z1bmN0aW9uKHRoaXMuY29uZmlnLnNvcnRpbmcpKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLnNvcnRpbmcoKTtcbiAgICAgIH0gZWxzZSBpZiAoSGVscGVycy5pc0Z1bmN0aW9uKGNvbHVtbi5wcmVTb3J0KSkge1xuICAgICAgICB0aGlzLl9kYXRhUHJvdmlkZXIuc29ydCA9IFtdLmNvbmNhdChjb2x1bW4ucHJlU29ydChjb2x1bW4pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2RhdGFQcm92aWRlci5zb3J0ID0gW3sgZmllbGQ6IGNvbHVtbi5jb21wYXJlIHx8IGNvbHVtbi5uYW1lLCByZXZlcnNlOiBjb2x1bW4uc29ydCA9PT0gJ2Rlc2MnIH1dO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZpcmUgdGFibGUgY2hhbmdlIGV2ZW50XG4gICAgLy8gdGhpcy5maXJlVGFibGVDaGFuZ2VFdmVudCgpO1xuXG4gICAgLy8gSWYgcGFnaW5nLCByZXNldCBwYWdlXG4gICAgaWYgKHRoaXMuY29uZmlnLnBhZ2luZykge1xuICAgICAgdGhpcy5jb25maWcucGFnaW5nLmN1cnJlbnQgPSAxO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbGwgc2VsZWN0aW9uIG9uIHNvcnQgY2hhbmdlIGlmIHNlbGVjdGlvbiBpcyBvblxuICAgIGlmICh0aGlzLmNvbmZpZy5yb3dTZWxlY3Rpb25TdHlsZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgdGhpcy5zZWxlY3RBbGwoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGZpcmVUYWJsZUNoYW5nZUV2ZW50KCkge1xuICAgIC8vIENvbnN0cnVjdCBhIHRhYmxlIGNoYW5nZSBvYmplY3RcbiAgICBjb25zdCBvblRhYmxlQ2hhbmdlOiBhbnkgPSB7fTtcbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sKSA9PiBjb2wuZmlsdGVyICYmIGNvbC5maWx0ZXIubGVuZ3RoKTtcbiAgICBvblRhYmxlQ2hhbmdlLmZpbHRlciA9IGZpbHRlcnMubGVuZ3RoID8gZmlsdGVycyA6IGZhbHNlO1xuICAgIG9uVGFibGVDaGFuZ2Uuc29ydCA9IHRoaXMuY3VycmVudFNvcnRDb2x1bW4gPyB0aGlzLmN1cnJlbnRTb3J0Q29sdW1uIDogZmFsc2U7XG4gICAgb25UYWJsZUNoYW5nZS5yb3dzID0gdGhpcy5yb3dzO1xuXG4gICAgLy8gRW1pdCBldmVudFxuICAgIHRoaXMub25UYWJsZUNoYW5nZS5lbWl0KG9uVGFibGVDaGFuZ2UpO1xuICB9XG5cbiAgZmluZENvbHVtbkluZGV4KHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLmNvbHVtbnNbaV0ubmFtZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgb25PcmRlckNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IG9sZEluZGV4ID0gdGhpcy5maW5kQ29sdW1uSW5kZXgoZXZlbnQuZmlyc3QubmFtZSk7XG4gICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLmZpbmRDb2x1bW5JbmRleChldmVudC5zZWNvbmQubmFtZSk7XG4gICAgdGhpcy5jb2x1bW5zLnNwbGljZShuZXdJbmRleCwgMCwgdGhpcy5jb2x1bW5zLnNwbGljZShvbGRJbmRleCwgMSlbMF0pO1xuICAgIHRoaXMub25Tb3J0Q2hhbmdlKHRoaXMuY3VycmVudFNvcnRDb2x1bW4pO1xuICB9XG5cbiAgZXhwYW5kQWxsT25QYWdlKGV4cGFuZGVkKSB7XG4gICAgdGhpcy5jb25maWcuZXhwYW5kQWxsID0gIWV4cGFuZGVkO1xuICAgIGZvciAoY29uc3Qgcm93IG9mIHRoaXMuZGF0YVByb3ZpZGVyLmxpc3QpIHtcbiAgICAgIHJvdy5fZXhwYW5kZWQgPSB0aGlzLmNvbmZpZy5leHBhbmRBbGw7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0UGFnZShkYXRhPzogYW55KSB7XG4gICAgaWYgKCF0aGlzLm1hc3Rlcikge1xuICAgICAgdGhpcy5zZWxlY3RBbGwoZmFsc2UpO1xuICAgICAgLy8gT25seSBzaG93IHRoZSBzZWxlY3QgYWxsIG1lc3NhZ2Ugd2hlbiB0aGVyZSBpcyBvbmx5IG9uZSBuZXcgcGFnZSBzZWxlY3RlZCBhdCBhIHRpbWVcbiAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgPSB0aGlzLnNlbGVjdGVkUGFnZUNvdW50ID4gMCA/IHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgLSAxIDogMDtcbiAgICAgIHRoaXMuc2hvd1NlbGVjdEFsbE1lc3NhZ2UgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAvLyB0aGlzLnBhZ2VkRGF0YSA9IHRoaXMucm93cy5zbGljZSh0aGlzLmdldFBhZ2VTdGFydCgpLCB0aGlzLmdldFBhZ2VFbmQoKSk7XG4gICAgICBmb3IgKGNvbnN0IHJvdyBvZiB0aGlzLnBhZ2VkRGF0YSkge1xuICAgICAgICByb3cuX3NlbGVjdGVkID0gdGhpcy5tYXN0ZXI7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5kYXRhUHJvdmlkZXIubGlzdC5maWx0ZXIoKHIpID0+IHIuX3NlbGVjdGVkKTtcbiAgICAgIHRoaXMucGFnZVNlbGVjdGVkID0gdGhpcy5wYWdlZERhdGEuZmlsdGVyKChyKSA9PiByLl9zZWxlY3RlZCk7XG4gICAgICB0aGlzLmVtaXRTZWxlY3RlZCh0aGlzLnNlbGVjdGVkKTtcbiAgICAgIC8vIE9ubHkgc2hvdyB0aGUgc2VsZWN0IGFsbCBtZXNzYWdlIHdoZW4gdGhlcmUgaXMgb25seSBvbmUgbmV3IHBhZ2Ugc2VsZWN0ZWQgYXQgYSB0aW1lXG4gICAgICB0aGlzLnNlbGVjdGVkUGFnZUNvdW50Kys7XG4gICAgICB0aGlzLnNob3dTZWxlY3RBbGxNZXNzYWdlID0gdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCA9PT0gMSAmJiB0aGlzLnNlbGVjdGVkLmxlbmd0aCAhPT0gdGhpcy5kYXRhUHJvdmlkZXIudG90YWw7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0QWxsKHZhbHVlKSB7XG4gICAgdGhpcy5tYXN0ZXIgPSB2YWx1ZTtcbiAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiB0aGlzLmRhdGFQcm92aWRlci5saXN0KSB7XG4gICAgICByb3cuX3NlbGVjdGVkID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZSA/IHRoaXMuZGF0YVByb3ZpZGVyLmxpc3QgOiBbXTtcbiAgICB0aGlzLnNob3dTZWxlY3RBbGxNZXNzYWdlID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCA9IHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgPiAwID8gdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCAtIDEgOiAwO1xuICAgIHRoaXMucm93U2VsZWN0SGFuZGxlcigpO1xuICB9XG5cbiAgcm93U2VsZWN0SGFuZGxlcihkYXRhPzogYW55KSB7XG4gICAgLy8gdGhpcy5wYWdlZERhdGEgPSB0aGlzLnJvd3Muc2xpY2UodGhpcy5nZXRQYWdlU3RhcnQoKSwgdGhpcy5nZXRQYWdlRW5kKCkpO1xuICAgIHRoaXMucGFnZVNlbGVjdGVkID0gdGhpcy5wYWdlZERhdGEuZmlsdGVyKChyKSA9PiByLl9zZWxlY3RlZCk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuZGF0YVByb3ZpZGVyLmxpc3QuZmlsdGVyKChyKSA9PiByLl9zZWxlY3RlZCk7XG4gICAgaWYgKHRoaXMucGFnZVNlbGVjdGVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5tYXN0ZXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wYWdlU2VsZWN0ZWQubGVuZ3RoID09PSB0aGlzLnBhZ2VkRGF0YS5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFzdGVyID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hc3RlciA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gdHJ1ZTtcblxuICAgICAgLy8gQnJlYWtpbmcgdGhlIHNlbGVjdGVkIHBhZ2UgY291bnRcbiAgICAgIHRoaXMuc2hvd1NlbGVjdEFsbE1lc3NhZ2UgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgPSB0aGlzLnNlbGVjdGVkUGFnZUNvdW50ID4gMCA/IHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgLSAxIDogMDtcbiAgICB9XG4gICAgdGhpcy5lbWl0U2VsZWN0ZWQodGhpcy5zZWxlY3RlZCk7XG4gIH1cblxuICBlbWl0U2VsZWN0ZWQoc2VsZWN0ZWQpIHtcbiAgICB0aGlzLm9uUm93U2VsZWN0LmVtaXQoeyBsZW5ndGg6IHNlbGVjdGVkLmxlbmd0aCwgc2VsZWN0ZWQgfSk7XG4gIH1cblxuICByb3dDbGlja0hhbmRsZXIocm93KSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnJvd1NlbGVjdCkge1xuICAgICAgdGhpcy5hY3RpdmVJZCA9IHJvdy5pZCB8fCAwO1xuICAgICAgdGhpcy5vblJvd0NsaWNrLmVtaXQocm93KTtcbiAgICB9XG4gIH1cblxuICBnZXREZWZhdWx0T3B0aW9ucyhjb2x1bW4pIHtcbiAgICAvLyBUT0RPIC0gbmVlZHMgdG8gY29tZSBmcm9tIGxhYmVsIHNlcnZpY2UgLSBodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy9pc3N1ZXMvMTE2XG4gICAgY29uc3Qgb3B0czogYW55W10gPSBbXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MURheSwgbWluOiAtMSwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0N0RheXMsIG1pbjogLTcsIG1heDogMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDMwRGF5cywgbWluOiAtMzAsIG1heDogMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDkwRGF5cywgbWluOiAtOTAsIG1heDogMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDFZZWFyLCBtaW46IC0zNjYsIG1heDogMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDFEYXksIG1pbjogMCwgbWF4OiAxIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0N0RheXMsIG1pbjogMCwgbWF4OiA3IH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MzBEYXlzLCBtaW46IDAsIG1heDogMzAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQ5MERheXMsIG1pbjogMCwgbWF4OiA5MCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDFZZWFyLCBtaW46IDAsIG1heDogMzY2IH0sXG4gICAgXTtcblxuICAgIGlmIChjb2x1bW4gJiYgY29sdW1uLnJhbmdlKSB7XG4gICAgICBvcHRzLnB1c2goe1xuICAgICAgICBsYWJlbDogdGhpcy5sYWJlbHMuY3VzdG9tRGF0ZVJhbmdlLFxuICAgICAgICByYW5nZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gb3B0cztcbiAgfVxuXG4gIG9uQ2FsZW5kZXJTZWxlY3QoY29sdW1uLCBldmVudCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnN0YXJ0RGF0ZSAmJiBldmVudC5lbmREYXRlKSB7XG4gICAgICAgIHRoaXMub25GaWx0ZXJDaGFuZ2UoKTtcbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH1cblxuICBvbkZpbHRlcktleXdvcmRzKGNvbmZpZykge1xuICAgIGlmIChjb25maWcgJiYgY29uZmlnLmZpbHRlcmluZyAmJiBjb25maWcuZmlsdGVyaW5nLmZyZWV0ZXh0RmlsdGVyKSB7XG4gICAgICBjb25zdCBmaWx0ZXJLZXl3b3JkcyA9IGNvbmZpZy5maWx0ZXJpbmcuZnJlZXRleHRGaWx0ZXIudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmICghY29uZmlnLmZpbHRlcmluZy5vcmlnaW5hbE9wdGlvbnMpIHtcbiAgICAgICAgY29uZmlnLmZpbHRlcmluZy5vcmlnaW5hbE9wdGlvbnMgPSBjb25maWcuZmlsdGVyaW5nLm9wdGlvbnM7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXdPcHRpb25zID0gY29uZmlnLmZpbHRlcmluZy5vcmlnaW5hbE9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gb3B0aW9uICYmIG9wdGlvbi5sYWJlbCA/IG9wdGlvbi5sYWJlbCA6IG9wdGlvbjtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpID8gdmFsdWUudG9Mb3dlckNhc2UoKSA6IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgPT09IGZpbHRlcktleXdvcmRzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAofnZhbHVlLmluZGV4T2YoZmlsdGVyS2V5d29yZHMpIHx8IH52YWx1ZS5pbmRleE9mKGZpbHRlcktleXdvcmRzKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgY29uZmlnLmZpbHRlcmluZy5vcHRpb25zID0gbmV3T3B0aW9ucztcbiAgICAgIGNvbmZpZy5maWx0ZXJpbmcuZmlsdGVyID0gY29uZmlnLmZpbHRlcmluZy5mcmVldGV4dEZpbHRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLmZpbHRlcmluZy5vcHRpb25zID0gY29uZmlnLmZpbHRlcmluZy5vcmlnaW5hbE9wdGlvbnM7XG4gICAgfVxuICAgIHRoaXMub25GaWx0ZXJDaGFuZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgVGFibGUgaW50byBFRElUIG1vZGUsIGJhc2VkIG9uIHRoZSByb3cvY29sdW1uIHBhc3NlZCB5b3UgY2FuIGVudGVyIGluIGEgZmV3IHN0YXRlc1xuICAgKiAoMSkgc2V0VGFibGVFZGl0KCkgLSBkb24ndCBwYXNzIGFueSB0byBwdXQgdGhlIEZVTEwgdGFibGUgaW50byBlZGl0IG1vZGVcbiAgICogKDIpIHNldFRhYmxlRWRpdCgxKSAtIHBhc3Mgb25seSByb3cgdG8gcHV0IHRoYXQgRlVMTCByb3cgb2YgdGhlIHRhYmxlIGludG8gZWRpdCBtb2RlXG4gICAqICgzKSBzZXRUYWJsZUVkaXQoMSwgMSkgLSBwYXNzIHJvdyBhbmQgY29sdW1uIHRvIHB1dCB0aGF0IGNvbHVtbiBvZiB0aGUgcm93IG9mIHRoZSB0YWJsZSBpbnRvIGVkaXQgbW9kZVxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgc2V0VGFibGVFZGl0KHJvd051bWJlcj86IG51bWJlciwgY29sdW1uTnVtYmVyPzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5tb2RlID0gTm92b1RhYmxlTW9kZS5FRElUO1xuICAgIHRoaXMuX2RhdGFQcm92aWRlci5lZGl0KCk7XG4gICAgdGhpcy5fcm93cy5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICByb3cuX2VkaXRpbmcgPSByb3cuX2VkaXRpbmcgfHwge307XG4gICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uLCBjb2x1bW5JbmRleCkgPT4ge1xuICAgICAgICBpZiAoY29sdW1uLnZpZXdPbmx5KSB7XG4gICAgICAgICAgcm93Ll9lZGl0aW5nW2NvbHVtbi5uYW1lXSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKEhlbHBlcnMuaXNFbXB0eShyb3dOdW1iZXIpICYmIEhlbHBlcnMuaXNFbXB0eShjb2x1bW5OdW1iZXIpKSB7XG4gICAgICAgICAgcm93Ll9lZGl0aW5nW2NvbHVtbi5uYW1lXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoIUhlbHBlcnMuaXNFbXB0eShyb3dOdW1iZXIpICYmIHJvd0luZGV4ID09PSBOdW1iZXIocm93TnVtYmVyKSAmJiBIZWxwZXJzLmlzRW1wdHkoY29sdW1uTnVtYmVyKSkge1xuICAgICAgICAgIHJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV0gPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkocm93TnVtYmVyKSAmJlxuICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29sdW1uTnVtYmVyKSAmJlxuICAgICAgICAgIHJvd0luZGV4ID09PSBOdW1iZXIocm93TnVtYmVyKSAmJlxuICAgICAgICAgIGNvbHVtbkluZGV4ID09PSBOdW1iZXIoY29sdW1uTnVtYmVyKVxuICAgICAgICApIHtcbiAgICAgICAgICByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBMZWF2ZXMgZWRpdCBtb2RlIGZvciB0aGUgVGFibGUgYW5kIHB1dHMgZXZlcnl0aGluZyBiYWNrIHRvIFZJRVcgb25seVxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKiBAcGFyYW0gY2FuY2VsIC0gd2hldGhlciBvciBub3QgdG8gc2F2ZSBkYXRhIG9yIHVuZG9cbiAgICovXG4gIHByaXZhdGUgbGVhdmVFZGl0TW9kZShjYW5jZWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm1vZGUgPSBOb3ZvVGFibGVNb2RlLlZJRVc7XG4gICAgdGhpcy5fcm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHJvdy5fZWRpdGluZyA9IHJvdy5fZWRpdGluZyB8fCB7fTtcbiAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgcm93Ll9lZGl0aW5nW2NvbHVtbi5uYW1lXSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKGNhbmNlbCkge1xuICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLnVuZG8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLmNvbW1pdCgpO1xuICAgIH1cbiAgICB0aGlzLmhpZGVUb2FzdE1lc3NhZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQWRkcyBhIG5ldyByb3cgaW50byB0aGUgdGFibGUgdG8gYmUgZWRpdGVkLCBjYW4gYmUgY2FsbGVkIGZyb20gYSBsb2NhbCByZWZlcmVuY2Ugb2YgdGhlIHRhYmxlIGluIHlvdXIgdGVtcGxhdGVcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICovXG4gIGFkZEVkaXRhYmxlUm93KGRlZmF1bHRWYWx1ZTogYW55ID0ge30pOiB2b2lkIHtcbiAgICBjb25zdCB0YWJsZUZvcm1Sb3dzID0gPEZvcm1BcnJheT50aGlzLnRhYmxlRm9ybS5jb250cm9sc1sncm93cyddO1xuICAgIGNvbnN0IHJvdzogYW55ID0ge307XG4gICAgY29uc3Qgcm93Q29udHJvbHMgPSBbXTtcbiAgICByb3cuY29udHJvbHMgPSB7fTtcbiAgICByb3cuX2VkaXRpbmcgPSB7fTtcbiAgICByb3cucm93SWQgPSB0aGlzLl9yb3dzLmxlbmd0aCArIDE7XG4gICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgLy8gVXNlIHRoZSBjb250cm9sIHBhc3NlZCBvciB1c2UgYSBSZWFkT25seUNvbnRyb2wgc28gdGhhdCB0aGUgZm9ybSBoYXMgdGhlIHZhbHVlc1xuICAgICAgY29uc3QgY29udHJvbCA9IGNvbHVtbi5lZGl0b3JDb25maWdcbiAgICAgICAgPyBDb250cm9sRmFjdG9yeS5jcmVhdGUoY29sdW1uLmVkaXRvclR5cGUsIGNvbHVtbi5lZGl0b3JDb25maWcpXG4gICAgICAgIDogbmV3IFJlYWRPbmx5Q29udHJvbCh7IGtleTogY29sdW1uLm5hbWUgfSk7XG4gICAgICBjb250cm9sLnZhbHVlID0gbnVsbDsgLy8gcmVtb3ZlIGNvcGllZCBjb2x1bW4gdmFsdWVcbiAgICAgIHJvdy5jb250cm9sc1tjb2x1bW4ubmFtZV0gPSBjb250cm9sO1xuICAgICAgcm93Ll9lZGl0aW5nW2NvbHVtbi5uYW1lXSA9ICFjb2x1bW4udmlld09ubHk7XG4gICAgICByb3dDb250cm9scy5wdXNoKGNvbnRyb2wpO1xuICAgIH0pO1xuICAgIHRoaXMuZm9ybVV0aWxzLnNldEluaXRpYWxWYWx1ZXMocm93Q29udHJvbHMsIGRlZmF1bHRWYWx1ZSwgZmFsc2UpO1xuICAgIHRhYmxlRm9ybVJvd3MucHVzaCh0aGlzLmZvcm1VdGlscy50b0Zvcm1Hcm91cChyb3dDb250cm9scykpO1xuICAgIHRoaXMuX3Jvd3MucHVzaChyb3cpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBWYWxpZGF0ZXMgdGhlIEZvcm0gaW5zaWRlIG9mIHRoZSBUYWJsZSwgaWYgdGhlcmUgYXJlIGVycm9ycyBpdCB3aWxsIGRpc3BsYXkvcmV0dXJuIHRoZSBlcnJvcnMgZm9yIGVhY2ggcm93LlxuICAgKiBJZiB0aGVyZSBhcmUgbm8gZXJyb3JzLCB0aGVuIGl0IHdpbGwgcmV0dXJuIE9OTFkgdGhlIGNoYW5nZWQgZGF0YSBmb3IgZWFjaCByb3csIHRoZSBkYXRhIHJldHVybmVkIHdpbGwgYmUgaW4gdGhlIGZvcm06XG4gICAqIHsgaWQ6IElEX09GX1JFQ09SRCwga2V5OiB2YWx1ZSB9IC0tIGRhdGEgdGhhdCB3YXMgdXBkYXRlZFxuICAgKiB7IGlkOiB1bmRlZmluZWQsIGtleTogdmFsdWUgfSAtLSBkYXRhIHRoYXQgd2FzIGFkZGVkXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICB2YWxpZGF0ZUFuZEdldFVwZGF0ZWREYXRhKCk6IHsgY2hhbmdlZD86IGFueVtdOyBlcnJvcnM/OiB7IGVycm9yczogYW55OyByb3c6IGFueTsgaW5kZXg6IG51bWJlciB9W10gfSB7XG4gICAgaWYgKHRoaXMudGFibGVGb3JtICYmIHRoaXMudGFibGVGb3JtLmNvbnRyb2xzICYmIHRoaXMudGFibGVGb3JtLmNvbnRyb2xzWydyb3dzJ10pIHtcbiAgICAgIGNvbnN0IGNoYW5nZWRSb3dzID0gW107XG4gICAgICBjb25zdCBlcnJvcnMgPSBbXTtcbiAgICAgIC8vIEdvIG92ZXIgdGhlIEZvcm1BcnJheSdzIGNvbnRyb2xzXG4gICAgICAodGhpcy50YWJsZUZvcm0uY29udHJvbHNbJ3Jvd3MnXSBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzLmZvckVhY2goKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGxldCBjaGFuZ2VkUm93ID0gbnVsbDtcbiAgICAgICAgbGV0IGVycm9yID0gbnVsbDtcbiAgICAgICAgLy8gR28gb3ZlciB0aGUgZm9ybSBncm91cCBjb250cm9sc1xuICAgICAgICBPYmplY3Qua2V5cyhmb3JtR3JvdXAuY29udHJvbHMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udHJvbCA9IGZvcm1Hcm91cC5jb250cm9sc1trZXldO1xuICAgICAgICAgIC8vIEhhbmRsZSB2YWx1ZSBjaGFuZ2luZ1xuICAgICAgICAgIGlmIChjb250cm9sICYmIGNvbnRyb2wuZGlydHkgJiYgIWNvbnRyb2wuZXJyb3JzKSB7XG4gICAgICAgICAgICBpZiAoIWNoYW5nZWRSb3cpIHtcbiAgICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBJRCwgc28gd2UgaGF2ZSBzb21lIGtleSB0byBzYXZlIGFnYWluc3RcbiAgICAgICAgICAgICAgY2hhbmdlZFJvdyA9IHt9O1xuICAgICAgICAgICAgICBpZiAodGhpcy5fcm93c1tpbmRleF0uaWQpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkUm93LmlkID0gdGhpcy5fcm93c1tpbmRleF0uaWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGRpcnR5LCBncmFiIHZhbHVlIG9mZiB0aGUgZm9ybVxuICAgICAgICAgICAgY2hhbmdlZFJvd1trZXldID0gdGhpcy50YWJsZUZvcm0udmFsdWVbJ3Jvd3MnXVtpbmRleF1ba2V5XTtcbiAgICAgICAgICAgIC8vIFNldCB2YWx1ZSBiYWNrIHRvIHJvdyAoc2hvdWxkIGJlIGFscmVhZHkgZG9uZSB2aWEgdGhlIHNlcnZlciBjYWxsLCBidXQgZG8gaXQgYW55d2F5KVxuICAgICAgICAgICAgdGhpcy5fcm93c1tpbmRleF1ba2V5XSA9IGNoYW5nZWRSb3dba2V5XTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRyb2wgJiYgY29udHJvbC5lcnJvcnMpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvcnNcbiAgICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgICAgZXJyb3IgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yW2tleV0gPSBjb250cm9sLmVycm9ycztcbiAgICAgICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjaGFuZ2VkUm93KSB7XG4gICAgICAgICAgY2hhbmdlZFJvd3MucHVzaChjaGFuZ2VkUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7IGVycm9yczogZXJyb3IsIHJvdzogdGhpcy5fcm93c1tpbmRleF0sIGluZGV4IH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJldCA9IHt9O1xuICAgICAgLy8gUmV0dXJuIGVycm9ycyBpZiBhbnksIG90aGVyd2lzZSByZXR1cm4gdGhlIGNoYW5nZWQgcm93c1xuICAgICAgaWYgKGVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgY2hhbmdlZDogY2hhbmdlZFJvd3MgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGVycm9ycyB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVmcmVzaCB0aGUgZGF0YSBwcm92aWRlciBhbmQgbGVhdmUgZWRpdCBtb2RlXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICBjYW5jZWxFZGl0aW5nKCk6IHZvaWQge1xuICAgIHRoaXMubGVhdmVFZGl0TW9kZSh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVmcmVzaCB0aGUgZGF0YSBwcm92aWRlciBhbmQgbGVhdmUgZWRpdCBtb2RlXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICBzYXZlQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmxlYXZlRWRpdE1vZGUoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBEaXNwbGF5cyBhIHRvYXN0IG1lc3NhZ2UgaW5zaWRlIG9mIHRoZSB0YWJsZVxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgZGlzcGxheVRvYXN0TWVzc2FnZSh0b2FzdDogeyBpY29uOiBzdHJpbmc7IHRoZW1lOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9LCBoaWRlRGVsYXk/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnRvYXN0ID0gdG9hc3Q7XG4gICAgaWYgKGhpZGVEZWxheSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmhpZGVUb2FzdE1lc3NhZ2UoKSwgaGlkZURlbGF5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEZvcmNlIGhpZGUgdGhlIHRvYXN0IG1lc3NhZ2VcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICovXG4gIGhpZGVUb2FzdE1lc3NhZ2UoKTogdm9pZCB7XG4gICAgdGhpcy50b2FzdCA9IG51bGw7XG4gICAgLy8gSGFjayB0byBtYWtlIHRoZSB0YWJsZSBkaXNwbGF5IHByb3Blcmx5IGFmdGVyIGhpZGluZyB0aGUgdG9hc3RcbiAgICB0aGlzLmdyb3NzRmxhZ1RvQXZvaWRUaGVUYWJsZUZyb21CZWluZ1VnbHlXaGVuSGlkaW5nVGhlVG9hc3QgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5ncm9zc0ZsYWdUb0F2b2lkVGhlVGFibGVGcm9tQmVpbmdVZ2x5V2hlbkhpZGluZ1RoZVRvYXN0ID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIGRpc3BsYXkgdGhlIGxvYWRpbmcgb3ZlcmxheSBvbiB0aGUgdGFibGVcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICovXG4gIHRvZ2dsZUxvYWRpbmcoc2hvdzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyA9IHNob3c7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIGhpZGUgYSBjb2x1bW4gaW4gZWRpdCBvciB2aWV3IG1vZGVcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICovXG4gIGlzQ29sdW1uSGlkZGVuKGNvbHVtbjogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdGluZyA/ICEhY29sdW1uLmhpZGVDb2x1bW5PbkVkaXQgOiAhIWNvbHVtbi5oaWRlQ29sdW1uT25WaWV3O1xuICB9XG59XG4iXX0=