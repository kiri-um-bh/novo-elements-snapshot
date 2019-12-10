import { EventEmitter, NgZone, AfterViewInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
/**
 * CKEditor component
 * Usage :
 *  <novo-editor [(ngModel)]="data" [config]="{...}" debounce="500"></novo-editor>
 */
export declare class NovoCKEditorElement implements OnDestroy, AfterViewInit, ControlValueAccessor {
    private zone;
    config: any;
    debounce: any;
    name: any;
    minimal: any;
    startupFocus: boolean;
    fileBrowserImageUploadUrl: string;
    disabled: boolean;
    change: EventEmitter<any>;
    ready: EventEmitter<any>;
    blur: EventEmitter<any>;
    focus: EventEmitter<any>;
    paste: EventEmitter<any>;
    loaded: EventEmitter<any>;
    host: any;
    _value: string;
    instance: any;
    debounceTimeout: any;
    constructor(zone: NgZone);
    value: string;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    updateValue(value: any): void;
    private ckeditorInit;
    getBaseConfig(): ({
        enterMode: any;
        shiftEnterMode: any;
        disableNativeSpellChecker: boolean;
        removePlugins: string;
        extraAllowedContent: string;
        font_names: string;
    } & {
        toolbar: {
            name: string;
            items: string[];
        }[];
    }) | ({
        enterMode: any;
        shiftEnterMode: any;
        disableNativeSpellChecker: boolean;
        removePlugins: string;
        extraAllowedContent: string;
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
