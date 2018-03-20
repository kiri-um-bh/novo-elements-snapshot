import { ElementRef, EventEmitter, OnInit, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NovoFormGroup } from './FormInterfaces';
import { OutsideClick } from '../../utils/outside-click/OutsideClick';
import { NovoLabelService } from '../../services/novo-label-service';
import { DateFormatService } from '../../services/date-format/DateFormat';
import { FieldInteractionApi } from './FieldInteractionApi';
export interface IMaskOptions {
    mask: any;
    keepCharPositions: boolean;
    guide: boolean;
}
export declare class NovoAutoSize implements AfterContentInit {
    element: ElementRef;
    onInput(textArea: HTMLTextAreaElement): void;
    constructor(element: ElementRef);
    ngAfterContentInit(): void;
    adjust(): void;
}
export declare class NovoCustomControlContainerElement {
    control: any;
    form: NovoFormGroup;
}
export declare class NovoControlElement extends OutsideClick implements OnInit, OnDestroy, AfterViewInit {
    labels: NovoLabelService;
    private dateFormatService;
    private fieldInteractionApi;
    control: any;
    form: NovoFormGroup;
    condensed: boolean;
    autoFocus: boolean;
    change: EventEmitter<any>;
    edit: EventEmitter<any>;
    save: EventEmitter<any>;
    delete: EventEmitter<any>;
    upload: EventEmitter<any>;
    readonly onBlur: Observable<FocusEvent>;
    readonly onFocus: Observable<FocusEvent>;
    private _blurEmitter;
    private _focusEmitter;
    private _focused;
    private _enteredText;
    formattedValue: string;
    percentValue: number;
    maxLengthMet: boolean;
    characterCount: number;
    private forceClearSubscription;
    private percentChangeSubscription;
    private valueChangeSubscription;
    private dateChangeSubscription;
    maskOptions: IMaskOptions;
    constructor(element: ElementRef, labels: NovoLabelService, dateFormatService: DateFormatService, fieldInteractionApi: FieldInteractionApi);
    readonly showFieldMessage: boolean;
    readonly showCount: boolean;
    ngAfterViewInit(): void;
    ngOnInit(): void;
    executeInteraction(interaction: any): void;
    ngOnDestroy(): void;
    readonly errors: any;
    readonly isValid: any;
    readonly isDirty: any;
    readonly hasValue: boolean;
    readonly focused: boolean;
    readonly tooltip: any;
    readonly tooltipPosition: any;
    readonly alwaysActive: boolean;
    readonly requiresExtraSpacing: boolean;
    handleTyping(event: any): void;
    handleFocus(event: FocusEvent): void;
    handleBlur(event: FocusEvent): void;
    clearValue(): void;
    handleTextAreaInput(event: any): void;
    checkMaxLength(event: any): void;
    modelChangeWithRaw(event: any): void;
    modelChange(value: any): void;
    restrictKeys(event: any): void;
    handlePercentChange(event: KeyboardEvent): void;
    handleTabForPickers(event: any): void;
    emitChange(value: any): void;
    handleEdit(value: any): void;
    handleSave(value: any): void;
    handleDelete(value: any): void;
    handleUpload(value: any): void;
}
