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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNlRWRpdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2FjZS1lZGl0b3IvQWNlRWRpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXpFLE9BQU8sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLDZCQUE2QixDQUFDOztBQUVyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBSXhDLGtCQUFrQixHQUFHO0lBQ3pCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxhQUFhLEVBQWIsQ0FBYSxFQUFDO0lBQzVDLEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFRDtJQTBDRSx1QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWxCMUMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkIsYUFBUSxHQUFRO1lBQ3RCLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLG1CQUFtQixFQUFFLElBQUk7U0FDMUIsQ0FBQztRQUNNLFdBQU0sR0FBVyxRQUFRLENBQUM7UUFDMUIsVUFBSyxHQUFXLFlBQVksQ0FBQztRQUU3QixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBSWxCLGFBQVE7Ozs7UUFBRyxVQUFDLENBQU0sSUFBTSxDQUFDLEVBQUM7UUFDMUIsY0FBUzs7O1FBQUcsY0FBTyxDQUFDLEVBQUM7SUFFZ0IsQ0FB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R0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Z0JBN0hGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsRUFBRTtvQkFDWixTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDaEM7Ozs7Z0JBdEJ5QyxVQUFVOzs7d0JBd0JqRCxLQUFLOzBCQUtMLEtBQUs7dUJBS0wsS0FBSzt1QkFLTCxLQUFLO3VCQUVMLE1BQU07d0JBRU4sTUFBTTs7SUFxR1Qsb0JBQUM7Q0FBQSxBQTlIRCxJQThIQztTQXpIWSxhQUFhOzs7SUFnQnhCLDZCQUNhOztJQUNiLDZCQUMwQjs7SUFDMUIsOEJBQzJCOzs7OztJQUUzQixpQ0FHRTs7Ozs7SUFDRiwrQkFBa0M7Ozs7O0lBQ2xDLDhCQUFxQzs7Ozs7SUFFckMsNkJBQTBCOzs7OztJQUMxQixnQ0FBd0I7Ozs7O0lBQ3hCLCtCQUFvQjs7Ozs7SUFFcEIsaUNBQWtDOzs7OztJQUNsQyxrQ0FBNkI7Ozs7O0lBRWpCLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgRWxlbWVudFJlZiwgSW5wdXQsIGZvcndhcmRSZWYsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBWZW5kb3JcbmltcG9ydCAnYnJhY2UvaW5kZXgnO1xuaW1wb3J0ICdicmFjZS90aGVtZS9jaHJvbWUnO1xuaW1wb3J0ICdicmFjZS9tb2RlL2phdmFzY3JpcHQnO1xuaW1wb3J0ICdicmFjZS9leHQvbGFuZ3VhZ2VfdG9vbHMuanMnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbmRlY2xhcmUgdmFyIGFjZTogYW55O1xuXG5jb25zdCBBQ0VfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvQWNlRWRpdG9yKSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjZS1lZGl0b3InLFxuICB0ZW1wbGF0ZTogJycsXG4gIHByb3ZpZGVyczogW0FDRV9WQUxVRV9BQ0NFU1NPUl0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9BY2VFZGl0b3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBzZXQgdGhlbWUodGhlbWU6IGFueSkge1xuICAgIHRoaXMuc2V0VGhlbWUodGhlbWUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG9wdGlvbnMob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG1vZGUobW9kZTogYW55KSB7XG4gICAgdGhpcy5zZXRNb2RlKG1vZGUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nO1xuICBAT3V0cHV0KClcbiAgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgX29wdGlvbnM6IGFueSA9IHtcbiAgICBzaG93UHJpbnRNYXJnaW46IGZhbHNlLFxuICAgIGRpc3BsYXlJbmRlbnRHdWlkZXM6IHRydWUsXG4gIH07XG4gIHByaXZhdGUgX3RoZW1lOiBzdHJpbmcgPSAnY2hyb21lJztcbiAgcHJpdmF0ZSBfbW9kZTogc3RyaW5nID0gJ2phdmFzY3JpcHQnO1xuXG4gIHByaXZhdGUgdGV4dDogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgb2xkVGV4dDogc3RyaW5nO1xuICBwcml2YXRlIGVkaXRvcjogYW55O1xuXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgcHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICB0aGlzLmVkaXRvci5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplRWRpdG9yKCk7XG4gICAgdGhpcy5pbml0aWFsaXplT3B0aW9ucygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUV2ZW50cygpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplRWRpdG9yKCkge1xuICAgIGxldCBlbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuZWRpdG9yID0gYWNlLmVkaXQoZWwpO1xuICAgIHRoaXMuZWRpdG9yLiRibG9ja1Njcm9sbGluZyA9IEluZmluaXR5O1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplT3B0aW9ucygpIHtcbiAgICB0aGlzLnNldE9wdGlvbnModGhpcy5fb3B0aW9ucyB8fCB7fSk7XG4gICAgdGhpcy5zZXRUaGVtZSh0aGlzLl90aGVtZSk7XG4gICAgdGhpcy5zZXRNb2RlKHRoaXMuX21vZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplRXZlbnRzKCkge1xuICAgIHRoaXMuZWRpdG9yLm9uKCdmb2N1cycsIChldmVudCkgPT4gdGhpcy5mb2N1cy5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5lZGl0b3Iub24oJ2JsdXInLCAoZXZlbnQpID0+IHRoaXMuZm9jdXMuZW1pdChldmVudCkpO1xuICAgIHRoaXMuZWRpdG9yLm9uKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLnVwZGF0ZVRleHQoKSk7XG4gICAgdGhpcy5lZGl0b3Iub24oJ3Bhc3RlJywgKCkgPT4gdGhpcy51cGRhdGVUZXh0KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUZXh0KCkge1xuICAgIGxldCBuZXdWYWwgPSB0aGlzLmVkaXRvci5nZXRWYWx1ZSgpLFxuICAgICAgdGhhdCA9IHRoaXM7XG5cbiAgICBpZiAobmV3VmFsID09PSB0aGlzLm9sZFRleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBuZXdWYWw7XG4gICAgdGhpcy5vbkNoYW5nZShuZXdWYWwpO1xuICAgIHRoaXMub2xkVGV4dCA9IG5ld1ZhbDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKHRleHQpKSB7XG4gICAgICB0ZXh0ID0gJyc7XG4gICAgfVxuICAgIGlmICh0aGlzLnRleHQgIT09IHRleHQpIHtcbiAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICB0aGlzLmVkaXRvci5zZXRWYWx1ZSh0ZXh0KTtcbiAgICAgIHRoaXMub25DaGFuZ2UodGV4dCk7XG4gICAgICB0aGlzLmVkaXRvci5jbGVhclNlbGVjdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmVkaXRvci5zZXRPcHRpb25zKG9wdGlvbnMgfHwge30pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUaGVtZSh0aGVtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGhlbWUgPSB0aGVtZTtcbiAgICB0aGlzLmVkaXRvci5zZXRUaGVtZShgYWNlL3RoZW1lLyR7dGhlbWV9YCk7XG4gIH1cblxuICBwcml2YXRlIHNldE1vZGUobW9kZTogYW55KSB7XG4gICAgdGhpcy5fbW9kZSA9IG1vZGU7XG4gICAgdGhpcy5lZGl0b3IuZ2V0U2Vzc2lvbigpLnNldE1vZGUoYGFjZS9tb2RlLyR7dGhpcy5fbW9kZX1gKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuc2V0VGV4dCh2YWx1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19