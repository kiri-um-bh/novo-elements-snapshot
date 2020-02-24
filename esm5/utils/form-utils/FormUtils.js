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
            (field.dataSpecialization !== 'SYSTEM' || ['address', 'billingAddress', 'secondaryAddress'].indexOf(field.name) !== -1) &&
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
        return !Helpers.isBlank(field) && field.hasOwnProperty('isSectionHeader') && field.isSectionHeader;
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
        fieldsets.push({
            title: field.label,
            icon: field.icon || 'bhi-section',
            controls: [],
            isEmbedded: field.dataSpecialization && field.dataSpecialization.toLowerCase() === 'embedded',
            isInlineEmbedded: field.dataSpecialization && field.dataSpecialization.toLowerCase() === 'inline_embedded',
            key: field.name,
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybVV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL2Zvcm0tdXRpbHMvRm9ybVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDOztBQUVwQyxPQUFPLEVBQ0wsY0FBYyxFQUVkLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLFdBQVcsRUFDWCxlQUFlLEVBQ2YsYUFBYSxFQUNiLFdBQVcsRUFFWCxhQUFhLEVBQ2IsWUFBWSxFQUNaLGFBQWEsRUFDYixlQUFlLEVBQ2YsY0FBYyxFQUNkLFlBQVksRUFDWixXQUFXLEdBQ1osTUFBTSxrQ0FBa0MsQ0FBQztBQUMxQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUNqSSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXJDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRXpFO0lBb0NFLG1CQUFtQixNQUF3QixFQUFTLGNBQThCO1FBQS9ELFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBbENsRiwyQkFBc0IsR0FBYTtZQUNqQyxXQUFXO1lBQ1gsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQix1QkFBdUI7WUFDdkIsTUFBTTtZQUNOLGFBQWE7WUFDYixVQUFVO1lBQ1YsZUFBZTtZQUNmLFFBQVE7WUFDUixXQUFXO1NBQ1os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QUMvQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixDQUFDLEVBQUMsQ0FBQztTQUNOO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnQkEvekJGLFVBQVU7Ozs7Z0JBSEYsZ0JBQWdCO2dCQUNoQixjQUFjOztJQWswQnZCLGdCQUFDO0NBQUEsQUFoMEJELElBZzBCQztTQS96QlksU0FBUzs7O0lBQ3BCLDJDQVdFOztJQUNGLHVDQW9CRTs7SUFFVSwyQkFBK0I7O0lBQUUsbUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuLy8gQXBwXG5pbXBvcnQge1xuICBBZGRyZXNzQ29udHJvbCxcbiAgQmFzZUNvbnRyb2wsXG4gIENoZWNrYm94Q29udHJvbCxcbiAgQ2hlY2tMaXN0Q29udHJvbCxcbiAgQ3VzdG9tQ29udHJvbCxcbiAgRGF0ZUNvbnRyb2wsXG4gIERhdGVUaW1lQ29udHJvbCxcbiAgRWRpdG9yQ29udHJvbCxcbiAgRmlsZUNvbnRyb2wsXG4gIE5vdm9Db250cm9sQ29uZmlnLFxuICBQaWNrZXJDb250cm9sLFxuICBSYWRpb0NvbnRyb2wsXG4gIFNlbGVjdENvbnRyb2wsXG4gIFRleHRBcmVhQ29udHJvbCxcbiAgVGV4dEJveENvbnRyb2wsXG4gIFRpbGVzQ29udHJvbCxcbiAgVGltZUNvbnRyb2wsXG59IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0vRm9ybUNvbnRyb2xzJztcbmltcG9ydCB7IEVudGl0eVBpY2tlclJlc3VsdCwgRW50aXR5UGlja2VyUmVzdWx0cyB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL3BpY2tlci9leHRyYXMvZW50aXR5LXBpY2tlci1yZXN1bHRzL0VudGl0eVBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0ZpZWxkc2V0LCBGb3JtRmllbGQgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9mb3JtL0Zvcm1JbnRlcmZhY2VzJztcbmltcG9ydCB7IE5vdm9Gb3JtQ29udHJvbCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0vTm92b0Zvcm1Db250cm9sJztcbmltcG9ydCB7IE5vdm9Gb3JtR3JvdXAgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9mb3JtL05vdm9Gb3JtR3JvdXAnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBPcHRpb25zU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvb3B0aW9ucy9PcHRpb25zU2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtVXRpbHMge1xuICBBU1NPQ0lBVEVEX0VOVElUWV9MSVNUOiBzdHJpbmdbXSA9IFtcbiAgICAnQ2FuZGlkYXRlJyxcbiAgICAnQ2xpZW50Q29udGFjdCcsXG4gICAgJ0NsaWVudENvcnBvcmF0aW9uJyxcbiAgICAnQ29ycG9yYXRpb25EZXBhcnRtZW50JyxcbiAgICAnTGVhZCcsXG4gICAgJ09wcG9ydHVuaXR5JyxcbiAgICAnSm9iT3JkZXInLFxuICAgICdDb3Jwb3JhdGVVc2VyJyxcbiAgICAnUGVyc29uJyxcbiAgICAnUGxhY2VtZW50JyxcbiAgXTtcbiAgRU5USVRZX1BJQ0tFUl9MSVNUOiBzdHJpbmdbXSA9IFtcbiAgICAnQ2FuZGlkYXRlJyxcbiAgICAnQ2FuZGlkYXRlVGV4dCcsXG4gICAgJ0NsaWVudCcsXG4gICAgJ0NsaWVudFRleHQnLFxuICAgICdDbGllbnRDb250YWN0JyxcbiAgICAnQ2xpZW50Q29udGFjdFRleHQnLFxuICAgICdDbGllbnRDb3Jwb3JhdGlvbicsXG4gICAgJ0NsaWVudENvcnBvcmF0aW9uVGV4dCcsXG4gICAgJ0xlYWQnLFxuICAgICdMZWFkVGV4dCcsXG4gICAgJ09wcG9ydHVuaXR5JyxcbiAgICAnT3Bwb3J0dW5pdHlUZXh0JyxcbiAgICAnSm9iT3JkZXInLFxuICAgICdKb2JPcmRlclRleHQnLFxuICAgICdDb3Jwb3JhdGVVc2VyJyxcbiAgICAnQ29ycG9yYXRlVXNlclRleHQnLFxuICAgICdQZXJzb24nLFxuICAgICdQZXJzb25UZXh0JyxcbiAgICAnUGxhY2VtZW50JyxcbiAgXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwdWJsaWMgb3B0aW9uc1NlcnZpY2U6IE9wdGlvbnNTZXJ2aWNlKSB7fVxuXG4gIHRvRm9ybUdyb3VwKGNvbnRyb2xzOiBBcnJheTxhbnk+KTogTm92b0Zvcm1Hcm91cCB7XG4gICAgbGV0IGdyb3VwOiBhbnkgPSB7fTtcbiAgICBjb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZSkgPyAnJyA6IGNvbnRyb2wudmFsdWU7XG4gICAgICBncm91cFtjb250cm9sLmtleV0gPSBuZXcgTm92b0Zvcm1Db250cm9sKHZhbHVlLCBjb250cm9sKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IE5vdm9Gb3JtR3JvdXAoZ3JvdXApO1xuICB9XG5cbiAgZW1wdHlGb3JtR3JvdXAoKTogTm92b0Zvcm1Hcm91cCB7XG4gICAgcmV0dXJuIG5ldyBOb3ZvRm9ybUdyb3VwKHt9KTtcbiAgfVxuXG4gIGFkZENvbnRyb2xzKGZvcm1Hcm91cDogTm92b0Zvcm1Hcm91cCwgY29udHJvbHM6IEFycmF5PE5vdm9Db250cm9sQ29uZmlnPik6IHZvaWQge1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IEhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlKSA/ICcnIDogY29udHJvbC52YWx1ZTtcbiAgICAgIGxldCBmb3JtQ29udHJvbCA9IG5ldyBOb3ZvRm9ybUNvbnRyb2wodmFsdWUsIGNvbnRyb2wpO1xuICAgICAgZm9ybUdyb3VwLmFkZENvbnRyb2woY29udHJvbC5rZXksIGZvcm1Db250cm9sKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUNvbnRyb2xzKGZvcm1Hcm91cDogTm92b0Zvcm1Hcm91cCwgY29udHJvbHM6IEFycmF5PE5vdm9Db250cm9sQ29uZmlnPik6IHZvaWQge1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgIGZvcm1Hcm91cC5yZW1vdmVDb250cm9sKGNvbnRyb2wua2V5KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSB0b0Zvcm1Hcm91cEZyb21GaWVsZHNldFxuICAgKiBAcGFyYW0gZmllbGRzZXRzXG4gICAqL1xuICB0b0Zvcm1Hcm91cEZyb21GaWVsZHNldChmaWVsZHNldHM6IEFycmF5PE5vdm9GaWVsZHNldD4pOiBOb3ZvRm9ybUdyb3VwIHtcbiAgICBsZXQgY29udHJvbHM6IEFycmF5PE5vdm9Gb3JtQ29udHJvbD4gPSBbXTtcbiAgICBmaWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIGNvbnRyb2xzLnB1c2goLi4uZmllbGRzZXQuY29udHJvbHMpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnRvRm9ybUdyb3VwKGNvbnRyb2xzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBoYXNBc3NvY2lhdGVkRW50aXR5XG4gICAqIEBwYXJhbSBmaWVsZFxuICAgKi9cbiAgaGFzQXNzb2NpYXRlZEVudGl0eShmaWVsZDogRm9ybUZpZWxkKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKGZpZWxkLmFzc29jaWF0ZWRFbnRpdHkgJiYgfnRoaXMuQVNTT0NJQVRFRF9FTlRJVFlfTElTVC5pbmRleE9mKGZpZWxkLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5KSk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZGV0ZXJtaW5lSW5wdXRUeXBlXG4gICAqIEBwYXJhbSBmaWVsZFxuICAgKi9cbiAgZGV0ZXJtaW5lSW5wdXRUeXBlKGZpZWxkOiBGb3JtRmllbGQpOiBzdHJpbmcge1xuICAgIGxldCB0eXBlOiBzdHJpbmc7XG4gICAgbGV0IGRhdGFTcGVjaWFsaXphdGlvblR5cGVNYXAgPSB7XG4gICAgICBEQVRFVElNRTogJ2RhdGV0aW1lJyxcbiAgICAgIFRJTUU6ICd0aW1lJyxcbiAgICAgIE1PTkVZOiAnY3VycmVuY3knLFxuICAgICAgUEVSQ0VOVEFHRTogJ3BlcmNlbnRhZ2UnLFxuICAgICAgSFRNTDogJ2VkaXRvcicsXG4gICAgICAnSFRNTC1NSU5JTUFMJzogJ2VkaXRvci1taW5pbWFsJyxcbiAgICAgIFlFQVI6ICd5ZWFyJyxcbiAgICAgIFdPUktGTE9XX09QVElPTlM6ICdzZWxlY3QnLFxuICAgICAgU1BFQ0lBTElaRURfT1BUSU9OUzogJ3NlbGVjdCcsXG4gICAgICBXb3JrZmxvd09wdGlvbnNMb29rdXA6ICdzZWxlY3QnLFxuICAgICAgU3BlY2lhbGl6ZWRPcHRpb25zTG9va3VwOiAnc2VsZWN0JyxcbiAgICAgIFNpbXBsaWZpZWRPcHRpb25zTG9va3VwOiAnc2VsZWN0JyxcbiAgICB9O1xuICAgIGxldCBkYXRhVHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIFRpbWVzdGFtcDogJ2RhdGUnLFxuICAgICAgRGF0ZTogJ2RhdGUnLFxuICAgICAgQm9vbGVhbjogJ3RpbGVzJyxcbiAgICB9O1xuICAgIGxldCBpbnB1dFR5cGVUb1R5cGVNYXAgPSB7XG4gICAgICBDSEVDS0JPWDogJ3JhZGlvJyxcbiAgICAgIFJBRElPOiAncmFkaW8nLFxuICAgICAgU0VMRUNUOiAnc2VsZWN0JyxcbiAgICAgIFRJTEVTOiAndGlsZXMnLFxuICAgIH07XG4gICAgbGV0IGlucHV0VHlwZU11bHRpVG9UeXBlTWFwID0ge1xuICAgICAgQ0hFQ0tCT1g6ICdjaGVja2xpc3QnLFxuICAgICAgUkFESU86ICdjaGVja2xpc3QnLFxuICAgICAgU0VMRUNUOiAnY2hpcHMnLFxuICAgIH07XG4gICAgbGV0IHR5cGVUb1R5cGVNYXAgPSB7XG4gICAgICBmaWxlOiAnZmlsZScsXG4gICAgICBDT01QT1NJVEU6ICdhZGRyZXNzJyxcbiAgICB9O1xuICAgIGxldCBudW1iZXJEYXRhVHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIERvdWJsZTogJ2Zsb2F0JyxcbiAgICAgIEJpZ0RlY2ltYWw6ICdmbG9hdCcsXG4gICAgICBJbnRlZ2VyOiAnbnVtYmVyJyxcbiAgICB9O1xuICAgIGlmIChmaWVsZC50eXBlID09PSAnVE9fTUFOWScpIHtcbiAgICAgIGlmICh0aGlzLmhhc0Fzc29jaWF0ZWRFbnRpdHkoZmllbGQpKSB7XG4gICAgICAgIGlmIChmaWVsZC5tdWx0aVZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIHR5cGUgPSAnZW50aXR5cGlja2VyJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eXBlID0gJ2VudGl0eWNoaXBzJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZpZWxkLm11bHRpVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdHlwZSA9ICdwaWNrZXInO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR5cGUgPSAnY2hpcHMnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAnVE9fT05FJykge1xuICAgICAgaWYgKCdTWVNURU0nID09PSBmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24gJiYgWydXb3JrZmxvd09wdGlvbnNMb29rdXAnLCAnU3BlY2lhbGl6ZWRPcHRpb25zTG9va3VwJ10uaW5jbHVkZXMoZmllbGQuZGF0YVR5cGUpKSB7XG4gICAgICAgIHR5cGUgPSBkYXRhU3BlY2lhbGl6YXRpb25UeXBlTWFwW2ZpZWxkLmRhdGFUeXBlXTtcbiAgICAgIH0gZWxzZSBpZiAoWydXT1JLRkxPV19PUFRJT05TJywgJ1NQRUNJQUxJWkVEX09QVElPTlMnXS5pbmNsdWRlcyhmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24pKSB7XG4gICAgICAgIHR5cGUgPSBkYXRhU3BlY2lhbGl6YXRpb25UeXBlTWFwW2ZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbl07XG4gICAgICB9IGVsc2UgaWYgKFsnU2ltcGxpZmllZE9wdGlvbnNMb29rdXAnLCAnU3BlY2lhbGl6ZWRPcHRpb25zTG9va3VwJ10uaW5jbHVkZXMoZmllbGQuZGF0YVR5cGUpKSB7XG4gICAgICAgIGlmIChmaWVsZC5vcHRpb25zICYmIE9iamVjdC5rZXlzKGlucHV0VHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5pbnB1dFR5cGUpID4gLTEgJiYgIWZpZWxkLm11bHRpVmFsdWUpIHtcbiAgICAgICAgICB0eXBlID0gaW5wdXRUeXBlVG9UeXBlTWFwW2ZpZWxkLmlucHV0VHlwZV07XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQub3B0aW9ucyAmJiBPYmplY3Qua2V5cyhpbnB1dFR5cGVNdWx0aVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5pbnB1dFR5cGUpID4gLTEgJiYgZmllbGQubXVsdGlWYWx1ZSkge1xuICAgICAgICAgIHR5cGUgPSBpbnB1dFR5cGVNdWx0aVRvVHlwZU1hcFtmaWVsZC5pbnB1dFR5cGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR5cGUgPSBkYXRhU3BlY2lhbGl6YXRpb25UeXBlTWFwW2ZpZWxkLmRhdGFUeXBlXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmhhc0Fzc29jaWF0ZWRFbnRpdHkoZmllbGQpKSB7XG4gICAgICAgIHR5cGUgPSAnZW50aXR5cGlja2VyJzsgLy8gVE9ETyFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGUgPSAncGlja2VyJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZpZWxkLm9wdGlvbnNVcmwgJiYgZmllbGQuaW5wdXRUeXBlID09PSAnU0VMRUNUJykge1xuICAgICAgaWYgKGZpZWxkLm9wdGlvbnNUeXBlICYmIH50aGlzLkVOVElUWV9QSUNLRVJfTElTVC5pbmRleE9mKGZpZWxkLm9wdGlvbnNUeXBlKSkge1xuICAgICAgICB0eXBlID0gJ2VudGl0eXBpY2tlcic7IC8vIFRPRE8hXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlID0gJ3BpY2tlcic7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhkYXRhU3BlY2lhbGl6YXRpb25UeXBlTWFwKS5pbmRleE9mKGZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbikgPiAtMSkge1xuICAgICAgdHlwZSA9IGRhdGFTcGVjaWFsaXphdGlvblR5cGVNYXBbZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uXTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKGRhdGFUeXBlVG9UeXBlTWFwKS5pbmRleE9mKGZpZWxkLmRhdGFUeXBlKSA+IC0xKSB7XG4gICAgICB0eXBlID0gZGF0YVR5cGVUb1R5cGVNYXBbZmllbGQuZGF0YVR5cGVdO1xuICAgIH0gZWxzZSBpZiAoZmllbGQuaW5wdXRUeXBlID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICB0eXBlID0gJ3RleHRhcmVhJztcbiAgICB9IGVsc2UgaWYgKGZpZWxkLm9wdGlvbnMgJiYgT2JqZWN0LmtleXMoaW5wdXRUeXBlVG9UeXBlTWFwKS5pbmRleE9mKGZpZWxkLmlucHV0VHlwZSkgPiAtMSAmJiAhZmllbGQubXVsdGlWYWx1ZSkge1xuICAgICAgdHlwZSA9IGlucHV0VHlwZVRvVHlwZU1hcFtmaWVsZC5pbnB1dFR5cGVdO1xuICAgIH0gZWxzZSBpZiAoZmllbGQub3B0aW9ucyAmJiBPYmplY3Qua2V5cyhpbnB1dFR5cGVNdWx0aVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5pbnB1dFR5cGUpID4gLTEgJiYgZmllbGQubXVsdGlWYWx1ZSkge1xuICAgICAgdHlwZSA9IGlucHV0VHlwZU11bHRpVG9UeXBlTWFwW2ZpZWxkLmlucHV0VHlwZV07XG4gICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyh0eXBlVG9UeXBlTWFwKS5pbmRleE9mKGZpZWxkLnR5cGUpID4gLTEpIHtcbiAgICAgIHR5cGUgPSB0eXBlVG9UeXBlTWFwW2ZpZWxkLnR5cGVdO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXMobnVtYmVyRGF0YVR5cGVUb1R5cGVNYXApLmluZGV4T2YoZmllbGQuZGF0YVR5cGUpID4gLTEpIHtcbiAgICAgIHR5cGUgPSBudW1iZXJEYXRhVHlwZVRvVHlwZU1hcFtmaWVsZC5kYXRhVHlwZV07XG4gICAgfSAvKiBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm9ybVV0aWxzOiBUaGlzIGZpZWxkIHR5cGUgaXMgdW5zdXBwb3J0ZWQuJyk7XG4gICAgICAgIH0qL1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgaXNGaWVsZEVuY3J5cHRlZChrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBrZXkuaW5kZXhPZignY3VzdG9tRW5jcnlwdGVkJykgPiAtMTtcbiAgfVxuXG4gIGdldENvbnRyb2xGb3JGaWVsZChcbiAgICBmaWVsZDogYW55LFxuICAgIGh0dHAsXG4gICAgY29uZmlnOiB7IHRva2VuPzogc3RyaW5nOyByZXN0VXJsPzogc3RyaW5nOyBtaWxpdGFyeT86IGJvb2xlYW4gfSxcbiAgICBvdmVycmlkZXM/OiBhbnksXG4gICAgZm9yVGFibGU6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICBmaWVsZERhdGE/OiBhbnksXG4gICkge1xuICAgIC8vIFRPRE86IGlmIGZpZWxkLnR5cGUgb3ZlcnJpZGVzIGBkZXRlcm1pbmVJbnB1dFR5cGVgIHdlIHNob3VsZCB1c2UgaXQgaW4gdGhhdCBtZXRob2Qgb3IgdXNlIHRoaXMgbWV0aG9kXG4gICAgLy8gVE9ETzogKGNvbnQuKSBhcyB0aGUgc2V0dGVyIG9mIHRoZSBmaWVsZCBhcmd1bWVudFxuICAgIGxldCB0eXBlOiBzdHJpbmcgPSB0aGlzLmRldGVybWluZUlucHV0VHlwZShmaWVsZCkgfHwgZmllbGQudHlwZTtcbiAgICBsZXQgY29udHJvbDogYW55O1xuICAgIGxldCBjb250cm9sQ29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZyA9IHtcbiAgICAgIG1ldGFUeXBlOiBmaWVsZC50eXBlLFxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIGtleTogZmllbGQubmFtZSxcbiAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgIHBsYWNlaG9sZGVyOiBmaWVsZC5oaW50IHx8ICcnLFxuICAgICAgcmVxdWlyZWQ6IGZpZWxkLnJlcXVpcmVkIHx8IGZpZWxkLnN5c3RlbVJlcXVpcmVkLFxuICAgICAgaGlkZGVuOiAhZmllbGQucmVxdWlyZWQsXG4gICAgICBlbmNyeXB0ZWQ6IHRoaXMuaXNGaWVsZEVuY3J5cHRlZChmaWVsZC5uYW1lID8gZmllbGQubmFtZS50b1N0cmluZygpIDogJycpLFxuICAgICAgdmFsdWU6IGZpZWxkLnZhbHVlIHx8IGZpZWxkLmRlZmF1bHRWYWx1ZSxcbiAgICAgIHNvcnRPcmRlcjogZmllbGQuc29ydE9yZGVyLFxuICAgICAgYXNzb2NpYXRlZEVudGl0eTogZmllbGQuYXNzb2NpYXRlZEVudGl0eSxcbiAgICAgIG9wdGlvbnNUeXBlOiBmaWVsZC5vcHRpb25zVHlwZSxcbiAgICAgIG11bHRpcGxlOiBmaWVsZC5tdWx0aVZhbHVlLFxuICAgICAgcmVhZE9ubHk6ICEhZmllbGQuZGlzYWJsZWQgfHwgISFmaWVsZC5yZWFkT25seSxcbiAgICAgIGRpc2FibGVkOiBmaWVsZC5kaXNhYmxlZCxcbiAgICAgIG1heGxlbmd0aDogZmllbGQubWF4TGVuZ3RoLFxuICAgICAgaW50ZXJhY3Rpb25zOiBmaWVsZC5pbnRlcmFjdGlvbnMsXG4gICAgICBkYXRhU3BlY2lhbGl6YXRpb246IGZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbixcbiAgICAgIGRhdGFUeXBlOiBmaWVsZC5kYXRhVHlwZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBmaWVsZC5kZXNjcmlwdGlvbiB8fCAnJyxcbiAgICAgIHRvb2x0aXA6IGZpZWxkLnRvb2x0aXAsXG4gICAgICB0b29sdGlwUG9zaXRpb246IGZpZWxkLnRvb2x0aXBQb3NpdGlvbixcbiAgICAgIGN1c3RvbUNvbnRyb2w6IGZpZWxkLmN1c3RvbUNvbnRyb2wsXG4gICAgICB0ZW1wbGF0ZTogZmllbGQudGVtcGxhdGUsXG4gICAgICBjdXN0b21Db250cm9sQ29uZmlnOiBmaWVsZC5jdXN0b21Db250cm9sQ29uZmlnLFxuICAgICAgcmVzdHJpY3RGaWVsZEludGVyYWN0aW9uczogZmllbGQucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucyxcbiAgICAgIHZhbGlkYXRvcnM6IGZpZWxkLnZhbGlkYXRvcnMsXG4gICAgICB3YXJuaW5nOiBmaWVsZC53YXJuaW5nLFxuICAgICAgY29uZmlnOiBmaWVsZC5jb25maWcgfHwge30sXG4gICAgICBjbG9zZU9uU2VsZWN0OiBmaWVsZC5jbG9zZU9uU2VsZWN0LFxuICAgICAgbGF5b3V0T3B0aW9uczogZmllbGQubGF5b3V0T3B0aW9ucyxcbiAgICB9O1xuICAgIHRoaXMuaW5mZXJTdGFydERhdGUoY29udHJvbENvbmZpZywgZmllbGQpO1xuICAgIC8vIFRPRE86IGdldENvbnRyb2xPcHRpb25zIHNob3VsZCBhbHdheXMgcmV0dXJuIHRoZSBjb3JyZWN0IGZvcm1hdFxuICAgIGNvbnN0IG9wdGlvbnNDb25maWcgPSB0aGlzLmdldENvbnRyb2xPcHRpb25zKGZpZWxkLCBodHRwLCBjb25maWcsIGZpZWxkRGF0YSk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9uc0NvbmZpZykgJiYgISh0eXBlID09PSAnY2hpcHMnIHx8IHR5cGUgPT09ICdwaWNrZXInKSkge1xuICAgICAgY29udHJvbENvbmZpZy5vcHRpb25zID0gb3B0aW9uc0NvbmZpZztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9uc0NvbmZpZykgJiYgKHR5cGUgPT09ICdjaGlwcycgfHwgdHlwZSA9PT0gJ3BpY2tlcicpKSB7XG4gICAgICBjb250cm9sQ29uZmlnLmNvbmZpZyA9IHtcbiAgICAgICAgb3B0aW9uczogb3B0aW9uc0NvbmZpZyxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChvcHRpb25zQ29uZmlnKSB7XG4gICAgICBjb250cm9sQ29uZmlnLmNvbmZpZyA9IHtcbiAgICAgICAgLi4ub3B0aW9uc0NvbmZpZyxcbiAgICAgICAgLi4uKGNvbnRyb2xDb25maWcgJiYgY29udHJvbENvbmZpZy5jb25maWcpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ3llYXInKSB7XG4gICAgICBjb250cm9sQ29uZmlnLm1heGxlbmd0aCA9IDQ7XG4gICAgfVxuICAgIC8vIFRPRE86IE92ZXJyaWRlcyBzaG91bGQgYmUgYW4gaXRlcmFibGUgb2YgYWxsIHByb3BlcnRpZXMgKHBvdGVudGlhbGx5IGEgcHJpdmF0ZSBtZXRob2QpXG4gICAgbGV0IG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlO1xuICAgIGxldCBvdmVycmlkZVByZXZpZXdUZW1wbGF0ZTtcbiAgICBpZiAob3ZlcnJpZGVzICYmIG92ZXJyaWRlc1tmaWVsZC5uYW1lXSkge1xuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5yZXN1bHRzVGVtcGxhdGUpIHtcbiAgICAgICAgb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGUgPSBvdmVycmlkZXNbZmllbGQubmFtZV0ucmVzdWx0c1RlbXBsYXRlO1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5yZXN1bHRzVGVtcGxhdGUgPSBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZTtcbiAgICAgICAgZGVsZXRlIG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5yZXN1bHRzVGVtcGxhdGU7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLm92ZXJyaWRlUHJldmlld1RlbXBsYXRlKSB7XG4gICAgICAgIG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLm92ZXJyaWRlUHJldmlld1RlbXBsYXRlO1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5vdmVycmlkZVByZXZpZXdUZW1wbGF0ZSA9IG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlO1xuICAgICAgICBkZWxldGUgb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLm92ZXJyaWRlUHJldmlld1RlbXBsYXRlO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5waWNrZXJDYWxsYmFjaykge1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5jYWxsYmFjayA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5waWNrZXJDYWxsYmFjaztcbiAgICAgIH1cbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0udHlwZSkge1xuICAgICAgICB0eXBlID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnR5cGU7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLmNvbHVtbnMpIHtcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcuY29sdW1ucyA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5jb2x1bW5zO1xuICAgICAgICBjb250cm9sQ29uZmlnLmNsb3NlT25TZWxlY3QgPSB0cnVlO1xuICAgICAgICBkZWxldGUgY29udHJvbENvbmZpZy5sYWJlbDtcbiAgICAgIH1cbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0ud2FybmluZykge1xuICAgICAgICBjb250cm9sQ29uZmlnLndhcm5pbmcgPSBvdmVycmlkZXNbZmllbGQubmFtZV0ud2FybmluZztcbiAgICAgIH1cbiAgICAgIE9iamVjdC5hc3NpZ24oY29udHJvbENvbmZpZywgb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2VudGl0eWNoaXBzJzpcbiAgICAgICAgLy8gVE9ETzogVGhpcyBkb2Vzbid0IGJlbG9uZyBpbiB0aGlzIGNvZGViYXNlXG4gICAgICAgIGNvbnRyb2xDb25maWcubXVsdGlwbGUgPSB0cnVlO1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5yZXN1bHRzVGVtcGxhdGUgPSBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZSB8fCBFbnRpdHlQaWNrZXJSZXN1bHRzO1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5wcmV2aWV3VGVtcGxhdGUgPSBvdmVycmlkZVByZXZpZXdUZW1wbGF0ZSB8fCBFbnRpdHlQaWNrZXJSZXN1bHQ7XG4gICAgICAgIC8vIFRPRE86IFdoZW4gYXBwZW5kVG9Cb2R5IHBpY2tlciB3b3JrcyBiZXR0ZXIgaW4gdGFibGUvZm9ybVxuICAgICAgICBjb250cm9sID0gbmV3IFBpY2tlckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hpcHMnOlxuICAgICAgICBjb250cm9sQ29uZmlnLm11bHRpcGxlID0gdHJ1ZTtcbiAgICAgICAgLy8gVE9ETzogV2hlbiBhcHBlbmRUb0JvZHkgcGlja2VyIHdvcmtzIGJldHRlciBpbiB0YWJsZS9mb3JtXG4gICAgICAgIGNvbnRyb2wgPSBuZXcgUGlja2VyQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlbnRpdHlwaWNrZXInOlxuICAgICAgICAvLyBUT0RPOiBUaGlzIGRvZXNuJ3QgYmVsb25nIGluIHRoaXMgY29kZWJhc2VcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcucmVzdWx0c1RlbXBsYXRlID0gb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGUgfHwgRW50aXR5UGlja2VyUmVzdWx0cztcbiAgICAgICAgLy8gVE9ETzogV2hlbiBhcHBlbmRUb0JvZHkgcGlja2VyIHdvcmtzIGJldHRlciBpbiB0YWJsZS9mb3JtXG4gICAgICAgIGNvbnRyb2wgPSBuZXcgUGlja2VyQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwaWNrZXInOlxuICAgICAgICAvLyBUT0RPOiBXaGVuIGFwcGVuZFRvQm9keSBwaWNrZXIgd29ya3MgYmV0dGVyIGluIHRhYmxlL2Zvcm1cbiAgICAgICAgY29udHJvbCA9IG5ldyBQaWNrZXJDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RhdGV0aW1lJzpcbiAgICAgICAgY29udHJvbENvbmZpZy5taWxpdGFyeSA9IGNvbmZpZyA/ICEhY29uZmlnLm1pbGl0YXJ5IDogZmFsc2U7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgRGF0ZVRpbWVDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICBjb250cm9sQ29uZmlnLmRhdGVGb3JtYXQgPSBmaWVsZC5kYXRlRm9ybWF0O1xuICAgICAgICBjb250cm9sQ29uZmlnLnRleHRNYXNrRW5hYmxlZCA9IGZpZWxkLnRleHRNYXNrRW5hYmxlZDtcbiAgICAgICAgY29udHJvbENvbmZpZy5hbGxvd0ludmFsaWREYXRlID0gZmllbGQuYWxsb3dJbnZhbGlkRGF0ZTtcbiAgICAgICAgY29udHJvbENvbmZpZy5taWxpdGFyeSA9IGNvbmZpZyA/ICEhY29uZmlnLm1pbGl0YXJ5IDogZmFsc2U7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgRGF0ZUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgIGNvbnRyb2xDb25maWcubWlsaXRhcnkgPSBjb25maWcgPyAhIWNvbmZpZy5taWxpdGFyeSA6IGZhbHNlO1xuICAgICAgICBjb250cm9sID0gbmV3IFRpbWVDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgIGNhc2UgJ21vbmV5JzpcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgIGNhc2UgJ3BlcmNlbnRhZ2UnOlxuICAgICAgY2FzZSAnZmxvYXQnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAvLyBUT0RPOiBPbmx5IHR5cGVzIGZyb20gYGRldGVybWluZUlucHV0VHlwZWAgc2hvdWxkIGJlIHVzZWQgaW4gdGhpcyBjbGFzc1xuICAgICAgICBpZiAodHlwZSA9PT0gJ21vbmV5Jykge1xuICAgICAgICAgIHR5cGUgPSAnY3VycmVuY3knO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xDb25maWcudHlwZSA9IHR5cGU7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGV4dEJveENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGV4dEJveENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICBjb250cm9sID0gbmV3IFRleHRBcmVhQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0b3InOlxuICAgICAgICBjb250cm9sID0gbmV3IEVkaXRvckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdG9yLW1pbmltYWwnOlxuICAgICAgICBjb250cm9sID0gbmV3IEVkaXRvckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGNvbnRyb2wubWluaW1hbCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGlsZXMnOlxuICAgICAgICBjb250cm9sID0gbmV3IFRpbGVzQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIGNvbnRyb2xDb25maWcuY2hlY2tib3hMYWJlbCA9IGZpZWxkLmNoZWNrYm94TGFiZWw7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgQ2hlY2tib3hDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoZWNrbGlzdCc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgQ2hlY2tMaXN0Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgUmFkaW9Db250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgU2VsZWN0Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhZGRyZXNzJzpcbiAgICAgICAgY29udHJvbENvbmZpZy5yZXF1aXJlZCA9IGZpZWxkLnJlcXVpcmVkIHx8IGZhbHNlO1xuICAgICAgICBpZiAoSGVscGVycy5pc0JsYW5rKGNvbnRyb2xDb25maWcuY29uZmlnKSkge1xuICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnID0ge307XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcucmVxdWlyZWQgPSBmaWVsZC5yZXF1aXJlZDtcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcucmVhZE9ubHkgPSBjb250cm9sQ29uZmlnLnJlYWRPbmx5O1xuICAgICAgICBpZiAoZmllbGQuZmllbGRzICYmIGZpZWxkLmZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgICBmb3IgKGxldCBzdWJmaWVsZCBvZiBmaWVsZC5maWVsZHMpIHtcbiAgICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnW3N1YmZpZWxkLm5hbWVdID0ge1xuICAgICAgICAgICAgICByZXF1aXJlZDogISFzdWJmaWVsZC5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgaGlkZGVuOiAhIXN1YmZpZWxkLnJlYWRPbmx5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghSGVscGVycy5pc0VtcHR5KHN1YmZpZWxkLmxhYmVsKSkge1xuICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZ1tzdWJmaWVsZC5uYW1lXS5sYWJlbCA9IHN1YmZpZWxkLmxhYmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkoc3ViZmllbGQubWF4TGVuZ3RoKSkge1xuICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZ1tzdWJmaWVsZC5uYW1lXS5tYXhsZW5ndGggPSBzdWJmaWVsZC5tYXhMZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250cm9sQ29uZmlnLnJlcXVpcmVkID0gY29udHJvbENvbmZpZy5yZXF1aXJlZCB8fCBzdWJmaWVsZC5yZXF1aXJlZDtcbiAgICAgICAgICAgIGlmIChzdWJmaWVsZC5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYgKEhlbHBlcnMuaXNCbGFuayhjb250cm9sQ29uZmlnLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xDb25maWcudmFsdWUgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLnZhbHVlW3N1YmZpZWxkLm5hbWVdID0gc3ViZmllbGQuZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdWJmaWVsZC5uYW1lID09PSAnY291bnRyeUlEJykge1xuICAgICAgICAgICAgICBpZiAoSGVscGVycy5pc0JsYW5rKGNvbnRyb2xDb25maWcudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbENvbmZpZy52YWx1ZSA9IHt9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcudmFsdWVbc3ViZmllbGQubmFtZV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1YmZpZWxkLm5hbWUgPT09ICdzdGF0ZScgfHwgc3ViZmllbGQubmFtZSA9PT0gJ2NvdW50cnlJRCcpIHtcbiAgICAgICAgICAgICAgaWYgKHN1YmZpZWxkLm5hbWUgPT09ICdjb3VudHJ5SUQnKSB7XG4gICAgICAgICAgICAgICAgc3ViZmllbGQub3B0aW9uc1R5cGUgPSAnQ291bnRyeSc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCFzdWJmaWVsZC5vcHRpb25zVXJsKSB7XG4gICAgICAgICAgICAgICAgc3ViZmllbGQub3B0aW9uc1VybCA9IGBvcHRpb25zLyR7c3ViZmllbGQub3B0aW9uc1R5cGV9YDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZ1tzdWJmaWVsZC5uYW1lXS5waWNrZXJDb25maWcgPSB0aGlzLmdldENvbnRyb2xPcHRpb25zKHN1YmZpZWxkLCBodHRwLCBjb25maWcsIGZpZWxkRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xDb25maWcuaXNFbXB0eSA9IHRoaXMuaXNBZGRyZXNzRW1wdHk7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgQWRkcmVzc0NvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgRmlsZUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY3VzdG9tJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBDdXN0b21Db250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGV4dEJveENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gY29udHJvbDtcbiAgfVxuXG4gIHByaXZhdGUgc2hvdWxkQ3JlYXRlQ29udHJvbChmaWVsZCk6IGJvb2xlYW4ge1xuICAgIGlmIChmaWVsZC5zeXN0ZW1SZXF1aXJlZCkge1xuICAgICAgZmllbGQucmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgZmllbGQubmFtZSAhPT0gJ2lkJyAmJlxuICAgICAgKGZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbiAhPT0gJ1NZU1RFTScgfHwgWydhZGRyZXNzJywgJ2JpbGxpbmdBZGRyZXNzJywgJ3NlY29uZGFyeUFkZHJlc3MnXS5pbmRleE9mKGZpZWxkLm5hbWUpICE9PSAtMSkgJiZcbiAgICAgICFmaWVsZC5yZWFkT25seVxuICAgICk7XG4gIH1cblxuICB0b0NvbnRyb2xzKFxuICAgIG1ldGEsXG4gICAgY3VycmVuY3lGb3JtYXQsXG4gICAgaHR0cCxcbiAgICBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiB9LFxuICAgIG92ZXJyaWRlcz86IGFueSxcbiAgICBmb3JUYWJsZTogYm9vbGVhbiA9IGZhbHNlLFxuICApIHtcbiAgICBsZXQgY29udHJvbHMgPSBbXTtcbiAgICBpZiAobWV0YSAmJiBtZXRhLmZpZWxkcykge1xuICAgICAgbGV0IGZpZWxkcyA9IG1ldGEuZmllbGRzO1xuICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZENyZWF0ZUNvbnRyb2woZmllbGQpKSB7XG4gICAgICAgICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2xGb3JGaWVsZChmaWVsZCwgaHR0cCwgY29uZmlnLCBvdmVycmlkZXMsIGZvclRhYmxlKTtcbiAgICAgICAgICAvLyBTZXQgY3VycmVuY3kgZm9ybWF0XG4gICAgICAgICAgaWYgKGNvbnRyb2wuc3ViVHlwZSA9PT0gJ2N1cnJlbmN5Jykge1xuICAgICAgICAgICAgY29udHJvbC5jdXJyZW5jeUZvcm1hdCA9IGN1cnJlbmN5Rm9ybWF0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBBZGQgdG8gY29udHJvbHNcbiAgICAgICAgICBjb250cm9scy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyb2xzO1xuICB9XG5cbiAgdG9UYWJsZUNvbnRyb2xzKG1ldGEsIGN1cnJlbmN5Rm9ybWF0LCBodHRwLCBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiB9LCBvdmVycmlkZXM/OiBhbnkpIHtcbiAgICBsZXQgY29udHJvbHMgPSB0aGlzLnRvQ29udHJvbHMobWV0YSwgY3VycmVuY3lGb3JtYXQsIGh0dHAsIGNvbmZpZywgb3ZlcnJpZGVzLCB0cnVlKTtcbiAgICBsZXQgcmV0ID0ge307XG4gICAgY29udHJvbHMuZm9yRWFjaCgoY29udHJvbDogQmFzZUNvbnRyb2wpID0+IHtcbiAgICAgIHJldFtjb250cm9sLmtleV0gPSB7XG4gICAgICAgIGVkaXRvclR5cGU6IGNvbnRyb2wuX190eXBlLFxuICAgICAgICBlZGl0b3JDb25maWc6IGNvbnRyb2wuX19jb25maWcsXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICB0b0ZpZWxkU2V0cyhcbiAgICBtZXRhLFxuICAgIGN1cnJlbmN5Rm9ybWF0LFxuICAgIGh0dHAsXG4gICAgY29uZmlnOiB7IHRva2VuPzogc3RyaW5nOyByZXN0VXJsPzogc3RyaW5nOyBtaWxpdGFyeT86IGJvb2xlYW4gfSxcbiAgICBvdmVycmlkZXM/LFxuICAgIGRhdGE/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICApIHtcbiAgICBsZXQgZmllbGRzZXRzOiBBcnJheTxOb3ZvRmllbGRzZXQ+ID0gW107XG4gICAgbGV0IGZvcm1GaWVsZHMgPSBbXTtcblxuICAgIGlmIChtZXRhICYmIG1ldGEuZmllbGRzKSB7XG4gICAgICBmb3JtRmllbGRzID0gdGhpcy5nZXRGb3JtRmllbGRzKG1ldGEpO1xuXG4gICAgICBmb3JtRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzSGVhZGVyKGZpZWxkKSkge1xuICAgICAgICAgIGlmIChmaWVsZC5lbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmluc2VydEhlYWRlclRvRmllbGRzZXRzKGZpZWxkc2V0cywgZmllbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRW1iZWRkZWRGaWVsZChmaWVsZCkpIHtcbiAgICAgICAgICB0aGlzLmluc2VydEhlYWRlclRvRmllbGRzZXRzKGZpZWxkc2V0cywgZmllbGQpO1xuXG4gICAgICAgICAgbGV0IGVtYmVkZGVkRmllbGRzID0gdGhpcy5nZXRFbWJlZGRlZEZpZWxkcyhmaWVsZCk7XG5cbiAgICAgICAgICBlbWJlZGRlZEZpZWxkcy5mb3JFYWNoKChlbWJlZGRlZEZpZWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG91bGRDcmVhdGVDb250cm9sKGVtYmVkZGVkRmllbGQpKSB7XG4gICAgICAgICAgICAgIGxldCBjb250cm9sID0gdGhpcy5jcmVhdGVDb250cm9sKGVtYmVkZGVkRmllbGQsIGRhdGEsIGh0dHAsIGNvbmZpZywgb3ZlcnJpZGVzLCBjdXJyZW5jeUZvcm1hdCk7XG4gICAgICAgICAgICAgIGNvbnRyb2wgPSB0aGlzLm1hcmtDb250cm9sQXNFbWJlZGRlZChjb250cm9sLCBmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24gPyBmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24udG9Mb3dlckNhc2UoKSA6IG51bGwpO1xuICAgICAgICAgICAgICBmaWVsZHNldHNbZmllbGRzZXRzLmxlbmd0aCAtIDFdLmNvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG91bGRDcmVhdGVDb250cm9sKGZpZWxkKSkge1xuICAgICAgICAgIGxldCBjb250cm9sID0gdGhpcy5jcmVhdGVDb250cm9sKGZpZWxkLCBkYXRhLCBodHRwLCBjb25maWcsIG92ZXJyaWRlcywgY3VycmVuY3lGb3JtYXQpO1xuICAgICAgICAgIGlmIChmaWVsZC5pbmxpbmVFbWJlZGRlZEFzc29jaWF0ZWRFbnRpdHlGaWVsZCkge1xuICAgICAgICAgICAgY29udHJvbCA9IHRoaXMubWFya0NvbnRyb2xBc0VtYmVkZGVkKGNvbnRyb2wsICdpbmxpbmVfZW1iZWRkZWQnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZmllbGRzZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZmllbGRzZXRzLnB1c2goeyBjb250cm9sczogW10gfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmllbGRzZXRzW2ZpZWxkc2V0cy5sZW5ndGggLSAxXS5jb250cm9scy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGZpZWxkc2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZmllbGRzZXRzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgY29udHJvbHM6IHRoaXMudG9Db250cm9scyhtZXRhLCBjdXJyZW5jeUZvcm1hdCwgaHR0cCwgY29uZmlnKSxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0VtYmVkZGVkRmllbGQoZmllbGQpIHtcbiAgICByZXR1cm4gZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uICYmIFsnZW1iZWRkZWQnXS5pbmNsdWRlcyhmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24udG9Mb3dlckNhc2UoKSkgJiYgIWZpZWxkLnJlYWRPbmx5O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDb250cm9sKGZpZWxkLCBkYXRhLCBodHRwLCBjb25maWcsIG92ZXJyaWRlcywgY3VycmVuY3lGb3JtYXQpIHtcbiAgICBjb25zdCBmaWVsZERhdGEgPSB0aGlzLmlzRW1iZWRkZWRGaWVsZERhdGEoZmllbGQsIGRhdGEpID8gdGhpcy5nZXRFbWJlZGRlZEZpZWxkRGF0YShmaWVsZCwgZGF0YSkgOiB0aGlzLmdldEZpZWxkRGF0YShmaWVsZCwgZGF0YSk7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2xGb3JGaWVsZChmaWVsZCwgaHR0cCwgY29uZmlnLCBvdmVycmlkZXMsIHVuZGVmaW5lZCwgZmllbGREYXRhKTtcbiAgICAvLyBTZXQgY3VycmVuY3kgZm9ybWF0XG4gICAgaWYgKGNvbnRyb2wuc3ViVHlwZSA9PT0gJ2N1cnJlbmN5Jykge1xuICAgICAgY29udHJvbC5jdXJyZW5jeUZvcm1hdCA9IGN1cnJlbmN5Rm9ybWF0O1xuICAgIH1cbiAgICByZXR1cm4gY29udHJvbDtcbiAgfVxuXG4gIHByaXZhdGUgaXNFbWJlZGRlZEZpZWxkRGF0YShmaWVsZCwgZGF0YSkge1xuICAgIHJldHVybiBkYXRhICYmIGZpZWxkLm5hbWUuaW5jbHVkZXMoJy4nKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmllbGREYXRhKGZpZWxkLCBkYXRhKSB7XG4gICAgcmV0dXJuIChkYXRhICYmIGRhdGFbZmllbGQubmFtZV0pIHx8IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldEVtYmVkZGVkRmllbGREYXRhKGZpZWxkLCBkYXRhKSB7XG4gICAgbGV0IFtwYXJlbnRGaWVsZE5hbWUsIGZpZWxkTmFtZV0gPSBmaWVsZC5uYW1lLnNwbGl0KCcuJyk7XG4gICAgcmV0dXJuIChkYXRhICYmIGRhdGFbcGFyZW50RmllbGROYW1lXSAmJiBkYXRhW3BhcmVudEZpZWxkTmFtZV1bZmllbGROYW1lXSkgfHwgbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rm9ybUZpZWxkcyhtZXRhKSB7XG4gICAgbGV0IHNlY3Rpb25IZWFkZXJzID0gbWV0YS5zZWN0aW9uSGVhZGVyc1xuICAgICAgPyBtZXRhLnNlY3Rpb25IZWFkZXJzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuaXNTZWN0aW9uSGVhZGVyID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfSlcbiAgICAgIDogW107XG5cbiAgICBsZXQgZmllbGRzID0gbWV0YS5maWVsZHMubWFwKChmaWVsZCkgPT4ge1xuICAgICAgaWYgKCFmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnc29ydE9yZGVyJykpIHtcbiAgICAgICAgZmllbGQuc29ydE9yZGVyID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgLSAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH0pO1xuXG4gICAgLy8gYnVpbGQgbGlzdCBvZiBmaWVsZHMgdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkIGlubGluZSBidXQgYmVsb25nIHRvIGFzc29jaWF0ZWQgZW50aXRpZXNcbiAgICBjb25zdCBpbmxpbmVFbWJlZGRlZEFzc29jaWF0ZWRFbnRpdHlGaWVsZHMgPSB0aGlzLmdldElubGluZUVtYmVkZGVkRmllbGRzKGZpZWxkcyk7XG5cbiAgICAvLyByZW1vdmUgdGhlIGlubGluZSBlbWJlZGRlZCBmaWVsZHMgYmVjYXVzZSB0aGUgYXNzb2NpYXRlZCBlbnRpdHkgZmllbGRzIHdlcmUgZXh0cmFjdGVkIGFib3ZlXG4gICAgLy8gYW5kIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHJlZ3VsYXIgbGlzdCBvZiBmaWVsZHMuIFRoaXMgcHJldmVudHMgdGhlIGZpZWxkcyBmcm9tIGJlaW5nIGFkZGVkIG11bHRpcGxlIHRpbWVzLlxuICAgIGZpZWxkcyA9IGZpZWxkcy5maWx0ZXIoKGYpID0+ICFmLmRhdGFTcGVjaWFsaXphdGlvbiB8fCBmLmRhdGFTcGVjaWFsaXphdGlvbi50b0xvd2VyQ2FzZSgpICE9PSAnaW5saW5lX2VtYmVkZGVkJyk7XG5cbiAgICAvLyBzb3J0IGZpZWxkc1xuICAgIHJldHVybiBbLi4uc2VjdGlvbkhlYWRlcnMsIC4uLmZpZWxkcywgLi4uaW5saW5lRW1iZWRkZWRBc3NvY2lhdGVkRW50aXR5RmllbGRzXS5zb3J0KEhlbHBlcnMuc29ydEJ5RmllbGQoWydzb3J0T3JkZXInLCAnbmFtZSddKSk7XG4gIH1cblxuICBwcml2YXRlIGdldElubGluZUVtYmVkZGVkRmllbGRzKGZpZWxkcykge1xuICAgIGxldCBpbmxpbmVFbWJlZGRlZEFzc29jaWF0ZWRFbnRpdHlGaWVsZHMgPSBbXTtcbiAgICBmaWVsZHNcbiAgICAgIC5maWx0ZXIoKGYpID0+IGYuZGF0YVNwZWNpYWxpemF0aW9uICYmIGYuZGF0YVNwZWNpYWxpemF0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdpbmxpbmVfZW1iZWRkZWQnKVxuICAgICAgLmZvckVhY2goKGYpID0+IHtcbiAgICAgICAgaW5saW5lRW1iZWRkZWRBc3NvY2lhdGVkRW50aXR5RmllbGRzID0gWy4uLmlubGluZUVtYmVkZGVkQXNzb2NpYXRlZEVudGl0eUZpZWxkcywgLi4udGhpcy5nZXRBc3NvY2lhdGVkRmllbGRzRm9ySW5saW5lRW1iZWRkZWQoZildO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGlubGluZUVtYmVkZGVkQXNzb2NpYXRlZEVudGl0eUZpZWxkcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QXNzb2NpYXRlZEZpZWxkc0ZvcklubGluZUVtYmVkZGVkKGZpZWxkKSB7XG4gICAgbGV0IGFzc29jaWF0ZWRFbnRpdHlGaWVsZHMgPSBbXTtcbiAgICBhc3NvY2lhdGVkRW50aXR5RmllbGRzID0gdGhpcy5nZXRFbWJlZGRlZEZpZWxkcyhmaWVsZCkubWFwKChhZWYpID0+IHtcbiAgICAgIGFlZi5pbmxpbmVFbWJlZGRlZEFzc29jaWF0ZWRFbnRpdHlGaWVsZCA9IHRydWU7XG4gICAgICByZXR1cm4gYWVmO1xuICAgIH0pO1xuICAgIHJldHVybiBhc3NvY2lhdGVkRW50aXR5RmllbGRzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbWJlZGRlZEZpZWxkcyhzdWJIZWFkZXIpIHtcbiAgICByZXR1cm4gc3ViSGVhZGVyLmFzc29jaWF0ZWRFbnRpdHkuZmllbGRzXG4gICAgICAuZmlsdGVyKChmaWVsZCkgPT4gZmllbGQubmFtZSAhPT0gJ2lkJylcbiAgICAgIC5tYXAoKGZpZWxkKSA9PiB7XG4gICAgICAgIGlmICghZmllbGQubmFtZS5zdGFydHNXaXRoKGAke3N1YkhlYWRlci5uYW1lfS5gKSkge1xuICAgICAgICAgIGZpZWxkLm5hbWUgPSBgJHtzdWJIZWFkZXIubmFtZX0uJHtmaWVsZC5uYW1lfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgICAgfSlcbiAgICAgIC5zb3J0KEhlbHBlcnMuc29ydEJ5RmllbGQoWydzb3J0T3JkZXInLCAnbmFtZSddKSk7XG4gIH1cblxuICBwcml2YXRlIGlzSGVhZGVyKGZpZWxkKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFIZWxwZXJzLmlzQmxhbmsoZmllbGQpICYmIGZpZWxkLmhhc093blByb3BlcnR5KCdpc1NlY3Rpb25IZWFkZXInKSAmJiBmaWVsZC5pc1NlY3Rpb25IZWFkZXI7XG4gIH1cblxuICBwcml2YXRlIGluc2VydEhlYWRlclRvRmllbGRzZXRzKGZpZWxkc2V0cywgZmllbGQpIHtcbiAgICBmaWVsZHNldHMucHVzaCh7XG4gICAgICB0aXRsZTogZmllbGQubGFiZWwsXG4gICAgICBpY29uOiBmaWVsZC5pY29uIHx8ICdiaGktc2VjdGlvbicsXG4gICAgICBjb250cm9sczogW10sXG4gICAgICBpc0VtYmVkZGVkOiBmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24gJiYgZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdlbWJlZGRlZCcsXG4gICAgICBpc0lubGluZUVtYmVkZGVkOiBmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24gJiYgZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdpbmxpbmVfZW1iZWRkZWQnLFxuICAgICAga2V5OiBmaWVsZC5uYW1lLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXJrQ29udHJvbEFzRW1iZWRkZWQoY29udHJvbCwgZGF0YVNwZWNpYWxpemF0aW9uPzogJ2VtYmVkZGVkJyB8ICdpbmxpbmVfZW1iZWRkZWQnKSB7XG4gICAgaWYgKEhlbHBlcnMuaXNCbGFuayhjb250cm9sWydjb25maWcnXSkpIHtcbiAgICAgIGNvbnRyb2xbJ2NvbmZpZyddID0ge307XG4gICAgfVxuICAgIGNvbnRyb2xbJ2NvbmZpZyddWydlbWJlZGRlZCddID0gdHJ1ZTtcbiAgICBjb250cm9sLmlzRW1iZWRkZWQgPSBkYXRhU3BlY2lhbGl6YXRpb24gPT09ICdlbWJlZGRlZCc7XG4gICAgY29udHJvbC5pc0lubGluZUVtYmVkZGVkID0gZGF0YVNwZWNpYWxpemF0aW9uID09PSAnaW5saW5lX2VtYmVkZGVkJztcbiAgICByZXR1cm4gY29udHJvbDtcbiAgfVxuXG4gIGdldENvbnRyb2xPcHRpb25zKGZpZWxkOiBhbnksIGh0dHA6IGFueSwgY29uZmlnOiB7IHRva2VuPzogc3RyaW5nOyByZXN0VXJsPzogc3RyaW5nOyBtaWxpdGFyeT86IGJvb2xlYW4gfSwgZmllbGREYXRhPzogYW55KTogYW55IHtcbiAgICAvLyBUT0RPOiBUaGUgdG9rZW4gcHJvcGVydHkgb2YgY29uZmlnIGlzIHRoZSBvbmx5IHByb3BlcnR5IHVzZWQ7IGp1c3QgcGFzcyBpbiBgdG9rZW46IHN0cmluZ2BcbiAgICBpZiAoZmllbGQuZGF0YVR5cGUgPT09ICdCb29sZWFuJyAmJiAhZmllbGQub3B0aW9ucykge1xuICAgICAgLy8gVE9ETzogZGF0YVR5cGUgc2hvdWxkIG9ubHkgYmUgZGV0ZXJtaW5lZCBieSBgZGV0ZXJtaW5lSW5wdXRUeXBlYCB3aGljaCBkb2Vzbid0IGV2ZXIgcmV0dXJuICdCb29sZWFuJyBpdFxuICAgICAgLy8gVE9ETzogKGNvbnQuKSByZXR1cm5zIGB0aWxlc2BcbiAgICAgIHJldHVybiBbeyB2YWx1ZTogZmFsc2UsIGxhYmVsOiB0aGlzLmxhYmVscy5ubyB9LCB7IHZhbHVlOiB0cnVlLCBsYWJlbDogdGhpcy5sYWJlbHMueWVzIH1dO1xuICAgIH0gZWxzZSBpZiAoZmllbGQud29ya2Zsb3dPcHRpb25zICYmIGZpZWxkRGF0YSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0V29ya2Zsb3dPcHRpb25zKGZpZWxkLndvcmtmbG93T3B0aW9ucywgZmllbGREYXRhKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uID09PSAnU1BFQ0lBTElaRURfT1BUSU9OUycgfHxcbiAgICAgIChmaWVsZC5vcHRpb25zICYmIFsnU3BlY2lhbGl6ZWRPcHRpb25zTG9va3VwJywgJ1NpbXBsaWZpZWRPcHRpb25zTG9va3VwJ10uaW5jbHVkZXMoZmllbGQuZGF0YVR5cGUpKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZpZWxkLm9wdGlvbnMuZmlsdGVyKChvKSA9PiAhby5yZWFkT25seSk7XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zVXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zU2VydmljZS5nZXRPcHRpb25zQ29uZmlnKGh0dHAsIGZpZWxkLCBjb25maWcpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShmaWVsZC5vcHRpb25zKSAmJiBmaWVsZC50eXBlID09PSAnY2hpcHMnKSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IGZpZWxkLm9wdGlvbnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmaWVsZDogJ3ZhbHVlJyxcbiAgICAgICAgZm9ybWF0OiAnJGxhYmVsJyxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zKSB7XG4gICAgICByZXR1cm4gZmllbGQub3B0aW9ucztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldFdvcmtmbG93T3B0aW9ucyhcbiAgICB3b3JrZmxvd09wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4gICAgZmllbGREYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICApOiBBcnJheTx7IHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7IGxhYmVsOiBzdHJpbmcgfCBudW1iZXIgfT4ge1xuICAgIGxldCBjdXJyZW50VmFsdWU6IHsgdmFsdWU6IHN0cmluZyB8IG51bWJlcjsgbGFiZWw6IHN0cmluZyB8IG51bWJlciB9O1xuICAgIGlmIChmaWVsZERhdGEuaWQpIHtcbiAgICAgIGN1cnJlbnRWYWx1ZSA9IHsgdmFsdWU6IGZpZWxkRGF0YS5pZCwgbGFiZWw6IGZpZWxkRGF0YS5sYWJlbCA/IGZpZWxkRGF0YS5sYWJlbCA6IGZpZWxkRGF0YS5pZCB9O1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRXb3JrZmxvd09wdGlvbjogbnVtYmVyIHwgc3RyaW5nID0gZmllbGREYXRhLmlkID8gZmllbGREYXRhLmlkIDogJ2luaXRpYWwnO1xuICAgIGxldCB1cGRhdGVXb3JrZmxvd09wdGlvbnM6IEFycmF5PHsgdmFsdWU6IHN0cmluZyB8IG51bWJlcjsgbGFiZWw6IHN0cmluZyB8IG51bWJlciB9PiA9IHdvcmtmbG93T3B0aW9uc1tjdXJyZW50V29ya2Zsb3dPcHRpb25dIHx8IFtdO1xuXG4gICAgaWYgKGN1cnJlbnRWYWx1ZSAmJiAhdXBkYXRlV29ya2Zsb3dPcHRpb25zLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSBjdXJyZW50VmFsdWUudmFsdWUpKSB7XG4gICAgICB1cGRhdGVXb3JrZmxvd09wdGlvbnMudW5zaGlmdChjdXJyZW50VmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB1cGRhdGVXb3JrZmxvd09wdGlvbnM7XG4gIH1cblxuICBzZXRJbml0aWFsVmFsdWVzKGNvbnRyb2xzOiBBcnJheTxOb3ZvQ29udHJvbENvbmZpZz4sIHZhbHVlczogYW55LCBrZWVwQ2xlYW4/OiBib29sZWFuLCBrZXlPdmVycmlkZT86IHN0cmluZykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBjb250cm9sc1tpXTtcbiAgICAgIGNvbnN0IGtleSA9IGtleU92ZXJyaWRlID8gY29udHJvbC5rZXkucmVwbGFjZShrZXlPdmVycmlkZSwgJycpIDogY29udHJvbC5rZXk7XG4gICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNba2V5XTtcblxuICAgICAgaWYgKEhlbHBlcnMuaXNCbGFuayh2YWx1ZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuZmlsdGVyKCh2YWwpID0+ICEoT2JqZWN0LmtleXModmFsKS5sZW5ndGggPT09IDAgJiYgdmFsLmNvbnN0cnVjdG9yID09PSBPYmplY3QpKTtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZS5kYXRhICYmIHZhbHVlLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29udHJvbC5kYXRhVHlwZSA9PT0gJ0RhdGUnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgY29udHJvbC5vcHRpb25zVHlwZSAhPT0gJ3NraXBDb252ZXJzaW9uJykge1xuICAgICAgICB2YWx1ZSA9IGRhdGVGbnMuc3RhcnRPZkRheSh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRyb2wudmFsdWUgPSB2YWx1ZTtcbiAgICAgIC8vIFRPRE86IGtlZXBDbGVhbiBpcyBub3QgcmVxdWlyZWQsIGJ1dCBpcyBhbHdheXMgdXNlZC4gSXQgc2hvdWxkIGRlZmF1bHQgKHRvIHRydWU/KVxuICAgICAgY29udHJvbC5kaXJ0eSA9ICFrZWVwQ2xlYW47XG4gICAgfVxuICB9XG5cbiAgc2V0SW5pdGlhbFZhbHVlc0ZpZWxkc2V0cyhmaWVsZHNldHM6IEFycmF5PE5vdm9GaWVsZHNldD4sIHZhbHVlcywga2VlcENsZWFuPzogYm9vbGVhbikge1xuICAgIGZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgdGhpcy5zZXRJbml0aWFsVmFsdWVzKGZpZWxkc2V0LmNvbnRyb2xzLCB2YWx1ZXMsIGtlZXBDbGVhbik7XG4gICAgfSk7XG4gIH1cblxuICBmb3JjZVNob3dBbGxDb250cm9scyhjb250cm9sczogQXJyYXk8Tm92b0NvbnRyb2xDb25maWc+KSB7XG4gICAgY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgY29udHJvbC5oaWRkZW4gPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlU2hvd0FsbENvbnRyb2xzSW5GaWVsZHNldHMoZmllbGRzZXRzOiBBcnJheTxOb3ZvRmllbGRzZXQ+KSB7XG4gICAgZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgIGNvbnRyb2wuaGlkZGVuID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlVmFsaWRhdGlvbihmb3JtOiBOb3ZvRm9ybUdyb3VwKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXMoZm9ybS5jb250cm9scykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGxldCBjb250cm9sOiBhbnkgPSBmb3JtLmNvbnRyb2xzW2tleV07XG4gICAgICBpZiAoY29udHJvbC5yZXF1aXJlZCAmJiBIZWxwZXJzLmlzQmxhbmsoZm9ybS52YWx1ZVtjb250cm9sLmtleV0pKSB7XG4gICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc0FkZHJlc3NFbXB0eShjb250cm9sOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgZmllbGRMaXN0OiBzdHJpbmdbXSA9IFsnYWRkcmVzczEnLCAnYWRkcmVzczInLCAnY2l0eScsICdzdGF0ZScsICd6aXAnLCAnY291bnRyeUlEJ107XG4gICAgbGV0IHZhbGlkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBpZiAoY29udHJvbC52YWx1ZSAmJiBjb250cm9sLmNvbmZpZykge1xuICAgICAgZmllbGRMaXN0LmZvckVhY2goKHN1YmZpZWxkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICgoc3ViZmllbGQgIT09ICdjb3VudHJ5SUQnICYmXG4gICAgICAgICAgICAhSGVscGVycy5pc0VtcHR5KGNvbnRyb2wuY29uZmlnW3N1YmZpZWxkXSkgJiZcbiAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnW3N1YmZpZWxkXS5yZXF1aXJlZCAmJlxuICAgICAgICAgICAgKEhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlW3N1YmZpZWxkXSkgfHwgSGVscGVycy5pc0VtcHR5KGNvbnRyb2wudmFsdWVbc3ViZmllbGRdKSkpIHx8XG4gICAgICAgICAgICAoc3ViZmllbGQgPT09ICdjb3VudHJ5SUQnICYmXG4gICAgICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29udHJvbC5jb25maWcuY291bnRyeUlEKSAmJlxuICAgICAgICAgICAgICBjb250cm9sLmNvbmZpZy5jb3VudHJ5SUQucmVxdWlyZWQgJiZcbiAgICAgICAgICAgICAgSGVscGVycy5pc0VtcHR5KGNvbnRyb2wudmFsdWUuY291bnRyeU5hbWUpKSkgJiZcbiAgICAgICAgICAhKFxuICAgICAgICAgICAgc3ViZmllbGQgPT09ICdzdGF0ZScgJiZcbiAgICAgICAgICAgICFIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZS5jb3VudHJ5TmFtZSkgJiZcbiAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZyAmJlxuICAgICAgICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zICYmXG4gICAgICAgICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMubGVuZ3RoID09PSAwXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGFydERhdGVGcm9tUmFuZ2UoZGF0ZVJhbmdlOiB7IG1pbkRhdGU6IHN0cmluZzsgbWluT2Zmc2V0OiBudW1iZXIgfSk6IERhdGUge1xuICAgIGlmIChkYXRlUmFuZ2UubWluRGF0ZSkge1xuICAgICAgcmV0dXJuIGRhdGVGbnMucGFyc2UoZGF0ZVJhbmdlLm1pbkRhdGUpO1xuICAgIH0gZWxzZSBpZiAoZGF0ZVJhbmdlLm1pbk9mZnNldCkge1xuICAgICAgcmV0dXJuIGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZUb2RheSgpLCBkYXRlUmFuZ2UubWluT2Zmc2V0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtaW4gc3RhcnQgZGF0ZSBvZiBhIERhdGUgYmFzZSBvbiBmaWVsZCBkYXRhLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTdGFydERhdGUoZmllbGQ6IGFueSk6IERhdGUgfCBudWxsIHtcbiAgICBpZiAoZmllbGQuYWxsb3dlZERhdGVSYW5nZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhcnREYXRlRnJvbVJhbmdlKGZpZWxkLmFsbG93ZWREYXRlUmFuZ2UpO1xuICAgIH1cbiAgICAvLyB0aGVyZSBpcyBubyByZXN0cmljdGlvbiBvbiB0aGUgc3RhcnQgZGF0ZVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBpbmZlclN0YXJ0RGF0ZShjb250cm9sQ29uZmlnLCBmaWVsZCkge1xuICAgIGlmIChmaWVsZC5kYXRhVHlwZSA9PT0gJ0RhdGUnKSB7XG4gICAgICBjb25zdCBzdGFydERhdGUgPSB0aGlzLmdldFN0YXJ0RGF0ZShmaWVsZCk7XG4gICAgICBpZiAoc3RhcnREYXRlKSB7XG4gICAgICAgIGNvbnRyb2xDb25maWcuc3RhcnREYXRlID0gc3RhcnREYXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXJ0RGF0ZTtcbiAgICB9XG4gIH1cblxuICBpbmZsYXRlRW1iZWRkZWRQcm9wZXJ0aWVzKGRhdGE6IG9iamVjdCk6IG9iamVjdCB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIE9iamVjdC5rZXlzKGRhdGEpXG4gICAgICAgIC5maWx0ZXIoKGZpZWxkTmFtZSkgPT4gZmllbGROYW1lLmluY2x1ZGVzKCcuJykpXG4gICAgICAgIC5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgIGxldCBbcGFyZW50RmllbGROYW1lLCBmaWVsZE5hbWVdID0gZmllbGQuc3BsaXQoJy4nKTtcbiAgICAgICAgICBpZiAoIWRhdGFbcGFyZW50RmllbGROYW1lXSkge1xuICAgICAgICAgICAgZGF0YVtwYXJlbnRGaWVsZE5hbWVdID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGFbcGFyZW50RmllbGROYW1lXVtmaWVsZE5hbWVdID0gZGF0YVtmaWVsZF07XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZmllbGRdO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuIl19