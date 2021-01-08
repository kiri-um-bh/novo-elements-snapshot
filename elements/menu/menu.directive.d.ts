import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuComponent } from './menu.component';
import { NovoMenuService } from './menu.service';
import * as i0 from "@angular/core";
export declare class MenuDirective implements OnInit, OnDestroy {
    private menuService;
    private cdr;
    menuContext: any;
    menu: MenuComponent;
    waitWhenOpen: boolean;
    capture: boolean;
    isActive: boolean;
    get hb_menuActive(): boolean;
    subscription: Subscription;
    constructor(menuService: NovoMenuService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onMenuClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<MenuDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MenuDirective, "[menu]", never, { "menuContext": "menuContext"; "menu": "menu"; "waitWhenOpen": "waitWhenOpen"; "capture": "capture"; }, {}, never>;
}
