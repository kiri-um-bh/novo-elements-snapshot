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
var PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NovoPickerElement; })),
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
        this.onModelChange = (/**
         * @return {?}
         */
        function () { });
        this.onModelTouched = (/**
         * @return {?}
         */
        function () { });
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
        pasteObserver.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onDebouncedKeyup(event); }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.hideResults(err); }));
        /** @type {?} */
        var keyboardObserver = fromEvent(this.input.nativeElement, 'keyup').pipe(debounceTime(250), distinctUntilChanged());
        keyboardObserver.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onDebouncedKeyup(event); }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.hideResults(err); }));
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
                if (!this.selected.find((/**
                 * @param {?} selected
                 * @return {?}
                 */
                function (selected) { return activeMatch_1 && activeMatch_1.value && selected.value === activeMatch_1.value; }))) {
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
                this.config.getLabels(value).then((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    if (result) {
                        _this.term = result.length ? result[0].label || '' : result.label || '';
                    }
                    else {
                        _this.term = value;
                    }
                    _this.ref.markForCheck();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3BpY2tlci9QaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFFVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRW5ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUVqQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7SUFJdEQscUJBQXFCLEdBQUc7SUFDNUIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixFQUFDO0lBQ2hELEtBQUssRUFBRSxJQUFJO0NBQ1o7Ozs7Ozs7OztBQVVEO0lBMkdFLDJCQUFtQixPQUFtQixFQUFVLGNBQThCLEVBQVUsR0FBc0I7UUFBM0Ys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RUwsS0FBSzsrQkFHTCxLQUFLO3VDQUdMLEtBQUs7cUNBR0wsS0FBSztpQ0FHTCxLQUFLO3VCQUdMLEtBQUs7d0NBR0wsS0FBSztrQ0FFTCxLQUFLO3FDQUlMLEtBQUs7MEJBWUwsTUFBTTt5QkFFTixNQUFNO3dCQUVOLE1BQU07dUJBRU4sTUFBTTt5QkFFTixNQUFNOzRCQUdOLFNBQVMsU0FBQyw0QkFBNEI7d0JBRXRDLFNBQVMsU0FBQyxPQUFPOztJQXlQcEIsd0JBQUM7Q0FBQSxBQTFWRCxJQTBWQztTQXZUWSxpQkFBaUI7OztJQUU1QixvQ0FDMEI7O0lBRTFCLG1DQUNvQzs7SUFDcEMsd0NBQ29COztJQUNwQiwrQ0FDNEI7O0lBQzVCLDBDQUM4Qjs7SUFDOUIscUNBQzBCOztJQUUxQix5Q0FDOEI7O0lBRTlCLGlEQUM2Qjs7SUFFN0IsK0NBQ3FDOztJQUVyQywyQ0FDdUI7O0lBRXZCLGlDQUNzQjs7SUFFdEIsa0RBQ3NDOztJQUN0Qyw0Q0FDNEI7Ozs7O0lBWTVCLGdEQUE2Qzs7SUFHN0Msb0NBQ2dEOztJQUNoRCxtQ0FDK0M7O0lBQy9DLGtDQUM4Qzs7SUFDOUMsaUNBQzZDOztJQUM3QyxtQ0FDK0M7O0lBRS9DLHNDQUMrQzs7Ozs7SUFDL0Msa0NBQzBCOztJQUUxQixpQ0FBa0I7O0lBQ2xCLDZDQUFzQjs7SUFDdEIsa0NBQXlCOztJQUN6QixtQ0FBWTs7SUFDWiwwQ0FBb0M7O0lBQ3BDLDJDQUFxQzs7SUFFekIsb0NBQTBCOzs7OztJQUFFLDJDQUFzQzs7Ozs7SUFBRSxnQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudFJlZixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbi8vIEFQUFxuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgUGlja2VyUmVzdWx0cyB9IGZyb20gJy4vZXh0cmFzL3BpY2tlci1yZXN1bHRzL1BpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL292ZXJsYXkvT3ZlcmxheSc7XG5pbXBvcnQgeyBub3RpZnkgfSBmcm9tICcuLi8uLi91dGlscy9ub3RpZmllci9ub3RpZmllci51dGlsJztcbmltcG9ydCB7IE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi4vZm9ybS9Gb3JtQ29udHJvbHMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IFBJQ0tFUl9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9QaWNrZXJFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG4vKipcbiAqIEBuYW1lIFBpY2tlclxuICpcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIGNsYXNzIGlzIHRoZSBkaXJlY3RpdmUgZGVmaW5pdGlvbiBvZiB0aGUgUGlja2VyLiBJZiB5b3UgYWRkIGFuZCBhdHRyaWJ1dGUgb2YgYHBpY2tlcmAgdG8gYW4gaW5wdXQsXG4gKiBpdCB3aWxsIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgcGlja2VyIHdoaWNoIHdyYXBzIHRoZSBpbnB1dCBpbiBhbGwgb2YgdGhlIHBpY2tlciBIVE1MIGVsZW1lbnRzIGFuZCBmdW5jdGlvbmFsaXR5LlxuICogUGlja2VyIHNob3VsZCBiZSBhZGRlZCBhcyBhIHR3by13YXkgYm91bmQgbmdNb2RlbCBpbnN0YW5jZSBgWyhwaWNrZXIpXT1cIlwiYCBpbiBvcmRlciB0byBoYXZlIHRoZSBwaWNrZXIgb3B0aW9uc1xuICogZHluYW1pY2FsbHkgcG9wdWxhdGUuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcGlja2VyJyxcbiAgcHJvdmlkZXJzOiBbUElDS0VSX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aSBjbGFzcz1cImJoaS1tb3JlXCIgKm5nSWY9XCJjb25maWc/LmVudGl0eUljb24gJiYgIV92YWx1ZVwiPjwvaT5cbiAgICA8aSBjbGFzcz1cImJoaS17eyBjb25maWc/LmVudGl0eUljb24gfX0gZW50aXR5LWljb24ge3sgY29uZmlnPy5lbnRpdHlJY29uIH19XCIgKm5nSWY9XCJjb25maWc/LmVudGl0eUljb24gJiYgX3ZhbHVlXCI+PC9pPlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgY2xhc3M9XCJwaWNrZXItaW5wdXRcIlxuICAgICAgWyhuZ01vZGVsKV09XCJ0ZXJtXCJcbiAgICAgIFtjbGFzcy5lbnRpdHktcGlja2VyXT1cImNvbmZpZz8uZW50aXR5SWNvblwiXG4gICAgICBbY2xhc3MuZW50aXR5LXNlbGVjdGVkXT1cImNvbmZpZz8uZW50aXR5SWNvbiAmJiBfdmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hlY2tUZXJtKCRldmVudClcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcbiAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxuICAgICAgKGNsaWNrKT1cIm9uRm9jdXMoJGV2ZW50KVwiXG4gICAgICAoYmx1cik9XCJvblRvdWNoZWQoJGV2ZW50KVwiXG4gICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgI2lucHV0XG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZVBpY2tlcklucHV0XCJcbiAgICAvPlxuICAgIDxpIGNsYXNzPVwiYmhpLXNlYXJjaFwiICpuZ0lmPVwiKCFfdmFsdWUgfHwgY2xlYXJWYWx1ZU9uU2VsZWN0KSAmJiAhZGlzYWJsZVBpY2tlcklucHV0XCI+PC9pPlxuICAgIDxpXG4gICAgICBjbGFzcz1cImJoaS10aW1lc1wiXG4gICAgICBbY2xhc3MuZW50aXR5LXNlbGVjdGVkXT1cImNvbmZpZz8uZW50aXR5SWNvbiAmJiBfdmFsdWVcIlxuICAgICAgKm5nSWY9XCJfdmFsdWUgJiYgIWNsZWFyVmFsdWVPblNlbGVjdCAmJiAhZGlzYWJsZVBpY2tlcklucHV0XCJcbiAgICAgIChjbGljayk9XCJjbGVhclZhbHVlKHRydWUpXCJcbiAgICA+PC9pPlxuICAgIDxub3ZvLW92ZXJsYXktdGVtcGxhdGUgY2xhc3M9XCJwaWNrZXItcmVzdWx0cy1jb250YWluZXJcIiBbcGFyZW50XT1cImVsZW1lbnRcIiBwb3NpdGlvbj1cImFib3ZlLWJlbG93XCIgKGNsb3NpbmcpPVwib25PdmVybGF5Q2xvc2VkKClcIj5cbiAgICAgIDxzcGFuICNyZXN1bHRzPjwvc3Bhbj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L25vdm8tb3ZlcmxheS10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1BpY2tlckVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBDb250YWluZXIgZm9yIHRoZSByZXN1bHRzXG4gIEBWaWV3Q2hpbGQoJ3Jlc3VsdHMnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgcmVzdWx0czogVmlld0NvbnRhaW5lclJlZjtcblxuICBASW5wdXQoKVxuICBjb25maWc6IE5vdm9Db250cm9sQ29uZmlnWydjb25maWcnXTtcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KClcbiAgY2xlYXJWYWx1ZU9uU2VsZWN0OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBjbG9zZU9uU2VsZWN0OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgc2VsZWN0ZWQ6IEFycmF5PGFueT4gPSBbXTtcbiAgLy8gRGVwcmVjYXRlZFxuICBASW5wdXQoKVxuICBhcHBlbmRUb0JvZHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gRGVwcmVjYXRlZFxuICBASW5wdXQoKVxuICBwYXJlbnRTY3JvbGxTZWxlY3Rvcjogc3RyaW5nO1xuICAvLyBEZXByZWNhdGVkXG4gIEBJbnB1dCgpXG4gIHBhcmVudFNjcm9sbEFjdGlvbjogc3RyaW5nID0gJ2Nsb3NlJztcbiAgLy8gQ3VzdG9tIGNsYXNzIGZvciB0aGUgZHJvcGRvd24gY29udGFpbmVyXG4gIEBJbnB1dCgpXG4gIGNvbnRhaW5lckNsYXNzOiBzdHJpbmc7XG4gIC8vIFNpZGUgdGhlIGRyb3Bkb3duIHdpbGwgb3BlblxuICBASW5wdXQoKVxuICBzaWRlOiBzdHJpbmcgPSAnbGVmdCc7XG4gIC8vIEF1dG9zZWxlY3RzIHRoZSBmaXJzdCBvcHRpb24gaW4gdGhlIHJlc3VsdHNcbiAgQElucHV0KClcbiAgYXV0b1NlbGVjdEZpcnN0T3B0aW9uOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgb3ZlcnJpZGVFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIC8vIERpc2FibGUgZnJvbSB0eXBpbmcgaW50byB0aGUgcGlja2VyIChyZXN1bHQgdGVtcGxhdGUgZG9lcyBldmVyeXRoaW5nKVxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZVBpY2tlcklucHV0KHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlUGlja2VySW5wdXQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cblxuICBnZXQgZGlzYWJsZVBpY2tlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlUGlja2VySW5wdXQ7XG4gIH1cblxuICBwcml2YXRlIF9kaXNhYmxlUGlja2VySW5wdXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBFbWl0dGVyIGZvciBzZWxlY3RzXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHR5cGluZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZChOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50KVxuICBwdWJsaWMgY29udGFpbmVyOiBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdpbnB1dCcpXG4gIHByaXZhdGUgaW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgdGVybTogc3RyaW5nID0gJyc7XG4gIHJlc3VsdHNDb21wb25lbnQ6IGFueTtcbiAgcG9wdXA6IENvbXBvbmVudFJlZjxhbnk+O1xuICBfdmFsdWU6IGFueTtcbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMsIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMub3ZlcnJpZGVFbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLm92ZXJyaWRlRWxlbWVudDtcbiAgICB9XG4gICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICBub3RpZnkoYCdhcHBlbmRUb0JvZHknIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSByZW1vdmUgdGhpcyBhdHRyaWJ1dGUuYCk7XG4gICAgfVxuICAgIC8vIEN1c3RvbSByZXN1bHRzIHRlbXBsYXRlXG4gICAgdGhpcy5yZXN1bHRzQ29tcG9uZW50ID0gdGhpcy5jb25maWcucmVzdWx0c1RlbXBsYXRlIHx8IFBpY2tlclJlc3VsdHM7XG4gICAgLy8gR2V0IGFsbCBkaXN0aW5jdCBrZXkgdXAgZXZlbnRzIGZyb20gdGhlIGlucHV0IGFuZCBvbmx5IGZpcmUgaWYgbG9uZyBlbm91Z2ggYW5kIGRpc3RpbmN0XG4gICAgLy8gbGV0IGlucHV0ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICBjb25zdCBwYXN0ZU9ic2VydmVyID0gZnJvbUV2ZW50KHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCwgJ3Bhc3RlJykucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgyNTApLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICApO1xuICAgIHBhc3RlT2JzZXJ2ZXIuc3Vic2NyaWJlKChldmVudDogQ2xpcGJvYXJkRXZlbnQpID0+IHRoaXMub25EZWJvdW5jZWRLZXl1cChldmVudCksIChlcnIpID0+IHRoaXMuaGlkZVJlc3VsdHMoZXJyKSk7XG4gICAgY29uc3Qga2V5Ym9hcmRPYnNlcnZlciA9IGZyb21FdmVudCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMjUwKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgKTtcbiAgICBrZXlib2FyZE9ic2VydmVyLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHRoaXMub25EZWJvdW5jZWRLZXl1cChldmVudCksIChlcnIpID0+IHRoaXMuaGlkZVJlc3VsdHMoZXJyKSk7XG4gIH1cblxuICBwcml2YXRlIG9uRGVib3VuY2VkS2V5dXAoZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKFtLZXlDb2Rlcy5FU0MsIEtleUNvZGVzLlVQLCBLZXlDb2Rlcy5ET1dOLCBLZXlDb2Rlcy5FTlRFUiwgS2V5Q29kZXMuVEFCXS5pbmNsdWRlcyhldmVudFsna2V5Q29kZSddKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNob3coKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy5jb250YWluZXIub3BlblBhbmVsKCk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VQYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRhaW5lci5jbG9zZVBhbmVsKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhbmVsT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXIgJiYgdGhpcy5jb250YWluZXIucGFuZWxPcGVuO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93KHRlcm0/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgIC8vIFNob3cgdGhlIHJlc3VsdHMgaW5zaWRlXG4gICAgdGhpcy5zaG93UmVzdWx0cyh0ZXJtKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVQaWNrZXJJbnB1dCkge1xuICAgICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYW5lbE9wZW4gJiYgIXRoaXMuZGlzYWJsZVBpY2tlcklucHV0KSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRVNDIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlRBQikge1xuICAgICAgICB0aGlzLmhpZGVSZXN1bHRzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlVQKSB7XG4gICAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UucHJldkFjdGl2ZU1hdGNoKCk7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5ET1dOKSB7XG4gICAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UubmV4dEFjdGl2ZU1hdGNoKCk7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FTlRFUikge1xuICAgICAgICBjb25zdCBhY3RpdmVNYXRjaCA9IHRoaXMucG9wdXAuaW5zdGFuY2UuYWN0aXZlTWF0Y2g7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZC5maW5kKChzZWxlY3RlZCkgPT4gYWN0aXZlTWF0Y2ggJiYgYWN0aXZlTWF0Y2gudmFsdWUgJiYgc2VsZWN0ZWQudmFsdWUgPT09IGFjdGl2ZU1hdGNoLnZhbHVlKSkge1xuICAgICAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2Uuc2VsZWN0QWN0aXZlTWF0Y2goKTtcbiAgICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICgoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuQkFDS1NQQUNFIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkRFTEVURSkgJiYgIUhlbHBlcnMuaXNCbGFuayh0aGlzLl92YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5jbGVhclZhbHVlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuREVMRVRFICYmIEhlbHBlcnMuaXNCbGFuayh0aGlzLl92YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5jbGVhclZhbHVlKHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyVmFsdWUod2lwZVRlcm0pIHtcbiAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgdGhpcy5jaGFuZ2VkLmVtaXQoeyB2YWx1ZTogdGhpcy5fdmFsdWUsIHJhd1ZhbHVlOiB7IGxhYmVsOiAnJywgdmFsdWU6IHRoaXMuX3ZhbHVlIH0gfSk7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcblxuICAgIGlmICh3aXBlVGVybSkge1xuICAgICAgdGhpcy50ZXJtID0gJyc7XG4gICAgICB0aGlzLmhpZGVSZXN1bHRzKCk7XG4gICAgfVxuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uRm9jdXNcbiAgICogQGRlc2NyaXB0aW9uIFdoZW4gdGhlIGlucHV0J3MgZm9jdXMgZXZlbnQgaXMgY2FsbGVkIHRoaXMgbWV0aG9kIGNhbGxzIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkaXNwbGF5cyB0aGVcbiAgICogcmVzdWx0cy5cbiAgICovXG4gIG9uRm9jdXMoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIC8vIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIHJlc3VsdHMgKGNhbGxlZCBwb3B1cCkgYW5kIGFkZHMgYWxsIHRoZSBiaW5kaW5ncyB0byB0aGF0IGluc3RhbmNlLlxuICBzaG93UmVzdWx0cyh0ZXJtPzogYW55KSB7XG4gICAgLy8gVXBkYXRlIE1hdGNoZXNcbiAgICBpZiAodGhpcy5wb3B1cCkge1xuICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIGxpc3Qgb3IgY3JlYXRlIHRoZSBET00gZWxlbWVudFxuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UudGVybSA9IHRoaXMudGVybTtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2Uuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5hdXRvU2VsZWN0Rmlyc3RPcHRpb24gPSB0aGlzLmF1dG9TZWxlY3RGaXJzdE9wdGlvbjtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvcHVwID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmQodGhpcy5yZXN1bHRzQ29tcG9uZW50LCB0aGlzLnJlc3VsdHMpO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5wYXJlbnQgPSB0aGlzO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UudGVybSA9IHRoaXMudGVybTtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2Uuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5hdXRvU2VsZWN0Rmlyc3RPcHRpb24gPSB0aGlzLmF1dG9TZWxlY3RGaXJzdE9wdGlvbjtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2Uub3ZlcmxheSA9IHRoaXMuY29udGFpbmVyLm92ZXJsYXlSZWY7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvLyBUZWxscyB0aGUgb3ZlcmxheSBjb21wb25lbnQgdG8gaGlkZSB0aGUgcGlja2VyIHJlc3VsdHMgZnJvbSB0aGUgRE9NIHdpdGhvdXQgZGVsZXRpbmcgdGhlIGR5bmFtaWNhbGx5IGFsbG9jYXRlZCBwb3B1cCBpbnN0YW5jZSBjcmVhdGVkIGluXG4gIC8vIHNob3dSZXN1bHRzLiBUaGUgcG9wdXAgaW5zdGFuY2Ugd2lsbCByZW1haW4gaW4gbWVtb3J5IGZyb20gdGhlIGZpcnN0IHRpbWUgdGhlIHJlc3VsdHMgYXJlIHNob3duIHVudGlsIHRoaXMgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cbiAgaGlkZVJlc3VsdHMoZXJyPzogYW55KSB7XG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvLyBDbGVhbnMgdXAgbGlzdGVuZXJzIGZvciB0aGUgcG9wdXAgLSB3aWxsIGdldCBleGVjdXRlZCBubyBtYXR0ZXIgaG93IHRoZSBwb3B1cCBpcyBjbG9zZWQuXG4gIG9uT3ZlcmxheUNsb3NlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb3B1cCAmJiB0aGlzLnBvcHVwLmluc3RhbmNlICYmIHRoaXMucG9wdXAuaW5zdGFuY2UuY2xlYW5VcCkge1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5jbGVhblVwKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gZ2V0IGFjY2Vzc29yXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICAvLyBzZXQgYWNjZXNzb3IgaW5jbHVkaW5nIGNhbGwgdGhlIG9uY2hhbmdlIGNhbGxiYWNrXG4gIHNldCB2YWx1ZShzZWxlY3RlZCkge1xuICAgIGlmICghc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMudGVybSA9ICcnO1xuICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkLnZhbHVlICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy50ZXJtID0gdGhpcy5jbGVhclZhbHVlT25TZWxlY3QgPyAnJyA6IHNlbGVjdGVkLmxhYmVsO1xuICAgICAgdGhpcy5fdmFsdWUgPSBzZWxlY3RlZC52YWx1ZTtcbiAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHsgdmFsdWU6IHNlbGVjdGVkLnZhbHVlLCByYXdWYWx1ZTogeyBsYWJlbDogdGhpcy50ZXJtLCB2YWx1ZTogc2VsZWN0ZWQudmFsdWUgfSB9KTtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoc2VsZWN0ZWQpO1xuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHNlbGVjdGVkLnZhbHVlKTtcbiAgICAgIGlmICh0aGlzLnBvcHVwKSB7XG4gICAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2Uuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiBzZWxlY3RlZC52YWx1ZSwgcmF3VmFsdWU6IHsgbGFiZWw6IHRoaXMudGVybSwgdmFsdWU6IHRoaXMuX3ZhbHVlIH0gfSk7XG4gICAgICB0aGlzLnNlbGVjdC5lbWl0KHNlbGVjdGVkKTtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvLyBNYWtlcyBzdXJlIHRvIGNsZWFyIHRoZSBtb2RlbCBpZiB0aGUgdXNlciBjbGVhcnMgdGhlIHRleHQgYm94XG4gIGNoZWNrVGVybShldmVudCkge1xuICAgIHRoaXMudHlwaW5nLmVtaXQoZXZlbnQpO1xuICAgIGlmICghZXZlbnQgfHwgIWV2ZW50Lmxlbmd0aCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvLyBTZXQgdG91Y2hlZCBvbiBibHVyXG4gIG9uVG91Y2hlZChldmVudD86IEV2ZW50KSB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIC8vIEZyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLmNsZWFyVmFsdWVPblNlbGVjdCkge1xuICAgICAgdGhpcy50ZXJtID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICF0aGlzLmNvbmZpZy51c2VHZXRMYWJlbHMpIHtcbiAgICAgICAgdGhpcy50ZXJtID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLmxhYmVsKSB7XG4gICAgICAgIHRoaXMudGVybSA9IHZhbHVlLmxhYmVsO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB2YWx1ZS5maXJzdE5hbWUpIHtcbiAgICAgICAgdGhpcy50ZXJtID0gYCR7dmFsdWUuZmlyc3ROYW1lfSAke3ZhbHVlLmxhc3ROYW1lfWA7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLm5hbWUpIHtcbiAgICAgICAgdGhpcy50ZXJtID0gdmFsdWUubmFtZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmdldExhYmVscyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLmNvbmZpZy5nZXRMYWJlbHModmFsdWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMudGVybSA9IHJlc3VsdC5sZW5ndGggPyByZXN1bHRbMF0ubGFiZWwgfHwgJycgOiByZXN1bHQubGFiZWwgfHwgJyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGVybSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLnRpdGxlKSB7XG4gICAgICAgIHRoaXMudGVybSA9IHZhbHVlLnRpdGxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50ZXJtID0gdmFsdWUgfHwgJyc7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX2Rpc2FibGVQaWNrZXJJbnB1dCA9IGRpc2FibGVkO1xuICB9XG59XG4iXX0=