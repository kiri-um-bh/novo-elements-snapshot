/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, Input, Output, ViewChild, EventEmitter, NgZone, forwardRef, ChangeDetectorRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { init } from './plugins/inclusion-helper/inclusion-helper-plugin';
import { PopOverContent } from '../popover/PopOverContent';
// import 'CKEDITOR';
// Value accessor for the component (supports ngModel)
/** @type {?} */
const CKEDITOR_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoCKEditorElement),
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
     * @param {?} changeDetectorRef
     */
    constructor(zone, changeDetectorRef) {
        this.zone = zone;
        this.changeDetectorRef = changeDetectorRef;
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
        this.popoverTitle = '';
        this.popoverText = '';
        this.suggestedReplacements = [];
        this._shouldShowPopover = false;
        this.onInclusionEvent = (info) => {
            /** @type {?} */
            const data = info.data;
            /** @type {?} */
            const editor = info.editor;
            this.createChangeTerm(info.data.suggestion.id, editor.document.$);
            this.createDismiss(editor, data);
            this.shouldShowPopover = true;
            this.suggestedReplacements = data.suggestion.suggestedReplacements;
            this.popoverTitle = `"${data.suggestion.problematicTerm}"`;
            this.popoverText = data.suggestion.explanation;
            this.changeDetectorRef.detectChanges();
        };
        this.ckeditorInit = (config) => {
            if (!CKEDITOR) {
                console.error('Make sure to include CKEditor sources in your dependencies!');
                return;
            }
            CKEDITOR.plugins.add('inclusion-helper', { init }); // , onLoad });
            // CKEditor replace textarea
            this.instance = CKEDITOR.replace(this.host.nativeElement, config);
            // Set initial value
            this.instance.setData(this.value);
            // listen for instanceReady event
            this.instance.on('instanceReady', (evt) => {
                // send the evt to the EventEmitter
                this.ready.emit(evt);
            });
            this.instance.on('inclusion', this.onInclusionEvent.bind(this));
            // CKEditor change event
            this.instance.on('change', () => {
                this.onTouched();
                /** @type {?} */
                let value = this.instance.getData();
                // Debounce update
                if (this.debounce) {
                    if (this.debounceTimeout) {
                        clearTimeout(this.debounceTimeout);
                    }
                    this.debounceTimeout = setTimeout(() => {
                        this.updateValue(value);
                        this.debounceTimeout = null;
                    }, parseInt(this.debounce));
                }
                else {
                    this.updateValue(value);
                }
            });
            this.instance.on('blur', (event) => {
                this.blur.emit(event);
            });
            this.instance.on('focus', (event) => {
                this.focus.emit(event);
            });
            this.instance.on('paste', (event) => {
                this.paste.emit(event);
            });
            this.instance.on('loaded', (event) => {
                this.loaded.emit(event);
            });
        };
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
            setTimeout(() => {
                this.instance.removeAllListeners();
                CKEDITOR.instances[this.instance.name].destroy();
                this.instance.destroy();
                this.instance = null;
            });
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
        this.zone.run(() => {
            this.value = value;
            this.onChange(value);
            this.onTouched();
            this.change.emit(value);
        });
    }
    /**
     * @return {?}
     */
    dismiss() {
        this.hidePopover();
    }
    /**
     * @param {?} p
     * @return {?}
     */
    set inclusionPopover(p) {
        this.popover = p;
    }
    /**
     * @return {?}
     */
    get inclusionPopover() {
        return this.popover;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set shouldShowPopover(value) {
        this._shouldShowPopover = value;
    }
    /**
     * @return {?}
     */
    get shouldShowPopover() {
        return this._shouldShowPopover;
    }
    /**
     * @return {?}
     */
    learnMore() { }
    /**
     * @param {?} term
     * @return {?}
     */
    changeTerm(term) {
        // this is a placeholdler to be replaced when the highlighted text is clicked
        this.hidePopover();
    }
    /**
     * @return {?}
     */
    hidePopover() {
        this.shouldShowPopover = false;
        this.inclusionPopover.hide();
    }
    /**
     * @param {?} id
     * @param {?} document
     * @return {?}
     */
    createChangeTerm(id, document) {
        this.changeTerm = (term) => {
            /** @type {?} */
            const element = document.getElementById(id);
            /** @type {?} */
            const parent = element.parentNode;
            parent.replaceChild(document.createTextNode(term), element);
            this.hidePopover();
        };
    }
    /**
     * @param {?} editor
     * @param {?} data
     * @return {?}
     */
    createDismiss(editor, data) {
        this.dismiss = () => {
            editor.dismissedTerms = [...(editor.dismissedTerms ? editor.dismissedTerms : []), data.suggestion.problematicTerm];
            /** @type {?} */
            const element = editor.document.$.getElementById(data.suggestion.id);
            /** @type {?} */
            const parent = element.parentNode;
            parent.replaceChild(document.createTextNode(data.suggestion.problematicTerm), element);
            this.hidePopover();
        };
    }
    /**
     * @return {?}
     */
    getBaseConfig() {
        /** @type {?} */
        const baseConfig = {
            extraPlugins: 'inclusion-helper',
            enterMode: CKEDITOR.ENTER_BR,
            shiftEnterMode: CKEDITOR.ENTER_P,
            disableNativeSpellChecker: false,
            removePlugins: 'liststyle,tabletools,contextmenu',
            // allows browser based spell checking
            allowedContent: true,
            // extraAllowedContent: '*(*){*};table tbody tr td th[*];', // allows class names (*) and inline styles {*} for all and attributes [*] on tables
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
                { name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'Inclusion-Helper'] },
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
                template: "\n  <popover-content\n    #inclusionPopover\n    [title]=\"popoverTitle\"\n    placement=\"right\"\n    onclick=\"\">\n    <div class=\"popover-text\">\n      {{popoverText}}\n    </div>\n    <div class=\"popover-cta\">\n        <button theme=\"secondary\" side=\"right\" (click)=\"dismiss()\">Dismiss</button>\n        <button theme=\"primary\" icon=\"check\" side=\"right\" (click)=\"changeTerm(suggestedReplacements[0])\">Change</button>\n    </div>\n  </popover-content>\n<div\n[popover]=\"inclusionPopover\"\n  [popoverDisabled]=\"true\"\n  [popoverAlways]=\"shouldShowPopover\"\n>\n<textarea\n[name]=\"name\"\n[id]=\"name\"\n#host>\n</textarea>\n</div>\n"
            }] }
];
/** @nocollapse */
NovoCKEditorElement.ctorParameters = () => [
    { type: NgZone },
    { type: ChangeDetectorRef }
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
    value: [{ type: Input }],
    inclusionPopover: [{ type: ViewChild, args: ['inclusionPopover',] }]
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
    /** @type {?} */
    NovoCKEditorElement.prototype.popoverTitle;
    /** @type {?} */
    NovoCKEditorElement.prototype.popoverText;
    /** @type {?} */
    NovoCKEditorElement.prototype.suggestedReplacements;
    /** @type {?} */
    NovoCKEditorElement.prototype.popover;
    /** @type {?} */
    NovoCKEditorElement.prototype._shouldShowPopover;
    /** @type {?} */
    NovoCKEditorElement.prototype.onInclusionEvent;
    /** @type {?} */
    NovoCKEditorElement.prototype.ckeditorInit;
    /**
     * @type {?}
     * @private
     */
    NovoCKEditorElement.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    NovoCKEditorElement.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ0tFZGl0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2tlZGl0b3IvQ0tFZGl0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sVUFBVSxFQUtWLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRTFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztNQU1yRCwrQkFBK0IsR0FBRztJQUN0QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUM7SUFDbEQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7Ozs7O0FBY0QsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUF3QzlCLFlBQW9CLElBQVksRUFBVSxpQkFBb0M7UUFBMUQsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUE5QjlFLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBRTlCLDhCQUF5QixHQUFXLEVBQUUsQ0FBQztRQUV2QyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTVCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNCLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNCLFdBQU0s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VCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7Z0JBQzVDLGdxQkFBK0I7YUFDaEM7Ozs7WUFsQ0MsTUFBTTtZQU1OLGlCQUFpQjs7O3FCQThCaEIsS0FBSzt1QkFFTCxLQUFLO21CQUVMLEtBQUs7c0JBRUwsS0FBSzsyQkFFTCxLQUFLO3dDQUVMLEtBQUs7dUJBRUwsS0FBSztxQkFHTCxNQUFNO29CQUVOLE1BQU07bUJBRU4sTUFBTTtvQkFFTixNQUFNO29CQUVOLE1BQU07cUJBRU4sTUFBTTttQkFFTixTQUFTLFNBQUMsTUFBTTtvQkFrQmhCLEtBQUs7K0JBNkNMLFNBQVMsU0FBQyxrQkFBa0I7Ozs7SUExRjdCLHFDQUNPOztJQUNQLHVDQUNTOztJQUNULG1DQUNLOztJQUNMLHNDQUNROztJQUNSLDJDQUM4Qjs7SUFDOUIsd0RBQ3VDOztJQUN2Qyx1Q0FDMEI7O0lBRTFCLHFDQUM0Qjs7SUFDNUIsb0NBQzJCOztJQUMzQixtQ0FDMEI7O0lBQzFCLG9DQUMyQjs7SUFDM0Isb0NBQzJCOztJQUMzQixxQ0FDNEI7O0lBQzVCLG1DQUNLOztJQUVMLHFDQUFvQjs7SUFDcEIsdUNBQVM7O0lBQ1QsOENBQWdCOztJQUVoQiwyQ0FBMEI7O0lBQzFCLDBDQUF5Qjs7SUFFekIsb0RBQXFDOztJQW1EckMsc0NBQXdCOztJQVV4QixpREFBMkI7O0lBc0IzQiwrQ0FZQzs7SUFxQkQsMkNBbURDOzs7OztJQXJLVyxtQ0FBb0I7Ozs7O0lBQUUsZ0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBOZ1pvbmUsXG4gIGZvcndhcmRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpbml0IH0gZnJvbSAnLi9wbHVnaW5zL2luY2x1c2lvbi1oZWxwZXIvaW5jbHVzaW9uLWhlbHBlci1wbHVnaW4nO1xuaW1wb3J0IHsgSW5jbHVzaW9uU3VnZ2VzdGlvbkFyZ3MsIENLRXZlbnRJbmZvLCBFZGl0b3IsIFN1Z2dlc3Rpb24gfSBmcm9tICcuL2VkaXRvci10eXBlcyc7XG5pbXBvcnQgeyBQb3BPdmVyQ29udGVudCB9IGZyb20gJy4uL3BvcG92ZXIvUG9wT3ZlckNvbnRlbnQnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vIGltcG9ydCAnQ0tFRElUT1InO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IENLRURJVE9SX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvQ0tFZGl0b3JFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5kZWNsYXJlIHZhciBDS0VESVRPUjogYW55O1xuXG4vKipcbiAqIENLRWRpdG9yIGNvbXBvbmVudFxuICogVXNhZ2UgOlxuICogIDxub3ZvLWVkaXRvciBbKG5nTW9kZWwpXT1cImRhdGFcIiBbY29uZmlnXT1cInsuLi59XCIgZGVib3VuY2U9XCI1MDBcIj48L25vdm8tZWRpdG9yPlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWVkaXRvcicsXG4gIHByb3ZpZGVyczogW0NLRURJVE9SX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZVVybDogJy4vY2stZWRpdG9yLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ0tFZGl0b3JFbGVtZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpXG4gIGNvbmZpZztcbiAgQElucHV0KClcbiAgZGVib3VuY2U7XG4gIEBJbnB1dCgpXG4gIG5hbWU7XG4gIEBJbnB1dCgpXG4gIG1pbmltYWw7XG4gIEBJbnB1dCgpXG4gIHN0YXJ0dXBGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBmaWxlQnJvd3NlckltYWdlVXBsb2FkVXJsOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBwYXN0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZCgnaG9zdCcpXG4gIGhvc3Q7XG5cbiAgX3ZhbHVlOiBzdHJpbmcgPSAnJztcbiAgaW5zdGFuY2U7XG4gIGRlYm91bmNlVGltZW91dDtcblxuICBwb3BvdmVyVGl0bGU6IHN0cmluZyA9ICcnO1xuICBwb3BvdmVyVGV4dDogc3RyaW5nID0gJyc7XG5cbiAgc3VnZ2VzdGVkUmVwbGFjZW1lbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lLCBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHYpIHtcbiAgICBpZiAodiAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgIHRoaXMub25DaGFuZ2Uodik7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZm9jdXNNYW5hZ2VyLmJsdXIodHJ1ZSk7IC8vIFJlbW92ZSBmb2N1cyBmcm9tIGVkaXRvclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgIENLRURJVE9SLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLm5hbWVdLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGxldCBjb25maWcgPSB0aGlzLmNvbmZpZyB8fCB0aGlzLmdldEJhc2VDb25maWcoKTtcbiAgICBpZiAodGhpcy5zdGFydHVwRm9jdXMpIHtcbiAgICAgIGNvbmZpZy5zdGFydHVwRm9jdXMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgY29uZmlnLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5ja2VkaXRvckluaXQoY29uZmlnKTtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpc21pc3MoKSB7XG4gICAgdGhpcy5oaWRlUG9wb3ZlcigpO1xuICB9XG4gIHBvcG92ZXI6IFBvcE92ZXJDb250ZW50O1xuXG4gIEBWaWV3Q2hpbGQoJ2luY2x1c2lvblBvcG92ZXInKVxuICBzZXQgaW5jbHVzaW9uUG9wb3ZlcihwOiBQb3BPdmVyQ29udGVudCkge1xuICAgIHRoaXMucG9wb3ZlciA9IHA7XG4gIH1cblxuICBnZXQgaW5jbHVzaW9uUG9wb3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3BvdmVyO1xuICB9XG4gIF9zaG91bGRTaG93UG9wb3ZlciA9IGZhbHNlO1xuXG4gIHNldCBzaG91bGRTaG93UG9wb3Zlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3VsZFNob3dQb3BvdmVyID0gdmFsdWU7XG4gIH1cblxuICBnZXQgc2hvdWxkU2hvd1BvcG92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3VsZFNob3dQb3BvdmVyO1xuICB9XG5cbiAgbGVhcm5Nb3JlKCkge31cblxuICBjaGFuZ2VUZXJtKHRlcm06IHN0cmluZykge1xuICAgIC8vIHRoaXMgaXMgYSBwbGFjZWhvbGRsZXIgdG8gYmUgcmVwbGFjZWQgd2hlbiB0aGUgaGlnaGxpZ2h0ZWQgdGV4dCBpcyBjbGlja2VkXG4gICAgdGhpcy5oaWRlUG9wb3ZlcigpO1xuICB9XG5cbiAgaGlkZVBvcG92ZXIoKSB7XG4gICAgdGhpcy5zaG91bGRTaG93UG9wb3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuaW5jbHVzaW9uUG9wb3Zlci5oaWRlKCk7XG4gIH1cblxuICBvbkluY2x1c2lvbkV2ZW50ID0gKGluZm86IENLRXZlbnRJbmZvKSA9PiB7XG4gICAgY29uc3QgZGF0YTogSW5jbHVzaW9uU3VnZ2VzdGlvbkFyZ3MgPSBpbmZvLmRhdGE7XG4gICAgY29uc3QgZWRpdG9yOiBFZGl0b3IgPSBpbmZvLmVkaXRvcjtcblxuICAgIHRoaXMuY3JlYXRlQ2hhbmdlVGVybShpbmZvLmRhdGEuc3VnZ2VzdGlvbi5pZCwgZWRpdG9yLmRvY3VtZW50LiQpO1xuICAgIHRoaXMuY3JlYXRlRGlzbWlzcyhlZGl0b3IsIGRhdGEpO1xuXG4gICAgdGhpcy5zaG91bGRTaG93UG9wb3ZlciA9IHRydWU7XG4gICAgdGhpcy5zdWdnZXN0ZWRSZXBsYWNlbWVudHMgPSBkYXRhLnN1Z2dlc3Rpb24uc3VnZ2VzdGVkUmVwbGFjZW1lbnRzO1xuICAgIHRoaXMucG9wb3ZlclRpdGxlID0gYFwiJHtkYXRhLnN1Z2dlc3Rpb24ucHJvYmxlbWF0aWNUZXJtfVwiYDtcbiAgICB0aGlzLnBvcG92ZXJUZXh0ID0gZGF0YS5zdWdnZXN0aW9uLmV4cGxhbmF0aW9uO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgY3JlYXRlQ2hhbmdlVGVybShpZDogc3RyaW5nLCBkb2N1bWVudDogRG9jdW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVRlcm0gPSAodGVybTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgcGFyZW50LnJlcGxhY2VDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXJtKSwgZWxlbWVudCk7XG4gICAgICB0aGlzLmhpZGVQb3BvdmVyKCk7XG4gICAgfTtcbiAgfVxuXG4gIGNyZWF0ZURpc21pc3MoZWRpdG9yOiBFZGl0b3IsIGRhdGE6IEluY2x1c2lvblN1Z2dlc3Rpb25BcmdzKSB7XG4gICAgdGhpcy5kaXNtaXNzID0gKCkgPT4ge1xuICAgICAgZWRpdG9yLmRpc21pc3NlZFRlcm1zID0gWy4uLihlZGl0b3IuZGlzbWlzc2VkVGVybXMgPyBlZGl0b3IuZGlzbWlzc2VkVGVybXMgOiBbXSksIGRhdGEuc3VnZ2VzdGlvbi5wcm9ibGVtYXRpY1Rlcm1dO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVkaXRvci5kb2N1bWVudC4kLmdldEVsZW1lbnRCeUlkKGRhdGEuc3VnZ2VzdGlvbi5pZCk7XG4gICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICBwYXJlbnQucmVwbGFjZUNoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEuc3VnZ2VzdGlvbi5wcm9ibGVtYXRpY1Rlcm0pLCBlbGVtZW50KTtcbiAgICAgIHRoaXMuaGlkZVBvcG92ZXIoKTtcbiAgICB9O1xuICB9XG5cbiAgY2tlZGl0b3JJbml0ID0gKGNvbmZpZykgPT4ge1xuICAgIGlmICghQ0tFRElUT1IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01ha2Ugc3VyZSB0byBpbmNsdWRlIENLRWRpdG9yIHNvdXJjZXMgaW4geW91ciBkZXBlbmRlbmNpZXMhJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIENLRURJVE9SLnBsdWdpbnMuYWRkKCdpbmNsdXNpb24taGVscGVyJywgeyBpbml0IH0pOyAvLyAsIG9uTG9hZCB9KTtcblxuICAgIC8vIENLRWRpdG9yIHJlcGxhY2UgdGV4dGFyZWFcbiAgICB0aGlzLmluc3RhbmNlID0gQ0tFRElUT1IucmVwbGFjZSh0aGlzLmhvc3QubmF0aXZlRWxlbWVudCwgY29uZmlnKTtcblxuICAgIC8vIFNldCBpbml0aWFsIHZhbHVlXG4gICAgdGhpcy5pbnN0YW5jZS5zZXREYXRhKHRoaXMudmFsdWUpO1xuXG4gICAgLy8gbGlzdGVuIGZvciBpbnN0YW5jZVJlYWR5IGV2ZW50XG4gICAgdGhpcy5pbnN0YW5jZS5vbignaW5zdGFuY2VSZWFkeScsIChldnQpID0+IHtcbiAgICAgIC8vIHNlbmQgdGhlIGV2dCB0byB0aGUgRXZlbnRFbWl0dGVyXG4gICAgICB0aGlzLnJlYWR5LmVtaXQoZXZ0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2luY2x1c2lvbicsIHRoaXMub25JbmNsdXNpb25FdmVudC5iaW5kKHRoaXMpKTtcblxuICAgIC8vIENLRWRpdG9yIGNoYW5nZSBldmVudFxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICBsZXQgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldERhdGEoKTtcblxuICAgICAgLy8gRGVib3VuY2UgdXBkYXRlXG4gICAgICBpZiAodGhpcy5kZWJvdW5jZSkge1xuICAgICAgICBpZiAodGhpcy5kZWJvdW5jZVRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9LCBwYXJzZUludCh0aGlzLmRlYm91bmNlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdibHVyJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gICAgfSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignZm9jdXMnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XG4gICAgfSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncGFzdGUnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMucGFzdGUuZW1pdChldmVudCk7XG4gICAgfSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignbG9hZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmxvYWRlZC5lbWl0KGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEJhc2VDb25maWcoKSB7XG4gICAgY29uc3QgYmFzZUNvbmZpZyA9IHtcbiAgICAgIGV4dHJhUGx1Z2luczogJ2luY2x1c2lvbi1oZWxwZXInLFxuICAgICAgZW50ZXJNb2RlOiBDS0VESVRPUi5FTlRFUl9CUixcbiAgICAgIHNoaWZ0RW50ZXJNb2RlOiBDS0VESVRPUi5FTlRFUl9QLFxuICAgICAgZGlzYWJsZU5hdGl2ZVNwZWxsQ2hlY2tlcjogZmFsc2UsXG4gICAgICByZW1vdmVQbHVnaW5zOiAnbGlzdHN0eWxlLHRhYmxldG9vbHMsY29udGV4dG1lbnUnLCAvLyBhbGxvd3MgYnJvd3NlciBiYXNlZCBzcGVsbCBjaGVja2luZ1xuICAgICAgYWxsb3dlZENvbnRlbnQ6IHRydWUsXG4gICAgICAvLyBleHRyYUFsbG93ZWRDb250ZW50OiAnKigqKXsqfTt0YWJsZSB0Ym9keSB0ciB0ZCB0aFsqXTsnLCAvLyBhbGxvd3MgY2xhc3MgbmFtZXMgKCopIGFuZCBpbmxpbmUgc3R5bGVzIHsqfSBmb3IgYWxsIGFuZCBhdHRyaWJ1dGVzIFsqXSBvbiB0YWJsZXNcbiAgICAgIGZvbnRfbmFtZXM6XG4gICAgICAgICdBcmlhbC9BcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOycgK1xuICAgICAgICAnQ2FsaWJyaS9DYWxpYnJpLCBWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7JyArXG4gICAgICAgICdDb21pYyBTYW5zIE1TL0NvbWljIFNhbnMgTVMsIGN1cnNpdmU7JyArXG4gICAgICAgICdDb3VyaWVyIE5ldy9Db3VyaWVyIE5ldywgQ291cmllciwgbW9ub3NwYWNlOycgK1xuICAgICAgICAnR2VvcmdpYS9HZW9yZ2lhLCBzZXJpZjsnICtcbiAgICAgICAgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUvTHVjaWRhIFNhbnMgVW5pY29kZSwgTHVjaWRhIEdyYW5kZSwgc2Fucy1zZXJpZjsnICtcbiAgICAgICAgJ1RhaG9tYS9UYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjsnICtcbiAgICAgICAgJ1RpbWVzIE5ldyBSb21hbi9UaW1lcyBOZXcgUm9tYW4sIFRpbWVzLCBzZXJpZjsnICtcbiAgICAgICAgJ1RyZWJ1Y2hldCBNUy9UcmVidWNoZXQgTVMsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsnICtcbiAgICAgICAgJ1ZlcmRhbmEvVmVyZGFuYSwgR2VuZXZhLCBzYW5zLXNlcmlmJyxcbiAgICB9O1xuXG4gICAgY29uc3QgbWluaW1hbENvbmZpZyA9IHtcbiAgICAgIHRvb2xiYXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdiYXNpY3N0eWxlcycsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICdTdHlsZXMnLFxuICAgICAgICAgICAgJ0ZvbnRTaXplJyxcbiAgICAgICAgICAgICdCb2xkJyxcbiAgICAgICAgICAgICdJdGFsaWMnLFxuICAgICAgICAgICAgJ1VuZGVybGluZScsXG4gICAgICAgICAgICAnVGV4dENvbG9yJyxcbiAgICAgICAgICAgICctJyxcbiAgICAgICAgICAgICdOdW1iZXJlZExpc3QnLFxuICAgICAgICAgICAgJ0J1bGxldGVkTGlzdCcsXG4gICAgICAgICAgICAnT3V0ZGVudCcsXG4gICAgICAgICAgICAnSW5kZW50JyxcbiAgICAgICAgICAgICdMaW5rJyxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgY29uc3QgZXh0ZW5kZWRDb25maWcgPSB7XG4gICAgICB0b29sYmFyOiBbXG4gICAgICAgIHsgbmFtZTogJ2NsaXBib2FyZCcsIGl0ZW1zOiBbJ1Bhc3RlJywgJ1Bhc3RlVGV4dCcsICdQYXN0ZUZyb21Xb3JkJywgJ1VuZG8nLCAnUmVkbyddIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncGFyYWdyYXBoJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgJ051bWJlcmVkTGlzdCcsXG4gICAgICAgICAgICAnQnVsbGV0ZWRMaXN0JyxcbiAgICAgICAgICAgICdPdXRkZW50JyxcbiAgICAgICAgICAgICdJbmRlbnQnLFxuICAgICAgICAgICAgJ0Jsb2NrcXVvdGUnLFxuICAgICAgICAgICAgJ0p1c3RpZnlMZWZ0JyxcbiAgICAgICAgICAgICdKdXN0aWZ5Q2VudGVyJyxcbiAgICAgICAgICAgICdKdXN0aWZ5UmlnaHQnLFxuICAgICAgICAgICAgJ0p1c3RpZnlCbG9jaycsXG4gICAgICAgICAgICAnQmlkaUx0cicsXG4gICAgICAgICAgICAnQmlkaVJ0bCcsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBuYW1lOiAnbGlua3MnLCBpdGVtczogWydMaW5rJ10gfSxcbiAgICAgICAgeyBuYW1lOiAnaW5zZXJ0JywgaXRlbXM6IFsnSW1hZ2UnLCAnVGFibGUnLCAnSG9yaXpvbnRhbFJ1bGUnLCAnSW5jbHVzaW9uLUhlbHBlciddIH0sXG4gICAgICAgIHsgbmFtZTogJ3Rvb2xzJywgaXRlbXM6IFsnTWF4aW1pemUnLCAnU291cmNlJ10gfSxcbiAgICAgICAgJy8nLCAvLyBsaW5lIGJyZWFrXG4gICAgICAgIHsgbmFtZTogJ2Jhc2ljc3R5bGVzJywgaXRlbXM6IFsnQm9sZCcsICdJdGFsaWMnLCAnVW5kZXJsaW5lJywgJ1N0cmlrZScsICdTdWJzY3JpcHQnLCAnU3VwZXJzY3JpcHQnXSB9LFxuICAgICAgICB7IG5hbWU6ICdzdHlsZXMnLCBpdGVtczogWydTdHlsZXMnLCAnRm9ybWF0JywgJ0ZvbnQnLCAnRm9udFNpemUnXSB9LFxuICAgICAgICB7IG5hbWU6ICdjb2xvcnMnLCBpdGVtczogWydUZXh0Q29sb3InLCAnQkdDb2xvciddIH0sXG4gICAgICBdLFxuICAgICAgZmlsZWJyb3dzZXJJbWFnZVVwbG9hZFVybDogdGhpcy5maWxlQnJvd3NlckltYWdlVXBsb2FkVXJsLFxuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihiYXNlQ29uZmlnLCB0aGlzLm1pbmltYWwgPyBtaW5pbWFsQ29uZmlnIDogZXh0ZW5kZWRDb25maWcpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0RGF0YSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UodmFsdWU/OiBhbnkpIHt9XG5cbiAgb25Ub3VjaGVkKGV2ZW50Pykge31cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuKSB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm4pIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgQ0tFRElUT1IuaW5zdGFuY2VzW3RoaXMuaW5zdGFuY2UubmFtZV0uc2V0UmVhZE9ubHkoZGlzYWJsZWQpO1xuICAgIH1cbiAgfVxuXG4gIGluc2VydFRleHQodGV4dCkge1xuICAgIGxldCB0cmltbWVkVGV4dCA9IHRleHQudHJpbSgpO1xuICAgIHRoaXMuaW5zdGFuY2UuaW5zZXJ0VGV4dCh0cmltbWVkVGV4dCk7XG4gIH1cbn1cbiJdfQ==