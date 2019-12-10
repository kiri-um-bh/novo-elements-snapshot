/**
 * @fileoverview added by tsickle
 * Generated from: elements/ckeditor/CKEditor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, Input, Output, ViewChild, EventEmitter, NgZone, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// Value accessor for the component (supports ngModel)
/** @type {?} */
const CKEDITOR_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NovoCKEditorElement)),
    multi: true,
};
/**
 * CKEditor component
 * Usage :
 *  <novo-editor [(ngModel)]="data" [config]="{...}" debounce="500"></novo-editor>
 */
export class NovoCKEditorElement {
    /**
     * @param {?} zone
     */
    constructor(zone) {
        this.zone = zone;
        this.startupFocus = false;
        this.fileBrowserImageUploadUrl = '';
        this.disabled = false;
        this.change = new EventEmitter();
        this.ready = new EventEmitter();
        this.blur = new EventEmitter();
        this.focus = new EventEmitter();
        this.paste = new EventEmitter();
        this.loaded = new EventEmitter();
        this._value = '';
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.instance) {
            this.instance.focusManager.blur(true); // Remove focus from editor
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.instance.removeAllListeners();
                /** @type {?} */
                const aInstance = CKEDITOR.instances[this.instance.name];
                if (aInstance) {
                    aInstance.destroy();
                }
                this.instance.destroy();
                this.instance = null;
            }));
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        let config = this.config || this.getBaseConfig();
        if (this.startupFocus) {
            config.startupFocus = true;
        }
        if (this.disabled) {
            config.readOnly = true;
        }
        this.ckeditorInit(config);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateValue(value) {
        this.zone.run((/**
         * @return {?}
         */
        () => {
            this.value = value;
            this.onChange(value);
            this.onTouched();
            this.change.emit(value);
        }));
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    ckeditorInit(config) {
        if (!CKEDITOR) {
            console.error('Make sure to include CKEditor sources in your dependencies!');
            return;
        }
        // CKEditor replace textarea
        this.instance = CKEDITOR.replace(this.host.nativeElement, config);
        // Set initial value
        this.instance.setData(this.value);
        // listen for instanceReady event
        this.instance.on('instanceReady', (/**
         * @param {?} evt
         * @return {?}
         */
        (evt) => {
            // send the evt to the EventEmitter
            this.ready.emit(evt);
        }));
        // CKEditor change event
        this.instance.on('change', (/**
         * @return {?}
         */
        () => {
            this.onTouched();
            /** @type {?} */
            let value = this.instance.getData();
            // Debounce update
            if (this.debounce) {
                if (this.debounceTimeout) {
                    clearTimeout(this.debounceTimeout);
                }
                this.debounceTimeout = setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.updateValue(value);
                    this.debounceTimeout = null;
                }), parseInt(this.debounce));
            }
            else {
                this.updateValue(value);
            }
        }));
        this.instance.on('blur', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.blur.emit(event);
        }));
        this.instance.on('focus', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.focus.emit(event);
        }));
        this.instance.on('paste', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.paste.emit(event);
        }));
        this.instance.on('loaded', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.loaded.emit(event);
        }));
    }
    /**
     * @return {?}
     */
    getBaseConfig() {
        /** @type {?} */
        const baseConfig = {
            enterMode: CKEDITOR.ENTER_BR,
            shiftEnterMode: CKEDITOR.ENTER_P,
            disableNativeSpellChecker: false,
            removePlugins: 'liststyle,tabletools,contextmenu',
            // allows browser based spell checking
            extraAllowedContent: '*(*){*};table tbody tr td th[*];',
            // allows class names (*) and inline styles {*} for all and attributes [*] on tables
            font_names: 'Arial/Arial, Helvetica, sans-serif;' +
                'Calibri/Calibri, Verdana, Geneva, sans-serif;' +
                'Comic Sans MS/Comic Sans MS, cursive;' +
                'Courier New/Courier New, Courier, monospace;' +
                'Georgia/Georgia, serif;' +
                'Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;' +
                'Tahoma/Tahoma, Geneva, sans-serif;' +
                'Times New Roman/Times New Roman, Times, serif;' +
                'Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;' +
                'Verdana/Verdana, Geneva, sans-serif',
        };
        /** @type {?} */
        const minimalConfig = {
            toolbar: [
                {
                    name: 'basicstyles',
                    items: [
                        'Styles',
                        'FontSize',
                        'Bold',
                        'Italic',
                        'Underline',
                        'TextColor',
                        '-',
                        'NumberedList',
                        'BulletedList',
                        'Outdent',
                        'Indent',
                        'Link',
                    ],
                },
            ],
        };
        /** @type {?} */
        const extendedConfig = {
            toolbar: [
                { name: 'clipboard', items: ['Paste', 'PasteText', 'PasteFromWord', 'Undo', 'Redo'] },
                {
                    name: 'paragraph',
                    items: [
                        'NumberedList',
                        'BulletedList',
                        'Outdent',
                        'Indent',
                        'Blockquote',
                        'JustifyLeft',
                        'JustifyCenter',
                        'JustifyRight',
                        'JustifyBlock',
                        'BidiLtr',
                        'BidiRtl',
                    ],
                },
                { name: 'links', items: ['Link'] },
                { name: 'insert', items: ['Image', 'Table', 'HorizontalRule'] },
                { name: 'tools', items: ['Maximize', 'Source'] },
                '/',
                { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript'] },
                { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
                { name: 'colors', items: ['TextColor', 'BGColor'] },
            ],
            filebrowserImageUploadUrl: this.fileBrowserImageUploadUrl,
        };
        return Object.assign(baseConfig, this.minimal ? minimalConfig : extendedConfig);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value;
        if (this.instance) {
            this.instance.setData(value);
        }
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    onChange(value) { }
    /**
     * @param {?=} event
     * @return {?}
     */
    onTouched(event) { }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.disabled = disabled;
        if (this.instance) {
            CKEDITOR.instances[this.instance.name].setReadOnly(disabled);
        }
    }
    /**
     * @param {?} text
     * @return {?}
     */
    insertText(text) {
        /** @type {?} */
        let trimmedText = text.trim();
        this.instance.insertText(trimmedText);
    }
}
NovoCKEditorElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-editor',
                providers: [CKEDITOR_CONTROL_VALUE_ACCESSOR],
                template: '<textarea [name]="name" [id]="name" #host></textarea>'
            }] }
];
/** @nocollapse */
NovoCKEditorElement.ctorParameters = () => [
    { type: NgZone }
];
NovoCKEditorElement.propDecorators = {
    config: [{ type: Input }],
    debounce: [{ type: Input }],
    name: [{ type: Input }],
    minimal: [{ type: Input }],
    startupFocus: [{ type: Input }],
    fileBrowserImageUploadUrl: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    ready: [{ type: Output }],
    blur: [{ type: Output }],
    focus: [{ type: Output }],
    paste: [{ type: Output }],
    loaded: [{ type: Output }],
    host: [{ type: ViewChild, args: ['host', { static: false },] }],
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoCKEditorElement.prototype.config;
    /** @type {?} */
    NovoCKEditorElement.prototype.debounce;
    /** @type {?} */
    NovoCKEditorElement.prototype.name;
    /** @type {?} */
    NovoCKEditorElement.prototype.minimal;
    /** @type {?} */
    NovoCKEditorElement.prototype.startupFocus;
    /** @type {?} */
    NovoCKEditorElement.prototype.fileBrowserImageUploadUrl;
    /** @type {?} */
    NovoCKEditorElement.prototype.disabled;
    /** @type {?} */
    NovoCKEditorElement.prototype.change;
    /** @type {?} */
    NovoCKEditorElement.prototype.ready;
    /** @type {?} */
    NovoCKEditorElement.prototype.blur;
    /** @type {?} */
    NovoCKEditorElement.prototype.focus;
    /** @type {?} */
    NovoCKEditorElement.prototype.paste;
    /** @type {?} */
    NovoCKEditorElement.prototype.loaded;
    /** @type {?} */
    NovoCKEditorElement.prototype.host;
    /** @type {?} */
    NovoCKEditorElement.prototype._value;
    /** @type {?} */
    NovoCKEditorElement.prototype.instance;
    /** @type {?} */
    NovoCKEditorElement.prototype.debounceTimeout;
    /**
     * @type {?}
     * @private
     */
    NovoCKEditorElement.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ0tFZGl0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2tlZGl0b3IvQ0tFZGl0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDaEksT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOzs7TUFHbkUsK0JBQStCLEdBQUc7SUFDdEMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLEVBQUM7SUFDbEQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7Ozs7O0FBY0QsTUFBTSxPQUFPLG1CQUFtQjs7OztJQW1DOUIsWUFBb0IsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUF6QmhDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBRTlCLDhCQUF5QixHQUFXLEVBQUUsQ0FBQztRQUV2QyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTVCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNCLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSTVCLFdBQU0sR0FBVyxFQUFFLENBQUM7SUFJZSxDQUFDOzs7O0lBRXBDLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELElBQ0ksS0FBSyxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQywyQkFBMkI7WUFDbEUsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzs7c0JBQzdCLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUN4RCxJQUFJLFNBQVMsRUFBRTtvQkFDYixTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ3JCO2dCQUNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsZUFBZTs7WUFDVCxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1FBQ2hELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUM1QjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBSztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLE1BQU07UUFDekIsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkRBQTZELENBQUMsQ0FBQztZQUM3RSxPQUFPO1NBQ1I7UUFFRCw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWxFLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEMsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWU7Ozs7UUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3hDLG1DQUFtQztZQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztRQUVILHdCQUF3QjtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7UUFBRSxHQUFHLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDOztnQkFDYixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFFbkMsa0JBQWtCO1lBQ2xCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO29CQUN4QixZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lCQUNwQztnQkFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVU7OztnQkFBQyxHQUFHLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUM5QixDQUFDLEdBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQzdCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekI7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU07Ozs7UUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTzs7OztRQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPOzs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVE7Ozs7UUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGFBQWE7O2NBQ0wsVUFBVSxHQUFHO1lBQ2pCLFNBQVMsRUFBRSxRQUFRLENBQUMsUUFBUTtZQUM1QixjQUFjLEVBQUUsUUFBUSxDQUFDLE9BQU87WUFDaEMseUJBQXlCLEVBQUUsS0FBSztZQUNoQyxhQUFhLEVBQUUsa0NBQWtDOztZQUNqRCxtQkFBbUIsRUFBRSxrQ0FBa0M7O1lBQ3ZELFVBQVUsRUFDUixxQ0FBcUM7Z0JBQ3JDLCtDQUErQztnQkFDL0MsdUNBQXVDO2dCQUN2Qyw4Q0FBOEM7Z0JBQzlDLHlCQUF5QjtnQkFDekIscUVBQXFFO2dCQUNyRSxvQ0FBb0M7Z0JBQ3BDLGdEQUFnRDtnQkFDaEQsbURBQW1EO2dCQUNuRCxxQ0FBcUM7U0FDeEM7O2NBRUssYUFBYSxHQUFHO1lBQ3BCLE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxJQUFJLEVBQUUsYUFBYTtvQkFDbkIsS0FBSyxFQUFFO3dCQUNMLFFBQVE7d0JBQ1IsVUFBVTt3QkFDVixNQUFNO3dCQUNOLFFBQVE7d0JBQ1IsV0FBVzt3QkFDWCxXQUFXO3dCQUNYLEdBQUc7d0JBQ0gsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLFNBQVM7d0JBQ1QsUUFBUTt3QkFDUixNQUFNO3FCQUNQO2lCQUNGO2FBQ0Y7U0FDRjs7Y0FFSyxjQUFjLEdBQUc7WUFDckIsT0FBTyxFQUFFO2dCQUNQLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQ3JGO29CQUNFLElBQUksRUFBRSxXQUFXO29CQUNqQixLQUFLLEVBQUU7d0JBQ0wsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLFNBQVM7d0JBQ1QsUUFBUTt3QkFDUixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsU0FBUzt3QkFDVCxTQUFTO3FCQUNWO2lCQUNGO2dCQUNELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDbEMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsRUFBRTtnQkFDL0QsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsRUFBRTtnQkFDaEQsR0FBRztnQkFDSCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUMsRUFBRTtnQkFDckcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxFQUFFO2dCQUNuRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxFQUFFO2FBQ3BEO1lBQ0QseUJBQXlCLEVBQUUsSUFBSSxDQUFDLHlCQUF5QjtTQUMxRDtRQUVELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFLO1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBVyxJQUFHLENBQUM7Ozs7O0lBRXhCLFNBQVMsQ0FBQyxLQUFNLElBQUcsQ0FBQzs7Ozs7SUFFcEIsZ0JBQWdCLENBQUMsRUFBRTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQUU7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxRQUFpQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM5RDtJQUNILENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQUk7O1lBQ1QsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7O1lBblBGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7Z0JBQzVDLFFBQVEsRUFBRSx1REFBdUQ7YUFDbEU7Ozs7WUFyQjJELE1BQU07OztxQkF1Qi9ELEtBQUs7dUJBRUwsS0FBSzttQkFFTCxLQUFLO3NCQUVMLEtBQUs7MkJBRUwsS0FBSzt3Q0FFTCxLQUFLO3VCQUVMLEtBQUs7cUJBR0wsTUFBTTtvQkFFTixNQUFNO21CQUVOLE1BQU07b0JBRU4sTUFBTTtvQkFFTixNQUFNO3FCQUVOLE1BQU07bUJBRU4sU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7b0JBYW5DLEtBQUs7Ozs7SUF4Q04scUNBQ087O0lBQ1AsdUNBQ1M7O0lBQ1QsbUNBQ0s7O0lBQ0wsc0NBQ1E7O0lBQ1IsMkNBQzhCOztJQUM5Qix3REFDdUM7O0lBQ3ZDLHVDQUMwQjs7SUFFMUIscUNBQzRCOztJQUM1QixvQ0FDMkI7O0lBQzNCLG1DQUMwQjs7SUFDMUIsb0NBQzJCOztJQUMzQixvQ0FDMkI7O0lBQzNCLHFDQUM0Qjs7SUFDNUIsbUNBQ0s7O0lBRUwscUNBQW9COztJQUNwQix1Q0FBUzs7SUFDVCw4Q0FBZ0I7Ozs7O0lBRUosbUNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCwgRXZlbnRFbWl0dGVyLCBOZ1pvbmUsIGZvcndhcmRSZWYsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IENLRURJVE9SX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvQ0tFZGl0b3JFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5kZWNsYXJlIHZhciBDS0VESVRPUjogYW55O1xuXG4vKipcbiAqIENLRWRpdG9yIGNvbXBvbmVudFxuICogVXNhZ2UgOlxuICogIDxub3ZvLWVkaXRvciBbKG5nTW9kZWwpXT1cImRhdGFcIiBbY29uZmlnXT1cInsuLi59XCIgZGVib3VuY2U9XCI1MDBcIj48L25vdm8tZWRpdG9yPlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWVkaXRvcicsXG4gIHByb3ZpZGVyczogW0NLRURJVE9SX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogJzx0ZXh0YXJlYSBbbmFtZV09XCJuYW1lXCIgW2lkXT1cIm5hbWVcIiAjaG9zdD48L3RleHRhcmVhPicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DS0VkaXRvckVsZW1lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KClcbiAgY29uZmlnO1xuICBASW5wdXQoKVxuICBkZWJvdW5jZTtcbiAgQElucHV0KClcbiAgbmFtZTtcbiAgQElucHV0KClcbiAgbWluaW1hbDtcbiAgQElucHV0KClcbiAgc3RhcnR1cEZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmw6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHBhc3RlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKCdob3N0JywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIGhvc3Q7XG5cbiAgX3ZhbHVlOiBzdHJpbmcgPSAnJztcbiAgaW5zdGFuY2U7XG4gIGRlYm91bmNlVGltZW91dDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkge31cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHYpIHtcbiAgICBpZiAodiAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgIHRoaXMub25DaGFuZ2Uodik7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZm9jdXNNYW5hZ2VyLmJsdXIodHJ1ZSk7IC8vIFJlbW92ZSBmb2N1cyBmcm9tIGVkaXRvclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgIGNvbnN0IGFJbnN0YW5jZSA9IENLRURJVE9SLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLm5hbWVdO1xuICAgICAgICBpZiAoYUluc3RhbmNlKSB7XG4gICAgICAgICAgYUluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuY29uZmlnIHx8IHRoaXMuZ2V0QmFzZUNvbmZpZygpO1xuICAgIGlmICh0aGlzLnN0YXJ0dXBGb2N1cykge1xuICAgICAgY29uZmlnLnN0YXJ0dXBGb2N1cyA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICBjb25maWcucmVhZE9ubHkgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmNrZWRpdG9ySW5pdChjb25maWcpO1xuICB9XG5cbiAgdXBkYXRlVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBja2VkaXRvckluaXQoY29uZmlnKSB7XG4gICAgaWYgKCFDS0VESVRPUikge1xuICAgICAgY29uc29sZS5lcnJvcignTWFrZSBzdXJlIHRvIGluY2x1ZGUgQ0tFZGl0b3Igc291cmNlcyBpbiB5b3VyIGRlcGVuZGVuY2llcyEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDS0VkaXRvciByZXBsYWNlIHRleHRhcmVhXG4gICAgdGhpcy5pbnN0YW5jZSA9IENLRURJVE9SLnJlcGxhY2UodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsIGNvbmZpZyk7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZVxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0RGF0YSh0aGlzLnZhbHVlKTtcblxuICAgIC8vIGxpc3RlbiBmb3IgaW5zdGFuY2VSZWFkeSBldmVudFxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2luc3RhbmNlUmVhZHknLCAoZXZ0KSA9PiB7XG4gICAgICAvLyBzZW5kIHRoZSBldnQgdG8gdGhlIEV2ZW50RW1pdHRlclxuICAgICAgdGhpcy5yZWFkeS5lbWl0KGV2dCk7XG4gICAgfSk7XG5cbiAgICAvLyBDS0VkaXRvciBjaGFuZ2UgZXZlbnRcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgbGV0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXREYXRhKCk7XG5cbiAgICAgIC8vIERlYm91bmNlIHVwZGF0ZVxuICAgICAgaWYgKHRoaXMuZGVib3VuY2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVib3VuY2VUaW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUpO1xuICAgICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfSwgcGFyc2VJbnQodGhpcy5kZWJvdW5jZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignYmx1cicsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ZvY3VzJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Bhc3RlJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnBhc3RlLmVtaXQoZXZlbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2xvYWRlZCcsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5sb2FkZWQuZW1pdChldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRCYXNlQ29uZmlnKCkge1xuICAgIGNvbnN0IGJhc2VDb25maWcgPSB7XG4gICAgICBlbnRlck1vZGU6IENLRURJVE9SLkVOVEVSX0JSLFxuICAgICAgc2hpZnRFbnRlck1vZGU6IENLRURJVE9SLkVOVEVSX1AsXG4gICAgICBkaXNhYmxlTmF0aXZlU3BlbGxDaGVja2VyOiBmYWxzZSxcbiAgICAgIHJlbW92ZVBsdWdpbnM6ICdsaXN0c3R5bGUsdGFibGV0b29scyxjb250ZXh0bWVudScsIC8vIGFsbG93cyBicm93c2VyIGJhc2VkIHNwZWxsIGNoZWNraW5nXG4gICAgICBleHRyYUFsbG93ZWRDb250ZW50OiAnKigqKXsqfTt0YWJsZSB0Ym9keSB0ciB0ZCB0aFsqXTsnLCAvLyBhbGxvd3MgY2xhc3MgbmFtZXMgKCopIGFuZCBpbmxpbmUgc3R5bGVzIHsqfSBmb3IgYWxsIGFuZCBhdHRyaWJ1dGVzIFsqXSBvbiB0YWJsZXNcbiAgICAgIGZvbnRfbmFtZXM6XG4gICAgICAgICdBcmlhbC9BcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOycgK1xuICAgICAgICAnQ2FsaWJyaS9DYWxpYnJpLCBWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7JyArXG4gICAgICAgICdDb21pYyBTYW5zIE1TL0NvbWljIFNhbnMgTVMsIGN1cnNpdmU7JyArXG4gICAgICAgICdDb3VyaWVyIE5ldy9Db3VyaWVyIE5ldywgQ291cmllciwgbW9ub3NwYWNlOycgK1xuICAgICAgICAnR2VvcmdpYS9HZW9yZ2lhLCBzZXJpZjsnICtcbiAgICAgICAgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUvTHVjaWRhIFNhbnMgVW5pY29kZSwgTHVjaWRhIEdyYW5kZSwgc2Fucy1zZXJpZjsnICtcbiAgICAgICAgJ1RhaG9tYS9UYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjsnICtcbiAgICAgICAgJ1RpbWVzIE5ldyBSb21hbi9UaW1lcyBOZXcgUm9tYW4sIFRpbWVzLCBzZXJpZjsnICtcbiAgICAgICAgJ1RyZWJ1Y2hldCBNUy9UcmVidWNoZXQgTVMsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsnICtcbiAgICAgICAgJ1ZlcmRhbmEvVmVyZGFuYSwgR2VuZXZhLCBzYW5zLXNlcmlmJyxcbiAgICB9O1xuXG4gICAgY29uc3QgbWluaW1hbENvbmZpZyA9IHtcbiAgICAgIHRvb2xiYXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdiYXNpY3N0eWxlcycsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICdTdHlsZXMnLFxuICAgICAgICAgICAgJ0ZvbnRTaXplJyxcbiAgICAgICAgICAgICdCb2xkJyxcbiAgICAgICAgICAgICdJdGFsaWMnLFxuICAgICAgICAgICAgJ1VuZGVybGluZScsXG4gICAgICAgICAgICAnVGV4dENvbG9yJyxcbiAgICAgICAgICAgICctJyxcbiAgICAgICAgICAgICdOdW1iZXJlZExpc3QnLFxuICAgICAgICAgICAgJ0J1bGxldGVkTGlzdCcsXG4gICAgICAgICAgICAnT3V0ZGVudCcsXG4gICAgICAgICAgICAnSW5kZW50JyxcbiAgICAgICAgICAgICdMaW5rJyxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgY29uc3QgZXh0ZW5kZWRDb25maWcgPSB7XG4gICAgICB0b29sYmFyOiBbXG4gICAgICAgIHsgbmFtZTogJ2NsaXBib2FyZCcsIGl0ZW1zOiBbJ1Bhc3RlJywgJ1Bhc3RlVGV4dCcsICdQYXN0ZUZyb21Xb3JkJywgJ1VuZG8nLCAnUmVkbyddIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncGFyYWdyYXBoJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgJ051bWJlcmVkTGlzdCcsXG4gICAgICAgICAgICAnQnVsbGV0ZWRMaXN0JyxcbiAgICAgICAgICAgICdPdXRkZW50JyxcbiAgICAgICAgICAgICdJbmRlbnQnLFxuICAgICAgICAgICAgJ0Jsb2NrcXVvdGUnLFxuICAgICAgICAgICAgJ0p1c3RpZnlMZWZ0JyxcbiAgICAgICAgICAgICdKdXN0aWZ5Q2VudGVyJyxcbiAgICAgICAgICAgICdKdXN0aWZ5UmlnaHQnLFxuICAgICAgICAgICAgJ0p1c3RpZnlCbG9jaycsXG4gICAgICAgICAgICAnQmlkaUx0cicsXG4gICAgICAgICAgICAnQmlkaVJ0bCcsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBuYW1lOiAnbGlua3MnLCBpdGVtczogWydMaW5rJ10gfSxcbiAgICAgICAgeyBuYW1lOiAnaW5zZXJ0JywgaXRlbXM6IFsnSW1hZ2UnLCAnVGFibGUnLCAnSG9yaXpvbnRhbFJ1bGUnXSB9LFxuICAgICAgICB7IG5hbWU6ICd0b29scycsIGl0ZW1zOiBbJ01heGltaXplJywgJ1NvdXJjZSddIH0sXG4gICAgICAgICcvJywgLy8gbGluZSBicmVha1xuICAgICAgICB7IG5hbWU6ICdiYXNpY3N0eWxlcycsIGl0ZW1zOiBbJ0JvbGQnLCAnSXRhbGljJywgJ1VuZGVybGluZScsICdTdHJpa2UnLCAnU3Vic2NyaXB0JywgJ1N1cGVyc2NyaXB0J10gfSxcbiAgICAgICAgeyBuYW1lOiAnc3R5bGVzJywgaXRlbXM6IFsnU3R5bGVzJywgJ0Zvcm1hdCcsICdGb250JywgJ0ZvbnRTaXplJ10gfSxcbiAgICAgICAgeyBuYW1lOiAnY29sb3JzJywgaXRlbXM6IFsnVGV4dENvbG9yJywgJ0JHQ29sb3InXSB9LFxuICAgICAgXSxcbiAgICAgIGZpbGVicm93c2VySW1hZ2VVcGxvYWRVcmw6IHRoaXMuZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYmFzZUNvbmZpZywgdGhpcy5taW5pbWFsID8gbWluaW1hbENvbmZpZyA6IGV4dGVuZGVkQ29uZmlnKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldERhdGEodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKHZhbHVlPzogYW55KSB7fVxuXG4gIG9uVG91Y2hlZChldmVudD8pIHt9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuKSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIENLRURJVE9SLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLm5hbWVdLnNldFJlYWRPbmx5KGRpc2FibGVkKTtcbiAgICB9XG4gIH1cblxuICBpbnNlcnRUZXh0KHRleHQpIHtcbiAgICBsZXQgdHJpbW1lZFRleHQgPSB0ZXh0LnRyaW0oKTtcbiAgICB0aGlzLmluc3RhbmNlLmluc2VydFRleHQodHJpbW1lZFRleHQpO1xuICB9XG59XG4iXX0=