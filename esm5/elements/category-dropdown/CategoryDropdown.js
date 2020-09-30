/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlEcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYXRlZ29yeS1kcm9wZG93bi9DYXRlZ29yeURyb3Bkb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7QUFFdEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFckU7SUF3Q2lELHVEQUFZO0lBMkMzRCxxQ0FBWSxPQUFtQixFQUFTLE1BQXdCO1FBQWhFLFlBQ0Usa0JBQU0sT0FBTyxDQUFDLFNBRWY7UUFIdUMsWUFBTSxHQUFOLE1BQU0sQ0FBa0I7UUExQ2hFLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsa0JBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIsaUJBQVcsR0FBYSxFQUFFLENBQUM7O1FBTTNCLHNCQUFnQixHQUFZLEtBQUssQ0FBQzs7UUFHbEMsbUJBQWEsR0FBWSxLQUFLLENBQUM7O1FBbUIvQixhQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7O1FBR2hELHNCQUFnQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBVzVELEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7O0lBQ25ELENBQUM7SUFWRCxzQkFDSSxtREFBVTs7Ozs7UUFEZCxVQUNlLFVBQWU7WUFDNUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLENBQUM7OztPQUFBOzs7O0lBT0QsOENBQVE7OztJQUFSOztZQUNNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQy9ELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCxpREFBVzs7O0lBQVg7O1lBQ00sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDL0QsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDtJQUNILENBQUM7Ozs7O0lBRUQsK0NBQVM7Ozs7SUFBVCxVQUFVLEtBQUs7UUFDYixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkYsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7OztJQUVELG9EQUFjOzs7SUFBZDtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxRQUFRO1lBQ2hDLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsSUFBSTtnQkFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDeEIsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELDRDQUFNOzs7OztJQUFOLFVBQU8sS0FBSyxFQUFFLElBQUk7UUFDaEIsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixzREFBc0Q7UUFDdEQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO1FBQ0QsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLHlCQUF5QjtRQUN6QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx3REFBa0I7Ozs7SUFBbEIsVUFBbUIsUUFBUTtRQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsZ0RBQVU7Ozs7SUFBVixVQUFXLEtBQUs7UUFBaEIsaUJBT0M7UUFOQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLFFBQVE7WUFDaEMsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEUsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHFEQUFlOzs7O0lBQWYsVUFBZ0IsS0FBSztRQUFyQixpQkFtQkM7UUFsQkMsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGdCQUFnQjtRQUNoQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNsQztRQUNELDBDQUEwQztRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVU7OztRQUFDO1lBQzlCLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsUUFBUTtnQkFDaEMsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtvQkFDdkIsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTTs7OztvQkFBQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBaEMsQ0FBZ0MsRUFBQyxDQUFDO2lCQUNwSDtxQkFBTTtvQkFDTCxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNOzs7O29CQUNwRSxVQUFDLElBQUksSUFBSyxPQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQXRELENBQXNELEVBQ2pFLENBQUM7aUJBQ0g7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsR0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUFFRCwwREFBb0I7Ozs7O0lBQXBCLFVBQXFCLEtBQUssRUFBRSxJQUFJO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIseUJBQXlCO1FBQ3pCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDOztnQkF6S0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFFBQVEsRUFBRSw0L0VBZ0NQO29CQUNILElBQUksRUFBRTt3QkFDSixXQUFXLEVBQUUsbUJBQW1CO3dCQUNoQyxnQkFBZ0IsRUFBRSxRQUFRO3FCQUMzQjtpQkFDRjs7OztnQkE5Q21CLFVBQVU7Z0JBS3JCLGdCQUFnQjs7O21DQWtEdEIsS0FBSztnQ0FHTCxLQUFLO3lCQVNMLEtBQUs7eUJBT0wsS0FBSzswQkFHTCxNQUFNLFNBQUMsY0FBYzttQ0FHckIsTUFBTTs2QkFHTixLQUFLOztJQThGUixrQ0FBQztDQUFBLEFBMUtELENBd0NpRCxZQUFZLEdBa0k1RDtTQWxJWSwyQkFBMkI7OztJQUN0Qyw2Q0FBb0I7O0lBQ3BCLG1EQUF1Qjs7SUFDdkIsa0RBQTJCOztJQUMzQixtREFBdUI7O0lBQ3ZCLHlEQUF3Qjs7SUFDeEIsb0RBQW1COztJQUVuQix1REFDa0M7O0lBRWxDLG9EQUMrQjs7SUFRL0IsNkNBQ1k7O0lBTVosNkNBQ1k7O0lBRVosOENBQ2dEOztJQUVoRCx1REFDOEQ7O0lBUzdCLDZDQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE91dHNpZGVDbGljayB9IGZyb20gJy4uLy4uL3V0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhdGVnb3J5LWRyb3Bkb3duJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYnV0dG9uXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGFpbmVyXCIgKm5nSWY9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNhdGVnb3J5LWRyb3Bkb3duLXNlYXJjaFwiICpuZ0lmPVwic2VhcmNoXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1jYXRlZ29yeS1kcm9wZG93bi1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbcGxhY2Vob2xkZXJdPVwic2VhcmNoLnBsYWNlaG9sZGVyIHx8IGxhYmVscy5zZWFyY2hcIiBbdmFsdWVdPVwiX3F1ZXJ5XCIgKGlucHV0KT1cInF1ZXJ5Q2F0ZWdvcmllcygkZXZlbnQudGFyZ2V0LnZhbHVlKVwiLz5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1zZWFyY2hcIiAqbmdJZj1cIiFfcXVlcnlcIj48L2k+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktdGltZXNcIiAqbmdJZj1cIl9xdWVyeVwiIChjbGljayk9XCJjbGVhclF1ZXJ5KCRldmVudClcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxub3ZvLW5hdiB0aGVtZT1cIndoaXRlXCIgW291dGxldF09XCJub3ZvQ2F0ZWdvcnlEcm9wZG93bk91dGxldFwiIGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgPG5vdm8tdGFiICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBfY2F0ZWdvcmllc1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXRlZ29yeVwiIChhY3RpdmVDaGFuZ2UpPVwib25DYXRlZ29yeVNlbGVjdGVkKGNhdGVnb3J5KVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBjYXRlZ29yeSB9fSAoe3sgX2NhdGVnb3J5TWFwW2NhdGVnb3J5XS5sZW5ndGggfX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbm92by10YWI+XG4gICAgICAgICAgICA8L25vdm8tbmF2PlxuICAgICAgICAgICAgPG5vdm8tbmF2LW91dGxldCAjbm92b0NhdGVnb3J5RHJvcGRvd25PdXRsZXQ+XG4gICAgICAgICAgICAgICAgPG5vdm8tbmF2LWNvbnRlbnQgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIF9jYXRlZ29yaWVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QgZGlyZWN0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfY2F0ZWdvcnlNYXBbY2F0ZWdvcnldXCIgKGNsaWNrKT1cInNlbGVjdCgkZXZlbnQsIGl0ZW0pXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIml0ZW0ubGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50Pnt7IGl0ZW0ubGFiZWwgfX08L2l0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS1lbmQgY2xhc3M9XCJub3ZvLWNhdGVnb3J5LWRyb3Bkb3duLWhvdmVyXCIgKm5nSWY9XCJpdGVtLmhvdmVyVGV4dCAmJiAhaXRlbS5zZWxlY3RlZFwiPnt7IGl0ZW0uaG92ZXJUZXh0IH19PC9pdGVtLWVuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS1lbmQgY2xhc3M9XCJub3ZvLWNhdGVnb3J5LWRyb3Bkb3duLWhvdmVyXCIgKm5nSWY9XCJpdGVtLmhvdmVySWNvbiAmJiAhaXRlbS5zZWxlY3RlZFwiPjxpIGNsYXNzPVwiYmhpLXt7IGl0ZW0uaG92ZXJJY29uIH19XCI+PC9pPjwvaXRlbS1lbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0tZW5kICpuZ0lmPVwiaXRlbS5zZWxlY3RlZFwiPjxpIGNsYXNzPVwiYmhpLWNoZWNrXCI+PC9pPjwvaXRlbS1lbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tbGlzdC1pdGVtICpuZ0lmPVwiX2NhdGVnb3J5TWFwW2NhdGVnb3J5XS5sZW5ndGggPT09IDAgJiYgc2VhcmNoXCIgY2xhc3M9XCJub3ZvLWNhdGVnb3J5LWRyb3Bkb3duLWVtcHR5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50Pnt7IHNlYXJjaC5lbXB0eU1lc3NhZ2UgfHwgbGFiZWxzLm5vSXRlbXMgfX08L2l0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvbm92by1saXN0PlxuICAgICAgICAgICAgICAgIDwvbm92by1uYXYtY29udGVudD5cbiAgICAgICAgICAgIDwvbm92by1uYXYtb3V0bGV0PlxuICAgICAgICAgICAgPGZvb3RlciAqbmdJZj1cImZvb3RlclwiIGNsYXNzPVwibm92by1jYXRlZ29yeS1kcm9wZG93bi1mb290ZXItYWxpZ24te3sgZm9vdGVyLmFsaWduIHx8ICdyaWdodCcgfX1cIj5cbiAgICAgICAgICAgICAgICA8YSAqbmdGb3I9XCJsZXQgbGluayBvZiBmb290ZXIubGlua3NcIiAoY2xpY2spPVwiZXhlY3V0ZUNsaWNrQ2FsbGJhY2soJGV2ZW50LCBsaW5rKVwiPnt7IGxpbmsubGFiZWwgfX08L2E+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgaG9zdDoge1xuICAgICcoa2V5ZG93biknOiAnb25LZXlEb3duKCRldmVudCknLFxuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdhY3RpdmUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2F0ZWdvcnlEcm9wZG93bkVsZW1lbnQgZXh0ZW5kcyBPdXRzaWRlQ2xpY2sgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIF9xdWVyeTogc3RyaW5nID0gJyc7XG4gIF9jYXRlZ29yeU1hcDogYW55ID0ge307XG4gIF9jYXRlZ29yaWVzOiBzdHJpbmdbXSA9IFtdO1xuICBjbGlja0hhbmRsZXI6IEZ1bmN0aW9uO1xuICBfbWFzdGVyQ2F0ZWdvcnlNYXA6IGFueTtcbiAgX3F1ZXJ5VGltZW91dDogYW55O1xuICAvLyBCb29sZWFuIHRvIGtlZXAgdGhlIHNlbGVjdGlvbiBwZXJzaXN0IHdoZW4gY2xvc2luZyB0aGUgZHJvcGRvd25cbiAgQElucHV0KClcbiAgcGVyc2lzdFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBCb29sZWFuIHRvIGNsb3NlIHRoZSBkcm9wZG93biBvbiBzZWxlY3Rpb25cbiAgQElucHV0KClcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBTZWFyY2ggQ29uZmlnXG4gIC8vIHtcbiAgLy8gICBwbGFjZWhvbGRlcjogJ1NUUklORycgLy8gZGVmYXVsdHMgdG8gXCJTRUFSQ0hcIiAtIHBsYWNlaG9sZGVyIGZvciBzZWFyY2ggaW5wdXRcbiAgLy8gICBlbXB0eU1lc3NhZ2U6ICdTVFJJTkcnIC8vIGRlZmF1bHRzIHRvIFwiVGhlcmUgYXJlIG5vIGl0ZW1zLlwiIC0gZW1wdHkgbWVzc2FnZSB3aGVuIHRoZXJlIGFyZSBubyBpdGVtcyBpbiB0aGUgY2F0ZWdvcnlcbiAgLy8gICBkZWJvdW5jZTogJ05VTUJFUiAoaW4gTVMpJyAvLyBkZWZhdWx0cyB0byAzMDBtcyAtIGRlYm91bmNlIHRpbWUgZm9yIHRoZSBzZWFyY2hcbiAgLy8gICBjb21wYXJlOiAnRlVOQ1RJT04nIC8vIGRlZmF1bHQgdG8gc2ltcGxlIGluZGV4T2YgLSBjb21wYXJlIGZ1bmN0aW9uIGZvciBjYXRlZ29yeSBzZWFyY2gsIHNob3VsZCBhY2NlcHQgKHF1ZXJ5LCBpdGVtKSBhbmQgcmV0dXJuIHRydWUvZmFsc2VcbiAgLy8gfVxuICBASW5wdXQoKVxuICBzZWFyY2g6IGFueTtcbiAgLy8gRm9vdGVyIGNvbmZpZ1xuICAvLyB7XG4gIC8vICAgYWxpZ246ICdTVFJJTkcnIC8vIGRlZmF1bHRzIHRvIFwicmlnaHRcIiAtIGFsaWdubWVudCBvZiB0aGUgbGlua3NcbiAgLy8gICBsaW5rczogJ0FSUkFZJyAvLyBhcnJheSBvZiBsaW5rcyB0byBnbyBpbnRvIHRoZSBmb290ZXIsIGJlIGF3YXkgb2Ygc3BhY2luZyAtIHsgbGFiZWwsIGNhbGxiYWNrIH0gZm9yIHRoZSBvYmplY3QgaW5zaWRlXG4gIC8vIH1cbiAgQElucHV0KClcbiAgZm9vdGVyOiBhbnk7XG4gIC8vIEV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuZXZlciBhbiBpdGVtIGlzIHNlbGVjdGVkXG4gIEBPdXRwdXQoJ2l0ZW1TZWxlY3RlZCcpXG4gIF9zZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyBFdmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbmV2ZXIgYSBjYXRlZ29yeSBpcyBzZWxlY3RlZFxuICBAT3V0cHV0KClcbiAgY2F0ZWdvcnlTZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgY2F0ZWdvcmllcyhjYXRlZ29yaWVzOiBhbnkpIHtcbiAgICB0aGlzLl9tYXN0ZXJDYXRlZ29yeU1hcCA9IE9iamVjdC5hc3NpZ24oe30sIGNhdGVnb3JpZXMpO1xuICAgIHRoaXMuX2NhdGVnb3J5TWFwID0gT2JqZWN0LmFzc2lnbih7fSwgY2F0ZWdvcmllcyk7XG4gICAgdGhpcy5fY2F0ZWdvcmllcyA9IE9iamVjdC5rZXlzKGNhdGVnb3JpZXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gdGhpcy50b2dnbGVBY3RpdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBidXR0b24gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBsZXQgYnV0dG9uID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gICAgaWYgKGJ1dHRvbikge1xuICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZSAmJiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRVNDIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVOVEVSKSkge1xuICAgICAgdGhpcy50b2dnbGVBY3RpdmUoKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclNlbGVjdGlvbigpIHtcbiAgICB0aGlzLl9jYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICB0aGlzLl9jYXRlZ29yeU1hcFtjYXRlZ29yeV0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdChldmVudCwgaXRlbSkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAvLyBJZiB3ZSBwZXJzaXN0IHRoZSBzZWxlY3Rpb24sIGNsZWFyIGFuZCBzaG93IGEgY2hlY2tcbiAgICBpZiAodGhpcy5wZXJzaXN0U2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICBpdGVtLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gRW1pdCB0aGUgaXRlbVxuICAgIHRoaXMuX3NlbGVjdC5lbWl0KGl0ZW0pO1xuICAgIC8vIENsb3NlLCBpZiBpbnB1dCBpcyBzZXRcbiAgICBpZiAodGhpcy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnRvZ2dsZUFjdGl2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2F0ZWdvcnlTZWxlY3RlZChjYXRlZ29yeSkge1xuICAgIHRoaXMuY2F0ZWdvcnlTZWxlY3RlZC5lbWl0KGNhdGVnb3J5KTtcbiAgfVxuXG4gIGNsZWFyUXVlcnkoZXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5fcXVlcnkgPSAnJztcbiAgICAvLyBSZXNldCB0aGUgY2F0ZWdvcmllc1xuICAgIHRoaXMuX2NhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgIHRoaXMuX2NhdGVnb3J5TWFwW2NhdGVnb3J5XSA9IHRoaXMuX21hc3RlckNhdGVnb3J5TWFwW2NhdGVnb3J5XTtcbiAgICB9KTtcbiAgfVxuXG4gIHF1ZXJ5Q2F0ZWdvcmllcyhxdWVyeSkge1xuICAgIC8vIFNhdmUgdGhlIHF1ZXJ5XG4gICAgdGhpcy5fcXVlcnkgPSBxdWVyeTtcbiAgICAvLyBDaGVjayB0aW1lb3V0XG4gICAgaWYgKHRoaXMuX3F1ZXJ5VGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3F1ZXJ5VGltZW91dCk7XG4gICAgfVxuICAgIC8vIFN0b3JlIGEgdGltZW91dCwgdG8gZGVib3VuY2UgdXNlciBpbnB1dFxuICAgIHRoaXMuX3F1ZXJ5VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zZWFyY2guY29tcGFyZSkge1xuICAgICAgICAgIHRoaXMuX2NhdGVnb3J5TWFwW2NhdGVnb3J5XSA9IHRoaXMuX21hc3RlckNhdGVnb3J5TWFwW2NhdGVnb3J5XS5maWx0ZXIoKGl0ZW0pID0+IHRoaXMuc2VhcmNoLmNvbXBhcmUocXVlcnksIGl0ZW0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9jYXRlZ29yeU1hcFtjYXRlZ29yeV0gPSB0aGlzLl9tYXN0ZXJDYXRlZ29yeU1hcFtjYXRlZ29yeV0uZmlsdGVyKFxuICAgICAgICAgICAgKGl0ZW0pID0+IH5pdGVtLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeS50b0xvd2VyQ2FzZSgpKSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCB0aGlzLnNlYXJjaC5kZWJvdW5jZSB8fCAzMDApO1xuICB9XG5cbiAgZXhlY3V0ZUNsaWNrQ2FsbGJhY2soZXZlbnQsIGxpbmspIHtcbiAgICBsaW5rLmNhbGxiYWNrKGV2ZW50KTtcbiAgICAvLyBDbG9zZSwgaWYgaW5wdXQgaXMgc2V0XG4gICAgaWYgKHRoaXMuY2xvc2VPblNlbGVjdCkge1xuICAgICAgdGhpcy50b2dnbGVBY3RpdmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==