import { ComponentFactoryResolver, ComponentRef, StaticProvider, Type, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ComponentUtils {
    componentFactoryResolver: ComponentFactoryResolver;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    append<T>(ComponentClass: Type<T>, location: ViewContainerRef, providers?: StaticProvider[], onTop?: boolean): ComponentRef<T>;
    static ɵfac: i0.ɵɵFactoryDef<ComponentUtils, never>;
    static ɵprov: i0.ɵɵInjectableDef<ComponentUtils>;
}
