// NG
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, NgZone, Output, ViewChild, } from '@angular/core';
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
const _c0 = ["dropdownElement"];
function NovoSelectElement_li_7_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function NovoSelectElement_li_7_button_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); ctx_r5.toggleHeader($event); return false; });
    i0.ɵɵelement(1, "i", 11);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u00A0", ctx_r3.headerConfig.label, " ");
} }
const _c1 = function (a0) { return { active: a0 }; };
const _c2 = function (a0) { return { invalid: a0 }; };
function NovoSelectElement_li_7_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "input", 13);
    i0.ɵɵlistener("ngModelChange", function NovoSelectElement_li_7_div_2_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.header.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "footer");
    i0.ɵɵelementStart(3, "button", 14);
    i0.ɵɵlistener("click", function NovoSelectElement_li_7_div_2_Template_button_click_3_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.toggleHeader($event, false); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 15);
    i0.ɵɵlistener("click", function NovoSelectElement_li_7_div_2_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r8); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.saveHeader(); });
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
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
    const ctx_r1 = i0.ɵɵnextContext();
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
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 16);
    i0.ɵɵlistener("click", function NovoSelectElement_li_8_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r15); const option_r11 = ctx.$implicit; const i_r12 = ctx.index; const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.setValueAndClose({ value: option_r11, index: i_r12 }); });
    i0.ɵɵelement(1, "span", 17);
    i0.ɵɵtemplate(2, NovoSelectElement_li_8_i_2_Template, 1, 0, "i", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r11 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c1, option_r11.active));
    i0.ɵɵattribute("data-automation-value", option_r11.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", ctx_r2.highlight(option_r11.label, ctx_r2.filterTerm), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", option_r11.active);
} }
const _c3 = ["*"];
// Value accessor for the component (supports ngModel)
const SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoSelectElement),
    multi: true,
};
export class NovoSelectElement {
    constructor(element, labels, ref, focusMonitor, ngZone) {
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
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.filterTerm = '';
        this.disabled = false;
    }
    ngOnInit() {
        this.focusMonitor.monitor(this.dropdown.nativeElement).subscribe((origin) => this.ngZone.run(() => {
            if (origin === 'keyboard' && !this.disabled) {
                this.openPanel();
            }
        }));
        this.ngOnChanges();
    }
    ngOnChanges(changes) {
        this.readonly = this.readonly === true;
        if (this.options && this.options.length && typeof this.options[0] === 'string') {
            this.filteredOptions = this.options.map((item) => {
                return { value: item, label: item };
            });
        }
        else {
            this.filteredOptions = (this.options || [])
                .filter((item) => {
                return !item.readOnly;
            })
                .map((element) => {
                return Object.assign(Object.assign({}, element), { active: false });
            });
        }
        if (!this.model && !this.createdItem) {
            this.clear();
        }
        else if (this.createdItem) {
            const item = this.options.find((i) => i.label === this.createdItem);
            const index = this.options.indexOf(item);
            this.select(item, index);
        }
        else {
            this.writeValue(this.model);
        }
        if (this.panelOpen) {
            this.openPanel();
        }
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.dropdown.nativeElement);
    }
    /** BEGIN: Convienient Panel Methods. */
    openPanel() {
        this.overlay.openPanel();
    }
    closePanel() {
        this.overlay.closePanel();
    }
    togglePanel() {
        if (this.panelOpen) {
            this.closePanel();
        }
        else {
            setTimeout(() => {
                this.dropdown.nativeElement.focus();
            });
            this.openPanel();
        }
    }
    get panelOpen() {
        return this.overlay && this.overlay.panelOpen;
    }
    /** END: Convenient Panel Methods. */
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     */
    setValueAndClose(event) {
        if (event.value && event.index >= 0) {
            this.select(event.value, event.index);
        }
        this.closePanel();
    }
    select(option, i, fireEvents = true) {
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
    }
    clear() {
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
    }
    onKeyDown(event) {
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
            this.filterTermTimeout = setTimeout(() => {
                this.filterTerm = '';
            }, 2000);
            const char = event.key;
            this.filterTerm = this.filterTerm.concat(char).toUpperCase();
            const item = this.filteredOptions.find((i) => i.label.toUpperCase().indexOf(this.filterTerm) === 0);
            if (item) {
                this.select(item, this.filteredOptions.indexOf(item));
                this.scrollToSelected();
            }
        }
        else if ([KeyCodes.BACKSPACE, KeyCodes.DELETE].includes(event.keyCode)) {
            clearTimeout(this.filterTermTimeout);
            this.filterTermTimeout = setTimeout(() => {
                this.filterTerm = '';
            }, 2000);
            this.filterTerm = this.filterTerm.slice(0, -1);
        }
    }
    scrollToSelected() {
        this.scrollToIndex(this.selectedIndex);
    }
    scrollToIndex(index) {
        const element = this.overlay.overlayRef.overlayElement;
        const list = element.querySelector('.novo-select-list');
        const items = list.querySelectorAll('li');
        const item = items[this.headerConfig ? index + 1 : index];
        if (item) {
            list.scrollTop = item.offsetTop;
        }
    }
    toggleHeader(event, forceValue = false) {
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
    }
    highlight(match, query) {
        // Replaces the capture string with a the same string inside of a "strong" tag
        return query ? match.replace(new RegExp(this.escapeRegexp(query), 'gi'), '<strong>$&</strong>') : match;
    }
    escapeRegexp(queryToEscape) {
        // Ex: if the capture is "a" the result will be \a
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }
    saveHeader() {
        if (this.header.value) {
            this.headerConfig.onSave(this.header.value);
            this.createdItem = this.header.value;
            this.closePanel();
        }
        else {
            this.header.valid = false;
        }
    }
    writeValue(model) {
        this.model = model;
        if (this.options) {
            let item = this.filteredOptions.find((i) => i.value === model || (model && i.value === model.id)) || this.options.find((i) => i.value === model || (model && i.value === model.id));
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
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
}
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
        i0.ɵɵpropertyInterpolate("tabIndex", ctx.disabled ? -1 : 0);
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSelectElement, [{
        type: Component,
        args: [{
                selector: 'novo-select',
                providers: [SELECT_VALUE_ACCESSOR],
                template: `
    <div #dropdownElement (click)="togglePanel(); (false)" tabIndex="{{ disabled ? -1 : 0 }}" type="button" [class.empty]="empty">
      {{ selected.label }}<i class="bhi-collapse"></i>
    </div>
    <novo-overlay-template [parent]="element" position="center" (closing)="dropdown.nativeElement.focus()">
      <ul class="novo-select-list" tabIndex="-1" [class.header]="headerConfig" [class.active]="panelOpen">
        <ng-content></ng-content>
        <li *ngIf="headerConfig" class="select-header" [class.open]="header.open">
          <button *ngIf="!header.open" (click)="toggleHeader($event); (false)" tabIndex="-1" type="button" class="header">
            <i class="bhi-add-thin"></i>&nbsp;{{ headerConfig.label }}
          </button>
          <div *ngIf="header.open" [ngClass]="{ active: header.open }">
            <input
              autofocus
              type="text"
              [placeholder]="headerConfig.placeholder"
              [attr.id]="name"
              autocomplete="false"
              [(ngModel)]="header.value"
              [ngClass]="{ invalid: !header.valid }"
            />
            <footer>
              <button (click)="toggleHeader($event, false)">{{ labels.cancel }}</button>
              <button (click)="saveHeader()" class="primary">{{ labels.save }}</button>
            </footer>
          </div>
        </li>
        <li
          *ngFor="let option of filteredOptions; let i = index"
          [ngClass]="{ active: option.active }"
          (click)="setValueAndClose({ value: option, index: i })"
          [attr.data-automation-value]="option.label"
        >
          <span [innerHtml]="highlight(option.label, filterTerm)"></span> <i *ngIf="option.active" class="bhi-check"></i>
        </li>
      </ul>
    </novo-overlay-template>
  `,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NlbGVjdC9TZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSztBQUNMLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFJTixNQUFNLEVBRU4sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE1BQU07QUFDTixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7OztJQW9CeEQsa0NBQ0U7SUFEMkIsME1BQWdDLEtBQUssSUFBRTtJQUNsRSx3QkFBNEI7SUFBQSxZQUM5QjtJQUFBLGlCQUFTOzs7SUFEcUIsZUFDOUI7SUFEOEIsK0RBQzlCOzs7Ozs7SUFDQSwrQkFDRTtJQUFBLGlDQVNBO0lBSEUseU5BQTBCO0lBTjVCLGlCQVNBO0lBQUEsOEJBQ0U7SUFBQSxrQ0FBOEM7SUFBdEMsc01BQThCLEtBQUssS0FBRTtJQUFDLFlBQW1CO0lBQUEsaUJBQVM7SUFDMUUsa0NBQStDO0lBQXZDLDZMQUFzQjtJQUFpQixZQUFpQjtJQUFBLGlCQUFTO0lBQzNFLGlCQUFTO0lBQ1gsaUJBQU07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O1FBRWxFLGVBQW9CO1FBQXBCLHVDQUFvQjtRQXFCdEIsZUFBcUQ7UUFBckQsNkNBQXFEOztrREFjbEQsaUJBQWlCO2NBN0M3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQ1Q7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLFdBQVcsRUFBRSxtQkFBbUI7aUJBQ2pDO2FBQ0Y7NEtBR0MsSUFBSTtrQkFESCxLQUFLO1lBR04sT0FBTztrQkFETixLQUFLO1lBR04sV0FBVztrQkFEVixLQUFLO1lBR04sUUFBUTtrQkFEUCxLQUFLO1lBR04sWUFBWTtrQkFEWCxLQUFLO1lBR04sUUFBUTtrQkFEUCxNQUFNO1lBc0JQLE9BQU87a0JBRE4sU0FBUzttQkFBQyw0QkFBNEIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFHekQsUUFBUTtrQkFEUCxTQUFTO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQWdJOUMsU0FBUztrQkFEUixZQUFZO21CQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gJy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG4vLyBBcHBcbmltcG9ydCB7IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9vdmVybGF5L092ZXJsYXknO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IFNFTEVDVF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9TZWxlY3RFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNlbGVjdCcsXG4gIHByb3ZpZGVyczogW1NFTEVDVF9WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAjZHJvcGRvd25FbGVtZW50IChjbGljayk9XCJ0b2dnbGVQYW5lbCgpOyAoZmFsc2UpXCIgdGFiSW5kZXg9XCJ7eyBkaXNhYmxlZCA/IC0xIDogMCB9fVwiIHR5cGU9XCJidXR0b25cIiBbY2xhc3MuZW1wdHldPVwiZW1wdHlcIj5cbiAgICAgIHt7IHNlbGVjdGVkLmxhYmVsIH19PGkgY2xhc3M9XCJiaGktY29sbGFwc2VcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgPG5vdm8tb3ZlcmxheS10ZW1wbGF0ZSBbcGFyZW50XT1cImVsZW1lbnRcIiBwb3NpdGlvbj1cImNlbnRlclwiIChjbG9zaW5nKT1cImRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKVwiPlxuICAgICAgPHVsIGNsYXNzPVwibm92by1zZWxlY3QtbGlzdFwiIHRhYkluZGV4PVwiLTFcIiBbY2xhc3MuaGVhZGVyXT1cImhlYWRlckNvbmZpZ1wiIFtjbGFzcy5hY3RpdmVdPVwicGFuZWxPcGVuXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPGxpICpuZ0lmPVwiaGVhZGVyQ29uZmlnXCIgY2xhc3M9XCJzZWxlY3QtaGVhZGVyXCIgW2NsYXNzLm9wZW5dPVwiaGVhZGVyLm9wZW5cIj5cbiAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiIWhlYWRlci5vcGVuXCIgKGNsaWNrKT1cInRvZ2dsZUhlYWRlcigkZXZlbnQpOyAoZmFsc2UpXCIgdGFiSW5kZXg9XCItMVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktYWRkLXRoaW5cIj48L2k+Jm5ic3A7e3sgaGVhZGVyQ29uZmlnLmxhYmVsIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiAqbmdJZj1cImhlYWRlci5vcGVuXCIgW25nQ2xhc3NdPVwieyBhY3RpdmU6IGhlYWRlci5vcGVuIH1cIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiaGVhZGVyQ29uZmlnLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgW2F0dHIuaWRdPVwibmFtZVwiXG4gICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJoZWFkZXIudmFsdWVcIlxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7IGludmFsaWQ6ICFoZWFkZXIudmFsaWQgfVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlSGVhZGVyKCRldmVudCwgZmFsc2UpXCI+e3sgbGFiZWxzLmNhbmNlbCB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJzYXZlSGVhZGVyKClcIiBjbGFzcz1cInByaW1hcnlcIj57eyBsYWJlbHMuc2F2ZSB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaVxuICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZmlsdGVyZWRPcHRpb25zOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ7IGFjdGl2ZTogb3B0aW9uLmFjdGl2ZSB9XCJcbiAgICAgICAgICAoY2xpY2spPVwic2V0VmFsdWVBbmRDbG9zZSh7IHZhbHVlOiBvcHRpb24sIGluZGV4OiBpIH0pXCJcbiAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24tdmFsdWVdPVwib3B0aW9uLmxhYmVsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG9wdGlvbi5sYWJlbCwgZmlsdGVyVGVybSlcIj48L3NwYW4+IDxpICpuZ0lmPVwib3B0aW9uLmFjdGl2ZVwiIGNsYXNzPVwiYmhpLWNoZWNrXCI+PC9pPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L25vdm8tb3ZlcmxheS10ZW1wbGF0ZT5cbiAgYCxcbiAgaG9zdDoge1xuICAgICcoa2V5ZG93biknOiAnb25LZXlEb3duKCRldmVudCknLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2VsZWN0RWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBvcHRpb25zOiBBcnJheTxhbnk+O1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nID0gJ1NlbGVjdC4uLic7XG4gIEBJbnB1dCgpXG4gIHJlYWRvbmx5OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBoZWFkZXJDb25maWc6IGFueTtcbiAgQE91dHB1dCgpXG4gIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBzZWxlY3RlZEluZGV4OiBudW1iZXIgPSAtMTtcbiAgZW1wdHk6IGJvb2xlYW4gPSB0cnVlO1xuICBoZWFkZXI6IGFueSA9IHtcbiAgICBvcGVuOiBmYWxzZSxcbiAgICB2YWxpZDogdHJ1ZSxcbiAgICB2YWx1ZTogJycsXG4gIH07XG4gIGNyZWF0ZWRJdGVtOiBhbnk7XG4gIHNlbGVjdGVkOiBhbnk7XG4gIG1vZGVsOiBhbnk7XG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBmaWx0ZXJUZXJtOiBzdHJpbmcgPSAnJztcbiAgZmlsdGVyVGVybVRpbWVvdXQ7XG4gIGZpbHRlcmVkT3B0aW9uczogYW55O1xuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBFbGVtZW50IGZvciB0aGUgcGFuZWwgY29udGFpbmluZyB0aGUgYXV0b2NvbXBsZXRlIG9wdGlvbnMuICovXG4gIEBWaWV3Q2hpbGQoTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSlcbiAgb3ZlcmxheTogTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25FbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgZHJvcGRvd246IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSxcbiAgICBwdWJsaWMgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudCkuc3Vic2NyaWJlKChvcmlnaW4pID0+XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICBpZiAob3JpZ2luID09PSAna2V5Ym9hcmQnICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMucmVhZG9ubHkgPSB0aGlzLnJlYWRvbmx5ID09PSB0cnVlO1xuICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmxlbmd0aCAmJiB0eXBlb2YgdGhpcy5vcHRpb25zWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiBpdGVtLCBsYWJlbDogaXRlbSB9O1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gKHRoaXMub3B0aW9ucyB8fCBbXSlcbiAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiAhaXRlbS5yZWFkT25seTtcbiAgICAgICAgfSlcbiAgICAgICAgLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5lbGVtZW50LFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm1vZGVsICYmICF0aGlzLmNyZWF0ZWRJdGVtKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNyZWF0ZWRJdGVtKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5vcHRpb25zLmZpbmQoKGkpID0+IGkubGFiZWwgPT09IHRoaXMuY3JlYXRlZEl0ZW0pO1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLm9wdGlvbnMuaW5kZXhPZihpdGVtKTtcbiAgICAgIHRoaXMuc2VsZWN0KGl0ZW0sIGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMubW9kZWwpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgIHRoaXMub3BlblBhbmVsKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIC8qKiBCRUdJTjogQ29udmllbmllbnQgUGFuZWwgTWV0aG9kcy4gKi9cbiAgb3BlblBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheS5vcGVuUGFuZWwoKTtcbiAgfVxuXG4gIGNsb3NlUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5LmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIHRvZ2dsZVBhbmVsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhbmVsT3Blbikge1xuICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgcGFuZWxPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5LnBhbmVsT3BlbjtcbiAgfVxuICAvKiogRU5EOiBDb252ZW5pZW50IFBhbmVsIE1ldGhvZHMuICovXG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGNsb3NlcyB0aGUgcGFuZWwsIGFuZCBpZiBhIHZhbHVlIGlzIHNwZWNpZmllZCwgYWxzbyBzZXRzIHRoZSBhc3NvY2lhdGVkXG4gICAqIGNvbnRyb2wgdG8gdGhhdCB2YWx1ZS4gSXQgd2lsbCBhbHNvIG1hcmsgdGhlIGNvbnRyb2wgYXMgZGlydHkgaWYgdGhpcyBpbnRlcmFjdGlvblxuICAgKiBzdGVtbWVkIGZyb20gdGhlIHVzZXIuXG4gICAqL1xuICBzZXRWYWx1ZUFuZENsb3NlKGV2ZW50OiBhbnkgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LnZhbHVlICYmIGV2ZW50LmluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0KGV2ZW50LnZhbHVlLCBldmVudC5pbmRleCk7XG4gICAgfVxuICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICB9XG5cbiAgc2VsZWN0KG9wdGlvbiwgaSwgZmlyZUV2ZW50czogYm9vbGVhbiA9IHRydWUpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZWxlY3RlZC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaTtcbiAgICB0aGlzLnNlbGVjdGVkID0gb3B0aW9uO1xuICAgIHRoaXMuc2VsZWN0ZWQuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmVtcHR5ID0gZmFsc2U7XG4gICAgaWYgKGZpcmVFdmVudHMpIHtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLnNlbGVjdGVkLnZhbHVlKTtcbiAgICAgIHRoaXMub25TZWxlY3QuZW1pdCh7IHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkLnZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkID0ge1xuICAgICAgbGFiZWw6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLmhlYWRlciA9IHtcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICB2YWx1ZTogJycsXG4gICAgfTtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICB0aGlzLmVtcHR5ID0gdHJ1ZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBUbyBwcmV2ZW50IGRlZmF1bHQgd2luZG93IHNjcm9sbGluZ1xuICAgIGlmIChbS2V5Q29kZXMuVVAsIEtleUNvZGVzLkRPV05dLmluY2x1ZGVzKGV2ZW50LmtleUNvZGUpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoW0tleUNvZGVzLkVTQywgS2V5Q29kZXMuVEFCXS5pbmNsdWRlcyhldmVudC5rZXlDb2RlKSkge1xuICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FTlRFUikge1xuICAgICAgaWYgKHRoaXMuaGVhZGVyLm9wZW4gJiYgdGhpcy5oZWFkZXIudmFsdWUpIHtcbiAgICAgICAgdGhpcy5zYXZlSGVhZGVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFZhbHVlQW5kQ2xvc2Uoe1xuICAgICAgICAgIHZhbHVlOiB0aGlzLmZpbHRlcmVkT3B0aW9uc1t0aGlzLnNlbGVjdGVkSW5kZXhdLFxuICAgICAgICAgIGluZGV4OiB0aGlzLnNlbGVjdGVkSW5kZXgsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuVVApIHtcbiAgICAgIGlmICghdGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPiAwKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleC0tO1xuICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLmZpbHRlcmVkT3B0aW9uc1t0aGlzLnNlbGVjdGVkSW5kZXhdLCB0aGlzLnNlbGVjdGVkSW5kZXgpO1xuICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkRPV04pIHtcbiAgICAgIGlmICghdGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPCB0aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCsrO1xuICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLmZpbHRlcmVkT3B0aW9uc1t0aGlzLnNlbGVjdGVkSW5kZXhdLCB0aGlzLnNlbGVjdGVkSW5kZXgpO1xuICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQoKTtcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyLm9wZW4pIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUhlYWRlcihudWxsLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlVQICYmIHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gMCkge1xuICAgICAgaWYgKCF0aGlzLnBhbmVsT3Blbikge1xuICAgICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4LS07XG4gICAgICB0aGlzLnRvZ2dsZUhlYWRlcihudWxsLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKChldmVudC5rZXlDb2RlID49IDY1ICYmIGV2ZW50LmtleUNvZGUgPD0gOTApIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlNQQUNFKSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuU1BBQ0UpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICAgIH1cbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZpbHRlclRlcm1UaW1lb3V0KTtcbiAgICAgIHRoaXMuZmlsdGVyVGVybVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJUZXJtID0gJyc7XG4gICAgICB9LCAyMDAwKTtcbiAgICAgIGNvbnN0IGNoYXIgPSBldmVudC5rZXk7XG4gICAgICB0aGlzLmZpbHRlclRlcm0gPSB0aGlzLmZpbHRlclRlcm0uY29uY2F0KGNoYXIpLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5maWx0ZXJlZE9wdGlvbnMuZmluZCgoaSkgPT4gaS5sYWJlbC50b1VwcGVyQ2FzZSgpLmluZGV4T2YodGhpcy5maWx0ZXJUZXJtKSA9PT0gMCk7XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICB0aGlzLnNlbGVjdChpdGVtLCB0aGlzLmZpbHRlcmVkT3B0aW9ucy5pbmRleE9mKGl0ZW0pKTtcbiAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChbS2V5Q29kZXMuQkFDS1NQQUNFLCBLZXlDb2Rlcy5ERUxFVEVdLmluY2x1ZGVzKGV2ZW50LmtleUNvZGUpKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5maWx0ZXJUZXJtVGltZW91dCk7XG4gICAgICB0aGlzLmZpbHRlclRlcm1UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyVGVybSA9ICcnO1xuICAgICAgfSwgMjAwMCk7XG4gICAgICB0aGlzLmZpbHRlclRlcm0gPSB0aGlzLmZpbHRlclRlcm0uc2xpY2UoMCwgLTEpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvU2VsZWN0ZWQoKSB7XG4gICAgdGhpcy5zY3JvbGxUb0luZGV4KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gIH1cblxuICBzY3JvbGxUb0luZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQ7XG4gICAgY29uc3QgbGlzdCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5vdm8tc2VsZWN0LWxpc3QnKTtcbiAgICBjb25zdCBpdGVtcyA9IGxpc3QucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICBjb25zdCBpdGVtID0gaXRlbXNbdGhpcy5oZWFkZXJDb25maWcgPyBpbmRleCArIDEgOiBpbmRleF07XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGxpc3Quc2Nyb2xsVG9wID0gaXRlbS5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlSGVhZGVyKGV2ZW50LCBmb3JjZVZhbHVlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgLy8gUmV2ZXJzZSB0aGUgYWN0aXZlIHByb3BlcnR5IChpZiBmb3JjZVZhbHVlLCB1c2UgdGhhdClcbiAgICB0aGlzLmhlYWRlciA9IHtcbiAgICAgIG9wZW46IGZvcmNlVmFsdWUgIT09IHVuZGVmaW5lZCA/IGZvcmNlVmFsdWUgOiAhdGhpcy5oZWFkZXIub3BlbixcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHZhbGlkOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICBoaWdobGlnaHQobWF0Y2gsIHF1ZXJ5KSB7XG4gICAgLy8gUmVwbGFjZXMgdGhlIGNhcHR1cmUgc3RyaW5nIHdpdGggYSB0aGUgc2FtZSBzdHJpbmcgaW5zaWRlIG9mIGEgXCJzdHJvbmdcIiB0YWdcbiAgICByZXR1cm4gcXVlcnkgPyBtYXRjaC5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5lc2NhcGVSZWdleHAocXVlcnkpLCAnZ2knKSwgJzxzdHJvbmc+JCY8L3N0cm9uZz4nKSA6IG1hdGNoO1xuICB9XG5cbiAgZXNjYXBlUmVnZXhwKHF1ZXJ5VG9Fc2NhcGUpIHtcbiAgICAvLyBFeDogaWYgdGhlIGNhcHR1cmUgaXMgXCJhXCIgdGhlIHJlc3VsdCB3aWxsIGJlIFxcYVxuICAgIHJldHVybiBxdWVyeVRvRXNjYXBlLnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9nLCAnXFxcXCQxJyk7XG4gIH1cblxuICBzYXZlSGVhZGVyKCkge1xuICAgIGlmICh0aGlzLmhlYWRlci52YWx1ZSkge1xuICAgICAgdGhpcy5oZWFkZXJDb25maWcub25TYXZlKHRoaXMuaGVhZGVyLnZhbHVlKTtcbiAgICAgIHRoaXMuY3JlYXRlZEl0ZW0gPSB0aGlzLmhlYWRlci52YWx1ZTtcbiAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhlYWRlci52YWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICBsZXQgaXRlbSA9IHRoaXMuZmlsdGVyZWRPcHRpb25zLmZpbmQoKGkpID0+IGkudmFsdWUgPT09IG1vZGVsIHx8IChtb2RlbCAmJiBpLnZhbHVlID09PSBtb2RlbC5pZCkpIHx8IHRoaXMub3B0aW9ucy5maW5kKChpKSA9PiBpLnZhbHVlID09PSBtb2RlbCB8fCAobW9kZWwgJiYgaS52YWx1ZSA9PT0gbW9kZWwuaWQpKTtcbiAgICAgIGlmICghaXRlbSAmJiAhSGVscGVycy5pc0VtcHR5KG1vZGVsKSkge1xuICAgICAgICBpdGVtID0ge1xuICAgICAgICAgIGxhYmVsOiBtb2RlbCxcbiAgICAgICAgICB2YWx1ZTogbW9kZWwsXG4gICAgICAgIH07XG4gICAgICAgIGlmICghaXRlbS5yZWFkT25seSkge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICB0aGlzLnNlbGVjdChpdGVtLCB0aGlzLmZpbHRlcmVkT3B0aW9ucy5pbmRleE9mKGl0ZW0pLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuZW1wdHkgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxufVxuIl19