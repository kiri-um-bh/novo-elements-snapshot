/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/Control.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.adjust();
        }));
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
            return this.maxLengthMetErrorfields.find((/**
             * @param {?} field
             * @return {?}
             */
            (field) => field === this.focusedField)) || '';
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
            return this.errors.maxlengthFields.find((/**
             * @param {?} field
             * @return {?}
             */
            (field) => field === this.focusedField)) || '';
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
        const MAX_LENGTH_CONTROL_TYPES = ['textbox', 'picker', 'text-area'];
        /** @type {?} */
        const charCount = this.focused &&
            !!this.form.controls[this.control.key].maxlength &&
            MAX_LENGTH_CONTROL_TYPES.includes(this.form.controls[this.control.key].controlType);
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
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const input = this.element.nativeElement.querySelector('input');
                if (input) {
                    input.focus();
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // Subscribe to control interactions
        if (this.control.interactions && !this.form.controls[this.control.key].restrictFieldInteractions) {
            for (const interaction of this.control.interactions) {
                switch (interaction.event) {
                    case 'blur':
                        this.valueChangeSubscription = this.onBlur.pipe(debounceTime(300)).subscribe((/**
                         * @return {?}
                         */
                        () => {
                            if (!this.form.controls[this.control.key].restrictFieldInteractions) {
                                this.executeInteraction(interaction);
                            }
                        }));
                        break;
                    case 'focus':
                        this.valueChangeSubscription = this.onFocus.pipe(debounceTime(300)).subscribe((/**
                         * @return {?}
                         */
                        () => {
                            if (!this.form.controls[this.control.key].restrictFieldInteractions) {
                                this.executeInteraction(interaction);
                            }
                        }));
                        break;
                    case 'change':
                        this.valueChangeSubscription = this.form.controls[this.control.key].valueChanges.pipe(debounceTime(300)).subscribe((/**
                         * @return {?}
                         */
                        () => {
                            if (!this.form.controls[this.control.key].restrictFieldInteractions) {
                                this.executeInteraction(interaction);
                            }
                        }));
                        break;
                    case 'init':
                        interaction.invokeOnInit = true;
                        break;
                    default:
                        break;
                }
                if (interaction.invokeOnInit) {
                    if (!this.form.controls[this.control.key].restrictFieldInteractions) {
                        this.executeInteraction(interaction, true);
                    }
                }
            }
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.templates = this.templateService.getAll();
            this.loading = false;
            this.changeDetectorRef.markForCheck();
        }));
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
            this.forceClearSubscription = this.control.forceClear.subscribe((/**
             * @return {?}
             */
            () => {
                this.clearValue();
            }));
            // For Asynchronous validations
            this.statusChangeSubscription = this.form.controls[this.control.key].statusChanges.subscribe((/**
             * @param {?} validity
             * @return {?}
             */
            (validity) => {
                this.form.controls[this.control.key] = this.templateContext.$implicit;
                if (validity !== 'PENDING' && this.form.updateValueAndValidity) {
                    this.form.updateValueAndValidity();
                }
            }));
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
            this.percentChangeSubscription = this.form.controls[this.control.key].displayValueChanges.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                if (!Helpers.isEmpty(value) && !isNaN(value)) {
                    this.templateContext.$implicit.percentValue = Number((value * 100).toFixed(6).replace(/\.?0*$/, ''));
                }
                else if (Helpers.isEmpty(value)) {
                    this.templateContext.$implicit.percentValue = undefined;
                }
            }));
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
     * @param {?=} isInvokedOnInit
     * @return {?}
     */
    executeInteraction(interaction, isInvokedOnInit = false) {
        if (interaction.script && Helpers.isFunction(interaction.script)) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.fieldInteractionApi.form = this.form;
                this.fieldInteractionApi.currentKey = this.control.key;
                this.fieldInteractionApi.isInvokedOnInit = isInvokedOnInit;
                try {
                    interaction.script(this.fieldInteractionApi, this.control.key);
                }
                catch (err) {
                    console.info('Field Interaction Error!', this.control.key); // tslint:disable-line
                    console.error(err); // tslint:disable-line
                }
            }));
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
        const key = event.key;
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
        const value = event.target['value'] || event['data'];
        /** @type {?} */
        const percent = (Helpers.isEmpty(value) || isNaN(value)) ? value : Number((value / 100).toFixed(6).replace(/\.?0*$/, ''));
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
                this.maxLengthMetErrorfields = this.maxLengthMetErrorfields.filter((/**
                 * @param {?} field
                 * @return {?}
                 */
                (field) => field !== data.field));
            }
        }
    }
    /**
     * @param {?} shouldEventBeEmitted
     * @return {?}
     */
    updateValidity(shouldEventBeEmitted) {
        /** @type {?} */
        const emitEvent = shouldEventBeEmitted ? true : false;
        this.form.controls[this.control.key].updateValueAndValidity({ emitEvent });
    }
}
NovoControlElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-control',
                template: `
        <div class="novo-control-container" [hidden]="form.controls[control.key].hidden || form.controls[control.key].type === 'hidden' || form.controls[control.key].controlType === 'hidden'">
            <!--Encrypted Field-->
            <span [tooltip]="labels.encryptedFieldTooltip" [tooltipPosition]="'right'"><i [hidden]="!form.controls[control.key].encrypted"
            class="bhi-lock"></i></span>
            <!--Label (for horizontal)-->
            <label [attr.for]="control.key" *ngIf="form.layout !== 'vertical' && form.controls[control.key].label && !condensed" [ngClass]="{'encrypted': form.controls[control.key].encrypted }">
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
                    [class.novo-control-extra-spacing]="requiresExtraSpacing">
                    {{ form.controls[control.key].label }}
                </label>
                <div class="novo-control-inner-container" [class.required]="form.controls[control.key].required && !form.controls[control.key].readOnly">
                    <div class="novo-control-inner-input-container" [class.novo-control-filled]="hasValue" [class.novo-control-empty]="!hasValue">
                      <!--Required Indicator-->
                        <i [hidden]="!form.controls[control.key].required || form.controls[control.key].readOnly"
                            class="required-indicator {{ form.controls[control.key].controlType }}"
                            [ngClass]="{'bhi-circle': !isValid, 'bhi-check': isValid}" *ngIf="!condensed || form.controls[control.key].required">
                        </i>
                        <!--Form Controls-->
                        <div class="novo-control-input {{ form.controls[control.key].controlType }}" [attr.data-automation-id]="control.key" [class.control-disabled]="form.controls[control.key].disabled">
                            <!--TODO prefix/suffix on the control-->
                            <ng-container *ngIf="templates">
                              <ng-container *ngTemplateOutlet="templates[form.controls[control.key].controlType]; context: templateContext"></ng-container>
                            </ng-container>
                            <ng-container *ngIf="!templates || loading">
                                <div class="novo-control-input-container novo-control-input-with-label">
                                  <input type="text"/>
                                </div>
                            </ng-container>
                        </div>
                    </div>
                    <!--Error Message-->
                    <div class="field-message {{ form.controls[control.key].controlType }}" *ngIf="!condensed" [class.has-tip]="form.controls[control.key].tipWell" [ngClass]="showErrorState || showMaxLengthMetMessage ? 'error-shown' : 'error-hidden'">
                        <div class="messages" [ngClass]="showMessages ? 'count-shown messages-shown' : 'count-hidden messages-hidden'">
                            <span class="error-text" *ngIf="showFieldMessage"></span>
                            <span class="error-text" *ngIf="isDirty && errors?.required && form.controls[control.key].controlType !== 'address'">{{ form.controls[control.key].label | uppercase }} {{ labels.isRequired }}</span>
                            <span class="error-text" *ngIf="isDirty && errors?.minlength">{{ form.controls[control.key].label | uppercase }} {{ labels.minLength }} {{ form.controls[control.key].minlength }}</span>
                            <span class="error-text" *ngIf="isDirty && maxLengthMet && focused && !errors?.maxlength && form.controls[control.key].controlType !== 'picker'">{{ labels.maxlengthMet(form.controls[control.key].maxlength) }}</span>
                            <span class="error-text" *ngIf="errors?.maxlength && focused && !errors?.maxlengthFields">{{ labels.invalidMaxlength(form.controls[control.key].maxlength) }}</span>
                            <span class="error-text" *ngIf="maxLengthMet && form.controls[control.key].controlType === 'picker'">{{ labels.maxRecordsReached }}</span>
                            <span class="error-text" *ngIf="isDirty && errors?.invalidEmail">{{ form.controls[control.key].label | uppercase }} {{ labels.invalidEmail }}</span>
                            <span class="error-text" *ngIf="isDirty && (errors?.integerTooLarge || errors?.doubleTooLarge)">{{ form.controls[control.key].label | uppercase }} {{ labels.isTooLarge }}</span>
                            <span *ngIf="isDirty && errors?.minYear">{{ form.controls[control.key].label | uppercase }} {{ labels.notValidYear }}</span>
                            <span class="error-text" *ngIf="isDirty && (errors?.custom)">{{ errors.custom }}</span>
                            <span class="error-text" *ngIf="errors?.maxlength && errors?.maxlengthFields && maxlengthErrorField && focused">
                                {{ labels.invalidMaxlengthWithField(control.config[maxlengthErrorField]?.label, control.config[maxlengthErrorField]?.maxlength) }}
                            </span>
                            <span class="error-text" *ngIf="isDirty && maxlengthMetField && focused && !errors?.maxlengthFields?.includes(maxlengthMetField)">
                              {{ labels.maxlengthMetWithField(control.config[maxlengthMetField]?.label, control.config[maxlengthMetField]?.maxlength) }}
                            </span>
                            <span *ngIf="isDirty && errors?.invalidAddress">
                                <span class="error-text" *ngFor="let invalidAddressField of errors?.invalidAddressFields">{{ invalidAddressField | uppercase }} {{ labels.isRequired }} </span>
                            </span>
                            <!--Field Hint-->
                            <span class="description" *ngIf="form.controls[control.key].description">
                                {{ form.controls[control.key].description }}
                            </span>
                            <span class="warning-text" *ngIf="form.controls[control.key].warning">{{ form.controls[control.key].warning }}</span>

                        </div>
                        <span class="character-count" [class.error]="((errors?.maxlength && !errors?.maxlengthFields) || (errors?.maxlength && errors?.maxlengthFields && errors.maxlengthFields.includes(focusedField)))" *ngIf="showCount && form.controls[control.key].controlType !== 'picker'">{{ itemCount }}/{{ maxLength || form.controls[control.key].maxlength }}</span>
                        <span class="record-count" [class.zero-count]="itemCount === 0" [class.row-picker]="form.controls[this.control.key].config.columns" *ngIf="showCount && form.controls[control.key].controlType === 'picker'">{{ itemCount }}/{{ maxLength || form.controls[control.key].maxlength }}</span>
                    </div>
                    <!--Tip Wel-->
                    <novo-tip-well *ngIf="form.controls[control.key].tipWell" [name]="control.key" [tip]="form.controls[control.key]?.tipWell?.tip" [icon]="form.controls[control.key]?.tipWell?.icon" [button]="form.controls[control.key]?.tipWell?.button" [sanitize]="form.controls[control.key]?.tipWell?.sanitize"></novo-tip-well>
                </div>
                <i *ngIf="form.controls[control.key].fieldInteractionloading" class="loading">
                    <svg version="1.1"
                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                     x="0px" y="0px" width="18.2px" height="18.5px" viewBox="0 0 18.2 18.5" style="enable-background:new 0 0 18.2 18.5;"
                     xml:space="preserve">
                    <style type="text/css">
                        .spinner { fill:#FFFFFF; }
                    </style>
                        <path class="spinner" d="M9.2,18.5C4.1,18.5,0,14.4,0,9.2S4.1,0,9.2,0c0.9,0,1.9,0.1,2.7,0.4c0.8,0.2,1.2,1.1,1,1.9
                            c-0.2,0.8-1.1,1.2-1.9,1C10.5,3.1,9.9,3,9.2,3C5.8,3,3,5.8,3,9.2s2.8,6.2,6.2,6.2c2.8,0,5.3-1.9,6-4.7c0.2-0.8,1-1.3,1.8-1.1
                            c0.8,0.2,1.3,1,1.1,1.8C17.1,15.7,13.4,18.5,9.2,18.5z"/>
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
                    '[class.inline-embedded]': 'control.isInlineEmbedded',
                    '[class.embedded]': 'control.isEmbedded',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0NvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsWUFBWSxFQUdaLFNBQVMsRUFDVCxZQUFZLEVBR1osU0FBUyxFQUNULE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRTlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7O0FBRWxGLGtDQUlDOzs7SUFIQyw0QkFBVTs7SUFDVix5Q0FBMkI7O0lBQzNCLDZCQUFlOztBQU1qQixNQUFNLE9BQU8sWUFBWTs7OztJQU12QixZQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQUcsQ0FBQzs7Ozs7SUFKMUMsT0FBTyxDQUFDLFFBQTZCO1FBQ25DLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBSUQsa0JBQWtCO1FBQ2hCLFVBQVU7OztRQUFDLEdB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Qzs7Ozs7SUFDcEMsdURBQXVDOzs7OztJQUN2QyxxREFBcUM7Ozs7O0lBQ3JDLG9EQUFvQzs7Ozs7SUFDcEMsd0NBQW9DOzs7OztJQUNwQyxpREFBb0M7Ozs7O0lBQ3BDLHFEQUErQzs7Ozs7SUFDL0Msc0RBQXNDOztJQUV0Qyx1Q0FBb0I7O0lBQ3BCLDZDQUFxQjs7SUFDckIscUNBQXlCOztJQUl2QixvQ0FBK0I7Ozs7O0lBQy9CLCtDQUE0Qzs7Ozs7SUFDNUMsaURBQWdEOzs7OztJQUNoRCw2Q0FBNEM7Ozs7O0lBQzVDLCtDQUE0Qzs7Ozs7SUFDNUMsb0NBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBEaXJlY3RpdmUsXG4gIEhvc3RMaXN0ZW5lcixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgTE9DQUxFX0lELFxuICBJbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4vLyBBUFBcbmltcG9ydCB7IE91dHNpZGVDbGljayB9IGZyb20gJy4uLy4uL3V0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0JztcbmltcG9ydCB7IEZpZWxkSW50ZXJhY3Rpb25BcGkgfSBmcm9tICcuL0ZpZWxkSW50ZXJhY3Rpb25BcGknO1xuaW1wb3J0IHsgTm92b1RlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlL05vdm9UZW1wbGF0ZVNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNYXNrT3B0aW9ucyB7XG4gIG1hc2s6IGFueTtcbiAga2VlcENoYXJQb3NpdGlvbnM6IGJvb2xlYW47XG4gIGd1aWRlOiBib29sZWFuO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd0ZXh0YXJlYVthdXRvc2l6ZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQXV0b1NpemUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudC50YXJnZXQnXSlcbiAgb25JbnB1dCh0ZXh0QXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuYWRqdXN0KCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFkanVzdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRqdXN0KCk6IHZvaWQge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBuYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IG5hdGl2ZUVsZW1lbnQuc3R5bGUubWluSGVpZ2h0O1xuICAgIG5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7bmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHR9cHhgO1xuICB9XG59XG4vLyB1bmRvIGFsbCB0ZW1wbGF0ZSBjb250ZXh0IHJlZmVyZW5jZXMhXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWNvbnRhaW5lclwiIFtoaWRkZW5dPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uaGlkZGVuIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnR5cGUgPT09ICdoaWRkZW4nIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAnaGlkZGVuJ1wiPlxuICAgICAgICAgICAgPCEtLUVuY3J5cHRlZCBGaWVsZC0tPlxuICAgICAgICAgICAgPHNwYW4gW3Rvb2x0aXBdPVwibGFiZWxzLmVuY3J5cHRlZEZpZWxkVG9vbHRpcFwiIFt0b29sdGlwUG9zaXRpb25dPVwiJ3JpZ2h0J1wiPjxpIFtoaWRkZW5dPVwiIWZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmVuY3J5cHRlZFwiXG4gICAgICAgICAgICBjbGFzcz1cImJoaS1sb2NrXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgIDwhLS1MYWJlbCAoZm9yIGhvcml6b250YWwpLS0+XG4gICAgICAgICAgICA8bGFiZWwgW2F0dHIuZm9yXT1cImNvbnRyb2wua2V5XCIgKm5nSWY9XCJmb3JtLmxheW91dCAhPT0gJ3ZlcnRpY2FsJyAmJiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCAmJiAhY29uZGVuc2VkXCIgW25nQ2xhc3NdPVwieydlbmNyeXB0ZWQnOiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5lbmNyeXB0ZWQgfVwiPlxuICAgICAgICAgICAgICAgIHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIH19XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1vdXRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8IS0tTGFiZWwgKGZvciB2ZXJ0aWNhbCktLT5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmb3JtLmxheW91dCA9PT0gJ3ZlcnRpY2FsJyAmJiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCAmJiAhY29uZGVuc2VkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub3ZvLWNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5mb3JdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Mubm92by1jb250cm9sLWVtcHR5XT1cIiFoYXNWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5ub3ZvLWNvbnRyb2wtZm9jdXNlZF09XCJmb2N1c2VkXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLm5vdm8tY29udHJvbC1maWxsZWRdPVwiaGFzVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Mubm92by1jb250cm9sLWFsd2F5cy1hY3RpdmVdPVwiYWx3YXlzQWN0aXZlIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLm5vdm8tY29udHJvbC1leHRyYS1zcGFjaW5nXT1cInJlcXVpcmVzRXh0cmFTcGFjaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIH19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWlubmVyLWNvbnRhaW5lclwiIFtjbGFzcy5yZXF1aXJlZF09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5yZXF1aXJlZCAmJiAhZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ucmVhZE9ubHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1pbm5lci1pbnB1dC1jb250YWluZXJcIiBbY2xhc3Mubm92by1jb250cm9sLWZpbGxlZF09XCJoYXNWYWx1ZVwiIFtjbGFzcy5ub3ZvLWNvbnRyb2wtZW1wdHldPVwiIWhhc1ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLVJlcXVpcmVkIEluZGljYXRvci0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgW2hpZGRlbl09XCIhZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ucmVxdWlyZWQgfHwgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ucmVhZE9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmVxdWlyZWQtaW5kaWNhdG9yIHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlIH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2JoaS1jaXJjbGUnOiAhaXNWYWxpZCwgJ2JoaS1jaGVjayc6IGlzVmFsaWR9XCIgKm5nSWY9XCIhY29uZGVuc2VkIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnJlcXVpcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tRm9ybSBDb250cm9scy0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1pbnB1dCB7eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSB9fVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjb250cm9sLmtleVwiIFtjbGFzcy5jb250cm9sLWRpc2FibGVkXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVRPRE8gcHJlZml4L3N1ZmZpeCBvbiB0aGUgY29udHJvbC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0ZW1wbGF0ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGVdOyBjb250ZXh0OiB0ZW1wbGF0ZUNvbnRleHRcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXRlbXBsYXRlcyB8fCBsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtaW5wdXQtY29udGFpbmVyIG5vdm8tY29udHJvbC1pbnB1dC13aXRoLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLUVycm9yIE1lc3NhZ2UtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLW1lc3NhZ2Uge3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgfX1cIiAqbmdJZj1cIiFjb25kZW5zZWRcIiBbY2xhc3MuaGFzLXRpcF09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS50aXBXZWxsXCIgW25nQ2xhc3NdPVwic2hvd0Vycm9yU3RhdGUgfHwgc2hvd01heExlbmd0aE1ldE1lc3NhZ2UgPyAnZXJyb3Itc2hvd24nIDogJ2Vycm9yLWhpZGRlbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlc1wiIFtuZ0NsYXNzXT1cInNob3dNZXNzYWdlcyA/ICdjb3VudC1zaG93biBtZXNzYWdlcy1zaG93bicgOiAnY291bnQtaGlkZGVuIG1lc3NhZ2VzLWhpZGRlbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cInNob3dGaWVsZE1lc3NhZ2VcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIGVycm9ycz8ucmVxdWlyZWQgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgIT09ICdhZGRyZXNzJ1wiPnt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIHwgdXBwZXJjYXNlIH19IHt7IGxhYmVscy5pc1JlcXVpcmVkIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiaXNEaXJ0eSAmJiBlcnJvcnM/Lm1pbmxlbmd0aFwiPnt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIHwgdXBwZXJjYXNlIH19IHt7IGxhYmVscy5taW5MZW5ndGggfX0ge3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubWlubGVuZ3RoIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiaXNEaXJ0eSAmJiBtYXhMZW5ndGhNZXQgJiYgZm9jdXNlZCAmJiAhZXJyb3JzPy5tYXhsZW5ndGggJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgIT09ICdwaWNrZXInXCI+e3sgbGFiZWxzLm1heGxlbmd0aE1ldChmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5tYXhsZW5ndGgpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiZXJyb3JzPy5tYXhsZW5ndGggJiYgZm9jdXNlZCAmJiAhZXJyb3JzPy5tYXhsZW5ndGhGaWVsZHNcIj57eyBsYWJlbHMuaW52YWxpZE1heGxlbmd0aChmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5tYXhsZW5ndGgpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwibWF4TGVuZ3RoTWV0ICYmIGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAncGlja2VyJ1wiPnt7IGxhYmVscy5tYXhSZWNvcmRzUmVhY2hlZCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImlzRGlydHkgJiYgZXJyb3JzPy5pbnZhbGlkRW1haWxcIj57eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCB8IHVwcGVyY2FzZSB9fSB7eyBsYWJlbHMuaW52YWxpZEVtYWlsIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiaXNEaXJ0eSAmJiAoZXJyb3JzPy5pbnRlZ2VyVG9vTGFyZ2UgfHwgZXJyb3JzPy5kb3VibGVUb29MYXJnZSlcIj57eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCB8IHVwcGVyY2FzZSB9fSB7eyBsYWJlbHMuaXNUb29MYXJnZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzRGlydHkgJiYgZXJyb3JzPy5taW5ZZWFyXCI+e3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgfCB1cHBlcmNhc2UgfX0ge3sgbGFiZWxzLm5vdFZhbGlkWWVhciB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImlzRGlydHkgJiYgKGVycm9ycz8uY3VzdG9tKVwiPnt7IGVycm9ycy5jdXN0b20gfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJlcnJvcnM/Lm1heGxlbmd0aCAmJiBlcnJvcnM/Lm1heGxlbmd0aEZpZWxkcyAmJiBtYXhsZW5ndGhFcnJvckZpZWxkICYmIGZvY3VzZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFiZWxzLmludmFsaWRNYXhsZW5ndGhXaXRoRmllbGQoY29udHJvbC5jb25maWdbbWF4bGVuZ3RoRXJyb3JGaWVsZF0/LmxhYmVsLCBjb250cm9sLmNvbmZpZ1ttYXhsZW5ndGhFcnJvckZpZWxkXT8ubWF4bGVuZ3RoKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImlzRGlydHkgJiYgbWF4bGVuZ3RoTWV0RmllbGQgJiYgZm9jdXNlZCAmJiAhZXJyb3JzPy5tYXhsZW5ndGhGaWVsZHM/LmluY2x1ZGVzKG1heGxlbmd0aE1ldEZpZWxkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFiZWxzLm1heGxlbmd0aE1ldFdpdGhGaWVsZChjb250cm9sLmNvbmZpZ1ttYXhsZW5ndGhNZXRGaWVsZF0/LmxhYmVsLCBjb250cm9sLmNvbmZpZ1ttYXhsZW5ndGhNZXRGaWVsZF0/Lm1heGxlbmd0aCkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJpc0RpcnR5ICYmIGVycm9ycz8uaW52YWxpZEFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nRm9yPVwibGV0IGludmFsaWRBZGRyZXNzRmllbGQgb2YgZXJyb3JzPy5pbnZhbGlkQWRkcmVzc0ZpZWxkc1wiPnt7IGludmFsaWRBZGRyZXNzRmllbGQgfCB1cHBlcmNhc2UgfX0ge3sgbGFiZWxzLmlzUmVxdWlyZWQgfX0gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tRmllbGQgSGludC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb25cIiAqbmdJZj1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwid2FybmluZy10ZXh0XCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS53YXJuaW5nXCI+e3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ud2FybmluZyB9fTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoYXJhY3Rlci1jb3VudFwiIFtjbGFzcy5lcnJvcl09XCIoKGVycm9ycz8ubWF4bGVuZ3RoICYmICFlcnJvcnM/Lm1heGxlbmd0aEZpZWxkcykgfHwgKGVycm9ycz8ubWF4bGVuZ3RoICYmIGVycm9ycz8ubWF4bGVuZ3RoRmllbGRzICYmIGVycm9ycy5tYXhsZW5ndGhGaWVsZHMuaW5jbHVkZXMoZm9jdXNlZEZpZWxkKSkpXCIgKm5nSWY9XCJzaG93Q291bnQgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgIT09ICdwaWNrZXInXCI+e3sgaXRlbUNvdW50IH19L3t7IG1heExlbmd0aCB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5tYXhsZW5ndGggfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlY29yZC1jb3VudFwiIFtjbGFzcy56ZXJvLWNvdW50XT1cIml0ZW1Db3VudCA9PT0gMFwiIFtjbGFzcy5yb3ctcGlja2VyXT1cImZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29uZmlnLmNvbHVtbnNcIiAqbmdJZj1cInNob3dDb3VudCAmJiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3BpY2tlcidcIj57eyBpdGVtQ291bnQgfX0ve3sgbWF4TGVuZ3RoIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLm1heGxlbmd0aCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS1UaXAgV2VsLS0+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLXRpcC13ZWxsICpuZ0lmPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0udGlwV2VsbFwiIFtuYW1lXT1cImNvbnRyb2wua2V5XCIgW3RpcF09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XT8udGlwV2VsbD8udGlwXCIgW2ljb25dPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0/LnRpcFdlbGw/Lmljb25cIiBbYnV0dG9uXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldPy50aXBXZWxsPy5idXR0b25cIiBbc2FuaXRpemVdPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0/LnRpcFdlbGw/LnNhbml0aXplXCI+PC9ub3ZvLXRpcC13ZWxsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpICpuZ0lmPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uZmllbGRJbnRlcmFjdGlvbmxvYWRpbmdcIiBjbGFzcz1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4bWxuczphPVwiaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wL1wiXG4gICAgICAgICAgICAgICAgICAgICB4PVwiMHB4XCIgeT1cIjBweFwiIHdpZHRoPVwiMTguMnB4XCIgaGVpZ2h0PVwiMTguNXB4XCIgdmlld0JveD1cIjAgMCAxOC4yIDE4LjVcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTguMiAxOC41O1wiXG4gICAgICAgICAgICAgICAgICAgICB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Bpbm5lciB7IGZpbGw6I0ZGRkZGRjsgfVxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJzcGlubmVyXCIgZD1cIk05LjIsMTguNUM0LjEsMTguNSwwLDE0LjQsMCw5LjJTNC4xLDAsOS4yLDBjMC45LDAsMS45LDAuMSwyLjcsMC40YzAuOCwwLjIsMS4yLDEuMSwxLDEuOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMtMC4yLDAuOC0xLjEsMS4yLTEuOSwxQzEwLjUsMy4xLDkuOSwzLDkuMiwzQzUuOCwzLDMsNS44LDMsOS4yczIuOCw2LjIsNi4yLDYuMmMyLjgsMCw1LjMtMS45LDYtNC43YzAuMi0wLjgsMS0xLjMsMS44LTEuMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMwLjgsMC4yLDEuMywxLDEuMSwxLjhDMTcuMSwxNS43LDEzLjQsMTguNSw5LjIsMTguNXpcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzc10nOiAnZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUnLFxuICAgICdbYXR0ci5kYXRhLWNvbnRyb2wtdHlwZV0nOiAnZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUnLFxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnJlYWRPbmx5JyxcbiAgICAnW2NsYXNzLmhpZGRlbl0nOiAnZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uaGlkZGVuJyxcbiAgICAnW2F0dHIuZGF0YS1jb250cm9sLWtleV0nOiAnY29udHJvbC5rZXknLFxuICAgICdbY2xhc3MuaW5saW5lLWVtYmVkZGVkXSc6ICdjb250cm9sLmlzSW5saW5lRW1iZWRkZWQnLFxuICAgICdbY2xhc3MuZW1iZWRkZWRdJzogJ2NvbnRyb2wuaXNFbWJlZGRlZCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Db250cm9sRWxlbWVudCBleHRlbmRzIE91dHNpZGVDbGljayBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KClcbiAgY29udHJvbDogYW55O1xuICBASW5wdXQoKVxuICBmb3JtOiBhbnk7XG4gIEBJbnB1dCgpXG4gIGNvbmRlbnNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBhdXRvRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpXG4gIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBlZGl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHNhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZGVsZXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHVwbG9hZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoJ2JsdXInKVxuICBnZXQgb25CbHVyKCk6IE9ic2VydmFibGU8Rm9jdXNFdmVudD4ge1xuICAgIHJldHVybiB0aGlzLl9ibHVyRW1pdHRlci5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIEBPdXRwdXQoJ2ZvY3VzJylcbiAgZ2V0IG9uRm9jdXMoKTogT2JzZXJ2YWJsZTxGb2N1c0V2ZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzRW1pdHRlci5hc09ic2VydmFibGUoKTtcbiAgfVxuICBwdWJsaWMgbWF4TGVuZ3RoOiBudW1iZXI7XG4gIHB1YmxpYyBmb2N1c2VkRmllbGQ6IHN0cmluZztcbiAgZm9ybWF0dGVkVmFsdWU6IHN0cmluZyA9ICcnO1xuICBwZXJjZW50VmFsdWU6IG51bWJlcjtcbiAgbWF4TGVuZ3RoTWV0OiBib29sZWFuID0gZmFsc2U7XG4gIGl0ZW1Db3VudDogbnVtYmVyID0gMDtcbiAgbWFza09wdGlvbnM6IElNYXNrT3B0aW9ucztcblxuICBwcml2YXRlIF9ibHVyRW1pdHRlcjogRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuICBwcml2YXRlIF9mb2N1c0VtaXR0ZXI6IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgcHJpdmF0ZSBfZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9lbnRlcmVkVGV4dDogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgZm9yY2VDbGVhclN1YnNjcmlwdGlvbjogYW55O1xuICBwcml2YXRlIHBlcmNlbnRDaGFuZ2VTdWJzY3JpcHRpb246IGFueTtcbiAgcHJpdmF0ZSB2YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbjogYW55O1xuICBwcml2YXRlIGRhdGVDaGFuZ2VTdWJzY3JpcHRpb246IGFueTtcbiAgcHJpdmF0ZSBfc2hvd0NvdW50OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgY2hhcmFjdGVyQ291bnRGaWVsZDogc3RyaW5nO1xuICBwcml2YXRlIG1heExlbmd0aE1ldEVycm9yZmllbGRzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIHN0YXR1c0NoYW5nZVN1YnNjcmlwdGlvbjogYW55O1xuXG4gIHRlbXBsYXRlczogYW55ID0ge307XG4gIHRlbXBsYXRlQ29udGV4dDogYW55O1xuICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGF0ZUZvcm1hdFNlcnZpY2U6IERhdGVGb3JtYXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmllbGRJbnRlcmFjdGlvbkFwaTogRmllbGRJbnRlcmFjdGlvbkFwaSxcbiAgICBwcml2YXRlIHRlbXBsYXRlU2VydmljZTogTm92b1RlbXBsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZyA9ICdlbi1VUycsXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnQpO1xuICB9XG5cbiAgZ2V0IG1heGxlbmd0aE1ldEZpZWxkKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMgJiYgdGhpcy5tYXhMZW5ndGhNZXRFcnJvcmZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1heExlbmd0aE1ldEVycm9yZmllbGRzLmZpbmQoKGZpZWxkOiBzdHJpbmcpID0+IGZpZWxkID09PSB0aGlzLmZvY3VzZWRGaWVsZCkgfHwgJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICBnZXQgbWF4bGVuZ3RoRXJyb3JGaWVsZCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmVycm9ycyAmJiB0aGlzLmVycm9ycy5tYXhsZW5ndGhGaWVsZHMgJiYgdGhpcy5lcnJvcnMubWF4bGVuZ3RoRmllbGRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLm1heGxlbmd0aEZpZWxkcy5maW5kKChmaWVsZDogc3RyaW5nKSA9PiBmaWVsZCA9PT0gdGhpcy5mb2N1c2VkRmllbGQpIHx8ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNob3dGaWVsZE1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuICF0aGlzLmVycm9ycyAmJiAhdGhpcy5tYXhMZW5ndGhNZXQgJiYgSGVscGVycy5pc0JsYW5rKHRoaXMuY29udHJvbC5kZXNjcmlwdGlvbik7XG4gIH1cblxuICBnZXQgc2hvd01heExlbmd0aE1ldE1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmlzRGlydHkgJiYgdGhpcy5tYXhMZW5ndGhNZXQgJiYgdGhpcy5mb2N1c2VkICYmICghdGhpcy5lcnJvcnMgfHwgKHRoaXMuZXJyb3JzICYmICF0aGlzLmVycm9ycy5tYXhsZW5ndGgpKSkgfHxcbiAgICAgICh0aGlzLmlzRGlydHkgJiZcbiAgICAgICAgdGhpcy5tYXhsZW5ndGhNZXRGaWVsZCAmJlxuICAgICAgICB0aGlzLmZvY3VzZWQgJiZcbiAgICAgICAgKCF0aGlzLmVycm9ycyB8fCAodGhpcy5lcnJvcnMgJiYgIXRoaXMuZXJyb3JzLm1heGxlbmd0aEZpZWxkcy5pbmNsdWRlcyh0aGlzLm1heGxlbmd0aE1ldEZpZWxkKSkpKVxuICAgICk7XG4gIH1cblxuICBnZXQgc2hvd0Vycm9yU3RhdGUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmlzRGlydHkgJiYgdGhpcy5lcnJvcnMpIHx8XG4gICAgICAodGhpcy5mb2N1c2VkICYmIHRoaXMuZXJyb3JzICYmIHRoaXMuZXJyb3JzLm1heGxlbmd0aCAmJiB0aGlzLmVycm9ycy5tYXhsZW5ndGhGaWVsZHMpIHx8XG4gICAgICAodGhpcy5mb2N1c2VkICYmIHRoaXMuZXJyb3JzICYmIHRoaXMuZXJyb3JzLm1heGxlbmd0aCAmJiB0aGlzLmVycm9ycy5tYXhsZW5ndGhGaWVsZHMgJiYgdGhpcy5tYXhsZW5ndGhFcnJvckZpZWxkKVxuICAgICk7XG4gIH1cblxuICBnZXQgc2hvd0NvdW50KCkge1xuICAgIGNvbnN0IE1BWF9MRU5HVEhfQ09OVFJPTF9UWVBFUzogc3RyaW5nW10gPSBbJ3RleHRib3gnLCAncGlja2VyJywgJ3RleHQtYXJlYSddO1xuICAgIGNvbnN0IGNoYXJDb3VudDogYm9vbGVhbiA9XG4gICAgICB0aGlzLmZvY3VzZWQgJiZcbiAgICAgICEhdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCAmJlxuICAgICAgTUFYX0xFTkdUSF9DT05UUk9MX1RZUEVTLmluY2x1ZGVzKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSk7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dDb3VudCB8fCBjaGFyQ291bnQ7XG4gIH1cblxuICBzZXQgc2hvd0NvdW50KHZhbHVlKSB7XG4gICAgdGhpcy5fc2hvd0NvdW50ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgc2hvd01lc3NhZ2VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnNob3dDb3VudCB8fFxuICAgICAgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ud2FybmluZykgfHxcbiAgICAgICFIZWxwZXJzLmlzRW1wdHkodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmRlc2NyaXB0aW9uKVxuICAgICk7XG4gIH1cblxuICBnZXQgZGVjaW1hbFNlcGFyYXRvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5sb2NhbGUpLmZvcm1hdCgxLjIpWzFdO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IERPX05PVF9GT0NVU19NRTogc3RyaW5nW10gPSBbJ3BpY2tlcicsICd0aW1lJywgJ2RhdGUnLCAnZGF0ZS10aW1lJ107XG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzICYmICFET19OT1RfRk9DVVNfTUUuaW5jbHVkZXModGhpcy5jb250cm9sLmNvbnRyb2xUeXBlKSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0OiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAvLyBTdWJzY3JpYmUgdG8gY29udHJvbCBpbnRlcmFjdGlvbnNcbiAgICBpZiAodGhpcy5jb250cm9sLmludGVyYWN0aW9ucyAmJiAhdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGZvciAoY29uc3QgaW50ZXJhY3Rpb24gb2YgdGhpcy5jb250cm9sLmludGVyYWN0aW9ucykge1xuICAgICAgICBzd2l0Y2ggKGludGVyYWN0aW9uLmV2ZW50KSB7XG4gICAgICAgICAgY2FzZSAnYmx1cic6XG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5vbkJsdXIucGlwZShkZWJvdW5jZVRpbWUoMzAwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdmb2N1cyc6XG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5vbkZvY3VzLnBpcGUoZGVib3VuY2VUaW1lKDMwMCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2hhbmdlJzpcbiAgICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsdWVDaGFuZ2VzLnBpcGUoZGVib3VuY2VUaW1lKDMwMCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW5pdCc6XG4gICAgICAgICAgICBpbnRlcmFjdGlvbi5pbnZva2VPbkluaXQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnRlcmFjdGlvbi5pbnZva2VPbkluaXQpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbiwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy50ZW1wbGF0ZXMgPSB0aGlzLnRlbXBsYXRlU2VydmljZS5nZXRBbGwoKTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgLy8gTWFrZSBzdXJlIHRvIGluaXRpYWxseSBmb3JtYXQgdGhlIHRpbWUgY29udHJvbHNcbiAgICBpZiAodGhpcy5jb250cm9sICYmIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWx1ZSkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICd0ZXh0Ym94JyB8fFxuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICd0ZXh0LWFyZWEnXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5pdGVtQ291bnQgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsdWUubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5jb250cm9sKSB7XG4gICAgICAvLyBMaXN0ZW4gdG8gY2xlYXIgZXZlbnRzXG4gICAgICB0aGlzLmZvcmNlQ2xlYXJTdWJzY3JpcHRpb24gPSB0aGlzLmNvbnRyb2wuZm9yY2VDbGVhci5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNsZWFyVmFsdWUoKTtcbiAgICAgIH0pO1xuICAgICAgLy8gRm9yIEFzeW5jaHJvbm91cyB2YWxpZGF0aW9uc1xuICAgICAgdGhpcy5zdGF0dXNDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbGlkaXR5KSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XSA9IHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdDtcbiAgICAgICAgaWYgKHZhbGlkaXR5ICE9PSAnUEVORElORycgJiYgdGhpcy5mb3JtLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkpIHtcbiAgICAgICAgICB0aGlzLmZvcm0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQgPSB7XG4gICAgICAkaW1wbGljaXQ6IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgcmVzdHJpY3RLZXlzOiB0aGlzLnJlc3RyaWN0S2V5cy5iaW5kKHRoaXMpLFxuICAgICAgICBlbWl0Q2hhbmdlOiB0aGlzLmVtaXRDaGFuZ2UuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlRm9jdXM6IHRoaXMuaGFuZGxlRm9jdXMuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlUGVyY2VudENoYW5nZTogdGhpcy5oYW5kbGVQZXJjZW50Q2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZUJsdXI6IHRoaXMuaGFuZGxlQmx1ci5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVUZXh0QXJlYUlucHV0OiB0aGlzLmhhbmRsZVRleHRBcmVhSW5wdXQuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlRWRpdDogdGhpcy5oYW5kbGVFZGl0LmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZVNhdmU6IHRoaXMuaGFuZGxlU2F2ZS5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVEZWxldGU6IHRoaXMuaGFuZGxlRGVsZXRlLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZVVwbG9hZDogdGhpcy5oYW5kbGVVcGxvYWQuYmluZCh0aGlzKSxcbiAgICAgICAgbW9kZWxDaGFuZ2U6IHRoaXMubW9kZWxDaGFuZ2UuYmluZCh0aGlzKSxcbiAgICAgICAgbW9kZWxDaGFuZ2VXaXRoUmF3OiB0aGlzLm1vZGVsQ2hhbmdlV2l0aFJhdy5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVBZGRyZXNzQ2hhbmdlOiB0aGlzLmhhbmRsZUFkZHJlc3NDaGFuZ2UuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlVHlwaW5nOiB0aGlzLmhhbmRsZVR5cGluZy5iaW5kKHRoaXMpLFxuICAgICAgICB1cGRhdGVWYWxpZGl0eTogdGhpcy51cGRhdGVWYWxpZGl0eS5iaW5kKHRoaXMpLFxuICAgICAgICB0b2dnbGVBY3RpdmU6IHRoaXMudG9nZ2xlQWN0aXZlLmJpbmQodGhpcyksXG4gICAgICAgIHZhbGlkYXRlSW50ZWdlcklucHV0OiB0aGlzLnZhbGlkYXRlSW50ZWdlcklucHV0LmJpbmQodGhpcyksXG4gICAgICAgIHZhbGlkYXRlTnVtYmVyT25CbHVyOiB0aGlzLnZhbGlkYXRlTnVtYmVyT25CbHVyLmJpbmQodGhpcyksXG4gICAgICB9LFxuICAgICAgZm9ybTogdGhpcy5mb3JtLFxuICAgIH07XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnRvb2x0aXBQb3NpdGlvbiA9IHRoaXMudG9vbHRpcFBvc2l0aW9uO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC50b29sdGlwID0gdGhpcy50b29sdGlwO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC50b29sdGlwU2l6ZSA9IHRoaXMudG9vbHRpcFNpemU7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnRvb2x0aXBQcmVsaW5lID0gdGhpcy50b29sdGlwUHJlbGluZTtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQucmVtb3ZlVG9vbHRpcEFycm93ID0gdGhpcy5yZW1vdmVUb29sdGlwQXJyb3c7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnN0YXJ0dXBGb2N1cyA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zdGFydHVwRm9jdXM7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LmZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmwgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybDtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQubWluaW1hbCA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5taW5pbWFsO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5jdXJyZW5jeUZvcm1hdCA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jdXJyZW5jeUZvcm1hdDtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQucGVyY2VudFZhbHVlID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnBlcmNlbnRWYWx1ZTtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQuY29uZmlnID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbmZpZztcblxuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0gJiYgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnN1YlR5cGUgPT09ICdwZXJjZW50YWdlJykge1xuICAgICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlKSkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQucGVyY2VudFZhbHVlID0gTnVtYmVyKFxuICAgICAgICAgICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsdWUgKiAxMDApLnRvRml4ZWQoNikucmVwbGFjZSgvXFwuPzAqJC8sICcnKSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGVyY2VudENoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5kaXNwbGF5VmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodmFsdWUpICYmICFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQucGVyY2VudFZhbHVlID0gTnVtYmVyKCh2YWx1ZSAqIDEwMCkudG9GaXhlZCg2KS5yZXBsYWNlKC9cXC4/MCokLywgJycpKTtcbiAgICAgICAgfSBlbHNlIGlmIChIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnBlcmNlbnRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gVW5zdWJzY3JpYmUgZnJvbSBjb250cm9sIGludGVyYWN0aW9uc1xuICAgIGlmICh0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIC8vIGlmICh0aGlzLmRhdGVDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAvLyAgICAgdGhpcy5kYXRlQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgLy8gfVxuICAgIGlmICh0aGlzLmZvcmNlQ2xlYXJTdWJzY3JpcHRpb24pIHtcbiAgICAgIC8vIFVuLWxpc3RlbiBmb3IgY2xlYXIgZXZlbnRzXG4gICAgICB0aGlzLmZvcmNlQ2xlYXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGVyY2VudENoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgLy8gVW4tbGlzdGVuIGZvciBjbGVhciBldmVudHNcbiAgICAgIHRoaXMucGVyY2VudENoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRlQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmRhdGVDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdHVzQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN0YXR1c0NoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgZ2V0IGVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmVycm9ycztcbiAgfVxuXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsaWQ7XG4gIH1cblxuICBnZXQgaXNEaXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmRpcnR5IHx8IHRoaXMuY29udHJvbC5kaXJ0eTtcbiAgfVxuXG4gIGdldCBoYXNWYWx1ZSgpIHtcbiAgICByZXR1cm4gIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmZvcm0udmFsdWVbdGhpcy5jb250cm9sLmtleV0pO1xuICB9XG5cbiAgZ2V0IGZvY3VzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWQ7XG4gIH1cblxuICBnZXQgdG9vbHRpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXA7XG4gIH1cblxuICBnZXQgdG9vbHRpcFBvc2l0aW9uKCkge1xuICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBQb3NpdGlvbikpIHtcbiAgICAgIHJldHVybiAncmlnaHQnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBQb3NpdGlvbjtcbiAgfVxuXG4gIGdldCB0b29sdGlwU2l6ZSgpIHtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS50b29sdGlwU2l6ZSkpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS50b29sdGlwU2l6ZTtcbiAgfVxuXG4gIGdldCB0b29sdGlwUHJlbGluZSgpIHtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS50b29sdGlwUHJlbGluZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS50b29sdGlwUHJlbGluZTtcbiAgfVxuXG4gIGdldCByZW1vdmVUb29sdGlwQXJyb3coKSB7XG4gICAgaWYgKEhlbHBlcnMuaXNCbGFuayh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmVtb3ZlVG9vbHRpcEFycm93KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJlbW92ZVRvb2x0aXBBcnJvdztcbiAgfVxuXG4gIGdldCBhbHdheXNBY3RpdmUoKSB7XG4gICAgLy8gQ29udHJvbHMgdGhhdCBoYXZlIHRoZSBsYWJlbCBhY3RpdmUgaWYgdGhlcmUgaXMgYW55IHVzZXIgZW50ZXJlZCB0ZXh0IGluIHRoZSBmaWVsZFxuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICdwaWNrZXInICYmIHRoaXMuX2VudGVyZWRUZXh0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gQ29udHJvbHMgdGhhdCBhbHdheXMgaGF2ZSB0aGUgbGFiZWwgYWN0aXZlXG4gICAgcmV0dXJuIChcbiAgICAgIFtcbiAgICAgICAgJ3RpbGVzJyxcbiAgICAgICAgJ2NoZWNrbGlzdCcsXG4gICAgICAgICdjaGVja2JveCcsXG4gICAgICAgICdkYXRlJyxcbiAgICAgICAgJ3RpbWUnLFxuICAgICAgICAnZGF0ZS10aW1lJyxcbiAgICAgICAgJ2FkZHJlc3MnLFxuICAgICAgICAnZmlsZScsXG4gICAgICAgICdlZGl0b3InLFxuICAgICAgICAnYWNlLWVkaXRvcicsXG4gICAgICAgICdyYWRpbycsXG4gICAgICAgICd0ZXh0LWFyZWEnLFxuICAgICAgICAncXVpY2stbm90ZScsXG4gICAgICBdLmluZGV4T2YodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlKSAhPT0gLTFcbiAgICApO1xuICB9XG5cbiAgZ2V0IHJlcXVpcmVzRXh0cmFTcGFjaW5nKCkge1xuICAgIC8vIENoaXBzXG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3BpY2tlcicgJiYgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm11bHRpcGxlICYmIHRoaXMuaGFzVmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBleGVjdXRlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24sIGlzSW52b2tlZE9uSW5pdCA9IGZhbHNlKSB7XG4gICAgaWYgKGludGVyYWN0aW9uLnNjcmlwdCAmJiBIZWxwZXJzLmlzRnVuY3Rpb24oaW50ZXJhY3Rpb24uc2NyaXB0KSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmllbGRJbnRlcmFjdGlvbkFwaS5mb3JtID0gdGhpcy5mb3JtO1xuICAgICAgICB0aGlzLmZpZWxkSW50ZXJhY3Rpb25BcGkuY3VycmVudEtleSA9IHRoaXMuY29udHJvbC5rZXk7XG4gICAgICAgIHRoaXMuZmllbGRJbnRlcmFjdGlvbkFwaS5pc0ludm9rZWRPbkluaXQgPSBpc0ludm9rZWRPbkluaXQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaW50ZXJhY3Rpb24uc2NyaXB0KHRoaXMuZmllbGRJbnRlcmFjdGlvbkFwaSwgdGhpcy5jb250cm9sLmtleSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuaW5mbygnRmllbGQgSW50ZXJhY3Rpb24gRXJyb3IhJywgdGhpcy5jb250cm9sLmtleSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlVHlwaW5nKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLl9mb2N1c2VkID0gZXZlbnQgJiYgZXZlbnQubGVuZ3RoO1xuICAgIHRoaXMuX2VudGVyZWRUZXh0ID0gZXZlbnQ7XG4gIH1cblxuICBoYW5kbGVGb2N1cyhldmVudDogRm9jdXNFdmVudCwgZmllbGQ/OiBhbnkpIHtcbiAgICB0aGlzLl9mb2N1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLmZvY3VzZWRGaWVsZCA9IGZpZWxkO1xuICAgIGlmICghSGVscGVycy5pc0JsYW5rKHRoaXMuY2hhcmFjdGVyQ291bnRGaWVsZCkgJiYgdGhpcy5jaGFyYWN0ZXJDb3VudEZpZWxkID09PSBmaWVsZCkge1xuICAgICAgdGhpcy5zaG93Q291bnQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICdhZGRyZXNzJyAmJlxuICAgICAgZmllbGQgJiZcbiAgICAgICFIZWxwZXJzLmlzRW1wdHkodGhpcy5mb3JtLnZhbHVlW3RoaXMuY29udHJvbC5rZXldKSAmJlxuICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLmZvcm0udmFsdWVbdGhpcy5jb250cm9sLmtleV1bZmllbGRdKVxuICAgICkge1xuICAgICAgdGhpcy5oYW5kbGVBZGRyZXNzQ2hhbmdlKHsgdmFsdWU6IHRoaXMuZm9ybS52YWx1ZVt0aGlzLmNvbnRyb2wua2V5XVtmaWVsZF0sIGZpZWxkIH0pO1xuICAgIH1cbiAgICB0aGlzLl9mb2N1c0VtaXR0ZXIuZW1pdChldmVudCk7XG4gIH1cblxuICBoYW5kbGVCbHVyKGV2ZW50OiBGb2N1c0V2ZW50KSB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9jdXNlZEZpZWxkID0gJyc7XG4gICAgdGhpcy5zaG93Q291bnQgPSBmYWxzZTtcbiAgICB0aGlzLl9ibHVyRW1pdHRlci5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIGNsZWFyVmFsdWUoKSB7XG4gICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnNldFZhbHVlKG51bGwpO1xuICAgIHRoaXMuZm9ybWF0dGVkVmFsdWUgPSBudWxsO1xuICB9XG5cbiAgaGFuZGxlVGV4dEFyZWFJbnB1dChldmVudCkge1xuICAgIHRoaXMuZW1pdENoYW5nZShldmVudCk7XG4gICAgdGhpcy5yZXN0cmljdEtleXMoZXZlbnQpO1xuICB9XG5cbiAgY2hlY2tNYXhMZW5ndGgoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5jb250cm9sICYmIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGgpIHtcbiAgICAgIHRoaXMuaXRlbUNvdW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aDtcbiAgICAgIHRoaXMubWF4TGVuZ3RoTWV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA+PSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWF4bGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIG1vZGVsQ2hhbmdlV2l0aFJhdyhldmVudCkge1xuICAgIGlmIChIZWxwZXJzLmlzRW1wdHkoZXZlbnQudmFsdWUpKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbnRlcmVkVGV4dCA9ICcnO1xuICAgIH1cbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAncGlja2VyJyAmJiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWF4bGVuZ3RoKSB7XG4gICAgICB0aGlzLml0ZW1Db3VudCA9IGV2ZW50LnZhbHVlID8gZXZlbnQudmFsdWUubGVuZ3RoIDogMDtcbiAgICAgIHRoaXMubWF4TGVuZ3RoTWV0ID0gdGhpcy5pdGVtQ291bnQgPj0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJhd1ZhbHVlID0gZXZlbnQucmF3VmFsdWU7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChldmVudC52YWx1ZSk7XG4gIH1cblxuICBtb2RlbENoYW5nZSh2YWx1ZSkge1xuICAgIGlmIChIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbnRlcmVkVGV4dCA9ICcnO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIHZhbGlkYXRlTnVtYmVyT25CbHVyKGV2ZW50OiBGb2N1c0V2ZW50KSB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9jdXNlZEZpZWxkID0gJyc7XG4gICAgdGhpcy5zaG93Q291bnQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnN1YlR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlSW50ZWdlcklucHV0KCk7XG4gICAgfVxuICAgIHRoaXMuX2JsdXJFbWl0dGVyLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgdmFsaWRhdGVJbnRlZ2VySW5wdXQoKSB7XG4gICAgY29uc3QgTlVNQkVSU19PTkxZID0gL15bXFxkXFwtXVxcZCokLztcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlICYmICFOVU1CRVJTX09OTFkudGVzdCh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsdWUpKSB7XG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWFya0FzSW52YWxpZChcbiAgICAgICAgYCR7dGhpcy5sYWJlbHMuaW52YWxpZEludGVnZXJJbnB1dH0gJHt0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubGFiZWwudG9VcHBlckNhc2UoKX1gLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXN0cmljdEtleXMoZXZlbnQpIHtcbiAgICBjb25zdCBOVU1CRVJTX09OTFkgPSAvWzAtOVxcLV0vO1xuICAgIGNvbnN0IE5VTUJFUlNfV0lUSF9ERUNJTUFMX0RPVCA9IC9bMC05XFwuXFwtXS87XG4gICAgY29uc3QgTlVNQkVSU19XSVRIX0RFQ0lNQUxfRE9UX0FORF9DT01NQSA9IC9bMC05XFwuXFwsXFwtXS87XG4gICAgY29uc3QgVVRJTElUWV9LRVlTID0gWydCYWNrc3BhY2UnLCAnRGVsZXRlJywgJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0JywgJ1RhYiddO1xuICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleTtcblxuICAgIC8vIE51bWJlcnMgb3IgbnVtYmVycyBhbmQgZGVjaW1hbCBjaGFyYWN0ZXJzIG9ubHlcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnN1YlR5cGUgPT09ICdudW1iZXInICYmICEoTlVNQkVSU19PTkxZLnRlc3Qoa2V5KSB8fCBVVElMSVRZX0tFWVMuaW5jbHVkZXMoa2V5KSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIFsnY3VycmVuY3knLCAnZmxvYXQnLCAncGVyY2VudGFnZSddLmluY2x1ZGVzKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zdWJUeXBlKSAmJlxuICAgICAgIShcbiAgICAgICAgKHRoaXMuZGVjaW1hbFNlcGFyYXRvciA9PT0gJy4nICYmIE5VTUJFUlNfV0lUSF9ERUNJTUFMX0RPVC50ZXN0KGtleSkpIHx8XG4gICAgICAgICh0aGlzLmRlY2ltYWxTZXBhcmF0b3IgPT09ICcsJyAmJiBOVU1CRVJTX1dJVEhfREVDSU1BTF9ET1RfQU5EX0NPTU1BLnRlc3Qoa2V5KSkgfHxcbiAgICAgICAgVVRJTElUWV9LRVlTLmluY2x1ZGVzKGtleSlcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIC8vIE1heCBMZW5ndGhcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCAmJiBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID49IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGgpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUGVyY2VudENoYW5nZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0Wyd2YWx1ZSddIHx8IGV2ZW50WydkYXRhJ107XG4gICAgY29uc3QgcGVyY2VudCA9IChIZWxwZXJzLmlzRW1wdHkodmFsdWUpIHx8IGlzTmFOKHZhbHVlKSkgPyB2YWx1ZSA6IE51bWJlcigodmFsdWUgLyAxMDApLnRvRml4ZWQoNikucmVwbGFjZSgvXFwuPzAqJC8sICcnKSk7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkocGVyY2VudCkpIHtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQocGVyY2VudCk7XG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc2V0VmFsdWUocGVyY2VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQobnVsbCk7XG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc2V0VmFsdWUobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlVGFiRm9yUGlja2VycyhldmVudDogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aXZlICYmIGV2ZW50ICYmIGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FU0MgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuVEFCKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlQWN0aXZlKGV2ZW50LCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZW1pdENoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIHRoaXMuY2hlY2tNYXhMZW5ndGgodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlRWRpdCh2YWx1ZSkge1xuICAgIHRoaXMuZWRpdC5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZVNhdmUodmFsdWUpIHtcbiAgICB0aGlzLnNhdmUuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVEZWxldGUodmFsdWUpIHtcbiAgICB0aGlzLmRlbGV0ZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZVVwbG9hZCh2YWx1ZSkge1xuICAgIHRoaXMudXBsb2FkLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlQWRkcmVzc0NoYW5nZShkYXRhKSB7XG4gICAgaWYgKFxuICAgICAgZGF0YSAmJlxuICAgICAgIUhlbHBlcnMuaXNCbGFuayhkYXRhLnZhbHVlKSAmJlxuICAgICAgZGF0YS5maWVsZCAmJlxuICAgICAgdGhpcy5jb250cm9sLmNvbmZpZ1tkYXRhLmZpZWxkXSAmJlxuICAgICAgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmNvbnRyb2wuY29uZmlnW2RhdGEuZmllbGRdLm1heGxlbmd0aClcbiAgICApIHtcbiAgICAgIHRoaXMuaXRlbUNvdW50ID0gZGF0YS52YWx1ZS5sZW5ndGg7XG4gICAgICB0aGlzLmNoYXJhY3RlckNvdW50RmllbGQgPSBkYXRhLmZpZWxkO1xuICAgICAgdGhpcy5tYXhMZW5ndGggPSB0aGlzLmNvbnRyb2wuY29uZmlnW2RhdGEuZmllbGRdLm1heGxlbmd0aDtcbiAgICAgIHRoaXMuc2hvd0NvdW50ID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLm1heExlbmd0aCA9PT0gdGhpcy5pdGVtQ291bnQpIHtcbiAgICAgICAgdGhpcy5tYXhMZW5ndGhNZXRFcnJvcmZpZWxkcy5wdXNoKGRhdGEuZmllbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXhMZW5ndGhNZXRFcnJvcmZpZWxkcyA9IHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMuZmlsdGVyKChmaWVsZDogc3RyaW5nKSA9PiBmaWVsZCAhPT0gZGF0YS5maWVsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVmFsaWRpdHkoc2hvdWxkRXZlbnRCZUVtaXR0ZWQpOiB2b2lkIHtcbiAgICBjb25zdCBlbWl0RXZlbnQ6IGJvb2xlYW4gPSBzaG91bGRFdmVudEJlRW1pdHRlZCA/IHRydWUgOiBmYWxzZTtcbiAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudCB9KTtcbiAgfVxufVxuIl19