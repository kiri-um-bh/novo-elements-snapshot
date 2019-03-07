/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this._categories.forEach(function (category) {
            _this._categoryMap[category].forEach(function (item) {
                item.selected = false;
            });
        });
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
        this._categories.forEach(function (category) {
            _this._categoryMap[category] = _this._masterCategoryMap[category];
        });
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
        this._queryTimeout = setTimeout(function () {
            _this._categories.forEach(function (category) {
                if (_this.search.compare) {
                    _this._categoryMap[category] = _this._masterCategoryMap[category].filter(function (item) { return _this.search.compare(query, item); });
                }
                else {
                    _this._categoryMap[category] = _this._masterCategoryMap[category].filter(function (item) { return ~item.label.toLowerCase().indexOf(query.toLowerCase()); });
                }
            });
        }, this.search.debounce || 300);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlEcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYXRlZ29yeS1kcm9wZG93bi9DYXRlZ29yeURyb3Bkb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7QUFFdEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFckU7SUF3Q2lELHVEQUFZO0lBMkMzRCxxQ0FBWSxPQUFtQixFQUFTLE1BQXdCO1FBQWhFLFlBQ0Usa0JBQU0sT0FBTyxDQUFDLFNBRWY7UUFIdUMsWUFBTSxHQUFOLE1BQU0sQ0FBa0I7UUExQ2hFLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsa0JBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIsaUJBQVcsR0FBYSxFQUFFLENBQUM7UUFJM0Isa0VBQWtFO1FBRWxFLHNCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyw2Q0FBNkM7UUFFN0MsbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFpQi9CLHFEQUFxRDtRQUVyRCxhQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEQsd0RBQXdEO1FBRXhELHNCQUFnQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBVzVELEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7O0lBQ25ELENBQUM7SUFWRCxzQkFDSSxtREFBVTs7Ozs7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QUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7O2dCQXpLRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFLDQvRUFnQ1A7b0JBQ0gsSUFBSSxFQUFFO3dCQUNKLFdBQVcsRUFBRSxtQkFBbUI7d0JBQ2hDLGdCQUFnQixFQUFFLFFBQVE7cUJBQzNCO2lCQUNGOzs7Z0JBOUNtQixVQUFVO2dCQUtyQixnQkFBZ0I7OzttQ0FrRHRCLEtBQUs7Z0NBR0wsS0FBSzt5QkFTTCxLQUFLO3lCQU9MLEtBQUs7MEJBR0wsTUFBTSxTQUFDLGNBQWM7bUNBR3JCLE1BQU07NkJBR04sS0FBSzs7SUE4RlIsa0NBQUM7Q0FBQSxBQTFLRCxDQXdDaUQsWUFBWSxHQWtJNUQ7U0FsSVksMkJBQTJCOzs7SUFDdEMsNkNBQW9COztJQUNwQixtREFBdUI7O0lBQ3ZCLGtEQUEyQjs7SUFDM0IsbURBQXVCOztJQUN2Qix5REFBd0I7O0lBQ3hCLG9EQUFtQjs7SUFFbkIsdURBQ2tDOztJQUVsQyxvREFDK0I7O0lBUS9CLDZDQUNZOztJQU1aLDZDQUNZOztJQUVaLDhDQUNnRDs7SUFFaEQsdURBQzhEOztJQVM3Qiw2Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBPdXRzaWRlQ2xpY2sgfSBmcm9tICcuLi8uLi91dGlscy9vdXRzaWRlLWNsaWNrL091dHNpZGVDbGljayc7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gJy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYXRlZ29yeS1kcm9wZG93bicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJ1dHRvblwiPjwvbmctY29udGVudD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRhaW5lclwiICpuZ0lmPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jYXRlZ29yeS1kcm9wZG93bi1zZWFyY2hcIiAqbmdJZj1cInNlYXJjaFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tY2F0ZWdvcnktZHJvcGRvd24tc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3BsYWNlaG9sZGVyXT1cInNlYXJjaC5wbGFjZWhvbGRlciB8fCBsYWJlbHMuc2VhcmNoXCIgW3ZhbHVlXT1cIl9xdWVyeVwiIChpbnB1dCk9XCJxdWVyeUNhdGVnb3JpZXMoJGV2ZW50LnRhcmdldC52YWx1ZSlcIi8+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktc2VhcmNoXCIgKm5nSWY9XCIhX3F1ZXJ5XCI+PC9pPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXRpbWVzXCIgKm5nSWY9XCJfcXVlcnlcIiAoY2xpY2spPVwiY2xlYXJRdWVyeSgkZXZlbnQpXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bm92by1uYXYgdGhlbWU9XCJ3aGl0ZVwiIFtvdXRsZXRdPVwibm92b0NhdGVnb3J5RHJvcGRvd25PdXRsZXRcIiBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxub3ZvLXRhYiAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgX2NhdGVnb3JpZXNcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2F0ZWdvcnlcIiAoYWN0aXZlQ2hhbmdlKT1cIm9uQ2F0ZWdvcnlTZWxlY3RlZChjYXRlZ29yeSlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgY2F0ZWdvcnkgfX0gKHt7IF9jYXRlZ29yeU1hcFtjYXRlZ29yeV0ubGVuZ3RoIH19KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L25vdm8tdGFiPlxuICAgICAgICAgICAgPC9ub3ZvLW5hdj5cbiAgICAgICAgICAgIDxub3ZvLW5hdi1vdXRsZXQgI25vdm9DYXRlZ29yeURyb3Bkb3duT3V0bGV0PlxuICAgICAgICAgICAgICAgIDxub3ZvLW5hdi1jb250ZW50ICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBfY2F0ZWdvcmllc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bm92by1saXN0IGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bm92by1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2YgX2NhdGVnb3J5TWFwW2NhdGVnb3J5XVwiIChjbGljayk9XCJzZWxlY3QoJGV2ZW50LCBpdGVtKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJpdGVtLmxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD57eyBpdGVtLmxhYmVsIH19PC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0tZW5kIGNsYXNzPVwibm92by1jYXRlZ29yeS1kcm9wZG93bi1ob3ZlclwiICpuZ0lmPVwiaXRlbS5ob3ZlclRleHQgJiYgIWl0ZW0uc2VsZWN0ZWRcIj57eyBpdGVtLmhvdmVyVGV4dCB9fTwvaXRlbS1lbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0tZW5kIGNsYXNzPVwibm92by1jYXRlZ29yeS1kcm9wZG93bi1ob3ZlclwiICpuZ0lmPVwiaXRlbS5ob3Zlckljb24gJiYgIWl0ZW0uc2VsZWN0ZWRcIj48aSBjbGFzcz1cImJoaS17eyBpdGVtLmhvdmVySWNvbiB9fVwiPjwvaT48L2l0ZW0tZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLWVuZCAqbmdJZj1cIml0ZW0uc2VsZWN0ZWRcIj48aSBjbGFzcz1cImJoaS1jaGVja1wiPjwvaT48L2l0ZW0tZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbSAqbmdJZj1cIl9jYXRlZ29yeU1hcFtjYXRlZ29yeV0ubGVuZ3RoID09PSAwICYmIHNlYXJjaFwiIGNsYXNzPVwibm92by1jYXRlZ29yeS1kcm9wZG93bi1lbXB0eS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD57eyBzZWFyY2guZW1wdHlNZXNzYWdlIHx8IGxhYmVscy5ub0l0ZW1zIH19PC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L25vdm8tbGlzdD5cbiAgICAgICAgICAgICAgICA8L25vdm8tbmF2LWNvbnRlbnQ+XG4gICAgICAgICAgICA8L25vdm8tbmF2LW91dGxldD5cbiAgICAgICAgICAgIDxmb290ZXIgKm5nSWY9XCJmb290ZXJcIiBjbGFzcz1cIm5vdm8tY2F0ZWdvcnktZHJvcGRvd24tZm9vdGVyLWFsaWduLXt7IGZvb3Rlci5hbGlnbiB8fCAncmlnaHQnIH19XCI+XG4gICAgICAgICAgICAgICAgPGEgKm5nRm9yPVwibGV0IGxpbmsgb2YgZm9vdGVyLmxpbmtzXCIgKGNsaWNrKT1cImV4ZWN1dGVDbGlja0NhbGxiYWNrKCRldmVudCwgbGluaylcIj57eyBsaW5rLmxhYmVsIH19PC9hPlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gIGhvc3Q6IHtcbiAgICAnKGtleWRvd24pJzogJ29uS2V5RG93bigkZXZlbnQpJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhdGVnb3J5RHJvcGRvd25FbGVtZW50IGV4dGVuZHMgT3V0c2lkZUNsaWNrIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBfcXVlcnk6IHN0cmluZyA9ICcnO1xuICBfY2F0ZWdvcnlNYXA6IGFueSA9IHt9O1xuICBfY2F0ZWdvcmllczogc3RyaW5nW10gPSBbXTtcbiAgY2xpY2tIYW5kbGVyOiBGdW5jdGlvbjtcbiAgX21hc3RlckNhdGVnb3J5TWFwOiBhbnk7XG4gIF9xdWVyeVRpbWVvdXQ6IGFueTtcbiAgLy8gQm9vbGVhbiB0byBrZWVwIHRoZSBzZWxlY3Rpb24gcGVyc2lzdCB3aGVuIGNsb3NpbmcgdGhlIGRyb3Bkb3duXG4gIEBJbnB1dCgpXG4gIHBlcnNpc3RTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gQm9vbGVhbiB0byBjbG9zZSB0aGUgZHJvcGRvd24gb24gc2VsZWN0aW9uXG4gIEBJbnB1dCgpXG4gIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gU2VhcmNoIENvbmZpZ1xuICAvLyB7XG4gIC8vICAgcGxhY2Vob2xkZXI6ICdTVFJJTkcnIC8vIGRlZmF1bHRzIHRvIFwiU0VBUkNIXCIgLSBwbGFjZWhvbGRlciBmb3Igc2VhcmNoIGlucHV0XG4gIC8vICAgZW1wdHlNZXNzYWdlOiAnU1RSSU5HJyAvLyBkZWZhdWx0cyB0byBcIlRoZXJlIGFyZSBubyBpdGVtcy5cIiAtIGVtcHR5IG1lc3NhZ2Ugd2hlbiB0aGVyZSBhcmUgbm8gaXRlbXMgaW4gdGhlIGNhdGVnb3J5XG4gIC8vICAgZGVib3VuY2U6ICdOVU1CRVIgKGluIE1TKScgLy8gZGVmYXVsdHMgdG8gMzAwbXMgLSBkZWJvdW5jZSB0aW1lIGZvciB0aGUgc2VhcmNoXG4gIC8vICAgY29tcGFyZTogJ0ZVTkNUSU9OJyAvLyBkZWZhdWx0IHRvIHNpbXBsZSBpbmRleE9mIC0gY29tcGFyZSBmdW5jdGlvbiBmb3IgY2F0ZWdvcnkgc2VhcmNoLCBzaG91bGQgYWNjZXB0IChxdWVyeSwgaXRlbSkgYW5kIHJldHVybiB0cnVlL2ZhbHNlXG4gIC8vIH1cbiAgQElucHV0KClcbiAgc2VhcmNoOiBhbnk7XG4gIC8vIEZvb3RlciBjb25maWdcbiAgLy8ge1xuICAvLyAgIGFsaWduOiAnU1RSSU5HJyAvLyBkZWZhdWx0cyB0byBcInJpZ2h0XCIgLSBhbGlnbm1lbnQgb2YgdGhlIGxpbmtzXG4gIC8vICAgbGlua3M6ICdBUlJBWScgLy8gYXJyYXkgb2YgbGlua3MgdG8gZ28gaW50byB0aGUgZm9vdGVyLCBiZSBhd2F5IG9mIHNwYWNpbmcgLSB7IGxhYmVsLCBjYWxsYmFjayB9IGZvciB0aGUgb2JqZWN0IGluc2lkZVxuICAvLyB9XG4gIEBJbnB1dCgpXG4gIGZvb3RlcjogYW55O1xuICAvLyBFdmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbmV2ZXIgYW4gaXRlbSBpcyBzZWxlY3RlZFxuICBAT3V0cHV0KCdpdGVtU2VsZWN0ZWQnKVxuICBfc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gRXZlbnQgdGhhdCBpcyBlbWl0dGVkIHdoZW5ldmVyIGEgY2F0ZWdvcnkgaXMgc2VsZWN0ZWRcbiAgQE91dHB1dCgpXG4gIGNhdGVnb3J5U2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGNhdGVnb3JpZXMoY2F0ZWdvcmllczogYW55KSB7XG4gICAgdGhpcy5fbWFzdGVyQ2F0ZWdvcnlNYXAgPSBPYmplY3QuYXNzaWduKHt9LCBjYXRlZ29yaWVzKTtcbiAgICB0aGlzLl9jYXRlZ29yeU1hcCA9IE9iamVjdC5hc3NpZ24oe30sIGNhdGVnb3JpZXMpO1xuICAgIHRoaXMuX2NhdGVnb3JpZXMgPSBPYmplY3Qua2V5cyhjYXRlZ29yaWVzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICBzdXBlcihlbGVtZW50KTtcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMudG9nZ2xlQWN0aXZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgYnV0dG9uID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgbGV0IGJ1dHRvbiA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgIGlmIChidXR0b24pIHtcbiAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUgJiYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVTQyB8fCBldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FTlRFUikpIHtcbiAgICAgIHRoaXMudG9nZ2xlQWN0aXZlKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5fY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgICAgdGhpcy5fY2F0ZWdvcnlNYXBbY2F0ZWdvcnldLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3QoZXZlbnQsIGl0ZW0pIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgLy8gSWYgd2UgcGVyc2lzdCB0aGUgc2VsZWN0aW9uLCBjbGVhciBhbmQgc2hvdyBhIGNoZWNrXG4gICAgaWYgKHRoaXMucGVyc2lzdFNlbGVjdGlvbikge1xuICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgaXRlbS5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIC8vIEVtaXQgdGhlIGl0ZW1cbiAgICB0aGlzLl9zZWxlY3QuZW1pdChpdGVtKTtcbiAgICAvLyBDbG9zZSwgaWYgaW5wdXQgaXMgc2V0XG4gICAgaWYgKHRoaXMuY2xvc2VPblNlbGVjdCkge1xuICAgICAgdGhpcy50b2dnbGVBY3RpdmUoKTtcbiAgICB9XG4gIH1cblxuICBvbkNhdGVnb3J5U2VsZWN0ZWQoY2F0ZWdvcnkpIHtcbiAgICB0aGlzLmNhdGVnb3J5U2VsZWN0ZWQuZW1pdChjYXRlZ29yeSk7XG4gIH1cblxuICBjbGVhclF1ZXJ5KGV2ZW50KSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuX3F1ZXJ5ID0gJyc7XG4gICAgLy8gUmVzZXQgdGhlIGNhdGVnb3JpZXNcbiAgICB0aGlzLl9jYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICB0aGlzLl9jYXRlZ29yeU1hcFtjYXRlZ29yeV0gPSB0aGlzLl9tYXN0ZXJDYXRlZ29yeU1hcFtjYXRlZ29yeV07XG4gICAgfSk7XG4gIH1cblxuICBxdWVyeUNhdGVnb3JpZXMocXVlcnkpIHtcbiAgICAvLyBTYXZlIHRoZSBxdWVyeVxuICAgIHRoaXMuX3F1ZXJ5ID0gcXVlcnk7XG4gICAgLy8gQ2hlY2sgdGltZW91dFxuICAgIGlmICh0aGlzLl9xdWVyeVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9xdWVyeVRpbWVvdXQpO1xuICAgIH1cbiAgICAvLyBTdG9yZSBhIHRpbWVvdXQsIHRvIGRlYm91bmNlIHVzZXIgaW5wdXRcbiAgICB0aGlzLl9xdWVyeVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2NhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoLmNvbXBhcmUpIHtcbiAgICAgICAgICB0aGlzLl9jYXRlZ29yeU1hcFtjYXRlZ29yeV0gPSB0aGlzLl9tYXN0ZXJDYXRlZ29yeU1hcFtjYXRlZ29yeV0uZmlsdGVyKChpdGVtKSA9PiB0aGlzLnNlYXJjaC5jb21wYXJlKHF1ZXJ5LCBpdGVtKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fY2F0ZWdvcnlNYXBbY2F0ZWdvcnldID0gdGhpcy5fbWFzdGVyQ2F0ZWdvcnlNYXBbY2F0ZWdvcnldLmZpbHRlcihcbiAgICAgICAgICAgIChpdGVtKSA9PiB+aXRlbS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkudG9Mb3dlckNhc2UoKSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgdGhpcy5zZWFyY2guZGVib3VuY2UgfHwgMzAwKTtcbiAgfVxuXG4gIGV4ZWN1dGVDbGlja0NhbGxiYWNrKGV2ZW50LCBsaW5rKSB7XG4gICAgbGluay5jYWxsYmFjayhldmVudCk7XG4gICAgLy8gQ2xvc2UsIGlmIGlucHV0IGlzIHNldFxuICAgIGlmICh0aGlzLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgIHRoaXMudG9nZ2xlQWN0aXZlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=