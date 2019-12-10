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
        var config = this.config || this.getBaseConfig();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ0tFZGl0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2tlZGl0b3IvQ0tFZGl0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDaEksT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOzs7SUFHbkUsK0JBQStCLEdBQUc7SUFDdEMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixFQUFDO0lBQ2xELEtBQUssRUFBRSxJQUFJO0NBQ1o7Ozs7OztBQVNEO0lBd0NFLDZCQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQXpCaEMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsOEJBQXlCLEdBQVcsRUFBRSxDQUFDO1FBRXZDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0IsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0IsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJNUIsV0FBTSxHQUFXLEVBQUUsQ0FBQztJQUllLENBQUM7SUFFcEMsc0JBQUksc0NBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7OztRQUVELFVBQ1UsQ0FBQztZQUNULElB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OztJQUM1QixvQ0FDMkI7O0lBQzNCLG1DQUMwQjs7SUFDMUIsb0NBQzJCOztJQUMzQixvQ0FDMkI7O0lBQzNCLHFDQUM0Qjs7SUFDNUIsbUNBQ0s7O0lBRUwscUNBQW9COztJQUNwQix1Q0FBUzs7SUFDVCw4Q0FBZ0I7Ozs7O0lBRUosbUNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCwgRXZlbnRFbWl0dGVyLCBOZ1pvbmUsIGZvcndhcmRSZWYsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IENLRURJVE9SX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvQ0tFZGl0b3JFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5kZWNsYXJlIHZhciBDS0VESVRPUjogYW55O1xuXG4vKipcbiAqIENLRWRpdG9yIGNvbXBvbmVudFxuICogVXNhZ2UgOlxuICogIDxub3ZvLWVkaXRvciBbKG5nTW9kZWwpXT1cImRhdGFcIiBbY29uZmlnXT1cInsuLi59XCIgZGVib3VuY2U9XCI1MDBcIj48L25vdm8tZWRpdG9yPlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWVkaXRvcicsXG4gIHByb3ZpZGVyczogW0NLRURJVE9SX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogJzx0ZXh0YXJlYSBbbmFtZV09XCJuYW1lXCIgW2lkXT1cIm5hbWVcIiAjaG9zdD48L3RleHRhcmVhPicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DS0VkaXRvckVsZW1lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KClcbiAgY29uZmlnO1xuICBASW5wdXQoKVxuICBkZWJvdW5jZTtcbiAgQElucHV0KClcbiAgbmFtZTtcbiAgQElucHV0KClcbiAgbWluaW1hbDtcbiAgQElucHV0KClcbiAgc3RhcnR1cEZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmw6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHBhc3RlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKCdob3N0JywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIGhvc3Q7XG5cbiAgX3ZhbHVlOiBzdHJpbmcgPSAnJztcbiAgaW5zdGFuY2U7XG4gIGRlYm91bmNlVGltZW91dDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkge31cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHYpIHtcbiAgICBpZiAodiAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgIHRoaXMub25DaGFuZ2Uodik7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZm9jdXNNYW5hZ2VyLmJsdXIodHJ1ZSk7IC8vIFJlbW92ZSBmb2N1cyBmcm9tIGVkaXRvclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgIGNvbnN0IGFJbnN0YW5jZSA9IENLRURJVE9SLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLm5hbWVdO1xuICAgICAgICBpZiAoYUluc3RhbmNlKSB7XG4gICAgICAgICAgYUluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuY29uZmlnIHx8IHRoaXMuZ2V0QmFzZUNvbmZpZygpO1xuICAgIGlmICh0aGlzLnN0YXJ0dXBGb2N1cykge1xuICAgICAgY29uZmlnLnN0YXJ0dXBGb2N1cyA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICBjb25maWcucmVhZE9ubHkgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmNrZWRpdG9ySW5pdChjb25maWcpO1xuICB9XG5cbiAgdXBkYXRlVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBja2VkaXRvckluaXQoY29uZmlnKSB7XG4gICAgaWYgKCFDS0VESVRPUikge1xuICAgICAgY29uc29sZS5lcnJvcignTWFrZSBzdXJlIHRvIGluY2x1ZGUgQ0tFZGl0b3Igc291cmNlcyBpbiB5b3VyIGRlcGVuZGVuY2llcyEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDS0VkaXRvciByZXBsYWNlIHRleHRhcmVhXG4gICAgdGhpcy5pbnN0YW5jZSA9IENLRURJVE9SLnJlcGxhY2UodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsIGNvbmZpZyk7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZVxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0RGF0YSh0aGlzLnZhbHVlKTtcblxuICAgIC8vIGxpc3RlbiBmb3IgaW5zdGFuY2VSZWFkeSBldmVudFxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2luc3RhbmNlUmVhZHknLCAoZXZ0KSA9PiB7XG4gICAgICAvLyBzZW5kIHRoZSBldnQgdG8gdGhlIEV2ZW50RW1pdHRlclxuICAgICAgdGhpcy5yZWFkeS5lbWl0KGV2dCk7XG4gICAgfSk7XG5cbiAgICAvLyBDS0VkaXRvciBjaGFuZ2UgZXZlbnRcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgbGV0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXREYXRhKCk7XG5cbiAgICAgIC8vIERlYm91bmNlIHVwZGF0ZVxuICAgICAgaWYgKHRoaXMuZGVib3VuY2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVib3VuY2VUaW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUpO1xuICAgICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfSwgcGFyc2VJbnQodGhpcy5kZWJvdW5jZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignYmx1cicsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ZvY3VzJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Bhc3RlJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnBhc3RlLmVtaXQoZXZlbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2xvYWRlZCcsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5sb2FkZWQuZW1pdChldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRCYXNlQ29uZmlnKCkge1xuICAgIGNvbnN0IGJhc2VDb25maWcgPSB7XG4gICAgICBlbnRlck1vZGU6IENLRURJVE9SLkVOVEVSX0JSLFxuICAgICAgc2hpZnRFbnRlck1vZGU6IENLRURJVE9SLkVOVEVSX1AsXG4gICAgICBkaXNhYmxlTmF0aXZlU3BlbGxDaGVja2VyOiBmYWxzZSxcbiAgICAgIHJlbW92ZVBsdWdpbnM6ICdsaXN0c3R5bGUsdGFibGV0b29scyxjb250ZXh0bWVudScsIC8vIGFsbG93cyBicm93c2VyIGJhc2VkIHNwZWxsIGNoZWNraW5nXG4gICAgICBleHRyYUFsbG93ZWRDb250ZW50OiAnKigqKXsqfTt0YWJsZSB0Ym9keSB0ciB0ZCB0aFsqXTsnLCAvLyBhbGxvd3MgY2xhc3MgbmFtZXMgKCopIGFuZCBpbmxpbmUgc3R5bGVzIHsqfSBmb3IgYWxsIGFuZCBhdHRyaWJ1dGVzIFsqXSBvbiB0YWJsZXNcbiAgICAgIGZvbnRfbmFtZXM6XG4gICAgICAgICdBcmlhbC9BcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOycgK1xuICAgICAgICAnQ2FsaWJyaS9DYWxpYnJpLCBWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7JyArXG4gICAgICAgICdDb21pYyBTYW5zIE1TL0NvbWljIFNhbnMgTVMsIGN1cnNpdmU7JyArXG4gICAgICAgICdDb3VyaWVyIE5ldy9Db3VyaWVyIE5ldywgQ291cmllciwgbW9ub3NwYWNlOycgK1xuICAgICAgICAnR2VvcmdpYS9HZW9yZ2lhLCBzZXJpZjsnICtcbiAgICAgICAgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUvTHVjaWRhIFNhbnMgVW5pY29kZSwgTHVjaWRhIEdyYW5kZSwgc2Fucy1zZXJpZjsnICtcbiAgICAgICAgJ1RhaG9tYS9UYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjsnICtcbiAgICAgICAgJ1RpbWVzIE5ldyBSb21hbi9UaW1lcyBOZXcgUm9tYW4sIFRpbWVzLCBzZXJpZjsnICtcbiAgICAgICAgJ1RyZWJ1Y2hldCBNUy9UcmVidWNoZXQgTVMsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsnICtcbiAgICAgICAgJ1ZlcmRhbmEvVmVyZGFuYSwgR2VuZXZhLCBzYW5zLXNlcmlmJyxcbiAgICB9O1xuXG4gICAgY29uc3QgbWluaW1hbENvbmZpZyA9IHtcbiAgICAgIHRvb2xiYXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdiYXNpY3N0eWxlcycsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICdTdHlsZXMnLFxuICAgICAgICAgICAgJ0ZvbnRTaXplJyxcbiAgICAgICAgICAgICdCb2xkJyxcbiAgICAgICAgICAgICdJdGFsaWMnLFxuICAgICAgICAgICAgJ1VuZGVybGluZScsXG4gICAgICAgICAgICAnVGV4dENvbG9yJyxcbiAgICAgICAgICAgICctJyxcbiAgICAgICAgICAgICdOdW1iZXJlZExpc3QnLFxuICAgICAgICAgICAgJ0J1bGxldGVkTGlzdCcsXG4gICAgICAgICAgICAnT3V0ZGVudCcsXG4gICAgICAgICAgICAnSW5kZW50JyxcbiAgICAgICAgICAgICdMaW5rJyxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgY29uc3QgZXh0ZW5kZWRDb25maWcgPSB7XG4gICAgICB0b29sYmFyOiBbXG4gICAgICAgIHsgbmFtZTogJ2NsaXBib2FyZCcsIGl0ZW1zOiBbJ1Bhc3RlJywgJ1Bhc3RlVGV4dCcsICdQYXN0ZUZyb21Xb3JkJywgJ1VuZG8nLCAnUmVkbyddIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncGFyYWdyYXBoJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgJ051bWJlcmVkTGlzdCcsXG4gICAgICAgICAgICAnQnVsbGV0ZWRMaXN0JyxcbiAgICAgICAgICAgICdPdXRkZW50JyxcbiAgICAgICAgICAgICdJbmRlbnQnLFxuICAgICAgICAgICAgJ0Jsb2NrcXVvdGUnLFxuICAgICAgICAgICAgJ0p1c3RpZnlMZWZ0JyxcbiAgICAgICAgICAgICdKdXN0aWZ5Q2VudGVyJyxcbiAgICAgICAgICAgICdKdXN0aWZ5UmlnaHQnLFxuICAgICAgICAgICAgJ0p1c3RpZnlCbG9jaycsXG4gICAgICAgICAgICAnQmlkaUx0cicsXG4gICAgICAgICAgICAnQmlkaVJ0bCcsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBuYW1lOiAnbGlua3MnLCBpdGVtczogWydMaW5rJ10gfSxcbiAgICAgICAgeyBuYW1lOiAnaW5zZXJ0JywgaXRlbXM6IFsnSW1hZ2UnLCAnVGFibGUnLCAnSG9yaXpvbnRhbFJ1bGUnXSB9LFxuICAgICAgICB7IG5hbWU6ICd0b29scycsIGl0ZW1zOiBbJ01heGltaXplJywgJ1NvdXJjZSddIH0sXG4gICAgICAgICcvJywgLy8gbGluZSBicmVha1xuICAgICAgICB7IG5hbWU6ICdiYXNpY3N0eWxlcycsIGl0ZW1zOiBbJ0JvbGQnLCAnSXRhbGljJywgJ1VuZGVybGluZScsICdTdHJpa2UnLCAnU3Vic2NyaXB0JywgJ1N1cGVyc2NyaXB0J10gfSxcbiAgICAgICAgeyBuYW1lOiAnc3R5bGVzJywgaXRlbXM6IFsnU3R5bGVzJywgJ0Zvcm1hdCcsICdGb250JywgJ0ZvbnRTaXplJ10gfSxcbiAgICAgICAgeyBuYW1lOiAnY29sb3JzJywgaXRlbXM6IFsnVGV4dENvbG9yJywgJ0JHQ29sb3InXSB9LFxuICAgICAgXSxcbiAgICAgIGZpbGVicm93c2VySW1hZ2VVcGxvYWRVcmw6IHRoaXMuZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYmFzZUNvbmZpZywgdGhpcy5taW5pbWFsID8gbWluaW1hbENvbmZpZyA6IGV4dGVuZGVkQ29uZmlnKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldERhdGEodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKHZhbHVlPzogYW55KSB7fVxuXG4gIG9uVG91Y2hlZChldmVudD8pIHt9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuKSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIENLRURJVE9SLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLm5hbWVdLnNldFJlYWRPbmx5KGRpc2FibGVkKTtcbiAgICB9XG4gIH1cblxuICBpbnNlcnRUZXh0KHRleHQpIHtcbiAgICBsZXQgdHJpbW1lZFRleHQgPSB0ZXh0LnRyaW0oKTtcbiAgICB0aGlzLmluc3RhbmNlLmluc2VydFRleHQodHJpbW1lZFRleHQpO1xuICB9XG59XG4iXX0=