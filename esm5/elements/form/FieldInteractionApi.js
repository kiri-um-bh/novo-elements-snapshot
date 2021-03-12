/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/FieldInteractionApi.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.getFieldSet = /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, otherForm) {
        if (!key) {
            console.error('[FieldInteractionAPI] - invalid or missing "key"'); // tslint:disable-line
            return null;
        }
        /** @type {?} */
        var form = otherForm || this.form;
        /** @type {?} */
        var fieldSet = form.fieldsets.find((/**
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
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.getControl = /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, otherForm) {
        if (!key) {
            console.error('[FieldInteractionAPI] - invalid or missing "key"'); // tslint:disable-line
            return null;
        }
        /** @type {?} */
        var form = otherForm || this.form;
        /** @type {?} */
        var control = (/** @type {?} */ (form.controls[key]));
        if (!control) {
            console.error('[FieldInteractionAPI] - could not find a control in the form by the key --', key); // tslint:disable-line
            return null;
        }
        return control;
    };
    /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.getFormGroupArray = /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, otherForm) {
        if (!key) {
            console.error('[FieldInteractionAPI] - invalid or missing "key"'); // tslint:disable-line
            return null;
        }
        /** @type {?} */
        var form = otherForm || this.form;
        /** @type {?} */
        var formArray = (/** @type {?} */ (form.controls[key]));
        if (!formArray || !formArray.controls) {
            console.error('[FieldInteractionAPI] - could not find a form array in the form by the key --', key); // tslint:disable-line
            return null;
        }
        return (/** @type {?} */ (formArray.controls));
    };
    /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.getValue = /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control) {
            return control.value;
        }
        return null;
    };
    /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.getRawValue = /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control) {
            return control.rawValue;
        }
        return null;
    };
    /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.getInitialValue = /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control) {
            return control.initialValue;
        }
        return null;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.setValue = /**
     * @param {?} key
     * @param {?} value
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, value, options, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.setValue(value, options);
            this.triggerEvent({ controlKey: key, prop: 'value', value: value }, otherForm);
        }
    };
    /**
     * @param {?} key
     * @param {?} value
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.patchValue = /**
     * @param {?} key
     * @param {?} value
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, value, options, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.setValue(value, options);
            this.triggerEvent({ controlKey: key, prop: 'value', value: value }, otherForm);
        }
    };
    /**
     * @param {?} key
     * @param {?} isReadOnly
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.setReadOnly = /**
     * @param {?} key
     * @param {?} isReadOnly
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, isReadOnly, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.setReadOnly(isReadOnly);
            this.triggerEvent({ controlKey: key, prop: 'readOnly', value: isReadOnly }, otherForm);
        }
    };
    /**
     * @param {?} key
     * @param {?} required
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.setRequired = /**
     * @param {?} key
     * @param {?} required
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, required, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.setRequired(required);
            this.triggerEvent({ controlKey: key, prop: 'required', value: required }, otherForm);
        }
    };
    /**
     * @param {?} key
     * @param {?=} clearValue
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.hide = /**
     * @param {?} key
     * @param {?=} clearValue
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, clearValue, otherForm) {
        if (clearValue === void 0) { clearValue = true; }
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.hide(clearValue);
            this.disable(key, { emitEvent: false });
            this.triggerEvent({ controlKey: key, prop: 'hidden', value: true }, otherForm);
        }
        return control;
    };
    /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.show = /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.show();
            this.enable(key, { emitEvent: false });
            this.triggerEvent({ controlKey: key, prop: 'hidden', value: false }, otherForm);
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
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.disable = /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, options, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.disable(options);
            this.triggerEvent({ controlKey: key, prop: 'readOnly', value: true }, otherForm);
        }
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.enable = /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, options, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.enable(options);
            this.triggerEvent({ controlKey: key, prop: 'readOnly', value: false }, otherForm);
        }
    };
    /**
     * @param {?} key
     * @param {?=} validationMessage
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.markAsInvalid = /**
     * @param {?} key
     * @param {?=} validationMessage
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, validationMessage, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control) {
            if (control && !control.restrictFieldInteractions) {
                control.markAsInvalid(validationMessage);
                this.triggerEvent({ controlKey: key, prop: 'errors', value: validationMessage }, otherForm);
            }
        }
    };
    /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.markAsValid = /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control) {
            if (control && !control.restrictFieldInteractions) {
                control.markAsValid();
                this.triggerEvent({ controlKey: key, prop: 'errors', value: null }, otherForm);
            }
        }
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.markAsDirty = /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, options, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.markAsDirty(options);
        }
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.markAsPending = /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, options, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.markAsPending(options);
        }
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.markAsPristine = /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, options, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.markAsPristine(options);
        }
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.markAsTouched = /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, options, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.markAsTouched(options);
        }
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.markAsUntouched = /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, options, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.markAsUntouched(options);
        }
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.updateValueAndValidity = /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, options, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
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
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.displayTip = /**
     * @param {?} key
     * @param {?} tip
     * @param {?=} icon
     * @param {?=} allowDismiss
     * @param {?=} sanitize
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, tip, icon, allowDismiss, sanitize, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.tipWell = {
                tip: tip,
                icon: icon,
                button: allowDismiss,
                sanitize: sanitize !== false,
            };
            this.triggerEvent({ controlKey: key, prop: 'tipWell', value: tip }, otherForm);
        }
    };
    /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.clearTip = /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control.tipWell = null;
            this.triggerEvent({ controlKey: key, prop: 'tipWell', value: null }, otherForm);
        }
    };
    /**
     * @param {?} key
     * @param {?} tooltip
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.setTooltip = /**
     * @param {?} key
     * @param {?} tooltip
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, tooltip, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
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
        ((/** @type {?} */ (document.activeElement))).blur();
        return this.modalService.open(ControlPromptModal, { changes: changes, key: key }).onClosed;
    };
    /**
     * @param {?} key
     * @param {?} prop
     * @param {?} value
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.setProperty = /**
     * @param {?} key
     * @param {?} prop
     * @param {?} value
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, prop, value, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            control[prop] = value;
            this.triggerEvent({ controlKey: key, prop: prop, value: value }, otherForm);
        }
    };
    /**
     * @param {?} key
     * @param {?} prop
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.getProperty = /**
     * @param {?} key
     * @param {?} prop
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, prop, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
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
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.hasField = /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, otherForm) {
        /** @type {?} */
        var form = otherForm || this.form;
        return !!form.controls[key];
    };
    /**
     * @param {?} key
     * @param {?} newOption
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.addStaticOption = /**
     * @param {?} key
     * @param {?} newOption
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, newOption, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
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
                this.triggerEvent({ controlKey: key, prop: 'options', value: tslib_1.__spread(currentOptions, [optionToAdd]) }, otherForm);
            }
        }
    };
    /**
     * @param {?} key
     * @param {?} optionToRemove
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.removeStaticOption = /**
     * @param {?} key
     * @param {?} optionToRemove
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, optionToRemove, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
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
            this.triggerEvent({ controlKey: key, prop: 'options', value: control.options }, otherForm);
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
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.mutatePickerConfig = /**
     * @param {?} key
     * @param {?} args
     * @param {?=} mapper
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, args, mapper, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            var _a = control.config, minSearchLength = _a.minSearchLength, enableInfiniteScroll = _a.enableInfiniteScroll, filteredOptionsCreator = _a.filteredOptionsCreator, format = _a.format, getLabels = _a.getLabels, emptyPickerMessage = _a.emptyPickerMessage;
            /** @type {?} */
            var optionsConfig = this.getOptionsConfig(args, mapper, filteredOptionsCreator, format);
            /** @type {?} */
            var newConfig = tslib_1.__assign({}, (emptyPickerMessage && { emptyPickerMessage: emptyPickerMessage }), (Number.isInteger(minSearchLength) && { minSearchLength: minSearchLength }), (enableInfiniteScroll && { enableInfiniteScroll: enableInfiniteScroll }), (filteredOptionsCreator && { filteredOptionsCreator: filteredOptionsCreator }), (getLabels && { getLabels: getLabels }), (optionsConfig && optionsConfig), { resultsTemplate: control.config.resultsTemplate || ('resultsTemplateType' in args && this.getAppropriateResultsTemplate(args.resultsTemplateType)) });
            this.setProperty(key, 'config', newConfig);
            this.triggerEvent({ controlKey: key, prop: 'pickerConfig', value: args }, otherForm);
        }
    };
    /**
     * @param {?} key
     * @param {?} properties
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.addPropertiesToPickerConfig = /**
     * @param {?} key
     * @param {?} properties
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, properties, otherForm) {
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (!control || control.restrictFieldInteractions) {
            return;
        }
        /** @type {?} */
        var config = tslib_1.__assign({}, control.config, properties);
        this.setProperty(key, 'config', config);
        this.triggerEvent({ controlKey: key, prop: 'pickerConfig', value: properties }, otherForm);
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
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.setLoading = /**
     * @param {?} key
     * @param {?} loading
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, loading, otherForm) {
        var _this = this;
        /** @type {?} */
        var form = otherForm || this.form;
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            if (loading) {
                form.controls[key].fieldInteractionloading = true;
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
    };
    /**
     * @param {?} key
     * @param {?} metaForNewField
     * @param {?=} position
     * @param {?=} initialValue
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.addControl = /**
     * @param {?} key
     * @param {?} metaForNewField
     * @param {?=} position
     * @param {?=} initialValue
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, metaForNewField, position, initialValue, otherForm) {
        if (position === void 0) { position = FieldInteractionApi.FIELD_POSITIONS.ABOVE_FIELD; }
        if (!metaForNewField.key && !metaForNewField.name) {
            console.error('[FieldInteractionAPI] - missing "key" in meta for new field'); // tslint:disable-line
            return null;
        }
        if (!metaForNewField.key) {
            // If key is not explicitly declared, use name as key
            metaForNewField.key = metaForNewField.name;
        }
        /** @type {?} */
        var form = otherForm || this.form;
        if (form.controls[metaForNewField.key]) {
            // Field is already on the form
            return null;
        }
        /** @type {?} */
        var control = form.controls[key];
        /** @type {?} */
        var fieldsetIndex;
        /** @type {?} */
        var controlIndex;
        if (control) {
            fieldsetIndex = -1;
            controlIndex = -1;
            form.fieldsets.forEach((/**
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
                    fieldsetIndex = form.fieldsets.length - 1;
                    controlIndex = form.fieldsets[fieldsetIndex].controls.length;
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
                form.addControl(novoControl.key, formControl);
                form.fieldsets[fieldsetIndex].controls.splice(controlIndex, 0, novoControl);
                this.triggerEvent({ controlKey: key, prop: 'addControl', value: formControl }, otherForm);
            }
        }
    };
    /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.removeControl = /**
     * @param {?} key
     * @param {?=} otherForm
     * @return {?}
     */
    function (key, otherForm) {
        /** @type {?} */
        var form = otherForm || this.form;
        if (!form.controls[key]) {
            // Field is not on the form
            return null;
        }
        /** @type {?} */
        var control = this.getControl(key, otherForm);
        if (control && !control.restrictFieldInteractions) {
            /** @type {?} */
            var fieldsetIndex_1 = -1;
            /** @type {?} */
            var controlIndex_1 = -1;
            form.fieldsets.forEach((/**
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
                form.removeControl(key);
                form.fieldsets[fieldsetIndex_1].controls.splice(controlIndex_1, 1);
                this.triggerEvent({ controlKey: key, prop: 'removeControl', value: key }, otherForm);
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
     * Allows traversing nested forms by accessing the parent form.
     *
     * @param otherForm optional parameter for getting the parent of a different form.
     * If not provided will default to the parent of the current form.
     */
    /**
     * Allows traversing nested forms by accessing the parent form.
     *
     * @param {?=} otherForm optional parameter for getting the parent of a different form.
     * If not provided will default to the parent of the current form.
     * @return {?}
     */
    FieldInteractionApi.prototype.getParent = /**
     * Allows traversing nested forms by accessing the parent form.
     *
     * @param {?=} otherForm optional parameter for getting the parent of a different form.
     * If not provided will default to the parent of the current form.
     * @return {?}
     */
    function (otherForm) {
        /** @type {?} */
        var form = otherForm || this.form;
        return form.parent;
    };
    /**
     * The index is assigned as a property on the form's associations object when the form is part of a NovoControlGroup array.
     *
     * @param otherForm optional parameter for getting the index of a different form. If not provided will default to the current form.
     * @returns the index if it exists for the current or form, or null otherwise.
     */
    /**
     * The index is assigned as a property on the form's associations object when the form is part of a NovoControlGroup array.
     *
     * @param {?=} otherForm optional parameter for getting the index of a different form. If not provided will default to the current form.
     * @return {?} the index if it exists for the current or form, or null otherwise.
     */
    FieldInteractionApi.prototype.getIndex = /**
     * The index is assigned as a property on the form's associations object when the form is part of a NovoControlGroup array.
     *
     * @param {?=} otherForm optional parameter for getting the index of a different form. If not provided will default to the current form.
     * @return {?} the index if it exists for the current or form, or null otherwise.
     */
    function (otherForm) {
        /** @type {?} */
        var form = otherForm || this.form;
        return (form.associations && form.associations.hasOwnProperty('index')) ? form.associations.index : null;
    };
    /**
     * @private
     * @param {?} event
     * @param {?=} otherForm
     * @return {?}
     */
    FieldInteractionApi.prototype.triggerEvent = /**
     * @private
     * @param {?} event
     * @param {?=} otherForm
     * @return {?}
     */
    function (event, otherForm) {
        /** @type {?} */
        var form = otherForm || this.form;
        if (form && form.fieldInteractionEvents) {
            form.fieldInteractionEvents.emit(event);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGRJbnRlcmFjdGlvbkFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0ZpZWxkSW50ZXJhY3Rpb25BcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFckMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDakcsT0FBTyxFQUFFLGdCQUFnQixFQUFnQixNQUFNLHVCQUF1QixDQUFDO0FBRXZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBSW5GO0lBS0Usd0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsVUFBSzs7OztRQUFHLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxFQUFELENBQUMsRUFBQztJQUV1QixDQUFDOzs7Ozs7SUFFekMsNEJBQUc7Ozs7O0lBQUgsVUFBSSxHQUFXLEVBQUUsT0FBUTtRQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE9B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d0NBQXFCOzs7OztJQUNyQixnREFBMEI7O0lBNmtCMUIsK0NBb0JFOztJQVdGLG9EQTZCRTs7Ozs7SUEvbkJBLHNDQUFpQzs7Ozs7SUFDakMsMkNBQXNDOzs7OztJQUN0Qyx3Q0FBNEI7Ozs7O0lBQzVCLG1DQUF3Qjs7Ozs7SUFDeEIscUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgQXBwQnJpZGdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBwLWJyaWRnZS9BcHBCcmlkZ2UnO1xuaW1wb3J0IHsgRm9ybVV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybS11dGlscy9Gb3JtVXRpbHMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvRm9ybUNvbnRyb2wgfSBmcm9tICcuL05vdm9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgeyBOb3ZvTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kYWwvTW9kYWxTZXJ2aWNlJztcbmltcG9ydCB7IEVudGl0eVBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi9waWNrZXIvZXh0cmFzL2VudGl0eS1waWNrZXItcmVzdWx0cy9FbnRpdHlQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IE5vdm9Ub2FzdFNlcnZpY2UsIFRvYXN0T3B0aW9ucyB9IGZyb20gJy4uL3RvYXN0L1RvYXN0U2VydmljZSc7XG5pbXBvcnQgeyBDdXN0b21IdHRwLCBNb2RpZnlQaWNrZXJDb25maWdBcmdzLCBPcHRpb25zRnVuY3Rpb24gfSBmcm9tICcuL0ZpZWxkSW50ZXJhY3Rpb25BcGlUeXBlcyc7XG5pbXBvcnQgeyBDb250cm9sQ29uZmlybU1vZGFsLCBDb250cm9sUHJvbXB0TW9kYWwgfSBmcm9tICcuL0ZpZWxkSW50ZXJhY3Rpb25Nb2RhbHMnO1xuaW1wb3J0IHsgTm92b0NvbnRyb2xDb25maWcgfSBmcm9tICcuL0Zvcm1Db250cm9scyc7XG5pbXBvcnQgeyBJRmllbGRJbnRlcmFjdGlvbkV2ZW50LCBOb3ZvRmllbGRzZXQsIE5vdm9Gb3JtR3JvdXAsIFJlc3VsdHNUZW1wbGF0ZVR5cGUgfSBmcm9tICcuL0Zvcm1JbnRlcmZhY2VzJztcblxuY2xhc3MgQ3VzdG9tSHR0cEltcGwgaW1wbGVtZW50cyBDdXN0b21IdHRwIHtcbiAgdXJsOiBzdHJpbmc7XG4gIG9wdGlvbnM7XG4gIG1hcEZuID0gKHgpID0+IHg7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM/KTogQ3VzdG9tSHR0cCB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1hcChtYXBGbik6IEN1c3RvbUh0dHAge1xuICAgIHRoaXMubWFwRm4gPSBtYXBGbjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN1YnNjcmliZShyZXNvbHZlLCByZWplY3Q/KTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMudXJsLCB0aGlzLm9wdGlvbnMpXG4gICAgICAucGlwZShtYXAodGhpcy5tYXBGbikpXG4gICAgICAuc3Vic2NyaWJlKHJlc29sdmUsIHJlamVjdCk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkSW50ZXJhY3Rpb25BcGkge1xuICBwcml2YXRlIF9nbG9iYWxzO1xuICBmb3JtOiBOb3ZvRm9ybUdyb3VwIHwgYW55O1xuICBwcml2YXRlIF9jdXJyZW50S2V5OiBzdHJpbmc7XG4gIGFwcEJyaWRnZTogQXBwQnJpZGdlO1xuICBwcml2YXRlIGFzeW5jQmxvY2tUaW1lb3V0O1xuXG4gIHN0YXRpYyBGSUVMRF9QT1NJVElPTlMgPSB7XG4gICAgQUJPVkVfRklFTEQ6ICdBQk9WRV9GSUVMRCcsXG4gICAgQkVMT1dfRklFTEQ6ICdCRUxPV19GSUVMRCcsXG4gICAgVE9QX09GX0ZPUk06ICdUT1BfT0ZfRk9STScsXG4gICAgQk9UVE9NX09GX0ZPUk06ICdCT1RUT01fT0ZfRk9STScsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0b2FzdGVyOiBOb3ZvVG9hc3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOb3ZvTW9kYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybVV0aWxzOiBGb3JtVXRpbHMsXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICApIHsgfVxuXG4gIGdldCBhc3NvY2lhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5oYXNPd25Qcm9wZXJ0eSgnYXNzb2NpYXRpb25zJykgPyB0aGlzLmZvcm0uYXNzb2NpYXRpb25zIDoge307XG4gIH1cblxuICBnZXQgY3VycmVudEVudGl0eSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZvcm0uaGFzT3duUHJvcGVydHkoJ2N1cnJlbnRFbnRpdHknKSA/IHRoaXMuZm9ybS5jdXJyZW50RW50aXR5IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRFbnRpdHlJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZvcm0uaGFzT3duUHJvcGVydHkoJ2N1cnJlbnRFbnRpdHlJZCcpID8gdGhpcy5mb3JtLmN1cnJlbnRFbnRpdHlJZCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBpc0VkaXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5oYXNPd25Qcm9wZXJ0eSgnZWRpdCcpID8gdGhpcy5mb3JtLmVkaXQgOiBmYWxzZTtcbiAgfVxuXG4gIGdldCBpc0FkZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmhhc093blByb3BlcnR5KCdlZGl0JykgPyAhdGhpcy5mb3JtLmVkaXQgOiBmYWxzZTtcbiAgfVxuXG4gIHNldCBnbG9iYWxzKGdsb2JhbHMpIHtcbiAgICB0aGlzLl9nbG9iYWxzID0gZ2xvYmFscztcbiAgfVxuXG4gIGdldCBnbG9iYWxzKCkge1xuICAgIHJldHVybiB0aGlzLl9nbG9iYWxzO1xuICB9XG5cbiAgc2V0IGN1cnJlbnRLZXkoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jdXJyZW50S2V5ID0ga2V5O1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRLZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEtleTtcbiAgfVxuXG4gIGlzQWN0aXZlQ29udHJvbFZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZ2V0VmFsdWUodGhpcy5jdXJyZW50S2V5KTtcbiAgfVxuXG4gIGdldEFjdGl2ZUNvbnRyb2woKTogTm92b0Zvcm1Db250cm9sIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb250cm9sKHRoaXMuY3VycmVudEtleSk7XG4gIH1cblxuICBnZXRBY3RpdmVLZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50S2V5O1xuICB9XG5cbiAgZ2V0QWN0aXZlVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUodGhpcy5jdXJyZW50S2V5KTtcbiAgfVxuXG4gIGdldEFjdGl2ZUluaXRpYWxWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbml0aWFsVmFsdWUodGhpcy5jdXJyZW50S2V5KTtcbiAgfVxuXG4gIGdldEZpZWxkU2V0KGtleTogc3RyaW5nLCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKTogTm92b0ZpZWxkc2V0IHtcbiAgICBpZiAoIWtleSkge1xuICAgICAgY29uc29sZS5lcnJvcignW0ZpZWxkSW50ZXJhY3Rpb25BUEldIC0gaW52YWxpZCBvciBtaXNzaW5nIFwia2V5XCInKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybSA9IG90aGVyRm9ybSB8fCB0aGlzLmZvcm07XG4gICAgY29uc3QgZmllbGRTZXQgPSBmb3JtLmZpZWxkc2V0cy5maW5kKChmczogTm92b0ZpZWxkc2V0KSA9PiBmcy5rZXkgJiYgZnMua2V5LnRvTG93ZXJDYXNlKCkgPT09IGtleS50b0xvd2VyQ2FzZSgpKTtcbiAgICBpZiAoIWZpZWxkU2V0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRmllbGRJbnRlcmFjdGlvbkFQSV0gLSBjb3VsZCBub3QgZmluZCBhIGZpZWxkc2V0IGluIHRoZSBmb3JtIGJ5IHRoZSBrZXkgLS0nLCBrZXkpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmllbGRTZXQgYXMgTm92b0ZpZWxkc2V0O1xuICB9XG5cbiAgZ2V0Q29udHJvbChrZXk6IHN0cmluZywgb3RoZXJGb3JtPzogTm92b0Zvcm1Hcm91cCkge1xuICAgIGlmICgha2V5KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRmllbGRJbnRlcmFjdGlvbkFQSV0gLSBpbnZhbGlkIG9yIG1pc3NpbmcgXCJrZXlcIicpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtID0gb3RoZXJGb3JtIHx8IHRoaXMuZm9ybTtcbiAgICBjb25zdCBjb250cm9sID0gZm9ybS5jb250cm9sc1trZXldIGFzIE5vdm9Gb3JtQ29udHJvbDtcbiAgICBpZiAoIWNvbnRyb2wpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tGaWVsZEludGVyYWN0aW9uQVBJXSAtIGNvdWxkIG5vdCBmaW5kIGEgY29udHJvbCBpbiB0aGUgZm9ybSBieSB0aGUga2V5IC0tJywga2V5KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cblxuICBnZXRGb3JtR3JvdXBBcnJheShrZXk6IHN0cmluZywgb3RoZXJGb3JtPzogTm92b0Zvcm1Hcm91cCk6IE5vdm9Gb3JtR3JvdXBbXSB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tGaWVsZEludGVyYWN0aW9uQVBJXSAtIGludmFsaWQgb3IgbWlzc2luZyBcImtleVwiJyk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm0gPSBvdGhlckZvcm0gfHwgdGhpcy5mb3JtO1xuICAgIGNvbnN0IGZvcm1BcnJheSA9IGZvcm0uY29udHJvbHNba2V5XSBhcyBGb3JtQXJyYXk7XG4gICAgaWYgKCFmb3JtQXJyYXkgfHwgIWZvcm1BcnJheS5jb250cm9scykge1xuICAgICAgY29uc29sZS5lcnJvcignW0ZpZWxkSW50ZXJhY3Rpb25BUEldIC0gY291bGQgbm90IGZpbmQgYSBmb3JtIGFycmF5IGluIHRoZSBmb3JtIGJ5IHRoZSBrZXkgLS0nLCBrZXkpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybUFycmF5LmNvbnRyb2xzIGFzIE5vdm9Gb3JtR3JvdXBbXSB8IGFueTtcbiAgfVxuXG4gIGdldFZhbHVlKGtleTogc3RyaW5nLCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBjb250cm9sLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldFJhd1ZhbHVlKGtleTogc3RyaW5nLCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIHJldHVybiBjb250cm9sLnJhd1ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldEluaXRpYWxWYWx1ZShrZXk6IHN0cmluZywgb3RoZXJGb3JtPzogTm92b0Zvcm1Hcm91cCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5LCBvdGhlckZvcm0pO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICByZXR1cm4gY29udHJvbC5pbml0aWFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2V0VmFsdWUoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgdmFsdWUsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U/OiBib29sZWFuO1xuICAgICAgZW1pdFZpZXdUb01vZGVsQ2hhbmdlPzogYm9vbGVhbjtcbiAgICB9LFxuICAgIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXAsXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5LCBvdGhlckZvcm0pO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuc2V0VmFsdWUodmFsdWUsIG9wdGlvbnMpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICd2YWx1ZScsIHZhbHVlIH0sIG90aGVyRm9ybSk7XG4gICAgfVxuICB9XG5cbiAgcGF0Y2hWYWx1ZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICB2YWx1ZSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICAgIGVtaXRNb2RlbFRvVmlld0NoYW5nZT86IGJvb2xlYW47XG4gICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U/OiBib29sZWFuO1xuICAgIH0sXG4gICAgb3RoZXJGb3JtPzogTm92b0Zvcm1Hcm91cCxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3ZhbHVlJywgdmFsdWUgfSwgb3RoZXJGb3JtKTtcbiAgICB9XG4gIH1cblxuICBzZXRSZWFkT25seShrZXk6IHN0cmluZywgaXNSZWFkT25seTogYm9vbGVhbiwgb3RoZXJGb3JtPzogTm92b0Zvcm1Hcm91cCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5LCBvdGhlckZvcm0pO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuc2V0UmVhZE9ubHkoaXNSZWFkT25seSk7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ3JlYWRPbmx5JywgdmFsdWU6IGlzUmVhZE9ubHkgfSwgb3RoZXJGb3JtKTtcbiAgICB9XG4gIH1cblxuICBzZXRSZXF1aXJlZChrZXk6IHN0cmluZywgcmVxdWlyZWQ6IGJvb2xlYW4sIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSwgb3RoZXJGb3JtKTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLnNldFJlcXVpcmVkKHJlcXVpcmVkKTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAncmVxdWlyZWQnLCB2YWx1ZTogcmVxdWlyZWQgfSwgb3RoZXJGb3JtKTtcbiAgICB9XG4gIH1cblxuICBoaWRlKGtleTogc3RyaW5nLCBjbGVhclZhbHVlID0gdHJ1ZSwgb3RoZXJGb3JtPzogTm92b0Zvcm1Hcm91cCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5LCBvdGhlckZvcm0pO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuaGlkZShjbGVhclZhbHVlKTtcbiAgICAgIHRoaXMuZGlzYWJsZShrZXksIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnaGlkZGVuJywgdmFsdWU6IHRydWUgfSwgb3RoZXJGb3JtKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cblxuICBzaG93KGtleTogc3RyaW5nLCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5zaG93KCk7XG4gICAgICB0aGlzLmVuYWJsZShrZXksIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAnaGlkZGVuJywgdmFsdWU6IGZhbHNlIH0sIG90aGVyRm9ybSk7XG4gICAgfVxuICB9XG5cbiAgaGlkZUZpZWxkU2V0SGVhZGVyKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgZmllbGRTZXQgPSB0aGlzLmdldEZpZWxkU2V0KGtleSk7XG4gICAgaWYgKGZpZWxkU2V0KSB7XG4gICAgICBmaWVsZFNldC5oaWRkZW4gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHNob3dGaWVsZFNldEhlYWRlcihrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGZpZWxkU2V0ID0gdGhpcy5nZXRGaWVsZFNldChrZXkpO1xuICAgIGlmIChmaWVsZFNldCkge1xuICAgICAgZmllbGRTZXQuaGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZGlzYWJsZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICB9LFxuICAgIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXAsXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5LCBvdGhlckZvcm0pO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuZGlzYWJsZShvcHRpb25zKTtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAncmVhZE9ubHknLCB2YWx1ZTogdHJ1ZSB9LCBvdGhlckZvcm0pO1xuICAgIH1cbiAgfVxuXG4gIGVuYWJsZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhbjtcbiAgICB9LFxuICAgIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXAsXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5LCBvdGhlckZvcm0pO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wuZW5hYmxlKG9wdGlvbnMpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdyZWFkT25seScsIHZhbHVlOiBmYWxzZSB9LCBvdGhlckZvcm0pO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtBc0ludmFsaWQoa2V5OiBzdHJpbmcsIHZhbGlkYXRpb25NZXNzYWdlPzogc3RyaW5nLCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgY29udHJvbC5tYXJrQXNJbnZhbGlkKHZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdlcnJvcnMnLCB2YWx1ZTogdmFsaWRhdGlvbk1lc3NhZ2UgfSwgb3RoZXJGb3JtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtYXJrQXNWYWxpZChrZXk6IHN0cmluZywgb3RoZXJGb3JtPzogTm92b0Zvcm1Hcm91cCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5LCBvdGhlckZvcm0pO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICAgIGNvbnRyb2wubWFya0FzVmFsaWQoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdlcnJvcnMnLCB2YWx1ZTogbnVsbCB9LCBvdGhlckZvcm0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1hcmtBc0RpcnR5KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgfSxcbiAgICBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwLFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSwgb3RoZXJGb3JtKTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLm1hcmtBc0RpcnR5KG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtBc1BlbmRpbmcoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIG9ubHlTZWxmPzogYm9vbGVhbjtcbiAgICB9LFxuICAgIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXAsXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5LCBvdGhlckZvcm0pO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnRyb2wubWFya0FzUGVuZGluZyhvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBtYXJrQXNQcmlzdGluZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgb25seVNlbGY/OiBib29sZWFuO1xuICAgIH0sXG4gICAgb3RoZXJGb3JtPzogTm92b0Zvcm1Hcm91cCxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC5tYXJrQXNQcmlzdGluZShvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBtYXJrQXNUb3VjaGVkKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgfSxcbiAgICBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwLFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSwgb3RoZXJGb3JtKTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQob3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgbWFya0FzVW50b3VjaGVkKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgfSxcbiAgICBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwLFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSwgb3RoZXJGb3JtKTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sLm1hcmtBc1VudG91Y2hlZChvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBvbmx5U2VsZj86IGJvb2xlYW47XG4gICAgICBlbWl0RXZlbnQ/OiBib29sZWFuO1xuICAgIH0sXG4gICAgb3RoZXJGb3JtPzogTm92b0Zvcm1Hcm91cCxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlUb2FzdCh0b2FzdENvbmZpZzogVG9hc3RPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudG9hc3Rlcikge1xuICAgICAgdGhpcy50b2FzdGVyLmFsZXJ0KHRvYXN0Q29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5VGlwKGtleTogc3RyaW5nLCB0aXA6IHN0cmluZywgaWNvbj86IHN0cmluZywgYWxsb3dEaXNtaXNzPzogYm9vbGVhbiwgc2FuaXRpemU/OiBib29sZWFuLCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC50aXBXZWxsID0ge1xuICAgICAgICB0aXAsXG4gICAgICAgIGljb24sXG4gICAgICAgIGJ1dHRvbjogYWxsb3dEaXNtaXNzLFxuICAgICAgICBzYW5pdGl6ZTogc2FuaXRpemUgIT09IGZhbHNlLCAvLyBkZWZhdWx0cyB0byB0cnVlIHdoZW4gdW5kZWZpbmVkXG4gICAgICB9O1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICd0aXBXZWxsJywgdmFsdWU6IHRpcCB9LCBvdGhlckZvcm0pO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyVGlwKGtleTogc3RyaW5nLCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC50aXBXZWxsID0gbnVsbDtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAndGlwV2VsbCcsIHZhbHVlOiBudWxsIH0sIG90aGVyRm9ybSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VG9vbHRpcChrZXk6IHN0cmluZywgdG9vbHRpcDogc3RyaW5nLCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgY29udHJvbC50b29sdGlwID0gdG9vbHRpcDtcbiAgICAgIGlmICh0b29sdGlwLmxlbmd0aCA+PSA0MCAmJiB0b29sdGlwLmxlbmd0aCA8PSA0MDApIHtcbiAgICAgICAgY29udHJvbC50b29sdGlwU2l6ZSA9ICdsYXJnZSc7XG4gICAgICAgIGNvbnRyb2wudG9vbHRpcFByZWxpbmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0b29sdGlwLmxlbmd0aCA+IDQwMCkge1xuICAgICAgICBjb250cm9sLnRvb2x0aXBTaXplID0gJ2V4dHJhLWxhcmdlJztcbiAgICAgIH1cbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAndG9vbHRpcCcsIHZhbHVlOiB0b29sdGlwIH0sIG90aGVyRm9ybSk7XG4gICAgfVxuICB9XG5cbiAgY29uZmlybUNoYW5nZXMoa2V5OiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5nZXRQcm9wZXJ0eShrZXksICd2YWx1ZUhpc3RvcnknKTtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IGhpc3RvcnlbaGlzdG9yeS5sZW5ndGggLSAyXTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoa2V5KTtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0UHJvcGVydHkoa2V5LCAnbGFiZWwnKTtcbiAgICAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBhbnkpLmJsdXIoKTtcbiAgICByZXR1cm4gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihDb250cm9sQ29uZmlybU1vZGFsLCB7IG9sZFZhbHVlLCBuZXdWYWx1ZSwgbGFiZWwsIG1lc3NhZ2UsIGtleSB9KS5vbkNsb3NlZC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoa2V5LCBvbGRWYWx1ZSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJvbXB0VXNlcihrZXk6IHN0cmluZywgY2hhbmdlczogc3RyaW5nW10pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBhbnkpLmJsdXIoKTtcbiAgICByZXR1cm4gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihDb250cm9sUHJvbXB0TW9kYWwsIHsgY2hhbmdlcywga2V5IH0pLm9uQ2xvc2VkO1xuICB9XG5cbiAgc2V0UHJvcGVydHkoa2V5OiBzdHJpbmcsIHByb3A6IHN0cmluZywgdmFsdWUsIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSwgb3RoZXJGb3JtKTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBjb250cm9sW3Byb3BdID0gdmFsdWU7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcCwgdmFsdWUgfSwgb3RoZXJGb3JtKTtcbiAgICB9XG4gIH1cblxuICBnZXRQcm9wZXJ0eShrZXk6IHN0cmluZywgcHJvcDogc3RyaW5nLCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgcmV0dXJuIGNvbnRyb2xbcHJvcF07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaXNWYWx1ZUVtcHR5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKGtleSk7XG4gICAgcmV0dXJuIEhlbHBlcnMuaXNFbXB0eSh2YWx1ZSk7XG4gIH1cblxuICBpc1ZhbHVlQmxhbmsoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoa2V5KTtcbiAgICByZXR1cm4gSGVscGVycy5pc0JsYW5rKHZhbHVlKTtcbiAgfVxuXG4gIGhhc0ZpZWxkKGtleTogc3RyaW5nLCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZm9ybSA9IG90aGVyRm9ybSB8fCB0aGlzLmZvcm07XG4gICAgcmV0dXJuICEhZm9ybS5jb250cm9sc1trZXldO1xuICB9XG5cbiAgYWRkU3RhdGljT3B0aW9uKGtleTogc3RyaW5nLCBuZXdPcHRpb24sIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXApOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSwgb3RoZXJGb3JtKTtcbiAgICBsZXQgb3B0aW9uVG9BZGQgPSBuZXdPcHRpb247XG4gICAgbGV0IGlzVW5pcXVlID0gdHJ1ZTtcbiAgICBpZiAoY29udHJvbCAmJiAhY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBsZXQgY3VycmVudE9wdGlvbnMgPSB0aGlzLmdldFByb3BlcnR5KGtleSwgJ29wdGlvbnMnKTtcbiAgICAgIGlmICghY3VycmVudE9wdGlvbnMgfHwgIWN1cnJlbnRPcHRpb25zLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldFByb3BlcnR5KGtleSwgJ2NvbmZpZycpO1xuICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgY3VycmVudE9wdGlvbnMgPSBjb25maWcub3B0aW9ucztcbiAgICAgICAgICBpZiAoY3VycmVudE9wdGlvbnMgJiYgQXJyYXkuaXNBcnJheShjdXJyZW50T3B0aW9ucykpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50T3B0aW9uc1swXS52YWx1ZSAmJiAhb3B0aW9uVG9BZGQudmFsdWUpIHtcbiAgICAgICAgICAgICAgb3B0aW9uVG9BZGQgPSB7IHZhbHVlOiBuZXdPcHRpb24sIGxhYmVsOiBuZXdPcHRpb24gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbmZpZy5vcHRpb25zID0gWy4uLmN1cnJlbnRPcHRpb25zLCBvcHRpb25Ub0FkZF07XG4gICAgICAgICAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ2NvbmZpZycsIGNvbmZpZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY3VycmVudE9wdGlvbnNbMF0udmFsdWUgJiYgIW9wdGlvblRvQWRkLnZhbHVlKSB7XG4gICAgICAgICAgb3B0aW9uVG9BZGQgPSB7IHZhbHVlOiBuZXdPcHRpb24sIGxhYmVsOiBuZXdPcHRpb24gfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbnN1cmUgZHVwbGljYXRlIHZhbHVlcyBhcmUgbm90IGFkZGVkXG4gICAgICAgIGN1cnJlbnRPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgIGlmICgob3B0aW9uLnZhbHVlICYmIG9wdGlvbi52YWx1ZSA9PT0gb3B0aW9uVG9BZGQudmFsdWUpIHx8IG9wdGlvbiA9PT0gb3B0aW9uVG9BZGQpIHtcbiAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzVW5pcXVlKSB7XG4gICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICdvcHRpb25zJywgWy4uLmN1cnJlbnRPcHRpb25zLCBvcHRpb25Ub0FkZF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNVbmlxdWUpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdvcHRpb25zJywgdmFsdWU6IFsuLi5jdXJyZW50T3B0aW9ucywgb3B0aW9uVG9BZGRdIH0sIG90aGVyRm9ybSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlU3RhdGljT3B0aW9uKGtleTogc3RyaW5nLCBvcHRpb25Ub1JlbW92ZTogc3RyaW5nLCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgbGV0IGN1cnJlbnRPcHRpb25zID0gdGhpcy5nZXRQcm9wZXJ0eShrZXksICdvcHRpb25zJyk7XG4gICAgICBpZiAoIWN1cnJlbnRPcHRpb25zIHx8ICFjdXJyZW50T3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXRQcm9wZXJ0eShrZXksICdjb25maWcnKTtcbiAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgIGN1cnJlbnRPcHRpb25zID0gY29uZmlnLm9wdGlvbnM7XG4gICAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25zICYmIEFycmF5LmlzQXJyYXkoY3VycmVudE9wdGlvbnMpKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGN1cnJlbnRPcHRpb25zLmZvckVhY2goKG9wdCwgaSkgPT4ge1xuICAgICAgICAgICAgICBpZiAob3B0LnZhbHVlIHx8IG9wdC5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGlmIChvcHQudmFsdWUgPT09IG9wdGlvblRvUmVtb3ZlIHx8IG9wdC5sYWJlbCA9PT0gb3B0aW9uVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdCA9PT0gb3B0aW9uVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICBjdXJyZW50T3B0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uZmlnLm9wdGlvbnMgPSBbLi4uY3VycmVudE9wdGlvbnNdO1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICdjb25maWcnLCBjb25maWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGN1cnJlbnRPcHRpb25zLmZvckVhY2goKG9wdCwgaSkgPT4ge1xuICAgICAgICAgIGlmIChvcHQudmFsdWUgfHwgb3B0LmxhYmVsKSB7XG4gICAgICAgICAgICBpZiAob3B0LnZhbHVlID09PSBvcHRpb25Ub1JlbW92ZSB8fCBvcHQubGFiZWwgPT09IG9wdGlvblRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9wdCA9PT0gb3B0aW9uVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnb3B0aW9ucycsIFsuLi5jdXJyZW50T3B0aW9uc10pO1xuICAgICAgfVxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdvcHRpb25zJywgdmFsdWU6IGNvbnRyb2wub3B0aW9ucyB9LCBvdGhlckZvcm0pO1xuICAgIH1cbiAgfVxuXG4gIG1vZGlmeVBpY2tlckNvbmZpZyhcbiAgICBrZXk6IHN0cmluZyxcbiAgICBjb25maWc6IHtcbiAgICAgIGZvcm1hdD86IHN0cmluZztcbiAgICAgIG9wdGlvbnNVcmw/OiBzdHJpbmc7XG4gICAgICBvcHRpb25zVXJsQnVpbGRlcj86IEZ1bmN0aW9uO1xuICAgICAgb3B0aW9uc1Byb21pc2U/O1xuICAgICAgb3B0aW9ucz86IGFueVtdO1xuICAgICAgcmVzdWx0c1RlbXBsYXRlVHlwZT86IFJlc3VsdHNUZW1wbGF0ZVR5cGU7XG4gICAgfSxcbiAgICBtYXBwZXI/LFxuICApOiB2b2lkIHtcbiAgICAvLyBjYWxsIGFub3RoZXIgbWV0aG9kIHRvIGF2b2lkIGEgYnJlYWtpbmcgY2hhbmdlIGJ1dCBzdGlsbCBlbmFibGUgc3RyaWN0ZXIgdHlwZXNcbiAgICB0aGlzLm11dGF0ZVBpY2tlckNvbmZpZyhrZXksIGNvbmZpZyBhcyBNb2RpZnlQaWNrZXJDb25maWdBcmdzLCBtYXBwZXIpO1xuICB9XG5cbiAgbXV0YXRlUGlja2VyQ29uZmlnKGtleTogc3RyaW5nLCBhcmdzOiBNb2RpZnlQaWNrZXJDb25maWdBcmdzLCBtYXBwZXI/OiAoaXRlbTogdW5rbm93bikgPT4gdW5rbm93biwgb3RoZXJGb3JtPzogTm92b0Zvcm1Hcm91cCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5LCBvdGhlckZvcm0pO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGNvbnN0IHsgbWluU2VhcmNoTGVuZ3RoLCBlbmFibGVJbmZpbml0ZVNjcm9sbCwgZmlsdGVyZWRPcHRpb25zQ3JlYXRvciwgZm9ybWF0LCBnZXRMYWJlbHMsIGVtcHR5UGlja2VyTWVzc2FnZSB9ID0gY29udHJvbC5jb25maWc7XG4gICAgICBjb25zdCBvcHRpb25zQ29uZmlnID0gdGhpcy5nZXRPcHRpb25zQ29uZmlnKGFyZ3MsIG1hcHBlciwgZmlsdGVyZWRPcHRpb25zQ3JlYXRvciwgZm9ybWF0KTtcblxuICAgICAgY29uc3QgbmV3Q29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZ1snY29uZmlnJ10gPSB7XG4gICAgICAgIC4uLihlbXB0eVBpY2tlck1lc3NhZ2UgJiYgeyBlbXB0eVBpY2tlck1lc3NhZ2UgfSksXG4gICAgICAgIC4uLihOdW1iZXIuaXNJbnRlZ2VyKG1pblNlYXJjaExlbmd0aCkgJiYgeyBtaW5TZWFyY2hMZW5ndGggfSksXG4gICAgICAgIC4uLihlbmFibGVJbmZpbml0ZVNjcm9sbCAmJiB7IGVuYWJsZUluZmluaXRlU2Nyb2xsIH0pLFxuICAgICAgICAuLi4oZmlsdGVyZWRPcHRpb25zQ3JlYXRvciAmJiB7IGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IgfSksXG4gICAgICAgIC4uLihnZXRMYWJlbHMgJiYgeyBnZXRMYWJlbHMgfSksXG4gICAgICAgIC4uLihvcHRpb25zQ29uZmlnICYmIG9wdGlvbnNDb25maWcpLFxuICAgICAgICByZXN1bHRzVGVtcGxhdGU6XG4gICAgICAgICAgY29udHJvbC5jb25maWcucmVzdWx0c1RlbXBsYXRlIHx8ICgncmVzdWx0c1RlbXBsYXRlVHlwZScgaW4gYXJncyAmJiB0aGlzLmdldEFwcHJvcHJpYXRlUmVzdWx0c1RlbXBsYXRlKGFyZ3MucmVzdWx0c1RlbXBsYXRlVHlwZSkpLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5zZXRQcm9wZXJ0eShrZXksICdjb25maWcnLCBuZXdDb25maWcpO1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdwaWNrZXJDb25maWcnLCB2YWx1ZTogYXJncyB9LCBvdGhlckZvcm0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZFByb3BlcnRpZXNUb1BpY2tlckNvbmZpZyhrZXk6IHN0cmluZywgcHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0sIG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXApIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sKGtleSwgb3RoZXJGb3JtKTtcbiAgICBpZiAoIWNvbnRyb2wgfHwgY29udHJvbC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgLi4uY29udHJvbC5jb25maWcsXG4gICAgICAuLi5wcm9wZXJ0aWVzLFxuICAgIH07XG5cbiAgICB0aGlzLnNldFByb3BlcnR5KGtleSwgJ2NvbmZpZycsIGNvbmZpZyk7XG4gICAgdGhpcy50cmlnZ2VyRXZlbnQoeyBjb250cm9sS2V5OiBrZXksIHByb3A6ICdwaWNrZXJDb25maWcnLCB2YWx1ZTogcHJvcGVydGllcyB9LCBvdGhlckZvcm0pO1xuICB9XG4gIGdldE9wdGlvbnNDb25maWcgPSAoXG4gICAgYXJnczogTW9kaWZ5UGlja2VyQ29uZmlnQXJncyxcbiAgICBtYXBwZXI/OiAoaXRlbTogdW5rbm93bikgPT4gdW5rbm93bixcbiAgICBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yPzogKHdoZXJlOiBzdHJpbmcpID0+IChxdWVyeTogc3RyaW5nKSA9PiBQcm9taXNlPHVua25vd25bXT4sXG4gICAgcGlja2VyQ29uZmlnRm9ybWF0Pzogc3RyaW5nLFxuICApOiB1bmRlZmluZWQgfCB7IG9wdGlvbnM6IHVua25vd25bXSB9IHwgeyBvcHRpb25zOiBPcHRpb25zRnVuY3Rpb247IGZvcm1hdD86IHN0cmluZyB9ID0+IHtcbiAgICBpZiAoZmlsdGVyZWRPcHRpb25zQ3JlYXRvciB8fCAnb3B0aW9uc1VybCcgaW4gYXJncyB8fCAnb3B0aW9uc1VybEJ1aWxkZXInIGluIGFyZ3MgfHwgJ29wdGlvbnNQcm9taXNlJyBpbiBhcmdzKSB7XG4gICAgICBjb25zdCBmb3JtYXQgPSAoJ2Zvcm1hdCcgaW4gYXJncyAmJiBhcmdzLmZvcm1hdCkgfHwgcGlja2VyQ29uZmlnRm9ybWF0O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3B0aW9uczogdGhpcy5jcmVhdGVPcHRpb25zRnVuY3Rpb24oYXJncywgbWFwcGVyLCBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yKSxcbiAgICAgICAgLi4uKCdlbXB0eVBpY2tlck1lc3NhZ2UnIGluIGFyZ3MgJiYgeyBlbXB0eVBpY2tlck1lc3NhZ2U6IGFyZ3MuZW1wdHlQaWNrZXJNZXNzYWdlIH0pLFxuICAgICAgICAuLi4oZm9ybWF0ICYmIHsgZm9ybWF0IH0pLFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKCdvcHRpb25zJyBpbiBhcmdzICYmIEFycmF5LmlzQXJyYXkoYXJncy5vcHRpb25zKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3B0aW9uczogWy4uLmFyZ3Mub3B0aW9uc10sXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIGdldEFwcHJvcHJpYXRlUmVzdWx0c1RlbXBsYXRlKHJlc3VsdHNUZW1wbGF0ZVR5cGU6IFJlc3VsdHNUZW1wbGF0ZVR5cGUpIHtcbiAgICBzd2l0Y2ggKHJlc3VsdHNUZW1wbGF0ZVR5cGUpIHtcbiAgICAgIGNhc2UgJ2VudGl0eS1waWNrZXInOlxuICAgICAgICByZXR1cm4gRW50aXR5UGlja2VyUmVzdWx0cztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlT3B0aW9uc0Z1bmN0aW9uID0gKFxuICAgIGNvbmZpZzogTW9kaWZ5UGlja2VyQ29uZmlnQXJncyxcbiAgICBtYXBwZXI/OiAoaXRlbTogdW5rbm93bikgPT4gdW5rbm93bixcbiAgICBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yPzogKHdoZXJlPzogc3RyaW5nKSA9PiAocXVlcnk6IHN0cmluZywgcGFnZT86IG51bWJlcikgPT4gUHJvbWlzZTx1bmtub3duW10+LFxuICApOiAoKHF1ZXJ5OiBzdHJpbmcpID0+IFByb21pc2U8dW5rbm93bltdPikgPT4gKHF1ZXJ5OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIpID0+IHtcbiAgICBpZiAoJ29wdGlvbnNQcm9taXNlJyBpbiBjb25maWcgJiYgY29uZmlnLm9wdGlvbnNQcm9taXNlKSB7XG4gICAgICByZXR1cm4gY29uZmlnLm9wdGlvbnNQcm9taXNlKHF1ZXJ5LCBuZXcgQ3VzdG9tSHR0cEltcGwodGhpcy5odHRwKSwgcGFnZSk7XG4gICAgfSBlbHNlIGlmICgoJ29wdGlvbnNVcmxCdWlsZGVyJyBpbiBjb25maWcgJiYgY29uZmlnLm9wdGlvbnNVcmxCdWlsZGVyKSB8fCAoJ29wdGlvbnNVcmwnIGluIGNvbmZpZyAmJiBjb25maWcub3B0aW9uc1VybCkpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9ICdvcHRpb25zVXJsQnVpbGRlcicgaW4gY29uZmlnID8gY29uZmlnLm9wdGlvbnNVcmxCdWlsZGVyKHF1ZXJ5KSA6IGAke2NvbmZpZy5vcHRpb25zVXJsfT9maWx0ZXI9JHtxdWVyeSB8fCAnJ31gO1xuICAgICAgICB0aGlzLmh0dHBcbiAgICAgICAgICAuZ2V0KHVybClcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1hcCgocmVzdWx0czogdW5rbm93bltdKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChtYXBwZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cy5tYXAobWFwcGVyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIClcbiAgICAgICAgICAuc3Vic2NyaWJlKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGZpbHRlcmVkT3B0aW9uc0NyZWF0b3IpIHtcbiAgICAgIGlmICgnd2hlcmUnIGluIGNvbmZpZykge1xuICAgICAgICByZXR1cm4gZmlsdGVyZWRPcHRpb25zQ3JlYXRvcihjb25maWcud2hlcmUpKHF1ZXJ5LCBwYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZE9wdGlvbnNDcmVhdG9yKCkocXVlcnksIHBhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzZXRMb2FkaW5nKGtleTogc3RyaW5nLCBsb2FkaW5nOiBib29sZWFuLCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKSB7XG4gICAgY29uc3QgZm9ybSA9IG90aGVyRm9ybSB8fCB0aGlzLmZvcm07XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbChrZXksIG90aGVyRm9ybSk7XG4gICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgZm9ybS5jb250cm9sc1trZXldLmZpZWxkSW50ZXJhY3Rpb25sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgY29udHJvbC5zZXRFcnJvcnMoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgICAvLyBIaXN0b3J5XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFzeW5jQmxvY2tUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5hc3luY0Jsb2NrVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0TG9hZGluZyhrZXksIGZhbHNlKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlUaXAoa2V5LCB0aGlzLmxhYmVscy5hc3luY0ZhaWx1cmUsICdpbmZvJywgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAnX2Rpc3BsYXllZEFzeW5jRmFpbHVyZScsIHRydWUpO1xuICAgICAgICB9LCAxMDAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtLmNvbnRyb2xzW2tleV0uZmllbGRJbnRlcmFjdGlvbmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYXN5bmNCbG9ja1RpbWVvdXQpO1xuICAgICAgICBjb250cm9sLnNldEVycm9ycyh7IGxvYWRpbmc6IG51bGwgfSk7XG4gICAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgIGlmICh0aGlzLmdldFByb3BlcnR5KGtleSwgJ19kaXNwbGF5ZWRBc3luY0ZhaWx1cmUnKSkge1xuICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkoa2V5LCAndGlwV2VsbCcsIG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ2xvYWRpbmcnLCB2YWx1ZTogbG9hZGluZyB9LCBvdGhlckZvcm0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZENvbnRyb2woXG4gICAga2V5OiBzdHJpbmcsXG4gICAgbWV0YUZvck5ld0ZpZWxkOiB7IGtleT86IHN0cmluZywgdHlwZT86IHN0cmluZywgbmFtZT86IHN0cmluZywgbGFiZWw/OiBzdHJpbmcgfSxcbiAgICBwb3NpdGlvbjogc3RyaW5nID0gRmllbGRJbnRlcmFjdGlvbkFwaS5GSUVMRF9QT1NJVElPTlMuQUJPVkVfRklFTEQsXG4gICAgaW5pdGlhbFZhbHVlPyxcbiAgICBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwLFxuICApOiB2b2lkIHtcbiAgICBpZiAoIW1ldGFGb3JOZXdGaWVsZC5rZXkgJiYgIW1ldGFGb3JOZXdGaWVsZC5uYW1lKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRmllbGRJbnRlcmFjdGlvbkFQSV0gLSBtaXNzaW5nIFwia2V5XCIgaW4gbWV0YSBmb3IgbmV3IGZpZWxkJyk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghbWV0YUZvck5ld0ZpZWxkLmtleSkge1xuICAgICAgLy8gSWYga2V5IGlzIG5vdCBleHBsaWNpdGx5IGRlY2xhcmVkLCB1c2UgbmFtZSBhcyBrZXlcbiAgICAgIG1ldGFGb3JOZXdGaWVsZC5rZXkgPSBtZXRhRm9yTmV3RmllbGQubmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtID0gb3RoZXJGb3JtIHx8IHRoaXMuZm9ybTtcbiAgICBpZiAoZm9ybS5jb250cm9sc1ttZXRhRm9yTmV3RmllbGQua2V5XSkge1xuICAgICAgLy8gRmllbGQgaXMgYWxyZWFkeSBvbiB0aGUgZm9ybVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29udHJvbCA9IGZvcm0uY29udHJvbHNba2V5XTtcbiAgICBsZXQgZmllbGRzZXRJbmRleDogbnVtYmVyO1xuICAgIGxldCBjb250cm9sSW5kZXg6IG51bWJlcjtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgZmllbGRzZXRJbmRleCA9IC0xO1xuICAgICAgY29udHJvbEluZGV4ID0gLTE7XG5cbiAgICAgIGZvcm0uZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0LCBmaSkgPT4ge1xuICAgICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChmaWVsZHNldENvbnRyb2wsIGNpKSA9PiB7XG4gICAgICAgICAgaWYgKGZpZWxkc2V0Q29udHJvbC5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgZmllbGRzZXRJbmRleCA9IGZpO1xuICAgICAgICAgICAgY29udHJvbEluZGV4ID0gY2k7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDaGFuZ2UgdGhlIHBvc2l0aW9uIG9mIHRoZSBuZXdseSBhZGRlZCBmaWVsZFxuICAgICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICBjYXNlIEZpZWxkSW50ZXJhY3Rpb25BcGkuRklFTERfUE9TSVRJT05TLkFCT1ZFX0ZJRUxEOlxuICAgICAgICAgIC8vIEFkZGluZyBmaWVsZCBhYm92ZSBhY3RpdmUgZmllbGRcbiAgICAgICAgICAvLyBpbmRleCBjYW4gc3RheSB0aGUgc2FtZVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEZpZWxkSW50ZXJhY3Rpb25BcGkuRklFTERfUE9TSVRJT05TLkJFTE9XX0ZJRUxEOlxuICAgICAgICAgIC8vIEFkZGluZyBmaWVsZCBiZWxvdyBhY3RpdmUgZmllbGRcbiAgICAgICAgICBjb250cm9sSW5kZXggKz0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBGaWVsZEludGVyYWN0aW9uQXBpLkZJRUxEX1BPU0lUSU9OUy5UT1BfT0ZfRk9STTpcbiAgICAgICAgICAvLyBBZGRpbmcgZmllbGQgdG8gdGhlIHRvcCBvZiB0aGUgZm9ybVxuICAgICAgICAgIGNvbnRyb2xJbmRleCA9IDA7XG4gICAgICAgICAgZmllbGRzZXRJbmRleCA9IDA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRmllbGRJbnRlcmFjdGlvbkFwaS5GSUVMRF9QT1NJVElPTlMuQk9UVE9NX09GX0ZPUk06XG4gICAgICAgICAgLy8gQWRkaW5nIGZpZWxkIHRvIHRoZSBib3R0b20gb2YgdGhlIGZvcm1cbiAgICAgICAgICBmaWVsZHNldEluZGV4ID0gZm9ybS5maWVsZHNldHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICBjb250cm9sSW5kZXggPSBmb3JtLmZpZWxkc2V0c1tmaWVsZHNldEluZGV4XS5jb250cm9scy5sZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWVsZHNldEluZGV4ICE9PSAtMSAmJiBjb250cm9sSW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IG5vdm9Db250cm9sID0gdGhpcy5mb3JtVXRpbHMuZ2V0Q29udHJvbEZvckZpZWxkKG1ldGFGb3JOZXdGaWVsZCwgdGhpcy5odHRwLCB7fSk7XG4gICAgICAgIG5vdm9Db250cm9sLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICBjb25zdCBmb3JtQ29udHJvbCA9IG5ldyBOb3ZvRm9ybUNvbnRyb2woaW5pdGlhbFZhbHVlLCBub3ZvQ29udHJvbCk7XG4gICAgICAgIGZvcm0uYWRkQ29udHJvbChub3ZvQ29udHJvbC5rZXksIGZvcm1Db250cm9sKTtcbiAgICAgICAgZm9ybS5maWVsZHNldHNbZmllbGRzZXRJbmRleF0uY29udHJvbHMuc3BsaWNlKGNvbnRyb2xJbmRleCwgMCwgbm92b0NvbnRyb2wpO1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCh7IGNvbnRyb2xLZXk6IGtleSwgcHJvcDogJ2FkZENvbnRyb2wnLCB2YWx1ZTogZm9ybUNvbnRyb2wgfSwgb3RoZXJGb3JtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVDb250cm9sKGtleTogc3RyaW5nLCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKTogdm9pZCB7XG4gICAgY29uc3QgZm9ybSA9IG90aGVyRm9ybSB8fCB0aGlzLmZvcm07XG4gICAgaWYgKCFmb3JtLmNvbnRyb2xzW2tleV0pIHtcbiAgICAgIC8vIEZpZWxkIGlzIG5vdCBvbiB0aGUgZm9ybVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2woa2V5LCBvdGhlckZvcm0pO1xuICAgIGlmIChjb250cm9sICYmICFjb250cm9sLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGxldCBmaWVsZHNldEluZGV4ID0gLTE7XG4gICAgICBsZXQgY29udHJvbEluZGV4ID0gLTE7XG5cbiAgICAgIGZvcm0uZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0LCBmaSkgPT4ge1xuICAgICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChmaWVsZHNldENvbnRyb2wsIGNpKSA9PiB7XG4gICAgICAgICAgaWYgKGZpZWxkc2V0Q29udHJvbC5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgZmllbGRzZXRJbmRleCA9IGZpO1xuICAgICAgICAgICAgY29udHJvbEluZGV4ID0gY2k7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZmllbGRzZXRJbmRleCAhPT0gLTEgJiYgY29udHJvbEluZGV4ICE9PSAtMSkge1xuICAgICAgICBmb3JtLnJlbW92ZUNvbnRyb2woa2V5KTtcbiAgICAgICAgZm9ybS5maWVsZHNldHNbZmllbGRzZXRJbmRleF0uY29udHJvbHMuc3BsaWNlKGNvbnRyb2xJbmRleCwgMSk7XG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHsgY29udHJvbEtleToga2V5LCBwcm9wOiAncmVtb3ZlQ29udHJvbCcsIHZhbHVlOiBrZXkgfSwgb3RoZXJGb3JtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZWJvdW5jZShmdW5jOiAoKSA9PiB2b2lkLCB3YWl0ID0gNTApIHtcbiAgICBsZXQgaDtcbiAgICBjbGVhclRpbWVvdXQoaCk7XG4gICAgaCA9IHNldFRpbWVvdXQoKCkgPT4gZnVuYygpLCB3YWl0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgdHJhdmVyc2luZyBuZXN0ZWQgZm9ybXMgYnkgYWNjZXNzaW5nIHRoZSBwYXJlbnQgZm9ybS5cbiAgICpcbiAgICogQHBhcmFtIG90aGVyRm9ybSBvcHRpb25hbCBwYXJhbWV0ZXIgZm9yIGdldHRpbmcgdGhlIHBhcmVudCBvZiBhIGRpZmZlcmVudCBmb3JtLlxuICAgKiBJZiBub3QgcHJvdmlkZWQgd2lsbCBkZWZhdWx0IHRvIHRoZSBwYXJlbnQgb2YgdGhlIGN1cnJlbnQgZm9ybS5cbiAgICovXG4gIGdldFBhcmVudChvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKSB7XG4gICAgY29uc3QgZm9ybSA9IG90aGVyRm9ybSB8fCB0aGlzLmZvcm07XG4gICAgcmV0dXJuIGZvcm0ucGFyZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpbmRleCBpcyBhc3NpZ25lZCBhcyBhIHByb3BlcnR5IG9uIHRoZSBmb3JtJ3MgYXNzb2NpYXRpb25zIG9iamVjdCB3aGVuIHRoZSBmb3JtIGlzIHBhcnQgb2YgYSBOb3ZvQ29udHJvbEdyb3VwIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0gb3RoZXJGb3JtIG9wdGlvbmFsIHBhcmFtZXRlciBmb3IgZ2V0dGluZyB0aGUgaW5kZXggb2YgYSBkaWZmZXJlbnQgZm9ybS4gSWYgbm90IHByb3ZpZGVkIHdpbGwgZGVmYXVsdCB0byB0aGUgY3VycmVudCBmb3JtLlxuICAgKiBAcmV0dXJucyB0aGUgaW5kZXggaWYgaXQgZXhpc3RzIGZvciB0aGUgY3VycmVudCBvciBmb3JtLCBvciBudWxsIG90aGVyd2lzZS5cbiAgICovXG4gIGdldEluZGV4KG90aGVyRm9ybT86IE5vdm9Gb3JtR3JvdXApIHtcbiAgICBjb25zdCBmb3JtID0gb3RoZXJGb3JtIHx8IHRoaXMuZm9ybTtcbiAgICByZXR1cm4gKGZvcm0uYXNzb2NpYXRpb25zICYmIGZvcm0uYXNzb2NpYXRpb25zLmhhc093blByb3BlcnR5KCdpbmRleCcpKSA/IGZvcm0uYXNzb2NpYXRpb25zLmluZGV4IDogbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgdHJpZ2dlckV2ZW50KGV2ZW50OiBJRmllbGRJbnRlcmFjdGlvbkV2ZW50LCBvdGhlckZvcm0/OiBOb3ZvRm9ybUdyb3VwKTogdm9pZCB7XG4gICAgY29uc3QgZm9ybSA9IG90aGVyRm9ybSB8fCB0aGlzLmZvcm07XG4gICAgaWYgKGZvcm0gJiYgZm9ybS5maWVsZEludGVyYWN0aW9uRXZlbnRzKSB7XG4gICAgICBmb3JtLmZpZWxkSW50ZXJhY3Rpb25FdmVudHMuZW1pdChldmVudCk7XG4gICAgfVxuICB9XG59XG4iXX0=