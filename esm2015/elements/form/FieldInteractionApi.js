/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/FieldInteractionApi.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Vendor
import { map } from 'rxjs/operators';
import { NovoLabelService } from '../../services/novo-label-service';
import { FormUtils } from '../../utils/form-utils/FormUtils';
import { Helpers } from '../../utils/Helpers';
import { NovoModalService } from '../modal/ModalService';
import { EntityPickerResults } from '../picker/extras/entity-picker-results/EntityPickerResults';
import { NovoToastService } from '../toast/ToastService';
import { ControlConfirmModal, ControlPromptModal } from './FieldInteractionModals';
// APP
import { NovoFormControl } from './NovoFormControl';
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
     * @param {?} form
     * @return {?}
     */
    set form(form) {
        this._form = form;
    }
    /**
     * @return {?}
     */
    get form() {
        return this._form;
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
     * @param {?} appBridge
     * @return {?}
     */
    set appBridge(appBridge) {
        this._appBridge = appBridge;
    }
    /**
     * @return {?}
     */
    get appBridge() {
        return this._appBridge;
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
     * @return {?}
     */
    getFieldSet(key) {
        if (!key) {
            console.error('[FieldInteractionAPI] - invalid or missing "key"'); // tslint:disable-line
            return null;
        }
        /** @type {?} */
        const fieldSet = this.form.fieldsets.find((/**
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
     * @return {?}
     */
    getControl(key) {
        if (!key) {
            console.error('[FieldInteractionAPI] - invalid or missing "key"'); // tslint:disable-line
            return null;
        }
        /** @type {?} */
        const control = this.form.controls[key];
        if (!control) {
            console.error('[FieldInteractionAPI] - could not find a control in the form by the key --', key); // tslint:disable-line
            return null;
        }
        return (/** @type {?} */ (control));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getValue(key) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control) {
            return control.value;
        }
        return null;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getRawValue(key) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control) {
            return control.rawValue;
        }
        return null;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getInitialValue(key) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control) {
            return control.initialValue;
        }
        return null;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    setValue(key, value, options) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.setValue(value, options);
            this.triggerEvent({ controlKey: key, prop: 'value', value });
        }
    }
    /**
     * @param {?} key
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    patchValue(key, value, options) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.setValue(value, options);
            this.triggerEvent({ controlKey: key, prop: 'value', value });
        }
    }
    /**
     * @param {?} key
     * @param {?} isReadOnly
     * @return {?}
     */
    setReadOnly(key, isReadOnly) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.setReadOnly(isReadOnly);
            this.triggerEvent({ controlKey: key, prop: 'readOnly', value: isReadOnly });
        }
    }
    /**
     * @param {?} key
     * @param {?} required
     * @return {?}
     */
    setRequired(key, required) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.setRequired(required);
            this.triggerEvent({ controlKey: key, prop: 'required', value: required });
        }
    }
    /**
     * @param {?} key
     * @param {?=} clearValue
     * @return {?}
     */
    hide(key, clearValue = true) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.hide(clearValue);
            this.disable(key, { emitEvent: false });
            this.triggerEvent({ controlKey: key, prop: 'hidden', value: true });
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    show(key) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.show();
            this.enable(key, { emitEvent: false });
            this.triggerEvent({ controlKey: key, prop: 'hidden', value: false });
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
     * @return {?}
     */
    disable(key, options) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.disable(options);
            this.triggerEvent({ controlKey: key, prop: 'readOnly', value: true });
        }
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    enable(key, options) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.enable(options);
            this.triggerEvent({ controlKey: key, prop: 'readOnly', value: false });
        }
    }
    /**
     * @param {?} key
     * @param {?=} validationMessage
     * @return {?}
     */
    markAsInvalid(key, validationMessage) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control) {
            if (control && !control.restrictFieldInteractions) {
                control.markAsInvalid(validationMessage);
            }
        }
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    markAsDirty(key, options) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.markAsDirty(options);
        }
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    markAsPending(key, options) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.markAsPending(options);
        }
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    markAsPristine(key, options) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.markAsPristine(options);
        }
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    markAsTouched(key, options) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.markAsTouched(options);
        }
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    markAsUntouched(key, options) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.markAsUntouched(options);
        }
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    updateValueAndValidity(key, options) {
        /** @type {?} */
        const control = this.getControl(key);
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
     * @return {?}
     */
    displayTip(key, tip, icon, allowDismiss, sanitize) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.tipWell = {
                tip,
                icon,
                button: allowDismiss,
                sanitize: sanitize !== false,
            };
            this.triggerEvent({ controlKey: key, prop: 'tipWell', value: tip });
        }
    }
    /**
     * @param {?} key
     * @param {?} tooltip
     * @return {?}
     */
    setTooltip(key, tooltip) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.tooltip = tooltip;
            if (tooltip.length >= 40 && tooltip.length <= 400) {
                control.tooltipSize = 'large';
                control.tooltipPreline = true;
            }
            else if (tooltip.length > 400) {
                control.tooltipSize = 'extra-large';
            }
            this.triggerEvent({ controlKey: key, prop: 'tooltip', value: tooltip });
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
        /** @type {?} */
        const showYes = true;
        ((/** @type {?} */ (document.activeElement))).blur();
        return this.modalService.open(ControlPromptModal, { changes, key }).onClosed;
    }
    /**
     * @param {?} key
     * @param {?} prop
     * @param {?} value
     * @return {?}
     */
    setProperty(key, prop, value) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control[prop] = value;
            this.triggerEvent({ controlKey: key, prop, value });
        }
    }
    /**
     * @param {?} key
     * @param {?} prop
     * @return {?}
     */
    getProperty(key, prop) {
        /** @type {?} */
        const control = this.getControl(key);
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
     * @return {?}
     */
    hasField(key) {
        return !!this.form.controls[key];
    }
    /**
     * @param {?} key
     * @param {?} newOption
     * @return {?}
     */
    addStaticOption(key, newOption) {
        /** @type {?} */
        const control = this.getControl(key);
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
                this.triggerEvent({ controlKey: key, prop: 'options', value: [...currentOptions, optionToAdd] });
            }
        }
    }
    /**
     * @param {?} key
     * @param {?} optionToRemove
     * @return {?}
     */
    removeStaticOption(key, optionToRemove) {
        /** @type {?} */
        const control = this.getControl(key);
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
            this.triggerEvent({ controlKey: key, prop: 'options', value: control.options });
        }
    }
    /**
     * @param {?} key
     * @param {?} config
     * @param {?=} mapper
     * @return {?}
     */
    modifyPickerConfig(key, config, mapper) {
        // call another public method to avoid a breaking change but still enable stricter types
        this.mutatePickerConfig(key, (/** @type {?} */ (config)), mapper);
    }
    /**
     * @param {?} key
     * @param {?} args
     * @param {?=} mapper
     * @return {?}
     */
    mutatePickerConfig(key, args, mapper) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            const { minSearchLength, enableInfiniteScroll, filteredOptionsCreator, format, getLabels, emptyPickerMessage } = control.config;
            /** @type {?} */
            const optionsConfig = this.getOptionsConfig(args, mapper, filteredOptionsCreator, format);
            /** @type {?} */
            const newConfig = Object.assign({}, (emptyPickerMessage && { emptyPickerMessage }), (Number.isInteger(minSearchLength) && { minSearchLength }), (enableInfiniteScroll && { enableInfiniteScroll }), (filteredOptionsCreator && { filteredOptionsCreator }), (getLabels && { getLabels }), (optionsConfig && optionsConfig), { resultsTemplate: control.config.resultsTemplate || ('resultsTemplateType' in args && this.getAppropriateResultsTemplate(args.resultsTemplateType)) });
            this.setProperty(key, 'config', newConfig);
            this.triggerEvent({ controlKey: key, prop: 'pickerConfig', value: args });
        }
    }
    /**
     * @param {?} key
     * @param {?} properties
     * @return {?}
     */
    addPropertiesToPickerConfig(key, properties) {
        /** @type {?} */
        const control = this.getControl(key);
        if (!control || control.restrictFieldInteractions) {
            return;
        }
        /** @type {?} */
        const config = Object.assign({}, control.config, properties);
        this.setProperty(key, 'config', config);
        this.triggerEvent({ controlKey: key, prop: 'pickerConfig', value: properties });
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
     * @return {?}
     */
    setLoading(key, loading) {
        /** @type {?} */
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            if (loading) {
                this.form.controls[key].fieldInteractionloading = true;
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
                this.form.controls[key].fieldInteractionloading = false;
                clearTimeout(this.asyncBlockTimeout);
                control.setErrors({ loading: null });
                control.updateValueAndValidity({ emitEvent: false });
                if (this.getProperty(key, '_displayedAsyncFailure')) {
                    this.setProperty(key, 'tipWell', null);
                }
            }
            this.triggerEvent({ controlKey: key, prop: 'loading', value: loading });
        }
    }
    /**
     * @param {?} key
     * @param {?} metaForNewField
     * @param {?=} position
     * @param {?=} initialValue
     * @return {?}
     */
    addControl(key, metaForNewField, position = FieldInteractionApi.FIELD_POSITIONS.ABOVE_FIELD, initialValue) {
        if (!metaForNewField.key && !metaForNewField.name) {
            console.error('[FieldInteractionAPI] - missing "key" in meta for new field'); // tslint:disable-line
            return null;
        }
        if (!metaForNewField.key) {
            // If key is not explicitly declared, use name as key
            metaForNewField.key = metaForNewField.name;
        }
        if (this.form.controls[metaForNewField.key]) {
            // Field is already on the form
            return null;
        }
        /** @type {?} */
        const control = this.form.controls[key];
        /** @type {?} */
        let fieldsetIndex;
        /** @type {?} */
        let controlIndex;
        if (control) {
            fieldsetIndex = -1;
            controlIndex = -1;
            this.form.fieldsets.forEach((/**
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
                    fieldsetIndex = this.form.fieldsets.length - 1;
                    controlIndex = this.form.fieldsets[fieldsetIndex].controls.length;
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
                this.form.addControl(novoControl.key, formControl);
                this.form.fieldsets[fieldsetIndex].controls.splice(controlIndex, 0, novoControl);
                this.triggerEvent({ controlKey: key, prop: 'addControl', value: formControl });
            }
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    removeControl(key) {
        if (!this.form.controls[key]) {
            // Field is not on the form
            return null;
        }
        /** @type {?} */
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            /** @type {?} */
            let fieldsetIndex = -1;
            /** @type {?} */
            let controlIndex = -1;
            this.form.fieldsets.forEach((/**
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
                this.form.removeControl(key);
                this.form.fieldsets[fieldsetIndex].controls.splice(controlIndex, 1);
                this.triggerEvent({ controlKey: key, prop: 'removeControl', value: key });
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
     * @private
     * @param {?} event
     * @return {?}
     */
    triggerEvent(event) {
        if (this.form && this.form.fieldInteractionEvents) {
            this.form.fieldInteractionEvents.emit(event);
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
    /**
     * @type {?}
     * @private
     */
    FieldInteractionApi.prototype._form;
    /**
     * @type {?}
     * @private
     */
    FieldInteractionApi.prototype._currentKey;
    /**
     * @type {?}
     * @private
     */
    FieldInteractionApi.prototype._appBridge;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGRJbnRlcmFjdGlvbkFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0ZpZWxkSW50ZXJhY3Rpb25BcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDN0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBZ0IsTUFBTSx1QkFBdUIsQ0FBQztBQUV2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFJbkYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE1BQU0sY0FBYzs7OztJQUtsQixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFVBQUs7Ozs7UUFBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFDO0lBRXVCLENBQUM7Ozs7OztJQUV6QyxHQUFHLENBQUMsR0FBVyxFQUFFLE9BQWE7UUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEtBQUs7UUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxPQUFZLEVBQUUsTUFBWTtRQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQixTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRjs7O0lBdkJDLDZCQUFZOztJQUNaLGlDQUFhOztJQUNiLCtCQUFpQjs7Ozs7SUFFTCw4QkFBd0I7O0FBc0J0QyxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7OztJQWM5QixZQUNVLE9BQXlCLEVBQ3pCLFlBQThCLEVBQzlCLFNBQW9CLEVBQ3BCLElBQWdCLEVBQ2hCLE1BQXdCO1FBSnhCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ3pCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUEraEJsQyxxQkFBZ0I7Ozs7Ozs7UUFBRyxDQUNqQixJQUE0QixFQUM1QixNQUFtQyxFQUNuQyxzQkFBaUYsRUFDakYsa0JBQTJCLEVBQ3lELEVBQUU7WUFDdEYsSUFBSSxzQkFBc0IsSUFBSSxZQUFZLElBQUksSUFBSSxJQUFJLG1CQUFtQixJQUFJLElBQUksSUFBSSxnQkFBZ0IsSUFBSSxJQUFJLEVBQUU7O3NCQUN2RyxNQUFNLEdBQUcsQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxrQkFBa0I7Z0JBQ3RFLHVCQUNFLE9BQU8sRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQyxJQUN0RSxDQUFDLG9CQUFvQixJQUFJLElBQUksSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEVBQ2pGLENBQUMsTUFBTSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFDekI7YUFDSDtpQkFBTSxJQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzNELE9BQU87b0JBQ0wsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUMzQixDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxTQUFTLENBQUM7YUFDbEI7UUFDSCxDQUFDLEVBQUM7UUFXRiwwQkFBcUI7Ozs7OztRQUFHLENBQ3RCLE1BQThCLEVBQzlCLE1BQW1DLEVBQ25DLHNCQUFpRyxFQUN4RCxFQUFFOzs7OztRQUFDLENBQUMsS0FBYSxFQUFFLElBQWEsRUFBRSxFQUFFO1lBQzdFLElBQUksZ0JBQWdCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxjQUFjLEVBQUU7Z0JBQ3ZELE9BQU8sTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzFFO2lCQUFNLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdkgsT0FBTyxJQUFJLE9BQU87Ozs7O2dCQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOzswQkFDL0IsR0FBRyxHQUFHLG1CQUFtQixJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLFdBQVcsS0FBSyxJQUFJLEVBQUUsRUFBRTtvQkFDMUgsSUFBSSxDQUFDLElBQUk7eUJBQ04sR0FBRyxDQUFDLEdBQUcsQ0FBQzt5QkFDUixJQUFJLENBQ0gsR0FBRzs7OztvQkFBQyxDQUFDLE9BQWtCLEVBQUUsRUFBRTt3QkFDekIsSUFBSSxNQUFNLEVBQUU7NEJBQ1YsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3lCQUM1Qjt3QkFDRCxPQUFPLE9BQU8sQ0FBQztvQkFDakIsQ0FBQyxFQUFDLENBQ0g7eUJBQ0EsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDaEMsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTSxJQUFJLHNCQUFzQixFQUFFO2dCQUNqQyxJQUFJLE9BQU8sSUFBSSxNQUFNLEVBQUU7b0JBQ3JCLE9BQU8sc0JBQXNCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDMUQ7cUJBQU07b0JBQ0wsT0FBTyxzQkFBc0IsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDOUM7YUFDRjtRQUNILENBQUMsQ0FBQSxFQUFDO0lBMWxCRSxDQUFDOzs7OztJQUVMLElBQUksSUFBSSxDQUFDLElBQVM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNoRixDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6RixDQUFDOzs7O0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM3RixDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNuRSxDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3BFLENBQUM7Ozs7O0lBRUQsSUFBSSxPQUFPLENBQUMsT0FBWTtRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsSUFBSSxVQUFVLENBQUMsR0FBVztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsSUFBSSxTQUFTLENBQUMsU0FBb0I7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRU0sb0JBQW9CO1FBQ3pCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFTSxnQkFBZ0I7UUFDckIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRU0sWUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7OztJQUVNLGNBQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRU0scUJBQXFCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFTSxXQUFXLENBQUMsR0FBVztRQUM1QixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLENBQUMsc0JBQXNCO1lBQ3pGLE9BQU8sSUFBSSxDQUFDO1NBQ2I7O2NBRUssUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLEVBQWdCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUM7UUFDckgsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkVBQTZFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7WUFDekgsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sbUJBQUEsUUFBUSxFQUFnQixDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRU0sVUFBVSxDQUFDLEdBQVc7UUFDM0IsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtZQUN6RixPQUFPLElBQUksQ0FBQztTQUNiOztjQUVLLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEVBQTRFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7WUFDeEgsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sbUJBQUEsT0FBTyxFQUFtQixDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRU0sUUFBUSxDQUFDLEdBQVc7O2NBQ25CLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQztTQUN0QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTSxXQUFXLENBQUMsR0FBVzs7Y0FDdEIsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ3BDLElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVNLGVBQWUsQ0FBQyxHQUFXOztjQUMxQixPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUM7U0FDN0I7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFFTSxRQUFRLENBQ2IsR0FBVyxFQUNYLEtBQVUsRUFDVixPQUtDOztjQUVLLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqRCxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDOzs7Ozs7O0lBRU0sVUFBVSxDQUNmLEdBQVcsRUFDWCxLQUFVLEVBQ1YsT0FLQzs7Y0FFSyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQzlEO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sV0FBVyxDQUFDLEdBQVcsRUFBRSxVQUFtQjs7Y0FDM0MsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ3BDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFO1lBQ2pELE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUM3RTtJQUNILENBQUM7Ozs7OztJQUVNLFdBQVcsQ0FBQyxHQUFXLEVBQUUsUUFBaUI7O2NBQ3pDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqRCxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDM0U7SUFDSCxDQUFDOzs7Ozs7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLGFBQXNCLElBQUk7O2NBQzNDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqRCxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7Ozs7O0lBRU0sSUFBSSxDQUFDLEdBQVc7O2NBQ2YsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ3BDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFO1lBQ2pELE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7Ozs7O0lBRU0sa0JBQWtCLENBQUMsR0FBVzs7Y0FDN0IsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO1FBQ3RDLElBQUksUUFBUSxFQUFFO1lBQ1osUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7OztJQUVNLGtCQUFrQixDQUFDLEdBQVc7O2NBQzdCLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztRQUN0QyxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sT0FBTyxDQUNaLEdBQVcsRUFDWCxPQUdDOztjQUVLLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqRCxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDdkU7SUFDSCxDQUFDOzs7Ozs7SUFFTSxNQUFNLENBQ1gsR0FBVyxFQUNYLE9BR0M7O2NBRUssT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ3BDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFO1lBQ2pELE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN4RTtJQUNILENBQUM7Ozs7OztJQUVNLGFBQWEsQ0FBQyxHQUFXLEVBQUUsaUJBQTBCOztjQUNwRCxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtnQkFDakQsT0FBTyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQzFDO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFTSxXQUFXLENBQ2hCLEdBQVcsRUFDWCxPQUVDOztjQUVLLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqRCxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sYUFBYSxDQUNsQixHQUFXLEVBQ1gsT0FFQzs7Y0FFSyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7Ozs7OztJQUVNLGNBQWMsQ0FDbkIsR0FBVyxFQUNYLE9BRUM7O2NBRUssT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ3BDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFO1lBQ2pELE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7Ozs7SUFFTSxhQUFhLENBQ2xCLEdBQVcsRUFDWCxPQUVDOztjQUVLLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqRCxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sZUFBZSxDQUNwQixHQUFXLEVBQ1gsT0FFQzs7Y0FFSyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7OztJQUVNLHNCQUFzQixDQUMzQixHQUFXLEVBQ1gsT0FHQzs7Y0FFSyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsV0FBeUI7UUFDcEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Ozs7Ozs7O0lBRU0sVUFBVSxDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsSUFBYSxFQUFFLFlBQXNCLEVBQUUsUUFBa0I7O2NBQzdGLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqRCxPQUFPLENBQUMsT0FBTyxHQUFHO2dCQUNoQixHQUFHO2dCQUNILElBQUk7Z0JBQ0osTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLFFBQVEsRUFBRSxRQUFRLEtBQUssS0FBSzthQUM3QixDQUFDO1lBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7Ozs7OztJQUVNLFVBQVUsQ0FBQyxHQUFXLEVBQUUsT0FBZTs7Y0FDdEMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ3BDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFO1lBQ2pELE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQzFCLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxFQUFFLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7Z0JBQ2pELE9BQU8sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO2dCQUM5QixPQUFPLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQzthQUMvQjtpQkFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO2dCQUMvQixPQUFPLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQzthQUNyQztZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDekU7SUFDSCxDQUFDOzs7Ozs7SUFFTSxjQUFjLENBQUMsR0FBVyxFQUFFLE9BQWdCOztjQUMzQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDOztjQUMvQyxRQUFRLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOztjQUN0QyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7O2NBQzdCLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7UUFDNUMsQ0FBQyxtQkFBQSxRQUFRLENBQUMsYUFBYSxFQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3ZILElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7YUFDcEQ7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVNLFVBQVUsQ0FBQyxHQUFXLEVBQUUsT0FBaUI7O2NBQ3hDLE9BQU8sR0FBWSxJQUFJO1FBQzdCLENBQUMsbUJBQUEsUUFBUSxDQUFDLGFBQWEsRUFBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUMvRSxDQUFDOzs7Ozs7O0lBRU0sV0FBVyxDQUFDLEdBQVcsRUFBRSxJQUFZLEVBQUUsS0FBVTs7Y0FDaEQsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ3BDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFO1lBQ2pELE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDOzs7Ozs7SUFFTSxXQUFXLENBQUMsR0FBVyxFQUFFLElBQVk7O2NBQ3BDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsR0FBVzs7Y0FDdkIsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQ2hDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVNLFlBQVksQ0FBQyxHQUFXOztjQUN2QixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDaEMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRU0sUUFBUSxDQUFDLEdBQVc7UUFDekIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRU0sZUFBZSxDQUFDLEdBQVcsRUFBRSxTQUFjOztjQUMxQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7O1lBQ2hDLFdBQVcsR0FBRyxTQUFTOztZQUN2QixRQUFRLEdBQVksSUFBSTtRQUM1QixJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTs7Z0JBQzdDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUM7WUFDckQsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7O3NCQUN2QyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUM5QyxJQUFJLE1BQU0sRUFBRTtvQkFDVixjQUFjLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztvQkFDaEMsSUFBSSxjQUFjLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTt3QkFDbkQsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTs0QkFDakQsV0FBVyxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7eUJBQ3REO3dCQUNELE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQzt3QkFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUN6QztpQkFDRjthQUNGO2lCQUFNO2dCQUNMLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7b0JBQ2pELFdBQVcsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDO2lCQUN0RDtnQkFDRCx3Q0FBd0M7Z0JBQ3hDLGNBQWMsQ0FBQyxPQUFPOzs7O2dCQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxXQUFXLEVBQUU7d0JBQ2xGLFFBQVEsR0FBRyxLQUFLLENBQUM7cUJBQ2xCO2dCQUNILENBQUMsRUFBQyxDQUFDO2dCQUNILElBQUksUUFBUSxFQUFFO29CQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLEdBQUcsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7aUJBQ3BFO2FBQ0Y7WUFDRCxJQUFJLFFBQVEsRUFBRTtnQkFDWixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsY0FBYyxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNsRztTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sa0JBQWtCLENBQUMsR0FBVyxFQUFFLGNBQXNCOztjQUNyRCxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7O2dCQUM3QyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDO1lBQ3JELElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFOztzQkFDdkMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDOUMsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsY0FBYyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7b0JBQ2hDLElBQUksY0FBYyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUU7OzRCQUMvQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO3dCQUNkLGNBQWMsQ0FBQyxPQUFPOzs7Ozt3QkFBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDaEMsSUFBSSxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7Z0NBQzFCLElBQUksR0FBRyxDQUFDLEtBQUssS0FBSyxjQUFjLElBQUksR0FBRyxDQUFDLEtBQUssS0FBSyxjQUFjLEVBQUU7b0NBQ2hFLEtBQUssR0FBRyxDQUFDLENBQUM7aUNBQ1g7NkJBQ0Y7aUNBQU07Z0NBQ0wsSUFBSSxHQUFHLEtBQUssY0FBYyxFQUFFO29DQUMxQixLQUFLLEdBQUcsQ0FBQyxDQUFDO2lDQUNYOzZCQUNGO3dCQUNILENBQUMsRUFBQyxDQUFDO3dCQUNILElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFOzRCQUNoQixjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDakM7d0JBQ0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztxQkFDekM7aUJBQ0Y7YUFDRjtpQkFBTTs7b0JBQ0QsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDZCxjQUFjLENBQUMsT0FBTzs7Ozs7Z0JBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ2hDLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO3dCQUMxQixJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssY0FBYyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssY0FBYyxFQUFFOzRCQUNoRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO3lCQUNYO3FCQUNGO3lCQUFNO3dCQUNMLElBQUksR0FBRyxLQUFLLGNBQWMsRUFBRTs0QkFDMUIsS0FBSyxHQUFHLENBQUMsQ0FBQzt5QkFDWDtxQkFDRjtnQkFDSCxDQUFDLEVBQUMsQ0FBQztnQkFDSCxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDaEIsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ2pDO2dCQUNELElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQzthQUN2RDtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ2pGO0lBQ0gsQ0FBQzs7Ozs7OztJQUVNLGtCQUFrQixDQUN2QixHQUFXLEVBQ1gsTUFPQyxFQUNELE1BQVk7UUFFWix3RkFBd0Y7UUFDeEYsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxtQkFBQSxNQUFNLEVBQTBCLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7OztJQUVNLGtCQUFrQixDQUFDLEdBQVcsRUFBRSxJQUE0QixFQUFFLE1BQW1DOztjQUNoRyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7a0JBQzNDLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTTs7a0JBQ3pILGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLENBQUM7O2tCQUVuRixTQUFTLHFCQUNWLENBQUMsa0JBQWtCLElBQUksRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQzlDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxDQUFDLEVBQzFELENBQUMsb0JBQW9CLElBQUksRUFBRSxvQkFBb0IsRUFBRSxDQUFDLEVBQ2xELENBQUMsc0JBQXNCLElBQUksRUFBRSxzQkFBc0IsRUFBRSxDQUFDLEVBQ3RELENBQUMsU0FBUyxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFDNUIsQ0FBQyxhQUFhLElBQUksYUFBYSxDQUFDLElBQ25DLGVBQWUsRUFDYixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsSUFBSSxDQUFDLHFCQUFxQixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsR0FDcEk7WUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUMzRTtJQUNILENBQUM7Ozs7OztJQUVELDJCQUEyQixDQUFDLEdBQVcsRUFBRSxVQUFzQzs7Y0FDdkUsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLHlCQUF5QixFQUFFO1lBQ2pELE9BQU87U0FDUjs7Y0FFSyxNQUFNLHFCQUNQLE9BQU8sQ0FBQyxNQUFNLEVBQ2QsVUFBVSxDQUNkO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7Ozs7O0lBdUJPLDZCQUE2QixDQUFDLG1CQUF3QztRQUM1RSxRQUFRLG1CQUFtQixFQUFFO1lBQzNCLEtBQUssZUFBZTtnQkFDbEIsT0FBTyxtQkFBbUIsQ0FBQztZQUM3QjtnQkFDRSxPQUFPLFNBQVMsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7OztJQWlDTSxVQUFVLENBQUMsR0FBVyxFQUFFLE9BQWdCOztjQUN2QyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO2dCQUN2RCxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3JDLFVBQVU7Z0JBQ1YsWUFBWSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVTs7O2dCQUFDLEdBQUcsRUFBRTtvQkFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3hELENBQUMsR0FBRSxLQUFLLENBQUMsQ0FBQzthQUNYO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztnQkFDeEQsWUFBWSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNyQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3JDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLHdCQUF3QixDQUFDLEVBQUU7b0JBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDeEM7YUFDRjtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDekU7SUFDSCxDQUFDOzs7Ozs7OztJQUVNLFVBQVUsQ0FDZixHQUFXLEVBQ1gsZUFBb0IsRUFDcEIsV0FBbUIsbUJBQW1CLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFDbEUsWUFBa0I7UUFFbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFO1lBQ2pELE9BQU8sQ0FBQyxLQUFLLENBQUMsNkRBQTZELENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtZQUNwRyxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUU7WUFDeEIscURBQXFEO1lBQ3JELGVBQWUsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQztTQUM1QztRQUVELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNDLCtCQUErQjtZQUMvQixPQUFPLElBQUksQ0FBQztTQUNiOztjQUVLLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7O1lBQ25DLGFBQWE7O1lBQUUsWUFBWTtRQUMvQixJQUFJLE9BQU8sRUFBRTtZQUNYLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNuQixZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTzs7Ozs7WUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRTtnQkFDM0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7OztnQkFBQyxDQUFDLGVBQWUsRUFBRSxFQUFFLEVBQUUsRUFBRTtvQkFDaEQsSUFBSSxlQUFlLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTt3QkFDL0IsYUFBYSxHQUFHLEVBQUUsQ0FBQzt3QkFDbkIsWUFBWSxHQUFHLEVBQUUsQ0FBQztxQkFDbkI7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztZQUVILCtDQUErQztZQUMvQyxRQUFRLFFBQVEsRUFBRTtnQkFDaEIsS0FBSyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsV0FBVztvQkFDbEQsa0NBQWtDO29CQUNsQywwQkFBMEI7b0JBQzFCLE1BQU07Z0JBQ1IsS0FBSyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsV0FBVztvQkFDbEQsa0NBQWtDO29CQUNsQyxZQUFZLElBQUksQ0FBQyxDQUFDO29CQUNsQixNQUFNO2dCQUNSLEtBQUssbUJBQW1CLENBQUMsZUFBZSxDQUFDLFdBQVc7b0JBQ2xELHNDQUFzQztvQkFDdEMsWUFBWSxHQUFHLENBQUMsQ0FBQztvQkFDakIsYUFBYSxHQUFHLENBQUMsQ0FBQztvQkFDbEIsTUFBTTtnQkFDUixLQUFLLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxjQUFjO29CQUNyRCx5Q0FBeUM7b0JBQ3pDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUMvQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFDbEUsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7WUFFRCxJQUFJLGFBQWEsS0FBSyxDQUFDLENBQUMsSUFBSSxZQUFZLEtBQUssQ0FBQyxDQUFDLEVBQUU7O3NCQUN6QyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7Z0JBQ3JGLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOztzQkFDckIsV0FBVyxHQUFHLElBQUksZUFBZSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7Z0JBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDakYsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQzthQUNoRjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxhQUFhLENBQUMsR0FBVztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUIsMkJBQTJCO1lBQzNCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7O2NBQ0ssT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ3BDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFOztnQkFDN0MsYUFBYSxHQUFHLENBQUMsQ0FBQzs7Z0JBQ2xCLFlBQVksR0FBRyxDQUFDLENBQUM7WUFFckIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTzs7Ozs7WUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRTtnQkFDM0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7OztnQkFBQyxDQUFDLGVBQWUsRUFBRSxFQUFFLEVBQUUsRUFBRTtvQkFDaEQsSUFBSSxlQUFlLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTt3QkFDL0IsYUFBYSxHQUFHLEVBQUUsQ0FBQzt3QkFDbkIsWUFBWSxHQUFHLEVBQUUsQ0FBQztxQkFDbkI7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztZQUVILElBQUksYUFBYSxLQUFLLENBQUMsQ0FBQyxJQUFJLFlBQVksS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNwRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2FBQzNFO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFTSxRQUFRLENBQUMsSUFBZ0IsRUFBRSxJQUFJLEdBQUcsRUFBRTs7WUFDckMsQ0FBTTtRQUNWLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixDQUFDLEdBQUcsVUFBVTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUUsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLEtBQTZCO1FBQ2hELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7QUEvdUJhLG1DQUFlLEdBQUc7SUFDOUIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsY0FBYyxFQUFFLGdCQUFnQjtDQUNqQyxDQUFDOztZQWJILFVBQVU7Ozs7WUFsQ0YsZ0JBQWdCO1lBRmhCLGdCQUFnQjtZQUZoQixTQUFTO1lBUFQsVUFBVTtZQUtWLGdCQUFnQjs7OztJQWdEdkIsb0NBS0U7Ozs7O0lBWEYsdUNBQXNCOzs7OztJQUN0QixvQ0FBbUI7Ozs7O0lBQ25CLDBDQUE0Qjs7Ozs7SUFDNUIseUNBQThCOzs7OztJQUM5QixnREFBK0I7O0lBNmlCL0IsK0NBb0JFOztJQVdGLG9EQTZCRTs7Ozs7SUEvbEJBLHNDQUFpQzs7Ozs7SUFDakMsMkNBQXNDOzs7OztJQUN0Qyx3Q0FBNEI7Ozs7O0lBQzVCLG1DQUF3Qjs7Ozs7SUFDeEIscUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG4vLyBWZW5kb3JcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgQXBwQnJpZGdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBwLWJyaWRnZS9BcHBCcmlkZ2UnO1xuaW1wb3J0IHsgRm9ybVV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybS11dGlscy9Gb3JtVXRpbHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b01vZGFsU2VydmljZSB9IGZyb20gJy4uL21vZGFsL01vZGFsU2VydmljZSc7XG5pbXBvcnQgeyBFbnRpdHlQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi4vcGlja2VyL2V4dHJhcy9lbnRpdHktcGlja2VyLXJlc3VsdHMvRW50aXR5UGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBOb3ZvVG9hc3RTZXJ2aWNlLCBUb2FzdE9wdGlvbnMgfSBmcm9tICcuLi90b2FzdC9Ub2FzdFNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VzdG9tSHR0cCwgTW9kaWZ5UGlja2VyQ29uZmlnQXJncywgT3B0aW9uc0Z1bmN0aW9uIH0gZnJvbSAnLi9GaWVsZEludGVyYWN0aW9uQXBpVHlwZXMnO1xuaW1wb3J0IHsgQ29udHJvbENvbmZpcm1Nb2RhbCwgQ29udHJvbFByb21wdE1vZGFsIH0gZnJvbSAnLi9GaWVsZEludGVyYWN0aW9uTW9kYWxzJztcbmltcG9ydCB7IE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi9Gb3JtQ29udHJvbHMnO1xuaW1wb3J0IHsgSUZpZWxkSW50ZXJhY3Rpb25FdmVudCwgTm92b0ZpZWxkc2V0LCBSZXN1bHRzVGVtcGxhdGVUeXBlIH0gZnJvbSAnLi9Gb3JtSW50ZXJmYWNlcyc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Gb3JtQ29udHJvbCB9IGZyb20gJy4vTm92b0Zvcm1Db250cm9sJztcblxuY2xhc3MgQ3VzdG9tSHR0cEltcGwgaW1wbGVtZW50cyBDdXN0b21IdHRwIHtcbiAgdXJsOiBzdHJpbmc7XG4gIG9wdGlvbnM6IGFueTtcbiAgbWFwRm4gPSAoeCkgPT4geDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIGdldCh1cmw6IHN0cmluZywgb3B0aW9ucz86IGFueSk6IEN1c3RvbUh0dHAge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtYXAobWFwRm4pOiBDdXN0b21IdHRwIHtcbiAgICB0aGlzLm1hcEZuID0gbWFwRm47XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdWJzY3JpYmUocmVzb2x2ZTogYW55LCByZWplY3Q/OiBhbnkpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy51cmwsIHRoaXMub3B0aW9ucylcbiAgICAgIC5waXBlKG1hcCh0aGlzLm1hcEZuKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzb2x2ZSwgcmVqZWN0KTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmllbGRJbnRlcmFjdGlvbkFwaSB7XG4gIHByaXZhdGUgX2dsb2JhbHM6IGFueTtcbiAgcHJpdmF0ZSBfZm9ybTogYW55O1xuICBwcml2YXRlIF9jdXJyZW50S2V5OiBzdHJpbmc7XG4gIHByaXZhdGUgX2FwcEJyaWRnZTogQXBwQnJpZGdlO1xuICBwcml2YXRlIGFzeW5jQmxvY2tUaW1lb3V0OiBhbnk7XG5cbiAgcHVibGljIHN0YXRpYyBGSUVMRF9QT1NJVElPTlMgPSB7XG4gICAgQUJPVkVfRklFTEQ6ICdBQk9WRV9GSUVMRCcsXG4gICAgQkVMT1dfRklFTEQ6ICdCRUxPV19GSUVMRCcsXG4gICAgVE9QX09GX0ZPUk06ICdUT1BfT0ZfRk9STScsXG4gICAgQk9UVE9NX09GX0ZPUk06ICdCT1RUT01fT0ZfRk9STScsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0b2FzdGVyOiBOb3ZvVG9hc3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOb3ZvTW9kYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybVV0aWxzOiBGb3JtVXRpbHMsXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICApIHsgfVxuXG4gIHNldCBmb3JtKGZvcm06IGFueSkge1xuICAgIHRoaXMuX2Zvcm0gPSBmb3JtO1xuICB9XG5cbiAgZ2V0IGZvcm0oKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybTtcbiAgfVxuXG4gIGdldCBhc3NvY2lhdGlvbnMoKTogb2JqZWN0IHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmhhc093blByb3BlcnR5KCdhc3NvY2lhdGlvbnMnKSA/IHRoaXMuZm9ybS5hc3NvY2lhdGlvbnMgOiB7fTtcbiAgfVxuXG4gIGdldCBjdXJyZW50RW50aXR5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudEVudGl0eScpID8gdGhpcy5mb3JtLmN1cnJlbnRFbnRpdHkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgY3VycmVudEVudGl0eUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudEVudGl0eUlkJykgPyB0aGlzLmZvcm0uY3VycmVudEVudGl0eUlkIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGlzRWRpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmhhc093blByb3BlcnR5KCdlZGl0JykgPyB0aGlzLmZvcm0uZWRpdCA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGlzQWRkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0uaGFzT3duUHJvcGVydHkoJ2VkaXQnKSA/ICF0aGlzLmZvcm0uZWRpdCA6IGZhbHNlO1xuICB9XG5cbiAgc2V0IGdsb2JhbHMoZ2xvYmFsczogYW55KSB7XG4gICAgdGhpcy5fZ2xvYmFscyA9IGdsb2JhbHM7XG4gIH1cblxuICBnZXQgZ2xvYmFscygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9nbG9iYWxzO1xuICB9XG5cbiAgc2V0IGN1cnJlbnRLZXkoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jdXJyZW50S2V5ID0ga2V5O1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRLZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEtleTtcbiAgfVxuXG4gIHNldCBhcHBCcmlkZ2UoYXBwQnJpZGdlOiBBcHBCcmlkZ2UpIHtcbiAgICB0aGlzLl9hcHBCcmlkZ2UgPSBhcHBCcmlkZ2U7XG4gIH1cblxuICBnZXQgYXBwQnJpZGdlKCk6IEFwcEJyaWRnZSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcEJyaWRnZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0FjdGl2ZUNvbnRyb2xWYWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmdldFZhbHVlKHRoaXMuY3VycmVudEtleSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlQ29udHJvbCgpOiBOb3ZvRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRyb2wodGhpcy5jdXJyZW50S2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3RpdmVLZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50S2V5O1xuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZVZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUodGhpcy5jdXJyZW50S2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3RpdmVJbml0aWFsVmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbml0aWFsVmFsdWUodGhpcy5jdXJyZW50S2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWVsZFNldChrZXk6IHN0cmluZyk6IE5vdm9GaWVsZHNldCB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tGaWVsZEludGVyYWN0aW9uQVBJXSAtIGludmFsaWQgb3IgbWlzc2luZyBcImtleVwiJyk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkU2V0ID0gdGhpcy5mb3JtLmZpZWxkc2V0cy5maW5kKChmczogTm92b0ZpZWxkc2V0KSA9PiBmcy5rZXkgJiYgZnMua2V5LnRvTG93ZXJDYXNlKCkgPT09IGtleS50b0xvd2VyQ2FzZSgpKTtcbiAgICBpZiAoIWZpZWxkU2V0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRmllbGRJbnRlcmFjdGlvbkFQSV0gLSBjb3VsZCBub3QgZmluZCBhIGZpZWxkc2V0IGluIHRoZSBmb3JtIGJ5IHRoZSBrZXkgLS0nLCBrZXkpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmllbGRTZXQgYXMgTm92b0ZpZWxkc2V0O1xuICB9XG5cbiAgcHVibGljIGdldENvbnRyb2woa2V5OiBzdHJpbmcpOiBOb3ZvRm9ybUNvbnRyb2wge1xuICAgIGlmICgha2V5KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRmllbGRJbnRlcmFjdGlvbkFQSV0gLSBpbnZhbGlkIG9yIG1pc3NpbmcgXCJrZXlcIicpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5mb3JtLmNvbnRyb2xzW2tleV07XG4gICAgaWYgKCFjb250cm9sKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRmllbGRJbnRlcmFjdGlvbkFQSV0gLSBjb3VsZCBub3QgZmluZCBhIGNvbnRyb2wgaW4gdGhlIGZvcm0gYnkgdGhlIGtleSAtLScsIGtleSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sIGFzIE5vdm9Gb3JtQ29udHJvbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRWYWx1ZShrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICByZXR1cm4gY29udHJvbC52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmF3VmFsdWUoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgcmV0dXJuIGNvbnRyb2wucmF3VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIGdldEluaXRpYWxWYWx1ZShrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICByZXR1cm4gY29udHJvbC5pbml0aWFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIHNldFZhbHVlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIHZhbHVlOiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U/OiBib29sZWFuO1xuICAgICAgZW1pdFZpZXdUb01vZGVsQ2hhbmdlPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3ZhbHVlJywgdmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHBhdGNoVmFsdWUoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgdmFsdWU6IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICAgIGVtaXRNb2RlbFRvVmlld0NoYW5nZT86IGJvb2xlYW47XG4gICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnNldFZhbHVlKHZhbHVlLCBvcHRpb25zKTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAndmFsdWUnLCB2YWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0UmVhZE9ubHkoa2V5OiBzdHJpbmcsIGlzUmVhZE9ubHk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5zZXRSZWFkT25seShpc1JlYWRPbmx5KTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAncmVhZE9ubHknLCB2YWx1ZTogaXNSZWFkT25seSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0UmVxdWlyZWQoa2V5OiBzdHJpbmcsIHJlcXVpcmVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuc2V0UmVxdWlyZWQocmVxdWlyZWQpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdyZXF1aXJlZCcsIHZhbHVlOiByZXF1aXJlZCB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGlkZShrZXk6IHN0cmluZywgY2xlYXJWYWx1ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5oaWRlKGNsZWFyVmFsdWUpO1xuICAgICAgdGhpcy5kaXNhYmxlKGtleSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdoaWRkZW4nLCB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2hvdyhrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnNob3coKTtcbiAgICAgIHRoaXMuZW5hYmxlKGtleSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdoaWRkZW4nLCB2YWx1ZTogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhpZGVGaWVsZFNldEhlYWRlcihrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGZpZWxkU2V0ID0gdGhpcy5nZXRGaWVsZFNldChrZXkpO1xuICAgIGlmIChmaWVsZFNldCkge1xuICAgICAgZmllbGRTZXQuaGlkZGVuID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2hvd0ZpZWxkU2V0SGVhZGVyKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgZmllbGRTZXQgPSB0aGlzLmdldEZpZWxkU2V0KGtleSk7XG4gICAgaWYgKGZpZWxkU2V0KSB7XG4gICAgICBmaWVsZFNldC5oaWRkZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGlzYWJsZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5kaXNhYmxlKG9wdGlvbnMpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdyZWFkT25seScsIHZhbHVlOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBlbmFibGUoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuZW5hYmxlKG9wdGlvbnMpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdyZWFkT25seScsIHZhbHVlOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbWFya0FzSW52YWxpZChrZXk6IHN0cmluZywgdmFsaWRhdGlvbk1lc3NhZ2U/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgY29udHJvbC5tYXJrQXNJbnZhbGlkKHZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbWFya0FzRGlydHkoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eShvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbWFya0FzUGVuZGluZyhcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLm1hcmtBc1BlbmRpbmcob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1hcmtBc1ByaXN0aW5lKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzUHJpc3RpbmUob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1hcmtBc1RvdWNoZWQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNVbnRvdWNoZWQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5tYXJrQXNVbnRvdWNoZWQob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5VG9hc3QodG9hc3RDb25maWc6IFRvYXN0T3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRvYXN0ZXIpIHtcbiAgICAgIHRoaXMudG9hc3Rlci5hbGVydCh0b2FzdENvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRpc3BsYXlUaXAoa2V5OiBzdHJpbmcsIHRpcDogc3RyaW5nLCBpY29uPzogc3RyaW5nLCBhbGxvd0Rpc21pc3M/OiBib29sZWFuLCBzYW5pdGl6ZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC50aXBXZWxsID0ge1xuICAgICAgICB0aXAsXG4gICAgICAgIGljb24sXG4gICAgICAgIGJ1dHRvbjogYWxsb3dEaXNtaXNzLFxuICAgICAgICBzYW5pdGl6ZTogc2FuaXRpemUgIT09IGZhbHNlLCAvLyBkZWZhdWx0cyB0byB0cnVlIHdoZW4gdW5kZWZpbmVkXG4gICAgICB9O1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICd0aXBXZWxsJywgdmFsdWU6IHRpcCB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0VG9vbHRpcChrZXk6IHN0cmluZywgdG9vbHRpcDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wudG9vbHRpcCA9IHRvb2x0aXA7XG4gICAgICBpZiAodG9vbHRpcC5sZW5ndGggPj0gNDAgJiYgdG9vbHRpcC5sZW5ndGggPD0gNDAwKSB7XG4gICAgICAgIGNvbnRyb2wudG9vbHRpcFNpemUgPSAnbGFyZ2UnO1xuICAgICAgICBjb250cm9sLnRvb2x0aXBQcmVsaW5lID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodG9vbHRpcC5sZW5ndGggPiA0MDApIHtcbiAgICAgICAgY29udHJvbC50b29sdGlwU2l6ZSA9ICdleHRyYS1sYXJnZSc7XG4gICAgICB9XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3Rvb2x0aXAnLCB2YWx1ZTogdG9vbHRpcCB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29uZmlybUNoYW5nZXMoa2V5OiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5nZXRQcm9wZXJ0eShrZXksICd2YWx1ZUhpc3RvcnknKTtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IGhpc3RvcnlbaGlzdG9yeS5sZW5ndGggLSAyXTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoa2V5KTtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnbGFiZWwnKTtcbiAgICAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBhbnkpLmJsdXIoKTtcbiAgICByZXR1cm4gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihDb250cm9sQ29uZmlybU1vZGFsLCB7IG9sZFZhbHVlLCBuZXdWYWx1ZSwgbGFiZWwsIG1lc3NhZ2UsIGtleSB9KS5vbkNsb3NlZC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoa2V5LCBvbGRWYWx1ZSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHByb21wdFVzZXIoa2V5OiBzdHJpbmcsIGNoYW5nZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3Qgc2hvd1llczogYm9vbGVhbiA9IHRydWU7XG4gICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgYW55KS5ibHVyKCk7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQ29udHJvbFByb21wdE1vZGFsLCB7IGNoYW5nZXMsIGtleSB9KS5vbkNsb3NlZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQcm9wZXJ0eShrZXk6IHN0cmluZywgcHJvcDogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2xbcHJvcF0gPSB2YWx1ZTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wLCB2YWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0UHJvcGVydHkoa2V5OiBzdHJpbmcsIHByb3A6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIHJldHVybiBjb250cm9sW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBpc1ZhbHVlRW1wdHkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoa2V5KTtcbiAgICByZXR1cm4gSGVscGVycy5pc0VtcHR5KHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBpc1ZhbHVlQmxhbmsoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoa2V5KTtcbiAgICByZXR1cm4gSGVscGVycy5pc0JsYW5rKHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBoYXNGaWVsZChrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZm9ybS5jb250cm9sc1trZXldO1xuICB9XG5cbiAgcHVibGljIGFkZFN0YXRpY09wdGlvbihrZXk6IHN0cmluZywgbmV3T3B0aW9uOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgbGV0IG9wdGlvblRvQWRkID0gbmV3T3B0aW9uO1xuICAgIGxldCBpc1VuaXF1ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgbGV0IGN1cnJlbnRPcHRpb25zID0gdGhpcy5nZXRQcm9wZXJ0eShrZXksICdvcHRpb25zJyk7XG4gICAgICBpZiAoIWN1cnJlbnRPcHRpb25zIHx8ICFjdXJyZW50T3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXRQcm9wZXJ0eShrZXksICdjb25maWcnKTtcbiAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgIGN1cnJlbnRPcHRpb25zID0gY29uZmlnLm9wdGlvbnM7XG4gICAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25zICYmIEFycmF5LmlzQXJyYXkoY3VycmVudE9wdGlvbnMpKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudE9wdGlvbnNbMF0udmFsdWUgJiYgIW9wdGlvblRvQWRkLnZhbHVlKSB7XG4gICAgICAgICAgICAgIG9wdGlvblRvQWRkID0geyB2YWx1ZTogbmV3T3B0aW9uLCBsYWJlbDogbmV3T3B0aW9uIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25maWcub3B0aW9ucyA9IFsuLi5jdXJyZW50T3B0aW9ucywgb3B0aW9uVG9BZGRdO1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICdjb25maWcnLCBjb25maWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25zWzBdLnZhbHVlICYmICFvcHRpb25Ub0FkZC52YWx1ZSkge1xuICAgICAgICAgIG9wdGlvblRvQWRkID0geyB2YWx1ZTogbmV3T3B0aW9uLCBsYWJlbDogbmV3T3B0aW9uIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5zdXJlIGR1cGxpY2F0ZSB2YWx1ZXMgYXJlIG5vdCBhZGRlZFxuICAgICAgICBjdXJyZW50T3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICBpZiAoKG9wdGlvbi52YWx1ZSAmJiBvcHRpb24udmFsdWUgPT09IG9wdGlvblRvQWRkLnZhbHVlKSB8fCBvcHRpb24gPT09IG9wdGlvblRvQWRkKSB7XG4gICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc1VuaXF1ZSkge1xuICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnb3B0aW9ucycsIFsuLi5jdXJyZW50T3B0aW9ucywgb3B0aW9uVG9BZGRdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzVW5pcXVlKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnb3B0aW9ucycsIHZhbHVlOiBbLi4uY3VycmVudE9wdGlvbnMsIG9wdGlvblRvQWRkXSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlU3RhdGljT3B0aW9uKGtleTogc3RyaW5nLCBvcHRpb25Ub1JlbW92ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGxldCBjdXJyZW50T3B0aW9ucyA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnb3B0aW9ucycpO1xuICAgICAgaWYgKCFjdXJyZW50T3B0aW9ucyB8fCAhY3VycmVudE9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJyk7XG4gICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zO1xuICAgICAgICAgIGlmIChjdXJyZW50T3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KGN1cnJlbnRPcHRpb25zKSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgICAgICBjdXJyZW50T3B0aW9ucy5mb3JFYWNoKChvcHQsIGkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG9wdC52YWx1ZSB8fCBvcHQubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0LnZhbHVlID09PSBvcHRpb25Ub1JlbW92ZSB8fCBvcHQubGFiZWwgPT09IG9wdGlvblRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChvcHQgPT09IG9wdGlvblRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgY3VycmVudE9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbmZpZy5vcHRpb25zID0gWy4uLmN1cnJlbnRPcHRpb25zXTtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJywgY29uZmlnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBjdXJyZW50T3B0aW9ucy5mb3JFYWNoKChvcHQsIGkpID0+IHtcbiAgICAgICAgICBpZiAob3B0LnZhbHVlIHx8IG9wdC5sYWJlbCkge1xuICAgICAgICAgICAgaWYgKG9wdC52YWx1ZSA9PT0gb3B0aW9uVG9SZW1vdmUgfHwgb3B0LmxhYmVsID09PSBvcHRpb25Ub1JlbW92ZSkge1xuICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvcHQgPT09IG9wdGlvblRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgY3VycmVudE9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ29wdGlvbnMnLCBbLi4uY3VycmVudE9wdGlvbnNdKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnb3B0aW9ucycsIHZhbHVlOiBjb250cm9sLm9wdGlvbnMgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1vZGlmeVBpY2tlckNvbmZpZyhcbiAgICBrZXk6IHN0cmluZyxcbiAgICBjb25maWc6IHtcbiAgICAgIGZvcm1hdD86IHN0cmluZztcbiAgICAgIG9wdGlvbnNVcmw/OiBzdHJpbmc7XG4gICAgICBvcHRpb25zVXJsQnVpbGRlcj86IEZ1bmN0aW9uO1xuICAgICAgb3B0aW9uc1Byb21pc2U/OiBhbnk7XG4gICAgICBvcHRpb25zPzogYW55W107XG4gICAgICByZXN1bHRzVGVtcGxhdGVUeXBlPzogUmVzdWx0c1RlbXBsYXRlVHlwZTtcbiAgICB9LFxuICAgIG1hcHBlcj86IGFueSxcbiAgKTogdm9pZCB7XG4gICAgLy8gY2FsbCBhbm90aGVyIHB1YmxpYyBtZXRob2QgdG8gYXZvaWQgYSBicmVha2luZyBjaGFuZ2UgYnV0IHN0aWxsIGVuYWJsZSBzdHJpY3RlciB0eXBlc1xuICAgIHRoaXMubXV0YXRlUGlja2VyQ29uZmlnKGtleSwgY29uZmlnIGFzIE1vZGlmeVBpY2tlckNvbmZpZ0FyZ3MsIG1hcHBlcik7XG4gIH1cblxuICBwdWJsaWMgbXV0YXRlUGlja2VyQ29uZmlnKGtleTogc3RyaW5nLCBhcmdzOiBNb2RpZnlQaWNrZXJDb25maWdBcmdzLCBtYXBwZXI/OiAoaXRlbTogdW5rbm93bikgPT4gdW5rbm93bik6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb25zdCB7IG1pblNlYXJjaExlbmd0aCwgZW5hYmxlSW5maW5pdGVTY3JvbGwsIGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IsIGZvcm1hdCwgZ2V0TGFiZWxzLCBlbXB0eVBpY2tlck1lc3NhZ2UgfSA9IGNvbnRyb2wuY29uZmlnO1xuICAgICAgY29uc3Qgb3B0aW9uc0NvbmZpZyA9IHRoaXMuZ2V0T3B0aW9uc0NvbmZpZyhhcmdzLCBtYXBwZXIsIGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IsIGZvcm1hdCk7XG5cbiAgICAgIGNvbnN0IG5ld0NvbmZpZzogTm92b0NvbnRyb2xDb25maWdbJ2NvbmZpZyddID0ge1xuICAgICAgICAuLi4oZW1wdHlQaWNrZXJNZXNzYWdlICYmIHsgZW1wdHlQaWNrZXJNZXNzYWdlIH0pLFxuICAgICAgICAuLi4oTnVtYmVyLmlzSW50ZWdlcihtaW5TZWFyY2hMZW5ndGgpICYmIHsgbWluU2VhcmNoTGVuZ3RoIH0pLFxuICAgICAgICAuLi4oZW5hYmxlSW5maW5pdGVTY3JvbGwgJiYgeyBlbmFibGVJbmZpbml0ZVNjcm9sbCB9KSxcbiAgICAgICAgLi4uKGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IgJiYgeyBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yIH0pLFxuICAgICAgICAuLi4oZ2V0TGFiZWxzICYmIHsgZ2V0TGFiZWxzIH0pLFxuICAgICAgICAuLi4ob3B0aW9uc0NvbmZpZyAmJiBvcHRpb25zQ29uZmlnKSxcbiAgICAgICAgcmVzdWx0c1RlbXBsYXRlOlxuICAgICAgICAgIGNvbnRyb2wuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSB8fCAoJ3Jlc3VsdHNUZW1wbGF0ZVR5cGUnIGluIGFyZ3MgJiYgdGhpcy5nZXRBcHByb3ByaWF0ZVJlc3VsdHNUZW1wbGF0ZShhcmdzLnJlc3VsdHNUZW1wbGF0ZVR5cGUpKSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJywgbmV3Q29uZmlnKTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAncGlja2VyQ29uZmlnJywgdmFsdWU6IGFyZ3MgfSk7XG4gICAgfVxuICB9XG5cbiAgYWRkUHJvcGVydGllc1RvUGlja2VyQ29uZmlnKGtleTogc3RyaW5nLCBwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoIWNvbnRyb2wgfHwgY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgLi4uY29udHJvbC5jb25maWcsXG4gICAgICAuLi5wcm9wZXJ0aWVzLFxuICAgIH07XG5cbiAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ2NvbmZpZycsIGNvbmZpZyk7XG4gICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdwaWNrZXJDb25maWcnLCB2YWx1ZTogcHJvcGVydGllcyB9KTtcbiAgfVxuICBnZXRPcHRpb25zQ29uZmlnID0gKFxuICAgIGFyZ3M6IE1vZGlmeVBpY2tlckNvbmZpZ0FyZ3MsXG4gICAgbWFwcGVyPzogKGl0ZW06IHVua25vd24pID0+IHVua25vd24sXG4gICAgZmlsdGVyZWRPcHRpb25zQ3JlYXRvcj86ICh3aGVyZTogc3RyaW5nKSA9PiAocXVlcnk6IHN0cmluZykgPT4gUHJvbWlzZTx1bmtub3duW10+LFxuICAgIHBpY2tlckNvbmZpZ0Zvcm1hdD86IHN0cmluZyxcbiAgKTogdW5kZWZpbmVkIHwgeyBvcHRpb25zOiB1bmtub3duW10gfSB8IHsgb3B0aW9uczogT3B0aW9uc0Z1bmN0aW9uOyBmb3JtYXQ/OiBzdHJpbmcgfSA9PiB7XG4gICAgaWYgKGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IgfHwgJ29wdGlvbnNVcmwnIGluIGFyZ3MgfHwgJ29wdGlvbnNVcmxCdWlsZGVyJyBpbiBhcmdzIHx8ICdvcHRpb25zUHJvbWlzZScgaW4gYXJncykge1xuICAgICAgY29uc3QgZm9ybWF0ID0gKCdmb3JtYXQnIGluIGFyZ3MgJiYgYXJncy5mb3JtYXQpIHx8IHBpY2tlckNvbmZpZ0Zvcm1hdDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IHRoaXMuY3JlYXRlT3B0aW9uc0Z1bmN0aW9uKGFyZ3MsIG1hcHBlciwgZmlsdGVyZWRPcHRpb25zQ3JlYXRvciksXG4gICAgICAgIC4uLignZW1wdHlQaWNrZXJNZXNzYWdlJyBpbiBhcmdzICYmIHsgZW1wdHlQaWNrZXJNZXNzYWdlOiBhcmdzLmVtcHR5UGlja2VyTWVzc2FnZSB9KSxcbiAgICAgICAgLi4uKGZvcm1hdCAmJiB7IGZvcm1hdCB9KSxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICgnb3B0aW9ucycgaW4gYXJncyAmJiBBcnJheS5pc0FycmF5KGFyZ3Mub3B0aW9ucykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IFsuLi5hcmdzLm9wdGlvbnNdLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBnZXRBcHByb3ByaWF0ZVJlc3VsdHNUZW1wbGF0ZShyZXN1bHRzVGVtcGxhdGVUeXBlOiBSZXN1bHRzVGVtcGxhdGVUeXBlKSB7XG4gICAgc3dpdGNoIChyZXN1bHRzVGVtcGxhdGVUeXBlKSB7XG4gICAgICBjYXNlICdlbnRpdHktcGlja2VyJzpcbiAgICAgICAgcmV0dXJuIEVudGl0eVBpY2tlclJlc3VsdHM7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZU9wdGlvbnNGdW5jdGlvbiA9IChcbiAgICBjb25maWc6IE1vZGlmeVBpY2tlckNvbmZpZ0FyZ3MsXG4gICAgbWFwcGVyPzogKGl0ZW06IHVua25vd24pID0+IHVua25vd24sXG4gICAgZmlsdGVyZWRPcHRpb25zQ3JlYXRvcj86ICh3aGVyZT86IHN0cmluZykgPT4gKHF1ZXJ5OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIpID0+IFByb21pc2U8dW5rbm93bltdPixcbiAgKTogKChxdWVyeTogc3RyaW5nKSA9PiBQcm9taXNlPHVua25vd25bXT4pID0+IChxdWVyeTogc3RyaW5nLCBwYWdlPzogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCdvcHRpb25zUHJvbWlzZScgaW4gY29uZmlnICYmIGNvbmZpZy5vcHRpb25zUHJvbWlzZSkge1xuICAgICAgcmV0dXJuIGNvbmZpZy5vcHRpb25zUHJvbWlzZShxdWVyeSwgbmV3IEN1c3RvbUh0dHBJbXBsKHRoaXMuaHR0cCksIHBhZ2UpO1xuICAgIH0gZWxzZSBpZiAoKCdvcHRpb25zVXJsQnVpbGRlcicgaW4gY29uZmlnICYmIGNvbmZpZy5vcHRpb25zVXJsQnVpbGRlcikgfHwgKCdvcHRpb25zVXJsJyBpbiBjb25maWcgJiYgY29uZmlnLm9wdGlvbnNVcmwpKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1cmwgPSAnb3B0aW9uc1VybEJ1aWxkZXInIGluIGNvbmZpZyA/IGNvbmZpZy5vcHRpb25zVXJsQnVpbGRlcihxdWVyeSkgOiBgJHtjb25maWcub3B0aW9uc1VybH0/ZmlsdGVyPSR7cXVlcnkgfHwgJyd9YDtcbiAgICAgICAgdGhpcy5odHRwXG4gICAgICAgICAgLmdldCh1cmwpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtYXAoKHJlc3VsdHM6IHVua25vd25bXSkgPT4ge1xuICAgICAgICAgICAgICBpZiAobWFwcGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMubWFwKG1hcHBlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZShyZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yKSB7XG4gICAgICBpZiAoJ3doZXJlJyBpbiBjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IoY29uZmlnLndoZXJlKShxdWVyeSwgcGFnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmlsdGVyZWRPcHRpb25zQ3JlYXRvcigpKHF1ZXJ5LCBwYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcHVibGljIHNldExvYWRpbmcoa2V5OiBzdHJpbmcsIGxvYWRpbmc6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW2tleV0uZmllbGRJbnRlcmFjdGlvbmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBjb250cm9sLnNldEVycm9ycyh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICAgIC8vIEhpc3RvcnlcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYXN5bmNCbG9ja1RpbWVvdXQpO1xuICAgICAgICB0aGlzLmFzeW5jQmxvY2tUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRMb2FkaW5nKGtleSwgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuZGlzcGxheVRpcChrZXksIHRoaXMubGFiZWxzLmFzeW5jRmFpbHVyZSwgJ2luZm8nLCBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICdfZGlzcGxheWVkQXN5bmNGYWlsdXJlJywgdHJ1ZSk7XG4gICAgICAgIH0sIDEwMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1trZXldLmZpZWxkSW50ZXJhY3Rpb25sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFzeW5jQmxvY2tUaW1lb3V0KTtcbiAgICAgICAgY29udHJvbC5zZXRFcnJvcnMoeyBsb2FkaW5nOiBudWxsIH0pO1xuICAgICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICBpZiAodGhpcy5nZXRQcm9wZXJ0eShrZXksICdfZGlzcGxheWVkQXN5bmNGYWlsdXJlJykpIHtcbiAgICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ3RpcFdlbGwnLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdsb2FkaW5nJywgdmFsdWU6IGxvYWRpbmcgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFkZENvbnRyb2woXG4gICAga2V5OiBzdHJpbmcsXG4gICAgbWV0YUZvck5ld0ZpZWxkOiBhbnksXG4gICAgcG9zaXRpb246IHN0cmluZyA9IEZpZWxkSW50ZXJhY3Rpb25BcGkuRklFTERfUE9TSVRJT05TLkFCT1ZFX0ZJRUxELFxuICAgIGluaXRpYWxWYWx1ZT86IGFueSxcbiAgKTogdm9pZCB7XG4gICAgaWYgKCFtZXRhRm9yTmV3RmllbGQua2V5ICYmICFtZXRhRm9yTmV3RmllbGQubmFtZSkge1xuICAgICAgY29uc29sZS5lcnJvcignW0ZpZWxkSW50ZXJhY3Rpb25BUEldIC0gbWlzc2luZyBcImtleVwiIGluIG1ldGEgZm9yIG5ldyBmaWVsZCcpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIW1ldGFGb3JOZXdGaWVsZC5rZXkpIHtcbiAgICAgIC8vIElmIGtleSBpcyBub3QgZXhwbGljaXRseSBkZWNsYXJlZCwgdXNlIG5hbWUgYXMga2V5XG4gICAgICBtZXRhRm9yTmV3RmllbGQua2V5ID0gbWV0YUZvck5ld0ZpZWxkLm5hbWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1ttZXRhRm9yTmV3RmllbGQua2V5XSkge1xuICAgICAgLy8gRmllbGQgaXMgYWxyZWFkeSBvbiB0aGUgZm9ybVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZm9ybS5jb250cm9sc1trZXldO1xuICAgIGxldCBmaWVsZHNldEluZGV4LCBjb250cm9sSW5kZXg7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIGZpZWxkc2V0SW5kZXggPSAtMTtcbiAgICAgIGNvbnRyb2xJbmRleCA9IC0xO1xuXG4gICAgICB0aGlzLmZvcm0uZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0LCBmaSkgPT4ge1xuICAgICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChmaWVsZHNldENvbnRyb2wsIGNpKSA9PiB7XG4gICAgICAgICAgaWYgKGZpZWxkc2V0Q29udHJvbC5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgZmllbGRzZXRJbmRleCA9IGZpO1xuICAgICAgICAgICAgY29udHJvbEluZGV4ID0gY2k7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDaGFuZ2UgdGhlIHBvc2l0aW9uIG9mIHRoZSBuZXdseSBhZGRlZCBmaWVsZFxuICAgICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICBjYXNlIEZpZWxkSW50ZXJhY3Rpb25BcGkuRklFTERfUE9TSVRJT05TLkFCT1ZFX0ZJRUxEOlxuICAgICAgICAgIC8vIEFkZGluZyBmaWVsZCBhYm92ZSBhY3RpdmUgZmllbGRcbiAgICAgICAgICAvLyBpbmRleCBjYW4gc3RheSB0aGUgc2FtZVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEZpZWxkSW50ZXJhY3Rpb25BcGkuRklFTERfUE9TSVRJT05TLkJFTE9XX0ZJRUxEOlxuICAgICAgICAgIC8vIEFkZGluZyBmaWVsZCBiZWxvdyBhY3RpdmUgZmllbGRcbiAgICAgICAgICBjb250cm9sSW5kZXggKz0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBGaWVsZEludGVyYWN0aW9uQXBpLkZJRUxEX1BPU0lUSU9OUy5UT1BfT0ZfRk9STTpcbiAgICAgICAgICAvLyBBZGRpbmcgZmllbGQgdG8gdGhlIHRvcCBvZiB0aGUgZm9ybVxuICAgICAgICAgIGNvbnRyb2xJbmRleCA9IDA7XG4gICAgICAgICAgZmllbGRzZXRJbmRleCA9IDA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRmllbGRJbnRlcmFjdGlvbkFwaS5GSUVMRF9QT1NJVElPTlMuQk9UVE9NX09GX0ZPUk06XG4gICAgICAgICAgLy8gQWRkaW5nIGZpZWxkIHRvIHRoZSBib3R0b20gb2YgdGhlIGZvcm1cbiAgICAgICAgICBmaWVsZHNldEluZGV4ID0gdGhpcy5mb3JtLmZpZWxkc2V0cy5sZW5ndGggLSAxO1xuICAgICAgICAgIGNvbnRyb2xJbmRleCA9IHRoaXMuZm9ybS5maWVsZHNldHNbZmllbGRzZXRJbmRleF0uY29udHJvbHMubGVuZ3RoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmllbGRzZXRJbmRleCAhPT0gLTEgJiYgY29udHJvbEluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCBub3ZvQ29udHJvbCA9IHRoaXMuZm9ybVV0aWxzLmdldENvbnRyb2xGb3JGaWVsZChtZXRhRm9yTmV3RmllbGQsIHRoaXMuaHR0cCwge30pO1xuICAgICAgICBub3ZvQ29udHJvbC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgY29uc3QgZm9ybUNvbnRyb2wgPSBuZXcgTm92b0Zvcm1Db250cm9sKGluaXRpYWxWYWx1ZSwgbm92b0NvbnRyb2wpO1xuICAgICAgICB0aGlzLmZvcm0uYWRkQ29udHJvbChub3ZvQ29udHJvbC5rZXksIGZvcm1Db250cm9sKTtcbiAgICAgICAgdGhpcy5mb3JtLmZpZWxkc2V0c1tmaWVsZHNldEluZGV4XS5jb250cm9scy5zcGxpY2UoY29udHJvbEluZGV4LCAwLCBub3ZvQ29udHJvbCk7XG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnYWRkQ29udHJvbCcsIHZhbHVlOiBmb3JtQ29udHJvbCB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQ29udHJvbChrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW2tleV0pIHtcbiAgICAgIC8vIEZpZWxkIGlzIG5vdCBvbiB0aGUgZm9ybVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBsZXQgZmllbGRzZXRJbmRleCA9IC0xO1xuICAgICAgbGV0IGNvbnRyb2xJbmRleCA9IC0xO1xuXG4gICAgICB0aGlzLmZvcm0uZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0LCBmaSkgPT4ge1xuICAgICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChmaWVsZHNldENvbnRyb2wsIGNpKSA9PiB7XG4gICAgICAgICAgaWYgKGZpZWxkc2V0Q29udHJvbC5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgZmllbGRzZXRJbmRleCA9IGZpO1xuICAgICAgICAgICAgY29udHJvbEluZGV4ID0gY2k7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZmllbGRzZXRJbmRleCAhPT0gLTEgJiYgY29udHJvbEluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLmZvcm0ucmVtb3ZlQ29udHJvbChrZXkpO1xuICAgICAgICB0aGlzLmZvcm0uZmllbGRzZXRzW2ZpZWxkc2V0SW5kZXhdLmNvbnRyb2xzLnNwbGljZShjb250cm9sSW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3JlbW92ZUNvbnRyb2wnLCB2YWx1ZToga2V5IH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkZWJvdW5jZShmdW5jOiAoKSA9PiB2b2lkLCB3YWl0ID0gNTApIHtcbiAgICBsZXQgaDogYW55O1xuICAgIGNsZWFyVGltZW91dChoKTtcbiAgICBoID0gc2V0VGltZW91dCgoKSA9PiBmdW5jKCksIHdhaXQpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmlnZ2VyRXZlbnQoZXZlbnQ6IElGaWVsZEludGVyYWN0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb3JtICYmIHRoaXMuZm9ybS5maWVsZEludGVyYWN0aW9uRXZlbnRzKSB7XG4gICAgICB0aGlzLmZvcm0uZmllbGRJbnRlcmFjdGlvbkV2ZW50cy5lbWl0KGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==