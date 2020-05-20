/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/cell-headers/data-table-header-cell.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CdkColumnDef } from '@angular/cdk/table';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Optional, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { NovoLabelService } from '../../../services/novo-label-service';
import { Helpers } from '../../../utils/Helpers';
import { KeyCodes } from '../../../utils/key-codes/KeyCodes';
import { NovoDropdownElement } from '../../dropdown/Dropdown';
import { NovoDataTableFilterUtils } from '../services/data-table-filter-utils';
import { NovoDataTableSortFilter } from '../sort-filter/sort-filter.directive';
import { DataTableState } from '../state/data-table-state.service';
/**
 * @template T
 */
export class NovoDataTableCellHeader {
    /**
     * @param {?} changeDetectorRef
     * @param {?} labels
     * @param {?} state
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} _sort
     * @param {?} _cdkColumnDef
     */
    constructor(changeDetectorRef, labels, state, renderer, elementRef, _sort, _cdkColumnDef) {
        this.changeDetectorRef = changeDetectorRef;
        this.labels = labels;
        this.state = state;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this._sort = _sort;
        this._cdkColumnDef = _cdkColumnDef;
        this.allowMultipleFilters = false;
        this.icon = 'sortable';
        this.filterActive = false;
        this.sortActive = false;
        this.showCustomRange = false;
        this.multiSelect = false;
        this.multiSelectedOptions = [];
        this.multiSelectedOptionIsHidden = [];
        this.optionFilter = '';
        this.error = false;
        this.subscriptions = [];
        this._rerenderSubscription = state.updates.subscribe((/**
         * @param {?} change
         * @return {?}
         */
        (change) => this.checkSortFilterState(change)));
    }
    /**
     * @param {?} column
     * @return {?}
     */
    set column(column) {
        this._column = column;
        this.label = column.type === 'action' ? '' : column.label;
        this.labelIcon = column.labelIcon;
        this.config = {
            sortable: !!column.sortable,
            filterable: !!column.filterable,
            resizable: !!column.resizable,
        };
        this.resizable = this.config.resizable;
        /** @type {?} */
        const transforms = {};
        if (column.filterable && Helpers.isObject(column.filterable)) {
            this.config.filterConfig = (/** @type {?} */ (column.filterable));
            if (!this.config.filterConfig.type) {
                this.config.filterConfig = { type: 'text' };
            }
            if (((/** @type {?} */ (column.filterable))).transform) {
                transforms.filter = ((/** @type {?} */ (column.filterable))).transform;
            }
        }
        else {
            this.config.filterConfig = { type: 'text' };
        }
        if (column.sortable && Helpers.isObject(column.sortable)) {
            if (((/** @type {?} */ (column.sortable))).transform) {
                transforms.sort = ((/** @type {?} */ (column.sortable))).transform;
            }
        }
        if (this.config.filterConfig.type === 'date' && !this.config.filterConfig.options) {
            this.config.filterConfig.options = this.getDefaultDateFilterOptions();
        }
        this.config.transforms = transforms;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this._cdkColumnDef) {
            this.id = this._cdkColumnDef.name;
        }
        this.checkSortFilterState({ filter: this.state.filter, sort: this.state.sort }, true);
        this.multiSelect = this.config.filterConfig && this.config.filterConfig.type ? this.config.filterConfig.type === 'multi-select' : false;
        if (this.multiSelect) {
            this.multiSelectedOptions = this.filter ? [...this.filter] : [];
        }
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._rerenderSubscription.unsubscribe();
        this.subscriptions.forEach((/**
         * @param {?} subscription
         * @return {?}
         */
        (subscription) => {
            subscription.unsubscribe();
        }));
    }
    /**
     * @param {?} sortFilterState
     * @param {?=} initialConfig
     * @return {?}
     */
    checkSortFilterState(sortFilterState, initialConfig = false) {
        if (sortFilterState.sort && sortFilterState.sort.id === this.id) {
            this.icon = `sort-${sortFilterState.sort.value}`;
            this.sortActive = true;
        }
        else {
            this.icon = 'sortable';
            this.sortActive = false;
        }
        /** @type {?} */
        const tableFilter = Helpers.convertToArray(sortFilterState.filter);
        /** @type {?} */
        const thisFilter = tableFilter.find((/**
         * @param {?} filter
         * @return {?}
         */
        (filter) => filter && filter.id === this.id));
        if (thisFilter) {
            this.filterActive = true;
            if (initialConfig && thisFilter.type === 'date' && thisFilter.selectedOption) {
                this.activeDateFilter = thisFilter.selectedOption.label || this.labels.customDateRange;
            }
            this.filter = thisFilter.value;
        }
        else {
            this.filterActive = false;
            this.filter = undefined;
            this.activeDateFilter = undefined;
            this.multiSelectedOptions = [];
        }
        if (this.defaultSort && this.id === this.defaultSort.id) {
            this.icon = `sort-${this.defaultSort.value}`;
            this.sortActive = true;
        }
        this.multiSelect = this.config.filterConfig && this.config.filterConfig.type ? this.config.filterConfig.type === 'multi-select' : false;
        if (this.multiSelect) {
            this.multiSelectedOptions = this.filter ? [...this.filter] : [];
            if (this.config.filterConfig.options) {
                if (typeof this.config.filterConfig.options[0] === 'string') {
                    this.multiSelectedOptionIsHidden = ((/** @type {?} */ (this.config.filterConfig.options))).map((/**
                     * @param {?} option
                     * @return {?}
                     */
                    (option) => ({ option, hidden: false })));
                }
                else {
                    this.multiSelectedOptionIsHidden = ((/** @type {?} */ (this.config.filterConfig.options))).map((/**
                     * @param {?} option
                     * @return {?}
                     */
                    (option) => ({
                        option,
                        hidden: false,
                    })));
                }
            }
        }
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @param {?} option
     * @param {?} optionsList
     * @return {?}
     */
    isSelected(option, optionsList) {
        if (optionsList) {
            /** @type {?} */
            const optionValue = option.hasOwnProperty('value') ? option.value : option;
            /** @type {?} */
            const found = optionsList.find((/**
             * @param {?} item
             * @return {?}
             */
            (item) => this.optionPresentCheck(item, optionValue)));
            return found !== undefined;
        }
        return false;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    toggleSelection(option) {
        /** @type {?} */
        const optionValue = option.hasOwnProperty('value') ? option.value : option;
        /** @type {?} */
        const optionIndex = this.multiSelectedOptions.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        (item) => this.optionPresentCheck(item, optionValue)));
        this.error = false;
        if (optionIndex > -1) {
            this.multiSelectedOptions.splice(optionIndex, 1);
            if (this.optionFilter &&
                !this.getOptionText(option)
                    .toLowerCase()
                    .startsWith(this.optionFilter.toLowerCase())) {
                this.multiSelectedOptionIsHidden[this.multiSelectedOptionIsHidden.findIndex((/**
                 * @param {?} record
                 * @return {?}
                 */
                (record) => record.option === option))].hidden = true;
            }
        }
        else {
            this.multiSelectedOptions.push(optionValue);
        }
    }
    /**
     * @param {?} item
     * @param {?} optionValue
     * @return {?}
     */
    optionPresentCheck(item, optionValue) {
        if (item.hasOwnProperty('value')) {
            return item.value === optionValue;
        }
        else {
            return item === optionValue;
        }
    }
    /**
     * @return {?}
     */
    cancel() {
        this.multiSelectedOptions = this.filter ? [...this.filter] : [];
        this.dropdown.closePanel();
        this.clearOptionFilter();
    }
    /**
     * @return {?}
     */
    filterMultiSelect() {
        if (this.multiSelectedOptions.length === 0 && !this.filter) {
            this.multiSelectHasVisibleOptions() && this.dropdown ? (this.error = true) : null;
        }
        else {
            this.clearOptionFilter();
            /** @type {?} */
            const actualFilter = this.multiSelectedOptions.length > 0 ? [...this.multiSelectedOptions] : undefined;
            this.filterData(actualFilter);
            this.dropdown.closePanel();
        }
    }
    /**
     * @param {?} optionFilter
     * @return {?}
     */
    multiSelectOptionFilter(optionFilter) {
        this.multiSelectedOptionIsHidden.forEach((/**
         * @param {?} record
         * @return {?}
         */
        (record) => {
            if (record.option) {
                record.hidden = !(this.getOptionText(record.option)
                    .toLowerCase()
                    .startsWith(optionFilter.toLowerCase()) || this.isSelected(record.option, this.multiSelectedOptions));
            }
        }));
    }
    /**
     * @param {?} option
     * @return {?}
     */
    multiSelectOptionIsHidden(option) {
        return this.multiSelectedOptionIsHidden.find((/**
         * @param {?} record
         * @return {?}
         */
        (record) => record.option === option)).hidden;
    }
    /**
     * @return {?}
     */
    multiSelectHasVisibleOptions() {
        return this.multiSelectedOptionIsHidden.some((/**
         * @param {?} record
         * @return {?}
         */
        (record) => !record.hidden));
    }
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    getOptionText(option) {
        if (typeof option !== 'object') {
            return option.toString();
        }
        else {
            /** @type {?} */
            const opt = (/** @type {?} */ (option));
            return (opt.label.length > 0 ? opt.label : opt.value).toString();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    multiSelectOptionFilterHandleKeydown(event) {
        if (this.multiSelect) {
            this.error = false;
            if (this.dropdown.panelOpen && event.keyCode === KeyCodes.ESC) {
                // escape = clear text box and close
                Helpers.swallowEvent(event);
                this.clearOptionFilter();
                this.dropdown.closePanel();
            }
            else if (event.keyCode === KeyCodes.ENTER) {
                Helpers.swallowEvent(event);
                this.filterMultiSelect();
            }
            else if ((event.keyCode >= 65 && event.keyCode <= 90) ||
                (event.keyCode >= 96 && event.keyCode <= 105) ||
                (event.keyCode >= 48 && event.keyCode <= 57)) {
                this.optionFilterInput.nativeElement.focus();
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearOptionFilter() {
        this.error = false;
        if (this.optionFilter.length > 0) {
            this.optionFilter = '';
            this.multiSelectedOptionIsHidden.forEach((/**
             * @param {?} record
             * @return {?}
             */
            (record) => {
                record.hidden = false;
            }));
        }
    }
    /**
     * @param {?} mouseDownEvent
     * @return {?}
     */
    startResize(mouseDownEvent) {
        mouseDownEvent.preventDefault();
        /** @type {?} */
        const minimumWidth = 60 + (this.config.filterable ? 30 : 0) + (this.config.sortable ? 30 : 0);
        /** @type {?} */
        const startingWidth = this.elementRef.nativeElement.getBoundingClientRect().width;
        /** @type {?} */
        const mouseMoveSubscription = fromEvent(window.document, 'mousemove').subscribe((/**
         * @param {?} middleMouseEvent
         * @return {?}
         */
        (middleMouseEvent) => {
            /** @type {?} */
            const differenceWidth = middleMouseEvent.clientX - mouseDownEvent.clientX;
            /** @type {?} */
            let width = startingWidth + differenceWidth;
            if (width < minimumWidth) {
                width = minimumWidth;
            }
            this._column.width = width;
            this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', `${this._column.width}px`);
            this.renderer.setStyle(this.elementRef.nativeElement, 'max-width', `${this._column.width}px`);
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${this._column.width}px`);
            this.changeDetectorRef.markForCheck();
            this.resized.next(this._column);
        }));
        /** @type {?} */
        const mouseUpSubscription = fromEvent(window.document, 'mouseup').subscribe((/**
         * @return {?}
         */
        () => {
            mouseUpSubscription.unsubscribe();
            mouseMoveSubscription.unsubscribe();
            this.changeDetectorRef.markForCheck();
        }));
        this.subscriptions.push(mouseMoveSubscription);
        this.subscriptions.push(mouseUpSubscription);
    }
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    toggleCustomRange(event, value) {
        Helpers.swallowEvent(event);
        this.showCustomRange = value;
        this.changeDetectorRef.markForCheck();
        this.dropdown.openPanel(); // Ensures that the panel correctly updates to the dynamic size of the dropdown
    }
    /**
     * @return {?}
     */
    focusInput() {
        if (this.filterInput && this.filterInput.nativeElement) {
            setTimeout((/**
             * @return {?}
             */
            () => this.filterInput.nativeElement.focus()), 0);
        }
        if (this.multiSelect && this.dropdown) {
            this.dropdown.onKeyDown = (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                this.multiSelectOptionFilterHandleKeydown(event);
            });
            setTimeout((/**
             * @return {?}
             */
            () => this.optionFilterInput.nativeElement.focus()), 0);
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    sort() {
        if (this.changeTimeout) {
            clearTimeout(this.changeTimeout);
        }
        this.changeTimeout = setTimeout((/**
         * @return {?}
         */
        () => {
            this.direction = this.getNextSortDirection(this.direction);
            this._sort.sort(this.id, this.direction, this.config.transforms.sort);
            this.changeDetectorRef.markForCheck();
        }), 300);
    }
    /**
     * @param {?=} filter
     * @return {?}
     */
    filterData(filter) {
        /** @type {?} */
        let actualFilter = NovoDataTableFilterUtils.constructFilter(filter, this.config.filterConfig.type, this.multiSelect);
        /** @type {?} */
        const selectedOption = this.config.filterConfig.type === 'date' && filter ? filter : undefined;
        if (this.changeTimeout) {
            clearTimeout(this.changeTimeout);
        }
        this.changeTimeout = setTimeout((/**
         * @return {?}
         */
        () => {
            if (actualFilter === '') {
                actualFilter = undefined;
            }
            this._sort.filter(this.id, this.config.filterConfig.type, actualFilter, this.config.transforms.filter, this.allowMultipleFilters, selectedOption);
            this.changeDetectorRef.markForCheck();
        }), 300);
    }
    /**
     * @return {?}
     */
    clearFilter() {
        this.filter = undefined;
        this.multiSelectedOptions = [];
        this.activeDateFilter = undefined;
        this.filterData(undefined);
        this.clearOptionFilter();
        this.dropdown.closePanel();
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    getNextSortDirection(direction) {
        if (!direction) {
            return 'asc';
        }
        if (direction === 'asc') {
            return 'desc';
        }
        return 'asc';
    }
    /**
     * @private
     * @return {?}
     */
    getDefaultDateFilterOptions() {
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
        return opts;
    }
}
NovoDataTableCellHeader.decorators = [
    { type: Component, args: [{
                selector: '[novo-data-table-cell-config]',
                template: `
    <i class="bhi-{{ labelIcon }} label-icon" *ngIf="labelIcon" data-automation-id="novo-data-table-header-icon"></i>
    <label data-automation-id="novo-data-table-label">{{ label }}</label>
    <div>
      <button
        *ngIf="config.sortable"
        tooltipPosition="right"
        [tooltip]="labels.sort"
        theme="icon"
        [icon]="icon"
        (click)="sort()"
        [class.active]="sortActive"
        data-automation-id="novo-data-table-sort"
        [attr.data-feature-id]="'novo-data-table-sort-' + this.id"
      ></button>
      <novo-dropdown
        *ngIf="config.filterable"
        side="right"
        parentScrollSelector=".novo-data-table-container"
        containerClass="data-table-dropdown"
        data-automation-id="novo-data-table-filter"
      >
        <button
          type="button"
          theme="icon"
          icon="filter"
          [class.active]="filterActive"
          (click)="focusInput()"
          tooltipPosition="right"
          [tooltip]="labels.filters"
          [attr.data-feature-id]="'novo-data-table-filter-' + this.id"
        ></button>
        <div class="header">
          <span>{{ labels.filters }}</span>
          <button
            theme="dialogue"
            color="negative"
            icon="times"
            (click)="clearFilter()"
            *ngIf="filter !== null && filter !== undefined && filter !== ''"
            data-automation-id="novo-data-table-filter-clear"
          >
            {{ labels.clear }}
          </button>
        </div>
        <ng-container [ngSwitch]="config.filterConfig.type">
          <list *ngSwitchCase="'date'">
            <ng-container *ngIf="!showCustomRange">
              <item
                [class.active]="activeDateFilter === option.label"
                *ngFor="let option of config.filterConfig.options"
                (click)="filterData(option)"
                [attr.data-automation-id]="'novo-data-table-filter-' + option.label"
              >
                {{ option.label }} <i class="bhi-check" *ngIf="activeDateFilter === option.label"></i>
              </item>
            </ng-container>
            <item
              [class.active]="labels.customDateRange === activeDateFilter"
              (click)="toggleCustomRange($event, true)"
              *ngIf="config.filterConfig.allowCustomRange && !showCustomRange"
              [keepOpen]="true"
            >
              {{ labels.customDateRange }} <i class="bhi-check" *ngIf="labels.customDateRange === activeDateFilter"></i>
            </item>
            <div class="calendar-container" *ngIf="showCustomRange">
              <div (click)="toggleCustomRange($event, false)"><i class="bhi-previous"></i>{{ labels.backToPresetFilters }}</div>
              <novo-date-picker (onSelect)="filterData($event)" [(ngModel)]="filter" range="true"></novo-date-picker>
            </div>
          </list>
          <list *ngSwitchCase="'select'">
            <item
              [class.active]="filter === option"
              *ngFor="let option of config.filterConfig.options"
              (click)="filterData(option)"
              [attr.data-automation-id]="'novo-data-table-filter-' + (option?.label || option)"
            >
              <span>{{ option?.label || option }}</span>
              <i class="bhi-check" *ngIf="option.hasOwnProperty('value') ? filter === option.value : filter === option"></i>
            </item>
          </list>
          <list *ngSwitchCase="'multi-select'">
            <div class="dropdown-list-filter" (keydown)="multiSelectOptionFilterHandleKeydown($event)">
              <item class="filter-search" keepOpen="true">
                <input
                  [(ngModel)]="optionFilter"
                  (ngModelChange)="multiSelectOptionFilter($event)"
                  #optionFilterInput
                  data-automation-id="novo-data-table-multi-select-option-filter-input"
                />
                <i class="bhi-search"></i>
                <span class="error-text" [hidden]="!error || !multiSelectHasVisibleOptions()">{{ labels.selectFilterOptions }}</span>
              </item>
            </div>
            <div class="dropdown-list-options">
              <item
                *ngFor="let option of config.filterConfig.options"
                [hidden]="multiSelectOptionIsHidden(option)"
                (click)="toggleSelection(option)"
                [attr.data-automation-id]="'novo-data-table-filter-' + (option?.label || option)"
                [keepOpen]="true"
              >
                <span>{{ option?.label || option }}</span>
                <i
                  [class.bhi-checkbox-empty]="!isSelected(option, multiSelectedOptions)"
                  [class.bhi-checkbox-filled]="isSelected(option, multiSelectedOptions)"
                ></i>
              </item>
            </div>
            <p class="filter-null-results" [hidden]="multiSelectHasVisibleOptions()">{{ labels.pickerEmpty }}</p>
          </list>
          <list *ngSwitchCase="'custom'">
            <item class="filter-search" keepOpen="true">
              <ng-container *ngTemplateOutlet="filterTemplate; context: { $implicit: config }"></ng-container>
            </item>
          </list>
          <list *ngSwitchDefault>
            <item class="filter-search" keepOpen="true">
              <input
                [type]="config.filterConfig.type"
                [(ngModel)]="filter"
                (ngModelChange)="filterData($event)"
                #filterInput
                data-automation-id="novo-data-table-filter-input"
              />
            </item>
          </list>
        </ng-container>
        <div class="footer" *ngIf="multiSelect">
          <button theme="dialogue" color="dark" (click)="cancel()" data-automation-id="novo-data-table-multi-select-cancel">
            {{ labels.cancel }}
          </button>
          <button theme="dialogue" color="positive" (click)="filterMultiSelect()" data-automation-id="novo-data-table-multi-select-filter">
            {{ labels.filters }}
          </button>
        </div>
      </novo-dropdown>
    </div>
    <div class="spacer"></div>
    <div class="data-table-header-resizable" *ngIf="config.resizable"><span (mousedown)="startResize($event)">&nbsp;</span></div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NovoDataTableCellHeader.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NovoLabelService },
    { type: DataTableState },
    { type: Renderer2 },
    { type: ElementRef },
    { type: NovoDataTableSortFilter, decorators: [{ type: Optional }] },
    { type: CdkColumnDef, decorators: [{ type: Optional }] }
];
NovoDataTableCellHeader.propDecorators = {
    filterInput: [{ type: ViewChild, args: ['filterInput', { static: false },] }],
    dropdown: [{ type: ViewChild, args: [NovoDropdownElement, { static: false },] }],
    optionFilterInput: [{ type: ViewChild, args: ['optionFilterInput', { static: false },] }],
    defaultSort: [{ type: Input }],
    allowMultipleFilters: [{ type: Input }],
    resized: [{ type: Input }],
    filterTemplate: [{ type: Input }],
    resizable: [{ type: HostBinding, args: ['class.resizable',] }],
    column: [{ type: Input, args: ['novo-data-table-cell-config',] }],
    multiSelectOptionFilterHandleKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    NovoDataTableCellHeader.prototype.filterInput;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.dropdown;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.optionFilterInput;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.defaultSort;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.allowMultipleFilters;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.resized;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.filterTemplate;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.resizable;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableCellHeader.prototype._rerenderSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableCellHeader.prototype.changeTimeout;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.label;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.icon;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.labelIcon;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.id;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.filter;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.direction;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.filterActive;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.sortActive;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.showCustomRange;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.activeDateFilter;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.config;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.multiSelect;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.multiSelectedOptions;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableCellHeader.prototype.multiSelectedOptionIsHidden;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.optionFilter;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.error;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableCellHeader.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableCellHeader.prototype._column;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableCellHeader.prototype.changeDetectorRef;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.labels;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableCellHeader.prototype.state;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableCellHeader.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableCellHeader.prototype.elementRef;
    /** @type {?} */
    NovoDataTableCellHeader.prototype._sort;
    /** @type {?} */
    NovoDataTableCellHeader.prototype._cdkColumnDef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbE4sT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDeEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFtSm5FLE1BQU0sT0FBTyx1QkFBdUI7Ozs7Ozs7Ozs7SUF5RmxDLFlBQ1UsaUJBQW9DLEVBQ3JDLE1BQXdCLEVBQ3ZCLEtBQXdCLEVBQ3hCLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ1gsS0FBaUMsRUFDakMsYUFBMkI7UUFOdEMsc0JBQWlCLEdBQWpCLGlC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Q0YsOENBQW9DOztJQUNwQyx1REFBNkM7Ozs7O0lBQzdDLDhEQUFvSDs7SUFDcEgsK0NBQWlDOztJQUNqQyx3Q0FBOEI7Ozs7O0lBQzlCLGdEQUEyQzs7Ozs7SUFDM0MsMENBQXFDOzs7OztJQUduQyxvREFBNEM7O0lBQzVDLHlDQUErQjs7Ozs7SUFDL0Isd0NBQWdDOzs7OztJQUNoQywyQ0FBMkI7Ozs7O0lBQzNCLDZDQUE4Qjs7SUFDOUIsd0NBQW9EOztJQUNwRCxnREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtDb2x1bW5EZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPcHRpb25hbCwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5pbXBvcnQgeyBOb3ZvRHJvcGRvd25FbGVtZW50IH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vRHJvcGRvd24nO1xuaW1wb3J0IHsgSURhdGFUYWJsZUNoYW5nZUV2ZW50LCBJRGF0YVRhYmxlQ29sdW1uLCBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnLCBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uLCBJRGF0YVRhYmxlQ29sdW1uU29ydENvbmZpZywgSURhdGFUYWJsZVNvcnRGaWx0ZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVGaWx0ZXJVdGlscyB9IGZyb20gJy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtZmlsdGVyLXV0aWxzJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVTb3J0RmlsdGVyIH0gZnJvbSAnLi4vc29ydC1maWx0ZXIvc29ydC1maWx0ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGFUYWJsZVN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25vdm8tZGF0YS10YWJsZS1jZWxsLWNvbmZpZ10nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpIGNsYXNzPVwiYmhpLXt7IGxhYmVsSWNvbiB9fSBsYWJlbC1pY29uXCIgKm5nSWY9XCJsYWJlbEljb25cIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtaGVhZGVyLWljb25cIj48L2k+XG4gICAgPGxhYmVsIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1sYWJlbFwiPnt7IGxhYmVsIH19PC9sYWJlbD5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICAqbmdJZj1cImNvbmZpZy5zb3J0YWJsZVwiXG4gICAgICAgIHRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgW3Rvb2x0aXBdPVwibGFiZWxzLnNvcnRcIlxuICAgICAgICB0aGVtZT1cImljb25cIlxuICAgICAgICBbaWNvbl09XCJpY29uXCJcbiAgICAgICAgKGNsaWNrKT1cInNvcnQoKVwiXG4gICAgICAgIFtjbGFzcy5hY3RpdmVdPVwic29ydEFjdGl2ZVwiXG4gICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1zb3J0XCJcbiAgICAgICAgW2F0dHIuZGF0YS1mZWF0dXJlLWlkXT1cIidub3ZvLWRhdGEtdGFibGUtc29ydC0nICsgdGhpcy5pZFwiXG4gICAgICA+PC9idXR0b24+XG4gICAgICA8bm92by1kcm9wZG93blxuICAgICAgICAqbmdJZj1cImNvbmZpZy5maWx0ZXJhYmxlXCJcbiAgICAgICAgc2lkZT1cInJpZ2h0XCJcbiAgICAgICAgcGFyZW50U2Nyb2xsU2VsZWN0b3I9XCIubm92by1kYXRhLXRhYmxlLWNvbnRhaW5lclwiXG4gICAgICAgIGNvbnRhaW5lckNsYXNzPVwiZGF0YS10YWJsZS1kcm9wZG93blwiXG4gICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1maWx0ZXJcIlxuICAgICAgPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdGhlbWU9XCJpY29uXCJcbiAgICAgICAgICBpY29uPVwiZmlsdGVyXCJcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImZpbHRlckFjdGl2ZVwiXG4gICAgICAgICAgKGNsaWNrKT1cImZvY3VzSW5wdXQoKVwiXG4gICAgICAgICAgdG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgIFt0b29sdGlwXT1cImxhYmVscy5maWx0ZXJzXCJcbiAgICAgICAgICBbYXR0ci5kYXRhLWZlYXR1cmUtaWRdPVwiJ25vdm8tZGF0YS10YWJsZS1maWx0ZXItJyArIHRoaXMuaWRcIlxuICAgICAgICA+PC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8c3Bhbj57eyBsYWJlbHMuZmlsdGVycyB9fTwvc3Bhbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0aGVtZT1cImRpYWxvZ3VlXCJcbiAgICAgICAgICAgIGNvbG9yPVwibmVnYXRpdmVcIlxuICAgICAgICAgICAgaWNvbj1cInRpbWVzXCJcbiAgICAgICAgICAgIChjbGljayk9XCJjbGVhckZpbHRlcigpXCJcbiAgICAgICAgICAgICpuZ0lmPVwiZmlsdGVyICE9PSBudWxsICYmIGZpbHRlciAhPT0gdW5kZWZpbmVkICYmIGZpbHRlciAhPT0gJydcIlxuICAgICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWZpbHRlci1jbGVhclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgbGFiZWxzLmNsZWFyIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJjb25maWcuZmlsdGVyQ29uZmlnLnR5cGVcIj5cbiAgICAgICAgICA8bGlzdCAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUnXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXNob3dDdXN0b21SYW5nZVwiPlxuICAgICAgICAgICAgICA8aXRlbVxuICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiYWN0aXZlRGF0ZUZpbHRlciA9PT0gb3B0aW9uLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImZpbHRlckRhdGEob3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWRhdGEtdGFibGUtZmlsdGVyLScgKyBvcHRpb24ubGFiZWxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgb3B0aW9uLmxhYmVsIH19IDxpIGNsYXNzPVwiYmhpLWNoZWNrXCIgKm5nSWY9XCJhY3RpdmVEYXRlRmlsdGVyID09PSBvcHRpb24ubGFiZWxcIj48L2k+XG4gICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPGl0ZW1cbiAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJsYWJlbHMuY3VzdG9tRGF0ZVJhbmdlID09PSBhY3RpdmVEYXRlRmlsdGVyXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZUN1c3RvbVJhbmdlKCRldmVudCwgdHJ1ZSlcIlxuICAgICAgICAgICAgICAqbmdJZj1cImNvbmZpZy5maWx0ZXJDb25maWcuYWxsb3dDdXN0b21SYW5nZSAmJiAhc2hvd0N1c3RvbVJhbmdlXCJcbiAgICAgICAgICAgICAgW2tlZXBPcGVuXT1cInRydWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBsYWJlbHMuY3VzdG9tRGF0ZVJhbmdlIH19IDxpIGNsYXNzPVwiYmhpLWNoZWNrXCIgKm5nSWY9XCJsYWJlbHMuY3VzdG9tRGF0ZVJhbmdlID09PSBhY3RpdmVEYXRlRmlsdGVyXCI+PC9pPlxuICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWNvbnRhaW5lclwiICpuZ0lmPVwic2hvd0N1c3RvbVJhbmdlXCI+XG4gICAgICAgICAgICAgIDxkaXYgKGNsaWNrKT1cInRvZ2dsZUN1c3RvbVJhbmdlKCRldmVudCwgZmFsc2UpXCI+PGkgY2xhc3M9XCJiaGktcHJldmlvdXNcIj48L2k+e3sgbGFiZWxzLmJhY2tUb1ByZXNldEZpbHRlcnMgfX08L2Rpdj5cbiAgICAgICAgICAgICAgPG5vdm8tZGF0ZS1waWNrZXIgKG9uU2VsZWN0KT1cImZpbHRlckRhdGEoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwiZmlsdGVyXCIgcmFuZ2U9XCJ0cnVlXCI+PC9ub3ZvLWRhdGUtcGlja2VyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saXN0PlxuICAgICAgICAgIDxsaXN0ICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiPlxuICAgICAgICAgICAgPGl0ZW1cbiAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJmaWx0ZXIgPT09IG9wdGlvblwiXG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImZpbHRlckRhdGEob3B0aW9uKVwiXG4gICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1kYXRhLXRhYmxlLWZpbHRlci0nICsgKG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPnt7IG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uIH19PC9zcGFuPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jaGVja1wiICpuZ0lmPVwib3B0aW9uLmhhc093blByb3BlcnR5KCd2YWx1ZScpID8gZmlsdGVyID09PSBvcHRpb24udmFsdWUgOiBmaWx0ZXIgPT09IG9wdGlvblwiPjwvaT5cbiAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgPGxpc3QgKm5nU3dpdGNoQ2FzZT1cIidtdWx0aS1zZWxlY3QnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbGlzdC1maWx0ZXJcIiAoa2V5ZG93bik9XCJtdWx0aVNlbGVjdE9wdGlvbkZpbHRlckhhbmRsZUtleWRvd24oJGV2ZW50KVwiPlxuICAgICAgICAgICAgICA8aXRlbSBjbGFzcz1cImZpbHRlci1zZWFyY2hcIiBrZWVwT3Blbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwib3B0aW9uRmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm11bHRpU2VsZWN0T3B0aW9uRmlsdGVyKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgI29wdGlvbkZpbHRlcklucHV0XG4gICAgICAgICAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtbXVsdGktc2VsZWN0LW9wdGlvbi1maWx0ZXItaW5wdXRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktc2VhcmNoXCI+PC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiIFtoaWRkZW5dPVwiIWVycm9yIHx8ICFtdWx0aVNlbGVjdEhhc1Zpc2libGVPcHRpb25zKClcIj57eyBsYWJlbHMuc2VsZWN0RmlsdGVyT3B0aW9ucyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbGlzdC1vcHRpb25zXCI+XG4gICAgICAgICAgICAgIDxpdGVtXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgIFtoaWRkZW5dPVwibXVsdGlTZWxlY3RPcHRpb25Jc0hpZGRlbihvcHRpb24pXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlU2VsZWN0aW9uKG9wdGlvbilcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1kYXRhLXRhYmxlLWZpbHRlci0nICsgKG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgW2tlZXBPcGVuXT1cInRydWVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgb3B0aW9uPy5sYWJlbCB8fCBvcHRpb24gfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5iaGktY2hlY2tib3gtZW1wdHldPVwiIWlzU2VsZWN0ZWQob3B0aW9uLCBtdWx0aVNlbGVjdGVkT3B0aW9ucylcIlxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmJoaS1jaGVja2JveC1maWxsZWRdPVwiaXNTZWxlY3RlZChvcHRpb24sIG11bHRpU2VsZWN0ZWRPcHRpb25zKVwiXG4gICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImZpbHRlci1udWxsLXJlc3VsdHNcIiBbaGlkZGVuXT1cIm11bHRpU2VsZWN0SGFzVmlzaWJsZU9wdGlvbnMoKVwiPnt7IGxhYmVscy5waWNrZXJFbXB0eSB9fTwvcD5cbiAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgPGxpc3QgKm5nU3dpdGNoQ2FzZT1cIidjdXN0b20nXCI+XG4gICAgICAgICAgICA8aXRlbSBjbGFzcz1cImZpbHRlci1zZWFyY2hcIiBrZWVwT3Blbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZpbHRlclRlbXBsYXRlOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29uZmlnIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgPGxpc3QgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiZmlsdGVyLXNlYXJjaFwiIGtlZXBPcGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBbdHlwZV09XCJjb25maWcuZmlsdGVyQ29uZmlnLnR5cGVcIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmlsdGVyXCJcbiAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJmaWx0ZXJEYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAgICNmaWx0ZXJJbnB1dFxuICAgICAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1maWx0ZXItaW5wdXRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIiAqbmdJZj1cIm11bHRpU2VsZWN0XCI+XG4gICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImRpYWxvZ3VlXCIgY29sb3I9XCJkYXJrXCIgKGNsaWNrKT1cImNhbmNlbCgpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLW11bHRpLXNlbGVjdC1jYW5jZWxcIj5cbiAgICAgICAgICAgIHt7IGxhYmVscy5jYW5jZWwgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiBjb2xvcj1cInBvc2l0aXZlXCIgKGNsaWNrKT1cImZpbHRlck11bHRpU2VsZWN0KClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtbXVsdGktc2VsZWN0LWZpbHRlclwiPlxuICAgICAgICAgICAge3sgbGFiZWxzLmZpbHRlcnMgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25vdm8tZHJvcGRvd24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNwYWNlclwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkYXRhLXRhYmxlLWhlYWRlci1yZXNpemFibGVcIiAqbmdJZj1cImNvbmZpZy5yZXNpemFibGVcIj48c3BhbiAobW91c2Vkb3duKT1cInN0YXJ0UmVzaXplKCRldmVudClcIj4mbmJzcDs8L3NwYW4+PC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlQ2VsbEhlYWRlcjxUPiBpbXBsZW1lbnRzIElEYXRhVGFibGVTb3J0RmlsdGVyLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2ZpbHRlcklucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIGZpbHRlcklucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKE5vdm9Ecm9wZG93bkVsZW1lbnQsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBkcm9wZG93bjogTm92b0Ryb3Bkb3duRWxlbWVudDtcbiAgQFZpZXdDaGlsZCgnb3B0aW9uRmlsdGVySW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgb3B0aW9uRmlsdGVySW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KClcbiAgZGVmYXVsdFNvcnQ6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9O1xuXG4gIEBJbnB1dCgpXG4gIGFsbG93TXVsdGlwbGVGaWx0ZXJzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgcmVzaXplZDogRXZlbnRFbWl0dGVyPElEYXRhVGFibGVDb2x1bW48VD4+O1xuICBASW5wdXQoKVxuICBmaWx0ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5yZXNpemFibGUnKVxuICBwdWJsaWMgcmVzaXphYmxlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgnbm92by1kYXRhLXRhYmxlLWNlbGwtY29uZmlnJylcbiAgc2V0IGNvbHVtbihjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pIHtcbiAgICB0aGlzLl9jb2x1bW4gPSBjb2x1bW47XG4gICAgdGhpcy5sYWJlbCA9IGNvbHVtbi50eXBlID09PSAnYWN0aW9uJyA/ICcnIDogY29sdW1uLmxhYmVsO1xuICAgIHRoaXMubGFiZWxJY29uID0gY29sdW1uLmxhYmVsSWNvbjtcblxuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgc29ydGFibGU6ICEhY29sdW1uLnNvcnRhYmxlLFxuICAgICAgZmlsdGVyYWJsZTogISFjb2x1bW4uZmlsdGVyYWJsZSxcbiAgICAgIHJlc2l6YWJsZTogISFjb2x1bW4ucmVzaXphYmxlLFxuICAgIH07XG4gICAgdGhpcy5yZXNpemFibGUgPSB0aGlzLmNvbmZpZy5yZXNpemFibGU7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm1zOiB7IGZpbHRlcj86IEZ1bmN0aW9uOyBzb3J0PzogRnVuY3Rpb24gfSA9IHt9O1xuXG4gICAgaWYgKGNvbHVtbi5maWx0ZXJhYmxlICYmIEhlbHBlcnMuaXNPYmplY3QoY29sdW1uLmZpbHRlcmFibGUpKSB7XG4gICAgICB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcgPSBjb2x1bW4uZmlsdGVyYWJsZSBhcyBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnO1xuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSkge1xuICAgICAgICB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcgPSB7IHR5cGU6ICd0ZXh0JyB9O1xuICAgICAgfVxuICAgICAgaWYgKChjb2x1bW4uZmlsdGVyYWJsZSBhcyBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnKS50cmFuc2Zvcm0pIHtcbiAgICAgICAgdHJhbnNmb3Jtcy5maWx0ZXIgPSAoY29sdW1uLmZpbHRlcmFibGUgYXMgSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZykudHJhbnNmb3JtO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcgPSB7IHR5cGU6ICd0ZXh0JyB9O1xuICAgIH1cblxuICAgIGlmIChjb2x1bW4uc29ydGFibGUgJiYgSGVscGVycy5pc09iamVjdChjb2x1bW4uc29ydGFibGUpKSB7XG4gICAgICBpZiAoKGNvbHVtbi5zb3J0YWJsZSBhcyBJRGF0YVRhYmxlQ29sdW1uU29ydENvbmZpZykudHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybXMuc29ydCA9IChjb2x1bW4uc29ydGFibGUgYXMgSURhdGFUYWJsZUNvbHVtblNvcnRDb25maWcpLnRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUgPT09ICdkYXRlJyAmJiAhdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zID0gdGhpcy5nZXREZWZhdWx0RGF0ZUZpbHRlck9wdGlvbnMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbmZpZy50cmFuc2Zvcm1zID0gdHJhbnNmb3JtcztcbiAgfVxuXG4gIHByaXZhdGUgX3JlcmVuZGVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgY2hhbmdlVGltZW91dDogYW55O1xuXG4gIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuICBwdWJsaWMgaWNvbjogc3RyaW5nID0gJ3NvcnRhYmxlJztcbiAgcHVibGljIGxhYmVsSWNvbjogc3RyaW5nO1xuICBwdWJsaWMgaWQ6IHN0cmluZztcbiAgcHVibGljIGZpbHRlcjogYW55O1xuICBwdWJsaWMgZGlyZWN0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyBmaWx0ZXJBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNvcnRBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNob3dDdXN0b21SYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgYWN0aXZlRGF0ZUZpbHRlcjogc3RyaW5nO1xuICBwdWJsaWMgY29uZmlnOiB7XG4gICAgc29ydGFibGU6IGJvb2xlYW47XG4gICAgZmlsdGVyYWJsZTogYm9vbGVhbjtcbiAgICByZXNpemFibGU6IGJvb2xlYW47XG4gICAgdHJhbnNmb3Jtcz86IHsgZmlsdGVyPzogRnVuY3Rpb247IHNvcnQ/OiBGdW5jdGlvbiB9O1xuICAgIGZpbHRlckNvbmZpZz86IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWc7XG4gIH07XG4gIHB1YmxpYyBtdWx0aVNlbGVjdDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgbXVsdGlTZWxlY3RlZE9wdGlvbnM6IEFycmF5PGFueT4gPSBbXTtcbiAgcHJpdmF0ZSBtdWx0aVNlbGVjdGVkT3B0aW9uSXNIaWRkZW46IEFycmF5PHsgb3B0aW9uOiBzdHJpbmcgfCBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uOyBoaWRkZW46IGJvb2xlYW4gfT4gPSBbXTtcbiAgcHVibGljIG9wdGlvbkZpbHRlcjogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBlcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgX2NvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RhdGU6IERhdGFUYWJsZVN0YXRlPFQ+LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIF9zb3J0OiBOb3ZvRGF0YVRhYmxlU29ydEZpbHRlcjxUPixcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgX2Nka0NvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLFxuICApIHtcbiAgICB0aGlzLl9yZXJlbmRlclN1YnNjcmlwdGlvbiA9IHN0YXRlLnVwZGF0ZXMuc3Vic2NyaWJlKChjaGFuZ2U6IElEYXRhVGFibGVDaGFuZ2VFdmVudCkgPT4gdGhpcy5jaGVja1NvcnRGaWx0ZXJTdGF0ZShjaGFuZ2UpKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY2RrQ29sdW1uRGVmKSB7XG4gICAgICB0aGlzLmlkID0gdGhpcy5fY2RrQ29sdW1uRGVmLm5hbWU7XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja1NvcnRGaWx0ZXJTdGF0ZSh7IGZpbHRlcjogdGhpcy5zdGF0ZS5maWx0ZXIsIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCB9LCB0cnVlKTtcblxuICAgIHRoaXMubXVsdGlTZWxlY3QgPSB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcgJiYgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUgPyB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSA9PT0gJ211bHRpLXNlbGVjdCcgOiBmYWxzZTtcbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuZmlsdGVyID8gWy4uLnRoaXMuZmlsdGVyXSA6IFtdO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlcmVuZGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goKHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uKSA9PiB7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjaGVja1NvcnRGaWx0ZXJTdGF0ZShzb3J0RmlsdGVyU3RhdGU6IElEYXRhVGFibGVDaGFuZ2VFdmVudCwgaW5pdGlhbENvbmZpZzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKHNvcnRGaWx0ZXJTdGF0ZS5zb3J0ICYmIHNvcnRGaWx0ZXJTdGF0ZS5zb3J0LmlkID09PSB0aGlzLmlkKSB7XG4gICAgICB0aGlzLmljb24gPSBgc29ydC0ke3NvcnRGaWx0ZXJTdGF0ZS5zb3J0LnZhbHVlfWA7XG4gICAgICB0aGlzLnNvcnRBY3RpdmUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmljb24gPSAnc29ydGFibGUnO1xuICAgICAgdGhpcy5zb3J0QWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgdGFibGVGaWx0ZXIgPSBIZWxwZXJzLmNvbnZlcnRUb0FycmF5KHNvcnRGaWx0ZXJTdGF0ZS5maWx0ZXIpO1xuICAgIGNvbnN0IHRoaXNGaWx0ZXIgPSB0YWJsZUZpbHRlci5maW5kKChmaWx0ZXIpID0+IGZpbHRlciAmJiBmaWx0ZXIuaWQgPT09IHRoaXMuaWQpO1xuXG4gICAgaWYgKHRoaXNGaWx0ZXIpIHtcbiAgICAgIHRoaXMuZmlsdGVyQWN0aXZlID0gdHJ1ZTtcbiAgICAgIGlmIChpbml0aWFsQ29uZmlnICYmIHRoaXNGaWx0ZXIudHlwZSA9PT0gJ2RhdGUnICYmIHRoaXNGaWx0ZXIuc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlRmlsdGVyID0gdGhpc0ZpbHRlci5zZWxlY3RlZE9wdGlvbi5sYWJlbCB8fCB0aGlzLmxhYmVscy5jdXN0b21EYXRlUmFuZ2U7XG4gICAgICB9XG4gICAgICB0aGlzLmZpbHRlciA9IHRoaXNGaWx0ZXIudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyQWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZUZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGVmYXVsdFNvcnQgJiYgdGhpcy5pZCA9PT0gdGhpcy5kZWZhdWx0U29ydC5pZCkge1xuICAgICAgdGhpcy5pY29uID0gYHNvcnQtJHt0aGlzLmRlZmF1bHRTb3J0LnZhbHVlfWA7XG4gICAgICB0aGlzLnNvcnRBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLm11bHRpU2VsZWN0ID0gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnICYmIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID8gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUgPT09ICdtdWx0aS1zZWxlY3QnIDogZmFsc2U7XG4gICAgaWYgKHRoaXMubXVsdGlTZWxlY3QpIHtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmZpbHRlciA/IFsuLi50aGlzLmZpbHRlcl0gOiBbXTtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuID0gKHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zIGFzIHN0cmluZ1tdKS5tYXAoXG4gICAgICAgICAgICAob3B0aW9uOiBzdHJpbmcpOiB7IG9wdGlvbjogc3RyaW5nOyBoaWRkZW46IGJvb2xlYW4gfSA9PiAoeyBvcHRpb24sIGhpZGRlbjogZmFsc2UgfSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbiA9ICh0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9ucyBhcyBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uW10pLm1hcChcbiAgICAgICAgICAgIChvcHRpb246IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb24pOiB7IG9wdGlvbjogSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbjsgaGlkZGVuOiBib29sZWFuIH0gPT4gKHtcbiAgICAgICAgICAgICAgb3B0aW9uLFxuICAgICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIGlzU2VsZWN0ZWQob3B0aW9uLCBvcHRpb25zTGlzdCkge1xuICAgIGlmIChvcHRpb25zTGlzdCkge1xuICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBvcHRpb24uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPyBvcHRpb24udmFsdWUgOiBvcHRpb247XG5cbiAgICAgIGNvbnN0IGZvdW5kID0gb3B0aW9uc0xpc3QuZmluZCgoaXRlbSkgPT4gdGhpcy5vcHRpb25QcmVzZW50Q2hlY2soaXRlbSwgb3B0aW9uVmFsdWUpKTtcbiAgICAgIHJldHVybiBmb3VuZCAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VsZWN0aW9uKG9wdGlvbikge1xuICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uLmhhc093blByb3BlcnR5KCd2YWx1ZScpID8gb3B0aW9uLnZhbHVlIDogb3B0aW9uO1xuXG4gICAgY29uc3Qgb3B0aW9uSW5kZXggPSB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zLmZpbmRJbmRleCgoaXRlbSkgPT4gdGhpcy5vcHRpb25QcmVzZW50Q2hlY2soaXRlbSwgb3B0aW9uVmFsdWUpKTtcbiAgICB0aGlzLmVycm9yID0gZmFsc2U7XG4gICAgaWYgKG9wdGlvbkluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMuc3BsaWNlKG9wdGlvbkluZGV4LCAxKTtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5vcHRpb25GaWx0ZXIgJiZcbiAgICAgICAgIXRoaXMuZ2V0T3B0aW9uVGV4dChvcHRpb24pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAuc3RhcnRzV2l0aCh0aGlzLm9wdGlvbkZpbHRlci50b0xvd2VyQ2FzZSgpKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuW3RoaXMubXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuLmZpbmRJbmRleCgocmVjb3JkKSA9PiByZWNvcmQub3B0aW9uID09PSBvcHRpb24pXS5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zLnB1c2gob3B0aW9uVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvcHRpb25QcmVzZW50Q2hlY2soaXRlbSwgb3B0aW9uVmFsdWUpOiBib29sZWFuIHtcbiAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgcmV0dXJuIGl0ZW0udmFsdWUgPT09IG9wdGlvblZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXRlbSA9PT0gb3B0aW9uVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zID0gdGhpcy5maWx0ZXIgPyBbLi4udGhpcy5maWx0ZXJdIDogW107XG4gICAgdGhpcy5kcm9wZG93bi5jbG9zZVBhbmVsKCk7XG4gICAgdGhpcy5jbGVhck9wdGlvbkZpbHRlcigpO1xuICB9XG5cbiAgcHVibGljIGZpbHRlck11bHRpU2VsZWN0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCAmJiAhdGhpcy5maWx0ZXIpIHtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RIYXNWaXNpYmxlT3B0aW9ucygpICYmIHRoaXMuZHJvcGRvd24gPyAodGhpcy5lcnJvciA9IHRydWUpIDogbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhck9wdGlvbkZpbHRlcigpO1xuICAgICAgY29uc3QgYWN0dWFsRmlsdGVyID0gdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwID8gWy4uLnRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnNdIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5maWx0ZXJEYXRhKGFjdHVhbEZpbHRlcik7XG4gICAgICB0aGlzLmRyb3Bkb3duLmNsb3NlUGFuZWwoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbXVsdGlTZWxlY3RPcHRpb25GaWx0ZXIob3B0aW9uRmlsdGVyOiBzdHJpbmcpIHtcbiAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbi5mb3JFYWNoKChyZWNvcmQpID0+IHtcbiAgICAgIGlmIChyZWNvcmQub3B0aW9uKSB7XG4gICAgICAgIHJlY29yZC5oaWRkZW4gPSAhKFxuICAgICAgICAgIHRoaXMuZ2V0T3B0aW9uVGV4dChyZWNvcmQub3B0aW9uKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5zdGFydHNXaXRoKG9wdGlvbkZpbHRlci50b0xvd2VyQ2FzZSgpKSB8fCB0aGlzLmlzU2VsZWN0ZWQocmVjb3JkLm9wdGlvbiwgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucylcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBtdWx0aVNlbGVjdE9wdGlvbklzSGlkZGVuKG9wdGlvbjogc3RyaW5nIHwgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbi5maW5kKChyZWNvcmQpID0+IHJlY29yZC5vcHRpb24gPT09IG9wdGlvbikuaGlkZGVuO1xuICB9XG5cbiAgcHVibGljIG11bHRpU2VsZWN0SGFzVmlzaWJsZU9wdGlvbnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuLnNvbWUoKHJlY29yZCkgPT4gIXJlY29yZC5oaWRkZW4pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcHRpb25UZXh0KG9wdGlvbjogc3RyaW5nIHwgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbik6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb24gIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gb3B0aW9uLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9wdCA9IG9wdGlvbiBhcyBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uO1xuICAgICAgcmV0dXJuIChvcHQubGFiZWwubGVuZ3RoID4gMCA/IG9wdC5sYWJlbCA6IG9wdC52YWx1ZSkudG9TdHJpbmcoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG11bHRpU2VsZWN0T3B0aW9uRmlsdGVySGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0KSB7XG4gICAgICB0aGlzLmVycm9yID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5kcm9wZG93bi5wYW5lbE9wZW4gJiYgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRVNDKSB7XG4gICAgICAgIC8vIGVzY2FwZSA9IGNsZWFyIHRleHQgYm94IGFuZCBjbG9zZVxuICAgICAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICAgIHRoaXMuY2xlYXJPcHRpb25GaWx0ZXIoKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5jbG9zZVBhbmVsKCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVOVEVSKSB7XG4gICAgICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAgICAgdGhpcy5maWx0ZXJNdWx0aVNlbGVjdCgpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPj0gNjUgJiYgZXZlbnQua2V5Q29kZSA8PSA5MCkgfHxcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPj0gOTYgJiYgZXZlbnQua2V5Q29kZSA8PSAxMDUpIHx8XG4gICAgICAgIChldmVudC5rZXlDb2RlID49IDQ4ICYmIGV2ZW50LmtleUNvZGUgPD0gNTcpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5vcHRpb25GaWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhck9wdGlvbkZpbHRlcigpIHtcbiAgICB0aGlzLmVycm9yID0gZmFsc2U7XG4gICAgaWYgKHRoaXMub3B0aW9uRmlsdGVyLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMub3B0aW9uRmlsdGVyID0gJyc7XG4gICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbi5mb3JFYWNoKChyZWNvcmQpID0+IHtcbiAgICAgICAgcmVjb3JkLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXJ0UmVzaXplKG1vdXNlRG93bkV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgbW91c2VEb3duRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBtaW5pbXVtV2lkdGggPSA2MCArICh0aGlzLmNvbmZpZy5maWx0ZXJhYmxlID8gMzAgOiAwKSArICh0aGlzLmNvbmZpZy5zb3J0YWJsZSA/IDMwIDogMCk7XG4gICAgY29uc3Qgc3RhcnRpbmdXaWR0aDogbnVtYmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgY29uc3QgbW91c2VNb3ZlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQod2luZG93LmRvY3VtZW50LCAnbW91c2Vtb3ZlJykuc3Vic2NyaWJlKChtaWRkbGVNb3VzZUV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBkaWZmZXJlbmNlV2lkdGg6IG51bWJlciA9IG1pZGRsZU1vdXNlRXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bkV2ZW50LmNsaWVudFg7XG4gICAgICBsZXQgd2lkdGg6IG51bWJlciA9IHN0YXJ0aW5nV2lkdGggKyBkaWZmZXJlbmNlV2lkdGg7XG4gICAgICBpZiAod2lkdGggPCBtaW5pbXVtV2lkdGgpIHtcbiAgICAgICAgd2lkdGggPSBtaW5pbXVtV2lkdGg7XG4gICAgICB9XG4gICAgICB0aGlzLl9jb2x1bW4ud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtaW4td2lkdGgnLCBgJHt0aGlzLl9jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXgtd2lkdGgnLCBgJHt0aGlzLl9jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuX2NvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMucmVzaXplZC5uZXh0KHRoaXMuX2NvbHVtbik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtb3VzZVVwU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQod2luZG93LmRvY3VtZW50LCAnbW91c2V1cCcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBtb3VzZVVwU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICBtb3VzZU1vdmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2gobW91c2VNb3ZlU3Vic2NyaXB0aW9uKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChtb3VzZVVwU3Vic2NyaXB0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVDdXN0b21SYW5nZShldmVudDogRXZlbnQsIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuc2hvd0N1c3RvbVJhbmdlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmRyb3Bkb3duLm9wZW5QYW5lbCgpOyAvLyBFbnN1cmVzIHRoYXQgdGhlIHBhbmVsIGNvcnJlY3RseSB1cGRhdGVzIHRvIHRoZSBkeW5hbWljIHNpemUgb2YgdGhlIGRyb3Bkb3duXG4gIH1cblxuICBwdWJsaWMgZm9jdXNJbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maWx0ZXJJbnB1dCAmJiB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCksIDApO1xuICAgIH1cbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCAmJiB0aGlzLmRyb3Bkb3duKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duLm9uS2V5RG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLm11bHRpU2VsZWN0T3B0aW9uRmlsdGVySGFuZGxlS2V5ZG93bihldmVudCk7XG4gICAgICB9O1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9wdGlvbkZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSwgMCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzb3J0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYW5nZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNoYW5nZVRpbWVvdXQpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5nZXROZXh0U29ydERpcmVjdGlvbih0aGlzLmRpcmVjdGlvbik7XG4gICAgICB0aGlzLl9zb3J0LnNvcnQodGhpcy5pZCwgdGhpcy5kaXJlY3Rpb24sIHRoaXMuY29uZmlnLnRyYW5zZm9ybXMuc29ydCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyRGF0YShmaWx0ZXI/OiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgYWN0dWFsRmlsdGVyID0gTm92b0RhdGFUYWJsZUZpbHRlclV0aWxzLmNvbnN0cnVjdEZpbHRlcihmaWx0ZXIsIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlLCB0aGlzLm11bHRpU2VsZWN0KTtcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID09PSAnZGF0ZScgJiYgZmlsdGVyID8gZmlsdGVyIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKHRoaXMuY2hhbmdlVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2hhbmdlVGltZW91dCk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoYWN0dWFsRmlsdGVyID09PSAnJykge1xuICAgICAgICBhY3R1YWxGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9zb3J0LmZpbHRlcihcbiAgICAgICAgdGhpcy5pZCxcbiAgICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUsXG4gICAgICAgIGFjdHVhbEZpbHRlcixcbiAgICAgICAgdGhpcy5jb25maWcudHJhbnNmb3Jtcy5maWx0ZXIsXG4gICAgICAgIHRoaXMuYWxsb3dNdWx0aXBsZUZpbHRlcnMsXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uLFxuICAgICAgKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgdGhpcy5hY3RpdmVEYXRlRmlsdGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZmlsdGVyRGF0YSh1bmRlZmluZWQpO1xuICAgIHRoaXMuY2xlYXJPcHRpb25GaWx0ZXIoKTtcbiAgICB0aGlzLmRyb3Bkb3duLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV4dFNvcnREaXJlY3Rpb24oZGlyZWN0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm4gJ2FzYyc7XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdhc2MnKSB7XG4gICAgICByZXR1cm4gJ2Rlc2MnO1xuICAgIH1cbiAgICByZXR1cm4gJ2FzYyc7XG4gIH1cblxuICBwcml2YXRlIGdldERlZmF1bHREYXRlRmlsdGVyT3B0aW9ucygpOiBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uW10ge1xuICAgIGNvbnN0IG9wdHM6IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb25bXSA9IFtcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QxRGF5LCBtaW46IC0xLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3Q3RGF5cywgbWluOiAtNywgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MzBEYXlzLCBtaW46IC0zMCwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0OTBEYXlzLCBtaW46IC05MCwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MVllYXIsIG1pbjogLTM2NiwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MURheSwgbWluOiAwLCBtYXg6IDEgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQ3RGF5cywgbWluOiAwLCBtYXg6IDcgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQzMERheXMsIG1pbjogMCwgbWF4OiAzMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDkwRGF5cywgbWluOiAwLCBtYXg6IDkwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MVllYXIsIG1pbjogMCwgbWF4OiAzNjYgfSxcbiAgICBdO1xuICAgIHJldHVybiBvcHRzO1xuICB9XG59XG4iXX0=