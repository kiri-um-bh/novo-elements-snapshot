import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NovoLabelService } from '../../services/novo-label-service';
export declare class NovoDateTimePickerInputElement implements ControlValueAccessor {
    element: ElementRef;
    labels: NovoLabelService;
    private _changeDetectorRef;
    value: any;
    datePart: any;
    timePart: any;
    /** View -> model callback called when value changes */
    _onChange: (value: any) => void;
    /** View -> model callback called when autocomplete has been touched */
    _onTouched: () => void;
    name: string;
    placeholder: string;
    maskOptions: any;
    military: boolean;
    format: string;
    constructor(element: ElementRef, labels: NovoLabelService, _changeDetectorRef: ChangeDetectorRef);
    writeValue(value: any): void;
    updateDate(event: any): void;
    updateTime(event: any): void;
    checkParts(): void;
    registerOnChange(fn: (value: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    dispatchOnChange(newValue?: any): void;
    private _setTriggerValue(value);
    setValue(event: any | null): void;
    setValueAndClose(event: any | null): void;
    /**
     * Clear any previous selected option and emit a selection change event for this option
     */
    clearValue(): void;
    readonly hasValue: boolean;
}
