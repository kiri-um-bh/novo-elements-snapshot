/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/Table.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
     * \@name setupColumnDefaults
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
     * \@name ngDoCheck
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
     * \@name getPageStart
     * @return {?}
     */
    getPageStart() {
        return this.config.paging ? (this.dataProvider.page - 1) * this.dataProvider.pageSize : 0;
    }
    /**
     * \@name getPageEnd
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
     * \@name onFilterClick
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
     * \@name onFilterClear
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
     * \@name onFilterChange
     *
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
     * \@name onSortChange
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
     * \@name fireTableChangeEvent
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
     * \@name onOrderChange
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
     * \@name selectPage
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
     * \@name selectPage
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
     * \@name selectAll
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
     * \@name rowSelectHandler
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
     * \@name emitSelected
     * @param {?} selected
     * @return {?}
     */
    emitSelected(selected) {
        this.onRowSelect.emit({ length: selected.length, selected });
    }
    /**
     * \@name rowClickHandler
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
     * \@name leaveEditMode
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
     * \@name addEditableRow
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
     * \@name validateAndGetUpdatedData
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
     * \@name cancelEditing
     * \@description Refresh the data provider and leave edit mode
     * \@memberOf NovoTableElement
     * @return {?}
     */
    cancelEditing() {
        this.leaveEditMode(true);
    }
    /**
     * \@name saveChanges
     * \@description Refresh the data provider and leave edit mode
     * \@memberOf NovoTableElement
     * @return {?}
     */
    saveChanges() {
        this.leaveEditMode(false);
    }
    /**
     * \@name displayToastMessage
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
     * \@name hideToastMessage
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
     * \@name toggleLoading
     * \@description display the loading overlay on the table
     * \@memberOf NovoTableElement
     * @param {?} show
     * @return {?}
     */
    toggleLoading(show) {
        this.loading = show;
    }
    /**
     * \@name isColumnHidden
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvVGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBVyxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBOEIsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFcEYsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUU5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7OztBQUU1RCxxQ0EyQkM7OztJQXpCQyxpQ0FNRTs7SUFFRixrQ0FLRzs7SUFFSCxvQ0FBMEI7O0lBQzFCLGtDQUF3Qjs7SUFDeEIsbUNBQThCOztJQUM5QixtQ0FBOEI7O0lBQzlCLDRDQUEyQjs7SUFDM0Isb0NBQW9COztJQUNwQixxQ0FBcUI7O0lBQ3JCLDBDQUFzQjs7SUFDdEIsb0NBQW9COztJQUNwQiwyQ0FBMkI7OztBQUk3QixNQUFZLGFBQWE7SUFDdkIsSUFBSSxHQUFJO0lB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c0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgRG9DaGVjaywgRWxlbWVudFJlZiwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIEZvcm1BcnJheSwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtLXV0aWxzL0Zvcm1VdGlscyc7XG5pbXBvcnQgeyBSZWFkT25seUNvbnRyb2wsIENvbnRyb2xGYWN0b3J5IH0gZnJvbSAnLi8uLi9mb3JtL0Zvcm1Db250cm9scyc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uRXZlbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXByb3ZpZGVyL0NvbGxlY3Rpb25FdmVudCc7XG5pbXBvcnQgeyBQYWdlZEFycmF5Q29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtcHJvdmlkZXIvUGFnZWRBcnJheUNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm92b1RhYmxlQ29uZmlnIHtcbiAgLy8gUGFnaW5nIGNvbmZpZ1xuICBwYWdpbmc/OiB7XG4gICAgY3VycmVudDogbnVtYmVyOyAvLyBjdXJyZW50IHBhZ2VcbiAgICBpdGVtc1BlclBhZ2U6IG51bWJlcjsgLy8gaXRlbXMgcGVyIHBhZ2VcbiAgICBvblBhZ2VDaGFuZ2U6IEZ1bmN0aW9uOyAvLyBmdW5jdGlvbiB0byBoYW5kbGUgcGFnZSBjaGFuZ2luZ1xuICAgIHJvd09wdGlvbnM/OiB7IHZhbHVlOiBudW1iZXI7IGxhYmVsOiBzdHJpbmcgfVtdOyAvLyBwYWdlIG9wdGlvbnNcbiAgICBkaXNhYmxlUGFnZVNlbGVjdGlvbj86IGJvb2xlYW47IC8vIGRpc2FibGVzIHRoZSBwYWdlcyBmcm9tIGJlaW5nIHNlbGVjdGVkXG4gIH07XG4gIC8vIEZvb3RlciBjb25maWcgKHRvdGFsIGZvb3RlcilcbiAgZm9vdGVycz86IEFycmF5PHtcbiAgICBjb2x1bW5zOiBBcnJheTxzdHJpbmc+OyAvLyBzdHJpbmcgYXJyYXkgb2YgY29sdW1ucyB0byB0b3RhbFxuICAgIG1ldGhvZDogc3RyaW5nOyAvLyBtZXRob2QgdG8gdXNlIGZvciB0aGUgZm9vdGVyLCBTVU0gfCBBVkcsIGRlZmF1bHRzIHRvIFNVTVxuICAgIGxhYmVsQ29sdW1uOiBzdHJpbmc7IC8vIGNvbHVtbiB0byB1c2UgYXMgdGhlIFwidG90YWxcIiBsYWJlbFxuICAgIGxhYmVsOiBzdHJpbmc7IC8vIGxhYmVsIHRvIHVzZSBpbiB0aGUgXCJ0b3RhbFwiIGxhYmVsXG4gIH0+O1xuICAvLyBUT0RPOiBXaGVuIHRoZXNlIHR5cGVzIGFyZSBlbmZvcmNlZCBhcyBgYm9vbGVhbiB8IEZ1bmN0aW9uYCwgdGhlcmUncyBhIGxpbnQgZXJyb3IuIFRoYXQncyBhIGJ1Zy5cbiAgZmlsdGVyaW5nPzogYm9vbGVhbiB8IGFueTsgLy8gVHVybiBvbiBmaWx0ZXJpbmcgZm9yIHRoZSB0YWJsZSwgYm9vbGVhbiBvciBmdW5jdGlvbiBmb3IgZmlsdGVyaW5nIGNhbGxiYWNrXG4gIHNvcnRpbmc/OiBib29sZWFuIHwgYW55OyAvLyBUdXJuIG9uIHNvcnRpbmcgZm9yIHRoZSB0YWJsZSwgYm9vbGVhbiBvciBmdW5jdGlvbiBmb3Igc29ydGluZyBjYWxsYmFja1xuICBvcmRlcmluZz86IGJvb2xlYW4gfCBGdW5jdGlvbjsgLy8gVHVybiBvbiBvcmRlcmluZyBmb3IgdGhlIHRhYmxlLCBib29sZWFuIG9yIGZ1bmN0aW9uIGZvciBvcmRlcmluZyBjYWxsYmFja1xuICByZXNpemluZz86IGJvb2xlYW4gfCBGdW5jdGlvbjsgLy8gVHVybiBvbiByZXNpemluZyBmb3IgdGhlIHRhYmxlLCBib29sZWFuIG9yIGZ1bmN0aW9uIGZvciByZXNpemluZyBjYWxsYmFja1xuICByb3dTZWxlY3Rpb25TdHlsZT86IHN0cmluZzsgLy8gUm93IHNlbGVjdGlvbiBzdHlsZSwgY2hlY2tib3ggb3Igcm93XG4gIHJvd1NlbGVjdD86IGJvb2xlYW47IC8vIFR1cm4gb24gcm93IHNlbGVjdGlvblxuICBoYXNEZXRhaWxzPzogYm9vbGVhbjsgLy8gVHVybiBvbiBkZXRhaWxzIHJvdyBmb3IgdGhlIHRhYmxlXG4gIGRldGFpbHNSZW5kZXJlcj86IGFueTsgLy8gUmVuZGVyZXIvY29tcG9uZW50IGZvciB0aGUgZGV0YWlscyByb3dcbiAgZXhwYW5kQWxsPzogYm9vbGVhbjsgLy8gc2hvdWxkIEFsbCBSb3dzIGJlIGV4cGFuZGVkIGJ5IGRlZmF1bHRcbiAgc2VsZWN0QWxsRW5hYmxlZD86IGJvb2xlYW47IC8vIEFsbG93cyB0aGUgdGFibGUsIHdoaWxlIGluIHNlbGVjdGlvbiBtb2RlIHRvIGhhdmUgYSBzZWxlY3QgYWxsIGF0IHRoZSB0b3Bcbn1cblxuLy8gVE9ETyAtIHN1cHBvcnQgKDEpIGNsaWNraW5nIGNlbGwgdG8gZWRpdCwgKDIpIGNsaWNraW5nIHJvdyB0byBlZGl0LCAoMykgYnV0dG9uIHRvIHRyaWdnZXIgZnVsbCB0YWJsZSB0byBlZGl0XG5leHBvcnQgZW51bSBOb3ZvVGFibGVNb2RlIHtcbiAgVklFVyA9IDEsXG4gIEVESVQgPSAyLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRhYmxlJyxcbiAgaG9zdDoge1xuICAgICdbYXR0ci50aGVtZV0nOiAndGhlbWUnLFxuICAgICdbY2xhc3MuZWRpdGluZ10nOiAnbW9kZSA9PT0gTm92b1RhYmxlTW9kZS5FRElUJyxcbiAgICAnW2NsYXNzLm5vdm8tdGFibGUtbG9hZGluZ10nOiAnbG9hZGluZycsXG4gIH0sXG4gIC8vIGRpcmVjdGl2ZXM6IFtdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aGVhZGVyICpuZ0lmPVwiY29sdW1ucy5sZW5ndGhcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8tdGFibGUtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPG5vdm8tcGFnaW5hdGlvbiAqbmdJZj1cImNvbmZpZy5wYWdpbmcgJiYgIShkYXRhUHJvdmlkZXIuaXNFbXB0eSgpICYmICFkYXRhUHJvdmlkZXIuaXNGaWx0ZXJlZCgpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93T3B0aW9uc109XCJjb25maWcucGFnaW5nLnJvd09wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVQYWdlU2VsZWN0aW9uXT1cImNvbmZpZy5wYWdpbmcuZGlzYWJsZVBhZ2VTZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhwYWdlKV09XCJkYXRhUHJvdmlkZXIucGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKGl0ZW1zUGVyUGFnZSldPVwiZGF0YVByb3ZpZGVyLnBhZ2VTaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0b3RhbEl0ZW1zXT1cImRhdGFQcm92aWRlci50b3RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25QYWdlQ2hhbmdlKT1cIm9uUGFnZUNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPC9ub3ZvLXBhZ2luYXRpb24+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibm92by10YWJsZS1hY3Rpb25zXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by10YWJsZS1sb2FkaW5nLW92ZXJsYXlcIiAqbmdJZj1cImxvYWRpbmcgfHwgZGF0YVByb3ZpZGVyLmlzTG9hZGluZygpXCI+XG4gICAgICAgICAgICA8bm92by1sb2FkaW5nPjwvbm92by1sb2FkaW5nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5vdm8tdG9hc3QgKm5nSWY9XCJ0b2FzdFwiIFt0aGVtZV09XCJ0b2FzdD8udGhlbWVcIiBbaWNvbl09XCJ0b2FzdD8uaWNvblwiIFttZXNzYWdlXT1cInRvYXN0Py5tZXNzYWdlXCI+PC9ub3ZvLXRvYXN0PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtY29udGFpbmVyXCIgKm5nSWY9XCIhZ3Jvc3NGbGFnVG9Bdm9pZFRoZVRhYmxlRnJvbUJlaW5nVWdseVdoZW5IaWRpbmdUaGVUb2FzdFwiPlxuICAgICAgICAgICAgPG5vdm8tZm9ybSBoaWRlSGVhZGVyPVwidHJ1ZVwiIFtmb3JtXT1cInRhYmxlRm9ybVwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgZGF0YVRhYmxlXCIgW2NsYXNzLnRhYmxlLWRldGFpbHNdPVwiY29uZmlnLmhhc0RldGFpbHNcIiByb2xlPVwiZ3JpZFwiPlxuICAgICAgICAgICAgICAgIDwhLS0gc2tpcFNvcnRBbmRGaWx0ZXJDbGVhciBpcyBhIGhhY2sgcmlnaHQgbm93LCB3aWxsIGJlIHJlbW92ZWQgb25jZSBDYW52YXMgaXMgcmVmYWN0b3JlZCAtLT5cbiAgICAgICAgICAgICAgICA8dGhlYWQgKm5nSWY9XCJjb2x1bW5zLmxlbmd0aCAmJiAoIWRhdGFQcm92aWRlci5pc0VtcHR5KCkgfHwgZGF0YVByb3ZpZGVyLmlzRmlsdGVyZWQoKSB8fCBza2lwU29ydEFuZEZpbHRlckNsZWFyIHx8IGVkaXRpbmcpXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciByb2xlPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIERFVEFJTFMgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJyb3ctYWN0aW9uc1wiICpuZ0lmPVwiY29uZmlnLmhhc0RldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIGljb249XCJuZXh0XCIgKGNsaWNrKT1cImV4cGFuZEFsbE9uUGFnZShjb25maWcuZXhwYW5kQWxsKVwiICpuZ0lmPVwiIWNvbmZpZy5leHBhbmRBbGxcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJleHBhbmQtYWxsXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwic29ydC1kZXNjXCIgKGNsaWNrKT1cImV4cGFuZEFsbE9uUGFnZShjb25maWcuZXhwYW5kQWxsKVwiICpuZ0lmPVwiY29uZmlnLmV4cGFuZEFsbFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImNvbGxhcHNlLWFsbFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQ0hFQ0tCT1ggLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJyb3ctYWN0aW9ucyBjaGVja2JveCBtYXNzLWFjdGlvblwiICpuZ0lmPVwiY29uZmlnLnJvd1NlbGVjdGlvblN0eWxlID09PSAnY2hlY2tib3gnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tY2hlY2tib3ggWyhuZ01vZGVsKV09XCJtYXN0ZXJcIiBbaW5kZXRlcm1pbmF0ZV09XCJwYWdlU2VsZWN0ZWQubGVuZ3RoID4gMCAmJiBwYWdlU2VsZWN0ZWQubGVuZ3RoIDwgcGFnZWREYXRhLmxlbmd0aFwiIChuZ01vZGVsQ2hhbmdlKT1cInNlbGVjdFBhZ2UoJGV2ZW50KVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInNlbGVjdC1hbGwtY2hlY2tib3hcIiBbdG9vbHRpcF09XCJtYXN0ZXIgPyBsYWJlbHMuZGVzZWxlY3RBbGwgOiBsYWJlbHMuc2VsZWN0QWxsT25QYWdlXCIgdG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIj48L25vdm8tY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBUQUJMRSBIRUFERVJTIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiIFtuZ0NsYXNzXT1cInsgJ21hc3MtYWN0aW9uJzogY29uZmlnPy5yb3dTZWxlY3Rpb25TdHlsZSA9PT0gJ2NoZWNrYm94JywgJ2FjdGlvbnMnOiBjb2x1bW4/LmFjdGlvbnM/Lml0ZW1zPy5sZW5ndGggPiAwLCAncHJldmlldyc6IGNvbHVtbj8ubmFtZSA9PT0gJ3ByZXZpZXcnIH1cIiBbbm92b1RoT3JkZXJhYmxlXT1cImNvbHVtblwiIChvbk9yZGVyQ2hhbmdlKT1cIm9uT3JkZXJDaGFuZ2UoJGV2ZW50KVwiIFtoaWRkZW5dPVwiaXNDb2x1bW5IaWRkZW4oY29sdW1uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aC1ncm91cFwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjb2x1bW4uaWQgfHwgY29sdW1uLm5hbWVcIiAqbmdJZj1cIiFjb2x1bW4uaGlkZUhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIExBQkVMICYgU09SVCBBUlJPV1MgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aC10aXRsZVwiIFtuZ0NsYXNzXT1cIihjb25maWcuc29ydGluZyAhPT0gZmFsc2UgJiYgY29sdW1uLnNvcnRpbmcgIT09IGZhbHNlKSA/ICdzb3J0YWJsZScgOiAnJ1wiIFtub3ZvVGhTb3J0YWJsZV09XCJjb25maWdcIiBbY29sdW1uXT1cImNvbHVtblwiIChvblNvcnRDaGFuZ2UpPVwib25Tb3J0Q2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57eyBjb2x1bW4udGl0bGUgfHwgY29sdW1uLmxhYmVsIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1zb3J0LWljb25zXCIgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tXCIgW3Rvb2x0aXBdPVwibGFiZWxzLnNvcnRcIiBbbmdDbGFzc109XCJjb2x1bW4uc29ydCB8fCAnJ1wiICpuZ0lmPVwiY29uZmlnLnNvcnRpbmcgIT09IGZhbHNlICYmIGNvbHVtbi5zb3J0aW5nICE9PSBmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWFycm93LXVwXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWFycm93LWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRklMVEVSIERST1AtRE9XTiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tZHJvcGRvd24gc2lkZT1cInJpZ2h0XCIgKm5nSWY9XCJjb25maWcuZmlsdGVyaW5nICE9PSBmYWxzZSAmJiBjb2x1bW4uZmlsdGVyaW5nICE9PSBmYWxzZVwiIGNsYXNzPVwiY29sdW1uLWZpbHRlcnNcIiAodG9nZ2xlZCk9XCJvbkRyb3Bkb3duVG9nZ2xlZCgkZXZlbnQsIGNvbHVtbi5uYW1lKVwiIHBhcmVudFNjcm9sbFNlbGVjdG9yPVwiLnRhYmxlLWNvbnRhaW5lclwiIGNvbnRhaW5lckNsYXNzPVwidGFibGUtZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwiaWNvblwiIGljb249XCJmaWx0ZXJcIiB0b29sdGlwUG9zaXRpb249XCJib3R0b21cIiBbdG9vbHRpcF09XCJsYWJlbHMuZmlsdGVyc1wiIFtjbGFzcy5maWx0ZXJlZF09XCJjb2x1bW4uZmlsdGVyIHx8IGNvbHVtbi5maWx0ZXI9PT1mYWxzZVwiIChjbGljayk9XCJmb2N1c0lucHV0KClcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRklMVEVSIE9QVElPTlMgTElTVCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaXN0ICpuZ0lmPVwiKGNvbHVtbj8ub3B0aW9ucz8ubGVuZ3RoIHx8IGNvbHVtbj8ub3JpZ2luYWxPcHRpb25zPy5sZW5ndGgpICYmIGNvbHVtbj8udHlwZSAhPT0gJ2RhdGUnICYmIHRvZ2dsZWREcm9wZG93bk1hcFtjb2x1bW4ubmFtZV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbSBjbGFzcz1cImZpbHRlci1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgbGFiZWxzLmZpbHRlcnMgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiBjb2xvcj1cIm5lZ2F0aXZlXCIgaWNvbj1cInRpbWVzXCIgKGNsaWNrKT1cIm9uRmlsdGVyQ2xlYXIoY29sdW1uKVwiICpuZ0lmPVwiY29sdW1uLmZpbHRlciB8fCBjb2x1bW4uZmlsdGVyPT09ZmFsc2VcIj57eyBsYWJlbHMuY2xlYXIgfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICpuZ0lmPVwiISFjb2x1bW4uYWxsb3dDdXN0b21UZXh0T3B0aW9uXCIgW2F0dHIuaWRdPVwiY29sdW1uLm5hbWUgKyAnLWlucHV0J1wiIFtub3ZvVGFibGVGaWx0ZXJdPVwiY29sdW1uXCIgKG9uRmlsdGVyQ2hhbmdlKT1cIm9uRmlsdGVyS2V5d29yZHMoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwiY29sdW1uLmZyZWV0ZXh0RmlsdGVyXCIga2VlcEZpbHRlckZvY3VzZWQgI2ZpbHRlcklucHV0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0gW25nQ2xhc3NdPVwieyBhY3RpdmU6IGlzRmlsdGVyQWN0aXZlKGNvbHVtbiwgb3B0aW9uKSB9XCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb2x1bW4ub3B0aW9uc1wiIChjbGljayk9XCJvbkZpbHRlckNsaWNrKGNvbHVtbiwgb3B0aW9uKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJnZXRPcHRpb25EYXRhQXV0b21hdGlvbklkKG9wdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgb3B0aW9uPy5sYWJlbCB8fCBvcHRpb24gfX08L3NwYW4+IDxpIGNsYXNzPVwiYmhpLWNoZWNrXCIgKm5nSWY9XCJpc0ZpbHRlckFjdGl2ZShjb2x1bW4sIG9wdGlvbilcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBGSUxURVIgU0VBUkNIIElOUFVUIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpc3QgKm5nSWY9XCIhKGNvbHVtbj8ub3B0aW9ucz8ubGVuZ3RoIHx8IGNvbHVtbj8ub3JpZ2luYWxPcHRpb25zPy5sZW5ndGgpICYmIHRvZ2dsZWREcm9wZG93bk1hcFtjb2x1bW4ubmFtZV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbSBjbGFzcz1cImZpbHRlci1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgbGFiZWxzLmZpbHRlcnMgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiBjb2xvcj1cIm5lZ2F0aXZlXCIgaWNvbj1cInRpbWVzXCIgKGNsaWNrKT1cIm9uRmlsdGVyQ2xlYXIoY29sdW1uKVwiICpuZ0lmPVwiY29sdW1uLmZpbHRlclwiPnt7IGxhYmVscy5jbGVhciB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW2F0dHIuaWRdPVwiY29sdW1uLm5hbWUgKyAnLWlucHV0J1wiIFtub3ZvVGFibGVGaWx0ZXJdPVwiY29sdW1uXCIgKG9uRmlsdGVyQ2hhbmdlKT1cIm9uRmlsdGVyQ2hhbmdlKCRldmVudClcIiBbKG5nTW9kZWwpXT1cImNvbHVtbi5maWx0ZXJcIiBrZWVwRmlsdGVyRm9jdXNlZCAjZmlsdGVySW5wdXQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRklMVEVSIERBVEUgT1BUSU9OUyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaXN0ICpuZ0lmPVwiY29sdW1uPy5vcHRpb25zPy5sZW5ndGggJiYgY29sdW1uPy50eXBlID09PSAnZGF0ZScgJiYgdG9nZ2xlZERyb3Bkb3duTWFwW2NvbHVtbi5uYW1lXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiZmlsdGVyLXNlYXJjaFwiICpuZ0lmPVwiIWNvbHVtbi5jYWxlbmRlclNob3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgbGFiZWxzLmZpbHRlcnMgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiBjb2xvcj1cIm5lZ2F0aXZlXCIgaWNvbj1cInRpbWVzXCIgKGNsaWNrKT1cIm9uRmlsdGVyQ2xlYXIoY29sdW1uKVwiICpuZ0lmPVwiY29sdW1uLmZpbHRlclwiPnt7IGxhYmVscy5jbGVhciB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0gW25nQ2xhc3NdPVwieyBhY3RpdmU6IGlzRmlsdGVyQWN0aXZlKGNvbHVtbiwgb3B0aW9uKSB9XCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb2x1bW4ub3B0aW9uc1wiIChjbGljayk9XCJvbkZpbHRlckNsaWNrKGNvbHVtbiwgb3B0aW9uKVwiIFtrZWVwT3Blbl09XCJvcHRpb24ucmFuZ2VcIiBbaGlkZGVuXT1cImNvbHVtbi5jYWxlbmRlclNob3dcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiKG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBvcHRpb24/LmxhYmVsIHx8IG9wdGlvbiB9fSA8aSBjbGFzcz1cImJoaS1jaGVja1wiICpuZ0lmPVwiaXNGaWx0ZXJBY3RpdmUoY29sdW1uLCBvcHRpb24pXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItY29udGFpbmVyXCIgW2hpZGRlbl09XCIhY29sdW1uLmNhbGVuZGVyU2hvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IChjbGljayk9XCJjb2x1bW4uY2FsZW5kZXJTaG93PWZhbHNlXCI+PGkgY2xhc3M9XCJiaGktcHJldmlvdXNcIj48L2k+e3sgbGFiZWxzLmJhY2tUb1ByZXNldEZpbHRlcnMgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tZGF0ZS1waWNrZXIgI3JhbmdlUGlja2VyIChvblNlbGVjdCk9XCJvbkNhbGVuZGVyU2VsZWN0KGNvbHVtbiwgJGV2ZW50KVwiIFsobmdNb2RlbCldPVwiY29sdW1uLmZpbHRlclwiIHJhbmdlPVwidHJ1ZVwiPjwvbm92by1kYXRlLXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ub3ZvLWRyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDwhLS0gVEFCTEUgREFUQSAtLT5cbiAgICAgICAgICAgICAgICA8dGJvZHkgKm5nSWY9XCIhZGF0YVByb3ZpZGVyLmlzRW1wdHkoKSB8fCBlZGl0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRhYmxlLXNlbGVjdGlvbi1yb3dcIiAqbmdJZj1cImNvbmZpZy5yb3dTZWxlY3Rpb25TdHlsZSA9PT0gJ2NoZWNrYm94JyAmJiBzaG93U2VsZWN0QWxsTWVzc2FnZSAmJiBjb25maWcuc2VsZWN0QWxsRW5hYmxlZFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInRhYmxlLXNlbGVjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bGFiZWxzLnNlbGVjdGVkUmVjb3JkcyhzZWxlY3RlZC5sZW5ndGgpfX0gPGEgKGNsaWNrKT1cInNlbGVjdEFsbCh0cnVlKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImFsbC1tYXRjaGluZy1yZWNvcmRzXCI+e3tsYWJlbHMudG90YWxSZWNvcmRzKGRhdGFQcm92aWRlci50b3RhbCl9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtcm93PVwiJGltcGxpY2l0XCIgbGV0LWk9XCJpbmRleFwiIFtuZ0Zvck9mXT1cInJvd3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRhYmxlLXJvd1wiIFtuZ0NsYXNzXT1cInJvdy5jdXN0b21DbGFzcyB8fCAnJ1wiIFtpZF09XCJuYW1lICsgJy0nICsgcm93W3Jvd0lkZW50aWZpZXJdXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cInJvdy5pZFwiIChjbGljayk9XCJyb3dDbGlja0hhbmRsZXIocm93KVwiIFtjbGFzcy5hY3RpdmVdPVwicm93LmlkID09PSBhY3RpdmVJZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJvdy1hY3Rpb25zXCIgKm5nSWY9XCJjb25maWcuaGFzRGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIGljb249XCJuZXh0XCIgKGNsaWNrKT1cInJvdy5fZXhwYW5kZWQ9IXJvdy5fZXhwYW5kZWRcIiAqbmdJZj1cIiFyb3cuX2V4cGFuZGVkXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgaWNvbj1cInNvcnQtZGVzY1wiIChjbGljayk9XCJyb3cuX2V4cGFuZGVkPSFyb3cuX2V4cGFuZGVkXCIgKm5nSWY9XCJyb3cuX2V4cGFuZGVkXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyb3ctYWN0aW9ucyBjaGVja2JveFwiICpuZ0lmPVwiY29uZmlnLnJvd1NlbGVjdGlvblN0eWxlID09PSAnY2hlY2tib3gnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLWNoZWNrYm94IFsobmdNb2RlbCldPVwicm93Ll9zZWxlY3RlZFwiIChuZ01vZGVsQ2hhbmdlKT1cInJvd1NlbGVjdEhhbmRsZXIocm93KVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInNlbGVjdC1yb3ctY2hlY2tib3hcIj48L25vdm8tY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNvbHVtbi5pZCB8fCBjb2x1bW4ubmFtZVwiIFtjbGFzcy5ub3ZvLWZvcm0tcm93XT1cImVkaXRhYmxlXCIgW2hpZGRlbl09XCJpc0NvbHVtbkhpZGRlbihjb2x1bW4pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLXRhYmxlLWNlbGwgKm5nSWY9XCJyb3cuX2VkaXRpbmcgJiYgIXJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV1cIiBbaGFzRWRpdG9yXT1cImVkaXRhYmxlXCIgW2NvbHVtbl09XCJjb2x1bW5cIiBbcm93XT1cInJvd1wiIFtmb3JtXT1cImdldFJvd0NvbnRyb2xGb3JtKGkpXCI+PC9ub3ZvLXRhYmxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLWNvbnRyb2wgKm5nSWY9XCJyb3cuX2VkaXRpbmcgJiYgcm93Ll9lZGl0aW5nW2NvbHVtbi5uYW1lXVwiIGNvbmRlbnNlZD1cInRydWVcIiBbZm9ybV09XCJnZXRSb3dDb250cm9sRm9ybShpKVwiIFtjb250cm9sXT1cInJvdy5jb250cm9sc1tjb2x1bW4ubmFtZV1cIj48L25vdm8tY29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cImRldGFpbHMtcm93XCIgKm5nSWY9XCJjb25maWcuaGFzRGV0YWlsc1wiIFtoaWRkZW5dPVwiIXJvdy5fZXhwYW5kZWRcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2RldGFpbHMtcm93LScrcm93LmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicm93LWFjdGlvbnNcIj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBbYXR0ci5jb2xzcGFuXT1cImNvbmZpZy5yb3dTZWxlY3Rpb25TdHlsZSA9PT0gJ2NoZWNrYm94JyA/IChjb2x1bW5zLmxlbmd0aCArIDEpIDogY29sdW1ucy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tcm93LWRldGFpbHMgW2RhdGFdPVwicm93XCIgW3JlbmRlcmVyXT1cImNvbmZpZy5kZXRhaWxzUmVuZGVyZXJcIj48L25vdm8tcm93LWRldGFpbHM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8IS0tIE5PIFRBQkxFIERBVEEgUExBQ0VIT0xERVIgLS0+XG4gICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzPVwidGFibGUtbWVzc2FnZVwiICpuZ0lmPVwiZGF0YVByb3ZpZGVyLmlzRW1wdHkoKSAmJiAhZGF0YVByb3ZpZGVyLmlzRmlsdGVyZWQoKSAmJiAhZWRpdGluZ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cImVtcHR5LXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgI2VtcHR5bWVzc2FnZT48bmctY29udGVudCBzZWxlY3Q9XCJbdGFibGUtZW1wdHktbWVzc2FnZV1cIj48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLWVtcHR5LW1lc3NhZ2VcIiAqbmdJZj1cImVtcHR5bWVzc2FnZS5jaGlsZE5vZGVzLmxlbmd0aCA9PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND48aSBjbGFzcz1cImJoaS1zZWFyY2gtcXVlc3Rpb25cIj48L2k+IHt7IGxhYmVscy5lbXB0eVRhYmxlTWVzc2FnZSB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPCEtLSBOTyBNQVRDSElORyBSRUNPUkRTIC0tPlxuICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cInRhYmxlLW1lc3NhZ2VcIiAqbmdJZj1cImRhdGFQcm92aWRlci5pc0VtcHR5KCkgJiYgZGF0YVByb3ZpZGVyLmlzRmlsdGVyZWQoKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImVtcHR5LXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgI25vbWF0Y2htZXNzYWdlPjxuZy1jb250ZW50IHNlbGVjdD1cIlt0YWJsZS1uby1tYXRjaGluZy1yZWNvcmRzLW1lc3NhZ2VdXCI+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuby1tYXRjaGluZy1yZWNvcmRzXCIgKm5nSWY9XCJub21hdGNobWVzc2FnZS5jaGlsZE5vZGVzLmxlbmd0aCA9PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND48aSBjbGFzcz1cImJoaS1zZWFyY2gtcXVlc3Rpb25cIj48L2k+IHt7IGxhYmVscy5ub01hdGNoaW5nUmVjb3Jkc01lc3NhZ2UgfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwhLS0gVEFCTEUgREFUQSBFUlJPUiBQTEFDRUhPTERFUiAtLT5cbiAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3M9XCJ0YWJsZS1tZXNzYWdlXCIgKm5nSWY9XCJkYXRhUHJvdmlkZXIuaGFzRXJyb3JzKClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJ0YWJsZS1lcnJvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAjZXJyb3JtZXNzYWdlPjxuZy1jb250ZW50IHNlbGVjdD1cIlt0YWJsZS1lcnJvci1tZXNzYWdlXVwiPjwvbmctY29udGVudD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtZXJyb3ItbWVzc2FnZVwiICpuZ0lmPVwiZXJyb3JtZXNzYWdlLmNoaWxkTm9kZXMubGVuZ3RoID09IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpIGNsYXNzPVwiYmhpLWNhdXRpb25cIj48L2k+IHt7IGxhYmVscy5lcnJvcmVkVGFibGVNZXNzYWdlIH19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8dGZvb3QgKm5nSWY9XCIhY29uZmlnLmZvb3RlcnNcIiBbbmdDbGFzc109XCJkYXRhUHJvdmlkZXIubGVuZ3RoICUgMiA9PSAwID8gJ29kZCcgOiAnZXZlbidcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibm92by10YWJsZS1mb290ZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGZvb3Q+XG4gICAgICAgICAgICAgICAgPHRmb290ICpuZ0Zvcj1cImxldCBmb290ZXIgb2YgZm9vdGVycztsZXQgaSA9IGluZGV4O1wiIGNsYXNzPVwibm92by10YWJsZS10b3RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCIoY29sdW1uLmlkIHx8IGNvbHVtbi5uYW1lKSArICctdG90YWwtJyArIGlcIj57eyBmb290ZXJbY29sdW1uLm5hbWVdIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rmb290PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9ub3ZvLWZvcm0+XG4gICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYmxlRWxlbWVudCBpbXBsZW1lbnRzIERvQ2hlY2sge1xuICBAVmlld0NoaWxkcmVuKCdmaWx0ZXJJbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KVxuICBmaWx0ZXJJbnB1dHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBASW5wdXQoKVxuICBjb25maWc6IE5vdm9UYWJsZUNvbmZpZyA9IHt9O1xuICBASW5wdXQoKVxuICBjb2x1bW5zOiBBcnJheTxhbnk+O1xuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBza2lwU29ydEFuZEZpbHRlckNsZWFyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIG1vZGU6IE5vdm9UYWJsZU1vZGUgPSBOb3ZvVGFibGVNb2RlLlZJRVc7XG4gIEBJbnB1dCgpXG4gIGVkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHJvd0lkZW50aWZpZXI6IHN0cmluZyA9ICdpZCc7XG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZyA9ICd0YWJsZSc7XG5cbiAgQE91dHB1dCgpXG4gIG9uUm93Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25Sb3dTZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25UYWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgX2RhdGFQcm92aWRlcjogUGFnZWRBcnJheUNvbGxlY3Rpb248YW55PjtcbiAgX3Jvd3M6IEFycmF5PGFueT4gPSBbXTtcbiAgc2VsZWN0ZWQ6IEFycmF5PGFueT4gPSBbXTtcbiAgYWN0aXZlSWQ6IG51bWJlciA9IDA7XG4gIG1hc3RlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBleHBhbmRBbGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaW5kZXRlcm1pbmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBsYXN0UGFnZTogbnVtYmVyID0gMDtcbiAgc2VsZWN0ZWRQYWdlQ291bnQ6IG51bWJlciA9IDA7XG4gIHNob3dTZWxlY3RBbGxNZXNzYWdlOiBib29sZWFuID0gZmFsc2U7XG4gIGN1cnJlbnRTb3J0Q29sdW1uOiBhbnk7XG4gIHBhZ2VkRGF0YTogQXJyYXk8YW55PiA9IFtdO1xuICBwYWdlU2VsZWN0ZWQ6IGFueTtcbiAgLy8gTWFwIHRvIGtlZXAgdHJhY2sgb2Ygd2hhdCBkcm9wZG93bnMgYXJlIHRvZ2dsZWRcbiAgLy8gVXNlZCB0byBwcm9wZXJseSAqbmdJZiB0aGUgPGxpc3Q+IHNvIHRoYXQgdGhlIGtlZXBGaWx0ZXJGb2N1c2VkIERpcmVjdGl2ZVxuICAvLyB3aWxsIHByb3Blcmx5IGZpcmUgdGhlIG5nQWZ0ZXJWaWV3SW5pdCBldmVudFxuICB0b2dnbGVkRHJvcGRvd25NYXA6IGFueSA9IHt9O1xuICBwdWJsaWMgTm92b1RhYmxlTW9kZSA9IE5vdm9UYWJsZU1vZGU7XG4gIHB1YmxpYyB0YWJsZUZvcm06IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe30pO1xuICBwdWJsaWMgdG9hc3Q6IHsgdGhlbWU6IHN0cmluZzsgaWNvbjogc3RyaW5nOyBtZXNzYWdlOiBzdHJpbmcgfTtcbiAgcHVibGljIGZvb3RlcnM6IGFueVtdID0gW107XG4gIHB1YmxpYyBncm9zc0ZsYWdUb0F2b2lkVGhlVGFibGVGcm9tQmVpbmdVZ2x5V2hlbkhpZGluZ1RoZVRvYXN0OiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IHJvd3Mocm93czogQXJyYXk8YW55Pikge1xuICAgIHRoaXMuZGF0YVByb3ZpZGVyID0gcm93cztcbiAgICBpZiAocm93cyAmJiByb3dzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0dXBDb2x1bW5EZWZhdWx0cygpO1xuICAgIH1cbiAgICAvLyB0aGlzIGlzIGEgdGVtcG9yYXJ5L2hhY2t5IGZpeCB1bnRpbCBhc3luYyBkYXRhbG9hZGluZyBpcyBoYW5kbGVkIHdpdGhpbiB0aGUgdGFibGVcbiAgICBpZiAoIXRoaXMuc2tpcFNvcnRBbmRGaWx0ZXJDbGVhcikge1xuICAgICAgdGhpcy5jbGVhckFsbFNvcnRBbmRGaWx0ZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvd3M7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGF0YVByb3ZpZGVyKGRwOiBhbnkpIHtcbiAgICB0aGlzLl9kYXRhUHJvdmlkZXIgPSBBcnJheS5pc0FycmF5KGRwKSA/IG5ldyBQYWdlZEFycmF5Q29sbGVjdGlvbjxhbnk+KGRwKSA6IGRwO1xuICAgIHRoaXMuX2RhdGFQcm92aWRlci5kYXRhQ2hhbmdlLnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpLnN1YnNjcmliZSgoZXZlbnQ6IENvbGxlY3Rpb25FdmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgQ29sbGVjdGlvbkV2ZW50LkNIQU5HRTpcbiAgICAgICAgICB0aGlzLl9yb3dzID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAvLyBTZXR1cCBmb3JtXG4gICAgICAgICAgdGhpcy50YWJsZUZvcm0gPSB0aGlzLmJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgcm93czogdGhpcy5idWlsZGVyLmFycmF5KFtdKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBSZW1vdmUgYWxsIHNlbGVjdGlvbiBvbiBzb3J0IGNoYW5nZSBpZiBzZWxlY3Rpb24gaXMgb25cbiAgICAgICAgICBpZiAodGhpcy5jb25maWcucm93U2VsZWN0aW9uU3R5bGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZWREYXRhID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHRoaXMucGFnZVNlbGVjdGVkID0gdGhpcy5wYWdlZERhdGEuZmlsdGVyKChyKSA9PiByLl9zZWxlY3RlZCk7XG4gICAgICAgICAgICB0aGlzLnJvd1NlbGVjdEhhbmRsZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRmluZCB0aGF0IGNvbHVtbnMgd2UgbWlnaHQgbmVlZCB0byBzdW0gdXAgdmlhIHRoZSBmb290ZXJcbiAgICAgICAgICBsZXQgY29sdW1uc1RvU3VtID0gW107XG4gICAgICAgICAgY29uc3QgY29sdW1uU3VtcyA9IHt9O1xuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5mb290ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5mb290ZXJzLmZvckVhY2goKGNvbmZpZykgPT4ge1xuICAgICAgICAgICAgICBjb2x1bW5zVG9TdW0ucHVzaCguLi5jb25maWcuY29sdW1ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIE9ubHkgaGF2ZSB1bmlxdWUgY29sdW1ucywgZmlsdGVyIG91dCBkdXBsaWNhdGVzXG4gICAgICAgICAgICBjb2x1bW5zVG9TdW0gPSBjb2x1bW5zVG9TdW0uZmlsdGVyKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IGFycmF5LmluZGV4T2YoaXRlbSkgPT09IGluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gTWFrZSBhIGZvcm0gZm9yIGVhY2ggcm93XG4gICAgICAgICAgY29uc3QgdGFibGVGb3JtUm93cyA9IDxGb3JtQXJyYXk+dGhpcy50YWJsZUZvcm0uY29udHJvbHNbJ3Jvd3MnXTtcbiAgICAgICAgICB0aGlzLl9yb3dzLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRyb2xzID0gW107XG4gICAgICAgICAgICByb3cuY29udHJvbHMgPSB7fTtcbiAgICAgICAgICAgIHJvdy5fZWRpdGluZyA9IHt9O1xuICAgICAgICAgICAgcm93Ll9leHBhbmRlZCA9IHRoaXMuY29uZmlnLmV4cGFuZEFsbDtcbiAgICAgICAgICAgIHJvdy5yb3dJZCA9IHRoaXMuX3Jvd3MubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAvLyBVc2UgdGhlIGNvbnRyb2wgcGFzc2VkIG9yIHVzZSBhIFJlYWRPbmx5Q29udHJvbCBzbyB0aGF0IHRoZSBmb3JtIGhhcyB0aGUgdmFsdWVzXG4gICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2wgPSBjb2x1bW4uZWRpdG9yQ29uZmlnXG4gICAgICAgICAgICAgICAgPyBDb250cm9sRmFjdG9yeS5jcmVhdGUoY29sdW1uLmVkaXRvclR5cGUsIGNvbHVtbi5lZGl0b3JDb25maWcpXG4gICAgICAgICAgICAgICAgOiBuZXcgUmVhZE9ubHlDb250cm9sKHsga2V5OiBjb2x1bW4ubmFtZSB9KTtcbiAgICAgICAgICAgICAgcm93LmNvbnRyb2xzW2NvbHVtbi5uYW1lXSA9IGNvbnRyb2w7XG4gICAgICAgICAgICAgIHJvd0NvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZm9ybVV0aWxzLnNldEluaXRpYWxWYWx1ZXMocm93Q29udHJvbHMsIHJvdywgZmFsc2UpO1xuICAgICAgICAgICAgdGFibGVGb3JtUm93cy5wdXNoKHRoaXMuZm9ybVV0aWxzLnRvRm9ybUdyb3VwKHJvd0NvbnRyb2xzKSk7XG4gICAgICAgICAgICAvLyBTZXR1cCB0aGUgdG90YWwgZm9vdGVyIGlmIGNvbmZpZ3VyZWRcbiAgICAgICAgICAgIC8vIEFycmF5IG9mIGtleXMgdG8gdG90YWxcbiAgICAgICAgICAgIGlmIChjb2x1bW5zVG9TdW0ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgIGNvbHVtbnNUb1N1bS5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoSGVscGVycy5pc0JsYW5rKGNvbHVtblN1bXNbY29sdW1uXSkpIHtcbiAgICAgICAgICAgICAgICAgIGNvbHVtblN1bXNbY29sdW1uXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbHVtblN1bXNbY29sdW1uXSArPSByb3dbY29sdW1uXTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gTm92b1RhYmxlTW9kZS5FRElUKSB7XG4gICAgICAgICAgICB0aGlzLnNldFRhYmxlRWRpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBTZXR1cCB0aGUgZm9vdGVycyAoaWYgYW55KVxuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5mb290ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmZvb3RlcnMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmZvb3RlcnMuZm9yRWFjaCgoZm9vdGVyQ29uZmlnLCBmb290ZXJDb25maWdJbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBmb290ZXIgPSB7fTtcbiAgICAgICAgICAgICAgZm9vdGVyW2Zvb3RlckNvbmZpZy5sYWJlbENvbHVtbl0gPSBmb290ZXJDb25maWcubGFiZWw7XG4gICAgICAgICAgICAgIGZvb3RlckNvbmZpZy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmb290ZXJDb25maWcubWV0aG9kID09PSAnQVZHJyAmJiB0aGlzLl9yb3dzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgZm9vdGVyW2NvbHVtbl0gPSBjb2x1bW5TdW1zW2NvbHVtbl0gLyB0aGlzLl9yb3dzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZm9vdGVyW2NvbHVtbl0gPSBjb2x1bW5TdW1zW2NvbHVtbl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy5mb290ZXJzLnB1c2goZm9vdGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGhpcy5jb25maWcucGFnaW5nKSB7XG4gICAgICB0aGlzLl9kYXRhUHJvdmlkZXIucGFnZSA9IHRoaXMuY29uZmlnLnBhZ2luZy5jdXJyZW50O1xuICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLnBhZ2VTaXplID0gdGhpcy5jb25maWcucGFnaW5nLml0ZW1zUGVyUGFnZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUGFnaW5nIHR1cm5lZCBvZmYsIHJldHVybiBiYXNpY2FsbHkgYWxsIG9mIHRoZSBkYXRhXG4gICAgICB0aGlzLl9kYXRhUHJvdmlkZXIucGFnZSA9IDE7XG4gICAgICB0aGlzLl9kYXRhUHJvdmlkZXIucGFnZVNpemUgPSA1MDA7XG4gICAgfVxuICAgIGlmIChkcCAmJiBkcC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldHVwQ29sdW1uRGVmYXVsdHMoKTtcbiAgICB9XG4gICAgdGhpcy5fZGF0YVByb3ZpZGVyLnJlZnJlc2goKTtcbiAgfVxuICBnZXQgZGF0YVByb3ZpZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhUHJvdmlkZXI7XG4gIH1cblxuICBnZXQgZWRpdGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSBOb3ZvVGFibGVNb2RlLkVESVQ7XG4gIH1cblxuICBnZXQgZm9ybVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnRhYmxlRm9ybS52YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHByaXZhdGUgZm9ybVV0aWxzOiBGb3JtVXRpbHMsIHByaXZhdGUgYnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICBub3RpZnkoJ1tEZXByZWNhdGVkXTogVGhlIHRhYmxlIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSBtaWdyYXRlIHRvIG5vdm8tZGF0YS10YWJsZXMhJyk7XG4gIH1cblxuICBvbkRyb3Bkb3duVG9nZ2xlZChldmVudCwgY29sdW1uKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGVkRHJvcGRvd25NYXBbY29sdW1uXSA9IGV2ZW50O1xuICB9XG5cbiAgZm9jdXNJbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maWx0ZXJJbnB1dHMgJiYgdGhpcy5maWx0ZXJJbnB1dHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmZpbHRlcklucHV0cy5mb3JFYWNoKChmaWx0ZXJJbnB1dCkgPT4ge1xuICAgICAgICBpZiAoZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpLCAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25QYWdlQ2hhbmdlKGV2ZW50KSB7XG4gICAgLy8gdGhpcy5kYXRhUHJvdmlkZXIucGFnZSA9IGV2ZW50LnBhZ2U7XG4gICAgLy8gdGhpcy5kYXRhUHJvdmlkZXIucGFnZVNpemUgPSBldmVudC5pdGVtc1BlclBhZ2U7XG4gIH1cblxuICBnZXRPcHRpb25EYXRhQXV0b21hdGlvbklkKG9wdGlvbikge1xuICAgIGlmICghSGVscGVycy5pc0JsYW5rKG9wdGlvbi52YWx1ZSkpIHtcbiAgICAgIHJldHVybiBvcHRpb24udmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb247XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2V0dXBDb2x1bW5EZWZhdWx0c1xuICAgKi9cbiAgc2V0dXBDb2x1bW5EZWZhdWx0cygpIHtcbiAgICAvLyBDaGVjayBjb2x1bW5zIGZvciBjZWxsIG9wdGlvbiB0eXBlc1xuICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgIGlmIChjb2x1bW4gJiYgY29sdW1uLnR5cGUpIHtcbiAgICAgICAgc3dpdGNoIChjb2x1bW4udHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgICAgLy8gU2V0IG9wdGlvbnMgYmFzZWQgb24gZGF0ZXMgaWYgdGhlcmUgYXJlIG5vbmVcbiAgICAgICAgICAgIGNvbHVtbi5vcHRpb25zID0gY29sdW1uLm9wdGlvbnMgfHwgdGhpcy5nZXREZWZhdWx0T3B0aW9ucyhjb2x1bW4pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgbmdEb0NoZWNrXG4gICAqL1xuICBuZ0RvQ2hlY2soKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnBhZ2luZyAmJiB0aGlzLmNvbmZpZy5wYWdpbmcuY3VycmVudCAhPT0gdGhpcy5sYXN0UGFnZSkge1xuICAgICAgdGhpcy5yb3dTZWxlY3RIYW5kbGVyKCk7XG4gICAgICB0aGlzLnNob3dTZWxlY3RBbGxNZXNzYWdlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMubGFzdFBhZ2UgPSB0aGlzLmNvbmZpZy5wYWdpbmcgPyB0aGlzLmNvbmZpZy5wYWdpbmcuY3VycmVudCA6IDE7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZ2V0UGFnZVN0YXJ0XG4gICAqL1xuICBnZXRQYWdlU3RhcnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcucGFnaW5nID8gKHRoaXMuZGF0YVByb3ZpZGVyLnBhZ2UgLSAxKSAqIHRoaXMuZGF0YVByb3ZpZGVyLnBhZ2VTaXplIDogMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBnZXRQYWdlRW5kXG4gICAqL1xuICBnZXRQYWdlRW5kKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnBhZ2luZyAmJiB0aGlzLmRhdGFQcm92aWRlci5wYWdlU2l6ZSA+IC0xID8gdGhpcy5nZXRQYWdlU3RhcnQoKSArIHRoaXMuZGF0YVByb3ZpZGVyLnBhZ2VTaXplIDogdGhpcy5yb3dzLmxlbmd0aDtcbiAgfVxuXG4gIGdldFJvd0NvbnRyb2xGb3JtKGkpOiBBYnN0cmFjdENvbnRyb2wge1xuICAgIGNvbnN0IHRhYmxlRm9ybVJvd3MgPSA8Rm9ybUFycmF5PnRoaXMudGFibGVGb3JtLmNvbnRyb2xzWydyb3dzJ107XG4gICAgcmV0dXJuIHRhYmxlRm9ybVJvd3MuY29udHJvbHNbaV07XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgb25GaWx0ZXJDbGlja1xuICAgKiBAcGFyYW0gY29sdW1uXG4gICAqIEBwYXJhbSBmaWx0ZXJcbiAgICovXG4gIG9uRmlsdGVyQ2xpY2soY29sdW1uLCBmaWx0ZXIpIHtcbiAgICBpZiAoZmlsdGVyLnJhbmdlICYmICFjb2x1bW4uY2FsZW5kYXJTaG93KSB7XG4gICAgICBjb2x1bW4uY2FsZW5kZXJTaG93ID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29sdW1uLmZpbHRlcikgJiYgY29sdW1uLm11bHRpcGxlKSB7XG4gICAgICBpZiAofmNvbHVtbi5maWx0ZXIuaW5kZXhPZihmaWx0ZXIpKSB7XG4gICAgICAgIC8vIFJlbW92ZSBmaWx0ZXJcbiAgICAgICAgY29sdW1uLmZpbHRlci5zcGxpY2UoY29sdW1uLmZpbHRlci5pbmRleE9mKGZpbHRlciksIDEpO1xuICAgICAgICBpZiAoZmlsdGVyLnJhbmdlKSB7XG4gICAgICAgICAgY29sdW1uLmNhbGVuZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29sdW1uLmZpbHRlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFkZCBmaWx0ZXJcbiAgICAgICAgY29sdW1uLmZpbHRlci5wdXNoKGZpbHRlcik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb2x1bW4ubXVsdGlwbGUpIHtcbiAgICAgIGNvbHVtbi5maWx0ZXIgPSBuZXcgQXJyYXkoKTtcbiAgICAgIGNvbHVtbi5maWx0ZXIucHVzaChIZWxwZXJzLmlzQmxhbmsoZmlsdGVyLnZhbHVlKSA/IGZpbHRlciA6IGZpbHRlci52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbHVtbi5maWx0ZXIgPSBIZWxwZXJzLmlzQmxhbmsoZmlsdGVyLnZhbHVlKSA/IGZpbHRlciA6IGZpbHRlci52YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5vbkZpbHRlckNoYW5nZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uRmlsdGVyQ2xlYXJcbiAgICogQHBhcmFtIGNvbHVtblxuICAgKi9cbiAgb25GaWx0ZXJDbGVhcihjb2x1bW46IGFueSk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29sdW1uLmZpbHRlciA9IG51bGw7XG4gICAgICBjb2x1bW4uZnJlZXRleHRGaWx0ZXIgPSBudWxsO1xuICAgICAgdGhpcy5vbkZpbHRlckNoYW5nZSgpO1xuICAgICAgaWYgKGNvbHVtbi5vcmlnaW5hbE9wdGlvbnMpIHtcbiAgICAgICAgY29sdW1uLm9wdGlvbnMgPSBjb2x1bW4ub3JpZ2luYWxPcHRpb25zO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xlYXJBbGxTb3J0QW5kRmlsdGVycygpIHtcbiAgICBpZiAodGhpcy5jb25maWcuZmlsdGVyaW5nKSB7XG4gICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIGNvbHVtbi5maWx0ZXIgPSBudWxsO1xuICAgICAgICBjb2x1bW4uc29ydCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgb25GaWx0ZXJDaGFuZ2VcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgbWV0aG9kIHVwZGF0ZXMgdGhlIHJvdyBkYXRhIHRvIHJlZmxlY3QgdGhlIGFjdGl2ZSBmaWx0ZXJzLlxuICAgKi9cbiAgb25GaWx0ZXJDaGFuZ2UoZXZlbnQ/OiBFdmVudCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXJpbmcpIHtcbiAgICAgIC8vIEFycmF5IG9mIGZpbHRlcnNcbiAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2wpID0+ICFIZWxwZXJzLmlzRW1wdHkoY29sLmZpbHRlcikpO1xuICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBxdWVyeSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBmaWx0ZXJzKSB7XG4gICAgICAgICAgaWYgKEhlbHBlcnMuaXNGdW5jdGlvbihjb2x1bW4ubWF0Y2gpKSB7XG4gICAgICAgICAgICBxdWVyeVtjb2x1bW4ubmFtZV0gPSAodmFsdWUsIHJlY29yZCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gY29sdW1uLm1hdGNoKHJlY29yZCwgY29sdW1uLmZpbHRlcik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29sdW1uLnByZUZpbHRlciAmJiBIZWxwZXJzLmlzRnVuY3Rpb24oY29sdW1uLnByZUZpbHRlcikpIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gT2JqZWN0LmFzc2lnbih7fSwgcXVlcnksIGNvbHVtbi5wcmVGaWx0ZXIodGhpcy5lc2NhcGVDaGFyYWN0ZXJzKGNvbHVtbi5maWx0ZXIpKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbHVtbi5maWx0ZXIpKSB7XG4gICAgICAgICAgICAvLyBUaGUgZmlsdGVycyBhcmUgYW4gYXJyYXkgKG11bHRpLXNlbGVjdCksIGNoZWNrIHZhbHVlXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IGNvbHVtbi5maWx0ZXI7XG4gICAgICAgICAgICAvLyBXZSBoYXZlIGFuIGFycmF5IG9mIHt2YWx1ZTogJycsIGxhYmVsczogJyd9XG4gICAgICAgICAgICBpZiAob3B0aW9uc1swXS52YWx1ZSB8fCBvcHRpb25zWzBdLmxhYmVsKSB7XG4gICAgICAgICAgICAgIG9wdGlvbnMgPSBjb2x1bW4uZmlsdGVyLm1hcCgob3B0KSA9PiBvcHQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVlcnlbY29sdW1uLm5hbWVdID0geyBhbnk6IG9wdGlvbnMgfTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbi50eXBlICYmIGNvbHVtbi50eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW4uZmlsdGVyLnN0YXJ0RGF0ZSAmJiBjb2x1bW4uZmlsdGVyLmVuZERhdGUpIHtcbiAgICAgICAgICAgICAgcXVlcnlbY29sdW1uLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgIG1pbjogZGF0ZUZucy5zdGFydE9mRGF5KGNvbHVtbi5maWx0ZXIuc3RhcnREYXRlKSxcbiAgICAgICAgICAgICAgICBtYXg6IGRhdGVGbnMuc3RhcnRPZkRheShkYXRlRm5zLmFkZERheXMoZGF0ZUZucy5zdGFydE9mRGF5KGNvbHVtbi5maWx0ZXIuZW5kRGF0ZSksIDEpKSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHF1ZXJ5W2NvbHVtbi5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBtaW46IGNvbHVtbi5maWx0ZXIubWluID8gZGF0ZUZucy5hZGREYXlzKGRhdGVGbnMuc3RhcnRPZlRvZGF5KCksIGNvbHVtbi5maWx0ZXIubWluKSA6IGRhdGVGbnMuc3RhcnRPZlRvZGF5KCksXG4gICAgICAgICAgICAgICAgbWF4OiBjb2x1bW4uZmlsdGVyLm1heCA/IGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZUb21vcnJvdygpLCBjb2x1bW4uZmlsdGVyLm1heCkgOiBkYXRlRm5zLnN0YXJ0T2ZUb21vcnJvdygpLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeVtjb2x1bW4ubmFtZV0gPSBjb2x1bW4uZmlsdGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoSGVscGVycy5pc0Z1bmN0aW9uKHRoaXMuY29uZmlnLmZpbHRlcmluZykpIHtcbiAgICAgICAgICB0aGlzLmNvbmZpZy5maWx0ZXJpbmcocXVlcnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2RhdGFQcm92aWRlci5maWx0ZXIgPSBxdWVyeTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLmZpbHRlciA9IHt9O1xuICAgICAgfVxuICAgICAgLy8gVHJpY2tsZSBkb3duIHRvIGtlZXAgc29ydFxuICAgICAgLy8gdGhpcy5vblNvcnRDaGFuZ2UodGhpcy5jdXJyZW50U29ydENvbHVtbik7XG4gICAgICB0aGlzLmZpcmVUYWJsZUNoYW5nZUV2ZW50KCk7XG5cbiAgICAgIC8vIElmIHBhZ2luZywgcmVzZXQgcGFnZVxuICAgICAgaWYgKHRoaXMuY29uZmlnLnBhZ2luZykge1xuICAgICAgICB0aGlzLmNvbmZpZy5wYWdpbmcuY3VycmVudCA9IDE7XG4gICAgICB9XG4gICAgICAvLyBSZW1vdmUgYWxsIHNlbGVjdGlvbiBvbiBzb3J0IGNoYW5nZSBpZiBzZWxlY3Rpb24gaXMgb25cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3dTZWxlY3Rpb25TdHlsZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICB0aGlzLnNlbGVjdEFsbChmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXNjYXBlQ2hhcmFjdGVycyhmaWx0ZXIpIHtcbiAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBmaWx0ZXIucmVwbGFjZSgvJy9nLCAnXFwnXFwnJyk7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXI7XG4gIH1cblxuICBpc0ZpbHRlckFjdGl2ZShjb2x1bW4sIGZpbHRlcik6IGJvb2xlYW4ge1xuICAgIC8vIFRPRE86IFRoaXMgbmVlZHMgdG8gYmUgcmVmYWN0b3JlZFxuICAgIGxldCBpc0FjdGl2ZSA9IGZhbHNlO1xuICAgIGlmIChjb2x1bW4gJiYgIUhlbHBlcnMuaXNCbGFuayhjb2x1bW4uZmlsdGVyKSAmJiAhSGVscGVycy5pc0JsYW5rKGZpbHRlcikpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbHVtbi5maWx0ZXIpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsdGVyICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlzQWN0aXZlID0gY29sdW1uLmZpbHRlci5zb21lKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5sYWJlbCA9PT0gZmlsdGVyLmxhYmVsO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlzQWN0aXZlID0gY29sdW1uLmZpbHRlci5pbmNsdWRlcyhmaWx0ZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIGNvbHVtbi5maWx0ZXIgPT09IHR5cGVvZiBmaWx0ZXIpIHtcbiAgICAgICAgICBpc0FjdGl2ZSA9IGNvbHVtbi5maWx0ZXIgPT09IGZpbHRlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc0FjdGl2ZSA9IGNvbHVtbi5maWx0ZXIgPT09IGZpbHRlci52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNBY3RpdmU7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgb25Tb3J0Q2hhbmdlXG4gICAqIEBwYXJhbSBuZXdTb3J0Q29sdW1uXG4gICAqL1xuICBvblNvcnRDaGFuZ2UoY29sdW1uKSB7XG4gICAgdGhpcy5jdXJyZW50U29ydENvbHVtbiA9IGNvbHVtbjtcbiAgICBjb25zdCBzb3J0ZWRDb2x1bW5zOiBhbnkgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKCh0aGlzQ29sdW1uKSA9PiB7XG4gICAgICByZXR1cm4gdGhpc0NvbHVtbi5zb3J0ICYmIHRoaXNDb2x1bW4gIT09IHRoaXMuY3VycmVudFNvcnRDb2x1bW47XG4gICAgfSk7XG4gICAgZm9yIChjb25zdCBzb3J0ZWRDb2x1bW4gb2Ygc29ydGVkQ29sdW1ucykge1xuICAgICAgc29ydGVkQ29sdW1uLnNvcnQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChjb2x1bW4pIHtcbiAgICAgIGlmIChIZWxwZXJzLmlzRnVuY3Rpb24odGhpcy5jb25maWcuc29ydGluZykpIHtcbiAgICAgICAgdGhpcy5jb25maWcuc29ydGluZygpO1xuICAgICAgfSBlbHNlIGlmIChIZWxwZXJzLmlzRnVuY3Rpb24oY29sdW1uLnByZVNvcnQpKSB7XG4gICAgICAgIHRoaXMuX2RhdGFQcm92aWRlci5zb3J0ID0gW10uY29uY2F0KGNvbHVtbi5wcmVTb3J0KGNvbHVtbikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLnNvcnQgPSBbeyBmaWVsZDogY29sdW1uLmNvbXBhcmUgfHwgY29sdW1uLm5hbWUsIHJldmVyc2U6IGNvbHVtbi5zb3J0ID09PSAnZGVzYycgfV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRmlyZSB0YWJsZSBjaGFuZ2UgZXZlbnRcbiAgICAvLyB0aGlzLmZpcmVUYWJsZUNoYW5nZUV2ZW50KCk7XG5cbiAgICAvLyBJZiBwYWdpbmcsIHJlc2V0IHBhZ2VcbiAgICBpZiAodGhpcy5jb25maWcucGFnaW5nKSB7XG4gICAgICB0aGlzLmNvbmZpZy5wYWdpbmcuY3VycmVudCA9IDE7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBzZWxlY3Rpb24gb24gc29ydCBjaGFuZ2UgaWYgc2VsZWN0aW9uIGlzIG9uXG4gICAgaWYgKHRoaXMuY29uZmlnLnJvd1NlbGVjdGlvblN0eWxlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGZpcmVUYWJsZUNoYW5nZUV2ZW50XG4gICAqL1xuICBmaXJlVGFibGVDaGFuZ2VFdmVudCgpIHtcbiAgICAvLyBDb25zdHJ1Y3QgYSB0YWJsZSBjaGFuZ2Ugb2JqZWN0XG4gICAgY29uc3Qgb25UYWJsZUNoYW5nZTogYW55ID0ge307XG4gICAgY29uc3QgZmlsdGVycyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbCkgPT4gY29sLmZpbHRlciAmJiBjb2wuZmlsdGVyLmxlbmd0aCk7XG4gICAgb25UYWJsZUNoYW5nZS5maWx0ZXIgPSBmaWx0ZXJzLmxlbmd0aCA/IGZpbHRlcnMgOiBmYWxzZTtcbiAgICBvblRhYmxlQ2hhbmdlLnNvcnQgPSB0aGlzLmN1cnJlbnRTb3J0Q29sdW1uID8gdGhpcy5jdXJyZW50U29ydENvbHVtbiA6IGZhbHNlO1xuICAgIG9uVGFibGVDaGFuZ2Uucm93cyA9IHRoaXMucm93cztcblxuICAgIC8vIEVtaXQgZXZlbnRcbiAgICB0aGlzLm9uVGFibGVDaGFuZ2UuZW1pdChvblRhYmxlQ2hhbmdlKTtcbiAgfVxuXG4gIGZpbmRDb2x1bW5JbmRleCh2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5jb2x1bW5zW2ldLm5hbWUgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbk9yZGVyQ2hhbmdlXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgb25PcmRlckNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IG9sZEluZGV4ID0gdGhpcy5maW5kQ29sdW1uSW5kZXgoZXZlbnQuZmlyc3QubmFtZSk7XG4gICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLmZpbmRDb2x1bW5JbmRleChldmVudC5zZWNvbmQubmFtZSk7XG4gICAgdGhpcy5jb2x1bW5zLnNwbGljZShuZXdJbmRleCwgMCwgdGhpcy5jb2x1bW5zLnNwbGljZShvbGRJbmRleCwgMSlbMF0pO1xuICAgIHRoaXMub25Tb3J0Q2hhbmdlKHRoaXMuY3VycmVudFNvcnRDb2x1bW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNlbGVjdFBhZ2VcbiAgICovXG4gIGV4cGFuZEFsbE9uUGFnZShleHBhbmRlZCkge1xuICAgIHRoaXMuY29uZmlnLmV4cGFuZEFsbCA9ICFleHBhbmRlZDtcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiB0aGlzLmRhdGFQcm92aWRlci5saXN0KSB7XG4gICAgICByb3cuX2V4cGFuZGVkID0gdGhpcy5jb25maWcuZXhwYW5kQWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZWxlY3RQYWdlXG4gICAqL1xuICBzZWxlY3RQYWdlKGRhdGE/OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMubWFzdGVyKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbChmYWxzZSk7XG4gICAgICAvLyBPbmx5IHNob3cgdGhlIHNlbGVjdCBhbGwgbWVzc2FnZSB3aGVuIHRoZXJlIGlzIG9ubHkgb25lIG5ldyBwYWdlIHNlbGVjdGVkIGF0IGEgdGltZVxuICAgICAgdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCA9IHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgPiAwID8gdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCAtIDEgOiAwO1xuICAgICAgdGhpcy5zaG93U2VsZWN0QWxsTWVzc2FnZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgIC8vIHRoaXMucGFnZWREYXRhID0gdGhpcy5yb3dzLnNsaWNlKHRoaXMuZ2V0UGFnZVN0YXJ0KCksIHRoaXMuZ2V0UGFnZUVuZCgpKTtcbiAgICAgIGZvciAoY29uc3Qgcm93IG9mIHRoaXMucGFnZWREYXRhKSB7XG4gICAgICAgIHJvdy5fc2VsZWN0ZWQgPSB0aGlzLm1hc3RlcjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmRhdGFQcm92aWRlci5saXN0LmZpbHRlcigocikgPT4gci5fc2VsZWN0ZWQpO1xuICAgICAgdGhpcy5wYWdlU2VsZWN0ZWQgPSB0aGlzLnBhZ2VkRGF0YS5maWx0ZXIoKHIpID0+IHIuX3NlbGVjdGVkKTtcbiAgICAgIHRoaXMuZW1pdFNlbGVjdGVkKHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgLy8gT25seSBzaG93IHRoZSBzZWxlY3QgYWxsIG1lc3NhZ2Ugd2hlbiB0aGVyZSBpcyBvbmx5IG9uZSBuZXcgcGFnZSBzZWxlY3RlZCBhdCBhIHRpbWVcbiAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQrKztcbiAgICAgIHRoaXMuc2hvd1NlbGVjdEFsbE1lc3NhZ2UgPSB0aGlzLnNlbGVjdGVkUGFnZUNvdW50ID09PSAxICYmIHRoaXMuc2VsZWN0ZWQubGVuZ3RoICE9PSB0aGlzLmRhdGFQcm92aWRlci50b3RhbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2VsZWN0QWxsXG4gICAqL1xuICBzZWxlY3RBbGwodmFsdWUpIHtcbiAgICB0aGlzLm1hc3RlciA9IHZhbHVlO1xuICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIGZvciAoY29uc3Qgcm93IG9mIHRoaXMuZGF0YVByb3ZpZGVyLmxpc3QpIHtcbiAgICAgIHJvdy5fc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZCA9IHZhbHVlID8gdGhpcy5kYXRhUHJvdmlkZXIubGlzdCA6IFtdO1xuICAgIHRoaXMuc2hvd1NlbGVjdEFsbE1lc3NhZ2UgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkUGFnZUNvdW50ID0gdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCA+IDAgPyB0aGlzLnNlbGVjdGVkUGFnZUNvdW50IC0gMSA6IDA7XG4gICAgdGhpcy5yb3dTZWxlY3RIYW5kbGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgcm93U2VsZWN0SGFuZGxlclxuICAgKi9cbiAgcm93U2VsZWN0SGFuZGxlcihkYXRhPzogYW55KSB7XG4gICAgLy8gdGhpcy5wYWdlZERhdGEgPSB0aGlzLnJvd3Muc2xpY2UodGhpcy5nZXRQYWdlU3RhcnQoKSwgdGhpcy5nZXRQYWdlRW5kKCkpO1xuICAgIHRoaXMucGFnZVNlbGVjdGVkID0gdGhpcy5wYWdlZERhdGEuZmlsdGVyKChyKSA9PiByLl9zZWxlY3RlZCk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuZGF0YVByb3ZpZGVyLmxpc3QuZmlsdGVyKChyKSA9PiByLl9zZWxlY3RlZCk7XG4gICAgaWYgKHRoaXMucGFnZVNlbGVjdGVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5tYXN0ZXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wYWdlU2VsZWN0ZWQubGVuZ3RoID09PSB0aGlzLnBhZ2VkRGF0YS5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWFzdGVyID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hc3RlciA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gdHJ1ZTtcblxuICAgICAgLy8gQnJlYWtpbmcgdGhlIHNlbGVjdGVkIHBhZ2UgY291bnRcbiAgICAgIHRoaXMuc2hvd1NlbGVjdEFsbE1lc3NhZ2UgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgPSB0aGlzLnNlbGVjdGVkUGFnZUNvdW50ID4gMCA/IHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgLSAxIDogMDtcbiAgICB9XG4gICAgdGhpcy5lbWl0U2VsZWN0ZWQodGhpcy5zZWxlY3RlZCk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZW1pdFNlbGVjdGVkXG4gICAqIEBwYXJhbSBzZWxlY3RlZFxuICAgKi9cbiAgZW1pdFNlbGVjdGVkKHNlbGVjdGVkKSB7XG4gICAgdGhpcy5vblJvd1NlbGVjdC5lbWl0KHsgbGVuZ3RoOiBzZWxlY3RlZC5sZW5ndGgsIHNlbGVjdGVkIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHJvd0NsaWNrSGFuZGxlclxuICAgKiBAcGFyYW0gcm93XG4gICAqL1xuICByb3dDbGlja0hhbmRsZXIocm93KSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnJvd1NlbGVjdCkge1xuICAgICAgdGhpcy5hY3RpdmVJZCA9IHJvdy5pZCB8fCAwO1xuICAgICAgdGhpcy5vblJvd0NsaWNrLmVtaXQocm93KTtcbiAgICB9XG4gIH1cblxuICBnZXREZWZhdWx0T3B0aW9ucyhjb2x1bW4pIHtcbiAgICAvLyBUT0RPIC0gbmVlZHMgdG8gY29tZSBmcm9tIGxhYmVsIHNlcnZpY2UgLSBodHRwczovL2dpdGh1Yi5jb20vYnVsbGhvcm4vbm92by1lbGVtZW50cy9pc3N1ZXMvMTE2XG4gICAgY29uc3Qgb3B0czogYW55W10gPSBbXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MURheSwgbWluOiAtMSwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0N0RheXMsIG1pbjogLTcsIG1heDogMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDMwRGF5cywgbWluOiAtMzAsIG1heDogMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDkwRGF5cywgbWluOiAtOTAsIG1heDogMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDFZZWFyLCBtaW46IC0zNjYsIG1heDogMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDFEYXksIG1pbjogMCwgbWF4OiAxIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0N0RheXMsIG1pbjogMCwgbWF4OiA3IH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MzBEYXlzLCBtaW46IDAsIG1heDogMzAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQ5MERheXMsIG1pbjogMCwgbWF4OiA5MCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDFZZWFyLCBtaW46IDAsIG1heDogMzY2IH0sXG4gICAgXTtcblxuICAgIGlmIChjb2x1bW4gJiYgY29sdW1uLnJhbmdlKSB7XG4gICAgICBvcHRzLnB1c2goe1xuICAgICAgICBsYWJlbDogdGhpcy5sYWJlbHMuY3VzdG9tRGF0ZVJhbmdlLFxuICAgICAgICByYW5nZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gb3B0cztcbiAgfVxuXG4gIG9uQ2FsZW5kZXJTZWxlY3QoY29sdW1uLCBldmVudCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnN0YXJ0RGF0ZSAmJiBldmVudC5lbmREYXRlKSB7XG4gICAgICAgIHRoaXMub25GaWx0ZXJDaGFuZ2UoKTtcbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH1cblxuICBvbkZpbHRlcktleXdvcmRzKGNvbmZpZykge1xuICAgIGlmIChjb25maWcgJiYgY29uZmlnLmZpbHRlcmluZyAmJiBjb25maWcuZmlsdGVyaW5nLmZyZWV0ZXh0RmlsdGVyKSB7XG4gICAgICBjb25zdCBmaWx0ZXJLZXl3b3JkcyA9IGNvbmZpZy5maWx0ZXJpbmcuZnJlZXRleHRGaWx0ZXIudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmICghY29uZmlnLmZpbHRlcmluZy5vcmlnaW5hbE9wdGlvbnMpIHtcbiAgICAgICAgY29uZmlnLmZpbHRlcmluZy5vcmlnaW5hbE9wdGlvbnMgPSBjb25maWcuZmlsdGVyaW5nLm9wdGlvbnM7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXdPcHRpb25zID0gY29uZmlnLmZpbHRlcmluZy5vcmlnaW5hbE9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gb3B0aW9uICYmIG9wdGlvbi5sYWJlbCA/IG9wdGlvbi5sYWJlbCA6IG9wdGlvbjtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpID8gdmFsdWUudG9Mb3dlckNhc2UoKSA6IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgPT09IGZpbHRlcktleXdvcmRzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAofnZhbHVlLmluZGV4T2YoZmlsdGVyS2V5d29yZHMpIHx8IH52YWx1ZS5pbmRleE9mKGZpbHRlcktleXdvcmRzKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgY29uZmlnLmZpbHRlcmluZy5vcHRpb25zID0gbmV3T3B0aW9ucztcbiAgICAgIGNvbmZpZy5maWx0ZXJpbmcuZmlsdGVyID0gY29uZmlnLmZpbHRlcmluZy5mcmVldGV4dEZpbHRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLmZpbHRlcmluZy5vcHRpb25zID0gY29uZmlnLmZpbHRlcmluZy5vcmlnaW5hbE9wdGlvbnM7XG4gICAgfVxuICAgIHRoaXMub25GaWx0ZXJDaGFuZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZXRUYWJsZUVkaXRcbiAgICogQGRlc2NyaXB0aW9uIFNldHMgdGhlIFRhYmxlIGludG8gRURJVCBtb2RlLCBiYXNlZCBvbiB0aGUgcm93L2NvbHVtbiBwYXNzZWQgeW91IGNhbiBlbnRlciBpbiBhIGZldyBzdGF0ZXNcbiAgICogKDEpIHNldFRhYmxlRWRpdCgpIC0gZG9uJ3QgcGFzcyBhbnkgdG8gcHV0IHRoZSBGVUxMIHRhYmxlIGludG8gZWRpdCBtb2RlXG4gICAqICgyKSBzZXRUYWJsZUVkaXQoMSkgLSBwYXNzIG9ubHkgcm93IHRvIHB1dCB0aGF0IEZVTEwgcm93IG9mIHRoZSB0YWJsZSBpbnRvIGVkaXQgbW9kZVxuICAgKiAoMykgc2V0VGFibGVFZGl0KDEsIDEpIC0gcGFzcyByb3cgYW5kIGNvbHVtbiB0byBwdXQgdGhhdCBjb2x1bW4gb2YgdGhlIHJvdyBvZiB0aGUgdGFibGUgaW50byBlZGl0IG1vZGVcbiAgICogQHBhcmFtIFtyb3dOdW1iZXJdXG4gICAqIEBwYXJhbSBbY29sdW1uTnVtYmVyXVxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgc2V0VGFibGVFZGl0KHJvd051bWJlcj86IG51bWJlciwgY29sdW1uTnVtYmVyPzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5tb2RlID0gTm92b1RhYmxlTW9kZS5FRElUO1xuICAgIHRoaXMuX2RhdGFQcm92aWRlci5lZGl0KCk7XG4gICAgdGhpcy5fcm93cy5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICByb3cuX2VkaXRpbmcgPSByb3cuX2VkaXRpbmcgfHwge307XG4gICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uLCBjb2x1bW5JbmRleCkgPT4ge1xuICAgICAgICBpZiAoY29sdW1uLnZpZXdPbmx5KSB7XG4gICAgICAgICAgcm93Ll9lZGl0aW5nW2NvbHVtbi5uYW1lXSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKEhlbHBlcnMuaXNFbXB0eShyb3dOdW1iZXIpICYmIEhlbHBlcnMuaXNFbXB0eShjb2x1bW5OdW1iZXIpKSB7XG4gICAgICAgICAgcm93Ll9lZGl0aW5nW2NvbHVtbi5uYW1lXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoIUhlbHBlcnMuaXNFbXB0eShyb3dOdW1iZXIpICYmIHJvd0luZGV4ID09PSBOdW1iZXIocm93TnVtYmVyKSAmJiBIZWxwZXJzLmlzRW1wdHkoY29sdW1uTnVtYmVyKSkge1xuICAgICAgICAgIHJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV0gPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkocm93TnVtYmVyKSAmJlxuICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29sdW1uTnVtYmVyKSAmJlxuICAgICAgICAgIHJvd0luZGV4ID09PSBOdW1iZXIocm93TnVtYmVyKSAmJlxuICAgICAgICAgIGNvbHVtbkluZGV4ID09PSBOdW1iZXIoY29sdW1uTnVtYmVyKVxuICAgICAgICApIHtcbiAgICAgICAgICByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGxlYXZlRWRpdE1vZGVcbiAgICogQGRlc2NyaXB0aW9uIExlYXZlcyBlZGl0IG1vZGUgZm9yIHRoZSBUYWJsZSBhbmQgcHV0cyBldmVyeXRoaW5nIGJhY2sgdG8gVklFVyBvbmx5XG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqIEBwYXJhbSBjYW5jZWwgLSB3aGV0aGVyIG9yIG5vdCB0byBzYXZlIGRhdGEgb3IgdW5kb1xuICAgKi9cbiAgcHJpdmF0ZSBsZWF2ZUVkaXRNb2RlKGNhbmNlbDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubW9kZSA9IE5vdm9UYWJsZU1vZGUuVklFVztcbiAgICB0aGlzLl9yb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93Ll9lZGl0aW5nID0gcm93Ll9lZGl0aW5nIHx8IHt9O1xuICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAoY2FuY2VsKSB7XG4gICAgICB0aGlzLl9kYXRhUHJvdmlkZXIudW5kbygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhUHJvdmlkZXIuY29tbWl0KCk7XG4gICAgfVxuICAgIHRoaXMuaGlkZVRvYXN0TWVzc2FnZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGFkZEVkaXRhYmxlUm93XG4gICAqIEBkZXNjcmlwdGlvbiBBZGRzIGEgbmV3IHJvdyBpbnRvIHRoZSB0YWJsZSB0byBiZSBlZGl0ZWQsIGNhbiBiZSBjYWxsZWQgZnJvbSBhIGxvY2FsIHJlZmVyZW5jZSBvZiB0aGUgdGFibGUgaW4geW91ciB0ZW1wbGF0ZVxuICAgKiBAcGFyYW0gZGVmYXVsdFZhbHVlXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICBhZGRFZGl0YWJsZVJvdyhkZWZhdWx0VmFsdWU6IGFueSA9IHt9KTogdm9pZCB7XG4gICAgY29uc3QgdGFibGVGb3JtUm93cyA9IDxGb3JtQXJyYXk+dGhpcy50YWJsZUZvcm0uY29udHJvbHNbJ3Jvd3MnXTtcbiAgICBjb25zdCByb3c6IGFueSA9IHt9O1xuICAgIGNvbnN0IHJvd0NvbnRyb2xzID0gW107XG4gICAgcm93LmNvbnRyb2xzID0ge307XG4gICAgcm93Ll9lZGl0aW5nID0ge307XG4gICAgcm93LnJvd0lkID0gdGhpcy5fcm93cy5sZW5ndGggKyAxO1xuICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgIC8vIFVzZSB0aGUgY29udHJvbCBwYXNzZWQgb3IgdXNlIGEgUmVhZE9ubHlDb250cm9sIHNvIHRoYXQgdGhlIGZvcm0gaGFzIHRoZSB2YWx1ZXNcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBjb2x1bW4uZWRpdG9yQ29uZmlnXG4gICAgICAgID8gQ29udHJvbEZhY3RvcnkuY3JlYXRlKGNvbHVtbi5lZGl0b3JUeXBlLCBjb2x1bW4uZWRpdG9yQ29uZmlnKVxuICAgICAgICA6IG5ldyBSZWFkT25seUNvbnRyb2woeyBrZXk6IGNvbHVtbi5uYW1lIH0pO1xuICAgICAgY29udHJvbC52YWx1ZSA9IG51bGw7IC8vIHJlbW92ZSBjb3BpZWQgY29sdW1uIHZhbHVlXG4gICAgICByb3cuY29udHJvbHNbY29sdW1uLm5hbWVdID0gY29udHJvbDtcbiAgICAgIHJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV0gPSAhY29sdW1uLnZpZXdPbmx5O1xuICAgICAgcm93Q29udHJvbHMucHVzaChjb250cm9sKTtcbiAgICB9KTtcbiAgICB0aGlzLmZvcm1VdGlscy5zZXRJbml0aWFsVmFsdWVzKHJvd0NvbnRyb2xzLCBkZWZhdWx0VmFsdWUsIGZhbHNlKTtcbiAgICB0YWJsZUZvcm1Sb3dzLnB1c2godGhpcy5mb3JtVXRpbHMudG9Gb3JtR3JvdXAocm93Q29udHJvbHMpKTtcbiAgICB0aGlzLl9yb3dzLnB1c2gocm93KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSB2YWxpZGF0ZUFuZEdldFVwZGF0ZWREYXRhXG4gICAqIEBkZXNjcmlwdGlvbiBWYWxpZGF0ZXMgdGhlIEZvcm0gaW5zaWRlIG9mIHRoZSBUYWJsZSwgaWYgdGhlcmUgYXJlIGVycm9ycyBpdCB3aWxsIGRpc3BsYXkvcmV0dXJuIHRoZSBlcnJvcnMgZm9yIGVhY2ggcm93LlxuICAgKiBJZiB0aGVyZSBhcmUgbm8gZXJyb3JzLCB0aGVuIGl0IHdpbGwgcmV0dXJuIE9OTFkgdGhlIGNoYW5nZWQgZGF0YSBmb3IgZWFjaCByb3csIHRoZSBkYXRhIHJldHVybmVkIHdpbGwgYmUgaW4gdGhlIGZvcm06XG4gICAqIHsgaWQ6IElEX09GX1JFQ09SRCwga2V5OiB2YWx1ZSB9IC0tIGRhdGEgdGhhdCB3YXMgdXBkYXRlZFxuICAgKiB7IGlkOiB1bmRlZmluZWQsIGtleTogdmFsdWUgfSAtLSBkYXRhIHRoYXQgd2FzIGFkZGVkXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICB2YWxpZGF0ZUFuZEdldFVwZGF0ZWREYXRhKCk6IHsgY2hhbmdlZD86IGFueVtdOyBlcnJvcnM/OiB7IGVycm9yczogYW55OyByb3c6IGFueTsgaW5kZXg6IG51bWJlciB9W10gfSB7XG4gICAgaWYgKHRoaXMudGFibGVGb3JtICYmIHRoaXMudGFibGVGb3JtLmNvbnRyb2xzICYmIHRoaXMudGFibGVGb3JtLmNvbnRyb2xzWydyb3dzJ10pIHtcbiAgICAgIGNvbnN0IGNoYW5nZWRSb3dzID0gW107XG4gICAgICBjb25zdCBlcnJvcnMgPSBbXTtcbiAgICAgIC8vIEdvIG92ZXIgdGhlIEZvcm1BcnJheSdzIGNvbnRyb2xzXG4gICAgICAodGhpcy50YWJsZUZvcm0uY29udHJvbHNbJ3Jvd3MnXSBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzLmZvckVhY2goKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGxldCBjaGFuZ2VkUm93ID0gbnVsbDtcbiAgICAgICAgbGV0IGVycm9yID0gbnVsbDtcbiAgICAgICAgLy8gR28gb3ZlciB0aGUgZm9ybSBncm91cCBjb250cm9sc1xuICAgICAgICBPYmplY3Qua2V5cyhmb3JtR3JvdXAuY29udHJvbHMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udHJvbCA9IGZvcm1Hcm91cC5jb250cm9sc1trZXldO1xuICAgICAgICAgIC8vIEhhbmRsZSB2YWx1ZSBjaGFuZ2luZ1xuICAgICAgICAgIGlmIChjb250cm9sICYmIGNvbnRyb2wuZGlydHkgJiYgIWNvbnRyb2wuZXJyb3JzKSB7XG4gICAgICAgICAgICBpZiAoIWNoYW5nZWRSb3cpIHtcbiAgICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBJRCwgc28gd2UgaGF2ZSBzb21lIGtleSB0byBzYXZlIGFnYWluc3RcbiAgICAgICAgICAgICAgY2hhbmdlZFJvdyA9IHt9O1xuICAgICAgICAgICAgICBpZiAodGhpcy5fcm93c1tpbmRleF0uaWQpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkUm93LmlkID0gdGhpcy5fcm93c1tpbmRleF0uaWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGRpcnR5LCBncmFiIHZhbHVlIG9mZiB0aGUgZm9ybVxuICAgICAgICAgICAgY2hhbmdlZFJvd1trZXldID0gdGhpcy50YWJsZUZvcm0udmFsdWVbJ3Jvd3MnXVtpbmRleF1ba2V5XTtcbiAgICAgICAgICAgIC8vIFNldCB2YWx1ZSBiYWNrIHRvIHJvdyAoc2hvdWxkIGJlIGFscmVhZHkgZG9uZSB2aWEgdGhlIHNlcnZlciBjYWxsLCBidXQgZG8gaXQgYW55d2F5KVxuICAgICAgICAgICAgdGhpcy5fcm93c1tpbmRleF1ba2V5XSA9IGNoYW5nZWRSb3dba2V5XTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRyb2wgJiYgY29udHJvbC5lcnJvcnMpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvcnNcbiAgICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgICAgZXJyb3IgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yW2tleV0gPSBjb250cm9sLmVycm9ycztcbiAgICAgICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjaGFuZ2VkUm93KSB7XG4gICAgICAgICAgY2hhbmdlZFJvd3MucHVzaChjaGFuZ2VkUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaCh7IGVycm9yczogZXJyb3IsIHJvdzogdGhpcy5fcm93c1tpbmRleF0sIGluZGV4IH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJldCA9IHt9O1xuICAgICAgLy8gUmV0dXJuIGVycm9ycyBpZiBhbnksIG90aGVyd2lzZSByZXR1cm4gdGhlIGNoYW5nZWQgcm93c1xuICAgICAgaWYgKGVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgY2hhbmdlZDogY2hhbmdlZFJvd3MgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGVycm9ycyB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBjYW5jZWxFZGl0aW5nXG4gICAqIEBkZXNjcmlwdGlvbiBSZWZyZXNoIHRoZSBkYXRhIHByb3ZpZGVyIGFuZCBsZWF2ZSBlZGl0IG1vZGVcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICovXG4gIGNhbmNlbEVkaXRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5sZWF2ZUVkaXRNb2RlKHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNhdmVDaGFuZ2VzXG4gICAqIEBkZXNjcmlwdGlvbiBSZWZyZXNoIHRoZSBkYXRhIHByb3ZpZGVyIGFuZCBsZWF2ZSBlZGl0IG1vZGVcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICovXG4gIHNhdmVDaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMubGVhdmVFZGl0TW9kZShmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZGlzcGxheVRvYXN0TWVzc2FnZVxuICAgKiBAZGVzY3JpcHRpb24gRGlzcGxheXMgYSB0b2FzdCBtZXNzYWdlIGluc2lkZSBvZiB0aGUgdGFibGVcbiAgICogQHBhcmFtIHRvYXN0XG4gICAqIEBwYXJhbSBoaWRlRGVsYXlcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICovXG4gIGRpc3BsYXlUb2FzdE1lc3NhZ2UodG9hc3Q6IHsgaWNvbjogc3RyaW5nOyB0aGVtZTogc3RyaW5nOyBtZXNzYWdlOiBzdHJpbmcgfSwgaGlkZURlbGF5PzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy50b2FzdCA9IHRvYXN0O1xuICAgIGlmIChoaWRlRGVsYXkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oaWRlVG9hc3RNZXNzYWdlKCksIGhpZGVEZWxheSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGhpZGVUb2FzdE1lc3NhZ2VcbiAgICogQGRlc2NyaXB0aW9uIEZvcmNlIGhpZGUgdGhlIHRvYXN0IG1lc3NhZ2VcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICovXG4gIGhpZGVUb2FzdE1lc3NhZ2UoKTogdm9pZCB7XG4gICAgdGhpcy50b2FzdCA9IG51bGw7XG4gICAgLy8gSGFjayB0byBtYWtlIHRoZSB0YWJsZSBkaXNwbGF5IHByb3Blcmx5IGFmdGVyIGhpZGluZyB0aGUgdG9hc3RcbiAgICB0aGlzLmdyb3NzRmxhZ1RvQXZvaWRUaGVUYWJsZUZyb21CZWluZ1VnbHlXaGVuSGlkaW5nVGhlVG9hc3QgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5ncm9zc0ZsYWdUb0F2b2lkVGhlVGFibGVGcm9tQmVpbmdVZ2x5V2hlbkhpZGluZ1RoZVRvYXN0ID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgdG9nZ2xlTG9hZGluZ1xuICAgKiBAZGVzY3JpcHRpb24gZGlzcGxheSB0aGUgbG9hZGluZyBvdmVybGF5IG9uIHRoZSB0YWJsZVxuICAgKiBAcGFyYW0gc2hvd1xuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgdG9nZ2xlTG9hZGluZyhzaG93OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nID0gc2hvdztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0NvbHVtbkhpZGRlblxuICAgKiBAZGVzY3JpcHRpb24gaGlkZSBhIGNvbHVtbiBpbiBlZGl0IG9yIHZpZXcgbW9kZVxuICAgKiBAcGFyYW0gIGNvbHVtblxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgaXNDb2x1bW5IaWRkZW4oY29sdW1uOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0aW5nID8gISFjb2x1bW4uaGlkZUNvbHVtbk9uRWRpdCA6ICEhY29sdW1uLmhpZGVDb2x1bW5PblZpZXc7XG4gIH1cbn1cbiJdfQ==