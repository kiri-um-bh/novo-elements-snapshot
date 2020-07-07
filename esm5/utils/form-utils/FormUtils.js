/**
 * @fileoverview added by tsickle
 * Generated from: utils/form-utils/FormUtils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var FormUtils = /** @class */ (function () {
    function FormUtils(labels, optionsService) {
        this.labels = labels;
        this.optionsService = optionsService;
        this.ASSOCIATED_ENTITY_LIST = [
            'Candidate',
            'ClientContact',
            'ClientCorporation',
            'CorporationDepartment',
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
    FormUtils.prototype.toFormGroup = /**
     * @param {?} controls
     * @return {?}
     */
    function (controls) {
        /** @type {?} */
        var group = {};
        controls.forEach((/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var value = Helpers.isBlank(control.value) ? '' : control.value;
            group[control.key] = new NovoFormControl(value, control);
        }));
        return new NovoFormGroup(group);
    };
    /**
     * @return {?}
     */
    FormUtils.prototype.emptyFormGroup = /**
     * @return {?}
     */
    function () {
        return new NovoFormGroup({});
    };
    /**
     * @param {?} formGroup
     * @param {?} controls
     * @return {?}
     */
    FormUtils.prototype.addControls = /**
     * @param {?} formGroup
     * @param {?} controls
     * @return {?}
     */
    function (formGroup, controls) {
        controls.forEach((/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var value = Helpers.isBlank(control.value) ? '' : control.value;
            /** @type {?} */
            var formControl = new NovoFormControl(value, control);
            formGroup.addControl(control.key, formControl);
        }));
    };
    /**
     * @param {?} formGroup
     * @param {?} controls
     * @return {?}
     */
    FormUtils.prototype.removeControls = /**
     * @param {?} formGroup
     * @param {?} controls
     * @return {?}
     */
    function (formGroup, controls) {
        controls.forEach((/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            formGroup.removeControl(control.key);
        }));
    };
    /**
     * @name toFormGroupFromFieldset
     * @param fieldsets
     */
    /**
     * \@name toFormGroupFromFieldset
     * @param {?} fieldsets
     * @return {?}
     */
    FormUtils.prototype.toFormGroupFromFieldset = /**
     * \@name toFormGroupFromFieldset
     * @param {?} fieldsets
     * @return {?}
     */
    function (fieldsets) {
        /** @type {?} */
        var controls = [];
        fieldsets.forEach((/**
         * @param {?} fieldset
         * @return {?}
         */
        function (fieldset) {
            controls.push.apply(controls, tslib_1.__spread(fieldset.controls));
        }));
        return this.toFormGroup(controls);
    };
    /**
     * @name hasAssociatedEntity
     * @param field
     */
    /**
     * \@name hasAssociatedEntity
     * @param {?} field
     * @return {?}
     */
    FormUtils.prototype.hasAssociatedEntity = /**
     * \@name hasAssociatedEntity
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return !!(field.associatedEntity && ~this.ASSOCIATED_ENTITY_LIST.indexOf(field.associatedEntity.entity));
    };
    /**
     * @name determineInputType
     * @param field
     */
    /**
     * \@name determineInputType
     * @param {?} field
     * @return {?}
     */
    FormUtils.prototype.determineInputType = /**
     * \@name determineInputType
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var type;
        /** @type {?} */
        var dataSpecializationTypeMap = {
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
            SimplifiedOptionsLookup: 'select',
        };
        /** @type {?} */
        var dataTypeToTypeMap = {
            Timestamp: 'date',
            Date: 'date',
            Boolean: 'tiles',
        };
        /** @type {?} */
        var inputTypeToTypeMap = {
            CHECKBOX: 'radio',
            RADIO: 'radio',
            SELECT: 'select',
            TILES: 'tiles',
        };
        /** @type {?} */
        var inputTypeMultiToTypeMap = {
            CHECKBOX: 'checklist',
            RADIO: 'checklist',
            SELECT: 'chips',
        };
        /** @type {?} */
        var typeToTypeMap = {
            file: 'file',
            COMPOSITE: 'address',
        };
        /** @type {?} */
        var numberDataTypeToTypeMap = {
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
            else if (['SimplifiedOptionsLookup', 'SpecializedOptionsLookup'].includes(field.dataType)) {
                if (field.options && Object.keys(inputTypeToTypeMap).indexOf(field.inputType) > -1 && !field.multiValue) {
                    type = inputTypeToTypeMap[field.inputType];
                }
                else if (field.options && Object.keys(inputTypeMultiToTypeMap).indexOf(field.inputType) > -1 && field.multiValue) {
                    type = inputTypeMultiToTypeMap[field.inputType];
                }
                else {
                    type = dataSpecializationTypeMap[field.dataType];
                }
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
    };
    /**
     * @param {?} key
     * @return {?}
     */
    FormUtils.prototype.isFieldEncrypted = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return key.indexOf('customEncrypted') > -1;
    };
    /**
     * @param {?} field
     * @param {?} http
     * @param {?} config
     * @param {?=} overrides
     * @param {?=} forTable
     * @param {?=} fieldData
     * @return {?}
     */
    FormUtils.prototype.getControlForField = /**
     * @param {?} field
     * @param {?} http
     * @param {?} config
     * @param {?=} overrides
     * @param {?=} forTable
     * @param {?=} fieldData
     * @return {?}
     */
    function (field, http, config, overrides, forTable, fieldData) {
        var e_1, _a;
        if (forTable === void 0) { forTable = false; }
        // TODO: if field.type overrides `determineInputType` we should use it in that method or use this method
        // TODO: (cont.) as the setter of the field argument
        /** @type {?} */
        var type = this.determineInputType(field) || field.type;
        /** @type {?} */
        var control;
        /** @type {?} */
        var controlConfig = {
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
        var optionsConfig = this.getControlOptions(field, http, config, fieldData);
        if (Array.isArray(optionsConfig) && !(type === 'chips' || type === 'picker')) {
            controlConfig.options = optionsConfig;
        }
        else if (Array.isArray(optionsConfig) && (type === 'chips' || type === 'picker')) {
            controlConfig.config = {
                options: optionsConfig,
            };
        }
        else if (optionsConfig) {
            controlConfig.config = tslib_1.__assign({}, optionsConfig, (controlConfig && controlConfig.config));
        }
        if (type === 'year') {
            controlConfig.maxlength = 4;
        }
        // TODO: Overrides should be an iterable of all properties (potentially a private method)
        /** @type {?} */
        var overrideResultsTemplate;
        /** @type {?} */
        var overridePreviewTemplate;
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
                controlConfig.weekStart = config && config.weekStart ? config.weekStart : 0;
                control = new DateTimeControl(controlConfig);
                break;
            case 'date':
                controlConfig.dateFormat = field.dateFormat;
                controlConfig.textMaskEnabled = field.textMaskEnabled;
                controlConfig.allowInvalidDate = field.allowInvalidDate;
                controlConfig.military = config ? !!config.military : false;
                controlConfig.weekStart = config && config.weekStart ? config.weekStart : 0;
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
                    try {
                        for (var _b = tslib_1.__values(field.fields), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var subfield = _c.value;
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
                                    subfield.optionsUrl = "options/" + subfield.optionsType;
                                }
                                controlConfig.config[subfield.name].pickerConfig = this.getControlOptions(subfield, http, config, fieldData);
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
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
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    FormUtils.prototype.shouldCreateControl = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (field.systemRequired) {
            field.readOnly = false;
        }
        return (field.name !== 'id' &&
            (!['SYSTEM', 'SECTION_HEADER'].includes(field.dataSpecialization) ||
                ['address', 'billingAddress', 'secondaryAddress'].includes(field.name)) &&
            !field.readOnly);
    };
    /**
     * @param {?} meta
     * @param {?} currencyFormat
     * @param {?} http
     * @param {?} config
     * @param {?=} overrides
     * @param {?=} forTable
     * @return {?}
     */
    FormUtils.prototype.toControls = /**
     * @param {?} meta
     * @param {?} currencyFormat
     * @param {?} http
     * @param {?} config
     * @param {?=} overrides
     * @param {?=} forTable
     * @return {?}
     */
    function (meta, currencyFormat, http, config, overrides, forTable) {
        var _this = this;
        if (forTable === void 0) { forTable = false; }
        /** @type {?} */
        var controls = [];
        if (meta && meta.fields) {
            /** @type {?} */
            var fields = meta.fields;
            fields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                if (_this.shouldCreateControl(field)) {
                    /** @type {?} */
                    var control = _this.getControlForField(field, http, config, overrides, forTable);
                    // Set currency format
                    if (control.subType === 'currency') {
                        control.currencyFormat = currencyFormat;
                    }
                    // Add to controls
                    controls.push(control);
                }
            }));
        }
        return controls;
    };
    /**
     * @param {?} meta
     * @param {?} currencyFormat
     * @param {?} http
     * @param {?} config
     * @param {?=} overrides
     * @return {?}
     */
    FormUtils.prototype.toTableControls = /**
     * @param {?} meta
     * @param {?} currencyFormat
     * @param {?} http
     * @param {?} config
     * @param {?=} overrides
     * @return {?}
     */
    function (meta, currencyFormat, http, config, overrides) {
        /** @type {?} */
        var controls = this.toControls(meta, currencyFormat, http, config, overrides, true);
        /** @type {?} */
        var ret = {};
        controls.forEach((/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            ret[control.key] = {
                editorType: control.__type,
                editorConfig: control.__config,
            };
        }));
        return ret;
    };
    /**
     * @param {?} meta
     * @param {?} currencyFormat
     * @param {?} http
     * @param {?} config
     * @param {?=} overrides
     * @param {?=} data
     * @return {?}
     */
    FormUtils.prototype.toFieldSets = /**
     * @param {?} meta
     * @param {?} currencyFormat
     * @param {?} http
     * @param {?} config
     * @param {?=} overrides
     * @param {?=} data
     * @return {?}
     */
    function (meta, currencyFormat, http, config, overrides, data) {
        var _this = this;
        /** @type {?} */
        var fieldsets = [];
        /** @type {?} */
        var formFields = [];
        if (meta && meta.fields) {
            formFields = this.getFormFields(meta);
            formFields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                if (_this.isHeader(field)) {
                    if (field.enabled) {
                        _this.insertHeaderToFieldsets(fieldsets, field);
                    }
                }
                else if (_this.isEmbeddedField(field)) {
                    _this.insertHeaderToFieldsets(fieldsets, field);
                    /** @type {?} */
                    var embeddedFields = _this.getEmbeddedFields(field);
                    embeddedFields.forEach((/**
                     * @param {?} embeddedField
                     * @return {?}
                     */
                    function (embeddedField) {
                        if (_this.shouldCreateControl(embeddedField)) {
                            /** @type {?} */
                            var control = _this.createControl(embeddedField, data, http, config, overrides, currencyFormat);
                            control = _this.markControlAsEmbedded(control, field.dataSpecialization ? field.dataSpecialization.toLowerCase() : null);
                            fieldsets[fieldsets.length - 1].controls.push(control);
                        }
                        else if (_this.isHeader(embeddedField)) {
                            _this.insertHeaderToFieldsets(fieldsets, embeddedField);
                        }
                    }));
                }
                else if (_this.shouldCreateControl(field)) {
                    /** @type {?} */
                    var control = _this.createControl(field, data, http, config, overrides, currencyFormat);
                    if (field.inlineEmbeddedAssociatedEntityField) {
                        control = _this.markControlAsEmbedded(control, 'inline_embedded');
                    }
                    if (fieldsets.length === 0) {
                        fieldsets.push({ controls: [] });
                    }
                    fieldsets[fieldsets.length - 1].controls.push(control);
                }
            }));
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
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    FormUtils.prototype.isEmbeddedField = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field.dataSpecialization && ['embedded'].includes(field.dataSpecialization.toLowerCase()) && !field.readOnly;
    };
    /**
     * @private
     * @param {?} field
     * @param {?} data
     * @param {?} http
     * @param {?} config
     * @param {?} overrides
     * @param {?} currencyFormat
     * @return {?}
     */
    FormUtils.prototype.createControl = /**
     * @private
     * @param {?} field
     * @param {?} data
     * @param {?} http
     * @param {?} config
     * @param {?} overrides
     * @param {?} currencyFormat
     * @return {?}
     */
    function (field, data, http, config, overrides, currencyFormat) {
        /** @type {?} */
        var fieldData = this.isEmbeddedFieldData(field, data) ? this.getEmbeddedFieldData(field, data) : this.getFieldData(field, data);
        /** @type {?} */
        var control = this.getControlForField(field, http, config, overrides, undefined, fieldData);
        // Set currency format
        if (control.subType === 'currency') {
            control.currencyFormat = currencyFormat;
        }
        return control;
    };
    /**
     * @private
     * @param {?} field
     * @param {?} data
     * @return {?}
     */
    FormUtils.prototype.isEmbeddedFieldData = /**
     * @private
     * @param {?} field
     * @param {?} data
     * @return {?}
     */
    function (field, data) {
        return data && field.name.includes('.');
    };
    /**
     * @private
     * @param {?} field
     * @param {?} data
     * @return {?}
     */
    FormUtils.prototype.getFieldData = /**
     * @private
     * @param {?} field
     * @param {?} data
     * @return {?}
     */
    function (field, data) {
        return (data && data[field.name]) || null;
    };
    /**
     * @private
     * @param {?} field
     * @param {?} data
     * @return {?}
     */
    FormUtils.prototype.getEmbeddedFieldData = /**
     * @private
     * @param {?} field
     * @param {?} data
     * @return {?}
     */
    function (field, data) {
        var _a = tslib_1.__read(field.name.split('.'), 2), parentFieldName = _a[0], fieldName = _a[1];
        return (data && data[parentFieldName] && data[parentFieldName][fieldName]) || null;
    };
    /**
     * @private
     * @param {?} meta
     * @return {?}
     */
    FormUtils.prototype.getFormFields = /**
     * @private
     * @param {?} meta
     * @return {?}
     */
    function (meta) {
        /** @type {?} */
        var sectionHeaders = meta.sectionHeaders
            ? meta.sectionHeaders.map((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                element.isSectionHeader = true;
                return element;
            }))
            : [];
        /** @type {?} */
        var fields = meta.fields.map((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            if (!field.hasOwnProperty('sortOrder')) {
                field.sortOrder = Number.MAX_SAFE_INTEGER - 1;
            }
            return field;
        }));
        // build list of fields that should be displayed inline but belong to associated entities
        /** @type {?} */
        var inlineEmbeddedAssociatedEntityFields = this.getInlineEmbeddedFields(fields);
        // remove the inline embedded fields because the associated entity fields were extracted above
        // and will be added to the regular list of fields. This prevents the fields from being added multiple times.
        fields = fields.filter((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return !f.dataSpecialization || f.dataSpecialization.toLowerCase() !== 'inline_embedded'; }));
        // sort fields
        return tslib_1.__spread(sectionHeaders, fields, inlineEmbeddedAssociatedEntityFields).sort(Helpers.sortByField(['sortOrder', 'name']));
    };
    /**
     * @private
     * @param {?} fields
     * @return {?}
     */
    FormUtils.prototype.getInlineEmbeddedFields = /**
     * @private
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
        var _this = this;
        /** @type {?} */
        var inlineEmbeddedAssociatedEntityFields = [];
        fields
            .filter((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.dataSpecialization && f.dataSpecialization.toLowerCase() === 'inline_embedded'; }))
            .forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            inlineEmbeddedAssociatedEntityFields = tslib_1.__spread(inlineEmbeddedAssociatedEntityFields, _this.getAssociatedFieldsForInlineEmbedded(f));
        }));
        return inlineEmbeddedAssociatedEntityFields;
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    FormUtils.prototype.getAssociatedFieldsForInlineEmbedded = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var associatedEntityFields = [];
        associatedEntityFields = this.getEmbeddedFields(field).map((/**
         * @param {?} aef
         * @return {?}
         */
        function (aef) {
            aef.inlineEmbeddedAssociatedEntityField = true;
            return aef;
        }));
        return associatedEntityFields;
    };
    /**
     * @private
     * @param {?} subHeader
     * @return {?}
     */
    FormUtils.prototype.getEmbeddedFields = /**
     * @private
     * @param {?} subHeader
     * @return {?}
     */
    function (subHeader) {
        return subHeader.associatedEntity.fields
            .filter((/**
         * @param {?} field
         * @return {?}
         */
        function (field) { return field.name !== 'id'; }))
            .map((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            if (!field.name.startsWith(subHeader.name + ".")) {
                field.name = subHeader.name + "." + field.name;
            }
            return field;
        }))
            .sort(Helpers.sortByField(['sortOrder', 'name']));
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    FormUtils.prototype.isHeader = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return (!Helpers.isBlank(field) &&
            ((field.hasOwnProperty('isSectionHeader') && field.isSectionHeader) ||
                (field.dataSpecialization && field.dataSpecialization.toLowerCase() === 'section_header')));
    };
    /**
     * @private
     * @param {?} fieldsets
     * @param {?} field
     * @return {?}
     */
    FormUtils.prototype.insertHeaderToFieldsets = /**
     * @private
     * @param {?} fieldsets
     * @param {?} field
     * @return {?}
     */
    function (fieldsets, field) {
        /** @type {?} */
        var constantProperties = {
            controls: [],
            isEmbedded: field.dataSpecialization && field.dataSpecialization.toLowerCase() === 'embedded',
            isInlineEmbedded: field.dataSpecialization && field.dataSpecialization.toLowerCase() === 'inline_embedded',
            key: field.name,
        };
        if (field.name && field.name.startsWith('customObject') && field.associatedEntity && field.associatedEntity.label) {
            fieldsets.push(tslib_1.__assign({ title: field.associatedEntity.label || field.label, icon: field.icon || 'bhi-card-expand' }, constantProperties));
        }
        else {
            fieldsets.push(tslib_1.__assign({ title: field.label, icon: field.icon || 'bhi-section' }, constantProperties));
        }
    };
    /**
     * @private
     * @param {?} control
     * @param {?=} dataSpecialization
     * @return {?}
     */
    FormUtils.prototype.markControlAsEmbedded = /**
     * @private
     * @param {?} control
     * @param {?=} dataSpecialization
     * @return {?}
     */
    function (control, dataSpecialization) {
        if (Helpers.isBlank(control['config'])) {
            control['config'] = {};
        }
        control['config']['embedded'] = true;
        control.isEmbedded = dataSpecialization === 'embedded';
        control.isInlineEmbedded = dataSpecialization === 'inline_embedded';
        return control;
    };
    /**
     * @param {?} field
     * @param {?} http
     * @param {?} config
     * @param {?=} fieldData
     * @return {?}
     */
    FormUtils.prototype.getControlOptions = /**
     * @param {?} field
     * @param {?} http
     * @param {?} config
     * @param {?=} fieldData
     * @return {?}
     */
    function (field, http, config, fieldData) {
        // TODO: The token property of config is the only property used; just pass in `token: string`
        if (field.dataType === 'Boolean' && !field.options) {
            // TODO: dataType should only be determined by `determineInputType` which doesn't ever return 'Boolean' it
            // TODO: (cont.) returns `tiles`
            return [{ value: false, label: this.labels.no }, { value: true, label: this.labels.yes }];
        }
        else if (field.workflowOptions && fieldData) {
            return this.getWorkflowOptions(field.workflowOptions, fieldData);
        }
        else if (field.dataSpecialization === 'SPECIALIZED_OPTIONS' ||
            (field.options && ['SpecializedOptionsLookup', 'SimplifiedOptionsLookup'].includes(field.dataType))) {
            return field.options.filter((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return !o.readOnly; }));
        }
        else if (field.optionsUrl) {
            return this.optionsService.getOptionsConfig(http, field, config);
        }
        else if (Array.isArray(field.options) && field.type === 'chips') {
            /** @type {?} */
            var options = field.options;
            return {
                field: 'value',
                format: '$label',
                options: options,
            };
        }
        else if (field.options) {
            return field.options;
        }
        return null;
    };
    /**
     * @private
     * @param {?} workflowOptions
     * @param {?} fieldData
     * @return {?}
     */
    FormUtils.prototype.getWorkflowOptions = /**
     * @private
     * @param {?} workflowOptions
     * @param {?} fieldData
     * @return {?}
     */
    function (workflowOptions, fieldData) {
        /** @type {?} */
        var currentValue;
        if (fieldData.id) {
            currentValue = { value: fieldData.id, label: fieldData.label ? fieldData.label : fieldData.id };
        }
        /** @type {?} */
        var currentWorkflowOption = fieldData.id ? fieldData.id : 'initial';
        /** @type {?} */
        var updateWorkflowOptions = workflowOptions[currentWorkflowOption] || [];
        if (currentValue && !updateWorkflowOptions.find((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.value === currentValue.value; }))) {
            updateWorkflowOptions.unshift(currentValue);
        }
        return updateWorkflowOptions;
    };
    /**
     * @param {?} controls
     * @param {?} values
     * @param {?=} keepClean
     * @param {?=} keyOverride
     * @return {?}
     */
    FormUtils.prototype.setInitialValues = /**
     * @param {?} controls
     * @param {?} values
     * @param {?=} keepClean
     * @param {?=} keyOverride
     * @return {?}
     */
    function (controls, values, keepClean, keyOverride) {
        for (var i = 0; i < controls.length; i++) {
            /** @type {?} */
            var control = controls[i];
            /** @type {?} */
            var key = keyOverride ? control.key.replace(keyOverride, '') : control.key;
            /** @type {?} */
            var value = values[key];
            if (Helpers.isBlank(value)) {
                continue;
            }
            if (Array.isArray(value) && value.length === 0) {
                continue;
            }
            if (Array.isArray(value) && value.length > 0) {
                value = value.filter((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) { return !(Object.keys(val).length === 0 && val.constructor === Object); }));
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
    };
    /**
     * @param {?} fieldsets
     * @param {?} values
     * @param {?=} keepClean
     * @return {?}
     */
    FormUtils.prototype.setInitialValuesFieldsets = /**
     * @param {?} fieldsets
     * @param {?} values
     * @param {?=} keepClean
     * @return {?}
     */
    function (fieldsets, values, keepClean) {
        var _this = this;
        fieldsets.forEach((/**
         * @param {?} fieldset
         * @return {?}
         */
        function (fieldset) {
            _this.setInitialValues(fieldset.controls, values, keepClean);
        }));
    };
    /**
     * @param {?} controls
     * @return {?}
     */
    FormUtils.prototype.forceShowAllControls = /**
     * @param {?} controls
     * @return {?}
     */
    function (controls) {
        controls.forEach((/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            control.hidden = false;
        }));
    };
    /**
     * @param {?} fieldsets
     * @return {?}
     */
    FormUtils.prototype.forceShowAllControlsInFieldsets = /**
     * @param {?} fieldsets
     * @return {?}
     */
    function (fieldsets) {
        fieldsets.forEach((/**
         * @param {?} fieldset
         * @return {?}
         */
        function (fieldset) {
            fieldset.controls.forEach((/**
             * @param {?} control
             * @return {?}
             */
            function (control) {
                control.hidden = false;
            }));
        }));
    };
    /**
     * @param {?} form
     * @return {?}
     */
    FormUtils.prototype.forceValidation = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        Object.keys(form.controls).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var control = form.controls[key];
            if (control.required && Helpers.isBlank(form.value[control.key])) {
                control.markAsDirty();
                control.markAsTouched();
            }
        }));
    };
    /**
     * @param {?} control
     * @return {?}
     */
    FormUtils.prototype.isAddressEmpty = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var fieldList = ['address1', 'address2', 'city', 'state', 'zip', 'countryID'];
        /** @type {?} */
        var valid = true;
        if (control.value && control.config) {
            fieldList.forEach((/**
             * @param {?} subfield
             * @return {?}
             */
            function (subfield) {
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
            }));
        }
        return valid;
    };
    /**
     * @private
     * @param {?} dateRange
     * @return {?}
     */
    FormUtils.prototype.getStartDateFromRange = /**
     * @private
     * @param {?} dateRange
     * @return {?}
     */
    function (dateRange) {
        if (dateRange.minDate) {
            return dateFns.parse(dateRange.minDate);
        }
        else if (dateRange.minOffset) {
            return dateFns.addDays(dateFns.startOfToday(), dateRange.minOffset);
        }
    };
    /**
     * Get the min start date of a Date base on field data.
     */
    /**
     * Get the min start date of a Date base on field data.
     * @private
     * @param {?} field
     * @return {?}
     */
    FormUtils.prototype.getStartDate = /**
     * Get the min start date of a Date base on field data.
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (field.allowedDateRange) {
            return this.getStartDateFromRange(field.allowedDateRange);
        }
        // there is no restriction on the start date
        return null;
    };
    /**
     * @private
     * @param {?} controlConfig
     * @param {?} field
     * @return {?}
     */
    FormUtils.prototype.inferStartDate = /**
     * @private
     * @param {?} controlConfig
     * @param {?} field
     * @return {?}
     */
    function (controlConfig, field) {
        if (field.dataType === 'Date') {
            /** @type {?} */
            var startDate = this.getStartDate(field);
            if (startDate) {
                controlConfig.startDate = startDate;
            }
            return startDate;
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    FormUtils.prototype.inflateEmbeddedProperties = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (data) {
            Object.keys(data)
                .filter((/**
             * @param {?} fieldName
             * @return {?}
             */
            function (fieldName) { return fieldName.includes('.'); }))
                .forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                var _a = tslib_1.__read(field.split('.'), 2), parentFieldName = _a[0], fieldName = _a[1];
                if (!data[parentFieldName]) {
                    data[parentFieldName] = {};
                }
                data[parentFieldName][fieldName] = data[field];
                delete data[field];
            }));
        }
        return data;
    };
    FormUtils.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FormUtils.ctorParameters = function () { return [
        { type: NovoLabelService },
        { type: OptionsService }
    ]; };
    return FormUtils;
}());
export { FormUtils };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybVV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL2Zvcm0tdXRpbHMvRm9ybVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDOztBQUVwQyxPQUFPLEVBQ0wsY0FBYyxFQUVkLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLFdBQVcsRUFDWCxlQUFlLEVBQ2YsYUFBYSxFQUNiLFdBQVcsRUFFWCxhQUFhLEVBQ2IsWUFBWSxFQUNaLGFBQWEsRUFDYixlQUFlLEVBQ2YsY0FBYyxFQUNkLFlBQVksRUFDWixXQUFXLEdBQ1osTUFBTSxrQ0FBa0MsQ0FBQztBQUMxQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUNqSSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXJDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRXpFO0lBb0NFLG1CQUFtQixNQUF3QixFQUFTLGNBQThCO1FBQS9ELFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBbENsRiwyQkFBc0IsR0FBYTtZQUNqQyxXQUFXO1lBQ1gsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQix1QkFBdUI7WUFDdkIsTUFBTTtZQUNOLGFBQWE7WUFDYixVQUFVO1lBQ1YsZUFBZTtZQUNmLFFBQVE7WUFDUixXQUFXO1NBQ1os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QWdCO2dCQUNoQixjQUFjOztJQXMxQnZCLGdCQUFDO0NBQUEsQUFwMUJELElBbzFCQztTQW4xQlksU0FBUzs7O0lBQ3BCLDJDQVdFOztJQUNGLHVDQW9CRTs7SUFFVSwyQkFBK0I7O0lBQUUsbUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuLy8gQXBwXG5pbXBvcnQge1xuICBBZGRyZXNzQ29udHJvbCxcbiAgQmFzZUNvbnRyb2wsXG4gIENoZWNrYm94Q29udHJvbCxcbiAgQ2hlY2tMaXN0Q29udHJvbCxcbiAgQ3VzdG9tQ29udHJvbCxcbiAgRGF0ZUNvbnRyb2wsXG4gIERhdGVUaW1lQ29udHJvbCxcbiAgRWRpdG9yQ29udHJvbCxcbiAgRmlsZUNvbnRyb2wsXG4gIE5vdm9Db250cm9sQ29uZmlnLFxuICBQaWNrZXJDb250cm9sLFxuICBSYWRpb0NvbnRyb2wsXG4gIFNlbGVjdENvbnRyb2wsXG4gIFRleHRBcmVhQ29udHJvbCxcbiAgVGV4dEJveENvbnRyb2wsXG4gIFRpbGVzQ29udHJvbCxcbiAgVGltZUNvbnRyb2wsXG59IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0vRm9ybUNvbnRyb2xzJztcbmltcG9ydCB7IEVudGl0eVBpY2tlclJlc3VsdCwgRW50aXR5UGlja2VyUmVzdWx0cyB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL3BpY2tlci9leHRyYXMvZW50aXR5LXBpY2tlci1yZXN1bHRzL0VudGl0eVBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0ZpZWxkc2V0LCBGb3JtRmllbGQgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9mb3JtL0Zvcm1JbnRlcmZhY2VzJztcbmltcG9ydCB7IE5vdm9Gb3JtQ29udHJvbCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0vTm92b0Zvcm1Db250cm9sJztcbmltcG9ydCB7IE5vdm9Gb3JtR3JvdXAgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9mb3JtL05vdm9Gb3JtR3JvdXAnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBPcHRpb25zU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvb3B0aW9ucy9PcHRpb25zU2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtVXRpbHMge1xuICBBU1NPQ0lBVEVEX0VOVElUWV9MSVNUOiBzdHJpbmdbXSA9IFtcbiAgICAnQ2FuZGlkYXRlJyxcbiAgICAnQ2xpZW50Q29udGFjdCcsXG4gICAgJ0NsaWVudENvcnBvcmF0aW9uJyxcbiAgICAnQ29ycG9yYXRpb25EZXBhcnRtZW50JyxcbiAgICAnTGVhZCcsXG4gICAgJ09wcG9ydHVuaXR5JyxcbiAgICAnSm9iT3JkZXInLFxuICAgICdDb3Jwb3JhdGVVc2VyJyxcbiAgICAnUGVyc29uJyxcbiAgICAnUGxhY2VtZW50JyxcbiAgXTtcbiAgRU5USVRZX1BJQ0tFUl9MSVNUOiBzdHJpbmdbXSA9IFtcbiAgICAnQ2FuZGlkYXRlJyxcbiAgICAnQ2FuZGlkYXRlVGV4dCcsXG4gICAgJ0NsaWVudCcsXG4gICAgJ0NsaWVudFRleHQnLFxuICAgICdDbGllbnRDb250YWN0JyxcbiAgICAnQ2xpZW50Q29udGFjdFRleHQnLFxuICAgICdDbGllbnRDb3Jwb3JhdGlvbicsXG4gICAgJ0NsaWVudENvcnBvcmF0aW9uVGV4dCcsXG4gICAgJ0xlYWQnLFxuICAgICdMZWFkVGV4dCcsXG4gICAgJ09wcG9ydHVuaXR5JyxcbiAgICAnT3Bwb3J0dW5pdHlUZXh0JyxcbiAgICAnSm9iT3JkZXInLFxuICAgICdKb2JPcmRlclRleHQnLFxuICAgICdDb3Jwb3JhdGVVc2VyJyxcbiAgICAnQ29ycG9yYXRlVXNlclRleHQnLFxuICAgICdQZXJzb24nLFxuICAgICdQZXJzb25UZXh0JyxcbiAgICAnUGxhY2VtZW50JyxcbiAgXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwdWJsaWMgb3B0aW9uc1NlcnZpY2U6IE9wdGlvbnNTZXJ2aWNlKSB7fVxuXG4gIHRvRm9ybUdyb3VwKGNvbnRyb2xzOiBBcnJheTxhbnk+KTogTm92b0Zvcm1Hcm91cCB7XG4gICAgY29uc3QgZ3JvdXA6IGFueSA9IHt9O1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWUpID8gJycgOiBjb250cm9sLnZhbHVlO1xuICAgICAgZ3JvdXBbY29udHJvbC5rZXldID0gbmV3IE5vdm9Gb3JtQ29udHJvbCh2YWx1ZSwgY29udHJvbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBOb3ZvRm9ybUdyb3VwKGdyb3VwKTtcbiAgfVxuXG4gIGVtcHR5Rm9ybUdyb3VwKCk6IE5vdm9Gb3JtR3JvdXAge1xuICAgIHJldHVybiBuZXcgTm92b0Zvcm1Hcm91cCh7fSk7XG4gIH1cblxuICBhZGRDb250cm9scyhmb3JtR3JvdXA6IE5vdm9Gb3JtR3JvdXAsIGNvbnRyb2xzOiBBcnJheTxOb3ZvQ29udHJvbENvbmZpZz4pOiB2b2lkIHtcbiAgICBjb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IEhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlKSA/ICcnIDogY29udHJvbC52YWx1ZTtcbiAgICAgIGNvbnN0IGZvcm1Db250cm9sID0gbmV3IE5vdm9Gb3JtQ29udHJvbCh2YWx1ZSwgY29udHJvbCk7XG4gICAgICBmb3JtR3JvdXAuYWRkQ29udHJvbChjb250cm9sLmtleSwgZm9ybUNvbnRyb2wpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlQ29udHJvbHMoZm9ybUdyb3VwOiBOb3ZvRm9ybUdyb3VwLCBjb250cm9sczogQXJyYXk8Tm92b0NvbnRyb2xDb25maWc+KTogdm9pZCB7XG4gICAgY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgZm9ybUdyb3VwLnJlbW92ZUNvbnRyb2woY29udHJvbC5rZXkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHRvRm9ybUdyb3VwRnJvbUZpZWxkc2V0XG4gICAqIEBwYXJhbSBmaWVsZHNldHNcbiAgICovXG4gIHRvRm9ybUdyb3VwRnJvbUZpZWxkc2V0KGZpZWxkc2V0czogQXJyYXk8Tm92b0ZpZWxkc2V0Pik6IE5vdm9Gb3JtR3JvdXAge1xuICAgIGNvbnN0IGNvbnRyb2xzOiBBcnJheTxOb3ZvRm9ybUNvbnRyb2w+ID0gW107XG4gICAgZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBjb250cm9scy5wdXNoKC4uLmZpZWxkc2V0LmNvbnRyb2xzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy50b0Zvcm1Hcm91cChjb250cm9scyk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaGFzQXNzb2NpYXRlZEVudGl0eVxuICAgKiBAcGFyYW0gZmllbGRcbiAgICovXG4gIGhhc0Fzc29jaWF0ZWRFbnRpdHkoZmllbGQ6IEZvcm1GaWVsZCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIShmaWVsZC5hc3NvY2lhdGVkRW50aXR5ICYmIH50aGlzLkFTU09DSUFURURfRU5USVRZX0xJU1QuaW5kZXhPZihmaWVsZC5hc3NvY2lhdGVkRW50aXR5LmVudGl0eSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGRldGVybWluZUlucHV0VHlwZVxuICAgKiBAcGFyYW0gZmllbGRcbiAgICovXG4gIGRldGVybWluZUlucHV0VHlwZShmaWVsZDogRm9ybUZpZWxkKTogc3RyaW5nIHtcbiAgICBsZXQgdHlwZTogc3RyaW5nO1xuICAgIGNvbnN0IGRhdGFTcGVjaWFsaXphdGlvblR5cGVNYXAgPSB7XG4gICAgICBEQVRFVElNRTogJ2RhdGV0aW1lJyxcbiAgICAgIFRJTUU6ICd0aW1lJyxcbiAgICAgIE1PTkVZOiAnY3VycmVuY3knLFxuICAgICAgUEVSQ0VOVEFHRTogJ3BlcmNlbnRhZ2UnLFxuICAgICAgSFRNTDogJ2VkaXRvcicsXG4gICAgICAnSFRNTC1NSU5JTUFMJzogJ2VkaXRvci1taW5pbWFsJyxcbiAgICAgIFlFQVI6ICd5ZWFyJyxcbiAgICAgIFdPUktGTE9XX09QVElPTlM6ICdzZWxlY3QnLFxuICAgICAgU1BFQ0lBTElaRURfT1BUSU9OUzogJ3NlbGVjdCcsXG4gICAgICBXb3JrZmxvd09wdGlvbnNMb29rdXA6ICdzZWxlY3QnLFxuICAgICAgU3BlY2lhbGl6ZWRPcHRpb25zTG9va3VwOiAnc2VsZWN0JyxcbiAgICAgIFNpbXBsaWZpZWRPcHRpb25zTG9va3VwOiAnc2VsZWN0JyxcbiAgICB9O1xuICAgIGNvbnN0IGRhdGFUeXBlVG9UeXBlTWFwID0ge1xuICAgICAgVGltZXN0YW1wOiAnZGF0ZScsXG4gICAgICBEYXRlOiAnZGF0ZScsXG4gICAgICBCb29sZWFuOiAndGlsZXMnLFxuICAgIH07XG4gICAgY29uc3QgaW5wdXRUeXBlVG9UeXBlTWFwID0ge1xuICAgICAgQ0hFQ0tCT1g6ICdyYWRpbycsXG4gICAgICBSQURJTzogJ3JhZGlvJyxcbiAgICAgIFNFTEVDVDogJ3NlbGVjdCcsXG4gICAgICBUSUxFUzogJ3RpbGVzJyxcbiAgICB9O1xuICAgIGNvbnN0IGlucHV0VHlwZU11bHRpVG9UeXBlTWFwID0ge1xuICAgICAgQ0hFQ0tCT1g6ICdjaGVja2xpc3QnLFxuICAgICAgUkFESU86ICdjaGVja2xpc3QnLFxuICAgICAgU0VMRUNUOiAnY2hpcHMnLFxuICAgIH07XG4gICAgY29uc3QgdHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIGZpbGU6ICdmaWxlJyxcbiAgICAgIENPTVBPU0lURTogJ2FkZHJlc3MnLFxuICAgIH07XG4gICAgY29uc3QgbnVtYmVyRGF0YVR5cGVUb1R5cGVNYXAgPSB7XG4gICAgICBEb3VibGU6ICdmbG9hdCcsXG4gICAgICBCaWdEZWNpbWFsOiAnZmxvYXQnLFxuICAgICAgSW50ZWdlcjogJ251bWJlcicsXG4gICAgfTtcbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ1RPX01BTlknKSB7XG4gICAgICBpZiAodGhpcy5oYXNBc3NvY2lhdGVkRW50aXR5KGZpZWxkKSkge1xuICAgICAgICBpZiAoZmllbGQubXVsdGlWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0eXBlID0gJ2VudGl0eXBpY2tlcic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHlwZSA9ICdlbnRpdHljaGlwcyc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmaWVsZC5tdWx0aVZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIHR5cGUgPSAncGlja2VyJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eXBlID0gJ2NoaXBzJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ1RPX09ORScpIHtcbiAgICAgIGlmICgnU1lTVEVNJyA9PT0gZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uICYmIFsnV29ya2Zsb3dPcHRpb25zTG9va3VwJywgJ1NwZWNpYWxpemVkT3B0aW9uc0xvb2t1cCddLmluY2x1ZGVzKGZpZWxkLmRhdGFUeXBlKSkge1xuICAgICAgICB0eXBlID0gZGF0YVNwZWNpYWxpemF0aW9uVHlwZU1hcFtmaWVsZC5kYXRhVHlwZV07XG4gICAgICB9IGVsc2UgaWYgKFsnV09SS0ZMT1dfT1BUSU9OUycsICdTUEVDSUFMSVpFRF9PUFRJT05TJ10uaW5jbHVkZXMoZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uKSkge1xuICAgICAgICB0eXBlID0gZGF0YVNwZWNpYWxpemF0aW9uVHlwZU1hcFtmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb25dO1xuICAgICAgfSBlbHNlIGlmIChbJ1NpbXBsaWZpZWRPcHRpb25zTG9va3VwJywgJ1NwZWNpYWxpemVkT3B0aW9uc0xvb2t1cCddLmluY2x1ZGVzKGZpZWxkLmRhdGFUeXBlKSkge1xuICAgICAgICBpZiAoZmllbGQub3B0aW9ucyAmJiBPYmplY3Qua2V5cyhpbnB1dFR5cGVUb1R5cGVNYXApLmluZGV4T2YoZmllbGQuaW5wdXRUeXBlKSA+IC0xICYmICFmaWVsZC5tdWx0aVZhbHVlKSB7XG4gICAgICAgICAgdHlwZSA9IGlucHV0VHlwZVRvVHlwZU1hcFtmaWVsZC5pbnB1dFR5cGVdO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLm9wdGlvbnMgJiYgT2JqZWN0LmtleXMoaW5wdXRUeXBlTXVsdGlUb1R5cGVNYXApLmluZGV4T2YoZmllbGQuaW5wdXRUeXBlKSA+IC0xICYmIGZpZWxkLm11bHRpVmFsdWUpIHtcbiAgICAgICAgICB0eXBlID0gaW5wdXRUeXBlTXVsdGlUb1R5cGVNYXBbZmllbGQuaW5wdXRUeXBlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eXBlID0gZGF0YVNwZWNpYWxpemF0aW9uVHlwZU1hcFtmaWVsZC5kYXRhVHlwZV07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5oYXNBc3NvY2lhdGVkRW50aXR5KGZpZWxkKSkge1xuICAgICAgICB0eXBlID0gJ2VudGl0eXBpY2tlcic7IC8vIFRPRE8hXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlID0gJ3BpY2tlcic7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zVXJsICYmIGZpZWxkLmlucHV0VHlwZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgIGlmIChmaWVsZC5vcHRpb25zVHlwZSAmJiB+dGhpcy5FTlRJVFlfUElDS0VSX0xJU1QuaW5kZXhPZihmaWVsZC5vcHRpb25zVHlwZSkpIHtcbiAgICAgICAgdHlwZSA9ICdlbnRpdHlwaWNrZXInOyAvLyBUT0RPIVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9ICdwaWNrZXInO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXMoZGF0YVNwZWNpYWxpemF0aW9uVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24pID4gLTEpIHtcbiAgICAgIHR5cGUgPSBkYXRhU3BlY2lhbGl6YXRpb25UeXBlTWFwW2ZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbl07XG4gICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhkYXRhVHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5kYXRhVHlwZSkgPiAtMSkge1xuICAgICAgdHlwZSA9IGRhdGFUeXBlVG9UeXBlTWFwW2ZpZWxkLmRhdGFUeXBlXTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLmlucHV0VHlwZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgdHlwZSA9ICd0ZXh0YXJlYSc7XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zICYmIE9iamVjdC5rZXlzKGlucHV0VHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5pbnB1dFR5cGUpID4gLTEgJiYgIWZpZWxkLm11bHRpVmFsdWUpIHtcbiAgICAgIHR5cGUgPSBpbnB1dFR5cGVUb1R5cGVNYXBbZmllbGQuaW5wdXRUeXBlXTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLm9wdGlvbnMgJiYgT2JqZWN0LmtleXMoaW5wdXRUeXBlTXVsdGlUb1R5cGVNYXApLmluZGV4T2YoZmllbGQuaW5wdXRUeXBlKSA+IC0xICYmIGZpZWxkLm11bHRpVmFsdWUpIHtcbiAgICAgIHR5cGUgPSBpbnB1dFR5cGVNdWx0aVRvVHlwZU1hcFtmaWVsZC5pbnB1dFR5cGVdO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXModHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC50eXBlKSA+IC0xKSB7XG4gICAgICB0eXBlID0gdHlwZVRvVHlwZU1hcFtmaWVsZC50eXBlXTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKG51bWJlckRhdGFUeXBlVG9UeXBlTWFwKS5pbmRleE9mKGZpZWxkLmRhdGFUeXBlKSA+IC0xKSB7XG4gICAgICB0eXBlID0gbnVtYmVyRGF0YVR5cGVUb1R5cGVNYXBbZmllbGQuZGF0YVR5cGVdO1xuICAgIH0gLyogZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm1VdGlsczogVGhpcyBmaWVsZCB0eXBlIGlzIHVuc3VwcG9ydGVkLicpO1xuICAgICAgICB9Ki9cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGlzRmllbGRFbmNyeXB0ZWQoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4ga2V5LmluZGV4T2YoJ2N1c3RvbUVuY3J5cHRlZCcpID4gLTE7XG4gIH1cblxuICBnZXRDb250cm9sRm9yRmllbGQoXG4gICAgZmllbGQ6IGFueSxcbiAgICBodHRwLFxuICAgIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuLCB3ZWVrU3RhcnQ/OiBudW1iZXIgfSxcbiAgICBvdmVycmlkZXM/OiBhbnksXG4gICAgZm9yVGFibGU6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICBmaWVsZERhdGE/OiBhbnksXG4gICkge1xuICAgIC8vIFRPRE86IGlmIGZpZWxkLnR5cGUgb3ZlcnJpZGVzIGBkZXRlcm1pbmVJbnB1dFR5cGVgIHdlIHNob3VsZCB1c2UgaXQgaW4gdGhhdCBtZXRob2Qgb3IgdXNlIHRoaXMgbWV0aG9kXG4gICAgLy8gVE9ETzogKGNvbnQuKSBhcyB0aGUgc2V0dGVyIG9mIHRoZSBmaWVsZCBhcmd1bWVudFxuICAgIGxldCB0eXBlOiBzdHJpbmcgPSB0aGlzLmRldGVybWluZUlucHV0VHlwZShmaWVsZCkgfHwgZmllbGQudHlwZTtcbiAgICBsZXQgY29udHJvbDogYW55O1xuICAgIGNvbnN0IGNvbnRyb2xDb25maWc6IE5vdm9Db250cm9sQ29uZmlnID0ge1xuICAgICAgbWV0YVR5cGU6IGZpZWxkLnR5cGUsXG4gICAgICB0eXBlLFxuICAgICAga2V5OiBmaWVsZC5uYW1lLFxuICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkLmhpbnQgfHwgJycsXG4gICAgICByZXF1aXJlZDogZmllbGQucmVxdWlyZWQgfHwgZmllbGQuc3lzdGVtUmVxdWlyZWQsXG4gICAgICBoaWRkZW46ICFmaWVsZC5yZXF1aXJlZCxcbiAgICAgIGVuY3J5cHRlZDogdGhpcy5pc0ZpZWxkRW5jcnlwdGVkKGZpZWxkLm5hbWUgPyBmaWVsZC5uYW1lLnRvU3RyaW5nKCkgOiAnJyksXG4gICAgICB2YWx1ZTogZmllbGQudmFsdWUgfHwgZmllbGQuZGVmYXVsdFZhbHVlLFxuICAgICAgc29ydE9yZGVyOiBmaWVsZC5zb3J0T3JkZXIsXG4gICAgICBhc3NvY2lhdGVkRW50aXR5OiBmaWVsZC5hc3NvY2lhdGVkRW50aXR5LFxuICAgICAgb3B0aW9uc1R5cGU6IGZpZWxkLm9wdGlvbnNUeXBlLFxuICAgICAgbXVsdGlwbGU6IGZpZWxkLm11bHRpVmFsdWUsXG4gICAgICByZWFkT25seTogISFmaWVsZC5kaXNhYmxlZCB8fCAhIWZpZWxkLnJlYWRPbmx5LFxuICAgICAgZGlzYWJsZWQ6IGZpZWxkLmRpc2FibGVkLFxuICAgICAgbWF4bGVuZ3RoOiBmaWVsZC5tYXhMZW5ndGgsXG4gICAgICBpbnRlcmFjdGlvbnM6IGZpZWxkLmludGVyYWN0aW9ucyxcbiAgICAgIGRhdGFTcGVjaWFsaXphdGlvbjogZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uLFxuICAgICAgZGF0YVR5cGU6IGZpZWxkLmRhdGFUeXBlLFxuICAgICAgZGVzY3JpcHRpb246IGZpZWxkLmRlc2NyaXB0aW9uIHx8ICcnLFxuICAgICAgdG9vbHRpcDogZmllbGQudG9vbHRpcCxcbiAgICAgIHRvb2x0aXBQb3NpdGlvbjogZmllbGQudG9vbHRpcFBvc2l0aW9uLFxuICAgICAgY3VzdG9tQ29udHJvbDogZmllbGQuY3VzdG9tQ29udHJvbCxcbiAgICAgIHRlbXBsYXRlOiBmaWVsZC50ZW1wbGF0ZSxcbiAgICAgIGN1c3RvbUNvbnRyb2xDb25maWc6IGZpZWxkLmN1c3RvbUNvbnRyb2xDb25maWcsXG4gICAgICByZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zOiBmaWVsZC5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zLFxuICAgICAgdmFsaWRhdG9yczogZmllbGQudmFsaWRhdG9ycyxcbiAgICAgIHdhcm5pbmc6IGZpZWxkLndhcm5pbmcsXG4gICAgICBjb25maWc6IGZpZWxkLmNvbmZpZyB8fCB7fSxcbiAgICAgIGNsb3NlT25TZWxlY3Q6IGZpZWxkLmNsb3NlT25TZWxlY3QsXG4gICAgICBsYXlvdXRPcHRpb25zOiBmaWVsZC5sYXlvdXRPcHRpb25zLFxuICAgIH07XG4gICAgdGhpcy5pbmZlclN0YXJ0RGF0ZShjb250cm9sQ29uZmlnLCBmaWVsZCk7XG4gICAgLy8gVE9ETzogZ2V0Q29udHJvbE9wdGlvbnMgc2hvdWxkIGFsd2F5cyByZXR1cm4gdGhlIGNvcnJlY3QgZm9ybWF0XG4gICAgY29uc3Qgb3B0aW9uc0NvbmZpZyA9IHRoaXMuZ2V0Q29udHJvbE9wdGlvbnMoZmllbGQsIGh0dHAsIGNvbmZpZywgZmllbGREYXRhKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zQ29uZmlnKSAmJiAhKHR5cGUgPT09ICdjaGlwcycgfHwgdHlwZSA9PT0gJ3BpY2tlcicpKSB7XG4gICAgICBjb250cm9sQ29uZmlnLm9wdGlvbnMgPSBvcHRpb25zQ29uZmlnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zQ29uZmlnKSAmJiAodHlwZSA9PT0gJ2NoaXBzJyB8fCB0eXBlID09PSAncGlja2VyJykpIHtcbiAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnID0ge1xuICAgICAgICBvcHRpb25zOiBvcHRpb25zQ29uZmlnLFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnNDb25maWcpIHtcbiAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnID0ge1xuICAgICAgICAuLi5vcHRpb25zQ29uZmlnLFxuICAgICAgICAuLi4oY29udHJvbENvbmZpZyAmJiBjb250cm9sQ29uZmlnLmNvbmZpZyksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAneWVhcicpIHtcbiAgICAgIGNvbnRyb2xDb25maWcubWF4bGVuZ3RoID0gNDtcbiAgICB9XG4gICAgLy8gVE9ETzogT3ZlcnJpZGVzIHNob3VsZCBiZSBhbiBpdGVyYWJsZSBvZiBhbGwgcHJvcGVydGllcyAocG90ZW50aWFsbHkgYSBwcml2YXRlIG1ldGhvZClcbiAgICBsZXQgb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGU7XG4gICAgbGV0IG92ZXJyaWRlUHJldmlld1RlbXBsYXRlO1xuICAgIGlmIChvdmVycmlkZXMgJiYgb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdKSB7XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnJlc3VsdHNUZW1wbGF0ZSkge1xuICAgICAgICBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5yZXN1bHRzVGVtcGxhdGU7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlO1xuICAgICAgICBkZWxldGUgb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnJlc3VsdHNUZW1wbGF0ZTtcbiAgICAgIH1cbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0ub3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGUpIHtcbiAgICAgICAgb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGUgPSBvdmVycmlkZXNbZmllbGQubmFtZV0ub3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGU7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLm92ZXJyaWRlUHJldmlld1RlbXBsYXRlID0gb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGU7XG4gICAgICAgIGRlbGV0ZSBvdmVycmlkZXNbZmllbGQubmFtZV0ub3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGU7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnBpY2tlckNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLmNhbGxiYWNrID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnBpY2tlckNhbGxiYWNrO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS50eXBlKSB7XG4gICAgICAgIHR5cGUgPSBvdmVycmlkZXNbZmllbGQubmFtZV0udHlwZTtcbiAgICAgIH1cbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0uY29sdW1ucykge1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5jb2x1bW5zID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLmNvbHVtbnM7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY2xvc2VPblNlbGVjdCA9IHRydWU7XG4gICAgICAgIGRlbGV0ZSBjb250cm9sQ29uZmlnLmxhYmVsO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS53YXJuaW5nKSB7XG4gICAgICAgIGNvbnRyb2xDb25maWcud2FybmluZyA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS53YXJuaW5nO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmFzc2lnbihjb250cm9sQ29uZmlnLCBvdmVycmlkZXNbZmllbGQubmFtZV0pO1xuICAgIH1cblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnZW50aXR5Y2hpcHMnOlxuICAgICAgICAvLyBUT0RPOiBUaGlzIGRvZXNuJ3QgYmVsb25nIGluIHRoaXMgY29kZWJhc2VcbiAgICAgICAgY29udHJvbENvbmZpZy5tdWx0aXBsZSA9IHRydWU7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlIHx8IEVudGl0eVBpY2tlclJlc3VsdHM7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnByZXZpZXdUZW1wbGF0ZSA9IG92ZXJyaWRlUHJldmlld1RlbXBsYXRlIHx8IEVudGl0eVBpY2tlclJlc3VsdDtcbiAgICAgICAgLy8gVE9ETzogV2hlbiBhcHBlbmRUb0JvZHkgcGlja2VyIHdvcmtzIGJldHRlciBpbiB0YWJsZS9mb3JtXG4gICAgICAgIGNvbnRyb2wgPSBuZXcgUGlja2VyQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGlwcyc6XG4gICAgICAgIGNvbnRyb2xDb25maWcubXVsdGlwbGUgPSB0cnVlO1xuICAgICAgICAvLyBUT0RPOiBXaGVuIGFwcGVuZFRvQm9keSBwaWNrZXIgd29ya3MgYmV0dGVyIGluIHRhYmxlL2Zvcm1cbiAgICAgICAgY29udHJvbCA9IG5ldyBQaWNrZXJDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VudGl0eXBpY2tlcic6XG4gICAgICAgIC8vIFRPRE86IFRoaXMgZG9lc24ndCBiZWxvbmcgaW4gdGhpcyBjb2RlYmFzZVxuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5yZXN1bHRzVGVtcGxhdGUgPSBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZSB8fCBFbnRpdHlQaWNrZXJSZXN1bHRzO1xuICAgICAgICAvLyBUT0RPOiBXaGVuIGFwcGVuZFRvQm9keSBwaWNrZXIgd29ya3MgYmV0dGVyIGluIHRhYmxlL2Zvcm1cbiAgICAgICAgY29udHJvbCA9IG5ldyBQaWNrZXJDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BpY2tlcic6XG4gICAgICAgIC8vIFRPRE86IFdoZW4gYXBwZW5kVG9Cb2R5IHBpY2tlciB3b3JrcyBiZXR0ZXIgaW4gdGFibGUvZm9ybVxuICAgICAgICBjb250cm9sID0gbmV3IFBpY2tlckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF0ZXRpbWUnOlxuICAgICAgICBjb250cm9sQ29uZmlnLm1pbGl0YXJ5ID0gY29uZmlnID8gISFjb25maWcubWlsaXRhcnkgOiBmYWxzZTtcbiAgICAgICAgY29udHJvbENvbmZpZy53ZWVrU3RhcnQgPSBjb25maWcgJiYgY29uZmlnLndlZWtTdGFydCA/IGNvbmZpZy53ZWVrU3RhcnQgOiAwO1xuICAgICAgICBjb250cm9sID0gbmV3IERhdGVUaW1lQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgY29udHJvbENvbmZpZy5kYXRlRm9ybWF0ID0gZmllbGQuZGF0ZUZvcm1hdDtcbiAgICAgICAgY29udHJvbENvbmZpZy50ZXh0TWFza0VuYWJsZWQgPSBmaWVsZC50ZXh0TWFza0VuYWJsZWQ7XG4gICAgICAgIGNvbnRyb2xDb25maWcuYWxsb3dJbnZhbGlkRGF0ZSA9IGZpZWxkLmFsbG93SW52YWxpZERhdGU7XG4gICAgICAgIGNvbnRyb2xDb25maWcubWlsaXRhcnkgPSBjb25maWcgPyAhIWNvbmZpZy5taWxpdGFyeSA6IGZhbHNlO1xuICAgICAgICBjb250cm9sQ29uZmlnLndlZWtTdGFydCA9IGNvbmZpZyAmJiBjb25maWcud2Vla1N0YXJ0ID8gY29uZmlnLndlZWtTdGFydCA6IDA7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgRGF0ZUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgIGNvbnRyb2xDb25maWcubWlsaXRhcnkgPSBjb25maWcgPyAhIWNvbmZpZy5taWxpdGFyeSA6IGZhbHNlO1xuICAgICAgICBjb250cm9sID0gbmV3IFRpbWVDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgIGNhc2UgJ21vbmV5JzpcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgIGNhc2UgJ3BlcmNlbnRhZ2UnOlxuICAgICAgY2FzZSAnZmxvYXQnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAvLyBUT0RPOiBPbmx5IHR5cGVzIGZyb20gYGRldGVybWluZUlucHV0VHlwZWAgc2hvdWxkIGJlIHVzZWQgaW4gdGhpcyBjbGFzc1xuICAgICAgICBpZiAodHlwZSA9PT0gJ21vbmV5Jykge1xuICAgICAgICAgIHR5cGUgPSAnY3VycmVuY3knO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xDb25maWcudHlwZSA9IHR5cGU7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGV4dEJveENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGV4dEJveENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICBjb250cm9sID0gbmV3IFRleHRBcmVhQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0b3InOlxuICAgICAgICBjb250cm9sID0gbmV3IEVkaXRvckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdG9yLW1pbmltYWwnOlxuICAgICAgICBjb250cm9sID0gbmV3IEVkaXRvckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGNvbnRyb2wubWluaW1hbCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGlsZXMnOlxuICAgICAgICBjb250cm9sID0gbmV3IFRpbGVzQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIGNvbnRyb2xDb25maWcuY2hlY2tib3hMYWJlbCA9IGZpZWxkLmNoZWNrYm94TGFiZWw7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgQ2hlY2tib3hDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoZWNrbGlzdCc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgQ2hlY2tMaXN0Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgUmFkaW9Db250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgU2VsZWN0Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhZGRyZXNzJzpcbiAgICAgICAgY29udHJvbENvbmZpZy5yZXF1aXJlZCA9IGZpZWxkLnJlcXVpcmVkIHx8IGZhbHNlO1xuICAgICAgICBpZiAoSGVscGVycy5pc0JsYW5rKGNvbnRyb2xDb25maWcuY29uZmlnKSkge1xuICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnID0ge307XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcucmVxdWlyZWQgPSBmaWVsZC5yZXF1aXJlZDtcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcucmVhZE9ubHkgPSBjb250cm9sQ29uZmlnLnJlYWRPbmx5O1xuICAgICAgICBpZiAoZmllbGQuZmllbGRzICYmIGZpZWxkLmZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHN1YmZpZWxkIG9mIGZpZWxkLmZpZWxkcykge1xuICAgICAgICAgICAgY29udHJvbENvbmZpZy5jb25maWdbc3ViZmllbGQubmFtZV0gPSB7XG4gICAgICAgICAgICAgIHJlcXVpcmVkOiAhIXN1YmZpZWxkLnJlcXVpcmVkLFxuICAgICAgICAgICAgICBoaWRkZW46ICEhc3ViZmllbGQucmVhZE9ubHksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkoc3ViZmllbGQubGFiZWwpKSB7XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnW3N1YmZpZWxkLm5hbWVdLmxhYmVsID0gc3ViZmllbGQubGFiZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eShzdWJmaWVsZC5tYXhMZW5ndGgpKSB7XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnW3N1YmZpZWxkLm5hbWVdLm1heGxlbmd0aCA9IHN1YmZpZWxkLm1heExlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRyb2xDb25maWcucmVxdWlyZWQgPSBjb250cm9sQ29uZmlnLnJlcXVpcmVkIHx8IHN1YmZpZWxkLnJlcXVpcmVkO1xuICAgICAgICAgICAgaWYgKHN1YmZpZWxkLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICBpZiAoSGVscGVycy5pc0JsYW5rKGNvbnRyb2xDb25maWcudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbENvbmZpZy52YWx1ZSA9IHt9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcudmFsdWVbc3ViZmllbGQubmFtZV0gPSBzdWJmaWVsZC5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN1YmZpZWxkLm5hbWUgPT09ICdjb3VudHJ5SUQnKSB7XG4gICAgICAgICAgICAgIGlmIChIZWxwZXJzLmlzQmxhbmsoY29udHJvbENvbmZpZy52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLnZhbHVlID0ge307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udHJvbENvbmZpZy52YWx1ZVtzdWJmaWVsZC5uYW1lXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3ViZmllbGQubmFtZSA9PT0gJ3N0YXRlJyB8fCBzdWJmaWVsZC5uYW1lID09PSAnY291bnRyeUlEJykge1xuICAgICAgICAgICAgICBpZiAoc3ViZmllbGQubmFtZSA9PT0gJ2NvdW50cnlJRCcpIHtcbiAgICAgICAgICAgICAgICBzdWJmaWVsZC5vcHRpb25zVHlwZSA9ICdDb3VudHJ5JztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIXN1YmZpZWxkLm9wdGlvbnNVcmwpIHtcbiAgICAgICAgICAgICAgICBzdWJmaWVsZC5vcHRpb25zVXJsID0gYG9wdGlvbnMvJHtzdWJmaWVsZC5vcHRpb25zVHlwZX1gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnW3N1YmZpZWxkLm5hbWVdLnBpY2tlckNvbmZpZyA9IHRoaXMuZ2V0Q29udHJvbE9wdGlvbnMoc3ViZmllbGQsIGh0dHAsIGNvbmZpZywgZmllbGREYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbENvbmZpZy5pc0VtcHR5ID0gdGhpcy5pc0FkZHJlc3NFbXB0eTtcbiAgICAgICAgY29udHJvbCA9IG5ldyBBZGRyZXNzQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBGaWxlQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXN0b20nOlxuICAgICAgICBjb250cm9sID0gbmV3IEN1c3RvbUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29udHJvbCA9IG5ldyBUZXh0Qm94Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9sO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRDcmVhdGVDb250cm9sKGZpZWxkKTogYm9vbGVhbiB7XG4gICAgaWYgKGZpZWxkLnN5c3RlbVJlcXVpcmVkKSB7XG4gICAgICBmaWVsZC5yZWFkT25seSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBmaWVsZC5uYW1lICE9PSAnaWQnICYmXG4gICAgICAoIVsnU1lTVEVNJywgJ1NFQ1RJT05fSEVBREVSJ10uaW5jbHVkZXMoZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uKSB8fFxuICAgICAgICBbJ2FkZHJlc3MnLCAnYmlsbGluZ0FkZHJlc3MnLCAnc2Vjb25kYXJ5QWRkcmVzcyddLmluY2x1ZGVzKGZpZWxkLm5hbWUpKSAmJlxuICAgICAgIWZpZWxkLnJlYWRPbmx5XG4gICAgKTtcbiAgfVxuXG4gIHRvQ29udHJvbHMoXG4gICAgbWV0YSxcbiAgICBjdXJyZW5jeUZvcm1hdCxcbiAgICBodHRwLFxuICAgIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuLCB3ZWVrU3RhcnQ/OiBudW1iZXIgfSxcbiAgICBvdmVycmlkZXM/OiBhbnksXG4gICAgZm9yVGFibGU6IGJvb2xlYW4gPSBmYWxzZSxcbiAgKSB7XG4gICAgY29uc3QgY29udHJvbHMgPSBbXTtcbiAgICBpZiAobWV0YSAmJiBtZXRhLmZpZWxkcykge1xuICAgICAgY29uc3QgZmllbGRzID0gbWV0YS5maWVsZHM7XG4gICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkQ3JlYXRlQ29udHJvbChmaWVsZCkpIHtcbiAgICAgICAgICBjb25zdCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sRm9yRmllbGQoZmllbGQsIGh0dHAsIGNvbmZpZywgb3ZlcnJpZGVzLCBmb3JUYWJsZSk7XG4gICAgICAgICAgLy8gU2V0IGN1cnJlbmN5IGZvcm1hdFxuICAgICAgICAgIGlmIChjb250cm9sLnN1YlR5cGUgPT09ICdjdXJyZW5jeScpIHtcbiAgICAgICAgICAgIGNvbnRyb2wuY3VycmVuY3lGb3JtYXQgPSBjdXJyZW5jeUZvcm1hdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQWRkIHRvIGNvbnRyb2xzXG4gICAgICAgICAgY29udHJvbHMucHVzaChjb250cm9sKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9scztcbiAgfVxuXG4gIHRvVGFibGVDb250cm9scyhtZXRhLCBjdXJyZW5jeUZvcm1hdCwgaHR0cCwgY29uZmlnOiB7IHRva2VuPzogc3RyaW5nOyByZXN0VXJsPzogc3RyaW5nOyBtaWxpdGFyeT86IGJvb2xlYW4gfSwgb3ZlcnJpZGVzPzogYW55KSB7XG4gICAgY29uc3QgY29udHJvbHMgPSB0aGlzLnRvQ29udHJvbHMobWV0YSwgY3VycmVuY3lGb3JtYXQsIGh0dHAsIGNvbmZpZywgb3ZlcnJpZGVzLCB0cnVlKTtcbiAgICBjb25zdCByZXQgPSB7fTtcbiAgICBjb250cm9scy5mb3JFYWNoKChjb250cm9sOiBCYXNlQ29udHJvbCkgPT4ge1xuICAgICAgcmV0W2NvbnRyb2wua2V5XSA9IHtcbiAgICAgICAgZWRpdG9yVHlwZTogY29udHJvbC5fX3R5cGUsXG4gICAgICAgIGVkaXRvckNvbmZpZzogY29udHJvbC5fX2NvbmZpZyxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHRvRmllbGRTZXRzKFxuICAgIG1ldGEsXG4gICAgY3VycmVuY3lGb3JtYXQsXG4gICAgaHR0cCxcbiAgICBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiwgd2Vla1N0YXJ0PzogbnVtYmVyIH0sXG4gICAgb3ZlcnJpZGVzPyxcbiAgICBkYXRhPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgKSB7XG4gICAgY29uc3QgZmllbGRzZXRzOiBBcnJheTxOb3ZvRmllbGRzZXQ+ID0gW107XG4gICAgbGV0IGZvcm1GaWVsZHMgPSBbXTtcblxuICAgIGlmIChtZXRhICYmIG1ldGEuZmllbGRzKSB7XG4gICAgICBmb3JtRmllbGRzID0gdGhpcy5nZXRGb3JtRmllbGRzKG1ldGEpO1xuXG4gICAgICBmb3JtRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzSGVhZGVyKGZpZWxkKSkge1xuICAgICAgICAgIGlmIChmaWVsZC5lbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmluc2VydEhlYWRlclRvRmllbGRzZXRzKGZpZWxkc2V0cywgZmllbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRW1iZWRkZWRGaWVsZChmaWVsZCkpIHtcbiAgICAgICAgICB0aGlzLmluc2VydEhlYWRlclRvRmllbGRzZXRzKGZpZWxkc2V0cywgZmllbGQpO1xuXG4gICAgICAgICAgY29uc3QgZW1iZWRkZWRGaWVsZHMgPSB0aGlzLmdldEVtYmVkZGVkRmllbGRzKGZpZWxkKTtcblxuICAgICAgICAgIGVtYmVkZGVkRmllbGRzLmZvckVhY2goKGVtYmVkZGVkRmllbGQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZENyZWF0ZUNvbnRyb2woZW1iZWRkZWRGaWVsZCkpIHtcbiAgICAgICAgICAgICAgbGV0IGNvbnRyb2wgPSB0aGlzLmNyZWF0ZUNvbnRyb2woZW1iZWRkZWRGaWVsZCwgZGF0YSwgaHR0cCwgY29uZmlnLCBvdmVycmlkZXMsIGN1cnJlbmN5Rm9ybWF0KTtcbiAgICAgICAgICAgICAgY29udHJvbCA9IHRoaXMubWFya0NvbnRyb2xBc0VtYmVkZGVkKGNvbnRyb2wsIGZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbiA/IGZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbi50b0xvd2VyQ2FzZSgpIDogbnVsbCk7XG4gICAgICAgICAgICAgIGZpZWxkc2V0c1tmaWVsZHNldHMubGVuZ3RoIC0gMV0uY29udHJvbHMucHVzaChjb250cm9sKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0hlYWRlcihlbWJlZGRlZEZpZWxkKSkge1xuICAgICAgICAgICAgICB0aGlzLmluc2VydEhlYWRlclRvRmllbGRzZXRzKGZpZWxkc2V0cywgZW1iZWRkZWRGaWVsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG91bGRDcmVhdGVDb250cm9sKGZpZWxkKSkge1xuICAgICAgICAgIGxldCBjb250cm9sID0gdGhpcy5jcmVhdGVDb250cm9sKGZpZWxkLCBkYXRhLCBodHRwLCBjb25maWcsIG92ZXJyaWRlcywgY3VycmVuY3lGb3JtYXQpO1xuICAgICAgICAgIGlmIChmaWVsZC5pbmxpbmVFbWJlZGRlZEFzc29jaWF0ZWRFbnRpdHlGaWVsZCkge1xuICAgICAgICAgICAgY29udHJvbCA9IHRoaXMubWFya0NvbnRyb2xBc0VtYmVkZGVkKGNvbnRyb2wsICdpbmxpbmVfZW1iZWRkZWQnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZmllbGRzZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZmllbGRzZXRzLnB1c2goeyBjb250cm9sczogW10gfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmllbGRzZXRzW2ZpZWxkc2V0cy5sZW5ndGggLSAxXS5jb250cm9scy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGZpZWxkc2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZmllbGRzZXRzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgY29udHJvbHM6IHRoaXMudG9Db250cm9scyhtZXRhLCBjdXJyZW5jeUZvcm1hdCwgaHR0cCwgY29uZmlnKSxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0VtYmVkZGVkRmllbGQoZmllbGQpIHtcbiAgICByZXR1cm4gZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uICYmIFsnZW1iZWRkZWQnXS5pbmNsdWRlcyhmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24udG9Mb3dlckNhc2UoKSkgJiYgIWZpZWxkLnJlYWRPbmx5O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDb250cm9sKGZpZWxkLCBkYXRhLCBodHRwLCBjb25maWcsIG92ZXJyaWRlcywgY3VycmVuY3lGb3JtYXQpIHtcbiAgICBjb25zdCBmaWVsZERhdGEgPSB0aGlzLmlzRW1iZWRkZWRGaWVsZERhdGEoZmllbGQsIGRhdGEpID8gdGhpcy5nZXRFbWJlZGRlZEZpZWxkRGF0YShmaWVsZCwgZGF0YSkgOiB0aGlzLmdldEZpZWxkRGF0YShmaWVsZCwgZGF0YSk7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbEZvckZpZWxkKGZpZWxkLCBodHRwLCBjb25maWcsIG92ZXJyaWRlcywgdW5kZWZpbmVkLCBmaWVsZERhdGEpO1xuICAgIC8vIFNldCBjdXJyZW5jeSBmb3JtYXRcbiAgICBpZiAoY29udHJvbC5zdWJUeXBlID09PSAnY3VycmVuY3knKSB7XG4gICAgICBjb250cm9sLmN1cnJlbmN5Rm9ybWF0ID0gY3VycmVuY3lGb3JtYXQ7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9sO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtYmVkZGVkRmllbGREYXRhKGZpZWxkLCBkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEgJiYgZmllbGQubmFtZS5pbmNsdWRlcygnLicpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaWVsZERhdGEoZmllbGQsIGRhdGEpIHtcbiAgICByZXR1cm4gKGRhdGEgJiYgZGF0YVtmaWVsZC5uYW1lXSkgfHwgbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RW1iZWRkZWRGaWVsZERhdGEoZmllbGQsIGRhdGEpIHtcbiAgICBjb25zdCBbcGFyZW50RmllbGROYW1lLCBmaWVsZE5hbWVdID0gZmllbGQubmFtZS5zcGxpdCgnLicpO1xuICAgIHJldHVybiAoZGF0YSAmJiBkYXRhW3BhcmVudEZpZWxkTmFtZV0gJiYgZGF0YVtwYXJlbnRGaWVsZE5hbWVdW2ZpZWxkTmFtZV0pIHx8IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldEZvcm1GaWVsZHMobWV0YSkge1xuICAgIGNvbnN0IHNlY3Rpb25IZWFkZXJzID0gbWV0YS5zZWN0aW9uSGVhZGVyc1xuICAgICAgPyBtZXRhLnNlY3Rpb25IZWFkZXJzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuaXNTZWN0aW9uSGVhZGVyID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfSlcbiAgICAgIDogW107XG5cbiAgICBsZXQgZmllbGRzID0gbWV0YS5maWVsZHMubWFwKChmaWVsZCkgPT4ge1xuICAgICAgaWYgKCFmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnc29ydE9yZGVyJykpIHtcbiAgICAgICAgZmllbGQuc29ydE9yZGVyID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgLSAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH0pO1xuXG4gICAgLy8gYnVpbGQgbGlzdCBvZiBmaWVsZHMgdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkIGlubGluZSBidXQgYmVsb25nIHRvIGFzc29jaWF0ZWQgZW50aXRpZXNcbiAgICBjb25zdCBpbmxpbmVFbWJlZGRlZEFzc29jaWF0ZWRFbnRpdHlGaWVsZHMgPSB0aGlzLmdldElubGluZUVtYmVkZGVkRmllbGRzKGZpZWxkcyk7XG5cbiAgICAvLyByZW1vdmUgdGhlIGlubGluZSBlbWJlZGRlZCBmaWVsZHMgYmVjYXVzZSB0aGUgYXNzb2NpYXRlZCBlbnRpdHkgZmllbGRzIHdlcmUgZXh0cmFjdGVkIGFib3ZlXG4gICAgLy8gYW5kIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHJlZ3VsYXIgbGlzdCBvZiBmaWVsZHMuIFRoaXMgcHJldmVudHMgdGhlIGZpZWxkcyBmcm9tIGJlaW5nIGFkZGVkIG11bHRpcGxlIHRpbWVzLlxuICAgIGZpZWxkcyA9IGZpZWxkcy5maWx0ZXIoKGYpID0+ICFmLmRhdGFTcGVjaWFsaXphdGlvbiB8fCBmLmRhdGFTcGVjaWFsaXphdGlvbi50b0xvd2VyQ2FzZSgpICE9PSAnaW5saW5lX2VtYmVkZGVkJyk7XG5cbiAgICAvLyBzb3J0IGZpZWxkc1xuICAgIHJldHVybiBbLi4uc2VjdGlvbkhlYWRlcnMsIC4uLmZpZWxkcywgLi4uaW5saW5lRW1iZWRkZWRBc3NvY2lhdGVkRW50aXR5RmllbGRzXS5zb3J0KEhlbHBlcnMuc29ydEJ5RmllbGQoWydzb3J0T3JkZXInLCAnbmFtZSddKSk7XG4gIH1cblxuICBwcml2YXRlIGdldElubGluZUVtYmVkZGVkRmllbGRzKGZpZWxkcykge1xuICAgIGxldCBpbmxpbmVFbWJlZGRlZEFzc29jaWF0ZWRFbnRpdHlGaWVsZHMgPSBbXTtcbiAgICBmaWVsZHNcbiAgICAgIC5maWx0ZXIoKGYpID0+IGYuZGF0YVNwZWNpYWxpemF0aW9uICYmIGYuZGF0YVNwZWNpYWxpemF0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdpbmxpbmVfZW1iZWRkZWQnKVxuICAgICAgLmZvckVhY2goKGYpID0+IHtcbiAgICAgICAgaW5saW5lRW1iZWRkZWRBc3NvY2lhdGVkRW50aXR5RmllbGRzID0gWy4uLmlubGluZUVtYmVkZGVkQXNzb2NpYXRlZEVudGl0eUZpZWxkcywgLi4udGhpcy5nZXRBc3NvY2lhdGVkRmllbGRzRm9ySW5saW5lRW1iZWRkZWQoZildO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGlubGluZUVtYmVkZGVkQXNzb2NpYXRlZEVudGl0eUZpZWxkcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QXNzb2NpYXRlZEZpZWxkc0ZvcklubGluZUVtYmVkZGVkKGZpZWxkKSB7XG4gICAgbGV0IGFzc29jaWF0ZWRFbnRpdHlGaWVsZHMgPSBbXTtcbiAgICBhc3NvY2lhdGVkRW50aXR5RmllbGRzID0gdGhpcy5nZXRFbWJlZGRlZEZpZWxkcyhmaWVsZCkubWFwKChhZWYpID0+IHtcbiAgICAgIGFlZi5pbmxpbmVFbWJlZGRlZEFzc29jaWF0ZWRFbnRpdHlGaWVsZCA9IHRydWU7XG4gICAgICByZXR1cm4gYWVmO1xuICAgIH0pO1xuICAgIHJldHVybiBhc3NvY2lhdGVkRW50aXR5RmllbGRzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbWJlZGRlZEZpZWxkcyhzdWJIZWFkZXIpIHtcbiAgICByZXR1cm4gc3ViSGVhZGVyLmFzc29jaWF0ZWRFbnRpdHkuZmllbGRzXG4gICAgICAuZmlsdGVyKChmaWVsZCkgPT4gZmllbGQubmFtZSAhPT0gJ2lkJylcbiAgICAgIC5tYXAoKGZpZWxkKSA9PiB7XG4gICAgICAgIGlmICghZmllbGQubmFtZS5zdGFydHNXaXRoKGAke3N1YkhlYWRlci5uYW1lfS5gKSkge1xuICAgICAgICAgIGZpZWxkLm5hbWUgPSBgJHtzdWJIZWFkZXIubmFtZX0uJHtmaWVsZC5uYW1lfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgICAgfSlcbiAgICAgIC5zb3J0KEhlbHBlcnMuc29ydEJ5RmllbGQoWydzb3J0T3JkZXInLCAnbmFtZSddKSk7XG4gIH1cblxuICBwcml2YXRlIGlzSGVhZGVyKGZpZWxkKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICFIZWxwZXJzLmlzQmxhbmsoZmllbGQpICYmXG4gICAgICAoKGZpZWxkLmhhc093blByb3BlcnR5KCdpc1NlY3Rpb25IZWFkZXInKSAmJiBmaWVsZC5pc1NlY3Rpb25IZWFkZXIpIHx8XG4gICAgICAgIChmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24gJiYgZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdzZWN0aW9uX2hlYWRlcicpKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGluc2VydEhlYWRlclRvRmllbGRzZXRzKGZpZWxkc2V0cywgZmllbGQpIHtcbiAgICBjb25zdCBjb25zdGFudFByb3BlcnRpZXMgPSB7XG4gICAgICBjb250cm9sczogW10sXG4gICAgICBpc0VtYmVkZGVkOiBmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24gJiYgZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdlbWJlZGRlZCcsXG4gICAgICBpc0lubGluZUVtYmVkZGVkOiBmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24gJiYgZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdpbmxpbmVfZW1iZWRkZWQnLFxuICAgICAga2V5OiBmaWVsZC5uYW1lLFxuICAgIH07XG4gICAgaWYgKGZpZWxkLm5hbWUgJiYgZmllbGQubmFtZS5zdGFydHNXaXRoKCdjdXN0b21PYmplY3QnKSAmJiBmaWVsZC5hc3NvY2lhdGVkRW50aXR5ICYmIGZpZWxkLmFzc29jaWF0ZWRFbnRpdHkubGFiZWwpIHtcbiAgICAgIGZpZWxkc2V0cy5wdXNoKHtcbiAgICAgICAgdGl0bGU6IGZpZWxkLmFzc29jaWF0ZWRFbnRpdHkubGFiZWwgfHwgZmllbGQubGFiZWwsXG4gICAgICAgIGljb246IGZpZWxkLmljb24gfHwgJ2JoaS1jYXJkLWV4cGFuZCcsXG4gICAgICAgIC4uLmNvbnN0YW50UHJvcGVydGllcyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZHNldHMucHVzaCh7XG4gICAgICAgIHRpdGxlOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgaWNvbjogZmllbGQuaWNvbiB8fCAnYmhpLXNlY3Rpb24nLFxuICAgICAgICAuLi5jb25zdGFudFByb3BlcnRpZXMsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1hcmtDb250cm9sQXNFbWJlZGRlZChjb250cm9sLCBkYXRhU3BlY2lhbGl6YXRpb24/OiAnZW1iZWRkZWQnIHwgJ2lubGluZV9lbWJlZGRlZCcpIHtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKGNvbnRyb2xbJ2NvbmZpZyddKSkge1xuICAgICAgY29udHJvbFsnY29uZmlnJ10gPSB7fTtcbiAgICB9XG4gICAgY29udHJvbFsnY29uZmlnJ11bJ2VtYmVkZGVkJ10gPSB0cnVlO1xuICAgIGNvbnRyb2wuaXNFbWJlZGRlZCA9IGRhdGFTcGVjaWFsaXphdGlvbiA9PT0gJ2VtYmVkZGVkJztcbiAgICBjb250cm9sLmlzSW5saW5lRW1iZWRkZWQgPSBkYXRhU3BlY2lhbGl6YXRpb24gPT09ICdpbmxpbmVfZW1iZWRkZWQnO1xuICAgIHJldHVybiBjb250cm9sO1xuICB9XG5cbiAgZ2V0Q29udHJvbE9wdGlvbnMoZmllbGQ6IGFueSwgaHR0cDogYW55LCBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiB9LCBmaWVsZERhdGE/OiBhbnkpOiBhbnkge1xuICAgIC8vIFRPRE86IFRoZSB0b2tlbiBwcm9wZXJ0eSBvZiBjb25maWcgaXMgdGhlIG9ubHkgcHJvcGVydHkgdXNlZDsganVzdCBwYXNzIGluIGB0b2tlbjogc3RyaW5nYFxuICAgIGlmIChmaWVsZC5kYXRhVHlwZSA9PT0gJ0Jvb2xlYW4nICYmICFmaWVsZC5vcHRpb25zKSB7XG4gICAgICAvLyBUT0RPOiBkYXRhVHlwZSBzaG91bGQgb25seSBiZSBkZXRlcm1pbmVkIGJ5IGBkZXRlcm1pbmVJbnB1dFR5cGVgIHdoaWNoIGRvZXNuJ3QgZXZlciByZXR1cm4gJ0Jvb2xlYW4nIGl0XG4gICAgICAvLyBUT0RPOiAoY29udC4pIHJldHVybnMgYHRpbGVzYFxuICAgICAgcmV0dXJuIFt7IHZhbHVlOiBmYWxzZSwgbGFiZWw6IHRoaXMubGFiZWxzLm5vIH0sIHsgdmFsdWU6IHRydWUsIGxhYmVsOiB0aGlzLmxhYmVscy55ZXMgfV07XG4gICAgfSBlbHNlIGlmIChmaWVsZC53b3JrZmxvd09wdGlvbnMgJiYgZmllbGREYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRXb3JrZmxvd09wdGlvbnMoZmllbGQud29ya2Zsb3dPcHRpb25zLCBmaWVsZERhdGEpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24gPT09ICdTUEVDSUFMSVpFRF9PUFRJT05TJyB8fFxuICAgICAgKGZpZWxkLm9wdGlvbnMgJiYgWydTcGVjaWFsaXplZE9wdGlvbnNMb29rdXAnLCAnU2ltcGxpZmllZE9wdGlvbnNMb29rdXAnXS5pbmNsdWRlcyhmaWVsZC5kYXRhVHlwZSkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmllbGQub3B0aW9ucy5maWx0ZXIoKG8pID0+ICFvLnJlYWRPbmx5KTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLm9wdGlvbnNVcmwpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNTZXJ2aWNlLmdldE9wdGlvbnNDb25maWcoaHR0cCwgZmllbGQsIGNvbmZpZyk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGZpZWxkLm9wdGlvbnMpICYmIGZpZWxkLnR5cGUgPT09ICdjaGlwcycpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBmaWVsZC5vcHRpb25zO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmllbGQ6ICd2YWx1ZScsXG4gICAgICAgIGZvcm1hdDogJyRsYWJlbCcsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZmllbGQub3B0aW9ucykge1xuICAgICAgcmV0dXJuIGZpZWxkLm9wdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRXb3JrZmxvd09wdGlvbnMoXG4gICAgd29ya2Zsb3dPcHRpb25zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICAgIGZpZWxkRGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgKTogQXJyYXk8eyB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyOyBsYWJlbDogc3RyaW5nIHwgbnVtYmVyIH0+IHtcbiAgICBsZXQgY3VycmVudFZhbHVlOiB7IHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7IGxhYmVsOiBzdHJpbmcgfCBudW1iZXIgfTtcbiAgICBpZiAoZmllbGREYXRhLmlkKSB7XG4gICAgICBjdXJyZW50VmFsdWUgPSB7IHZhbHVlOiBmaWVsZERhdGEuaWQsIGxhYmVsOiBmaWVsZERhdGEubGFiZWwgPyBmaWVsZERhdGEubGFiZWwgOiBmaWVsZERhdGEuaWQgfTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50V29ya2Zsb3dPcHRpb246IG51bWJlciB8IHN0cmluZyA9IGZpZWxkRGF0YS5pZCA/IGZpZWxkRGF0YS5pZCA6ICdpbml0aWFsJztcbiAgICBjb25zdCB1cGRhdGVXb3JrZmxvd09wdGlvbnM6IEFycmF5PHsgdmFsdWU6IHN0cmluZyB8IG51bWJlcjsgbGFiZWw6IHN0cmluZyB8IG51bWJlciB9PiA9IHdvcmtmbG93T3B0aW9uc1tjdXJyZW50V29ya2Zsb3dPcHRpb25dIHx8IFtdO1xuXG4gICAgaWYgKGN1cnJlbnRWYWx1ZSAmJiAhdXBkYXRlV29ya2Zsb3dPcHRpb25zLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSBjdXJyZW50VmFsdWUudmFsdWUpKSB7XG4gICAgICB1cGRhdGVXb3JrZmxvd09wdGlvbnMudW5zaGlmdChjdXJyZW50VmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB1cGRhdGVXb3JrZmxvd09wdGlvbnM7XG4gIH1cblxuICBzZXRJbml0aWFsVmFsdWVzKGNvbnRyb2xzOiBBcnJheTxOb3ZvQ29udHJvbENvbmZpZz4sIHZhbHVlczogYW55LCBrZWVwQ2xlYW4/OiBib29sZWFuLCBrZXlPdmVycmlkZT86IHN0cmluZykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBjb250cm9sc1tpXTtcbiAgICAgIGNvbnN0IGtleSA9IGtleU92ZXJyaWRlID8gY29udHJvbC5rZXkucmVwbGFjZShrZXlPdmVycmlkZSwgJycpIDogY29udHJvbC5rZXk7XG4gICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNba2V5XTtcblxuICAgICAgaWYgKEhlbHBlcnMuaXNCbGFuayh2YWx1ZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuZmlsdGVyKCh2YWwpID0+ICEoT2JqZWN0LmtleXModmFsKS5sZW5ndGggPT09IDAgJiYgdmFsLmNvbnN0cnVjdG9yID09PSBPYmplY3QpKTtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZS5kYXRhICYmIHZhbHVlLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29udHJvbC5kYXRhVHlwZSA9PT0gJ0RhdGUnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgY29udHJvbC5vcHRpb25zVHlwZSAhPT0gJ3NraXBDb252ZXJzaW9uJykge1xuICAgICAgICB2YWx1ZSA9IGRhdGVGbnMuc3RhcnRPZkRheSh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRyb2wudmFsdWUgPSB2YWx1ZTtcbiAgICAgIC8vIFRPRE86IGtlZXBDbGVhbiBpcyBub3QgcmVxdWlyZWQsIGJ1dCBpcyBhbHdheXMgdXNlZC4gSXQgc2hvdWxkIGRlZmF1bHQgKHRvIHRydWU/KVxuICAgICAgY29udHJvbC5kaXJ0eSA9ICFrZWVwQ2xlYW47XG4gICAgfVxuICB9XG5cbiAgc2V0SW5pdGlhbFZhbHVlc0ZpZWxkc2V0cyhmaWVsZHNldHM6IEFycmF5PE5vdm9GaWVsZHNldD4sIHZhbHVlcywga2VlcENsZWFuPzogYm9vbGVhbikge1xuICAgIGZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgdGhpcy5zZXRJbml0aWFsVmFsdWVzKGZpZWxkc2V0LmNvbnRyb2xzLCB2YWx1ZXMsIGtlZXBDbGVhbik7XG4gICAgfSk7XG4gIH1cblxuICBmb3JjZVNob3dBbGxDb250cm9scyhjb250cm9sczogQXJyYXk8Tm92b0NvbnRyb2xDb25maWc+KSB7XG4gICAgY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgY29udHJvbC5oaWRkZW4gPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlU2hvd0FsbENvbnRyb2xzSW5GaWVsZHNldHMoZmllbGRzZXRzOiBBcnJheTxOb3ZvRmllbGRzZXQ+KSB7XG4gICAgZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgIGNvbnRyb2wuaGlkZGVuID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlVmFsaWRhdGlvbihmb3JtOiBOb3ZvRm9ybUdyb3VwKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXMoZm9ybS5jb250cm9scykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRyb2w6IGFueSA9IGZvcm0uY29udHJvbHNba2V5XTtcbiAgICAgIGlmIChjb250cm9sLnJlcXVpcmVkICYmIEhlbHBlcnMuaXNCbGFuayhmb3JtLnZhbHVlW2NvbnRyb2wua2V5XSkpIHtcbiAgICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzQWRkcmVzc0VtcHR5KGNvbnRyb2w6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGZpZWxkTGlzdDogc3RyaW5nW10gPSBbJ2FkZHJlc3MxJywgJ2FkZHJlc3MyJywgJ2NpdHknLCAnc3RhdGUnLCAnemlwJywgJ2NvdW50cnlJRCddO1xuICAgIGxldCB2YWxpZDogYm9vbGVhbiA9IHRydWU7XG4gICAgaWYgKGNvbnRyb2wudmFsdWUgJiYgY29udHJvbC5jb25maWcpIHtcbiAgICAgIGZpZWxkTGlzdC5mb3JFYWNoKChzdWJmaWVsZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoKHN1YmZpZWxkICE9PSAnY291bnRyeUlEJyAmJlxuICAgICAgICAgICAgIUhlbHBlcnMuaXNFbXB0eShjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0pICYmXG4gICAgICAgICAgICBjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0ucmVxdWlyZWQgJiZcbiAgICAgICAgICAgIChIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZVtzdWJmaWVsZF0pIHx8IEhlbHBlcnMuaXNFbXB0eShjb250cm9sLnZhbHVlW3N1YmZpZWxkXSkpKSB8fFxuICAgICAgICAgICAgKHN1YmZpZWxkID09PSAnY291bnRyeUlEJyAmJlxuICAgICAgICAgICAgICAhSGVscGVycy5pc0VtcHR5KGNvbnRyb2wuY29uZmlnLmNvdW50cnlJRCkgJiZcbiAgICAgICAgICAgICAgY29udHJvbC5jb25maWcuY291bnRyeUlELnJlcXVpcmVkICYmXG4gICAgICAgICAgICAgIEhlbHBlcnMuaXNFbXB0eShjb250cm9sLnZhbHVlLmNvdW50cnlOYW1lKSkpICYmXG4gICAgICAgICAgIShcbiAgICAgICAgICAgIHN1YmZpZWxkID09PSAnc3RhdGUnICYmXG4gICAgICAgICAgICAhSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWUuY291bnRyeU5hbWUpICYmXG4gICAgICAgICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcgJiZcbiAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyAmJlxuICAgICAgICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zLmxlbmd0aCA9PT0gMFxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RhcnREYXRlRnJvbVJhbmdlKGRhdGVSYW5nZTogeyBtaW5EYXRlOiBzdHJpbmc7IG1pbk9mZnNldDogbnVtYmVyIH0pOiBEYXRlIHtcbiAgICBpZiAoZGF0ZVJhbmdlLm1pbkRhdGUpIHtcbiAgICAgIHJldHVybiBkYXRlRm5zLnBhcnNlKGRhdGVSYW5nZS5taW5EYXRlKTtcbiAgICB9IGVsc2UgaWYgKGRhdGVSYW5nZS5taW5PZmZzZXQpIHtcbiAgICAgIHJldHVybiBkYXRlRm5zLmFkZERheXMoZGF0ZUZucy5zdGFydE9mVG9kYXkoKSwgZGF0ZVJhbmdlLm1pbk9mZnNldCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWluIHN0YXJ0IGRhdGUgb2YgYSBEYXRlIGJhc2Ugb24gZmllbGQgZGF0YS5cbiAgICovXG4gIHByaXZhdGUgZ2V0U3RhcnREYXRlKGZpZWxkOiBhbnkpOiBEYXRlIHwgbnVsbCB7XG4gICAgaWYgKGZpZWxkLmFsbG93ZWREYXRlUmFuZ2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXJ0RGF0ZUZyb21SYW5nZShmaWVsZC5hbGxvd2VkRGF0ZVJhbmdlKTtcbiAgICB9XG4gICAgLy8gdGhlcmUgaXMgbm8gcmVzdHJpY3Rpb24gb24gdGhlIHN0YXJ0IGRhdGVcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaW5mZXJTdGFydERhdGUoY29udHJvbENvbmZpZywgZmllbGQpIHtcbiAgICBpZiAoZmllbGQuZGF0YVR5cGUgPT09ICdEYXRlJykge1xuICAgICAgY29uc3Qgc3RhcnREYXRlID0gdGhpcy5nZXRTdGFydERhdGUoZmllbGQpO1xuICAgICAgaWYgKHN0YXJ0RGF0ZSkge1xuICAgICAgICBjb250cm9sQ29uZmlnLnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGFydERhdGU7XG4gICAgfVxuICB9XG5cbiAgaW5mbGF0ZUVtYmVkZGVkUHJvcGVydGllcyhkYXRhOiBvYmplY3QpOiBvYmplY3Qge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBPYmplY3Qua2V5cyhkYXRhKVxuICAgICAgICAuZmlsdGVyKChmaWVsZE5hbWUpID0+IGZpZWxkTmFtZS5pbmNsdWRlcygnLicpKVxuICAgICAgICAuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICBjb25zdCBbcGFyZW50RmllbGROYW1lLCBmaWVsZE5hbWVdID0gZmllbGQuc3BsaXQoJy4nKTtcbiAgICAgICAgICBpZiAoIWRhdGFbcGFyZW50RmllbGROYW1lXSkge1xuICAgICAgICAgICAgZGF0YVtwYXJlbnRGaWVsZE5hbWVdID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGFbcGFyZW50RmllbGROYW1lXVtmaWVsZE5hbWVdID0gZGF0YVtmaWVsZF07XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZmllbGRdO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuIl19