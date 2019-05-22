/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG
import { Injectable } from '@angular/core';
import * as dateFns from 'date-fns';
// App
import { AddressControl, CheckboxControl, CheckListControl, CustomControl, DateControl, DateTimeControl, EditorControl, FileControl, PickerControl, RadioControl, SelectControl, TextAreaControl, TextBoxControl, TilesControl, TimeControl, } from '../../elements/form/FormControls';
import { EntityPickerResult, EntityPickerResults } from '../../elements/picker/extras/entity-picker-results/EntityPickerResults';
import { Helpers } from '../Helpers';
import { NovoFormControl } from '../../elements/form/NovoFormControl';
import { NovoFormGroup } from '../../elements/form/NovoFormGroup';
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
        this.ENTITY_PICKER_LIST = [
            'Candidate',
            'CandidateText',
            'Client',
            'ClientText',
            'ClientContact',
            'ClientContactText',
            'ClientCorporation',
            'ClientCorporationText',
            'Lead',
            'LeadText',
            'Opportunity',
            'OpportunityText',
            'JobOrder',
            'JobOrderText',
            'CorporateUser',
            'CorporateUserText',
            'Person',
            'PersonText',
            'Placement',
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
     * @param {?} formGroup
     * @param {?} controls
     * @return {?}
     */
    removeControls(formGroup, controls) {
        controls.forEach((control) => {
            formGroup.removeControl(control.key);
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
     * \@name hasAssociatedEntity
     * @param {?} field
     * @return {?}
     */
    hasAssociatedEntity(field) {
        return !!(field.associatedEntity && ~this.ASSOCIATED_ENTITY_LIST.indexOf(field.associatedEntity.entity));
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
            WORKFLOW_OPTIONS: 'select',
            SPECIALIZED_OPTIONS: 'select',
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
            if (this.hasAssociatedEntity(field)) {
                if (field.multiValue === false) {
                    type = 'entitypicker';
                }
                else {
                    type = 'entitychips';
                }
            }
            else {
                if (field.multiValue === false) {
                    type = 'picker';
                }
                else {
                    type = 'chips';
                }
            }
        }
        else if (field.type === 'TO_ONE') {
            if (['WORKFLOW_OPTIONS', 'SPECIALIZED_OPTIONS'].includes(field.dataSpecialization)) {
                type = dataSpecializationTypeMap[field.dataSpecialization];
            }
            else if (this.hasAssociatedEntity(field)) {
                type = 'entitypicker'; // TODO!
            }
            else {
                type = 'picker';
            }
        }
        else if (field.optionsUrl && field.inputType === 'SELECT') {
            if (field.optionsType && ~this.ENTITY_PICKER_LIST.indexOf(field.optionsType)) {
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
     * @param {?=} fieldData
     * @return {?}
     */
    getControlForField(field, http, config, overrides, forTable = false, fieldData) {
        // TODO: if field.type overrides `determineInputType` we should use it in that method or use this method
        // TODO: (cont.) as the setter of the field argument
        /** @type {?} */
        let type = this.determineInputType(field) || field.type;
        /** @type {?} */
        let control;
        /** @type {?} */
        let controlConfig = {
            metaType: field.type,
            type: type,
            key: field.name,
            label: field.label,
            placeholder: field.hint || '',
            required: field.required || field.systemRequired,
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
            warning: field.warning,
            config: field.config || {},
            closeOnSelect: field.closeOnSelect,
        };
        this.inferStartDate(controlConfig, field);
        // TODO: getControlOptions should always return the correct format
        /** @type {?} */
        const optionsConfig = this.getControlOptions(field, http, config, fieldData);
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
                            if (subfield.name === 'countryID') {
                                subfield.optionsType = 'Country';
                            }
                            if (!subfield.optionsUrl) {
                                subfield.optionsUrl = `options/${subfield.optionsType}`;
                            }
                            controlConfig.config[subfield.name].pickerConfig = this.getControlOptions(subfield, http, config, fieldData);
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
     * @param {?=} data
     * @return {?}
     */
    toFieldSets(meta, currencyFormat, http, config, overrides, data) {
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
                    const fieldData = data && data[field.name] ? data[field.name] : null;
                    /** @type {?} */
                    let control = this.getControlForField(field, http, config, overrides, undefined, fieldData);
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
     * @param {?=} fieldData
     * @return {?}
     */
    getControlOptions(field, http, config, fieldData) {
        // TODO: The token property of config is the only property used; just pass in `token: string`
        if (field.dataType === 'Boolean' && !field.options) {
            // TODO: dataType should only be determined by `determineInputType` which doesn't ever return 'Boolean' it
            // TODO: (cont.) returns `tiles`
            return [{ value: false, label: this.labels.no }, { value: true, label: this.labels.yes }];
        }
        else if (field.workflowOptions && fieldData) {
            return this.getWorkflowOptions(field.workflowOptions, fieldData);
        }
        else if (field.dataSpecialization === 'SPECIALIZED_OPTIONS') {
            return field.options.filter((o) => !o.readOnly);
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
     * @private
     * @param {?} workflowOptions
     * @param {?} fieldData
     * @return {?}
     */
    getWorkflowOptions(workflowOptions, fieldData) {
        /** @type {?} */
        let currentValue;
        if (fieldData.id) {
            currentValue = { value: fieldData.id, label: fieldData.label ? fieldData.label : fieldData.id };
        }
        /** @type {?} */
        const currentWorkflowOption = fieldData.id ? fieldData.id : 'initial';
        /** @type {?} */
        let updateWorkflowOptions = workflowOptions[currentWorkflowOption] || [];
        if (currentValue && !updateWorkflowOptions.find((option) => option.value === currentValue.value)) {
            updateWorkflowOptions.unshift(currentValue);
        }
        return updateWorkflowOptions;
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
    /**
     * @private
     * @param {?} dateRange
     * @return {?}
     */
    getStartDateFromRange(dateRange) {
        if (dateRange.minDate) {
            return dateFns.parse(dateRange.minDate);
        }
        else if (dateRange.minOffset) {
            return dateFns.addDays(dateFns.startOfToday(), dateRange.minOffset);
        }
    }
    /**
     * Get the min start date of a Date base on field data.
     * @private
     * @param {?} field
     * @return {?}
     */
    getStartDate(field) {
        if (field.allowedDateRange) {
            return this.getStartDateFromRange(field.allowedDateRange);
        }
        // there is no restriction on the start date
        return null;
    }
    /**
     * @private
     * @param {?} controlConfig
     * @param {?} field
     * @return {?}
     */
    inferStartDate(controlConfig, field) {
        if (field.dataType === 'Date') {
            /** @type {?} */
            const startDate = this.getStartDate(field);
            if (startDate) {
                controlConfig.startDate = startDate;
            }
            return startDate;
        }
    }
}
FormUtils.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FormUtils.ctorParameters = () => [
    { type: NovoLabelService },
    { type: OptionsService }
];
if (false) {
    /** @type {?} */
    FormUtils.prototype.ASSOCIATED_ENTITY_LIST;
    /** @type {?} */
    FormUtils.prototype.ENTITY_PICKER_LIST;
    /** @type {?} */
    FormUtils.prototype.labels;
    /** @type {?} */
    FormUtils.prototype.optionsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybVV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL2Zvcm0tdXRpbHMvRm9ybVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQzs7QUFFcEMsT0FBTyxFQUNMLGNBQWMsRUFFZCxlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixXQUFXLEVBQ1gsZUFBZSxFQUNmLGFBQWEsRUFDYixXQUFXLEVBRVgsYUFBYSxFQUNiLFlBQVksRUFDWixhQUFhLEVBQ2IsZUFBZSxFQUNmLGNBQWMsRUFDZCxZQUFZLEVBQ1osV0FBVyxHQUNaLE1BQU0sa0NBQWtDLENBQUM7QUFDMUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDakksT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVyQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUd6RSxNQUFNLE9BQU8sU0FBUzs7Ozs7SUFrQ3BCLFlBQW1CLE1BQXdCLEVBQVMsY0FBOEI7UUFBL0QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFqQ2xGLDJCQUFzQixHQUFhO1lBQ2pDLFdBQVc7WUFDWCxlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLE1BQU07WUFDTixhQUFhO1lBQ2IsVUFBVTtZQUNWLGVBQWU7WUFDZixRQUFRO1lBQ1IsV0FBVztT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IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBkYXRlRm5zIGZyb20gJ2RhdGUtZm5zJztcbi8vIEFwcFxuaW1wb3J0IHtcbiAgQWRkcmVzc0NvbnRyb2wsXG4gIEJhc2VDb250cm9sLFxuICBDaGVja2JveENvbnRyb2wsXG4gIENoZWNrTGlzdENvbnRyb2wsXG4gIEN1c3RvbUNvbnRyb2wsXG4gIERhdGVDb250cm9sLFxuICBEYXRlVGltZUNvbnRyb2wsXG4gIEVkaXRvckNvbnRyb2wsXG4gIEZpbGVDb250cm9sLFxuICBOb3ZvQ29udHJvbENvbmZpZyxcbiAgUGlja2VyQ29udHJvbCxcbiAgUmFkaW9Db250cm9sLFxuICBTZWxlY3RDb250cm9sLFxuICBUZXh0QXJlYUNvbnRyb2wsXG4gIFRleHRCb3hDb250cm9sLFxuICBUaWxlc0NvbnRyb2wsXG4gIFRpbWVDb250cm9sLFxufSBmcm9tICcuLi8uLi9lbGVtZW50cy9mb3JtL0Zvcm1Db250cm9scyc7XG5pbXBvcnQgeyBFbnRpdHlQaWNrZXJSZXN1bHQsIEVudGl0eVBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9waWNrZXIvZXh0cmFzL2VudGl0eS1waWNrZXItcmVzdWx0cy9FbnRpdHlQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9GaWVsZHNldCwgRm9ybUZpZWxkIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybS9Gb3JtSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOb3ZvRm9ybUNvbnRyb2wgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9mb3JtL05vdm9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgeyBOb3ZvRm9ybUdyb3VwIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybS9Ob3ZvRm9ybUdyb3VwJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgT3B0aW9uc1NlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL29wdGlvbnMvT3B0aW9uc1NlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybVV0aWxzIHtcbiAgQVNTT0NJQVRFRF9FTlRJVFlfTElTVDogc3RyaW5nW10gPSBbXG4gICAgJ0NhbmRpZGF0ZScsXG4gICAgJ0NsaWVudENvbnRhY3QnLFxuICAgICdDbGllbnRDb3Jwb3JhdGlvbicsXG4gICAgJ0xlYWQnLFxuICAgICdPcHBvcnR1bml0eScsXG4gICAgJ0pvYk9yZGVyJyxcbiAgICAnQ29ycG9yYXRlVXNlcicsXG4gICAgJ1BlcnNvbicsXG4gICAgJ1BsYWNlbWVudCcsXG4gIF07XG4gIEVOVElUWV9QSUNLRVJfTElTVDogc3RyaW5nW10gPSBbXG4gICAgJ0NhbmRpZGF0ZScsXG4gICAgJ0NhbmRpZGF0ZVRleHQnLFxuICAgICdDbGllbnQnLFxuICAgICdDbGllbnRUZXh0JyxcbiAgICAnQ2xpZW50Q29udGFjdCcsXG4gICAgJ0NsaWVudENvbnRhY3RUZXh0JyxcbiAgICAnQ2xpZW50Q29ycG9yYXRpb24nLFxuICAgICdDbGllbnRDb3Jwb3JhdGlvblRleHQnLFxuICAgICdMZWFkJyxcbiAgICAnTGVhZFRleHQnLFxuICAgICdPcHBvcnR1bml0eScsXG4gICAgJ09wcG9ydHVuaXR5VGV4dCcsXG4gICAgJ0pvYk9yZGVyJyxcbiAgICAnSm9iT3JkZXJUZXh0JyxcbiAgICAnQ29ycG9yYXRlVXNlcicsXG4gICAgJ0NvcnBvcmF0ZVVzZXJUZXh0JyxcbiAgICAnUGVyc29uJyxcbiAgICAnUGVyc29uVGV4dCcsXG4gICAgJ1BsYWNlbWVudCcsXG4gIF07XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcHVibGljIG9wdGlvbnNTZXJ2aWNlOiBPcHRpb25zU2VydmljZSkge31cblxuICB0b0Zvcm1Hcm91cChjb250cm9sczogQXJyYXk8YW55Pik6IE5vdm9Gb3JtR3JvdXAge1xuICAgIGxldCBncm91cDogYW55ID0ge307XG4gICAgY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWUpID8gJycgOiBjb250cm9sLnZhbHVlO1xuICAgICAgZ3JvdXBbY29udHJvbC5rZXldID0gbmV3IE5vdm9Gb3JtQ29udHJvbCh2YWx1ZSwgY29udHJvbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBOb3ZvRm9ybUdyb3VwKGdyb3VwKTtcbiAgfVxuXG4gIGVtcHR5Rm9ybUdyb3VwKCk6IE5vdm9Gb3JtR3JvdXAge1xuICAgIHJldHVybiBuZXcgTm92b0Zvcm1Hcm91cCh7fSk7XG4gIH1cblxuICBhZGRDb250cm9scyhmb3JtR3JvdXA6IE5vdm9Gb3JtR3JvdXAsIGNvbnRyb2xzOiBBcnJheTxOb3ZvQ29udHJvbENvbmZpZz4pOiB2b2lkIHtcbiAgICBjb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZSkgPyAnJyA6IGNvbnRyb2wudmFsdWU7XG4gICAgICBsZXQgZm9ybUNvbnRyb2wgPSBuZXcgTm92b0Zvcm1Db250cm9sKHZhbHVlLCBjb250cm9sKTtcbiAgICAgIGZvcm1Hcm91cC5hZGRDb250cm9sKGNvbnRyb2wua2V5LCBmb3JtQ29udHJvbCk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVDb250cm9scyhmb3JtR3JvdXA6IE5vdm9Gb3JtR3JvdXAsIGNvbnRyb2xzOiBBcnJheTxOb3ZvQ29udHJvbENvbmZpZz4pOiB2b2lkIHtcbiAgICBjb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICBmb3JtR3JvdXAucmVtb3ZlQ29udHJvbChjb250cm9sLmtleSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgdG9Gb3JtR3JvdXBGcm9tRmllbGRzZXRcbiAgICogQHBhcmFtIGZpZWxkc2V0c1xuICAgKi9cbiAgdG9Gb3JtR3JvdXBGcm9tRmllbGRzZXQoZmllbGRzZXRzOiBBcnJheTxOb3ZvRmllbGRzZXQ+KTogTm92b0Zvcm1Hcm91cCB7XG4gICAgbGV0IGNvbnRyb2xzOiBBcnJheTxOb3ZvRm9ybUNvbnRyb2w+ID0gW107XG4gICAgZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBjb250cm9scy5wdXNoKC4uLmZpZWxkc2V0LmNvbnRyb2xzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy50b0Zvcm1Hcm91cChjb250cm9scyk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaGFzQXNzb2NpYXRlZEVudGl0eVxuICAgKiBAcGFyYW0gZmllbGRcbiAgICovXG4gIGhhc0Fzc29jaWF0ZWRFbnRpdHkoZmllbGQ6IEZvcm1GaWVsZCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIShmaWVsZC5hc3NvY2lhdGVkRW50aXR5ICYmIH50aGlzLkFTU09DSUFURURfRU5USVRZX0xJU1QuaW5kZXhPZihmaWVsZC5hc3NvY2lhdGVkRW50aXR5LmVudGl0eSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGRldGVybWluZUlucHV0VHlwZVxuICAgKiBAcGFyYW0gZmllbGRcbiAgICovXG4gIGRldGVybWluZUlucHV0VHlwZShmaWVsZDogRm9ybUZpZWxkKTogc3RyaW5nIHtcbiAgICBsZXQgdHlwZTogc3RyaW5nO1xuICAgIGxldCBkYXRhU3BlY2lhbGl6YXRpb25UeXBlTWFwID0ge1xuICAgICAgREFURVRJTUU6ICdkYXRldGltZScsXG4gICAgICBUSU1FOiAndGltZScsXG4gICAgICBNT05FWTogJ2N1cnJlbmN5JyxcbiAgICAgIFBFUkNFTlRBR0U6ICdwZXJjZW50YWdlJyxcbiAgICAgIEhUTUw6ICdlZGl0b3InLFxuICAgICAgJ0hUTUwtTUlOSU1BTCc6ICdlZGl0b3ItbWluaW1hbCcsXG4gICAgICBZRUFSOiAneWVhcicsXG4gICAgICBXT1JLRkxPV19PUFRJT05TOiAnc2VsZWN0JyxcbiAgICAgIFNQRUNJQUxJWkVEX09QVElPTlM6ICdzZWxlY3QnLFxuICAgIH07XG4gICAgbGV0IGRhdGFUeXBlVG9UeXBlTWFwID0ge1xuICAgICAgVGltZXN0YW1wOiAnZGF0ZScsXG4gICAgICBEYXRlOiAnZGF0ZScsXG4gICAgICBCb29sZWFuOiAndGlsZXMnLFxuICAgIH07XG4gICAgbGV0IGlucHV0VHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIENIRUNLQk9YOiAncmFkaW8nLFxuICAgICAgUkFESU86ICdyYWRpbycsXG4gICAgICBTRUxFQ1Q6ICdzZWxlY3QnLFxuICAgICAgVElMRVM6ICd0aWxlcycsXG4gICAgfTtcbiAgICBsZXQgaW5wdXRUeXBlTXVsdGlUb1R5cGVNYXAgPSB7XG4gICAgICBDSEVDS0JPWDogJ2NoZWNrbGlzdCcsXG4gICAgICBSQURJTzogJ2NoZWNrbGlzdCcsXG4gICAgICBTRUxFQ1Q6ICdjaGlwcycsXG4gICAgfTtcbiAgICBsZXQgdHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIGZpbGU6ICdmaWxlJyxcbiAgICAgIENPTVBPU0lURTogJ2FkZHJlc3MnLFxuICAgIH07XG4gICAgbGV0IG51bWJlckRhdGFUeXBlVG9UeXBlTWFwID0ge1xuICAgICAgRG91YmxlOiAnZmxvYXQnLFxuICAgICAgQmlnRGVjaW1hbDogJ2Zsb2F0JyxcbiAgICAgIEludGVnZXI6ICdudW1iZXInLFxuICAgIH07XG4gICAgaWYgKGZpZWxkLnR5cGUgPT09ICdUT19NQU5ZJykge1xuICAgICAgaWYgKHRoaXMuaGFzQXNzb2NpYXRlZEVudGl0eShmaWVsZCkpIHtcbiAgICAgICAgaWYgKGZpZWxkLm11bHRpVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdHlwZSA9ICdlbnRpdHlwaWNrZXInO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR5cGUgPSAnZW50aXR5Y2hpcHMnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZmllbGQubXVsdGlWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0eXBlID0gJ3BpY2tlcic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHlwZSA9ICdjaGlwcyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdUT19PTkUnKSB7XG4gICAgICBpZiAoWydXT1JLRkxPV19PUFRJT05TJywgJ1NQRUNJQUxJWkVEX09QVElPTlMnXS5pbmNsdWRlcyhmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24pKSB7XG4gICAgICAgIHR5cGUgPSBkYXRhU3BlY2lhbGl6YXRpb25UeXBlTWFwW2ZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbl07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaGFzQXNzb2NpYXRlZEVudGl0eShmaWVsZCkpIHtcbiAgICAgICAgdHlwZSA9ICdlbnRpdHlwaWNrZXInOyAvLyBUT0RPIVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9ICdwaWNrZXInO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZmllbGQub3B0aW9uc1VybCAmJiBmaWVsZC5pbnB1dFR5cGUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICBpZiAoZmllbGQub3B0aW9uc1R5cGUgJiYgfnRoaXMuRU5USVRZX1BJQ0tFUl9MSVNULmluZGV4T2YoZmllbGQub3B0aW9uc1R5cGUpKSB7XG4gICAgICAgIHR5cGUgPSAnZW50aXR5cGlja2VyJzsgLy8gVE9ETyFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGUgPSAncGlja2VyJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKGRhdGFTcGVjaWFsaXphdGlvblR5cGVNYXApLmluZGV4T2YoZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uKSA+IC0xKSB7XG4gICAgICB0eXBlID0gZGF0YVNwZWNpYWxpemF0aW9uVHlwZU1hcFtmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb25dO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXMoZGF0YVR5cGVUb1R5cGVNYXApLmluZGV4T2YoZmllbGQuZGF0YVR5cGUpID4gLTEpIHtcbiAgICAgIHR5cGUgPSBkYXRhVHlwZVRvVHlwZU1hcFtmaWVsZC5kYXRhVHlwZV07XG4gICAgfSBlbHNlIGlmIChmaWVsZC5pbnB1dFR5cGUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgIHR5cGUgPSAndGV4dGFyZWEnO1xuICAgIH0gZWxzZSBpZiAoZmllbGQub3B0aW9ucyAmJiBPYmplY3Qua2V5cyhpbnB1dFR5cGVUb1R5cGVNYXApLmluZGV4T2YoZmllbGQuaW5wdXRUeXBlKSA+IC0xICYmICFmaWVsZC5tdWx0aVZhbHVlKSB7XG4gICAgICB0eXBlID0gaW5wdXRUeXBlVG9UeXBlTWFwW2ZpZWxkLmlucHV0VHlwZV07XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zICYmIE9iamVjdC5rZXlzKGlucHV0VHlwZU11bHRpVG9UeXBlTWFwKS5pbmRleE9mKGZpZWxkLmlucHV0VHlwZSkgPiAtMSAmJiBmaWVsZC5tdWx0aVZhbHVlKSB7XG4gICAgICB0eXBlID0gaW5wdXRUeXBlTXVsdGlUb1R5cGVNYXBbZmllbGQuaW5wdXRUeXBlXTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKHR5cGVUb1R5cGVNYXApLmluZGV4T2YoZmllbGQudHlwZSkgPiAtMSkge1xuICAgICAgdHlwZSA9IHR5cGVUb1R5cGVNYXBbZmllbGQudHlwZV07XG4gICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhudW1iZXJEYXRhVHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5kYXRhVHlwZSkgPiAtMSkge1xuICAgICAgdHlwZSA9IG51bWJlckRhdGFUeXBlVG9UeXBlTWFwW2ZpZWxkLmRhdGFUeXBlXTtcbiAgICB9IC8qIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JtVXRpbHM6IFRoaXMgZmllbGQgdHlwZSBpcyB1bnN1cHBvcnRlZC4nKTtcbiAgICAgICAgfSovXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBpc0ZpZWxkRW5jcnlwdGVkKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGtleS5pbmRleE9mKCdjdXN0b21FbmNyeXB0ZWQnKSA+IC0xO1xuICB9XG5cbiAgZ2V0Q29udHJvbEZvckZpZWxkKFxuICAgIGZpZWxkOiBhbnksXG4gICAgaHR0cCxcbiAgICBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiB9LFxuICAgIG92ZXJyaWRlcz86IGFueSxcbiAgICBmb3JUYWJsZTogYm9vbGVhbiA9IGZhbHNlLFxuICAgIGZpZWxkRGF0YT86IGFueSxcbiAgKSB7XG4gICAgLy8gVE9ETzogaWYgZmllbGQudHlwZSBvdmVycmlkZXMgYGRldGVybWluZUlucHV0VHlwZWAgd2Ugc2hvdWxkIHVzZSBpdCBpbiB0aGF0IG1ldGhvZCBvciB1c2UgdGhpcyBtZXRob2RcbiAgICAvLyBUT0RPOiAoY29udC4pIGFzIHRoZSBzZXR0ZXIgb2YgdGhlIGZpZWxkIGFyZ3VtZW50XG4gICAgbGV0IHR5cGU6IHN0cmluZyA9IHRoaXMuZGV0ZXJtaW5lSW5wdXRUeXBlKGZpZWxkKSB8fCBmaWVsZC50eXBlO1xuICAgIGxldCBjb250cm9sOiBhbnk7XG4gICAgbGV0IGNvbnRyb2xDb25maWc6IE5vdm9Db250cm9sQ29uZmlnID0ge1xuICAgICAgbWV0YVR5cGU6IGZpZWxkLnR5cGUsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAga2V5OiBmaWVsZC5uYW1lLFxuICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLmhpbnQgfHwgJycsXG4gICAgICByZXF1aXJlZDogZmllbGQucmVxdWlyZWQgfHwgZmllbGQuc3lzdGVtUmVxdWlyZWQsXG4gICAgICBoaWRkZW46ICFmaWVsZC5yZXF1aXJlZCxcbiAgICAgIGVuY3J5cHRlZDogdGhpcy5pc0ZpZWxkRW5jcnlwdGVkKGZpZWxkLm5hbWUgPyBmaWVsZC5uYW1lLnRvU3RyaW5nKCkgOiAnJyksXG4gICAgICB2YWx1ZTogZmllbGQudmFsdWUgfHwgZmllbGQuZGVmYXVsdFZhbHVlLFxuICAgICAgc29ydE9yZGVyOiBmaWVsZC5zb3J0T3JkZXIsXG4gICAgICBhc3NvY2lhdGVkRW50aXR5OiBmaWVsZC5hc3NvY2lhdGVkRW50aXR5LFxuICAgICAgb3B0aW9uc1R5cGU6IGZpZWxkLm9wdGlvbnNUeXBlLFxuICAgICAgbXVsdGlwbGU6IGZpZWxkLm11bHRpVmFsdWUsXG4gICAgICByZWFkT25seTogISFmaWVsZC5kaXNhYmxlZCB8fCAhIWZpZWxkLnJlYWRPbmx5LFxuICAgICAgbWF4bGVuZ3RoOiBmaWVsZC5tYXhMZW5ndGgsXG4gICAgICBpbnRlcmFjdGlvbnM6IGZpZWxkLmludGVyYWN0aW9ucyxcbiAgICAgIGRhdGFTcGVjaWFsaXphdGlvbjogZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uLFxuICAgICAgZGF0YVR5cGU6IGZpZWxkLmRhdGFUeXBlLFxuICAgICAgZGVzY3JpcHRpb246IGZpZWxkLmRlc2NyaXB0aW9uIHx8ICcnLFxuICAgICAgdG9vbHRpcDogZmllbGQudG9vbHRpcCxcbiAgICAgIHRvb2x0aXBQb3NpdGlvbjogZmllbGQudG9vbHRpcFBvc2l0aW9uLFxuICAgICAgY3VzdG9tQ29udHJvbDogZmllbGQuY3VzdG9tQ29udHJvbCxcbiAgICAgIHRlbXBsYXRlOiBmaWVsZC50ZW1wbGF0ZSxcbiAgICAgIGN1c3RvbUNvbnRyb2xDb25maWc6IGZpZWxkLmN1c3RvbUNvbnRyb2xDb25maWcsXG4gICAgICByZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zOiBmaWVsZC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zLFxuICAgICAgdmFsaWRhdG9yczogZmllbGQudmFsaWRhdG9ycyxcbiAgICAgIHdhcm5pbmc6IGZpZWxkLndhcm5pbmcsXG4gICAgICBjb25maWc6IGZpZWxkLmNvbmZpZyB8fCB7fSxcbiAgICAgIGNsb3NlT25TZWxlY3Q6IGZpZWxkLmNsb3NlT25TZWxlY3QsXG4gICAgfTtcbiAgICB0aGlzLmluZmVyU3RhcnREYXRlKGNvbnRyb2xDb25maWcsIGZpZWxkKTtcbiAgICAvLyBUT0RPOiBnZXRDb250cm9sT3B0aW9ucyBzaG91bGQgYWx3YXlzIHJldHVybiB0aGUgY29ycmVjdCBmb3JtYXRcbiAgICBjb25zdCBvcHRpb25zQ29uZmlnID0gdGhpcy5nZXRDb250cm9sT3B0aW9ucyhmaWVsZCwgaHR0cCwgY29uZmlnLCBmaWVsZERhdGEpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnNDb25maWcpICYmICEodHlwZSA9PT0gJ2NoaXBzJyB8fCB0eXBlID09PSAncGlja2VyJykpIHtcbiAgICAgIGNvbnRyb2xDb25maWcub3B0aW9ucyA9IG9wdGlvbnNDb25maWc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnNDb25maWcpICYmICh0eXBlID09PSAnY2hpcHMnIHx8IHR5cGUgPT09ICdwaWNrZXInKSkge1xuICAgICAgY29udHJvbENvbmZpZy5jb25maWcgPSB7XG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnNDb25maWcsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAob3B0aW9uc0NvbmZpZykge1xuICAgICAgY29udHJvbENvbmZpZy5jb25maWcgPSBvcHRpb25zQ29uZmlnO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAneWVhcicpIHtcbiAgICAgIGNvbnRyb2xDb25maWcubWF4bGVuZ3RoID0gNDtcbiAgICB9XG4gICAgLy8gVE9ETzogT3ZlcnJpZGVzIHNob3VsZCBiZSBhbiBpdGVyYWJsZSBvZiBhbGwgcHJvcGVydGllcyAocG90ZW50aWFsbHkgYSBwcml2YXRlIG1ldGhvZClcbiAgICBsZXQgb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGU7XG4gICAgbGV0IG92ZXJyaWRlUHJldmlld1RlbXBsYXRlO1xuICAgIGlmIChvdmVycmlkZXMgJiYgb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdKSB7XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnJlc3VsdHNUZW1wbGF0ZSkge1xuICAgICAgICBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5yZXN1bHRzVGVtcGxhdGU7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlO1xuICAgICAgICBkZWxldGUgb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnJlc3VsdHNUZW1wbGF0ZTtcbiAgICAgIH1cbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0ub3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGUpIHtcbiAgICAgICAgb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGUgPSBvdmVycmlkZXNbZmllbGQubmFtZV0ub3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGU7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLm92ZXJyaWRlUHJldmlld1RlbXBsYXRlID0gb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGU7XG4gICAgICAgIGRlbGV0ZSBvdmVycmlkZXNbZmllbGQubmFtZV0ub3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGU7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnBpY2tlckNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLmNhbGxiYWNrID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnBpY2tlckNhbGxiYWNrO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS50eXBlKSB7XG4gICAgICAgIHR5cGUgPSBvdmVycmlkZXNbZmllbGQubmFtZV0udHlwZTtcbiAgICAgIH1cbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0uY29sdW1ucykge1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5jb2x1bW5zID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLmNvbHVtbnM7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY2xvc2VPblNlbGVjdCA9IHRydWU7XG4gICAgICAgIGRlbGV0ZSBjb250cm9sQ29uZmlnLmxhYmVsO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS53YXJuaW5nKSB7XG4gICAgICAgIGNvbnRyb2xDb25maWcud2FybmluZyA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS53YXJuaW5nO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmFzc2lnbihjb250cm9sQ29uZmlnLCBvdmVycmlkZXNbZmllbGQubmFtZV0pO1xuICAgIH1cblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnZW50aXR5Y2hpcHMnOlxuICAgICAgICAvLyBUT0RPOiBUaGlzIGRvZXNuJ3QgYmVsb25nIGluIHRoaXMgY29kZWJhc2VcbiAgICAgICAgY29udHJvbENvbmZpZy5tdWx0aXBsZSA9IHRydWU7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlIHx8IEVudGl0eVBpY2tlclJlc3VsdHM7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnByZXZpZXdUZW1wbGF0ZSA9IG92ZXJyaWRlUHJldmlld1RlbXBsYXRlIHx8IEVudGl0eVBpY2tlclJlc3VsdDtcbiAgICAgICAgLy8gVE9ETzogV2hlbiBhcHBlbmRUb0JvZHkgcGlja2VyIHdvcmtzIGJldHRlciBpbiB0YWJsZS9mb3JtXG4gICAgICAgIGNvbnRyb2wgPSBuZXcgUGlja2VyQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGlwcyc6XG4gICAgICAgIGNvbnRyb2xDb25maWcubXVsdGlwbGUgPSB0cnVlO1xuICAgICAgICAvLyBUT0RPOiBXaGVuIGFwcGVuZFRvQm9keSBwaWNrZXIgd29ya3MgYmV0dGVyIGluIHRhYmxlL2Zvcm1cbiAgICAgICAgY29udHJvbCA9IG5ldyBQaWNrZXJDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VudGl0eXBpY2tlcic6XG4gICAgICAgIC8vIFRPRE86IFRoaXMgZG9lc24ndCBiZWxvbmcgaW4gdGhpcyBjb2RlYmFzZVxuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5yZXN1bHRzVGVtcGxhdGUgPSBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZSB8fCBFbnRpdHlQaWNrZXJSZXN1bHRzO1xuICAgICAgICAvLyBUT0RPOiBXaGVuIGFwcGVuZFRvQm9keSBwaWNrZXIgd29ya3MgYmV0dGVyIGluIHRhYmxlL2Zvcm1cbiAgICAgICAgY29udHJvbCA9IG5ldyBQaWNrZXJDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BpY2tlcic6XG4gICAgICAgIC8vIFRPRE86IFdoZW4gYXBwZW5kVG9Cb2R5IHBpY2tlciB3b3JrcyBiZXR0ZXIgaW4gdGFibGUvZm9ybVxuICAgICAgICBjb250cm9sID0gbmV3IFBpY2tlckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF0ZXRpbWUnOlxuICAgICAgICBjb250cm9sQ29uZmlnLm1pbGl0YXJ5ID0gY29uZmlnID8gISFjb25maWcubWlsaXRhcnkgOiBmYWxzZTtcbiAgICAgICAgY29udHJvbCA9IG5ldyBEYXRlVGltZUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgIGNvbnRyb2xDb25maWcuZGF0ZUZvcm1hdCA9IGZpZWxkLmRhdGVGb3JtYXQ7XG4gICAgICAgIGNvbnRyb2xDb25maWcudGV4dE1hc2tFbmFibGVkID0gZmllbGQudGV4dE1hc2tFbmFibGVkO1xuICAgICAgICBjb250cm9sQ29uZmlnLmFsbG93SW52YWxpZERhdGUgPSBmaWVsZC5hbGxvd0ludmFsaWREYXRlO1xuICAgICAgICBjb250cm9sQ29uZmlnLm1pbGl0YXJ5ID0gY29uZmlnID8gISFjb25maWcubWlsaXRhcnkgOiBmYWxzZTtcbiAgICAgICAgY29udHJvbCA9IG5ldyBEYXRlQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0aW1lJzpcbiAgICAgICAgY29udHJvbENvbmZpZy5taWxpdGFyeSA9IGNvbmZpZyA/ICEhY29uZmlnLm1pbGl0YXJ5IDogZmFsc2U7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGltZUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgY2FzZSAnbW9uZXknOlxuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgY2FzZSAncGVyY2VudGFnZSc6XG4gICAgICBjYXNlICdmbG9hdCc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgIC8vIFRPRE86IE9ubHkgdHlwZXMgZnJvbSBgZGV0ZXJtaW5lSW5wdXRUeXBlYCBzaG91bGQgYmUgdXNlZCBpbiB0aGlzIGNsYXNzXG4gICAgICAgIGlmICh0eXBlID09PSAnbW9uZXknKSB7XG4gICAgICAgICAgdHlwZSA9ICdjdXJyZW5jeSc7XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbENvbmZpZy50eXBlID0gdHlwZTtcbiAgICAgICAgY29udHJvbCA9IG5ldyBUZXh0Qm94Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBUZXh0Qm94Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGV4dEFyZWFDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXRvcic6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgRWRpdG9yQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0b3ItbWluaW1hbCc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgRWRpdG9yQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgY29udHJvbC5taW5pbWFsID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0aWxlcyc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGlsZXNDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgY29udHJvbENvbmZpZy5jaGVja2JveExhYmVsID0gZmllbGQuY2hlY2tib3hMYWJlbDtcbiAgICAgICAgY29udHJvbCA9IG5ldyBDaGVja2JveENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hlY2tsaXN0JzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBDaGVja0xpc3RDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBSYWRpb0NvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBTZWxlY3RDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FkZHJlc3MnOlxuICAgICAgICBjb250cm9sQ29uZmlnLnJlcXVpcmVkID0gZmllbGQucmVxdWlyZWQgfHwgZmFsc2U7XG4gICAgICAgIGlmIChIZWxwZXJzLmlzQmxhbmsoY29udHJvbENvbmZpZy5jb25maWcpKSB7XG4gICAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5yZXF1aXJlZCA9IGZpZWxkLnJlcXVpcmVkO1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5yZWFkT25seSA9IGNvbnRyb2xDb25maWcucmVhZE9ubHk7XG4gICAgICAgIGlmIChmaWVsZC5maWVsZHMgJiYgZmllbGQuZmllbGRzLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAobGV0IHN1YmZpZWxkIG9mIGZpZWxkLmZpZWxkcykge1xuICAgICAgICAgICAgY29udHJvbENvbmZpZy5jb25maWdbc3ViZmllbGQubmFtZV0gPSB7XG4gICAgICAgICAgICAgIHJlcXVpcmVkOiAhIXN1YmZpZWxkLnJlcXVpcmVkLFxuICAgICAgICAgICAgICBoaWRkZW46ICEhc3ViZmllbGQucmVhZE9ubHksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkoc3ViZmllbGQubGFiZWwpKSB7XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnW3N1YmZpZWxkLm5hbWVdLmxhYmVsID0gc3ViZmllbGQubGFiZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eShzdWJmaWVsZC5tYXhMZW5ndGgpKSB7XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnW3N1YmZpZWxkLm5hbWVdLm1heGxlbmd0aCA9IHN1YmZpZWxkLm1heExlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRyb2xDb25maWcucmVxdWlyZWQgPSBjb250cm9sQ29uZmlnLnJlcXVpcmVkIHx8IHN1YmZpZWxkLnJlcXVpcmVkO1xuICAgICAgICAgICAgaWYgKHN1YmZpZWxkLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICBpZiAoSGVscGVycy5pc0JsYW5rKGNvbnRyb2xDb25maWcudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbENvbmZpZy52YWx1ZSA9IHt9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcudmFsdWVbc3ViZmllbGQubmFtZV0gPSBzdWJmaWVsZC5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN1YmZpZWxkLm5hbWUgPT09ICdjb3VudHJ5SUQnKSB7XG4gICAgICAgICAgICAgIGlmIChIZWxwZXJzLmlzQmxhbmsoY29udHJvbENvbmZpZy52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLnZhbHVlID0ge307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udHJvbENvbmZpZy52YWx1ZVtzdWJmaWVsZC5uYW1lXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3ViZmllbGQubmFtZSA9PT0gJ3N0YXRlJyB8fCBzdWJmaWVsZC5uYW1lID09PSAnY291bnRyeUlEJykge1xuICAgICAgICAgICAgICBpZiAoc3ViZmllbGQubmFtZSA9PT0gJ2NvdW50cnlJRCcpIHtcbiAgICAgICAgICAgICAgICBzdWJmaWVsZC5vcHRpb25zVHlwZSA9ICdDb3VudHJ5JztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIXN1YmZpZWxkLm9wdGlvbnNVcmwpIHtcbiAgICAgICAgICAgICAgICBzdWJmaWVsZC5vcHRpb25zVXJsID0gYG9wdGlvbnMvJHtzdWJmaWVsZC5vcHRpb25zVHlwZX1gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnW3N1YmZpZWxkLm5hbWVdLnBpY2tlckNvbmZpZyA9IHRoaXMuZ2V0Q29udHJvbE9wdGlvbnMoc3ViZmllbGQsIGh0dHAsIGNvbmZpZywgZmllbGREYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbENvbmZpZy5pc0VtcHR5ID0gdGhpcy5pc0FkZHJlc3NFbXB0eTtcbiAgICAgICAgY29udHJvbCA9IG5ldyBBZGRyZXNzQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBGaWxlQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXN0b20nOlxuICAgICAgICBjb250cm9sID0gbmV3IEN1c3RvbUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29udHJvbCA9IG5ldyBUZXh0Qm94Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9sO1xuICB9XG5cbiAgdG9Db250cm9scyhcbiAgICBtZXRhLFxuICAgIGN1cnJlbmN5Rm9ybWF0LFxuICAgIGh0dHAsXG4gICAgY29uZmlnOiB7IHRva2VuPzogc3RyaW5nOyByZXN0VXJsPzogc3RyaW5nOyBtaWxpdGFyeT86IGJvb2xlYW4gfSxcbiAgICBvdmVycmlkZXM/OiBhbnksXG4gICAgZm9yVGFibGU6IGJvb2xlYW4gPSBmYWxzZSxcbiAgKSB7XG4gICAgbGV0IGNvbnRyb2xzID0gW107XG4gICAgaWYgKG1ldGEgJiYgbWV0YS5maWVsZHMpIHtcbiAgICAgIGxldCBmaWVsZHMgPSBtZXRhLmZpZWxkcztcbiAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZmllbGQubmFtZSAhPT0gJ2lkJyAmJlxuICAgICAgICAgIChmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24gIT09ICdTWVNURU0nIHx8IFsnYWRkcmVzcycsICdiaWxsaW5nQWRkcmVzcycsICdzZWNvbmRhcnlBZGRyZXNzJ10uaW5kZXhPZihmaWVsZC5uYW1lKSAhPT0gLTEpICYmXG4gICAgICAgICAgIWZpZWxkLnJlYWRPbmx5XG4gICAgICAgICkge1xuICAgICAgICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sRm9yRmllbGQoZmllbGQsIGh0dHAsIGNvbmZpZywgb3ZlcnJpZGVzLCBmb3JUYWJsZSk7XG4gICAgICAgICAgLy8gU2V0IGN1cnJlbmN5IGZvcm1hdFxuICAgICAgICAgIGlmIChjb250cm9sLnN1YlR5cGUgPT09ICdjdXJyZW5jeScpIHtcbiAgICAgICAgICAgIGNvbnRyb2wuY3VycmVuY3lGb3JtYXQgPSBjdXJyZW5jeUZvcm1hdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQWRkIHRvIGNvbnRyb2xzXG4gICAgICAgICAgY29udHJvbHMucHVzaChjb250cm9sKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9scztcbiAgfVxuXG4gIHRvVGFibGVDb250cm9scyhtZXRhLCBjdXJyZW5jeUZvcm1hdCwgaHR0cCwgY29uZmlnOiB7IHRva2VuPzogc3RyaW5nOyByZXN0VXJsPzogc3RyaW5nOyBtaWxpdGFyeT86IGJvb2xlYW4gfSwgb3ZlcnJpZGVzPzogYW55KSB7XG4gICAgbGV0IGNvbnRyb2xzID0gdGhpcy50b0NvbnRyb2xzKG1ldGEsIGN1cnJlbmN5Rm9ybWF0LCBodHRwLCBjb25maWcsIG92ZXJyaWRlcywgdHJ1ZSk7XG4gICAgbGV0IHJldCA9IHt9O1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2w6IEJhc2VDb250cm9sKSA9PiB7XG4gICAgICByZXRbY29udHJvbC5rZXldID0ge1xuICAgICAgICBlZGl0b3JUeXBlOiBjb250cm9sLl9fdHlwZSxcbiAgICAgICAgZWRpdG9yQ29uZmlnOiBjb250cm9sLl9fY29uZmlnLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgdG9GaWVsZFNldHMoXG4gICAgbWV0YSxcbiAgICBjdXJyZW5jeUZvcm1hdCxcbiAgICBodHRwLFxuICAgIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuIH0sXG4gICAgb3ZlcnJpZGVzPyxcbiAgICBkYXRhPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgKSB7XG4gICAgbGV0IGZpZWxkc2V0czogQXJyYXk8Tm92b0ZpZWxkc2V0PiA9IFtdO1xuICAgIGxldCByYW5nZXMgPSBbXTtcbiAgICBpZiAobWV0YSAmJiBtZXRhLmZpZWxkcykge1xuICAgICAgbGV0IGZpZWxkcyA9IG1ldGEuZmllbGRzXG4gICAgICAgIC5tYXAoKGZpZWxkKSA9PiB7XG4gICAgICAgICAgaWYgKCFmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnc29ydE9yZGVyJykpIHtcbiAgICAgICAgICAgIGZpZWxkLnNvcnRPcmRlciA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIC0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgICAgICB9KVxuICAgICAgICAuc29ydChIZWxwZXJzLnNvcnRCeUZpZWxkKFsnc29ydE9yZGVyJywgJ25hbWUnXSkpO1xuICAgICAgaWYgKG1ldGEuc2VjdGlvbkhlYWRlcnMgJiYgbWV0YS5zZWN0aW9uSGVhZGVycy5sZW5ndGgpIHtcbiAgICAgICAgbWV0YS5zZWN0aW9uSGVhZGVycy5zb3J0KEhlbHBlcnMuc29ydEJ5RmllbGQoWydzb3J0T3JkZXInLCAnbmFtZSddKSk7XG4gICAgICAgIG1ldGEuc2VjdGlvbkhlYWRlcnMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnNvcnRPcmRlciA+IDAgJiYgZmllbGRzZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICBmaWVsZHNldHMucHVzaCh7XG4gICAgICAgICAgICAgICAgY29udHJvbHM6IFtdLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICBtYXg6IGl0ZW0uc29ydE9yZGVyIC0gMSxcbiAgICAgICAgICAgICAgICBmaWVsZHNldElkeDogMCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWVsZHNldHMucHVzaCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLmxhYmVsLFxuICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24gfHwgJ2JoaS1zZWN0aW9uJyxcbiAgICAgICAgICAgICAgY29udHJvbHM6IFtdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgIG1pbjogaXRlbS5zb3J0T3JkZXIsXG4gICAgICAgICAgICAgIG1heDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgICAgICAgIGZpZWxkc2V0SWR4OiBmaWVsZHNldHMubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGkgPiAwICYmIGZpZWxkc2V0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIHJhbmdlc1tmaWVsZHNldHMubGVuZ3RoIC0gMl0ubWF4ID0gaXRlbS5zb3J0T3JkZXIgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghcmFuZ2VzLmxlbmd0aCkge1xuICAgICAgICAgIGZpZWxkc2V0cy5wdXNoKHtcbiAgICAgICAgICAgIGNvbnRyb2xzOiBbXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICAgICAgZmllbGRzZXRJZHg6IDAsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkc2V0cy5wdXNoKHtcbiAgICAgICAgICBjb250cm9sczogW10sXG4gICAgICAgIH0pO1xuICAgICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgICAgZmllbGRzZXRJZHg6IDAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBmaWVsZC5uYW1lICE9PSAnaWQnICYmXG4gICAgICAgICAgKGZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbiAhPT0gJ1NZU1RFTScgfHwgWydhZGRyZXNzJywgJ2JpbGxpbmdBZGRyZXNzJywgJ3NlY29uZGFyeUFkZHJlc3MnXS5pbmRleE9mKGZpZWxkLm5hbWUpICE9PSAtMSkgJiZcbiAgICAgICAgICAhZmllbGQucmVhZE9ubHlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgZmllbGREYXRhOiBhbnkgPSBkYXRhICYmIGRhdGFbZmllbGQubmFtZV0gPyBkYXRhW2ZpZWxkLm5hbWVdIDogbnVsbDtcbiAgICAgICAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbEZvckZpZWxkKGZpZWxkLCBodHRwLCBjb25maWcsIG92ZXJyaWRlcywgdW5kZWZpbmVkLCBmaWVsZERhdGEpO1xuICAgICAgICAgIC8vIFNldCBjdXJyZW5jeSBmb3JtYXRcbiAgICAgICAgICBpZiAoY29udHJvbC5zdWJUeXBlID09PSAnY3VycmVuY3knKSB7XG4gICAgICAgICAgICBjb250cm9sLmN1cnJlbmN5Rm9ybWF0ID0gY3VycmVuY3lGb3JtYXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBsb2NhdGlvbiA9IHJhbmdlcy5maW5kKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGl0ZW0ubWluIDw9IGZpZWxkLnNvcnRPcmRlciAmJiBmaWVsZC5zb3J0T3JkZXIgPD0gaXRlbS5tYXgpIHx8IChpdGVtLm1pbiA8PSBmaWVsZC5zb3J0T3JkZXIgJiYgaXRlbS5taW4gPT09IGl0ZW0ubWF4KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgICAgICAgIC8vIEFkZCB0byBjb250cm9sc1xuICAgICAgICAgICAgZmllbGRzZXRzW2xvY2F0aW9uLmZpZWxkc2V0SWR4XS5jb250cm9scy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChmaWVsZHNldHMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGZpZWxkc2V0cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRyb2xzOiB0aGlzLnRvQ29udHJvbHMobWV0YSwgY3VycmVuY3lGb3JtYXQsIGh0dHAsIGNvbmZpZyksXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIGdldENvbnRyb2xPcHRpb25zKGZpZWxkOiBhbnksIGh0dHA6IGFueSwgY29uZmlnOiB7IHRva2VuPzogc3RyaW5nOyByZXN0VXJsPzogc3RyaW5nOyBtaWxpdGFyeT86IGJvb2xlYW4gfSwgZmllbGREYXRhPzogYW55KTogYW55IHtcbiAgICAvLyBUT0RPOiBUaGUgdG9rZW4gcHJvcGVydHkgb2YgY29uZmlnIGlzIHRoZSBvbmx5IHByb3BlcnR5IHVzZWQ7IGp1c3QgcGFzcyBpbiBgdG9rZW46IHN0cmluZ2BcbiAgICBpZiAoZmllbGQuZGF0YVR5cGUgPT09ICdCb29sZWFuJyAmJiAhZmllbGQub3B0aW9ucykge1xuICAgICAgLy8gVE9ETzogZGF0YVR5cGUgc2hvdWxkIG9ubHkgYmUgZGV0ZXJtaW5lZCBieSBgZGV0ZXJtaW5lSW5wdXRUeXBlYCB3aGljaCBkb2Vzbid0IGV2ZXIgcmV0dXJuICdCb29sZWFuJyBpdFxuICAgICAgLy8gVE9ETzogKGNvbnQuKSByZXR1cm5zIGB0aWxlc2BcbiAgICAgIHJldHVybiBbeyB2YWx1ZTogZmFsc2UsIGxhYmVsOiB0aGlzLmxhYmVscy5ubyB9LCB7IHZhbHVlOiB0cnVlLCBsYWJlbDogdGhpcy5sYWJlbHMueWVzIH1dO1xuICAgIH0gZWxzZSBpZiAoZmllbGQud29ya2Zsb3dPcHRpb25zICYmIGZpZWxkRGF0YSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0V29ya2Zsb3dPcHRpb25zKGZpZWxkLndvcmtmbG93T3B0aW9ucywgZmllbGREYXRhKTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbiA9PT0gJ1NQRUNJQUxJWkVEX09QVElPTlMnKSB7XG4gICAgICByZXR1cm4gZmllbGQub3B0aW9ucy5maWx0ZXIoKG8pID0+ICFvLnJlYWRPbmx5KTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLm9wdGlvbnNVcmwpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNTZXJ2aWNlLmdldE9wdGlvbnNDb25maWcoaHR0cCwgZmllbGQsIGNvbmZpZyk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGZpZWxkLm9wdGlvbnMpICYmIGZpZWxkLnR5cGUgPT09ICdjaGlwcycpIHtcbiAgICAgIGxldCBvcHRpb25zID0gZmllbGQub3B0aW9ucztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpZWxkOiAndmFsdWUnLFxuICAgICAgICBmb3JtYXQ6ICckbGFiZWwnLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLm9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBmaWVsZC5vcHRpb25zO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0V29ya2Zsb3dPcHRpb25zKFxuICAgIHdvcmtmbG93T3B0aW9uczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgICBmaWVsZERhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4gICk6IEFycmF5PHsgdmFsdWU6IHN0cmluZyB8IG51bWJlcjsgbGFiZWw6IHN0cmluZyB8IG51bWJlciB9PiB7XG4gICAgbGV0IGN1cnJlbnRWYWx1ZTogeyB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyOyBsYWJlbDogc3RyaW5nIHwgbnVtYmVyIH07XG4gICAgaWYgKGZpZWxkRGF0YS5pZCkge1xuICAgICAgY3VycmVudFZhbHVlID0geyB2YWx1ZTogZmllbGREYXRhLmlkLCBsYWJlbDogZmllbGREYXRhLmxhYmVsID8gZmllbGREYXRhLmxhYmVsIDogZmllbGREYXRhLmlkIH07XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFdvcmtmbG93T3B0aW9uOiBudW1iZXIgfCBzdHJpbmcgPSBmaWVsZERhdGEuaWQgPyBmaWVsZERhdGEuaWQgOiAnaW5pdGlhbCc7XG4gICAgbGV0IHVwZGF0ZVdvcmtmbG93T3B0aW9uczogQXJyYXk8eyB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyOyBsYWJlbDogc3RyaW5nIHwgbnVtYmVyIH0+ID0gd29ya2Zsb3dPcHRpb25zW2N1cnJlbnRXb3JrZmxvd09wdGlvbl0gfHwgW107XG5cbiAgICBpZiAoY3VycmVudFZhbHVlICYmICF1cGRhdGVXb3JrZmxvd09wdGlvbnMuZmluZCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09IGN1cnJlbnRWYWx1ZS52YWx1ZSkpIHtcbiAgICAgIHVwZGF0ZVdvcmtmbG93T3B0aW9ucy51bnNoaWZ0KGN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVwZGF0ZVdvcmtmbG93T3B0aW9ucztcbiAgfVxuXG4gIHNldEluaXRpYWxWYWx1ZXMoY29udHJvbHM6IEFycmF5PE5vdm9Db250cm9sQ29uZmlnPiwgdmFsdWVzOiBhbnksIGtlZXBDbGVhbj86IGJvb2xlYW4sIGtleU92ZXJyaWRlPzogc3RyaW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNvbnRyb2wgPSBjb250cm9sc1tpXTtcbiAgICAgIGxldCBrZXkgPSBrZXlPdmVycmlkZSA/IGNvbnRyb2wua2V5LnJlcGxhY2Uoa2V5T3ZlcnJpZGUsICcnKSA6IGNvbnRyb2wua2V5O1xuICAgICAgbGV0IHZhbHVlID0gdmFsdWVzW2tleV07XG5cbiAgICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodmFsdWUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmZpbHRlcigodmFsKSA9PiAhKE9iamVjdC5rZXlzKHZhbCkubGVuZ3RoID09PSAwICYmIHZhbC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSk7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUuZGF0YSAmJiB2YWx1ZS5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDAgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29udHJvbC52YWx1ZSA9IHZhbHVlO1xuICAgICAgLy8gVE9ETzoga2VlcENsZWFuIGlzIG5vdCByZXF1aXJlZCwgYnV0IGlzIGFsd2F5cyB1c2VkLiBJdCBzaG91bGQgZGVmYXVsdCAodG8gdHJ1ZT8pXG4gICAgICBjb250cm9sLmRpcnR5ID0gIWtlZXBDbGVhbjtcbiAgICB9XG4gIH1cblxuICBzZXRJbml0aWFsVmFsdWVzRmllbGRzZXRzKGZpZWxkc2V0czogQXJyYXk8Tm92b0ZpZWxkc2V0PiwgdmFsdWVzLCBrZWVwQ2xlYW4/OiBib29sZWFuKSB7XG4gICAgZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICB0aGlzLnNldEluaXRpYWxWYWx1ZXMoZmllbGRzZXQuY29udHJvbHMsIHZhbHVlcywga2VlcENsZWFuKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlU2hvd0FsbENvbnRyb2xzKGNvbnRyb2xzOiBBcnJheTxOb3ZvQ29udHJvbENvbmZpZz4pIHtcbiAgICBjb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICBjb250cm9sLmhpZGRlbiA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yY2VTaG93QWxsQ29udHJvbHNJbkZpZWxkc2V0cyhmaWVsZHNldHM6IEFycmF5PE5vdm9GaWVsZHNldD4pIHtcbiAgICBmaWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgY29udHJvbC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yY2VWYWxpZGF0aW9uKGZvcm06IE5vdm9Gb3JtR3JvdXApOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyhmb3JtLmNvbnRyb2xzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgbGV0IGNvbnRyb2w6IGFueSA9IGZvcm0uY29udHJvbHNba2V5XTtcbiAgICAgIGlmIChjb250cm9sLnJlcXVpcmVkICYmIEhlbHBlcnMuaXNCbGFuayhmb3JtLnZhbHVlW2NvbnRyb2wua2V5XSkpIHtcbiAgICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzQWRkcmVzc0VtcHR5KGNvbnRyb2w6IGFueSk6IGJvb2xlYW4ge1xuICAgIGxldCBmaWVsZExpc3Q6IHN0cmluZ1tdID0gWydhZGRyZXNzMScsICdhZGRyZXNzMicsICdjaXR5JywgJ3N0YXRlJywgJ3ppcCcsICdjb3VudHJ5SUQnXTtcbiAgICBsZXQgdmFsaWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGlmIChjb250cm9sLnZhbHVlICYmIGNvbnRyb2wuY29uZmlnKSB7XG4gICAgICBmaWVsZExpc3QuZm9yRWFjaCgoc3ViZmllbGQ6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKChzdWJmaWVsZCAhPT0gJ2NvdW50cnlJRCcgJiZcbiAgICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29udHJvbC5jb25maWdbc3ViZmllbGRdKSAmJlxuICAgICAgICAgICAgY29udHJvbC5jb25maWdbc3ViZmllbGRdLnJlcXVpcmVkICYmXG4gICAgICAgICAgICAoSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWVbc3ViZmllbGRdKSB8fCBIZWxwZXJzLmlzRW1wdHkoY29udHJvbC52YWx1ZVtzdWJmaWVsZF0pKSkgfHxcbiAgICAgICAgICAgIChzdWJmaWVsZCA9PT0gJ2NvdW50cnlJRCcgJiZcbiAgICAgICAgICAgICAgIUhlbHBlcnMuaXNFbXB0eShjb250cm9sLmNvbmZpZy5jb3VudHJ5SUQpICYmXG4gICAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLmNvdW50cnlJRC5yZXF1aXJlZCAmJlxuICAgICAgICAgICAgICBIZWxwZXJzLmlzRW1wdHkoY29udHJvbC52YWx1ZS5jb3VudHJ5TmFtZSkpKSAmJlxuICAgICAgICAgICEoXG4gICAgICAgICAgICBzdWJmaWVsZCA9PT0gJ3N0YXRlJyAmJlxuICAgICAgICAgICAgIUhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlLmNvdW50cnlOYW1lKSAmJlxuICAgICAgICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnICYmXG4gICAgICAgICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgJiZcbiAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucy5sZW5ndGggPT09IDBcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cblxuICBwcml2YXRlIGdldFN0YXJ0RGF0ZUZyb21SYW5nZShkYXRlUmFuZ2U6IHsgbWluRGF0ZTogc3RyaW5nOyBtaW5PZmZzZXQ6IG51bWJlciB9KTogRGF0ZSB7XG4gICAgaWYgKGRhdGVSYW5nZS5taW5EYXRlKSB7XG4gICAgICByZXR1cm4gZGF0ZUZucy5wYXJzZShkYXRlUmFuZ2UubWluRGF0ZSk7XG4gICAgfSBlbHNlIGlmIChkYXRlUmFuZ2UubWluT2Zmc2V0KSB7XG4gICAgICByZXR1cm4gZGF0ZUZucy5hZGREYXlzKGRhdGVGbnMuc3RhcnRPZlRvZGF5KCksIGRhdGVSYW5nZS5taW5PZmZzZXQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1pbiBzdGFydCBkYXRlIG9mIGEgRGF0ZSBiYXNlIG9uIGZpZWxkIGRhdGEuXG4gICAqL1xuICBwcml2YXRlIGdldFN0YXJ0RGF0ZShmaWVsZDogYW55KTogRGF0ZSB8IG51bGwge1xuICAgIGlmIChmaWVsZC5hbGxvd2VkRGF0ZVJhbmdlKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGFydERhdGVGcm9tUmFuZ2UoZmllbGQuYWxsb3dlZERhdGVSYW5nZSk7XG4gICAgfVxuICAgIC8vIHRoZXJlIGlzIG5vIHJlc3RyaWN0aW9uIG9uIHRoZSBzdGFydCBkYXRlXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGluZmVyU3RhcnREYXRlKGNvbnRyb2xDb25maWcsIGZpZWxkKSB7XG4gICAgaWYgKGZpZWxkLmRhdGFUeXBlID09PSAnRGF0ZScpIHtcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHRoaXMuZ2V0U3RhcnREYXRlKGZpZWxkKTtcbiAgICAgIGlmIChzdGFydERhdGUpIHtcbiAgICAgICAgY29udHJvbENvbmZpZy5zdGFydERhdGUgPSBzdGFydERhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhcnREYXRlO1xuICAgIH1cbiAgfVxufVxuIl19