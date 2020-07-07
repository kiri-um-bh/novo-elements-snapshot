/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/FieldInteractionApi.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
import { EntityPickerResults } from '../picker/extras/entity-picker-results/EntityPickerResults';
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
    Object.defineProperty(FieldInteractionApi.prototype, "form", {
        get: /**
         * @return {?}
         */
        function () {
            return this._form;
        },
        set: /**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            this._form = form;
        },
        enumerable: true,
        configurable: true
    });
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
    Object.defineProperty(FieldInteractionApi.prototype, "appBridge", {
        get: /**
         * @return {?}
         */
        function () {
            return this._appBridge;
        },
        set: /**
         * @param {?} appBridge
         * @return {?}
         */
        function (appBridge) {
            this._appBridge = appBridge;
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
        var control = this.form.controls[key];
        if (!control) {
            console.error('[FieldInteractionAPI] - could not find a control in the form by the key --', key); // tslint:disable-line
            return null;
        }
        return (/** @type {?} */ (control));
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
        // call another public method to avoid a breaking change but still enable stricter types
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGRJbnRlcmFjdGlvbkFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0ZpZWxkSW50ZXJhY3Rpb25BcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUVsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXJDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFnQixNQUFNLHVCQUF1QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25GLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUlyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUVqRztJQUtFLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFVBQUs7Ozs7UUFBRyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsRUFBRCxDQUFDLEVBQUM7SUFFc0IsQ0FBQzs7Ozs7O0lBRXhDLDRCQUFHOzs7OztJQUFILFVBQUksR0FBVyxFQUFFLE9BQWE7UUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsNEJBQUc7Ozs7SUFBSCxVQUFJLEtBQUs7UUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELGtDQUFTOzs7OztJQUFULFVBQVUsT0FBWSxFQUFFLE1BQVk7UUFDbEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDckIsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDOzs7SUF2QkMsNkJBQVk7O0lBQ1osaUNBQWE7O0lBQ2IsK0JBQWlCOzs7OztJQUVMLDhCQUF3Qjs7QUFxQnRDO0lBZUUsNkJBQ1UsT0FBeUIsRUFDekIsWUFBOEIsRUFDOUIsU0FBb0IsRUFDcEIsSUFBZ0IsRUFDaEIsTUFBd0I7UUFMbEMsaUJBTUk7UUFMTSxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUN6QixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBK2hCbEMscUJBQWdCOzs7Ozs7O1FBQUcsVUFDakIsSUFBNEIsRUFDNUIsTUFBbUMsRUFDbkMsc0JBQWlGLEVBQ2pGLGtCQUEyQjtZQUUzQixJQUFJLHNCQUFzQixJQUFJLFlBQVksSUFBSSxJQUFJLElBQUksbUJBQW1CLElBQUksSUFBSSxJQUFJLGdCQUFnQixJQUFJLElBQUksRUFBRTs7b0JBQ3ZHLE1BQU0sR0FBRyxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGtCQUFrQjtnQkFDdEUsMEJBQ0UsT0FBTyxFQUFFLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLHNCQUFzQixDQUFDLElBQ3RFLENBQUMsb0JBQW9CLElBQUksSUFBSSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsRUFDakYsQ0FBQyxNQUFNLElBQUksRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLEVBQ3pCO2FBQ0g7aUJBQU0sSUFBSSxTQUFTLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMzRCxPQUFPO29CQUNMLE9BQU8sbUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDM0IsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLE9BQU8sU0FBUyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQyxFQUFDO1FBV0YsMEJBQXFCOzs7Ozs7UUFBRyxVQUN0QixNQUE4QixFQUM5QixNQUFtQyxFQUNuQyxzQkFBaUc7Ozs7O1FBQ3JELFVBQUMsS0FBYSxFQUFFLElBQWE7WUFDekUsSUFBSSxnQkFBZ0IsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLGNBQWMsRUFBRTtnQkFDdkQsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLGNBQWMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDMUU7aUJBQU0sSUFBSSxDQUFDLG1CQUFtQixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN2SCxPQUFPLElBQUksT0FBTzs7Ozs7Z0JBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTs7d0JBQzNCLEdBQUcsR0FBRyxtQkFBbUIsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUksTUFBTSxDQUFDLFVBQVUsaUJBQVcsS0FBSyxJQUFJLEVBQUUsQ0FBRTtvQkFDMUgsS0FBSSxDQUFDLElBQUk7eUJBQ04sR0FBRyxDQUFDLEdBQUcsQ0FBQzt5QkFDUixJQUFJLENBQ0gsR0FBRzs7OztvQkFBQyxVQUFDLE9BQWtCO3dCQUNyQixJQUFJLE1BQU0sRUFBRTs0QkFDVixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7eUJBQzVCO3dCQUNELE9BQU8sT0FBTyxDQUFDO29CQUNqQixDQUFDLEVBQUMsQ0FDSDt5QkFDQSxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNoQyxDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNLElBQUksc0JBQXNCLEVBQUU7Z0JBQ2pDLElBQUksT0FBTyxJQUFJLE1BQU0sRUFBRTtvQkFDckIsT0FBTyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUMxRDtxQkFBTTtvQkFDTCxPQUFPLHNCQUFzQixFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUM5QzthQUNGO1FBQ0gsQ0FBQyxJQUFBLEVBQUM7SUExbEJDLENBQUM7SUFFSixzQkFBSSxxQ0FBSTs7OztRQUlSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7Ozs7O1FBTkQsVUFBUyxJQUFTO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBTUQsc0JBQUksNkNBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2hGLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOENBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3pGLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0RBQWU7Ozs7UUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDN0YsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNuRSxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHNDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDcEUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx3Q0FBTzs7OztRQUlYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7Ozs7O1FBTkQsVUFBWSxPQUFZO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBTUQsc0JBQUksMkNBQVU7Ozs7UUFJZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDOzs7OztRQU5ELFVBQWUsR0FBVztZQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLDBDQUFTOzs7O1FBSWI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7Ozs7UUFORCxVQUFjLFNBQW9CO1lBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzlCLENBQUM7OztPQUFBOzs7O0lBTU0sa0RBQW9COzs7SUFBM0I7UUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRU0sOENBQWdCOzs7SUFBdkI7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFTSwwQ0FBWTs7O0lBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFTSw0Q0FBYzs7O0lBQXJCO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRU0sbURBQXFCOzs7SUFBNUI7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRU0seUNBQVc7Ozs7SUFBbEIsVUFBbUIsR0FBVztRQUM1QixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLENBQUMsc0JBQXNCO1lBQ3pGLE9BQU8sSUFBSSxDQUFDO1NBQ2I7O1lBRUssUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLEVBQWdCLElBQUssT0FBQSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFwRCxDQUFvRCxFQUFDO1FBQ3JILElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLDZFQUE2RSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsc0JBQXNCO1lBQ3pILE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLG1CQUFBLFFBQVEsRUFBZ0IsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVNLHdDQUFVOzs7O0lBQWpCLFVBQWtCLEdBQVc7UUFDM0IsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtZQUN6RixPQUFPLElBQUksQ0FBQztTQUNiOztZQUVLLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEVBQTRFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7WUFDeEgsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sbUJBQUEsT0FBTyxFQUFtQixDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRU0sc0NBQVE7Ozs7SUFBZixVQUFnQixHQUFXOztZQUNuQixPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUM7U0FDdEI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU0seUNBQVc7Ozs7SUFBbEIsVUFBbUIsR0FBVzs7WUFDdEIsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ3BDLElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVNLDZDQUFlOzs7O0lBQXRCLFVBQXVCLEdBQVc7O1lBQzFCLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQztTQUM3QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVNLHNDQUFROzs7Ozs7SUFBZixVQUNFLEdBQVcsRUFDWCxLQUFVLEVBQ1YsT0FLQzs7WUFFSyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDOzs7Ozs7O0lBRU0sd0NBQVU7Ozs7OztJQUFqQixVQUNFLEdBQVcsRUFDWCxLQUFVLEVBQ1YsT0FLQzs7WUFFSyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDOzs7Ozs7SUFFTSx5Q0FBVzs7Ozs7SUFBbEIsVUFBbUIsR0FBVyxFQUFFLFVBQW1COztZQUMzQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQzdFO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0seUNBQVc7Ozs7O0lBQWxCLFVBQW1CLEdBQVcsRUFBRSxRQUFpQjs7WUFDekMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ3BDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFO1lBQ2pELE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUMzRTtJQUNILENBQUM7Ozs7OztJQUVNLGtDQUFJOzs7OztJQUFYLFVBQVksR0FBVyxFQUFFLFVBQTBCO1FBQTFCLDJCQUFBLEVBQUEsaUJBQTBCOztZQUMzQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDOzs7OztJQUVNLGtDQUFJOzs7O0lBQVgsVUFBWSxHQUFXOztZQUNmLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqRCxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDOzs7OztJQUVNLGdEQUFrQjs7OztJQUF6QixVQUEwQixHQUFXOztZQUM3QixRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7UUFDdEMsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUN4QjtJQUNILENBQUM7Ozs7O0lBRU0sZ0RBQWtCOzs7O0lBQXpCLFVBQTBCLEdBQVc7O1lBQzdCLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztRQUN0QyxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0scUNBQU87Ozs7O0lBQWQsVUFDRSxHQUFXLEVBQ1gsT0FHQzs7WUFFSyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sb0NBQU07Ozs7O0lBQWIsVUFDRSxHQUFXLEVBQ1gsT0FHQzs7WUFFSyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sMkNBQWE7Ozs7O0lBQXBCLFVBQXFCLEdBQVcsRUFBRSxpQkFBMEI7O1lBQ3BELE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFO2dCQUNqRCxPQUFPLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDMUM7U0FDRjtJQUNILENBQUM7Ozs7OztJQUVNLHlDQUFXOzs7OztJQUFsQixVQUNFLEdBQVcsRUFDWCxPQUVDOztZQUVLLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqRCxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sMkNBQWE7Ozs7O0lBQXBCLFVBQ0UsR0FBVyxFQUNYLE9BRUM7O1lBRUssT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ3BDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFO1lBQ2pELE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7Ozs7SUFFTSw0Q0FBYzs7Ozs7SUFBckIsVUFDRSxHQUFXLEVBQ1gsT0FFQzs7WUFFSyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7OztJQUVNLDJDQUFhOzs7OztJQUFwQixVQUNFLEdBQVcsRUFDWCxPQUVDOztZQUVLLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqRCxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sNkNBQWU7Ozs7O0lBQXRCLFVBQ0UsR0FBVyxFQUNYLE9BRUM7O1lBRUssT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ3BDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFO1lBQ2pELE9BQU8sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7Ozs7SUFFTSxvREFBc0I7Ozs7O0lBQTdCLFVBQ0UsR0FBVyxFQUNYLE9BR0M7O1lBRUssT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ3BDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFO1lBQ2pELE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7O0lBRUQsMENBQVk7Ozs7SUFBWixVQUFhLFdBQXlCO1FBQ3BDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7Ozs7OztJQUVNLHdDQUFVOzs7Ozs7OztJQUFqQixVQUFrQixHQUFXLEVBQUUsR0FBVyxFQUFFLElBQWEsRUFBRSxZQUFzQixFQUFFLFFBQWtCOztZQUM3RixPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLE9BQU8sR0FBRztnQkFDaEIsR0FBRyxLQUFBO2dCQUNILElBQUksTUFBQTtnQkFDSixNQUFNLEVBQUUsWUFBWTtnQkFDcEIsUUFBUSxFQUFFLFFBQVEsS0FBSyxLQUFLO2FBQzdCLENBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sd0NBQVU7Ozs7O0lBQWpCLFVBQWtCLEdBQVcsRUFBRSxPQUFlOztZQUN0QyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDMUIsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBRTtnQkFDakQsT0FBTyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7Z0JBQzlCLE9BQU8sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQy9CO2lCQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7Z0JBQy9CLE9BQU8sQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO2FBQ3JDO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUN6RTtJQUNILENBQUM7Ozs7OztJQUVNLDRDQUFjOzs7OztJQUFyQixVQUFzQixHQUFXLEVBQUUsT0FBZ0I7UUFBbkQsaUJBV0M7O1lBVk8sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQzs7WUFDL0MsUUFBUSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7WUFDdEMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDOztZQUM3QixLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDO1FBQzVDLENBQUMsbUJBQUEsUUFBUSxDQUFDLGFBQWEsRUFBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsTUFBTTtZQUNuSCxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ3BEO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTSx3Q0FBVTs7Ozs7SUFBakIsVUFBa0IsR0FBVyxFQUFFLE9BQWlCOztZQUN4QyxPQUFPLEdBQVksSUFBSTtRQUM3QixDQUFDLG1CQUFBLFFBQVEsQ0FBQyxhQUFhLEVBQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQy9FLENBQUM7Ozs7Ozs7SUFFTSx5Q0FBVzs7Ozs7O0lBQWxCLFVBQW1CLEdBQVcsRUFBRSxJQUFZLEVBQUUsS0FBVTs7WUFDaEQsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQ3BDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFO1lBQ2pELE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxNQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0seUNBQVc7Ozs7O0lBQWxCLFVBQW1CLEdBQVcsRUFBRSxJQUFZOztZQUNwQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU0sMENBQVk7Ozs7SUFBbkIsVUFBb0IsR0FBVzs7WUFDdkIsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQ2hDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVNLDBDQUFZOzs7O0lBQW5CLFVBQW9CLEdBQVc7O1lBQ3ZCLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNoQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFTSxzQ0FBUTs7OztJQUFmLFVBQWdCLEdBQVc7UUFDekIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRU0sNkNBQWU7Ozs7O0lBQXRCLFVBQXVCLEdBQVcsRUFBRSxTQUFjOztZQUMxQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7O1lBQ2hDLFdBQVcsR0FBRyxTQUFTOztZQUN2QixRQUFRLEdBQVksSUFBSTtRQUM1QixJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTs7Z0JBQzdDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUM7WUFDckQsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7O29CQUN2QyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUM5QyxJQUFJLE1BQU0sRUFBRTtvQkFDVixjQUFjLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztvQkFDaEMsSUFBSSxjQUFjLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTt3QkFDbkQsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTs0QkFDakQsV0FBVyxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7eUJBQ3REO3dCQUNELE1BQU0sQ0FBQyxPQUFPLG9CQUFPLGNBQWMsR0FBRSxXQUFXLEVBQUMsQ0FBQzt3QkFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUN6QztpQkFDRjthQUNGO2lCQUFNO2dCQUNMLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7b0JBQ2pELFdBQVcsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDO2lCQUN0RDtnQkFDRCx3Q0FBd0M7Z0JBQ3hDLGNBQWMsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsTUFBTTtvQkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLFdBQVcsRUFBRTt3QkFDbEYsUUFBUSxHQUFHLEtBQUssQ0FBQztxQkFDbEI7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7Z0JBQ0gsSUFBSSxRQUFRLEVBQUU7b0JBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsU0FBUyxtQkFBTSxjQUFjLEdBQUUsV0FBVyxHQUFFLENBQUM7aUJBQ3BFO2FBQ0Y7WUFDRCxJQUFJLFFBQVEsRUFBRTtnQkFDWixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssbUJBQU0sY0FBYyxHQUFFLFdBQVcsRUFBQyxFQUFFLENBQUMsQ0FBQzthQUNsRztTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sZ0RBQWtCOzs7OztJQUF6QixVQUEwQixHQUFXLEVBQUUsY0FBc0I7O1lBQ3JELE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTs7Z0JBQzdDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUM7WUFDckQsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7O29CQUN2QyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUM5QyxJQUFJLE1BQU0sRUFBRTtvQkFDVixjQUFjLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztvQkFDaEMsSUFBSSxjQUFjLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTs7NEJBQy9DLE9BQUssR0FBRyxDQUFDLENBQUM7d0JBQ2QsY0FBYyxDQUFDLE9BQU87Ozs7O3dCQUFDLFVBQUMsR0FBRyxFQUFFLENBQUM7NEJBQzVCLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO2dDQUMxQixJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssY0FBYyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssY0FBYyxFQUFFO29DQUNoRSxPQUFLLEdBQUcsQ0FBQyxDQUFDO2lDQUNYOzZCQUNGO2lDQUFNO2dDQUNMLElBQUksR0FBRyxLQUFLLGNBQWMsRUFBRTtvQ0FDMUIsT0FBSyxHQUFHLENBQUMsQ0FBQztpQ0FDWDs2QkFDRjt3QkFDSCxDQUFDLEVBQUMsQ0FBQzt3QkFDSCxJQUFJLE9BQUssS0FBSyxDQUFDLENBQUMsRUFBRTs0QkFDaEIsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7eUJBQ2pDO3dCQUNELE1BQU0sQ0FBQyxPQUFPLG9CQUFPLGNBQWMsQ0FBQyxDQUFDO3dCQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7cUJBQ3pDO2lCQUNGO2FBQ0Y7aUJBQU07O29CQUNELE9BQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2QsY0FBYyxDQUFDLE9BQU87Ozs7O2dCQUFDLFVBQUMsR0FBRyxFQUFFLENBQUM7b0JBQzVCLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO3dCQUMxQixJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssY0FBYyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssY0FBYyxFQUFFOzRCQUNoRSxPQUFLLEdBQUcsQ0FBQyxDQUFDO3lCQUNYO3FCQUNGO3lCQUFNO3dCQUNMLElBQUksR0FBRyxLQUFLLGNBQWMsRUFBRTs0QkFDMUIsT0FBSyxHQUFHLENBQUMsQ0FBQzt5QkFDWDtxQkFDRjtnQkFDSCxDQUFDLEVBQUMsQ0FBQztnQkFDSCxJQUFJLE9BQUssS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDaEIsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ2pDO2dCQUNELElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLFNBQVMsbUJBQU0sY0FBYyxFQUFFLENBQUM7YUFDdkQ7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUNqRjtJQUNILENBQUM7Ozs7Ozs7SUFFTSxnREFBa0I7Ozs7OztJQUF6QixVQUNFLEdBQVcsRUFDWCxNQU9DLEVBQ0QsTUFBWTtRQUVaLHdGQUF3RjtRQUN4RixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLG1CQUFBLE1BQU0sRUFBMEIsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7O0lBRU0sZ0RBQWtCOzs7Ozs7SUFBekIsVUFBMEIsR0FBVyxFQUFFLElBQTRCLEVBQUUsTUFBbUM7O1lBQ2hHLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUMzQyxJQUFBLG1CQUF5SCxFQUF2SCxvQ0FBZSxFQUFFLDhDQUFvQixFQUFFLGtEQUFzQixFQUFFLGtCQUFNLEVBQUUsd0JBQVMsRUFBRSwwQ0FBcUM7O2dCQUN6SCxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxDQUFDOztnQkFFbkYsU0FBUyx3QkFDVixDQUFDLGtCQUFrQixJQUFJLEVBQUUsa0JBQWtCLG9CQUFBLEVBQUUsQ0FBQyxFQUM5QyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxlQUFlLGlCQUFBLEVBQUUsQ0FBQyxFQUMxRCxDQUFDLG9CQUFvQixJQUFJLEVBQUUsb0JBQW9CLHNCQUFBLEVBQUUsQ0FBQyxFQUNsRCxDQUFDLHNCQUFzQixJQUFJLEVBQUUsc0JBQXNCLHdCQUFBLEVBQUUsQ0FBQyxFQUN0RCxDQUFDLFNBQVMsSUFBSSxFQUFFLFNBQVMsV0FBQSxFQUFFLENBQUMsRUFDNUIsQ0FBQyxhQUFhLElBQUksYUFBYSxDQUFDLElBQ25DLGVBQWUsRUFDYixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsSUFBSSxDQUFDLHFCQUFxQixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsR0FDcEk7WUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUMzRTtJQUNILENBQUM7Ozs7OztJQUVELHlEQUEyQjs7Ozs7SUFBM0IsVUFBNEIsR0FBVyxFQUFFLFVBQXNDOztZQUN2RSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMseUJBQXlCLEVBQUU7WUFDakQsT0FBTztTQUNSOztZQUVLLE1BQU0sd0JBQ1AsT0FBTyxDQUFDLE1BQU0sRUFDZCxVQUFVLENBQ2Q7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7Ozs7SUF1Qk8sMkRBQTZCOzs7OztJQUFyQyxVQUFzQyxtQkFBd0M7UUFDNUUsUUFBUSxtQkFBbUIsRUFBRTtZQUMzQixLQUFLLGVBQWU7Z0JBQ2xCLE9BQU8sbUJBQW1CLENBQUM7WUFDN0I7Z0JBQ0UsT0FBTyxTQUFTLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7Ozs7SUFpQ00sd0NBQVU7Ozs7O0lBQWpCLFVBQWtCLEdBQVcsRUFBRSxPQUFnQjtRQUEvQyxpQkF3QkM7O1lBdkJPLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtZQUNqRCxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZELE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDckMsVUFBVTtnQkFDVixZQUFZLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVOzs7Z0JBQUM7b0JBQ2xDLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUM1QixLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzlELEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLHdCQUF3QixFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN4RCxDQUFDLEdBQUUsS0FBSyxDQUFDLENBQUM7YUFDWDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7Z0JBQ3hELFlBQVksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDckMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDckQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSx3QkFBd0IsQ0FBQyxFQUFFO29CQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ3hDO2FBQ0Y7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ3pFO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFFTSx3Q0FBVTs7Ozs7OztJQUFqQixVQUNFLEdBQVcsRUFDWCxlQUFvQixFQUNwQixRQUFrRSxFQUNsRSxZQUFrQjtRQURsQix5QkFBQSxFQUFBLFdBQW1CLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxXQUFXO1FBR2xFLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRTtZQUNqRCxPQUFPLENBQUMsS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7WUFDcEcsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFO1lBQ3hCLHFEQUFxRDtZQUNyRCxlQUFlLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUM7U0FDNUM7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMzQywrQkFBK0I7WUFDL0IsT0FBTyxJQUFJLENBQUM7U0FDYjs7WUFFSyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDOztZQUNuQyxhQUFhOztZQUFFLFlBQVk7UUFDL0IsSUFBSSxPQUFPLEVBQUU7WUFDWCxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbkIsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRWxCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7O1lBQUMsVUFBQyxRQUFRLEVBQUUsRUFBRTtnQkFDdkMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7OztnQkFBQyxVQUFDLGVBQWUsRUFBRSxFQUFFO29CQUM1QyxJQUFJLGVBQWUsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO3dCQUMvQixhQUFhLEdBQUcsRUFBRSxDQUFDO3dCQUNuQixZQUFZLEdBQUcsRUFBRSxDQUFDO3FCQUNuQjtnQkFDSCxDQUFDLEVBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1lBRUgsK0NBQStDO1lBQy9DLFFBQVEsUUFBUSxFQUFFO2dCQUNoQixLQUFLLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxXQUFXO29CQUNsRCxrQ0FBa0M7b0JBQ2xDLDBCQUEwQjtvQkFDMUIsTUFBTTtnQkFDUixLQUFLLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxXQUFXO29CQUNsRCxrQ0FBa0M7b0JBQ2xDLFlBQVksSUFBSSxDQUFDLENBQUM7b0JBQ2xCLE1BQU07Z0JBQ1IsS0FBSyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsV0FBVztvQkFDbEQsc0NBQXNDO29CQUN0QyxZQUFZLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixhQUFhLEdBQUcsQ0FBQyxDQUFDO29CQUNsQixNQUFNO2dCQUNSLEtBQUssbUJBQW1CLENBQUMsZUFBZSxDQUFDLGNBQWM7b0JBQ3JELHlDQUF5QztvQkFDekMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQy9DLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUNsRSxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtZQUVELElBQUksYUFBYSxLQUFLLENBQUMsQ0FBQyxJQUFJLFlBQVksS0FBSyxDQUFDLENBQUMsRUFBRTs7b0JBQ3pDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztnQkFDckYsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7O29CQUNyQixXQUFXLEdBQUcsSUFBSSxlQUFlLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQztnQkFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUNqRixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO2FBQ2hGO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVNLDJDQUFhOzs7O0lBQXBCLFVBQXFCLEdBQVc7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLDJCQUEyQjtZQUMzQixPQUFPLElBQUksQ0FBQztTQUNiOztZQUNLLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUNwQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTs7Z0JBQzdDLGVBQWEsR0FBRyxDQUFDLENBQUM7O2dCQUNsQixjQUFZLEdBQUcsQ0FBQyxDQUFDO1lBRXJCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7O1lBQUMsVUFBQyxRQUFRLEVBQUUsRUFBRTtnQkFDdkMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7OztnQkFBQyxVQUFDLGVBQWUsRUFBRSxFQUFFO29CQUM1QyxJQUFJLGVBQWUsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO3dCQUMvQixlQUFhLEdBQUcsRUFBRSxDQUFDO3dCQUNuQixjQUFZLEdBQUcsRUFBRSxDQUFDO3FCQUNuQjtnQkFDSCxDQUFDLEVBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1lBRUgsSUFBSSxlQUFhLEtBQUssQ0FBQyxDQUFDLElBQUksY0FBWSxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDM0U7U0FDRjtJQUNILENBQUM7Ozs7OztJQUVNLHNDQUFROzs7OztJQUFmLFVBQWdCLElBQWdCLEVBQUUsSUFBUztRQUFULHFCQUFBLEVBQUEsU0FBUzs7WUFDckMsQ0FBTTtRQUNWLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixDQUFDLEdBQUcsVUFBVTs7O1FBQUMsY0FBTSxPQUFBLElBQUksRUFBRSxFQUFOLENBQU0sR0FBRSxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFTywwQ0FBWTs7Ozs7SUFBcEIsVUFBcUIsS0FBNkI7UUFDaEQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBL3VCYSxtQ0FBZSxHQUFHO1FBQzlCLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFdBQVcsRUFBRSxhQUFhO1FBQzFCLGNBQWMsRUFBRSxnQkFBZ0I7S0FDakMsQ0FBQzs7Z0JBYkgsVUFBVTs7OztnQkFyQ0YsZ0JBQWdCO2dCQUNoQixnQkFBZ0I7Z0JBRmhCLFNBQVM7Z0JBTlQsVUFBVTtnQkFZVixnQkFBZ0I7O0lBd3hCekIsMEJBQUM7Q0FBQSxBQXh2QkQsSUF3dkJDO1NBdnZCWSxtQkFBbUI7OztJQU85QixvQ0FLRTs7Ozs7SUFYRix1Q0FBc0I7Ozs7O0lBQ3RCLG9DQUFtQjs7Ozs7SUFDbkIsMENBQTRCOzs7OztJQUM1Qix5Q0FBOEI7Ozs7O0lBQzlCLGdEQUErQjs7SUE2aUIvQiwrQ0FvQkU7O0lBV0Ysb0RBNkJFOzs7OztJQS9sQkEsc0NBQWlDOzs7OztJQUNqQywyQ0FBc0M7Ozs7O0lBQ3RDLHdDQUE0Qjs7Ozs7SUFDNUIsbUNBQXdCOzs7OztJQUN4QixxQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG4vLyBWZW5kb3JcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0Zvcm1Db250cm9sIH0gZnJvbSAnLi9Ob3ZvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IHsgTm92b0NvbnRyb2xDb25maWcgfSBmcm9tICcuL0Zvcm1Db250cm9scyc7XG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtLXV0aWxzL0Zvcm1VdGlscyc7XG5pbXBvcnQgeyBOb3ZvVG9hc3RTZXJ2aWNlLCBUb2FzdE9wdGlvbnMgfSBmcm9tICcuLi90b2FzdC9Ub2FzdFNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b01vZGFsU2VydmljZSB9IGZyb20gJy4uL21vZGFsL01vZGFsU2VydmljZSc7XG5pbXBvcnQgeyBDb250cm9sQ29uZmlybU1vZGFsLCBDb250cm9sUHJvbXB0TW9kYWwgfSBmcm9tICcuL0ZpZWxkSW50ZXJhY3Rpb25Nb2RhbHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgQXBwQnJpZGdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBwLWJyaWRnZS9BcHBCcmlkZ2UnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBJRmllbGRJbnRlcmFjdGlvbkV2ZW50LCBOb3ZvRmllbGRzZXQsIFJlc3VsdHNUZW1wbGF0ZVR5cGUgfSBmcm9tICcuL0Zvcm1JbnRlcmZhY2VzJztcbmltcG9ydCB7IE1vZGlmeVBpY2tlckNvbmZpZ0FyZ3MsIE9wdGlvbnNGdW5jdGlvbiwgQ3VzdG9tSHR0cCB9IGZyb20gJy4vRmllbGRJbnRlcmFjdGlvbkFwaVR5cGVzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRW50aXR5UGlja2VyUmVzdWx0cyB9IGZyb20gJy4uL3BpY2tlci9leHRyYXMvZW50aXR5LXBpY2tlci1yZXN1bHRzL0VudGl0eVBpY2tlclJlc3VsdHMnO1xuXG5jbGFzcyBDdXN0b21IdHRwSW1wbCBpbXBsZW1lbnRzIEN1c3RvbUh0dHAge1xuICB1cmw6IHN0cmluZztcbiAgb3B0aW9uczogYW55O1xuICBtYXBGbiA9ICh4KSA9PiB4O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiBDdXN0b21IdHRwIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbWFwKG1hcEZuKTogQ3VzdG9tSHR0cCB7XG4gICAgdGhpcy5tYXBGbiA9IG1hcEZuO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3Vic2NyaWJlKHJlc29sdmU6IGFueSwgcmVqZWN0PzogYW55KTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMudXJsLCB0aGlzLm9wdGlvbnMpXG4gICAgICAucGlwZShtYXAodGhpcy5tYXBGbikpXG4gICAgICAuc3Vic2NyaWJlKHJlc29sdmUsIHJlamVjdCk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkSW50ZXJhY3Rpb25BcGkge1xuICBwcml2YXRlIF9nbG9iYWxzOiBhbnk7XG4gIHByaXZhdGUgX2Zvcm06IGFueTtcbiAgcHJpdmF0ZSBfY3VycmVudEtleTogc3RyaW5nO1xuICBwcml2YXRlIF9hcHBCcmlkZ2U6IEFwcEJyaWRnZTtcbiAgcHJpdmF0ZSBhc3luY0Jsb2NrVGltZW91dDogYW55O1xuXG4gIHB1YmxpYyBzdGF0aWMgRklFTERfUE9TSVRJT05TID0ge1xuICAgIEFCT1ZFX0ZJRUxEOiAnQUJPVkVfRklFTEQnLFxuICAgIEJFTE9XX0ZJRUxEOiAnQkVMT1dfRklFTEQnLFxuICAgIFRPUF9PRl9GT1JNOiAnVE9QX09GX0ZPUk0nLFxuICAgIEJPVFRPTV9PRl9GT1JNOiAnQk9UVE9NX09GX0ZPUk0nLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdG9hc3RlcjogTm92b1RvYXN0U2VydmljZSxcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTm92b01vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIGZvcm1VdGlsczogRm9ybVV0aWxzLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSxcbiAgKSB7fVxuXG4gIHNldCBmb3JtKGZvcm06IGFueSkge1xuICAgIHRoaXMuX2Zvcm0gPSBmb3JtO1xuICB9XG5cbiAgZ2V0IGZvcm0oKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybTtcbiAgfVxuXG4gIGdldCBhc3NvY2lhdGlvbnMoKTogb2JqZWN0IHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmhhc093blByb3BlcnR5KCdhc3NvY2lhdGlvbnMnKSA/IHRoaXMuZm9ybS5hc3NvY2lhdGlvbnMgOiB7fTtcbiAgfVxuXG4gIGdldCBjdXJyZW50RW50aXR5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudEVudGl0eScpID8gdGhpcy5mb3JtLmN1cnJlbnRFbnRpdHkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgY3VycmVudEVudGl0eUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudEVudGl0eUlkJykgPyB0aGlzLmZvcm0uY3VycmVudEVudGl0eUlkIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGlzRWRpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmhhc093blByb3BlcnR5KCdlZGl0JykgPyB0aGlzLmZvcm0uZWRpdCA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGlzQWRkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0uaGFzT3duUHJvcGVydHkoJ2VkaXQnKSA/ICF0aGlzLmZvcm0uZWRpdCA6IGZhbHNlO1xuICB9XG5cbiAgc2V0IGdsb2JhbHMoZ2xvYmFsczogYW55KSB7XG4gICAgdGhpcy5fZ2xvYmFscyA9IGdsb2JhbHM7XG4gIH1cblxuICBnZXQgZ2xvYmFscygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9nbG9iYWxzO1xuICB9XG5cbiAgc2V0IGN1cnJlbnRLZXkoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jdXJyZW50S2V5ID0ga2V5O1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRLZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEtleTtcbiAgfVxuXG4gIHNldCBhcHBCcmlkZ2UoYXBwQnJpZGdlOiBBcHBCcmlkZ2UpIHtcbiAgICB0aGlzLl9hcHBCcmlkZ2UgPSBhcHBCcmlkZ2U7XG4gIH1cblxuICBnZXQgYXBwQnJpZGdlKCk6IEFwcEJyaWRnZSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcEJyaWRnZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0FjdGl2ZUNvbnRyb2xWYWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmdldFZhbHVlKHRoaXMuY3VycmVudEtleSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlQ29udHJvbCgpOiBOb3ZvRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRyb2wodGhpcy5jdXJyZW50S2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3RpdmVLZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50S2V5O1xuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZVZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUodGhpcy5jdXJyZW50S2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3RpdmVJbml0aWFsVmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbml0aWFsVmFsdWUodGhpcy5jdXJyZW50S2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWVsZFNldChrZXk6IHN0cmluZyk6IE5vdm9GaWVsZHNldCB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tGaWVsZEludGVyYWN0aW9uQVBJXSAtIGludmFsaWQgb3IgbWlzc2luZyBcImtleVwiJyk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkU2V0ID0gdGhpcy5mb3JtLmZpZWxkc2V0cy5maW5kKChmczogTm92b0ZpZWxkc2V0KSA9PiBmcy5rZXkgJiYgZnMua2V5LnRvTG93ZXJDYXNlKCkgPT09IGtleS50b0xvd2VyQ2FzZSgpKTtcbiAgICBpZiAoIWZpZWxkU2V0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRmllbGRJbnRlcmFjdGlvbkFQSV0gLSBjb3VsZCBub3QgZmluZCBhIGZpZWxkc2V0IGluIHRoZSBmb3JtIGJ5IHRoZSBrZXkgLS0nLCBrZXkpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmllbGRTZXQgYXMgTm92b0ZpZWxkc2V0O1xuICB9XG5cbiAgcHVibGljIGdldENvbnRyb2woa2V5OiBzdHJpbmcpOiBOb3ZvRm9ybUNvbnRyb2wge1xuICAgIGlmICgha2V5KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRmllbGRJbnRlcmFjdGlvbkFQSV0gLSBpbnZhbGlkIG9yIG1pc3NpbmcgXCJrZXlcIicpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5mb3JtLmNvbnRyb2xzW2tleV07XG4gICAgaWYgKCFjb250cm9sKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRmllbGRJbnRlcmFjdGlvbkFQSV0gLSBjb3VsZCBub3QgZmluZCBhIGNvbnRyb2wgaW4gdGhlIGZvcm0gYnkgdGhlIGtleSAtLScsIGtleSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sIGFzIE5vdm9Gb3JtQ29udHJvbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRWYWx1ZShrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICByZXR1cm4gY29udHJvbC52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0UmF3VmFsdWUoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgcmV0dXJuIGNvbnRyb2wucmF3VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIGdldEluaXRpYWxWYWx1ZShrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICByZXR1cm4gY29udHJvbC5pbml0aWFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIHNldFZhbHVlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIHZhbHVlOiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U/OiBib29sZWFuO1xuICAgICAgZW1pdFZpZXdUb01vZGVsQ2hhbmdlPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3ZhbHVlJywgdmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHBhdGNoVmFsdWUoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgdmFsdWU6IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICAgIGVtaXRNb2RlbFRvVmlld0NoYW5nZT86IGJvb2xlYW47XG4gICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnNldFZhbHVlKHZhbHVlLCBvcHRpb25zKTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAndmFsdWUnLCB2YWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0UmVhZE9ubHkoa2V5OiBzdHJpbmcsIGlzUmVhZE9ubHk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5zZXRSZWFkT25seShpc1JlYWRPbmx5KTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAncmVhZE9ubHknLCB2YWx1ZTogaXNSZWFkT25seSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0UmVxdWlyZWQoa2V5OiBzdHJpbmcsIHJlcXVpcmVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuc2V0UmVxdWlyZWQocmVxdWlyZWQpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdyZXF1aXJlZCcsIHZhbHVlOiByZXF1aXJlZCB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGlkZShrZXk6IHN0cmluZywgY2xlYXJWYWx1ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5oaWRlKGNsZWFyVmFsdWUpO1xuICAgICAgdGhpcy5kaXNhYmxlKGtleSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdoaWRkZW4nLCB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2hvdyhrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnNob3coKTtcbiAgICAgIHRoaXMuZW5hYmxlKGtleSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdoaWRkZW4nLCB2YWx1ZTogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhpZGVGaWVsZFNldEhlYWRlcihrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGZpZWxkU2V0ID0gdGhpcy5nZXRGaWVsZFNldChrZXkpO1xuICAgIGlmIChmaWVsZFNldCkge1xuICAgICAgZmllbGRTZXQuaGlkZGVuID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2hvd0ZpZWxkU2V0SGVhZGVyKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgZmllbGRTZXQgPSB0aGlzLmdldEZpZWxkU2V0KGtleSk7XG4gICAgaWYgKGZpZWxkU2V0KSB7XG4gICAgICBmaWVsZFNldC5oaWRkZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGlzYWJsZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5kaXNhYmxlKG9wdGlvbnMpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdyZWFkT25seScsIHZhbHVlOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBlbmFibGUoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuZW5hYmxlKG9wdGlvbnMpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdyZWFkT25seScsIHZhbHVlOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbWFya0FzSW52YWxpZChrZXk6IHN0cmluZywgdmFsaWRhdGlvbk1lc3NhZ2U/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgY29udHJvbC5tYXJrQXNJbnZhbGlkKHZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbWFya0FzRGlydHkoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eShvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbWFya0FzUGVuZGluZyhcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLm1hcmtBc1BlbmRpbmcob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1hcmtBc1ByaXN0aW5lKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzUHJpc3RpbmUob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1hcmtBc1RvdWNoZWQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNVbnRvdWNoZWQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5tYXJrQXNVbnRvdWNoZWQob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5VG9hc3QodG9hc3RDb25maWc6IFRvYXN0T3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRvYXN0ZXIpIHtcbiAgICAgIHRoaXMudG9hc3Rlci5hbGVydCh0b2FzdENvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRpc3BsYXlUaXAoa2V5OiBzdHJpbmcsIHRpcDogc3RyaW5nLCBpY29uPzogc3RyaW5nLCBhbGxvd0Rpc21pc3M/OiBib29sZWFuLCBzYW5pdGl6ZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC50aXBXZWxsID0ge1xuICAgICAgICB0aXAsXG4gICAgICAgIGljb24sXG4gICAgICAgIGJ1dHRvbjogYWxsb3dEaXNtaXNzLFxuICAgICAgICBzYW5pdGl6ZTogc2FuaXRpemUgIT09IGZhbHNlLCAvLyBkZWZhdWx0cyB0byB0cnVlIHdoZW4gdW5kZWZpbmVkXG4gICAgICB9O1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICd0aXBXZWxsJywgdmFsdWU6IHRpcCB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0VG9vbHRpcChrZXk6IHN0cmluZywgdG9vbHRpcDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wudG9vbHRpcCA9IHRvb2x0aXA7XG4gICAgICBpZiAodG9vbHRpcC5sZW5ndGggPj0gNDAgJiYgdG9vbHRpcC5sZW5ndGggPD0gNDAwKSB7XG4gICAgICAgIGNvbnRyb2wudG9vbHRpcFNpemUgPSAnbGFyZ2UnO1xuICAgICAgICBjb250cm9sLnRvb2x0aXBQcmVsaW5lID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodG9vbHRpcC5sZW5ndGggPiA0MDApIHtcbiAgICAgICAgY29udHJvbC50b29sdGlwU2l6ZSA9ICdleHRyYS1sYXJnZSc7XG4gICAgICB9XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3Rvb2x0aXAnLCB2YWx1ZTogdG9vbHRpcCB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29uZmlybUNoYW5nZXMoa2V5OiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5nZXRQcm9wZXJ0eShrZXksICd2YWx1ZUhpc3RvcnknKTtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IGhpc3RvcnlbaGlzdG9yeS5sZW5ndGggLSAyXTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoa2V5KTtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnbGFiZWwnKTtcbiAgICAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBhbnkpLmJsdXIoKTtcbiAgICByZXR1cm4gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihDb250cm9sQ29uZmlybU1vZGFsLCB7IG9sZFZhbHVlLCBuZXdWYWx1ZSwgbGFiZWwsIG1lc3NhZ2UsIGtleSB9KS5vbkNsb3NlZC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoa2V5LCBvbGRWYWx1ZSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHByb21wdFVzZXIoa2V5OiBzdHJpbmcsIGNoYW5nZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3Qgc2hvd1llczogYm9vbGVhbiA9IHRydWU7XG4gICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgYW55KS5ibHVyKCk7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQ29udHJvbFByb21wdE1vZGFsLCB7IGNoYW5nZXMsIGtleSB9KS5vbkNsb3NlZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQcm9wZXJ0eShrZXk6IHN0cmluZywgcHJvcDogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2xbcHJvcF0gPSB2YWx1ZTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wLCB2YWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0UHJvcGVydHkoa2V5OiBzdHJpbmcsIHByb3A6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIHJldHVybiBjb250cm9sW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBpc1ZhbHVlRW1wdHkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoa2V5KTtcbiAgICByZXR1cm4gSGVscGVycy5pc0VtcHR5KHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBpc1ZhbHVlQmxhbmsoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoa2V5KTtcbiAgICByZXR1cm4gSGVscGVycy5pc0JsYW5rKHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBoYXNGaWVsZChrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZm9ybS5jb250cm9sc1trZXldO1xuICB9XG5cbiAgcHVibGljIGFkZFN0YXRpY09wdGlvbihrZXk6IHN0cmluZywgbmV3T3B0aW9uOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgbGV0IG9wdGlvblRvQWRkID0gbmV3T3B0aW9uO1xuICAgIGxldCBpc1VuaXF1ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgbGV0IGN1cnJlbnRPcHRpb25zID0gdGhpcy5nZXRQcm9wZXJ0eShrZXksICdvcHRpb25zJyk7XG4gICAgICBpZiAoIWN1cnJlbnRPcHRpb25zIHx8ICFjdXJyZW50T3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXRQcm9wZXJ0eShrZXksICdjb25maWcnKTtcbiAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgIGN1cnJlbnRPcHRpb25zID0gY29uZmlnLm9wdGlvbnM7XG4gICAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25zICYmIEFycmF5LmlzQXJyYXkoY3VycmVudE9wdGlvbnMpKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudE9wdGlvbnNbMF0udmFsdWUgJiYgIW9wdGlvblRvQWRkLnZhbHVlKSB7XG4gICAgICAgICAgICAgIG9wdGlvblRvQWRkID0geyB2YWx1ZTogbmV3T3B0aW9uLCBsYWJlbDogbmV3T3B0aW9uIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25maWcub3B0aW9ucyA9IFsuLi5jdXJyZW50T3B0aW9ucywgb3B0aW9uVG9BZGRdO1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICdjb25maWcnLCBjb25maWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25zWzBdLnZhbHVlICYmICFvcHRpb25Ub0FkZC52YWx1ZSkge1xuICAgICAgICAgIG9wdGlvblRvQWRkID0geyB2YWx1ZTogbmV3T3B0aW9uLCBsYWJlbDogbmV3T3B0aW9uIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5zdXJlIGR1cGxpY2F0ZSB2YWx1ZXMgYXJlIG5vdCBhZGRlZFxuICAgICAgICBjdXJyZW50T3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICBpZiAoKG9wdGlvbi52YWx1ZSAmJiBvcHRpb24udmFsdWUgPT09IG9wdGlvblRvQWRkLnZhbHVlKSB8fCBvcHRpb24gPT09IG9wdGlvblRvQWRkKSB7XG4gICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc1VuaXF1ZSkge1xuICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnb3B0aW9ucycsIFsuLi5jdXJyZW50T3B0aW9ucywgb3B0aW9uVG9BZGRdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzVW5pcXVlKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnb3B0aW9ucycsIHZhbHVlOiBbLi4uY3VycmVudE9wdGlvbnMsIG9wdGlvblRvQWRkXSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlU3RhdGljT3B0aW9uKGtleTogc3RyaW5nLCBvcHRpb25Ub1JlbW92ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGxldCBjdXJyZW50T3B0aW9ucyA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnb3B0aW9ucycpO1xuICAgICAgaWYgKCFjdXJyZW50T3B0aW9ucyB8fCAhY3VycmVudE9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJyk7XG4gICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zO1xuICAgICAgICAgIGlmIChjdXJyZW50T3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KGN1cnJlbnRPcHRpb25zKSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgICAgICBjdXJyZW50T3B0aW9ucy5mb3JFYWNoKChvcHQsIGkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG9wdC52YWx1ZSB8fCBvcHQubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0LnZhbHVlID09PSBvcHRpb25Ub1JlbW92ZSB8fCBvcHQubGFiZWwgPT09IG9wdGlvblRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChvcHQgPT09IG9wdGlvblRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgY3VycmVudE9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbmZpZy5vcHRpb25zID0gWy4uLmN1cnJlbnRPcHRpb25zXTtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJywgY29uZmlnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBjdXJyZW50T3B0aW9ucy5mb3JFYWNoKChvcHQsIGkpID0+IHtcbiAgICAgICAgICBpZiAob3B0LnZhbHVlIHx8IG9wdC5sYWJlbCkge1xuICAgICAgICAgICAgaWYgKG9wdC52YWx1ZSA9PT0gb3B0aW9uVG9SZW1vdmUgfHwgb3B0LmxhYmVsID09PSBvcHRpb25Ub1JlbW92ZSkge1xuICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvcHQgPT09IG9wdGlvblRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgY3VycmVudE9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ29wdGlvbnMnLCBbLi4uY3VycmVudE9wdGlvbnNdKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnb3B0aW9ucycsIHZhbHVlOiBjb250cm9sLm9wdGlvbnMgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1vZGlmeVBpY2tlckNvbmZpZyhcbiAgICBrZXk6IHN0cmluZyxcbiAgICBjb25maWc6IHtcbiAgICAgIGZvcm1hdD86IHN0cmluZztcbiAgICAgIG9wdGlvbnNVcmw/OiBzdHJpbmc7XG4gICAgICBvcHRpb25zVXJsQnVpbGRlcj86IEZ1bmN0aW9uO1xuICAgICAgb3B0aW9uc1Byb21pc2U/OiBhbnk7XG4gICAgICBvcHRpb25zPzogYW55W107XG4gICAgICByZXN1bHRzVGVtcGxhdGVUeXBlPzogUmVzdWx0c1RlbXBsYXRlVHlwZTtcbiAgICB9LFxuICAgIG1hcHBlcj86IGFueSxcbiAgKTogdm9pZCB7XG4gICAgLy8gY2FsbCBhbm90aGVyIHB1YmxpYyBtZXRob2QgdG8gYXZvaWQgYSBicmVha2luZyBjaGFuZ2UgYnV0IHN0aWxsIGVuYWJsZSBzdHJpY3RlciB0eXBlc1xuICAgIHRoaXMubXV0YXRlUGlja2VyQ29uZmlnKGtleSwgY29uZmlnIGFzIE1vZGlmeVBpY2tlckNvbmZpZ0FyZ3MsIG1hcHBlcik7XG4gIH1cblxuICBwdWJsaWMgbXV0YXRlUGlja2VyQ29uZmlnKGtleTogc3RyaW5nLCBhcmdzOiBNb2RpZnlQaWNrZXJDb25maWdBcmdzLCBtYXBwZXI/OiAoaXRlbTogdW5rbm93bikgPT4gdW5rbm93bik6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb25zdCB7IG1pblNlYXJjaExlbmd0aCwgZW5hYmxlSW5maW5pdGVTY3JvbGwsIGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IsIGZvcm1hdCwgZ2V0TGFiZWxzLCBlbXB0eVBpY2tlck1lc3NhZ2UgfSA9IGNvbnRyb2wuY29uZmlnO1xuICAgICAgY29uc3Qgb3B0aW9uc0NvbmZpZyA9IHRoaXMuZ2V0T3B0aW9uc0NvbmZpZyhhcmdzLCBtYXBwZXIsIGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IsIGZvcm1hdCk7XG5cbiAgICAgIGNvbnN0IG5ld0NvbmZpZzogTm92b0NvbnRyb2xDb25maWdbJ2NvbmZpZyddID0ge1xuICAgICAgICAuLi4oZW1wdHlQaWNrZXJNZXNzYWdlICYmIHsgZW1wdHlQaWNrZXJNZXNzYWdlIH0pLFxuICAgICAgICAuLi4oTnVtYmVyLmlzSW50ZWdlcihtaW5TZWFyY2hMZW5ndGgpICYmIHsgbWluU2VhcmNoTGVuZ3RoIH0pLFxuICAgICAgICAuLi4oZW5hYmxlSW5maW5pdGVTY3JvbGwgJiYgeyBlbmFibGVJbmZpbml0ZVNjcm9sbCB9KSxcbiAgICAgICAgLi4uKGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IgJiYgeyBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yIH0pLFxuICAgICAgICAuLi4oZ2V0TGFiZWxzICYmIHsgZ2V0TGFiZWxzIH0pLFxuICAgICAgICAuLi4ob3B0aW9uc0NvbmZpZyAmJiBvcHRpb25zQ29uZmlnKSxcbiAgICAgICAgcmVzdWx0c1RlbXBsYXRlOlxuICAgICAgICAgIGNvbnRyb2wuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSB8fCAoJ3Jlc3VsdHNUZW1wbGF0ZVR5cGUnIGluIGFyZ3MgJiYgdGhpcy5nZXRBcHByb3ByaWF0ZVJlc3VsdHNUZW1wbGF0ZShhcmdzLnJlc3VsdHNUZW1wbGF0ZVR5cGUpKSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJywgbmV3Q29uZmlnKTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAncGlja2VyQ29uZmlnJywgdmFsdWU6IGFyZ3MgfSk7XG4gICAgfVxuICB9XG5cbiAgYWRkUHJvcGVydGllc1RvUGlja2VyQ29uZmlnKGtleTogc3RyaW5nLCBwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoIWNvbnRyb2wgfHwgY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgLi4uY29udHJvbC5jb25maWcsXG4gICAgICAuLi5wcm9wZXJ0aWVzLFxuICAgIH07XG5cbiAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ2NvbmZpZycsIGNvbmZpZyk7XG4gICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdwaWNrZXJDb25maWcnLCB2YWx1ZTogcHJvcGVydGllcyB9KTtcbiAgfVxuICBnZXRPcHRpb25zQ29uZmlnID0gKFxuICAgIGFyZ3M6IE1vZGlmeVBpY2tlckNvbmZpZ0FyZ3MsXG4gICAgbWFwcGVyPzogKGl0ZW06IHVua25vd24pID0+IHVua25vd24sXG4gICAgZmlsdGVyZWRPcHRpb25zQ3JlYXRvcj86ICh3aGVyZTogc3RyaW5nKSA9PiAocXVlcnk6IHN0cmluZykgPT4gUHJvbWlzZTx1bmtub3duW10+LFxuICAgIHBpY2tlckNvbmZpZ0Zvcm1hdD86IHN0cmluZyxcbiAgKTogdW5kZWZpbmVkIHwgeyBvcHRpb25zOiB1bmtub3duW10gfSB8IHsgb3B0aW9uczogT3B0aW9uc0Z1bmN0aW9uOyBmb3JtYXQ/OiBzdHJpbmcgfSA9PiB7XG4gICAgaWYgKGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IgfHwgJ29wdGlvbnNVcmwnIGluIGFyZ3MgfHwgJ29wdGlvbnNVcmxCdWlsZGVyJyBpbiBhcmdzIHx8ICdvcHRpb25zUHJvbWlzZScgaW4gYXJncykge1xuICAgICAgY29uc3QgZm9ybWF0ID0gKCdmb3JtYXQnIGluIGFyZ3MgJiYgYXJncy5mb3JtYXQpIHx8IHBpY2tlckNvbmZpZ0Zvcm1hdDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IHRoaXMuY3JlYXRlT3B0aW9uc0Z1bmN0aW9uKGFyZ3MsIG1hcHBlciwgZmlsdGVyZWRPcHRpb25zQ3JlYXRvciksXG4gICAgICAgIC4uLignZW1wdHlQaWNrZXJNZXNzYWdlJyBpbiBhcmdzICYmIHsgZW1wdHlQaWNrZXJNZXNzYWdlOiBhcmdzLmVtcHR5UGlja2VyTWVzc2FnZSB9KSxcbiAgICAgICAgLi4uKGZvcm1hdCAmJiB7IGZvcm1hdCB9KSxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICgnb3B0aW9ucycgaW4gYXJncyAmJiBBcnJheS5pc0FycmF5KGFyZ3Mub3B0aW9ucykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IFsuLi5hcmdzLm9wdGlvbnNdLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBnZXRBcHByb3ByaWF0ZVJlc3VsdHNUZW1wbGF0ZShyZXN1bHRzVGVtcGxhdGVUeXBlOiBSZXN1bHRzVGVtcGxhdGVUeXBlKSB7XG4gICAgc3dpdGNoIChyZXN1bHRzVGVtcGxhdGVUeXBlKSB7XG4gICAgICBjYXNlICdlbnRpdHktcGlja2VyJzpcbiAgICAgICAgcmV0dXJuIEVudGl0eVBpY2tlclJlc3VsdHM7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZU9wdGlvbnNGdW5jdGlvbiA9IChcbiAgICBjb25maWc6IE1vZGlmeVBpY2tlckNvbmZpZ0FyZ3MsXG4gICAgbWFwcGVyPzogKGl0ZW06IHVua25vd24pID0+IHVua25vd24sXG4gICAgZmlsdGVyZWRPcHRpb25zQ3JlYXRvcj86ICh3aGVyZT86IHN0cmluZykgPT4gKHF1ZXJ5OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIpID0+IFByb21pc2U8dW5rbm93bltdPixcbiAgKTogKChxdWVyeTogc3RyaW5nKSA9PiBQcm9taXNlPHVua25vd25bXT4pID0+IChxdWVyeTogc3RyaW5nLCBwYWdlPzogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCdvcHRpb25zUHJvbWlzZScgaW4gY29uZmlnICYmIGNvbmZpZy5vcHRpb25zUHJvbWlzZSkge1xuICAgICAgcmV0dXJuIGNvbmZpZy5vcHRpb25zUHJvbWlzZShxdWVyeSwgbmV3IEN1c3RvbUh0dHBJbXBsKHRoaXMuaHR0cCksIHBhZ2UpO1xuICAgIH0gZWxzZSBpZiAoKCdvcHRpb25zVXJsQnVpbGRlcicgaW4gY29uZmlnICYmIGNvbmZpZy5vcHRpb25zVXJsQnVpbGRlcikgfHwgKCdvcHRpb25zVXJsJyBpbiBjb25maWcgJiYgY29uZmlnLm9wdGlvbnNVcmwpKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1cmwgPSAnb3B0aW9uc1VybEJ1aWxkZXInIGluIGNvbmZpZyA/IGNvbmZpZy5vcHRpb25zVXJsQnVpbGRlcihxdWVyeSkgOiBgJHtjb25maWcub3B0aW9uc1VybH0/ZmlsdGVyPSR7cXVlcnkgfHwgJyd9YDtcbiAgICAgICAgdGhpcy5odHRwXG4gICAgICAgICAgLmdldCh1cmwpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtYXAoKHJlc3VsdHM6IHVua25vd25bXSkgPT4ge1xuICAgICAgICAgICAgICBpZiAobWFwcGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMubWFwKG1hcHBlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZShyZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yKSB7XG4gICAgICBpZiAoJ3doZXJlJyBpbiBjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IoY29uZmlnLndoZXJlKShxdWVyeSwgcGFnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmlsdGVyZWRPcHRpb25zQ3JlYXRvcigpKHF1ZXJ5LCBwYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcHVibGljIHNldExvYWRpbmcoa2V5OiBzdHJpbmcsIGxvYWRpbmc6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW2tleV0uZmllbGRJbnRlcmFjdGlvbmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBjb250cm9sLnNldEVycm9ycyh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgICAgIC8vIEhpc3RvcnlcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYXN5bmNCbG9ja1RpbWVvdXQpO1xuICAgICAgICB0aGlzLmFzeW5jQmxvY2tUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRMb2FkaW5nKGtleSwgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuZGlzcGxheVRpcChrZXksIHRoaXMubGFiZWxzLmFzeW5jRmFpbHVyZSwgJ2luZm8nLCBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICdfZGlzcGxheWVkQXN5bmNGYWlsdXJlJywgdHJ1ZSk7XG4gICAgICAgIH0sIDEwMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1trZXldLmZpZWxkSW50ZXJhY3Rpb25sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFzeW5jQmxvY2tUaW1lb3V0KTtcbiAgICAgICAgY29udHJvbC5zZXRFcnJvcnMoeyBsb2FkaW5nOiBudWxsIH0pO1xuICAgICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICBpZiAodGhpcy5nZXRQcm9wZXJ0eShrZXksICdfZGlzcGxheWVkQXN5bmNGYWlsdXJlJykpIHtcbiAgICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ3RpcFdlbGwnLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdsb2FkaW5nJywgdmFsdWU6IGxvYWRpbmcgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFkZENvbnRyb2woXG4gICAga2V5OiBzdHJpbmcsXG4gICAgbWV0YUZvck5ld0ZpZWxkOiBhbnksXG4gICAgcG9zaXRpb246IHN0cmluZyA9IEZpZWxkSW50ZXJhY3Rpb25BcGkuRklFTERfUE9TSVRJT05TLkFCT1ZFX0ZJRUxELFxuICAgIGluaXRpYWxWYWx1ZT86IGFueSxcbiAgKTogdm9pZCB7XG4gICAgaWYgKCFtZXRhRm9yTmV3RmllbGQua2V5ICYmICFtZXRhRm9yTmV3RmllbGQubmFtZSkge1xuICAgICAgY29uc29sZS5lcnJvcignW0ZpZWxkSW50ZXJhY3Rpb25BUEldIC0gbWlzc2luZyBcImtleVwiIGluIG1ldGEgZm9yIG5ldyBmaWVsZCcpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIW1ldGFGb3JOZXdGaWVsZC5rZXkpIHtcbiAgICAgIC8vIElmIGtleSBpcyBub3QgZXhwbGljaXRseSBkZWNsYXJlZCwgdXNlIG5hbWUgYXMga2V5XG4gICAgICBtZXRhRm9yTmV3RmllbGQua2V5ID0gbWV0YUZvck5ld0ZpZWxkLm5hbWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1ttZXRhRm9yTmV3RmllbGQua2V5XSkge1xuICAgICAgLy8gRmllbGQgaXMgYWxyZWFkeSBvbiB0aGUgZm9ybVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZm9ybS5jb250cm9sc1trZXldO1xuICAgIGxldCBmaWVsZHNldEluZGV4LCBjb250cm9sSW5kZXg7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIGZpZWxkc2V0SW5kZXggPSAtMTtcbiAgICAgIGNvbnRyb2xJbmRleCA9IC0xO1xuXG4gICAgICB0aGlzLmZvcm0uZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0LCBmaSkgPT4ge1xuICAgICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChmaWVsZHNldENvbnRyb2wsIGNpKSA9PiB7XG4gICAgICAgICAgaWYgKGZpZWxkc2V0Q29udHJvbC5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgZmllbGRzZXRJbmRleCA9IGZpO1xuICAgICAgICAgICAgY29udHJvbEluZGV4ID0gY2k7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDaGFuZ2UgdGhlIHBvc2l0aW9uIG9mIHRoZSBuZXdseSBhZGRlZCBmaWVsZFxuICAgICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICBjYXNlIEZpZWxkSW50ZXJhY3Rpb25BcGkuRklFTERfUE9TSVRJT05TLkFCT1ZFX0ZJRUxEOlxuICAgICAgICAgIC8vIEFkZGluZyBmaWVsZCBhYm92ZSBhY3RpdmUgZmllbGRcbiAgICAgICAgICAvLyBpbmRleCBjYW4gc3RheSB0aGUgc2FtZVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEZpZWxkSW50ZXJhY3Rpb25BcGkuRklFTERfUE9TSVRJT05TLkJFTE9XX0ZJRUxEOlxuICAgICAgICAgIC8vIEFkZGluZyBmaWVsZCBiZWxvdyBhY3RpdmUgZmllbGRcbiAgICAgICAgICBjb250cm9sSW5kZXggKz0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBGaWVsZEludGVyYWN0aW9uQXBpLkZJRUxEX1BPU0lUSU9OUy5UT1BfT0ZfRk9STTpcbiAgICAgICAgICAvLyBBZGRpbmcgZmllbGQgdG8gdGhlIHRvcCBvZiB0aGUgZm9ybVxuICAgICAgICAgIGNvbnRyb2xJbmRleCA9IDA7XG4gICAgICAgICAgZmllbGRzZXRJbmRleCA9IDA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRmllbGRJbnRlcmFjdGlvbkFwaS5GSUVMRF9QT1NJVElPTlMuQk9UVE9NX09GX0ZPUk06XG4gICAgICAgICAgLy8gQWRkaW5nIGZpZWxkIHRvIHRoZSBib3R0b20gb2YgdGhlIGZvcm1cbiAgICAgICAgICBmaWVsZHNldEluZGV4ID0gdGhpcy5mb3JtLmZpZWxkc2V0cy5sZW5ndGggLSAxO1xuICAgICAgICAgIGNvbnRyb2xJbmRleCA9IHRoaXMuZm9ybS5maWVsZHNldHNbZmllbGRzZXRJbmRleF0uY29udHJvbHMubGVuZ3RoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmllbGRzZXRJbmRleCAhPT0gLTEgJiYgY29udHJvbEluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCBub3ZvQ29udHJvbCA9IHRoaXMuZm9ybVV0aWxzLmdldENvbnRyb2xGb3JGaWVsZChtZXRhRm9yTmV3RmllbGQsIHRoaXMuaHR0cCwge30pO1xuICAgICAgICBub3ZvQ29udHJvbC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgY29uc3QgZm9ybUNvbnRyb2wgPSBuZXcgTm92b0Zvcm1Db250cm9sKGluaXRpYWxWYWx1ZSwgbm92b0NvbnRyb2wpO1xuICAgICAgICB0aGlzLmZvcm0uYWRkQ29udHJvbChub3ZvQ29udHJvbC5rZXksIGZvcm1Db250cm9sKTtcbiAgICAgICAgdGhpcy5mb3JtLmZpZWxkc2V0c1tmaWVsZHNldEluZGV4XS5jb250cm9scy5zcGxpY2UoY29udHJvbEluZGV4LCAwLCBub3ZvQ29udHJvbCk7XG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnYWRkQ29udHJvbCcsIHZhbHVlOiBmb3JtQ29udHJvbCB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQ29udHJvbChrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW2tleV0pIHtcbiAgICAgIC8vIEZpZWxkIGlzIG5vdCBvbiB0aGUgZm9ybVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBsZXQgZmllbGRzZXRJbmRleCA9IC0xO1xuICAgICAgbGV0IGNvbnRyb2xJbmRleCA9IC0xO1xuXG4gICAgICB0aGlzLmZvcm0uZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0LCBmaSkgPT4ge1xuICAgICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChmaWVsZHNldENvbnRyb2wsIGNpKSA9PiB7XG4gICAgICAgICAgaWYgKGZpZWxkc2V0Q29udHJvbC5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgZmllbGRzZXRJbmRleCA9IGZpO1xuICAgICAgICAgICAgY29udHJvbEluZGV4ID0gY2k7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZmllbGRzZXRJbmRleCAhPT0gLTEgJiYgY29udHJvbEluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLmZvcm0ucmVtb3ZlQ29udHJvbChrZXkpO1xuICAgICAgICB0aGlzLmZvcm0uZmllbGRzZXRzW2ZpZWxkc2V0SW5kZXhdLmNvbnRyb2xzLnNwbGljZShjb250cm9sSW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3JlbW92ZUNvbnRyb2wnLCB2YWx1ZToga2V5IH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkZWJvdW5jZShmdW5jOiAoKSA9PiB2b2lkLCB3YWl0ID0gNTApIHtcbiAgICBsZXQgaDogYW55O1xuICAgIGNsZWFyVGltZW91dChoKTtcbiAgICBoID0gc2V0VGltZW91dCgoKSA9PiBmdW5jKCksIHdhaXQpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmlnZ2VyRXZlbnQoZXZlbnQ6IElGaWVsZEludGVyYWN0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb3JtICYmIHRoaXMuZm9ybS5maWVsZEludGVyYWN0aW9uRXZlbnRzKSB7XG4gICAgICB0aGlzLmZvcm0uZmllbGRJbnRlcmFjdGlvbkV2ZW50cy5lbWl0KGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==