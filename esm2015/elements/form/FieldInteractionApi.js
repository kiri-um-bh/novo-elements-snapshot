// NG2
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Vendor
import { map } from 'rxjs/operators';
import { NovoLabelService } from '../../services/novo-label-service';
import { FormUtils } from '../../utils/form-utils/FormUtils';
import { Helpers } from '../../utils/Helpers';
import { NovoModalService } from '../modal/modal.service';
import { EntityPickerResults } from '../picker/extras/entity-picker-results/EntityPickerResults';
import { NovoToastService } from '../toast/ToastService';
import { ControlConfirmModal, ControlPromptModal } from './FieldInteractionModals';
// APP
import { NovoFormControl } from './NovoFormControl';
import * as i0 from "@angular/core";
import * as i1 from "../toast/ToastService";
import * as i2 from "../modal/modal.service";
import * as i3 from "../../utils/form-utils/FormUtils";
import * as i4 from "@angular/common/http";
import * as i5 from "../../services/novo-label-service";
class CustomHttpImpl {
    constructor(http) {
        this.http = http;
        this.mapFn = (x) => x;
    }
    get(url, options) {
        this.url = url;
        this.options = options;
        return this;
    }
    map(mapFn) {
        this.mapFn = mapFn;
        return this;
    }
    subscribe(resolve, reject) {
        return this.http.get(this.url, this.options).pipe(map(this.mapFn)).subscribe(resolve, reject);
    }
}
export class FieldInteractionApi {
    constructor(toaster, modalService, formUtils, http, labels) {
        this.toaster = toaster;
        this.modalService = modalService;
        this.formUtils = formUtils;
        this.http = http;
        this.labels = labels;
        this.getOptionsConfig = (args, mapper, filteredOptionsCreator, pickerConfigFormat) => {
            if (filteredOptionsCreator || 'optionsUrl' in args || 'optionsUrlBuilder' in args || 'optionsPromise' in args) {
                const format = ('format' in args && args.format) || pickerConfigFormat;
                return Object.assign(Object.assign({ options: this.createOptionsFunction(args, mapper, filteredOptionsCreator) }, ('emptyPickerMessage' in args && { emptyPickerMessage: args.emptyPickerMessage })), (format && { format }));
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
                return config.optionsPromise(query, new CustomHttpImpl(this.http), page);
            }
            else if (('optionsUrlBuilder' in config && config.optionsUrlBuilder) || ('optionsUrl' in config && config.optionsUrl)) {
                return new Promise((resolve, reject) => {
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
    get associations() {
        return this.form.hasOwnProperty('associations') ? this.form.associations : {};
    }
    get currentEntity() {
        return this.form.hasOwnProperty('currentEntity') ? this.form.currentEntity : undefined;
    }
    get currentEntityId() {
        return this.form.hasOwnProperty('currentEntityId') ? this.form.currentEntityId : undefined;
    }
    get isEdit() {
        return this.form.hasOwnProperty('edit') ? this.form.edit : false;
    }
    get isAdd() {
        return this.form.hasOwnProperty('edit') ? !this.form.edit : false;
    }
    set globals(globals) {
        this._globals = globals;
    }
    get globals() {
        return this._globals;
    }
    set currentKey(key) {
        this._currentKey = key;
    }
    get currentKey() {
        return this._currentKey;
    }
    isActiveControlValid() {
        return !!this.getValue(this.currentKey);
    }
    getActiveControl() {
        return this.getControl(this.currentKey);
    }
    getActiveKey() {
        return this.currentKey;
    }
    getActiveValue() {
        return this.getValue(this.currentKey);
    }
    getActiveInitialValue() {
        return this.getInitialValue(this.currentKey);
    }
    getFieldSet(key) {
        if (!key) {
            console.error('[FieldInteractionAPI] - invalid or missing "key"'); // tslint:disable-line
            return null;
        }
        const fieldSet = this.form.fieldsets.find((fs) => fs.key && fs.key.toLowerCase() === key.toLowerCase());
        if (!fieldSet) {
            console.error('[FieldInteractionAPI] - could not find a fieldset in the form by the key --', key); // tslint:disable-line
            return null;
        }
        return fieldSet;
    }
    getControl(key) {
        if (!key) {
            console.error('[FieldInteractionAPI] - invalid or missing "key"'); // tslint:disable-line
            return null;
        }
        const control = this.form.controls[key];
        if (!control) {
            console.error('[FieldInteractionAPI] - could not find a control in the form by the key --', key); // tslint:disable-line
            return null;
        }
        return control;
    }
    getValue(key) {
        const control = this.getControl(key);
        if (control) {
            return control.value;
        }
        return null;
    }
    getRawValue(key) {
        const control = this.getControl(key);
        if (control) {
            return control.rawValue;
        }
        return null;
    }
    getInitialValue(key) {
        const control = this.getControl(key);
        if (control) {
            return control.initialValue;
        }
        return null;
    }
    setValue(key, value, options) {
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.setValue(value, options);
            this.triggerEvent({ controlKey: key, prop: 'value', value });
        }
    }
    patchValue(key, value, options) {
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.setValue(value, options);
            this.triggerEvent({ controlKey: key, prop: 'value', value });
        }
    }
    setReadOnly(key, isReadOnly) {
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.setReadOnly(isReadOnly);
            this.triggerEvent({ controlKey: key, prop: 'readOnly', value: isReadOnly });
        }
    }
    setRequired(key, required) {
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.setRequired(required);
            this.triggerEvent({ controlKey: key, prop: 'required', value: required });
        }
    }
    hide(key, clearValue = true) {
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.hide(clearValue);
            this.disable(key, { emitEvent: false });
            this.triggerEvent({ controlKey: key, prop: 'hidden', value: true });
        }
        return control;
    }
    show(key) {
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.show();
            this.enable(key, { emitEvent: false });
            this.triggerEvent({ controlKey: key, prop: 'hidden', value: false });
        }
    }
    hideFieldSetHeader(key) {
        const fieldSet = this.getFieldSet(key);
        if (fieldSet) {
            fieldSet.hidden = true;
        }
    }
    showFieldSetHeader(key) {
        const fieldSet = this.getFieldSet(key);
        if (fieldSet) {
            fieldSet.hidden = false;
        }
    }
    disable(key, options) {
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.disable(options);
            this.triggerEvent({ controlKey: key, prop: 'readOnly', value: true });
        }
    }
    enable(key, options) {
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.enable(options);
            this.triggerEvent({ controlKey: key, prop: 'readOnly', value: false });
        }
    }
    markAsInvalid(key, validationMessage) {
        const control = this.getControl(key);
        if (control) {
            if (control && !control.restrictFieldInteractions) {
                control.markAsInvalid(validationMessage);
            }
        }
    }
    markAsDirty(key, options) {
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.markAsDirty(options);
        }
    }
    markAsPending(key, options) {
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.markAsPending(options);
        }
    }
    markAsPristine(key, options) {
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.markAsPristine(options);
        }
    }
    markAsTouched(key, options) {
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.markAsTouched(options);
        }
    }
    markAsUntouched(key, options) {
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.markAsUntouched(options);
        }
    }
    updateValueAndValidity(key, options) {
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.updateValueAndValidity(options);
        }
    }
    displayToast(toastConfig) {
        if (this.toaster) {
            this.toaster.alert(toastConfig);
        }
    }
    displayTip(key, tip, icon, allowDismiss, sanitize) {
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
    setTooltip(key, tooltip) {
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
    confirmChanges(key, message) {
        const history = this.getProperty(key, 'valueHistory');
        const oldValue = history[history.length - 2];
        const newValue = this.getValue(key);
        const label = this.getProperty(key, 'label');
        document.activeElement.blur();
        return this.modalService.open(ControlConfirmModal, { oldValue, newValue, label, message, key }).onClosed.then((result) => {
            if (!result) {
                this.setValue(key, oldValue, { emitEvent: false });
            }
            return true;
        });
    }
    promptUser(key, changes) {
        const showYes = true;
        document.activeElement.blur();
        return this.modalService.open(ControlPromptModal, { changes, key }).onClosed;
    }
    setProperty(key, prop, value) {
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control[prop] = value;
            this.triggerEvent({ controlKey: key, prop, value });
        }
    }
    getProperty(key, prop) {
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            return control[prop];
        }
        return null;
    }
    isValueEmpty(key) {
        const value = this.getValue(key);
        return Helpers.isEmpty(value);
    }
    isValueBlank(key) {
        const value = this.getValue(key);
        return Helpers.isBlank(value);
    }
    hasField(key) {
        return !!this.form.controls[key];
    }
    addStaticOption(key, newOption) {
        const control = this.getControl(key);
        let optionToAdd = newOption;
        let isUnique = true;
        if (control && !control.restrictFieldInteractions) {
            let currentOptions = this.getProperty(key, 'options');
            if (!currentOptions || !currentOptions.length) {
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
    removeStaticOption(key, optionToRemove) {
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            let currentOptions = this.getProperty(key, 'options');
            if (!currentOptions || !currentOptions.length) {
                const config = this.getProperty(key, 'config');
                if (config) {
                    currentOptions = config.options;
                    if (currentOptions && Array.isArray(currentOptions)) {
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
    modifyPickerConfig(key, config, mapper) {
        // call another method to avoid a breaking change but still enable stricter types
        this.mutatePickerConfig(key, config, mapper);
    }
    mutatePickerConfig(key, args, mapper) {
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            const { minSearchLength, enableInfiniteScroll, filteredOptionsCreator, format, getLabels, emptyPickerMessage } = control.config;
            const optionsConfig = this.getOptionsConfig(args, mapper, filteredOptionsCreator, format);
            const newConfig = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (emptyPickerMessage && { emptyPickerMessage })), (Number.isInteger(minSearchLength) && { minSearchLength })), (enableInfiniteScroll && { enableInfiniteScroll })), (filteredOptionsCreator && { filteredOptionsCreator })), (getLabels && { getLabels })), (optionsConfig && optionsConfig)), { resultsTemplate: control.config.resultsTemplate || ('resultsTemplateType' in args && this.getAppropriateResultsTemplate(args.resultsTemplateType)) });
            this.setProperty(key, 'config', newConfig);
            this.triggerEvent({ controlKey: key, prop: 'pickerConfig', value: args });
        }
    }
    addPropertiesToPickerConfig(key, properties) {
        const control = this.getControl(key);
        if (!control || control.restrictFieldInteractions) {
            return;
        }
        const config = Object.assign(Object.assign({}, control.config), properties);
        this.setProperty(key, 'config', config);
        this.triggerEvent({ controlKey: key, prop: 'pickerConfig', value: properties });
    }
    getAppropriateResultsTemplate(resultsTemplateType) {
        switch (resultsTemplateType) {
            case 'entity-picker':
                return EntityPickerResults;
            default:
                return undefined;
        }
    }
    setLoading(key, loading) {
        const control = this.getControl(key);
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
        const control = this.form.controls[key];
        let fieldsetIndex;
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
                const novoControl = this.formUtils.getControlForField(metaForNewField, this.http, {});
                novoControl.hidden = false;
                const formControl = new NovoFormControl(initialValue, novoControl);
                this.form.addControl(novoControl.key, formControl);
                this.form.fieldsets[fieldsetIndex].controls.splice(controlIndex, 0, novoControl);
                this.triggerEvent({ controlKey: key, prop: 'addControl', value: formControl });
            }
        }
    }
    removeControl(key) {
        if (!this.form.controls[key]) {
            // Field is not on the form
            return null;
        }
        const control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            let fieldsetIndex = -1;
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
    debounce(func, wait = 50) {
        let h;
        clearTimeout(h);
        h = setTimeout(() => func(), wait);
    }
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
FieldInteractionApi.ɵfac = function FieldInteractionApi_Factory(t) { return new (t || FieldInteractionApi)(i0.ɵɵinject(i1.NovoToastService), i0.ɵɵinject(i2.NovoModalService), i0.ɵɵinject(i3.FormUtils), i0.ɵɵinject(i4.HttpClient), i0.ɵɵinject(i5.NovoLabelService)); };
FieldInteractionApi.ɵprov = i0.ɵɵdefineInjectable({ token: FieldInteractionApi, factory: FieldInteractionApi.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FieldInteractionApi, [{
        type: Injectable
    }], function () { return [{ type: i1.NovoToastService }, { type: i2.NovoModalService }, { type: i3.FormUtils }, { type: i4.HttpClient }, { type: i5.NovoLabelService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGRJbnRlcmFjdGlvbkFwaS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vRmllbGRJbnRlcmFjdGlvbkFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsU0FBUztBQUNULE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDN0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBZ0IsTUFBTSx1QkFBdUIsQ0FBQztBQUV2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUduRixNQUFNO0FBQ04sT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7O0FBR3BELE1BQU0sY0FBYztJQUtsQixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFVBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXNCLENBQUM7SUFFeEMsR0FBRyxDQUFDLEdBQVcsRUFBRSxPQUFRO1FBQ3ZCLElBQUksQ0FB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QUcsRUFBRTtRQUNsQyxJQUFJLENBQUMsQ0FBQztRQUNOLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTyxZQUFZLENBQUMsS0FBNkI7UUFDaEQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOztBQWx1Qk0sbUNBQWUsR0FBRztJQUN2QixXQUFXLEVBQUUsYUFBYTtJQUMxQixXQUFXLEVBQUUsYUFBYTtJQUMxQixXQUFXLEVBQUUsYUFBYTtJQUMxQixjQUFjLEVBQUUsZ0JBQWdCO0NBQ2pDLENBQUM7c0ZBWlMsbUJBQW1COzJEQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FEL0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEFwcEJyaWRnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2FwcC1icmlkZ2UvQXBwQnJpZGdlJztcbmltcG9ydCB7IEZvcm1VdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm0tdXRpbHMvRm9ybVV0aWxzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9Nb2RhbFNlcnZpY2UgfSBmcm9tICcuLi9tb2RhbC9tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IEVudGl0eVBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi9waWNrZXIvZXh0cmFzL2VudGl0eS1waWNrZXItcmVzdWx0cy9FbnRpdHlQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IE5vdm9Ub2FzdFNlcnZpY2UsIFRvYXN0T3B0aW9ucyB9IGZyb20gJy4uL3RvYXN0L1RvYXN0U2VydmljZSc7XG5pbXBvcnQgeyBDdXN0b21IdHRwLCBNb2RpZnlQaWNrZXJDb25maWdBcmdzLCBPcHRpb25zRnVuY3Rpb24gfSBmcm9tICcuL0ZpZWxkSW50ZXJhY3Rpb25BcGlUeXBlcyc7XG5pbXBvcnQgeyBDb250cm9sQ29uZmlybU1vZGFsLCBDb250cm9sUHJvbXB0TW9kYWwgfSBmcm9tICcuL0ZpZWxkSW50ZXJhY3Rpb25Nb2RhbHMnO1xuaW1wb3J0IHsgTm92b0NvbnRyb2xDb25maWcgfSBmcm9tICcuL0Zvcm1Db250cm9scyc7XG5pbXBvcnQgeyBJRmllbGRJbnRlcmFjdGlvbkV2ZW50LCBOb3ZvRmllbGRzZXQsIFJlc3VsdHNUZW1wbGF0ZVR5cGUgfSBmcm9tICcuL0Zvcm1JbnRlcmZhY2VzJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0Zvcm1Db250cm9sIH0gZnJvbSAnLi9Ob3ZvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IHsgTm92b0Zvcm1Hcm91cCB9IGZyb20gJy4vTm92b0Zvcm1Hcm91cCc7XG5cbmNsYXNzIEN1c3RvbUh0dHBJbXBsIGltcGxlbWVudHMgQ3VzdG9tSHR0cCB7XG4gIHVybDogc3RyaW5nO1xuICBvcHRpb25zO1xuICBtYXBGbiA9ICh4KSA9PiB4O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM/KTogQ3VzdG9tSHR0cCB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1hcChtYXBGbik6IEN1c3RvbUh0dHAge1xuICAgIHRoaXMubWFwRm4gPSBtYXBGbjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN1YnNjcmliZShyZXNvbHZlLCByZWplY3Q/KTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCwgdGhpcy5vcHRpb25zKS5waXBlKG1hcCh0aGlzLm1hcEZuKSkuc3Vic2NyaWJlKHJlc29sdmUsIHJlamVjdCk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkSW50ZXJhY3Rpb25BcGkge1xuICBwcml2YXRlIF9nbG9iYWxzO1xuICBmb3JtOiBOb3ZvRm9ybUdyb3VwIHwgYW55O1xuICBwcml2YXRlIF9jdXJyZW50S2V5OiBzdHJpbmc7XG4gIGFwcEJyaWRnZTogQXBwQnJpZGdlO1xuICBwcml2YXRlIGFzeW5jQmxvY2tUaW1lb3V0O1xuXG4gIHN0YXRpYyBGSUVMRF9QT1NJVElPTlMgPSB7XG4gICAgQUJPVkVfRklFTEQ6ICdBQk9WRV9GSUVMRCcsXG4gICAgQkVMT1dfRklFTEQ6ICdCRUxPV19GSUVMRCcsXG4gICAgVE9QX09GX0ZPUk06ICdUT1BfT0ZfRk9STScsXG4gICAgQk9UVE9NX09GX0ZPUk06ICdCT1RUT01fT0ZfRk9STScsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0b2FzdGVyOiBOb3ZvVG9hc3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOb3ZvTW9kYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybVV0aWxzOiBGb3JtVXRpbHMsXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICApIHt9XG5cbiAgZ2V0IGFzc29jaWF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmhhc093blByb3BlcnR5KCdhc3NvY2lhdGlvbnMnKSA/IHRoaXMuZm9ybS5hc3NvY2lhdGlvbnMgOiB7fTtcbiAgfVxuXG4gIGdldCBjdXJyZW50RW50aXR5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudEVudGl0eScpID8gdGhpcy5mb3JtLmN1cnJlbnRFbnRpdHkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgY3VycmVudEVudGl0eUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudEVudGl0eUlkJykgPyB0aGlzLmZvcm0uY3VycmVudEVudGl0eUlkIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGlzRWRpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmhhc093blByb3BlcnR5KCdlZGl0JykgPyB0aGlzLmZvcm0uZWRpdCA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGlzQWRkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0uaGFzT3duUHJvcGVydHkoJ2VkaXQnKSA/ICF0aGlzLmZvcm0uZWRpdCA6IGZhbHNlO1xuICB9XG5cbiAgc2V0IGdsb2JhbHMoZ2xvYmFscykge1xuICAgIHRoaXMuX2dsb2JhbHMgPSBnbG9iYWxzO1xuICB9XG5cbiAgZ2V0IGdsb2JhbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dsb2JhbHM7XG4gIH1cblxuICBzZXQgY3VycmVudEtleShrZXk6IHN0cmluZykge1xuICAgIHRoaXMuX2N1cnJlbnRLZXkgPSBrZXk7XG4gIH1cblxuICBnZXQgY3VycmVudEtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50S2V5O1xuICB9XG5cbiAgaXNBY3RpdmVDb250cm9sVmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5nZXRWYWx1ZSh0aGlzLmN1cnJlbnRLZXkpO1xuICB9XG5cbiAgZ2V0QWN0aXZlQ29udHJvbCgpOiBOb3ZvRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRyb2wodGhpcy5jdXJyZW50S2V5KTtcbiAgfVxuXG4gIGdldEFjdGl2ZUtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRLZXk7XG4gIH1cblxuICBnZXRBY3RpdmVWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSh0aGlzLmN1cnJlbnRLZXkpO1xuICB9XG5cbiAgZ2V0QWN0aXZlSW5pdGlhbFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEluaXRpYWxWYWx1ZSh0aGlzLmN1cnJlbnRLZXkpO1xuICB9XG5cbiAgZ2V0RmllbGRTZXQoa2V5OiBzdHJpbmcpOiBOb3ZvRmllbGRzZXQge1xuICAgIGlmICgha2V5KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRmllbGRJbnRlcmFjdGlvbkFQSV0gLSBpbnZhbGlkIG9yIG1pc3NpbmcgXCJrZXlcIicpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZFNldCA9IHRoaXMuZm9ybS5maWVsZHNldHMuZmluZCgoZnM6IE5vdm9GaWVsZHNldCkgPT4gZnMua2V5ICYmIGZzLmtleS50b0xvd2VyQ2FzZSgpID09PSBrZXkudG9Mb3dlckNhc2UoKSk7XG4gICAgaWYgKCFmaWVsZFNldCkge1xuICAgICAgY29uc29sZS5lcnJvcignW0ZpZWxkSW50ZXJhY3Rpb25BUEldIC0gY291bGQgbm90IGZpbmQgYSBmaWVsZHNldCBpbiB0aGUgZm9ybSBieSB0aGUga2V5IC0tJywga2V5KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkU2V0IGFzIE5vdm9GaWVsZHNldDtcbiAgfVxuXG4gIGdldENvbnRyb2woa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIWtleSkge1xuICAgICAgY29uc29sZS5lcnJvcignW0ZpZWxkSW50ZXJhY3Rpb25BUEldIC0gaW52YWxpZCBvciBtaXNzaW5nIFwia2V5XCInKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZm9ybS5jb250cm9sc1trZXldIGFzIE5vdm9Gb3JtQ29udHJvbDtcbiAgICBpZiAoIWNvbnRyb2wpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tGaWVsZEludGVyYWN0aW9uQVBJXSAtIGNvdWxkIG5vdCBmaW5kIGEgY29udHJvbCBpbiB0aGUgZm9ybSBieSB0aGUga2V5IC0tJywga2V5KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cblxuICBnZXRWYWx1ZShrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgcmV0dXJuIGNvbnRyb2wudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0UmF3VmFsdWUoa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBjb250cm9sLnJhd1ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldEluaXRpYWxWYWx1ZShrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgcmV0dXJuIGNvbnRyb2wuaW5pdGlhbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNldFZhbHVlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIHZhbHVlLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgICBlbWl0RXZlbnQ/OiBib29sZWFuO1xuICAgICAgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlPzogYm9vbGVhbjtcbiAgICAgIGVtaXRWaWV3VG9Nb2RlbENoYW5nZT86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuc2V0VmFsdWUodmFsdWUsIG9wdGlvbnMpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICd2YWx1ZScsIHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHBhdGNoVmFsdWUoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgdmFsdWUsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U/OiBib29sZWFuO1xuICAgICAgZW1pdFZpZXdUb01vZGVsQ2hhbmdlPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3ZhbHVlJywgdmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0UmVhZE9ubHkoa2V5OiBzdHJpbmcsIGlzUmVhZE9ubHk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5zZXRSZWFkT25seShpc1JlYWRPbmx5KTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAncmVhZE9ubHknLCB2YWx1ZTogaXNSZWFkT25seSB9KTtcbiAgICB9XG4gIH1cblxuICBzZXRSZXF1aXJlZChrZXk6IHN0cmluZywgcmVxdWlyZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5zZXRSZXF1aXJlZChyZXF1aXJlZCk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3JlcXVpcmVkJywgdmFsdWU6IHJlcXVpcmVkIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoa2V5OiBzdHJpbmcsIGNsZWFyVmFsdWUgPSB0cnVlKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuaGlkZShjbGVhclZhbHVlKTtcbiAgICAgIHRoaXMuZGlzYWJsZShrZXksIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnaGlkZGVuJywgdmFsdWU6IHRydWUgfSk7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9sO1xuICB9XG5cbiAgc2hvdyhrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnNob3coKTtcbiAgICAgIHRoaXMuZW5hYmxlKGtleSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdoaWRkZW4nLCB2YWx1ZTogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgaGlkZUZpZWxkU2V0SGVhZGVyKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgZmllbGRTZXQgPSB0aGlzLmdldEZpZWxkU2V0KGtleSk7XG4gICAgaWYgKGZpZWxkU2V0KSB7XG4gICAgICBmaWVsZFNldC5oaWRkZW4gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHNob3dGaWVsZFNldEhlYWRlcihrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGZpZWxkU2V0ID0gdGhpcy5nZXRGaWVsZFNldChrZXkpO1xuICAgIGlmIChmaWVsZFNldCkge1xuICAgICAgZmllbGRTZXQuaGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZGlzYWJsZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5kaXNhYmxlKG9wdGlvbnMpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdyZWFkT25seScsIHZhbHVlOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGVuYWJsZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5lbmFibGUob3B0aW9ucyk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3JlYWRPbmx5JywgdmFsdWU6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtBc0ludmFsaWQoa2V5OiBzdHJpbmcsIHZhbGlkYXRpb25NZXNzYWdlPzogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICAgIGNvbnRyb2wubWFya0FzSW52YWxpZCh2YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbWFya0FzRGlydHkoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eShvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBtYXJrQXNQZW5kaW5nKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzUGVuZGluZyhvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBtYXJrQXNQcmlzdGluZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLm1hcmtBc1ByaXN0aW5lKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtBc1RvdWNoZWQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtBc1VudG91Y2hlZChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLm1hcmtBc1VudG91Y2hlZChvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgICBlbWl0RXZlbnQ/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheVRvYXN0KHRvYXN0Q29uZmlnOiBUb2FzdE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50b2FzdGVyKSB7XG4gICAgICB0aGlzLnRvYXN0ZXIuYWxlcnQodG9hc3RDb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlUaXAoa2V5OiBzdHJpbmcsIHRpcDogc3RyaW5nLCBpY29uPzogc3RyaW5nLCBhbGxvd0Rpc21pc3M/OiBib29sZWFuLCBzYW5pdGl6ZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC50aXBXZWxsID0ge1xuICAgICAgICB0aXAsXG4gICAgICAgIGljb24sXG4gICAgICAgIGJ1dHRvbjogYWxsb3dEaXNtaXNzLFxuICAgICAgICBzYW5pdGl6ZTogc2FuaXRpemUgIT09IGZhbHNlLCAvLyBkZWZhdWx0cyB0byB0cnVlIHdoZW4gdW5kZWZpbmVkXG4gICAgICB9O1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICd0aXBXZWxsJywgdmFsdWU6IHRpcCB9KTtcbiAgICB9XG4gIH1cblxuICBzZXRUb29sdGlwKGtleTogc3RyaW5nLCB0b29sdGlwOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC50b29sdGlwID0gdG9vbHRpcDtcbiAgICAgIGlmICh0b29sdGlwLmxlbmd0aCA+PSA0MCAmJiB0b29sdGlwLmxlbmd0aCA8PSA0MDApIHtcbiAgICAgICAgY29udHJvbC50b29sdGlwU2l6ZSA9ICdsYXJnZSc7XG4gICAgICAgIGNvbnRyb2wudG9vbHRpcFByZWxpbmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0b29sdGlwLmxlbmd0aCA+IDQwMCkge1xuICAgICAgICBjb250cm9sLnRvb2x0aXBTaXplID0gJ2V4dHJhLWxhcmdlJztcbiAgICAgIH1cbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAndG9vbHRpcCcsIHZhbHVlOiB0b29sdGlwIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbmZpcm1DaGFuZ2VzKGtleTogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgaGlzdG9yeSA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAndmFsdWVIaXN0b3J5Jyk7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSBoaXN0b3J5W2hpc3RvcnkubGVuZ3RoIC0gMl07XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlKGtleSk7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmdldFByb3BlcnR5KGtleSwgJ2xhYmVsJyk7XG4gICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgYW55KS5ibHVyKCk7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQ29udHJvbENvbmZpcm1Nb2RhbCwgeyBvbGRWYWx1ZSwgbmV3VmFsdWUsIGxhYmVsLCBtZXNzYWdlLCBrZXkgfSkub25DbG9zZWQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKGtleSwgb2xkVmFsdWUsIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvbXB0VXNlcihrZXk6IHN0cmluZywgY2hhbmdlczogc3RyaW5nW10pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBzaG93WWVzID0gdHJ1ZTtcbiAgICAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBhbnkpLmJsdXIoKTtcbiAgICByZXR1cm4gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihDb250cm9sUHJvbXB0TW9kYWwsIHsgY2hhbmdlcywga2V5IH0pLm9uQ2xvc2VkO1xuICB9XG5cbiAgc2V0UHJvcGVydHkoa2V5OiBzdHJpbmcsIHByb3A6IHN0cmluZywgdmFsdWUpOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbFtwcm9wXSA9IHZhbHVlO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3AsIHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFByb3BlcnR5KGtleTogc3RyaW5nLCBwcm9wOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgcmV0dXJuIGNvbnRyb2xbcHJvcF07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaXNWYWx1ZUVtcHR5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKGtleSk7XG4gICAgcmV0dXJuIEhlbHBlcnMuaXNFbXB0eSh2YWx1ZSk7XG4gIH1cblxuICBpc1ZhbHVlQmxhbmsoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoa2V5KTtcbiAgICByZXR1cm4gSGVscGVycy5pc0JsYW5rKHZhbHVlKTtcbiAgfVxuXG4gIGhhc0ZpZWxkKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5mb3JtLmNvbnRyb2xzW2tleV07XG4gIH1cblxuICBhZGRTdGF0aWNPcHRpb24oa2V5OiBzdHJpbmcsIG5ld09wdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBsZXQgb3B0aW9uVG9BZGQgPSBuZXdPcHRpb247XG4gICAgbGV0IGlzVW5pcXVlID0gdHJ1ZTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBsZXQgY3VycmVudE9wdGlvbnMgPSB0aGlzLmdldFByb3BlcnR5KGtleSwgJ29wdGlvbnMnKTtcbiAgICAgIGlmICghY3VycmVudE9wdGlvbnMgfHwgIWN1cnJlbnRPcHRpb25zLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldFByb3BlcnR5KGtleSwgJ2NvbmZpZycpO1xuICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgY3VycmVudE9wdGlvbnMgPSBjb25maWcub3B0aW9ucztcbiAgICAgICAgICBpZiAoY3VycmVudE9wdGlvbnMgJiYgQXJyYXkuaXNBcnJheShjdXJyZW50T3B0aW9ucykpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50T3B0aW9uc1swXS52YWx1ZSAmJiAhb3B0aW9uVG9BZGQudmFsdWUpIHtcbiAgICAgICAgICAgICAgb3B0aW9uVG9BZGQgPSB7IHZhbHVlOiBuZXdPcHRpb24sIGxhYmVsOiBuZXdPcHRpb24gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbmZpZy5vcHRpb25zID0gWy4uLmN1cnJlbnRPcHRpb25zLCBvcHRpb25Ub0FkZF07XG4gICAgICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ2NvbmZpZycsIGNvbmZpZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY3VycmVudE9wdGlvbnNbMF0udmFsdWUgJiYgIW9wdGlvblRvQWRkLnZhbHVlKSB7XG4gICAgICAgICAgb3B0aW9uVG9BZGQgPSB7IHZhbHVlOiBuZXdPcHRpb24sIGxhYmVsOiBuZXdPcHRpb24gfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbnN1cmUgZHVwbGljYXRlIHZhbHVlcyBhcmUgbm90IGFkZGVkXG4gICAgICAgIGN1cnJlbnRPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgIGlmICgob3B0aW9uLnZhbHVlICYmIG9wdGlvbi52YWx1ZSA9PT0gb3B0aW9uVG9BZGQudmFsdWUpIHx8IG9wdGlvbiA9PT0gb3B0aW9uVG9BZGQpIHtcbiAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzVW5pcXVlKSB7XG4gICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICdvcHRpb25zJywgWy4uLmN1cnJlbnRPcHRpb25zLCBvcHRpb25Ub0FkZF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNVbmlxdWUpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdvcHRpb25zJywgdmFsdWU6IFsuLi5jdXJyZW50T3B0aW9ucywgb3B0aW9uVG9BZGRdIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVN0YXRpY09wdGlvbihrZXk6IHN0cmluZywgb3B0aW9uVG9SZW1vdmU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBsZXQgY3VycmVudE9wdGlvbnMgPSB0aGlzLmdldFByb3BlcnR5KGtleSwgJ29wdGlvbnMnKTtcbiAgICAgIGlmICghY3VycmVudE9wdGlvbnMgfHwgIWN1cnJlbnRPcHRpb25zLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldFByb3BlcnR5KGtleSwgJ2NvbmZpZycpO1xuICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgY3VycmVudE9wdGlvbnMgPSBjb25maWcub3B0aW9ucztcbiAgICAgICAgICBpZiAoY3VycmVudE9wdGlvbnMgJiYgQXJyYXkuaXNBcnJheShjdXJyZW50T3B0aW9ucykpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICAgICAgY3VycmVudE9wdGlvbnMuZm9yRWFjaCgob3B0LCBpKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChvcHQudmFsdWUgfHwgb3B0LmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdC52YWx1ZSA9PT0gb3B0aW9uVG9SZW1vdmUgfHwgb3B0LmxhYmVsID09PSBvcHRpb25Ub1JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0ID09PSBvcHRpb25Ub1JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRPcHRpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25maWcub3B0aW9ucyA9IFsuLi5jdXJyZW50T3B0aW9uc107XG4gICAgICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ2NvbmZpZycsIGNvbmZpZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgY3VycmVudE9wdGlvbnMuZm9yRWFjaCgob3B0LCBpKSA9PiB7XG4gICAgICAgICAgaWYgKG9wdC52YWx1ZSB8fCBvcHQubGFiZWwpIHtcbiAgICAgICAgICAgIGlmIChvcHQudmFsdWUgPT09IG9wdGlvblRvUmVtb3ZlIHx8IG9wdC5sYWJlbCA9PT0gb3B0aW9uVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAob3B0ID09PSBvcHRpb25Ub1JlbW92ZSkge1xuICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGN1cnJlbnRPcHRpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICdvcHRpb25zJywgWy4uLmN1cnJlbnRPcHRpb25zXSk7XG4gICAgICB9XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ29wdGlvbnMnLCB2YWx1ZTogY29udHJvbC5vcHRpb25zIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1vZGlmeVBpY2tlckNvbmZpZyhcbiAgICBrZXk6IHN0cmluZyxcbiAgICBjb25maWc6IHtcbiAgICAgIGZvcm1hdD86IHN0cmluZztcbiAgICAgIG9wdGlvbnNVcmw/OiBzdHJpbmc7XG4gICAgICBvcHRpb25zVXJsQnVpbGRlcj86IEZ1bmN0aW9uO1xuICAgICAgb3B0aW9uc1Byb21pc2U/O1xuICAgICAgb3B0aW9ucz86IGFueVtdO1xuICAgICAgcmVzdWx0c1RlbXBsYXRlVHlwZT86IFJlc3VsdHNUZW1wbGF0ZVR5cGU7XG4gICAgfSxcbiAgICBtYXBwZXI/LFxuICApOiB2b2lkIHtcbiAgICAvLyBjYWxsIGFub3RoZXIgbWV0aG9kIHRvIGF2b2lkIGEgYnJlYWtpbmcgY2hhbmdlIGJ1dCBzdGlsbCBlbmFibGUgc3RyaWN0ZXIgdHlwZXNcbiAgICB0aGlzLm11dGF0ZVBpY2tlckNvbmZpZyhrZXksIGNvbmZpZyBhcyBNb2RpZnlQaWNrZXJDb25maWdBcmdzLCBtYXBwZXIpO1xuICB9XG5cbiAgbXV0YXRlUGlja2VyQ29uZmlnKGtleTogc3RyaW5nLCBhcmdzOiBNb2RpZnlQaWNrZXJDb25maWdBcmdzLCBtYXBwZXI/OiAoaXRlbTogdW5rbm93bikgPT4gdW5rbm93bik6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb25zdCB7IG1pblNlYXJjaExlbmd0aCwgZW5hYmxlSW5maW5pdGVTY3JvbGwsIGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IsIGZvcm1hdCwgZ2V0TGFiZWxzLCBlbXB0eVBpY2tlck1lc3NhZ2UgfSA9IGNvbnRyb2wuY29uZmlnO1xuICAgICAgY29uc3Qgb3B0aW9uc0NvbmZpZyA9IHRoaXMuZ2V0T3B0aW9uc0NvbmZpZyhhcmdzLCBtYXBwZXIsIGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IsIGZvcm1hdCk7XG5cbiAgICAgIGNvbnN0IG5ld0NvbmZpZzogTm92b0NvbnRyb2xDb25maWdbJ2NvbmZpZyddID0ge1xuICAgICAgICAuLi4oZW1wdHlQaWNrZXJNZXNzYWdlICYmIHsgZW1wdHlQaWNrZXJNZXNzYWdlIH0pLFxuICAgICAgICAuLi4oTnVtYmVyLmlzSW50ZWdlcihtaW5TZWFyY2hMZW5ndGgpICYmIHsgbWluU2VhcmNoTGVuZ3RoIH0pLFxuICAgICAgICAuLi4oZW5hYmxlSW5maW5pdGVTY3JvbGwgJiYgeyBlbmFibGVJbmZpbml0ZVNjcm9sbCB9KSxcbiAgICAgICAgLi4uKGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IgJiYgeyBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yIH0pLFxuICAgICAgICAuLi4oZ2V0TGFiZWxzICYmIHsgZ2V0TGFiZWxzIH0pLFxuICAgICAgICAuLi4ob3B0aW9uc0NvbmZpZyAmJiBvcHRpb25zQ29uZmlnKSxcbiAgICAgICAgcmVzdWx0c1RlbXBsYXRlOlxuICAgICAgICAgIGNvbnRyb2wuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSB8fCAoJ3Jlc3VsdHNUZW1wbGF0ZVR5cGUnIGluIGFyZ3MgJiYgdGhpcy5nZXRBcHByb3ByaWF0ZVJlc3VsdHNUZW1wbGF0ZShhcmdzLnJlc3VsdHNUZW1wbGF0ZVR5cGUpKSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJywgbmV3Q29uZmlnKTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAncGlja2VyQ29uZmlnJywgdmFsdWU6IGFyZ3MgfSk7XG4gICAgfVxuICB9XG5cbiAgYWRkUHJvcGVydGllc1RvUGlja2VyQ29uZmlnKGtleTogc3RyaW5nLCBwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoIWNvbnRyb2wgfHwgY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgLi4uY29udHJvbC5jb25maWcsXG4gICAgICAuLi5wcm9wZXJ0aWVzLFxuICAgIH07XG5cbiAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ2NvbmZpZycsIGNvbmZpZyk7XG4gICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdwaWNrZXJDb25maWcnLCB2YWx1ZTogcHJvcGVydGllcyB9KTtcbiAgfVxuICBnZXRPcHRpb25zQ29uZmlnID0gKFxuICAgIGFyZ3M6IE1vZGlmeVBpY2tlckNvbmZpZ0FyZ3MsXG4gICAgbWFwcGVyPzogKGl0ZW06IHVua25vd24pID0+IHVua25vd24sXG4gICAgZmlsdGVyZWRPcHRpb25zQ3JlYXRvcj86ICh3aGVyZTogc3RyaW5nKSA9PiAocXVlcnk6IHN0cmluZykgPT4gUHJvbWlzZTx1bmtub3duW10+LFxuICAgIHBpY2tlckNvbmZpZ0Zvcm1hdD86IHN0cmluZyxcbiAgKTogdW5kZWZpbmVkIHwgeyBvcHRpb25zOiB1bmtub3duW10gfSB8IHsgb3B0aW9uczogT3B0aW9uc0Z1bmN0aW9uOyBmb3JtYXQ/OiBzdHJpbmcgfSA9PiB7XG4gICAgaWYgKGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IgfHwgJ29wdGlvbnNVcmwnIGluIGFyZ3MgfHwgJ29wdGlvbnNVcmxCdWlsZGVyJyBpbiBhcmdzIHx8ICdvcHRpb25zUHJvbWlzZScgaW4gYXJncykge1xuICAgICAgY29uc3QgZm9ybWF0ID0gKCdmb3JtYXQnIGluIGFyZ3MgJiYgYXJncy5mb3JtYXQpIHx8IHBpY2tlckNvbmZpZ0Zvcm1hdDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IHRoaXMuY3JlYXRlT3B0aW9uc0Z1bmN0aW9uKGFyZ3MsIG1hcHBlciwgZmlsdGVyZWRPcHRpb25zQ3JlYXRvciksXG4gICAgICAgIC4uLignZW1wdHlQaWNrZXJNZXNzYWdlJyBpbiBhcmdzICYmIHsgZW1wdHlQaWNrZXJNZXNzYWdlOiBhcmdzLmVtcHR5UGlja2VyTWVzc2FnZSB9KSxcbiAgICAgICAgLi4uKGZvcm1hdCAmJiB7IGZvcm1hdCB9KSxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICgnb3B0aW9ucycgaW4gYXJncyAmJiBBcnJheS5pc0FycmF5KGFyZ3Mub3B0aW9ucykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IFsuLi5hcmdzLm9wdGlvbnNdLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBnZXRBcHByb3ByaWF0ZVJlc3VsdHNUZW1wbGF0ZShyZXN1bHRzVGVtcGxhdGVUeXBlOiBSZXN1bHRzVGVtcGxhdGVUeXBlKSB7XG4gICAgc3dpdGNoIChyZXN1bHRzVGVtcGxhdGVUeXBlKSB7XG4gICAgICBjYXNlICdlbnRpdHktcGlja2VyJzpcbiAgICAgICAgcmV0dXJuIEVudGl0eVBpY2tlclJlc3VsdHM7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZU9wdGlvbnNGdW5jdGlvbiA9IChcbiAgICBjb25maWc6IE1vZGlmeVBpY2tlckNvbmZpZ0FyZ3MsXG4gICAgbWFwcGVyPzogKGl0ZW06IHVua25vd24pID0+IHVua25vd24sXG4gICAgZmlsdGVyZWRPcHRpb25zQ3JlYXRvcj86ICh3aGVyZT86IHN0cmluZykgPT4gKHF1ZXJ5OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIpID0+IFByb21pc2U8dW5rbm93bltdPixcbiAgKTogKChxdWVyeTogc3RyaW5nKSA9PiBQcm9taXNlPHVua25vd25bXT4pID0+IChxdWVyeTogc3RyaW5nLCBwYWdlPzogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCdvcHRpb25zUHJvbWlzZScgaW4gY29uZmlnICYmIGNvbmZpZy5vcHRpb25zUHJvbWlzZSkge1xuICAgICAgcmV0dXJuIGNvbmZpZy5vcHRpb25zUHJvbWlzZShxdWVyeSwgbmV3IEN1c3RvbUh0dHBJbXBsKHRoaXMuaHR0cCksIHBhZ2UpO1xuICAgIH0gZWxzZSBpZiAoKCdvcHRpb25zVXJsQnVpbGRlcicgaW4gY29uZmlnICYmIGNvbmZpZy5vcHRpb25zVXJsQnVpbGRlcikgfHwgKCdvcHRpb25zVXJsJyBpbiBjb25maWcgJiYgY29uZmlnLm9wdGlvbnNVcmwpKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1cmwgPSAnb3B0aW9uc1VybEJ1aWxkZXInIGluIGNvbmZpZyA/IGNvbmZpZy5vcHRpb25zVXJsQnVpbGRlcihxdWVyeSkgOiBgJHtjb25maWcub3B0aW9uc1VybH0/ZmlsdGVyPSR7cXVlcnkgfHwgJyd9YDtcbiAgICAgICAgdGhpcy5odHRwXG4gICAgICAgICAgLmdldCh1cmwpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtYXAoKHJlc3VsdHM6IHVua25vd25bXSkgPT4ge1xuICAgICAgICAgICAgICBpZiAobWFwcGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMubWFwKG1hcHBlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZShyZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yKSB7XG4gICAgICBpZiAoJ3doZXJlJyBpbiBjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IoY29uZmlnLndoZXJlKShxdWVyeSwgcGFnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmlsdGVyZWRPcHRpb25zQ3JlYXRvcigpKHF1ZXJ5LCBwYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc2V0TG9hZGluZyhrZXk6IHN0cmluZywgbG9hZGluZzogYm9vbGVhbikge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBpZiAobG9hZGluZykge1xuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNba2V5XS5maWVsZEludGVyYWN0aW9ubG9hZGluZyA9IHRydWU7XG4gICAgICAgIGNvbnRyb2wuc2V0RXJyb3JzKHsgbG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgICAgLy8gSGlzdG9yeVxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hc3luY0Jsb2NrVGltZW91dCk7XG4gICAgICAgIHRoaXMuYXN5bmNCbG9ja1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldExvYWRpbmcoa2V5LCBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5VGlwKGtleSwgdGhpcy5sYWJlbHMuYXN5bmNGYWlsdXJlLCAnaW5mbycsIGZhbHNlKTtcbiAgICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ19kaXNwbGF5ZWRBc3luY0ZhaWx1cmUnLCB0cnVlKTtcbiAgICAgICAgfSwgMTAwMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW2tleV0uZmllbGRJbnRlcmFjdGlvbmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYXN5bmNCbG9ja1RpbWVvdXQpO1xuICAgICAgICBjb250cm9sLnNldEVycm9ycyh7IGxvYWRpbmc6IG51bGwgfSk7XG4gICAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgIGlmICh0aGlzLmdldFByb3BlcnR5KGtleSwgJ19kaXNwbGF5ZWRBc3luY0ZhaWx1cmUnKSkge1xuICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAndGlwV2VsbCcsIG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ2xvYWRpbmcnLCB2YWx1ZTogbG9hZGluZyB9KTtcbiAgICB9XG4gIH1cblxuICBhZGRDb250cm9sKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG1ldGFGb3JOZXdGaWVsZDogeyBrZXk/OiBzdHJpbmc7IHR5cGU/OiBzdHJpbmc7IG5hbWU/OiBzdHJpbmc7IGxhYmVsPzogc3RyaW5nIH0sXG4gICAgcG9zaXRpb246IHN0cmluZyA9IEZpZWxkSW50ZXJhY3Rpb25BcGkuRklFTERfUE9TSVRJT05TLkFCT1ZFX0ZJRUxELFxuICAgIGluaXRpYWxWYWx1ZT8sXG4gICk6IHZvaWQge1xuICAgIGlmICghbWV0YUZvck5ld0ZpZWxkLmtleSAmJiAhbWV0YUZvck5ld0ZpZWxkLm5hbWUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tGaWVsZEludGVyYWN0aW9uQVBJXSAtIG1pc3NpbmcgXCJrZXlcIiBpbiBtZXRhIGZvciBuZXcgZmllbGQnKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCFtZXRhRm9yTmV3RmllbGQua2V5KSB7XG4gICAgICAvLyBJZiBrZXkgaXMgbm90IGV4cGxpY2l0bHkgZGVjbGFyZWQsIHVzZSBuYW1lIGFzIGtleVxuICAgICAgbWV0YUZvck5ld0ZpZWxkLmtleSA9IG1ldGFGb3JOZXdGaWVsZC5uYW1lO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbbWV0YUZvck5ld0ZpZWxkLmtleV0pIHtcbiAgICAgIC8vIEZpZWxkIGlzIGFscmVhZHkgb24gdGhlIGZvcm1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmZvcm0uY29udHJvbHNba2V5XTtcbiAgICBsZXQgZmllbGRzZXRJbmRleDogbnVtYmVyO1xuICAgIGxldCBjb250cm9sSW5kZXg6IG51bWJlcjtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgZmllbGRzZXRJbmRleCA9IC0xO1xuICAgICAgY29udHJvbEluZGV4ID0gLTE7XG5cbiAgICAgIHRoaXMuZm9ybS5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQsIGZpKSA9PiB7XG4gICAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGZpZWxkc2V0Q29udHJvbCwgY2kpID0+IHtcbiAgICAgICAgICBpZiAoZmllbGRzZXRDb250cm9sLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICBmaWVsZHNldEluZGV4ID0gZmk7XG4gICAgICAgICAgICBjb250cm9sSW5kZXggPSBjaTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIENoYW5nZSB0aGUgcG9zaXRpb24gb2YgdGhlIG5ld2x5IGFkZGVkIGZpZWxkXG4gICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgRmllbGRJbnRlcmFjdGlvbkFwaS5GSUVMRF9QT1NJVElPTlMuQUJPVkVfRklFTEQ6XG4gICAgICAgICAgLy8gQWRkaW5nIGZpZWxkIGFib3ZlIGFjdGl2ZSBmaWVsZFxuICAgICAgICAgIC8vIGluZGV4IGNhbiBzdGF5IHRoZSBzYW1lXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRmllbGRJbnRlcmFjdGlvbkFwaS5GSUVMRF9QT1NJVElPTlMuQkVMT1dfRklFTEQ6XG4gICAgICAgICAgLy8gQWRkaW5nIGZpZWxkIGJlbG93IGFjdGl2ZSBmaWVsZFxuICAgICAgICAgIGNvbnRyb2xJbmRleCArPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEZpZWxkSW50ZXJhY3Rpb25BcGkuRklFTERfUE9TSVRJT05TLlRPUF9PRl9GT1JNOlxuICAgICAgICAgIC8vIEFkZGluZyBmaWVsZCB0byB0aGUgdG9wIG9mIHRoZSBmb3JtXG4gICAgICAgICAgY29udHJvbEluZGV4ID0gMDtcbiAgICAgICAgICBmaWVsZHNldEluZGV4ID0gMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBGaWVsZEludGVyYWN0aW9uQXBpLkZJRUxEX1BPU0lUSU9OUy5CT1RUT01fT0ZfRk9STTpcbiAgICAgICAgICAvLyBBZGRpbmcgZmllbGQgdG8gdGhlIGJvdHRvbSBvZiB0aGUgZm9ybVxuICAgICAgICAgIGZpZWxkc2V0SW5kZXggPSB0aGlzLmZvcm0uZmllbGRzZXRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgY29udHJvbEluZGV4ID0gdGhpcy5mb3JtLmZpZWxkc2V0c1tmaWVsZHNldEluZGV4XS5jb250cm9scy5sZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWVsZHNldEluZGV4ICE9PSAtMSAmJiBjb250cm9sSW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IG5vdm9Db250cm9sID0gdGhpcy5mb3JtVXRpbHMuZ2V0Q29udHJvbEZvckZpZWxkKG1ldGFGb3JOZXdGaWVsZCwgdGhpcy5odHRwLCB7fSk7XG4gICAgICAgIG5vdm9Db250cm9sLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICBjb25zdCBmb3JtQ29udHJvbCA9IG5ldyBOb3ZvRm9ybUNvbnRyb2woaW5pdGlhbFZhbHVlLCBub3ZvQ29udHJvbCk7XG4gICAgICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKG5vdm9Db250cm9sLmtleSwgZm9ybUNvbnRyb2wpO1xuICAgICAgICB0aGlzLmZvcm0uZmllbGRzZXRzW2ZpZWxkc2V0SW5kZXhdLmNvbnRyb2xzLnNwbGljZShjb250cm9sSW5kZXgsIDAsIG5vdm9Db250cm9sKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdhZGRDb250cm9sJywgdmFsdWU6IGZvcm1Db250cm9sIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUNvbnRyb2woa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1trZXldKSB7XG4gICAgICAvLyBGaWVsZCBpcyBub3Qgb24gdGhlIGZvcm1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgbGV0IGZpZWxkc2V0SW5kZXggPSAtMTtcbiAgICAgIGxldCBjb250cm9sSW5kZXggPSAtMTtcblxuICAgICAgdGhpcy5mb3JtLmZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCwgZmkpID0+IHtcbiAgICAgICAgZmllbGRzZXQuY29udHJvbHMuZm9yRWFjaCgoZmllbGRzZXRDb250cm9sLCBjaSkgPT4ge1xuICAgICAgICAgIGlmIChmaWVsZHNldENvbnRyb2wua2V5ID09PSBrZXkpIHtcbiAgICAgICAgICAgIGZpZWxkc2V0SW5kZXggPSBmaTtcbiAgICAgICAgICAgIGNvbnRyb2xJbmRleCA9IGNpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpZWxkc2V0SW5kZXggIT09IC0xICYmIGNvbnRyb2xJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5mb3JtLnJlbW92ZUNvbnRyb2woa2V5KTtcbiAgICAgICAgdGhpcy5mb3JtLmZpZWxkc2V0c1tmaWVsZHNldEluZGV4XS5jb250cm9scy5zcGxpY2UoY29udHJvbEluZGV4LCAxKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdyZW1vdmVDb250cm9sJywgdmFsdWU6IGtleSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZWJvdW5jZShmdW5jOiAoKSA9PiB2b2lkLCB3YWl0ID0gNTApIHtcbiAgICBsZXQgaDtcbiAgICBjbGVhclRpbWVvdXQoaCk7XG4gICAgaCA9IHNldFRpbWVvdXQoKCkgPT4gZnVuYygpLCB3YWl0KTtcbiAgfVxuXG4gIHByaXZhdGUgdHJpZ2dlckV2ZW50KGV2ZW50OiBJRmllbGRJbnRlcmFjdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZm9ybSAmJiB0aGlzLmZvcm0uZmllbGRJbnRlcmFjdGlvbkV2ZW50cykge1xuICAgICAgdGhpcy5mb3JtLmZpZWxkSW50ZXJhY3Rpb25FdmVudHMuZW1pdChldmVudCk7XG4gICAgfVxuICB9XG59XG4iXX0=