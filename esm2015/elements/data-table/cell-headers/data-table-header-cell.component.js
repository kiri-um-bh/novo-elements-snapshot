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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsRUFHUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxZQUFZLEVBRVosV0FBVyxFQUNYLFdBQVcsRUFDWCxZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBWS9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7O0FBbUo3RCxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7Ozs7O0lBeUZsQyxZQUNVLGlCQUFvQyxFQUNyQyxNQUF3QixFQUN2QixLQUF3QixFQUN4QixRQUFtQixFQUNuQixVQUFzQixFQUNYLEtBQWlDLEVBQ2pDLGFBQTJCO1FBTnRDLHNCQUFpQixHQUFqQixp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QWdDOztJQUNoQyx5Q0FNRTs7SUFDRiw4Q0FBb0M7O0lBQ3BDLHVEQUE2Qzs7Ozs7SUFDN0MsOERBQW9IOztJQUNwSCwrQ0FBaUM7O0lBQ2pDLHdDQUE4Qjs7Ozs7SUFDOUIsZ0RBQTJDOzs7OztJQUMzQywwQ0FBcUM7Ozs7O0lBR25DLG9EQUE0Qzs7SUFDNUMseUNBQStCOzs7OztJQUMvQix3Q0FBZ0M7Ozs7O0lBQ2hDLDJDQUEyQjs7Ozs7SUFDM0IsNkNBQThCOztJQUM5Qix3Q0FBb0Q7O0lBQ3BELGdEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBUZW1wbGF0ZVJlZixcbiAgSG9zdExpc3RlbmVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0NvbHVtbkRlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG5cbmltcG9ydCB7XG4gIElEYXRhVGFibGVTb3J0RmlsdGVyLFxuICBJRGF0YVRhYmxlQ2hhbmdlRXZlbnQsXG4gIElEYXRhVGFibGVDb2x1bW4sXG4gIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb24sXG4gIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWcsXG4gIElEYXRhVGFibGVDb2x1bW5Tb3J0Q29uZmlnLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuaW1wb3J0IHsgTm92b0RhdGFUYWJsZVNvcnRGaWx0ZXIgfSBmcm9tICcuLi9zb3J0LWZpbHRlci9zb3J0LWZpbHRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTm92b0Ryb3Bkb3duRWxlbWVudCB9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL0Ryb3Bkb3duJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVRhYmxlU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9kYXRhLXRhYmxlLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZUZpbHRlclV0aWxzIH0gZnJvbSAnLi4vc2VydmljZXMvZGF0YS10YWJsZS1maWx0ZXItdXRpbHMnO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbm92by1kYXRhLXRhYmxlLWNlbGwtY29uZmlnXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgY2xhc3M9XCJiaGkte3sgbGFiZWxJY29uIH19IGxhYmVsLWljb25cIiAqbmdJZj1cImxhYmVsSWNvblwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1oZWFkZXItaWNvblwiPjwvaT5cbiAgICA8bGFiZWwgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWxhYmVsXCI+e3sgbGFiZWwgfX08L2xhYmVsPlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgICpuZ0lmPVwiY29uZmlnLnNvcnRhYmxlXCJcbiAgICAgICAgdG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICBbdG9vbHRpcF09XCJsYWJlbHMuc29ydFwiXG4gICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgIFtpY29uXT1cImljb25cIlxuICAgICAgICAoY2xpY2spPVwic29ydCgpXCJcbiAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJzb3J0QWN0aXZlXCJcbiAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLXNvcnRcIlxuICAgICAgICBbYXR0ci5kYXRhLWZlYXR1cmUtaWRdPVwiJ25vdm8tZGF0YS10YWJsZS1zb3J0LScgKyB0aGlzLmlkXCJcbiAgICAgID48L2J1dHRvbj5cbiAgICAgIDxub3ZvLWRyb3Bkb3duXG4gICAgICAgICpuZ0lmPVwiY29uZmlnLmZpbHRlcmFibGVcIlxuICAgICAgICBzaWRlPVwicmlnaHRcIlxuICAgICAgICBwYXJlbnRTY3JvbGxTZWxlY3Rvcj1cIi5ub3ZvLWRhdGEtdGFibGUtY29udGFpbmVyXCJcbiAgICAgICAgY29udGFpbmVyQ2xhc3M9XCJkYXRhLXRhYmxlLWRyb3Bkb3duXCJcbiAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWZpbHRlclwiXG4gICAgICA+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB0aGVtZT1cImljb25cIlxuICAgICAgICAgIGljb249XCJmaWx0ZXJcIlxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiZmlsdGVyQWN0aXZlXCJcbiAgICAgICAgICAoY2xpY2spPVwiZm9jdXNJbnB1dCgpXCJcbiAgICAgICAgICB0b29sdGlwUG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgICAgW3Rvb2x0aXBdPVwibGFiZWxzLmZpbHRlcnNcIlxuICAgICAgICAgIFthdHRyLmRhdGEtZmVhdHVyZS1pZF09XCInbm92by1kYXRhLXRhYmxlLWZpbHRlci0nICsgdGhpcy5pZFwiXG4gICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgIDxzcGFuPnt7IGxhYmVscy5maWx0ZXJzIH19PC9zcGFuPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHRoZW1lPVwiZGlhbG9ndWVcIlxuICAgICAgICAgICAgY29sb3I9XCJuZWdhdGl2ZVwiXG4gICAgICAgICAgICBpY29uPVwidGltZXNcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImNsZWFyRmlsdGVyKClcIlxuICAgICAgICAgICAgKm5nSWY9XCJmaWx0ZXIgIT09IG51bGwgJiYgZmlsdGVyICE9PSB1bmRlZmluZWQgJiYgZmlsdGVyICE9PSAnJ1wiXG4gICAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtZmlsdGVyLWNsZWFyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBsYWJlbHMuY2xlYXIgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImNvbmZpZy5maWx0ZXJDb25maWcudHlwZVwiPlxuICAgICAgICAgIDxsaXN0ICpuZ1N3aXRjaENhc2U9XCInZGF0ZSdcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc2hvd0N1c3RvbVJhbmdlXCI+XG4gICAgICAgICAgICAgIDxpdGVtXG4gICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJhY3RpdmVEYXRlRmlsdGVyID09PSBvcHRpb24ubGFiZWxcIlxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZmlsdGVyRGF0YShvcHRpb24pXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tZGF0YS10YWJsZS1maWx0ZXItJyArIG9wdGlvbi5sYWJlbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBvcHRpb24ubGFiZWwgfX0gPGkgY2xhc3M9XCJiaGktY2hlY2tcIiAqbmdJZj1cImFjdGl2ZURhdGVGaWx0ZXIgPT09IG9wdGlvbi5sYWJlbFwiPjwvaT5cbiAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8aXRlbVxuICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImxhYmVscy5jdXN0b21EYXRlUmFuZ2UgPT09IGFjdGl2ZURhdGVGaWx0ZXJcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlQ3VzdG9tUmFuZ2UoJGV2ZW50LCB0cnVlKVwiXG4gICAgICAgICAgICAgICpuZ0lmPVwiY29uZmlnLmZpbHRlckNvbmZpZy5hbGxvd0N1c3RvbVJhbmdlICYmICFzaG93Q3VzdG9tUmFuZ2VcIlxuICAgICAgICAgICAgICBba2VlcE9wZW5dPVwidHJ1ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7IGxhYmVscy5jdXN0b21EYXRlUmFuZ2UgfX0gPGkgY2xhc3M9XCJiaGktY2hlY2tcIiAqbmdJZj1cImxhYmVscy5jdXN0b21EYXRlUmFuZ2UgPT09IGFjdGl2ZURhdGVGaWx0ZXJcIj48L2k+XG4gICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItY29udGFpbmVyXCIgKm5nSWY9XCJzaG93Q3VzdG9tUmFuZ2VcIj5cbiAgICAgICAgICAgICAgPGRpdiAoY2xpY2spPVwidG9nZ2xlQ3VzdG9tUmFuZ2UoJGV2ZW50LCBmYWxzZSlcIj48aSBjbGFzcz1cImJoaS1wcmV2aW91c1wiPjwvaT57eyBsYWJlbHMuYmFja1RvUHJlc2V0RmlsdGVycyB9fTwvZGl2PlxuICAgICAgICAgICAgICA8bm92by1kYXRlLXBpY2tlciAob25TZWxlY3QpPVwiZmlsdGVyRGF0YSgkZXZlbnQpXCIgWyhuZ01vZGVsKV09XCJmaWx0ZXJcIiByYW5nZT1cInRydWVcIj48L25vdm8tZGF0ZS1waWNrZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgPGxpc3QgKm5nU3dpdGNoQ2FzZT1cIidzZWxlY3QnXCI+XG4gICAgICAgICAgICA8aXRlbVxuICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImZpbHRlciA9PT0gb3B0aW9uXCJcbiAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiZmlsdGVyRGF0YShvcHRpb24pXCJcbiAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWRhdGEtdGFibGUtZmlsdGVyLScgKyAob3B0aW9uPy5sYWJlbCB8fCBvcHRpb24pXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4+e3sgb3B0aW9uPy5sYWJlbCB8fCBvcHRpb24gfX08L3NwYW4+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNoZWNrXCIgKm5nSWY9XCJvcHRpb24uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPyBmaWx0ZXIgPT09IG9wdGlvbi52YWx1ZSA6IGZpbHRlciA9PT0gb3B0aW9uXCI+PC9pPlxuICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICA8bGlzdCAqbmdTd2l0Y2hDYXNlPVwiJ211bHRpLXNlbGVjdCdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1saXN0LWZpbHRlclwiIChrZXlkb3duKT1cIm11bHRpU2VsZWN0T3B0aW9uRmlsdGVySGFuZGxlS2V5ZG93bigkZXZlbnQpXCI+XG4gICAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiZmlsdGVyLXNlYXJjaFwiIGtlZXBPcGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJvcHRpb25GaWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwibXVsdGlTZWxlY3RPcHRpb25GaWx0ZXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAjb3B0aW9uRmlsdGVySW5wdXRcbiAgICAgICAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1tdWx0aS1zZWxlY3Qtb3B0aW9uLWZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1zZWFyY2hcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgW2hpZGRlbl09XCIhZXJyb3IgfHwgIW11bHRpU2VsZWN0SGFzVmlzaWJsZU9wdGlvbnMoKVwiPnt7IGxhYmVscy5zZWxlY3RGaWx0ZXJPcHRpb25zIH19PC9zcGFuPlxuICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1saXN0LW9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgPGl0ZW1cbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgW2hpZGRlbl09XCJtdWx0aVNlbGVjdE9wdGlvbklzSGlkZGVuKG9wdGlvbilcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVTZWxlY3Rpb24ob3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWRhdGEtdGFibGUtZmlsdGVyLScgKyAob3B0aW9uPy5sYWJlbCB8fCBvcHRpb24pXCJcbiAgICAgICAgICAgICAgICBba2VlcE9wZW5dPVwidHJ1ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBvcHRpb24/LmxhYmVsIHx8IG9wdGlvbiB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmJoaS1jaGVja2JveC1lbXB0eV09XCIhaXNTZWxlY3RlZChvcHRpb24sIG11bHRpU2VsZWN0ZWRPcHRpb25zKVwiXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuYmhpLWNoZWNrYm94LWZpbGxlZF09XCJpc1NlbGVjdGVkKG9wdGlvbiwgbXVsdGlTZWxlY3RlZE9wdGlvbnMpXCJcbiAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZmlsdGVyLW51bGwtcmVzdWx0c1wiIFtoaWRkZW5dPVwibXVsdGlTZWxlY3RIYXNWaXNpYmxlT3B0aW9ucygpXCI+e3sgbGFiZWxzLnBpY2tlckVtcHR5IH19PC9wPlxuICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICA8bGlzdCAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbSdcIj5cbiAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiZmlsdGVyLXNlYXJjaFwiIGtlZXBPcGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZmlsdGVyVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb25maWcgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICA8bGlzdCAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgICAgICAgPGl0ZW0gY2xhc3M9XCJmaWx0ZXItc2VhcmNoXCIga2VlcE9wZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIFt0eXBlXT1cImNvbmZpZy5maWx0ZXJDb25maWcudHlwZVwiXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWx0ZXJcIlxuICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImZpbHRlckRhdGEoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgI2ZpbHRlcklucHV0XG4gICAgICAgICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgPC9saXN0PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiICpuZ0lmPVwibXVsdGlTZWxlY3RcIj5cbiAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiBjb2xvcj1cImRhcmtcIiAoY2xpY2spPVwiY2FuY2VsKClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtbXVsdGktc2VsZWN0LWNhbmNlbFwiPlxuICAgICAgICAgICAge3sgbGFiZWxzLmNhbmNlbCB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIGNvbG9yPVwicG9zaXRpdmVcIiAoY2xpY2spPVwiZmlsdGVyTXVsdGlTZWxlY3QoKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1tdWx0aS1zZWxlY3QtZmlsdGVyXCI+XG4gICAgICAgICAgICB7eyBsYWJlbHMuZmlsdGVycyB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbm92by1kcm9wZG93bj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic3BhY2VyXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtaGVhZGVyLXJlc2l6YWJsZVwiICpuZ0lmPVwiY29uZmlnLnJlc2l6YWJsZVwiPjxzcGFuIChtb3VzZWRvd24pPVwic3RhcnRSZXNpemUoJGV2ZW50KVwiPiZuYnNwOzwvc3Bhbj48L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVDZWxsSGVhZGVyPFQ+IGltcGxlbWVudHMgSURhdGFUYWJsZVNvcnRGaWx0ZXIsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnZmlsdGVySW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgZmlsdGVySW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoTm92b0Ryb3Bkb3duRWxlbWVudCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIGRyb3Bkb3duOiBOb3ZvRHJvcGRvd25FbGVtZW50O1xuICBAVmlld0NoaWxkKCdvcHRpb25GaWx0ZXJJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBvcHRpb25GaWx0ZXJJbnB1dDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICBkZWZhdWx0U29ydDogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH07XG5cbiAgQElucHV0KClcbiAgYWxsb3dNdWx0aXBsZUZpbHRlcnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICByZXNpemVkOiBFdmVudEVtaXR0ZXI8SURhdGFUYWJsZUNvbHVtbjxUPj47XG4gIEBJbnB1dCgpXG4gIGZpbHRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnJlc2l6YWJsZScpXG4gIHB1YmxpYyByZXNpemFibGU6IGJvb2xlYW47XG5cbiAgQElucHV0KCdub3ZvLWRhdGEtdGFibGUtY2VsbC1jb25maWcnKVxuICBzZXQgY29sdW1uKGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPikge1xuICAgIHRoaXMuX2NvbHVtbiA9IGNvbHVtbjtcbiAgICB0aGlzLmxhYmVsID0gY29sdW1uLnR5cGUgPT09ICdhY3Rpb24nID8gJycgOiBjb2x1bW4ubGFiZWw7XG4gICAgdGhpcy5sYWJlbEljb24gPSBjb2x1bW4ubGFiZWxJY29uO1xuXG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICBzb3J0YWJsZTogISFjb2x1bW4uc29ydGFibGUsXG4gICAgICBmaWx0ZXJhYmxlOiAhIWNvbHVtbi5maWx0ZXJhYmxlLFxuICAgICAgcmVzaXphYmxlOiAhIWNvbHVtbi5yZXNpemFibGUsXG4gICAgfTtcbiAgICB0aGlzLnJlc2l6YWJsZSA9IHRoaXMuY29uZmlnLnJlc2l6YWJsZTtcblxuICAgIGxldCB0cmFuc2Zvcm1zOiB7IGZpbHRlcj86IEZ1bmN0aW9uOyBzb3J0PzogRnVuY3Rpb24gfSA9IHt9O1xuXG4gICAgaWYgKGNvbHVtbi5maWx0ZXJhYmxlICYmIEhlbHBlcnMuaXNPYmplY3QoY29sdW1uLmZpbHRlcmFibGUpKSB7XG4gICAgICB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcgPSBjb2x1bW4uZmlsdGVyYWJsZSBhcyBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnO1xuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSkge1xuICAgICAgICB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcgPSB7IHR5cGU6ICd0ZXh0JyB9O1xuICAgICAgfVxuICAgICAgaWYgKChjb2x1bW4uZmlsdGVyYWJsZSBhcyBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnKS50cmFuc2Zvcm0pIHtcbiAgICAgICAgdHJhbnNmb3Jtcy5maWx0ZXIgPSAoY29sdW1uLmZpbHRlcmFibGUgYXMgSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZykudHJhbnNmb3JtO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcgPSB7IHR5cGU6ICd0ZXh0JyB9O1xuICAgIH1cblxuICAgIGlmIChjb2x1bW4uc29ydGFibGUgJiYgSGVscGVycy5pc09iamVjdChjb2x1bW4uc29ydGFibGUpKSB7XG4gICAgICBpZiAoKGNvbHVtbi5zb3J0YWJsZSBhcyBJRGF0YVRhYmxlQ29sdW1uU29ydENvbmZpZykudHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybXMuc29ydCA9IChjb2x1bW4uc29ydGFibGUgYXMgSURhdGFUYWJsZUNvbHVtblNvcnRDb25maWcpLnRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUgPT09ICdkYXRlJyAmJiAhdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zID0gdGhpcy5nZXREZWZhdWx0RGF0ZUZpbHRlck9wdGlvbnMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbmZpZy50cmFuc2Zvcm1zID0gdHJhbnNmb3JtcztcbiAgfVxuXG4gIHByaXZhdGUgX3JlcmVuZGVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgY2hhbmdlVGltZW91dDogYW55O1xuXG4gIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuICBwdWJsaWMgaWNvbjogc3RyaW5nID0gJ3NvcnRhYmxlJztcbiAgcHVibGljIGxhYmVsSWNvbjogc3RyaW5nO1xuICBwdWJsaWMgaWQ6IHN0cmluZztcbiAgcHVibGljIGZpbHRlcjogYW55O1xuICBwdWJsaWMgZGlyZWN0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyBmaWx0ZXJBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNvcnRBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNob3dDdXN0b21SYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgYWN0aXZlRGF0ZUZpbHRlcjogc3RyaW5nO1xuICBwdWJsaWMgY29uZmlnOiB7XG4gICAgc29ydGFibGU6IGJvb2xlYW47XG4gICAgZmlsdGVyYWJsZTogYm9vbGVhbjtcbiAgICByZXNpemFibGU6IGJvb2xlYW47XG4gICAgdHJhbnNmb3Jtcz86IHsgZmlsdGVyPzogRnVuY3Rpb247IHNvcnQ/OiBGdW5jdGlvbiB9O1xuICAgIGZpbHRlckNvbmZpZz86IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWc7XG4gIH07XG4gIHB1YmxpYyBtdWx0aVNlbGVjdDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgbXVsdGlTZWxlY3RlZE9wdGlvbnM6IEFycmF5PGFueT4gPSBbXTtcbiAgcHJpdmF0ZSBtdWx0aVNlbGVjdGVkT3B0aW9uSXNIaWRkZW46IEFycmF5PHsgb3B0aW9uOiBzdHJpbmcgfCBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uOyBoaWRkZW46IGJvb2xlYW4gfT4gPSBbXTtcbiAgcHVibGljIG9wdGlvbkZpbHRlcjogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBlcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgX2NvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RhdGU6IERhdGFUYWJsZVN0YXRlPFQ+LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIF9zb3J0OiBOb3ZvRGF0YVRhYmxlU29ydEZpbHRlcjxUPixcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgX2Nka0NvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLFxuICApIHtcbiAgICB0aGlzLl9yZXJlbmRlclN1YnNjcmlwdGlvbiA9IHN0YXRlLnVwZGF0ZXMuc3Vic2NyaWJlKChjaGFuZ2U6IElEYXRhVGFibGVDaGFuZ2VFdmVudCkgPT4gdGhpcy5jaGVja1NvcnRGaWx0ZXJTdGF0ZShjaGFuZ2UpKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY2RrQ29sdW1uRGVmKSB7XG4gICAgICB0aGlzLmlkID0gdGhpcy5fY2RrQ29sdW1uRGVmLm5hbWU7XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja1NvcnRGaWx0ZXJTdGF0ZSh7IGZpbHRlcjogdGhpcy5zdGF0ZS5maWx0ZXIsIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCB9LCB0cnVlKTtcblxuICAgIHRoaXMubXVsdGlTZWxlY3QgPSB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcgJiYgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUgPyB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSA9PT0gJ211bHRpLXNlbGVjdCcgOiBmYWxzZTtcbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuZmlsdGVyID8gWy4uLnRoaXMuZmlsdGVyXSA6IFtdO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlcmVuZGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goKHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uKSA9PiB7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjaGVja1NvcnRGaWx0ZXJTdGF0ZShzb3J0RmlsdGVyU3RhdGU6IElEYXRhVGFibGVDaGFuZ2VFdmVudCwgaW5pdGlhbENvbmZpZzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKHNvcnRGaWx0ZXJTdGF0ZS5zb3J0ICYmIHNvcnRGaWx0ZXJTdGF0ZS5zb3J0LmlkID09PSB0aGlzLmlkKSB7XG4gICAgICB0aGlzLmljb24gPSBgc29ydC0ke3NvcnRGaWx0ZXJTdGF0ZS5zb3J0LnZhbHVlfWA7XG4gICAgICB0aGlzLnNvcnRBY3RpdmUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmljb24gPSAnc29ydGFibGUnO1xuICAgICAgdGhpcy5zb3J0QWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgdGFibGVGaWx0ZXIgPSBIZWxwZXJzLmNvbnZlcnRUb0FycmF5KHNvcnRGaWx0ZXJTdGF0ZS5maWx0ZXIpO1xuICAgIGNvbnN0IHRoaXNGaWx0ZXIgPSB0YWJsZUZpbHRlci5maW5kKChmaWx0ZXIpID0+IGZpbHRlciAmJiBmaWx0ZXIuaWQgPT09IHRoaXMuaWQpO1xuXG4gICAgaWYgKHRoaXNGaWx0ZXIpIHtcbiAgICAgIHRoaXMuZmlsdGVyQWN0aXZlID0gdHJ1ZTtcbiAgICAgIGlmIChpbml0aWFsQ29uZmlnICYmIHRoaXNGaWx0ZXIudHlwZSA9PT0gJ2RhdGUnICYmIHRoaXNGaWx0ZXIuc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlRmlsdGVyID0gdGhpc0ZpbHRlci5zZWxlY3RlZE9wdGlvbi5sYWJlbCB8fCB0aGlzLmxhYmVscy5jdXN0b21EYXRlUmFuZ2U7XG4gICAgICB9XG4gICAgICB0aGlzLmZpbHRlciA9IHRoaXNGaWx0ZXIudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyQWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZUZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGVmYXVsdFNvcnQgJiYgdGhpcy5pZCA9PT0gdGhpcy5kZWZhdWx0U29ydC5pZCkge1xuICAgICAgdGhpcy5pY29uID0gYHNvcnQtJHt0aGlzLmRlZmF1bHRTb3J0LnZhbHVlfWA7XG4gICAgICB0aGlzLnNvcnRBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLm11bHRpU2VsZWN0ID0gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnICYmIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID8gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUgPT09ICdtdWx0aS1zZWxlY3QnIDogZmFsc2U7XG4gICAgaWYgKHRoaXMubXVsdGlTZWxlY3QpIHtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmZpbHRlciA/IFsuLi50aGlzLmZpbHRlcl0gOiBbXTtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuID0gKHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zIGFzIHN0cmluZ1tdKS5tYXAoXG4gICAgICAgICAgICAob3B0aW9uOiBzdHJpbmcpOiB7IG9wdGlvbjogc3RyaW5nOyBoaWRkZW46IGJvb2xlYW4gfSA9PiAoeyBvcHRpb246IG9wdGlvbiwgaGlkZGVuOiBmYWxzZSB9KSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuID0gKHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zIGFzIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb25bXSkubWFwKFxuICAgICAgICAgICAgKG9wdGlvbjogSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbik6IHsgb3B0aW9uOiBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uOyBoaWRkZW46IGJvb2xlYW4gfSA9PiAoe1xuICAgICAgICAgICAgICBvcHRpb246IG9wdGlvbixcbiAgICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBpc1NlbGVjdGVkKG9wdGlvbiwgb3B0aW9uc0xpc3QpIHtcbiAgICBpZiAob3B0aW9uc0xpc3QpIHtcbiAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uLmhhc093blByb3BlcnR5KCd2YWx1ZScpID8gb3B0aW9uLnZhbHVlIDogb3B0aW9uO1xuXG4gICAgICBsZXQgZm91bmQgPSBvcHRpb25zTGlzdC5maW5kKChpdGVtKSA9PiB0aGlzLm9wdGlvblByZXNlbnRDaGVjayhpdGVtLCBvcHRpb25WYWx1ZSkpO1xuICAgICAgcmV0dXJuIGZvdW5kICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVTZWxlY3Rpb24ob3B0aW9uKSB7XG4gICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBvcHRpb24uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPyBvcHRpb24udmFsdWUgOiBvcHRpb247XG5cbiAgICBsZXQgb3B0aW9uSW5kZXggPSB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zLmZpbmRJbmRleCgoaXRlbSkgPT4gdGhpcy5vcHRpb25QcmVzZW50Q2hlY2soaXRlbSwgb3B0aW9uVmFsdWUpKTtcbiAgICB0aGlzLmVycm9yID0gZmFsc2U7XG4gICAgaWYgKG9wdGlvbkluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMuc3BsaWNlKG9wdGlvbkluZGV4LCAxKTtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5vcHRpb25GaWx0ZXIgJiZcbiAgICAgICAgIXRoaXMuZ2V0T3B0aW9uVGV4dChvcHRpb24pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAuc3RhcnRzV2l0aCh0aGlzLm9wdGlvbkZpbHRlci50b0xvd2VyQ2FzZSgpKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuW3RoaXMubXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuLmZpbmRJbmRleCgocmVjb3JkKSA9PiByZWNvcmQub3B0aW9uID09PSBvcHRpb24pXS5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zLnB1c2gob3B0aW9uVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvcHRpb25QcmVzZW50Q2hlY2soaXRlbSwgb3B0aW9uVmFsdWUpOiBib29sZWFuIHtcbiAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgcmV0dXJuIGl0ZW0udmFsdWUgPT09IG9wdGlvblZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXRlbSA9PT0gb3B0aW9uVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zID0gdGhpcy5maWx0ZXIgPyBbLi4udGhpcy5maWx0ZXJdIDogW107XG4gICAgdGhpcy5kcm9wZG93bi5jbG9zZVBhbmVsKCk7XG4gICAgdGhpcy5jbGVhck9wdGlvbkZpbHRlcigpO1xuICB9XG5cbiAgcHVibGljIGZpbHRlck11bHRpU2VsZWN0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCAmJiAhdGhpcy5maWx0ZXIpIHtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RIYXNWaXNpYmxlT3B0aW9ucygpICYmIHRoaXMuZHJvcGRvd24gPyAodGhpcy5lcnJvciA9IHRydWUpIDogbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhck9wdGlvbkZpbHRlcigpO1xuICAgICAgbGV0IGFjdHVhbEZpbHRlciA9IHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMCA/IFsuLi50aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zXSA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZmlsdGVyRGF0YShhY3R1YWxGaWx0ZXIpO1xuICAgICAgdGhpcy5kcm9wZG93bi5jbG9zZVBhbmVsKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG11bHRpU2VsZWN0T3B0aW9uRmlsdGVyKG9wdGlvbkZpbHRlcjogc3RyaW5nKSB7XG4gICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9uSXNIaWRkZW4uZm9yRWFjaCgocmVjb3JkKSA9PiB7XG4gICAgICBpZiAocmVjb3JkLm9wdGlvbikge1xuICAgICAgICByZWNvcmQuaGlkZGVuID0gIShcbiAgICAgICAgICB0aGlzLmdldE9wdGlvblRleHQocmVjb3JkLm9wdGlvbilcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAuc3RhcnRzV2l0aChvcHRpb25GaWx0ZXIudG9Mb3dlckNhc2UoKSkgfHwgdGhpcy5pc1NlbGVjdGVkKHJlY29yZC5vcHRpb24sIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbXVsdGlTZWxlY3RPcHRpb25Jc0hpZGRlbihvcHRpb246IHN0cmluZyB8IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9uSXNIaWRkZW4uZmluZCgocmVjb3JkKSA9PiByZWNvcmQub3B0aW9uID09PSBvcHRpb24pLmhpZGRlbjtcbiAgfVxuXG4gIHB1YmxpYyBtdWx0aVNlbGVjdEhhc1Zpc2libGVPcHRpb25zKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbi5zb21lKChyZWNvcmQpID0+ICFyZWNvcmQuaGlkZGVuKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3B0aW9uVGV4dChvcHRpb246IHN0cmluZyB8IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb24pOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9uICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG9wdGlvbi50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvcHQgPSBvcHRpb24gYXMgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbjtcbiAgICAgIHJldHVybiAob3B0LmxhYmVsLmxlbmd0aCA+IDAgPyBvcHQubGFiZWwgOiBvcHQudmFsdWUpLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBtdWx0aVNlbGVjdE9wdGlvbkZpbHRlckhhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgdGhpcy5lcnJvciA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuZHJvcGRvd24ucGFuZWxPcGVuICYmIGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVTQykge1xuICAgICAgICAvLyBlc2NhcGUgPSBjbGVhciB0ZXh0IGJveCBhbmQgY2xvc2VcbiAgICAgICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgICAgICB0aGlzLmNsZWFyT3B0aW9uRmlsdGVyKCk7XG4gICAgICAgIHRoaXMuZHJvcGRvd24uY2xvc2VQYW5lbCgpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FTlRFUikge1xuICAgICAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICAgIHRoaXMuZmlsdGVyTXVsdGlTZWxlY3QoKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIChldmVudC5rZXlDb2RlID49IDY1ICYmIGV2ZW50LmtleUNvZGUgPD0gOTApIHx8XG4gICAgICAgIChldmVudC5rZXlDb2RlID49IDk2ICYmIGV2ZW50LmtleUNvZGUgPD0gMTA1KSB8fFxuICAgICAgICAoZXZlbnQua2V5Q29kZSA+PSA0OCAmJiBldmVudC5rZXlDb2RlIDw9IDU3KVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMub3B0aW9uRmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJPcHRpb25GaWx0ZXIoKSB7XG4gICAgdGhpcy5lcnJvciA9IGZhbHNlO1xuICAgIGlmICh0aGlzLm9wdGlvbkZpbHRlci5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLm9wdGlvbkZpbHRlciA9ICcnO1xuICAgICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9uSXNIaWRkZW4uZm9yRWFjaCgocmVjb3JkKSA9PiB7XG4gICAgICAgIHJlY29yZC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGFydFJlc2l6ZShtb3VzZURvd25FdmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIG1vdXNlRG93bkV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbWluaW11bVdpZHRoID0gNjAgKyAodGhpcy5jb25maWcuZmlsdGVyYWJsZSA/IDMwIDogMCkgKyAodGhpcy5jb25maWcuc29ydGFibGUgPyAzMCA6IDApO1xuICAgIGxldCBzdGFydGluZ1dpZHRoOiBudW1iZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICBjb25zdCBtb3VzZU1vdmVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh3aW5kb3cuZG9jdW1lbnQsICdtb3VzZW1vdmUnKS5zdWJzY3JpYmUoKG1pZGRsZU1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGxldCBkaWZmZXJlbmNlV2lkdGg6IG51bWJlciA9IG1pZGRsZU1vdXNlRXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bkV2ZW50LmNsaWVudFg7XG4gICAgICBsZXQgd2lkdGg6IG51bWJlciA9IHN0YXJ0aW5nV2lkdGggKyBkaWZmZXJlbmNlV2lkdGg7XG4gICAgICBpZiAod2lkdGggPCBtaW5pbXVtV2lkdGgpIHtcbiAgICAgICAgd2lkdGggPSBtaW5pbXVtV2lkdGg7XG4gICAgICB9XG4gICAgICB0aGlzLl9jb2x1bW4ud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtaW4td2lkdGgnLCBgJHt0aGlzLl9jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXgtd2lkdGgnLCBgJHt0aGlzLl9jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuX2NvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMucmVzaXplZC5uZXh0KHRoaXMuX2NvbHVtbik7XG4gICAgfSk7XG5cbiAgICBsZXQgbW91c2VVcFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KHdpbmRvdy5kb2N1bWVudCwgJ21vdXNldXAnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgbW91c2VVcFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgbW91c2VNb3ZlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKG1vdXNlTW92ZVN1YnNjcmlwdGlvbik7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2gobW91c2VVcFN1YnNjcmlwdGlvbik7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlQ3VzdG9tUmFuZ2UoZXZlbnQ6IEV2ZW50LCB2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLnNob3dDdXN0b21SYW5nZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5kcm9wZG93bi5vcGVuUGFuZWwoKTsgLy8gRW5zdXJlcyB0aGF0IHRoZSBwYW5lbCBjb3JyZWN0bHkgdXBkYXRlcyB0byB0aGUgZHluYW1pYyBzaXplIG9mIHRoZSBkcm9wZG93blxuICB9XG5cbiAgcHVibGljIGZvY3VzSW5wdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmlsdGVySW5wdXQgJiYgdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpLCAwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubXVsdGlTZWxlY3QgJiYgdGhpcy5kcm9wZG93bikge1xuICAgICAgdGhpcy5kcm9wZG93bi5vbktleURvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5tdWx0aVNlbGVjdE9wdGlvbkZpbHRlckhhbmRsZUtleWRvd24oZXZlbnQpO1xuICAgICAgfTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vcHRpb25GaWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCksIDApO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc29ydCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5jaGFuZ2VUaW1lb3V0KTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuZ2V0TmV4dFNvcnREaXJlY3Rpb24odGhpcy5kaXJlY3Rpb24pO1xuICAgICAgdGhpcy5fc29ydC5zb3J0KHRoaXMuaWQsIHRoaXMuZGlyZWN0aW9uLCB0aGlzLmNvbmZpZy50cmFuc2Zvcm1zLnNvcnQpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAzMDApO1xuICB9XG5cbiAgcHVibGljIGZpbHRlckRhdGEoZmlsdGVyPzogYW55KTogdm9pZCB7XG4gICAgbGV0IGFjdHVhbEZpbHRlciA9IE5vdm9EYXRhVGFibGVGaWx0ZXJVdGlscy5jb25zdHJ1Y3RGaWx0ZXIoZmlsdGVyLCB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSwgdGhpcy5tdWx0aVNlbGVjdCk7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSA9PT0gJ2RhdGUnICYmIGZpbHRlciA/IGZpbHRlciA6IHVuZGVmaW5lZDtcblxuICAgIGlmICh0aGlzLmNoYW5nZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNoYW5nZVRpbWVvdXQpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGFjdHVhbEZpbHRlciA9PT0gJycpIHtcbiAgICAgICAgYWN0dWFsRmlsdGVyID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgdGhpcy5fc29ydC5maWx0ZXIoXG4gICAgICAgIHRoaXMuaWQsXG4gICAgICAgIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlLFxuICAgICAgICBhY3R1YWxGaWx0ZXIsXG4gICAgICAgIHRoaXMuY29uZmlnLnRyYW5zZm9ybXMuZmlsdGVyLFxuICAgICAgICB0aGlzLmFsbG93TXVsdGlwbGVGaWx0ZXJzLFxuICAgICAgICBzZWxlY3RlZE9wdGlvbixcbiAgICAgICk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJGaWx0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgIHRoaXMuYWN0aXZlRGF0ZUZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbHRlckRhdGEodW5kZWZpbmVkKTtcbiAgICB0aGlzLmNsZWFyT3B0aW9uRmlsdGVyKCk7XG4gICAgdGhpcy5kcm9wZG93bi5jbG9zZVBhbmVsKCk7XG4gIH1cblxuICBwcml2YXRlIGdldE5leHRTb3J0RGlyZWN0aW9uKGRpcmVjdGlvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuICdhc2MnO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09PSAnYXNjJykge1xuICAgICAgcmV0dXJuICdkZXNjJztcbiAgICB9XG4gICAgcmV0dXJuICdhc2MnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZhdWx0RGF0ZUZpbHRlck9wdGlvbnMoKTogSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbltdIHtcbiAgICBsZXQgb3B0czogSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbltdID0gW1xuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDFEYXksIG1pbjogLTEsIG1heDogMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDdEYXlzLCBtaW46IC03LCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QzMERheXMsIG1pbjogLTMwLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3Q5MERheXMsIG1pbjogLTkwLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QxWWVhciwgbWluOiAtMzY2LCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQxRGF5LCBtaW46IDAsIG1heDogMSB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDdEYXlzLCBtaW46IDAsIG1heDogNyB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDMwRGF5cywgbWluOiAwLCBtYXg6IDMwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0OTBEYXlzLCBtaW46IDAsIG1heDogOTAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQxWWVhciwgbWluOiAwLCBtYXg6IDM2NiB9LFxuICAgIF07XG4gICAgcmV0dXJuIG9wdHM7XG4gIH1cbn1cbiJdfQ==