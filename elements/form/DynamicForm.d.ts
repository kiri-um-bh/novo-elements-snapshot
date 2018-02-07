import { OnInit, OnChanges, SimpleChanges, ViewContainerRef, ElementRef } from '@angular/core';
import { ComponentUtils } from './../../utils/component-utils/ComponentUtils';
import { NovoFieldset, NovoFormGroup } from './FormInterfaces';
export declare class NovoFieldsetHeaderElement {
    title: string;
    icon: string;
}
export declare class NovoControlCustom implements OnInit {
    private componentUtils;
    control: any;
    form: any;
    referencePoint: ViewContainerRef;
    controlComponent: any;
    constructor(componentUtils: ComponentUtils);
    ngOnInit(): void;
}
export declare class NovoFieldsetElement {
    controls: Array<any>;
    form: any;
    title: string;
    icon: string;
    index: number;
    autoFocus: boolean;
}
export declare class NovoDynamicFormElement implements OnChanges, OnInit {
    private element;
    controls: Array<any>;
    fieldsets: Array<NovoFieldset>;
    form: NovoFormGroup;
    layout: string;
    hideNonRequiredFields: boolean;
    autoFocusFirstField: boolean;
    allFieldsRequired: boolean;
    allFieldsNotRequired: boolean;
    showingAllFields: boolean;
    showingRequiredFields: boolean;
    numControls: number;
    constructor(element: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes?: SimpleChanges): void;
    showAllFields(): void;
    showOnlyRequired(hideRequiredWithValue: any): void;
    readonly values: any;
    readonly isValid: boolean;
    updatedValues(): any;
    forceValidation(): void;
}
