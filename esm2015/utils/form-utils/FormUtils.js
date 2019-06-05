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
            WorkflowOptionsLookup: 'select',
            SpecializedOptionsLookup: 'select',
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
            if ('SYSTEM' === field.dataSpecialization && ['WorkflowOptionsLookup', 'SpecializedOptionsLookup'].includes(field.dataType)) {
                type = dataSpecializationTypeMap[field.dataType];
            }
            else if (['WORKFLOW_OPTIONS', 'SPECIALIZED_OPTIONS'].includes(field.dataSpecialization)) {
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
            disabled: field.disabled,
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
            layoutOptions: field.layoutOptions,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybVV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL2Zvcm0tdXRpbHMvRm9ybVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQzs7QUFFcEMsT0FBTyxFQUNMLGNBQWMsRUFFZCxlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixXQUFXLEVBQ1gsZUFBZSxFQUNmLGFBQWEsRUFDYixXQUFXLEVBRVgsYUFBYSxFQUNiLFlBQVksRUFDWixhQUFhLEVBQ2IsZUFBZSxFQUNmLGNBQWMsRUFDZCxZQUFZLEVBQ1osV0FBVyxHQUNaLE1BQU0sa0NBQWtDLENBQUM7QUFDMUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDakksT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVyQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUd6RSxNQUFNLE9BQU8sU0FBUzs7Ozs7SUFrQ3BCLFlBQW1CLE1BQXdCLEVBQVMsY0FBOEI7UUFBL0QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFqQ2xGLDJCQUFzQixHQUFhO1lBQ2pDLFdBQVc7WUFDWCxlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLE1BQU07WUFDTixhQUFhO1lBQ2IsVUFBVTtZQUNWLGVBQWU7WUFDZixRQUFRO1lBQ1IsV0FBVztT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LFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUMxQyxJQUFJLFNBQVMsRUFBRTtnQkFDYixhQUFhLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzthQUNyQztZQUNELE9BQU8sU0FBUyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7O1lBbHRCRixVQUFVOzs7O1lBSEYsZ0JBQWdCO1lBQ2hCLGNBQWM7Ozs7SUFJckIsMkNBVUU7O0lBQ0YsdUNBb0JFOztJQUVVLDJCQUErQjs7SUFBRSxtQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOR1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG4vLyBBcHBcbmltcG9ydCB7XG4gIEFkZHJlc3NDb250cm9sLFxuICBCYXNlQ29udHJvbCxcbiAgQ2hlY2tib3hDb250cm9sLFxuICBDaGVja0xpc3RDb250cm9sLFxuICBDdXN0b21Db250cm9sLFxuICBEYXRlQ29udHJvbCxcbiAgRGF0ZVRpbWVDb250cm9sLFxuICBFZGl0b3JDb250cm9sLFxuICBGaWxlQ29udHJvbCxcbiAgTm92b0NvbnRyb2xDb25maWcsXG4gIFBpY2tlckNvbnRyb2wsXG4gIFJhZGlvQ29udHJvbCxcbiAgU2VsZWN0Q29udHJvbCxcbiAgVGV4dEFyZWFDb250cm9sLFxuICBUZXh0Qm94Q29udHJvbCxcbiAgVGlsZXNDb250cm9sLFxuICBUaW1lQ29udHJvbCxcbn0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybS9Gb3JtQ29udHJvbHMnO1xuaW1wb3J0IHsgRW50aXR5UGlja2VyUmVzdWx0LCBFbnRpdHlQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvcGlja2VyL2V4dHJhcy9lbnRpdHktcGlja2VyLXJlc3VsdHMvRW50aXR5UGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvRmllbGRzZXQsIEZvcm1GaWVsZCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0vRm9ybUludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm92b0Zvcm1Db250cm9sIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybS9Ob3ZvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IHsgTm92b0Zvcm1Hcm91cCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0vTm92b0Zvcm1Hcm91cCc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9vcHRpb25zL09wdGlvbnNTZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1VdGlscyB7XG4gIEFTU09DSUFURURfRU5USVRZX0xJU1Q6IHN0cmluZ1tdID0gW1xuICAgICdDYW5kaWRhdGUnLFxuICAgICdDbGllbnRDb250YWN0JyxcbiAgICAnQ2xpZW50Q29ycG9yYXRpb24nLFxuICAgICdMZWFkJyxcbiAgICAnT3Bwb3J0dW5pdHknLFxuICAgICdKb2JPcmRlcicsXG4gICAgJ0NvcnBvcmF0ZVVzZXInLFxuICAgICdQZXJzb24nLFxuICAgICdQbGFjZW1lbnQnLFxuICBdO1xuICBFTlRJVFlfUElDS0VSX0xJU1Q6IHN0cmluZ1tdID0gW1xuICAgICdDYW5kaWRhdGUnLFxuICAgICdDYW5kaWRhdGVUZXh0JyxcbiAgICAnQ2xpZW50JyxcbiAgICAnQ2xpZW50VGV4dCcsXG4gICAgJ0NsaWVudENvbnRhY3QnLFxuICAgICdDbGllbnRDb250YWN0VGV4dCcsXG4gICAgJ0NsaWVudENvcnBvcmF0aW9uJyxcbiAgICAnQ2xpZW50Q29ycG9yYXRpb25UZXh0JyxcbiAgICAnTGVhZCcsXG4gICAgJ0xlYWRUZXh0JyxcbiAgICAnT3Bwb3J0dW5pdHknLFxuICAgICdPcHBvcnR1bml0eVRleHQnLFxuICAgICdKb2JPcmRlcicsXG4gICAgJ0pvYk9yZGVyVGV4dCcsXG4gICAgJ0NvcnBvcmF0ZVVzZXInLFxuICAgICdDb3Jwb3JhdGVVc2VyVGV4dCcsXG4gICAgJ1BlcnNvbicsXG4gICAgJ1BlcnNvblRleHQnLFxuICAgICdQbGFjZW1lbnQnLFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHB1YmxpYyBvcHRpb25zU2VydmljZTogT3B0aW9uc1NlcnZpY2UpIHt9XG5cbiAgdG9Gb3JtR3JvdXAoY29udHJvbHM6IEFycmF5PGFueT4pOiBOb3ZvRm9ybUdyb3VwIHtcbiAgICBsZXQgZ3JvdXA6IGFueSA9IHt9O1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IEhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlKSA/ICcnIDogY29udHJvbC52YWx1ZTtcbiAgICAgIGdyb3VwW2NvbnRyb2wua2V5XSA9IG5ldyBOb3ZvRm9ybUNvbnRyb2wodmFsdWUsIGNvbnRyb2wpO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgTm92b0Zvcm1Hcm91cChncm91cCk7XG4gIH1cblxuICBlbXB0eUZvcm1Hcm91cCgpOiBOb3ZvRm9ybUdyb3VwIHtcbiAgICByZXR1cm4gbmV3IE5vdm9Gb3JtR3JvdXAoe30pO1xuICB9XG5cbiAgYWRkQ29udHJvbHMoZm9ybUdyb3VwOiBOb3ZvRm9ybUdyb3VwLCBjb250cm9sczogQXJyYXk8Tm92b0NvbnRyb2xDb25maWc+KTogdm9pZCB7XG4gICAgY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWUpID8gJycgOiBjb250cm9sLnZhbHVlO1xuICAgICAgbGV0IGZvcm1Db250cm9sID0gbmV3IE5vdm9Gb3JtQ29udHJvbCh2YWx1ZSwgY29udHJvbCk7XG4gICAgICBmb3JtR3JvdXAuYWRkQ29udHJvbChjb250cm9sLmtleSwgZm9ybUNvbnRyb2wpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlQ29udHJvbHMoZm9ybUdyb3VwOiBOb3ZvRm9ybUdyb3VwLCBjb250cm9sczogQXJyYXk8Tm92b0NvbnRyb2xDb25maWc+KTogdm9pZCB7XG4gICAgY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgZm9ybUdyb3VwLnJlbW92ZUNvbnRyb2woY29udHJvbC5rZXkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHRvRm9ybUdyb3VwRnJvbUZpZWxkc2V0XG4gICAqIEBwYXJhbSBmaWVsZHNldHNcbiAgICovXG4gIHRvRm9ybUdyb3VwRnJvbUZpZWxkc2V0KGZpZWxkc2V0czogQXJyYXk8Tm92b0ZpZWxkc2V0Pik6IE5vdm9Gb3JtR3JvdXAge1xuICAgIGxldCBjb250cm9sczogQXJyYXk8Tm92b0Zvcm1Db250cm9sPiA9IFtdO1xuICAgIGZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgY29udHJvbHMucHVzaCguLi5maWVsZHNldC5jb250cm9scyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMudG9Gb3JtR3JvdXAoY29udHJvbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGhhc0Fzc29jaWF0ZWRFbnRpdHlcbiAgICogQHBhcmFtIGZpZWxkXG4gICAqL1xuICBoYXNBc3NvY2lhdGVkRW50aXR5KGZpZWxkOiBGb3JtRmllbGQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEoZmllbGQuYXNzb2NpYXRlZEVudGl0eSAmJiB+dGhpcy5BU1NPQ0lBVEVEX0VOVElUWV9MSVNULmluZGV4T2YoZmllbGQuYXNzb2NpYXRlZEVudGl0eS5lbnRpdHkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBkZXRlcm1pbmVJbnB1dFR5cGVcbiAgICogQHBhcmFtIGZpZWxkXG4gICAqL1xuICBkZXRlcm1pbmVJbnB1dFR5cGUoZmllbGQ6IEZvcm1GaWVsZCk6IHN0cmluZyB7XG4gICAgbGV0IHR5cGU6IHN0cmluZztcbiAgICBsZXQgZGF0YVNwZWNpYWxpemF0aW9uVHlwZU1hcCA9IHtcbiAgICAgIERBVEVUSU1FOiAnZGF0ZXRpbWUnLFxuICAgICAgVElNRTogJ3RpbWUnLFxuICAgICAgTU9ORVk6ICdjdXJyZW5jeScsXG4gICAgICBQRVJDRU5UQUdFOiAncGVyY2VudGFnZScsXG4gICAgICBIVE1MOiAnZWRpdG9yJyxcbiAgICAgICdIVE1MLU1JTklNQUwnOiAnZWRpdG9yLW1pbmltYWwnLFxuICAgICAgWUVBUjogJ3llYXInLFxuICAgICAgV09SS0ZMT1dfT1BUSU9OUzogJ3NlbGVjdCcsXG4gICAgICBTUEVDSUFMSVpFRF9PUFRJT05TOiAnc2VsZWN0JyxcbiAgICAgIFdvcmtmbG93T3B0aW9uc0xvb2t1cDogJ3NlbGVjdCcsXG4gICAgICBTcGVjaWFsaXplZE9wdGlvbnNMb29rdXA6ICdzZWxlY3QnLFxuICAgIH07XG4gICAgbGV0IGRhdGFUeXBlVG9UeXBlTWFwID0ge1xuICAgICAgVGltZXN0YW1wOiAnZGF0ZScsXG4gICAgICBEYXRlOiAnZGF0ZScsXG4gICAgICBCb29sZWFuOiAndGlsZXMnLFxuICAgIH07XG4gICAgbGV0IGlucHV0VHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIENIRUNLQk9YOiAncmFkaW8nLFxuICAgICAgUkFESU86ICdyYWRpbycsXG4gICAgICBTRUxFQ1Q6ICdzZWxlY3QnLFxuICAgICAgVElMRVM6ICd0aWxlcycsXG4gICAgfTtcbiAgICBsZXQgaW5wdXRUeXBlTXVsdGlUb1R5cGVNYXAgPSB7XG4gICAgICBDSEVDS0JPWDogJ2NoZWNrbGlzdCcsXG4gICAgICBSQURJTzogJ2NoZWNrbGlzdCcsXG4gICAgICBTRUxFQ1Q6ICdjaGlwcycsXG4gICAgfTtcbiAgICBsZXQgdHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIGZpbGU6ICdmaWxlJyxcbiAgICAgIENPTVBPU0lURTogJ2FkZHJlc3MnLFxuICAgIH07XG4gICAgbGV0IG51bWJlckRhdGFUeXBlVG9UeXBlTWFwID0ge1xuICAgICAgRG91YmxlOiAnZmxvYXQnLFxuICAgICAgQmlnRGVjaW1hbDogJ2Zsb2F0JyxcbiAgICAgIEludGVnZXI6ICdudW1iZXInLFxuICAgIH07XG4gICAgaWYgKGZpZWxkLnR5cGUgPT09ICdUT19NQU5ZJykge1xuICAgICAgaWYgKHRoaXMuaGFzQXNzb2NpYXRlZEVudGl0eShmaWVsZCkpIHtcbiAgICAgICAgaWYgKGZpZWxkLm11bHRpVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdHlwZSA9ICdlbnRpdHlwaWNrZXInO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR5cGUgPSAnZW50aXR5Y2hpcHMnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZmllbGQubXVsdGlWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0eXBlID0gJ3BpY2tlcic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHlwZSA9ICdjaGlwcyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdUT19PTkUnKSB7XG4gICAgICBpZiAoJ1NZU1RFTScgPT09IGZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbiAmJiBbJ1dvcmtmbG93T3B0aW9uc0xvb2t1cCcsICdTcGVjaWFsaXplZE9wdGlvbnNMb29rdXAnXS5pbmNsdWRlcyhmaWVsZC5kYXRhVHlwZSkpIHtcbiAgICAgICAgdHlwZSA9IGRhdGFTcGVjaWFsaXphdGlvblR5cGVNYXBbZmllbGQuZGF0YVR5cGVdO1xuICAgICAgfSBlbHNlIGlmIChbJ1dPUktGTE9XX09QVElPTlMnLCAnU1BFQ0lBTElaRURfT1BUSU9OUyddLmluY2x1ZGVzKGZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbikpIHtcbiAgICAgICAgdHlwZSA9IGRhdGFTcGVjaWFsaXphdGlvblR5cGVNYXBbZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uXTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5oYXNBc3NvY2lhdGVkRW50aXR5KGZpZWxkKSkge1xuICAgICAgICB0eXBlID0gJ2VudGl0eXBpY2tlcic7IC8vIFRPRE8hXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlID0gJ3BpY2tlcic7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zVXJsICYmIGZpZWxkLmlucHV0VHlwZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgIGlmIChmaWVsZC5vcHRpb25zVHlwZSAmJiB+dGhpcy5FTlRJVFlfUElDS0VSX0xJU1QuaW5kZXhPZihmaWVsZC5vcHRpb25zVHlwZSkpIHtcbiAgICAgICAgdHlwZSA9ICdlbnRpdHlwaWNrZXInOyAvLyBUT0RPIVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9ICdwaWNrZXInO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXMoZGF0YVNwZWNpYWxpemF0aW9uVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24pID4gLTEpIHtcbiAgICAgIHR5cGUgPSBkYXRhU3BlY2lhbGl6YXRpb25UeXBlTWFwW2ZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbl07XG4gICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhkYXRhVHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5kYXRhVHlwZSkgPiAtMSkge1xuICAgICAgdHlwZSA9IGRhdGFUeXBlVG9UeXBlTWFwW2ZpZWxkLmRhdGFUeXBlXTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLmlucHV0VHlwZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgdHlwZSA9ICd0ZXh0YXJlYSc7XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zICYmIE9iamVjdC5rZXlzKGlucHV0VHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5pbnB1dFR5cGUpID4gLTEgJiYgIWZpZWxkLm11bHRpVmFsdWUpIHtcbiAgICAgIHR5cGUgPSBpbnB1dFR5cGVUb1R5cGVNYXBbZmllbGQuaW5wdXRUeXBlXTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLm9wdGlvbnMgJiYgT2JqZWN0LmtleXMoaW5wdXRUeXBlTXVsdGlUb1R5cGVNYXApLmluZGV4T2YoZmllbGQuaW5wdXRUeXBlKSA+IC0xICYmIGZpZWxkLm11bHRpVmFsdWUpIHtcbiAgICAgIHR5cGUgPSBpbnB1dFR5cGVNdWx0aVRvVHlwZU1hcFtmaWVsZC5pbnB1dFR5cGVdO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXModHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC50eXBlKSA+IC0xKSB7XG4gICAgICB0eXBlID0gdHlwZVRvVHlwZU1hcFtmaWVsZC50eXBlXTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKG51bWJlckRhdGFUeXBlVG9UeXBlTWFwKS5pbmRleE9mKGZpZWxkLmRhdGFUeXBlKSA+IC0xKSB7XG4gICAgICB0eXBlID0gbnVtYmVyRGF0YVR5cGVUb1R5cGVNYXBbZmllbGQuZGF0YVR5cGVdO1xuICAgIH0gLyogZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm1VdGlsczogVGhpcyBmaWVsZCB0eXBlIGlzIHVuc3VwcG9ydGVkLicpO1xuICAgICAgICB9Ki9cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGlzRmllbGRFbmNyeXB0ZWQoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4ga2V5LmluZGV4T2YoJ2N1c3RvbUVuY3J5cHRlZCcpID4gLTE7XG4gIH1cblxuICBnZXRDb250cm9sRm9yRmllbGQoXG4gICAgZmllbGQ6IGFueSxcbiAgICBodHRwLFxuICAgIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuIH0sXG4gICAgb3ZlcnJpZGVzPzogYW55LFxuICAgIGZvclRhYmxlOiBib29sZWFuID0gZmFsc2UsXG4gICAgZmllbGREYXRhPzogYW55LFxuICApIHtcbiAgICAvLyBUT0RPOiBpZiBmaWVsZC50eXBlIG92ZXJyaWRlcyBgZGV0ZXJtaW5lSW5wdXRUeXBlYCB3ZSBzaG91bGQgdXNlIGl0IGluIHRoYXQgbWV0aG9kIG9yIHVzZSB0aGlzIG1ldGhvZFxuICAgIC8vIFRPRE86IChjb250LikgYXMgdGhlIHNldHRlciBvZiB0aGUgZmllbGQgYXJndW1lbnRcbiAgICBsZXQgdHlwZTogc3RyaW5nID0gdGhpcy5kZXRlcm1pbmVJbnB1dFR5cGUoZmllbGQpIHx8IGZpZWxkLnR5cGU7XG4gICAgbGV0IGNvbnRyb2w6IGFueTtcbiAgICBsZXQgY29udHJvbENvbmZpZzogTm92b0NvbnRyb2xDb25maWcgPSB7XG4gICAgICBtZXRhVHlwZTogZmllbGQudHlwZSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBrZXk6IGZpZWxkLm5hbWUsXG4gICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICBwbGFjZWhvbGRlcjogZmllbGQuaGludCB8fCAnJyxcbiAgICAgIHJlcXVpcmVkOiBmaWVsZC5yZXF1aXJlZCB8fCBmaWVsZC5zeXN0ZW1SZXF1aXJlZCxcbiAgICAgIGhpZGRlbjogIWZpZWxkLnJlcXVpcmVkLFxuICAgICAgZW5jcnlwdGVkOiB0aGlzLmlzRmllbGRFbmNyeXB0ZWQoZmllbGQubmFtZSA/IGZpZWxkLm5hbWUudG9TdHJpbmcoKSA6ICcnKSxcbiAgICAgIHZhbHVlOiBmaWVsZC52YWx1ZSB8fCBmaWVsZC5kZWZhdWx0VmFsdWUsXG4gICAgICBzb3J0T3JkZXI6IGZpZWxkLnNvcnRPcmRlcixcbiAgICAgIGFzc29jaWF0ZWRFbnRpdHk6IGZpZWxkLmFzc29jaWF0ZWRFbnRpdHksXG4gICAgICBvcHRpb25zVHlwZTogZmllbGQub3B0aW9uc1R5cGUsXG4gICAgICBtdWx0aXBsZTogZmllbGQubXVsdGlWYWx1ZSxcbiAgICAgIHJlYWRPbmx5OiAhIWZpZWxkLmRpc2FibGVkIHx8ICEhZmllbGQucmVhZE9ubHksXG4gICAgICBkaXNhYmxlZDogZmllbGQuZGlzYWJsZWQsXG4gICAgICBtYXhsZW5ndGg6IGZpZWxkLm1heExlbmd0aCxcbiAgICAgIGludGVyYWN0aW9uczogZmllbGQuaW50ZXJhY3Rpb25zLFxuICAgICAgZGF0YVNwZWNpYWxpemF0aW9uOiBmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24sXG4gICAgICBkYXRhVHlwZTogZmllbGQuZGF0YVR5cGUsXG4gICAgICBkZXNjcmlwdGlvbjogZmllbGQuZGVzY3JpcHRpb24gfHwgJycsXG4gICAgICB0b29sdGlwOiBmaWVsZC50b29sdGlwLFxuICAgICAgdG9vbHRpcFBvc2l0aW9uOiBmaWVsZC50b29sdGlwUG9zaXRpb24sXG4gICAgICBjdXN0b21Db250cm9sOiBmaWVsZC5jdXN0b21Db250cm9sLFxuICAgICAgdGVtcGxhdGU6IGZpZWxkLnRlbXBsYXRlLFxuICAgICAgY3VzdG9tQ29udHJvbENvbmZpZzogZmllbGQuY3VzdG9tQ29udHJvbENvbmZpZyxcbiAgICAgIHJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnM6IGZpZWxkLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMsXG4gICAgICB2YWxpZGF0b3JzOiBmaWVsZC52YWxpZGF0b3JzLFxuICAgICAgd2FybmluZzogZmllbGQud2FybmluZyxcbiAgICAgIGNvbmZpZzogZmllbGQuY29uZmlnIHx8IHt9LFxuICAgICAgY2xvc2VPblNlbGVjdDogZmllbGQuY2xvc2VPblNlbGVjdCxcbiAgICAgIGxheW91dE9wdGlvbnM6IGZpZWxkLmxheW91dE9wdGlvbnMsXG4gICAgfTtcbiAgICB0aGlzLmluZmVyU3RhcnREYXRlKGNvbnRyb2xDb25maWcsIGZpZWxkKTtcbiAgICAvLyBUT0RPOiBnZXRDb250cm9sT3B0aW9ucyBzaG91bGQgYWx3YXlzIHJldHVybiB0aGUgY29ycmVjdCBmb3JtYXRcbiAgICBjb25zdCBvcHRpb25zQ29uZmlnID0gdGhpcy5nZXRDb250cm9sT3B0aW9ucyhmaWVsZCwgaHR0cCwgY29uZmlnLCBmaWVsZERhdGEpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnNDb25maWcpICYmICEodHlwZSA9PT0gJ2NoaXBzJyB8fCB0eXBlID09PSAncGlja2VyJykpIHtcbiAgICAgIGNvbnRyb2xDb25maWcub3B0aW9ucyA9IG9wdGlvbnNDb25maWc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnNDb25maWcpICYmICh0eXBlID09PSAnY2hpcHMnIHx8IHR5cGUgPT09ICdwaWNrZXInKSkge1xuICAgICAgY29udHJvbENvbmZpZy5jb25maWcgPSB7XG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnNDb25maWcsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAob3B0aW9uc0NvbmZpZykge1xuICAgICAgY29udHJvbENvbmZpZy5jb25maWcgPSBvcHRpb25zQ29uZmlnO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAneWVhcicpIHtcbiAgICAgIGNvbnRyb2xDb25maWcubWF4bGVuZ3RoID0gNDtcbiAgICB9XG4gICAgLy8gVE9ETzogT3ZlcnJpZGVzIHNob3VsZCBiZSBhbiBpdGVyYWJsZSBvZiBhbGwgcHJvcGVydGllcyAocG90ZW50aWFsbHkgYSBwcml2YXRlIG1ldGhvZClcbiAgICBsZXQgb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGU7XG4gICAgbGV0IG92ZXJyaWRlUHJldmlld1RlbXBsYXRlO1xuICAgIGlmIChvdmVycmlkZXMgJiYgb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdKSB7XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnJlc3VsdHNUZW1wbGF0ZSkge1xuICAgICAgICBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5yZXN1bHRzVGVtcGxhdGU7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlO1xuICAgICAgICBkZWxldGUgb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnJlc3VsdHNUZW1wbGF0ZTtcbiAgICAgIH1cbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0ub3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGUpIHtcbiAgICAgICAgb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGUgPSBvdmVycmlkZXNbZmllbGQubmFtZV0ub3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGU7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLm92ZXJyaWRlUHJldmlld1RlbXBsYXRlID0gb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGU7XG4gICAgICAgIGRlbGV0ZSBvdmVycmlkZXNbZmllbGQubmFtZV0ub3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGU7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnBpY2tlckNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLmNhbGxiYWNrID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnBpY2tlckNhbGxiYWNrO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS50eXBlKSB7XG4gICAgICAgIHR5cGUgPSBvdmVycmlkZXNbZmllbGQubmFtZV0udHlwZTtcbiAgICAgIH1cbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0uY29sdW1ucykge1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5jb2x1bW5zID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLmNvbHVtbnM7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY2xvc2VPblNlbGVjdCA9IHRydWU7XG4gICAgICAgIGRlbGV0ZSBjb250cm9sQ29uZmlnLmxhYmVsO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS53YXJuaW5nKSB7XG4gICAgICAgIGNvbnRyb2xDb25maWcud2FybmluZyA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS53YXJuaW5nO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmFzc2lnbihjb250cm9sQ29uZmlnLCBvdmVycmlkZXNbZmllbGQubmFtZV0pO1xuICAgIH1cblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnZW50aXR5Y2hpcHMnOlxuICAgICAgICAvLyBUT0RPOiBUaGlzIGRvZXNuJ3QgYmVsb25nIGluIHRoaXMgY29kZWJhc2VcbiAgICAgICAgY29udHJvbENvbmZpZy5tdWx0aXBsZSA9IHRydWU7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlIHx8IEVudGl0eVBpY2tlclJlc3VsdHM7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnByZXZpZXdUZW1wbGF0ZSA9IG92ZXJyaWRlUHJldmlld1RlbXBsYXRlIHx8IEVudGl0eVBpY2tlclJlc3VsdDtcbiAgICAgICAgLy8gVE9ETzogV2hlbiBhcHBlbmRUb0JvZHkgcGlja2VyIHdvcmtzIGJldHRlciBpbiB0YWJsZS9mb3JtXG4gICAgICAgIGNvbnRyb2wgPSBuZXcgUGlja2VyQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGlwcyc6XG4gICAgICAgIGNvbnRyb2xDb25maWcubXVsdGlwbGUgPSB0cnVlO1xuICAgICAgICAvLyBUT0RPOiBXaGVuIGFwcGVuZFRvQm9keSBwaWNrZXIgd29ya3MgYmV0dGVyIGluIHRhYmxlL2Zvcm1cbiAgICAgICAgY29udHJvbCA9IG5ldyBQaWNrZXJDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VudGl0eXBpY2tlcic6XG4gICAgICAgIC8vIFRPRE86IFRoaXMgZG9lc24ndCBiZWxvbmcgaW4gdGhpcyBjb2RlYmFzZVxuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5yZXN1bHRzVGVtcGxhdGUgPSBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZSB8fCBFbnRpdHlQaWNrZXJSZXN1bHRzO1xuICAgICAgICAvLyBUT0RPOiBXaGVuIGFwcGVuZFRvQm9keSBwaWNrZXIgd29ya3MgYmV0dGVyIGluIHRhYmxlL2Zvcm1cbiAgICAgICAgY29udHJvbCA9IG5ldyBQaWNrZXJDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BpY2tlcic6XG4gICAgICAgIC8vIFRPRE86IFdoZW4gYXBwZW5kVG9Cb2R5IHBpY2tlciB3b3JrcyBiZXR0ZXIgaW4gdGFibGUvZm9ybVxuICAgICAgICBjb250cm9sID0gbmV3IFBpY2tlckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF0ZXRpbWUnOlxuICAgICAgICBjb250cm9sQ29uZmlnLm1pbGl0YXJ5ID0gY29uZmlnID8gISFjb25maWcubWlsaXRhcnkgOiBmYWxzZTtcbiAgICAgICAgY29udHJvbCA9IG5ldyBEYXRlVGltZUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgIGNvbnRyb2xDb25maWcuZGF0ZUZvcm1hdCA9IGZpZWxkLmRhdGVGb3JtYXQ7XG4gICAgICAgIGNvbnRyb2xDb25maWcudGV4dE1hc2tFbmFibGVkID0gZmllbGQudGV4dE1hc2tFbmFibGVkO1xuICAgICAgICBjb250cm9sQ29uZmlnLmFsbG93SW52YWxpZERhdGUgPSBmaWVsZC5hbGxvd0ludmFsaWREYXRlO1xuICAgICAgICBjb250cm9sQ29uZmlnLm1pbGl0YXJ5ID0gY29uZmlnID8gISFjb25maWcubWlsaXRhcnkgOiBmYWxzZTtcbiAgICAgICAgY29udHJvbCA9IG5ldyBEYXRlQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0aW1lJzpcbiAgICAgICAgY29udHJvbENvbmZpZy5taWxpdGFyeSA9IGNvbmZpZyA/ICEhY29uZmlnLm1pbGl0YXJ5IDogZmFsc2U7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGltZUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgY2FzZSAnbW9uZXknOlxuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgY2FzZSAncGVyY2VudGFnZSc6XG4gICAgICBjYXNlICdmbG9hdCc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgIC8vIFRPRE86IE9ubHkgdHlwZXMgZnJvbSBgZGV0ZXJtaW5lSW5wdXRUeXBlYCBzaG91bGQgYmUgdXNlZCBpbiB0aGlzIGNsYXNzXG4gICAgICAgIGlmICh0eXBlID09PSAnbW9uZXknKSB7XG4gICAgICAgICAgdHlwZSA9ICdjdXJyZW5jeSc7XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbENvbmZpZy50eXBlID0gdHlwZTtcbiAgICAgICAgY29udHJvbCA9IG5ldyBUZXh0Qm94Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBUZXh0Qm94Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGV4dEFyZWFDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXRvcic6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgRWRpdG9yQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0b3ItbWluaW1hbCc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgRWRpdG9yQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgY29udHJvbC5taW5pbWFsID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0aWxlcyc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGlsZXNDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgY29udHJvbENvbmZpZy5jaGVja2JveExhYmVsID0gZmllbGQuY2hlY2tib3hMYWJlbDtcbiAgICAgICAgY29udHJvbCA9IG5ldyBDaGVja2JveENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hlY2tsaXN0JzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBDaGVja0xpc3RDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBSYWRpb0NvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBTZWxlY3RDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FkZHJlc3MnOlxuICAgICAgICBjb250cm9sQ29uZmlnLnJlcXVpcmVkID0gZmllbGQucmVxdWlyZWQgfHwgZmFsc2U7XG4gICAgICAgIGlmIChIZWxwZXJzLmlzQmxhbmsoY29udHJvbENvbmZpZy5jb25maWcpKSB7XG4gICAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5yZXF1aXJlZCA9IGZpZWxkLnJlcXVpcmVkO1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5yZWFkT25seSA9IGNvbnRyb2xDb25maWcucmVhZE9ubHk7XG4gICAgICAgIGlmIChmaWVsZC5maWVsZHMgJiYgZmllbGQuZmllbGRzLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAobGV0IHN1YmZpZWxkIG9mIGZpZWxkLmZpZWxkcykge1xuICAgICAgICAgICAgY29udHJvbENvbmZpZy5jb25maWdbc3ViZmllbGQubmFtZV0gPSB7XG4gICAgICAgICAgICAgIHJlcXVpcmVkOiAhIXN1YmZpZWxkLnJlcXVpcmVkLFxuICAgICAgICAgICAgICBoaWRkZW46ICEhc3ViZmllbGQucmVhZE9ubHksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkoc3ViZmllbGQubGFiZWwpKSB7XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnW3N1YmZpZWxkLm5hbWVdLmxhYmVsID0gc3ViZmllbGQubGFiZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eShzdWJmaWVsZC5tYXhMZW5ndGgpKSB7XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnW3N1YmZpZWxkLm5hbWVdLm1heGxlbmd0aCA9IHN1YmZpZWxkLm1heExlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRyb2xDb25maWcucmVxdWlyZWQgPSBjb250cm9sQ29uZmlnLnJlcXVpcmVkIHx8IHN1YmZpZWxkLnJlcXVpcmVkO1xuICAgICAgICAgICAgaWYgKHN1YmZpZWxkLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICBpZiAoSGVscGVycy5pc0JsYW5rKGNvbnRyb2xDb25maWcudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbENvbmZpZy52YWx1ZSA9IHt9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcudmFsdWVbc3ViZmllbGQubmFtZV0gPSBzdWJmaWVsZC5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN1YmZpZWxkLm5hbWUgPT09ICdjb3VudHJ5SUQnKSB7XG4gICAgICAgICAgICAgIGlmIChIZWxwZXJzLmlzQmxhbmsoY29udHJvbENvbmZpZy52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLnZhbHVlID0ge307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udHJvbENvbmZpZy52YWx1ZVtzdWJmaWVsZC5uYW1lXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3ViZmllbGQubmFtZSA9PT0gJ3N0YXRlJyB8fCBzdWJmaWVsZC5uYW1lID09PSAnY291bnRyeUlEJykge1xuICAgICAgICAgICAgICBpZiAoc3ViZmllbGQubmFtZSA9PT0gJ2NvdW50cnlJRCcpIHtcbiAgICAgICAgICAgICAgICBzdWJmaWVsZC5vcHRpb25zVHlwZSA9ICdDb3VudHJ5JztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIXN1YmZpZWxkLm9wdGlvbnNVcmwpIHtcbiAgICAgICAgICAgICAgICBzdWJmaWVsZC5vcHRpb25zVXJsID0gYG9wdGlvbnMvJHtzdWJmaWVsZC5vcHRpb25zVHlwZX1gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnW3N1YmZpZWxkLm5hbWVdLnBpY2tlckNvbmZpZyA9IHRoaXMuZ2V0Q29udHJvbE9wdGlvbnMoc3ViZmllbGQsIGh0dHAsIGNvbmZpZywgZmllbGREYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbENvbmZpZy5pc0VtcHR5ID0gdGhpcy5pc0FkZHJlc3NFbXB0eTtcbiAgICAgICAgY29udHJvbCA9IG5ldyBBZGRyZXNzQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBGaWxlQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXN0b20nOlxuICAgICAgICBjb250cm9sID0gbmV3IEN1c3RvbUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29udHJvbCA9IG5ldyBUZXh0Qm94Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9sO1xuICB9XG5cbiAgdG9Db250cm9scyhcbiAgICBtZXRhLFxuICAgIGN1cnJlbmN5Rm9ybWF0LFxuICAgIGh0dHAsXG4gICAgY29uZmlnOiB7IHRva2VuPzogc3RyaW5nOyByZXN0VXJsPzogc3RyaW5nOyBtaWxpdGFyeT86IGJvb2xlYW4gfSxcbiAgICBvdmVycmlkZXM/OiBhbnksXG4gICAgZm9yVGFibGU6IGJvb2xlYW4gPSBmYWxzZSxcbiAgKSB7XG4gICAgbGV0IGNvbnRyb2xzID0gW107XG4gICAgaWYgKG1ldGEgJiYgbWV0YS5maWVsZHMpIHtcbiAgICAgIGxldCBmaWVsZHMgPSBtZXRhLmZpZWxkcztcbiAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZmllbGQubmFtZSAhPT0gJ2lkJyAmJlxuICAgICAgICAgIChmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24gIT09ICdTWVNURU0nIHx8IFsnYWRkcmVzcycsICdiaWxsaW5nQWRkcmVzcycsICdzZWNvbmRhcnlBZGRyZXNzJ10uaW5kZXhPZihmaWVsZC5uYW1lKSAhPT0gLTEpICYmXG4gICAgICAgICAgIWZpZWxkLnJlYWRPbmx5XG4gICAgICAgICkge1xuICAgICAgICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sRm9yRmllbGQoZmllbGQsIGh0dHAsIGNvbmZpZywgb3ZlcnJpZGVzLCBmb3JUYWJsZSk7XG4gICAgICAgICAgLy8gU2V0IGN1cnJlbmN5IGZvcm1hdFxuICAgICAgICAgIGlmIChjb250cm9sLnN1YlR5cGUgPT09ICdjdXJyZW5jeScpIHtcbiAgICAgICAgICAgIGNvbnRyb2wuY3VycmVuY3lGb3JtYXQgPSBjdXJyZW5jeUZvcm1hdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQWRkIHRvIGNvbnRyb2xzXG4gICAgICAgICAgY29udHJvbHMucHVzaChjb250cm9sKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9scztcbiAgfVxuXG4gIHRvVGFibGVDb250cm9scyhtZXRhLCBjdXJyZW5jeUZvcm1hdCwgaHR0cCwgY29uZmlnOiB7IHRva2VuPzogc3RyaW5nOyByZXN0VXJsPzogc3RyaW5nOyBtaWxpdGFyeT86IGJvb2xlYW4gfSwgb3ZlcnJpZGVzPzogYW55KSB7XG4gICAgbGV0IGNvbnRyb2xzID0gdGhpcy50b0NvbnRyb2xzKG1ldGEsIGN1cnJlbmN5Rm9ybWF0LCBodHRwLCBjb25maWcsIG92ZXJyaWRlcywgdHJ1ZSk7XG4gICAgbGV0IHJldCA9IHt9O1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2w6IEJhc2VDb250cm9sKSA9PiB7XG4gICAgICByZXRbY29udHJvbC5rZXldID0ge1xuICAgICAgICBlZGl0b3JUeXBlOiBjb250cm9sLl9fdHlwZSxcbiAgICAgICAgZWRpdG9yQ29uZmlnOiBjb250cm9sLl9fY29uZmlnLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgdG9GaWVsZFNldHMoXG4gICAgbWV0YSxcbiAgICBjdXJyZW5jeUZvcm1hdCxcbiAgICBodHRwLFxuICAgIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuIH0sXG4gICAgb3ZlcnJpZGVzPyxcbiAgICBkYXRhPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgKSB7XG4gICAgbGV0IGZpZWxkc2V0czogQXJyYXk8Tm92b0ZpZWxkc2V0PiA9IFtdO1xuICAgIGxldCByYW5nZXMgPSBbXTtcbiAgICBpZiAobWV0YSAmJiBtZXRhLmZpZWxkcykge1xuICAgICAgbGV0IGZpZWxkcyA9IG1ldGEuZmllbGRzXG4gICAgICAgIC5tYXAoKGZpZWxkKSA9PiB7XG4gICAgICAgICAgaWYgKCFmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnc29ydE9yZGVyJykpIHtcbiAgICAgICAgICAgIGZpZWxkLnNvcnRPcmRlciA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIC0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgICAgICB9KVxuICAgICAgICAuc29ydChIZWxwZXJzLnNvcnRCeUZpZWxkKFsnc29ydE9yZGVyJywgJ25hbWUnXSkpO1xuICAgICAgaWYgKG1ldGEuc2VjdGlvbkhlYWRlcnMgJiYgbWV0YS5zZWN0aW9uSGVhZGVycy5sZW5ndGgpIHtcbiAgICAgICAgbWV0YS5zZWN0aW9uSGVhZGVycy5zb3J0KEhlbHBlcnMuc29ydEJ5RmllbGQoWydzb3J0T3JkZXInLCAnbmFtZSddKSk7XG4gICAgICAgIG1ldGEuc2VjdGlvbkhlYWRlcnMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnNvcnRPcmRlciA+IDAgJiYgZmllbGRzZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICBmaWVsZHNldHMucHVzaCh7XG4gICAgICAgICAgICAgICAgY29udHJvbHM6IFtdLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICBtYXg6IGl0ZW0uc29ydE9yZGVyIC0gMSxcbiAgICAgICAgICAgICAgICBmaWVsZHNldElkeDogMCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWVsZHNldHMucHVzaCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLmxhYmVsLFxuICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24gfHwgJ2JoaS1zZWN0aW9uJyxcbiAgICAgICAgICAgICAgY29udHJvbHM6IFtdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgIG1pbjogaXRlbS5zb3J0T3JkZXIsXG4gICAgICAgICAgICAgIG1heDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgICAgICAgIGZpZWxkc2V0SWR4OiBmaWVsZHNldHMubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGkgPiAwICYmIGZpZWxkc2V0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIHJhbmdlc1tmaWVsZHNldHMubGVuZ3RoIC0gMl0ubWF4ID0gaXRlbS5zb3J0T3JkZXIgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghcmFuZ2VzLmxlbmd0aCkge1xuICAgICAgICAgIGZpZWxkc2V0cy5wdXNoKHtcbiAgICAgICAgICAgIGNvbnRyb2xzOiBbXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICAgICAgZmllbGRzZXRJZHg6IDAsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkc2V0cy5wdXNoKHtcbiAgICAgICAgICBjb250cm9sczogW10sXG4gICAgICAgIH0pO1xuICAgICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgICAgZmllbGRzZXRJZHg6IDAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBmaWVsZC5uYW1lICE9PSAnaWQnICYmXG4gICAgICAgICAgKGZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbiAhPT0gJ1NZU1RFTScgfHwgWydhZGRyZXNzJywgJ2JpbGxpbmdBZGRyZXNzJywgJ3NlY29uZGFyeUFkZHJlc3MnXS5pbmRleE9mKGZpZWxkLm5hbWUpICE9PSAtMSkgJiZcbiAgICAgICAgICAhZmllbGQucmVhZE9ubHlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgZmllbGREYXRhOiBhbnkgPSBkYXRhICYmIGRhdGFbZmllbGQubmFtZV0gPyBkYXRhW2ZpZWxkLm5hbWVdIDogbnVsbDtcbiAgICAgICAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbEZvckZpZWxkKGZpZWxkLCBodHRwLCBjb25maWcsIG92ZXJyaWRlcywgdW5kZWZpbmVkLCBmaWVsZERhdGEpO1xuICAgICAgICAgIC8vIFNldCBjdXJyZW5jeSBmb3JtYXRcbiAgICAgICAgICBpZiAoY29udHJvbC5zdWJUeXBlID09PSAnY3VycmVuY3knKSB7XG4gICAgICAgICAgICBjb250cm9sLmN1cnJlbmN5Rm9ybWF0ID0gY3VycmVuY3lGb3JtYXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBsb2NhdGlvbiA9IHJhbmdlcy5maW5kKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGl0ZW0ubWluIDw9IGZpZWxkLnNvcnRPcmRlciAmJiBmaWVsZC5zb3J0T3JkZXIgPD0gaXRlbS5tYXgpIHx8IChpdGVtLm1pbiA8PSBmaWVsZC5zb3J0T3JkZXIgJiYgaXRlbS5taW4gPT09IGl0ZW0ubWF4KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgICAgICAgIC8vIEFkZCB0byBjb250cm9sc1xuICAgICAgICAgICAgZmllbGRzZXRzW2xvY2F0aW9uLmZpZWxkc2V0SWR4XS5jb250cm9scy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChmaWVsZHNldHMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGZpZWxkc2V0cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRyb2xzOiB0aGlzLnRvQ29udHJvbHMobWV0YSwgY3VycmVuY3lGb3JtYXQsIGh0dHAsIGNvbmZpZyksXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIGdldENvbnRyb2xPcHRpb25zKGZpZWxkOiBhbnksIGh0dHA6IGFueSwgY29uZmlnOiB7IHRva2VuPzogc3RyaW5nOyByZXN0VXJsPzogc3RyaW5nOyBtaWxpdGFyeT86IGJvb2xlYW4gfSwgZmllbGREYXRhPzogYW55KTogYW55IHtcbiAgICAvLyBUT0RPOiBUaGUgdG9rZW4gcHJvcGVydHkgb2YgY29uZmlnIGlzIHRoZSBvbmx5IHByb3BlcnR5IHVzZWQ7IGp1c3QgcGFzcyBpbiBgdG9rZW46IHN0cmluZ2BcbiAgICBpZiAoZmllbGQuZGF0YVR5cGUgPT09ICdCb29sZWFuJyAmJiAhZmllbGQub3B0aW9ucykge1xuICAgICAgLy8gVE9ETzogZGF0YVR5cGUgc2hvdWxkIG9ubHkgYmUgZGV0ZXJtaW5lZCBieSBgZGV0ZXJtaW5lSW5wdXRUeXBlYCB3aGljaCBkb2Vzbid0IGV2ZXIgcmV0dXJuICdCb29sZWFuJyBpdFxuICAgICAgLy8gVE9ETzogKGNvbnQuKSByZXR1cm5zIGB0aWxlc2BcbiAgICAgIHJldHVybiBbeyB2YWx1ZTogZmFsc2UsIGxhYmVsOiB0aGlzLmxhYmVscy5ubyB9LCB7IHZhbHVlOiB0cnVlLCBsYWJlbDogdGhpcy5sYWJlbHMueWVzIH1dO1xuICAgIH0gZWxzZSBpZiAoZmllbGQud29ya2Zsb3dPcHRpb25zICYmIGZpZWxkRGF0YSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0V29ya2Zsb3dPcHRpb25zKGZpZWxkLndvcmtmbG93T3B0aW9ucywgZmllbGREYXRhKTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbiA9PT0gJ1NQRUNJQUxJWkVEX09QVElPTlMnKSB7XG4gICAgICByZXR1cm4gZmllbGQub3B0aW9ucy5maWx0ZXIoKG8pID0+ICFvLnJlYWRPbmx5KTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLm9wdGlvbnNVcmwpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNTZXJ2aWNlLmdldE9wdGlvbnNDb25maWcoaHR0cCwgZmllbGQsIGNvbmZpZyk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGZpZWxkLm9wdGlvbnMpICYmIGZpZWxkLnR5cGUgPT09ICdjaGlwcycpIHtcbiAgICAgIGxldCBvcHRpb25zID0gZmllbGQub3B0aW9ucztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpZWxkOiAndmFsdWUnLFxuICAgICAgICBmb3JtYXQ6ICckbGFiZWwnLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLm9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBmaWVsZC5vcHRpb25zO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0V29ya2Zsb3dPcHRpb25zKFxuICAgIHdvcmtmbG93T3B0aW9uczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgICBmaWVsZERhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4gICk6IEFycmF5PHsgdmFsdWU6IHN0cmluZyB8IG51bWJlcjsgbGFiZWw6IHN0cmluZyB8IG51bWJlciB9PiB7XG4gICAgbGV0IGN1cnJlbnRWYWx1ZTogeyB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyOyBsYWJlbDogc3RyaW5nIHwgbnVtYmVyIH07XG4gICAgaWYgKGZpZWxkRGF0YS5pZCkge1xuICAgICAgY3VycmVudFZhbHVlID0geyB2YWx1ZTogZmllbGREYXRhLmlkLCBsYWJlbDogZmllbGREYXRhLmxhYmVsID8gZmllbGREYXRhLmxhYmVsIDogZmllbGREYXRhLmlkIH07XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFdvcmtmbG93T3B0aW9uOiBudW1iZXIgfCBzdHJpbmcgPSBmaWVsZERhdGEuaWQgPyBmaWVsZERhdGEuaWQgOiAnaW5pdGlhbCc7XG4gICAgbGV0IHVwZGF0ZVdvcmtmbG93T3B0aW9uczogQXJyYXk8eyB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyOyBsYWJlbDogc3RyaW5nIHwgbnVtYmVyIH0+ID0gd29ya2Zsb3dPcHRpb25zW2N1cnJlbnRXb3JrZmxvd09wdGlvbl0gfHwgW107XG5cbiAgICBpZiAoY3VycmVudFZhbHVlICYmICF1cGRhdGVXb3JrZmxvd09wdGlvbnMuZmluZCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09IGN1cnJlbnRWYWx1ZS52YWx1ZSkpIHtcbiAgICAgIHVwZGF0ZVdvcmtmbG93T3B0aW9ucy51bnNoaWZ0KGN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVwZGF0ZVdvcmtmbG93T3B0aW9ucztcbiAgfVxuXG4gIHNldEluaXRpYWxWYWx1ZXMoY29udHJvbHM6IEFycmF5PE5vdm9Db250cm9sQ29uZmlnPiwgdmFsdWVzOiBhbnksIGtlZXBDbGVhbj86IGJvb2xlYW4sIGtleU92ZXJyaWRlPzogc3RyaW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNvbnRyb2wgPSBjb250cm9sc1tpXTtcbiAgICAgIGxldCBrZXkgPSBrZXlPdmVycmlkZSA/IGNvbnRyb2wua2V5LnJlcGxhY2Uoa2V5T3ZlcnJpZGUsICcnKSA6IGNvbnRyb2wua2V5O1xuICAgICAgbGV0IHZhbHVlID0gdmFsdWVzW2tleV07XG5cbiAgICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodmFsdWUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmZpbHRlcigodmFsKSA9PiAhKE9iamVjdC5rZXlzKHZhbCkubGVuZ3RoID09PSAwICYmIHZhbC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSk7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUuZGF0YSAmJiB2YWx1ZS5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDAgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29udHJvbC52YWx1ZSA9IHZhbHVlO1xuICAgICAgLy8gVE9ETzoga2VlcENsZWFuIGlzIG5vdCByZXF1aXJlZCwgYnV0IGlzIGFsd2F5cyB1c2VkLiBJdCBzaG91bGQgZGVmYXVsdCAodG8gdHJ1ZT8pXG4gICAgICBjb250cm9sLmRpcnR5ID0gIWtlZXBDbGVhbjtcbiAgICB9XG4gIH1cblxuICBzZXRJbml0aWFsVmFsdWVzRmllbGRzZXRzKGZpZWxkc2V0czogQXJyYXk8Tm92b0ZpZWxkc2V0PiwgdmFsdWVzLCBrZWVwQ2xlYW4/OiBib29sZWFuKSB7XG4gICAgZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICB0aGlzLnNldEluaXRpYWxWYWx1ZXMoZmllbGRzZXQuY29udHJvbHMsIHZhbHVlcywga2VlcENsZWFuKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlU2hvd0FsbENvbnRyb2xzKGNvbnRyb2xzOiBBcnJheTxOb3ZvQ29udHJvbENvbmZpZz4pIHtcbiAgICBjb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICBjb250cm9sLmhpZGRlbiA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yY2VTaG93QWxsQ29udHJvbHNJbkZpZWxkc2V0cyhmaWVsZHNldHM6IEFycmF5PE5vdm9GaWVsZHNldD4pIHtcbiAgICBmaWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgY29udHJvbC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yY2VWYWxpZGF0aW9uKGZvcm06IE5vdm9Gb3JtR3JvdXApOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyhmb3JtLmNvbnRyb2xzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgbGV0IGNvbnRyb2w6IGFueSA9IGZvcm0uY29udHJvbHNba2V5XTtcbiAgICAgIGlmIChjb250cm9sLnJlcXVpcmVkICYmIEhlbHBlcnMuaXNCbGFuayhmb3JtLnZhbHVlW2NvbnRyb2wua2V5XSkpIHtcbiAgICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzQWRkcmVzc0VtcHR5KGNvbnRyb2w6IGFueSk6IGJvb2xlYW4ge1xuICAgIGxldCBmaWVsZExpc3Q6IHN0cmluZ1tdID0gWydhZGRyZXNzMScsICdhZGRyZXNzMicsICdjaXR5JywgJ3N0YXRlJywgJ3ppcCcsICdjb3VudHJ5SUQnXTtcbiAgICBsZXQgdmFsaWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGlmIChjb250cm9sLnZhbHVlICYmIGNvbnRyb2wuY29uZmlnKSB7XG4gICAgICBmaWVsZExpc3QuZm9yRWFjaCgoc3ViZmllbGQ6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKChzdWJmaWVsZCAhPT0gJ2NvdW50cnlJRCcgJiZcbiAgICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29udHJvbC5jb25maWdbc3ViZmllbGRdKSAmJlxuICAgICAgICAgICAgY29udHJvbC5jb25maWdbc3ViZmllbGRdLnJlcXVpcmVkICYmXG4gICAgICAgICAgICAoSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWVbc3ViZmllbGRdKSB8fCBIZWxwZXJzLmlzRW1wdHkoY29udHJvbC52YWx1ZVtzdWJmaWVsZF0pKSkgfHxcbiAgICAgICAgICAgIChzdWJmaWVsZCA9PT0gJ2NvdW50cnlJRCcgJiZcbiAgICAgICAgICAgICAgIUhlbHBlcnMuaXNFbXB0eShjb250cm9sLmNvbmZpZy5jb3VudHJ5SUQpICYmXG4gICAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLmNvdW50cnlJRC5yZXF1aXJlZCAmJlxuICAgICAgICAgICAgICBIZWxwZXJzLmlzRW1wdHkoY29udHJvbC52YWx1ZS5jb3VudHJ5TmFtZSkpKSAmJlxuICAgICAgICAgICEoXG4gICAgICAgICAgICBzdWJmaWVsZCA9PT0gJ3N0YXRlJyAmJlxuICAgICAgICAgICAgIUhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlLmNvdW50cnlOYW1lKSAmJlxuICAgICAgICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnICYmXG4gICAgICAgICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgJiZcbiAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucy5sZW5ndGggPT09IDBcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cblxuICBwcml2YXRlIGdldFN0YXJ0RGF0ZUZyb21SYW5nZShkYXRlUmFuZ2U6IHsgbWluRGF0ZTogc3RyaW5nOyBtaW5PZmZzZXQ6IG51bWJlciB9KTogRGF0ZSB7XG4gICAgaWYgKGRhdGVSYW5nZS5taW5EYXRlKSB7XG4gICAgICByZXR1cm4gZGF0ZUZucy5wYXJzZShkYXRlUmFuZ2UubWluRGF0ZSk7XG4gICAgfSBlbHNlIGlmIChkYXRlUmFuZ2UubWluT2Zmc2V0KSB7XG4gICAgICByZXR1cm4gZGF0ZUZucy5hZGREYXlzKGRhdGVGbnMuc3RhcnRPZlRvZGF5KCksIGRhdGVSYW5nZS5taW5PZmZzZXQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1pbiBzdGFydCBkYXRlIG9mIGEgRGF0ZSBiYXNlIG9uIGZpZWxkIGRhdGEuXG4gICAqL1xuICBwcml2YXRlIGdldFN0YXJ0RGF0ZShmaWVsZDogYW55KTogRGF0ZSB8IG51bGwge1xuICAgIGlmIChmaWVsZC5hbGxvd2VkRGF0ZVJhbmdlKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGFydERhdGVGcm9tUmFuZ2UoZmllbGQuYWxsb3dlZERhdGVSYW5nZSk7XG4gICAgfVxuICAgIC8vIHRoZXJlIGlzIG5vIHJlc3RyaWN0aW9uIG9uIHRoZSBzdGFydCBkYXRlXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGluZmVyU3RhcnREYXRlKGNvbnRyb2xDb25maWcsIGZpZWxkKSB7XG4gICAgaWYgKGZpZWxkLmRhdGFUeXBlID09PSAnRGF0ZScpIHtcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHRoaXMuZ2V0U3RhcnREYXRlKGZpZWxkKTtcbiAgICAgIGlmIChzdGFydERhdGUpIHtcbiAgICAgICAgY29udHJvbENvbmZpZy5zdGFydERhdGUgPSBzdGFydERhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhcnREYXRlO1xuICAgIH1cbiAgfVxufVxuIl19