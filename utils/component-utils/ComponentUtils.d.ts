import { ComponentFactoryResolver, ComponentRef, ViewContainerRef, ResolvedReflectiveProvider, StaticProvider, Type } from '@angular/core';
export declare class ComponentUtils {
    componentFactoryResolver: ComponentFactoryResolver;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    /**
     * @deprecated use append() instead.
     */
    appendNextToLocation(ComponentClass: any, location: ViewContainerRef, providers?: ResolvedReflectiveProvider[]): ComponentRef<any>;
    /**
     * @deprecated
     */
    appendTopOfLocation(ComponentClass: any, location: ViewContainerRef, providers?: ResolvedReflectiveProvider[]): ComponentRef<any>;
    append<T>(ComponentClass: Type<T>, location: ViewContainerRef, providers?: StaticProvider[], onTop?: boolean): ComponentRef<T>;
}
