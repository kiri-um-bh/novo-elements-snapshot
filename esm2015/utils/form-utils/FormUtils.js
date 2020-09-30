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
            controlConfig.config = Object.assign({}, optionsConfig, (controlConfig && controlConfig.config));
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
     * @private
     * @param {?} field
     * @return {?}
     */
    shouldCreateControl(field) {
        if (field.systemRequired) {
            field.readOnly = false;
        }
        return (field.name !== 'id' &&
            (field.dataSpecialization !== 'SYSTEM' || ['address', 'billingAddress', 'secondaryAddress'].indexOf(field.name) !== -1) &&
            !field.readOnly);
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
                if (this.shouldCreateControl(field)) {
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
                if (this.shouldCreateControl(field)) {
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
            const control = controls[i];
            /** @type {?} */
            const key = keyOverride ? control.key.replace(keyOverride, '') : control.key;
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
            if (control.dataType === 'Date' && typeof value === 'string' && control.optionsType !== 'skipConversion') {
                value = dateFns.startOfDay(value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybVV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL2Zvcm0tdXRpbHMvRm9ybVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsQ0FBQzs7QUFFcEMsT0FBTyxFQUNMLGNBQWMsRUFFZCxlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixXQUFXLEVBQ1gsZUFBZSxFQUNmLGFBQWEsRUFDYixXQUFXLEVBRVgsYUFBYSxFQUNiLFlBQVksRUFDWixhQUFhLEVBQ2IsZUFBZSxFQUNmLGNBQWMsRUFDZCxZQUFZLEVBQ1osV0FBVyxHQUNaLE1BQU0sa0NBQWtDLENBQUM7QUFDMUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDakksT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVyQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUd6RSxNQUFNLE9BQU8sU0FBUzs7Ozs7SUFrQ3BCLFlBQW1CLE1BQXdCLEVBQVMsY0FBOEI7UUFBL0QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFqQ2xGLDJCQUFzQixHQUFhO1lBQ2pDLFdBQVc7WUFDWCxlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLE1BQU07WUFDTixhQUFhO1lBQ2IsVUFBVTtZQUNWLGVBQWU7WUFDZixRQUFRO1lBQ1IsV0FBVztT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LENBQUMsZ0JBQWdCLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDM0Q7UUFDRCw0Q0FBNEM7UUFDNUMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7O0lBRU8sY0FBYyxDQUFDLGFBQWEsRUFBRSxLQUFLO1FBQ3pDLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxNQUFNLEVBQUU7O2tCQUN2QixTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDMUMsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsYUFBYSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7YUFDckM7WUFDRCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUNILENBQUM7OztZQTd0QkYsVUFBVTs7OztZQUhGLGdCQUFnQjtZQUNoQixjQUFjOzs7O0lBSXJCLDJDQVVFOztJQUNGLHVDQW9CRTs7SUFFVSwyQkFBK0I7O0lBQUUsbUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuLy8gQXBwXG5pbXBvcnQge1xuICBBZGRyZXNzQ29udHJvbCxcbiAgQmFzZUNvbnRyb2wsXG4gIENoZWNrYm94Q29udHJvbCxcbiAgQ2hlY2tMaXN0Q29udHJvbCxcbiAgQ3VzdG9tQ29udHJvbCxcbiAgRGF0ZUNvbnRyb2wsXG4gIERhdGVUaW1lQ29udHJvbCxcbiAgRWRpdG9yQ29udHJvbCxcbiAgRmlsZUNvbnRyb2wsXG4gIE5vdm9Db250cm9sQ29uZmlnLFxuICBQaWNrZXJDb250cm9sLFxuICBSYWRpb0NvbnRyb2wsXG4gIFNlbGVjdENvbnRyb2wsXG4gIFRleHRBcmVhQ29udHJvbCxcbiAgVGV4dEJveENvbnRyb2wsXG4gIFRpbGVzQ29udHJvbCxcbiAgVGltZUNvbnRyb2wsXG59IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0vRm9ybUNvbnRyb2xzJztcbmltcG9ydCB7IEVudGl0eVBpY2tlclJlc3VsdCwgRW50aXR5UGlja2VyUmVzdWx0cyB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL3BpY2tlci9leHRyYXMvZW50aXR5LXBpY2tlci1yZXN1bHRzL0VudGl0eVBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0ZpZWxkc2V0LCBGb3JtRmllbGQgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9mb3JtL0Zvcm1JbnRlcmZhY2VzJztcbmltcG9ydCB7IE5vdm9Gb3JtQ29udHJvbCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0vTm92b0Zvcm1Db250cm9sJztcbmltcG9ydCB7IE5vdm9Gb3JtR3JvdXAgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9mb3JtL05vdm9Gb3JtR3JvdXAnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBPcHRpb25zU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvb3B0aW9ucy9PcHRpb25zU2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtVXRpbHMge1xuICBBU1NPQ0lBVEVEX0VOVElUWV9MSVNUOiBzdHJpbmdbXSA9IFtcbiAgICAnQ2FuZGlkYXRlJyxcbiAgICAnQ2xpZW50Q29udGFjdCcsXG4gICAgJ0NsaWVudENvcnBvcmF0aW9uJyxcbiAgICAnTGVhZCcsXG4gICAgJ09wcG9ydHVuaXR5JyxcbiAgICAnSm9iT3JkZXInLFxuICAgICdDb3Jwb3JhdGVVc2VyJyxcbiAgICAnUGVyc29uJyxcbiAgICAnUGxhY2VtZW50JyxcbiAgXTtcbiAgRU5USVRZX1BJQ0tFUl9MSVNUOiBzdHJpbmdbXSA9IFtcbiAgICAnQ2FuZGlkYXRlJyxcbiAgICAnQ2FuZGlkYXRlVGV4dCcsXG4gICAgJ0NsaWVudCcsXG4gICAgJ0NsaWVudFRleHQnLFxuICAgICdDbGllbnRDb250YWN0JyxcbiAgICAnQ2xpZW50Q29udGFjdFRleHQnLFxuICAgICdDbGllbnRDb3Jwb3JhdGlvbicsXG4gICAgJ0NsaWVudENvcnBvcmF0aW9uVGV4dCcsXG4gICAgJ0xlYWQnLFxuICAgICdMZWFkVGV4dCcsXG4gICAgJ09wcG9ydHVuaXR5JyxcbiAgICAnT3Bwb3J0dW5pdHlUZXh0JyxcbiAgICAnSm9iT3JkZXInLFxuICAgICdKb2JPcmRlclRleHQnLFxuICAgICdDb3Jwb3JhdGVVc2VyJyxcbiAgICAnQ29ycG9yYXRlVXNlclRleHQnLFxuICAgICdQZXJzb24nLFxuICAgICdQZXJzb25UZXh0JyxcbiAgICAnUGxhY2VtZW50JyxcbiAgXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwdWJsaWMgb3B0aW9uc1NlcnZpY2U6IE9wdGlvbnNTZXJ2aWNlKSB7fVxuXG4gIHRvRm9ybUdyb3VwKGNvbnRyb2xzOiBBcnJheTxhbnk+KTogTm92b0Zvcm1Hcm91cCB7XG4gICAgbGV0IGdyb3VwOiBhbnkgPSB7fTtcbiAgICBjb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZSkgPyAnJyA6IGNvbnRyb2wudmFsdWU7XG4gICAgICBncm91cFtjb250cm9sLmtleV0gPSBuZXcgTm92b0Zvcm1Db250cm9sKHZhbHVlLCBjb250cm9sKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IE5vdm9Gb3JtR3JvdXAoZ3JvdXApO1xuICB9XG5cbiAgZW1wdHlGb3JtR3JvdXAoKTogTm92b0Zvcm1Hcm91cCB7XG4gICAgcmV0dXJuIG5ldyBOb3ZvRm9ybUdyb3VwKHt9KTtcbiAgfVxuXG4gIGFkZENvbnRyb2xzKGZvcm1Hcm91cDogTm92b0Zvcm1Hcm91cCwgY29udHJvbHM6IEFycmF5PE5vdm9Db250cm9sQ29uZmlnPik6IHZvaWQge1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IEhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlKSA/ICcnIDogY29udHJvbC52YWx1ZTtcbiAgICAgIGxldCBmb3JtQ29udHJvbCA9IG5ldyBOb3ZvRm9ybUNvbnRyb2wodmFsdWUsIGNvbnRyb2wpO1xuICAgICAgZm9ybUdyb3VwLmFkZENvbnRyb2woY29udHJvbC5rZXksIGZvcm1Db250cm9sKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUNvbnRyb2xzKGZvcm1Hcm91cDogTm92b0Zvcm1Hcm91cCwgY29udHJvbHM6IEFycmF5PE5vdm9Db250cm9sQ29uZmlnPik6IHZvaWQge1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgIGZvcm1Hcm91cC5yZW1vdmVDb250cm9sKGNvbnRyb2wua2V5KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSB0b0Zvcm1Hcm91cEZyb21GaWVsZHNldFxuICAgKiBAcGFyYW0gZmllbGRzZXRzXG4gICAqL1xuICB0b0Zvcm1Hcm91cEZyb21GaWVsZHNldChmaWVsZHNldHM6IEFycmF5PE5vdm9GaWVsZHNldD4pOiBOb3ZvRm9ybUdyb3VwIHtcbiAgICBsZXQgY29udHJvbHM6IEFycmF5PE5vdm9Gb3JtQ29udHJvbD4gPSBbXTtcbiAgICBmaWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIGNvbnRyb2xzLnB1c2goLi4uZmllbGRzZXQuY29udHJvbHMpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnRvRm9ybUdyb3VwKGNvbnRyb2xzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBoYXNBc3NvY2lhdGVkRW50aXR5XG4gICAqIEBwYXJhbSBmaWVsZFxuICAgKi9cbiAgaGFzQXNzb2NpYXRlZEVudGl0eShmaWVsZDogRm9ybUZpZWxkKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKGZpZWxkLmFzc29jaWF0ZWRFbnRpdHkgJiYgfnRoaXMuQVNTT0NJQVRFRF9FTlRJVFlfTElTVC5pbmRleE9mKGZpZWxkLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5KSk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZGV0ZXJtaW5lSW5wdXRUeXBlXG4gICAqIEBwYXJhbSBmaWVsZFxuICAgKi9cbiAgZGV0ZXJtaW5lSW5wdXRUeXBlKGZpZWxkOiBGb3JtRmllbGQpOiBzdHJpbmcge1xuICAgIGxldCB0eXBlOiBzdHJpbmc7XG4gICAgbGV0IGRhdGFTcGVjaWFsaXphdGlvblR5cGVNYXAgPSB7XG4gICAgICBEQVRFVElNRTogJ2RhdGV0aW1lJyxcbiAgICAgIFRJTUU6ICd0aW1lJyxcbiAgICAgIE1PTkVZOiAnY3VycmVuY3knLFxuICAgICAgUEVSQ0VOVEFHRTogJ3BlcmNlbnRhZ2UnLFxuICAgICAgSFRNTDogJ2VkaXRvcicsXG4gICAgICAnSFRNTC1NSU5JTUFMJzogJ2VkaXRvci1taW5pbWFsJyxcbiAgICAgIFlFQVI6ICd5ZWFyJyxcbiAgICAgIFdPUktGTE9XX09QVElPTlM6ICdzZWxlY3QnLFxuICAgICAgU1BFQ0lBTElaRURfT1BUSU9OUzogJ3NlbGVjdCcsXG4gICAgICBXb3JrZmxvd09wdGlvbnNMb29rdXA6ICdzZWxlY3QnLFxuICAgICAgU3BlY2lhbGl6ZWRPcHRpb25zTG9va3VwOiAnc2VsZWN0JyxcbiAgICB9O1xuICAgIGxldCBkYXRhVHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIFRpbWVzdGFtcDogJ2RhdGUnLFxuICAgICAgRGF0ZTogJ2RhdGUnLFxuICAgICAgQm9vbGVhbjogJ3RpbGVzJyxcbiAgICB9O1xuICAgIGxldCBpbnB1dFR5cGVUb1R5cGVNYXAgPSB7XG4gICAgICBDSEVDS0JPWDogJ3JhZGlvJyxcbiAgICAgIFJBRElPOiAncmFkaW8nLFxuICAgICAgU0VMRUNUOiAnc2VsZWN0JyxcbiAgICAgIFRJTEVTOiAndGlsZXMnLFxuICAgIH07XG4gICAgbGV0IGlucHV0VHlwZU11bHRpVG9UeXBlTWFwID0ge1xuICAgICAgQ0hFQ0tCT1g6ICdjaGVja2xpc3QnLFxuICAgICAgUkFESU86ICdjaGVja2xpc3QnLFxuICAgICAgU0VMRUNUOiAnY2hpcHMnLFxuICAgIH07XG4gICAgbGV0IHR5cGVUb1R5cGVNYXAgPSB7XG4gICAgICBmaWxlOiAnZmlsZScsXG4gICAgICBDT01QT1NJVEU6ICdhZGRyZXNzJyxcbiAgICB9O1xuICAgIGxldCBudW1iZXJEYXRhVHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIERvdWJsZTogJ2Zsb2F0JyxcbiAgICAgIEJpZ0RlY2ltYWw6ICdmbG9hdCcsXG4gICAgICBJbnRlZ2VyOiAnbnVtYmVyJyxcbiAgICB9O1xuICAgIGlmIChmaWVsZC50eXBlID09PSAnVE9fTUFOWScpIHtcbiAgICAgIGlmICh0aGlzLmhhc0Fzc29jaWF0ZWRFbnRpdHkoZmllbGQpKSB7XG4gICAgICAgIGlmIChmaWVsZC5tdWx0aVZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIHR5cGUgPSAnZW50aXR5cGlja2VyJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eXBlID0gJ2VudGl0eWNoaXBzJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZpZWxkLm11bHRpVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdHlwZSA9ICdwaWNrZXInO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR5cGUgPSAnY2hpcHMnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAnVE9fT05FJykge1xuICAgICAgaWYgKCdTWVNURU0nID09PSBmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24gJiYgWydXb3JrZmxvd09wdGlvbnNMb29rdXAnLCAnU3BlY2lhbGl6ZWRPcHRpb25zTG9va3VwJ10uaW5jbHVkZXMoZmllbGQuZGF0YVR5cGUpKSB7XG4gICAgICAgIHR5cGUgPSBkYXRhU3BlY2lhbGl6YXRpb25UeXBlTWFwW2ZpZWxkLmRhdGFUeXBlXTtcbiAgICAgIH0gZWxzZSBpZiAoWydXT1JLRkxPV19PUFRJT05TJywgJ1NQRUNJQUxJWkVEX09QVElPTlMnXS5pbmNsdWRlcyhmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24pKSB7XG4gICAgICAgIHR5cGUgPSBkYXRhU3BlY2lhbGl6YXRpb25UeXBlTWFwW2ZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbl07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaGFzQXNzb2NpYXRlZEVudGl0eShmaWVsZCkpIHtcbiAgICAgICAgdHlwZSA9ICdlbnRpdHlwaWNrZXInOyAvLyBUT0RPIVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9ICdwaWNrZXInO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZmllbGQub3B0aW9uc1VybCAmJiBmaWVsZC5pbnB1dFR5cGUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICBpZiAoZmllbGQub3B0aW9uc1R5cGUgJiYgfnRoaXMuRU5USVRZX1BJQ0tFUl9MSVNULmluZGV4T2YoZmllbGQub3B0aW9uc1R5cGUpKSB7XG4gICAgICAgIHR5cGUgPSAnZW50aXR5cGlja2VyJzsgLy8gVE9ETyFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGUgPSAncGlja2VyJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKGRhdGFTcGVjaWFsaXphdGlvblR5cGVNYXApLmluZGV4T2YoZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uKSA+IC0xKSB7XG4gICAgICB0eXBlID0gZGF0YVNwZWNpYWxpemF0aW9uVHlwZU1hcFtmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb25dO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXMoZGF0YVR5cGVUb1R5cGVNYXApLmluZGV4T2YoZmllbGQuZGF0YVR5cGUpID4gLTEpIHtcbiAgICAgIHR5cGUgPSBkYXRhVHlwZVRvVHlwZU1hcFtmaWVsZC5kYXRhVHlwZV07XG4gICAgfSBlbHNlIGlmIChmaWVsZC5pbnB1dFR5cGUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgIHR5cGUgPSAndGV4dGFyZWEnO1xuICAgIH0gZWxzZSBpZiAoZmllbGQub3B0aW9ucyAmJiBPYmplY3Qua2V5cyhpbnB1dFR5cGVUb1R5cGVNYXApLmluZGV4T2YoZmllbGQuaW5wdXRUeXBlKSA+IC0xICYmICFmaWVsZC5tdWx0aVZhbHVlKSB7XG4gICAgICB0eXBlID0gaW5wdXRUeXBlVG9UeXBlTWFwW2ZpZWxkLmlucHV0VHlwZV07XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zICYmIE9iamVjdC5rZXlzKGlucHV0VHlwZU11bHRpVG9UeXBlTWFwKS5pbmRleE9mKGZpZWxkLmlucHV0VHlwZSkgPiAtMSAmJiBmaWVsZC5tdWx0aVZhbHVlKSB7XG4gICAgICB0eXBlID0gaW5wdXRUeXBlTXVsdGlUb1R5cGVNYXBbZmllbGQuaW5wdXRUeXBlXTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKHR5cGVUb1R5cGVNYXApLmluZGV4T2YoZmllbGQudHlwZSkgPiAtMSkge1xuICAgICAgdHlwZSA9IHR5cGVUb1R5cGVNYXBbZmllbGQudHlwZV07XG4gICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhudW1iZXJEYXRhVHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5kYXRhVHlwZSkgPiAtMSkge1xuICAgICAgdHlwZSA9IG51bWJlckRhdGFUeXBlVG9UeXBlTWFwW2ZpZWxkLmRhdGFUeXBlXTtcbiAgICB9IC8qIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JtVXRpbHM6IFRoaXMgZmllbGQgdHlwZSBpcyB1bnN1cHBvcnRlZC4nKTtcbiAgICAgICAgfSovXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBpc0ZpZWxkRW5jcnlwdGVkKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGtleS5pbmRleE9mKCdjdXN0b21FbmNyeXB0ZWQnKSA+IC0xO1xuICB9XG5cbiAgZ2V0Q29udHJvbEZvckZpZWxkKFxuICAgIGZpZWxkOiBhbnksXG4gICAgaHR0cCxcbiAgICBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiB9LFxuICAgIG92ZXJyaWRlcz86IGFueSxcbiAgICBmb3JUYWJsZTogYm9vbGVhbiA9IGZhbHNlLFxuICAgIGZpZWxkRGF0YT86IGFueSxcbiAgKSB7XG4gICAgLy8gVE9ETzogaWYgZmllbGQudHlwZSBvdmVycmlkZXMgYGRldGVybWluZUlucHV0VHlwZWAgd2Ugc2hvdWxkIHVzZSBpdCBpbiB0aGF0IG1ldGhvZCBvciB1c2UgdGhpcyBtZXRob2RcbiAgICAvLyBUT0RPOiAoY29udC4pIGFzIHRoZSBzZXR0ZXIgb2YgdGhlIGZpZWxkIGFyZ3VtZW50XG4gICAgbGV0IHR5cGU6IHN0cmluZyA9IHRoaXMuZGV0ZXJtaW5lSW5wdXRUeXBlKGZpZWxkKSB8fCBmaWVsZC50eXBlO1xuICAgIGxldCBjb250cm9sOiBhbnk7XG4gICAgbGV0IGNvbnRyb2xDb25maWc6IE5vdm9Db250cm9sQ29uZmlnID0ge1xuICAgICAgbWV0YVR5cGU6IGZpZWxkLnR5cGUsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAga2V5OiBmaWVsZC5uYW1lLFxuICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLmhpbnQgfHwgJycsXG4gICAgICByZXF1aXJlZDogZmllbGQucmVxdWlyZWQgfHwgZmllbGQuc3lzdGVtUmVxdWlyZWQsXG4gICAgICBoaWRkZW46ICFmaWVsZC5yZXF1aXJlZCxcbiAgICAgIGVuY3J5cHRlZDogdGhpcy5pc0ZpZWxkRW5jcnlwdGVkKGZpZWxkLm5hbWUgPyBmaWVsZC5uYW1lLnRvU3RyaW5nKCkgOiAnJyksXG4gICAgICB2YWx1ZTogZmllbGQudmFsdWUgfHwgZmllbGQuZGVmYXVsdFZhbHVlLFxuICAgICAgc29ydE9yZGVyOiBmaWVsZC5zb3J0T3JkZXIsXG4gICAgICBhc3NvY2lhdGVkRW50aXR5OiBmaWVsZC5hc3NvY2lhdGVkRW50aXR5LFxuICAgICAgb3B0aW9uc1R5cGU6IGZpZWxkLm9wdGlvbnNUeXBlLFxuICAgICAgbXVsdGlwbGU6IGZpZWxkLm11bHRpVmFsdWUsXG4gICAgICByZWFkT25seTogISFmaWVsZC5kaXNhYmxlZCB8fCAhIWZpZWxkLnJlYWRPbmx5LFxuICAgICAgZGlzYWJsZWQ6IGZpZWxkLmRpc2FibGVkLFxuICAgICAgbWF4bGVuZ3RoOiBmaWVsZC5tYXhMZW5ndGgsXG4gICAgICBpbnRlcmFjdGlvbnM6IGZpZWxkLmludGVyYWN0aW9ucyxcbiAgICAgIGRhdGFTcGVjaWFsaXphdGlvbjogZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uLFxuICAgICAgZGF0YVR5cGU6IGZpZWxkLmRhdGFUeXBlLFxuICAgICAgZGVzY3JpcHRpb246IGZpZWxkLmRlc2NyaXB0aW9uIHx8ICcnLFxuICAgICAgdG9vbHRpcDogZmllbGQudG9vbHRpcCxcbiAgICAgIHRvb2x0aXBQb3NpdGlvbjogZmllbGQudG9vbHRpcFBvc2l0aW9uLFxuICAgICAgY3VzdG9tQ29udHJvbDogZmllbGQuY3VzdG9tQ29udHJvbCxcbiAgICAgIHRlbXBsYXRlOiBmaWVsZC50ZW1wbGF0ZSxcbiAgICAgIGN1c3RvbUNvbnRyb2xDb25maWc6IGZpZWxkLmN1c3RvbUNvbnRyb2xDb25maWcsXG4gICAgICByZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zOiBmaWVsZC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zLFxuICAgICAgdmFsaWRhdG9yczogZmllbGQudmFsaWRhdG9ycyxcbiAgICAgIHdhcm5pbmc6IGZpZWxkLndhcm5pbmcsXG4gICAgICBjb25maWc6IGZpZWxkLmNvbmZpZyB8fCB7fSxcbiAgICAgIGNsb3NlT25TZWxlY3Q6IGZpZWxkLmNsb3NlT25TZWxlY3QsXG4gICAgICBsYXlvdXRPcHRpb25zOiBmaWVsZC5sYXlvdXRPcHRpb25zLFxuICAgIH07XG4gICAgdGhpcy5pbmZlclN0YXJ0RGF0ZShjb250cm9sQ29uZmlnLCBmaWVsZCk7XG4gICAgLy8gVE9ETzogZ2V0Q29udHJvbE9wdGlvbnMgc2hvdWxkIGFsd2F5cyByZXR1cm4gdGhlIGNvcnJlY3QgZm9ybWF0XG4gICAgY29uc3Qgb3B0aW9uc0NvbmZpZyA9IHRoaXMuZ2V0Q29udHJvbE9wdGlvbnMoZmllbGQsIGh0dHAsIGNvbmZpZywgZmllbGREYXRhKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zQ29uZmlnKSAmJiAhKHR5cGUgPT09ICdjaGlwcycgfHwgdHlwZSA9PT0gJ3BpY2tlcicpKSB7XG4gICAgICBjb250cm9sQ29uZmlnLm9wdGlvbnMgPSBvcHRpb25zQ29uZmlnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zQ29uZmlnKSAmJiAodHlwZSA9PT0gJ2NoaXBzJyB8fCB0eXBlID09PSAncGlja2VyJykpIHtcbiAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnID0ge1xuICAgICAgICBvcHRpb25zOiBvcHRpb25zQ29uZmlnLFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnNDb25maWcpIHtcbiAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnID0ge1xuICAgICAgICAuLi5vcHRpb25zQ29uZmlnLFxuICAgICAgICAuLi4oY29udHJvbENvbmZpZyAmJiBjb250cm9sQ29uZmlnLmNvbmZpZyksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAneWVhcicpIHtcbiAgICAgIGNvbnRyb2xDb25maWcubWF4bGVuZ3RoID0gNDtcbiAgICB9XG4gICAgLy8gVE9ETzogT3ZlcnJpZGVzIHNob3VsZCBiZSBhbiBpdGVyYWJsZSBvZiBhbGwgcHJvcGVydGllcyAocG90ZW50aWFsbHkgYSBwcml2YXRlIG1ldGhvZClcbiAgICBsZXQgb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGU7XG4gICAgbGV0IG92ZXJyaWRlUHJldmlld1RlbXBsYXRlO1xuICAgIGlmIChvdmVycmlkZXMgJiYgb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdKSB7XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnJlc3VsdHNUZW1wbGF0ZSkge1xuICAgICAgICBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5yZXN1bHRzVGVtcGxhdGU7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlO1xuICAgICAgICBkZWxldGUgb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnJlc3VsdHNUZW1wbGF0ZTtcbiAgICAgIH1cbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0ub3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGUpIHtcbiAgICAgICAgb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGUgPSBvdmVycmlkZXNbZmllbGQubmFtZV0ub3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGU7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLm92ZXJyaWRlUHJldmlld1RlbXBsYXRlID0gb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGU7XG4gICAgICAgIGRlbGV0ZSBvdmVycmlkZXNbZmllbGQubmFtZV0ub3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGU7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnBpY2tlckNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLmNhbGxiYWNrID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnBpY2tlckNhbGxiYWNrO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS50eXBlKSB7XG4gICAgICAgIHR5cGUgPSBvdmVycmlkZXNbZmllbGQubmFtZV0udHlwZTtcbiAgICAgIH1cbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0uY29sdW1ucykge1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5jb2x1bW5zID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLmNvbHVtbnM7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY2xvc2VPblNlbGVjdCA9IHRydWU7XG4gICAgICAgIGRlbGV0ZSBjb250cm9sQ29uZmlnLmxhYmVsO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS53YXJuaW5nKSB7XG4gICAgICAgIGNvbnRyb2xDb25maWcud2FybmluZyA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS53YXJuaW5nO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmFzc2lnbihjb250cm9sQ29uZmlnLCBvdmVycmlkZXNbZmllbGQubmFtZV0pO1xuICAgIH1cblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnZW50aXR5Y2hpcHMnOlxuICAgICAgICAvLyBUT0RPOiBUaGlzIGRvZXNuJ3QgYmVsb25nIGluIHRoaXMgY29kZWJhc2VcbiAgICAgICAgY29udHJvbENvbmZpZy5tdWx0aXBsZSA9IHRydWU7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlIHx8IEVudGl0eVBpY2tlclJlc3VsdHM7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnByZXZpZXdUZW1wbGF0ZSA9IG92ZXJyaWRlUHJldmlld1RlbXBsYXRlIHx8IEVudGl0eVBpY2tlclJlc3VsdDtcbiAgICAgICAgLy8gVE9ETzogV2hlbiBhcHBlbmRUb0JvZHkgcGlja2VyIHdvcmtzIGJldHRlciBpbiB0YWJsZS9mb3JtXG4gICAgICAgIGNvbnRyb2wgPSBuZXcgUGlja2VyQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGlwcyc6XG4gICAgICAgIGNvbnRyb2xDb25maWcubXVsdGlwbGUgPSB0cnVlO1xuICAgICAgICAvLyBUT0RPOiBXaGVuIGFwcGVuZFRvQm9keSBwaWNrZXIgd29ya3MgYmV0dGVyIGluIHRhYmxlL2Zvcm1cbiAgICAgICAgY29udHJvbCA9IG5ldyBQaWNrZXJDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VudGl0eXBpY2tlcic6XG4gICAgICAgIC8vIFRPRE86IFRoaXMgZG9lc24ndCBiZWxvbmcgaW4gdGhpcyBjb2RlYmFzZVxuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5yZXN1bHRzVGVtcGxhdGUgPSBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZSB8fCBFbnRpdHlQaWNrZXJSZXN1bHRzO1xuICAgICAgICAvLyBUT0RPOiBXaGVuIGFwcGVuZFRvQm9keSBwaWNrZXIgd29ya3MgYmV0dGVyIGluIHRhYmxlL2Zvcm1cbiAgICAgICAgY29udHJvbCA9IG5ldyBQaWNrZXJDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BpY2tlcic6XG4gICAgICAgIC8vIFRPRE86IFdoZW4gYXBwZW5kVG9Cb2R5IHBpY2tlciB3b3JrcyBiZXR0ZXIgaW4gdGFibGUvZm9ybVxuICAgICAgICBjb250cm9sID0gbmV3IFBpY2tlckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF0ZXRpbWUnOlxuICAgICAgICBjb250cm9sQ29uZmlnLm1pbGl0YXJ5ID0gY29uZmlnID8gISFjb25maWcubWlsaXRhcnkgOiBmYWxzZTtcbiAgICAgICAgY29udHJvbCA9IG5ldyBEYXRlVGltZUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgIGNvbnRyb2xDb25maWcuZGF0ZUZvcm1hdCA9IGZpZWxkLmRhdGVGb3JtYXQ7XG4gICAgICAgIGNvbnRyb2xDb25maWcudGV4dE1hc2tFbmFibGVkID0gZmllbGQudGV4dE1hc2tFbmFibGVkO1xuICAgICAgICBjb250cm9sQ29uZmlnLmFsbG93SW52YWxpZERhdGUgPSBmaWVsZC5hbGxvd0ludmFsaWREYXRlO1xuICAgICAgICBjb250cm9sQ29uZmlnLm1pbGl0YXJ5ID0gY29uZmlnID8gISFjb25maWcubWlsaXRhcnkgOiBmYWxzZTtcbiAgICAgICAgY29udHJvbCA9IG5ldyBEYXRlQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0aW1lJzpcbiAgICAgICAgY29udHJvbENvbmZpZy5taWxpdGFyeSA9IGNvbmZpZyA/ICEhY29uZmlnLm1pbGl0YXJ5IDogZmFsc2U7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGltZUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgY2FzZSAnbW9uZXknOlxuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgY2FzZSAncGVyY2VudGFnZSc6XG4gICAgICBjYXNlICdmbG9hdCc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgIC8vIFRPRE86IE9ubHkgdHlwZXMgZnJvbSBgZGV0ZXJtaW5lSW5wdXRUeXBlYCBzaG91bGQgYmUgdXNlZCBpbiB0aGlzIGNsYXNzXG4gICAgICAgIGlmICh0eXBlID09PSAnbW9uZXknKSB7XG4gICAgICAgICAgdHlwZSA9ICdjdXJyZW5jeSc7XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbENvbmZpZy50eXBlID0gdHlwZTtcbiAgICAgICAgY29udHJvbCA9IG5ldyBUZXh0Qm94Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBUZXh0Qm94Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGV4dEFyZWFDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXRvcic6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgRWRpdG9yQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0b3ItbWluaW1hbCc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgRWRpdG9yQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgY29udHJvbC5taW5pbWFsID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0aWxlcyc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGlsZXNDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgY29udHJvbENvbmZpZy5jaGVja2JveExhYmVsID0gZmllbGQuY2hlY2tib3hMYWJlbDtcbiAgICAgICAgY29udHJvbCA9IG5ldyBDaGVja2JveENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hlY2tsaXN0JzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBDaGVja0xpc3RDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBSYWRpb0NvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBTZWxlY3RDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FkZHJlc3MnOlxuICAgICAgICBjb250cm9sQ29uZmlnLnJlcXVpcmVkID0gZmllbGQucmVxdWlyZWQgfHwgZmFsc2U7XG4gICAgICAgIGlmIChIZWxwZXJzLmlzQmxhbmsoY29udHJvbENvbmZpZy5jb25maWcpKSB7XG4gICAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5yZXF1aXJlZCA9IGZpZWxkLnJlcXVpcmVkO1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5yZWFkT25seSA9IGNvbnRyb2xDb25maWcucmVhZE9ubHk7XG4gICAgICAgIGlmIChmaWVsZC5maWVsZHMgJiYgZmllbGQuZmllbGRzLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAobGV0IHN1YmZpZWxkIG9mIGZpZWxkLmZpZWxkcykge1xuICAgICAgICAgICAgY29udHJvbENvbmZpZy5jb25maWdbc3ViZmllbGQubmFtZV0gPSB7XG4gICAgICAgICAgICAgIHJlcXVpcmVkOiAhIXN1YmZpZWxkLnJlcXVpcmVkLFxuICAgICAgICAgICAgICBoaWRkZW46ICEhc3ViZmllbGQucmVhZE9ubHksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkoc3ViZmllbGQubGFiZWwpKSB7XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnW3N1YmZpZWxkLm5hbWVdLmxhYmVsID0gc3ViZmllbGQubGFiZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eShzdWJmaWVsZC5tYXhMZW5ndGgpKSB7XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnW3N1YmZpZWxkLm5hbWVdLm1heGxlbmd0aCA9IHN1YmZpZWxkLm1heExlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRyb2xDb25maWcucmVxdWlyZWQgPSBjb250cm9sQ29uZmlnLnJlcXVpcmVkIHx8IHN1YmZpZWxkLnJlcXVpcmVkO1xuICAgICAgICAgICAgaWYgKHN1YmZpZWxkLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICBpZiAoSGVscGVycy5pc0JsYW5rKGNvbnRyb2xDb25maWcudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbENvbmZpZy52YWx1ZSA9IHt9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcudmFsdWVbc3ViZmllbGQubmFtZV0gPSBzdWJmaWVsZC5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN1YmZpZWxkLm5hbWUgPT09ICdjb3VudHJ5SUQnKSB7XG4gICAgICAgICAgICAgIGlmIChIZWxwZXJzLmlzQmxhbmsoY29udHJvbENvbmZpZy52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLnZhbHVlID0ge307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udHJvbENvbmZpZy52YWx1ZVtzdWJmaWVsZC5uYW1lXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3ViZmllbGQubmFtZSA9PT0gJ3N0YXRlJyB8fCBzdWJmaWVsZC5uYW1lID09PSAnY291bnRyeUlEJykge1xuICAgICAgICAgICAgICBpZiAoc3ViZmllbGQubmFtZSA9PT0gJ2NvdW50cnlJRCcpIHtcbiAgICAgICAgICAgICAgICBzdWJmaWVsZC5vcHRpb25zVHlwZSA9ICdDb3VudHJ5JztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIXN1YmZpZWxkLm9wdGlvbnNVcmwpIHtcbiAgICAgICAgICAgICAgICBzdWJmaWVsZC5vcHRpb25zVXJsID0gYG9wdGlvbnMvJHtzdWJmaWVsZC5vcHRpb25zVHlwZX1gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnW3N1YmZpZWxkLm5hbWVdLnBpY2tlckNvbmZpZyA9IHRoaXMuZ2V0Q29udHJvbE9wdGlvbnMoc3ViZmllbGQsIGh0dHAsIGNvbmZpZywgZmllbGREYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbENvbmZpZy5pc0VtcHR5ID0gdGhpcy5pc0FkZHJlc3NFbXB0eTtcbiAgICAgICAgY29udHJvbCA9IG5ldyBBZGRyZXNzQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBGaWxlQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXN0b20nOlxuICAgICAgICBjb250cm9sID0gbmV3IEN1c3RvbUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29udHJvbCA9IG5ldyBUZXh0Qm94Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9sO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRDcmVhdGVDb250cm9sKGZpZWxkKTogYm9vbGVhbiB7XG4gICAgaWYgKGZpZWxkLnN5c3RlbVJlcXVpcmVkKSB7XG4gICAgICBmaWVsZC5yZWFkT25seSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBmaWVsZC5uYW1lICE9PSAnaWQnICYmXG4gICAgICAoZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uICE9PSAnU1lTVEVNJyB8fCBbJ2FkZHJlc3MnLCAnYmlsbGluZ0FkZHJlc3MnLCAnc2Vjb25kYXJ5QWRkcmVzcyddLmluZGV4T2YoZmllbGQubmFtZSkgIT09IC0xKSAmJlxuICAgICAgIWZpZWxkLnJlYWRPbmx5XG4gICAgKTtcbiAgfVxuXG4gIHRvQ29udHJvbHMoXG4gICAgbWV0YSxcbiAgICBjdXJyZW5jeUZvcm1hdCxcbiAgICBodHRwLFxuICAgIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuIH0sXG4gICAgb3ZlcnJpZGVzPzogYW55LFxuICAgIGZvclRhYmxlOiBib29sZWFuID0gZmFsc2UsXG4gICkge1xuICAgIGxldCBjb250cm9scyA9IFtdO1xuICAgIGlmIChtZXRhICYmIG1ldGEuZmllbGRzKSB7XG4gICAgICBsZXQgZmllbGRzID0gbWV0YS5maWVsZHM7XG4gICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkQ3JlYXRlQ29udHJvbChmaWVsZCkpIHtcbiAgICAgICAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbEZvckZpZWxkKGZpZWxkLCBodHRwLCBjb25maWcsIG92ZXJyaWRlcywgZm9yVGFibGUpO1xuICAgICAgICAgIC8vIFNldCBjdXJyZW5jeSBmb3JtYXRcbiAgICAgICAgICBpZiAoY29udHJvbC5zdWJUeXBlID09PSAnY3VycmVuY3knKSB7XG4gICAgICAgICAgICBjb250cm9sLmN1cnJlbmN5Rm9ybWF0ID0gY3VycmVuY3lGb3JtYXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEFkZCB0byBjb250cm9sc1xuICAgICAgICAgIGNvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY29udHJvbHM7XG4gIH1cblxuICB0b1RhYmxlQ29udHJvbHMobWV0YSwgY3VycmVuY3lGb3JtYXQsIGh0dHAsIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuIH0sIG92ZXJyaWRlcz86IGFueSkge1xuICAgIGxldCBjb250cm9scyA9IHRoaXMudG9Db250cm9scyhtZXRhLCBjdXJyZW5jeUZvcm1hdCwgaHR0cCwgY29uZmlnLCBvdmVycmlkZXMsIHRydWUpO1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBjb250cm9scy5mb3JFYWNoKChjb250cm9sOiBCYXNlQ29udHJvbCkgPT4ge1xuICAgICAgcmV0W2NvbnRyb2wua2V5XSA9IHtcbiAgICAgICAgZWRpdG9yVHlwZTogY29udHJvbC5fX3R5cGUsXG4gICAgICAgIGVkaXRvckNvbmZpZzogY29udHJvbC5fX2NvbmZpZyxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHRvRmllbGRTZXRzKFxuICAgIG1ldGEsXG4gICAgY3VycmVuY3lGb3JtYXQsXG4gICAgaHR0cCxcbiAgICBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiB9LFxuICAgIG92ZXJyaWRlcz8sXG4gICAgZGF0YT86IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4gICkge1xuICAgIGxldCBmaWVsZHNldHM6IEFycmF5PE5vdm9GaWVsZHNldD4gPSBbXTtcbiAgICBsZXQgcmFuZ2VzID0gW107XG4gICAgaWYgKG1ldGEgJiYgbWV0YS5maWVsZHMpIHtcbiAgICAgIGxldCBmaWVsZHMgPSBtZXRhLmZpZWxkc1xuICAgICAgICAubWFwKChmaWVsZCkgPT4ge1xuICAgICAgICAgIGlmICghZmllbGQuaGFzT3duUHJvcGVydHkoJ3NvcnRPcmRlcicpKSB7XG4gICAgICAgICAgICBmaWVsZC5zb3J0T3JkZXIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAtIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmaWVsZDtcbiAgICAgICAgfSlcbiAgICAgICAgLnNvcnQoSGVscGVycy5zb3J0QnlGaWVsZChbJ3NvcnRPcmRlcicsICduYW1lJ10pKTtcbiAgICAgIGlmIChtZXRhLnNlY3Rpb25IZWFkZXJzICYmIG1ldGEuc2VjdGlvbkhlYWRlcnMubGVuZ3RoKSB7XG4gICAgICAgIG1ldGEuc2VjdGlvbkhlYWRlcnMuc29ydChIZWxwZXJzLnNvcnRCeUZpZWxkKFsnc29ydE9yZGVyJywgJ25hbWUnXSkpO1xuICAgICAgICBtZXRhLnNlY3Rpb25IZWFkZXJzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5lbmFibGVkKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5zb3J0T3JkZXIgPiAwICYmIGZpZWxkc2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgZmllbGRzZXRzLnB1c2goe1xuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBbXSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgbWF4OiBpdGVtLnNvcnRPcmRlciAtIDEsXG4gICAgICAgICAgICAgICAgZmllbGRzZXRJZHg6IDAsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmllbGRzZXRzLnB1c2goe1xuICAgICAgICAgICAgICB0aXRsZTogaXRlbS5sYWJlbCxcbiAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uIHx8ICdiaGktc2VjdGlvbicsXG4gICAgICAgICAgICAgIGNvbnRyb2xzOiBbXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgICBtaW46IGl0ZW0uc29ydE9yZGVyLFxuICAgICAgICAgICAgICBtYXg6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICAgICAgICBmaWVsZHNldElkeDogZmllbGRzZXRzLmxlbmd0aCAtIDEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChpID4gMCAmJiBmaWVsZHNldHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICByYW5nZXNbZmllbGRzZXRzLmxlbmd0aCAtIDJdLm1heCA9IGl0ZW0uc29ydE9yZGVyIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJhbmdlcy5sZW5ndGgpIHtcbiAgICAgICAgICBmaWVsZHNldHMucHVzaCh7XG4gICAgICAgICAgICBjb250cm9sczogW10sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgICAgIGZpZWxkc2V0SWR4OiAwLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWVsZHNldHMucHVzaCh7XG4gICAgICAgICAgY29udHJvbHM6IFtdLFxuICAgICAgICB9KTtcbiAgICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICAgIGZpZWxkc2V0SWR4OiAwLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zaG91bGRDcmVhdGVDb250cm9sKGZpZWxkKSkge1xuICAgICAgICAgIGNvbnN0IGZpZWxkRGF0YTogYW55ID0gZGF0YSAmJiBkYXRhW2ZpZWxkLm5hbWVdID8gZGF0YVtmaWVsZC5uYW1lXSA6IG51bGw7XG4gICAgICAgICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2xGb3JGaWVsZChmaWVsZCwgaHR0cCwgY29uZmlnLCBvdmVycmlkZXMsIHVuZGVmaW5lZCwgZmllbGREYXRhKTtcbiAgICAgICAgICAvLyBTZXQgY3VycmVuY3kgZm9ybWF0XG4gICAgICAgICAgaWYgKGNvbnRyb2wuc3ViVHlwZSA9PT0gJ2N1cnJlbmN5Jykge1xuICAgICAgICAgICAgY29udHJvbC5jdXJyZW5jeUZvcm1hdCA9IGN1cnJlbmN5Rm9ybWF0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgbG9jYXRpb24gPSByYW5nZXMuZmluZCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChpdGVtLm1pbiA8PSBmaWVsZC5zb3J0T3JkZXIgJiYgZmllbGQuc29ydE9yZGVyIDw9IGl0ZW0ubWF4KSB8fCAoaXRlbS5taW4gPD0gZmllbGQuc29ydE9yZGVyICYmIGl0ZW0ubWluID09PSBpdGVtLm1heCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICAgICAgICAvLyBBZGQgdG8gY29udHJvbHNcbiAgICAgICAgICAgIGZpZWxkc2V0c1tsb2NhdGlvbi5maWVsZHNldElkeF0uY29udHJvbHMucHVzaChjb250cm9sKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZmllbGRzZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBmaWVsZHNldHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjb250cm9sczogdGhpcy50b0NvbnRyb2xzKG1ldGEsIGN1cnJlbmN5Rm9ybWF0LCBodHRwLCBjb25maWcpLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9XG4gIH1cblxuICBnZXRDb250cm9sT3B0aW9ucyhmaWVsZDogYW55LCBodHRwOiBhbnksIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuIH0sIGZpZWxkRGF0YT86IGFueSk6IGFueSB7XG4gICAgLy8gVE9ETzogVGhlIHRva2VuIHByb3BlcnR5IG9mIGNvbmZpZyBpcyB0aGUgb25seSBwcm9wZXJ0eSB1c2VkOyBqdXN0IHBhc3MgaW4gYHRva2VuOiBzdHJpbmdgXG4gICAgaWYgKGZpZWxkLmRhdGFUeXBlID09PSAnQm9vbGVhbicgJiYgIWZpZWxkLm9wdGlvbnMpIHtcbiAgICAgIC8vIFRPRE86IGRhdGFUeXBlIHNob3VsZCBvbmx5IGJlIGRldGVybWluZWQgYnkgYGRldGVybWluZUlucHV0VHlwZWAgd2hpY2ggZG9lc24ndCBldmVyIHJldHVybiAnQm9vbGVhbicgaXRcbiAgICAgIC8vIFRPRE86IChjb250LikgcmV0dXJucyBgdGlsZXNgXG4gICAgICByZXR1cm4gW3sgdmFsdWU6IGZhbHNlLCBsYWJlbDogdGhpcy5sYWJlbHMubm8gfSwgeyB2YWx1ZTogdHJ1ZSwgbGFiZWw6IHRoaXMubGFiZWxzLnllcyB9XTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLndvcmtmbG93T3B0aW9ucyAmJiBmaWVsZERhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFdvcmtmbG93T3B0aW9ucyhmaWVsZC53b3JrZmxvd09wdGlvbnMsIGZpZWxkRGF0YSk7XG4gICAgfSBlbHNlIGlmIChmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24gPT09ICdTUEVDSUFMSVpFRF9PUFRJT05TJykge1xuICAgICAgcmV0dXJuIGZpZWxkLm9wdGlvbnMuZmlsdGVyKChvKSA9PiAhby5yZWFkT25seSk7XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zVXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zU2VydmljZS5nZXRPcHRpb25zQ29uZmlnKGh0dHAsIGZpZWxkLCBjb25maWcpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShmaWVsZC5vcHRpb25zKSAmJiBmaWVsZC50eXBlID09PSAnY2hpcHMnKSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IGZpZWxkLm9wdGlvbnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmaWVsZDogJ3ZhbHVlJyxcbiAgICAgICAgZm9ybWF0OiAnJGxhYmVsJyxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zKSB7XG4gICAgICByZXR1cm4gZmllbGQub3B0aW9ucztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldFdvcmtmbG93T3B0aW9ucyhcbiAgICB3b3JrZmxvd09wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4gICAgZmllbGREYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICApOiBBcnJheTx7IHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7IGxhYmVsOiBzdHJpbmcgfCBudW1iZXIgfT4ge1xuICAgIGxldCBjdXJyZW50VmFsdWU6IHsgdmFsdWU6IHN0cmluZyB8IG51bWJlcjsgbGFiZWw6IHN0cmluZyB8IG51bWJlciB9O1xuICAgIGlmIChmaWVsZERhdGEuaWQpIHtcbiAgICAgIGN1cnJlbnRWYWx1ZSA9IHsgdmFsdWU6IGZpZWxkRGF0YS5pZCwgbGFiZWw6IGZpZWxkRGF0YS5sYWJlbCA/IGZpZWxkRGF0YS5sYWJlbCA6IGZpZWxkRGF0YS5pZCB9O1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRXb3JrZmxvd09wdGlvbjogbnVtYmVyIHwgc3RyaW5nID0gZmllbGREYXRhLmlkID8gZmllbGREYXRhLmlkIDogJ2luaXRpYWwnO1xuICAgIGxldCB1cGRhdGVXb3JrZmxvd09wdGlvbnM6IEFycmF5PHsgdmFsdWU6IHN0cmluZyB8IG51bWJlcjsgbGFiZWw6IHN0cmluZyB8IG51bWJlciB9PiA9IHdvcmtmbG93T3B0aW9uc1tjdXJyZW50V29ya2Zsb3dPcHRpb25dIHx8IFtdO1xuXG4gICAgaWYgKGN1cnJlbnRWYWx1ZSAmJiAhdXBkYXRlV29ya2Zsb3dPcHRpb25zLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSBjdXJyZW50VmFsdWUudmFsdWUpKSB7XG4gICAgICB1cGRhdGVXb3JrZmxvd09wdGlvbnMudW5zaGlmdChjdXJyZW50VmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB1cGRhdGVXb3JrZmxvd09wdGlvbnM7XG4gIH1cblxuICBzZXRJbml0aWFsVmFsdWVzKGNvbnRyb2xzOiBBcnJheTxOb3ZvQ29udHJvbENvbmZpZz4sIHZhbHVlczogYW55LCBrZWVwQ2xlYW4/OiBib29sZWFuLCBrZXlPdmVycmlkZT86IHN0cmluZykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBjb250cm9sc1tpXTtcbiAgICAgIGNvbnN0IGtleSA9IGtleU92ZXJyaWRlID8gY29udHJvbC5rZXkucmVwbGFjZShrZXlPdmVycmlkZSwgJycpIDogY29udHJvbC5rZXk7XG4gICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNba2V5XTtcblxuICAgICAgaWYgKEhlbHBlcnMuaXNCbGFuayh2YWx1ZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuZmlsdGVyKCh2YWwpID0+ICEoT2JqZWN0LmtleXModmFsKS5sZW5ndGggPT09IDAgJiYgdmFsLmNvbnN0cnVjdG9yID09PSBPYmplY3QpKTtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZS5kYXRhICYmIHZhbHVlLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29udHJvbC5kYXRhVHlwZSA9PT0gJ0RhdGUnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgY29udHJvbC5vcHRpb25zVHlwZSAhPT0gJ3NraXBDb252ZXJzaW9uJykge1xuICAgICAgICB2YWx1ZSA9IGRhdGVGbnMuc3RhcnRPZkRheSh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRyb2wudmFsdWUgPSB2YWx1ZTtcbiAgICAgIC8vIFRPRE86IGtlZXBDbGVhbiBpcyBub3QgcmVxdWlyZWQsIGJ1dCBpcyBhbHdheXMgdXNlZC4gSXQgc2hvdWxkIGRlZmF1bHQgKHRvIHRydWU/KVxuICAgICAgY29udHJvbC5kaXJ0eSA9ICFrZWVwQ2xlYW47XG4gICAgfVxuICB9XG5cbiAgc2V0SW5pdGlhbFZhbHVlc0ZpZWxkc2V0cyhmaWVsZHNldHM6IEFycmF5PE5vdm9GaWVsZHNldD4sIHZhbHVlcywga2VlcENsZWFuPzogYm9vbGVhbikge1xuICAgIGZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgdGhpcy5zZXRJbml0aWFsVmFsdWVzKGZpZWxkc2V0LmNvbnRyb2xzLCB2YWx1ZXMsIGtlZXBDbGVhbik7XG4gICAgfSk7XG4gIH1cblxuICBmb3JjZVNob3dBbGxDb250cm9scyhjb250cm9sczogQXJyYXk8Tm92b0NvbnRyb2xDb25maWc+KSB7XG4gICAgY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgY29udHJvbC5oaWRkZW4gPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlU2hvd0FsbENvbnRyb2xzSW5GaWVsZHNldHMoZmllbGRzZXRzOiBBcnJheTxOb3ZvRmllbGRzZXQ+KSB7XG4gICAgZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgIGNvbnRyb2wuaGlkZGVuID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlVmFsaWRhdGlvbihmb3JtOiBOb3ZvRm9ybUdyb3VwKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXMoZm9ybS5jb250cm9scykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGxldCBjb250cm9sOiBhbnkgPSBmb3JtLmNvbnRyb2xzW2tleV07XG4gICAgICBpZiAoY29udHJvbC5yZXF1aXJlZCAmJiBIZWxwZXJzLmlzQmxhbmsoZm9ybS52YWx1ZVtjb250cm9sLmtleV0pKSB7XG4gICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc0FkZHJlc3NFbXB0eShjb250cm9sOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgZmllbGRMaXN0OiBzdHJpbmdbXSA9IFsnYWRkcmVzczEnLCAnYWRkcmVzczInLCAnY2l0eScsICdzdGF0ZScsICd6aXAnLCAnY291bnRyeUlEJ107XG4gICAgbGV0IHZhbGlkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBpZiAoY29udHJvbC52YWx1ZSAmJiBjb250cm9sLmNvbmZpZykge1xuICAgICAgZmllbGRMaXN0LmZvckVhY2goKHN1YmZpZWxkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICgoc3ViZmllbGQgIT09ICdjb3VudHJ5SUQnICYmXG4gICAgICAgICAgICAhSGVscGVycy5pc0VtcHR5KGNvbnRyb2wuY29uZmlnW3N1YmZpZWxkXSkgJiZcbiAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnW3N1YmZpZWxkXS5yZXF1aXJlZCAmJlxuICAgICAgICAgICAgKEhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlW3N1YmZpZWxkXSkgfHwgSGVscGVycy5pc0VtcHR5KGNvbnRyb2wudmFsdWVbc3ViZmllbGRdKSkpIHx8XG4gICAgICAgICAgICAoc3ViZmllbGQgPT09ICdjb3VudHJ5SUQnICYmXG4gICAgICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29udHJvbC5jb25maWcuY291bnRyeUlEKSAmJlxuICAgICAgICAgICAgICBjb250cm9sLmNvbmZpZy5jb3VudHJ5SUQucmVxdWlyZWQgJiZcbiAgICAgICAgICAgICAgSGVscGVycy5pc0VtcHR5KGNvbnRyb2wudmFsdWUuY291bnRyeU5hbWUpKSkgJiZcbiAgICAgICAgICAhKFxuICAgICAgICAgICAgc3ViZmllbGQgPT09ICdzdGF0ZScgJiZcbiAgICAgICAgICAgICFIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZS5jb3VudHJ5TmFtZSkgJiZcbiAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZyAmJlxuICAgICAgICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zICYmXG4gICAgICAgICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMubGVuZ3RoID09PSAwXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGFydERhdGVGcm9tUmFuZ2UoZGF0ZVJhbmdlOiB7IG1pbkRhdGU6IHN0cmluZzsgbWluT2Zmc2V0OiBudW1iZXIgfSk6IERhdGUge1xuICAgIGlmIChkYXRlUmFuZ2UubWluRGF0ZSkge1xuICAgICAgcmV0dXJuIGRhdGVGbnMucGFyc2UoZGF0ZVJhbmdlLm1pbkRhdGUpO1xuICAgIH0gZWxzZSBpZiAoZGF0ZVJhbmdlLm1pbk9mZnNldCkge1xuICAgICAgcmV0dXJuIGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZUb2RheSgpLCBkYXRlUmFuZ2UubWluT2Zmc2V0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtaW4gc3RhcnQgZGF0ZSBvZiBhIERhdGUgYmFzZSBvbiBmaWVsZCBkYXRhLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTdGFydERhdGUoZmllbGQ6IGFueSk6IERhdGUgfCBudWxsIHtcbiAgICBpZiAoZmllbGQuYWxsb3dlZERhdGVSYW5nZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhcnREYXRlRnJvbVJhbmdlKGZpZWxkLmFsbG93ZWREYXRlUmFuZ2UpO1xuICAgIH1cbiAgICAvLyB0aGVyZSBpcyBubyByZXN0cmljdGlvbiBvbiB0aGUgc3RhcnQgZGF0ZVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBpbmZlclN0YXJ0RGF0ZShjb250cm9sQ29uZmlnLCBmaWVsZCkge1xuICAgIGlmIChmaWVsZC5kYXRhVHlwZSA9PT0gJ0RhdGUnKSB7XG4gICAgICBjb25zdCBzdGFydERhdGUgPSB0aGlzLmdldFN0YXJ0RGF0ZShmaWVsZCk7XG4gICAgICBpZiAoc3RhcnREYXRlKSB7XG4gICAgICAgIGNvbnRyb2xDb25maWcuc3RhcnREYXRlID0gc3RhcnREYXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXJ0RGF0ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==