import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuContentComponent } from './menu-content.component';
import { MenuComponent } from './menu.component';
import { NovoMenuService } from './menu.service';
import * as i0 from "@angular/core";
export declare class MenuDirective implements OnInit, OnDestroy {
    private element;
    private menuService;
    private cdr;
    private _parentMenu;
    menuContext: any;
    menu: MenuComponent;
    menuContent: MenuContentComponent;
    waitWhenOpen: boolean;
    capture: boolean;
    anchor: boolean;
    trigger: 'click' | 'contextmenu' | 'mouseenter';
    isSubMenu: boolean;
    isActive: boolean;
    get hb_menuActive(): boolean;
    subscription: Subscription;
    constructor(element: ElementRef, menuService: NovoMenuService, cdr: ChangeDetectorRef, _parentMenu: MenuComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onMenuClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<MenuDirective, [null, null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MenuDirective, "[menu]", never, { "menuContext": "menuContext"; "menu": "menu"; "menuContent": "menuContent"; "waitWhenOpen": "waitWhenOpen"; "capture": "capture"; "anchor": "anchor"; "trigger": "trigger"; }, {}, never>;
}
