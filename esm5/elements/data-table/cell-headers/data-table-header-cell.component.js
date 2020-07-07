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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFDTCxRQUFRLEVBR1IsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBQ1QsWUFBWSxFQUVaLFdBQVcsRUFDWCxXQUFXLEVBQ1gsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQVkvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUU3RDtJQTBPRSxpQ0FDVSxpQkFBb0MsRUFDckMsTUFBd0IsRUFDdkIsS0FBd0IsRUFDeEIsUUFBbUIsRUFDbkIsVUFBc0IsRUFDWCxLQUFpQyxFQUNqQyxhQUEyQjtRQVBoRCxpQkFVQztRQVRTLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFD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QTRDOzs7OztJQUM1QyxnREFBMkI7O0lBRTNCLHdDQUFxQjs7SUFDckIsdUNBQWlDOztJQUNqQyw0Q0FBeUI7O0lBQ3pCLHFDQUFrQjs7SUFDbEIseUNBQW1COztJQUNuQiw0Q0FBeUI7O0lBQ3pCLCtDQUFxQzs7SUFDckMsNkNBQW1DOztJQUNuQyxrREFBd0M7O0lBQ3hDLG1EQUFnQzs7SUFDaEMseUNBTUU7O0lBQ0YsOENBQW9DOztJQUNwQyx1REFBNkM7Ozs7O0lBQzdDLDhEQUFvSDs7SUFDcEgsK0NBQWlDOztJQUNqQyx3Q0FBOEI7Ozs7O0lBQzlCLGdEQUEyQzs7Ozs7SUFDM0MsMENBQXFDOzs7OztJQUduQyxvREFBNEM7O0lBQzVDLHlDQUErQjs7Ozs7SUFDL0Isd0NBQWdDOzs7OztJQUNoQywyQ0FBMkI7Ozs7O0lBQzNCLDZDQUE4Qjs7SUFDOUIsd0NBQW9EOztJQUNwRCxnREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBIb3N0QmluZGluZyxcbiAgVGVtcGxhdGVSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtDb2x1bW5EZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuXG5pbXBvcnQge1xuICBJRGF0YVRhYmxlU29ydEZpbHRlcixcbiAgSURhdGFUYWJsZUNoYW5nZUV2ZW50LFxuICBJRGF0YVRhYmxlQ29sdW1uLFxuICBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uLFxuICBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnLFxuICBJRGF0YVRhYmxlQ29sdW1uU29ydENvbmZpZyxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbmltcG9ydCB7IE5vdm9EYXRhVGFibGVTb3J0RmlsdGVyIH0gZnJvbSAnLi4vc29ydC1maWx0ZXIvc29ydC1maWx0ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5vdm9Ecm9wZG93bkVsZW1lbnQgfSBmcm9tICcuLi8uLi9kcm9wZG93bi9Ecm9wZG93bic7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFUYWJsZVN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVGaWx0ZXJVdGlscyB9IGZyb20gJy4uL3NlcnZpY2VzL2RhdGEtdGFibGUtZmlsdGVyLXV0aWxzJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25vdm8tZGF0YS10YWJsZS1jZWxsLWNvbmZpZ10nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpIGNsYXNzPVwiYmhpLXt7IGxhYmVsSWNvbiB9fSBsYWJlbC1pY29uXCIgKm5nSWY9XCJsYWJlbEljb25cIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtaGVhZGVyLWljb25cIj48L2k+XG4gICAgPGxhYmVsIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1sYWJlbFwiPnt7IGxhYmVsIH19PC9sYWJlbD5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICAqbmdJZj1cImNvbmZpZy5zb3J0YWJsZVwiXG4gICAgICAgIHRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgW3Rvb2x0aXBdPVwibGFiZWxzLnNvcnRcIlxuICAgICAgICB0aGVtZT1cImljb25cIlxuICAgICAgICBbaWNvbl09XCJpY29uXCJcbiAgICAgICAgKGNsaWNrKT1cInNvcnQoKVwiXG4gICAgICAgIFtjbGFzcy5hY3RpdmVdPVwic29ydEFjdGl2ZVwiXG4gICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1zb3J0XCJcbiAgICAgICAgW2F0dHIuZGF0YS1mZWF0dXJlLWlkXT1cIidub3ZvLWRhdGEtdGFibGUtc29ydC0nICsgdGhpcy5pZFwiXG4gICAgICA+PC9idXR0b24+XG4gICAgICA8bm92by1kcm9wZG93blxuICAgICAgICAqbmdJZj1cImNvbmZpZy5maWx0ZXJhYmxlXCJcbiAgICAgICAgc2lkZT1cInJpZ2h0XCJcbiAgICAgICAgcGFyZW50U2Nyb2xsU2VsZWN0b3I9XCIubm92by1kYXRhLXRhYmxlLWNvbnRhaW5lclwiXG4gICAgICAgIGNvbnRhaW5lckNsYXNzPVwiZGF0YS10YWJsZS1kcm9wZG93blwiXG4gICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1maWx0ZXJcIlxuICAgICAgPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdGhlbWU9XCJpY29uXCJcbiAgICAgICAgICBpY29uPVwiZmlsdGVyXCJcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImZpbHRlckFjdGl2ZVwiXG4gICAgICAgICAgKGNsaWNrKT1cImZvY3VzSW5wdXQoKVwiXG4gICAgICAgICAgdG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgIFt0b29sdGlwXT1cImxhYmVscy5maWx0ZXJzXCJcbiAgICAgICAgICBbYXR0ci5kYXRhLWZlYXR1cmUtaWRdPVwiJ25vdm8tZGF0YS10YWJsZS1maWx0ZXItJyArIHRoaXMuaWRcIlxuICAgICAgICA+PC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8c3Bhbj57eyBsYWJlbHMuZmlsdGVycyB9fTwvc3Bhbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0aGVtZT1cImRpYWxvZ3VlXCJcbiAgICAgICAgICAgIGNvbG9yPVwibmVnYXRpdmVcIlxuICAgICAgICAgICAgaWNvbj1cInRpbWVzXCJcbiAgICAgICAgICAgIChjbGljayk9XCJjbGVhckZpbHRlcigpXCJcbiAgICAgICAgICAgICpuZ0lmPVwiZmlsdGVyICE9PSBudWxsICYmIGZpbHRlciAhPT0gdW5kZWZpbmVkICYmIGZpbHRlciAhPT0gJydcIlxuICAgICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWZpbHRlci1jbGVhclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgbGFiZWxzLmNsZWFyIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJjb25maWcuZmlsdGVyQ29uZmlnLnR5cGVcIj5cbiAgICAgICAgICA8bGlzdCAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUnXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXNob3dDdXN0b21SYW5nZVwiPlxuICAgICAgICAgICAgICA8aXRlbVxuICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiYWN0aXZlRGF0ZUZpbHRlciA9PT0gb3B0aW9uLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImZpbHRlckRhdGEob3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWRhdGEtdGFibGUtZmlsdGVyLScgKyBvcHRpb24ubGFiZWxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgb3B0aW9uLmxhYmVsIH19IDxpIGNsYXNzPVwiYmhpLWNoZWNrXCIgKm5nSWY9XCJhY3RpdmVEYXRlRmlsdGVyID09PSBvcHRpb24ubGFiZWxcIj48L2k+XG4gICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPGl0ZW1cbiAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJsYWJlbHMuY3VzdG9tRGF0ZVJhbmdlID09PSBhY3RpdmVEYXRlRmlsdGVyXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZUN1c3RvbVJhbmdlKCRldmVudCwgdHJ1ZSlcIlxuICAgICAgICAgICAgICAqbmdJZj1cImNvbmZpZy5maWx0ZXJDb25maWcuYWxsb3dDdXN0b21SYW5nZSAmJiAhc2hvd0N1c3RvbVJhbmdlXCJcbiAgICAgICAgICAgICAgW2tlZXBPcGVuXT1cInRydWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBsYWJlbHMuY3VzdG9tRGF0ZVJhbmdlIH19IDxpIGNsYXNzPVwiYmhpLWNoZWNrXCIgKm5nSWY9XCJsYWJlbHMuY3VzdG9tRGF0ZVJhbmdlID09PSBhY3RpdmVEYXRlRmlsdGVyXCI+PC9pPlxuICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWNvbnRhaW5lclwiICpuZ0lmPVwic2hvd0N1c3RvbVJhbmdlXCI+XG4gICAgICAgICAgICAgIDxkaXYgKGNsaWNrKT1cInRvZ2dsZUN1c3RvbVJhbmdlKCRldmVudCwgZmFsc2UpXCI+PGkgY2xhc3M9XCJiaGktcHJldmlvdXNcIj48L2k+e3sgbGFiZWxzLmJhY2tUb1ByZXNldEZpbHRlcnMgfX08L2Rpdj5cbiAgICAgICAgICAgICAgPG5vdm8tZGF0ZS1waWNrZXIgKG9uU2VsZWN0KT1cImZpbHRlckRhdGEoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwiZmlsdGVyXCIgcmFuZ2U9XCJ0cnVlXCI+PC9ub3ZvLWRhdGUtcGlja2VyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saXN0PlxuICAgICAgICAgIDxsaXN0ICpuZ1N3aXRjaENhc2U9XCInc2VsZWN0J1wiPlxuICAgICAgICAgICAgPGl0ZW1cbiAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJmaWx0ZXIgPT09IG9wdGlvblwiXG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImZpbHRlckRhdGEob3B0aW9uKVwiXG4gICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1kYXRhLXRhYmxlLWZpbHRlci0nICsgKG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPnt7IG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uIH19PC9zcGFuPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jaGVja1wiICpuZ0lmPVwib3B0aW9uLmhhc093blByb3BlcnR5KCd2YWx1ZScpID8gZmlsdGVyID09PSBvcHRpb24udmFsdWUgOiBmaWx0ZXIgPT09IG9wdGlvblwiPjwvaT5cbiAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgPGxpc3QgKm5nU3dpdGNoQ2FzZT1cIidtdWx0aS1zZWxlY3QnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbGlzdC1maWx0ZXJcIiAoa2V5ZG93bik9XCJtdWx0aVNlbGVjdE9wdGlvbkZpbHRlckhhbmRsZUtleWRvd24oJGV2ZW50KVwiPlxuICAgICAgICAgICAgICA8aXRlbSBjbGFzcz1cImZpbHRlci1zZWFyY2hcIiBrZWVwT3Blbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwib3B0aW9uRmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm11bHRpU2VsZWN0T3B0aW9uRmlsdGVyKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgI29wdGlvbkZpbHRlcklucHV0XG4gICAgICAgICAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtbXVsdGktc2VsZWN0LW9wdGlvbi1maWx0ZXItaW5wdXRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktc2VhcmNoXCI+PC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiIFtoaWRkZW5dPVwiIWVycm9yIHx8ICFtdWx0aVNlbGVjdEhhc1Zpc2libGVPcHRpb25zKClcIj57eyBsYWJlbHMuc2VsZWN0RmlsdGVyT3B0aW9ucyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbGlzdC1vcHRpb25zXCI+XG4gICAgICAgICAgICAgIDxpdGVtXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgIFtoaWRkZW5dPVwibXVsdGlTZWxlY3RPcHRpb25Jc0hpZGRlbihvcHRpb24pXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlU2VsZWN0aW9uKG9wdGlvbilcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1kYXRhLXRhYmxlLWZpbHRlci0nICsgKG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgW2tlZXBPcGVuXT1cInRydWVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgb3B0aW9uPy5sYWJlbCB8fCBvcHRpb24gfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5iaGktY2hlY2tib3gtZW1wdHldPVwiIWlzU2VsZWN0ZWQob3B0aW9uLCBtdWx0aVNlbGVjdGVkT3B0aW9ucylcIlxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmJoaS1jaGVja2JveC1maWxsZWRdPVwiaXNTZWxlY3RlZChvcHRpb24sIG11bHRpU2VsZWN0ZWRPcHRpb25zKVwiXG4gICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImZpbHRlci1udWxsLXJlc3VsdHNcIiBbaGlkZGVuXT1cIm11bHRpU2VsZWN0SGFzVmlzaWJsZU9wdGlvbnMoKVwiPnt7IGxhYmVscy5waWNrZXJFbXB0eSB9fTwvcD5cbiAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgPGxpc3QgKm5nU3dpdGNoQ2FzZT1cIidjdXN0b20nXCI+XG4gICAgICAgICAgICA8aXRlbSBjbGFzcz1cImZpbHRlci1zZWFyY2hcIiBrZWVwT3Blbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZpbHRlclRlbXBsYXRlOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29uZmlnIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgPGxpc3QgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiZmlsdGVyLXNlYXJjaFwiIGtlZXBPcGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBbdHlwZV09XCJjb25maWcuZmlsdGVyQ29uZmlnLnR5cGVcIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmlsdGVyXCJcbiAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJmaWx0ZXJEYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAgICNmaWx0ZXJJbnB1dFxuICAgICAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1maWx0ZXItaW5wdXRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIiAqbmdJZj1cIm11bHRpU2VsZWN0XCI+XG4gICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImRpYWxvZ3VlXCIgY29sb3I9XCJkYXJrXCIgKGNsaWNrKT1cImNhbmNlbCgpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLW11bHRpLXNlbGVjdC1jYW5jZWxcIj5cbiAgICAgICAgICAgIHt7IGxhYmVscy5jYW5jZWwgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiBjb2xvcj1cInBvc2l0aXZlXCIgKGNsaWNrKT1cImZpbHRlck11bHRpU2VsZWN0KClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtbXVsdGktc2VsZWN0LWZpbHRlclwiPlxuICAgICAgICAgICAge3sgbGFiZWxzLmZpbHRlcnMgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25vdm8tZHJvcGRvd24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNwYWNlclwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkYXRhLXRhYmxlLWhlYWRlci1yZXNpemFibGVcIiAqbmdJZj1cImNvbmZpZy5yZXNpemFibGVcIj48c3BhbiAobW91c2Vkb3duKT1cInN0YXJ0UmVzaXplKCRldmVudClcIj4mbmJzcDs8L3NwYW4+PC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlQ2VsbEhlYWRlcjxUPiBpbXBsZW1lbnRzIElEYXRhVGFibGVTb3J0RmlsdGVyLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2ZpbHRlcklucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIGZpbHRlcklucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKE5vdm9Ecm9wZG93bkVsZW1lbnQsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBkcm9wZG93bjogTm92b0Ryb3Bkb3duRWxlbWVudDtcbiAgQFZpZXdDaGlsZCgnb3B0aW9uRmlsdGVySW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgb3B0aW9uRmlsdGVySW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KClcbiAgZGVmYXVsdFNvcnQ6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9O1xuXG4gIEBJbnB1dCgpXG4gIGFsbG93TXVsdGlwbGVGaWx0ZXJzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgcmVzaXplZDogRXZlbnRFbWl0dGVyPElEYXRhVGFibGVDb2x1bW48VD4+O1xuICBASW5wdXQoKVxuICBmaWx0ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5yZXNpemFibGUnKVxuICBwdWJsaWMgcmVzaXphYmxlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgnbm92by1kYXRhLXRhYmxlLWNlbGwtY29uZmlnJylcbiAgc2V0IGNvbHVtbihjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pIHtcbiAgICB0aGlzLl9jb2x1bW4gPSBjb2x1bW47XG4gICAgdGhpcy5sYWJlbCA9IGNvbHVtbi50eXBlID09PSAnYWN0aW9uJyA/ICcnIDogY29sdW1uLmxhYmVsO1xuICAgIHRoaXMubGFiZWxJY29uID0gY29sdW1uLmxhYmVsSWNvbjtcblxuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgc29ydGFibGU6ICEhY29sdW1uLnNvcnRhYmxlLFxuICAgICAgZmlsdGVyYWJsZTogISFjb2x1bW4uZmlsdGVyYWJsZSxcbiAgICAgIHJlc2l6YWJsZTogISFjb2x1bW4ucmVzaXphYmxlLFxuICAgIH07XG4gICAgdGhpcy5yZXNpemFibGUgPSB0aGlzLmNvbmZpZy5yZXNpemFibGU7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm1zOiB7IGZpbHRlcj86IEZ1bmN0aW9uOyBzb3J0PzogRnVuY3Rpb24gfSA9IHt9O1xuXG4gICAgaWYgKGNvbHVtbi5maWx0ZXJhYmxlICYmIEhlbHBlcnMuaXNPYmplY3QoY29sdW1uLmZpbHRlcmFibGUpKSB7XG4gICAgICB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcgPSBjb2x1bW4uZmlsdGVyYWJsZSBhcyBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnO1xuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSkge1xuICAgICAgICB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcgPSB7IHR5cGU6ICd0ZXh0JyB9O1xuICAgICAgfVxuICAgICAgaWYgKChjb2x1bW4uZmlsdGVyYWJsZSBhcyBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnKS50cmFuc2Zvcm0pIHtcbiAgICAgICAgdHJhbnNmb3Jtcy5maWx0ZXIgPSAoY29sdW1uLmZpbHRlcmFibGUgYXMgSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZykudHJhbnNmb3JtO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcgPSB7IHR5cGU6ICd0ZXh0JyB9O1xuICAgIH1cblxuICAgIGlmIChjb2x1bW4uc29ydGFibGUgJiYgSGVscGVycy5pc09iamVjdChjb2x1bW4uc29ydGFibGUpKSB7XG4gICAgICBpZiAoKGNvbHVtbi5zb3J0YWJsZSBhcyBJRGF0YVRhYmxlQ29sdW1uU29ydENvbmZpZykudHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybXMuc29ydCA9IChjb2x1bW4uc29ydGFibGUgYXMgSURhdGFUYWJsZUNvbHVtblNvcnRDb25maWcpLnRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUgPT09ICdkYXRlJyAmJiAhdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zID0gdGhpcy5nZXREZWZhdWx0RGF0ZUZpbHRlck9wdGlvbnMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbmZpZy50cmFuc2Zvcm1zID0gdHJhbnNmb3JtcztcbiAgfVxuXG4gIHByaXZhdGUgX3JlcmVuZGVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgY2hhbmdlVGltZW91dDogYW55O1xuXG4gIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuICBwdWJsaWMgaWNvbjogc3RyaW5nID0gJ3NvcnRhYmxlJztcbiAgcHVibGljIGxhYmVsSWNvbjogc3RyaW5nO1xuICBwdWJsaWMgaWQ6IHN0cmluZztcbiAgcHVibGljIGZpbHRlcjogYW55O1xuICBwdWJsaWMgZGlyZWN0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyBmaWx0ZXJBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNvcnRBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNob3dDdXN0b21SYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgYWN0aXZlRGF0ZUZpbHRlcjogc3RyaW5nO1xuICBwdWJsaWMgY29uZmlnOiB7XG4gICAgc29ydGFibGU6IGJvb2xlYW47XG4gICAgZmlsdGVyYWJsZTogYm9vbGVhbjtcbiAgICByZXNpemFibGU6IGJvb2xlYW47XG4gICAgdHJhbnNmb3Jtcz86IHsgZmlsdGVyPzogRnVuY3Rpb247IHNvcnQ/OiBGdW5jdGlvbiB9O1xuICAgIGZpbHRlckNvbmZpZz86IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWc7XG4gIH07XG4gIHB1YmxpYyBtdWx0aVNlbGVjdDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgbXVsdGlTZWxlY3RlZE9wdGlvbnM6IEFycmF5PGFueT4gPSBbXTtcbiAgcHJpdmF0ZSBtdWx0aVNlbGVjdGVkT3B0aW9uSXNIaWRkZW46IEFycmF5PHsgb3B0aW9uOiBzdHJpbmcgfCBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uOyBoaWRkZW46IGJvb2xlYW4gfT4gPSBbXTtcbiAgcHVibGljIG9wdGlvbkZpbHRlcjogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBlcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgX2NvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RhdGU6IERhdGFUYWJsZVN0YXRlPFQ+LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIF9zb3J0OiBOb3ZvRGF0YVRhYmxlU29ydEZpbHRlcjxUPixcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgX2Nka0NvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLFxuICApIHtcbiAgICB0aGlzLl9yZXJlbmRlclN1YnNjcmlwdGlvbiA9IHN0YXRlLnVwZGF0ZXMuc3Vic2NyaWJlKChjaGFuZ2U6IElEYXRhVGFibGVDaGFuZ2VFdmVudCkgPT4gdGhpcy5jaGVja1NvcnRGaWx0ZXJTdGF0ZShjaGFuZ2UpKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY2RrQ29sdW1uRGVmKSB7XG4gICAgICB0aGlzLmlkID0gdGhpcy5fY2RrQ29sdW1uRGVmLm5hbWU7XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja1NvcnRGaWx0ZXJTdGF0ZSh7IGZpbHRlcjogdGhpcy5zdGF0ZS5maWx0ZXIsIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCB9LCB0cnVlKTtcblxuICAgIHRoaXMubXVsdGlTZWxlY3QgPSB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcgJiYgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUgPyB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSA9PT0gJ211bHRpLXNlbGVjdCcgOiBmYWxzZTtcbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuZmlsdGVyID8gWy4uLnRoaXMuZmlsdGVyXSA6IFtdO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlcmVuZGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goKHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uKSA9PiB7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjaGVja1NvcnRGaWx0ZXJTdGF0ZShzb3J0RmlsdGVyU3RhdGU6IElEYXRhVGFibGVDaGFuZ2VFdmVudCwgaW5pdGlhbENvbmZpZzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKHNvcnRGaWx0ZXJTdGF0ZS5zb3J0ICYmIHNvcnRGaWx0ZXJTdGF0ZS5zb3J0LmlkID09PSB0aGlzLmlkKSB7XG4gICAgICB0aGlzLmljb24gPSBgc29ydC0ke3NvcnRGaWx0ZXJTdGF0ZS5zb3J0LnZhbHVlfWA7XG4gICAgICB0aGlzLnNvcnRBY3RpdmUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmljb24gPSAnc29ydGFibGUnO1xuICAgICAgdGhpcy5zb3J0QWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgdGFibGVGaWx0ZXIgPSBIZWxwZXJzLmNvbnZlcnRUb0FycmF5KHNvcnRGaWx0ZXJTdGF0ZS5maWx0ZXIpO1xuICAgIGNvbnN0IHRoaXNGaWx0ZXIgPSB0YWJsZUZpbHRlci5maW5kKChmaWx0ZXIpID0+IGZpbHRlciAmJiBmaWx0ZXIuaWQgPT09IHRoaXMuaWQpO1xuXG4gICAgaWYgKHRoaXNGaWx0ZXIpIHtcbiAgICAgIHRoaXMuZmlsdGVyQWN0aXZlID0gdHJ1ZTtcbiAgICAgIGlmIChpbml0aWFsQ29uZmlnICYmIHRoaXNGaWx0ZXIudHlwZSA9PT0gJ2RhdGUnICYmIHRoaXNGaWx0ZXIuc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlRmlsdGVyID0gdGhpc0ZpbHRlci5zZWxlY3RlZE9wdGlvbi5sYWJlbCB8fCB0aGlzLmxhYmVscy5jdXN0b21EYXRlUmFuZ2U7XG4gICAgICB9XG4gICAgICB0aGlzLmZpbHRlciA9IHRoaXNGaWx0ZXIudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyQWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZUZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGVmYXVsdFNvcnQgJiYgdGhpcy5pZCA9PT0gdGhpcy5kZWZhdWx0U29ydC5pZCkge1xuICAgICAgdGhpcy5pY29uID0gYHNvcnQtJHt0aGlzLmRlZmF1bHRTb3J0LnZhbHVlfWA7XG4gICAgICB0aGlzLnNvcnRBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLm11bHRpU2VsZWN0ID0gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnICYmIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID8gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUgPT09ICdtdWx0aS1zZWxlY3QnIDogZmFsc2U7XG4gICAgaWYgKHRoaXMubXVsdGlTZWxlY3QpIHtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmZpbHRlciA/IFsuLi50aGlzLmZpbHRlcl0gOiBbXTtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuID0gKHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zIGFzIHN0cmluZ1tdKS5tYXAoXG4gICAgICAgICAgICAob3B0aW9uOiBzdHJpbmcpOiB7IG9wdGlvbjogc3RyaW5nOyBoaWRkZW46IGJvb2xlYW4gfSA9PiAoeyBvcHRpb24sIGhpZGRlbjogZmFsc2UgfSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbiA9ICh0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9ucyBhcyBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uW10pLm1hcChcbiAgICAgICAgICAgIChvcHRpb246IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb24pOiB7IG9wdGlvbjogSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbjsgaGlkZGVuOiBib29sZWFuIH0gPT4gKHtcbiAgICAgICAgICAgICAgb3B0aW9uLFxuICAgICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIGlzU2VsZWN0ZWQob3B0aW9uLCBvcHRpb25zTGlzdCkge1xuICAgIGlmIChvcHRpb25zTGlzdCkge1xuICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBvcHRpb24uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPyBvcHRpb24udmFsdWUgOiBvcHRpb247XG5cbiAgICAgIGNvbnN0IGZvdW5kID0gb3B0aW9uc0xpc3QuZmluZCgoaXRlbSkgPT4gdGhpcy5vcHRpb25QcmVzZW50Q2hlY2soaXRlbSwgb3B0aW9uVmFsdWUpKTtcbiAgICAgIHJldHVybiBmb3VuZCAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VsZWN0aW9uKG9wdGlvbikge1xuICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uLmhhc093blByb3BlcnR5KCd2YWx1ZScpID8gb3B0aW9uLnZhbHVlIDogb3B0aW9uO1xuXG4gICAgY29uc3Qgb3B0aW9uSW5kZXggPSB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zLmZpbmRJbmRleCgoaXRlbSkgPT4gdGhpcy5vcHRpb25QcmVzZW50Q2hlY2soaXRlbSwgb3B0aW9uVmFsdWUpKTtcbiAgICB0aGlzLmVycm9yID0gZmFsc2U7XG4gICAgaWYgKG9wdGlvbkluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMuc3BsaWNlKG9wdGlvbkluZGV4LCAxKTtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5vcHRpb25GaWx0ZXIgJiZcbiAgICAgICAgIXRoaXMuZ2V0T3B0aW9uVGV4dChvcHRpb24pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAuc3RhcnRzV2l0aCh0aGlzLm9wdGlvbkZpbHRlci50b0xvd2VyQ2FzZSgpKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuW3RoaXMubXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuLmZpbmRJbmRleCgocmVjb3JkKSA9PiByZWNvcmQub3B0aW9uID09PSBvcHRpb24pXS5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zLnB1c2gob3B0aW9uVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvcHRpb25QcmVzZW50Q2hlY2soaXRlbSwgb3B0aW9uVmFsdWUpOiBib29sZWFuIHtcbiAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgcmV0dXJuIGl0ZW0udmFsdWUgPT09IG9wdGlvblZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXRlbSA9PT0gb3B0aW9uVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zID0gdGhpcy5maWx0ZXIgPyBbLi4udGhpcy5maWx0ZXJdIDogW107XG4gICAgdGhpcy5kcm9wZG93bi5jbG9zZVBhbmVsKCk7XG4gICAgdGhpcy5jbGVhck9wdGlvbkZpbHRlcigpO1xuICB9XG5cbiAgcHVibGljIGZpbHRlck11bHRpU2VsZWN0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCAmJiAhdGhpcy5maWx0ZXIpIHtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RIYXNWaXNpYmxlT3B0aW9ucygpICYmIHRoaXMuZHJvcGRvd24gPyAodGhpcy5lcnJvciA9IHRydWUpIDogbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhck9wdGlvbkZpbHRlcigpO1xuICAgICAgY29uc3QgYWN0dWFsRmlsdGVyID0gdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwID8gWy4uLnRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnNdIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5maWx0ZXJEYXRhKGFjdHVhbEZpbHRlcik7XG4gICAgICB0aGlzLmRyb3Bkb3duLmNsb3NlUGFuZWwoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbXVsdGlTZWxlY3RPcHRpb25GaWx0ZXIob3B0aW9uRmlsdGVyOiBzdHJpbmcpIHtcbiAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbi5mb3JFYWNoKChyZWNvcmQpID0+IHtcbiAgICAgIGlmIChyZWNvcmQub3B0aW9uKSB7XG4gICAgICAgIHJlY29yZC5oaWRkZW4gPSAhKFxuICAgICAgICAgIHRoaXMuZ2V0T3B0aW9uVGV4dChyZWNvcmQub3B0aW9uKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5zdGFydHNXaXRoKG9wdGlvbkZpbHRlci50b0xvd2VyQ2FzZSgpKSB8fCB0aGlzLmlzU2VsZWN0ZWQocmVjb3JkLm9wdGlvbiwgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucylcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBtdWx0aVNlbGVjdE9wdGlvbklzSGlkZGVuKG9wdGlvbjogc3RyaW5nIHwgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbi5maW5kKChyZWNvcmQpID0+IHJlY29yZC5vcHRpb24gPT09IG9wdGlvbikuaGlkZGVuO1xuICB9XG5cbiAgcHVibGljIG11bHRpU2VsZWN0SGFzVmlzaWJsZU9wdGlvbnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuLnNvbWUoKHJlY29yZCkgPT4gIXJlY29yZC5oaWRkZW4pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcHRpb25UZXh0KG9wdGlvbjogc3RyaW5nIHwgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbik6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb24gIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gb3B0aW9uLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9wdCA9IG9wdGlvbiBhcyBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uO1xuICAgICAgcmV0dXJuIChvcHQubGFiZWwubGVuZ3RoID4gMCA/IG9wdC5sYWJlbCA6IG9wdC52YWx1ZSkudG9TdHJpbmcoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG11bHRpU2VsZWN0T3B0aW9uRmlsdGVySGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0KSB7XG4gICAgICB0aGlzLmVycm9yID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5kcm9wZG93bi5wYW5lbE9wZW4gJiYgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRVNDKSB7XG4gICAgICAgIC8vIGVzY2FwZSA9IGNsZWFyIHRleHQgYm94IGFuZCBjbG9zZVxuICAgICAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICAgIHRoaXMuY2xlYXJPcHRpb25GaWx0ZXIoKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5jbG9zZVBhbmVsKCk7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVOVEVSKSB7XG4gICAgICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAgICAgdGhpcy5maWx0ZXJNdWx0aVNlbGVjdCgpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPj0gNjUgJiYgZXZlbnQua2V5Q29kZSA8PSA5MCkgfHxcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPj0gOTYgJiYgZXZlbnQua2V5Q29kZSA8PSAxMDUpIHx8XG4gICAgICAgIChldmVudC5rZXlDb2RlID49IDQ4ICYmIGV2ZW50LmtleUNvZGUgPD0gNTcpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5vcHRpb25GaWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhck9wdGlvbkZpbHRlcigpIHtcbiAgICB0aGlzLmVycm9yID0gZmFsc2U7XG4gICAgaWYgKHRoaXMub3B0aW9uRmlsdGVyLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMub3B0aW9uRmlsdGVyID0gJyc7XG4gICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbi5mb3JFYWNoKChyZWNvcmQpID0+IHtcbiAgICAgICAgcmVjb3JkLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXJ0UmVzaXplKG1vdXNlRG93bkV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgbW91c2VEb3duRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBtaW5pbXVtV2lkdGggPSA2MCArICh0aGlzLmNvbmZpZy5maWx0ZXJhYmxlID8gMzAgOiAwKSArICh0aGlzLmNvbmZpZy5zb3J0YWJsZSA/IDMwIDogMCk7XG4gICAgY29uc3Qgc3RhcnRpbmdXaWR0aDogbnVtYmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgY29uc3QgbW91c2VNb3ZlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQod2luZG93LmRvY3VtZW50LCAnbW91c2Vtb3ZlJykuc3Vic2NyaWJlKChtaWRkbGVNb3VzZUV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBkaWZmZXJlbmNlV2lkdGg6IG51bWJlciA9IG1pZGRsZU1vdXNlRXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bkV2ZW50LmNsaWVudFg7XG4gICAgICBsZXQgd2lkdGg6IG51bWJlciA9IHN0YXJ0aW5nV2lkdGggKyBkaWZmZXJlbmNlV2lkdGg7XG4gICAgICBpZiAod2lkdGggPCBtaW5pbXVtV2lkdGgpIHtcbiAgICAgICAgd2lkdGggPSBtaW5pbXVtV2lkdGg7XG4gICAgICB9XG4gICAgICB0aGlzLl9jb2x1bW4ud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtaW4td2lkdGgnLCBgJHt0aGlzLl9jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXgtd2lkdGgnLCBgJHt0aGlzLl9jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuX2NvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMucmVzaXplZC5uZXh0KHRoaXMuX2NvbHVtbik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtb3VzZVVwU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQod2luZG93LmRvY3VtZW50LCAnbW91c2V1cCcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBtb3VzZVVwU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICBtb3VzZU1vdmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2gobW91c2VNb3ZlU3Vic2NyaXB0aW9uKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChtb3VzZVVwU3Vic2NyaXB0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVDdXN0b21SYW5nZShldmVudDogRXZlbnQsIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuc2hvd0N1c3RvbVJhbmdlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmRyb3Bkb3duLm9wZW5QYW5lbCgpOyAvLyBFbnN1cmVzIHRoYXQgdGhlIHBhbmVsIGNvcnJlY3RseSB1cGRhdGVzIHRvIHRoZSBkeW5hbWljIHNpemUgb2YgdGhlIGRyb3Bkb3duXG4gIH1cblxuICBwdWJsaWMgZm9jdXNJbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maWx0ZXJJbnB1dCAmJiB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCksIDApO1xuICAgIH1cbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCAmJiB0aGlzLmRyb3Bkb3duKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duLm9uS2V5RG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLm11bHRpU2VsZWN0T3B0aW9uRmlsdGVySGFuZGxlS2V5ZG93bihldmVudCk7XG4gICAgICB9O1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9wdGlvbkZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSwgMCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzb3J0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYW5nZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNoYW5nZVRpbWVvdXQpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5nZXROZXh0U29ydERpcmVjdGlvbih0aGlzLmRpcmVjdGlvbik7XG4gICAgICB0aGlzLl9zb3J0LnNvcnQodGhpcy5pZCwgdGhpcy5kaXJlY3Rpb24sIHRoaXMuY29uZmlnLnRyYW5zZm9ybXMuc29ydCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyRGF0YShmaWx0ZXI/OiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgYWN0dWFsRmlsdGVyID0gTm92b0RhdGFUYWJsZUZpbHRlclV0aWxzLmNvbnN0cnVjdEZpbHRlcihmaWx0ZXIsIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlLCB0aGlzLm11bHRpU2VsZWN0KTtcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID09PSAnZGF0ZScgJiYgZmlsdGVyID8gZmlsdGVyIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKHRoaXMuY2hhbmdlVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2hhbmdlVGltZW91dCk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoYWN0dWFsRmlsdGVyID09PSAnJykge1xuICAgICAgICBhY3R1YWxGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9zb3J0LmZpbHRlcihcbiAgICAgICAgdGhpcy5pZCxcbiAgICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUsXG4gICAgICAgIGFjdHVhbEZpbHRlcixcbiAgICAgICAgdGhpcy5jb25maWcudHJhbnNmb3Jtcy5maWx0ZXIsXG4gICAgICAgIHRoaXMuYWxsb3dNdWx0aXBsZUZpbHRlcnMsXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uLFxuICAgICAgKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgdGhpcy5hY3RpdmVEYXRlRmlsdGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZmlsdGVyRGF0YSh1bmRlZmluZWQpO1xuICAgIHRoaXMuY2xlYXJPcHRpb25GaWx0ZXIoKTtcbiAgICB0aGlzLmRyb3Bkb3duLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV4dFNvcnREaXJlY3Rpb24oZGlyZWN0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm4gJ2FzYyc7XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdhc2MnKSB7XG4gICAgICByZXR1cm4gJ2Rlc2MnO1xuICAgIH1cbiAgICByZXR1cm4gJ2FzYyc7XG4gIH1cblxuICBwcml2YXRlIGdldERlZmF1bHREYXRlRmlsdGVyT3B0aW9ucygpOiBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uW10ge1xuICAgIGNvbnN0IG9wdHM6IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb25bXSA9IFtcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QxRGF5LCBtaW46IC0xLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3Q3RGF5cywgbWluOiAtNywgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MzBEYXlzLCBtaW46IC0zMCwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0OTBEYXlzLCBtaW46IC05MCwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MVllYXIsIG1pbjogLTM2NiwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MURheSwgbWluOiAwLCBtYXg6IDEgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQ3RGF5cywgbWluOiAwLCBtYXg6IDcgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQzMERheXMsIG1pbjogMCwgbWF4OiAzMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDkwRGF5cywgbWluOiAwLCBtYXg6IDkwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MVllYXIsIG1pbjogMCwgbWF4OiAzNjYgfSxcbiAgICBdO1xuICAgIHJldHVybiBvcHRzO1xuICB9XG59XG4iXX0=