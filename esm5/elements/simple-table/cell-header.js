/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, Input, Optional, ViewChild, ViewEncapsulation, } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CdkColumnDef } from '@angular/cdk/table';
import * as dateFns from 'date-fns';
import { NovoDropdownElement } from '../dropdown/Dropdown';
import { NovoSortFilter } from './sort';
import { NovoLabelService } from '../../services/novo-label-service';
import { NovoActivityTableState } from './state';
import { Helpers } from '../../utils/Helpers';
var NovoSimpleFilterFocus = /** @class */ (function () {
    function NovoSimpleFilterFocus(element) {
        this.element = element;
    }
    /**
     * @return {?}
     */
    NovoSimpleFilterFocus.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.element.nativeElement.focus();
    };
    NovoSimpleFilterFocus.decorators = [
        { type: Directive, args: [{
                    selector: '[novoSimpleFilterFocus]',
                },] }
    ];
    /** @nocollapse */
    NovoSimpleFilterFocus.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return NovoSimpleFilterFocus;
}());
export { NovoSimpleFilterFocus };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NovoSimpleFilterFocus.prototype.element;
}
var NovoSimpleCellHeader = /** @class */ (function () {
    function NovoSimpleCellHeader(changeDetectorRef, labels, state, _sort, _cdkColumnDef) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this.labels = labels;
        this.state = state;
        this._sort = _sort;
        this._cdkColumnDef = _cdkColumnDef;
        this.icon = 'sortable';
        this.filterActive = false;
        this.sortActive = false;
        this.showCustomRange = false;
        this._rerenderSubscription = state.updates.subscribe((/**
         * @param {?} change
         * @return {?}
         */
        function (change) {
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
        }));
    }
    Object.defineProperty(NovoSimpleCellHeader.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (!v) {
                this._config = {
                    sortable: false,
                    filterable: false,
                    filterConfig: {
                        type: 'text',
                    },
                };
            }
            else {
                this._config = {
                    sortable: coerceBooleanProperty(v.sortable),
                    filterable: coerceBooleanProperty(v.filterable),
                    transforms: v.transforms || {},
                    filterConfig: v.filterConfig || {
                        type: 'text',
                    },
                };
                if (this._config.filterConfig.type === 'date' && !this._config.filterConfig.options) {
                    this._config.filterConfig.options = this.getDefaultDateFilterOptions();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoSimpleCellHeader.prototype.ngOnInit = /**
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
    NovoSimpleCellHeader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._rerenderSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    NovoSimpleCellHeader.prototype.sort = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.changeTimeout) {
            clearTimeout(this.changeTimeout);
        }
        this.changeTimeout = setTimeout((/**
         * @return {?}
         */
        function () {
            _this.direction = _this.getNextSortDirection(_this.direction);
            _this._sort.sort(_this.id, _this.direction, _this._config.transforms.sort);
            _this.changeDetectorRef.markForCheck();
        }), 300);
    };
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    NovoSimpleCellHeader.prototype.toggleCustomRange = /**
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
     * @param {?=} filter
     * @return {?}
     */
    NovoSimpleCellHeader.prototype.filterData = /**
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
                    max: filter.max ? dateFns.addDays(dateFns.startOfTomorrow(), filter.max) : dateFns.startOfTomorrow(),
                };
            }
        }
        if (actualFilter && actualFilter.hasOwnProperty('value')) {
            actualFilter = filter.value;
        }
        if (this.changeTimeout) {
            clearTimeout(this.changeTimeout);
        }
        this.changeTimeout = setTimeout((/**
         * @return {?}
         */
        function () {
            if (actualFilter === '') {
                actualFilter = undefined;
            }
            _this._sort.filter(_this.id, actualFilter, _this.config.transforms.filter);
            _this.changeDetectorRef.markForCheck();
        }), 300);
    };
    /**
     * @return {?}
     */
    NovoSimpleCellHeader.prototype.clearFilter = /**
     * @return {?}
     */
    function () {
        this.filter = undefined;
        this.activeDateFilter = undefined;
        this.filterData();
    };
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    NovoSimpleCellHeader.prototype.getNextSortDirection = /**
     * @private
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
     * @private
     * @return {?}
     */
    NovoSimpleCellHeader.prototype.getDefaultDateFilterOptions = /**
     * @private
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
    NovoSimpleCellHeader.decorators = [
        { type: Component, args: [{
                    selector: '[novo-simple-cell-config]',
                    template: "\n    <label (click)=\"sort()\" data-automation-id=\"novo-activity-table-label\" [class.sort-disabled]=\"!config.sortable\">\n      <ng-content></ng-content>\n    </label>\n    <div>\n      <button *ngIf=\"config.sortable\" theme=\"icon\" [icon]=\"icon\" (click)=\"sort()\" [class.active]=\"sortActive\"\n              data-automation-id=\"novo-activity-table-sort\"></button>\n      <novo-dropdown *ngIf=\"config.filterable\" side=\"right\" parentScrollSelector=\".novo-simple-table\" containerClass=\"simple-table-dropdown\"\n                     data-automation-id=\"novo-activity-table-filter\">\n        <button type=\"button\" theme=\"icon\" icon=\"filter\" [class.active]=\"filterActive\"></button>\n        <div class=\"header\">\n          <span>{{ labels.filters }}</span>\n          <button theme=\"dialogue\" color=\"negative\" icon=\"times\" (click)=\"clearFilter()\"\n                  *ngIf=\"filter !== null && filter !== undefined && filter !== ''\" data-automation-id=\"novo-activity-table-filter-clear\">\n            {{ labels.clear }}\n          </button>\n        </div>\n        <ng-container [ngSwitch]=\"config.filterConfig.type\">\n          <list *ngSwitchCase=\"'date'\">\n            <ng-container *ngIf=\"!showCustomRange\">\n              <item [class.active]=\"activeDateFilter === option.label\" *ngFor=\"let option of config.filterConfig.options\" (click)=\"filterData(option)\"\n                    [attr.data-automation-id]=\"'novo-activity-table-filter-' + option.label\">\n                {{ option.label }} <i class=\"bhi-check\" *ngIf=\"activeDateFilter === option.label\"></i>\n              </item>\n            </ng-container>\n            <item [class.active]=\"labels.customDateRange === activeDateFilter\" (click)=\"toggleCustomRange($event, true)\"\n                  *ngIf=\"config.filterConfig.allowCustomRange && !showCustomRange\" [keepOpen]=\"true\">\n              {{ labels.customDateRange }} <i class=\"bhi-check\" *ngIf=\"labels.customDateRange === activeDateFilter\"></i>\n            </item>\n            <div class=\"calendar-container\" *ngIf=\"showCustomRange\">\n              <div (click)=\"toggleCustomRange($event, false)\"><i class=\"bhi-previous\"></i>{{ labels.backToPresetFilters }}</div>\n              <novo-date-picker (onSelect)=\"filterData($event)\" [(ngModel)]=\"filter\" range=\"true\"></novo-date-picker>\n            </div>\n          </list>\n          <list *ngSwitchCase=\"'select'\">\n            <item [class.active]=\"filter === option\" *ngFor=\"let option of config.filterConfig.options\" (click)=\"filterData(option)\"\n                  [attr.data-automation-id]=\"'novo-activity-table-filter-' + (option?.label || option)\">\n              <span>{{ option?.label || option }}</span> <i class=\"bhi-check\"\n                                                            *ngIf=\"option.hasOwnProperty('value') ? filter === option.value : filter === option\"></i>\n            </item>\n          </list>\n          <list *ngSwitchDefault>\n            <item class=\"filter-search\" keepOpen=\"true\">\n              <input type=\"text\" [(ngModel)]=\"filter\" (ngModelChange)=\"filterData($event)\" novoSimpleFilterFocus\n                     data-automation-id=\"novo-activity-table-filter-input\"/>\n            </item>\n          </list>\n        </ng-container>\n      </novo-dropdown>\n    </div>\n  ",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NovoSimpleCellHeader.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NovoLabelService },
        { type: NovoActivityTableState },
        { type: NovoSortFilter, decorators: [{ type: Optional }] },
        { type: CdkColumnDef, decorators: [{ type: Optional }] }
    ]; };
    NovoSimpleCellHeader.propDecorators = {
        dropdown: [{ type: ViewChild, args: [NovoDropdownElement,] }],
        defaultSort: [{ type: Input }],
        config: [{ type: Input, args: ['novo-simple-cell-config',] }]
    };
    return NovoSimpleCellHeader;
}());
export { NovoSimpleCellHeader };
if (false) {
    /** @type {?} */
    NovoSimpleCellHeader.prototype.dropdown;
    /** @type {?} */
    NovoSimpleCellHeader.prototype.defaultSort;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleCellHeader.prototype._config;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleCellHeader.prototype._rerenderSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleCellHeader.prototype.changeTimeout;
    /** @type {?} */
    NovoSimpleCellHeader.prototype.icon;
    /** @type {?} */
    NovoSimpleCellHeader.prototype.id;
    /** @type {?} */
    NovoSimpleCellHeader.prototype.filter;
    /** @type {?} */
    NovoSimpleCellHeader.prototype.direction;
    /** @type {?} */
    NovoSimpleCellHeader.prototype.filterActive;
    /** @type {?} */
    NovoSimpleCellHeader.prototype.sortActive;
    /** @type {?} */
    NovoSimpleCellHeader.prototype.showCustomRange;
    /** @type {?} */
    NovoSimpleCellHeader.prototype.activeDateFilter;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleCellHeader.prototype.changeDetectorRef;
    /** @type {?} */
    NovoSimpleCellHeader.prototype.labels;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleCellHeader.prototype.state;
    /** @type {?} */
    NovoSimpleCellHeader.prototype._sort;
    /** @type {?} */
    NovoSimpleCellHeader.prototype._cdkColumnDef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1oZWFkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvc2ltcGxlLXRhYmxlL2NlbGwtaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDeEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU5QztJQUlFLCtCQUFvQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQUcsQ0FBQzs7OztJQUUzQywrQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQyxDQUFDOztnQkFSRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtpQkFDcEM7Ozs7Z0JBdEJDLFVBQVU7O0lBNkJaLDRCQUFDO0NBQUEsQUFURCxJQVNDO1NBTlkscUJBQXFCOzs7Ozs7SUFDcEIsd0NBQTJCOztBQU96QztJQWdIRSw4QkFD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QUcsRUFBRSxDQUFDLEVBQUU7WUFDaEQsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7WUFDakQsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7WUFDbkQsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7WUFDbkQsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7WUFDbkQsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO1lBQy9DLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtZQUNoRCxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7WUFDbEQsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO1lBQ2xELEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtTQUNuRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBM09GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxRQUFRLEVBQUUsZzBHQWtEVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQXpGQyxpQkFBaUI7Z0JBbUJWLGdCQUFnQjtnQkFDaEIsc0JBQXNCO2dCQUZ0QixjQUFjLHVCQW9JbEIsUUFBUTtnQkExSUosWUFBWSx1QkEySWhCLFFBQVE7OzsyQkE1RFYsU0FBUyxTQUFDLG1CQUFtQjs4QkFHN0IsS0FBSzt5QkFHTCxLQUFLLFNBQUMseUJBQXlCOztJQTZLbEMsMkJBQUM7Q0FBQSxBQTVPRCxJQTRPQztTQXBMWSxvQkFBb0I7OztJQUMvQix3Q0FDOEI7O0lBRTlCLDJDQUMyQzs7Ozs7SUFnQzNDLHVDQUtFOzs7OztJQUVGLHFEQUE0Qzs7Ozs7SUFDNUMsNkNBQTJCOztJQUUzQixvQ0FBaUM7O0lBQ2pDLGtDQUFrQjs7SUFDbEIsc0NBQWdDOztJQUNoQyx5Q0FBeUI7O0lBQ3pCLDRDQUFxQzs7SUFDckMsMENBQW1DOztJQUNuQywrQ0FBd0M7O0lBQ3hDLGdEQUFnQzs7Ozs7SUFHOUIsaURBQTRDOztJQUM1QyxzQ0FBK0I7Ozs7O0lBQy9CLHFDQUFxQzs7SUFDckMscUNBQXdDOztJQUN4Qyw2Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBDZGtDb2x1bW5EZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcblxuaW1wb3J0IHsgTm92b0Ryb3Bkb3duRWxlbWVudCB9IGZyb20gJy4uL2Ryb3Bkb3duL0Ryb3Bkb3duJztcbmltcG9ydCB7IE5vdm9TaW1wbGVTb3J0RmlsdGVyLCBOb3ZvU2ltcGxlVGFibGVDaGFuZ2UsIFNpbXBsZVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnLCBTaW1wbGVUYWJsZUNvbHVtbkZpbHRlck9wdGlvbiB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOb3ZvU29ydEZpbHRlciB9IGZyb20gJy4vc29ydCc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9BY3Rpdml0eVRhYmxlU3RhdGUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TaW1wbGVGaWx0ZXJGb2N1c10nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlRmlsdGVyRm9jdXMgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tub3ZvLXNpbXBsZS1jZWxsLWNvbmZpZ10nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxsYWJlbCAoY2xpY2spPVwic29ydCgpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1hY3Rpdml0eS10YWJsZS1sYWJlbFwiIFtjbGFzcy5zb3J0LWRpc2FibGVkXT1cIiFjb25maWcuc29ydGFibGVcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2xhYmVsPlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uICpuZ0lmPVwiY29uZmlnLnNvcnRhYmxlXCIgdGhlbWU9XCJpY29uXCIgW2ljb25dPVwiaWNvblwiIChjbGljayk9XCJzb3J0KClcIiBbY2xhc3MuYWN0aXZlXT1cInNvcnRBY3RpdmVcIlxuICAgICAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLXNvcnRcIj48L2J1dHRvbj5cbiAgICAgIDxub3ZvLWRyb3Bkb3duICpuZ0lmPVwiY29uZmlnLmZpbHRlcmFibGVcIiBzaWRlPVwicmlnaHRcIiBwYXJlbnRTY3JvbGxTZWxlY3Rvcj1cIi5ub3ZvLXNpbXBsZS10YWJsZVwiIGNvbnRhaW5lckNsYXNzPVwic2ltcGxlLXRhYmxlLWRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tYWN0aXZpdHktdGFibGUtZmlsdGVyXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwiaWNvblwiIGljb249XCJmaWx0ZXJcIiBbY2xhc3MuYWN0aXZlXT1cImZpbHRlckFjdGl2ZVwiPjwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPHNwYW4+e3sgbGFiZWxzLmZpbHRlcnMgfX08L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImRpYWxvZ3VlXCIgY29sb3I9XCJuZWdhdGl2ZVwiIGljb249XCJ0aW1lc1wiIChjbGljayk9XCJjbGVhckZpbHRlcigpXCJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmlsdGVyICE9PSBudWxsICYmIGZpbHRlciAhPT0gdW5kZWZpbmVkICYmIGZpbHRlciAhPT0gJydcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLWZpbHRlci1jbGVhclwiPlxuICAgICAgICAgICAge3sgbGFiZWxzLmNsZWFyIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJjb25maWcuZmlsdGVyQ29uZmlnLnR5cGVcIj5cbiAgICAgICAgICA8bGlzdCAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUnXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXNob3dDdXN0b21SYW5nZVwiPlxuICAgICAgICAgICAgICA8aXRlbSBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZURhdGVGaWx0ZXIgPT09IG9wdGlvbi5sYWJlbFwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zXCIgKGNsaWNrKT1cImZpbHRlckRhdGEob3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1hY3Rpdml0eS10YWJsZS1maWx0ZXItJyArIG9wdGlvbi5sYWJlbFwiPlxuICAgICAgICAgICAgICAgIHt7IG9wdGlvbi5sYWJlbCB9fSA8aSBjbGFzcz1cImJoaS1jaGVja1wiICpuZ0lmPVwiYWN0aXZlRGF0ZUZpbHRlciA9PT0gb3B0aW9uLmxhYmVsXCI+PC9pPlxuICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxpdGVtIFtjbGFzcy5hY3RpdmVdPVwibGFiZWxzLmN1c3RvbURhdGVSYW5nZSA9PT0gYWN0aXZlRGF0ZUZpbHRlclwiIChjbGljayk9XCJ0b2dnbGVDdXN0b21SYW5nZSgkZXZlbnQsIHRydWUpXCJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY29uZmlnLmZpbHRlckNvbmZpZy5hbGxvd0N1c3RvbVJhbmdlICYmICFzaG93Q3VzdG9tUmFuZ2VcIiBba2VlcE9wZW5dPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICB7eyBsYWJlbHMuY3VzdG9tRGF0ZVJhbmdlIH19IDxpIGNsYXNzPVwiYmhpLWNoZWNrXCIgKm5nSWY9XCJsYWJlbHMuY3VzdG9tRGF0ZVJhbmdlID09PSBhY3RpdmVEYXRlRmlsdGVyXCI+PC9pPlxuICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWNvbnRhaW5lclwiICpuZ0lmPVwic2hvd0N1c3RvbVJhbmdlXCI+XG4gICAgICAgICAgICAgIDxkaXYgKGNsaWNrKT1cInRvZ2dsZUN1c3RvbVJhbmdlKCRldmVudCwgZmFsc2UpXCI+PGkgY2xhc3M9XCJiaGktcHJldmlvdXNcIj48L2k+e3sgbGFiZWxzLmJhY2tUb1ByZXNldEZpbHRlcnMgfX08L2Rpdj5cbiAgICAgICAgICAgICAgPG5vdm8tZGF0ZS1waWNrZXIgKG9uU2VsZWN0KT1cImZpbHRlckRhdGEoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwiZmlsdGVyXCIgcmFuZ2U9XCJ0cnVlXCI+PC9ub3ZvLWRhdGUtcGlja2VyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saXN0PlxuICAgICAgICAgIDxsaXN0ICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiPlxuICAgICAgICAgICAgPGl0ZW0gW2NsYXNzLmFjdGl2ZV09XCJmaWx0ZXIgPT09IG9wdGlvblwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zXCIgKGNsaWNrKT1cImZpbHRlckRhdGEob3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tYWN0aXZpdHktdGFibGUtZmlsdGVyLScgKyAob3B0aW9uPy5sYWJlbCB8fCBvcHRpb24pXCI+XG4gICAgICAgICAgICAgIDxzcGFuPnt7IG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uIH19PC9zcGFuPiA8aSBjbGFzcz1cImJoaS1jaGVja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm9wdGlvbi5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSA/IGZpbHRlciA9PT0gb3B0aW9uLnZhbHVlIDogZmlsdGVyID09PSBvcHRpb25cIj48L2k+XG4gICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgPC9saXN0PlxuICAgICAgICAgIDxsaXN0ICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgICA8aXRlbSBjbGFzcz1cImZpbHRlci1zZWFyY2hcIiBrZWVwT3Blbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJmaWx0ZXJcIiAobmdNb2RlbENoYW5nZSk9XCJmaWx0ZXJEYXRhKCRldmVudClcIiBub3ZvU2ltcGxlRmlsdGVyRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tYWN0aXZpdHktdGFibGUtZmlsdGVyLWlucHV0XCIvPlxuICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25vdm8tZHJvcGRvd24+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlQ2VsbEhlYWRlciBpbXBsZW1lbnRzIE5vdm9TaW1wbGVTb3J0RmlsdGVyLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoTm92b0Ryb3Bkb3duRWxlbWVudClcbiAgZHJvcGRvd246IE5vdm9Ecm9wZG93bkVsZW1lbnQ7XG5cbiAgQElucHV0KClcbiAgZGVmYXVsdFNvcnQ6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9O1xuXG4gIEBJbnB1dCgnbm92by1zaW1wbGUtY2VsbC1jb25maWcnKVxuICBnZXQgY29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cblxuICBzZXQgY29uZmlnKHYpIHtcbiAgICBpZiAoIXYpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICBmaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgICBzb3J0YWJsZTogY29lcmNlQm9vbGVhblByb3BlcnR5KHYuc29ydGFibGUpLFxuICAgICAgICBmaWx0ZXJhYmxlOiBjb2VyY2VCb29sZWFuUHJvcGVydHkodi5maWx0ZXJhYmxlKSxcbiAgICAgICAgdHJhbnNmb3Jtczogdi50cmFuc2Zvcm1zIHx8IHt9LFxuICAgICAgICBmaWx0ZXJDb25maWc6IHYuZmlsdGVyQ29uZmlnIHx8IHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID09PSAnZGF0ZScgJiYgIXRoaXMuX2NvbmZpZy5maWx0ZXJDb25maWcub3B0aW9ucykge1xuICAgICAgICB0aGlzLl9jb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnMgPSB0aGlzLmdldERlZmF1bHREYXRlRmlsdGVyT3B0aW9ucygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbmZpZzoge1xuICAgIHNvcnRhYmxlOiBib29sZWFuO1xuICAgIGZpbHRlcmFibGU6IGJvb2xlYW47XG4gICAgdHJhbnNmb3Jtcz86IHsgZmlsdGVyPzogRnVuY3Rpb247IHNvcnQ/OiBGdW5jdGlvbiB9O1xuICAgIGZpbHRlckNvbmZpZzogU2ltcGxlVGFibGVDb2x1bW5GaWx0ZXJDb25maWc7XG4gIH07XG5cbiAgcHJpdmF0ZSBfcmVyZW5kZXJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBjaGFuZ2VUaW1lb3V0OiBhbnk7XG5cbiAgcHVibGljIGljb246IHN0cmluZyA9ICdzb3J0YWJsZSc7XG4gIHB1YmxpYyBpZDogc3RyaW5nO1xuICBwdWJsaWMgZmlsdGVyOiBzdHJpbmcgfCBib29sZWFuO1xuICBwdWJsaWMgZGlyZWN0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyBmaWx0ZXJBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNvcnRBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNob3dDdXN0b21SYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgYWN0aXZlRGF0ZUZpbHRlcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdGF0ZTogTm92b0FjdGl2aXR5VGFibGVTdGF0ZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgX3NvcnQ6IE5vdm9Tb3J0RmlsdGVyLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBfY2RrQ29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsXG4gICkge1xuICAgIHRoaXMuX3JlcmVuZGVyU3Vic2NyaXB0aW9uID0gc3RhdGUudXBkYXRlcy5zdWJzY3JpYmUoKGNoYW5nZTogTm92b1NpbXBsZVRhYmxlQ2hhbmdlKSA9PiB7XG4gICAgICBpZiAoY2hhbmdlLnNvcnQgJiYgY2hhbmdlLnNvcnQuaWQgPT09IHRoaXMuaWQpIHtcbiAgICAgICAgdGhpcy5pY29uID0gYHNvcnQtJHtjaGFuZ2Uuc29ydC52YWx1ZX1gO1xuICAgICAgICB0aGlzLnNvcnRBY3RpdmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pY29uID0gJ3NvcnRhYmxlJztcbiAgICAgICAgdGhpcy5zb3J0QWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlLmZpbHRlciAmJiBjaGFuZ2UuZmlsdGVyLmlkID09PSB0aGlzLmlkKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBjaGFuZ2UuZmlsdGVyLnZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5maWx0ZXJBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY2RrQ29sdW1uRGVmKSB7XG4gICAgICB0aGlzLmlkID0gdGhpcy5fY2RrQ29sdW1uRGVmLm5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmRlZmF1bHRTb3J0ICYmIHRoaXMuaWQgPT09IHRoaXMuZGVmYXVsdFNvcnQuaWQpIHtcbiAgICAgIHRoaXMuaWNvbiA9IGBzb3J0LSR7dGhpcy5kZWZhdWx0U29ydC52YWx1ZX1gO1xuICAgICAgdGhpcy5zb3J0QWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlcmVuZGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgc29ydCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5jaGFuZ2VUaW1lb3V0KTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuZ2V0TmV4dFNvcnREaXJlY3Rpb24odGhpcy5kaXJlY3Rpb24pO1xuICAgICAgdGhpcy5fc29ydC5zb3J0KHRoaXMuaWQsIHRoaXMuZGlyZWN0aW9uLCB0aGlzLl9jb25maWcudHJhbnNmb3Jtcy5zb3J0KTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVDdXN0b21SYW5nZShldmVudDogRXZlbnQsIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuc2hvd0N1c3RvbVJhbmdlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmRyb3Bkb3duLm9wZW5QYW5lbCgpOyAvLyBFbnN1cmVzIHRoYXQgdGhlIHBhbmVsIGNvcnJlY3RseSB1cGRhdGVzIHRvIHRoZSBkeW5hbWljIHNpemUgb2YgdGhlIGRyb3Bkb3duXG4gIH1cblxuICBwdWJsaWMgZmlsdGVyRGF0YShmaWx0ZXI/OiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgYWN0dWFsRmlsdGVyID0gZmlsdGVyO1xuICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSA9PT0gJ2RhdGUnICYmIGZpbHRlcikge1xuICAgICAgdGhpcy5hY3RpdmVEYXRlRmlsdGVyID0gZmlsdGVyLmxhYmVsIHx8IHRoaXMubGFiZWxzLmN1c3RvbURhdGVSYW5nZTtcbiAgICAgIGlmIChmaWx0ZXIuc3RhcnREYXRlICYmIGZpbHRlci5lbmREYXRlKSB7XG4gICAgICAgIGFjdHVhbEZpbHRlciA9IHtcbiAgICAgICAgICBtaW46IGRhdGVGbnMuc3RhcnRPZkRheShmaWx0ZXIuc3RhcnREYXRlLmRhdGUpLFxuICAgICAgICAgIG1heDogZGF0ZUZucy5zdGFydE9mRGF5KGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZEYXkoZmlsdGVyLmVuZERhdGUuZGF0ZSksIDEpKSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdHVhbEZpbHRlciA9IHtcbiAgICAgICAgICBtaW46IGZpbHRlci5taW4gPyBkYXRlRm5zLmFkZERheXMoZGF0ZUZucy5zdGFydE9mVG9kYXkoKSwgZmlsdGVyLm1pbikgOiBkYXRlRm5zLnN0YXJ0T2ZUb2RheSgpLFxuICAgICAgICAgIG1heDogZmlsdGVyLm1heCA/IGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZUb21vcnJvdygpLCBmaWx0ZXIubWF4KSA6IGRhdGVGbnMuc3RhcnRPZlRvbW9ycm93KCksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFjdHVhbEZpbHRlciAmJiBhY3R1YWxGaWx0ZXIuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgIGFjdHVhbEZpbHRlciA9IGZpbHRlci52YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jaGFuZ2VUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5jaGFuZ2VUaW1lb3V0KTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChhY3R1YWxGaWx0ZXIgPT09ICcnKSB7XG4gICAgICAgIGFjdHVhbEZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NvcnQuZmlsdGVyKHRoaXMuaWQsIGFjdHVhbEZpbHRlciwgdGhpcy5jb25maWcudHJhbnNmb3Jtcy5maWx0ZXIpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAzMDApO1xuICB9XG5cbiAgcHVibGljIGNsZWFyRmlsdGVyKCk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aXZlRGF0ZUZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbHRlckRhdGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV4dFNvcnREaXJlY3Rpb24oZGlyZWN0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm4gJ2FzYyc7XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdhc2MnKSB7XG4gICAgICByZXR1cm4gJ2Rlc2MnO1xuICAgIH1cbiAgICByZXR1cm4gJ2FzYyc7XG4gIH1cblxuICBwcml2YXRlIGdldERlZmF1bHREYXRlRmlsdGVyT3B0aW9ucygpOiBTaW1wbGVUYWJsZUNvbHVtbkZpbHRlck9wdGlvbltdIHtcbiAgICBsZXQgb3B0czogU2ltcGxlVGFibGVDb2x1bW5GaWx0ZXJPcHRpb25bXSA9IFtcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QxRGF5LCBtaW46IC0xLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3Q3RGF5cywgbWluOiAtNywgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MzBEYXlzLCBtaW46IC0zMCwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0OTBEYXlzLCBtaW46IC05MCwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MVllYXIsIG1pbjogLTM2NiwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MURheSwgbWluOiAwLCBtYXg6IDEgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQ3RGF5cywgbWluOiAwLCBtYXg6IDcgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQzMERheXMsIG1pbjogMCwgbWF4OiAzMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDkwRGF5cywgbWluOiAwLCBtYXg6IDkwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MVllYXIsIG1pbjogMCwgbWF4OiAzNjYgfSxcbiAgICBdO1xuICAgIHJldHVybiBvcHRzO1xuICB9XG59XG4iXX0=