import { ChangeDetectorRef, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DateFormatService } from '../../services/date-format/DateFormat';
import { NovoLabelService } from '../../services/novo-label-service';
import { NovoOverlayTemplateComponent } from '../common/overlay/Overlay';
import * as i0 from "@angular/core";
export declare class NovoMultiDateInputElement implements OnInit, ControlValueAccessor {
    element: ElementRef;
    labels: NovoLabelService;
    private cdr;
    dateFormatService: DateFormatService;
    formattedStartDate: string;
    formattedEndDate: string;
    private userDefinedFormat;
    name: string;
    start: Date;
    end: Date;
    placeholder: string;
    format: string;
    allowInvalidDate: boolean;
    weekStart: number;
    chipsCount: number;
    blurEvent: EventEmitter<FocusEvent>;
    focusEvent: EventEmitter<FocusEvent>;
    /** Element for the panel containing the autocomplete options. */
    overlay: NovoOverlayTemplateComponent;
    change: EventEmitter<any>;
    blur: EventEmitter<any>;
    focus: EventEmitter<any>;
    private _value;
    private _disabled;
    private notShown;
    get value(): Date[];
    set value(value: Date[]);
    get disabled(): boolean;
    set disabled(value: boolean);
    constructor(element: ElementRef, labels: NovoLabelService, cdr: ChangeDetectorRef, dateFormatService: DateFormatService);
    ngOnInit(): void;
    formatter(value: any): string;
    /** BEGIN: Convenient Panel Methods. */
    openPanel(): void;
    closePanel(): void;
    get panelOpen(): boolean;
    /** END: Convenient Panel Methods. */
    _handleKeydown(event: KeyboardEvent): void;
    _handleBlur(event: FocusEvent): void;
    _handleFocus(event: FocusEvent): void;
    remove(event: any, date: Date): void;
    writeValue(value: any): void;
    setDisabledState(disabled: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    private onChangeCallback;
    private onTouchedCallback;
    private _setFormValue;
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     */
    setValueAndClose(event?: Date[]): void;
    /**
     * Clear any previous selected option and emit a selection change event for this option
     */
    clearValue(): void;
    get hasValue(): boolean;
    static ɵfac: i0.ɵɵFactoryDef<NovoMultiDateInputElement, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NovoMultiDateInputElement, "novo-multi-date-input", never, { "name": "name"; "start": "start"; "end": "end"; "placeholder": "placeholder"; "format": "format"; "allowInvalidDate": "allowInvalidDate"; "weekStart": "weekStart"; "chipsCount": "chipsCount"; "value": "value"; "disabled": "disabled"; }, { "blurEvent": "blurEvent"; "focusEvent": "focusEvent"; "change": "change"; "blur": "blur"; "focus": "focus"; }, never, never>;
}
