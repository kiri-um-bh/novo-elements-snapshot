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
class CustomHttp {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.mapFn = (x) => x;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} url
     * @param {?=} options
     * @return {THIS}
     */
    get(url, options) {
        (/** @type {?} */ (this)).url = url;
        (/** @type {?} */ (this)).options = options;
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} mapFn
     * @return {THIS}
     */
    map(mapFn) {
        (/** @type {?} */ (this)).mapFn = mapFn;
        return (/** @type {?} */ (this));
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
    CustomHttp.prototype.url;
    /** @type {?} */
    CustomHttp.prototype.options;
    /** @type {?} */
    CustomHttp.prototype.mapFn;
    /**
     * @type {?}
     * @private
     */
    CustomHttp.prototype.http;
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
        /** @type {?} */
        let control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            /** @type {?} */
            let newConfig = {
                resultsTemplate: control.config.resultsTemplate,
            };
            if (config.optionsUrl || config.optionsUrlBuilder || config.optionsPromise) {
                newConfig = Object.assign(newConfig, {
                    format: config.format,
                    options: (query) => {
                        if (config.optionsPromise) {
                            return config.optionsPromise(query, new CustomHttp(this.http));
                        }
                        return new Promise((resolve, reject) => {
                            /** @type {?} */
                            let url = config.optionsUrlBuilder ? config.optionsUrlBuilder(query) : `${config.optionsUrl}?filter=${query || ''}`;
                            if (query && query.length) {
                                this.http
                                    .get(url)
                                    .pipe(map((results) => {
                                    if (mapper) {
                                        return results.map(mapper);
                                    }
                                    return results;
                                }))
                                    .subscribe(resolve, reject);
                            }
                            else {
                                resolve([]);
                            }
                        });
                    },
                });
            }
            else if (config.options) {
                newConfig.options = [...config.options];
            }
            this.setProperty(key, 'config', newConfig);
            this.triggerEvent({ controlKey: key, prop: 'pickerConfig', value: config });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGRJbnRlcmFjdGlvbkFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0ZpZWxkSW50ZXJhY3Rpb25BcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUVyQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25GLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUdyRSxNQUFNLFVBQVU7Ozs7SUFLZCxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFVBQUssR0FBUSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRWlCLENBQUM7Ozs7Ozs7O0lBRXhDLEdBQUcsQ0FBQyxHQUFXLEVBQUUsT0FBYTtRQUM1QixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVELEdBQUcsQ0FBQyxLQUFVO1FBQ1osbUJBQUEsSUFBSSxFQUFBLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLE9BQVksRUFBRSxNQUFZO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JCLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUNGOzs7SUF2QkMseUJBQVk7O0lBQ1osNkJBQWE7O0lBQ2IsMkJBQXNCOzs7OztJQUVWLDBCQUF3Qjs7QUFzQnRDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7O0lBYzlCLFlBQ1UsT0FBeUIsRUFDekIsWUFBOEIsRUFDOUIsU0FBb0IsRUFDcEIsSUFBZ0IsRUFDaEIsTUFBd0I7UUFKeEIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDekIsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQzlCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUMvQixDQUFDOzs7OztJQUVKLElBQUksSUFBSSxDQUFDLElBQVM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNoRixDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6RixDQUFDOzs7O0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM3RixDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNuRSxDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3BFLENBQUM7Ozs7O0lBRUQsSUFBSSxPQUFPLENBQUMsT0FBWTtRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsSUFBSSxVQUFVLENBQUMsR0FBVztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsSUFBSSxTQUFTLENBQUMsU0FBb0I7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRU0sb0JBQW9CO1FBQ3pCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFTSxnQkFBZ0I7UUFDckIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRU0sWUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7OztJQUVNLGNBQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRU0scUJBQXFCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFTSxVQUFVLENBQUMsR0FBVztRQUMzQixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLENBQUMsc0JBQXNCO1lBQ3pGLE9BQU8sSUFBSSxDQUFDO1NBQ2I7O1lBRUcsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyw0RUFBNEUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtZQUN4SCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxtQkFBQSxPQUFPLEVBQW1CLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFTSxRQUFRLENBQUMsR0FBVzs7WUFDckIsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ2xDLElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDO1NBQ3RCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVNLFdBQVcsQ0FBQyxHQUFXOztZQUN4QixPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDbEMsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUM7U0FDekI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU0sZUFBZSxDQUFDLEdBQVc7O1lBQzVCLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNsQyxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQztTQUM3QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVNLFFBQVEsQ0FDYixHQUFXLEVBQ1gsS0FBVSxFQUNWLE9BS0M7O1lBRUcsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ2xDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFO1lBQ2pELE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDOzs7Ozs7O0lBRU0sVUFBVSxDQUNmLEdBQVcsRUFDWCxLQUFVLEVBQ1YsT0FLQzs7WUFFRyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDbEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7Ozs7OztJQUVNLFdBQVcsQ0FBQyxHQUFXLEVBQUUsVUFBbUI7O1lBQzdDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNsQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqRCxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDN0U7SUFDSCxDQUFDOzs7Ozs7SUFFTSxXQUFXLENBQUMsR0FBVyxFQUFFLFFBQWlCOztZQUMzQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDbEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzNFO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxhQUFzQixJQUFJOztZQUM3QyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDbEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDOzs7OztJQUVNLElBQUksQ0FBQyxHQUFXOztZQUNqQixPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDbEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sT0FBTyxDQUNaLEdBQVcsRUFDWCxPQUdDOztZQUVHLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNsQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqRCxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDdkU7SUFDSCxDQUFDOzs7Ozs7SUFFTSxNQUFNLENBQ1gsR0FBVyxFQUNYLE9BR0M7O1lBRUcsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ2xDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFO1lBQ2pELE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN4RTtJQUNILENBQUM7Ozs7OztJQUVNLGFBQWEsQ0FBQyxHQUFXLEVBQUUsaUJBQTBCOztZQUN0RCxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDbEMsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtnQkFDakQsT0FBTyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQzFDO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFTSxXQUFXLENBQ2hCLEdBQVcsRUFDWCxPQUVDOztZQUVHLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNsQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqRCxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sYUFBYSxDQUNsQixHQUFXLEVBQ1gsT0FFQzs7WUFFRyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDbEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7Ozs7OztJQUVNLGNBQWMsQ0FDbkIsR0FBVyxFQUNYLE9BRUM7O1lBRUcsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ2xDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFO1lBQ2pELE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7Ozs7SUFFTSxhQUFhLENBQ2xCLEdBQVcsRUFDWCxPQUVDOztZQUVHLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNsQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqRCxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sZUFBZSxDQUNwQixHQUFXLEVBQ1gsT0FFQzs7WUFFRyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDbEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7OztJQUVNLHNCQUFzQixDQUMzQixHQUFXLEVBQ1gsT0FHQzs7WUFFRyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDbEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsV0FTbkI7UUFDQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7Ozs7OztJQUVNLFVBQVUsQ0FBQyxHQUFXLEVBQUUsR0FBVyxFQUFFLElBQWEsRUFBRSxZQUFzQjs7WUFDM0UsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ2xDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFO1lBQ2pELE9BQU8sQ0FBQyxPQUFPLEdBQUc7Z0JBQ2hCLEdBQUcsRUFBRSxHQUFHO2dCQUNSLElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBRSxZQUFZO2FBQ3JCLENBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sVUFBVSxDQUFDLEdBQVcsRUFBRSxPQUFlOztZQUN4QyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDbEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDMUIsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBRTtnQkFDakQsT0FBTyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7Z0JBQzlCLE9BQU8sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQy9CO2lCQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7Z0JBQy9CLE9BQU8sQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO2FBQ3JDO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUN6RTtJQUNILENBQUM7Ozs7OztJQUVNLGNBQWMsQ0FBQyxHQUFXLEVBQUUsT0FBZ0I7O1lBQzdDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUM7O1lBQy9DLFFBQVEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O1lBQ3RDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQzs7WUFDN0IsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQztRQUMxQyxDQUFDLG1CQUFBLFFBQVEsQ0FBQyxhQUFhLEVBQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDdkgsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzthQUNwRDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU0sVUFBVSxDQUFDLEdBQVcsRUFBRSxPQUFpQjs7WUFDMUMsT0FBTyxHQUFZLElBQUk7UUFDM0IsQ0FBQyxtQkFBQSxRQUFRLENBQUMsYUFBYSxFQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDN0YsQ0FBQzs7Ozs7OztJQUVNLFdBQVcsQ0FBQyxHQUFXLEVBQUUsSUFBWSxFQUFFLEtBQVU7O1lBQ2xELE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNsQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqRCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDbEU7SUFDSCxDQUFDOzs7Ozs7SUFFTSxXQUFXLENBQUMsR0FBVyxFQUFFLElBQVk7O1lBQ3RDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNsQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsR0FBVzs7WUFDekIsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQzlCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVNLFlBQVksQ0FBQyxHQUFXOztZQUN6QixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDOUIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRU0sUUFBUSxDQUFDLEdBQVc7UUFDekIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRU0sZUFBZSxDQUFDLEdBQVcsRUFBRSxTQUFjOztZQUM1QyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7O1lBQzlCLFdBQVcsR0FBRyxTQUFTOztZQUN2QixRQUFRLEdBQVksSUFBSTtRQUM1QixJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTs7Z0JBQzdDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUM7WUFDckQsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7O29CQUN6QyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUM1QyxJQUFJLE1BQU0sRUFBRTtvQkFDVixjQUFjLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztvQkFDaEMsSUFBSSxjQUFjLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTt3QkFDbkQsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTs0QkFDakQsV0FBVyxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7eUJBQ3REO3dCQUNELE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQzt3QkFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUN6QztpQkFDRjthQUNGO2lCQUFNO2dCQUNMLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7b0JBQ2pELFdBQVcsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDO2lCQUN0RDtnQkFDRCx3Q0FBd0M7Z0JBQ3hDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLFdBQVcsRUFBRTt3QkFDbEYsUUFBUSxHQUFHLEtBQUssQ0FBQztxQkFDbEI7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxRQUFRLEVBQUU7b0JBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsR0FBRyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztpQkFDcEU7YUFDRjtZQUNELElBQUksUUFBUSxFQUFFO2dCQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxjQUFjLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2xHO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFTSxrQkFBa0IsQ0FBQyxHQUFXLEVBQUUsY0FBc0I7O1lBQ3ZELE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNsQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTs7Z0JBQzdDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUM7WUFDckQsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7O29CQUN6QyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUM1QyxJQUFJLE1BQU0sRUFBRTtvQkFDVixjQUFjLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztvQkFDaEMsSUFBSSxjQUFjLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTs7NEJBQy9DLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBQ2QsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDaEMsSUFBSSxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7Z0NBQzFCLElBQUksR0FBRyxDQUFDLEtBQUssS0FBSyxjQUFjLElBQUksR0FBRyxDQUFDLEtBQUssS0FBSyxjQUFjLEVBQUU7b0NBQ2hFLEtBQUssR0FBRyxDQUFDLENBQUM7aUNBQ1g7NkJBQ0Y7aUNBQU07Z0NBQ0wsSUFBSSxHQUFHLEtBQUssY0FBYyxFQUFFO29DQUMxQixLQUFLLEdBQUcsQ0FBQyxDQUFDO2lDQUNYOzZCQUNGO3dCQUNILENBQUMsQ0FBQyxDQUFDO3dCQUNILElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFOzRCQUNoQixjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDakM7d0JBQ0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztxQkFDekM7aUJBQ0Y7YUFDRjtpQkFBTTs7b0JBQ0QsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDZCxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNoQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRTt3QkFDMUIsSUFBSSxHQUFHLENBQUMsS0FBSyxLQUFLLGNBQWMsSUFBSSxHQUFHLENBQUMsS0FBSyxLQUFLLGNBQWMsRUFBRTs0QkFDaEUsS0FBSyxHQUFHLENBQUMsQ0FBQzt5QkFDWDtxQkFDRjt5QkFBTTt3QkFDTCxJQUFJLEdBQUcsS0FBSyxjQUFjLEVBQUU7NEJBQzFCLEtBQUssR0FBRyxDQUFDLENBQUM7eUJBQ1g7cUJBQ0Y7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ2hCLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNqQztnQkFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUM7YUFDdkQ7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUNqRjtJQUNILENBQUM7Ozs7Ozs7SUFFTSxrQkFBa0IsQ0FDdkIsR0FBVyxFQUNYLE1BQXFILEVBQ3JILE1BQVk7O1lBRVIsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ2xDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFOztnQkFDN0MsU0FBUyxHQUFRO2dCQUNuQixlQUFlLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlO2FBQ2hEO1lBQ0QsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsSUFBSSxNQUFNLENBQUMsY0FBYyxFQUFFO2dCQUMxRSxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7b0JBQ25DLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtvQkFDckIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7d0JBQ2pCLElBQUksTUFBTSxDQUFDLGNBQWMsRUFBRTs0QkFDekIsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt5QkFDaEU7d0JBQ0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTs7Z0NBQ2pDLEdBQUcsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsVUFBVSxXQUFXLEtBQUssSUFBSSxFQUFFLEVBQUU7NEJBQ25ILElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0NBQ3pCLElBQUksQ0FBQyxJQUFJO3FDQUNOLEdBQUcsQ0FBQyxHQUFHLENBQUM7cUNBQ1IsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLE9BQWMsRUFBRSxFQUFFO29DQUNyQixJQUFJLE1BQU0sRUFBRTt3Q0FDVixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7cUNBQzVCO29DQUNELE9BQU8sT0FBTyxDQUFDO2dDQUNqQixDQUFDLENBQUMsQ0FDSDtxQ0FDQSxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDOzZCQUMvQjtpQ0FBTTtnQ0FDTCxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7NkJBQ2I7d0JBQ0gsQ0FBQyxDQUFDLENBQUM7b0JBQ0wsQ0FBQztpQkFDRixDQUFDLENBQUM7YUFDSjtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pCLFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN6QztZQUNELElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQzdFO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sVUFBVSxDQUFDLEdBQVcsRUFBRSxPQUFnQjs7WUFDekMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ2xDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFO1lBQ2pELElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQztnQkFDdkQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQyxVQUFVO2dCQUNWLFlBQVksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzlELElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLHdCQUF3QixFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN4RCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDWDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7Z0JBQ3hELFlBQVksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDckMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDckQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSx3QkFBd0IsQ0FBQyxFQUFFO29CQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ3hDO2FBQ0Y7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ3pFO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFFTSxVQUFVLENBQ2YsR0FBVyxFQUNYLGVBQW9CLEVBQ3BCLFdBQW1CLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQ2xFLFlBQWtCO1FBRWxCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRTtZQUNqRCxPQUFPLENBQUMsS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7WUFDcEcsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFO1lBQ3hCLHFEQUFxRDtZQUNyRCxlQUFlLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUM7U0FDNUM7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMzQywrQkFBK0I7WUFDL0IsT0FBTyxJQUFJLENBQUM7U0FDYjs7WUFFRyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDOztZQUNqQyxhQUFhOztZQUFFLFlBQVk7UUFDL0IsSUFBSSxPQUFPLEVBQUU7WUFDWCxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbkIsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRWxCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRTtnQkFDM0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLEVBQUU7b0JBQ2hELElBQUksZUFBZSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7d0JBQy9CLGFBQWEsR0FBRyxFQUFFLENBQUM7d0JBQ25CLFlBQVksR0FBRyxFQUFFLENBQUM7cUJBQ25CO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCwrQ0FBK0M7WUFDL0MsUUFBUSxRQUFRLEVBQUU7Z0JBQ2hCLEtBQUssbUJBQW1CLENBQUMsZUFBZSxDQUFDLFdBQVc7b0JBQ2xELGtDQUFrQztvQkFDbEMsMEJBQTBCO29CQUMxQixNQUFNO2dCQUNSLEtBQUssbUJBQW1CLENBQUMsZUFBZSxDQUFDLFdBQVc7b0JBQ2xELGtDQUFrQztvQkFDbEMsWUFBWSxJQUFJLENBQUMsQ0FBQztvQkFDbEIsTUFBTTtnQkFDUixLQUFLLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxXQUFXO29CQUNsRCxzQ0FBc0M7b0JBQ3RDLFlBQVksR0FBRyxDQUFDLENBQUM7b0JBQ2pCLGFBQWEsR0FBRyxDQUFDLENBQUM7b0JBQ2xCLE1BQU07Z0JBQ1IsS0FBSyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsY0FBYztvQkFDckQseUNBQXlDO29CQUN6QyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDL0MsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7b0JBQ2xFLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1lBRUQsSUFBSSxhQUFhLEtBQUssQ0FBQyxDQUFDLElBQUksWUFBWSxLQUFLLENBQUMsQ0FBQyxFQUFFOztvQkFDM0MsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO2dCQUNuRixXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7b0JBQ3ZCLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDO2dCQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQ2pGLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7YUFDaEY7U0FDRjtJQUNILENBQUM7Ozs7O0lBRU0sYUFBYSxDQUFDLEdBQVc7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLDJCQUEyQjtZQUMzQixPQUFPLElBQUksQ0FBQztTQUNiOztZQUNHLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNsQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTs7Z0JBQzdDLGFBQWEsR0FBRyxDQUFDLENBQUM7O2dCQUNsQixZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBRXJCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRTtnQkFDM0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLEVBQUU7b0JBQ2hELElBQUksZUFBZSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7d0JBQy9CLGFBQWEsR0FBRyxFQUFFLENBQUM7d0JBQ25CLFlBQVksR0FBRyxFQUFFLENBQUM7cUJBQ25CO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLGFBQWEsS0FBSyxDQUFDLENBQUMsSUFBSSxZQUFZLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUMzRTtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sUUFBUSxDQUFDLElBQWdCLEVBQUUsSUFBSSxHQUFHLEVBQUU7O1lBQ3JDLENBQU07UUFDVixZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsS0FBNkI7UUFDaEQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOztBQXJwQmEsbUNBQWUsR0FBRztJQUM5QixXQUFXLEVBQUUsYUFBYTtJQUMxQixXQUFXLEVBQUUsYUFBYTtJQUMxQixXQUFXLEVBQUUsYUFBYTtJQUMxQixjQUFjLEVBQUUsZ0JBQWdCO0NBQ2pDLENBQUM7O1lBYkgsVUFBVTs7OztZQWxDRixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBRmhCLFNBQVM7WUFOVCxVQUFVO1lBWVYsZ0JBQWdCOzs7O0lBcUN2QixvQ0FLRTs7Ozs7SUFYRix1Q0FBc0I7Ozs7O0lBQ3RCLG9DQUFtQjs7Ozs7SUFDbkIsMENBQTRCOzs7OztJQUM1Qix5Q0FBOEI7Ozs7O0lBQzlCLGdEQUErQjs7Ozs7SUFVN0Isc0NBQWlDOzs7OztJQUNqQywyQ0FBc0M7Ozs7O0lBQ3RDLHdDQUE0Qjs7Ozs7SUFDNUIsbUNBQXdCOzs7OztJQUN4QixxQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG4vLyBWZW5kb3JcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0Zvcm1Db250cm9sIH0gZnJvbSAnLi9Ob3ZvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IHsgTm92b0NvbnRyb2xDb25maWcgfSBmcm9tICcuL0Zvcm1Db250cm9scyc7XG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtLXV0aWxzL0Zvcm1VdGlscyc7XG5pbXBvcnQgeyBOb3ZvVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi4vdG9hc3QvVG9hc3RTZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9Nb2RhbFNlcnZpY2UgfSBmcm9tICcuLi9tb2RhbC9Nb2RhbFNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udHJvbENvbmZpcm1Nb2RhbCwgQ29udHJvbFByb21wdE1vZGFsIH0gZnJvbSAnLi9GaWVsZEludGVyYWN0aW9uTW9kYWxzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IEFwcEJyaWRnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2FwcC1icmlkZ2UvQXBwQnJpZGdlJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgSUZpZWxkSW50ZXJhY3Rpb25FdmVudCB9IGZyb20gJy4vRm9ybUludGVyZmFjZXMnO1xuXG5jbGFzcyBDdXN0b21IdHRwIHtcbiAgdXJsOiBzdHJpbmc7XG4gIG9wdGlvbnM6IGFueTtcbiAgbWFwRm46IGFueSA9ICh4KSA9PiB4O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbWFwKG1hcEZuOiBhbnkpIHtcbiAgICB0aGlzLm1hcEZuID0gbWFwRm47XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdWJzY3JpYmUocmVzb2x2ZTogYW55LCByZWplY3Q/OiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMudXJsLCB0aGlzLm9wdGlvbnMpXG4gICAgICAucGlwZShtYXAodGhpcy5tYXBGbikpXG4gICAgICAuc3Vic2NyaWJlKHJlc29sdmUsIHJlamVjdCk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkSW50ZXJhY3Rpb25BcGkge1xuICBwcml2YXRlIF9nbG9iYWxzOiBhbnk7XG4gIHByaXZhdGUgX2Zvcm06IGFueTtcbiAgcHJpdmF0ZSBfY3VycmVudEtleTogc3RyaW5nO1xuICBwcml2YXRlIF9hcHBCcmlkZ2U6IEFwcEJyaWRnZTtcbiAgcHJpdmF0ZSBhc3luY0Jsb2NrVGltZW91dDogYW55O1xuXG4gIHB1YmxpYyBzdGF0aWMgRklFTERfUE9TSVRJT05TID0ge1xuICAgIEFCT1ZFX0ZJRUxEOiAnQUJPVkVfRklFTEQnLFxuICAgIEJFTE9XX0ZJRUxEOiAnQkVMT1dfRklFTEQnLFxuICAgIFRPUF9PRl9GT1JNOiAnVE9QX09GX0ZPUk0nLFxuICAgIEJPVFRPTV9PRl9GT1JNOiAnQk9UVE9NX09GX0ZPUk0nLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdG9hc3RlcjogTm92b1RvYXN0U2VydmljZSxcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTm92b01vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIGZvcm1VdGlsczogRm9ybVV0aWxzLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSxcbiAgKSB7fVxuXG4gIHNldCBmb3JtKGZvcm06IGFueSkge1xuICAgIHRoaXMuX2Zvcm0gPSBmb3JtO1xuICB9XG5cbiAgZ2V0IGZvcm0oKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybTtcbiAgfVxuXG4gIGdldCBhc3NvY2lhdGlvbnMoKTogb2JqZWN0IHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmhhc093blByb3BlcnR5KCdhc3NvY2lhdGlvbnMnKSA/IHRoaXMuZm9ybS5hc3NvY2lhdGlvbnMgOiB7fTtcbiAgfVxuXG4gIGdldCBjdXJyZW50RW50aXR5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudEVudGl0eScpID8gdGhpcy5mb3JtLmN1cnJlbnRFbnRpdHkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgY3VycmVudEVudGl0eUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudEVudGl0eUlkJykgPyB0aGlzLmZvcm0uY3VycmVudEVudGl0eUlkIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGlzRWRpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmhhc093blByb3BlcnR5KCdlZGl0JykgPyB0aGlzLmZvcm0uZWRpdCA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGlzQWRkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0uaGFzT3duUHJvcGVydHkoJ2VkaXQnKSA/ICF0aGlzLmZvcm0uZWRpdCA6IGZhbHNlO1xuICB9XG5cbiAgc2V0IGdsb2JhbHMoZ2xvYmFsczogYW55KSB7XG4gICAgdGhpcy5fZ2xvYmFscyA9IGdsb2JhbHM7XG4gIH1cblxuICBnZXQgZ2xvYmFscygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9nbG9iYWxzO1xuICB9XG5cbiAgc2V0IGN1cnJlbnRLZXkoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jdXJyZW50S2V5ID0ga2V5O1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRLZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEtleTtcbiAgfVxuXG4gIHNldCBhcHBCcmlkZ2UoYXBwQnJpZGdlOiBBcHBCcmlkZ2UpIHtcbiAgICB0aGlzLl9hcHBCcmlkZ2UgPSBhcHBCcmlkZ2U7XG4gIH1cblxuICBnZXQgYXBwQnJpZGdlKCk6IEFwcEJyaWRnZSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcEJyaWRnZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0FjdGl2ZUNvbnRyb2xWYWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmdldFZhbHVlKHRoaXMuY3VycmVudEtleSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlQ29udHJvbCgpOiBOb3ZvRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRyb2wodGhpcy5jdXJyZW50S2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3RpdmVLZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50S2V5O1xuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZVZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUodGhpcy5jdXJyZW50S2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3RpdmVJbml0aWFsVmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbml0aWFsVmFsdWUodGhpcy5jdXJyZW50S2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb250cm9sKGtleTogc3RyaW5nKTogTm92b0Zvcm1Db250cm9sIHtcbiAgICBpZiAoIWtleSkge1xuICAgICAgY29uc29sZS5lcnJvcignW0ZpZWxkSW50ZXJhY3Rpb25BUEldIC0gaW52YWxpZCBvciBtaXNzaW5nIFwia2V5XCInKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLmZvcm0uY29udHJvbHNba2V5XTtcbiAgICBpZiAoIWNvbnRyb2wpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tGaWVsZEludGVyYWN0aW9uQVBJXSAtIGNvdWxkIG5vdCBmaW5kIGEgY29udHJvbCBpbiB0aGUgZm9ybSBieSB0aGUga2V5IC0tJywga2V5KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2wgYXMgTm92b0Zvcm1Db250cm9sO1xuICB9XG5cbiAgcHVibGljIGdldFZhbHVlKGtleTogc3RyaW5nKTogYW55IHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICByZXR1cm4gY29udHJvbC52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmF3VmFsdWUoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBjb250cm9sLnJhd1ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbml0aWFsVmFsdWUoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBjb250cm9sLmluaXRpYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgc2V0VmFsdWUoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgdmFsdWU6IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICAgIGVtaXRNb2RlbFRvVmlld0NoYW5nZT86IGJvb2xlYW47XG4gICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3ZhbHVlJywgdmFsdWU6IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBwYXRjaFZhbHVlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIHZhbHVlOiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U/OiBib29sZWFuO1xuICAgICAgZW1pdFZpZXdUb01vZGVsQ2hhbmdlPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuc2V0VmFsdWUodmFsdWUsIG9wdGlvbnMpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICd2YWx1ZScsIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0UmVhZE9ubHkoa2V5OiBzdHJpbmcsIGlzUmVhZE9ubHk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuc2V0UmVhZE9ubHkoaXNSZWFkT25seSk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3JlYWRPbmx5JywgdmFsdWU6IGlzUmVhZE9ubHkgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldFJlcXVpcmVkKGtleTogc3RyaW5nLCByZXF1aXJlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5zZXRSZXF1aXJlZChyZXF1aXJlZCk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3JlcXVpcmVkJywgdmFsdWU6IHJlcXVpcmVkIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoaWRlKGtleTogc3RyaW5nLCBjbGVhclZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5oaWRlKGNsZWFyVmFsdWUpO1xuICAgICAgdGhpcy5kaXNhYmxlKGtleSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdoaWRkZW4nLCB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2hvdyhrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5zaG93KCk7XG4gICAgICB0aGlzLmVuYWJsZShrZXksIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnaGlkZGVuJywgdmFsdWU6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkaXNhYmxlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgICBlbWl0RXZlbnQ/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5kaXNhYmxlKG9wdGlvbnMpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdyZWFkT25seScsIHZhbHVlOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBlbmFibGUoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLmVuYWJsZShvcHRpb25zKTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAncmVhZE9ubHknLCB2YWx1ZTogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1hcmtBc0ludmFsaWQoa2V5OiBzdHJpbmcsIHZhbGlkYXRpb25NZXNzYWdlPzogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgICBjb250cm9sLm1hcmtBc0ludmFsaWQodmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNEaXJ0eShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eShvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbWFya0FzUGVuZGluZyhcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5tYXJrQXNQZW5kaW5nKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNQcmlzdGluZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5tYXJrQXNQcmlzdGluZShvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbWFya0FzVG91Y2hlZChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNVbnRvdWNoZWQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzVW50b3VjaGVkKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgICBlbWl0RXZlbnQ/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkaXNwbGF5VG9hc3QodG9hc3RDb25maWc6IHtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgaGlkZURlbGF5PzogbnVtYmVyO1xuICAgIGljb24/OiBzdHJpbmc7XG4gICAgdGhlbWU/OiBzdHJpbmc7XG4gICAgcG9zaXRpb24/OiBzdHJpbmc7XG4gICAgaXNDbG9zZWFibGU/OiBib29sZWFuO1xuICAgIGN1c3RvbUNsYXNzPzogc3RyaW5nO1xuICB9KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudG9hc3Rlcikge1xuICAgICAgdGhpcy50b2FzdGVyLmFsZXJ0KHRvYXN0Q29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGlzcGxheVRpcChrZXk6IHN0cmluZywgdGlwOiBzdHJpbmcsIGljb24/OiBzdHJpbmcsIGFsbG93RGlzbWlzcz86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wudGlwV2VsbCA9IHtcbiAgICAgICAgdGlwOiB0aXAsXG4gICAgICAgIGljb246IGljb24sXG4gICAgICAgIGJ1dHRvbjogYWxsb3dEaXNtaXNzLFxuICAgICAgfTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAndGlwV2VsbCcsIHZhbHVlOiB0aXAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldFRvb2x0aXAoa2V5OiBzdHJpbmcsIHRvb2x0aXA6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC50b29sdGlwID0gdG9vbHRpcDtcbiAgICAgIGlmICh0b29sdGlwLmxlbmd0aCA+PSA0MCAmJiB0b29sdGlwLmxlbmd0aCA8PSA0MDApIHtcbiAgICAgICAgY29udHJvbC50b29sdGlwU2l6ZSA9ICdsYXJnZSc7XG4gICAgICAgIGNvbnRyb2wudG9vbHRpcFByZWxpbmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0b29sdGlwLmxlbmd0aCA+IDQwMCkge1xuICAgICAgICBjb250cm9sLnRvb2x0aXBTaXplID0gJ2V4dHJhLWxhcmdlJztcbiAgICAgIH1cbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAndG9vbHRpcCcsIHZhbHVlOiB0b29sdGlwIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb25maXJtQ2hhbmdlcyhrZXk6IHN0cmluZywgbWVzc2FnZT86IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGxldCBoaXN0b3J5ID0gdGhpcy5nZXRQcm9wZXJ0eShrZXksICd2YWx1ZUhpc3RvcnknKTtcbiAgICBsZXQgb2xkVmFsdWUgPSBoaXN0b3J5W2hpc3RvcnkubGVuZ3RoIC0gMl07XG4gICAgbGV0IG5ld1ZhbHVlID0gdGhpcy5nZXRWYWx1ZShrZXkpO1xuICAgIGxldCBsYWJlbCA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnbGFiZWwnKTtcbiAgICAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBhbnkpLmJsdXIoKTtcbiAgICByZXR1cm4gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihDb250cm9sQ29uZmlybU1vZGFsLCB7IG9sZFZhbHVlLCBuZXdWYWx1ZSwgbGFiZWwsIG1lc3NhZ2UsIGtleSB9KS5vbkNsb3NlZC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoa2V5LCBvbGRWYWx1ZSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHByb21wdFVzZXIoa2V5OiBzdHJpbmcsIGNoYW5nZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgbGV0IHNob3dZZXM6IGJvb2xlYW4gPSB0cnVlO1xuICAgIChkb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIGFueSkuYmx1cigpO1xuICAgIHJldHVybiB0aGlzLm1vZGFsU2VydmljZS5vcGVuKENvbnRyb2xQcm9tcHRNb2RhbCwgeyBjaGFuZ2VzOiBjaGFuZ2VzLCBrZXk6IGtleSB9KS5vbkNsb3NlZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQcm9wZXJ0eShrZXk6IHN0cmluZywgcHJvcDogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sW3Byb3BdID0gdmFsdWU7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogcHJvcCwgdmFsdWU6IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRQcm9wZXJ0eShrZXk6IHN0cmluZywgcHJvcDogc3RyaW5nKTogYW55IHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIHJldHVybiBjb250cm9sW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBpc1ZhbHVlRW1wdHkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFZhbHVlKGtleSk7XG4gICAgcmV0dXJuIEhlbHBlcnMuaXNFbXB0eSh2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgaXNWYWx1ZUJsYW5rKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZShrZXkpO1xuICAgIHJldHVybiBIZWxwZXJzLmlzQmxhbmsodmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGhhc0ZpZWxkKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5mb3JtLmNvbnRyb2xzW2tleV07XG4gIH1cblxuICBwdWJsaWMgYWRkU3RhdGljT3B0aW9uKGtleTogc3RyaW5nLCBuZXdPcHRpb246IGFueSk6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgbGV0IG9wdGlvblRvQWRkID0gbmV3T3B0aW9uO1xuICAgIGxldCBpc1VuaXF1ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgbGV0IGN1cnJlbnRPcHRpb25zID0gdGhpcy5nZXRQcm9wZXJ0eShrZXksICdvcHRpb25zJyk7XG4gICAgICBpZiAoIWN1cnJlbnRPcHRpb25zIHx8ICFjdXJyZW50T3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGNvbmZpZyA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJyk7XG4gICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zO1xuICAgICAgICAgIGlmIChjdXJyZW50T3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KGN1cnJlbnRPcHRpb25zKSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25zWzBdLnZhbHVlICYmICFvcHRpb25Ub0FkZC52YWx1ZSkge1xuICAgICAgICAgICAgICBvcHRpb25Ub0FkZCA9IHsgdmFsdWU6IG5ld09wdGlvbiwgbGFiZWw6IG5ld09wdGlvbiB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uZmlnLm9wdGlvbnMgPSBbLi4uY3VycmVudE9wdGlvbnMsIG9wdGlvblRvQWRkXTtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJywgY29uZmlnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjdXJyZW50T3B0aW9uc1swXS52YWx1ZSAmJiAhb3B0aW9uVG9BZGQudmFsdWUpIHtcbiAgICAgICAgICBvcHRpb25Ub0FkZCA9IHsgdmFsdWU6IG5ld09wdGlvbiwgbGFiZWw6IG5ld09wdGlvbiB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuc3VyZSBkdXBsaWNhdGUgdmFsdWVzIGFyZSBub3QgYWRkZWRcbiAgICAgICAgY3VycmVudE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKChvcHRpb24udmFsdWUgJiYgb3B0aW9uLnZhbHVlID09PSBvcHRpb25Ub0FkZC52YWx1ZSkgfHwgb3B0aW9uID09PSBvcHRpb25Ub0FkZCkge1xuICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNVbmlxdWUpIHtcbiAgICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ29wdGlvbnMnLCBbLi4uY3VycmVudE9wdGlvbnMsIG9wdGlvblRvQWRkXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc1VuaXF1ZSkge1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ29wdGlvbnMnLCB2YWx1ZTogWy4uLmN1cnJlbnRPcHRpb25zLCBvcHRpb25Ub0FkZF0gfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbW92ZVN0YXRpY09wdGlvbihrZXk6IHN0cmluZywgb3B0aW9uVG9SZW1vdmU6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgbGV0IGN1cnJlbnRPcHRpb25zID0gdGhpcy5nZXRQcm9wZXJ0eShrZXksICdvcHRpb25zJyk7XG4gICAgICBpZiAoIWN1cnJlbnRPcHRpb25zIHx8ICFjdXJyZW50T3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGNvbmZpZyA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJyk7XG4gICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zO1xuICAgICAgICAgIGlmIChjdXJyZW50T3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KGN1cnJlbnRPcHRpb25zKSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgICAgICBjdXJyZW50T3B0aW9ucy5mb3JFYWNoKChvcHQsIGkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG9wdC52YWx1ZSB8fCBvcHQubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0LnZhbHVlID09PSBvcHRpb25Ub1JlbW92ZSB8fCBvcHQubGFiZWwgPT09IG9wdGlvblRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChvcHQgPT09IG9wdGlvblRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgY3VycmVudE9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbmZpZy5vcHRpb25zID0gWy4uLmN1cnJlbnRPcHRpb25zXTtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJywgY29uZmlnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBjdXJyZW50T3B0aW9ucy5mb3JFYWNoKChvcHQsIGkpID0+IHtcbiAgICAgICAgICBpZiAob3B0LnZhbHVlIHx8IG9wdC5sYWJlbCkge1xuICAgICAgICAgICAgaWYgKG9wdC52YWx1ZSA9PT0gb3B0aW9uVG9SZW1vdmUgfHwgb3B0LmxhYmVsID09PSBvcHRpb25Ub1JlbW92ZSkge1xuICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvcHQgPT09IG9wdGlvblRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgY3VycmVudE9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ29wdGlvbnMnLCBbLi4uY3VycmVudE9wdGlvbnNdKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnb3B0aW9ucycsIHZhbHVlOiBjb250cm9sLm9wdGlvbnMgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1vZGlmeVBpY2tlckNvbmZpZyhcbiAgICBrZXk6IHN0cmluZyxcbiAgICBjb25maWc6IHsgZm9ybWF0Pzogc3RyaW5nOyBvcHRpb25zVXJsPzogc3RyaW5nOyBvcHRpb25zVXJsQnVpbGRlcj86IEZ1bmN0aW9uOyBvcHRpb25zUHJvbWlzZT86IGFueTsgb3B0aW9ucz86IGFueVtdIH0sXG4gICAgbWFwcGVyPzogYW55LFxuICApOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGxldCBuZXdDb25maWc6IGFueSA9IHtcbiAgICAgICAgcmVzdWx0c1RlbXBsYXRlOiBjb250cm9sLmNvbmZpZy5yZXN1bHRzVGVtcGxhdGUsXG4gICAgICB9O1xuICAgICAgaWYgKGNvbmZpZy5vcHRpb25zVXJsIHx8IGNvbmZpZy5vcHRpb25zVXJsQnVpbGRlciB8fCBjb25maWcub3B0aW9uc1Byb21pc2UpIHtcbiAgICAgICAgbmV3Q29uZmlnID0gT2JqZWN0LmFzc2lnbihuZXdDb25maWcsIHtcbiAgICAgICAgICBmb3JtYXQ6IGNvbmZpZy5mb3JtYXQsXG4gICAgICAgICAgb3B0aW9uczogKHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLm9wdGlvbnNQcm9taXNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjb25maWcub3B0aW9uc1Byb21pc2UocXVlcnksIG5ldyBDdXN0b21IdHRwKHRoaXMuaHR0cCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgbGV0IHVybCA9IGNvbmZpZy5vcHRpb25zVXJsQnVpbGRlciA/IGNvbmZpZy5vcHRpb25zVXJsQnVpbGRlcihxdWVyeSkgOiBgJHtjb25maWcub3B0aW9uc1VybH0/ZmlsdGVyPSR7cXVlcnkgfHwgJyd9YDtcbiAgICAgICAgICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaHR0cFxuICAgICAgICAgICAgICAgICAgLmdldCh1cmwpXG4gICAgICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICAgICAgbWFwKChyZXN1bHRzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXBwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLm1hcChtYXBwZXIpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChjb25maWcub3B0aW9ucykge1xuICAgICAgICBuZXdDb25maWcub3B0aW9ucyA9IFsuLi5jb25maWcub3B0aW9uc107XG4gICAgICB9XG4gICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ2NvbmZpZycsIG5ld0NvbmZpZyk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3BpY2tlckNvbmZpZycsIHZhbHVlOiBjb25maWcgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldExvYWRpbmcoa2V5OiBzdHJpbmcsIGxvYWRpbmc6IGJvb2xlYW4pIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1trZXldLmZpZWxkSW50ZXJhY3Rpb25sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgY29udHJvbC5zZXRFcnJvcnMoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgICAvLyBIaXN0b3J5XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFzeW5jQmxvY2tUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5hc3luY0Jsb2NrVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0TG9hZGluZyhrZXksIGZhbHNlKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlUaXAoa2V5LCB0aGlzLmxhYmVscy5hc3luY0ZhaWx1cmUsICdpbmZvJywgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnX2Rpc3BsYXllZEFzeW5jRmFpbHVyZScsIHRydWUpO1xuICAgICAgICB9LCAxMDAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNba2V5XS5maWVsZEludGVyYWN0aW9ubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hc3luY0Jsb2NrVGltZW91dCk7XG4gICAgICAgIGNvbnRyb2wuc2V0RXJyb3JzKHsgbG9hZGluZzogbnVsbCB9KTtcbiAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnX2Rpc3BsYXllZEFzeW5jRmFpbHVyZScpKSB7XG4gICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICd0aXBXZWxsJywgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnbG9hZGluZycsIHZhbHVlOiBsb2FkaW5nIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhZGRDb250cm9sKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG1ldGFGb3JOZXdGaWVsZDogYW55LFxuICAgIHBvc2l0aW9uOiBzdHJpbmcgPSBGaWVsZEludGVyYWN0aW9uQXBpLkZJRUxEX1BPU0lUSU9OUy5BQk9WRV9GSUVMRCxcbiAgICBpbml0aWFsVmFsdWU/OiBhbnksXG4gICk6IHZvaWQge1xuICAgIGlmICghbWV0YUZvck5ld0ZpZWxkLmtleSAmJiAhbWV0YUZvck5ld0ZpZWxkLm5hbWUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tGaWVsZEludGVyYWN0aW9uQVBJXSAtIG1pc3NpbmcgXCJrZXlcIiBpbiBtZXRhIGZvciBuZXcgZmllbGQnKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCFtZXRhRm9yTmV3RmllbGQua2V5KSB7XG4gICAgICAvLyBJZiBrZXkgaXMgbm90IGV4cGxpY2l0bHkgZGVjbGFyZWQsIHVzZSBuYW1lIGFzIGtleVxuICAgICAgbWV0YUZvck5ld0ZpZWxkLmtleSA9IG1ldGFGb3JOZXdGaWVsZC5uYW1lO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbbWV0YUZvck5ld0ZpZWxkLmtleV0pIHtcbiAgICAgIC8vIEZpZWxkIGlzIGFscmVhZHkgb24gdGhlIGZvcm1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBjb250cm9sID0gdGhpcy5mb3JtLmNvbnRyb2xzW2tleV07XG4gICAgbGV0IGZpZWxkc2V0SW5kZXgsIGNvbnRyb2xJbmRleDtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgZmllbGRzZXRJbmRleCA9IC0xO1xuICAgICAgY29udHJvbEluZGV4ID0gLTE7XG5cbiAgICAgIHRoaXMuZm9ybS5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQsIGZpKSA9PiB7XG4gICAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGZpZWxkc2V0Q29udHJvbCwgY2kpID0+IHtcbiAgICAgICAgICBpZiAoZmllbGRzZXRDb250cm9sLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICBmaWVsZHNldEluZGV4ID0gZmk7XG4gICAgICAgICAgICBjb250cm9sSW5kZXggPSBjaTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIENoYW5nZSB0aGUgcG9zaXRpb24gb2YgdGhlIG5ld2x5IGFkZGVkIGZpZWxkXG4gICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgRmllbGRJbnRlcmFjdGlvbkFwaS5GSUVMRF9QT1NJVElPTlMuQUJPVkVfRklFTEQ6XG4gICAgICAgICAgLy8gQWRkaW5nIGZpZWxkIGFib3ZlIGFjdGl2ZSBmaWVsZFxuICAgICAgICAgIC8vIGluZGV4IGNhbiBzdGF5IHRoZSBzYW1lXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRmllbGRJbnRlcmFjdGlvbkFwaS5GSUVMRF9QT1NJVElPTlMuQkVMT1dfRklFTEQ6XG4gICAgICAgICAgLy8gQWRkaW5nIGZpZWxkIGJlbG93IGFjdGl2ZSBmaWVsZFxuICAgICAgICAgIGNvbnRyb2xJbmRleCArPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEZpZWxkSW50ZXJhY3Rpb25BcGkuRklFTERfUE9TSVRJT05TLlRPUF9PRl9GT1JNOlxuICAgICAgICAgIC8vIEFkZGluZyBmaWVsZCB0byB0aGUgdG9wIG9mIHRoZSBmb3JtXG4gICAgICAgICAgY29udHJvbEluZGV4ID0gMDtcbiAgICAgICAgICBmaWVsZHNldEluZGV4ID0gMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBGaWVsZEludGVyYWN0aW9uQXBpLkZJRUxEX1BPU0lUSU9OUy5CT1RUT01fT0ZfRk9STTpcbiAgICAgICAgICAvLyBBZGRpbmcgZmllbGQgdG8gdGhlIGJvdHRvbSBvZiB0aGUgZm9ybVxuICAgICAgICAgIGZpZWxkc2V0SW5kZXggPSB0aGlzLmZvcm0uZmllbGRzZXRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgY29udHJvbEluZGV4ID0gdGhpcy5mb3JtLmZpZWxkc2V0c1tmaWVsZHNldEluZGV4XS5jb250cm9scy5sZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWVsZHNldEluZGV4ICE9PSAtMSAmJiBjb250cm9sSW5kZXggIT09IC0xKSB7XG4gICAgICAgIGxldCBub3ZvQ29udHJvbCA9IHRoaXMuZm9ybVV0aWxzLmdldENvbnRyb2xGb3JGaWVsZChtZXRhRm9yTmV3RmllbGQsIHRoaXMuaHR0cCwge30pO1xuICAgICAgICBub3ZvQ29udHJvbC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgbGV0IGZvcm1Db250cm9sID0gbmV3IE5vdm9Gb3JtQ29udHJvbChpbml0aWFsVmFsdWUsIG5vdm9Db250cm9sKTtcbiAgICAgICAgdGhpcy5mb3JtLmFkZENvbnRyb2wobm92b0NvbnRyb2wua2V5LCBmb3JtQ29udHJvbCk7XG4gICAgICAgIHRoaXMuZm9ybS5maWVsZHNldHNbZmllbGRzZXRJbmRleF0uY29udHJvbHMuc3BsaWNlKGNvbnRyb2xJbmRleCwgMCwgbm92b0NvbnRyb2wpO1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ2FkZENvbnRyb2wnLCB2YWx1ZTogZm9ybUNvbnRyb2wgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbW92ZUNvbnRyb2woa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1trZXldKSB7XG4gICAgICAvLyBGaWVsZCBpcyBub3Qgb24gdGhlIGZvcm1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGxldCBmaWVsZHNldEluZGV4ID0gLTE7XG4gICAgICBsZXQgY29udHJvbEluZGV4ID0gLTE7XG5cbiAgICAgIHRoaXMuZm9ybS5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQsIGZpKSA9PiB7XG4gICAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGZpZWxkc2V0Q29udHJvbCwgY2kpID0+IHtcbiAgICAgICAgICBpZiAoZmllbGRzZXRDb250cm9sLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICBmaWVsZHNldEluZGV4ID0gZmk7XG4gICAgICAgICAgICBjb250cm9sSW5kZXggPSBjaTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaWVsZHNldEluZGV4ICE9PSAtMSAmJiBjb250cm9sSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuZm9ybS5yZW1vdmVDb250cm9sKGtleSk7XG4gICAgICAgIHRoaXMuZm9ybS5maWVsZHNldHNbZmllbGRzZXRJbmRleF0uY29udHJvbHMuc3BsaWNlKGNvbnRyb2xJbmRleCwgMSk7XG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAncmVtb3ZlQ29udHJvbCcsIHZhbHVlOiBrZXkgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRlYm91bmNlKGZ1bmM6ICgpID0+IHZvaWQsIHdhaXQgPSA1MCkge1xuICAgIGxldCBoOiBhbnk7XG4gICAgY2xlYXJUaW1lb3V0KGgpO1xuICAgIGggPSBzZXRUaW1lb3V0KCgpID0+IGZ1bmMoKSwgd2FpdCk7XG4gIH1cblxuICBwcml2YXRlIHRyaWdnZXJFdmVudChldmVudDogSUZpZWxkSW50ZXJhY3Rpb25FdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZvcm0gJiYgdGhpcy5mb3JtLmZpZWxkSW50ZXJhY3Rpb25FdmVudHMpIHtcbiAgICAgIHRoaXMuZm9ybS5maWVsZEludGVyYWN0aW9uRXZlbnRzLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuIl19