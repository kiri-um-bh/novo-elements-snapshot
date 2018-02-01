import { TemplateRef, ViewContainerRef } from '@angular/core';
import { Security } from './../../services/security/Security';
export declare class Unless {
    private templateRef;
    private viewContainer;
    private security;
    permissions: string;
    isDisplayed: boolean;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, security: Security);
    bhUnless: string;
    check(): void;
}
