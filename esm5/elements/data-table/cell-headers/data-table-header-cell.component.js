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
    /** @nocollapse */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxFQUdSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDSixXQUFXLEdBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQztBQVVwQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBRWpEO0lBNEhFLGlDQUNVLGlCQUFvQyxFQUNyQyxNQUF3QixFQUN2QixLQUF3QixFQUN4QixRQUFtQixFQUNuQixVQUFzQixFQUNYLEtBQWlDLEVBQ2pDLGFBQTJCO1FBUGhELGlCQTBCQztRQXpCUyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3JDLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGFBQVEsR0FBUixRQUFR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SUFpT3RDLDhCQUFDO0NBQUEsQUE5UkQsSUE4UkM7U0E5T1ksdUJBQXVCOzs7SUFDbEMsOENBQ3dCOztJQUN4QiwyQ0FDOEI7O0lBRTlCLDhDQUMyQzs7SUFDM0MsMENBQzJDOztJQUMzQyw0Q0FDMEI7O0lBMEMxQix3REFBNEM7O0lBQzVDLGdEQUEyQjs7SUFFM0Isd0NBQXFCOztJQUNyQix1Q0FBaUM7O0lBQ2pDLDRDQUF5Qjs7SUFDekIscUNBQWtCOztJQUNsQix5Q0FBbUI7O0lBQ25CLDRDQUF5Qjs7SUFDekIsK0NBQXFDOztJQUNyQyw2Q0FBbUM7O0lBQ25DLGtEQUF3Qzs7SUFDeEMsbURBQWdDOztJQUNoQyx5Q0FNRTs7SUFDRixnREFBMkM7O0lBQzNDLDBDQUFxQzs7SUFHbkMsb0RBQTRDOztJQUM1Qyx5Q0FBK0I7O0lBQy9CLHdDQUFnQzs7SUFDaEMsMkNBQTJCOztJQUMzQiw2Q0FBOEI7O0lBQzlCLHdDQUFvRDs7SUFDcEQsZ0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCwgSG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrQ29sdW1uRGVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcblxuaW1wb3J0IHtcbiAgSURhdGFUYWJsZVNvcnRGaWx0ZXIsXG4gIElEYXRhVGFibGVDaGFuZ2VFdmVudCxcbiAgSURhdGFUYWJsZUNvbHVtbixcbiAgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbixcbiAgSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZyxcbiAgSURhdGFUYWJsZUNvbHVtblNvcnRDb25maWcsXG59IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZVNvcnRGaWx0ZXIgfSBmcm9tICcuLi9zb3J0LWZpbHRlci9zb3J0LWZpbHRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTm92b0Ryb3Bkb3duRWxlbWVudCB9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL0Ryb3Bkb3duJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVRhYmxlU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9kYXRhLXRhYmxlLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbm92by1kYXRhLXRhYmxlLWNlbGwtY29uZmlnXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxpIGNsYXNzPVwiYmhpLXt7IGxhYmVsSWNvbiB9fSBsYWJlbC1pY29uXCIgKm5nSWY9XCJsYWJlbEljb25cIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtaGVhZGVyLWljb25cIj48L2k+XG4gICAgICAgIDxsYWJlbCBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtbGFiZWxcIj57eyBsYWJlbCB9fTwvbGFiZWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiY29uZmlnLnNvcnRhYmxlXCIgdG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIiBbdG9vbHRpcF09XCJsYWJlbHMuc29ydFwiIHRoZW1lPVwiaWNvblwiIFtpY29uXT1cImljb25cIiAoY2xpY2spPVwic29ydCgpXCIgW2NsYXNzLmFjdGl2ZV09XCJzb3J0QWN0aXZlXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLXNvcnRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDxub3ZvLWRyb3Bkb3duICpuZ0lmPVwiY29uZmlnLmZpbHRlcmFibGVcIiBzaWRlPVwicmlnaHRcIiBwYXJlbnRTY3JvbGxTZWxlY3Rvcj1cIi5ub3ZvLWRhdGEtdGFibGUtY29udGFpbmVyXCIgY29udGFpbmVyQ2xhc3M9XCJkYXRhLXRhYmxlLWRyb3Bkb3duXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWZpbHRlclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwiaWNvblwiIGljb249XCJmaWx0ZXJcIiBbY2xhc3MuYWN0aXZlXT1cImZpbHRlckFjdGl2ZVwiIChjbGljayk9XCJmb2N1c0lucHV0KClcIiB0b29sdGlwUG9zaXRpb249XCJyaWdodFwiIFt0b29sdGlwXT1cImxhYmVscy5maWx0ZXJzXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBsYWJlbHMuZmlsdGVycyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImRpYWxvZ3VlXCIgY29sb3I9XCJuZWdhdGl2ZVwiIGljb249XCJ0aW1lc1wiIChjbGljayk9XCJjbGVhckZpbHRlcigpXCIgKm5nSWY9XCJmaWx0ZXIgIT09IG51bGwgJiYgZmlsdGVyICE9PSB1bmRlZmluZWQgJiYgZmlsdGVyICE9PSAnJ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1maWx0ZXItY2xlYXJcIj57eyBsYWJlbHMuY2xlYXIgfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJjb25maWcuZmlsdGVyQ29uZmlnLnR5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpc3QgKm5nU3dpdGNoQ2FzZT1cIidkYXRlJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzaG93Q3VzdG9tUmFuZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbSBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZURhdGVGaWx0ZXIgPT09IG9wdGlvbi5sYWJlbFwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zXCIgKGNsaWNrKT1cImZpbHRlckRhdGEob3B0aW9uKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1kYXRhLXRhYmxlLWZpbHRlci0nICsgb3B0aW9uLmxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG9wdGlvbi5sYWJlbCB9fSA8aSBjbGFzcz1cImJoaS1jaGVja1wiICpuZ0lmPVwiYWN0aXZlRGF0ZUZpbHRlciA9PT0gb3B0aW9uLmxhYmVsXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0gW2NsYXNzLmFjdGl2ZV09XCJsYWJlbHMuY3VzdG9tRGF0ZVJhbmdlID09PSBhY3RpdmVEYXRlRmlsdGVyXCIgKGNsaWNrKT1cInRvZ2dsZUN1c3RvbVJhbmdlKCRldmVudCwgdHJ1ZSlcIiAqbmdJZj1cImNvbmZpZy5maWx0ZXJDb25maWcuYWxsb3dDdXN0b21SYW5nZSAmJiAhc2hvd0N1c3RvbVJhbmdlXCIgW2tlZXBPcGVuXT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBsYWJlbHMuY3VzdG9tRGF0ZVJhbmdlIH19IDxpIGNsYXNzPVwiYmhpLWNoZWNrXCIgKm5nSWY9XCJsYWJlbHMuY3VzdG9tRGF0ZVJhbmdlID09PSBhY3RpdmVEYXRlRmlsdGVyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWNvbnRhaW5lclwiICpuZ0lmPVwic2hvd0N1c3RvbVJhbmdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAoY2xpY2spPVwidG9nZ2xlQ3VzdG9tUmFuZ2UoJGV2ZW50LCBmYWxzZSlcIj48aSBjbGFzcz1cImJoaS1wcmV2aW91c1wiPjwvaT57eyBsYWJlbHMuYmFja1RvUHJlc2V0RmlsdGVycyB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLWRhdGUtcGlja2VyIChvblNlbGVjdCk9XCJmaWx0ZXJEYXRhKCRldmVudClcIiBbKG5nTW9kZWwpXT1cImZpbHRlclwiIHJhbmdlPVwidHJ1ZVwiPjwvbm92by1kYXRlLXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDxsaXN0ICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0gW2NsYXNzLmFjdGl2ZV09XCJmaWx0ZXIgPT09IG9wdGlvblwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zXCIgKGNsaWNrKT1cImZpbHRlckRhdGEob3B0aW9uKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1kYXRhLXRhYmxlLWZpbHRlci0nICsgKG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uIH19PC9zcGFuPiA8aSBjbGFzcz1cImJoaS1jaGVja1wiICpuZ0lmPVwib3B0aW9uLmhhc093blByb3BlcnR5KCd2YWx1ZScpID8gZmlsdGVyID09PSBvcHRpb24udmFsdWUgOiBmaWx0ZXIgPT09IG9wdGlvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9saXN0PlxuICAgICAgICAgICAgICAgICAgICA8bGlzdCAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0gY2xhc3M9XCJmaWx0ZXItc2VhcmNoXCIga2VlcE9wZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFt0eXBlXT1cImNvbmZpZy5maWx0ZXJDb25maWcudHlwZVwiIFsobmdNb2RlbCldPVwiZmlsdGVyXCIgKG5nTW9kZWxDaGFuZ2UpPVwiZmlsdGVyRGF0YSgkZXZlbnQpXCIgI2ZpbHRlcklucHV0IGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1maWx0ZXItaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbm92by1kcm9wZG93bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtaGVhZGVyLXJlc2l6YWJsZVwiICpuZ0lmPVwiY29uZmlnLnJlc2l6YWJsZVwiPlxuICAgICAgICAgIDxzcGFuIChtb3VzZWRvd24pPVwic3RhcnRSZXNpemUoJGV2ZW50KVwiID4mbmJzcDs8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlQ2VsbEhlYWRlcjxUPiBpbXBsZW1lbnRzIElEYXRhVGFibGVTb3J0RmlsdGVyLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2ZpbHRlcklucHV0JylcbiAgZmlsdGVySW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoTm92b0Ryb3Bkb3duRWxlbWVudClcbiAgZHJvcGRvd246IE5vdm9Ecm9wZG93bkVsZW1lbnQ7XG5cbiAgQElucHV0KClcbiAgZGVmYXVsdFNvcnQ6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9O1xuICBASW5wdXQoKVxuICByZXNpemVkOiBFdmVudEVtaXR0ZXI8SURhdGFUYWJsZUNvbHVtbjxUPj47XG4gIEBIb3N0QmluZGluZygnY2xhc3MucmVzaXphYmxlJylcbiAgcHVibGljIHJlc2l6YWJsZTogYm9vbGVhbjtcblxuICBASW5wdXQoJ25vdm8tZGF0YS10YWJsZS1jZWxsLWNvbmZpZycpXG4gIHNldCBjb2x1bW4oY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KSB7XG4gICAgdGhpcy5fY29sdW1uID0gY29sdW1uO1xuICAgIHRoaXMubGFiZWwgPSBjb2x1bW4udHlwZSA9PT0gJ2FjdGlvbicgPyAnJyA6IGNvbHVtbi5sYWJlbDtcbiAgICB0aGlzLmxhYmVsSWNvbiA9IGNvbHVtbi5sYWJlbEljb247XG5cbiAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgIHNvcnRhYmxlOiAhIWNvbHVtbi5zb3J0YWJsZSxcbiAgICAgIGZpbHRlcmFibGU6ICEhY29sdW1uLmZpbHRlcmFibGUsXG4gICAgICByZXNpemFibGU6ICEhY29sdW1uLnJlc2l6YWJsZSxcbiAgICB9O1xuICAgIHRoaXMucmVzaXphYmxlID0gdGhpcy5jb25maWcucmVzaXphYmxlO1xuXG4gICAgbGV0IHRyYW5zZm9ybXM6IHsgZmlsdGVyPzogRnVuY3Rpb247IHNvcnQ/OiBGdW5jdGlvbiB9ID0ge307XG5cbiAgICBpZiAoY29sdW1uLmZpbHRlcmFibGUgJiYgSGVscGVycy5pc09iamVjdChjb2x1bW4uZmlsdGVyYWJsZSkpIHtcbiAgICAgIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZyA9IGNvbHVtbi5maWx0ZXJhYmxlIGFzIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWc7XG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZyA9IHsgdHlwZTogJ3RleHQnIH07XG4gICAgICB9XG4gICAgICBpZiAoKGNvbHVtbi5maWx0ZXJhYmxlIGFzIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWcpLnRyYW5zZm9ybSkge1xuICAgICAgICB0cmFuc2Zvcm1zLmZpbHRlciA9IChjb2x1bW4uZmlsdGVyYWJsZSBhcyBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnKS50cmFuc2Zvcm07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZyA9IHsgdHlwZTogJ3RleHQnIH07XG4gICAgfVxuXG4gICAgaWYgKGNvbHVtbi5zb3J0YWJsZSAmJiBIZWxwZXJzLmlzT2JqZWN0KGNvbHVtbi5zb3J0YWJsZSkpIHtcbiAgICAgIGlmICgoY29sdW1uLnNvcnRhYmxlIGFzIElEYXRhVGFibGVDb2x1bW5Tb3J0Q29uZmlnKS50cmFuc2Zvcm0pIHtcbiAgICAgICAgdHJhbnNmb3Jtcy5zb3J0ID0gKGNvbHVtbi5zb3J0YWJsZSBhcyBJRGF0YVRhYmxlQ29sdW1uU29ydENvbmZpZykudHJhbnNmb3JtO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSA9PT0gJ2RhdGUnICYmICF0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9ucykge1xuICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnMgPSB0aGlzLmdldERlZmF1bHREYXRlRmlsdGVyT3B0aW9ucygpO1xuICAgIH1cblxuICAgIHRoaXMuY29uZmlnLnRyYW5zZm9ybXMgPSB0cmFuc2Zvcm1zO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVyZW5kZXJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBjaGFuZ2VUaW1lb3V0OiBhbnk7XG5cbiAgcHVibGljIGxhYmVsOiBzdHJpbmc7XG4gIHB1YmxpYyBpY29uOiBzdHJpbmcgPSAnc29ydGFibGUnO1xuICBwdWJsaWMgbGFiZWxJY29uOiBzdHJpbmc7XG4gIHB1YmxpYyBpZDogc3RyaW5nO1xuICBwdWJsaWMgZmlsdGVyOiBhbnk7XG4gIHB1YmxpYyBkaXJlY3Rpb246IHN0cmluZztcbiAgcHVibGljIGZpbHRlckFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc29ydEFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd0N1c3RvbVJhbmdlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBhY3RpdmVEYXRlRmlsdGVyOiBzdHJpbmc7XG4gIHB1YmxpYyBjb25maWc6IHtcbiAgICBzb3J0YWJsZTogYm9vbGVhbjtcbiAgICBmaWx0ZXJhYmxlOiBib29sZWFuO1xuICAgIHJlc2l6YWJsZTogYm9vbGVhbjtcbiAgICB0cmFuc2Zvcm1zPzogeyBmaWx0ZXI/OiBGdW5jdGlvbjsgc29ydD86IEZ1bmN0aW9uIH07XG4gICAgZmlsdGVyQ29uZmlnPzogSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZztcbiAgfTtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIF9jb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSxcbiAgICBwcml2YXRlIHN0YXRlOiBEYXRhVGFibGVTdGF0ZTxUPixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBfc29ydDogTm92b0RhdGFUYWJsZVNvcnRGaWx0ZXI8VD4sXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIF9jZGtDb2x1bW5EZWY6IENka0NvbHVtbkRlZixcbiAgKSB7XG4gICAgdGhpcy5fcmVyZW5kZXJTdWJzY3JpcHRpb24gPSBzdGF0ZS51cGRhdGVzLnN1YnNjcmliZSgoY2hhbmdlOiBJRGF0YVRhYmxlQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGFuZ2Uuc29ydCAmJiBjaGFuZ2Uuc29ydC5pZCA9PT0gdGhpcy5pZCkge1xuICAgICAgICB0aGlzLmljb24gPSBgc29ydC0ke2NoYW5nZS5zb3J0LnZhbHVlfWA7XG4gICAgICAgIHRoaXMuc29ydEFjdGl2ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmljb24gPSAnc29ydGFibGUnO1xuICAgICAgICB0aGlzLnNvcnRBY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2UuZmlsdGVyICYmIGNoYW5nZS5maWx0ZXIuaWQgPT09IHRoaXMuaWQpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmZpbHRlciA9IGNoYW5nZS5maWx0ZXIudmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZpbHRlckFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jZGtDb2x1bW5EZWYpIHtcbiAgICAgIHRoaXMuaWQgPSB0aGlzLl9jZGtDb2x1bW5EZWYubmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGVmYXVsdFNvcnQgJiYgdGhpcy5pZCA9PT0gdGhpcy5kZWZhdWx0U29ydC5pZCkge1xuICAgICAgdGhpcy5pY29uID0gYHNvcnQtJHt0aGlzLmRlZmF1bHRTb3J0LnZhbHVlfWA7XG4gICAgICB0aGlzLnNvcnRBY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVyZW5kZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaCgoc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24pID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHN0YXJ0UmVzaXplKG1vdXNlRG93bkV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgbW91c2VEb3duRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBtaW5pbXVtV2lkdGggPSA2MCArICh0aGlzLmNvbmZpZy5maWx0ZXJhYmxlID8gMzAgOiAwKSArICh0aGlzLmNvbmZpZy5zb3J0YWJsZSA/IDMwIDogMCk7XG4gICAgbGV0IHN0YXJ0aW5nV2lkdGg6IG51bWJlciA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIGNvbnN0IG1vdXNlTW92ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KHdpbmRvdy5kb2N1bWVudCwgJ21vdXNlbW92ZScpLnN1YnNjcmliZSgobWlkZGxlTW91c2VFdmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgbGV0IGRpZmZlcmVuY2VXaWR0aDogbnVtYmVyID0gbWlkZGxlTW91c2VFdmVudC5jbGllbnRYIC0gbW91c2VEb3duRXZlbnQuY2xpZW50WDtcbiAgICAgIGxldCB3aWR0aDogbnVtYmVyID0gc3RhcnRpbmdXaWR0aCArIGRpZmZlcmVuY2VXaWR0aDtcbiAgICAgIGlmICh3aWR0aCA8IG1pbmltdW1XaWR0aCkge1xuICAgICAgICB3aWR0aCA9IG1pbmltdW1XaWR0aDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbHVtbi53aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21pbi13aWR0aCcsIGAke3RoaXMuX2NvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21heC13aWR0aCcsIGAke3RoaXMuX2NvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7dGhpcy5fY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5yZXNpemVkLm5leHQodGhpcy5fY29sdW1uKTtcbiAgICB9KTtcblxuICAgIGxldCBtb3VzZVVwU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQod2luZG93LmRvY3VtZW50LCAnbW91c2V1cCcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBtb3VzZVVwU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICBtb3VzZU1vdmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2gobW91c2VNb3ZlU3Vic2NyaXB0aW9uKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChtb3VzZVVwU3Vic2NyaXB0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVDdXN0b21SYW5nZShldmVudDogRXZlbnQsIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuc2hvd0N1c3RvbVJhbmdlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmRyb3Bkb3duLm9wZW5QYW5lbCgpOyAvLyBFbnN1cmVzIHRoYXQgdGhlIHBhbmVsIGNvcnJlY3RseSB1cGRhdGVzIHRvIHRoZSBkeW5hbWljIHNpemUgb2YgdGhlIGRyb3Bkb3duXG4gIH1cblxuICBwdWJsaWMgZm9jdXNJbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maWx0ZXJJbnB1dCAmJiB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCksIDApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzb3J0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYW5nZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNoYW5nZVRpbWVvdXQpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5nZXROZXh0U29ydERpcmVjdGlvbih0aGlzLmRpcmVjdGlvbik7XG4gICAgICB0aGlzLl9zb3J0LnNvcnQodGhpcy5pZCwgdGhpcy5kaXJlY3Rpb24sIHRoaXMuY29uZmlnLnRyYW5zZm9ybXMuc29ydCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyRGF0YShmaWx0ZXI/OiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgYWN0dWFsRmlsdGVyID0gZmlsdGVyO1xuICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSA9PT0gJ2RhdGUnICYmIGZpbHRlcikge1xuICAgICAgdGhpcy5hY3RpdmVEYXRlRmlsdGVyID0gZmlsdGVyLmxhYmVsIHx8IHRoaXMubGFiZWxzLmN1c3RvbURhdGVSYW5nZTtcbiAgICAgIGlmIChmaWx0ZXIuc3RhcnREYXRlICYmIGZpbHRlci5lbmREYXRlKSB7XG4gICAgICAgIGFjdHVhbEZpbHRlciA9IHtcbiAgICAgICAgICBtaW46IGRhdGVGbnMuc3RhcnRPZkRheShmaWx0ZXIuc3RhcnREYXRlLmRhdGUpLFxuICAgICAgICAgIG1heDogZGF0ZUZucy5zdGFydE9mRGF5KGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZEYXkoZmlsdGVyLmVuZERhdGUuZGF0ZSksIDEpKSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdHVhbEZpbHRlciA9IHtcbiAgICAgICAgICBtaW46IGZpbHRlci5taW4gPyBkYXRlRm5zLmFkZERheXMoZGF0ZUZucy5zdGFydE9mVG9kYXkoKSwgZmlsdGVyLm1pbikgOiBkYXRlRm5zLnN0YXJ0T2ZUb2RheSgpLFxuICAgICAgICAgIG1heDogZmlsdGVyLm1heCA/IGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLmVuZE9mVG9kYXkoKSwgZmlsdGVyLm1heCkgOiBkYXRlRm5zLmVuZE9mVG9kYXkoKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWN0dWFsRmlsdGVyICYmIGFjdHVhbEZpbHRlci5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgYWN0dWFsRmlsdGVyID0gZmlsdGVyLnZhbHVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNoYW5nZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNoYW5nZVRpbWVvdXQpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGFjdHVhbEZpbHRlciA9PT0gJycpIHtcbiAgICAgICAgYWN0dWFsRmlsdGVyID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgdGhpcy5fc29ydC5maWx0ZXIodGhpcy5pZCwgYWN0dWFsRmlsdGVyLCB0aGlzLmNvbmZpZy50cmFuc2Zvcm1zLmZpbHRlcik7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJGaWx0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hY3RpdmVEYXRlRmlsdGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZmlsdGVyRGF0YSh1bmRlZmluZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXh0U29ydERpcmVjdGlvbihkaXJlY3Rpb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgIHJldHVybiAnYXNjJztcbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2FzYycpIHtcbiAgICAgIHJldHVybiAnZGVzYyc7XG4gICAgfVxuICAgIHJldHVybiAnYXNjJztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmYXVsdERhdGVGaWx0ZXJPcHRpb25zKCk6IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb25bXSB7XG4gICAgbGV0IG9wdHM6IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb25bXSA9IFtcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QxRGF5LCBtaW46IC0xLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3Q3RGF5cywgbWluOiAtNywgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MzBEYXlzLCBtaW46IC0zMCwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0OTBEYXlzLCBtaW46IC05MCwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MVllYXIsIG1pbjogLTM2NiwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MURheSwgbWluOiAwLCBtYXg6IDEgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQ3RGF5cywgbWluOiAwLCBtYXg6IDcgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQzMERheXMsIG1pbjogMCwgbWF4OiAzMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDkwRGF5cywgbWluOiAwLCBtYXg6IDkwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MVllYXIsIG1pbjogMCwgbWF4OiAzNjYgfSxcbiAgICBdO1xuICAgIHJldHVybiBvcHRzO1xuICB9XG59XG4iXX0=