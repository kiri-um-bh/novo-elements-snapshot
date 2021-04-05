import { Highlightable } from '@angular/cdk/a11y';
import { ElementRef, EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MenuItemDirective implements Highlightable {
    template: TemplateRef<{
        item: any;
    }>;
    elementRef: ElementRef;
    subMenu: any;
    divider: boolean;
    enabled: boolean | ((item: any) => boolean);
    passive: boolean;
    visible: boolean | ((item: any) => boolean);
    name: string;
    execute: EventEmitter<{
        event: Event;
        item: any;
    }>;
    currentItem: any;
    isActive: boolean;
    get disabled(): boolean;
    constructor(template: TemplateRef<{
        item: any;
    }>, elementRef: ElementRef);
    evaluateIfFunction(value: any, item: any): any;
    setActiveStyles(): void;
    setInactiveStyles(): void;
    triggerExecute(item: any, $event?: MouseEvent | KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<MenuItemDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MenuItemDirective, "[menuItem]", never, { "subMenu": "subMenu"; "divider": "divider"; "enabled": "enabled"; "passive": "passive"; "visible": "visible"; "name": "name"; }, { "execute": "execute"; }, never>;
}
