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
        if ([KeyCodes.ESC, KeyCodes.UP, KeyCodes.DOWN, KeyCodes.ENTER, KeyCodes.TAB].includes(event['keyCode'])) {
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
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja2VyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3BpY2tlci9QaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUVULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxTQUFTO0FBQ1QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsTUFBTTtBQUNOLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHNUQsc0RBQXNEO0FBQ3RELE1BQU0scUJBQXFCLEdBQUc7SUFDNUIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDO0lB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QU07b0JBRU4sTUFBTTttQkFFTixNQUFNO3FCQUVOLE1BQU07d0JBR04sU0FBUyxTQUFDLDRCQUE0QixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtvQkFFeEQsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudFJlZixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbi8vIEFQUFxuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgUGlja2VyUmVzdWx0cyB9IGZyb20gJy4vZXh0cmFzL3BpY2tlci1yZXN1bHRzL1BpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL292ZXJsYXkvT3ZlcmxheSc7XG5pbXBvcnQgeyBub3RpZnkgfSBmcm9tICcuLi8uLi91dGlscy9ub3RpZmllci9ub3RpZmllci51dGlsJztcbmltcG9ydCB7IE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi4vZm9ybS9Gb3JtQ29udHJvbHMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IFBJQ0tFUl9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9QaWNrZXJFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIGNsYXNzIGlzIHRoZSBkaXJlY3RpdmUgZGVmaW5pdGlvbiBvZiB0aGUgUGlja2VyLiBJZiB5b3UgYWRkIGFuZCBhdHRyaWJ1dGUgb2YgYHBpY2tlcmAgdG8gYW4gaW5wdXQsXG4gKiBpdCB3aWxsIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgcGlja2VyIHdoaWNoIHdyYXBzIHRoZSBpbnB1dCBpbiBhbGwgb2YgdGhlIHBpY2tlciBIVE1MIGVsZW1lbnRzIGFuZCBmdW5jdGlvbmFsaXR5LlxuICogUGlja2VyIHNob3VsZCBiZSBhZGRlZCBhcyBhIHR3by13YXkgYm91bmQgbmdNb2RlbCBpbnN0YW5jZSBgWyhwaWNrZXIpXT1cIlwiYCBpbiBvcmRlciB0byBoYXZlIHRoZSBwaWNrZXIgb3B0aW9uc1xuICogZHluYW1pY2FsbHkgcG9wdWxhdGUuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcGlja2VyJyxcbiAgcHJvdmlkZXJzOiBbUElDS0VSX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aSBjbGFzcz1cImJoaS1tb3JlXCIgKm5nSWY9XCJjb25maWc/LmVudGl0eUljb24gJiYgIV92YWx1ZVwiPjwvaT5cbiAgICA8aSBjbGFzcz1cImJoaS17eyBjb25maWc/LmVudGl0eUljb24gfX0gZW50aXR5LWljb24ge3sgY29uZmlnPy5lbnRpdHlJY29uIH19XCIgKm5nSWY9XCJjb25maWc/LmVudGl0eUljb24gJiYgX3ZhbHVlXCI+PC9pPlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgY2xhc3M9XCJwaWNrZXItaW5wdXRcIlxuICAgICAgWyhuZ01vZGVsKV09XCJ0ZXJtXCJcbiAgICAgIFtjbGFzcy5lbnRpdHktcGlja2VyXT1cImNvbmZpZz8uZW50aXR5SWNvblwiXG4gICAgICBbY2xhc3MuZW50aXR5LXNlbGVjdGVkXT1cImNvbmZpZz8uZW50aXR5SWNvbiAmJiBfdmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hlY2tUZXJtKCRldmVudClcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcbiAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxuICAgICAgKGNsaWNrKT1cIm9uRm9jdXMoJGV2ZW50KVwiXG4gICAgICAoYmx1cik9XCJvblRvdWNoZWQoJGV2ZW50KVwiXG4gICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgI2lucHV0XG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZVBpY2tlcklucHV0XCJcbiAgICAvPlxuICAgIDxpIGNsYXNzPVwiYmhpLXNlYXJjaFwiICpuZ0lmPVwiKCFfdmFsdWUgfHwgY2xlYXJWYWx1ZU9uU2VsZWN0KSAmJiAhZGlzYWJsZVBpY2tlcklucHV0XCI+PC9pPlxuICAgIDxpXG4gICAgICBjbGFzcz1cImJoaS10aW1lc1wiXG4gICAgICBbY2xhc3MuZW50aXR5LXNlbGVjdGVkXT1cImNvbmZpZz8uZW50aXR5SWNvbiAmJiBfdmFsdWVcIlxuICAgICAgKm5nSWY9XCJfdmFsdWUgJiYgIWNsZWFyVmFsdWVPblNlbGVjdCAmJiAhZGlzYWJsZVBpY2tlcklucHV0XCJcbiAgICAgIChjbGljayk9XCJjbGVhclZhbHVlKHRydWUpXCJcbiAgICA+PC9pPlxuICAgIDxub3ZvLW92ZXJsYXktdGVtcGxhdGUgY2xhc3M9XCJwaWNrZXItcmVzdWx0cy1jb250YWluZXJcIiBbcGFyZW50XT1cImVsZW1lbnRcIiBwb3NpdGlvbj1cImFib3ZlLWJlbG93XCIgKGNsb3NpbmcpPVwib25PdmVybGF5Q2xvc2VkKClcIj5cbiAgICAgIDxzcGFuICNyZXN1bHRzPjwvc3Bhbj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L25vdm8tb3ZlcmxheS10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1BpY2tlckVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBDb250YWluZXIgZm9yIHRoZSByZXN1bHRzXG4gIEBWaWV3Q2hpbGQoJ3Jlc3VsdHMnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICByZXN1bHRzOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBJbnB1dCgpXG4gIGNvbmZpZzogTm92b0NvbnRyb2xDb25maWdbJ2NvbmZpZyddO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBjbGVhclZhbHVlT25TZWxlY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBzZWxlY3RlZDogQXJyYXk8YW55PiA9IFtdO1xuICAvLyBEZXByZWNhdGVkXG4gIEBJbnB1dCgpXG4gIGFwcGVuZFRvQm9keTogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBEZXByZWNhdGVkXG4gIEBJbnB1dCgpXG4gIHBhcmVudFNjcm9sbFNlbGVjdG9yOiBzdHJpbmc7XG4gIC8vIERlcHJlY2F0ZWRcbiAgQElucHV0KClcbiAgcGFyZW50U2Nyb2xsQWN0aW9uOiBzdHJpbmcgPSAnY2xvc2UnO1xuICAvLyBDdXN0b20gY2xhc3MgZm9yIHRoZSBkcm9wZG93biBjb250YWluZXJcbiAgQElucHV0KClcbiAgY29udGFpbmVyQ2xhc3M6IHN0cmluZztcbiAgLy8gU2lkZSB0aGUgZHJvcGRvd24gd2lsbCBvcGVuXG4gIEBJbnB1dCgpXG4gIHNpZGU6IHN0cmluZyA9ICdsZWZ0JztcbiAgLy8gQXV0b3NlbGVjdHMgdGhlIGZpcnN0IG9wdGlvbiBpbiB0aGUgcmVzdWx0c1xuICBASW5wdXQoKVxuICBhdXRvU2VsZWN0Rmlyc3RPcHRpb246IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBvdmVycmlkZUVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgLy8gRGlzYWJsZSBmcm9tIHR5cGluZyBpbnRvIHRoZSBwaWNrZXIgKHJlc3VsdCB0ZW1wbGF0ZSBkb2VzIGV2ZXJ5dGhpbmcpXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlUGlja2VySW5wdXQodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVQaWNrZXJJbnB1dCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuXG4gIGdldCBkaXNhYmxlUGlja2VySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVQaWNrZXJJbnB1dDtcbiAgfVxuXG4gIHByaXZhdGUgX2Rpc2FibGVQaWNrZXJJbnB1dDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIEVtaXR0ZXIgZm9yIHNlbGVjdHNcbiAgQE91dHB1dCgpXG4gIGNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgdHlwaW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHB1YmxpYyBjb250YWluZXI6IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHJpdmF0ZSBpbnB1dDogRWxlbWVudFJlZjtcblxuICB0ZXJtOiBzdHJpbmcgPSAnJztcbiAgcmVzdWx0c0NvbXBvbmVudDogYW55O1xuICBwb3B1cDogQ29tcG9uZW50UmVmPGFueT47XG4gIF92YWx1ZTogYW55O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscywgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5vdmVycmlkZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMub3ZlcnJpZGVFbGVtZW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgIG5vdGlmeShgJ2FwcGVuZFRvQm9keScgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIHJlbW92ZSB0aGlzIGF0dHJpYnV0ZS5gKTtcbiAgICB9XG4gICAgLy8gQ3VzdG9tIHJlc3VsdHMgdGVtcGxhdGVcbiAgICB0aGlzLnJlc3VsdHNDb21wb25lbnQgPSB0aGlzLmNvbmZpZy5yZXN1bHRzVGVtcGxhdGUgfHwgUGlja2VyUmVzdWx0cztcbiAgICAvLyBHZXQgYWxsIGRpc3RpbmN0IGtleSB1cCBldmVudHMgZnJvbSB0aGUgaW5wdXQgYW5kIG9ubHkgZmlyZSBpZiBsb25nIGVub3VnaCBhbmQgZGlzdGluY3RcbiAgICAvLyBsZXQgaW5wdXQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGNvbnN0IHBhc3RlT2JzZXJ2ZXIgPSBmcm9tRXZlbnQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LCAncGFzdGUnKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDI1MCksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICk7XG4gICAgcGFzdGVPYnNlcnZlci5zdWJzY3JpYmUoKGV2ZW50OiBDbGlwYm9hcmRFdmVudCkgPT4gdGhpcy5vbkRlYm91bmNlZEtleXVwKGV2ZW50KSwgKGVycikgPT4gdGhpcy5oaWRlUmVzdWx0cyhlcnIpKTtcbiAgICBjb25zdCBrZXlib2FyZE9ic2VydmVyID0gZnJvbUV2ZW50KHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCwgJ2tleXVwJykucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgyNTApLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICApO1xuICAgIGtleWJvYXJkT2JzZXJ2ZXIuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5vbkRlYm91bmNlZEtleXVwKGV2ZW50KSwgKGVycikgPT4gdGhpcy5oaWRlUmVzdWx0cyhlcnIpKTtcbiAgfVxuXG4gIHByaXZhdGUgb25EZWJvdW5jZWRLZXl1cChldmVudDogRXZlbnQpIHtcbiAgICBpZiAoW0tleUNvZGVzLkVTQywgS2V5Q29kZXMuVVAsIEtleUNvZGVzLkRPV04sIEtleUNvZGVzLkVOVEVSLCBLZXlDb2Rlcy5UQUJdLmluY2x1ZGVzKGV2ZW50WydrZXlDb2RlJ10pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2hvdygoZXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWUpO1xuICB9XG5cbiAgcHVibGljIG9wZW5QYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRhaW5lci5vcGVuUGFuZWwoKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZVBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMuY29udGFpbmVyLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGFuZWxPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRhaW5lci5wYW5lbE9wZW47XG4gIH1cblxuICBwcml2YXRlIHNob3codGVybT86IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMub3BlblBhbmVsKCk7XG4gICAgLy8gU2hvdyB0aGUgcmVzdWx0cyBpbnNpZGVcbiAgICB0aGlzLnNob3dSZXN1bHRzKHRlcm0pO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZVBpY2tlcklucHV0KSB7XG4gICAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnBhbmVsT3BlbiAmJiAhdGhpcy5kaXNhYmxlUGlja2VySW5wdXQpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FU0MgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuVEFCKSB7XG4gICAgICAgIHRoaXMuaGlkZVJlc3VsdHMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuVVApIHtcbiAgICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5wcmV2QWN0aXZlTWF0Y2goKTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkRPV04pIHtcbiAgICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5uZXh0QWN0aXZlTWF0Y2goKTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVOVEVSKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZU1hdGNoID0gdGhpcy5wb3B1cC5pbnN0YW5jZS5hY3RpdmVNYXRjaDtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkLmZpbmQoKHNlbGVjdGVkKSA9PiBhY3RpdmVNYXRjaCAmJiBhY3RpdmVNYXRjaC52YWx1ZSAmJiBzZWxlY3RlZC52YWx1ZSA9PT0gYWN0aXZlTWF0Y2gudmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5zZWxlY3RBY3RpdmVNYXRjaCgpO1xuICAgICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5CQUNLU1BBQ0UgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuREVMRVRFKSAmJiAhSGVscGVycy5pc0JsYW5rKHRoaXMuX3ZhbHVlKSkge1xuICAgICAgICB0aGlzLmNsZWFyVmFsdWUoZmFsc2UpO1xuICAgICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5ERUxFVEUgJiYgSGVscGVycy5pc0JsYW5rKHRoaXMuX3ZhbHVlKSkge1xuICAgICAgICB0aGlzLmNsZWFyVmFsdWUodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xlYXJWYWx1ZSh3aXBlVGVybSkge1xuICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiB0aGlzLl92YWx1ZSwgcmF3VmFsdWU6IHsgbGFiZWw6ICcnLCB2YWx1ZTogdGhpcy5fdmFsdWUgfSB9KTtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5fdmFsdWUpO1xuXG4gICAgaWYgKHdpcGVUZXJtKSB7XG4gICAgICB0aGlzLnRlcm0gPSAnJztcbiAgICAgIHRoaXMuaGlkZVJlc3VsdHMoKTtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFdoZW4gdGhlIGlucHV0J3MgZm9jdXMgZXZlbnQgaXMgY2FsbGVkIHRoaXMgbWV0aG9kIGNhbGxzIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkaXNwbGF5cyB0aGVcbiAgICogcmVzdWx0cy5cbiAgICovXG4gIG9uRm9jdXMoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIC8vIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIHJlc3VsdHMgKGNhbGxlZCBwb3B1cCkgYW5kIGFkZHMgYWxsIHRoZSBiaW5kaW5ncyB0byB0aGF0IGluc3RhbmNlLlxuICBzaG93UmVzdWx0cyh0ZXJtPzogYW55KSB7XG4gICAgLy8gVXBkYXRlIE1hdGNoZXNcbiAgICBpZiAodGhpcy5wb3B1cCkge1xuICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIGxpc3Qgb3IgY3JlYXRlIHRoZSBET00gZWxlbWVudFxuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UudGVybSA9IHRoaXMudGVybTtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2Uuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5hdXRvU2VsZWN0Rmlyc3RPcHRpb24gPSB0aGlzLmF1dG9TZWxlY3RGaXJzdE9wdGlvbjtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvcHVwID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmQodGhpcy5yZXN1bHRzQ29tcG9uZW50LCB0aGlzLnJlc3VsdHMpO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5wYXJlbnQgPSB0aGlzO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UudGVybSA9IHRoaXMudGVybTtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2Uuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5hdXRvU2VsZWN0Rmlyc3RPcHRpb24gPSB0aGlzLmF1dG9TZWxlY3RGaXJzdE9wdGlvbjtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2Uub3ZlcmxheSA9IHRoaXMuY29udGFpbmVyLm92ZXJsYXlSZWY7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvLyBUZWxscyB0aGUgb3ZlcmxheSBjb21wb25lbnQgdG8gaGlkZSB0aGUgcGlja2VyIHJlc3VsdHMgZnJvbSB0aGUgRE9NIHdpdGhvdXQgZGVsZXRpbmcgdGhlIGR5bmFtaWNhbGx5IGFsbG9jYXRlZCBwb3B1cCBpbnN0YW5jZSBjcmVhdGVkIGluXG4gIC8vIHNob3dSZXN1bHRzLiBUaGUgcG9wdXAgaW5zdGFuY2Ugd2lsbCByZW1haW4gaW4gbWVtb3J5IGZyb20gdGhlIGZpcnN0IHRpbWUgdGhlIHJlc3VsdHMgYXJlIHNob3duIHVudGlsIHRoaXMgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cbiAgaGlkZVJlc3VsdHMoZXJyPzogYW55KSB7XG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvLyBDbGVhbnMgdXAgbGlzdGVuZXJzIGZvciB0aGUgcG9wdXAgLSB3aWxsIGdldCBleGVjdXRlZCBubyBtYXR0ZXIgaG93IHRoZSBwb3B1cCBpcyBjbG9zZWQuXG4gIG9uT3ZlcmxheUNsb3NlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb3B1cCAmJiB0aGlzLnBvcHVwLmluc3RhbmNlICYmIHRoaXMucG9wdXAuaW5zdGFuY2UuY2xlYW5VcCkge1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5jbGVhblVwKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gZ2V0IGFjY2Vzc29yXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICAvLyBzZXQgYWNjZXNzb3IgaW5jbHVkaW5nIGNhbGwgdGhlIG9uY2hhbmdlIGNhbGxiYWNrXG4gIHNldCB2YWx1ZShzZWxlY3RlZCkge1xuICAgIGlmICghc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMudGVybSA9ICcnO1xuICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkLnZhbHVlICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy50ZXJtID0gdGhpcy5jbGVhclZhbHVlT25TZWxlY3QgPyAnJyA6IHNlbGVjdGVkLmxhYmVsO1xuICAgICAgdGhpcy5fdmFsdWUgPSBzZWxlY3RlZC52YWx1ZTtcbiAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHsgdmFsdWU6IHNlbGVjdGVkLnZhbHVlLCByYXdWYWx1ZTogeyBsYWJlbDogdGhpcy50ZXJtLCB2YWx1ZTogc2VsZWN0ZWQudmFsdWUgfSB9KTtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoc2VsZWN0ZWQpO1xuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHNlbGVjdGVkLnZhbHVlKTtcbiAgICAgIGlmICh0aGlzLnBvcHVwKSB7XG4gICAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2Uuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiBzZWxlY3RlZC52YWx1ZSwgcmF3VmFsdWU6IHsgbGFiZWw6IHRoaXMudGVybSwgdmFsdWU6IHRoaXMuX3ZhbHVlIH0gfSk7XG4gICAgICB0aGlzLnNlbGVjdC5lbWl0KHNlbGVjdGVkKTtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvLyBNYWtlcyBzdXJlIHRvIGNsZWFyIHRoZSBtb2RlbCBpZiB0aGUgdXNlciBjbGVhcnMgdGhlIHRleHQgYm94XG4gIGNoZWNrVGVybShldmVudCkge1xuICAgIHRoaXMudHlwaW5nLmVtaXQoZXZlbnQpO1xuICAgIGlmICghZXZlbnQgfHwgIWV2ZW50Lmxlbmd0aCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvLyBTZXQgdG91Y2hlZCBvbiBibHVyXG4gIG9uVG91Y2hlZChldmVudD86IEV2ZW50KSB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIC8vIEZyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLmNsZWFyVmFsdWVPblNlbGVjdCkge1xuICAgICAgdGhpcy50ZXJtID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICF0aGlzLmNvbmZpZy51c2VHZXRMYWJlbHMpIHtcbiAgICAgICAgdGhpcy50ZXJtID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLmxhYmVsKSB7XG4gICAgICAgIHRoaXMudGVybSA9IHZhbHVlLmxhYmVsO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB2YWx1ZS5maXJzdE5hbWUpIHtcbiAgICAgICAgdGhpcy50ZXJtID0gYCR7dmFsdWUuZmlyc3ROYW1lfSAke3ZhbHVlLmxhc3ROYW1lfWA7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLm5hbWUpIHtcbiAgICAgICAgdGhpcy50ZXJtID0gdmFsdWUubmFtZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmdldExhYmVscyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLmNvbmZpZy5nZXRMYWJlbHModmFsdWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMudGVybSA9IHJlc3VsdC5sZW5ndGggPyByZXN1bHRbMF0ubGFiZWwgfHwgJycgOiByZXN1bHQubGFiZWwgfHwgJyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGVybSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLnRpdGxlKSB7XG4gICAgICAgIHRoaXMudGVybSA9IHZhbHVlLnRpdGxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50ZXJtID0gdmFsdWUgfHwgJyc7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX2Rpc2FibGVQaWNrZXJJbnB1dCA9IGRpc2FibGVkO1xuICB9XG59XG4iXX0=