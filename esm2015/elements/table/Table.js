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
// TODO - support (1) clicking cell to edit, (2) clicking row to edit, (3) button to trigger full table to edit
export var NovoTableMode;
(function (NovoTableMode) {
    NovoTableMode[NovoTableMode["VIEW"] = 1] = "VIEW";
    NovoTableMode[NovoTableMode["EDIT"] = 2] = "EDIT";
})(NovoTableMode || (NovoTableMode = {}));
export class NovoTableElement {
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
    get rows() {
        return this._rows;
    }
    set dataProvider(dp) {
        this._dataProvider = Array.isArray(dp) ? new PagedArrayCollection(dp) : dp;
        this._dataProvider.dataChange.pipe(debounceTime(100)).subscribe((event) => {
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
                        this.pageSelected = this.pagedData.filter((r) => r._selected);
                        this.rowSelectHandler();
                    }
                    // Find that columns we might need to sum up via the footer
                    let columnsToSum = [];
                    const columnSums = {};
                    if (this.config.footers) {
                        this.config.footers.forEach((config) => {
                            columnsToSum.push(...config.columns);
                        });
                        // Only have unique columns, filter out duplicates
                        columnsToSum = columnsToSum.filter((item, index, array) => array.indexOf(item) === index);
                    }
                    // Make a form for each row
                    const tableFormRows = this.tableForm.controls['rows'];
                    this._rows.forEach((row, index) => {
                        const rowControls = [];
                        row.controls = {};
                        row._editing = {};
                        row._expanded = this.config.expandAll;
                        row.rowId = this._rows.length;
                        this.columns.forEach((column) => {
                            // Use the control passed or use a ReadOnlyControl so that the form has the values
                            const control = column.editorConfig
                                ? ControlFactory.create(column.editorType, column.editorConfig)
                                : new ReadOnlyControl({ key: column.name });
                            row.controls[column.name] = control;
                            rowControls.push(control);
                        });
                        this.formUtils.setInitialValues(rowControls, row, false);
                        tableFormRows.push(this.formUtils.toFormGroup(rowControls));
                        // Setup the total footer if configured
                        // Array of keys to total
                        if (columnsToSum.length !== 0) {
                            columnsToSum.forEach((column) => {
                                if (Helpers.isBlank(columnSums[column])) {
                                    columnSums[column] = 0;
                                }
                                columnSums[column] += row[column];
                            });
                        }
                    });
                    if (this.mode === NovoTableMode.EDIT) {
                        this.setTableEdit();
                    }
                    // Setup the footers (if any)
                    if (this.config.footers) {
                        this.footers = [];
                        this.config.footers.forEach((footerConfig, footerConfigIndex) => {
                            const footer = {};
                            footer[footerConfig.labelColumn] = footerConfig.label;
                            footerConfig.columns.forEach((column) => {
                                if (footerConfig.method === 'AVG' && this._rows.length !== 0) {
                                    footer[column] = columnSums[column] / this._rows.length;
                                }
                                else {
                                    footer[column] = columnSums[column];
                                }
                            });
                            this.footers.push(footer);
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
    }
    get dataProvider() {
        return this._dataProvider;
    }
    get editing() {
        return this.mode === NovoTableMode.EDIT;
    }
    get formValue() {
        return this.tableForm.value;
    }
    onDropdownToggled(event, column) {
        this.toggledDropdownMap[column] = event;
    }
    focusInput() {
        if (this.filterInputs && this.filterInputs.length) {
            this.filterInputs.forEach((filterInput) => {
                if (filterInput.nativeElement) {
                    setTimeout(() => filterInput.nativeElement.focus(), 0);
                }
            });
        }
    }
    onPageChange(event) {
        // this.dataProvider.page = event.page;
        // this.dataProvider.pageSize = event.itemsPerPage;
    }
    getOptionDataAutomationId(option) {
        if (!Helpers.isBlank(option.value)) {
            return option.value;
        }
        return option;
    }
    setupColumnDefaults() {
        // Check columns for cell option types
        this.columns.forEach((column) => {
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
        });
    }
    ngDoCheck() {
        if (this.config.paging && this.config.paging.current !== this.lastPage) {
            this.rowSelectHandler();
            this.showSelectAllMessage = false;
        }
        this.lastPage = this.config.paging ? this.config.paging.current : 1;
    }
    getPageStart() {
        return this.config.paging ? (this.dataProvider.page - 1) * this.dataProvider.pageSize : 0;
    }
    getPageEnd() {
        return this.config.paging && this.dataProvider.pageSize > -1 ? this.getPageStart() + this.dataProvider.pageSize : this.rows.length;
    }
    getRowControlForm(i) {
        const tableFormRows = this.tableForm.controls['rows'];
        return tableFormRows.controls[i];
    }
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
    onFilterClear(column) {
        setTimeout(() => {
            column.filter = null;
            column.freetextFilter = null;
            this.onFilterChange();
            if (column.originalOptions) {
                column.options = column.originalOptions;
            }
        });
    }
    clearAllSortAndFilters() {
        if (this.config.filtering) {
            this.columns.forEach((column) => {
                column.filter = null;
                column.sort = null;
            });
        }
    }
    /**
     * @description This method updates the row data to reflect the active filters.
     */
    onFilterChange(event) {
        if (this.config.filtering) {
            // Array of filters
            const filters = this.columns.filter((col) => !Helpers.isEmpty(col.filter));
            if (filters.length) {
                let query = {};
                for (const column of filters) {
                    if (Helpers.isFunction(column.match)) {
                        query[column.name] = (value, record) => {
                            return column.match(record, column.filter);
                        };
                    }
                    else if (column.preFilter && Helpers.isFunction(column.preFilter)) {
                        query = Object.assign({}, query, column.preFilter(this.escapeCharacters(column.filter)));
                    }
                    else if (Array.isArray(column.filter)) {
                        // The filters are an array (multi-select), check value
                        let options = column.filter;
                        // We have an array of {value: '', labels: ''}
                        if (options[0].value || options[0].label) {
                            options = column.filter.map((opt) => opt.value);
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
    escapeCharacters(filter) {
        if (typeof filter === 'string') {
            return filter.replace(/'/g, '\'\'');
        }
        return filter;
    }
    isFilterActive(column, filter) {
        // TODO: This needs to be refactored
        let isActive = false;
        if (column && !Helpers.isBlank(column.filter) && !Helpers.isBlank(filter)) {
            if (Array.isArray(column.filter)) {
                if (typeof filter !== 'string') {
                    isActive = column.filter.some((item) => {
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
    }
    onSortChange(column) {
        this.currentSortColumn = column;
        const sortedColumns = this.columns.filter((thisColumn) => {
            return thisColumn.sort && thisColumn !== this.currentSortColumn;
        });
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
    fireTableChangeEvent() {
        // Construct a table change object
        const onTableChange = {};
        const filters = this.columns.filter((col) => col.filter && col.filter.length);
        onTableChange.filter = filters.length ? filters : false;
        onTableChange.sort = this.currentSortColumn ? this.currentSortColumn : false;
        onTableChange.rows = this.rows;
        // Emit event
        this.onTableChange.emit(onTableChange);
    }
    findColumnIndex(value) {
        for (let i = 0; i < this.columns.length; i += 1) {
            if (this.columns[i].name === value) {
                return i;
            }
        }
        return null;
    }
    onOrderChange(event) {
        const oldIndex = this.findColumnIndex(event.first.name);
        const newIndex = this.findColumnIndex(event.second.name);
        this.columns.splice(newIndex, 0, this.columns.splice(oldIndex, 1)[0]);
        this.onSortChange(this.currentSortColumn);
    }
    expandAllOnPage(expanded) {
        this.config.expandAll = !expanded;
        for (const row of this.dataProvider.list) {
            row._expanded = this.config.expandAll;
        }
    }
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
            this.selected = this.dataProvider.list.filter((r) => r._selected);
            this.pageSelected = this.pagedData.filter((r) => r._selected);
            this.emitSelected(this.selected);
            // Only show the select all message when there is only one new page selected at a time
            this.selectedPageCount++;
            this.showSelectAllMessage = this.selectedPageCount === 1 && this.selected.length !== this.dataProvider.total;
        }
    }
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
    rowSelectHandler(data) {
        // this.pagedData = this.rows.slice(this.getPageStart(), this.getPageEnd());
        this.pageSelected = this.pagedData.filter((r) => r._selected);
        this.selected = this.dataProvider.list.filter((r) => r._selected);
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
    emitSelected(selected) {
        this.onRowSelect.emit({ length: selected.length, selected });
    }
    rowClickHandler(row) {
        if (this.config.rowSelect) {
            this.activeId = row.id || 0;
            this.onRowClick.emit(row);
        }
    }
    getDefaultOptions(column) {
        // TODO - needs to come from label service - https://github.com/bullhorn/novo-elements/issues/116
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
    onCalenderSelect(column, event) {
        setTimeout(() => {
            if (event.startDate && event.endDate) {
                this.onFilterChange();
            }
        }, 10);
    }
    onFilterKeywords(config) {
        if (config && config.filtering && config.filtering.freetextFilter) {
            const filterKeywords = config.filtering.freetextFilter.toLowerCase();
            if (!config.filtering.originalOptions) {
                config.filtering.originalOptions = config.filtering.options;
            }
            const newOptions = config.filtering.originalOptions.filter((option) => {
                let value = option && option.label ? option.label : option;
                value = value.toLowerCase() ? value.toLowerCase() : value;
                if (value === filterKeywords) {
                    return true;
                }
                else if (~value.indexOf(filterKeywords) || ~value.indexOf(filterKeywords)) {
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
    }
    /**
     * @description Sets the Table into EDIT mode, based on the row/column passed you can enter in a few states
     * (1) setTableEdit() - don't pass any to put the FULL table into edit mode
     * (2) setTableEdit(1) - pass only row to put that FULL row of the table into edit mode
     * (3) setTableEdit(1, 1) - pass row and column to put that column of the row of the table into edit mode
     * @memberOf NovoTableElement
     */
    setTableEdit(rowNumber, columnNumber) {
        this.mode = NovoTableMode.EDIT;
        this._dataProvider.edit();
        this._rows.forEach((row, rowIndex) => {
            row._editing = row._editing || {};
            this.columns.forEach((column, columnIndex) => {
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
    }
    /**
     * @description Leaves edit mode for the Table and puts everything back to VIEW only
     * @memberOf NovoTableElement
     * @param cancel - whether or not to save data or undo
     */
    leaveEditMode(cancel) {
        this.mode = NovoTableMode.VIEW;
        this._rows.forEach((row) => {
            row._editing = row._editing || {};
            this.columns.forEach((column) => {
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
    }
    /**
     * @description Adds a new row into the table to be edited, can be called from a local reference of the table in your template
     * @memberOf NovoTableElement
     */
    addEditableRow(defaultValue = {}) {
        const tableFormRows = this.tableForm.controls['rows'];
        const row = {};
        const rowControls = [];
        row.controls = {};
        row._editing = {};
        row.rowId = this._rows.length + 1;
        this.columns.forEach((column) => {
            // Use the control passed or use a ReadOnlyControl so that the form has the values
            const control = column.editorConfig
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
    }
    /**
     * @description Validates the Form inside of the Table, if there are errors it will display/return the errors for each row.
     * If there are no errors, then it will return ONLY the changed data for each row, the data returned will be in the form:
     * { id: ID_OF_RECORD, key: value } -- data that was updated
     * { id: undefined, key: value } -- data that was added
     * @memberOf NovoTableElement
     */
    validateAndGetUpdatedData() {
        if (this.tableForm && this.tableForm.controls && this.tableForm.controls['rows']) {
            const changedRows = [];
            const errors = [];
            // Go over the FormArray's controls
            this.tableForm.controls['rows'].controls.forEach((formGroup, index) => {
                let changedRow = null;
                let error = null;
                // Go over the form group controls
                Object.keys(formGroup.controls).forEach((key) => {
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
                });
                if (changedRow) {
                    changedRows.push(changedRow);
                }
                if (error) {
                    errors.push({ errors: error, row: this._rows[index], index });
                }
            });
            // Return errors if any, otherwise return the changed rows
            if (errors.length === 0) {
                return { changed: changedRows };
            }
            return { errors };
        }
    }
    /**
     * @description Refresh the data provider and leave edit mode
     * @memberOf NovoTableElement
     */
    cancelEditing() {
        this.leaveEditMode(true);
    }
    /**
     * @description Refresh the data provider and leave edit mode
     * @memberOf NovoTableElement
     */
    saveChanges() {
        this.leaveEditMode(false);
    }
    /**
     * @description Displays a toast message inside of the table
     * @memberOf NovoTableElement
     */
    displayToastMessage(toast, hideDelay) {
        this.loading = false;
        this.toast = toast;
        if (hideDelay) {
            setTimeout(() => this.hideToastMessage(), hideDelay);
        }
    }
    /**
     * @description Force hide the toast message
     * @memberOf NovoTableElement
     */
    hideToastMessage() {
        this.toast = null;
        // Hack to make the table display properly after hiding the toast
        this.grossFlagToAvoidTheTableFromBeingUglyWhenHidingTheToast = true;
        setTimeout(() => {
            this.grossFlagToAvoidTheTableFromBeingUglyWhenHidingTheToast = false;
        });
    }
    /**
     * @description display the loading overlay on the table
     * @memberOf NovoTableElement
     */
    toggleLoading(show) {
        this.loading = show;
    }
    /**
     * @description hide a column in edit or view mode
     * @memberOf NovoTableElement
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
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvVGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQVcsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUE4QixXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEYsU0FBUztBQUNULE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxNQUFNO0FBQ04sT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUErQnpFLCtHQUErRztBQUMvRyxNQUFNLENBQU4sSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ3ZCLGlEQUFRLENBQUE7SUFDUixpREFBUSxDQUFBO0FBQ1YsQ0FBQyxFQUhXLGFBQWEsS0FBYixhQUFhLFFBR3hCO0FBcUxELE1BQU0sT0FBTyxn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QUFFLDZCQUE2QjtvQkFDaEQsNEJBQTRCLEVBQUUsU0FBUztpQkFDeEM7Z0JBQ0Qsa0JBQWtCO2dCQUNsQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5S1A7YUFDSjs7O1lBM05RLGdCQUFnQjtZQUNoQixTQUFTO1lBUm1CLFdBQVc7OzsyQkFvTzdDLFlBQVksU0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO3FCQUdoRCxLQUFLO3NCQUVMLEtBQUs7b0JBRUwsS0FBSztxQ0FFTCxLQUFLO21CQUVMLEtBQUs7dUJBRUwsS0FBSzs0QkFFTCxLQUFLO21CQUVMLEtBQUs7eUJBR0wsTUFBTTswQkFFTixNQUFNOzRCQUVOLE1BQU07bUJBMkJOLEtBQUs7MkJBZ0JMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRG9DaGVjaywgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQXJyYXksIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBWZW5kb3JcbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLy8gQVBQXG5pbXBvcnQgeyBDb2xsZWN0aW9uRXZlbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXByb3ZpZGVyL0NvbGxlY3Rpb25FdmVudCc7XG5pbXBvcnQgeyBQYWdlZEFycmF5Q29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtcHJvdmlkZXIvUGFnZWRBcnJheUNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtLXV0aWxzL0Zvcm1VdGlscyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBub3RpZnkgfSBmcm9tICcuLi8uLi91dGlscy9ub3RpZmllci9ub3RpZmllci51dGlsJztcbmltcG9ydCB7IENvbnRyb2xGYWN0b3J5LCBSZWFkT25seUNvbnRyb2wgfSBmcm9tICcuLy4uL2Zvcm0vRm9ybUNvbnRyb2xzJztcblxuZXhwb3J0IGludGVyZmFjZSBOb3ZvVGFibGVDb25maWcge1xuICAvLyBQYWdpbmcgY29uZmlnXG4gIHBhZ2luZz86IHtcbiAgICBjdXJyZW50OiBudW1iZXI7IC8vIGN1cnJlbnQgcGFnZVxuICAgIGl0ZW1zUGVyUGFnZTogbnVtYmVyOyAvLyBpdGVtcyBwZXIgcGFnZVxuICAgIG9uUGFnZUNoYW5nZTogRnVuY3Rpb247IC8vIGZ1bmN0aW9uIHRvIGhhbmRsZSBwYWdlIGNoYW5naW5nXG4gICAgcm93T3B0aW9ucz86IHsgdmFsdWU6IG51bWJlcjsgbGFiZWw6IHN0cmluZyB9W107IC8vIHBhZ2Ugb3B0aW9uc1xuICAgIGRpc2FibGVQYWdlU2VsZWN0aW9uPzogYm9vbGVhbjsgLy8gZGlzYWJsZXMgdGhlIHBhZ2VzIGZyb20gYmVpbmcgc2VsZWN0ZWRcbiAgfTtcbiAgLy8gRm9vdGVyIGNvbmZpZyAodG90YWwgZm9vdGVyKVxuICBmb290ZXJzPzogQXJyYXk8e1xuICAgIGNvbHVtbnM6IEFycmF5PHN0cmluZz47IC8vIHN0cmluZyBhcnJheSBvZiBjb2x1bW5zIHRvIHRvdGFsXG4gICAgbWV0aG9kOiBzdHJpbmc7IC8vIG1ldGhvZCB0byB1c2UgZm9yIHRoZSBmb290ZXIsIFNVTSB8IEFWRywgZGVmYXVsdHMgdG8gU1VNXG4gICAgbGFiZWxDb2x1bW46IHN0cmluZzsgLy8gY29sdW1uIHRvIHVzZSBhcyB0aGUgXCJ0b3RhbFwiIGxhYmVsXG4gICAgbGFiZWw6IHN0cmluZzsgLy8gbGFiZWwgdG8gdXNlIGluIHRoZSBcInRvdGFsXCIgbGFiZWxcbiAgfT47XG4gIC8vIFRPRE86IFdoZW4gdGhlc2UgdHlwZXMgYXJlIGVuZm9yY2VkIGFzIGBib29sZWFuIHwgRnVuY3Rpb25gLCB0aGVyZSdzIGEgbGludCBlcnJvci4gVGhhdCdzIGEgYnVnLlxuICBmaWx0ZXJpbmc/OiBib29sZWFuIHwgYW55OyAvLyBUdXJuIG9uIGZpbHRlcmluZyBmb3IgdGhlIHRhYmxlLCBib29sZWFuIG9yIGZ1bmN0aW9uIGZvciBmaWx0ZXJpbmcgY2FsbGJhY2tcbiAgc29ydGluZz86IGJvb2xlYW4gfCBhbnk7IC8vIFR1cm4gb24gc29ydGluZyBmb3IgdGhlIHRhYmxlLCBib29sZWFuIG9yIGZ1bmN0aW9uIGZvciBzb3J0aW5nIGNhbGxiYWNrXG4gIG9yZGVyaW5nPzogYm9vbGVhbiB8IEZ1bmN0aW9uOyAvLyBUdXJuIG9uIG9yZGVyaW5nIGZvciB0aGUgdGFibGUsIGJvb2xlYW4gb3IgZnVuY3Rpb24gZm9yIG9yZGVyaW5nIGNhbGxiYWNrXG4gIHJlc2l6aW5nPzogYm9vbGVhbiB8IEZ1bmN0aW9uOyAvLyBUdXJuIG9uIHJlc2l6aW5nIGZvciB0aGUgdGFibGUsIGJvb2xlYW4gb3IgZnVuY3Rpb24gZm9yIHJlc2l6aW5nIGNhbGxiYWNrXG4gIHJvd1NlbGVjdGlvblN0eWxlPzogc3RyaW5nOyAvLyBSb3cgc2VsZWN0aW9uIHN0eWxlLCBjaGVja2JveCBvciByb3dcbiAgcm93U2VsZWN0PzogYm9vbGVhbjsgLy8gVHVybiBvbiByb3cgc2VsZWN0aW9uXG4gIGhhc0RldGFpbHM/OiBib29sZWFuOyAvLyBUdXJuIG9uIGRldGFpbHMgcm93IGZvciB0aGUgdGFibGVcbiAgZGV0YWlsc1JlbmRlcmVyPzogYW55OyAvLyBSZW5kZXJlci9jb21wb25lbnQgZm9yIHRoZSBkZXRhaWxzIHJvd1xuICBleHBhbmRBbGw/OiBib29sZWFuOyAvLyBzaG91bGQgQWxsIFJvd3MgYmUgZXhwYW5kZWQgYnkgZGVmYXVsdFxuICBzZWxlY3RBbGxFbmFibGVkPzogYm9vbGVhbjsgLy8gQWxsb3dzIHRoZSB0YWJsZSwgd2hpbGUgaW4gc2VsZWN0aW9uIG1vZGUgdG8gaGF2ZSBhIHNlbGVjdCBhbGwgYXQgdGhlIHRvcFxufVxuXG4vLyBUT0RPIC0gc3VwcG9ydCAoMSkgY2xpY2tpbmcgY2VsbCB0byBlZGl0LCAoMikgY2xpY2tpbmcgcm93IHRvIGVkaXQsICgzKSBidXR0b24gdG8gdHJpZ2dlciBmdWxsIHRhYmxlIHRvIGVkaXRcbmV4cG9ydCBlbnVtIE5vdm9UYWJsZU1vZGUge1xuICBWSUVXID0gMSxcbiAgRURJVCA9IDIsXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdGFibGUnLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLnRoZW1lXSc6ICd0aGVtZScsXG4gICAgJ1tjbGFzcy5lZGl0aW5nXSc6ICdtb2RlID09PSBOb3ZvVGFibGVNb2RlLkVESVQnLFxuICAgICdbY2xhc3Mubm92by10YWJsZS1sb2FkaW5nXSc6ICdsb2FkaW5nJyxcbiAgfSxcbiAgLy8gZGlyZWN0aXZlczogW10sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoZWFkZXIgKm5nSWY9XCJjb2x1bW5zLmxlbmd0aFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibm92by10YWJsZS1oZWFkZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8bm92by1wYWdpbmF0aW9uICpuZ0lmPVwiY29uZmlnLnBhZ2luZyAmJiAhKGRhdGFQcm92aWRlci5pc0VtcHR5KCkgJiYgIWRhdGFQcm92aWRlci5pc0ZpbHRlcmVkKCkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dPcHRpb25zXT1cImNvbmZpZy5wYWdpbmcucm93T3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZVBhZ2VTZWxlY3Rpb25dPVwiY29uZmlnLnBhZ2luZy5kaXNhYmxlUGFnZVNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKHBhZ2UpXT1cImRhdGFQcm92aWRlci5wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsoaXRlbXNQZXJQYWdlKV09XCJkYXRhUHJvdmlkZXIucGFnZVNpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RvdGFsSXRlbXNdPVwiZGF0YVByb3ZpZGVyLnRvdGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblBhZ2VDaGFuZ2UpPVwib25QYWdlQ2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8L25vdm8tcGFnaW5hdGlvbj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJub3ZvLXRhYmxlLWFjdGlvbnNcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXRhYmxlLWxvYWRpbmctb3ZlcmxheVwiICpuZ0lmPVwibG9hZGluZyB8fCBkYXRhUHJvdmlkZXIuaXNMb2FkaW5nKClcIj5cbiAgICAgICAgICAgIDxub3ZvLWxvYWRpbmc+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bm92by10b2FzdCAqbmdJZj1cInRvYXN0XCIgW3RoZW1lXT1cInRvYXN0Py50aGVtZVwiIFtpY29uXT1cInRvYXN0Py5pY29uXCIgW21lc3NhZ2VdPVwidG9hc3Q/Lm1lc3NhZ2VcIj48L25vdm8tdG9hc3Q+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1jb250YWluZXJcIiAqbmdJZj1cIiFncm9zc0ZsYWdUb0F2b2lkVGhlVGFibGVGcm9tQmVpbmdVZ2x5V2hlbkhpZGluZ1RoZVRvYXN0XCI+XG4gICAgICAgICAgICA8bm92by1mb3JtIGhpZGVIZWFkZXI9XCJ0cnVlXCIgW2Zvcm1dPVwidGFibGVGb3JtXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZCBkYXRhVGFibGVcIiBbY2xhc3MudGFibGUtZGV0YWlsc109XCJjb25maWcuaGFzRGV0YWlsc1wiIHJvbGU9XCJncmlkXCI+XG4gICAgICAgICAgICAgICAgPCEtLSBza2lwU29ydEFuZEZpbHRlckNsZWFyIGlzIGEgaGFjayByaWdodCBub3csIHdpbGwgYmUgcmVtb3ZlZCBvbmNlIENhbnZhcyBpcyByZWZhY3RvcmVkIC0tPlxuICAgICAgICAgICAgICAgIDx0aGVhZCAqbmdJZj1cImNvbHVtbnMubGVuZ3RoICYmICghZGF0YVByb3ZpZGVyLmlzRW1wdHkoKSB8fCBkYXRhUHJvdmlkZXIuaXNGaWx0ZXJlZCgpIHx8IHNraXBTb3J0QW5kRmlsdGVyQ2xlYXIgfHwgZWRpdGluZylcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIHJvbGU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gREVUQUlMUyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInJvdy1hY3Rpb25zXCIgKm5nSWY9XCJjb25maWcuaGFzRGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgaWNvbj1cIm5leHRcIiAoY2xpY2spPVwiZXhwYW5kQWxsT25QYWdlKGNvbmZpZy5leHBhbmRBbGwpXCIgKm5nSWY9XCIhY29uZmlnLmV4cGFuZEFsbFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImV4cGFuZC1hbGxcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIGljb249XCJzb3J0LWRlc2NcIiAoY2xpY2spPVwiZXhwYW5kQWxsT25QYWdlKGNvbmZpZy5leHBhbmRBbGwpXCIgKm5nSWY9XCJjb25maWcuZXhwYW5kQWxsXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiY29sbGFwc2UtYWxsXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBDSEVDS0JPWCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInJvdy1hY3Rpb25zIGNoZWNrYm94IG1hc3MtYWN0aW9uXCIgKm5nSWY9XCJjb25maWcucm93U2VsZWN0aW9uU3R5bGUgPT09ICdjaGVja2JveCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bm92by1jaGVja2JveCBbKG5nTW9kZWwpXT1cIm1hc3RlclwiIFtpbmRldGVybWluYXRlXT1cInBhZ2VTZWxlY3RlZC5sZW5ndGggPiAwICYmIHBhZ2VTZWxlY3RlZC5sZW5ndGggPCBwYWdlZERhdGEubGVuZ3RoXCIgKG5nTW9kZWxDaGFuZ2UpPVwic2VsZWN0UGFnZSgkZXZlbnQpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwic2VsZWN0LWFsbC1jaGVja2JveFwiIFt0b29sdGlwXT1cIm1hc3RlciA/IGxhYmVscy5kZXNlbGVjdEFsbCA6IGxhYmVscy5zZWxlY3RBbGxPblBhZ2VcIiB0b29sdGlwUG9zaXRpb249XCJyaWdodFwiPjwvbm92by1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFRBQkxFIEhFQURFUlMgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW25nQ2xhc3NdPVwieyAnbWFzcy1hY3Rpb24nOiBjb25maWc/LnJvd1NlbGVjdGlvblN0eWxlID09PSAnY2hlY2tib3gnLCAnYWN0aW9ucyc6IGNvbHVtbj8uYWN0aW9ucz8uaXRlbXM/Lmxlbmd0aCA+IDAsICdwcmV2aWV3JzogY29sdW1uPy5uYW1lID09PSAncHJldmlldycgfVwiIFtub3ZvVGhPcmRlcmFibGVdPVwiY29sdW1uXCIgKG9uT3JkZXJDaGFuZ2UpPVwib25PcmRlckNoYW5nZSgkZXZlbnQpXCIgW2hpZGRlbl09XCJpc0NvbHVtbkhpZGRlbihjb2x1bW4pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRoLWdyb3VwXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNvbHVtbi5pZCB8fCBjb2x1bW4ubmFtZVwiICpuZ0lmPVwiIWNvbHVtbi5oaWRlSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gTEFCRUwgJiBTT1JUIEFSUk9XUyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRoLXRpdGxlXCIgW25nQ2xhc3NdPVwiKGNvbmZpZy5zb3J0aW5nICE9PSBmYWxzZSAmJiBjb2x1bW4uc29ydGluZyAhPT0gZmFsc2UpID8gJ3NvcnRhYmxlJyA6ICcnXCIgW25vdm9UaFNvcnRhYmxlXT1cImNvbmZpZ1wiIFtjb2x1bW5dPVwiY29sdW1uXCIgKG9uU29ydENoYW5nZSk9XCJvblNvcnRDaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7IGNvbHVtbi50aXRsZSB8fCBjb2x1bW4ubGFiZWwgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXNvcnQtaWNvbnNcIiB0b29sdGlwUG9zaXRpb249XCJib3R0b21cIiBbdG9vbHRpcF09XCJsYWJlbHMuc29ydFwiIFtuZ0NsYXNzXT1cImNvbHVtbi5zb3J0IHx8ICcnXCIgKm5nSWY9XCJjb25maWcuc29ydGluZyAhPT0gZmFsc2UgJiYgY29sdW1uLnNvcnRpbmcgIT09IGZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktYXJyb3ctdXBcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktYXJyb3ctZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBGSUxURVIgRFJPUC1ET1dOIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bm92by1kcm9wZG93biBzaWRlPVwicmlnaHRcIiAqbmdJZj1cImNvbmZpZy5maWx0ZXJpbmcgIT09IGZhbHNlICYmIGNvbHVtbi5maWx0ZXJpbmcgIT09IGZhbHNlXCIgY2xhc3M9XCJjb2x1bW4tZmlsdGVyc1wiICh0b2dnbGVkKT1cIm9uRHJvcGRvd25Ub2dnbGVkKCRldmVudCwgY29sdW1uLm5hbWUpXCIgcGFyZW50U2Nyb2xsU2VsZWN0b3I9XCIudGFibGUtY29udGFpbmVyXCIgY29udGFpbmVyQ2xhc3M9XCJ0YWJsZS1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGhlbWU9XCJpY29uXCIgaWNvbj1cImZpbHRlclwiIHRvb2x0aXBQb3NpdGlvbj1cImJvdHRvbVwiIFt0b29sdGlwXT1cImxhYmVscy5maWx0ZXJzXCIgW2NsYXNzLmZpbHRlcmVkXT1cImNvbHVtbi5maWx0ZXIgfHwgY29sdW1uLmZpbHRlcj09PWZhbHNlXCIgKGNsaWNrKT1cImZvY3VzSW5wdXQoKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBGSUxURVIgT1BUSU9OUyBMSVNUIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpc3QgKm5nSWY9XCIoY29sdW1uPy5vcHRpb25zPy5sZW5ndGggfHwgY29sdW1uPy5vcmlnaW5hbE9wdGlvbnM/Lmxlbmd0aCkgJiYgY29sdW1uPy50eXBlICE9PSAnZGF0ZScgJiYgdG9nZ2xlZERyb3Bkb3duTWFwW2NvbHVtbi5uYW1lXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiZmlsdGVyLXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBsYWJlbHMuZmlsdGVycyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIGNvbG9yPVwibmVnYXRpdmVcIiBpY29uPVwidGltZXNcIiAoY2xpY2spPVwib25GaWx0ZXJDbGVhcihjb2x1bW4pXCIgKm5nSWY9XCJjb2x1bW4uZmlsdGVyIHx8IGNvbHVtbi5maWx0ZXI9PT1mYWxzZVwiPnt7IGxhYmVscy5jbGVhciB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKm5nSWY9XCIhIWNvbHVtbi5hbGxvd0N1c3RvbVRleHRPcHRpb25cIiBbYXR0ci5pZF09XCJjb2x1bW4ubmFtZSArICctaW5wdXQnXCIgW25vdm9UYWJsZUZpbHRlcl09XCJjb2x1bW5cIiAob25GaWx0ZXJDaGFuZ2UpPVwib25GaWx0ZXJLZXl3b3JkcygkZXZlbnQpXCIgWyhuZ01vZGVsKV09XCJjb2x1bW4uZnJlZXRleHRGaWx0ZXJcIiBrZWVwRmlsdGVyRm9jdXNlZCAjZmlsdGVySW5wdXQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbSBbbmdDbGFzc109XCJ7IGFjdGl2ZTogaXNGaWx0ZXJBY3RpdmUoY29sdW1uLCBvcHRpb24pIH1cIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbHVtbi5vcHRpb25zXCIgKGNsaWNrKT1cIm9uRmlsdGVyQ2xpY2soY29sdW1uLCBvcHRpb24pXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImdldE9wdGlvbkRhdGFBdXRvbWF0aW9uSWQob3B0aW9uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBvcHRpb24/LmxhYmVsIHx8IG9wdGlvbiB9fTwvc3Bhbj4gPGkgY2xhc3M9XCJiaGktY2hlY2tcIiAqbmdJZj1cImlzRmlsdGVyQWN0aXZlKGNvbHVtbiwgb3B0aW9uKVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEZJTFRFUiBTRUFSQ0ggSU5QVVQgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlzdCAqbmdJZj1cIiEoY29sdW1uPy5vcHRpb25zPy5sZW5ndGggfHwgY29sdW1uPy5vcmlnaW5hbE9wdGlvbnM/Lmxlbmd0aCkgJiYgdG9nZ2xlZERyb3Bkb3duTWFwW2NvbHVtbi5uYW1lXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiZmlsdGVyLXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBsYWJlbHMuZmlsdGVycyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIGNvbG9yPVwibmVnYXRpdmVcIiBpY29uPVwidGltZXNcIiAoY2xpY2spPVwib25GaWx0ZXJDbGVhcihjb2x1bW4pXCIgKm5nSWY9XCJjb2x1bW4uZmlsdGVyXCI+e3sgbGFiZWxzLmNsZWFyIH19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbYXR0ci5pZF09XCJjb2x1bW4ubmFtZSArICctaW5wdXQnXCIgW25vdm9UYWJsZUZpbHRlcl09XCJjb2x1bW5cIiAob25GaWx0ZXJDaGFuZ2UpPVwib25GaWx0ZXJDaGFuZ2UoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwiY29sdW1uLmZpbHRlclwiIGtlZXBGaWx0ZXJGb2N1c2VkICNmaWx0ZXJJbnB1dC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBGSUxURVIgREFURSBPUFRJT05TIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpc3QgKm5nSWY9XCJjb2x1bW4/Lm9wdGlvbnM/Lmxlbmd0aCAmJiBjb2x1bW4/LnR5cGUgPT09ICdkYXRlJyAmJiB0b2dnbGVkRHJvcGRvd25NYXBbY29sdW1uLm5hbWVdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0gY2xhc3M9XCJmaWx0ZXItc2VhcmNoXCIgKm5nSWY9XCIhY29sdW1uLmNhbGVuZGVyU2hvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBsYWJlbHMuZmlsdGVycyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIGNvbG9yPVwibmVnYXRpdmVcIiBpY29uPVwidGltZXNcIiAoY2xpY2spPVwib25GaWx0ZXJDbGVhcihjb2x1bW4pXCIgKm5nSWY9XCJjb2x1bW4uZmlsdGVyXCI+e3sgbGFiZWxzLmNsZWFyIH19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbSBbbmdDbGFzc109XCJ7IGFjdGl2ZTogaXNGaWx0ZXJBY3RpdmUoY29sdW1uLCBvcHRpb24pIH1cIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbHVtbi5vcHRpb25zXCIgKGNsaWNrKT1cIm9uRmlsdGVyQ2xpY2soY29sdW1uLCBvcHRpb24pXCIgW2tlZXBPcGVuXT1cIm9wdGlvbi5yYW5nZVwiIFtoaWRkZW5dPVwiY29sdW1uLmNhbGVuZGVyU2hvd1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCIob3B0aW9uPy5sYWJlbCB8fCBvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uIH19IDxpIGNsYXNzPVwiYmhpLWNoZWNrXCIgKm5nSWY9XCJpc0ZpbHRlckFjdGl2ZShjb2x1bW4sIG9wdGlvbilcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1jb250YWluZXJcIiBbaGlkZGVuXT1cIiFjb2x1bW4uY2FsZW5kZXJTaG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKGNsaWNrKT1cImNvbHVtbi5jYWxlbmRlclNob3c9ZmFsc2VcIj48aSBjbGFzcz1cImJoaS1wcmV2aW91c1wiPjwvaT57eyBsYWJlbHMuYmFja1RvUHJlc2V0RmlsdGVycyB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bm92by1kYXRlLXBpY2tlciAjcmFuZ2VQaWNrZXIgKG9uU2VsZWN0KT1cIm9uQ2FsZW5kZXJTZWxlY3QoY29sdW1uLCAkZXZlbnQpXCIgWyhuZ01vZGVsKV09XCJjb2x1bW4uZmlsdGVyXCIgcmFuZ2U9XCJ0cnVlXCI+PC9ub3ZvLWRhdGUtcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25vdm8tZHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPCEtLSBUQUJMRSBEQVRBIC0tPlxuICAgICAgICAgICAgICAgIDx0Ym9keSAqbmdJZj1cIiFkYXRhUHJvdmlkZXIuaXNFbXB0eSgpIHx8IGVkaXRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidGFibGUtc2VsZWN0aW9uLXJvd1wiICpuZ0lmPVwiY29uZmlnLnJvd1NlbGVjdGlvblN0eWxlID09PSAnY2hlY2tib3gnICYmIHNob3dTZWxlY3RBbGxNZXNzYWdlICYmIGNvbmZpZy5zZWxlY3RBbGxFbmFibGVkXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwidGFibGUtc2VsZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsYWJlbHMuc2VsZWN0ZWRSZWNvcmRzKHNlbGVjdGVkLmxlbmd0aCl9fSA8YSAoY2xpY2spPVwic2VsZWN0QWxsKHRydWUpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiYWxsLW1hdGNoaW5nLXJlY29yZHNcIj57e2xhYmVscy50b3RhbFJlY29yZHMoZGF0YVByb3ZpZGVyLnRvdGFsKX19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1yb3c9XCIkaW1wbGljaXRcIiBsZXQtaT1cImluZGV4XCIgW25nRm9yT2ZdPVwicm93c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidGFibGUtcm93XCIgW25nQ2xhc3NdPVwicm93LmN1c3RvbUNsYXNzIHx8ICcnXCIgW2lkXT1cIm5hbWUgKyAnLScgKyByb3dbcm93SWRlbnRpZmllcl1cIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwicm93LmlkXCIgKGNsaWNrKT1cInJvd0NsaWNrSGFuZGxlcihyb3cpXCIgW2NsYXNzLmFjdGl2ZV09XCJyb3cuaWQgPT09IGFjdGl2ZUlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicm93LWFjdGlvbnNcIiAqbmdJZj1cImNvbmZpZy5oYXNEZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgaWNvbj1cIm5leHRcIiAoY2xpY2spPVwicm93Ll9leHBhbmRlZD0hcm93Ll9leHBhbmRlZFwiICpuZ0lmPVwiIXJvdy5fZXhwYW5kZWRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwic29ydC1kZXNjXCIgKGNsaWNrKT1cInJvdy5fZXhwYW5kZWQ9IXJvdy5fZXhwYW5kZWRcIiAqbmdJZj1cInJvdy5fZXhwYW5kZWRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJvdy1hY3Rpb25zIGNoZWNrYm94XCIgKm5nSWY9XCJjb25maWcucm93U2VsZWN0aW9uU3R5bGUgPT09ICdjaGVja2JveCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tY2hlY2tib3ggWyhuZ01vZGVsKV09XCJyb3cuX3NlbGVjdGVkXCIgKG5nTW9kZWxDaGFuZ2UpPVwicm93U2VsZWN0SGFuZGxlcihyb3cpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwic2VsZWN0LXJvdy1jaGVja2JveFwiPjwvbm92by1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY29sdW1uLmlkIHx8IGNvbHVtbi5uYW1lXCIgW2NsYXNzLm5vdm8tZm9ybS1yb3ddPVwiZWRpdGFibGVcIiBbaGlkZGVuXT1cImlzQ29sdW1uSGlkZGVuKGNvbHVtbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tdGFibGUtY2VsbCAqbmdJZj1cInJvdy5fZWRpdGluZyAmJiAhcm93Ll9lZGl0aW5nW2NvbHVtbi5uYW1lXVwiIFtoYXNFZGl0b3JdPVwiZWRpdGFibGVcIiBbY29sdW1uXT1cImNvbHVtblwiIFtyb3ddPVwicm93XCIgW2Zvcm1dPVwiZ2V0Um93Q29udHJvbEZvcm0oaSlcIj48L25vdm8tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tY29udHJvbCAqbmdJZj1cInJvdy5fZWRpdGluZyAmJiByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdXCIgY29uZGVuc2VkPVwidHJ1ZVwiIFtmb3JtXT1cImdldFJvd0NvbnRyb2xGb3JtKGkpXCIgW2NvbnRyb2xdPVwicm93LmNvbnRyb2xzW2NvbHVtbi5uYW1lXVwiPjwvbm92by1jb250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwiZGV0YWlscy1yb3dcIiAqbmdJZj1cImNvbmZpZy5oYXNEZXRhaWxzXCIgW2hpZGRlbl09XCIhcm93Ll9leHBhbmRlZFwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZGV0YWlscy1yb3ctJytyb3cuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyb3ctYWN0aW9uc1wiPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIFthdHRyLmNvbHNwYW5dPVwiY29uZmlnLnJvd1NlbGVjdGlvblN0eWxlID09PSAnY2hlY2tib3gnID8gKGNvbHVtbnMubGVuZ3RoICsgMSkgOiBjb2x1bW5zLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bm92by1yb3ctZGV0YWlscyBbZGF0YV09XCJyb3dcIiBbcmVuZGVyZXJdPVwiY29uZmlnLmRldGFpbHNSZW5kZXJlclwiPjwvbm92by1yb3ctZGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwhLS0gTk8gVEFCTEUgREFUQSBQTEFDRUhPTERFUiAtLT5cbiAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3M9XCJ0YWJsZS1tZXNzYWdlXCIgKm5nSWY9XCJkYXRhUHJvdmlkZXIuaXNFbXB0eSgpICYmICFkYXRhUHJvdmlkZXIuaXNGaWx0ZXJlZCgpICYmICFlZGl0aW5nXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiZW1wdHktdGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAjZW1wdHltZXNzYWdlPjxuZy1jb250ZW50IHNlbGVjdD1cIlt0YWJsZS1lbXB0eS1tZXNzYWdlXVwiPjwvbmctY29udGVudD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtZW1wdHktbWVzc2FnZVwiICpuZ0lmPVwiZW1wdHltZXNzYWdlLmNoaWxkTm9kZXMubGVuZ3RoID09IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpIGNsYXNzPVwiYmhpLXNlYXJjaC1xdWVzdGlvblwiPjwvaT4ge3sgbGFiZWxzLmVtcHR5VGFibGVNZXNzYWdlIH19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8IS0tIE5PIE1BVENISU5HIFJFQ09SRFMgLS0+XG4gICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzPVwidGFibGUtbWVzc2FnZVwiICpuZ0lmPVwiZGF0YVByb3ZpZGVyLmlzRW1wdHkoKSAmJiBkYXRhUHJvdmlkZXIuaXNGaWx0ZXJlZCgpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiZW1wdHktdGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAjbm9tYXRjaG1lc3NhZ2U+PG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RhYmxlLW5vLW1hdGNoaW5nLXJlY29yZHMtbWVzc2FnZV1cIj48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vLW1hdGNoaW5nLXJlY29yZHNcIiAqbmdJZj1cIm5vbWF0Y2htZXNzYWdlLmNoaWxkTm9kZXMubGVuZ3RoID09IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpIGNsYXNzPVwiYmhpLXNlYXJjaC1xdWVzdGlvblwiPjwvaT4ge3sgbGFiZWxzLm5vTWF0Y2hpbmdSZWNvcmRzTWVzc2FnZSB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPCEtLSBUQUJMRSBEQVRBIEVSUk9SIFBMQUNFSE9MREVSIC0tPlxuICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cInRhYmxlLW1lc3NhZ2VcIiAqbmdJZj1cImRhdGFQcm92aWRlci5oYXNFcnJvcnMoKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInRhYmxlLWVycm9yc1wiPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICNlcnJvcm1lc3NhZ2U+PG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RhYmxlLWVycm9yLW1lc3NhZ2VdXCI+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1lcnJvci1tZXNzYWdlXCIgKm5nSWY9XCJlcnJvcm1lc3NhZ2UuY2hpbGROb2Rlcy5sZW5ndGggPT0gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PGkgY2xhc3M9XCJiaGktY2F1dGlvblwiPjwvaT4ge3sgbGFiZWxzLmVycm9yZWRUYWJsZU1lc3NhZ2UgfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDx0Zm9vdCAqbmdJZj1cIiFjb25maWcuZm9vdGVyc1wiIFtuZ0NsYXNzXT1cImRhdGFQcm92aWRlci5sZW5ndGggJSAyID09IDAgPyAnb2RkJyA6ICdldmVuJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJub3ZvLXRhYmxlLWZvb3RlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Zm9vdD5cbiAgICAgICAgICAgICAgICA8dGZvb3QgKm5nRm9yPVwibGV0IGZvb3RlciBvZiBmb290ZXJzO2xldCBpID0gaW5kZXg7XCIgY2xhc3M9XCJub3ZvLXRhYmxlLXRvdGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIihjb2x1bW4uaWQgfHwgY29sdW1uLm5hbWUpICsgJy10b3RhbC0nICsgaVwiPnt7IGZvb3Rlcltjb2x1bW4ubmFtZV0gfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGZvb3Q+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L25vdm8tZm9ybT5cbiAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGFibGVFbGVtZW50IGltcGxlbWVudHMgRG9DaGVjayB7XG4gIEBWaWV3Q2hpbGRyZW4oJ2ZpbHRlcklucHV0JywgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIGZpbHRlcklucHV0czogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gIEBJbnB1dCgpXG4gIGNvbmZpZzogTm92b1RhYmxlQ29uZmlnID0ge307XG4gIEBJbnB1dCgpXG4gIGNvbHVtbnM6IEFycmF5PGFueT47XG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNraXBTb3J0QW5kRmlsdGVyQ2xlYXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgbW9kZTogTm92b1RhYmxlTW9kZSA9IE5vdm9UYWJsZU1vZGUuVklFVztcbiAgQElucHV0KClcbiAgZWRpdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgcm93SWRlbnRpZmllcjogc3RyaW5nID0gJ2lkJztcbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nID0gJ3RhYmxlJztcblxuICBAT3V0cHV0KClcbiAgb25Sb3dDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBvblJvd1NlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBvblRhYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBfZGF0YVByb3ZpZGVyOiBQYWdlZEFycmF5Q29sbGVjdGlvbjxhbnk+O1xuICBfcm93czogQXJyYXk8YW55PiA9IFtdO1xuICBzZWxlY3RlZDogQXJyYXk8YW55PiA9IFtdO1xuICBhY3RpdmVJZDogbnVtYmVyID0gMDtcbiAgbWFzdGVyOiBib29sZWFuID0gZmFsc2U7XG4gIGV4cGFuZEFsbDogYm9vbGVhbiA9IGZhbHNlO1xuICBpbmRldGVybWluYXRlOiBib29sZWFuID0gZmFsc2U7XG4gIGxhc3RQYWdlOiBudW1iZXIgPSAwO1xuICBzZWxlY3RlZFBhZ2VDb3VudDogbnVtYmVyID0gMDtcbiAgc2hvd1NlbGVjdEFsbE1lc3NhZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY3VycmVudFNvcnRDb2x1bW46IGFueTtcbiAgcGFnZWREYXRhOiBBcnJheTxhbnk+ID0gW107XG4gIHBhZ2VTZWxlY3RlZDogYW55O1xuICAvLyBNYXAgdG8ga2VlcCB0cmFjayBvZiB3aGF0IGRyb3Bkb3ducyBhcmUgdG9nZ2xlZFxuICAvLyBVc2VkIHRvIHByb3Blcmx5ICpuZ0lmIHRoZSA8bGlzdD4gc28gdGhhdCB0aGUga2VlcEZpbHRlckZvY3VzZWQgRGlyZWN0aXZlXG4gIC8vIHdpbGwgcHJvcGVybHkgZmlyZSB0aGUgbmdBZnRlclZpZXdJbml0IGV2ZW50XG4gIHRvZ2dsZWREcm9wZG93bk1hcDogYW55ID0ge307XG4gIHB1YmxpYyBOb3ZvVGFibGVNb2RlID0gTm92b1RhYmxlTW9kZTtcbiAgcHVibGljIHRhYmxlRm9ybTogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7fSk7XG4gIHB1YmxpYyB0b2FzdDogeyB0aGVtZTogc3RyaW5nOyBpY29uOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9O1xuICBwdWJsaWMgZm9vdGVycyA9IFtdO1xuICBwdWJsaWMgZ3Jvc3NGbGFnVG9Bdm9pZFRoZVRhYmxlRnJvbUJlaW5nVWdseVdoZW5IaWRpbmdUaGVUb2FzdDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCByb3dzKHJvd3M6IEFycmF5PGFueT4pIHtcbiAgICB0aGlzLmRhdGFQcm92aWRlciA9IHJvd3M7XG4gICAgaWYgKHJvd3MgJiYgcm93cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldHVwQ29sdW1uRGVmYXVsdHMoKTtcbiAgICB9XG4gICAgLy8gdGhpcyBpcyBhIHRlbXBvcmFyeS9oYWNreSBmaXggdW50aWwgYXN5bmMgZGF0YWxvYWRpbmcgaXMgaGFuZGxlZCB3aXRoaW4gdGhlIHRhYmxlXG4gICAgaWYgKCF0aGlzLnNraXBTb3J0QW5kRmlsdGVyQ2xlYXIpIHtcbiAgICAgIHRoaXMuY2xlYXJBbGxTb3J0QW5kRmlsdGVycygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCByb3dzKCkge1xuICAgIHJldHVybiB0aGlzLl9yb3dzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRhdGFQcm92aWRlcihkcDogYW55KSB7XG4gICAgdGhpcy5fZGF0YVByb3ZpZGVyID0gQXJyYXkuaXNBcnJheShkcCkgPyBuZXcgUGFnZWRBcnJheUNvbGxlY3Rpb248YW55PihkcCkgOiBkcDtcbiAgICB0aGlzLl9kYXRhUHJvdmlkZXIuZGF0YUNoYW5nZS5waXBlKGRlYm91bmNlVGltZSgxMDApKS5zdWJzY3JpYmUoKGV2ZW50OiBDb2xsZWN0aW9uRXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICBjYXNlIENvbGxlY3Rpb25FdmVudC5DSEFOR0U6XG4gICAgICAgICAgdGhpcy5fcm93cyA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgLy8gU2V0dXAgZm9ybVxuICAgICAgICAgIHRoaXMudGFibGVGb3JtID0gdGhpcy5idWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIHJvd3M6IHRoaXMuYnVpbGRlci5hcnJheShbXSksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gUmVtb3ZlIGFsbCBzZWxlY3Rpb24gb24gc29ydCBjaGFuZ2UgaWYgc2VsZWN0aW9uIGlzIG9uXG4gICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJvd1NlbGVjdGlvblN0eWxlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VkRGF0YSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICB0aGlzLnBhZ2VTZWxlY3RlZCA9IHRoaXMucGFnZWREYXRhLmZpbHRlcigocikgPT4gci5fc2VsZWN0ZWQpO1xuICAgICAgICAgICAgdGhpcy5yb3dTZWxlY3RIYW5kbGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEZpbmQgdGhhdCBjb2x1bW5zIHdlIG1pZ2h0IG5lZWQgdG8gc3VtIHVwIHZpYSB0aGUgZm9vdGVyXG4gICAgICAgICAgbGV0IGNvbHVtbnNUb1N1bSA9IFtdO1xuICAgICAgICAgIGNvbnN0IGNvbHVtblN1bXMgPSB7fTtcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcuZm9vdGVycykge1xuICAgICAgICAgICAgdGhpcy5jb25maWcuZm9vdGVycy5mb3JFYWNoKChjb25maWcpID0+IHtcbiAgICAgICAgICAgICAgY29sdW1uc1RvU3VtLnB1c2goLi4uY29uZmlnLmNvbHVtbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBPbmx5IGhhdmUgdW5pcXVlIGNvbHVtbnMsIGZpbHRlciBvdXQgZHVwbGljYXRlc1xuICAgICAgICAgICAgY29sdW1uc1RvU3VtID0gY29sdW1uc1RvU3VtLmZpbHRlcigoaXRlbSwgaW5kZXgsIGFycmF5KSA9PiBhcnJheS5pbmRleE9mKGl0ZW0pID09PSBpbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIE1ha2UgYSBmb3JtIGZvciBlYWNoIHJvd1xuICAgICAgICAgIGNvbnN0IHRhYmxlRm9ybVJvd3MgPSA8Rm9ybUFycmF5PnRoaXMudGFibGVGb3JtLmNvbnRyb2xzWydyb3dzJ107XG4gICAgICAgICAgdGhpcy5fcm93cy5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250cm9scyA9IFtdO1xuICAgICAgICAgICAgcm93LmNvbnRyb2xzID0ge307XG4gICAgICAgICAgICByb3cuX2VkaXRpbmcgPSB7fTtcbiAgICAgICAgICAgIHJvdy5fZXhwYW5kZWQgPSB0aGlzLmNvbmZpZy5leHBhbmRBbGw7XG4gICAgICAgICAgICByb3cucm93SWQgPSB0aGlzLl9yb3dzLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgICAgICAgLy8gVXNlIHRoZSBjb250cm9sIHBhc3NlZCBvciB1c2UgYSBSZWFkT25seUNvbnRyb2wgc28gdGhhdCB0aGUgZm9ybSBoYXMgdGhlIHZhbHVlc1xuICAgICAgICAgICAgICBjb25zdCBjb250cm9sID0gY29sdW1uLmVkaXRvckNvbmZpZ1xuICAgICAgICAgICAgICAgID8gQ29udHJvbEZhY3RvcnkuY3JlYXRlKGNvbHVtbi5lZGl0b3JUeXBlLCBjb2x1bW4uZWRpdG9yQ29uZmlnKVxuICAgICAgICAgICAgICAgIDogbmV3IFJlYWRPbmx5Q29udHJvbCh7IGtleTogY29sdW1uLm5hbWUgfSk7XG4gICAgICAgICAgICAgIHJvdy5jb250cm9sc1tjb2x1bW4ubmFtZV0gPSBjb250cm9sO1xuICAgICAgICAgICAgICByb3dDb250cm9scy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmZvcm1VdGlscy5zZXRJbml0aWFsVmFsdWVzKHJvd0NvbnRyb2xzLCByb3csIGZhbHNlKTtcbiAgICAgICAgICAgIHRhYmxlRm9ybVJvd3MucHVzaCh0aGlzLmZvcm1VdGlscy50b0Zvcm1Hcm91cChyb3dDb250cm9scykpO1xuICAgICAgICAgICAgLy8gU2V0dXAgdGhlIHRvdGFsIGZvb3RlciBpZiBjb25maWd1cmVkXG4gICAgICAgICAgICAvLyBBcnJheSBvZiBrZXlzIHRvIHRvdGFsXG4gICAgICAgICAgICBpZiAoY29sdW1uc1RvU3VtLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICBjb2x1bW5zVG9TdW0uZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEhlbHBlcnMuaXNCbGFuayhjb2x1bW5TdW1zW2NvbHVtbl0pKSB7XG4gICAgICAgICAgICAgICAgICBjb2x1bW5TdW1zW2NvbHVtbl0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb2x1bW5TdW1zW2NvbHVtbl0gKz0gcm93W2NvbHVtbl07XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICh0aGlzLm1vZGUgPT09IE5vdm9UYWJsZU1vZGUuRURJVCkge1xuICAgICAgICAgICAgdGhpcy5zZXRUYWJsZUVkaXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gU2V0dXAgdGhlIGZvb3RlcnMgKGlmIGFueSlcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcuZm9vdGVycykge1xuICAgICAgICAgICAgdGhpcy5mb290ZXJzID0gW107XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5mb290ZXJzLmZvckVhY2goKGZvb3RlckNvbmZpZywgZm9vdGVyQ29uZmlnSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZm9vdGVyID0ge307XG4gICAgICAgICAgICAgIGZvb3Rlcltmb290ZXJDb25maWcubGFiZWxDb2x1bW5dID0gZm9vdGVyQ29uZmlnLmxhYmVsO1xuICAgICAgICAgICAgICBmb290ZXJDb25maWcuY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZm9vdGVyQ29uZmlnLm1ldGhvZCA9PT0gJ0FWRycgJiYgdGhpcy5fcm93cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgIGZvb3Rlcltjb2x1bW5dID0gY29sdW1uU3Vtc1tjb2x1bW5dIC8gdGhpcy5fcm93cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGZvb3Rlcltjb2x1bW5dID0gY29sdW1uU3Vtc1tjb2x1bW5dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHRoaXMuZm9vdGVycy5wdXNoKGZvb3Rlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuY29uZmlnLnBhZ2luZykge1xuICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLnBhZ2UgPSB0aGlzLmNvbmZpZy5wYWdpbmcuY3VycmVudDtcbiAgICAgIHRoaXMuX2RhdGFQcm92aWRlci5wYWdlU2l6ZSA9IHRoaXMuY29uZmlnLnBhZ2luZy5pdGVtc1BlclBhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFBhZ2luZyB0dXJuZWQgb2ZmLCByZXR1cm4gYmFzaWNhbGx5IGFsbCBvZiB0aGUgZGF0YVxuICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLnBhZ2UgPSAxO1xuICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLnBhZ2VTaXplID0gNTAwO1xuICAgIH1cbiAgICBpZiAoZHAgJiYgZHAubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXR1cENvbHVtbkRlZmF1bHRzKCk7XG4gICAgfVxuICAgIHRoaXMuX2RhdGFQcm92aWRlci5yZWZyZXNoKCk7XG4gIH1cbiAgZ2V0IGRhdGFQcm92aWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVByb3ZpZGVyO1xuICB9XG5cbiAgZ2V0IGVkaXRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gTm92b1RhYmxlTW9kZS5FRElUO1xuICB9XG5cbiAgZ2V0IGZvcm1WYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy50YWJsZUZvcm0udmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIGZvcm1VdGlsczogRm9ybVV0aWxzLCBwcml2YXRlIGJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG4gICAgbm90aWZ5KCdbRGVwcmVjYXRlZF06IFRoZSB0YWJsZSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgbWlncmF0ZSB0byBub3ZvLWRhdGEtdGFibGVzIScpO1xuICB9XG5cbiAgb25Ecm9wZG93blRvZ2dsZWQoZXZlbnQsIGNvbHVtbik6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlZERyb3Bkb3duTWFwW2NvbHVtbl0gPSBldmVudDtcbiAgfVxuXG4gIGZvY3VzSW5wdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmlsdGVySW5wdXRzICYmIHRoaXMuZmlsdGVySW5wdXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5maWx0ZXJJbnB1dHMuZm9yRWFjaCgoZmlsdGVySW5wdXQpID0+IHtcbiAgICAgICAgaWYgKGZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSwgMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uUGFnZUNoYW5nZShldmVudCkge1xuICAgIC8vIHRoaXMuZGF0YVByb3ZpZGVyLnBhZ2UgPSBldmVudC5wYWdlO1xuICAgIC8vIHRoaXMuZGF0YVByb3ZpZGVyLnBhZ2VTaXplID0gZXZlbnQuaXRlbXNQZXJQYWdlO1xuICB9XG5cbiAgZ2V0T3B0aW9uRGF0YUF1dG9tYXRpb25JZChvcHRpb24pIHtcbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayhvcHRpb24udmFsdWUpKSB7XG4gICAgICByZXR1cm4gb3B0aW9uLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uO1xuICB9XG5cbiAgc2V0dXBDb2x1bW5EZWZhdWx0cygpIHtcbiAgICAvLyBDaGVjayBjb2x1bW5zIGZvciBjZWxsIG9wdGlvbiB0eXBlc1xuICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgIGlmIChjb2x1bW4gJiYgY29sdW1uLnR5cGUpIHtcbiAgICAgICAgc3dpdGNoIChjb2x1bW4udHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgICAgLy8gU2V0IG9wdGlvbnMgYmFzZWQgb24gZGF0ZXMgaWYgdGhlcmUgYXJlIG5vbmVcbiAgICAgICAgICAgIGNvbHVtbi5vcHRpb25zID0gY29sdW1uLm9wdGlvbnMgfHwgdGhpcy5nZXREZWZhdWx0T3B0aW9ucyhjb2x1bW4pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnBhZ2luZyAmJiB0aGlzLmNvbmZpZy5wYWdpbmcuY3VycmVudCAhPT0gdGhpcy5sYXN0UGFnZSkge1xuICAgICAgdGhpcy5yb3dTZWxlY3RIYW5kbGVyKCk7XG4gICAgICB0aGlzLnNob3dTZWxlY3RBbGxNZXNzYWdlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMubGFzdFBhZ2UgPSB0aGlzLmNvbmZpZy5wYWdpbmcgPyB0aGlzLmNvbmZpZy5wYWdpbmcuY3VycmVudCA6IDE7XG4gIH1cblxuICBnZXRQYWdlU3RhcnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcucGFnaW5nID8gKHRoaXMuZGF0YVByb3ZpZGVyLnBhZ2UgLSAxKSAqIHRoaXMuZGF0YVByb3ZpZGVyLnBhZ2VTaXplIDogMDtcbiAgfVxuXG4gIGdldFBhZ2VFbmQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcucGFnaW5nICYmIHRoaXMuZGF0YVByb3ZpZGVyLnBhZ2VTaXplID4gLTEgPyB0aGlzLmdldFBhZ2VTdGFydCgpICsgdGhpcy5kYXRhUHJvdmlkZXIucGFnZVNpemUgOiB0aGlzLnJvd3MubGVuZ3RoO1xuICB9XG5cbiAgZ2V0Um93Q29udHJvbEZvcm0oaSk6IEFic3RyYWN0Q29udHJvbCB7XG4gICAgY29uc3QgdGFibGVGb3JtUm93cyA9IDxGb3JtQXJyYXk+dGhpcy50YWJsZUZvcm0uY29udHJvbHNbJ3Jvd3MnXTtcbiAgICByZXR1cm4gdGFibGVGb3JtUm93cy5jb250cm9sc1tpXTtcbiAgfVxuXG4gIG9uRmlsdGVyQ2xpY2soY29sdW1uLCBmaWx0ZXIpIHtcbiAgICBpZiAoZmlsdGVyLnJhbmdlICYmICFjb2x1bW4uY2FsZW5kYXJTaG93KSB7XG4gICAgICBjb2x1bW4uY2FsZW5kZXJTaG93ID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29sdW1uLmZpbHRlcikgJiYgY29sdW1uLm11bHRpcGxlKSB7XG4gICAgICBpZiAofmNvbHVtbi5maWx0ZXIuaW5kZXhPZihmaWx0ZXIpKSB7XG4gICAgICAgIC8vIFJlbW92ZSBmaWx0ZXJcbiAgICAgICAgY29sdW1uLmZpbHRlci5zcGxpY2UoY29sdW1uLmZpbHRlci5pbmRleE9mKGZpbHRlciksIDEpO1xuICAgICAgICBpZiAoZmlsdGVyLnJhbmdlKSB7XG4gICAgICAgICAgY29sdW1uLmNhbGVuZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29sdW1uLmZpbHRlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFkZCBmaWx0ZXJcbiAgICAgICAgY29sdW1uLmZpbHRlci5wdXNoKGZpbHRlcik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb2x1bW4ubXVsdGlwbGUpIHtcbiAgICAgIGNvbHVtbi5maWx0ZXIgPSBuZXcgQXJyYXkoKTtcbiAgICAgIGNvbHVtbi5maWx0ZXIucHVzaChIZWxwZXJzLmlzQmxhbmsoZmlsdGVyLnZhbHVlKSA/IGZpbHRlciA6IGZpbHRlci52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbHVtbi5maWx0ZXIgPSBIZWxwZXJzLmlzQmxhbmsoZmlsdGVyLnZhbHVlKSA/IGZpbHRlciA6IGZpbHRlci52YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5vbkZpbHRlckNoYW5nZSgpO1xuICB9XG5cbiAgb25GaWx0ZXJDbGVhcihjb2x1bW46IGFueSk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29sdW1uLmZpbHRlciA9IG51bGw7XG4gICAgICBjb2x1bW4uZnJlZXRleHRGaWx0ZXIgPSBudWxsO1xuICAgICAgdGhpcy5vbkZpbHRlckNoYW5nZSgpO1xuICAgICAgaWYgKGNvbHVtbi5vcmlnaW5hbE9wdGlvbnMpIHtcbiAgICAgICAgY29sdW1uLm9wdGlvbnMgPSBjb2x1bW4ub3JpZ2luYWxPcHRpb25zO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xlYXJBbGxTb3J0QW5kRmlsdGVycygpIHtcbiAgICBpZiAodGhpcy5jb25maWcuZmlsdGVyaW5nKSB7XG4gICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIGNvbHVtbi5maWx0ZXIgPSBudWxsO1xuICAgICAgICBjb2x1bW4uc29ydCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgbWV0aG9kIHVwZGF0ZXMgdGhlIHJvdyBkYXRhIHRvIHJlZmxlY3QgdGhlIGFjdGl2ZSBmaWx0ZXJzLlxuICAgKi9cbiAgb25GaWx0ZXJDaGFuZ2UoZXZlbnQ/OiBFdmVudCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXJpbmcpIHtcbiAgICAgIC8vIEFycmF5IG9mIGZpbHRlcnNcbiAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2wpID0+ICFIZWxwZXJzLmlzRW1wdHkoY29sLmZpbHRlcikpO1xuICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBxdWVyeSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBmaWx0ZXJzKSB7XG4gICAgICAgICAgaWYgKEhlbHBlcnMuaXNGdW5jdGlvbihjb2x1bW4ubWF0Y2gpKSB7XG4gICAgICAgICAgICBxdWVyeVtjb2x1bW4ubmFtZV0gPSAodmFsdWUsIHJlY29yZCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gY29sdW1uLm1hdGNoKHJlY29yZCwgY29sdW1uLmZpbHRlcik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29sdW1uLnByZUZpbHRlciAmJiBIZWxwZXJzLmlzRnVuY3Rpb24oY29sdW1uLnByZUZpbHRlcikpIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gT2JqZWN0LmFzc2lnbih7fSwgcXVlcnksIGNvbHVtbi5wcmVGaWx0ZXIodGhpcy5lc2NhcGVDaGFyYWN0ZXJzKGNvbHVtbi5maWx0ZXIpKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbHVtbi5maWx0ZXIpKSB7XG4gICAgICAgICAgICAvLyBUaGUgZmlsdGVycyBhcmUgYW4gYXJyYXkgKG11bHRpLXNlbGVjdCksIGNoZWNrIHZhbHVlXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IGNvbHVtbi5maWx0ZXI7XG4gICAgICAgICAgICAvLyBXZSBoYXZlIGFuIGFycmF5IG9mIHt2YWx1ZTogJycsIGxhYmVsczogJyd9XG4gICAgICAgICAgICBpZiAob3B0aW9uc1swXS52YWx1ZSB8fCBvcHRpb25zWzBdLmxhYmVsKSB7XG4gICAgICAgICAgICAgIG9wdGlvbnMgPSBjb2x1bW4uZmlsdGVyLm1hcCgob3B0KSA9PiBvcHQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVlcnlbY29sdW1uLm5hbWVdID0geyBhbnk6IG9wdGlvbnMgfTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbi50eXBlICYmIGNvbHVtbi50eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW4uZmlsdGVyLnN0YXJ0RGF0ZSAmJiBjb2x1bW4uZmlsdGVyLmVuZERhdGUpIHtcbiAgICAgICAgICAgICAgcXVlcnlbY29sdW1uLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgIG1pbjogZGF0ZUZucy5zdGFydE9mRGF5KGNvbHVtbi5maWx0ZXIuc3RhcnREYXRlKSxcbiAgICAgICAgICAgICAgICBtYXg6IGRhdGVGbnMuc3RhcnRPZkRheShkYXRlRm5zLmFkZERheXMoZGF0ZUZucy5zdGFydE9mRGF5KGNvbHVtbi5maWx0ZXIuZW5kRGF0ZSksIDEpKSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHF1ZXJ5W2NvbHVtbi5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBtaW46IGNvbHVtbi5maWx0ZXIubWluID8gZGF0ZUZucy5hZGREYXlzKGRhdGVGbnMuc3RhcnRPZlRvZGF5KCksIGNvbHVtbi5maWx0ZXIubWluKSA6IGRhdGVGbnMuc3RhcnRPZlRvZGF5KCksXG4gICAgICAgICAgICAgICAgbWF4OiBjb2x1bW4uZmlsdGVyLm1heCA/IGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZUb21vcnJvdygpLCBjb2x1bW4uZmlsdGVyLm1heCkgOiBkYXRlRm5zLnN0YXJ0T2ZUb21vcnJvdygpLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeVtjb2x1bW4ubmFtZV0gPSBjb2x1bW4uZmlsdGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoSGVscGVycy5pc0Z1bmN0aW9uKHRoaXMuY29uZmlnLmZpbHRlcmluZykpIHtcbiAgICAgICAgICB0aGlzLmNvbmZpZy5maWx0ZXJpbmcocXVlcnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2RhdGFQcm92aWRlci5maWx0ZXIgPSBxdWVyeTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLmZpbHRlciA9IHt9O1xuICAgICAgfVxuICAgICAgLy8gVHJpY2tsZSBkb3duIHRvIGtlZXAgc29ydFxuICAgICAgLy8gdGhpcy5vblNvcnRDaGFuZ2UodGhpcy5jdXJyZW50U29ydENvbHVtbik7XG4gICAgICB0aGlzLmZpcmVUYWJsZUNoYW5nZUV2ZW50KCk7XG5cbiAgICAgIC8vIElmIHBhZ2luZywgcmVzZXQgcGFnZVxuICAgICAgaWYgKHRoaXMuY29uZmlnLnBhZ2luZykge1xuICAgICAgICB0aGlzLmNvbmZpZy5wYWdpbmcuY3VycmVudCA9IDE7XG4gICAgICB9XG4gICAgICAvLyBSZW1vdmUgYWxsIHNlbGVjdGlvbiBvbiBzb3J0IGNoYW5nZSBpZiBzZWxlY3Rpb24gaXMgb25cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3dTZWxlY3Rpb25TdHlsZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICB0aGlzLnNlbGVjdEFsbChmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXNjYXBlQ2hhcmFjdGVycyhmaWx0ZXIpIHtcbiAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBmaWx0ZXIucmVwbGFjZSgvJy9nLCAnXFwnXFwnJyk7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXI7XG4gIH1cblxuICBpc0ZpbHRlckFjdGl2ZShjb2x1bW4sIGZpbHRlcik6IGJvb2xlYW4ge1xuICAgIC8vIFRPRE86IFRoaXMgbmVlZHMgdG8gYmUgcmVmYWN0b3JlZFxuICAgIGxldCBpc0FjdGl2ZSA9IGZhbHNlO1xuICAgIGlmIChjb2x1bW4gJiYgIUhlbHBlcnMuaXNCbGFuayhjb2x1bW4uZmlsdGVyKSAmJiAhSGVscGVycy5pc0JsYW5rKGZpbHRlcikpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbHVtbi5maWx0ZXIpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsdGVyICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlzQWN0aXZlID0gY29sdW1uLmZpbHRlci5zb21lKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5sYWJlbCA9PT0gZmlsdGVyLmxhYmVsO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlzQWN0aXZlID0gY29sdW1uLmZpbHRlci5pbmNsdWRlcyhmaWx0ZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIGNvbHVtbi5maWx0ZXIgPT09IHR5cGVvZiBmaWx0ZXIpIHtcbiAgICAgICAgICBpc0FjdGl2ZSA9IGNvbHVtbi5maWx0ZXIgPT09IGZpbHRlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc0FjdGl2ZSA9IGNvbHVtbi5maWx0ZXIgPT09IGZpbHRlci52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNBY3RpdmU7XG4gIH1cblxuICBvblNvcnRDaGFuZ2UoY29sdW1uKSB7XG4gICAgdGhpcy5jdXJyZW50U29ydENvbHVtbiA9IGNvbHVtbjtcbiAgICBjb25zdCBzb3J0ZWRDb2x1bW5zOiBhbnkgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKCh0aGlzQ29sdW1uKSA9PiB7XG4gICAgICByZXR1cm4gdGhpc0NvbHVtbi5zb3J0ICYmIHRoaXNDb2x1bW4gIT09IHRoaXMuY3VycmVudFNvcnRDb2x1bW47XG4gICAgfSk7XG4gICAgZm9yIChjb25zdCBzb3J0ZWRDb2x1bW4gb2Ygc29ydGVkQ29sdW1ucykge1xuICAgICAgc29ydGVkQ29sdW1uLnNvcnQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChjb2x1bW4pIHtcbiAgICAgIGlmIChIZWxwZXJzLmlzRnVuY3Rpb24odGhpcy5jb25maWcuc29ydGluZykpIHtcbiAgICAgICAgdGhpcy5jb25maWcuc29ydGluZygpO1xuICAgICAgfSBlbHNlIGlmIChIZWxwZXJzLmlzRnVuY3Rpb24oY29sdW1uLnByZVNvcnQpKSB7XG4gICAgICAgIHRoaXMuX2RhdGFQcm92aWRlci5zb3J0ID0gW10uY29uY2F0KGNvbHVtbi5wcmVTb3J0KGNvbHVtbikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLnNvcnQgPSBbeyBmaWVsZDogY29sdW1uLmNvbXBhcmUgfHwgY29sdW1uLm5hbWUsIHJldmVyc2U6IGNvbHVtbi5zb3J0ID09PSAnZGVzYycgfV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRmlyZSB0YWJsZSBjaGFuZ2UgZXZlbnRcbiAgICAvLyB0aGlzLmZpcmVUYWJsZUNoYW5nZUV2ZW50KCk7XG5cbiAgICAvLyBJZiBwYWdpbmcsIHJlc2V0IHBhZ2VcbiAgICBpZiAodGhpcy5jb25maWcucGFnaW5nKSB7XG4gICAgICB0aGlzLmNvbmZpZy5wYWdpbmcuY3VycmVudCA9IDE7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBzZWxlY3Rpb24gb24gc29ydCBjaGFuZ2UgaWYgc2VsZWN0aW9uIGlzIG9uXG4gICAgaWYgKHRoaXMuY29uZmlnLnJvd1NlbGVjdGlvblN0eWxlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgZmlyZVRhYmxlQ2hhbmdlRXZlbnQoKSB7XG4gICAgLy8gQ29uc3RydWN0IGEgdGFibGUgY2hhbmdlIG9iamVjdFxuICAgIGNvbnN0IG9uVGFibGVDaGFuZ2U6IGFueSA9IHt9O1xuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2wpID0+IGNvbC5maWx0ZXIgJiYgY29sLmZpbHRlci5sZW5ndGgpO1xuICAgIG9uVGFibGVDaGFuZ2UuZmlsdGVyID0gZmlsdGVycy5sZW5ndGggPyBmaWx0ZXJzIDogZmFsc2U7XG4gICAgb25UYWJsZUNoYW5nZS5zb3J0ID0gdGhpcy5jdXJyZW50U29ydENvbHVtbiA/IHRoaXMuY3VycmVudFNvcnRDb2x1bW4gOiBmYWxzZTtcbiAgICBvblRhYmxlQ2hhbmdlLnJvd3MgPSB0aGlzLnJvd3M7XG5cbiAgICAvLyBFbWl0IGV2ZW50XG4gICAgdGhpcy5vblRhYmxlQ2hhbmdlLmVtaXQob25UYWJsZUNoYW5nZSk7XG4gIH1cblxuICBmaW5kQ29sdW1uSW5kZXgodmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMuY29sdW1uc1tpXS5uYW1lID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBvbk9yZGVyQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3Qgb2xkSW5kZXggPSB0aGlzLmZpbmRDb2x1bW5JbmRleChldmVudC5maXJzdC5uYW1lKTtcbiAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuZmluZENvbHVtbkluZGV4KGV2ZW50LnNlY29uZC5uYW1lKTtcbiAgICB0aGlzLmNvbHVtbnMuc3BsaWNlKG5ld0luZGV4LCAwLCB0aGlzLmNvbHVtbnMuc3BsaWNlKG9sZEluZGV4LCAxKVswXSk7XG4gICAgdGhpcy5vblNvcnRDaGFuZ2UodGhpcy5jdXJyZW50U29ydENvbHVtbik7XG4gIH1cblxuICBleHBhbmRBbGxPblBhZ2UoZXhwYW5kZWQpIHtcbiAgICB0aGlzLmNvbmZpZy5leHBhbmRBbGwgPSAhZXhwYW5kZWQ7XG4gICAgZm9yIChjb25zdCByb3cgb2YgdGhpcy5kYXRhUHJvdmlkZXIubGlzdCkge1xuICAgICAgcm93Ll9leHBhbmRlZCA9IHRoaXMuY29uZmlnLmV4cGFuZEFsbDtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RQYWdlKGRhdGE/OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMubWFzdGVyKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbChmYWxzZSk7XG4gICAgICAvLyBPbmx5IHNob3cgdGhlIHNlbGVjdCBhbGwgbWVzc2FnZSB3aGVuIHRoZXJlIGlzIG9ubHkgb25lIG5ldyBwYWdlIHNlbGVjdGVkIGF0IGEgdGltZVxuICAgICAgdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCA9IHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgPiAwID8gdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCAtIDEgOiAwO1xuICAgICAgdGhpcy5zaG93U2VsZWN0QWxsTWVzc2FnZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgIC8vIHRoaXMucGFnZWREYXRhID0gdGhpcy5yb3dzLnNsaWNlKHRoaXMuZ2V0UGFnZVN0YXJ0KCksIHRoaXMuZ2V0UGFnZUVuZCgpKTtcbiAgICAgIGZvciAoY29uc3Qgcm93IG9mIHRoaXMucGFnZWREYXRhKSB7XG4gICAgICAgIHJvdy5fc2VsZWN0ZWQgPSB0aGlzLm1hc3RlcjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmRhdGFQcm92aWRlci5saXN0LmZpbHRlcigocikgPT4gci5fc2VsZWN0ZWQpO1xuICAgICAgdGhpcy5wYWdlU2VsZWN0ZWQgPSB0aGlzLnBhZ2VkRGF0YS5maWx0ZXIoKHIpID0+IHIuX3NlbGVjdGVkKTtcbiAgICAgIHRoaXMuZW1pdFNlbGVjdGVkKHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgLy8gT25seSBzaG93IHRoZSBzZWxlY3QgYWxsIG1lc3NhZ2Ugd2hlbiB0aGVyZSBpcyBvbmx5IG9uZSBuZXcgcGFnZSBzZWxlY3RlZCBhdCBhIHRpbWVcbiAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQrKztcbiAgICAgIHRoaXMuc2hvd1NlbGVjdEFsbE1lc3NhZ2UgPSB0aGlzLnNlbGVjdGVkUGFnZUNvdW50ID09PSAxICYmIHRoaXMuc2VsZWN0ZWQubGVuZ3RoICE9PSB0aGlzLmRhdGFQcm92aWRlci50b3RhbDtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RBbGwodmFsdWUpIHtcbiAgICB0aGlzLm1hc3RlciA9IHZhbHVlO1xuICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIGZvciAoY29uc3Qgcm93IG9mIHRoaXMuZGF0YVByb3ZpZGVyLmxpc3QpIHtcbiAgICAgIHJvdy5fc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZCA9IHZhbHVlID8gdGhpcy5kYXRhUHJvdmlkZXIubGlzdCA6IFtdO1xuICAgIHRoaXMuc2hvd1NlbGVjdEFsbE1lc3NhZ2UgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkUGFnZUNvdW50ID0gdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCA+IDAgPyB0aGlzLnNlbGVjdGVkUGFnZUNvdW50IC0gMSA6IDA7XG4gICAgdGhpcy5yb3dTZWxlY3RIYW5kbGVyKCk7XG4gIH1cblxuICByb3dTZWxlY3RIYW5kbGVyKGRhdGE/OiBhbnkpIHtcbiAgICAvLyB0aGlzLnBhZ2VkRGF0YSA9IHRoaXMucm93cy5zbGljZSh0aGlzLmdldFBhZ2VTdGFydCgpLCB0aGlzLmdldFBhZ2VFbmQoKSk7XG4gICAgdGhpcy5wYWdlU2VsZWN0ZWQgPSB0aGlzLnBhZ2VkRGF0YS5maWx0ZXIoKHIpID0+IHIuX3NlbGVjdGVkKTtcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5kYXRhUHJvdmlkZXIubGlzdC5maWx0ZXIoKHIpID0+IHIuX3NlbGVjdGVkKTtcbiAgICBpZiAodGhpcy5wYWdlU2VsZWN0ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLm1hc3RlciA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBhZ2VTZWxlY3RlZC5sZW5ndGggPT09IHRoaXMucGFnZWREYXRhLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXN0ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFzdGVyID0gZmFsc2U7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuXG4gICAgICAvLyBCcmVha2luZyB0aGUgc2VsZWN0ZWQgcGFnZSBjb3VudFxuICAgICAgdGhpcy5zaG93U2VsZWN0QWxsTWVzc2FnZSA9IGZhbHNlO1xuICAgICAgdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCA9IHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgPiAwID8gdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCAtIDEgOiAwO1xuICAgIH1cbiAgICB0aGlzLmVtaXRTZWxlY3RlZCh0aGlzLnNlbGVjdGVkKTtcbiAgfVxuXG4gIGVtaXRTZWxlY3RlZChzZWxlY3RlZCkge1xuICAgIHRoaXMub25Sb3dTZWxlY3QuZW1pdCh7IGxlbmd0aDogc2VsZWN0ZWQubGVuZ3RoLCBzZWxlY3RlZCB9KTtcbiAgfVxuXG4gIHJvd0NsaWNrSGFuZGxlcihyb3cpIHtcbiAgICBpZiAodGhpcy5jb25maWcucm93U2VsZWN0KSB7XG4gICAgICB0aGlzLmFjdGl2ZUlkID0gcm93LmlkIHx8IDA7XG4gICAgICB0aGlzLm9uUm93Q2xpY2suZW1pdChyb3cpO1xuICAgIH1cbiAgfVxuXG4gIGdldERlZmF1bHRPcHRpb25zKGNvbHVtbikge1xuICAgIC8vIFRPRE8gLSBuZWVkcyB0byBjb21lIGZyb20gbGFiZWwgc2VydmljZSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL2lzc3Vlcy8xMTZcbiAgICBjb25zdCBvcHRzOiBhbnlbXSA9IFtcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QxRGF5LCBtaW46IC0xLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3Q3RGF5cywgbWluOiAtNywgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MzBEYXlzLCBtaW46IC0zMCwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0OTBEYXlzLCBtaW46IC05MCwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MVllYXIsIG1pbjogLTM2NiwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MURheSwgbWluOiAwLCBtYXg6IDEgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQ3RGF5cywgbWluOiAwLCBtYXg6IDcgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQzMERheXMsIG1pbjogMCwgbWF4OiAzMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDkwRGF5cywgbWluOiAwLCBtYXg6IDkwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MVllYXIsIG1pbjogMCwgbWF4OiAzNjYgfSxcbiAgICBdO1xuXG4gICAgaWYgKGNvbHVtbiAmJiBjb2x1bW4ucmFuZ2UpIHtcbiAgICAgIG9wdHMucHVzaCh7XG4gICAgICAgIGxhYmVsOiB0aGlzLmxhYmVscy5jdXN0b21EYXRlUmFuZ2UsXG4gICAgICAgIHJhbmdlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvcHRzO1xuICB9XG5cbiAgb25DYWxlbmRlclNlbGVjdChjb2x1bW4sIGV2ZW50KTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoZXZlbnQuc3RhcnREYXRlICYmIGV2ZW50LmVuZERhdGUpIHtcbiAgICAgICAgdGhpcy5vbkZpbHRlckNoYW5nZSgpO1xuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uRmlsdGVyS2V5d29yZHMoY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWcuZmlsdGVyaW5nICYmIGNvbmZpZy5maWx0ZXJpbmcuZnJlZXRleHRGaWx0ZXIpIHtcbiAgICAgIGNvbnN0IGZpbHRlcktleXdvcmRzID0gY29uZmlnLmZpbHRlcmluZy5mcmVldGV4dEZpbHRlci50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKCFjb25maWcuZmlsdGVyaW5nLm9yaWdpbmFsT3B0aW9ucykge1xuICAgICAgICBjb25maWcuZmlsdGVyaW5nLm9yaWdpbmFsT3B0aW9ucyA9IGNvbmZpZy5maWx0ZXJpbmcub3B0aW9ucztcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5ld09wdGlvbnMgPSBjb25maWcuZmlsdGVyaW5nLm9yaWdpbmFsT3B0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBvcHRpb24gJiYgb3B0aW9uLmxhYmVsID8gb3B0aW9uLmxhYmVsIDogb3B0aW9uO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCkgPyB2YWx1ZS50b0xvd2VyQ2FzZSgpIDogdmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmlsdGVyS2V5d29yZHMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh+dmFsdWUuaW5kZXhPZihmaWx0ZXJLZXl3b3JkcykgfHwgfnZhbHVlLmluZGV4T2YoZmlsdGVyS2V5d29yZHMpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBjb25maWcuZmlsdGVyaW5nLm9wdGlvbnMgPSBuZXdPcHRpb25zO1xuICAgICAgY29uZmlnLmZpbHRlcmluZy5maWx0ZXIgPSBjb25maWcuZmlsdGVyaW5nLmZyZWV0ZXh0RmlsdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcuZmlsdGVyaW5nLm9wdGlvbnMgPSBjb25maWcuZmlsdGVyaW5nLm9yaWdpbmFsT3B0aW9ucztcbiAgICB9XG4gICAgdGhpcy5vbkZpbHRlckNoYW5nZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBUYWJsZSBpbnRvIEVESVQgbW9kZSwgYmFzZWQgb24gdGhlIHJvdy9jb2x1bW4gcGFzc2VkIHlvdSBjYW4gZW50ZXIgaW4gYSBmZXcgc3RhdGVzXG4gICAqICgxKSBzZXRUYWJsZUVkaXQoKSAtIGRvbid0IHBhc3MgYW55IHRvIHB1dCB0aGUgRlVMTCB0YWJsZSBpbnRvIGVkaXQgbW9kZVxuICAgKiAoMikgc2V0VGFibGVFZGl0KDEpIC0gcGFzcyBvbmx5IHJvdyB0byBwdXQgdGhhdCBGVUxMIHJvdyBvZiB0aGUgdGFibGUgaW50byBlZGl0IG1vZGVcbiAgICogKDMpIHNldFRhYmxlRWRpdCgxLCAxKSAtIHBhc3Mgcm93IGFuZCBjb2x1bW4gdG8gcHV0IHRoYXQgY29sdW1uIG9mIHRoZSByb3cgb2YgdGhlIHRhYmxlIGludG8gZWRpdCBtb2RlXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICBzZXRUYWJsZUVkaXQocm93TnVtYmVyPzogbnVtYmVyLCBjb2x1bW5OdW1iZXI/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGUgPSBOb3ZvVGFibGVNb2RlLkVESVQ7XG4gICAgdGhpcy5fZGF0YVByb3ZpZGVyLmVkaXQoKTtcbiAgICB0aGlzLl9yb3dzLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgIHJvdy5fZWRpdGluZyA9IHJvdy5fZWRpdGluZyB8fCB7fTtcbiAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW4sIGNvbHVtbkluZGV4KSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4udmlld09ubHkpIHtcbiAgICAgICAgICByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoSGVscGVycy5pc0VtcHR5KHJvd051bWJlcikgJiYgSGVscGVycy5pc0VtcHR5KGNvbHVtbk51bWJlcikpIHtcbiAgICAgICAgICByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICghSGVscGVycy5pc0VtcHR5KHJvd051bWJlcikgJiYgcm93SW5kZXggPT09IE51bWJlcihyb3dOdW1iZXIpICYmIEhlbHBlcnMuaXNFbXB0eShjb2x1bW5OdW1iZXIpKSB7XG4gICAgICAgICAgcm93Ll9lZGl0aW5nW2NvbHVtbi5uYW1lXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgIUhlbHBlcnMuaXNFbXB0eShyb3dOdW1iZXIpICYmXG4gICAgICAgICAgIUhlbHBlcnMuaXNFbXB0eShjb2x1bW5OdW1iZXIpICYmXG4gICAgICAgICAgcm93SW5kZXggPT09IE51bWJlcihyb3dOdW1iZXIpICYmXG4gICAgICAgICAgY29sdW1uSW5kZXggPT09IE51bWJlcihjb2x1bW5OdW1iZXIpXG4gICAgICAgICkge1xuICAgICAgICAgIHJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIExlYXZlcyBlZGl0IG1vZGUgZm9yIHRoZSBUYWJsZSBhbmQgcHV0cyBldmVyeXRoaW5nIGJhY2sgdG8gVklFVyBvbmx5XG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqIEBwYXJhbSBjYW5jZWwgLSB3aGV0aGVyIG9yIG5vdCB0byBzYXZlIGRhdGEgb3IgdW5kb1xuICAgKi9cbiAgcHJpdmF0ZSBsZWF2ZUVkaXRNb2RlKGNhbmNlbDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubW9kZSA9IE5vdm9UYWJsZU1vZGUuVklFVztcbiAgICB0aGlzLl9yb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93Ll9lZGl0aW5nID0gcm93Ll9lZGl0aW5nIHx8IHt9O1xuICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAoY2FuY2VsKSB7XG4gICAgICB0aGlzLl9kYXRhUHJvdmlkZXIudW5kbygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhUHJvdmlkZXIuY29tbWl0KCk7XG4gICAgfVxuICAgIHRoaXMuaGlkZVRvYXN0TWVzc2FnZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBBZGRzIGEgbmV3IHJvdyBpbnRvIHRoZSB0YWJsZSB0byBiZSBlZGl0ZWQsIGNhbiBiZSBjYWxsZWQgZnJvbSBhIGxvY2FsIHJlZmVyZW5jZSBvZiB0aGUgdGFibGUgaW4geW91ciB0ZW1wbGF0ZVxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgYWRkRWRpdGFibGVSb3coZGVmYXVsdFZhbHVlOiBhbnkgPSB7fSk6IHZvaWQge1xuICAgIGNvbnN0IHRhYmxlRm9ybVJvd3MgPSA8Rm9ybUFycmF5PnRoaXMudGFibGVGb3JtLmNvbnRyb2xzWydyb3dzJ107XG4gICAgY29uc3Qgcm93OiBhbnkgPSB7fTtcbiAgICBjb25zdCByb3dDb250cm9scyA9IFtdO1xuICAgIHJvdy5jb250cm9scyA9IHt9O1xuICAgIHJvdy5fZWRpdGluZyA9IHt9O1xuICAgIHJvdy5yb3dJZCA9IHRoaXMuX3Jvd3MubGVuZ3RoICsgMTtcbiAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAvLyBVc2UgdGhlIGNvbnRyb2wgcGFzc2VkIG9yIHVzZSBhIFJlYWRPbmx5Q29udHJvbCBzbyB0aGF0IHRoZSBmb3JtIGhhcyB0aGUgdmFsdWVzXG4gICAgICBjb25zdCBjb250cm9sID0gY29sdW1uLmVkaXRvckNvbmZpZ1xuICAgICAgICA/IENvbnRyb2xGYWN0b3J5LmNyZWF0ZShjb2x1bW4uZWRpdG9yVHlwZSwgY29sdW1uLmVkaXRvckNvbmZpZylcbiAgICAgICAgOiBuZXcgUmVhZE9ubHlDb250cm9sKHsga2V5OiBjb2x1bW4ubmFtZSB9KTtcbiAgICAgIGNvbnRyb2wudmFsdWUgPSBudWxsOyAvLyByZW1vdmUgY29waWVkIGNvbHVtbiB2YWx1ZVxuICAgICAgcm93LmNvbnRyb2xzW2NvbHVtbi5uYW1lXSA9IGNvbnRyb2w7XG4gICAgICByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdID0gIWNvbHVtbi52aWV3T25seTtcbiAgICAgIHJvd0NvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gICAgfSk7XG4gICAgdGhpcy5mb3JtVXRpbHMuc2V0SW5pdGlhbFZhbHVlcyhyb3dDb250cm9scywgZGVmYXVsdFZhbHVlLCBmYWxzZSk7XG4gICAgdGFibGVGb3JtUm93cy5wdXNoKHRoaXMuZm9ybVV0aWxzLnRvRm9ybUdyb3VwKHJvd0NvbnRyb2xzKSk7XG4gICAgdGhpcy5fcm93cy5wdXNoKHJvdyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyB0aGUgRm9ybSBpbnNpZGUgb2YgdGhlIFRhYmxlLCBpZiB0aGVyZSBhcmUgZXJyb3JzIGl0IHdpbGwgZGlzcGxheS9yZXR1cm4gdGhlIGVycm9ycyBmb3IgZWFjaCByb3cuXG4gICAqIElmIHRoZXJlIGFyZSBubyBlcnJvcnMsIHRoZW4gaXQgd2lsbCByZXR1cm4gT05MWSB0aGUgY2hhbmdlZCBkYXRhIGZvciBlYWNoIHJvdywgdGhlIGRhdGEgcmV0dXJuZWQgd2lsbCBiZSBpbiB0aGUgZm9ybTpcbiAgICogeyBpZDogSURfT0ZfUkVDT1JELCBrZXk6IHZhbHVlIH0gLS0gZGF0YSB0aGF0IHdhcyB1cGRhdGVkXG4gICAqIHsgaWQ6IHVuZGVmaW5lZCwga2V5OiB2YWx1ZSB9IC0tIGRhdGEgdGhhdCB3YXMgYWRkZWRcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICovXG4gIHZhbGlkYXRlQW5kR2V0VXBkYXRlZERhdGEoKTogeyBjaGFuZ2VkPzogYW55W107IGVycm9ycz86IHsgZXJyb3JzOiBhbnk7IHJvdzogYW55OyBpbmRleDogbnVtYmVyIH1bXSB9IHtcbiAgICBpZiAodGhpcy50YWJsZUZvcm0gJiYgdGhpcy50YWJsZUZvcm0uY29udHJvbHMgJiYgdGhpcy50YWJsZUZvcm0uY29udHJvbHNbJ3Jvd3MnXSkge1xuICAgICAgY29uc3QgY2hhbmdlZFJvd3MgPSBbXTtcbiAgICAgIGNvbnN0IGVycm9ycyA9IFtdO1xuICAgICAgLy8gR28gb3ZlciB0aGUgRm9ybUFycmF5J3MgY29udHJvbHNcbiAgICAgICh0aGlzLnRhYmxlRm9ybS5jb250cm9sc1sncm93cyddIGFzIEZvcm1BcnJheSkuY29udHJvbHMuZm9yRWFjaCgoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgbGV0IGNoYW5nZWRSb3cgPSBudWxsO1xuICAgICAgICBsZXQgZXJyb3IgPSBudWxsO1xuICAgICAgICAvLyBHbyBvdmVyIHRoZSBmb3JtIGdyb3VwIGNvbnRyb2xzXG4gICAgICAgIE9iamVjdC5rZXlzKGZvcm1Hcm91cC5jb250cm9scykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250cm9sID0gZm9ybUdyb3VwLmNvbnRyb2xzW2tleV07XG4gICAgICAgICAgLy8gSGFuZGxlIHZhbHVlIGNoYW5naW5nXG4gICAgICAgICAgaWYgKGNvbnRyb2wgJiYgY29udHJvbC5kaXJ0eSAmJiAhY29udHJvbC5lcnJvcnMpIHtcbiAgICAgICAgICAgIGlmICghY2hhbmdlZFJvdykge1xuICAgICAgICAgICAgICAvLyBBcHBlbmQgdGhlIElELCBzbyB3ZSBoYXZlIHNvbWUga2V5IHRvIHNhdmUgYWdhaW5zdFxuICAgICAgICAgICAgICBjaGFuZ2VkUm93ID0ge307XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9yb3dzW2luZGV4XS5pZCkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWRSb3cuaWQgPSB0aGlzLl9yb3dzW2luZGV4XS5pZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgZGlydHksIGdyYWIgdmFsdWUgb2ZmIHRoZSBmb3JtXG4gICAgICAgICAgICBjaGFuZ2VkUm93W2tleV0gPSB0aGlzLnRhYmxlRm9ybS52YWx1ZVsncm93cyddW2luZGV4XVtrZXldO1xuICAgICAgICAgICAgLy8gU2V0IHZhbHVlIGJhY2sgdG8gcm93IChzaG91bGQgYmUgYWxyZWFkeSBkb25lIHZpYSB0aGUgc2VydmVyIGNhbGwsIGJ1dCBkbyBpdCBhbnl3YXkpXG4gICAgICAgICAgICB0aGlzLl9yb3dzW2luZGV4XVtrZXldID0gY2hhbmdlZFJvd1trZXldO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29udHJvbCAmJiBjb250cm9sLmVycm9ycykge1xuICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yc1xuICAgICAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgICBlcnJvciA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3Jba2V5XSA9IGNvbnRyb2wuZXJyb3JzO1xuICAgICAgICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNoYW5nZWRSb3cpIHtcbiAgICAgICAgICBjaGFuZ2VkUm93cy5wdXNoKGNoYW5nZWRSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHsgZXJyb3JzOiBlcnJvciwgcm93OiB0aGlzLl9yb3dzW2luZGV4XSwgaW5kZXggfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gUmV0dXJuIGVycm9ycyBpZiBhbnksIG90aGVyd2lzZSByZXR1cm4gdGhlIGNoYW5nZWQgcm93c1xuICAgICAgaWYgKGVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgY2hhbmdlZDogY2hhbmdlZFJvd3MgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGVycm9ycyB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVmcmVzaCB0aGUgZGF0YSBwcm92aWRlciBhbmQgbGVhdmUgZWRpdCBtb2RlXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICBjYW5jZWxFZGl0aW5nKCk6IHZvaWQge1xuICAgIHRoaXMubGVhdmVFZGl0TW9kZSh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVmcmVzaCB0aGUgZGF0YSBwcm92aWRlciBhbmQgbGVhdmUgZWRpdCBtb2RlXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICBzYXZlQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmxlYXZlRWRpdE1vZGUoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBEaXNwbGF5cyBhIHRvYXN0IG1lc3NhZ2UgaW5zaWRlIG9mIHRoZSB0YWJsZVxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgZGlzcGxheVRvYXN0TWVzc2FnZSh0b2FzdDogeyBpY29uOiBzdHJpbmc7IHRoZW1lOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9LCBoaWRlRGVsYXk/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnRvYXN0ID0gdG9hc3Q7XG4gICAgaWYgKGhpZGVEZWxheSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmhpZGVUb2FzdE1lc3NhZ2UoKSwgaGlkZURlbGF5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEZvcmNlIGhpZGUgdGhlIHRvYXN0IG1lc3NhZ2VcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICovXG4gIGhpZGVUb2FzdE1lc3NhZ2UoKTogdm9pZCB7XG4gICAgdGhpcy50b2FzdCA9IG51bGw7XG4gICAgLy8gSGFjayB0byBtYWtlIHRoZSB0YWJsZSBkaXNwbGF5IHByb3Blcmx5IGFmdGVyIGhpZGluZyB0aGUgdG9hc3RcbiAgICB0aGlzLmdyb3NzRmxhZ1RvQXZvaWRUaGVUYWJsZUZyb21CZWluZ1VnbHlXaGVuSGlkaW5nVGhlVG9hc3QgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5ncm9zc0ZsYWdUb0F2b2lkVGhlVGFibGVGcm9tQmVpbmdVZ2x5V2hlbkhpZGluZ1RoZVRvYXN0ID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIGRpc3BsYXkgdGhlIGxvYWRpbmcgb3ZlcmxheSBvbiB0aGUgdGFibGVcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICovXG4gIHRvZ2dsZUxvYWRpbmcoc2hvdzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyA9IHNob3c7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIGhpZGUgYSBjb2x1bW4gaW4gZWRpdCBvciB2aWV3IG1vZGVcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICovXG4gIGlzQ29sdW1uSGlkZGVuKGNvbHVtbjogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdGluZyA/ICEhY29sdW1uLmhpZGVDb2x1bW5PbkVkaXQgOiAhIWNvbHVtbi5oaWRlQ29sdW1uT25WaWV3O1xuICB9XG59XG4iXX0=