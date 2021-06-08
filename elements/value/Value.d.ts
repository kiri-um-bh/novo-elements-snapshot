import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare enum NOVO_VALUE_TYPE {
    DEFAULT = 0,
    ENTITY_LIST = 1,
    LINK = 2,
    INTERNAL_LINK = 3
}
export declare enum NOVO_VALUE_THEME {
    DEFAULT = 0,
    MOBILE = 1
}
export declare class NovoValueElement implements OnInit, OnChanges {
    data: any;
    meta: any;
    theme: NOVO_VALUE_THEME;
    row: Boolean;
    _type: NOVO_VALUE_TYPE;
    NOVO_VALUE_TYPE: typeof NOVO_VALUE_TYPE;
    NOVO_VALUE_THEME: typeof NOVO_VALUE_THEME;
    url: string;
    customClass: string;
    set label(lbl: string);
    get label(): string;
    set type(typ: string);
    get type(): string;
    ngOnInit(): void;
    get isMobile(): boolean;
    iconClass(icon: any): string;
    get isDefault(): boolean;
    get showLabel(): boolean;
    get showIcon(): boolean;
    onValueClick(icon: any): void;
    openLink(): void;
    ngOnChanges(changes?: SimpleChanges): any;
    isLinkField(field: {
        name?: string;
        type?: NOVO_VALUE_TYPE;
    }, data: any): boolean;
    isEntityList(type: string): boolean;
    isHTMLField(meta: any): boolean;
    static ɵfac: i0.ɵɵFactoryDef<NovoValueElement, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NovoValueElement, "novo-value", never, { "data": "data"; "meta": "meta"; "theme": "theme"; "row": "row"; "label": "label"; "type": "type"; }, {}, never, never>;
}
