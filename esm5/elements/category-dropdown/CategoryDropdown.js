/**
 * @fileoverview added by tsickle
 * Generated from: elements/category-dropdown/CategoryDropdown.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
// APP
import { OutsideClick } from '../../utils/outside-click/OutsideClick';
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
var NovoCategoryDropdownElement = /** @class */ (function (_super) {
    tslib_1.__extends(NovoCategoryDropdownElement, _super);
    function NovoCategoryDropdownElement(element, labels) {
        var _this = _super.call(this, element) || this;
        _this.labels = labels;
        _this._query = '';
        _this._categoryMap = {};
        _this._categories = [];
        // Boolean to keep the selection persist when closing the dropdown
        _this.persistSelection = false;
        // Boolean to close the dropdown on selection
        _this.closeOnSelect = false;
        // Event that is emitted whenever an item is selected
        _this._select = new EventEmitter();
        // Event that is emitted whenever a category is selected
        _this.categorySelected = new EventEmitter();
        _this.clickHandler = _this.toggleActive.bind(_this);
        return _this;
    }
    Object.defineProperty(NovoCategoryDropdownElement.prototype, "categories", {
        set: /**
         * @param {?} categories
         * @return {?}
         */
        function (categories) {
            this._masterCategoryMap = Object.assign({}, categories);
            this._categoryMap = Object.assign({}, categories);
            this._categories = Object.keys(categories);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoCategoryDropdownElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var button = this.element.nativeElement.querySelector('button');
        button.addEventListener('click', this.clickHandler);
    };
    /**
     * @return {?}
     */
    NovoCategoryDropdownElement.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var button = this.element.nativeElement.querySelector('button');
        if (button) {
            button.removeEventListener('click', this.clickHandler);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoCategoryDropdownElement.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.active && (event.keyCode === KeyCodes.ESC || event.keyCode === KeyCodes.ENTER)) {
            this.toggleActive();
        }
    };
    /**
     * @return {?}
     */
    NovoCategoryDropdownElement.prototype.clearSelection = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._categories.forEach((/**
         * @param {?} category
         * @return {?}
         */
        function (category) {
            _this._categoryMap[category].forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                item.selected = false;
            }));
        }));
    };
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    NovoCategoryDropdownElement.prototype.select = /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    function (event, item) {
        Helpers.swallowEvent(event);
        // If we persist the selection, clear and show a check
        if (this.persistSelection) {
            this.clearSelection();
            item.selected = true;
        }
        // Emit the item
        this._select.emit(item);
        // Close, if input is set
        if (this.closeOnSelect) {
            this.toggleActive();
        }
    };
    /**
     * @param {?} category
     * @return {?}
     */
    NovoCategoryDropdownElement.prototype.onCategorySelected = /**
     * @param {?} category
     * @return {?}
     */
    function (category) {
        this.categorySelected.emit(category);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoCategoryDropdownElement.prototype.clearQuery = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        Helpers.swallowEvent(event);
        this._query = '';
        // Reset the categories
        this._categories.forEach((/**
         * @param {?} category
         * @return {?}
         */
        function (category) {
            _this._categoryMap[category] = _this._masterCategoryMap[category];
        }));
    };
    /**
     * @param {?} query
     * @return {?}
     */
    NovoCategoryDropdownElement.prototype.queryCategories = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        var _this = this;
        // Save the query
        this._query = query;
        // Check timeout
        if (this._queryTimeout) {
            clearTimeout(this._queryTimeout);
        }
        // Store a timeout, to debounce user input
        this._queryTimeout = setTimeout((/**
         * @return {?}
         */
        function () {
            _this._categories.forEach((/**
             * @param {?} category
             * @return {?}
             */
            function (category) {
                if (_this.search.compare) {
                    _this._categoryMap[category] = _this._masterCategoryMap[category].filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return _this.search.compare(query, item); }));
                }
                else {
                    _this._categoryMap[category] = _this._masterCategoryMap[category].filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return ~item.label.toLowerCase().indexOf(query.toLowerCase()); }));
                }
            }));
        }), this.search.debounce || 300);
    };
    /**
     * @param {?} event
     * @param {?} link
     * @return {?}
     */
    NovoCategoryDropdownElement.prototype.executeClickCallback = /**
     * @param {?} event
     * @param {?} link
     * @return {?}
     */
    function (event, link) {
        link.callback(event);
        // Close, if input is set
        if (this.closeOnSelect) {
            this.toggleActive();
        }
    };
    NovoCategoryDropdownElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-category-dropdown',
                    template: "\n        <ng-content select=\"button\"></ng-content>\n        <div class=\"dropdown-container\" *ngIf=\"active\">\n            <div class=\"novo-category-dropdown-search\" *ngIf=\"search\" data-automation-id=\"novo-category-dropdown-search\">\n                <input type=\"text\" [placeholder]=\"search.placeholder || labels.search\" [value]=\"_query\" (input)=\"queryCategories($event.target.value)\"/>\n                <i class=\"bhi-search\" *ngIf=\"!_query\"></i>\n                <i class=\"bhi-times\" *ngIf=\"_query\" (click)=\"clearQuery($event)\"></i>\n            </div>\n            <novo-nav theme=\"white\" [outlet]=\"novoCategoryDropdownOutlet\" direction=\"vertical\">\n                <novo-tab *ngFor=\"let category of _categories\" [attr.data-automation-id]=\"category\" (activeChange)=\"onCategorySelected(category)\">\n                    <span>{{ category }} ({{ _categoryMap[category].length }})</span>\n                </novo-tab>\n            </novo-nav>\n            <novo-nav-outlet #novoCategoryDropdownOutlet>\n                <novo-nav-content *ngFor=\"let category of _categories\">\n                    <novo-list direction=\"vertical\">\n                        <novo-list-item *ngFor=\"let item of _categoryMap[category]\" (click)=\"select($event, item)\" [attr.data-automation-id]=\"item.label\">\n                            <item-content>{{ item.label }}</item-content>\n                            <item-end class=\"novo-category-dropdown-hover\" *ngIf=\"item.hoverText && !item.selected\">{{ item.hoverText }}</item-end>\n                            <item-end class=\"novo-category-dropdown-hover\" *ngIf=\"item.hoverIcon && !item.selected\"><i class=\"bhi-{{ item.hoverIcon }}\"></i></item-end>\n                            <item-end *ngIf=\"item.selected\"><i class=\"bhi-check\"></i></item-end>\n                        </novo-list-item>\n                        <novo-list-item *ngIf=\"_categoryMap[category].length === 0 && search\" class=\"novo-category-dropdown-empty-item\">\n                            <item-content>{{ search.emptyMessage || labels.noItems }}</item-content>\n                        </novo-list-item>\n                    </novo-list>\n                </novo-nav-content>\n            </novo-nav-outlet>\n            <footer *ngIf=\"footer\" class=\"novo-category-dropdown-footer-align-{{ footer.align || 'right' }}\">\n                <a *ngFor=\"let link of footer.links\" (click)=\"executeClickCallback($event, link)\">{{ link.label }}</a>\n            </footer>\n        </div>\n    ",
                    host: {
                        '(keydown)': 'onKeyDown($event)',
                        '[class.active]': 'active',
                    }
                }] }
    ];
    /** @nocollapse */
    NovoCategoryDropdownElement.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NovoLabelService }
    ]; };
    NovoCategoryDropdownElement.propDecorators = {
        persistSelection: [{ type: Input }],
        closeOnSelect: [{ type: Input }],
        search: [{ type: Input }],
        footer: [{ type: Input }],
        _select: [{ type: Output, args: ['itemSelected',] }],
        categorySelected: [{ type: Output }],
        categories: [{ type: Input }]
    };
    return NovoCategoryDropdownElement;
}(OutsideClick));
export { NovoCategoryDropdownElement };
if (false) {
    /** @type {?} */
    NovoCategoryDropdownElement.prototype._query;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype._categoryMap;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype._categories;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype.clickHandler;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype._masterCategoryMap;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype._queryTimeout;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype.persistSelection;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype.closeOnSelect;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype.search;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype.footer;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype._select;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype.categorySelected;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlEcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYXRlZ29yeS1kcm9wZG93bi9DYXRlZ29yeURyb3Bkb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBcUIsTUFBTSxlQUFlLENBQUM7O0FBRXRHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXJFO0lBd0NpRCx1REFBWTtJQTJDM0QscUNBQVksT0FBbUIsRUFBUyxNQUF3QjtRQUFoRSxZQUNFLGtCQUFNLE9BQU8sQ0FBQyxTQUVmO1FBSHVDLFlBQU0sR0FBTixNQUFNLENBQWtCO1FBMUNoRSxZQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGtCQUFZLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLGlCQUFXLEdBQWEsRUFBRSxDQUFDOztRQU0zQixzQkFBZ0IsR0FBWSxLQUFLLENBQUM7O1FBR2xDLG1CQUFhLEdBQVksS0FBSyxDQUFDOztRQW1CL0IsYUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOztRQUdoRCxzQkFBZ0IsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQVc1RCxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUNuRCxDQUFDO0lBVkQsc0JBQ0ksbURBQVU7Ozs7O1FBRGQsVUFDZSxVQUFlO1lBQzVCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFN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QUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7Z0JBektGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsNC9FQWdDUDtvQkFDSCxJQUFJLEVBQUU7d0JBQ0osV0FBVyxFQUFFLG1CQUFtQjt3QkFDaEMsZ0JBQWdCLEVBQUUsUUFBUTtxQkFDM0I7aUJBQ0Y7Ozs7Z0JBOUNtQixVQUFVO2dCQUtyQixnQkFBZ0I7OzttQ0FrRHRCLEtBQUs7Z0NBR0wsS0FBSzt5QkFTTCxLQUFLO3lCQU9MLEtBQUs7MEJBR0wsTUFBTSxTQUFDLGNBQWM7bUNBR3JCLE1BQU07NkJBR04sS0FBSzs7SUE4RlIsa0NBQUM7Q0FBQSxBQTFLRCxDQXdDaUQsWUFBWSxHQWtJNUQ7U0FsSVksMkJBQTJCOzs7SUFDdEMsNkNBQW9COztJQUNwQixtREFBdUI7O0lBQ3ZCLGtEQUEyQjs7SUFDM0IsbURBQXVCOztJQUN2Qix5REFBd0I7O0lBQ3hCLG9EQUFtQjs7SUFFbkIsdURBQ2tDOztJQUVsQyxvREFDK0I7O0lBUS9CLDZDQUNZOztJQU1aLDZDQUNZOztJQUVaLDhDQUNnRDs7SUFFaEQsdURBQzhEOztJQVM3Qiw2Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBPdXRzaWRlQ2xpY2sgfSBmcm9tICcuLi8uLi91dGlscy9vdXRzaWRlLWNsaWNrL091dHNpZGVDbGljayc7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gJy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYXRlZ29yeS1kcm9wZG93bicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJ1dHRvblwiPjwvbmctY29udGVudD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRhaW5lclwiICpuZ0lmPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jYXRlZ29yeS1kcm9wZG93bi1zZWFyY2hcIiAqbmdJZj1cInNlYXJjaFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tY2F0ZWdvcnktZHJvcGRvd24tc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3BsYWNlaG9sZGVyXT1cInNlYXJjaC5wbGFjZWhvbGRlciB8fCBsYWJlbHMuc2VhcmNoXCIgW3ZhbHVlXT1cIl9xdWVyeVwiIChpbnB1dCk9XCJxdWVyeUNhdGVnb3JpZXMoJGV2ZW50LnRhcmdldC52YWx1ZSlcIi8+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktc2VhcmNoXCIgKm5nSWY9XCIhX3F1ZXJ5XCI+PC9pPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXRpbWVzXCIgKm5nSWY9XCJfcXVlcnlcIiAoY2xpY2spPVwiY2xlYXJRdWVyeSgkZXZlbnQpXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bm92by1uYXYgdGhlbWU9XCJ3aGl0ZVwiIFtvdXRsZXRdPVwibm92b0NhdGVnb3J5RHJvcGRvd25PdXRsZXRcIiBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxub3ZvLXRhYiAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgX2NhdGVnb3JpZXNcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2F0ZWdvcnlcIiAoYWN0aXZlQ2hhbmdlKT1cIm9uQ2F0ZWdvcnlTZWxlY3RlZChjYXRlZ29yeSlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgY2F0ZWdvcnkgfX0gKHt7IF9jYXRlZ29yeU1hcFtjYXRlZ29yeV0ubGVuZ3RoIH19KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L25vdm8tdGFiPlxuICAgICAgICAgICAgPC9ub3ZvLW5hdj5cbiAgICAgICAgICAgIDxub3ZvLW5hdi1vdXRsZXQgI25vdm9DYXRlZ29yeURyb3Bkb3duT3V0bGV0PlxuICAgICAgICAgICAgICAgIDxub3ZvLW5hdi1jb250ZW50ICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBfY2F0ZWdvcmllc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bm92by1saXN0IGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bm92by1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2YgX2NhdGVnb3J5TWFwW2NhdGVnb3J5XVwiIChjbGljayk9XCJzZWxlY3QoJGV2ZW50LCBpdGVtKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJpdGVtLmxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD57eyBpdGVtLmxhYmVsIH19PC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0tZW5kIGNsYXNzPVwibm92by1jYXRlZ29yeS1kcm9wZG93bi1ob3ZlclwiICpuZ0lmPVwiaXRlbS5ob3ZlclRleHQgJiYgIWl0ZW0uc2VsZWN0ZWRcIj57eyBpdGVtLmhvdmVyVGV4dCB9fTwvaXRlbS1lbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0tZW5kIGNsYXNzPVwibm92by1jYXRlZ29yeS1kcm9wZG93bi1ob3ZlclwiICpuZ0lmPVwiaXRlbS5ob3Zlckljb24gJiYgIWl0ZW0uc2VsZWN0ZWRcIj48aSBjbGFzcz1cImJoaS17eyBpdGVtLmhvdmVySWNvbiB9fVwiPjwvaT48L2l0ZW0tZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLWVuZCAqbmdJZj1cIml0ZW0uc2VsZWN0ZWRcIj48aSBjbGFzcz1cImJoaS1jaGVja1wiPjwvaT48L2l0ZW0tZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbSAqbmdJZj1cIl9jYXRlZ29yeU1hcFtjYXRlZ29yeV0ubGVuZ3RoID09PSAwICYmIHNlYXJjaFwiIGNsYXNzPVwibm92by1jYXRlZ29yeS1kcm9wZG93bi1lbXB0eS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD57eyBzZWFyY2guZW1wdHlNZXNzYWdlIHx8IGxhYmVscy5ub0l0ZW1zIH19PC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L25vdm8tbGlzdD5cbiAgICAgICAgICAgICAgICA8L25vdm8tbmF2LWNvbnRlbnQ+XG4gICAgICAgICAgICA8L25vdm8tbmF2LW91dGxldD5cbiAgICAgICAgICAgIDxmb290ZXIgKm5nSWY9XCJmb290ZXJcIiBjbGFzcz1cIm5vdm8tY2F0ZWdvcnktZHJvcGRvd24tZm9vdGVyLWFsaWduLXt7IGZvb3Rlci5hbGlnbiB8fCAncmlnaHQnIH19XCI+XG4gICAgICAgICAgICAgICAgPGEgKm5nRm9yPVwibGV0IGxpbmsgb2YgZm9vdGVyLmxpbmtzXCIgKGNsaWNrKT1cImV4ZWN1dGVDbGlja0NhbGxiYWNrKCRldmVudCwgbGluaylcIj57eyBsaW5rLmxhYmVsIH19PC9hPlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gIGhvc3Q6IHtcbiAgICAnKGtleWRvd24pJzogJ29uS2V5RG93bigkZXZlbnQpJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhdGVnb3J5RHJvcGRvd25FbGVtZW50IGV4dGVuZHMgT3V0c2lkZUNsaWNrIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBfcXVlcnk6IHN0cmluZyA9ICcnO1xuICBfY2F0ZWdvcnlNYXA6IGFueSA9IHt9O1xuICBfY2F0ZWdvcmllczogc3RyaW5nW10gPSBbXTtcbiAgY2xpY2tIYW5kbGVyOiBGdW5jdGlvbjtcbiAgX21hc3RlckNhdGVnb3J5TWFwOiBhbnk7XG4gIF9xdWVyeVRpbWVvdXQ6IGFueTtcbiAgLy8gQm9vbGVhbiB0byBrZWVwIHRoZSBzZWxlY3Rpb24gcGVyc2lzdCB3aGVuIGNsb3NpbmcgdGhlIGRyb3Bkb3duXG4gIEBJbnB1dCgpXG4gIHBlcnNpc3RTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gQm9vbGVhbiB0byBjbG9zZSB0aGUgZHJvcGRvd24gb24gc2VsZWN0aW9uXG4gIEBJbnB1dCgpXG4gIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gU2VhcmNoIENvbmZpZ1xuICAvLyB7XG4gIC8vICAgcGxhY2Vob2xkZXI6ICdTVFJJTkcnIC8vIGRlZmF1bHRzIHRvIFwiU0VBUkNIXCIgLSBwbGFjZWhvbGRlciBmb3Igc2VhcmNoIGlucHV0XG4gIC8vICAgZW1wdHlNZXNzYWdlOiAnU1RSSU5HJyAvLyBkZWZhdWx0cyB0byBcIlRoZXJlIGFyZSBubyBpdGVtcy5cIiAtIGVtcHR5IG1lc3NhZ2Ugd2hlbiB0aGVyZSBhcmUgbm8gaXRlbXMgaW4gdGhlIGNhdGVnb3J5XG4gIC8vICAgZGVib3VuY2U6ICdOVU1CRVIgKGluIE1TKScgLy8gZGVmYXVsdHMgdG8gMzAwbXMgLSBkZWJvdW5jZSB0aW1lIGZvciB0aGUgc2VhcmNoXG4gIC8vICAgY29tcGFyZTogJ0ZVTkNUSU9OJyAvLyBkZWZhdWx0IHRvIHNpbXBsZSBpbmRleE9mIC0gY29tcGFyZSBmdW5jdGlvbiBmb3IgY2F0ZWdvcnkgc2VhcmNoLCBzaG91bGQgYWNjZXB0IChxdWVyeSwgaXRlbSkgYW5kIHJldHVybiB0cnVlL2ZhbHNlXG4gIC8vIH1cbiAgQElucHV0KClcbiAgc2VhcmNoOiBhbnk7XG4gIC8vIEZvb3RlciBjb25maWdcbiAgLy8ge1xuICAvLyAgIGFsaWduOiAnU1RSSU5HJyAvLyBkZWZhdWx0cyB0byBcInJpZ2h0XCIgLSBhbGlnbm1lbnQgb2YgdGhlIGxpbmtzXG4gIC8vICAgbGlua3M6ICdBUlJBWScgLy8gYXJyYXkgb2YgbGlua3MgdG8gZ28gaW50byB0aGUgZm9vdGVyLCBiZSBhd2F5IG9mIHNwYWNpbmcgLSB7IGxhYmVsLCBjYWxsYmFjayB9IGZvciB0aGUgb2JqZWN0IGluc2lkZVxuICAvLyB9XG4gIEBJbnB1dCgpXG4gIGZvb3RlcjogYW55O1xuICAvLyBFdmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbmV2ZXIgYW4gaXRlbSBpcyBzZWxlY3RlZFxuICBAT3V0cHV0KCdpdGVtU2VsZWN0ZWQnKVxuICBfc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gRXZlbnQgdGhhdCBpcyBlbWl0dGVkIHdoZW5ldmVyIGEgY2F0ZWdvcnkgaXMgc2VsZWN0ZWRcbiAgQE91dHB1dCgpXG4gIGNhdGVnb3J5U2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGNhdGVnb3JpZXMoY2F0ZWdvcmllczogYW55KSB7XG4gICAgdGhpcy5fbWFzdGVyQ2F0ZWdvcnlNYXAgPSBPYmplY3QuYXNzaWduKHt9LCBjYXRlZ29yaWVzKTtcbiAgICB0aGlzLl9jYXRlZ29yeU1hcCA9IE9iamVjdC5hc3NpZ24oe30sIGNhdGVnb3JpZXMpO1xuICAgIHRoaXMuX2NhdGVnb3JpZXMgPSBPYmplY3Qua2V5cyhjYXRlZ29yaWVzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICBzdXBlcihlbGVtZW50KTtcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMudG9nZ2xlQWN0aXZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICBpZiAoYnV0dG9uKSB7XG4gICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlICYmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FU0MgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRU5URVIpKSB7XG4gICAgICB0aGlzLnRvZ2dsZUFjdGl2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyU2VsZWN0aW9uKCkge1xuICAgIHRoaXMuX2NhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgIHRoaXMuX2NhdGVnb3J5TWFwW2NhdGVnb3J5XS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0KGV2ZW50LCBpdGVtKSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIC8vIElmIHdlIHBlcnNpc3QgdGhlIHNlbGVjdGlvbiwgY2xlYXIgYW5kIHNob3cgYSBjaGVja1xuICAgIGlmICh0aGlzLnBlcnNpc3RTZWxlY3Rpb24pIHtcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgIGl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBFbWl0IHRoZSBpdGVtXG4gICAgdGhpcy5fc2VsZWN0LmVtaXQoaXRlbSk7XG4gICAgLy8gQ2xvc2UsIGlmIGlucHV0IGlzIHNldFxuICAgIGlmICh0aGlzLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgIHRoaXMudG9nZ2xlQWN0aXZlKCk7XG4gICAgfVxuICB9XG5cbiAgb25DYXRlZ29yeVNlbGVjdGVkKGNhdGVnb3J5KSB7XG4gICAgdGhpcy5jYXRlZ29yeVNlbGVjdGVkLmVtaXQoY2F0ZWdvcnkpO1xuICB9XG5cbiAgY2xlYXJRdWVyeShldmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLl9xdWVyeSA9ICcnO1xuICAgIC8vIFJlc2V0IHRoZSBjYXRlZ29yaWVzXG4gICAgdGhpcy5fY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgICAgdGhpcy5fY2F0ZWdvcnlNYXBbY2F0ZWdvcnldID0gdGhpcy5fbWFzdGVyQ2F0ZWdvcnlNYXBbY2F0ZWdvcnldO1xuICAgIH0pO1xuICB9XG5cbiAgcXVlcnlDYXRlZ29yaWVzKHF1ZXJ5KSB7XG4gICAgLy8gU2F2ZSB0aGUgcXVlcnlcbiAgICB0aGlzLl9xdWVyeSA9IHF1ZXJ5O1xuICAgIC8vIENoZWNrIHRpbWVvdXRcbiAgICBpZiAodGhpcy5fcXVlcnlUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fcXVlcnlUaW1lb3V0KTtcbiAgICB9XG4gICAgLy8gU3RvcmUgYSB0aW1lb3V0LCB0byBkZWJvdW5jZSB1c2VyIGlucHV0XG4gICAgdGhpcy5fcXVlcnlUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9jYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaC5jb21wYXJlKSB7XG4gICAgICAgICAgdGhpcy5fY2F0ZWdvcnlNYXBbY2F0ZWdvcnldID0gdGhpcy5fbWFzdGVyQ2F0ZWdvcnlNYXBbY2F0ZWdvcnldLmZpbHRlcigoaXRlbSkgPT4gdGhpcy5zZWFyY2guY29tcGFyZShxdWVyeSwgaXRlbSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2NhdGVnb3J5TWFwW2NhdGVnb3J5XSA9IHRoaXMuX21hc3RlckNhdGVnb3J5TWFwW2NhdGVnb3J5XS5maWx0ZXIoXG4gICAgICAgICAgICAoaXRlbSkgPT4gfml0ZW0ubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIHRoaXMuc2VhcmNoLmRlYm91bmNlIHx8IDMwMCk7XG4gIH1cblxuICBleGVjdXRlQ2xpY2tDYWxsYmFjayhldmVudCwgbGluaykge1xuICAgIGxpbmsuY2FsbGJhY2soZXZlbnQpO1xuICAgIC8vIENsb3NlLCBpZiBpbnB1dCBpcyBzZXRcbiAgICBpZiAodGhpcy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnRvZ2dsZUFjdGl2ZSgpO1xuICAgIH1cbiAgfVxufVxuIl19