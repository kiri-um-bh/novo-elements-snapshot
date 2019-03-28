import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { NovoControlConfig } from './FormControls';
import { IFieldInteractionEvent } from './FormInterfaces';
import { IMaskOptions } from './Control';
export declare class NovoFormControl extends FormControl {
    displayValueChanges: EventEmitter<any>;
    hidden: boolean;
    encrypted: boolean;
    key: string;
    required: boolean;
    readOnly: boolean;
    hasRequiredValidator: boolean;
    label: string;
    tooltip: string;
    tooltipPosition: string;
    tooltipSize?: string;
    tooltipPreline?: boolean;
    removeTooltipArrow?: boolean;
    tooltipAutoPosition?: boolean;
    initialValue: any;
    valueHistory: any[];
    validators: any;
    config: any;
    sortOrder: number;
    controlType: string;
    placeholder: string;
    multiple: boolean;
    headerConfig: any;
    optionsType: string;
    maxlength: number;
    minlength: number;
    options: Array<any>;
    type: string;
    subType: string;
    name: string;
    closeOnSelect: boolean;
    interactions: Array<Object>;
    appendToBody: boolean;
    parentScrollSelector: string;
    description?: string;
    layoutOptions?: {
        order?: string;
        download?: boolean;
        labelStyle?: string;
        draggable?: boolean;
        iconStyle?: string;
    };
    military?: boolean;
    dateFormat?: string;
    currencyFormat?: string;
    startDate?: Date | Number;
    endDate?: Date | Number;
    textMaskEnabled?: boolean;
    maskOptions: IMaskOptions;
    allowInvalidDate?: boolean;
    tipWell?: {
        tip: string;
        icon?: string;
        button?: boolean;
    };
    rawValue?: any;
    customControlConfig?: any;
    checkboxLabel?: string;
    restrictFieldInteractions?: boolean;
    warning?: string;
    private historyTimeout;
    constructor(value: any, control: NovoControlConfig);
    /**
     * @name hide
     * @param clearValue - flag to reset the control's value
     */
    hide(clearValue?: boolean): void;
    /**
     * @name show
     */
    show(): void;
    /**
     * @name setRequired
     * @param isRequired
     */
    setRequired(isRequired: boolean): void;
    /**
     * @name setValue
     *
     * @param value
     * @param onlySelf
     * @param emitEvent
     * @param emitModelToViewChange
     * @param emitViewToModelChange
     *
     */
    setValue(value: any, {onlySelf, emitEvent, emitModelToViewChange, emitViewToModelChange}?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
        emitModelToViewChange?: boolean;
        emitViewToModelChange?: boolean;
    }): void;
    /**
     * @name setReadOnly
     * @param isReadOnly
     */
    setReadOnly(isReadOnly: boolean): void;
    /**
     * Disables the control. This means the control will be exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children will be disabled to maintain the model.
     */
    disable(opts?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    enable(opts?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    /**
     * @name markAsInvalid
     * @param message
     */
    markAsInvalid(message: string): void;
}
export declare class NovoFormGroup extends FormGroup {
    fieldInteractionEvents: EventEmitter<IFieldInteractionEvent>;
    layout: string;
    edit: boolean;
    currentEntity: string;
    currentEntityId: string;
    associations: object;
    _value: any;
    value: any;
}
