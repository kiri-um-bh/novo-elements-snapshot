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
declare class ControlConfig {
    allowInvalidDate?: boolean;
    appendToBody: boolean;
    associatedEntity: string;
    asyncValidators?: Array<any>;
    checkboxLabel: string;
    closeOnSelect: boolean;
    config: any;
    controlType: string;
    currencyFormat: string;
    customControl?: any;
    customControlConfig?: any;
    dataSpecialization: string;
    dataType: string;
    dateFormat?: string;
    description?: string;
    dirty: boolean;
    disabled: boolean;
    encrypted: boolean;
    endDate?: Date | Number;
    fileBrowserImageUploadUrl?: string;
    forceClear: EventEmitter<any>;
    headerConfig: any;
    hidden: boolean;
    interactions: Array<{
        event?: 'change' | 'focus' | string;
        invokeOnInit?: boolean;
        script?: any;
    }>;
    isEmpty?: Function;
    key: string;
    label: string;
    maskOptions?: IMaskOptions;
    maxlength: number;
    metaType: string;
    military?: boolean;
    minimal?: boolean;
    minlength: number;
    multiple: boolean;
    name: string;
    options: Array<any>;
    optionsType: string;
    parentScrollSelector: string;
    placeholder: string;
    readOnly: boolean;
    removeTooltipArrow?: boolean;
    required: boolean;
    restrictFieldInteractions?: boolean;
    sortOrder: number;
    startDate?: Date | Number;
    startupFocus?: boolean;
    subType?: string;
    template?: any;
    textMaskEnabled?: boolean;
    tooltip?: string;
    tooltipAutoPosition?: boolean;
    tooltipPosition?: string;
    tooltipPreline?: boolean;
    tooltipSize?: string;
    type: string;
    validators: Array<any>;
    value: any;
    warning?: string;
    width: number;
    layoutOptions?: {
        customActions?: boolean;
        download?: boolean;
        draggable?: boolean;
        edit?: boolean;
        iconStyle?: string;
        labelStyle?: string;
        order?: string;
        removable?: boolean;
        customValidation?: {
            action: string;
            fn: Function;
        }[];
        removableWhenNew?: boolean;
    };
    tipWell?: {
        button?: boolean;
        icon?: string;
        tip: string;
    };
    isEmbedded: boolean;
    isInlineEmbedded: boolean;
    weekStart?: number;
    highlighted: boolean;
}
export declare type NovoControlConfig = Partial<ControlConfig>;
export declare class BaseControl extends ControlConfig {
    __type: string;
    __config: NovoControlConfig;
    constructor(type?: string, config?: NovoControlConfig);
}
export {};
