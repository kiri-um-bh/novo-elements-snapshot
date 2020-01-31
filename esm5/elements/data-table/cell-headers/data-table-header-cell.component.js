/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/cell-headers/data-table-header-cell.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
        function (change) { return _this.checkSortFilterState(change); }));
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
        this.checkSortFilterState({ filter: this.state.filter, sort: this.state.sort }, true);
        this.multiSelect = this.config.filterConfig && this.config.filterConfig.type ? this.config.filterConfig.type === 'multi-select' : false;
        if (this.multiSelect) {
            this.multiSelectedOptions = this.filter ? tslib_1.__spread(this.filter) : [];
        }
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._rerenderSubscription.unsubscribe();
        this.subscriptions.forEach((/**
         * @param {?} subscription
         * @return {?}
         */
        function (subscription) {
            subscription.unsubscribe();
        }));
    };
    /**
     * @param {?} sortFilterState
     * @param {?=} initialConfig
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.checkSortFilterState = /**
     * @param {?} sortFilterState
     * @param {?=} initialConfig
     * @return {?}
     */
    function (sortFilterState, initialConfig) {
        var _this = this;
        if (initialConfig === void 0) { initialConfig = false; }
        if (sortFilterState.sort && sortFilterState.sort.id === this.id) {
            this.icon = "sort-" + sortFilterState.sort.value;
            this.sortActive = true;
        }
        else {
            this.icon = 'sortable';
            this.sortActive = false;
        }
        /** @type {?} */
        var tableFilter = Helpers.convertToArray(sortFilterState.filter);
        /** @type {?} */
        var thisFilter = tableFilter.find((/**
         * @param {?} filter
         * @return {?}
         */
        function (filter) { return filter && filter.id === _this.id; }));
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
            this.icon = "sort-" + this.defaultSort.value;
            this.sortActive = true;
        }
        this.multiSelect = this.config.filterConfig && this.config.filterConfig.type ? this.config.filterConfig.type === 'multi-select' : false;
        if (this.multiSelect) {
            this.multiSelectedOptions = this.filter ? tslib_1.__spread(this.filter) : [];
            if (this.config.filterConfig.options) {
                if (typeof this.config.filterConfig.options[0] === 'string') {
                    this.multiSelectedOptionIsHidden = ((/** @type {?} */ (this.config.filterConfig.options))).map((/**
                     * @param {?} option
                     * @return {?}
                     */
                    function (option) { return ({ option: option, hidden: false }); }));
                }
                else {
                    this.multiSelectedOptionIsHidden = ((/** @type {?} */ (this.config.filterConfig.options))).map((/**
                     * @param {?} option
                     * @return {?}
                     */
                    function (option) { return ({
                        option: option,
                        hidden: false,
                    }); }));
                }
            }
        }
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} option
     * @param {?} optionsList
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.isSelected = /**
     * @param {?} option
     * @param {?} optionsList
     * @return {?}
     */
    function (option, optionsList) {
        var _this = this;
        if (optionsList) {
            /** @type {?} */
            var optionValue_1 = option.hasOwnProperty('value') ? option.value : option;
            /** @type {?} */
            var found = optionsList.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this.optionPresentCheck(item, optionValue_1); }));
            return found !== undefined;
        }
        return false;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.toggleSelection = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        /** @type {?} */
        var optionValue = option.hasOwnProperty('value') ? option.value : option;
        /** @type {?} */
        var optionIndex = this.multiSelectedOptions.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.optionPresentCheck(item, optionValue); }));
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
                function (record) { return record.option === option; }))].hidden = true;
            }
        }
        else {
            this.multiSelectedOptions.push(optionValue);
        }
    };
    /**
     * @param {?} item
     * @param {?} optionValue
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.optionPresentCheck = /**
     * @param {?} item
     * @param {?} optionValue
     * @return {?}
     */
    function (item, optionValue) {
        if (item.hasOwnProperty('value')) {
            return item.value === optionValue;
        }
        else {
            return item === optionValue;
        }
    };
    /**
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.multiSelectedOptions = this.filter ? tslib_1.__spread(this.filter) : [];
        this.dropdown.closePanel();
        this.clearOptionFilter();
    };
    /**
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.filterMultiSelect = /**
     * @return {?}
     */
    function () {
        if (this.multiSelectedOptions.length === 0 && !this.filter) {
            this.multiSelectHasVisibleOptions() && this.dropdown ? (this.error = true) : null;
        }
        else {
            this.clearOptionFilter();
            /** @type {?} */
            var actualFilter = this.multiSelectedOptions.length > 0 ? tslib_1.__spread(this.multiSelectedOptions) : undefined;
            this.filterData(actualFilter);
            this.dropdown.closePanel();
        }
    };
    /**
     * @param {?} optionFilter
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.multiSelectOptionFilter = /**
     * @param {?} optionFilter
     * @return {?}
     */
    function (optionFilter) {
        var _this = this;
        this.multiSelectedOptionIsHidden.forEach((/**
         * @param {?} record
         * @return {?}
         */
        function (record) {
            if (record.option) {
                record.hidden = !(_this.getOptionText(record.option)
                    .toLowerCase()
                    .startsWith(optionFilter.toLowerCase()) || _this.isSelected(record.option, _this.multiSelectedOptions));
            }
        }));
    };
    /**
     * @param {?} option
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.multiSelectOptionIsHidden = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return this.multiSelectedOptionIsHidden.find((/**
         * @param {?} record
         * @return {?}
         */
        function (record) { return record.option === option; })).hidden;
    };
    /**
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.multiSelectHasVisibleOptions = /**
     * @return {?}
     */
    function () {
        return this.multiSelectedOptionIsHidden.some((/**
         * @param {?} record
         * @return {?}
         */
        function (record) { return !record.hidden; }));
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.getOptionText = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (typeof option !== 'object') {
            return option.toString();
        }
        else {
            /** @type {?} */
            var opt = (/** @type {?} */ (option));
            return (opt.label.length > 0 ? opt.label : opt.value).toString();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.multiSelectOptionFilterHandleKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * @private
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.clearOptionFilter = /**
     * @private
     * @return {?}
     */
    function () {
        this.error = false;
        if (this.optionFilter.length > 0) {
            this.optionFilter = '';
            this.multiSelectedOptionIsHidden.forEach((/**
             * @param {?} record
             * @return {?}
             */
            function (record) {
                record.hidden = false;
            }));
        }
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
        var mouseMoveSubscription = fromEvent(window.document, 'mousemove').subscribe((/**
         * @param {?} middleMouseEvent
         * @return {?}
         */
        function (middleMouseEvent) {
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
        }));
        /** @type {?} */
        var mouseUpSubscription = fromEvent(window.document, 'mouseup').subscribe((/**
         * @return {?}
         */
        function () {
            mouseUpSubscription.unsubscribe();
            mouseMoveSubscription.unsubscribe();
            _this.changeDetectorRef.markForCheck();
        }));
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
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.filterInput.nativeElement.focus(); }), 0);
        }
        if (this.multiSelect && this.dropdown) {
            this.dropdown.onKeyDown = (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                _this.multiSelectOptionFilterHandleKeydown(event);
            });
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.optionFilterInput.nativeElement.focus(); }), 0);
            this.changeDetectorRef.markForCheck();
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
        this.changeTimeout = setTimeout((/**
         * @return {?}
         */
        function () {
            _this.direction = _this.getNextSortDirection(_this.direction);
            _this._sort.sort(_this.id, _this.direction, _this.config.transforms.sort);
            _this.changeDetectorRef.markForCheck();
        }), 300);
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
        var actualFilter = NovoDataTableFilterUtils.constructFilter(filter, this.config.filterConfig.type, this.multiSelect);
        /** @type {?} */
        var selectedOption = this.config.filterConfig.type === 'date' && filter ? filter : undefined;
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
            _this._sort.filter(_this.id, _this.config.filterConfig.type, actualFilter, _this.config.transforms.filter, _this.allowMultipleFilters, selectedOption);
            _this.changeDetectorRef.markForCheck();
        }), 300);
    };
    /**
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.clearFilter = /**
     * @return {?}
     */
    function () {
        this.filter = undefined;
        this.multiSelectedOptions = [];
        this.activeDateFilter = undefined;
        this.filterData(undefined);
        this.clearOptionFilter();
        this.dropdown.closePanel();
    };
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    NovoDataTableCellHeader.prototype.getNextSortDirection = /**
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
    NovoDataTableCellHeader.prototype.getDefaultDateFilterOptions = /**
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
    NovoDataTableCellHeader.decorators = [
        { type: Component, args: [{
                    selector: '[novo-data-table-cell-config]',
                    template: "\n    <i class=\"bhi-{{ labelIcon }} label-icon\" *ngIf=\"labelIcon\" data-automation-id=\"novo-data-table-header-icon\"></i>\n    <label data-automation-id=\"novo-data-table-label\">{{ label }}</label>\n    <div>\n      <button\n        *ngIf=\"config.sortable\"\n        tooltipPosition=\"right\"\n        [tooltip]=\"labels.sort\"\n        theme=\"icon\"\n        [icon]=\"icon\"\n        (click)=\"sort()\"\n        [class.active]=\"sortActive\"\n        data-automation-id=\"novo-data-table-sort\"\n        [attr.data-feature-id]=\"'novo-data-table-sort-' + this.id\"\n      ></button>\n      <novo-dropdown\n        *ngIf=\"config.filterable\"\n        side=\"right\"\n        parentScrollSelector=\".novo-data-table-container\"\n        containerClass=\"data-table-dropdown\"\n        data-automation-id=\"novo-data-table-filter\"\n      >\n        <button\n          type=\"button\"\n          theme=\"icon\"\n          icon=\"filter\"\n          [class.active]=\"filterActive\"\n          (click)=\"focusInput()\"\n          tooltipPosition=\"right\"\n          [tooltip]=\"labels.filters\"\n          [attr.data-feature-id]=\"'novo-data-table-filter-' + this.id\"\n        ></button>\n        <div class=\"header\">\n          <span>{{ labels.filters }}</span>\n          <button\n            theme=\"dialogue\"\n            color=\"negative\"\n            icon=\"times\"\n            (click)=\"clearFilter()\"\n            *ngIf=\"filter !== null && filter !== undefined && filter !== ''\"\n            data-automation-id=\"novo-data-table-filter-clear\"\n          >\n            {{ labels.clear }}\n          </button>\n        </div>\n        <ng-container [ngSwitch]=\"config.filterConfig.type\">\n          <list *ngSwitchCase=\"'date'\">\n            <ng-container *ngIf=\"!showCustomRange\">\n              <item\n                [class.active]=\"activeDateFilter === option.label\"\n                *ngFor=\"let option of config.filterConfig.options\"\n                (click)=\"filterData(option)\"\n                [attr.data-automation-id]=\"'novo-data-table-filter-' + option.label\"\n              >\n                {{ option.label }} <i class=\"bhi-check\" *ngIf=\"activeDateFilter === option.label\"></i>\n              </item>\n            </ng-container>\n            <item\n              [class.active]=\"labels.customDateRange === activeDateFilter\"\n              (click)=\"toggleCustomRange($event, true)\"\n              *ngIf=\"config.filterConfig.allowCustomRange && !showCustomRange\"\n              [keepOpen]=\"true\"\n            >\n              {{ labels.customDateRange }} <i class=\"bhi-check\" *ngIf=\"labels.customDateRange === activeDateFilter\"></i>\n            </item>\n            <div class=\"calendar-container\" *ngIf=\"showCustomRange\">\n              <div (click)=\"toggleCustomRange($event, false)\"><i class=\"bhi-previous\"></i>{{ labels.backToPresetFilters }}</div>\n              <novo-date-picker (onSelect)=\"filterData($event)\" [(ngModel)]=\"filter\" range=\"true\"></novo-date-picker>\n            </div>\n          </list>\n          <list *ngSwitchCase=\"'select'\">\n            <item\n              [class.active]=\"filter === option\"\n              *ngFor=\"let option of config.filterConfig.options\"\n              (click)=\"filterData(option)\"\n              [attr.data-automation-id]=\"'novo-data-table-filter-' + (option?.label || option)\"\n            >\n              <span>{{ option?.label || option }}</span>\n              <i class=\"bhi-check\" *ngIf=\"option.hasOwnProperty('value') ? filter === option.value : filter === option\"></i>\n            </item>\n          </list>\n          <list *ngSwitchCase=\"'multi-select'\">\n            <div class=\"dropdown-list-filter\" (keydown)=\"multiSelectOptionFilterHandleKeydown($event)\">\n              <item class=\"filter-search\" keepOpen=\"true\">\n                <input\n                  [(ngModel)]=\"optionFilter\"\n                  (ngModelChange)=\"multiSelectOptionFilter($event)\"\n                  #optionFilterInput\n                  data-automation-id=\"novo-data-table-multi-select-option-filter-input\"\n                />\n                <i class=\"bhi-search\"></i>\n                <span class=\"error-text\" [hidden]=\"!error || !multiSelectHasVisibleOptions()\">{{ labels.selectFilterOptions }}</span>\n              </item>\n            </div>\n            <div class=\"dropdown-list-options\">\n              <item\n                *ngFor=\"let option of config.filterConfig.options\"\n                [hidden]=\"multiSelectOptionIsHidden(option)\"\n                (click)=\"toggleSelection(option)\"\n                [attr.data-automation-id]=\"'novo-data-table-filter-' + (option?.label || option)\"\n                [keepOpen]=\"true\"\n              >\n                <span>{{ option?.label || option }}</span>\n                <i\n                  [class.bhi-checkbox-empty]=\"!isSelected(option, multiSelectedOptions)\"\n                  [class.bhi-checkbox-filled]=\"isSelected(option, multiSelectedOptions)\"\n                ></i>\n              </item>\n            </div>\n            <p class=\"filter-null-results\" [hidden]=\"multiSelectHasVisibleOptions()\">{{ labels.pickerEmpty }}</p>\n          </list>\n          <list *ngSwitchCase=\"'custom'\">\n            <item class=\"filter-search\" keepOpen=\"true\">\n              <ng-container *ngTemplateOutlet=\"filterTemplate; context: { $implicit: config }\"></ng-container>\n            </item>\n          </list>\n          <list *ngSwitchDefault>\n            <item class=\"filter-search\" keepOpen=\"true\">\n              <input\n                [type]=\"config.filterConfig.type\"\n                [(ngModel)]=\"filter\"\n                (ngModelChange)=\"filterData($event)\"\n                #filterInput\n                data-automation-id=\"novo-data-table-filter-input\"\n              />\n            </item>\n          </list>\n        </ng-container>\n        <div class=\"footer\" *ngIf=\"multiSelect\">\n          <button theme=\"dialogue\" color=\"dark\" (click)=\"cancel()\" data-automation-id=\"novo-data-table-multi-select-cancel\">\n            {{ labels.cancel }}\n          </button>\n          <button theme=\"dialogue\" color=\"positive\" (click)=\"filterMultiSelect()\" data-automation-id=\"novo-data-table-multi-select-filter\">\n            {{ labels.filters }}\n          </button>\n        </div>\n      </novo-dropdown>\n    </div>\n    <div class=\"spacer\"></div>\n    <div class=\"data-table-header-resizable\" *ngIf=\"config.resizable\"><span (mousedown)=\"startResize($event)\">&nbsp;</span></div>\n  ",
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
    return NovoDataTableCellHeader;
}());
export { NovoDataTableCellHeader };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFDTCxRQUFRLEVBR1IsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxXQUFXLEVBQ1gsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQVcvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUU3RDtJQTBPRSxpQ0FDVSxpQkFBb0MsRUFDckMsTUFBd0IsRUFDdkIsS0FBd0IsRUFDeEIsUUFBbUIsRUFDbkIsVUFBc0IsRUFDWCxLQUFpQyxFQUNqQyxhQUEyQjtRQVBoRCxpQkFVQztRQVRTLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFD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SUEwQzFCLHdEQUE0Qzs7Ozs7SUFDNUMsZ0RBQTJCOztJQUUzQix3Q0FBcUI7O0lBQ3JCLHVDQUFpQzs7SUFDakMsNENBQXlCOztJQUN6QixxQ0FBa0I7O0lBQ2xCLHlDQUFtQjs7SUFDbkIsNENBQXlCOztJQUN6QiwrQ0FBcUM7O0lBQ3JDLDZDQUFtQzs7SUFDbkMsa0RBQXdDOztJQUN4QyxtREFBZ0M7O0lBQ2hDLHlDQU1FOztJQUNGLDhDQUFvQzs7SUFDcEMsdURBQTZDOzs7OztJQUM3Qyw4REFBb0g7O0lBQ3BILCtDQUFpQzs7SUFDakMsd0NBQThCOzs7OztJQUM5QixnREFBMkM7Ozs7O0lBQzNDLDBDQUFxQzs7Ozs7SUFHbkMsb0RBQTRDOztJQUM1Qyx5Q0FBK0I7Ozs7O0lBQy9CLHdDQUFnQzs7Ozs7SUFDaEMsMkNBQTJCOzs7OztJQUMzQiw2Q0FBOEI7O0lBQzlCLHdDQUFvRDs7SUFDcEQsZ0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBUZW1wbGF0ZVJlZixcbiAgSG9zdExpc3RlbmVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0NvbHVtbkRlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBJRGF0YVRhYmxlU29ydEZpbHRlcixcbiAgSURhdGFUYWJsZUNoYW5nZUV2ZW50LFxuICBJRGF0YVRhYmxlQ29sdW1uLFxuICBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uLFxuICBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnLFxuICBJRGF0YVRhYmxlQ29sdW1uU29ydENvbmZpZyxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbmltcG9ydCB7IE5vdm9EYXRhVGFibGVTb3J0RmlsdGVyIH0gZnJvbSAnLi4vc29ydC1maWx0ZXIvc29ydC1maWx0ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5vdm9Ecm9wZG93bkVsZW1lbnQgfSBmcm9tICcuLi8uLi9kcm9wZG93bi9Ecm9wZG93bic7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZVN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVGaWx0ZXJVdGlscyB9IGZyb20gJy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtZmlsdGVyLXV0aWxzJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25vdm8tZGF0YS10YWJsZS1jZWxsLWNvbmZpZ10nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpIGNsYXNzPVwiYmhpLXt7IGxhYmVsSWNvbiB9fSBsYWJlbC1pY29uXCIgKm5nSWY9XCJsYWJlbEljb25cIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtaGVhZGVyLWljb25cIj48L2k+XG4gICAgPGxhYmVsIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1sYWJlbFwiPnt7IGxhYmVsIH19PC9sYWJlbD5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICAqbmdJZj1cImNvbmZpZy5zb3J0YWJsZVwiXG4gICAgICAgIHRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgW3Rvb2x0aXBdPVwibGFiZWxzLnNvcnRcIlxuICAgICAgICB0aGVtZT1cImljb25cIlxuICAgICAgICBbaWNvbl09XCJpY29uXCJcbiAgICAgICAgKGNsaWNrKT1cInNvcnQoKVwiXG4gICAgICAgIFtjbGFzcy5hY3RpdmVdPVwic29ydEFjdGl2ZVwiXG4gICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1zb3J0XCJcbiAgICAgICAgW2F0dHIuZGF0YS1mZWF0dXJlLWlkXT1cIidub3ZvLWRhdGEtdGFibGUtc29ydC0nICsgdGhpcy5pZFwiXG4gICAgICA+PC9idXR0b24+XG4gICAgICA8bm92by1kcm9wZG93blxuICAgICAgICAqbmdJZj1cImNvbmZpZy5maWx0ZXJhYmxlXCJcbiAgICAgICAgc2lkZT1cInJpZ2h0XCJcbiAgICAgICAgcGFyZW50U2Nyb2xsU2VsZWN0b3I9XCIubm92by1kYXRhLXRhYmxlLWNvbnRhaW5lclwiXG4gICAgICAgIGNvbnRhaW5lckNsYXNzPVwiZGF0YS10YWJsZS1kcm9wZG93blwiXG4gICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1maWx0ZXJcIlxuICAgICAgPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdGhlbWU9XCJpY29uXCJcbiAgICAgICAgICBpY29uPVwiZmlsdGVyXCJcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImZpbHRlckFjdGl2ZVwiXG4gICAgICAgICAgKGNsaWNrKT1cImZvY3VzSW5wdXQoKVwiXG4gICAgICAgICAgdG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgIFt0b29sdGlwXT1cImxhYmVscy5maWx0ZXJzXCJcbiAgICAgICAgICBbYXR0ci5kYXRhLWZlYXR1cmUtaWRdPVwiJ25vdm8tZGF0YS10YWJsZS1maWx0ZXItJyArIHRoaXMuaWRcIlxuICAgICAgICA+PC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8c3Bhbj57eyBsYWJlbHMuZmlsdGVycyB9fTwvc3Bhbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0aGVtZT1cImRpYWxvZ3VlXCJcbiAgICAgICAgICAgIGNvbG9yPVwibmVnYXRpdmVcIlxuICAgICAgICAgICAgaWNvbj1cInRpbWVzXCJcbiAgICAgICAgICAgIChjbGljayk9XCJjbGVhckZpbHRlcigpXCJcbiAgICAgICAgICAgICpuZ0lmPVwiZmlsdGVyICE9PSBudWxsICYmIGZpbHRlciAhPT0gdW5kZWZpbmVkICYmIGZpbHRlciAhPT0gJydcIlxuICAgICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWZpbHRlci1jbGVhclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgbGFiZWxzLmNsZWFyIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJjb25maWcuZmlsdGVyQ29uZmlnLnR5cGVcIj5cbiAgICAgICAgICA8bGlzdCAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUnXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXNob3dDdXN0b21SYW5nZVwiPlxuICAgICAgICAgICAgICA8aXRlbVxuICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiYWN0aXZlRGF0ZUZpbHRlciA9PT0gb3B0aW9uLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImZpbHRlckRhdGEob3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWRhdGEtdGFibGUtZmlsdGVyLScgKyBvcHRpb24ubGFiZWxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgb3B0aW9uLmxhYmVsIH19IDxpIGNsYXNzPVwiYmhpLWNoZWNrXCIgKm5nSWY9XCJhY3RpdmVEYXRlRmlsdGVyID09PSBvcHRpb24ubGFiZWxcIj48L2k+XG4gICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPGl0ZW1cbiAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJsYWJlbHMuY3VzdG9tRGF0ZVJhbmdlID09PSBhY3RpdmVEYXRlRmlsdGVyXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZUN1c3RvbVJhbmdlKCRldmVudCwgdHJ1ZSlcIlxuICAgICAgICAgICAgICAqbmdJZj1cImNvbmZpZy5maWx0ZXJDb25maWcuYWxsb3dDdXN0b21SYW5nZSAmJiAhc2hvd0N1c3RvbVJhbmdlXCJcbiAgICAgICAgICAgICAgW2tlZXBPcGVuXT1cInRydWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBsYWJlbHMuY3VzdG9tRGF0ZVJhbmdlIH19IDxpIGNsYXNzPVwiYmhpLWNoZWNrXCIgKm5nSWY9XCJsYWJlbHMuY3VzdG9tRGF0ZVJhbmdlID09PSBhY3RpdmVEYXRlRmlsdGVyXCI+PC9pPlxuICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWNvbnRhaW5lclwiICpuZ0lmPVwic2hvd0N1c3RvbVJhbmdlXCI+XG4gICAgICAgICAgICAgIDxkaXYgKGNsaWNrKT1cInRvZ2dsZUN1c3RvbVJhbmdlKCRldmVudCwgZmFsc2UpXCI+PGkgY2xhc3M9XCJiaGktcHJldmlvdXNcIj48L2k+e3sgbGFiZWxzLmJhY2tUb1ByZXNldEZpbHRlcnMgfX08L2Rpdj5cbiAgICAgICAgICAgICAgPG5vdm8tZGF0ZS1waWNrZXIgKG9uU2VsZWN0KT1cImZpbHRlckRhdGEoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwiZmlsdGVyXCIgcmFuZ2U9XCJ0cnVlXCI+PC9ub3ZvLWRhdGUtcGlja2VyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saXN0PlxuICAgICAgICAgIDxsaXN0ICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiPlxuICAgICAgICAgICAgPGl0ZW1cbiAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJmaWx0ZXIgPT09IG9wdGlvblwiXG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImZpbHRlckRhdGEob3B0aW9uKVwiXG4gICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1kYXRhLXRhYmxlLWZpbHRlci0nICsgKG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPnt7IG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uIH19PC9zcGFuPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jaGVja1wiICpuZ0lmPVwib3B0aW9uLmhhc093blByb3BlcnR5KCd2YWx1ZScpID8gZmlsdGVyID09PSBvcHRpb24udmFsdWUgOiBmaWx0ZXIgPT09IG9wdGlvblwiPjwvaT5cbiAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgPGxpc3QgKm5nU3dpdGNoQ2FzZT1cIidtdWx0aS1zZWxlY3QnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbGlzdC1maWx0ZXJcIiAoa2V5ZG93bik9XCJtdWx0aVNlbGVjdE9wdGlvbkZpbHRlckhhbmRsZUtleWRvd24oJGV2ZW50KVwiPlxuICAgICAgICAgICAgICA8aXRlbSBjbGFzcz1cImZpbHRlci1zZWFyY2hcIiBrZWVwT3Blbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwib3B0aW9uRmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm11bHRpU2VsZWN0T3B0aW9uRmlsdGVyKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgI29wdGlvbkZpbHRlcklucHV0XG4gICAgICAgICAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtbXVsdGktc2VsZWN0LW9wdGlvbi1maWx0ZXItaW5wdXRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktc2VhcmNoXCI+PC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiIFtoaWRkZW5dPVwiIWVycm9yIHx8ICFtdWx0aVNlbGVjdEhhc1Zpc2libGVPcHRpb25zKClcIj57eyBsYWJlbHMuc2VsZWN0RmlsdGVyT3B0aW9ucyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbGlzdC1vcHRpb25zXCI+XG4gICAgICAgICAgICAgIDxpdGVtXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgIFtoaWRkZW5dPVwibXVsdGlTZWxlY3RPcHRpb25Jc0hpZGRlbihvcHRpb24pXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlU2VsZWN0aW9uKG9wdGlvbilcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1kYXRhLXRhYmxlLWZpbHRlci0nICsgKG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgW2tlZXBPcGVuXT1cInRydWVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgb3B0aW9uPy5sYWJlbCB8fCBvcHRpb24gfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5iaGktY2hlY2tib3gtZW1wdHldPVwiIWlzU2VsZWN0ZWQob3B0aW9uLCBtdWx0aVNlbGVjdGVkT3B0aW9ucylcIlxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmJoaS1jaGVja2JveC1maWxsZWRdPVwiaXNTZWxlY3RlZChvcHRpb24sIG11bHRpU2VsZWN0ZWRPcHRpb25zKVwiXG4gICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImZpbHRlci1udWxsLXJlc3VsdHNcIiBbaGlkZGVuXT1cIm11bHRpU2VsZWN0SGFzVmlzaWJsZU9wdGlvbnMoKVwiPnt7IGxhYmVscy5waWNrZXJFbXB0eSB9fTwvcD5cbiAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgPGxpc3QgKm5nU3dpdGNoQ2FzZT1cIidjdXN0b20nXCI+XG4gICAgICAgICAgICA8aXRlbSBjbGFzcz1cImZpbHRlci1zZWFyY2hcIiBrZWVwT3Blbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZpbHRlclRlbXBsYXRlOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29uZmlnIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgPGxpc3QgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiZmlsdGVyLXNlYXJjaFwiIGtlZXBPcGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBbdHlwZV09XCJjb25maWcuZmlsdGVyQ29uZmlnLnR5cGVcIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmlsdGVyXCJcbiAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJmaWx0ZXJEYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAgICNmaWx0ZXJJbnB1dFxuICAgICAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1maWx0ZXItaW5wdXRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIiAqbmdJZj1cIm11bHRpU2VsZWN0XCI+XG4gICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImRpYWxvZ3VlXCIgY29sb3I9XCJkYXJrXCIgKGNsaWNrKT1cImNhbmNlbCgpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLW11bHRpLXNlbGVjdC1jYW5jZWxcIj5cbiAgICAgICAgICAgIHt7IGxhYmVscy5jYW5jZWwgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiBjb2xvcj1cInBvc2l0aXZlXCIgKGNsaWNrKT1cImZpbHRlck11bHRpU2VsZWN0KClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtbXVsdGktc2VsZWN0LWZpbHRlclwiPlxuICAgICAgICAgICAge3sgbGFiZWxzLmZpbHRlcnMgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25vdm8tZHJvcGRvd24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNwYWNlclwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkYXRhLXRhYmxlLWhlYWRlci1yZXNpemFibGVcIiAqbmdJZj1cImNvbmZpZy5yZXNpemFibGVcIj48c3BhbiAobW91c2Vkb3duKT1cInN0YXJ0UmVzaXplKCRldmVudClcIj4mbmJzcDs8L3NwYW4+PC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlQ2VsbEhlYWRlcjxUPiBpbXBsZW1lbnRzIElEYXRhVGFibGVTb3J0RmlsdGVyLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2ZpbHRlcklucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIGZpbHRlcklucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKE5vdm9Ecm9wZG93bkVsZW1lbnQsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBkcm9wZG93bjogTm92b0Ryb3Bkb3duRWxlbWVudDtcbiAgQFZpZXdDaGlsZCgnb3B0aW9uRmlsdGVySW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgb3B0aW9uRmlsdGVySW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KClcbiAgZGVmYXVsdFNvcnQ6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9O1xuXG4gIEBJbnB1dCgpXG4gIGFsbG93TXVsdGlwbGVGaWx0ZXJzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgcmVzaXplZDogRXZlbnRFbWl0dGVyPElEYXRhVGFibGVDb2x1bW48VD4+O1xuICBASW5wdXQoKVxuICBmaWx0ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5yZXNpemFibGUnKVxuICBwdWJsaWMgcmVzaXphYmxlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgnbm92by1kYXRhLXRhYmxlLWNlbGwtY29uZmlnJylcbiAgc2V0IGNvbHVtbihjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pIHtcbiAgICB0aGlzLl9jb2x1bW4gPSBjb2x1bW47XG4gICAgdGhpcy5sYWJlbCA9IGNvbHVtbi50eXBlID09PSAnYWN0aW9uJyA/ICcnIDogY29sdW1uLmxhYmVsO1xuICAgIHRoaXMubGFiZWxJY29uID0gY29sdW1uLmxhYmVsSWNvbjtcblxuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgc29ydGFibGU6ICEhY29sdW1uLnNvcnRhYmxlLFxuICAgICAgZmlsdGVyYWJsZTogISFjb2x1bW4uZmlsdGVyYWJsZSxcbiAgICAgIHJlc2l6YWJsZTogISFjb2x1bW4ucmVzaXphYmxlLFxuICAgIH07XG4gICAgdGhpcy5yZXNpemFibGUgPSB0aGlzLmNvbmZpZy5yZXNpemFibGU7XG5cbiAgICBsZXQgdHJhbnNmb3JtczogeyBmaWx0ZXI/OiBGdW5jdGlvbjsgc29ydD86IEZ1bmN0aW9uIH0gPSB7fTtcblxuICAgIGlmIChjb2x1bW4uZmlsdGVyYWJsZSAmJiBIZWxwZXJzLmlzT2JqZWN0KGNvbHVtbi5maWx0ZXJhYmxlKSkge1xuICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnID0gY29sdW1uLmZpbHRlcmFibGUgYXMgSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZztcbiAgICAgIGlmICghdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUpIHtcbiAgICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnID0geyB0eXBlOiAndGV4dCcgfTtcbiAgICAgIH1cbiAgICAgIGlmICgoY29sdW1uLmZpbHRlcmFibGUgYXMgSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZykudHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybXMuZmlsdGVyID0gKGNvbHVtbi5maWx0ZXJhYmxlIGFzIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWcpLnRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnID0geyB0eXBlOiAndGV4dCcgfTtcbiAgICB9XG5cbiAgICBpZiAoY29sdW1uLnNvcnRhYmxlICYmIEhlbHBlcnMuaXNPYmplY3QoY29sdW1uLnNvcnRhYmxlKSkge1xuICAgICAgaWYgKChjb2x1bW4uc29ydGFibGUgYXMgSURhdGFUYWJsZUNvbHVtblNvcnRDb25maWcpLnRyYW5zZm9ybSkge1xuICAgICAgICB0cmFuc2Zvcm1zLnNvcnQgPSAoY29sdW1uLnNvcnRhYmxlIGFzIElEYXRhVGFibGVDb2x1bW5Tb3J0Q29uZmlnKS50cmFuc2Zvcm07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID09PSAnZGF0ZScgJiYgIXRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zKSB7XG4gICAgICB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9ucyA9IHRoaXMuZ2V0RGVmYXVsdERhdGVGaWx0ZXJPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWcudHJhbnNmb3JtcyA9IHRyYW5zZm9ybXM7XG4gIH1cblxuICBwcml2YXRlIF9yZXJlbmRlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGNoYW5nZVRpbWVvdXQ6IGFueTtcblxuICBwdWJsaWMgbGFiZWw6IHN0cmluZztcbiAgcHVibGljIGljb246IHN0cmluZyA9ICdzb3J0YWJsZSc7XG4gIHB1YmxpYyBsYWJlbEljb246IHN0cmluZztcbiAgcHVibGljIGlkOiBzdHJpbmc7XG4gIHB1YmxpYyBmaWx0ZXI6IGFueTtcbiAgcHVibGljIGRpcmVjdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgZmlsdGVyQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzb3J0QWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzaG93Q3VzdG9tUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGFjdGl2ZURhdGVGaWx0ZXI6IHN0cmluZztcbiAgcHVibGljIGNvbmZpZzoge1xuICAgIHNvcnRhYmxlOiBib29sZWFuO1xuICAgIGZpbHRlcmFibGU6IGJvb2xlYW47XG4gICAgcmVzaXphYmxlOiBib29sZWFuO1xuICAgIHRyYW5zZm9ybXM/OiB7IGZpbHRlcj86IEZ1bmN0aW9uOyBzb3J0PzogRnVuY3Rpb24gfTtcbiAgICBmaWx0ZXJDb25maWc/OiBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnO1xuICB9O1xuICBwdWJsaWMgbXVsdGlTZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIG11bHRpU2VsZWN0ZWRPcHRpb25zOiBBcnJheTxhbnk+ID0gW107XG4gIHByaXZhdGUgbXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuOiBBcnJheTx7IG9wdGlvbjogc3RyaW5nIHwgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbjsgaGlkZGVuOiBib29sZWFuIH0+ID0gW107XG4gIHB1YmxpYyBvcHRpb25GaWx0ZXI6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgZXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIF9jb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSxcbiAgICBwcml2YXRlIHN0YXRlOiBEYXRhVGFibGVTdGF0ZTxUPixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBfc29ydDogTm92b0RhdGFUYWJsZVNvcnRGaWx0ZXI8VD4sXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIF9jZGtDb2x1bW5EZWY6IENka0NvbHVtbkRlZixcbiAgKSB7XG4gICAgdGhpcy5fcmVyZW5kZXJTdWJzY3JpcHRpb24gPSBzdGF0ZS51cGRhdGVzLnN1YnNjcmliZSgoY2hhbmdlOiBJRGF0YVRhYmxlQ2hhbmdlRXZlbnQpID0+IHRoaXMuY2hlY2tTb3J0RmlsdGVyU3RhdGUoY2hhbmdlKSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2Nka0NvbHVtbkRlZikge1xuICAgICAgdGhpcy5pZCA9IHRoaXMuX2Nka0NvbHVtbkRlZi5uYW1lO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2tTb3J0RmlsdGVyU3RhdGUoeyBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSwgdHJ1ZSk7XG5cbiAgICB0aGlzLm11bHRpU2VsZWN0ID0gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnICYmIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID8gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUgPT09ICdtdWx0aS1zZWxlY3QnIDogZmFsc2U7XG4gICAgaWYgKHRoaXMubXVsdGlTZWxlY3QpIHtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmZpbHRlciA/IFsuLi50aGlzLmZpbHRlcl0gOiBbXTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXJlbmRlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbikgPT4ge1xuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2hlY2tTb3J0RmlsdGVyU3RhdGUoc29ydEZpbHRlclN0YXRlOiBJRGF0YVRhYmxlQ2hhbmdlRXZlbnQsIGluaXRpYWxDb25maWc6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmIChzb3J0RmlsdGVyU3RhdGUuc29ydCAmJiBzb3J0RmlsdGVyU3RhdGUuc29ydC5pZCA9PT0gdGhpcy5pZCkge1xuICAgICAgdGhpcy5pY29uID0gYHNvcnQtJHtzb3J0RmlsdGVyU3RhdGUuc29ydC52YWx1ZX1gO1xuICAgICAgdGhpcy5zb3J0QWN0aXZlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pY29uID0gJ3NvcnRhYmxlJztcbiAgICAgIHRoaXMuc29ydEFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHRhYmxlRmlsdGVyID0gSGVscGVycy5jb252ZXJ0VG9BcnJheShzb3J0RmlsdGVyU3RhdGUuZmlsdGVyKTtcbiAgICBjb25zdCB0aGlzRmlsdGVyID0gdGFibGVGaWx0ZXIuZmluZCgoZmlsdGVyKSA9PiBmaWx0ZXIgJiYgZmlsdGVyLmlkID09PSB0aGlzLmlkKTtcblxuICAgIGlmICh0aGlzRmlsdGVyKSB7XG4gICAgICB0aGlzLmZpbHRlckFjdGl2ZSA9IHRydWU7XG4gICAgICBpZiAoaW5pdGlhbENvbmZpZyAmJiB0aGlzRmlsdGVyLnR5cGUgPT09ICdkYXRlJyAmJiB0aGlzRmlsdGVyLnNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZUZpbHRlciA9IHRoaXNGaWx0ZXIuc2VsZWN0ZWRPcHRpb24ubGFiZWwgfHwgdGhpcy5sYWJlbHMuY3VzdG9tRGF0ZVJhbmdlO1xuICAgICAgfVxuICAgICAgdGhpcy5maWx0ZXIgPSB0aGlzRmlsdGVyLnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlckFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5maWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmFjdGl2ZURhdGVGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgfVxuICAgIGlmICh0aGlzLmRlZmF1bHRTb3J0ICYmIHRoaXMuaWQgPT09IHRoaXMuZGVmYXVsdFNvcnQuaWQpIHtcbiAgICAgIHRoaXMuaWNvbiA9IGBzb3J0LSR7dGhpcy5kZWZhdWx0U29ydC52YWx1ZX1gO1xuICAgICAgdGhpcy5zb3J0QWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5tdWx0aVNlbGVjdCA9IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZyAmJiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSA/IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID09PSAnbXVsdGktc2VsZWN0JyA6IGZhbHNlO1xuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0KSB7XG4gICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zID0gdGhpcy5maWx0ZXIgPyBbLi4udGhpcy5maWx0ZXJdIDogW107XG4gICAgICBpZiAodGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9uc1swXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbiA9ICh0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9ucyBhcyBzdHJpbmdbXSkubWFwKFxuICAgICAgICAgICAgKG9wdGlvbjogc3RyaW5nKTogeyBvcHRpb246IHN0cmluZzsgaGlkZGVuOiBib29sZWFuIH0gPT4gKHsgb3B0aW9uOiBvcHRpb24sIGhpZGRlbjogZmFsc2UgfSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbiA9ICh0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9ucyBhcyBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uW10pLm1hcChcbiAgICAgICAgICAgIChvcHRpb246IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb24pOiB7IG9wdGlvbjogSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbjsgaGlkZGVuOiBib29sZWFuIH0gPT4gKHtcbiAgICAgICAgICAgICAgb3B0aW9uOiBvcHRpb24sXG4gICAgICAgICAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgaXNTZWxlY3RlZChvcHRpb24sIG9wdGlvbnNMaXN0KSB7XG4gICAgaWYgKG9wdGlvbnNMaXN0KSB7XG4gICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvbi5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSA/IG9wdGlvbi52YWx1ZSA6IG9wdGlvbjtcblxuICAgICAgbGV0IGZvdW5kID0gb3B0aW9uc0xpc3QuZmluZCgoaXRlbSkgPT4gdGhpcy5vcHRpb25QcmVzZW50Q2hlY2soaXRlbSwgb3B0aW9uVmFsdWUpKTtcbiAgICAgIHJldHVybiBmb3VuZCAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VsZWN0aW9uKG9wdGlvbikge1xuICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uLmhhc093blByb3BlcnR5KCd2YWx1ZScpID8gb3B0aW9uLnZhbHVlIDogb3B0aW9uO1xuXG4gICAgbGV0IG9wdGlvbkluZGV4ID0gdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucy5maW5kSW5kZXgoKGl0ZW0pID0+IHRoaXMub3B0aW9uUHJlc2VudENoZWNrKGl0ZW0sIG9wdGlvblZhbHVlKSk7XG4gICAgdGhpcy5lcnJvciA9IGZhbHNlO1xuICAgIGlmIChvcHRpb25JbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zLnNwbGljZShvcHRpb25JbmRleCwgMSk7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMub3B0aW9uRmlsdGVyICYmXG4gICAgICAgICF0aGlzLmdldE9wdGlvblRleHQob3B0aW9uKVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLnN0YXJ0c1dpdGgodGhpcy5vcHRpb25GaWx0ZXIudG9Mb3dlckNhc2UoKSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlblt0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbi5maW5kSW5kZXgoKHJlY29yZCkgPT4gcmVjb3JkLm9wdGlvbiA9PT0gb3B0aW9uKV0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucy5wdXNoKG9wdGlvblZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3B0aW9uUHJlc2VudENoZWNrKGl0ZW0sIG9wdGlvblZhbHVlKTogYm9vbGVhbiB7XG4gICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgIHJldHVybiBpdGVtLnZhbHVlID09PSBvcHRpb25WYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGl0ZW0gPT09IG9wdGlvblZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuZmlsdGVyID8gWy4uLnRoaXMuZmlsdGVyXSA6IFtdO1xuICAgIHRoaXMuZHJvcGRvd24uY2xvc2VQYW5lbCgpO1xuICAgIHRoaXMuY2xlYXJPcHRpb25GaWx0ZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJNdWx0aVNlbGVjdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDAgJiYgIXRoaXMuZmlsdGVyKSB7XG4gICAgICB0aGlzLm11bHRpU2VsZWN0SGFzVmlzaWJsZU9wdGlvbnMoKSAmJiB0aGlzLmRyb3Bkb3duID8gKHRoaXMuZXJyb3IgPSB0cnVlKSA6IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJPcHRpb25GaWx0ZXIoKTtcbiAgICAgIGxldCBhY3R1YWxGaWx0ZXIgPSB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA+IDAgPyBbLi4udGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9uc10gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmZpbHRlckRhdGEoYWN0dWFsRmlsdGVyKTtcbiAgICAgIHRoaXMuZHJvcGRvd24uY2xvc2VQYW5lbCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBtdWx0aVNlbGVjdE9wdGlvbkZpbHRlcihvcHRpb25GaWx0ZXI6IHN0cmluZykge1xuICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuLmZvckVhY2goKHJlY29yZCkgPT4ge1xuICAgICAgaWYgKHJlY29yZC5vcHRpb24pIHtcbiAgICAgICAgcmVjb3JkLmhpZGRlbiA9ICEoXG4gICAgICAgICAgdGhpcy5nZXRPcHRpb25UZXh0KHJlY29yZC5vcHRpb24pXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgLnN0YXJ0c1dpdGgob3B0aW9uRmlsdGVyLnRvTG93ZXJDYXNlKCkpIHx8IHRoaXMuaXNTZWxlY3RlZChyZWNvcmQub3B0aW9uLCB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG11bHRpU2VsZWN0T3B0aW9uSXNIaWRkZW4ob3B0aW9uOiBzdHJpbmcgfCBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuLmZpbmQoKHJlY29yZCkgPT4gcmVjb3JkLm9wdGlvbiA9PT0gb3B0aW9uKS5oaWRkZW47XG4gIH1cblxuICBwdWJsaWMgbXVsdGlTZWxlY3RIYXNWaXNpYmxlT3B0aW9ucygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9uSXNIaWRkZW4uc29tZSgocmVjb3JkKSA9PiAhcmVjb3JkLmhpZGRlbik7XG4gIH1cblxuICBwcml2YXRlIGdldE9wdGlvblRleHQob3B0aW9uOiBzdHJpbmcgfCBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbiAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBvcHRpb24udG9TdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3B0ID0gb3B0aW9uIGFzIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb247XG4gICAgICByZXR1cm4gKG9wdC5sYWJlbC5sZW5ndGggPiAwID8gb3B0LmxhYmVsIDogb3B0LnZhbHVlKS50b1N0cmluZygpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBwdWJsaWMgbXVsdGlTZWxlY3RPcHRpb25GaWx0ZXJIYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMubXVsdGlTZWxlY3QpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLmRyb3Bkb3duLnBhbmVsT3BlbiAmJiBldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FU0MpIHtcbiAgICAgICAgLy8gZXNjYXBlID0gY2xlYXIgdGV4dCBib3ggYW5kIGNsb3NlXG4gICAgICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAgICAgdGhpcy5jbGVhck9wdGlvbkZpbHRlcigpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duLmNsb3NlUGFuZWwoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRU5URVIpIHtcbiAgICAgICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgICAgICB0aGlzLmZpbHRlck11bHRpU2VsZWN0KCk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAoZXZlbnQua2V5Q29kZSA+PSA2NSAmJiBldmVudC5rZXlDb2RlIDw9IDkwKSB8fFxuICAgICAgICAoZXZlbnQua2V5Q29kZSA+PSA5NiAmJiBldmVudC5rZXlDb2RlIDw9IDEwNSkgfHxcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPj0gNDggJiYgZXZlbnQua2V5Q29kZSA8PSA1NylcbiAgICAgICkge1xuICAgICAgICB0aGlzLm9wdGlvbkZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyT3B0aW9uRmlsdGVyKCkge1xuICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5vcHRpb25GaWx0ZXIubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5vcHRpb25GaWx0ZXIgPSAnJztcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuLmZvckVhY2goKHJlY29yZCkgPT4ge1xuICAgICAgICByZWNvcmQuaGlkZGVuID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhcnRSZXNpemUobW91c2VEb3duRXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBtb3VzZURvd25FdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG1pbmltdW1XaWR0aCA9IDYwICsgKHRoaXMuY29uZmlnLmZpbHRlcmFibGUgPyAzMCA6IDApICsgKHRoaXMuY29uZmlnLnNvcnRhYmxlID8gMzAgOiAwKTtcbiAgICBsZXQgc3RhcnRpbmdXaWR0aDogbnVtYmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgY29uc3QgbW91c2VNb3ZlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQod2luZG93LmRvY3VtZW50LCAnbW91c2Vtb3ZlJykuc3Vic2NyaWJlKChtaWRkbGVNb3VzZUV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBsZXQgZGlmZmVyZW5jZVdpZHRoOiBudW1iZXIgPSBtaWRkbGVNb3VzZUV2ZW50LmNsaWVudFggLSBtb3VzZURvd25FdmVudC5jbGllbnRYO1xuICAgICAgbGV0IHdpZHRoOiBudW1iZXIgPSBzdGFydGluZ1dpZHRoICsgZGlmZmVyZW5jZVdpZHRoO1xuICAgICAgaWYgKHdpZHRoIDwgbWluaW11bVdpZHRoKSB7XG4gICAgICAgIHdpZHRoID0gbWluaW11bVdpZHRoO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29sdW1uLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWluLXdpZHRoJywgYCR7dGhpcy5fY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF4LXdpZHRoJywgYCR7dGhpcy5fY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLl9jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLnJlc2l6ZWQubmV4dCh0aGlzLl9jb2x1bW4pO1xuICAgIH0pO1xuXG4gICAgbGV0IG1vdXNlVXBTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh3aW5kb3cuZG9jdW1lbnQsICdtb3VzZXVwJykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIG1vdXNlVXBTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIG1vdXNlTW92ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChtb3VzZU1vdmVTdWJzY3JpcHRpb24pO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKG1vdXNlVXBTdWJzY3JpcHRpb24pO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUN1c3RvbVJhbmdlKGV2ZW50OiBFdmVudCwgdmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5zaG93Q3VzdG9tUmFuZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuZHJvcGRvd24ub3BlblBhbmVsKCk7IC8vIEVuc3VyZXMgdGhhdCB0aGUgcGFuZWwgY29ycmVjdGx5IHVwZGF0ZXMgdG8gdGhlIGR5bmFtaWMgc2l6ZSBvZiB0aGUgZHJvcGRvd25cbiAgfVxuXG4gIHB1YmxpYyBmb2N1c0lucHV0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpbHRlcklucHV0ICYmIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSwgMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0ICYmIHRoaXMuZHJvcGRvd24pIHtcbiAgICAgIHRoaXMuZHJvcGRvd24ub25LZXlEb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMubXVsdGlTZWxlY3RPcHRpb25GaWx0ZXJIYW5kbGVLZXlkb3duKGV2ZW50KTtcbiAgICAgIH07XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub3B0aW9uRmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpLCAwKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNvcnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhbmdlVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2hhbmdlVGltZW91dCk7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmdldE5leHRTb3J0RGlyZWN0aW9uKHRoaXMuZGlyZWN0aW9uKTtcbiAgICAgIHRoaXMuX3NvcnQuc29ydCh0aGlzLmlkLCB0aGlzLmRpcmVjdGlvbiwgdGhpcy5jb25maWcudHJhbnNmb3Jtcy5zb3J0KTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJEYXRhKGZpbHRlcj86IGFueSk6IHZvaWQge1xuICAgIGxldCBhY3R1YWxGaWx0ZXIgPSBOb3ZvRGF0YVRhYmxlRmlsdGVyVXRpbHMuY29uc3RydWN0RmlsdGVyKGZpbHRlciwgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUsIHRoaXMubXVsdGlTZWxlY3QpO1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUgPT09ICdkYXRlJyAmJiBmaWx0ZXIgPyBmaWx0ZXIgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAodGhpcy5jaGFuZ2VUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5jaGFuZ2VUaW1lb3V0KTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChhY3R1YWxGaWx0ZXIgPT09ICcnKSB7XG4gICAgICAgIGFjdHVhbEZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NvcnQuZmlsdGVyKFxuICAgICAgICB0aGlzLmlkLFxuICAgICAgICB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSxcbiAgICAgICAgYWN0dWFsRmlsdGVyLFxuICAgICAgICB0aGlzLmNvbmZpZy50cmFuc2Zvcm1zLmZpbHRlcixcbiAgICAgICAgdGhpcy5hbGxvd011bHRpcGxlRmlsdGVycyxcbiAgICAgICAgc2VsZWN0ZWRPcHRpb24sXG4gICAgICApO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAzMDApO1xuICB9XG5cbiAgcHVibGljIGNsZWFyRmlsdGVyKCk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICB0aGlzLmFjdGl2ZURhdGVGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWx0ZXJEYXRhKHVuZGVmaW5lZCk7XG4gICAgdGhpcy5jbGVhck9wdGlvbkZpbHRlcigpO1xuICAgIHRoaXMuZHJvcGRvd24uY2xvc2VQYW5lbCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXh0U29ydERpcmVjdGlvbihkaXJlY3Rpb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgIHJldHVybiAnYXNjJztcbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2FzYycpIHtcbiAgICAgIHJldHVybiAnZGVzYyc7XG4gICAgfVxuICAgIHJldHVybiAnYXNjJztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmYXVsdERhdGVGaWx0ZXJPcHRpb25zKCk6IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb25bXSB7XG4gICAgbGV0IG9wdHM6IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb25bXSA9IFtcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QxRGF5LCBtaW46IC0xLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3Q3RGF5cywgbWluOiAtNywgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MzBEYXlzLCBtaW46IC0zMCwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0OTBEYXlzLCBtaW46IC05MCwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MVllYXIsIG1pbjogLTM2NiwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MURheSwgbWluOiAwLCBtYXg6IDEgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQ3RGF5cywgbWluOiAwLCBtYXg6IDcgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQzMERheXMsIG1pbjogMCwgbWF4OiAzMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDkwRGF5cywgbWluOiAwLCBtYXg6IDkwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MVllYXIsIG1pbjogMCwgbWF4OiAzNjYgfSxcbiAgICBdO1xuICAgIHJldHVybiBvcHRzO1xuICB9XG59XG4iXX0=