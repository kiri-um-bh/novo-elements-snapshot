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
var CKEDITOR_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NovoCKEditorElement; })),
    multi: true,
};
/**
 * CKEditor component
 * Usage :
 *  <novo-editor [(ngModel)]="data" [config]="{...}" debounce="500"></novo-editor>
 */
var NovoCKEditorElement = /** @class */ (function () {
    function NovoCKEditorElement(zone) {
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
    Object.defineProperty(NovoCKEditorElement.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoCKEditorElement.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.instance) {
            this.instance.focusManager.blur(true); // Remove focus from editor
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.instance.removeAllListeners();
                /** @type {?} */
                var aInstance = CKEDITOR.instances[_this.instance.name];
                if (aInstance) {
                    aInstance.destroy();
                }
                _this.instance.destroy();
                _this.instance = null;
            }));
        }
    };
    /**
     * @return {?}
     */
    NovoCKEditorElement.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = Object.assign(this.getBaseConfig(), this.config);
        if (this.startupFocus) {
            config.startupFocus = true;
        }
        if (this.disabled) {
            config.readOnly = true;
        }
        this.ckeditorInit(config);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoCKEditorElement.prototype.updateValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.zone.run((/**
         * @return {?}
         */
        function () {
            _this.value = value;
            _this.onChange(value);
            _this.onTouched();
            _this.change.emit(value);
        }));
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    NovoCKEditorElement.prototype.ckeditorInit = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
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
        function (evt) {
            // send the evt to the EventEmitter
            _this.ready.emit(evt);
        }));
        // CKEditor change event
        this.instance.on('change', (/**
         * @return {?}
         */
        function () {
            _this.onTouched();
            /** @type {?} */
            var value = _this.instance.getData();
            // Debounce update
            if (_this.debounce) {
                if (_this.debounceTimeout) {
                    clearTimeout(_this.debounceTimeout);
                }
                _this.debounceTimeout = setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.updateValue(value);
                    _this.debounceTimeout = null;
                }), parseInt(_this.debounce));
            }
            else {
                _this.updateValue(value);
            }
        }));
        this.instance.on('blur', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.blur.emit(event);
        }));
        this.instance.on('focus', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.focus.emit(event);
        }));
        this.instance.on('paste', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.paste.emit(event);
        }));
        this.instance.on('loaded', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.loaded.emit(event);
        }));
    };
    /**
     * @return {?}
     */
    NovoCKEditorElement.prototype.getBaseConfig = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var baseConfig = {
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
        var minimalConfig = {
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
        var extendedConfig = {
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
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoCKEditorElement.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value;
        if (this.instance) {
            this.instance.setData(value);
        }
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    NovoCKEditorElement.prototype.onChange = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) { };
    /**
     * @param {?=} event
     * @return {?}
     */
    NovoCKEditorElement.prototype.onTouched = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoCKEditorElement.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoCKEditorElement.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    NovoCKEditorElement.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.disabled = disabled;
        if (this.instance) {
            CKEDITOR.instances[this.instance.name].setReadOnly(disabled);
        }
    };
    /**
     * @param {?} text
     * @return {?}
     */
    NovoCKEditorElement.prototype.insertText = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        /** @type {?} */
        var trimmedText = text.trim();
        this.instance.insertText(trimmedText);
    };
    NovoCKEditorElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-editor',
                    providers: [CKEDITOR_CONTROL_VALUE_ACCESSOR],
                    template: '<textarea [name]="name" [id]="name" #host></textarea>'
                }] }
    ];
    /** @nocollapse */
    NovoCKEditorElement.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
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
    return NovoCKEditorElement;
}());
export { NovoCKEditorElement };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ0tFZGl0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2tlZGl0b3IvQ0tFZGl0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDaEksT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOzs7SUFHbkUsK0JBQStCLEdBQUc7SUFDdEMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixFQUFDO0lBQ2xELEtBQUssRUFBRSxJQUFJO0NBQ1o7Ozs7OztBQVNEO0lBd0NFLDZCQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQXpCaEMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsOEJBQXlCLEdBQVcsRUFBRSxDQUFDO1FBRXZDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0IsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0IsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJNUIsV0FBTSxHQUFXLEVBQUUsQ0FBQztJQUllLENBQUM7SUFFcEMsc0JBQUksc0NBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7OztRQUVELFVBQ1UsQ0FBQztZQUNULElB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QUN2Qyx1Q0FDMEI7O0lBRTFCLHFDQUM0Qjs7SUFDNUIsb0NBQzJCOztJQUMzQixtQ0FDMEI7O0lBQzFCLG9DQUMyQjs7SUFDM0Isb0NBQzJCOztJQUMzQixxQ0FDNEI7O0lBQzVCLG1DQUNLOztJQUVMLHFDQUFvQjs7SUFDcEIsdUNBQVM7O0lBQ1QsOENBQWdCOzs7OztJQUVKLG1DQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIEV2ZW50RW1pdHRlciwgTmdab25lLCBmb3J3YXJkUmVmLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBDS0VESVRPUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0NLRWRpdG9yRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuZGVjbGFyZSB2YXIgQ0tFRElUT1I6IGFueTtcblxuLyoqXG4gKiBDS0VkaXRvciBjb21wb25lbnRcbiAqIFVzYWdlIDpcbiAqICA8bm92by1lZGl0b3IgWyhuZ01vZGVsKV09XCJkYXRhXCIgW2NvbmZpZ109XCJ7Li4ufVwiIGRlYm91bmNlPVwiNTAwXCI+PC9ub3ZvLWVkaXRvcj5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1lZGl0b3InLFxuICBwcm92aWRlcnM6IFtDS0VESVRPUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6ICc8dGV4dGFyZWEgW25hbWVdPVwibmFtZVwiIFtpZF09XCJuYW1lXCIgI2hvc3Q+PC90ZXh0YXJlYT4nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ0tFZGl0b3JFbGVtZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpXG4gIGNvbmZpZztcbiAgQElucHV0KClcbiAgZGVib3VuY2U7XG4gIEBJbnB1dCgpXG4gIG5hbWU7XG4gIEBJbnB1dCgpXG4gIG1pbmltYWw7XG4gIEBJbnB1dCgpXG4gIHN0YXJ0dXBGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBmaWxlQnJvd3NlckltYWdlVXBsb2FkVXJsOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBwYXN0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZCgnaG9zdCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBob3N0O1xuXG4gIF92YWx1ZTogc3RyaW5nID0gJyc7XG4gIGluc3RhbmNlO1xuICBkZWJvdW5jZVRpbWVvdXQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2KSB7XG4gICAgaWYgKHYgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHYpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmZvY3VzTWFuYWdlci5ibHVyKHRydWUpOyAvLyBSZW1vdmUgZm9jdXMgZnJvbSBlZGl0b3JcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgICBjb25zdCBhSW5zdGFuY2UgPSBDS0VESVRPUi5pbnN0YW5jZXNbdGhpcy5pbnN0YW5jZS5uYW1lXTtcbiAgICAgICAgaWYgKGFJbnN0YW5jZSkge1xuICAgICAgICAgIGFJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGxldCBjb25maWcgPSBPYmplY3QuYXNzaWduKHRoaXMuZ2V0QmFzZUNvbmZpZygpLCB0aGlzLmNvbmZpZyk7XG4gICAgaWYgKHRoaXMuc3RhcnR1cEZvY3VzKSB7XG4gICAgICBjb25maWcuc3RhcnR1cEZvY3VzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGNvbmZpZy5yZWFkT25seSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuY2tlZGl0b3JJbml0KGNvbmZpZyk7XG4gIH1cblxuICB1cGRhdGVWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNrZWRpdG9ySW5pdChjb25maWcpIHtcbiAgICBpZiAoIUNLRURJVE9SKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYWtlIHN1cmUgdG8gaW5jbHVkZSBDS0VkaXRvciBzb3VyY2VzIGluIHlvdXIgZGVwZW5kZW5jaWVzIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENLRWRpdG9yIHJlcGxhY2UgdGV4dGFyZWFcbiAgICB0aGlzLmluc3RhbmNlID0gQ0tFRElUT1IucmVwbGFjZSh0aGlzLmhvc3QubmF0aXZlRWxlbWVudCwgY29uZmlnKTtcblxuICAgIC8vIFNldCBpbml0aWFsIHZhbHVlXG4gICAgdGhpcy5pbnN0YW5jZS5zZXREYXRhKHRoaXMudmFsdWUpO1xuXG4gICAgLy8gbGlzdGVuIGZvciBpbnN0YW5jZVJlYWR5IGV2ZW50XG4gICAgdGhpcy5pbnN0YW5jZS5vbignaW5zdGFuY2VSZWFkeScsIChldnQpID0+IHtcbiAgICAgIC8vIHNlbmQgdGhlIGV2dCB0byB0aGUgRXZlbnRFbWl0dGVyXG4gICAgICB0aGlzLnJlYWR5LmVtaXQoZXZ0KTtcbiAgICB9KTtcblxuICAgIC8vIENLRWRpdG9yIGNoYW5nZSBldmVudFxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICBsZXQgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldERhdGEoKTtcblxuICAgICAgLy8gRGVib3VuY2UgdXBkYXRlXG4gICAgICBpZiAodGhpcy5kZWJvdW5jZSkge1xuICAgICAgICBpZiAodGhpcy5kZWJvdW5jZVRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9LCBwYXJzZUludCh0aGlzLmRlYm91bmNlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdibHVyJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gICAgfSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignZm9jdXMnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XG4gICAgfSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncGFzdGUnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMucGFzdGUuZW1pdChldmVudCk7XG4gICAgfSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignbG9hZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmxvYWRlZC5lbWl0KGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEJhc2VDb25maWcoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3QgYmFzZUNvbmZpZyA9IHtcbiAgICAgIGVudGVyTW9kZTogQ0tFRElUT1IuRU5URVJfQlIsXG4gICAgICBzaGlmdEVudGVyTW9kZTogQ0tFRElUT1IuRU5URVJfUCxcbiAgICAgIGRpc2FibGVOYXRpdmVTcGVsbENoZWNrZXI6IGZhbHNlLFxuICAgICAgcmVtb3ZlUGx1Z2luczogJ2xpc3RzdHlsZSx0YWJsZXRvb2xzLGNvbnRleHRtZW51JywgLy8gYWxsb3dzIGJyb3dzZXIgYmFzZWQgc3BlbGwgY2hlY2tpbmdcbiAgICAgIGV4dHJhQWxsb3dlZENvbnRlbnQ6ICcqKCopeyp9O3RhYmxlIHRib2R5IHRyIHRkIHRoWypdOycsIC8vIGFsbG93cyBjbGFzcyBuYW1lcyAoKikgYW5kIGlubGluZSBzdHlsZXMgeyp9IGZvciBhbGwgYW5kIGF0dHJpYnV0ZXMgWypdIG9uIHRhYmxlc1xuICAgICAgZm9udF9uYW1lczpcbiAgICAgICAgJ0FyaWFsL0FyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7JyArXG4gICAgICAgICdDYWxpYnJpL0NhbGlicmksIFZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZjsnICtcbiAgICAgICAgJ0NvbWljIFNhbnMgTVMvQ29taWMgU2FucyBNUywgY3Vyc2l2ZTsnICtcbiAgICAgICAgJ0NvdXJpZXIgTmV3L0NvdXJpZXIgTmV3LCBDb3VyaWVyLCBtb25vc3BhY2U7JyArXG4gICAgICAgICdHZW9yZ2lhL0dlb3JnaWEsIHNlcmlmOycgK1xuICAgICAgICAnTHVjaWRhIFNhbnMgVW5pY29kZS9MdWNpZGEgU2FucyBVbmljb2RlLCBMdWNpZGEgR3JhbmRlLCBzYW5zLXNlcmlmOycgK1xuICAgICAgICAnVGFob21hL1RhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmOycgK1xuICAgICAgICAnVGltZXMgTmV3IFJvbWFuL1RpbWVzIE5ldyBSb21hbiwgVGltZXMsIHNlcmlmOycgK1xuICAgICAgICAnVHJlYnVjaGV0IE1TL1RyZWJ1Y2hldCBNUywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOycgK1xuICAgICAgICAnVmVyZGFuYS9WZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWYnLFxuICAgIH07XG5cbiAgICBjb25zdCBtaW5pbWFsQ29uZmlnID0ge1xuICAgICAgdG9vbGJhcjogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2Jhc2ljc3R5bGVzJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgJ1N0eWxlcycsXG4gICAgICAgICAgICAnRm9udFNpemUnLFxuICAgICAgICAgICAgJ0JvbGQnLFxuICAgICAgICAgICAgJ0l0YWxpYycsXG4gICAgICAgICAgICAnVW5kZXJsaW5lJyxcbiAgICAgICAgICAgICdUZXh0Q29sb3InLFxuICAgICAgICAgICAgJy0nLFxuICAgICAgICAgICAgJ051bWJlcmVkTGlzdCcsXG4gICAgICAgICAgICAnQnVsbGV0ZWRMaXN0JyxcbiAgICAgICAgICAgICdPdXRkZW50JyxcbiAgICAgICAgICAgICdJbmRlbnQnLFxuICAgICAgICAgICAgJ0xpbmsnLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG5cbiAgICBjb25zdCBleHRlbmRlZENvbmZpZyA9IHtcbiAgICAgIHRvb2xiYXI6IFtcbiAgICAgICAgeyBuYW1lOiAnY2xpcGJvYXJkJywgaXRlbXM6IFsnUGFzdGUnLCAnUGFzdGVUZXh0JywgJ1Bhc3RlRnJvbVdvcmQnLCAnVW5kbycsICdSZWRvJ10gfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdwYXJhZ3JhcGgnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAnTnVtYmVyZWRMaXN0JyxcbiAgICAgICAgICAgICdCdWxsZXRlZExpc3QnLFxuICAgICAgICAgICAgJ091dGRlbnQnLFxuICAgICAgICAgICAgJ0luZGVudCcsXG4gICAgICAgICAgICAnQmxvY2txdW90ZScsXG4gICAgICAgICAgICAnSnVzdGlmeUxlZnQnLFxuICAgICAgICAgICAgJ0p1c3RpZnlDZW50ZXInLFxuICAgICAgICAgICAgJ0p1c3RpZnlSaWdodCcsXG4gICAgICAgICAgICAnSnVzdGlmeUJsb2NrJyxcbiAgICAgICAgICAgICdCaWRpTHRyJyxcbiAgICAgICAgICAgICdCaWRpUnRsJyxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7IG5hbWU6ICdsaW5rcycsIGl0ZW1zOiBbJ0xpbmsnXSB9LFxuICAgICAgICB7IG5hbWU6ICdpbnNlcnQnLCBpdGVtczogWydJbWFnZScsICdUYWJsZScsICdIb3Jpem9udGFsUnVsZSddIH0sXG4gICAgICAgIHsgbmFtZTogJ3Rvb2xzJywgaXRlbXM6IFsnTWF4aW1pemUnLCAnU291cmNlJ10gfSxcbiAgICAgICAgJy8nLCAvLyBsaW5lIGJyZWFrXG4gICAgICAgIHsgbmFtZTogJ2Jhc2ljc3R5bGVzJywgaXRlbXM6IFsnQm9sZCcsICdJdGFsaWMnLCAnVW5kZXJsaW5lJywgJ1N0cmlrZScsICdTdWJzY3JpcHQnLCAnU3VwZXJzY3JpcHQnXSB9LFxuICAgICAgICB7IG5hbWU6ICdzdHlsZXMnLCBpdGVtczogWydTdHlsZXMnLCAnRm9ybWF0JywgJ0ZvbnQnLCAnRm9udFNpemUnXSB9LFxuICAgICAgICB7IG5hbWU6ICdjb2xvcnMnLCBpdGVtczogWydUZXh0Q29sb3InLCAnQkdDb2xvciddIH0sXG4gICAgICBdLFxuICAgICAgZmlsZWJyb3dzZXJJbWFnZVVwbG9hZFVybDogdGhpcy5maWxlQnJvd3NlckltYWdlVXBsb2FkVXJsLFxuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihiYXNlQ29uZmlnLCB0aGlzLm1pbmltYWwgPyBtaW5pbWFsQ29uZmlnIDogZXh0ZW5kZWRDb25maWcpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0RGF0YSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UodmFsdWU/OiBhbnkpIHt9XG5cbiAgb25Ub3VjaGVkKGV2ZW50Pykge31cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuKSB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm4pIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgQ0tFRElUT1IuaW5zdGFuY2VzW3RoaXMuaW5zdGFuY2UubmFtZV0uc2V0UmVhZE9ubHkoZGlzYWJsZWQpO1xuICAgIH1cbiAgfVxuXG4gIGluc2VydFRleHQodGV4dCkge1xuICAgIGxldCB0cmltbWVkVGV4dCA9IHRleHQudHJpbSgpO1xuICAgIHRoaXMuaW5zdGFuY2UuaW5zZXJ0VGV4dCh0cmltbWVkVGV4dCk7XG4gIH1cbn1cbiJdfQ==