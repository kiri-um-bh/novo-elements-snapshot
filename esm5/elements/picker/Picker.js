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
var PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NovoPickerElement; }),
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
var NovoPickerElement = /** @class */ (function () {
    function NovoPickerElement(element, componentUtils, ref) {
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
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Object.defineProperty(NovoPickerElement.prototype, "disablePickerInput", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disablePickerInput;
        },
        // Disable from typing into the picker (result template does everything)
        set: 
        // Disable from typing into the picker (result template does everything)
        /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._disablePickerInput = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoPickerElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.overrideElement) {
            this.element = this.overrideElement;
        }
        if (this.appendToBody) {
            notify("'appendToBody' has been deprecated. Please remove this attribute.");
        }
        // Custom results template
        this.resultsComponent = this.config.resultsTemplate || PickerResults;
        // Get all distinct key up events from the input and only fire if long enough and distinct
        // let input = this.element.nativeElement.querySelector('input');
        /** @type {?} */
        var pasteObserver = fromEvent(this.input.nativeElement, 'paste').pipe(debounceTime(250), distinctUntilChanged());
        pasteObserver.subscribe(function (event) { return _this.onDebouncedKeyup(event); }, function (err) { return _this.hideResults(err); });
        /** @type {?} */
        var keyboardObserver = fromEvent(this.input.nativeElement, 'keyup').pipe(debounceTime(250), distinctUntilChanged());
        keyboardObserver.subscribe(function (event) { return _this.onDebouncedKeyup(event); }, function (err) { return _this.hideResults(err); });
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    NovoPickerElement.prototype.onDebouncedKeyup = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if ([KeyCodes.ESC, KeyCodes.UP, KeyCodes.DOWN, KeyCodes.ENTER, KeyCodes.TAB].includes(event['keyCode'])) {
            return;
        }
        this.show(((/** @type {?} */ (event.target))).value);
    };
    /**
     * @return {?}
     */
    NovoPickerElement.prototype.openPanel = /**
     * @return {?}
     */
    function () {
        this.container.openPanel();
    };
    /**
     * @return {?}
     */
    NovoPickerElement.prototype.closePanel = /**
     * @return {?}
     */
    function () {
        this.container.closePanel();
    };
    Object.defineProperty(NovoPickerElement.prototype, "panelOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.container && this.container.panelOpen;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?=} term
     * @return {?}
     */
    NovoPickerElement.prototype.show = /**
     * @private
     * @param {?=} term
     * @return {?}
     */
    function (term) {
        this.openPanel();
        // Show the results inside
        this.showResults(term);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoPickerElement.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
                var activeMatch_1 = this.popup.instance.activeMatch;
                if (!this.selected.find(function (selected) { return activeMatch_1 && activeMatch_1.value && selected.value === activeMatch_1.value; })) {
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
    };
    /**
     * @param {?} wipeTerm
     * @return {?}
     */
    NovoPickerElement.prototype.clearValue = /**
     * @param {?} wipeTerm
     * @return {?}
     */
    function (wipeTerm) {
        this._value = null;
        this.select.emit(this._value);
        this.changed.emit({ value: this._value, rawValue: { label: '', value: this._value } });
        this.onModelChange(this._value);
        if (wipeTerm) {
            this.term = '';
            this.hideResults();
        }
        this.ref.markForCheck();
    };
    /**
     * @name onFocus
     * @description When the input's focus event is called this method calls the debounced function that displays the
     * results.
     */
    /**
     * \@name onFocus
     * \@description When the input's focus event is called this method calls the debounced function that displays the
     * results.
     * @param {?} event
     * @return {?}
     */
    NovoPickerElement.prototype.onFocus = /**
     * \@name onFocus
     * \@description When the input's focus event is called this method calls the debounced function that displays the
     * results.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.panelOpen) {
            this.show();
        }
        this.focus.emit(event);
    };
    // Creates an instance of the results (called popup) and adds all the bindings to that instance.
    // Creates an instance of the results (called popup) and adds all the bindings to that instance.
    /**
     * @param {?=} term
     * @return {?}
     */
    NovoPickerElement.prototype.showResults = 
    // Creates an instance of the results (called popup) and adds all the bindings to that instance.
    /**
     * @param {?=} term
     * @return {?}
     */
    function (term) {
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
    };
    // Tells the overlay component to hide the picker results from the DOM without deleting the dynamically allocated popup instance created in
    // showResults. The popup instance will remain in memory from the first time the results are shown until this component is destroyed.
    // Tells the overlay component to hide the picker results from the DOM without deleting the dynamically allocated popup instance created in
    // showResults. The popup instance will remain in memory from the first time the results are shown until this component is destroyed.
    /**
     * @param {?=} err
     * @return {?}
     */
    NovoPickerElement.prototype.hideResults = 
    // Tells the overlay component to hide the picker results from the DOM without deleting the dynamically allocated popup instance created in
    // showResults. The popup instance will remain in memory from the first time the results are shown until this component is destroyed.
    /**
     * @param {?=} err
     * @return {?}
     */
    function (err) {
        this.closePanel();
        this.ref.markForCheck();
    };
    // Cleans up listeners for the popup - will get executed no matter how the popup is closed.
    // Cleans up listeners for the popup - will get executed no matter how the popup is closed.
    /**
     * @return {?}
     */
    NovoPickerElement.prototype.onOverlayClosed = 
    // Cleans up listeners for the popup - will get executed no matter how the popup is closed.
    /**
     * @return {?}
     */
    function () {
        if (this.popup && this.popup.instance && this.popup.instance.cleanUp) {
            this.popup.instance.cleanUp();
        }
    };
    Object.defineProperty(NovoPickerElement.prototype, "value", {
        // get accessor
        get: 
        // get accessor
        /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        // set accessor including call the onchange callback
        set: 
        // set accessor including call the onchange callback
        /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
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
        },
        enumerable: true,
        configurable: true
    });
    // Makes sure to clear the model if the user clears the text box
    // Makes sure to clear the model if the user clears the text box
    /**
     * @param {?} event
     * @return {?}
     */
    NovoPickerElement.prototype.checkTerm = 
    // Makes sure to clear the model if the user clears the text box
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.typing.emit(event);
        if (!event || !event.length) {
            this._value = null;
            this.onModelChange(this._value);
        }
        this.ref.markForCheck();
    };
    // Set touched on blur
    // Set touched on blur
    /**
     * @param {?=} event
     * @return {?}
     */
    NovoPickerElement.prototype.onTouched = 
    // Set touched on blur
    /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        this.onModelTouched();
        this.blur.emit(event);
    };
    // From ControlValueAccessor interface
    // From ControlValueAccessor interface
    /**
     * @param {?} value
     * @return {?}
     */
    NovoPickerElement.prototype.writeValue = 
    // From ControlValueAccessor interface
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
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
                this.term = value.firstName + " " + value.lastName;
            }
            else if (value && value.name) {
                this.term = value.name;
            }
            else if (typeof this.config.getLabels === 'function') {
                this.config.getLabels(value).then(function (result) {
                    if (result) {
                        _this.term = result.length ? result[0].label || '' : result.label || '';
                    }
                    else {
                        _this.term = value;
                    }
                    _this.ref.markForCheck();
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
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoPickerElement.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoPickerElement.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    NovoPickerElement.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this._disablePickerInput = disabled;
    };
    NovoPickerElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-picker',
                    providers: [PICKER_VALUE_ACCESSOR],
                    template: "\n    <i class=\"bhi-more\" *ngIf=\"config?.entityIcon && !_value\"></i>\n    <i class=\"bhi-{{ config?.entityIcon }} entity-icon {{ config?.entityIcon }}\" *ngIf=\"config?.entityIcon && _value\"></i>\n    <input\n      type=\"text\"\n      class=\"picker-input\"\n      [(ngModel)]=\"term\"\n      [class.entity-picker]=\"config?.entityIcon\"\n      [class.entity-selected]=\"config?.entityIcon && _value\"\n      (ngModelChange)=\"checkTerm($event)\"\n      [placeholder]=\"placeholder\"\n      (keydown)=\"onKeyDown($event)\"\n      (focus)=\"onFocus($event)\"\n      (click)=\"onFocus($event)\"\n      (blur)=\"onTouched($event)\"\n      autocomplete=\"off\"\n      #input\n      [disabled]=\"disablePickerInput\"\n    />\n    <i class=\"bhi-search\" *ngIf=\"(!_value || clearValueOnSelect) && !disablePickerInput\"></i>\n    <i\n      class=\"bhi-times\"\n      [class.entity-selected]=\"config?.entityIcon && _value\"\n      *ngIf=\"_value && !clearValueOnSelect && !disablePickerInput\"\n      (click)=\"clearValue(true)\"\n    ></i>\n    <novo-overlay-template class=\"picker-results-container\" [parent]=\"element\" position=\"above-below\" (closing)=\"onOverlayClosed()\">\n      <span #results></span>\n      <ng-content></ng-content>\n    </novo-overlay-template>\n  "
                }] }
    ];
    /** @nocollapse */
    NovoPickerElement.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ComponentUtils },
        { type: ChangeDetectorRef }
    ]; };
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
    return NovoPickerElement;
}());
export { NovoPickerElement };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3BpY2tlci9QaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFFVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRW5ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUVqQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7SUFJdEQscUJBQXFCLEdBQUc7SUFDNUIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQztJQUNoRCxLQUFLLEVBQUUsSUFBSTtDQUNaOzs7Ozs7Ozs7QUFVRDtJQTJHRSwyQkFBbUIsT0FBbUIsRUFBVSxjQUE4QixFQUFVLEdBQXNCO1FBQTNGLFlB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QUFLO3FDQUdMLEtBQUs7aUNBR0wsS0FBSzt1QkFHTCxLQUFLO3dDQUdMLEtBQUs7a0NBRUwsS0FBSztxQ0FJTCxLQUFLOzBCQVlMLE1BQU07eUJBRU4sTUFBTTt3QkFFTixNQUFNO3VCQUVOLE1BQU07eUJBRU4sTUFBTTs0QkFHTixTQUFTLFNBQUMsNEJBQTRCO3dCQUV0QyxTQUFTLFNBQUMsT0FBTzs7SUF5UHBCLHdCQUFDO0NBQUEsQUExVkQsSUEwVkM7U0F2VFksaUJBQWlCOzs7SUFFNUIsb0NBQzBCOztJQUUxQixtQ0FDb0M7O0lBQ3BDLHdDQUNvQjs7SUFDcEIsK0NBQzRCOztJQUM1QiwwQ0FDOEI7O0lBQzlCLHFDQUMwQjs7SUFFMUIseUNBQzhCOztJQUU5QixpREFDNkI7O0lBRTdCLCtDQUNxQzs7SUFFckMsMkNBQ3VCOztJQUV2QixpQ0FDc0I7O0lBRXRCLGtEQUNzQzs7SUFDdEMsNENBQzRCOzs7OztJQVk1QixnREFBNkM7O0lBRzdDLG9DQUNnRDs7SUFDaEQsbUNBQytDOztJQUMvQyxrQ0FDOEM7O0lBQzlDLGlDQUM2Qzs7SUFDN0MsbUNBQytDOztJQUUvQyxzQ0FDK0M7Ozs7O0lBQy9DLGtDQUMwQjs7SUFFMUIsaUNBQWtCOztJQUNsQiw2Q0FBc0I7O0lBQ3RCLGtDQUF5Qjs7SUFDekIsbUNBQVk7O0lBQ1osMENBQW9DOztJQUNwQywyQ0FBcUM7O0lBRXpCLG9DQUEwQjs7Ozs7SUFBRSwyQ0FBc0M7Ozs7O0lBQUUsZ0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBWZW5kb3JcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG4vLyBBUFBcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcbmltcG9ydCB7IFBpY2tlclJlc3VsdHMgfSBmcm9tICcuL2V4dHJhcy9waWNrZXItcmVzdWx0cy9QaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9vdmVybGF5L092ZXJsYXknO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG5pbXBvcnQgeyBOb3ZvQ29udHJvbENvbmZpZyB9IGZyb20gJy4uL2Zvcm0vRm9ybUNvbnRyb2xzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBQSUNLRVJfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvUGlja2VyRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuLyoqXG4gKiBAbmFtZSBQaWNrZXJcbiAqXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBjbGFzcyBpcyB0aGUgZGlyZWN0aXZlIGRlZmluaXRpb24gb2YgdGhlIFBpY2tlci4gSWYgeW91IGFkZCBhbmQgYXR0cmlidXRlIG9mIGBwaWNrZXJgIHRvIGFuIGlucHV0LFxuICogaXQgd2lsbCBjcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIHBpY2tlciB3aGljaCB3cmFwcyB0aGUgaW5wdXQgaW4gYWxsIG9mIHRoZSBwaWNrZXIgSFRNTCBlbGVtZW50cyBhbmQgZnVuY3Rpb25hbGl0eS5cbiAqIFBpY2tlciBzaG91bGQgYmUgYWRkZWQgYXMgYSB0d28td2F5IGJvdW5kIG5nTW9kZWwgaW5zdGFuY2UgYFsocGlja2VyKV09XCJcImAgaW4gb3JkZXIgdG8gaGF2ZSB0aGUgcGlja2VyIG9wdGlvbnNcbiAqIGR5bmFtaWNhbGx5IHBvcHVsYXRlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXBpY2tlcicsXG4gIHByb3ZpZGVyczogW1BJQ0tFUl9WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgY2xhc3M9XCJiaGktbW9yZVwiICpuZ0lmPVwiY29uZmlnPy5lbnRpdHlJY29uICYmICFfdmFsdWVcIj48L2k+XG4gICAgPGkgY2xhc3M9XCJiaGkte3sgY29uZmlnPy5lbnRpdHlJY29uIH19IGVudGl0eS1pY29uIHt7IGNvbmZpZz8uZW50aXR5SWNvbiB9fVwiICpuZ0lmPVwiY29uZmlnPy5lbnRpdHlJY29uICYmIF92YWx1ZVwiPjwvaT5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIGNsYXNzPVwicGlja2VyLWlucHV0XCJcbiAgICAgIFsobmdNb2RlbCldPVwidGVybVwiXG4gICAgICBbY2xhc3MuZW50aXR5LXBpY2tlcl09XCJjb25maWc/LmVudGl0eUljb25cIlxuICAgICAgW2NsYXNzLmVudGl0eS1zZWxlY3RlZF09XCJjb25maWc/LmVudGl0eUljb24gJiYgX3ZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoZWNrVGVybSgkZXZlbnQpXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcbiAgICAgIChjbGljayk9XCJvbkZvY3VzKCRldmVudClcIlxuICAgICAgKGJsdXIpPVwib25Ub3VjaGVkKCRldmVudClcIlxuICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICNpbnB1dFxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgLz5cbiAgICA8aSBjbGFzcz1cImJoaS1zZWFyY2hcIiAqbmdJZj1cIighX3ZhbHVlIHx8IGNsZWFyVmFsdWVPblNlbGVjdCkgJiYgIWRpc2FibGVQaWNrZXJJbnB1dFwiPjwvaT5cbiAgICA8aVxuICAgICAgY2xhc3M9XCJiaGktdGltZXNcIlxuICAgICAgW2NsYXNzLmVudGl0eS1zZWxlY3RlZF09XCJjb25maWc/LmVudGl0eUljb24gJiYgX3ZhbHVlXCJcbiAgICAgICpuZ0lmPVwiX3ZhbHVlICYmICFjbGVhclZhbHVlT25TZWxlY3QgJiYgIWRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAoY2xpY2spPVwiY2xlYXJWYWx1ZSh0cnVlKVwiXG4gICAgPjwvaT5cbiAgICA8bm92by1vdmVybGF5LXRlbXBsYXRlIGNsYXNzPVwicGlja2VyLXJlc3VsdHMtY29udGFpbmVyXCIgW3BhcmVudF09XCJlbGVtZW50XCIgcG9zaXRpb249XCJhYm92ZS1iZWxvd1wiIChjbG9zaW5nKT1cIm9uT3ZlcmxheUNsb3NlZCgpXCI+XG4gICAgICA8c3BhbiAjcmVzdWx0cz48L3NwYW4+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9ub3ZvLW92ZXJsYXktdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9QaWNrZXJFbGVtZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gQ29udGFpbmVyIGZvciB0aGUgcmVzdWx0c1xuICBAVmlld0NoaWxkKCdyZXN1bHRzJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gIHJlc3VsdHM6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgQElucHV0KClcbiAgY29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZ1snY29uZmlnJ107XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNsZWFyVmFsdWVPblNlbGVjdDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHNlbGVjdGVkOiBBcnJheTxhbnk+ID0gW107XG4gIC8vIERlcHJlY2F0ZWRcbiAgQElucHV0KClcbiAgYXBwZW5kVG9Cb2R5OiBib29sZWFuID0gZmFsc2U7XG4gIC8vIERlcHJlY2F0ZWRcbiAgQElucHV0KClcbiAgcGFyZW50U2Nyb2xsU2VsZWN0b3I6IHN0cmluZztcbiAgLy8gRGVwcmVjYXRlZFxuICBASW5wdXQoKVxuICBwYXJlbnRTY3JvbGxBY3Rpb246IHN0cmluZyA9ICdjbG9zZSc7XG4gIC8vIEN1c3RvbSBjbGFzcyBmb3IgdGhlIGRyb3Bkb3duIGNvbnRhaW5lclxuICBASW5wdXQoKVxuICBjb250YWluZXJDbGFzczogc3RyaW5nO1xuICAvLyBTaWRlIHRoZSBkcm9wZG93biB3aWxsIG9wZW5cbiAgQElucHV0KClcbiAgc2lkZTogc3RyaW5nID0gJ2xlZnQnO1xuICAvLyBBdXRvc2VsZWN0cyB0aGUgZmlyc3Qgb3B0aW9uIGluIHRoZSByZXN1bHRzXG4gIEBJbnB1dCgpXG4gIGF1dG9TZWxlY3RGaXJzdE9wdGlvbjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIG92ZXJyaWRlRWxlbWVudDogRWxlbWVudFJlZjtcblxuICAvLyBEaXNhYmxlIGZyb20gdHlwaW5nIGludG8gdGhlIHBpY2tlciAocmVzdWx0IHRlbXBsYXRlIGRvZXMgZXZlcnl0aGluZylcbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVQaWNrZXJJbnB1dCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZVBpY2tlcklucHV0ID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG5cbiAgZ2V0IGRpc2FibGVQaWNrZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZVBpY2tlcklucHV0O1xuICB9XG5cbiAgcHJpdmF0ZSBfZGlzYWJsZVBpY2tlcklucHV0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gRW1pdHRlciBmb3Igc2VsZWN0c1xuICBAT3V0cHV0KClcbiAgY2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICB0eXBpbmc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudClcbiAgcHVibGljIGNvbnRhaW5lcjogTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnaW5wdXQnKVxuICBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmO1xuXG4gIHRlcm06IHN0cmluZyA9ICcnO1xuICByZXN1bHRzQ29tcG9uZW50OiBhbnk7XG4gIHBvcHVwOiBDb21wb25lbnRSZWY8YW55PjtcbiAgX3ZhbHVlOiBhbnk7XG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLm92ZXJyaWRlRWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5vdmVycmlkZUVsZW1lbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmFwcGVuZFRvQm9keSkge1xuICAgICAgbm90aWZ5KGAnYXBwZW5kVG9Cb2R5JyBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgcmVtb3ZlIHRoaXMgYXR0cmlidXRlLmApO1xuICAgIH1cbiAgICAvLyBDdXN0b20gcmVzdWx0cyB0ZW1wbGF0ZVxuICAgIHRoaXMucmVzdWx0c0NvbXBvbmVudCA9IHRoaXMuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSB8fCBQaWNrZXJSZXN1bHRzO1xuICAgIC8vIEdldCBhbGwgZGlzdGluY3Qga2V5IHVwIGV2ZW50cyBmcm9tIHRoZSBpbnB1dCBhbmQgb25seSBmaXJlIGlmIGxvbmcgZW5vdWdoIGFuZCBkaXN0aW5jdFxuICAgIC8vIGxldCBpbnB1dCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgY29uc3QgcGFzdGVPYnNlcnZlciA9IGZyb21FdmVudCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQsICdwYXN0ZScpLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMjUwKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgKTtcbiAgICBwYXN0ZU9ic2VydmVyLnN1YnNjcmliZSgoZXZlbnQ6IENsaXBib2FyZEV2ZW50KSA9PiB0aGlzLm9uRGVib3VuY2VkS2V5dXAoZXZlbnQpLCAoZXJyKSA9PiB0aGlzLmhpZGVSZXN1bHRzKGVycikpO1xuICAgIGNvbnN0IGtleWJvYXJkT2JzZXJ2ZXIgPSBmcm9tRXZlbnQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LCAna2V5dXAnKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDI1MCksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICk7XG4gICAga2V5Ym9hcmRPYnNlcnZlci5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB0aGlzLm9uRGVib3VuY2VkS2V5dXAoZXZlbnQpLCAoZXJyKSA9PiB0aGlzLmhpZGVSZXN1bHRzKGVycikpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkRlYm91bmNlZEtleXVwKGV2ZW50OiBFdmVudCkge1xuICAgIGlmIChbS2V5Q29kZXMuRVNDLCBLZXlDb2Rlcy5VUCwgS2V5Q29kZXMuRE9XTiwgS2V5Q29kZXMuRU5URVIsIEtleUNvZGVzLlRBQl0uaW5jbHVkZXMoZXZlbnRbJ2tleUNvZGUnXSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zaG93KChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgb3BlblBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMuY29udGFpbmVyLm9wZW5QYW5lbCgpO1xuICB9XG5cbiAgcHVibGljIGNsb3NlUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy5jb250YWluZXIuY2xvc2VQYW5lbCgpO1xuICB9XG5cbiAgcHVibGljIGdldCBwYW5lbE9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyICYmIHRoaXMuY29udGFpbmVyLnBhbmVsT3BlbjtcbiAgfVxuXG4gIHByaXZhdGUgc2hvdyh0ZXJtPzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICAvLyBTaG93IHRoZSByZXN1bHRzIGluc2lkZVxuICAgIHRoaXMuc2hvd1Jlc3VsdHModGVybSk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlUGlja2VySW5wdXQpIHtcbiAgICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFuZWxPcGVuICYmICF0aGlzLmRpc2FibGVQaWNrZXJJbnB1dCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVTQyB8fCBldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5UQUIpIHtcbiAgICAgICAgdGhpcy5oaWRlUmVzdWx0cygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5VUCkge1xuICAgICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnByZXZBY3RpdmVNYXRjaCgpO1xuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRE9XTikge1xuICAgICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLm5leHRBY3RpdmVNYXRjaCgpO1xuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRU5URVIpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlTWF0Y2ggPSB0aGlzLnBvcHVwLmluc3RhbmNlLmFjdGl2ZU1hdGNoO1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWQuZmluZCgoc2VsZWN0ZWQpID0+IGFjdGl2ZU1hdGNoICYmIGFjdGl2ZU1hdGNoLnZhbHVlICYmIHNlbGVjdGVkLnZhbHVlID09PSBhY3RpdmVNYXRjaC52YWx1ZSkpIHtcbiAgICAgICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnNlbGVjdEFjdGl2ZU1hdGNoKCk7XG4gICAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkJBQ0tTUEFDRSB8fCBldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5ERUxFVEUpICYmICFIZWxwZXJzLmlzQmxhbmsodGhpcy5fdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuY2xlYXJWYWx1ZShmYWxzZSk7XG4gICAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkRFTEVURSAmJiBIZWxwZXJzLmlzQmxhbmsodGhpcy5fdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuY2xlYXJWYWx1ZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGVhclZhbHVlKHdpcGVUZXJtKSB7XG4gICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcy5fdmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlZC5lbWl0KHsgdmFsdWU6IHRoaXMuX3ZhbHVlLCByYXdWYWx1ZTogeyBsYWJlbDogJycsIHZhbHVlOiB0aGlzLl92YWx1ZSB9IH0pO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLl92YWx1ZSk7XG5cbiAgICBpZiAod2lwZVRlcm0pIHtcbiAgICAgIHRoaXMudGVybSA9ICcnO1xuICAgICAgdGhpcy5oaWRlUmVzdWx0cygpO1xuICAgIH1cbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkZvY3VzXG4gICAqIEBkZXNjcmlwdGlvbiBXaGVuIHRoZSBpbnB1dCdzIGZvY3VzIGV2ZW50IGlzIGNhbGxlZCB0aGlzIG1ldGhvZCBjYWxscyB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGlzcGxheXMgdGhlXG4gICAqIHJlc3VsdHMuXG4gICAqL1xuICBvbkZvY3VzKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnBhbmVsT3Blbikge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XG4gIH1cblxuICAvLyBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSByZXN1bHRzIChjYWxsZWQgcG9wdXApIGFuZCBhZGRzIGFsbCB0aGUgYmluZGluZ3MgdG8gdGhhdCBpbnN0YW5jZS5cbiAgc2hvd1Jlc3VsdHModGVybT86IGFueSkge1xuICAgIC8vIFVwZGF0ZSBNYXRjaGVzXG4gICAgaWYgKHRoaXMucG9wdXApIHtcbiAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBsaXN0IG9yIGNyZWF0ZSB0aGUgRE9NIGVsZW1lbnRcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UuY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnRlcm0gPSB0aGlzLnRlcm07XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UuYXV0b1NlbGVjdEZpcnN0T3B0aW9uID0gdGhpcy5hdXRvU2VsZWN0Rmlyc3RPcHRpb247XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3B1cCA9IHRoaXMuY29tcG9uZW50VXRpbHMuYXBwZW5kKHRoaXMucmVzdWx0c0NvbXBvbmVudCwgdGhpcy5yZXN1bHRzKTtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UucGFyZW50ID0gdGhpcztcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UuY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnRlcm0gPSB0aGlzLnRlcm07XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UuYXV0b1NlbGVjdEZpcnN0T3B0aW9uID0gdGhpcy5hdXRvU2VsZWN0Rmlyc3RPcHRpb247XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLm92ZXJsYXkgPSB0aGlzLmNvbnRhaW5lci5vdmVybGF5UmVmO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gVGVsbHMgdGhlIG92ZXJsYXkgY29tcG9uZW50IHRvIGhpZGUgdGhlIHBpY2tlciByZXN1bHRzIGZyb20gdGhlIERPTSB3aXRob3V0IGRlbGV0aW5nIHRoZSBkeW5hbWljYWxseSBhbGxvY2F0ZWQgcG9wdXAgaW5zdGFuY2UgY3JlYXRlZCBpblxuICAvLyBzaG93UmVzdWx0cy4gVGhlIHBvcHVwIGluc3RhbmNlIHdpbGwgcmVtYWluIGluIG1lbW9yeSBmcm9tIHRoZSBmaXJzdCB0aW1lIHRoZSByZXN1bHRzIGFyZSBzaG93biB1bnRpbCB0aGlzIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXG4gIGhpZGVSZXN1bHRzKGVycj86IGFueSkge1xuICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLy8gQ2xlYW5zIHVwIGxpc3RlbmVycyBmb3IgdGhlIHBvcHVwIC0gd2lsbCBnZXQgZXhlY3V0ZWQgbm8gbWF0dGVyIGhvdyB0aGUgcG9wdXAgaXMgY2xvc2VkLlxuICBvbk92ZXJsYXlDbG9zZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucG9wdXAgJiYgdGhpcy5wb3B1cC5pbnN0YW5jZSAmJiB0aGlzLnBvcHVwLmluc3RhbmNlLmNsZWFuVXApIHtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UuY2xlYW5VcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGdldCBhY2Nlc3NvclxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgLy8gc2V0IGFjY2Vzc29yIGluY2x1ZGluZyBjYWxsIHRoZSBvbmNoYW5nZSBjYWxsYmFja1xuICBzZXQgdmFsdWUoc2VsZWN0ZWQpIHtcbiAgICBpZiAoIXNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnRlcm0gPSAnJztcbiAgICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZC52YWx1ZSAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMudGVybSA9IHRoaXMuY2xlYXJWYWx1ZU9uU2VsZWN0ID8gJycgOiBzZWxlY3RlZC5sYWJlbDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gc2VsZWN0ZWQudmFsdWU7XG4gICAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiBzZWxlY3RlZC52YWx1ZSwgcmF3VmFsdWU6IHsgbGFiZWw6IHRoaXMudGVybSwgdmFsdWU6IHNlbGVjdGVkLnZhbHVlIH0gfSk7XG4gICAgICB0aGlzLnNlbGVjdC5lbWl0KHNlbGVjdGVkKTtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZShzZWxlY3RlZC52YWx1ZSk7XG4gICAgICBpZiAodGhpcy5wb3B1cCkge1xuICAgICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VkLmVtaXQoeyB2YWx1ZTogc2VsZWN0ZWQudmFsdWUsIHJhd1ZhbHVlOiB7IGxhYmVsOiB0aGlzLnRlcm0sIHZhbHVlOiB0aGlzLl92YWx1ZSB9IH0pO1xuICAgICAgdGhpcy5zZWxlY3QuZW1pdChzZWxlY3RlZCk7XG4gICAgfVxuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLy8gTWFrZXMgc3VyZSB0byBjbGVhciB0aGUgbW9kZWwgaWYgdGhlIHVzZXIgY2xlYXJzIHRoZSB0ZXh0IGJveFxuICBjaGVja1Rlcm0oZXZlbnQpIHtcbiAgICB0aGlzLnR5cGluZy5lbWl0KGV2ZW50KTtcbiAgICBpZiAoIWV2ZW50IHx8ICFldmVudC5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLy8gU2V0IHRvdWNoZWQgb24gYmx1clxuICBvblRvdWNoZWQoZXZlbnQ/OiBFdmVudCkge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gIH1cblxuICAvLyBGcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5jbGVhclZhbHVlT25TZWxlY3QpIHtcbiAgICAgIHRoaXMudGVybSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhdGhpcy5jb25maWcudXNlR2V0TGFiZWxzKSB7XG4gICAgICAgIHRoaXMudGVybSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB2YWx1ZS5sYWJlbCkge1xuICAgICAgICB0aGlzLnRlcm0gPSB2YWx1ZS5sYWJlbDtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdmFsdWUuZmlyc3ROYW1lKSB7XG4gICAgICAgIHRoaXMudGVybSA9IGAke3ZhbHVlLmZpcnN0TmFtZX0gJHt2YWx1ZS5sYXN0TmFtZX1gO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB2YWx1ZS5uYW1lKSB7XG4gICAgICAgIHRoaXMudGVybSA9IHZhbHVlLm5hbWU7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5nZXRMYWJlbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5jb25maWcuZ2V0TGFiZWxzKHZhbHVlKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLnRlcm0gPSByZXN1bHQubGVuZ3RoID8gcmVzdWx0WzBdLmxhYmVsIHx8ICcnIDogcmVzdWx0LmxhYmVsIHx8ICcnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRlcm0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB2YWx1ZS50aXRsZSkge1xuICAgICAgICB0aGlzLnRlcm0gPSB2YWx1ZS50aXRsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGVybSA9IHZhbHVlIHx8ICcnO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9kaXNhYmxlUGlja2VySW5wdXQgPSBkaXNhYmxlZDtcbiAgfVxufVxuIl19