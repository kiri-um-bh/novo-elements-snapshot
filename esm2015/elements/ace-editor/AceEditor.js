/**
 * @fileoverview added by tsickle
 * Generated from: elements/ace-editor/AceEditor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NovoAceEditor)),
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
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
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
     * @private
     * @return {?}
     */
    initializeEditor() {
        /** @type {?} */
        const el = this.elementRef.nativeElement;
        this.editor = ace.edit(el);
        this.editor.$blockScrolling = Infinity;
    }
    /**
     * @private
     * @return {?}
     */
    initializeOptions() {
        this.setOptions(this._options || {});
        this.setTheme(this._theme);
        this.setMode(this._mode);
    }
    /**
     * @private
     * @return {?}
     */
    initializeEvents() {
        this.editor.on('focus', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.focus.emit(event)));
        this.editor.on('blur', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.focus.emit(event)));
        this.editor.on('change', (/**
         * @return {?}
         */
        () => this.updateText()));
        this.editor.on('paste', (/**
         * @return {?}
         */
        () => this.updateText()));
    }
    /**
     * @private
     * @return {?}
     */
    updateText() {
        /** @type {?} */
        const newVal = this.editor.getValue();
        /** @type {?} */
        const that = this;
        if (newVal === this.oldText) {
            return;
        }
        this.text = newVal;
        this.onChange(newVal);
        this.oldText = newVal;
    }
    /**
     * @private
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
     * @private
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this._options = options;
        this.editor.setOptions(options || {});
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    setTheme(theme) {
        this._theme = theme;
        this.editor.setTheme(`ace/theme/${theme}`);
    }
    /**
     * @private
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
    /**
     * @type {?}
     * @private
     */
    NovoAceEditor.prototype._options;
    /**
     * @type {?}
     * @private
     */
    NovoAceEditor.prototype._theme;
    /**
     * @type {?}
     * @private
     */
    NovoAceEditor.prototype._mode;
    /**
     * @type {?}
     * @private
     */
    NovoAceEditor.prototype.text;
    /**
     * @type {?}
     * @private
     */
    NovoAceEditor.prototype.oldText;
    /**
     * @type {?}
     * @private
     */
    NovoAceEditor.prototype.editor;
    /**
     * @type {?}
     * @private
     */
    NovoAceEditor.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    NovoAceEditor.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    NovoAceEditor.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNlRWRpdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2FjZS1lZGl0b3IvQWNlRWRpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDbEgsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxPQUFPLGFBQWEsQ0FBQztBQUNyQixPQUFPLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyw2QkFBNkIsQ0FBQzs7QUFFckMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOztNQUl4QyxrQkFBa0IsR0FBRztJQUN6QixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUM7SUFDNUMsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQU9ELE1BQU0sT0FBTyxhQUFhOzs7O0lBcUN4QixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBbEIxQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuQixhQUFRLEdBQVE7WUFDdEIsZUFBZSxFQUFFLEtBQUs7WUFDdEIsbUJBQW1CLEVBQUUsSUFBSTtTQUMxQixDQUFDO1FBQ00sV0FBTSxHQUFXLFFBQVEsQ0FBQztRQUMxQixVQUFLLEdBQVcsWUFBWSxDQUFDO1FBRTdCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFJbEIsYUFBUTs7OztRQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRSxDQUFDLEVBQUM7UUFDMUIsY0FBUzs7O1FBQUcs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TCxLQUFLO21CQUtMLEtBQUs7bUJBS0wsS0FBSzttQkFFTCxNQUFNO29CQUVOLE1BQU07Ozs7SUFKUCw2QkFDYTs7SUFDYiw2QkFDMEI7O0lBQzFCLDhCQUMyQjs7Ozs7SUFFM0IsaUNBR0U7Ozs7O0lBQ0YsK0JBQWtDOzs7OztJQUNsQyw4QkFBcUM7Ozs7O0lBRXJDLDZCQUEwQjs7Ozs7SUFDMUIsZ0NBQXdCOzs7OztJQUN4QiwrQkFBb0I7Ozs7O0lBRXBCLGlDQUFrQzs7Ozs7SUFDbEMsa0NBQTZCOzs7OztJQUVqQixtQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEVsZW1lbnRSZWYsIElucHV0LCBmb3J3YXJkUmVmLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgJ2JyYWNlL2luZGV4JztcbmltcG9ydCAnYnJhY2UvdGhlbWUvY2hyb21lJztcbmltcG9ydCAnYnJhY2UvbW9kZS9qYXZhc2NyaXB0JztcbmltcG9ydCAnYnJhY2UvZXh0L2xhbmd1YWdlX3Rvb2xzLmpzJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5kZWNsYXJlIHZhciBhY2U6IGFueTtcblxuY29uc3QgQUNFX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0FjZUVkaXRvciksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1hY2UtZWRpdG9yJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBwcm92aWRlcnM6IFtBQ0VfVkFMVUVfQUNDRVNTT1JdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWNlRWRpdG9yIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgc2V0IHRoZW1lKHRoZW1lOiBhbnkpIHtcbiAgICB0aGlzLnNldFRoZW1lKHRoZW1lKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBvcHRpb25zKG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtb2RlKG1vZGU6IGFueSkge1xuICAgIHRoaXMuc2V0TW9kZShtb2RlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcbiAgQE91dHB1dCgpXG4gIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcml2YXRlIF9vcHRpb25zOiBhbnkgPSB7XG4gICAgc2hvd1ByaW50TWFyZ2luOiBmYWxzZSxcbiAgICBkaXNwbGF5SW5kZW50R3VpZGVzOiB0cnVlLFxuICB9O1xuICBwcml2YXRlIF90aGVtZTogc3RyaW5nID0gJ2Nocm9tZSc7XG4gIHByaXZhdGUgX21vZGU6IHN0cmluZyA9ICdqYXZhc2NyaXB0JztcblxuICBwcml2YXRlIHRleHQ6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIG9sZFRleHQ6IHN0cmluZztcbiAgcHJpdmF0ZSBlZGl0b3I6IGFueTtcblxuICBwcml2YXRlIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIHByaXZhdGUgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgdGhpcy5lZGl0b3IuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUVkaXRvcigpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZU9wdGlvbnMoKTtcbiAgICB0aGlzLmluaXRpYWxpemVFdmVudHMoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUVkaXRvcigpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuZWRpdG9yID0gYWNlLmVkaXQoZWwpO1xuICAgIHRoaXMuZWRpdG9yLiRibG9ja1Njcm9sbGluZyA9IEluZmluaXR5O1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplT3B0aW9ucygpIHtcbiAgICB0aGlzLnNldE9wdGlvbnModGhpcy5fb3B0aW9ucyB8fCB7fSk7XG4gICAgdGhpcy5zZXRUaGVtZSh0aGlzLl90aGVtZSk7XG4gICAgdGhpcy5zZXRNb2RlKHRoaXMuX21vZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplRXZlbnRzKCkge1xuICAgIHRoaXMuZWRpdG9yLm9uKCdmb2N1cycsIChldmVudCkgPT4gdGhpcy5mb2N1cy5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5lZGl0b3Iub24oJ2JsdXInLCAoZXZlbnQpID0+IHRoaXMuZm9jdXMuZW1pdChldmVudCkpO1xuICAgIHRoaXMuZWRpdG9yLm9uKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLnVwZGF0ZVRleHQoKSk7XG4gICAgdGhpcy5lZGl0b3Iub24oJ3Bhc3RlJywgKCkgPT4gdGhpcy51cGRhdGVUZXh0KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUZXh0KCkge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMuZWRpdG9yLmdldFZhbHVlKCksXG4gICAgICB0aGF0ID0gdGhpcztcblxuICAgIGlmIChuZXdWYWwgPT09IHRoaXMub2xkVGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IG5ld1ZhbDtcbiAgICB0aGlzLm9uQ2hhbmdlKG5ld1ZhbCk7XG4gICAgdGhpcy5vbGRUZXh0ID0gbmV3VmFsO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUZXh0KHRleHQ6IHN0cmluZykge1xuICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodGV4dCkpIHtcbiAgICAgIHRleHQgPSAnJztcbiAgICB9XG4gICAgaWYgKHRoaXMudGV4dCAhPT0gdGV4dCkge1xuICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgIHRoaXMuZWRpdG9yLnNldFZhbHVlKHRleHQpO1xuICAgICAgdGhpcy5vbkNoYW5nZSh0ZXh0KTtcbiAgICAgIHRoaXMuZWRpdG9yLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuZWRpdG9yLnNldE9wdGlvbnMob3B0aW9ucyB8fCB7fSk7XG4gIH1cblxuICBwcml2YXRlIHNldFRoZW1lKHRoZW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aGVtZSA9IHRoZW1lO1xuICAgIHRoaXMuZWRpdG9yLnNldFRoZW1lKGBhY2UvdGhlbWUvJHt0aGVtZX1gKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TW9kZShtb2RlOiBhbnkpIHtcbiAgICB0aGlzLl9tb2RlID0gbW9kZTtcbiAgICB0aGlzLmVkaXRvci5nZXRTZXNzaW9uKCkuc2V0TW9kZShgYWNlL21vZGUvJHt0aGlzLl9tb2RlfWApO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5zZXRUZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=