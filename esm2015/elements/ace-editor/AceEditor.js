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
const ACE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoAceEditor),
    multi: true,
};
export class NovoAceEditor {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
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
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    set theme(theme) {
        this.setTheme(theme);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) {
        this.setOptions(options);
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    set mode(mode) {
        this.setMode(mode);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.editor) {
            this.editor.destroy();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initializeEditor();
        this.initializeOptions();
        this.initializeEvents();
    }
    /**
     * @return {?}
     */
    initializeEditor() {
        /** @type {?} */
        let el = this.elementRef.nativeElement;
        this.editor = ace.edit(el);
        this.editor.$blockScrolling = Infinity;
    }
    /**
     * @return {?}
     */
    initializeOptions() {
        this.setOptions(this._options || {});
        this.setTheme(this._theme);
        this.setMode(this._mode);
    }
    /**
     * @return {?}
     */
    initializeEvents() {
        this.editor.on('focus', (event) => this.focus.emit(event));
        this.editor.on('blur', (event) => this.focus.emit(event));
        this.editor.on('change', () => this.updateText());
        this.editor.on('paste', () => this.updateText());
    }
    /**
     * @return {?}
     */
    updateText() {
        /** @type {?} */
        let newVal = this.editor.getValue();
        /** @type {?} */
        let that = this;
        if (newVal === this.oldText) {
            return;
        }
        this.text = newVal;
        this.onChange(newVal);
        this.oldText = newVal;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    setText(text) {
        if (Helpers.isBlank(text)) {
            text = '';
        }
        if (this.text !== text) {
            this.text = text;
            this.editor.setValue(text);
            this.onChange(text);
            this.editor.clearSelection();
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this._options = options;
        this.editor.setOptions(options || {});
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    setTheme(theme) {
        this._theme = theme;
        this.editor.setTheme(`ace/theme/${theme}`);
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    setMode(mode) {
        this._mode = mode;
        this.editor.getSession().setMode(`ace/mode/${this._mode}`);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.setText(value);
    }
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
}
NovoAceEditor.decorators = [
    { type: Component, args: [{
                selector: 'novo-ace-editor',
                template: '',
                providers: [ACE_VALUE_ACCESSOR]
            }] }
];
/** @nocollapse */
NovoAceEditor.ctorParameters = () => [
    { type: ElementRef }
];
NovoAceEditor.propDecorators = {
    theme: [{ type: Input }],
    options: [{ type: Input }],
    mode: [{ type: Input }],
    name: [{ type: Input }],
    blur: [{ type: Output }],
    focus: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNlRWRpdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2FjZS1lZGl0b3IvQWNlRWRpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXpFLE9BQU8sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLDZCQUE2QixDQUFDOztBQUVyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O01BSXhDLGtCQUFrQixHQUFHO0lBQ3pCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDNUMsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQU9ELE1BQU0sT0FBTyxhQUFhOzs7O0lBcUN4QixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBbEIxQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuQixhQUFRLEdBQVE7WUFDdEIsZUFBZSxFQUFFLEtBQUs7WUFDdEIsbUJBQW1CLEVBQUUsSUFBSTtTQUMxQixDQUFDO1FBQ00sV0FBTSxHQUFXLFFBQVEsQ0FBQztRQUMxQixVQUFLLEdBQVcsWUFBWSxDQUFDO1FBRTdCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFJbEIsYUFBUSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDMUIsY0FBUyxHQUFHLEdBQUcsRUFB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QUs7bUJBRUwsTUFBTTtvQkFFTixNQUFNOzs7O0lBSlAsNkJBQ2E7O0lBQ2IsNkJBQzBCOztJQUMxQiw4QkFDMkI7O0lBRTNCLGlDQUdFOztJQUNGLCtCQUFrQzs7SUFDbEMsOEJBQXFDOztJQUVyQyw2QkFBMEI7O0lBQzFCLGdDQUF3Qjs7SUFDeEIsK0JBQW9COztJQUVwQixpQ0FBa0M7O0lBQ2xDLGtDQUE2Qjs7SUFFakIsbUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBFbGVtZW50UmVmLCBJbnB1dCwgZm9yd2FyZFJlZiwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0ICdicmFjZS9pbmRleCc7XG5pbXBvcnQgJ2JyYWNlL3RoZW1lL2Nocm9tZSc7XG5pbXBvcnQgJ2JyYWNlL21vZGUvamF2YXNjcmlwdCc7XG5pbXBvcnQgJ2JyYWNlL2V4dC9sYW5ndWFnZV90b29scy5qcyc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuZGVjbGFyZSB2YXIgYWNlOiBhbnk7XG5cbmNvbnN0IEFDRV9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9BY2VFZGl0b3IpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tYWNlLWVkaXRvcicsXG4gIHRlbXBsYXRlOiAnJyxcbiAgcHJvdmlkZXJzOiBbQUNFX1ZBTFVFX0FDQ0VTU09SXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0FjZUVkaXRvciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIHNldCB0aGVtZSh0aGVtZTogYW55KSB7XG4gICAgdGhpcy5zZXRUaGVtZSh0aGVtZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgb3B0aW9ucyhvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbW9kZShtb2RlOiBhbnkpIHtcbiAgICB0aGlzLnNldE1vZGUobW9kZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBPdXRwdXQoKVxuICBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBfb3B0aW9uczogYW55ID0ge1xuICAgIHNob3dQcmludE1hcmdpbjogZmFsc2UsXG4gICAgZGlzcGxheUluZGVudEd1aWRlczogdHJ1ZSxcbiAgfTtcbiAgcHJpdmF0ZSBfdGhlbWU6IHN0cmluZyA9ICdjaHJvbWUnO1xuICBwcml2YXRlIF9tb2RlOiBzdHJpbmcgPSAnamF2YXNjcmlwdCc7XG5cbiAgcHJpdmF0ZSB0ZXh0OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBvbGRUZXh0OiBzdHJpbmc7XG4gIHByaXZhdGUgZWRpdG9yOiBhbnk7XG5cbiAgcHJpdmF0ZSBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBwcml2YXRlIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIHRoaXMuZWRpdG9yLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVFZGl0b3IoKTtcbiAgICB0aGlzLmluaXRpYWxpemVPcHRpb25zKCk7XG4gICAgdGhpcy5pbml0aWFsaXplRXZlbnRzKCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVFZGl0b3IoKSB7XG4gICAgbGV0IGVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5lZGl0b3IgPSBhY2UuZWRpdChlbCk7XG4gICAgdGhpcy5lZGl0b3IuJGJsb2NrU2Nyb2xsaW5nID0gSW5maW5pdHk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVPcHRpb25zKCkge1xuICAgIHRoaXMuc2V0T3B0aW9ucyh0aGlzLl9vcHRpb25zIHx8IHt9KTtcbiAgICB0aGlzLnNldFRoZW1lKHRoaXMuX3RoZW1lKTtcbiAgICB0aGlzLnNldE1vZGUodGhpcy5fbW9kZSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVFdmVudHMoKSB7XG4gICAgdGhpcy5lZGl0b3Iub24oJ2ZvY3VzJywgKGV2ZW50KSA9PiB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmVkaXRvci5vbignYmx1cicsIChldmVudCkgPT4gdGhpcy5mb2N1cy5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5lZGl0b3Iub24oJ2NoYW5nZScsICgpID0+IHRoaXMudXBkYXRlVGV4dCgpKTtcbiAgICB0aGlzLmVkaXRvci5vbigncGFzdGUnLCAoKSA9PiB0aGlzLnVwZGF0ZVRleHQoKSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRleHQoKSB7XG4gICAgbGV0IG5ld1ZhbCA9IHRoaXMuZWRpdG9yLmdldFZhbHVlKCksXG4gICAgICB0aGF0ID0gdGhpcztcblxuICAgIGlmIChuZXdWYWwgPT09IHRoaXMub2xkVGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IG5ld1ZhbDtcbiAgICB0aGlzLm9uQ2hhbmdlKG5ld1ZhbCk7XG4gICAgdGhpcy5vbGRUZXh0ID0gbmV3VmFsO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUZXh0KHRleHQ6IHN0cmluZykge1xuICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodGV4dCkpIHtcbiAgICAgIHRleHQgPSAnJztcbiAgICB9XG4gICAgaWYgKHRoaXMudGV4dCAhPT0gdGV4dCkge1xuICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgIHRoaXMuZWRpdG9yLnNldFZhbHVlKHRleHQpO1xuICAgICAgdGhpcy5vbkNoYW5nZSh0ZXh0KTtcbiAgICAgIHRoaXMuZWRpdG9yLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuZWRpdG9yLnNldE9wdGlvbnMob3B0aW9ucyB8fCB7fSk7XG4gIH1cblxuICBwcml2YXRlIHNldFRoZW1lKHRoZW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aGVtZSA9IHRoZW1lO1xuICAgIHRoaXMuZWRpdG9yLnNldFRoZW1lKGBhY2UvdGhlbWUvJHt0aGVtZX1gKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TW9kZShtb2RlOiBhbnkpIHtcbiAgICB0aGlzLl9tb2RlID0gbW9kZTtcbiAgICB0aGlzLmVkaXRvci5nZXRTZXNzaW9uKCkuc2V0TW9kZShgYWNlL21vZGUvJHt0aGlzLl9tb2RlfWApO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5zZXRUZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=