import { OnInit } from '@angular/core';
export declare class EntityList implements OnInit {
    data: any;
    meta: any;
    baseEntity: string;
    ENTITY_SHORT_NAMES: any;
    constructor();
    ngOnInit(): any;
    getClass(entity: any): any;
    openLink(entity: any): void;
    isLinkable(entity: any): boolean;
}
