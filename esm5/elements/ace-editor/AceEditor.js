/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Component, EventEmitter, Output, ElementRef, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// Vendor
import 'brace/index';
import 'brace/theme/chrome';
import 'brace/mode/javascript';
import 'brace/ext/language_tools.js';
// APP
import { Helpers } from '../../utils/Helpers';
/** @type {?} */
var ACE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NovoAceEditor; }),
    multi: true,
};
var NovoAceEditor = /** @class */ (function () {
    function NovoAceEditor(elementRef) {
        this.elementRef = elementRef;
        this.blur = new EventEmitter();
        this.focus = new EventEmitter();
        this._options = {
            showPrintMargin: false,
            displayIndentGuides: true,
        };
        this._theme = 'chrome';
        this._mode = 'javascript';
        this.text = '';
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(NovoAceEditor.prototype, "theme", {
        set: /**
         * @param {?} theme
         * @return {?}
         */
        function (theme) {
            this.setTheme(theme);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoAceEditor.prototype, "options", {
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this.setOptions(options);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoAceEditor.prototype, "mode", {
        set: /**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            this.setMode(mode);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoAceEditor.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.editor) {
            this.editor.destroy();
        }
    };
    /**
     * @return {?}
     */
    NovoAceEditor.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initializeEditor();
        this.initializeOptions();
        this.initializeEvents();
    };
    /**
     * @return {?}
     */
    NovoAceEditor.prototype.initializeEditor = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        this.editor = ace.edit(el);
        this.editor.$blockScrolling = Infinity;
    };
    /**
     * @return {?}
     */
    NovoAceEditor.prototype.initializeOptions = /**
     * @return {?}
     */
    function () {
        this.setOptions(this._options || {});
        this.setTheme(this._theme);
        this.setMode(this._mode);
    };
    /**
     * @return {?}
     */
    NovoAceEditor.prototype.initializeEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.editor.on('focus', function (event) { return _this.focus.emit(event); });
        this.editor.on('blur', function (event) { return _this.focus.emit(event); });
        this.editor.on('change', function () { return _this.updateText(); });
        this.editor.on('paste', function () { return _this.updateText(); });
    };
    /**
     * @return {?}
     */
    NovoAceEditor.prototype.updateText = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var newVal = this.editor.getValue();
        /** @type {?} */
        var that = this;
        if (newVal === this.oldText) {
            return;
        }
        this.text = newVal;
        this.onChange(newVal);
        this.oldText = newVal;
    };
    /**
     * @param {?} text
     * @return {?}
     */
    NovoAceEditor.prototype.setText = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        if (Helpers.isBlank(text)) {
            text = '';
        }
        if (this.text !== text) {
            this.text = text;
            this.editor.setValue(text);
            this.onChange(text);
            this.editor.clearSelection();
        }
    };
    /**
     * @param {?} options
     * @return {?}
     */
    NovoAceEditor.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this._options = options;
        this.editor.setOptions(options || {});
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    NovoAceEditor.prototype.setTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this._theme = theme;
        this.editor.setTheme("ace/theme/" + theme);
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    NovoAceEditor.prototype.setMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this._mode = mode;
        this.editor.getSession().setMode("ace/mode/" + this._mode);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoAceEditor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setText(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoAceEditor.prototype.registerOnChange = /**
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
    NovoAceEditor.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    NovoAceEditor.decorators = [
        { type: Component, args: [{
                    selector: 'novo-ace-editor',
                    template: '',
                    providers: [ACE_VALUE_ACCESSOR]
                }] }
    ];
    NovoAceEditor.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    NovoAceEditor.propDecorators = {
        theme: [{ type: Input }],
        options: [{ type: Input }],
        mode: [{ type: Input }],
        name: [{ type: Input }],
        blur: [{ type: Output }],
        focus: [{ type: Output }]
    };
    return NovoAceEditor;
}());
export { NovoAceEditor };
if (false) {
    /** @type {?} */
    NovoAceEditor.prototype.name;
    /** @type {?} */
    NovoAceEditor.prototype.blur;
    /** @type {?} */
    NovoAceEditor.prototype.focus;
    /** @type {?} */
    NovoAceEditor.prototype._options;
    /** @type {?} */
    NovoAceEditor.prototype._theme;
    /** @type {?} */
    NovoAceEditor.prototype._mode;
    /** @type {?} */
    NovoAceEditor.prototype.text;
    /** @type {?} */
    NovoAceEditor.prototype.oldText;
    /** @type {?} */
    NovoAceEditor.prototype.editor;
    /** @type {?} */
    NovoAceEditor.prototype.onChange;
    /** @type {?} */
    NovoAceEditor.prototype.onTouched;
    /** @type {?} */
    NovoAceEditor.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNlRWRpdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2FjZS1lZGl0b3IvQWNlRWRpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXpFLE9BQU8sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLDZCQUE2QixDQUFDOztBQUVyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBSXhDLGtCQUFrQixHQUFHO0lBQ3pCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsYUFBYSxFQUFiLENBQWEsQ0FBQztJQUM1QyxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBRUQ7SUEwQ0UsdUJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFsQjFDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5CLGFBQVEsR0FBUTtZQUN0QixlQUFlLEVBQUUsS0FBSztZQUN0QixtQkFBbUIsRUFBRSxJQUFJO1NBQzFCLENBQUM7UUFDTSxXQUFNLEdBQVcsUUFBUSxDQUFDO1FBQzFCLFVBQUssR0FBVyxZQUFZLENBQUM7UUFFN0IsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUlsQixhQUFRLEdBQUcsVUFBQyxDQUFNLElBQU0sQ0FBQyxDQUFDO1FBQzFCLGNBQVMsR0FBRyxjQUFPLENBQUMsQ0FBQztJQUVnQixDQUFDO0lBcEM5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LFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsRUFBRTtvQkFDWixTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDaEM7OztnQkF0QnlDLFVBQVU7Ozt3QkF3QmpELEtBQUs7MEJBS0wsS0FBSzt1QkFLTCxLQUFLO3VCQUtMLEtBQUs7dUJBRUwsTUFBTTt3QkFFTixNQUFNOztJQXFHVCxvQkFBQztDQUFBLEFBOUhELElBOEhDO1NBekhZLGFBQWE7OztJQWdCeEIsNkJBQ2E7O0lBQ2IsNkJBQzBCOztJQUMxQiw4QkFDMkI7O0lBRTNCLGlDQUdFOztJQUNGLCtCQUFrQzs7SUFDbEMsOEJBQXFDOztJQUVyQyw2QkFBMEI7O0lBQzFCLGdDQUF3Qjs7SUFDeEIsK0JBQW9COztJQUVwQixpQ0FBa0M7O0lBQ2xDLGtDQUE2Qjs7SUFFakIsbUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBFbGVtZW50UmVmLCBJbnB1dCwgZm9yd2FyZFJlZiwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0ICdicmFjZS9pbmRleCc7XG5pbXBvcnQgJ2JyYWNlL3RoZW1lL2Nocm9tZSc7XG5pbXBvcnQgJ2JyYWNlL21vZGUvamF2YXNjcmlwdCc7XG5pbXBvcnQgJ2JyYWNlL2V4dC9sYW5ndWFnZV90b29scy5qcyc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuZGVjbGFyZSB2YXIgYWNlOiBhbnk7XG5cbmNvbnN0IEFDRV9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9BY2VFZGl0b3IpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tYWNlLWVkaXRvcicsXG4gIHRlbXBsYXRlOiAnJyxcbiAgcHJvdmlkZXJzOiBbQUNFX1ZBTFVFX0FDQ0VTU09SXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0FjZUVkaXRvciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIHNldCB0aGVtZSh0aGVtZTogYW55KSB7XG4gICAgdGhpcy5zZXRUaGVtZSh0aGVtZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgb3B0aW9ucyhvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbW9kZShtb2RlOiBhbnkpIHtcbiAgICB0aGlzLnNldE1vZGUobW9kZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBPdXRwdXQoKVxuICBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBfb3B0aW9uczogYW55ID0ge1xuICAgIHNob3dQcmludE1hcmdpbjogZmFsc2UsXG4gICAgZGlzcGxheUluZGVudEd1aWRlczogdHJ1ZSxcbiAgfTtcbiAgcHJpdmF0ZSBfdGhlbWU6IHN0cmluZyA9ICdjaHJvbWUnO1xuICBwcml2YXRlIF9tb2RlOiBzdHJpbmcgPSAnamF2YXNjcmlwdCc7XG5cbiAgcHJpdmF0ZSB0ZXh0OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBvbGRUZXh0OiBzdHJpbmc7XG4gIHByaXZhdGUgZWRpdG9yOiBhbnk7XG5cbiAgcHJpdmF0ZSBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBwcml2YXRlIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIHRoaXMuZWRpdG9yLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVFZGl0b3IoKTtcbiAgICB0aGlzLmluaXRpYWxpemVPcHRpb25zKCk7XG4gICAgdGhpcy5pbml0aWFsaXplRXZlbnRzKCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVFZGl0b3IoKSB7XG4gICAgbGV0IGVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5lZGl0b3IgPSBhY2UuZWRpdChlbCk7XG4gICAgdGhpcy5lZGl0b3IuJGJsb2NrU2Nyb2xsaW5nID0gSW5maW5pdHk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVPcHRpb25zKCkge1xuICAgIHRoaXMuc2V0T3B0aW9ucyh0aGlzLl9vcHRpb25zIHx8IHt9KTtcbiAgICB0aGlzLnNldFRoZW1lKHRoaXMuX3RoZW1lKTtcbiAgICB0aGlzLnNldE1vZGUodGhpcy5fbW9kZSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVFdmVudHMoKSB7XG4gICAgdGhpcy5lZGl0b3Iub24oJ2ZvY3VzJywgKGV2ZW50KSA9PiB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmVkaXRvci5vbignYmx1cicsIChldmVudCkgPT4gdGhpcy5mb2N1cy5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5lZGl0b3Iub24oJ2NoYW5nZScsICgpID0+IHRoaXMudXBkYXRlVGV4dCgpKTtcbiAgICB0aGlzLmVkaXRvci5vbigncGFzdGUnLCAoKSA9PiB0aGlzLnVwZGF0ZVRleHQoKSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRleHQoKSB7XG4gICAgbGV0IG5ld1ZhbCA9IHRoaXMuZWRpdG9yLmdldFZhbHVlKCksXG4gICAgICB0aGF0ID0gdGhpcztcblxuICAgIGlmIChuZXdWYWwgPT09IHRoaXMub2xkVGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IG5ld1ZhbDtcbiAgICB0aGlzLm9uQ2hhbmdlKG5ld1ZhbCk7XG4gICAgdGhpcy5vbGRUZXh0ID0gbmV3VmFsO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUZXh0KHRleHQ6IHN0cmluZykge1xuICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodGV4dCkpIHtcbiAgICAgIHRleHQgPSAnJztcbiAgICB9XG4gICAgaWYgKHRoaXMudGV4dCAhPT0gdGV4dCkge1xuICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgIHRoaXMuZWRpdG9yLnNldFZhbHVlKHRleHQpO1xuICAgICAgdGhpcy5vbkNoYW5nZSh0ZXh0KTtcbiAgICAgIHRoaXMuZWRpdG9yLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuZWRpdG9yLnNldE9wdGlvbnMob3B0aW9ucyB8fCB7fSk7XG4gIH1cblxuICBwcml2YXRlIHNldFRoZW1lKHRoZW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aGVtZSA9IHRoZW1lO1xuICAgIHRoaXMuZWRpdG9yLnNldFRoZW1lKGBhY2UvdGhlbWUvJHt0aGVtZX1gKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TW9kZShtb2RlOiBhbnkpIHtcbiAgICB0aGlzLl9tb2RlID0gbW9kZTtcbiAgICB0aGlzLmVkaXRvci5nZXRTZXNzaW9uKCkuc2V0TW9kZShgYWNlL21vZGUvJHt0aGlzLl9tb2RlfWApO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5zZXRUZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=