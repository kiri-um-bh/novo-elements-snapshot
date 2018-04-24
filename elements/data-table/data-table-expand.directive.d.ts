import { TemplateRef, ViewContainerRef } from '@angular/core';
export declare class NovoDataTableExpandDirective<T> {
    vcRef: ViewContainerRef;
    opened: boolean;
    row: T;
    template: TemplateRef<any>;
    constructor(vcRef: ViewContainerRef);
    onClick(event: MouseEvent): void;
    private toggle();
    private render();
}
