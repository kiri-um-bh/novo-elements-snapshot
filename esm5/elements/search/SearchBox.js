// NG2
import { Component, Input, Output, EventEmitter, ViewChild, forwardRef, ElementRef, HostBinding, ChangeDetectorRef, NgZone, ChangeDetectionStrategy, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TAB, ENTER, ESCAPE } from '@angular/cdk/keycodes';
// APP
import { NovoOverlayTemplateComponent } from '../overlay/Overlay';
import { NovoLabelService } from '../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "../button/Button";
import * as i3 from "../tooltip/Tooltip.directive";
import * as i4 from "../overlay/Overlay";
var _c0 = ["input"];
var _c1 = ["*"];
// Value accessor for the component (supports ngModel)
var SEARCH_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NovoSearchBoxElement; }),
    multi: true,
};
var NovoSearchBoxElement = /** @class */ (function () {
    function NovoSearchBoxElement(element, labels, _changeDetectorRef, _zone) {
        this.element = element;
        this.labels = labels;
        this._changeDetectorRef = _changeDetectorRef;
        this._zone = _zone;
        this.icon = 'search';
        this.placeholder = 'Search...';
        this.alwaysOpen = false;
        this.theme = 'positive';
        this.closeOnSelect = true;
        this.searchChanged = new EventEmitter();
        this.focused = false;
        /** View -> model callback called when value changes */
        this._onChange = function () { };
        /** View -> model callback called when autocomplete has been touched */
        this._onTouched = function () { };
    }
    /**
     * @name showFasterFind
     * @description This function shows the picker and adds the active class (for animation)
     */
    NovoSearchBoxElement.prototype.showSearch = function (event, forceClose) {
        var _this = this;
        if (forceClose === void 0) { forceClose = false; }
        if (!this.panelOpen) {
            // Reset search
            // Set focus on search
            setTimeout(function () {
                var element = _this.input.nativeElement;
                if (element) {
                    element.focus();
                }
            }, 10);
        }
    };
    NovoSearchBoxElement.prototype.onFocus = function () {
        var _this = this;
        this._zone.run(function () {
            _this.focused = true;
            _this.openPanel();
        });
    };
    NovoSearchBoxElement.prototype.onBlur = function () {
        this.focused = false;
    };
    /** BEGIN: Convenient Panel Methods. */
    NovoSearchBoxElement.prototype.openPanel = function () {
        this.overlay.openPanel();
    };
    NovoSearchBoxElement.prototype.closePanel = function () {
        this.overlay.closePanel();
    };
    Object.defineProperty(NovoSearchBoxElement.prototype, "panelOpen", {
        get: function () {
            return this.overlay && this.overlay.panelOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoSearchBoxElement.prototype, "active", {
        get: function () {
            return this.panelOpen || this.alwaysOpen;
        },
        enumerable: true,
        configurable: true
    });
    /** END: Convenient Panel Methods. */
    NovoSearchBoxElement.prototype._handleKeydown = function (event) {
        if ((event.keyCode === ESCAPE || event.keyCode === ENTER || event.keyCode === TAB) && this.panelOpen) {
            this.closePanel();
            event.stopPropagation();
        }
    };
    NovoSearchBoxElement.prototype._handleInput = function (event) {
        var _this = this;
        if (document.activeElement === event.target) {
            this._onChange(event.target.value);
            if (this.debounceSearchChange) {
                clearTimeout(this.debounceSearchChange);
            }
            this.debounceSearchChange = setTimeout(function () {
                _this.searchChanged.emit(event.target.value);
            }, 400);
        }
    };
    NovoSearchBoxElement.prototype.writeValue = function (value) {
        this._setValue(value);
    };
    NovoSearchBoxElement.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    NovoSearchBoxElement.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    NovoSearchBoxElement.prototype._setValue = function (value) {
        this.value = value;
        var toDisplay = value;
        if (value && this.displayField) {
            toDisplay = value.hasOwnProperty(this.displayField) ? value[this.displayField] : value;
        }
        // Simply falling back to an empty string if the display value is falsy does not work properly.
        // The display value can also be the number zero and shouldn't fall back to an empty string.
        this.displayValue = toDisplay ? toDisplay : '';
        this.input.nativeElement.value = this.displayValue;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     */
    NovoSearchBoxElement.prototype.setValueAndClose = function (event) {
        if (event && event.value) {
            this._setValue(event.value);
            this._onChange(event.value);
        }
        this.closePanel();
    };
    /**
     * Clear any previous selected option and emit a selection change event for this option
     */
    NovoSearchBoxElement.prototype.clearValue = function (skip) {
        this.writeValue(null);
        this._onChange(null);
    };
    NovoSearchBoxElement.ɵfac = function NovoSearchBoxElement_Factory(t) { return new (t || NovoSearchBoxElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    NovoSearchBoxElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoSearchBoxElement, selectors: [["novo-search"]], viewQuery: function NovoSearchBoxElement_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(NovoOverlayTemplateComponent, true);
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.overlay = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.input = _t.first);
        } }, hostVars: 4, hostBindings: function NovoSearchBoxElement_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("focused", ctx.focused)("active", ctx.active);
        } }, inputs: { name: "name", icon: "icon", placeholder: "placeholder", alwaysOpen: "alwaysOpen", theme: "theme", closeOnSelect: "closeOnSelect", displayField: "displayField", displayValue: "displayValue", hint: "hint" }, outputs: { searchChanged: "searchChanged" }, features: [i0.ɵɵProvidersFeature([SEARCH_VALUE_ACCESSOR])], ngContentSelectors: _c1, decls: 5, vars: 8, consts: [["theme", "fab", "tooltipPosition", "bottom", "data-automation-id", "novo-search-fab", 3, "color", "icon", "tooltip", "click"], ["type", "text", "data-automation-id", "novo-search-input", 3, "focus", "blur", "keydown", "input"], ["input", ""], ["position", "above-below", 3, "parent", "closeOnSelect", "select", "closing"]], template: function NovoSearchBoxElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function NovoSearchBoxElement_Template_button_click_0_listener() { return ctx.showSearch(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "input", 1, 2);
            i0.ɵɵlistener("focus", function NovoSearchBoxElement_Template_input_focus_1_listener() { return ctx.onFocus(); })("blur", function NovoSearchBoxElement_Template_input_blur_1_listener() { return ctx.onBlur(); })("keydown", function NovoSearchBoxElement_Template_input_keydown_1_listener($event) { return ctx._handleKeydown($event); })("input", function NovoSearchBoxElement_Template_input_input_1_listener($event) { return ctx._handleInput($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "novo-overlay-template", 3);
            i0.ɵɵlistener("select", function NovoSearchBoxElement_Template_novo_overlay_template_select_3_listener() { return ctx.closePanel(); })("closing", function NovoSearchBoxElement_Template_novo_overlay_template_closing_3_listener() { return ctx.onBlur(); });
            i0.ɵɵprojection(4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("color", ctx.theme)("icon", ctx.icon)("tooltip", ctx.hint);
            i0.ɵɵadvance(1);
            i0.ɵɵattribute("name", ctx.name)("value", ctx.displayValue)("placeholder", ctx.placeholder);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("parent", ctx.element)("closeOnSelect", ctx.closeOnSelect);
        } }, directives: [i2.NovoButtonElement, i3.TooltipDirective, i4.NovoOverlayTemplateComponent], encapsulation: 2, changeDetection: 0 });
    return NovoSearchBoxElement;
}());
export { NovoSearchBoxElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSearchBoxElement, [{
        type: Component,
        args: [{
                selector: 'novo-search',
                providers: [SEARCH_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n    <!-- SEARCH ICON -->\n    <button\n      theme=\"fab\"\n      [color]=\"theme\"\n      [icon]=\"icon\"\n      (click)=\"showSearch()\"\n      [tooltip]=\"hint\"\n      tooltipPosition=\"bottom\"\n      data-automation-id=\"novo-search-fab\"\n    ></button>\n    <!-- SEARCH INPUT -->\n    <input\n      type=\"text\"\n      [attr.name]=\"name\"\n      [attr.value]=\"displayValue\"\n      [attr.placeholder]=\"placeholder\"\n      (focus)=\"onFocus()\"\n      (blur)=\"onBlur()\"\n      (keydown)=\"_handleKeydown($event)\"\n      (input)=\"_handleInput($event)\"\n      #input\n      data-automation-id=\"novo-search-input\"\n    />\n    <!-- SEARCH OVERLAY -->\n    <novo-overlay-template\n      [parent]=\"element\"\n      [closeOnSelect]=\"closeOnSelect\"\n      position=\"above-below\"\n      (select)=\"closePanel()\"\n      (closing)=\"onBlur()\"\n    >\n      <ng-content></ng-content>\n    </novo-overlay-template>\n  ",
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NovoLabelService }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; }, { name: [{
            type: Input
        }], icon: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], alwaysOpen: [{
            type: Input
        }], theme: [{
            type: Input
        }], closeOnSelect: [{
            type: Input
        }], displayField: [{
            type: Input
        }], displayValue: [{
            type: Input
        }], hint: [{
            type: Input
        }], searchChanged: [{
            type: Output
        }], focused: [{
            type: HostBinding,
            args: ['class.focused']
        }], overlay: [{
            type: ViewChild,
            args: [NovoOverlayTemplateComponent]
        }], input: [{
            type: ViewChild,
            args: ['input', { static: true }]
        }], active: [{
            type: HostBinding,
            args: ['class.active']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQm94LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NlYXJjaC9TZWFyY2hCb3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsV0FBVyxFQUNYLGlCQUFpQixFQUNqQixNQUFNLEVBQ04sdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxNQUFNO0FBQ04sT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7Ozs7O0FBRXJFLHNEQUFzRDtBQUN0RCxJQUFNLHFCQUFxQixHQUFHO0lBQzVCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsb0JBQW9CLEVBQXBCLENBQW9CLENBQUM7SUFDbkQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBRUY7SUE4RUUsOEJBQ1MsT0FBbUIsRUFDbkIsTUFBd0IsRUFDdkIsa0JBQXFDLEVBQ3JDLEtBQWE7UUFIZCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3ZCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQXRDaEIsU0FBSSxHQUFXLFFBQVEsQ0FBQztRQUV4QixnQkFBVyxHQUFXLFdBQVcsQ0FBQztRQUVsQyxlQUFVLEdBQVksS0FB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QUFNLEVBQUUsSUFBSSxFQUFFOztrQkErQ25DLFdBQVc7bUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdDaGlsZCxcbiAgZm9yd2FyZFJlZixcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBOZ1pvbmUsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRBQiwgRU5URVIsIEVTQ0FQRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9vdmVybGF5L092ZXJsYXknO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgU0VBUkNIX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b1NlYXJjaEJveEVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2VhcmNoJyxcbiAgcHJvdmlkZXJzOiBbU0VBUkNIX1ZBTFVFX0FDQ0VTU09SXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLSBTRUFSQ0ggSUNPTiAtLT5cbiAgICA8YnV0dG9uXG4gICAgICB0aGVtZT1cImZhYlwiXG4gICAgICBbY29sb3JdPVwidGhlbWVcIlxuICAgICAgW2ljb25dPVwiaWNvblwiXG4gICAgICAoY2xpY2spPVwic2hvd1NlYXJjaCgpXCJcbiAgICAgIFt0b29sdGlwXT1cImhpbnRcIlxuICAgICAgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tXCJcbiAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tc2VhcmNoLWZhYlwiXG4gICAgPjwvYnV0dG9uPlxuICAgIDwhLS0gU0VBUkNIIElOUFVUIC0tPlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgW2F0dHIubmFtZV09XCJuYW1lXCJcbiAgICAgIFthdHRyLnZhbHVlXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAoZm9jdXMpPVwib25Gb2N1cygpXCJcbiAgICAgIChibHVyKT1cIm9uQmx1cigpXCJcbiAgICAgIChrZXlkb3duKT1cIl9oYW5kbGVLZXlkb3duKCRldmVudClcIlxuICAgICAgKGlucHV0KT1cIl9oYW5kbGVJbnB1dCgkZXZlbnQpXCJcbiAgICAgICNpbnB1dFxuICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1zZWFyY2gtaW5wdXRcIlxuICAgIC8+XG4gICAgPCEtLSBTRUFSQ0ggT1ZFUkxBWSAtLT5cbiAgICA8bm92by1vdmVybGF5LXRlbXBsYXRlXG4gICAgICBbcGFyZW50XT1cImVsZW1lbnRcIlxuICAgICAgW2Nsb3NlT25TZWxlY3RdPVwiY2xvc2VPblNlbGVjdFwiXG4gICAgICBwb3NpdGlvbj1cImFib3ZlLWJlbG93XCJcbiAgICAgIChzZWxlY3QpPVwiY2xvc2VQYW5lbCgpXCJcbiAgICAgIChjbG9zaW5nKT1cIm9uQmx1cigpXCJcbiAgICA+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9ub3ZvLW92ZXJsYXktdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TZWFyY2hCb3hFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwdWJsaWMgaWNvbjogc3RyaW5nID0gJ3NlYXJjaCc7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nID0gJ1NlYXJjaC4uLic7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBhbHdheXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0aGVtZTogc3RyaW5nID0gJ3Bvc2l0aXZlJztcbiAgQElucHV0KClcbiAgcHVibGljIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGlzcGxheUZpZWxkOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkaXNwbGF5VmFsdWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgcHVibGljIGhpbnQ6IHN0cmluZztcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBzZWFyY2hDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZvY3VzZWQnKVxuICBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyB2YWx1ZTogYW55O1xuXG4gIC8qKiBWaWV3IC0+IG1vZGVsIGNhbGxiYWNrIGNhbGxlZCB3aGVuIHZhbHVlIGNoYW5nZXMgKi9cbiAgX29uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICAvKiogVmlldyAtPiBtb2RlbCBjYWxsYmFjayBjYWxsZWQgd2hlbiBhdXRvY29tcGxldGUgaGFzIGJlZW4gdG91Y2hlZCAqL1xuICBfb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgLyoqIEVsZW1lbnQgZm9yIHRoZSBwYW5lbCBjb250YWluaW5nIHRoZSBhdXRvY29tcGxldGUgb3B0aW9ucy4gKi9cbiAgQFZpZXdDaGlsZChOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50KVxuICBvdmVybGF5OiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgaW5wdXQ6IGFueTtcblxuICBwcml2YXRlIGRlYm91bmNlU2VhcmNoQ2hhbmdlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSxcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfem9uZTogTmdab25lLFxuICApIHt9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNob3dGYXN0ZXJGaW5kXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIHNob3dzIHRoZSBwaWNrZXIgYW5kIGFkZHMgdGhlIGFjdGl2ZSBjbGFzcyAoZm9yIGFuaW1hdGlvbilcbiAgICovXG4gIHNob3dTZWFyY2goZXZlbnQ/OiBhbnksIGZvcmNlQ2xvc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgIC8vIFJlc2V0IHNlYXJjaFxuICAgICAgLy8gU2V0IGZvY3VzIG9uIHNlYXJjaFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICB9XG4gIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMub3BlblBhbmVsKCk7XG4gICAgfSk7XG4gIH1cbiAgb25CbHVyKCkge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICB9XG4gIC8qKiBCRUdJTjogQ29udmVuaWVudCBQYW5lbCBNZXRob2RzLiAqL1xuICBvcGVuUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5Lm9wZW5QYW5lbCgpO1xuICB9XG4gIGNsb3NlUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5LmNsb3NlUGFuZWwoKTtcbiAgfVxuICBnZXQgcGFuZWxPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5LnBhbmVsT3BlbjtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFuZWxPcGVuIHx8IHRoaXMuYWx3YXlzT3BlbjtcbiAgfVxuICAvKiogRU5EOiBDb252ZW5pZW50IFBhbmVsIE1ldGhvZHMuICovXG5cbiAgX2hhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSB8fCBldmVudC5rZXlDb2RlID09PSBFTlRFUiB8fCBldmVudC5rZXlDb2RlID09PSBUQUIpICYmIHRoaXMucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuICBfaGFuZGxlSW5wdXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICB0aGlzLl9vbkNoYW5nZSgoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcblxuICAgICAgaWYgKHRoaXMuZGVib3VuY2VTZWFyY2hDaGFuZ2UpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VTZWFyY2hDaGFuZ2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWJvdW5jZVNlYXJjaENoYW5nZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNlYXJjaENoYW5nZWQuZW1pdCgoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcbiAgICAgIH0sIDQwMCk7XG4gICAgfVxuICB9XG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX3NldFZhbHVlKHZhbHVlKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSkge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG4gIHByaXZhdGUgX3NldFZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgbGV0IHRvRGlzcGxheSA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSAmJiB0aGlzLmRpc3BsYXlGaWVsZCkge1xuICAgICAgdG9EaXNwbGF5ID0gdmFsdWUuaGFzT3duUHJvcGVydHkodGhpcy5kaXNwbGF5RmllbGQpID8gdmFsdWVbdGhpcy5kaXNwbGF5RmllbGRdIDogdmFsdWU7XG4gICAgfVxuICAgIC8vIFNpbXBseSBmYWxsaW5nIGJhY2sgdG8gYW4gZW1wdHkgc3RyaW5nIGlmIHRoZSBkaXNwbGF5IHZhbHVlIGlzIGZhbHN5IGRvZXMgbm90IHdvcmsgcHJvcGVybHkuXG4gICAgLy8gVGhlIGRpc3BsYXkgdmFsdWUgY2FuIGFsc28gYmUgdGhlIG51bWJlciB6ZXJvIGFuZCBzaG91bGRuJ3QgZmFsbCBiYWNrIHRvIGFuIGVtcHR5IHN0cmluZy5cbiAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHRvRGlzcGxheSA/IHRvRGlzcGxheSA6ICcnO1xuICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuZGlzcGxheVZhbHVlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGNsb3NlcyB0aGUgcGFuZWwsIGFuZCBpZiBhIHZhbHVlIGlzIHNwZWNpZmllZCwgYWxzbyBzZXRzIHRoZSBhc3NvY2lhdGVkXG4gICAqIGNvbnRyb2wgdG8gdGhhdCB2YWx1ZS4gSXQgd2lsbCBhbHNvIG1hcmsgdGhlIGNvbnRyb2wgYXMgZGlydHkgaWYgdGhpcyBpbnRlcmFjdGlvblxuICAgKiBzdGVtbWVkIGZyb20gdGhlIHVzZXIuXG4gICAqL1xuICBwdWJsaWMgc2V0VmFsdWVBbmRDbG9zZShldmVudDogYW55IHwgbnVsbCk6IHZvaWQge1xuICAgIGlmIChldmVudCAmJiBldmVudC52YWx1ZSkge1xuICAgICAgdGhpcy5fc2V0VmFsdWUoZXZlbnQudmFsdWUpO1xuICAgICAgdGhpcy5fb25DaGFuZ2UoZXZlbnQudmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbnkgcHJldmlvdXMgc2VsZWN0ZWQgb3B0aW9uIGFuZCBlbWl0IGEgc2VsZWN0aW9uIGNoYW5nZSBldmVudCBmb3IgdGhpcyBvcHRpb25cbiAgICovXG4gIHB1YmxpYyBjbGVhclZhbHVlKHNraXA6IGFueSkge1xuICAgIHRoaXMud3JpdGVWYWx1ZShudWxsKTtcbiAgICB0aGlzLl9vbkNoYW5nZShudWxsKTtcbiAgfVxufVxuIl19