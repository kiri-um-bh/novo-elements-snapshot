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
const ADDRESS_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoAddressElement),
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
        this.states = [];
        this.countries = getCountries();
        this.fieldList = ['address1', 'address2', 'city', 'state', 'zip', 'countryID'];
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
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
        this.fieldList.forEach((field) => {
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
                this.config[field].pickerConfig.options = (query = '') => {
                    return this.stateOptions(query, this.model.countryID);
                };
                this.config[field].pickerConfig.defaultOptions = this.stateOptions;
            }
        });
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
            this.change.emit({ value: this.model[field], field: field });
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
        let country = evt && evt.rawValue ? evt.rawValue : null;
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
        let state = evt && evt.value ? evt.value : null;
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
        let state = model.state;
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
            this.config.state.pickerConfig.options = (query = '') => {
                return this.stateOptions(query, this.model.countryID);
            };
            this.stateOptions('', this.model.countryID).then((results) => {
                this.config.state.pickerConfig.defaultOptions = results;
                if (results.length) {
                    this.tooltip.state = undefined;
                    this.disabled.state = false;
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
                return states.filter((name) => new RegExp(`${filter}`, 'gi').test(name));
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
                        let promise = this.config.countryID.pickerConfig.getLabels(model.countryID);
                        loadingCountries = true;
                        if (promise.then) {
                            promise.then((result) => {
                                loadingCountries = false;
                                countryName = Helpers.interpolateWithFallback(this.config.countryID.pickerConfig.format, result);
                                this.model = Object.assign(model, { countryName });
                                this.updateStates();
                            });
                        }
                    }
                }
            }
            if (countryName) {
                countryName = countryName.trim();
                model.state = model.state || '';
                this.model = Object.assign(model, { countryName: countryName });
            }
            else {
                this.model = model;
            }
            if (!loadingCountries && !Helpers.isBlank(this.model.countryID)) {
                this.updateStates();
            }
        }
        this.fieldList.forEach((field) => {
            this.onInput(null, field);
        });
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
     * @return {?}
     */
    getDefaultStateConfig() {
        return {
            field: 'value',
            format: '$label',
            options: (query = '', countryID) => {
                return Promise.resolve(this.getStateOptions(query, countryID));
            },
            getLabels: (state) => {
                return Promise.resolve(state);
            },
        };
    }
    /**
     * @return {?}
     */
    getDefaultCountryConfig() {
        return {
            field: 'value',
            format: '$label',
            options: (query = '') => {
                return new Promise((resolve) => {
                    /** @type {?} */
                    let countries = getCountries();
                    if (query) {
                        countries = countries.filter((country) => new RegExp(`${query}`, 'gi').test(country.name));
                    }
                    return resolve(countries);
                });
            },
            getLabels: (countryID) => {
                return new Promise((resolve) => {
                    /** @type {?} */
                    let country = findByCountryId(countryID);
                    if (country) {
                        resolve(country.name);
                    }
                    else {
                        resolve('');
                    }
                });
            },
        };
    }
}
NovoAddressElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-address',
                providers: [ADDRESS_VALUE_ACCESSOR],
                template: `
        <span *ngIf="!config?.address1?.hidden" class="street-address" [class.invalid]="invalid.address1" [class.focus]="focused.address1" [class.disabled]="disabled.address1">
            <i *ngIf="config.address1.required"
                class="required-indicator address1"
                [ngClass]="{'bhi-circle': !valid.address1, 'bhi-check': valid.address1}">
            </i>
            <input [class.maxlength-error]="invalidMaxlength.address1" type="text" id="address1" name="address1" [placeholder]="config.address1.label" [maxlength]="config?.address1?.maxlength" autocomplete="shipping street-address address-line-1" [(ngModel)]="model.address1" (ngModelChange)="updateControl()" (focus)="isFocused($event, 'address1')" (blur)="isBlurred($event, 'address1')" (input)="onInput($event, 'address1')"/>
        </span>
        <span *ngIf="!config?.address2?.hidden" class="apt suite" [class.invalid]="invalid.address2" [class.focus]="focused.address2" [class.disabled]="disabled.address2">
            <i *ngIf="config.address2.required"
                class="required-indicator address2"
                [ngClass]="{'bhi-circle': !valid.address2, 'bhi-check': valid.address2}">
            </i>
            <input [class.maxlength-error]="invalidMaxlength.address2" type="text" id="address2" name="address2" [placeholder]="config.address2.label" [maxlength]="config?.address2?.maxlength" autocomplete="shipping address-line-2" [(ngModel)]="model.address2" (ngModelChange)="updateControl()" (focus)="isFocused($event, 'address2')" (blur)="isBlurred($event, 'address2')" (input)="onInput($event, 'address2')"/>
        </span>
        <span *ngIf="!config?.city?.hidden" class="city locality" [class.invalid]="invalid.city" [class.focus]="focused.city" [class.disabled]="disabled.city">
            <i *ngIf="config.city.required"
                class="required-indicator"
                [ngClass]="{'bhi-circle': !valid.city, 'bhi-check': valid.city}">
            </i>
            <input [class.maxlength-error]="invalidMaxlength.city" type="text" id="city" name="city" [placeholder]="config.city.label" autocomplete="shipping city locality" [maxlength]="config?.city?.maxlength" [(ngModel)]="model.city" (ngModelChange)="updateControl()" (focus)="isFocused($event, 'city')" (blur)="isBlurred($event, 'city')" (input)="onInput($event, 'city')"/>
        </span>
        <span *ngIf="!config?.state?.hidden" class="state region" [class.invalid]="invalid.state" [class.focus]="focused.state" [class.disabled]="disabled.state"  [tooltip]="tooltip.state">
            <i *ngIf="config.state.required"
                class="required-indicator"
                [ngClass]="{'bhi-circle': !valid.state, 'bhi-check': valid.state}">
            </i>
            <novo-picker [config]="config?.state?.pickerConfig" [placeholder]="config?.state?.label" (changed)="onStateChange($event)" autocomplete="shipping region" [(ngModel)]="model.state" [disablePickerInput]="disabled.state || config.readOnly"></novo-picker>
        </span>
        <span *ngIf="!config?.zip?.hidden" class="zip postal-code" [class.invalid]="invalid.zip" [class.focus]="focused.zip" [class.disabled]="disabled.zip">
            <i *ngIf="config.zip.required"
                class="required-indicator"
                [ngClass]="{'bhi-circle': !valid.zip, 'bhi-check': valid.zip}">
            </i>
            <input [class.maxlength-error]="invalidMaxlength.zip" type="text" id="zip" name="zip" [placeholder]="config.zip.label" autocomplete="shipping postal-code" [maxlength]="config?.zip?.maxlength" [(ngModel)]="model.zip" (ngModelChange)="updateControl()" (focus)="isFocused($event, 'zip')" (blur)="isBlurred($event, 'zip')" (input)="onInput($event, 'zip')" />
        </span>
        <span *ngIf="!config?.countryID?.hidden" class="country-name" [class.invalid]="invalid.countryID" [class.focus]="focused.countryID" [class.disabled]="disabled.countryID">
            <i *ngIf="config.countryID.required"
                class="required-indicator"
                [ngClass]="{'bhi-circle': !valid.countryID, 'bhi-check': valid.countryID}">
            </i>
            <novo-picker [config]="config?.countryID?.pickerConfig" [placeholder]="config.countryID.label" (changed)="onCountryChange($event)" autocomplete="shipping country" [(ngModel)]="model.countryName" [disablePickerInput]="disabled.countryID"></novo-picker>
        </span>
    `
            }] }
];
NovoAddressElement.ctorParameters = () => [
    { type: NovoLabelService }
];
NovoAddressElement.propDecorators = {
    config: [{ type: Input }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    blur: [{ type: Output }],
    validityChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NovoAddressElement.prototype.config;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2V4dHJhcy9hZGRyZXNzL0FkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQW1DLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztNQUc5QyxzQkFBc0IsR0FBRztJQUM3QixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7SUFDakQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7OztBQUVELCtDQVFDOzs7SUFQQywwQ0FBYzs7SUFDZCw2Q0FBa0I7O0lBQ2xCLDhDQUFrQjs7SUFDbEIsaURBQW1COztJQUNuQiwyQ0FBZ0I7O0lBQ2hCLDRDQUFrQjs7SUFDbEIsNkNBQW1COzs7OztBQUdyQix1Q0FTQzs7O0lBUkMscUNBQW1COztJQUNuQixxQ0FBbUI7O0lBQ25CLHFDQUFxQzs7SUFDckMscUNBQXFDOztJQUNyQyxpQ0FBaUM7O0lBQ2pDLGtDQUFrQzs7SUFDbEMsZ0NBQWdDOztJQUNoQyxzQ0FBc0M7O0FBbUR4QyxNQUFNOzs7O0lBMEJKLFlBQW1CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBdkIzQyxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLGNBQVMsR0FBZSxZQUFZLEVB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QUN4QixTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDbkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMkNQO2FBQ0o7OztZQTlFUSxnQkFBZ0I7OztxQkFnRnRCLEtBQUs7cUJBZ0JMLE1BQU07b0JBRU4sTUFBTTttQkFFTixNQUFNOzZCQUVOLE1BQU07Ozs7SUF0QlAsb0NBQzBCOztJQUMxQixvQ0FBd0I7O0lBQ3hCLHVDQUF1Qzs7SUFDdkMsdUNBQXlGOztJQUN6RixtQ0FBVzs7SUFDWCwyQ0FBbUM7O0lBQ25DLDRDQUFvQzs7SUFDcEMscUNBQWtCOztJQUNsQixxQ0FBa0I7O0lBQ2xCLHNDQUFtQjs7SUFDbkIsOENBQTJCOztJQUMzQixtQ0FBZ0I7O0lBQ2hCLDBDQUFrQjs7SUFDbEIscUNBQWtCOztJQUNsQiwwQ0FBOEI7O0lBQzlCLG9DQUMrQzs7SUFDL0MsbUNBQzhDOztJQUM5QyxrQ0FDNkM7O0lBQzdDLDRDQUN1RDs7SUFFM0Msb0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBnZXRDb3VudHJpZXMsIGdldFN0YXRlcywgZmluZEJ5Q291bnRyeUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY291bnRyaWVzL0NvdW50cmllcyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBBRERSRVNTX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0FkZHJlc3NFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9BZGRyZXNzU3ViZmllbGRDb25maWcge1xuICBsYWJlbDogc3RyaW5nO1xuICByZXF1aXJlZDogYm9vbGVhbjtcbiAgbWF4bGVuZ3RoOiBudW1iZXI7XG4gIHBpY2tlckNvbmZpZz86IGFueTtcbiAgaGlkZGVuOiBib29sZWFuO1xuICB1cGRhdGVkPzogYm9vbGVhbjtcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9BZGRyZXNzQ29uZmlnIHtcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICByZWFkT25seT86IGJvb2xlYW47XG4gIGFkZHJlc3MxPzogTm92b0FkZHJlc3NTdWJmaWVsZENvbmZpZztcbiAgYWRkcmVzczI/OiBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnO1xuICBjaXR5PzogTm92b0FkZHJlc3NTdWJmaWVsZENvbmZpZztcbiAgc3RhdGU/OiBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnO1xuICB6aXA/OiBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnO1xuICBjb3VudHJ5SUQ/OiBOb3ZvQWRkcmVzc1N1YmZpZWxkQ29uZmlnO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFkZHJlc3MnLFxuICBwcm92aWRlcnM6IFtBRERSRVNTX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNwYW4gKm5nSWY9XCIhY29uZmlnPy5hZGRyZXNzMT8uaGlkZGVuXCIgY2xhc3M9XCJzdHJlZXQtYWRkcmVzc1wiIFtjbGFzcy5pbnZhbGlkXT1cImludmFsaWQuYWRkcmVzczFcIiBbY2xhc3MuZm9jdXNdPVwiZm9jdXNlZC5hZGRyZXNzMVwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZC5hZGRyZXNzMVwiPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJjb25maWcuYWRkcmVzczEucmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicmVxdWlyZWQtaW5kaWNhdG9yIGFkZHJlc3MxXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2JoaS1jaXJjbGUnOiAhdmFsaWQuYWRkcmVzczEsICdiaGktY2hlY2snOiB2YWxpZC5hZGRyZXNzMX1cIj5cbiAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIDxpbnB1dCBbY2xhc3MubWF4bGVuZ3RoLWVycm9yXT1cImludmFsaWRNYXhsZW5ndGguYWRkcmVzczFcIiB0eXBlPVwidGV4dFwiIGlkPVwiYWRkcmVzczFcIiBuYW1lPVwiYWRkcmVzczFcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLmFkZHJlc3MxLmxhYmVsXCIgW21heGxlbmd0aF09XCJjb25maWc/LmFkZHJlc3MxPy5tYXhsZW5ndGhcIiBhdXRvY29tcGxldGU9XCJzaGlwcGluZyBzdHJlZXQtYWRkcmVzcyBhZGRyZXNzLWxpbmUtMVwiIFsobmdNb2RlbCldPVwibW9kZWwuYWRkcmVzczFcIiAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVDb250cm9sKClcIiAoZm9jdXMpPVwiaXNGb2N1c2VkKCRldmVudCwgJ2FkZHJlc3MxJylcIiAoYmx1cik9XCJpc0JsdXJyZWQoJGV2ZW50LCAnYWRkcmVzczEnKVwiIChpbnB1dCk9XCJvbklucHV0KCRldmVudCwgJ2FkZHJlc3MxJylcIi8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCIhY29uZmlnPy5hZGRyZXNzMj8uaGlkZGVuXCIgY2xhc3M9XCJhcHQgc3VpdGVcIiBbY2xhc3MuaW52YWxpZF09XCJpbnZhbGlkLmFkZHJlc3MyXCIgW2NsYXNzLmZvY3VzXT1cImZvY3VzZWQuYWRkcmVzczJcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWQuYWRkcmVzczJcIj5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiY29uZmlnLmFkZHJlc3MyLnJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkLWluZGljYXRvciBhZGRyZXNzMlwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydiaGktY2lyY2xlJzogIXZhbGlkLmFkZHJlc3MyLCAnYmhpLWNoZWNrJzogdmFsaWQuYWRkcmVzczJ9XCI+XG4gICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICA8aW5wdXQgW2NsYXNzLm1heGxlbmd0aC1lcnJvcl09XCJpbnZhbGlkTWF4bGVuZ3RoLmFkZHJlc3MyXCIgdHlwZT1cInRleHRcIiBpZD1cImFkZHJlc3MyXCIgbmFtZT1cImFkZHJlc3MyXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy5hZGRyZXNzMi5sYWJlbFwiIFttYXhsZW5ndGhdPVwiY29uZmlnPy5hZGRyZXNzMj8ubWF4bGVuZ3RoXCIgYXV0b2NvbXBsZXRlPVwic2hpcHBpbmcgYWRkcmVzcy1saW5lLTJcIiBbKG5nTW9kZWwpXT1cIm1vZGVsLmFkZHJlc3MyXCIgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlQ29udHJvbCgpXCIgKGZvY3VzKT1cImlzRm9jdXNlZCgkZXZlbnQsICdhZGRyZXNzMicpXCIgKGJsdXIpPVwiaXNCbHVycmVkKCRldmVudCwgJ2FkZHJlc3MyJylcIiAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQsICdhZGRyZXNzMicpXCIvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbmZpZz8uY2l0eT8uaGlkZGVuXCIgY2xhc3M9XCJjaXR5IGxvY2FsaXR5XCIgW2NsYXNzLmludmFsaWRdPVwiaW52YWxpZC5jaXR5XCIgW2NsYXNzLmZvY3VzXT1cImZvY3VzZWQuY2l0eVwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZC5jaXR5XCI+XG4gICAgICAgICAgICA8aSAqbmdJZj1cImNvbmZpZy5jaXR5LnJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkLWluZGljYXRvclwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydiaGktY2lyY2xlJzogIXZhbGlkLmNpdHksICdiaGktY2hlY2snOiB2YWxpZC5jaXR5fVwiPlxuICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgPGlucHV0IFtjbGFzcy5tYXhsZW5ndGgtZXJyb3JdPVwiaW52YWxpZE1heGxlbmd0aC5jaXR5XCIgdHlwZT1cInRleHRcIiBpZD1cImNpdHlcIiBuYW1lPVwiY2l0eVwiIFtwbGFjZWhvbGRlcl09XCJjb25maWcuY2l0eS5sYWJlbFwiIGF1dG9jb21wbGV0ZT1cInNoaXBwaW5nIGNpdHkgbG9jYWxpdHlcIiBbbWF4bGVuZ3RoXT1cImNvbmZpZz8uY2l0eT8ubWF4bGVuZ3RoXCIgWyhuZ01vZGVsKV09XCJtb2RlbC5jaXR5XCIgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlQ29udHJvbCgpXCIgKGZvY3VzKT1cImlzRm9jdXNlZCgkZXZlbnQsICdjaXR5JylcIiAoYmx1cik9XCJpc0JsdXJyZWQoJGV2ZW50LCAnY2l0eScpXCIgKGlucHV0KT1cIm9uSW5wdXQoJGV2ZW50LCAnY2l0eScpXCIvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbmZpZz8uc3RhdGU/LmhpZGRlblwiIGNsYXNzPVwic3RhdGUgcmVnaW9uXCIgW2NsYXNzLmludmFsaWRdPVwiaW52YWxpZC5zdGF0ZVwiIFtjbGFzcy5mb2N1c109XCJmb2N1c2VkLnN0YXRlXCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkLnN0YXRlXCIgIFt0b29sdGlwXT1cInRvb2x0aXAuc3RhdGVcIj5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiY29uZmlnLnN0YXRlLnJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkLWluZGljYXRvclwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydiaGktY2lyY2xlJzogIXZhbGlkLnN0YXRlLCAnYmhpLWNoZWNrJzogdmFsaWQuc3RhdGV9XCI+XG4gICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICA8bm92by1waWNrZXIgW2NvbmZpZ109XCJjb25maWc/LnN0YXRlPy5waWNrZXJDb25maWdcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnPy5zdGF0ZT8ubGFiZWxcIiAoY2hhbmdlZCk9XCJvblN0YXRlQ2hhbmdlKCRldmVudClcIiBhdXRvY29tcGxldGU9XCJzaGlwcGluZyByZWdpb25cIiBbKG5nTW9kZWwpXT1cIm1vZGVsLnN0YXRlXCIgW2Rpc2FibGVQaWNrZXJJbnB1dF09XCJkaXNhYmxlZC5zdGF0ZSB8fCBjb25maWcucmVhZE9ubHlcIj48L25vdm8tcGlja2VyPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbmZpZz8uemlwPy5oaWRkZW5cIiBjbGFzcz1cInppcCBwb3N0YWwtY29kZVwiIFtjbGFzcy5pbnZhbGlkXT1cImludmFsaWQuemlwXCIgW2NsYXNzLmZvY3VzXT1cImZvY3VzZWQuemlwXCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkLnppcFwiPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJjb25maWcuemlwLnJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkLWluZGljYXRvclwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydiaGktY2lyY2xlJzogIXZhbGlkLnppcCwgJ2JoaS1jaGVjayc6IHZhbGlkLnppcH1cIj5cbiAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIDxpbnB1dCBbY2xhc3MubWF4bGVuZ3RoLWVycm9yXT1cImludmFsaWRNYXhsZW5ndGguemlwXCIgdHlwZT1cInRleHRcIiBpZD1cInppcFwiIG5hbWU9XCJ6aXBcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLnppcC5sYWJlbFwiIGF1dG9jb21wbGV0ZT1cInNoaXBwaW5nIHBvc3RhbC1jb2RlXCIgW21heGxlbmd0aF09XCJjb25maWc/LnppcD8ubWF4bGVuZ3RoXCIgWyhuZ01vZGVsKV09XCJtb2RlbC56aXBcIiAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVDb250cm9sKClcIiAoZm9jdXMpPVwiaXNGb2N1c2VkKCRldmVudCwgJ3ppcCcpXCIgKGJsdXIpPVwiaXNCbHVycmVkKCRldmVudCwgJ3ppcCcpXCIgKGlucHV0KT1cIm9uSW5wdXQoJGV2ZW50LCAnemlwJylcIiAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiIWNvbmZpZz8uY291bnRyeUlEPy5oaWRkZW5cIiBjbGFzcz1cImNvdW50cnktbmFtZVwiIFtjbGFzcy5pbnZhbGlkXT1cImludmFsaWQuY291bnRyeUlEXCIgW2NsYXNzLmZvY3VzXT1cImZvY3VzZWQuY291bnRyeUlEXCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkLmNvdW50cnlJRFwiPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJjb25maWcuY291bnRyeUlELnJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkLWluZGljYXRvclwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydiaGktY2lyY2xlJzogIXZhbGlkLmNvdW50cnlJRCwgJ2JoaS1jaGVjayc6IHZhbGlkLmNvdW50cnlJRH1cIj5cbiAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIDxub3ZvLXBpY2tlciBbY29uZmlnXT1cImNvbmZpZz8uY291bnRyeUlEPy5waWNrZXJDb25maWdcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLmNvdW50cnlJRC5sYWJlbFwiIChjaGFuZ2VkKT1cIm9uQ291bnRyeUNoYW5nZSgkZXZlbnQpXCIgYXV0b2NvbXBsZXRlPVwic2hpcHBpbmcgY291bnRyeVwiIFsobmdNb2RlbCldPVwibW9kZWwuY291bnRyeU5hbWVcIiBbZGlzYWJsZVBpY2tlcklucHV0XT1cImRpc2FibGVkLmNvdW50cnlJRFwiPjwvbm92by1waWNrZXI+XG4gICAgICAgIDwvc3Bhbj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWRkcmVzc0VsZW1lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgQElucHV0KClcbiAgY29uZmlnOiBOb3ZvQWRkcmVzc0NvbmZpZztcbiAgc3RhdGVzOiBBcnJheTxhbnk+ID0gW107XG4gIGNvdW50cmllczogQXJyYXk8YW55PiA9IGdldENvdW50cmllcygpO1xuICBmaWVsZExpc3Q6IEFycmF5PHN0cmluZz4gPSBbJ2FkZHJlc3MxJywgJ2FkZHJlc3MyJywgJ2NpdHknLCAnc3RhdGUnLCAnemlwJywgJ2NvdW50cnlJRCddO1xuICBtb2RlbDogYW55O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgZm9jdXNlZDogYW55ID0ge307XG4gIGludmFsaWQ6IGFueSA9IHt9O1xuICBkaXNhYmxlZDogYW55ID0ge307XG4gIGludmFsaWRNYXhsZW5ndGg6IGFueSA9IHt9O1xuICB2YWxpZDogYW55ID0ge307XG4gIHN0YXRlT3B0aW9uczogYW55O1xuICB0b29sdGlwOiBhbnkgPSB7fTtcbiAgaW5pdENvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICB2YWxpZGl0eUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHt9O1xuICAgIH1cbiAgICBpZiAodGhpcy5tb2RlbCkge1xuICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMubW9kZWwpO1xuICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5tb2RlbCkge1xuICAgICAgdGhpcy5tb2RlbCA9IHt9O1xuICAgIH1cbiAgICB0aGlzLmluaXRDb25maWcoKTtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuY291bnRyeUlEKSkge1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZXMoKTtcbiAgICB9XG4gIH1cblxuICBpbml0Q29uZmlnKCk6IHZvaWQge1xuICAgIHRoaXMuZmllbGRMaXN0LmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghdGhpcy5jb25maWcuaGFzT3duUHJvcGVydHkoZmllbGQpKSB7XG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXSA9IHtcbiAgICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY29uZmlnW2ZpZWxkXS5oYXNPd25Qcm9wZXJ0eSgnbGFiZWwnKSkge1xuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ubGFiZWwgPSB0aGlzLmxhYmVsc1tmaWVsZF07XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb25maWcucmVxdWlyZWQpIHtcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNvbmZpZ1tmaWVsZF0ucmVhZE9ubHkgfHwgdGhpcy5jb25maWcucmVhZE9ubHkpIHtcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZFtmaWVsZF0gPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGZpZWxkID09PSAnY291bnRyeUlEJykge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnW2ZpZWxkXS5waWNrZXJDb25maWcpIHtcbiAgICAgICAgICB0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnID0gdGhpcy5nZXREZWZhdWx0Q291bnRyeUNvbmZpZygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgPSB0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnLm9wdGlvbnM7XG4gICAgICB9XG4gICAgICBpZiAoZmllbGQgPT09ICdzdGF0ZScpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnKSB7XG4gICAgICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnID0gdGhpcy5nZXREZWZhdWx0U3RhdGVDb25maWcoKTtcbiAgICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zID0gdGhpcy5jb25maWdbZmllbGRdLnBpY2tlckNvbmZpZy5vcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGVPcHRpb25zID0gdGhpcy5jb25maWdbZmllbGRdLnBpY2tlckNvbmZpZy5vcHRpb25zO1xuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnLm9wdGlvbnMgPSAocXVlcnkgPSAnJykgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlT3B0aW9ucyhxdWVyeSwgdGhpcy5tb2RlbC5jb3VudHJ5SUQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbmZpZ1tmaWVsZF0ucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zID0gdGhpcy5zdGF0ZU9wdGlvbnM7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc1ZhbGlkKGZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgdmFsaWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGlmIChcbiAgICAgICgodGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkICYmIChIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbFtmaWVsZF0pIHx8IEhlbHBlcnMuaXNFbXB0eSh0aGlzLm1vZGVsW2ZpZWxkXSkpKSB8fFxuICAgICAgICAhdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkKSAmJlxuICAgICAgIShmaWVsZCA9PT0gJ2NvdW50cnlJRCcgJiYgdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkICYmICFIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5jb3VudHJ5SUQpKSAmJlxuICAgICAgIShcbiAgICAgICAgZmllbGQgPT09ICdzdGF0ZScgJiZcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnJlcXVpcmVkICYmXG4gICAgICAgICghSGVscGVycy5pc0VtcHR5KHRoaXMubW9kZWwuc3RhdGUpIHx8XG4gICAgICAgICAgKChIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5zdGF0ZSkgfHwgSGVscGVycy5pc0VtcHR5KHRoaXMubW9kZWwuc3RhdGUpKSAmJlxuICAgICAgICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsLmNvdW50cnlOYW1lKSAmJlxuICAgICAgICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnICYmXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgJiZcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucy5sZW5ndGggPT09IDApKVxuICAgICAgKVxuICAgICkge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLm1vZGVsW2ZpZWxkXSkgJiZcbiAgICAgICFIZWxwZXJzLmlzQmxhbmsodGhpcy5jb25maWdbZmllbGRdLm1heGxlbmd0aCkgJiZcbiAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5tYXhsZW5ndGggPCB0aGlzLm1vZGVsW2ZpZWxkXS5sZW5ndGhcbiAgICApIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMudmFsaWRbZmllbGRdID0gdmFsaWQ7XG4gIH1cblxuICBpc0ludmFsaWQoZmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBpbnZhbGlkOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IGludmFsaWRNYXhsZW5ndGg6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpZiAoXG4gICAgICAoZmllbGQgIT09ICdjb3VudHJ5SUQnICYmXG4gICAgICAgIGZpZWxkICE9PSAnc3RhdGUnICYmXG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5yZXF1aXJlZCAmJlxuICAgICAgICBIZWxwZXJzLmlzRW1wdHkodGhpcy5tb2RlbFtmaWVsZF0pICYmXG4gICAgICAgICFIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbFtmaWVsZF0pKSB8fFxuICAgICAgKGZpZWxkID09PSAnY291bnRyeUlEJyAmJiB0aGlzLmNvbmZpZ1tmaWVsZF0ucmVxdWlyZWQgJiYgSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuY291bnRyeU5hbWUpICYmIHRoaXMuY29uZmlnW2ZpZWxkXS51cGRhdGVkKSB8fFxuICAgICAgKGZpZWxkID09PSAnc3RhdGUnICYmXG4gICAgICAgIHRoaXMuY29uZmlnW2ZpZWxkXS5yZXF1aXJlZCAmJlxuICAgICAgICAoSGVscGVycy5pc0JsYW5rKHRoaXMubW9kZWwuc3RhdGUpIHx8IEhlbHBlcnMuaXNFbXB0eSh0aGlzLm1vZGVsLnN0YXRlKSkgJiZcbiAgICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLm1vZGVsLmNvdW50cnlJRCkgJiZcbiAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLnVwZGF0ZWQgJiZcbiAgICAgICAgdGhpcy5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnICYmXG4gICAgICAgIHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyAmJlxuICAgICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMubGVuZ3RoID4gMClcbiAgICApIHtcbiAgICAgIGludmFsaWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAhSGVscGVycy5pc0VtcHR5KHRoaXMubW9kZWxbZmllbGRdKSAmJlxuICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLmNvbmZpZ1tmaWVsZF0ubWF4bGVuZ3RoKSAmJlxuICAgICAgdGhpcy5jb25maWdbZmllbGRdLm1heGxlbmd0aCA8IHRoaXMubW9kZWxbZmllbGRdLmxlbmd0aFxuICAgICkge1xuICAgICAgaW52YWxpZCA9IHRydWU7XG4gICAgICBpbnZhbGlkTWF4bGVuZ3RoID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5pbnZhbGlkW2ZpZWxkXSA9IGludmFsaWQ7XG4gICAgdGhpcy5pbnZhbGlkTWF4bGVuZ3RoW2ZpZWxkXSA9IGludmFsaWRNYXhsZW5ndGg7XG4gIH1cblxuICBvbklucHV0KGV2ZW50OiBFdmVudCwgZmllbGQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaXNJbnZhbGlkKGZpZWxkKTtcbiAgICB0aGlzLmlzVmFsaWQoZmllbGQpO1xuICAgIGlmIChldmVudCkge1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7IHZhbHVlOiB0aGlzLm1vZGVsW2ZpZWxkXSwgZmllbGQ6IGZpZWxkIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlzRm9jdXNlZChldmVudDogRXZlbnQsIGZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzZWRbZmllbGRdID0gdHJ1ZTtcbiAgICB0aGlzLmZvY3VzLmVtaXQoeyBldmVudCwgZmllbGQgfSk7XG4gIH1cblxuICBpc0JsdXJyZWQoZXZlbnQ6IEV2ZW50LCBmaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c2VkW2ZpZWxkXSA9IGZhbHNlO1xuICAgIHRoaXMuYmx1ci5lbWl0KHsgZXZlbnQsIGZpZWxkIH0pO1xuICB9XG5cbiAgb25Db3VudHJ5Q2hhbmdlKGV2dCkge1xuICAgIGxldCBjb3VudHJ5OiBhbnkgPSBldnQgJiYgZXZ0LnJhd1ZhbHVlID8gZXZ0LnJhd1ZhbHVlIDogbnVsbDtcbiAgICBsZXQgZmllbGQ6IGFueTtcbiAgICBsZXQgc3RhdGVzVXBkYXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgdGhpcy5jb25maWcuY291bnRyeUlELnVwZGF0ZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnKSB7XG4gICAgICBmaWVsZCA9IHRoaXMuY29uZmlnLmNvdW50cnlJRC5waWNrZXJDb25maWcuZmllbGQ7XG4gICAgfVxuICAgIGlmIChjb3VudHJ5ICYmIGZpZWxkICYmICFIZWxwZXJzLmlzQmxhbmsoY291bnRyeVtmaWVsZF0pICYmIHRoaXMubW9kZWwuY291bnRyeUlEICE9PSBjb3VudHJ5W2ZpZWxkXSkge1xuICAgICAgdGhpcy5tb2RlbC5jb3VudHJ5SUQgPSBjb3VudHJ5W2ZpZWxkXTtcbiAgICAgIHRoaXMubW9kZWwuY291bnRyeU5hbWUgPSBIZWxwZXJzLmludGVycG9sYXRlKHRoaXMuY29uZmlnLmNvdW50cnlJRC5waWNrZXJDb25maWcuZm9ybWF0LCBjb3VudHJ5KTtcbiAgICAgIHRoaXMuZGlzYWJsZWQuc3RhdGUgPSBmYWxzZTtcbiAgICAgIHRoaXMudG9vbHRpcC5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHN0YXRlc1VwZGF0YWJsZSA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChIZWxwZXJzLmlzQmxhbmsoY291bnRyeSkgfHwgSGVscGVycy5pc0JsYW5rKGNvdW50cnlbZmllbGRdKSkge1xuICAgICAgdGhpcy5tb2RlbC5jb3VudHJ5SUQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLm1vZGVsLmNvdW50cnlOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kaXNhYmxlZC5zdGF0ZSA9IHRydWU7XG4gICAgICB0aGlzLnRvb2x0aXAuc3RhdGUgPSB0aGlzLmxhYmVscy5zZWxlY3RDb3VudHJ5Rmlyc3Q7XG4gICAgICB0aGlzLmludmFsaWQuc3RhdGUgPSBmYWxzZTtcbiAgICAgIHN0YXRlc1VwZGF0YWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHN0YXRlXG4gICAgaWYgKHN0YXRlc1VwZGF0YWJsZSkge1xuICAgICAgdGhpcy5tb2RlbC5zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGVzKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgIHRoaXMub25JbnB1dChudWxsLCAnY291bnRyeUlEJyk7XG4gICAgdGhpcy5vbklucHV0KG51bGwsICdzdGF0ZScpO1xuICB9XG5cbiAgb25TdGF0ZUNoYW5nZShldnQpIHtcbiAgICBsZXQgc3RhdGU6IGFueSA9IGV2dCAmJiBldnQudmFsdWUgPyBldnQudmFsdWUgOiBudWxsO1xuICAgIHRoaXMuY29uZmlnLnN0YXRlLnVwZGF0ZWQgPSB0cnVlO1xuICAgIHRoaXMubW9kZWwuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICB0aGlzLm9uSW5wdXQobnVsbCwgJ3N0YXRlJyk7XG4gIH1cblxuICBzZXRTdGF0ZUxhYmVsKG1vZGVsOiBhbnkpIHtcbiAgICBsZXQgc3RhdGU6IHN0cmluZyA9IG1vZGVsLnN0YXRlO1xuICAgIGlmICghSGVscGVycy5pc0JsYW5rKHN0YXRlKSkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlLnJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMudmFsaWQuc3RhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5tb2RlbC5zdGF0ZSA9IHN0YXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vZGVsLnN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlLnJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMudmFsaWQuc3RhdGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVTdGF0ZXMoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5vcHRpb25zICYmICFIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5jb3VudHJ5SUQpKSB7XG4gICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcub3B0aW9ucyA9IChxdWVyeSA9ICcnKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlT3B0aW9ucyhxdWVyeSwgdGhpcy5tb2RlbC5jb3VudHJ5SUQpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuc3RhdGVPcHRpb25zKCcnLCB0aGlzLm1vZGVsLmNvdW50cnlJRCkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgPSByZXN1bHRzO1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnRvb2x0aXAuc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlZC5zdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGVMYWJlbCh0aGlzLm1vZGVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc2FibGVkLnN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnRvb2x0aXAuc3RhdGUgPSB0aGlzLmxhYmVscy5ub1N0YXRlc0ZvckNvdW50cnk7XG4gICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlLnJlcXVpcmVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkLnN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWxpZGl0eUNoYW5nZS5lbWl0KCk7XG4gICAgICAgIHRoaXMub25JbnB1dChudWxsLCAnc3RhdGUnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuZGlzYWJsZWQuc3RhdGUgPSB0cnVlO1xuICAgICAgdGhpcy50b29sdGlwLnN0YXRlID0gdGhpcy5sYWJlbHMuc2VsZWN0Q291bnRyeUZpcnN0O1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlLnJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMudmFsaWQuc3RhdGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZU9wdGlvbnMoZmlsdGVyOiBzdHJpbmcgPSAnJywgY291bnRyeUlEOiBudW1iZXIpOiBhbnlbXSB7XG4gICAgaWYgKGNvdW50cnlJRCkge1xuICAgICAgY29uc3QgY291bnRyeTogYW55ID0gZmluZEJ5Q291bnRyeUlkKGNvdW50cnlJRCk7XG4gICAgICBjb25zdCBzdGF0ZXM6IGFueVtdID0gZ2V0U3RhdGVzKGNvdW50cnkubmFtZSk7XG4gICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZXMuZmlsdGVyKChuYW1lKSA9PiBuZXcgUmVnRXhwKGAke2ZpbHRlcn1gLCAnZ2knKS50ZXN0KG5hbWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0ZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDb250cm9sKCkge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLm1vZGVsKTtcbiAgICB0aGlzLm9uSW5wdXQobnVsbCwgJ2NvdW50cnlJRCcpO1xuICAgIHRoaXMub25JbnB1dChudWxsLCAnc3RhdGUnKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIGxldCBsb2FkaW5nQ291bnRyaWVzOiBib29sZWFuID0gZmFsc2U7XG4gICAgaWYgKG1vZGVsKSB7XG4gICAgICBsZXQgY291bnRyeU5hbWU7XG4gICAgICBpZiAobW9kZWwuY291bnRyeU5hbWUgJiYgbW9kZWwuY291bnRyeUlEKSB7XG4gICAgICAgIGNvdW50cnlOYW1lID0gbW9kZWwuY291bnRyeU5hbWU7XG4gICAgICB9IGVsc2UgaWYgKG1vZGVsLmNvdW50cnlJRCkge1xuICAgICAgICBpZiAodGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZyAmJiB0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnLmdldExhYmVscykge1xuICAgICAgICAgIGlmIChIZWxwZXJzLmlzRnVuY3Rpb24odGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZy5nZXRMYWJlbHMpKSB7XG4gICAgICAgICAgICBsZXQgcHJvbWlzZTogYW55ID0gdGhpcy5jb25maWcuY291bnRyeUlELnBpY2tlckNvbmZpZy5nZXRMYWJlbHMobW9kZWwuY291bnRyeUlEKTtcbiAgICAgICAgICAgIGxvYWRpbmdDb3VudHJpZXMgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb21pc2UudGhlbikge1xuICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZ0NvdW50cmllcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvdW50cnlOYW1lID0gSGVscGVycy5pbnRlcnBvbGF0ZVdpdGhGYWxsYmFjayh0aGlzLmNvbmZpZy5jb3VudHJ5SUQucGlja2VyQ29uZmlnLmZvcm1hdCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsID0gT2JqZWN0LmFzc2lnbihtb2RlbCwgeyBjb3VudHJ5TmFtZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlcygpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb3VudHJ5TmFtZSkge1xuICAgICAgICBjb3VudHJ5TmFtZSA9IGNvdW50cnlOYW1lLnRyaW0oKTtcbiAgICAgICAgbW9kZWwuc3RhdGUgPSBtb2RlbC5zdGF0ZSB8fCAnJztcbiAgICAgICAgdGhpcy5tb2RlbCA9IE9iamVjdC5hc3NpZ24obW9kZWwsIHsgY291bnRyeU5hbWU6IGNvdW50cnlOYW1lIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgICAgfVxuICAgICAgaWYgKCFsb2FkaW5nQ291bnRyaWVzICYmICFIZWxwZXJzLmlzQmxhbmsodGhpcy5tb2RlbC5jb3VudHJ5SUQpKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGVzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZmllbGRMaXN0LmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMub25JbnB1dChudWxsLCBmaWVsZCk7XG4gICAgfSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZhdWx0U3RhdGVDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGQ6ICd2YWx1ZScsXG4gICAgICBmb3JtYXQ6ICckbGFiZWwnLFxuICAgICAgb3B0aW9uczogKHF1ZXJ5ID0gJycsIGNvdW50cnlJRCkgPT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZ2V0U3RhdGVPcHRpb25zKHF1ZXJ5LCBjb3VudHJ5SUQpKTtcbiAgICAgIH0sXG4gICAgICBnZXRMYWJlbHM6IChzdGF0ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc3RhdGUpO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZhdWx0Q291bnRyeUNvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZDogJ3ZhbHVlJyxcbiAgICAgIGZvcm1hdDogJyRsYWJlbCcsXG4gICAgICBvcHRpb25zOiAocXVlcnk6IHN0cmluZyA9ICcnKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogYW55KSA9PiB7XG4gICAgICAgICAgbGV0IGNvdW50cmllczogYW55ID0gZ2V0Q291bnRyaWVzKCk7XG4gICAgICAgICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgICAgICBjb3VudHJpZXMgPSBjb3VudHJpZXMuZmlsdGVyKChjb3VudHJ5KSA9PiBuZXcgUmVnRXhwKGAke3F1ZXJ5fWAsICdnaScpLnRlc3QoY291bnRyeS5uYW1lKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKGNvdW50cmllcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGdldExhYmVsczogKGNvdW50cnlJRCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSkgPT4ge1xuICAgICAgICAgIGxldCBjb3VudHJ5OiBhbnkgPSBmaW5kQnlDb3VudHJ5SWQoY291bnRyeUlEKTtcbiAgICAgICAgICBpZiAoY291bnRyeSkge1xuICAgICAgICAgICAgcmVzb2x2ZShjb3VudHJ5Lm5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKCcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXX0=