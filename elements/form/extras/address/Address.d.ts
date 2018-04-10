import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NovoLabelService } from '../../../../services/novo-label-service';
export interface NovoAddressSubfieldConfig {
    label: string;
}
export interface NovoAddressConfig {
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
    constructor(labels: NovoLabelService);
    ngOnInit(): void;
    onCountryChange(evt: any): void;
    onStateChange(evt: any): void;
    updateStates(): void;
    updateControl(): void;
    writeValue(model: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
}
