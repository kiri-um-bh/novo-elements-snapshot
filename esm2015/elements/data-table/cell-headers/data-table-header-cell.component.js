/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/cell-headers/data-table-header-cell.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Optional, ViewChild, ElementRef, Renderer2, EventEmitter, HostBinding, TemplateRef, HostListener, } from '@angular/core';
import { CdkColumnDef } from '@angular/cdk/table';
import { fromEvent } from 'rxjs';
import { NovoDataTableSortFilter } from '../sort-filter/sort-filter.directive';
import { NovoDropdownElement } from '../../dropdown/Dropdown';
import { NovoLabelService } from '../../../services/novo-label-service';
import { DataTableState } from '../state/data-table-state.service';
import { Helpers } from '../../../utils/Helpers';
import { NovoDataTableFilterUtils } from '../services/data-table-filter-utils';
import { KeyCodes } from '../../../utils/key-codes/KeyCodes';
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
        let transforms = {};
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
                    (option) => ({ option: option, hidden: false })));
                }
                else {
                    this.multiSelectedOptionIsHidden = ((/** @type {?} */ (this.config.filterConfig.options))).map((/**
                     * @param {?} option
                     * @return {?}
                     */
                    (option) => ({
                        option: option,
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
            let found = optionsList.find((/**
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
        let optionIndex = this.multiSelectedOptions.findIndex((/**
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
            let actualFilter = this.multiSelectedOptions.length > 0 ? [...this.multiSelectedOptions] : undefined;
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
        let startingWidth = this.elementRef.nativeElement.getBoundingClientRect().width;
        /** @type {?} */
        const mouseMoveSubscription = fromEvent(window.document, 'mousemove').subscribe((/**
         * @param {?} middleMouseEvent
         * @return {?}
         */
        (middleMouseEvent) => {
            /** @type {?} */
            let differenceWidth = middleMouseEvent.clientX - mouseDownEvent.clientX;
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
        let mouseUpSubscription = fromEvent(window.document, 'mouseup').subscribe((/**
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
        let opts = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsRUFHUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLFdBQVcsRUFDWCxZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBVy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7O0FBbUo3RCxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7Ozs7O0lBeUZsQyxZQUNVLGlCQUFvQyxFQUNyQyxNQUF3QixFQUN2QixLQUF3QixFQUN4QixRQUFtQixFQUNuQixVQUFzQixFQUNYLEtBQWlDLEVBQ2pDLGFBQTJCO1FBTnRDLHNCQUFpQixHQUFqQixp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QWdDOztJQUNoQyx5Q0FNRTs7SUFDRiw4Q0FBb0M7O0lBQ3BDLHVEQUE2Qzs7Ozs7SUFDN0MsOERBQW9IOztJQUNwSCwrQ0FBaUM7O0lBQ2pDLHdDQUE4Qjs7Ozs7SUFDOUIsZ0RBQTJDOzs7OztJQUMzQywwQ0FBcUM7Ozs7O0lBR25DLG9EQUE0Qzs7SUFDNUMseUNBQStCOzs7OztJQUMvQix3Q0FBZ0M7Ozs7O0lBQ2hDLDJDQUEyQjs7Ozs7SUFDM0IsNkNBQThCOztJQUM5Qix3Q0FBb0Q7O0lBQ3BELGdEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgVGVtcGxhdGVSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtDb2x1bW5EZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgSURhdGFUYWJsZVNvcnRGaWx0ZXIsXG4gIElEYXRhVGFibGVDaGFuZ2VFdmVudCxcbiAgSURhdGFUYWJsZUNvbHVtbixcbiAgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbixcbiAgSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZyxcbiAgSURhdGFUYWJsZUNvbHVtblNvcnRDb25maWcsXG59IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlU29ydEZpbHRlciB9IGZyb20gJy4uL3NvcnQtZmlsdGVyL3NvcnQtZmlsdGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOb3ZvRHJvcGRvd25FbGVtZW50IH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vRHJvcGRvd24nO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL2RhdGEtdGFibGUtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlRmlsdGVyVXRpbHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWZpbHRlci11dGlscyc7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tub3ZvLWRhdGEtdGFibGUtY2VsbC1jb25maWddJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aSBjbGFzcz1cImJoaS17eyBsYWJlbEljb24gfX0gbGFiZWwtaWNvblwiICpuZ0lmPVwibGFiZWxJY29uXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWhlYWRlci1pY29uXCI+PC9pPlxuICAgIDxsYWJlbCBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtbGFiZWxcIj57eyBsYWJlbCB9fTwvbGFiZWw+XG4gICAgPGRpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgKm5nSWY9XCJjb25maWcuc29ydGFibGVcIlxuICAgICAgICB0b29sdGlwUG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgIFt0b29sdGlwXT1cImxhYmVscy5zb3J0XCJcbiAgICAgICAgdGhlbWU9XCJpY29uXCJcbiAgICAgICAgW2ljb25dPVwiaWNvblwiXG4gICAgICAgIChjbGljayk9XCJzb3J0KClcIlxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInNvcnRBY3RpdmVcIlxuICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtc29ydFwiXG4gICAgICAgIFthdHRyLmRhdGEtZmVhdHVyZS1pZF09XCInbm92by1kYXRhLXRhYmxlLXNvcnQtJyArIHRoaXMuaWRcIlxuICAgICAgPjwvYnV0dG9uPlxuICAgICAgPG5vdm8tZHJvcGRvd25cbiAgICAgICAgKm5nSWY9XCJjb25maWcuZmlsdGVyYWJsZVwiXG4gICAgICAgIHNpZGU9XCJyaWdodFwiXG4gICAgICAgIHBhcmVudFNjcm9sbFNlbGVjdG9yPVwiLm5vdm8tZGF0YS10YWJsZS1jb250YWluZXJcIlxuICAgICAgICBjb250YWluZXJDbGFzcz1cImRhdGEtdGFibGUtZHJvcGRvd25cIlxuICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtZmlsdGVyXCJcbiAgICAgID5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgICAgaWNvbj1cImZpbHRlclwiXG4gICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJmaWx0ZXJBY3RpdmVcIlxuICAgICAgICAgIChjbGljayk9XCJmb2N1c0lucHV0KClcIlxuICAgICAgICAgIHRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgICBbdG9vbHRpcF09XCJsYWJlbHMuZmlsdGVyc1wiXG4gICAgICAgICAgW2F0dHIuZGF0YS1mZWF0dXJlLWlkXT1cIidub3ZvLWRhdGEtdGFibGUtZmlsdGVyLScgKyB0aGlzLmlkXCJcbiAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPHNwYW4+e3sgbGFiZWxzLmZpbHRlcnMgfX08L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdGhlbWU9XCJkaWFsb2d1ZVwiXG4gICAgICAgICAgICBjb2xvcj1cIm5lZ2F0aXZlXCJcbiAgICAgICAgICAgIGljb249XCJ0aW1lc1wiXG4gICAgICAgICAgICAoY2xpY2spPVwiY2xlYXJGaWx0ZXIoKVwiXG4gICAgICAgICAgICAqbmdJZj1cImZpbHRlciAhPT0gbnVsbCAmJiBmaWx0ZXIgIT09IHVuZGVmaW5lZCAmJiBmaWx0ZXIgIT09ICcnXCJcbiAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1maWx0ZXItY2xlYXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGxhYmVscy5jbGVhciB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiY29uZmlnLmZpbHRlckNvbmZpZy50eXBlXCI+XG4gICAgICAgICAgPGxpc3QgKm5nU3dpdGNoQ2FzZT1cIidkYXRlJ1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzaG93Q3VzdG9tUmFuZ2VcIj5cbiAgICAgICAgICAgICAgPGl0ZW1cbiAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZURhdGVGaWx0ZXIgPT09IG9wdGlvbi5sYWJlbFwiXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJmaWx0ZXJEYXRhKG9wdGlvbilcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1kYXRhLXRhYmxlLWZpbHRlci0nICsgb3B0aW9uLmxhYmVsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IG9wdGlvbi5sYWJlbCB9fSA8aSBjbGFzcz1cImJoaS1jaGVja1wiICpuZ0lmPVwiYWN0aXZlRGF0ZUZpbHRlciA9PT0gb3B0aW9uLmxhYmVsXCI+PC9pPlxuICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxpdGVtXG4gICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwibGFiZWxzLmN1c3RvbURhdGVSYW5nZSA9PT0gYWN0aXZlRGF0ZUZpbHRlclwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVDdXN0b21SYW5nZSgkZXZlbnQsIHRydWUpXCJcbiAgICAgICAgICAgICAgKm5nSWY9XCJjb25maWcuZmlsdGVyQ29uZmlnLmFsbG93Q3VzdG9tUmFuZ2UgJiYgIXNob3dDdXN0b21SYW5nZVwiXG4gICAgICAgICAgICAgIFtrZWVwT3Blbl09XCJ0cnVlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3sgbGFiZWxzLmN1c3RvbURhdGVSYW5nZSB9fSA8aSBjbGFzcz1cImJoaS1jaGVja1wiICpuZ0lmPVwibGFiZWxzLmN1c3RvbURhdGVSYW5nZSA9PT0gYWN0aXZlRGF0ZUZpbHRlclwiPjwvaT5cbiAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1jb250YWluZXJcIiAqbmdJZj1cInNob3dDdXN0b21SYW5nZVwiPlxuICAgICAgICAgICAgICA8ZGl2IChjbGljayk9XCJ0b2dnbGVDdXN0b21SYW5nZSgkZXZlbnQsIGZhbHNlKVwiPjxpIGNsYXNzPVwiYmhpLXByZXZpb3VzXCI+PC9pPnt7IGxhYmVscy5iYWNrVG9QcmVzZXRGaWx0ZXJzIH19PC9kaXY+XG4gICAgICAgICAgICAgIDxub3ZvLWRhdGUtcGlja2VyIChvblNlbGVjdCk9XCJmaWx0ZXJEYXRhKCRldmVudClcIiBbKG5nTW9kZWwpXT1cImZpbHRlclwiIHJhbmdlPVwidHJ1ZVwiPjwvbm92by1kYXRlLXBpY2tlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICA8bGlzdCAqbmdTd2l0Y2hDYXNlPVwiJ3NlbGVjdCdcIj5cbiAgICAgICAgICAgIDxpdGVtXG4gICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiZmlsdGVyID09PSBvcHRpb25cIlxuICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9uc1wiXG4gICAgICAgICAgICAgIChjbGljayk9XCJmaWx0ZXJEYXRhKG9wdGlvbilcIlxuICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tZGF0YS10YWJsZS1maWx0ZXItJyArIChvcHRpb24/LmxhYmVsIHx8IG9wdGlvbilcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3Bhbj57eyBvcHRpb24/LmxhYmVsIHx8IG9wdGlvbiB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktY2hlY2tcIiAqbmdJZj1cIm9wdGlvbi5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSA/IGZpbHRlciA9PT0gb3B0aW9uLnZhbHVlIDogZmlsdGVyID09PSBvcHRpb25cIj48L2k+XG4gICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgPC9saXN0PlxuICAgICAgICAgIDxsaXN0ICpuZ1N3aXRjaENhc2U9XCInbXVsdGktc2VsZWN0J1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWxpc3QtZmlsdGVyXCIgKGtleWRvd24pPVwibXVsdGlTZWxlY3RPcHRpb25GaWx0ZXJIYW5kbGVLZXlkb3duKCRldmVudClcIj5cbiAgICAgICAgICAgICAgPGl0ZW0gY2xhc3M9XCJmaWx0ZXItc2VhcmNoXCIga2VlcE9wZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm9wdGlvbkZpbHRlclwiXG4gICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJtdWx0aVNlbGVjdE9wdGlvbkZpbHRlcigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICNvcHRpb25GaWx0ZXJJbnB1dFxuICAgICAgICAgICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLW11bHRpLXNlbGVjdC1vcHRpb24tZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiBbaGlkZGVuXT1cIiFlcnJvciB8fCAhbXVsdGlTZWxlY3RIYXNWaXNpYmxlT3B0aW9ucygpXCI+e3sgbGFiZWxzLnNlbGVjdEZpbHRlck9wdGlvbnMgfX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWxpc3Qtb3B0aW9uc1wiPlxuICAgICAgICAgICAgICA8aXRlbVxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zXCJcbiAgICAgICAgICAgICAgICBbaGlkZGVuXT1cIm11bHRpU2VsZWN0T3B0aW9uSXNIaWRkZW4ob3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZVNlbGVjdGlvbihvcHRpb24pXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tZGF0YS10YWJsZS1maWx0ZXItJyArIChvcHRpb24/LmxhYmVsIHx8IG9wdGlvbilcIlxuICAgICAgICAgICAgICAgIFtrZWVwT3Blbl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuYmhpLWNoZWNrYm94LWVtcHR5XT1cIiFpc1NlbGVjdGVkKG9wdGlvbiwgbXVsdGlTZWxlY3RlZE9wdGlvbnMpXCJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5iaGktY2hlY2tib3gtZmlsbGVkXT1cImlzU2VsZWN0ZWQob3B0aW9uLCBtdWx0aVNlbGVjdGVkT3B0aW9ucylcIlxuICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJmaWx0ZXItbnVsbC1yZXN1bHRzXCIgW2hpZGRlbl09XCJtdWx0aVNlbGVjdEhhc1Zpc2libGVPcHRpb25zKClcIj57eyBsYWJlbHMucGlja2VyRW1wdHkgfX08L3A+XG4gICAgICAgICAgPC9saXN0PlxuICAgICAgICAgIDxsaXN0ICpuZ1N3aXRjaENhc2U9XCInY3VzdG9tJ1wiPlxuICAgICAgICAgICAgPGl0ZW0gY2xhc3M9XCJmaWx0ZXItc2VhcmNoXCIga2VlcE9wZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmaWx0ZXJUZW1wbGF0ZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNvbmZpZyB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgPC9saXN0PlxuICAgICAgICAgIDxsaXN0ICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgICA8aXRlbSBjbGFzcz1cImZpbHRlci1zZWFyY2hcIiBrZWVwT3Blbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgW3R5cGVdPVwiY29uZmlnLmZpbHRlckNvbmZpZy50eXBlXCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpbHRlclwiXG4gICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiZmlsdGVyRGF0YSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAjZmlsdGVySW5wdXRcbiAgICAgICAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCIgKm5nSWY9XCJtdWx0aVNlbGVjdFwiPlxuICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIGNvbG9yPVwiZGFya1wiIChjbGljayk9XCJjYW5jZWwoKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1tdWx0aS1zZWxlY3QtY2FuY2VsXCI+XG4gICAgICAgICAgICB7eyBsYWJlbHMuY2FuY2VsIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImRpYWxvZ3VlXCIgY29sb3I9XCJwb3NpdGl2ZVwiIChjbGljayk9XCJmaWx0ZXJNdWx0aVNlbGVjdCgpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLW11bHRpLXNlbGVjdC1maWx0ZXJcIj5cbiAgICAgICAgICAgIHt7IGxhYmVscy5maWx0ZXJzIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9ub3ZvLWRyb3Bkb3duPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzcGFjZXJcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZGF0YS10YWJsZS1oZWFkZXItcmVzaXphYmxlXCIgKm5nSWY9XCJjb25maWcucmVzaXphYmxlXCI+PHNwYW4gKG1vdXNlZG93bik9XCJzdGFydFJlc2l6ZSgkZXZlbnQpXCI+Jm5ic3A7PC9zcGFuPjwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZUNlbGxIZWFkZXI8VD4gaW1wbGVtZW50cyBJRGF0YVRhYmxlU29ydEZpbHRlciwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdmaWx0ZXJJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBmaWx0ZXJJbnB1dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChOb3ZvRHJvcGRvd25FbGVtZW50LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgZHJvcGRvd246IE5vdm9Ecm9wZG93bkVsZW1lbnQ7XG4gIEBWaWV3Q2hpbGQoJ29wdGlvbkZpbHRlcklucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIG9wdGlvbkZpbHRlcklucHV0OiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIGRlZmF1bHRTb3J0OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfTtcblxuICBASW5wdXQoKVxuICBhbGxvd011bHRpcGxlRmlsdGVyczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHJlc2l6ZWQ6IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlQ29sdW1uPFQ+PjtcbiAgQElucHV0KClcbiAgZmlsdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBIb3N0QmluZGluZygnY2xhc3MucmVzaXphYmxlJylcbiAgcHVibGljIHJlc2l6YWJsZTogYm9vbGVhbjtcblxuICBASW5wdXQoJ25vdm8tZGF0YS10YWJsZS1jZWxsLWNvbmZpZycpXG4gIHNldCBjb2x1bW4oY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KSB7XG4gICAgdGhpcy5fY29sdW1uID0gY29sdW1uO1xuICAgIHRoaXMubGFiZWwgPSBjb2x1bW4udHlwZSA9PT0gJ2FjdGlvbicgPyAnJyA6IGNvbHVtbi5sYWJlbDtcbiAgICB0aGlzLmxhYmVsSWNvbiA9IGNvbHVtbi5sYWJlbEljb247XG5cbiAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgIHNvcnRhYmxlOiAhIWNvbHVtbi5zb3J0YWJsZSxcbiAgICAgIGZpbHRlcmFibGU6ICEhY29sdW1uLmZpbHRlcmFibGUsXG4gICAgICByZXNpemFibGU6ICEhY29sdW1uLnJlc2l6YWJsZSxcbiAgICB9O1xuICAgIHRoaXMucmVzaXphYmxlID0gdGhpcy5jb25maWcucmVzaXphYmxlO1xuXG4gICAgbGV0IHRyYW5zZm9ybXM6IHsgZmlsdGVyPzogRnVuY3Rpb247IHNvcnQ/OiBGdW5jdGlvbiB9ID0ge307XG5cbiAgICBpZiAoY29sdW1uLmZpbHRlcmFibGUgJiYgSGVscGVycy5pc09iamVjdChjb2x1bW4uZmlsdGVyYWJsZSkpIHtcbiAgICAgIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZyA9IGNvbHVtbi5maWx0ZXJhYmxlIGFzIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWc7XG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZyA9IHsgdHlwZTogJ3RleHQnIH07XG4gICAgICB9XG4gICAgICBpZiAoKGNvbHVtbi5maWx0ZXJhYmxlIGFzIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWcpLnRyYW5zZm9ybSkge1xuICAgICAgICB0cmFuc2Zvcm1zLmZpbHRlciA9IChjb2x1bW4uZmlsdGVyYWJsZSBhcyBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnKS50cmFuc2Zvcm07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZyA9IHsgdHlwZTogJ3RleHQnIH07XG4gICAgfVxuXG4gICAgaWYgKGNvbHVtbi5zb3J0YWJsZSAmJiBIZWxwZXJzLmlzT2JqZWN0KGNvbHVtbi5zb3J0YWJsZSkpIHtcbiAgICAgIGlmICgoY29sdW1uLnNvcnRhYmxlIGFzIElEYXRhVGFibGVDb2x1bW5Tb3J0Q29uZmlnKS50cmFuc2Zvcm0pIHtcbiAgICAgICAgdHJhbnNmb3Jtcy5zb3J0ID0gKGNvbHVtbi5zb3J0YWJsZSBhcyBJRGF0YVRhYmxlQ29sdW1uU29ydENvbmZpZykudHJhbnNmb3JtO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSA9PT0gJ2RhdGUnICYmICF0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9ucykge1xuICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnMgPSB0aGlzLmdldERlZmF1bHREYXRlRmlsdGVyT3B0aW9ucygpO1xuICAgIH1cblxuICAgIHRoaXMuY29uZmlnLnRyYW5zZm9ybXMgPSB0cmFuc2Zvcm1zO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVyZW5kZXJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBjaGFuZ2VUaW1lb3V0OiBhbnk7XG5cbiAgcHVibGljIGxhYmVsOiBzdHJpbmc7XG4gIHB1YmxpYyBpY29uOiBzdHJpbmcgPSAnc29ydGFibGUnO1xuICBwdWJsaWMgbGFiZWxJY29uOiBzdHJpbmc7XG4gIHB1YmxpYyBpZDogc3RyaW5nO1xuICBwdWJsaWMgZmlsdGVyOiBhbnk7XG4gIHB1YmxpYyBkaXJlY3Rpb246IHN0cmluZztcbiAgcHVibGljIGZpbHRlckFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc29ydEFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd0N1c3RvbVJhbmdlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBhY3RpdmVEYXRlRmlsdGVyOiBzdHJpbmc7XG4gIHB1YmxpYyBjb25maWc6IHtcbiAgICBzb3J0YWJsZTogYm9vbGVhbjtcbiAgICBmaWx0ZXJhYmxlOiBib29sZWFuO1xuICAgIHJlc2l6YWJsZTogYm9vbGVhbjtcbiAgICB0cmFuc2Zvcm1zPzogeyBmaWx0ZXI/OiBGdW5jdGlvbjsgc29ydD86IEZ1bmN0aW9uIH07XG4gICAgZmlsdGVyQ29uZmlnPzogSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZztcbiAgfTtcbiAgcHVibGljIG11bHRpU2VsZWN0OiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBtdWx0aVNlbGVjdGVkT3B0aW9uczogQXJyYXk8YW55PiA9IFtdO1xuICBwcml2YXRlIG11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbjogQXJyYXk8eyBvcHRpb246IHN0cmluZyB8IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb247IGhpZGRlbjogYm9vbGVhbiB9PiA9IFtdO1xuICBwdWJsaWMgb3B0aW9uRmlsdGVyOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGVycm9yOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBfY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdGF0ZTogRGF0YVRhYmxlU3RhdGU8VD4sXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgX3NvcnQ6IE5vdm9EYXRhVGFibGVTb3J0RmlsdGVyPFQ+LFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBfY2RrQ29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsXG4gICkge1xuICAgIHRoaXMuX3JlcmVuZGVyU3Vic2NyaXB0aW9uID0gc3RhdGUudXBkYXRlcy5zdWJzY3JpYmUoKGNoYW5nZTogSURhdGFUYWJsZUNoYW5nZUV2ZW50KSA9PiB0aGlzLmNoZWNrU29ydEZpbHRlclN0YXRlKGNoYW5nZSkpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jZGtDb2x1bW5EZWYpIHtcbiAgICAgIHRoaXMuaWQgPSB0aGlzLl9jZGtDb2x1bW5EZWYubmFtZTtcbiAgICB9XG5cbiAgICB0aGlzLmNoZWNrU29ydEZpbHRlclN0YXRlKHsgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlciwgc29ydDogdGhpcy5zdGF0ZS5zb3J0IH0sIHRydWUpO1xuXG4gICAgdGhpcy5tdWx0aVNlbGVjdCA9IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZyAmJiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSA/IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID09PSAnbXVsdGktc2VsZWN0JyA6IGZhbHNlO1xuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0KSB7XG4gICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zID0gdGhpcy5maWx0ZXIgPyBbLi4udGhpcy5maWx0ZXJdIDogW107XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVyZW5kZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaCgoc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24pID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNoZWNrU29ydEZpbHRlclN0YXRlKHNvcnRGaWx0ZXJTdGF0ZTogSURhdGFUYWJsZUNoYW5nZUV2ZW50LCBpbml0aWFsQ29uZmlnOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAoc29ydEZpbHRlclN0YXRlLnNvcnQgJiYgc29ydEZpbHRlclN0YXRlLnNvcnQuaWQgPT09IHRoaXMuaWQpIHtcbiAgICAgIHRoaXMuaWNvbiA9IGBzb3J0LSR7c29ydEZpbHRlclN0YXRlLnNvcnQudmFsdWV9YDtcbiAgICAgIHRoaXMuc29ydEFjdGl2ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaWNvbiA9ICdzb3J0YWJsZSc7XG4gICAgICB0aGlzLnNvcnRBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCB0YWJsZUZpbHRlciA9IEhlbHBlcnMuY29udmVydFRvQXJyYXkoc29ydEZpbHRlclN0YXRlLmZpbHRlcik7XG4gICAgY29uc3QgdGhpc0ZpbHRlciA9IHRhYmxlRmlsdGVyLmZpbmQoKGZpbHRlcikgPT4gZmlsdGVyICYmIGZpbHRlci5pZCA9PT0gdGhpcy5pZCk7XG5cbiAgICBpZiAodGhpc0ZpbHRlcikge1xuICAgICAgdGhpcy5maWx0ZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgaWYgKGluaXRpYWxDb25maWcgJiYgdGhpc0ZpbHRlci50eXBlID09PSAnZGF0ZScgJiYgdGhpc0ZpbHRlci5zZWxlY3RlZE9wdGlvbikge1xuICAgICAgICB0aGlzLmFjdGl2ZURhdGVGaWx0ZXIgPSB0aGlzRmlsdGVyLnNlbGVjdGVkT3B0aW9uLmxhYmVsIHx8IHRoaXMubGFiZWxzLmN1c3RvbURhdGVSYW5nZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsdGVyID0gdGhpc0ZpbHRlci52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXJBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZmlsdGVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5hY3RpdmVEYXRlRmlsdGVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgIH1cbiAgICBpZiAodGhpcy5kZWZhdWx0U29ydCAmJiB0aGlzLmlkID09PSB0aGlzLmRlZmF1bHRTb3J0LmlkKSB7XG4gICAgICB0aGlzLmljb24gPSBgc29ydC0ke3RoaXMuZGVmYXVsdFNvcnQudmFsdWV9YDtcbiAgICAgIHRoaXMuc29ydEFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMubXVsdGlTZWxlY3QgPSB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcgJiYgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUgPyB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSA9PT0gJ211bHRpLXNlbGVjdCcgOiBmYWxzZTtcbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuZmlsdGVyID8gWy4uLnRoaXMuZmlsdGVyXSA6IFtdO1xuICAgICAgaWYgKHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnNbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9uSXNIaWRkZW4gPSAodGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnMgYXMgc3RyaW5nW10pLm1hcChcbiAgICAgICAgICAgIChvcHRpb246IHN0cmluZyk6IHsgb3B0aW9uOiBzdHJpbmc7IGhpZGRlbjogYm9vbGVhbiB9ID0+ICh7IG9wdGlvbjogb3B0aW9uLCBoaWRkZW46IGZhbHNlIH0pLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9uSXNIaWRkZW4gPSAodGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnMgYXMgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbltdKS5tYXAoXG4gICAgICAgICAgICAob3B0aW9uOiBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uKTogeyBvcHRpb246IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb247IGhpZGRlbjogYm9vbGVhbiB9ID0+ICh7XG4gICAgICAgICAgICAgIG9wdGlvbjogb3B0aW9uLFxuICAgICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIGlzU2VsZWN0ZWQob3B0aW9uLCBvcHRpb25zTGlzdCkge1xuICAgIGlmIChvcHRpb25zTGlzdCkge1xuICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBvcHRpb24uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPyBvcHRpb24udmFsdWUgOiBvcHRpb247XG5cbiAgICAgIGxldCBmb3VuZCA9IG9wdGlvbnNMaXN0LmZpbmQoKGl0ZW0pID0+IHRoaXMub3B0aW9uUHJlc2VudENoZWNrKGl0ZW0sIG9wdGlvblZhbHVlKSk7XG4gICAgICByZXR1cm4gZm91bmQgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZVNlbGVjdGlvbihvcHRpb24pIHtcbiAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvbi5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSA/IG9wdGlvbi52YWx1ZSA6IG9wdGlvbjtcblxuICAgIGxldCBvcHRpb25JbmRleCA9IHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMuZmluZEluZGV4KChpdGVtKSA9PiB0aGlzLm9wdGlvblByZXNlbnRDaGVjayhpdGVtLCBvcHRpb25WYWx1ZSkpO1xuICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICBpZiAob3B0aW9uSW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucy5zcGxpY2Uob3B0aW9uSW5kZXgsIDEpO1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLm9wdGlvbkZpbHRlciAmJlxuICAgICAgICAhdGhpcy5nZXRPcHRpb25UZXh0KG9wdGlvbilcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC5zdGFydHNXaXRoKHRoaXMub3B0aW9uRmlsdGVyLnRvTG93ZXJDYXNlKCkpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9uSXNIaWRkZW5bdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9uSXNIaWRkZW4uZmluZEluZGV4KChyZWNvcmQpID0+IHJlY29yZC5vcHRpb24gPT09IG9wdGlvbildLmhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMucHVzaChvcHRpb25WYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9wdGlvblByZXNlbnRDaGVjayhpdGVtLCBvcHRpb25WYWx1ZSk6IGJvb2xlYW4ge1xuICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICByZXR1cm4gaXRlbS52YWx1ZSA9PT0gb3B0aW9uVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpdGVtID09PSBvcHRpb25WYWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmZpbHRlciA/IFsuLi50aGlzLmZpbHRlcl0gOiBbXTtcbiAgICB0aGlzLmRyb3Bkb3duLmNsb3NlUGFuZWwoKTtcbiAgICB0aGlzLmNsZWFyT3B0aW9uRmlsdGVyKCk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyTXVsdGlTZWxlY3QoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAwICYmICF0aGlzLmZpbHRlcikge1xuICAgICAgdGhpcy5tdWx0aVNlbGVjdEhhc1Zpc2libGVPcHRpb25zKCkgJiYgdGhpcy5kcm9wZG93biA/ICh0aGlzLmVycm9yID0gdHJ1ZSkgOiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyT3B0aW9uRmlsdGVyKCk7XG4gICAgICBsZXQgYWN0dWFsRmlsdGVyID0gdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwID8gWy4uLnRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnNdIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5maWx0ZXJEYXRhKGFjdHVhbEZpbHRlcik7XG4gICAgICB0aGlzLmRyb3Bkb3duLmNsb3NlUGFuZWwoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbXVsdGlTZWxlY3RPcHRpb25GaWx0ZXIob3B0aW9uRmlsdGVyOiBzdHJpbmcpIHtcbiAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbi5mb3JFYWNoKChyZWNvcmQpID0+IHtcbiAgICAgIGlmIChyZWNvcmQub3B0aW9uKSB7XG4gICAgICAgIHJlY29yZC5oaWRkZW4gPSAhKFxuICAgICAgICAgIHRoaXMuZ2V0T3B0aW9uVGV4dChyZWNvcmQub3B0aW9uKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5zdGFydHNXaXRoKG9wdGlvbkZpbHRlci50b0xvd2VyQ2FzZSgpKSB8fCB0aGlzLmlzU2VsZWN0ZWQocmVjb3JkLm9wdGlvbiwgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucylcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBtdWx0aVNlbGVjdE9wdGlvbklzSGlkZGVuKG9wdGlvbjogc3RyaW5nIHwgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbi5maW5kKChyZWNvcmQpID0+IHJlY29yZC5vcHRpb24gPT09IG9wdGlvbikuaGlkZGVuO1xuICB9XG5cbiAgcHVibGljIG11bHRpU2VsZWN0SGFzVmlzaWJsZU9wdGlvbnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuLnNvbWUoKHJlY29yZCkgPT4gIXJlY29yZC5oaWRkZW4pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcHRpb25UZXh0KG9wdGlvbjogc3RyaW5nIHwgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbik6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb24gIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gb3B0aW9uLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9wdCA9IG9wdGlvbiBhcyBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uO1xuICAgICAgcmV0dXJuIChvcHQubGFiZWwubGVuZ3RoID4gMCA/IG9wdC5sYWJlbCA6IG9wdC52YWx1ZSkudG9TdHJpbmcoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG11bHRpU2VsZWN0T3B0aW9uRmlsdGVySGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0KSB7XG4gICAgICB0aGlzLmVycm9yID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5kcm9wZG93bi5wYW5lbE9wZW4gJiYgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRVNDKSB7XG4gICAgICAgIC8vIGVzY2FwZSA9IGNsZWFyIHRleHQgYm94IGFuZCBjbG9zZVxuICAgICAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICAgIHRoaXMuY2xlYXJPcHRpb25GaWx0ZXIoKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5jbG9zZVBhbmVsKCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVOVEVSKSB7XG4gICAgICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAgICAgdGhpcy5maWx0ZXJNdWx0aVNlbGVjdCgpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPj0gNjUgJiYgZXZlbnQua2V5Q29kZSA8PSA5MCkgfHxcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPj0gOTYgJiYgZXZlbnQua2V5Q29kZSA8PSAxMDUpIHx8XG4gICAgICAgIChldmVudC5rZXlDb2RlID49IDQ4ICYmIGV2ZW50LmtleUNvZGUgPD0gNTcpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5vcHRpb25GaWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhck9wdGlvbkZpbHRlcigpIHtcbiAgICB0aGlzLmVycm9yID0gZmFsc2U7XG4gICAgaWYgKHRoaXMub3B0aW9uRmlsdGVyLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMub3B0aW9uRmlsdGVyID0gJyc7XG4gICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbi5mb3JFYWNoKChyZWNvcmQpID0+IHtcbiAgICAgICAgcmVjb3JkLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXJ0UmVzaXplKG1vdXNlRG93bkV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgbW91c2VEb3duRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBtaW5pbXVtV2lkdGggPSA2MCArICh0aGlzLmNvbmZpZy5maWx0ZXJhYmxlID8gMzAgOiAwKSArICh0aGlzLmNvbmZpZy5zb3J0YWJsZSA/IDMwIDogMCk7XG4gICAgbGV0IHN0YXJ0aW5nV2lkdGg6IG51bWJlciA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIGNvbnN0IG1vdXNlTW92ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KHdpbmRvdy5kb2N1bWVudCwgJ21vdXNlbW92ZScpLnN1YnNjcmliZSgobWlkZGxlTW91c2VFdmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgbGV0IGRpZmZlcmVuY2VXaWR0aDogbnVtYmVyID0gbWlkZGxlTW91c2VFdmVudC5jbGllbnRYIC0gbW91c2VEb3duRXZlbnQuY2xpZW50WDtcbiAgICAgIGxldCB3aWR0aDogbnVtYmVyID0gc3RhcnRpbmdXaWR0aCArIGRpZmZlcmVuY2VXaWR0aDtcbiAgICAgIGlmICh3aWR0aCA8IG1pbmltdW1XaWR0aCkge1xuICAgICAgICB3aWR0aCA9IG1pbmltdW1XaWR0aDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbHVtbi53aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21pbi13aWR0aCcsIGAke3RoaXMuX2NvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21heC13aWR0aCcsIGAke3RoaXMuX2NvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7dGhpcy5fY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5yZXNpemVkLm5leHQodGhpcy5fY29sdW1uKTtcbiAgICB9KTtcblxuICAgIGxldCBtb3VzZVVwU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQod2luZG93LmRvY3VtZW50LCAnbW91c2V1cCcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBtb3VzZVVwU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICBtb3VzZU1vdmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2gobW91c2VNb3ZlU3Vic2NyaXB0aW9uKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChtb3VzZVVwU3Vic2NyaXB0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVDdXN0b21SYW5nZShldmVudDogRXZlbnQsIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuc2hvd0N1c3RvbVJhbmdlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmRyb3Bkb3duLm9wZW5QYW5lbCgpOyAvLyBFbnN1cmVzIHRoYXQgdGhlIHBhbmVsIGNvcnJlY3RseSB1cGRhdGVzIHRvIHRoZSBkeW5hbWljIHNpemUgb2YgdGhlIGRyb3Bkb3duXG4gIH1cblxuICBwdWJsaWMgZm9jdXNJbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maWx0ZXJJbnB1dCAmJiB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCksIDApO1xuICAgIH1cbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCAmJiB0aGlzLmRyb3Bkb3duKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duLm9uS2V5RG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLm11bHRpU2VsZWN0T3B0aW9uRmlsdGVySGFuZGxlS2V5ZG93bihldmVudCk7XG4gICAgICB9O1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9wdGlvbkZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSwgMCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzb3J0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYW5nZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNoYW5nZVRpbWVvdXQpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5nZXROZXh0U29ydERpcmVjdGlvbih0aGlzLmRpcmVjdGlvbik7XG4gICAgICB0aGlzLl9zb3J0LnNvcnQodGhpcy5pZCwgdGhpcy5kaXJlY3Rpb24sIHRoaXMuY29uZmlnLnRyYW5zZm9ybXMuc29ydCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyRGF0YShmaWx0ZXI/OiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgYWN0dWFsRmlsdGVyID0gTm92b0RhdGFUYWJsZUZpbHRlclV0aWxzLmNvbnN0cnVjdEZpbHRlcihmaWx0ZXIsIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlLCB0aGlzLm11bHRpU2VsZWN0KTtcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID09PSAnZGF0ZScgJiYgZmlsdGVyID8gZmlsdGVyIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKHRoaXMuY2hhbmdlVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2hhbmdlVGltZW91dCk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoYWN0dWFsRmlsdGVyID09PSAnJykge1xuICAgICAgICBhY3R1YWxGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9zb3J0LmZpbHRlcihcbiAgICAgICAgdGhpcy5pZCxcbiAgICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUsXG4gICAgICAgIGFjdHVhbEZpbHRlcixcbiAgICAgICAgdGhpcy5jb25maWcudHJhbnNmb3Jtcy5maWx0ZXIsXG4gICAgICAgIHRoaXMuYWxsb3dNdWx0aXBsZUZpbHRlcnMsXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uLFxuICAgICAgKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgdGhpcy5hY3RpdmVEYXRlRmlsdGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZmlsdGVyRGF0YSh1bmRlZmluZWQpO1xuICAgIHRoaXMuY2xlYXJPcHRpb25GaWx0ZXIoKTtcbiAgICB0aGlzLmRyb3Bkb3duLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV4dFNvcnREaXJlY3Rpb24oZGlyZWN0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm4gJ2FzYyc7XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdhc2MnKSB7XG4gICAgICByZXR1cm4gJ2Rlc2MnO1xuICAgIH1cbiAgICByZXR1cm4gJ2FzYyc7XG4gIH1cblxuICBwcml2YXRlIGdldERlZmF1bHREYXRlRmlsdGVyT3B0aW9ucygpOiBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uW10ge1xuICAgIGxldCBvcHRzOiBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uW10gPSBbXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MURheSwgbWluOiAtMSwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0N0RheXMsIG1pbjogLTcsIG1heDogMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDMwRGF5cywgbWluOiAtMzAsIG1heDogMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDkwRGF5cywgbWluOiAtOTAsIG1heDogMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDFZZWFyLCBtaW46IC0zNjYsIG1heDogMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDFEYXksIG1pbjogMCwgbWF4OiAxIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0N0RheXMsIG1pbjogMCwgbWF4OiA3IH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MzBEYXlzLCBtaW46IDAsIG1heDogMzAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQ5MERheXMsIG1pbjogMCwgbWF4OiA5MCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDFZZWFyLCBtaW46IDAsIG1heDogMzY2IH0sXG4gICAgXTtcbiAgICByZXR1cm4gb3B0cztcbiAgfVxufVxuIl19