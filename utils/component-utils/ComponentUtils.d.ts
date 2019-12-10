import { ComponentFactoryResolver, ComponentRef, ViewContainerRef, StaticProvider, Type } from '@angular/core';
export declare class ComponentUtils {
    componentFactoryResolver: ComponentFactoryResolver;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    append<T>(ComponentClass: Type<T>, location: ViewContainerRef, providers?: StaticProvider[], onTop?: boolean): ComponentRef<T>;
}
