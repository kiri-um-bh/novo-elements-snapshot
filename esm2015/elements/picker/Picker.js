// NG2
// Vendor
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild, ViewContainerRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ComponentUtils } from '../../utils/component-utils/ComponentUtils';
import { Helpers } from '../../utils/Helpers';
// APP
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
import { notify } from '../../utils/notifier/notifier.util';
import { NovoOverlayTemplateComponent } from '../overlay/Overlay';
import { PickerResults } from './extras/picker-results/PickerResults';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/component-utils/ComponentUtils";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "../overlay/Overlay";
const _c0 = ["results"];
const _c1 = ["input"];
function NovoPickerElement_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 8);
} }
function NovoPickerElement_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("bhi-", ctx_r1.config == null ? null : ctx_r1.config.entityIcon, " entity-icon ", ctx_r1.config == null ? null : ctx_r1.config.entityIcon, "");
} }
function NovoPickerElement_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 9);
} }
function NovoPickerElement_i_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 10);
    i0.ɵɵlistener("click", function NovoPickerElement_i_5_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.clearValue(true); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("entity-selected", (ctx_r4.config == null ? null : ctx_r4.config.entityIcon) && ctx_r4._value);
} }
const _c2 = ["*"];
// Value accessor for the component (supports ngModel)
const PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoPickerElement),
    multi: true,
};
/**
 * @description This class is the directive definition of the Picker. If you add and attribute of `picker` to an input,
 * it will create an instance of the picker which wraps the input in all of the picker HTML elements and functionality.
 * Picker should be added as a two-way bound ngModel instance `[(picker)]=""` in order to have the picker options
 * dynamically populate.
 */
export class NovoPickerElement {
    constructor(element, componentUtils, ref) {
        this.element = element;
        this.componentUtils = componentUtils;
        this.ref = ref;
        this.closeOnSelect = true;
        this.selected = [];
        // Deprecated
        this.appendToBody = false;
        // Deprecated
        this.parentScrollAction = 'close';
        // Side the dropdown will open
        this.side = 'left';
        // Autoselects the first option in the results
        this.autoSelectFirstOption = true;
        this._disablePickerInput = false;
        // Emitter for selects
        this.changed = new EventEmitter();
        this.select = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.typing = new EventEmitter();
        this.term = '';
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    // Disable from typing into the picker (result template does everything)
    set disablePickerInput(v) {
        this._disablePickerInput = coerceBooleanProperty(v);
    }
    get disablePickerInput() {
        return this._disablePickerInput;
    }
    ngOnInit() {
        if (this.overrideElement) {
            this.element = this.overrideElement;
        }
        if (this.appendToBody) {
            notify(`'appendToBody' has been deprecated. Please remove this attribute.`);
        }
        // Custom results template
        this.resultsComponent = this.config.resultsTemplate || PickerResults;
        // Get all distinct key up events from the input and only fire if long enough and distinct
        // let input = this.element.nativeElement.querySelector('input');
        const pasteObserver = fromEvent(this.input.nativeElement, 'paste').pipe(debounceTime(250), distinctUntilChanged());
        pasteObserver.subscribe((event) => this.onDebouncedKeyup(event), (err) => this.hideResults(err));
        const keyboardObserver = fromEvent(this.input.nativeElement, 'keyup').pipe(debounceTime(250), distinctUntilChanged());
        keyboardObserver.subscribe((event) => this.onDebouncedKeyup(event), (err) => this.hideResults(err));
    }
    onDebouncedKeyup(event) {
        if ([KeyCodes.ESC, KeyCodes.UP, KeyCodes.DOWN, KeyCodes.ENTER, KeyCodes.TAB].includes(event.keyCode)) {
            return;
        }
        this.show(event.target.value);
    }
    openPanel() {
        this.container.openPanel();
    }
    closePanel() {
        this.container.closePanel();
    }
    get panelOpen() {
        return this.container && this.container.panelOpen;
    }
    show(term) {
        this.openPanel();
        // Show the results inside
        this.showResults(term);
    }
    onKeyDown(event) {
        if (this.disablePickerInput) {
            Helpers.swallowEvent(event);
            return;
        }
        if (this.panelOpen && !this.disablePickerInput) {
            if (event.keyCode === KeyCodes.ESC || event.keyCode === KeyCodes.TAB) {
                this.hideResults();
                return;
            }
            if (event.keyCode === KeyCodes.UP) {
                this.popup.instance.prevActiveMatch();
                this.ref.markForCheck();
                return;
            }
            if (event.keyCode === KeyCodes.DOWN) {
                this.popup.instance.nextActiveMatch();
                this.ref.markForCheck();
                return;
            }
            if (event.keyCode === KeyCodes.ENTER) {
                const activeMatch = this.popup.instance.activeMatch;
                if (!this.selected.find((selected) => activeMatch && activeMatch.value && selected.value === activeMatch.value)) {
                    this.popup.instance.selectActiveMatch();
                    this.ref.markForCheck();
                }
                return;
            }
            if ((event.keyCode === KeyCodes.BACKSPACE || event.keyCode === KeyCodes.DELETE) && !Helpers.isBlank(this._value)) {
                this.clearValue(false);
                this.closePanel();
            }
            if (event.keyCode === KeyCodes.DELETE && Helpers.isBlank(this._value)) {
                this.clearValue(true);
            }
        }
    }
    clearValue(wipeTerm) {
        this._value = null;
        this.select.emit(this._value);
        this.changed.emit({ value: this._value, rawValue: { label: '', value: this._value } });
        this.onModelChange(this._value);
        if (wipeTerm) {
            this.term = '';
            this.hideResults();
        }
        this.ref.markForCheck();
    }
    /**
     * @description When the input's focus event is called this method calls the debounced function that displays the
     * results.
     */
    onFocus(event) {
        if (!this.panelOpen) {
            this.show();
        }
        this.focus.emit(event);
    }
    // Creates an instance of the results (called popup) and adds all the bindings to that instance.
    showResults(term) {
        // Update Matches
        if (this.popup) {
            // Update existing list or create the DOM element
            this.popup.instance.config = this.config;
            this.popup.instance.term = this.term;
            this.popup.instance.selected = this.selected;
            this.popup.instance.autoSelectFirstOption = this.autoSelectFirstOption;
            this.ref.markForCheck();
        }
        else {
            this.popup = this.componentUtils.append(this.resultsComponent, this.results);
            this.popup.instance.parent = this;
            this.popup.instance.config = this.config;
            this.popup.instance.term = this.term;
            this.popup.instance.selected = this.selected;
            this.popup.instance.autoSelectFirstOption = this.autoSelectFirstOption;
            this.popup.instance.overlay = this.container.overlayRef;
            this.ref.markForCheck();
        }
    }
    // Tells the overlay component to hide the picker results from the DOM without deleting the dynamically allocated popup instance created in
    // showResults. The popup instance will remain in memory from the first time the results are shown until this component is destroyed.
    hideResults(err) {
        this.closePanel();
        this.ref.markForCheck();
    }
    // Cleans up listeners for the popup - will get executed no matter how the popup is closed.
    onOverlayClosed() {
        if (this.popup && this.popup.instance && this.popup.instance.cleanUp) {
            this.popup.instance.cleanUp();
        }
    }
    // get accessor
    get value() {
        return this._value;
    }
    // set accessor including call the onchange callback
    set value(selected) {
        if (!selected) {
            this.term = '';
            this._value = null;
            this.onModelChange(this._value);
        }
        else if (selected.value !== this._value) {
            this.term = this.clearValueOnSelect ? '' : selected.label;
            this._value = selected.value;
            this.changed.emit({ value: selected.value, rawValue: { label: this.term, value: selected.value } });
            this.select.emit(selected);
            this.onModelChange(selected.value);
            if (this.popup) {
                this.popup.instance.selected = this.selected;
            }
        }
        else {
            this.changed.emit({ value: selected.value, rawValue: { label: this.term, value: this._value } });
            this.select.emit(selected);
        }
        this.ref.markForCheck();
    }
    // Makes sure to clear the model if the user clears the text box
    checkTerm(event) {
        this.typing.emit(event);
        if (!event || !event.length) {
            this._value = null;
            this.onModelChange(this._value);
        }
        this.ref.markForCheck();
    }
    // Set touched on blur
    onTouched(event) {
        this.onModelTouched();
        this.blur.emit(event);
    }
    // From ControlValueAccessor interface
    writeValue(value) {
        if (this.clearValueOnSelect) {
            this.term = '';
        }
        else {
            if (typeof value === 'string' && !this.config.useGetLabels) {
                this.term = value;
            }
            else if (value && value.label) {
                this.term = value.label;
            }
            else if (value && value.firstName) {
                this.term = `${value.firstName} ${value.lastName}`;
            }
            else if (value && value.name) {
                this.term = value.name;
            }
            else if (typeof this.config.getLabels === 'function') {
                this.config.getLabels(value).then((result) => {
                    if (result) {
                        this.term = result.length ? result[0].label || '' : result.label || '';
                    }
                    else {
                        this.term = value;
                    }
                    this.ref.markForCheck();
                });
            }
            else if (value && value.title) {
                this.term = value.title;
            }
            else {
                this.term = value || '';
            }
        }
        this._value = value;
        this.ref.markForCheck();
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(disabled) {
        this._disablePickerInput = disabled;
    }
}
NovoPickerElement.ɵfac = function NovoPickerElement_Factory(t) { return new (t || NovoPickerElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ComponentUtils), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
NovoPickerElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoPickerElement, selectors: [["novo-picker"]], viewQuery: function NovoPickerElement_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
        i0.ɵɵstaticViewQuery(NovoOverlayTemplateComponent, true);
        i0.ɵɵstaticViewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.results = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, inputs: { config: "config", placeholder: "placeholder", clearValueOnSelect: "clearValueOnSelect", closeOnSelect: "closeOnSelect", selected: "selected", appendToBody: "appendToBody", parentScrollSelector: "parentScrollSelector", parentScrollAction: "parentScrollAction", containerClass: "containerClass", side: "side", autoSelectFirstOption: "autoSelectFirstOption", overrideElement: "overrideElement", disablePickerInput: "disablePickerInput" }, outputs: { changed: "changed", select: "select", focus: "focus", blur: "blur", typing: "typing" }, features: [i0.ɵɵProvidersFeature([PICKER_VALUE_ACCESSOR])], ngContentSelectors: _c2, decls: 10, vars: 12, consts: [["class", "bhi-more", 4, "ngIf"], [3, "class", 4, "ngIf"], ["type", "text", "autocomplete", "off", 1, "picker-input", 3, "ngModel", "placeholder", "disabled", "ngModelChange", "keydown", "focus", "click", "blur"], ["input", ""], ["class", "bhi-search", 4, "ngIf"], ["class", "bhi-times", 3, "entity-selected", "click", 4, "ngIf"], ["position", "above-below", 1, "picker-results-container", 3, "parent", "closing"], ["results", ""], [1, "bhi-more"], [1, "bhi-search"], [1, "bhi-times", 3, "click"]], template: function NovoPickerElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, NovoPickerElement_i_0_Template, 1, 0, "i", 0);
        i0.ɵɵtemplate(1, NovoPickerElement_i_1_Template, 1, 4, "i", 1);
        i0.ɵɵelementStart(2, "input", 2, 3);
        i0.ɵɵlistener("ngModelChange", function NovoPickerElement_Template_input_ngModelChange_2_listener($event) { return ctx.term = $event; })("ngModelChange", function NovoPickerElement_Template_input_ngModelChange_2_listener($event) { return ctx.checkTerm($event); })("keydown", function NovoPickerElement_Template_input_keydown_2_listener($event) { return ctx.onKeyDown($event); })("focus", function NovoPickerElement_Template_input_focus_2_listener($event) { return ctx.onFocus($event); })("click", function NovoPickerElement_Template_input_click_2_listener($event) { return ctx.onFocus($event); })("blur", function NovoPickerElement_Template_input_blur_2_listener($event) { return ctx.onTouched($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, NovoPickerElement_i_4_Template, 1, 0, "i", 4);
        i0.ɵɵtemplate(5, NovoPickerElement_i_5_Template, 1, 2, "i", 5);
        i0.ɵɵelementStart(6, "novo-overlay-template", 6);
        i0.ɵɵlistener("closing", function NovoPickerElement_Template_novo_overlay_template_closing_6_listener() { return ctx.onOverlayClosed(); });
        i0.ɵɵelement(7, "span", null, 7);
        i0.ɵɵprojection(9);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", (ctx.config == null ? null : ctx.config.entityIcon) && !ctx._value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.config == null ? null : ctx.config.entityIcon) && ctx._value);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("entity-picker", ctx.config == null ? null : ctx.config.entityIcon)("entity-selected", (ctx.config == null ? null : ctx.config.entityIcon) && ctx._value);
        i0.ɵɵproperty("ngModel", ctx.term)("placeholder", ctx.placeholder)("disabled", ctx.disablePickerInput);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", (!ctx._value || ctx.clearValueOnSelect) && !ctx.disablePickerInput);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx._value && !ctx.clearValueOnSelect && !ctx.disablePickerInput);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("parent", ctx.element);
    } }, directives: [i2.NgIf, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.NovoOverlayTemplateComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoPickerElement, [{
        type: Component,
        args: [{
                selector: 'novo-picker',
                providers: [PICKER_VALUE_ACCESSOR],
                template: `
    <i class="bhi-more" *ngIf="config?.entityIcon && !_value"></i>
    <i class="bhi-{{ config?.entityIcon }} entity-icon {{ config?.entityIcon }}" *ngIf="config?.entityIcon && _value"></i>
    <input
      type="text"
      class="picker-input"
      [(ngModel)]="term"
      [class.entity-picker]="config?.entityIcon"
      [class.entity-selected]="config?.entityIcon && _value"
      (ngModelChange)="checkTerm($event)"
      [placeholder]="placeholder"
      (keydown)="onKeyDown($event)"
      (focus)="onFocus($event)"
      (click)="onFocus($event)"
      (blur)="onTouched($event)"
      autocomplete="off"
      #input
      [disabled]="disablePickerInput"
    />
    <i class="bhi-search" *ngIf="(!_value || clearValueOnSelect) && !disablePickerInput"></i>
    <i
      class="bhi-times"
      [class.entity-selected]="config?.entityIcon && _value"
      *ngIf="_value && !clearValueOnSelect && !disablePickerInput"
      (click)="clearValue(true)"
    ></i>
    <novo-overlay-template class="picker-results-container" [parent]="element" position="above-below" (closing)="onOverlayClosed()">
      <span #results></span>
      <ng-content></ng-content>
    </novo-overlay-template>
  `,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.ComponentUtils }, { type: i0.ChangeDetectorRef }]; }, { results: [{
            type: ViewChild,
            args: ['results', { read: ViewContainerRef, static: true }]
        }], config: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], clearValueOnSelect: [{
            type: Input
        }], closeOnSelect: [{
            type: Input
        }], selected: [{
            type: Input
        }], appendToBody: [{
            type: Input
        }], parentScrollSelector: [{
            type: Input
        }], parentScrollAction: [{
            type: Input
        }], containerClass: [{
            type: Input
        }], side: [{
            type: Input
        }], autoSelectFirstOption: [{
            type: Input
        }], overrideElement: [{
            type: Input
        }], disablePickerInput: [{
            type: Input
        }], changed: [{
            type: Output
        }], select: [{
            type: Output
        }], focus: [{
            type: Output
        }], blur: [{
            type: Output
        }], typing: [{
            type: Output
        }], container: [{
            type: ViewChild,
            args: [NovoOverlayTemplateComponent, { static: true }]
        }], input: [{
            type: ViewChild,
            args: ['input', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja2VyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGlja2VyL1BpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sU0FBUztBQUNULE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUVULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDNUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE1BQU07QUFDTixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTVELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7Ozs7O0lBbUJsRSx1QkFBOEQ7OztJQUM5RCxvQkFBc0g7OztJQUFuSCx3S0FBeUU7OztJQWlCNUUsdUJBQXlGOzs7O0lBQ3pGLDZCQUtLO0lBREgseUtBQW9CLElBQUksS0FBRTtJQUMzQixpQkFBSTs7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QUUsSUFBSSxFQUFFO1lBR2pELEtBQUs7a0JBRFosU0FBUzttQkFBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG4vLyBWZW5kb3JcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG4vLyBBUFBcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcbmltcG9ydCB7IG5vdGlmeSB9IGZyb20gJy4uLy4uL3V0aWxzL25vdGlmaWVyL25vdGlmaWVyLnV0aWwnO1xuaW1wb3J0IHsgTm92b0NvbnRyb2xDb25maWcgfSBmcm9tICcuLi9mb3JtL0Zvcm1Db250cm9scyc7XG5pbXBvcnQgeyBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vb3ZlcmxheS9PdmVybGF5JztcbmltcG9ydCB7IFBpY2tlclJlc3VsdHMgfSBmcm9tICcuL2V4dHJhcy9waWNrZXItcmVzdWx0cy9QaWNrZXJSZXN1bHRzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBQSUNLRVJfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvUGlja2VyRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBjbGFzcyBpcyB0aGUgZGlyZWN0aXZlIGRlZmluaXRpb24gb2YgdGhlIFBpY2tlci4gSWYgeW91IGFkZCBhbmQgYXR0cmlidXRlIG9mIGBwaWNrZXJgIHRvIGFuIGlucHV0LFxuICogaXQgd2lsbCBjcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIHBpY2tlciB3aGljaCB3cmFwcyB0aGUgaW5wdXQgaW4gYWxsIG9mIHRoZSBwaWNrZXIgSFRNTCBlbGVtZW50cyBhbmQgZnVuY3Rpb25hbGl0eS5cbiAqIFBpY2tlciBzaG91bGQgYmUgYWRkZWQgYXMgYSB0d28td2F5IGJvdW5kIG5nTW9kZWwgaW5zdGFuY2UgYFsocGlja2VyKV09XCJcImAgaW4gb3JkZXIgdG8gaGF2ZSB0aGUgcGlja2VyIG9wdGlvbnNcbiAqIGR5bmFtaWNhbGx5IHBvcHVsYXRlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXBpY2tlcicsXG4gIHByb3ZpZGVyczogW1BJQ0tFUl9WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgY2xhc3M9XCJiaGktbW9yZVwiICpuZ0lmPVwiY29uZmlnPy5lbnRpdHlJY29uICYmICFfdmFsdWVcIj48L2k+XG4gICAgPGkgY2xhc3M9XCJiaGkte3sgY29uZmlnPy5lbnRpdHlJY29uIH19IGVudGl0eS1pY29uIHt7IGNvbmZpZz8uZW50aXR5SWNvbiB9fVwiICpuZ0lmPVwiY29uZmlnPy5lbnRpdHlJY29uICYmIF92YWx1ZVwiPjwvaT5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIGNsYXNzPVwicGlja2VyLWlucHV0XCJcbiAgICAgIFsobmdNb2RlbCldPVwidGVybVwiXG4gICAgICBbY2xhc3MuZW50aXR5LXBpY2tlcl09XCJjb25maWc/LmVudGl0eUljb25cIlxuICAgICAgW2NsYXNzLmVudGl0eS1zZWxlY3RlZF09XCJjb25maWc/LmVudGl0eUljb24gJiYgX3ZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoZWNrVGVybSgkZXZlbnQpXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcbiAgICAgIChjbGljayk9XCJvbkZvY3VzKCRldmVudClcIlxuICAgICAgKGJsdXIpPVwib25Ub3VjaGVkKCRldmVudClcIlxuICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICNpbnB1dFxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgLz5cbiAgICA8aSBjbGFzcz1cImJoaS1zZWFyY2hcIiAqbmdJZj1cIighX3ZhbHVlIHx8IGNsZWFyVmFsdWVPblNlbGVjdCkgJiYgIWRpc2FibGVQaWNrZXJJbnB1dFwiPjwvaT5cbiAgICA8aVxuICAgICAgY2xhc3M9XCJiaGktdGltZXNcIlxuICAgICAgW2NsYXNzLmVudGl0eS1zZWxlY3RlZF09XCJjb25maWc/LmVudGl0eUljb24gJiYgX3ZhbHVlXCJcbiAgICAgICpuZ0lmPVwiX3ZhbHVlICYmICFjbGVhclZhbHVlT25TZWxlY3QgJiYgIWRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAoY2xpY2spPVwiY2xlYXJWYWx1ZSh0cnVlKVwiXG4gICAgPjwvaT5cbiAgICA8bm92by1vdmVybGF5LXRlbXBsYXRlIGNsYXNzPVwicGlja2VyLXJlc3VsdHMtY29udGFpbmVyXCIgW3BhcmVudF09XCJlbGVtZW50XCIgcG9zaXRpb249XCJhYm92ZS1iZWxvd1wiIChjbG9zaW5nKT1cIm9uT3ZlcmxheUNsb3NlZCgpXCI+XG4gICAgICA8c3BhbiAjcmVzdWx0cz48L3NwYW4+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9ub3ZvLW92ZXJsYXktdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9QaWNrZXJFbGVtZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gQ29udGFpbmVyIGZvciB0aGUgcmVzdWx0c1xuICBAVmlld0NoaWxkKCdyZXN1bHRzJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgcmVzdWx0czogVmlld0NvbnRhaW5lclJlZjtcblxuICBASW5wdXQoKVxuICBjb25maWc6IE5vdm9Db250cm9sQ29uZmlnWydjb25maWcnXTtcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KClcbiAgY2xlYXJWYWx1ZU9uU2VsZWN0OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBjbG9zZU9uU2VsZWN0OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgc2VsZWN0ZWQ6IEFycmF5PGFueT4gPSBbXTtcbiAgLy8gRGVwcmVjYXRlZFxuICBASW5wdXQoKVxuICBhcHBlbmRUb0JvZHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gRGVwcmVjYXRlZFxuICBASW5wdXQoKVxuICBwYXJlbnRTY3JvbGxTZWxlY3Rvcjogc3RyaW5nO1xuICAvLyBEZXByZWNhdGVkXG4gIEBJbnB1dCgpXG4gIHBhcmVudFNjcm9sbEFjdGlvbjogc3RyaW5nID0gJ2Nsb3NlJztcbiAgLy8gQ3VzdG9tIGNsYXNzIGZvciB0aGUgZHJvcGRvd24gY29udGFpbmVyXG4gIEBJbnB1dCgpXG4gIGNvbnRhaW5lckNsYXNzOiBzdHJpbmc7XG4gIC8vIFNpZGUgdGhlIGRyb3Bkb3duIHdpbGwgb3BlblxuICBASW5wdXQoKVxuICBzaWRlOiBzdHJpbmcgPSAnbGVmdCc7XG4gIC8vIEF1dG9zZWxlY3RzIHRoZSBmaXJzdCBvcHRpb24gaW4gdGhlIHJlc3VsdHNcbiAgQElucHV0KClcbiAgYXV0b1NlbGVjdEZpcnN0T3B0aW9uOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgb3ZlcnJpZGVFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIC8vIERpc2FibGUgZnJvbSB0eXBpbmcgaW50byB0aGUgcGlja2VyIChyZXN1bHQgdGVtcGxhdGUgZG9lcyBldmVyeXRoaW5nKVxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZVBpY2tlcklucHV0KHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlUGlja2VySW5wdXQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cblxuICBnZXQgZGlzYWJsZVBpY2tlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlUGlja2VySW5wdXQ7XG4gIH1cblxuICBwcml2YXRlIF9kaXNhYmxlUGlja2VySW5wdXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBFbWl0dGVyIGZvciBzZWxlY3RzXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHR5cGluZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZChOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwdWJsaWMgY29udGFpbmVyOiBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHByaXZhdGUgaW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgdGVybTogc3RyaW5nID0gJyc7XG4gIHJlc3VsdHNDb21wb25lbnQ6IGFueTtcbiAgcG9wdXA6IENvbXBvbmVudFJlZjxhbnk+O1xuICBfdmFsdWU6IGFueTtcbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMub3ZlcnJpZGVFbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLm92ZXJyaWRlRWxlbWVudDtcbiAgICB9XG4gICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICBub3RpZnkoYCdhcHBlbmRUb0JvZHknIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSByZW1vdmUgdGhpcyBhdHRyaWJ1dGUuYCk7XG4gICAgfVxuICAgIC8vIEN1c3RvbSByZXN1bHRzIHRlbXBsYXRlXG4gICAgdGhpcy5yZXN1bHRzQ29tcG9uZW50ID0gdGhpcy5jb25maWcucmVzdWx0c1RlbXBsYXRlIHx8IFBpY2tlclJlc3VsdHM7XG4gICAgLy8gR2V0IGFsbCBkaXN0aW5jdCBrZXkgdXAgZXZlbnRzIGZyb20gdGhlIGlucHV0IGFuZCBvbmx5IGZpcmUgaWYgbG9uZyBlbm91Z2ggYW5kIGRpc3RpbmN0XG4gICAgLy8gbGV0IGlucHV0ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICBjb25zdCBwYXN0ZU9ic2VydmVyID0gZnJvbUV2ZW50KHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCwgJ3Bhc3RlJykucGlwZShkZWJvdW5jZVRpbWUoMjUwKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgcGFzdGVPYnNlcnZlci5zdWJzY3JpYmUoXG4gICAgICAoZXZlbnQ6IENsaXBib2FyZEV2ZW50KSA9PiB0aGlzLm9uRGVib3VuY2VkS2V5dXAoZXZlbnQpLFxuICAgICAgKGVycikgPT4gdGhpcy5oaWRlUmVzdWx0cyhlcnIpLFxuICAgICk7XG4gICAgY29uc3Qga2V5Ym9hcmRPYnNlcnZlciA9IGZyb21FdmVudCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpLnBpcGUoZGVib3VuY2VUaW1lKDI1MCksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgIGtleWJvYXJkT2JzZXJ2ZXIuc3Vic2NyaWJlKFxuICAgICAgKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB0aGlzLm9uRGVib3VuY2VkS2V5dXAoZXZlbnQpLFxuICAgICAgKGVycikgPT4gdGhpcy5oaWRlUmVzdWx0cyhlcnIpLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIG9uRGVib3VuY2VkS2V5dXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQgfCBDbGlwYm9hcmRFdmVudCkge1xuICAgIGlmIChbS2V5Q29kZXMuRVNDLCBLZXlDb2Rlcy5VUCwgS2V5Q29kZXMuRE9XTiwgS2V5Q29kZXMuRU5URVIsIEtleUNvZGVzLlRBQl0uaW5jbHVkZXMoKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmtleUNvZGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2hvdygoZXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWUpO1xuICB9XG5cbiAgcHVibGljIG9wZW5QYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRhaW5lci5vcGVuUGFuZWwoKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZVBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMuY29udGFpbmVyLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGFuZWxPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRhaW5lci5wYW5lbE9wZW47XG4gIH1cblxuICBwcml2YXRlIHNob3codGVybT86IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMub3BlblBhbmVsKCk7XG4gICAgLy8gU2hvdyB0aGUgcmVzdWx0cyBpbnNpZGVcbiAgICB0aGlzLnNob3dSZXN1bHRzKHRlcm0pO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZVBpY2tlcklucHV0KSB7XG4gICAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnBhbmVsT3BlbiAmJiAhdGhpcy5kaXNhYmxlUGlja2VySW5wdXQpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FU0MgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuVEFCKSB7XG4gICAgICAgIHRoaXMuaGlkZVJlc3VsdHMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuVVApIHtcbiAgICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5wcmV2QWN0aXZlTWF0Y2goKTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkRPV04pIHtcbiAgICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5uZXh0QWN0aXZlTWF0Y2goKTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVOVEVSKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZU1hdGNoID0gdGhpcy5wb3B1cC5pbnN0YW5jZS5hY3RpdmVNYXRjaDtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkLmZpbmQoKHNlbGVjdGVkKSA9PiBhY3RpdmVNYXRjaCAmJiBhY3RpdmVNYXRjaC52YWx1ZSAmJiBzZWxlY3RlZC52YWx1ZSA9PT0gYWN0aXZlTWF0Y2gudmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5zZWxlY3RBY3RpdmVNYXRjaCgpO1xuICAgICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5CQUNLU1BBQ0UgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuREVMRVRFKSAmJiAhSGVscGVycy5pc0JsYW5rKHRoaXMuX3ZhbHVlKSkge1xuICAgICAgICB0aGlzLmNsZWFyVmFsdWUoZmFsc2UpO1xuICAgICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5ERUxFVEUgJiYgSGVscGVycy5pc0JsYW5rKHRoaXMuX3ZhbHVlKSkge1xuICAgICAgICB0aGlzLmNsZWFyVmFsdWUodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xlYXJWYWx1ZSh3aXBlVGVybSkge1xuICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiB0aGlzLl92YWx1ZSwgcmF3VmFsdWU6IHsgbGFiZWw6ICcnLCB2YWx1ZTogdGhpcy5fdmFsdWUgfSB9KTtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5fdmFsdWUpO1xuXG4gICAgaWYgKHdpcGVUZXJtKSB7XG4gICAgICB0aGlzLnRlcm0gPSAnJztcbiAgICAgIHRoaXMuaGlkZVJlc3VsdHMoKTtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFdoZW4gdGhlIGlucHV0J3MgZm9jdXMgZXZlbnQgaXMgY2FsbGVkIHRoaXMgbWV0aG9kIGNhbGxzIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkaXNwbGF5cyB0aGVcbiAgICogcmVzdWx0cy5cbiAgICovXG4gIG9uRm9jdXMoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIC8vIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIHJlc3VsdHMgKGNhbGxlZCBwb3B1cCkgYW5kIGFkZHMgYWxsIHRoZSBiaW5kaW5ncyB0byB0aGF0IGluc3RhbmNlLlxuICBzaG93UmVzdWx0cyh0ZXJtPzogYW55KSB7XG4gICAgLy8gVXBkYXRlIE1hdGNoZXNcbiAgICBpZiAodGhpcy5wb3B1cCkge1xuICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIGxpc3Qgb3IgY3JlYXRlIHRoZSBET00gZWxlbWVudFxuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UudGVybSA9IHRoaXMudGVybTtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2Uuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5hdXRvU2VsZWN0Rmlyc3RPcHRpb24gPSB0aGlzLmF1dG9TZWxlY3RGaXJzdE9wdGlvbjtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvcHVwID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmQodGhpcy5yZXN1bHRzQ29tcG9uZW50LCB0aGlzLnJlc3VsdHMpO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5wYXJlbnQgPSB0aGlzO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UudGVybSA9IHRoaXMudGVybTtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2Uuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5hdXRvU2VsZWN0Rmlyc3RPcHRpb24gPSB0aGlzLmF1dG9TZWxlY3RGaXJzdE9wdGlvbjtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2Uub3ZlcmxheSA9IHRoaXMuY29udGFpbmVyLm92ZXJsYXlSZWY7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvLyBUZWxscyB0aGUgb3ZlcmxheSBjb21wb25lbnQgdG8gaGlkZSB0aGUgcGlja2VyIHJlc3VsdHMgZnJvbSB0aGUgRE9NIHdpdGhvdXQgZGVsZXRpbmcgdGhlIGR5bmFtaWNhbGx5IGFsbG9jYXRlZCBwb3B1cCBpbnN0YW5jZSBjcmVhdGVkIGluXG4gIC8vIHNob3dSZXN1bHRzLiBUaGUgcG9wdXAgaW5zdGFuY2Ugd2lsbCByZW1haW4gaW4gbWVtb3J5IGZyb20gdGhlIGZpcnN0IHRpbWUgdGhlIHJlc3VsdHMgYXJlIHNob3duIHVudGlsIHRoaXMgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cbiAgaGlkZVJlc3VsdHMoZXJyPzogYW55KSB7XG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvLyBDbGVhbnMgdXAgbGlzdGVuZXJzIGZvciB0aGUgcG9wdXAgLSB3aWxsIGdldCBleGVjdXRlZCBubyBtYXR0ZXIgaG93IHRoZSBwb3B1cCBpcyBjbG9zZWQuXG4gIG9uT3ZlcmxheUNsb3NlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb3B1cCAmJiB0aGlzLnBvcHVwLmluc3RhbmNlICYmIHRoaXMucG9wdXAuaW5zdGFuY2UuY2xlYW5VcCkge1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5jbGVhblVwKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gZ2V0IGFjY2Vzc29yXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICAvLyBzZXQgYWNjZXNzb3IgaW5jbHVkaW5nIGNhbGwgdGhlIG9uY2hhbmdlIGNhbGxiYWNrXG4gIHNldCB2YWx1ZShzZWxlY3RlZCkge1xuICAgIGlmICghc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMudGVybSA9ICcnO1xuICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkLnZhbHVlICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy50ZXJtID0gdGhpcy5jbGVhclZhbHVlT25TZWxlY3QgPyAnJyA6IHNlbGVjdGVkLmxhYmVsO1xuICAgICAgdGhpcy5fdmFsdWUgPSBzZWxlY3RlZC52YWx1ZTtcbiAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHsgdmFsdWU6IHNlbGVjdGVkLnZhbHVlLCByYXdWYWx1ZTogeyBsYWJlbDogdGhpcy50ZXJtLCB2YWx1ZTogc2VsZWN0ZWQudmFsdWUgfSB9KTtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoc2VsZWN0ZWQpO1xuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHNlbGVjdGVkLnZhbHVlKTtcbiAgICAgIGlmICh0aGlzLnBvcHVwKSB7XG4gICAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2Uuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiBzZWxlY3RlZC52YWx1ZSwgcmF3VmFsdWU6IHsgbGFiZWw6IHRoaXMudGVybSwgdmFsdWU6IHRoaXMuX3ZhbHVlIH0gfSk7XG4gICAgICB0aGlzLnNlbGVjdC5lbWl0KHNlbGVjdGVkKTtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvLyBNYWtlcyBzdXJlIHRvIGNsZWFyIHRoZSBtb2RlbCBpZiB0aGUgdXNlciBjbGVhcnMgdGhlIHRleHQgYm94XG4gIGNoZWNrVGVybShldmVudCkge1xuICAgIHRoaXMudHlwaW5nLmVtaXQoZXZlbnQpO1xuICAgIGlmICghZXZlbnQgfHwgIWV2ZW50Lmxlbmd0aCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvLyBTZXQgdG91Y2hlZCBvbiBibHVyXG4gIG9uVG91Y2hlZChldmVudD86IEV2ZW50KSB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIC8vIEZyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLmNsZWFyVmFsdWVPblNlbGVjdCkge1xuICAgICAgdGhpcy50ZXJtID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICF0aGlzLmNvbmZpZy51c2VHZXRMYWJlbHMpIHtcbiAgICAgICAgdGhpcy50ZXJtID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLmxhYmVsKSB7XG4gICAgICAgIHRoaXMudGVybSA9IHZhbHVlLmxhYmVsO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB2YWx1ZS5maXJzdE5hbWUpIHtcbiAgICAgICAgdGhpcy50ZXJtID0gYCR7dmFsdWUuZmlyc3ROYW1lfSAke3ZhbHVlLmxhc3ROYW1lfWA7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLm5hbWUpIHtcbiAgICAgICAgdGhpcy50ZXJtID0gdmFsdWUubmFtZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmdldExhYmVscyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLmNvbmZpZy5nZXRMYWJlbHModmFsdWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMudGVybSA9IHJlc3VsdC5sZW5ndGggPyByZXN1bHRbMF0ubGFiZWwgfHwgJycgOiByZXN1bHQubGFiZWwgfHwgJyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGVybSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLnRpdGxlKSB7XG4gICAgICAgIHRoaXMudGVybSA9IHZhbHVlLnRpdGxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50ZXJtID0gdmFsdWUgfHwgJyc7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX2Rpc2FibGVQaWNrZXJJbnB1dCA9IGRpc2FibGVkO1xuICB9XG59XG4iXX0=