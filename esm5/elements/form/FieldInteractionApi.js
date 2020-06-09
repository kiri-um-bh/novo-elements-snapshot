/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/FieldInteractionApi.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var CustomHttpImpl = /** @class */ (function () {
    function CustomHttpImpl(http) {
        this.http = http;
        this.mapFn = (/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x; });
    }
    /**
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    CustomHttpImpl.prototype.get = /**
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        this.url = url;
        this.options = options;
        return this;
    };
    /**
     * @param {?} mapFn
     * @return {?}
     */
    CustomHttpImpl.prototype.map = /**
     * @param {?} mapFn
     * @return {?}
     */
    function (mapFn) {
        this.mapFn = mapFn;
        return this;
    };
    /**
     * @param {?} resolve
     * @param {?=} reject
     * @return {?}
     */
    CustomHttpImpl.prototype.subscribe = /**
     * @param {?} resolve
     * @param {?=} reject
     * @return {?}
     */
    function (resolve, reject) {
        return this.http
            .get(this.url, this.options)
            .pipe(map(this.mapFn))
            .subscribe(resolve, reject);
    };
    return CustomHttpImpl;
}());
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
var FieldInteractionApi = /** @class */ (function () {
    function FieldInteractionApi(toaster, modalService, formUtils, http, labels) {
        var _this = this;
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
        function (args, mapper, filteredOptionsCreator, pickerConfigFormat) {
            if (filteredOptionsCreator || 'optionsUrl' in args || 'optionsUrlBuilder' in args || 'optionsPromise' in args) {
                /** @type {?} */
                var format = ('format' in args && args.format) || pickerConfigFormat;
                return tslib_1.__assign({ options: _this.createOptionsFunction(args, mapper, filteredOptionsCreator) }, ('emptyPickerMessage' in args && { emptyPickerMessage: args.emptyPickerMessage }), (format && { format: format }));
            }
            else if ('options' in args && Array.isArray(args.options)) {
                return {
                    options: tslib_1.__spread(args.options),
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
        function (config, mapper, filteredOptionsCreator) { return (/**
         * @param {?} query
         * @param {?=} page
         * @return {?}
         */
        function (query, page) {
            if ('optionsPromise' in config && config.optionsPromise) {
                return config.optionsPromise(query, new CustomHttpImpl(_this.http), page);
            }
            else if (('optionsUrlBuilder' in config && config.optionsUrlBuilder) || ('optionsUrl' in config && config.optionsUrl)) {
                return new Promise((/**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */
                function (resolve, reject) {
                    /** @type {?} */
                    var url = 'optionsUrlBuilder' in config ? config.optionsUrlBuilder(query) : config.optionsUrl + "?filter=" + (query || '');
                    _this.http
                        .get(url)
                        .pipe(map((/**
                     * @param {?} results
                     * @return {?}
                     */
                    function (results) {
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
        }); });
    }
    Object.defineProperty(FieldInteractionApi.prototype, "associations", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.hasOwnProperty('associations') ? this.form.associations : {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldInteractionApi.prototype, "currentEntity", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.hasOwnProperty('currentEntity') ? this.form.currentEntity : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldInteractionApi.prototype, "currentEntityId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.hasOwnProperty('currentEntityId') ? this.form.currentEntityId : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldInteractionApi.prototype, "isEdit", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.hasOwnProperty('edit') ? this.form.edit : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldInteractionApi.prototype, "isAdd", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.hasOwnProperty('edit') ? !this.form.edit : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldInteractionApi.prototype, "globals", {
        get: /**
         * @return {?}
         */
        function () {
            return this._globals;
        },
        set: /**
         * @param {?} globals
         * @return {?}
         */
        function (globals) {
            this._globals = globals;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldInteractionApi.prototype, "currentKey", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentKey;
        },
        set: /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            this._currentKey = key;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FieldInteractionApi.prototype.isActiveControlValid = /**
     * @return {?}
     */
    function () {
        return !!this.getValue(this.currentKey);
    };
    /**
     * @return {?}
     */
    FieldInteractionApi.prototype.getActiveControl = /**
     * @return {?}
     */
    function () {
        return this.getControl(this.currentKey);
    };
    /**
     * @return {?}
     */
    FieldInteractionApi.prototype.getActiveKey = /**
     * @return {?}
     */
    function () {
        return this.currentKey;
    };
    /**
     * @return {?}
     */
    FieldInteractionApi.prototype.getActiveValue = /**
     * @return {?}
     */
    function () {
        return this.getValue(this.currentKey);
    };
    /**
     * @return {?}
     */
    FieldInteractionApi.prototype.getActiveInitialValue = /**
     * @return {?}
     */
    function () {
        return this.getInitialValue(this.currentKey);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    FieldInteractionApi.prototype.getFieldSet = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (!key) {
            console.error('[FieldInteractionAPI] - invalid or missing "key"'); // tslint:disable-line
            return null;
        }
        /** @type {?} */
        var fieldSet = this.form.fieldsets.find((/**
         * @param {?} fs
         * @return {?}
         */
        function (fs) { return fs.key && fs.key.toLowerCase() === key.toLowerCase(); }));
        if (!fieldSet) {
            console.error('[FieldInteractionAPI] - could not find a fieldset in the form by the key --', key); // tslint:disable-line
            return null;
        }
        return (/** @type {?} */ (fieldSet));
    };
    /**
     * @param {?} key
     * @return {?}
     */
    FieldInteractionApi.prototype.getControl = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (!key) {
            console.error('[FieldInteractionAPI] - invalid or missing "key"'); // tslint:disable-line
            return null;
        }
        /** @type {?} */
        var control = (/** @type {?} */ (this.form.controls[key]));
        if (!control) {
            console.error('[FieldInteractionAPI] - could not find a control in the form by the key --', key); // tslint:disable-line
            return null;
        }
        return control;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    FieldInteractionApi.prototype.getValue = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control) {
            return control.value;
        }
        return null;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    FieldInteractionApi.prototype.getRawValue = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control) {
            return control.rawValue;
        }
        return null;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    FieldInteractionApi.prototype.getInitialValue = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control) {
            return control.initialValue;
        }
        return null;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FieldInteractionApi.prototype.setValue = /**
     * @param {?} key
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    function (key, value, options) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.setValue(value, options);
            this.triggerEvent({ controlKey: key, prop: 'value', value: value });
        }
    };
    /**
     * @param {?} key
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FieldInteractionApi.prototype.patchValue = /**
     * @param {?} key
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    function (key, value, options) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.setValue(value, options);
            this.triggerEvent({ controlKey: key, prop: 'value', value: value });
        }
    };
    /**
     * @param {?} key
     * @param {?} isReadOnly
     * @return {?}
     */
    FieldInteractionApi.prototype.setReadOnly = /**
     * @param {?} key
     * @param {?} isReadOnly
     * @return {?}
     */
    function (key, isReadOnly) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.setReadOnly(isReadOnly);
            this.triggerEvent({ controlKey: key, prop: 'readOnly', value: isReadOnly });
        }
    };
    /**
     * @param {?} key
     * @param {?} required
     * @return {?}
     */
    FieldInteractionApi.prototype.setRequired = /**
     * @param {?} key
     * @param {?} required
     * @return {?}
     */
    function (key, required) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.setRequired(required);
            this.triggerEvent({ controlKey: key, prop: 'required', value: required });
        }
    };
    /**
     * @param {?} key
     * @param {?=} clearValue
     * @return {?}
     */
    FieldInteractionApi.prototype.hide = /**
     * @param {?} key
     * @param {?=} clearValue
     * @return {?}
     */
    function (key, clearValue) {
        if (clearValue === void 0) { clearValue = true; }
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.hide(clearValue);
            this.disable(key, { emitEvent: false });
            this.triggerEvent({ controlKey: key, prop: 'hidden', value: true });
        }
        return control;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    FieldInteractionApi.prototype.show = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.show();
            this.enable(key, { emitEvent: false });
            this.triggerEvent({ controlKey: key, prop: 'hidden', value: false });
        }
    };
    /**
     * @param {?} key
     * @return {?}
     */
    FieldInteractionApi.prototype.hideFieldSetHeader = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var fieldSet = this.getFieldSet(key);
        if (fieldSet) {
            fieldSet.hidden = true;
        }
    };
    /**
     * @param {?} key
     * @return {?}
     */
    FieldInteractionApi.prototype.showFieldSetHeader = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var fieldSet = this.getFieldSet(key);
        if (fieldSet) {
            fieldSet.hidden = false;
        }
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    FieldInteractionApi.prototype.disable = /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    function (key, options) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.disable(options);
            this.triggerEvent({ controlKey: key, prop: 'readOnly', value: true });
        }
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    FieldInteractionApi.prototype.enable = /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    function (key, options) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.enable(options);
            this.triggerEvent({ controlKey: key, prop: 'readOnly', value: false });
        }
    };
    /**
     * @param {?} key
     * @param {?=} validationMessage
     * @return {?}
     */
    FieldInteractionApi.prototype.markAsInvalid = /**
     * @param {?} key
     * @param {?=} validationMessage
     * @return {?}
     */
    function (key, validationMessage) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control) {
            if (control && !control.restrictFieldInteractions) {
                control.markAsInvalid(validationMessage);
            }
        }
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    FieldInteractionApi.prototype.markAsDirty = /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    function (key, options) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.markAsDirty(options);
        }
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    FieldInteractionApi.prototype.markAsPending = /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    function (key, options) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.markAsPending(options);
        }
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    FieldInteractionApi.prototype.markAsPristine = /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    function (key, options) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.markAsPristine(options);
        }
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    FieldInteractionApi.prototype.markAsTouched = /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    function (key, options) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.markAsTouched(options);
        }
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    FieldInteractionApi.prototype.markAsUntouched = /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    function (key, options) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.markAsUntouched(options);
        }
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    FieldInteractionApi.prototype.updateValueAndValidity = /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    function (key, options) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.updateValueAndValidity(options);
        }
    };
    /**
     * @param {?} toastConfig
     * @return {?}
     */
    FieldInteractionApi.prototype.displayToast = /**
     * @param {?} toastConfig
     * @return {?}
     */
    function (toastConfig) {
        if (this.toaster) {
            this.toaster.alert(toastConfig);
        }
    };
    /**
     * @param {?} key
     * @param {?} tip
     * @param {?=} icon
     * @param {?=} allowDismiss
     * @param {?=} sanitize
     * @return {?}
     */
    FieldInteractionApi.prototype.displayTip = /**
     * @param {?} key
     * @param {?} tip
     * @param {?=} icon
     * @param {?=} allowDismiss
     * @param {?=} sanitize
     * @return {?}
     */
    function (key, tip, icon, allowDismiss, sanitize) {
        /** @type {?} */
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
    /**
     * @param {?} key
     * @param {?} tooltip
     * @return {?}
     */
    FieldInteractionApi.prototype.setTooltip = /**
     * @param {?} key
     * @param {?} tooltip
     * @return {?}
     */
    function (key, tooltip) {
        /** @type {?} */
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
    /**
     * @param {?} key
     * @param {?=} message
     * @return {?}
     */
    FieldInteractionApi.prototype.confirmChanges = /**
     * @param {?} key
     * @param {?=} message
     * @return {?}
     */
    function (key, message) {
        var _this = this;
        /** @type {?} */
        var history = this.getProperty(key, 'valueHistory');
        /** @type {?} */
        var oldValue = history[history.length - 2];
        /** @type {?} */
        var newValue = this.getValue(key);
        /** @type {?} */
        var label = this.getProperty(key, 'label');
        ((/** @type {?} */ (document.activeElement))).blur();
        return this.modalService.open(ControlConfirmModal, { oldValue: oldValue, newValue: newValue, label: label, message: message, key: key }).onClosed.then((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (!result) {
                _this.setValue(key, oldValue, { emitEvent: false });
            }
        }));
    };
    /**
     * @param {?} key
     * @param {?} changes
     * @return {?}
     */
    FieldInteractionApi.prototype.promptUser = /**
     * @param {?} key
     * @param {?} changes
     * @return {?}
     */
    function (key, changes) {
        /** @type {?} */
        var showYes = true;
        ((/** @type {?} */ (document.activeElement))).blur();
        return this.modalService.open(ControlPromptModal, { changes: changes, key: key }).onClosed;
    };
    /**
     * @param {?} key
     * @param {?} prop
     * @param {?} value
     * @return {?}
     */
    FieldInteractionApi.prototype.setProperty = /**
     * @param {?} key
     * @param {?} prop
     * @param {?} value
     * @return {?}
     */
    function (key, prop, value) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control[prop] = value;
            this.triggerEvent({ controlKey: key, prop: prop, value: value });
        }
    };
    /**
     * @param {?} key
     * @param {?} prop
     * @return {?}
     */
    FieldInteractionApi.prototype.getProperty = /**
     * @param {?} key
     * @param {?} prop
     * @return {?}
     */
    function (key, prop) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            return control[prop];
        }
        return null;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    FieldInteractionApi.prototype.isValueEmpty = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var value = this.getValue(key);
        return Helpers.isEmpty(value);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    FieldInteractionApi.prototype.isValueBlank = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var value = this.getValue(key);
        return Helpers.isBlank(value);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    FieldInteractionApi.prototype.hasField = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return !!this.form.controls[key];
    };
    /**
     * @param {?} key
     * @param {?} newOption
     * @return {?}
     */
    FieldInteractionApi.prototype.addStaticOption = /**
     * @param {?} key
     * @param {?} newOption
     * @return {?}
     */
    function (key, newOption) {
        /** @type {?} */
        var control = this.getControl(key);
        /** @type {?} */
        var optionToAdd = newOption;
        /** @type {?} */
        var isUnique = true;
        if (control && !control.restrictFieldInteractions) {
            /** @type {?} */
            var currentOptions = this.getProperty(key, 'options');
            if (!currentOptions || !currentOptions.length) {
                /** @type {?} */
                var config = this.getProperty(key, 'config');
                if (config) {
                    currentOptions = config.options;
                    if (currentOptions && Array.isArray(currentOptions)) {
                        if (currentOptions[0].value && !optionToAdd.value) {
                            optionToAdd = { value: newOption, label: newOption };
                        }
                        config.options = tslib_1.__spread(currentOptions, [optionToAdd]);
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
                function (option) {
                    if ((option.value && option.value === optionToAdd.value) || option === optionToAdd) {
                        isUnique = false;
                    }
                }));
                if (isUnique) {
                    this.setProperty(key, 'options', tslib_1.__spread(currentOptions, [optionToAdd]));
                }
            }
            if (isUnique) {
                this.triggerEvent({ controlKey: key, prop: 'options', value: tslib_1.__spread(currentOptions, [optionToAdd]) });
            }
        }
    };
    /**
     * @param {?} key
     * @param {?} optionToRemove
     * @return {?}
     */
    FieldInteractionApi.prototype.removeStaticOption = /**
     * @param {?} key
     * @param {?} optionToRemove
     * @return {?}
     */
    function (key, optionToRemove) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            /** @type {?} */
            var currentOptions = this.getProperty(key, 'options');
            if (!currentOptions || !currentOptions.length) {
                /** @type {?} */
                var config = this.getProperty(key, 'config');
                if (config) {
                    currentOptions = config.options;
                    if (currentOptions && Array.isArray(currentOptions)) {
                        /** @type {?} */
                        var index_1 = -1;
                        currentOptions.forEach((/**
                         * @param {?} opt
                         * @param {?} i
                         * @return {?}
                         */
                        function (opt, i) {
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
                        }));
                        if (index_1 !== -1) {
                            currentOptions.splice(index_1, 1);
                        }
                        config.options = tslib_1.__spread(currentOptions);
                        this.setProperty(key, 'config', config);
                    }
                }
            }
            else {
                /** @type {?} */
                var index_2 = -1;
                currentOptions.forEach((/**
                 * @param {?} opt
                 * @param {?} i
                 * @return {?}
                 */
                function (opt, i) {
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
                }));
                if (index_2 !== -1) {
                    currentOptions.splice(index_2, 1);
                }
                this.setProperty(key, 'options', tslib_1.__spread(currentOptions));
            }
            this.triggerEvent({ controlKey: key, prop: 'options', value: control.options });
        }
    };
    /**
     * @param {?} key
     * @param {?} config
     * @param {?=} mapper
     * @return {?}
     */
    FieldInteractionApi.prototype.modifyPickerConfig = /**
     * @param {?} key
     * @param {?} config
     * @param {?=} mapper
     * @return {?}
     */
    function (key, config, mapper) {
        // call another method to avoid a breaking change but still enable stricter types
        this.mutatePickerConfig(key, (/** @type {?} */ (config)), mapper);
    };
    /**
     * @param {?} key
     * @param {?} args
     * @param {?=} mapper
     * @return {?}
     */
    FieldInteractionApi.prototype.mutatePickerConfig = /**
     * @param {?} key
     * @param {?} args
     * @param {?=} mapper
     * @return {?}
     */
    function (key, args, mapper) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            var _a = control.config, minSearchLength = _a.minSearchLength, enableInfiniteScroll = _a.enableInfiniteScroll, filteredOptionsCreator = _a.filteredOptionsCreator, format = _a.format, getLabels = _a.getLabels, emptyPickerMessage = _a.emptyPickerMessage;
            /** @type {?} */
            var optionsConfig = this.getOptionsConfig(args, mapper, filteredOptionsCreator, format);
            /** @type {?} */
            var newConfig = tslib_1.__assign({}, (emptyPickerMessage && { emptyPickerMessage: emptyPickerMessage }), (Number.isInteger(minSearchLength) && { minSearchLength: minSearchLength }), (enableInfiniteScroll && { enableInfiniteScroll: enableInfiniteScroll }), (filteredOptionsCreator && { filteredOptionsCreator: filteredOptionsCreator }), (getLabels && { getLabels: getLabels }), (optionsConfig && optionsConfig), { resultsTemplate: control.config.resultsTemplate || ('resultsTemplateType' in args && this.getAppropriateResultsTemplate(args.resultsTemplateType)) });
            this.setProperty(key, 'config', newConfig);
            this.triggerEvent({ controlKey: key, prop: 'pickerConfig', value: args });
        }
    };
    /**
     * @param {?} key
     * @param {?} properties
     * @return {?}
     */
    FieldInteractionApi.prototype.addPropertiesToPickerConfig = /**
     * @param {?} key
     * @param {?} properties
     * @return {?}
     */
    function (key, properties) {
        /** @type {?} */
        var control = this.getControl(key);
        if (!control || control.restrictFieldInteractions) {
            return;
        }
        /** @type {?} */
        var config = tslib_1.__assign({}, control.config, properties);
        this.setProperty(key, 'config', config);
        this.triggerEvent({ controlKey: key, prop: 'pickerConfig', value: properties });
    };
    /**
     * @private
     * @param {?} resultsTemplateType
     * @return {?}
     */
    FieldInteractionApi.prototype.getAppropriateResultsTemplate = /**
     * @private
     * @param {?} resultsTemplateType
     * @return {?}
     */
    function (resultsTemplateType) {
        switch (resultsTemplateType) {
            case 'entity-picker':
                return EntityPickerResults;
            default:
                return undefined;
        }
    };
    /**
     * @param {?} key
     * @param {?} loading
     * @return {?}
     */
    FieldInteractionApi.prototype.setLoading = /**
     * @param {?} key
     * @param {?} loading
     * @return {?}
     */
    function (key, loading) {
        var _this = this;
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            if (loading) {
                this.form.controls[key].fieldInteractionloading = true;
                control.setErrors({ loading: true });
                // History
                clearTimeout(this.asyncBlockTimeout);
                this.asyncBlockTimeout = setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.setLoading(key, false);
                    _this.displayTip(key, _this.labels.asyncFailure, 'info', false);
                    _this.setProperty(key, '_displayedAsyncFailure', true);
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
    };
    /**
     * @param {?} key
     * @param {?} metaForNewField
     * @param {?=} position
     * @param {?=} initialValue
     * @return {?}
     */
    FieldInteractionApi.prototype.addControl = /**
     * @param {?} key
     * @param {?} metaForNewField
     * @param {?=} position
     * @param {?=} initialValue
     * @return {?}
     */
    function (key, metaForNewField, position, initialValue) {
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
        /** @type {?} */
        var control = this.form.controls[key];
        /** @type {?} */
        var fieldsetIndex;
        /** @type {?} */
        var controlIndex;
        if (control) {
            fieldsetIndex = -1;
            controlIndex = -1;
            this.form.fieldsets.forEach((/**
             * @param {?} fieldset
             * @param {?} fi
             * @return {?}
             */
            function (fieldset, fi) {
                fieldset.controls.forEach((/**
                 * @param {?} fieldsetControl
                 * @param {?} ci
                 * @return {?}
                 */
                function (fieldsetControl, ci) {
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
                var novoControl = this.formUtils.getControlForField(metaForNewField, this.http, {});
                novoControl.hidden = false;
                /** @type {?} */
                var formControl = new NovoFormControl(initialValue, novoControl);
                this.form.addControl(novoControl.key, formControl);
                this.form.fieldsets[fieldsetIndex].controls.splice(controlIndex, 0, novoControl);
                this.triggerEvent({ controlKey: key, prop: 'addControl', value: formControl });
            }
        }
    };
    /**
     * @param {?} key
     * @return {?}
     */
    FieldInteractionApi.prototype.removeControl = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (!this.form.controls[key]) {
            // Field is not on the form
            return null;
        }
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            /** @type {?} */
            var fieldsetIndex_1 = -1;
            /** @type {?} */
            var controlIndex_1 = -1;
            this.form.fieldsets.forEach((/**
             * @param {?} fieldset
             * @param {?} fi
             * @return {?}
             */
            function (fieldset, fi) {
                fieldset.controls.forEach((/**
                 * @param {?} fieldsetControl
                 * @param {?} ci
                 * @return {?}
                 */
                function (fieldsetControl, ci) {
                    if (fieldsetControl.key === key) {
                        fieldsetIndex_1 = fi;
                        controlIndex_1 = ci;
                    }
                }));
            }));
            if (fieldsetIndex_1 !== -1 && controlIndex_1 !== -1) {
                this.form.removeControl(key);
                this.form.fieldsets[fieldsetIndex_1].controls.splice(controlIndex_1, 1);
                this.triggerEvent({ controlKey: key, prop: 'removeControl', value: key });
            }
        }
    };
    /**
     * @param {?} func
     * @param {?=} wait
     * @return {?}
     */
    FieldInteractionApi.prototype.debounce = /**
     * @param {?} func
     * @param {?=} wait
     * @return {?}
     */
    function (func, wait) {
        if (wait === void 0) { wait = 50; }
        /** @type {?} */
        var h;
        clearTimeout(h);
        h = setTimeout((/**
         * @return {?}
         */
        function () { return func(); }), wait);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    FieldInteractionApi.prototype.triggerEvent = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    FieldInteractionApi.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FieldInteractionApi.ctorParameters = function () { return [
        { type: NovoToastService },
        { type: NovoModalService },
        { type: FormUtils },
        { type: HttpClient },
        { type: NovoLabelService }
    ]; };
    return FieldInteractionApi;
}());
export { FieldInteractionApi };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGRJbnRlcmFjdGlvbkFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0ZpZWxkSW50ZXJhY3Rpb25BcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFckUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQWdCLE1BQU0sdUJBQXVCLENBQUM7QUFFdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBSW5GLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRDtJQUtFLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFVBQUs7Ozs7UUFBRyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsRUFBRCxDQUFDLEVBQUM7SUFFdUIsQ0FBQzs7Ozs7O0lBRXpDLDRCQUFHOzs7OztJQUFILFVBQUksR0FBVyxFQUFFLE9BQVE7UUFDdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixP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QWt4QnpCLDBCQUFDO0NBQUEsQUExdUJELElBMHVCQztTQXp1QlksbUJBQW1COzs7SUFPOUIsb0NBS0U7Ozs7O0lBWEYsdUNBQWlCOztJQUNqQixtQ0FBMEI7Ozs7O0lBQzFCLDBDQUE0Qjs7SUFDNUIsd0NBQXFCOzs7OztJQUNyQixnREFBMEI7O0lBOGhCMUIsK0NBb0JFOztJQVdGLG9EQTZCRTs7Ozs7SUFobEJBLHNDQUFpQzs7Ozs7SUFDakMsMkNBQXNDOzs7OztJQUN0Qyx3Q0FBNEI7Ozs7O0lBQzVCLG1DQUF3Qjs7Ozs7SUFDeEIscUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG4vLyBWZW5kb3JcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgQXBwQnJpZGdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBwLWJyaWRnZS9BcHBCcmlkZ2UnO1xuaW1wb3J0IHsgRm9ybVV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybS11dGlscy9Gb3JtVXRpbHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b01vZGFsU2VydmljZSB9IGZyb20gJy4uL21vZGFsL01vZGFsU2VydmljZSc7XG5pbXBvcnQgeyBFbnRpdHlQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi4vcGlja2VyL2V4dHJhcy9lbnRpdHktcGlja2VyLXJlc3VsdHMvRW50aXR5UGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBOb3ZvVG9hc3RTZXJ2aWNlLCBUb2FzdE9wdGlvbnMgfSBmcm9tICcuLi90b2FzdC9Ub2FzdFNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VzdG9tSHR0cCwgTW9kaWZ5UGlja2VyQ29uZmlnQXJncywgT3B0aW9uc0Z1bmN0aW9uIH0gZnJvbSAnLi9GaWVsZEludGVyYWN0aW9uQXBpVHlwZXMnO1xuaW1wb3J0IHsgQ29udHJvbENvbmZpcm1Nb2RhbCwgQ29udHJvbFByb21wdE1vZGFsIH0gZnJvbSAnLi9GaWVsZEludGVyYWN0aW9uTW9kYWxzJztcbmltcG9ydCB7IE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi9Gb3JtQ29udHJvbHMnO1xuaW1wb3J0IHsgSUZpZWxkSW50ZXJhY3Rpb25FdmVudCwgTm92b0ZpZWxkc2V0LCBSZXN1bHRzVGVtcGxhdGVUeXBlLCBOb3ZvRm9ybUdyb3VwIH0gZnJvbSAnLi9Gb3JtSW50ZXJmYWNlcyc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Gb3JtQ29udHJvbCB9IGZyb20gJy4vTm92b0Zvcm1Db250cm9sJztcblxuY2xhc3MgQ3VzdG9tSHR0cEltcGwgaW1wbGVtZW50cyBDdXN0b21IdHRwIHtcbiAgdXJsOiBzdHJpbmc7XG4gIG9wdGlvbnM7XG4gIG1hcEZuID0gKHgpID0+IHg7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM/KTogQ3VzdG9tSHR0cCB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1hcChtYXBGbik6IEN1c3RvbUh0dHAge1xuICAgIHRoaXMubWFwRm4gPSBtYXBGbjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN1YnNjcmliZShyZXNvbHZlLCByZWplY3Q/KTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMudXJsLCB0aGlzLm9wdGlvbnMpXG4gICAgICAucGlwZShtYXAodGhpcy5tYXBGbikpXG4gICAgICAuc3Vic2NyaWJlKHJlc29sdmUsIHJlamVjdCk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkSW50ZXJhY3Rpb25BcGkge1xuICBwcml2YXRlIF9nbG9iYWxzO1xuICBmb3JtOiBOb3ZvRm9ybUdyb3VwIHwgYW55O1xuICBwcml2YXRlIF9jdXJyZW50S2V5OiBzdHJpbmc7XG4gIGFwcEJyaWRnZTogQXBwQnJpZGdlO1xuICBwcml2YXRlIGFzeW5jQmxvY2tUaW1lb3V0O1xuXG4gIHN0YXRpYyBGSUVMRF9QT1NJVElPTlMgPSB7XG4gICAgQUJPVkVfRklFTEQ6ICdBQk9WRV9GSUVMRCcsXG4gICAgQkVMT1dfRklFTEQ6ICdCRUxPV19GSUVMRCcsXG4gICAgVE9QX09GX0ZPUk06ICdUT1BfT0ZfRk9STScsXG4gICAgQk9UVE9NX09GX0ZPUk06ICdCT1RUT01fT0ZfRk9STScsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0b2FzdGVyOiBOb3ZvVG9hc3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOb3ZvTW9kYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybVV0aWxzOiBGb3JtVXRpbHMsXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICApIHsgfVxuXG4gIGdldCBhc3NvY2lhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5oYXNPd25Qcm9wZXJ0eSgnYXNzb2NpYXRpb25zJykgPyB0aGlzLmZvcm0uYXNzb2NpYXRpb25zIDoge307XG4gIH1cblxuICBnZXQgY3VycmVudEVudGl0eSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZvcm0uaGFzT3duUHJvcGVydHkoJ2N1cnJlbnRFbnRpdHknKSA/IHRoaXMuZm9ybS5jdXJyZW50RW50aXR5IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRFbnRpdHlJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZvcm0uaGFzT3duUHJvcGVydHkoJ2N1cnJlbnRFbnRpdHlJZCcpID8gdGhpcy5mb3JtLmN1cnJlbnRFbnRpdHlJZCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBpc0VkaXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5oYXNPd25Qcm9wZXJ0eSgnZWRpdCcpID8gdGhpcy5mb3JtLmVkaXQgOiBmYWxzZTtcbiAgfVxuXG4gIGdldCBpc0FkZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmhhc093blByb3BlcnR5KCdlZGl0JykgPyAhdGhpcy5mb3JtLmVkaXQgOiBmYWxzZTtcbiAgfVxuXG4gIHNldCBnbG9iYWxzKGdsb2JhbHMpIHtcbiAgICB0aGlzLl9nbG9iYWxzID0gZ2xvYmFscztcbiAgfVxuXG4gIGdldCBnbG9iYWxzKCkge1xuICAgIHJldHVybiB0aGlzLl9nbG9iYWxzO1xuICB9XG5cbiAgc2V0IGN1cnJlbnRLZXkoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jdXJyZW50S2V5ID0ga2V5O1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRLZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEtleTtcbiAgfVxuXG4gIGlzQWN0aXZlQ29udHJvbFZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZ2V0VmFsdWUodGhpcy5jdXJyZW50S2V5KTtcbiAgfVxuXG4gIGdldEFjdGl2ZUNvbnRyb2woKTogTm92b0Zvcm1Db250cm9sIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb250cm9sKHRoaXMuY3VycmVudEtleSk7XG4gIH1cblxuICBnZXRBY3RpdmVLZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50S2V5O1xuICB9XG5cbiAgZ2V0QWN0aXZlVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUodGhpcy5jdXJyZW50S2V5KTtcbiAgfVxuXG4gIGdldEFjdGl2ZUluaXRpYWxWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbml0aWFsVmFsdWUodGhpcy5jdXJyZW50S2V5KTtcbiAgfVxuXG4gIGdldEZpZWxkU2V0KGtleTogc3RyaW5nKTogTm92b0ZpZWxkc2V0IHtcbiAgICBpZiAoIWtleSkge1xuICAgICAgY29uc29sZS5lcnJvcignW0ZpZWxkSW50ZXJhY3Rpb25BUEldIC0gaW52YWxpZCBvciBtaXNzaW5nIFwia2V5XCInKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGRTZXQgPSB0aGlzLmZvcm0uZmllbGRzZXRzLmZpbmQoKGZzOiBOb3ZvRmllbGRzZXQpID0+IGZzLmtleSAmJiBmcy5rZXkudG9Mb3dlckNhc2UoKSA9PT0ga2V5LnRvTG93ZXJDYXNlKCkpO1xuICAgIGlmICghZmllbGRTZXQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tGaWVsZEludGVyYWN0aW9uQVBJXSAtIGNvdWxkIG5vdCBmaW5kIGEgZmllbGRzZXQgaW4gdGhlIGZvcm0gYnkgdGhlIGtleSAtLScsIGtleSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBmaWVsZFNldCBhcyBOb3ZvRmllbGRzZXQ7XG4gIH1cblxuICBnZXRDb250cm9sKGtleTogc3RyaW5nKSB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tGaWVsZEludGVyYWN0aW9uQVBJXSAtIGludmFsaWQgb3IgbWlzc2luZyBcImtleVwiJyk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmZvcm0uY29udHJvbHNba2V5XSBhcyBOb3ZvRm9ybUNvbnRyb2w7XG4gICAgaWYgKCFjb250cm9sKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRmllbGRJbnRlcmFjdGlvbkFQSV0gLSBjb3VsZCBub3QgZmluZCBhIGNvbnRyb2wgaW4gdGhlIGZvcm0gYnkgdGhlIGtleSAtLScsIGtleSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sO1xuICB9XG5cbiAgZ2V0VmFsdWUoa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBjb250cm9sLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldFJhd1ZhbHVlKGtleTogc3RyaW5nKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICByZXR1cm4gY29udHJvbC5yYXdWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRJbml0aWFsVmFsdWUoa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBjb250cm9sLmluaXRpYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzZXRWYWx1ZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICB2YWx1ZSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICAgIGVtaXRNb2RlbFRvVmlld0NoYW5nZT86IGJvb2xlYW47XG4gICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnNldFZhbHVlKHZhbHVlLCBvcHRpb25zKTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAndmFsdWUnLCB2YWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBwYXRjaFZhbHVlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIHZhbHVlLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgICBlbWl0RXZlbnQ/OiBib29sZWFuO1xuICAgICAgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlPzogYm9vbGVhbjtcbiAgICAgIGVtaXRWaWV3VG9Nb2RlbENoYW5nZT86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuc2V0VmFsdWUodmFsdWUsIG9wdGlvbnMpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICd2YWx1ZScsIHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNldFJlYWRPbmx5KGtleTogc3RyaW5nLCBpc1JlYWRPbmx5OiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuc2V0UmVhZE9ubHkoaXNSZWFkT25seSk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3JlYWRPbmx5JywgdmFsdWU6IGlzUmVhZE9ubHkgfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0UmVxdWlyZWQoa2V5OiBzdHJpbmcsIHJlcXVpcmVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuc2V0UmVxdWlyZWQocmVxdWlyZWQpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdyZXF1aXJlZCcsIHZhbHVlOiByZXF1aXJlZCB9KTtcbiAgICB9XG4gIH1cblxuICBoaWRlKGtleTogc3RyaW5nLCBjbGVhclZhbHVlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLmhpZGUoY2xlYXJWYWx1ZSk7XG4gICAgICB0aGlzLmRpc2FibGUoa2V5LCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ2hpZGRlbicsIHZhbHVlOiB0cnVlIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY29udHJvbDtcbiAgfVxuXG4gIHNob3coa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5zaG93KCk7XG4gICAgICB0aGlzLmVuYWJsZShrZXksIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnaGlkZGVuJywgdmFsdWU6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVGaWVsZFNldEhlYWRlcihrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGZpZWxkU2V0ID0gdGhpcy5nZXRGaWVsZFNldChrZXkpO1xuICAgIGlmIChmaWVsZFNldCkge1xuICAgICAgZmllbGRTZXQuaGlkZGVuID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBzaG93RmllbGRTZXRIZWFkZXIoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBmaWVsZFNldCA9IHRoaXMuZ2V0RmllbGRTZXQoa2V5KTtcbiAgICBpZiAoZmllbGRTZXQpIHtcbiAgICAgIGZpZWxkU2V0LmhpZGRlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGRpc2FibGUoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuZGlzYWJsZShvcHRpb25zKTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAncmVhZE9ubHknLCB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBlbmFibGUoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuZW5hYmxlKG9wdGlvbnMpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdyZWFkT25seScsIHZhbHVlOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBtYXJrQXNJbnZhbGlkKGtleTogc3RyaW5nLCB2YWxpZGF0aW9uTWVzc2FnZT86IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgICBjb250cm9sLm1hcmtBc0ludmFsaWQodmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1hcmtBc0RpcnR5KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzRGlydHkob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgbWFya0FzUGVuZGluZyhcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLm1hcmtBc1BlbmRpbmcob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgbWFya0FzUHJpc3RpbmUoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5tYXJrQXNQcmlzdGluZShvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBtYXJrQXNUb3VjaGVkKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZChvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBtYXJrQXNVbnRvdWNoZWQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5tYXJrQXNVbnRvdWNoZWQob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVmFsdWVBbmRWYWxpZGl0eShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlUb2FzdCh0b2FzdENvbmZpZzogVG9hc3RPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudG9hc3Rlcikge1xuICAgICAgdGhpcy50b2FzdGVyLmFsZXJ0KHRvYXN0Q29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5VGlwKGtleTogc3RyaW5nLCB0aXA6IHN0cmluZywgaWNvbj86IHN0cmluZywgYWxsb3dEaXNtaXNzPzogYm9vbGVhbiwgc2FuaXRpemU/OiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wudGlwV2VsbCA9IHtcbiAgICAgICAgdGlwLFxuICAgICAgICBpY29uLFxuICAgICAgICBidXR0b246IGFsbG93RGlzbWlzcyxcbiAgICAgICAgc2FuaXRpemU6IHNhbml0aXplICE9PSBmYWxzZSwgLy8gZGVmYXVsdHMgdG8gdHJ1ZSB3aGVuIHVuZGVmaW5lZFxuICAgICAgfTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAndGlwV2VsbCcsIHZhbHVlOiB0aXAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VG9vbHRpcChrZXk6IHN0cmluZywgdG9vbHRpcDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wudG9vbHRpcCA9IHRvb2x0aXA7XG4gICAgICBpZiAodG9vbHRpcC5sZW5ndGggPj0gNDAgJiYgdG9vbHRpcC5sZW5ndGggPD0gNDAwKSB7XG4gICAgICAgIGNvbnRyb2wudG9vbHRpcFNpemUgPSAnbGFyZ2UnO1xuICAgICAgICBjb250cm9sLnRvb2x0aXBQcmVsaW5lID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodG9vbHRpcC5sZW5ndGggPiA0MDApIHtcbiAgICAgICAgY29udHJvbC50b29sdGlwU2l6ZSA9ICdleHRyYS1sYXJnZSc7XG4gICAgICB9XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3Rvb2x0aXAnLCB2YWx1ZTogdG9vbHRpcCB9KTtcbiAgICB9XG4gIH1cblxuICBjb25maXJtQ2hhbmdlcyhrZXk6IHN0cmluZywgbWVzc2FnZT86IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGhpc3RvcnkgPSB0aGlzLmdldFByb3BlcnR5KGtleSwgJ3ZhbHVlSGlzdG9yeScpO1xuICAgIGNvbnN0IG9sZFZhbHVlID0gaGlzdG9yeVtoaXN0b3J5Lmxlbmd0aCAtIDJdO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZXRWYWx1ZShrZXkpO1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5nZXRQcm9wZXJ0eShrZXksICdsYWJlbCcpO1xuICAgIChkb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIGFueSkuYmx1cigpO1xuICAgIHJldHVybiB0aGlzLm1vZGFsU2VydmljZS5vcGVuKENvbnRyb2xDb25maXJtTW9kYWwsIHsgb2xkVmFsdWUsIG5ld1ZhbHVlLCBsYWJlbCwgbWVzc2FnZSwga2V5IH0pLm9uQ2xvc2VkLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShrZXksIG9sZFZhbHVlLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcm9tcHRVc2VyKGtleTogc3RyaW5nLCBjaGFuZ2VzOiBzdHJpbmdbXSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHNob3dZZXMgPSB0cnVlO1xuICAgIChkb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIGFueSkuYmx1cigpO1xuICAgIHJldHVybiB0aGlzLm1vZGFsU2VydmljZS5vcGVuKENvbnRyb2xQcm9tcHRNb2RhbCwgeyBjaGFuZ2VzLCBrZXkgfSkub25DbG9zZWQ7XG4gIH1cblxuICBzZXRQcm9wZXJ0eShrZXk6IHN0cmluZywgcHJvcDogc3RyaW5nLCB2YWx1ZSk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sW3Byb3BdID0gdmFsdWU7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcCwgdmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UHJvcGVydHkoa2V5OiBzdHJpbmcsIHByb3A6IHN0cmluZykge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICByZXR1cm4gY29udHJvbFtwcm9wXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpc1ZhbHVlRW1wdHkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoa2V5KTtcbiAgICByZXR1cm4gSGVscGVycy5pc0VtcHR5KHZhbHVlKTtcbiAgfVxuXG4gIGlzVmFsdWVCbGFuayhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZShrZXkpO1xuICAgIHJldHVybiBIZWxwZXJzLmlzQmxhbmsodmFsdWUpO1xuICB9XG5cbiAgaGFzRmllbGQoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmZvcm0uY29udHJvbHNba2V5XTtcbiAgfVxuXG4gIGFkZFN0YXRpY09wdGlvbihrZXk6IHN0cmluZywgbmV3T3B0aW9uKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGxldCBvcHRpb25Ub0FkZCA9IG5ld09wdGlvbjtcbiAgICBsZXQgaXNVbmlxdWUgPSB0cnVlO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGxldCBjdXJyZW50T3B0aW9ucyA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnb3B0aW9ucycpO1xuICAgICAgaWYgKCFjdXJyZW50T3B0aW9ucyB8fCAhY3VycmVudE9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJyk7XG4gICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zO1xuICAgICAgICAgIGlmIChjdXJyZW50T3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KGN1cnJlbnRPcHRpb25zKSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25zWzBdLnZhbHVlICYmICFvcHRpb25Ub0FkZC52YWx1ZSkge1xuICAgICAgICAgICAgICBvcHRpb25Ub0FkZCA9IHsgdmFsdWU6IG5ld09wdGlvbiwgbGFiZWw6IG5ld09wdGlvbiB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uZmlnLm9wdGlvbnMgPSBbLi4uY3VycmVudE9wdGlvbnMsIG9wdGlvblRvQWRkXTtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJywgY29uZmlnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjdXJyZW50T3B0aW9uc1swXS52YWx1ZSAmJiAhb3B0aW9uVG9BZGQudmFsdWUpIHtcbiAgICAgICAgICBvcHRpb25Ub0FkZCA9IHsgdmFsdWU6IG5ld09wdGlvbiwgbGFiZWw6IG5ld09wdGlvbiB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuc3VyZSBkdXBsaWNhdGUgdmFsdWVzIGFyZSBub3QgYWRkZWRcbiAgICAgICAgY3VycmVudE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKChvcHRpb24udmFsdWUgJiYgb3B0aW9uLnZhbHVlID09PSBvcHRpb25Ub0FkZC52YWx1ZSkgfHwgb3B0aW9uID09PSBvcHRpb25Ub0FkZCkge1xuICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNVbmlxdWUpIHtcbiAgICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ29wdGlvbnMnLCBbLi4uY3VycmVudE9wdGlvbnMsIG9wdGlvblRvQWRkXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc1VuaXF1ZSkge1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ29wdGlvbnMnLCB2YWx1ZTogWy4uLmN1cnJlbnRPcHRpb25zLCBvcHRpb25Ub0FkZF0gfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlU3RhdGljT3B0aW9uKGtleTogc3RyaW5nLCBvcHRpb25Ub1JlbW92ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGxldCBjdXJyZW50T3B0aW9ucyA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnb3B0aW9ucycpO1xuICAgICAgaWYgKCFjdXJyZW50T3B0aW9ucyB8fCAhY3VycmVudE9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJyk7XG4gICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zO1xuICAgICAgICAgIGlmIChjdXJyZW50T3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KGN1cnJlbnRPcHRpb25zKSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgICAgICBjdXJyZW50T3B0aW9ucy5mb3JFYWNoKChvcHQsIGkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG9wdC52YWx1ZSB8fCBvcHQubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0LnZhbHVlID09PSBvcHRpb25Ub1JlbW92ZSB8fCBvcHQubGFiZWwgPT09IG9wdGlvblRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChvcHQgPT09IG9wdGlvblRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgY3VycmVudE9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbmZpZy5vcHRpb25zID0gWy4uLmN1cnJlbnRPcHRpb25zXTtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJywgY29uZmlnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBjdXJyZW50T3B0aW9ucy5mb3JFYWNoKChvcHQsIGkpID0+IHtcbiAgICAgICAgICBpZiAob3B0LnZhbHVlIHx8IG9wdC5sYWJlbCkge1xuICAgICAgICAgICAgaWYgKG9wdC52YWx1ZSA9PT0gb3B0aW9uVG9SZW1vdmUgfHwgb3B0LmxhYmVsID09PSBvcHRpb25Ub1JlbW92ZSkge1xuICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvcHQgPT09IG9wdGlvblRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgY3VycmVudE9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ29wdGlvbnMnLCBbLi4uY3VycmVudE9wdGlvbnNdKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnb3B0aW9ucycsIHZhbHVlOiBjb250cm9sLm9wdGlvbnMgfSk7XG4gICAgfVxuICB9XG5cbiAgbW9kaWZ5UGlja2VyQ29uZmlnKFxuICAgIGtleTogc3RyaW5nLFxuICAgIGNvbmZpZzoge1xuICAgICAgZm9ybWF0Pzogc3RyaW5nO1xuICAgICAgb3B0aW9uc1VybD86IHN0cmluZztcbiAgICAgIG9wdGlvbnNVcmxCdWlsZGVyPzogRnVuY3Rpb247XG4gICAgICBvcHRpb25zUHJvbWlzZT87XG4gICAgICBvcHRpb25zPzogYW55W107XG4gICAgICByZXN1bHRzVGVtcGxhdGVUeXBlPzogUmVzdWx0c1RlbXBsYXRlVHlwZTtcbiAgICB9LFxuICAgIG1hcHBlcj8sXG4gICk6IHZvaWQge1xuICAgIC8vIGNhbGwgYW5vdGhlciBtZXRob2QgdG8gYXZvaWQgYSBicmVha2luZyBjaGFuZ2UgYnV0IHN0aWxsIGVuYWJsZSBzdHJpY3RlciB0eXBlc1xuICAgIHRoaXMubXV0YXRlUGlja2VyQ29uZmlnKGtleSwgY29uZmlnIGFzIE1vZGlmeVBpY2tlckNvbmZpZ0FyZ3MsIG1hcHBlcik7XG4gIH1cblxuICBtdXRhdGVQaWNrZXJDb25maWcoa2V5OiBzdHJpbmcsIGFyZ3M6IE1vZGlmeVBpY2tlckNvbmZpZ0FyZ3MsIG1hcHBlcj86IChpdGVtOiB1bmtub3duKSA9PiB1bmtub3duKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnN0IHsgbWluU2VhcmNoTGVuZ3RoLCBlbmFibGVJbmZpbml0ZVNjcm9sbCwgZmlsdGVyZWRPcHRpb25zQ3JlYXRvciwgZm9ybWF0LCBnZXRMYWJlbHMsIGVtcHR5UGlja2VyTWVzc2FnZSB9ID0gY29udHJvbC5jb25maWc7XG4gICAgICBjb25zdCBvcHRpb25zQ29uZmlnID0gdGhpcy5nZXRPcHRpb25zQ29uZmlnKGFyZ3MsIG1hcHBlciwgZmlsdGVyZWRPcHRpb25zQ3JlYXRvciwgZm9ybWF0KTtcblxuICAgICAgY29uc3QgbmV3Q29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZ1snY29uZmlnJ10gPSB7XG4gICAgICAgIC4uLihlbXB0eVBpY2tlck1lc3NhZ2UgJiYgeyBlbXB0eVBpY2tlck1lc3NhZ2UgfSksXG4gICAgICAgIC4uLihOdW1iZXIuaXNJbnRlZ2VyKG1pblNlYXJjaExlbmd0aCkgJiYgeyBtaW5TZWFyY2hMZW5ndGggfSksXG4gICAgICAgIC4uLihlbmFibGVJbmZpbml0ZVNjcm9sbCAmJiB7IGVuYWJsZUluZmluaXRlU2Nyb2xsIH0pLFxuICAgICAgICAuLi4oZmlsdGVyZWRPcHRpb25zQ3JlYXRvciAmJiB7IGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IgfSksXG4gICAgICAgIC4uLihnZXRMYWJlbHMgJiYgeyBnZXRMYWJlbHMgfSksXG4gICAgICAgIC4uLihvcHRpb25zQ29uZmlnICYmIG9wdGlvbnNDb25maWcpLFxuICAgICAgICByZXN1bHRzVGVtcGxhdGU6XG4gICAgICAgICAgY29udHJvbC5jb25maWcucmVzdWx0c1RlbXBsYXRlIHx8ICgncmVzdWx0c1RlbXBsYXRlVHlwZScgaW4gYXJncyAmJiB0aGlzLmdldEFwcHJvcHJpYXRlUmVzdWx0c1RlbXBsYXRlKGFyZ3MucmVzdWx0c1RlbXBsYXRlVHlwZSkpLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICdjb25maWcnLCBuZXdDb25maWcpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdwaWNrZXJDb25maWcnLCB2YWx1ZTogYXJncyB9KTtcbiAgICB9XG4gIH1cblxuICBhZGRQcm9wZXJ0aWVzVG9QaWNrZXJDb25maWcoa2V5OiBzdHJpbmcsIHByb3BlcnRpZXM6IHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmICghY29udHJvbCB8fCBjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAuLi5jb250cm9sLmNvbmZpZyxcbiAgICAgIC4uLnByb3BlcnRpZXMsXG4gICAgfTtcblxuICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJywgY29uZmlnKTtcbiAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3BpY2tlckNvbmZpZycsIHZhbHVlOiBwcm9wZXJ0aWVzIH0pO1xuICB9XG4gIGdldE9wdGlvbnNDb25maWcgPSAoXG4gICAgYXJnczogTW9kaWZ5UGlja2VyQ29uZmlnQXJncyxcbiAgICBtYXBwZXI/OiAoaXRlbTogdW5rbm93bikgPT4gdW5rbm93bixcbiAgICBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yPzogKHdoZXJlOiBzdHJpbmcpID0+IChxdWVyeTogc3RyaW5nKSA9PiBQcm9taXNlPHVua25vd25bXT4sXG4gICAgcGlja2VyQ29uZmlnRm9ybWF0Pzogc3RyaW5nLFxuICApOiB1bmRlZmluZWQgfCB7IG9wdGlvbnM6IHVua25vd25bXSB9IHwgeyBvcHRpb25zOiBPcHRpb25zRnVuY3Rpb247IGZvcm1hdD86IHN0cmluZyB9ID0+IHtcbiAgICBpZiAoZmlsdGVyZWRPcHRpb25zQ3JlYXRvciB8fCAnb3B0aW9uc1VybCcgaW4gYXJncyB8fCAnb3B0aW9uc1VybEJ1aWxkZXInIGluIGFyZ3MgfHwgJ29wdGlvbnNQcm9taXNlJyBpbiBhcmdzKSB7XG4gICAgICBjb25zdCBmb3JtYXQgPSAoJ2Zvcm1hdCcgaW4gYXJncyAmJiBhcmdzLmZvcm1hdCkgfHwgcGlja2VyQ29uZmlnRm9ybWF0O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3B0aW9uczogdGhpcy5jcmVhdGVPcHRpb25zRnVuY3Rpb24oYXJncywgbWFwcGVyLCBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yKSxcbiAgICAgICAgLi4uKCdlbXB0eVBpY2tlck1lc3NhZ2UnIGluIGFyZ3MgJiYgeyBlbXB0eVBpY2tlck1lc3NhZ2U6IGFyZ3MuZW1wdHlQaWNrZXJNZXNzYWdlIH0pLFxuICAgICAgICAuLi4oZm9ybWF0ICYmIHsgZm9ybWF0IH0pLFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKCdvcHRpb25zJyBpbiBhcmdzICYmIEFycmF5LmlzQXJyYXkoYXJncy5vcHRpb25zKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3B0aW9uczogWy4uLmFyZ3Mub3B0aW9uc10sXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIGdldEFwcHJvcHJpYXRlUmVzdWx0c1RlbXBsYXRlKHJlc3VsdHNUZW1wbGF0ZVR5cGU6IFJlc3VsdHNUZW1wbGF0ZVR5cGUpIHtcbiAgICBzd2l0Y2ggKHJlc3VsdHNUZW1wbGF0ZVR5cGUpIHtcbiAgICAgIGNhc2UgJ2VudGl0eS1waWNrZXInOlxuICAgICAgICByZXR1cm4gRW50aXR5UGlja2VyUmVzdWx0cztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlT3B0aW9uc0Z1bmN0aW9uID0gKFxuICAgIGNvbmZpZzogTW9kaWZ5UGlja2VyQ29uZmlnQXJncyxcbiAgICBtYXBwZXI/OiAoaXRlbTogdW5rbm93bikgPT4gdW5rbm93bixcbiAgICBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yPzogKHdoZXJlPzogc3RyaW5nKSA9PiAocXVlcnk6IHN0cmluZywgcGFnZT86IG51bWJlcikgPT4gUHJvbWlzZTx1bmtub3duW10+LFxuICApOiAoKHF1ZXJ5OiBzdHJpbmcpID0+IFByb21pc2U8dW5rbm93bltdPikgPT4gKHF1ZXJ5OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIpID0+IHtcbiAgICBpZiAoJ29wdGlvbnNQcm9taXNlJyBpbiBjb25maWcgJiYgY29uZmlnLm9wdGlvbnNQcm9taXNlKSB7XG4gICAgICByZXR1cm4gY29uZmlnLm9wdGlvbnNQcm9taXNlKHF1ZXJ5LCBuZXcgQ3VzdG9tSHR0cEltcGwodGhpcy5odHRwKSwgcGFnZSk7XG4gICAgfSBlbHNlIGlmICgoJ29wdGlvbnNVcmxCdWlsZGVyJyBpbiBjb25maWcgJiYgY29uZmlnLm9wdGlvbnNVcmxCdWlsZGVyKSB8fCAoJ29wdGlvbnNVcmwnIGluIGNvbmZpZyAmJiBjb25maWcub3B0aW9uc1VybCkpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9ICdvcHRpb25zVXJsQnVpbGRlcicgaW4gY29uZmlnID8gY29uZmlnLm9wdGlvbnNVcmxCdWlsZGVyKHF1ZXJ5KSA6IGAke2NvbmZpZy5vcHRpb25zVXJsfT9maWx0ZXI9JHtxdWVyeSB8fCAnJ31gO1xuICAgICAgICB0aGlzLmh0dHBcbiAgICAgICAgICAuZ2V0KHVybClcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1hcCgocmVzdWx0czogdW5rbm93bltdKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChtYXBwZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cy5tYXAobWFwcGVyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIClcbiAgICAgICAgICAuc3Vic2NyaWJlKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IpIHtcbiAgICAgIGlmICgnd2hlcmUnIGluIGNvbmZpZykge1xuICAgICAgICByZXR1cm4gZmlsdGVyZWRPcHRpb25zQ3JlYXRvcihjb25maWcud2hlcmUpKHF1ZXJ5LCBwYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yKCkocXVlcnksIHBhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzZXRMb2FkaW5nKGtleTogc3RyaW5nLCBsb2FkaW5nOiBib29sZWFuKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1trZXldLmZpZWxkSW50ZXJhY3Rpb25sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgY29udHJvbC5zZXRFcnJvcnMoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgICAvLyBIaXN0b3J5XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFzeW5jQmxvY2tUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5hc3luY0Jsb2NrVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0TG9hZGluZyhrZXksIGZhbHNlKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlUaXAoa2V5LCB0aGlzLmxhYmVscy5hc3luY0ZhaWx1cmUsICdpbmZvJywgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnX2Rpc3BsYXllZEFzeW5jRmFpbHVyZScsIHRydWUpO1xuICAgICAgICB9LCAxMDAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNba2V5XS5maWVsZEludGVyYWN0aW9ubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hc3luY0Jsb2NrVGltZW91dCk7XG4gICAgICAgIGNvbnRyb2wuc2V0RXJyb3JzKHsgbG9hZGluZzogbnVsbCB9KTtcbiAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnX2Rpc3BsYXllZEFzeW5jRmFpbHVyZScpKSB7XG4gICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICd0aXBXZWxsJywgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnbG9hZGluZycsIHZhbHVlOiBsb2FkaW5nIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZENvbnRyb2woXG4gICAga2V5OiBzdHJpbmcsXG4gICAgbWV0YUZvck5ld0ZpZWxkOiB7IGtleT86IHN0cmluZywgdHlwZT86IHN0cmluZywgbmFtZT86IHN0cmluZywgbGFiZWw/OiBzdHJpbmcgfSxcbiAgICBwb3NpdGlvbjogc3RyaW5nID0gRmllbGRJbnRlcmFjdGlvbkFwaS5GSUVMRF9QT1NJVElPTlMuQUJPVkVfRklFTEQsXG4gICAgaW5pdGlhbFZhbHVlPyxcbiAgKTogdm9pZCB7XG4gICAgaWYgKCFtZXRhRm9yTmV3RmllbGQua2V5ICYmICFtZXRhRm9yTmV3RmllbGQubmFtZSkge1xuICAgICAgY29uc29sZS5lcnJvcignW0ZpZWxkSW50ZXJhY3Rpb25BUEldIC0gbWlzc2luZyBcImtleVwiIGluIG1ldGEgZm9yIG5ldyBmaWVsZCcpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIW1ldGFGb3JOZXdGaWVsZC5rZXkpIHtcbiAgICAgIC8vIElmIGtleSBpcyBub3QgZXhwbGljaXRseSBkZWNsYXJlZCwgdXNlIG5hbWUgYXMga2V5XG4gICAgICBtZXRhRm9yTmV3RmllbGQua2V5ID0gbWV0YUZvck5ld0ZpZWxkLm5hbWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1ttZXRhRm9yTmV3RmllbGQua2V5XSkge1xuICAgICAgLy8gRmllbGQgaXMgYWxyZWFkeSBvbiB0aGUgZm9ybVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZm9ybS5jb250cm9sc1trZXldO1xuICAgIGxldCBmaWVsZHNldEluZGV4OiBudW1iZXI7XG4gICAgbGV0IGNvbnRyb2xJbmRleDogbnVtYmVyO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICBmaWVsZHNldEluZGV4ID0gLTE7XG4gICAgICBjb250cm9sSW5kZXggPSAtMTtcblxuICAgICAgdGhpcy5mb3JtLmZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCwgZmkpID0+IHtcbiAgICAgICAgZmllbGRzZXQuY29udHJvbHMuZm9yRWFjaCgoZmllbGRzZXRDb250cm9sLCBjaSkgPT4ge1xuICAgICAgICAgIGlmIChmaWVsZHNldENvbnRyb2wua2V5ID09PSBrZXkpIHtcbiAgICAgICAgICAgIGZpZWxkc2V0SW5kZXggPSBmaTtcbiAgICAgICAgICAgIGNvbnRyb2xJbmRleCA9IGNpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ2hhbmdlIHRoZSBwb3NpdGlvbiBvZiB0aGUgbmV3bHkgYWRkZWQgZmllbGRcbiAgICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgICAgY2FzZSBGaWVsZEludGVyYWN0aW9uQXBpLkZJRUxEX1BPU0lUSU9OUy5BQk9WRV9GSUVMRDpcbiAgICAgICAgICAvLyBBZGRpbmcgZmllbGQgYWJvdmUgYWN0aXZlIGZpZWxkXG4gICAgICAgICAgLy8gaW5kZXggY2FuIHN0YXkgdGhlIHNhbWVcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBGaWVsZEludGVyYWN0aW9uQXBpLkZJRUxEX1BPU0lUSU9OUy5CRUxPV19GSUVMRDpcbiAgICAgICAgICAvLyBBZGRpbmcgZmllbGQgYmVsb3cgYWN0aXZlIGZpZWxkXG4gICAgICAgICAgY29udHJvbEluZGV4ICs9IDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRmllbGRJbnRlcmFjdGlvbkFwaS5GSUVMRF9QT1NJVElPTlMuVE9QX09GX0ZPUk06XG4gICAgICAgICAgLy8gQWRkaW5nIGZpZWxkIHRvIHRoZSB0b3Agb2YgdGhlIGZvcm1cbiAgICAgICAgICBjb250cm9sSW5kZXggPSAwO1xuICAgICAgICAgIGZpZWxkc2V0SW5kZXggPSAwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEZpZWxkSW50ZXJhY3Rpb25BcGkuRklFTERfUE9TSVRJT05TLkJPVFRPTV9PRl9GT1JNOlxuICAgICAgICAgIC8vIEFkZGluZyBmaWVsZCB0byB0aGUgYm90dG9tIG9mIHRoZSBmb3JtXG4gICAgICAgICAgZmllbGRzZXRJbmRleCA9IHRoaXMuZm9ybS5maWVsZHNldHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICBjb250cm9sSW5kZXggPSB0aGlzLmZvcm0uZmllbGRzZXRzW2ZpZWxkc2V0SW5kZXhdLmNvbnRyb2xzLmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGZpZWxkc2V0SW5kZXggIT09IC0xICYmIGNvbnRyb2xJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3Qgbm92b0NvbnRyb2wgPSB0aGlzLmZvcm1VdGlscy5nZXRDb250cm9sRm9yRmllbGQobWV0YUZvck5ld0ZpZWxkLCB0aGlzLmh0dHAsIHt9KTtcbiAgICAgICAgbm92b0NvbnRyb2wuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGZvcm1Db250cm9sID0gbmV3IE5vdm9Gb3JtQ29udHJvbChpbml0aWFsVmFsdWUsIG5vdm9Db250cm9sKTtcbiAgICAgICAgdGhpcy5mb3JtLmFkZENvbnRyb2wobm92b0NvbnRyb2wua2V5LCBmb3JtQ29udHJvbCk7XG4gICAgICAgIHRoaXMuZm9ybS5maWVsZHNldHNbZmllbGRzZXRJbmRleF0uY29udHJvbHMuc3BsaWNlKGNvbnRyb2xJbmRleCwgMCwgbm92b0NvbnRyb2wpO1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ2FkZENvbnRyb2wnLCB2YWx1ZTogZm9ybUNvbnRyb2wgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQ29udHJvbChrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW2tleV0pIHtcbiAgICAgIC8vIEZpZWxkIGlzIG5vdCBvbiB0aGUgZm9ybVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBsZXQgZmllbGRzZXRJbmRleCA9IC0xO1xuICAgICAgbGV0IGNvbnRyb2xJbmRleCA9IC0xO1xuXG4gICAgICB0aGlzLmZvcm0uZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0LCBmaSkgPT4ge1xuICAgICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChmaWVsZHNldENvbnRyb2wsIGNpKSA9PiB7XG4gICAgICAgICAgaWYgKGZpZWxkc2V0Q29udHJvbC5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgZmllbGRzZXRJbmRleCA9IGZpO1xuICAgICAgICAgICAgY29udHJvbEluZGV4ID0gY2k7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZmllbGRzZXRJbmRleCAhPT0gLTEgJiYgY29udHJvbEluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLmZvcm0ucmVtb3ZlQ29udHJvbChrZXkpO1xuICAgICAgICB0aGlzLmZvcm0uZmllbGRzZXRzW2ZpZWxkc2V0SW5kZXhdLmNvbnRyb2xzLnNwbGljZShjb250cm9sSW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3JlbW92ZUNvbnRyb2wnLCB2YWx1ZToga2V5IH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlYm91bmNlKGZ1bmM6ICgpID0+IHZvaWQsIHdhaXQgPSA1MCkge1xuICAgIGxldCBoO1xuICAgIGNsZWFyVGltZW91dChoKTtcbiAgICBoID0gc2V0VGltZW91dCgoKSA9PiBmdW5jKCksIHdhaXQpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmlnZ2VyRXZlbnQoZXZlbnQ6IElGaWVsZEludGVyYWN0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb3JtICYmIHRoaXMuZm9ybS5maWVsZEludGVyYWN0aW9uRXZlbnRzKSB7XG4gICAgICB0aGlzLmZvcm0uZmllbGRJbnRlcmFjdGlvbkV2ZW50cy5lbWl0KGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==