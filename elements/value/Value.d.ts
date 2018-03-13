import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
export declare enum NOVO_VALUE_TYPE {
    DEFAULT = 0,
    ENTITY_LIST = 1,
    LINK = 2,
    INTERNAL_LINK = 3,
}
export declare enum NOVO_VALUE_THEME {
    DEFAULT = 0,
    MOBILE = 1,
}
export declare class NovoValueElement implements OnInit, OnChanges {
    data: any;
    meta: any;
    theme: NOVO_VALUE_THEME;
    type: NOVO_VALUE_TYPE;
    NOVO_VALUE_TYPE: typeof NOVO_VALUE_TYPE;
    NOVO_VALUE_THEME: typeof NOVO_VALUE_THEME;
    url: string;
    customClass: string;
    ngOnInit(): void;
    readonly isMobile: boolean;
    iconClass(icon: any): string;
    readonly isDefault: boolean;
    readonly showLabel: boolean;
    readonly showIcon: boolean;
    onValueClick(icon: any): void;
    openLink(): void;
    ngOnChanges(changes?: SimpleChanges): any;
    isLinkField(field: {
        name?: string;
        type?: NOVO_VALUE_TYPE;
    }, data: any): boolean;
    isEntityList(type: string): boolean;
    isHTMLField(meta: any): boolean;
}
