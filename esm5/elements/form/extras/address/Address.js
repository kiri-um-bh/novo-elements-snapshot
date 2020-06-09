/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/extras/address/Address.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { NovoLabelService } from '../../../../services/novo-label-service';
import { COUNTRIES, findByCountryId, getStates } from '../../../../utils/countries/Countries';
import { Helpers } from '../../../../utils/Helpers';
// Value accessor for the component (supports ngModel)
/** @type {?} */
var ADDRESS_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NovoAddressElement; })),
    multi: true,
};
/**
 * @record
 */
export function NovoAddressSubfieldConfig() { }
if (false) {
    /** @type {?} */
    NovoAddressSubfieldConfig.prototype.label;
    /** @type {?} */
    NovoAddressSubfieldConfig.prototype.required;
    /** @type {?} */
    NovoAddressSubfieldConfig.prototype.maxlength;
    /** @type {?|undefined} */
    NovoAddressSubfieldConfig.prototype.pickerConfig;
    /** @type {?} */
    NovoAddressSubfieldConfig.prototype.hidden;
    /** @type {?|undefined} */
    NovoAddressSubfieldConfig.prototype.updated;
    /** @type {?|undefined} */
    NovoAddressSubfieldConfig.prototype.readOnly;
}
/**
 * @record
 */
export function NovoAddressConfig() { }
if (false) {
    /** @type {?|undefined} */
    NovoAddressConfig.prototype.required;
    /** @type {?|undefined} */
    NovoAddressConfig.prototype.readOnly;
    /** @type {?|undefined} */
    NovoAddressConfig.prototype.address1;
    /** @type {?|undefined} */
    NovoAddressConfig.prototype.address2;
    /** @type {?|undefined} */
    NovoAddressConfig.prototype.city;
    /** @type {?|undefined} */
    NovoAddressConfig.prototype.state;
    /** @type {?|undefined} */
    NovoAddressConfig.prototype.zip;
    /** @type {?|undefined} */
    NovoAddressConfig.prototype.countryID;
}
var NovoAddressElement = /** @class */ (function () {
    function NovoAddressElement(labels) {
        this.labels = labels;
        this._readOnly = false;
        this.states = [];
        this.fieldList = ['address1', 'address2', 'city', 'state', 'zip', 'countryID'];
        this.onModelChange = (/**
         * @return {?}
         */
        function () { });
        this.onModelTouched = (/**
         * @return {?}
         */
        function () { });
        this.focused = {};
        this.invalid = {};
        this.disabled = {};
        this.invalidMaxlength = {};
        this.valid = {};
        this.tooltip = {};
        this.initComplete = false;
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.validityChange = new EventEmitter();
    }
    Object.defineProperty(NovoAddressElement.prototype, "readOnly", {
        get: /**
         * @return {?}
         */
        function () {
            return this._readOnly;
        },
        set: /**
         * @param {?} readOnly
         * @return {?}
         */
        function (readOnly) {
            var _this = this;
            this._readOnly = readOnly;
            this.fieldList.forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                _this.disabled[field] = _this._readOnly;
            }));
            if (this.model) {
                this.updateStates();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoAddressElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.config) {
            this.config = {};
        }
        if (this.model) {
            this.writeValue(this.model);
            this.updateControl();
        }
        else if (!this.model) {
            this.model = {};
        }
        this.initConfig();
        if (Helpers.isBlank(this.model.countryID)) {
            this.updateStates();
        }
    };
    /**
     * @return {?}
     */
    NovoAddressElement.prototype.initConfig = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.fieldList.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            if (!_this.config.hasOwnProperty(field)) {
                _this.config[field] = {
                    hidden: true,
                };
            }
            if (!_this.config[field].hasOwnProperty('label')) {
                _this.config[field].label = _this.labels[field];
            }
            if (_this.config.required) {
                _this.config[field].required = true;
            }
            if (_this.config[field].readOnly || _this.config.readOnly) {
                _this.config[field].readOnly = true;
                _this.disabled[field] = true;
            }
            if (field === 'countryID') {
                if (!_this.config[field].pickerConfig) {
                    _this.config.countryID.pickerConfig = _this.getDefaultCountryConfig();
                }
                _this.config[field].pickerConfig.defaultOptions = _this.config.countryID.pickerConfig.options;
            }
            if (field === 'state') {
                if (!_this.config[field].pickerConfig) {
                    _this.config.state.pickerConfig = _this.getDefaultStateConfig();
                    _this.config[field].pickerConfig.defaultOptions = _this.config[field].pickerConfig.options;
                }
                _this.stateOptions = _this.config[field].pickerConfig.options;
                _this.config[field].pickerConfig.options = (/**
                 * @param {?=} query
                 * @return {?}
                 */
                function (query) {
                    if (query === void 0) { query = ''; }
                    return _this.stateOptions(query, _this.model.countryID);
                });
                _this.config[field].pickerConfig.defaultOptions = _this.stateOptions;
            }
        }));
    };
    /**
     * @param {?} field
     * @return {?}
     */
    NovoAddressElement.prototype.isValid = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var valid = true;
        if (((this.config[field].required && (Helpers.isBlank(this.model[field]) || Helpers.isEmpty(this.model[field]))) ||
            !this.config[field].required) &&
            !(field === 'countryID' && this.config[field].required && !Helpers.isBlank(this.model.countryID)) &&
            !(field === 'state' &&
                this.config[field].required &&
                (!Helpers.isEmpty(this.model.state) ||
                    ((Helpers.isBlank(this.model.state) || Helpers.isEmpty(this.model.state)) &&
                        !Helpers.isBlank(this.model.countryName) &&
                        this.config.state.pickerConfig &&
                        this.config.state.pickerConfig.defaultOptions &&
                        this.config.state.pickerConfig.defaultOptions.length === 0)))) {
            valid = false;
        }
        else if (!Helpers.isEmpty(this.model[field]) &&
            !Helpers.isBlank(this.config[field].maxlength) &&
            this.config[field].maxlength < this.model[field].length) {
            valid = false;
        }
        this.valid[field] = valid;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    NovoAddressElement.prototype.isInvalid = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var invalid = false;
        /** @type {?} */
        var invalidMaxlength = false;
        if ((field !== 'countryID' &&
            field !== 'state' &&
            this.config[field].required &&
            Helpers.isEmpty(this.model[field]) &&
            !Helpers.isBlank(this.model[field])) ||
            (field === 'countryID' && this.config[field].required && Helpers.isBlank(this.model.countryName) && this.config[field].updated) ||
            (field === 'state' &&
                this.config[field].required &&
                (Helpers.isBlank(this.model.state) || Helpers.isEmpty(this.model.state)) &&
                !Helpers.isBlank(this.model.countryID) &&
                this.config[field].updated &&
                this.config.state.pickerConfig &&
                this.config.state.pickerConfig.defaultOptions &&
                this.config.state.pickerConfig.defaultOptions.length > 0)) {
            invalid = true;
        }
        else if (!Helpers.isEmpty(this.model[field]) &&
            !Helpers.isBlank(this.config[field].maxlength) &&
            this.config[field].maxlength < this.model[field].length) {
            invalid = true;
            invalidMaxlength = true;
        }
        this.invalid[field] = invalid;
        this.invalidMaxlength[field] = invalidMaxlength;
    };
    /**
     * @param {?} event
     * @param {?} field
     * @return {?}
     */
    NovoAddressElement.prototype.onInput = /**
     * @param {?} event
     * @param {?} field
     * @return {?}
     */
    function (event, field) {
        this.isInvalid(field);
        this.isValid(field);
        if (event) {
            this.change.emit({ value: this.model[field], field: field });
        }
    };
    /**
     * @param {?} event
     * @param {?} field
     * @return {?}
     */
    NovoAddressElement.prototype.isFocused = /**
     * @param {?} event
     * @param {?} field
     * @return {?}
     */
    function (event, field) {
        this.focused[field] = true;
        this.focus.emit({ event: event, field: field });
    };
    /**
     * @param {?} event
     * @param {?} field
     * @return {?}
     */
    NovoAddressElement.prototype.isBlurred = /**
     * @param {?} event
     * @param {?} field
     * @return {?}
     */
    function (event, field) {
        this.focused[field] = false;
        this.blur.emit({ event: event, field: field });
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    NovoAddressElement.prototype.onCountryChange = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        /** @type {?} */
        var country = evt && evt.rawValue ? evt.rawValue : null;
        /** @type {?} */
        var field;
        /** @type {?} */
        var statesUpdatable = false;
        this.config.countryID.updated = true;
        if (this.config.countryID.pickerConfig) {
            field = this.config.countryID.pickerConfig.field;
        }
        if (country && field && !Helpers.isBlank(country[field]) && this.model.countryID !== country[field]) {
            this.model.countryID = country[field];
            this.model.countryName = Helpers.interpolate(this.config.countryID.pickerConfig.format, country);
            this.disabled.state = false;
            this.tooltip.state = undefined;
            statesUpdatable = true;
        }
        else if (Helpers.isBlank(country) || Helpers.isBlank(country[field])) {
            this.model.countryID = undefined;
            this.model.countryName = undefined;
            this.disabled.state = true;
            this.tooltip.state = this.labels.selectCountryFirst;
            this.invalid.state = false;
            statesUpdatable = true;
        }
        // Update state
        if (statesUpdatable) {
            this.model.state = undefined;
            this.updateStates();
        }
        this.updateControl();
        this.onInput(null, 'countryID');
        this.onInput(null, 'state');
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    NovoAddressElement.prototype.onStateChange = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        /** @type {?} */
        var state = evt && evt.value ? evt.value : null;
        this.config.state.updated = true;
        this.model.state = state;
        this.updateControl();
        this.onInput(null, 'state');
    };
    /**
     * @param {?} model
     * @return {?}
     */
    NovoAddressElement.prototype.setStateLabel = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        /** @type {?} */
        var state = model.state;
        if (!Helpers.isBlank(state)) {
            if (this.config.state.required) {
                this.valid.state = true;
            }
            this.model.state = state;
        }
        else {
            this.model.state = undefined;
            if (this.config.state.required) {
                this.valid.state = false;
            }
        }
    };
    /**
     * @return {?}
     */
    NovoAddressElement.prototype.updateStates = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.config.state.pickerConfig.options && !Helpers.isBlank(this.model.countryID)) {
            this.config.state.pickerConfig.options = (/**
             * @param {?=} query
             * @return {?}
             */
            function (query) {
                if (query === void 0) { query = ''; }
                return _this.stateOptions(query, _this.model.countryID);
            });
            this.stateOptions('', this.model.countryID).then((/**
             * @param {?} results
             * @return {?}
             */
            function (results) {
                _this.config.state.pickerConfig.defaultOptions = results;
                if (results.length) {
                    _this.tooltip.state = undefined;
                    _this.disabled.state = _this._readOnly;
                    _this.setStateLabel(_this.model);
                }
                else {
                    _this.disabled.state = true;
                    _this.tooltip.state = _this.labels.noStatesForCountry;
                    if (_this.config.state.required) {
                        _this.valid.state = true;
                    }
                }
                _this.validityChange.emit();
                _this.onInput(null, 'state');
            }));
        }
        else {
            this.config.state.pickerConfig.defaultOptions = [];
            this.disabled.state = true;
            this.tooltip.state = this.labels.selectCountryFirst;
            if (this.config.state.required) {
                this.valid.state = false;
            }
        }
    };
    /**
     * @param {?=} filter
     * @param {?=} countryID
     * @return {?}
     */
    NovoAddressElement.prototype.getStateOptions = /**
     * @param {?=} filter
     * @param {?=} countryID
     * @return {?}
     */
    function (filter, countryID) {
        if (filter === void 0) { filter = ''; }
        if (countryID) {
            /** @type {?} */
            var country = findByCountryId(countryID);
            /** @type {?} */
            var states = getStates(country.name);
            if (filter) {
                return states.filter((/**
                 * @param {?} name
                 * @return {?}
                 */
                function (name) { return new RegExp("" + filter, 'gi').test(name); }));
            }
            return states;
        }
        else {
            return [];
        }
    };
    /**
     * @return {?}
     */
    NovoAddressElement.prototype.updateControl = /**
     * @return {?}
     */
    function () {
        this.onModelChange(this.model);
        this.onInput(null, 'countryID');
        this.onInput(null, 'state');
    };
    /**
     * @param {?} model
     * @return {?}
     */
    NovoAddressElement.prototype.writeValue = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        var _this = this;
        /** @type {?} */
        var loadingCountries = false;
        if (model) {
            /** @type {?} */
            var countryName_1;
            if (model.countryName && model.countryID) {
                countryName_1 = model.countryName;
            }
            else if (model.countryID) {
                if (this.config.countryID.pickerConfig && this.config.countryID.pickerConfig.getLabels) {
                    if (Helpers.isFunction(this.config.countryID.pickerConfig.getLabels)) {
                        /** @type {?} */
                        var promise = this.config.countryID.pickerConfig.getLabels(model.countryID);
                        loadingCountries = true;
                        if (promise.then) {
                            promise.then((/**
                             * @param {?} result
                             * @return {?}
                             */
                            function (result) {
                                loadingCountries = false;
                                countryName_1 = Helpers.interpolateWithFallback(_this.config.countryID.pickerConfig.format, result);
                                _this.model = Object.assign(model, { countryName: countryName_1 });
                                _this.updateStates();
                            }));
                        }
                    }
                }
            }
            if (countryName_1) {
                countryName_1 = countryName_1.trim();
                model.state = model.state || '';
                this.model = Object.assign(model, { countryName: countryName_1 });
            }
            else {
                this.model = model;
            }
            if (!loadingCountries && !Helpers.isBlank(this.model.countryID)) {
                this.updateStates();
            }
        }
        this.fieldList.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            _this.onInput(null, field);
        }));
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoAddressElement.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoAddressElement.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelTouched = fn;
    };
    /**
     * @private
     * @return {?}
     */
    NovoAddressElement.prototype.getDefaultStateConfig = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return {
            field: 'value',
            format: '$label',
            options: (/**
             * @param {?=} query
             * @param {?=} countryID
             * @return {?}
             */
            function (query, countryID) {
                if (query === void 0) { query = ''; }
                return Promise.resolve(_this.getStateOptions(query, countryID));
            }),
            getLabels: (/**
             * @param {?} state
             * @return {?}
             */
            function (state) {
                return Promise.resolve(state);
            }),
        };
    };
    /**
     * @private
     * @return {?}
     */
    NovoAddressElement.prototype.getDefaultCountryConfig = /**
     * @private
     * @return {?}
     */
    function () {
        return {
            field: 'value',
            format: '$label',
            options: (/**
             * @param {?=} query
             * @return {?}
             */
            function (query) {
                if (query === void 0) { query = ''; }
                return new Promise((/**
                 * @param {?} resolve
                 * @return {?}
                 */
                function (resolve) {
                    /** @type {?} */
                    var countries = COUNTRIES;
                    if (query) {
                        countries = countries.filter((/**
                         * @param {?} country
                         * @return {?}
                         */
                        function (country) { return new RegExp("" + query, 'gi').test(country.name); }));
                    }
                    return resolve(countries.map((/**
                     * @param {?} country
                     * @return {?}
                     */
                    function (country) { return ({ value: country.id, label: country.name }); })));
                }));
            }),
            getLabels: (/**
             * @param {?} countryID
             * @return {?}
             */
            function (countryID) {
                return new Promise((/**
                 * @param {?} resolve
                 * @return {?}
                 */
                function (resolve) {
                    /** @type {?} */
                    var country = findByCountryId(countryID);
                    if (country) {
                        resolve({ value: country.id, label: country.name });
                    }
                    else {
                        resolve('');
                    }
                }));
            }),
        };
    };
    NovoAddressElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-address',
                    providers: [ADDRESS_VALUE_ACCESSOR],
                    template: "\n    <span\n      *ngIf=\"!config?.address1?.hidden\"\n      class=\"street-address\"\n      [class.invalid]=\"invalid.address1\"\n      [class.focus]=\"focused.address1\"\n      [class.disabled]=\"disabled.address1\"\n    >\n      <i\n        *ngIf=\"config.address1.required\"\n        class=\"required-indicator address1\"\n        [ngClass]=\"{ 'bhi-circle': !valid.address1, 'bhi-check': valid.address1 }\"\n      >\n      </i>\n      <input\n        [class.maxlength-error]=\"invalidMaxlength.address1\"\n        type=\"text\"\n        id=\"address1\"\n        name=\"address1\"\n        [placeholder]=\"config.address1.label\"\n        [maxlength]=\"config?.address1?.maxlength\"\n        autocomplete=\"shipping street-address address-line-1\"\n        [(ngModel)]=\"model.address1\"\n        (ngModelChange)=\"updateControl()\"\n        (focus)=\"isFocused($event, 'address1')\"\n        (blur)=\"isBlurred($event, 'address1')\"\n        (input)=\"onInput($event, 'address1')\"\n      />\n    </span>\n    <span\n      *ngIf=\"!config?.address2?.hidden\"\n      class=\"apt suite\"\n      [class.invalid]=\"invalid.address2\"\n      [class.focus]=\"focused.address2\"\n      [class.disabled]=\"disabled.address2\"\n    >\n      <i\n        *ngIf=\"config.address2.required\"\n        class=\"required-indicator address2\"\n        [ngClass]=\"{ 'bhi-circle': !valid.address2, 'bhi-check': valid.address2 }\"\n      >\n      </i>\n      <input\n        [class.maxlength-error]=\"invalidMaxlength.address2\"\n        type=\"text\"\n        id=\"address2\"\n        name=\"address2\"\n        [placeholder]=\"config.address2.label\"\n        [maxlength]=\"config?.address2?.maxlength\"\n        autocomplete=\"shipping address-line-2\"\n        [(ngModel)]=\"model.address2\"\n        (ngModelChange)=\"updateControl()\"\n        (focus)=\"isFocused($event, 'address2')\"\n        (blur)=\"isBlurred($event, 'address2')\"\n        (input)=\"onInput($event, 'address2')\"\n      />\n    </span>\n    <span\n      *ngIf=\"!config?.city?.hidden\"\n      class=\"city locality\"\n      [class.invalid]=\"invalid.city\"\n      [class.focus]=\"focused.city\"\n      [class.disabled]=\"disabled.city\"\n    >\n      <i *ngIf=\"config.city.required\" class=\"required-indicator\" [ngClass]=\"{ 'bhi-circle': !valid.city, 'bhi-check': valid.city }\"> </i>\n      <input\n        [class.maxlength-error]=\"invalidMaxlength.city\"\n        type=\"text\"\n        id=\"city\"\n        name=\"city\"\n        [placeholder]=\"config.city.label\"\n        autocomplete=\"shipping city locality\"\n        [maxlength]=\"config?.city?.maxlength\"\n        [(ngModel)]=\"model.city\"\n        (ngModelChange)=\"updateControl()\"\n        (focus)=\"isFocused($event, 'city')\"\n        (blur)=\"isBlurred($event, 'city')\"\n        (input)=\"onInput($event, 'city')\"\n      />\n    </span>\n    <span\n      *ngIf=\"!config?.state?.hidden\"\n      class=\"state region\"\n      [class.invalid]=\"invalid.state\"\n      [class.focus]=\"focused.state\"\n      [class.disabled]=\"disabled.state\"\n      [tooltip]=\"tooltip.state\"\n    >\n      <i *ngIf=\"config.state.required\" class=\"required-indicator\" [ngClass]=\"{ 'bhi-circle': !valid.state, 'bhi-check': valid.state }\"> </i>\n      <novo-picker\n        [config]=\"config?.state?.pickerConfig\"\n        [placeholder]=\"config?.state?.label\"\n        (changed)=\"onStateChange($event)\"\n        autocomplete=\"shipping region\"\n        [(ngModel)]=\"model.state\"\n        [disablePickerInput]=\"disabled.state\"\n      ></novo-picker>\n    </span>\n    <span\n      *ngIf=\"!config?.zip?.hidden\"\n      class=\"zip postal-code\"\n      [class.invalid]=\"invalid.zip\"\n      [class.focus]=\"focused.zip\"\n      [class.disabled]=\"disabled.zip\"\n    >\n      <i *ngIf=\"config.zip.required\" class=\"required-indicator\" [ngClass]=\"{ 'bhi-circle': !valid.zip, 'bhi-check': valid.zip }\"> </i>\n      <input\n        [class.maxlength-error]=\"invalidMaxlength.zip\"\n        type=\"text\"\n        id=\"zip\"\n        name=\"zip\"\n        [placeholder]=\"config.zip.label\"\n        autocomplete=\"shipping postal-code\"\n        [maxlength]=\"config?.zip?.maxlength\"\n        [(ngModel)]=\"model.zip\"\n        (ngModelChange)=\"updateControl()\"\n        (focus)=\"isFocused($event, 'zip')\"\n        (blur)=\"isBlurred($event, 'zip')\"\n        (input)=\"onInput($event, 'zip')\"\n      />\n    </span>\n    <span\n      *ngIf=\"!config?.countryID?.hidden\"\n      class=\"country-name\"\n      [class.invalid]=\"invalid.countryID\"\n      [class.focus]=\"focused.countryID\"\n      [class.disabled]=\"disabled.countryID\"\n    >\n      <i\n        *ngIf=\"config.countryID.required\"\n        class=\"required-indicator\"\n        [ngClass]=\"{ 'bhi-circle': !valid.countryID, 'bhi-check': valid.countryID }\"\n      >\n      </i>\n      <novo-picker\n        [config]=\"config?.countryID?.pickerConfig\"\n        [placeholder]=\"config.countryID.label\"\n        (changed)=\"onCountryChange($event)\"\n        autocomplete=\"shipping country\"\n        [(ngModel)]=\"model.countryID\"\n        [disablePickerInput]=\"disabled.countryID\"\n      ></novo-picker>\n    </span>\n  "
                }] }
    ];
    /** @nocollapse */
    NovoAddressElement.ctorParameters = function () { return [
        { type: NovoLabelService }
    ]; };
    NovoAddressElement.propDecorators = {
        config: [{ type: Input }],
        readOnly: [{ type: Input }],
        change: [{ type: Output }],
        focus: [{ type: Output }],
        blur: [{ type: Output }],
        validityChange: [{ type: Output }]
    };
    return NovoAddressElement;
}());
export { NovoAddressElement };
if (false) {
    /** @type {?} */
    NovoAddressElement.prototype.config;
    /**
     * @type {?}
     * @private
     */
    NovoAddressElement.prototype._readOnly;
    /** @type {?} */
    NovoAddressElement.prototype.states;
    /** @type {?} */
    NovoAddressElement.prototype.fieldList;
    /** @type {?} */
    NovoAddressElement.prototype.model;
    /** @type {?} */
    NovoAddressElement.prototype.onModelChange;
    /** @type {?} */
    NovoAddressElement.prototype.onModelTouched;
    /** @type {?} */
    NovoAddressElement.prototype.focused;
    /** @type {?} */
    NovoAddressElement.prototype.invalid;
    /** @type {?} */
    NovoAddressElement.prototype.disabled;
    /** @type {?} */
    NovoAddressElement.prototype.invalidMaxlength;
    /** @type {?} */
    NovoAddressElement.prototype.valid;
    /** @type {?} */
    NovoAddressElement.prototype.stateOptions;
    /** @type {?} */
    NovoAddressElement.prototype.tooltip;
    /** @type {?} */
    NovoAddressElement.prototype.initComplete;
    /** @type {?} */
    NovoAddressElement.prototype.change;
    /** @type {?} */
    NovoAddressElement.prototype.focus;
    /** @type {?} */
    NovoAddressElement.prototype.blur;
    /** @type {?} */
    NovoAddressElement.prototype.validityChange;
    /** @type {?} */
    NovoAddressElement.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2V4dHJhcy9hZGRyZXNzL0FkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztJQUc5QyxzQkFBc0IsR0FBRztJQUM3QixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLEVBQUM7SUFDakQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7OztBQUVELCtDQVFDOzs7SUFQQywwQ0FBYzs7SUFDZCw2Q0FBa0I7O0lBQ2xCLDhDQUFrQjs7SUFDbEIsaURBQW1COztJQUNuQiwyQ0FBZ0I7O0lBQ2hCLDRDQUFrQjs7SUFDbEIsNkNBQW1COzs7OztBQUdyQix1Q0FTQzs7O0lBUkMscUNBQW1COztJQUNuQixxQ0FBbUI7O0lBQ25CLHFDQUFxQzs7SUFDckMscUNBQXFDOztJQUNyQyxpQ0FBaUM7O0lBQ2pDLGtDQUFrQzs7SUFDbEMsZ0NBQWdDOztJQUNoQyxzQ0FBc0M7O0FBR3hDO0lBMkxFLDRCQUFtQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQXBDbkMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQWMxQixXQUFNLEdBQWUsRUFBRSxD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QUVOLE1BQU07dUJBRU4sTUFBTTtpQ0FFTixNQUFNOztJQXNVVCx5QkFBQztDQUFBLEFBOWZELElBOGZDO1NBMVdZLGtCQUFrQjs7O0lBQzdCLG9DQUMwQjs7Ozs7SUFDMUIsdUNBQTBCOztJQWMxQixvQ0FBd0I7O0lBQ3hCLHVDQUF5Rjs7SUFDekYsbUNBQVc7O0lBQ1gsMkNBQW9DOztJQUNwQyw0Q0FBcUM7O0lBQ3JDLHFDQUFrQjs7SUFDbEIscUNBQWtCOztJQUNsQixzQ0FBbUI7O0lBQ25CLDhDQUEyQjs7SUFDM0IsbUNBQWdCOztJQUNoQiwwQ0FBa0I7O0lBQ2xCLHFDQUFrQjs7SUFDbEIsMENBQXFCOztJQUNyQixvQ0FDK0M7O0lBQy9DLG1DQUM4Qzs7SUFDOUMsa0NBQzZDOztJQUM3Qyw0Q0FDdUQ7O0lBRTNDLG9DQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IENPVU5UUklFUywgZmluZEJ5Q291bnRyeUlkLCBnZXRTdGF0ZXMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb3VudHJpZXMvQ291bnRyaWVzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBBRERSRVNTX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0FkZHJlc3NFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9BZGRyZXNzU3ViZmllbGRDb25maWcge1xuICBsYWJlbDogc3RyaW5nO1xuICByZXF1aXJlZDogYm9vbGVhbjtcbiAgbWF4bGVuZ3RoOiBudW1iZXI7XG4gIHBpY2tlckNvbmZpZz86IGFueTtcbiAgaGlkZGVuOiBib29sZWFuO1xuICB1cGRhdGVkPzogYm9vbGVhbjtcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9BZGRyZXNzQ29uZmlnIHtcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICByZWFkT25seT86IGJvb2xlYW47XG4gIGFkZHJlc3MxPzogTm92b0FkZHJlc3NTdWJmaWVsZENvbmZpZztcbiAgYWRkcmVzczI/OiBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnO1xuICBjaXR5PzogTm92b0FkZHJlc3NTdWJmaWVsZENvbmZpZztcbiAgc3RhdGU/OiBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnO1xuICB6aXA/OiBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnO1xuICBjb3VudHJ5SUQ/OiBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFkZHJlc3MnLFxuICBwcm92aWRlcnM6IFtBRERSRVNTX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhblxuICAgICAgKm5nSWY9XCIhY29uZmlnPy5hZGRyZXNzMT8uaGlkZGVuXCJcbiAgICAgIGNsYXNzPVwic3RyZWV0LWFkZHJlc3NcIlxuICAgICAgW2NsYXNzLmludmFsaWRdPVwiaW52YWxpZC5hZGRyZXNzMVwiXG4gICAgICBbY2xhc3MuZm9jdXNdPVwiZm9jdXNlZC5hZGRyZXNzMVwiXG4gICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWQuYWRkcmVzczFcIlxuICAgID5cbiAgICAgIDxpXG4gICAgICAgICpuZ0lmPVwiY29uZmlnLmFkZHJlc3MxLnJlcXVpcmVkXCJcbiAgICAgICAgY2xhc3M9XCJyZXF1aXJlZC1pbmRpY2F0b3IgYWRkcmVzczFcIlxuICAgICAgICBbbmdDbGFzc109XCJ7ICdiaGktY2lyY2xlJzogIXZhbGlkLmFkZHJlc3MxLCAnYmhpLWNoZWNrJzogdmFsaWQuYWRkcmVzczEgfVwiXG4gICAgICA+XG4gICAgICA8L2k+XG4gICAgICA8aW5wdXRcbiAgICAgICAgW2NsYXNzLm1heGxlbmd0aC1lcnJvcl09XCJpbnZhbGlkTWF4bGVuZ3RoLmFkZHJlc3MxXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBpZD1cImFkZHJlc3MxXCJcbiAgICAgICAgbmFtZT1cImFkZHJlc3MxXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy5hZGRyZXNzMS5sYWJlbFwiXG4gICAgICAgIFttYXhsZW5ndGhdPVwiY29uZmlnPy5hZGRyZXNzMT8ubWF4bGVuZ3RoXCJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwic2hpcHBpbmcgc3RyZWV0LWFkZHJlc3MgYWRkcmVzcy1saW5lLTFcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLmFkZHJlc3MxXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlQ29udHJvbCgpXCJcbiAgICAgICAgKGZvY3VzKT1cImlzRm9jdXNlZCgkZXZlbnQsICdhZGRyZXNzMScpXCJcbiAgICAgICAgKGJsdXIpPVwiaXNCbHVycmVkKCRldmVudCwgJ2FkZHJlc3MxJylcIlxuICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQsICdhZGRyZXNzMScpXCJcbiAgICAgIC8+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuXG4gICAgICAqbmdJZj1cIiFjb25maWc/LmFkZHJlc3MyPy5oaWRkZW5cIlxuICAgICAgY2xhc3M9XCJhcHQgc3VpdGVcIlxuICAgICAgW2NsYXNzLmludmFsaWRdPVwiaW52YWxpZC5hZGRyZXNzMlwiXG4gICAgICBbY2xhc3MuZm9jdXNdPVwiZm9jdXNlZC5hZGRyZXNzMlwiXG4gICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWQuYWRkcmVzczJcIlxuICAgID5cbiAgICAgIDxpXG4gICAgICAgICpuZ0lmPVwiY29uZmlnLmFkZHJlc3MyLnJlcXVpcmVkXCJcbiAgICAgICAgY2xhc3M9XCJyZXF1aXJlZC1pbmRpY2F0b3IgYWRkcmVzczJcIlxuICAgICAgICBbbmdDbGFzc109XCJ7ICdiaGktY2lyY2xlJzogIXZhbGlkLmFkZHJlc3MyLCAnYmhpLWNoZWNrJzogdmFsaWQuYWRkcmVzczIgfVwiXG4gICAgICA+XG4gICAgICA8L2k+XG4gICAgICA8aW5wdXRcbiAgICAgICAgW2NsYXNzLm1heGxlbmd0aC1lcnJvcl09XCJpbnZhbGlkTWF4bGVuZ3RoLmFkZHJlc3MyXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBpZD1cImFkZHJlc3MyXCJcbiAgICAgICAgbmFtZT1cImFkZHJlc3MyXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy5hZGRyZXNzMi5sYWJlbFwiXG4gICAgICAgIFttYXhsZW5ndGhdPVwiY29uZmlnPy5hZGRyZXNzMj8ubWF4bGVuZ3RoXCJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwic2hpcHBpbmcgYWRkcmVzcy1saW5lLTJcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLmFkZHJlc3MyXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlQ29udHJvbCgpXCJcbiAgICAgICAgKGZvY3VzKT1cImlzRm9jdXNlZCgkZXZlbnQsICdhZGRyZXNzMicpXCJcbiAgICAgICAgKGJsdXIpPVwiaXNCbHVycmVkKCRldmVudCwgJ2FkZHJlc3MyJylcIlxuICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQsICdhZGRyZXNzMicpXCJcbiAgICAgIC8+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuXG4gICAgICAqbmdJZj1cIiFjb25maWc/LmNpdHk/LmhpZGRlblwiXG4gICAgICBjbGFzcz1cImNpdHkgbG9jYWxpdHlcIlxuICAgICAgW2NsYXNzLmludmFsaWRdPVwiaW52YWxpZC5jaXR5XCJcbiAgICAgIFtjbGFzcy5mb2N1c109XCJmb2N1c2VkLmNpdHlcIlxuICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkLmNpdHlcIlxuICAgID5cbiAgICAgIDxpICpuZ0lmPVwiY29uZmlnLmNpdHkucmVxdWlyZWRcIiBjbGFzcz1cInJlcXVpcmVkLWluZGljYXRvclwiIFtuZ0NsYXNzXT1cInsgJ2JoaS1jaXJjbGUnOiAhdmFsaWQuY2l0eSwgJ2JoaS1jaGVjayc6IHZhbGlkLmNpdHkgfVwiPiA8L2k+XG4gICAgICA8aW5wdXRcbiAgICAgICAgW2NsYXNzLm1heGxlbmd0aC1lcnJvcl09XCJpbnZhbGlkTWF4bGVuZ3RoLmNpdHlcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGlkPVwiY2l0eVwiXG4gICAgICAgIG5hbWU9XCJjaXR5XCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy5jaXR5LmxhYmVsXCJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwic2hpcHBpbmcgY2l0eSBsb2NhbGl0eVwiXG4gICAgICAgIFttYXhsZW5ndGhdPVwiY29uZmlnPy5jaXR5Py5tYXhsZW5ndGhcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLmNpdHlcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVDb250cm9sKClcIlxuICAgICAgICAoZm9jdXMpPVwiaXNGb2N1c2VkKCRldmVudCwgJ2NpdHknKVwiXG4gICAgICAgIChibHVyKT1cImlzQmx1cnJlZCgkZXZlbnQsICdjaXR5JylcIlxuICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQsICdjaXR5JylcIlxuICAgICAgLz5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW5cbiAgICAgICpuZ0lmPVwiIWNvbmZpZz8uc3RhdGU/LmhpZGRlblwiXG4gICAgICBjbGFzcz1cInN0YXRlIHJlZ2lvblwiXG4gICAgICBbY2xhc3MuaW52YWxpZF09XCJpbnZhbGlkLnN0YXRlXCJcbiAgICAgIFtjbGFzcy5mb2N1c109XCJmb2N1c2VkLnN0YXRlXCJcbiAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZC5zdGF0ZVwiXG4gICAgICBbdG9vbHRpcF09XCJ0b29sdGlwLnN0YXRlXCJcbiAgICA+XG4gICAgICA8aSAqbmdJZj1cImNvbmZpZy5zdGF0ZS5yZXF1aXJlZFwiIGNsYXNzPVwicmVxdWlyZWQtaW5kaWNhdG9yXCIgW25nQ2xhc3NdPVwieyAnYmhpLWNpcmNsZSc6ICF2YWxpZC5zdGF0ZSwgJ2JoaS1jaGVjayc6IHZhbGlkLnN0YXRlIH1cIj4gPC9pPlxuICAgICAgPG5vdm8tcGlja2VyXG4gICAgICAgIFtjb25maWddPVwiY29uZmlnPy5zdGF0ZT8ucGlja2VyQ29uZmlnXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbmZpZz8uc3RhdGU/LmxhYmVsXCJcbiAgICAgICAgKGNoYW5nZWQpPVwib25TdGF0ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwic2hpcHBpbmcgcmVnaW9uXCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5zdGF0ZVwiXG4gICAgICAgIFtkaXNhYmxlUGlja2VySW5wdXRdPVwiZGlzYWJsZWQuc3RhdGVcIlxuICAgICAgPjwvbm92by1waWNrZXI+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuXG4gICAgICAqbmdJZj1cIiFjb25maWc/LnppcD8uaGlkZGVuXCJcbiAgICAgIGNsYXNzPVwiemlwIHBvc3RhbC1jb2RlXCJcbiAgICAgIFtjbGFzcy5pbnZhbGlkXT1cImludmFsaWQuemlwXCJcbiAgICAgIFtjbGFzcy5mb2N1c109XCJmb2N1c2VkLnppcFwiXG4gICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWQuemlwXCJcbiAgICA+XG4gICAgICA8aSAqbmdJZj1cImNvbmZpZy56aXAucmVxdWlyZWRcIiBjbGFzcz1cInJlcXVpcmVkLWluZGljYXRvclwiIFtuZ0NsYXNzXT1cInsgJ2JoaS1jaXJjbGUnOiAhdmFsaWQuemlwLCAnYmhpLWNoZWNrJzogdmFsaWQuemlwIH1cIj4gPC9pPlxuICAgICAgPGlucHV0XG4gICAgICAgIFtjbGFzcy5tYXhsZW5ndGgtZXJyb3JdPVwiaW52YWxpZE1heGxlbmd0aC56aXBcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGlkPVwiemlwXCJcbiAgICAgICAgbmFtZT1cInppcFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb25maWcuemlwLmxhYmVsXCJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwic2hpcHBpbmcgcG9zdGFsLWNvZGVcIlxuICAgICAgICBbbWF4bGVuZ3RoXT1cImNvbmZpZz8uemlwPy5tYXhsZW5ndGhcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLnppcFwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZUNvbnRyb2woKVwiXG4gICAgICAgIChmb2N1cyk9XCJpc0ZvY3VzZWQoJGV2ZW50LCAnemlwJylcIlxuICAgICAgICAoYmx1cik9XCJpc0JsdXJyZWQoJGV2ZW50LCAnemlwJylcIlxuICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQsICd6aXAnKVwiXG4gICAgICAvPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhblxuICAgICAgKm5nSWY9XCIhY29uZmlnPy5jb3VudHJ5SUQ/LmhpZGRlblwiXG4gICAgICBjbGFzcz1cImNvdW50cnktbmFtZVwiXG4gICAgICBbY2xhc3MuaW52YWxpZF09XCJpbnZhbGlkLmNvdW50cnlJRFwiXG4gICAgICBbY2xhc3MuZm9jdXNdPVwiZm9jdXNlZC5jb3VudHJ5SURcIlxuICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkLmNvdW50cnlJRFwiXG4gICAgPlxuICAgICAgPGlcbiAgICAgICAgKm5nSWY9XCJjb25maWcuY291bnRyeUlELnJlcXVpcmVkXCJcbiAgICAgICAgY2xhc3M9XCJyZXF1aXJlZC1pbmRpY2F0b3JcIlxuICAgICAgICBbbmdDbGFzc109XCJ7ICdiaGktY2lyY2xlJzogIXZhbGlkLmNvdW50cnlJRCwgJ2JoaS1jaGVjayc6IHZhbGlkLmNvdW50cnlJRCB9XCJcbiAgICAgID5cbiAgICAgIDwvaT5cbiAgICAgIDxub3ZvLXBpY2tlclxuICAgICAgICBbY29uZmlnXT1cImNvbmZpZz8uY291bnRyeUlEPy5waWNrZXJDb25maWdcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLmNvdW50cnlJRC5sYWJlbFwiXG4gICAgICAgIChjaGFuZ2VkKT1cIm9uQ291bnRyeUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwic2hpcHBpbmcgY291bnRyeVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwuY291bnRyeUlEXCJcbiAgICAgICAgW2Rpc2FibGVQaWNrZXJJbnB1dF09XCJkaXNhYmxlZC5jb3VudHJ5SURcIlxuICAgICAgPjwvbm92by1waWNrZXI+XG4gICAgPC9zcGFuPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWRkcmVzc0VsZW1lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgQElucHV0KClcbiAgY29uZmlnOiBOb3ZvQWRkcmVzc0NvbmZpZztcbiAgcHJpdmF0ZSBfcmVhZE9ubHkgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc2V0IHJlYWRPbmx5KHJlYWRPbmx5OiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVhZE9ubHkgPSByZWFkT25seTtcbiAgICB0aGlzLmZpZWxkTGlzdC5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmRpc2FibGVkW2ZpZWxkXSA9IHRoaXMuX3JlYWRPbmx5O1xuICAgIH0pO1xuICAgIGlmICh0aGlzLm1vZGVsKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlcygpO1xuICAgIH1cbiAgfVxuICBnZXQgcmVhZE9ubHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRPbmx5O1xuICB9XG4gIHN0YXRlczogQXJyYXk8YW55PiA9IFtdO1xuICBmaWVsZExpc3Q6IEFycmF5PHN0cmluZz4gPSBbJ2FkZHJlc3MxJywgJ2FkZHJlc3MyJywgJ2NpdHknLCAnc3RhdGUnLCAnemlwJywgJ2NvdW50cnlJRCddO1xuICBtb2RlbDogYW55O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuICBmb2N1c2VkOiBhbnkgPSB7fTtcbiAgaW52YWxpZDogYW55ID0ge307XG4gIGRpc2FibGVkOiBhbnkgPSB7fTtcbiAgaW52YWxpZE1heGxlbmd0aDogYW55ID0ge307XG4gIHZhbGlkOiBhbnkgPSB7fTtcbiAgc3RhdGVPcHRpb25zOiBhbnk7XG4gIHRvb2x0aXA6IGFueSA9IHt9O1xuICBpbml0Q29tcGxldGUgPSBmYWxzZTtcbiAgQE91dHB1dCgpXG4gIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHZhbGlkaXR5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHt9O1xuICAgIH1cbiAgICBpZiAodGhpcy5tb2RlbCkge1xuICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMubW9kZWwpO1xuICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5tb2RlbCkge1xuICAgICAgdGhpcy5tb2RlbCA9IHt9O1xuICAgIH1cbiAgICB0aGlzLmluaXRDb25maWcoKTtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuY291bnRyeUlEKSkge1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZXMoKTtcbiAgICB9XG4gIH1cblxuICBpbml0Q29uZmlnKCk6IHZvaWQge1xuICAgIHRoaXMuZmllbGRMaXN0LmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghdGhpcy5jb25maWcuaGFzT3duUHJvcGVydHkoZmllbGQpKSB7XG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXSA9IHtcbiAgICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY29uZmlnW2ZpZWxkXS5oYXNPd25Qcm9wZXJ0eSgnbGFiZWwnKSkge1xuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ubGFiZWwgPSB0aGlzLmxhYmVsc1tmaWVsZF07XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb25maWcucmVxdWlyZWQpIHtcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbmZpZ1tmaWVsZF0ucmVhZE9ubHkgfHwgdGhpcy5jb25maWcucmVhZE9ubHkpIHtcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZFtmaWVsZF0gPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGZpZWxkID09PSAnY291bnRyeUlEJykge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnW2ZpZWxkXS5waWNrZXJDb25maWcpIHtcbiAgICAgICAgICB0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnID0gdGhpcy5nZXREZWZhdWx0Q291bnRyeUNvbmZpZygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgPSB0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnLm9wdGlvbnM7XG4gICAgICB9XG4gICAgICBpZiAoZmllbGQgPT09ICdzdGF0ZScpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnKSB7XG4gICAgICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnID0gdGhpcy5nZXREZWZhdWx0U3RhdGVDb25maWcoKTtcbiAgICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zID0gdGhpcy5jb25maWdbZmllbGRdLnBpY2tlckNvbmZpZy5vcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGVPcHRpb25zID0gdGhpcy5jb25maWdbZmllbGRdLnBpY2tlckNvbmZpZy5vcHRpb25zO1xuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnLm9wdGlvbnMgPSAocXVlcnkgPSAnJykgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlT3B0aW9ucyhxdWVyeSwgdGhpcy5tb2RlbC5jb3VudHJ5SUQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zID0gdGhpcy5zdGF0ZU9wdGlvbnM7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc1ZhbGlkKGZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgIGlmIChcbiAgICAgICgodGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkICYmIChIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbFtmaWVsZF0pIHx8IEhlbHBlcnMuaXNFbXB0eSh0aGlzLm1vZGVsW2ZpZWxkXSkpKSB8fFxuICAgICAgICAhdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkKSAmJlxuICAgICAgIShmaWVsZCA9PT0gJ2NvdW50cnlJRCcgJiYgdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkICYmICFIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5jb3VudHJ5SUQpKSAmJlxuICAgICAgIShcbiAgICAgICAgZmllbGQgPT09ICdzdGF0ZScgJiZcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkICYmXG4gICAgICAgICghSGVscGVycy5pc0VtcHR5KHRoaXMubW9kZWwuc3RhdGUpIHx8XG4gICAgICAgICAgKChIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5zdGF0ZSkgfHwgSGVscGVycy5pc0VtcHR5KHRoaXMubW9kZWwuc3RhdGUpKSAmJlxuICAgICAgICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsLmNvdW50cnlOYW1lKSAmJlxuICAgICAgICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnICYmXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgJiZcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucy5sZW5ndGggPT09IDApKVxuICAgICAgKVxuICAgICkge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLm1vZGVsW2ZpZWxkXSkgJiZcbiAgICAgICFIZWxwZXJzLmlzQmxhbmsodGhpcy5jb25maWdbZmllbGRdLm1heGxlbmd0aCkgJiZcbiAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5tYXhsZW5ndGggPCB0aGlzLm1vZGVsW2ZpZWxkXS5sZW5ndGhcbiAgICApIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMudmFsaWRbZmllbGRdID0gdmFsaWQ7XG4gIH1cblxuICBpc0ludmFsaWQoZmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBpbnZhbGlkID0gZmFsc2U7XG4gICAgbGV0IGludmFsaWRNYXhsZW5ndGggPSBmYWxzZTtcbiAgICBpZiAoXG4gICAgICAoZmllbGQgIT09ICdjb3VudHJ5SUQnICYmXG4gICAgICAgIGZpZWxkICE9PSAnc3RhdGUnICYmXG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5yZXF1aXJlZCAmJlxuICAgICAgICBIZWxwZXJzLmlzRW1wdHkodGhpcy5tb2RlbFtmaWVsZF0pICYmXG4gICAgICAgICFIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbFtmaWVsZF0pKSB8fFxuICAgICAgKGZpZWxkID09PSAnY291bnRyeUlEJyAmJiB0aGlzLmNvbmZpZ1tmaWVsZF0ucmVxdWlyZWQgJiYgSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuY291bnRyeU5hbWUpICYmIHRoaXMuY29uZmlnW2ZpZWxkXS51cGRhdGVkKSB8fFxuICAgICAgKGZpZWxkID09PSAnc3RhdGUnICYmXG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5yZXF1aXJlZCAmJlxuICAgICAgICAoSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuc3RhdGUpIHx8IEhlbHBlcnMuaXNFbXB0eSh0aGlzLm1vZGVsLnN0YXRlKSkgJiZcbiAgICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsLmNvdW50cnlJRCkgJiZcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnVwZGF0ZWQgJiZcbiAgICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnICYmXG4gICAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyAmJlxuICAgICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMubGVuZ3RoID4gMClcbiAgICApIHtcbiAgICAgIGludmFsaWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAhSGVscGVycy5pc0VtcHR5KHRoaXMubW9kZWxbZmllbGRdKSAmJlxuICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLmNvbmZpZ1tmaWVsZF0ubWF4bGVuZ3RoKSAmJlxuICAgICAgdGhpcy5jb25maWdbZmllbGRdLm1heGxlbmd0aCA8IHRoaXMubW9kZWxbZmllbGRdLmxlbmd0aFxuICAgICkge1xuICAgICAgaW52YWxpZCA9IHRydWU7XG4gICAgICBpbnZhbGlkTWF4bGVuZ3RoID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5pbnZhbGlkW2ZpZWxkXSA9IGludmFsaWQ7XG4gICAgdGhpcy5pbnZhbGlkTWF4bGVuZ3RoW2ZpZWxkXSA9IGludmFsaWRNYXhsZW5ndGg7XG4gIH1cblxuICBvbklucHV0KGV2ZW50OiBFdmVudCwgZmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaXNJbnZhbGlkKGZpZWxkKTtcbiAgICB0aGlzLmlzVmFsaWQoZmllbGQpO1xuICAgIGlmIChldmVudCkge1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7IHZhbHVlOiB0aGlzLm1vZGVsW2ZpZWxkXSwgZmllbGQgfSk7XG4gICAgfVxuICB9XG5cbiAgaXNGb2N1c2VkKGV2ZW50OiBFdmVudCwgZmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZFtmaWVsZF0gPSB0cnVlO1xuICAgIHRoaXMuZm9jdXMuZW1pdCh7IGV2ZW50LCBmaWVsZCB9KTtcbiAgfVxuXG4gIGlzQmx1cnJlZChldmVudDogRXZlbnQsIGZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzZWRbZmllbGRdID0gZmFsc2U7XG4gICAgdGhpcy5ibHVyLmVtaXQoeyBldmVudCwgZmllbGQgfSk7XG4gIH1cblxuICBvbkNvdW50cnlDaGFuZ2UoZXZ0KSB7XG4gICAgY29uc3QgY291bnRyeTogYW55ID0gZXZ0ICYmIGV2dC5yYXdWYWx1ZSA/IGV2dC5yYXdWYWx1ZSA6IG51bGw7XG4gICAgbGV0IGZpZWxkOiBhbnk7XG4gICAgbGV0IHN0YXRlc1VwZGF0YWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuY29uZmlnLmNvdW50cnlJRC51cGRhdGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZykge1xuICAgICAgZmllbGQgPSB0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnLmZpZWxkO1xuICAgIH1cbiAgICBpZiAoY291bnRyeSAmJiBmaWVsZCAmJiAhSGVscGVycy5pc0JsYW5rKGNvdW50cnlbZmllbGRdKSAmJiB0aGlzLm1vZGVsLmNvdW50cnlJRCAhPT0gY291bnRyeVtmaWVsZF0pIHtcbiAgICAgIHRoaXMubW9kZWwuY291bnRyeUlEID0gY291bnRyeVtmaWVsZF07XG4gICAgICB0aGlzLm1vZGVsLmNvdW50cnlOYW1lID0gSGVscGVycy5pbnRlcnBvbGF0ZSh0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnLmZvcm1hdCwgY291bnRyeSk7XG4gICAgICB0aGlzLmRpc2FibGVkLnN0YXRlID0gZmFsc2U7XG4gICAgICB0aGlzLnRvb2x0aXAuc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICBzdGF0ZXNVcGRhdGFibGUgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoSGVscGVycy5pc0JsYW5rKGNvdW50cnkpIHx8IEhlbHBlcnMuaXNCbGFuayhjb3VudHJ5W2ZpZWxkXSkpIHtcbiAgICAgIHRoaXMubW9kZWwuY291bnRyeUlEID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5tb2RlbC5jb3VudHJ5TmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZGlzYWJsZWQuc3RhdGUgPSB0cnVlO1xuICAgICAgdGhpcy50b29sdGlwLnN0YXRlID0gdGhpcy5sYWJlbHMuc2VsZWN0Q291bnRyeUZpcnN0O1xuICAgICAgdGhpcy5pbnZhbGlkLnN0YXRlID0gZmFsc2U7XG4gICAgICBzdGF0ZXNVcGRhdGFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBzdGF0ZVxuICAgIGlmIChzdGF0ZXNVcGRhdGFibGUpIHtcbiAgICAgIHRoaXMubW9kZWwuc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlcygpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICB0aGlzLm9uSW5wdXQobnVsbCwgJ2NvdW50cnlJRCcpO1xuICAgIHRoaXMub25JbnB1dChudWxsLCAnc3RhdGUnKTtcbiAgfVxuXG4gIG9uU3RhdGVDaGFuZ2UoZXZ0KSB7XG4gICAgY29uc3Qgc3RhdGU6IGFueSA9IGV2dCAmJiBldnQudmFsdWUgPyBldnQudmFsdWUgOiBudWxsO1xuICAgIHRoaXMuY29uZmlnLnN0YXRlLnVwZGF0ZWQgPSB0cnVlO1xuICAgIHRoaXMubW9kZWwuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICB0aGlzLm9uSW5wdXQobnVsbCwgJ3N0YXRlJyk7XG4gIH1cblxuICBzZXRTdGF0ZUxhYmVsKG1vZGVsOiBhbnkpIHtcbiAgICBjb25zdCBzdGF0ZTogc3RyaW5nID0gbW9kZWwuc3RhdGU7XG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsoc3RhdGUpKSB7XG4gICAgICBpZiAodGhpcy5jb25maWcuc3RhdGUucmVxdWlyZWQpIHtcbiAgICAgICAgdGhpcy52YWxpZC5zdGF0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLm1vZGVsLnN0YXRlID0gc3RhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9kZWwuc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICBpZiAodGhpcy5jb25maWcuc3RhdGUucmVxdWlyZWQpIHtcbiAgICAgICAgdGhpcy52YWxpZC5zdGF0ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVN0YXRlcygpIHtcbiAgICBpZiAodGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLm9wdGlvbnMgJiYgIUhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsLmNvdW50cnlJRCkpIHtcbiAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5vcHRpb25zID0gKHF1ZXJ5ID0gJycpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVPcHRpb25zKHF1ZXJ5LCB0aGlzLm1vZGVsLmNvdW50cnlJRCk7XG4gICAgICB9O1xuICAgICAgdGhpcy5zdGF0ZU9wdGlvbnMoJycsIHRoaXMubW9kZWwuY291bnRyeUlEKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyA9IHJlc3VsdHM7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMudG9vbHRpcC5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB0aGlzLmRpc2FibGVkLnN0YXRlID0gdGhpcy5fcmVhZE9ubHk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZUxhYmVsKHRoaXMubW9kZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZWQuc3RhdGUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMudG9vbHRpcC5zdGF0ZSA9IHRoaXMubGFiZWxzLm5vU3RhdGVzRm9yQ291bnRyeTtcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcuc3RhdGUucmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWQuc3RhdGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbGlkaXR5Q2hhbmdlLmVtaXQoKTtcbiAgICAgICAgdGhpcy5vbklucHV0KG51bGwsICdzdGF0ZScpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5kaXNhYmxlZC5zdGF0ZSA9IHRydWU7XG4gICAgICB0aGlzLnRvb2x0aXAuc3RhdGUgPSB0aGlzLmxhYmVscy5zZWxlY3RDb3VudHJ5Rmlyc3Q7XG4gICAgICBpZiAodGhpcy5jb25maWcuc3RhdGUucmVxdWlyZWQpIHtcbiAgICAgICAgdGhpcy52YWxpZC5zdGF0ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFN0YXRlT3B0aW9ucyhmaWx0ZXIgPSAnJywgY291bnRyeUlEOiBudW1iZXIpIHtcbiAgICBpZiAoY291bnRyeUlEKSB7XG4gICAgICBjb25zdCBjb3VudHJ5ID0gZmluZEJ5Q291bnRyeUlkKGNvdW50cnlJRCk7XG4gICAgICBjb25zdCBzdGF0ZXMgPSBnZXRTdGF0ZXMoY291bnRyeS5uYW1lKTtcbiAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlcy5maWx0ZXIoKG5hbWUpID0+IG5ldyBSZWdFeHAoYCR7ZmlsdGVyfWAsICdnaScpLnRlc3QobmFtZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNvbnRyb2woKSB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMubW9kZWwpO1xuICAgIHRoaXMub25JbnB1dChudWxsLCAnY291bnRyeUlEJyk7XG4gICAgdGhpcy5vbklucHV0KG51bGwsICdzdGF0ZScpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbCkge1xuICAgIGxldCBsb2FkaW5nQ291bnRyaWVzID0gZmFsc2U7XG4gICAgaWYgKG1vZGVsKSB7XG4gICAgICBsZXQgY291bnRyeU5hbWU7XG4gICAgICBpZiAobW9kZWwuY291bnRyeU5hbWUgJiYgbW9kZWwuY291bnRyeUlEKSB7XG4gICAgICAgIGNvdW50cnlOYW1lID0gbW9kZWwuY291bnRyeU5hbWU7XG4gICAgICB9IGVsc2UgaWYgKG1vZGVsLmNvdW50cnlJRCkge1xuICAgICAgICBpZiAodGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZyAmJiB0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnLmdldExhYmVscykge1xuICAgICAgICAgIGlmIChIZWxwZXJzLmlzRnVuY3Rpb24odGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZy5nZXRMYWJlbHMpKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9taXNlICA9IHRoaXMuY29uZmlnLmNvdW50cnlJRC5waWNrZXJDb25maWcuZ2V0TGFiZWxzKG1vZGVsLmNvdW50cnlJRCk7XG4gICAgICAgICAgICBsb2FkaW5nQ291bnRyaWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLnRoZW4pIHtcbiAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nQ291bnRyaWVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY291bnRyeU5hbWUgPSBIZWxwZXJzLmludGVycG9sYXRlV2l0aEZhbGxiYWNrKHRoaXMuY29uZmlnLmNvdW50cnlJRC5waWNrZXJDb25maWcuZm9ybWF0LCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwgPSBPYmplY3QuYXNzaWduKG1vZGVsLCB7IGNvdW50cnlOYW1lIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGVzKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNvdW50cnlOYW1lKSB7XG4gICAgICAgIGNvdW50cnlOYW1lID0gY291bnRyeU5hbWUudHJpbSgpO1xuICAgICAgICBtb2RlbC5zdGF0ZSA9IG1vZGVsLnN0YXRlIHx8ICcnO1xuICAgICAgICB0aGlzLm1vZGVsID0gT2JqZWN0LmFzc2lnbihtb2RlbCwgeyBjb3VudHJ5TmFtZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICAgIH1cbiAgICAgIGlmICghbG9hZGluZ0NvdW50cmllcyAmJiAhSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuY291bnRyeUlEKSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlcygpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmZpZWxkTGlzdC5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLm9uSW5wdXQobnVsbCwgZmllbGQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmYXVsdFN0YXRlQ29uZmlnKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZDogJ3ZhbHVlJyxcbiAgICAgIGZvcm1hdDogJyRsYWJlbCcsXG4gICAgICBvcHRpb25zOiAocXVlcnkgPSAnJywgY291bnRyeUlEKSA9PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5nZXRTdGF0ZU9wdGlvbnMocXVlcnksIGNvdW50cnlJRCkpO1xuICAgICAgfSxcbiAgICAgIGdldExhYmVsczogKHN0YXRlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzdGF0ZSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldERlZmF1bHRDb3VudHJ5Q29uZmlnKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZDogJ3ZhbHVlJyxcbiAgICAgIGZvcm1hdDogJyRsYWJlbCcsXG4gICAgICBvcHRpb25zOiAocXVlcnkgPSAnJykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICBsZXQgY291bnRyaWVzID0gQ09VTlRSSUVTO1xuICAgICAgICAgIGlmIChxdWVyeSkge1xuICAgICAgICAgICAgY291bnRyaWVzID0gY291bnRyaWVzLmZpbHRlcigoY291bnRyeSkgPT4gbmV3IFJlZ0V4cChgJHtxdWVyeX1gLCAnZ2knKS50ZXN0KGNvdW50cnkubmFtZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjb3VudHJpZXMubWFwKChjb3VudHJ5KSA9PiAoeyB2YWx1ZTogY291bnRyeS5pZCwgbGFiZWw6IGNvdW50cnkubmFtZSB9KSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBnZXRMYWJlbHM6IChjb3VudHJ5SUQpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBjb3VudHJ5OiBhbnkgPSBmaW5kQnlDb3VudHJ5SWQoY291bnRyeUlEKTtcbiAgICAgICAgICBpZiAoY291bnRyeSkge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IHZhbHVlOiBjb3VudHJ5LmlkLCBsYWJlbDogY291bnRyeS5uYW1lIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKCcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXX0=