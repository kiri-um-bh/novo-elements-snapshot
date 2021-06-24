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
                <input type="text" [placeholder]="search.placeholder || labels.search" [value]="_query" (input)="queryCategories($event.target.value)"/>
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
                        <novo-list-item *ngFor="let item of _categoryMap[category]" (click)="select($event, item)" [attr.data-automation-id]="item.label">
                            <item-content>{{ item.label }}</item-content>
                            <item-end class="novo-category-dropdown-hover" *ngIf="item.hoverText && !item.selected">{{ item.hoverText }}</item-end>
                            <item-end class="novo-category-dropdown-hover" *ngIf="item.hoverIcon && !item.selected"><i class="bhi-{{ item.hoverIcon }}"></i></item-end>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlEcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYXRlZ29yeS1kcm9wZG93bi9DYXRlZ29yeURyb3Bkb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDdEcsTUFBTTtBQUNOLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7O0lBU3JELHdCQUEwQzs7OztJQUMxQyw2QkFBcUU7SUFBakMsaU5BQTRCO0lBQUMsaUJBQUk7Ozs7SUFIekUsOEJBQ0k7SUFBQSxnQ0FDQTtJQUR3RixzT0FBOEM7SUFBdEksaUJBQ0E7SUFBQSxxRkFBc0M7SUFDdEMscUZBQWlFO0lBQ3JFLGlCQUFNOzs7SUFIaUIsZUFBbUQ7SUFBbkQsK0VBQW1ELHdCQUFBO0lBQ2hELGVBQWU7SUFBZixxQ0FBZTtJQUNoQixlQUFjO0lBQWQsb0NBQWM7Ozs7SUFHbkMsb0NBQ0k7SUFEZ0Ysc1JBQTZDO0lBQzdILDRCQUFNO0lBQUEsWUFBb0Q7SUFBQSxpQkFBTztJQUNyRSxpQkFBVzs7OztJQUZvQyxrREFBb0M7SUFDekUsZUFBb0Q7SUFBcEQsNEZBQW9EOzs7SUFRbEQsb0NBQXdGO0lBQUEsWUFBb0I7SUFBQSxpQkFBVzs7O0lBQS9CLGVBQW9CO0lBQXBCLHdDQUFvQjs7O0lBQzVH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LEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBPdXRzaWRlQ2xpY2sgfSBmcm9tICcuLi8uLi91dGlscy9vdXRzaWRlLWNsaWNrL091dHNpZGVDbGljayc7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gJy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYXRlZ29yeS1kcm9wZG93bicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJ1dHRvblwiPjwvbmctY29udGVudD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRhaW5lclwiICpuZ0lmPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jYXRlZ29yeS1kcm9wZG93bi1zZWFyY2hcIiAqbmdJZj1cInNlYXJjaFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tY2F0ZWdvcnktZHJvcGRvd24tc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3BsYWNlaG9sZGVyXT1cInNlYXJjaC5wbGFjZWhvbGRlciB8fCBsYWJlbHMuc2VhcmNoXCIgW3ZhbHVlXT1cIl9xdWVyeVwiIChpbnB1dCk9XCJxdWVyeUNhdGVnb3JpZXMoJGV2ZW50LnRhcmdldC52YWx1ZSlcIi8+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktc2VhcmNoXCIgKm5nSWY9XCIhX3F1ZXJ5XCI+PC9pPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXRpbWVzXCIgKm5nSWY9XCJfcXVlcnlcIiAoY2xpY2spPVwiY2xlYXJRdWVyeSgkZXZlbnQpXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bm92by1uYXYgdGhlbWU9XCJ3aGl0ZVwiIFtvdXRsZXRdPVwibm92b0NhdGVnb3J5RHJvcGRvd25PdXRsZXRcIiBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxub3ZvLXRhYiAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgX2NhdGVnb3JpZXNcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2F0ZWdvcnlcIiAoYWN0aXZlQ2hhbmdlKT1cIm9uQ2F0ZWdvcnlTZWxlY3RlZChjYXRlZ29yeSlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgY2F0ZWdvcnkgfX0gKHt7IF9jYXRlZ29yeU1hcFtjYXRlZ29yeV0ubGVuZ3RoIH19KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L25vdm8tdGFiPlxuICAgICAgICAgICAgPC9ub3ZvLW5hdj5cbiAgICAgICAgICAgIDxub3ZvLW5hdi1vdXRsZXQgI25vdm9DYXRlZ29yeURyb3Bkb3duT3V0bGV0PlxuICAgICAgICAgICAgICAgIDxub3ZvLW5hdi1jb250ZW50ICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBfY2F0ZWdvcmllc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bm92by1saXN0IGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bm92by1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2YgX2NhdGVnb3J5TWFwW2NhdGVnb3J5XVwiIChjbGljayk9XCJzZWxlY3QoJGV2ZW50LCBpdGVtKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJpdGVtLmxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD57eyBpdGVtLmxhYmVsIH19PC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0tZW5kIGNsYXNzPVwibm92by1jYXRlZ29yeS1kcm9wZG93bi1ob3ZlclwiICpuZ0lmPVwiaXRlbS5ob3ZlclRleHQgJiYgIWl0ZW0uc2VsZWN0ZWRcIj57eyBpdGVtLmhvdmVyVGV4dCB9fTwvaXRlbS1lbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0tZW5kIGNsYXNzPVwibm92by1jYXRlZ29yeS1kcm9wZG93bi1ob3ZlclwiICpuZ0lmPVwiaXRlbS5ob3Zlckljb24gJiYgIWl0ZW0uc2VsZWN0ZWRcIj48aSBjbGFzcz1cImJoaS17eyBpdGVtLmhvdmVySWNvbiB9fVwiPjwvaT48L2l0ZW0tZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLWVuZCAqbmdJZj1cIml0ZW0uc2VsZWN0ZWRcIj48aSBjbGFzcz1cImJoaS1jaGVja1wiPjwvaT48L2l0ZW0tZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbSAqbmdJZj1cIl9jYXRlZ29yeU1hcFtjYXRlZ29yeV0ubGVuZ3RoID09PSAwICYmIHNlYXJjaFwiIGNsYXNzPVwibm92by1jYXRlZ29yeS1kcm9wZG93bi1lbXB0eS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD57eyBzZWFyY2guZW1wdHlNZXNzYWdlIHx8IGxhYmVscy5ub0l0ZW1zIH19PC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L25vdm8tbGlzdD5cbiAgICAgICAgICAgICAgICA8L25vdm8tbmF2LWNvbnRlbnQ+XG4gICAgICAgICAgICA8L25vdm8tbmF2LW91dGxldD5cbiAgICAgICAgICAgIDxmb290ZXIgKm5nSWY9XCJmb290ZXJcIiBjbGFzcz1cIm5vdm8tY2F0ZWdvcnktZHJvcGRvd24tZm9vdGVyLWFsaWduLXt7IGZvb3Rlci5hbGlnbiB8fCAncmlnaHQnIH19XCI+XG4gICAgICAgICAgICAgICAgPGEgKm5nRm9yPVwibGV0IGxpbmsgb2YgZm9vdGVyLmxpbmtzXCIgKGNsaWNrKT1cImV4ZWN1dGVDbGlja0NhbGxiYWNrKCRldmVudCwgbGluaylcIj57eyBsaW5rLmxhYmVsIH19PC9hPlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gIGhvc3Q6IHtcbiAgICAnKGtleWRvd24pJzogJ29uS2V5RG93bigkZXZlbnQpJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NhdGVnb3J5RHJvcGRvd25FbGVtZW50IGV4dGVuZHMgT3V0c2lkZUNsaWNrIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBfcXVlcnk6IHN0cmluZyA9ICcnO1xuICBfY2F0ZWdvcnlNYXA6IGFueSA9IHt9O1xuICBfY2F0ZWdvcmllczogc3RyaW5nW10gPSBbXTtcbiAgY2xpY2tIYW5kbGVyOiBGdW5jdGlvbjtcbiAgX21hc3RlckNhdGVnb3J5TWFwOiBhbnk7XG4gIF9xdWVyeVRpbWVvdXQ6IGFueTtcbiAgLy8gQm9vbGVhbiB0byBrZWVwIHRoZSBzZWxlY3Rpb24gcGVyc2lzdCB3aGVuIGNsb3NpbmcgdGhlIGRyb3Bkb3duXG4gIEBJbnB1dCgpXG4gIHBlcnNpc3RTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gQm9vbGVhbiB0byBjbG9zZSB0aGUgZHJvcGRvd24gb24gc2VsZWN0aW9uXG4gIEBJbnB1dCgpXG4gIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gU2VhcmNoIENvbmZpZ1xuICAvLyB7XG4gIC8vICAgcGxhY2Vob2xkZXI6ICdTVFJJTkcnIC8vIGRlZmF1bHRzIHRvIFwiU0VBUkNIXCIgLSBwbGFjZWhvbGRlciBmb3Igc2VhcmNoIGlucHV0XG4gIC8vICAgZW1wdHlNZXNzYWdlOiAnU1RSSU5HJyAvLyBkZWZhdWx0cyB0byBcIlRoZXJlIGFyZSBubyBpdGVtcy5cIiAtIGVtcHR5IG1lc3NhZ2Ugd2hlbiB0aGVyZSBhcmUgbm8gaXRlbXMgaW4gdGhlIGNhdGVnb3J5XG4gIC8vICAgZGVib3VuY2U6ICdOVU1CRVIgKGluIE1TKScgLy8gZGVmYXVsdHMgdG8gMzAwbXMgLSBkZWJvdW5jZSB0aW1lIGZvciB0aGUgc2VhcmNoXG4gIC8vICAgY29tcGFyZTogJ0ZVTkNUSU9OJyAvLyBkZWZhdWx0IHRvIHNpbXBsZSBpbmRleE9mIC0gY29tcGFyZSBmdW5jdGlvbiBmb3IgY2F0ZWdvcnkgc2VhcmNoLCBzaG91bGQgYWNjZXB0IChxdWVyeSwgaXRlbSkgYW5kIHJldHVybiB0cnVlL2ZhbHNlXG4gIC8vIH1cbiAgQElucHV0KClcbiAgc2VhcmNoOiBhbnk7XG4gIC8vIEZvb3RlciBjb25maWdcbiAgLy8ge1xuICAvLyAgIGFsaWduOiAnU1RSSU5HJyAvLyBkZWZhdWx0cyB0byBcInJpZ2h0XCIgLSBhbGlnbm1lbnQgb2YgdGhlIGxpbmtzXG4gIC8vICAgbGlua3M6ICdBUlJBWScgLy8gYXJyYXkgb2YgbGlua3MgdG8gZ28gaW50byB0aGUgZm9vdGVyLCBiZSBhd2F5IG9mIHNwYWNpbmcgLSB7IGxhYmVsLCBjYWxsYmFjayB9IGZvciB0aGUgb2JqZWN0IGluc2lkZVxuICAvLyB9XG4gIEBJbnB1dCgpXG4gIGZvb3RlcjogYW55O1xuICAvLyBFdmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbmV2ZXIgYW4gaXRlbSBpcyBzZWxlY3RlZFxuICBAT3V0cHV0KCdpdGVtU2VsZWN0ZWQnKVxuICBfc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gRXZlbnQgdGhhdCBpcyBlbWl0dGVkIHdoZW5ldmVyIGEgY2F0ZWdvcnkgaXMgc2VsZWN0ZWRcbiAgQE91dHB1dCgpXG4gIGNhdGVnb3J5U2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGNhdGVnb3JpZXMoY2F0ZWdvcmllczogYW55KSB7XG4gICAgdGhpcy5fbWFzdGVyQ2F0ZWdvcnlNYXAgPSBPYmplY3QuYXNzaWduKHt9LCBjYXRlZ29yaWVzKTtcbiAgICB0aGlzLl9jYXRlZ29yeU1hcCA9IE9iamVjdC5hc3NpZ24oe30sIGNhdGVnb3JpZXMpO1xuICAgIHRoaXMuX2NhdGVnb3JpZXMgPSBPYmplY3Qua2V5cyhjYXRlZ29yaWVzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICBzdXBlcihlbGVtZW50KTtcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMudG9nZ2xlQWN0aXZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICBpZiAoYnV0dG9uKSB7XG4gICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlICYmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FU0MgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRU5URVIpKSB7XG4gICAgICB0aGlzLnRvZ2dsZUFjdGl2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyU2VsZWN0aW9uKCkge1xuICAgIHRoaXMuX2NhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgIHRoaXMuX2NhdGVnb3J5TWFwW2NhdGVnb3J5XS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0KGV2ZW50LCBpdGVtKSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIC8vIElmIHdlIHBlcnNpc3QgdGhlIHNlbGVjdGlvbiwgY2xlYXIgYW5kIHNob3cgYSBjaGVja1xuICAgIGlmICh0aGlzLnBlcnNpc3RTZWxlY3Rpb24pIHtcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgIGl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBFbWl0IHRoZSBpdGVtXG4gICAgdGhpcy5fc2VsZWN0LmVtaXQoaXRlbSk7XG4gICAgLy8gQ2xvc2UsIGlmIGlucHV0IGlzIHNldFxuICAgIGlmICh0aGlzLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgIHRoaXMudG9nZ2xlQWN0aXZlKCk7XG4gICAgfVxuICB9XG5cbiAgb25DYXRlZ29yeVNlbGVjdGVkKGNhdGVnb3J5KSB7XG4gICAgdGhpcy5jYXRlZ29yeVNlbGVjdGVkLmVtaXQoY2F0ZWdvcnkpO1xuICB9XG5cbiAgY2xlYXJRdWVyeShldmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLl9xdWVyeSA9ICcnO1xuICAgIC8vIFJlc2V0IHRoZSBjYXRlZ29yaWVzXG4gICAgdGhpcy5fY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgICAgdGhpcy5fY2F0ZWdvcnlNYXBbY2F0ZWdvcnldID0gdGhpcy5fbWFzdGVyQ2F0ZWdvcnlNYXBbY2F0ZWdvcnldO1xuICAgIH0pO1xuICB9XG5cbiAgcXVlcnlDYXRlZ29yaWVzKHF1ZXJ5KSB7XG4gICAgLy8gU2F2ZSB0aGUgcXVlcnlcbiAgICB0aGlzLl9xdWVyeSA9IHF1ZXJ5O1xuICAgIC8vIENoZWNrIHRpbWVvdXRcbiAgICBpZiAodGhpcy5fcXVlcnlUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fcXVlcnlUaW1lb3V0KTtcbiAgICB9XG4gICAgLy8gU3RvcmUgYSB0aW1lb3V0LCB0byBkZWJvdW5jZSB1c2VyIGlucHV0XG4gICAgdGhpcy5fcXVlcnlUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9jYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaC5jb21wYXJlKSB7XG4gICAgICAgICAgdGhpcy5fY2F0ZWdvcnlNYXBbY2F0ZWdvcnldID0gdGhpcy5fbWFzdGVyQ2F0ZWdvcnlNYXBbY2F0ZWdvcnldLmZpbHRlcigoaXRlbSkgPT4gdGhpcy5zZWFyY2guY29tcGFyZShxdWVyeSwgaXRlbSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2NhdGVnb3J5TWFwW2NhdGVnb3J5XSA9IHRoaXMuX21hc3RlckNhdGVnb3J5TWFwW2NhdGVnb3J5XS5maWx0ZXIoXG4gICAgICAgICAgICAoaXRlbSkgPT4gfml0ZW0ubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIHRoaXMuc2VhcmNoLmRlYm91bmNlIHx8IDMwMCk7XG4gIH1cblxuICBleGVjdXRlQ2xpY2tDYWxsYmFjayhldmVudCwgbGluaykge1xuICAgIGxpbmsuY2FsbGJhY2soZXZlbnQpO1xuICAgIC8vIENsb3NlLCBpZiBpbnB1dCBpcyBzZXRcbiAgICBpZiAodGhpcy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnRvZ2dsZUFjdGl2ZSgpO1xuICAgIH1cbiAgfVxufVxuIl19