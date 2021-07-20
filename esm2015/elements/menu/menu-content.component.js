import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { OverlayRef } from '@angular/cdk/overlay';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MenuContentComponent_ng_container_3_ng_template_1_Template(rf, ctx) { }
const _c0 = function (a0) { return { $implicit: a0 }; };
function MenuContentComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MenuContentComponent_ng_container_3_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const menuItem_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", menuItem_r2.template)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, ctx_r1.item));
} }
export class MenuContentComponent {
    constructor() {
        this.menuItems = [];
        this.isLeaf = false;
        ///
        this.openSubMenu = new EventEmitter();
        this.closeLeafMenu = new EventEmitter();
        this.closeAllMenus = new EventEmitter();
        // @ViewChild('menu') public menuElement: ElementRef;
        // @ViewChildren('li') public menuItemElements: QueryList<ElementRef>;
        this.autoFocus = false;
        this.subscription = new Subscription();
    }
    ngOnInit() { }
    ngAfterViewInit() {
        if (this.autoFocus) {
            setTimeout(() => this.focus());
        }
        this.overlay.updatePosition();
        this._keyManager = new ActiveDescendantKeyManager(this.menu.menuOptions).withWrap();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    focus() {
        if (this.autoFocus) {
            // this.menuElement.nativeElement.focus();
        }
    }
    stopEvent($event) {
        $event.stopPropagation();
    }
    isMenuItemEnabled(menuItem) {
        return this.evaluateIfFunction(menuItem && menuItem.menuItemEnabled);
    }
    isMenuItemVisible(menuItem) {
        return this.evaluateIfFunction(menuItem && menuItem.menuItemVisible);
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
        const option = this._keyManager.activeItem;
        option._clickViaInteraction();
        // if (menuItem) {
        //   this.onMenuItemSelect(menuItem, event);
        // }
    }
    onCloseLeafMenu(event) {
        if (!this.isLeaf) {
            return;
        }
        this.cancelEvent(event);
        this.closeLeafMenu.emit({ exceptRootMenu: event.key === "ArrowLeft" /* ArrowLeft */, event });
    }
    // @HostListener('document:contextmenu', ['$event'])
    closeMenu(event) {
        if (event.type === 'click' && event.button === 2) {
            return;
        }
        this.closeAllMenus.emit({ event });
    }
    onMouseLeave(event) {
        if (this.isLeaf) {
            this.closeLeafMenu.emit({ exceptRootMenu: true, event });
        }
    }
    onOpenSubMenu(menuItem, event) {
        // const anchorElementRef = this.menuItemElements.toArray()[this._keyManager.activeItemIndex];
        // const anchorElement = anchorElementRef && anchorElementRef.nativeElement;
        // this.openSubMenu.emit({
        //   anchorElement,
        //   menu: menuItem.subMenu,
        //   event,
        //   item: this.item,
        //   // parentMenu: this,
        // });
    }
    onMenuItemSelect(menuItem, event) {
        event.preventDefault();
        event.stopPropagation();
        this.onOpenSubMenu(menuItem, event);
        // if (!menuItem.subMenu) {
        //   menuItem.triggerExecute(this.item, event);
        // }
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
MenuContentComponent.ɵfac = function MenuContentComponent_Factory(t) { return new (t || MenuContentComponent)(); };
MenuContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MenuContentComponent, selectors: [["menu-content"]], hostBindings: function MenuContentComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown.ArrowDown", function MenuContentComponent_keydown_ArrowDown_HostBindingHandler($event) { return ctx.onKeyEvent($event); }, false, i0.ɵɵresolveWindow)("keydown.ArrowUp", function MenuContentComponent_keydown_ArrowUp_HostBindingHandler($event) { return ctx.onKeyEvent($event); }, false, i0.ɵɵresolveWindow)("keydown.ArrowRight", function MenuContentComponent_keydown_ArrowRight_HostBindingHandler($event) { return ctx.keyboardOpenSubMenu($event); }, false, i0.ɵɵresolveWindow)("keydown.Enter", function MenuContentComponent_keydown_Enter_HostBindingHandler($event) { return ctx.keyboardMenuItemSelect($event); }, false, i0.ɵɵresolveWindow)("keydown.Space", function MenuContentComponent_keydown_Space_HostBindingHandler($event) { return ctx.keyboardMenuItemSelect($event); }, false, i0.ɵɵresolveWindow)("keydown.Escape", function MenuContentComponent_keydown_Escape_HostBindingHandler($event) { return ctx.onCloseLeafMenu($event); }, false, i0.ɵɵresolveWindow)("keydown.ArrowLeft", function MenuContentComponent_keydown_ArrowLeft_HostBindingHandler($event) { return ctx.onCloseLeafMenu($event); }, false, i0.ɵɵresolveWindow)("click", function MenuContentComponent_click_HostBindingHandler($event) { return ctx.closeMenu($event); }, false, i0.ɵɵresolveDocument)("mouseleave", function MenuContentComponent_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave($event); });
    } }, inputs: { menuItems: "menuItems", item: "item", event: "event", menu: "menu", parentMenu: "parentMenu", menuClass: "menuClass", overlay: "overlay", isLeaf: "isLeaf" }, outputs: { openSubMenu: "openSubMenu", closeLeafMenu: "closeLeafMenu", closeAllMenus: "closeAllMenus" }, decls: 4, vars: 2, consts: [["tabindex", "0", 1, "menu-container", "novo-menu", 3, "ngClass"], ["tabindex", "0", 1, "menu", 2, "position", "static", "float", "none"], ["menu", ""], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function MenuContentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "ul", 1, 2);
        i0.ɵɵtemplate(3, MenuContentComponent_ng_container_3_Template, 2, 4, "ng-container", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.menuClass);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.menuItems);
    } }, directives: [i1.NgClass, i1.NgForOf, i1.NgTemplateOutlet], styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}[_nghost-%COMP%]   .passive[_ngcontent-%COMP%]{clear:both;display:block;font-weight:400;padding:3px 20px;white-space:nowrap}[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]{width:180px}[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{-webkit-padding-start:0!important;background-color:var(--background-alt);box-shadow:0 -1px 3px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);cursor:default;list-style:none;padding-inline-start:0!important}[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{background:rgba(74,137,220,.1);color:#3d464d}[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active{background:rgba(74,137,220,.4)}[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item-container[_ngcontent-%COMP%]{align-items:center;display:flex;position:relative}[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item-container[_ngcontent-%COMP%]   .sub-menu-caret[_ngcontent-%COMP%]{position:absolute;right:.5rem}[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{align-items:center;box-sizing:border-box;color:inherit;cursor:pointer;display:inline;display:flex;flex:1;font-weight:400;gap:1rem;margin:0;padding:1rem 1rem 1rem 1.25rem}[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{background:#e2e2e2;height:1px;order:none}[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]{color:#bebebe;cursor:not-allowed}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuContentComponent, [{
        type: Component,
        args: [{
                selector: 'menu-content',
                styleUrls: ['./menu-content.component.scss'],
                template: `<div class="menu-container novo-menu" [ngClass]="menuClass" tabindex="0">
    <ul #menu class="menu" style="position: static; float: none;" tabindex="0">
      <ng-container *ngFor="let menuItem of menuItems; let i = index">
        <ng-template [ngTemplateOutlet]="menuItem.template" [ngTemplateOutletContext]="{ $implicit: item }"></ng-template>
        <!-- <novo-icon class="sub-menu-caret" suffix *ngIf="!!menuItem.subMenu" size="small" color="ash">expand</novo-icon> -->
      </ng-container>
    </ul>
  </div> `,
            }]
    }], function () { return []; }, { menuItems: [{
            type: Input
        }], item: [{
            type: Input
        }], event: [{
            type: Input
        }], menu: [{
            type: Input
        }], parentMenu: [{
            type: Input
        }], menuClass: [{
            type: Input
        }], overlay: [{
            type: Input
        }], isLeaf: [{
            type: Input
        }], openSubMenu: [{
            type: Output
        }], closeLeafMenu: [{
            type: Output
        }], closeAllMenus: [{
            type: Output
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
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9tZW51L21lbnUtY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0lBYTlCLDZCQUNFO0lBQUEsb0dBQW9HO0lBRXRHLDBCQUFlOzs7O0lBRkEsZUFBc0M7SUFBdEMsdURBQXNDLG9FQUFBOztBQU0zRCxNQUFNLE9BQU8sb0JBQW9CO0lBbUIvQjtRQWxCZ0IsY0FBUyxHQUF3QixFQUFFLENBQUM7UUFPcEMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUMvQixHQUFHO1FBQ2MsZ0JBQVcsR0FBa0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRSxrQkFBYSxHQUFxQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JFLGtCQUFhLEdBQXdDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekYscURBQXFEO1FBQ3JELHNFQUFzRTtRQUUvRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGlCQUFZLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVoQixRQUFRLEtBQVUsQ0FBQztJQUVuQixlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FB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LENBQUM7O2tCQUMvQyxZQUFZO21CQUFDLHNCQUFzQixFQUFFLENBQUMsUUFBUSxDQUFDO1lBZ0J6QyxlQUFlO2tCQUZyQixZQUFZO21CQUFDLHVCQUF1QixFQUFFLENBQUMsUUFBUSxDQUFDOztrQkFDaEQsWUFBWTttQkFBQywwQkFBMEIsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQVc3QyxTQUFTO2tCQURmLFlBQVk7bUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFTbkMsWUFBWTtrQkFEbEIsWUFBWTttQkFBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmVEZXNjZW5kYW50S2V5TWFuYWdlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBLZXkgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBOb3ZvT3B0aW9uIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IE1lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9tZW51LWl0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB0eXBlIHsgTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2xvc2VMZWFmTWVudUV2ZW50LCBJTWVudUNsaWNrRXZlbnQgfSBmcm9tICcuL21lbnUuc2VydmljZSc7XG5pbXBvcnQgeyBJTGlua0NvbmZpZyB9IGZyb20gJy4vbWVudS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lbnUtY29udGVudCcsXG4gIHN0eWxlVXJsczogWycuL21lbnUtY29udGVudC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtZW51LWNvbnRhaW5lciBub3ZvLW1lbnVcIiBbbmdDbGFzc109XCJtZW51Q2xhc3NcIiB0YWJpbmRleD1cIjBcIj5cbiAgICA8dWwgI21lbnUgY2xhc3M9XCJtZW51XCIgc3R5bGU9XCJwb3NpdGlvbjogc3RhdGljOyBmbG9hdDogbm9uZTtcIiB0YWJpbmRleD1cIjBcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1lbnVJdGVtIG9mIG1lbnVJdGVtczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibWVudUl0ZW0udGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGl0ZW0gfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwhLS0gPG5vdm8taWNvbiBjbGFzcz1cInN1Yi1tZW51LWNhcmV0XCIgc3VmZml4ICpuZ0lmPVwiISFtZW51SXRlbS5zdWJNZW51XCIgc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJhc2hcIj5leHBhbmQ8L25vdm8taWNvbj4gLS0+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L3VsPlxuICA8L2Rpdj4gYCxcbn0pXG5leHBvcnQgY2xhc3MgTWVudUNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBtZW51SXRlbXM6IE1lbnVJdGVtRGlyZWN0aXZlW10gPSBbXTtcbiAgQElucHV0KCkgcHVibGljIGl0ZW06IGFueTtcbiAgQElucHV0KCkgcHVibGljIGV2ZW50OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudDtcbiAgQElucHV0KCkgcHVibGljIG1lbnU6IE1lbnVDb21wb25lbnQ7XG4gIEBJbnB1dCgpIHB1YmxpYyBwYXJlbnRNZW51OiBNZW51Q29udGVudENvbXBvbmVudDtcbiAgQElucHV0KCkgcHVibGljIG1lbnVDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgb3ZlcmxheTogT3ZlcmxheVJlZjtcbiAgQElucHV0KCkgcHVibGljIGlzTGVhZiA9IGZhbHNlO1xuICAvLy9cbiAgQE91dHB1dCgpIHB1YmxpYyBvcGVuU3ViTWVudTogRXZlbnRFbWl0dGVyPElNZW51Q2xpY2tFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgY2xvc2VMZWFmTWVudTogRXZlbnRFbWl0dGVyPENsb3NlTGVhZk1lbnVFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgY2xvc2VBbGxNZW51czogRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IE1vdXNlRXZlbnQgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIEBWaWV3Q2hpbGQoJ21lbnUnKSBwdWJsaWMgbWVudUVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIC8vIEBWaWV3Q2hpbGRyZW4oJ2xpJykgcHVibGljIG1lbnVJdGVtRWxlbWVudHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBwdWJsaWMgYXV0b0ZvY3VzID0gZmFsc2U7XG4gIHByaXZhdGUgX2tleU1hbmFnZXI6IEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyPE5vdm9PcHRpb24+O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5mb2N1cygpKTtcbiAgICB9XG4gICAgdGhpcy5vdmVybGF5LnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgdGhpcy5fa2V5TWFuYWdlciA9IG5ldyBBY3RpdmVEZXNjZW5kYW50S2V5TWFuYWdlcjxOb3ZvT3B0aW9uPih0aGlzLm1lbnUubWVudU9wdGlvbnMpLndpdGhXcmFwKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XG4gICAgICAvLyB0aGlzLm1lbnVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBzdG9wRXZlbnQoJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgcHVibGljIGlzTWVudUl0ZW1FbmFibGVkKG1lbnVJdGVtOiBNZW51SXRlbURpcmVjdGl2ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmV2YWx1YXRlSWZGdW5jdGlvbihtZW51SXRlbSAmJiBtZW51SXRlbS5tZW51SXRlbUVuYWJsZWQpO1xuICB9XG5cbiAgcHVibGljIGlzTWVudUl0ZW1WaXNpYmxlKG1lbnVJdGVtOiBNZW51SXRlbURpcmVjdGl2ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmV2YWx1YXRlSWZGdW5jdGlvbihtZW51SXRlbSAmJiBtZW51SXRlbS5tZW51SXRlbVZpc2libGUpO1xuICB9XG5cbiAgcHVibGljIGV2YWx1YXRlSWZGdW5jdGlvbih2YWx1ZTogYW55KTogYW55IHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgcmV0dXJuIHZhbHVlKHRoaXMuaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0Rpc2FibGVkKGxpbms6IElMaW5rQ29uZmlnKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGxpbmsuZW5hYmxlZCAmJiAhbGluay5lbmFibGVkKHRoaXMuaXRlbSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5BcnJvd0Rvd24nLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5BcnJvd1VwJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uS2V5RXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNMZWFmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2tleU1hbmFnZXIub25LZXlkb3duKGV2ZW50KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLkFycm93UmlnaHQnLCBbJyRldmVudCddKVxuICBwdWJsaWMga2V5Ym9hcmRPcGVuU3ViTWVudShldmVudD86IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNMZWFmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2FuY2VsRXZlbnQoZXZlbnQpO1xuICAgIGNvbnN0IG1lbnVJdGVtID0gdGhpcy5tZW51SXRlbXNbdGhpcy5fa2V5TWFuYWdlci5hY3RpdmVJdGVtSW5kZXhdO1xuICAgIGlmIChtZW51SXRlbSkge1xuICAgICAgdGhpcy5vbk9wZW5TdWJNZW51KG1lbnVJdGVtKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5FbnRlcicsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLlNwYWNlJywgWyckZXZlbnQnXSlcbiAgcHVibGljIGtleWJvYXJkTWVudUl0ZW1TZWxlY3QoZXZlbnQ/OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzTGVhZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNhbmNlbEV2ZW50KGV2ZW50KTtcbiAgICBjb25zdCBtZW51SXRlbSA9IHRoaXMubWVudUl0ZW1zW3RoaXMuX2tleU1hbmFnZXIuYWN0aXZlSXRlbUluZGV4XTtcbiAgICBjb25zdCBvcHRpb24gPSB0aGlzLl9rZXlNYW5hZ2VyLmFjdGl2ZUl0ZW07XG4gICAgb3B0aW9uLl9jbGlja1ZpYUludGVyYWN0aW9uKCk7XG4gICAgLy8gaWYgKG1lbnVJdGVtKSB7XG4gICAgLy8gICB0aGlzLm9uTWVudUl0ZW1TZWxlY3QobWVudUl0ZW0sIGV2ZW50KTtcbiAgICAvLyB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5Fc2NhcGUnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5BcnJvd0xlZnQnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25DbG9zZUxlYWZNZW51KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzTGVhZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNhbmNlbEV2ZW50KGV2ZW50KTtcbiAgICB0aGlzLmNsb3NlTGVhZk1lbnUuZW1pdCh7IGV4Y2VwdFJvb3RNZW51OiBldmVudC5rZXkgPT09IEtleS5BcnJvd0xlZnQsIGV2ZW50IH0pO1xuICB9XG5cbiAgLy8gQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y29udGV4dG1lbnUnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBjbG9zZU1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJiBldmVudC5idXR0b24gPT09IDIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jbG9zZUFsbE1lbnVzLmVtaXQoeyBldmVudCB9KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25Nb3VzZUxlYXZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNMZWFmKSB7XG4gICAgICB0aGlzLmNsb3NlTGVhZk1lbnUuZW1pdCh7IGV4Y2VwdFJvb3RNZW51OiB0cnVlLCBldmVudCB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25PcGVuU3ViTWVudShtZW51SXRlbTogTWVudUl0ZW1EaXJlY3RpdmUsIGV2ZW50PzogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBjb25zdCBhbmNob3JFbGVtZW50UmVmID0gdGhpcy5tZW51SXRlbUVsZW1lbnRzLnRvQXJyYXkoKVt0aGlzLl9rZXlNYW5hZ2VyLmFjdGl2ZUl0ZW1JbmRleF07XG4gICAgLy8gY29uc3QgYW5jaG9yRWxlbWVudCA9IGFuY2hvckVsZW1lbnRSZWYgJiYgYW5jaG9yRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIC8vIHRoaXMub3BlblN1Yk1lbnUuZW1pdCh7XG4gICAgLy8gICBhbmNob3JFbGVtZW50LFxuICAgIC8vICAgbWVudTogbWVudUl0ZW0uc3ViTWVudSxcbiAgICAvLyAgIGV2ZW50LFxuICAgIC8vICAgaXRlbTogdGhpcy5pdGVtLFxuICAgIC8vICAgLy8gcGFyZW50TWVudTogdGhpcyxcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbk1lbnVJdGVtU2VsZWN0KG1lbnVJdGVtOiBNZW51SXRlbURpcmVjdGl2ZSwgZXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm9uT3BlblN1Yk1lbnUobWVudUl0ZW0sIGV2ZW50KTtcbiAgICAvLyBpZiAoIW1lbnVJdGVtLnN1Yk1lbnUpIHtcbiAgICAvLyAgIG1lbnVJdGVtLnRyaWdnZXJFeGVjdXRlKHRoaXMuaXRlbSwgZXZlbnQpO1xuICAgIC8vIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FuY2VsRXZlbnQoZXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0OiBIVE1MRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoWydJTlBVVCcsICdURVhUQVJFQScsICdTRUxFQ1QnXS5pbmRleE9mKHRhcmdldC50YWdOYW1lKSA+IC0xIHx8IHRhcmdldC5pc0NvbnRlbnRFZGl0YWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiJdfQ==