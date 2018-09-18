import { EventEmitter } from '@angular/core';
import { NovoControlGroupAddConfig } from '../ControlGroup';
import { IMaskOptions } from '../Control';
export interface NovoGroupedControlConfig {
    label?: string;
    icon?: string;
    add?: NovoControlGroupAddConfig;
    remove?: boolean;
    key: string;
    initialValue?: {}[];
}
export interface NovoControlConfig {
    validators?: Array<any>;
    asyncValidators?: Array<any>;
    value?: any;
    key?: string;
    label?: string;
    checkboxLabel?: string;
    required?: boolean;
    hidden?: boolean;
    encrypted?: boolean;
    sortOrder?: number;
    controlType?: string;
    placeholder?: string;
    config?: any;
    dirty?: boolean;
    multiple?: boolean;
    headerConfig?: any;
    currencyFormat?: string;
    associatedEntity?: string;
    optionsType?: string;
    forceClear?: EventEmitter<any>;
    disabled?: boolean;
    maxlength?: number;
    minlength?: number;
    options?: Array<any>;
    type?: string;
    subType?: string;
    name?: string;
    readOnly?: boolean;
    closeOnSelect?: boolean;
    interactions?: Array<Object>;
    dataSpecialization?: string;
    appendToBody?: boolean;
    parentScrollSelector?: string;
    description?: string;
    tooltip?: string;
    tooltipPosition?: string;
    tooltipSize?: string;
    tooltipPreline?: boolean;
    layoutOptions?: {
        order?: string;
        download?: boolean;
        edit?: boolean;
        customActions?: boolean;
        labelStyle?: string;
        draggable?: boolean;
        iconStyle?: string;
    };
    template?: any;
    customControlConfig?: any;
    military?: boolean;
    dateFormat?: string;
    textMaskEnabled?: boolean;
    maskOptions?: IMaskOptions;
    allowInvalidDate?: boolean;
    tipWell?: {
        tip: string;
        icon?: string;
        button?: boolean;
    };
    width?: number;
    startupFocus?: boolean;
    fileBrowserImageUploadUrl?: string;
    isEmpty?: Function;
    startDate?: Date | Number;
    endDate?: Date | Number;
}
export declare class BaseControl {
    __type: string;
    __config: NovoControlConfig;
    validators: Array<any>;
    asyncValidators?: Array<any>;
    value: any;
    key: string;
    label: string;
    checkboxLabel: string;
    required: boolean;
    hidden: boolean;
    encrypted: boolean;
    sortOrder: number;
    controlType: string;
    placeholder: string;
    config: any;
    dirty: boolean;
    multiple: boolean;
    headerConfig: any;
    currencyFormat: string;
    associatedEntity: string;
    optionsType: string;
    forceClear: EventEmitter<any>;
    maxlength: number;
    minlength: number;
    options: Array<any>;
    type: string;
    subType?: string;
    name: string;
    disabled: boolean;
    readOnly: boolean;
    closeOnSelect: boolean;
    interactions: Array<Object>;
    dataSpecialization: string;
    appendToBody: boolean;
    parentScrollSelector: string;
    description?: string;
    tooltip?: string;
    tooltipPosition?: string;
    tooltipSize?: string;
    tooltipPreline?: boolean;
    layoutOptions?: {
        order?: string;
        download?: boolean;
        labelStyle?: string;
        draggable?: boolean;
        iconStyle?: string;
    };
    template?: any;
    customControlConfig?: any;
    military?: boolean;
    dateFormat?: string;
    textMaskEnabled?: boolean;
    maskOptions?: IMaskOptions;
    allowInvalidDate?: boolean;
    tipWell?: {
        tip: string;
        icon?: string;
        button?: boolean;
    };
    width: number;
    startupFocus?: boolean;
    fileBrowserImageUploadUrl?: string;
    isEmpty?: Function;
    startDate?: Date | Number;
    endDate?: Date | Number;
    constructor(type?: string, config?: NovoControlConfig);
}
