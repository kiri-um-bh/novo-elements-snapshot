/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                _this.disabled[field] = _this.readOnly;
            });
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
     * @return {?}
     */
    NovoAddressElement.prototype.getDefaultStateConfig = /**
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
     * @return {?}
     */
    NovoAddressElement.prototype.getDefaultCountryConfig = /**
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
                    template: "\n        <span *ngIf=\"!config?.address1?.hidden\" class=\"street-address\" [class.invalid]=\"invalid.address1\" [class.focus]=\"focused.address1\" [class.disabled]=\"disabled.address1\">\n            <i *ngIf=\"config.address1.required\"\n                class=\"required-indicator address1\"\n                [ngClass]=\"{'bhi-circle': !valid.address1, 'bhi-check': valid.address1}\">\n            </i>\n            <input [class.maxlength-error]=\"invalidMaxlength.address1\" type=\"text\" id=\"address1\" name=\"address1\" [placeholder]=\"config.address1.label\" [maxlength]=\"config?.address1?.maxlength\" autocomplete=\"shipping street-address address-line-1\" [(ngModel)]=\"model.address1\" (ngModelChange)=\"updateControl()\" (focus)=\"isFocused($event, 'address1')\" (blur)=\"isBlurred($event, 'address1')\" (input)=\"onInput($event, 'address1')\"/>\n        </span>\n        <span *ngIf=\"!config?.address2?.hidden\" class=\"apt suite\" [class.invalid]=\"invalid.address2\" [class.focus]=\"focused.address2\" [class.disabled]=\"disabled.address2\">\n            <i *ngIf=\"config.address2.required\"\n                class=\"required-indicator address2\"\n                [ngClass]=\"{'bhi-circle': !valid.address2, 'bhi-check': valid.address2}\">\n            </i>\n            <input [class.maxlength-error]=\"invalidMaxlength.address2\" type=\"text\" id=\"address2\" name=\"address2\" [placeholder]=\"config.address2.label\" [maxlength]=\"config?.address2?.maxlength\" autocomplete=\"shipping address-line-2\" [(ngModel)]=\"model.address2\" (ngModelChange)=\"updateControl()\" (focus)=\"isFocused($event, 'address2')\" (blur)=\"isBlurred($event, 'address2')\" (input)=\"onInput($event, 'address2')\"/>\n        </span>\n        <span *ngIf=\"!config?.city?.hidden\" class=\"city locality\" [class.invalid]=\"invalid.city\" [class.focus]=\"focused.city\" [class.disabled]=\"disabled.city\">\n            <i *ngIf=\"config.city.required\"\n                class=\"required-indicator\"\n                [ngClass]=\"{'bhi-circle': !valid.city, 'bhi-check': valid.city}\">\n            </i>\n            <input [class.maxlength-error]=\"invalidMaxlength.city\" type=\"text\" id=\"city\" name=\"city\" [placeholder]=\"config.city.label\" autocomplete=\"shipping city locality\" [maxlength]=\"config?.city?.maxlength\" [(ngModel)]=\"model.city\" (ngModelChange)=\"updateControl()\" (focus)=\"isFocused($event, 'city')\" (blur)=\"isBlurred($event, 'city')\" (input)=\"onInput($event, 'city')\"/>\n        </span>\n        <span *ngIf=\"!config?.state?.hidden\" class=\"state region\" [class.invalid]=\"invalid.state\" [class.focus]=\"focused.state\" [class.disabled]=\"disabled.state\"  [tooltip]=\"tooltip.state\">\n            <i *ngIf=\"config.state.required\"\n                class=\"required-indicator\"\n                [ngClass]=\"{'bhi-circle': !valid.state, 'bhi-check': valid.state}\">\n            </i>\n            <novo-picker [config]=\"config?.state?.pickerConfig\" [placeholder]=\"config?.state?.label\" (changed)=\"onStateChange($event)\" autocomplete=\"shipping region\" [(ngModel)]=\"model.state\" [disablePickerInput]=\"disabled.state || !valid.countryID\"></novo-picker>\n        </span>\n        <span *ngIf=\"!config?.zip?.hidden\" class=\"zip postal-code\" [class.invalid]=\"invalid.zip\" [class.focus]=\"focused.zip\" [class.disabled]=\"disabled.zip\">\n            <i *ngIf=\"config.zip.required\"\n                class=\"required-indicator\"\n                [ngClass]=\"{'bhi-circle': !valid.zip, 'bhi-check': valid.zip}\">\n            </i>\n            <input [class.maxlength-error]=\"invalidMaxlength.zip\" type=\"text\" id=\"zip\" name=\"zip\" [placeholder]=\"config.zip.label\" autocomplete=\"shipping postal-code\" [maxlength]=\"config?.zip?.maxlength\" [(ngModel)]=\"model.zip\" (ngModelChange)=\"updateControl()\" (focus)=\"isFocused($event, 'zip')\" (blur)=\"isBlurred($event, 'zip')\" (input)=\"onInput($event, 'zip')\" />\n        </span>\n        <span *ngIf=\"!config?.countryID?.hidden\" class=\"country-name\" [class.invalid]=\"invalid.countryID\" [class.focus]=\"focused.countryID\" [class.disabled]=\"disabled.countryID\">\n            <i *ngIf=\"config.countryID.required\"\n                class=\"required-indicator\"\n                [ngClass]=\"{'bhi-circle': !valid.countryID, 'bhi-check': valid.countryID}\">\n            </i>\n            <novo-picker [config]=\"config?.countryID?.pickerConfig\" [placeholder]=\"config.countryID.label\" (changed)=\"onCountryChange($event)\" autocomplete=\"shipping country\" [(ngModel)]=\"model.countryName\" [disablePickerInput]=\"disabled.countryID\"></novo-picker>\n        </span>\n    "
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
    /** @type {?} */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2V4dHJhcy9hZGRyZXNzL0FkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQW1DLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztJQUc5QyxzQkFBc0IsR0FBRztJQUM3QixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixDQUFDO0lBQ2pELEtBQUssRUFBRSxJQUFJO0NBQ1o7Ozs7QUFFRCwrQ0FRQzs7O0lBUEMsMENBQWM7O0lBQ2QsNkNBQWtCOztJQUNsQiw4Q0FBa0I7O0lBQ2xCLGlEQUFtQjs7SUFDbkIsMkNBQWdCOztJQUNoQiw0Q0FBa0I7O0lBQ2xCLDZDQUFtQjs7Ozs7QUFHckIsdUNBU0M7OztJQVJDLHFDQUFtQjs7SUFDbkIscUNBQW1COztJQUNuQixxQ0FBcUM7O0lBQ3JDLHFDQUFxQzs7SUFDckMsaUNBQWlDOztJQUNqQyxrQ0FBa0M7O0lBQ2xDLGdDQUFnQzs7SUFDaEMsc0NBQXNDOztBQUd4QztJQXFGRSw0QkFBbUIsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFsQ25DLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFXbkMsV0FBTSxHQUFlLEVBQUUsQ0FB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QiwwQ0FBOEI7O0lBQzlCLG9DQUMrQzs7SUFDL0MsbUNBQzhDOztJQUM5QyxrQ0FDNkM7O0lBQzdDLDRDQUN1RDs7SUFFM0Msb0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBnZXRDb3VudHJpZXMsIGdldFN0YXRlcywgZmluZEJ5Q291bnRyeUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY291bnRyaWVzL0NvdW50cmllcyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBBRERSRVNTX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0FkZHJlc3NFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9BZGRyZXNzU3ViZmllbGRDb25maWcge1xuICBsYWJlbDogc3RyaW5nO1xuICByZXF1aXJlZDogYm9vbGVhbjtcbiAgbWF4bGVuZ3RoOiBudW1iZXI7XG4gIHBpY2tlckNvbmZpZz86IGFueTtcbiAgaGlkZGVuOiBib29sZWFuO1xuICB1cGRhdGVkPzogYm9vbGVhbjtcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9BZGRyZXNzQ29uZmlnIHtcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICByZWFkT25seT86IGJvb2xlYW47XG4gIGFkZHJlc3MxPzogTm92b0FkZHJlc3NTdWJmaWVsZENvbmZpZztcbiAgYWRkcmVzczI/OiBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnO1xuICBjaXR5PzogTm92b0FkZHJlc3NTdWJmaWVsZENvbmZpZztcbiAgc3RhdGU/OiBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnO1xuICB6aXA/OiBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnO1xuICBjb3VudHJ5SUQ/OiBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFkZHJlc3MnLFxuICBwcm92aWRlcnM6IFtBRERSRVNTX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNwYW4gKm5nSWY9XCIhY29uZmlnPy5hZGRyZXNzMT8uaGlkZGVuXCIgY2xhc3M9XCJzdHJlZXQtYWRkcmVzc1wiIFtjbGFzcy5pbnZhbGlkXT1cImludmFsaWQuYWRkcmVzczFcIiBbY2xhc3MuZm9jdXNdPVwiZm9jdXNlZC5hZGRyZXNzMVwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZC5hZGRyZXNzMVwiPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJjb25maWcuYWRkcmVzczEucmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicmVxdWlyZWQtaW5kaWNhdG9yIGFkZHJlc3MxXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2JoaS1jaXJjbGUnOiAhdmFsaWQuYWRkcmVzczEsICdiaGktY2hlY2snOiB2YWxpZC5hZGRyZXNzMX1cIj5cbiAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIDxpbnB1dCBbY2xhc3MubWF4bGVuZ3RoLWVycm9yXT1cImludmFsaWRNYXhsZW5ndGguYWRkcmVzczFcIiB0eXBlPVwidGV4dFwiIGlkPVwiYWRkcmVzczFcIiBuYW1lPVwiYWRkcmVzczFcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLmFkZHJlc3MxLmxhYmVsXCIgW21heGxlbmd0aF09XCJjb25maWc/LmFkZHJlc3MxPy5tYXhsZW5ndGhcIiBhdXRvY29tcGxldGU9XCJzaGlwcGluZyBzdHJlZXQtYWRkcmVzcyBhZGRyZXNzLWxpbmUtMVwiIFsobmdNb2RlbCldPVwibW9kZWwuYWRkcmVzczFcIiAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVDb250cm9sKClcIiAoZm9jdXMpPVwiaXNGb2N1c2VkKCRldmVudCwgJ2FkZHJlc3MxJylcIiAoYmx1cik9XCJpc0JsdXJyZWQoJGV2ZW50LCAnYWRkcmVzczEnKVwiIChpbnB1dCk9XCJvbklucHV0KCRldmVudCwgJ2FkZHJlc3MxJylcIi8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCIhY29uZmlnPy5hZGRyZXNzMj8uaGlkZGVuXCIgY2xhc3M9XCJhcHQgc3VpdGVcIiBbY2xhc3MuaW52YWxpZF09XCJpbnZhbGlkLmFkZHJlc3MyXCIgW2NsYXNzLmZvY3VzXT1cImZvY3VzZWQuYWRkcmVzczJcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWQuYWRkcmVzczJcIj5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiY29uZmlnLmFkZHJlc3MyLnJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkLWluZGljYXRvciBhZGRyZXNzMlwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydiaGktY2lyY2xlJzogIXZhbGlkLmFkZHJlc3MyLCAnYmhpLWNoZWNrJzogdmFsaWQuYWRkcmVzczJ9XCI+XG4gICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICA8aW5wdXQgW2NsYXNzLm1heGxlbmd0aC1lcnJvcl09XCJpbnZhbGlkTWF4bGVuZ3RoLmFkZHJlc3MyXCIgdHlwZT1cInRleHRcIiBpZD1cImFkZHJlc3MyXCIgbmFtZT1cImFkZHJlc3MyXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy5hZGRyZXNzMi5sYWJlbFwiIFttYXhsZW5ndGhdPVwiY29uZmlnPy5hZGRyZXNzMj8ubWF4bGVuZ3RoXCIgYXV0b2NvbXBsZXRlPVwic2hpcHBpbmcgYWRkcmVzcy1saW5lLTJcIiBbKG5nTW9kZWwpXT1cIm1vZGVsLmFkZHJlc3MyXCIgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlQ29udHJvbCgpXCIgKGZvY3VzKT1cImlzRm9jdXNlZCgkZXZlbnQsICdhZGRyZXNzMicpXCIgKGJsdXIpPVwiaXNCbHVycmVkKCRldmVudCwgJ2FkZHJlc3MyJylcIiAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQsICdhZGRyZXNzMicpXCIvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbmZpZz8uY2l0eT8uaGlkZGVuXCIgY2xhc3M9XCJjaXR5IGxvY2FsaXR5XCIgW2NsYXNzLmludmFsaWRdPVwiaW52YWxpZC5jaXR5XCIgW2NsYXNzLmZvY3VzXT1cImZvY3VzZWQuY2l0eVwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZC5jaXR5XCI+XG4gICAgICAgICAgICA8aSAqbmdJZj1cImNvbmZpZy5jaXR5LnJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkLWluZGljYXRvclwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydiaGktY2lyY2xlJzogIXZhbGlkLmNpdHksICdiaGktY2hlY2snOiB2YWxpZC5jaXR5fVwiPlxuICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgPGlucHV0IFtjbGFzcy5tYXhsZW5ndGgtZXJyb3JdPVwiaW52YWxpZE1heGxlbmd0aC5jaXR5XCIgdHlwZT1cInRleHRcIiBpZD1cImNpdHlcIiBuYW1lPVwiY2l0eVwiIFtwbGFjZWhvbGRlcl09XCJjb25maWcuY2l0eS5sYWJlbFwiIGF1dG9jb21wbGV0ZT1cInNoaXBwaW5nIGNpdHkgbG9jYWxpdHlcIiBbbWF4bGVuZ3RoXT1cImNvbmZpZz8uY2l0eT8ubWF4bGVuZ3RoXCIgWyhuZ01vZGVsKV09XCJtb2RlbC5jaXR5XCIgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlQ29udHJvbCgpXCIgKGZvY3VzKT1cImlzRm9jdXNlZCgkZXZlbnQsICdjaXR5JylcIiAoYmx1cik9XCJpc0JsdXJyZWQoJGV2ZW50LCAnY2l0eScpXCIgKGlucHV0KT1cIm9uSW5wdXQoJGV2ZW50LCAnY2l0eScpXCIvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbmZpZz8uc3RhdGU/LmhpZGRlblwiIGNsYXNzPVwic3RhdGUgcmVnaW9uXCIgW2NsYXNzLmludmFsaWRdPVwiaW52YWxpZC5zdGF0ZVwiIFtjbGFzcy5mb2N1c109XCJmb2N1c2VkLnN0YXRlXCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkLnN0YXRlXCIgIFt0b29sdGlwXT1cInRvb2x0aXAuc3RhdGVcIj5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiY29uZmlnLnN0YXRlLnJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkLWluZGljYXRvclwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydiaGktY2lyY2xlJzogIXZhbGlkLnN0YXRlLCAnYmhpLWNoZWNrJzogdmFsaWQuc3RhdGV9XCI+XG4gICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICA8bm92by1waWNrZXIgW2NvbmZpZ109XCJjb25maWc/LnN0YXRlPy5waWNrZXJDb25maWdcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnPy5zdGF0ZT8ubGFiZWxcIiAoY2hhbmdlZCk9XCJvblN0YXRlQ2hhbmdlKCRldmVudClcIiBhdXRvY29tcGxldGU9XCJzaGlwcGluZyByZWdpb25cIiBbKG5nTW9kZWwpXT1cIm1vZGVsLnN0YXRlXCIgW2Rpc2FibGVQaWNrZXJJbnB1dF09XCJkaXNhYmxlZC5zdGF0ZSB8fCAhdmFsaWQuY291bnRyeUlEXCI+PC9ub3ZvLXBpY2tlcj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb25maWc/LnppcD8uaGlkZGVuXCIgY2xhc3M9XCJ6aXAgcG9zdGFsLWNvZGVcIiBbY2xhc3MuaW52YWxpZF09XCJpbnZhbGlkLnppcFwiIFtjbGFzcy5mb2N1c109XCJmb2N1c2VkLnppcFwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZC56aXBcIj5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiY29uZmlnLnppcC5yZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyZXF1aXJlZC1pbmRpY2F0b3JcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYmhpLWNpcmNsZSc6ICF2YWxpZC56aXAsICdiaGktY2hlY2snOiB2YWxpZC56aXB9XCI+XG4gICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICA8aW5wdXQgW2NsYXNzLm1heGxlbmd0aC1lcnJvcl09XCJpbnZhbGlkTWF4bGVuZ3RoLnppcFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ6aXBcIiBuYW1lPVwiemlwXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy56aXAubGFiZWxcIiBhdXRvY29tcGxldGU9XCJzaGlwcGluZyBwb3N0YWwtY29kZVwiIFttYXhsZW5ndGhdPVwiY29uZmlnPy56aXA/Lm1heGxlbmd0aFwiIFsobmdNb2RlbCldPVwibW9kZWwuemlwXCIgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlQ29udHJvbCgpXCIgKGZvY3VzKT1cImlzRm9jdXNlZCgkZXZlbnQsICd6aXAnKVwiIChibHVyKT1cImlzQmx1cnJlZCgkZXZlbnQsICd6aXAnKVwiIChpbnB1dCk9XCJvbklucHV0KCRldmVudCwgJ3ppcCcpXCIgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIiFjb25maWc/LmNvdW50cnlJRD8uaGlkZGVuXCIgY2xhc3M9XCJjb3VudHJ5LW5hbWVcIiBbY2xhc3MuaW52YWxpZF09XCJpbnZhbGlkLmNvdW50cnlJRFwiIFtjbGFzcy5mb2N1c109XCJmb2N1c2VkLmNvdW50cnlJRFwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZC5jb3VudHJ5SURcIj5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiY29uZmlnLmNvdW50cnlJRC5yZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyZXF1aXJlZC1pbmRpY2F0b3JcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYmhpLWNpcmNsZSc6ICF2YWxpZC5jb3VudHJ5SUQsICdiaGktY2hlY2snOiB2YWxpZC5jb3VudHJ5SUR9XCI+XG4gICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICA8bm92by1waWNrZXIgW2NvbmZpZ109XCJjb25maWc/LmNvdW50cnlJRD8ucGlja2VyQ29uZmlnXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy5jb3VudHJ5SUQubGFiZWxcIiAoY2hhbmdlZCk9XCJvbkNvdW50cnlDaGFuZ2UoJGV2ZW50KVwiIGF1dG9jb21wbGV0ZT1cInNoaXBwaW5nIGNvdW50cnlcIiBbKG5nTW9kZWwpXT1cIm1vZGVsLmNvdW50cnlOYW1lXCIgW2Rpc2FibGVQaWNrZXJJbnB1dF09XCJkaXNhYmxlZC5jb3VudHJ5SURcIj48L25vdm8tcGlja2VyPlxuICAgICAgICA8L3NwYW4+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0FkZHJlc3NFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGNvbmZpZzogTm92b0FkZHJlc3NDb25maWc7XG4gIHByaXZhdGUgX3JlYWRPbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCByZWFkT25seShyZWFkT25seTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlYWRPbmx5ID0gcmVhZE9ubHk7XG4gICAgdGhpcy5maWVsZExpc3QuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5kaXNhYmxlZFtmaWVsZF0gPSB0aGlzLnJlYWRPbmx5O1xuICAgIH0pO1xuICB9XG4gIGdldCByZWFkT25seSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVhZE9ubHk7XG4gIH1cbiAgc3RhdGVzOiBBcnJheTxhbnk+ID0gW107XG4gIGNvdW50cmllczogQXJyYXk8YW55PiA9IGdldENvdW50cmllcygpO1xuICBmaWVsZExpc3Q6IEFycmF5PHN0cmluZz4gPSBbJ2FkZHJlc3MxJywgJ2FkZHJlc3MyJywgJ2NpdHknLCAnc3RhdGUnLCAnemlwJywgJ2NvdW50cnlJRCddO1xuICBtb2RlbDogYW55O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgZm9jdXNlZDogYW55ID0ge307XG4gIGludmFsaWQ6IGFueSA9IHt9O1xuICBkaXNhYmxlZDogYW55ID0ge307XG4gIGludmFsaWRNYXhsZW5ndGg6IGFueSA9IHt9O1xuICB2YWxpZDogYW55ID0ge307XG4gIHN0YXRlT3B0aW9uczogYW55O1xuICB0b29sdGlwOiBhbnkgPSB7fTtcbiAgaW5pdENvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICB2YWxpZGl0eUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHt9O1xuICAgIH1cbiAgICBpZiAodGhpcy5tb2RlbCkge1xuICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMubW9kZWwpO1xuICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5tb2RlbCkge1xuICAgICAgdGhpcy5tb2RlbCA9IHt9O1xuICAgIH1cbiAgICB0aGlzLmluaXRDb25maWcoKTtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuY291bnRyeUlEKSkge1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZXMoKTtcbiAgICB9XG4gIH1cblxuICBpbml0Q29uZmlnKCk6IHZvaWQge1xuICAgIHRoaXMuZmllbGRMaXN0LmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghdGhpcy5jb25maWcuaGFzT3duUHJvcGVydHkoZmllbGQpKSB7XG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXSA9IHtcbiAgICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY29uZmlnW2ZpZWxkXS5oYXNPd25Qcm9wZXJ0eSgnbGFiZWwnKSkge1xuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ubGFiZWwgPSB0aGlzLmxhYmVsc1tmaWVsZF07XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb25maWcucmVxdWlyZWQpIHtcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbmZpZ1tmaWVsZF0ucmVhZE9ubHkgfHwgdGhpcy5jb25maWcucmVhZE9ubHkpIHtcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZFtmaWVsZF0gPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGZpZWxkID09PSAnY291bnRyeUlEJykge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnW2ZpZWxkXS5waWNrZXJDb25maWcpIHtcbiAgICAgICAgICB0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnID0gdGhpcy5nZXREZWZhdWx0Q291bnRyeUNvbmZpZygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgPSB0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnLm9wdGlvbnM7XG4gICAgICB9XG4gICAgICBpZiAoZmllbGQgPT09ICdzdGF0ZScpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnKSB7XG4gICAgICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnID0gdGhpcy5nZXREZWZhdWx0U3RhdGVDb25maWcoKTtcbiAgICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zID0gdGhpcy5jb25maWdbZmllbGRdLnBpY2tlckNvbmZpZy5vcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGVPcHRpb25zID0gdGhpcy5jb25maWdbZmllbGRdLnBpY2tlckNvbmZpZy5vcHRpb25zO1xuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnLm9wdGlvbnMgPSAocXVlcnkgPSAnJykgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlT3B0aW9ucyhxdWVyeSwgdGhpcy5tb2RlbC5jb3VudHJ5SUQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zID0gdGhpcy5zdGF0ZU9wdGlvbnM7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc1ZhbGlkKGZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgdmFsaWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGlmIChcbiAgICAgICgodGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkICYmIChIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbFtmaWVsZF0pIHx8IEhlbHBlcnMuaXNFbXB0eSh0aGlzLm1vZGVsW2ZpZWxkXSkpKSB8fFxuICAgICAgICAhdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkKSAmJlxuICAgICAgIShmaWVsZCA9PT0gJ2NvdW50cnlJRCcgJiYgdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkICYmICFIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5jb3VudHJ5SUQpKSAmJlxuICAgICAgIShcbiAgICAgICAgZmllbGQgPT09ICdzdGF0ZScgJiZcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkICYmXG4gICAgICAgICghSGVscGVycy5pc0VtcHR5KHRoaXMubW9kZWwuc3RhdGUpIHx8XG4gICAgICAgICAgKChIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5zdGF0ZSkgfHwgSGVscGVycy5pc0VtcHR5KHRoaXMubW9kZWwuc3RhdGUpKSAmJlxuICAgICAgICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsLmNvdW50cnlOYW1lKSAmJlxuICAgICAgICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnICYmXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgJiZcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucy5sZW5ndGggPT09IDApKVxuICAgICAgKVxuICAgICkge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLm1vZGVsW2ZpZWxkXSkgJiZcbiAgICAgICFIZWxwZXJzLmlzQmxhbmsodGhpcy5jb25maWdbZmllbGRdLm1heGxlbmd0aCkgJiZcbiAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5tYXhsZW5ndGggPCB0aGlzLm1vZGVsW2ZpZWxkXS5sZW5ndGhcbiAgICApIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMudmFsaWRbZmllbGRdID0gdmFsaWQ7XG4gIH1cblxuICBpc0ludmFsaWQoZmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBpbnZhbGlkOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IGludmFsaWRNYXhsZW5ndGg6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpZiAoXG4gICAgICAoZmllbGQgIT09ICdjb3VudHJ5SUQnICYmXG4gICAgICAgIGZpZWxkICE9PSAnc3RhdGUnICYmXG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5yZXF1aXJlZCAmJlxuICAgICAgICBIZWxwZXJzLmlzRW1wdHkodGhpcy5tb2RlbFtmaWVsZF0pICYmXG4gICAgICAgICFIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbFtmaWVsZF0pKSB8fFxuICAgICAgKGZpZWxkID09PSAnY291bnRyeUlEJyAmJiB0aGlzLmNvbmZpZ1tmaWVsZF0ucmVxdWlyZWQgJiYgSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuY291bnRyeU5hbWUpICYmIHRoaXMuY29uZmlnW2ZpZWxkXS51cGRhdGVkKSB8fFxuICAgICAgKGZpZWxkID09PSAnc3RhdGUnICYmXG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5yZXF1aXJlZCAmJlxuICAgICAgICAoSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuc3RhdGUpIHx8IEhlbHBlcnMuaXNFbXB0eSh0aGlzLm1vZGVsLnN0YXRlKSkgJiZcbiAgICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsLmNvdW50cnlJRCkgJiZcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnVwZGF0ZWQgJiZcbiAgICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnICYmXG4gICAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyAmJlxuICAgICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMubGVuZ3RoID4gMClcbiAgICApIHtcbiAgICAgIGludmFsaWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAhSGVscGVycy5pc0VtcHR5KHRoaXMubW9kZWxbZmllbGRdKSAmJlxuICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLmNvbmZpZ1tmaWVsZF0ubWF4bGVuZ3RoKSAmJlxuICAgICAgdGhpcy5jb25maWdbZmllbGRdLm1heGxlbmd0aCA8IHRoaXMubW9kZWxbZmllbGRdLmxlbmd0aFxuICAgICkge1xuICAgICAgaW52YWxpZCA9IHRydWU7XG4gICAgICBpbnZhbGlkTWF4bGVuZ3RoID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5pbnZhbGlkW2ZpZWxkXSA9IGludmFsaWQ7XG4gICAgdGhpcy5pbnZhbGlkTWF4bGVuZ3RoW2ZpZWxkXSA9IGludmFsaWRNYXhsZW5ndGg7XG4gIH1cblxuICBvbklucHV0KGV2ZW50OiBFdmVudCwgZmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaXNJbnZhbGlkKGZpZWxkKTtcbiAgICB0aGlzLmlzVmFsaWQoZmllbGQpO1xuICAgIGlmIChldmVudCkge1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7IHZhbHVlOiB0aGlzLm1vZGVsW2ZpZWxkXSwgZmllbGQ6IGZpZWxkIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlzRm9jdXNlZChldmVudDogRXZlbnQsIGZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzZWRbZmllbGRdID0gdHJ1ZTtcbiAgICB0aGlzLmZvY3VzLmVtaXQoeyBldmVudCwgZmllbGQgfSk7XG4gIH1cblxuICBpc0JsdXJyZWQoZXZlbnQ6IEV2ZW50LCBmaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c2VkW2ZpZWxkXSA9IGZhbHNlO1xuICAgIHRoaXMuYmx1ci5lbWl0KHsgZXZlbnQsIGZpZWxkIH0pO1xuICB9XG5cbiAgb25Db3VudHJ5Q2hhbmdlKGV2dCkge1xuICAgIGxldCBjb3VudHJ5OiBhbnkgPSBldnQgJiYgZXZ0LnJhd1ZhbHVlID8gZXZ0LnJhd1ZhbHVlIDogbnVsbDtcbiAgICBsZXQgZmllbGQ6IGFueTtcbiAgICBsZXQgc3RhdGVzVXBkYXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgdGhpcy5jb25maWcuY291bnRyeUlELnVwZGF0ZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnKSB7XG4gICAgICBmaWVsZCA9IHRoaXMuY29uZmlnLmNvdW50cnlJRC5waWNrZXJDb25maWcuZmllbGQ7XG4gICAgfVxuICAgIGlmIChjb3VudHJ5ICYmIGZpZWxkICYmICFIZWxwZXJzLmlzQmxhbmsoY291bnRyeVtmaWVsZF0pICYmIHRoaXMubW9kZWwuY291bnRyeUlEICE9PSBjb3VudHJ5W2ZpZWxkXSkge1xuICAgICAgdGhpcy5tb2RlbC5jb3VudHJ5SUQgPSBjb3VudHJ5W2ZpZWxkXTtcbiAgICAgIHRoaXMubW9kZWwuY291bnRyeU5hbWUgPSBIZWxwZXJzLmludGVycG9sYXRlKHRoaXMuY29uZmlnLmNvdW50cnlJRC5waWNrZXJDb25maWcuZm9ybWF0LCBjb3VudHJ5KTtcbiAgICAgIHRoaXMuZGlzYWJsZWQuc3RhdGUgPSBmYWxzZTtcbiAgICAgIHRoaXMudG9vbHRpcC5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHN0YXRlc1VwZGF0YWJsZSA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChIZWxwZXJzLmlzQmxhbmsoY291bnRyeSkgfHwgSGVscGVycy5pc0JsYW5rKGNvdW50cnlbZmllbGRdKSkge1xuICAgICAgdGhpcy5tb2RlbC5jb3VudHJ5SUQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLm1vZGVsLmNvdW50cnlOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kaXNhYmxlZC5zdGF0ZSA9IHRydWU7XG4gICAgICB0aGlzLnRvb2x0aXAuc3RhdGUgPSB0aGlzLmxhYmVscy5zZWxlY3RDb3VudHJ5Rmlyc3Q7XG4gICAgICB0aGlzLmludmFsaWQuc3RhdGUgPSBmYWxzZTtcbiAgICAgIHN0YXRlc1VwZGF0YWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHN0YXRlXG4gICAgaWYgKHN0YXRlc1VwZGF0YWJsZSkge1xuICAgICAgdGhpcy5tb2RlbC5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGVzKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgIHRoaXMub25JbnB1dChudWxsLCAnY291bnRyeUlEJyk7XG4gICAgdGhpcy5vbklucHV0KG51bGwsICdzdGF0ZScpO1xuICB9XG5cbiAgb25TdGF0ZUNoYW5nZShldnQpIHtcbiAgICBsZXQgc3RhdGU6IGFueSA9IGV2dCAmJiBldnQudmFsdWUgPyBldnQudmFsdWUgOiBudWxsO1xuICAgIHRoaXMuY29uZmlnLnN0YXRlLnVwZGF0ZWQgPSB0cnVlO1xuICAgIHRoaXMubW9kZWwuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICB0aGlzLm9uSW5wdXQobnVsbCwgJ3N0YXRlJyk7XG4gIH1cblxuICBzZXRTdGF0ZUxhYmVsKG1vZGVsOiBhbnkpIHtcbiAgICBsZXQgc3RhdGU6IHN0cmluZyA9IG1vZGVsLnN0YXRlO1xuICAgIGlmICghSGVscGVycy5pc0JsYW5rKHN0YXRlKSkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlLnJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMudmFsaWQuc3RhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5tb2RlbC5zdGF0ZSA9IHN0YXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vZGVsLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlLnJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMudmFsaWQuc3RhdGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVTdGF0ZXMoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5vcHRpb25zICYmICFIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5jb3VudHJ5SUQpKSB7XG4gICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcub3B0aW9ucyA9IChxdWVyeSA9ICcnKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlT3B0aW9ucyhxdWVyeSwgdGhpcy5tb2RlbC5jb3VudHJ5SUQpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuc3RhdGVPcHRpb25zKCcnLCB0aGlzLm1vZGVsLmNvdW50cnlJRCkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgPSByZXN1bHRzO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnRvb2x0aXAuc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlZC5zdGF0ZSA9IHRoaXMuX3JlYWRPbmx5O1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGVMYWJlbCh0aGlzLm1vZGVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc2FibGVkLnN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnRvb2x0aXAuc3RhdGUgPSB0aGlzLmxhYmVscy5ub1N0YXRlc0ZvckNvdW50cnk7XG4gICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlLnJlcXVpcmVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkLnN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWxpZGl0eUNoYW5nZS5lbWl0KCk7XG4gICAgICAgIHRoaXMub25JbnB1dChudWxsLCAnc3RhdGUnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuZGlzYWJsZWQuc3RhdGUgPSB0cnVlO1xuICAgICAgdGhpcy50b29sdGlwLnN0YXRlID0gdGhpcy5sYWJlbHMuc2VsZWN0Q291bnRyeUZpcnN0O1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlLnJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMudmFsaWQuc3RhdGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZU9wdGlvbnMoZmlsdGVyOiBzdHJpbmcgPSAnJywgY291bnRyeUlEOiBudW1iZXIpOiBhbnlbXSB7XG4gICAgaWYgKGNvdW50cnlJRCkge1xuICAgICAgY29uc3QgY291bnRyeTogYW55ID0gZmluZEJ5Q291bnRyeUlkKGNvdW50cnlJRCk7XG4gICAgICBjb25zdCBzdGF0ZXM6IGFueVtdID0gZ2V0U3RhdGVzKGNvdW50cnkubmFtZSk7XG4gICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZXMuZmlsdGVyKChuYW1lKSA9PiBuZXcgUmVnRXhwKGAke2ZpbHRlcn1gLCAnZ2knKS50ZXN0KG5hbWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0ZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDb250cm9sKCkge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLm1vZGVsKTtcbiAgICB0aGlzLm9uSW5wdXQobnVsbCwgJ2NvdW50cnlJRCcpO1xuICAgIHRoaXMub25JbnB1dChudWxsLCAnc3RhdGUnKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIGxldCBsb2FkaW5nQ291bnRyaWVzOiBib29sZWFuID0gZmFsc2U7XG4gICAgaWYgKG1vZGVsKSB7XG4gICAgICBsZXQgY291bnRyeU5hbWU7XG4gICAgICBpZiAobW9kZWwuY291bnRyeU5hbWUgJiYgbW9kZWwuY291bnRyeUlEKSB7XG4gICAgICAgIGNvdW50cnlOYW1lID0gbW9kZWwuY291bnRyeU5hbWU7XG4gICAgICB9IGVsc2UgaWYgKG1vZGVsLmNvdW50cnlJRCkge1xuICAgICAgICBpZiAodGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZyAmJiB0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnLmdldExhYmVscykge1xuICAgICAgICAgIGlmIChIZWxwZXJzLmlzRnVuY3Rpb24odGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZy5nZXRMYWJlbHMpKSB7XG4gICAgICAgICAgICBsZXQgcHJvbWlzZTogYW55ID0gdGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZy5nZXRMYWJlbHMobW9kZWwuY291bnRyeUlEKTtcbiAgICAgICAgICAgIGxvYWRpbmdDb3VudHJpZXMgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb21pc2UudGhlbikge1xuICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZ0NvdW50cmllcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvdW50cnlOYW1lID0gSGVscGVycy5pbnRlcnBvbGF0ZVdpdGhGYWxsYmFjayh0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnLmZvcm1hdCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsID0gT2JqZWN0LmFzc2lnbihtb2RlbCwgeyBjb3VudHJ5TmFtZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlcygpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb3VudHJ5TmFtZSkge1xuICAgICAgICBjb3VudHJ5TmFtZSA9IGNvdW50cnlOYW1lLnRyaW0oKTtcbiAgICAgICAgbW9kZWwuc3RhdGUgPSBtb2RlbC5zdGF0ZSB8fCAnJztcbiAgICAgICAgdGhpcy5tb2RlbCA9IE9iamVjdC5hc3NpZ24obW9kZWwsIHsgY291bnRyeU5hbWU6IGNvdW50cnlOYW1lIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgICAgfVxuICAgICAgaWYgKCFsb2FkaW5nQ291bnRyaWVzICYmICFIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5jb3VudHJ5SUQpKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGVzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZmllbGRMaXN0LmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMub25JbnB1dChudWxsLCBmaWVsZCk7XG4gICAgfSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZhdWx0U3RhdGVDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGQ6ICd2YWx1ZScsXG4gICAgICBmb3JtYXQ6ICckbGFiZWwnLFxuICAgICAgb3B0aW9uczogKHF1ZXJ5ID0gJycsIGNvdW50cnlJRCkgPT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZ2V0U3RhdGVPcHRpb25zKHF1ZXJ5LCBjb3VudHJ5SUQpKTtcbiAgICAgIH0sXG4gICAgICBnZXRMYWJlbHM6IChzdGF0ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc3RhdGUpO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZhdWx0Q291bnRyeUNvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZDogJ3ZhbHVlJyxcbiAgICAgIGZvcm1hdDogJyRsYWJlbCcsXG4gICAgICBvcHRpb25zOiAocXVlcnk6IHN0cmluZyA9ICcnKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogYW55KSA9PiB7XG4gICAgICAgICAgbGV0IGNvdW50cmllczogYW55ID0gZ2V0Q291bnRyaWVzKCk7XG4gICAgICAgICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgICAgICBjb3VudHJpZXMgPSBjb3VudHJpZXMuZmlsdGVyKChjb3VudHJ5KSA9PiBuZXcgUmVnRXhwKGAke3F1ZXJ5fWAsICdnaScpLnRlc3QoY291bnRyeS5uYW1lKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKGNvdW50cmllcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGdldExhYmVsczogKGNvdW50cnlJRCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSkgPT4ge1xuICAgICAgICAgIGxldCBjb3VudHJ5OiBhbnkgPSBmaW5kQnlDb3VudHJ5SWQoY291bnRyeUlEKTtcbiAgICAgICAgICBpZiAoY291bnRyeSkge1xuICAgICAgICAgICAgcmVzb2x2ZShjb3VudHJ5Lm5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKCcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXX0=