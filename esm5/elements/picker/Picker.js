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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3BpY2tlci9QaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUVuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFakMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDNUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7O0lBSXRELHFCQUFxQixHQUFHO0lBQzVCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsRUFBQztJQUNoRCxLQUFLLEVBQUUsSUFBSTtDQUNaOzs7Ozs7Ozs7QUFVRDtJQTJHRSwyQkFBbUIsT0FBbUIsRUFBVSxjQUE4QixFQUFVLEdBQXNCO1FBQTNG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TCxLQUFLO2dDQUVMLEtBQUs7MkJBRUwsS0FBSzsrQkFHTCxLQUFLO3VDQUdMLEtBQUs7cUNBR0wsS0FBSztpQ0FHTCxLQUFLO3VCQUdMLEtBQUs7d0NBR0wsS0FBSztrQ0FFTCxLQUFLO3FDQUlMLEtBQUs7MEJBWUwsTUFBTTt5QkFFTixNQUFNO3dCQUVOLE1BQU07dUJBRU4sTUFBTTt5QkFFTixNQUFNOzRCQUdOLFNBQVMsU0FBQyw0QkFBNEIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7d0JBRXhELFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQXlQdEMsd0JBQUM7Q0FBQSxBQTFWRCxJQTBWQztTQXZUWSxpQkFBaUI7OztJQUU1QixvQ0FDMEI7O0lBRTFCLG1DQUNvQzs7SUFDcEMsd0NBQ29COztJQUNwQiwrQ0FDNEI7O0lBQzVCLDBDQUM4Qjs7SUFDOUIscUNBQzBCOztJQUUxQix5Q0FDOEI7O0lBRTlCLGlEQUM2Qjs7SUFFN0IsK0NBQ3FDOztJQUVyQywyQ0FDdUI7O0lBRXZCLGlDQUNzQjs7SUFFdEIsa0RBQ3NDOztJQUN0Qyw0Q0FDNEI7Ozs7O0lBWTVCLGdEQUE2Qzs7SUFHN0Msb0NBQ2dEOztJQUNoRCxtQ0FDK0M7O0lBQy9DLGtDQUM4Qzs7SUFDOUMsaUNBQzZDOztJQUM3QyxtQ0FDK0M7O0lBRS9DLHNDQUMrQzs7Ozs7SUFDL0Msa0NBQzBCOztJQUUxQixpQ0FBa0I7O0lBQ2xCLDZDQUFzQjs7SUFDdEIsa0NBQXlCOztJQUN6QixtQ0FBWTs7SUFDWiwwQ0FBb0M7O0lBQ3BDLDJDQUFxQzs7SUFFekIsb0NBQTBCOzs7OztJQUFFLDJDQUFzQzs7Ozs7SUFBRSxnQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudFJlZixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbi8vIEFQUFxuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgUGlja2VyUmVzdWx0cyB9IGZyb20gJy4vZXh0cmFzL3BpY2tlci1yZXN1bHRzL1BpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL292ZXJsYXkvT3ZlcmxheSc7XG5pbXBvcnQgeyBub3RpZnkgfSBmcm9tICcuLi8uLi91dGlscy9ub3RpZmllci9ub3RpZmllci51dGlsJztcbmltcG9ydCB7IE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi4vZm9ybS9Gb3JtQ29udHJvbHMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IFBJQ0tFUl9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9QaWNrZXJFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG4vKipcbiAqIEBuYW1lIFBpY2tlclxuICpcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIGNsYXNzIGlzIHRoZSBkaXJlY3RpdmUgZGVmaW5pdGlvbiBvZiB0aGUgUGlja2VyLiBJZiB5b3UgYWRkIGFuZCBhdHRyaWJ1dGUgb2YgYHBpY2tlcmAgdG8gYW4gaW5wdXQsXG4gKiBpdCB3aWxsIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgcGlja2VyIHdoaWNoIHdyYXBzIHRoZSBpbnB1dCBpbiBhbGwgb2YgdGhlIHBpY2tlciBIVE1MIGVsZW1lbnRzIGFuZCBmdW5jdGlvbmFsaXR5LlxuICogUGlja2VyIHNob3VsZCBiZSBhZGRlZCBhcyBhIHR3by13YXkgYm91bmQgbmdNb2RlbCBpbnN0YW5jZSBgWyhwaWNrZXIpXT1cIlwiYCBpbiBvcmRlciB0byBoYXZlIHRoZSBwaWNrZXIgb3B0aW9uc1xuICogZHluYW1pY2FsbHkgcG9wdWxhdGUuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcGlja2VyJyxcbiAgcHJvdmlkZXJzOiBbUElDS0VSX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aSBjbGFzcz1cImJoaS1tb3JlXCIgKm5nSWY9XCJjb25maWc/LmVudGl0eUljb24gJiYgIV92YWx1ZVwiPjwvaT5cbiAgICA8aSBjbGFzcz1cImJoaS17eyBjb25maWc/LmVudGl0eUljb24gfX0gZW50aXR5LWljb24ge3sgY29uZmlnPy5lbnRpdHlJY29uIH19XCIgKm5nSWY9XCJjb25maWc/LmVudGl0eUljb24gJiYgX3ZhbHVlXCI+PC9pPlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgY2xhc3M9XCJwaWNrZXItaW5wdXRcIlxuICAgICAgWyhuZ01vZGVsKV09XCJ0ZXJtXCJcbiAgICAgIFtjbGFzcy5lbnRpdHktcGlja2VyXT1cImNvbmZpZz8uZW50aXR5SWNvblwiXG4gICAgICBbY2xhc3MuZW50aXR5LXNlbGVjdGVkXT1cImNvbmZpZz8uZW50aXR5SWNvbiAmJiBfdmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hlY2tUZXJtKCRldmVudClcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcbiAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxuICAgICAgKGNsaWNrKT1cIm9uRm9jdXMoJGV2ZW50KVwiXG4gICAgICAoYmx1cik9XCJvblRvdWNoZWQoJGV2ZW50KVwiXG4gICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgI2lucHV0XG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZVBpY2tlcklucHV0XCJcbiAgICAvPlxuICAgIDxpIGNsYXNzPVwiYmhpLXNlYXJjaFwiICpuZ0lmPVwiKCFfdmFsdWUgfHwgY2xlYXJWYWx1ZU9uU2VsZWN0KSAmJiAhZGlzYWJsZVBpY2tlcklucHV0XCI+PC9pPlxuICAgIDxpXG4gICAgICBjbGFzcz1cImJoaS10aW1lc1wiXG4gICAgICBbY2xhc3MuZW50aXR5LXNlbGVjdGVkXT1cImNvbmZpZz8uZW50aXR5SWNvbiAmJiBfdmFsdWVcIlxuICAgICAgKm5nSWY9XCJfdmFsdWUgJiYgIWNsZWFyVmFsdWVPblNlbGVjdCAmJiAhZGlzYWJsZVBpY2tlcklucHV0XCJcbiAgICAgIChjbGljayk9XCJjbGVhclZhbHVlKHRydWUpXCJcbiAgICA+PC9pPlxuICAgIDxub3ZvLW92ZXJsYXktdGVtcGxhdGUgY2xhc3M9XCJwaWNrZXItcmVzdWx0cy1jb250YWluZXJcIiBbcGFyZW50XT1cImVsZW1lbnRcIiBwb3NpdGlvbj1cImFib3ZlLWJlbG93XCIgKGNsb3NpbmcpPVwib25PdmVybGF5Q2xvc2VkKClcIj5cbiAgICAgIDxzcGFuICNyZXN1bHRzPjwvc3Bhbj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L25vdm8tb3ZlcmxheS10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1BpY2tlckVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBDb250YWluZXIgZm9yIHRoZSByZXN1bHRzXG4gIEBWaWV3Q2hpbGQoJ3Jlc3VsdHMnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICByZXN1bHRzOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBJbnB1dCgpXG4gIGNvbmZpZzogTm92b0NvbnRyb2xDb25maWdbJ2NvbmZpZyddO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBjbGVhclZhbHVlT25TZWxlY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBzZWxlY3RlZDogQXJyYXk8YW55PiA9IFtdO1xuICAvLyBEZXByZWNhdGVkXG4gIEBJbnB1dCgpXG4gIGFwcGVuZFRvQm9keTogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBEZXByZWNhdGVkXG4gIEBJbnB1dCgpXG4gIHBhcmVudFNjcm9sbFNlbGVjdG9yOiBzdHJpbmc7XG4gIC8vIERlcHJlY2F0ZWRcbiAgQElucHV0KClcbiAgcGFyZW50U2Nyb2xsQWN0aW9uOiBzdHJpbmcgPSAnY2xvc2UnO1xuICAvLyBDdXN0b20gY2xhc3MgZm9yIHRoZSBkcm9wZG93biBjb250YWluZXJcbiAgQElucHV0KClcbiAgY29udGFpbmVyQ2xhc3M6IHN0cmluZztcbiAgLy8gU2lkZSB0aGUgZHJvcGRvd24gd2lsbCBvcGVuXG4gIEBJbnB1dCgpXG4gIHNpZGU6IHN0cmluZyA9ICdsZWZ0JztcbiAgLy8gQXV0b3NlbGVjdHMgdGhlIGZpcnN0IG9wdGlvbiBpbiB0aGUgcmVzdWx0c1xuICBASW5wdXQoKVxuICBhdXRvU2VsZWN0Rmlyc3RPcHRpb246IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBvdmVycmlkZUVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgLy8gRGlzYWJsZSBmcm9tIHR5cGluZyBpbnRvIHRoZSBwaWNrZXIgKHJlc3VsdCB0ZW1wbGF0ZSBkb2VzIGV2ZXJ5dGhpbmcpXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlUGlja2VySW5wdXQodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVQaWNrZXJJbnB1dCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuXG4gIGdldCBkaXNhYmxlUGlja2VySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVQaWNrZXJJbnB1dDtcbiAgfVxuXG4gIHByaXZhdGUgX2Rpc2FibGVQaWNrZXJJbnB1dDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIEVtaXR0ZXIgZm9yIHNlbGVjdHNcbiAgQE91dHB1dCgpXG4gIGNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgdHlwaW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHB1YmxpYyBjb250YWluZXI6IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHJpdmF0ZSBpbnB1dDogRWxlbWVudFJlZjtcblxuICB0ZXJtOiBzdHJpbmcgPSAnJztcbiAgcmVzdWx0c0NvbXBvbmVudDogYW55O1xuICBwb3B1cDogQ29tcG9uZW50UmVmPGFueT47XG4gIF92YWx1ZTogYW55O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscywgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5vdmVycmlkZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMub3ZlcnJpZGVFbGVtZW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgIG5vdGlmeShgJ2FwcGVuZFRvQm9keScgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIHJlbW92ZSB0aGlzIGF0dHJpYnV0ZS5gKTtcbiAgICB9XG4gICAgLy8gQ3VzdG9tIHJlc3VsdHMgdGVtcGxhdGVcbiAgICB0aGlzLnJlc3VsdHNDb21wb25lbnQgPSB0aGlzLmNvbmZpZy5yZXN1bHRzVGVtcGxhdGUgfHwgUGlja2VyUmVzdWx0cztcbiAgICAvLyBHZXQgYWxsIGRpc3RpbmN0IGtleSB1cCBldmVudHMgZnJvbSB0aGUgaW5wdXQgYW5kIG9ubHkgZmlyZSBpZiBsb25nIGVub3VnaCBhbmQgZGlzdGluY3RcbiAgICAvLyBsZXQgaW5wdXQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGNvbnN0IHBhc3RlT2JzZXJ2ZXIgPSBmcm9tRXZlbnQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LCAncGFzdGUnKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDI1MCksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICk7XG4gICAgcGFzdGVPYnNlcnZlci5zdWJzY3JpYmUoKGV2ZW50OiBDbGlwYm9hcmRFdmVudCkgPT4gdGhpcy5vbkRlYm91bmNlZEtleXVwKGV2ZW50KSwgKGVycikgPT4gdGhpcy5oaWRlUmVzdWx0cyhlcnIpKTtcbiAgICBjb25zdCBrZXlib2FyZE9ic2VydmVyID0gZnJvbUV2ZW50KHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCwgJ2tleXVwJykucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgyNTApLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICApO1xuICAgIGtleWJvYXJkT2JzZXJ2ZXIuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5vbkRlYm91bmNlZEtleXVwKGV2ZW50KSwgKGVycikgPT4gdGhpcy5oaWRlUmVzdWx0cyhlcnIpKTtcbiAgfVxuXG4gIHByaXZhdGUgb25EZWJvdW5jZWRLZXl1cChldmVudDogRXZlbnQpIHtcbiAgICBpZiAoW0tleUNvZGVzLkVTQywgS2V5Q29kZXMuVVAsIEtleUNvZGVzLkRPV04sIEtleUNvZGVzLkVOVEVSLCBLZXlDb2Rlcy5UQUJdLmluY2x1ZGVzKGV2ZW50WydrZXlDb2RlJ10pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2hvdygoZXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWUpO1xuICB9XG5cbiAgcHVibGljIG9wZW5QYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRhaW5lci5vcGVuUGFuZWwoKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZVBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMuY29udGFpbmVyLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGFuZWxPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRhaW5lci5wYW5lbE9wZW47XG4gIH1cblxuICBwcml2YXRlIHNob3codGVybT86IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMub3BlblBhbmVsKCk7XG4gICAgLy8gU2hvdyB0aGUgcmVzdWx0cyBpbnNpZGVcbiAgICB0aGlzLnNob3dSZXN1bHRzKHRlcm0pO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZVBpY2tlcklucHV0KSB7XG4gICAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnBhbmVsT3BlbiAmJiAhdGhpcy5kaXNhYmxlUGlja2VySW5wdXQpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FU0MgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuVEFCKSB7XG4gICAgICAgIHRoaXMuaGlkZVJlc3VsdHMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuVVApIHtcbiAgICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5wcmV2QWN0aXZlTWF0Y2goKTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkRPV04pIHtcbiAgICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5uZXh0QWN0aXZlTWF0Y2goKTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVOVEVSKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZU1hdGNoID0gdGhpcy5wb3B1cC5pbnN0YW5jZS5hY3RpdmVNYXRjaDtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkLmZpbmQoKHNlbGVjdGVkKSA9PiBhY3RpdmVNYXRjaCAmJiBhY3RpdmVNYXRjaC52YWx1ZSAmJiBzZWxlY3RlZC52YWx1ZSA9PT0gYWN0aXZlTWF0Y2gudmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5zZWxlY3RBY3RpdmVNYXRjaCgpO1xuICAgICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5CQUNLU1BBQ0UgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuREVMRVRFKSAmJiAhSGVscGVycy5pc0JsYW5rKHRoaXMuX3ZhbHVlKSkge1xuICAgICAgICB0aGlzLmNsZWFyVmFsdWUoZmFsc2UpO1xuICAgICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5ERUxFVEUgJiYgSGVscGVycy5pc0JsYW5rKHRoaXMuX3ZhbHVlKSkge1xuICAgICAgICB0aGlzLmNsZWFyVmFsdWUodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xlYXJWYWx1ZSh3aXBlVGVybSkge1xuICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IHZhbHVlOiB0aGlzLl92YWx1ZSwgcmF3VmFsdWU6IHsgbGFiZWw6ICcnLCB2YWx1ZTogdGhpcy5fdmFsdWUgfSB9KTtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5fdmFsdWUpO1xuXG4gICAgaWYgKHdpcGVUZXJtKSB7XG4gICAgICB0aGlzLnRlcm0gPSAnJztcbiAgICAgIHRoaXMuaGlkZVJlc3VsdHMoKTtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgb25Gb2N1c1xuICAgKiBAZGVzY3JpcHRpb24gV2hlbiB0aGUgaW5wdXQncyBmb2N1cyBldmVudCBpcyBjYWxsZWQgdGhpcyBtZXRob2QgY2FsbHMgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRpc3BsYXlzIHRoZVxuICAgKiByZXN1bHRzLlxuICAgKi9cbiAgb25Gb2N1cyhldmVudCkge1xuICAgIGlmICghdGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgLy8gQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgcmVzdWx0cyAoY2FsbGVkIHBvcHVwKSBhbmQgYWRkcyBhbGwgdGhlIGJpbmRpbmdzIHRvIHRoYXQgaW5zdGFuY2UuXG4gIHNob3dSZXN1bHRzKHRlcm0/OiBhbnkpIHtcbiAgICAvLyBVcGRhdGUgTWF0Y2hlc1xuICAgIGlmICh0aGlzLnBvcHVwKSB7XG4gICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgbGlzdCBvciBjcmVhdGUgdGhlIERPTSBlbGVtZW50XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS50ZXJtID0gdGhpcy50ZXJtO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLmF1dG9TZWxlY3RGaXJzdE9wdGlvbiA9IHRoaXMuYXV0b1NlbGVjdEZpcnN0T3B0aW9uO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9wdXAgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZCh0aGlzLnJlc3VsdHNDb21wb25lbnQsIHRoaXMucmVzdWx0cyk7XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnBhcmVudCA9IHRoaXM7XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS50ZXJtID0gdGhpcy50ZXJtO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLmF1dG9TZWxlY3RGaXJzdE9wdGlvbiA9IHRoaXMuYXV0b1NlbGVjdEZpcnN0T3B0aW9uO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5vdmVybGF5ID0gdGhpcy5jb250YWluZXIub3ZlcmxheVJlZjtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRlbGxzIHRoZSBvdmVybGF5IGNvbXBvbmVudCB0byBoaWRlIHRoZSBwaWNrZXIgcmVzdWx0cyBmcm9tIHRoZSBET00gd2l0aG91dCBkZWxldGluZyB0aGUgZHluYW1pY2FsbHkgYWxsb2NhdGVkIHBvcHVwIGluc3RhbmNlIGNyZWF0ZWQgaW5cbiAgLy8gc2hvd1Jlc3VsdHMuIFRoZSBwb3B1cCBpbnN0YW5jZSB3aWxsIHJlbWFpbiBpbiBtZW1vcnkgZnJvbSB0aGUgZmlyc3QgdGltZSB0aGUgcmVzdWx0cyBhcmUgc2hvd24gdW50aWwgdGhpcyBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxuICBoaWRlUmVzdWx0cyhlcnI/OiBhbnkpIHtcbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8vIENsZWFucyB1cCBsaXN0ZW5lcnMgZm9yIHRoZSBwb3B1cCAtIHdpbGwgZ2V0IGV4ZWN1dGVkIG5vIG1hdHRlciBob3cgdGhlIHBvcHVwIGlzIGNsb3NlZC5cbiAgb25PdmVybGF5Q2xvc2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBvcHVwICYmIHRoaXMucG9wdXAuaW5zdGFuY2UgJiYgdGhpcy5wb3B1cC5pbnN0YW5jZS5jbGVhblVwKSB7XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLmNsZWFuVXAoKTtcbiAgICB9XG4gIH1cblxuICAvLyBnZXQgYWNjZXNzb3JcbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIC8vIHNldCBhY2Nlc3NvciBpbmNsdWRpbmcgY2FsbCB0aGUgb25jaGFuZ2UgY2FsbGJhY2tcbiAgc2V0IHZhbHVlKHNlbGVjdGVkKSB7XG4gICAgaWYgKCFzZWxlY3RlZCkge1xuICAgICAgdGhpcy50ZXJtID0gJyc7XG4gICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWQudmFsdWUgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLnRlcm0gPSB0aGlzLmNsZWFyVmFsdWVPblNlbGVjdCA/ICcnIDogc2VsZWN0ZWQubGFiZWw7XG4gICAgICB0aGlzLl92YWx1ZSA9IHNlbGVjdGVkLnZhbHVlO1xuICAgICAgdGhpcy5jaGFuZ2VkLmVtaXQoeyB2YWx1ZTogc2VsZWN0ZWQudmFsdWUsIHJhd1ZhbHVlOiB7IGxhYmVsOiB0aGlzLnRlcm0sIHZhbHVlOiBzZWxlY3RlZC52YWx1ZSB9IH0pO1xuICAgICAgdGhpcy5zZWxlY3QuZW1pdChzZWxlY3RlZCk7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2Uoc2VsZWN0ZWQudmFsdWUpO1xuICAgICAgaWYgKHRoaXMucG9wdXApIHtcbiAgICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHsgdmFsdWU6IHNlbGVjdGVkLnZhbHVlLCByYXdWYWx1ZTogeyBsYWJlbDogdGhpcy50ZXJtLCB2YWx1ZTogdGhpcy5fdmFsdWUgfSB9KTtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoc2VsZWN0ZWQpO1xuICAgIH1cbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8vIE1ha2VzIHN1cmUgdG8gY2xlYXIgdGhlIG1vZGVsIGlmIHRoZSB1c2VyIGNsZWFycyB0aGUgdGV4dCBib3hcbiAgY2hlY2tUZXJtKGV2ZW50KSB7XG4gICAgdGhpcy50eXBpbmcuZW1pdChldmVudCk7XG4gICAgaWYgKCFldmVudCB8fCAhZXZlbnQubGVuZ3RoKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8vIFNldCB0b3VjaGVkIG9uIGJsdXJcbiAgb25Ub3VjaGVkKGV2ZW50PzogRXZlbnQpIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgLy8gRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuY2xlYXJWYWx1ZU9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnRlcm0gPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgIXRoaXMuY29uZmlnLnVzZUdldExhYmVscykge1xuICAgICAgICB0aGlzLnRlcm0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdmFsdWUubGFiZWwpIHtcbiAgICAgICAgdGhpcy50ZXJtID0gdmFsdWUubGFiZWw7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLmZpcnN0TmFtZSkge1xuICAgICAgICB0aGlzLnRlcm0gPSBgJHt2YWx1ZS5maXJzdE5hbWV9ICR7dmFsdWUubGFzdE5hbWV9YDtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdmFsdWUubmFtZSkge1xuICAgICAgICB0aGlzLnRlcm0gPSB2YWx1ZS5uYW1lO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5jb25maWcuZ2V0TGFiZWxzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmdldExhYmVscyh2YWx1ZSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy50ZXJtID0gcmVzdWx0Lmxlbmd0aCA/IHJlc3VsdFswXS5sYWJlbCB8fCAnJyA6IHJlc3VsdC5sYWJlbCB8fCAnJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50ZXJtID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdmFsdWUudGl0bGUpIHtcbiAgICAgICAgdGhpcy50ZXJtID0gdmFsdWUudGl0bGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRlcm0gPSB2YWx1ZSB8fCAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fZGlzYWJsZVBpY2tlcklucHV0ID0gZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==