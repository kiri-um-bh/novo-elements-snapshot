import { __extends, __read, __spread } from "tslib";
import { Component, ElementRef, ViewChild, Renderer2, ChangeDetectorRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import { Helpers } from '../../../../utils/Helpers';
import { NovoListElement } from '../../../list/List';
import { NovoLabelService } from '../../../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/novo-label-service";
import * as i2 from "../../../list/List";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "../../../switch/Switch";
import * as i6 from "../../../loading/Loading";
var _c0 = ["input"];
var _c1 = ["list"];
function GroupedMultiPickerResults_novo_list_item_2_Template(rf, ctx) { if (rf & 1) {
    var _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 17);
    i0.ɵɵlistener("click", function GroupedMultiPickerResults_novo_list_item_2_Template_novo_list_item_click_0_listener() { i0.ɵɵrestoreView(_r12); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.selectCategory({ value: "all", label: "all" }); });
    i0.ɵɵelementStart(1, "item-content");
    i0.ɵɵelementStart(2, "span", 18);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "item-end");
    i0.ɵɵelement(5, "i", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", (ctx_r0.selectedCategory == null ? null : ctx_r0.selectedCategory.value) === "all")("disabled", ctx_r0.isLoading);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.labels.all);
} }
function GroupedMultiPickerResults_novo_list_item_3_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i");
} if (rf & 2) {
    var category_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMap(category_r13.iconClass);
} }
function GroupedMultiPickerResults_novo_list_item_3_Template(rf, ctx) { if (rf & 1) {
    var _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 20);
    i0.ɵɵlistener("click", function GroupedMultiPickerResults_novo_list_item_3_Template_novo_list_item_click_0_listener() { i0.ɵɵrestoreView(_r17); var category_r13 = ctx.$implicit; var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.selectCategory(category_r13); });
    i0.ɵɵelementStart(1, "item-content");
    i0.ɵɵtemplate(2, GroupedMultiPickerResults_novo_list_item_3_i_2_Template, 1, 2, "i", 21);
    i0.ɵɵelementStart(3, "span", 18);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "item-end");
    i0.ɵɵelement(6, "i", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var category_r13 = ctx.$implicit;
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", (ctx_r1.selectedCategory == null ? null : ctx_r1.selectedCategory.value) === category_r13.value)("disabled", ctx_r1.isLoading);
    i0.ɵɵattribute("data-automation-id", category_r13.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", category_r13.iconClass);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r13.label);
} }
function GroupedMultiPickerResults_footer_4_Template(rf, ctx) { if (rf & 1) {
    var _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "footer", 22);
    i0.ɵɵelementStart(1, "novo-switch", 23);
    i0.ɵɵlistener("ngModelChange", function GroupedMultiPickerResults_footer_4_Template_novo_switch_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r19); var ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.customFilterValue = $event; })("onChange", function GroupedMultiPickerResults_footer_4_Template_novo_switch_onChange_1_listener($event) { i0.ɵɵrestoreView(_r19); var ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.fireCustomFilter($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 18);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", ctx_r2.isLoading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r2.customFilterValue);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.customFilterLabel);
} }
function GroupedMultiPickerResults_i_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 24);
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", ctx_r4.isLoading);
} }
function GroupedMultiPickerResults_i_10_Template(rf, ctx) { if (rf & 1) {
    var _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 25);
    i0.ɵɵlistener("click", function GroupedMultiPickerResults_i_10_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r22); var ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.clearSearchTerm($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", ctx_r5.isLoading);
} }
function GroupedMultiPickerResults_novo_list_item_14_Template(rf, ctx) { if (rf & 1) {
    var _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 26);
    i0.ɵɵlistener("click", function GroupedMultiPickerResults_novo_list_item_14_Template_novo_list_item_click_0_listener($event) { i0.ɵɵrestoreView(_r25); var ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.selectMatch($event); })("mouseenter", function GroupedMultiPickerResults_novo_list_item_14_Template_novo_list_item_mouseenter_0_listener() { i0.ɵɵrestoreView(_r25); var match_r23 = ctx.$implicit; var ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.selectActive(match_r23); });
    i0.ɵɵelementStart(1, "item-content");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var match_r23 = ctx.$implicit;
    var ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", match_r23 === ctx_r7.activeMatch)("disabled", ctx_r7.preselected(match_r23) || ctx_r7.isLoading);
    i0.ɵɵattribute("data-automation-id", match_r23.label);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(match_r23.label);
} }
function GroupedMultiPickerResults_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r8.labels.groupedMultiPickerEmpty, " ");
} }
function GroupedMultiPickerResults_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.labels.groupedMultiPickerSelectCategory, " ");
} }
function GroupedMultiPickerResults_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵelement(1, "novo-loading", 30);
    i0.ɵɵelementEnd();
} }
var GroupedMultiPickerResults = /** @class */ (function (_super) {
    __extends(GroupedMultiPickerResults, _super);
    function GroupedMultiPickerResults(element, renderer, labels, ref) {
        var _this = _super.call(this, element, ref) || this;
        _this.renderer = renderer;
        _this.labels = labels;
        _this.customFilterEnabled = false;
        _this.placeholder = '';
        _this.internalMap = new Map();
        return _this;
    }
    Object.defineProperty(GroupedMultiPickerResults.prototype, "term", {
        set: function (value) {
            var _this = this;
            // Display all only will work for static categories
            if (this.config.displayAll && this.config.getItemsForCategoryAsync) {
                throw new Error('[GroupedMultiPickerResults] - you can only have `displayAll` with a static `categoryMap`. Not available with `getItemsForCategoryAsync`');
            }
            // Custom filter
            if (this.config.customFilter) {
                this.customFilterEnabled = true;
                this.customFilterLabel = this.config.customFilter.label;
                this.customFilterValue = !!this.config.customFilter.defaultFilterValue;
                this.ref.markForCheck();
                if (!this.customFilterLabel || !this.config.customFilter.matchFunction) {
                    throw new Error('[GroupedMultiPickerResults] - custom filter/matchFunction set no label was provided!');
                }
            }
            else {
                this.customFilterEnabled = false;
            }
            // Configure ALL
            if (this.config.displayAll && !this.selectedCategory) {
                this.setAllCategory();
            }
            // Placeholder
            if (this.config.placeholder) {
                this.placeholder = this.config.placeholder;
            }
            // Focus
            setTimeout(function () {
                _this.inputElement.nativeElement.focus();
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupedMultiPickerResults.prototype, "categories", {
        get: function () {
            if (this.config.categories || this.config.categoryMap) {
                return (this.config.categories ||
                    Array.from(this.config.categoryMap.values()).filter(function (category) {
                        return category.value !== 'all';
                    }));
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    GroupedMultiPickerResults.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to keyboard events and debounce
        this.keyboardSubscription = fromEvent(this.inputElement.nativeElement, 'keyup')
            .pipe(debounceTime(350), distinctUntilChanged())
            .subscribe(function (event) {
            _this.searchTerm = event.target['value'];
            _this.matches = _this.filterData();
            _this.ref.markForCheck();
        });
    };
    GroupedMultiPickerResults.prototype.ngOnDestroy = function () {
        // Cleanup
        this.keyboardSubscription.unsubscribe();
    };
    GroupedMultiPickerResults.prototype.setAllCategory = function () {
        // If we have display all, set the all categories up
        if (this.config.displayAll) {
            this.selectedCategory = { value: 'all', label: 'all' };
            var allItems_1 = [];
            Array.from(this.config.categoryMap.values())
                .filter(function (category) {
                return category.value !== 'all';
            })
                .forEach(function (v) { return allItems_1.push.apply(allItems_1, __spread(v.items)); });
            this.matches = this.filter(allItems_1);
            this.config.categoryMap.set('all', { value: 'all', label: 'All', items: allItems_1 });
            this.ref.markForCheck();
        }
    };
    GroupedMultiPickerResults.prototype.selectCategory = function (category) {
        // Scroll to top
        this.renderer.setProperty(this.listElement.element.nativeElement, 'scrollTop', 0);
        // Set focus
        this.inputElement.nativeElement.focus();
        // Find new items
        var key = category.value;
        this.selectedCategory = category;
        // Clear
        this.matches = [];
        this.ref.markForCheck();
        // New matches
        this.getNewMatches(category, key);
    };
    GroupedMultiPickerResults.prototype.clearSearchTerm = function (event) {
        Helpers.swallowEvent(event);
        this.searchTerm = '';
        this.selectCategory({ value: this.selectedCategory.value, label: this.selectedCategory.label });
        this.ref.markForCheck();
    };
    GroupedMultiPickerResults.prototype.selectMatch = function (event, item) {
        // Set focus
        this.inputElement.nativeElement.focus();
        return _super.prototype.selectMatch.call(this, event);
    };
    GroupedMultiPickerResults.prototype.fireCustomFilter = function (value) {
        var _this = this;
        this.customFilterValue = value;
        // Clear cache map
        this.internalMap.clear();
        // Only fire if we have a selected category
        if (this.selectCategory) {
            // Find new items
            var key = this.selectedCategory.value;
            // Get new matches
            this.getNewMatches(this.selectedCategory, key);
            this.ref.markForCheck();
        }
        // Focus
        setTimeout(function () {
            _this.inputElement.nativeElement.focus();
        });
    };
    GroupedMultiPickerResults.prototype.filterData = function () {
        if (this.selectedCategory) {
            if (this.config.categoryMap) {
                return this.filter(this.config.categoryMap.get(this.selectedCategory.value).items);
            }
            else {
                return this.filter(this.internalMap.get(this.selectedCategory.value).items);
            }
        }
        return [];
    };
    GroupedMultiPickerResults.prototype.getNewMatches = function (category, key) {
        var _this = this;
        // Get new matches
        if (this.config.categoryMap) {
            this.matches = this.filter(this.config.categoryMap.get(key).items);
            this.ref.markForCheck();
        }
        else {
            if (!this.config.getItemsForCategoryAsync) {
                throw new Error('The "config" for the Chips must include a function "getItemsForCategoryAsync(categoryKey: string)" to retrieve the items by category. Or if you have static data provide a "categoryMap"');
            }
            if (!this.internalMap.get(key)) {
                this.isLoading = true;
                this.config.getItemsForCategoryAsync(key, this.customFilterValue).then(function (items) {
                    _this.internalMap.set(key, { value: category.value, label: category.label, items: items });
                    _this.matches = _this.filter(items, true);
                    _this.isLoading = false;
                    _this.ref.markForCheck();
                    setTimeout(function () {
                        _this.inputElement.nativeElement.focus();
                    });
                });
            }
            else {
                this.matches = this.filter(this.internalMap.get(key).items);
                this.ref.markForCheck();
            }
        }
    };
    GroupedMultiPickerResults.prototype.filter = function (array, ignoreCustomFilter) {
        var _this = this;
        if (ignoreCustomFilter === void 0) { ignoreCustomFilter = false; }
        var matches = array;
        if (this.searchTerm && this.searchTerm.length !== 0 && this.selectedCategory) {
            matches = matches.filter(function (match) {
                var searchTerm = _this.searchTerm.toLowerCase();
                return match.label.toLowerCase().indexOf(searchTerm) > -1 || match.value.toLowerCase().indexOf(searchTerm) > -1;
            });
        }
        if (this.customFilterEnabled && this.config.customFilter.matchFunction && !ignoreCustomFilter) {
            matches = matches.filter(function (match) { return _this.config.customFilter.matchFunction(match, _this.customFilterValue); });
        }
        return matches;
    };
    GroupedMultiPickerResults.ɵfac = function GroupedMultiPickerResults_Factory(t) { return new (t || GroupedMultiPickerResults)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    GroupedMultiPickerResults.ɵcmp = i0.ɵɵdefineComponent({ type: GroupedMultiPickerResults, selectors: [["grouped-multi-picker-results"]], viewQuery: function GroupedMultiPickerResults_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
            i0.ɵɵviewQuery(_c1, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listElement = _t.first);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 18, vars: 13, consts: [[1, "grouped-multi-picker-groups"], ["direction", "vertical"], ["data-automation-id", "display-all", 3, "active", "disabled", "click", 4, "ngIf"], [3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], ["class", "grouped-multi-picker-groups-footer", "data-automation-id", "footer", 3, "disabled", 4, "ngIf"], [1, "grouped-multi-picker-matches"], ["data-automation-id", "input-container", 1, "grouped-multi-picker-input-container", 3, "hidden"], ["autofocus", "", "data-automation-id", "input", 3, "ngModel", "disabled", "placeholder", "ngModelChange"], ["input", ""], ["class", "bhi-search", "data-automation-id", "seach-icon", 3, "disabled", 4, "ngIf"], ["class", "bhi-times", "data-automation-id", "remove-icon", 3, "disabled", "click", 4, "ngIf"], [1, "grouped-multi-picker-list-container"], ["list", ""], [3, "active", "disabled", "click", "mouseenter", 4, "ngFor", "ngForOf"], ["class", "grouped-multi-picker-no-results", "data-automation-id", "empty-message", 4, "ngIf"], ["class", "grouped-multi-picker-no-category", "data-automation-id", "select-category-message", 4, "ngIf"], ["class", "grouped-multi-picker-loading", "data-automation-id", "loading-message", 4, "ngIf"], ["data-automation-id", "display-all", 3, "click"], ["data-automation-id", "label"], [1, "bhi-next"], [3, "click"], [3, "class", 4, "ngIf"], ["data-automation-id", "footer", 1, "grouped-multi-picker-groups-footer"], ["data-automation-id", "switch", 3, "ngModel", "ngModelChange", "onChange"], ["data-automation-id", "seach-icon", 1, "bhi-search"], ["data-automation-id", "remove-icon", 1, "bhi-times", 3, "click"], [3, "click", "mouseenter"], ["data-automation-id", "empty-message", 1, "grouped-multi-picker-no-results"], ["data-automation-id", "select-category-message", 1, "grouped-multi-picker-no-category"], ["data-automation-id", "loading-message", 1, "grouped-multi-picker-loading"], ["theme", "line"]], template: function GroupedMultiPickerResults_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "novo-list", 1);
            i0.ɵɵtemplate(2, GroupedMultiPickerResults_novo_list_item_2_Template, 6, 5, "novo-list-item", 2);
            i0.ɵɵtemplate(3, GroupedMultiPickerResults_novo_list_item_3_Template, 7, 7, "novo-list-item", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, GroupedMultiPickerResults_footer_4_Template, 4, 4, "footer", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 5);
            i0.ɵɵelementStart(6, "div", 6);
            i0.ɵɵelementStart(7, "input", 7, 8);
            i0.ɵɵlistener("ngModelChange", function GroupedMultiPickerResults_Template_input_ngModelChange_7_listener($event) { return ctx.searchTerm = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, GroupedMultiPickerResults_i_9_Template, 1, 2, "i", 9);
            i0.ɵɵtemplate(10, GroupedMultiPickerResults_i_10_Template, 1, 2, "i", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 11);
            i0.ɵɵelementStart(12, "novo-list", 1, 12);
            i0.ɵɵtemplate(14, GroupedMultiPickerResults_novo_list_item_14_Template, 4, 6, "novo-list-item", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(15, GroupedMultiPickerResults_div_15_Template, 2, 1, "div", 14);
            i0.ɵɵtemplate(16, GroupedMultiPickerResults_div_16_Template, 2, 1, "div", 15);
            i0.ɵɵtemplate(17, GroupedMultiPickerResults_div_17_Template, 2, 0, "div", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.config.displayAll);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.categories);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.customFilterEnabled);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("hidden", !ctx.selectedCategory);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx.searchTerm)("disabled", ctx.isLoading)("placeholder", ctx.placeholder);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.searchTerm);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.searchTerm);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.matches);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.matches.length === 0 && !ctx.isLoading && ctx.selectedCategory);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.matches.length === 0 && !ctx.isLoading && !ctx.selectedCategory);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isLoading);
        } }, directives: [i2.NovoListElement, i3.NgIf, i3.NgForOf, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i2.NovoListItemElement, i2.NovoItemContentElement, i2.NovoItemEndElement, i5.NovoSwitchElement, i6.NovoLoadingElement], encapsulation: 2 });
    return GroupedMultiPickerResults;
}(BasePickerResults));
export { GroupedMultiPickerResults };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GroupedMultiPickerResults, [{
        type: Component,
        args: [{
                selector: 'grouped-multi-picker-results',
                template: "\n        <div class=\"grouped-multi-picker-groups\">\n            <novo-list direction=\"vertical\">\n                <novo-list-item\n                    *ngIf=\"config.displayAll\"\n                    (click)=\"selectCategory({ value: 'all', label: 'all' })\"\n                    [class.active]=\"selectedCategory?.value === 'all'\"\n                    data-automation-id=\"display-all\"\n                    [class.disabled]=\"isLoading\">\n                    <item-content>\n                        <span data-automation-id=\"label\">{{ labels.all }}</span>\n                    </item-content>\n                    <item-end>\n                        <i class=\"bhi-next\"></i>\n                    </item-end>\n                </novo-list-item>\n                <novo-list-item\n                    *ngFor=\"let category of categories\"\n                    (click)=\"selectCategory(category)\"\n                    [class.active]=\"selectedCategory?.value === category.value\"\n                    [attr.data-automation-id]=\"category.label\"\n                    [class.disabled]=\"isLoading\">\n                    <item-content>\n                        <i *ngIf=\"category.iconClass\" [class]=\"category.iconClass\"></i>\n                        <span data-automation-id=\"label\">{{ category.label }}</span>\n                    </item-content>\n                    <item-end>\n                        <i class=\"bhi-next\"></i>\n                    </item-end>\n                </novo-list-item>\n            </novo-list>\n            <footer class=\"grouped-multi-picker-groups-footer\" *ngIf=\"customFilterEnabled\" data-automation-id=\"footer\" [class.disabled]=\"isLoading\">\n                <novo-switch [(ngModel)]=\"customFilterValue\" (onChange)=\"fireCustomFilter($event)\" data-automation-id=\"switch\"></novo-switch>\n                <label data-automation-id=\"label\">{{ customFilterLabel }}</label>\n            </footer>\n        </div>\n        <div class=\"grouped-multi-picker-matches\">\n            <div class=\"grouped-multi-picker-input-container\" [hidden]=\"!selectedCategory\" data-automation-id=\"input-container\">\n                <input autofocus #input [(ngModel)]=\"searchTerm\" [disabled]=\"isLoading\" data-automation-id=\"input\" [placeholder]=\"placeholder\"/>\n                <i class=\"bhi-search\" *ngIf=\"!searchTerm\" [class.disabled]=\"isLoading\" data-automation-id=\"seach-icon\"></i>\n                <i class=\"bhi-times\" *ngIf=\"searchTerm\" (click)=\"clearSearchTerm($event)\" [class.disabled]=\"isLoading\" data-automation-id=\"remove-icon\"></i>\n            </div>\n            <div class=\"grouped-multi-picker-list-container\">\n                <novo-list direction=\"vertical\" #list>\n                    <novo-list-item\n                        *ngFor=\"let match of matches\"\n                        (click)=\"selectMatch($event)\"\n                        [class.active]=\"match === activeMatch\"\n                        (mouseenter)=\"selectActive(match)\"\n                        [class.disabled]=\"preselected(match) || isLoading\"\n                        [attr.data-automation-id]=\"match.label\">\n                        <item-content>\n                            <span>{{ match.label }}</span>\n                        </item-content>\n                    </novo-list-item>\n                </novo-list>\n                <div class=\"grouped-multi-picker-no-results\" *ngIf=\"matches.length === 0 && !isLoading && selectedCategory\" data-automation-id=\"empty-message\">\n                    {{ labels.groupedMultiPickerEmpty }}\n                </div>\n                <div class=\"grouped-multi-picker-no-category\" *ngIf=\"matches.length === 0 && !isLoading && !selectedCategory\" data-automation-id=\"select-category-message\">\n                    {{ labels.groupedMultiPickerSelectCategory }}\n                </div>\n                <div class=\"grouped-multi-picker-loading\" *ngIf=\"isLoading\" data-automation-id=\"loading-message\">\n                    <novo-loading theme=\"line\"></novo-loading>\n                </div>\n            </div>\n        </div>\n    ",
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NovoLabelService }, { type: i0.ChangeDetectorRef }]; }, { inputElement: [{
            type: ViewChild,
            args: ['input', { static: true }]
        }], listElement: [{
            type: ViewChild,
            args: ['list']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL2dyb3VwZWQtbXVsdGktcGlja2VyLXJlc3VsdHMvR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFxQixTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEgsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7Ozs7OztJQU8zRCwwQ0FNSTtJQUpBLHlOQUFpQyxLQUFLLFNBQVMsS0FBSyxPQUFJO0lBSXhELG9DQUNJO0lBQUEsZ0NBQWlDO0lBQUEsWUFBZ0I7SUFBQSxpQkFBTztJQUM1RCxpQkFBZTtJQUNmLGdDQUNJO0lBQUEsd0JBQXdCO0lBQzVCLGlCQUFXO0lBQ2YsaUJBQWlCOzs7SUFUYiw0R0FBa0QsOEJBQUE7SUFJYixlQUFnQjtJQUFoQix1Q0FBZ0I7OztJQWFqRCxvQkFBK0Q7OztJQUFqQyxxQ0FBNEI7Ozs7SUFQbEUsMENBTUk7SUFKQSxtUUFBa0M7SUFJbEMsb0NBQ0k7SUFBQSx3RkFBMkQ7SUFDM0QsZ0NBQWlDO0lBQUEsWUFBb0I7SUFBQSxpQkFBTztJQUNoRSxpQkFBZTtJQUNmLGdD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STtZQVFSLGlCQUFZO1lBQ1osZ0ZBQ0k7WUFHUixpQkFBTTtZQUNOLDhCQUNJO1lBQUEsOEJBQ0k7WUFBQSxtQ0FDQTtZQUR3QixzSkFBd0I7WUFBaEQsaUJBQ0E7WUFBQSxzRUFBdUc7WUFDdkcseUVBQXdJO1lBQzVJLGlCQUFNO1lBQ04sZ0NBQ0k7WUFBQSx5Q0FDSTtZQUFBLG1HQU9JO1lBSVIsaUJBQVk7WUFDWiw2RUFDSTtZQUVKLDZFQUNJO1lBRUosNkVBQ0k7WUFFUixpQkFBTTtZQUNWLGlCQUFNOztZQTlETSxlQUF5QjtZQUF6Qiw0Q0FBeUI7WUFhekIsZUFBbUM7WUFBbkMsd0NBQW1DO1lBY1EsZUFBMkI7WUFBM0IsOENBQTJCO1lBTTVCLGVBQTRCO1lBQTVCLDhDQUE0QjtZQUNsRCxlQUF3QjtZQUF4Qix3Q0FBd0IsMkJBQUEsZ0NBQUE7WUFDMUIsZUFBbUI7WUFBbkIsc0NBQW1CO1lBQ3BCLGVBQWtCO1lBQWxCLHFDQUFrQjtZQUsvQixlQUE2QjtZQUE3QixxQ0FBNkI7WUFXUSxlQUE4RDtZQUE5RCx5RkFBOEQ7WUFHN0QsZUFBK0Q7WUFBL0QsMEZBQStEO1lBR25FLGVBQWlCO1lBQWpCLG9DQUFpQjs7b0NBekUzRTtDQTZSQyxBQXBSRCxDQXVFK0MsaUJBQWlCLEdBNk0vRDtTQTdNWSx5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQXZFckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFFBQVEsRUFBRSx1a0lBbUVQO2FBQ0o7O2tCQUVFLFNBQVM7bUJBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRW5DLFNBQVM7bUJBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQsIE9uRGVzdHJveSwgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEJhc2VQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi4vYmFzZS1waWNrZXItcmVzdWx0cy9CYXNlUGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGlzdEVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi9saXN0L0xpc3QnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dyb3VwZWQtbXVsdGktcGlja2VyLXJlc3VsdHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItZ3JvdXBzXCI+XG4gICAgICAgICAgICA8bm92by1saXN0IGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgPG5vdm8tbGlzdC1pdGVtXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY29uZmlnLmRpc3BsYXlBbGxcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0Q2F0ZWdvcnkoeyB2YWx1ZTogJ2FsbCcsIGxhYmVsOiAnYWxsJyB9KVwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwic2VsZWN0ZWRDYXRlZ29yeT8udmFsdWUgPT09ICdhbGwnXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwiZGlzcGxheS1hbGxcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiaXNMb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWF1dG9tYXRpb24taWQ9XCJsYWJlbFwiPnt7IGxhYmVscy5hbGwgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS1lbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1uZXh0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2l0ZW0tZW5kPlxuICAgICAgICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgPG5vdm8tbGlzdC1pdGVtXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdENhdGVnb3J5KGNhdGVnb3J5KVwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwic2VsZWN0ZWRDYXRlZ29yeT8udmFsdWUgPT09IGNhdGVnb3J5LnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhdGVnb3J5LmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImlzTG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgKm5nSWY9XCJjYXRlZ29yeS5pY29uQ2xhc3NcIiBbY2xhc3NdPVwiY2F0ZWdvcnkuaWNvbkNsYXNzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1hdXRvbWF0aW9uLWlkPVwibGFiZWxcIj57eyBjYXRlZ29yeS5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxpdGVtLWVuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLW5leHRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvaXRlbS1lbmQ+XG4gICAgICAgICAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDwvbm92by1saXN0PlxuICAgICAgICAgICAgPGZvb3RlciBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLWdyb3Vwcy1mb290ZXJcIiAqbmdJZj1cImN1c3RvbUZpbHRlckVuYWJsZWRcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJmb290ZXJcIiBbY2xhc3MuZGlzYWJsZWRdPVwiaXNMb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgPG5vdm8tc3dpdGNoIFsobmdNb2RlbCldPVwiY3VzdG9tRmlsdGVyVmFsdWVcIiAob25DaGFuZ2UpPVwiZmlyZUN1c3RvbUZpbHRlcigkZXZlbnQpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwic3dpdGNoXCI+PC9ub3ZvLXN3aXRjaD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZGF0YS1hdXRvbWF0aW9uLWlkPVwibGFiZWxcIj57eyBjdXN0b21GaWx0ZXJMYWJlbCB9fTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncm91cGVkLW11bHRpLXBpY2tlci1tYXRjaGVzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItaW5wdXQtY29udGFpbmVyXCIgW2hpZGRlbl09XCIhc2VsZWN0ZWRDYXRlZ29yeVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBhdXRvZm9jdXMgI2lucHV0IFsobmdNb2RlbCldPVwic2VhcmNoVGVybVwiIFtkaXNhYmxlZF09XCJpc0xvYWRpbmdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJpbnB1dFwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiLz5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1zZWFyY2hcIiAqbmdJZj1cIiFzZWFyY2hUZXJtXCIgW2NsYXNzLmRpc2FibGVkXT1cImlzTG9hZGluZ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cInNlYWNoLWljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktdGltZXNcIiAqbmdJZj1cInNlYXJjaFRlcm1cIiAoY2xpY2spPVwiY2xlYXJTZWFyY2hUZXJtKCRldmVudClcIiBbY2xhc3MuZGlzYWJsZWRdPVwiaXNMb2FkaW5nXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwicmVtb3ZlLWljb25cIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cGVkLW11bHRpLXBpY2tlci1saXN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QgZGlyZWN0aW9uPVwidmVydGljYWxcIiAjbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPG5vdm8tbGlzdC1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgbWF0Y2ggb2YgbWF0Y2hlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0TWF0Y2goJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIm1hdGNoID09PSBhY3RpdmVNYXRjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJzZWxlY3RBY3RpdmUobWF0Y2gpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJwcmVzZWxlY3RlZChtYXRjaCkgfHwgaXNMb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJtYXRjaC5sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBtYXRjaC5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgIDwvbm92by1saXN0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cGVkLW11bHRpLXBpY2tlci1uby1yZXN1bHRzXCIgKm5nSWY9XCJtYXRjaGVzLmxlbmd0aCA9PT0gMCAmJiAhaXNMb2FkaW5nICYmIHNlbGVjdGVkQ2F0ZWdvcnlcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJlbXB0eS1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGxhYmVscy5ncm91cGVkTXVsdGlQaWNrZXJFbXB0eSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cGVkLW11bHRpLXBpY2tlci1uby1jYXRlZ29yeVwiICpuZ0lmPVwibWF0Y2hlcy5sZW5ndGggPT09IDAgJiYgIWlzTG9hZGluZyAmJiAhc2VsZWN0ZWRDYXRlZ29yeVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInNlbGVjdC1jYXRlZ29yeS1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGxhYmVscy5ncm91cGVkTXVsdGlQaWNrZXJTZWxlY3RDYXRlZ29yeSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cGVkLW11bHRpLXBpY2tlci1sb2FkaW5nXCIgKm5nSWY9XCJpc0xvYWRpbmdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJsb2FkaW5nLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5vdm8tbG9hZGluZyB0aGVtZT1cImxpbmVcIj48L25vdm8tbG9hZGluZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBHcm91cGVkTXVsdGlQaWNrZXJSZXN1bHRzIGV4dGVuZHMgQmFzZVBpY2tlclJlc3VsdHMgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHJpdmF0ZSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2xpc3QnKVxuICBwcml2YXRlIGxpc3RFbGVtZW50OiBOb3ZvTGlzdEVsZW1lbnQ7XG5cbiAgcHVibGljIHNlbGVjdGVkQ2F0ZWdvcnk6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9O1xuICBwdWJsaWMgc2VhcmNoVGVybTogc3RyaW5nO1xuICBwdWJsaWMgY3VzdG9tRmlsdGVyRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgY3VzdG9tRmlsdGVyTGFiZWw6IHN0cmluZztcbiAgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcblxuICBwcml2YXRlIGtleWJvYXJkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgaW50ZXJuYWxNYXA6IE1hcDxzdHJpbmcsIHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgaXRlbXM6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W10gfT4gPSBuZXcgTWFwPFxuICAgIHN0cmluZyxcbiAgICB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGl0ZW1zOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdIH1cbiAgPigpO1xuICBwdWJsaWMgY3VzdG9tRmlsdGVyVmFsdWU6IGFueTtcblxuICBzZXQgdGVybSh2YWx1ZSkge1xuICAgIC8vIERpc3BsYXkgYWxsIG9ubHkgd2lsbCB3b3JrIGZvciBzdGF0aWMgY2F0ZWdvcmllc1xuICAgIGlmICh0aGlzLmNvbmZpZy5kaXNwbGF5QWxsICYmIHRoaXMuY29uZmlnLmdldEl0ZW1zRm9yQ2F0ZWdvcnlBc3luYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnW0dyb3VwZWRNdWx0aVBpY2tlclJlc3VsdHNdIC0geW91IGNhbiBvbmx5IGhhdmUgYGRpc3BsYXlBbGxgIHdpdGggYSBzdGF0aWMgYGNhdGVnb3J5TWFwYC4gTm90IGF2YWlsYWJsZSB3aXRoIGBnZXRJdGVtc0ZvckNhdGVnb3J5QXN5bmNgJyxcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIEN1c3RvbSBmaWx0ZXJcbiAgICBpZiAodGhpcy5jb25maWcuY3VzdG9tRmlsdGVyKSB7XG4gICAgICB0aGlzLmN1c3RvbUZpbHRlckVuYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jdXN0b21GaWx0ZXJMYWJlbCA9IHRoaXMuY29uZmlnLmN1c3RvbUZpbHRlci5sYWJlbDtcbiAgICAgIHRoaXMuY3VzdG9tRmlsdGVyVmFsdWUgPSAhIXRoaXMuY29uZmlnLmN1c3RvbUZpbHRlci5kZWZhdWx0RmlsdGVyVmFsdWU7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIGlmICghdGhpcy5jdXN0b21GaWx0ZXJMYWJlbCB8fCAhdGhpcy5jb25maWcuY3VzdG9tRmlsdGVyLm1hdGNoRnVuY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0c10gLSBjdXN0b20gZmlsdGVyL21hdGNoRnVuY3Rpb24gc2V0IG5vIGxhYmVsIHdhcyBwcm92aWRlZCEnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXN0b21GaWx0ZXJFbmFibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIENvbmZpZ3VyZSBBTExcbiAgICBpZiAodGhpcy5jb25maWcuZGlzcGxheUFsbCAmJiAhdGhpcy5zZWxlY3RlZENhdGVnb3J5KSB7XG4gICAgICB0aGlzLnNldEFsbENhdGVnb3J5KCk7XG4gICAgfVxuICAgIC8vIFBsYWNlaG9sZGVyXG4gICAgaWYgKHRoaXMuY29uZmlnLnBsYWNlaG9sZGVyKSB7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5jb25maWcucGxhY2Vob2xkZXI7XG4gICAgfVxuICAgIC8vIEZvY3VzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgY2F0ZWdvcmllcygpIHtcbiAgICBpZiAodGhpcy5jb25maWcuY2F0ZWdvcmllcyB8fCB0aGlzLmNvbmZpZy5jYXRlZ29yeU1hcCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5jb25maWcuY2F0ZWdvcmllcyB8fFxuICAgICAgICBBcnJheS5mcm9tKHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwLnZhbHVlcygpKS5maWx0ZXIoKGNhdGVnb3J5OiB7IHZhbHVlOiBzdHJpbmcgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiBjYXRlZ29yeS52YWx1ZSAhPT0gJ2FsbCc7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50LCByZWYpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIC8vIFN1YnNjcmliZSB0byBrZXlib2FyZCBldmVudHMgYW5kIGRlYm91bmNlXG4gICAgdGhpcy5rZXlib2FyZFN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAna2V5dXAnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgzNTApLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5zZWFyY2hUZXJtID0gZXZlbnQudGFyZ2V0Wyd2YWx1ZSddO1xuICAgICAgICB0aGlzLm1hdGNoZXMgPSB0aGlzLmZpbHRlckRhdGEoKTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBDbGVhbnVwXG4gICAgdGhpcy5rZXlib2FyZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIHNldEFsbENhdGVnb3J5KCkge1xuICAgIC8vIElmIHdlIGhhdmUgZGlzcGxheSBhbGwsIHNldCB0aGUgYWxsIGNhdGVnb3JpZXMgdXBcbiAgICBpZiAodGhpcy5jb25maWcuZGlzcGxheUFsbCkge1xuICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0geyB2YWx1ZTogJ2FsbCcsIGxhYmVsOiAnYWxsJyB9O1xuICAgICAgY29uc3QgYWxsSXRlbXMgPSBbXTtcbiAgICAgIEFycmF5LmZyb20odGhpcy5jb25maWcuY2F0ZWdvcnlNYXAudmFsdWVzKCkpXG4gICAgICAgIC5maWx0ZXIoKGNhdGVnb3J5OiB7IHZhbHVlOiBzdHJpbmcgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiBjYXRlZ29yeS52YWx1ZSAhPT0gJ2FsbCc7XG4gICAgICAgIH0pXG4gICAgICAgIC5mb3JFYWNoKCh2OiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGl0ZW1zOiBhbnlbXSB9KSA9PiBhbGxJdGVtcy5wdXNoKC4uLnYuaXRlbXMpKTtcbiAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuZmlsdGVyKGFsbEl0ZW1zKTtcbiAgICAgIHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwLnNldCgnYWxsJywgeyB2YWx1ZTogJ2FsbCcsIGxhYmVsOiAnQWxsJywgaXRlbXM6IGFsbEl0ZW1zIH0pO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNlbGVjdENhdGVnb3J5KGNhdGVnb3J5OiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfSk6IHZvaWQge1xuICAgIC8vIFNjcm9sbCB0byB0b3BcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMubGlzdEVsZW1lbnQuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsVG9wJywgMCk7XG4gICAgLy8gU2V0IGZvY3VzXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIC8vIEZpbmQgbmV3IGl0ZW1zXG4gICAgY29uc3Qga2V5OiBzdHJpbmcgPSBjYXRlZ29yeS52YWx1ZTtcbiAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAvLyBDbGVhclxuICAgIHRoaXMubWF0Y2hlcyA9IFtdO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIC8vIE5ldyBtYXRjaGVzXG4gICAgdGhpcy5nZXROZXdNYXRjaGVzKGNhdGVnb3J5LCBrZXkpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyU2VhcmNoVGVybShldmVudDogTW91c2VFdmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLnNlYXJjaFRlcm0gPSAnJztcbiAgICB0aGlzLnNlbGVjdENhdGVnb3J5KHsgdmFsdWU6IHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS52YWx1ZSwgbGFiZWw6IHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS5sYWJlbCB9KTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RNYXRjaChldmVudD86IE1vdXNlRXZlbnQsIGl0ZW0/OiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfSk6IGJvb2xlYW4ge1xuICAgIC8vIFNldCBmb2N1c1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0TWF0Y2goZXZlbnQpO1xuICB9XG5cbiAgcHVibGljIGZpcmVDdXN0b21GaWx0ZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmN1c3RvbUZpbHRlclZhbHVlID0gdmFsdWU7XG4gICAgLy8gQ2xlYXIgY2FjaGUgbWFwXG4gICAgdGhpcy5pbnRlcm5hbE1hcC5jbGVhcigpO1xuICAgIC8vIE9ubHkgZmlyZSBpZiB3ZSBoYXZlIGEgc2VsZWN0ZWQgY2F0ZWdvcnlcbiAgICBpZiAodGhpcy5zZWxlY3RDYXRlZ29yeSkge1xuICAgICAgLy8gRmluZCBuZXcgaXRlbXNcbiAgICAgIGNvbnN0IGtleTogc3RyaW5nID0gdGhpcy5zZWxlY3RlZENhdGVnb3J5LnZhbHVlO1xuICAgICAgLy8gR2V0IG5ldyBtYXRjaGVzXG4gICAgICB0aGlzLmdldE5ld01hdGNoZXModGhpcy5zZWxlY3RlZENhdGVnb3J5LCBrZXkpO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIC8vIEZvY3VzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJEYXRhKCk6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W10ge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkpIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5jYXRlZ29yeU1hcCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXIodGhpcy5jb25maWcuY2F0ZWdvcnlNYXAuZ2V0KHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS52YWx1ZSkuaXRlbXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKHRoaXMuaW50ZXJuYWxNYXAuZ2V0KHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS52YWx1ZSkuaXRlbXMpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBwcml2YXRlIGdldE5ld01hdGNoZXMoY2F0ZWdvcnk6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9LCBrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIEdldCBuZXcgbWF0Y2hlc1xuICAgIGlmICh0aGlzLmNvbmZpZy5jYXRlZ29yeU1hcCkge1xuICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5maWx0ZXIodGhpcy5jb25maWcuY2F0ZWdvcnlNYXAuZ2V0KGtleSkuaXRlbXMpO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5jb25maWcuZ2V0SXRlbXNGb3JDYXRlZ29yeUFzeW5jKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnVGhlIFwiY29uZmlnXCIgZm9yIHRoZSBDaGlwcyBtdXN0IGluY2x1ZGUgYSBmdW5jdGlvbiBcImdldEl0ZW1zRm9yQ2F0ZWdvcnlBc3luYyhjYXRlZ29yeUtleTogc3RyaW5nKVwiIHRvIHJldHJpZXZlIHRoZSBpdGVtcyBieSBjYXRlZ29yeS4gT3IgaWYgeW91IGhhdmUgc3RhdGljIGRhdGEgcHJvdmlkZSBhIFwiY2F0ZWdvcnlNYXBcIicsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuaW50ZXJuYWxNYXAuZ2V0KGtleSkpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbmZpZy5nZXRJdGVtc0ZvckNhdGVnb3J5QXN5bmMoa2V5LCB0aGlzLmN1c3RvbUZpbHRlclZhbHVlKS50aGVuKChpdGVtczogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXSkgPT4ge1xuICAgICAgICAgIHRoaXMuaW50ZXJuYWxNYXAuc2V0KGtleSwgeyB2YWx1ZTogY2F0ZWdvcnkudmFsdWUsIGxhYmVsOiBjYXRlZ29yeS5sYWJlbCwgaXRlbXMgfSk7XG4gICAgICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5maWx0ZXIoaXRlbXMsIHRydWUpO1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5maWx0ZXIodGhpcy5pbnRlcm5hbE1hcC5nZXQoa2V5KS5pdGVtcyk7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyKFxuICAgIGFycmF5OiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGZpbHRlclZhbHVlPzogYW55IH1bXSxcbiAgICBpZ25vcmVDdXN0b21GaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZSxcbiAgKTogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXSB7XG4gICAgbGV0IG1hdGNoZXM6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgZmlsdGVyVmFsdWU/OiBhbnkgfVtdID0gYXJyYXk7XG4gICAgaWYgKHRoaXMuc2VhcmNoVGVybSAmJiB0aGlzLnNlYXJjaFRlcm0ubGVuZ3RoICE9PSAwICYmIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSkge1xuICAgICAgbWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKChtYXRjaCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2hUZXJtID0gdGhpcy5zZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBtYXRjaC5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGVybSkgPiAtMSB8fCBtYXRjaC52YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGVybSkgPiAtMTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXN0b21GaWx0ZXJFbmFibGVkICYmIHRoaXMuY29uZmlnLmN1c3RvbUZpbHRlci5tYXRjaEZ1bmN0aW9uICYmICFpZ25vcmVDdXN0b21GaWx0ZXIpIHtcbiAgICAgIG1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlcigobWF0Y2gpID0+IHRoaXMuY29uZmlnLmN1c3RvbUZpbHRlci5tYXRjaEZ1bmN0aW9uKG1hdGNoLCB0aGlzLmN1c3RvbUZpbHRlclZhbHVlKSk7XG4gICAgfVxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG59XG4iXX0=