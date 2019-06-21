/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Optional, ViewChild, ElementRef, Renderer2, EventEmitter, HostBinding, TemplateRef, } from '@angular/core';
import { CdkColumnDef } from '@angular/cdk/table';
import { fromEvent } from 'rxjs';
import * as dateFns from 'date-fns';
import { NovoDataTableSortFilter } from '../sort-filter/sort-filter.directive';
import { NovoDropdownElement } from '../../dropdown/Dropdown';
import { NovoLabelService } from '../../../services/novo-label-service';
import { DataTableState } from '../state/data-table-state.service';
import { Helpers } from '../../../utils/Helpers';
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
        this.icon = 'sortable';
        this.filterActive = false;
        this.sortActive = false;
        this.showCustomRange = false;
        this.multiSelect = false;
        this.multiSelectedOptions = [];
        this.subscriptions = [];
        this._rerenderSubscription = state.updates.subscribe((change) => {
            if (change.sort && change.sort.id === this.id) {
                this.icon = `sort-${change.sort.value}`;
                this.sortActive = true;
            }
            else {
                this.icon = 'sortable';
                this.sortActive = false;
            }
            if (change.filter && change.filter.id === this.id) {
                this.filterActive = true;
                this.filter = change.filter.value;
            }
            else {
                this.filterActive = false;
                this.filter = undefined;
                this.multiSelectedOptions = [];
            }
            changeDetectorRef.markForCheck();
        });
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
        if (this.defaultSort && this.id === this.defaultSort.id) {
            this.icon = `sort-${this.defaultSort.value}`;
            this.sortActive = true;
            this.changeDetectorRef.markForCheck();
        }
        this.multiSelect = this.config.filterConfig && this.config.filterConfig.type ? this.config.filterConfig.type === 'multi-select' : false;
        if (this.multiSelect) {
            this.multiSelectedOptions = this.filter ? [...this.filter] : [];
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._rerenderSubscription.unsubscribe();
        this.subscriptions.forEach((subscription) => {
            subscription.unsubscribe();
        });
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
            let found = optionsList.find((item) => this.optionPresentCheck(item, optionValue));
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
        const optionValue = option.value ? option.value : option;
        /** @type {?} */
        let optionIndex = this.multiSelectedOptions.findIndex((item) => this.optionPresentCheck(item, optionValue));
        if (optionIndex > -1) {
            this.multiSelectedOptions.splice(optionIndex, 1);
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
    }
    /**
     * @return {?}
     */
    filterMultiSelect() {
        /** @type {?} */
        let actualFilter = this.multiSelectedOptions.length > 0 ? [...this.multiSelectedOptions] : undefined;
        this.filterData(actualFilter);
        this.dropdown.closePanel();
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
        const mouseMoveSubscription = fromEvent(window.document, 'mousemove').subscribe((middleMouseEvent) => {
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
        });
        /** @type {?} */
        let mouseUpSubscription = fromEvent(window.document, 'mouseup').subscribe(() => {
            mouseUpSubscription.unsubscribe();
            mouseMoveSubscription.unsubscribe();
            this.changeDetectorRef.markForCheck();
        });
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
            setTimeout(() => this.filterInput.nativeElement.focus(), 0);
        }
    }
    /**
     * @return {?}
     */
    sort() {
        if (this.changeTimeout) {
            clearTimeout(this.changeTimeout);
        }
        this.changeTimeout = setTimeout(() => {
            this.direction = this.getNextSortDirection(this.direction);
            this._sort.sort(this.id, this.direction, this.config.transforms.sort);
            this.changeDetectorRef.markForCheck();
        }, 300);
    }
    /**
     * @param {?=} filter
     * @return {?}
     */
    filterData(filter) {
        /** @type {?} */
        let actualFilter = filter;
        if (this.config.filterConfig.type === 'date' && filter) {
            this.activeDateFilter = filter.label || this.labels.customDateRange;
            if (filter.startDate && filter.endDate) {
                actualFilter = {
                    min: dateFns.startOfDay(filter.startDate.date),
                    max: dateFns.startOfDay(dateFns.addDays(dateFns.startOfDay(filter.endDate.date), 1)),
                };
            }
            else {
                actualFilter = {
                    min: filter.min ? dateFns.addDays(dateFns.startOfToday(), filter.min) : dateFns.startOfToday(),
                    max: filter.max ? dateFns.addDays(dateFns.endOfToday(), filter.max) : dateFns.endOfToday(),
                };
            }
        }
        if (this.multiSelect && Array.isArray(filter)) {
            actualFilter = filter.map((filterItem) => {
                if (filterItem && filterItem.hasOwnProperty('value')) {
                    return filterItem.value;
                }
                return filterItem;
            });
        }
        else if (actualFilter && actualFilter.hasOwnProperty('value')) {
            actualFilter = filter.value;
        }
        if (this.changeTimeout) {
            clearTimeout(this.changeTimeout);
        }
        this.changeTimeout = setTimeout(() => {
            if (actualFilter === '') {
                actualFilter = undefined;
            }
            this._sort.filter(this.id, actualFilter, this.config.transforms.filter);
            this.changeDetectorRef.markForCheck();
        }, 300);
    }
    /**
     * @return {?}
     */
    clearFilter() {
        this.filter = undefined;
        this.multiSelectedOptions = [];
        this.activeDateFilter = undefined;
        this.filterData(undefined);
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
            <div class="dropdown-list-options">
              <item
                *ngFor="let option of config.filterConfig.options"
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
    filterInput: [{ type: ViewChild, args: ['filterInput',] }],
    dropdown: [{ type: ViewChild, args: [NovoDropdownElement,] }],
    defaultSort: [{ type: Input }],
    resized: [{ type: Input }],
    filterTemplate: [{ type: Input }],
    resizable: [{ type: HostBinding, args: ['class.resizable',] }],
    column: [{ type: Input, args: ['novo-data-table-cell-config',] }]
};
if (false) {
    /** @type {?} */
    NovoDataTableCellHeader.prototype.filterInput;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.dropdown;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.defaultSort;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxFQUdSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFFWixXQUFXLEVBQ1gsV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQztBQVVwQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBbUlqRCxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7Ozs7O0lBaUZsQyxZQUNVLGlCQUFvQyxFQUNyQyxNQUF3QixFQUN2QixLQUF3QixFQUN4QixRQUFtQixFQUNuQixVQUFzQixFQUNYLEtBQWlDLEVBQ2pDLGFBQTJCO1FBTnRDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FB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Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEhUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBaEtDLGlCQUFpQjtZQTRCVixnQkFBZ0I7WUFDaEIsY0FBYztZQXJCckIsU0FBUztZQURULFVBQVU7WUFtQkgsdUJBQXVCLHVCQThOM0IsUUFBUTtZQTFPSixZQUFZLHVCQTJPaEIsUUFBUTs7OzBCQXZGVixTQUFTLFNBQUMsYUFBYTt1QkFFdkIsU0FBUyxTQUFDLG1CQUFtQjswQkFHN0IsS0FBSztzQkFHTCxLQUFLOzZCQUVMLEtBQUs7d0JBRUwsV0FBVyxTQUFDLGlCQUFpQjtxQkFHN0IsS0FBSyxTQUFDLDZCQUE2Qjs7OztJQWZwQyw4Q0FDd0I7O0lBQ3hCLDJDQUM4Qjs7SUFFOUIsOENBQzJDOztJQUUzQywwQ0FDMkM7O0lBQzNDLGlEQUNpQzs7SUFDakMsNENBQzBCOzs7OztJQTBDMUIsd0RBQTRDOzs7OztJQUM1QyxnREFBMkI7O0lBRTNCLHdDQUFxQjs7SUFDckIsdUNBQWlDOztJQUNqQyw0Q0FBeUI7O0lBQ3pCLHFDQUFrQjs7SUFDbEIseUNBQW1COztJQUNuQiw0Q0FBeUI7O0lBQ3pCLCtDQUFxQzs7SUFDckMsNkNBQW1DOztJQUNuQyxrREFBd0M7O0lBQ3hDLG1EQUFnQzs7SUFDaEMseUNBTUU7O0lBQ0YsOENBQW9DOztJQUNwQyx1REFBNkM7Ozs7O0lBQzdDLGdEQUEyQzs7Ozs7SUFDM0MsMENBQXFDOzs7OztJQUduQyxvREFBNEM7O0lBQzVDLHlDQUErQjs7Ozs7SUFDL0Isd0NBQWdDOzs7OztJQUNoQywyQ0FBMkI7Ozs7O0lBQzNCLDZDQUE4Qjs7SUFDOUIsd0NBQW9EOztJQUNwRCxnREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBIb3N0QmluZGluZyxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrQ29sdW1uRGVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcblxuaW1wb3J0IHtcbiAgSURhdGFUYWJsZVNvcnRGaWx0ZXIsXG4gIElEYXRhVGFibGVDaGFuZ2VFdmVudCxcbiAgSURhdGFUYWJsZUNvbHVtbixcbiAgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbixcbiAgSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZyxcbiAgSURhdGFUYWJsZUNvbHVtblNvcnRDb25maWcsXG59IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZVNvcnRGaWx0ZXIgfSBmcm9tICcuLi9zb3J0LWZpbHRlci9zb3J0LWZpbHRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTm92b0Ryb3Bkb3duRWxlbWVudCB9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL0Ryb3Bkb3duJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVRhYmxlU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9kYXRhLXRhYmxlLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbm92by1kYXRhLXRhYmxlLWNlbGwtY29uZmlnXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgY2xhc3M9XCJiaGkte3sgbGFiZWxJY29uIH19IGxhYmVsLWljb25cIiAqbmdJZj1cImxhYmVsSWNvblwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1oZWFkZXItaWNvblwiPjwvaT5cbiAgICA8bGFiZWwgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWxhYmVsXCI+e3sgbGFiZWwgfX08L2xhYmVsPlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgICpuZ0lmPVwiY29uZmlnLnNvcnRhYmxlXCJcbiAgICAgICAgdG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICBbdG9vbHRpcF09XCJsYWJlbHMuc29ydFwiXG4gICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgIFtpY29uXT1cImljb25cIlxuICAgICAgICAoY2xpY2spPVwic29ydCgpXCJcbiAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJzb3J0QWN0aXZlXCJcbiAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLXNvcnRcIlxuICAgICAgPjwvYnV0dG9uPlxuICAgICAgPG5vdm8tZHJvcGRvd25cbiAgICAgICAgKm5nSWY9XCJjb25maWcuZmlsdGVyYWJsZVwiXG4gICAgICAgIHNpZGU9XCJyaWdodFwiXG4gICAgICAgIHBhcmVudFNjcm9sbFNlbGVjdG9yPVwiLm5vdm8tZGF0YS10YWJsZS1jb250YWluZXJcIlxuICAgICAgICBjb250YWluZXJDbGFzcz1cImRhdGEtdGFibGUtZHJvcGRvd25cIlxuICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtZmlsdGVyXCJcbiAgICAgID5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgICAgaWNvbj1cImZpbHRlclwiXG4gICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJmaWx0ZXJBY3RpdmVcIlxuICAgICAgICAgIChjbGljayk9XCJmb2N1c0lucHV0KClcIlxuICAgICAgICAgIHRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgICBbdG9vbHRpcF09XCJsYWJlbHMuZmlsdGVyc1wiXG4gICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgIDxzcGFuPnt7IGxhYmVscy5maWx0ZXJzIH19PC9zcGFuPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHRoZW1lPVwiZGlhbG9ndWVcIlxuICAgICAgICAgICAgY29sb3I9XCJuZWdhdGl2ZVwiXG4gICAgICAgICAgICBpY29uPVwidGltZXNcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImNsZWFyRmlsdGVyKClcIlxuICAgICAgICAgICAgKm5nSWY9XCJmaWx0ZXIgIT09IG51bGwgJiYgZmlsdGVyICE9PSB1bmRlZmluZWQgJiYgZmlsdGVyICE9PSAnJ1wiXG4gICAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtZmlsdGVyLWNsZWFyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBsYWJlbHMuY2xlYXIgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImNvbmZpZy5maWx0ZXJDb25maWcudHlwZVwiPlxuICAgICAgICAgIDxsaXN0ICpuZ1N3aXRjaENhc2U9XCInZGF0ZSdcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc2hvd0N1c3RvbVJhbmdlXCI+XG4gICAgICAgICAgICAgIDxpdGVtXG4gICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJhY3RpdmVEYXRlRmlsdGVyID09PSBvcHRpb24ubGFiZWxcIlxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZmlsdGVyRGF0YShvcHRpb24pXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tZGF0YS10YWJsZS1maWx0ZXItJyArIG9wdGlvbi5sYWJlbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBvcHRpb24ubGFiZWwgfX0gPGkgY2xhc3M9XCJiaGktY2hlY2tcIiAqbmdJZj1cImFjdGl2ZURhdGVGaWx0ZXIgPT09IG9wdGlvbi5sYWJlbFwiPjwvaT5cbiAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8aXRlbVxuICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImxhYmVscy5jdXN0b21EYXRlUmFuZ2UgPT09IGFjdGl2ZURhdGVGaWx0ZXJcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlQ3VzdG9tUmFuZ2UoJGV2ZW50LCB0cnVlKVwiXG4gICAgICAgICAgICAgICpuZ0lmPVwiY29uZmlnLmZpbHRlckNvbmZpZy5hbGxvd0N1c3RvbVJhbmdlICYmICFzaG93Q3VzdG9tUmFuZ2VcIlxuICAgICAgICAgICAgICBba2VlcE9wZW5dPVwidHJ1ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7IGxhYmVscy5jdXN0b21EYXRlUmFuZ2UgfX0gPGkgY2xhc3M9XCJiaGktY2hlY2tcIiAqbmdJZj1cImxhYmVscy5jdXN0b21EYXRlUmFuZ2UgPT09IGFjdGl2ZURhdGVGaWx0ZXJcIj48L2k+XG4gICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItY29udGFpbmVyXCIgKm5nSWY9XCJzaG93Q3VzdG9tUmFuZ2VcIj5cbiAgICAgICAgICAgICAgPGRpdiAoY2xpY2spPVwidG9nZ2xlQ3VzdG9tUmFuZ2UoJGV2ZW50LCBmYWxzZSlcIj48aSBjbGFzcz1cImJoaS1wcmV2aW91c1wiPjwvaT57eyBsYWJlbHMuYmFja1RvUHJlc2V0RmlsdGVycyB9fTwvZGl2PlxuICAgICAgICAgICAgICA8bm92by1kYXRlLXBpY2tlciAob25TZWxlY3QpPVwiZmlsdGVyRGF0YSgkZXZlbnQpXCIgWyhuZ01vZGVsKV09XCJmaWx0ZXJcIiByYW5nZT1cInRydWVcIj48L25vdm8tZGF0ZS1waWNrZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgPGxpc3QgKm5nU3dpdGNoQ2FzZT1cIidzZWxlY3QnXCI+XG4gICAgICAgICAgICA8aXRlbVxuICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImZpbHRlciA9PT0gb3B0aW9uXCJcbiAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiZmlsdGVyRGF0YShvcHRpb24pXCJcbiAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWRhdGEtdGFibGUtZmlsdGVyLScgKyAob3B0aW9uPy5sYWJlbCB8fCBvcHRpb24pXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4+e3sgb3B0aW9uPy5sYWJlbCB8fCBvcHRpb24gfX08L3NwYW4+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNoZWNrXCIgKm5nSWY9XCJvcHRpb24uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPyBmaWx0ZXIgPT09IG9wdGlvbi52YWx1ZSA6IGZpbHRlciA9PT0gb3B0aW9uXCI+PC9pPlxuICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICA8bGlzdCAqbmdTd2l0Y2hDYXNlPVwiJ211bHRpLXNlbGVjdCdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1saXN0LW9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgPGl0ZW1cbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZVNlbGVjdGlvbihvcHRpb24pXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tZGF0YS10YWJsZS1maWx0ZXItJyArIChvcHRpb24/LmxhYmVsIHx8IG9wdGlvbilcIlxuICAgICAgICAgICAgICAgIFtrZWVwT3Blbl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuYmhpLWNoZWNrYm94LWVtcHR5XT1cIiFpc1NlbGVjdGVkKG9wdGlvbiwgbXVsdGlTZWxlY3RlZE9wdGlvbnMpXCJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5iaGktY2hlY2tib3gtZmlsbGVkXT1cImlzU2VsZWN0ZWQob3B0aW9uLCBtdWx0aVNlbGVjdGVkT3B0aW9ucylcIlxuICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICA8bGlzdCAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbSdcIj5cbiAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiZmlsdGVyLXNlYXJjaFwiIGtlZXBPcGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZmlsdGVyVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb25maWcgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICA8bGlzdCAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgICAgICAgPGl0ZW0gY2xhc3M9XCJmaWx0ZXItc2VhcmNoXCIga2VlcE9wZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIFt0eXBlXT1cImNvbmZpZy5maWx0ZXJDb25maWcudHlwZVwiXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWx0ZXJcIlxuICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImZpbHRlckRhdGEoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgI2ZpbHRlcklucHV0XG4gICAgICAgICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgPC9saXN0PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiICpuZ0lmPVwibXVsdGlTZWxlY3RcIj5cbiAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiBjb2xvcj1cImRhcmtcIiAoY2xpY2spPVwiY2FuY2VsKClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtbXVsdGktc2VsZWN0LWNhbmNlbFwiPlxuICAgICAgICAgICAge3sgbGFiZWxzLmNhbmNlbCB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIGNvbG9yPVwicG9zaXRpdmVcIiAoY2xpY2spPVwiZmlsdGVyTXVsdGlTZWxlY3QoKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1tdWx0aS1zZWxlY3QtZmlsdGVyXCI+XG4gICAgICAgICAgICB7eyBsYWJlbHMuZmlsdGVycyB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbm92by1kcm9wZG93bj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic3BhY2VyXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtaGVhZGVyLXJlc2l6YWJsZVwiICpuZ0lmPVwiY29uZmlnLnJlc2l6YWJsZVwiPjxzcGFuIChtb3VzZWRvd24pPVwic3RhcnRSZXNpemUoJGV2ZW50KVwiPiZuYnNwOzwvc3Bhbj48L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVDZWxsSGVhZGVyPFQ+IGltcGxlbWVudHMgSURhdGFUYWJsZVNvcnRGaWx0ZXIsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnZmlsdGVySW5wdXQnKVxuICBmaWx0ZXJJbnB1dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChOb3ZvRHJvcGRvd25FbGVtZW50KVxuICBkcm9wZG93bjogTm92b0Ryb3Bkb3duRWxlbWVudDtcblxuICBASW5wdXQoKVxuICBkZWZhdWx0U29ydDogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH07XG5cbiAgQElucHV0KClcbiAgcmVzaXplZDogRXZlbnRFbWl0dGVyPElEYXRhVGFibGVDb2x1bW48VD4+O1xuICBASW5wdXQoKVxuICBmaWx0ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5yZXNpemFibGUnKVxuICBwdWJsaWMgcmVzaXphYmxlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgnbm92by1kYXRhLXRhYmxlLWNlbGwtY29uZmlnJylcbiAgc2V0IGNvbHVtbihjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pIHtcbiAgICB0aGlzLl9jb2x1bW4gPSBjb2x1bW47XG4gICAgdGhpcy5sYWJlbCA9IGNvbHVtbi50eXBlID09PSAnYWN0aW9uJyA/ICcnIDogY29sdW1uLmxhYmVsO1xuICAgIHRoaXMubGFiZWxJY29uID0gY29sdW1uLmxhYmVsSWNvbjtcblxuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgc29ydGFibGU6ICEhY29sdW1uLnNvcnRhYmxlLFxuICAgICAgZmlsdGVyYWJsZTogISFjb2x1bW4uZmlsdGVyYWJsZSxcbiAgICAgIHJlc2l6YWJsZTogISFjb2x1bW4ucmVzaXphYmxlLFxuICAgIH07XG4gICAgdGhpcy5yZXNpemFibGUgPSB0aGlzLmNvbmZpZy5yZXNpemFibGU7XG5cbiAgICBsZXQgdHJhbnNmb3JtczogeyBmaWx0ZXI/OiBGdW5jdGlvbjsgc29ydD86IEZ1bmN0aW9uIH0gPSB7fTtcblxuICAgIGlmIChjb2x1bW4uZmlsdGVyYWJsZSAmJiBIZWxwZXJzLmlzT2JqZWN0KGNvbHVtbi5maWx0ZXJhYmxlKSkge1xuICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnID0gY29sdW1uLmZpbHRlcmFibGUgYXMgSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZztcbiAgICAgIGlmICghdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUpIHtcbiAgICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnID0geyB0eXBlOiAndGV4dCcgfTtcbiAgICAgIH1cbiAgICAgIGlmICgoY29sdW1uLmZpbHRlcmFibGUgYXMgSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZykudHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybXMuZmlsdGVyID0gKGNvbHVtbi5maWx0ZXJhYmxlIGFzIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWcpLnRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnID0geyB0eXBlOiAndGV4dCcgfTtcbiAgICB9XG5cbiAgICBpZiAoY29sdW1uLnNvcnRhYmxlICYmIEhlbHBlcnMuaXNPYmplY3QoY29sdW1uLnNvcnRhYmxlKSkge1xuICAgICAgaWYgKChjb2x1bW4uc29ydGFibGUgYXMgSURhdGFUYWJsZUNvbHVtblNvcnRDb25maWcpLnRyYW5zZm9ybSkge1xuICAgICAgICB0cmFuc2Zvcm1zLnNvcnQgPSAoY29sdW1uLnNvcnRhYmxlIGFzIElEYXRhVGFibGVDb2x1bW5Tb3J0Q29uZmlnKS50cmFuc2Zvcm07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID09PSAnZGF0ZScgJiYgIXRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zKSB7XG4gICAgICB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9ucyA9IHRoaXMuZ2V0RGVmYXVsdERhdGVGaWx0ZXJPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWcudHJhbnNmb3JtcyA9IHRyYW5zZm9ybXM7XG4gIH1cblxuICBwcml2YXRlIF9yZXJlbmRlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGNoYW5nZVRpbWVvdXQ6IGFueTtcblxuICBwdWJsaWMgbGFiZWw6IHN0cmluZztcbiAgcHVibGljIGljb246IHN0cmluZyA9ICdzb3J0YWJsZSc7XG4gIHB1YmxpYyBsYWJlbEljb246IHN0cmluZztcbiAgcHVibGljIGlkOiBzdHJpbmc7XG4gIHB1YmxpYyBmaWx0ZXI6IGFueTtcbiAgcHVibGljIGRpcmVjdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgZmlsdGVyQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzb3J0QWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzaG93Q3VzdG9tUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGFjdGl2ZURhdGVGaWx0ZXI6IHN0cmluZztcbiAgcHVibGljIGNvbmZpZzoge1xuICAgIHNvcnRhYmxlOiBib29sZWFuO1xuICAgIGZpbHRlcmFibGU6IGJvb2xlYW47XG4gICAgcmVzaXphYmxlOiBib29sZWFuO1xuICAgIHRyYW5zZm9ybXM/OiB7IGZpbHRlcj86IEZ1bmN0aW9uOyBzb3J0PzogRnVuY3Rpb24gfTtcbiAgICBmaWx0ZXJDb25maWc/OiBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnO1xuICB9O1xuICBwdWJsaWMgbXVsdGlTZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIG11bHRpU2VsZWN0ZWRPcHRpb25zOiBBcnJheTxhbnk+ID0gW107XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBfY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdGF0ZTogRGF0YVRhYmxlU3RhdGU8VD4sXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgX3NvcnQ6IE5vdm9EYXRhVGFibGVTb3J0RmlsdGVyPFQ+LFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBfY2RrQ29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsXG4gICkge1xuICAgIHRoaXMuX3JlcmVuZGVyU3Vic2NyaXB0aW9uID0gc3RhdGUudXBkYXRlcy5zdWJzY3JpYmUoKGNoYW5nZTogSURhdGFUYWJsZUNoYW5nZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hhbmdlLnNvcnQgJiYgY2hhbmdlLnNvcnQuaWQgPT09IHRoaXMuaWQpIHtcbiAgICAgICAgdGhpcy5pY29uID0gYHNvcnQtJHtjaGFuZ2Uuc29ydC52YWx1ZX1gO1xuICAgICAgICB0aGlzLnNvcnRBY3RpdmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pY29uID0gJ3NvcnRhYmxlJztcbiAgICAgICAgdGhpcy5zb3J0QWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlLmZpbHRlciAmJiBjaGFuZ2UuZmlsdGVyLmlkID09PSB0aGlzLmlkKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBjaGFuZ2UuZmlsdGVyLnZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5maWx0ZXJBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jZGtDb2x1bW5EZWYpIHtcbiAgICAgIHRoaXMuaWQgPSB0aGlzLl9jZGtDb2x1bW5EZWYubmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGVmYXVsdFNvcnQgJiYgdGhpcy5pZCA9PT0gdGhpcy5kZWZhdWx0U29ydC5pZCkge1xuICAgICAgdGhpcy5pY29uID0gYHNvcnQtJHt0aGlzLmRlZmF1bHRTb3J0LnZhbHVlfWA7XG4gICAgICB0aGlzLnNvcnRBY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgdGhpcy5tdWx0aVNlbGVjdCA9IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZyAmJiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSA/IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID09PSAnbXVsdGktc2VsZWN0JyA6IGZhbHNlO1xuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0KSB7XG4gICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zID0gdGhpcy5maWx0ZXIgPyBbLi4udGhpcy5maWx0ZXJdIDogW107XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlcmVuZGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goKHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uKSA9PiB7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBpc1NlbGVjdGVkKG9wdGlvbiwgb3B0aW9uc0xpc3QpIHtcbiAgICBpZiAob3B0aW9uc0xpc3QpIHtcbiAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uLmhhc093blByb3BlcnR5KCd2YWx1ZScpID8gb3B0aW9uLnZhbHVlIDogb3B0aW9uO1xuXG4gICAgICBsZXQgZm91bmQgPSBvcHRpb25zTGlzdC5maW5kKChpdGVtKSA9PiB0aGlzLm9wdGlvblByZXNlbnRDaGVjayhpdGVtLCBvcHRpb25WYWx1ZSkpO1xuICAgICAgcmV0dXJuIGZvdW5kICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVTZWxlY3Rpb24ob3B0aW9uKSB7XG4gICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBvcHRpb24udmFsdWUgPyBvcHRpb24udmFsdWUgOiBvcHRpb247XG5cbiAgICBsZXQgb3B0aW9uSW5kZXggPSB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zLmZpbmRJbmRleCgoaXRlbSkgPT4gdGhpcy5vcHRpb25QcmVzZW50Q2hlY2soaXRlbSwgb3B0aW9uVmFsdWUpKTtcblxuICAgIGlmIChvcHRpb25JbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zLnNwbGljZShvcHRpb25JbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMucHVzaChvcHRpb25WYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9wdGlvblByZXNlbnRDaGVjayhpdGVtLCBvcHRpb25WYWx1ZSk6IGJvb2xlYW4ge1xuICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICByZXR1cm4gaXRlbS52YWx1ZSA9PT0gb3B0aW9uVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpdGVtID09PSBvcHRpb25WYWx1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmZpbHRlciA/IFsuLi50aGlzLmZpbHRlcl0gOiBbXTtcbiAgICB0aGlzLmRyb3Bkb3duLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJNdWx0aVNlbGVjdCgpOiB2b2lkIHtcbiAgICBsZXQgYWN0dWFsRmlsdGVyID0gdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwID8gWy4uLnRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnNdIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuZmlsdGVyRGF0YShhY3R1YWxGaWx0ZXIpO1xuICAgIHRoaXMuZHJvcGRvd24uY2xvc2VQYW5lbCgpO1xuICB9XG5cbiAgcHVibGljIHN0YXJ0UmVzaXplKG1vdXNlRG93bkV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgbW91c2VEb3duRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBtaW5pbXVtV2lkdGggPSA2MCArICh0aGlzLmNvbmZpZy5maWx0ZXJhYmxlID8gMzAgOiAwKSArICh0aGlzLmNvbmZpZy5zb3J0YWJsZSA/IDMwIDogMCk7XG4gICAgbGV0IHN0YXJ0aW5nV2lkdGg6IG51bWJlciA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIGNvbnN0IG1vdXNlTW92ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KHdpbmRvdy5kb2N1bWVudCwgJ21vdXNlbW92ZScpLnN1YnNjcmliZSgobWlkZGxlTW91c2VFdmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgbGV0IGRpZmZlcmVuY2VXaWR0aDogbnVtYmVyID0gbWlkZGxlTW91c2VFdmVudC5jbGllbnRYIC0gbW91c2VEb3duRXZlbnQuY2xpZW50WDtcbiAgICAgIGxldCB3aWR0aDogbnVtYmVyID0gc3RhcnRpbmdXaWR0aCArIGRpZmZlcmVuY2VXaWR0aDtcbiAgICAgIGlmICh3aWR0aCA8IG1pbmltdW1XaWR0aCkge1xuICAgICAgICB3aWR0aCA9IG1pbmltdW1XaWR0aDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbHVtbi53aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21pbi13aWR0aCcsIGAke3RoaXMuX2NvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21heC13aWR0aCcsIGAke3RoaXMuX2NvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7dGhpcy5fY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5yZXNpemVkLm5leHQodGhpcy5fY29sdW1uKTtcbiAgICB9KTtcblxuICAgIGxldCBtb3VzZVVwU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQod2luZG93LmRvY3VtZW50LCAnbW91c2V1cCcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBtb3VzZVVwU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICBtb3VzZU1vdmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2gobW91c2VNb3ZlU3Vic2NyaXB0aW9uKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChtb3VzZVVwU3Vic2NyaXB0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVDdXN0b21SYW5nZShldmVudDogRXZlbnQsIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuc2hvd0N1c3RvbVJhbmdlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmRyb3Bkb3duLm9wZW5QYW5lbCgpOyAvLyBFbnN1cmVzIHRoYXQgdGhlIHBhbmVsIGNvcnJlY3RseSB1cGRhdGVzIHRvIHRoZSBkeW5hbWljIHNpemUgb2YgdGhlIGRyb3Bkb3duXG4gIH1cblxuICBwdWJsaWMgZm9jdXNJbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maWx0ZXJJbnB1dCAmJiB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCksIDApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzb3J0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYW5nZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNoYW5nZVRpbWVvdXQpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5nZXROZXh0U29ydERpcmVjdGlvbih0aGlzLmRpcmVjdGlvbik7XG4gICAgICB0aGlzLl9zb3J0LnNvcnQodGhpcy5pZCwgdGhpcy5kaXJlY3Rpb24sIHRoaXMuY29uZmlnLnRyYW5zZm9ybXMuc29ydCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyRGF0YShmaWx0ZXI/OiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgYWN0dWFsRmlsdGVyID0gZmlsdGVyO1xuICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSA9PT0gJ2RhdGUnICYmIGZpbHRlcikge1xuICAgICAgdGhpcy5hY3RpdmVEYXRlRmlsdGVyID0gZmlsdGVyLmxhYmVsIHx8IHRoaXMubGFiZWxzLmN1c3RvbURhdGVSYW5nZTtcbiAgICAgIGlmIChmaWx0ZXIuc3RhcnREYXRlICYmIGZpbHRlci5lbmREYXRlKSB7XG4gICAgICAgIGFjdHVhbEZpbHRlciA9IHtcbiAgICAgICAgICBtaW46IGRhdGVGbnMuc3RhcnRPZkRheShmaWx0ZXIuc3RhcnREYXRlLmRhdGUpLFxuICAgICAgICAgIG1heDogZGF0ZUZucy5zdGFydE9mRGF5KGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZEYXkoZmlsdGVyLmVuZERhdGUuZGF0ZSksIDEpKSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdHVhbEZpbHRlciA9IHtcbiAgICAgICAgICBtaW46IGZpbHRlci5taW4gPyBkYXRlRm5zLmFkZERheXMoZGF0ZUZucy5zdGFydE9mVG9kYXkoKSwgZmlsdGVyLm1pbikgOiBkYXRlRm5zLnN0YXJ0T2ZUb2RheSgpLFxuICAgICAgICAgIG1heDogZmlsdGVyLm1heCA/IGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLmVuZE9mVG9kYXkoKSwgZmlsdGVyLm1heCkgOiBkYXRlRm5zLmVuZE9mVG9kYXkoKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCAmJiBBcnJheS5pc0FycmF5KGZpbHRlcikpIHtcbiAgICAgIGFjdHVhbEZpbHRlciA9IGZpbHRlci5tYXAoKGZpbHRlckl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGZpbHRlckl0ZW0gJiYgZmlsdGVySXRlbS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICAgIHJldHVybiBmaWx0ZXJJdGVtLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWx0ZXJJdGVtO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhY3R1YWxGaWx0ZXIgJiYgYWN0dWFsRmlsdGVyLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICBhY3R1YWxGaWx0ZXIgPSBmaWx0ZXIudmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2hhbmdlVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2hhbmdlVGltZW91dCk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoYWN0dWFsRmlsdGVyID09PSAnJykge1xuICAgICAgICBhY3R1YWxGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9zb3J0LmZpbHRlcih0aGlzLmlkLCBhY3R1YWxGaWx0ZXIsIHRoaXMuY29uZmlnLnRyYW5zZm9ybXMuZmlsdGVyKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgdGhpcy5hY3RpdmVEYXRlRmlsdGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZmlsdGVyRGF0YSh1bmRlZmluZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXh0U29ydERpcmVjdGlvbihkaXJlY3Rpb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgIHJldHVybiAnYXNjJztcbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2FzYycpIHtcbiAgICAgIHJldHVybiAnZGVzYyc7XG4gICAgfVxuICAgIHJldHVybiAnYXNjJztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmYXVsdERhdGVGaWx0ZXJPcHRpb25zKCk6IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb25bXSB7XG4gICAgbGV0IG9wdHM6IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb25bXSA9IFtcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QxRGF5LCBtaW46IC0xLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3Q3RGF5cywgbWluOiAtNywgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MzBEYXlzLCBtaW46IC0zMCwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0OTBEYXlzLCBtaW46IC05MCwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MVllYXIsIG1pbjogLTM2NiwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MURheSwgbWluOiAwLCBtYXg6IDEgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQ3RGF5cywgbWluOiAwLCBtYXg6IDcgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQzMERheXMsIG1pbjogMCwgbWF4OiAzMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDkwRGF5cywgbWluOiAwLCBtYXg6IDkwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MVllYXIsIG1pbjogMCwgbWF4OiAzNjYgfSxcbiAgICBdO1xuICAgIHJldHVybiBvcHRzO1xuICB9XG59XG4iXX0=