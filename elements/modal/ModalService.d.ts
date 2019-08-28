import { ViewContainerRef, Type } from '@angular/core';
import { NovoModalRef } from './Modal';
import { ComponentUtils } from './../../utils/component-utils/ComponentUtils';
export declare class NovoModalService {
    private componentUtils;
    _parentViewContainer: ViewContainerRef;
    constructor(componentUtils: ComponentUtils);
    parentViewContainer: ViewContainerRef;
    open<T>(component: Type<T>, scope?: {}): NovoModalRef;
}
