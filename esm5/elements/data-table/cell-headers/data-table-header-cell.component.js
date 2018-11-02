/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Optional, ViewChild, ElementRef, Renderer2, EventEmitter, HostBinding, } from '@angular/core';
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
var NovoDataTableCellHeader = /** @class */ (function () {
    function NovoDataTableCellHeader(changeDetectorRef, labels, state, renderer, elementRef, _sort, _cdkColumnDef) {
        var _this = this;
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
        this._rerenderSubscription = state.updates.subscribe(function (change) {
            if (change.sort && change.sort.id === _this.id) {
                _this.icon = "sort-" + change.sort.value;
                _this.sortActive = true;
            }
            else {
                _this.icon = 'sortable';
                _this.sortActive = false;
            }
            if (change.filter && change.filter.id === _this.id) {
                _this.filterActive = true;
                _this.filter = change.filter.value;
            }
            else {
                _this.filterActive = false;
                _this.filter = undefined;
            }
            changeDetectorRef.markForCheck();
        });
    }
    Object.defineProperty(NovoDataTableCellHeader.prototype, "column", {
        set: /**
         * @param {?} column
         * @return {?}
         */
        function (column) {
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
            var transforms = {};
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this._cdkColumnDef) {
            this.id = this._cdkColumnDef.name;
        }
        if (this.defaultSort && this.id === this.defaultSort.id) {
            this.icon = "sort-" + this.defaultSort.value;
            this.sortActive = true;
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._rerenderSubscription.unsubscribe();
        this.subscriptions.forEach(function (subscription) {
            subscription.unsubscribe();
        });
    };
    /**
     * @param {?} mouseDownEvent
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.startResize = /**
     * @param {?} mouseDownEvent
     * @return {?}
     */
    function (mouseDownEvent) {
        var _this = this;
        mouseDownEvent.preventDefault();
        /** @type {?} */
        var minimumWidth = 60 + (this.config.filterable ? 30 : 0) + (this.config.sortable ? 30 : 0);
        /** @type {?} */
        var startingWidth = this.elementRef.nativeElement.getBoundingClientRect().width;
        /** @type {?} */
        var mouseMoveSubscription = fromEvent(window.document, 'mousemove').subscribe(function (middleMouseEvent) {
            /** @type {?} */
            var differenceWidth = middleMouseEvent.clientX - mouseDownEvent.clientX;
            /** @type {?} */
            var width = startingWidth + differenceWidth;
            if (width < minimumWidth) {
                width = minimumWidth;
            }
            _this._column.width = width;
            _this.renderer.setStyle(_this.elementRef.nativeElement, 'min-width', _this._column.width + "px");
            _this.renderer.setStyle(_this.elementRef.nativeElement, 'max-width', _this._column.width + "px");
            _this.renderer.setStyle(_this.elementRef.nativeElement, 'width', _this._column.width + "px");
            _this.changeDetectorRef.markForCheck();
            _this.resized.next(_this._column);
        });
        /** @type {?} */
        var mouseUpSubscription = fromEvent(window.document, 'mouseup').subscribe(function () {
            mouseUpSubscription.unsubscribe();
            mouseMoveSubscription.unsubscribe();
            _this.changeDetectorRef.markForCheck();
        });
        this.subscriptions.push(mouseMoveSubscription);
        this.subscriptions.push(mouseUpSubscription);
    };
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.toggleCustomRange = /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    function (event, value) {
        Helpers.swallowEvent(event);
        this.showCustomRange = value;
        this.changeDetectorRef.markForCheck();
        this.dropdown.openPanel(); // Ensures that the panel correctly updates to the dynamic size of the dropdown
    };
    /**
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.focusInput = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.filterInput && this.filterInput.nativeElement) {
            setTimeout(function () { return _this.filterInput.nativeElement.focus(); }, 0);
        }
    };
    /**
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.sort = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.changeTimeout) {
            clearTimeout(this.changeTimeout);
        }
        this.changeTimeout = setTimeout(function () {
            _this.direction = _this.getNextSortDirection(_this.direction);
            _this._sort.sort(_this.id, _this.direction, _this.config.transforms.sort);
            _this.changeDetectorRef.markForCheck();
        }, 300);
    };
    /**
     * @param {?=} filter
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.filterData = /**
     * @param {?=} filter
     * @return {?}
     */
    function (filter) {
        var _this = this;
        /** @type {?} */
        var actualFilter = filter;
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
        this.changeTimeout = setTimeout(function () {
            if (actualFilter === '') {
                actualFilter = undefined;
            }
            _this._sort.filter(_this.id, actualFilter, _this.config.transforms.filter);
            _this.changeDetectorRef.markForCheck();
        }, 300);
    };
    /**
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.clearFilter = /**
     * @return {?}
     */
    function () {
        this.filter = undefined;
        this.activeDateFilter = undefined;
        this.filterData(undefined);
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.getNextSortDirection = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        if (!direction) {
            return 'asc';
        }
        if (direction === 'asc') {
            return 'desc';
        }
        return 'asc';
    };
    /**
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.getDefaultDateFilterOptions = /**
     * @return {?}
     */
    function () {
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
        return opts;
    };
    NovoDataTableCellHeader.decorators = [
        { type: Component, args: [{
                    selector: '[novo-data-table-cell-config]',
                    template: "\n        <i class=\"bhi-{{ labelIcon }} label-icon\" *ngIf=\"labelIcon\" data-automation-id=\"novo-data-table-header-icon\"></i>\n        <label data-automation-id=\"novo-data-table-label\">{{ label }}</label>\n        <div>\n            <button *ngIf=\"config.sortable\" tooltipPosition=\"right\" [tooltip]=\"labels.sort\" theme=\"icon\" [icon]=\"icon\" (click)=\"sort()\" [class.active]=\"sortActive\" data-automation-id=\"novo-data-table-sort\"></button>\n            <novo-dropdown *ngIf=\"config.filterable\" side=\"right\" parentScrollSelector=\".novo-data-table-container\" containerClass=\"data-table-dropdown\" data-automation-id=\"novo-data-table-filter\">\n                <button type=\"button\" theme=\"icon\" icon=\"filter\" [class.active]=\"filterActive\" (click)=\"focusInput()\" tooltipPosition=\"right\" [tooltip]=\"labels.filters\"></button>\n                <div class=\"header\">\n                    <span>{{ labels.filters }}</span>\n                    <button theme=\"dialogue\" color=\"negative\" icon=\"times\" (click)=\"clearFilter()\" *ngIf=\"filter !== null && filter !== undefined && filter !== ''\" data-automation-id=\"novo-data-table-filter-clear\">{{ labels.clear }}</button>\n                </div>\n                <ng-container [ngSwitch]=\"config.filterConfig.type\">\n                    <list *ngSwitchCase=\"'date'\">\n                        <ng-container *ngIf=\"!showCustomRange\">\n                            <item [class.active]=\"activeDateFilter === option.label\" *ngFor=\"let option of config.filterConfig.options\" (click)=\"filterData(option)\" [attr.data-automation-id]=\"'novo-data-table-filter-' + option.label\">\n                                {{ option.label }} <i class=\"bhi-check\" *ngIf=\"activeDateFilter === option.label\"></i>\n                            </item>\n                        </ng-container>\n                        <item [class.active]=\"labels.customDateRange === activeDateFilter\" (click)=\"toggleCustomRange($event, true)\" *ngIf=\"config.filterConfig.allowCustomRange && !showCustomRange\" [keepOpen]=\"true\">\n                            {{ labels.customDateRange }} <i class=\"bhi-check\" *ngIf=\"labels.customDateRange === activeDateFilter\"></i>\n                        </item>\n                        <div class=\"calendar-container\" *ngIf=\"showCustomRange\">\n                            <div (click)=\"toggleCustomRange($event, false)\"><i class=\"bhi-previous\"></i>{{ labels.backToPresetFilters }}</div>\n                            <novo-date-picker (onSelect)=\"filterData($event)\" [(ngModel)]=\"filter\" range=\"true\"></novo-date-picker>\n                        </div>\n                    </list>\n                    <list *ngSwitchCase=\"'select'\">\n                        <item [class.active]=\"filter === option\" *ngFor=\"let option of config.filterConfig.options\" (click)=\"filterData(option)\" [attr.data-automation-id]=\"'novo-data-table-filter-' + (option?.label || option)\">\n                            <span>{{ option?.label || option }}</span> <i class=\"bhi-check\" *ngIf=\"option.hasOwnProperty('value') ? filter === option.value : filter === option\"></i>\n                        </item>\n                    </list>\n                    <list *ngSwitchDefault>\n                        <item class=\"filter-search\" keepOpen=\"true\">\n                            <input [type]=\"config.filterConfig.type\" [(ngModel)]=\"filter\" (ngModelChange)=\"filterData($event)\" #filterInput data-automation-id=\"novo-data-table-filter-input\"/>\n                        </item>\n                    </list>\n                </ng-container>\n            </novo-dropdown>\n        </div>\n        <div class=\"spacer\"></div>\n        <div class=\"data-table-header-resizable\" *ngIf=\"config.resizable\">\n          <span (mousedown)=\"startResize($event)\" >&nbsp;</span>\n        </div>\n    ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    NovoDataTableCellHeader.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NovoLabelService },
        { type: DataTableState },
        { type: Renderer2 },
        { type: ElementRef },
        { type: NovoDataTableSortFilter, decorators: [{ type: Optional }] },
        { type: CdkColumnDef, decorators: [{ type: Optional }] }
    ]; };
    NovoDataTableCellHeader.propDecorators = {
        filterInput: [{ type: ViewChild, args: ['filterInput',] }],
        dropdown: [{ type: ViewChild, args: [NovoDropdownElement,] }],
        defaultSort: [{ type: Input }],
        resized: [{ type: Input }],
        resizable: [{ type: HostBinding, args: ['class.resizable',] }],
        column: [{ type: Input, args: ['novo-data-table-cell-config',] }]
    };
    return NovoDataTableCellHeader;
}());
export { NovoDataTableCellHeader };
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
    NovoDataTableCellHeader.prototype.resizable;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxFQUdSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDSixXQUFXLEdBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQztBQVVwQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBRWpEO0lBNEhFLGlDQUNVLGlCQUFvQyxFQUNyQyxNQUF3QixFQUN2QixLQUF3QixFQUN4QixRQUFtQixFQUNuQixVQUFzQixFQUNYLEtBQWlDLEVBQ2pDLGFBQTJCO1FBUGhELGlCQTBCQztRQXpCUyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3JDLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGFBQVEsR0FBUixRQUFR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QWlPdEMsOEJBQUM7Q0FBQSxBQTlSRCxJQThSQztTQTlPWSx1QkFBdUI7OztJQUNsQyw4Q0FDd0I7O0lBQ3hCLDJDQUM4Qjs7SUFFOUIsOENBQzJDOztJQUMzQywwQ0FDMkM7O0lBQzNDLDRDQUMwQjs7SUEwQzFCLHdEQUE0Qzs7SUFDNUMsZ0RBQTJCOztJQUUzQix3Q0FBcUI7O0lBQ3JCLHVDQUFpQzs7SUFDakMsNENBQXlCOztJQUN6QixxQ0FBa0I7O0lBQ2xCLHlDQUFtQjs7SUFDbkIsNENBQXlCOztJQUN6QiwrQ0FBcUM7O0lBQ3JDLDZDQUFtQzs7SUFDbkMsa0RBQXdDOztJQUN4QyxtREFBZ0M7O0lBQ2hDLHlDQU1FOztJQUNGLGdEQUEyQzs7SUFDM0MsMENBQXFDOztJQUduQyxvREFBNEM7O0lBQzVDLHlDQUErQjs7SUFDL0Isd0NBQWdDOztJQUNoQywyQ0FBMkI7O0lBQzNCLDZDQUE4Qjs7SUFDOUIsd0NBQW9EOztJQUNwRCxnREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LCBIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtDb2x1bW5EZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuXG5pbXBvcnQge1xuICBJRGF0YVRhYmxlU29ydEZpbHRlcixcbiAgSURhdGFUYWJsZUNoYW5nZUV2ZW50LFxuICBJRGF0YVRhYmxlQ29sdW1uLFxuICBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uLFxuICBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnLFxuICBJRGF0YVRhYmxlQ29sdW1uU29ydENvbmZpZyxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlU29ydEZpbHRlciB9IGZyb20gJy4uL3NvcnQtZmlsdGVyL3NvcnQtZmlsdGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOb3ZvRHJvcGRvd25FbGVtZW50IH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vRHJvcGRvd24nO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL2RhdGEtdGFibGUtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tub3ZvLWRhdGEtdGFibGUtY2VsbC1jb25maWddJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGkgY2xhc3M9XCJiaGkte3sgbGFiZWxJY29uIH19IGxhYmVsLWljb25cIiAqbmdJZj1cImxhYmVsSWNvblwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1oZWFkZXItaWNvblwiPjwvaT5cbiAgICAgICAgPGxhYmVsIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1sYWJlbFwiPnt7IGxhYmVsIH19PC9sYWJlbD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJjb25maWcuc29ydGFibGVcIiB0b29sdGlwUG9zaXRpb249XCJyaWdodFwiIFt0b29sdGlwXT1cImxhYmVscy5zb3J0XCIgdGhlbWU9XCJpY29uXCIgW2ljb25dPVwiaWNvblwiIChjbGljayk9XCJzb3J0KClcIiBbY2xhc3MuYWN0aXZlXT1cInNvcnRBY3RpdmVcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtc29ydFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPG5vdm8tZHJvcGRvd24gKm5nSWY9XCJjb25maWcuZmlsdGVyYWJsZVwiIHNpZGU9XCJyaWdodFwiIHBhcmVudFNjcm9sbFNlbGVjdG9yPVwiLm5vdm8tZGF0YS10YWJsZS1jb250YWluZXJcIiBjb250YWluZXJDbGFzcz1cImRhdGEtdGFibGUtZHJvcGRvd25cIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtZmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGhlbWU9XCJpY29uXCIgaWNvbj1cImZpbHRlclwiIFtjbGFzcy5hY3RpdmVdPVwiZmlsdGVyQWN0aXZlXCIgKGNsaWNrKT1cImZvY3VzSW5wdXQoKVwiIHRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCIgW3Rvb2x0aXBdPVwibGFiZWxzLmZpbHRlcnNcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGxhYmVscy5maWx0ZXJzIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiBjb2xvcj1cIm5lZ2F0aXZlXCIgaWNvbj1cInRpbWVzXCIgKGNsaWNrKT1cImNsZWFyRmlsdGVyKClcIiAqbmdJZj1cImZpbHRlciAhPT0gbnVsbCAmJiBmaWx0ZXIgIT09IHVuZGVmaW5lZCAmJiBmaWx0ZXIgIT09ICcnXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWZpbHRlci1jbGVhclwiPnt7IGxhYmVscy5jbGVhciB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImNvbmZpZy5maWx0ZXJDb25maWcudHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGlzdCAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXNob3dDdXN0b21SYW5nZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtIFtjbGFzcy5hY3RpdmVdPVwiYWN0aXZlRGF0ZUZpbHRlciA9PT0gb3B0aW9uLmxhYmVsXCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnNcIiAoY2xpY2spPVwiZmlsdGVyRGF0YShvcHRpb24pXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWRhdGEtdGFibGUtZmlsdGVyLScgKyBvcHRpb24ubGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgb3B0aW9uLmxhYmVsIH19IDxpIGNsYXNzPVwiYmhpLWNoZWNrXCIgKm5nSWY9XCJhY3RpdmVEYXRlRmlsdGVyID09PSBvcHRpb24ubGFiZWxcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aXRlbSBbY2xhc3MuYWN0aXZlXT1cImxhYmVscy5jdXN0b21EYXRlUmFuZ2UgPT09IGFjdGl2ZURhdGVGaWx0ZXJcIiAoY2xpY2spPVwidG9nZ2xlQ3VzdG9tUmFuZ2UoJGV2ZW50LCB0cnVlKVwiICpuZ0lmPVwiY29uZmlnLmZpbHRlckNvbmZpZy5hbGxvd0N1c3RvbVJhbmdlICYmICFzaG93Q3VzdG9tUmFuZ2VcIiBba2VlcE9wZW5dPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhYmVscy5jdXN0b21EYXRlUmFuZ2UgfX0gPGkgY2xhc3M9XCJiaGktY2hlY2tcIiAqbmdJZj1cImxhYmVscy5jdXN0b21EYXRlUmFuZ2UgPT09IGFjdGl2ZURhdGVGaWx0ZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItY29udGFpbmVyXCIgKm5nSWY9XCJzaG93Q3VzdG9tUmFuZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IChjbGljayk9XCJ0b2dnbGVDdXN0b21SYW5nZSgkZXZlbnQsIGZhbHNlKVwiPjxpIGNsYXNzPVwiYmhpLXByZXZpb3VzXCI+PC9pPnt7IGxhYmVscy5iYWNrVG9QcmVzZXRGaWx0ZXJzIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tZGF0ZS1waWNrZXIgKG9uU2VsZWN0KT1cImZpbHRlckRhdGEoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwiZmlsdGVyXCIgcmFuZ2U9XCJ0cnVlXCI+PC9ub3ZvLWRhdGUtcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPGxpc3QgKm5nU3dpdGNoQ2FzZT1cIidzZWxlY3QnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aXRlbSBbY2xhc3MuYWN0aXZlXT1cImZpbHRlciA9PT0gb3B0aW9uXCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnNcIiAoY2xpY2spPVwiZmlsdGVyRGF0YShvcHRpb24pXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWRhdGEtdGFibGUtZmlsdGVyLScgKyAob3B0aW9uPy5sYWJlbCB8fCBvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgb3B0aW9uPy5sYWJlbCB8fCBvcHRpb24gfX08L3NwYW4+IDxpIGNsYXNzPVwiYmhpLWNoZWNrXCIgKm5nSWY9XCJvcHRpb24uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPyBmaWx0ZXIgPT09IG9wdGlvbi52YWx1ZSA6IGZpbHRlciA9PT0gb3B0aW9uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDxsaXN0ICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aXRlbSBjbGFzcz1cImZpbHRlci1zZWFyY2hcIiBrZWVwT3Blbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgW3R5cGVdPVwiY29uZmlnLmZpbHRlckNvbmZpZy50eXBlXCIgWyhuZ01vZGVsKV09XCJmaWx0ZXJcIiAobmdNb2RlbENoYW5nZSk9XCJmaWx0ZXJEYXRhKCRldmVudClcIiAjZmlsdGVySW5wdXQgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWZpbHRlci1pbnB1dFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9saXN0PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9ub3ZvLWRyb3Bkb3duPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlclwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS10YWJsZS1oZWFkZXItcmVzaXphYmxlXCIgKm5nSWY9XCJjb25maWcucmVzaXphYmxlXCI+XG4gICAgICAgICAgPHNwYW4gKG1vdXNlZG93bik9XCJzdGFydFJlc2l6ZSgkZXZlbnQpXCIgPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVDZWxsSGVhZGVyPFQ+IGltcGxlbWVudHMgSURhdGFUYWJsZVNvcnRGaWx0ZXIsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnZmlsdGVySW5wdXQnKVxuICBmaWx0ZXJJbnB1dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChOb3ZvRHJvcGRvd25FbGVtZW50KVxuICBkcm9wZG93bjogTm92b0Ryb3Bkb3duRWxlbWVudDtcblxuICBASW5wdXQoKVxuICBkZWZhdWx0U29ydDogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH07XG4gIEBJbnB1dCgpXG4gIHJlc2l6ZWQ6IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlQ29sdW1uPFQ+PjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5yZXNpemFibGUnKVxuICBwdWJsaWMgcmVzaXphYmxlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgnbm92by1kYXRhLXRhYmxlLWNlbGwtY29uZmlnJylcbiAgc2V0IGNvbHVtbihjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pIHtcbiAgICB0aGlzLl9jb2x1bW4gPSBjb2x1bW47XG4gICAgdGhpcy5sYWJlbCA9IGNvbHVtbi50eXBlID09PSAnYWN0aW9uJyA/ICcnIDogY29sdW1uLmxhYmVsO1xuICAgIHRoaXMubGFiZWxJY29uID0gY29sdW1uLmxhYmVsSWNvbjtcblxuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgc29ydGFibGU6ICEhY29sdW1uLnNvcnRhYmxlLFxuICAgICAgZmlsdGVyYWJsZTogISFjb2x1bW4uZmlsdGVyYWJsZSxcbiAgICAgIHJlc2l6YWJsZTogISFjb2x1bW4ucmVzaXphYmxlLFxuICAgIH07XG4gICAgdGhpcy5yZXNpemFibGUgPSB0aGlzLmNvbmZpZy5yZXNpemFibGU7XG5cbiAgICBsZXQgdHJhbnNmb3JtczogeyBmaWx0ZXI/OiBGdW5jdGlvbjsgc29ydD86IEZ1bmN0aW9uIH0gPSB7fTtcblxuICAgIGlmIChjb2x1bW4uZmlsdGVyYWJsZSAmJiBIZWxwZXJzLmlzT2JqZWN0KGNvbHVtbi5maWx0ZXJhYmxlKSkge1xuICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnID0gY29sdW1uLmZpbHRlcmFibGUgYXMgSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZztcbiAgICAgIGlmICghdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUpIHtcbiAgICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnID0geyB0eXBlOiAndGV4dCcgfTtcbiAgICAgIH1cbiAgICAgIGlmICgoY29sdW1uLmZpbHRlcmFibGUgYXMgSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZykudHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybXMuZmlsdGVyID0gKGNvbHVtbi5maWx0ZXJhYmxlIGFzIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWcpLnRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnID0geyB0eXBlOiAndGV4dCcgfTtcbiAgICB9XG5cbiAgICBpZiAoY29sdW1uLnNvcnRhYmxlICYmIEhlbHBlcnMuaXNPYmplY3QoY29sdW1uLnNvcnRhYmxlKSkge1xuICAgICAgaWYgKChjb2x1bW4uc29ydGFibGUgYXMgSURhdGFUYWJsZUNvbHVtblNvcnRDb25maWcpLnRyYW5zZm9ybSkge1xuICAgICAgICB0cmFuc2Zvcm1zLnNvcnQgPSAoY29sdW1uLnNvcnRhYmxlIGFzIElEYXRhVGFibGVDb2x1bW5Tb3J0Q29uZmlnKS50cmFuc2Zvcm07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID09PSAnZGF0ZScgJiYgIXRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zKSB7XG4gICAgICB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9ucyA9IHRoaXMuZ2V0RGVmYXVsdERhdGVGaWx0ZXJPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWcudHJhbnNmb3JtcyA9IHRyYW5zZm9ybXM7XG4gIH1cblxuICBwcml2YXRlIF9yZXJlbmRlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGNoYW5nZVRpbWVvdXQ6IGFueTtcblxuICBwdWJsaWMgbGFiZWw6IHN0cmluZztcbiAgcHVibGljIGljb246IHN0cmluZyA9ICdzb3J0YWJsZSc7XG4gIHB1YmxpYyBsYWJlbEljb246IHN0cmluZztcbiAgcHVibGljIGlkOiBzdHJpbmc7XG4gIHB1YmxpYyBmaWx0ZXI6IGFueTtcbiAgcHVibGljIGRpcmVjdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgZmlsdGVyQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzb3J0QWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzaG93Q3VzdG9tUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGFjdGl2ZURhdGVGaWx0ZXI6IHN0cmluZztcbiAgcHVibGljIGNvbmZpZzoge1xuICAgIHNvcnRhYmxlOiBib29sZWFuO1xuICAgIGZpbHRlcmFibGU6IGJvb2xlYW47XG4gICAgcmVzaXphYmxlOiBib29sZWFuO1xuICAgIHRyYW5zZm9ybXM/OiB7IGZpbHRlcj86IEZ1bmN0aW9uOyBzb3J0PzogRnVuY3Rpb24gfTtcbiAgICBmaWx0ZXJDb25maWc/OiBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnO1xuICB9O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgX2NvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RhdGU6IERhdGFUYWJsZVN0YXRlPFQ+LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIF9zb3J0OiBOb3ZvRGF0YVRhYmxlU29ydEZpbHRlcjxUPixcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgX2Nka0NvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLFxuICApIHtcbiAgICB0aGlzLl9yZXJlbmRlclN1YnNjcmlwdGlvbiA9IHN0YXRlLnVwZGF0ZXMuc3Vic2NyaWJlKChjaGFuZ2U6IElEYXRhVGFibGVDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoYW5nZS5zb3J0ICYmIGNoYW5nZS5zb3J0LmlkID09PSB0aGlzLmlkKSB7XG4gICAgICAgIHRoaXMuaWNvbiA9IGBzb3J0LSR7Y2hhbmdlLnNvcnQudmFsdWV9YDtcbiAgICAgICAgdGhpcy5zb3J0QWN0aXZlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaWNvbiA9ICdzb3J0YWJsZSc7XG4gICAgICAgIHRoaXMuc29ydEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZS5maWx0ZXIgJiYgY2hhbmdlLmZpbHRlci5pZCA9PT0gdGhpcy5pZCkge1xuICAgICAgICB0aGlzLmZpbHRlckFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gY2hhbmdlLmZpbHRlci52YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmlsdGVyQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2Nka0NvbHVtbkRlZikge1xuICAgICAgdGhpcy5pZCA9IHRoaXMuX2Nka0NvbHVtbkRlZi5uYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5kZWZhdWx0U29ydCAmJiB0aGlzLmlkID09PSB0aGlzLmRlZmF1bHRTb3J0LmlkKSB7XG4gICAgICB0aGlzLmljb24gPSBgc29ydC0ke3RoaXMuZGVmYXVsdFNvcnQudmFsdWV9YDtcbiAgICAgIHRoaXMuc29ydEFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXJlbmRlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbikgPT4ge1xuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc3RhcnRSZXNpemUobW91c2VEb3duRXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBtb3VzZURvd25FdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG1pbmltdW1XaWR0aCA9IDYwICsgKHRoaXMuY29uZmlnLmZpbHRlcmFibGUgPyAzMCA6IDApICsgKHRoaXMuY29uZmlnLnNvcnRhYmxlID8gMzAgOiAwKTtcbiAgICBsZXQgc3RhcnRpbmdXaWR0aDogbnVtYmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgY29uc3QgbW91c2VNb3ZlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQod2luZG93LmRvY3VtZW50LCAnbW91c2Vtb3ZlJykuc3Vic2NyaWJlKChtaWRkbGVNb3VzZUV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBsZXQgZGlmZmVyZW5jZVdpZHRoOiBudW1iZXIgPSBtaWRkbGVNb3VzZUV2ZW50LmNsaWVudFggLSBtb3VzZURvd25FdmVudC5jbGllbnRYO1xuICAgICAgbGV0IHdpZHRoOiBudW1iZXIgPSBzdGFydGluZ1dpZHRoICsgZGlmZmVyZW5jZVdpZHRoO1xuICAgICAgaWYgKHdpZHRoIDwgbWluaW11bVdpZHRoKSB7XG4gICAgICAgIHdpZHRoID0gbWluaW11bVdpZHRoO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29sdW1uLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWluLXdpZHRoJywgYCR7dGhpcy5fY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF4LXdpZHRoJywgYCR7dGhpcy5fY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLl9jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLnJlc2l6ZWQubmV4dCh0aGlzLl9jb2x1bW4pO1xuICAgIH0pO1xuXG4gICAgbGV0IG1vdXNlVXBTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh3aW5kb3cuZG9jdW1lbnQsICdtb3VzZXVwJykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIG1vdXNlVXBTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIG1vdXNlTW92ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChtb3VzZU1vdmVTdWJzY3JpcHRpb24pO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKG1vdXNlVXBTdWJzY3JpcHRpb24pO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUN1c3RvbVJhbmdlKGV2ZW50OiBFdmVudCwgdmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5zaG93Q3VzdG9tUmFuZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuZHJvcGRvd24ub3BlblBhbmVsKCk7IC8vIEVuc3VyZXMgdGhhdCB0aGUgcGFuZWwgY29ycmVjdGx5IHVwZGF0ZXMgdG8gdGhlIGR5bmFtaWMgc2l6ZSBvZiB0aGUgZHJvcGRvd25cbiAgfVxuXG4gIHB1YmxpYyBmb2N1c0lucHV0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpbHRlcklucHV0ICYmIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSwgMCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNvcnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhbmdlVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2hhbmdlVGltZW91dCk7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmdldE5leHRTb3J0RGlyZWN0aW9uKHRoaXMuZGlyZWN0aW9uKTtcbiAgICAgIHRoaXMuX3NvcnQuc29ydCh0aGlzLmlkLCB0aGlzLmRpcmVjdGlvbiwgdGhpcy5jb25maWcudHJhbnNmb3Jtcy5zb3J0KTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJEYXRhKGZpbHRlcj86IGFueSk6IHZvaWQge1xuICAgIGxldCBhY3R1YWxGaWx0ZXIgPSBmaWx0ZXI7XG4gICAgaWYgKHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID09PSAnZGF0ZScgJiYgZmlsdGVyKSB7XG4gICAgICB0aGlzLmFjdGl2ZURhdGVGaWx0ZXIgPSBmaWx0ZXIubGFiZWwgfHwgdGhpcy5sYWJlbHMuY3VzdG9tRGF0ZVJhbmdlO1xuICAgICAgaWYgKGZpbHRlci5zdGFydERhdGUgJiYgZmlsdGVyLmVuZERhdGUpIHtcbiAgICAgICAgYWN0dWFsRmlsdGVyID0ge1xuICAgICAgICAgIG1pbjogZGF0ZUZucy5zdGFydE9mRGF5KGZpbHRlci5zdGFydERhdGUuZGF0ZSksXG4gICAgICAgICAgbWF4OiBkYXRlRm5zLnN0YXJ0T2ZEYXkoZGF0ZUZucy5hZGREYXlzKGRhdGVGbnMuc3RhcnRPZkRheShmaWx0ZXIuZW5kRGF0ZS5kYXRlKSwgMSkpLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0dWFsRmlsdGVyID0ge1xuICAgICAgICAgIG1pbjogZmlsdGVyLm1pbiA/IGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZUb2RheSgpLCBmaWx0ZXIubWluKSA6IGRhdGVGbnMuc3RhcnRPZlRvZGF5KCksXG4gICAgICAgICAgbWF4OiBmaWx0ZXIubWF4ID8gZGF0ZUZucy5hZGREYXlzKGRhdGVGbnMuZW5kT2ZUb2RheSgpLCBmaWx0ZXIubWF4KSA6IGRhdGVGbnMuZW5kT2ZUb2RheSgpLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY3R1YWxGaWx0ZXIgJiYgYWN0dWFsRmlsdGVyLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICBhY3R1YWxGaWx0ZXIgPSBmaWx0ZXIudmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2hhbmdlVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2hhbmdlVGltZW91dCk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoYWN0dWFsRmlsdGVyID09PSAnJykge1xuICAgICAgICBhY3R1YWxGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9zb3J0LmZpbHRlcih0aGlzLmlkLCBhY3R1YWxGaWx0ZXIsIHRoaXMuY29uZmlnLnRyYW5zZm9ybXMuZmlsdGVyKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFjdGl2ZURhdGVGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWx0ZXJEYXRhKHVuZGVmaW5lZCk7XG4gIH1cblxuICBwcml2YXRlIGdldE5leHRTb3J0RGlyZWN0aW9uKGRpcmVjdGlvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuICdhc2MnO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09PSAnYXNjJykge1xuICAgICAgcmV0dXJuICdkZXNjJztcbiAgICB9XG4gICAgcmV0dXJuICdhc2MnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZhdWx0RGF0ZUZpbHRlck9wdGlvbnMoKTogSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbltdIHtcbiAgICBsZXQgb3B0czogSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbltdID0gW1xuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDFEYXksIG1pbjogLTEsIG1heDogMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDdEYXlzLCBtaW46IC03LCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QzMERheXMsIG1pbjogLTMwLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3Q5MERheXMsIG1pbjogLTkwLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QxWWVhciwgbWluOiAtMzY2LCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQxRGF5LCBtaW46IDAsIG1heDogMSB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDdEYXlzLCBtaW46IDAsIG1heDogNyB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDMwRGF5cywgbWluOiAwLCBtYXg6IDMwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0OTBEYXlzLCBtaW46IDAsIG1heDogOTAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQxWWVhciwgbWluOiAwLCBtYXg6IDM2NiB9LFxuICAgIF07XG4gICAgcmV0dXJuIG9wdHM7XG4gIH1cbn1cbiJdfQ==