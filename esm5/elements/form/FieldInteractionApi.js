/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
var CustomHttp = /** @class */ (function () {
    function CustomHttp(http) {
        this.http = http;
        this.mapFn = function (x) { return x; };
    }
    /**
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    CustomHttp.prototype.get = /**
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
    CustomHttp.prototype.map = /**
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
    CustomHttp.prototype.subscribe = /**
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
    return CustomHttp;
}());
if (false) {
    /** @type {?} */
    CustomHttp.prototype.url;
    /** @type {?} */
    CustomHttp.prototype.options;
    /** @type {?} */
    CustomHttp.prototype.mapFn;
    /** @type {?} */
    CustomHttp.prototype.http;
}
var FieldInteractionApi = /** @class */ (function () {
    function FieldInteractionApi(toaster, modalService, formUtils, http, labels) {
        this.toaster = toaster;
        this.modalService = modalService;
        this.formUtils = formUtils;
        this.http = http;
        this.labels = labels;
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
     * @return {?}
     */
    FieldInteractionApi.prototype.displayTip = /**
     * @param {?} key
     * @param {?} tip
     * @param {?=} icon
     * @param {?=} allowDismiss
     * @return {?}
     */
    function (key, tip, icon, allowDismiss) {
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            control.tipWell = {
                tip: tip,
                icon: icon,
                button: allowDismiss,
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
        return this.modalService.open(ControlConfirmModal, { oldValue: oldValue, newValue: newValue, label: label, message: message, key: key }).onClosed.then(function (result) {
            if (!result) {
                _this.setValue(key, oldValue, { emitEvent: false });
            }
        });
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
        return this.modalService.open(ControlPromptModal, { changes: changes }).onClosed;
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
                currentOptions.forEach(function (option) {
                    if ((option.value && option.value === optionToAdd.value) || option === optionToAdd) {
                        isUnique = false;
                    }
                });
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
                        config.options = tslib_1.__spread(currentOptions);
                        this.setProperty(key, 'config', config);
                    }
                }
            }
            else {
                /** @type {?} */
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
        var _this = this;
        /** @type {?} */
        var control = this.getControl(key);
        if (control && !control.restrictFieldInteractions) {
            /** @type {?} */
            var newConfig = {
                resultsTemplate: control.config.resultsTemplate,
            };
            if (config.optionsUrl || config.optionsUrlBuilder || config.optionsPromise) {
                newConfig = Object.assign(newConfig, {
                    format: config.format,
                    options: function (query) {
                        if (config.optionsPromise) {
                            return config.optionsPromise(query, new CustomHttp(_this.http));
                        }
                        return new Promise(function (resolve, reject) {
                            /** @type {?} */
                            var url = config.optionsUrlBuilder ? config.optionsUrlBuilder(query) : config.optionsUrl + "?filter=" + (query || '');
                            if (query && query.length) {
                                _this.http
                                    .get(url)
                                    .pipe(map(function (results) {
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
                newConfig.options = tslib_1.__spread(config.options);
            }
            this.setProperty(key, 'config', newConfig);
            this.triggerEvent({ controlKey: key, prop: 'pickerConfig', value: config });
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
        h = setTimeout(function () { return func(); }, wait);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FieldInteractionApi.prototype.triggerEvent = /**
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
    /** @type {?} */
    FieldInteractionApi.prototype._globals;
    /** @type {?} */
    FieldInteractionApi.prototype._form;
    /** @type {?} */
    FieldInteractionApi.prototype._currentKey;
    /** @type {?} */
    FieldInteractionApi.prototype._appBridge;
    /** @type {?} */
    FieldInteractionApi.prototype.asyncBlockTimeout;
    /** @type {?} */
    FieldInteractionApi.prototype.toaster;
    /** @type {?} */
    FieldInteractionApi.prototype.modalService;
    /** @type {?} */
    FieldInteractionApi.prototype.formUtils;
    /** @type {?} */
    FieldInteractionApi.prototype.http;
    /** @type {?} */
    FieldInteractionApi.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGRJbnRlcmFjdGlvbkFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0ZpZWxkSW50ZXJhY3Rpb25BcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRWxELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHckU7SUFLRSxvQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxVQUFLLEdBQVEsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLEVBQUQsQ0FBQyxDQUFDO0lBRWlCLENBQUM7Ozs7OztJQUV4Qyx3QkFBRzs7Ozs7SUFBSCxVQUFJLEdBQVcsRUFBRSxPQUFhO1FBQzVCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELHdCQUFHOzs7O0lBQUgsVUFB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LGFBQWE7UUFDMUIsV0FBVyxFQUFFLGFBQWE7UUFDMUIsY0FBYyxFQUFFLGdCQUFnQjtLQUNqQyxDQUFDOztnQkFiSCxVQUFVOzs7Z0JBbENGLGdCQUFnQjtnQkFDaEIsZ0JBQWdCO2dCQUZoQixTQUFTO2dCQU5ULFVBQVU7Z0JBWVYsZ0JBQWdCOztJQTJyQnpCLDBCQUFDO0NBQUEsQUE5cEJELElBOHBCQztTQTdwQlksbUJBQW1COzs7SUFPOUIsb0NBS0U7O0lBWEYsdUNBQXNCOztJQUN0QixvQ0FBbUI7O0lBQ25CLDBDQUE0Qjs7SUFDNUIseUNBQThCOztJQUM5QixnREFBK0I7O0lBVTdCLHNDQUFpQzs7SUFDakMsMkNBQXNDOztJQUN0Qyx3Q0FBNEI7O0lBQzVCLG1DQUF3Qjs7SUFDeEIscUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Gb3JtQ29udHJvbCB9IGZyb20gJy4vTm92b0Zvcm1Db250cm9sJztcbmltcG9ydCB7IE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi9Gb3JtQ29udHJvbHMnO1xuaW1wb3J0IHsgRm9ybVV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybS11dGlscy9Gb3JtVXRpbHMnO1xuaW1wb3J0IHsgTm92b1RvYXN0U2VydmljZSB9IGZyb20gJy4uL3RvYXN0L1RvYXN0U2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kYWwvTW9kYWxTZXJ2aWNlJztcbmltcG9ydCB7IENvbnRyb2xDb25maXJtTW9kYWwsIENvbnRyb2xQcm9tcHRNb2RhbCB9IGZyb20gJy4vRmllbGRJbnRlcmFjdGlvbk1vZGFscyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBBcHBCcmlkZ2UgfSBmcm9tICcuLi8uLi91dGlscy9hcHAtYnJpZGdlL0FwcEJyaWRnZSc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IElGaWVsZEludGVyYWN0aW9uRXZlbnQgfSBmcm9tICcuL0Zvcm1JbnRlcmZhY2VzJztcblxuY2xhc3MgQ3VzdG9tSHR0cCB7XG4gIHVybDogc3RyaW5nO1xuICBvcHRpb25zOiBhbnk7XG4gIG1hcEZuOiBhbnkgPSAoeCkgPT4geDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1hcChtYXBGbjogYW55KSB7XG4gICAgdGhpcy5tYXBGbiA9IG1hcEZuO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3Vic2NyaWJlKHJlc29sdmU6IGFueSwgcmVqZWN0PzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldCh0aGlzLnVybCwgdGhpcy5vcHRpb25zKVxuICAgICAgLnBpcGUobWFwKHRoaXMubWFwRm4pKVxuICAgICAgLnN1YnNjcmliZShyZXNvbHZlLCByZWplY3QpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWVsZEludGVyYWN0aW9uQXBpIHtcbiAgcHJpdmF0ZSBfZ2xvYmFsczogYW55O1xuICBwcml2YXRlIF9mb3JtOiBhbnk7XG4gIHByaXZhdGUgX2N1cnJlbnRLZXk6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXBwQnJpZGdlOiBBcHBCcmlkZ2U7XG4gIHByaXZhdGUgYXN5bmNCbG9ja1RpbWVvdXQ6IGFueTtcblxuICBwdWJsaWMgc3RhdGljIEZJRUxEX1BPU0lUSU9OUyA9IHtcbiAgICBBQk9WRV9GSUVMRDogJ0FCT1ZFX0ZJRUxEJyxcbiAgICBCRUxPV19GSUVMRDogJ0JFTE9XX0ZJRUxEJyxcbiAgICBUT1BfT0ZfRk9STTogJ1RPUF9PRl9GT1JNJyxcbiAgICBCT1RUT01fT0ZfRk9STTogJ0JPVFRPTV9PRl9GT1JNJyxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRvYXN0ZXI6IE5vdm9Ub2FzdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5vdm9Nb2RhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb3JtVXRpbHM6IEZvcm1VdGlscyxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsXG4gICkge31cblxuICBzZXQgZm9ybShmb3JtOiBhbnkpIHtcbiAgICB0aGlzLl9mb3JtID0gZm9ybTtcbiAgfVxuXG4gIGdldCBmb3JtKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm07XG4gIH1cblxuICBnZXQgYXNzb2NpYXRpb25zKCk6IG9iamVjdCB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5oYXNPd25Qcm9wZXJ0eSgnYXNzb2NpYXRpb25zJykgPyB0aGlzLmZvcm0uYXNzb2NpYXRpb25zIDoge307XG4gIH1cblxuICBnZXQgY3VycmVudEVudGl0eSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZvcm0uaGFzT3duUHJvcGVydHkoJ2N1cnJlbnRFbnRpdHknKSA/IHRoaXMuZm9ybS5jdXJyZW50RW50aXR5IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRFbnRpdHlJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZvcm0uaGFzT3duUHJvcGVydHkoJ2N1cnJlbnRFbnRpdHlJZCcpID8gdGhpcy5mb3JtLmN1cnJlbnRFbnRpdHlJZCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBpc0VkaXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5oYXNPd25Qcm9wZXJ0eSgnZWRpdCcpID8gdGhpcy5mb3JtLmVkaXQgOiBmYWxzZTtcbiAgfVxuXG4gIGdldCBpc0FkZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmhhc093blByb3BlcnR5KCdlZGl0JykgPyAhdGhpcy5mb3JtLmVkaXQgOiBmYWxzZTtcbiAgfVxuXG4gIHNldCBnbG9iYWxzKGdsb2JhbHM6IGFueSkge1xuICAgIHRoaXMuX2dsb2JhbHMgPSBnbG9iYWxzO1xuICB9XG5cbiAgZ2V0IGdsb2JhbHMoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZ2xvYmFscztcbiAgfVxuXG4gIHNldCBjdXJyZW50S2V5KGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3VycmVudEtleSA9IGtleTtcbiAgfVxuXG4gIGdldCBjdXJyZW50S2V5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRLZXk7XG4gIH1cblxuICBzZXQgYXBwQnJpZGdlKGFwcEJyaWRnZTogQXBwQnJpZGdlKSB7XG4gICAgdGhpcy5fYXBwQnJpZGdlID0gYXBwQnJpZGdlO1xuICB9XG5cbiAgZ2V0IGFwcEJyaWRnZSgpOiBBcHBCcmlkZ2Uge1xuICAgIHJldHVybiB0aGlzLl9hcHBCcmlkZ2U7XG4gIH1cblxuICBwdWJsaWMgaXNBY3RpdmVDb250cm9sVmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5nZXRWYWx1ZSh0aGlzLmN1cnJlbnRLZXkpO1xuICB9XG5cbiAgcHVibGljIGdldEFjdGl2ZUNvbnRyb2woKTogTm92b0Zvcm1Db250cm9sIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb250cm9sKHRoaXMuY3VycmVudEtleSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlS2V5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEtleTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3RpdmVWYWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmdldFZhbHVlKHRoaXMuY3VycmVudEtleSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlSW5pdGlhbFZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SW5pdGlhbFZhbHVlKHRoaXMuY3VycmVudEtleSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29udHJvbChrZXk6IHN0cmluZyk6IE5vdm9Gb3JtQ29udHJvbCB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tGaWVsZEludGVyYWN0aW9uQVBJXSAtIGludmFsaWQgb3IgbWlzc2luZyBcImtleVwiJyk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBjb250cm9sID0gdGhpcy5mb3JtLmNvbnRyb2xzW2tleV07XG4gICAgaWYgKCFjb250cm9sKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRmllbGRJbnRlcmFjdGlvbkFQSV0gLSBjb3VsZCBub3QgZmluZCBhIGNvbnRyb2wgaW4gdGhlIGZvcm0gYnkgdGhlIGtleSAtLScsIGtleSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjb250cm9sIGFzIE5vdm9Gb3JtQ29udHJvbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRWYWx1ZShrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgcmV0dXJuIGNvbnRyb2wudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIGdldFJhd1ZhbHVlKGtleTogc3RyaW5nKTogYW55IHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICByZXR1cm4gY29udHJvbC5yYXdWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0SW5pdGlhbFZhbHVlKGtleTogc3RyaW5nKTogYW55IHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICByZXR1cm4gY29udHJvbC5pbml0aWFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIHNldFZhbHVlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIHZhbHVlOiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U/OiBib29sZWFuO1xuICAgICAgZW1pdFZpZXdUb01vZGVsQ2hhbmdlPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuc2V0VmFsdWUodmFsdWUsIG9wdGlvbnMpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICd2YWx1ZScsIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcGF0Y2hWYWx1ZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICB2YWx1ZTogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgICBlbWl0RXZlbnQ/OiBib29sZWFuO1xuICAgICAgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlPzogYm9vbGVhbjtcbiAgICAgIGVtaXRWaWV3VG9Nb2RlbENoYW5nZT86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnNldFZhbHVlKHZhbHVlLCBvcHRpb25zKTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAndmFsdWUnLCB2YWx1ZTogdmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldFJlYWRPbmx5KGtleTogc3RyaW5nLCBpc1JlYWRPbmx5OiBib29sZWFuKTogdm9pZCB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnNldFJlYWRPbmx5KGlzUmVhZE9ubHkpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdyZWFkT25seScsIHZhbHVlOiBpc1JlYWRPbmx5IH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRSZXF1aXJlZChrZXk6IHN0cmluZywgcmVxdWlyZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuc2V0UmVxdWlyZWQocmVxdWlyZWQpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdyZXF1aXJlZCcsIHZhbHVlOiByZXF1aXJlZCB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGlkZShrZXk6IHN0cmluZywgY2xlYXJWYWx1ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuaGlkZShjbGVhclZhbHVlKTtcbiAgICAgIHRoaXMuZGlzYWJsZShrZXksIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnaGlkZGVuJywgdmFsdWU6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNob3coa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuc2hvdygpO1xuICAgICAgdGhpcy5lbmFibGUoa2V5LCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ2hpZGRlbicsIHZhbHVlOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGlzYWJsZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuZGlzYWJsZShvcHRpb25zKTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAncmVhZE9ubHknLCB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZW5hYmxlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgICBlbWl0RXZlbnQ/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5lbmFibGUob3B0aW9ucyk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3JlYWRPbmx5JywgdmFsdWU6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNJbnZhbGlkKGtleTogc3RyaW5nLCB2YWxpZGF0aW9uTWVzc2FnZT86IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgY29udHJvbC5tYXJrQXNJbnZhbGlkKHZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbWFya0FzRGlydHkoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzRGlydHkob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1hcmtBc1BlbmRpbmcoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzUGVuZGluZyhvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbWFya0FzUHJpc3RpbmUoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzUHJpc3RpbmUob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1hcmtBc1RvdWNoZWQoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZChvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbWFya0FzVW50b3VjaGVkKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLm1hcmtBc1VudG91Y2hlZChvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlVmFsdWVBbmRWYWxpZGl0eShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGlzcGxheVRvYXN0KHRvYXN0Q29uZmlnOiB7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIGhpZGVEZWxheT86IG51bWJlcjtcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIHRoZW1lPzogc3RyaW5nO1xuICAgIHBvc2l0aW9uPzogc3RyaW5nO1xuICAgIGlzQ2xvc2VhYmxlPzogYm9vbGVhbjtcbiAgICBjdXN0b21DbGFzcz86IHN0cmluZztcbiAgfSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRvYXN0ZXIpIHtcbiAgICAgIHRoaXMudG9hc3Rlci5hbGVydCh0b2FzdENvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRpc3BsYXlUaXAoa2V5OiBzdHJpbmcsIHRpcDogc3RyaW5nLCBpY29uPzogc3RyaW5nLCBhbGxvd0Rpc21pc3M/OiBib29sZWFuKTogdm9pZCB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnRpcFdlbGwgPSB7XG4gICAgICAgIHRpcDogdGlwLFxuICAgICAgICBpY29uOiBpY29uLFxuICAgICAgICBidXR0b246IGFsbG93RGlzbWlzcyxcbiAgICAgIH07XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3RpcFdlbGwnLCB2YWx1ZTogdGlwIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRUb29sdGlwKGtleTogc3RyaW5nLCB0b29sdGlwOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wudG9vbHRpcCA9IHRvb2x0aXA7XG4gICAgICBpZiAodG9vbHRpcC5sZW5ndGggPj0gNDAgJiYgdG9vbHRpcC5sZW5ndGggPD0gNDAwKSB7XG4gICAgICAgIGNvbnRyb2wudG9vbHRpcFNpemUgPSAnbGFyZ2UnO1xuICAgICAgICBjb250cm9sLnRvb2x0aXBQcmVsaW5lID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodG9vbHRpcC5sZW5ndGggPiA0MDApIHtcbiAgICAgICAgY29udHJvbC50b29sdGlwU2l6ZSA9ICdleHRyYS1sYXJnZSc7XG4gICAgICB9XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3Rvb2x0aXAnLCB2YWx1ZTogdG9vbHRpcCB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29uZmlybUNoYW5nZXMoa2V5OiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBsZXQgaGlzdG9yeSA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAndmFsdWVIaXN0b3J5Jyk7XG4gICAgbGV0IG9sZFZhbHVlID0gaGlzdG9yeVtoaXN0b3J5Lmxlbmd0aCAtIDJdO1xuICAgIGxldCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoa2V5KTtcbiAgICBsZXQgbGFiZWwgPSB0aGlzLmdldFByb3BlcnR5KGtleSwgJ2xhYmVsJyk7XG4gICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgYW55KS5ibHVyKCk7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQ29udHJvbENvbmZpcm1Nb2RhbCwgeyBvbGRWYWx1ZSwgbmV3VmFsdWUsIGxhYmVsLCBtZXNzYWdlLCBrZXkgfSkub25DbG9zZWQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKGtleSwgb2xkVmFsdWUsIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBwcm9tcHRVc2VyKGtleTogc3RyaW5nLCBjaGFuZ2VzOiBzdHJpbmdbXSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGxldCBzaG93WWVzOiBib29sZWFuID0gdHJ1ZTtcbiAgICAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBhbnkpLmJsdXIoKTtcbiAgICByZXR1cm4gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihDb250cm9sUHJvbXB0TW9kYWwsIHsgY2hhbmdlcyB9KS5vbkNsb3NlZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQcm9wZXJ0eShrZXk6IHN0cmluZywgcHJvcDogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5KTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sW3Byb3BdID0gdmFsdWU7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogcHJvcCwgdmFsdWU6IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRQcm9wZXJ0eShrZXk6IHN0cmluZywgcHJvcDogc3RyaW5nKTogYW55IHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIHJldHVybiBjb250cm9sW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBpc1ZhbHVlRW1wdHkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFZhbHVlKGtleSk7XG4gICAgcmV0dXJuIEhlbHBlcnMuaXNFbXB0eSh2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgaXNWYWx1ZUJsYW5rKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZShrZXkpO1xuICAgIHJldHVybiBIZWxwZXJzLmlzQmxhbmsodmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGhhc0ZpZWxkKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5mb3JtLmNvbnRyb2xzW2tleV07XG4gIH1cblxuICBwdWJsaWMgYWRkU3RhdGljT3B0aW9uKGtleTogc3RyaW5nLCBuZXdPcHRpb246IGFueSk6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgbGV0IG9wdGlvblRvQWRkID0gbmV3T3B0aW9uO1xuICAgIGxldCBpc1VuaXF1ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgbGV0IGN1cnJlbnRPcHRpb25zID0gdGhpcy5nZXRQcm9wZXJ0eShrZXksICdvcHRpb25zJyk7XG4gICAgICBpZiAoIWN1cnJlbnRPcHRpb25zIHx8ICFjdXJyZW50T3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGNvbmZpZyA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJyk7XG4gICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zO1xuICAgICAgICAgIGlmIChjdXJyZW50T3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KGN1cnJlbnRPcHRpb25zKSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25zWzBdLnZhbHVlICYmICFvcHRpb25Ub0FkZC52YWx1ZSkge1xuICAgICAgICAgICAgICBvcHRpb25Ub0FkZCA9IHsgdmFsdWU6IG5ld09wdGlvbiwgbGFiZWw6IG5ld09wdGlvbiB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uZmlnLm9wdGlvbnMgPSBbLi4uY3VycmVudE9wdGlvbnMsIG9wdGlvblRvQWRkXTtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJywgY29uZmlnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjdXJyZW50T3B0aW9uc1swXS52YWx1ZSAmJiAhb3B0aW9uVG9BZGQudmFsdWUpIHtcbiAgICAgICAgICBvcHRpb25Ub0FkZCA9IHsgdmFsdWU6IG5ld09wdGlvbiwgbGFiZWw6IG5ld09wdGlvbiB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuc3VyZSBkdXBsaWNhdGUgdmFsdWVzIGFyZSBub3QgYWRkZWRcbiAgICAgICAgY3VycmVudE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKChvcHRpb24udmFsdWUgJiYgb3B0aW9uLnZhbHVlID09PSBvcHRpb25Ub0FkZC52YWx1ZSkgfHwgb3B0aW9uID09PSBvcHRpb25Ub0FkZCkge1xuICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNVbmlxdWUpIHtcbiAgICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ29wdGlvbnMnLCBbLi4uY3VycmVudE9wdGlvbnMsIG9wdGlvblRvQWRkXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc1VuaXF1ZSkge1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ29wdGlvbnMnLCB2YWx1ZTogWy4uLmN1cnJlbnRPcHRpb25zLCBvcHRpb25Ub0FkZF0gfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbW92ZVN0YXRpY09wdGlvbihrZXk6IHN0cmluZywgb3B0aW9uVG9SZW1vdmU6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgbGV0IGN1cnJlbnRPcHRpb25zID0gdGhpcy5nZXRQcm9wZXJ0eShrZXksICdvcHRpb25zJyk7XG4gICAgICBpZiAoIWN1cnJlbnRPcHRpb25zIHx8ICFjdXJyZW50T3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGNvbmZpZyA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJyk7XG4gICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zO1xuICAgICAgICAgIGlmIChjdXJyZW50T3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KGN1cnJlbnRPcHRpb25zKSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgICAgICBjdXJyZW50T3B0aW9ucy5mb3JFYWNoKChvcHQsIGkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG9wdC52YWx1ZSB8fCBvcHQubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0LnZhbHVlID09PSBvcHRpb25Ub1JlbW92ZSB8fCBvcHQubGFiZWwgPT09IG9wdGlvblRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChvcHQgPT09IG9wdGlvblRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgY3VycmVudE9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbmZpZy5vcHRpb25zID0gWy4uLmN1cnJlbnRPcHRpb25zXTtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnY29uZmlnJywgY29uZmlnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBjdXJyZW50T3B0aW9ucy5mb3JFYWNoKChvcHQsIGkpID0+IHtcbiAgICAgICAgICBpZiAob3B0LnZhbHVlIHx8IG9wdC5sYWJlbCkge1xuICAgICAgICAgICAgaWYgKG9wdC52YWx1ZSA9PT0gb3B0aW9uVG9SZW1vdmUgfHwgb3B0LmxhYmVsID09PSBvcHRpb25Ub1JlbW92ZSkge1xuICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvcHQgPT09IG9wdGlvblRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgY3VycmVudE9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ29wdGlvbnMnLCBbLi4uY3VycmVudE9wdGlvbnNdKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnb3B0aW9ucycsIHZhbHVlOiBjb250cm9sLm9wdGlvbnMgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1vZGlmeVBpY2tlckNvbmZpZyhcbiAgICBrZXk6IHN0cmluZyxcbiAgICBjb25maWc6IHsgZm9ybWF0Pzogc3RyaW5nOyBvcHRpb25zVXJsPzogc3RyaW5nOyBvcHRpb25zVXJsQnVpbGRlcj86IEZ1bmN0aW9uOyBvcHRpb25zUHJvbWlzZT86IGFueTsgb3B0aW9ucz86IGFueVtdIH0sXG4gICAgbWFwcGVyPzogYW55LFxuICApOiB2b2lkIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGxldCBuZXdDb25maWc6IGFueSA9IHtcbiAgICAgICAgcmVzdWx0c1RlbXBsYXRlOiBjb250cm9sLmNvbmZpZy5yZXN1bHRzVGVtcGxhdGUsXG4gICAgICB9O1xuICAgICAgaWYgKGNvbmZpZy5vcHRpb25zVXJsIHx8IGNvbmZpZy5vcHRpb25zVXJsQnVpbGRlciB8fCBjb25maWcub3B0aW9uc1Byb21pc2UpIHtcbiAgICAgICAgbmV3Q29uZmlnID0gT2JqZWN0LmFzc2lnbihuZXdDb25maWcsIHtcbiAgICAgICAgICBmb3JtYXQ6IGNvbmZpZy5mb3JtYXQsXG4gICAgICAgICAgb3B0aW9uczogKHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLm9wdGlvbnNQcm9taXNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjb25maWcub3B0aW9uc1Byb21pc2UocXVlcnksIG5ldyBDdXN0b21IdHRwKHRoaXMuaHR0cCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgbGV0IHVybCA9IGNvbmZpZy5vcHRpb25zVXJsQnVpbGRlciA/IGNvbmZpZy5vcHRpb25zVXJsQnVpbGRlcihxdWVyeSkgOiBgJHtjb25maWcub3B0aW9uc1VybH0/ZmlsdGVyPSR7cXVlcnkgfHwgJyd9YDtcbiAgICAgICAgICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaHR0cFxuICAgICAgICAgICAgICAgICAgLmdldCh1cmwpXG4gICAgICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICAgICAgbWFwKChyZXN1bHRzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXBwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLm1hcChtYXBwZXIpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChjb25maWcub3B0aW9ucykge1xuICAgICAgICBuZXdDb25maWcub3B0aW9ucyA9IFsuLi5jb25maWcub3B0aW9uc107XG4gICAgICB9XG4gICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ2NvbmZpZycsIG5ld0NvbmZpZyk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3BpY2tlckNvbmZpZycsIHZhbHVlOiBjb25maWcgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldExvYWRpbmcoa2V5OiBzdHJpbmcsIGxvYWRpbmc6IGJvb2xlYW4pIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1trZXldLmZpZWxkSW50ZXJhY3Rpb25sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgY29udHJvbC5zZXRFcnJvcnMoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgICAvLyBIaXN0b3J5XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFzeW5jQmxvY2tUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5hc3luY0Jsb2NrVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0TG9hZGluZyhrZXksIGZhbHNlKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlUaXAoa2V5LCB0aGlzLmxhYmVscy5hc3luY0ZhaWx1cmUsICdpbmZvJywgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnX2Rpc3BsYXllZEFzeW5jRmFpbHVyZScsIHRydWUpO1xuICAgICAgICB9LCAxMDAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNba2V5XS5maWVsZEludGVyYWN0aW9ubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hc3luY0Jsb2NrVGltZW91dCk7XG4gICAgICAgIGNvbnRyb2wuc2V0RXJyb3JzKHsgbG9hZGluZzogbnVsbCB9KTtcbiAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnX2Rpc3BsYXllZEFzeW5jRmFpbHVyZScpKSB7XG4gICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICd0aXBXZWxsJywgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnbG9hZGluZycsIHZhbHVlOiBsb2FkaW5nIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhZGRDb250cm9sKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG1ldGFGb3JOZXdGaWVsZDogYW55LFxuICAgIHBvc2l0aW9uOiBzdHJpbmcgPSBGaWVsZEludGVyYWN0aW9uQXBpLkZJRUxEX1BPU0lUSU9OUy5BQk9WRV9GSUVMRCxcbiAgICBpbml0aWFsVmFsdWU/OiBhbnksXG4gICk6IHZvaWQge1xuICAgIGlmICghbWV0YUZvck5ld0ZpZWxkLmtleSAmJiAhbWV0YUZvck5ld0ZpZWxkLm5hbWUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tGaWVsZEludGVyYWN0aW9uQVBJXSAtIG1pc3NpbmcgXCJrZXlcIiBpbiBtZXRhIGZvciBuZXcgZmllbGQnKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCFtZXRhRm9yTmV3RmllbGQua2V5KSB7XG4gICAgICAvLyBJZiBrZXkgaXMgbm90IGV4cGxpY2l0bHkgZGVjbGFyZWQsIHVzZSBuYW1lIGFzIGtleVxuICAgICAgbWV0YUZvck5ld0ZpZWxkLmtleSA9IG1ldGFGb3JOZXdGaWVsZC5uYW1lO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbbWV0YUZvck5ld0ZpZWxkLmtleV0pIHtcbiAgICAgIC8vIEZpZWxkIGlzIGFscmVhZHkgb24gdGhlIGZvcm1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBjb250cm9sID0gdGhpcy5mb3JtLmNvbnRyb2xzW2tleV07XG4gICAgbGV0IGZpZWxkc2V0SW5kZXgsIGNvbnRyb2xJbmRleDtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgZmllbGRzZXRJbmRleCA9IC0xO1xuICAgICAgY29udHJvbEluZGV4ID0gLTE7XG5cbiAgICAgIHRoaXMuZm9ybS5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQsIGZpKSA9PiB7XG4gICAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGZpZWxkc2V0Q29udHJvbCwgY2kpID0+IHtcbiAgICAgICAgICBpZiAoZmllbGRzZXRDb250cm9sLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICBmaWVsZHNldEluZGV4ID0gZmk7XG4gICAgICAgICAgICBjb250cm9sSW5kZXggPSBjaTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIENoYW5nZSB0aGUgcG9zaXRpb24gb2YgdGhlIG5ld2x5IGFkZGVkIGZpZWxkXG4gICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgRmllbGRJbnRlcmFjdGlvbkFwaS5GSUVMRF9QT1NJVElPTlMuQUJPVkVfRklFTEQ6XG4gICAgICAgICAgLy8gQWRkaW5nIGZpZWxkIGFib3ZlIGFjdGl2ZSBmaWVsZFxuICAgICAgICAgIC8vIGluZGV4IGNhbiBzdGF5IHRoZSBzYW1lXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRmllbGRJbnRlcmFjdGlvbkFwaS5GSUVMRF9QT1NJVElPTlMuQkVMT1dfRklFTEQ6XG4gICAgICAgICAgLy8gQWRkaW5nIGZpZWxkIGJlbG93IGFjdGl2ZSBmaWVsZFxuICAgICAgICAgIGNvbnRyb2xJbmRleCArPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEZpZWxkSW50ZXJhY3Rpb25BcGkuRklFTERfUE9TSVRJT05TLlRPUF9PRl9GT1JNOlxuICAgICAgICAgIC8vIEFkZGluZyBmaWVsZCB0byB0aGUgdG9wIG9mIHRoZSBmb3JtXG4gICAgICAgICAgY29udHJvbEluZGV4ID0gMDtcbiAgICAgICAgICBmaWVsZHNldEluZGV4ID0gMDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBGaWVsZEludGVyYWN0aW9uQXBpLkZJRUxEX1BPU0lUSU9OUy5CT1RUT01fT0ZfRk9STTpcbiAgICAgICAgICAvLyBBZGRpbmcgZmllbGQgdG8gdGhlIGJvdHRvbSBvZiB0aGUgZm9ybVxuICAgICAgICAgIGZpZWxkc2V0SW5kZXggPSB0aGlzLmZvcm0uZmllbGRzZXRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgY29udHJvbEluZGV4ID0gdGhpcy5mb3JtLmZpZWxkc2V0c1tmaWVsZHNldEluZGV4XS5jb250cm9scy5sZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWVsZHNldEluZGV4ICE9PSAtMSAmJiBjb250cm9sSW5kZXggIT09IC0xKSB7XG4gICAgICAgIGxldCBub3ZvQ29udHJvbCA9IHRoaXMuZm9ybVV0aWxzLmdldENvbnRyb2xGb3JGaWVsZChtZXRhRm9yTmV3RmllbGQsIHRoaXMuaHR0cCwge30pO1xuICAgICAgICBub3ZvQ29udHJvbC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgbGV0IGZvcm1Db250cm9sID0gbmV3IE5vdm9Gb3JtQ29udHJvbChpbml0aWFsVmFsdWUsIG5vdm9Db250cm9sKTtcbiAgICAgICAgdGhpcy5mb3JtLmFkZENvbnRyb2wobm92b0NvbnRyb2wua2V5LCBmb3JtQ29udHJvbCk7XG4gICAgICAgIHRoaXMuZm9ybS5maWVsZHNldHNbZmllbGRzZXRJbmRleF0uY29udHJvbHMuc3BsaWNlKGNvbnRyb2xJbmRleCwgMCwgbm92b0NvbnRyb2wpO1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ2FkZENvbnRyb2wnLCB2YWx1ZTogZm9ybUNvbnRyb2wgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbW92ZUNvbnRyb2woa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1trZXldKSB7XG4gICAgICAvLyBGaWVsZCBpcyBub3Qgb24gdGhlIGZvcm1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXkpO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGxldCBmaWVsZHNldEluZGV4ID0gLTE7XG4gICAgICBsZXQgY29udHJvbEluZGV4ID0gLTE7XG5cbiAgICAgIHRoaXMuZm9ybS5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQsIGZpKSA9PiB7XG4gICAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGZpZWxkc2V0Q29udHJvbCwgY2kpID0+IHtcbiAgICAgICAgICBpZiAoZmllbGRzZXRDb250cm9sLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICBmaWVsZHNldEluZGV4ID0gZmk7XG4gICAgICAgICAgICBjb250cm9sSW5kZXggPSBjaTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaWVsZHNldEluZGV4ICE9PSAtMSAmJiBjb250cm9sSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuZm9ybS5yZW1vdmVDb250cm9sKGtleSk7XG4gICAgICAgIHRoaXMuZm9ybS5maWVsZHNldHNbZmllbGRzZXRJbmRleF0uY29udHJvbHMuc3BsaWNlKGNvbnRyb2xJbmRleCwgMSk7XG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAncmVtb3ZlQ29udHJvbCcsIHZhbHVlOiBrZXkgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRlYm91bmNlKGZ1bmM6ICgpID0+IHZvaWQsIHdhaXQgPSA1MCkge1xuICAgIGxldCBoOiBhbnk7XG4gICAgY2xlYXJUaW1lb3V0KGgpO1xuICAgIGggPSBzZXRUaW1lb3V0KCgpID0+IGZ1bmMoKSwgd2FpdCk7XG4gIH1cblxuICBwcml2YXRlIHRyaWdnZXJFdmVudChldmVudDogSUZpZWxkSW50ZXJhY3Rpb25FdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZvcm0gJiYgdGhpcy5mb3JtLmZpZWxkSW50ZXJhY3Rpb25FdmVudHMpIHtcbiAgICAgIHRoaXMuZm9ybS5maWVsZEludGVyYWN0aW9uRXZlbnRzLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuIl19