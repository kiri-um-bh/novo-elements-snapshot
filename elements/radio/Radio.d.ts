import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class NovoRadioGroup {
    static ɵfac: i0.ɵɵFactoryDef<NovoRadioGroup, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NovoRadioGroup, "novo-radio-group", never, {}, {}, never, ["*"]>;
}
export declare class NovoRadioElement implements ControlValueAccessor {
    private ref;
    name: string;
    value: any;
    checked: boolean;
    vertical: boolean;
    label: string;
    button: boolean;
    theme: string;
    icon: string;
    disabled: boolean;
    change: EventEmitter<any>;
    model: any;
    onModelChange: Function;
    onModelTouched: Function;
    constructor(ref: ChangeDetectorRef);
    select(event: MouseEvent): void;
    writeValue(model: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(disabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<NovoRadioElement, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NovoRadioElement, "novo-radio", never, { "name": "name"; "value": "value"; "checked": "checked"; "vertical": "vertical"; "label": "label"; "button": "button"; "theme": "theme"; "icon": "icon"; "disabled": "disabled"; }, { "change": "change"; }, never, ["*"]>;
}
