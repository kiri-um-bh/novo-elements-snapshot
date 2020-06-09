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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2V4dHJhcy9hZGRyZXNzL0FkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztNQUc5QyxzQkFBc0IsR0FBRztJQUM3QixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsRUFBQztJQUNqRCxLQUFLLEVBQUUsSUFBSTtDQUNaOzs7O0FBRUQsK0NBUUM7OztJQVBDLDBDQUFjOztJQUNkLDZDQUFrQjs7SUFDbEIsOENBQWtCOztJQUNsQixpREFBbUI7O0lBQ25CLDJDQUFnQjs7SUFDaEIsNENBQWtCOztJQUNsQiw2Q0FBbUI7Ozs7O0FBR3JCLHVDQVNDOzs7SUFSQyxxQ0FBbUI7O0lBQ25CLHFDQUFtQjs7SUFDbkIscUNBQXFDOztJQUNyQyxxQ0FBcUM7O0lBQ3JDLGlDQUFpQzs7SUFDakMsa0NBQWtDOztJQUNsQyxnQ0FBZ0M7O0lBQ2hDLHNDQUFzQzs7QUF1SnhDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUF1QzdCLFlBQW1CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBcENuQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBYzFCLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUFrQixDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFekYsa0JBQWE7OztRQUFhLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQztRQUNwQyxtQkFBYzs7O1FBQWEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDO1FBQ3JDLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLHFCQUFnQixHQUFRLEVBQUUsQ0FBQztRQUMzQixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBRWhCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFFckIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9DLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5QyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0MsbUJBQWMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVSLENBQUM7Ozs7O0lBbkNoRCxJQUNJLFFBQVEsQ0FBQyxRQUFpQjtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7OztJQXlCRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FDbEI7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNqQjtRQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTzs7OztRQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHO29CQUNuQixNQUFNLEVBQUUsSUFBSTtpQkFDYixDQUFDO2FBQ0g7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0M7WUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO2dCQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDcEM7WUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO2dCQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxLQUFLLEtBQUssV0FBVyxFQUFFO2dCQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLEVBQUU7b0JBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztpQkFDckU7Z0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7YUFDN0Y7WUFDRCxJQUFJLEtBQUssS0FBSyxPQUFPLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksRUFBRTtvQkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO2lCQUMxRjtnQkFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQztnQkFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTzs7OztnQkFBRyxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsRUFBRTtvQkFDdkQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDLENBQUEsQ0FBQztnQkFDRixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUNwRTtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBYTs7WUFDZixLQUFLLEdBQUcsSUFBSTtRQUNoQixJQUNFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUMvQixDQUFDLENBQUMsS0FBSyxLQUFLLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqRyxDQUFDLENBQ0MsS0FBSyxLQUFLLE9BQU87Z0JBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUTtnQkFDM0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7b0JBQ2pDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN2RSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7d0JBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVk7d0JBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxjQUFjO3dCQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNqRSxFQUNEO1lBQ0EsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNmO2FBQU0sSUFDTCxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQ3ZEO1lBQ0EsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNmO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBYTs7WUFDakIsT0FBTyxHQUFHLEtBQUs7O1lBQ2YsZ0JBQWdCLEdBQUcsS0FBSztRQUM1QixJQUNFLENBQUMsS0FBSyxLQUFLLFdBQVc7WUFDcEIsS0FBSyxLQUFLLE9BQU87WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRO1lBQzNCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsS0FBSyxLQUFLLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDL0gsQ0FBQyxLQUFLLEtBQUssT0FBTztnQkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRO2dCQUMzQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPO2dCQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZO2dCQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsY0FBYztnQkFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQzNEO1lBQ0EsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNoQjthQUFNLElBQ0wsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUN2RDtZQUNBLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDZixnQkFBZ0IsR0FBRyxJQUFJLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQVksRUFBRSxLQUFhO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxLQUFZLEVBQUUsS0FBYTtRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxLQUFZLEVBQUUsS0FBYTtRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLEdBQUc7O2NBQ1gsT0FBTyxHQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJOztZQUMxRCxLQUFVOztZQUNWLGVBQWUsR0FBRyxLQUFLO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7WUFDdEMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7U0FDbEQ7UUFDRCxJQUFJLE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2pHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDL0IsZUFBZSxHQUFHLElBQUksQ0FBQztTQUN4QjthQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3RFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUM7WUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQzNCLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDeEI7UUFFRCxlQUFlO1FBQ2YsSUFBSSxlQUFlLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQzdCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxHQUFHOztjQUNULEtBQUssR0FBUSxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBVTs7Y0FDaEIsS0FBSyxHQUFXLEtBQUssQ0FBQyxLQUFLO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDekI7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDMUI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQzFCO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNwRixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTzs7OztZQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxFQUFFO2dCQUN0RCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEQsQ0FBQyxDQUFBLENBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztnQkFDeEQsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO29CQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7b0JBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNoQztxQkFBTTtvQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUM7b0JBQ3BELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO3dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7cUJBQ3pCO2lCQUNGO2dCQUNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzlCLENBQUMsRUFBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1lBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1lBQ3BELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDMUI7U0FDRjtJQUNILENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLFNBQWlCO1FBQzVDLElBQUksU0FBUyxFQUFFOztrQkFDUCxPQUFPLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQzs7a0JBQ3BDLE1BQU0sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUN0QyxJQUFJLE1BQU0sRUFBRTtnQkFDVixPQUFPLE1BQU0sQ0FBQyxNQUFNOzs7O2dCQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO2FBQzFFO1lBQ0QsT0FBTyxNQUFNLENBQUM7U0FDZjthQUFNO1lBQ0wsT0FBTyxFQUFFLENBQUM7U0FDWDtJQUNILENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBSzs7WUFDVixnQkFBZ0IsR0FBRyxLQUFLO1FBQzVCLElBQUksS0FBSyxFQUFFOztnQkFDTCxXQUFXO1lBQ2YsSUFBSSxLQUFLLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUU7Z0JBQ3hDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQ2pDO2lCQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRTtnQkFDMUIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRTtvQkFDdEYsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRTs7OEJBQzlELE9BQU8sR0FBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7d0JBQzlFLGdCQUFnQixHQUFHLElBQUksQ0FBQzt3QkFDeEIsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFOzRCQUNoQixPQUFPLENBQUMsSUFBSTs7Ozs0QkFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dDQUN0QixnQkFBZ0IsR0FBRyxLQUFLLENBQUM7Z0NBQ3pCLFdBQVcsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztnQ0FDakcsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7Z0NBQ25ELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs0QkFDdEIsQ0FBQyxFQUFDLENBQUM7eUJBQ0o7cUJBQ0Y7aUJBQ0Y7YUFDRjtZQUNELElBQUksV0FBVyxFQUFFO2dCQUNmLFdBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO2FBQ3BEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ3BCO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUMvRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckI7U0FDRjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTzs7OztRQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQVk7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRU8scUJBQXFCO1FBQzNCLE9BQU87WUFDTCxLQUFLLEVBQUUsT0FBTztZQUNkLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLE9BQU87Ozs7O1lBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFO2dCQUNqQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNqRSxDQUFDLENBQUE7WUFDRCxTQUFTOzs7O1lBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRTtnQkFDM0IsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQTtTQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLHVCQUF1QjtRQUM3QixPQUFPO1lBQ0wsS0FBSyxFQUFFLE9BQU87WUFDZCxNQUFNLEVBQUUsUUFBUTtZQUNoQixPQUFPOzs7O1lBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFLEVBQUU7Z0JBQ3RCLE9BQU8sSUFBSSxPQUFPOzs7O2dCQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7O3dCQUN6QixTQUFTLEdBQUcsU0FBUztvQkFDekIsSUFBSSxLQUFLLEVBQUU7d0JBQ1QsU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNOzs7O3dCQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztxQkFDNUY7b0JBQ0QsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUc7Ozs7b0JBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO2dCQUMzRixDQUFDLEVBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQTtZQUNELFNBQVM7Ozs7WUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUN2QixPQUFPLElBQUksT0FBTzs7OztnQkFBQyxDQUFDLE9BQVksRUFBRSxFQUFFOzswQkFDNUIsT0FBTyxHQUFRLGVBQWUsQ0FBQyxTQUFTLENBQUM7b0JBQy9DLElBQUksT0FBTyxFQUFFO3dCQUNYLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztxQkFDckQ7eUJBQU07d0JBQ0wsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUNiO2dCQUNILENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFBO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQTdmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0lUO2FBQ0Y7Ozs7WUFuTFEsZ0JBQWdCOzs7cUJBcUx0QixLQUFLO3VCQUdMLEtBQUs7cUJBMEJMLE1BQU07b0JBRU4sTUFBTTttQkFFTixNQUFNOzZCQUVOLE1BQU07Ozs7SUFuQ1Asb0NBQzBCOzs7OztJQUMxQix1Q0FBMEI7O0lBYzFCLG9DQUF3Qjs7SUFDeEIsdUNBQXlGOztJQUN6RixtQ0FBVzs7SUFDWCwyQ0FBb0M7O0lBQ3BDLDRDQUFxQzs7SUFDckMscUNBQWtCOztJQUNsQixxQ0FBa0I7O0lBQ2xCLHNDQUFtQjs7SUFDbkIsOENBQTJCOztJQUMzQixtQ0FBZ0I7O0lBQ2hCLDBDQUFrQjs7SUFDbEIscUNBQWtCOztJQUNsQiwwQ0FBcUI7O0lBQ3JCLG9DQUMrQzs7SUFDL0MsbUNBQzhDOztJQUM5QyxrQ0FDNkM7O0lBQzdDLDRDQUN1RDs7SUFFM0Msb0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ09VTlRSSUVTLCBmaW5kQnlDb3VudHJ5SWQsIGdldFN0YXRlcyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2NvdW50cmllcy9Db3VudHJpZXMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IEFERFJFU1NfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvQWRkcmVzc0VsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm92b0FkZHJlc3NTdWJmaWVsZENvbmZpZyB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHJlcXVpcmVkOiBib29sZWFuO1xuICBtYXhsZW5ndGg6IG51bWJlcjtcbiAgcGlja2VyQ29uZmlnPzogYW55O1xuICBoaWRkZW46IGJvb2xlYW47XG4gIHVwZGF0ZWQ/OiBib29sZWFuO1xuICByZWFkT25seT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm92b0FkZHJlc3NDb25maWcge1xuICByZXF1aXJlZD86IGJvb2xlYW47XG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbiAgYWRkcmVzczE/OiBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnO1xuICBhZGRyZXNzMj86IE5vdm9BZGRyZXNzU3ViZmllbGRDb25maWc7XG4gIGNpdHk/OiBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnO1xuICBzdGF0ZT86IE5vdm9BZGRyZXNzU3ViZmllbGRDb25maWc7XG4gIHppcD86IE5vdm9BZGRyZXNzU3ViZmllbGRDb25maWc7XG4gIGNvdW50cnlJRD86IE5vdm9BZGRyZXNzU3ViZmllbGRDb25maWc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tYWRkcmVzcycsXG4gIHByb3ZpZGVyczogW0FERFJFU1NfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuXG4gICAgICAqbmdJZj1cIiFjb25maWc/LmFkZHJlc3MxPy5oaWRkZW5cIlxuICAgICAgY2xhc3M9XCJzdHJlZXQtYWRkcmVzc1wiXG4gICAgICBbY2xhc3MuaW52YWxpZF09XCJpbnZhbGlkLmFkZHJlc3MxXCJcbiAgICAgIFtjbGFzcy5mb2N1c109XCJmb2N1c2VkLmFkZHJlc3MxXCJcbiAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZC5hZGRyZXNzMVwiXG4gICAgPlxuICAgICAgPGlcbiAgICAgICAgKm5nSWY9XCJjb25maWcuYWRkcmVzczEucmVxdWlyZWRcIlxuICAgICAgICBjbGFzcz1cInJlcXVpcmVkLWluZGljYXRvciBhZGRyZXNzMVwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsgJ2JoaS1jaXJjbGUnOiAhdmFsaWQuYWRkcmVzczEsICdiaGktY2hlY2snOiB2YWxpZC5hZGRyZXNzMSB9XCJcbiAgICAgID5cbiAgICAgIDwvaT5cbiAgICAgIDxpbnB1dFxuICAgICAgICBbY2xhc3MubWF4bGVuZ3RoLWVycm9yXT1cImludmFsaWRNYXhsZW5ndGguYWRkcmVzczFcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGlkPVwiYWRkcmVzczFcIlxuICAgICAgICBuYW1lPVwiYWRkcmVzczFcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLmFkZHJlc3MxLmxhYmVsXCJcbiAgICAgICAgW21heGxlbmd0aF09XCJjb25maWc/LmFkZHJlc3MxPy5tYXhsZW5ndGhcIlxuICAgICAgICBhdXRvY29tcGxldGU9XCJzaGlwcGluZyBzdHJlZXQtYWRkcmVzcyBhZGRyZXNzLWxpbmUtMVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwuYWRkcmVzczFcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVDb250cm9sKClcIlxuICAgICAgICAoZm9jdXMpPVwiaXNGb2N1c2VkKCRldmVudCwgJ2FkZHJlc3MxJylcIlxuICAgICAgICAoYmx1cik9XCJpc0JsdXJyZWQoJGV2ZW50LCAnYWRkcmVzczEnKVwiXG4gICAgICAgIChpbnB1dCk9XCJvbklucHV0KCRldmVudCwgJ2FkZHJlc3MxJylcIlxuICAgICAgLz5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW5cbiAgICAgICpuZ0lmPVwiIWNvbmZpZz8uYWRkcmVzczI/LmhpZGRlblwiXG4gICAgICBjbGFzcz1cImFwdCBzdWl0ZVwiXG4gICAgICBbY2xhc3MuaW52YWxpZF09XCJpbnZhbGlkLmFkZHJlc3MyXCJcbiAgICAgIFtjbGFzcy5mb2N1c109XCJmb2N1c2VkLmFkZHJlc3MyXCJcbiAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZC5hZGRyZXNzMlwiXG4gICAgPlxuICAgICAgPGlcbiAgICAgICAgKm5nSWY9XCJjb25maWcuYWRkcmVzczIucmVxdWlyZWRcIlxuICAgICAgICBjbGFzcz1cInJlcXVpcmVkLWluZGljYXRvciBhZGRyZXNzMlwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsgJ2JoaS1jaXJjbGUnOiAhdmFsaWQuYWRkcmVzczIsICdiaGktY2hlY2snOiB2YWxpZC5hZGRyZXNzMiB9XCJcbiAgICAgID5cbiAgICAgIDwvaT5cbiAgICAgIDxpbnB1dFxuICAgICAgICBbY2xhc3MubWF4bGVuZ3RoLWVycm9yXT1cImludmFsaWRNYXhsZW5ndGguYWRkcmVzczJcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGlkPVwiYWRkcmVzczJcIlxuICAgICAgICBuYW1lPVwiYWRkcmVzczJcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLmFkZHJlc3MyLmxhYmVsXCJcbiAgICAgICAgW21heGxlbmd0aF09XCJjb25maWc/LmFkZHJlc3MyPy5tYXhsZW5ndGhcIlxuICAgICAgICBhdXRvY29tcGxldGU9XCJzaGlwcGluZyBhZGRyZXNzLWxpbmUtMlwiXG4gICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwuYWRkcmVzczJcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVDb250cm9sKClcIlxuICAgICAgICAoZm9jdXMpPVwiaXNGb2N1c2VkKCRldmVudCwgJ2FkZHJlc3MyJylcIlxuICAgICAgICAoYmx1cik9XCJpc0JsdXJyZWQoJGV2ZW50LCAnYWRkcmVzczInKVwiXG4gICAgICAgIChpbnB1dCk9XCJvbklucHV0KCRldmVudCwgJ2FkZHJlc3MyJylcIlxuICAgICAgLz5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW5cbiAgICAgICpuZ0lmPVwiIWNvbmZpZz8uY2l0eT8uaGlkZGVuXCJcbiAgICAgIGNsYXNzPVwiY2l0eSBsb2NhbGl0eVwiXG4gICAgICBbY2xhc3MuaW52YWxpZF09XCJpbnZhbGlkLmNpdHlcIlxuICAgICAgW2NsYXNzLmZvY3VzXT1cImZvY3VzZWQuY2l0eVwiXG4gICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWQuY2l0eVwiXG4gICAgPlxuICAgICAgPGkgKm5nSWY9XCJjb25maWcuY2l0eS5yZXF1aXJlZFwiIGNsYXNzPVwicmVxdWlyZWQtaW5kaWNhdG9yXCIgW25nQ2xhc3NdPVwieyAnYmhpLWNpcmNsZSc6ICF2YWxpZC5jaXR5LCAnYmhpLWNoZWNrJzogdmFsaWQuY2l0eSB9XCI+IDwvaT5cbiAgICAgIDxpbnB1dFxuICAgICAgICBbY2xhc3MubWF4bGVuZ3RoLWVycm9yXT1cImludmFsaWRNYXhsZW5ndGguY2l0eVwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgaWQ9XCJjaXR5XCJcbiAgICAgICAgbmFtZT1cImNpdHlcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLmNpdHkubGFiZWxcIlxuICAgICAgICBhdXRvY29tcGxldGU9XCJzaGlwcGluZyBjaXR5IGxvY2FsaXR5XCJcbiAgICAgICAgW21heGxlbmd0aF09XCJjb25maWc/LmNpdHk/Lm1heGxlbmd0aFwiXG4gICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwuY2l0eVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZUNvbnRyb2woKVwiXG4gICAgICAgIChmb2N1cyk9XCJpc0ZvY3VzZWQoJGV2ZW50LCAnY2l0eScpXCJcbiAgICAgICAgKGJsdXIpPVwiaXNCbHVycmVkKCRldmVudCwgJ2NpdHknKVwiXG4gICAgICAgIChpbnB1dCk9XCJvbklucHV0KCRldmVudCwgJ2NpdHknKVwiXG4gICAgICAvPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhblxuICAgICAgKm5nSWY9XCIhY29uZmlnPy5zdGF0ZT8uaGlkZGVuXCJcbiAgICAgIGNsYXNzPVwic3RhdGUgcmVnaW9uXCJcbiAgICAgIFtjbGFzcy5pbnZhbGlkXT1cImludmFsaWQuc3RhdGVcIlxuICAgICAgW2NsYXNzLmZvY3VzXT1cImZvY3VzZWQuc3RhdGVcIlxuICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkLnN0YXRlXCJcbiAgICAgIFt0b29sdGlwXT1cInRvb2x0aXAuc3RhdGVcIlxuICAgID5cbiAgICAgIDxpICpuZ0lmPVwiY29uZmlnLnN0YXRlLnJlcXVpcmVkXCIgY2xhc3M9XCJyZXF1aXJlZC1pbmRpY2F0b3JcIiBbbmdDbGFzc109XCJ7ICdiaGktY2lyY2xlJzogIXZhbGlkLnN0YXRlLCAnYmhpLWNoZWNrJzogdmFsaWQuc3RhdGUgfVwiPiA8L2k+XG4gICAgICA8bm92by1waWNrZXJcbiAgICAgICAgW2NvbmZpZ109XCJjb25maWc/LnN0YXRlPy5waWNrZXJDb25maWdcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29uZmlnPy5zdGF0ZT8ubGFiZWxcIlxuICAgICAgICAoY2hhbmdlZCk9XCJvblN0YXRlQ2hhbmdlKCRldmVudClcIlxuICAgICAgICBhdXRvY29tcGxldGU9XCJzaGlwcGluZyByZWdpb25cIlxuICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLnN0YXRlXCJcbiAgICAgICAgW2Rpc2FibGVQaWNrZXJJbnB1dF09XCJkaXNhYmxlZC5zdGF0ZVwiXG4gICAgICA+PC9ub3ZvLXBpY2tlcj5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW5cbiAgICAgICpuZ0lmPVwiIWNvbmZpZz8uemlwPy5oaWRkZW5cIlxuICAgICAgY2xhc3M9XCJ6aXAgcG9zdGFsLWNvZGVcIlxuICAgICAgW2NsYXNzLmludmFsaWRdPVwiaW52YWxpZC56aXBcIlxuICAgICAgW2NsYXNzLmZvY3VzXT1cImZvY3VzZWQuemlwXCJcbiAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZC56aXBcIlxuICAgID5cbiAgICAgIDxpICpuZ0lmPVwiY29uZmlnLnppcC5yZXF1aXJlZFwiIGNsYXNzPVwicmVxdWlyZWQtaW5kaWNhdG9yXCIgW25nQ2xhc3NdPVwieyAnYmhpLWNpcmNsZSc6ICF2YWxpZC56aXAsICdiaGktY2hlY2snOiB2YWxpZC56aXAgfVwiPiA8L2k+XG4gICAgICA8aW5wdXRcbiAgICAgICAgW2NsYXNzLm1heGxlbmd0aC1lcnJvcl09XCJpbnZhbGlkTWF4bGVuZ3RoLnppcFwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgaWQ9XCJ6aXBcIlxuICAgICAgICBuYW1lPVwiemlwXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy56aXAubGFiZWxcIlxuICAgICAgICBhdXRvY29tcGxldGU9XCJzaGlwcGluZyBwb3N0YWwtY29kZVwiXG4gICAgICAgIFttYXhsZW5ndGhdPVwiY29uZmlnPy56aXA/Lm1heGxlbmd0aFwiXG4gICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwuemlwXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlQ29udHJvbCgpXCJcbiAgICAgICAgKGZvY3VzKT1cImlzRm9jdXNlZCgkZXZlbnQsICd6aXAnKVwiXG4gICAgICAgIChibHVyKT1cImlzQmx1cnJlZCgkZXZlbnQsICd6aXAnKVwiXG4gICAgICAgIChpbnB1dCk9XCJvbklucHV0KCRldmVudCwgJ3ppcCcpXCJcbiAgICAgIC8+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuXG4gICAgICAqbmdJZj1cIiFjb25maWc/LmNvdW50cnlJRD8uaGlkZGVuXCJcbiAgICAgIGNsYXNzPVwiY291bnRyeS1uYW1lXCJcbiAgICAgIFtjbGFzcy5pbnZhbGlkXT1cImludmFsaWQuY291bnRyeUlEXCJcbiAgICAgIFtjbGFzcy5mb2N1c109XCJmb2N1c2VkLmNvdW50cnlJRFwiXG4gICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWQuY291bnRyeUlEXCJcbiAgICA+XG4gICAgICA8aVxuICAgICAgICAqbmdJZj1cImNvbmZpZy5jb3VudHJ5SUQucmVxdWlyZWRcIlxuICAgICAgICBjbGFzcz1cInJlcXVpcmVkLWluZGljYXRvclwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsgJ2JoaS1jaXJjbGUnOiAhdmFsaWQuY291bnRyeUlELCAnYmhpLWNoZWNrJzogdmFsaWQuY291bnRyeUlEIH1cIlxuICAgICAgPlxuICAgICAgPC9pPlxuICAgICAgPG5vdm8tcGlja2VyXG4gICAgICAgIFtjb25maWddPVwiY29uZmlnPy5jb3VudHJ5SUQ/LnBpY2tlckNvbmZpZ1wiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb25maWcuY291bnRyeUlELmxhYmVsXCJcbiAgICAgICAgKGNoYW5nZWQpPVwib25Db3VudHJ5Q2hhbmdlKCRldmVudClcIlxuICAgICAgICBhdXRvY29tcGxldGU9XCJzaGlwcGluZyBjb3VudHJ5XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5jb3VudHJ5SURcIlxuICAgICAgICBbZGlzYWJsZVBpY2tlcklucHV0XT1cImRpc2FibGVkLmNvdW50cnlJRFwiXG4gICAgICA+PC9ub3ZvLXBpY2tlcj5cbiAgICA8L3NwYW4+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9BZGRyZXNzRWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBASW5wdXQoKVxuICBjb25maWc6IE5vdm9BZGRyZXNzQ29uZmlnO1xuICBwcml2YXRlIF9yZWFkT25seSA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZXQgcmVhZE9ubHkocmVhZE9ubHk6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZWFkT25seSA9IHJlYWRPbmx5O1xuICAgIHRoaXMuZmllbGRMaXN0LmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZGlzYWJsZWRbZmllbGRdID0gdGhpcy5fcmVhZE9ubHk7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMubW9kZWwpIHtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGVzKCk7XG4gICAgfVxuICB9XG4gIGdldCByZWFkT25seSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVhZE9ubHk7XG4gIH1cbiAgc3RhdGVzOiBBcnJheTxhbnk+ID0gW107XG4gIGZpZWxkTGlzdDogQXJyYXk8c3RyaW5nPiA9IFsnYWRkcmVzczEnLCAnYWRkcmVzczInLCAnY2l0eScsICdzdGF0ZScsICd6aXAnLCAnY291bnRyeUlEJ107XG4gIG1vZGVsOiBhbnk7XG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG4gIGZvY3VzZWQ6IGFueSA9IHt9O1xuICBpbnZhbGlkOiBhbnkgPSB7fTtcbiAgZGlzYWJsZWQ6IGFueSA9IHt9O1xuICBpbnZhbGlkTWF4bGVuZ3RoOiBhbnkgPSB7fTtcbiAgdmFsaWQ6IGFueSA9IHt9O1xuICBzdGF0ZU9wdGlvbnM6IGFueTtcbiAgdG9vbHRpcDogYW55ID0ge307XG4gIGluaXRDb21wbGV0ZSA9IGZhbHNlO1xuICBAT3V0cHV0KClcbiAgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgdmFsaWRpdHlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnID0ge307XG4gICAgfVxuICAgIGlmICh0aGlzLm1vZGVsKSB7XG4gICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5tb2RlbCk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLm1vZGVsKSB7XG4gICAgICB0aGlzLm1vZGVsID0ge307XG4gICAgfVxuICAgIHRoaXMuaW5pdENvbmZpZygpO1xuICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5jb3VudHJ5SUQpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRDb25maWcoKTogdm9pZCB7XG4gICAgdGhpcy5maWVsZExpc3QuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5oYXNPd25Qcm9wZXJ0eShmaWVsZCkpIHtcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdID0ge1xuICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5jb25maWdbZmllbGRdLmhhc093blByb3BlcnR5KCdsYWJlbCcpKSB7XG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5sYWJlbCA9IHRoaXMubGFiZWxzW2ZpZWxkXTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5yZXF1aXJlZCkge1xuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY29uZmlnW2ZpZWxkXS5yZWFkT25seSB8fCB0aGlzLmNvbmZpZy5yZWFkT25seSkge1xuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpc2FibGVkW2ZpZWxkXSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoZmllbGQgPT09ICdjb3VudHJ5SUQnKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWdbZmllbGRdLnBpY2tlckNvbmZpZykge1xuICAgICAgICAgIHRoaXMuY29uZmlnLmNvdW50cnlJRC5waWNrZXJDb25maWcgPSB0aGlzLmdldERlZmF1bHRDb3VudHJ5Q29uZmlnKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyA9IHRoaXMuY29uZmlnLmNvdW50cnlJRC5waWNrZXJDb25maWcub3B0aW9ucztcbiAgICAgIH1cbiAgICAgIGlmIChmaWVsZCA9PT0gJ3N0YXRlJykge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnW2ZpZWxkXS5waWNrZXJDb25maWcpIHtcbiAgICAgICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcgPSB0aGlzLmdldERlZmF1bHRTdGF0ZUNvbmZpZygpO1xuICAgICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgPSB0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnLm9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZU9wdGlvbnMgPSB0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnLm9wdGlvbnM7XG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5waWNrZXJDb25maWcub3B0aW9ucyA9IChxdWVyeSA9ICcnKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVPcHRpb25zKHF1ZXJ5LCB0aGlzLm1vZGVsLmNvdW50cnlJRCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgPSB0aGlzLnN0YXRlT3B0aW9ucztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzVmFsaWQoZmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgaWYgKFxuICAgICAgKCh0aGlzLmNvbmZpZ1tmaWVsZF0ucmVxdWlyZWQgJiYgKEhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsW2ZpZWxkXSkgfHwgSGVscGVycy5pc0VtcHR5KHRoaXMubW9kZWxbZmllbGRdKSkpIHx8XG4gICAgICAgICF0aGlzLmNvbmZpZ1tmaWVsZF0ucmVxdWlyZWQpICYmXG4gICAgICAhKGZpZWxkID09PSAnY291bnRyeUlEJyAmJiB0aGlzLmNvbmZpZ1tmaWVsZF0ucmVxdWlyZWQgJiYgIUhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsLmNvdW50cnlJRCkpICYmXG4gICAgICAhKFxuICAgICAgICBmaWVsZCA9PT0gJ3N0YXRlJyAmJlxuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucmVxdWlyZWQgJiZcbiAgICAgICAgKCFIZWxwZXJzLmlzRW1wdHkodGhpcy5tb2RlbC5zdGF0ZSkgfHxcbiAgICAgICAgICAoKEhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsLnN0YXRlKSB8fCBIZWxwZXJzLmlzRW1wdHkodGhpcy5tb2RlbC5zdGF0ZSkpICYmXG4gICAgICAgICAgICAhSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuY291bnRyeU5hbWUpICYmXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcgJiZcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyAmJlxuICAgICAgICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zLmxlbmd0aCA9PT0gMCkpXG4gICAgICApXG4gICAgKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAhSGVscGVycy5pc0VtcHR5KHRoaXMubW9kZWxbZmllbGRdKSAmJlxuICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLmNvbmZpZ1tmaWVsZF0ubWF4bGVuZ3RoKSAmJlxuICAgICAgdGhpcy5jb25maWdbZmllbGRdLm1heGxlbmd0aCA8IHRoaXMubW9kZWxbZmllbGRdLmxlbmd0aFxuICAgICkge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy52YWxpZFtmaWVsZF0gPSB2YWxpZDtcbiAgfVxuXG4gIGlzSW52YWxpZChmaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IGludmFsaWQgPSBmYWxzZTtcbiAgICBsZXQgaW52YWxpZE1heGxlbmd0aCA9IGZhbHNlO1xuICAgIGlmIChcbiAgICAgIChmaWVsZCAhPT0gJ2NvdW50cnlJRCcgJiZcbiAgICAgICAgZmllbGQgIT09ICdzdGF0ZScgJiZcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkICYmXG4gICAgICAgIEhlbHBlcnMuaXNFbXB0eSh0aGlzLm1vZGVsW2ZpZWxkXSkgJiZcbiAgICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsW2ZpZWxkXSkpIHx8XG4gICAgICAoZmllbGQgPT09ICdjb3VudHJ5SUQnICYmIHRoaXMuY29uZmlnW2ZpZWxkXS5yZXF1aXJlZCAmJiBIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5jb3VudHJ5TmFtZSkgJiYgdGhpcy5jb25maWdbZmllbGRdLnVwZGF0ZWQpIHx8XG4gICAgICAoZmllbGQgPT09ICdzdGF0ZScgJiZcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkICYmXG4gICAgICAgIChIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5zdGF0ZSkgfHwgSGVscGVycy5pc0VtcHR5KHRoaXMubW9kZWwuc3RhdGUpKSAmJlxuICAgICAgICAhSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuY291bnRyeUlEKSAmJlxuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0udXBkYXRlZCAmJlxuICAgICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcgJiZcbiAgICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zICYmXG4gICAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucy5sZW5ndGggPiAwKVxuICAgICkge1xuICAgICAgaW52YWxpZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICFIZWxwZXJzLmlzRW1wdHkodGhpcy5tb2RlbFtmaWVsZF0pICYmXG4gICAgICAhSGVscGVycy5pc0JsYW5rKHRoaXMuY29uZmlnW2ZpZWxkXS5tYXhsZW5ndGgpICYmXG4gICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ubWF4bGVuZ3RoIDwgdGhpcy5tb2RlbFtmaWVsZF0ubGVuZ3RoXG4gICAgKSB7XG4gICAgICBpbnZhbGlkID0gdHJ1ZTtcbiAgICAgIGludmFsaWRNYXhsZW5ndGggPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmludmFsaWRbZmllbGRdID0gaW52YWxpZDtcbiAgICB0aGlzLmludmFsaWRNYXhsZW5ndGhbZmllbGRdID0gaW52YWxpZE1heGxlbmd0aDtcbiAgfVxuXG4gIG9uSW5wdXQoZXZlbnQ6IEV2ZW50LCBmaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5pc0ludmFsaWQoZmllbGQpO1xuICAgIHRoaXMuaXNWYWxpZChmaWVsZCk7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHsgdmFsdWU6IHRoaXMubW9kZWxbZmllbGRdLCBmaWVsZCB9KTtcbiAgICB9XG4gIH1cblxuICBpc0ZvY3VzZWQoZXZlbnQ6IEV2ZW50LCBmaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c2VkW2ZpZWxkXSA9IHRydWU7XG4gICAgdGhpcy5mb2N1cy5lbWl0KHsgZXZlbnQsIGZpZWxkIH0pO1xuICB9XG5cbiAgaXNCbHVycmVkKGV2ZW50OiBFdmVudCwgZmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZFtmaWVsZF0gPSBmYWxzZTtcbiAgICB0aGlzLmJsdXIuZW1pdCh7IGV2ZW50LCBmaWVsZCB9KTtcbiAgfVxuXG4gIG9uQ291bnRyeUNoYW5nZShldnQpIHtcbiAgICBjb25zdCBjb3VudHJ5OiBhbnkgPSBldnQgJiYgZXZ0LnJhd1ZhbHVlID8gZXZ0LnJhd1ZhbHVlIDogbnVsbDtcbiAgICBsZXQgZmllbGQ6IGFueTtcbiAgICBsZXQgc3RhdGVzVXBkYXRhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5jb25maWcuY291bnRyeUlELnVwZGF0ZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnKSB7XG4gICAgICBmaWVsZCA9IHRoaXMuY29uZmlnLmNvdW50cnlJRC5waWNrZXJDb25maWcuZmllbGQ7XG4gICAgfVxuICAgIGlmIChjb3VudHJ5ICYmIGZpZWxkICYmICFIZWxwZXJzLmlzQmxhbmsoY291bnRyeVtmaWVsZF0pICYmIHRoaXMubW9kZWwuY291bnRyeUlEICE9PSBjb3VudHJ5W2ZpZWxkXSkge1xuICAgICAgdGhpcy5tb2RlbC5jb3VudHJ5SUQgPSBjb3VudHJ5W2ZpZWxkXTtcbiAgICAgIHRoaXMubW9kZWwuY291bnRyeU5hbWUgPSBIZWxwZXJzLmludGVycG9sYXRlKHRoaXMuY29uZmlnLmNvdW50cnlJRC5waWNrZXJDb25maWcuZm9ybWF0LCBjb3VudHJ5KTtcbiAgICAgIHRoaXMuZGlzYWJsZWQuc3RhdGUgPSBmYWxzZTtcbiAgICAgIHRoaXMudG9vbHRpcC5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHN0YXRlc1VwZGF0YWJsZSA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChIZWxwZXJzLmlzQmxhbmsoY291bnRyeSkgfHwgSGVscGVycy5pc0JsYW5rKGNvdW50cnlbZmllbGRdKSkge1xuICAgICAgdGhpcy5tb2RlbC5jb3VudHJ5SUQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLm1vZGVsLmNvdW50cnlOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kaXNhYmxlZC5zdGF0ZSA9IHRydWU7XG4gICAgICB0aGlzLnRvb2x0aXAuc3RhdGUgPSB0aGlzLmxhYmVscy5zZWxlY3RDb3VudHJ5Rmlyc3Q7XG4gICAgICB0aGlzLmludmFsaWQuc3RhdGUgPSBmYWxzZTtcbiAgICAgIHN0YXRlc1VwZGF0YWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHN0YXRlXG4gICAgaWYgKHN0YXRlc1VwZGF0YWJsZSkge1xuICAgICAgdGhpcy5tb2RlbC5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGVzKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgIHRoaXMub25JbnB1dChudWxsLCAnY291bnRyeUlEJyk7XG4gICAgdGhpcy5vbklucHV0KG51bGwsICdzdGF0ZScpO1xuICB9XG5cbiAgb25TdGF0ZUNoYW5nZShldnQpIHtcbiAgICBjb25zdCBzdGF0ZTogYW55ID0gZXZ0ICYmIGV2dC52YWx1ZSA/IGV2dC52YWx1ZSA6IG51bGw7XG4gICAgdGhpcy5jb25maWcuc3RhdGUudXBkYXRlZCA9IHRydWU7XG4gICAgdGhpcy5tb2RlbC5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgIHRoaXMub25JbnB1dChudWxsLCAnc3RhdGUnKTtcbiAgfVxuXG4gIHNldFN0YXRlTGFiZWwobW9kZWw6IGFueSkge1xuICAgIGNvbnN0IHN0YXRlOiBzdHJpbmcgPSBtb2RlbC5zdGF0ZTtcbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayhzdGF0ZSkpIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5zdGF0ZS5yZXF1aXJlZCkge1xuICAgICAgICB0aGlzLnZhbGlkLnN0YXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubW9kZWwuc3RhdGUgPSBzdGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RlbC5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5zdGF0ZS5yZXF1aXJlZCkge1xuICAgICAgICB0aGlzLnZhbGlkLnN0YXRlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlU3RhdGVzKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcub3B0aW9ucyAmJiAhSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuY291bnRyeUlEKSkge1xuICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLm9wdGlvbnMgPSAocXVlcnkgPSAnJykgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZU9wdGlvbnMocXVlcnksIHRoaXMubW9kZWwuY291bnRyeUlEKTtcbiAgICAgIH07XG4gICAgICB0aGlzLnN0YXRlT3B0aW9ucygnJywgdGhpcy5tb2RlbC5jb3VudHJ5SUQpLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zID0gcmVzdWx0cztcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy50b29sdGlwLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHRoaXMuZGlzYWJsZWQuc3RhdGUgPSB0aGlzLl9yZWFkT25seTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlTGFiZWwodGhpcy5tb2RlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlZC5zdGF0ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy50b29sdGlwLnN0YXRlID0gdGhpcy5sYWJlbHMubm9TdGF0ZXNGb3JDb3VudHJ5O1xuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5zdGF0ZS5yZXF1aXJlZCkge1xuICAgICAgICAgICAgdGhpcy52YWxpZC5zdGF0ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsaWRpdHlDaGFuZ2UuZW1pdCgpO1xuICAgICAgICB0aGlzLm9uSW5wdXQobnVsbCwgJ3N0YXRlJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zID0gW107XG4gICAgICB0aGlzLmRpc2FibGVkLnN0YXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMudG9vbHRpcC5zdGF0ZSA9IHRoaXMubGFiZWxzLnNlbGVjdENvdW50cnlGaXJzdDtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5zdGF0ZS5yZXF1aXJlZCkge1xuICAgICAgICB0aGlzLnZhbGlkLnN0YXRlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0U3RhdGVPcHRpb25zKGZpbHRlciA9ICcnLCBjb3VudHJ5SUQ6IG51bWJlcikge1xuICAgIGlmIChjb3VudHJ5SUQpIHtcbiAgICAgIGNvbnN0IGNvdW50cnkgPSBmaW5kQnlDb3VudHJ5SWQoY291bnRyeUlEKTtcbiAgICAgIGNvbnN0IHN0YXRlcyA9IGdldFN0YXRlcyhjb3VudHJ5Lm5hbWUpO1xuICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICByZXR1cm4gc3RhdGVzLmZpbHRlcigobmFtZSkgPT4gbmV3IFJlZ0V4cChgJHtmaWx0ZXJ9YCwgJ2dpJykudGVzdChuYW1lKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhdGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ29udHJvbCgpIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5tb2RlbCk7XG4gICAgdGhpcy5vbklucHV0KG51bGwsICdjb3VudHJ5SUQnKTtcbiAgICB0aGlzLm9uSW5wdXQobnVsbCwgJ3N0YXRlJyk7XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsKSB7XG4gICAgbGV0IGxvYWRpbmdDb3VudHJpZXMgPSBmYWxzZTtcbiAgICBpZiAobW9kZWwpIHtcbiAgICAgIGxldCBjb3VudHJ5TmFtZTtcbiAgICAgIGlmIChtb2RlbC5jb3VudHJ5TmFtZSAmJiBtb2RlbC5jb3VudHJ5SUQpIHtcbiAgICAgICAgY291bnRyeU5hbWUgPSBtb2RlbC5jb3VudHJ5TmFtZTtcbiAgICAgIH0gZWxzZSBpZiAobW9kZWwuY291bnRyeUlEKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnICYmIHRoaXMuY29uZmlnLmNvdW50cnlJRC5waWNrZXJDb25maWcuZ2V0TGFiZWxzKSB7XG4gICAgICAgICAgaWYgKEhlbHBlcnMuaXNGdW5jdGlvbih0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnLmdldExhYmVscykpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgID0gdGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZy5nZXRMYWJlbHMobW9kZWwuY291bnRyeUlEKTtcbiAgICAgICAgICAgIGxvYWRpbmdDb3VudHJpZXMgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb21pc2UudGhlbikge1xuICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRpbmdDb3VudHJpZXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb3VudHJ5TmFtZSA9IEhlbHBlcnMuaW50ZXJwb2xhdGVXaXRoRmFsbGJhY2sodGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZy5mb3JtYXQsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbCA9IE9iamVjdC5hc3NpZ24obW9kZWwsIHsgY291bnRyeU5hbWUgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZXMoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY291bnRyeU5hbWUpIHtcbiAgICAgICAgY291bnRyeU5hbWUgPSBjb3VudHJ5TmFtZS50cmltKCk7XG4gICAgICAgIG1vZGVsLnN0YXRlID0gbW9kZWwuc3RhdGUgfHwgJyc7XG4gICAgICAgIHRoaXMubW9kZWwgPSBPYmplY3QuYXNzaWduKG1vZGVsLCB7IGNvdW50cnlOYW1lIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgICAgfVxuICAgICAgaWYgKCFsb2FkaW5nQ291bnRyaWVzICYmICFIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5jb3VudHJ5SUQpKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGVzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZmllbGRMaXN0LmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMub25JbnB1dChudWxsLCBmaWVsZCk7XG4gICAgfSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZhdWx0U3RhdGVDb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkOiAndmFsdWUnLFxuICAgICAgZm9ybWF0OiAnJGxhYmVsJyxcbiAgICAgIG9wdGlvbnM6IChxdWVyeSA9ICcnLCBjb3VudHJ5SUQpID0+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmdldFN0YXRlT3B0aW9ucyhxdWVyeSwgY291bnRyeUlEKSk7XG4gICAgICB9LFxuICAgICAgZ2V0TGFiZWxzOiAoc3RhdGU6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN0YXRlKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmYXVsdENvdW50cnlDb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkOiAndmFsdWUnLFxuICAgICAgZm9ybWF0OiAnJGxhYmVsJyxcbiAgICAgIG9wdGlvbnM6IChxdWVyeSA9ICcnKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgIGxldCBjb3VudHJpZXMgPSBDT1VOVFJJRVM7XG4gICAgICAgICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgICAgICBjb3VudHJpZXMgPSBjb3VudHJpZXMuZmlsdGVyKChjb3VudHJ5KSA9PiBuZXcgUmVnRXhwKGAke3F1ZXJ5fWAsICdnaScpLnRlc3QoY291bnRyeS5uYW1lKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKGNvdW50cmllcy5tYXAoKGNvdW50cnkpID0+ICh7IHZhbHVlOiBjb3VudHJ5LmlkLCBsYWJlbDogY291bnRyeS5uYW1lIH0pKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGdldExhYmVsczogKGNvdW50cnlJRCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvdW50cnk6IGFueSA9IGZpbmRCeUNvdW50cnlJZChjb3VudHJ5SUQpO1xuICAgICAgICAgIGlmIChjb3VudHJ5KSB7XG4gICAgICAgICAgICByZXNvbHZlKHsgdmFsdWU6IGNvdW50cnkuaWQsIGxhYmVsOiBjb3VudHJ5Lm5hbWUgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==