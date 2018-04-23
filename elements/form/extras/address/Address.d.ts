import { OnInit, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NovoLabelService } from '../../../../services/novo-label-service';
export interface NovoAddressSubfieldConfig {
    label: string;
    required: boolean;
    maxlength: number;
}
export interface NovoAddressConfig {
    required?: boolean;
    address1?: NovoAddressSubfieldConfig;
    address2?: NovoAddressSubfieldConfig;
    city?: NovoAddressSubfieldConfig;
    state?: NovoAddressSubfieldConfig;
    zip?: NovoAddressSubfieldConfig;
    country?: NovoAddressSubfieldConfig;
}
export declare class NovoAddressElement implements ControlValueAccessor, OnInit {
    labels: NovoLabelService;
    config: NovoAddressConfig;
    states: Array<any>;
    countries: Array<any>;
    fieldList: Array<string>;
    model: any;
    onModelChange: Function;
    onModelTouched: Function;
    focused: any;
    invalid: any;
    invalidMaxlength: any;
    valid: any;
    change: EventEmitter<any>;
    focus: EventEmitter<any>;
    blur: EventEmitter<any>;
    constructor(labels: NovoLabelService);
    ngOnInit(): void;
    isValid(field: string): void;
    isInvalid(field: string): void;
    onInput(event: Event, field: string): void;
    isFocused(event: Event, field: string): void;
    isBlurred(event: Event, field: string): void;
    onCountryChange(evt: any): void;
    onStateChange(evt: any): void;
    updateStates(): void;
    updateControl(): void;
    writeValue(model: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
}
