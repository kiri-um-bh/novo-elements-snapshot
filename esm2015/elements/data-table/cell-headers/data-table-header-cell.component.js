/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Optional, ViewChild, ElementRef, Renderer2, EventEmitter, } from '@angular/core';
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
        if (actualFilter && actualFilter.hasOwnProperty('value')) {
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
        this.activeDateFilter = undefined;
        this.filterData(undefined);
    }
    /**
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
            <button *ngIf="config.sortable" tooltipPosition="right" [tooltip]="labels.sort" theme="icon" [icon]="icon" (click)="sort()" [class.active]="sortActive" data-automation-id="novo-data-table-sort"></button>
            <novo-dropdown *ngIf="config.filterable" side="right" parentScrollSelector=".novo-data-table-container" containerClass="data-table-dropdown" data-automation-id="novo-data-table-filter">
                <button type="button" theme="icon" icon="filter" [class.active]="filterActive" (click)="focusInput()" tooltipPosition="right" [tooltip]="labels.filters"></button>
                <div class="header">
                    <span>{{ labels.filters }}</span>
                    <button theme="dialogue" color="negative" icon="times" (click)="clearFilter()" *ngIf="filter !== null && filter !== undefined && filter !== ''" data-automation-id="novo-data-table-filter-clear">{{ labels.clear }}</button>
                </div>
                <ng-container [ngSwitch]="config.filterConfig.type">
                    <list *ngSwitchCase="'date'">
                        <ng-container *ngIf="!showCustomRange">
                            <item [class.active]="activeDateFilter === option.label" *ngFor="let option of config.filterConfig.options" (click)="filterData(option)" [attr.data-automation-id]="'novo-data-table-filter-' + option.label">
                                {{ option.label }} <i class="bhi-check" *ngIf="activeDateFilter === option.label"></i>
                            </item>
                        </ng-container>
                        <item [class.active]="labels.customDateRange === activeDateFilter" (click)="toggleCustomRange($event, true)" *ngIf="config.filterConfig.allowCustomRange && !showCustomRange" [keepOpen]="true">
                            {{ labels.customDateRange }} <i class="bhi-check" *ngIf="labels.customDateRange === activeDateFilter"></i>
                        </item>
                        <div class="calendar-container" *ngIf="showCustomRange">
                            <div (click)="toggleCustomRange($event, false)"><i class="bhi-previous"></i>{{ labels.backToPresetFilters }}</div>
                            <novo-date-picker (onSelect)="filterData($event)" [(ngModel)]="filter" range="true"></novo-date-picker>
                        </div>
                    </list>
                    <list *ngSwitchCase="'select'">
                        <item [class.active]="filter === option" *ngFor="let option of config.filterConfig.options" (click)="filterData(option)" [attr.data-automation-id]="'novo-data-table-filter-' + (option?.label || option)">
                            <span>{{ option?.label || option }}</span> <i class="bhi-check" *ngIf="option.hasOwnProperty('value') ? filter === option.value : filter === option"></i>
                        </item>
                    </list>
                    <list *ngSwitchDefault>
                        <item class="filter-search" keepOpen="true">
                            <input [type]="config.filterConfig.type" [(ngModel)]="filter" (ngModelChange)="filterData($event)" #filterInput data-automation-id="novo-data-table-filter-input"/>
                        </item>
                    </list>
                </ng-container>
            </novo-dropdown>
        </div>
        <div class="spacer"></div>
        <div>
          <i class="bhi-sortable data-table-header-resizable" (mousedown)="startResize($event)" *ngIf="config.resizable"></i>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
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
    NovoDataTableCellHeader.prototype._rerenderSubscription;
    /** @type {?} */
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
    NovoDataTableCellHeader.prototype.subscriptions;
    /** @type {?} */
    NovoDataTableCellHeader.prototype._column;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.changeDetectorRef;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.labels;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.state;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.renderer;
    /** @type {?} */
    NovoDataTableCellHeader.prototype.elementRef;
    /** @type {?} */
    NovoDataTableCellHeader.prototype._sort;
    /** @type {?} */
    NovoDataTableCellHeader.prototype._cdkColumnDef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxFQUdSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksR0FFYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7QUFVcEMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQWtEakQsTUFBTTs7Ozs7Ozs7OztJQXlFSixZQUNVLGlCQUFvQyxFQUNyQyxNQUF3QixFQUN2QixLQUF3QixFQUN4QixRQUFtQixFQUNuQixVQUFzQixFQUNYLEtBQWlDLEVBQ2pDLGFBQTJCO1FBTnRDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNu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LHlDQUFtQjs7SUFDbkIsNENBQXlCOztJQUN6QiwrQ0FBcUM7O0lBQ3JDLDZDQUFtQzs7SUFDbkMsa0RBQXdDOztJQUN4QyxtREFBZ0M7O0lBQ2hDLHlDQU1FOztJQUNGLGdEQUEyQzs7SUFDM0MsMENBQXFDOztJQUduQyxvREFBNEM7O0lBQzVDLHlDQUErQjs7SUFDL0Isd0NBQWdDOztJQUNoQywyQ0FBMkI7O0lBQzNCLDZDQUE4Qjs7SUFDOUIsd0NBQW9EOztJQUNwRCxnREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0NvbHVtbkRlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG5cbmltcG9ydCB7XG4gIElEYXRhVGFibGVTb3J0RmlsdGVyLFxuICBJRGF0YVRhYmxlQ2hhbmdlRXZlbnQsXG4gIElEYXRhVGFibGVDb2x1bW4sXG4gIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb24sXG4gIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWcsXG4gIElEYXRhVGFibGVDb2x1bW5Tb3J0Q29uZmlnLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVTb3J0RmlsdGVyIH0gZnJvbSAnLi4vc29ydC1maWx0ZXIvc29ydC1maWx0ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5vdm9Ecm9wZG93bkVsZW1lbnQgfSBmcm9tICcuLi8uLi9kcm9wZG93bi9Ecm9wZG93bic7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZVN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25vdm8tZGF0YS10YWJsZS1jZWxsLWNvbmZpZ10nLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aSBjbGFzcz1cImJoaS17eyBsYWJlbEljb24gfX0gbGFiZWwtaWNvblwiICpuZ0lmPVwibGFiZWxJY29uXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWhlYWRlci1pY29uXCI+PC9pPlxuICAgICAgICA8bGFiZWwgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWxhYmVsXCI+e3sgbGFiZWwgfX08L2xhYmVsPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNvbmZpZy5zb3J0YWJsZVwiIHRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCIgW3Rvb2x0aXBdPVwibGFiZWxzLnNvcnRcIiB0aGVtZT1cImljb25cIiBbaWNvbl09XCJpY29uXCIgKGNsaWNrKT1cInNvcnQoKVwiIFtjbGFzcy5hY3RpdmVdPVwic29ydEFjdGl2ZVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1zb3J0XCI+PC9idXR0b24+XG4gICAgICAgICAgICA8bm92by1kcm9wZG93biAqbmdJZj1cImNvbmZpZy5maWx0ZXJhYmxlXCIgc2lkZT1cInJpZ2h0XCIgcGFyZW50U2Nyb2xsU2VsZWN0b3I9XCIubm92by1kYXRhLXRhYmxlLWNvbnRhaW5lclwiIGNvbnRhaW5lckNsYXNzPVwiZGF0YS10YWJsZS1kcm9wZG93blwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1maWx0ZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aGVtZT1cImljb25cIiBpY29uPVwiZmlsdGVyXCIgW2NsYXNzLmFjdGl2ZV09XCJmaWx0ZXJBY3RpdmVcIiAoY2xpY2spPVwiZm9jdXNJbnB1dCgpXCIgdG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIiBbdG9vbHRpcF09XCJsYWJlbHMuZmlsdGVyc1wiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgbGFiZWxzLmZpbHRlcnMgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIGNvbG9yPVwibmVnYXRpdmVcIiBpY29uPVwidGltZXNcIiAoY2xpY2spPVwiY2xlYXJGaWx0ZXIoKVwiICpuZ0lmPVwiZmlsdGVyICE9PSBudWxsICYmIGZpbHRlciAhPT0gdW5kZWZpbmVkICYmIGZpbHRlciAhPT0gJydcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtZmlsdGVyLWNsZWFyXCI+e3sgbGFiZWxzLmNsZWFyIH19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiY29uZmlnLmZpbHRlckNvbmZpZy50eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaXN0ICpuZ1N3aXRjaENhc2U9XCInZGF0ZSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc2hvd0N1c3RvbVJhbmdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0gW2NsYXNzLmFjdGl2ZV09XCJhY3RpdmVEYXRlRmlsdGVyID09PSBvcHRpb24ubGFiZWxcIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9uc1wiIChjbGljayk9XCJmaWx0ZXJEYXRhKG9wdGlvbilcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tZGF0YS10YWJsZS1maWx0ZXItJyArIG9wdGlvbi5sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBvcHRpb24ubGFiZWwgfX0gPGkgY2xhc3M9XCJiaGktY2hlY2tcIiAqbmdJZj1cImFjdGl2ZURhdGVGaWx0ZXIgPT09IG9wdGlvbi5sYWJlbFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtIFtjbGFzcy5hY3RpdmVdPVwibGFiZWxzLmN1c3RvbURhdGVSYW5nZSA9PT0gYWN0aXZlRGF0ZUZpbHRlclwiIChjbGljayk9XCJ0b2dnbGVDdXN0b21SYW5nZSgkZXZlbnQsIHRydWUpXCIgKm5nSWY9XCJjb25maWcuZmlsdGVyQ29uZmlnLmFsbG93Q3VzdG9tUmFuZ2UgJiYgIXNob3dDdXN0b21SYW5nZVwiIFtrZWVwT3Blbl09XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFiZWxzLmN1c3RvbURhdGVSYW5nZSB9fSA8aSBjbGFzcz1cImJoaS1jaGVja1wiICpuZ0lmPVwibGFiZWxzLmN1c3RvbURhdGVSYW5nZSA9PT0gYWN0aXZlRGF0ZUZpbHRlclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1jb250YWluZXJcIiAqbmdJZj1cInNob3dDdXN0b21SYW5nZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKGNsaWNrKT1cInRvZ2dsZUN1c3RvbVJhbmdlKCRldmVudCwgZmFsc2UpXCI+PGkgY2xhc3M9XCJiaGktcHJldmlvdXNcIj48L2k+e3sgbGFiZWxzLmJhY2tUb1ByZXNldEZpbHRlcnMgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bm92by1kYXRlLXBpY2tlciAob25TZWxlY3QpPVwiZmlsdGVyRGF0YSgkZXZlbnQpXCIgWyhuZ01vZGVsKV09XCJmaWx0ZXJcIiByYW5nZT1cInRydWVcIj48L25vdm8tZGF0ZS1waWNrZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saXN0PlxuICAgICAgICAgICAgICAgICAgICA8bGlzdCAqbmdTd2l0Y2hDYXNlPVwiJ3NlbGVjdCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtIFtjbGFzcy5hY3RpdmVdPVwiZmlsdGVyID09PSBvcHRpb25cIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9uc1wiIChjbGljayk9XCJmaWx0ZXJEYXRhKG9wdGlvbilcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tZGF0YS10YWJsZS1maWx0ZXItJyArIChvcHRpb24/LmxhYmVsIHx8IG9wdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBvcHRpb24/LmxhYmVsIHx8IG9wdGlvbiB9fTwvc3Bhbj4gPGkgY2xhc3M9XCJiaGktY2hlY2tcIiAqbmdJZj1cIm9wdGlvbi5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSA/IGZpbHRlciA9PT0gb3B0aW9uLnZhbHVlIDogZmlsdGVyID09PSBvcHRpb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPGxpc3QgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiZmlsdGVyLXNlYXJjaFwiIGtlZXBPcGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbdHlwZV09XCJjb25maWcuZmlsdGVyQ29uZmlnLnR5cGVcIiBbKG5nTW9kZWwpXT1cImZpbHRlclwiIChuZ01vZGVsQ2hhbmdlKT1cImZpbHRlckRhdGEoJGV2ZW50KVwiICNmaWx0ZXJJbnB1dCBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtZmlsdGVyLWlucHV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25vdm8tZHJvcGRvd24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2VyXCI+PC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktc29ydGFibGUgZGF0YS10YWJsZS1oZWFkZXItcmVzaXphYmxlXCIgKG1vdXNlZG93bik9XCJzdGFydFJlc2l6ZSgkZXZlbnQpXCIgKm5nSWY9XCJjb25maWcucmVzaXphYmxlXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZUNlbGxIZWFkZXI8VD4gaW1wbGVtZW50cyBJRGF0YVRhYmxlU29ydEZpbHRlciwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdmaWx0ZXJJbnB1dCcpXG4gIGZpbHRlcklucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKE5vdm9Ecm9wZG93bkVsZW1lbnQpXG4gIGRyb3Bkb3duOiBOb3ZvRHJvcGRvd25FbGVtZW50O1xuXG4gIEBJbnB1dCgpXG4gIGRlZmF1bHRTb3J0OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfTtcbiAgQElucHV0KClcbiAgcmVzaXplZDogRXZlbnRFbWl0dGVyPElEYXRhVGFibGVDb2x1bW48VD4+O1xuXG4gIEBJbnB1dCgnbm92by1kYXRhLXRhYmxlLWNlbGwtY29uZmlnJylcbiAgc2V0IGNvbHVtbihjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pIHtcbiAgICB0aGlzLl9jb2x1bW4gPSBjb2x1bW47XG4gICAgdGhpcy5sYWJlbCA9IGNvbHVtbi50eXBlID09PSAnYWN0aW9uJyA/ICcnIDogY29sdW1uLmxhYmVsO1xuICAgIHRoaXMubGFiZWxJY29uID0gY29sdW1uLmxhYmVsSWNvbjtcblxuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgc29ydGFibGU6ICEhY29sdW1uLnNvcnRhYmxlLFxuICAgICAgZmlsdGVyYWJsZTogISFjb2x1bW4uZmlsdGVyYWJsZSxcbiAgICAgIHJlc2l6YWJsZTogISFjb2x1bW4ucmVzaXphYmxlLFxuICAgIH07XG5cbiAgICBsZXQgdHJhbnNmb3JtczogeyBmaWx0ZXI/OiBGdW5jdGlvbjsgc29ydD86IEZ1bmN0aW9uIH0gPSB7fTtcblxuICAgIGlmIChjb2x1bW4uZmlsdGVyYWJsZSAmJiBIZWxwZXJzLmlzT2JqZWN0KGNvbHVtbi5maWx0ZXJhYmxlKSkge1xuICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnID0gY29sdW1uLmZpbHRlcmFibGUgYXMgSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZztcbiAgICAgIGlmICghdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUpIHtcbiAgICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnID0geyB0eXBlOiAndGV4dCcgfTtcbiAgICAgIH1cbiAgICAgIGlmICgoY29sdW1uLmZpbHRlcmFibGUgYXMgSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZykudHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybXMuZmlsdGVyID0gKGNvbHVtbi5maWx0ZXJhYmxlIGFzIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWcpLnRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnID0geyB0eXBlOiAndGV4dCcgfTtcbiAgICB9XG5cbiAgICBpZiAoY29sdW1uLnNvcnRhYmxlICYmIEhlbHBlcnMuaXNPYmplY3QoY29sdW1uLnNvcnRhYmxlKSkge1xuICAgICAgaWYgKChjb2x1bW4uc29ydGFibGUgYXMgSURhdGFUYWJsZUNvbHVtblNvcnRDb25maWcpLnRyYW5zZm9ybSkge1xuICAgICAgICB0cmFuc2Zvcm1zLnNvcnQgPSAoY29sdW1uLnNvcnRhYmxlIGFzIElEYXRhVGFibGVDb2x1bW5Tb3J0Q29uZmlnKS50cmFuc2Zvcm07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID09PSAnZGF0ZScgJiYgIXRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zKSB7XG4gICAgICB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9ucyA9IHRoaXMuZ2V0RGVmYXVsdERhdGVGaWx0ZXJPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWcudHJhbnNmb3JtcyA9IHRyYW5zZm9ybXM7XG4gIH1cblxuICBwcml2YXRlIF9yZXJlbmRlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGNoYW5nZVRpbWVvdXQ6IGFueTtcblxuICBwdWJsaWMgbGFiZWw6IHN0cmluZztcbiAgcHVibGljIGljb246IHN0cmluZyA9ICdzb3J0YWJsZSc7XG4gIHB1YmxpYyBsYWJlbEljb246IHN0cmluZztcbiAgcHVibGljIGlkOiBzdHJpbmc7XG4gIHB1YmxpYyBmaWx0ZXI6IGFueTtcbiAgcHVibGljIGRpcmVjdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgZmlsdGVyQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzb3J0QWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzaG93Q3VzdG9tUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGFjdGl2ZURhdGVGaWx0ZXI6IHN0cmluZztcbiAgcHVibGljIGNvbmZpZzoge1xuICAgIHNvcnRhYmxlOiBib29sZWFuO1xuICAgIGZpbHRlcmFibGU6IGJvb2xlYW47XG4gICAgcmVzaXphYmxlOiBib29sZWFuO1xuICAgIHRyYW5zZm9ybXM/OiB7IGZpbHRlcj86IEZ1bmN0aW9uOyBzb3J0PzogRnVuY3Rpb24gfTtcbiAgICBmaWx0ZXJDb25maWc/OiBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnO1xuICB9O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgX2NvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RhdGU6IERhdGFUYWJsZVN0YXRlPFQ+LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIF9zb3J0OiBOb3ZvRGF0YVRhYmxlU29ydEZpbHRlcjxUPixcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgX2Nka0NvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLFxuICApIHtcbiAgICB0aGlzLl9yZXJlbmRlclN1YnNjcmlwdGlvbiA9IHN0YXRlLnVwZGF0ZXMuc3Vic2NyaWJlKChjaGFuZ2U6IElEYXRhVGFibGVDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoYW5nZS5zb3J0ICYmIGNoYW5nZS5zb3J0LmlkID09PSB0aGlzLmlkKSB7XG4gICAgICAgIHRoaXMuaWNvbiA9IGBzb3J0LSR7Y2hhbmdlLnNvcnQudmFsdWV9YDtcbiAgICAgICAgdGhpcy5zb3J0QWN0aXZlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaWNvbiA9ICdzb3J0YWJsZSc7XG4gICAgICAgIHRoaXMuc29ydEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZS5maWx0ZXIgJiYgY2hhbmdlLmZpbHRlci5pZCA9PT0gdGhpcy5pZCkge1xuICAgICAgICB0aGlzLmZpbHRlckFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gY2hhbmdlLmZpbHRlci52YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmlsdGVyQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2Nka0NvbHVtbkRlZikge1xuICAgICAgdGhpcy5pZCA9IHRoaXMuX2Nka0NvbHVtbkRlZi5uYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5kZWZhdWx0U29ydCAmJiB0aGlzLmlkID09PSB0aGlzLmRlZmF1bHRTb3J0LmlkKSB7XG4gICAgICB0aGlzLmljb24gPSBgc29ydC0ke3RoaXMuZGVmYXVsdFNvcnQudmFsdWV9YDtcbiAgICAgIHRoaXMuc29ydEFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXJlbmRlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbikgPT4ge1xuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc3RhcnRSZXNpemUobW91c2VEb3duRXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBtb3VzZURvd25FdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG1pbmltdW1XaWR0aCA9IDYwICsgKHRoaXMuY29uZmlnLmZpbHRlcmFibGUgPyAzMCA6IDApICsgKHRoaXMuY29uZmlnLnNvcnRhYmxlID8gMzAgOiAwKTtcbiAgICBsZXQgc3RhcnRpbmdXaWR0aDogbnVtYmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgY29uc3QgbW91c2VNb3ZlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQod2luZG93LmRvY3VtZW50LCAnbW91c2Vtb3ZlJykuc3Vic2NyaWJlKChtaWRkbGVNb3VzZUV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBsZXQgZGlmZmVyZW5jZVdpZHRoOiBudW1iZXIgPSBtaWRkbGVNb3VzZUV2ZW50LmNsaWVudFggLSBtb3VzZURvd25FdmVudC5jbGllbnRYO1xuICAgICAgbGV0IHdpZHRoOiBudW1iZXIgPSBzdGFydGluZ1dpZHRoICsgZGlmZmVyZW5jZVdpZHRoO1xuICAgICAgaWYgKHdpZHRoIDwgbWluaW11bVdpZHRoKSB7XG4gICAgICAgIHdpZHRoID0gbWluaW11bVdpZHRoO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29sdW1uLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWluLXdpZHRoJywgYCR7dGhpcy5fY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF4LXdpZHRoJywgYCR7dGhpcy5fY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLl9jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLnJlc2l6ZWQubmV4dCh0aGlzLl9jb2x1bW4pO1xuICAgIH0pO1xuXG4gICAgbGV0IG1vdXNlVXBTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh3aW5kb3cuZG9jdW1lbnQsICdtb3VzZXVwJykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIG1vdXNlVXBTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIG1vdXNlTW92ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChtb3VzZU1vdmVTdWJzY3JpcHRpb24pO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKG1vdXNlVXBTdWJzY3JpcHRpb24pO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUN1c3RvbVJhbmdlKGV2ZW50OiBFdmVudCwgdmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5zaG93Q3VzdG9tUmFuZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuZHJvcGRvd24ub3BlblBhbmVsKCk7IC8vIEVuc3VyZXMgdGhhdCB0aGUgcGFuZWwgY29ycmVjdGx5IHVwZGF0ZXMgdG8gdGhlIGR5bmFtaWMgc2l6ZSBvZiB0aGUgZHJvcGRvd25cbiAgfVxuXG4gIHB1YmxpYyBmb2N1c0lucHV0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpbHRlcklucHV0ICYmIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSwgMCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNvcnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhbmdlVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2hhbmdlVGltZW91dCk7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmdldE5leHRTb3J0RGlyZWN0aW9uKHRoaXMuZGlyZWN0aW9uKTtcbiAgICAgIHRoaXMuX3NvcnQuc29ydCh0aGlzLmlkLCB0aGlzLmRpcmVjdGlvbiwgdGhpcy5jb25maWcudHJhbnNmb3Jtcy5zb3J0KTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJEYXRhKGZpbHRlcj86IGFueSk6IHZvaWQge1xuICAgIGxldCBhY3R1YWxGaWx0ZXIgPSBmaWx0ZXI7XG4gICAgaWYgKHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID09PSAnZGF0ZScgJiYgZmlsdGVyKSB7XG4gICAgICB0aGlzLmFjdGl2ZURhdGVGaWx0ZXIgPSBmaWx0ZXIubGFiZWwgfHwgdGhpcy5sYWJlbHMuY3VzdG9tRGF0ZVJhbmdlO1xuICAgICAgaWYgKGZpbHRlci5zdGFydERhdGUgJiYgZmlsdGVyLmVuZERhdGUpIHtcbiAgICAgICAgYWN0dWFsRmlsdGVyID0ge1xuICAgICAgICAgIG1pbjogZGF0ZUZucy5zdGFydE9mRGF5KGZpbHRlci5zdGFydERhdGUuZGF0ZSksXG4gICAgICAgICAgbWF4OiBkYXRlRm5zLnN0YXJ0T2ZEYXkoZGF0ZUZucy5hZGREYXlzKGRhdGVGbnMuc3RhcnRPZkRheShmaWx0ZXIuZW5kRGF0ZS5kYXRlKSwgMSkpLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0dWFsRmlsdGVyID0ge1xuICAgICAgICAgIG1pbjogZmlsdGVyLm1pbiA/IGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZUb2RheSgpLCBmaWx0ZXIubWluKSA6IGRhdGVGbnMuc3RhcnRPZlRvZGF5KCksXG4gICAgICAgICAgbWF4OiBmaWx0ZXIubWF4ID8gZGF0ZUZucy5hZGREYXlzKGRhdGVGbnMuZW5kT2ZUb2RheSgpLCBmaWx0ZXIubWF4KSA6IGRhdGVGbnMuZW5kT2ZUb2RheSgpLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY3R1YWxGaWx0ZXIgJiYgYWN0dWFsRmlsdGVyLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICBhY3R1YWxGaWx0ZXIgPSBmaWx0ZXIudmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2hhbmdlVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2hhbmdlVGltZW91dCk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoYWN0dWFsRmlsdGVyID09PSAnJykge1xuICAgICAgICBhY3R1YWxGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9zb3J0LmZpbHRlcih0aGlzLmlkLCBhY3R1YWxGaWx0ZXIsIHRoaXMuY29uZmlnLnRyYW5zZm9ybXMuZmlsdGVyKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFjdGl2ZURhdGVGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWx0ZXJEYXRhKHVuZGVmaW5lZCk7XG4gIH1cblxuICBwcml2YXRlIGdldE5leHRTb3J0RGlyZWN0aW9uKGRpcmVjdGlvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuICdhc2MnO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09PSAnYXNjJykge1xuICAgICAgcmV0dXJuICdkZXNjJztcbiAgICB9XG4gICAgcmV0dXJuICdhc2MnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZhdWx0RGF0ZUZpbHRlck9wdGlvbnMoKTogSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbltdIHtcbiAgICBsZXQgb3B0czogSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbltdID0gW1xuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDFEYXksIG1pbjogLTEsIG1heDogMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDdEYXlzLCBtaW46IC03LCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QzMERheXMsIG1pbjogLTMwLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3Q5MERheXMsIG1pbjogLTkwLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QxWWVhciwgbWluOiAtMzY2LCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQxRGF5LCBtaW46IDAsIG1heDogMSB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDdEYXlzLCBtaW46IDAsIG1heDogNyB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDMwRGF5cywgbWluOiAwLCBtYXg6IDMwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0OTBEYXlzLCBtaW46IDAsIG1heDogOTAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQxWWVhciwgbWluOiAwLCBtYXg6IDM2NiB9LFxuICAgIF07XG4gICAgcmV0dXJuIG9wdHM7XG4gIH1cbn1cbiJdfQ==