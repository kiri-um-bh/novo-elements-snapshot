/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        let el = this.elementRef.nativeElement;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNlRWRpdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2FjZS1lZGl0b3IvQWNlRWRpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXpFLE9BQU8sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLDZCQUE2QixDQUFDOztBQUVyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O01BSXhDLGtCQUFrQixHQUFHO0lBQ3pCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsRUFBQztJQUM1QyxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBT0QsTUFBTSxPQUFPLGFBQWE7Ozs7SUFxQ3hCLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFsQjFDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5CLGFBQVEsR0FBUTtZQUN0QixlQUFlLEVBQUUsS0FBSztZQUN0QixtQkFBbUIsRUFBRSxJQUFJO1NBQzFCLENBQUM7UUFDTSxXQUFNLEdBQVcsUUFBUSxDQUFDO1FBQzFCLFVBQUssR0FBVyxZQUFZLENBQUM7UUFFN0IsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUlsQixhQUFROzs7O1FBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFFLENBQUMsRUFBQztRQUMxQixjQUFTOzs7UUFBRyxH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LEtBQUs7bUJBS0wsS0FBSzttQkFLTCxLQUFLO21CQUVMLE1BQU07b0JBRU4sTUFBTTs7OztJQUpQLDZCQUNhOztJQUNiLDZCQUMwQjs7SUFDMUIsOEJBQzJCOzs7OztJQUUzQixpQ0FHRTs7Ozs7SUFDRiwrQkFBa0M7Ozs7O0lBQ2xDLDhCQUFxQzs7Ozs7SUFFckMsNkJBQTBCOzs7OztJQUMxQixnQ0FBd0I7Ozs7O0lBQ3hCLCtCQUFvQjs7Ozs7SUFFcEIsaUNBQWtDOzs7OztJQUNsQyxrQ0FBNkI7Ozs7O0lBRWpCLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgRWxlbWVudFJlZiwgSW5wdXQsIGZvcndhcmRSZWYsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBWZW5kb3JcbmltcG9ydCAnYnJhY2UvaW5kZXgnO1xuaW1wb3J0ICdicmFjZS90aGVtZS9jaHJvbWUnO1xuaW1wb3J0ICdicmFjZS9tb2RlL2phdmFzY3JpcHQnO1xuaW1wb3J0ICdicmFjZS9leHQvbGFuZ3VhZ2VfdG9vbHMuanMnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbmRlY2xhcmUgdmFyIGFjZTogYW55O1xuXG5jb25zdCBBQ0VfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvQWNlRWRpdG9yKSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjZS1lZGl0b3InLFxuICB0ZW1wbGF0ZTogJycsXG4gIHByb3ZpZGVyczogW0FDRV9WQUxVRV9BQ0NFU1NPUl0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9BY2VFZGl0b3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBzZXQgdGhlbWUodGhlbWU6IGFueSkge1xuICAgIHRoaXMuc2V0VGhlbWUodGhlbWUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG9wdGlvbnMob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG1vZGUobW9kZTogYW55KSB7XG4gICAgdGhpcy5zZXRNb2RlKG1vZGUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nO1xuICBAT3V0cHV0KClcbiAgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgX29wdGlvbnM6IGFueSA9IHtcbiAgICBzaG93UHJpbnRNYXJnaW46IGZhbHNlLFxuICAgIGRpc3BsYXlJbmRlbnRHdWlkZXM6IHRydWUsXG4gIH07XG4gIHByaXZhdGUgX3RoZW1lOiBzdHJpbmcgPSAnY2hyb21lJztcbiAgcHJpdmF0ZSBfbW9kZTogc3RyaW5nID0gJ2phdmFzY3JpcHQnO1xuXG4gIHByaXZhdGUgdGV4dDogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgb2xkVGV4dDogc3RyaW5nO1xuICBwcml2YXRlIGVkaXRvcjogYW55O1xuXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgcHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICB0aGlzLmVkaXRvci5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplRWRpdG9yKCk7XG4gICAgdGhpcy5pbml0aWFsaXplT3B0aW9ucygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUV2ZW50cygpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplRWRpdG9yKCkge1xuICAgIGxldCBlbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuZWRpdG9yID0gYWNlLmVkaXQoZWwpO1xuICAgIHRoaXMuZWRpdG9yLiRibG9ja1Njcm9sbGluZyA9IEluZmluaXR5O1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplT3B0aW9ucygpIHtcbiAgICB0aGlzLnNldE9wdGlvbnModGhpcy5fb3B0aW9ucyB8fCB7fSk7XG4gICAgdGhpcy5zZXRUaGVtZSh0aGlzLl90aGVtZSk7XG4gICAgdGhpcy5zZXRNb2RlKHRoaXMuX21vZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplRXZlbnRzKCkge1xuICAgIHRoaXMuZWRpdG9yLm9uKCdmb2N1cycsIChldmVudCkgPT4gdGhpcy5mb2N1cy5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5lZGl0b3Iub24oJ2JsdXInLCAoZXZlbnQpID0+IHRoaXMuZm9jdXMuZW1pdChldmVudCkpO1xuICAgIHRoaXMuZWRpdG9yLm9uKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLnVwZGF0ZVRleHQoKSk7XG4gICAgdGhpcy5lZGl0b3Iub24oJ3Bhc3RlJywgKCkgPT4gdGhpcy51cGRhdGVUZXh0KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUZXh0KCkge1xuICAgIGxldCBuZXdWYWwgPSB0aGlzLmVkaXRvci5nZXRWYWx1ZSgpLFxuICAgICAgdGhhdCA9IHRoaXM7XG5cbiAgICBpZiAobmV3VmFsID09PSB0aGlzLm9sZFRleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBuZXdWYWw7XG4gICAgdGhpcy5vbkNoYW5nZShuZXdWYWwpO1xuICAgIHRoaXMub2xkVGV4dCA9IG5ld1ZhbDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKHRleHQpKSB7XG4gICAgICB0ZXh0ID0gJyc7XG4gICAgfVxuICAgIGlmICh0aGlzLnRleHQgIT09IHRleHQpIHtcbiAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICB0aGlzLmVkaXRvci5zZXRWYWx1ZSh0ZXh0KTtcbiAgICAgIHRoaXMub25DaGFuZ2UodGV4dCk7XG4gICAgICB0aGlzLmVkaXRvci5jbGVhclNlbGVjdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmVkaXRvci5zZXRPcHRpb25zKG9wdGlvbnMgfHwge30pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUaGVtZSh0aGVtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGhlbWUgPSB0aGVtZTtcbiAgICB0aGlzLmVkaXRvci5zZXRUaGVtZShgYWNlL3RoZW1lLyR7dGhlbWV9YCk7XG4gIH1cblxuICBwcml2YXRlIHNldE1vZGUobW9kZTogYW55KSB7XG4gICAgdGhpcy5fbW9kZSA9IG1vZGU7XG4gICAgdGhpcy5lZGl0b3IuZ2V0U2Vzc2lvbigpLnNldE1vZGUoYGFjZS9tb2RlLyR7dGhpcy5fbW9kZX1gKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuc2V0VGV4dCh2YWx1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19