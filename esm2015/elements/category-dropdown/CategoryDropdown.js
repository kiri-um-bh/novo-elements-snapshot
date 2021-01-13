// NG2
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { NovoLabelService } from '../../services/novo-label-service';
import { Helpers } from '../../utils/Helpers';
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
// APP
import { OutsideClick } from '../../utils/outside-click/OutsideClick';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "@angular/common";
import * as i3 from "../tabs/Tabs";
import * as i4 from "../list/List";
function NovoCategoryDropdownElement_div_1_div_1_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 12);
} }
function NovoCategoryDropdownElement_div_1_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 13);
    i0.ɵɵlistener("click", function NovoCategoryDropdownElement_div_1_div_1_i_3_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(3); return ctx_r8.clearQuery($event); });
    i0.ɵɵelementEnd();
} }
function NovoCategoryDropdownElement_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "input", 9);
    i0.ɵɵlistener("input", function NovoCategoryDropdownElement_div_1_div_1_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.queryCategories($event.target.value); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, NovoCategoryDropdownElement_div_1_div_1_i_2_Template, 1, 0, "i", 10);
    i0.ɵɵtemplate(3, NovoCategoryDropdownElement_div_1_div_1_i_3_Template, 1, 0, "i", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", ctx_r1.search.placeholder || ctx_r1.labels.search)("value", ctx_r1._query);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1._query);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1._query);
} }
function NovoCategoryDropdownElement_div_1_novo_tab_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-tab", 14);
    i0.ɵɵlistener("activeChange", function NovoCategoryDropdownElement_div_1_novo_tab_3_Template_novo_tab_activeChange_0_listener() { i0.ɵɵrestoreView(_r14); const category_r12 = ctx.$implicit; const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.onCategorySelected(category_r12); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const category_r12 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("data-automation-id", category_r12);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", category_r12, " (", ctx_r2._categoryMap[category_r12].length, ")");
} }
function NovoCategoryDropdownElement_div_1_novo_nav_content_6_novo_list_item_2_item_end_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "item-end", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r18.hoverText);
} }
function NovoCategoryDropdownElement_div_1_novo_nav_content_6_novo_list_item_2_item_end_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "item-end", 21);
    i0.ɵɵelement(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("bhi-", item_r18.hoverIcon, "");
} }
function NovoCategoryDropdownElement_div_1_novo_nav_content_6_novo_list_item_2_item_end_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "item-end");
    i0.ɵɵelement(1, "i", 22);
    i0.ɵɵelementEnd();
} }
function NovoCategoryDropdownElement_div_1_novo_nav_content_6_novo_list_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 18);
    i0.ɵɵlistener("click", function NovoCategoryDropdownElement_div_1_novo_nav_content_6_novo_list_item_2_Template_novo_list_item_click_0_listener($event) { i0.ɵɵrestoreView(_r25); const item_r18 = ctx.$implicit; const ctx_r24 = i0.ɵɵnextContext(3); return ctx_r24.select($event, item_r18); });
    i0.ɵɵelementStart(1, "item-content");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, NovoCategoryDropdownElement_div_1_novo_nav_content_6_novo_list_item_2_item_end_3_Template, 2, 1, "item-end", 19);
    i0.ɵɵtemplate(4, NovoCategoryDropdownElement_div_1_novo_nav_content_6_novo_list_item_2_item_end_4_Template, 2, 3, "item-end", 19);
    i0.ɵɵtemplate(5, NovoCategoryDropdownElement_div_1_novo_nav_content_6_novo_list_item_2_item_end_5_Template, 2, 0, "item-end", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
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
    const ctx_r17 = i0.ɵɵnextContext(3);
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
    const category_r15 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4._categoryMap[category_r15]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4._categoryMap[category_r15].length === 0 && ctx_r4.search);
} }
function NovoCategoryDropdownElement_div_1_footer_7_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 18);
    i0.ɵɵlistener("click", function NovoCategoryDropdownElement_div_1_footer_7_a_1_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r29); const link_r27 = ctx.$implicit; const ctx_r28 = i0.ɵɵnextContext(3); return ctx_r28.executeClickCallback($event, link_r27); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const link_r27 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(link_r27.label);
} }
function NovoCategoryDropdownElement_div_1_footer_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "footer");
    i0.ɵɵtemplate(1, NovoCategoryDropdownElement_div_1_footer_7_a_1_Template, 2, 1, "a", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
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
    const _r3 = i0.ɵɵreference(5);
    const ctx_r0 = i0.ɵɵnextContext();
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
const _c0 = [[["button"]]];
const _c1 = ["button"];
export class NovoCategoryDropdownElement extends OutsideClick {
    constructor(element, labels) {
        super(element);
        this.labels = labels;
        this._query = '';
        this._categoryMap = {};
        this._categories = [];
        // Boolean to keep the selection persist when closing the dropdown
        this.persistSelection = false;
        // Boolean to close the dropdown on selection
        this.closeOnSelect = false;
        // Event that is emitted whenever an item is selected
        this._select = new EventEmitter();
        // Event that is emitted whenever a category is selected
        this.categorySelected = new EventEmitter();
        this.clickHandler = this.toggleActive.bind(this);
    }
    set categories(categories) {
        this._masterCategoryMap = Object.assign({}, categories);
        this._categoryMap = Object.assign({}, categories);
        this._categories = Object.keys(categories);
    }
    ngOnInit() {
        const button = this.element.nativeElement.querySelector('button');
        button.addEventListener('click', this.clickHandler);
    }
    ngOnDestroy() {
        const button = this.element.nativeElement.querySelector('button');
        if (button) {
            button.removeEventListener('click', this.clickHandler);
        }
    }
    onKeyDown(event) {
        if (this.active && (event.keyCode === KeyCodes.ESC || event.keyCode === KeyCodes.ENTER)) {
            this.toggleActive();
        }
    }
    clearSelection() {
        this._categories.forEach((category) => {
            this._categoryMap[category].forEach((item) => {
                item.selected = false;
            });
        });
    }
    select(event, item) {
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
    }
    onCategorySelected(category) {
        this.categorySelected.emit(category);
    }
    clearQuery(event) {
        Helpers.swallowEvent(event);
        this._query = '';
        // Reset the categories
        this._categories.forEach((category) => {
            this._categoryMap[category] = this._masterCategoryMap[category];
        });
    }
    queryCategories(query) {
        // Save the query
        this._query = query;
        // Check timeout
        if (this._queryTimeout) {
            clearTimeout(this._queryTimeout);
        }
        // Store a timeout, to debounce user input
        this._queryTimeout = setTimeout(() => {
            this._categories.forEach((category) => {
                if (this.search.compare) {
                    this._categoryMap[category] = this._masterCategoryMap[category].filter((item) => this.search.compare(query, item));
                }
                else {
                    this._categoryMap[category] = this._masterCategoryMap[category].filter((item) => ~item.label.toLowerCase().indexOf(query.toLowerCase()));
                }
            });
        }, this.search.debounce || 300);
    }
    executeClickCallback(event, link) {
        link.callback(event);
        // Close, if input is set
        if (this.closeOnSelect) {
            this.toggleActive();
        }
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCategoryDropdownElement, [{
        type: Component,
        args: [{
                selector: 'novo-category-dropdown',
                template: `
    <ng-content select="button"></ng-content>
    <div class="dropdown-container" *ngIf="active">
      <div class="novo-category-dropdown-search" *ngIf="search" data-automation-id="novo-category-dropdown-search">
        <input
          type="text"
          [placeholder]="search.placeholder || labels.search"
          [value]="_query"
          (input)="queryCategories($event.target.value)"
        />
        <i class="bhi-search" *ngIf="!_query"></i>
        <i class="bhi-times" *ngIf="_query" (click)="clearQuery($event)"></i>
      </div>
      <novo-nav theme="white" [outlet]="novoCategoryDropdownOutlet" direction="vertical">
        <novo-tab *ngFor="let category of _categories" [attr.data-automation-id]="category" (activeChange)="onCategorySelected(category)">
          <span>{{ category }} ({{ _categoryMap[category].length }})</span>
        </novo-tab>
      </novo-nav>
      <novo-nav-outlet #novoCategoryDropdownOutlet>
        <novo-nav-content *ngFor="let category of _categories">
          <novo-list direction="vertical">
            <novo-list-item
              *ngFor="let item of _categoryMap[category]"
              (click)="select($event, item)"
              [attr.data-automation-id]="item.label"
            >
              <item-content>{{ item.label }}</item-content>
              <item-end class="novo-category-dropdown-hover" *ngIf="item.hoverText && !item.selected">{{ item.hoverText }}</item-end>
              <item-end class="novo-category-dropdown-hover" *ngIf="item.hoverIcon && !item.selected"
                ><i class="bhi-{{ item.hoverIcon }}"></i
              ></item-end>
              <item-end *ngIf="item.selected"><i class="bhi-check"></i></item-end>
            </novo-list-item>
            <novo-list-item *ngIf="_categoryMap[category].length === 0 && search" class="novo-category-dropdown-empty-item">
              <item-content>{{ search.emptyMessage || labels.noItems }}</item-content>
            </novo-list-item>
          </novo-list>
        </novo-nav-content>
      </novo-nav-outlet>
      <footer *ngIf="footer" class="novo-category-dropdown-footer-align-{{ footer.align || 'right' }}">
        <a *ngFor="let link of footer.links" (click)="executeClickCallback($event, link)">{{ link.label }}</a>
      </footer>
    </div>
  `,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlEcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhdGVnb3J5LWRyb3Bkb3duL0NhdGVnb3J5RHJvcGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE1BQU07QUFDTixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7Ozs7Ozs7SUFjOUQsd0JBQTBDOzs7O0lBQzFDLDZCQUFxRTtJQUFqQyxpTkFBNEI7SUFBQyxpQkFBSTs7OztJQVJ2RSw4QkFDRTtJQUFBLGdDQU1BO0lBRkUsc09BQThDO0lBSmhELGlCQU1BO0lBQUEscUZBQXNDO0lBQ3RDLHFGQUFpRTtJQUNuRSxpQkFBTTs7O0lBTkYsZUFBbUQ7SUFBbkQsK0VBQW1ELHdCQUFBO0lBSS9CLGVBQWU7SUFBZixxQ0FBZTtJQUNoQixlQUFjO0lBQWQsb0NBQWM7Ozs7SUFHbkMsb0NBQ0U7SUFEa0Ysc1JBQTZDO0lBQy9ILDRCQUFNO0lBQUEsWUFBb0Q7SUFBQSxpQkFBTztJQUNuRSxpQkFBVzs7OztJQUZvQyxrREFBb0M7SUFDM0UsZUFBb0Q7SUFBcEQsNEZBQW9EOzs7SUFZdEQsb0NBQXdGO0lBQUEsWUFBb0I7SUFBQSxpQkFBVzs7O0lBQS9CLGVBQW9CO0lBQXBCLHdDQUFvQjs7O0lBQzVHLG9DQUNH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S0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcbi8vIEFQUFxuaW1wb3J0IHsgT3V0c2lkZUNsaWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvb3V0c2lkZS1jbGljay9PdXRzaWRlQ2xpY2snO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhdGVnb3J5LWRyb3Bkb3duJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJidXR0b25cIj48L25nLWNvbnRlbnQ+XG4gICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRhaW5lclwiICpuZ0lmPVwiYWN0aXZlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1jYXRlZ29yeS1kcm9wZG93bi1zZWFyY2hcIiAqbmdJZj1cInNlYXJjaFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tY2F0ZWdvcnktZHJvcGRvd24tc2VhcmNoXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwic2VhcmNoLnBsYWNlaG9sZGVyIHx8IGxhYmVscy5zZWFyY2hcIlxuICAgICAgICAgIFt2YWx1ZV09XCJfcXVlcnlcIlxuICAgICAgICAgIChpbnB1dCk9XCJxdWVyeUNhdGVnb3JpZXMoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgICAvPlxuICAgICAgICA8aSBjbGFzcz1cImJoaS1zZWFyY2hcIiAqbmdJZj1cIiFfcXVlcnlcIj48L2k+XG4gICAgICAgIDxpIGNsYXNzPVwiYmhpLXRpbWVzXCIgKm5nSWY9XCJfcXVlcnlcIiAoY2xpY2spPVwiY2xlYXJRdWVyeSgkZXZlbnQpXCI+PC9pPlxuICAgICAgPC9kaXY+XG4gICAgICA8bm92by1uYXYgdGhlbWU9XCJ3aGl0ZVwiIFtvdXRsZXRdPVwibm92b0NhdGVnb3J5RHJvcGRvd25PdXRsZXRcIiBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICA8bm92by10YWIgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIF9jYXRlZ29yaWVzXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhdGVnb3J5XCIgKGFjdGl2ZUNoYW5nZSk9XCJvbkNhdGVnb3J5U2VsZWN0ZWQoY2F0ZWdvcnkpXCI+XG4gICAgICAgICAgPHNwYW4+e3sgY2F0ZWdvcnkgfX0gKHt7IF9jYXRlZ29yeU1hcFtjYXRlZ29yeV0ubGVuZ3RoIH19KTwvc3Bhbj5cbiAgICAgICAgPC9ub3ZvLXRhYj5cbiAgICAgIDwvbm92by1uYXY+XG4gICAgICA8bm92by1uYXYtb3V0bGV0ICNub3ZvQ2F0ZWdvcnlEcm9wZG93bk91dGxldD5cbiAgICAgICAgPG5vdm8tbmF2LWNvbnRlbnQgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIF9jYXRlZ29yaWVzXCI+XG4gICAgICAgICAgPG5vdm8tbGlzdCBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgPG5vdm8tbGlzdC1pdGVtXG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIF9jYXRlZ29yeU1hcFtjYXRlZ29yeV1cIlxuICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0KCRldmVudCwgaXRlbSlcIlxuICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiaXRlbS5sYWJlbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpdGVtLWNvbnRlbnQ+e3sgaXRlbS5sYWJlbCB9fTwvaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICA8aXRlbS1lbmQgY2xhc3M9XCJub3ZvLWNhdGVnb3J5LWRyb3Bkb3duLWhvdmVyXCIgKm5nSWY9XCJpdGVtLmhvdmVyVGV4dCAmJiAhaXRlbS5zZWxlY3RlZFwiPnt7IGl0ZW0uaG92ZXJUZXh0IH19PC9pdGVtLWVuZD5cbiAgICAgICAgICAgICAgPGl0ZW0tZW5kIGNsYXNzPVwibm92by1jYXRlZ29yeS1kcm9wZG93bi1ob3ZlclwiICpuZ0lmPVwiaXRlbS5ob3Zlckljb24gJiYgIWl0ZW0uc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgID48aSBjbGFzcz1cImJoaS17eyBpdGVtLmhvdmVySWNvbiB9fVwiPjwvaVxuICAgICAgICAgICAgICA+PC9pdGVtLWVuZD5cbiAgICAgICAgICAgICAgPGl0ZW0tZW5kICpuZ0lmPVwiaXRlbS5zZWxlY3RlZFwiPjxpIGNsYXNzPVwiYmhpLWNoZWNrXCI+PC9pPjwvaXRlbS1lbmQ+XG4gICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgICAgPG5vdm8tbGlzdC1pdGVtICpuZ0lmPVwiX2NhdGVnb3J5TWFwW2NhdGVnb3J5XS5sZW5ndGggPT09IDAgJiYgc2VhcmNoXCIgY2xhc3M9XCJub3ZvLWNhdGVnb3J5LWRyb3Bkb3duLWVtcHR5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD57eyBzZWFyY2guZW1wdHlNZXNzYWdlIHx8IGxhYmVscy5ub0l0ZW1zIH19PC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgIDwvbm92by1saXN0PlxuICAgICAgICA8L25vdm8tbmF2LWNvbnRlbnQ+XG4gICAgICA8L25vdm8tbmF2LW91dGxldD5cbiAgICAgIDxmb290ZXIgKm5nSWY9XCJmb290ZXJcIiBjbGFzcz1cIm5vdm8tY2F0ZWdvcnktZHJvcGRvd24tZm9vdGVyLWFsaWduLXt7IGZvb3Rlci5hbGlnbiB8fCAncmlnaHQnIH19XCI+XG4gICAgICAgIDxhICpuZ0Zvcj1cImxldCBsaW5rIG9mIGZvb3Rlci5saW5rc1wiIChjbGljayk9XCJleGVjdXRlQ2xpY2tDYWxsYmFjaygkZXZlbnQsIGxpbmspXCI+e3sgbGluay5sYWJlbCB9fTwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgJyhrZXlkb3duKSc6ICdvbktleURvd24oJGV2ZW50KScsXG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DYXRlZ29yeURyb3Bkb3duRWxlbWVudCBleHRlbmRzIE91dHNpZGVDbGljayBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgX3F1ZXJ5OiBzdHJpbmcgPSAnJztcbiAgX2NhdGVnb3J5TWFwOiBhbnkgPSB7fTtcbiAgX2NhdGVnb3JpZXM6IHN0cmluZ1tdID0gW107XG4gIGNsaWNrSGFuZGxlcjogRnVuY3Rpb247XG4gIF9tYXN0ZXJDYXRlZ29yeU1hcDogYW55O1xuICBfcXVlcnlUaW1lb3V0OiBhbnk7XG4gIC8vIEJvb2xlYW4gdG8ga2VlcCB0aGUgc2VsZWN0aW9uIHBlcnNpc3Qgd2hlbiBjbG9zaW5nIHRoZSBkcm9wZG93blxuICBASW5wdXQoKVxuICBwZXJzaXN0U2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIEJvb2xlYW4gdG8gY2xvc2UgdGhlIGRyb3Bkb3duIG9uIHNlbGVjdGlvblxuICBASW5wdXQoKVxuICBjbG9zZU9uU2VsZWN0OiBib29sZWFuID0gZmFsc2U7XG4gIC8vIFNlYXJjaCBDb25maWdcbiAgLy8ge1xuICAvLyAgIHBsYWNlaG9sZGVyOiAnU1RSSU5HJyAvLyBkZWZhdWx0cyB0byBcIlNFQVJDSFwiIC0gcGxhY2Vob2xkZXIgZm9yIHNlYXJjaCBpbnB1dFxuICAvLyAgIGVtcHR5TWVzc2FnZTogJ1NUUklORycgLy8gZGVmYXVsdHMgdG8gXCJUaGVyZSBhcmUgbm8gaXRlbXMuXCIgLSBlbXB0eSBtZXNzYWdlIHdoZW4gdGhlcmUgYXJlIG5vIGl0ZW1zIGluIHRoZSBjYXRlZ29yeVxuICAvLyAgIGRlYm91bmNlOiAnTlVNQkVSIChpbiBNUyknIC8vIGRlZmF1bHRzIHRvIDMwMG1zIC0gZGVib3VuY2UgdGltZSBmb3IgdGhlIHNlYXJjaFxuICAvLyAgIGNvbXBhcmU6ICdGVU5DVElPTicgLy8gZGVmYXVsdCB0byBzaW1wbGUgaW5kZXhPZiAtIGNvbXBhcmUgZnVuY3Rpb24gZm9yIGNhdGVnb3J5IHNlYXJjaCwgc2hvdWxkIGFjY2VwdCAocXVlcnksIGl0ZW0pIGFuZCByZXR1cm4gdHJ1ZS9mYWxzZVxuICAvLyB9XG4gIEBJbnB1dCgpXG4gIHNlYXJjaDogYW55O1xuICAvLyBGb290ZXIgY29uZmlnXG4gIC8vIHtcbiAgLy8gICBhbGlnbjogJ1NUUklORycgLy8gZGVmYXVsdHMgdG8gXCJyaWdodFwiIC0gYWxpZ25tZW50IG9mIHRoZSBsaW5rc1xuICAvLyAgIGxpbmtzOiAnQVJSQVknIC8vIGFycmF5IG9mIGxpbmtzIHRvIGdvIGludG8gdGhlIGZvb3RlciwgYmUgYXdheSBvZiBzcGFjaW5nIC0geyBsYWJlbCwgY2FsbGJhY2sgfSBmb3IgdGhlIG9iamVjdCBpbnNpZGVcbiAgLy8gfVxuICBASW5wdXQoKVxuICBmb290ZXI6IGFueTtcbiAgLy8gRXZlbnQgdGhhdCBpcyBlbWl0dGVkIHdoZW5ldmVyIGFuIGl0ZW0gaXMgc2VsZWN0ZWRcbiAgQE91dHB1dCgnaXRlbVNlbGVjdGVkJylcbiAgX3NlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIEV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuZXZlciBhIGNhdGVnb3J5IGlzIHNlbGVjdGVkXG4gIEBPdXRwdXQoKVxuICBjYXRlZ29yeVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjYXRlZ29yaWVzKGNhdGVnb3JpZXM6IGFueSkge1xuICAgIHRoaXMuX21hc3RlckNhdGVnb3J5TWFwID0gT2JqZWN0LmFzc2lnbih7fSwgY2F0ZWdvcmllcyk7XG4gICAgdGhpcy5fY2F0ZWdvcnlNYXAgPSBPYmplY3QuYXNzaWduKHt9LCBjYXRlZ29yaWVzKTtcbiAgICB0aGlzLl9jYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoY2F0ZWdvcmllcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7XG4gICAgc3VwZXIoZWxlbWVudCk7XG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLnRvZ2dsZUFjdGl2ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gICAgaWYgKGJ1dHRvbikge1xuICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZSAmJiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRVNDIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVOVEVSKSkge1xuICAgICAgdGhpcy50b2dnbGVBY3RpdmUoKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclNlbGVjdGlvbigpIHtcbiAgICB0aGlzLl9jYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICB0aGlzLl9jYXRlZ29yeU1hcFtjYXRlZ29yeV0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdChldmVudCwgaXRlbSkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAvLyBJZiB3ZSBwZXJzaXN0IHRoZSBzZWxlY3Rpb24sIGNsZWFyIGFuZCBzaG93IGEgY2hlY2tcbiAgICBpZiAodGhpcy5wZXJzaXN0U2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICBpdGVtLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gRW1pdCB0aGUgaXRlbVxuICAgIHRoaXMuX3NlbGVjdC5lbWl0KGl0ZW0pO1xuICAgIC8vIENsb3NlLCBpZiBpbnB1dCBpcyBzZXRcbiAgICBpZiAodGhpcy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnRvZ2dsZUFjdGl2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2F0ZWdvcnlTZWxlY3RlZChjYXRlZ29yeSkge1xuICAgIHRoaXMuY2F0ZWdvcnlTZWxlY3RlZC5lbWl0KGNhdGVnb3J5KTtcbiAgfVxuXG4gIGNsZWFyUXVlcnkoZXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5fcXVlcnkgPSAnJztcbiAgICAvLyBSZXNldCB0aGUgY2F0ZWdvcmllc1xuICAgIHRoaXMuX2NhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgIHRoaXMuX2NhdGVnb3J5TWFwW2NhdGVnb3J5XSA9IHRoaXMuX21hc3RlckNhdGVnb3J5TWFwW2NhdGVnb3J5XTtcbiAgICB9KTtcbiAgfVxuXG4gIHF1ZXJ5Q2F0ZWdvcmllcyhxdWVyeSkge1xuICAgIC8vIFNhdmUgdGhlIHF1ZXJ5XG4gICAgdGhpcy5fcXVlcnkgPSBxdWVyeTtcbiAgICAvLyBDaGVjayB0aW1lb3V0XG4gICAgaWYgKHRoaXMuX3F1ZXJ5VGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3F1ZXJ5VGltZW91dCk7XG4gICAgfVxuICAgIC8vIFN0b3JlIGEgdGltZW91dCwgdG8gZGVib3VuY2UgdXNlciBpbnB1dFxuICAgIHRoaXMuX3F1ZXJ5VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zZWFyY2guY29tcGFyZSkge1xuICAgICAgICAgIHRoaXMuX2NhdGVnb3J5TWFwW2NhdGVnb3J5XSA9IHRoaXMuX21hc3RlckNhdGVnb3J5TWFwW2NhdGVnb3J5XS5maWx0ZXIoKGl0ZW0pID0+IHRoaXMuc2VhcmNoLmNvbXBhcmUocXVlcnksIGl0ZW0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9jYXRlZ29yeU1hcFtjYXRlZ29yeV0gPSB0aGlzLl9tYXN0ZXJDYXRlZ29yeU1hcFtjYXRlZ29yeV0uZmlsdGVyKFxuICAgICAgICAgICAgKGl0ZW0pID0+IH5pdGVtLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeS50b0xvd2VyQ2FzZSgpKSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCB0aGlzLnNlYXJjaC5kZWJvdW5jZSB8fCAzMDApO1xuICB9XG5cbiAgZXhlY3V0ZUNsaWNrQ2FsbGJhY2soZXZlbnQsIGxpbmspIHtcbiAgICBsaW5rLmNhbGxiYWNrKGV2ZW50KTtcbiAgICAvLyBDbG9zZSwgaWYgaW5wdXQgaXMgc2V0XG4gICAgaWYgKHRoaXMuY2xvc2VPblNlbGVjdCkge1xuICAgICAgdGhpcy50b2dnbGVBY3RpdmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==