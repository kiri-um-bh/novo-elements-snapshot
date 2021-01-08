import { ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { NovoLabelService } from '../../../../services/novo-label-service';
import { Helpers } from '../../../../utils/Helpers';
import { NovoListElement } from '../../../list/List';
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/novo-label-service";
import * as i2 from "../../../list/List";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "../../../switch/Switch";
import * as i6 from "../../../loading/Loading";
const _c0 = ["input"];
const _c1 = ["list"];
function GroupedMultiPickerResults_novo_list_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 17);
    i0.ɵɵlistener("click", function GroupedMultiPickerResults_novo_list_item_2_Template_novo_list_item_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.selectCategory({ value: "all", label: "all" }); });
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
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", (ctx_r0.selectedCategory == null ? null : ctx_r0.selectedCategory.value) === "all")("disabled", ctx_r0.isLoading);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.labels.all);
} }
function GroupedMultiPickerResults_novo_list_item_3_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i");
} if (rf & 2) {
    const category_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMap(category_r13.iconClass);
} }
function GroupedMultiPickerResults_novo_list_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 20);
    i0.ɵɵlistener("click", function GroupedMultiPickerResults_novo_list_item_3_Template_novo_list_item_click_0_listener() { i0.ɵɵrestoreView(_r17); const category_r13 = ctx.$implicit; const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.selectCategory(category_r13); });
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
    const category_r13 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", (ctx_r1.selectedCategory == null ? null : ctx_r1.selectedCategory.value) === category_r13.value)("disabled", ctx_r1.isLoading);
    i0.ɵɵattribute("data-automation-id", category_r13.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", category_r13.iconClass);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r13.label);
} }
function GroupedMultiPickerResults_footer_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "footer", 22);
    i0.ɵɵelementStart(1, "novo-switch", 23);
    i0.ɵɵlistener("ngModelChange", function GroupedMultiPickerResults_footer_4_Template_novo_switch_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.customFilterValue = $event; })("onChange", function GroupedMultiPickerResults_footer_4_Template_novo_switch_onChange_1_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.fireCustomFilter($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 18);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", ctx_r2.isLoading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r2.customFilterValue);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.customFilterLabel);
} }
function GroupedMultiPickerResults_i_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 24);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", ctx_r4.isLoading);
} }
function GroupedMultiPickerResults_i_10_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 25);
    i0.ɵɵlistener("click", function GroupedMultiPickerResults_i_10_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.clearSearchTerm($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", ctx_r5.isLoading);
} }
function GroupedMultiPickerResults_novo_list_item_14_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 26);
    i0.ɵɵlistener("click", function GroupedMultiPickerResults_novo_list_item_14_Template_novo_list_item_click_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.selectMatch($event); })("mouseenter", function GroupedMultiPickerResults_novo_list_item_14_Template_novo_list_item_mouseenter_0_listener() { i0.ɵɵrestoreView(_r25); const match_r23 = ctx.$implicit; const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.selectActive(match_r23); });
    i0.ɵɵelementStart(1, "item-content");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const match_r23 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext();
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
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r8.labels.groupedMultiPickerEmpty, " ");
} }
function GroupedMultiPickerResults_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.labels.groupedMultiPickerSelectCategory, " ");
} }
function GroupedMultiPickerResults_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵelement(1, "novo-loading", 30);
    i0.ɵɵelementEnd();
} }
export class GroupedMultiPickerResults extends BasePickerResults {
    constructor(element, renderer, labels, ref) {
        super(element, ref);
        this.renderer = renderer;
        this.labels = labels;
        this.customFilterEnabled = false;
        this.placeholder = '';
        this.internalMap = new Map();
    }
    set term(value) {
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
        setTimeout(() => {
            this.inputElement.nativeElement.focus();
        });
    }
    get categories() {
        if (this.config.categories || this.config.categoryMap) {
            return (this.config.categories ||
                Array.from(this.config.categoryMap.values()).filter((category) => {
                    return category.value !== 'all';
                }));
        }
        return [];
    }
    ngOnInit() {
        // Subscribe to keyboard events and debounce
        this.keyboardSubscription = fromEvent(this.inputElement.nativeElement, 'keyup')
            .pipe(debounceTime(350), distinctUntilChanged())
            .subscribe((event) => {
            this.searchTerm = event.target.value;
            this.matches = this.filterData();
            this.ref.markForCheck();
        });
    }
    ngOnDestroy() {
        // Cleanup
        this.keyboardSubscription.unsubscribe();
    }
    setAllCategory() {
        // If we have display all, set the all categories up
        if (this.config.displayAll) {
            this.selectedCategory = { value: 'all', label: 'all' };
            const allItems = [];
            Array.from(this.config.categoryMap.values())
                .filter((category) => {
                return category.value !== 'all';
            })
                .forEach((v) => allItems.push(...v.items));
            this.matches = this.filter(allItems);
            this.config.categoryMap.set('all', { value: 'all', label: 'All', items: allItems });
            this.ref.markForCheck();
        }
    }
    selectCategory(category) {
        // Scroll to top
        this.renderer.setProperty(this.listElement.element.nativeElement, 'scrollTop', 0);
        // Set focus
        this.inputElement.nativeElement.focus();
        // Find new items
        const key = category.value;
        this.selectedCategory = category;
        // Clear
        this.matches = [];
        this.ref.markForCheck();
        // New matches
        this.getNewMatches(category, key);
    }
    clearSearchTerm(event) {
        Helpers.swallowEvent(event);
        this.searchTerm = '';
        this.selectCategory({ value: this.selectedCategory.value, label: this.selectedCategory.label });
        this.ref.markForCheck();
    }
    selectMatch(event, item) {
        // Set focus
        this.inputElement.nativeElement.focus();
        return super.selectMatch(event);
    }
    fireCustomFilter(value) {
        this.customFilterValue = value;
        // Clear cache map
        this.internalMap.clear();
        // Only fire if we have a selected category
        if (this.selectCategory) {
            // Find new items
            const key = this.selectedCategory.value;
            // Get new matches
            this.getNewMatches(this.selectedCategory, key);
            this.ref.markForCheck();
        }
        // Focus
        setTimeout(() => {
            this.inputElement.nativeElement.focus();
        });
    }
    filterData() {
        if (this.selectedCategory) {
            if (this.config.categoryMap) {
                return this.filter(this.config.categoryMap.get(this.selectedCategory.value).items);
            }
            else {
                return this.filter(this.internalMap.get(this.selectedCategory.value).items);
            }
        }
        return [];
    }
    getNewMatches(category, key) {
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
                this.config.getItemsForCategoryAsync(key, this.customFilterValue).then((items) => {
                    this.internalMap.set(key, { value: category.value, label: category.label, items });
                    this.matches = this.filter(items, true);
                    this.isLoading = false;
                    this.ref.markForCheck();
                    setTimeout(() => {
                        this.inputElement.nativeElement.focus();
                    });
                });
            }
            else {
                this.matches = this.filter(this.internalMap.get(key).items);
                this.ref.markForCheck();
            }
        }
    }
    filter(array, ignoreCustomFilter = false) {
        let matches = array;
        if (this.searchTerm && this.searchTerm.length !== 0 && this.selectedCategory) {
            matches = matches.filter((match) => {
                const searchTerm = this.searchTerm.toLowerCase();
                return match.label.toLowerCase().indexOf(searchTerm) > -1 || match.value.toLowerCase().indexOf(searchTerm) > -1;
            });
        }
        if (this.customFilterEnabled && this.config.customFilter.matchFunction && !ignoreCustomFilter) {
            matches = matches.filter((match) => this.config.customFilter.matchFunction(match, this.customFilterValue));
        }
        return matches;
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GroupedMultiPickerResults, [{
        type: Component,
        args: [{
                selector: 'grouped-multi-picker-results',
                template: `
    <div class="grouped-multi-picker-groups">
      <novo-list direction="vertical">
        <novo-list-item
          *ngIf="config.displayAll"
          (click)="selectCategory({ value: 'all', label: 'all' })"
          [class.active]="selectedCategory?.value === 'all'"
          data-automation-id="display-all"
          [class.disabled]="isLoading"
        >
          <item-content>
            <span data-automation-id="label">{{ labels.all }}</span>
          </item-content>
          <item-end>
            <i class="bhi-next"></i>
          </item-end>
        </novo-list-item>
        <novo-list-item
          *ngFor="let category of categories"
          (click)="selectCategory(category)"
          [class.active]="selectedCategory?.value === category.value"
          [attr.data-automation-id]="category.label"
          [class.disabled]="isLoading"
        >
          <item-content>
            <i *ngIf="category.iconClass" [class]="category.iconClass"></i>
            <span data-automation-id="label">{{ category.label }}</span>
          </item-content>
          <item-end>
            <i class="bhi-next"></i>
          </item-end>
        </novo-list-item>
      </novo-list>
      <footer
        class="grouped-multi-picker-groups-footer"
        *ngIf="customFilterEnabled"
        data-automation-id="footer"
        [class.disabled]="isLoading"
      >
        <novo-switch [(ngModel)]="customFilterValue" (onChange)="fireCustomFilter($event)" data-automation-id="switch"></novo-switch>
        <label data-automation-id="label">{{ customFilterLabel }}</label>
      </footer>
    </div>
    <div class="grouped-multi-picker-matches">
      <div class="grouped-multi-picker-input-container" [hidden]="!selectedCategory" data-automation-id="input-container">
        <input autofocus #input [(ngModel)]="searchTerm" [disabled]="isLoading" data-automation-id="input" [placeholder]="placeholder" />
        <i class="bhi-search" *ngIf="!searchTerm" [class.disabled]="isLoading" data-automation-id="seach-icon"></i>
        <i
          class="bhi-times"
          *ngIf="searchTerm"
          (click)="clearSearchTerm($event)"
          [class.disabled]="isLoading"
          data-automation-id="remove-icon"
        ></i>
      </div>
      <div class="grouped-multi-picker-list-container">
        <novo-list direction="vertical" #list>
          <novo-list-item
            *ngFor="let match of matches"
            (click)="selectMatch($event)"
            [class.active]="match === activeMatch"
            (mouseenter)="selectActive(match)"
            [class.disabled]="preselected(match) || isLoading"
            [attr.data-automation-id]="match.label"
          >
            <item-content>
              <span>{{ match.label }}</span>
            </item-content>
          </novo-list-item>
        </novo-list>
        <div
          class="grouped-multi-picker-no-results"
          *ngIf="matches.length === 0 && !isLoading && selectedCategory"
          data-automation-id="empty-message"
        >
          {{ labels.groupedMultiPickerEmpty }}
        </div>
        <div
          class="grouped-multi-picker-no-category"
          *ngIf="matches.length === 0 && !isLoading && !selectedCategory"
          data-automation-id="select-category-message"
        >
          {{ labels.groupedMultiPickerSelectCategory }}
        </div>
        <div class="grouped-multi-picker-loading" *ngIf="isLoading" data-automation-id="loading-message">
          <novo-loading theme="line"></novo-loading>
        </div>
      </div>
    </div>
  `,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NovoLabelService }, { type: i0.ChangeDetectorRef }]; }, { inputElement: [{
            type: ViewChild,
            args: ['input', { static: true }]
        }], listElement: [{
            type: ViewChild,
            args: ['list']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3BpY2tlci9leHRyYXMvZ3JvdXBlZC1tdWx0aS1waWNrZXItcmVzdWx0cy9Hcm91cGVkTXVsdGlQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFxQixTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7SUFPckUsMENBT0U7SUFMQSwyTkFBaUMsS0FBSyxTQUFTLEtBQUssT0FBSTtJQUt4RCxvQ0FDRTtJQUFBLGdDQUFpQztJQUFBLFlBQWdCO0lBQUEsaUJBQU87SUFDMUQsaUJBQWU7SUFDZixnQ0FDRTtJQUFBLHdCQUF3QjtJQUMxQixpQkFBVztJQUNiLGlCQUFpQjs7O0lBVmYsNEdBQWtELDhCQUFBO0lBS2YsZUFBZ0I7SUFBaEIsdUNBQWdCOzs7SUFjakQsb0JBQStEOzs7SUFBakMscUNBQTRCOzs7O0lBUjlELDBDQU9FO0lBTEEsdVFBQWtDO0lBS2xDLG9DQUNFO0lBQUEsd0ZBQTJEO0lBQzNE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SkFBd0I7UUFBaEQsaUJBQ0E7UUFBQSxzRUFBdUc7UUFDdkcseUVBTUM7UUFDSCxpQkFBTTtRQUNOLGdDQUNFO1FBQUEseUNBQ0U7UUFBQSxtR0FRRTtRQUlKLGlCQUFZO1FBQ1osNkVBS0U7UUFFRiw2RUFLRTtRQUVGLDZFQUNFO1FBRUosaUJBQU07UUFDUixpQkFBTTs7UUFwRkEsZUFBeUI7UUFBekIsNENBQXlCO1FBY3pCLGVBQW1DO1FBQW5DLHdDQUFtQztRQWlCckMsZUFBMkI7UUFBM0IsOENBQTJCO1FBU3FCLGVBQTRCO1FBQTVCLDhDQUE0QjtRQUNwRCxlQUF3QjtRQUF4Qix3Q0FBd0IsMkJBQUEsZ0NBQUE7UUFDMUIsZUFBbUI7UUFBbkIsc0NBQW1CO1FBR3ZDLGVBQWtCO1FBQWxCLHFDQUFrQjtRQVNoQixlQUE2QjtRQUE3QixxQ0FBNkI7UUFjL0IsZUFBOEQ7UUFBOUQseUZBQThEO1FBTzlELGVBQStEO1FBQS9ELDBGQUErRDtRQUt2QixlQUFpQjtRQUFqQixvQ0FBaUI7O2tEQU90RCx5QkFBeUI7Y0E3RnJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUZUO2FBQ0Y7b0pBR1MsWUFBWTtrQkFEbkIsU0FBUzttQkFBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBRzVCLFdBQVc7a0JBRGxCLFNBQVM7bUJBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MaXN0RWxlbWVudCB9IGZyb20gJy4uLy4uLy4uL2xpc3QvTGlzdCc7XG5pbXBvcnQgeyBCYXNlUGlja2VyUmVzdWx0cyB9IGZyb20gJy4uL2Jhc2UtcGlja2VyLXJlc3VsdHMvQmFzZVBpY2tlclJlc3VsdHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdncm91cGVkLW11bHRpLXBpY2tlci1yZXN1bHRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBlZC1tdWx0aS1waWNrZXItZ3JvdXBzXCI+XG4gICAgICA8bm92by1saXN0IGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAgICpuZ0lmPVwiY29uZmlnLmRpc3BsYXlBbGxcIlxuICAgICAgICAgIChjbGljayk9XCJzZWxlY3RDYXRlZ29yeSh7IHZhbHVlOiAnYWxsJywgbGFiZWw6ICdhbGwnIH0pXCJcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInNlbGVjdGVkQ2F0ZWdvcnk/LnZhbHVlID09PSAnYWxsJ1wiXG4gICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwiZGlzcGxheS1hbGxcIlxuICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJpc0xvYWRpbmdcIlxuICAgICAgICA+XG4gICAgICAgICAgPGl0ZW0tY29udGVudD5cbiAgICAgICAgICAgIDxzcGFuIGRhdGEtYXV0b21hdGlvbi1pZD1cImxhYmVsXCI+e3sgbGFiZWxzLmFsbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2l0ZW0tY29udGVudD5cbiAgICAgICAgICA8aXRlbS1lbmQ+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1uZXh0XCI+PC9pPlxuICAgICAgICAgIDwvaXRlbS1lbmQ+XG4gICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzXCJcbiAgICAgICAgICAoY2xpY2spPVwic2VsZWN0Q2F0ZWdvcnkoY2F0ZWdvcnkpXCJcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInNlbGVjdGVkQ2F0ZWdvcnk/LnZhbHVlID09PSBjYXRlZ29yeS52YWx1ZVwiXG4gICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhdGVnb3J5LmxhYmVsXCJcbiAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiaXNMb2FkaW5nXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICA8aSAqbmdJZj1cImNhdGVnb3J5Lmljb25DbGFzc1wiIFtjbGFzc109XCJjYXRlZ29yeS5pY29uQ2xhc3NcIj48L2k+XG4gICAgICAgICAgICA8c3BhbiBkYXRhLWF1dG9tYXRpb24taWQ9XCJsYWJlbFwiPnt7IGNhdGVnb3J5LmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICAgIDxpdGVtLWVuZD5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLW5leHRcIj48L2k+XG4gICAgICAgICAgPC9pdGVtLWVuZD5cbiAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgIDwvbm92by1saXN0PlxuICAgICAgPGZvb3RlclxuICAgICAgICBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLWdyb3Vwcy1mb290ZXJcIlxuICAgICAgICAqbmdJZj1cImN1c3RvbUZpbHRlckVuYWJsZWRcIlxuICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJmb290ZXJcIlxuICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiaXNMb2FkaW5nXCJcbiAgICAgID5cbiAgICAgICAgPG5vdm8tc3dpdGNoIFsobmdNb2RlbCldPVwiY3VzdG9tRmlsdGVyVmFsdWVcIiAob25DaGFuZ2UpPVwiZmlyZUN1c3RvbUZpbHRlcigkZXZlbnQpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwic3dpdGNoXCI+PC9ub3ZvLXN3aXRjaD5cbiAgICAgICAgPGxhYmVsIGRhdGEtYXV0b21hdGlvbi1pZD1cImxhYmVsXCI+e3sgY3VzdG9tRmlsdGVyTGFiZWwgfX08L2xhYmVsPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLW1hdGNoZXNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJncm91cGVkLW11bHRpLXBpY2tlci1pbnB1dC1jb250YWluZXJcIiBbaGlkZGVuXT1cIiFzZWxlY3RlZENhdGVnb3J5XCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dCBhdXRvZm9jdXMgI2lucHV0IFsobmdNb2RlbCldPVwic2VhcmNoVGVybVwiIFtkaXNhYmxlZF09XCJpc0xvYWRpbmdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJpbnB1dFwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIC8+XG4gICAgICAgIDxpIGNsYXNzPVwiYmhpLXNlYXJjaFwiICpuZ0lmPVwiIXNlYXJjaFRlcm1cIiBbY2xhc3MuZGlzYWJsZWRdPVwiaXNMb2FkaW5nXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwic2VhY2gtaWNvblwiPjwvaT5cbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzcz1cImJoaS10aW1lc1wiXG4gICAgICAgICAgKm5nSWY9XCJzZWFyY2hUZXJtXCJcbiAgICAgICAgICAoY2xpY2spPVwiY2xlYXJTZWFyY2hUZXJtKCRldmVudClcIlxuICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJpc0xvYWRpbmdcIlxuICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cInJlbW92ZS1pY29uXCJcbiAgICAgICAgPjwvaT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLWxpc3QtY29udGFpbmVyXCI+XG4gICAgICAgIDxub3ZvLWxpc3QgZGlyZWN0aW9uPVwidmVydGljYWxcIiAjbGlzdD5cbiAgICAgICAgICA8bm92by1saXN0LWl0ZW1cbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBtYXRjaGVzXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RNYXRjaCgkZXZlbnQpXCJcbiAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwibWF0Y2ggPT09IGFjdGl2ZU1hdGNoXCJcbiAgICAgICAgICAgIChtb3VzZWVudGVyKT1cInNlbGVjdEFjdGl2ZShtYXRjaClcIlxuICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cInByZXNlbGVjdGVkKG1hdGNoKSB8fCBpc0xvYWRpbmdcIlxuICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIm1hdGNoLmxhYmVsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICA8c3Bhbj57eyBtYXRjaC5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgIDwvbm92by1saXN0PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJncm91cGVkLW11bHRpLXBpY2tlci1uby1yZXN1bHRzXCJcbiAgICAgICAgICAqbmdJZj1cIm1hdGNoZXMubGVuZ3RoID09PSAwICYmICFpc0xvYWRpbmcgJiYgc2VsZWN0ZWRDYXRlZ29yeVwiXG4gICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwiZW1wdHktbWVzc2FnZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBsYWJlbHMuZ3JvdXBlZE11bHRpUGlja2VyRW1wdHkgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLW5vLWNhdGVnb3J5XCJcbiAgICAgICAgICAqbmdJZj1cIm1hdGNoZXMubGVuZ3RoID09PSAwICYmICFpc0xvYWRpbmcgJiYgIXNlbGVjdGVkQ2F0ZWdvcnlcIlxuICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cInNlbGVjdC1jYXRlZ29yeS1tZXNzYWdlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IGxhYmVscy5ncm91cGVkTXVsdGlQaWNrZXJTZWxlY3RDYXRlZ29yeSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwZWQtbXVsdGktcGlja2VyLWxvYWRpbmdcIiAqbmdJZj1cImlzTG9hZGluZ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cImxvYWRpbmctbWVzc2FnZVwiPlxuICAgICAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEdyb3VwZWRNdWx0aVBpY2tlclJlc3VsdHMgZXh0ZW5kcyBCYXNlUGlja2VyUmVzdWx0cyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwcml2YXRlIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbGlzdCcpXG4gIHByaXZhdGUgbGlzdEVsZW1lbnQ6IE5vdm9MaXN0RWxlbWVudDtcblxuICBwdWJsaWMgc2VsZWN0ZWRDYXRlZ29yeTogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH07XG4gIHB1YmxpYyBzZWFyY2hUZXJtOiBzdHJpbmc7XG4gIHB1YmxpYyBjdXN0b21GaWx0ZXJFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBjdXN0b21GaWx0ZXJMYWJlbDogc3RyaW5nO1xuICBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuXG4gIHByaXZhdGUga2V5Ym9hcmRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBpbnRlcm5hbE1hcDogTWFwPHN0cmluZywgeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBpdGVtczogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXSB9PiA9IG5ldyBNYXA8XG4gICAgc3RyaW5nLFxuICAgIHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgaXRlbXM6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9W10gfVxuICA+KCk7XG4gIHB1YmxpYyBjdXN0b21GaWx0ZXJWYWx1ZTogYW55O1xuXG4gIHNldCB0ZXJtKHZhbHVlKSB7XG4gICAgLy8gRGlzcGxheSBhbGwgb25seSB3aWxsIHdvcmsgZm9yIHN0YXRpYyBjYXRlZ29yaWVzXG4gICAgaWYgKHRoaXMuY29uZmlnLmRpc3BsYXlBbGwgJiYgdGhpcy5jb25maWcuZ2V0SXRlbXNGb3JDYXRlZ29yeUFzeW5jKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdbR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0c10gLSB5b3UgY2FuIG9ubHkgaGF2ZSBgZGlzcGxheUFsbGAgd2l0aCBhIHN0YXRpYyBgY2F0ZWdvcnlNYXBgLiBOb3QgYXZhaWxhYmxlIHdpdGggYGdldEl0ZW1zRm9yQ2F0ZWdvcnlBc3luY2AnLFxuICAgICAgKTtcbiAgICB9XG4gICAgLy8gQ3VzdG9tIGZpbHRlclxuICAgIGlmICh0aGlzLmNvbmZpZy5jdXN0b21GaWx0ZXIpIHtcbiAgICAgIHRoaXMuY3VzdG9tRmlsdGVyRW5hYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmN1c3RvbUZpbHRlckxhYmVsID0gdGhpcy5jb25maWcuY3VzdG9tRmlsdGVyLmxhYmVsO1xuICAgICAgdGhpcy5jdXN0b21GaWx0ZXJWYWx1ZSA9ICEhdGhpcy5jb25maWcuY3VzdG9tRmlsdGVyLmRlZmF1bHRGaWx0ZXJWYWx1ZTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgaWYgKCF0aGlzLmN1c3RvbUZpbHRlckxhYmVsIHx8ICF0aGlzLmNvbmZpZy5jdXN0b21GaWx0ZXIubWF0Y2hGdW5jdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tHcm91cGVkTXVsdGlQaWNrZXJSZXN1bHRzXSAtIGN1c3RvbSBmaWx0ZXIvbWF0Y2hGdW5jdGlvbiBzZXQgbm8gbGFiZWwgd2FzIHByb3ZpZGVkIScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1c3RvbUZpbHRlckVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gQ29uZmlndXJlIEFMTFxuICAgIGlmICh0aGlzLmNvbmZpZy5kaXNwbGF5QWxsICYmICF0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkpIHtcbiAgICAgIHRoaXMuc2V0QWxsQ2F0ZWdvcnkoKTtcbiAgICB9XG4gICAgLy8gUGxhY2Vob2xkZXJcbiAgICBpZiAodGhpcy5jb25maWcucGxhY2Vob2xkZXIpIHtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLmNvbmZpZy5wbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgLy8gRm9jdXNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBjYXRlZ29yaWVzKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5jYXRlZ29yaWVzIHx8IHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmNvbmZpZy5jYXRlZ29yaWVzIHx8XG4gICAgICAgIEFycmF5LmZyb20odGhpcy5jb25maWcuY2F0ZWdvcnlNYXAudmFsdWVzKCkpLmZpbHRlcigoY2F0ZWdvcnk6IHsgdmFsdWU6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNhdGVnb3J5LnZhbHVlICE9PSAnYWxsJztcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1lbnQsIHJlZik7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgLy8gU3Vic2NyaWJlIHRvIGtleWJvYXJkIGV2ZW50cyBhbmQgZGVib3VuY2VcbiAgICB0aGlzLmtleWJvYXJkU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMzUwKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc2VhcmNoVGVybSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuZmlsdGVyRGF0YSgpO1xuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIC8vIENsZWFudXBcbiAgICB0aGlzLmtleWJvYXJkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0QWxsQ2F0ZWdvcnkoKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBkaXNwbGF5IGFsbCwgc2V0IHRoZSBhbGwgY2F0ZWdvcmllcyB1cFxuICAgIGlmICh0aGlzLmNvbmZpZy5kaXNwbGF5QWxsKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgPSB7IHZhbHVlOiAnYWxsJywgbGFiZWw6ICdhbGwnIH07XG4gICAgICBjb25zdCBhbGxJdGVtcyA9IFtdO1xuICAgICAgQXJyYXkuZnJvbSh0aGlzLmNvbmZpZy5jYXRlZ29yeU1hcC52YWx1ZXMoKSlcbiAgICAgICAgLmZpbHRlcigoY2F0ZWdvcnk6IHsgdmFsdWU6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNhdGVnb3J5LnZhbHVlICE9PSAnYWxsJztcbiAgICAgICAgfSlcbiAgICAgICAgLmZvckVhY2goKHY6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgaXRlbXM6IGFueVtdIH0pID0+IGFsbEl0ZW1zLnB1c2goLi4udi5pdGVtcykpO1xuICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5maWx0ZXIoYWxsSXRlbXMpO1xuICAgICAgdGhpcy5jb25maWcuY2F0ZWdvcnlNYXAuc2V0KCdhbGwnLCB7IHZhbHVlOiAnYWxsJywgbGFiZWw6ICdBbGwnLCBpdGVtczogYWxsSXRlbXMgfSk7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Q2F0ZWdvcnkoY2F0ZWdvcnk6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9KTogdm9pZCB7XG4gICAgLy8gU2Nyb2xsIHRvIHRvcFxuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5saXN0RWxlbWVudC5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzY3JvbGxUb3AnLCAwKTtcbiAgICAvLyBTZXQgZm9jdXNcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgLy8gRmluZCBuZXcgaXRlbXNcbiAgICBjb25zdCBrZXk6IHN0cmluZyA9IGNhdGVnb3J5LnZhbHVlO1xuICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgIC8vIENsZWFyXG4gICAgdGhpcy5tYXRjaGVzID0gW107XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgLy8gTmV3IG1hdGNoZXNcbiAgICB0aGlzLmdldE5ld01hdGNoZXMoY2F0ZWdvcnksIGtleSk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJTZWFyY2hUZXJtKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuc2VhcmNoVGVybSA9ICcnO1xuICAgIHRoaXMuc2VsZWN0Q2F0ZWdvcnkoeyB2YWx1ZTogdGhpcy5zZWxlY3RlZENhdGVnb3J5LnZhbHVlLCBsYWJlbDogdGhpcy5zZWxlY3RlZENhdGVnb3J5LmxhYmVsIH0pO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdE1hdGNoKGV2ZW50PzogTW91c2VFdmVudCwgaXRlbT86IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9KTogYm9vbGVhbiB7XG4gICAgLy8gU2V0IGZvY3VzXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHJldHVybiBzdXBlci5zZWxlY3RNYXRjaChldmVudCk7XG4gIH1cblxuICBwdWJsaWMgZmlyZUN1c3RvbUZpbHRlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY3VzdG9tRmlsdGVyVmFsdWUgPSB2YWx1ZTtcbiAgICAvLyBDbGVhciBjYWNoZSBtYXBcbiAgICB0aGlzLmludGVybmFsTWFwLmNsZWFyKCk7XG4gICAgLy8gT25seSBmaXJlIGlmIHdlIGhhdmUgYSBzZWxlY3RlZCBjYXRlZ29yeVxuICAgIGlmICh0aGlzLnNlbGVjdENhdGVnb3J5KSB7XG4gICAgICAvLyBGaW5kIG5ldyBpdGVtc1xuICAgICAgY29uc3Qga2V5OiBzdHJpbmcgPSB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkudmFsdWU7XG4gICAgICAvLyBHZXQgbmV3IG1hdGNoZXNcbiAgICAgIHRoaXMuZ2V0TmV3TWF0Y2hlcyh0aGlzLnNlbGVjdGVkQ2F0ZWdvcnksIGtleSk7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgLy8gRm9jdXNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlckRhdGEoKTogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcih0aGlzLmNvbmZpZy5jYXRlZ29yeU1hcC5nZXQodGhpcy5zZWxlY3RlZENhdGVnb3J5LnZhbHVlKS5pdGVtcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXIodGhpcy5pbnRlcm5hbE1hcC5nZXQodGhpcy5zZWxlY3RlZENhdGVnb3J5LnZhbHVlKS5pdGVtcyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV3TWF0Y2hlcyhjYXRlZ29yeTogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0sIGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gR2V0IG5ldyBtYXRjaGVzXG4gICAgaWYgKHRoaXMuY29uZmlnLmNhdGVnb3J5TWFwKSB7XG4gICAgICB0aGlzLm1hdGNoZXMgPSB0aGlzLmZpbHRlcih0aGlzLmNvbmZpZy5jYXRlZ29yeU1hcC5nZXQoa2V5KS5pdGVtcyk7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5nZXRJdGVtc0ZvckNhdGVnb3J5QXN5bmMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdUaGUgXCJjb25maWdcIiBmb3IgdGhlIENoaXBzIG11c3QgaW5jbHVkZSBhIGZ1bmN0aW9uIFwiZ2V0SXRlbXNGb3JDYXRlZ29yeUFzeW5jKGNhdGVnb3J5S2V5OiBzdHJpbmcpXCIgdG8gcmV0cmlldmUgdGhlIGl0ZW1zIGJ5IGNhdGVnb3J5LiBPciBpZiB5b3UgaGF2ZSBzdGF0aWMgZGF0YSBwcm92aWRlIGEgXCJjYXRlZ29yeU1hcFwiJyxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5pbnRlcm5hbE1hcC5nZXQoa2V5KSkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuY29uZmlnLmdldEl0ZW1zRm9yQ2F0ZWdvcnlBc3luYyhrZXksIHRoaXMuY3VzdG9tRmlsdGVyVmFsdWUpLnRoZW4oKGl0ZW1zOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbnRlcm5hbE1hcC5zZXQoa2V5LCB7IHZhbHVlOiBjYXRlZ29yeS52YWx1ZSwgbGFiZWw6IGNhdGVnb3J5LmxhYmVsLCBpdGVtcyB9KTtcbiAgICAgICAgICB0aGlzLm1hdGNoZXMgPSB0aGlzLmZpbHRlcihpdGVtcywgdHJ1ZSk7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1hdGNoZXMgPSB0aGlzLmZpbHRlcih0aGlzLmludGVybmFsTWFwLmdldChrZXkpLml0ZW1zKTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXIoXG4gICAgYXJyYXk6IHsgdmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgZmlsdGVyVmFsdWU/OiBhbnkgfVtdLFxuICAgIGlnbm9yZUN1c3RvbUZpbHRlcjogYm9vbGVhbiA9IGZhbHNlLFxuICApOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdIHtcbiAgICBsZXQgbWF0Y2hlczogeyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBmaWx0ZXJWYWx1ZT86IGFueSB9W10gPSBhcnJheTtcbiAgICBpZiAodGhpcy5zZWFyY2hUZXJtICYmIHRoaXMuc2VhcmNoVGVybS5sZW5ndGggIT09IDAgJiYgdGhpcy5zZWxlY3RlZENhdGVnb3J5KSB7XG4gICAgICBtYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoKG1hdGNoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaFRlcm0gPSB0aGlzLnNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIG1hdGNoLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXJtKSA+IC0xIHx8IG1hdGNoLnZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXJtKSA+IC0xO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1c3RvbUZpbHRlckVuYWJsZWQgJiYgdGhpcy5jb25maWcuY3VzdG9tRmlsdGVyLm1hdGNoRnVuY3Rpb24gJiYgIWlnbm9yZUN1c3RvbUZpbHRlcikge1xuICAgICAgbWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKChtYXRjaCkgPT4gdGhpcy5jb25maWcuY3VzdG9tRmlsdGVyLm1hdGNoRnVuY3Rpb24obWF0Y2gsIHRoaXMuY3VzdG9tRmlsdGVyVmFsdWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cbn1cbiJdfQ==