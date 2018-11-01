/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Injectable } from '@angular/core';
// Vendor
// APP
import { AddressControl, CheckboxControl, CheckListControl, CustomControl, DateControl, DateTimeControl, EditorControl, FileControl, PickerControl, RadioControl, SelectControl, TextAreaControl, TextBoxControl, TilesControl, TimeControl, } from '../../elements/form/FormControls';
import { EntityPickerResult, EntityPickerResults } from '../../elements/picker/extras/entity-picker-results/EntityPickerResults';
import { Helpers } from '../Helpers';
import { NovoFormControl, NovoFormGroup } from '../../elements/form/NovoFormControl';
import { NovoLabelService } from '../../services/novo-label-service';
import { OptionsService } from './../../services/options/OptionsService';
export class FormUtils {
    /**
     * @param {?} labels
     * @param {?} optionsService
     */
    constructor(labels, optionsService) {
        this.labels = labels;
        this.optionsService = optionsService;
        this.ASSOCIATED_ENTITY_LIST = [
            'Candidate',
            'ClientContact',
            'ClientCorporation',
            'Lead',
            'Opportunity',
            'JobOrder',
            'CorporateUser',
            'Person',
            'Placement',
        ];
        this.PICKER_TEST_LIST = [
            'CandidateText',
            'ClientText',
            'ClientContactText',
            'ClientCorporationText',
            'LeadText',
            'OpportunityText',
            'JobOrderText',
            'CorporateUserText',
            'PersonText',
        ];
    }
    /**
     * @param {?} controls
     * @return {?}
     */
    toFormGroup(controls) {
        /** @type {?} */
        let group = {};
        controls.forEach((control) => {
            /** @type {?} */
            let value = Helpers.isBlank(control.value) ? '' : control.value;
            group[control.key] = new NovoFormControl(value, control);
        });
        return new NovoFormGroup(group);
    }
    /**
     * @return {?}
     */
    emptyFormGroup() {
        return new NovoFormGroup({});
    }
    /**
     * @param {?} formGroup
     * @param {?} controls
     * @return {?}
     */
    addControls(formGroup, controls) {
        controls.forEach((control) => {
            /** @type {?} */
            let value = Helpers.isBlank(control.value) ? '' : control.value;
            /** @type {?} */
            let formControl = new NovoFormControl(value, control);
            formGroup.addControl(control.key, formControl);
        });
    }
    /**
     * \@name toFormGroupFromFieldset
     * @param {?} fieldsets
     * @return {?}
     */
    toFormGroupFromFieldset(fieldsets) {
        /** @type {?} */
        let controls = [];
        fieldsets.forEach((fieldset) => {
            controls.push(...fieldset.controls);
        });
        return this.toFormGroup(controls);
    }
    /**
     * \@name determineInputType
     * @param {?} field
     * @return {?}
     */
    determineInputType(field) {
        /** @type {?} */
        let type;
        /** @type {?} */
        let dataSpecializationTypeMap = {
            DATETIME: 'datetime',
            TIME: 'time',
            MONEY: 'currency',
            PERCENTAGE: 'percentage',
            HTML: 'editor',
            'HTML-MINIMAL': 'editor-minimal',
            YEAR: 'year',
        };
        /** @type {?} */
        let dataTypeToTypeMap = {
            Timestamp: 'date',
            Date: 'date',
            Boolean: 'tiles',
        };
        /** @type {?} */
        let inputTypeToTypeMap = {
            CHECKBOX: 'radio',
            RADIO: 'radio',
            SELECT: 'select',
            TILES: 'tiles',
        };
        /** @type {?} */
        let inputTypeMultiToTypeMap = {
            CHECKBOX: 'checklist',
            RADIO: 'checklist',
            SELECT: 'chips',
        };
        /** @type {?} */
        let typeToTypeMap = {
            file: 'file',
            COMPOSITE: 'address',
        };
        /** @type {?} */
        let numberDataTypeToTypeMap = {
            Double: 'float',
            BigDecimal: 'float',
            Integer: 'number',
        };
        if (field.type === 'TO_MANY') {
            if (field.associatedEntity && ~this.ASSOCIATED_ENTITY_LIST.indexOf(field.associatedEntity.entity)) {
                type = 'entitychips'; // TODO!
            }
            else {
                type = 'chips';
            }
        }
        else if (field.type === 'TO_ONE') {
            if (field.associatedEntity && ~this.ASSOCIATED_ENTITY_LIST.indexOf(field.associatedEntity.entity)) {
                type = 'entitypicker'; // TODO!
            }
            else {
                type = 'picker';
            }
        }
        else if (field.optionsUrl && field.inputType === 'SELECT') {
            if (field.optionsType && ~this.PICKER_TEST_LIST.indexOf(field.optionsType)) {
                type = 'entitypicker'; // TODO!
            }
            else {
                type = 'picker';
            }
        }
        else if (Object.keys(dataSpecializationTypeMap).indexOf(field.dataSpecialization) > -1) {
            type = dataSpecializationTypeMap[field.dataSpecialization];
        }
        else if (Object.keys(dataTypeToTypeMap).indexOf(field.dataType) > -1) {
            type = dataTypeToTypeMap[field.dataType];
        }
        else if (field.inputType === 'TEXTAREA') {
            type = 'textarea';
        }
        else if (field.options && Object.keys(inputTypeToTypeMap).indexOf(field.inputType) > -1 && !field.multiValue) {
            type = inputTypeToTypeMap[field.inputType];
        }
        else if (field.options && Object.keys(inputTypeMultiToTypeMap).indexOf(field.inputType) > -1 && field.multiValue) {
            type = inputTypeMultiToTypeMap[field.inputType];
        }
        else if (Object.keys(typeToTypeMap).indexOf(field.type) > -1) {
            type = typeToTypeMap[field.type];
        }
        else if (Object.keys(numberDataTypeToTypeMap).indexOf(field.dataType) > -1) {
            type = numberDataTypeToTypeMap[field.dataType];
        } /* else {
                throw new Error('FormUtils: This field type is unsupported.');
            }*/
        return type;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    isFieldEncrypted(key) {
        return key.indexOf('customEncrypted') > -1;
    }
    /**
     * @param {?} field
     * @param {?} http
     * @param {?} config
     * @param {?=} overrides
     * @param {?=} forTable
     * @return {?}
     */
    getControlForField(field, http, config, overrides, forTable = false) {
        // TODO: if field.type overrides `determineInputType` we should use it in that method or use this method
        // TODO: (cont.) as the setter of the field argument
        /** @type {?} */
        let type = this.determineInputType(field) || field.type;
        /** @type {?} */
        let control;
        /** @type {?} */
        let controlConfig = {
            type: type,
            key: field.name,
            label: field.label,
            placeholder: field.hint || '',
            required: field.required,
            hidden: !field.required,
            encrypted: this.isFieldEncrypted(field.name ? field.name.toString() : ''),
            value: field.value || field.defaultValue,
            sortOrder: field.sortOrder,
            associatedEntity: field.associatedEntity,
            optionsType: field.optionsType,
            multiple: field.multiValue,
            readOnly: !!field.disabled || !!field.readOnly,
            maxlength: field.maxLength,
            interactions: field.interactions,
            dataSpecialization: field.dataSpecialization,
            dataType: field.dataType,
            description: field.description || '',
            tooltip: field.tooltip,
            tooltipPosition: field.tooltipPosition,
            customControl: field.customControl,
            template: field.template,
            customControlConfig: field.customControlConfig,
            restrictFieldInteractions: field.restrictFieldInteractions,
            validators: field.validators,
            warning: field.warning
        };
        // TODO: getControlOptions should always return the correct format
        /** @type {?} */
        let optionsConfig = this.getControlOptions(field, http, config);
        if (Array.isArray(optionsConfig) && !(type === 'chips' || type === 'picker')) {
            controlConfig.options = optionsConfig;
        }
        else if (Array.isArray(optionsConfig) && (type === 'chips' || type === 'picker')) {
            controlConfig.config = {
                options: optionsConfig,
            };
        }
        else if (optionsConfig) {
            controlConfig.config = optionsConfig;
        }
        if (type === 'year') {
            controlConfig.maxlength = 4;
        }
        // TODO: Overrides should be an iterable of all properties (potentially a private method)
        /** @type {?} */
        let overrideResultsTemplate;
        /** @type {?} */
        let overridePreviewTemplate;
        if (overrides && overrides[field.name]) {
            if (overrides[field.name].resultsTemplate) {
                overrideResultsTemplate = overrides[field.name].resultsTemplate;
                controlConfig.config.resultsTemplate = overrideResultsTemplate;
                delete overrides[field.name].resultsTemplate;
            }
            if (overrides[field.name].overridePreviewTemplate) {
                overrideResultsTemplate = overrides[field.name].overridePreviewTemplate;
                controlConfig.config.overridePreviewTemplate = overrideResultsTemplate;
                delete overrides[field.name].overridePreviewTemplate;
            }
            if (overrides[field.name].pickerCallback) {
                controlConfig.config.callback = overrides[field.name].pickerCallback;
            }
            if (overrides[field.name].type) {
                type = overrides[field.name].type;
            }
            if (overrides[field.name].columns) {
                controlConfig.config.columns = overrides[field.name].columns;
                controlConfig.closeOnSelect = true;
                delete controlConfig.label;
            }
            if (overrides[field.name].warning) {
                controlConfig.warning = overrides[field.name].warning;
            }
            Object.assign(controlConfig, overrides[field.name]);
        }
        switch (type) {
            case 'entitychips':
                // TODO: This doesn't belong in this codebase
                controlConfig.multiple = true;
                controlConfig.config.resultsTemplate = overrideResultsTemplate || EntityPickerResults;
                controlConfig.config.previewTemplate = overridePreviewTemplate || EntityPickerResult;
                // TODO: When appendToBody picker works better in table/form
                control = new PickerControl(controlConfig);
                break;
            case 'chips':
                controlConfig.multiple = true;
                // TODO: When appendToBody picker works better in table/form
                control = new PickerControl(controlConfig);
                break;
            case 'entitypicker':
                // TODO: This doesn't belong in this codebase
                controlConfig.config.resultsTemplate = overrideResultsTemplate || EntityPickerResults;
                // TODO: When appendToBody picker works better in table/form
                control = new PickerControl(controlConfig);
                break;
            case 'picker':
                // TODO: When appendToBody picker works better in table/form
                control = new PickerControl(controlConfig);
                break;
            case 'datetime':
                controlConfig.military = config ? !!config.military : false;
                control = new DateTimeControl(controlConfig);
                break;
            case 'date':
                controlConfig.dateFormat = field.dateFormat;
                controlConfig.textMaskEnabled = field.textMaskEnabled;
                controlConfig.allowInvalidDate = field.allowInvalidDate;
                controlConfig.military = config ? !!config.military : false;
                control = new DateControl(controlConfig);
                break;
            case 'time':
                controlConfig.military = config ? !!config.military : false;
                control = new TimeControl(controlConfig);
                break;
            case 'currency':
            case 'money':
            case 'email':
            case 'percentage':
            case 'float':
            case 'number':
            case 'year':
                // TODO: Only types from `determineInputType` should be used in this class
                if (type === 'money') {
                    type = 'currency';
                }
                controlConfig.type = type;
                control = new TextBoxControl(controlConfig);
                break;
            case 'text':
                control = new TextBoxControl(controlConfig);
                break;
            case 'textarea':
                control = new TextAreaControl(controlConfig);
                break;
            case 'editor':
                control = new EditorControl(controlConfig);
                break;
            case 'editor-minimal':
                control = new EditorControl(controlConfig);
                control.minimal = true;
                break;
            case 'tiles':
                control = new TilesControl(controlConfig);
                break;
            case 'checkbox':
                controlConfig.checkboxLabel = field.checkboxLabel;
                control = new CheckboxControl(controlConfig);
                break;
            case 'checklist':
                control = new CheckListControl(controlConfig);
                break;
            case 'radio':
                control = new RadioControl(controlConfig);
                break;
            case 'select':
                control = new SelectControl(controlConfig);
                break;
            case 'address':
                controlConfig.required = field.required || false;
                if (Helpers.isBlank(controlConfig.config)) {
                    controlConfig.config = {};
                }
                controlConfig.config.required = field.required;
                controlConfig.config.readOnly = controlConfig.readOnly;
                if (field.fields && field.fields.length) {
                    for (let subfield of field.fields) {
                        controlConfig.config[subfield.name] = {
                            required: !!subfield.required,
                            hidden: !!subfield.readOnly,
                        };
                        if (!Helpers.isEmpty(subfield.label)) {
                            controlConfig.config[subfield.name].label = subfield.label;
                        }
                        if (!Helpers.isEmpty(subfield.maxLength)) {
                            controlConfig.config[subfield.name].maxlength = subfield.maxLength;
                        }
                        controlConfig.required = controlConfig.required || subfield.required;
                        if (subfield.defaultValue) {
                            if (Helpers.isBlank(controlConfig.value)) {
                                controlConfig.value = {};
                            }
                            controlConfig.value[subfield.name] = subfield.defaultValue;
                        }
                        else if (subfield.name === 'countryID') {
                            if (Helpers.isBlank(controlConfig.value)) {
                                controlConfig.value = {};
                            }
                            controlConfig.value[subfield.name] = 1;
                        }
                        if (subfield.name === 'state' || subfield.name === 'countryID') {
                            if (subfield.name === 'state') {
                                subfield.optionsType = 'State';
                            }
                            else if (subfield.name === 'countryID') {
                                subfield.optionsType = 'Country';
                            }
                            if (!subfield.optionsUrl) {
                                subfield.optionsUrl = `options/${subfield.optionsType}`;
                            }
                            controlConfig.config[subfield.name].pickerConfig = this.getControlOptions(subfield, http, config);
                        }
                    }
                }
                controlConfig.isEmpty = this.isAddressEmpty;
                control = new AddressControl(controlConfig);
                break;
            case 'file':
                control = new FileControl(controlConfig);
                break;
            case 'custom':
                control = new CustomControl(controlConfig);
                break;
            default:
                control = new TextBoxControl(controlConfig);
                break;
        }
        return control;
    }
    /**
     * @param {?} meta
     * @param {?} currencyFormat
     * @param {?} http
     * @param {?} config
     * @param {?=} overrides
     * @param {?=} forTable
     * @return {?}
     */
    toControls(meta, currencyFormat, http, config, overrides, forTable = false) {
        /** @type {?} */
        let controls = [];
        if (meta && meta.fields) {
            /** @type {?} */
            let fields = meta.fields;
            fields.forEach((field) => {
                if (field.name !== 'id' &&
                    (field.dataSpecialization !== 'SYSTEM' || ['address', 'billingAddress', 'secondaryAddress'].indexOf(field.name) !== -1) &&
                    !field.readOnly) {
                    /** @type {?} */
                    let control = this.getControlForField(field, http, config, overrides, forTable);
                    // Set currency format
                    if (control.subType === 'currency') {
                        control.currencyFormat = currencyFormat;
                    }
                    // Add to controls
                    controls.push(control);
                }
            });
        }
        return controls;
    }
    /**
     * @param {?} meta
     * @param {?} currencyFormat
     * @param {?} http
     * @param {?} config
     * @param {?=} overrides
     * @return {?}
     */
    toTableControls(meta, currencyFormat, http, config, overrides) {
        /** @type {?} */
        let controls = this.toControls(meta, currencyFormat, http, config, overrides, true);
        /** @type {?} */
        let ret = {};
        controls.forEach((control) => {
            ret[control.key] = {
                editorType: control.__type,
                editorConfig: control.__config,
            };
        });
        return ret;
    }
    /**
     * @param {?} meta
     * @param {?} currencyFormat
     * @param {?} http
     * @param {?} config
     * @param {?=} overrides
     * @return {?}
     */
    toFieldSets(meta, currencyFormat, http, config, overrides) {
        /** @type {?} */
        let fieldsets = [];
        /** @type {?} */
        let ranges = [];
        if (meta && meta.fields) {
            /** @type {?} */
            let fields = meta.fields
                .map((field) => {
                if (!field.hasOwnProperty('sortOrder')) {
                    field.sortOrder = Number.MAX_SAFE_INTEGER - 1;
                }
                return field;
            })
                .sort(Helpers.sortByField(['sortOrder', 'name']));
            if (meta.sectionHeaders && meta.sectionHeaders.length) {
                meta.sectionHeaders.sort(Helpers.sortByField(['sortOrder', 'name']));
                meta.sectionHeaders.forEach((item, i) => {
                    if (item.enabled) {
                        if (item.sortOrder > 0 && fieldsets.length === 0) {
                            fieldsets.push({
                                controls: [],
                            });
                            ranges.push({
                                min: 0,
                                max: item.sortOrder - 1,
                                fieldsetIdx: 0,
                            });
                        }
                        fieldsets.push({
                            title: item.label,
                            icon: item.icon || 'bhi-section',
                            controls: [],
                        });
                        ranges.push({
                            min: item.sortOrder,
                            max: Number.MAX_SAFE_INTEGER,
                            fieldsetIdx: fieldsets.length - 1,
                        });
                        if (i > 0 && fieldsets.length > 1) {
                            ranges[fieldsets.length - 2].max = item.sortOrder - 1;
                        }
                    }
                });
                if (!ranges.length) {
                    fieldsets.push({
                        controls: [],
                    });
                    ranges.push({
                        min: 0,
                        max: Number.MAX_SAFE_INTEGER,
                        fieldsetIdx: 0,
                    });
                }
            }
            else {
                fieldsets.push({
                    controls: [],
                });
                ranges.push({
                    min: 0,
                    max: Number.MAX_SAFE_INTEGER,
                    fieldsetIdx: 0,
                });
            }
            fields.forEach((field) => {
                if (field.name !== 'id' &&
                    (field.dataSpecialization !== 'SYSTEM' || ['address', 'billingAddress', 'secondaryAddress'].indexOf(field.name) !== -1) &&
                    !field.readOnly) {
                    /** @type {?} */
                    let control = this.getControlForField(field, http, config, overrides);
                    // Set currency format
                    if (control.subType === 'currency') {
                        control.currencyFormat = currencyFormat;
                    }
                    /** @type {?} */
                    let location = ranges.find((item) => {
                        return (item.min <= field.sortOrder && field.sortOrder <= item.max) || (item.min <= field.sortOrder && item.min === item.max);
                    });
                    if (location) {
                        // Add to controls
                        fieldsets[location.fieldsetIdx].controls.push(control);
                    }
                }
            });
        }
        if (fieldsets.length > 0) {
            return fieldsets;
        }
        else {
            return [
                {
                    controls: this.toControls(meta, currencyFormat, http, config),
                },
            ];
        }
    }
    /**
     * @param {?} field
     * @param {?} http
     * @param {?} config
     * @return {?}
     */
    getControlOptions(field, http, config) {
        // TODO: The token property of config is the only property used; just pass in `token: string`
        if (field.dataType === 'Boolean' && !field.options) {
            // TODO: dataType should only be determined by `determineInputType` which doesn't ever return 'Boolean' it
            // TODO: (cont.) returns `tiles`
            return [{ value: false, label: this.labels.no }, { value: true, label: this.labels.yes }];
        }
        else if (field.optionsUrl) {
            return this.optionsService.getOptionsConfig(http, field, config);
        }
        else if (Array.isArray(field.options) && field.type === 'chips') {
            /** @type {?} */
            let options = field.options;
            return {
                field: 'value',
                format: '$label',
                options,
            };
        }
        else if (field.options) {
            return field.options;
        }
        return null;
    }
    /**
     * @param {?} controls
     * @param {?} values
     * @param {?=} keepClean
     * @param {?=} keyOverride
     * @return {?}
     */
    setInitialValues(controls, values, keepClean, keyOverride) {
        for (let i = 0; i < controls.length; i++) {
            /** @type {?} */
            let control = controls[i];
            /** @type {?} */
            let key = keyOverride ? control.key.replace(keyOverride, '') : control.key;
            /** @type {?} */
            let value = values[key];
            if (Helpers.isBlank(value)) {
                continue;
            }
            if (Array.isArray(value) && value.length === 0) {
                continue;
            }
            if (Array.isArray(value) && value.length > 0) {
                value = value.filter((val) => !(Object.keys(val).length === 0 && val.constructor === Object));
                if (value.length === 0) {
                    continue;
                }
            }
            if (value.data && value.data.length === 0) {
                continue;
            }
            if (Object.keys(value).length === 0 && value.constructor === Object) {
                continue;
            }
            control.value = value;
            // TODO: keepClean is not required, but is always used. It should default (to true?)
            control.dirty = !keepClean;
        }
    }
    /**
     * @param {?} fieldsets
     * @param {?} values
     * @param {?=} keepClean
     * @return {?}
     */
    setInitialValuesFieldsets(fieldsets, values, keepClean) {
        fieldsets.forEach((fieldset) => {
            this.setInitialValues(fieldset.controls, values, keepClean);
        });
    }
    /**
     * @param {?} controls
     * @return {?}
     */
    forceShowAllControls(controls) {
        controls.forEach((control) => {
            control.hidden = false;
        });
    }
    /**
     * @param {?} fieldsets
     * @return {?}
     */
    forceShowAllControlsInFieldsets(fieldsets) {
        fieldsets.forEach((fieldset) => {
            fieldset.controls.forEach((control) => {
                control.hidden = false;
            });
        });
    }
    /**
     * @param {?} form
     * @return {?}
     */
    forceValidation(form) {
        Object.keys(form.controls).forEach((key) => {
            /** @type {?} */
            let control = form.controls[key];
            if (control.required && Helpers.isBlank(form.value[control.key])) {
                control.markAsDirty();
                control.markAsTouched();
            }
        });
    }
    /**
     * @param {?} control
     * @return {?}
     */
    isAddressEmpty(control) {
        /** @type {?} */
        let fieldList = ['address1', 'address2', 'city', 'state', 'zip', 'countryID'];
        /** @type {?} */
        let valid = true;
        if (control.value && control.config) {
            fieldList.forEach((subfield) => {
                if (((subfield !== 'countryID' &&
                    !Helpers.isEmpty(control.config[subfield]) &&
                    control.config[subfield].required &&
                    (Helpers.isBlank(control.value[subfield]) || Helpers.isEmpty(control.value[subfield]))) ||
                    (subfield === 'countryID' &&
                        !Helpers.isEmpty(control.config.countryID) &&
                        control.config.countryID.required &&
                        Helpers.isEmpty(control.value.countryName))) &&
                    !(subfield === 'state' &&
                        !Helpers.isBlank(control.value.countryName) &&
                        control.config.state.pickerConfig &&
                        control.config.state.pickerConfig.defaultOptions &&
                        control.config.state.pickerConfig.defaultOptions.length === 0)) {
                    valid = false;
                }
            });
        }
        return valid;
    }
}
FormUtils.decorators = [
    { type: Injectable }
];
FormUtils.ctorParameters = () => [
    { type: NovoLabelService },
    { type: OptionsService }
];
if (false) {
    /** @type {?} */
    FormUtils.prototype.ASSOCIATED_ENTITY_LIST;
    /** @type {?} */
    FormUtils.prototype.PICKER_TEST_LIST;
    /** @type {?} */
    FormUtils.prototype.labels;
    /** @type {?} */
    FormUtils.prototype.optionsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybVV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL2Zvcm0tdXRpbHMvRm9ybVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBRzNDLE9BQU8sRUFDTCxjQUFjLEVBRWQsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsV0FBVyxFQUNYLGVBQWUsRUFDZixhQUFhLEVBQ2IsV0FBVyxFQUVYLGFBQWEsRUFDYixZQUFZLEVBQ1osYUFBYSxFQUNiLGVBQWUsRUFDZixjQUFjLEVBQ2QsWUFBWSxFQUNaLFdBQVcsR0FDWixNQUFNLGtDQUFrQyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ2pJLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHekUsTUFBTTs7Ozs7SUF3QkosWUFBbUIsTUFBd0IsRUFBUyxjQUE4QjtRQUEvRCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFTLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQXZCbEYsMkJBQXNCLEdBQWE7WUFDakMsV0FBVztZQUNYLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsTUFBTTtZQUNOLGFBQWE7WUFDYixVQUFVO1lBQ1YsZUFBZTtZQUNmLFFBQVE7WUFDUixXQUFXO1NBQ1osQ0FBQztRQUNGLHFCQUFnQixHQUFhO1lBQzNCLGVBQWU7WUFDZixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLHVCQUF1QjtZQUN2QixV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QUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUFubkJGLFVBQVU7OztZQUhGLGdCQUFnQjtZQUNoQixjQUFjOzs7O0lBSXJCLDJDQVVFOztJQUNGLHFDQVVFOztJQUVVLDJCQUErQjs7SUFBRSxtQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIFZlbmRvclxuLy8gQVBQXG5pbXBvcnQge1xuICBBZGRyZXNzQ29udHJvbCxcbiAgQmFzZUNvbnRyb2wsXG4gIENoZWNrYm94Q29udHJvbCxcbiAgQ2hlY2tMaXN0Q29udHJvbCxcbiAgQ3VzdG9tQ29udHJvbCxcbiAgRGF0ZUNvbnRyb2wsXG4gIERhdGVUaW1lQ29udHJvbCxcbiAgRWRpdG9yQ29udHJvbCxcbiAgRmlsZUNvbnRyb2wsXG4gIE5vdm9Db250cm9sQ29uZmlnLFxuICBQaWNrZXJDb250cm9sLFxuICBSYWRpb0NvbnRyb2wsXG4gIFNlbGVjdENvbnRyb2wsXG4gIFRleHRBcmVhQ29udHJvbCxcbiAgVGV4dEJveENvbnRyb2wsXG4gIFRpbGVzQ29udHJvbCxcbiAgVGltZUNvbnRyb2wsXG59IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0vRm9ybUNvbnRyb2xzJztcbmltcG9ydCB7IEVudGl0eVBpY2tlclJlc3VsdCwgRW50aXR5UGlja2VyUmVzdWx0cyB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL3BpY2tlci9leHRyYXMvZW50aXR5LXBpY2tlci1yZXN1bHRzL0VudGl0eVBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0ZpZWxkc2V0IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybS9Gb3JtSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOb3ZvRm9ybUNvbnRyb2wsIE5vdm9Gb3JtR3JvdXAgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9mb3JtL05vdm9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9vcHRpb25zL09wdGlvbnNTZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1VdGlscyB7XG4gIEFTU09DSUFURURfRU5USVRZX0xJU1Q6IHN0cmluZ1tdID0gW1xuICAgICdDYW5kaWRhdGUnLFxuICAgICdDbGllbnRDb250YWN0JyxcbiAgICAnQ2xpZW50Q29ycG9yYXRpb24nLFxuICAgICdMZWFkJyxcbiAgICAnT3Bwb3J0dW5pdHknLFxuICAgICdKb2JPcmRlcicsXG4gICAgJ0NvcnBvcmF0ZVVzZXInLFxuICAgICdQZXJzb24nLFxuICAgICdQbGFjZW1lbnQnLFxuICBdO1xuICBQSUNLRVJfVEVTVF9MSVNUOiBzdHJpbmdbXSA9IFtcbiAgICAnQ2FuZGlkYXRlVGV4dCcsXG4gICAgJ0NsaWVudFRleHQnLFxuICAgICdDbGllbnRDb250YWN0VGV4dCcsXG4gICAgJ0NsaWVudENvcnBvcmF0aW9uVGV4dCcsXG4gICAgJ0xlYWRUZXh0JyxcbiAgICAnT3Bwb3J0dW5pdHlUZXh0JyxcbiAgICAnSm9iT3JkZXJUZXh0JyxcbiAgICAnQ29ycG9yYXRlVXNlclRleHQnLFxuICAgICdQZXJzb25UZXh0JyxcbiAgXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwdWJsaWMgb3B0aW9uc1NlcnZpY2U6IE9wdGlvbnNTZXJ2aWNlKSB7fVxuXG4gIHRvRm9ybUdyb3VwKGNvbnRyb2xzOiBBcnJheTxhbnk+KTogTm92b0Zvcm1Hcm91cCB7XG4gICAgbGV0IGdyb3VwOiBhbnkgPSB7fTtcbiAgICBjb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZSkgPyAnJyA6IGNvbnRyb2wudmFsdWU7XG4gICAgICBncm91cFtjb250cm9sLmtleV0gPSBuZXcgTm92b0Zvcm1Db250cm9sKHZhbHVlLCBjb250cm9sKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IE5vdm9Gb3JtR3JvdXAoZ3JvdXApO1xuICB9XG5cbiAgZW1wdHlGb3JtR3JvdXAoKTogTm92b0Zvcm1Hcm91cCB7XG4gICAgcmV0dXJuIG5ldyBOb3ZvRm9ybUdyb3VwKHt9KTtcbiAgfVxuXG4gIGFkZENvbnRyb2xzKGZvcm1Hcm91cDogTm92b0Zvcm1Hcm91cCwgY29udHJvbHM6IEFycmF5PE5vdm9Db250cm9sQ29uZmlnPik6IHZvaWQge1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IEhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlKSA/ICcnIDogY29udHJvbC52YWx1ZTtcbiAgICAgIGxldCBmb3JtQ29udHJvbCA9IG5ldyBOb3ZvRm9ybUNvbnRyb2wodmFsdWUsIGNvbnRyb2wpO1xuICAgICAgZm9ybUdyb3VwLmFkZENvbnRyb2woY29udHJvbC5rZXksIGZvcm1Db250cm9sKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSB0b0Zvcm1Hcm91cEZyb21GaWVsZHNldFxuICAgKiBAcGFyYW0gZmllbGRzZXRzXG4gICAqL1xuICB0b0Zvcm1Hcm91cEZyb21GaWVsZHNldChmaWVsZHNldHM6IEFycmF5PE5vdm9GaWVsZHNldD4pOiBOb3ZvRm9ybUdyb3VwIHtcbiAgICBsZXQgY29udHJvbHM6IEFycmF5PE5vdm9Gb3JtQ29udHJvbD4gPSBbXTtcbiAgICBmaWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIGNvbnRyb2xzLnB1c2goLi4uZmllbGRzZXQuY29udHJvbHMpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnRvRm9ybUdyb3VwKGNvbnRyb2xzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBkZXRlcm1pbmVJbnB1dFR5cGVcbiAgICogQHBhcmFtIGZpZWxkXG4gICAqL1xuICBkZXRlcm1pbmVJbnB1dFR5cGUoZmllbGQ6IHtcbiAgICBkYXRhU3BlY2lhbGl6YXRpb246IHN0cmluZztcbiAgICBpbnB1dFR5cGU6IHN0cmluZztcbiAgICBvcHRpb25zOiBzdHJpbmc7XG4gICAgbXVsdGlWYWx1ZTogYm9vbGVhbjtcbiAgICBkYXRhVHlwZTogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBhc3NvY2lhdGVkRW50aXR5PzogYW55O1xuICAgIG9wdGlvbnNVcmw/OiBzdHJpbmc7XG4gICAgb3B0aW9uc1R5cGU/OiBzdHJpbmc7XG4gIH0pOiBzdHJpbmcge1xuICAgIGxldCB0eXBlOiBzdHJpbmc7XG4gICAgbGV0IGRhdGFTcGVjaWFsaXphdGlvblR5cGVNYXAgPSB7XG4gICAgICBEQVRFVElNRTogJ2RhdGV0aW1lJyxcbiAgICAgIFRJTUU6ICd0aW1lJyxcbiAgICAgIE1PTkVZOiAnY3VycmVuY3knLFxuICAgICAgUEVSQ0VOVEFHRTogJ3BlcmNlbnRhZ2UnLFxuICAgICAgSFRNTDogJ2VkaXRvcicsXG4gICAgICAnSFRNTC1NSU5JTUFMJzogJ2VkaXRvci1taW5pbWFsJyxcbiAgICAgIFlFQVI6ICd5ZWFyJyxcbiAgICB9O1xuICAgIGxldCBkYXRhVHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIFRpbWVzdGFtcDogJ2RhdGUnLFxuICAgICAgRGF0ZTogJ2RhdGUnLFxuICAgICAgQm9vbGVhbjogJ3RpbGVzJyxcbiAgICB9O1xuICAgIGxldCBpbnB1dFR5cGVUb1R5cGVNYXAgPSB7XG4gICAgICBDSEVDS0JPWDogJ3JhZGlvJyxcbiAgICAgIFJBRElPOiAncmFkaW8nLFxuICAgICAgU0VMRUNUOiAnc2VsZWN0JyxcbiAgICAgIFRJTEVTOiAndGlsZXMnLFxuICAgIH07XG4gICAgbGV0IGlucHV0VHlwZU11bHRpVG9UeXBlTWFwID0ge1xuICAgICAgQ0hFQ0tCT1g6ICdjaGVja2xpc3QnLFxuICAgICAgUkFESU86ICdjaGVja2xpc3QnLFxuICAgICAgU0VMRUNUOiAnY2hpcHMnLFxuICAgIH07XG4gICAgbGV0IHR5cGVUb1R5cGVNYXAgPSB7XG4gICAgICBmaWxlOiAnZmlsZScsXG4gICAgICBDT01QT1NJVEU6ICdhZGRyZXNzJyxcbiAgICB9O1xuICAgIGxldCBudW1iZXJEYXRhVHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIERvdWJsZTogJ2Zsb2F0JyxcbiAgICAgIEJpZ0RlY2ltYWw6ICdmbG9hdCcsXG4gICAgICBJbnRlZ2VyOiAnbnVtYmVyJyxcbiAgICB9O1xuICAgIGlmIChmaWVsZC50eXBlID09PSAnVE9fTUFOWScpIHtcbiAgICAgIGlmIChmaWVsZC5hc3NvY2lhdGVkRW50aXR5ICYmIH50aGlzLkFTU09DSUFURURfRU5USVRZX0xJU1QuaW5kZXhPZihmaWVsZC5hc3NvY2lhdGVkRW50aXR5LmVudGl0eSkpIHtcbiAgICAgICAgdHlwZSA9ICdlbnRpdHljaGlwcyc7IC8vIFRPRE8hXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlID0gJ2NoaXBzJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdUT19PTkUnKSB7XG4gICAgICBpZiAoZmllbGQuYXNzb2NpYXRlZEVudGl0eSAmJiB+dGhpcy5BU1NPQ0lBVEVEX0VOVElUWV9MSVNULmluZGV4T2YoZmllbGQuYXNzb2NpYXRlZEVudGl0eS5lbnRpdHkpKSB7XG4gICAgICAgIHR5cGUgPSAnZW50aXR5cGlja2VyJzsgLy8gVE9ETyFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGUgPSAncGlja2VyJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZpZWxkLm9wdGlvbnNVcmwgJiYgZmllbGQuaW5wdXRUeXBlID09PSAnU0VMRUNUJykge1xuICAgICAgaWYgKGZpZWxkLm9wdGlvbnNUeXBlICYmIH50aGlzLlBJQ0tFUl9URVNUX0xJU1QuaW5kZXhPZihmaWVsZC5vcHRpb25zVHlwZSkpIHtcbiAgICAgICAgdHlwZSA9ICdlbnRpdHlwaWNrZXInOyAvLyBUT0RPIVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9ICdwaWNrZXInO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXMoZGF0YVNwZWNpYWxpemF0aW9uVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24pID4gLTEpIHtcbiAgICAgIHR5cGUgPSBkYXRhU3BlY2lhbGl6YXRpb25UeXBlTWFwW2ZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbl07XG4gICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhkYXRhVHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5kYXRhVHlwZSkgPiAtMSkge1xuICAgICAgdHlwZSA9IGRhdGFUeXBlVG9UeXBlTWFwW2ZpZWxkLmRhdGFUeXBlXTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLmlucHV0VHlwZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgdHlwZSA9ICd0ZXh0YXJlYSc7XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zICYmIE9iamVjdC5rZXlzKGlucHV0VHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5pbnB1dFR5cGUpID4gLTEgJiYgIWZpZWxkLm11bHRpVmFsdWUpIHtcbiAgICAgIHR5cGUgPSBpbnB1dFR5cGVUb1R5cGVNYXBbZmllbGQuaW5wdXRUeXBlXTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLm9wdGlvbnMgJiYgT2JqZWN0LmtleXMoaW5wdXRUeXBlTXVsdGlUb1R5cGVNYXApLmluZGV4T2YoZmllbGQuaW5wdXRUeXBlKSA+IC0xICYmIGZpZWxkLm11bHRpVmFsdWUpIHtcbiAgICAgIHR5cGUgPSBpbnB1dFR5cGVNdWx0aVRvVHlwZU1hcFtmaWVsZC5pbnB1dFR5cGVdO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXModHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC50eXBlKSA+IC0xKSB7XG4gICAgICB0eXBlID0gdHlwZVRvVHlwZU1hcFtmaWVsZC50eXBlXTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKG51bWJlckRhdGFUeXBlVG9UeXBlTWFwKS5pbmRleE9mKGZpZWxkLmRhdGFUeXBlKSA+IC0xKSB7XG4gICAgICB0eXBlID0gbnVtYmVyRGF0YVR5cGVUb1R5cGVNYXBbZmllbGQuZGF0YVR5cGVdO1xuICAgIH0gLyogZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm1VdGlsczogVGhpcyBmaWVsZCB0eXBlIGlzIHVuc3VwcG9ydGVkLicpO1xuICAgICAgICB9Ki9cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGlzRmllbGRFbmNyeXB0ZWQoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4ga2V5LmluZGV4T2YoJ2N1c3RvbUVuY3J5cHRlZCcpID4gLTE7XG4gIH1cblxuICBnZXRDb250cm9sRm9yRmllbGQoXG4gICAgZmllbGQ6IGFueSxcbiAgICBodHRwLFxuICAgIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuIH0sXG4gICAgb3ZlcnJpZGVzPzogYW55LFxuICAgIGZvclRhYmxlOiBib29sZWFuID0gZmFsc2UsXG4gICkge1xuICAgIC8vIFRPRE86IGlmIGZpZWxkLnR5cGUgb3ZlcnJpZGVzIGBkZXRlcm1pbmVJbnB1dFR5cGVgIHdlIHNob3VsZCB1c2UgaXQgaW4gdGhhdCBtZXRob2Qgb3IgdXNlIHRoaXMgbWV0aG9kXG4gICAgLy8gVE9ETzogKGNvbnQuKSBhcyB0aGUgc2V0dGVyIG9mIHRoZSBmaWVsZCBhcmd1bWVudFxuICAgIGxldCB0eXBlOiBzdHJpbmcgPSB0aGlzLmRldGVybWluZUlucHV0VHlwZShmaWVsZCkgfHwgZmllbGQudHlwZTtcbiAgICBsZXQgY29udHJvbDogYW55O1xuICAgIGxldCBjb250cm9sQ29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZyA9IHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBrZXk6IGZpZWxkLm5hbWUsXG4gICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICBwbGFjZWhvbGRlcjogZmllbGQuaGludCB8fCAnJyxcbiAgICAgIHJlcXVpcmVkOiBmaWVsZC5yZXF1aXJlZCxcbiAgICAgIGhpZGRlbjogIWZpZWxkLnJlcXVpcmVkLFxuICAgICAgZW5jcnlwdGVkOiB0aGlzLmlzRmllbGRFbmNyeXB0ZWQoZmllbGQubmFtZSA/IGZpZWxkLm5hbWUudG9TdHJpbmcoKSA6ICcnKSxcbiAgICAgIHZhbHVlOiBmaWVsZC52YWx1ZSB8fCBmaWVsZC5kZWZhdWx0VmFsdWUsXG4gICAgICBzb3J0T3JkZXI6IGZpZWxkLnNvcnRPcmRlcixcbiAgICAgIGFzc29jaWF0ZWRFbnRpdHk6IGZpZWxkLmFzc29jaWF0ZWRFbnRpdHksXG4gICAgICBvcHRpb25zVHlwZTogZmllbGQub3B0aW9uc1R5cGUsXG4gICAgICBtdWx0aXBsZTogZmllbGQubXVsdGlWYWx1ZSxcbiAgICAgIHJlYWRPbmx5OiAhIWZpZWxkLmRpc2FibGVkIHx8ICEhZmllbGQucmVhZE9ubHksXG4gICAgICBtYXhsZW5ndGg6IGZpZWxkLm1heExlbmd0aCxcbiAgICAgIGludGVyYWN0aW9uczogZmllbGQuaW50ZXJhY3Rpb25zLFxuICAgICAgZGF0YVNwZWNpYWxpemF0aW9uOiBmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24sXG4gICAgICBkYXRhVHlwZTogZmllbGQuZGF0YVR5cGUsXG4gICAgICBkZXNjcmlwdGlvbjogZmllbGQuZGVzY3JpcHRpb24gfHwgJycsXG4gICAgICB0b29sdGlwOiBmaWVsZC50b29sdGlwLFxuICAgICAgdG9vbHRpcFBvc2l0aW9uOiBmaWVsZC50b29sdGlwUG9zaXRpb24sXG4gICAgICBjdXN0b21Db250cm9sOiBmaWVsZC5jdXN0b21Db250cm9sLFxuICAgICAgdGVtcGxhdGU6IGZpZWxkLnRlbXBsYXRlLFxuICAgICAgY3VzdG9tQ29udHJvbENvbmZpZzogZmllbGQuY3VzdG9tQ29udHJvbENvbmZpZyxcbiAgICAgIHJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnM6IGZpZWxkLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMsXG4gICAgICB2YWxpZGF0b3JzOiBmaWVsZC52YWxpZGF0b3JzLFxuICAgICAgd2FybmluZzogZmllbGQud2FybmluZ1xuICAgIH07XG4gICAgLy8gVE9ETzogZ2V0Q29udHJvbE9wdGlvbnMgc2hvdWxkIGFsd2F5cyByZXR1cm4gdGhlIGNvcnJlY3QgZm9ybWF0XG4gICAgbGV0IG9wdGlvbnNDb25maWcgPSB0aGlzLmdldENvbnRyb2xPcHRpb25zKGZpZWxkLCBodHRwLCBjb25maWcpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnNDb25maWcpICYmICEodHlwZSA9PT0gJ2NoaXBzJyB8fCB0eXBlID09PSAncGlja2VyJykpIHtcbiAgICAgIGNvbnRyb2xDb25maWcub3B0aW9ucyA9IG9wdGlvbnNDb25maWc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnNDb25maWcpICYmICh0eXBlID09PSAnY2hpcHMnIHx8IHR5cGUgPT09ICdwaWNrZXInKSkge1xuICAgICAgY29udHJvbENvbmZpZy5jb25maWcgPSB7XG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnNDb25maWcsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAob3B0aW9uc0NvbmZpZykge1xuICAgICAgY29udHJvbENvbmZpZy5jb25maWcgPSBvcHRpb25zQ29uZmlnO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAneWVhcicpIHtcbiAgICAgIGNvbnRyb2xDb25maWcubWF4bGVuZ3RoID0gNDtcbiAgICB9XG4gICAgLy8gVE9ETzogT3ZlcnJpZGVzIHNob3VsZCBiZSBhbiBpdGVyYWJsZSBvZiBhbGwgcHJvcGVydGllcyAocG90ZW50aWFsbHkgYSBwcml2YXRlIG1ldGhvZClcbiAgICBsZXQgb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGU7XG4gICAgbGV0IG92ZXJyaWRlUHJldmlld1RlbXBsYXRlO1xuICAgIGlmIChvdmVycmlkZXMgJiYgb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdKSB7XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnJlc3VsdHNUZW1wbGF0ZSkge1xuICAgICAgICBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5yZXN1bHRzVGVtcGxhdGU7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlO1xuICAgICAgICBkZWxldGUgb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnJlc3VsdHNUZW1wbGF0ZTtcbiAgICAgIH1cbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0ub3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGUpIHtcbiAgICAgICAgb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGUgPSBvdmVycmlkZXNbZmllbGQubmFtZV0ub3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGU7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLm92ZXJyaWRlUHJldmlld1RlbXBsYXRlID0gb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGU7XG4gICAgICAgIGRlbGV0ZSBvdmVycmlkZXNbZmllbGQubmFtZV0ub3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGU7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnBpY2tlckNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLmNhbGxiYWNrID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnBpY2tlckNhbGxiYWNrO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS50eXBlKSB7XG4gICAgICAgIHR5cGUgPSBvdmVycmlkZXNbZmllbGQubmFtZV0udHlwZTtcbiAgICAgIH1cbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0uY29sdW1ucykge1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5jb2x1bW5zID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLmNvbHVtbnM7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY2xvc2VPblNlbGVjdCA9IHRydWU7XG4gICAgICAgIGRlbGV0ZSBjb250cm9sQ29uZmlnLmxhYmVsO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS53YXJuaW5nKSB7XG4gICAgICAgIGNvbnRyb2xDb25maWcud2FybmluZyA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS53YXJuaW5nO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmFzc2lnbihjb250cm9sQ29uZmlnLCBvdmVycmlkZXNbZmllbGQubmFtZV0pO1xuICAgIH1cblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnZW50aXR5Y2hpcHMnOlxuICAgICAgICAvLyBUT0RPOiBUaGlzIGRvZXNuJ3QgYmVsb25nIGluIHRoaXMgY29kZWJhc2VcbiAgICAgICAgY29udHJvbENvbmZpZy5tdWx0aXBsZSA9IHRydWU7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlIHx8IEVudGl0eVBpY2tlclJlc3VsdHM7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnByZXZpZXdUZW1wbGF0ZSA9IG92ZXJyaWRlUHJldmlld1RlbXBsYXRlIHx8IEVudGl0eVBpY2tlclJlc3VsdDtcbiAgICAgICAgLy8gVE9ETzogV2hlbiBhcHBlbmRUb0JvZHkgcGlja2VyIHdvcmtzIGJldHRlciBpbiB0YWJsZS9mb3JtXG4gICAgICAgIGNvbnRyb2wgPSBuZXcgUGlja2VyQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGlwcyc6XG4gICAgICAgIGNvbnRyb2xDb25maWcubXVsdGlwbGUgPSB0cnVlO1xuICAgICAgICAvLyBUT0RPOiBXaGVuIGFwcGVuZFRvQm9keSBwaWNrZXIgd29ya3MgYmV0dGVyIGluIHRhYmxlL2Zvcm1cbiAgICAgICAgY29udHJvbCA9IG5ldyBQaWNrZXJDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VudGl0eXBpY2tlcic6XG4gICAgICAgIC8vIFRPRE86IFRoaXMgZG9lc24ndCBiZWxvbmcgaW4gdGhpcyBjb2RlYmFzZVxuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5yZXN1bHRzVGVtcGxhdGUgPSBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZSB8fCBFbnRpdHlQaWNrZXJSZXN1bHRzO1xuICAgICAgICAvLyBUT0RPOiBXaGVuIGFwcGVuZFRvQm9keSBwaWNrZXIgd29ya3MgYmV0dGVyIGluIHRhYmxlL2Zvcm1cbiAgICAgICAgY29udHJvbCA9IG5ldyBQaWNrZXJDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BpY2tlcic6XG4gICAgICAgIC8vIFRPRE86IFdoZW4gYXBwZW5kVG9Cb2R5IHBpY2tlciB3b3JrcyBiZXR0ZXIgaW4gdGFibGUvZm9ybVxuICAgICAgICBjb250cm9sID0gbmV3IFBpY2tlckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF0ZXRpbWUnOlxuICAgICAgICBjb250cm9sQ29uZmlnLm1pbGl0YXJ5ID0gY29uZmlnID8gISFjb25maWcubWlsaXRhcnkgOiBmYWxzZTtcbiAgICAgICAgY29udHJvbCA9IG5ldyBEYXRlVGltZUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgIGNvbnRyb2xDb25maWcuZGF0ZUZvcm1hdCA9IGZpZWxkLmRhdGVGb3JtYXQ7XG4gICAgICAgIGNvbnRyb2xDb25maWcudGV4dE1hc2tFbmFibGVkID0gZmllbGQudGV4dE1hc2tFbmFibGVkO1xuICAgICAgICBjb250cm9sQ29uZmlnLmFsbG93SW52YWxpZERhdGUgPSBmaWVsZC5hbGxvd0ludmFsaWREYXRlO1xuICAgICAgICBjb250cm9sQ29uZmlnLm1pbGl0YXJ5ID0gY29uZmlnID8gISFjb25maWcubWlsaXRhcnkgOiBmYWxzZTtcbiAgICAgICAgY29udHJvbCA9IG5ldyBEYXRlQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0aW1lJzpcbiAgICAgICAgY29udHJvbENvbmZpZy5taWxpdGFyeSA9IGNvbmZpZyA/ICEhY29uZmlnLm1pbGl0YXJ5IDogZmFsc2U7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGltZUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgY2FzZSAnbW9uZXknOlxuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgY2FzZSAncGVyY2VudGFnZSc6XG4gICAgICBjYXNlICdmbG9hdCc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgIC8vIFRPRE86IE9ubHkgdHlwZXMgZnJvbSBgZGV0ZXJtaW5lSW5wdXRUeXBlYCBzaG91bGQgYmUgdXNlZCBpbiB0aGlzIGNsYXNzXG4gICAgICAgIGlmICh0eXBlID09PSAnbW9uZXknKSB7XG4gICAgICAgICAgdHlwZSA9ICdjdXJyZW5jeSc7XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbENvbmZpZy50eXBlID0gdHlwZTtcbiAgICAgICAgY29udHJvbCA9IG5ldyBUZXh0Qm94Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBUZXh0Qm94Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGV4dEFyZWFDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXRvcic6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgRWRpdG9yQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0b3ItbWluaW1hbCc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgRWRpdG9yQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgY29udHJvbC5taW5pbWFsID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0aWxlcyc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGlsZXNDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgY29udHJvbENvbmZpZy5jaGVja2JveExhYmVsID0gZmllbGQuY2hlY2tib3hMYWJlbDtcbiAgICAgICAgY29udHJvbCA9IG5ldyBDaGVja2JveENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hlY2tsaXN0JzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBDaGVja0xpc3RDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBSYWRpb0NvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBTZWxlY3RDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FkZHJlc3MnOlxuICAgICAgICBjb250cm9sQ29uZmlnLnJlcXVpcmVkID0gZmllbGQucmVxdWlyZWQgfHwgZmFsc2U7XG4gICAgICAgIGlmIChIZWxwZXJzLmlzQmxhbmsoY29udHJvbENvbmZpZy5jb25maWcpKSB7XG4gICAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5yZXF1aXJlZCA9IGZpZWxkLnJlcXVpcmVkO1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5yZWFkT25seSA9IGNvbnRyb2xDb25maWcucmVhZE9ubHk7XG4gICAgICAgIGlmIChmaWVsZC5maWVsZHMgJiYgZmllbGQuZmllbGRzLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAobGV0IHN1YmZpZWxkIG9mIGZpZWxkLmZpZWxkcykge1xuICAgICAgICAgICAgY29udHJvbENvbmZpZy5jb25maWdbc3ViZmllbGQubmFtZV0gPSB7XG4gICAgICAgICAgICAgIHJlcXVpcmVkOiAhIXN1YmZpZWxkLnJlcXVpcmVkLFxuICAgICAgICAgICAgICBoaWRkZW46ICEhc3ViZmllbGQucmVhZE9ubHksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkoc3ViZmllbGQubGFiZWwpKSB7XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnW3N1YmZpZWxkLm5hbWVdLmxhYmVsID0gc3ViZmllbGQubGFiZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eShzdWJmaWVsZC5tYXhMZW5ndGgpKSB7XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnW3N1YmZpZWxkLm5hbWVdLm1heGxlbmd0aCA9IHN1YmZpZWxkLm1heExlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRyb2xDb25maWcucmVxdWlyZWQgPSBjb250cm9sQ29uZmlnLnJlcXVpcmVkIHx8IHN1YmZpZWxkLnJlcXVpcmVkO1xuICAgICAgICAgICAgaWYgKHN1YmZpZWxkLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICBpZiAoSGVscGVycy5pc0JsYW5rKGNvbnRyb2xDb25maWcudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbENvbmZpZy52YWx1ZSA9IHt9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcudmFsdWVbc3ViZmllbGQubmFtZV0gPSBzdWJmaWVsZC5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN1YmZpZWxkLm5hbWUgPT09ICdjb3VudHJ5SUQnKSB7XG4gICAgICAgICAgICAgIGlmIChIZWxwZXJzLmlzQmxhbmsoY29udHJvbENvbmZpZy52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLnZhbHVlID0ge307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udHJvbENvbmZpZy52YWx1ZVtzdWJmaWVsZC5uYW1lXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3ViZmllbGQubmFtZSA9PT0gJ3N0YXRlJyB8fCBzdWJmaWVsZC5uYW1lID09PSAnY291bnRyeUlEJykge1xuICAgICAgICAgICAgICBpZiAoc3ViZmllbGQubmFtZSA9PT0gJ3N0YXRlJykge1xuICAgICAgICAgICAgICAgIHN1YmZpZWxkLm9wdGlvbnNUeXBlID0gJ1N0YXRlJztcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdWJmaWVsZC5uYW1lID09PSAnY291bnRyeUlEJykge1xuICAgICAgICAgICAgICAgIHN1YmZpZWxkLm9wdGlvbnNUeXBlID0gJ0NvdW50cnknO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghc3ViZmllbGQub3B0aW9uc1VybCkge1xuICAgICAgICAgICAgICAgIHN1YmZpZWxkLm9wdGlvbnNVcmwgPSBgb3B0aW9ucy8ke3N1YmZpZWxkLm9wdGlvbnNUeXBlfWA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udHJvbENvbmZpZy5jb25maWdbc3ViZmllbGQubmFtZV0ucGlja2VyQ29uZmlnID0gdGhpcy5nZXRDb250cm9sT3B0aW9ucyhzdWJmaWVsZCwgaHR0cCwgY29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbENvbmZpZy5pc0VtcHR5ID0gdGhpcy5pc0FkZHJlc3NFbXB0eTtcbiAgICAgICAgY29udHJvbCA9IG5ldyBBZGRyZXNzQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBGaWxlQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXN0b20nOlxuICAgICAgICBjb250cm9sID0gbmV3IEN1c3RvbUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29udHJvbCA9IG5ldyBUZXh0Qm94Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9sO1xuICB9XG5cbiAgdG9Db250cm9scyhcbiAgICBtZXRhLFxuICAgIGN1cnJlbmN5Rm9ybWF0LFxuICAgIGh0dHAsXG4gICAgY29uZmlnOiB7IHRva2VuPzogc3RyaW5nOyByZXN0VXJsPzogc3RyaW5nOyBtaWxpdGFyeT86IGJvb2xlYW4gfSxcbiAgICBvdmVycmlkZXM/OiBhbnksXG4gICAgZm9yVGFibGU6IGJvb2xlYW4gPSBmYWxzZSxcbiAgKSB7XG4gICAgbGV0IGNvbnRyb2xzID0gW107XG4gICAgaWYgKG1ldGEgJiYgbWV0YS5maWVsZHMpIHtcbiAgICAgIGxldCBmaWVsZHMgPSBtZXRhLmZpZWxkcztcbiAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZmllbGQubmFtZSAhPT0gJ2lkJyAmJlxuICAgICAgICAgIChmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24gIT09ICdTWVNURU0nIHx8IFsnYWRkcmVzcycsICdiaWxsaW5nQWRkcmVzcycsICdzZWNvbmRhcnlBZGRyZXNzJ10uaW5kZXhPZihmaWVsZC5uYW1lKSAhPT0gLTEpICYmXG4gICAgICAgICAgIWZpZWxkLnJlYWRPbmx5XG4gICAgICAgICkge1xuICAgICAgICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sRm9yRmllbGQoZmllbGQsIGh0dHAsIGNvbmZpZywgb3ZlcnJpZGVzLCBmb3JUYWJsZSk7XG4gICAgICAgICAgLy8gU2V0IGN1cnJlbmN5IGZvcm1hdFxuICAgICAgICAgIGlmIChjb250cm9sLnN1YlR5cGUgPT09ICdjdXJyZW5jeScpIHtcbiAgICAgICAgICAgIGNvbnRyb2wuY3VycmVuY3lGb3JtYXQgPSBjdXJyZW5jeUZvcm1hdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQWRkIHRvIGNvbnRyb2xzXG4gICAgICAgICAgY29udHJvbHMucHVzaChjb250cm9sKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9scztcbiAgfVxuXG4gIHRvVGFibGVDb250cm9scyhtZXRhLCBjdXJyZW5jeUZvcm1hdCwgaHR0cCwgY29uZmlnOiB7IHRva2VuPzogc3RyaW5nOyByZXN0VXJsPzogc3RyaW5nOyBtaWxpdGFyeT86IGJvb2xlYW4gfSwgb3ZlcnJpZGVzPzogYW55KSB7XG4gICAgbGV0IGNvbnRyb2xzID0gdGhpcy50b0NvbnRyb2xzKG1ldGEsIGN1cnJlbmN5Rm9ybWF0LCBodHRwLCBjb25maWcsIG92ZXJyaWRlcywgdHJ1ZSk7XG4gICAgbGV0IHJldCA9IHt9O1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2w6IEJhc2VDb250cm9sKSA9PiB7XG4gICAgICByZXRbY29udHJvbC5rZXldID0ge1xuICAgICAgICBlZGl0b3JUeXBlOiBjb250cm9sLl9fdHlwZSxcbiAgICAgICAgZWRpdG9yQ29uZmlnOiBjb250cm9sLl9fY29uZmlnLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgdG9GaWVsZFNldHMobWV0YSwgY3VycmVuY3lGb3JtYXQsIGh0dHAsIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuIH0sIG92ZXJyaWRlcz8pIHtcbiAgICBsZXQgZmllbGRzZXRzOiBBcnJheTxOb3ZvRmllbGRzZXQ+ID0gW107XG4gICAgbGV0IHJhbmdlcyA9IFtdO1xuICAgIGlmIChtZXRhICYmIG1ldGEuZmllbGRzKSB7XG4gICAgICBsZXQgZmllbGRzID0gbWV0YS5maWVsZHNcbiAgICAgICAgLm1hcCgoZmllbGQpID0+IHtcbiAgICAgICAgICBpZiAoIWZpZWxkLmhhc093blByb3BlcnR5KCdzb3J0T3JkZXInKSkge1xuICAgICAgICAgICAgZmllbGQuc29ydE9yZGVyID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgICAgIH0pXG4gICAgICAgIC5zb3J0KEhlbHBlcnMuc29ydEJ5RmllbGQoWydzb3J0T3JkZXInLCAnbmFtZSddKSk7XG4gICAgICBpZiAobWV0YS5zZWN0aW9uSGVhZGVycyAmJiBtZXRhLnNlY3Rpb25IZWFkZXJzLmxlbmd0aCkge1xuICAgICAgICBtZXRhLnNlY3Rpb25IZWFkZXJzLnNvcnQoSGVscGVycy5zb3J0QnlGaWVsZChbJ3NvcnRPcmRlcicsICduYW1lJ10pKTtcbiAgICAgICAgbWV0YS5zZWN0aW9uSGVhZGVycy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uZW5hYmxlZCkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uc29ydE9yZGVyID4gMCAmJiBmaWVsZHNldHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIGZpZWxkc2V0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBjb250cm9sczogW10sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgIG1heDogaXRlbS5zb3J0T3JkZXIgLSAxLFxuICAgICAgICAgICAgICAgIGZpZWxkc2V0SWR4OiAwLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZWxkc2V0cy5wdXNoKHtcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubGFiZWwsXG4gICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbiB8fCAnYmhpLXNlY3Rpb24nLFxuICAgICAgICAgICAgICBjb250cm9sczogW10sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgbWluOiBpdGVtLnNvcnRPcmRlcixcbiAgICAgICAgICAgICAgbWF4OiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgICAgICAgZmllbGRzZXRJZHg6IGZpZWxkc2V0cy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaSA+IDAgJiYgZmllbGRzZXRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgcmFuZ2VzW2ZpZWxkc2V0cy5sZW5ndGggLSAyXS5tYXggPSBpdGVtLnNvcnRPcmRlciAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyYW5nZXMubGVuZ3RoKSB7XG4gICAgICAgICAgZmllbGRzZXRzLnB1c2goe1xuICAgICAgICAgICAgY29udHJvbHM6IFtdLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgICAgICBmaWVsZHNldElkeDogMCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGRzZXRzLnB1c2goe1xuICAgICAgICAgIGNvbnRyb2xzOiBbXSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJhbmdlcy5wdXNoKHtcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgICBmaWVsZHNldElkeDogMCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGZpZWxkLm5hbWUgIT09ICdpZCcgJiZcbiAgICAgICAgICAoZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uICE9PSAnU1lTVEVNJyB8fCBbJ2FkZHJlc3MnLCAnYmlsbGluZ0FkZHJlc3MnLCAnc2Vjb25kYXJ5QWRkcmVzcyddLmluZGV4T2YoZmllbGQubmFtZSkgIT09IC0xKSAmJlxuICAgICAgICAgICFmaWVsZC5yZWFkT25seVxuICAgICAgICApIHtcbiAgICAgICAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbEZvckZpZWxkKGZpZWxkLCBodHRwLCBjb25maWcsIG92ZXJyaWRlcyk7XG4gICAgICAgICAgLy8gU2V0IGN1cnJlbmN5IGZvcm1hdFxuICAgICAgICAgIGlmIChjb250cm9sLnN1YlR5cGUgPT09ICdjdXJyZW5jeScpIHtcbiAgICAgICAgICAgIGNvbnRyb2wuY3VycmVuY3lGb3JtYXQgPSBjdXJyZW5jeUZvcm1hdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGxvY2F0aW9uID0gcmFuZ2VzLmZpbmQoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoaXRlbS5taW4gPD0gZmllbGQuc29ydE9yZGVyICYmIGZpZWxkLnNvcnRPcmRlciA8PSBpdGVtLm1heCkgfHwgKGl0ZW0ubWluIDw9IGZpZWxkLnNvcnRPcmRlciAmJiBpdGVtLm1pbiA9PT0gaXRlbS5tYXgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgICAgICAgLy8gQWRkIHRvIGNvbnRyb2xzXG4gICAgICAgICAgICBmaWVsZHNldHNbbG9jYXRpb24uZmllbGRzZXRJZHhdLmNvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGZpZWxkc2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZmllbGRzZXRzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgY29udHJvbHM6IHRoaXMudG9Db250cm9scyhtZXRhLCBjdXJyZW5jeUZvcm1hdCwgaHR0cCwgY29uZmlnKSxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29udHJvbE9wdGlvbnMoZmllbGQ6IGFueSwgaHR0cDogYW55LCBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiB9KTogYW55IHtcbiAgICAvLyBUT0RPOiBUaGUgdG9rZW4gcHJvcGVydHkgb2YgY29uZmlnIGlzIHRoZSBvbmx5IHByb3BlcnR5IHVzZWQ7IGp1c3QgcGFzcyBpbiBgdG9rZW46IHN0cmluZ2BcbiAgICBpZiAoZmllbGQuZGF0YVR5cGUgPT09ICdCb29sZWFuJyAmJiAhZmllbGQub3B0aW9ucykge1xuICAgICAgLy8gVE9ETzogZGF0YVR5cGUgc2hvdWxkIG9ubHkgYmUgZGV0ZXJtaW5lZCBieSBgZGV0ZXJtaW5lSW5wdXRUeXBlYCB3aGljaCBkb2Vzbid0IGV2ZXIgcmV0dXJuICdCb29sZWFuJyBpdFxuICAgICAgLy8gVE9ETzogKGNvbnQuKSByZXR1cm5zIGB0aWxlc2BcbiAgICAgIHJldHVybiBbeyB2YWx1ZTogZmFsc2UsIGxhYmVsOiB0aGlzLmxhYmVscy5ubyB9LCB7IHZhbHVlOiB0cnVlLCBsYWJlbDogdGhpcy5sYWJlbHMueWVzIH1dO1xuICAgIH0gZWxzZSBpZiAoZmllbGQub3B0aW9uc1VybCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1NlcnZpY2UuZ2V0T3B0aW9uc0NvbmZpZyhodHRwLCBmaWVsZCwgY29uZmlnKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQub3B0aW9ucykgJiYgZmllbGQudHlwZSA9PT0gJ2NoaXBzJykge1xuICAgICAgbGV0IG9wdGlvbnMgPSBmaWVsZC5vcHRpb25zO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmllbGQ6ICd2YWx1ZScsXG4gICAgICAgIGZvcm1hdDogJyRsYWJlbCcsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZmllbGQub3B0aW9ucykge1xuICAgICAgcmV0dXJuIGZpZWxkLm9wdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2V0SW5pdGlhbFZhbHVlcyhjb250cm9sczogQXJyYXk8Tm92b0NvbnRyb2xDb25maWc+LCB2YWx1ZXM6IGFueSwga2VlcENsZWFuPzogYm9vbGVhbiwga2V5T3ZlcnJpZGU/OiBzdHJpbmcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRyb2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY29udHJvbCA9IGNvbnRyb2xzW2ldO1xuICAgICAgbGV0IGtleSA9IGtleU92ZXJyaWRlID8gY29udHJvbC5rZXkucmVwbGFjZShrZXlPdmVycmlkZSwgJycpIDogY29udHJvbC5rZXk7XG4gICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNba2V5XTtcblxuICAgICAgaWYgKEhlbHBlcnMuaXNCbGFuayh2YWx1ZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuZmlsdGVyKCh2YWwpID0+ICEoT2JqZWN0LmtleXModmFsKS5sZW5ndGggPT09IDAgJiYgdmFsLmNvbnN0cnVjdG9yID09PSBPYmplY3QpKTtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZS5kYXRhICYmIHZhbHVlLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb250cm9sLnZhbHVlID0gdmFsdWU7XG4gICAgICAvLyBUT0RPOiBrZWVwQ2xlYW4gaXMgbm90IHJlcXVpcmVkLCBidXQgaXMgYWx3YXlzIHVzZWQuIEl0IHNob3VsZCBkZWZhdWx0ICh0byB0cnVlPylcbiAgICAgIGNvbnRyb2wuZGlydHkgPSAha2VlcENsZWFuO1xuICAgIH1cbiAgfVxuXG4gIHNldEluaXRpYWxWYWx1ZXNGaWVsZHNldHMoZmllbGRzZXRzOiBBcnJheTxOb3ZvRmllbGRzZXQ+LCB2YWx1ZXMsIGtlZXBDbGVhbj86IGJvb2xlYW4pIHtcbiAgICBmaWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlcyhmaWVsZHNldC5jb250cm9scywgdmFsdWVzLCBrZWVwQ2xlYW4pO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yY2VTaG93QWxsQ29udHJvbHMoY29udHJvbHM6IEFycmF5PE5vdm9Db250cm9sQ29uZmlnPikge1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgIGNvbnRyb2wuaGlkZGVuID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBmb3JjZVNob3dBbGxDb250cm9sc0luRmllbGRzZXRzKGZpZWxkc2V0czogQXJyYXk8Tm92b0ZpZWxkc2V0Pikge1xuICAgIGZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgZmllbGRzZXQuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICBjb250cm9sLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmb3JjZVZhbGlkYXRpb24oZm9ybTogTm92b0Zvcm1Hcm91cCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKGZvcm0uY29udHJvbHMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBsZXQgY29udHJvbDogYW55ID0gZm9ybS5jb250cm9sc1trZXldO1xuICAgICAgaWYgKGNvbnRyb2wucmVxdWlyZWQgJiYgSGVscGVycy5pc0JsYW5rKGZvcm0udmFsdWVbY29udHJvbC5rZXldKSkge1xuICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNBZGRyZXNzRW1wdHkoY29udHJvbDogYW55KTogYm9vbGVhbiB7XG4gICAgbGV0IGZpZWxkTGlzdDogc3RyaW5nW10gPSBbJ2FkZHJlc3MxJywgJ2FkZHJlc3MyJywgJ2NpdHknLCAnc3RhdGUnLCAnemlwJywgJ2NvdW50cnlJRCddO1xuICAgIGxldCB2YWxpZDogYm9vbGVhbiA9IHRydWU7XG4gICAgaWYgKGNvbnRyb2wudmFsdWUgJiYgY29udHJvbC5jb25maWcpIHtcbiAgICAgIGZpZWxkTGlzdC5mb3JFYWNoKChzdWJmaWVsZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoKHN1YmZpZWxkICE9PSAnY291bnRyeUlEJyAmJlxuICAgICAgICAgICAgIUhlbHBlcnMuaXNFbXB0eShjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0pICYmXG4gICAgICAgICAgICBjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0ucmVxdWlyZWQgJiZcbiAgICAgICAgICAgIChIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZVtzdWJmaWVsZF0pIHx8IEhlbHBlcnMuaXNFbXB0eShjb250cm9sLnZhbHVlW3N1YmZpZWxkXSkpKSB8fFxuICAgICAgICAgICAgKHN1YmZpZWxkID09PSAnY291bnRyeUlEJyAmJlxuICAgICAgICAgICAgICAhSGVscGVycy5pc0VtcHR5KGNvbnRyb2wuY29uZmlnLmNvdW50cnlJRCkgJiZcbiAgICAgICAgICAgICAgY29udHJvbC5jb25maWcuY291bnRyeUlELnJlcXVpcmVkICYmXG4gICAgICAgICAgICAgIEhlbHBlcnMuaXNFbXB0eShjb250cm9sLnZhbHVlLmNvdW50cnlOYW1lKSkpICYmXG4gICAgICAgICAgIShcbiAgICAgICAgICAgIHN1YmZpZWxkID09PSAnc3RhdGUnICYmXG4gICAgICAgICAgICAhSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWUuY291bnRyeU5hbWUpICYmXG4gICAgICAgICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcgJiZcbiAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyAmJlxuICAgICAgICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zLmxlbmd0aCA9PT0gMFxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxufVxuIl19