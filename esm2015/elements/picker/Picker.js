/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    results: [{ type: ViewChild, args: ['results', { read: ViewContainerRef },] }],
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
    container: [{ type: ViewChild, args: [NovoOverlayTemplateComponent,] }],
    input: [{ type: ViewChild, args: ['input',] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3BpY2tlci9QaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFFVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRW5ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUVqQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7TUFJdEQscUJBQXFCLEdBQUc7SUFDNUIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUM7SUFDaEQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7Ozs7Ozs7O0FBNkNELE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQXdFNUIsWUFBbUIsT0FBbUIsRUFBVSxjQUE4QixF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QUN1Qjs7SUFFdkIsaUNBQ3NCOztJQUV0QixrREFDc0M7O0lBQ3RDLDRDQUM0Qjs7Ozs7SUFZNUIsZ0RBQTZDOztJQUc3QyxvQ0FDZ0Q7O0lBQ2hELG1DQUMrQzs7SUFDL0Msa0NBQzhDOztJQUM5QyxpQ0FDNkM7O0lBQzdDLG1DQUMrQzs7SUFFL0Msc0NBQytDOzs7OztJQUMvQyxrQ0FDMEI7O0lBRTFCLGlDQUFrQjs7SUFDbEIsNkNBQXNCOztJQUN0QixrQ0FBeUI7O0lBQ3pCLG1DQUFZOztJQUNaLDBDQUFvQzs7SUFDcEMsMkNBQXFDOztJQUV6QixvQ0FBMEI7Ozs7O0lBQUUsMkNBQXNDOzs7OztJQUFFLGdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50UmVmLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuLy8gQVBQXG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gJy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5pbXBvcnQgeyBQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi9leHRyYXMvcGlja2VyLXJlc3VsdHMvUGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vb3ZlcmxheS9PdmVybGF5JztcbmltcG9ydCB7IG5vdGlmeSB9IGZyb20gJy4uLy4uL3V0aWxzL25vdGlmaWVyL25vdGlmaWVyLnV0aWwnO1xuaW1wb3J0IHsgTm92b0NvbnRyb2xDb25maWcgfSBmcm9tICcuLi9mb3JtL0Zvcm1Db250cm9scyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgUElDS0VSX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b1BpY2tlckVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbi8qKlxuICogQG5hbWUgUGlja2VyXG4gKlxuICogQGRlc2NyaXB0aW9uIFRoaXMgY2xhc3MgaXMgdGhlIGRpcmVjdGl2ZSBkZWZpbml0aW9uIG9mIHRoZSBQaWNrZXIuIElmIHlvdSBhZGQgYW5kIGF0dHJpYnV0ZSBvZiBgcGlja2VyYCB0byBhbiBpbnB1dCxcbiAqIGl0IHdpbGwgY3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBwaWNrZXIgd2hpY2ggd3JhcHMgdGhlIGlucHV0IGluIGFsbCBvZiB0aGUgcGlja2VyIEhUTUwgZWxlbWVudHMgYW5kIGZ1bmN0aW9uYWxpdHkuXG4gKiBQaWNrZXIgc2hvdWxkIGJlIGFkZGVkIGFzIGEgdHdvLXdheSBib3VuZCBuZ01vZGVsIGluc3RhbmNlIGBbKHBpY2tlcildPVwiXCJgIGluIG9yZGVyIHRvIGhhdmUgdGhlIHBpY2tlciBvcHRpb25zXG4gKiBkeW5hbWljYWxseSBwb3B1bGF0ZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1waWNrZXInLFxuICBwcm92aWRlcnM6IFtQSUNLRVJfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpIGNsYXNzPVwiYmhpLW1vcmVcIiAqbmdJZj1cImNvbmZpZz8uZW50aXR5SWNvbiAmJiAhX3ZhbHVlXCI+PC9pPlxuICAgIDxpIGNsYXNzPVwiYmhpLXt7IGNvbmZpZz8uZW50aXR5SWNvbiB9fSBlbnRpdHktaWNvbiB7eyBjb25maWc/LmVudGl0eUljb24gfX1cIiAqbmdJZj1cImNvbmZpZz8uZW50aXR5SWNvbiAmJiBfdmFsdWVcIj48L2k+XG4gICAgPGlucHV0XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBjbGFzcz1cInBpY2tlci1pbnB1dFwiXG4gICAgICBbKG5nTW9kZWwpXT1cInRlcm1cIlxuICAgICAgW2NsYXNzLmVudGl0eS1waWNrZXJdPVwiY29uZmlnPy5lbnRpdHlJY29uXCJcbiAgICAgIFtjbGFzcy5lbnRpdHktc2VsZWN0ZWRdPVwiY29uZmlnPy5lbnRpdHlJY29uICYmIF92YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGVja1Rlcm0oJGV2ZW50KVwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiXG4gICAgICAoY2xpY2spPVwib25Gb2N1cygkZXZlbnQpXCJcbiAgICAgIChibHVyKT1cIm9uVG91Y2hlZCgkZXZlbnQpXCJcbiAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAjaW5wdXRcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlUGlja2VySW5wdXRcIlxuICAgIC8+XG4gICAgPGkgY2xhc3M9XCJiaGktc2VhcmNoXCIgKm5nSWY9XCIoIV92YWx1ZSB8fCBjbGVhclZhbHVlT25TZWxlY3QpICYmICFkaXNhYmxlUGlja2VySW5wdXRcIj48L2k+XG4gICAgPGlcbiAgICAgIGNsYXNzPVwiYmhpLXRpbWVzXCJcbiAgICAgIFtjbGFzcy5lbnRpdHktc2VsZWN0ZWRdPVwiY29uZmlnPy5lbnRpdHlJY29uICYmIF92YWx1ZVwiXG4gICAgICAqbmdJZj1cIl92YWx1ZSAmJiAhY2xlYXJWYWx1ZU9uU2VsZWN0ICYmICFkaXNhYmxlUGlja2VySW5wdXRcIlxuICAgICAgKGNsaWNrKT1cImNsZWFyVmFsdWUodHJ1ZSlcIlxuICAgID48L2k+XG4gICAgPG5vdm8tb3ZlcmxheS10ZW1wbGF0ZSBjbGFzcz1cInBpY2tlci1yZXN1bHRzLWNvbnRhaW5lclwiIFtwYXJlbnRdPVwiZWxlbWVudFwiIHBvc2l0aW9uPVwiYWJvdmUtYmVsb3dcIiAoY2xvc2luZyk9XCJvbk92ZXJsYXlDbG9zZWQoKVwiPlxuICAgICAgPHNwYW4gI3Jlc3VsdHM+PC9zcGFuPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvbm92by1vdmVybGF5LXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvUGlja2VyRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIENvbnRhaW5lciBmb3IgdGhlIHJlc3VsdHNcbiAgQFZpZXdDaGlsZCgncmVzdWx0cycsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICByZXN1bHRzOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBJbnB1dCgpXG4gIGNvbmZpZzogTm92b0NvbnRyb2xDb25maWdbJ2NvbmZpZyddO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBjbGVhclZhbHVlT25TZWxlY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBzZWxlY3RlZDogQXJyYXk8YW55PiA9IFtdO1xuICAvLyBEZXByZWNhdGVkXG4gIEBJbnB1dCgpXG4gIGFwcGVuZFRvQm9keTogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBEZXByZWNhdGVkXG4gIEBJbnB1dCgpXG4gIHBhcmVudFNjcm9sbFNlbGVjdG9yOiBzdHJpbmc7XG4gIC8vIERlcHJlY2F0ZWRcbiAgQElucHV0KClcbiAgcGFyZW50U2Nyb2xsQWN0aW9uOiBzdHJpbmcgPSAnY2xvc2UnO1xuICAvLyBDdXN0b20gY2xhc3MgZm9yIHRoZSBkcm9wZG93biBjb250YWluZXJcbiAgQElucHV0KClcbiAgY29udGFpbmVyQ2xhc3M6IHN0cmluZztcbiAgLy8gU2lkZSB0aGUgZHJvcGRvd24gd2lsbCBvcGVuXG4gIEBJbnB1dCgpXG4gIHNpZGU6IHN0cmluZyA9ICdsZWZ0JztcbiAgLy8gQXV0b3NlbGVjdHMgdGhlIGZpcnN0IG9wdGlvbiBpbiB0aGUgcmVzdWx0c1xuICBASW5wdXQoKVxuICBhdXRvU2VsZWN0Rmlyc3RPcHRpb246IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBvdmVycmlkZUVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgLy8gRGlzYWJsZSBmcm9tIHR5cGluZyBpbnRvIHRoZSBwaWNrZXIgKHJlc3VsdCB0ZW1wbGF0ZSBkb2VzIGV2ZXJ5dGhpbmcpXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlUGlja2VySW5wdXQodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVQaWNrZXJJbnB1dCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuXG4gIGdldCBkaXNhYmxlUGlja2VySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVQaWNrZXJJbnB1dDtcbiAgfVxuXG4gIHByaXZhdGUgX2Rpc2FibGVQaWNrZXJJbnB1dDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIEVtaXR0ZXIgZm9yIHNlbGVjdHNcbiAgQE91dHB1dCgpXG4gIGNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgdHlwaW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQpXG4gIHB1YmxpYyBjb250YWluZXI6IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0JylcbiAgcHJpdmF0ZSBpbnB1dDogRWxlbWVudFJlZjtcblxuICB0ZXJtOiBzdHJpbmcgPSAnJztcbiAgcmVzdWx0c0NvbXBvbmVudDogYW55O1xuICBwb3B1cDogQ29tcG9uZW50UmVmPGFueT47XG4gIF92YWx1ZTogYW55O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscywgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5vdmVycmlkZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMub3ZlcnJpZGVFbGVtZW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgIG5vdGlmeShgJ2FwcGVuZFRvQm9keScgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIHJlbW92ZSB0aGlzIGF0dHJpYnV0ZS5gKTtcbiAgICB9XG4gICAgLy8gQ3VzdG9tIHJlc3VsdHMgdGVtcGxhdGVcbiAgICB0aGlzLnJlc3VsdHNDb21wb25lbnQgPSB0aGlzLmNvbmZpZy5yZXN1bHRzVGVtcGxhdGUgfHwgUGlja2VyUmVzdWx0cztcbiAgICAvLyBHZXQgYWxsIGRpc3RpbmN0IGtleSB1cCBldmVudHMgZnJvbSB0aGUgaW5wdXQgYW5kIG9ubHkgZmlyZSBpZiBsb25nIGVub3VnaCBhbmQgZGlzdGluY3RcbiAgICAvLyBsZXQgaW5wdXQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGNvbnN0IHBhc3RlT2JzZXJ2ZXIgPSBmcm9tRXZlbnQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LCAncGFzdGUnKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDI1MCksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICk7XG4gICAgcGFzdGVPYnNlcnZlci5zdWJzY3JpYmUoKGV2ZW50OiBDbGlwYm9hcmRFdmVudCkgPT4gdGhpcy5vbkRlYm91bmNlZEtleXVwKGV2ZW50KSwgKGVycikgPT4gdGhpcy5oaWRlUmVzdWx0cyhlcnIpKTtcbiAgICBjb25zdCBrZXlib2FyZE9ic2VydmVyID0gZnJvbUV2ZW50KHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCwgJ2tleXVwJykucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgyNTApLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICApO1xuICAgIGtleWJvYXJkT2JzZXJ2ZXIuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5vbkRlYm91bmNlZEtleXVwKGV2ZW50KSwgKGVycikgPT4gdGhpcy5oaWRlUmVzdWx0cyhlcnIpKTtcbiAgfVxuXG4gIHByaXZhdGUgb25EZWJvdW5jZWRLZXl1cChldmVudDogRXZlbnQpIHtcbiAgICBpZiAoW0tleUNvZGVzLkVTQywgS2V5Q29kZXMuVVAsIEtleUNvZGVzLkRPV04sIEtleUNvZGVzLkVOVEVSLCBLZXlDb2Rlcy5UQUJdLmluY2x1ZGVzKGV2ZW50WydrZXlDb2RlJ10pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2hvdygoZXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWUpO1xuICB9XG5cbiAgcHVibGljIG9wZW5QYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRhaW5lci5vcGVuUGFuZWwoKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZVBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMuY29udGFpbmVyLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGFuZWxPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRhaW5lci5wYW5lbE9wZW47XG4gIH1cblxuICBwcml2YXRlIHNob3codGVybT86IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMub3BlblBhbmVsKCk7XG4gICAgLy8gU2hvdyB0aGUgcmVzdWx0cyBpbnNpZGVcbiAgICB0aGlzLnNob3dSZXN1bHRzKHRlcm0pO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZVBpY2tlcklucHV0KSB7XG4gICAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnBhbmVsT3BlbiAmJiAhdGhpcy5kaXNhYmxlUGlja2VySW5wdXQpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FU0MgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuVEFCKSB7XG4gICAgICAgIHRoaXMuaGlkZVJlc3VsdHMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuVVApIHtcbiAgICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5wcmV2QWN0aXZlTWF0Y2goKTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkRPV04pIHtcbiAgICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5uZXh0QWN0aXZlTWF0Y2goKTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVOVEVSKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZU1hdGNoID0gdGhpcy5wb3B1cC5pbnN0YW5jZS5hY3RpdmVNYXRjaDtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkLmZpbmQoKHNlbGVjdGVkKSA9PiBhY3RpdmVNYXRjaCAmJiBhY3RpdmVNYXRjaC52YWx1ZSAmJiBzZWxlY3RlZC52YWx1ZSA9PT0gYWN0aXZlTWF0Y2gudmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5zZWxlY3RBY3RpdmVNYXRjaCgpO1xuICAgICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5CQUNLU1BBQ0UgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuREVMRVRFKSAmJiAhSGVscGVycy5pc0JsYW5rKHRoaXMuX3ZhbHVlKSkge1xuICAgICAgICB0aGlzLmNsZWFyVmFsdWUoZmFsc2UpO1xuICAgICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5ERUxFVEUgJiYgSGVscGVycy5pc0JsYW5rKHRoaXMuX3ZhbHVlKSkge1xuICAgICAgICB0aGlzLmNsZWFyVmFsdWUodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xlYXJWYWx1ZSh3aXBlVGVybSkge1xuICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiB0aGlzLl92YWx1ZSwgcmF3VmFsdWU6IHsgbGFiZWw6ICcnLCB2YWx1ZTogdGhpcy5fdmFsdWUgfSB9KTtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5fdmFsdWUpO1xuXG4gICAgaWYgKHdpcGVUZXJtKSB7XG4gICAgICB0aGlzLnRlcm0gPSAnJztcbiAgICAgIHRoaXMuaGlkZVJlc3VsdHMoKTtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgb25Gb2N1c1xuICAgKiBAZGVzY3JpcHRpb24gV2hlbiB0aGUgaW5wdXQncyBmb2N1cyBldmVudCBpcyBjYWxsZWQgdGhpcyBtZXRob2QgY2FsbHMgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRpc3BsYXlzIHRoZVxuICAgKiByZXN1bHRzLlxuICAgKi9cbiAgb25Gb2N1cyhldmVudCkge1xuICAgIGlmICghdGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgLy8gQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgcmVzdWx0cyAoY2FsbGVkIHBvcHVwKSBhbmQgYWRkcyBhbGwgdGhlIGJpbmRpbmdzIHRvIHRoYXQgaW5zdGFuY2UuXG4gIHNob3dSZXN1bHRzKHRlcm0/OiBhbnkpIHtcbiAgICAvLyBVcGRhdGUgTWF0Y2hlc1xuICAgIGlmICh0aGlzLnBvcHVwKSB7XG4gICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgbGlzdCBvciBjcmVhdGUgdGhlIERPTSBlbGVtZW50XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS50ZXJtID0gdGhpcy50ZXJtO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLmF1dG9TZWxlY3RGaXJzdE9wdGlvbiA9IHRoaXMuYXV0b1NlbGVjdEZpcnN0T3B0aW9uO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9wdXAgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZCh0aGlzLnJlc3VsdHNDb21wb25lbnQsIHRoaXMucmVzdWx0cyk7XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnBhcmVudCA9IHRoaXM7XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS50ZXJtID0gdGhpcy50ZXJtO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLmF1dG9TZWxlY3RGaXJzdE9wdGlvbiA9IHRoaXMuYXV0b1NlbGVjdEZpcnN0T3B0aW9uO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5vdmVybGF5ID0gdGhpcy5jb250YWluZXIub3ZlcmxheVJlZjtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRlbGxzIHRoZSBvdmVybGF5IGNvbXBvbmVudCB0byBoaWRlIHRoZSBwaWNrZXIgcmVzdWx0cyBmcm9tIHRoZSBET00gd2l0aG91dCBkZWxldGluZyB0aGUgZHluYW1pY2FsbHkgYWxsb2NhdGVkIHBvcHVwIGluc3RhbmNlIGNyZWF0ZWQgaW5cbiAgLy8gc2hvd1Jlc3VsdHMuIFRoZSBwb3B1cCBpbnN0YW5jZSB3aWxsIHJlbWFpbiBpbiBtZW1vcnkgZnJvbSB0aGUgZmlyc3QgdGltZSB0aGUgcmVzdWx0cyBhcmUgc2hvd24gdW50aWwgdGhpcyBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxuICBoaWRlUmVzdWx0cyhlcnI/OiBhbnkpIHtcbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8vIENsZWFucyB1cCBsaXN0ZW5lcnMgZm9yIHRoZSBwb3B1cCAtIHdpbGwgZ2V0IGV4ZWN1dGVkIG5vIG1hdHRlciBob3cgdGhlIHBvcHVwIGlzIGNsb3NlZC5cbiAgb25PdmVybGF5Q2xvc2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBvcHVwICYmIHRoaXMucG9wdXAuaW5zdGFuY2UgJiYgdGhpcy5wb3B1cC5pbnN0YW5jZS5jbGVhblVwKSB7XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLmNsZWFuVXAoKTtcbiAgICB9XG4gIH1cblxuICAvLyBnZXQgYWNjZXNzb3JcbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIC8vIHNldCBhY2Nlc3NvciBpbmNsdWRpbmcgY2FsbCB0aGUgb25jaGFuZ2UgY2FsbGJhY2tcbiAgc2V0IHZhbHVlKHNlbGVjdGVkKSB7XG4gICAgaWYgKCFzZWxlY3RlZCkge1xuICAgICAgdGhpcy50ZXJtID0gJyc7XG4gICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWQudmFsdWUgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLnRlcm0gPSB0aGlzLmNsZWFyVmFsdWVPblNlbGVjdCA/ICcnIDogc2VsZWN0ZWQubGFiZWw7XG4gICAgICB0aGlzLl92YWx1ZSA9IHNlbGVjdGVkLnZhbHVlO1xuICAgICAgdGhpcy5jaGFuZ2VkLmVtaXQoeyB2YWx1ZTogc2VsZWN0ZWQudmFsdWUsIHJhd1ZhbHVlOiB7IGxhYmVsOiB0aGlzLnRlcm0sIHZhbHVlOiBzZWxlY3RlZC52YWx1ZSB9IH0pO1xuICAgICAgdGhpcy5zZWxlY3QuZW1pdChzZWxlY3RlZCk7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2Uoc2VsZWN0ZWQudmFsdWUpO1xuICAgICAgaWYgKHRoaXMucG9wdXApIHtcbiAgICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHsgdmFsdWU6IHNlbGVjdGVkLnZhbHVlLCByYXdWYWx1ZTogeyBsYWJlbDogdGhpcy50ZXJtLCB2YWx1ZTogdGhpcy5fdmFsdWUgfSB9KTtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoc2VsZWN0ZWQpO1xuICAgIH1cbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8vIE1ha2VzIHN1cmUgdG8gY2xlYXIgdGhlIG1vZGVsIGlmIHRoZSB1c2VyIGNsZWFycyB0aGUgdGV4dCBib3hcbiAgY2hlY2tUZXJtKGV2ZW50KSB7XG4gICAgdGhpcy50eXBpbmcuZW1pdChldmVudCk7XG4gICAgaWYgKCFldmVudCB8fCAhZXZlbnQubGVuZ3RoKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8vIFNldCB0b3VjaGVkIG9uIGJsdXJcbiAgb25Ub3VjaGVkKGV2ZW50PzogRXZlbnQpIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgLy8gRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuY2xlYXJWYWx1ZU9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnRlcm0gPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgIXRoaXMuY29uZmlnLnVzZUdldExhYmVscykge1xuICAgICAgICB0aGlzLnRlcm0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdmFsdWUubGFiZWwpIHtcbiAgICAgICAgdGhpcy50ZXJtID0gdmFsdWUubGFiZWw7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLmZpcnN0TmFtZSkge1xuICAgICAgICB0aGlzLnRlcm0gPSBgJHt2YWx1ZS5maXJzdE5hbWV9ICR7dmFsdWUubGFzdE5hbWV9YDtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdmFsdWUubmFtZSkge1xuICAgICAgICB0aGlzLnRlcm0gPSB2YWx1ZS5uYW1lO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5jb25maWcuZ2V0TGFiZWxzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmdldExhYmVscyh2YWx1ZSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy50ZXJtID0gcmVzdWx0Lmxlbmd0aCA/IHJlc3VsdFswXS5sYWJlbCB8fCAnJyA6IHJlc3VsdC5sYWJlbCB8fCAnJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50ZXJtID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdmFsdWUudGl0bGUpIHtcbiAgICAgICAgdGhpcy50ZXJtID0gdmFsdWUudGl0bGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRlcm0gPSB2YWx1ZSB8fCAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fZGlzYWJsZVBpY2tlcklucHV0ID0gZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==