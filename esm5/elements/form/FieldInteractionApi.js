import { __assign, __read, __spread } from "tslib";
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
import * as i0 from "@angular/core";
import * as i1 from "../toast/ToastService";
import * as i2 from "../modal/ModalService";
import * as i3 from "../../utils/form-utils/FormUtils";
import * as i4 from "@angular/common/http";
import * as i5 from "../../services/novo-label-service";
var CustomHttpImpl = /** @class */ (function () {
    function CustomHttpImpl(http) {
        this.http = http;
        this.mapFn = function (x) { return x; };
    }
    CustomHttpImpl.prototype.get = function (url, options) {
        this.url = url;
        this.options = options;
        return this;
    };
    CustomHttpImpl.prototype.map = function (mapFn) {
        this.mapFn = mapFn;
        return this;
    };
    CustomHttpImpl.prototype.subscribe = function (resolve, reject) {
        return this.http
            .get(this.url, this.options)
            .pipe(map(this.mapFn))
            .subscribe(resolve, reject);
    };
    return CustomHttpImpl;
}());
var FieldInteractionApi = /** @class */ (function () {
    function FieldInteractionApi(toaster, modalService, formUtils, http, labels) {
        var _this = this;
        this.toaster = toaster;
        this.modalService = modalService;
        this.formUtils = formUtils;
        this.http = http;
        this.labels = labels;
        this.getOptionsConfig = function (args, mapper, filteredOptionsCreator, pickerConfigFormat) {
            if (filteredOptionsCreator || 'optionsUrl' in args || 'optionsUrlBuilder' in args || 'optionsPromise' in args) {
                var format = ('format' in args && args.format) || pickerConfigFormat;
                return __assign(__assign({ options: _this.createOptionsFunction(args, mapper, filteredOptionsCreator) }, ('emptyPickerMessage' in args && { emptyPickerMessage: args.emptyPickerMessage })), (format && { format: format }));
            }
            else if ('options' in args && Array.isArray(args.options)) {
                return {
                    options: __spread(args.options),
                };
            }
            else {
                return undefined;
            }
        };
        this.createOptionsFunction = function (config, mapper, filteredOptionsCreator) { return function (query, page) {
            if ('optionsPromise' in config && config.optionsPromise) {
                return config.optionsPromise(query, new CustomHttpImpl(_this.http), page);
            }
            else if (('optionsUrlBuilder' in config && config.optionsUrlBuilder) || ('optionsUrl' in config && config.optionsUrl)) {
                return new Promise(function (resolve, reject) {
                    var url = 'optionsUrlBuilder' in config ? config.optionsUrlBuilder(query) : config.optionsUrl + "?filter=" + (query || '');
                    _this.http
                        .get(url)
                        .pipe(map(function (results) {
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
        }; };
    }
    Object.defineProperty(FieldInteractionApi.prototype, "associations", {
        get: function () {
            return this.form.hasOwnProperty('associations') ? this.form.associations : {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldInteractionApi.prototype, "currentEntity", {
        get: function () {
            return this.form.hasOwnProperty('currentEntity') ? this.form.currentEntity : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldInteractionApi.prototype, "currentEntityId", {
        get: function () {
            return this.form.hasOwnProperty('currentEntityId') ? this.form.currentEntityId : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldInteractionApi.prototype, "isEdit", {
        get: function () {
            return this.form.hasOwnProperty('edit') ? this.form.edit : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldInteractionApi.prototype, "isAdd", {
        get: function () {
            return this.form.hasOwnProperty('edit') ? !this.form.edit : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldInteractionApi.prototype, "globals", {
        get: function () {
            return this._globals;
        },
        set: function (globals) {
            this._globals = globals;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldInteractionApi.prototype, "currentKey", {
        get: function () {
            return this._currentKey;
        },
        set: function (key) {
            this._currentKey = key;
        },
        enumerable: true,
        configurable: true
    });
    FieldInteractionApi.prototype.isActiveControlValid = function () {
        return !!this.getValue(this.currentKey);
    };
    FieldInteractionApi.prototype.getActiveControl = function () {
        return this.getControl(this.currentKey);
    };
    FieldInteractionApi.prototype.getActiveKey = function () {
        return this.currentKey;
    };
    FieldInteractionApi.prototype.getActiveValue = function () {
        return this.getValue(this.currentKey);
    };
    FieldInteractionApi.prototype.getActiveInitialValue = function () {
        return this.getInitialValue(this.currentKey);
    };
    FieldInteractionApi.prototype.getFieldSet = function (key) {
        if (!key) {
            console.error('[FieldInteractionAPI] - invalid or missing "key"'); // tslint:disable-line
            return null;
        }
        var fieldSet = this.form.fieldsets.find(function (fs) { return fs.key && fs.key.toLowerCase() === key.toLowerCase(); });
        if (!fieldSet) {
            console.error('[FieldInteractionAPI] - could not find a fieldset in the form by the key --', key); // tslint:disable-line
            return null;
        }
        return fieldSet;
    };
    FieldInteractionApi.prototype.getControl = function (key) {
        if (!key) {
            console.error('[FieldInteractionAPI] - invalid or missing "key"'); // tslint:disable-line
            return null;
        }
        var control = this.form.controls[key];
        if (!control) {
            console.error('[FieldInteractionAPI] - could not find a control in the form by the key --', key); // tslint:disable-line
            return null;
        }
        return control;
    };
    FieldInteractionApi.prototype.getValue = function (key) {
        var control = this.getControl(key);
        if (control) {
            return control.value;
        }
        return null;
    };
    FieldInteractionApi.prototype.getRawValue = function (key) {
        var control = this.getControl(key);
        if (control) {
            return control.rawValue;
        }
        return null;
    };
    FieldInteractionApi.prototype.getInitialValue = function (key) {
        var control = this.getControl(key);
        if (control) {
            return control.initialValue;
        }
        return null;
    };
    FieldInteractionApi.prototype.setValue = function (key, value, options) {
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.setValue(value, options);
            this.triggerEvent({ controlKey: key, prop: 'value', value: value });
        }
    };
    FieldInteractionApi.prototype.patchValue = function (key, value, options) {
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.setValue(value, options);
            this.triggerEvent({ controlKey: key, prop: 'value', value: value });
        }
    };
    FieldInteractionApi.prototype.setReadOnly = function (key, isReadOnly) {
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.setReadOnly(isReadOnly);
            this.triggerEvent({ controlKey: key, prop: 'readOnly', value: isReadOnly });
        }
    };
    FieldInteractionApi.prototype.setRequired = function (key, required) {
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.setRequired(required);
            this.triggerEvent({ controlKey: key, prop: 'required', value: required });
        }
    };
    FieldInteractionApi.prototype.hide = function (key, clearValue) {
        if (clearValue === void 0) { clearValue = true; }
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.hide(clearValue);
            this.disable(key, { emitEvent: false });
            this.triggerEvent({ controlKey: key, prop: 'hidden', value: true });
        }
        return control;
    };
    FieldInteractionApi.prototype.show = function (key) {
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.show();
            this.enable(key, { emitEvent: false });
            this.triggerEvent({ controlKey: key, prop: 'hidden', value: false });
        }
    };
    FieldInteractionApi.prototype.hideFieldSetHeader = function (key) {
        var fieldSet = this.getFieldSet(key);
        if (fieldSet) {
            fieldSet.hidden = true;
        }
    };
    FieldInteractionApi.prototype.showFieldSetHeader = function (key) {
        var fieldSet = this.getFieldSet(key);
        if (fieldSet) {
            fieldSet.hidden = false;
        }
    };
    FieldInteractionApi.prototype.disable = function (key, options) {
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.disable(options);
            this.triggerEvent({ controlKey: key, prop: 'readOnly', value: true });
        }
    };
    FieldInteractionApi.prototype.enable = function (key, options) {
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.enable(options);
            this.triggerEvent({ controlKey: key, prop: 'readOnly', value: false });
        }
    };
    FieldInteractionApi.prototype.markAsInvalid = function (key, validationMessage) {
        var control = this.getControl(key);
        if (control) {
            if (control && !control.restrictFieldInteractions) {
                control.markAsInvalid(validationMessage);
            }
        }
    };
    FieldInteractionApi.prototype.markAsDirty = function (key, options) {
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.markAsDirty(options);
        }
    };
    FieldInteractionApi.prototype.markAsPending = function (key, options) {
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.markAsPending(options);
        }
    };
    FieldInteractionApi.prototype.markAsPristine = function (key, options) {
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.markAsPristine(options);
        }
    };
    FieldInteractionApi.prototype.markAsTouched = function (key, options) {
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.markAsTouched(options);
        }
    };
    FieldInteractionApi.prototype.markAsUntouched = function (key, options) {
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.markAsUntouched(options);
        }
    };
    FieldInteractionApi.prototype.updateValueAndValidity = function (key, options) {
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.updateValueAndValidity(options);
        }
    };
    FieldInteractionApi.prototype.displayToast = function (toastConfig) {
        if (this.toaster) {
            this.toaster.alert(toastConfig);
        }
    };
    FieldInteractionApi.prototype.displayTip = function (key, tip, icon, allowDismiss, sanitize) {
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.tipWell = {
                tip: tip,
                icon: icon,
                button: allowDismiss,
                sanitize: sanitize !== false,
            };
            this.triggerEvent({ controlKey: key, prop: 'tipWell', value: tip });
        }
    };
    FieldInteractionApi.prototype.setTooltip = function (key, tooltip) {
        var control = this.getControl(key);
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
    };
    FieldInteractionApi.prototype.confirmChanges = function (key, message) {
        var _this = this;
        var history = this.getProperty(key, 'valueHistory');
        var oldValue = history[history.length - 2];
        var newValue = this.getValue(key);
        var label = this.getProperty(key, 'label');
        document.activeElement.blur();
        return this.modalService.open(ControlConfirmModal, { oldValue: oldValue, newValue: newValue, label: label, message: message, key: key }).onClosed.then(function (result) {
            if (!result) {
                _this.setValue(key, oldValue, { emitEvent: false });
            }
        });
    };
    FieldInteractionApi.prototype.promptUser = function (key, changes) {
        var showYes = true;
        document.activeElement.blur();
        return this.modalService.open(ControlPromptModal, { changes: changes, key: key }).onClosed;
    };
    FieldInteractionApi.prototype.setProperty = function (key, prop, value) {
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control[prop] = value;
            this.triggerEvent({ controlKey: key, prop: prop, value: value });
        }
    };
    FieldInteractionApi.prototype.getProperty = function (key, prop) {
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            return control[prop];
        }
        return null;
    };
    FieldInteractionApi.prototype.isValueEmpty = function (key) {
        var value = this.getValue(key);
        return Helpers.isEmpty(value);
    };
    FieldInteractionApi.prototype.isValueBlank = function (key) {
        var value = this.getValue(key);
        return Helpers.isBlank(value);
    };
    FieldInteractionApi.prototype.hasField = function (key) {
        return !!this.form.controls[key];
    };
    FieldInteractionApi.prototype.addStaticOption = function (key, newOption) {
        var control = this.getControl(key);
        var optionToAdd = newOption;
        var isUnique = true;
        if (control && !control.restrictFieldInteractions) {
            var currentOptions = this.getProperty(key, 'options');
            if (!currentOptions || !currentOptions.length) {
                var config = this.getProperty(key, 'config');
                if (config) {
                    currentOptions = config.options;
                    if (currentOptions && Array.isArray(currentOptions)) {
                        if (currentOptions[0].value && !optionToAdd.value) {
                            optionToAdd = { value: newOption, label: newOption };
                        }
                        config.options = __spread(currentOptions, [optionToAdd]);
                        this.setProperty(key, 'config', config);
                    }
                }
            }
            else {
                if (currentOptions[0].value && !optionToAdd.value) {
                    optionToAdd = { value: newOption, label: newOption };
                }
                // Ensure duplicate values are not added
                currentOptions.forEach(function (option) {
                    if ((option.value && option.value === optionToAdd.value) || option === optionToAdd) {
                        isUnique = false;
                    }
                });
                if (isUnique) {
                    this.setProperty(key, 'options', __spread(currentOptions, [optionToAdd]));
                }
            }
            if (isUnique) {
                this.triggerEvent({ controlKey: key, prop: 'options', value: __spread(currentOptions, [optionToAdd]) });
            }
        }
    };
    FieldInteractionApi.prototype.removeStaticOption = function (key, optionToRemove) {
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            var currentOptions = this.getProperty(key, 'options');
            if (!currentOptions || !currentOptions.length) {
                var config = this.getProperty(key, 'config');
                if (config) {
                    currentOptions = config.options;
                    if (currentOptions && Array.isArray(currentOptions)) {
                        var index_1 = -1;
                        currentOptions.forEach(function (opt, i) {
                            if (opt.value || opt.label) {
                                if (opt.value === optionToRemove || opt.label === optionToRemove) {
                                    index_1 = i;
                                }
                            }
                            else {
                                if (opt === optionToRemove) {
                                    index_1 = i;
                                }
                            }
                        });
                        if (index_1 !== -1) {
                            currentOptions.splice(index_1, 1);
                        }
                        config.options = __spread(currentOptions);
                        this.setProperty(key, 'config', config);
                    }
                }
            }
            else {
                var index_2 = -1;
                currentOptions.forEach(function (opt, i) {
                    if (opt.value || opt.label) {
                        if (opt.value === optionToRemove || opt.label === optionToRemove) {
                            index_2 = i;
                        }
                    }
                    else {
                        if (opt === optionToRemove) {
                            index_2 = i;
                        }
                    }
                });
                if (index_2 !== -1) {
                    currentOptions.splice(index_2, 1);
                }
                this.setProperty(key, 'options', __spread(currentOptions));
            }
            this.triggerEvent({ controlKey: key, prop: 'options', value: control.options });
        }
    };
    FieldInteractionApi.prototype.modifyPickerConfig = function (key, config, mapper) {
        // call another method to avoid a breaking change but still enable stricter types
        this.mutatePickerConfig(key, config, mapper);
    };
    FieldInteractionApi.prototype.mutatePickerConfig = function (key, args, mapper) {
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            var _a = control.config, minSearchLength = _a.minSearchLength, enableInfiniteScroll = _a.enableInfiniteScroll, filteredOptionsCreator = _a.filteredOptionsCreator, format = _a.format, getLabels = _a.getLabels, emptyPickerMessage = _a.emptyPickerMessage;
            var optionsConfig = this.getOptionsConfig(args, mapper, filteredOptionsCreator, format);
            var newConfig = __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (emptyPickerMessage && { emptyPickerMessage: emptyPickerMessage })), (Number.isInteger(minSearchLength) && { minSearchLength: minSearchLength })), (enableInfiniteScroll && { enableInfiniteScroll: enableInfiniteScroll })), (filteredOptionsCreator && { filteredOptionsCreator: filteredOptionsCreator })), (getLabels && { getLabels: getLabels })), (optionsConfig && optionsConfig)), { resultsTemplate: control.config.resultsTemplate || ('resultsTemplateType' in args && this.getAppropriateResultsTemplate(args.resultsTemplateType)) });
            this.setProperty(key, 'config', newConfig);
            this.triggerEvent({ controlKey: key, prop: 'pickerConfig', value: args });
        }
    };
    FieldInteractionApi.prototype.addPropertiesToPickerConfig = function (key, properties) {
        var control = this.getControl(key);
        if (!control || control.restrictFieldInteractions) {
            return;
        }
        var config = __assign(__assign({}, control.config), properties);
        this.setProperty(key, 'config', config);
        this.triggerEvent({ controlKey: key, prop: 'pickerConfig', value: properties });
    };
    FieldInteractionApi.prototype.getAppropriateResultsTemplate = function (resultsTemplateType) {
        switch (resultsTemplateType) {
            case 'entity-picker':
                return EntityPickerResults;
            default:
                return undefined;
        }
    };
    FieldInteractionApi.prototype.setLoading = function (key, loading) {
        var _this = this;
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            if (loading) {
                this.form.controls[key].fieldInteractionloading = true;
                control.setErrors({ loading: true });
                // History
                clearTimeout(this.asyncBlockTimeout);
                this.asyncBlockTimeout = setTimeout(function () {
                    _this.setLoading(key, false);
                    _this.displayTip(key, _this.labels.asyncFailure, 'info', false);
                    _this.setProperty(key, '_displayedAsyncFailure', true);
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
    };
    FieldInteractionApi.prototype.addControl = function (key, metaForNewField, position, initialValue) {
        if (position === void 0) { position = FieldInteractionApi.FIELD_POSITIONS.ABOVE_FIELD; }
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
        var control = this.form.controls[key];
        var fieldsetIndex;
        var controlIndex;
        if (control) {
            fieldsetIndex = -1;
            controlIndex = -1;
            this.form.fieldsets.forEach(function (fieldset, fi) {
                fieldset.controls.forEach(function (fieldsetControl, ci) {
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
                var novoControl = this.formUtils.getControlForField(metaForNewField, this.http, {});
                novoControl.hidden = false;
                var formControl = new NovoFormControl(initialValue, novoControl);
                this.form.addControl(novoControl.key, formControl);
                this.form.fieldsets[fieldsetIndex].controls.splice(controlIndex, 0, novoControl);
                this.triggerEvent({ controlKey: key, prop: 'addControl', value: formControl });
            }
        }
    };
    FieldInteractionApi.prototype.removeControl = function (key) {
        if (!this.form.controls[key]) {
            // Field is not on the form
            return null;
        }
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            var fieldsetIndex_1 = -1;
            var controlIndex_1 = -1;
            this.form.fieldsets.forEach(function (fieldset, fi) {
                fieldset.controls.forEach(function (fieldsetControl, ci) {
                    if (fieldsetControl.key === key) {
                        fieldsetIndex_1 = fi;
                        controlIndex_1 = ci;
                    }
                });
            });
            if (fieldsetIndex_1 !== -1 && controlIndex_1 !== -1) {
                this.form.removeControl(key);
                this.form.fieldsets[fieldsetIndex_1].controls.splice(controlIndex_1, 1);
                this.triggerEvent({ controlKey: key, prop: 'removeControl', value: key });
            }
        }
    };
    FieldInteractionApi.prototype.debounce = function (func, wait) {
        if (wait === void 0) { wait = 50; }
        var h;
        clearTimeout(h);
        h = setTimeout(function () { return func(); }, wait);
    };
    FieldInteractionApi.prototype.triggerEvent = function (event) {
        if (this.form && this.form.fieldInteractionEvents) {
            this.form.fieldInteractionEvents.emit(event);
        }
    };
    FieldInteractionApi.FIELD_POSITIONS = {
        ABOVE_FIELD: 'ABOVE_FIELD',
        BELOW_FIELD: 'BELOW_FIELD',
        TOP_OF_FORM: 'TOP_OF_FORM',
        BOTTOM_OF_FORM: 'BOTTOM_OF_FORM',
    };
    FieldInteractionApi.ɵfac = function FieldInteractionApi_Factory(t) { return new (t || FieldInteractionApi)(i0.ɵɵinject(i1.NovoToastService), i0.ɵɵinject(i2.NovoModalService), i0.ɵɵinject(i3.FormUtils), i0.ɵɵinject(i4.HttpClient), i0.ɵɵinject(i5.NovoLabelService)); };
    FieldInteractionApi.ɵprov = i0.ɵɵdefineInjectable({ token: FieldInteractionApi, factory: FieldInteractionApi.ɵfac });
    return FieldInteractionApi;
}());
export { FieldInteractionApi };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FieldInteractionApi, [{
        type: Injectable
    }], function () { return [{ type: i1.NovoToastService }, { type: i2.NovoModalService }, { type: i3.FormUtils }, { type: i4.HttpClient }, { type: i5.NovoLabelService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGRJbnRlcmFjdGlvbkFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0ZpZWxkSW50ZXJhY3Rpb25BcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxTQUFTO0FBQ1QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDakcsT0FBTyxFQUFFLGdCQUFnQixFQUFnQixNQUFNLHVCQUF1QixDQUFDO0FBRXZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR25GLE1BQU07QUFDTixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7QUFFcEQ7SUFLRSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxVQUFLLEdBQUcsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLEVBQUQsQ0FBQyxDQUFDO0lBRXVCLENBQUM7SUFFekMsNEJBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxPQUFRO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxP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YW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBBcHBCcmlkZ2UgfSBmcm9tICcuLi8uLi91dGlscy9hcHAtYnJpZGdlL0FwcEJyaWRnZSc7XG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtLXV0aWxzL0Zvcm1VdGlscyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kYWwvTW9kYWxTZXJ2aWNlJztcbmltcG9ydCB7IEVudGl0eVBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi9waWNrZXIvZXh0cmFzL2VudGl0eS1waWNrZXItcmVzdWx0cy9FbnRpdHlQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IE5vdm9Ub2FzdFNlcnZpY2UsIFRvYXN0T3B0aW9ucyB9IGZyb20gJy4uL3RvYXN0L1RvYXN0U2VydmljZSc7XG5pbXBvcnQgeyBDdXN0b21IdHRwLCBNb2RpZnlQaWNrZXJDb25maWdBcmdzLCBPcHRpb25zRnVuY3Rpb24gfSBmcm9tICcuL0ZpZWxkSW50ZXJhY3Rpb25BcGlUeXBlcyc7XG5pbXBvcnQgeyBDb250cm9sQ29uZmlybU1vZGFsLCBDb250cm9sUHJvbXB0TW9kYWwgfSBmcm9tICcuL0ZpZWxkSW50ZXJhY3Rpb25Nb2RhbHMnO1xuaW1wb3J0IHsgTm92b0NvbnRyb2xDb25maWcgfSBmcm9tICcuL0Zvcm1Db250cm9scyc7XG5pbXBvcnQgeyBJRmllbGRJbnRlcmFjdGlvbkV2ZW50LCBOb3ZvRmllbGRzZXQsIFJlc3VsdHNUZW1wbGF0ZVR5cGUsIE5vdm9Gb3JtR3JvdXAgfSBmcm9tICcuL0Zvcm1JbnRlcmZhY2VzJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0Zvcm1Db250cm9sIH0gZnJvbSAnLi9Ob3ZvRm9ybUNvbnRyb2wnO1xuXG5jbGFzcyBDdXN0b21IdHRwSW1wbCBpbXBsZW1lbnRzIEN1c3RvbUh0dHAge1xuICB1cmw6IHN0cmluZztcbiAgb3B0aW9ucztcbiAgbWFwRm4gPSAoeCkgPT4geDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIGdldCh1cmw6IHN0cmluZywgb3B0aW9ucz8pOiBDdXN0b21IdHRwIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbWFwKG1hcEZuKTogQ3VzdG9tSHR0cCB7XG4gICAgdGhpcy5tYXBGbiA9IG1hcEZuO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3Vic2NyaWJlKHJlc29sdmUsIHJlamVjdD8pOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy51cmwsIHRoaXMub3B0aW9ucylcbiAgICAgIC5waXBlKG1hcCh0aGlzLm1hcEZuKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzb2x2ZSwgcmVqZWN0KTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmllbGRJbnRlcmFjdGlvbkFwaSB7XG4gIHByaXZhdGUgX2dsb2JhbHM7XG4gIGZvcm06IE5vdm9Gb3JtR3JvdXAgfCBhbnk7XG4gIHByaXZhdGUgX2N1cnJlbnRLZXk6IHN0cmluZztcbiAgYXBwQnJpZGdlOiBBcHBCcmlkZ2U7XG4gIHByaXZhdGUgYXN5bmNCbG9ja1RpbWVvdXQ7XG5cbiAgc3RhdGljIEZJRUxEX1BPU0lUSU9OUyA9IHtcbiAgICBBQk9WRV9GSUVMRDogJ0FCT1ZFX0ZJRUxEJyxcbiAgICBCRUxPV19GSUVMRDogJ0JFTE9XX0ZJRUxEJyxcbiAgICBUT1BfT0ZfRk9STTogJ1RPUF9PRl9GT1JNJyxcbiAgICBCT1RUT01fT0ZfRk9STTogJ0JPVFRPTV9PRl9GT1JNJyxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRvYXN0ZXI6IE5vdm9Ub2FzdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5vdm9Nb2RhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb3JtVXRpbHM6IEZvcm1VdGlscyxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsXG4gICkgeyB9XG5cbiAgZ2V0IGFzc29jaWF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmhhc093blByb3BlcnR5KCdhc3NvY2lhdGlvbnMnKSA/IHRoaXMuZm9ybS5hc3NvY2lhdGlvbnMgOiB7fTtcbiAgfVxuXG4gIGdldCBjdXJyZW50RW50aXR5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudEVudGl0eScpID8gdGhpcy5mb3JtLmN1cnJlbnRFbnRpdHkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgY3VycmVudEVudGl0eUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudEVudGl0eUlkJykgPyB0aGlzLmZvcm0uY3VycmVudEVudGl0eUlkIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGlzRWRpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmhhc093blByb3BlcnR5KCdlZGl0JykgPyB0aGlzLmZvcm0uZWRpdCA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGlzQWRkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0uaGFzT3duUHJvcGVydHkoJ2VkaXQnKSA/ICF0aGlzLmZvcm0uZWRpdCA6IGZhbHNlO1xuICB9XG5cbiAgc2V0IGdsb2JhbHMoZ2xvYmFscykge1xuICAgIHRoaXMuX2dsb2JhbHMgPSBnbG9iYWxzO1xuICB9XG5cbiAgZ2V0IGdsb2JhbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dsb2JhbHM7XG4gIH1cblxuICBzZXQgY3VycmVudEtleShrZXk6IHN0cmluZykge1xuICAgIHRoaXMuX2N1cnJlbnRLZXkgPSBrZXk7XG4gIH1cblxuICBnZXQgY3VycmVudEtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50S2V5O1xuICB9XG5cbiAgaXNBY3RpdmVDb250cm9sVmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5nZXRWYWx1ZSh0aGlzLmN1cnJlbnRLZXkpO1xuICB9XG5cbiAgZ2V0QWN0aXZlQ29udHJvbCgpOiBOb3ZvRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRyb2wodGhpcy5jdXJyZW50S2V5KTtcbiAgfVxuXG4gIGdldEFjdGl2ZUtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRLZXk7XG4gIH1cblxuICBnZXRBY3RpdmVWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSh0aGlzLmN1cnJlbnRLZXkpO1xuICB9XG5cbiAgZ2V0QWN0aXZlSW5pdGlhbFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEluaXRpYWxWYWx1ZSh0aGlzLmN1cnJlbnRLZXkpO1xuICB9XG5cbiAgZ2V0RmllbGRTZXQoa2V5OiBzdHJpbmcpOiBOb3ZvRmllbGRzZXQge1xuICAgIGlmICgha2V5KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRmllbGRJbnRlcmFjdGlvbkFQSV0gLSBpbnZhbGlkIG9yIG1pc3NpbmcgXCJrZXlcIicpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZFNldCA9IHRoaXMuZm9ybS5maWVsZHNldHMuZmluZCgoZnM6IE5vdm9GaWVsZHNldCkgPT4gZnMua2V5ICYmIGZzLmtleS50b0xvd2VyQ2FzZSgpID09PSBrZXkudG9Mb3dlckNhc2UoKSk7XG4gICAgaWYgKCFmaWVsZFNldCkge1xuICAgICAgY29uc29sZS5lcnJvcignW0ZpZWxkSW50ZXJhY3Rpb25BUEldIC0gY291bGQgbm90IGZpbmQgYSBmaWVsZHNldCBpbiB0aGUgZm9ybSBieSB0aGUga2V5IC0tJywga2V5KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkU2V0IGFzIE5vdm9GaWVsZHNldDtcbiAgfVxuXG4gIGdldENvbnRyb2woa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIWtleSkge1xuICAgICAgY29uc29sZS5lcnJvcignW0ZpZWxkSW50ZXJhY3Rpb25BUEldIC0gaW52YWxpZCBvciBtaXNzaW5nIFwia2V5XCInKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZm9ybS5jb250cm9sc1trZXldIGFzIE5vdm9Gb3JtQ29udHJvbDtcbiAgICBpZiAoIWNvbnRyb2wpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tGaWVsZEludGVyYWN0aW9uQVBJXSAtIGNvdWxkIG5vdCBmaW5kIGEgY29udHJvbCBpbiB0aGUgZm9ybSBieSB0aGUga2V5IC0tJywga2V5KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cblxuICBnZXRWYWx1ZShrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgcmV0dXJuIGNvbnRyb2wudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0UmF3VmFsdWUoa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBjb250cm9sLnJhd1ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldEluaXRpYWxWYWx1ZShrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgcmV0dXJuIGNvbnRyb2wuaW5pdGlhbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNldFZhbHVlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIHZhbHVlLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgICBlbWl0RXZlbnQ/OiBib29sZWFuO1xuICAgICAgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlPzogYm9vbGVhbjtcbiAgICAgIGVtaXRWaWV3VG9Nb2RlbENoYW5nZT86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuc2V0VmFsdWUodmFsdWUsIG9wdGlvbnMpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICd2YWx1ZScsIHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHBhdGNoVmFsdWUoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgdmFsdWUsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U/OiBib29sZWFuO1xuICAgICAgZW1pdFZpZXdUb01vZGVsQ2hhbmdlPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3ZhbHVlJywgdmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0UmVhZE9ubHkoa2V5OiBzdHJpbmcsIGlzUmVhZE9ubHk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5zZXRSZWFkT25seShpc1JlYWRPbmx5KTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAncmVhZE9ubHknLCB2YWx1ZTogaXNSZWFkT25seSB9KTtcbiAgICB9XG4gIH1cblxuICBzZXRSZXF1aXJlZChrZXk6IHN0cmluZywgcmVxdWlyZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5zZXRSZXF1aXJlZChyZXF1aXJlZCk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3JlcXVpcmVkJywgdmFsdWU6IHJlcXVpcmVkIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoa2V5OiBzdHJpbmcsIGNsZWFyVmFsdWUgPSB0cnVlKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuaGlkZShjbGVhclZhbHVlKTtcbiAgICAgIHRoaXMuZGlzYWJsZShrZXksIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnaGlkZGVuJywgdmFsdWU6IHRydWUgfSk7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9sO1xuICB9XG5cbiAgc2hvdyhrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnNob3coKTtcbiAgICAgIHRoaXMuZW5hYmxlKGtleSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdoaWRkZW4nLCB2YWx1ZTogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgaGlkZUZpZWxkU2V0SGVhZGVyKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgZmllbGRTZXQgPSB0aGlzLmdldEZpZWxkU2V0KGtleSk7XG4gICAgaWYgKGZpZWxkU2V0KSB7XG4gICAgICBmaWVsZFNldC5oaWRkZW4gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHNob3dGaWVsZFNldEhlYWRlcihrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGZpZWxkU2V0ID0gdGhpcy5nZXRGaWVsZFNldChrZXkpO1xuICAgIGlmIChmaWVsZFNldCkge1xuICAgICAgZmllbGRTZXQuaGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZGlzYWJsZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5kaXNhYmxlKG9wdGlvbnMpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdyZWFkT25seScsIHZhbHVlOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGVuYWJsZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5lbmFibGUob3B0aW9ucyk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3JlYWRPbmx5JywgdmFsdWU6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtBc0ludmFsaWQoa2V5OiBzdHJpbmcsIHZhbGlkYXRpb25NZXNzYWdlPzogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICAgIGNvbnRyb2wubWFya0FzSW52YWxpZCh2YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbWFya0FzRGlydHkoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eShvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBtYXJrQXNQZW5kaW5nKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzUGVuZGluZyhvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBtYXJrQXNQcmlzdGluZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLm1hcmtBc1ByaXN0aW5lKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtBc1RvdWNoZWQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtBc1VudG91Y2hlZChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLm1hcmtBc1VudG91Y2hlZChvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgICBlbWl0RXZlbnQ/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheVRvYXN0KHRvYXN0Q29uZmlnOiBUb2FzdE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50b2FzdGVyKSB7XG4gICAgICB0aGlzLnRvYXN0ZXIuYWxlcnQodG9hc3RDb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlUaXAoa2V5OiBzdHJpbmcsIHRpcDogc3RyaW5nLCBpY29uPzogc3RyaW5nLCBhbGxvd0Rpc21pc3M/OiBib29sZWFuLCBzYW5pdGl6ZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC50aXBXZWxsID0ge1xuICAgICAgICB0aXAsXG4gICAgICAgIGljb24sXG4gICAgICAgIGJ1dHRvbjogYWxsb3dEaXNtaXNzLFxuICAgICAgICBzYW5pdGl6ZTogc2FuaXRpemUgIT09IGZhbHNlLCAvLyBkZWZhdWx0cyB0byB0cnVlIHdoZW4gdW5kZWZpbmVkXG4gICAgICB9O1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICd0aXBXZWxsJywgdmFsdWU6IHRpcCB9KTtcbiAgICB9XG4gIH1cblxuICBzZXRUb29sdGlwKGtleTogc3RyaW5nLCB0b29sdGlwOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC50b29sdGlwID0gdG9vbHRpcDtcbiAgICAgIGlmICh0b29sdGlwLmxlbmd0aCA+PSA0MCAmJiB0b29sdGlwLmxlbmd0aCA8PSA0MDApIHtcbiAgICAgICAgY29udHJvbC50b29sdGlwU2l6ZSA9ICdsYXJnZSc7XG4gICAgICAgIGNvbnRyb2wudG9vbHRpcFByZWxpbmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0b29sdGlwLmxlbmd0aCA+IDQwMCkge1xuICAgICAgICBjb250cm9sLnRvb2x0aXBTaXplID0gJ2V4dHJhLWxhcmdlJztcbiAgICAgIH1cbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAndG9vbHRpcCcsIHZhbHVlOiB0b29sdGlwIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbmZpcm1DaGFuZ2VzKGtleTogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgaGlzdG9yeSA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAndmFsdWVIaXN0b3J5Jyk7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSBoaXN0b3J5W2hpc3RvcnkubGVuZ3RoIC0gMl07XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlKGtleSk7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmdldFByb3BlcnR5KGtleSwgJ2xhYmVsJyk7XG4gICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgYW55KS5ibHVyKCk7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQ29udHJvbENvbmZpcm1Nb2RhbCwgeyBvbGRWYWx1ZSwgbmV3VmFsdWUsIGxhYmVsLCBtZXNzYWdlLCBrZXkgfSkub25DbG9zZWQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKGtleSwgb2xkVmFsdWUsIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByb21wdFVzZXIoa2V5OiBzdHJpbmcsIGNoYW5nZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3Qgc2hvd1llcyA9IHRydWU7XG4gICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgYW55KS5ibHVyKCk7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQ29udHJvbFByb21wdE1vZGFsLCB7IGNoYW5nZXMsIGtleSB9KS5vbkNsb3NlZDtcbiAgfVxuXG4gIHNldFByb3BlcnR5KGtleTogc3RyaW5nLCBwcm9wOiBzdHJpbmcsIHZhbHVlKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2xbcHJvcF0gPSB2YWx1ZTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wLCB2YWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRQcm9wZXJ0eShrZXk6IHN0cmluZywgcHJvcDogc3RyaW5nKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIHJldHVybiBjb250cm9sW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlzVmFsdWVFbXB0eShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZShrZXkpO1xuICAgIHJldHVybiBIZWxwZXJzLmlzRW1wdHkodmFsdWUpO1xuICB9XG5cbiAgaXNWYWx1ZUJsYW5rKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKGtleSk7XG4gICAgcmV0dXJuIEhlbHBlcnMuaXNCbGFuayh2YWx1ZSk7XG4gIH1cblxuICBoYXNGaWVsZChrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZm9ybS5jb250cm9sc1trZXldO1xuICB9XG5cbiAgYWRkU3RhdGljT3B0aW9uKGtleTogc3RyaW5nLCBuZXdPcHRpb24pOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgbGV0IG9wdGlvblRvQWRkID0gbmV3T3B0aW9uO1xuICAgIGxldCBpc1VuaXF1ZSA9IHRydWU7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgbGV0IGN1cnJlbnRPcHRpb25zID0gdGhpcy5nZXRQcm9wZXJ0eShrZXksICdvcHRpb25zJyk7XG4gICAgICBpZiAoIWN1cnJlbnRPcHRpb25zIHx8ICFjdXJyZW50T3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXRQcm9wZXJ0eShrZXksICdjb25maWcnKTtcbiAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgIGN1cnJlbnRPcHRpb25zID0gY29uZmlnLm9wdGlvbnM7XG4gICAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25zICYmIEFycmF5LmlzQXJyYXkoY3VycmVudE9wdGlvbnMpKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudE9wdGlvbnNbMF0udmFsdWUgJiYgIW9wdGlvblRvQWRkLnZhbHVlKSB7XG4gICAgICAgICAgICAgIG9wdGlvblRvQWRkID0geyB2YWx1ZTogbmV3T3B0aW9uLCBsYWJlbDogbmV3T3B0aW9uIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25maWcub3B0aW9ucyA9IFsuLi5jdXJyZW50T3B0aW9ucywgb3B0aW9uVG9BZGRdO1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICdjb25maWcnLCBjb25maWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25zWzBdLnZhbHVlICYmICFvcHRpb25Ub0FkZC52YWx1ZSkge1xuICAgICAgICAgIG9wdGlvblRvQWRkID0geyB2YWx1ZTogbmV3T3B0aW9uLCBsYWJlbDogbmV3T3B0aW9uIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5zdXJlIGR1cGxpY2F0ZSB2YWx1ZXMgYXJlIG5vdCBhZGRlZFxuICAgICAgICBjdXJyZW50T3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICBpZiAoKG9wdGlvbi52YWx1ZSAmJiBvcHRpb24udmFsdWUgPT09IG9wdGlvblRvQWRkLnZhbHVlKSB8fCBvcHRpb24gPT09IG9wdGlvblRvQWRkKSB7XG4gICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc1VuaXF1ZSkge1xuICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnb3B0aW9ucycsIFsuLi5jdXJyZW50T3B0aW9ucywgb3B0aW9uVG9BZGRdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzVW5pcXVlKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnb3B0aW9ucycsIHZhbHVlOiBbLi4uY3VycmVudE9wdGlvbnMsIG9wdGlvblRvQWRkXSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVTdGF0aWNPcHRpb24oa2V5OiBzdHJpbmcsIG9wdGlvblRvUmVtb3ZlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgbGV0IGN1cnJlbnRPcHRpb25zID0gdGhpcy5nZXRQcm9wZXJ0eShrZXksICdvcHRpb25zJyk7XG4gICAgICBpZiAoIWN1cnJlbnRPcHRpb25zIHx8ICFjdXJyZW50T3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXRQcm9wZXJ0eShrZXksICdjb25maWcnKTtcbiAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgIGN1cnJlbnRPcHRpb25zID0gY29uZmlnLm9wdGlvbnM7XG4gICAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25zICYmIEFycmF5LmlzQXJyYXkoY3VycmVudE9wdGlvbnMpKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGN1cnJlbnRPcHRpb25zLmZvckVhY2goKG9wdCwgaSkgPT4ge1xuICAgICAgICAgICAgICBpZiAob3B0LnZhbHVlIHx8IG9wdC5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGlmIChvcHQudmFsdWUgPT09IG9wdGlvblRvUmVtb3ZlIHx8IG9wdC5sYWJlbCA9PT0gb3B0aW9uVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdCA9PT0gb3B0aW9uVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICBjdXJyZW50T3B0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uZmlnLm9wdGlvbnMgPSBbLi4uY3VycmVudE9wdGlvbnNdO1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICdjb25maWcnLCBjb25maWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGN1cnJlbnRPcHRpb25zLmZvckVhY2goKG9wdCwgaSkgPT4ge1xuICAgICAgICAgIGlmIChvcHQudmFsdWUgfHwgb3B0LmxhYmVsKSB7XG4gICAgICAgICAgICBpZiAob3B0LnZhbHVlID09PSBvcHRpb25Ub1JlbW92ZSB8fCBvcHQubGFiZWwgPT09IG9wdGlvblRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9wdCA9PT0gb3B0aW9uVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnb3B0aW9ucycsIFsuLi5jdXJyZW50T3B0aW9uc10pO1xuICAgICAgfVxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdvcHRpb25zJywgdmFsdWU6IGNvbnRyb2wub3B0aW9ucyB9KTtcbiAgICB9XG4gIH1cblxuICBtb2RpZnlQaWNrZXJDb25maWcoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgY29uZmlnOiB7XG4gICAgICBmb3JtYXQ/OiBzdHJpbmc7XG4gICAgICBvcHRpb25zVXJsPzogc3RyaW5nO1xuICAgICAgb3B0aW9uc1VybEJ1aWxkZXI/OiBGdW5jdGlvbjtcbiAgICAgIG9wdGlvbnNQcm9taXNlPztcbiAgICAgIG9wdGlvbnM/OiBhbnlbXTtcbiAgICAgIHJlc3VsdHNUZW1wbGF0ZVR5cGU/OiBSZXN1bHRzVGVtcGxhdGVUeXBlO1xuICAgIH0sXG4gICAgbWFwcGVyPyxcbiAgKTogdm9pZCB7XG4gICAgLy8gY2FsbCBhbm90aGVyIG1ldGhvZCB0byBhdm9pZCBhIGJyZWFraW5nIGNoYW5nZSBidXQgc3RpbGwgZW5hYmxlIHN0cmljdGVyIHR5cGVzXG4gICAgdGhpcy5tdXRhdGVQaWNrZXJDb25maWcoa2V5LCBjb25maWcgYXMgTW9kaWZ5UGlja2VyQ29uZmlnQXJncywgbWFwcGVyKTtcbiAgfVxuXG4gIG11dGF0ZVBpY2tlckNvbmZpZyhrZXk6IHN0cmluZywgYXJnczogTW9kaWZ5UGlja2VyQ29uZmlnQXJncywgbWFwcGVyPzogKGl0ZW06IHVua25vd24pID0+IHVua25vd24pOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29uc3QgeyBtaW5TZWFyY2hMZW5ndGgsIGVuYWJsZUluZmluaXRlU2Nyb2xsLCBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yLCBmb3JtYXQsIGdldExhYmVscywgZW1wdHlQaWNrZXJNZXNzYWdlIH0gPSBjb250cm9sLmNvbmZpZztcbiAgICAgIGNvbnN0IG9wdGlvbnNDb25maWcgPSB0aGlzLmdldE9wdGlvbnNDb25maWcoYXJncywgbWFwcGVyLCBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yLCBmb3JtYXQpO1xuXG4gICAgICBjb25zdCBuZXdDb25maWc6IE5vdm9Db250cm9sQ29uZmlnWydjb25maWcnXSA9IHtcbiAgICAgICAgLi4uKGVtcHR5UGlja2VyTWVzc2FnZSAmJiB7IGVtcHR5UGlja2VyTWVzc2FnZSB9KSxcbiAgICAgICAgLi4uKE51bWJlci5pc0ludGVnZXIobWluU2VhcmNoTGVuZ3RoKSAmJiB7IG1pblNlYXJjaExlbmd0aCB9KSxcbiAgICAgICAgLi4uKGVuYWJsZUluZmluaXRlU2Nyb2xsICYmIHsgZW5hYmxlSW5maW5pdGVTY3JvbGwgfSksXG4gICAgICAgIC4uLihmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yICYmIHsgZmlsdGVyZWRPcHRpb25zQ3JlYXRvciB9KSxcbiAgICAgICAgLi4uKGdldExhYmVscyAmJiB7IGdldExhYmVscyB9KSxcbiAgICAgICAgLi4uKG9wdGlvbnNDb25maWcgJiYgb3B0aW9uc0NvbmZpZyksXG4gICAgICAgIHJlc3VsdHNUZW1wbGF0ZTpcbiAgICAgICAgICBjb250cm9sLmNvbmZpZy5yZXN1bHRzVGVtcGxhdGUgfHwgKCdyZXN1bHRzVGVtcGxhdGVUeXBlJyBpbiBhcmdzICYmIHRoaXMuZ2V0QXBwcm9wcmlhdGVSZXN1bHRzVGVtcGxhdGUoYXJncy5yZXN1bHRzVGVtcGxhdGVUeXBlKSksXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ2NvbmZpZycsIG5ld0NvbmZpZyk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3BpY2tlckNvbmZpZycsIHZhbHVlOiBhcmdzIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZFByb3BlcnRpZXNUb1BpY2tlckNvbmZpZyhrZXk6IHN0cmluZywgcHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKCFjb250cm9sIHx8IGNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIC4uLmNvbnRyb2wuY29uZmlnLFxuICAgICAgLi4ucHJvcGVydGllcyxcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICdjb25maWcnLCBjb25maWcpO1xuICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAncGlja2VyQ29uZmlnJywgdmFsdWU6IHByb3BlcnRpZXMgfSk7XG4gIH1cbiAgZ2V0T3B0aW9uc0NvbmZpZyA9IChcbiAgICBhcmdzOiBNb2RpZnlQaWNrZXJDb25maWdBcmdzLFxuICAgIG1hcHBlcj86IChpdGVtOiB1bmtub3duKSA9PiB1bmtub3duLFxuICAgIGZpbHRlcmVkT3B0aW9uc0NyZWF0b3I/OiAod2hlcmU6IHN0cmluZykgPT4gKHF1ZXJ5OiBzdHJpbmcpID0+IFByb21pc2U8dW5rbm93bltdPixcbiAgICBwaWNrZXJDb25maWdGb3JtYXQ/OiBzdHJpbmcsXG4gICk6IHVuZGVmaW5lZCB8IHsgb3B0aW9uczogdW5rbm93bltdIH0gfCB7IG9wdGlvbnM6IE9wdGlvbnNGdW5jdGlvbjsgZm9ybWF0Pzogc3RyaW5nIH0gPT4ge1xuICAgIGlmIChmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yIHx8ICdvcHRpb25zVXJsJyBpbiBhcmdzIHx8ICdvcHRpb25zVXJsQnVpbGRlcicgaW4gYXJncyB8fCAnb3B0aW9uc1Byb21pc2UnIGluIGFyZ3MpIHtcbiAgICAgIGNvbnN0IGZvcm1hdCA9ICgnZm9ybWF0JyBpbiBhcmdzICYmIGFyZ3MuZm9ybWF0KSB8fCBwaWNrZXJDb25maWdGb3JtYXQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvcHRpb25zOiB0aGlzLmNyZWF0ZU9wdGlvbnNGdW5jdGlvbihhcmdzLCBtYXBwZXIsIGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IpLFxuICAgICAgICAuLi4oJ2VtcHR5UGlja2VyTWVzc2FnZScgaW4gYXJncyAmJiB7IGVtcHR5UGlja2VyTWVzc2FnZTogYXJncy5lbXB0eVBpY2tlck1lc3NhZ2UgfSksXG4gICAgICAgIC4uLihmb3JtYXQgJiYgeyBmb3JtYXQgfSksXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoJ29wdGlvbnMnIGluIGFyZ3MgJiYgQXJyYXkuaXNBcnJheShhcmdzLm9wdGlvbnMpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvcHRpb25zOiBbLi4uYXJncy5vcHRpb25zXSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgZ2V0QXBwcm9wcmlhdGVSZXN1bHRzVGVtcGxhdGUocmVzdWx0c1RlbXBsYXRlVHlwZTogUmVzdWx0c1RlbXBsYXRlVHlwZSkge1xuICAgIHN3aXRjaCAocmVzdWx0c1RlbXBsYXRlVHlwZSkge1xuICAgICAgY2FzZSAnZW50aXR5LXBpY2tlcic6XG4gICAgICAgIHJldHVybiBFbnRpdHlQaWNrZXJSZXN1bHRzO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVPcHRpb25zRnVuY3Rpb24gPSAoXG4gICAgY29uZmlnOiBNb2RpZnlQaWNrZXJDb25maWdBcmdzLFxuICAgIG1hcHBlcj86IChpdGVtOiB1bmtub3duKSA9PiB1bmtub3duLFxuICAgIGZpbHRlcmVkT3B0aW9uc0NyZWF0b3I/OiAod2hlcmU/OiBzdHJpbmcpID0+IChxdWVyeTogc3RyaW5nLCBwYWdlPzogbnVtYmVyKSA9PiBQcm9taXNlPHVua25vd25bXT4sXG4gICk6ICgocXVlcnk6IHN0cmluZykgPT4gUHJvbWlzZTx1bmtub3duW10+KSA9PiAocXVlcnk6IHN0cmluZywgcGFnZT86IG51bWJlcikgPT4ge1xuICAgIGlmICgnb3B0aW9uc1Byb21pc2UnIGluIGNvbmZpZyAmJiBjb25maWcub3B0aW9uc1Byb21pc2UpIHtcbiAgICAgIHJldHVybiBjb25maWcub3B0aW9uc1Byb21pc2UocXVlcnksIG5ldyBDdXN0b21IdHRwSW1wbCh0aGlzLmh0dHApLCBwYWdlKTtcbiAgICB9IGVsc2UgaWYgKCgnb3B0aW9uc1VybEJ1aWxkZXInIGluIGNvbmZpZyAmJiBjb25maWcub3B0aW9uc1VybEJ1aWxkZXIpIHx8ICgnb3B0aW9uc1VybCcgaW4gY29uZmlnICYmIGNvbmZpZy5vcHRpb25zVXJsKSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gJ29wdGlvbnNVcmxCdWlsZGVyJyBpbiBjb25maWcgPyBjb25maWcub3B0aW9uc1VybEJ1aWxkZXIocXVlcnkpIDogYCR7Y29uZmlnLm9wdGlvbnNVcmx9P2ZpbHRlcj0ke3F1ZXJ5IHx8ICcnfWA7XG4gICAgICAgIHRoaXMuaHR0cFxuICAgICAgICAgIC5nZXQodXJsKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgbWFwKChyZXN1bHRzOiB1bmtub3duW10pID0+IHtcbiAgICAgICAgICAgICAgaWYgKG1hcHBlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLm1hcChtYXBwZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKVxuICAgICAgICAgIC5zdWJzY3JpYmUocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoZmlsdGVyZWRPcHRpb25zQ3JlYXRvcikge1xuICAgICAgaWYgKCd3aGVyZScgaW4gY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yKGNvbmZpZy53aGVyZSkocXVlcnksIHBhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IoKShxdWVyeSwgcGFnZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHNldExvYWRpbmcoa2V5OiBzdHJpbmcsIGxvYWRpbmc6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW2tleV0uZmllbGRJbnRlcmFjdGlvbmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBjb250cm9sLnNldEVycm9ycyh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICAgIC8vIEhpc3RvcnlcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYXN5bmNCbG9ja1RpbWVvdXQpO1xuICAgICAgICB0aGlzLmFzeW5jQmxvY2tUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRMb2FkaW5nKGtleSwgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuZGlzcGxheVRpcChrZXksIHRoaXMubGFiZWxzLmFzeW5jRmFpbHVyZSwgJ2luZm8nLCBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICdfZGlzcGxheWVkQXN5bmNGYWlsdXJlJywgdHJ1ZSk7XG4gICAgICAgIH0sIDEwMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1trZXldLmZpZWxkSW50ZXJhY3Rpb25sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFzeW5jQmxvY2tUaW1lb3V0KTtcbiAgICAgICAgY29udHJvbC5zZXRFcnJvcnMoeyBsb2FkaW5nOiBudWxsIH0pO1xuICAgICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICBpZiAodGhpcy5nZXRQcm9wZXJ0eShrZXksICdfZGlzcGxheWVkQXN5bmNGYWlsdXJlJykpIHtcbiAgICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ3RpcFdlbGwnLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdsb2FkaW5nJywgdmFsdWU6IGxvYWRpbmcgfSk7XG4gICAgfVxuICB9XG5cbiAgYWRkQ29udHJvbChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBtZXRhRm9yTmV3RmllbGQ6IHsga2V5Pzogc3RyaW5nLCB0eXBlPzogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCBsYWJlbD86IHN0cmluZyB9LFxuICAgIHBvc2l0aW9uOiBzdHJpbmcgPSBGaWVsZEludGVyYWN0aW9uQXBpLkZJRUxEX1BPU0lUSU9OUy5BQk9WRV9GSUVMRCxcbiAgICBpbml0aWFsVmFsdWU/LFxuICApOiB2b2lkIHtcbiAgICBpZiAoIW1ldGFGb3JOZXdGaWVsZC5rZXkgJiYgIW1ldGFGb3JOZXdGaWVsZC5uYW1lKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRmllbGRJbnRlcmFjdGlvbkFQSV0gLSBtaXNzaW5nIFwia2V5XCIgaW4gbWV0YSBmb3IgbmV3IGZpZWxkJyk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghbWV0YUZvck5ld0ZpZWxkLmtleSkge1xuICAgICAgLy8gSWYga2V5IGlzIG5vdCBleHBsaWNpdGx5IGRlY2xhcmVkLCB1c2UgbmFtZSBhcyBrZXlcbiAgICAgIG1ldGFGb3JOZXdGaWVsZC5rZXkgPSBtZXRhRm9yTmV3RmllbGQubmFtZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW21ldGFGb3JOZXdGaWVsZC5rZXldKSB7XG4gICAgICAvLyBGaWVsZCBpcyBhbHJlYWR5IG9uIHRoZSBmb3JtXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5mb3JtLmNvbnRyb2xzW2tleV07XG4gICAgbGV0IGZpZWxkc2V0SW5kZXg6IG51bWJlcjtcbiAgICBsZXQgY29udHJvbEluZGV4OiBudW1iZXI7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIGZpZWxkc2V0SW5kZXggPSAtMTtcbiAgICAgIGNvbnRyb2xJbmRleCA9IC0xO1xuXG4gICAgICB0aGlzLmZvcm0uZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0LCBmaSkgPT4ge1xuICAgICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChmaWVsZHNldENvbnRyb2wsIGNpKSA9PiB7XG4gICAgICAgICAgaWYgKGZpZWxkc2V0Q29udHJvbC5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgZmllbGRzZXRJbmRleCA9IGZpO1xuICAgICAgICAgICAgY29udHJvbEluZGV4ID0gY2k7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDaGFuZ2UgdGhlIHBvc2l0aW9uIG9mIHRoZSBuZXdseSBhZGRlZCBmaWVsZFxuICAgICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICBjYXNlIEZpZWxkSW50ZXJhY3Rpb25BcGkuRklFTERfUE9TSVRJT05TLkFCT1ZFX0ZJRUxEOlxuICAgICAgICAgIC8vIEFkZGluZyBmaWVsZCBhYm92ZSBhY3RpdmUgZmllbGRcbiAgICAgICAgICAvLyBpbmRleCBjYW4gc3RheSB0aGUgc2FtZVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEZpZWxkSW50ZXJhY3Rpb25BcGkuRklFTERfUE9TSVRJT05TLkJFTE9XX0ZJRUxEOlxuICAgICAgICAgIC8vIEFkZGluZyBmaWVsZCBiZWxvdyBhY3RpdmUgZmllbGRcbiAgICAgICAgICBjb250cm9sSW5kZXggKz0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBGaWVsZEludGVyYWN0aW9uQXBpLkZJRUxEX1BPU0lUSU9OUy5UT1BfT0ZfRk9STTpcbiAgICAgICAgICAvLyBBZGRpbmcgZmllbGQgdG8gdGhlIHRvcCBvZiB0aGUgZm9ybVxuICAgICAgICAgIGNvbnRyb2xJbmRleCA9IDA7XG4gICAgICAgICAgZmllbGRzZXRJbmRleCA9IDA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRmllbGRJbnRlcmFjdGlvbkFwaS5GSUVMRF9QT1NJVElPTlMuQk9UVE9NX09GX0ZPUk06XG4gICAgICAgICAgLy8gQWRkaW5nIGZpZWxkIHRvIHRoZSBib3R0b20gb2YgdGhlIGZvcm1cbiAgICAgICAgICBmaWVsZHNldEluZGV4ID0gdGhpcy5mb3JtLmZpZWxkc2V0cy5sZW5ndGggLSAxO1xuICAgICAgICAgIGNvbnRyb2xJbmRleCA9IHRoaXMuZm9ybS5maWVsZHNldHNbZmllbGRzZXRJbmRleF0uY29udHJvbHMubGVuZ3RoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmllbGRzZXRJbmRleCAhPT0gLTEgJiYgY29udHJvbEluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCBub3ZvQ29udHJvbCA9IHRoaXMuZm9ybVV0aWxzLmdldENvbnRyb2xGb3JGaWVsZChtZXRhRm9yTmV3RmllbGQsIHRoaXMuaHR0cCwge30pO1xuICAgICAgICBub3ZvQ29udHJvbC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgY29uc3QgZm9ybUNvbnRyb2wgPSBuZXcgTm92b0Zvcm1Db250cm9sKGluaXRpYWxWYWx1ZSwgbm92b0NvbnRyb2wpO1xuICAgICAgICB0aGlzLmZvcm0uYWRkQ29udHJvbChub3ZvQ29udHJvbC5rZXksIGZvcm1Db250cm9sKTtcbiAgICAgICAgdGhpcy5mb3JtLmZpZWxkc2V0c1tmaWVsZHNldEluZGV4XS5jb250cm9scy5zcGxpY2UoY29udHJvbEluZGV4LCAwLCBub3ZvQ29udHJvbCk7XG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnYWRkQ29udHJvbCcsIHZhbHVlOiBmb3JtQ29udHJvbCB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVDb250cm9sKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNba2V5XSkge1xuICAgICAgLy8gRmllbGQgaXMgbm90IG9uIHRoZSBmb3JtXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGxldCBmaWVsZHNldEluZGV4ID0gLTE7XG4gICAgICBsZXQgY29udHJvbEluZGV4ID0gLTE7XG5cbiAgICAgIHRoaXMuZm9ybS5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQsIGZpKSA9PiB7XG4gICAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGZpZWxkc2V0Q29udHJvbCwgY2kpID0+IHtcbiAgICAgICAgICBpZiAoZmllbGRzZXRDb250cm9sLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICBmaWVsZHNldEluZGV4ID0gZmk7XG4gICAgICAgICAgICBjb250cm9sSW5kZXggPSBjaTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaWVsZHNldEluZGV4ICE9PSAtMSAmJiBjb250cm9sSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuZm9ybS5yZW1vdmVDb250cm9sKGtleSk7XG4gICAgICAgIHRoaXMuZm9ybS5maWVsZHNldHNbZmllbGRzZXRJbmRleF0uY29udHJvbHMuc3BsaWNlKGNvbnRyb2xJbmRleCwgMSk7XG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAncmVtb3ZlQ29udHJvbCcsIHZhbHVlOiBrZXkgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGVib3VuY2UoZnVuYzogKCkgPT4gdm9pZCwgd2FpdCA9IDUwKSB7XG4gICAgbGV0IGg7XG4gICAgY2xlYXJUaW1lb3V0KGgpO1xuICAgIGggPSBzZXRUaW1lb3V0KCgpID0+IGZ1bmMoKSwgd2FpdCk7XG4gIH1cblxuICBwcml2YXRlIHRyaWdnZXJFdmVudChldmVudDogSUZpZWxkSW50ZXJhY3Rpb25FdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZvcm0gJiYgdGhpcy5mb3JtLmZpZWxkSW50ZXJhY3Rpb25FdmVudHMpIHtcbiAgICAgIHRoaXMuZm9ybS5maWVsZEludGVyYWN0aW9uRXZlbnRzLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuIl19