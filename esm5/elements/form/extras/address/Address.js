/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, forwardRef, Input, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { getCountries, getStates, findByCountryId } from '../../../../utils/countries/Countries';
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
        this.countries = getCountries();
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
                    var countries = getCountries();
                    if (query) {
                        countries = countries.filter(function (country) { return new RegExp("" + query, 'gi').test(country.name); });
                    }
                    return resolve(countries);
                });
            },
            getLabels: function (countryID) {
                return new Promise(function (resolve) {
                    /** @type {?} */
                    var country = findByCountryId(countryID);
                    if (country) {
                        resolve(country.name);
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
                    template: "\n        <span *ngIf=\"!config?.address1?.hidden\" class=\"street-address\" [class.invalid]=\"invalid.address1\" [class.focus]=\"focused.address1\" [class.disabled]=\"disabled.address1\">\n            <i *ngIf=\"config.address1.required\"\n                class=\"required-indicator address1\"\n                [ngClass]=\"{'bhi-circle': !valid.address1, 'bhi-check': valid.address1}\">\n            </i>\n            <input [class.maxlength-error]=\"invalidMaxlength.address1\" type=\"text\" id=\"address1\" name=\"address1\" [placeholder]=\"config.address1.label\" [maxlength]=\"config?.address1?.maxlength\" autocomplete=\"shipping street-address address-line-1\" [(ngModel)]=\"model.address1\" (ngModelChange)=\"updateControl()\" (focus)=\"isFocused($event, 'address1')\" (blur)=\"isBlurred($event, 'address1')\" (input)=\"onInput($event, 'address1')\"/>\n        </span>\n        <span *ngIf=\"!config?.address2?.hidden\" class=\"apt suite\" [class.invalid]=\"invalid.address2\" [class.focus]=\"focused.address2\" [class.disabled]=\"disabled.address2\">\n            <i *ngIf=\"config.address2.required\"\n                class=\"required-indicator address2\"\n                [ngClass]=\"{'bhi-circle': !valid.address2, 'bhi-check': valid.address2}\">\n            </i>\n            <input [class.maxlength-error]=\"invalidMaxlength.address2\" type=\"text\" id=\"address2\" name=\"address2\" [placeholder]=\"config.address2.label\" [maxlength]=\"config?.address2?.maxlength\" autocomplete=\"shipping address-line-2\" [(ngModel)]=\"model.address2\" (ngModelChange)=\"updateControl()\" (focus)=\"isFocused($event, 'address2')\" (blur)=\"isBlurred($event, 'address2')\" (input)=\"onInput($event, 'address2')\"/>\n        </span>\n        <span *ngIf=\"!config?.city?.hidden\" class=\"city locality\" [class.invalid]=\"invalid.city\" [class.focus]=\"focused.city\" [class.disabled]=\"disabled.city\">\n            <i *ngIf=\"config.city.required\"\n                class=\"required-indicator\"\n                [ngClass]=\"{'bhi-circle': !valid.city, 'bhi-check': valid.city}\">\n            </i>\n            <input [class.maxlength-error]=\"invalidMaxlength.city\" type=\"text\" id=\"city\" name=\"city\" [placeholder]=\"config.city.label\" autocomplete=\"shipping city locality\" [maxlength]=\"config?.city?.maxlength\" [(ngModel)]=\"model.city\" (ngModelChange)=\"updateControl()\" (focus)=\"isFocused($event, 'city')\" (blur)=\"isBlurred($event, 'city')\" (input)=\"onInput($event, 'city')\"/>\n        </span>\n        <span *ngIf=\"!config?.state?.hidden\" class=\"state region\" [class.invalid]=\"invalid.state\" [class.focus]=\"focused.state\" [class.disabled]=\"disabled.state\"  [tooltip]=\"tooltip.state\">\n            <i *ngIf=\"config.state.required\"\n                class=\"required-indicator\"\n                [ngClass]=\"{'bhi-circle': !valid.state, 'bhi-check': valid.state}\">\n            </i>\n            <novo-picker [config]=\"config?.state?.pickerConfig\" [placeholder]=\"config?.state?.label\" (changed)=\"onStateChange($event)\" autocomplete=\"shipping region\" [(ngModel)]=\"model.state\" [disablePickerInput]=\"disabled.state\"></novo-picker>\n        </span>\n        <span *ngIf=\"!config?.zip?.hidden\" class=\"zip postal-code\" [class.invalid]=\"invalid.zip\" [class.focus]=\"focused.zip\" [class.disabled]=\"disabled.zip\">\n            <i *ngIf=\"config.zip.required\"\n                class=\"required-indicator\"\n                [ngClass]=\"{'bhi-circle': !valid.zip, 'bhi-check': valid.zip}\">\n            </i>\n            <input [class.maxlength-error]=\"invalidMaxlength.zip\" type=\"text\" id=\"zip\" name=\"zip\" [placeholder]=\"config.zip.label\" autocomplete=\"shipping postal-code\" [maxlength]=\"config?.zip?.maxlength\" [(ngModel)]=\"model.zip\" (ngModelChange)=\"updateControl()\" (focus)=\"isFocused($event, 'zip')\" (blur)=\"isBlurred($event, 'zip')\" (input)=\"onInput($event, 'zip')\" />\n        </span>\n        <span *ngIf=\"!config?.countryID?.hidden\" class=\"country-name\" [class.invalid]=\"invalid.countryID\" [class.focus]=\"focused.countryID\" [class.disabled]=\"disabled.countryID\">\n            <i *ngIf=\"config.countryID.required\"\n                class=\"required-indicator\"\n                [ngClass]=\"{'bhi-circle': !valid.countryID, 'bhi-check': valid.countryID}\">\n            </i>\n            <novo-picker [config]=\"config?.countryID?.pickerConfig\" [placeholder]=\"config.countryID.label\" (changed)=\"onCountryChange($event)\" autocomplete=\"shipping country\" [(ngModel)]=\"model.countryName\" [disablePickerInput]=\"disabled.countryID\"></novo-picker>\n        </span>\n    "
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
    NovoAddressElement.prototype.countries;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2V4dHJhcy9hZGRyZXNzL0FkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQW1DLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztJQUc5QyxzQkFBc0IsR0FBRztJQUM3QixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixDQUFDO0lBQ2pELEtBQUssRUFBRSxJQUFJO0NBQ1o7Ozs7QUFFRCwrQ0FRQzs7O0lBUEMsMENBQWM7O0lBQ2QsNkNBQWtCOztJQUNsQiw4Q0FBa0I7O0lBQ2xCLGlEQUFtQjs7SUFDbkIsMkNBQWdCOztJQUNoQiw0Q0FBa0I7O0lBQ2xCLDZDQUFtQjs7Ozs7QUFHckIsdUNBU0M7OztJQVJDLHFDQUFtQjs7SUFDbkIscUNBQW1COztJQUNuQixxQ0FBcUM7O0lBQ3JDLHFDQUFxQzs7SUFDckMsaUNBQWlDOztJQUNqQyxrQ0FBa0M7O0lBQ2xDLGdDQUFnQzs7SUFDaEMsc0NBQXNDOztBQUd4QztJQXdGRSw0QkFBbUIsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFyQ25DLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFjbkMsV0FBTSxHQUFlLEVBQUUsQ0FB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SUFDbEIsc0NBQW1COztJQUNuQiw4Q0FBMkI7O0lBQzNCLG1DQUFnQjs7SUFDaEIsMENBQWtCOztJQUNsQixxQ0FBa0I7O0lBQ2xCLDBDQUE4Qjs7SUFDOUIsb0NBQytDOztJQUMvQyxtQ0FDOEM7O0lBQzlDLGtDQUM2Qzs7SUFDN0MsNENBQ3VEOztJQUUzQyxvQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IGdldENvdW50cmllcywgZ2V0U3RhdGVzLCBmaW5kQnlDb3VudHJ5SWQgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb3VudHJpZXMvQ291bnRyaWVzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IEFERFJFU1NfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvQWRkcmVzc0VsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm92b0FkZHJlc3NTdWJmaWVsZENvbmZpZyB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHJlcXVpcmVkOiBib29sZWFuO1xuICBtYXhsZW5ndGg6IG51bWJlcjtcbiAgcGlja2VyQ29uZmlnPzogYW55O1xuICBoaWRkZW46IGJvb2xlYW47XG4gIHVwZGF0ZWQ/OiBib29sZWFuO1xuICByZWFkT25seT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm92b0FkZHJlc3NDb25maWcge1xuICByZXF1aXJlZD86IGJvb2xlYW47XG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbiAgYWRkcmVzczE/OiBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnO1xuICBhZGRyZXNzMj86IE5vdm9BZGRyZXNzU3ViZmllbGRDb25maWc7XG4gIGNpdHk/OiBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnO1xuICBzdGF0ZT86IE5vdm9BZGRyZXNzU3ViZmllbGRDb25maWc7XG4gIHppcD86IE5vdm9BZGRyZXNzU3ViZmllbGRDb25maWc7XG4gIGNvdW50cnlJRD86IE5vdm9BZGRyZXNzU3ViZmllbGRDb25maWc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tYWRkcmVzcycsXG4gIHByb3ZpZGVyczogW0FERFJFU1NfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb25maWc/LmFkZHJlc3MxPy5oaWRkZW5cIiBjbGFzcz1cInN0cmVldC1hZGRyZXNzXCIgW2NsYXNzLmludmFsaWRdPVwiaW52YWxpZC5hZGRyZXNzMVwiIFtjbGFzcy5mb2N1c109XCJmb2N1c2VkLmFkZHJlc3MxXCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkLmFkZHJlc3MxXCI+XG4gICAgICAgICAgICA8aSAqbmdJZj1cImNvbmZpZy5hZGRyZXNzMS5yZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyZXF1aXJlZC1pbmRpY2F0b3IgYWRkcmVzczFcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYmhpLWNpcmNsZSc6ICF2YWxpZC5hZGRyZXNzMSwgJ2JoaS1jaGVjayc6IHZhbGlkLmFkZHJlc3MxfVwiPlxuICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgPGlucHV0IFtjbGFzcy5tYXhsZW5ndGgtZXJyb3JdPVwiaW52YWxpZE1heGxlbmd0aC5hZGRyZXNzMVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZGRyZXNzMVwiIG5hbWU9XCJhZGRyZXNzMVwiIFtwbGFjZWhvbGRlcl09XCJjb25maWcuYWRkcmVzczEubGFiZWxcIiBbbWF4bGVuZ3RoXT1cImNvbmZpZz8uYWRkcmVzczE/Lm1heGxlbmd0aFwiIGF1dG9jb21wbGV0ZT1cInNoaXBwaW5nIHN0cmVldC1hZGRyZXNzIGFkZHJlc3MtbGluZS0xXCIgWyhuZ01vZGVsKV09XCJtb2RlbC5hZGRyZXNzMVwiIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZUNvbnRyb2woKVwiIChmb2N1cyk9XCJpc0ZvY3VzZWQoJGV2ZW50LCAnYWRkcmVzczEnKVwiIChibHVyKT1cImlzQmx1cnJlZCgkZXZlbnQsICdhZGRyZXNzMScpXCIgKGlucHV0KT1cIm9uSW5wdXQoJGV2ZW50LCAnYWRkcmVzczEnKVwiLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb25maWc/LmFkZHJlc3MyPy5oaWRkZW5cIiBjbGFzcz1cImFwdCBzdWl0ZVwiIFtjbGFzcy5pbnZhbGlkXT1cImludmFsaWQuYWRkcmVzczJcIiBbY2xhc3MuZm9jdXNdPVwiZm9jdXNlZC5hZGRyZXNzMlwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZC5hZGRyZXNzMlwiPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJjb25maWcuYWRkcmVzczIucmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicmVxdWlyZWQtaW5kaWNhdG9yIGFkZHJlc3MyXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2JoaS1jaXJjbGUnOiAhdmFsaWQuYWRkcmVzczIsICdiaGktY2hlY2snOiB2YWxpZC5hZGRyZXNzMn1cIj5cbiAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIDxpbnB1dCBbY2xhc3MubWF4bGVuZ3RoLWVycm9yXT1cImludmFsaWRNYXhsZW5ndGguYWRkcmVzczJcIiB0eXBlPVwidGV4dFwiIGlkPVwiYWRkcmVzczJcIiBuYW1lPVwiYWRkcmVzczJcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLmFkZHJlc3MyLmxhYmVsXCIgW21heGxlbmd0aF09XCJjb25maWc/LmFkZHJlc3MyPy5tYXhsZW5ndGhcIiBhdXRvY29tcGxldGU9XCJzaGlwcGluZyBhZGRyZXNzLWxpbmUtMlwiIFsobmdNb2RlbCldPVwibW9kZWwuYWRkcmVzczJcIiAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVDb250cm9sKClcIiAoZm9jdXMpPVwiaXNGb2N1c2VkKCRldmVudCwgJ2FkZHJlc3MyJylcIiAoYmx1cik9XCJpc0JsdXJyZWQoJGV2ZW50LCAnYWRkcmVzczInKVwiIChpbnB1dCk9XCJvbklucHV0KCRldmVudCwgJ2FkZHJlc3MyJylcIi8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCIhY29uZmlnPy5jaXR5Py5oaWRkZW5cIiBjbGFzcz1cImNpdHkgbG9jYWxpdHlcIiBbY2xhc3MuaW52YWxpZF09XCJpbnZhbGlkLmNpdHlcIiBbY2xhc3MuZm9jdXNdPVwiZm9jdXNlZC5jaXR5XCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkLmNpdHlcIj5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiY29uZmlnLmNpdHkucmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicmVxdWlyZWQtaW5kaWNhdG9yXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2JoaS1jaXJjbGUnOiAhdmFsaWQuY2l0eSwgJ2JoaS1jaGVjayc6IHZhbGlkLmNpdHl9XCI+XG4gICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICA8aW5wdXQgW2NsYXNzLm1heGxlbmd0aC1lcnJvcl09XCJpbnZhbGlkTWF4bGVuZ3RoLmNpdHlcIiB0eXBlPVwidGV4dFwiIGlkPVwiY2l0eVwiIG5hbWU9XCJjaXR5XCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy5jaXR5LmxhYmVsXCIgYXV0b2NvbXBsZXRlPVwic2hpcHBpbmcgY2l0eSBsb2NhbGl0eVwiIFttYXhsZW5ndGhdPVwiY29uZmlnPy5jaXR5Py5tYXhsZW5ndGhcIiBbKG5nTW9kZWwpXT1cIm1vZGVsLmNpdHlcIiAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVDb250cm9sKClcIiAoZm9jdXMpPVwiaXNGb2N1c2VkKCRldmVudCwgJ2NpdHknKVwiIChibHVyKT1cImlzQmx1cnJlZCgkZXZlbnQsICdjaXR5JylcIiAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQsICdjaXR5JylcIi8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCIhY29uZmlnPy5zdGF0ZT8uaGlkZGVuXCIgY2xhc3M9XCJzdGF0ZSByZWdpb25cIiBbY2xhc3MuaW52YWxpZF09XCJpbnZhbGlkLnN0YXRlXCIgW2NsYXNzLmZvY3VzXT1cImZvY3VzZWQuc3RhdGVcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWQuc3RhdGVcIiAgW3Rvb2x0aXBdPVwidG9vbHRpcC5zdGF0ZVwiPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJjb25maWcuc3RhdGUucmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicmVxdWlyZWQtaW5kaWNhdG9yXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2JoaS1jaXJjbGUnOiAhdmFsaWQuc3RhdGUsICdiaGktY2hlY2snOiB2YWxpZC5zdGF0ZX1cIj5cbiAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIDxub3ZvLXBpY2tlciBbY29uZmlnXT1cImNvbmZpZz8uc3RhdGU/LnBpY2tlckNvbmZpZ1wiIFtwbGFjZWhvbGRlcl09XCJjb25maWc/LnN0YXRlPy5sYWJlbFwiIChjaGFuZ2VkKT1cIm9uU3RhdGVDaGFuZ2UoJGV2ZW50KVwiIGF1dG9jb21wbGV0ZT1cInNoaXBwaW5nIHJlZ2lvblwiIFsobmdNb2RlbCldPVwibW9kZWwuc3RhdGVcIiBbZGlzYWJsZVBpY2tlcklucHV0XT1cImRpc2FibGVkLnN0YXRlXCI+PC9ub3ZvLXBpY2tlcj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb25maWc/LnppcD8uaGlkZGVuXCIgY2xhc3M9XCJ6aXAgcG9zdGFsLWNvZGVcIiBbY2xhc3MuaW52YWxpZF09XCJpbnZhbGlkLnppcFwiIFtjbGFzcy5mb2N1c109XCJmb2N1c2VkLnppcFwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZC56aXBcIj5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiY29uZmlnLnppcC5yZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyZXF1aXJlZC1pbmRpY2F0b3JcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYmhpLWNpcmNsZSc6ICF2YWxpZC56aXAsICdiaGktY2hlY2snOiB2YWxpZC56aXB9XCI+XG4gICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICA8aW5wdXQgW2NsYXNzLm1heGxlbmd0aC1lcnJvcl09XCJpbnZhbGlkTWF4bGVuZ3RoLnppcFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ6aXBcIiBuYW1lPVwiemlwXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy56aXAubGFiZWxcIiBhdXRvY29tcGxldGU9XCJzaGlwcGluZyBwb3N0YWwtY29kZVwiIFttYXhsZW5ndGhdPVwiY29uZmlnPy56aXA/Lm1heGxlbmd0aFwiIFsobmdNb2RlbCldPVwibW9kZWwuemlwXCIgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlQ29udHJvbCgpXCIgKGZvY3VzKT1cImlzRm9jdXNlZCgkZXZlbnQsICd6aXAnKVwiIChibHVyKT1cImlzQmx1cnJlZCgkZXZlbnQsICd6aXAnKVwiIChpbnB1dCk9XCJvbklucHV0KCRldmVudCwgJ3ppcCcpXCIgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb25maWc/LmNvdW50cnlJRD8uaGlkZGVuXCIgY2xhc3M9XCJjb3VudHJ5LW5hbWVcIiBbY2xhc3MuaW52YWxpZF09XCJpbnZhbGlkLmNvdW50cnlJRFwiIFtjbGFzcy5mb2N1c109XCJmb2N1c2VkLmNvdW50cnlJRFwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZC5jb3VudHJ5SURcIj5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiY29uZmlnLmNvdW50cnlJRC5yZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyZXF1aXJlZC1pbmRpY2F0b3JcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYmhpLWNpcmNsZSc6ICF2YWxpZC5jb3VudHJ5SUQsICdiaGktY2hlY2snOiB2YWxpZC5jb3VudHJ5SUR9XCI+XG4gICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICA8bm92by1waWNrZXIgW2NvbmZpZ109XCJjb25maWc/LmNvdW50cnlJRD8ucGlja2VyQ29uZmlnXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy5jb3VudHJ5SUQubGFiZWxcIiAoY2hhbmdlZCk9XCJvbkNvdW50cnlDaGFuZ2UoJGV2ZW50KVwiIGF1dG9jb21wbGV0ZT1cInNoaXBwaW5nIGNvdW50cnlcIiBbKG5nTW9kZWwpXT1cIm1vZGVsLmNvdW50cnlOYW1lXCIgW2Rpc2FibGVQaWNrZXJJbnB1dF09XCJkaXNhYmxlZC5jb3VudHJ5SURcIj48L25vdm8tcGlja2VyPlxuICAgICAgICA8L3NwYW4+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0FkZHJlc3NFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGNvbmZpZzogTm92b0FkZHJlc3NDb25maWc7XG4gIHByaXZhdGUgX3JlYWRPbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCByZWFkT25seShyZWFkT25seTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlYWRPbmx5ID0gcmVhZE9ubHk7XG4gICAgdGhpcy5maWVsZExpc3QuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5kaXNhYmxlZFtmaWVsZF0gPSB0aGlzLl9yZWFkT25seTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5tb2RlbCkge1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZXMoKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHJlYWRPbmx5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZWFkT25seTtcbiAgfVxuICBzdGF0ZXM6IEFycmF5PGFueT4gPSBbXTtcbiAgY291bnRyaWVzOiBBcnJheTxhbnk+ID0gZ2V0Q291bnRyaWVzKCk7XG4gIGZpZWxkTGlzdDogQXJyYXk8c3RyaW5nPiA9IFsnYWRkcmVzczEnLCAnYWRkcmVzczInLCAnY2l0eScsICdzdGF0ZScsICd6aXAnLCAnY291bnRyeUlEJ107XG4gIG1vZGVsOiBhbnk7XG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBmb2N1c2VkOiBhbnkgPSB7fTtcbiAgaW52YWxpZDogYW55ID0ge307XG4gIGRpc2FibGVkOiBhbnkgPSB7fTtcbiAgaW52YWxpZE1heGxlbmd0aDogYW55ID0ge307XG4gIHZhbGlkOiBhbnkgPSB7fTtcbiAgc3RhdGVPcHRpb25zOiBhbnk7XG4gIHRvb2x0aXA6IGFueSA9IHt9O1xuICBpbml0Q29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpXG4gIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHZhbGlkaXR5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnID0ge307XG4gICAgfVxuICAgIGlmICh0aGlzLm1vZGVsKSB7XG4gICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5tb2RlbCk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLm1vZGVsKSB7XG4gICAgICB0aGlzLm1vZGVsID0ge307XG4gICAgfVxuICAgIHRoaXMuaW5pdENvbmZpZygpO1xuICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5jb3VudHJ5SUQpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRDb25maWcoKTogdm9pZCB7XG4gICAgdGhpcy5maWVsZExpc3QuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5oYXNPd25Qcm9wZXJ0eShmaWVsZCkpIHtcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdID0ge1xuICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5jb25maWdbZmllbGRdLmhhc093blByb3BlcnR5KCdsYWJlbCcpKSB7XG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5sYWJlbCA9IHRoaXMubGFiZWxzW2ZpZWxkXTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5yZXF1aXJlZCkge1xuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY29uZmlnW2ZpZWxkXS5yZWFkT25seSB8fCB0aGlzLmNvbmZpZy5yZWFkT25seSkge1xuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpc2FibGVkW2ZpZWxkXSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoZmllbGQgPT09ICdjb3VudHJ5SUQnKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWdbZmllbGRdLnBpY2tlckNvbmZpZykge1xuICAgICAgICAgIHRoaXMuY29uZmlnLmNvdW50cnlJRC5waWNrZXJDb25maWcgPSB0aGlzLmdldERlZmF1bHRDb3VudHJ5Q29uZmlnKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyA9IHRoaXMuY29uZmlnLmNvdW50cnlJRC5waWNrZXJDb25maWcub3B0aW9ucztcbiAgICAgIH1cbiAgICAgIGlmIChmaWVsZCA9PT0gJ3N0YXRlJykge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnW2ZpZWxkXS5waWNrZXJDb25maWcpIHtcbiAgICAgICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcgPSB0aGlzLmdldERlZmF1bHRTdGF0ZUNvbmZpZygpO1xuICAgICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgPSB0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnLm9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZU9wdGlvbnMgPSB0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnLm9wdGlvbnM7XG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5waWNrZXJDb25maWcub3B0aW9ucyA9IChxdWVyeSA9ICcnKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVPcHRpb25zKHF1ZXJ5LCB0aGlzLm1vZGVsLmNvdW50cnlJRCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgPSB0aGlzLnN0YXRlT3B0aW9ucztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzVmFsaWQoZmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCB2YWxpZDogYm9vbGVhbiA9IHRydWU7XG4gICAgaWYgKFxuICAgICAgKCh0aGlzLmNvbmZpZ1tmaWVsZF0ucmVxdWlyZWQgJiYgKEhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsW2ZpZWxkXSkgfHwgSGVscGVycy5pc0VtcHR5KHRoaXMubW9kZWxbZmllbGRdKSkpIHx8XG4gICAgICAgICF0aGlzLmNvbmZpZ1tmaWVsZF0ucmVxdWlyZWQpICYmXG4gICAgICAhKGZpZWxkID09PSAnY291bnRyeUlEJyAmJiB0aGlzLmNvbmZpZ1tmaWVsZF0ucmVxdWlyZWQgJiYgIUhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsLmNvdW50cnlJRCkpICYmXG4gICAgICAhKFxuICAgICAgICBmaWVsZCA9PT0gJ3N0YXRlJyAmJlxuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucmVxdWlyZWQgJiZcbiAgICAgICAgKCFIZWxwZXJzLmlzRW1wdHkodGhpcy5tb2RlbC5zdGF0ZSkgfHxcbiAgICAgICAgICAoKEhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsLnN0YXRlKSB8fCBIZWxwZXJzLmlzRW1wdHkodGhpcy5tb2RlbC5zdGF0ZSkpICYmXG4gICAgICAgICAgICAhSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuY291bnRyeU5hbWUpICYmXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcgJiZcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyAmJlxuICAgICAgICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zLmxlbmd0aCA9PT0gMCkpXG4gICAgICApXG4gICAgKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAhSGVscGVycy5pc0VtcHR5KHRoaXMubW9kZWxbZmllbGRdKSAmJlxuICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLmNvbmZpZ1tmaWVsZF0ubWF4bGVuZ3RoKSAmJlxuICAgICAgdGhpcy5jb25maWdbZmllbGRdLm1heGxlbmd0aCA8IHRoaXMubW9kZWxbZmllbGRdLmxlbmd0aFxuICAgICkge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy52YWxpZFtmaWVsZF0gPSB2YWxpZDtcbiAgfVxuXG4gIGlzSW52YWxpZChmaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IGludmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsZXQgaW52YWxpZE1heGxlbmd0aDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlmIChcbiAgICAgIChmaWVsZCAhPT0gJ2NvdW50cnlJRCcgJiZcbiAgICAgICAgZmllbGQgIT09ICdzdGF0ZScgJiZcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkICYmXG4gICAgICAgIEhlbHBlcnMuaXNFbXB0eSh0aGlzLm1vZGVsW2ZpZWxkXSkgJiZcbiAgICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsW2ZpZWxkXSkpIHx8XG4gICAgICAoZmllbGQgPT09ICdjb3VudHJ5SUQnICYmIHRoaXMuY29uZmlnW2ZpZWxkXS5yZXF1aXJlZCAmJiBIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5jb3VudHJ5TmFtZSkgJiYgdGhpcy5jb25maWdbZmllbGRdLnVwZGF0ZWQpIHx8XG4gICAgICAoZmllbGQgPT09ICdzdGF0ZScgJiZcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkICYmXG4gICAgICAgIChIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5zdGF0ZSkgfHwgSGVscGVycy5pc0VtcHR5KHRoaXMubW9kZWwuc3RhdGUpKSAmJlxuICAgICAgICAhSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuY291bnRyeUlEKSAmJlxuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0udXBkYXRlZCAmJlxuICAgICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcgJiZcbiAgICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zICYmXG4gICAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucy5sZW5ndGggPiAwKVxuICAgICkge1xuICAgICAgaW52YWxpZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICFIZWxwZXJzLmlzRW1wdHkodGhpcy5tb2RlbFtmaWVsZF0pICYmXG4gICAgICAhSGVscGVycy5pc0JsYW5rKHRoaXMuY29uZmlnW2ZpZWxkXS5tYXhsZW5ndGgpICYmXG4gICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ubWF4bGVuZ3RoIDwgdGhpcy5tb2RlbFtmaWVsZF0ubGVuZ3RoXG4gICAgKSB7XG4gICAgICBpbnZhbGlkID0gdHJ1ZTtcbiAgICAgIGludmFsaWRNYXhsZW5ndGggPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmludmFsaWRbZmllbGRdID0gaW52YWxpZDtcbiAgICB0aGlzLmludmFsaWRNYXhsZW5ndGhbZmllbGRdID0gaW52YWxpZE1heGxlbmd0aDtcbiAgfVxuXG4gIG9uSW5wdXQoZXZlbnQ6IEV2ZW50LCBmaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5pc0ludmFsaWQoZmllbGQpO1xuICAgIHRoaXMuaXNWYWxpZChmaWVsZCk7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHsgdmFsdWU6IHRoaXMubW9kZWxbZmllbGRdLCBmaWVsZDogZmllbGQgfSk7XG4gICAgfVxuICB9XG5cbiAgaXNGb2N1c2VkKGV2ZW50OiBFdmVudCwgZmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZFtmaWVsZF0gPSB0cnVlO1xuICAgIHRoaXMuZm9jdXMuZW1pdCh7IGV2ZW50LCBmaWVsZCB9KTtcbiAgfVxuXG4gIGlzQmx1cnJlZChldmVudDogRXZlbnQsIGZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzZWRbZmllbGRdID0gZmFsc2U7XG4gICAgdGhpcy5ibHVyLmVtaXQoeyBldmVudCwgZmllbGQgfSk7XG4gIH1cblxuICBvbkNvdW50cnlDaGFuZ2UoZXZ0KSB7XG4gICAgbGV0IGNvdW50cnk6IGFueSA9IGV2dCAmJiBldnQucmF3VmFsdWUgPyBldnQucmF3VmFsdWUgOiBudWxsO1xuICAgIGxldCBmaWVsZDogYW55O1xuICAgIGxldCBzdGF0ZXNVcGRhdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB0aGlzLmNvbmZpZy5jb3VudHJ5SUQudXBkYXRlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMuY29uZmlnLmNvdW50cnlJRC5waWNrZXJDb25maWcpIHtcbiAgICAgIGZpZWxkID0gdGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZy5maWVsZDtcbiAgICB9XG4gICAgaWYgKGNvdW50cnkgJiYgZmllbGQgJiYgIUhlbHBlcnMuaXNCbGFuayhjb3VudHJ5W2ZpZWxkXSkgJiYgdGhpcy5tb2RlbC5jb3VudHJ5SUQgIT09IGNvdW50cnlbZmllbGRdKSB7XG4gICAgICB0aGlzLm1vZGVsLmNvdW50cnlJRCA9IGNvdW50cnlbZmllbGRdO1xuICAgICAgdGhpcy5tb2RlbC5jb3VudHJ5TmFtZSA9IEhlbHBlcnMuaW50ZXJwb2xhdGUodGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZy5mb3JtYXQsIGNvdW50cnkpO1xuICAgICAgdGhpcy5kaXNhYmxlZC5zdGF0ZSA9IGZhbHNlO1xuICAgICAgdGhpcy50b29sdGlwLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgc3RhdGVzVXBkYXRhYmxlID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKEhlbHBlcnMuaXNCbGFuayhjb3VudHJ5KSB8fCBIZWxwZXJzLmlzQmxhbmsoY291bnRyeVtmaWVsZF0pKSB7XG4gICAgICB0aGlzLm1vZGVsLmNvdW50cnlJRCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMubW9kZWwuY291bnRyeU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRpc2FibGVkLnN0YXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMudG9vbHRpcC5zdGF0ZSA9IHRoaXMubGFiZWxzLnNlbGVjdENvdW50cnlGaXJzdDtcbiAgICAgIHRoaXMuaW52YWxpZC5zdGF0ZSA9IGZhbHNlO1xuICAgICAgc3RhdGVzVXBkYXRhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgc3RhdGVcbiAgICBpZiAoc3RhdGVzVXBkYXRhYmxlKSB7XG4gICAgICB0aGlzLm1vZGVsLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZXMoKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgdGhpcy5vbklucHV0KG51bGwsICdjb3VudHJ5SUQnKTtcbiAgICB0aGlzLm9uSW5wdXQobnVsbCwgJ3N0YXRlJyk7XG4gIH1cblxuICBvblN0YXRlQ2hhbmdlKGV2dCkge1xuICAgIGxldCBzdGF0ZTogYW55ID0gZXZ0ICYmIGV2dC52YWx1ZSA/IGV2dC52YWx1ZSA6IG51bGw7XG4gICAgdGhpcy5jb25maWcuc3RhdGUudXBkYXRlZCA9IHRydWU7XG4gICAgdGhpcy5tb2RlbC5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgIHRoaXMub25JbnB1dChudWxsLCAnc3RhdGUnKTtcbiAgfVxuXG4gIHNldFN0YXRlTGFiZWwobW9kZWw6IGFueSkge1xuICAgIGxldCBzdGF0ZTogc3RyaW5nID0gbW9kZWwuc3RhdGU7XG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsoc3RhdGUpKSB7XG4gICAgICBpZiAodGhpcy5jb25maWcuc3RhdGUucmVxdWlyZWQpIHtcbiAgICAgICAgdGhpcy52YWxpZC5zdGF0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLm1vZGVsLnN0YXRlID0gc3RhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9kZWwuc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICBpZiAodGhpcy5jb25maWcuc3RhdGUucmVxdWlyZWQpIHtcbiAgICAgICAgdGhpcy52YWxpZC5zdGF0ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVN0YXRlcygpIHtcbiAgICBpZiAodGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLm9wdGlvbnMgJiYgIUhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsLmNvdW50cnlJRCkpIHtcbiAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5vcHRpb25zID0gKHF1ZXJ5ID0gJycpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVPcHRpb25zKHF1ZXJ5LCB0aGlzLm1vZGVsLmNvdW50cnlJRCk7XG4gICAgICB9O1xuICAgICAgdGhpcy5zdGF0ZU9wdGlvbnMoJycsIHRoaXMubW9kZWwuY291bnRyeUlEKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyA9IHJlc3VsdHM7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMudG9vbHRpcC5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB0aGlzLmRpc2FibGVkLnN0YXRlID0gdGhpcy5fcmVhZE9ubHk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZUxhYmVsKHRoaXMubW9kZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZWQuc3RhdGUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMudG9vbHRpcC5zdGF0ZSA9IHRoaXMubGFiZWxzLm5vU3RhdGVzRm9yQ291bnRyeTtcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcuc3RhdGUucmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWQuc3RhdGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbGlkaXR5Q2hhbmdlLmVtaXQoKTtcbiAgICAgICAgdGhpcy5vbklucHV0KG51bGwsICdzdGF0ZScpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5kaXNhYmxlZC5zdGF0ZSA9IHRydWU7XG4gICAgICB0aGlzLnRvb2x0aXAuc3RhdGUgPSB0aGlzLmxhYmVscy5zZWxlY3RDb3VudHJ5Rmlyc3Q7XG4gICAgICBpZiAodGhpcy5jb25maWcuc3RhdGUucmVxdWlyZWQpIHtcbiAgICAgICAgdGhpcy52YWxpZC5zdGF0ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFN0YXRlT3B0aW9ucyhmaWx0ZXI6IHN0cmluZyA9ICcnLCBjb3VudHJ5SUQ6IG51bWJlcik6IGFueVtdIHtcbiAgICBpZiAoY291bnRyeUlEKSB7XG4gICAgICBjb25zdCBjb3VudHJ5OiBhbnkgPSBmaW5kQnlDb3VudHJ5SWQoY291bnRyeUlEKTtcbiAgICAgIGNvbnN0IHN0YXRlczogYW55W10gPSBnZXRTdGF0ZXMoY291bnRyeS5uYW1lKTtcbiAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlcy5maWx0ZXIoKG5hbWUpID0+IG5ldyBSZWdFeHAoYCR7ZmlsdGVyfWAsICdnaScpLnRlc3QobmFtZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNvbnRyb2woKSB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMubW9kZWwpO1xuICAgIHRoaXMub25JbnB1dChudWxsLCAnY291bnRyeUlEJyk7XG4gICAgdGhpcy5vbklucHV0KG51bGwsICdzdGF0ZScpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgbGV0IGxvYWRpbmdDb3VudHJpZXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpZiAobW9kZWwpIHtcbiAgICAgIGxldCBjb3VudHJ5TmFtZTtcbiAgICAgIGlmIChtb2RlbC5jb3VudHJ5TmFtZSAmJiBtb2RlbC5jb3VudHJ5SUQpIHtcbiAgICAgICAgY291bnRyeU5hbWUgPSBtb2RlbC5jb3VudHJ5TmFtZTtcbiAgICAgIH0gZWxzZSBpZiAobW9kZWwuY291bnRyeUlEKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnICYmIHRoaXMuY29uZmlnLmNvdW50cnlJRC5waWNrZXJDb25maWcuZ2V0TGFiZWxzKSB7XG4gICAgICAgICAgaWYgKEhlbHBlcnMuaXNGdW5jdGlvbih0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnLmdldExhYmVscykpIHtcbiAgICAgICAgICAgIGxldCBwcm9taXNlOiBhbnkgPSB0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnLmdldExhYmVscyhtb2RlbC5jb3VudHJ5SUQpO1xuICAgICAgICAgICAgbG9hZGluZ0NvdW50cmllcyA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS50aGVuKSB7XG4gICAgICAgICAgICAgIHByb21pc2UudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nQ291bnRyaWVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY291bnRyeU5hbWUgPSBIZWxwZXJzLmludGVycG9sYXRlV2l0aEZhbGxiYWNrKHRoaXMuY29uZmlnLmNvdW50cnlJRC5waWNrZXJDb25maWcuZm9ybWF0LCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwgPSBPYmplY3QuYXNzaWduKG1vZGVsLCB7IGNvdW50cnlOYW1lIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGVzKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNvdW50cnlOYW1lKSB7XG4gICAgICAgIGNvdW50cnlOYW1lID0gY291bnRyeU5hbWUudHJpbSgpO1xuICAgICAgICBtb2RlbC5zdGF0ZSA9IG1vZGVsLnN0YXRlIHx8ICcnO1xuICAgICAgICB0aGlzLm1vZGVsID0gT2JqZWN0LmFzc2lnbihtb2RlbCwgeyBjb3VudHJ5TmFtZTogY291bnRyeU5hbWUgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgICB9XG4gICAgICBpZiAoIWxvYWRpbmdDb3VudHJpZXMgJiYgIUhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsLmNvdW50cnlJRCkpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5maWVsZExpc3QuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5vbklucHV0KG51bGwsIGZpZWxkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cblxuICBwcml2YXRlIGdldERlZmF1bHRTdGF0ZUNvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZDogJ3ZhbHVlJyxcbiAgICAgIGZvcm1hdDogJyRsYWJlbCcsXG4gICAgICBvcHRpb25zOiAocXVlcnkgPSAnJywgY291bnRyeUlEKSA9PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5nZXRTdGF0ZU9wdGlvbnMocXVlcnksIGNvdW50cnlJRCkpO1xuICAgICAgfSxcbiAgICAgIGdldExhYmVsczogKHN0YXRlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzdGF0ZSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldERlZmF1bHRDb3VudHJ5Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkOiAndmFsdWUnLFxuICAgICAgZm9ybWF0OiAnJGxhYmVsJyxcbiAgICAgIG9wdGlvbnM6IChxdWVyeTogc3RyaW5nID0gJycpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBhbnkpID0+IHtcbiAgICAgICAgICBsZXQgY291bnRyaWVzOiBhbnkgPSBnZXRDb3VudHJpZXMoKTtcbiAgICAgICAgICBpZiAocXVlcnkpIHtcbiAgICAgICAgICAgIGNvdW50cmllcyA9IGNvdW50cmllcy5maWx0ZXIoKGNvdW50cnkpID0+IG5ldyBSZWdFeHAoYCR7cXVlcnl9YCwgJ2dpJykudGVzdChjb3VudHJ5Lm5hbWUpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoY291bnRyaWVzKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZ2V0TGFiZWxzOiAoY291bnRyeUlEKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogYW55KSA9PiB7XG4gICAgICAgICAgbGV0IGNvdW50cnk6IGFueSA9IGZpbmRCeUNvdW50cnlJZChjb3VudHJ5SUQpO1xuICAgICAgICAgIGlmIChjb3VudHJ5KSB7XG4gICAgICAgICAgICByZXNvbHZlKGNvdW50cnkubmFtZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==