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
import * as i0 from "@angular/core";
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
        set: function (theme) {
            this.setTheme(theme);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoAceEditor.prototype, "options", {
        set: function (options) {
            this.setOptions(options);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoAceEditor.prototype, "mode", {
        set: function (mode) {
            this.setMode(mode);
        },
        enumerable: true,
        configurable: true
    });
    NovoAceEditor.prototype.ngOnDestroy = function () {
        if (this.editor) {
            this.editor.destroy();
        }
    };
    NovoAceEditor.prototype.ngOnInit = function () {
        this.initializeEditor();
        this.initializeOptions();
        this.initializeEvents();
    };
    NovoAceEditor.prototype.initializeEditor = function () {
        var el = this.elementRef.nativeElement;
        this.editor = ace.edit(el);
        this.editor.$blockScrolling = Infinity;
    };
    NovoAceEditor.prototype.initializeOptions = function () {
        this.setOptions(this._options || {});
        this.setTheme(this._theme);
        this.setMode(this._mode);
    };
    NovoAceEditor.prototype.initializeEvents = function () {
        var _this = this;
        this.editor.on('focus', function (event) { return _this.focus.emit(event); });
        this.editor.on('blur', function (event) { return _this.focus.emit(event); });
        this.editor.on('change', function () { return _this.updateText(); });
        this.editor.on('paste', function () { return _this.updateText(); });
    };
    NovoAceEditor.prototype.updateText = function () {
        var newVal = this.editor.getValue();
        if (newVal === this.oldText) {
            return;
        }
        this.text = newVal;
        this.onChange(newVal);
        this.oldText = newVal;
    };
    NovoAceEditor.prototype.setText = function (text) {
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
    NovoAceEditor.prototype.setOptions = function (options) {
        this._options = options;
        this.editor.setOptions(options || {});
    };
    NovoAceEditor.prototype.setTheme = function (theme) {
        this._theme = theme;
        this.editor.setTheme("ace/theme/" + theme);
    };
    NovoAceEditor.prototype.setMode = function (mode) {
        this._mode = mode;
        this.editor.getSession().setMode("ace/mode/" + this._mode);
    };
    NovoAceEditor.prototype.writeValue = function (value) {
        this.setText(value);
    };
    NovoAceEditor.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NovoAceEditor.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NovoAceEditor.ɵfac = function NovoAceEditor_Factory(t) { return new (t || NovoAceEditor)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    NovoAceEditor.ɵcmp = i0.ɵɵdefineComponent({ type: NovoAceEditor, selectors: [["novo-ace-editor"]], inputs: { theme: "theme", options: "options", mode: "mode", name: "name" }, outputs: { blur: "blur", focus: "focus" }, features: [i0.ɵɵProvidersFeature([ACE_VALUE_ACCESSOR])], decls: 0, vars: 0, template: function NovoAceEditor_Template(rf, ctx) { }, encapsulation: 2 });
    return NovoAceEditor;
}());
export { NovoAceEditor };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoAceEditor, [{
        type: Component,
        args: [{
                selector: 'novo-ace-editor',
                template: '',
                providers: [ACE_VALUE_ACCESSOR],
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { theme: [{
            type: Input
        }], options: [{
            type: Input
        }], mode: [{
            type: Input
        }], name: [{
            type: Input
        }], blur: [{
            type: Output
        }], focus: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNlRWRpdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2FjZS1lZGl0b3IvQWNlRWRpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxTQUFTO0FBQ1QsT0FBTyxhQUFhLENBQUM7QUFDckIsT0FBTyxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sNkJBQTZCLENBQUM7QUFDckMsTUFBTTtBQUNOLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFJOUMsSUFBTSxrQkFBa0IsR0FBRztJQUN6QixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGFBQWEsRUFBYixDQUFhLENBQUM7SUFDNUMsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBRUY7SUEwQ0UsdUJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFsQjFDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5CLGFBQVEsR0FBUTtZQUN0QixlQUFlLEVBQUUsS0FBSztZQUN0QixtQkFBbUIsRUFBRSxJQUFJO1NBQzFCLENBQUM7UUFDTSxXQUFNLEdBQVcsUUFBUSxDQUFDO1FBQzFCLFVBQUssR0FBVyxZQUFZLENBQUM7UUFFN0IsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUlsQixhQUFRLEdBQUcsVUFBQyxDQUFNLElBQU8sQ0FBQyxDQUFDO1FBQzNCLGNBQVMsR0FB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NkhDO1NBeEhZLGFBQWE7a0RBQWIsYUFBYTtjQUx6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDaEM7O2tCQUVFLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUVOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEVsZW1lbnRSZWYsIElucHV0LCBmb3J3YXJkUmVmLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgJ2JyYWNlL2luZGV4JztcbmltcG9ydCAnYnJhY2UvdGhlbWUvY2hyb21lJztcbmltcG9ydCAnYnJhY2UvbW9kZS9qYXZhc2NyaXB0JztcbmltcG9ydCAnYnJhY2UvZXh0L2xhbmd1YWdlX3Rvb2xzLmpzJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5kZWNsYXJlIHZhciBhY2U6IGFueTtcblxuY29uc3QgQUNFX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0FjZUVkaXRvciksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1hY2UtZWRpdG9yJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBwcm92aWRlcnM6IFtBQ0VfVkFMVUVfQUNDRVNTT1JdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWNlRWRpdG9yIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgc2V0IHRoZW1lKHRoZW1lOiBhbnkpIHtcbiAgICB0aGlzLnNldFRoZW1lKHRoZW1lKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBvcHRpb25zKG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtb2RlKG1vZGU6IGFueSkge1xuICAgIHRoaXMuc2V0TW9kZShtb2RlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcbiAgQE91dHB1dCgpXG4gIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcml2YXRlIF9vcHRpb25zOiBhbnkgPSB7XG4gICAgc2hvd1ByaW50TWFyZ2luOiBmYWxzZSxcbiAgICBkaXNwbGF5SW5kZW50R3VpZGVzOiB0cnVlLFxuICB9O1xuICBwcml2YXRlIF90aGVtZTogc3RyaW5nID0gJ2Nocm9tZSc7XG4gIHByaXZhdGUgX21vZGU6IHN0cmluZyA9ICdqYXZhc2NyaXB0JztcblxuICBwcml2YXRlIHRleHQ6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIG9sZFRleHQ6IHN0cmluZztcbiAgcHJpdmF0ZSBlZGl0b3I6IGFueTtcblxuICBwcml2YXRlIG9uQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuICBwcml2YXRlIG9uVG91Y2hlZCA9ICgpID0+IHsgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgdGhpcy5lZGl0b3IuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUVkaXRvcigpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZU9wdGlvbnMoKTtcbiAgICB0aGlzLmluaXRpYWxpemVFdmVudHMoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUVkaXRvcigpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuZWRpdG9yID0gYWNlLmVkaXQoZWwpO1xuICAgIHRoaXMuZWRpdG9yLiRibG9ja1Njcm9sbGluZyA9IEluZmluaXR5O1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplT3B0aW9ucygpIHtcbiAgICB0aGlzLnNldE9wdGlvbnModGhpcy5fb3B0aW9ucyB8fCB7fSk7XG4gICAgdGhpcy5zZXRUaGVtZSh0aGlzLl90aGVtZSk7XG4gICAgdGhpcy5zZXRNb2RlKHRoaXMuX21vZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplRXZlbnRzKCkge1xuICAgIHRoaXMuZWRpdG9yLm9uKCdmb2N1cycsIChldmVudCkgPT4gdGhpcy5mb2N1cy5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5lZGl0b3Iub24oJ2JsdXInLCAoZXZlbnQpID0+IHRoaXMuZm9jdXMuZW1pdChldmVudCkpO1xuICAgIHRoaXMuZWRpdG9yLm9uKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLnVwZGF0ZVRleHQoKSk7XG4gICAgdGhpcy5lZGl0b3Iub24oJ3Bhc3RlJywgKCkgPT4gdGhpcy51cGRhdGVUZXh0KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUZXh0KCkge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMuZWRpdG9yLmdldFZhbHVlKCk7XG5cbiAgICBpZiAobmV3VmFsID09PSB0aGlzLm9sZFRleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBuZXdWYWw7XG4gICAgdGhpcy5vbkNoYW5nZShuZXdWYWwpO1xuICAgIHRoaXMub2xkVGV4dCA9IG5ld1ZhbDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKHRleHQpKSB7XG4gICAgICB0ZXh0ID0gJyc7XG4gICAgfVxuICAgIGlmICh0aGlzLnRleHQgIT09IHRleHQpIHtcbiAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICB0aGlzLmVkaXRvci5zZXRWYWx1ZSh0ZXh0KTtcbiAgICAgIHRoaXMub25DaGFuZ2UodGV4dCk7XG4gICAgICB0aGlzLmVkaXRvci5jbGVhclNlbGVjdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmVkaXRvci5zZXRPcHRpb25zKG9wdGlvbnMgfHwge30pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUaGVtZSh0aGVtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGhlbWUgPSB0aGVtZTtcbiAgICB0aGlzLmVkaXRvci5zZXRUaGVtZShgYWNlL3RoZW1lLyR7dGhlbWV9YCk7XG4gIH1cblxuICBwcml2YXRlIHNldE1vZGUobW9kZTogYW55KSB7XG4gICAgdGhpcy5fbW9kZSA9IG1vZGU7XG4gICAgdGhpcy5lZGl0b3IuZ2V0U2Vzc2lvbigpLnNldE1vZGUoYGFjZS9tb2RlLyR7dGhpcy5fbW9kZX1gKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuc2V0VGV4dCh2YWx1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19