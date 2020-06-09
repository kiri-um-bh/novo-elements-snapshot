import { __assign } from "tslib";
// NG
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, NgZone, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NovoLabelService } from '../../services/novo-label-service';
import { Helpers } from '../../utils/Helpers';
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
// App
import { NovoOverlayTemplateComponent } from '../overlay/Overlay';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "@angular/cdk/a11y";
import * as i3 from "../overlay/Overlay";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
var _c0 = ["dropdownElement"];
function NovoSelectElement_li_7_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function NovoSelectElement_li_7_button_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r6); var ctx_r5 = i0.ɵɵnextContext(2); ctx_r5.toggleHeader($event); return false; });
    i0.ɵɵelement(1, "i", 11);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u00A0", ctx_r3.headerConfig.label, " ");
} }
var _c1 = function (a0) { return { active: a0 }; };
var _c2 = function (a0) { return { invalid: a0 }; };
function NovoSelectElement_li_7_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "input", 13);
    i0.ɵɵlistener("ngModelChange", function NovoSelectElement_li_7_div_2_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r8); var ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.header.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "footer");
    i0.ɵɵelementStart(3, "button", 14);
    i0.ɵɵlistener("click", function NovoSelectElement_li_7_div_2_Template_button_click_3_listener($event) { i0.ɵɵrestoreView(_r8); var ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.toggleHeader($event, false); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 15);
    i0.ɵɵlistener("click", function NovoSelectElement_li_7_div_2_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r8); var ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.saveHeader(); });
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c1, ctx_r4.header.open));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", ctx_r4.headerConfig.placeholder)("ngModel", ctx_r4.header.value)("ngClass", i0.ɵɵpureFunction1(9, _c2, !ctx_r4.header.valid));
    i0.ɵɵattribute("id", ctx_r4.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r4.labels.cancel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.labels.save);
} }
function NovoSelectElement_li_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 7);
    i0.ɵɵtemplate(1, NovoSelectElement_li_7_button_1_Template, 3, 1, "button", 8);
    i0.ɵɵtemplate(2, NovoSelectElement_li_7_div_2_Template, 7, 11, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("open", ctx_r1.header.open);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.header.open);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.header.open);
} }
function NovoSelectElement_li_8_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 19);
} }
function NovoSelectElement_li_8_Template(rf, ctx) { if (rf & 1) {
    var _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 16);
    i0.ɵɵlistener("click", function NovoSelectElement_li_8_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r15); var option_r11 = ctx.$implicit; var i_r12 = ctx.index; var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.setValueAndClose({ value: option_r11, index: i_r12 }); });
    i0.ɵɵelement(1, "span", 17);
    i0.ɵɵtemplate(2, NovoSelectElement_li_8_i_2_Template, 1, 0, "i", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r11 = ctx.$implicit;
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c1, option_r11.active));
    i0.ɵɵattribute("data-automation-value", option_r11.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", ctx_r2.highlight(option_r11.label, ctx_r2.filterTerm), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", option_r11.active);
} }
var _c3 = ["*"];
// Value accessor for the component (supports ngModel)
var SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NovoSelectElement; }),
    multi: true,
};
var NovoSelectElement = /** @class */ (function () {
    function NovoSelectElement(element, labels, ref, focusMonitor, ngZone) {
        this.element = element;
        this.labels = labels;
        this.ref = ref;
        this.focusMonitor = focusMonitor;
        this.ngZone = ngZone;
        this.placeholder = 'Select...';
        this.onSelect = new EventEmitter();
        this.selectedIndex = -1;
        this.empty = true;
        this.header = {
            open: false,
            valid: true,
            value: '',
        };
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this.filterTerm = '';
        this.disabled = false;
    }
    NovoSelectElement.prototype.ngOnInit = function () {
        var _this = this;
        this.focusMonitor.monitor(this.dropdown.nativeElement).subscribe(function (origin) {
            return _this.ngZone.run(function () {
                if (origin === 'keyboard' && !_this.disabled) {
                    _this.openPanel();
                }
            });
        });
        this.ngOnChanges();
    };
    NovoSelectElement.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.readonly = this.readonly === true;
        if (this.options && this.options.length && typeof this.options[0] === 'string') {
            this.filteredOptions = this.options.map(function (item) {
                return { value: item, label: item };
            });
        }
        else {
            this.filteredOptions = (this.options || [])
                .filter(function (item) {
                return !item.readOnly;
            })
                .map(function (element) {
                return __assign(__assign({}, element), { active: false });
            });
        }
        if (!this.model && !this.createdItem) {
            this.clear();
        }
        else if (this.createdItem) {
            var item = this.options.find(function (i) { return i.label === _this.createdItem; });
            var index = this.options.indexOf(item);
            this.select(item, index);
        }
        else {
            this.writeValue(this.model);
        }
        if (this.panelOpen) {
            this.openPanel();
        }
    };
    NovoSelectElement.prototype.ngOnDestroy = function () {
        this.focusMonitor.stopMonitoring(this.dropdown.nativeElement);
    };
    /** BEGIN: Convienient Panel Methods. */
    NovoSelectElement.prototype.openPanel = function () {
        this.overlay.openPanel();
    };
    NovoSelectElement.prototype.closePanel = function () {
        this.overlay.closePanel();
    };
    NovoSelectElement.prototype.togglePanel = function () {
        var _this = this;
        if (this.panelOpen) {
            this.closePanel();
        }
        else {
            setTimeout(function () {
                _this.dropdown.nativeElement.focus();
            });
            this.openPanel();
        }
    };
    Object.defineProperty(NovoSelectElement.prototype, "panelOpen", {
        get: function () {
            return this.overlay && this.overlay.panelOpen;
        },
        enumerable: true,
        configurable: true
    });
    /** END: Convenient Panel Methods. */
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     */
    NovoSelectElement.prototype.setValueAndClose = function (event) {
        if (event.value && event.index >= 0) {
            this.select(event.value, event.index);
        }
        this.closePanel();
    };
    NovoSelectElement.prototype.select = function (option, i, fireEvents) {
        if (fireEvents === void 0) { fireEvents = true; }
        if (this.selected) {
            this.selected.active = false;
        }
        this.selectedIndex = i;
        this.selected = option;
        this.selected.active = true;
        this.empty = false;
        if (fireEvents) {
            this.onModelChange(this.selected.value);
            this.onSelect.emit({ selected: this.selected.value });
        }
    };
    NovoSelectElement.prototype.clear = function () {
        if (this.selected) {
            this.selected.active = false;
        }
        this.selected = {
            label: this.placeholder,
            value: null,
            active: false,
        };
        this.header = {
            open: false,
            valid: true,
            value: '',
        };
        this.selectedIndex = -1;
        this.empty = true;
    };
    NovoSelectElement.prototype.onKeyDown = function (event) {
        var _this = this;
        // To prevent default window scrolling
        if ([KeyCodes.UP, KeyCodes.DOWN].includes(event.keyCode)) {
            event.preventDefault();
        }
        if ([KeyCodes.ESC, KeyCodes.TAB].includes(event.keyCode)) {
            this.closePanel();
        }
        else if (event.keyCode === KeyCodes.ENTER) {
            if (this.header.open && this.header.value) {
                this.saveHeader();
            }
            else {
                this.setValueAndClose({
                    value: this.filteredOptions[this.selectedIndex],
                    index: this.selectedIndex,
                });
            }
        }
        else if (event.keyCode === KeyCodes.UP) {
            if (!this.panelOpen) {
                this.openPanel();
            }
            if (this.selectedIndex > 0) {
                this.selectedIndex--;
                this.select(this.filteredOptions[this.selectedIndex], this.selectedIndex);
                this.scrollToSelected();
            }
        }
        else if (event.keyCode === KeyCodes.DOWN) {
            if (!this.panelOpen) {
                this.openPanel();
            }
            if (this.selectedIndex < this.filteredOptions.length - 1) {
                this.selectedIndex++;
                this.select(this.filteredOptions[this.selectedIndex], this.selectedIndex);
                this.scrollToSelected();
                if (this.header.open) {
                    this.toggleHeader(null, false);
                }
            }
        }
        else if (event.keyCode === KeyCodes.UP && this.selectedIndex === 0) {
            if (!this.panelOpen) {
                this.openPanel();
            }
            this.selectedIndex--;
            this.toggleHeader(null, true);
        }
        else if ((event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode === KeyCodes.SPACE) {
            if (event.keyCode === KeyCodes.SPACE) {
                event.preventDefault();
            }
            if (!this.panelOpen) {
                this.openPanel();
            }
            clearTimeout(this.filterTermTimeout);
            this.filterTermTimeout = setTimeout(function () {
                _this.filterTerm = '';
            }, 2000);
            var char = String.fromCharCode(event.keyCode);
            this.filterTerm = this.filterTerm.concat(char);
            var item = this.filteredOptions.find(function (i) { return i.label.toUpperCase().indexOf(_this.filterTerm) === 0; });
            if (item) {
                this.select(item, this.filteredOptions.indexOf(item));
                this.scrollToSelected();
            }
        }
        else if ([KeyCodes.BACKSPACE, KeyCodes.DELETE].includes(event.keyCode)) {
            clearTimeout(this.filterTermTimeout);
            this.filterTermTimeout = setTimeout(function () {
                _this.filterTerm = '';
            }, 2000);
            this.filterTerm = this.filterTerm.slice(0, -1);
        }
    };
    NovoSelectElement.prototype.scrollToSelected = function () {
        this.scrollToIndex(this.selectedIndex);
    };
    NovoSelectElement.prototype.scrollToIndex = function (index) {
        var element = this.overlay.overlayRef.overlayElement;
        var list = element.querySelector('.novo-select-list');
        var items = list.querySelectorAll('li');
        var item = items[this.headerConfig ? index + 1 : index];
        if (item) {
            list.scrollTop = item.offsetTop;
        }
    };
    NovoSelectElement.prototype.toggleHeader = function (event, forceValue) {
        if (forceValue === void 0) { forceValue = false; }
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        // Reverse the active property (if forceValue, use that)
        this.header = {
            open: forceValue !== undefined ? forceValue : !this.header.open,
            value: '',
            valid: true,
        };
    };
    NovoSelectElement.prototype.highlight = function (match, query) {
        // Replaces the capture string with a the same string inside of a "strong" tag
        return query ? match.replace(new RegExp(this.escapeRegexp(query), 'gi'), '<strong>$&</strong>') : match;
    };
    NovoSelectElement.prototype.escapeRegexp = function (queryToEscape) {
        // Ex: if the capture is "a" the result will be \a
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    };
    NovoSelectElement.prototype.saveHeader = function () {
        if (this.header.value) {
            this.headerConfig.onSave(this.header.value);
            this.createdItem = this.header.value;
            this.closePanel();
        }
        else {
            this.header.valid = false;
        }
    };
    NovoSelectElement.prototype.writeValue = function (model) {
        this.model = model;
        if (this.options) {
            var item = this.filteredOptions.find(function (i) { return i.value === model || (model && i.value === model.id); });
            if (!item && !Helpers.isEmpty(model)) {
                item = {
                    label: model,
                    value: model,
                };
                if (!item.readOnly) {
                    this.options.unshift(item);
                }
            }
            if (item) {
                this.select(item, this.filteredOptions.indexOf(item), false);
                this.empty = false;
            }
            else {
                this.clear();
            }
        }
        this.ref.markForCheck();
    };
    NovoSelectElement.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    NovoSelectElement.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    NovoSelectElement.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
    };
    NovoSelectElement.ɵfac = function NovoSelectElement_Factory(t) { return new (t || NovoSelectElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.FocusMonitor), i0.ɵɵdirectiveInject(i0.NgZone)); };
    NovoSelectElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoSelectElement, selectors: [["novo-select"]], viewQuery: function NovoSelectElement_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(NovoOverlayTemplateComponent, true);
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.overlay = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdown = _t.first);
        } }, hostBindings: function NovoSelectElement_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown", function NovoSelectElement_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
        } }, inputs: { name: "name", options: "options", placeholder: "placeholder", readonly: "readonly", headerConfig: "headerConfig" }, outputs: { onSelect: "onSelect" }, features: [i0.ɵɵProvidersFeature([SELECT_VALUE_ACCESSOR]), i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 9, vars: 11, consts: [["type", "button", 3, "tabIndex", "click"], ["dropdownElement", ""], [1, "bhi-collapse"], ["position", "center", 3, "parent", "closing"], ["tabIndex", "-1", 1, "novo-select-list"], ["class", "select-header", 3, "open", 4, "ngIf"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "select-header"], ["tabIndex", "-1", "type", "button", "class", "header", 3, "click", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["tabIndex", "-1", "type", "button", 1, "header", 3, "click"], [1, "bhi-add-thin"], [3, "ngClass"], ["autofocus", "", "type", "text", "autocomplete", "false", 3, "placeholder", "ngModel", "ngClass", "ngModelChange"], [3, "click"], [1, "primary", 3, "click"], [3, "ngClass", "click"], [3, "innerHtml"], ["class", "bhi-check", 4, "ngIf"], [1, "bhi-check"]], template: function NovoSelectElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵlistener("click", function NovoSelectElement_Template_div_click_0_listener() { ctx.togglePanel(); return false; });
            i0.ɵɵtext(2);
            i0.ɵɵelement(3, "i", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "novo-overlay-template", 3);
            i0.ɵɵlistener("closing", function NovoSelectElement_Template_novo_overlay_template_closing_4_listener() { return ctx.dropdown.nativeElement.focus(); });
            i0.ɵɵelementStart(5, "ul", 4);
            i0.ɵɵprojection(6);
            i0.ɵɵtemplate(7, NovoSelectElement_li_7_Template, 3, 4, "li", 5);
            i0.ɵɵtemplate(8, NovoSelectElement_li_8_Template, 3, 6, "li", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("empty", ctx.empty);
            i0.ɵɵpropertyInterpolate("tabIndex", ctx.disabled ? 0 - 1 : 0);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.selected.label, "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("parent", ctx.element);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("header", ctx.headerConfig)("active", ctx.panelOpen);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.headerConfig);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.filteredOptions);
        } }, directives: [i3.NovoOverlayTemplateComponent, i4.NgIf, i4.NgForOf, i4.NgClass, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel], encapsulation: 2 });
    return NovoSelectElement;
}());
export { NovoSelectElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSelectElement, [{
        type: Component,
        args: [{
                selector: 'novo-select',
                providers: [SELECT_VALUE_ACCESSOR],
                template: "\n    <div #dropdownElement (click)=\"togglePanel(); (false)\" tabIndex=\"{{ disabled ? -1 : 0 }}\" type=\"button\" [class.empty]=\"empty\">\n      {{ selected.label }}<i class=\"bhi-collapse\"></i>\n    </div>\n    <novo-overlay-template [parent]=\"element\" position=\"center\" (closing)=\"dropdown.nativeElement.focus()\">\n      <ul class=\"novo-select-list\" tabIndex=\"-1\" [class.header]=\"headerConfig\" [class.active]=\"panelOpen\">\n        <ng-content></ng-content>\n        <li *ngIf=\"headerConfig\" class=\"select-header\" [class.open]=\"header.open\">\n          <button *ngIf=\"!header.open\" (click)=\"toggleHeader($event); (false)\" tabIndex=\"-1\" type=\"button\" class=\"header\">\n            <i class=\"bhi-add-thin\"></i>&nbsp;{{ headerConfig.label }}\n          </button>\n          <div *ngIf=\"header.open\" [ngClass]=\"{ active: header.open }\">\n            <input\n              autofocus\n              type=\"text\"\n              [placeholder]=\"headerConfig.placeholder\"\n              [attr.id]=\"name\"\n              autocomplete=\"false\"\n              [(ngModel)]=\"header.value\"\n              [ngClass]=\"{ invalid: !header.valid }\"\n            />\n            <footer>\n              <button (click)=\"toggleHeader($event, false)\">{{ labels.cancel }}</button>\n              <button (click)=\"saveHeader()\" class=\"primary\">{{ labels.save }}</button>\n            </footer>\n          </div>\n        </li>\n        <li\n          *ngFor=\"let option of filteredOptions; let i = index\"\n          [ngClass]=\"{ active: option.active }\"\n          (click)=\"setValueAndClose({ value: option, index: i })\"\n          [attr.data-automation-value]=\"option.label\"\n        >\n          <span [innerHtml]=\"highlight(option.label, filterTerm)\"></span> <i *ngIf=\"option.active\" class=\"bhi-check\"></i>\n        </li>\n      </ul>\n    </novo-overlay-template>\n  ",
                host: {
                    '(keydown)': 'onKeyDown($event)',
                },
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NovoLabelService }, { type: i0.ChangeDetectorRef }, { type: i2.FocusMonitor }, { type: i0.NgZone }]; }, { name: [{
            type: Input
        }], options: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], readonly: [{
            type: Input
        }], headerConfig: [{
            type: Input
        }], onSelect: [{
            type: Output
        }], overlay: [{
            type: ViewChild,
            args: [NovoOverlayTemplateComponent, { static: true }]
        }], dropdown: [{
            type: ViewChild,
            args: ['dropdownElement', { static: true }]
        }], onKeyDown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NlbGVjdC9TZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLEtBQUs7QUFDTCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBZ0MsTUFBTSxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaE0sT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsTUFBTTtBQUNOLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7O0lBb0J4RCxrQ0FDRTtJQUQyQix3TUFBZ0MsS0FBSyxJQUFFO0lBQ2xFLHdCQUE0QjtJQUFBLFlBQzlCO0lBQUEsaUJBQVM7OztJQURxQixlQUM5QjtJQUQ4QiwrREFDOUI7Ozs7OztJQUNBLCtCQUNFO0lBQUEsaUNBU0E7SUFIRSx1TkFBMEI7SUFONUIsaUJBU0E7SUFBQSw4QkFDRTtJQUFBLGtDQUE4QztJQUF0QyxvTUFBOEIsS0FBSyxLQUFFO0lBQUMsWUFBbUI7SUFBQSxpQkFBUztJQUMxRSxrQ0FBK0M7SUFBdkMsMkxBQXNCO0lBQWlCLFlBQWlCO0lBQUEsaUJBQVM7SUFDM0UsaUJBQVM7SUFDWCxpQkFBTTs7O0lBZG1CLHdFQUFtQztJQUl4RCxlQUF3QztJQUF4Qyw2REFBd0MsZ0NBQUEsNkRBQUE7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RCw2Q0FBcUQ7OzRCQWhEL0Q7Q0F1WEMsQUF0V0QsSUFzV0M7U0F6VFksaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0E3QzdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ2xDLFFBQVEsRUFBRSw0M0RBcUNUO2dCQUNELElBQUksRUFBRTtvQkFDSixXQUFXLEVBQUUsbUJBQW1CO2lCQUNqQzthQUNGOztrQkFFRSxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxNQUFNOztrQkFxQk4sU0FBUzttQkFBQyw0QkFBNEIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUV4RCxTQUFTO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBK0g3QyxZQUFZO21CQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE5nWm9uZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuLy8gQXBwXG5pbXBvcnQgeyBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vb3ZlcmxheS9PdmVybGF5JztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBTRUxFQ1RfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvU2VsZWN0RWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zZWxlY3QnLFxuICBwcm92aWRlcnM6IFtTRUxFQ1RfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgI2Ryb3Bkb3duRWxlbWVudCAoY2xpY2spPVwidG9nZ2xlUGFuZWwoKTsgKGZhbHNlKVwiIHRhYkluZGV4PVwie3sgZGlzYWJsZWQgPyAtMSA6IDAgfX1cIiB0eXBlPVwiYnV0dG9uXCIgW2NsYXNzLmVtcHR5XT1cImVtcHR5XCI+XG4gICAgICB7eyBzZWxlY3RlZC5sYWJlbCB9fTxpIGNsYXNzPVwiYmhpLWNvbGxhcHNlXCI+PC9pPlxuICAgIDwvZGl2PlxuICAgIDxub3ZvLW92ZXJsYXktdGVtcGxhdGUgW3BhcmVudF09XCJlbGVtZW50XCIgcG9zaXRpb249XCJjZW50ZXJcIiAoY2xvc2luZyk9XCJkcm9wZG93bi5uYXRpdmVFbGVtZW50LmZvY3VzKClcIj5cbiAgICAgIDx1bCBjbGFzcz1cIm5vdm8tc2VsZWN0LWxpc3RcIiB0YWJJbmRleD1cIi0xXCIgW2NsYXNzLmhlYWRlcl09XCJoZWFkZXJDb25maWdcIiBbY2xhc3MuYWN0aXZlXT1cInBhbmVsT3BlblwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxsaSAqbmdJZj1cImhlYWRlckNvbmZpZ1wiIGNsYXNzPVwic2VsZWN0LWhlYWRlclwiIFtjbGFzcy5vcGVuXT1cImhlYWRlci5vcGVuXCI+XG4gICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFoZWFkZXIub3BlblwiIChjbGljayk9XCJ0b2dnbGVIZWFkZXIoJGV2ZW50KTsgKGZhbHNlKVwiIHRhYkluZGV4PVwiLTFcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWFkZC10aGluXCI+PC9pPiZuYnNwO3t7IGhlYWRlckNvbmZpZy5sYWJlbCB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJoZWFkZXIub3BlblwiIFtuZ0NsYXNzXT1cInsgYWN0aXZlOiBoZWFkZXIub3BlbiB9XCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImhlYWRlckNvbmZpZy5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgIFthdHRyLmlkXT1cIm5hbWVcIlxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaGVhZGVyLnZhbHVlXCJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyBpbnZhbGlkOiAhaGVhZGVyLnZhbGlkIH1cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZUhlYWRlcigkZXZlbnQsIGZhbHNlKVwiPnt7IGxhYmVscy5jYW5jZWwgfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwic2F2ZUhlYWRlcigpXCIgY2xhc3M9XCJwcmltYXJ5XCI+e3sgbGFiZWxzLnNhdmUgfX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGlcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZpbHRlcmVkT3B0aW9uczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwieyBhY3RpdmU6IG9wdGlvbi5hY3RpdmUgfVwiXG4gICAgICAgICAgKGNsaWNrKT1cInNldFZhbHVlQW5kQ2xvc2UoeyB2YWx1ZTogb3B0aW9uLCBpbmRleDogaSB9KVwiXG4gICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLXZhbHVlXT1cIm9wdGlvbi5sYWJlbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChvcHRpb24ubGFiZWwsIGZpbHRlclRlcm0pXCI+PC9zcGFuPiA8aSAqbmdJZj1cIm9wdGlvbi5hY3RpdmVcIiBjbGFzcz1cImJoaS1jaGVja1wiPjwvaT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9ub3ZvLW92ZXJsYXktdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnKGtleWRvd24pJzogJ29uS2V5RG93bigkZXZlbnQpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NlbGVjdEVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgb3B0aW9uczogQXJyYXk8YW55PjtcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdTZWxlY3QuLi4nO1xuICBASW5wdXQoKVxuICByZWFkb25seTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgaGVhZGVyQ29uZmlnOiBhbnk7XG4gIEBPdXRwdXQoKVxuICBvblNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gLTE7XG4gIGVtcHR5OiBib29sZWFuID0gdHJ1ZTtcbiAgaGVhZGVyOiBhbnkgPSB7XG4gICAgb3BlbjogZmFsc2UsXG4gICAgdmFsaWQ6IHRydWUsXG4gICAgdmFsdWU6ICcnLFxuICB9O1xuICBjcmVhdGVkSXRlbTogYW55O1xuICBzZWxlY3RlZDogYW55O1xuICBtb2RlbDogYW55O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuICBmaWx0ZXJUZXJtOiBzdHJpbmcgPSAnJztcbiAgZmlsdGVyVGVybVRpbWVvdXQ7XG4gIGZpbHRlcmVkT3B0aW9uczogYW55O1xuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBFbGVtZW50IGZvciB0aGUgcGFuZWwgY29udGFpbmluZyB0aGUgYXV0b2NvbXBsZXRlIG9wdGlvbnMuICovXG4gIEBWaWV3Q2hpbGQoTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSlcbiAgb3ZlcmxheTogTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25FbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgZHJvcGRvd246IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSxcbiAgICBwdWJsaWMgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQpLnN1YnNjcmliZSgob3JpZ2luKSA9PlxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgaWYgKG9yaWdpbiA9PT0gJ2tleWJvYXJkJyAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMub3BlblBhbmVsKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICk7XG4gICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLnJlYWRvbmx5ID0gdGhpcy5yZWFkb25seSA9PT0gdHJ1ZTtcbiAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5sZW5ndGggJiYgdHlwZW9mIHRoaXMub3B0aW9uc1swXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5vcHRpb25zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogaXRlbSwgbGFiZWw6IGl0ZW0gfTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9ICh0aGlzLm9wdGlvbnMgfHwgW10pXG4gICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4gIWl0ZW0ucmVhZE9ubHk7XG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uZWxlbWVudCxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5tb2RlbCAmJiAhdGhpcy5jcmVhdGVkSXRlbSkge1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jcmVhdGVkSXRlbSkge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMub3B0aW9ucy5maW5kKChpKSA9PiBpLmxhYmVsID09PSB0aGlzLmNyZWF0ZWRJdGVtKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5vcHRpb25zLmluZGV4T2YoaXRlbSk7XG4gICAgICB0aGlzLnNlbGVjdChpdGVtLCBpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLm1vZGVsKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICAvKiogQkVHSU46IENvbnZpZW5pZW50IFBhbmVsIE1ldGhvZHMuICovXG4gIG9wZW5QYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXkub3BlblBhbmVsKCk7XG4gIH1cblxuICBjbG9zZVBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheS5jbG9zZVBhbmVsKCk7XG4gIH1cblxuICB0b2dnbGVQYW5lbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMub3BlblBhbmVsKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHBhbmVsT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5wYW5lbE9wZW47XG4gIH1cbiAgLyoqIEVORDogQ29udmVuaWVudCBQYW5lbCBNZXRob2RzLiAqL1xuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBjbG9zZXMgdGhlIHBhbmVsLCBhbmQgaWYgYSB2YWx1ZSBpcyBzcGVjaWZpZWQsIGFsc28gc2V0cyB0aGUgYXNzb2NpYXRlZFxuICAgKiBjb250cm9sIHRvIHRoYXQgdmFsdWUuIEl0IHdpbGwgYWxzbyBtYXJrIHRoZSBjb250cm9sIGFzIGRpcnR5IGlmIHRoaXMgaW50ZXJhY3Rpb25cbiAgICogc3RlbW1lZCBmcm9tIHRoZSB1c2VyLlxuICAgKi9cbiAgc2V0VmFsdWVBbmRDbG9zZShldmVudDogYW55IHwgbnVsbCk6IHZvaWQge1xuICAgIGlmIChldmVudC52YWx1ZSAmJiBldmVudC5pbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLnNlbGVjdChldmVudC52YWx1ZSwgZXZlbnQuaW5kZXgpO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIHNlbGVjdChvcHRpb24sIGksIGZpcmVFdmVudHM6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IG9wdGlvbjtcbiAgICB0aGlzLnNlbGVjdGVkLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5lbXB0eSA9IGZhbHNlO1xuICAgIGlmIChmaXJlRXZlbnRzKSB7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5zZWxlY3RlZC52YWx1ZSk7XG4gICAgICB0aGlzLm9uU2VsZWN0LmVtaXQoeyBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZC52YWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZWxlY3RlZC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZCA9IHtcbiAgICAgIGxhYmVsOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy5oZWFkZXIgPSB7XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgdmFsdWU6ICcnLFxuICAgIH07XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gLTE7XG4gICAgdGhpcy5lbXB0eSA9IHRydWU7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgLy8gVG8gcHJldmVudCBkZWZhdWx0IHdpbmRvdyBzY3JvbGxpbmdcbiAgICBpZiAoW0tleUNvZGVzLlVQLCBLZXlDb2Rlcy5ET1dOXS5pbmNsdWRlcyhldmVudC5rZXlDb2RlKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKFtLZXlDb2Rlcy5FU0MsIEtleUNvZGVzLlRBQl0uaW5jbHVkZXMoZXZlbnQua2V5Q29kZSkpIHtcbiAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRU5URVIpIHtcbiAgICAgIGlmICh0aGlzLmhlYWRlci5vcGVuICYmIHRoaXMuaGVhZGVyLnZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2F2ZUhlYWRlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZUFuZENsb3NlKHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy5maWx0ZXJlZE9wdGlvbnNbdGhpcy5zZWxlY3RlZEluZGV4XSxcbiAgICAgICAgICBpbmRleDogdGhpcy5zZWxlY3RlZEluZGV4LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlVQKSB7XG4gICAgICBpZiAoIXRoaXMucGFuZWxPcGVuKSB7XG4gICAgICAgIHRoaXMub3BlblBhbmVsKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID4gMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXgtLTtcbiAgICAgICAgdGhpcy5zZWxlY3QodGhpcy5maWx0ZXJlZE9wdGlvbnNbdGhpcy5zZWxlY3RlZEluZGV4XSwgdGhpcy5zZWxlY3RlZEluZGV4KTtcbiAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5ET1dOKSB7XG4gICAgICBpZiAoIXRoaXMucGFuZWxPcGVuKSB7XG4gICAgICAgIHRoaXMub3BlblBhbmVsKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4IDwgdGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXgrKztcbiAgICAgICAgdGhpcy5zZWxlY3QodGhpcy5maWx0ZXJlZE9wdGlvbnNbdGhpcy5zZWxlY3RlZEluZGV4XSwgdGhpcy5zZWxlY3RlZEluZGV4KTtcbiAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKCk7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlci5vcGVuKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVIZWFkZXIobnVsbCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5VUCAmJiB0aGlzLnNlbGVjdGVkSW5kZXggPT09IDApIHtcbiAgICAgIGlmICghdGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleC0tO1xuICAgICAgdGhpcy50b2dnbGVIZWFkZXIobnVsbCwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmICgoZXZlbnQua2V5Q29kZSA+PSA2NSAmJiBldmVudC5rZXlDb2RlIDw9IDkwKSB8fCBldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5TUEFDRSkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlNQQUNFKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMucGFuZWxPcGVuKSB7XG4gICAgICAgIHRoaXMub3BlblBhbmVsKCk7XG4gICAgICB9XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5maWx0ZXJUZXJtVGltZW91dCk7XG4gICAgICB0aGlzLmZpbHRlclRlcm1UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyVGVybSA9ICcnO1xuICAgICAgfSwgMjAwMCk7XG4gICAgICBjb25zdCBjaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5rZXlDb2RlKTtcbiAgICAgIHRoaXMuZmlsdGVyVGVybSA9IHRoaXMuZmlsdGVyVGVybS5jb25jYXQoY2hhcik7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5maWx0ZXJlZE9wdGlvbnMuZmluZCgoaSkgPT4gaS5sYWJlbC50b1VwcGVyQ2FzZSgpLmluZGV4T2YodGhpcy5maWx0ZXJUZXJtKSA9PT0gMCk7XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICB0aGlzLnNlbGVjdChpdGVtLCB0aGlzLmZpbHRlcmVkT3B0aW9ucy5pbmRleE9mKGl0ZW0pKTtcbiAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChbS2V5Q29kZXMuQkFDS1NQQUNFLCBLZXlDb2Rlcy5ERUxFVEVdLmluY2x1ZGVzKGV2ZW50LmtleUNvZGUpKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5maWx0ZXJUZXJtVGltZW91dCk7XG4gICAgICB0aGlzLmZpbHRlclRlcm1UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyVGVybSA9ICcnO1xuICAgICAgfSwgMjAwMCk7XG4gICAgICB0aGlzLmZpbHRlclRlcm0gPSB0aGlzLmZpbHRlclRlcm0uc2xpY2UoMCwgLTEpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvU2VsZWN0ZWQoKSB7XG4gICAgdGhpcy5zY3JvbGxUb0luZGV4KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gIH1cblxuICBzY3JvbGxUb0luZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQ7XG4gICAgY29uc3QgbGlzdCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5vdm8tc2VsZWN0LWxpc3QnKTtcbiAgICBjb25zdCBpdGVtcyA9IGxpc3QucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICBjb25zdCBpdGVtID0gaXRlbXNbdGhpcy5oZWFkZXJDb25maWcgPyBpbmRleCArIDEgOiBpbmRleF07XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGxpc3Quc2Nyb2xsVG9wID0gaXRlbS5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlSGVhZGVyKGV2ZW50LCBmb3JjZVZhbHVlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgLy8gUmV2ZXJzZSB0aGUgYWN0aXZlIHByb3BlcnR5IChpZiBmb3JjZVZhbHVlLCB1c2UgdGhhdClcbiAgICB0aGlzLmhlYWRlciA9IHtcbiAgICAgIG9wZW46IGZvcmNlVmFsdWUgIT09IHVuZGVmaW5lZCA/IGZvcmNlVmFsdWUgOiAhdGhpcy5oZWFkZXIub3BlbixcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHZhbGlkOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICBoaWdobGlnaHQobWF0Y2gsIHF1ZXJ5KSB7XG4gICAgLy8gUmVwbGFjZXMgdGhlIGNhcHR1cmUgc3RyaW5nIHdpdGggYSB0aGUgc2FtZSBzdHJpbmcgaW5zaWRlIG9mIGEgXCJzdHJvbmdcIiB0YWdcbiAgICByZXR1cm4gcXVlcnkgPyBtYXRjaC5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5lc2NhcGVSZWdleHAocXVlcnkpLCAnZ2knKSwgJzxzdHJvbmc+JCY8L3N0cm9uZz4nKSA6IG1hdGNoO1xuICB9XG5cbiAgZXNjYXBlUmVnZXhwKHF1ZXJ5VG9Fc2NhcGUpIHtcbiAgICAvLyBFeDogaWYgdGhlIGNhcHR1cmUgaXMgXCJhXCIgdGhlIHJlc3VsdCB3aWxsIGJlIFxcYVxuICAgIHJldHVybiBxdWVyeVRvRXNjYXBlLnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9nLCAnXFxcXCQxJyk7XG4gIH1cblxuICBzYXZlSGVhZGVyKCkge1xuICAgIGlmICh0aGlzLmhlYWRlci52YWx1ZSkge1xuICAgICAgdGhpcy5oZWFkZXJDb25maWcub25TYXZlKHRoaXMuaGVhZGVyLnZhbHVlKTtcbiAgICAgIHRoaXMuY3JlYXRlZEl0ZW0gPSB0aGlzLmhlYWRlci52YWx1ZTtcbiAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhlYWRlci52YWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICBsZXQgaXRlbSA9IHRoaXMuZmlsdGVyZWRPcHRpb25zLmZpbmQoKGkpID0+IGkudmFsdWUgPT09IG1vZGVsIHx8IChtb2RlbCAmJiBpLnZhbHVlID09PSBtb2RlbC5pZCkpO1xuICAgICAgaWYgKCFpdGVtICYmICFIZWxwZXJzLmlzRW1wdHkobW9kZWwpKSB7XG4gICAgICAgIGl0ZW0gPSB7XG4gICAgICAgICAgbGFiZWw6IG1vZGVsLFxuICAgICAgICAgIHZhbHVlOiBtb2RlbCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFpdGVtLnJlYWRPbmx5KSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnVuc2hpZnQoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KGl0ZW0sIHRoaXMuZmlsdGVyZWRPcHRpb25zLmluZGV4T2YoaXRlbSksIGZhbHNlKTtcbiAgICAgICAgdGhpcy5lbXB0eSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG59XG4iXX0=