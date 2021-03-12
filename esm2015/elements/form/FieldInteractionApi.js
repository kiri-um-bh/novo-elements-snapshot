/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/FieldInteractionApi.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
// APP
import { Helpers } from '../../utils/Helpers';
import { FormUtils } from '../../utils/form-utils/FormUtils';
import { NovoLabelService } from '../../services/novo-label-service';
import { NovoFormControl } from './NovoFormControl';
import { NovoModalService } from '../modal/ModalService';
import { EntityPickerResults } from '../picker/extras/entity-picker-results/EntityPickerResults';
import { NovoToastService } from '../toast/ToastService';
import { ControlConfirmModal, ControlPromptModal } from './FieldInteractionModals';
class CustomHttpImpl {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.mapFn = (/**
         * @param {?} x
         * @return {?}
         */
        (x) => x);
    }
    /**
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    get(url, options) {
        this.url = url;
        this.options = options;
        return this;
    }
    /**
     * @param {?} mapFn
     * @return {?}
     */
    map(mapFn) {
        this.mapFn = mapFn;
        return this;
    }
    /**
     * @param {?} resolve
     * @param {?=} reject
     * @return {?}
     */
    subscribe(resolve, reject) {
        return this.http
            .get(this.url, this.options)
            .pipe(map(this.mapFn))
            .subscribe(resolve, reject);
    }
}
if (false) {
    /** @type {?} */
    CustomHttpImpl.prototype.url;
    /** @type {?} */
    CustomHttpImpl.prototype.options;
    /** @type {?} */
    CustomHttpImpl.prototype.mapFn;
    /**
     * @type {?}
     * @private
     */
    CustomHttpImpl.prototype.http;
}
export class FieldInteractionApi {
    /**
     * @param {?} toaster
     * @param {?} modalService
     * @param {?} formUtils
     * @param {?} http
     * @param {?} labels
     */
    constructor(toaster, modalService, formUtils, http, labels) {
        this.toaster = toaster;
        this.modalService = modalService;
        this.formUtils = formUtils;
        this.http = http;
        this.labels = labels;
        this.getOptionsConfig = (/**
         * @param {?} args
         * @param {?=} mapper
         * @param {?=} filteredOptionsCreator
         * @param {?=} pickerConfigFormat
         * @return {?}
         */
        (args, mapper, filteredOptionsCreator, pickerConfigFormat) => {
            if (filteredOptionsCreator || 'optionsUrl' in args || 'optionsUrlBuilder' in args || 'optionsPromise' in args) {
                /** @type {?} */
                const format = ('format' in args && args.format) || pickerConfigFormat;
                return Object.assign({ options: this.createOptionsFunction(args, mapper, filteredOptionsCreator) }, ('emptyPickerMessage' in args && { emptyPickerMessage: args.emptyPickerMessage }), (format && { format }));
            }
            else if ('options' in args && Array.isArray(args.options)) {
                return {
                    options: [...args.options],
                };
            }
            else {
                return undefined;
            }
        });
        this.createOptionsFunction = (/**
         * @param {?} config
         * @param {?=} mapper
         * @param {?=} filteredOptionsCreator
         * @return {?}
         */
        (config, mapper, filteredOptionsCreator) => (/**
         * @param {?} query
         * @param {?=} page
         * @return {?}
         */
        (query, page) => {
            if ('optionsPromise' in config && config.optionsPromise) {
                return config.optionsPromise(query, new CustomHttpImpl(this.http), page);
            }
            else if (('optionsUrlBuilder' in config && config.optionsUrlBuilder) || ('optionsUrl' in config && config.optionsUrl)) {
                return new Promise((/**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */
                (resolve, reject) => {
                    /** @type {?} */
                    const url = 'optionsUrlBuilder' in config ? config.optionsUrlBuilder(query) : `${config.optionsUrl}?filter=${query || ''}`;
                    this.http
                        .get(url)
                        .pipe(map((/**
                     * @param {?} results
                     * @return {?}
                     */
                    (results) => {
                        if (mapper) {
                            return results.map(mapper);
                        }
                        return results;
                    })))
                        .subscribe(resolve, reject);
                }));
            }
            else if (filteredOptionsCreator) {
                if ('where' in config) {
                    return filteredOptionsCreator(config.where)(query, page);
                }
                else {
                    return filteredOptionsCreator()(query, page);
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    get associations() {
        return this.form.hasOwnProperty('associations') ? this.form.associations : {};
    }
    /**
     * @return {?}
     */
    get currentEntity() {
        return this.form.hasOwnProperty('currentEntity') ? this.form.currentEntity : undefined;
    }
    /**
     * @return {?}
     */
    get currentEntityId() {
        return this.form.hasOwnProperty('currentEntityId') ? this.form.currentEntityId : undefined;
    }
    /**
     * @return {?}
     */
    get isEdit() {
        return this.form.hasOwnProperty('edit') ? this.form.edit : false;
    }
    /**
     * @return {?}
     */
    get isAdd() {
        return this.form.hasOwnProperty('edit') ? !this.form.edit : false;
    }
    /**
     * @param {?} globals
     * @return {?}
     */
    set globals(globals) {
        this._globals = globals;
    }
    /**
     * @return {?}
     */
    get globals() {
        return this._globals;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    set currentKey(key) {
        this._currentKey = key;
    }
    /**
     * @return {?}
     */
    get currentKey() {
        return this._currentKey;
    }
    /**
     * @return {?}
     */
    isActiveControlValid() {
        return !!this.getValue(this.currentKey);
    }
    /**
     * @return {?}
     */
    getActiveControl() {
        return this.getControl(this.currentKey);
    }
    /**
     * @return {?}
     */
    getActiveKey() {
        return this.currentKey;
    }
    /**
     * @return {?}
     */
    getActiveValue() {
        return this.getValue(this.currentKey);
    }
    /**
     * @return {?}
     */
    getActiveInitialValue() {
        return this.getInitialValue(this.currentKey);
    }
    /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    getFieldSet(key, otherForm) {
        if (!key) {
            console.error('[FieldInteractionAPI] - invalid or missing "key"'); // tslint:disable-line
            return null;
        }
        /** @type {?} */
        const form = otherForm || this.form;
        /** @type {?} */
        const fieldSet = form.fieldsets.find((/**
         * @param {?} fs
         * @return {?}
         */
        (fs) => fs.key && fs.key.toLowerCase() === key.toLowerCase()));
        if (!fieldSet) {
            console.error('[FieldInteractionAPI] - could not find a fieldset in the form by the key --', key); // tslint:disable-line
            return null;
        }
        return (/** @type {?} */ (fieldSet));
    }
    /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    getControl(key, otherForm) {
        if (!key) {
            console.error('[FieldInteractionAPI] - invalid or missing "key"'); // tslint:disable-line
            return null;
        }
        /** @type {?} */
        const form = otherForm || this.form;
        /** @type {?} */
        const control = (/** @type {?} */ (form.controls[key]));
        if (!control) {
            console.error('[FieldInteractionAPI] - could not find a control in the form by the key --', key); // tslint:disable-line
            return null;
        }
        return control;
    }
    /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    getFormGroupArray(key, otherForm) {
        if (!key) {
            console.error('[FieldInteractionAPI] - invalid or missing "key"'); // tslint:disable-line
            return null;
        }
        /** @type {?} */
        const form = otherForm || this.form;
        /** @type {?} */
        const formArray = (/** @type {?} */ (form.controls[key]));
        if (!formArray || !formArray.controls) {
            console.error('[FieldInteractionAPI] - could not find a form array in the form by the key --', key); // tslint:disable-line
            return null;
        }
        return (/** @type {?} */ (formArray.controls));
    }
    /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    getValue(key, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control) {
            return control.value;
        }
        return null;
    }
    /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    getRawValue(key, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control) {
            return control.rawValue;
        }
        return null;
    }
    /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    getInitialValue(key, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control) {
            return control.initialValue;
        }
        return null;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    setValue(key, value, options, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.setValue(value, options);
            this.triggerEvent({ controlKey: key, prop: 'value', value }, otherForm);
        }
    }
    /**
     * @param {?} key
     * @param {?} value
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    patchValue(key, value, options, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.setValue(value, options);
            this.triggerEvent({ controlKey: key, prop: 'value', value }, otherForm);
        }
    }
    /**
     * @param {?} key
     * @param {?} isReadOnly
     * @param {?=} otherForm
     * @return {?}
     */
    setReadOnly(key, isReadOnly, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.setReadOnly(isReadOnly);
            this.triggerEvent({ controlKey: key, prop: 'readOnly', value: isReadOnly }, otherForm);
        }
    }
    /**
     * @param {?} key
     * @param {?} required
     * @param {?=} otherForm
     * @return {?}
     */
    setRequired(key, required, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.setRequired(required);
            this.triggerEvent({ controlKey: key, prop: 'required', value: required }, otherForm);
        }
    }
    /**
     * @param {?} key
     * @param {?=} clearValue
     * @param {?=} otherForm
     * @return {?}
     */
    hide(key, clearValue = true, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.hide(clearValue);
            this.disable(key, { emitEvent: false });
            this.triggerEvent({ controlKey: key, prop: 'hidden', value: true }, otherForm);
        }
        return control;
    }
    /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    show(key, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.show();
            this.enable(key, { emitEvent: false });
            this.triggerEvent({ controlKey: key, prop: 'hidden', value: false }, otherForm);
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    hideFieldSetHeader(key) {
        /** @type {?} */
        const fieldSet = this.getFieldSet(key);
        if (fieldSet) {
            fieldSet.hidden = true;
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    showFieldSetHeader(key) {
        /** @type {?} */
        const fieldSet = this.getFieldSet(key);
        if (fieldSet) {
            fieldSet.hidden = false;
        }
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    disable(key, options, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.disable(options);
            this.triggerEvent({ controlKey: key, prop: 'readOnly', value: true }, otherForm);
        }
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    enable(key, options, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.enable(options);
            this.triggerEvent({ controlKey: key, prop: 'readOnly', value: false }, otherForm);
        }
    }
    /**
     * @param {?} key
     * @param {?=} validationMessage
     * @param {?=} otherForm
     * @return {?}
     */
    markAsInvalid(key, validationMessage, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control) {
            if (control && !control.restrictFieldInteractions) {
                control.markAsInvalid(validationMessage);
                this.triggerEvent({ controlKey: key, prop: 'errors', value: validationMessage }, otherForm);
            }
        }
    }
    /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    markAsValid(key, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control) {
            if (control && !control.restrictFieldInteractions) {
                control.markAsValid();
                this.triggerEvent({ controlKey: key, prop: 'errors', value: null }, otherForm);
            }
        }
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    markAsDirty(key, options, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.markAsDirty(options);
        }
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    markAsPending(key, options, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.markAsPending(options);
        }
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    markAsPristine(key, options, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.markAsPristine(options);
        }
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    markAsTouched(key, options, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.markAsTouched(options);
        }
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    markAsUntouched(key, options, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.markAsUntouched(options);
        }
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    updateValueAndValidity(key, options, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.updateValueAndValidity(options);
        }
    }
    /**
     * @param {?} toastConfig
     * @return {?}
     */
    displayToast(toastConfig) {
        if (this.toaster) {
            this.toaster.alert(toastConfig);
        }
    }
    /**
     * @param {?} key
     * @param {?} tip
     * @param {?=} icon
     * @param {?=} allowDismiss
     * @param {?=} sanitize
     * @param {?=} otherForm
     * @return {?}
     */
    displayTip(key, tip, icon, allowDismiss, sanitize, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.tipWell = {
                tip,
                icon,
                button: allowDismiss,
                sanitize: sanitize !== false,
            };
            this.triggerEvent({ controlKey: key, prop: 'tipWell', value: tip }, otherForm);
        }
    }
    /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    clearTip(key, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.tipWell = null;
            this.triggerEvent({ controlKey: key, prop: 'tipWell', value: null }, otherForm);
        }
    }
    /**
     * @param {?} key
     * @param {?} tooltip
     * @param {?=} otherForm
     * @return {?}
     */
    setTooltip(key, tooltip, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.tooltip = tooltip;
            if (tooltip.length >= 40 && tooltip.length <= 400) {
                control.tooltipSize = 'large';
                control.tooltipPreline = true;
            }
            else if (tooltip.length > 400) {
                control.tooltipSize = 'extra-large';
            }
            this.triggerEvent({ controlKey: key, prop: 'tooltip', value: tooltip }, otherForm);
        }
    }
    /**
     * @param {?} key
     * @param {?=} message
     * @return {?}
     */
    confirmChanges(key, message) {
        /** @type {?} */
        const history = this.getProperty(key, 'valueHistory');
        /** @type {?} */
        const oldValue = history[history.length - 2];
        /** @type {?} */
        const newValue = this.getValue(key);
        /** @type {?} */
        const label = this.getProperty(key, 'label');
        ((/** @type {?} */ (document.activeElement))).blur();
        return this.modalService.open(ControlConfirmModal, { oldValue, newValue, label, message, key }).onClosed.then((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            if (!result) {
                this.setValue(key, oldValue, { emitEvent: false });
            }
        }));
    }
    /**
     * @param {?} key
     * @param {?} changes
     * @return {?}
     */
    promptUser(key, changes) {
        ((/** @type {?} */ (document.activeElement))).blur();
        return this.modalService.open(ControlPromptModal, { changes, key }).onClosed;
    }
    /**
     * @param {?} key
     * @param {?} prop
     * @param {?} value
     * @param {?=} otherForm
     * @return {?}
     */
    setProperty(key, prop, value, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control[prop] = value;
            this.triggerEvent({ controlKey: key, prop, value }, otherForm);
        }
    }
    /**
     * @param {?} key
     * @param {?} prop
     * @param {?=} otherForm
     * @return {?}
     */
    getProperty(key, prop, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            return control[prop];
        }
        return null;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    isValueEmpty(key) {
        /** @type {?} */
        const value = this.getValue(key);
        return Helpers.isEmpty(value);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    isValueBlank(key) {
        /** @type {?} */
        const value = this.getValue(key);
        return Helpers.isBlank(value);
    }
    /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    hasField(key, otherForm) {
        /** @type {?} */
        const form = otherForm || this.form;
        return !!form.controls[key];
    }
    /**
     * @param {?} key
     * @param {?} newOption
     * @param {?=} otherForm
     * @return {?}
     */
    addStaticOption(key, newOption, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        /** @type {?} */
        let optionToAdd = newOption;
        /** @type {?} */
        let isUnique = true;
        if (control && !control.restrictFieldInteractions) {
            /** @type {?} */
            let currentOptions = this.getProperty(key, 'options');
            if (!currentOptions || !currentOptions.length) {
                /** @type {?} */
                const config = this.getProperty(key, 'config');
                if (config) {
                    currentOptions = config.options;
                    if (currentOptions && Array.isArray(currentOptions)) {
                        if (currentOptions[0].value && !optionToAdd.value) {
                            optionToAdd = { value: newOption, label: newOption };
                        }
                        config.options = [...currentOptions, optionToAdd];
                        this.setProperty(key, 'config', config);
                    }
                }
            }
            else {
                if (currentOptions[0].value && !optionToAdd.value) {
                    optionToAdd = { value: newOption, label: newOption };
                }
                // Ensure duplicate values are not added
                currentOptions.forEach((/**
                 * @param {?} option
                 * @return {?}
                 */
                (option) => {
                    if ((option.value && option.value === optionToAdd.value) || option === optionToAdd) {
                        isUnique = false;
                    }
                }));
                if (isUnique) {
                    this.setProperty(key, 'options', [...currentOptions, optionToAdd]);
                }
            }
            if (isUnique) {
                this.triggerEvent({ controlKey: key, prop: 'options', value: [...currentOptions, optionToAdd] }, otherForm);
            }
        }
    }
    /**
     * @param {?} key
     * @param {?} optionToRemove
     * @param {?=} otherForm
     * @return {?}
     */
    removeStaticOption(key, optionToRemove, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            /** @type {?} */
            let currentOptions = this.getProperty(key, 'options');
            if (!currentOptions || !currentOptions.length) {
                /** @type {?} */
                const config = this.getProperty(key, 'config');
                if (config) {
                    currentOptions = config.options;
                    if (currentOptions && Array.isArray(currentOptions)) {
                        /** @type {?} */
                        let index = -1;
                        currentOptions.forEach((/**
                         * @param {?} opt
                         * @param {?} i
                         * @return {?}
                         */
                        (opt, i) => {
                            if (opt.value || opt.label) {
                                if (opt.value === optionToRemove || opt.label === optionToRemove) {
                                    index = i;
                                }
                            }
                            else {
                                if (opt === optionToRemove) {
                                    index = i;
                                }
                            }
                        }));
                        if (index !== -1) {
                            currentOptions.splice(index, 1);
                        }
                        config.options = [...currentOptions];
                        this.setProperty(key, 'config', config);
                    }
                }
            }
            else {
                /** @type {?} */
                let index = -1;
                currentOptions.forEach((/**
                 * @param {?} opt
                 * @param {?} i
                 * @return {?}
                 */
                (opt, i) => {
                    if (opt.value || opt.label) {
                        if (opt.value === optionToRemove || opt.label === optionToRemove) {
                            index = i;
                        }
                    }
                    else {
                        if (opt === optionToRemove) {
                            index = i;
                        }
                    }
                }));
                if (index !== -1) {
                    currentOptions.splice(index, 1);
                }
                this.setProperty(key, 'options', [...currentOptions]);
            }
            this.triggerEvent({ controlKey: key, prop: 'options', value: control.options }, otherForm);
        }
    }
    /**
     * @param {?} key
     * @param {?} config
     * @param {?=} mapper
     * @return {?}
     */
    modifyPickerConfig(key, config, mapper) {
        // call another method to avoid a breaking change but still enable stricter types
        this.mutatePickerConfig(key, (/** @type {?} */ (config)), mapper);
    }
    /**
     * @param {?} key
     * @param {?} args
     * @param {?=} mapper
     * @param {?=} otherForm
     * @return {?}
     */
    mutatePickerConfig(key, args, mapper, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            const { minSearchLength, enableInfiniteScroll, filteredOptionsCreator, format, getLabels, emptyPickerMessage } = control.config;
            /** @type {?} */
            const optionsConfig = this.getOptionsConfig(args, mapper, filteredOptionsCreator, format);
            /** @type {?} */
            const newConfig = Object.assign({}, (emptyPickerMessage && { emptyPickerMessage }), (Number.isInteger(minSearchLength) && { minSearchLength }), (enableInfiniteScroll && { enableInfiniteScroll }), (filteredOptionsCreator && { filteredOptionsCreator }), (getLabels && { getLabels }), (optionsConfig && optionsConfig), { resultsTemplate: control.config.resultsTemplate || ('resultsTemplateType' in args && this.getAppropriateResultsTemplate(args.resultsTemplateType)) });
            this.setProperty(key, 'config', newConfig);
            this.triggerEvent({ controlKey: key, prop: 'pickerConfig', value: args }, otherForm);
        }
    }
    /**
     * @param {?} key
     * @param {?} properties
     * @param {?=} otherForm
     * @return {?}
     */
    addPropertiesToPickerConfig(key, properties, otherForm) {
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (!control || control.restrictFieldInteractions) {
            return;
        }
        /** @type {?} */
        const config = Object.assign({}, control.config, properties);
        this.setProperty(key, 'config', config);
        this.triggerEvent({ controlKey: key, prop: 'pickerConfig', value: properties }, otherForm);
    }
    /**
     * @private
     * @param {?} resultsTemplateType
     * @return {?}
     */
    getAppropriateResultsTemplate(resultsTemplateType) {
        switch (resultsTemplateType) {
            case 'entity-picker':
                return EntityPickerResults;
            default:
                return undefined;
        }
    }
    /**
     * @param {?} key
     * @param {?} loading
     * @param {?=} otherForm
     * @return {?}
     */
    setLoading(key, loading, otherForm) {
        /** @type {?} */
        const form = otherForm || this.form;
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            if (loading) {
                form.controls[key].fieldInteractionloading = true;
                control.setErrors({ loading: true });
                // History
                clearTimeout(this.asyncBlockTimeout);
                this.asyncBlockTimeout = setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.setLoading(key, false);
                    this.displayTip(key, this.labels.asyncFailure, 'info', false);
                    this.setProperty(key, '_displayedAsyncFailure', true);
                }), 10000);
            }
            else {
                form.controls[key].fieldInteractionloading = false;
                clearTimeout(this.asyncBlockTimeout);
                control.setErrors({ loading: null });
                control.updateValueAndValidity({ emitEvent: false });
                if (this.getProperty(key, '_displayedAsyncFailure')) {
                    this.setProperty(key, 'tipWell', null);
                }
            }
            this.triggerEvent({ controlKey: key, prop: 'loading', value: loading }, otherForm);
        }
    }
    /**
     * @param {?} key
     * @param {?} metaForNewField
     * @param {?=} position
     * @param {?=} initialValue
     * @param {?=} otherForm
     * @return {?}
     */
    addControl(key, metaForNewField, position = FieldInteractionApi.FIELD_POSITIONS.ABOVE_FIELD, initialValue, otherForm) {
        if (!metaForNewField.key && !metaForNewField.name) {
            console.error('[FieldInteractionAPI] - missing "key" in meta for new field'); // tslint:disable-line
            return null;
        }
        if (!metaForNewField.key) {
            // If key is not explicitly declared, use name as key
            metaForNewField.key = metaForNewField.name;
        }
        /** @type {?} */
        const form = otherForm || this.form;
        if (form.controls[metaForNewField.key]) {
            // Field is already on the form
            return null;
        }
        /** @type {?} */
        const control = form.controls[key];
        /** @type {?} */
        let fieldsetIndex;
        /** @type {?} */
        let controlIndex;
        if (control) {
            fieldsetIndex = -1;
            controlIndex = -1;
            form.fieldsets.forEach((/**
             * @param {?} fieldset
             * @param {?} fi
             * @return {?}
             */
            (fieldset, fi) => {
                fieldset.controls.forEach((/**
                 * @param {?} fieldsetControl
                 * @param {?} ci
                 * @return {?}
                 */
                (fieldsetControl, ci) => {
                    if (fieldsetControl.key === key) {
                        fieldsetIndex = fi;
                        controlIndex = ci;
                    }
                }));
            }));
            // Change the position of the newly added field
            switch (position) {
                case FieldInteractionApi.FIELD_POSITIONS.ABOVE_FIELD:
                    // Adding field above active field
                    // index can stay the same
                    break;
                case FieldInteractionApi.FIELD_POSITIONS.BELOW_FIELD:
                    // Adding field below active field
                    controlIndex += 1;
                    break;
                case FieldInteractionApi.FIELD_POSITIONS.TOP_OF_FORM:
                    // Adding field to the top of the form
                    controlIndex = 0;
                    fieldsetIndex = 0;
                    break;
                case FieldInteractionApi.FIELD_POSITIONS.BOTTOM_OF_FORM:
                    // Adding field to the bottom of the form
                    fieldsetIndex = form.fieldsets.length - 1;
                    controlIndex = form.fieldsets[fieldsetIndex].controls.length;
                    break;
                default:
                    break;
            }
            if (fieldsetIndex !== -1 && controlIndex !== -1) {
                /** @type {?} */
                const novoControl = this.formUtils.getControlForField(metaForNewField, this.http, {});
                novoControl.hidden = false;
                /** @type {?} */
                const formControl = new NovoFormControl(initialValue, novoControl);
                form.addControl(novoControl.key, formControl);
                form.fieldsets[fieldsetIndex].controls.splice(controlIndex, 0, novoControl);
                this.triggerEvent({ controlKey: key, prop: 'addControl', value: formControl }, otherForm);
            }
        }
    }
    /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    removeControl(key, otherForm) {
        /** @type {?} */
        const form = otherForm || this.form;
        if (!form.controls[key]) {
            // Field is not on the form
            return null;
        }
        /** @type {?} */
        const control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            /** @type {?} */
            let fieldsetIndex = -1;
            /** @type {?} */
            let controlIndex = -1;
            form.fieldsets.forEach((/**
             * @param {?} fieldset
             * @param {?} fi
             * @return {?}
             */
            (fieldset, fi) => {
                fieldset.controls.forEach((/**
                 * @param {?} fieldsetControl
                 * @param {?} ci
                 * @return {?}
                 */
                (fieldsetControl, ci) => {
                    if (fieldsetControl.key === key) {
                        fieldsetIndex = fi;
                        controlIndex = ci;
                    }
                }));
            }));
            if (fieldsetIndex !== -1 && controlIndex !== -1) {
                form.removeControl(key);
                form.fieldsets[fieldsetIndex].controls.splice(controlIndex, 1);
                this.triggerEvent({ controlKey: key, prop: 'removeControl', value: key }, otherForm);
            }
        }
    }
    /**
     * @param {?} func
     * @param {?=} wait
     * @return {?}
     */
    debounce(func, wait = 50) {
        /** @type {?} */
        let h;
        clearTimeout(h);
        h = setTimeout((/**
         * @return {?}
         */
        () => func()), wait);
    }
    /**
     * Allows traversing nested forms by accessing the parent form.
     *
     * @param {?=} otherForm optional parameter for getting the parent of a different form.
     * If not provided will default to the parent of the current form.
     * @return {?}
     */
    getParent(otherForm) {
        /** @type {?} */
        const form = otherForm || this.form;
        return form.parent;
    }
    /**
     * The index is assigned as a property on the form's associations object when the form is part of a NovoControlGroup array.
     *
     * @param {?=} otherForm optional parameter for getting the index of a different form. If not provided will default to the current form.
     * @return {?} the index if it exists for the current or form, or null otherwise.
     */
    getIndex(otherForm) {
        /** @type {?} */
        const form = otherForm || this.form;
        return (form.associations && form.associations.hasOwnProperty('index')) ? form.associations.index : null;
    }
    /**
     * @private
     * @param {?} event
     * @param {?=} otherForm
     * @return {?}
     */
    triggerEvent(event, otherForm) {
        /** @type {?} */
        const form = otherForm || this.form;
        if (form && form.fieldInteractionEvents) {
            form.fieldInteractionEvents.emit(event);
        }
    }
}
FieldInteractionApi.FIELD_POSITIONS = {
    ABOVE_FIELD: 'ABOVE_FIELD',
    BELOW_FIELD: 'BELOW_FIELD',
    TOP_OF_FORM: 'TOP_OF_FORM',
    BOTTOM_OF_FORM: 'BOTTOM_OF_FORM',
};
FieldInteractionApi.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FieldInteractionApi.ctorParameters = () => [
    { type: NovoToastService },
    { type: NovoModalService },
    { type: FormUtils },
    { type: HttpClient },
    { type: NovoLabelService }
];
if (false) {
    /** @type {?} */
    FieldInteractionApi.FIELD_POSITIONS;
    /**
     * @type {?}
     * @private
     */
    FieldInteractionApi.prototype._globals;
    /** @type {?} */
    FieldInteractionApi.prototype.form;
    /**
     * @type {?}
     * @private
     */
    FieldInteractionApi.prototype._currentKey;
    /** @type {?} */
    FieldInteractionApi.prototype.appBridge;
    /**
     * @type {?}
     * @private
     */
    FieldInteractionApi.prototype.asyncBlockTimeout;
    /** @type {?} */
    FieldInteractionApi.prototype.getOptionsConfig;
    /** @type {?} */
    FieldInteractionApi.prototype.createOptionsFunction;
    /**
     * @type {?}
     * @private
     */
    FieldInteractionApi.prototype.toaster;
    /**
     * @type {?}
     * @private
     */
    FieldInteractionApi.prototype.modalService;
    /**
     * @type {?}
     * @private
     */
    FieldInteractionApi.prototype.formUtils;
    /**
     * @type {?}
     * @private
     */
    FieldInteractionApi.prototype.http;
    /**
     * @type {?}
     * @private
     */
    FieldInteractionApi.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGRJbnRlcmFjdGlvbkFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0ZpZWxkSW50ZXJhY3Rpb25BcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUVyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQWdCLE1BQU0sdUJBQXVCLENBQUM7QUFFdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJbkYsTUFBTSxjQUFjOzs7O0lBS2xCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsVUFBSzs7OztRQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUM7SUFFdUIsQ0FBQzs7Ozs7O0lBRXpDLEdBQUcsQ0FBQyxHQUFXLEVBQUUsT0FBUTtRQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE9BQU8s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YTtJQUMxQixjQUFjLEVBQUUsZ0JBQWdCO0NBQ2pDLENBQUM7O1lBYkgsVUFBVTs7OztZQWhDRixnQkFBZ0I7WUFGaEIsZ0JBQWdCO1lBSGhCLFNBQVM7WUFUVCxVQUFVO1lBVVYsZ0JBQWdCOzs7O0lBNEN2QixvQ0FLRTs7Ozs7SUFYRix1Q0FBaUI7O0lBQ2pCLG1DQUEwQjs7Ozs7SUFDMUIsMENBQTRCOztJQUM1Qix3Q0FBcUI7Ozs7O0lBQ3JCLGdEQUEwQjs7SUE2a0IxQiwrQ0FvQkU7O0lBV0Ysb0RBNkJFOzs7OztJQS9uQkEsc0NBQWlDOzs7OztJQUNqQywyQ0FBc0M7Ozs7O0lBQ3RDLHdDQUE0Qjs7Ozs7SUFDNUIsbUNBQXdCOzs7OztJQUN4QixxQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBWZW5kb3JcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBBcHBCcmlkZ2UgfSBmcm9tICcuLi8uLi91dGlscy9hcHAtYnJpZGdlL0FwcEJyaWRnZSc7XG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtLXV0aWxzL0Zvcm1VdGlscyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9Gb3JtQ29udHJvbCB9IGZyb20gJy4vTm92b0Zvcm1Db250cm9sJztcbmltcG9ydCB7IE5vdm9Nb2RhbFNlcnZpY2UgfSBmcm9tICcuLi9tb2RhbC9Nb2RhbFNlcnZpY2UnO1xuaW1wb3J0IHsgRW50aXR5UGlja2VyUmVzdWx0cyB9IGZyb20gJy4uL3BpY2tlci9leHRyYXMvZW50aXR5LXBpY2tlci1yZXN1bHRzL0VudGl0eVBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgTm92b1RvYXN0U2VydmljZSwgVG9hc3RPcHRpb25zIH0gZnJvbSAnLi4vdG9hc3QvVG9hc3RTZXJ2aWNlJztcbmltcG9ydCB7IEN1c3RvbUh0dHAsIE1vZGlmeVBpY2tlckNvbmZpZ0FyZ3MsIE9wdGlvbnNGdW5jdGlvbiB9IGZyb20gJy4vRmllbGRJbnRlcmFjdGlvbkFwaVR5cGVzJztcbmltcG9ydCB7IENvbnRyb2xDb25maXJtTW9kYWwsIENvbnRyb2xQcm9tcHRNb2RhbCB9IGZyb20gJy4vRmllbGRJbnRlcmFjdGlvbk1vZGFscyc7XG5pbXBvcnQgeyBOb3ZvQ29udHJvbENvbmZpZyB9IGZyb20gJy4vRm9ybUNvbnRyb2xzJztcbmltcG9ydCB7IElGaWVsZEludGVyYWN0aW9uRXZlbnQsIE5vdm9GaWVsZHNldCwgTm92b0Zvcm1Hcm91cCwgUmVzdWx0c1RlbXBsYXRlVHlwZSB9IGZyb20gJy4vRm9ybUludGVyZmFjZXMnO1xuXG5jbGFzcyBDdXN0b21IdHRwSW1wbCBpbXBsZW1lbnRzIEN1c3RvbUh0dHAge1xuICB1cmw6IHN0cmluZztcbiAgb3B0aW9ucztcbiAgbWFwRm4gPSAoeCkgPT4geDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIGdldCh1cmw6IHN0cmluZywgb3B0aW9ucz8pOiBDdXN0b21IdHRwIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbWFwKG1hcEZuKTogQ3VzdG9tSHR0cCB7XG4gICAgdGhpcy5tYXBGbiA9IG1hcEZuO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3Vic2NyaWJlKHJlc29sdmUsIHJlamVjdD8pOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy51cmwsIHRoaXMub3B0aW9ucylcbiAgICAgIC5waXBlKG1hcCh0aGlzLm1hcEZuKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzb2x2ZSwgcmVqZWN0KTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmllbGRJbnRlcmFjdGlvbkFwaSB7XG4gIHByaXZhdGUgX2dsb2JhbHM7XG4gIGZvcm06IE5vdm9Gb3JtR3JvdXAgfCBhbnk7XG4gIHByaXZhdGUgX2N1cnJlbnRLZXk6IHN0cmluZztcbiAgYXBwQnJpZGdlOiBBcHBCcmlkZ2U7XG4gIHByaXZhdGUgYXN5bmNCbG9ja1RpbWVvdXQ7XG5cbiAgc3RhdGljIEZJRUxEX1BPU0lUSU9OUyA9IHtcbiAgICBBQk9WRV9GSUVMRDogJ0FCT1ZFX0ZJRUxEJyxcbiAgICBCRUxPV19GSUVMRDogJ0JFTE9XX0ZJRUxEJyxcbiAgICBUT1BfT0ZfRk9STTogJ1RPUF9PRl9GT1JNJyxcbiAgICBCT1RUT01fT0ZfRk9STTogJ0JPVFRPTV9PRl9GT1JNJyxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRvYXN0ZXI6IE5vdm9Ub2FzdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5vdm9Nb2RhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb3JtVXRpbHM6IEZvcm1VdGlscyxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsXG4gICkgeyB9XG5cbiAgZ2V0IGFzc29jaWF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmhhc093blByb3BlcnR5KCdhc3NvY2lhdGlvbnMnKSA/IHRoaXMuZm9ybS5hc3NvY2lhdGlvbnMgOiB7fTtcbiAgfVxuXG4gIGdldCBjdXJyZW50RW50aXR5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudEVudGl0eScpID8gdGhpcy5mb3JtLmN1cnJlbnRFbnRpdHkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgY3VycmVudEVudGl0eUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudEVudGl0eUlkJykgPyB0aGlzLmZvcm0uY3VycmVudEVudGl0eUlkIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGlzRWRpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmhhc093blByb3BlcnR5KCdlZGl0JykgPyB0aGlzLmZvcm0uZWRpdCA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGlzQWRkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0uaGFzT3duUHJvcGVydHkoJ2VkaXQnKSA/ICF0aGlzLmZvcm0uZWRpdCA6IGZhbHNlO1xuICB9XG5cbiAgc2V0IGdsb2JhbHMoZ2xvYmFscykge1xuICAgIHRoaXMuX2dsb2JhbHMgPSBnbG9iYWxzO1xuICB9XG5cbiAgZ2V0IGdsb2JhbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dsb2JhbHM7XG4gIH1cblxuICBzZXQgY3VycmVudEtleShrZXk6IHN0cmluZykge1xuICAgIHRoaXMuX2N1cnJlbnRLZXkgPSBrZXk7XG4gIH1cblxuICBnZXQgY3VycmVudEtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50S2V5O1xuICB9XG5cbiAgaXNBY3RpdmVDb250cm9sVmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5nZXRWYWx1ZSh0aGlzLmN1cnJlbnRLZXkpO1xuICB9XG5cbiAgZ2V0QWN0aXZlQ29udHJvbCgpOiBOb3ZvRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRyb2wodGhpcy5jdXJyZW50S2V5KTtcbiAgfVxuXG4gIGdldEFjdGl2ZUtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRLZXk7XG4gIH1cblxuICBnZXRBY3RpdmVWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSh0aGlzLmN1cnJlbnRLZXkpO1xuICB9XG5cbiAgZ2V0QWN0aXZlSW5pdGlhbFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEluaXRpYWxWYWx1ZSh0aGlzLmN1cnJlbnRLZXkpO1xuICB9XG5cbiAgZ2V0RmllbGRTZXQoa2V5OiBzdHJpbmcsIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXApOiBOb3ZvRmllbGRzZXQge1xuICAgIGlmICgha2V5KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRmllbGRJbnRlcmFjdGlvbkFQSV0gLSBpbnZhbGlkIG9yIG1pc3NpbmcgXCJrZXlcIicpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtID0gb3RoZXJGb3JtIHx8IHRoaXMuZm9ybTtcbiAgICBjb25zdCBmaWVsZFNldCA9IGZvcm0uZmllbGRzZXRzLmZpbmQoKGZzOiBOb3ZvRmllbGRzZXQpID0+IGZzLmtleSAmJiBmcy5rZXkudG9Mb3dlckNhc2UoKSA9PT0ga2V5LnRvTG93ZXJDYXNlKCkpO1xuICAgIGlmICghZmllbGRTZXQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tGaWVsZEludGVyYWN0aW9uQVBJXSAtIGNvdWxkIG5vdCBmaW5kIGEgZmllbGRzZXQgaW4gdGhlIGZvcm0gYnkgdGhlIGtleSAtLScsIGtleSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBmaWVsZFNldCBhcyBOb3ZvRmllbGRzZXQ7XG4gIH1cblxuICBnZXRDb250cm9sKGtleTogc3RyaW5nLCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKSB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tGaWVsZEludGVyYWN0aW9uQVBJXSAtIGludmFsaWQgb3IgbWlzc2luZyBcImtleVwiJyk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm0gPSBvdGhlckZvcm0gfHwgdGhpcy5mb3JtO1xuICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtLmNvbnRyb2xzW2tleV0gYXMgTm92b0Zvcm1Db250cm9sO1xuICAgIGlmICghY29udHJvbCkge1xuICAgICAgY29uc29sZS5lcnJvcignW0ZpZWxkSW50ZXJhY3Rpb25BUEldIC0gY291bGQgbm90IGZpbmQgYSBjb250cm9sIGluIHRoZSBmb3JtIGJ5IHRoZSBrZXkgLS0nLCBrZXkpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbDtcbiAgfVxuXG4gIGdldEZvcm1Hcm91cEFycmF5KGtleTogc3RyaW5nLCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKTogTm92b0Zvcm1Hcm91cFtdIHtcbiAgICBpZiAoIWtleSkge1xuICAgICAgY29uc29sZS5lcnJvcignW0ZpZWxkSW50ZXJhY3Rpb25BUEldIC0gaW52YWxpZCBvciBtaXNzaW5nIFwia2V5XCInKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybSA9IG90aGVyRm9ybSB8fCB0aGlzLmZvcm07XG4gICAgY29uc3QgZm9ybUFycmF5ID0gZm9ybS5jb250cm9sc1trZXldIGFzIEZvcm1BcnJheTtcbiAgICBpZiAoIWZvcm1BcnJheSB8fCAhZm9ybUFycmF5LmNvbnRyb2xzKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRmllbGRJbnRlcmFjdGlvbkFQSV0gLSBjb3VsZCBub3QgZmluZCBhIGZvcm0gYXJyYXkgaW4gdGhlIGZvcm0gYnkgdGhlIGtleSAtLScsIGtleSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtQXJyYXkuY29udHJvbHMgYXMgTm92b0Zvcm1Hcm91cFtdIHwgYW55O1xuICB9XG5cbiAgZ2V0VmFsdWUoa2V5OiBzdHJpbmcsIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXApIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSwgb3RoZXJGb3JtKTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgcmV0dXJuIGNvbnRyb2wudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0UmF3VmFsdWUoa2V5OiBzdHJpbmcsIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXApIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSwgb3RoZXJGb3JtKTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgcmV0dXJuIGNvbnRyb2wucmF3VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFZhbHVlKGtleTogc3RyaW5nLCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBjb250cm9sLmluaXRpYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzZXRWYWx1ZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICB2YWx1ZSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICAgIGVtaXRNb2RlbFRvVmlld0NoYW5nZT86IGJvb2xlYW47XG4gICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U/OiBib29sZWFuO1xuICAgIH0sXG4gICAgb3RoZXJGb3JtPzogTm92b0Zvcm1Hcm91cCxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3ZhbHVlJywgdmFsdWUgfSwgb3RoZXJGb3JtKTtcbiAgICB9XG4gIH1cblxuICBwYXRjaFZhbHVlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIHZhbHVlLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgICBlbWl0RXZlbnQ/OiBib29sZWFuO1xuICAgICAgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlPzogYm9vbGVhbjtcbiAgICAgIGVtaXRWaWV3VG9Nb2RlbENoYW5nZT86IGJvb2xlYW47XG4gICAgfSxcbiAgICBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwLFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSwgb3RoZXJGb3JtKTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnNldFZhbHVlKHZhbHVlLCBvcHRpb25zKTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAndmFsdWUnLCB2YWx1ZSB9LCBvdGhlckZvcm0pO1xuICAgIH1cbiAgfVxuXG4gIHNldFJlYWRPbmx5KGtleTogc3RyaW5nLCBpc1JlYWRPbmx5OiBib29sZWFuLCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5zZXRSZWFkT25seShpc1JlYWRPbmx5KTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAncmVhZE9ubHknLCB2YWx1ZTogaXNSZWFkT25seSB9LCBvdGhlckZvcm0pO1xuICAgIH1cbiAgfVxuXG4gIHNldFJlcXVpcmVkKGtleTogc3RyaW5nLCByZXF1aXJlZDogYm9vbGVhbiwgb3RoZXJGb3JtPzogTm92b0Zvcm1Hcm91cCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5LCBvdGhlckZvcm0pO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuc2V0UmVxdWlyZWQocmVxdWlyZWQpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdyZXF1aXJlZCcsIHZhbHVlOiByZXF1aXJlZCB9LCBvdGhlckZvcm0pO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoa2V5OiBzdHJpbmcsIGNsZWFyVmFsdWUgPSB0cnVlLCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5oaWRlKGNsZWFyVmFsdWUpO1xuICAgICAgdGhpcy5kaXNhYmxlKGtleSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdoaWRkZW4nLCB2YWx1ZTogdHJ1ZSB9LCBvdGhlckZvcm0pO1xuICAgIH1cbiAgICByZXR1cm4gY29udHJvbDtcbiAgfVxuXG4gIHNob3coa2V5OiBzdHJpbmcsIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSwgb3RoZXJGb3JtKTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnNob3coKTtcbiAgICAgIHRoaXMuZW5hYmxlKGtleSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdoaWRkZW4nLCB2YWx1ZTogZmFsc2UgfSwgb3RoZXJGb3JtKTtcbiAgICB9XG4gIH1cblxuICBoaWRlRmllbGRTZXRIZWFkZXIoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBmaWVsZFNldCA9IHRoaXMuZ2V0RmllbGRTZXQoa2V5KTtcbiAgICBpZiAoZmllbGRTZXQpIHtcbiAgICAgIGZpZWxkU2V0LmhpZGRlbiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgc2hvd0ZpZWxkU2V0SGVhZGVyKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgZmllbGRTZXQgPSB0aGlzLmdldEZpZWxkU2V0KGtleSk7XG4gICAgaWYgKGZpZWxkU2V0KSB7XG4gICAgICBmaWVsZFNldC5oaWRkZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBkaXNhYmxlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgICBlbWl0RXZlbnQ/OiBib29sZWFuO1xuICAgIH0sXG4gICAgb3RoZXJGb3JtPzogTm92b0Zvcm1Hcm91cCxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5kaXNhYmxlKG9wdGlvbnMpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdyZWFkT25seScsIHZhbHVlOiB0cnVlIH0sIG90aGVyRm9ybSk7XG4gICAgfVxuICB9XG5cbiAgZW5hYmxlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgICBlbWl0RXZlbnQ/OiBib29sZWFuO1xuICAgIH0sXG4gICAgb3RoZXJGb3JtPzogTm92b0Zvcm1Hcm91cCxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5lbmFibGUob3B0aW9ucyk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3JlYWRPbmx5JywgdmFsdWU6IGZhbHNlIH0sIG90aGVyRm9ybSk7XG4gICAgfVxuICB9XG5cbiAgbWFya0FzSW52YWxpZChrZXk6IHN0cmluZywgdmFsaWRhdGlvbk1lc3NhZ2U/OiBzdHJpbmcsIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSwgb3RoZXJGb3JtKTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgICBjb250cm9sLm1hcmtBc0ludmFsaWQodmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ2Vycm9ycycsIHZhbHVlOiB2YWxpZGF0aW9uTWVzc2FnZSB9LCBvdGhlckZvcm0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1hcmtBc1ZhbGlkKGtleTogc3RyaW5nLCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgY29udHJvbC5tYXJrQXNWYWxpZCgpO1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ2Vycm9ycycsIHZhbHVlOiBudWxsIH0sIG90aGVyRm9ybSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbWFya0FzRGlydHkoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICAgIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXAsXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5LCBvdGhlckZvcm0pO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzRGlydHkob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgbWFya0FzUGVuZGluZyhcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgIH0sXG4gICAgb3RoZXJGb3JtPzogTm92b0Zvcm1Hcm91cCxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5tYXJrQXNQZW5kaW5nKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtBc1ByaXN0aW5lKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgfSxcbiAgICBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwLFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSwgb3RoZXJGb3JtKTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLm1hcmtBc1ByaXN0aW5lKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtBc1RvdWNoZWQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICAgIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXAsXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5LCBvdGhlckZvcm0pO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZChvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBtYXJrQXNVbnRvdWNoZWQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICAgIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXAsXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5LCBvdGhlckZvcm0pO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzVW50b3VjaGVkKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgfSxcbiAgICBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwLFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSwgb3RoZXJGb3JtKTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheVRvYXN0KHRvYXN0Q29uZmlnOiBUb2FzdE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50b2FzdGVyKSB7XG4gICAgICB0aGlzLnRvYXN0ZXIuYWxlcnQodG9hc3RDb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlUaXAoa2V5OiBzdHJpbmcsIHRpcDogc3RyaW5nLCBpY29uPzogc3RyaW5nLCBhbGxvd0Rpc21pc3M/OiBib29sZWFuLCBzYW5pdGl6ZT86IGJvb2xlYW4sIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSwgb3RoZXJGb3JtKTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnRpcFdlbGwgPSB7XG4gICAgICAgIHRpcCxcbiAgICAgICAgaWNvbixcbiAgICAgICAgYnV0dG9uOiBhbGxvd0Rpc21pc3MsXG4gICAgICAgIHNhbml0aXplOiBzYW5pdGl6ZSAhPT0gZmFsc2UsIC8vIGRlZmF1bHRzIHRvIHRydWUgd2hlbiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3RpcFdlbGwnLCB2YWx1ZTogdGlwIH0sIG90aGVyRm9ybSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJUaXAoa2V5OiBzdHJpbmcsIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSwgb3RoZXJGb3JtKTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnRpcFdlbGwgPSBudWxsO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICd0aXBXZWxsJywgdmFsdWU6IG51bGwgfSwgb3RoZXJGb3JtKTtcbiAgICB9XG4gIH1cblxuICBzZXRUb29sdGlwKGtleTogc3RyaW5nLCB0b29sdGlwOiBzdHJpbmcsIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSwgb3RoZXJGb3JtKTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnRvb2x0aXAgPSB0b29sdGlwO1xuICAgICAgaWYgKHRvb2x0aXAubGVuZ3RoID49IDQwICYmIHRvb2x0aXAubGVuZ3RoIDw9IDQwMCkge1xuICAgICAgICBjb250cm9sLnRvb2x0aXBTaXplID0gJ2xhcmdlJztcbiAgICAgICAgY29udHJvbC50b29sdGlwUHJlbGluZSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHRvb2x0aXAubGVuZ3RoID4gNDAwKSB7XG4gICAgICAgIGNvbnRyb2wudG9vbHRpcFNpemUgPSAnZXh0cmEtbGFyZ2UnO1xuICAgICAgfVxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICd0b29sdGlwJywgdmFsdWU6IHRvb2x0aXAgfSwgb3RoZXJGb3JtKTtcbiAgICB9XG4gIH1cblxuICBjb25maXJtQ2hhbmdlcyhrZXk6IHN0cmluZywgbWVzc2FnZT86IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGhpc3RvcnkgPSB0aGlzLmdldFByb3BlcnR5KGtleSwgJ3ZhbHVlSGlzdG9yeScpO1xuICAgIGNvbnN0IG9sZFZhbHVlID0gaGlzdG9yeVtoaXN0b3J5Lmxlbmd0aCAtIDJdO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZXRWYWx1ZShrZXkpO1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5nZXRQcm9wZXJ0eShrZXksICdsYWJlbCcpO1xuICAgIChkb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIGFueSkuYmx1cigpO1xuICAgIHJldHVybiB0aGlzLm1vZGFsU2VydmljZS5vcGVuKENvbnRyb2xDb25maXJtTW9kYWwsIHsgb2xkVmFsdWUsIG5ld1ZhbHVlLCBsYWJlbCwgbWVzc2FnZSwga2V5IH0pLm9uQ2xvc2VkLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShrZXksIG9sZFZhbHVlLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcm9tcHRVc2VyKGtleTogc3RyaW5nLCBjaGFuZ2VzOiBzdHJpbmdbXSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIChkb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIGFueSkuYmx1cigpO1xuICAgIHJldHVybiB0aGlzLm1vZGFsU2VydmljZS5vcGVuKENvbnRyb2xQcm9tcHRNb2RhbCwgeyBjaGFuZ2VzLCBrZXkgfSkub25DbG9zZWQ7XG4gIH1cblxuICBzZXRQcm9wZXJ0eShrZXk6IHN0cmluZywgcHJvcDogc3RyaW5nLCB2YWx1ZSwgb3RoZXJGb3JtPzogTm92b0Zvcm1Hcm91cCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5LCBvdGhlckZvcm0pO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2xbcHJvcF0gPSB2YWx1ZTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wLCB2YWx1ZSB9LCBvdGhlckZvcm0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFByb3BlcnR5KGtleTogc3RyaW5nLCBwcm9wOiBzdHJpbmcsIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXApIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSwgb3RoZXJGb3JtKTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICByZXR1cm4gY29udHJvbFtwcm9wXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpc1ZhbHVlRW1wdHkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoa2V5KTtcbiAgICByZXR1cm4gSGVscGVycy5pc0VtcHR5KHZhbHVlKTtcbiAgfVxuXG4gIGlzVmFsdWVCbGFuayhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZShrZXkpO1xuICAgIHJldHVybiBIZWxwZXJzLmlzQmxhbmsodmFsdWUpO1xuICB9XG5cbiAgaGFzRmllbGQoa2V5OiBzdHJpbmcsIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXApOiBib29sZWFuIHtcbiAgICBjb25zdCBmb3JtID0gb3RoZXJGb3JtIHx8IHRoaXMuZm9ybTtcbiAgICByZXR1cm4gISFmb3JtLmNvbnRyb2xzW2tleV07XG4gIH1cblxuICBhZGRTdGF0aWNPcHRpb24oa2V5OiBzdHJpbmcsIG5ld09wdGlvbiwgb3RoZXJGb3JtPzogTm92b0Zvcm1Hcm91cCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5LCBvdGhlckZvcm0pO1xuICAgIGxldCBvcHRpb25Ub0FkZCA9IG5ld09wdGlvbjtcbiAgICBsZXQgaXNVbmlxdWUgPSB0cnVlO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGxldCBjdXJyZW50T3B0aW9ucyA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnb3B0aW9ucycpO1xuICAgICAgaWYgKCFjdXJyZW50T3B0aW9ucyB8fCAhY3VycmVudE9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJyk7XG4gICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zO1xuICAgICAgICAgIGlmIChjdXJyZW50T3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KGN1cnJlbnRPcHRpb25zKSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25zWzBdLnZhbHVlICYmICFvcHRpb25Ub0FkZC52YWx1ZSkge1xuICAgICAgICAgICAgICBvcHRpb25Ub0FkZCA9IHsgdmFsdWU6IG5ld09wdGlvbiwgbGFiZWw6IG5ld09wdGlvbiB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uZmlnLm9wdGlvbnMgPSBbLi4uY3VycmVudE9wdGlvbnMsIG9wdGlvblRvQWRkXTtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJywgY29uZmlnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjdXJyZW50T3B0aW9uc1swXS52YWx1ZSAmJiAhb3B0aW9uVG9BZGQudmFsdWUpIHtcbiAgICAgICAgICBvcHRpb25Ub0FkZCA9IHsgdmFsdWU6IG5ld09wdGlvbiwgbGFiZWw6IG5ld09wdGlvbiB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuc3VyZSBkdXBsaWNhdGUgdmFsdWVzIGFyZSBub3QgYWRkZWRcbiAgICAgICAgY3VycmVudE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKChvcHRpb24udmFsdWUgJiYgb3B0aW9uLnZhbHVlID09PSBvcHRpb25Ub0FkZC52YWx1ZSkgfHwgb3B0aW9uID09PSBvcHRpb25Ub0FkZCkge1xuICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNVbmlxdWUpIHtcbiAgICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ29wdGlvbnMnLCBbLi4uY3VycmVudE9wdGlvbnMsIG9wdGlvblRvQWRkXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc1VuaXF1ZSkge1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ29wdGlvbnMnLCB2YWx1ZTogWy4uLmN1cnJlbnRPcHRpb25zLCBvcHRpb25Ub0FkZF0gfSwgb3RoZXJGb3JtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVTdGF0aWNPcHRpb24oa2V5OiBzdHJpbmcsIG9wdGlvblRvUmVtb3ZlOiBzdHJpbmcsIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSwgb3RoZXJGb3JtKTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBsZXQgY3VycmVudE9wdGlvbnMgPSB0aGlzLmdldFByb3BlcnR5KGtleSwgJ29wdGlvbnMnKTtcbiAgICAgIGlmICghY3VycmVudE9wdGlvbnMgfHwgIWN1cnJlbnRPcHRpb25zLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldFByb3BlcnR5KGtleSwgJ2NvbmZpZycpO1xuICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgY3VycmVudE9wdGlvbnMgPSBjb25maWcub3B0aW9ucztcbiAgICAgICAgICBpZiAoY3VycmVudE9wdGlvbnMgJiYgQXJyYXkuaXNBcnJheShjdXJyZW50T3B0aW9ucykpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICAgICAgY3VycmVudE9wdGlvbnMuZm9yRWFjaCgob3B0LCBpKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChvcHQudmFsdWUgfHwgb3B0LmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdC52YWx1ZSA9PT0gb3B0aW9uVG9SZW1vdmUgfHwgb3B0LmxhYmVsID09PSBvcHRpb25Ub1JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0ID09PSBvcHRpb25Ub1JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRPcHRpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25maWcub3B0aW9ucyA9IFsuLi5jdXJyZW50T3B0aW9uc107XG4gICAgICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ2NvbmZpZycsIGNvbmZpZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgY3VycmVudE9wdGlvbnMuZm9yRWFjaCgob3B0LCBpKSA9PiB7XG4gICAgICAgICAgaWYgKG9wdC52YWx1ZSB8fCBvcHQubGFiZWwpIHtcbiAgICAgICAgICAgIGlmIChvcHQudmFsdWUgPT09IG9wdGlvblRvUmVtb3ZlIHx8IG9wdC5sYWJlbCA9PT0gb3B0aW9uVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAob3B0ID09PSBvcHRpb25Ub1JlbW92ZSkge1xuICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGN1cnJlbnRPcHRpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICdvcHRpb25zJywgWy4uLmN1cnJlbnRPcHRpb25zXSk7XG4gICAgICB9XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ29wdGlvbnMnLCB2YWx1ZTogY29udHJvbC5vcHRpb25zIH0sIG90aGVyRm9ybSk7XG4gICAgfVxuICB9XG5cbiAgbW9kaWZ5UGlja2VyQ29uZmlnKFxuICAgIGtleTogc3RyaW5nLFxuICAgIGNvbmZpZzoge1xuICAgICAgZm9ybWF0Pzogc3RyaW5nO1xuICAgICAgb3B0aW9uc1VybD86IHN0cmluZztcbiAgICAgIG9wdGlvbnNVcmxCdWlsZGVyPzogRnVuY3Rpb247XG4gICAgICBvcHRpb25zUHJvbWlzZT87XG4gICAgICBvcHRpb25zPzogYW55W107XG4gICAgICByZXN1bHRzVGVtcGxhdGVUeXBlPzogUmVzdWx0c1RlbXBsYXRlVHlwZTtcbiAgICB9LFxuICAgIG1hcHBlcj8sXG4gICk6IHZvaWQge1xuICAgIC8vIGNhbGwgYW5vdGhlciBtZXRob2QgdG8gYXZvaWQgYSBicmVha2luZyBjaGFuZ2UgYnV0IHN0aWxsIGVuYWJsZSBzdHJpY3RlciB0eXBlc1xuICAgIHRoaXMubXV0YXRlUGlja2VyQ29uZmlnKGtleSwgY29uZmlnIGFzIE1vZGlmeVBpY2tlckNvbmZpZ0FyZ3MsIG1hcHBlcik7XG4gIH1cblxuICBtdXRhdGVQaWNrZXJDb25maWcoa2V5OiBzdHJpbmcsIGFyZ3M6IE1vZGlmeVBpY2tlckNvbmZpZ0FyZ3MsIG1hcHBlcj86IChpdGVtOiB1bmtub3duKSA9PiB1bmtub3duLCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29uc3QgeyBtaW5TZWFyY2hMZW5ndGgsIGVuYWJsZUluZmluaXRlU2Nyb2xsLCBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yLCBmb3JtYXQsIGdldExhYmVscywgZW1wdHlQaWNrZXJNZXNzYWdlIH0gPSBjb250cm9sLmNvbmZpZztcbiAgICAgIGNvbnN0IG9wdGlvbnNDb25maWcgPSB0aGlzLmdldE9wdGlvbnNDb25maWcoYXJncywgbWFwcGVyLCBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yLCBmb3JtYXQpO1xuXG4gICAgICBjb25zdCBuZXdDb25maWc6IE5vdm9Db250cm9sQ29uZmlnWydjb25maWcnXSA9IHtcbiAgICAgICAgLi4uKGVtcHR5UGlja2VyTWVzc2FnZSAmJiB7IGVtcHR5UGlja2VyTWVzc2FnZSB9KSxcbiAgICAgICAgLi4uKE51bWJlci5pc0ludGVnZXIobWluU2VhcmNoTGVuZ3RoKSAmJiB7IG1pblNlYXJjaExlbmd0aCB9KSxcbiAgICAgICAgLi4uKGVuYWJsZUluZmluaXRlU2Nyb2xsICYmIHsgZW5hYmxlSW5maW5pdGVTY3JvbGwgfSksXG4gICAgICAgIC4uLihmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yICYmIHsgZmlsdGVyZWRPcHRpb25zQ3JlYXRvciB9KSxcbiAgICAgICAgLi4uKGdldExhYmVscyAmJiB7IGdldExhYmVscyB9KSxcbiAgICAgICAgLi4uKG9wdGlvbnNDb25maWcgJiYgb3B0aW9uc0NvbmZpZyksXG4gICAgICAgIHJlc3VsdHNUZW1wbGF0ZTpcbiAgICAgICAgICBjb250cm9sLmNvbmZpZy5yZXN1bHRzVGVtcGxhdGUgfHwgKCdyZXN1bHRzVGVtcGxhdGVUeXBlJyBpbiBhcmdzICYmIHRoaXMuZ2V0QXBwcm9wcmlhdGVSZXN1bHRzVGVtcGxhdGUoYXJncy5yZXN1bHRzVGVtcGxhdGVUeXBlKSksXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ2NvbmZpZycsIG5ld0NvbmZpZyk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3BpY2tlckNvbmZpZycsIHZhbHVlOiBhcmdzIH0sIG90aGVyRm9ybSk7XG4gICAgfVxuICB9XG5cbiAgYWRkUHJvcGVydGllc1RvUGlja2VyQ29uZmlnKGtleTogc3RyaW5nLCBwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSwgb3RoZXJGb3JtPzogTm92b0Zvcm1Hcm91cCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5LCBvdGhlckZvcm0pO1xuICAgIGlmICghY29udHJvbCB8fCBjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAuLi5jb250cm9sLmNvbmZpZyxcbiAgICAgIC4uLnByb3BlcnRpZXMsXG4gICAgfTtcblxuICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJywgY29uZmlnKTtcbiAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3BpY2tlckNvbmZpZycsIHZhbHVlOiBwcm9wZXJ0aWVzIH0sIG90aGVyRm9ybSk7XG4gIH1cbiAgZ2V0T3B0aW9uc0NvbmZpZyA9IChcbiAgICBhcmdzOiBNb2RpZnlQaWNrZXJDb25maWdBcmdzLFxuICAgIG1hcHBlcj86IChpdGVtOiB1bmtub3duKSA9PiB1bmtub3duLFxuICAgIGZpbHRlcmVkT3B0aW9uc0NyZWF0b3I/OiAod2hlcmU6IHN0cmluZykgPT4gKHF1ZXJ5OiBzdHJpbmcpID0+IFByb21pc2U8dW5rbm93bltdPixcbiAgICBwaWNrZXJDb25maWdGb3JtYXQ/OiBzdHJpbmcsXG4gICk6IHVuZGVmaW5lZCB8IHsgb3B0aW9uczogdW5rbm93bltdIH0gfCB7IG9wdGlvbnM6IE9wdGlvbnNGdW5jdGlvbjsgZm9ybWF0Pzogc3RyaW5nIH0gPT4ge1xuICAgIGlmIChmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yIHx8ICdvcHRpb25zVXJsJyBpbiBhcmdzIHx8ICdvcHRpb25zVXJsQnVpbGRlcicgaW4gYXJncyB8fCAnb3B0aW9uc1Byb21pc2UnIGluIGFyZ3MpIHtcbiAgICAgIGNvbnN0IGZvcm1hdCA9ICgnZm9ybWF0JyBpbiBhcmdzICYmIGFyZ3MuZm9ybWF0KSB8fCBwaWNrZXJDb25maWdGb3JtYXQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvcHRpb25zOiB0aGlzLmNyZWF0ZU9wdGlvbnNGdW5jdGlvbihhcmdzLCBtYXBwZXIsIGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IpLFxuICAgICAgICAuLi4oJ2VtcHR5UGlja2VyTWVzc2FnZScgaW4gYXJncyAmJiB7IGVtcHR5UGlja2VyTWVzc2FnZTogYXJncy5lbXB0eVBpY2tlck1lc3NhZ2UgfSksXG4gICAgICAgIC4uLihmb3JtYXQgJiYgeyBmb3JtYXQgfSksXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoJ29wdGlvbnMnIGluIGFyZ3MgJiYgQXJyYXkuaXNBcnJheShhcmdzLm9wdGlvbnMpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvcHRpb25zOiBbLi4uYXJncy5vcHRpb25zXSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgZ2V0QXBwcm9wcmlhdGVSZXN1bHRzVGVtcGxhdGUocmVzdWx0c1RlbXBsYXRlVHlwZTogUmVzdWx0c1RlbXBsYXRlVHlwZSkge1xuICAgIHN3aXRjaCAocmVzdWx0c1RlbXBsYXRlVHlwZSkge1xuICAgICAgY2FzZSAnZW50aXR5LXBpY2tlcic6XG4gICAgICAgIHJldHVybiBFbnRpdHlQaWNrZXJSZXN1bHRzO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVPcHRpb25zRnVuY3Rpb24gPSAoXG4gICAgY29uZmlnOiBNb2RpZnlQaWNrZXJDb25maWdBcmdzLFxuICAgIG1hcHBlcj86IChpdGVtOiB1bmtub3duKSA9PiB1bmtub3duLFxuICAgIGZpbHRlcmVkT3B0aW9uc0NyZWF0b3I/OiAod2hlcmU/OiBzdHJpbmcpID0+IChxdWVyeTogc3RyaW5nLCBwYWdlPzogbnVtYmVyKSA9PiBQcm9taXNlPHVua25vd25bXT4sXG4gICk6ICgocXVlcnk6IHN0cmluZykgPT4gUHJvbWlzZTx1bmtub3duW10+KSA9PiAocXVlcnk6IHN0cmluZywgcGFnZT86IG51bWJlcikgPT4ge1xuICAgIGlmICgnb3B0aW9uc1Byb21pc2UnIGluIGNvbmZpZyAmJiBjb25maWcub3B0aW9uc1Byb21pc2UpIHtcbiAgICAgIHJldHVybiBjb25maWcub3B0aW9uc1Byb21pc2UocXVlcnksIG5ldyBDdXN0b21IdHRwSW1wbCh0aGlzLmh0dHApLCBwYWdlKTtcbiAgICB9IGVsc2UgaWYgKCgnb3B0aW9uc1VybEJ1aWxkZXInIGluIGNvbmZpZyAmJiBjb25maWcub3B0aW9uc1VybEJ1aWxkZXIpIHx8ICgnb3B0aW9uc1VybCcgaW4gY29uZmlnICYmIGNvbmZpZy5vcHRpb25zVXJsKSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gJ29wdGlvbnNVcmxCdWlsZGVyJyBpbiBjb25maWcgPyBjb25maWcub3B0aW9uc1VybEJ1aWxkZXIocXVlcnkpIDogYCR7Y29uZmlnLm9wdGlvbnNVcmx9P2ZpbHRlcj0ke3F1ZXJ5IHx8ICcnfWA7XG4gICAgICAgIHRoaXMuaHR0cFxuICAgICAgICAgIC5nZXQodXJsKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgbWFwKChyZXN1bHRzOiB1bmtub3duW10pID0+IHtcbiAgICAgICAgICAgICAgaWYgKG1hcHBlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLm1hcChtYXBwZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKVxuICAgICAgICAgIC5zdWJzY3JpYmUocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoZmlsdGVyZWRPcHRpb25zQ3JlYXRvcikge1xuICAgICAgaWYgKCd3aGVyZScgaW4gY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yKGNvbmZpZy53aGVyZSkocXVlcnksIHBhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IoKShxdWVyeSwgcGFnZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHNldExvYWRpbmcoa2V5OiBzdHJpbmcsIGxvYWRpbmc6IGJvb2xlYW4sIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXApIHtcbiAgICBjb25zdCBmb3JtID0gb3RoZXJGb3JtIHx8IHRoaXMuZm9ybTtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSwgb3RoZXJGb3JtKTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBpZiAobG9hZGluZykge1xuICAgICAgICBmb3JtLmNvbnRyb2xzW2tleV0uZmllbGRJbnRlcmFjdGlvbmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBjb250cm9sLnNldEVycm9ycyh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICAgIC8vIEhpc3RvcnlcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYXN5bmNCbG9ja1RpbWVvdXQpO1xuICAgICAgICB0aGlzLmFzeW5jQmxvY2tUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRMb2FkaW5nKGtleSwgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuZGlzcGxheVRpcChrZXksIHRoaXMubGFiZWxzLmFzeW5jRmFpbHVyZSwgJ2luZm8nLCBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICdfZGlzcGxheWVkQXN5bmNGYWlsdXJlJywgdHJ1ZSk7XG4gICAgICAgIH0sIDEwMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm0uY29udHJvbHNba2V5XS5maWVsZEludGVyYWN0aW9ubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hc3luY0Jsb2NrVGltZW91dCk7XG4gICAgICAgIGNvbnRyb2wuc2V0RXJyb3JzKHsgbG9hZGluZzogbnVsbCB9KTtcbiAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnX2Rpc3BsYXllZEFzeW5jRmFpbHVyZScpKSB7XG4gICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICd0aXBXZWxsJywgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnbG9hZGluZycsIHZhbHVlOiBsb2FkaW5nIH0sIG90aGVyRm9ybSk7XG4gICAgfVxuICB9XG5cbiAgYWRkQ29udHJvbChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBtZXRhRm9yTmV3RmllbGQ6IHsga2V5Pzogc3RyaW5nLCB0eXBlPzogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCBsYWJlbD86IHN0cmluZyB9LFxuICAgIHBvc2l0aW9uOiBzdHJpbmcgPSBGaWVsZEludGVyYWN0aW9uQXBpLkZJRUxEX1BPU0lUSU9OUy5BQk9WRV9GSUVMRCxcbiAgICBpbml0aWFsVmFsdWU/LFxuICAgIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXAsXG4gICk6IHZvaWQge1xuICAgIGlmICghbWV0YUZvck5ld0ZpZWxkLmtleSAmJiAhbWV0YUZvck5ld0ZpZWxkLm5hbWUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tGaWVsZEludGVyYWN0aW9uQVBJXSAtIG1pc3NpbmcgXCJrZXlcIiBpbiBtZXRhIGZvciBuZXcgZmllbGQnKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCFtZXRhRm9yTmV3RmllbGQua2V5KSB7XG4gICAgICAvLyBJZiBrZXkgaXMgbm90IGV4cGxpY2l0bHkgZGVjbGFyZWQsIHVzZSBuYW1lIGFzIGtleVxuICAgICAgbWV0YUZvck5ld0ZpZWxkLmtleSA9IG1ldGFGb3JOZXdGaWVsZC5uYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm0gPSBvdGhlckZvcm0gfHwgdGhpcy5mb3JtO1xuICAgIGlmIChmb3JtLmNvbnRyb2xzW21ldGFGb3JOZXdGaWVsZC5rZXldKSB7XG4gICAgICAvLyBGaWVsZCBpcyBhbHJlYWR5IG9uIHRoZSBmb3JtXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb250cm9sID0gZm9ybS5jb250cm9sc1trZXldO1xuICAgIGxldCBmaWVsZHNldEluZGV4OiBudW1iZXI7XG4gICAgbGV0IGNvbnRyb2xJbmRleDogbnVtYmVyO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICBmaWVsZHNldEluZGV4ID0gLTE7XG4gICAgICBjb250cm9sSW5kZXggPSAtMTtcblxuICAgICAgZm9ybS5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQsIGZpKSA9PiB7XG4gICAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGZpZWxkc2V0Q29udHJvbCwgY2kpID0+IHtcbiAgICAgICAgICBpZiAoZmllbGRzZXRDb250cm9sLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICBmaWVsZHNldEluZGV4ID0gZmk7XG4gICAgICAgICAgICBjb250cm9sSW5kZXggPSBjaTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIENoYW5nZSB0aGUgcG9zaXRpb24gb2YgdGhlIG5ld2x5IGFkZGVkIGZpZWxkXG4gICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgRmllbGRJbnRlcmFjdGlvbkFwaS5GSUVMRF9QT1NJVElPTlMuQUJPVkVfRklFTEQ6XG4gICAgICAgICAgLy8gQWRkaW5nIGZpZWxkIGFib3ZlIGFjdGl2ZSBmaWVsZFxuICAgICAgICAgIC8vIGluZGV4IGNhbiBzdGF5IHRoZSBzYW1lXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRmllbGRJbnRlcmFjdGlvbkFwaS5GSUVMRF9QT1NJVElPTlMuQkVMT1dfRklFTEQ6XG4gICAgICAgICAgLy8gQWRkaW5nIGZpZWxkIGJlbG93IGFjdGl2ZSBmaWVsZFxuICAgICAgICAgIGNvbnRyb2xJbmRleCArPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEZpZWxkSW50ZXJhY3Rpb25BcGkuRklFTERfUE9TSVRJT05TLlRPUF9PRl9GT1JNOlxuICAgICAgICAgIC8vIEFkZGluZyBmaWVsZCB0byB0aGUgdG9wIG9mIHRoZSBmb3JtXG4gICAgICAgICAgY29udHJvbEluZGV4ID0gMDtcbiAgICAgICAgICBmaWVsZHNldEluZGV4ID0gMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBGaWVsZEludGVyYWN0aW9uQXBpLkZJRUxEX1BPU0lUSU9OUy5CT1RUT01fT0ZfRk9STTpcbiAgICAgICAgICAvLyBBZGRpbmcgZmllbGQgdG8gdGhlIGJvdHRvbSBvZiB0aGUgZm9ybVxuICAgICAgICAgIGZpZWxkc2V0SW5kZXggPSBmb3JtLmZpZWxkc2V0cy5sZW5ndGggLSAxO1xuICAgICAgICAgIGNvbnRyb2xJbmRleCA9IGZvcm0uZmllbGRzZXRzW2ZpZWxkc2V0SW5kZXhdLmNvbnRyb2xzLmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGZpZWxkc2V0SW5kZXggIT09IC0xICYmIGNvbnRyb2xJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3Qgbm92b0NvbnRyb2wgPSB0aGlzLmZvcm1VdGlscy5nZXRDb250cm9sRm9yRmllbGQobWV0YUZvck5ld0ZpZWxkLCB0aGlzLmh0dHAsIHt9KTtcbiAgICAgICAgbm92b0NvbnRyb2wuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGZvcm1Db250cm9sID0gbmV3IE5vdm9Gb3JtQ29udHJvbChpbml0aWFsVmFsdWUsIG5vdm9Db250cm9sKTtcbiAgICAgICAgZm9ybS5hZGRDb250cm9sKG5vdm9Db250cm9sLmtleSwgZm9ybUNvbnRyb2wpO1xuICAgICAgICBmb3JtLmZpZWxkc2V0c1tmaWVsZHNldEluZGV4XS5jb250cm9scy5zcGxpY2UoY29udHJvbEluZGV4LCAwLCBub3ZvQ29udHJvbCk7XG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnYWRkQ29udHJvbCcsIHZhbHVlOiBmb3JtQ29udHJvbCB9LCBvdGhlckZvcm0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUNvbnRyb2woa2V5OiBzdHJpbmcsIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXApOiB2b2lkIHtcbiAgICBjb25zdCBmb3JtID0gb3RoZXJGb3JtIHx8IHRoaXMuZm9ybTtcbiAgICBpZiAoIWZvcm0uY29udHJvbHNba2V5XSkge1xuICAgICAgLy8gRmllbGQgaXMgbm90IG9uIHRoZSBmb3JtXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgbGV0IGZpZWxkc2V0SW5kZXggPSAtMTtcbiAgICAgIGxldCBjb250cm9sSW5kZXggPSAtMTtcblxuICAgICAgZm9ybS5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQsIGZpKSA9PiB7XG4gICAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGZpZWxkc2V0Q29udHJvbCwgY2kpID0+IHtcbiAgICAgICAgICBpZiAoZmllbGRzZXRDb250cm9sLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICBmaWVsZHNldEluZGV4ID0gZmk7XG4gICAgICAgICAgICBjb250cm9sSW5kZXggPSBjaTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaWVsZHNldEluZGV4ICE9PSAtMSAmJiBjb250cm9sSW5kZXggIT09IC0xKSB7XG4gICAgICAgIGZvcm0ucmVtb3ZlQ29udHJvbChrZXkpO1xuICAgICAgICBmb3JtLmZpZWxkc2V0c1tmaWVsZHNldEluZGV4XS5jb250cm9scy5zcGxpY2UoY29udHJvbEluZGV4LCAxKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdyZW1vdmVDb250cm9sJywgdmFsdWU6IGtleSB9LCBvdGhlckZvcm0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlYm91bmNlKGZ1bmM6ICgpID0+IHZvaWQsIHdhaXQgPSA1MCkge1xuICAgIGxldCBoO1xuICAgIGNsZWFyVGltZW91dChoKTtcbiAgICBoID0gc2V0VGltZW91dCgoKSA9PiBmdW5jKCksIHdhaXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0cmF2ZXJzaW5nIG5lc3RlZCBmb3JtcyBieSBhY2Nlc3NpbmcgdGhlIHBhcmVudCBmb3JtLlxuICAgKlxuICAgKiBAcGFyYW0gb3RoZXJGb3JtIG9wdGlvbmFsIHBhcmFtZXRlciBmb3IgZ2V0dGluZyB0aGUgcGFyZW50IG9mIGEgZGlmZmVyZW50IGZvcm0uXG4gICAqIElmIG5vdCBwcm92aWRlZCB3aWxsIGRlZmF1bHQgdG8gdGhlIHBhcmVudCBvZiB0aGUgY3VycmVudCBmb3JtLlxuICAgKi9cbiAgZ2V0UGFyZW50KG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXApIHtcbiAgICBjb25zdCBmb3JtID0gb3RoZXJGb3JtIHx8IHRoaXMuZm9ybTtcbiAgICByZXR1cm4gZm9ybS5wYXJlbnQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGluZGV4IGlzIGFzc2lnbmVkIGFzIGEgcHJvcGVydHkgb24gdGhlIGZvcm0ncyBhc3NvY2lhdGlvbnMgb2JqZWN0IHdoZW4gdGhlIGZvcm0gaXMgcGFydCBvZiBhIE5vdm9Db250cm9sR3JvdXAgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSBvdGhlckZvcm0gb3B0aW9uYWwgcGFyYW1ldGVyIGZvciBnZXR0aW5nIHRoZSBpbmRleCBvZiBhIGRpZmZlcmVudCBmb3JtLiBJZiBub3QgcHJvdmlkZWQgd2lsbCBkZWZhdWx0IHRvIHRoZSBjdXJyZW50IGZvcm0uXG4gICAqIEByZXR1cm5zIHRoZSBpbmRleCBpZiBpdCBleGlzdHMgZm9yIHRoZSBjdXJyZW50IG9yIGZvcm0sIG9yIG51bGwgb3RoZXJ3aXNlLlxuICAgKi9cbiAgZ2V0SW5kZXgob3RoZXJGb3JtPzogTm92b0Zvcm1Hcm91cCkge1xuICAgIGNvbnN0IGZvcm0gPSBvdGhlckZvcm0gfHwgdGhpcy5mb3JtO1xuICAgIHJldHVybiAoZm9ybS5hc3NvY2lhdGlvbnMgJiYgZm9ybS5hc3NvY2lhdGlvbnMuaGFzT3duUHJvcGVydHkoJ2luZGV4JykpID8gZm9ybS5hc3NvY2lhdGlvbnMuaW5kZXggOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmlnZ2VyRXZlbnQoZXZlbnQ6IElGaWVsZEludGVyYWN0aW9uRXZlbnQsIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXApOiB2b2lkIHtcbiAgICBjb25zdCBmb3JtID0gb3RoZXJGb3JtIHx8IHRoaXMuZm9ybTtcbiAgICBpZiAoZm9ybSAmJiBmb3JtLmZpZWxkSW50ZXJhY3Rpb25FdmVudHMpIHtcbiAgICAgIGZvcm0uZmllbGRJbnRlcmFjdGlvbkV2ZW50cy5lbWl0KGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==