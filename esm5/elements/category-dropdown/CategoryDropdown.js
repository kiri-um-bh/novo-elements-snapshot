import { __extends } from "tslib";
// NG2
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
// APP
import { OutsideClick } from '../../utils/outside-click/OutsideClick';
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "@angular/common";
import * as i3 from "../tabs/Tabs";
import * as i4 from "../list/List";
function NovoCategoryDropdownElement_div_1_div_1_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 12);
} }
function NovoCategoryDropdownElement_div_1_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    var _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 13);
    i0.ɵɵlistener("click", function NovoCategoryDropdownElement_div_1_div_1_i_3_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r9); var ctx_r8 = i0.ɵɵnextContext(3); return ctx_r8.clearQuery($event); });
    i0.ɵɵelementEnd();
} }
function NovoCategoryDropdownElement_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "input", 9);
    i0.ɵɵlistener("input", function NovoCategoryDropdownElement_div_1_div_1_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r11); var ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.queryCategories($event.target.value); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, NovoCategoryDropdownElement_div_1_div_1_i_2_Template, 1, 0, "i", 10);
    i0.ɵɵtemplate(3, NovoCategoryDropdownElement_div_1_div_1_i_3_Template, 1, 0, "i", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", ctx_r1.search.placeholder || ctx_r1.labels.search)("value", ctx_r1._query);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1._query);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1._query);
} }
function NovoCategoryDropdownElement_div_1_novo_tab_3_Template(rf, ctx) { if (rf & 1) {
    var _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-tab", 14);
    i0.ɵɵlistener("activeChange", function NovoCategoryDropdownElement_div_1_novo_tab_3_Template_novo_tab_activeChange_0_listener() { i0.ɵɵrestoreView(_r14); var category_r12 = ctx.$implicit; var ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.onCategorySelected(category_r12); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r12 = ctx.$implicit;
    var ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("data-automation-id", category_r12);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", category_r12, " (", ctx_r2._categoryMap[category_r12].length, ")");
} }
function NovoCategoryDropdownElement_div_1_novo_nav_content_6_novo_list_item_2_item_end_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "item-end", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r18.hoverText);
} }
function NovoCategoryDropdownElement_div_1_novo_nav_content_6_novo_list_item_2_item_end_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "item-end", 21);
    i0.ɵɵelement(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("bhi-", item_r18.hoverIcon, "");
} }
function NovoCategoryDropdownElement_div_1_novo_nav_content_6_novo_list_item_2_item_end_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "item-end");
    i0.ɵɵelement(1, "i", 22);
    i0.ɵɵelementEnd();
} }
function NovoCategoryDropdownElement_div_1_novo_nav_content_6_novo_list_item_2_Template(rf, ctx) { if (rf & 1) {
    var _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 18);
    i0.ɵɵlistener("click", function NovoCategoryDropdownElement_div_1_novo_nav_content_6_novo_list_item_2_Template_novo_list_item_click_0_listener($event) { i0.ɵɵrestoreView(_r25); var item_r18 = ctx.$implicit; var ctx_r24 = i0.ɵɵnextContext(3); return ctx_r24.select($event, item_r18); });
    i0.ɵɵelementStart(1, "item-content");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, NovoCategoryDropdownElement_div_1_novo_nav_content_6_novo_list_item_2_item_end_3_Template, 2, 1, "item-end", 19);
    i0.ɵɵtemplate(4, NovoCategoryDropdownElement_div_1_novo_nav_content_6_novo_list_item_2_item_end_4_Template, 2, 3, "item-end", 19);
    i0.ɵɵtemplate(5, NovoCategoryDropdownElement_div_1_novo_nav_content_6_novo_list_item_2_item_end_5_Template, 2, 0, "item-end", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r18 = ctx.$implicit;
    i0.ɵɵattribute("data-automation-id", item_r18.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r18.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r18.hoverText && !item_r18.selected);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r18.hoverIcon && !item_r18.selected);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r18.selected);
} }
function NovoCategoryDropdownElement_div_1_novo_nav_content_6_novo_list_item_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-list-item", 23);
    i0.ɵɵelementStart(1, "item-content");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r17 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r17.search.emptyMessage || ctx_r17.labels.noItems);
} }
function NovoCategoryDropdownElement_div_1_novo_nav_content_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-nav-content");
    i0.ɵɵelementStart(1, "novo-list", 15);
    i0.ɵɵtemplate(2, NovoCategoryDropdownElement_div_1_novo_nav_content_6_novo_list_item_2_Template, 6, 5, "novo-list-item", 16);
    i0.ɵɵtemplate(3, NovoCategoryDropdownElement_div_1_novo_nav_content_6_novo_list_item_3_Template, 3, 1, "novo-list-item", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r15 = ctx.$implicit;
    var ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4._categoryMap[category_r15]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4._categoryMap[category_r15].length === 0 && ctx_r4.search);
} }
function NovoCategoryDropdownElement_div_1_footer_7_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 18);
    i0.ɵɵlistener("click", function NovoCategoryDropdownElement_div_1_footer_7_a_1_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r29); var link_r27 = ctx.$implicit; var ctx_r28 = i0.ɵɵnextContext(3); return ctx_r28.executeClickCallback($event, link_r27); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var link_r27 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(link_r27.label);
} }
function NovoCategoryDropdownElement_div_1_footer_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "footer");
    i0.ɵɵtemplate(1, NovoCategoryDropdownElement_div_1_footer_7_a_1_Template, 2, 1, "a", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("novo-category-dropdown-footer-align-", ctx_r5.footer.align || "right", "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.footer.links);
} }
function NovoCategoryDropdownElement_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, NovoCategoryDropdownElement_div_1_div_1_Template, 4, 4, "div", 2);
    i0.ɵɵelementStart(2, "novo-nav", 3);
    i0.ɵɵtemplate(3, NovoCategoryDropdownElement_div_1_novo_tab_3_Template, 3, 3, "novo-tab", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "novo-nav-outlet", null, 5);
    i0.ɵɵtemplate(6, NovoCategoryDropdownElement_div_1_novo_nav_content_6_Template, 4, 2, "novo-nav-content", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, NovoCategoryDropdownElement_div_1_footer_7_Template, 2, 4, "footer", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r3 = i0.ɵɵreference(5);
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.search);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("outlet", _r3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0._categories);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0._categories);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.footer);
} }
var _c0 = [[["button"]]];
var _c1 = ["button"];
var NovoCategoryDropdownElement = /** @class */ (function (_super) {
    __extends(NovoCategoryDropdownElement, _super);
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
        set: function (categories) {
            this._masterCategoryMap = Object.assign({}, categories);
            this._categoryMap = Object.assign({}, categories);
            this._categories = Object.keys(categories);
        },
        enumerable: true,
        configurable: true
    });
    NovoCategoryDropdownElement.prototype.ngOnInit = function () {
        var button = this.element.nativeElement.querySelector('button');
        button.addEventListener('click', this.clickHandler);
    };
    NovoCategoryDropdownElement.prototype.ngOnDestroy = function () {
        var button = this.element.nativeElement.querySelector('button');
        if (button) {
            button.removeEventListener('click', this.clickHandler);
        }
    };
    NovoCategoryDropdownElement.prototype.onKeyDown = function (event) {
        if (this.active && (event.keyCode === KeyCodes.ESC || event.keyCode === KeyCodes.ENTER)) {
            this.toggleActive();
        }
    };
    NovoCategoryDropdownElement.prototype.clearSelection = function () {
        var _this = this;
        this._categories.forEach(function (category) {
            _this._categoryMap[category].forEach(function (item) {
                item.selected = false;
            });
        });
    };
    NovoCategoryDropdownElement.prototype.select = function (event, item) {
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
    NovoCategoryDropdownElement.prototype.onCategorySelected = function (category) {
        this.categorySelected.emit(category);
    };
    NovoCategoryDropdownElement.prototype.clearQuery = function (event) {
        var _this = this;
        Helpers.swallowEvent(event);
        this._query = '';
        // Reset the categories
        this._categories.forEach(function (category) {
            _this._categoryMap[category] = _this._masterCategoryMap[category];
        });
    };
    NovoCategoryDropdownElement.prototype.queryCategories = function (query) {
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
    NovoCategoryDropdownElement.prototype.executeClickCallback = function (event, link) {
        link.callback(event);
        // Close, if input is set
        if (this.closeOnSelect) {
            this.toggleActive();
        }
    };
    NovoCategoryDropdownElement.ɵfac = function NovoCategoryDropdownElement_Factory(t) { return new (t || NovoCategoryDropdownElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
    NovoCategoryDropdownElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCategoryDropdownElement, selectors: [["novo-category-dropdown"]], hostVars: 2, hostBindings: function NovoCategoryDropdownElement_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown", function NovoCategoryDropdownElement_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
        } if (rf & 2) {
            i0.ɵɵclassProp("active", ctx.active);
        } }, inputs: { persistSelection: "persistSelection", closeOnSelect: "closeOnSelect", search: "search", footer: "footer", categories: "categories" }, outputs: { _select: "itemSelected", categorySelected: "categorySelected" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 2, vars: 1, consts: [["class", "dropdown-container", 4, "ngIf"], [1, "dropdown-container"], ["class", "novo-category-dropdown-search", "data-automation-id", "novo-category-dropdown-search", 4, "ngIf"], ["theme", "white", "direction", "vertical", 3, "outlet"], [3, "activeChange", 4, "ngFor", "ngForOf"], ["novoCategoryDropdownOutlet", ""], [4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf"], ["data-automation-id", "novo-category-dropdown-search", 1, "novo-category-dropdown-search"], ["type", "text", 3, "placeholder", "value", "input"], ["class", "bhi-search", 4, "ngIf"], ["class", "bhi-times", 3, "click", 4, "ngIf"], [1, "bhi-search"], [1, "bhi-times", 3, "click"], [3, "activeChange"], ["direction", "vertical"], [3, "click", 4, "ngFor", "ngForOf"], ["class", "novo-category-dropdown-empty-item", 4, "ngIf"], [3, "click"], ["class", "novo-category-dropdown-hover", 4, "ngIf"], [4, "ngIf"], [1, "novo-category-dropdown-hover"], [1, "bhi-check"], [1, "novo-category-dropdown-empty-item"]], template: function NovoCategoryDropdownElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵprojection(0);
            i0.ɵɵtemplate(1, NovoCategoryDropdownElement_div_1_Template, 8, 5, "div", 0);
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.active);
        } }, directives: [i2.NgIf, i3.NovoNavElement, i2.NgForOf, i3.NovoNavOutletElement, i3.NovoTabElement, i3.NovoNavContentElement, i4.NovoListElement, i4.NovoListItemElement, i4.NovoItemContentElement, i4.NovoItemEndElement], encapsulation: 2 });
    return NovoCategoryDropdownElement;
}(OutsideClick));
export { NovoCategoryDropdownElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCategoryDropdownElement, [{
        type: Component,
        args: [{
                selector: 'novo-category-dropdown',
                template: "\n        <ng-content select=\"button\"></ng-content>\n        <div class=\"dropdown-container\" *ngIf=\"active\">\n            <div class=\"novo-category-dropdown-search\" *ngIf=\"search\" data-automation-id=\"novo-category-dropdown-search\">\n                <input type=\"text\" [placeholder]=\"search.placeholder || labels.search\" [value]=\"_query\" (input)=\"queryCategories($event.target.value)\"/>\n                <i class=\"bhi-search\" *ngIf=\"!_query\"></i>\n                <i class=\"bhi-times\" *ngIf=\"_query\" (click)=\"clearQuery($event)\"></i>\n            </div>\n            <novo-nav theme=\"white\" [outlet]=\"novoCategoryDropdownOutlet\" direction=\"vertical\">\n                <novo-tab *ngFor=\"let category of _categories\" [attr.data-automation-id]=\"category\" (activeChange)=\"onCategorySelected(category)\">\n                    <span>{{ category }} ({{ _categoryMap[category].length }})</span>\n                </novo-tab>\n            </novo-nav>\n            <novo-nav-outlet #novoCategoryDropdownOutlet>\n                <novo-nav-content *ngFor=\"let category of _categories\">\n                    <novo-list direction=\"vertical\">\n                        <novo-list-item *ngFor=\"let item of _categoryMap[category]\" (click)=\"select($event, item)\" [attr.data-automation-id]=\"item.label\">\n                            <item-content>{{ item.label }}</item-content>\n                            <item-end class=\"novo-category-dropdown-hover\" *ngIf=\"item.hoverText && !item.selected\">{{ item.hoverText }}</item-end>\n                            <item-end class=\"novo-category-dropdown-hover\" *ngIf=\"item.hoverIcon && !item.selected\"><i class=\"bhi-{{ item.hoverIcon }}\"></i></item-end>\n                            <item-end *ngIf=\"item.selected\"><i class=\"bhi-check\"></i></item-end>\n                        </novo-list-item>\n                        <novo-list-item *ngIf=\"_categoryMap[category].length === 0 && search\" class=\"novo-category-dropdown-empty-item\">\n                            <item-content>{{ search.emptyMessage || labels.noItems }}</item-content>\n                        </novo-list-item>\n                    </novo-list>\n                </novo-nav-content>\n            </novo-nav-outlet>\n            <footer *ngIf=\"footer\" class=\"novo-category-dropdown-footer-align-{{ footer.align || 'right' }}\">\n                <a *ngFor=\"let link of footer.links\" (click)=\"executeClickCallback($event, link)\">{{ link.label }}</a>\n            </footer>\n        </div>\n    ",
                host: {
                    '(keydown)': 'onKeyDown($event)',
                    '[class.active]': 'active',
                },
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NovoLabelService }]; }, { persistSelection: [{
            type: Input
        }], closeOnSelect: [{
            type: Input
        }], search: [{
            type: Input
        }], footer: [{
            type: Input
        }], _select: [{
            type: Output,
            args: ['itemSelected']
        }], categorySelected: [{
            type: Output
        }], categories: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlEcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYXRlZ29yeS1kcm9wZG93bi9DYXRlZ29yeURyb3Bkb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE1BQU07QUFDTixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7OztJQVNyRCx3QkFBMEM7Ozs7SUFDMUMsNkJBQXFFO0lBQWpDLCtNQUE0QjtJQUFDLGlCQUFJOzs7O0lBSHpFLDhCQUNJO0lBQUEsZ0NBQ0E7SUFEd0Ysb09BQThDO0lBQXRJLGlCQUNBO0lBQUEscUZBQXNDO0lBQ3RDLHFGQUFpRTtJQUNyRSxpQkFBTTs7O0lBSGlCLGVBQW1EO0lBQW5ELCtFQUFtRCx3QkFBQTtJQUNoRCxlQUFlO0lBQWYscUNBQWU7SUFDaEIsZUFBYztJQUFkLG9DQUFjOzs7O0lBR25DLG9DQUNJO0lBRGdGLGtSQUE2QztJQUM3SCw0QkFBTTtJQUFBLFlBQW9EO0lBQUEsaUJBQU87SUFDckUsaUJBQVc7Ozs7SUFGb0Msa0RBQW9DO0lBQ3pFLGVBQW9EO0lBQXBELDRGQUFvRDs7O0lBUWxELG9DQUF3RjtJQUFBLFlBQW9CO0lBQUEsaUJBQVc7OztJQUEvQixlQUFvQjtJQUFwQix3Q0FBb0I7OztJQUM1RyxvQ0FBd0Y7SUFBQSxvQkFBd0M7SUFBQSxpQkFBVzs7O0lBQWhELGVBQWdDO0lBQWhDLHlE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IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE91dHNpZGVDbGljayB9IGZyb20gJy4uLy4uL3V0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhdGVnb3J5LWRyb3Bkb3duJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYnV0dG9uXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGFpbmVyXCIgKm5nSWY9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNhdGVnb3J5LWRyb3Bkb3duLXNlYXJjaFwiICpuZ0lmPVwic2VhcmNoXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1jYXRlZ29yeS1kcm9wZG93bi1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbcGxhY2Vob2xkZXJdPVwic2VhcmNoLnBsYWNlaG9sZGVyIHx8IGxhYmVscy5zZWFyY2hcIiBbdmFsdWVdPVwiX3F1ZXJ5XCIgKGlucHV0KT1cInF1ZXJ5Q2F0ZWdvcmllcygkZXZlbnQudGFyZ2V0LnZhbHVlKVwiLz5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1zZWFyY2hcIiAqbmdJZj1cIiFfcXVlcnlcIj48L2k+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktdGltZXNcIiAqbmdJZj1cIl9xdWVyeVwiIChjbGljayk9XCJjbGVhclF1ZXJ5KCRldmVudClcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxub3ZvLW5hdiB0aGVtZT1cIndoaXRlXCIgW291dGxldF09XCJub3ZvQ2F0ZWdvcnlEcm9wZG93bk91dGxldFwiIGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgPG5vdm8tdGFiICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBfY2F0ZWdvcmllc1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXRlZ29yeVwiIChhY3RpdmVDaGFuZ2UpPVwib25DYXRlZ29yeVNlbGVjdGVkKGNhdGVnb3J5KVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBjYXRlZ29yeSB9fSAoe3sgX2NhdGVnb3J5TWFwW2NhdGVnb3J5XS5sZW5ndGggfX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbm92by10YWI+XG4gICAgICAgICAgICA8L25vdm8tbmF2PlxuICAgICAgICAgICAgPG5vdm8tbmF2LW91dGxldCAjbm92b0NhdGVnb3J5RHJvcGRvd25PdXRsZXQ+XG4gICAgICAgICAgICAgICAgPG5vdm8tbmF2LWNvbnRlbnQgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIF9jYXRlZ29yaWVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QgZGlyZWN0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfY2F0ZWdvcnlNYXBbY2F0ZWdvcnldXCIgKGNsaWNrKT1cInNlbGVjdCgkZXZlbnQsIGl0ZW0pXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIml0ZW0ubGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50Pnt7IGl0ZW0ubGFiZWwgfX08L2l0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS1lbmQgY2xhc3M9XCJub3ZvLWNhdGVnb3J5LWRyb3Bkb3duLWhvdmVyXCIgKm5nSWY9XCJpdGVtLmhvdmVyVGV4dCAmJiAhaXRlbS5zZWxlY3RlZFwiPnt7IGl0ZW0uaG92ZXJUZXh0IH19PC9pdGVtLWVuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS1lbmQgY2xhc3M9XCJub3ZvLWNhdGVnb3J5LWRyb3Bkb3duLWhvdmVyXCIgKm5nSWY9XCJpdGVtLmhvdmVySWNvbiAmJiAhaXRlbS5zZWxlY3RlZFwiPjxpIGNsYXNzPVwiYmhpLXt7IGl0ZW0uaG92ZXJJY29uIH19XCI+PC9pPjwvaXRlbS1lbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0tZW5kICpuZ0lmPVwiaXRlbS5zZWxlY3RlZFwiPjxpIGNsYXNzPVwiYmhpLWNoZWNrXCI+PC9pPjwvaXRlbS1lbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tbGlzdC1pdGVtICpuZ0lmPVwiX2NhdGVnb3J5TWFwW2NhdGVnb3J5XS5sZW5ndGggPT09IDAgJiYgc2VhcmNoXCIgY2xhc3M9XCJub3ZvLWNhdGVnb3J5LWRyb3Bkb3duLWVtcHR5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50Pnt7IHNlYXJjaC5lbXB0eU1lc3NhZ2UgfHwgbGFiZWxzLm5vSXRlbXMgfX08L2l0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvbm92by1saXN0PlxuICAgICAgICAgICAgICAgIDwvbm92by1uYXYtY29udGVudD5cbiAgICAgICAgICAgIDwvbm92by1uYXYtb3V0bGV0PlxuICAgICAgICAgICAgPGZvb3RlciAqbmdJZj1cImZvb3RlclwiIGNsYXNzPVwibm92by1jYXRlZ29yeS1kcm9wZG93bi1mb290ZXItYWxpZ24te3sgZm9vdGVyLmFsaWduIHx8ICdyaWdodCcgfX1cIj5cbiAgICAgICAgICAgICAgICA8YSAqbmdGb3I9XCJsZXQgbGluayBvZiBmb290ZXIubGlua3NcIiAoY2xpY2spPVwiZXhlY3V0ZUNsaWNrQ2FsbGJhY2soJGV2ZW50LCBsaW5rKVwiPnt7IGxpbmsubGFiZWwgfX08L2E+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgaG9zdDoge1xuICAgICcoa2V5ZG93biknOiAnb25LZXlEb3duKCRldmVudCknLFxuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdhY3RpdmUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2F0ZWdvcnlEcm9wZG93bkVsZW1lbnQgZXh0ZW5kcyBPdXRzaWRlQ2xpY2sgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIF9xdWVyeTogc3RyaW5nID0gJyc7XG4gIF9jYXRlZ29yeU1hcDogYW55ID0ge307XG4gIF9jYXRlZ29yaWVzOiBzdHJpbmdbXSA9IFtdO1xuICBjbGlja0hhbmRsZXI6IEZ1bmN0aW9uO1xuICBfbWFzdGVyQ2F0ZWdvcnlNYXA6IGFueTtcbiAgX3F1ZXJ5VGltZW91dDogYW55O1xuICAvLyBCb29sZWFuIHRvIGtlZXAgdGhlIHNlbGVjdGlvbiBwZXJzaXN0IHdoZW4gY2xvc2luZyB0aGUgZHJvcGRvd25cbiAgQElucHV0KClcbiAgcGVyc2lzdFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBCb29sZWFuIHRvIGNsb3NlIHRoZSBkcm9wZG93biBvbiBzZWxlY3Rpb25cbiAgQElucHV0KClcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBTZWFyY2ggQ29uZmlnXG4gIC8vIHtcbiAgLy8gICBwbGFjZWhvbGRlcjogJ1NUUklORycgLy8gZGVmYXVsdHMgdG8gXCJTRUFSQ0hcIiAtIHBsYWNlaG9sZGVyIGZvciBzZWFyY2ggaW5wdXRcbiAgLy8gICBlbXB0eU1lc3NhZ2U6ICdTVFJJTkcnIC8vIGRlZmF1bHRzIHRvIFwiVGhlcmUgYXJlIG5vIGl0ZW1zLlwiIC0gZW1wdHkgbWVzc2FnZSB3aGVuIHRoZXJlIGFyZSBubyBpdGVtcyBpbiB0aGUgY2F0ZWdvcnlcbiAgLy8gICBkZWJvdW5jZTogJ05VTUJFUiAoaW4gTVMpJyAvLyBkZWZhdWx0cyB0byAzMDBtcyAtIGRlYm91bmNlIHRpbWUgZm9yIHRoZSBzZWFyY2hcbiAgLy8gICBjb21wYXJlOiAnRlVOQ1RJT04nIC8vIGRlZmF1bHQgdG8gc2ltcGxlIGluZGV4T2YgLSBjb21wYXJlIGZ1bmN0aW9uIGZvciBjYXRlZ29yeSBzZWFyY2gsIHNob3VsZCBhY2NlcHQgKHF1ZXJ5LCBpdGVtKSBhbmQgcmV0dXJuIHRydWUvZmFsc2VcbiAgLy8gfVxuICBASW5wdXQoKVxuICBzZWFyY2g6IGFueTtcbiAgLy8gRm9vdGVyIGNvbmZpZ1xuICAvLyB7XG4gIC8vICAgYWxpZ246ICdTVFJJTkcnIC8vIGRlZmF1bHRzIHRvIFwicmlnaHRcIiAtIGFsaWdubWVudCBvZiB0aGUgbGlua3NcbiAgLy8gICBsaW5rczogJ0FSUkFZJyAvLyBhcnJheSBvZiBsaW5rcyB0byBnbyBpbnRvIHRoZSBmb290ZXIsIGJlIGF3YXkgb2Ygc3BhY2luZyAtIHsgbGFiZWwsIGNhbGxiYWNrIH0gZm9yIHRoZSBvYmplY3QgaW5zaWRlXG4gIC8vIH1cbiAgQElucHV0KClcbiAgZm9vdGVyOiBhbnk7XG4gIC8vIEV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuZXZlciBhbiBpdGVtIGlzIHNlbGVjdGVkXG4gIEBPdXRwdXQoJ2l0ZW1TZWxlY3RlZCcpXG4gIF9zZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyBFdmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbmV2ZXIgYSBjYXRlZ29yeSBpcyBzZWxlY3RlZFxuICBAT3V0cHV0KClcbiAgY2F0ZWdvcnlTZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgY2F0ZWdvcmllcyhjYXRlZ29yaWVzOiBhbnkpIHtcbiAgICB0aGlzLl9tYXN0ZXJDYXRlZ29yeU1hcCA9IE9iamVjdC5hc3NpZ24oe30sIGNhdGVnb3JpZXMpO1xuICAgIHRoaXMuX2NhdGVnb3J5TWFwID0gT2JqZWN0LmFzc2lnbih7fSwgY2F0ZWdvcmllcyk7XG4gICAgdGhpcy5fY2F0ZWdvcmllcyA9IE9iamVjdC5rZXlzKGNhdGVnb3JpZXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gdGhpcy50b2dnbGVBY3RpdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgIGlmIChidXR0b24pIHtcbiAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUgJiYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVTQyB8fCBldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FTlRFUikpIHtcbiAgICAgIHRoaXMudG9nZ2xlQWN0aXZlKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5fY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgICAgdGhpcy5fY2F0ZWdvcnlNYXBbY2F0ZWdvcnldLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3QoZXZlbnQsIGl0ZW0pIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgLy8gSWYgd2UgcGVyc2lzdCB0aGUgc2VsZWN0aW9uLCBjbGVhciBhbmQgc2hvdyBhIGNoZWNrXG4gICAgaWYgKHRoaXMucGVyc2lzdFNlbGVjdGlvbikge1xuICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgaXRlbS5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIC8vIEVtaXQgdGhlIGl0ZW1cbiAgICB0aGlzLl9zZWxlY3QuZW1pdChpdGVtKTtcbiAgICAvLyBDbG9zZSwgaWYgaW5wdXQgaXMgc2V0XG4gICAgaWYgKHRoaXMuY2xvc2VPblNlbGVjdCkge1xuICAgICAgdGhpcy50b2dnbGVBY3RpdmUoKTtcbiAgICB9XG4gIH1cblxuICBvbkNhdGVnb3J5U2VsZWN0ZWQoY2F0ZWdvcnkpIHtcbiAgICB0aGlzLmNhdGVnb3J5U2VsZWN0ZWQuZW1pdChjYXRlZ29yeSk7XG4gIH1cblxuICBjbGVhclF1ZXJ5KGV2ZW50KSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuX3F1ZXJ5ID0gJyc7XG4gICAgLy8gUmVzZXQgdGhlIGNhdGVnb3JpZXNcbiAgICB0aGlzLl9jYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICB0aGlzLl9jYXRlZ29yeU1hcFtjYXRlZ29yeV0gPSB0aGlzLl9tYXN0ZXJDYXRlZ29yeU1hcFtjYXRlZ29yeV07XG4gICAgfSk7XG4gIH1cblxuICBxdWVyeUNhdGVnb3JpZXMocXVlcnkpIHtcbiAgICAvLyBTYXZlIHRoZSBxdWVyeVxuICAgIHRoaXMuX3F1ZXJ5ID0gcXVlcnk7XG4gICAgLy8gQ2hlY2sgdGltZW91dFxuICAgIGlmICh0aGlzLl9xdWVyeVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9xdWVyeVRpbWVvdXQpO1xuICAgIH1cbiAgICAvLyBTdG9yZSBhIHRpbWVvdXQsIHRvIGRlYm91bmNlIHVzZXIgaW5wdXRcbiAgICB0aGlzLl9xdWVyeVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2NhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoLmNvbXBhcmUpIHtcbiAgICAgICAgICB0aGlzLl9jYXRlZ29yeU1hcFtjYXRlZ29yeV0gPSB0aGlzLl9tYXN0ZXJDYXRlZ29yeU1hcFtjYXRlZ29yeV0uZmlsdGVyKChpdGVtKSA9PiB0aGlzLnNlYXJjaC5jb21wYXJlKHF1ZXJ5LCBpdGVtKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fY2F0ZWdvcnlNYXBbY2F0ZWdvcnldID0gdGhpcy5fbWFzdGVyQ2F0ZWdvcnlNYXBbY2F0ZWdvcnldLmZpbHRlcihcbiAgICAgICAgICAgIChpdGVtKSA9PiB+aXRlbS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkudG9Mb3dlckNhc2UoKSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgdGhpcy5zZWFyY2guZGVib3VuY2UgfHwgMzAwKTtcbiAgfVxuXG4gIGV4ZWN1dGVDbGlja0NhbGxiYWNrKGV2ZW50LCBsaW5rKSB7XG4gICAgbGluay5jYWxsYmFjayhldmVudCk7XG4gICAgLy8gQ2xvc2UsIGlmIGlucHV0IGlzIHNldFxuICAgIGlmICh0aGlzLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgIHRoaXMudG9nZ2xlQWN0aXZlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=