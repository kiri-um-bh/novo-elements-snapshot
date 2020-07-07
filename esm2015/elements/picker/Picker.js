/**
 * @fileoverview added by tsickle
 * Generated from: elements/picker/Picker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild, ViewContainerRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// Vendor
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
// APP
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
import { PickerResults } from './extras/picker-results/PickerResults';
import { ComponentUtils } from '../../utils/component-utils/ComponentUtils';
import { Helpers } from '../../utils/Helpers';
import { NovoOverlayTemplateComponent } from '../overlay/Overlay';
import { notify } from '../../utils/notifier/notifier.util';
// Value accessor for the component (supports ngModel)
/** @type {?} */
const PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NovoPickerElement)),
    multi: true,
};
/**
 * \@name Picker
 *
 * \@description This class is the directive definition of the Picker. If you add and attribute of `picker` to an input,
 * it will create an instance of the picker which wraps the input in all of the picker HTML elements and functionality.
 * Picker should be added as a two-way bound ngModel instance `[(picker)]=""` in order to have the picker options
 * dynamically populate.
 */
export class NovoPickerElement {
    /**
     * @param {?} element
     * @param {?} componentUtils
     * @param {?} ref
     */
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
        this.onModelChange = (/**
         * @return {?}
         */
        () => { });
        this.onModelTouched = (/**
         * @return {?}
         */
        () => { });
    }
    // Disable from typing into the picker (result template does everything)
    /**
     * @param {?} v
     * @return {?}
     */
    set disablePickerInput(v) {
        this._disablePickerInput = coerceBooleanProperty(v);
    }
    /**
     * @return {?}
     */
    get disablePickerInput() {
        return this._disablePickerInput;
    }
    /**
     * @return {?}
     */
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
        /** @type {?} */
        const pasteObserver = fromEvent(this.input.nativeElement, 'paste').pipe(debounceTime(250), distinctUntilChanged());
        pasteObserver.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onDebouncedKeyup(event)), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => this.hideResults(err)));
        /** @type {?} */
        const keyboardObserver = fromEvent(this.input.nativeElement, 'keyup').pipe(debounceTime(250), distinctUntilChanged());
        keyboardObserver.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onDebouncedKeyup(event)), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => this.hideResults(err)));
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onDebouncedKeyup(event) {
        if ([KeyCodes.ESC, KeyCodes.UP, KeyCodes.DOWN, KeyCodes.ENTER, KeyCodes.TAB].includes(event['keyCode'])) {
            return;
        }
        this.show(((/** @type {?} */ (event.target))).value);
    }
    /**
     * @return {?}
     */
    openPanel() {
        this.container.openPanel();
    }
    /**
     * @return {?}
     */
    closePanel() {
        this.container.closePanel();
    }
    /**
     * @return {?}
     */
    get panelOpen() {
        return this.container && this.container.panelOpen;
    }
    /**
     * @private
     * @param {?=} term
     * @return {?}
     */
    show(term) {
        this.openPanel();
        // Show the results inside
        this.showResults(term);
    }
    /**
     * @param {?} event
     * @return {?}
     */
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
                /** @type {?} */
                const activeMatch = this.popup.instance.activeMatch;
                if (!this.selected.find((/**
                 * @param {?} selected
                 * @return {?}
                 */
                (selected) => activeMatch && activeMatch.value && selected.value === activeMatch.value))) {
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
    /**
     * @param {?} wipeTerm
     * @return {?}
     */
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
     * \@name onFocus
     * \@description When the input's focus event is called this method calls the debounced function that displays the
     * results.
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        if (!this.panelOpen) {
            this.show();
        }
        this.focus.emit(event);
    }
    // Creates an instance of the results (called popup) and adds all the bindings to that instance.
    /**
     * @param {?=} term
     * @return {?}
     */
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
    /**
     * @param {?=} err
     * @return {?}
     */
    hideResults(err) {
        this.closePanel();
        this.ref.markForCheck();
    }
    // Cleans up listeners for the popup - will get executed no matter how the popup is closed.
    /**
     * @return {?}
     */
    onOverlayClosed() {
        if (this.popup && this.popup.instance && this.popup.instance.cleanUp) {
            this.popup.instance.cleanUp();
        }
    }
    // get accessor
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    // set accessor including call the onchange callback
    /**
     * @param {?} selected
     * @return {?}
     */
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
    /**
     * @param {?} event
     * @return {?}
     */
    checkTerm(event) {
        this.typing.emit(event);
        if (!event || !event.length) {
            this._value = null;
            this.onModelChange(this._value);
        }
        this.ref.markForCheck();
    }
    // Set touched on blur
    /**
     * @param {?=} event
     * @return {?}
     */
    onTouched(event) {
        this.onModelTouched();
        this.blur.emit(event);
    }
    // From ControlValueAccessor interface
    /**
     * @param {?} value
     * @return {?}
     */
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
                this.config.getLabels(value).then((/**
                 * @param {?} result
                 * @return {?}
                 */
                (result) => {
                    if (result) {
                        this.term = result.length ? result[0].label || '' : result.label || '';
                    }
                    else {
                        this.term = value;
                    }
                    this.ref.markForCheck();
                }));
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
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this._disablePickerInput = disabled;
    }
}
NovoPickerElement.decorators = [
    { type: Component, args: [{
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
  `
            }] }
];
/** @nocollapse */
NovoPickerElement.ctorParameters = () => [
    { type: ElementRef },
    { type: ComponentUtils },
    { type: ChangeDetectorRef }
];
NovoPickerElement.propDecorators = {
    results: [{ type: ViewChild, args: ['results', { read: ViewContainerRef, static: true },] }],
    config: [{ type: Input }],
    placeholder: [{ type: Input }],
    clearValueOnSelect: [{ type: Input }],
    closeOnSelect: [{ type: Input }],
    selected: [{ type: Input }],
    appendToBody: [{ type: Input }],
    parentScrollSelector: [{ type: Input }],
    parentScrollAction: [{ type: Input }],
    containerClass: [{ type: Input }],
    side: [{ type: Input }],
    autoSelectFirstOption: [{ type: Input }],
    overrideElement: [{ type: Input }],
    disablePickerInput: [{ type: Input }],
    changed: [{ type: Output }],
    select: [{ type: Output }],
    focus: [{ type: Output }],
    blur: [{ type: Output }],
    typing: [{ type: Output }],
    container: [{ type: ViewChild, args: [NovoOverlayTemplateComponent, { static: true },] }],
    input: [{ type: ViewChild, args: ['input', { static: true },] }]
};
if (false) {
    /** @type {?} */
    NovoPickerElement.prototype.results;
    /** @type {?} */
    NovoPickerElement.prototype.config;
    /** @type {?} */
    NovoPickerElement.prototype.placeholder;
    /** @type {?} */
    NovoPickerElement.prototype.clearValueOnSelect;
    /** @type {?} */
    NovoPickerElement.prototype.closeOnSelect;
    /** @type {?} */
    NovoPickerElement.prototype.selected;
    /** @type {?} */
    NovoPickerElement.prototype.appendToBody;
    /** @type {?} */
    NovoPickerElement.prototype.parentScrollSelector;
    /** @type {?} */
    NovoPickerElement.prototype.parentScrollAction;
    /** @type {?} */
    NovoPickerElement.prototype.containerClass;
    /** @type {?} */
    NovoPickerElement.prototype.side;
    /** @type {?} */
    NovoPickerElement.prototype.autoSelectFirstOption;
    /** @type {?} */
    NovoPickerElement.prototype.overrideElement;
    /**
     * @type {?}
     * @private
     */
    NovoPickerElement.prototype._disablePickerInput;
    /** @type {?} */
    NovoPickerElement.prototype.changed;
    /** @type {?} */
    NovoPickerElement.prototype.select;
    /** @type {?} */
    NovoPickerElement.prototype.focus;
    /** @type {?} */
    NovoPickerElement.prototype.blur;
    /** @type {?} */
    NovoPickerElement.prototype.typing;
    /** @type {?} */
    NovoPickerElement.prototype.container;
    /**
     * @type {?}
     * @private
     */
    NovoPickerElement.prototype.input;
    /** @type {?} */
    NovoPickerElement.prototype.term;
    /** @type {?} */
    NovoPickerElement.prototype.resultsComponent;
    /** @type {?} */
    NovoPickerElement.prototype.popup;
    /** @type {?} */
    NovoPickerElement.prototype._value;
    /** @type {?} */
    NovoPickerElement.prototype.onModelChange;
    /** @type {?} */
    NovoPickerElement.prototype.onModelTouched;
    /** @type {?} */
    NovoPickerElement.prototype.element;
    /**
     * @type {?}
     * @private
     */
    NovoPickerElement.prototype.componentUtils;
    /**
     * @type {?}
     * @private
     */
    NovoPickerElement.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3BpY2tlci9QaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUVuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFakMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDNUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7O01BSXRELHFCQUFxQixHQUFHO0lBQzVCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixFQUFDO0lBQ2hELEtBQUssRUFBRSxJQUFJO0NBQ1o7Ozs7Ozs7OztBQTZDRCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUF3RTVCLFlBQW1CLE9BQW1CLEVBQVUsY0FBOEIs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Qjs7SUFDNUIsMENBQzhCOztJQUM5QixxQ0FDMEI7O0lBRTFCLHlDQUM4Qjs7SUFFOUIsaURBQzZCOztJQUU3QiwrQ0FDcUM7O0lBRXJDLDJDQUN1Qjs7SUFFdkIsaUNBQ3NCOztJQUV0QixrREFDc0M7O0lBQ3RDLDRDQUM0Qjs7Ozs7SUFZNUIsZ0RBQTZDOztJQUc3QyxvQ0FDZ0Q7O0lBQ2hELG1DQUMrQzs7SUFDL0Msa0NBQzhDOztJQUM5QyxpQ0FDNkM7O0lBQzdDLG1DQUMrQzs7SUFFL0Msc0NBQytDOzs7OztJQUMvQyxrQ0FDMEI7O0lBRTFCLGlDQUFrQjs7SUFDbEIsNkNBQXNCOztJQUN0QixrQ0FBeUI7O0lBQ3pCLG1DQUFZOztJQUNaLDBDQUFvQzs7SUFDcEMsMkNBQXFDOztJQUV6QixvQ0FBMEI7Ozs7O0lBQUUsMkNBQXNDOzs7OztJQUFFLGdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50UmVmLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuLy8gQVBQXG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gJy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5pbXBvcnQgeyBQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi9leHRyYXMvcGlja2VyLXJlc3VsdHMvUGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vb3ZlcmxheS9PdmVybGF5JztcbmltcG9ydCB7IG5vdGlmeSB9IGZyb20gJy4uLy4uL3V0aWxzL25vdGlmaWVyL25vdGlmaWVyLnV0aWwnO1xuaW1wb3J0IHsgTm92b0NvbnRyb2xDb25maWcgfSBmcm9tICcuLi9mb3JtL0Zvcm1Db250cm9scyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgUElDS0VSX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b1BpY2tlckVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbi8qKlxuICogQG5hbWUgUGlja2VyXG4gKlxuICogQGRlc2NyaXB0aW9uIFRoaXMgY2xhc3MgaXMgdGhlIGRpcmVjdGl2ZSBkZWZpbml0aW9uIG9mIHRoZSBQaWNrZXIuIElmIHlvdSBhZGQgYW5kIGF0dHJpYnV0ZSBvZiBgcGlja2VyYCB0byBhbiBpbnB1dCxcbiAqIGl0IHdpbGwgY3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBwaWNrZXIgd2hpY2ggd3JhcHMgdGhlIGlucHV0IGluIGFsbCBvZiB0aGUgcGlja2VyIEhUTUwgZWxlbWVudHMgYW5kIGZ1bmN0aW9uYWxpdHkuXG4gKiBQaWNrZXIgc2hvdWxkIGJlIGFkZGVkIGFzIGEgdHdvLXdheSBib3VuZCBuZ01vZGVsIGluc3RhbmNlIGBbKHBpY2tlcildPVwiXCJgIGluIG9yZGVyIHRvIGhhdmUgdGhlIHBpY2tlciBvcHRpb25zXG4gKiBkeW5hbWljYWxseSBwb3B1bGF0ZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1waWNrZXInLFxuICBwcm92aWRlcnM6IFtQSUNLRVJfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpIGNsYXNzPVwiYmhpLW1vcmVcIiAqbmdJZj1cImNvbmZpZz8uZW50aXR5SWNvbiAmJiAhX3ZhbHVlXCI+PC9pPlxuICAgIDxpIGNsYXNzPVwiYmhpLXt7IGNvbmZpZz8uZW50aXR5SWNvbiB9fSBlbnRpdHktaWNvbiB7eyBjb25maWc/LmVudGl0eUljb24gfX1cIiAqbmdJZj1cImNvbmZpZz8uZW50aXR5SWNvbiAmJiBfdmFsdWVcIj48L2k+XG4gICAgPGlucHV0XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBjbGFzcz1cInBpY2tlci1pbnB1dFwiXG4gICAgICBbKG5nTW9kZWwpXT1cInRlcm1cIlxuICAgICAgW2NsYXNzLmVudGl0eS1waWNrZXJdPVwiY29uZmlnPy5lbnRpdHlJY29uXCJcbiAgICAgIFtjbGFzcy5lbnRpdHktc2VsZWN0ZWRdPVwiY29uZmlnPy5lbnRpdHlJY29uICYmIF92YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGVja1Rlcm0oJGV2ZW50KVwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiXG4gICAgICAoY2xpY2spPVwib25Gb2N1cygkZXZlbnQpXCJcbiAgICAgIChibHVyKT1cIm9uVG91Y2hlZCgkZXZlbnQpXCJcbiAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAjaW5wdXRcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlUGlja2VySW5wdXRcIlxuICAgIC8+XG4gICAgPGkgY2xhc3M9XCJiaGktc2VhcmNoXCIgKm5nSWY9XCIoIV92YWx1ZSB8fCBjbGVhclZhbHVlT25TZWxlY3QpICYmICFkaXNhYmxlUGlja2VySW5wdXRcIj48L2k+XG4gICAgPGlcbiAgICAgIGNsYXNzPVwiYmhpLXRpbWVzXCJcbiAgICAgIFtjbGFzcy5lbnRpdHktc2VsZWN0ZWRdPVwiY29uZmlnPy5lbnRpdHlJY29uICYmIF92YWx1ZVwiXG4gICAgICAqbmdJZj1cIl92YWx1ZSAmJiAhY2xlYXJWYWx1ZU9uU2VsZWN0ICYmICFkaXNhYmxlUGlja2VySW5wdXRcIlxuICAgICAgKGNsaWNrKT1cImNsZWFyVmFsdWUodHJ1ZSlcIlxuICAgID48L2k+XG4gICAgPG5vdm8tb3ZlcmxheS10ZW1wbGF0ZSBjbGFzcz1cInBpY2tlci1yZXN1bHRzLWNvbnRhaW5lclwiIFtwYXJlbnRdPVwiZWxlbWVudFwiIHBvc2l0aW9uPVwiYWJvdmUtYmVsb3dcIiAoY2xvc2luZyk9XCJvbk92ZXJsYXlDbG9zZWQoKVwiPlxuICAgICAgPHNwYW4gI3Jlc3VsdHM+PC9zcGFuPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvbm92by1vdmVybGF5LXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvUGlja2VyRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIENvbnRhaW5lciBmb3IgdGhlIHJlc3VsdHNcbiAgQFZpZXdDaGlsZCgncmVzdWx0cycsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIHJlc3VsdHM6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgQElucHV0KClcbiAgY29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZ1snY29uZmlnJ107XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNsZWFyVmFsdWVPblNlbGVjdDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHNlbGVjdGVkOiBBcnJheTxhbnk+ID0gW107XG4gIC8vIERlcHJlY2F0ZWRcbiAgQElucHV0KClcbiAgYXBwZW5kVG9Cb2R5OiBib29sZWFuID0gZmFsc2U7XG4gIC8vIERlcHJlY2F0ZWRcbiAgQElucHV0KClcbiAgcGFyZW50U2Nyb2xsU2VsZWN0b3I6IHN0cmluZztcbiAgLy8gRGVwcmVjYXRlZFxuICBASW5wdXQoKVxuICBwYXJlbnRTY3JvbGxBY3Rpb246IHN0cmluZyA9ICdjbG9zZSc7XG4gIC8vIEN1c3RvbSBjbGFzcyBmb3IgdGhlIGRyb3Bkb3duIGNvbnRhaW5lclxuICBASW5wdXQoKVxuICBjb250YWluZXJDbGFzczogc3RyaW5nO1xuICAvLyBTaWRlIHRoZSBkcm9wZG93biB3aWxsIG9wZW5cbiAgQElucHV0KClcbiAgc2lkZTogc3RyaW5nID0gJ2xlZnQnO1xuICAvLyBBdXRvc2VsZWN0cyB0aGUgZmlyc3Qgb3B0aW9uIGluIHRoZSByZXN1bHRzXG4gIEBJbnB1dCgpXG4gIGF1dG9TZWxlY3RGaXJzdE9wdGlvbjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIG92ZXJyaWRlRWxlbWVudDogRWxlbWVudFJlZjtcblxuICAvLyBEaXNhYmxlIGZyb20gdHlwaW5nIGludG8gdGhlIHBpY2tlciAocmVzdWx0IHRlbXBsYXRlIGRvZXMgZXZlcnl0aGluZylcbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVQaWNrZXJJbnB1dCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZVBpY2tlcklucHV0ID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG5cbiAgZ2V0IGRpc2FibGVQaWNrZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZVBpY2tlcklucHV0O1xuICB9XG5cbiAgcHJpdmF0ZSBfZGlzYWJsZVBpY2tlcklucHV0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gRW1pdHRlciBmb3Igc2VsZWN0c1xuICBAT3V0cHV0KClcbiAgY2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICB0eXBpbmc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHVibGljIGNvbnRhaW5lcjogTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmO1xuXG4gIHRlcm06IHN0cmluZyA9ICcnO1xuICByZXN1bHRzQ29tcG9uZW50OiBhbnk7XG4gIHBvcHVwOiBDb21wb25lbnRSZWY8YW55PjtcbiAgX3ZhbHVlOiBhbnk7XG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLm92ZXJyaWRlRWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5vdmVycmlkZUVsZW1lbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmFwcGVuZFRvQm9keSkge1xuICAgICAgbm90aWZ5KGAnYXBwZW5kVG9Cb2R5JyBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgcmVtb3ZlIHRoaXMgYXR0cmlidXRlLmApO1xuICAgIH1cbiAgICAvLyBDdXN0b20gcmVzdWx0cyB0ZW1wbGF0ZVxuICAgIHRoaXMucmVzdWx0c0NvbXBvbmVudCA9IHRoaXMuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSB8fCBQaWNrZXJSZXN1bHRzO1xuICAgIC8vIEdldCBhbGwgZGlzdGluY3Qga2V5IHVwIGV2ZW50cyBmcm9tIHRoZSBpbnB1dCBhbmQgb25seSBmaXJlIGlmIGxvbmcgZW5vdWdoIGFuZCBkaXN0aW5jdFxuICAgIC8vIGxldCBpbnB1dCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgY29uc3QgcGFzdGVPYnNlcnZlciA9IGZyb21FdmVudCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQsICdwYXN0ZScpLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMjUwKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgKTtcbiAgICBwYXN0ZU9ic2VydmVyLnN1YnNjcmliZSgoZXZlbnQ6IENsaXBib2FyZEV2ZW50KSA9PiB0aGlzLm9uRGVib3VuY2VkS2V5dXAoZXZlbnQpLCAoZXJyKSA9PiB0aGlzLmhpZGVSZXN1bHRzKGVycikpO1xuICAgIGNvbnN0IGtleWJvYXJkT2JzZXJ2ZXIgPSBmcm9tRXZlbnQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LCAna2V5dXAnKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDI1MCksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICk7XG4gICAga2V5Ym9hcmRPYnNlcnZlci5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB0aGlzLm9uRGVib3VuY2VkS2V5dXAoZXZlbnQpLCAoZXJyKSA9PiB0aGlzLmhpZGVSZXN1bHRzKGVycikpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkRlYm91bmNlZEtleXVwKGV2ZW50OiBFdmVudCkge1xuICAgIGlmIChbS2V5Q29kZXMuRVNDLCBLZXlDb2Rlcy5VUCwgS2V5Q29kZXMuRE9XTiwgS2V5Q29kZXMuRU5URVIsIEtleUNvZGVzLlRBQl0uaW5jbHVkZXMoZXZlbnRbJ2tleUNvZGUnXSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zaG93KChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgb3BlblBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMuY29udGFpbmVyLm9wZW5QYW5lbCgpO1xuICB9XG5cbiAgcHVibGljIGNsb3NlUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy5jb250YWluZXIuY2xvc2VQYW5lbCgpO1xuICB9XG5cbiAgcHVibGljIGdldCBwYW5lbE9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyICYmIHRoaXMuY29udGFpbmVyLnBhbmVsT3BlbjtcbiAgfVxuXG4gIHByaXZhdGUgc2hvdyh0ZXJtPzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICAvLyBTaG93IHRoZSByZXN1bHRzIGluc2lkZVxuICAgIHRoaXMuc2hvd1Jlc3VsdHModGVybSk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlUGlja2VySW5wdXQpIHtcbiAgICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFuZWxPcGVuICYmICF0aGlzLmRpc2FibGVQaWNrZXJJbnB1dCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVTQyB8fCBldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5UQUIpIHtcbiAgICAgICAgdGhpcy5oaWRlUmVzdWx0cygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5VUCkge1xuICAgICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnByZXZBY3RpdmVNYXRjaCgpO1xuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRE9XTikge1xuICAgICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLm5leHRBY3RpdmVNYXRjaCgpO1xuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRU5URVIpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlTWF0Y2ggPSB0aGlzLnBvcHVwLmluc3RhbmNlLmFjdGl2ZU1hdGNoO1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWQuZmluZCgoc2VsZWN0ZWQpID0+IGFjdGl2ZU1hdGNoICYmIGFjdGl2ZU1hdGNoLnZhbHVlICYmIHNlbGVjdGVkLnZhbHVlID09PSBhY3RpdmVNYXRjaC52YWx1ZSkpIHtcbiAgICAgICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnNlbGVjdEFjdGl2ZU1hdGNoKCk7XG4gICAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkJBQ0tTUEFDRSB8fCBldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5ERUxFVEUpICYmICFIZWxwZXJzLmlzQmxhbmsodGhpcy5fdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuY2xlYXJWYWx1ZShmYWxzZSk7XG4gICAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkRFTEVURSAmJiBIZWxwZXJzLmlzQmxhbmsodGhpcy5fdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuY2xlYXJWYWx1ZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGVhclZhbHVlKHdpcGVUZXJtKSB7XG4gICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcy5fdmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlZC5lbWl0KHsgdmFsdWU6IHRoaXMuX3ZhbHVlLCByYXdWYWx1ZTogeyBsYWJlbDogJycsIHZhbHVlOiB0aGlzLl92YWx1ZSB9IH0pO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLl92YWx1ZSk7XG5cbiAgICBpZiAod2lwZVRlcm0pIHtcbiAgICAgIHRoaXMudGVybSA9ICcnO1xuICAgICAgdGhpcy5oaWRlUmVzdWx0cygpO1xuICAgIH1cbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkZvY3VzXG4gICAqIEBkZXNjcmlwdGlvbiBXaGVuIHRoZSBpbnB1dCdzIGZvY3VzIGV2ZW50IGlzIGNhbGxlZCB0aGlzIG1ldGhvZCBjYWxscyB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGlzcGxheXMgdGhlXG4gICAqIHJlc3VsdHMuXG4gICAqL1xuICBvbkZvY3VzKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnBhbmVsT3Blbikge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XG4gIH1cblxuICAvLyBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSByZXN1bHRzIChjYWxsZWQgcG9wdXApIGFuZCBhZGRzIGFsbCB0aGUgYmluZGluZ3MgdG8gdGhhdCBpbnN0YW5jZS5cbiAgc2hvd1Jlc3VsdHModGVybT86IGFueSkge1xuICAgIC8vIFVwZGF0ZSBNYXRjaGVzXG4gICAgaWYgKHRoaXMucG9wdXApIHtcbiAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBsaXN0IG9yIGNyZWF0ZSB0aGUgRE9NIGVsZW1lbnRcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UuY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnRlcm0gPSB0aGlzLnRlcm07XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UuYXV0b1NlbGVjdEZpcnN0T3B0aW9uID0gdGhpcy5hdXRvU2VsZWN0Rmlyc3RPcHRpb247XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3B1cCA9IHRoaXMuY29tcG9uZW50VXRpbHMuYXBwZW5kKHRoaXMucmVzdWx0c0NvbXBvbmVudCwgdGhpcy5yZXN1bHRzKTtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UucGFyZW50ID0gdGhpcztcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UuY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnRlcm0gPSB0aGlzLnRlcm07XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UuYXV0b1NlbGVjdEZpcnN0T3B0aW9uID0gdGhpcy5hdXRvU2VsZWN0Rmlyc3RPcHRpb247XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLm92ZXJsYXkgPSB0aGlzLmNvbnRhaW5lci5vdmVybGF5UmVmO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gVGVsbHMgdGhlIG92ZXJsYXkgY29tcG9uZW50IHRvIGhpZGUgdGhlIHBpY2tlciByZXN1bHRzIGZyb20gdGhlIERPTSB3aXRob3V0IGRlbGV0aW5nIHRoZSBkeW5hbWljYWxseSBhbGxvY2F0ZWQgcG9wdXAgaW5zdGFuY2UgY3JlYXRlZCBpblxuICAvLyBzaG93UmVzdWx0cy4gVGhlIHBvcHVwIGluc3RhbmNlIHdpbGwgcmVtYWluIGluIG1lbW9yeSBmcm9tIHRoZSBmaXJzdCB0aW1lIHRoZSByZXN1bHRzIGFyZSBzaG93biB1bnRpbCB0aGlzIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXG4gIGhpZGVSZXN1bHRzKGVycj86IGFueSkge1xuICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLy8gQ2xlYW5zIHVwIGxpc3RlbmVycyBmb3IgdGhlIHBvcHVwIC0gd2lsbCBnZXQgZXhlY3V0ZWQgbm8gbWF0dGVyIGhvdyB0aGUgcG9wdXAgaXMgY2xvc2VkLlxuICBvbk92ZXJsYXlDbG9zZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucG9wdXAgJiYgdGhpcy5wb3B1cC5pbnN0YW5jZSAmJiB0aGlzLnBvcHVwLmluc3RhbmNlLmNsZWFuVXApIHtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UuY2xlYW5VcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGdldCBhY2Nlc3NvclxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgLy8gc2V0IGFjY2Vzc29yIGluY2x1ZGluZyBjYWxsIHRoZSBvbmNoYW5nZSBjYWxsYmFja1xuICBzZXQgdmFsdWUoc2VsZWN0ZWQpIHtcbiAgICBpZiAoIXNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnRlcm0gPSAnJztcbiAgICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZC52YWx1ZSAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMudGVybSA9IHRoaXMuY2xlYXJWYWx1ZU9uU2VsZWN0ID8gJycgOiBzZWxlY3RlZC5sYWJlbDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gc2VsZWN0ZWQudmFsdWU7XG4gICAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiBzZWxlY3RlZC52YWx1ZSwgcmF3VmFsdWU6IHsgbGFiZWw6IHRoaXMudGVybSwgdmFsdWU6IHNlbGVjdGVkLnZhbHVlIH0gfSk7XG4gICAgICB0aGlzLnNlbGVjdC5lbWl0KHNlbGVjdGVkKTtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZShzZWxlY3RlZC52YWx1ZSk7XG4gICAgICBpZiAodGhpcy5wb3B1cCkge1xuICAgICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VkLmVtaXQoeyB2YWx1ZTogc2VsZWN0ZWQudmFsdWUsIHJhd1ZhbHVlOiB7IGxhYmVsOiB0aGlzLnRlcm0sIHZhbHVlOiB0aGlzLl92YWx1ZSB9IH0pO1xuICAgICAgdGhpcy5zZWxlY3QuZW1pdChzZWxlY3RlZCk7XG4gICAgfVxuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLy8gTWFrZXMgc3VyZSB0byBjbGVhciB0aGUgbW9kZWwgaWYgdGhlIHVzZXIgY2xlYXJzIHRoZSB0ZXh0IGJveFxuICBjaGVja1Rlcm0oZXZlbnQpIHtcbiAgICB0aGlzLnR5cGluZy5lbWl0KGV2ZW50KTtcbiAgICBpZiAoIWV2ZW50IHx8ICFldmVudC5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLy8gU2V0IHRvdWNoZWQgb24gYmx1clxuICBvblRvdWNoZWQoZXZlbnQ/OiBFdmVudCkge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gIH1cblxuICAvLyBGcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5jbGVhclZhbHVlT25TZWxlY3QpIHtcbiAgICAgIHRoaXMudGVybSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhdGhpcy5jb25maWcudXNlR2V0TGFiZWxzKSB7XG4gICAgICAgIHRoaXMudGVybSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB2YWx1ZS5sYWJlbCkge1xuICAgICAgICB0aGlzLnRlcm0gPSB2YWx1ZS5sYWJlbDtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdmFsdWUuZmlyc3ROYW1lKSB7XG4gICAgICAgIHRoaXMudGVybSA9IGAke3ZhbHVlLmZpcnN0TmFtZX0gJHt2YWx1ZS5sYXN0TmFtZX1gO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB2YWx1ZS5uYW1lKSB7XG4gICAgICAgIHRoaXMudGVybSA9IHZhbHVlLm5hbWU7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5nZXRMYWJlbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5jb25maWcuZ2V0TGFiZWxzKHZhbHVlKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLnRlcm0gPSByZXN1bHQubGVuZ3RoID8gcmVzdWx0WzBdLmxhYmVsIHx8ICcnIDogcmVzdWx0LmxhYmVsIHx8ICcnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRlcm0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB2YWx1ZS50aXRsZSkge1xuICAgICAgICB0aGlzLnRlcm0gPSB2YWx1ZS50aXRsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGVybSA9IHZhbHVlIHx8ICcnO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9kaXNhYmxlUGlja2VySW5wdXQgPSBkaXNhYmxlZDtcbiAgfVxufVxuIl19