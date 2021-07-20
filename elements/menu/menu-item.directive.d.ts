import { ElementRef, TemplateRef } from '@angular/core';
import { NovoOption } from '../common';
import * as i0 from "@angular/core";
/**
 * This is a structural directive now.  Should only be used on `novo-options`
 */
export declare class MenuItemDirective {
    template: TemplateRef<{
        item: any;
    }>;
    elementRef: ElementRef;
    menuItemEnabled: boolean | ((item: any) => boolean);
    menuItemVisible: boolean | ((item: any) => boolean);
    optionRef: NovoOption;
    currentItem: any;
    constructor(template: TemplateRef<{
        item: any;
    }>, elementRef: ElementRef);
    static ɵfac: i0.ɵɵFactoryDef<MenuItemDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MenuItemDirective, "[menuItem]", never, { "menuItemEnabled": "menuItemEnabled"; "menuItemVisible": "menuItemVisible"; }, {}, ["optionRef"]>;
}
