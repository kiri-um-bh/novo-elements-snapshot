/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Vendor
import { map } from 'rxjs/operators';
// APP
import { NovoFormControl } from './NovoFormControl';
import { FormUtils } from '../../utils/form-utils/FormUtils';
import { NovoToastService } from '../toast/ToastService';
import { NovoModalService } from '../modal/ModalService';
import { ControlConfirmModal, ControlPromptModal } from './FieldInteractionModals';
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
class CustomHttpImpl {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.mapFn = (x) => x;
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
        this.getOptionsConfig = (args, mapper, filteredOptionsCreator, pickerConfigFormat) => {
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
        };
        this.createOptionsFunction = (config, mapper, filteredOptionsCreator) => (query, page) => {
            if ('optionsPromise' in config && config.optionsPromise) {
                return config.optionsPromise(query, new CustomHttpImpl(this.http));
            }
            else if (('optionsUrlBuilder' in config && config.optionsUrlBuilder) || ('optionsUrl' in config && config.optionsUrl)) {
                return new Promise((resolve, reject) => {
                    /** @type {?} */
                    const url = 'optionsUrlBuilder' in config ? config.optionsUrlBuilder(query) : `${config.optionsUrl}?filter=${query || ''}`;
                    this.http
                        .get(url)
                        .pipe(map((results) => {
                        if (mapper) {
                            return results.map(mapper);
                        }
                        return results;
                    }))
                        .subscribe(resolve, reject);
                });
            }
            else if (filteredOptionsCreator) {
                if ('where' in config) {
                    return filteredOptionsCreator(config.where)(query, page);
                }
                else {
                    return filteredOptionsCreator()(query, page);
                }
            }
        };
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
    getControl(key) {
        if (!key) {
            console.error('[FieldInteractionAPI] - invalid or missing "key"'); // tslint:disable-line
            return null;
        }
        /** @type {?} */
        let control = this.form.controls[key];
        if (!control) {
            console.error('[FieldInteractionAPI] - could not find a control in the form by the key --', key); // tslint:disable-line
            return null;
        }
        return (/** @type {?} */ (control));
    }
    /**
     * @param {?} associatedForm
     * @param {?} key
     * @return {?}
     */
    getAssoicatedFormControl(associatedForm, key) {
        if (!key) {
            console.error('[FieldInteractionAPI] - invalid or missing "key"'); // tslint:disable-line
            return null;
        }
        /** @type {?} */
        let control = associatedForm.controls[key];
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
        let control = this.getControl(key);
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
        let control = this.getControl(key);
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
        let control = this.getControl(key);
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
        let control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.setValue(value, options);
            this.triggerEvent({ controlKey: key, prop: 'value', value: value });
        }
    }
    /**
     * @param {?} associatedForm
     * @param {?} key
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    setAssociatedFormValue(associatedForm, key, value, options) {
        /** @type {?} */
        let control = this.getAssoicatedFormControl(associatedForm, key);
        if (control && !control.restrictFieldInteractions) {
            control.setValue(value, options);
            this.triggerEvent({ controlKey: key, prop: 'value', value: value });
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
        let control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.setValue(value, options);
            this.triggerEvent({ controlKey: key, prop: 'value', value: value });
        }
    }
    /**
     * @param {?} key
     * @param {?} isReadOnly
     * @return {?}
     */
    setReadOnly(key, isReadOnly) {
        /** @type {?} */
        let control = this.getControl(key);
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
        let control = this.getControl(key);
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
        let control = this.getControl(key);
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
        let control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.show();
            this.enable(key, { emitEvent: false });
            this.triggerEvent({ controlKey: key, prop: 'hidden', value: false });
        }
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    disable(key, options) {
        /** @type {?} */
        let control = this.getControl(key);
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
        let control = this.getControl(key);
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
        let control = this.getControl(key);
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
        let control = this.getControl(key);
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
        let control = this.getControl(key);
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
        let control = this.getControl(key);
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
        let control = this.getControl(key);
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
        let control = this.getControl(key);
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
        let control = this.getControl(key);
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
     * @return {?}
     */
    displayTip(key, tip, icon, allowDismiss) {
        /** @type {?} */
        let control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.tipWell = {
                tip: tip,
                icon: icon,
                button: allowDismiss,
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
        let control = this.getControl(key);
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
        let history = this.getProperty(key, 'valueHistory');
        /** @type {?} */
        let oldValue = history[history.length - 2];
        /** @type {?} */
        let newValue = this.getValue(key);
        /** @type {?} */
        let label = this.getProperty(key, 'label');
        ((/** @type {?} */ (document.activeElement))).blur();
        return this.modalService.open(ControlConfirmModal, { oldValue, newValue, label, message, key }).onClosed.then((result) => {
            if (!result) {
                this.setValue(key, oldValue, { emitEvent: false });
            }
        });
    }
    /**
     * @param {?} key
     * @param {?} changes
     * @return {?}
     */
    promptUser(key, changes) {
        /** @type {?} */
        let showYes = true;
        ((/** @type {?} */ (document.activeElement))).blur();
        return this.modalService.open(ControlPromptModal, { changes: changes, key: key }).onClosed;
    }
    /**
     * @param {?} key
     * @param {?} prop
     * @param {?} value
     * @return {?}
     */
    setProperty(key, prop, value) {
        /** @type {?} */
        let control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control[prop] = value;
            this.triggerEvent({ controlKey: key, prop: prop, value: value });
        }
    }
    /**
     * @param {?} key
     * @param {?} prop
     * @return {?}
     */
    getProperty(key, prop) {
        /** @type {?} */
        let control = this.getControl(key);
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
        let value = this.getValue(key);
        return Helpers.isEmpty(value);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    isValueBlank(key) {
        /** @type {?} */
        let value = this.getValue(key);
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
        let control = this.getControl(key);
        /** @type {?} */
        let optionToAdd = newOption;
        /** @type {?} */
        let isUnique = true;
        if (control && !control.restrictFieldInteractions) {
            /** @type {?} */
            let currentOptions = this.getProperty(key, 'options');
            if (!currentOptions || !currentOptions.length) {
                /** @type {?} */
                let config = this.getProperty(key, 'config');
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
                currentOptions.forEach((option) => {
                    if ((option.value && option.value === optionToAdd.value) || option === optionToAdd) {
                        isUnique = false;
                    }
                });
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
        let control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            /** @type {?} */
            let currentOptions = this.getProperty(key, 'options');
            if (!currentOptions || !currentOptions.length) {
                /** @type {?} */
                let config = this.getProperty(key, 'config');
                if (config) {
                    currentOptions = config.options;
                    if (currentOptions && Array.isArray(currentOptions)) {
                        /** @type {?} */
                        let index = -1;
                        currentOptions.forEach((opt, i) => {
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
                        });
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
                currentOptions.forEach((opt, i) => {
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
                });
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
        let control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            const { minSearchLength, enableInfiniteScroll, filteredOptionsCreator, format, getLabels, emptyPickerMessage } = control.config;
            /** @type {?} */
            const optionsConfig = this.getOptionsConfig(args, mapper, filteredOptionsCreator, format);
            /** @type {?} */
            const newConfig = Object.assign({}, (emptyPickerMessage && { emptyPickerMessage }), (Number.isInteger(minSearchLength) && { minSearchLength }), (enableInfiniteScroll && { enableInfiniteScroll }), (filteredOptionsCreator && { filteredOptionsCreator }), (getLabels && { getLabels }), (optionsConfig && optionsConfig), { resultsTemplate: control.config.resultsTemplate });
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
        let control = this.getControl(key);
        if (!control || control.restrictFieldInteractions) {
            return;
        }
        /** @type {?} */
        const config = Object.assign({}, control.config, properties);
        this.setProperty(key, 'config', config);
        this.triggerEvent({ controlKey: key, prop: 'pickerConfig', value: properties });
    }
    /**
     * @param {?} key
     * @param {?} loading
     * @return {?}
     */
    setLoading(key, loading) {
        /** @type {?} */
        let control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            if (loading) {
                this.form.controls[key].fieldInteractionloading = true;
                control.setErrors({ loading: true });
                // History
                clearTimeout(this.asyncBlockTimeout);
                this.asyncBlockTimeout = setTimeout(() => {
                    this.setLoading(key, false);
                    this.displayTip(key, this.labels.asyncFailure, 'info', false);
                    this.setProperty(key, '_displayedAsyncFailure', true);
                }, 10000);
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
        let control = this.form.controls[key];
        /** @type {?} */
        let fieldsetIndex;
        /** @type {?} */
        let controlIndex;
        if (control) {
            fieldsetIndex = -1;
            controlIndex = -1;
            this.form.fieldsets.forEach((fieldset, fi) => {
                fieldset.controls.forEach((fieldsetControl, ci) => {
                    if (fieldsetControl.key === key) {
                        fieldsetIndex = fi;
                        controlIndex = ci;
                    }
                });
            });
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
                let novoControl = this.formUtils.getControlForField(metaForNewField, this.http, {});
                novoControl.hidden = false;
                /** @type {?} */
                let formControl = new NovoFormControl(initialValue, novoControl);
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
        let control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            /** @type {?} */
            let fieldsetIndex = -1;
            /** @type {?} */
            let controlIndex = -1;
            this.form.fieldsets.forEach((fieldset, fi) => {
                fieldset.controls.forEach((fieldsetControl, ci) => {
                    if (fieldsetControl.key === key) {
                        fieldsetIndex = fi;
                        controlIndex = ci;
                    }
                });
            });
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
        h = setTimeout(() => func(), wait);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGRJbnRlcmFjdGlvbkFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0ZpZWxkSW50ZXJhY3Rpb25BcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUVyQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBZ0IsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFLckUsTUFBTSxjQUFjOzs7O0lBS2xCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsVUFBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFc0IsQ0FBQzs7Ozs7O0lBRXhDLEdBQUcsQ0FBQyxHQUFXLEVBQUUsT0FBYTtRQUM1QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsS0FBSztRQUNQ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SSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7QUFodUJhLG1DQUFlLEdBQUc7SUFDOUIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsY0FBYyxFQUFFLGdCQUFnQjtDQUNqQyxDQUFDOztZQWJILFVBQVU7Ozs7WUFwQ0YsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUZoQixTQUFTO1lBTlQsVUFBVTtZQVlWLGdCQUFnQjs7OztJQXVDdkIsb0NBS0U7Ozs7O0lBWEYsdUNBQXNCOzs7OztJQUN0QixvQ0FBbUI7Ozs7O0lBQ25CLDBDQUE0Qjs7Ozs7SUFDNUIseUNBQThCOzs7OztJQUM5QixnREFBK0I7O0lBdWlCL0IsK0NBb0JFOztJQUVGLG9EQTZCRTs7Ozs7SUFobEJBLHNDQUFpQzs7Ozs7SUFDakMsMkNBQXNDOzs7OztJQUN0Qyx3Q0FBNEI7Ozs7O0lBQzVCLG1DQUF3Qjs7Ozs7SUFDeEIscUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Gb3JtQ29udHJvbCB9IGZyb20gJy4vTm92b0Zvcm1Db250cm9sJztcbmltcG9ydCB7IE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi9Gb3JtQ29udHJvbHMnO1xuaW1wb3J0IHsgRm9ybVV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybS11dGlscy9Gb3JtVXRpbHMnO1xuaW1wb3J0IHsgTm92b1RvYXN0U2VydmljZSwgVG9hc3RPcHRpb25zIH0gZnJvbSAnLi4vdG9hc3QvVG9hc3RTZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9Nb2RhbFNlcnZpY2UgfSBmcm9tICcuLi9tb2RhbC9Nb2RhbFNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udHJvbENvbmZpcm1Nb2RhbCwgQ29udHJvbFByb21wdE1vZGFsIH0gZnJvbSAnLi9GaWVsZEludGVyYWN0aW9uTW9kYWxzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IEFwcEJyaWRnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2FwcC1icmlkZ2UvQXBwQnJpZGdlJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgSUZpZWxkSW50ZXJhY3Rpb25FdmVudCwgTm92b0Zvcm1Hcm91cCB9IGZyb20gJy4vRm9ybUludGVyZmFjZXMnO1xuaW1wb3J0IHsgTW9kaWZ5UGlja2VyQ29uZmlnQXJncywgT3B0aW9uc0Z1bmN0aW9uLCBDdXN0b21IdHRwIH0gZnJvbSAnLi9GaWVsZEludGVyYWN0aW9uQXBpVHlwZXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmNsYXNzIEN1c3RvbUh0dHBJbXBsIGltcGxlbWVudHMgQ3VzdG9tSHR0cCB7XG4gIHVybDogc3RyaW5nO1xuICBvcHRpb25zOiBhbnk7XG4gIG1hcEZuID0gKHgpID0+IHg7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldCh1cmw6IHN0cmluZywgb3B0aW9ucz86IGFueSk6IEN1c3RvbUh0dHAge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtYXAobWFwRm4pOiBDdXN0b21IdHRwIHtcbiAgICB0aGlzLm1hcEZuID0gbWFwRm47XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdWJzY3JpYmUocmVzb2x2ZTogYW55LCByZWplY3Q/OiBhbnkpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy51cmwsIHRoaXMub3B0aW9ucylcbiAgICAgIC5waXBlKG1hcCh0aGlzLm1hcEZuKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzb2x2ZSwgcmVqZWN0KTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmllbGRJbnRlcmFjdGlvbkFwaSB7XG4gIHByaXZhdGUgX2dsb2JhbHM6IGFueTtcbiAgcHJpdmF0ZSBfZm9ybTogYW55O1xuICBwcml2YXRlIF9jdXJyZW50S2V5OiBzdHJpbmc7XG4gIHByaXZhdGUgX2FwcEJyaWRnZTogQXBwQnJpZGdlO1xuICBwcml2YXRlIGFzeW5jQmxvY2tUaW1lb3V0OiBhbnk7XG5cbiAgcHVibGljIHN0YXRpYyBGSUVMRF9QT1NJVElPTlMgPSB7XG4gICAgQUJPVkVfRklFTEQ6ICdBQk9WRV9GSUVMRCcsXG4gICAgQkVMT1dfRklFTEQ6ICdCRUxPV19GSUVMRCcsXG4gICAgVE9QX09GX0ZPUk06ICdUT1BfT0ZfRk9STScsXG4gICAgQk9UVE9NX09GX0ZPUk06ICdCT1RUT01fT0ZfRk9STScsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0b2FzdGVyOiBOb3ZvVG9hc3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOb3ZvTW9kYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybVV0aWxzOiBGb3JtVXRpbHMsXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICApIHt9XG5cbiAgc2V0IGZvcm0oZm9ybTogYW55KSB7XG4gICAgdGhpcy5fZm9ybSA9IGZvcm07XG4gIH1cblxuICBnZXQgZm9ybSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9mb3JtO1xuICB9XG5cbiAgZ2V0IGFzc29jaWF0aW9ucygpOiBvYmplY3Qge1xuICAgIHJldHVybiB0aGlzLmZvcm0uaGFzT3duUHJvcGVydHkoJ2Fzc29jaWF0aW9ucycpID8gdGhpcy5mb3JtLmFzc29jaWF0aW9ucyA6IHt9O1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRFbnRpdHkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmhhc093blByb3BlcnR5KCdjdXJyZW50RW50aXR5JykgPyB0aGlzLmZvcm0uY3VycmVudEVudGl0eSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBjdXJyZW50RW50aXR5SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmhhc093blByb3BlcnR5KCdjdXJyZW50RW50aXR5SWQnKSA/IHRoaXMuZm9ybS5jdXJyZW50RW50aXR5SWQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgaXNFZGl0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0uaGFzT3duUHJvcGVydHkoJ2VkaXQnKSA/IHRoaXMuZm9ybS5lZGl0IDogZmFsc2U7XG4gIH1cblxuICBnZXQgaXNBZGQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5oYXNPd25Qcm9wZXJ0eSgnZWRpdCcpID8gIXRoaXMuZm9ybS5lZGl0IDogZmFsc2U7XG4gIH1cblxuICBzZXQgZ2xvYmFscyhnbG9iYWxzOiBhbnkpIHtcbiAgICB0aGlzLl9nbG9iYWxzID0gZ2xvYmFscztcbiAgfVxuXG4gIGdldCBnbG9iYWxzKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2dsb2JhbHM7XG4gIH1cblxuICBzZXQgY3VycmVudEtleShrZXk6IHN0cmluZykge1xuICAgIHRoaXMuX2N1cnJlbnRLZXkgPSBrZXk7XG4gIH1cblxuICBnZXQgY3VycmVudEtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50S2V5O1xuICB9XG5cbiAgc2V0IGFwcEJyaWRnZShhcHBCcmlkZ2U6IEFwcEJyaWRnZSkge1xuICAgIHRoaXMuX2FwcEJyaWRnZSA9IGFwcEJyaWRnZTtcbiAgfVxuXG4gIGdldCBhcHBCcmlkZ2UoKTogQXBwQnJpZGdlIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwQnJpZGdlO1xuICB9XG5cbiAgcHVibGljIGlzQWN0aXZlQ29udHJvbFZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZ2V0VmFsdWUodGhpcy5jdXJyZW50S2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3RpdmVDb250cm9sKCk6IE5vdm9Gb3JtQ29udHJvbCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udHJvbCh0aGlzLmN1cnJlbnRLZXkpO1xuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZUtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRLZXk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlVmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSh0aGlzLmN1cnJlbnRLZXkpO1xuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZUluaXRpYWxWYWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmdldEluaXRpYWxWYWx1ZSh0aGlzLmN1cnJlbnRLZXkpO1xuICB9XG5cbiAgcHVibGljIGdldENvbnRyb2woa2V5OiBzdHJpbmcpOiBOb3ZvRm9ybUNvbnRyb2wge1xuICAgIGlmICgha2V5KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRmllbGRJbnRlcmFjdGlvbkFQSV0gLSBpbnZhbGlkIG9yIG1pc3NpbmcgXCJrZXlcIicpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZm9ybS5jb250cm9sc1trZXldO1xuICAgIGlmICghY29udHJvbCkge1xuICAgICAgY29uc29sZS5lcnJvcignW0ZpZWxkSW50ZXJhY3Rpb25BUEldIC0gY291bGQgbm90IGZpbmQgYSBjb250cm9sIGluIHRoZSBmb3JtIGJ5IHRoZSBrZXkgLS0nLCBrZXkpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udHJvbCBhcyBOb3ZvRm9ybUNvbnRyb2w7XG4gIH1cblxuICBwdWJsaWMgZ2V0QXNzb2ljYXRlZEZvcm1Db250cm9sKGFzc29jaWF0ZWRGb3JtOiBOb3ZvRm9ybUdyb3VwLCBrZXk6IHN0cmluZyk6IE5vdm9Gb3JtQ29udHJvbCB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tGaWVsZEludGVyYWN0aW9uQVBJXSAtIGludmFsaWQgb3IgbWlzc2luZyBcImtleVwiJyk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBjb250cm9sID0gYXNzb2NpYXRlZEZvcm0uY29udHJvbHNba2V5XTtcbiAgICBpZiAoIWNvbnRyb2wpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tGaWVsZEludGVyYWN0aW9uQVBJXSAtIGNvdWxkIG5vdCBmaW5kIGEgY29udHJvbCBpbiB0aGUgZm9ybSBieSB0aGUga2V5IC0tJywga2V5KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2wgYXMgTm92b0Zvcm1Db250cm9sO1xuICB9XG5cbiAgcHVibGljIGdldFZhbHVlKGtleTogc3RyaW5nKTogYW55IHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICByZXR1cm4gY29udHJvbC52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmF3VmFsdWUoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBjb250cm9sLnJhd1ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbml0aWFsVmFsdWUoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBjb250cm9sLmluaXRpYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgc2V0VmFsdWUoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgdmFsdWU6IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICAgIGVtaXRNb2RlbFRvVmlld0NoYW5nZT86IGJvb2xlYW47XG4gICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3ZhbHVlJywgdmFsdWU6IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRBc3NvY2lhdGVkRm9ybVZhbHVlKGFzc29jaWF0ZWRGb3JtOiBOb3ZvRm9ybUdyb3VwLFxuICAgIGtleTogc3RyaW5nLFxuICAgIHZhbHVlOiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U/OiBib29sZWFuO1xuICAgICAgZW1pdFZpZXdUb01vZGVsQ2hhbmdlPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0QXNzb2ljYXRlZEZvcm1Db250cm9sKGFzc29jaWF0ZWRGb3JtLCBrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuc2V0VmFsdWUodmFsdWUsIG9wdGlvbnMpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICd2YWx1ZScsIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcGF0Y2hWYWx1ZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICB2YWx1ZTogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgICBlbWl0RXZlbnQ/OiBib29sZWFuO1xuICAgICAgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlPzogYm9vbGVhbjtcbiAgICAgIGVtaXRWaWV3VG9Nb2RlbENoYW5nZT86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnNldFZhbHVlKHZhbHVlLCBvcHRpb25zKTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAndmFsdWUnLCB2YWx1ZTogdmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldFJlYWRPbmx5KGtleTogc3RyaW5nLCBpc1JlYWRPbmx5OiBib29sZWFuKTogdm9pZCB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnNldFJlYWRPbmx5KGlzUmVhZE9ubHkpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdyZWFkT25seScsIHZhbHVlOiBpc1JlYWRPbmx5IH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRSZXF1aXJlZChrZXk6IHN0cmluZywgcmVxdWlyZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuc2V0UmVxdWlyZWQocmVxdWlyZWQpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdyZXF1aXJlZCcsIHZhbHVlOiByZXF1aXJlZCB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGlkZShrZXk6IHN0cmluZywgY2xlYXJWYWx1ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuaGlkZShjbGVhclZhbHVlKTtcbiAgICAgIHRoaXMuZGlzYWJsZShrZXksIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnaGlkZGVuJywgdmFsdWU6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNob3coa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuc2hvdygpO1xuICAgICAgdGhpcy5lbmFibGUoa2V5LCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ2hpZGRlbicsIHZhbHVlOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGlzYWJsZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuZGlzYWJsZShvcHRpb25zKTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAncmVhZE9ubHknLCB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZW5hYmxlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgICBlbWl0RXZlbnQ/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5lbmFibGUob3B0aW9ucyk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3JlYWRPbmx5JywgdmFsdWU6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNJbnZhbGlkKGtleTogc3RyaW5nLCB2YWxpZGF0aW9uTWVzc2FnZT86IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgY29udHJvbC5tYXJrQXNJbnZhbGlkKHZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbWFya0FzRGlydHkoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzRGlydHkob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1hcmtBc1BlbmRpbmcoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzUGVuZGluZyhvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbWFya0FzUHJpc3RpbmUoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzUHJpc3RpbmUob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1hcmtBc1RvdWNoZWQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZChvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbWFya0FzVW50b3VjaGVkKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLm1hcmtBc1VudG91Y2hlZChvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlVmFsdWVBbmRWYWxpZGl0eShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5VG9hc3QodG9hc3RDb25maWc6IFRvYXN0T3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRvYXN0ZXIpIHtcbiAgICAgIHRoaXMudG9hc3Rlci5hbGVydCh0b2FzdENvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRpc3BsYXlUaXAoa2V5OiBzdHJpbmcsIHRpcDogc3RyaW5nLCBpY29uPzogc3RyaW5nLCBhbGxvd0Rpc21pc3M/OiBib29sZWFuKTogdm9pZCB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnRpcFdlbGwgPSB7XG4gICAgICAgIHRpcDogdGlwLFxuICAgICAgICBpY29uOiBpY29uLFxuICAgICAgICBidXR0b246IGFsbG93RGlzbWlzcyxcbiAgICAgIH07XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3RpcFdlbGwnLCB2YWx1ZTogdGlwIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRUb29sdGlwKGtleTogc3RyaW5nLCB0b29sdGlwOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wudG9vbHRpcCA9IHRvb2x0aXA7XG4gICAgICBpZiAodG9vbHRpcC5sZW5ndGggPj0gNDAgJiYgdG9vbHRpcC5sZW5ndGggPD0gNDAwKSB7XG4gICAgICAgIGNvbnRyb2wudG9vbHRpcFNpemUgPSAnbGFyZ2UnO1xuICAgICAgICBjb250cm9sLnRvb2x0aXBQcmVsaW5lID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodG9vbHRpcC5sZW5ndGggPiA0MDApIHtcbiAgICAgICAgY29udHJvbC50b29sdGlwU2l6ZSA9ICdleHRyYS1sYXJnZSc7XG4gICAgICB9XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3Rvb2x0aXAnLCB2YWx1ZTogdG9vbHRpcCB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29uZmlybUNoYW5nZXMoa2V5OiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBsZXQgaGlzdG9yeSA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAndmFsdWVIaXN0b3J5Jyk7XG4gICAgbGV0IG9sZFZhbHVlID0gaGlzdG9yeVtoaXN0b3J5Lmxlbmd0aCAtIDJdO1xuICAgIGxldCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoa2V5KTtcbiAgICBsZXQgbGFiZWwgPSB0aGlzLmdldFByb3BlcnR5KGtleSwgJ2xhYmVsJyk7XG4gICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgYW55KS5ibHVyKCk7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQ29udHJvbENvbmZpcm1Nb2RhbCwgeyBvbGRWYWx1ZSwgbmV3VmFsdWUsIGxhYmVsLCBtZXNzYWdlLCBrZXkgfSkub25DbG9zZWQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKGtleSwgb2xkVmFsdWUsIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBwcm9tcHRVc2VyKGtleTogc3RyaW5nLCBjaGFuZ2VzOiBzdHJpbmdbXSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGxldCBzaG93WWVzOiBib29sZWFuID0gdHJ1ZTtcbiAgICAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBhbnkpLmJsdXIoKTtcbiAgICByZXR1cm4gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihDb250cm9sUHJvbXB0TW9kYWwsIHsgY2hhbmdlczogY2hhbmdlcywga2V5OiBrZXkgfSkub25DbG9zZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0UHJvcGVydHkoa2V5OiBzdHJpbmcsIHByb3A6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbFtwcm9wXSA9IHZhbHVlO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6IHByb3AsIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0UHJvcGVydHkoa2V5OiBzdHJpbmcsIHByb3A6IHN0cmluZyk6IGFueSB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICByZXR1cm4gY29udHJvbFtwcm9wXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgaXNWYWx1ZUVtcHR5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZShrZXkpO1xuICAgIHJldHVybiBIZWxwZXJzLmlzRW1wdHkodmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGlzVmFsdWVCbGFuayhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoa2V5KTtcbiAgICByZXR1cm4gSGVscGVycy5pc0JsYW5rKHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBoYXNGaWVsZChrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZm9ybS5jb250cm9sc1trZXldO1xuICB9XG5cbiAgcHVibGljIGFkZFN0YXRpY09wdGlvbihrZXk6IHN0cmluZywgbmV3T3B0aW9uOiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGxldCBvcHRpb25Ub0FkZCA9IG5ld09wdGlvbjtcbiAgICBsZXQgaXNVbmlxdWU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGxldCBjdXJyZW50T3B0aW9ucyA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnb3B0aW9ucycpO1xuICAgICAgaWYgKCFjdXJyZW50T3B0aW9ucyB8fCAhY3VycmVudE9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBjb25maWcgPSB0aGlzLmdldFByb3BlcnR5KGtleSwgJ2NvbmZpZycpO1xuICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgY3VycmVudE9wdGlvbnMgPSBjb25maWcub3B0aW9ucztcbiAgICAgICAgICBpZiAoY3VycmVudE9wdGlvbnMgJiYgQXJyYXkuaXNBcnJheShjdXJyZW50T3B0aW9ucykpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50T3B0aW9uc1swXS52YWx1ZSAmJiAhb3B0aW9uVG9BZGQudmFsdWUpIHtcbiAgICAgICAgICAgICAgb3B0aW9uVG9BZGQgPSB7IHZhbHVlOiBuZXdPcHRpb24sIGxhYmVsOiBuZXdPcHRpb24gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbmZpZy5vcHRpb25zID0gWy4uLmN1cnJlbnRPcHRpb25zLCBvcHRpb25Ub0FkZF07XG4gICAgICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ2NvbmZpZycsIGNvbmZpZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY3VycmVudE9wdGlvbnNbMF0udmFsdWUgJiYgIW9wdGlvblRvQWRkLnZhbHVlKSB7XG4gICAgICAgICAgb3B0aW9uVG9BZGQgPSB7IHZhbHVlOiBuZXdPcHRpb24sIGxhYmVsOiBuZXdPcHRpb24gfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbnN1cmUgZHVwbGljYXRlIHZhbHVlcyBhcmUgbm90IGFkZGVkXG4gICAgICAgIGN1cnJlbnRPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgIGlmICgob3B0aW9uLnZhbHVlICYmIG9wdGlvbi52YWx1ZSA9PT0gb3B0aW9uVG9BZGQudmFsdWUpIHx8IG9wdGlvbiA9PT0gb3B0aW9uVG9BZGQpIHtcbiAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzVW5pcXVlKSB7XG4gICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICdvcHRpb25zJywgWy4uLmN1cnJlbnRPcHRpb25zLCBvcHRpb25Ub0FkZF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNVbmlxdWUpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdvcHRpb25zJywgdmFsdWU6IFsuLi5jdXJyZW50T3B0aW9ucywgb3B0aW9uVG9BZGRdIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVTdGF0aWNPcHRpb24oa2V5OiBzdHJpbmcsIG9wdGlvblRvUmVtb3ZlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGxldCBjdXJyZW50T3B0aW9ucyA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnb3B0aW9ucycpO1xuICAgICAgaWYgKCFjdXJyZW50T3B0aW9ucyB8fCAhY3VycmVudE9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBjb25maWcgPSB0aGlzLmdldFByb3BlcnR5KGtleSwgJ2NvbmZpZycpO1xuICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgY3VycmVudE9wdGlvbnMgPSBjb25maWcub3B0aW9ucztcbiAgICAgICAgICBpZiAoY3VycmVudE9wdGlvbnMgJiYgQXJyYXkuaXNBcnJheShjdXJyZW50T3B0aW9ucykpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICAgICAgY3VycmVudE9wdGlvbnMuZm9yRWFjaCgob3B0LCBpKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChvcHQudmFsdWUgfHwgb3B0LmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdC52YWx1ZSA9PT0gb3B0aW9uVG9SZW1vdmUgfHwgb3B0LmxhYmVsID09PSBvcHRpb25Ub1JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0ID09PSBvcHRpb25Ub1JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRPcHRpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25maWcub3B0aW9ucyA9IFsuLi5jdXJyZW50T3B0aW9uc107XG4gICAgICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ2NvbmZpZycsIGNvbmZpZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgY3VycmVudE9wdGlvbnMuZm9yRWFjaCgob3B0LCBpKSA9PiB7XG4gICAgICAgICAgaWYgKG9wdC52YWx1ZSB8fCBvcHQubGFiZWwpIHtcbiAgICAgICAgICAgIGlmIChvcHQudmFsdWUgPT09IG9wdGlvblRvUmVtb3ZlIHx8IG9wdC5sYWJlbCA9PT0gb3B0aW9uVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAob3B0ID09PSBvcHRpb25Ub1JlbW92ZSkge1xuICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGN1cnJlbnRPcHRpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICdvcHRpb25zJywgWy4uLmN1cnJlbnRPcHRpb25zXSk7XG4gICAgICB9XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ29wdGlvbnMnLCB2YWx1ZTogY29udHJvbC5vcHRpb25zIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBtb2RpZnlQaWNrZXJDb25maWcoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgY29uZmlnOiB7IGZvcm1hdD86IHN0cmluZzsgb3B0aW9uc1VybD86IHN0cmluZzsgb3B0aW9uc1VybEJ1aWxkZXI/OiBGdW5jdGlvbjsgb3B0aW9uc1Byb21pc2U/OiBhbnk7IG9wdGlvbnM/OiBhbnlbXSB9LFxuICAgIG1hcHBlcj86IGFueSxcbiAgKTogdm9pZCB7XG4gICAgLy8gY2FsbCBhbm90aGVyIHB1YmxpYyBtZXRob2QgdG8gYXZvaWQgYSBicmVha2luZyBjaGFuZ2UgYnV0IHN0aWxsIGVuYWJsZSBzdHJpY3RlciB0eXBlc1xuICAgIHRoaXMubXV0YXRlUGlja2VyQ29uZmlnKGtleSwgY29uZmlnIGFzIE1vZGlmeVBpY2tlckNvbmZpZ0FyZ3MsIG1hcHBlcik7XG4gIH1cblxuICBwdWJsaWMgbXV0YXRlUGlja2VyQ29uZmlnKGtleTogc3RyaW5nLCBhcmdzOiBNb2RpZnlQaWNrZXJDb25maWdBcmdzLCBtYXBwZXI/OiAoaXRlbTogdW5rbm93bikgPT4gdW5rbm93bik6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29uc3QgeyBtaW5TZWFyY2hMZW5ndGgsIGVuYWJsZUluZmluaXRlU2Nyb2xsLCBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yLCBmb3JtYXQsIGdldExhYmVscywgZW1wdHlQaWNrZXJNZXNzYWdlIH0gPSBjb250cm9sLmNvbmZpZztcbiAgICAgIGNvbnN0IG9wdGlvbnNDb25maWcgPSB0aGlzLmdldE9wdGlvbnNDb25maWcoYXJncywgbWFwcGVyLCBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yLCBmb3JtYXQpO1xuXG4gICAgICBjb25zdCBuZXdDb25maWc6IE5vdm9Db250cm9sQ29uZmlnWydjb25maWcnXSA9IHtcbiAgICAgICAgLi4uKGVtcHR5UGlja2VyTWVzc2FnZSAmJiB7IGVtcHR5UGlja2VyTWVzc2FnZSB9KSxcbiAgICAgICAgLi4uKE51bWJlci5pc0ludGVnZXIobWluU2VhcmNoTGVuZ3RoKSAmJiB7IG1pblNlYXJjaExlbmd0aCB9KSxcbiAgICAgICAgLi4uKGVuYWJsZUluZmluaXRlU2Nyb2xsICYmIHsgZW5hYmxlSW5maW5pdGVTY3JvbGwgfSksXG4gICAgICAgIC4uLihmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yICYmIHsgZmlsdGVyZWRPcHRpb25zQ3JlYXRvciB9KSxcbiAgICAgICAgLi4uKGdldExhYmVscyAmJiB7IGdldExhYmVscyB9KSxcbiAgICAgICAgLi4uKG9wdGlvbnNDb25maWcgJiYgb3B0aW9uc0NvbmZpZyksXG4gICAgICAgIHJlc3VsdHNUZW1wbGF0ZTogY29udHJvbC5jb25maWcucmVzdWx0c1RlbXBsYXRlLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICdjb25maWcnLCBuZXdDb25maWcpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdwaWNrZXJDb25maWcnLCB2YWx1ZTogYXJncyB9KTtcbiAgICB9XG4gIH1cblxuICBhZGRQcm9wZXJ0aWVzVG9QaWNrZXJDb25maWcoa2V5OiBzdHJpbmcsIHByb3BlcnRpZXM6IHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KSB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoIWNvbnRyb2wgfHwgY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgLi4uY29udHJvbC5jb25maWcsXG4gICAgICAuLi5wcm9wZXJ0aWVzLFxuICAgIH07XG5cbiAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ2NvbmZpZycsIGNvbmZpZyk7XG4gICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdwaWNrZXJDb25maWcnLCB2YWx1ZTogcHJvcGVydGllcyB9KTtcbiAgfVxuICBnZXRPcHRpb25zQ29uZmlnID0gKFxuICAgIGFyZ3M6IE1vZGlmeVBpY2tlckNvbmZpZ0FyZ3MsXG4gICAgbWFwcGVyPzogKGl0ZW06IHVua25vd24pID0+IHVua25vd24sXG4gICAgZmlsdGVyZWRPcHRpb25zQ3JlYXRvcj86ICh3aGVyZTogc3RyaW5nKSA9PiAocXVlcnk6IHN0cmluZykgPT4gUHJvbWlzZTx1bmtub3duW10+LFxuICAgIHBpY2tlckNvbmZpZ0Zvcm1hdD86IHN0cmluZyxcbiAgKTogdW5kZWZpbmVkIHwgeyBvcHRpb25zOiB1bmtub3duW10gfSB8IHsgb3B0aW9uczogT3B0aW9uc0Z1bmN0aW9uOyBmb3JtYXQ/OiBzdHJpbmcgfSA9PiB7XG4gICAgaWYgKGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IgfHwgJ29wdGlvbnNVcmwnIGluIGFyZ3MgfHwgJ29wdGlvbnNVcmxCdWlsZGVyJyBpbiBhcmdzIHx8ICdvcHRpb25zUHJvbWlzZScgaW4gYXJncykge1xuICAgICAgY29uc3QgZm9ybWF0ID0gKCdmb3JtYXQnIGluIGFyZ3MgJiYgYXJncy5mb3JtYXQpIHx8IHBpY2tlckNvbmZpZ0Zvcm1hdDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IHRoaXMuY3JlYXRlT3B0aW9uc0Z1bmN0aW9uKGFyZ3MsIG1hcHBlciwgZmlsdGVyZWRPcHRpb25zQ3JlYXRvciksXG4gICAgICAgIC4uLignZW1wdHlQaWNrZXJNZXNzYWdlJyBpbiBhcmdzICYmIHsgZW1wdHlQaWNrZXJNZXNzYWdlOiBhcmdzLmVtcHR5UGlja2VyTWVzc2FnZSB9KSxcbiAgICAgICAgLi4uKGZvcm1hdCAmJiB7IGZvcm1hdCB9KSxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICgnb3B0aW9ucycgaW4gYXJncyAmJiBBcnJheS5pc0FycmF5KGFyZ3Mub3B0aW9ucykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IFsuLi5hcmdzLm9wdGlvbnNdLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG5cbiAgY3JlYXRlT3B0aW9uc0Z1bmN0aW9uID0gKFxuICAgIGNvbmZpZzogTW9kaWZ5UGlja2VyQ29uZmlnQXJncyxcbiAgICBtYXBwZXI/OiAoaXRlbTogdW5rbm93bikgPT4gdW5rbm93bixcbiAgICBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yPzogKHdoZXJlPzogc3RyaW5nKSA9PiAoKHF1ZXJ5OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIpID0+IFByb21pc2U8dW5rbm93bltdPiksXG4gICk6ICgocXVlcnk6IHN0cmluZykgPT4gUHJvbWlzZTx1bmtub3duW10+KSA9PiAocXVlcnk6IHN0cmluZywgcGFnZT86IG51bWJlcikgPT4ge1xuICAgIGlmICgnb3B0aW9uc1Byb21pc2UnIGluIGNvbmZpZyAmJiBjb25maWcub3B0aW9uc1Byb21pc2UpIHtcbiAgICAgIHJldHVybiBjb25maWcub3B0aW9uc1Byb21pc2UocXVlcnksIG5ldyBDdXN0b21IdHRwSW1wbCh0aGlzLmh0dHApKTtcbiAgICB9IGVsc2UgaWYgKCgnb3B0aW9uc1VybEJ1aWxkZXInIGluIGNvbmZpZyAmJiBjb25maWcub3B0aW9uc1VybEJ1aWxkZXIpIHx8ICgnb3B0aW9uc1VybCcgaW4gY29uZmlnICYmIGNvbmZpZy5vcHRpb25zVXJsKSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gJ29wdGlvbnNVcmxCdWlsZGVyJyBpbiBjb25maWcgPyBjb25maWcub3B0aW9uc1VybEJ1aWxkZXIocXVlcnkpIDogYCR7Y29uZmlnLm9wdGlvbnNVcmx9P2ZpbHRlcj0ke3F1ZXJ5IHx8ICcnfWA7XG4gICAgICAgIHRoaXMuaHR0cFxuICAgICAgICAgIC5nZXQodXJsKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgbWFwKChyZXN1bHRzOiB1bmtub3duW10pID0+IHtcbiAgICAgICAgICAgICAgaWYgKG1hcHBlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLm1hcChtYXBwZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKVxuICAgICAgICAgIC5zdWJzY3JpYmUocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoZmlsdGVyZWRPcHRpb25zQ3JlYXRvcikge1xuICAgICAgaWYgKCd3aGVyZScgaW4gY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yKGNvbmZpZy53aGVyZSkocXVlcnksIHBhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IoKShxdWVyeSwgcGFnZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHB1YmxpYyBzZXRMb2FkaW5nKGtleTogc3RyaW5nLCBsb2FkaW5nOiBib29sZWFuKSB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBpZiAobG9hZGluZykge1xuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNba2V5XS5maWVsZEludGVyYWN0aW9ubG9hZGluZyA9IHRydWU7XG4gICAgICAgIGNvbnRyb2wuc2V0RXJyb3JzKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgICAgLy8gSGlzdG9yeVxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hc3luY0Jsb2NrVGltZW91dCk7XG4gICAgICAgIHRoaXMuYXN5bmNCbG9ja1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldExvYWRpbmcoa2V5LCBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5VGlwKGtleSwgdGhpcy5sYWJlbHMuYXN5bmNGYWlsdXJlLCAnaW5mbycsIGZhbHNlKTtcbiAgICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ19kaXNwbGF5ZWRBc3luY0ZhaWx1cmUnLCB0cnVlKTtcbiAgICAgICAgfSwgMTAwMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW2tleV0uZmllbGRJbnRlcmFjdGlvbmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYXN5bmNCbG9ja1RpbWVvdXQpO1xuICAgICAgICBjb250cm9sLnNldEVycm9ycyh7IGxvYWRpbmc6IG51bGwgfSk7XG4gICAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgIGlmICh0aGlzLmdldFByb3BlcnR5KGtleSwgJ19kaXNwbGF5ZWRBc3luY0ZhaWx1cmUnKSkge1xuICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAndGlwV2VsbCcsIG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ2xvYWRpbmcnLCB2YWx1ZTogbG9hZGluZyB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYWRkQ29udHJvbChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBtZXRhRm9yTmV3RmllbGQ6IGFueSxcbiAgICBwb3NpdGlvbjogc3RyaW5nID0gRmllbGRJbnRlcmFjdGlvbkFwaS5GSUVMRF9QT1NJVElPTlMuQUJPVkVfRklFTEQsXG4gICAgaW5pdGlhbFZhbHVlPzogYW55LFxuICApOiB2b2lkIHtcbiAgICBpZiAoIW1ldGFGb3JOZXdGaWVsZC5rZXkgJiYgIW1ldGFGb3JOZXdGaWVsZC5uYW1lKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRmllbGRJbnRlcmFjdGlvbkFQSV0gLSBtaXNzaW5nIFwia2V5XCIgaW4gbWV0YSBmb3IgbmV3IGZpZWxkJyk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghbWV0YUZvck5ld0ZpZWxkLmtleSkge1xuICAgICAgLy8gSWYga2V5IGlzIG5vdCBleHBsaWNpdGx5IGRlY2xhcmVkLCB1c2UgbmFtZSBhcyBrZXlcbiAgICAgIG1ldGFGb3JOZXdGaWVsZC5rZXkgPSBtZXRhRm9yTmV3RmllbGQubmFtZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW21ldGFGb3JOZXdGaWVsZC5rZXldKSB7XG4gICAgICAvLyBGaWVsZCBpcyBhbHJlYWR5IG9uIHRoZSBmb3JtXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZm9ybS5jb250cm9sc1trZXldO1xuICAgIGxldCBmaWVsZHNldEluZGV4LCBjb250cm9sSW5kZXg7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIGZpZWxkc2V0SW5kZXggPSAtMTtcbiAgICAgIGNvbnRyb2xJbmRleCA9IC0xO1xuXG4gICAgICB0aGlzLmZvcm0uZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0LCBmaSkgPT4ge1xuICAgICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChmaWVsZHNldENvbnRyb2wsIGNpKSA9PiB7XG4gICAgICAgICAgaWYgKGZpZWxkc2V0Q29udHJvbC5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgZmllbGRzZXRJbmRleCA9IGZpO1xuICAgICAgICAgICAgY29udHJvbEluZGV4ID0gY2k7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDaGFuZ2UgdGhlIHBvc2l0aW9uIG9mIHRoZSBuZXdseSBhZGRlZCBmaWVsZFxuICAgICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICBjYXNlIEZpZWxkSW50ZXJhY3Rpb25BcGkuRklFTERfUE9TSVRJT05TLkFCT1ZFX0ZJRUxEOlxuICAgICAgICAgIC8vIEFkZGluZyBmaWVsZCBhYm92ZSBhY3RpdmUgZmllbGRcbiAgICAgICAgICAvLyBpbmRleCBjYW4gc3RheSB0aGUgc2FtZVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEZpZWxkSW50ZXJhY3Rpb25BcGkuRklFTERfUE9TSVRJT05TLkJFTE9XX0ZJRUxEOlxuICAgICAgICAgIC8vIEFkZGluZyBmaWVsZCBiZWxvdyBhY3RpdmUgZmllbGRcbiAgICAgICAgICBjb250cm9sSW5kZXggKz0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBGaWVsZEludGVyYWN0aW9uQXBpLkZJRUxEX1BPU0lUSU9OUy5UT1BfT0ZfRk9STTpcbiAgICAgICAgICAvLyBBZGRpbmcgZmllbGQgdG8gdGhlIHRvcCBvZiB0aGUgZm9ybVxuICAgICAgICAgIGNvbnRyb2xJbmRleCA9IDA7XG4gICAgICAgICAgZmllbGRzZXRJbmRleCA9IDA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRmllbGRJbnRlcmFjdGlvbkFwaS5GSUVMRF9QT1NJVElPTlMuQk9UVE9NX09GX0ZPUk06XG4gICAgICAgICAgLy8gQWRkaW5nIGZpZWxkIHRvIHRoZSBib3R0b20gb2YgdGhlIGZvcm1cbiAgICAgICAgICBmaWVsZHNldEluZGV4ID0gdGhpcy5mb3JtLmZpZWxkc2V0cy5sZW5ndGggLSAxO1xuICAgICAgICAgIGNvbnRyb2xJbmRleCA9IHRoaXMuZm9ybS5maWVsZHNldHNbZmllbGRzZXRJbmRleF0uY29udHJvbHMubGVuZ3RoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmllbGRzZXRJbmRleCAhPT0gLTEgJiYgY29udHJvbEluZGV4ICE9PSAtMSkge1xuICAgICAgICBsZXQgbm92b0NvbnRyb2wgPSB0aGlzLmZvcm1VdGlscy5nZXRDb250cm9sRm9yRmllbGQobWV0YUZvck5ld0ZpZWxkLCB0aGlzLmh0dHAsIHt9KTtcbiAgICAgICAgbm92b0NvbnRyb2wuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIGxldCBmb3JtQ29udHJvbCA9IG5ldyBOb3ZvRm9ybUNvbnRyb2woaW5pdGlhbFZhbHVlLCBub3ZvQ29udHJvbCk7XG4gICAgICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKG5vdm9Db250cm9sLmtleSwgZm9ybUNvbnRyb2wpO1xuICAgICAgICB0aGlzLmZvcm0uZmllbGRzZXRzW2ZpZWxkc2V0SW5kZXhdLmNvbnRyb2xzLnNwbGljZShjb250cm9sSW5kZXgsIDAsIG5vdm9Db250cm9sKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdhZGRDb250cm9sJywgdmFsdWU6IGZvcm1Db250cm9sIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVDb250cm9sKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNba2V5XSkge1xuICAgICAgLy8gRmllbGQgaXMgbm90IG9uIHRoZSBmb3JtXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBsZXQgZmllbGRzZXRJbmRleCA9IC0xO1xuICAgICAgbGV0IGNvbnRyb2xJbmRleCA9IC0xO1xuXG4gICAgICB0aGlzLmZvcm0uZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0LCBmaSkgPT4ge1xuICAgICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChmaWVsZHNldENvbnRyb2wsIGNpKSA9PiB7XG4gICAgICAgICAgaWYgKGZpZWxkc2V0Q29udHJvbC5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgZmllbGRzZXRJbmRleCA9IGZpO1xuICAgICAgICAgICAgY29udHJvbEluZGV4ID0gY2k7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZmllbGRzZXRJbmRleCAhPT0gLTEgJiYgY29udHJvbEluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLmZvcm0ucmVtb3ZlQ29udHJvbChrZXkpO1xuICAgICAgICB0aGlzLmZvcm0uZmllbGRzZXRzW2ZpZWxkc2V0SW5kZXhdLmNvbnRyb2xzLnNwbGljZShjb250cm9sSW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3JlbW92ZUNvbnRyb2wnLCB2YWx1ZToga2V5IH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkZWJvdW5jZShmdW5jOiAoKSA9PiB2b2lkLCB3YWl0ID0gNTApIHtcbiAgICBsZXQgaDogYW55O1xuICAgIGNsZWFyVGltZW91dChoKTtcbiAgICBoID0gc2V0VGltZW91dCgoKSA9PiBmdW5jKCksIHdhaXQpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmlnZ2VyRXZlbnQoZXZlbnQ6IElGaWVsZEludGVyYWN0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb3JtICYmIHRoaXMuZm9ybS5maWVsZEludGVyYWN0aW9uRXZlbnRzKSB7XG4gICAgICB0aGlzLmZvcm0uZmllbGRJbnRlcmFjdGlvbkV2ZW50cy5lbWl0KGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==