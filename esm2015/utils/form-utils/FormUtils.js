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
            controlConfig.config = Object.assign({}, optionsConfig, controlConfig && controlConfig.config);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybVV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL2Zvcm0tdXRpbHMvRm9ybVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQzs7QUFFcEMsT0FBTyxFQUNMLGNBQWMsRUFFZCxlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixXQUFXLEVBQ1gsZUFBZSxFQUNmLGFBQWEsRUFDYixXQUFXLEVBRVgsYUFBYSxFQUNiLFlBQVksRUFDWixhQUFhLEVBQ2IsZUFBZSxFQUNmLGNBQWMsRUFDZCxZQUFZLEVBQ1osV0FBVyxHQUNaLE1BQU0sa0NBQWtDLENBQUM7QUFDMUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDakksT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVyQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUd6RSxNQUFNLE9BQU8sU0FBUzs7Ozs7SUFrQ3BCLFlBQW1CLE1BQXdCLEVBQVMsY0FBOEI7UUFBL0QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFqQ2xGLDJCQUFzQixHQUFhO1lBQ2pDLFdBQVc7WUFDWCxlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLE1BQU07WUFDTixhQUFhO1lBQ2IsVUFBVTtZQUNWLGVBQWU7WUFDZixRQUFRO1lBQ1IsV0FBVztT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QUFLLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBRTs7a0JBQ3ZCLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUMxQyxJQUFJLFNBQVMsRUFBRTtnQkFDYixhQUFhLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzthQUNyQztZQUNELE9BQU8sU0FBUyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7O1lBcnRCRixVQUFVOzs7O1lBSEYsZ0JBQWdCO1lBQ2hCLGNBQWM7Ozs7SUFJckIsMkNBVUU7O0lBQ0YsdUNBb0JFOztJQUVVLDJCQUErQjs7SUFBRSxtQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOR1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG4vLyBBcHBcbmltcG9ydCB7XG4gIEFkZHJlc3NDb250cm9sLFxuICBCYXNlQ29udHJvbCxcbiAgQ2hlY2tib3hDb250cm9sLFxuICBDaGVja0xpc3RDb250cm9sLFxuICBDdXN0b21Db250cm9sLFxuICBEYXRlQ29udHJvbCxcbiAgRGF0ZVRpbWVDb250cm9sLFxuICBFZGl0b3JDb250cm9sLFxuICBGaWxlQ29udHJvbCxcbiAgTm92b0NvbnRyb2xDb25maWcsXG4gIFBpY2tlckNvbnRyb2wsXG4gIFJhZGlvQ29udHJvbCxcbiAgU2VsZWN0Q29udHJvbCxcbiAgVGV4dEFyZWFDb250cm9sLFxuICBUZXh0Qm94Q29udHJvbCxcbiAgVGlsZXNDb250cm9sLFxuICBUaW1lQ29udHJvbCxcbn0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybS9Gb3JtQ29udHJvbHMnO1xuaW1wb3J0IHsgRW50aXR5UGlja2VyUmVzdWx0LCBFbnRpdHlQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvcGlja2VyL2V4dHJhcy9lbnRpdHktcGlja2VyLXJlc3VsdHMvRW50aXR5UGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvRmllbGRzZXQsIEZvcm1GaWVsZCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0vRm9ybUludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm92b0Zvcm1Db250cm9sIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybS9Ob3ZvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IHsgTm92b0Zvcm1Hcm91cCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0vTm92b0Zvcm1Hcm91cCc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9vcHRpb25zL09wdGlvbnNTZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1VdGlscyB7XG4gIEFTU09DSUFURURfRU5USVRZX0xJU1Q6IHN0cmluZ1tdID0gW1xuICAgICdDYW5kaWRhdGUnLFxuICAgICdDbGllbnRDb250YWN0JyxcbiAgICAnQ2xpZW50Q29ycG9yYXRpb24nLFxuICAgICdMZWFkJyxcbiAgICAnT3Bwb3J0dW5pdHknLFxuICAgICdKb2JPcmRlcicsXG4gICAgJ0NvcnBvcmF0ZVVzZXInLFxuICAgICdQZXJzb24nLFxuICAgICdQbGFjZW1lbnQnLFxuICBdO1xuICBFTlRJVFlfUElDS0VSX0xJU1Q6IHN0cmluZ1tdID0gW1xuICAgICdDYW5kaWRhdGUnLFxuICAgICdDYW5kaWRhdGVUZXh0JyxcbiAgICAnQ2xpZW50JyxcbiAgICAnQ2xpZW50VGV4dCcsXG4gICAgJ0NsaWVudENvbnRhY3QnLFxuICAgICdDbGllbnRDb250YWN0VGV4dCcsXG4gICAgJ0NsaWVudENvcnBvcmF0aW9uJyxcbiAgICAnQ2xpZW50Q29ycG9yYXRpb25UZXh0JyxcbiAgICAnTGVhZCcsXG4gICAgJ0xlYWRUZXh0JyxcbiAgICAnT3Bwb3J0dW5pdHknLFxuICAgICdPcHBvcnR1bml0eVRleHQnLFxuICAgICdKb2JPcmRlcicsXG4gICAgJ0pvYk9yZGVyVGV4dCcsXG4gICAgJ0NvcnBvcmF0ZVVzZXInLFxuICAgICdDb3Jwb3JhdGVVc2VyVGV4dCcsXG4gICAgJ1BlcnNvbicsXG4gICAgJ1BlcnNvblRleHQnLFxuICAgICdQbGFjZW1lbnQnLFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHB1YmxpYyBvcHRpb25zU2VydmljZTogT3B0aW9uc1NlcnZpY2UpIHsgfVxuXG4gIHRvRm9ybUdyb3VwKGNvbnRyb2xzOiBBcnJheTxhbnk+KTogTm92b0Zvcm1Hcm91cCB7XG4gICAgbGV0IGdyb3VwOiBhbnkgPSB7fTtcbiAgICBjb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZSkgPyAnJyA6IGNvbnRyb2wudmFsdWU7XG4gICAgICBncm91cFtjb250cm9sLmtleV0gPSBuZXcgTm92b0Zvcm1Db250cm9sKHZhbHVlLCBjb250cm9sKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IE5vdm9Gb3JtR3JvdXAoZ3JvdXApO1xuICB9XG5cbiAgZW1wdHlGb3JtR3JvdXAoKTogTm92b0Zvcm1Hcm91cCB7XG4gICAgcmV0dXJuIG5ldyBOb3ZvRm9ybUdyb3VwKHt9KTtcbiAgfVxuXG4gIGFkZENvbnRyb2xzKGZvcm1Hcm91cDogTm92b0Zvcm1Hcm91cCwgY29udHJvbHM6IEFycmF5PE5vdm9Db250cm9sQ29uZmlnPik6IHZvaWQge1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IEhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlKSA/ICcnIDogY29udHJvbC52YWx1ZTtcbiAgICAgIGxldCBmb3JtQ29udHJvbCA9IG5ldyBOb3ZvRm9ybUNvbnRyb2wodmFsdWUsIGNvbnRyb2wpO1xuICAgICAgZm9ybUdyb3VwLmFkZENvbnRyb2woY29udHJvbC5rZXksIGZvcm1Db250cm9sKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUNvbnRyb2xzKGZvcm1Hcm91cDogTm92b0Zvcm1Hcm91cCwgY29udHJvbHM6IEFycmF5PE5vdm9Db250cm9sQ29uZmlnPik6IHZvaWQge1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgIGZvcm1Hcm91cC5yZW1vdmVDb250cm9sKGNvbnRyb2wua2V5KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSB0b0Zvcm1Hcm91cEZyb21GaWVsZHNldFxuICAgKiBAcGFyYW0gZmllbGRzZXRzXG4gICAqL1xuICB0b0Zvcm1Hcm91cEZyb21GaWVsZHNldChmaWVsZHNldHM6IEFycmF5PE5vdm9GaWVsZHNldD4pOiBOb3ZvRm9ybUdyb3VwIHtcbiAgICBsZXQgY29udHJvbHM6IEFycmF5PE5vdm9Gb3JtQ29udHJvbD4gPSBbXTtcbiAgICBmaWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIGNvbnRyb2xzLnB1c2goLi4uZmllbGRzZXQuY29udHJvbHMpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnRvRm9ybUdyb3VwKGNvbnRyb2xzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBoYXNBc3NvY2lhdGVkRW50aXR5XG4gICAqIEBwYXJhbSBmaWVsZFxuICAgKi9cbiAgaGFzQXNzb2NpYXRlZEVudGl0eShmaWVsZDogRm9ybUZpZWxkKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKGZpZWxkLmFzc29jaWF0ZWRFbnRpdHkgJiYgfnRoaXMuQVNTT0NJQVRFRF9FTlRJVFlfTElTVC5pbmRleE9mKGZpZWxkLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5KSk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZGV0ZXJtaW5lSW5wdXRUeXBlXG4gICAqIEBwYXJhbSBmaWVsZFxuICAgKi9cbiAgZGV0ZXJtaW5lSW5wdXRUeXBlKGZpZWxkOiBGb3JtRmllbGQpOiBzdHJpbmcge1xuICAgIGxldCB0eXBlOiBzdHJpbmc7XG4gICAgbGV0IGRhdGFTcGVjaWFsaXphdGlvblR5cGVNYXAgPSB7XG4gICAgICBEQVRFVElNRTogJ2RhdGV0aW1lJyxcbiAgICAgIFRJTUU6ICd0aW1lJyxcbiAgICAgIE1PTkVZOiAnY3VycmVuY3knLFxuICAgICAgUEVSQ0VOVEFHRTogJ3BlcmNlbnRhZ2UnLFxuICAgICAgSFRNTDogJ2VkaXRvcicsXG4gICAgICAnSFRNTC1NSU5JTUFMJzogJ2VkaXRvci1taW5pbWFsJyxcbiAgICAgIFlFQVI6ICd5ZWFyJyxcbiAgICAgIFdPUktGTE9XX09QVElPTlM6ICdzZWxlY3QnLFxuICAgICAgU1BFQ0lBTElaRURfT1BUSU9OUzogJ3NlbGVjdCcsXG4gICAgICBXb3JrZmxvd09wdGlvbnNMb29rdXA6ICdzZWxlY3QnLFxuICAgICAgU3BlY2lhbGl6ZWRPcHRpb25zTG9va3VwOiAnc2VsZWN0JyxcbiAgICB9O1xuICAgIGxldCBkYXRhVHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIFRpbWVzdGFtcDogJ2RhdGUnLFxuICAgICAgRGF0ZTogJ2RhdGUnLFxuICAgICAgQm9vbGVhbjogJ3RpbGVzJyxcbiAgICB9O1xuICAgIGxldCBpbnB1dFR5cGVUb1R5cGVNYXAgPSB7XG4gICAgICBDSEVDS0JPWDogJ3JhZGlvJyxcbiAgICAgIFJBRElPOiAncmFkaW8nLFxuICAgICAgU0VMRUNUOiAnc2VsZWN0JyxcbiAgICAgIFRJTEVTOiAndGlsZXMnLFxuICAgIH07XG4gICAgbGV0IGlucHV0VHlwZU11bHRpVG9UeXBlTWFwID0ge1xuICAgICAgQ0hFQ0tCT1g6ICdjaGVja2xpc3QnLFxuICAgICAgUkFESU86ICdjaGVja2xpc3QnLFxuICAgICAgU0VMRUNUOiAnY2hpcHMnLFxuICAgIH07XG4gICAgbGV0IHR5cGVUb1R5cGVNYXAgPSB7XG4gICAgICBmaWxlOiAnZmlsZScsXG4gICAgICBDT01QT1NJVEU6ICdhZGRyZXNzJyxcbiAgICB9O1xuICAgIGxldCBudW1iZXJEYXRhVHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIERvdWJsZTogJ2Zsb2F0JyxcbiAgICAgIEJpZ0RlY2ltYWw6ICdmbG9hdCcsXG4gICAgICBJbnRlZ2VyOiAnbnVtYmVyJyxcbiAgICB9O1xuICAgIGlmIChmaWVsZC50eXBlID09PSAnVE9fTUFOWScpIHtcbiAgICAgIGlmICh0aGlzLmhhc0Fzc29jaWF0ZWRFbnRpdHkoZmllbGQpKSB7XG4gICAgICAgIGlmIChmaWVsZC5tdWx0aVZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIHR5cGUgPSAnZW50aXR5cGlja2VyJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eXBlID0gJ2VudGl0eWNoaXBzJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZpZWxkLm11bHRpVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdHlwZSA9ICdwaWNrZXInO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR5cGUgPSAnY2hpcHMnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAnVE9fT05FJykge1xuICAgICAgaWYgKCdTWVNURU0nID09PSBmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24gJiYgWydXb3JrZmxvd09wdGlvbnNMb29rdXAnLCAnU3BlY2lhbGl6ZWRPcHRpb25zTG9va3VwJ10uaW5jbHVkZXMoZmllbGQuZGF0YVR5cGUpKSB7XG4gICAgICAgIHR5cGUgPSBkYXRhU3BlY2lhbGl6YXRpb25UeXBlTWFwW2ZpZWxkLmRhdGFUeXBlXTtcbiAgICAgIH0gZWxzZSBpZiAoWydXT1JLRkxPV19PUFRJT05TJywgJ1NQRUNJQUxJWkVEX09QVElPTlMnXS5pbmNsdWRlcyhmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24pKSB7XG4gICAgICAgIHR5cGUgPSBkYXRhU3BlY2lhbGl6YXRpb25UeXBlTWFwW2ZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbl07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaGFzQXNzb2NpYXRlZEVudGl0eShmaWVsZCkpIHtcbiAgICAgICAgdHlwZSA9ICdlbnRpdHlwaWNrZXInOyAvLyBUT0RPIVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9ICdwaWNrZXInO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZmllbGQub3B0aW9uc1VybCAmJiBmaWVsZC5pbnB1dFR5cGUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICBpZiAoZmllbGQub3B0aW9uc1R5cGUgJiYgfnRoaXMuRU5USVRZX1BJQ0tFUl9MSVNULmluZGV4T2YoZmllbGQub3B0aW9uc1R5cGUpKSB7XG4gICAgICAgIHR5cGUgPSAnZW50aXR5cGlja2VyJzsgLy8gVE9ETyFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGUgPSAncGlja2VyJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKGRhdGFTcGVjaWFsaXphdGlvblR5cGVNYXApLmluZGV4T2YoZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uKSA+IC0xKSB7XG4gICAgICB0eXBlID0gZGF0YVNwZWNpYWxpemF0aW9uVHlwZU1hcFtmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb25dO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXMoZGF0YVR5cGVUb1R5cGVNYXApLmluZGV4T2YoZmllbGQuZGF0YVR5cGUpID4gLTEpIHtcbiAgICAgIHR5cGUgPSBkYXRhVHlwZVRvVHlwZU1hcFtmaWVsZC5kYXRhVHlwZV07XG4gICAgfSBlbHNlIGlmIChmaWVsZC5pbnB1dFR5cGUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgIHR5cGUgPSAndGV4dGFyZWEnO1xuICAgIH0gZWxzZSBpZiAoZmllbGQub3B0aW9ucyAmJiBPYmplY3Qua2V5cyhpbnB1dFR5cGVUb1R5cGVNYXApLmluZGV4T2YoZmllbGQuaW5wdXRUeXBlKSA+IC0xICYmICFmaWVsZC5tdWx0aVZhbHVlKSB7XG4gICAgICB0eXBlID0gaW5wdXRUeXBlVG9UeXBlTWFwW2ZpZWxkLmlucHV0VHlwZV07XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zICYmIE9iamVjdC5rZXlzKGlucHV0VHlwZU11bHRpVG9UeXBlTWFwKS5pbmRleE9mKGZpZWxkLmlucHV0VHlwZSkgPiAtMSAmJiBmaWVsZC5tdWx0aVZhbHVlKSB7XG4gICAgICB0eXBlID0gaW5wdXRUeXBlTXVsdGlUb1R5cGVNYXBbZmllbGQuaW5wdXRUeXBlXTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKHR5cGVUb1R5cGVNYXApLmluZGV4T2YoZmllbGQudHlwZSkgPiAtMSkge1xuICAgICAgdHlwZSA9IHR5cGVUb1R5cGVNYXBbZmllbGQudHlwZV07XG4gICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhudW1iZXJEYXRhVHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5kYXRhVHlwZSkgPiAtMSkge1xuICAgICAgdHlwZSA9IG51bWJlckRhdGFUeXBlVG9UeXBlTWFwW2ZpZWxkLmRhdGFUeXBlXTtcbiAgICB9IC8qIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JtVXRpbHM6IFRoaXMgZmllbGQgdHlwZSBpcyB1bnN1cHBvcnRlZC4nKTtcbiAgICAgICAgfSovXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBpc0ZpZWxkRW5jcnlwdGVkKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGtleS5pbmRleE9mKCdjdXN0b21FbmNyeXB0ZWQnKSA+IC0xO1xuICB9XG5cbiAgZ2V0Q29udHJvbEZvckZpZWxkKFxuICAgIGZpZWxkOiBhbnksXG4gICAgaHR0cCxcbiAgICBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiB9LFxuICAgIG92ZXJyaWRlcz86IGFueSxcbiAgICBmb3JUYWJsZTogYm9vbGVhbiA9IGZhbHNlLFxuICAgIGZpZWxkRGF0YT86IGFueSxcbiAgKSB7XG4gICAgLy8gVE9ETzogaWYgZmllbGQudHlwZSBvdmVycmlkZXMgYGRldGVybWluZUlucHV0VHlwZWAgd2Ugc2hvdWxkIHVzZSBpdCBpbiB0aGF0IG1ldGhvZCBvciB1c2UgdGhpcyBtZXRob2RcbiAgICAvLyBUT0RPOiAoY29udC4pIGFzIHRoZSBzZXR0ZXIgb2YgdGhlIGZpZWxkIGFyZ3VtZW50XG4gICAgbGV0IHR5cGU6IHN0cmluZyA9IHRoaXMuZGV0ZXJtaW5lSW5wdXRUeXBlKGZpZWxkKSB8fCBmaWVsZC50eXBlO1xuICAgIGxldCBjb250cm9sOiBhbnk7XG4gICAgbGV0IGNvbnRyb2xDb25maWc6IE5vdm9Db250cm9sQ29uZmlnID0ge1xuICAgICAgbWV0YVR5cGU6IGZpZWxkLnR5cGUsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAga2V5OiBmaWVsZC5uYW1lLFxuICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLmhpbnQgfHwgJycsXG4gICAgICByZXF1aXJlZDogZmllbGQucmVxdWlyZWQgfHwgZmllbGQuc3lzdGVtUmVxdWlyZWQsXG4gICAgICBoaWRkZW46ICFmaWVsZC5yZXF1aXJlZCxcbiAgICAgIGVuY3J5cHRlZDogdGhpcy5pc0ZpZWxkRW5jcnlwdGVkKGZpZWxkLm5hbWUgPyBmaWVsZC5uYW1lLnRvU3RyaW5nKCkgOiAnJyksXG4gICAgICB2YWx1ZTogZmllbGQudmFsdWUgfHwgZmllbGQuZGVmYXVsdFZhbHVlLFxuICAgICAgc29ydE9yZGVyOiBmaWVsZC5zb3J0T3JkZXIsXG4gICAgICBhc3NvY2lhdGVkRW50aXR5OiBmaWVsZC5hc3NvY2lhdGVkRW50aXR5LFxuICAgICAgb3B0aW9uc1R5cGU6IGZpZWxkLm9wdGlvbnNUeXBlLFxuICAgICAgbXVsdGlwbGU6IGZpZWxkLm11bHRpVmFsdWUsXG4gICAgICByZWFkT25seTogISFmaWVsZC5kaXNhYmxlZCB8fCAhIWZpZWxkLnJlYWRPbmx5LFxuICAgICAgZGlzYWJsZWQ6IGZpZWxkLmRpc2FibGVkLFxuICAgICAgbWF4bGVuZ3RoOiBmaWVsZC5tYXhMZW5ndGgsXG4gICAgICBpbnRlcmFjdGlvbnM6IGZpZWxkLmludGVyYWN0aW9ucyxcbiAgICAgIGRhdGFTcGVjaWFsaXphdGlvbjogZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uLFxuICAgICAgZGF0YVR5cGU6IGZpZWxkLmRhdGFUeXBlLFxuICAgICAgZGVzY3JpcHRpb246IGZpZWxkLmRlc2NyaXB0aW9uIHx8ICcnLFxuICAgICAgdG9vbHRpcDogZmllbGQudG9vbHRpcCxcbiAgICAgIHRvb2x0aXBQb3NpdGlvbjogZmllbGQudG9vbHRpcFBvc2l0aW9uLFxuICAgICAgY3VzdG9tQ29udHJvbDogZmllbGQuY3VzdG9tQ29udHJvbCxcbiAgICAgIHRlbXBsYXRlOiBmaWVsZC50ZW1wbGF0ZSxcbiAgICAgIGN1c3RvbUNvbnRyb2xDb25maWc6IGZpZWxkLmN1c3RvbUNvbnRyb2xDb25maWcsXG4gICAgICByZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zOiBmaWVsZC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zLFxuICAgICAgdmFsaWRhdG9yczogZmllbGQudmFsaWRhdG9ycyxcbiAgICAgIHdhcm5pbmc6IGZpZWxkLndhcm5pbmcsXG4gICAgICBjb25maWc6IGZpZWxkLmNvbmZpZyB8fCB7fSxcbiAgICAgIGNsb3NlT25TZWxlY3Q6IGZpZWxkLmNsb3NlT25TZWxlY3QsXG4gICAgICBsYXlvdXRPcHRpb25zOiBmaWVsZC5sYXlvdXRPcHRpb25zLFxuICAgIH07XG4gICAgdGhpcy5pbmZlclN0YXJ0RGF0ZShjb250cm9sQ29uZmlnLCBmaWVsZCk7XG4gICAgLy8gVE9ETzogZ2V0Q29udHJvbE9wdGlvbnMgc2hvdWxkIGFsd2F5cyByZXR1cm4gdGhlIGNvcnJlY3QgZm9ybWF0XG4gICAgY29uc3Qgb3B0aW9uc0NvbmZpZyA9IHRoaXMuZ2V0Q29udHJvbE9wdGlvbnMoZmllbGQsIGh0dHAsIGNvbmZpZywgZmllbGREYXRhKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zQ29uZmlnKSAmJiAhKHR5cGUgPT09ICdjaGlwcycgfHwgdHlwZSA9PT0gJ3BpY2tlcicpKSB7XG4gICAgICBjb250cm9sQ29uZmlnLm9wdGlvbnMgPSBvcHRpb25zQ29uZmlnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zQ29uZmlnKSAmJiAodHlwZSA9PT0gJ2NoaXBzJyB8fCB0eXBlID09PSAncGlja2VyJykpIHtcbiAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnID0ge1xuICAgICAgICBvcHRpb25zOiBvcHRpb25zQ29uZmlnLFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnNDb25maWcpIHtcbiAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnID0ge1xuICAgICAgICAuLi5vcHRpb25zQ29uZmlnLFxuICAgICAgICAuLi5jb250cm9sQ29uZmlnICYmIGNvbnRyb2xDb25maWcuY29uZmlnLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ3llYXInKSB7XG4gICAgICBjb250cm9sQ29uZmlnLm1heGxlbmd0aCA9IDQ7XG4gICAgfVxuICAgIC8vIFRPRE86IE92ZXJyaWRlcyBzaG91bGQgYmUgYW4gaXRlcmFibGUgb2YgYWxsIHByb3BlcnRpZXMgKHBvdGVudGlhbGx5IGEgcHJpdmF0ZSBtZXRob2QpXG4gICAgbGV0IG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlO1xuICAgIGxldCBvdmVycmlkZVByZXZpZXdUZW1wbGF0ZTtcbiAgICBpZiAob3ZlcnJpZGVzICYmIG92ZXJyaWRlc1tmaWVsZC5uYW1lXSkge1xuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5yZXN1bHRzVGVtcGxhdGUpIHtcbiAgICAgICAgb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGUgPSBvdmVycmlkZXNbZmllbGQubmFtZV0ucmVzdWx0c1RlbXBsYXRlO1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5yZXN1bHRzVGVtcGxhdGUgPSBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZTtcbiAgICAgICAgZGVsZXRlIG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5yZXN1bHRzVGVtcGxhdGU7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLm92ZXJyaWRlUHJldmlld1RlbXBsYXRlKSB7XG4gICAgICAgIG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLm92ZXJyaWRlUHJldmlld1RlbXBsYXRlO1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5vdmVycmlkZVByZXZpZXdUZW1wbGF0ZSA9IG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlO1xuICAgICAgICBkZWxldGUgb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLm92ZXJyaWRlUHJldmlld1RlbXBsYXRlO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5waWNrZXJDYWxsYmFjaykge1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5jYWxsYmFjayA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5waWNrZXJDYWxsYmFjaztcbiAgICAgIH1cbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0udHlwZSkge1xuICAgICAgICB0eXBlID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnR5cGU7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLmNvbHVtbnMpIHtcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcuY29sdW1ucyA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5jb2x1bW5zO1xuICAgICAgICBjb250cm9sQ29uZmlnLmNsb3NlT25TZWxlY3QgPSB0cnVlO1xuICAgICAgICBkZWxldGUgY29udHJvbENvbmZpZy5sYWJlbDtcbiAgICAgIH1cbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0ud2FybmluZykge1xuICAgICAgICBjb250cm9sQ29uZmlnLndhcm5pbmcgPSBvdmVycmlkZXNbZmllbGQubmFtZV0ud2FybmluZztcbiAgICAgIH1cbiAgICAgIE9iamVjdC5hc3NpZ24oY29udHJvbENvbmZpZywgb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2VudGl0eWNoaXBzJzpcbiAgICAgICAgLy8gVE9ETzogVGhpcyBkb2Vzbid0IGJlbG9uZyBpbiB0aGlzIGNvZGViYXNlXG4gICAgICAgIGNvbnRyb2xDb25maWcubXVsdGlwbGUgPSB0cnVlO1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5yZXN1bHRzVGVtcGxhdGUgPSBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZSB8fCBFbnRpdHlQaWNrZXJSZXN1bHRzO1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5wcmV2aWV3VGVtcGxhdGUgPSBvdmVycmlkZVByZXZpZXdUZW1wbGF0ZSB8fCBFbnRpdHlQaWNrZXJSZXN1bHQ7XG4gICAgICAgIC8vIFRPRE86IFdoZW4gYXBwZW5kVG9Cb2R5IHBpY2tlciB3b3JrcyBiZXR0ZXIgaW4gdGFibGUvZm9ybVxuICAgICAgICBjb250cm9sID0gbmV3IFBpY2tlckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hpcHMnOlxuICAgICAgICBjb250cm9sQ29uZmlnLm11bHRpcGxlID0gdHJ1ZTtcbiAgICAgICAgLy8gVE9ETzogV2hlbiBhcHBlbmRUb0JvZHkgcGlja2VyIHdvcmtzIGJldHRlciBpbiB0YWJsZS9mb3JtXG4gICAgICAgIGNvbnRyb2wgPSBuZXcgUGlja2VyQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlbnRpdHlwaWNrZXInOlxuICAgICAgICAvLyBUT0RPOiBUaGlzIGRvZXNuJ3QgYmVsb25nIGluIHRoaXMgY29kZWJhc2VcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcucmVzdWx0c1RlbXBsYXRlID0gb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGUgfHwgRW50aXR5UGlja2VyUmVzdWx0cztcbiAgICAgICAgLy8gVE9ETzogV2hlbiBhcHBlbmRUb0JvZHkgcGlja2VyIHdvcmtzIGJldHRlciBpbiB0YWJsZS9mb3JtXG4gICAgICAgIGNvbnRyb2wgPSBuZXcgUGlja2VyQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwaWNrZXInOlxuICAgICAgICAvLyBUT0RPOiBXaGVuIGFwcGVuZFRvQm9keSBwaWNrZXIgd29ya3MgYmV0dGVyIGluIHRhYmxlL2Zvcm1cbiAgICAgICAgY29udHJvbCA9IG5ldyBQaWNrZXJDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RhdGV0aW1lJzpcbiAgICAgICAgY29udHJvbENvbmZpZy5taWxpdGFyeSA9IGNvbmZpZyA/ICEhY29uZmlnLm1pbGl0YXJ5IDogZmFsc2U7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgRGF0ZVRpbWVDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICBjb250cm9sQ29uZmlnLmRhdGVGb3JtYXQgPSBmaWVsZC5kYXRlRm9ybWF0O1xuICAgICAgICBjb250cm9sQ29uZmlnLnRleHRNYXNrRW5hYmxlZCA9IGZpZWxkLnRleHRNYXNrRW5hYmxlZDtcbiAgICAgICAgY29udHJvbENvbmZpZy5hbGxvd0ludmFsaWREYXRlID0gZmllbGQuYWxsb3dJbnZhbGlkRGF0ZTtcbiAgICAgICAgY29udHJvbENvbmZpZy5taWxpdGFyeSA9IGNvbmZpZyA/ICEhY29uZmlnLm1pbGl0YXJ5IDogZmFsc2U7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgRGF0ZUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgIGNvbnRyb2xDb25maWcubWlsaXRhcnkgPSBjb25maWcgPyAhIWNvbmZpZy5taWxpdGFyeSA6IGZhbHNlO1xuICAgICAgICBjb250cm9sID0gbmV3IFRpbWVDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgIGNhc2UgJ21vbmV5JzpcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgIGNhc2UgJ3BlcmNlbnRhZ2UnOlxuICAgICAgY2FzZSAnZmxvYXQnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAvLyBUT0RPOiBPbmx5IHR5cGVzIGZyb20gYGRldGVybWluZUlucHV0VHlwZWAgc2hvdWxkIGJlIHVzZWQgaW4gdGhpcyBjbGFzc1xuICAgICAgICBpZiAodHlwZSA9PT0gJ21vbmV5Jykge1xuICAgICAgICAgIHR5cGUgPSAnY3VycmVuY3knO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xDb25maWcudHlwZSA9IHR5cGU7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGV4dEJveENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGV4dEJveENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICBjb250cm9sID0gbmV3IFRleHRBcmVhQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0b3InOlxuICAgICAgICBjb250cm9sID0gbmV3IEVkaXRvckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdG9yLW1pbmltYWwnOlxuICAgICAgICBjb250cm9sID0gbmV3IEVkaXRvckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGNvbnRyb2wubWluaW1hbCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGlsZXMnOlxuICAgICAgICBjb250cm9sID0gbmV3IFRpbGVzQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIGNvbnRyb2xDb25maWcuY2hlY2tib3hMYWJlbCA9IGZpZWxkLmNoZWNrYm94TGFiZWw7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgQ2hlY2tib3hDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoZWNrbGlzdCc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgQ2hlY2tMaXN0Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgUmFkaW9Db250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgU2VsZWN0Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhZGRyZXNzJzpcbiAgICAgICAgY29udHJvbENvbmZpZy5yZXF1aXJlZCA9IGZpZWxkLnJlcXVpcmVkIHx8IGZhbHNlO1xuICAgICAgICBpZiAoSGVscGVycy5pc0JsYW5rKGNvbnRyb2xDb25maWcuY29uZmlnKSkge1xuICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnID0ge307XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcucmVxdWlyZWQgPSBmaWVsZC5yZXF1aXJlZDtcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcucmVhZE9ubHkgPSBjb250cm9sQ29uZmlnLnJlYWRPbmx5O1xuICAgICAgICBpZiAoZmllbGQuZmllbGRzICYmIGZpZWxkLmZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgICBmb3IgKGxldCBzdWJmaWVsZCBvZiBmaWVsZC5maWVsZHMpIHtcbiAgICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnW3N1YmZpZWxkLm5hbWVdID0ge1xuICAgICAgICAgICAgICByZXF1aXJlZDogISFzdWJmaWVsZC5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgaGlkZGVuOiAhIXN1YmZpZWxkLnJlYWRPbmx5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghSGVscGVycy5pc0VtcHR5KHN1YmZpZWxkLmxhYmVsKSkge1xuICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZ1tzdWJmaWVsZC5uYW1lXS5sYWJlbCA9IHN1YmZpZWxkLmxhYmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkoc3ViZmllbGQubWF4TGVuZ3RoKSkge1xuICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZ1tzdWJmaWVsZC5uYW1lXS5tYXhsZW5ndGggPSBzdWJmaWVsZC5tYXhMZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250cm9sQ29uZmlnLnJlcXVpcmVkID0gY29udHJvbENvbmZpZy5yZXF1aXJlZCB8fCBzdWJmaWVsZC5yZXF1aXJlZDtcbiAgICAgICAgICAgIGlmIChzdWJmaWVsZC5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYgKEhlbHBlcnMuaXNCbGFuayhjb250cm9sQ29uZmlnLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xDb25maWcudmFsdWUgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLnZhbHVlW3N1YmZpZWxkLm5hbWVdID0gc3ViZmllbGQuZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdWJmaWVsZC5uYW1lID09PSAnY291bnRyeUlEJykge1xuICAgICAgICAgICAgICBpZiAoSGVscGVycy5pc0JsYW5rKGNvbnRyb2xDb25maWcudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbENvbmZpZy52YWx1ZSA9IHt9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcudmFsdWVbc3ViZmllbGQubmFtZV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1YmZpZWxkLm5hbWUgPT09ICdzdGF0ZScgfHwgc3ViZmllbGQubmFtZSA9PT0gJ2NvdW50cnlJRCcpIHtcbiAgICAgICAgICAgICAgaWYgKHN1YmZpZWxkLm5hbWUgPT09ICdjb3VudHJ5SUQnKSB7XG4gICAgICAgICAgICAgICAgc3ViZmllbGQub3B0aW9uc1R5cGUgPSAnQ291bnRyeSc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCFzdWJmaWVsZC5vcHRpb25zVXJsKSB7XG4gICAgICAgICAgICAgICAgc3ViZmllbGQub3B0aW9uc1VybCA9IGBvcHRpb25zLyR7c3ViZmllbGQub3B0aW9uc1R5cGV9YDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZ1tzdWJmaWVsZC5uYW1lXS5waWNrZXJDb25maWcgPSB0aGlzLmdldENvbnRyb2xPcHRpb25zKHN1YmZpZWxkLCBodHRwLCBjb25maWcsIGZpZWxkRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xDb25maWcuaXNFbXB0eSA9IHRoaXMuaXNBZGRyZXNzRW1wdHk7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgQWRkcmVzc0NvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgRmlsZUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY3VzdG9tJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBDdXN0b21Db250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGV4dEJveENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gY29udHJvbDtcbiAgfVxuXG4gIHRvQ29udHJvbHMoXG4gICAgbWV0YSxcbiAgICBjdXJyZW5jeUZvcm1hdCxcbiAgICBodHRwLFxuICAgIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuIH0sXG4gICAgb3ZlcnJpZGVzPzogYW55LFxuICAgIGZvclRhYmxlOiBib29sZWFuID0gZmFsc2UsXG4gICkge1xuICAgIGxldCBjb250cm9scyA9IFtdO1xuICAgIGlmIChtZXRhICYmIG1ldGEuZmllbGRzKSB7XG4gICAgICBsZXQgZmllbGRzID0gbWV0YS5maWVsZHM7XG4gICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGZpZWxkLm5hbWUgIT09ICdpZCcgJiZcbiAgICAgICAgICAoZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uICE9PSAnU1lTVEVNJyB8fCBbJ2FkZHJlc3MnLCAnYmlsbGluZ0FkZHJlc3MnLCAnc2Vjb25kYXJ5QWRkcmVzcyddLmluZGV4T2YoZmllbGQubmFtZSkgIT09IC0xKSAmJlxuICAgICAgICAgICFmaWVsZC5yZWFkT25seVxuICAgICAgICApIHtcbiAgICAgICAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbEZvckZpZWxkKGZpZWxkLCBodHRwLCBjb25maWcsIG92ZXJyaWRlcywgZm9yVGFibGUpO1xuICAgICAgICAgIC8vIFNldCBjdXJyZW5jeSBmb3JtYXRcbiAgICAgICAgICBpZiAoY29udHJvbC5zdWJUeXBlID09PSAnY3VycmVuY3knKSB7XG4gICAgICAgICAgICBjb250cm9sLmN1cnJlbmN5Rm9ybWF0ID0gY3VycmVuY3lGb3JtYXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEFkZCB0byBjb250cm9sc1xuICAgICAgICAgIGNvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY29udHJvbHM7XG4gIH1cblxuICB0b1RhYmxlQ29udHJvbHMobWV0YSwgY3VycmVuY3lGb3JtYXQsIGh0dHAsIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuIH0sIG92ZXJyaWRlcz86IGFueSkge1xuICAgIGxldCBjb250cm9scyA9IHRoaXMudG9Db250cm9scyhtZXRhLCBjdXJyZW5jeUZvcm1hdCwgaHR0cCwgY29uZmlnLCBvdmVycmlkZXMsIHRydWUpO1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBjb250cm9scy5mb3JFYWNoKChjb250cm9sOiBCYXNlQ29udHJvbCkgPT4ge1xuICAgICAgcmV0W2NvbnRyb2wua2V5XSA9IHtcbiAgICAgICAgZWRpdG9yVHlwZTogY29udHJvbC5fX3R5cGUsXG4gICAgICAgIGVkaXRvckNvbmZpZzogY29udHJvbC5fX2NvbmZpZyxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHRvRmllbGRTZXRzKFxuICAgIG1ldGEsXG4gICAgY3VycmVuY3lGb3JtYXQsXG4gICAgaHR0cCxcbiAgICBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiB9LFxuICAgIG92ZXJyaWRlcz8sXG4gICAgZGF0YT86IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4gICkge1xuICAgIGxldCBmaWVsZHNldHM6IEFycmF5PE5vdm9GaWVsZHNldD4gPSBbXTtcbiAgICBsZXQgcmFuZ2VzID0gW107XG4gICAgaWYgKG1ldGEgJiYgbWV0YS5maWVsZHMpIHtcbiAgICAgIGxldCBmaWVsZHMgPSBtZXRhLmZpZWxkc1xuICAgICAgICAubWFwKChmaWVsZCkgPT4ge1xuICAgICAgICAgIGlmICghZmllbGQuaGFzT3duUHJvcGVydHkoJ3NvcnRPcmRlcicpKSB7XG4gICAgICAgICAgICBmaWVsZC5zb3J0T3JkZXIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAtIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmaWVsZDtcbiAgICAgICAgfSlcbiAgICAgICAgLnNvcnQoSGVscGVycy5zb3J0QnlGaWVsZChbJ3NvcnRPcmRlcicsICduYW1lJ10pKTtcbiAgICAgIGlmIChtZXRhLnNlY3Rpb25IZWFkZXJzICYmIG1ldGEuc2VjdGlvbkhlYWRlcnMubGVuZ3RoKSB7XG4gICAgICAgIG1ldGEuc2VjdGlvbkhlYWRlcnMuc29ydChIZWxwZXJzLnNvcnRCeUZpZWxkKFsnc29ydE9yZGVyJywgJ25hbWUnXSkpO1xuICAgICAgICBtZXRhLnNlY3Rpb25IZWFkZXJzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5lbmFibGVkKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5zb3J0T3JkZXIgPiAwICYmIGZpZWxkc2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgZmllbGRzZXRzLnB1c2goe1xuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBbXSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgbWF4OiBpdGVtLnNvcnRPcmRlciAtIDEsXG4gICAgICAgICAgICAgICAgZmllbGRzZXRJZHg6IDAsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmllbGRzZXRzLnB1c2goe1xuICAgICAgICAgICAgICB0aXRsZTogaXRlbS5sYWJlbCxcbiAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uIHx8ICdiaGktc2VjdGlvbicsXG4gICAgICAgICAgICAgIGNvbnRyb2xzOiBbXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgICBtaW46IGl0ZW0uc29ydE9yZGVyLFxuICAgICAgICAgICAgICBtYXg6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICAgICAgICBmaWVsZHNldElkeDogZmllbGRzZXRzLmxlbmd0aCAtIDEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChpID4gMCAmJiBmaWVsZHNldHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICByYW5nZXNbZmllbGRzZXRzLmxlbmd0aCAtIDJdLm1heCA9IGl0ZW0uc29ydE9yZGVyIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJhbmdlcy5sZW5ndGgpIHtcbiAgICAgICAgICBmaWVsZHNldHMucHVzaCh7XG4gICAgICAgICAgICBjb250cm9sczogW10sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgICAgIGZpZWxkc2V0SWR4OiAwLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWVsZHNldHMucHVzaCh7XG4gICAgICAgICAgY29udHJvbHM6IFtdLFxuICAgICAgICB9KTtcbiAgICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICAgIGZpZWxkc2V0SWR4OiAwLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZmllbGQubmFtZSAhPT0gJ2lkJyAmJlxuICAgICAgICAgIChmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24gIT09ICdTWVNURU0nIHx8IFsnYWRkcmVzcycsICdiaWxsaW5nQWRkcmVzcycsICdzZWNvbmRhcnlBZGRyZXNzJ10uaW5kZXhPZihmaWVsZC5uYW1lKSAhPT0gLTEpICYmXG4gICAgICAgICAgIWZpZWxkLnJlYWRPbmx5XG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGZpZWxkRGF0YTogYW55ID0gZGF0YSAmJiBkYXRhW2ZpZWxkLm5hbWVdID8gZGF0YVtmaWVsZC5uYW1lXSA6IG51bGw7XG4gICAgICAgICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2xGb3JGaWVsZChmaWVsZCwgaHR0cCwgY29uZmlnLCBvdmVycmlkZXMsIHVuZGVmaW5lZCwgZmllbGREYXRhKTtcbiAgICAgICAgICAvLyBTZXQgY3VycmVuY3kgZm9ybWF0XG4gICAgICAgICAgaWYgKGNvbnRyb2wuc3ViVHlwZSA9PT0gJ2N1cnJlbmN5Jykge1xuICAgICAgICAgICAgY29udHJvbC5jdXJyZW5jeUZvcm1hdCA9IGN1cnJlbmN5Rm9ybWF0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgbG9jYXRpb24gPSByYW5nZXMuZmluZCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChpdGVtLm1pbiA8PSBmaWVsZC5zb3J0T3JkZXIgJiYgZmllbGQuc29ydE9yZGVyIDw9IGl0ZW0ubWF4KSB8fCAoaXRlbS5taW4gPD0gZmllbGQuc29ydE9yZGVyICYmIGl0ZW0ubWluID09PSBpdGVtLm1heCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICAgICAgICAvLyBBZGQgdG8gY29udHJvbHNcbiAgICAgICAgICAgIGZpZWxkc2V0c1tsb2NhdGlvbi5maWVsZHNldElkeF0uY29udHJvbHMucHVzaChjb250cm9sKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZmllbGRzZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBmaWVsZHNldHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjb250cm9sczogdGhpcy50b0NvbnRyb2xzKG1ldGEsIGN1cnJlbmN5Rm9ybWF0LCBodHRwLCBjb25maWcpLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9XG4gIH1cblxuICBnZXRDb250cm9sT3B0aW9ucyhmaWVsZDogYW55LCBodHRwOiBhbnksIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuIH0sIGZpZWxkRGF0YT86IGFueSk6IGFueSB7XG4gICAgLy8gVE9ETzogVGhlIHRva2VuIHByb3BlcnR5IG9mIGNvbmZpZyBpcyB0aGUgb25seSBwcm9wZXJ0eSB1c2VkOyBqdXN0IHBhc3MgaW4gYHRva2VuOiBzdHJpbmdgXG4gICAgaWYgKGZpZWxkLmRhdGFUeXBlID09PSAnQm9vbGVhbicgJiYgIWZpZWxkLm9wdGlvbnMpIHtcbiAgICAgIC8vIFRPRE86IGRhdGFUeXBlIHNob3VsZCBvbmx5IGJlIGRldGVybWluZWQgYnkgYGRldGVybWluZUlucHV0VHlwZWAgd2hpY2ggZG9lc24ndCBldmVyIHJldHVybiAnQm9vbGVhbicgaXRcbiAgICAgIC8vIFRPRE86IChjb250LikgcmV0dXJucyBgdGlsZXNgXG4gICAgICByZXR1cm4gW3sgdmFsdWU6IGZhbHNlLCBsYWJlbDogdGhpcy5sYWJlbHMubm8gfSwgeyB2YWx1ZTogdHJ1ZSwgbGFiZWw6IHRoaXMubGFiZWxzLnllcyB9XTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLndvcmtmbG93T3B0aW9ucyAmJiBmaWVsZERhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFdvcmtmbG93T3B0aW9ucyhmaWVsZC53b3JrZmxvd09wdGlvbnMsIGZpZWxkRGF0YSk7XG4gICAgfSBlbHNlIGlmIChmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24gPT09ICdTUEVDSUFMSVpFRF9PUFRJT05TJykge1xuICAgICAgcmV0dXJuIGZpZWxkLm9wdGlvbnMuZmlsdGVyKChvKSA9PiAhby5yZWFkT25seSk7XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zVXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zU2VydmljZS5nZXRPcHRpb25zQ29uZmlnKGh0dHAsIGZpZWxkLCBjb25maWcpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShmaWVsZC5vcHRpb25zKSAmJiBmaWVsZC50eXBlID09PSAnY2hpcHMnKSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IGZpZWxkLm9wdGlvbnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmaWVsZDogJ3ZhbHVlJyxcbiAgICAgICAgZm9ybWF0OiAnJGxhYmVsJyxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zKSB7XG4gICAgICByZXR1cm4gZmllbGQub3B0aW9ucztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldFdvcmtmbG93T3B0aW9ucyhcbiAgICB3b3JrZmxvd09wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4gICAgZmllbGREYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICApOiBBcnJheTx7IHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7IGxhYmVsOiBzdHJpbmcgfCBudW1iZXIgfT4ge1xuICAgIGxldCBjdXJyZW50VmFsdWU6IHsgdmFsdWU6IHN0cmluZyB8IG51bWJlcjsgbGFiZWw6IHN0cmluZyB8IG51bWJlciB9O1xuICAgIGlmIChmaWVsZERhdGEuaWQpIHtcbiAgICAgIGN1cnJlbnRWYWx1ZSA9IHsgdmFsdWU6IGZpZWxkRGF0YS5pZCwgbGFiZWw6IGZpZWxkRGF0YS5sYWJlbCA/IGZpZWxkRGF0YS5sYWJlbCA6IGZpZWxkRGF0YS5pZCB9O1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRXb3JrZmxvd09wdGlvbjogbnVtYmVyIHwgc3RyaW5nID0gZmllbGREYXRhLmlkID8gZmllbGREYXRhLmlkIDogJ2luaXRpYWwnO1xuICAgIGxldCB1cGRhdGVXb3JrZmxvd09wdGlvbnM6IEFycmF5PHsgdmFsdWU6IHN0cmluZyB8IG51bWJlcjsgbGFiZWw6IHN0cmluZyB8IG51bWJlciB9PiA9IHdvcmtmbG93T3B0aW9uc1tjdXJyZW50V29ya2Zsb3dPcHRpb25dIHx8IFtdO1xuXG4gICAgaWYgKGN1cnJlbnRWYWx1ZSAmJiAhdXBkYXRlV29ya2Zsb3dPcHRpb25zLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSBjdXJyZW50VmFsdWUudmFsdWUpKSB7XG4gICAgICB1cGRhdGVXb3JrZmxvd09wdGlvbnMudW5zaGlmdChjdXJyZW50VmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB1cGRhdGVXb3JrZmxvd09wdGlvbnM7XG4gIH1cblxuICBzZXRJbml0aWFsVmFsdWVzKGNvbnRyb2xzOiBBcnJheTxOb3ZvQ29udHJvbENvbmZpZz4sIHZhbHVlczogYW55LCBrZWVwQ2xlYW4/OiBib29sZWFuLCBrZXlPdmVycmlkZT86IHN0cmluZykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjb250cm9sID0gY29udHJvbHNbaV07XG4gICAgICBsZXQga2V5ID0ga2V5T3ZlcnJpZGUgPyBjb250cm9sLmtleS5yZXBsYWNlKGtleU92ZXJyaWRlLCAnJykgOiBjb250cm9sLmtleTtcbiAgICAgIGxldCB2YWx1ZSA9IHZhbHVlc1trZXldO1xuXG4gICAgICBpZiAoSGVscGVycy5pc0JsYW5rKHZhbHVlKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5maWx0ZXIoKHZhbCkgPT4gIShPYmplY3Qua2V5cyh2YWwpLmxlbmd0aCA9PT0gMCAmJiB2YWwuY29uc3RydWN0b3IgPT09IE9iamVjdCkpO1xuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlLmRhdGEgJiYgdmFsdWUuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnRyb2wudmFsdWUgPSB2YWx1ZTtcbiAgICAgIC8vIFRPRE86IGtlZXBDbGVhbiBpcyBub3QgcmVxdWlyZWQsIGJ1dCBpcyBhbHdheXMgdXNlZC4gSXQgc2hvdWxkIGRlZmF1bHQgKHRvIHRydWU/KVxuICAgICAgY29udHJvbC5kaXJ0eSA9ICFrZWVwQ2xlYW47XG4gICAgfVxuICB9XG5cbiAgc2V0SW5pdGlhbFZhbHVlc0ZpZWxkc2V0cyhmaWVsZHNldHM6IEFycmF5PE5vdm9GaWVsZHNldD4sIHZhbHVlcywga2VlcENsZWFuPzogYm9vbGVhbikge1xuICAgIGZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgdGhpcy5zZXRJbml0aWFsVmFsdWVzKGZpZWxkc2V0LmNvbnRyb2xzLCB2YWx1ZXMsIGtlZXBDbGVhbik7XG4gICAgfSk7XG4gIH1cblxuICBmb3JjZVNob3dBbGxDb250cm9scyhjb250cm9sczogQXJyYXk8Tm92b0NvbnRyb2xDb25maWc+KSB7XG4gICAgY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgY29udHJvbC5oaWRkZW4gPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlU2hvd0FsbENvbnRyb2xzSW5GaWVsZHNldHMoZmllbGRzZXRzOiBBcnJheTxOb3ZvRmllbGRzZXQ+KSB7XG4gICAgZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgIGNvbnRyb2wuaGlkZGVuID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlVmFsaWRhdGlvbihmb3JtOiBOb3ZvRm9ybUdyb3VwKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXMoZm9ybS5jb250cm9scykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGxldCBjb250cm9sOiBhbnkgPSBmb3JtLmNvbnRyb2xzW2tleV07XG4gICAgICBpZiAoY29udHJvbC5yZXF1aXJlZCAmJiBIZWxwZXJzLmlzQmxhbmsoZm9ybS52YWx1ZVtjb250cm9sLmtleV0pKSB7XG4gICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc0FkZHJlc3NFbXB0eShjb250cm9sOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgZmllbGRMaXN0OiBzdHJpbmdbXSA9IFsnYWRkcmVzczEnLCAnYWRkcmVzczInLCAnY2l0eScsICdzdGF0ZScsICd6aXAnLCAnY291bnRyeUlEJ107XG4gICAgbGV0IHZhbGlkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBpZiAoY29udHJvbC52YWx1ZSAmJiBjb250cm9sLmNvbmZpZykge1xuICAgICAgZmllbGRMaXN0LmZvckVhY2goKHN1YmZpZWxkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICgoc3ViZmllbGQgIT09ICdjb3VudHJ5SUQnICYmXG4gICAgICAgICAgICAhSGVscGVycy5pc0VtcHR5KGNvbnRyb2wuY29uZmlnW3N1YmZpZWxkXSkgJiZcbiAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnW3N1YmZpZWxkXS5yZXF1aXJlZCAmJlxuICAgICAgICAgICAgKEhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlW3N1YmZpZWxkXSkgfHwgSGVscGVycy5pc0VtcHR5KGNvbnRyb2wudmFsdWVbc3ViZmllbGRdKSkpIHx8XG4gICAgICAgICAgICAoc3ViZmllbGQgPT09ICdjb3VudHJ5SUQnICYmXG4gICAgICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29udHJvbC5jb25maWcuY291bnRyeUlEKSAmJlxuICAgICAgICAgICAgICBjb250cm9sLmNvbmZpZy5jb3VudHJ5SUQucmVxdWlyZWQgJiZcbiAgICAgICAgICAgICAgSGVscGVycy5pc0VtcHR5KGNvbnRyb2wudmFsdWUuY291bnRyeU5hbWUpKSkgJiZcbiAgICAgICAgICAhKFxuICAgICAgICAgICAgc3ViZmllbGQgPT09ICdzdGF0ZScgJiZcbiAgICAgICAgICAgICFIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZS5jb3VudHJ5TmFtZSkgJiZcbiAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZyAmJlxuICAgICAgICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zICYmXG4gICAgICAgICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMubGVuZ3RoID09PSAwXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGFydERhdGVGcm9tUmFuZ2UoZGF0ZVJhbmdlOiB7IG1pbkRhdGU6IHN0cmluZzsgbWluT2Zmc2V0OiBudW1iZXIgfSk6IERhdGUge1xuICAgIGlmIChkYXRlUmFuZ2UubWluRGF0ZSkge1xuICAgICAgcmV0dXJuIGRhdGVGbnMucGFyc2UoZGF0ZVJhbmdlLm1pbkRhdGUpO1xuICAgIH0gZWxzZSBpZiAoZGF0ZVJhbmdlLm1pbk9mZnNldCkge1xuICAgICAgcmV0dXJuIGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZUb2RheSgpLCBkYXRlUmFuZ2UubWluT2Zmc2V0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtaW4gc3RhcnQgZGF0ZSBvZiBhIERhdGUgYmFzZSBvbiBmaWVsZCBkYXRhLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTdGFydERhdGUoZmllbGQ6IGFueSk6IERhdGUgfCBudWxsIHtcbiAgICBpZiAoZmllbGQuYWxsb3dlZERhdGVSYW5nZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhcnREYXRlRnJvbVJhbmdlKGZpZWxkLmFsbG93ZWREYXRlUmFuZ2UpO1xuICAgIH1cbiAgICAvLyB0aGVyZSBpcyBubyByZXN0cmljdGlvbiBvbiB0aGUgc3RhcnQgZGF0ZVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBpbmZlclN0YXJ0RGF0ZShjb250cm9sQ29uZmlnLCBmaWVsZCkge1xuICAgIGlmIChmaWVsZC5kYXRhVHlwZSA9PT0gJ0RhdGUnKSB7XG4gICAgICBjb25zdCBzdGFydERhdGUgPSB0aGlzLmdldFN0YXJ0RGF0ZShmaWVsZCk7XG4gICAgICBpZiAoc3RhcnREYXRlKSB7XG4gICAgICAgIGNvbnRyb2xDb25maWcuc3RhcnREYXRlID0gc3RhcnREYXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXJ0RGF0ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==