/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { ChangeDetectorRef, Component, Input, Output, ElementRef, EventEmitter, Directive, HostListener, LOCALE_ID, Inject, } from '@angular/core';
// Vendor
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
// APP
import { OutsideClick } from '../../utils/outside-click/OutsideClick';
import { NovoLabelService } from '../../services/novo-label-service';
import { Helpers } from '../../utils/Helpers';
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
import { DateFormatService } from '../../services/date-format/DateFormat';
import { FieldInteractionApi } from './FieldInteractionApi';
import { NovoTemplateService } from '../../services/template/NovoTemplateService';
/**
 * @record
 */
export function IMaskOptions() { }
if (false) {
    /** @type {?} */
    IMaskOptions.prototype.mask;
    /** @type {?} */
    IMaskOptions.prototype.keepCharPositions;
    /** @type {?} */
    IMaskOptions.prototype.guide;
}
export class NovoAutoSize {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
    }
    /**
     * @param {?} textArea
     * @return {?}
     */
    onInput(textArea) {
        this.adjust();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        setTimeout(() => {
            this.adjust();
        });
    }
    /**
     * @return {?}
     */
    adjust() {
        /** @type {?} */
        const nativeElement = this.element.nativeElement;
        nativeElement.style.height = nativeElement.style.minHeight;
        nativeElement.style.height = `${nativeElement.scrollHeight}px`;
    }
}
NovoAutoSize.decorators = [
    { type: Directive, args: [{
                selector: 'textarea[autosize]',
            },] }
];
/** @nocollapse */
NovoAutoSize.ctorParameters = () => [
    { type: ElementRef }
];
NovoAutoSize.propDecorators = {
    onInput: [{ type: HostListener, args: ['input', ['$event.target'],] }]
};
if (false) {
    /** @type {?} */
    NovoAutoSize.prototype.element;
}
// undo all template context references!
export class NovoControlElement extends OutsideClick {
    /**
     * @param {?} element
     * @param {?} labels
     * @param {?} dateFormatService
     * @param {?} fieldInteractionApi
     * @param {?} templateService
     * @param {?} changeDetectorRef
     * @param {?=} locale
     */
    constructor(element, labels, dateFormatService, fieldInteractionApi, templateService, changeDetectorRef, locale = 'en-US') {
        super(element);
        this.labels = labels;
        this.dateFormatService = dateFormatService;
        this.fieldInteractionApi = fieldInteractionApi;
        this.templateService = templateService;
        this.changeDetectorRef = changeDetectorRef;
        this.locale = locale;
        this.condensed = false;
        this.autoFocus = false;
        this.change = new EventEmitter();
        this.edit = new EventEmitter();
        this.save = new EventEmitter();
        this.delete = new EventEmitter();
        this.upload = new EventEmitter();
        this.formattedValue = '';
        this.maxLengthMet = false;
        this.itemCount = 0;
        this._blurEmitter = new EventEmitter();
        this._focusEmitter = new EventEmitter();
        this._focused = false;
        this._enteredText = '';
        this._showCount = false;
        this.maxLengthMetErrorfields = [];
        this.templates = {};
        this.loading = false;
    }
    /**
     * @return {?}
     */
    get onBlur() {
        return this._blurEmitter.asObservable();
    }
    /**
     * @return {?}
     */
    get onFocus() {
        return this._focusEmitter.asObservable();
    }
    /**
     * @return {?}
     */
    get maxlengthMetField() {
        if (this.maxLengthMetErrorfields && this.maxLengthMetErrorfields.length) {
            return this.maxLengthMetErrorfields.find((field) => field === this.focusedField) || '';
        }
        else {
            return '';
        }
    }
    /**
     * @return {?}
     */
    get maxlengthErrorField() {
        if (this.errors && this.errors.maxlengthFields && this.errors.maxlengthFields.length) {
            return this.errors.maxlengthFields.find((field) => field === this.focusedField) || '';
        }
        else {
            return '';
        }
    }
    /**
     * @return {?}
     */
    get showFieldMessage() {
        return !this.errors && !this.maxLengthMet && Helpers.isBlank(this.control.description);
    }
    /**
     * @return {?}
     */
    get showMaxLengthMetMessage() {
        return ((this.isDirty && this.maxLengthMet && this.focused && (!this.errors || (this.errors && !this.errors.maxlength))) ||
            (this.isDirty &&
                this.maxlengthMetField &&
                this.focused &&
                (!this.errors || (this.errors && !this.errors.maxlengthFields.includes(this.maxlengthMetField)))));
    }
    /**
     * @return {?}
     */
    get showErrorState() {
        return ((this.isDirty && this.errors) ||
            (this.focused && this.errors && this.errors.maxlength && this.errors.maxlengthFields) ||
            (this.focused && this.errors && this.errors.maxlength && this.errors.maxlengthFields && this.maxlengthErrorField));
    }
    /**
     * @return {?}
     */
    get showCount() {
        /** @type {?} */
        let charCount = (this.form.controls[this.control.key].maxlength &&
            this.focused &&
            (this.form.controls[this.control.key].controlType === 'text-area' ||
                this.form.controls[this.control.key].controlType === 'textbox')) ||
            (this.form.controls[this.control.key].maxlength && this.form.controls[this.control.key].controlType === 'picker');
        return this._showCount || charCount;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set showCount(value) {
        this._showCount = value;
    }
    /**
     * @return {?}
     */
    get showMessages() {
        return (this.showCount ||
            !Helpers.isEmpty(this.form.controls[this.control.key].warning) ||
            !Helpers.isEmpty(this.form.controls[this.control.key].description));
    }
    /**
     * @return {?}
     */
    get decimalSeparator() {
        return new Intl.NumberFormat(this.locale).format(1.2)[1];
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const DO_NOT_FOCUS_ME = ['picker', 'time', 'date', 'date-time'];
        if (this.autoFocus && !DO_NOT_FOCUS_ME.includes(this.control.controlType)) {
            setTimeout(() => {
                /** @type {?} */
                let input = this.element.nativeElement.querySelector('input');
                if (input) {
                    input.focus();
                }
            });
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // Subscribe to control interactions
        if (this.control.interactions && !this.form.controls[this.control.key].restrictFieldInteractions) {
            for (let interaction of this.control.interactions) {
                switch (interaction.event) {
                    case 'blur':
                        this.valueChangeSubscription = this.onBlur.pipe(debounceTime(300)).subscribe(() => {
                            if (!this.form.controls[this.control.key].restrictFieldInteractions) {
                                this.executeInteraction(interaction);
                            }
                        });
                        break;
                    case 'focus':
                        this.valueChangeSubscription = this.onFocus.pipe(debounceTime(300)).subscribe(() => {
                            if (!this.form.controls[this.control.key].restrictFieldInteractions) {
                                this.executeInteraction(interaction);
                            }
                        });
                        break;
                    case 'change':
                        this.valueChangeSubscription = this.form.controls[this.control.key].valueChanges.pipe(debounceTime(300)).subscribe(() => {
                            if (!this.form.controls[this.control.key].restrictFieldInteractions) {
                                this.executeInteraction(interaction);
                            }
                        });
                        break;
                    case 'init':
                        interaction.invokeOnInit = true;
                        break;
                    default:
                        break;
                }
                if (interaction.invokeOnInit) {
                    if (!this.form.controls[this.control.key].restrictFieldInteractions) {
                        this.executeInteraction(interaction);
                    }
                }
            }
        }
        setTimeout(() => {
            this.templates = this.templateService.getAll();
            this.loading = false;
            this.changeDetectorRef.markForCheck();
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loading = true;
        // Make sure to initially format the time controls
        if (this.control && this.form.controls[this.control.key].value) {
            if (this.form.controls[this.control.key].controlType === 'textbox' ||
                this.form.controls[this.control.key].controlType === 'text-area') {
                this.itemCount = this.form.controls[this.control.key].value.length;
            }
        }
        if (this.control) {
            // Listen to clear events
            this.forceClearSubscription = this.control.forceClear.subscribe(() => {
                this.clearValue();
            });
            // For Asynchronous validations
            this.statusChangeSubscription = this.form.controls[this.control.key].statusChanges.subscribe((validity) => {
                this.form.controls[this.control.key] = this.templateContext.$implicit;
                if (validity !== 'PENDING' && this.form.updateValueAndValidity) {
                    this.form.updateValueAndValidity();
                }
            });
        }
        this.templateContext = {
            $implicit: this.form.controls[this.control.key],
            methods: {
                restrictKeys: this.restrictKeys.bind(this),
                emitChange: this.emitChange.bind(this),
                handleFocus: this.handleFocus.bind(this),
                handlePercentChange: this.handlePercentChange.bind(this),
                handleBlur: this.handleBlur.bind(this),
                handleTextAreaInput: this.handleTextAreaInput.bind(this),
                handleEdit: this.handleEdit.bind(this),
                handleSave: this.handleSave.bind(this),
                handleDelete: this.handleDelete.bind(this),
                handleUpload: this.handleUpload.bind(this),
                modelChange: this.modelChange.bind(this),
                modelChangeWithRaw: this.modelChangeWithRaw.bind(this),
                handleAddressChange: this.handleAddressChange.bind(this),
                handleTyping: this.handleTyping.bind(this),
                updateValidity: this.updateValidity.bind(this),
                toggleActive: this.toggleActive.bind(this),
                validateIntegerInput: this.validateIntegerInput.bind(this),
                validateNumberOnBlur: this.validateNumberOnBlur.bind(this),
            },
            form: this.form,
        };
        this.templateContext.$implicit.tooltipPosition = this.tooltipPosition;
        this.templateContext.$implicit.tooltip = this.tooltip;
        this.templateContext.$implicit.tooltipSize = this.tooltipSize;
        this.templateContext.$implicit.tooltipPreline = this.tooltipPreline;
        this.templateContext.$implicit.removeTooltipArrow = this.removeTooltipArrow;
        this.templateContext.$implicit.startupFocus = this.form.controls[this.control.key].startupFocus;
        this.templateContext.$implicit.fileBrowserImageUploadUrl = this.form.controls[this.control.key].fileBrowserImageUploadUrl;
        this.templateContext.$implicit.minimal = this.form.controls[this.control.key].minimal;
        this.templateContext.$implicit.currencyFormat = this.form.controls[this.control.key].currencyFormat;
        this.templateContext.$implicit.percentValue = this.form.controls[this.control.key].percentValue;
        this.templateContext.$implicit.config = this.form.controls[this.control.key].config;
        if (this.form.controls[this.control.key] && this.form.controls[this.control.key].subType === 'percentage') {
            if (!Helpers.isEmpty(this.form.controls[this.control.key].value)) {
                this.templateContext.$implicit.percentValue = Number((this.form.controls[this.control.key].value * 100).toFixed(6).replace(/\.?0*$/, ''));
            }
            this.percentChangeSubscription = this.form.controls[this.control.key].displayValueChanges.subscribe((value) => {
                if (!Helpers.isEmpty(value)) {
                    this.templateContext.$implicit.percentValue = Number((value * 100).toFixed(6).replace(/\.?0*$/, ''));
                }
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // Unsubscribe from control interactions
        if (this.valueChangeSubscription) {
            this.valueChangeSubscription.unsubscribe();
        }
        // if (this.dateChangeSubscription) {
        //     this.dateChangeSubscription.unsubscribe();
        // }
        if (this.forceClearSubscription) {
            // Un-listen for clear events
            this.forceClearSubscription.unsubscribe();
        }
        if (this.percentChangeSubscription) {
            // Un-listen for clear events
            this.percentChangeSubscription.unsubscribe();
        }
        if (this.dateChangeSubscription) {
            this.dateChangeSubscription.unsubscribe();
        }
        if (this.statusChangeSubscription) {
            this.statusChangeSubscription.unsubscribe();
        }
        super.ngOnDestroy();
    }
    /**
     * @return {?}
     */
    get errors() {
        return this.form.controls[this.control.key].errors;
    }
    /**
     * @return {?}
     */
    get isValid() {
        return this.form.controls[this.control.key].valid;
    }
    /**
     * @return {?}
     */
    get isDirty() {
        return this.form.controls[this.control.key].dirty || this.control.dirty;
    }
    /**
     * @return {?}
     */
    get hasValue() {
        return !Helpers.isEmpty(this.form.value[this.control.key]);
    }
    /**
     * @return {?}
     */
    get focused() {
        return this._focused;
    }
    /**
     * @return {?}
     */
    get tooltip() {
        return this.form.controls[this.control.key].tooltip;
    }
    /**
     * @return {?}
     */
    get tooltipPosition() {
        if (Helpers.isBlank(this.form.controls[this.control.key].tooltipPosition)) {
            return 'right';
        }
        return this.form.controls[this.control.key].tooltipPosition;
    }
    /**
     * @return {?}
     */
    get tooltipSize() {
        if (Helpers.isBlank(this.form.controls[this.control.key].tooltipSize)) {
            return '';
        }
        return this.form.controls[this.control.key].tooltipSize;
    }
    /**
     * @return {?}
     */
    get tooltipPreline() {
        if (Helpers.isBlank(this.form.controls[this.control.key].tooltipPreline)) {
            return false;
        }
        return this.form.controls[this.control.key].tooltipPreline;
    }
    /**
     * @return {?}
     */
    get removeTooltipArrow() {
        if (Helpers.isBlank(this.form.controls[this.control.key].removeTooltipArrow)) {
            return false;
        }
        return this.form.controls[this.control.key].removeTooltipArrow;
    }
    /**
     * @return {?}
     */
    get alwaysActive() {
        // Controls that have the label active if there is any user entered text in the field
        if (this.form.controls[this.control.key].controlType === 'picker' && this._enteredText.length) {
            return true;
        }
        // Controls that always have the label active
        return ([
            'tiles',
            'checklist',
            'checkbox',
            'date',
            'time',
            'date-time',
            'address',
            'file',
            'editor',
            'ace-editor',
            'radio',
            'text-area',
            'quick-note',
        ].indexOf(this.form.controls[this.control.key].controlType) !== -1);
    }
    /**
     * @return {?}
     */
    get requiresExtraSpacing() {
        // Chips
        if (this.form.controls[this.control.key].controlType === 'picker' && this.form.controls[this.control.key].multiple && this.hasValue) {
            return true;
        }
        return false;
    }
    /**
     * @param {?} interaction
     * @return {?}
     */
    executeInteraction(interaction) {
        if (interaction.script && Helpers.isFunction(interaction.script)) {
            setTimeout(() => {
                this.fieldInteractionApi.form = this.form;
                this.fieldInteractionApi.currentKey = this.control.key;
                try {
                    interaction.script(this.fieldInteractionApi, this.control.key);
                }
                catch (err) {
                    console.info('Field Interaction Error!', this.control.key); // tslint:disable-line
                    console.error(err); // tslint:disable-line
                }
            });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleTyping(event) {
        this._focused = event && event.length;
        this._enteredText = event;
    }
    /**
     * @param {?} event
     * @param {?=} field
     * @return {?}
     */
    handleFocus(event, field) {
        this._focused = true;
        this.focusedField = field;
        if (!Helpers.isBlank(this.characterCountField) && this.characterCountField === field) {
            this.showCount = true;
        }
        else if (this.form.controls[this.control.key].controlType === 'address' &&
            field &&
            !Helpers.isEmpty(this.form.value[this.control.key]) &&
            !Helpers.isBlank(this.form.value[this.control.key][field])) {
            this.handleAddressChange({ value: this.form.value[this.control.key][field], field });
        }
        this._focusEmitter.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleBlur(event) {
        this._focused = false;
        this.focusedField = '';
        this.showCount = false;
        this._blurEmitter.emit(event);
    }
    /**
     * @return {?}
     */
    clearValue() {
        this.form.controls[this.control.key].setValue(null);
        this.formattedValue = null;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleTextAreaInput(event) {
        this.emitChange(event);
        this.restrictKeys(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    checkMaxLength(event) {
        if (this.control && this.form.controls[this.control.key].maxlength) {
            this.itemCount = event.target.value.length;
            this.maxLengthMet = event.target.value.length >= this.form.controls[this.control.key].maxlength;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    modelChangeWithRaw(event) {
        if (Helpers.isEmpty(event.value)) {
            this._focused = false;
            this._enteredText = '';
        }
        if (this.form.controls[this.control.key].controlType === 'picker' && this.form.controls[this.control.key].maxlength) {
            this.itemCount = event.value ? event.value.length : 0;
            this.maxLengthMet = this.itemCount >= this.form.controls[this.control.key].maxlength ? true : false;
        }
        this.form.controls[this.control.key].rawValue = event.rawValue;
        this.change.emit(event.value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    modelChange(value) {
        if (Helpers.isEmpty(value)) {
            this._focused = false;
            this._enteredText = '';
        }
        this.change.emit(value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    validateNumberOnBlur(event) {
        this._focused = false;
        this.focusedField = '';
        this.showCount = false;
        if (this.form.controls[this.control.key].subType === 'number') {
            this.validateIntegerInput();
        }
        this._blurEmitter.emit(event);
    }
    /**
     * @return {?}
     */
    validateIntegerInput() {
        /** @type {?} */
        const NUMBERS_ONLY = /^[\d\-]\d*$/;
        if (this.form.controls[this.control.key].value && !NUMBERS_ONLY.test(this.form.controls[this.control.key].value)) {
            this.form.controls[this.control.key].markAsInvalid(`${this.labels.invalidIntegerInput} ${this.form.controls[this.control.key].label.toUpperCase()}`);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    restrictKeys(event) {
        /** @type {?} */
        const NUMBERS_ONLY = /[0-9\-]/;
        /** @type {?} */
        const NUMBERS_WITH_DECIMAL_DOT = /[0-9\.\-]/;
        /** @type {?} */
        const NUMBERS_WITH_DECIMAL_DOT_AND_COMMA = /[0-9\.\,\-]/;
        /** @type {?} */
        const UTILITY_KEYS = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
        /** @type {?} */
        let key = event.key;
        // Numbers or numbers and decimal characters only
        if (this.form.controls[this.control.key].subType === 'number' && !(NUMBERS_ONLY.test(key) || UTILITY_KEYS.includes(key))) {
            event.preventDefault();
        }
        else if (['currency', 'float', 'percentage'].includes(this.form.controls[this.control.key].subType) &&
            !((this.decimalSeparator === '.' && NUMBERS_WITH_DECIMAL_DOT.test(key)) ||
                (this.decimalSeparator === ',' && NUMBERS_WITH_DECIMAL_DOT_AND_COMMA.test(key)) ||
                UTILITY_KEYS.includes(key))) {
            event.preventDefault();
        }
        // Max Length
        if (this.form.controls[this.control.key].maxlength && event.target.value.length >= this.form.controls[this.control.key].maxlength) {
            event.preventDefault();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handlePercentChange(event) {
        /** @type {?} */
        let value = event.target['value'];
        /** @type {?} */
        let percent = Helpers.isEmpty(value) ? null : Number((value / 100).toFixed(6).replace(/\.?0*$/, ''));
        if (!Helpers.isEmpty(percent)) {
            this.change.emit(percent);
            this.form.controls[this.control.key].setValue(percent);
        }
        else {
            this.change.emit(null);
            this.form.controls[this.control.key].setValue(null);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleTabForPickers(event) {
        if (this.active && event && event.keyCode) {
            if (event.keyCode === KeyCodes.ESC || event.keyCode === KeyCodes.TAB) {
                this.toggleActive(event, false);
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    emitChange(value) {
        this.change.emit(value);
        this.checkMaxLength(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    handleEdit(value) {
        this.edit.emit(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    handleSave(value) {
        this.save.emit(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    handleDelete(value) {
        this.delete.emit(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    handleUpload(value) {
        this.upload.emit(value);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    handleAddressChange(data) {
        if (data &&
            !Helpers.isBlank(data.value) &&
            data.field &&
            this.control.config[data.field] &&
            !Helpers.isEmpty(this.control.config[data.field].maxlength)) {
            this.itemCount = data.value.length;
            this.characterCountField = data.field;
            this.maxLength = this.control.config[data.field].maxlength;
            this.showCount = true;
            if (this.maxLength === this.itemCount) {
                this.maxLengthMetErrorfields.push(data.field);
            }
            else {
                this.maxLengthMetErrorfields = this.maxLengthMetErrorfields.filter((field) => field !== data.field);
            }
        }
    }
    /**
     * @param {?} shouldEventBeEmitted
     * @return {?}
     */
    updateValidity(shouldEventBeEmitted) {
        /** @type {?} */
        let emitEvent = shouldEventBeEmitted ? true : false;
        this.form.controls[this.control.key].updateValueAndValidity({ emitEvent });
    }
}
NovoControlElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-control',
                template: `
    <div
      class="novo-control-container"
      [hidden]="
        form.controls[control.key].hidden ||
        form.controls[control.key].type === 'hidden' ||
        form.controls[control.key].controlType === 'hidden'
      "
    >
      <!--Encrypted Field-->
      <span [tooltip]="labels.encryptedFieldTooltip" [tooltipPosition]="'right'"
        ><i [hidden]="!form.controls[control.key].encrypted" class="bhi-lock"></i
      ></span>
      <!--Label (for horizontal)-->
      <label
        [attr.for]="control.key"
        *ngIf="form.layout !== 'vertical' && form.controls[control.key].label && !condensed"
        [ngClass]="{ encrypted: form.controls[control.key].encrypted }"
      >
        {{ form.controls[control.key].label }}
      </label>
      <div class="novo-control-outer-container">
        <!--Label (for vertical)-->
        <label
          *ngIf="form.layout === 'vertical' && form.controls[control.key].label && !condensed"
          class="novo-control-label"
          [attr.for]="control.key"
          [class.novo-control-empty]="!hasValue"
          [class.novo-control-focused]="focused"
          [class.novo-control-filled]="hasValue"
          [class.novo-control-always-active]="alwaysActive || form.controls[control.key].placeholder"
          [class.novo-control-extra-spacing]="requiresExtraSpacing"
        >
          {{ form.controls[control.key].label }}
        </label>
        <div
          class="novo-control-inner-container"
          [class.required]="form.controls[control.key].required && !form.controls[control.key].readOnly"
        >
          <div class="novo-control-inner-input-container" [class.novo-control-filled]="hasValue" [class.novo-control-empty]="!hasValue">
            <!--Required Indicator-->
            <i
              [hidden]="!form.controls[control.key].required || form.controls[control.key].readOnly"
              class="required-indicator {{ form.controls[control.key].controlType }}"
              [ngClass]="{ 'bhi-circle': !isValid, 'bhi-check': isValid }"
              *ngIf="!condensed || form.controls[control.key].required"
            >
            </i>
            <!--Form Controls-->
            <div
              class="novo-control-input {{ form.controls[control.key].controlType }}"
              [attr.data-automation-id]="control.key"
              [class.control-disabled]="form.controls[control.key].disabled"
            >
              <!--TODO prefix/suffix on the control-->
              <ng-container *ngIf="templates">
                <ng-container
                  *ngTemplateOutlet="templates[form.controls[control.key].controlType]; context: templateContext"
                ></ng-container>
              </ng-container>
              <ng-container *ngIf="!templates || loading">
                <div class="novo-control-input-container novo-control-input-with-label"><input type="text" /></div>
              </ng-container>
            </div>
          </div>
          <!--Error Message-->
          <div
            class="field-message {{ form.controls[control.key].controlType }}"
            *ngIf="!condensed"
            [class.has-tip]="form.controls[control.key].tipWell"
            [ngClass]="showErrorState || showMaxLengthMetMessage ? 'error-shown' : 'error-hidden'"
          >
            <div class="messages" [ngClass]="showMessages ? 'count-shown messages-shown' : 'count-hidden messages-hidden'">
              <span class="error-text" *ngIf="showFieldMessage"></span>
              <span class="error-text" *ngIf="isDirty && errors?.required && form.controls[control.key].controlType !== 'address'"
                >{{ form.controls[control.key].label | uppercase }} {{ labels.isRequired }}</span
              >
              <span class="error-text" *ngIf="isDirty && errors?.minlength"
                >{{ form.controls[control.key].label | uppercase }} {{ labels.minLength }} {{ form.controls[control.key].minlength }}</span
              >
              <span
                class="error-text"
                *ngIf="isDirty && maxLengthMet && focused && !errors?.maxlength && form.controls[control.key].controlType !== 'picker'"
                >{{ labels.maxlengthMet(form.controls[control.key].maxlength) }}</span
              >
              <span class="error-text" *ngIf="errors?.maxlength && focused && !errors?.maxlengthFields">{{
                labels.invalidMaxlength(form.controls[control.key].maxlength)
              }}</span>
              <span class="error-text" *ngIf="maxLengthMet && form.controls[control.key].controlType === 'picker'">{{
                labels.maxRecordsReached
              }}</span>
              <span class="error-text" *ngIf="isDirty && errors?.invalidEmail"
                >{{ form.controls[control.key].label | uppercase }} {{ labels.invalidEmail }}</span
              >
              <span class="error-text" *ngIf="isDirty && (errors?.integerTooLarge || errors?.doubleTooLarge)"
                >{{ form.controls[control.key].label | uppercase }} {{ labels.isTooLarge }}</span
              >
              <span *ngIf="isDirty && errors?.minYear">{{ form.controls[control.key].label | uppercase }} {{ labels.notValidYear }}</span>
              <span class="error-text" *ngIf="isDirty && errors?.custom">{{ errors.custom }}</span>
              <span class="error-text" *ngIf="errors?.maxlength && errors?.maxlengthFields && maxlengthErrorField && focused">
                {{
                  labels.invalidMaxlengthWithField(
                    control.config[maxlengthErrorField]?.label,
                    control.config[maxlengthErrorField]?.maxlength
                  )
                }}
              </span>
              <span
                class="error-text"
                *ngIf="isDirty && maxlengthMetField && focused && !errors?.maxlengthFields?.includes(maxlengthMetField)"
              >
                {{ labels.maxlengthMetWithField(control.config[maxlengthMetField]?.label, control.config[maxlengthMetField]?.maxlength) }}
              </span>
              <span *ngIf="isDirty && errors?.invalidAddress">
                <span class="error-text" *ngFor="let invalidAddressField of errors?.invalidAddressFields"
                  >{{ invalidAddressField | uppercase }} {{ labels.isRequired }}
                </span>
              </span>
              <!--Field Hint-->
              <span class="description" *ngIf="form.controls[control.key].description"> {{ form.controls[control.key].description }} </span>
              <span class="warning-text" *ngIf="form.controls[control.key].warning">{{ form.controls[control.key].warning }}</span>
            </div>
            <span
              class="character-count"
              [class.error]="
                (errors?.maxlength && !errors?.maxlengthFields) ||
                (errors?.maxlength && errors?.maxlengthFields && errors.maxlengthFields.includes(focusedField))
              "
              *ngIf="showCount && form.controls[control.key].controlType !== 'picker'"
              >{{ itemCount }}/{{ maxLength || form.controls[control.key].maxlength }}</span
            >
            <span
              class="record-count"
              [class.zero-count]="itemCount === 0"
              [class.row-picker]="form.controls[this.control.key].config.columns"
              *ngIf="showCount && form.controls[control.key].controlType === 'picker'"
              >{{ itemCount }}/{{ maxLength || form.controls[control.key].maxlength }}</span
            >
          </div>
          <!--Tip Wel-->
          <novo-tip-well
            *ngIf="form.controls[control.key].tipWell"
            [name]="control.key"
            [tip]="form.controls[control.key]?.tipWell?.tip"
            [icon]="form.controls[control.key]?.tipWell?.icon"
            [button]="form.controls[control.key]?.tipWell?.button"
          ></novo-tip-well>
        </div>
        <i *ngIf="form.controls[control.key].fieldInteractionloading" class="loading">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
            x="0px"
            y="0px"
            width="18.2px"
            height="18.5px"
            viewBox="0 0 18.2 18.5"
            style="enable-background:new 0 0 18.2 18.5;"
            xml:space="preserve"
          >
            <style type="text/css">
              .spinner {
                fill: #ffffff;
              }
            </style>
            <path
              class="spinner"
              d="M9.2,18.5C4.1,18.5,0,14.4,0,9.2S4.1,0,9.2,0c0.9,0,1.9,0.1,2.7,0.4c0.8,0.2,1.2,1.1,1,1.9
                            c-0.2,0.8-1.1,1.2-1.9,1C10.5,3.1,9.9,3,9.2,3C5.8,3,3,5.8,3,9.2s2.8,6.2,6.2,6.2c2.8,0,5.3-1.9,6-4.7c0.2-0.8,1-1.3,1.8-1.1
                            c0.8,0.2,1.3,1,1.1,1.8C17.1,15.7,13.4,18.5,9.2,18.5z"
            />
          </svg>
        </i>
      </div>
    </div>
  `,
                host: {
                    '[class]': 'form.controls[control.key].controlType',
                    '[attr.data-control-type]': 'form.controls[control.key].controlType',
                    '[class.disabled]': 'form.controls[control.key].readOnly',
                    '[class.hidden]': 'form.controls[control.key].hidden',
                    '[attr.data-control-key]': 'control.key',
                }
            }] }
];
/** @nocollapse */
NovoControlElement.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoLabelService },
    { type: DateFormatService },
    { type: FieldInteractionApi },
    { type: NovoTemplateService },
    { type: ChangeDetectorRef },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
NovoControlElement.propDecorators = {
    control: [{ type: Input }],
    form: [{ type: Input }],
    condensed: [{ type: Input }],
    autoFocus: [{ type: Input }],
    change: [{ type: Output }],
    edit: [{ type: Output }],
    save: [{ type: Output }],
    delete: [{ type: Output }],
    upload: [{ type: Output }],
    onBlur: [{ type: Output, args: ['blur',] }],
    onFocus: [{ type: Output, args: ['focus',] }]
};
if (false) {
    /** @type {?} */
    NovoControlElement.prototype.control;
    /** @type {?} */
    NovoControlElement.prototype.form;
    /** @type {?} */
    NovoControlElement.prototype.condensed;
    /** @type {?} */
    NovoControlElement.prototype.autoFocus;
    /** @type {?} */
    NovoControlElement.prototype.change;
    /** @type {?} */
    NovoControlElement.prototype.edit;
    /** @type {?} */
    NovoControlElement.prototype.save;
    /** @type {?} */
    NovoControlElement.prototype.delete;
    /** @type {?} */
    NovoControlElement.prototype.upload;
    /** @type {?} */
    NovoControlElement.prototype.maxLength;
    /** @type {?} */
    NovoControlElement.prototype.focusedField;
    /** @type {?} */
    NovoControlElement.prototype.formattedValue;
    /** @type {?} */
    NovoControlElement.prototype.percentValue;
    /** @type {?} */
    NovoControlElement.prototype.maxLengthMet;
    /** @type {?} */
    NovoControlElement.prototype.itemCount;
    /** @type {?} */
    NovoControlElement.prototype.maskOptions;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype._blurEmitter;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype._focusEmitter;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype._focused;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype._enteredText;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.forceClearSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.percentChangeSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.valueChangeSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.dateChangeSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype._showCount;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.characterCountField;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.maxLengthMetErrorfields;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.statusChangeSubscription;
    /** @type {?} */
    NovoControlElement.prototype.templates;
    /** @type {?} */
    NovoControlElement.prototype.templateContext;
    /** @type {?} */
    NovoControlElement.prototype.loading;
    /** @type {?} */
    NovoControlElement.prototype.labels;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.dateFormatService;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.fieldInteractionApi;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.templateService;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0NvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixZQUFZLEVBR1osU0FBUyxFQUNULFlBQVksRUFHWixTQUFTLEVBQ1QsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDOztBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7QUFFbEYsa0NBSUM7OztJQUhDLDRCQUFVOztJQUNWLHlDQUEyQjs7SUFDM0IsNkJBQWU7O0FBTWpCLE1BQU0sT0FBTyxZQUFZOzs7O0lBTXZCLFlBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7SUFBRyxDQUFDOzs7OztJQUoxQyxPQUFPLENBQUMsUUFBNkI7UUFDbkMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFJRCxrQkFBa0I7UUFDaEIsVUFBVSxDQUFDLEdBQUcs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Ozs7OztJQUNwQyxxREFBK0M7Ozs7O0lBQy9DLHNEQUFzQzs7SUFFdEMsdUNBQW9COztJQUNwQiw2Q0FBcUI7O0lBQ3JCLHFDQUF5Qjs7SUFJdkIsb0NBQStCOzs7OztJQUMvQiwrQ0FBNEM7Ozs7O0lBQzVDLGlEQUFnRDs7Ozs7SUFDaEQsNkNBQTRDOzs7OztJQUM1QywrQ0FBNEM7Ozs7O0lBQzVDLG9DQUFtRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgRGlyZWN0aXZlLFxuICBIb3N0TGlzdGVuZXIsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIExPQ0FMRV9JRCxcbiAgSW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLy8gQVBQXG5pbXBvcnQgeyBPdXRzaWRlQ2xpY2sgfSBmcm9tICcuLi8uLi91dGlscy9vdXRzaWRlLWNsaWNrL091dHNpZGVDbGljayc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcbmltcG9ydCB7IERhdGVGb3JtYXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0ZS1mb3JtYXQvRGF0ZUZvcm1hdCc7XG5pbXBvcnQgeyBGaWVsZEludGVyYWN0aW9uQXBpIH0gZnJvbSAnLi9GaWVsZEludGVyYWN0aW9uQXBpJztcbmltcG9ydCB7IE5vdm9UZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJTWFza09wdGlvbnMge1xuICBtYXNrOiBhbnk7XG4gIGtlZXBDaGFyUG9zaXRpb25zOiBib29sZWFuO1xuICBndWlkZTogYm9vbGVhbjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndGV4dGFyZWFbYXV0b3NpemVdJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0F1dG9TaXplIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQudGFyZ2V0J10pXG4gIG9uSW5wdXQodGV4dEFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmFkanVzdCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hZGp1c3QoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkanVzdCgpOiB2b2lkIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgbmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBuYXRpdmVFbGVtZW50LnN0eWxlLm1pbkhlaWdodDtcbiAgICBuYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke25hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgfVxufVxuLy8gdW5kbyBhbGwgdGVtcGxhdGUgY29udGV4dCByZWZlcmVuY2VzIVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jb250cm9sJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cIm5vdm8tY29udHJvbC1jb250YWluZXJcIlxuICAgICAgW2hpZGRlbl09XCJcbiAgICAgICAgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uaGlkZGVuIHx8XG4gICAgICAgIGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnR5cGUgPT09ICdoaWRkZW4nIHx8XG4gICAgICAgIGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAnaGlkZGVuJ1xuICAgICAgXCJcbiAgICA+XG4gICAgICA8IS0tRW5jcnlwdGVkIEZpZWxkLS0+XG4gICAgICA8c3BhbiBbdG9vbHRpcF09XCJsYWJlbHMuZW5jcnlwdGVkRmllbGRUb29sdGlwXCIgW3Rvb2x0aXBQb3NpdGlvbl09XCIncmlnaHQnXCJcbiAgICAgICAgPjxpIFtoaWRkZW5dPVwiIWZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmVuY3J5cHRlZFwiIGNsYXNzPVwiYmhpLWxvY2tcIj48L2lcbiAgICAgID48L3NwYW4+XG4gICAgICA8IS0tTGFiZWwgKGZvciBob3Jpem9udGFsKS0tPlxuICAgICAgPGxhYmVsXG4gICAgICAgIFthdHRyLmZvcl09XCJjb250cm9sLmtleVwiXG4gICAgICAgICpuZ0lmPVwiZm9ybS5sYXlvdXQgIT09ICd2ZXJ0aWNhbCcgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgJiYgIWNvbmRlbnNlZFwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsgZW5jcnlwdGVkOiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5lbmNyeXB0ZWQgfVwiXG4gICAgICA+XG4gICAgICAgIHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIH19XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1vdXRlci1jb250YWluZXJcIj5cbiAgICAgICAgPCEtLUxhYmVsIChmb3IgdmVydGljYWwpLS0+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgICpuZ0lmPVwiZm9ybS5sYXlvdXQgPT09ICd2ZXJ0aWNhbCcgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgJiYgIWNvbmRlbnNlZFwiXG4gICAgICAgICAgY2xhc3M9XCJub3ZvLWNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgIFthdHRyLmZvcl09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW2NsYXNzLm5vdm8tY29udHJvbC1lbXB0eV09XCIhaGFzVmFsdWVcIlxuICAgICAgICAgIFtjbGFzcy5ub3ZvLWNvbnRyb2wtZm9jdXNlZF09XCJmb2N1c2VkXCJcbiAgICAgICAgICBbY2xhc3Mubm92by1jb250cm9sLWZpbGxlZF09XCJoYXNWYWx1ZVwiXG4gICAgICAgICAgW2NsYXNzLm5vdm8tY29udHJvbC1hbHdheXMtYWN0aXZlXT1cImFsd2F5c0FjdGl2ZSB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgW2NsYXNzLm5vdm8tY29udHJvbC1leHRyYS1zcGFjaW5nXT1cInJlcXVpcmVzRXh0cmFTcGFjaW5nXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIH19XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cIm5vdm8tY29udHJvbC1pbm5lci1jb250YWluZXJcIlxuICAgICAgICAgIFtjbGFzcy5yZXF1aXJlZF09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5yZXF1aXJlZCAmJiAhZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ucmVhZE9ubHlcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1pbm5lci1pbnB1dC1jb250YWluZXJcIiBbY2xhc3Mubm92by1jb250cm9sLWZpbGxlZF09XCJoYXNWYWx1ZVwiIFtjbGFzcy5ub3ZvLWNvbnRyb2wtZW1wdHldPVwiIWhhc1ZhbHVlXCI+XG4gICAgICAgICAgICA8IS0tUmVxdWlyZWQgSW5kaWNhdG9yLS0+XG4gICAgICAgICAgICA8aVxuICAgICAgICAgICAgICBbaGlkZGVuXT1cIiFmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5yZXF1aXJlZCB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5yZWFkT25seVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwicmVxdWlyZWQtaW5kaWNhdG9yIHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlIH19XCJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAnYmhpLWNpcmNsZSc6ICFpc1ZhbGlkLCAnYmhpLWNoZWNrJzogaXNWYWxpZCB9XCJcbiAgICAgICAgICAgICAgKm5nSWY9XCIhY29uZGVuc2VkIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnJlcXVpcmVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIDwhLS1Gb3JtIENvbnRyb2xzLS0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwibm92by1jb250cm9sLWlucHV0IHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlIH19XCJcbiAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICAgICAgW2NsYXNzLmNvbnRyb2wtZGlzYWJsZWRdPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uZGlzYWJsZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8IS0tVE9ETyBwcmVmaXgvc3VmZml4IG9uIHRoZSBjb250cm9sLS0+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0ZW1wbGF0ZXNcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlc1tmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZV07IGNvbnRleHQ6IHRlbXBsYXRlQ29udGV4dFwiXG4gICAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0ZW1wbGF0ZXMgfHwgbG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtaW5wdXQtY29udGFpbmVyIG5vdm8tY29udHJvbC1pbnB1dC13aXRoLWxhYmVsXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tRXJyb3IgTWVzc2FnZS0tPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiZmllbGQtbWVzc2FnZSB7eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSB9fVwiXG4gICAgICAgICAgICAqbmdJZj1cIiFjb25kZW5zZWRcIlxuICAgICAgICAgICAgW2NsYXNzLmhhcy10aXBdPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0udGlwV2VsbFwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJzaG93RXJyb3JTdGF0ZSB8fCBzaG93TWF4TGVuZ3RoTWV0TWVzc2FnZSA/ICdlcnJvci1zaG93bicgOiAnZXJyb3ItaGlkZGVuJ1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2VzXCIgW25nQ2xhc3NdPVwic2hvd01lc3NhZ2VzID8gJ2NvdW50LXNob3duIG1lc3NhZ2VzLXNob3duJyA6ICdjb3VudC1oaWRkZW4gbWVzc2FnZXMtaGlkZGVuJ1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cInNob3dGaWVsZE1lc3NhZ2VcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiaXNEaXJ0eSAmJiBlcnJvcnM/LnJlcXVpcmVkICYmIGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlICE9PSAnYWRkcmVzcydcIlxuICAgICAgICAgICAgICAgID57eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCB8IHVwcGVyY2FzZSB9fSB7eyBsYWJlbHMuaXNSZXF1aXJlZCB9fTwvc3BhblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiaXNEaXJ0eSAmJiBlcnJvcnM/Lm1pbmxlbmd0aFwiXG4gICAgICAgICAgICAgICAgPnt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIHwgdXBwZXJjYXNlIH19IHt7IGxhYmVscy5taW5MZW5ndGggfX0ge3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubWlubGVuZ3RoIH19PC9zcGFuXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzcz1cImVycm9yLXRleHRcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiaXNEaXJ0eSAmJiBtYXhMZW5ndGhNZXQgJiYgZm9jdXNlZCAmJiAhZXJyb3JzPy5tYXhsZW5ndGggJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgIT09ICdwaWNrZXInXCJcbiAgICAgICAgICAgICAgICA+e3sgbGFiZWxzLm1heGxlbmd0aE1ldChmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5tYXhsZW5ndGgpIH19PC9zcGFuXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJlcnJvcnM/Lm1heGxlbmd0aCAmJiBmb2N1c2VkICYmICFlcnJvcnM/Lm1heGxlbmd0aEZpZWxkc1wiPnt7XG4gICAgICAgICAgICAgICAgbGFiZWxzLmludmFsaWRNYXhsZW5ndGgoZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubWF4bGVuZ3RoKVxuICAgICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJtYXhMZW5ndGhNZXQgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICdwaWNrZXInXCI+e3tcbiAgICAgICAgICAgICAgICBsYWJlbHMubWF4UmVjb3Jkc1JlYWNoZWRcbiAgICAgICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiaXNEaXJ0eSAmJiBlcnJvcnM/LmludmFsaWRFbWFpbFwiXG4gICAgICAgICAgICAgICAgPnt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIHwgdXBwZXJjYXNlIH19IHt7IGxhYmVscy5pbnZhbGlkRW1haWwgfX08L3NwYW5cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImlzRGlydHkgJiYgKGVycm9ycz8uaW50ZWdlclRvb0xhcmdlIHx8IGVycm9ycz8uZG91YmxlVG9vTGFyZ2UpXCJcbiAgICAgICAgICAgICAgICA+e3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgfCB1cHBlcmNhc2UgfX0ge3sgbGFiZWxzLmlzVG9vTGFyZ2UgfX08L3NwYW5cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzRGlydHkgJiYgZXJyb3JzPy5taW5ZZWFyXCI+e3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgfCB1cHBlcmNhc2UgfX0ge3sgbGFiZWxzLm5vdFZhbGlkWWVhciB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIGVycm9ycz8uY3VzdG9tXCI+e3sgZXJyb3JzLmN1c3RvbSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJlcnJvcnM/Lm1heGxlbmd0aCAmJiBlcnJvcnM/Lm1heGxlbmd0aEZpZWxkcyAmJiBtYXhsZW5ndGhFcnJvckZpZWxkICYmIGZvY3VzZWRcIj5cbiAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgbGFiZWxzLmludmFsaWRNYXhsZW5ndGhXaXRoRmllbGQoXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnW21heGxlbmd0aEVycm9yRmllbGRdPy5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbC5jb25maWdbbWF4bGVuZ3RoRXJyb3JGaWVsZF0/Lm1heGxlbmd0aFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzcz1cImVycm9yLXRleHRcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiaXNEaXJ0eSAmJiBtYXhsZW5ndGhNZXRGaWVsZCAmJiBmb2N1c2VkICYmICFlcnJvcnM/Lm1heGxlbmd0aEZpZWxkcz8uaW5jbHVkZXMobWF4bGVuZ3RoTWV0RmllbGQpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IGxhYmVscy5tYXhsZW5ndGhNZXRXaXRoRmllbGQoY29udHJvbC5jb25maWdbbWF4bGVuZ3RoTWV0RmllbGRdPy5sYWJlbCwgY29udHJvbC5jb25maWdbbWF4bGVuZ3RoTWV0RmllbGRdPy5tYXhsZW5ndGgpIH19XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJpc0RpcnR5ICYmIGVycm9ycz8uaW52YWxpZEFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdGb3I9XCJsZXQgaW52YWxpZEFkZHJlc3NGaWVsZCBvZiBlcnJvcnM/LmludmFsaWRBZGRyZXNzRmllbGRzXCJcbiAgICAgICAgICAgICAgICAgID57eyBpbnZhbGlkQWRkcmVzc0ZpZWxkIHwgdXBwZXJjYXNlIH19IHt7IGxhYmVscy5pc1JlcXVpcmVkIH19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwhLS1GaWVsZCBIaW50LS0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb25cIiAqbmdJZj1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmRlc2NyaXB0aW9uXCI+IHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmRlc2NyaXB0aW9uIH19IDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3YXJuaW5nLXRleHRcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLndhcm5pbmdcIj57eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS53YXJuaW5nIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzcz1cImNoYXJhY3Rlci1jb3VudFwiXG4gICAgICAgICAgICAgIFtjbGFzcy5lcnJvcl09XCJcbiAgICAgICAgICAgICAgICAoZXJyb3JzPy5tYXhsZW5ndGggJiYgIWVycm9ycz8ubWF4bGVuZ3RoRmllbGRzKSB8fFxuICAgICAgICAgICAgICAgIChlcnJvcnM/Lm1heGxlbmd0aCAmJiBlcnJvcnM/Lm1heGxlbmd0aEZpZWxkcyAmJiBlcnJvcnMubWF4bGVuZ3RoRmllbGRzLmluY2x1ZGVzKGZvY3VzZWRGaWVsZCkpXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICpuZ0lmPVwic2hvd0NvdW50ICYmIGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlICE9PSAncGlja2VyJ1wiXG4gICAgICAgICAgICAgID57eyBpdGVtQ291bnQgfX0ve3sgbWF4TGVuZ3RoIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLm1heGxlbmd0aCB9fTwvc3BhblxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3M9XCJyZWNvcmQtY291bnRcIlxuICAgICAgICAgICAgICBbY2xhc3MuemVyby1jb3VudF09XCJpdGVtQ291bnQgPT09IDBcIlxuICAgICAgICAgICAgICBbY2xhc3Mucm93LXBpY2tlcl09XCJmb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbmZpZy5jb2x1bW5zXCJcbiAgICAgICAgICAgICAgKm5nSWY9XCJzaG93Q291bnQgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICdwaWNrZXInXCJcbiAgICAgICAgICAgICAgPnt7IGl0ZW1Db3VudCB9fS97eyBtYXhMZW5ndGggfHwgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubWF4bGVuZ3RoIH19PC9zcGFuXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLVRpcCBXZWwtLT5cbiAgICAgICAgICA8bm92by10aXAtd2VsbFxuICAgICAgICAgICAgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS50aXBXZWxsXCJcbiAgICAgICAgICAgIFtuYW1lXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICAgIFt0aXBdPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0/LnRpcFdlbGw/LnRpcFwiXG4gICAgICAgICAgICBbaWNvbl09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XT8udGlwV2VsbD8uaWNvblwiXG4gICAgICAgICAgICBbYnV0dG9uXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldPy50aXBXZWxsPy5idXR0b25cIlxuICAgICAgICAgID48L25vdm8tdGlwLXdlbGw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aSAqbmdJZj1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmZpZWxkSW50ZXJhY3Rpb25sb2FkaW5nXCIgY2xhc3M9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgICB4bWxuczphPVwiaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wL1wiXG4gICAgICAgICAgICB4PVwiMHB4XCJcbiAgICAgICAgICAgIHk9XCIwcHhcIlxuICAgICAgICAgICAgd2lkdGg9XCIxOC4ycHhcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTguNXB4XCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTguMiAxOC41XCJcbiAgICAgICAgICAgIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOC4yIDE4LjU7XCJcbiAgICAgICAgICAgIHhtbDpzcGFjZT1cInByZXNlcnZlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+XG4gICAgICAgICAgICAgIC5zcGlubmVyIHtcbiAgICAgICAgICAgICAgICBmaWxsOiAjZmZmZmZmO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgY2xhc3M9XCJzcGlubmVyXCJcbiAgICAgICAgICAgICAgZD1cIk05LjIsMTguNUM0LjEsMTguNSwwLDE0LjQsMCw5LjJTNC4xLDAsOS4yLDBjMC45LDAsMS45LDAuMSwyLjcsMC40YzAuOCwwLjIsMS4yLDEuMSwxLDEuOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMtMC4yLDAuOC0xLjEsMS4yLTEuOSwxQzEwLjUsMy4xLDkuOSwzLDkuMiwzQzUuOCwzLDMsNS44LDMsOS4yczIuOCw2LjIsNi4yLDYuMmMyLjgsMCw1LjMtMS45LDYtNC43YzAuMi0wLjgsMS0xLjMsMS44LTEuMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMwLjgsMC4yLDEuMywxLDEuMSwxLjhDMTcuMSwxNS43LDEzLjQsMTguNSw5LjIsMTguNXpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9pPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6ICdmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZScsXG4gICAgJ1thdHRyLmRhdGEtY29udHJvbC10eXBlXSc6ICdmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZScsXG4gICAgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ucmVhZE9ubHknLFxuICAgICdbY2xhc3MuaGlkZGVuXSc6ICdmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5oaWRkZW4nLFxuICAgICdbYXR0ci5kYXRhLWNvbnRyb2wta2V5XSc6ICdjb250cm9sLmtleScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Db250cm9sRWxlbWVudCBleHRlbmRzIE91dHNpZGVDbGljayBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KClcbiAgY29udHJvbDogYW55O1xuICBASW5wdXQoKVxuICBmb3JtOiBhbnk7XG4gIEBJbnB1dCgpXG4gIGNvbmRlbnNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBhdXRvRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpXG4gIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBlZGl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHNhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZGVsZXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHVwbG9hZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoJ2JsdXInKVxuICBnZXQgb25CbHVyKCk6IE9ic2VydmFibGU8Rm9jdXNFdmVudD4ge1xuICAgIHJldHVybiB0aGlzLl9ibHVyRW1pdHRlci5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIEBPdXRwdXQoJ2ZvY3VzJylcbiAgZ2V0IG9uRm9jdXMoKTogT2JzZXJ2YWJsZTxGb2N1c0V2ZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzRW1pdHRlci5hc09ic2VydmFibGUoKTtcbiAgfVxuICBwdWJsaWMgbWF4TGVuZ3RoOiBudW1iZXI7XG4gIHB1YmxpYyBmb2N1c2VkRmllbGQ6IHN0cmluZztcbiAgZm9ybWF0dGVkVmFsdWU6IHN0cmluZyA9ICcnO1xuICBwZXJjZW50VmFsdWU6IG51bWJlcjtcbiAgbWF4TGVuZ3RoTWV0OiBib29sZWFuID0gZmFsc2U7XG4gIGl0ZW1Db3VudDogbnVtYmVyID0gMDtcbiAgbWFza09wdGlvbnM6IElNYXNrT3B0aW9ucztcblxuICBwcml2YXRlIF9ibHVyRW1pdHRlcjogRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuICBwcml2YXRlIF9mb2N1c0VtaXR0ZXI6IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgcHJpdmF0ZSBfZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9lbnRlcmVkVGV4dDogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgZm9yY2VDbGVhclN1YnNjcmlwdGlvbjogYW55O1xuICBwcml2YXRlIHBlcmNlbnRDaGFuZ2VTdWJzY3JpcHRpb246IGFueTtcbiAgcHJpdmF0ZSB2YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbjogYW55O1xuICBwcml2YXRlIGRhdGVDaGFuZ2VTdWJzY3JpcHRpb246IGFueTtcbiAgcHJpdmF0ZSBfc2hvd0NvdW50OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgY2hhcmFjdGVyQ291bnRGaWVsZDogc3RyaW5nO1xuICBwcml2YXRlIG1heExlbmd0aE1ldEVycm9yZmllbGRzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIHN0YXR1c0NoYW5nZVN1YnNjcmlwdGlvbjogYW55O1xuXG4gIHRlbXBsYXRlczogYW55ID0ge307XG4gIHRlbXBsYXRlQ29udGV4dDogYW55O1xuICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGF0ZUZvcm1hdFNlcnZpY2U6IERhdGVGb3JtYXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmllbGRJbnRlcmFjdGlvbkFwaTogRmllbGRJbnRlcmFjdGlvbkFwaSxcbiAgICBwcml2YXRlIHRlbXBsYXRlU2VydmljZTogTm92b1RlbXBsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZyA9ICdlbi1VUycsXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnQpO1xuICB9XG5cbiAgZ2V0IG1heGxlbmd0aE1ldEZpZWxkKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMgJiYgdGhpcy5tYXhMZW5ndGhNZXRFcnJvcmZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1heExlbmd0aE1ldEVycm9yZmllbGRzLmZpbmQoKGZpZWxkOiBzdHJpbmcpID0+IGZpZWxkID09PSB0aGlzLmZvY3VzZWRGaWVsZCkgfHwgJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICBnZXQgbWF4bGVuZ3RoRXJyb3JGaWVsZCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmVycm9ycyAmJiB0aGlzLmVycm9ycy5tYXhsZW5ndGhGaWVsZHMgJiYgdGhpcy5lcnJvcnMubWF4bGVuZ3RoRmllbGRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLm1heGxlbmd0aEZpZWxkcy5maW5kKChmaWVsZDogc3RyaW5nKSA9PiBmaWVsZCA9PT0gdGhpcy5mb2N1c2VkRmllbGQpIHx8ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNob3dGaWVsZE1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuICF0aGlzLmVycm9ycyAmJiAhdGhpcy5tYXhMZW5ndGhNZXQgJiYgSGVscGVycy5pc0JsYW5rKHRoaXMuY29udHJvbC5kZXNjcmlwdGlvbik7XG4gIH1cblxuICBnZXQgc2hvd01heExlbmd0aE1ldE1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmlzRGlydHkgJiYgdGhpcy5tYXhMZW5ndGhNZXQgJiYgdGhpcy5mb2N1c2VkICYmICghdGhpcy5lcnJvcnMgfHwgKHRoaXMuZXJyb3JzICYmICF0aGlzLmVycm9ycy5tYXhsZW5ndGgpKSkgfHxcbiAgICAgICh0aGlzLmlzRGlydHkgJiZcbiAgICAgICAgdGhpcy5tYXhsZW5ndGhNZXRGaWVsZCAmJlxuICAgICAgICB0aGlzLmZvY3VzZWQgJiZcbiAgICAgICAgKCF0aGlzLmVycm9ycyB8fCAodGhpcy5lcnJvcnMgJiYgIXRoaXMuZXJyb3JzLm1heGxlbmd0aEZpZWxkcy5pbmNsdWRlcyh0aGlzLm1heGxlbmd0aE1ldEZpZWxkKSkpKVxuICAgICk7XG4gIH1cblxuICBnZXQgc2hvd0Vycm9yU3RhdGUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmlzRGlydHkgJiYgdGhpcy5lcnJvcnMpIHx8XG4gICAgICAodGhpcy5mb2N1c2VkICYmIHRoaXMuZXJyb3JzICYmIHRoaXMuZXJyb3JzLm1heGxlbmd0aCAmJiB0aGlzLmVycm9ycy5tYXhsZW5ndGhGaWVsZHMpIHx8XG4gICAgICAodGhpcy5mb2N1c2VkICYmIHRoaXMuZXJyb3JzICYmIHRoaXMuZXJyb3JzLm1heGxlbmd0aCAmJiB0aGlzLmVycm9ycy5tYXhsZW5ndGhGaWVsZHMgJiYgdGhpcy5tYXhsZW5ndGhFcnJvckZpZWxkKVxuICAgICk7XG4gIH1cblxuICBnZXQgc2hvd0NvdW50KCkge1xuICAgIGxldCBjaGFyQ291bnQ6IGJvb2xlYW4gPVxuICAgICAgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGggJiZcbiAgICAgICAgdGhpcy5mb2N1c2VkICYmXG4gICAgICAgICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICd0ZXh0LWFyZWEnIHx8XG4gICAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAndGV4dGJveCcpKSB8fFxuICAgICAgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGggJiYgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAncGlja2VyJyk7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dDb3VudCB8fCBjaGFyQ291bnQ7XG4gIH1cblxuICBzZXQgc2hvd0NvdW50KHZhbHVlKSB7XG4gICAgdGhpcy5fc2hvd0NvdW50ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgc2hvd01lc3NhZ2VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnNob3dDb3VudCB8fFxuICAgICAgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ud2FybmluZykgfHxcbiAgICAgICFIZWxwZXJzLmlzRW1wdHkodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmRlc2NyaXB0aW9uKVxuICAgICk7XG4gIH1cblxuICBnZXQgZGVjaW1hbFNlcGFyYXRvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5sb2NhbGUpLmZvcm1hdCgxLjIpWzFdO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IERPX05PVF9GT0NVU19NRTogc3RyaW5nW10gPSBbJ3BpY2tlcicsICd0aW1lJywgJ2RhdGUnLCAnZGF0ZS10aW1lJ107XG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzICYmICFET19OT1RfRk9DVVNfTUUuaW5jbHVkZXModGhpcy5jb250cm9sLmNvbnRyb2xUeXBlKSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBpbnB1dDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gU3Vic2NyaWJlIHRvIGNvbnRyb2wgaW50ZXJhY3Rpb25zXG4gICAgaWYgKHRoaXMuY29udHJvbC5pbnRlcmFjdGlvbnMgJiYgIXRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBmb3IgKGxldCBpbnRlcmFjdGlvbiBvZiB0aGlzLmNvbnRyb2wuaW50ZXJhY3Rpb25zKSB7XG4gICAgICAgIHN3aXRjaCAoaW50ZXJhY3Rpb24uZXZlbnQpIHtcbiAgICAgICAgICBjYXNlICdibHVyJzpcbiAgICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLm9uQmx1ci5waXBlKGRlYm91bmNlVGltZSgzMDApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ZvY3VzJzpcbiAgICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLm9uRm9jdXMucGlwZShkZWJvdW5jZVRpbWUoMzAwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjaGFuZ2UnOlxuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWx1ZUNoYW5nZXMucGlwZShkZWJvdW5jZVRpbWUoMzAwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbml0JzpcbiAgICAgICAgICAgIGludGVyYWN0aW9uLmludm9rZU9uSW5pdCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGludGVyYWN0aW9uLmludm9rZU9uSW5pdCkge1xuICAgICAgICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRlbXBsYXRlcyA9IHRoaXMudGVtcGxhdGVTZXJ2aWNlLmdldEFsbCgpO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAvLyBNYWtlIHN1cmUgdG8gaW5pdGlhbGx5IGZvcm1hdCB0aGUgdGltZSBjb250cm9sc1xuICAgIGlmICh0aGlzLmNvbnRyb2wgJiYgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3RleHRib3gnIHx8XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3RleHQtYXJlYSdcbiAgICAgICkge1xuICAgICAgICB0aGlzLml0ZW1Db3VudCA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWx1ZS5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcbiAgICAgIC8vIExpc3RlbiB0byBjbGVhciBldmVudHNcbiAgICAgIHRoaXMuZm9yY2VDbGVhclN1YnNjcmlwdGlvbiA9IHRoaXMuY29udHJvbC5mb3JjZUNsZWFyLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xlYXJWYWx1ZSgpO1xuICAgICAgfSk7XG4gICAgICAvLyBGb3IgQXN5bmNocm9ub3VzIHZhbGlkYXRpb25zXG4gICAgICB0aGlzLnN0YXR1c0NoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSgodmFsaWRpdHkpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldID0gdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0O1xuICAgICAgICBpZiAodmFsaWRpdHkgIT09ICdQRU5ESU5HJyAmJiB0aGlzLmZvcm0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSkge1xuICAgICAgICAgIHRoaXMuZm9ybS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dCA9IHtcbiAgICAgICRpbXBsaWNpdDogdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICByZXN0cmljdEtleXM6IHRoaXMucmVzdHJpY3RLZXlzLmJpbmQodGhpcyksXG4gICAgICAgIGVtaXRDaGFuZ2U6IHRoaXMuZW1pdENoYW5nZS5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVGb2N1czogdGhpcy5oYW5kbGVGb2N1cy5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVQZXJjZW50Q2hhbmdlOiB0aGlzLmhhbmRsZVBlcmNlbnRDaGFuZ2UuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlQmx1cjogdGhpcy5oYW5kbGVCbHVyLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZVRleHRBcmVhSW5wdXQ6IHRoaXMuaGFuZGxlVGV4dEFyZWFJbnB1dC5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVFZGl0OiB0aGlzLmhhbmRsZUVkaXQuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlU2F2ZTogdGhpcy5oYW5kbGVTYXZlLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZURlbGV0ZTogdGhpcy5oYW5kbGVEZWxldGUuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlVXBsb2FkOiB0aGlzLmhhbmRsZVVwbG9hZC5iaW5kKHRoaXMpLFxuICAgICAgICBtb2RlbENoYW5nZTogdGhpcy5tb2RlbENoYW5nZS5iaW5kKHRoaXMpLFxuICAgICAgICBtb2RlbENoYW5nZVdpdGhSYXc6IHRoaXMubW9kZWxDaGFuZ2VXaXRoUmF3LmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZUFkZHJlc3NDaGFuZ2U6IHRoaXMuaGFuZGxlQWRkcmVzc0NoYW5nZS5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVUeXBpbmc6IHRoaXMuaGFuZGxlVHlwaW5nLmJpbmQodGhpcyksXG4gICAgICAgIHVwZGF0ZVZhbGlkaXR5OiB0aGlzLnVwZGF0ZVZhbGlkaXR5LmJpbmQodGhpcyksXG4gICAgICAgIHRvZ2dsZUFjdGl2ZTogdGhpcy50b2dnbGVBY3RpdmUuYmluZCh0aGlzKSxcbiAgICAgICAgdmFsaWRhdGVJbnRlZ2VySW5wdXQ6IHRoaXMudmFsaWRhdGVJbnRlZ2VySW5wdXQuYmluZCh0aGlzKSxcbiAgICAgICAgdmFsaWRhdGVOdW1iZXJPbkJsdXI6IHRoaXMudmFsaWRhdGVOdW1iZXJPbkJsdXIuYmluZCh0aGlzKSxcbiAgICAgIH0sXG4gICAgICBmb3JtOiB0aGlzLmZvcm0sXG4gICAgfTtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQudG9vbHRpcFBvc2l0aW9uID0gdGhpcy50b29sdGlwUG9zaXRpb247XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnRvb2x0aXAgPSB0aGlzLnRvb2x0aXA7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnRvb2x0aXBTaXplID0gdGhpcy50b29sdGlwU2l6ZTtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQudG9vbHRpcFByZWxpbmUgPSB0aGlzLnRvb2x0aXBQcmVsaW5lO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5yZW1vdmVUb29sdGlwQXJyb3cgPSB0aGlzLnJlbW92ZVRvb2x0aXBBcnJvdztcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQuc3RhcnR1cEZvY3VzID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnN0YXJ0dXBGb2N1cztcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQuZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybCA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5maWxlQnJvd3NlckltYWdlVXBsb2FkVXJsO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5taW5pbWFsID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1pbmltYWw7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LmN1cnJlbmN5Rm9ybWF0ID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmN1cnJlbmN5Rm9ybWF0O1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5wZXJjZW50VmFsdWUgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucGVyY2VudFZhbHVlO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5jb25maWcgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29uZmlnO1xuXG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XSAmJiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc3ViVHlwZSA9PT0gJ3BlcmNlbnRhZ2UnKSB7XG4gICAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsdWUpKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5wZXJjZW50VmFsdWUgPSBOdW1iZXIoXG4gICAgICAgICAgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWx1ZSAqIDEwMCkudG9GaXhlZCg2KS5yZXBsYWNlKC9cXC4/MCokLywgJycpLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy5wZXJjZW50Q2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmRpc3BsYXlWYWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQucGVyY2VudFZhbHVlID0gTnVtYmVyKCh2YWx1ZSAqIDEwMCkudG9GaXhlZCg2KS5yZXBsYWNlKC9cXC4/MCokLywgJycpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gVW5zdWJzY3JpYmUgZnJvbSBjb250cm9sIGludGVyYWN0aW9uc1xuICAgIGlmICh0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIC8vIGlmICh0aGlzLmRhdGVDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAvLyAgICAgdGhpcy5kYXRlQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgLy8gfVxuICAgIGlmICh0aGlzLmZvcmNlQ2xlYXJTdWJzY3JpcHRpb24pIHtcbiAgICAgIC8vIFVuLWxpc3RlbiBmb3IgY2xlYXIgZXZlbnRzXG4gICAgICB0aGlzLmZvcmNlQ2xlYXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGVyY2VudENoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgLy8gVW4tbGlzdGVuIGZvciBjbGVhciBldmVudHNcbiAgICAgIHRoaXMucGVyY2VudENoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRlQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmRhdGVDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdHVzQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN0YXR1c0NoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgZ2V0IGVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmVycm9ycztcbiAgfVxuXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsaWQ7XG4gIH1cblxuICBnZXQgaXNEaXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmRpcnR5IHx8IHRoaXMuY29udHJvbC5kaXJ0eTtcbiAgfVxuXG4gIGdldCBoYXNWYWx1ZSgpIHtcbiAgICByZXR1cm4gIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmZvcm0udmFsdWVbdGhpcy5jb250cm9sLmtleV0pO1xuICB9XG5cbiAgZ2V0IGZvY3VzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWQ7XG4gIH1cblxuICBnZXQgdG9vbHRpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXA7XG4gIH1cblxuICBnZXQgdG9vbHRpcFBvc2l0aW9uKCkge1xuICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBQb3NpdGlvbikpIHtcbiAgICAgIHJldHVybiAncmlnaHQnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBQb3NpdGlvbjtcbiAgfVxuXG4gIGdldCB0b29sdGlwU2l6ZSgpIHtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS50b29sdGlwU2l6ZSkpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS50b29sdGlwU2l6ZTtcbiAgfVxuXG4gIGdldCB0b29sdGlwUHJlbGluZSgpIHtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS50b29sdGlwUHJlbGluZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS50b29sdGlwUHJlbGluZTtcbiAgfVxuXG4gIGdldCByZW1vdmVUb29sdGlwQXJyb3coKSB7XG4gICAgaWYgKEhlbHBlcnMuaXNCbGFuayh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmVtb3ZlVG9vbHRpcEFycm93KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJlbW92ZVRvb2x0aXBBcnJvdztcbiAgfVxuXG4gIGdldCBhbHdheXNBY3RpdmUoKSB7XG4gICAgLy8gQ29udHJvbHMgdGhhdCBoYXZlIHRoZSBsYWJlbCBhY3RpdmUgaWYgdGhlcmUgaXMgYW55IHVzZXIgZW50ZXJlZCB0ZXh0IGluIHRoZSBmaWVsZFxuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICdwaWNrZXInICYmIHRoaXMuX2VudGVyZWRUZXh0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gQ29udHJvbHMgdGhhdCBhbHdheXMgaGF2ZSB0aGUgbGFiZWwgYWN0aXZlXG4gICAgcmV0dXJuIChcbiAgICAgIFtcbiAgICAgICAgJ3RpbGVzJyxcbiAgICAgICAgJ2NoZWNrbGlzdCcsXG4gICAgICAgICdjaGVja2JveCcsXG4gICAgICAgICdkYXRlJyxcbiAgICAgICAgJ3RpbWUnLFxuICAgICAgICAnZGF0ZS10aW1lJyxcbiAgICAgICAgJ2FkZHJlc3MnLFxuICAgICAgICAnZmlsZScsXG4gICAgICAgICdlZGl0b3InLFxuICAgICAgICAnYWNlLWVkaXRvcicsXG4gICAgICAgICdyYWRpbycsXG4gICAgICAgICd0ZXh0LWFyZWEnLFxuICAgICAgICAncXVpY2stbm90ZScsXG4gICAgICBdLmluZGV4T2YodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlKSAhPT0gLTFcbiAgICApO1xuICB9XG5cbiAgZ2V0IHJlcXVpcmVzRXh0cmFTcGFjaW5nKCkge1xuICAgIC8vIENoaXBzXG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3BpY2tlcicgJiYgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm11bHRpcGxlICYmIHRoaXMuaGFzVmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBleGVjdXRlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pIHtcbiAgICBpZiAoaW50ZXJhY3Rpb24uc2NyaXB0ICYmIEhlbHBlcnMuaXNGdW5jdGlvbihpbnRlcmFjdGlvbi5zY3JpcHQpKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5maWVsZEludGVyYWN0aW9uQXBpLmZvcm0gPSB0aGlzLmZvcm07XG4gICAgICAgIHRoaXMuZmllbGRJbnRlcmFjdGlvbkFwaS5jdXJyZW50S2V5ID0gdGhpcy5jb250cm9sLmtleTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpbnRlcmFjdGlvbi5zY3JpcHQodGhpcy5maWVsZEludGVyYWN0aW9uQXBpLCB0aGlzLmNvbnRyb2wua2V5KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKCdGaWVsZCBJbnRlcmFjdGlvbiBFcnJvciEnLCB0aGlzLmNvbnRyb2wua2V5KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVUeXBpbmcoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSBldmVudCAmJiBldmVudC5sZW5ndGg7XG4gICAgdGhpcy5fZW50ZXJlZFRleHQgPSBldmVudDtcbiAgfVxuXG4gIGhhbmRsZUZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50LCBmaWVsZD86IGFueSkge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSB0cnVlO1xuICAgIHRoaXMuZm9jdXNlZEZpZWxkID0gZmllbGQ7XG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsodGhpcy5jaGFyYWN0ZXJDb3VudEZpZWxkKSAmJiB0aGlzLmNoYXJhY3RlckNvdW50RmllbGQgPT09IGZpZWxkKSB7XG4gICAgICB0aGlzLnNob3dDb3VudCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ2FkZHJlc3MnICYmXG4gICAgICBmaWVsZCAmJlxuICAgICAgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmZvcm0udmFsdWVbdGhpcy5jb250cm9sLmtleV0pICYmXG4gICAgICAhSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS52YWx1ZVt0aGlzLmNvbnRyb2wua2V5XVtmaWVsZF0pXG4gICAgKSB7XG4gICAgICB0aGlzLmhhbmRsZUFkZHJlc3NDaGFuZ2UoeyB2YWx1ZTogdGhpcy5mb3JtLnZhbHVlW3RoaXMuY29udHJvbC5rZXldW2ZpZWxkXSwgZmllbGQgfSk7XG4gICAgfVxuICAgIHRoaXMuX2ZvY3VzRW1pdHRlci5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIGhhbmRsZUJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcbiAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5mb2N1c2VkRmllbGQgPSAnJztcbiAgICB0aGlzLnNob3dDb3VudCA9IGZhbHNlO1xuICAgIHRoaXMuX2JsdXJFbWl0dGVyLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgY2xlYXJWYWx1ZSgpIHtcbiAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc2V0VmFsdWUobnVsbCk7XG4gICAgdGhpcy5mb3JtYXR0ZWRWYWx1ZSA9IG51bGw7XG4gIH1cblxuICBoYW5kbGVUZXh0QXJlYUlucHV0KGV2ZW50KSB7XG4gICAgdGhpcy5lbWl0Q2hhbmdlKGV2ZW50KTtcbiAgICB0aGlzLnJlc3RyaWN0S2V5cyhldmVudCk7XG4gIH1cblxuICBjaGVja01heExlbmd0aChldmVudCkge1xuICAgIGlmICh0aGlzLmNvbnRyb2wgJiYgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCkge1xuICAgICAgdGhpcy5pdGVtQ291bnQgPSBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoO1xuICAgICAgdGhpcy5tYXhMZW5ndGhNZXQgPSBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID49IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgbW9kZWxDaGFuZ2VXaXRoUmF3KGV2ZW50KSB7XG4gICAgaWYgKEhlbHBlcnMuaXNFbXB0eShldmVudC52YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VudGVyZWRUZXh0ID0gJyc7XG4gICAgfVxuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICdwaWNrZXInICYmIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGgpIHtcbiAgICAgIHRoaXMuaXRlbUNvdW50ID0gZXZlbnQudmFsdWUgPyBldmVudC52YWx1ZS5sZW5ndGggOiAwO1xuICAgICAgdGhpcy5tYXhMZW5ndGhNZXQgPSB0aGlzLml0ZW1Db3VudCA+PSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWF4bGVuZ3RoID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmF3VmFsdWUgPSBldmVudC5yYXdWYWx1ZTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KGV2ZW50LnZhbHVlKTtcbiAgfVxuXG4gIG1vZGVsQ2hhbmdlKHZhbHVlKSB7XG4gICAgaWYgKEhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VudGVyZWRUZXh0ID0gJyc7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgdmFsaWRhdGVOdW1iZXJPbkJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcbiAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5mb2N1c2VkRmllbGQgPSAnJztcbiAgICB0aGlzLnNob3dDb3VudCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc3ViVHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVJbnRlZ2VySW5wdXQoKTtcbiAgICB9XG4gICAgdGhpcy5fYmx1ckVtaXR0ZXIuZW1pdChldmVudCk7XG4gIH1cblxuICB2YWxpZGF0ZUludGVnZXJJbnB1dCgpIHtcbiAgICBjb25zdCBOVU1CRVJTX09OTFkgPSAvXltcXGRcXC1dXFxkKiQvO1xuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsdWUgJiYgIU5VTUJFUlNfT05MWS50ZXN0KHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWx1ZSkpIHtcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXJrQXNJbnZhbGlkKFxuICAgICAgICBgJHt0aGlzLmxhYmVscy5pbnZhbGlkSW50ZWdlcklucHV0fSAke3RoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5sYWJlbC50b1VwcGVyQ2FzZSgpfWAsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlc3RyaWN0S2V5cyhldmVudCkge1xuICAgIGNvbnN0IE5VTUJFUlNfT05MWSA9IC9bMC05XFwtXS87XG4gICAgY29uc3QgTlVNQkVSU19XSVRIX0RFQ0lNQUxfRE9UID0gL1swLTlcXC5cXC1dLztcbiAgICBjb25zdCBOVU1CRVJTX1dJVEhfREVDSU1BTF9ET1RfQU5EX0NPTU1BID0gL1swLTlcXC5cXCxcXC1dLztcbiAgICBjb25zdCBVVElMSVRZX0tFWVMgPSBbJ0JhY2tzcGFjZScsICdEZWxldGUnLCAnQXJyb3dMZWZ0JywgJ0Fycm93UmlnaHQnLCAnVGFiJ107XG4gICAgbGV0IGtleSA9IGV2ZW50LmtleTtcblxuICAgIC8vIE51bWJlcnMgb3IgbnVtYmVycyBhbmQgZGVjaW1hbCBjaGFyYWN0ZXJzIG9ubHlcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnN1YlR5cGUgPT09ICdudW1iZXInICYmICEoTlVNQkVSU19PTkxZLnRlc3Qoa2V5KSB8fCBVVElMSVRZX0tFWVMuaW5jbHVkZXMoa2V5KSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIFsnY3VycmVuY3knLCAnZmxvYXQnLCAncGVyY2VudGFnZSddLmluY2x1ZGVzKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zdWJUeXBlKSAmJlxuICAgICAgIShcbiAgICAgICAgKHRoaXMuZGVjaW1hbFNlcGFyYXRvciA9PT0gJy4nICYmIE5VTUJFUlNfV0lUSF9ERUNJTUFMX0RPVC50ZXN0KGtleSkpIHx8XG4gICAgICAgICh0aGlzLmRlY2ltYWxTZXBhcmF0b3IgPT09ICcsJyAmJiBOVU1CRVJTX1dJVEhfREVDSU1BTF9ET1RfQU5EX0NPTU1BLnRlc3Qoa2V5KSkgfHxcbiAgICAgICAgVVRJTElUWV9LRVlTLmluY2x1ZGVzKGtleSlcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIC8vIE1heCBMZW5ndGhcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCAmJiBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID49IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGgpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUGVyY2VudENoYW5nZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldFsndmFsdWUnXTtcbiAgICBsZXQgcGVyY2VudCA9IEhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkgPyBudWxsIDogTnVtYmVyKCh2YWx1ZSAvIDEwMCkudG9GaXhlZCg2KS5yZXBsYWNlKC9cXC4/MCokLywgJycpKTtcbiAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eShwZXJjZW50KSkge1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChwZXJjZW50KTtcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zZXRWYWx1ZShwZXJjZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChudWxsKTtcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zZXRWYWx1ZShudWxsKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVUYWJGb3JQaWNrZXJzKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3RpdmUgJiYgZXZlbnQgJiYgZXZlbnQua2V5Q29kZSkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVTQyB8fCBldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5UQUIpIHtcbiAgICAgICAgdGhpcy50b2dnbGVBY3RpdmUoZXZlbnQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbWl0Q2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgdGhpcy5jaGVja01heExlbmd0aCh2YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVFZGl0KHZhbHVlKSB7XG4gICAgdGhpcy5lZGl0LmVtaXQodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlU2F2ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2F2ZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZSh2YWx1ZSkge1xuICAgIHRoaXMuZGVsZXRlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlVXBsb2FkKHZhbHVlKSB7XG4gICAgdGhpcy51cGxvYWQuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVBZGRyZXNzQ2hhbmdlKGRhdGEpIHtcbiAgICBpZiAoXG4gICAgICBkYXRhICYmXG4gICAgICAhSGVscGVycy5pc0JsYW5rKGRhdGEudmFsdWUpICYmXG4gICAgICBkYXRhLmZpZWxkICYmXG4gICAgICB0aGlzLmNvbnRyb2wuY29uZmlnW2RhdGEuZmllbGRdICYmXG4gICAgICAhSGVscGVycy5pc0VtcHR5KHRoaXMuY29udHJvbC5jb25maWdbZGF0YS5maWVsZF0ubWF4bGVuZ3RoKVxuICAgICkge1xuICAgICAgdGhpcy5pdGVtQ291bnQgPSBkYXRhLnZhbHVlLmxlbmd0aDtcbiAgICAgIHRoaXMuY2hhcmFjdGVyQ291bnRGaWVsZCA9IGRhdGEuZmllbGQ7XG4gICAgICB0aGlzLm1heExlbmd0aCA9IHRoaXMuY29udHJvbC5jb25maWdbZGF0YS5maWVsZF0ubWF4bGVuZ3RoO1xuICAgICAgdGhpcy5zaG93Q291bnQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMubWF4TGVuZ3RoID09PSB0aGlzLml0ZW1Db3VudCkge1xuICAgICAgICB0aGlzLm1heExlbmd0aE1ldEVycm9yZmllbGRzLnB1c2goZGF0YS5maWVsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1heExlbmd0aE1ldEVycm9yZmllbGRzID0gdGhpcy5tYXhMZW5ndGhNZXRFcnJvcmZpZWxkcy5maWx0ZXIoKGZpZWxkOiBzdHJpbmcpID0+IGZpZWxkICE9PSBkYXRhLmZpZWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVWYWxpZGl0eShzaG91bGRFdmVudEJlRW1pdHRlZCk6IHZvaWQge1xuICAgIGxldCBlbWl0RXZlbnQ6IGJvb2xlYW4gPSBzaG91bGRFdmVudEJlRW1pdHRlZCA/IHRydWUgOiBmYWxzZTtcbiAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudCB9KTtcbiAgfVxufVxuIl19