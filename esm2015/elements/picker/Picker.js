/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    useExisting: forwardRef(() => NovoPickerElement),
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
        this.isStatic = true;
        this.term = '';
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
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
        pasteObserver.subscribe((event) => this.onDebouncedKeyup(event), (err) => this.hideResults(err));
        /** @type {?} */
        const keyboardObserver = fromEvent(this.input.nativeElement, 'keyup').pipe(debounceTime(250), distinctUntilChanged());
        keyboardObserver.subscribe((event) => this.onDebouncedKeyup(event), (err) => this.hideResults(err));
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
     * BEGIN: Convenient Panel Methods.
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
     * END: Convenient Panel Methods.
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
     * @private
     * @return {?}
     */
    hide() {
        this.closePanel();
        this.ref.markForCheck();
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
                this.popup.instance.selectActiveMatch();
                this.ref.markForCheck();
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
            this.term = null;
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
    /**
     * \@name showResults
     *
     * \@description This method creates an instance of the results (called popup) and adds all the bindings to that
     * instance.
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
            this.popup = this.componentUtils.appendNextToLocation(this.resultsComponent, this.results);
            this.popup.instance.parent = this;
            this.popup.instance.config = this.config;
            this.popup.instance.term = this.term;
            this.popup.instance.selected = this.selected;
            this.popup.instance.autoSelectFirstOption = this.autoSelectFirstOption;
            this.popup.instance.overlay = this.container.overlayRef;
            this.ref.markForCheck();
        }
    }
    /**
     * \@name hideResults
     *
     * \@description - This method deletes the picker results from the DOM.
     * @param {?=} err
     * @return {?}
     */
    hideResults(err) {
        if (this.popup) {
            this.popup.destroy();
            this.popup = null;
        }
        this.hide();
    }
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
            if (typeof value === 'string') {
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
            autocomplete="off" #input
            [disabled]="disablePickerInput"/>
        <i class="bhi-search" *ngIf="(!_value || clearValueOnSelect) && !disablePickerInput"></i>
        <i class="bhi-times" [class.entity-selected]="config?.entityIcon && _value" *ngIf="_value && !clearValueOnSelect && !disablePickerInput" (click)="clearValue(true)"></i>
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
    NovoPickerElement.prototype.closeHandler;
    /** @type {?} */
    NovoPickerElement.prototype.isStatic;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3BpY2tlci9QaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRW5ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUVqQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7TUFHdEQscUJBQXFCLEdBQUc7SUFDNUIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hELEtBQUssRUFBRSxJQUFJO0NBQ1o7Ozs7Ozs7OztBQXNDRCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUF5RTVCLFlBQW1CLE9BQW1CLEVBQVUsY0FBOEIsRUFB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OztJQUNsQixxQ0FBeUI7O0lBQ3pCLGlDQUFrQjs7SUFDbEIsNkNBQXNCOztJQUN0QixrQ0FBVzs7SUFDWCxtQ0FBWTs7SUFDWiwwQ0FBbUM7O0lBQ25DLDJDQUFvQzs7SUFFeEIsb0NBQTBCOzs7OztJQUFFLDJDQUFzQzs7Ozs7SUFBRSxnQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBWZW5kb3JcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG4vLyBBUFBcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcbmltcG9ydCB7IFBpY2tlclJlc3VsdHMgfSBmcm9tICcuL2V4dHJhcy9waWNrZXItcmVzdWx0cy9QaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9vdmVybGF5L092ZXJsYXknO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgUElDS0VSX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b1BpY2tlckVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbi8qKlxuICogQG5hbWUgUGlja2VyXG4gKlxuICogQGRlc2NyaXB0aW9uIFRoaXMgY2xhc3MgaXMgdGhlIGRpcmVjdGl2ZSBkZWZpbml0aW9uIG9mIHRoZSBQaWNrZXIuIElmIHlvdSBhZGQgYW5kIGF0dHJpYnV0ZSBvZiBgcGlja2VyYCB0byBhbiBpbnB1dCxcbiAqIGl0IHdpbGwgY3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBwaWNrZXIgd2hpY2ggd3JhcHMgdGhlIGlucHV0IGluIGFsbCBvZiB0aGUgcGlja2VyIEhUTUwgZWxlbWVudHMgYW5kIGZ1bmN0aW9uYWxpdHkuXG4gKiBQaWNrZXIgc2hvdWxkIGJlIGFkZGVkIGFzIGEgdHdvLXdheSBib3VuZCBuZ01vZGVsIGluc3RhbmNlIGBbKHBpY2tlcildPVwiXCJgIGluIG9yZGVyIHRvIGhhdmUgdGhlIHBpY2tlciBvcHRpb25zXG4gKiBkeW5hbWljYWxseSBwb3B1bGF0ZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1waWNrZXInLFxuICBwcm92aWRlcnM6IFtQSUNLRVJfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aSBjbGFzcz1cImJoaS1tb3JlXCIgKm5nSWY9XCJjb25maWc/LmVudGl0eUljb24gJiYgIV92YWx1ZVwiPjwvaT5cbiAgICAgICAgPGkgY2xhc3M9XCJiaGkte3sgY29uZmlnPy5lbnRpdHlJY29uIH19IGVudGl0eS1pY29uIHt7IGNvbmZpZz8uZW50aXR5SWNvbiB9fVwiICpuZ0lmPVwiY29uZmlnPy5lbnRpdHlJY29uICYmIF92YWx1ZVwiPjwvaT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzcz1cInBpY2tlci1pbnB1dFwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cInRlcm1cIlxuICAgICAgICAgICAgW2NsYXNzLmVudGl0eS1waWNrZXJdPVwiY29uZmlnPy5lbnRpdHlJY29uXCJcbiAgICAgICAgICAgIFtjbGFzcy5lbnRpdHktc2VsZWN0ZWRdPVwiY29uZmlnPy5lbnRpdHlJY29uICYmIF92YWx1ZVwiXG4gICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGVja1Rlcm0oJGV2ZW50KVwiXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25Gb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAgIChibHVyKT1cIm9uVG91Y2hlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiICNpbnB1dFxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVQaWNrZXJJbnB1dFwiLz5cbiAgICAgICAgPGkgY2xhc3M9XCJiaGktc2VhcmNoXCIgKm5nSWY9XCIoIV92YWx1ZSB8fCBjbGVhclZhbHVlT25TZWxlY3QpICYmICFkaXNhYmxlUGlja2VySW5wdXRcIj48L2k+XG4gICAgICAgIDxpIGNsYXNzPVwiYmhpLXRpbWVzXCIgW2NsYXNzLmVudGl0eS1zZWxlY3RlZF09XCJjb25maWc/LmVudGl0eUljb24gJiYgX3ZhbHVlXCIgKm5nSWY9XCJfdmFsdWUgJiYgIWNsZWFyVmFsdWVPblNlbGVjdCAmJiAhZGlzYWJsZVBpY2tlcklucHV0XCIgKGNsaWNrKT1cImNsZWFyVmFsdWUodHJ1ZSlcIj48L2k+XG4gICAgICAgIDxub3ZvLW92ZXJsYXktdGVtcGxhdGUgY2xhc3M9XCJwaWNrZXItcmVzdWx0cy1jb250YWluZXJcIiBbcGFyZW50XT1cImVsZW1lbnRcIiBwb3NpdGlvbj1cImFib3ZlLWJlbG93XCIgKGNsb3NpbmcpPVwib25PdmVybGF5Q2xvc2VkKClcIj5cbiAgICAgICAgICAgIDxzcGFuICNyZXN1bHRzPjwvc3Bhbj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9ub3ZvLW92ZXJsYXktdGVtcGxhdGU+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1BpY2tlckVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBDb250YWluZXIgZm9yIHRoZSByZXN1bHRzXG4gIEBWaWV3Q2hpbGQoJ3Jlc3VsdHMnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgcmVzdWx0czogVmlld0NvbnRhaW5lclJlZjtcblxuICBASW5wdXQoKVxuICBjb25maWc6IGFueTtcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KClcbiAgY2xlYXJWYWx1ZU9uU2VsZWN0OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBjbG9zZU9uU2VsZWN0OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgc2VsZWN0ZWQ6IEFycmF5PGFueT4gPSBbXTtcbiAgLy8gRGVwcmVjYXRlZFxuICBASW5wdXQoKVxuICBhcHBlbmRUb0JvZHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gRGVwcmVjYXRlZFxuICBASW5wdXQoKVxuICBwYXJlbnRTY3JvbGxTZWxlY3Rvcjogc3RyaW5nO1xuICAvLyBEZXByZWNhdGVkXG4gIEBJbnB1dCgpXG4gIHBhcmVudFNjcm9sbEFjdGlvbjogc3RyaW5nID0gJ2Nsb3NlJztcbiAgLy8gQ3VzdG9tIGNsYXNzIGZvciB0aGUgZHJvcGRvd24gY29udGFpbmVyXG4gIEBJbnB1dCgpXG4gIGNvbnRhaW5lckNsYXNzOiBzdHJpbmc7XG4gIC8vIFNpZGUgdGhlIGRyb3Bkb3duIHdpbGwgb3BlblxuICBASW5wdXQoKVxuICBzaWRlOiBzdHJpbmcgPSAnbGVmdCc7XG4gIC8vIEF1dG9zZWxlY3RzIHRoZSBmaXJzdCBvcHRpb24gaW4gdGhlIHJlc3VsdHNcbiAgQElucHV0KClcbiAgYXV0b1NlbGVjdEZpcnN0T3B0aW9uOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgb3ZlcnJpZGVFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIC8vIERpc2FibGUgZnJvbSB0eXBpbmcgaW50byB0aGUgcGlja2VyIChyZXN1bHQgdGVtcGxhdGUgZG9lcyBldmVyeXRoaW5nKVxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZVBpY2tlcklucHV0KHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlUGlja2VySW5wdXQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cblxuICBnZXQgZGlzYWJsZVBpY2tlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlUGlja2VySW5wdXQ7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZVBpY2tlcklucHV0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gRW1pdHRlciBmb3Igc2VsZWN0c1xuICBAT3V0cHV0KClcbiAgY2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICB0eXBpbmc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudClcbiAgcHVibGljIGNvbnRhaW5lcjogTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnaW5wdXQnKVxuICBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmO1xuXG4gIGNsb3NlSGFuZGxlcjogYW55O1xuICBpc1N0YXRpYzogYm9vbGVhbiA9IHRydWU7XG4gIHRlcm06IHN0cmluZyA9ICcnO1xuICByZXN1bHRzQ29tcG9uZW50OiBhbnk7XG4gIHBvcHVwOiBhbnk7XG4gIF92YWx1ZTogYW55O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMsIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5vdmVycmlkZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMub3ZlcnJpZGVFbGVtZW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgIG5vdGlmeShgJ2FwcGVuZFRvQm9keScgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIHJlbW92ZSB0aGlzIGF0dHJpYnV0ZS5gKTtcbiAgICB9XG4gICAgLy8gQ3VzdG9tIHJlc3VsdHMgdGVtcGxhdGVcbiAgICB0aGlzLnJlc3VsdHNDb21wb25lbnQgPSB0aGlzLmNvbmZpZy5yZXN1bHRzVGVtcGxhdGUgfHwgUGlja2VyUmVzdWx0cztcbiAgICAvLyBHZXQgYWxsIGRpc3RpbmN0IGtleSB1cCBldmVudHMgZnJvbSB0aGUgaW5wdXQgYW5kIG9ubHkgZmlyZSBpZiBsb25nIGVub3VnaCBhbmQgZGlzdGluY3RcbiAgICAvLyBsZXQgaW5wdXQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGNvbnN0IHBhc3RlT2JzZXJ2ZXIgPSBmcm9tRXZlbnQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LCAncGFzdGUnKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDI1MCksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICk7XG4gICAgcGFzdGVPYnNlcnZlci5zdWJzY3JpYmUoKGV2ZW50OiBDbGlwYm9hcmRFdmVudCkgPT4gdGhpcy5vbkRlYm91bmNlZEtleXVwKGV2ZW50KSwgKGVycikgPT4gdGhpcy5oaWRlUmVzdWx0cyhlcnIpKTtcbiAgICBjb25zdCBrZXlib2FyZE9ic2VydmVyID0gZnJvbUV2ZW50KHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCwgJ2tleXVwJykucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgyNTApLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICApO1xuICAgIGtleWJvYXJkT2JzZXJ2ZXIuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5vbkRlYm91bmNlZEtleXVwKGV2ZW50KSwgKGVycikgPT4gdGhpcy5oaWRlUmVzdWx0cyhlcnIpKTtcbiAgfVxuXG4gIHByaXZhdGUgb25EZWJvdW5jZWRLZXl1cChldmVudDogRXZlbnQpIHtcbiAgICBpZiAoW0tleUNvZGVzLkVTQywgS2V5Q29kZXMuVVAsIEtleUNvZGVzLkRPV04sIEtleUNvZGVzLkVOVEVSLCBLZXlDb2Rlcy5UQUJdLmluY2x1ZGVzKGV2ZW50WydrZXlDb2RlJ10pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2hvdygoZXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWUpO1xuICB9XG5cbiAgLyoqIEJFR0lOOiBDb252ZW5pZW50IFBhbmVsIE1ldGhvZHMuICovXG4gIHB1YmxpYyBvcGVuUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy5jb250YWluZXIub3BlblBhbmVsKCk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VQYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRhaW5lci5jbG9zZVBhbmVsKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhbmVsT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXIgJiYgdGhpcy5jb250YWluZXIucGFuZWxPcGVuO1xuICB9XG5cbiAgLyoqIEVORDogQ29udmVuaWVudCBQYW5lbCBNZXRob2RzLiAqL1xuXG4gIHByaXZhdGUgc2hvdyh0ZXJtPzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICAvLyBTaG93IHRoZSByZXN1bHRzIGluc2lkZVxuICAgIHRoaXMuc2hvd1Jlc3VsdHModGVybSk7XG4gIH1cblxuICBwcml2YXRlIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlUGlja2VySW5wdXQpIHtcbiAgICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFuZWxPcGVuICYmICF0aGlzLmRpc2FibGVQaWNrZXJJbnB1dCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVTQyB8fCBldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5UQUIpIHtcbiAgICAgICAgdGhpcy5oaWRlUmVzdWx0cygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5VUCkge1xuICAgICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnByZXZBY3RpdmVNYXRjaCgpO1xuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRE9XTikge1xuICAgICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLm5leHRBY3RpdmVNYXRjaCgpO1xuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRU5URVIpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5zZWxlY3RBY3RpdmVNYXRjaCgpO1xuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkJBQ0tTUEFDRSB8fCBldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5ERUxFVEUpICYmICFIZWxwZXJzLmlzQmxhbmsodGhpcy5fdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuY2xlYXJWYWx1ZShmYWxzZSk7XG4gICAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkRFTEVURSAmJiBIZWxwZXJzLmlzQmxhbmsodGhpcy5fdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuY2xlYXJWYWx1ZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGVhclZhbHVlKHdpcGVUZXJtKSB7XG4gICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcy5fdmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlZC5lbWl0KHsgdmFsdWU6IHRoaXMuX3ZhbHVlLCByYXdWYWx1ZTogeyBsYWJlbDogJycsIHZhbHVlOiB0aGlzLl92YWx1ZSB9IH0pO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLl92YWx1ZSk7XG5cbiAgICBpZiAod2lwZVRlcm0pIHtcbiAgICAgIHRoaXMudGVybSA9IG51bGw7XG4gICAgICB0aGlzLmhpZGVSZXN1bHRzKCk7XG4gICAgfVxuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uRm9jdXNcbiAgICogQGRlc2NyaXB0aW9uIFdoZW4gdGhlIGlucHV0J3MgZm9jdXMgZXZlbnQgaXMgY2FsbGVkIHRoaXMgbWV0aG9kIGNhbGxzIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkaXNwbGF5cyB0aGVcbiAgICogcmVzdWx0cy5cbiAgICovXG4gIG9uRm9jdXMoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzaG93UmVzdWx0c1xuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBtZXRob2QgY3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgcmVzdWx0cyAoY2FsbGVkIHBvcHVwKSBhbmQgYWRkcyBhbGwgdGhlIGJpbmRpbmdzIHRvIHRoYXRcbiAgICogaW5zdGFuY2UuXG4gICAqL1xuICBzaG93UmVzdWx0cyh0ZXJtPzogYW55KSB7XG4gICAgLy8gVXBkYXRlIE1hdGNoZXNcbiAgICBpZiAodGhpcy5wb3B1cCkge1xuICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIGxpc3Qgb3IgY3JlYXRlIHRoZSBET00gZWxlbWVudFxuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UudGVybSA9IHRoaXMudGVybTtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2Uuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5hdXRvU2VsZWN0Rmlyc3RPcHRpb24gPSB0aGlzLmF1dG9TZWxlY3RGaXJzdE9wdGlvbjtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvcHVwID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmROZXh0VG9Mb2NhdGlvbih0aGlzLnJlc3VsdHNDb21wb25lbnQsIHRoaXMucmVzdWx0cyk7XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnBhcmVudCA9IHRoaXM7XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS50ZXJtID0gdGhpcy50ZXJtO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLmF1dG9TZWxlY3RGaXJzdE9wdGlvbiA9IHRoaXMuYXV0b1NlbGVjdEZpcnN0T3B0aW9uO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5vdmVybGF5ID0gdGhpcy5jb250YWluZXIub3ZlcmxheVJlZjtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBoaWRlUmVzdWx0c1xuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gLSBUaGlzIG1ldGhvZCBkZWxldGVzIHRoZSBwaWNrZXIgcmVzdWx0cyBmcm9tIHRoZSBET00uXG4gICAqL1xuICBoaWRlUmVzdWx0cyhlcnI/OiBhbnkpIHtcbiAgICBpZiAodGhpcy5wb3B1cCkge1xuICAgICAgdGhpcy5wb3B1cC5kZXN0cm95KCk7XG4gICAgICB0aGlzLnBvcHVwID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cblxuICBvbk92ZXJsYXlDbG9zZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucG9wdXAgJiYgdGhpcy5wb3B1cC5pbnN0YW5jZSAmJiB0aGlzLnBvcHVwLmluc3RhbmNlLmNsZWFuVXApIHtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UuY2xlYW5VcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGdldCBhY2Nlc3NvclxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgLy8gc2V0IGFjY2Vzc29yIGluY2x1ZGluZyBjYWxsIHRoZSBvbmNoYW5nZSBjYWxsYmFja1xuICBzZXQgdmFsdWUoc2VsZWN0ZWQpIHtcbiAgICBpZiAoIXNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnRlcm0gPSAnJztcbiAgICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZC52YWx1ZSAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMudGVybSA9IHRoaXMuY2xlYXJWYWx1ZU9uU2VsZWN0ID8gJycgOiBzZWxlY3RlZC5sYWJlbDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gc2VsZWN0ZWQudmFsdWU7XG4gICAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiBzZWxlY3RlZC52YWx1ZSwgcmF3VmFsdWU6IHsgbGFiZWw6IHRoaXMudGVybSwgdmFsdWU6IHNlbGVjdGVkLnZhbHVlIH0gfSk7XG4gICAgICB0aGlzLnNlbGVjdC5lbWl0KHNlbGVjdGVkKTtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZShzZWxlY3RlZC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHsgdmFsdWU6IHNlbGVjdGVkLnZhbHVlLCByYXdWYWx1ZTogeyBsYWJlbDogdGhpcy50ZXJtLCB2YWx1ZTogdGhpcy5fdmFsdWUgfSB9KTtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoc2VsZWN0ZWQpO1xuICAgIH1cbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8vIE1ha2VzIHN1cmUgdG8gY2xlYXIgdGhlIG1vZGVsIGlmIHRoZSB1c2VyIGNsZWFycyB0aGUgdGV4dCBib3hcbiAgY2hlY2tUZXJtKGV2ZW50KSB7XG4gICAgdGhpcy50eXBpbmcuZW1pdChldmVudCk7XG4gICAgaWYgKCFldmVudCB8fCAhZXZlbnQubGVuZ3RoKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8vIFNldCB0b3VjaGVkIG9uIGJsdXJcbiAgb25Ub3VjaGVkKGV2ZW50PzogRXZlbnQpIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgLy8gRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuY2xlYXJWYWx1ZU9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnRlcm0gPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy50ZXJtID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLmxhYmVsKSB7XG4gICAgICAgIHRoaXMudGVybSA9IHZhbHVlLmxhYmVsO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB2YWx1ZS5maXJzdE5hbWUpIHtcbiAgICAgICAgdGhpcy50ZXJtID0gYCR7dmFsdWUuZmlyc3ROYW1lfSAke3ZhbHVlLmxhc3ROYW1lfWA7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLm5hbWUpIHtcbiAgICAgICAgdGhpcy50ZXJtID0gdmFsdWUubmFtZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmdldExhYmVscyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLmNvbmZpZy5nZXRMYWJlbHModmFsdWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMudGVybSA9IHJlc3VsdC5sZW5ndGggPyByZXN1bHRbMF0ubGFiZWwgfHwgJycgOiByZXN1bHQubGFiZWwgfHwgJyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGVybSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLnRpdGxlKSB7XG4gICAgICAgIHRoaXMudGVybSA9IHZhbHVlLnRpdGxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50ZXJtID0gdmFsdWUgfHwgJyc7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX2Rpc2FibGVQaWNrZXJJbnB1dCA9IGRpc2FibGVkO1xuICB9XG59XG4iXX0=