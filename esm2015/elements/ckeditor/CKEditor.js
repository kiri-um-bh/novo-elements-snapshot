/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                CKEDITOR.instances[this.instance.name].destroy();
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
    host: [{ type: ViewChild, args: ['host',] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ0tFZGl0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2tlZGl0b3IvQ0tFZGl0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUNoSSxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7OztNQUduRSwrQkFBK0IsR0FBRztJQUN0QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNaOzs7Ozs7QUFjRCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBbUM5QixZQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQXpCaEMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsOEJBQXlCLEdBQVcsRUFBRSxDQUFDO1FBRXZDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0IsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0IsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJNUIsV0FBTSxHQUFXLEVBQUUsQ0FBQztJQUllLENBQUM7Ozs7SUFFcEMsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsSUFDSSxLQUFLLENB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IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBFdmVudEVtaXR0ZXIsIE5nWm9uZSwgZm9yd2FyZFJlZiwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0tFRElUT1JfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9DS0VkaXRvckVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbmRlY2xhcmUgdmFyIENLRURJVE9SOiBhbnk7XG5cbi8qKlxuICogQ0tFZGl0b3IgY29tcG9uZW50XG4gKiBVc2FnZSA6XG4gKiAgPG5vdm8tZWRpdG9yIFsobmdNb2RlbCldPVwiZGF0YVwiIFtjb25maWddPVwiey4uLn1cIiBkZWJvdW5jZT1cIjUwMFwiPjwvbm92by1lZGl0b3I+XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZWRpdG9yJyxcbiAgcHJvdmlkZXJzOiBbQ0tFRElUT1JfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiAnPHRleHRhcmVhIFtuYW1lXT1cIm5hbWVcIiBbaWRdPVwibmFtZVwiICNob3N0PjwvdGV4dGFyZWE+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NLRWRpdG9yRWxlbWVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICBjb25maWc7XG4gIEBJbnB1dCgpXG4gIGRlYm91bmNlO1xuICBASW5wdXQoKVxuICBuYW1lO1xuICBASW5wdXQoKVxuICBtaW5pbWFsO1xuICBASW5wdXQoKVxuICBzdGFydHVwRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgcGFzdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoJ2hvc3QnKVxuICBob3N0O1xuXG4gIF92YWx1ZTogc3RyaW5nID0gJyc7XG4gIGluc3RhbmNlO1xuICBkZWJvdW5jZVRpbWVvdXQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2KSB7XG4gICAgaWYgKHYgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHYpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmZvY3VzTWFuYWdlci5ibHVyKHRydWUpOyAvLyBSZW1vdmUgZm9jdXMgZnJvbSBlZGl0b3JcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgICBDS0VESVRPUi5pbnN0YW5jZXNbdGhpcy5pbnN0YW5jZS5uYW1lXS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBsZXQgY29uZmlnID0gdGhpcy5jb25maWcgfHwgdGhpcy5nZXRCYXNlQ29uZmlnKCk7XG4gICAgaWYgKHRoaXMuc3RhcnR1cEZvY3VzKSB7XG4gICAgICBjb25maWcuc3RhcnR1cEZvY3VzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGNvbmZpZy5yZWFkT25seSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuY2tlZGl0b3JJbml0KGNvbmZpZyk7XG4gIH1cblxuICB1cGRhdGVWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBja2VkaXRvckluaXQoY29uZmlnKSB7XG4gICAgaWYgKCFDS0VESVRPUikge1xuICAgICAgY29uc29sZS5lcnJvcignTWFrZSBzdXJlIHRvIGluY2x1ZGUgQ0tFZGl0b3Igc291cmNlcyBpbiB5b3VyIGRlcGVuZGVuY2llcyEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDS0VkaXRvciByZXBsYWNlIHRleHRhcmVhXG4gICAgdGhpcy5pbnN0YW5jZSA9IENLRURJVE9SLnJlcGxhY2UodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsIGNvbmZpZyk7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZVxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0RGF0YSh0aGlzLnZhbHVlKTtcblxuICAgIC8vIGxpc3RlbiBmb3IgaW5zdGFuY2VSZWFkeSBldmVudFxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2luc3RhbmNlUmVhZHknLCAoZXZ0KSA9PiB7XG4gICAgICAvLyBzZW5kIHRoZSBldnQgdG8gdGhlIEV2ZW50RW1pdHRlclxuICAgICAgdGhpcy5yZWFkeS5lbWl0KGV2dCk7XG4gICAgfSk7XG5cbiAgICAvLyBDS0VkaXRvciBjaGFuZ2UgZXZlbnRcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgbGV0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXREYXRhKCk7XG5cbiAgICAgIC8vIERlYm91bmNlIHVwZGF0ZVxuICAgICAgaWYgKHRoaXMuZGVib3VuY2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVib3VuY2VUaW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUpO1xuICAgICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfSwgcGFyc2VJbnQodGhpcy5kZWJvdW5jZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignYmx1cicsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ZvY3VzJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Bhc3RlJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnBhc3RlLmVtaXQoZXZlbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2xvYWRlZCcsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5sb2FkZWQuZW1pdChldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRCYXNlQ29uZmlnKCkge1xuICAgIGNvbnN0IGJhc2VDb25maWcgPSB7XG4gICAgICBlbnRlck1vZGU6IENLRURJVE9SLkVOVEVSX0JSLFxuICAgICAgc2hpZnRFbnRlck1vZGU6IENLRURJVE9SLkVOVEVSX1AsXG4gICAgICBkaXNhYmxlTmF0aXZlU3BlbGxDaGVja2VyOiBmYWxzZSxcbiAgICAgIHJlbW92ZVBsdWdpbnM6ICdsaXN0c3R5bGUsdGFibGV0b29scyxjb250ZXh0bWVudScsIC8vIGFsbG93cyBicm93c2VyIGJhc2VkIHNwZWxsIGNoZWNraW5nXG4gICAgICBleHRyYUFsbG93ZWRDb250ZW50OiAnKigqKXsqfTt0YWJsZSB0Ym9keSB0ciB0ZCB0aFsqXTsnLCAvLyBhbGxvd3MgY2xhc3MgbmFtZXMgKCopIGFuZCBpbmxpbmUgc3R5bGVzIHsqfSBmb3IgYWxsIGFuZCBhdHRyaWJ1dGVzIFsqXSBvbiB0YWJsZXNcbiAgICAgIGZvbnRfbmFtZXM6XG4gICAgICAgICdBcmlhbC9BcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOycgK1xuICAgICAgICAnQ2FsaWJyaS9DYWxpYnJpLCBWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7JyArXG4gICAgICAgICdDb21pYyBTYW5zIE1TL0NvbWljIFNhbnMgTVMsIGN1cnNpdmU7JyArXG4gICAgICAgICdDb3VyaWVyIE5ldy9Db3VyaWVyIE5ldywgQ291cmllciwgbW9ub3NwYWNlOycgK1xuICAgICAgICAnR2VvcmdpYS9HZW9yZ2lhLCBzZXJpZjsnICtcbiAgICAgICAgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUvTHVjaWRhIFNhbnMgVW5pY29kZSwgTHVjaWRhIEdyYW5kZSwgc2Fucy1zZXJpZjsnICtcbiAgICAgICAgJ1RhaG9tYS9UYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjsnICtcbiAgICAgICAgJ1RpbWVzIE5ldyBSb21hbi9UaW1lcyBOZXcgUm9tYW4sIFRpbWVzLCBzZXJpZjsnICtcbiAgICAgICAgJ1RyZWJ1Y2hldCBNUy9UcmVidWNoZXQgTVMsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsnICtcbiAgICAgICAgJ1ZlcmRhbmEvVmVyZGFuYSwgR2VuZXZhLCBzYW5zLXNlcmlmJyxcbiAgICB9O1xuXG4gICAgY29uc3QgbWluaW1hbENvbmZpZyA9IHtcbiAgICAgIHRvb2xiYXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdiYXNpY3N0eWxlcycsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICdTdHlsZXMnLFxuICAgICAgICAgICAgJ0ZvbnRTaXplJyxcbiAgICAgICAgICAgICdCb2xkJyxcbiAgICAgICAgICAgICdJdGFsaWMnLFxuICAgICAgICAgICAgJ1VuZGVybGluZScsXG4gICAgICAgICAgICAnVGV4dENvbG9yJyxcbiAgICAgICAgICAgICctJyxcbiAgICAgICAgICAgICdOdW1iZXJlZExpc3QnLFxuICAgICAgICAgICAgJ0J1bGxldGVkTGlzdCcsXG4gICAgICAgICAgICAnT3V0ZGVudCcsXG4gICAgICAgICAgICAnSW5kZW50JyxcbiAgICAgICAgICAgICdMaW5rJyxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgY29uc3QgZXh0ZW5kZWRDb25maWcgPSB7XG4gICAgICB0b29sYmFyOiBbXG4gICAgICAgIHsgbmFtZTogJ2NsaXBib2FyZCcsIGl0ZW1zOiBbJ1Bhc3RlJywgJ1Bhc3RlVGV4dCcsICdQYXN0ZUZyb21Xb3JkJywgJ1VuZG8nLCAnUmVkbyddIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncGFyYWdyYXBoJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgJ051bWJlcmVkTGlzdCcsXG4gICAgICAgICAgICAnQnVsbGV0ZWRMaXN0JyxcbiAgICAgICAgICAgICdPdXRkZW50JyxcbiAgICAgICAgICAgICdJbmRlbnQnLFxuICAgICAgICAgICAgJ0Jsb2NrcXVvdGUnLFxuICAgICAgICAgICAgJ0p1c3RpZnlMZWZ0JyxcbiAgICAgICAgICAgICdKdXN0aWZ5Q2VudGVyJyxcbiAgICAgICAgICAgICdKdXN0aWZ5UmlnaHQnLFxuICAgICAgICAgICAgJ0p1c3RpZnlCbG9jaycsXG4gICAgICAgICAgICAnQmlkaUx0cicsXG4gICAgICAgICAgICAnQmlkaVJ0bCcsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBuYW1lOiAnbGlua3MnLCBpdGVtczogWydMaW5rJ10gfSxcbiAgICAgICAgeyBuYW1lOiAnaW5zZXJ0JywgaXRlbXM6IFsnSW1hZ2UnLCAnVGFibGUnLCAnSG9yaXpvbnRhbFJ1bGUnXSB9LFxuICAgICAgICB7IG5hbWU6ICd0b29scycsIGl0ZW1zOiBbJ01heGltaXplJywgJ1NvdXJjZSddIH0sXG4gICAgICAgICcvJywgLy8gbGluZSBicmVha1xuICAgICAgICB7IG5hbWU6ICdiYXNpY3N0eWxlcycsIGl0ZW1zOiBbJ0JvbGQnLCAnSXRhbGljJywgJ1VuZGVybGluZScsICdTdHJpa2UnLCAnU3Vic2NyaXB0JywgJ1N1cGVyc2NyaXB0J10gfSxcbiAgICAgICAgeyBuYW1lOiAnc3R5bGVzJywgaXRlbXM6IFsnU3R5bGVzJywgJ0Zvcm1hdCcsICdGb250JywgJ0ZvbnRTaXplJ10gfSxcbiAgICAgICAgeyBuYW1lOiAnY29sb3JzJywgaXRlbXM6IFsnVGV4dENvbG9yJywgJ0JHQ29sb3InXSB9LFxuICAgICAgXSxcbiAgICAgIGZpbGVicm93c2VySW1hZ2VVcGxvYWRVcmw6IHRoaXMuZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYmFzZUNvbmZpZywgdGhpcy5taW5pbWFsID8gbWluaW1hbENvbmZpZyA6IGV4dGVuZGVkQ29uZmlnKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldERhdGEodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKHZhbHVlPzogYW55KSB7fVxuXG4gIG9uVG91Y2hlZChldmVudD8pIHt9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuKSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIENLRURJVE9SLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLm5hbWVdLnNldFJlYWRPbmx5KGRpc2FibGVkKTtcbiAgICB9XG4gIH1cblxuICBpbnNlcnRUZXh0KHRleHQpIHtcbiAgICBsZXQgdHJpbW1lZFRleHQgPSB0ZXh0LnRyaW0oKTtcbiAgICB0aGlzLmluc3RhbmNlLmluc2VydFRleHQodHJpbW1lZFRleHQpO1xuICB9XG59XG4iXX0=