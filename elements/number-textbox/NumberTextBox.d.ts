import { ElementRef, ChangeDetectorRef, NgZone } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NovoLabelService } from '../../services/novo-label-service';
export declare class NovoNumberTextBoxElement implements ControlValueAccessor {
    element: ElementRef;
    labels: NovoLabelService;
    private _changeDetectorRef;
    private ngZone;
    config: any;
    name: string;
    subType: string;
    placeholder: string;
    value: number;
    private _decimalSeparator;
    private numbersWithDecimalRegex;
    private invalidMaxlength;
    private invalid;
    /** View -> model callback called when value changes */
    _onChange: (value: any) => void;
    /** View -> model callback called when autocomplete has been touched */
    _onTouched: () => void;
    /** Element for the panel containing the autocomplete options. */
    input: any;
    constructor(element: ElementRef, labels: NovoLabelService, _changeDetectorRef: ChangeDetectorRef, ngZone: NgZone);
    _handleKeydown(event: KeyboardEvent): void;
    _handleInput(event: KeyboardEvent, isPercent?: boolean): void;
    restrictKeys(event: any): void;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    private _setValue(displayValue, parsedValue);
    private _handlePercentInput(value, parsedValue);
    /**
     * replace decimal separator with period and parse
     */
    private replaceDecimalSeperatorAndParse(decimalSeparator, value);
    private isInvalid(value, strLength);
    decimalSeparator: any;
}
