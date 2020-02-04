/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, forwardRef, Input, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { getStates, findByCountryId, COUNTRIES } from '../../../../utils/countries/Countries';
import { NovoLabelService } from '../../../../services/novo-label-service';
import { Helpers } from '../../../../utils/Helpers';
// Value accessor for the component (supports ngModel)
/** @type {?} */
var ADDRESS_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NovoAddressElement; }),
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
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
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
            this.fieldList.forEach(function (field) {
                _this.disabled[field] = _this._readOnly;
            });
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
        this.fieldList.forEach(function (field) {
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
                _this.config[field].pickerConfig.options = function (query) {
                    if (query === void 0) { query = ''; }
                    return _this.stateOptions(query, _this.model.countryID);
                };
                _this.config[field].pickerConfig.defaultOptions = _this.stateOptions;
            }
        });
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
            this.config.state.pickerConfig.options = function (query) {
                if (query === void 0) { query = ''; }
                return _this.stateOptions(query, _this.model.countryID);
            };
            this.stateOptions('', this.model.countryID).then(function (results) {
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
            });
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
                return states.filter(function (name) { return new RegExp("" + filter, 'gi').test(name); });
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
                            promise.then(function (result) {
                                loadingCountries = false;
                                countryName_1 = Helpers.interpolateWithFallback(_this.config.countryID.pickerConfig.format, result);
                                _this.model = Object.assign(model, { countryName: countryName_1 });
                                _this.updateStates();
                            });
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
        this.fieldList.forEach(function (field) {
            _this.onInput(null, field);
        });
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
            options: function (query, countryID) {
                if (query === void 0) { query = ''; }
                return Promise.resolve(_this.getStateOptions(query, countryID));
            },
            getLabels: function (state) {
                return Promise.resolve(state);
            },
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
            options: function (query) {
                if (query === void 0) { query = ''; }
                return new Promise(function (resolve) {
                    /** @type {?} */
                    var countries = COUNTRIES;
                    if (query) {
                        countries = countries.filter(function (country) { return new RegExp("" + query, 'gi').test(country.name); });
                    }
                    return resolve(countries.map(function (country) { return ({ value: country.id, label: country.name }); }));
                });
            },
            getLabels: function (countryID) {
                return new Promise(function (resolve) {
                    /** @type {?} */
                    var country = findByCountryId(countryID);
                    if (country) {
                        resolve({ value: country.id, label: country.name });
                    }
                    else {
                        resolve('');
                    }
                });
            },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2V4dHJhcy9hZGRyZXNzL0FkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQW1DLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztJQUc5QyxzQkFBc0IsR0FBRztJQUM3QixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixDQUFDO0lBQ2pELEtBQUssRUFBRSxJQUFJO0NBQ1o7Ozs7QUFFRCwrQ0FRQzs7O0lBUEMsMENBQWM7O0lBQ2QsNkNBQWtCOztJQUNsQiw4Q0FBa0I7O0lBQ2xCLGlEQUFtQjs7SUFDbkIsMkNBQWdCOztJQUNoQiw0Q0FBa0I7O0lBQ2xCLDZDQUFtQjs7Ozs7QUFHckIsdUNBU0M7OztJQVJDLHFDQUFtQjs7SUFDbkIscUNBQW1COztJQUNuQixxQ0FBcUM7O0lBQ3JDLHFDQUFxQzs7SUFDckMsaUNBQWlDOztJQUNqQyxrQ0FBa0M7O0lBQ2xDLGdDQUFnQzs7SUFDaEMsc0NBQXNDOztBQUd4QztJQTJMRSw0QkFBbUIsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFwQ25DLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFjbkMsV0FBTSxHQUFlLEVBQUUsQ0FB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SUFDN0Isb0NBQzBCOzs7OztJQUMxQix1Q0FBbUM7O0lBY25DLG9DQUF3Qjs7SUFDeEIsdUNBQXlGOztJQUN6RixtQ0FBVzs7SUFDWCwyQ0FBbUM7O0lBQ25DLDRDQUFvQzs7SUFDcEMscUNBQWtCOztJQUNsQixxQ0FBa0I7O0lBQ2xCLHNDQUFtQjs7SUFDbkIsOENBQTJCOztJQUMzQixtQ0FBZ0I7O0lBQ2hCLDBDQUFrQjs7SUFDbEIscUNBQWtCOztJQUNsQiwwQ0FBOEI7O0lBQzlCLG9DQUMrQzs7SUFDL0MsbUNBQzhDOztJQUM5QyxrQ0FDNkM7O0lBQzdDLDRDQUN1RDs7SUFFM0Msb0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBnZXRTdGF0ZXMsIGZpbmRCeUNvdW50cnlJZCwgQ09VTlRSSUVTIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY291bnRyaWVzL0NvdW50cmllcyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBBRERSRVNTX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0FkZHJlc3NFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9BZGRyZXNzU3ViZmllbGRDb25maWcge1xuICBsYWJlbDogc3RyaW5nO1xuICByZXF1aXJlZDogYm9vbGVhbjtcbiAgbWF4bGVuZ3RoOiBudW1iZXI7XG4gIHBpY2tlckNvbmZpZz86IGFueTtcbiAgaGlkZGVuOiBib29sZWFuO1xuICB1cGRhdGVkPzogYm9vbGVhbjtcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9BZGRyZXNzQ29uZmlnIHtcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICByZWFkT25seT86IGJvb2xlYW47XG4gIGFkZHJlc3MxPzogTm92b0FkZHJlc3NTdWJmaWVsZENvbmZpZztcbiAgYWRkcmVzczI/OiBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnO1xuICBjaXR5PzogTm92b0FkZHJlc3NTdWJmaWVsZENvbmZpZztcbiAgc3RhdGU/OiBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnO1xuICB6aXA/OiBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnO1xuICBjb3VudHJ5SUQ/OiBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFkZHJlc3MnLFxuICBwcm92aWRlcnM6IFtBRERSRVNTX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhblxuICAgICAgKm5nSWY9XCIhY29uZmlnPy5hZGRyZXNzMT8uaGlkZGVuXCJcbiAgICAgIGNsYXNzPVwic3RyZWV0LWFkZHJlc3NcIlxuICAgICAgW2NsYXNzLmludmFsaWRdPVwiaW52YWxpZC5hZGRyZXNzMVwiXG4gICAgICBbY2xhc3MuZm9jdXNdPVwiZm9jdXNlZC5hZGRyZXNzMVwiXG4gICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWQuYWRkcmVzczFcIlxuICAgID5cbiAgICAgIDxpXG4gICAgICAgICpuZ0lmPVwiY29uZmlnLmFkZHJlc3MxLnJlcXVpcmVkXCJcbiAgICAgICAgY2xhc3M9XCJyZXF1aXJlZC1pbmRpY2F0b3IgYWRkcmVzczFcIlxuICAgICAgICBbbmdDbGFzc109XCJ7ICdiaGktY2lyY2xlJzogIXZhbGlkLmFkZHJlc3MxLCAnYmhpLWNoZWNrJzogdmFsaWQuYWRkcmVzczEgfVwiXG4gICAgICA+XG4gICAgICA8L2k+XG4gICAgICA8aW5wdXRcbiAgICAgICAgW2NsYXNzLm1heGxlbmd0aC1lcnJvcl09XCJpbnZhbGlkTWF4bGVuZ3RoLmFkZHJlc3MxXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBpZD1cImFkZHJlc3MxXCJcbiAgICAgICAgbmFtZT1cImFkZHJlc3MxXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy5hZGRyZXNzMS5sYWJlbFwiXG4gICAgICAgIFttYXhsZW5ndGhdPVwiY29uZmlnPy5hZGRyZXNzMT8ubWF4bGVuZ3RoXCJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwic2hpcHBpbmcgc3RyZWV0LWFkZHJlc3MgYWRkcmVzcy1saW5lLTFcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLmFkZHJlc3MxXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlQ29udHJvbCgpXCJcbiAgICAgICAgKGZvY3VzKT1cImlzRm9jdXNlZCgkZXZlbnQsICdhZGRyZXNzMScpXCJcbiAgICAgICAgKGJsdXIpPVwiaXNCbHVycmVkKCRldmVudCwgJ2FkZHJlc3MxJylcIlxuICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQsICdhZGRyZXNzMScpXCJcbiAgICAgIC8+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuXG4gICAgICAqbmdJZj1cIiFjb25maWc/LmFkZHJlc3MyPy5oaWRkZW5cIlxuICAgICAgY2xhc3M9XCJhcHQgc3VpdGVcIlxuICAgICAgW2NsYXNzLmludmFsaWRdPVwiaW52YWxpZC5hZGRyZXNzMlwiXG4gICAgICBbY2xhc3MuZm9jdXNdPVwiZm9jdXNlZC5hZGRyZXNzMlwiXG4gICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWQuYWRkcmVzczJcIlxuICAgID5cbiAgICAgIDxpXG4gICAgICAgICpuZ0lmPVwiY29uZmlnLmFkZHJlc3MyLnJlcXVpcmVkXCJcbiAgICAgICAgY2xhc3M9XCJyZXF1aXJlZC1pbmRpY2F0b3IgYWRkcmVzczJcIlxuICAgICAgICBbbmdDbGFzc109XCJ7ICdiaGktY2lyY2xlJzogIXZhbGlkLmFkZHJlc3MyLCAnYmhpLWNoZWNrJzogdmFsaWQuYWRkcmVzczIgfVwiXG4gICAgICA+XG4gICAgICA8L2k+XG4gICAgICA8aW5wdXRcbiAgICAgICAgW2NsYXNzLm1heGxlbmd0aC1lcnJvcl09XCJpbnZhbGlkTWF4bGVuZ3RoLmFkZHJlc3MyXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBpZD1cImFkZHJlc3MyXCJcbiAgICAgICAgbmFtZT1cImFkZHJlc3MyXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy5hZGRyZXNzMi5sYWJlbFwiXG4gICAgICAgIFttYXhsZW5ndGhdPVwiY29uZmlnPy5hZGRyZXNzMj8ubWF4bGVuZ3RoXCJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwic2hpcHBpbmcgYWRkcmVzcy1saW5lLTJcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLmFkZHJlc3MyXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlQ29udHJvbCgpXCJcbiAgICAgICAgKGZvY3VzKT1cImlzRm9jdXNlZCgkZXZlbnQsICdhZGRyZXNzMicpXCJcbiAgICAgICAgKGJsdXIpPVwiaXNCbHVycmVkKCRldmVudCwgJ2FkZHJlc3MyJylcIlxuICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQsICdhZGRyZXNzMicpXCJcbiAgICAgIC8+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuXG4gICAgICAqbmdJZj1cIiFjb25maWc/LmNpdHk/LmhpZGRlblwiXG4gICAgICBjbGFzcz1cImNpdHkgbG9jYWxpdHlcIlxuICAgICAgW2NsYXNzLmludmFsaWRdPVwiaW52YWxpZC5jaXR5XCJcbiAgICAgIFtjbGFzcy5mb2N1c109XCJmb2N1c2VkLmNpdHlcIlxuICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkLmNpdHlcIlxuICAgID5cbiAgICAgIDxpICpuZ0lmPVwiY29uZmlnLmNpdHkucmVxdWlyZWRcIiBjbGFzcz1cInJlcXVpcmVkLWluZGljYXRvclwiIFtuZ0NsYXNzXT1cInsgJ2JoaS1jaXJjbGUnOiAhdmFsaWQuY2l0eSwgJ2JoaS1jaGVjayc6IHZhbGlkLmNpdHkgfVwiPiA8L2k+XG4gICAgICA8aW5wdXRcbiAgICAgICAgW2NsYXNzLm1heGxlbmd0aC1lcnJvcl09XCJpbnZhbGlkTWF4bGVuZ3RoLmNpdHlcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGlkPVwiY2l0eVwiXG4gICAgICAgIG5hbWU9XCJjaXR5XCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy5jaXR5LmxhYmVsXCJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwic2hpcHBpbmcgY2l0eSBsb2NhbGl0eVwiXG4gICAgICAgIFttYXhsZW5ndGhdPVwiY29uZmlnPy5jaXR5Py5tYXhsZW5ndGhcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLmNpdHlcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVDb250cm9sKClcIlxuICAgICAgICAoZm9jdXMpPVwiaXNGb2N1c2VkKCRldmVudCwgJ2NpdHknKVwiXG4gICAgICAgIChibHVyKT1cImlzQmx1cnJlZCgkZXZlbnQsICdjaXR5JylcIlxuICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQsICdjaXR5JylcIlxuICAgICAgLz5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW5cbiAgICAgICpuZ0lmPVwiIWNvbmZpZz8uc3RhdGU/LmhpZGRlblwiXG4gICAgICBjbGFzcz1cInN0YXRlIHJlZ2lvblwiXG4gICAgICBbY2xhc3MuaW52YWxpZF09XCJpbnZhbGlkLnN0YXRlXCJcbiAgICAgIFtjbGFzcy5mb2N1c109XCJmb2N1c2VkLnN0YXRlXCJcbiAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZC5zdGF0ZVwiXG4gICAgICBbdG9vbHRpcF09XCJ0b29sdGlwLnN0YXRlXCJcbiAgICA+XG4gICAgICA8aSAqbmdJZj1cImNvbmZpZy5zdGF0ZS5yZXF1aXJlZFwiIGNsYXNzPVwicmVxdWlyZWQtaW5kaWNhdG9yXCIgW25nQ2xhc3NdPVwieyAnYmhpLWNpcmNsZSc6ICF2YWxpZC5zdGF0ZSwgJ2JoaS1jaGVjayc6IHZhbGlkLnN0YXRlIH1cIj4gPC9pPlxuICAgICAgPG5vdm8tcGlja2VyXG4gICAgICAgIFtjb25maWddPVwiY29uZmlnPy5zdGF0ZT8ucGlja2VyQ29uZmlnXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbmZpZz8uc3RhdGU/LmxhYmVsXCJcbiAgICAgICAgKGNoYW5nZWQpPVwib25TdGF0ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwic2hpcHBpbmcgcmVnaW9uXCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5zdGF0ZVwiXG4gICAgICAgIFtkaXNhYmxlUGlja2VySW5wdXRdPVwiZGlzYWJsZWQuc3RhdGVcIlxuICAgICAgPjwvbm92by1waWNrZXI+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuXG4gICAgICAqbmdJZj1cIiFjb25maWc/LnppcD8uaGlkZGVuXCJcbiAgICAgIGNsYXNzPVwiemlwIHBvc3RhbC1jb2RlXCJcbiAgICAgIFtjbGFzcy5pbnZhbGlkXT1cImludmFsaWQuemlwXCJcbiAgICAgIFtjbGFzcy5mb2N1c109XCJmb2N1c2VkLnppcFwiXG4gICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWQuemlwXCJcbiAgICA+XG4gICAgICA8aSAqbmdJZj1cImNvbmZpZy56aXAucmVxdWlyZWRcIiBjbGFzcz1cInJlcXVpcmVkLWluZGljYXRvclwiIFtuZ0NsYXNzXT1cInsgJ2JoaS1jaXJjbGUnOiAhdmFsaWQuemlwLCAnYmhpLWNoZWNrJzogdmFsaWQuemlwIH1cIj4gPC9pPlxuICAgICAgPGlucHV0XG4gICAgICAgIFtjbGFzcy5tYXhsZW5ndGgtZXJyb3JdPVwiaW52YWxpZE1heGxlbmd0aC56aXBcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGlkPVwiemlwXCJcbiAgICAgICAgbmFtZT1cInppcFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb25maWcuemlwLmxhYmVsXCJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwic2hpcHBpbmcgcG9zdGFsLWNvZGVcIlxuICAgICAgICBbbWF4bGVuZ3RoXT1cImNvbmZpZz8uemlwPy5tYXhsZW5ndGhcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLnppcFwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZUNvbnRyb2woKVwiXG4gICAgICAgIChmb2N1cyk9XCJpc0ZvY3VzZWQoJGV2ZW50LCAnemlwJylcIlxuICAgICAgICAoYmx1cik9XCJpc0JsdXJyZWQoJGV2ZW50LCAnemlwJylcIlxuICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQsICd6aXAnKVwiXG4gICAgICAvPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhblxuICAgICAgKm5nSWY9XCIhY29uZmlnPy5jb3VudHJ5SUQ/LmhpZGRlblwiXG4gICAgICBjbGFzcz1cImNvdW50cnktbmFtZVwiXG4gICAgICBbY2xhc3MuaW52YWxpZF09XCJpbnZhbGlkLmNvdW50cnlJRFwiXG4gICAgICBbY2xhc3MuZm9jdXNdPVwiZm9jdXNlZC5jb3VudHJ5SURcIlxuICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkLmNvdW50cnlJRFwiXG4gICAgPlxuICAgICAgPGlcbiAgICAgICAgKm5nSWY9XCJjb25maWcuY291bnRyeUlELnJlcXVpcmVkXCJcbiAgICAgICAgY2xhc3M9XCJyZXF1aXJlZC1pbmRpY2F0b3JcIlxuICAgICAgICBbbmdDbGFzc109XCJ7ICdiaGktY2lyY2xlJzogIXZhbGlkLmNvdW50cnlJRCwgJ2JoaS1jaGVjayc6IHZhbGlkLmNvdW50cnlJRCB9XCJcbiAgICAgID5cbiAgICAgIDwvaT5cbiAgICAgIDxub3ZvLXBpY2tlclxuICAgICAgICBbY29uZmlnXT1cImNvbmZpZz8uY291bnRyeUlEPy5waWNrZXJDb25maWdcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLmNvdW50cnlJRC5sYWJlbFwiXG4gICAgICAgIChjaGFuZ2VkKT1cIm9uQ291bnRyeUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwic2hpcHBpbmcgY291bnRyeVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwuY291bnRyeUlEXCJcbiAgICAgICAgW2Rpc2FibGVQaWNrZXJJbnB1dF09XCJkaXNhYmxlZC5jb3VudHJ5SURcIlxuICAgICAgPjwvbm92by1waWNrZXI+XG4gICAgPC9zcGFuPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWRkcmVzc0VsZW1lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgQElucHV0KClcbiAgY29uZmlnOiBOb3ZvQWRkcmVzc0NvbmZpZztcbiAgcHJpdmF0ZSBfcmVhZE9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc2V0IHJlYWRPbmx5KHJlYWRPbmx5OiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVhZE9ubHkgPSByZWFkT25seTtcbiAgICB0aGlzLmZpZWxkTGlzdC5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmRpc2FibGVkW2ZpZWxkXSA9IHRoaXMuX3JlYWRPbmx5O1xuICAgIH0pO1xuICAgIGlmICh0aGlzLm1vZGVsKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlcygpO1xuICAgIH1cbiAgfVxuICBnZXQgcmVhZE9ubHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRPbmx5O1xuICB9XG4gIHN0YXRlczogQXJyYXk8YW55PiA9IFtdO1xuICBmaWVsZExpc3Q6IEFycmF5PHN0cmluZz4gPSBbJ2FkZHJlc3MxJywgJ2FkZHJlc3MyJywgJ2NpdHknLCAnc3RhdGUnLCAnemlwJywgJ2NvdW50cnlJRCddO1xuICBtb2RlbDogYW55O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgZm9jdXNlZDogYW55ID0ge307XG4gIGludmFsaWQ6IGFueSA9IHt9O1xuICBkaXNhYmxlZDogYW55ID0ge307XG4gIGludmFsaWRNYXhsZW5ndGg6IGFueSA9IHt9O1xuICB2YWxpZDogYW55ID0ge307XG4gIHN0YXRlT3B0aW9uczogYW55O1xuICB0b29sdGlwOiBhbnkgPSB7fTtcbiAgaW5pdENvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICB2YWxpZGl0eUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHt9O1xuICAgIH1cbiAgICBpZiAodGhpcy5tb2RlbCkge1xuICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMubW9kZWwpO1xuICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5tb2RlbCkge1xuICAgICAgdGhpcy5tb2RlbCA9IHt9O1xuICAgIH1cbiAgICB0aGlzLmluaXRDb25maWcoKTtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuY291bnRyeUlEKSkge1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZXMoKTtcbiAgICB9XG4gIH1cblxuICBpbml0Q29uZmlnKCk6IHZvaWQge1xuICAgIHRoaXMuZmllbGRMaXN0LmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghdGhpcy5jb25maWcuaGFzT3duUHJvcGVydHkoZmllbGQpKSB7XG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXSA9IHtcbiAgICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY29uZmlnW2ZpZWxkXS5oYXNPd25Qcm9wZXJ0eSgnbGFiZWwnKSkge1xuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ubGFiZWwgPSB0aGlzLmxhYmVsc1tmaWVsZF07XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb25maWcucmVxdWlyZWQpIHtcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbmZpZ1tmaWVsZF0ucmVhZE9ubHkgfHwgdGhpcy5jb25maWcucmVhZE9ubHkpIHtcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZFtmaWVsZF0gPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGZpZWxkID09PSAnY291bnRyeUlEJykge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnW2ZpZWxkXS5waWNrZXJDb25maWcpIHtcbiAgICAgICAgICB0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnID0gdGhpcy5nZXREZWZhdWx0Q291bnRyeUNvbmZpZygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgPSB0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnLm9wdGlvbnM7XG4gICAgICB9XG4gICAgICBpZiAoZmllbGQgPT09ICdzdGF0ZScpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnKSB7XG4gICAgICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnID0gdGhpcy5nZXREZWZhdWx0U3RhdGVDb25maWcoKTtcbiAgICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zID0gdGhpcy5jb25maWdbZmllbGRdLnBpY2tlckNvbmZpZy5vcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGVPcHRpb25zID0gdGhpcy5jb25maWdbZmllbGRdLnBpY2tlckNvbmZpZy5vcHRpb25zO1xuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnLm9wdGlvbnMgPSAocXVlcnkgPSAnJykgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlT3B0aW9ucyhxdWVyeSwgdGhpcy5tb2RlbC5jb3VudHJ5SUQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zID0gdGhpcy5zdGF0ZU9wdGlvbnM7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc1ZhbGlkKGZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgdmFsaWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGlmIChcbiAgICAgICgodGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkICYmIChIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbFtmaWVsZF0pIHx8IEhlbHBlcnMuaXNFbXB0eSh0aGlzLm1vZGVsW2ZpZWxkXSkpKSB8fFxuICAgICAgICAhdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkKSAmJlxuICAgICAgIShmaWVsZCA9PT0gJ2NvdW50cnlJRCcgJiYgdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkICYmICFIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5jb3VudHJ5SUQpKSAmJlxuICAgICAgIShcbiAgICAgICAgZmllbGQgPT09ICdzdGF0ZScgJiZcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkICYmXG4gICAgICAgICghSGVscGVycy5pc0VtcHR5KHRoaXMubW9kZWwuc3RhdGUpIHx8XG4gICAgICAgICAgKChIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5zdGF0ZSkgfHwgSGVscGVycy5pc0VtcHR5KHRoaXMubW9kZWwuc3RhdGUpKSAmJlxuICAgICAgICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsLmNvdW50cnlOYW1lKSAmJlxuICAgICAgICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnICYmXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgJiZcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucy5sZW5ndGggPT09IDApKVxuICAgICAgKVxuICAgICkge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLm1vZGVsW2ZpZWxkXSkgJiZcbiAgICAgICFIZWxwZXJzLmlzQmxhbmsodGhpcy5jb25maWdbZmllbGRdLm1heGxlbmd0aCkgJiZcbiAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5tYXhsZW5ndGggPCB0aGlzLm1vZGVsW2ZpZWxkXS5sZW5ndGhcbiAgICApIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMudmFsaWRbZmllbGRdID0gdmFsaWQ7XG4gIH1cblxuICBpc0ludmFsaWQoZmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBpbnZhbGlkOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IGludmFsaWRNYXhsZW5ndGg6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpZiAoXG4gICAgICAoZmllbGQgIT09ICdjb3VudHJ5SUQnICYmXG4gICAgICAgIGZpZWxkICE9PSAnc3RhdGUnICYmXG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5yZXF1aXJlZCAmJlxuICAgICAgICBIZWxwZXJzLmlzRW1wdHkodGhpcy5tb2RlbFtmaWVsZF0pICYmXG4gICAgICAgICFIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbFtmaWVsZF0pKSB8fFxuICAgICAgKGZpZWxkID09PSAnY291bnRyeUlEJyAmJiB0aGlzLmNvbmZpZ1tmaWVsZF0ucmVxdWlyZWQgJiYgSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuY291bnRyeU5hbWUpICYmIHRoaXMuY29uZmlnW2ZpZWxkXS51cGRhdGVkKSB8fFxuICAgICAgKGZpZWxkID09PSAnc3RhdGUnICYmXG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5yZXF1aXJlZCAmJlxuICAgICAgICAoSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuc3RhdGUpIHx8IEhlbHBlcnMuaXNFbXB0eSh0aGlzLm1vZGVsLnN0YXRlKSkgJiZcbiAgICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsLmNvdW50cnlJRCkgJiZcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnVwZGF0ZWQgJiZcbiAgICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnICYmXG4gICAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyAmJlxuICAgICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMubGVuZ3RoID4gMClcbiAgICApIHtcbiAgICAgIGludmFsaWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAhSGVscGVycy5pc0VtcHR5KHRoaXMubW9kZWxbZmllbGRdKSAmJlxuICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLmNvbmZpZ1tmaWVsZF0ubWF4bGVuZ3RoKSAmJlxuICAgICAgdGhpcy5jb25maWdbZmllbGRdLm1heGxlbmd0aCA8IHRoaXMubW9kZWxbZmllbGRdLmxlbmd0aFxuICAgICkge1xuICAgICAgaW52YWxpZCA9IHRydWU7XG4gICAgICBpbnZhbGlkTWF4bGVuZ3RoID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5pbnZhbGlkW2ZpZWxkXSA9IGludmFsaWQ7XG4gICAgdGhpcy5pbnZhbGlkTWF4bGVuZ3RoW2ZpZWxkXSA9IGludmFsaWRNYXhsZW5ndGg7XG4gIH1cblxuICBvbklucHV0KGV2ZW50OiBFdmVudCwgZmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaXNJbnZhbGlkKGZpZWxkKTtcbiAgICB0aGlzLmlzVmFsaWQoZmllbGQpO1xuICAgIGlmIChldmVudCkge1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7IHZhbHVlOiB0aGlzLm1vZGVsW2ZpZWxkXSwgZmllbGQ6IGZpZWxkIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlzRm9jdXNlZChldmVudDogRXZlbnQsIGZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzZWRbZmllbGRdID0gdHJ1ZTtcbiAgICB0aGlzLmZvY3VzLmVtaXQoeyBldmVudCwgZmllbGQgfSk7XG4gIH1cblxuICBpc0JsdXJyZWQoZXZlbnQ6IEV2ZW50LCBmaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c2VkW2ZpZWxkXSA9IGZhbHNlO1xuICAgIHRoaXMuYmx1ci5lbWl0KHsgZXZlbnQsIGZpZWxkIH0pO1xuICB9XG5cbiAgb25Db3VudHJ5Q2hhbmdlKGV2dCkge1xuICAgIGxldCBjb3VudHJ5OiBhbnkgPSBldnQgJiYgZXZ0LnJhd1ZhbHVlID8gZXZ0LnJhd1ZhbHVlIDogbnVsbDtcbiAgICBsZXQgZmllbGQ6IGFueTtcbiAgICBsZXQgc3RhdGVzVXBkYXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgdGhpcy5jb25maWcuY291bnRyeUlELnVwZGF0ZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnKSB7XG4gICAgICBmaWVsZCA9IHRoaXMuY29uZmlnLmNvdW50cnlJRC5waWNrZXJDb25maWcuZmllbGQ7XG4gICAgfVxuICAgIGlmIChjb3VudHJ5ICYmIGZpZWxkICYmICFIZWxwZXJzLmlzQmxhbmsoY291bnRyeVtmaWVsZF0pICYmIHRoaXMubW9kZWwuY291bnRyeUlEICE9PSBjb3VudHJ5W2ZpZWxkXSkge1xuICAgICAgdGhpcy5tb2RlbC5jb3VudHJ5SUQgPSBjb3VudHJ5W2ZpZWxkXTtcbiAgICAgIHRoaXMubW9kZWwuY291bnRyeU5hbWUgPSBIZWxwZXJzLmludGVycG9sYXRlKHRoaXMuY29uZmlnLmNvdW50cnlJRC5waWNrZXJDb25maWcuZm9ybWF0LCBjb3VudHJ5KTtcbiAgICAgIHRoaXMuZGlzYWJsZWQuc3RhdGUgPSBmYWxzZTtcbiAgICAgIHRoaXMudG9vbHRpcC5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHN0YXRlc1VwZGF0YWJsZSA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChIZWxwZXJzLmlzQmxhbmsoY291bnRyeSkgfHwgSGVscGVycy5pc0JsYW5rKGNvdW50cnlbZmllbGRdKSkge1xuICAgICAgdGhpcy5tb2RlbC5jb3VudHJ5SUQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLm1vZGVsLmNvdW50cnlOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kaXNhYmxlZC5zdGF0ZSA9IHRydWU7XG4gICAgICB0aGlzLnRvb2x0aXAuc3RhdGUgPSB0aGlzLmxhYmVscy5zZWxlY3RDb3VudHJ5Rmlyc3Q7XG4gICAgICB0aGlzLmludmFsaWQuc3RhdGUgPSBmYWxzZTtcbiAgICAgIHN0YXRlc1VwZGF0YWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHN0YXRlXG4gICAgaWYgKHN0YXRlc1VwZGF0YWJsZSkge1xuICAgICAgdGhpcy5tb2RlbC5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGVzKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgIHRoaXMub25JbnB1dChudWxsLCAnY291bnRyeUlEJyk7XG4gICAgdGhpcy5vbklucHV0KG51bGwsICdzdGF0ZScpO1xuICB9XG5cbiAgb25TdGF0ZUNoYW5nZShldnQpIHtcbiAgICBsZXQgc3RhdGU6IGFueSA9IGV2dCAmJiBldnQudmFsdWUgPyBldnQudmFsdWUgOiBudWxsO1xuICAgIHRoaXMuY29uZmlnLnN0YXRlLnVwZGF0ZWQgPSB0cnVlO1xuICAgIHRoaXMubW9kZWwuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICB0aGlzLm9uSW5wdXQobnVsbCwgJ3N0YXRlJyk7XG4gIH1cblxuICBzZXRTdGF0ZUxhYmVsKG1vZGVsOiBhbnkpIHtcbiAgICBsZXQgc3RhdGU6IHN0cmluZyA9IG1vZGVsLnN0YXRlO1xuICAgIGlmICghSGVscGVycy5pc0JsYW5rKHN0YXRlKSkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlLnJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMudmFsaWQuc3RhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5tb2RlbC5zdGF0ZSA9IHN0YXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vZGVsLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlLnJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMudmFsaWQuc3RhdGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVTdGF0ZXMoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5vcHRpb25zICYmICFIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5jb3VudHJ5SUQpKSB7XG4gICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcub3B0aW9ucyA9IChxdWVyeSA9ICcnKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlT3B0aW9ucyhxdWVyeSwgdGhpcy5tb2RlbC5jb3VudHJ5SUQpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuc3RhdGVPcHRpb25zKCcnLCB0aGlzLm1vZGVsLmNvdW50cnlJRCkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgPSByZXN1bHRzO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnRvb2x0aXAuc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlZC5zdGF0ZSA9IHRoaXMuX3JlYWRPbmx5O1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGVMYWJlbCh0aGlzLm1vZGVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc2FibGVkLnN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnRvb2x0aXAuc3RhdGUgPSB0aGlzLmxhYmVscy5ub1N0YXRlc0ZvckNvdW50cnk7XG4gICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlLnJlcXVpcmVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkLnN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWxpZGl0eUNoYW5nZS5lbWl0KCk7XG4gICAgICAgIHRoaXMub25JbnB1dChudWxsLCAnc3RhdGUnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuZGlzYWJsZWQuc3RhdGUgPSB0cnVlO1xuICAgICAgdGhpcy50b29sdGlwLnN0YXRlID0gdGhpcy5sYWJlbHMuc2VsZWN0Q291bnRyeUZpcnN0O1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlLnJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMudmFsaWQuc3RhdGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZU9wdGlvbnMoZmlsdGVyOiBzdHJpbmcgPSAnJywgY291bnRyeUlEOiBudW1iZXIpOiBhbnlbXSB7XG4gICAgaWYgKGNvdW50cnlJRCkge1xuICAgICAgY29uc3QgY291bnRyeTogYW55ID0gZmluZEJ5Q291bnRyeUlkKGNvdW50cnlJRCk7XG4gICAgICBjb25zdCBzdGF0ZXM6IGFueVtdID0gZ2V0U3RhdGVzKGNvdW50cnkubmFtZSk7XG4gICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZXMuZmlsdGVyKChuYW1lKSA9PiBuZXcgUmVnRXhwKGAke2ZpbHRlcn1gLCAnZ2knKS50ZXN0KG5hbWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0ZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDb250cm9sKCkge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLm1vZGVsKTtcbiAgICB0aGlzLm9uSW5wdXQobnVsbCwgJ2NvdW50cnlJRCcpO1xuICAgIHRoaXMub25JbnB1dChudWxsLCAnc3RhdGUnKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIGxldCBsb2FkaW5nQ291bnRyaWVzOiBib29sZWFuID0gZmFsc2U7XG4gICAgaWYgKG1vZGVsKSB7XG4gICAgICBsZXQgY291bnRyeU5hbWU7XG4gICAgICBpZiAobW9kZWwuY291bnRyeU5hbWUgJiYgbW9kZWwuY291bnRyeUlEKSB7XG4gICAgICAgIGNvdW50cnlOYW1lID0gbW9kZWwuY291bnRyeU5hbWU7XG4gICAgICB9IGVsc2UgaWYgKG1vZGVsLmNvdW50cnlJRCkge1xuICAgICAgICBpZiAodGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZyAmJiB0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnLmdldExhYmVscykge1xuICAgICAgICAgIGlmIChIZWxwZXJzLmlzRnVuY3Rpb24odGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZy5nZXRMYWJlbHMpKSB7XG4gICAgICAgICAgICBsZXQgcHJvbWlzZTogYW55ID0gdGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZy5nZXRMYWJlbHMobW9kZWwuY291bnRyeUlEKTtcbiAgICAgICAgICAgIGxvYWRpbmdDb3VudHJpZXMgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb21pc2UudGhlbikge1xuICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZ0NvdW50cmllcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvdW50cnlOYW1lID0gSGVscGVycy5pbnRlcnBvbGF0ZVdpdGhGYWxsYmFjayh0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnLmZvcm1hdCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsID0gT2JqZWN0LmFzc2lnbihtb2RlbCwgeyBjb3VudHJ5TmFtZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlcygpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb3VudHJ5TmFtZSkge1xuICAgICAgICBjb3VudHJ5TmFtZSA9IGNvdW50cnlOYW1lLnRyaW0oKTtcbiAgICAgICAgbW9kZWwuc3RhdGUgPSBtb2RlbC5zdGF0ZSB8fCAnJztcbiAgICAgICAgdGhpcy5tb2RlbCA9IE9iamVjdC5hc3NpZ24obW9kZWwsIHsgY291bnRyeU5hbWU6IGNvdW50cnlOYW1lIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgICAgfVxuICAgICAgaWYgKCFsb2FkaW5nQ291bnRyaWVzICYmICFIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5jb3VudHJ5SUQpKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGVzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZmllbGRMaXN0LmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMub25JbnB1dChudWxsLCBmaWVsZCk7XG4gICAgfSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZhdWx0U3RhdGVDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGQ6ICd2YWx1ZScsXG4gICAgICBmb3JtYXQ6ICckbGFiZWwnLFxuICAgICAgb3B0aW9uczogKHF1ZXJ5ID0gJycsIGNvdW50cnlJRCkgPT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZ2V0U3RhdGVPcHRpb25zKHF1ZXJ5LCBjb3VudHJ5SUQpKTtcbiAgICAgIH0sXG4gICAgICBnZXRMYWJlbHM6IChzdGF0ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc3RhdGUpO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZhdWx0Q291bnRyeUNvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZDogJ3ZhbHVlJyxcbiAgICAgIGZvcm1hdDogJyRsYWJlbCcsXG4gICAgICBvcHRpb25zOiAocXVlcnk6IHN0cmluZyA9ICcnKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgIGxldCBjb3VudHJpZXMgPSBDT1VOVFJJRVM7XG4gICAgICAgICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgICAgICBjb3VudHJpZXMgPSBjb3VudHJpZXMuZmlsdGVyKChjb3VudHJ5KSA9PiBuZXcgUmVnRXhwKGAke3F1ZXJ5fWAsICdnaScpLnRlc3QoY291bnRyeS5uYW1lKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKGNvdW50cmllcy5tYXAoKGNvdW50cnkpID0+ICh7IHZhbHVlOiBjb3VudHJ5LmlkLCBsYWJlbDogY291bnRyeS5uYW1lIH0pKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGdldExhYmVsczogKGNvdW50cnlJRCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSkgPT4ge1xuICAgICAgICAgIGxldCBjb3VudHJ5OiBhbnkgPSBmaW5kQnlDb3VudHJ5SWQoY291bnRyeUlEKTtcbiAgICAgICAgICBpZiAoY291bnRyeSkge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IHZhbHVlOiBjb3VudHJ5LmlkLCBsYWJlbDogY291bnRyeS5uYW1lIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKCcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXX0=