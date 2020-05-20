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
const ADDRESS_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NovoAddressElement)),
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
export class NovoAddressElement {
    /**
     * @param {?} labels
     */
    constructor(labels) {
        this.labels = labels;
        this._readOnly = false;
        this.states = [];
        this.fieldList = ['address1', 'address2', 'city', 'state', 'zip', 'countryID'];
        this.onModelChange = (/**
         * @return {?}
         */
        () => { });
        this.onModelTouched = (/**
         * @return {?}
         */
        () => { });
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
    /**
     * @param {?} readOnly
     * @return {?}
     */
    set readOnly(readOnly) {
        this._readOnly = readOnly;
        this.fieldList.forEach((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            this.disabled[field] = this._readOnly;
        }));
        if (this.model) {
            this.updateStates();
        }
    }
    /**
     * @return {?}
     */
    get readOnly() {
        return this._readOnly;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * @return {?}
     */
    initConfig() {
        this.fieldList.forEach((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            if (!this.config.hasOwnProperty(field)) {
                this.config[field] = {
                    hidden: true,
                };
            }
            if (!this.config[field].hasOwnProperty('label')) {
                this.config[field].label = this.labels[field];
            }
            if (this.config.required) {
                this.config[field].required = true;
            }
            if (this.config[field].readOnly || this.config.readOnly) {
                this.config[field].readOnly = true;
                this.disabled[field] = true;
            }
            if (field === 'countryID') {
                if (!this.config[field].pickerConfig) {
                    this.config.countryID.pickerConfig = this.getDefaultCountryConfig();
                }
                this.config[field].pickerConfig.defaultOptions = this.config.countryID.pickerConfig.options;
            }
            if (field === 'state') {
                if (!this.config[field].pickerConfig) {
                    this.config.state.pickerConfig = this.getDefaultStateConfig();
                    this.config[field].pickerConfig.defaultOptions = this.config[field].pickerConfig.options;
                }
                this.stateOptions = this.config[field].pickerConfig.options;
                this.config[field].pickerConfig.options = (/**
                 * @param {?=} query
                 * @return {?}
                 */
                (query = '') => {
                    return this.stateOptions(query, this.model.countryID);
                });
                this.config[field].pickerConfig.defaultOptions = this.stateOptions;
            }
        }));
    }
    /**
     * @param {?} field
     * @return {?}
     */
    isValid(field) {
        /** @type {?} */
        let valid = true;
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
    }
    /**
     * @param {?} field
     * @return {?}
     */
    isInvalid(field) {
        /** @type {?} */
        let invalid = false;
        /** @type {?} */
        let invalidMaxlength = false;
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
    }
    /**
     * @param {?} event
     * @param {?} field
     * @return {?}
     */
    onInput(event, field) {
        this.isInvalid(field);
        this.isValid(field);
        if (event) {
            this.change.emit({ value: this.model[field], field });
        }
    }
    /**
     * @param {?} event
     * @param {?} field
     * @return {?}
     */
    isFocused(event, field) {
        this.focused[field] = true;
        this.focus.emit({ event, field });
    }
    /**
     * @param {?} event
     * @param {?} field
     * @return {?}
     */
    isBlurred(event, field) {
        this.focused[field] = false;
        this.blur.emit({ event, field });
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onCountryChange(evt) {
        /** @type {?} */
        const country = evt && evt.rawValue ? evt.rawValue : null;
        /** @type {?} */
        let field;
        /** @type {?} */
        let statesUpdatable = false;
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
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onStateChange(evt) {
        /** @type {?} */
        const state = evt && evt.value ? evt.value : null;
        this.config.state.updated = true;
        this.model.state = state;
        this.updateControl();
        this.onInput(null, 'state');
    }
    /**
     * @param {?} model
     * @return {?}
     */
    setStateLabel(model) {
        /** @type {?} */
        const state = model.state;
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
    }
    /**
     * @return {?}
     */
    updateStates() {
        if (this.config.state.pickerConfig.options && !Helpers.isBlank(this.model.countryID)) {
            this.config.state.pickerConfig.options = (/**
             * @param {?=} query
             * @return {?}
             */
            (query = '') => {
                return this.stateOptions(query, this.model.countryID);
            });
            this.stateOptions('', this.model.countryID).then((/**
             * @param {?} results
             * @return {?}
             */
            (results) => {
                this.config.state.pickerConfig.defaultOptions = results;
                if (results.length) {
                    this.tooltip.state = undefined;
                    this.disabled.state = this._readOnly;
                    this.setStateLabel(this.model);
                }
                else {
                    this.disabled.state = true;
                    this.tooltip.state = this.labels.noStatesForCountry;
                    if (this.config.state.required) {
                        this.valid.state = true;
                    }
                }
                this.validityChange.emit();
                this.onInput(null, 'state');
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
    }
    /**
     * @param {?=} filter
     * @param {?=} countryID
     * @return {?}
     */
    getStateOptions(filter = '', countryID) {
        if (countryID) {
            /** @type {?} */
            const country = findByCountryId(countryID);
            /** @type {?} */
            const states = getStates(country.name);
            if (filter) {
                return states.filter((/**
                 * @param {?} name
                 * @return {?}
                 */
                (name) => new RegExp(`${filter}`, 'gi').test(name)));
            }
            return states;
        }
        else {
            return [];
        }
    }
    /**
     * @return {?}
     */
    updateControl() {
        this.onModelChange(this.model);
        this.onInput(null, 'countryID');
        this.onInput(null, 'state');
    }
    /**
     * @param {?} model
     * @return {?}
     */
    writeValue(model) {
        /** @type {?} */
        let loadingCountries = false;
        if (model) {
            /** @type {?} */
            let countryName;
            if (model.countryName && model.countryID) {
                countryName = model.countryName;
            }
            else if (model.countryID) {
                if (this.config.countryID.pickerConfig && this.config.countryID.pickerConfig.getLabels) {
                    if (Helpers.isFunction(this.config.countryID.pickerConfig.getLabels)) {
                        /** @type {?} */
                        const promise = this.config.countryID.pickerConfig.getLabels(model.countryID);
                        loadingCountries = true;
                        if (promise.then) {
                            promise.then((/**
                             * @param {?} result
                             * @return {?}
                             */
                            (result) => {
                                loadingCountries = false;
                                countryName = Helpers.interpolateWithFallback(this.config.countryID.pickerConfig.format, result);
                                this.model = Object.assign(model, { countryName });
                                this.updateStates();
                            }));
                        }
                    }
                }
            }
            if (countryName) {
                countryName = countryName.trim();
                model.state = model.state || '';
                this.model = Object.assign(model, { countryName });
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
        (field) => {
            this.onInput(null, field);
        }));
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    /**
     * @private
     * @return {?}
     */
    getDefaultStateConfig() {
        return {
            field: 'value',
            format: '$label',
            options: (/**
             * @param {?=} query
             * @param {?=} countryID
             * @return {?}
             */
            (query = '', countryID) => {
                return Promise.resolve(this.getStateOptions(query, countryID));
            }),
            getLabels: (/**
             * @param {?} state
             * @return {?}
             */
            (state) => {
                return Promise.resolve(state);
            }),
        };
    }
    /**
     * @private
     * @return {?}
     */
    getDefaultCountryConfig() {
        return {
            field: 'value',
            format: '$label',
            options: (/**
             * @param {?=} query
             * @return {?}
             */
            (query = '') => {
                return new Promise((/**
                 * @param {?} resolve
                 * @return {?}
                 */
                (resolve) => {
                    /** @type {?} */
                    let countries = COUNTRIES;
                    if (query) {
                        countries = countries.filter((/**
                         * @param {?} country
                         * @return {?}
                         */
                        (country) => new RegExp(`${query}`, 'gi').test(country.name)));
                    }
                    return resolve(countries.map((/**
                     * @param {?} country
                     * @return {?}
                     */
                    (country) => ({ value: country.id, label: country.name }))));
                }));
            }),
            getLabels: (/**
             * @param {?} countryID
             * @return {?}
             */
            (countryID) => {
                return new Promise((/**
                 * @param {?} resolve
                 * @return {?}
                 */
                (resolve) => {
                    /** @type {?} */
                    const country = findByCountryId(countryID);
                    if (country) {
                        resolve({ value: country.id, label: country.name });
                    }
                    else {
                        resolve('');
                    }
                }));
            }),
        };
    }
}
NovoAddressElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-address',
                providers: [ADDRESS_VALUE_ACCESSOR],
                template: `
    <span
      *ngIf="!config?.address1?.hidden"
      class="street-address"
      [class.invalid]="invalid.address1"
      [class.focus]="focused.address1"
      [class.disabled]="disabled.address1"
    >
      <i
        *ngIf="config.address1.required"
        class="required-indicator address1"
        [ngClass]="{ 'bhi-circle': !valid.address1, 'bhi-check': valid.address1 }"
      >
      </i>
      <input
        [class.maxlength-error]="invalidMaxlength.address1"
        type="text"
        id="address1"
        name="address1"
        [placeholder]="config.address1.label"
        [maxlength]="config?.address1?.maxlength"
        autocomplete="shipping street-address address-line-1"
        [(ngModel)]="model.address1"
        (ngModelChange)="updateControl()"
        (focus)="isFocused($event, 'address1')"
        (blur)="isBlurred($event, 'address1')"
        (input)="onInput($event, 'address1')"
      />
    </span>
    <span
      *ngIf="!config?.address2?.hidden"
      class="apt suite"
      [class.invalid]="invalid.address2"
      [class.focus]="focused.address2"
      [class.disabled]="disabled.address2"
    >
      <i
        *ngIf="config.address2.required"
        class="required-indicator address2"
        [ngClass]="{ 'bhi-circle': !valid.address2, 'bhi-check': valid.address2 }"
      >
      </i>
      <input
        [class.maxlength-error]="invalidMaxlength.address2"
        type="text"
        id="address2"
        name="address2"
        [placeholder]="config.address2.label"
        [maxlength]="config?.address2?.maxlength"
        autocomplete="shipping address-line-2"
        [(ngModel)]="model.address2"
        (ngModelChange)="updateControl()"
        (focus)="isFocused($event, 'address2')"
        (blur)="isBlurred($event, 'address2')"
        (input)="onInput($event, 'address2')"
      />
    </span>
    <span
      *ngIf="!config?.city?.hidden"
      class="city locality"
      [class.invalid]="invalid.city"
      [class.focus]="focused.city"
      [class.disabled]="disabled.city"
    >
      <i *ngIf="config.city.required" class="required-indicator" [ngClass]="{ 'bhi-circle': !valid.city, 'bhi-check': valid.city }"> </i>
      <input
        [class.maxlength-error]="invalidMaxlength.city"
        type="text"
        id="city"
        name="city"
        [placeholder]="config.city.label"
        autocomplete="shipping city locality"
        [maxlength]="config?.city?.maxlength"
        [(ngModel)]="model.city"
        (ngModelChange)="updateControl()"
        (focus)="isFocused($event, 'city')"
        (blur)="isBlurred($event, 'city')"
        (input)="onInput($event, 'city')"
      />
    </span>
    <span
      *ngIf="!config?.state?.hidden"
      class="state region"
      [class.invalid]="invalid.state"
      [class.focus]="focused.state"
      [class.disabled]="disabled.state"
      [tooltip]="tooltip.state"
    >
      <i *ngIf="config.state.required" class="required-indicator" [ngClass]="{ 'bhi-circle': !valid.state, 'bhi-check': valid.state }"> </i>
      <novo-picker
        [config]="config?.state?.pickerConfig"
        [placeholder]="config?.state?.label"
        (changed)="onStateChange($event)"
        autocomplete="shipping region"
        [(ngModel)]="model.state"
        [disablePickerInput]="disabled.state"
      ></novo-picker>
    </span>
    <span
      *ngIf="!config?.zip?.hidden"
      class="zip postal-code"
      [class.invalid]="invalid.zip"
      [class.focus]="focused.zip"
      [class.disabled]="disabled.zip"
    >
      <i *ngIf="config.zip.required" class="required-indicator" [ngClass]="{ 'bhi-circle': !valid.zip, 'bhi-check': valid.zip }"> </i>
      <input
        [class.maxlength-error]="invalidMaxlength.zip"
        type="text"
        id="zip"
        name="zip"
        [placeholder]="config.zip.label"
        autocomplete="shipping postal-code"
        [maxlength]="config?.zip?.maxlength"
        [(ngModel)]="model.zip"
        (ngModelChange)="updateControl()"
        (focus)="isFocused($event, 'zip')"
        (blur)="isBlurred($event, 'zip')"
        (input)="onInput($event, 'zip')"
      />
    </span>
    <span
      *ngIf="!config?.countryID?.hidden"
      class="country-name"
      [class.invalid]="invalid.countryID"
      [class.focus]="focused.countryID"
      [class.disabled]="disabled.countryID"
    >
      <i
        *ngIf="config.countryID.required"
        class="required-indicator"
        [ngClass]="{ 'bhi-circle': !valid.countryID, 'bhi-check': valid.countryID }"
      >
      </i>
      <novo-picker
        [config]="config?.countryID?.pickerConfig"
        [placeholder]="config.countryID.label"
        (changed)="onCountryChange($event)"
        autocomplete="shipping country"
        [(ngModel)]="model.countryID"
        [disablePickerInput]="disabled.countryID"
      ></novo-picker>
    </span>
  `
            }] }
];
/** @nocollapse */
NovoAddressElement.ctorParameters = () => [
    { type: NovoLabelService }
];
NovoAddressElement.propDecorators = {
    config: [{ type: Input }],
    readOnly: [{ type: Input }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    blur: [{ type: Output }],
    validityChange: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2V4dHJhcy9hZGRyZXNzL0FkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztNQUc5QyxzQkFBc0IsR0FBRztJQUM3QixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsRUFBQztJQUNqRCxLQUFLLEVBQUUsSUFBSTtDQUNaOzs7O0FBRUQsK0NBUUM7OztJQVBDLDBDQUFjOztJQUNkLDZDQUFrQjs7SUFDbEIsOENBQWtCOztJQUNsQixpREFBbUI7O0lBQ25CLDJDQUFnQjs7SUFDaEIsNENBQWtCOztJQUNsQiw2Q0FBbUI7Ozs7O0FBR3JCLHVDQVNDOzs7SUFSQyxxQ0FBbUI7O0lBQ25CLHFDQUFtQjs7SUFDbkIscUNBQXFDOztJQUNyQyxxQ0FBcUM7O0lBQ3JDLGlDQUFpQzs7SUFDakMsa0NBQWtDOztJQUNsQyxnQ0FBZ0M7O0lBQ2hDLHNDQUFzQzs7QUF1SnhDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUF1QzdCLFlBQW1CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBcENuQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBY25DLFdB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MEI7Ozs7O0lBQzFCLHVDQUFtQzs7SUFjbkMsb0NBQXdCOztJQUN4Qix1Q0FBeUY7O0lBQ3pGLG1DQUFXOztJQUNYLDJDQUFvQzs7SUFDcEMsNENBQXFDOztJQUNyQyxxQ0FBa0I7O0lBQ2xCLHFDQUFrQjs7SUFDbEIsc0NBQW1COztJQUNuQiw4Q0FBMkI7O0lBQzNCLG1DQUFnQjs7SUFDaEIsMENBQWtCOztJQUNsQixxQ0FBa0I7O0lBQ2xCLDBDQUE4Qjs7SUFDOUIsb0NBQytDOztJQUMvQyxtQ0FDOEM7O0lBQzlDLGtDQUM2Qzs7SUFDN0MsNENBQ3VEOztJQUUzQyxvQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBDT1VOVFJJRVMsIGZpbmRCeUNvdW50cnlJZCwgZ2V0U3RhdGVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY291bnRyaWVzL0NvdW50cmllcyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQUREUkVTU19WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9BZGRyZXNzRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIG1heGxlbmd0aDogbnVtYmVyO1xuICBwaWNrZXJDb25maWc/OiBhbnk7XG4gIGhpZGRlbjogYm9vbGVhbjtcbiAgdXBkYXRlZD86IGJvb2xlYW47XG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3ZvQWRkcmVzc0NvbmZpZyB7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xuICBhZGRyZXNzMT86IE5vdm9BZGRyZXNzU3ViZmllbGRDb25maWc7XG4gIGFkZHJlc3MyPzogTm92b0FkZHJlc3NTdWJmaWVsZENvbmZpZztcbiAgY2l0eT86IE5vdm9BZGRyZXNzU3ViZmllbGRDb25maWc7XG4gIHN0YXRlPzogTm92b0FkZHJlc3NTdWJmaWVsZENvbmZpZztcbiAgemlwPzogTm92b0FkZHJlc3NTdWJmaWVsZENvbmZpZztcbiAgY291bnRyeUlEPzogTm92b0FkZHJlc3NTdWJmaWVsZENvbmZpZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1hZGRyZXNzJyxcbiAgcHJvdmlkZXJzOiBbQUREUkVTU19WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW5cbiAgICAgICpuZ0lmPVwiIWNvbmZpZz8uYWRkcmVzczE/LmhpZGRlblwiXG4gICAgICBjbGFzcz1cInN0cmVldC1hZGRyZXNzXCJcbiAgICAgIFtjbGFzcy5pbnZhbGlkXT1cImludmFsaWQuYWRkcmVzczFcIlxuICAgICAgW2NsYXNzLmZvY3VzXT1cImZvY3VzZWQuYWRkcmVzczFcIlxuICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkLmFkZHJlc3MxXCJcbiAgICA+XG4gICAgICA8aVxuICAgICAgICAqbmdJZj1cImNvbmZpZy5hZGRyZXNzMS5yZXF1aXJlZFwiXG4gICAgICAgIGNsYXNzPVwicmVxdWlyZWQtaW5kaWNhdG9yIGFkZHJlc3MxXCJcbiAgICAgICAgW25nQ2xhc3NdPVwieyAnYmhpLWNpcmNsZSc6ICF2YWxpZC5hZGRyZXNzMSwgJ2JoaS1jaGVjayc6IHZhbGlkLmFkZHJlc3MxIH1cIlxuICAgICAgPlxuICAgICAgPC9pPlxuICAgICAgPGlucHV0XG4gICAgICAgIFtjbGFzcy5tYXhsZW5ndGgtZXJyb3JdPVwiaW52YWxpZE1heGxlbmd0aC5hZGRyZXNzMVwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgaWQ9XCJhZGRyZXNzMVwiXG4gICAgICAgIG5hbWU9XCJhZGRyZXNzMVwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb25maWcuYWRkcmVzczEubGFiZWxcIlxuICAgICAgICBbbWF4bGVuZ3RoXT1cImNvbmZpZz8uYWRkcmVzczE/Lm1heGxlbmd0aFwiXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cInNoaXBwaW5nIHN0cmVldC1hZGRyZXNzIGFkZHJlc3MtbGluZS0xXCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5hZGRyZXNzMVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZUNvbnRyb2woKVwiXG4gICAgICAgIChmb2N1cyk9XCJpc0ZvY3VzZWQoJGV2ZW50LCAnYWRkcmVzczEnKVwiXG4gICAgICAgIChibHVyKT1cImlzQmx1cnJlZCgkZXZlbnQsICdhZGRyZXNzMScpXCJcbiAgICAgICAgKGlucHV0KT1cIm9uSW5wdXQoJGV2ZW50LCAnYWRkcmVzczEnKVwiXG4gICAgICAvPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhblxuICAgICAgKm5nSWY9XCIhY29uZmlnPy5hZGRyZXNzMj8uaGlkZGVuXCJcbiAgICAgIGNsYXNzPVwiYXB0IHN1aXRlXCJcbiAgICAgIFtjbGFzcy5pbnZhbGlkXT1cImludmFsaWQuYWRkcmVzczJcIlxuICAgICAgW2NsYXNzLmZvY3VzXT1cImZvY3VzZWQuYWRkcmVzczJcIlxuICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkLmFkZHJlc3MyXCJcbiAgICA+XG4gICAgICA8aVxuICAgICAgICAqbmdJZj1cImNvbmZpZy5hZGRyZXNzMi5yZXF1aXJlZFwiXG4gICAgICAgIGNsYXNzPVwicmVxdWlyZWQtaW5kaWNhdG9yIGFkZHJlc3MyXCJcbiAgICAgICAgW25nQ2xhc3NdPVwieyAnYmhpLWNpcmNsZSc6ICF2YWxpZC5hZGRyZXNzMiwgJ2JoaS1jaGVjayc6IHZhbGlkLmFkZHJlc3MyIH1cIlxuICAgICAgPlxuICAgICAgPC9pPlxuICAgICAgPGlucHV0XG4gICAgICAgIFtjbGFzcy5tYXhsZW5ndGgtZXJyb3JdPVwiaW52YWxpZE1heGxlbmd0aC5hZGRyZXNzMlwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgaWQ9XCJhZGRyZXNzMlwiXG4gICAgICAgIG5hbWU9XCJhZGRyZXNzMlwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb25maWcuYWRkcmVzczIubGFiZWxcIlxuICAgICAgICBbbWF4bGVuZ3RoXT1cImNvbmZpZz8uYWRkcmVzczI/Lm1heGxlbmd0aFwiXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cInNoaXBwaW5nIGFkZHJlc3MtbGluZS0yXCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5hZGRyZXNzMlwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZUNvbnRyb2woKVwiXG4gICAgICAgIChmb2N1cyk9XCJpc0ZvY3VzZWQoJGV2ZW50LCAnYWRkcmVzczInKVwiXG4gICAgICAgIChibHVyKT1cImlzQmx1cnJlZCgkZXZlbnQsICdhZGRyZXNzMicpXCJcbiAgICAgICAgKGlucHV0KT1cIm9uSW5wdXQoJGV2ZW50LCAnYWRkcmVzczInKVwiXG4gICAgICAvPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhblxuICAgICAgKm5nSWY9XCIhY29uZmlnPy5jaXR5Py5oaWRkZW5cIlxuICAgICAgY2xhc3M9XCJjaXR5IGxvY2FsaXR5XCJcbiAgICAgIFtjbGFzcy5pbnZhbGlkXT1cImludmFsaWQuY2l0eVwiXG4gICAgICBbY2xhc3MuZm9jdXNdPVwiZm9jdXNlZC5jaXR5XCJcbiAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZC5jaXR5XCJcbiAgICA+XG4gICAgICA8aSAqbmdJZj1cImNvbmZpZy5jaXR5LnJlcXVpcmVkXCIgY2xhc3M9XCJyZXF1aXJlZC1pbmRpY2F0b3JcIiBbbmdDbGFzc109XCJ7ICdiaGktY2lyY2xlJzogIXZhbGlkLmNpdHksICdiaGktY2hlY2snOiB2YWxpZC5jaXR5IH1cIj4gPC9pPlxuICAgICAgPGlucHV0XG4gICAgICAgIFtjbGFzcy5tYXhsZW5ndGgtZXJyb3JdPVwiaW52YWxpZE1heGxlbmd0aC5jaXR5XCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBpZD1cImNpdHlcIlxuICAgICAgICBuYW1lPVwiY2l0eVwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb25maWcuY2l0eS5sYWJlbFwiXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cInNoaXBwaW5nIGNpdHkgbG9jYWxpdHlcIlxuICAgICAgICBbbWF4bGVuZ3RoXT1cImNvbmZpZz8uY2l0eT8ubWF4bGVuZ3RoXCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5jaXR5XCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlQ29udHJvbCgpXCJcbiAgICAgICAgKGZvY3VzKT1cImlzRm9jdXNlZCgkZXZlbnQsICdjaXR5JylcIlxuICAgICAgICAoYmx1cik9XCJpc0JsdXJyZWQoJGV2ZW50LCAnY2l0eScpXCJcbiAgICAgICAgKGlucHV0KT1cIm9uSW5wdXQoJGV2ZW50LCAnY2l0eScpXCJcbiAgICAgIC8+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuXG4gICAgICAqbmdJZj1cIiFjb25maWc/LnN0YXRlPy5oaWRkZW5cIlxuICAgICAgY2xhc3M9XCJzdGF0ZSByZWdpb25cIlxuICAgICAgW2NsYXNzLmludmFsaWRdPVwiaW52YWxpZC5zdGF0ZVwiXG4gICAgICBbY2xhc3MuZm9jdXNdPVwiZm9jdXNlZC5zdGF0ZVwiXG4gICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWQuc3RhdGVcIlxuICAgICAgW3Rvb2x0aXBdPVwidG9vbHRpcC5zdGF0ZVwiXG4gICAgPlxuICAgICAgPGkgKm5nSWY9XCJjb25maWcuc3RhdGUucmVxdWlyZWRcIiBjbGFzcz1cInJlcXVpcmVkLWluZGljYXRvclwiIFtuZ0NsYXNzXT1cInsgJ2JoaS1jaXJjbGUnOiAhdmFsaWQuc3RhdGUsICdiaGktY2hlY2snOiB2YWxpZC5zdGF0ZSB9XCI+IDwvaT5cbiAgICAgIDxub3ZvLXBpY2tlclxuICAgICAgICBbY29uZmlnXT1cImNvbmZpZz8uc3RhdGU/LnBpY2tlckNvbmZpZ1wiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb25maWc/LnN0YXRlPy5sYWJlbFwiXG4gICAgICAgIChjaGFuZ2VkKT1cIm9uU3RhdGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cInNoaXBwaW5nIHJlZ2lvblwiXG4gICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwuc3RhdGVcIlxuICAgICAgICBbZGlzYWJsZVBpY2tlcklucHV0XT1cImRpc2FibGVkLnN0YXRlXCJcbiAgICAgID48L25vdm8tcGlja2VyPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhblxuICAgICAgKm5nSWY9XCIhY29uZmlnPy56aXA/LmhpZGRlblwiXG4gICAgICBjbGFzcz1cInppcCBwb3N0YWwtY29kZVwiXG4gICAgICBbY2xhc3MuaW52YWxpZF09XCJpbnZhbGlkLnppcFwiXG4gICAgICBbY2xhc3MuZm9jdXNdPVwiZm9jdXNlZC56aXBcIlxuICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkLnppcFwiXG4gICAgPlxuICAgICAgPGkgKm5nSWY9XCJjb25maWcuemlwLnJlcXVpcmVkXCIgY2xhc3M9XCJyZXF1aXJlZC1pbmRpY2F0b3JcIiBbbmdDbGFzc109XCJ7ICdiaGktY2lyY2xlJzogIXZhbGlkLnppcCwgJ2JoaS1jaGVjayc6IHZhbGlkLnppcCB9XCI+IDwvaT5cbiAgICAgIDxpbnB1dFxuICAgICAgICBbY2xhc3MubWF4bGVuZ3RoLWVycm9yXT1cImludmFsaWRNYXhsZW5ndGguemlwXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBpZD1cInppcFwiXG4gICAgICAgIG5hbWU9XCJ6aXBcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLnppcC5sYWJlbFwiXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cInNoaXBwaW5nIHBvc3RhbC1jb2RlXCJcbiAgICAgICAgW21heGxlbmd0aF09XCJjb25maWc/LnppcD8ubWF4bGVuZ3RoXCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC56aXBcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVDb250cm9sKClcIlxuICAgICAgICAoZm9jdXMpPVwiaXNGb2N1c2VkKCRldmVudCwgJ3ppcCcpXCJcbiAgICAgICAgKGJsdXIpPVwiaXNCbHVycmVkKCRldmVudCwgJ3ppcCcpXCJcbiAgICAgICAgKGlucHV0KT1cIm9uSW5wdXQoJGV2ZW50LCAnemlwJylcIlxuICAgICAgLz5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW5cbiAgICAgICpuZ0lmPVwiIWNvbmZpZz8uY291bnRyeUlEPy5oaWRkZW5cIlxuICAgICAgY2xhc3M9XCJjb3VudHJ5LW5hbWVcIlxuICAgICAgW2NsYXNzLmludmFsaWRdPVwiaW52YWxpZC5jb3VudHJ5SURcIlxuICAgICAgW2NsYXNzLmZvY3VzXT1cImZvY3VzZWQuY291bnRyeUlEXCJcbiAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZC5jb3VudHJ5SURcIlxuICAgID5cbiAgICAgIDxpXG4gICAgICAgICpuZ0lmPVwiY29uZmlnLmNvdW50cnlJRC5yZXF1aXJlZFwiXG4gICAgICAgIGNsYXNzPVwicmVxdWlyZWQtaW5kaWNhdG9yXCJcbiAgICAgICAgW25nQ2xhc3NdPVwieyAnYmhpLWNpcmNsZSc6ICF2YWxpZC5jb3VudHJ5SUQsICdiaGktY2hlY2snOiB2YWxpZC5jb3VudHJ5SUQgfVwiXG4gICAgICA+XG4gICAgICA8L2k+XG4gICAgICA8bm92by1waWNrZXJcbiAgICAgICAgW2NvbmZpZ109XCJjb25maWc/LmNvdW50cnlJRD8ucGlja2VyQ29uZmlnXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy5jb3VudHJ5SUQubGFiZWxcIlxuICAgICAgICAoY2hhbmdlZCk9XCJvbkNvdW50cnlDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cInNoaXBwaW5nIGNvdW50cnlcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLmNvdW50cnlJRFwiXG4gICAgICAgIFtkaXNhYmxlUGlja2VySW5wdXRdPVwiZGlzYWJsZWQuY291bnRyeUlEXCJcbiAgICAgID48L25vdm8tcGlja2VyPlxuICAgIDwvc3Bhbj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0FkZHJlc3NFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGNvbmZpZzogTm92b0FkZHJlc3NDb25maWc7XG4gIHByaXZhdGUgX3JlYWRPbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCByZWFkT25seShyZWFkT25seTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlYWRPbmx5ID0gcmVhZE9ubHk7XG4gICAgdGhpcy5maWVsZExpc3QuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5kaXNhYmxlZFtmaWVsZF0gPSB0aGlzLl9yZWFkT25seTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5tb2RlbCkge1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZXMoKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHJlYWRPbmx5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZWFkT25seTtcbiAgfVxuICBzdGF0ZXM6IEFycmF5PGFueT4gPSBbXTtcbiAgZmllbGRMaXN0OiBBcnJheTxzdHJpbmc+ID0gWydhZGRyZXNzMScsICdhZGRyZXNzMicsICdjaXR5JywgJ3N0YXRlJywgJ3ppcCcsICdjb3VudHJ5SUQnXTtcbiAgbW9kZWw6IGFueTtcbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcbiAgZm9jdXNlZDogYW55ID0ge307XG4gIGludmFsaWQ6IGFueSA9IHt9O1xuICBkaXNhYmxlZDogYW55ID0ge307XG4gIGludmFsaWRNYXhsZW5ndGg6IGFueSA9IHt9O1xuICB2YWxpZDogYW55ID0ge307XG4gIHN0YXRlT3B0aW9uczogYW55O1xuICB0b29sdGlwOiBhbnkgPSB7fTtcbiAgaW5pdENvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICB2YWxpZGl0eUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgdGhpcy5jb25maWcgPSB7fTtcbiAgICB9XG4gICAgaWYgKHRoaXMubW9kZWwpIHtcbiAgICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLm1vZGVsKTtcbiAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMubW9kZWwpIHtcbiAgICAgIHRoaXMubW9kZWwgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5pbml0Q29uZmlnKCk7XG4gICAgaWYgKEhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsLmNvdW50cnlJRCkpIHtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGVzKCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdENvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmZpZWxkTGlzdC5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmhhc093blByb3BlcnR5KGZpZWxkKSkge1xuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0gPSB7XG4gICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmNvbmZpZ1tmaWVsZF0uaGFzT3duUHJvcGVydHkoJ2xhYmVsJykpIHtcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLmxhYmVsID0gdGhpcy5sYWJlbHNbZmllbGRdO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY29uZmlnLnJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5yZXF1aXJlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb25maWdbZmllbGRdLnJlYWRPbmx5IHx8IHRoaXMuY29uZmlnLnJlYWRPbmx5KSB7XG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5yZWFkT25seSA9IHRydWU7XG4gICAgICAgIHRoaXMuZGlzYWJsZWRbZmllbGRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChmaWVsZCA9PT0gJ2NvdW50cnlJRCcpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnKSB7XG4gICAgICAgICAgdGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZyA9IHRoaXMuZ2V0RGVmYXVsdENvdW50cnlDb25maWcoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zID0gdGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZy5vcHRpb25zO1xuICAgICAgfVxuICAgICAgaWYgKGZpZWxkID09PSAnc3RhdGUnKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWdbZmllbGRdLnBpY2tlckNvbmZpZykge1xuICAgICAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZyA9IHRoaXMuZ2V0RGVmYXVsdFN0YXRlQ29uZmlnKCk7XG4gICAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyA9IHRoaXMuY29uZmlnW2ZpZWxkXS5waWNrZXJDb25maWcub3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlT3B0aW9ucyA9IHRoaXMuY29uZmlnW2ZpZWxkXS5waWNrZXJDb25maWcub3B0aW9ucztcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnBpY2tlckNvbmZpZy5vcHRpb25zID0gKHF1ZXJ5ID0gJycpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZU9wdGlvbnMocXVlcnksIHRoaXMubW9kZWwuY291bnRyeUlEKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyA9IHRoaXMuc3RhdGVPcHRpb25zO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNWYWxpZChmaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IHZhbGlkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBpZiAoXG4gICAgICAoKHRoaXMuY29uZmlnW2ZpZWxkXS5yZXF1aXJlZCAmJiAoSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWxbZmllbGRdKSB8fCBIZWxwZXJzLmlzRW1wdHkodGhpcy5tb2RlbFtmaWVsZF0pKSkgfHxcbiAgICAgICAgIXRoaXMuY29uZmlnW2ZpZWxkXS5yZXF1aXJlZCkgJiZcbiAgICAgICEoZmllbGQgPT09ICdjb3VudHJ5SUQnICYmIHRoaXMuY29uZmlnW2ZpZWxkXS5yZXF1aXJlZCAmJiAhSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuY291bnRyeUlEKSkgJiZcbiAgICAgICEoXG4gICAgICAgIGZpZWxkID09PSAnc3RhdGUnICYmXG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5yZXF1aXJlZCAmJlxuICAgICAgICAoIUhlbHBlcnMuaXNFbXB0eSh0aGlzLm1vZGVsLnN0YXRlKSB8fFxuICAgICAgICAgICgoSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuc3RhdGUpIHx8IEhlbHBlcnMuaXNFbXB0eSh0aGlzLm1vZGVsLnN0YXRlKSkgJiZcbiAgICAgICAgICAgICFIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5jb3VudHJ5TmFtZSkgJiZcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZyAmJlxuICAgICAgICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zICYmXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMubGVuZ3RoID09PSAwKSlcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICFIZWxwZXJzLmlzRW1wdHkodGhpcy5tb2RlbFtmaWVsZF0pICYmXG4gICAgICAhSGVscGVycy5pc0JsYW5rKHRoaXMuY29uZmlnW2ZpZWxkXS5tYXhsZW5ndGgpICYmXG4gICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ubWF4bGVuZ3RoIDwgdGhpcy5tb2RlbFtmaWVsZF0ubGVuZ3RoXG4gICAgKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnZhbGlkW2ZpZWxkXSA9IHZhbGlkO1xuICB9XG5cbiAgaXNJbnZhbGlkKGZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgaW52YWxpZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCBpbnZhbGlkTWF4bGVuZ3RoOiBib29sZWFuID0gZmFsc2U7XG4gICAgaWYgKFxuICAgICAgKGZpZWxkICE9PSAnY291bnRyeUlEJyAmJlxuICAgICAgICBmaWVsZCAhPT0gJ3N0YXRlJyAmJlxuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucmVxdWlyZWQgJiZcbiAgICAgICAgSGVscGVycy5pc0VtcHR5KHRoaXMubW9kZWxbZmllbGRdKSAmJlxuICAgICAgICAhSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWxbZmllbGRdKSkgfHxcbiAgICAgIChmaWVsZCA9PT0gJ2NvdW50cnlJRCcgJiYgdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkICYmIEhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsLmNvdW50cnlOYW1lKSAmJiB0aGlzLmNvbmZpZ1tmaWVsZF0udXBkYXRlZCkgfHxcbiAgICAgIChmaWVsZCA9PT0gJ3N0YXRlJyAmJlxuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucmVxdWlyZWQgJiZcbiAgICAgICAgKEhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsLnN0YXRlKSB8fCBIZWxwZXJzLmlzRW1wdHkodGhpcy5tb2RlbC5zdGF0ZSkpICYmXG4gICAgICAgICFIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5jb3VudHJ5SUQpICYmXG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS51cGRhdGVkICYmXG4gICAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZyAmJlxuICAgICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgJiZcbiAgICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zLmxlbmd0aCA+IDApXG4gICAgKSB7XG4gICAgICBpbnZhbGlkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLm1vZGVsW2ZpZWxkXSkgJiZcbiAgICAgICFIZWxwZXJzLmlzQmxhbmsodGhpcy5jb25maWdbZmllbGRdLm1heGxlbmd0aCkgJiZcbiAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5tYXhsZW5ndGggPCB0aGlzLm1vZGVsW2ZpZWxkXS5sZW5ndGhcbiAgICApIHtcbiAgICAgIGludmFsaWQgPSB0cnVlO1xuICAgICAgaW52YWxpZE1heGxlbmd0aCA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuaW52YWxpZFtmaWVsZF0gPSBpbnZhbGlkO1xuICAgIHRoaXMuaW52YWxpZE1heGxlbmd0aFtmaWVsZF0gPSBpbnZhbGlkTWF4bGVuZ3RoO1xuICB9XG5cbiAgb25JbnB1dChldmVudDogRXZlbnQsIGZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmlzSW52YWxpZChmaWVsZCk7XG4gICAgdGhpcy5pc1ZhbGlkKGZpZWxkKTtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoeyB2YWx1ZTogdGhpcy5tb2RlbFtmaWVsZF0sIGZpZWxkIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlzRm9jdXNlZChldmVudDogRXZlbnQsIGZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzZWRbZmllbGRdID0gdHJ1ZTtcbiAgICB0aGlzLmZvY3VzLmVtaXQoeyBldmVudCwgZmllbGQgfSk7XG4gIH1cblxuICBpc0JsdXJyZWQoZXZlbnQ6IEV2ZW50LCBmaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c2VkW2ZpZWxkXSA9IGZhbHNlO1xuICAgIHRoaXMuYmx1ci5lbWl0KHsgZXZlbnQsIGZpZWxkIH0pO1xuICB9XG5cbiAgb25Db3VudHJ5Q2hhbmdlKGV2dCkge1xuICAgIGNvbnN0IGNvdW50cnk6IGFueSA9IGV2dCAmJiBldnQucmF3VmFsdWUgPyBldnQucmF3VmFsdWUgOiBudWxsO1xuICAgIGxldCBmaWVsZDogYW55O1xuICAgIGxldCBzdGF0ZXNVcGRhdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB0aGlzLmNvbmZpZy5jb3VudHJ5SUQudXBkYXRlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMuY29uZmlnLmNvdW50cnlJRC5waWNrZXJDb25maWcpIHtcbiAgICAgIGZpZWxkID0gdGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZy5maWVsZDtcbiAgICB9XG4gICAgaWYgKGNvdW50cnkgJiYgZmllbGQgJiYgIUhlbHBlcnMuaXNCbGFuayhjb3VudHJ5W2ZpZWxkXSkgJiYgdGhpcy5tb2RlbC5jb3VudHJ5SUQgIT09IGNvdW50cnlbZmllbGRdKSB7XG4gICAgICB0aGlzLm1vZGVsLmNvdW50cnlJRCA9IGNvdW50cnlbZmllbGRdO1xuICAgICAgdGhpcy5tb2RlbC5jb3VudHJ5TmFtZSA9IEhlbHBlcnMuaW50ZXJwb2xhdGUodGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZy5mb3JtYXQsIGNvdW50cnkpO1xuICAgICAgdGhpcy5kaXNhYmxlZC5zdGF0ZSA9IGZhbHNlO1xuICAgICAgdGhpcy50b29sdGlwLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgc3RhdGVzVXBkYXRhYmxlID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKEhlbHBlcnMuaXNCbGFuayhjb3VudHJ5KSB8fCBIZWxwZXJzLmlzQmxhbmsoY291bnRyeVtmaWVsZF0pKSB7XG4gICAgICB0aGlzLm1vZGVsLmNvdW50cnlJRCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMubW9kZWwuY291bnRyeU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRpc2FibGVkLnN0YXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMudG9vbHRpcC5zdGF0ZSA9IHRoaXMubGFiZWxzLnNlbGVjdENvdW50cnlGaXJzdDtcbiAgICAgIHRoaXMuaW52YWxpZC5zdGF0ZSA9IGZhbHNlO1xuICAgICAgc3RhdGVzVXBkYXRhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgc3RhdGVcbiAgICBpZiAoc3RhdGVzVXBkYXRhYmxlKSB7XG4gICAgICB0aGlzLm1vZGVsLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZXMoKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgdGhpcy5vbklucHV0KG51bGwsICdjb3VudHJ5SUQnKTtcbiAgICB0aGlzLm9uSW5wdXQobnVsbCwgJ3N0YXRlJyk7XG4gIH1cblxuICBvblN0YXRlQ2hhbmdlKGV2dCkge1xuICAgIGNvbnN0IHN0YXRlOiBhbnkgPSBldnQgJiYgZXZ0LnZhbHVlID8gZXZ0LnZhbHVlIDogbnVsbDtcbiAgICB0aGlzLmNvbmZpZy5zdGF0ZS51cGRhdGVkID0gdHJ1ZTtcbiAgICB0aGlzLm1vZGVsLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgdGhpcy5vbklucHV0KG51bGwsICdzdGF0ZScpO1xuICB9XG5cbiAgc2V0U3RhdGVMYWJlbChtb2RlbDogYW55KSB7XG4gICAgY29uc3Qgc3RhdGU6IHN0cmluZyA9IG1vZGVsLnN0YXRlO1xuICAgIGlmICghSGVscGVycy5pc0JsYW5rKHN0YXRlKSkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlLnJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMudmFsaWQuc3RhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5tb2RlbC5zdGF0ZSA9IHN0YXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vZGVsLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlLnJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMudmFsaWQuc3RhdGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVTdGF0ZXMoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5vcHRpb25zICYmICFIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5jb3VudHJ5SUQpKSB7XG4gICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcub3B0aW9ucyA9IChxdWVyeSA9ICcnKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlT3B0aW9ucyhxdWVyeSwgdGhpcy5tb2RlbC5jb3VudHJ5SUQpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuc3RhdGVPcHRpb25zKCcnLCB0aGlzLm1vZGVsLmNvdW50cnlJRCkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgPSByZXN1bHRzO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnRvb2x0aXAuc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlZC5zdGF0ZSA9IHRoaXMuX3JlYWRPbmx5O1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGVMYWJlbCh0aGlzLm1vZGVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc2FibGVkLnN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnRvb2x0aXAuc3RhdGUgPSB0aGlzLmxhYmVscy5ub1N0YXRlc0ZvckNvdW50cnk7XG4gICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlLnJlcXVpcmVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkLnN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWxpZGl0eUNoYW5nZS5lbWl0KCk7XG4gICAgICAgIHRoaXMub25JbnB1dChudWxsLCAnc3RhdGUnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuZGlzYWJsZWQuc3RhdGUgPSB0cnVlO1xuICAgICAgdGhpcy50b29sdGlwLnN0YXRlID0gdGhpcy5sYWJlbHMuc2VsZWN0Q291bnRyeUZpcnN0O1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlLnJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMudmFsaWQuc3RhdGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZU9wdGlvbnMoZmlsdGVyOiBzdHJpbmcgPSAnJywgY291bnRyeUlEOiBudW1iZXIpOiBhbnlbXSB7XG4gICAgaWYgKGNvdW50cnlJRCkge1xuICAgICAgY29uc3QgY291bnRyeTogYW55ID0gZmluZEJ5Q291bnRyeUlkKGNvdW50cnlJRCk7XG4gICAgICBjb25zdCBzdGF0ZXM6IGFueVtdID0gZ2V0U3RhdGVzKGNvdW50cnkubmFtZSk7XG4gICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZXMuZmlsdGVyKChuYW1lKSA9PiBuZXcgUmVnRXhwKGAke2ZpbHRlcn1gLCAnZ2knKS50ZXN0KG5hbWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0ZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDb250cm9sKCkge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLm1vZGVsKTtcbiAgICB0aGlzLm9uSW5wdXQobnVsbCwgJ2NvdW50cnlJRCcpO1xuICAgIHRoaXMub25JbnB1dChudWxsLCAnc3RhdGUnKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIGxldCBsb2FkaW5nQ291bnRyaWVzOiBib29sZWFuID0gZmFsc2U7XG4gICAgaWYgKG1vZGVsKSB7XG4gICAgICBsZXQgY291bnRyeU5hbWU7XG4gICAgICBpZiAobW9kZWwuY291bnRyeU5hbWUgJiYgbW9kZWwuY291bnRyeUlEKSB7XG4gICAgICAgIGNvdW50cnlOYW1lID0gbW9kZWwuY291bnRyeU5hbWU7XG4gICAgICB9IGVsc2UgaWYgKG1vZGVsLmNvdW50cnlJRCkge1xuICAgICAgICBpZiAodGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZyAmJiB0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnLmdldExhYmVscykge1xuICAgICAgICAgIGlmIChIZWxwZXJzLmlzRnVuY3Rpb24odGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZy5nZXRMYWJlbHMpKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9taXNlOiBhbnkgPSB0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnLmdldExhYmVscyhtb2RlbC5jb3VudHJ5SUQpO1xuICAgICAgICAgICAgbG9hZGluZ0NvdW50cmllcyA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS50aGVuKSB7XG4gICAgICAgICAgICAgIHByb21pc2UudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nQ291bnRyaWVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY291bnRyeU5hbWUgPSBIZWxwZXJzLmludGVycG9sYXRlV2l0aEZhbGxiYWNrKHRoaXMuY29uZmlnLmNvdW50cnlJRC5waWNrZXJDb25maWcuZm9ybWF0LCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwgPSBPYmplY3QuYXNzaWduKG1vZGVsLCB7IGNvdW50cnlOYW1lIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGVzKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNvdW50cnlOYW1lKSB7XG4gICAgICAgIGNvdW50cnlOYW1lID0gY291bnRyeU5hbWUudHJpbSgpO1xuICAgICAgICBtb2RlbC5zdGF0ZSA9IG1vZGVsLnN0YXRlIHx8ICcnO1xuICAgICAgICB0aGlzLm1vZGVsID0gT2JqZWN0LmFzc2lnbihtb2RlbCwgeyBjb3VudHJ5TmFtZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICAgIH1cbiAgICAgIGlmICghbG9hZGluZ0NvdW50cmllcyAmJiAhSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuY291bnRyeUlEKSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlcygpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmZpZWxkTGlzdC5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLm9uSW5wdXQobnVsbCwgZmllbGQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmYXVsdFN0YXRlQ29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkOiAndmFsdWUnLFxuICAgICAgZm9ybWF0OiAnJGxhYmVsJyxcbiAgICAgIG9wdGlvbnM6IChxdWVyeSA9ICcnLCBjb3VudHJ5SUQpID0+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmdldFN0YXRlT3B0aW9ucyhxdWVyeSwgY291bnRyeUlEKSk7XG4gICAgICB9LFxuICAgICAgZ2V0TGFiZWxzOiAoc3RhdGU6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN0YXRlKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmYXVsdENvdW50cnlDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGQ6ICd2YWx1ZScsXG4gICAgICBmb3JtYXQ6ICckbGFiZWwnLFxuICAgICAgb3B0aW9uczogKHF1ZXJ5OiBzdHJpbmcgPSAnJykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICBsZXQgY291bnRyaWVzID0gQ09VTlRSSUVTO1xuICAgICAgICAgIGlmIChxdWVyeSkge1xuICAgICAgICAgICAgY291bnRyaWVzID0gY291bnRyaWVzLmZpbHRlcigoY291bnRyeSkgPT4gbmV3IFJlZ0V4cChgJHtxdWVyeX1gLCAnZ2knKS50ZXN0KGNvdW50cnkubmFtZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjb3VudHJpZXMubWFwKChjb3VudHJ5KSA9PiAoeyB2YWx1ZTogY291bnRyeS5pZCwgbGFiZWw6IGNvdW50cnkubmFtZSB9KSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBnZXRMYWJlbHM6IChjb3VudHJ5SUQpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBjb3VudHJ5OiBhbnkgPSBmaW5kQnlDb3VudHJ5SWQoY291bnRyeUlEKTtcbiAgICAgICAgICBpZiAoY291bnRyeSkge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IHZhbHVlOiBjb3VudHJ5LmlkLCBsYWJlbDogY291bnRyeS5uYW1lIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKCcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXX0=