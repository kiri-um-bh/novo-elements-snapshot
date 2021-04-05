import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuComponent } from './menu.component';
import { NovoMenuService } from './menu.service';
import * as i0 from "@angular/core";
export declare class MenuDirective implements OnInit, OnDestroy {
    private element;
    private menuService;
    private cdr;
    menuContext: any;
    menu: MenuComponent;
    waitWhenOpen: boolean;
    capture: boolean;
    anchor: boolean;
    trigger: 'click' | 'contextmenu';
    isActive: boolean;
    get hb_menuActive(): boolean;
    subscription: Subscription;
    constructor(element: ElementRef, menuService: NovoMenuService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onMenuClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<MenuDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MenuDirective, "[menu]", never, { "menuContext": "menuContext"; "menu": "menu"; "waitWhenOpen": "waitWhenOpen"; "capture": "capture"; "anchor": "anchor"; "trigger": "trigger"; }, {}, never>;
}
