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
var ACE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NovoAceEditor; })),
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
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
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
     * @private
     * @return {?}
     */
    NovoAceEditor.prototype.initializeEditor = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        this.editor = ace.edit(el);
        this.editor.$blockScrolling = Infinity;
    };
    /**
     * @private
     * @return {?}
     */
    NovoAceEditor.prototype.initializeOptions = /**
     * @private
     * @return {?}
     */
    function () {
        this.setOptions(this._options || {});
        this.setTheme(this._theme);
        this.setMode(this._mode);
    };
    /**
     * @private
     * @return {?}
     */
    NovoAceEditor.prototype.initializeEvents = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.editor.on('focus', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.focus.emit(event); }));
        this.editor.on('blur', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.focus.emit(event); }));
        this.editor.on('change', (/**
         * @return {?}
         */
        function () { return _this.updateText(); }));
        this.editor.on('paste', (/**
         * @return {?}
         */
        function () { return _this.updateText(); }));
    };
    /**
     * @private
     * @return {?}
     */
    NovoAceEditor.prototype.updateText = /**
     * @private
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
     * @private
     * @param {?} text
     * @return {?}
     */
    NovoAceEditor.prototype.setText = /**
     * @private
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
     * @private
     * @param {?} options
     * @return {?}
     */
    NovoAceEditor.prototype.setOptions = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this._options = options;
        this.editor.setOptions(options || {});
    };
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    NovoAceEditor.prototype.setTheme = /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this._theme = theme;
        this.editor.setTheme("ace/theme/" + theme);
    };
    /**
     * @private
     * @param {?} mode
     * @return {?}
     */
    NovoAceEditor.prototype.setMode = /**
     * @private
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
    /** @nocollapse */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNlRWRpdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2FjZS1lZGl0b3IvQWNlRWRpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDbEgsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxPQUFPLGFBQWEsQ0FBQztBQUNyQixPQUFPLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyw2QkFBNkIsQ0FBQzs7QUFFckMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQUl4QyxrQkFBa0IsR0FBRztJQUN6QixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsYUFBYSxFQUFiLENBQWEsRUFBQztJQUM1QyxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBRUQ7SUEwQ0UsdUJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFsQjFDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5CLGFBQVEsR0FBUTtZQUN0QixlQUFlLEVBQUUsS0FBSztZQUN0QixtQkFBbUIsRUFBRSxJQUFJO1NBQzFCLENBQUM7UUFDTSxXQUFNLEdBQVcsUUFBUSxDQUFDO1FBQzFCLFVBQUssR0FBVyxZQUFZLENBQUM7UUFFN0IsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUlsQixhQUFROzs7O1FBQUcsVUFBQyxDQUFNLElBQU0sQ0FBQyxFQUFDO1FBQzFCLGNBQVM7OztRQUFHLGNBQU8sQ0FBQyxFQUFDO0lBRWdCLENB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LEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7O2dCQTdIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLEVBQUU7b0JBQ1osU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7aUJBQ2hDOzs7O2dCQXRCeUMsVUFBVTs7O3dCQXdCakQsS0FBSzswQkFLTCxLQUFLO3VCQUtMLEtBQUs7dUJBS0wsS0FBSzt1QkFFTCxNQUFNO3dCQUVOLE1BQU07O0lBcUdULG9CQUFDO0NBQUEsQUE5SEQsSUE4SEM7U0F6SFksYUFBYTs7O0lBZ0J4Qiw2QkFDYTs7SUFDYiw2QkFDMEI7O0lBQzFCLDhCQUMyQjs7Ozs7SUFFM0IsaUNBR0U7Ozs7O0lBQ0YsK0JBQWtDOzs7OztJQUNsQyw4QkFBcUM7Ozs7O0lBRXJDLDZCQUEwQjs7Ozs7SUFDMUIsZ0NBQXdCOzs7OztJQUN4QiwrQkFBb0I7Ozs7O0lBRXBCLGlDQUFrQzs7Ozs7SUFDbEMsa0NBQTZCOzs7OztJQUVqQixtQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEVsZW1lbnRSZWYsIElucHV0LCBmb3J3YXJkUmVmLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgJ2JyYWNlL2luZGV4JztcbmltcG9ydCAnYnJhY2UvdGhlbWUvY2hyb21lJztcbmltcG9ydCAnYnJhY2UvbW9kZS9qYXZhc2NyaXB0JztcbmltcG9ydCAnYnJhY2UvZXh0L2xhbmd1YWdlX3Rvb2xzLmpzJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5kZWNsYXJlIHZhciBhY2U6IGFueTtcblxuY29uc3QgQUNFX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0FjZUVkaXRvciksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1hY2UtZWRpdG9yJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBwcm92aWRlcnM6IFtBQ0VfVkFMVUVfQUNDRVNTT1JdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWNlRWRpdG9yIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgc2V0IHRoZW1lKHRoZW1lOiBhbnkpIHtcbiAgICB0aGlzLnNldFRoZW1lKHRoZW1lKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBvcHRpb25zKG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtb2RlKG1vZGU6IGFueSkge1xuICAgIHRoaXMuc2V0TW9kZShtb2RlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcbiAgQE91dHB1dCgpXG4gIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcml2YXRlIF9vcHRpb25zOiBhbnkgPSB7XG4gICAgc2hvd1ByaW50TWFyZ2luOiBmYWxzZSxcbiAgICBkaXNwbGF5SW5kZW50R3VpZGVzOiB0cnVlLFxuICB9O1xuICBwcml2YXRlIF90aGVtZTogc3RyaW5nID0gJ2Nocm9tZSc7XG4gIHByaXZhdGUgX21vZGU6IHN0cmluZyA9ICdqYXZhc2NyaXB0JztcblxuICBwcml2YXRlIHRleHQ6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIG9sZFRleHQ6IHN0cmluZztcbiAgcHJpdmF0ZSBlZGl0b3I6IGFueTtcblxuICBwcml2YXRlIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIHByaXZhdGUgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgdGhpcy5lZGl0b3IuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUVkaXRvcigpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZU9wdGlvbnMoKTtcbiAgICB0aGlzLmluaXRpYWxpemVFdmVudHMoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUVkaXRvcigpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuZWRpdG9yID0gYWNlLmVkaXQoZWwpO1xuICAgIHRoaXMuZWRpdG9yLiRibG9ja1Njcm9sbGluZyA9IEluZmluaXR5O1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplT3B0aW9ucygpIHtcbiAgICB0aGlzLnNldE9wdGlvbnModGhpcy5fb3B0aW9ucyB8fCB7fSk7XG4gICAgdGhpcy5zZXRUaGVtZSh0aGlzLl90aGVtZSk7XG4gICAgdGhpcy5zZXRNb2RlKHRoaXMuX21vZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplRXZlbnRzKCkge1xuICAgIHRoaXMuZWRpdG9yLm9uKCdmb2N1cycsIChldmVudCkgPT4gdGhpcy5mb2N1cy5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5lZGl0b3Iub24oJ2JsdXInLCAoZXZlbnQpID0+IHRoaXMuZm9jdXMuZW1pdChldmVudCkpO1xuICAgIHRoaXMuZWRpdG9yLm9uKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLnVwZGF0ZVRleHQoKSk7XG4gICAgdGhpcy5lZGl0b3Iub24oJ3Bhc3RlJywgKCkgPT4gdGhpcy51cGRhdGVUZXh0KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUZXh0KCkge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMuZWRpdG9yLmdldFZhbHVlKCksXG4gICAgICB0aGF0ID0gdGhpcztcblxuICAgIGlmIChuZXdWYWwgPT09IHRoaXMub2xkVGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IG5ld1ZhbDtcbiAgICB0aGlzLm9uQ2hhbmdlKG5ld1ZhbCk7XG4gICAgdGhpcy5vbGRUZXh0ID0gbmV3VmFsO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUZXh0KHRleHQ6IHN0cmluZykge1xuICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodGV4dCkpIHtcbiAgICAgIHRleHQgPSAnJztcbiAgICB9XG4gICAgaWYgKHRoaXMudGV4dCAhPT0gdGV4dCkge1xuICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgIHRoaXMuZWRpdG9yLnNldFZhbHVlKHRleHQpO1xuICAgICAgdGhpcy5vbkNoYW5nZSh0ZXh0KTtcbiAgICAgIHRoaXMuZWRpdG9yLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuZWRpdG9yLnNldE9wdGlvbnMob3B0aW9ucyB8fCB7fSk7XG4gIH1cblxuICBwcml2YXRlIHNldFRoZW1lKHRoZW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aGVtZSA9IHRoZW1lO1xuICAgIHRoaXMuZWRpdG9yLnNldFRoZW1lKGBhY2UvdGhlbWUvJHt0aGVtZX1gKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TW9kZShtb2RlOiBhbnkpIHtcbiAgICB0aGlzLl9tb2RlID0gbW9kZTtcbiAgICB0aGlzLmVkaXRvci5nZXRTZXNzaW9uKCkuc2V0TW9kZShgYWNlL21vZGUvJHt0aGlzLl9tb2RlfWApO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5zZXRUZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=