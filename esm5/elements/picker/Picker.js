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
        this.isStatic = true;
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
    /** BEGIN: Convenient Panel Methods. */
    /**
     * BEGIN: Convenient Panel Methods.
     * @return {?}
     */
    NovoPickerElement.prototype.openPanel = /**
     * BEGIN: Convenient Panel Methods.
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
    /** END: Convenient Panel Methods. */
    /**
     * END: Convenient Panel Methods.
     * @private
     * @param {?=} term
     * @return {?}
     */
    NovoPickerElement.prototype.show = /**
     * END: Convenient Panel Methods.
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
     * @private
     * @return {?}
     */
    NovoPickerElement.prototype.hide = /**
     * @private
     * @return {?}
     */
    function () {
        this.closePanel();
        this.ref.markForCheck();
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
            this.term = null;
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
    /**
     * @name showResults
     *
     * @description This method creates an instance of the results (called popup) and adds all the bindings to that
     * instance.
     */
    /**
     * \@name showResults
     *
     * \@description This method creates an instance of the results (called popup) and adds all the bindings to that
     * instance.
     * @param {?=} term
     * @return {?}
     */
    NovoPickerElement.prototype.showResults = /**
     * \@name showResults
     *
     * \@description This method creates an instance of the results (called popup) and adds all the bindings to that
     * instance.
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
            this.popup = this.componentUtils.appendNextToLocation(this.resultsComponent, this.results);
            this.popup.instance.parent = this;
            this.popup.instance.config = this.config;
            this.popup.instance.term = this.term;
            this.popup.instance.selected = this.selected;
            this.popup.instance.autoSelectFirstOption = this.autoSelectFirstOption;
            this.popup.instance.overlay = this.container.overlayRef;
            this.ref.markForCheck();
        }
    };
    /**
     * @name hideResults
     *
     * @description - This method deletes the picker results from the DOM.
     */
    /**
     * \@name hideResults
     *
     * \@description - This method deletes the picker results from the DOM.
     * @param {?=} err
     * @return {?}
     */
    NovoPickerElement.prototype.hideResults = /**
     * \@name hideResults
     *
     * \@description - This method deletes the picker results from the DOM.
     * @param {?=} err
     * @return {?}
     */
    function (err) {
        if (this.popup) {
            this.popup.destroy();
            this.popup = null;
        }
        this.hide();
    };
    /**
     * @return {?}
     */
    NovoPickerElement.prototype.onOverlayClosed = /**
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
            if (typeof value === 'string') {
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
                    template: "\n        <i class=\"bhi-more\" *ngIf=\"config?.entityIcon && !_value\"></i>\n        <i class=\"bhi-{{ config?.entityIcon }} entity-icon {{ config?.entityIcon }}\" *ngIf=\"config?.entityIcon && _value\"></i>\n        <input\n            type=\"text\"\n            class=\"picker-input\"\n            [(ngModel)]=\"term\"\n            [class.entity-picker]=\"config?.entityIcon\"\n            [class.entity-selected]=\"config?.entityIcon && _value\"\n            (ngModelChange)=\"checkTerm($event)\"\n            [placeholder]=\"placeholder\"\n            (keydown)=\"onKeyDown($event)\"\n            (focus)=\"onFocus($event)\"\n            (click)=\"onFocus($event)\"\n            (blur)=\"onTouched($event)\"\n            autocomplete=\"off\" #input\n            [disabled]=\"disablePickerInput\"/>\n        <i class=\"bhi-search\" *ngIf=\"(!_value || clearValueOnSelect) && !disablePickerInput\"></i>\n        <i class=\"bhi-times\" [class.entity-selected]=\"config?.entityIcon && _value\" *ngIf=\"_value && !clearValueOnSelect && !disablePickerInput\" (click)=\"clearValue(true)\"></i>\n        <novo-overlay-template class=\"picker-results-container\" [parent]=\"element\" position=\"above-below\" (closing)=\"onOverlayClosed()\">\n            <span #results></span>\n            <ng-content></ng-content>\n        </novo-overlay-template>\n    "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3BpY2tlci9QaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRW5ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUVqQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7SUFHdEQscUJBQXFCLEdBQUc7SUFDNUIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQztJQUNoRCxLQUFLLEVBQUUsSUFBSTtDQUNaOzs7Ozs7Ozs7QUFVRDtJQXFHRSwyQkFBbUIsT0FBbUIsRUFBVSxjQUE4QixFQUFVLEdBQXNCO1FBQTNGLFlB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LDRCQUE0Qjt3QkFFdEMsU0FBUyxTQUFDLE9BQU87O0lBdVFwQix3QkFBQztDQUFBLEFBaFdELElBZ1dDO1NBcFVZLGlCQUFpQjs7O0lBRTVCLG9DQUMwQjs7SUFFMUIsbUNBQ1k7O0lBQ1osd0NBQ29COztJQUNwQiwrQ0FDNEI7O0lBQzVCLDBDQUM4Qjs7SUFDOUIscUNBQzBCOztJQUUxQix5Q0FDOEI7O0lBRTlCLGlEQUM2Qjs7SUFFN0IsK0NBQ3FDOztJQUVyQywyQ0FDdUI7O0lBRXZCLGlDQUNzQjs7SUFFdEIsa0RBQ3NDOztJQUN0Qyw0Q0FDNEI7Ozs7O0lBVzVCLGdEQUE2Qzs7SUFHN0Msb0NBQ2dEOztJQUNoRCxtQ0FDK0M7O0lBQy9DLGtDQUM4Qzs7SUFDOUMsaUNBQzZDOztJQUM3QyxtQ0FDK0M7O0lBRS9DLHNDQUMrQzs7Ozs7SUFDL0Msa0NBQzBCOztJQUUxQix5Q0FBa0I7O0lBQ2xCLHFDQUF5Qjs7SUFDekIsaUNBQWtCOztJQUNsQiw2Q0FBc0I7O0lBQ3RCLGtDQUFXOztJQUNYLG1DQUFZOztJQUNaLDBDQUFtQzs7SUFDbkMsMkNBQW9DOztJQUV4QixvQ0FBMEI7Ozs7O0lBQUUsMkNBQXNDOzs7OztJQUFFLGdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbi8vIEFQUFxuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgUGlja2VyUmVzdWx0cyB9IGZyb20gJy4vZXh0cmFzL3BpY2tlci1yZXN1bHRzL1BpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL292ZXJsYXkvT3ZlcmxheSc7XG5pbXBvcnQgeyBub3RpZnkgfSBmcm9tICcuLi8uLi91dGlscy9ub3RpZmllci9ub3RpZmllci51dGlsJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBQSUNLRVJfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvUGlja2VyRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuLyoqXG4gKiBAbmFtZSBQaWNrZXJcbiAqXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBjbGFzcyBpcyB0aGUgZGlyZWN0aXZlIGRlZmluaXRpb24gb2YgdGhlIFBpY2tlci4gSWYgeW91IGFkZCBhbmQgYXR0cmlidXRlIG9mIGBwaWNrZXJgIHRvIGFuIGlucHV0LFxuICogaXQgd2lsbCBjcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIHBpY2tlciB3aGljaCB3cmFwcyB0aGUgaW5wdXQgaW4gYWxsIG9mIHRoZSBwaWNrZXIgSFRNTCBlbGVtZW50cyBhbmQgZnVuY3Rpb25hbGl0eS5cbiAqIFBpY2tlciBzaG91bGQgYmUgYWRkZWQgYXMgYSB0d28td2F5IGJvdW5kIG5nTW9kZWwgaW5zdGFuY2UgYFsocGlja2VyKV09XCJcImAgaW4gb3JkZXIgdG8gaGF2ZSB0aGUgcGlja2VyIG9wdGlvbnNcbiAqIGR5bmFtaWNhbGx5IHBvcHVsYXRlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXBpY2tlcicsXG4gIHByb3ZpZGVyczogW1BJQ0tFUl9WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxpIGNsYXNzPVwiYmhpLW1vcmVcIiAqbmdJZj1cImNvbmZpZz8uZW50aXR5SWNvbiAmJiAhX3ZhbHVlXCI+PC9pPlxuICAgICAgICA8aSBjbGFzcz1cImJoaS17eyBjb25maWc/LmVudGl0eUljb24gfX0gZW50aXR5LWljb24ge3sgY29uZmlnPy5lbnRpdHlJY29uIH19XCIgKm5nSWY9XCJjb25maWc/LmVudGl0eUljb24gJiYgX3ZhbHVlXCI+PC9pPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzPVwicGlja2VyLWlucHV0XCJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwidGVybVwiXG4gICAgICAgICAgICBbY2xhc3MuZW50aXR5LXBpY2tlcl09XCJjb25maWc/LmVudGl0eUljb25cIlxuICAgICAgICAgICAgW2NsYXNzLmVudGl0eS1zZWxlY3RlZF09XCJjb25maWc/LmVudGl0eUljb24gJiYgX3ZhbHVlXCJcbiAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoZWNrVGVybSgkZXZlbnQpXCJcbiAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAgIChjbGljayk9XCJvbkZvY3VzKCRldmVudClcIlxuICAgICAgICAgICAgKGJsdXIpPVwib25Ub3VjaGVkKCRldmVudClcIlxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCIgI2lucHV0XG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZVBpY2tlcklucHV0XCIvPlxuICAgICAgICA8aSBjbGFzcz1cImJoaS1zZWFyY2hcIiAqbmdJZj1cIighX3ZhbHVlIHx8IGNsZWFyVmFsdWVPblNlbGVjdCkgJiYgIWRpc2FibGVQaWNrZXJJbnB1dFwiPjwvaT5cbiAgICAgICAgPGkgY2xhc3M9XCJiaGktdGltZXNcIiBbY2xhc3MuZW50aXR5LXNlbGVjdGVkXT1cImNvbmZpZz8uZW50aXR5SWNvbiAmJiBfdmFsdWVcIiAqbmdJZj1cIl92YWx1ZSAmJiAhY2xlYXJWYWx1ZU9uU2VsZWN0ICYmICFkaXNhYmxlUGlja2VySW5wdXRcIiAoY2xpY2spPVwiY2xlYXJWYWx1ZSh0cnVlKVwiPjwvaT5cbiAgICAgICAgPG5vdm8tb3ZlcmxheS10ZW1wbGF0ZSBjbGFzcz1cInBpY2tlci1yZXN1bHRzLWNvbnRhaW5lclwiIFtwYXJlbnRdPVwiZWxlbWVudFwiIHBvc2l0aW9uPVwiYWJvdmUtYmVsb3dcIiAoY2xvc2luZyk9XCJvbk92ZXJsYXlDbG9zZWQoKVwiPlxuICAgICAgICAgICAgPHNwYW4gI3Jlc3VsdHM+PC9zcGFuPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L25vdm8tb3ZlcmxheS10ZW1wbGF0ZT5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvUGlja2VyRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIENvbnRhaW5lciBmb3IgdGhlIHJlc3VsdHNcbiAgQFZpZXdDaGlsZCgncmVzdWx0cycsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICByZXN1bHRzOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBJbnB1dCgpXG4gIGNvbmZpZzogYW55O1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBjbGVhclZhbHVlT25TZWxlY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBzZWxlY3RlZDogQXJyYXk8YW55PiA9IFtdO1xuICAvLyBEZXByZWNhdGVkXG4gIEBJbnB1dCgpXG4gIGFwcGVuZFRvQm9keTogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBEZXByZWNhdGVkXG4gIEBJbnB1dCgpXG4gIHBhcmVudFNjcm9sbFNlbGVjdG9yOiBzdHJpbmc7XG4gIC8vIERlcHJlY2F0ZWRcbiAgQElucHV0KClcbiAgcGFyZW50U2Nyb2xsQWN0aW9uOiBzdHJpbmcgPSAnY2xvc2UnO1xuICAvLyBDdXN0b20gY2xhc3MgZm9yIHRoZSBkcm9wZG93biBjb250YWluZXJcbiAgQElucHV0KClcbiAgY29udGFpbmVyQ2xhc3M6IHN0cmluZztcbiAgLy8gU2lkZSB0aGUgZHJvcGRvd24gd2lsbCBvcGVuXG4gIEBJbnB1dCgpXG4gIHNpZGU6IHN0cmluZyA9ICdsZWZ0JztcbiAgLy8gQXV0b3NlbGVjdHMgdGhlIGZpcnN0IG9wdGlvbiBpbiB0aGUgcmVzdWx0c1xuICBASW5wdXQoKVxuICBhdXRvU2VsZWN0Rmlyc3RPcHRpb246IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBvdmVycmlkZUVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgLy8gRGlzYWJsZSBmcm9tIHR5cGluZyBpbnRvIHRoZSBwaWNrZXIgKHJlc3VsdCB0ZW1wbGF0ZSBkb2VzIGV2ZXJ5dGhpbmcpXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlUGlja2VySW5wdXQodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVQaWNrZXJJbnB1dCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuXG4gIGdldCBkaXNhYmxlUGlja2VySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVQaWNrZXJJbnB1dDtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlUGlja2VySW5wdXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBFbWl0dGVyIGZvciBzZWxlY3RzXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHR5cGluZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZChOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50KVxuICBwdWJsaWMgY29udGFpbmVyOiBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdpbnB1dCcpXG4gIHByaXZhdGUgaW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgY2xvc2VIYW5kbGVyOiBhbnk7XG4gIGlzU3RhdGljOiBib29sZWFuID0gdHJ1ZTtcbiAgdGVybTogc3RyaW5nID0gJyc7XG4gIHJlc3VsdHNDb21wb25lbnQ6IGFueTtcbiAgcG9wdXA6IGFueTtcbiAgX3ZhbHVlOiBhbnk7XG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscywgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLm92ZXJyaWRlRWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5vdmVycmlkZUVsZW1lbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmFwcGVuZFRvQm9keSkge1xuICAgICAgbm90aWZ5KGAnYXBwZW5kVG9Cb2R5JyBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgcmVtb3ZlIHRoaXMgYXR0cmlidXRlLmApO1xuICAgIH1cbiAgICAvLyBDdXN0b20gcmVzdWx0cyB0ZW1wbGF0ZVxuICAgIHRoaXMucmVzdWx0c0NvbXBvbmVudCA9IHRoaXMuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSB8fCBQaWNrZXJSZXN1bHRzO1xuICAgIC8vIEdldCBhbGwgZGlzdGluY3Qga2V5IHVwIGV2ZW50cyBmcm9tIHRoZSBpbnB1dCBhbmQgb25seSBmaXJlIGlmIGxvbmcgZW5vdWdoIGFuZCBkaXN0aW5jdFxuICAgIC8vIGxldCBpbnB1dCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgY29uc3QgcGFzdGVPYnNlcnZlciA9IGZyb21FdmVudCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQsICdwYXN0ZScpLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMjUwKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgKTtcbiAgICBwYXN0ZU9ic2VydmVyLnN1YnNjcmliZSgoZXZlbnQ6IENsaXBib2FyZEV2ZW50KSA9PiB0aGlzLm9uRGVib3VuY2VkS2V5dXAoZXZlbnQpLCAoZXJyKSA9PiB0aGlzLmhpZGVSZXN1bHRzKGVycikpO1xuICAgIGNvbnN0IGtleWJvYXJkT2JzZXJ2ZXIgPSBmcm9tRXZlbnQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LCAna2V5dXAnKS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDI1MCksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICk7XG4gICAga2V5Ym9hcmRPYnNlcnZlci5zdWJzY3JpYmUoKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB0aGlzLm9uRGVib3VuY2VkS2V5dXAoZXZlbnQpLCAoZXJyKSA9PiB0aGlzLmhpZGVSZXN1bHRzKGVycikpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkRlYm91bmNlZEtleXVwKGV2ZW50OiBFdmVudCkge1xuICAgIGlmIChbS2V5Q29kZXMuRVNDLCBLZXlDb2Rlcy5VUCwgS2V5Q29kZXMuRE9XTiwgS2V5Q29kZXMuRU5URVIsIEtleUNvZGVzLlRBQl0uaW5jbHVkZXMoZXZlbnRbJ2tleUNvZGUnXSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zaG93KChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZSk7XG4gIH1cblxuICAvKiogQkVHSU46IENvbnZlbmllbnQgUGFuZWwgTWV0aG9kcy4gKi9cbiAgcHVibGljIG9wZW5QYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRhaW5lci5vcGVuUGFuZWwoKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZVBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMuY29udGFpbmVyLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGFuZWxPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lciAmJiB0aGlzLmNvbnRhaW5lci5wYW5lbE9wZW47XG4gIH1cblxuICAvKiogRU5EOiBDb252ZW5pZW50IFBhbmVsIE1ldGhvZHMuICovXG5cbiAgcHJpdmF0ZSBzaG93KHRlcm0/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgIC8vIFNob3cgdGhlIHJlc3VsdHMgaW5zaWRlXG4gICAgdGhpcy5zaG93UmVzdWx0cyh0ZXJtKTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVQaWNrZXJJbnB1dCkge1xuICAgICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYW5lbE9wZW4gJiYgIXRoaXMuZGlzYWJsZVBpY2tlcklucHV0KSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRVNDIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlRBQikge1xuICAgICAgICB0aGlzLmhpZGVSZXN1bHRzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlVQKSB7XG4gICAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UucHJldkFjdGl2ZU1hdGNoKCk7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5ET1dOKSB7XG4gICAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UubmV4dEFjdGl2ZU1hdGNoKCk7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FTlRFUikge1xuICAgICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnNlbGVjdEFjdGl2ZU1hdGNoKCk7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICgoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuQkFDS1NQQUNFIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkRFTEVURSkgJiYgIUhlbHBlcnMuaXNCbGFuayh0aGlzLl92YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5jbGVhclZhbHVlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuREVMRVRFICYmIEhlbHBlcnMuaXNCbGFuayh0aGlzLl92YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5jbGVhclZhbHVlKHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyVmFsdWUod2lwZVRlcm0pIHtcbiAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgdGhpcy5jaGFuZ2VkLmVtaXQoeyB2YWx1ZTogdGhpcy5fdmFsdWUsIHJhd1ZhbHVlOiB7IGxhYmVsOiAnJywgdmFsdWU6IHRoaXMuX3ZhbHVlIH0gfSk7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcblxuICAgIGlmICh3aXBlVGVybSkge1xuICAgICAgdGhpcy50ZXJtID0gbnVsbDtcbiAgICAgIHRoaXMuaGlkZVJlc3VsdHMoKTtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgb25Gb2N1c1xuICAgKiBAZGVzY3JpcHRpb24gV2hlbiB0aGUgaW5wdXQncyBmb2N1cyBldmVudCBpcyBjYWxsZWQgdGhpcyBtZXRob2QgY2FsbHMgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRpc3BsYXlzIHRoZVxuICAgKiByZXN1bHRzLlxuICAgKi9cbiAgb25Gb2N1cyhldmVudCkge1xuICAgIGlmICghdGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNob3dSZXN1bHRzXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIG1ldGhvZCBjcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSByZXN1bHRzIChjYWxsZWQgcG9wdXApIGFuZCBhZGRzIGFsbCB0aGUgYmluZGluZ3MgdG8gdGhhdFxuICAgKiBpbnN0YW5jZS5cbiAgICovXG4gIHNob3dSZXN1bHRzKHRlcm0/OiBhbnkpIHtcbiAgICAvLyBVcGRhdGUgTWF0Y2hlc1xuICAgIGlmICh0aGlzLnBvcHVwKSB7XG4gICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgbGlzdCBvciBjcmVhdGUgdGhlIERPTSBlbGVtZW50XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS50ZXJtID0gdGhpcy50ZXJtO1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLmF1dG9TZWxlY3RGaXJzdE9wdGlvbiA9IHRoaXMuYXV0b1NlbGVjdEZpcnN0T3B0aW9uO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9wdXAgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZE5leHRUb0xvY2F0aW9uKHRoaXMucmVzdWx0c0NvbXBvbmVudCwgdGhpcy5yZXN1bHRzKTtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UucGFyZW50ID0gdGhpcztcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UuY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnRlcm0gPSB0aGlzLnRlcm07XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgIHRoaXMucG9wdXAuaW5zdGFuY2UuYXV0b1NlbGVjdEZpcnN0T3B0aW9uID0gdGhpcy5hdXRvU2VsZWN0Rmlyc3RPcHRpb247XG4gICAgICB0aGlzLnBvcHVwLmluc3RhbmNlLm92ZXJsYXkgPSB0aGlzLmNvbnRhaW5lci5vdmVybGF5UmVmO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGhpZGVSZXN1bHRzXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiAtIFRoaXMgbWV0aG9kIGRlbGV0ZXMgdGhlIHBpY2tlciByZXN1bHRzIGZyb20gdGhlIERPTS5cbiAgICovXG4gIGhpZGVSZXN1bHRzKGVycj86IGFueSkge1xuICAgIGlmICh0aGlzLnBvcHVwKSB7XG4gICAgICB0aGlzLnBvcHVwLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucG9wdXAgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIG9uT3ZlcmxheUNsb3NlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb3B1cCAmJiB0aGlzLnBvcHVwLmluc3RhbmNlICYmIHRoaXMucG9wdXAuaW5zdGFuY2UuY2xlYW5VcCkge1xuICAgICAgdGhpcy5wb3B1cC5pbnN0YW5jZS5jbGVhblVwKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gZ2V0IGFjY2Vzc29yXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICAvLyBzZXQgYWNjZXNzb3IgaW5jbHVkaW5nIGNhbGwgdGhlIG9uY2hhbmdlIGNhbGxiYWNrXG4gIHNldCB2YWx1ZShzZWxlY3RlZCkge1xuICAgIGlmICghc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMudGVybSA9ICcnO1xuICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkLnZhbHVlICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy50ZXJtID0gdGhpcy5jbGVhclZhbHVlT25TZWxlY3QgPyAnJyA6IHNlbGVjdGVkLmxhYmVsO1xuICAgICAgdGhpcy5fdmFsdWUgPSBzZWxlY3RlZC52YWx1ZTtcbiAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHsgdmFsdWU6IHNlbGVjdGVkLnZhbHVlLCByYXdWYWx1ZTogeyBsYWJlbDogdGhpcy50ZXJtLCB2YWx1ZTogc2VsZWN0ZWQudmFsdWUgfSB9KTtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoc2VsZWN0ZWQpO1xuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHNlbGVjdGVkLnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VkLmVtaXQoeyB2YWx1ZTogc2VsZWN0ZWQudmFsdWUsIHJhd1ZhbHVlOiB7IGxhYmVsOiB0aGlzLnRlcm0sIHZhbHVlOiB0aGlzLl92YWx1ZSB9IH0pO1xuICAgICAgdGhpcy5zZWxlY3QuZW1pdChzZWxlY3RlZCk7XG4gICAgfVxuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLy8gTWFrZXMgc3VyZSB0byBjbGVhciB0aGUgbW9kZWwgaWYgdGhlIHVzZXIgY2xlYXJzIHRoZSB0ZXh0IGJveFxuICBjaGVja1Rlcm0oZXZlbnQpIHtcbiAgICB0aGlzLnR5cGluZy5lbWl0KGV2ZW50KTtcbiAgICBpZiAoIWV2ZW50IHx8ICFldmVudC5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLy8gU2V0IHRvdWNoZWQgb24gYmx1clxuICBvblRvdWNoZWQoZXZlbnQ/OiBFdmVudCkge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gIH1cblxuICAvLyBGcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5jbGVhclZhbHVlT25TZWxlY3QpIHtcbiAgICAgIHRoaXMudGVybSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLnRlcm0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdmFsdWUubGFiZWwpIHtcbiAgICAgICAgdGhpcy50ZXJtID0gdmFsdWUubGFiZWw7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLmZpcnN0TmFtZSkge1xuICAgICAgICB0aGlzLnRlcm0gPSBgJHt2YWx1ZS5maXJzdE5hbWV9ICR7dmFsdWUubGFzdE5hbWV9YDtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdmFsdWUubmFtZSkge1xuICAgICAgICB0aGlzLnRlcm0gPSB2YWx1ZS5uYW1lO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5jb25maWcuZ2V0TGFiZWxzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmdldExhYmVscyh2YWx1ZSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy50ZXJtID0gcmVzdWx0Lmxlbmd0aCA/IHJlc3VsdFswXS5sYWJlbCB8fCAnJyA6IHJlc3VsdC5sYWJlbCB8fCAnJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50ZXJtID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdmFsdWUudGl0bGUpIHtcbiAgICAgICAgdGhpcy50ZXJtID0gdmFsdWUudGl0bGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRlcm0gPSB2YWx1ZSB8fCAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fZGlzYWJsZVBpY2tlcklucHV0ID0gZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==