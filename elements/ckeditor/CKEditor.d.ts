import { EventEmitter, NgZone, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { InclusionSuggestionArgs, Editor } from './editor-types';
import { PopOverContent } from '../popover/PopOverContent';
/**
 * CKEditor component
 * Usage :
 *  <novo-editor [(ngModel)]="data" [config]="{...}" debounce="500"></novo-editor>
 */
export declare class NovoCKEditorElement implements OnDestroy, AfterViewInit, ControlValueAccessor {
    private zone;
    private changeDetectorRef;
    config: any;
    debounce: any;
    name: any;
    minimal: any;
    startupFocus: boolean;
    fileBrowserImageUploadUrl: string;
    disabled: boolean;
    change: EventEmitter<{}>;
    ready: EventEmitter<{}>;
    blur: EventEmitter<{}>;
    focus: EventEmitter<{}>;
    paste: EventEmitter<{}>;
    loaded: EventEmitter<{}>;
    host: any;
    _value: string;
    instance: any;
    debounceTimeout: any;
    popoverTitle: string;
    popoverText: string;
    suggestedReplacements: string[];
    constructor(zone: NgZone, changeDetectorRef: ChangeDetectorRef);
    value: string;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    updateValue(value: any): void;
    dismiss(): void;
    popover: PopOverContent;
    inclusionPopover: PopOverContent;
    _shouldShowPopover: boolean;
    shouldShowPopover: boolean;
    learnMore(): void;
    changeTerm(term: string): void;
    hidePopover(): void;
    onInclusionEvent: (info: any) => void;
    createChangeTerm(id: string, document: Document): void;
    createDismiss(editor: Editor, data: InclusionSuggestionArgs): void;
    ckeditorInit: (config: any) => void;
    getBaseConfig(): ({
        extraPlugins: string;
        enterMode: any;
        shiftEnterMode: any;
        disableNativeSpellChecker: boolean;
        removePlugins: string;
        allowedContent: boolean;
        font_names: string;
    } & {
        toolbar: {
            name: string;
            items: string[];
        }[];
    }) | ({
        extraPlugins: string;
        enterMode: any;
        shiftEnterMode: any;
        disableNativeSpellChecker: boolean;
        removePlugins: string;
        allowedContent: boolean;
        font_names: string;
    } & {
        toolbar: (string | {
            name: string;
            items: string[];
        })[];
        filebrowserImageUploadUrl: string;
    });
    writeValue(value: any): void;
    onChange(value?: any): void;
    onTouched(event?: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(disabled: boolean): void;
    insertText(text: any): void;
}
