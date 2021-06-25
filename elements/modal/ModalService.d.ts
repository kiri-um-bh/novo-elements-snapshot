import { ViewContainerRef, Type } from '@angular/core';
import { NovoModalRef } from './Modal';
import { ComponentUtils } from './../../utils/component-utils/ComponentUtils';
import * as i0 from "@angular/core";
export declare class NovoModalService {
    private componentUtils;
    _parentViewContainer: ViewContainerRef;
    constructor(componentUtils: ComponentUtils);
    set parentViewContainer(view: ViewContainerRef);
    open<T>(component: Type<T>, scope?: {}): NovoModalRef;
    static ɵfac: i0.ɵɵFactoryDef<NovoModalService, never>;
    static ɵprov: i0.ɵɵInjectableDef<NovoModalService>;
}
