/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Component, Input, Output, ViewChild, EventEmitter, NgZone, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// Value accessor for the component (supports ngModel)
/** @type {?} */
var CKEDITOR_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NovoCKEditorElement; }),
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
            setTimeout(function () {
                _this.instance.removeAllListeners();
                CKEDITOR.instances[_this.instance.name].destroy();
                _this.instance.destroy();
                _this.instance = null;
            });
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
        this.zone.run(function () {
            _this.value = value;
            _this.onChange(value);
            _this.onTouched();
            _this.change.emit(value);
        });
    };
    /**
     * @param {?} config
     * @return {?}
     */
    NovoCKEditorElement.prototype.ckeditorInit = /**
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
        this.instance.on('instanceReady', function (evt) {
            // send the evt to the EventEmitter
            _this.ready.emit(evt);
        });
        // CKEditor change event
        this.instance.on('change', function () {
            _this.onTouched();
            /** @type {?} */
            var value = _this.instance.getData();
            // Debounce update
            if (_this.debounce) {
                if (_this.debounceTimeout) {
                    clearTimeout(_this.debounceTimeout);
                }
                _this.debounceTimeout = setTimeout(function () {
                    _this.updateValue(value);
                    _this.debounceTimeout = null;
                }, parseInt(_this.debounce));
            }
            else {
                _this.updateValue(value);
            }
        });
        this.instance.on('blur', function (event) {
            _this.blur.emit(event);
        });
        this.instance.on('focus', function (event) {
            _this.focus.emit(event);
        });
        this.instance.on('paste', function (event) {
            _this.paste.emit(event);
        });
        this.instance.on('loaded', function (event) {
            _this.loaded.emit(event);
        });
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
        host: [{ type: ViewChild, args: ['host',] }],
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
    /** @type {?} */
    NovoCKEditorElement.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ0tFZGl0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2tlZGl0b3IvQ0tFZGl0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUNoSSxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7OztJQUduRSwrQkFBK0IsR0FBRztJQUN0QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFDO0lBQ2xELEtBQUssRUFBRSxJQUFJO0NBQ1o7Ozs7OztBQVNEO0lBd0NFLDZCQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQXpCaEMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsOEJBQXlCLEdBQVcsRUFBRSxDQUFDO1FBRXZDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0IsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0IsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJNUIsV0FBTSxHQUFXLEVBQUUsQ0FBQztJQUllLENBQUM7SUFFcEMsc0JBQUksc0NBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7OztRQUVELFVBQ1UsQ0FBQztZQUNULElBQUks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SUFDVCw4Q0FBZ0I7O0lBRUosbUNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCwgRXZlbnRFbWl0dGVyLCBOZ1pvbmUsIGZvcndhcmRSZWYsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IENLRURJVE9SX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvQ0tFZGl0b3JFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5kZWNsYXJlIHZhciBDS0VESVRPUjogYW55O1xuXG4vKipcbiAqIENLRWRpdG9yIGNvbXBvbmVudFxuICogVXNhZ2UgOlxuICogIDxub3ZvLWVkaXRvciBbKG5nTW9kZWwpXT1cImRhdGFcIiBbY29uZmlnXT1cInsuLi59XCIgZGVib3VuY2U9XCI1MDBcIj48L25vdm8tZWRpdG9yPlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWVkaXRvcicsXG4gIHByb3ZpZGVyczogW0NLRURJVE9SX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogJzx0ZXh0YXJlYSBbbmFtZV09XCJuYW1lXCIgW2lkXT1cIm5hbWVcIiAjaG9zdD48L3RleHRhcmVhPicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DS0VkaXRvckVsZW1lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KClcbiAgY29uZmlnO1xuICBASW5wdXQoKVxuICBkZWJvdW5jZTtcbiAgQElucHV0KClcbiAgbmFtZTtcbiAgQElucHV0KClcbiAgbWluaW1hbDtcbiAgQElucHV0KClcbiAgc3RhcnR1cEZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmw6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHBhc3RlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKCdob3N0JylcbiAgaG9zdDtcblxuICBfdmFsdWU6IHN0cmluZyA9ICcnO1xuICBpbnN0YW5jZTtcbiAgZGVib3VuY2VUaW1lb3V0O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lKSB7fVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodikge1xuICAgIGlmICh2ICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgdGhpcy5vbkNoYW5nZSh2KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5mb2N1c01hbmFnZXIuYmx1cih0cnVlKTsgLy8gUmVtb3ZlIGZvY3VzIGZyb20gZWRpdG9yXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgICAgQ0tFRElUT1IuaW5zdGFuY2VzW3RoaXMuaW5zdGFuY2UubmFtZV0uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuY29uZmlnIHx8IHRoaXMuZ2V0QmFzZUNvbmZpZygpO1xuICAgIGlmICh0aGlzLnN0YXJ0dXBGb2N1cykge1xuICAgICAgY29uZmlnLnN0YXJ0dXBGb2N1cyA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICBjb25maWcucmVhZE9ubHkgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmNrZWRpdG9ySW5pdChjb25maWcpO1xuICB9XG5cbiAgdXBkYXRlVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgY2tlZGl0b3JJbml0KGNvbmZpZykge1xuICAgIGlmICghQ0tFRElUT1IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01ha2Ugc3VyZSB0byBpbmNsdWRlIENLRWRpdG9yIHNvdXJjZXMgaW4geW91ciBkZXBlbmRlbmNpZXMhJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ0tFZGl0b3IgcmVwbGFjZSB0ZXh0YXJlYVxuICAgIHRoaXMuaW5zdGFuY2UgPSBDS0VESVRPUi5yZXBsYWNlKHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LCBjb25maWcpO1xuXG4gICAgLy8gU2V0IGluaXRpYWwgdmFsdWVcbiAgICB0aGlzLmluc3RhbmNlLnNldERhdGEodGhpcy52YWx1ZSk7XG5cbiAgICAvLyBsaXN0ZW4gZm9yIGluc3RhbmNlUmVhZHkgZXZlbnRcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbnN0YW5jZVJlYWR5JywgKGV2dCkgPT4ge1xuICAgICAgLy8gc2VuZCB0aGUgZXZ0IHRvIHRoZSBFdmVudEVtaXR0ZXJcbiAgICAgIHRoaXMucmVhZHkuZW1pdChldnQpO1xuICAgIH0pO1xuXG4gICAgLy8gQ0tFZGl0b3IgY2hhbmdlIGV2ZW50XG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIGxldCB2YWx1ZSA9IHRoaXMuaW5zdGFuY2UuZ2V0RGF0YSgpO1xuXG4gICAgICAvLyBEZWJvdW5jZSB1cGRhdGVcbiAgICAgIGlmICh0aGlzLmRlYm91bmNlKSB7XG4gICAgICAgIGlmICh0aGlzLmRlYm91bmNlVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgICAgIH0sIHBhcnNlSW50KHRoaXMuZGVib3VuY2UpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2JsdXInLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICB9KTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdmb2N1cycsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcbiAgICB9KTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwYXN0ZScsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5wYXN0ZS5lbWl0KGV2ZW50KTtcbiAgICB9KTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdsb2FkZWQnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMubG9hZGVkLmVtaXQoZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0QmFzZUNvbmZpZygpIHtcbiAgICBjb25zdCBiYXNlQ29uZmlnID0ge1xuICAgICAgZW50ZXJNb2RlOiBDS0VESVRPUi5FTlRFUl9CUixcbiAgICAgIHNoaWZ0RW50ZXJNb2RlOiBDS0VESVRPUi5FTlRFUl9QLFxuICAgICAgZGlzYWJsZU5hdGl2ZVNwZWxsQ2hlY2tlcjogZmFsc2UsXG4gICAgICByZW1vdmVQbHVnaW5zOiAnbGlzdHN0eWxlLHRhYmxldG9vbHMsY29udGV4dG1lbnUnLCAvLyBhbGxvd3MgYnJvd3NlciBiYXNlZCBzcGVsbCBjaGVja2luZ1xuICAgICAgZXh0cmFBbGxvd2VkQ29udGVudDogJyooKil7Kn07dGFibGUgdGJvZHkgdHIgdGQgdGhbKl07JywgLy8gYWxsb3dzIGNsYXNzIG5hbWVzICgqKSBhbmQgaW5saW5lIHN0eWxlcyB7Kn0gZm9yIGFsbCBhbmQgYXR0cmlidXRlcyBbKl0gb24gdGFibGVzXG4gICAgICBmb250X25hbWVzOlxuICAgICAgICAnQXJpYWwvQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsnICtcbiAgICAgICAgJ0NhbGlicmkvQ2FsaWJyaSwgVmVyZGFuYSwgR2VuZXZhLCBzYW5zLXNlcmlmOycgK1xuICAgICAgICAnQ29taWMgU2FucyBNUy9Db21pYyBTYW5zIE1TLCBjdXJzaXZlOycgK1xuICAgICAgICAnQ291cmllciBOZXcvQ291cmllciBOZXcsIENvdXJpZXIsIG1vbm9zcGFjZTsnICtcbiAgICAgICAgJ0dlb3JnaWEvR2VvcmdpYSwgc2VyaWY7JyArXG4gICAgICAgICdMdWNpZGEgU2FucyBVbmljb2RlL0x1Y2lkYSBTYW5zIFVuaWNvZGUsIEx1Y2lkYSBHcmFuZGUsIHNhbnMtc2VyaWY7JyArXG4gICAgICAgICdUYWhvbWEvVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7JyArXG4gICAgICAgICdUaW1lcyBOZXcgUm9tYW4vVGltZXMgTmV3IFJvbWFuLCBUaW1lcywgc2VyaWY7JyArXG4gICAgICAgICdUcmVidWNoZXQgTVMvVHJlYnVjaGV0IE1TLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7JyArXG4gICAgICAgICdWZXJkYW5hL1ZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZicsXG4gICAgfTtcblxuICAgIGNvbnN0IG1pbmltYWxDb25maWcgPSB7XG4gICAgICB0b29sYmFyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnYmFzaWNzdHlsZXMnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAnU3R5bGVzJyxcbiAgICAgICAgICAgICdGb250U2l6ZScsXG4gICAgICAgICAgICAnQm9sZCcsXG4gICAgICAgICAgICAnSXRhbGljJyxcbiAgICAgICAgICAgICdVbmRlcmxpbmUnLFxuICAgICAgICAgICAgJ1RleHRDb2xvcicsXG4gICAgICAgICAgICAnLScsXG4gICAgICAgICAgICAnTnVtYmVyZWRMaXN0JyxcbiAgICAgICAgICAgICdCdWxsZXRlZExpc3QnLFxuICAgICAgICAgICAgJ091dGRlbnQnLFxuICAgICAgICAgICAgJ0luZGVudCcsXG4gICAgICAgICAgICAnTGluaycsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcblxuICAgIGNvbnN0IGV4dGVuZGVkQ29uZmlnID0ge1xuICAgICAgdG9vbGJhcjogW1xuICAgICAgICB7IG5hbWU6ICdjbGlwYm9hcmQnLCBpdGVtczogWydQYXN0ZScsICdQYXN0ZVRleHQnLCAnUGFzdGVGcm9tV29yZCcsICdVbmRvJywgJ1JlZG8nXSB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3BhcmFncmFwaCcsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICdOdW1iZXJlZExpc3QnLFxuICAgICAgICAgICAgJ0J1bGxldGVkTGlzdCcsXG4gICAgICAgICAgICAnT3V0ZGVudCcsXG4gICAgICAgICAgICAnSW5kZW50JyxcbiAgICAgICAgICAgICdCbG9ja3F1b3RlJyxcbiAgICAgICAgICAgICdKdXN0aWZ5TGVmdCcsXG4gICAgICAgICAgICAnSnVzdGlmeUNlbnRlcicsXG4gICAgICAgICAgICAnSnVzdGlmeVJpZ2h0JyxcbiAgICAgICAgICAgICdKdXN0aWZ5QmxvY2snLFxuICAgICAgICAgICAgJ0JpZGlMdHInLFxuICAgICAgICAgICAgJ0JpZGlSdGwnLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHsgbmFtZTogJ2xpbmtzJywgaXRlbXM6IFsnTGluayddIH0sXG4gICAgICAgIHsgbmFtZTogJ2luc2VydCcsIGl0ZW1zOiBbJ0ltYWdlJywgJ1RhYmxlJywgJ0hvcml6b250YWxSdWxlJ10gfSxcbiAgICAgICAgeyBuYW1lOiAndG9vbHMnLCBpdGVtczogWydNYXhpbWl6ZScsICdTb3VyY2UnXSB9LFxuICAgICAgICAnLycsIC8vIGxpbmUgYnJlYWtcbiAgICAgICAgeyBuYW1lOiAnYmFzaWNzdHlsZXMnLCBpdGVtczogWydCb2xkJywgJ0l0YWxpYycsICdVbmRlcmxpbmUnLCAnU3RyaWtlJywgJ1N1YnNjcmlwdCcsICdTdXBlcnNjcmlwdCddIH0sXG4gICAgICAgIHsgbmFtZTogJ3N0eWxlcycsIGl0ZW1zOiBbJ1N0eWxlcycsICdGb3JtYXQnLCAnRm9udCcsICdGb250U2l6ZSddIH0sXG4gICAgICAgIHsgbmFtZTogJ2NvbG9ycycsIGl0ZW1zOiBbJ1RleHRDb2xvcicsICdCR0NvbG9yJ10gfSxcbiAgICAgIF0sXG4gICAgICBmaWxlYnJvd3NlckltYWdlVXBsb2FkVXJsOiB0aGlzLmZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmwsXG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGJhc2VDb25maWcsIHRoaXMubWluaW1hbCA/IG1pbmltYWxDb25maWcgOiBleHRlbmRlZENvbmZpZyk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXREYXRhKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZSh2YWx1ZT86IGFueSkge31cblxuICBvblRvdWNoZWQoZXZlbnQ/KSB7fVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm4pIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbikge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICBDS0VESVRPUi5pbnN0YW5jZXNbdGhpcy5pbnN0YW5jZS5uYW1lXS5zZXRSZWFkT25seShkaXNhYmxlZCk7XG4gICAgfVxuICB9XG5cbiAgaW5zZXJ0VGV4dCh0ZXh0KSB7XG4gICAgbGV0IHRyaW1tZWRUZXh0ID0gdGV4dC50cmltKCk7XG4gICAgdGhpcy5pbnN0YW5jZS5pbnNlcnRUZXh0KHRyaW1tZWRUZXh0KTtcbiAgfVxufVxuIl19