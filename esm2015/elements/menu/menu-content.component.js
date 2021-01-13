import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { OverlayRef } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Inject, Input, Optional, Output, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { Subscription } from 'rxjs';
import { MENU_OPTIONS } from './menu.tokens';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icon/Icon";
const _c0 = ["menu"];
const _c1 = ["li"];
function MenuContentComponent_li_3_a_2_ng_template_1_Template(rf, ctx) { }
const _c2 = function (a0) { return { $implicit: a0 }; };
function MenuContentComponent_li_3_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵlistener("click", function MenuContentComponent_li_3_a_2_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r11); const menuItem_r2 = i0.ɵɵnextContext().$implicit; const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onMenuItemSelect(menuItem_r2, $event); })("mouseenter", function MenuContentComponent_li_3_a_2_Template_a_mouseenter_0_listener($event) { i0.ɵɵrestoreView(_r11); const menuItem_r2 = i0.ɵɵnextContext().$implicit; const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.onOpenSubMenu(menuItem_r2, $event); });
    i0.ɵɵtemplate(1, MenuContentComponent_li_3_a_2_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("menu-item", true)("active", menuItem_r2.isActive && ctx_r5.isMenuItemEnabled(menuItem_r2))("disabled", !ctx_r5.isMenuItemEnabled(menuItem_r2))("hasSubMenu", !!menuItem_r2.subMenu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", menuItem_r2.template)("ngTemplateOutletContext", i0.ɵɵpureFunction1(10, _c2, ctx_r5.item));
} }
function MenuContentComponent_li_3_novo_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-icon", 10);
    i0.ɵɵtext(1, "expand");
    i0.ɵɵelementEnd();
} }
function MenuContentComponent_li_3_span_4_ng_template_1_Template(rf, ctx) { }
function MenuContentComponent_li_3_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵlistener("click", function MenuContentComponent_li_3_span_4_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.stopEvent($event); });
    i0.ɵɵtemplate(1, MenuContentComponent_li_3_span_4_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("menu-item", true)("disabled", !ctx_r7.isMenuItemEnabled(menuItem_r2));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", menuItem_r2.template)("ngTemplateOutletContext", i0.ɵɵpureFunction1(6, _c2, ctx_r7.item));
} }
function MenuContentComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", null, 4);
    i0.ɵɵtemplate(2, MenuContentComponent_li_3_a_2_Template, 2, 12, "a", 5);
    i0.ɵɵtemplate(3, MenuContentComponent_li_3_novo_icon_3_Template, 2, 0, "novo-icon", 6);
    i0.ɵɵtemplate(4, MenuContentComponent_li_3_span_4_Template, 2, 8, "span", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", !ctx_r1.isMenuItemEnabled(menuItem_r2))("divider", menuItem_r2.divider)("menu-divider", menuItem_r2.divider)("menu-item-container", !menuItem_r2.divider)("active", menuItem_r2.isActive && ctx_r1.isMenuItemEnabled(menuItem_r2));
    i0.ɵɵattribute("role", menuItem_r2.divider ? "separator" : undefined);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !menuItem_r2.divider && !menuItem_r2.passive);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !!menuItem_r2.subMenu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !menuItem_r2.divider && menuItem_r2.passive);
} }
const ARROW_LEFT_KEYCODE = 37;
export class MenuContentComponent {
    constructor(changeDetector, elementRef, options) {
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.options = options;
        this.menuItems = [];
        this.isLeaf = false;
        this.execute = new EventEmitter();
        this.openSubMenu = new EventEmitter();
        this.closeLeafMenu = new EventEmitter();
        this.closeAllMenus = new EventEmitter();
        this.autoFocus = false;
        this.subscription = new Subscription();
        if (options) {
            this.autoFocus = options.autoFocus;
        }
    }
    ngOnInit() {
        this.menuItems.forEach((menuItem) => {
            menuItem.currentItem = this.item;
            this.subscription.add(menuItem.execute.subscribe((event) => this.execute.emit(Object.assign(Object.assign({}, event), { menuItem }))));
        });
        const queryList = new QueryList();
        queryList.reset(this.menuItems);
        this._keyManager = new ActiveDescendantKeyManager(queryList).withWrap();
    }
    ngAfterViewInit() {
        if (this.autoFocus) {
            setTimeout(() => this.focus());
        }
        this.overlay.updatePosition();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    focus() {
        if (this.autoFocus) {
            this.menuElement.nativeElement.focus();
        }
    }
    stopEvent($event) {
        $event.stopPropagation();
    }
    isMenuItemEnabled(menuItem) {
        return this.evaluateIfFunction(menuItem && menuItem.enabled);
    }
    isMenuItemVisible(menuItem) {
        return this.evaluateIfFunction(menuItem && menuItem.visible);
    }
    evaluateIfFunction(value) {
        if (value instanceof Function) {
            return value(this.item);
        }
        return value;
    }
    isDisabled(link) {
        return link.enabled && !link.enabled(this.item);
    }
    onKeyEvent(event) {
        if (!this.isLeaf) {
            return;
        }
        this._keyManager.onKeydown(event);
    }
    keyboardOpenSubMenu(event) {
        if (!this.isLeaf) {
            return;
        }
        this.cancelEvent(event);
        const menuItem = this.menuItems[this._keyManager.activeItemIndex];
        if (menuItem) {
            this.onOpenSubMenu(menuItem);
        }
    }
    keyboardMenuItemSelect(event) {
        if (!this.isLeaf) {
            return;
        }
        this.cancelEvent(event);
        const menuItem = this.menuItems[this._keyManager.activeItemIndex];
        if (menuItem) {
            this.onMenuItemSelect(menuItem, event);
        }
    }
    onCloseLeafMenu(event) {
        if (!this.isLeaf) {
            return;
        }
        this.cancelEvent(event);
        this.closeLeafMenu.emit({ exceptRootMenu: event.keyCode === ARROW_LEFT_KEYCODE, event });
    }
    // @HostListener('document:contextmenu', ['$event'])
    closeMenu(event) {
        if (event.type === 'click' && event.button === 2) {
            return;
        }
        this.closeAllMenus.emit({ event });
    }
    onOpenSubMenu(menuItem, event) {
        const anchorElementRef = this.menuItemElements.toArray()[this._keyManager.activeItemIndex];
        const anchorElement = anchorElementRef && anchorElementRef.nativeElement;
        this.openSubMenu.emit({
            anchorElement,
            menu: menuItem.subMenu,
            event,
            item: this.item,
            parentMenu: this,
        });
    }
    onMenuItemSelect(menuItem, event) {
        event.preventDefault();
        event.stopPropagation();
        this.onOpenSubMenu(menuItem, event);
        if (!menuItem.subMenu) {
            menuItem.triggerExecute(this.item, event);
        }
    }
    cancelEvent(event) {
        if (!event) {
            return;
        }
        const target = event.target;
        if (['INPUT', 'TEXTAREA', 'SELECT'].indexOf(target.tagName) > -1 || target.isContentEditable) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
    }
}
MenuContentComponent.ɵfac = function MenuContentComponent_Factory(t) { return new (t || MenuContentComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(MENU_OPTIONS, 8)); };
MenuContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MenuContentComponent, selectors: [["menu-content"]], viewQuery: function MenuContentComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.menuElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.menuItemElements = _t);
    } }, hostBindings: function MenuContentComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown.ArrowDown", function MenuContentComponent_keydown_ArrowDown_HostBindingHandler($event) { return ctx.onKeyEvent($event); }, false, i0.ɵɵresolveWindow)("keydown.ArrowUp", function MenuContentComponent_keydown_ArrowUp_HostBindingHandler($event) { return ctx.onKeyEvent($event); }, false, i0.ɵɵresolveWindow)("keydown.ArrowRight", function MenuContentComponent_keydown_ArrowRight_HostBindingHandler($event) { return ctx.keyboardOpenSubMenu($event); }, false, i0.ɵɵresolveWindow)("keydown.Enter", function MenuContentComponent_keydown_Enter_HostBindingHandler($event) { return ctx.keyboardMenuItemSelect($event); }, false, i0.ɵɵresolveWindow)("keydown.Space", function MenuContentComponent_keydown_Space_HostBindingHandler($event) { return ctx.keyboardMenuItemSelect($event); }, false, i0.ɵɵresolveWindow)("keydown.Escape", function MenuContentComponent_keydown_Escape_HostBindingHandler($event) { return ctx.onCloseLeafMenu($event); }, false, i0.ɵɵresolveWindow)("keydown.ArrowLeft", function MenuContentComponent_keydown_ArrowLeft_HostBindingHandler($event) { return ctx.onCloseLeafMenu($event); }, false, i0.ɵɵresolveWindow)("click", function MenuContentComponent_click_HostBindingHandler($event) { return ctx.closeMenu($event); }, false, i0.ɵɵresolveDocument);
    } }, inputs: { menuItems: "menuItems", item: "item", event: "event", parentMenu: "parentMenu", menuClass: "menuClass", overlay: "overlay", isLeaf: "isLeaf" }, outputs: { execute: "execute", openSubMenu: "openSubMenu", closeLeafMenu: "closeLeafMenu", closeAllMenus: "closeAllMenus" }, decls: 4, vars: 2, consts: [["tabindex", "0", 1, "menu-container", "novo-menu", 3, "ngClass"], ["tabindex", "0", 1, "menu", 2, "position", "static", "float", "none"], ["menu", ""], [3, "disabled", "divider", "menu-divider", "menu-item-container", "active", 4, "ngFor", "ngForOf"], ["li", ""], ["href", "", 3, "menu-item", "active", "disabled", "hasSubMenu", "click", "mouseenter", 4, "ngIf"], ["class", "sub-menu-caret", "suffix", "", "size", "small", "color", "ash", 4, "ngIf"], ["class", "passive", 3, "menu-item", "disabled", "click", 4, "ngIf"], ["href", "", 3, "click", "mouseenter"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["suffix", "", "size", "small", "color", "ash", 1, "sub-menu-caret"], [1, "passive", 3, "click"]], template: function MenuContentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "ul", 1, 2);
        i0.ɵɵtemplate(3, MenuContentComponent_li_3_Template, 5, 14, "li", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.menuClass);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.menuItems);
    } }, directives: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i2.NovoIconComponent], styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}[_nghost-%COMP%]   .passive[_ngcontent-%COMP%]{clear:both;display:block;font-weight:400;padding:3px 20px;white-space:nowrap}[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]{width:180px}[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{-webkit-padding-start:0!important;background-color:#fff;box-shadow:0 -1px 3px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);cursor:default;font-size:1rem;list-style:none;padding-inline-start:0!important}[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{background:rgba(74,137,220,.1);color:#3d464d}[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item-container[_ngcontent-%COMP%]{align-items:center;display:flex;position:relative}[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item-container[_ngcontent-%COMP%]   .sub-menu-caret[_ngcontent-%COMP%]{position:absolute;right:.4rem}[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{align-items:center;box-sizing:border-box;color:#3d464d;cursor:pointer;display:flex;flex:1;font-size:1rem;font-weight:400;gap:1rem;margin:0;padding:1rem 1rem 1rem 1.6rem}[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{background:#e2e2e2;height:1px;order:none}[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]{color:#bebebe;cursor:not-allowed}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuContentComponent, [{
        type: Component,
        args: [{
                selector: 'menu-content',
                styleUrls: ['./menu-content.component.scss'],
                template: `<div class="menu-container novo-menu" [ngClass]="menuClass" tabindex="0">
    <ul #menu class="menu" style="position: static; float: none;" tabindex="0">
      <li
        #li
        *ngFor="let menuItem of menuItems; let i = index"
        [class.disabled]="!isMenuItemEnabled(menuItem)"
        [class.divider]="menuItem.divider"
        [class.menu-divider]="menuItem.divider"
        [class.menu-item-container]="!menuItem.divider"
        [class.active]="menuItem.isActive && isMenuItemEnabled(menuItem)"
        [attr.role]="menuItem.divider ? 'separator' : undefined"
      >
        <a
          *ngIf="!menuItem.divider && !menuItem.passive"
          href
          [class.menu-item]="true"
          [class.active]="menuItem.isActive && isMenuItemEnabled(menuItem)"
          [class.disabled]="!isMenuItemEnabled(menuItem)"
          [class.hasSubMenu]="!!menuItem.subMenu"
          (click)="onMenuItemSelect(menuItem, $event)"
          (mouseenter)="onOpenSubMenu(menuItem, $event)"
        >
          <ng-template [ngTemplateOutlet]="menuItem.template" [ngTemplateOutletContext]="{ $implicit: item }"></ng-template>
        </a>
        <novo-icon class="sub-menu-caret" suffix *ngIf="!!menuItem.subMenu" size="small" color="ash">expand</novo-icon>
        <span
          (click)="stopEvent($event)"
          class="passive"
          *ngIf="!menuItem.divider && menuItem.passive"
          [class.menu-item]="true"
          [class.disabled]="!isMenuItemEnabled(menuItem)"
        >
          <ng-template [ngTemplateOutlet]="menuItem.template" [ngTemplateOutletContext]="{ $implicit: item }"></ng-template>
        </span>
      </li>
    </ul>
  </div> `,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MENU_OPTIONS]
            }] }]; }, { menuItems: [{
            type: Input
        }], item: [{
            type: Input
        }], event: [{
            type: Input
        }], parentMenu: [{
            type: Input
        }], menuClass: [{
            type: Input
        }], overlay: [{
            type: Input
        }], isLeaf: [{
            type: Input
        }], execute: [{
            type: Output
        }], openSubMenu: [{
            type: Output
        }], closeLeafMenu: [{
            type: Output
        }], closeAllMenus: [{
            type: Output
        }], menuElement: [{
            type: ViewChild,
            args: ['menu']
        }], menuItemElements: [{
            type: ViewChildren,
            args: ['li']
        }], onKeyEvent: [{
            type: HostListener,
            args: ['window:keydown.ArrowDown', ['$event']]
        }, {
            type: HostListener,
            args: ['window:keydown.ArrowUp', ['$event']]
        }], keyboardOpenSubMenu: [{
            type: HostListener,
            args: ['window:keydown.ArrowRight', ['$event']]
        }], keyboardMenuItemSelect: [{
            type: HostListener,
            args: ['window:keydown.Enter', ['$event']]
        }, {
            type: HostListener,
            args: ['window:keydown.Space', ['$event']]
        }], onCloseLeafMenu: [{
            type: HostListener,
            args: ['window:keydown.Escape', ['$event']]
        }, {
            type: HostListener,
            args: ['window:keydown.ArrowLeft', ['$event']]
        }], closeMenu: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL21lbnUvbWVudS1jb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztJQW9CckMsNEJBVUU7SUFIQSx3UUFBNEMsb1FBQUE7SUFHNUMsOEZBQW9HO0lBQ3RHLGlCQUFJOzs7O0lBUkYsaUNBQXdCLHlFQUFBLG9EQUFBLHFDQUFBO0lBT1gsZUFBc0M7SUFBdEMsdURBQXNDLHFFQUFBOzs7SUFFckQscUNBQTZGO0lBQUEsc0JBQU07SUFBQSxpQkFBWTs7Ozs7SUFDL0csZ0NBT0U7SUFOQSwyTUFBMkI7SUFNM0IsaUdBQW9HO0lBQ3RHLGlCQUFPOzs7O0lBSkwsaUNBQXdCLG9EQUFBO0lBR1gsZUFBc0M7SUFBdEMsdURBQXNDLG9FQUFBOzs7SUE5QnZELG1DQVVFO0lBQUEsdUVBVUU7SUFFRixzRkFBNkY7SUFDN0YsNEVBT0U7SUFFSixpQkFBSzs7OztJQTdCSCxrRUFBK0MsZ0NBQUEscUNBQUEsNkNBQUEseUVBQUE7SUFLL0MscUVBQXdEO0lBR3RELGVBQThDO0lBQTlDLG1FQUE4QztJQVdQLGVBQTBCO0lBQTFCLDRDQUEwQjtJQUlqRSxlQUE2QztJQUE3QyxrRUFBNkM7O0FBakN2RCxNQUFNLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztBQTJDOUIsTUFBTSxPQUFPLG9CQUFvQjtJQXNCL0IsWUFDVSxjQUFpQyxFQUNqQyxVQUFzQixFQUd0QixPQUFxQjtRQUpyQixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDakMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUd0QixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBMUJmLGNBQVMsR0FBd0IsRUFBRSxDQUFDO1FBTXBDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZCxZQUFPLEdBSW5CLElBQUksWUFBWSxFQUFFLENBQUM7UUFDUCxnQkFBVyxHQUFrQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hFLGtCQUFhLEdBQXFDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckUsa0JBQWEsR0FBd0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUlsRixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGlCQUFZLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFRdEQsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDbEMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksaUNBQU0sS0FBSyxLQUFFLFFBQVEsSUFBRyxDQUFDLENBQUMsQ0FBQztRQUMxRyxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sU0FBUyxHQUFHLElBQUksU0FBUyxFQUFxQixDQUFDO1FBQ3JELFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSwwQkFBMEIsQ0FBb0IsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0YsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQWtCO1FBQzFCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0saUJBQWlCLENBQUMsUUFBMkI7UUFDbEQsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU0saUJBQWlCLENBQUMsUUFBMkI7UUFDbEQsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU0sa0JBQWtCLENBQUMsS0FBVTtRQUNsQyxJQUFJLEtBQUssWUFBWSxRQUFRLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU0sVUFBVSxDQUFDLElBQWlCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFJTSxVQUFVLENBQUMsS0FBb0I7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUdNLG1CQUFtQixDQUFDLEtBQXFCO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFJTSxzQkFBc0IsQ0FBQyxLQUFxQjtRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNsRSxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBSU0sZUFBZSxDQUFDLEtBQW9CO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFDLE9BQU8sS0FBSyxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFRCxvREFBb0Q7SUFFN0MsU0FBUyxDQUFDLEtBQWlCO1FBQ2hDLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDaEQsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxhQUFhLENBQUMsUUFBMkIsRUFBRSxLQUFrQztRQUNsRixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNGLE1BQU0sYUFBYSxHQUFHLGdCQUFnQixJQUFJLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUN6RSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwQixhQUFhO1lBQ2IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPO1lBQ3RCLEtBQUs7WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsUUFBMkIsRUFBRSxLQUFpQztRQUNwRixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3JCLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFTyxXQUFXLENBQUMsS0FBSztRQUN2QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSO1FBRUQsTUFBTSxNQUFNLEdBQWdCLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsaUJBQWlCLEVBQUU7WUFDNUYsT0FBTztTQUNSO1FBRUQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQixDQUFDOzt3RkExS1Usb0JBQW9CLHdHQTBCckIsWUFBWTt5REExQlgsb0JBQW9COzs7Ozs7OzsrSEFBcEIsc0JBQWtCLHFJQUFsQixzQkFBa0IsMklBQWxCLCtCQUEyQixpSUFBM0Isa0NBQThCLGlJQUE5QixrQ0FBOEIsbUlBQTlCLDJCQUF1Qix5SUFBdkIsMkJBQXVCLGlIQUF2QixxQkFBaUI7O1FBdENqQiw4QkFDVDtRQUFBLGdDQUNFO1FBQUEsb0VBVUU7UUF1QkosaUJBQUs7UUFDUCxpQkFBTTs7UUFwQzJDLHVDQUFxQjtRQUloRSxlQUFpRDtRQUFqRCx1Q0FBaUQ7O2tEQWtDNUMsb0JBQW9CO2NBekNoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2dCQUM1QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQW9DRjthQUNUOztzQkEwQkksUUFBUTs7c0JBQ1IsTUFBTTt1QkFBQyxZQUFZO3dCQXpCTixTQUFTO2tCQUF4QixLQUFLO1lBQ1UsSUFBSTtrQkFBbkIsS0FBSztZQUNVLEtBQUs7a0JBQXBCLEtBQUs7WUFDVSxVQUFVO2tCQUF6QixLQUFLO1lBQ1UsU0FBUztrQkFBeEIsS0FBSztZQUNVLE9BQU87a0JBQXRCLEtBQUs7WUFDVSxNQUFNO2tCQUFyQixLQUFLO1lBQ1csT0FBTztrQkFBdkIsTUFBTTtZQUtVLFdBQVc7a0JBQTNCLE1BQU07WUFDVSxhQUFhO2tCQUE3QixNQUFNO1lBQ1UsYUFBYTtrQkFBN0IsTUFBTTtZQUNtQixXQUFXO2tCQUFwQyxTQUFTO21CQUFDLE1BQU07WUFDVSxnQkFBZ0I7a0JBQTFDLFlBQVk7bUJBQUMsSUFBSTtZQXFFWCxVQUFVO2tCQUZoQixZQUFZO21CQUFDLDBCQUEwQixFQUFFLENBQUMsUUFBUSxDQUFDOztrQkFDbkQsWUFBWTttQkFBQyx3QkFBd0IsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQVMzQyxtQkFBbUI7a0JBRHpCLFlBQVk7bUJBQUMsMkJBQTJCLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFjOUMsc0JBQXNCO2tCQUY1QixZQUFZO21CQUFDLHNCQUFzQixFQUFFLENBQUMsUUFBUSxDQUFDOztrQkFDL0MsWUFBWTttQkFBQyxzQkFBc0IsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQWN6QyxlQUFlO2tCQUZyQixZQUFZO21CQUFDLHVCQUF1QixFQUFFLENBQUMsUUFBUSxDQUFDOztrQkFDaEQsWUFBWTttQkFBQywwQkFBMEIsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQVc3QyxTQUFTO2tCQURmLFlBQVk7bUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmVEZXNjZW5kYW50S2V5TWFuYWdlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vbWVudS1pdGVtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDbG9zZUxlYWZNZW51RXZlbnQsIElNZW51Q2xpY2tFdmVudCB9IGZyb20gJy4vbWVudS5zZXJ2aWNlJztcbmltcG9ydCB7IE1FTlVfT1BUSU9OUyB9IGZyb20gJy4vbWVudS50b2tlbnMnO1xuaW1wb3J0IHsgSUxpbmtDb25maWcsIElNZW51T3B0aW9ucyB9IGZyb20gJy4vbWVudS50eXBlcyc7XG5cbmNvbnN0IEFSUk9XX0xFRlRfS0VZQ09ERSA9IDM3O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZW51LWNvbnRlbnQnLFxuICBzdHlsZVVybHM6IFsnLi9tZW51LWNvbnRlbnQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibWVudS1jb250YWluZXIgbm92by1tZW51XCIgW25nQ2xhc3NdPVwibWVudUNsYXNzXCIgdGFiaW5kZXg9XCIwXCI+XG4gICAgPHVsICNtZW51IGNsYXNzPVwibWVudVwiIHN0eWxlPVwicG9zaXRpb246IHN0YXRpYzsgZmxvYXQ6IG5vbmU7XCIgdGFiaW5kZXg9XCIwXCI+XG4gICAgICA8bGlcbiAgICAgICAgI2xpXG4gICAgICAgICpuZ0Zvcj1cImxldCBtZW51SXRlbSBvZiBtZW51SXRlbXM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiIWlzTWVudUl0ZW1FbmFibGVkKG1lbnVJdGVtKVwiXG4gICAgICAgIFtjbGFzcy5kaXZpZGVyXT1cIm1lbnVJdGVtLmRpdmlkZXJcIlxuICAgICAgICBbY2xhc3MubWVudS1kaXZpZGVyXT1cIm1lbnVJdGVtLmRpdmlkZXJcIlxuICAgICAgICBbY2xhc3MubWVudS1pdGVtLWNvbnRhaW5lcl09XCIhbWVudUl0ZW0uZGl2aWRlclwiXG4gICAgICAgIFtjbGFzcy5hY3RpdmVdPVwibWVudUl0ZW0uaXNBY3RpdmUgJiYgaXNNZW51SXRlbUVuYWJsZWQobWVudUl0ZW0pXCJcbiAgICAgICAgW2F0dHIucm9sZV09XCJtZW51SXRlbS5kaXZpZGVyID8gJ3NlcGFyYXRvcicgOiB1bmRlZmluZWRcIlxuICAgICAgPlxuICAgICAgICA8YVxuICAgICAgICAgICpuZ0lmPVwiIW1lbnVJdGVtLmRpdmlkZXIgJiYgIW1lbnVJdGVtLnBhc3NpdmVcIlxuICAgICAgICAgIGhyZWZcbiAgICAgICAgICBbY2xhc3MubWVudS1pdGVtXT1cInRydWVcIlxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwibWVudUl0ZW0uaXNBY3RpdmUgJiYgaXNNZW51SXRlbUVuYWJsZWQobWVudUl0ZW0pXCJcbiAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiIWlzTWVudUl0ZW1FbmFibGVkKG1lbnVJdGVtKVwiXG4gICAgICAgICAgW2NsYXNzLmhhc1N1Yk1lbnVdPVwiISFtZW51SXRlbS5zdWJNZW51XCJcbiAgICAgICAgICAoY2xpY2spPVwib25NZW51SXRlbVNlbGVjdChtZW51SXRlbSwgJGV2ZW50KVwiXG4gICAgICAgICAgKG1vdXNlZW50ZXIpPVwib25PcGVuU3ViTWVudShtZW51SXRlbSwgJGV2ZW50KVwiXG4gICAgICAgID5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibWVudUl0ZW0udGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGl0ZW0gfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPG5vdm8taWNvbiBjbGFzcz1cInN1Yi1tZW51LWNhcmV0XCIgc3VmZml4ICpuZ0lmPVwiISFtZW51SXRlbS5zdWJNZW51XCIgc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJhc2hcIj5leHBhbmQ8L25vdm8taWNvbj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICAoY2xpY2spPVwic3RvcEV2ZW50KCRldmVudClcIlxuICAgICAgICAgIGNsYXNzPVwicGFzc2l2ZVwiXG4gICAgICAgICAgKm5nSWY9XCIhbWVudUl0ZW0uZGl2aWRlciAmJiBtZW51SXRlbS5wYXNzaXZlXCJcbiAgICAgICAgICBbY2xhc3MubWVudS1pdGVtXT1cInRydWVcIlxuICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCIhaXNNZW51SXRlbUVuYWJsZWQobWVudUl0ZW0pXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJtZW51SXRlbS50ZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaXRlbSB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj4gYCxcbn0pXG5leHBvcnQgY2xhc3MgTWVudUNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBtZW51SXRlbXM6IE1lbnVJdGVtRGlyZWN0aXZlW10gPSBbXTtcbiAgQElucHV0KCkgcHVibGljIGl0ZW06IGFueTtcbiAgQElucHV0KCkgcHVibGljIGV2ZW50OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudDtcbiAgQElucHV0KCkgcHVibGljIHBhcmVudE1lbnU6IE1lbnVDb250ZW50Q29tcG9uZW50O1xuICBASW5wdXQoKSBwdWJsaWMgbWVudUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBvdmVybGF5OiBPdmVybGF5UmVmO1xuICBASW5wdXQoKSBwdWJsaWMgaXNMZWFmID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBwdWJsaWMgZXhlY3V0ZTogRXZlbnRFbWl0dGVyPHtcbiAgICBldmVudDogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQ7XG4gICAgaXRlbTogYW55O1xuICAgIG1lbnVJdGVtOiBNZW51SXRlbURpcmVjdGl2ZTtcbiAgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb3BlblN1Yk1lbnU6IEV2ZW50RW1pdHRlcjxJTWVudUNsaWNrRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIGNsb3NlTGVhZk1lbnU6IEV2ZW50RW1pdHRlcjxDbG9zZUxlYWZNZW51RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIGNsb3NlQWxsTWVudXM6IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBNb3VzZUV2ZW50IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKCdtZW51JykgcHVibGljIG1lbnVFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkcmVuKCdsaScpIHB1YmxpYyBtZW51SXRlbUVsZW1lbnRzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cbiAgcHVibGljIGF1dG9Gb2N1cyA9IGZhbHNlO1xuICBwcml2YXRlIF9rZXlNYW5hZ2VyOiBBY3RpdmVEZXNjZW5kYW50S2V5TWFuYWdlcjxNZW51SXRlbURpcmVjdGl2ZT47XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoTUVOVV9PUFRJT05TKVxuICAgIHByaXZhdGUgb3B0aW9uczogSU1lbnVPcHRpb25zLFxuICApIHtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy5hdXRvRm9jdXMgPSBvcHRpb25zLmF1dG9Gb2N1cztcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1lbnVJdGVtcy5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgbWVudUl0ZW0uY3VycmVudEl0ZW0gPSB0aGlzLml0ZW07XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQobWVudUl0ZW0uZXhlY3V0ZS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB0aGlzLmV4ZWN1dGUuZW1pdCh7IC4uLmV2ZW50LCBtZW51SXRlbSB9KSkpO1xuICAgIH0pO1xuICAgIGNvbnN0IHF1ZXJ5TGlzdCA9IG5ldyBRdWVyeUxpc3Q8TWVudUl0ZW1EaXJlY3RpdmU+KCk7XG4gICAgcXVlcnlMaXN0LnJlc2V0KHRoaXMubWVudUl0ZW1zKTtcbiAgICB0aGlzLl9rZXlNYW5hZ2VyID0gbmV3IEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyPE1lbnVJdGVtRGlyZWN0aXZlPihxdWVyeUxpc3QpLndpdGhXcmFwKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZm9jdXMoKSk7XG4gICAgfVxuICAgIHRoaXMub3ZlcmxheS51cGRhdGVQb3NpdGlvbigpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xuICAgICAgdGhpcy5tZW51RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgc3RvcEV2ZW50KCRldmVudDogTW91c2VFdmVudCkge1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBpc01lbnVJdGVtRW5hYmxlZChtZW51SXRlbTogTWVudUl0ZW1EaXJlY3RpdmUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZUlmRnVuY3Rpb24obWVudUl0ZW0gJiYgbWVudUl0ZW0uZW5hYmxlZCk7XG4gIH1cblxuICBwdWJsaWMgaXNNZW51SXRlbVZpc2libGUobWVudUl0ZW06IE1lbnVJdGVtRGlyZWN0aXZlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVJZkZ1bmN0aW9uKG1lbnVJdGVtICYmIG1lbnVJdGVtLnZpc2libGUpO1xuICB9XG5cbiAgcHVibGljIGV2YWx1YXRlSWZGdW5jdGlvbih2YWx1ZTogYW55KTogYW55IHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgcmV0dXJuIHZhbHVlKHRoaXMuaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0Rpc2FibGVkKGxpbms6IElMaW5rQ29uZmlnKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGxpbmsuZW5hYmxlZCAmJiAhbGluay5lbmFibGVkKHRoaXMuaXRlbSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5BcnJvd0Rvd24nLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5BcnJvd1VwJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uS2V5RXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNMZWFmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2tleU1hbmFnZXIub25LZXlkb3duKGV2ZW50KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLkFycm93UmlnaHQnLCBbJyRldmVudCddKVxuICBwdWJsaWMga2V5Ym9hcmRPcGVuU3ViTWVudShldmVudD86IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNMZWFmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2FuY2VsRXZlbnQoZXZlbnQpO1xuICAgIGNvbnN0IG1lbnVJdGVtID0gdGhpcy5tZW51SXRlbXNbdGhpcy5fa2V5TWFuYWdlci5hY3RpdmVJdGVtSW5kZXhdO1xuICAgIGlmIChtZW51SXRlbSkge1xuICAgICAgdGhpcy5vbk9wZW5TdWJNZW51KG1lbnVJdGVtKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5FbnRlcicsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLlNwYWNlJywgWyckZXZlbnQnXSlcbiAgcHVibGljIGtleWJvYXJkTWVudUl0ZW1TZWxlY3QoZXZlbnQ/OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzTGVhZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNhbmNlbEV2ZW50KGV2ZW50KTtcbiAgICBjb25zdCBtZW51SXRlbSA9IHRoaXMubWVudUl0ZW1zW3RoaXMuX2tleU1hbmFnZXIuYWN0aXZlSXRlbUluZGV4XTtcbiAgICBpZiAobWVudUl0ZW0pIHtcbiAgICAgIHRoaXMub25NZW51SXRlbVNlbGVjdChtZW51SXRlbSwgZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLkVzY2FwZScsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLkFycm93TGVmdCcsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkNsb3NlTGVhZk1lbnUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNMZWFmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2FuY2VsRXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuY2xvc2VMZWFmTWVudS5lbWl0KHsgZXhjZXB0Um9vdE1lbnU6IGV2ZW50LmtleUNvZGUgPT09IEFSUk9XX0xFRlRfS0VZQ09ERSwgZXZlbnQgfSk7XG4gIH1cblxuICAvLyBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjb250ZXh0bWVudScsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIGNsb3NlTWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snICYmIGV2ZW50LmJ1dHRvbiA9PT0gMikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlQWxsTWVudXMuZW1pdCh7IGV2ZW50IH0pO1xuICB9XG5cbiAgcHVibGljIG9uT3BlblN1Yk1lbnUobWVudUl0ZW06IE1lbnVJdGVtRGlyZWN0aXZlLCBldmVudD86IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgYW5jaG9yRWxlbWVudFJlZiA9IHRoaXMubWVudUl0ZW1FbGVtZW50cy50b0FycmF5KClbdGhpcy5fa2V5TWFuYWdlci5hY3RpdmVJdGVtSW5kZXhdO1xuICAgIGNvbnN0IGFuY2hvckVsZW1lbnQgPSBhbmNob3JFbGVtZW50UmVmICYmIGFuY2hvckVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLm9wZW5TdWJNZW51LmVtaXQoe1xuICAgICAgYW5jaG9yRWxlbWVudCxcbiAgICAgIG1lbnU6IG1lbnVJdGVtLnN1Yk1lbnUsXG4gICAgICBldmVudCxcbiAgICAgIGl0ZW06IHRoaXMuaXRlbSxcbiAgICAgIHBhcmVudE1lbnU6IHRoaXMsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25NZW51SXRlbVNlbGVjdChtZW51SXRlbTogTWVudUl0ZW1EaXJlY3RpdmUsIGV2ZW50OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5vbk9wZW5TdWJNZW51KG1lbnVJdGVtLCBldmVudCk7XG4gICAgaWYgKCFtZW51SXRlbS5zdWJNZW51KSB7XG4gICAgICBtZW51SXRlbS50cmlnZ2VyRXhlY3V0ZSh0aGlzLml0ZW0sIGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbmNlbEV2ZW50KGV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldDogSFRNTEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKFsnSU5QVVQnLCAnVEVYVEFSRUEnLCAnU0VMRUNUJ10uaW5kZXhPZih0YXJnZXQudGFnTmFtZSkgPiAtMSB8fCB0YXJnZXQuaXNDb250ZW50RWRpdGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iXX0=