/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        controls.forEach(function (control) {
            /** @type {?} */
            var value = Helpers.isBlank(control.value) ? '' : control.value;
            group[control.key] = new NovoFormControl(value, control);
        });
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
        controls.forEach(function (control) {
            /** @type {?} */
            var value = Helpers.isBlank(control.value) ? '' : control.value;
            /** @type {?} */
            var formControl = new NovoFormControl(value, control);
            formGroup.addControl(control.key, formControl);
        });
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
        controls.forEach(function (control) {
            formGroup.removeControl(control.key);
        });
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
        fieldsets.forEach(function (fieldset) {
            controls.push.apply(controls, tslib_1.__spread(fieldset.controls));
        });
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
        if (forTable === void 0) { forTable = false; }
        var e_1, _a;
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
            fields.forEach(function (field) {
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
            });
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
        controls.forEach(function (control) {
            ret[control.key] = {
                editorType: control.__type,
                editorConfig: control.__config,
            };
        });
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
            formFields.forEach(function (field) {
                if (_this.isHeader(field)) {
                    if (field.enabled) {
                        _this.insertHeaderToFieldsets(fieldsets, field);
                    }
                }
                else if (_this.isEmbeddedField(field)) {
                    _this.insertHeaderToFieldsets(fieldsets, field);
                    /** @type {?} */
                    var embeddedFields = _this.getEmbeddedFields(field);
                    embeddedFields.forEach(function (embeddedField) {
                        if (_this.shouldCreateControl(embeddedField)) {
                            /** @type {?} */
                            var control = _this.createControl(embeddedField, data, http, config, overrides, currencyFormat);
                            control = _this.markControlAsEmbedded(control);
                            fieldsets[fieldsets.length - 1].controls.push(control);
                        }
                    });
                }
                else if (_this.shouldCreateControl(field)) {
                    /** @type {?} */
                    var control = _this.createControl(field, data, http, config, overrides, currencyFormat);
                    if (fieldsets.length === 0) {
                        fieldsets.push({ controls: [] });
                    }
                    fieldsets[fieldsets.length - 1].controls.push(control);
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
        return field.dataSpecialization && field.dataSpecialization.toLowerCase() === 'embedded' && !field.readOnly;
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
            ? meta.sectionHeaders.map(function (element) {
                element.isSectionHeader = true;
                return element;
            })
            : [];
        /** @type {?} */
        var fields = meta.fields.map(function (field) {
            if (!field.hasOwnProperty('sortOrder')) {
                field.sortOrder = Number.MAX_SAFE_INTEGER - 1;
            }
            return field;
        });
        return tslib_1.__spread(sectionHeaders, fields).sort(Helpers.sortByField(['sortOrder', 'name']));
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
            .filter(function (field) { return field.name !== 'id'; })
            .map(function (field) {
            field.name = subHeader.name + "." + field.name;
            return field;
        })
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
        });
    };
    /**
     * @private
     * @param {?} control
     * @return {?}
     */
    FormUtils.prototype.markControlAsEmbedded = /**
     * @private
     * @param {?} control
     * @return {?}
     */
    function (control) {
        if (Helpers.isBlank(control['config'])) {
            control['config'] = {};
        }
        control['config']['embedded'] = true;
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
        else if (field.dataSpecialization === 'SPECIALIZED_OPTIONS') {
            return field.options.filter(function (o) { return !o.readOnly; });
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
        if (currentValue && !updateWorkflowOptions.find(function (option) { return option.value === currentValue.value; })) {
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
                value = value.filter(function (val) { return !(Object.keys(val).length === 0 && val.constructor === Object); });
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
        fieldsets.forEach(function (fieldset) {
            _this.setInitialValues(fieldset.controls, values, keepClean);
        });
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
        controls.forEach(function (control) {
            control.hidden = false;
        });
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
        fieldsets.forEach(function (fieldset) {
            fieldset.controls.forEach(function (control) {
                control.hidden = false;
            });
        });
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
        Object.keys(form.controls).forEach(function (key) {
            /** @type {?} */
            var control = form.controls[key];
            if (control.required && Helpers.isBlank(form.value[control.key])) {
                control.markAsDirty();
                control.markAsTouched();
            }
        });
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
            fieldList.forEach(function (subfield) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybVV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL2Zvcm0tdXRpbHMvRm9ybVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7O0FBRXBDLE9BQU8sRUFDTCxjQUFjLEVBRWQsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsV0FBVyxFQUNYLGVBQWUsRUFDZixhQUFhLEVBQ2IsV0FBVyxFQUVYLGFBQWEsRUFDYixZQUFZLEVBQ1osYUFBYSxFQUNiLGVBQWUsRUFDZixjQUFjLEVBQ2QsWUFBWSxFQUNaLFdBQVcsR0FDWixNQUFNLGtDQUFrQyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ2pJLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFekU7SUFtQ0UsbUJBQW1CLE1BQXdCLEVBQVMsY0FBOEI7UUFBL0QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFqQ2xGLDJCQUFzQixHQUFhO1lBQ2pDLFdBQVc7WUFDWCxlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLE1BQU07WUFDTixhQUFhO1lBQ2IsVUFBVTtZQUNWLGVBQWU7WUFDZixRQUFRO1lBQ1IsV0FBVztTQUNaLENBQUM7UUFDRix1QkFB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RyxTQUFTLENBQUM7YUFDckM7WUFDRCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUNILENBQUM7O2dCQTV2QkYsVUFBVTs7OztnQkFIRixnQkFBZ0I7Z0JBQ2hCLGNBQWM7O0lBK3ZCdkIsZ0JBQUM7Q0FBQSxBQTd2QkQsSUE2dkJDO1NBNXZCWSxTQUFTOzs7SUFDcEIsMkNBVUU7O0lBQ0YsdUNBb0JFOztJQUVVLDJCQUErQjs7SUFBRSxtQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOR1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG4vLyBBcHBcbmltcG9ydCB7XG4gIEFkZHJlc3NDb250cm9sLFxuICBCYXNlQ29udHJvbCxcbiAgQ2hlY2tib3hDb250cm9sLFxuICBDaGVja0xpc3RDb250cm9sLFxuICBDdXN0b21Db250cm9sLFxuICBEYXRlQ29udHJvbCxcbiAgRGF0ZVRpbWVDb250cm9sLFxuICBFZGl0b3JDb250cm9sLFxuICBGaWxlQ29udHJvbCxcbiAgTm92b0NvbnRyb2xDb25maWcsXG4gIFBpY2tlckNvbnRyb2wsXG4gIFJhZGlvQ29udHJvbCxcbiAgU2VsZWN0Q29udHJvbCxcbiAgVGV4dEFyZWFDb250cm9sLFxuICBUZXh0Qm94Q29udHJvbCxcbiAgVGlsZXNDb250cm9sLFxuICBUaW1lQ29udHJvbCxcbn0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybS9Gb3JtQ29udHJvbHMnO1xuaW1wb3J0IHsgRW50aXR5UGlja2VyUmVzdWx0LCBFbnRpdHlQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvcGlja2VyL2V4dHJhcy9lbnRpdHktcGlja2VyLXJlc3VsdHMvRW50aXR5UGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvRmllbGRzZXQsIEZvcm1GaWVsZCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0vRm9ybUludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm92b0Zvcm1Db250cm9sIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybS9Ob3ZvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IHsgTm92b0Zvcm1Hcm91cCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0vTm92b0Zvcm1Hcm91cCc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9vcHRpb25zL09wdGlvbnNTZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1VdGlscyB7XG4gIEFTU09DSUFURURfRU5USVRZX0xJU1Q6IHN0cmluZ1tdID0gW1xuICAgICdDYW5kaWRhdGUnLFxuICAgICdDbGllbnRDb250YWN0JyxcbiAgICAnQ2xpZW50Q29ycG9yYXRpb24nLFxuICAgICdMZWFkJyxcbiAgICAnT3Bwb3J0dW5pdHknLFxuICAgICdKb2JPcmRlcicsXG4gICAgJ0NvcnBvcmF0ZVVzZXInLFxuICAgICdQZXJzb24nLFxuICAgICdQbGFjZW1lbnQnLFxuICBdO1xuICBFTlRJVFlfUElDS0VSX0xJU1Q6IHN0cmluZ1tdID0gW1xuICAgICdDYW5kaWRhdGUnLFxuICAgICdDYW5kaWRhdGVUZXh0JyxcbiAgICAnQ2xpZW50JyxcbiAgICAnQ2xpZW50VGV4dCcsXG4gICAgJ0NsaWVudENvbnRhY3QnLFxuICAgICdDbGllbnRDb250YWN0VGV4dCcsXG4gICAgJ0NsaWVudENvcnBvcmF0aW9uJyxcbiAgICAnQ2xpZW50Q29ycG9yYXRpb25UZXh0JyxcbiAgICAnTGVhZCcsXG4gICAgJ0xlYWRUZXh0JyxcbiAgICAnT3Bwb3J0dW5pdHknLFxuICAgICdPcHBvcnR1bml0eVRleHQnLFxuICAgICdKb2JPcmRlcicsXG4gICAgJ0pvYk9yZGVyVGV4dCcsXG4gICAgJ0NvcnBvcmF0ZVVzZXInLFxuICAgICdDb3Jwb3JhdGVVc2VyVGV4dCcsXG4gICAgJ1BlcnNvbicsXG4gICAgJ1BlcnNvblRleHQnLFxuICAgICdQbGFjZW1lbnQnLFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHB1YmxpYyBvcHRpb25zU2VydmljZTogT3B0aW9uc1NlcnZpY2UpIHt9XG5cbiAgdG9Gb3JtR3JvdXAoY29udHJvbHM6IEFycmF5PGFueT4pOiBOb3ZvRm9ybUdyb3VwIHtcbiAgICBsZXQgZ3JvdXA6IGFueSA9IHt9O1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IEhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlKSA/ICcnIDogY29udHJvbC52YWx1ZTtcbiAgICAgIGdyb3VwW2NvbnRyb2wua2V5XSA9IG5ldyBOb3ZvRm9ybUNvbnRyb2wodmFsdWUsIGNvbnRyb2wpO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgTm92b0Zvcm1Hcm91cChncm91cCk7XG4gIH1cblxuICBlbXB0eUZvcm1Hcm91cCgpOiBOb3ZvRm9ybUdyb3VwIHtcbiAgICByZXR1cm4gbmV3IE5vdm9Gb3JtR3JvdXAoe30pO1xuICB9XG5cbiAgYWRkQ29udHJvbHMoZm9ybUdyb3VwOiBOb3ZvRm9ybUdyb3VwLCBjb250cm9sczogQXJyYXk8Tm92b0NvbnRyb2xDb25maWc+KTogdm9pZCB7XG4gICAgY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWUpID8gJycgOiBjb250cm9sLnZhbHVlO1xuICAgICAgbGV0IGZvcm1Db250cm9sID0gbmV3IE5vdm9Gb3JtQ29udHJvbCh2YWx1ZSwgY29udHJvbCk7XG4gICAgICBmb3JtR3JvdXAuYWRkQ29udHJvbChjb250cm9sLmtleSwgZm9ybUNvbnRyb2wpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlQ29udHJvbHMoZm9ybUdyb3VwOiBOb3ZvRm9ybUdyb3VwLCBjb250cm9sczogQXJyYXk8Tm92b0NvbnRyb2xDb25maWc+KTogdm9pZCB7XG4gICAgY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgZm9ybUdyb3VwLnJlbW92ZUNvbnRyb2woY29udHJvbC5rZXkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHRvRm9ybUdyb3VwRnJvbUZpZWxkc2V0XG4gICAqIEBwYXJhbSBmaWVsZHNldHNcbiAgICovXG4gIHRvRm9ybUdyb3VwRnJvbUZpZWxkc2V0KGZpZWxkc2V0czogQXJyYXk8Tm92b0ZpZWxkc2V0Pik6IE5vdm9Gb3JtR3JvdXAge1xuICAgIGxldCBjb250cm9sczogQXJyYXk8Tm92b0Zvcm1Db250cm9sPiA9IFtdO1xuICAgIGZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgY29udHJvbHMucHVzaCguLi5maWVsZHNldC5jb250cm9scyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMudG9Gb3JtR3JvdXAoY29udHJvbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGhhc0Fzc29jaWF0ZWRFbnRpdHlcbiAgICogQHBhcmFtIGZpZWxkXG4gICAqL1xuICBoYXNBc3NvY2lhdGVkRW50aXR5KGZpZWxkOiBGb3JtRmllbGQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEoZmllbGQuYXNzb2NpYXRlZEVudGl0eSAmJiB+dGhpcy5BU1NPQ0lBVEVEX0VOVElUWV9MSVNULmluZGV4T2YoZmllbGQuYXNzb2NpYXRlZEVudGl0eS5lbnRpdHkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBkZXRlcm1pbmVJbnB1dFR5cGVcbiAgICogQHBhcmFtIGZpZWxkXG4gICAqL1xuICBkZXRlcm1pbmVJbnB1dFR5cGUoZmllbGQ6IEZvcm1GaWVsZCk6IHN0cmluZyB7XG4gICAgbGV0IHR5cGU6IHN0cmluZztcbiAgICBsZXQgZGF0YVNwZWNpYWxpemF0aW9uVHlwZU1hcCA9IHtcbiAgICAgIERBVEVUSU1FOiAnZGF0ZXRpbWUnLFxuICAgICAgVElNRTogJ3RpbWUnLFxuICAgICAgTU9ORVk6ICdjdXJyZW5jeScsXG4gICAgICBQRVJDRU5UQUdFOiAncGVyY2VudGFnZScsXG4gICAgICBIVE1MOiAnZWRpdG9yJyxcbiAgICAgICdIVE1MLU1JTklNQUwnOiAnZWRpdG9yLW1pbmltYWwnLFxuICAgICAgWUVBUjogJ3llYXInLFxuICAgICAgV09SS0ZMT1dfT1BUSU9OUzogJ3NlbGVjdCcsXG4gICAgICBTUEVDSUFMSVpFRF9PUFRJT05TOiAnc2VsZWN0JyxcbiAgICAgIFdvcmtmbG93T3B0aW9uc0xvb2t1cDogJ3NlbGVjdCcsXG4gICAgICBTcGVjaWFsaXplZE9wdGlvbnNMb29rdXA6ICdzZWxlY3QnLFxuICAgIH07XG4gICAgbGV0IGRhdGFUeXBlVG9UeXBlTWFwID0ge1xuICAgICAgVGltZXN0YW1wOiAnZGF0ZScsXG4gICAgICBEYXRlOiAnZGF0ZScsXG4gICAgICBCb29sZWFuOiAndGlsZXMnLFxuICAgIH07XG4gICAgbGV0IGlucHV0VHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIENIRUNLQk9YOiAncmFkaW8nLFxuICAgICAgUkFESU86ICdyYWRpbycsXG4gICAgICBTRUxFQ1Q6ICdzZWxlY3QnLFxuICAgICAgVElMRVM6ICd0aWxlcycsXG4gICAgfTtcbiAgICBsZXQgaW5wdXRUeXBlTXVsdGlUb1R5cGVNYXAgPSB7XG4gICAgICBDSEVDS0JPWDogJ2NoZWNrbGlzdCcsXG4gICAgICBSQURJTzogJ2NoZWNrbGlzdCcsXG4gICAgICBTRUxFQ1Q6ICdjaGlwcycsXG4gICAgfTtcbiAgICBsZXQgdHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIGZpbGU6ICdmaWxlJyxcbiAgICAgIENPTVBPU0lURTogJ2FkZHJlc3MnLFxuICAgIH07XG4gICAgbGV0IG51bWJlckRhdGFUeXBlVG9UeXBlTWFwID0ge1xuICAgICAgRG91YmxlOiAnZmxvYXQnLFxuICAgICAgQmlnRGVjaW1hbDogJ2Zsb2F0JyxcbiAgICAgIEludGVnZXI6ICdudW1iZXInLFxuICAgIH07XG4gICAgaWYgKGZpZWxkLnR5cGUgPT09ICdUT19NQU5ZJykge1xuICAgICAgaWYgKHRoaXMuaGFzQXNzb2NpYXRlZEVudGl0eShmaWVsZCkpIHtcbiAgICAgICAgaWYgKGZpZWxkLm11bHRpVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdHlwZSA9ICdlbnRpdHlwaWNrZXInO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR5cGUgPSAnZW50aXR5Y2hpcHMnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZmllbGQubXVsdGlWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0eXBlID0gJ3BpY2tlcic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHlwZSA9ICdjaGlwcyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdUT19PTkUnKSB7XG4gICAgICBpZiAoJ1NZU1RFTScgPT09IGZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbiAmJiBbJ1dvcmtmbG93T3B0aW9uc0xvb2t1cCcsICdTcGVjaWFsaXplZE9wdGlvbnNMb29rdXAnXS5pbmNsdWRlcyhmaWVsZC5kYXRhVHlwZSkpIHtcbiAgICAgICAgdHlwZSA9IGRhdGFTcGVjaWFsaXphdGlvblR5cGVNYXBbZmllbGQuZGF0YVR5cGVdO1xuICAgICAgfSBlbHNlIGlmIChbJ1dPUktGTE9XX09QVElPTlMnLCAnU1BFQ0lBTElaRURfT1BUSU9OUyddLmluY2x1ZGVzKGZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbikpIHtcbiAgICAgICAgdHlwZSA9IGRhdGFTcGVjaWFsaXphdGlvblR5cGVNYXBbZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uXTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5oYXNBc3NvY2lhdGVkRW50aXR5KGZpZWxkKSkge1xuICAgICAgICB0eXBlID0gJ2VudGl0eXBpY2tlcic7IC8vIFRPRE8hXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlID0gJ3BpY2tlcic7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zVXJsICYmIGZpZWxkLmlucHV0VHlwZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgIGlmIChmaWVsZC5vcHRpb25zVHlwZSAmJiB+dGhpcy5FTlRJVFlfUElDS0VSX0xJU1QuaW5kZXhPZihmaWVsZC5vcHRpb25zVHlwZSkpIHtcbiAgICAgICAgdHlwZSA9ICdlbnRpdHlwaWNrZXInOyAvLyBUT0RPIVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9ICdwaWNrZXInO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXMoZGF0YVNwZWNpYWxpemF0aW9uVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24pID4gLTEpIHtcbiAgICAgIHR5cGUgPSBkYXRhU3BlY2lhbGl6YXRpb25UeXBlTWFwW2ZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbl07XG4gICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhkYXRhVHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5kYXRhVHlwZSkgPiAtMSkge1xuICAgICAgdHlwZSA9IGRhdGFUeXBlVG9UeXBlTWFwW2ZpZWxkLmRhdGFUeXBlXTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLmlucHV0VHlwZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgdHlwZSA9ICd0ZXh0YXJlYSc7XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zICYmIE9iamVjdC5rZXlzKGlucHV0VHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5pbnB1dFR5cGUpID4gLTEgJiYgIWZpZWxkLm11bHRpVmFsdWUpIHtcbiAgICAgIHR5cGUgPSBpbnB1dFR5cGVUb1R5cGVNYXBbZmllbGQuaW5wdXRUeXBlXTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLm9wdGlvbnMgJiYgT2JqZWN0LmtleXMoaW5wdXRUeXBlTXVsdGlUb1R5cGVNYXApLmluZGV4T2YoZmllbGQuaW5wdXRUeXBlKSA+IC0xICYmIGZpZWxkLm11bHRpVmFsdWUpIHtcbiAgICAgIHR5cGUgPSBpbnB1dFR5cGVNdWx0aVRvVHlwZU1hcFtmaWVsZC5pbnB1dFR5cGVdO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXModHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC50eXBlKSA+IC0xKSB7XG4gICAgICB0eXBlID0gdHlwZVRvVHlwZU1hcFtmaWVsZC50eXBlXTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKG51bWJlckRhdGFUeXBlVG9UeXBlTWFwKS5pbmRleE9mKGZpZWxkLmRhdGFUeXBlKSA+IC0xKSB7XG4gICAgICB0eXBlID0gbnVtYmVyRGF0YVR5cGVUb1R5cGVNYXBbZmllbGQuZGF0YVR5cGVdO1xuICAgIH0gLyogZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm1VdGlsczogVGhpcyBmaWVsZCB0eXBlIGlzIHVuc3VwcG9ydGVkLicpO1xuICAgICAgICB9Ki9cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGlzRmllbGRFbmNyeXB0ZWQoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4ga2V5LmluZGV4T2YoJ2N1c3RvbUVuY3J5cHRlZCcpID4gLTE7XG4gIH1cblxuICBnZXRDb250cm9sRm9yRmllbGQoXG4gICAgZmllbGQ6IGFueSxcbiAgICBodHRwLFxuICAgIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuIH0sXG4gICAgb3ZlcnJpZGVzPzogYW55LFxuICAgIGZvclRhYmxlOiBib29sZWFuID0gZmFsc2UsXG4gICAgZmllbGREYXRhPzogYW55LFxuICApIHtcbiAgICAvLyBUT0RPOiBpZiBmaWVsZC50eXBlIG92ZXJyaWRlcyBgZGV0ZXJtaW5lSW5wdXRUeXBlYCB3ZSBzaG91bGQgdXNlIGl0IGluIHRoYXQgbWV0aG9kIG9yIHVzZSB0aGlzIG1ldGhvZFxuICAgIC8vIFRPRE86IChjb250LikgYXMgdGhlIHNldHRlciBvZiB0aGUgZmllbGQgYXJndW1lbnRcbiAgICBsZXQgdHlwZTogc3RyaW5nID0gdGhpcy5kZXRlcm1pbmVJbnB1dFR5cGUoZmllbGQpIHx8IGZpZWxkLnR5cGU7XG4gICAgbGV0IGNvbnRyb2w6IGFueTtcbiAgICBsZXQgY29udHJvbENvbmZpZzogTm92b0NvbnRyb2xDb25maWcgPSB7XG4gICAgICBtZXRhVHlwZTogZmllbGQudHlwZSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBrZXk6IGZpZWxkLm5hbWUsXG4gICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICBwbGFjZWhvbGRlcjogZmllbGQuaGludCB8fCAnJyxcbiAgICAgIHJlcXVpcmVkOiBmaWVsZC5yZXF1aXJlZCB8fCBmaWVsZC5zeXN0ZW1SZXF1aXJlZCxcbiAgICAgIGhpZGRlbjogIWZpZWxkLnJlcXVpcmVkLFxuICAgICAgZW5jcnlwdGVkOiB0aGlzLmlzRmllbGRFbmNyeXB0ZWQoZmllbGQubmFtZSA/IGZpZWxkLm5hbWUudG9TdHJpbmcoKSA6ICcnKSxcbiAgICAgIHZhbHVlOiBmaWVsZC52YWx1ZSB8fCBmaWVsZC5kZWZhdWx0VmFsdWUsXG4gICAgICBzb3J0T3JkZXI6IGZpZWxkLnNvcnRPcmRlcixcbiAgICAgIGFzc29jaWF0ZWRFbnRpdHk6IGZpZWxkLmFzc29jaWF0ZWRFbnRpdHksXG4gICAgICBvcHRpb25zVHlwZTogZmllbGQub3B0aW9uc1R5cGUsXG4gICAgICBtdWx0aXBsZTogZmllbGQubXVsdGlWYWx1ZSxcbiAgICAgIHJlYWRPbmx5OiAhIWZpZWxkLmRpc2FibGVkIHx8ICEhZmllbGQucmVhZE9ubHksXG4gICAgICBkaXNhYmxlZDogZmllbGQuZGlzYWJsZWQsXG4gICAgICBtYXhsZW5ndGg6IGZpZWxkLm1heExlbmd0aCxcbiAgICAgIGludGVyYWN0aW9uczogZmllbGQuaW50ZXJhY3Rpb25zLFxuICAgICAgZGF0YVNwZWNpYWxpemF0aW9uOiBmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24sXG4gICAgICBkYXRhVHlwZTogZmllbGQuZGF0YVR5cGUsXG4gICAgICBkZXNjcmlwdGlvbjogZmllbGQuZGVzY3JpcHRpb24gfHwgJycsXG4gICAgICB0b29sdGlwOiBmaWVsZC50b29sdGlwLFxuICAgICAgdG9vbHRpcFBvc2l0aW9uOiBmaWVsZC50b29sdGlwUG9zaXRpb24sXG4gICAgICBjdXN0b21Db250cm9sOiBmaWVsZC5jdXN0b21Db250cm9sLFxuICAgICAgdGVtcGxhdGU6IGZpZWxkLnRlbXBsYXRlLFxuICAgICAgY3VzdG9tQ29udHJvbENvbmZpZzogZmllbGQuY3VzdG9tQ29udHJvbENvbmZpZyxcbiAgICAgIHJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnM6IGZpZWxkLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMsXG4gICAgICB2YWxpZGF0b3JzOiBmaWVsZC52YWxpZGF0b3JzLFxuICAgICAgd2FybmluZzogZmllbGQud2FybmluZyxcbiAgICAgIGNvbmZpZzogZmllbGQuY29uZmlnIHx8IHt9LFxuICAgICAgY2xvc2VPblNlbGVjdDogZmllbGQuY2xvc2VPblNlbGVjdCxcbiAgICAgIGxheW91dE9wdGlvbnM6IGZpZWxkLmxheW91dE9wdGlvbnMsXG4gICAgfTtcbiAgICB0aGlzLmluZmVyU3RhcnREYXRlKGNvbnRyb2xDb25maWcsIGZpZWxkKTtcbiAgICAvLyBUT0RPOiBnZXRDb250cm9sT3B0aW9ucyBzaG91bGQgYWx3YXlzIHJldHVybiB0aGUgY29ycmVjdCBmb3JtYXRcbiAgICBjb25zdCBvcHRpb25zQ29uZmlnID0gdGhpcy5nZXRDb250cm9sT3B0aW9ucyhmaWVsZCwgaHR0cCwgY29uZmlnLCBmaWVsZERhdGEpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnNDb25maWcpICYmICEodHlwZSA9PT0gJ2NoaXBzJyB8fCB0eXBlID09PSAncGlja2VyJykpIHtcbiAgICAgIGNvbnRyb2xDb25maWcub3B0aW9ucyA9IG9wdGlvbnNDb25maWc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnNDb25maWcpICYmICh0eXBlID09PSAnY2hpcHMnIHx8IHR5cGUgPT09ICdwaWNrZXInKSkge1xuICAgICAgY29udHJvbENvbmZpZy5jb25maWcgPSB7XG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnNDb25maWcsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAob3B0aW9uc0NvbmZpZykge1xuICAgICAgY29udHJvbENvbmZpZy5jb25maWcgPSB7XG4gICAgICAgIC4uLm9wdGlvbnNDb25maWcsXG4gICAgICAgIC4uLihjb250cm9sQ29uZmlnICYmIGNvbnRyb2xDb25maWcuY29uZmlnKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICd5ZWFyJykge1xuICAgICAgY29udHJvbENvbmZpZy5tYXhsZW5ndGggPSA0O1xuICAgIH1cbiAgICAvLyBUT0RPOiBPdmVycmlkZXMgc2hvdWxkIGJlIGFuIGl0ZXJhYmxlIG9mIGFsbCBwcm9wZXJ0aWVzIChwb3RlbnRpYWxseSBhIHByaXZhdGUgbWV0aG9kKVxuICAgIGxldCBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZTtcbiAgICBsZXQgb3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGU7XG4gICAgaWYgKG92ZXJyaWRlcyAmJiBvdmVycmlkZXNbZmllbGQubmFtZV0pIHtcbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0ucmVzdWx0c1RlbXBsYXRlKSB7XG4gICAgICAgIG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnJlc3VsdHNUZW1wbGF0ZTtcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcucmVzdWx0c1RlbXBsYXRlID0gb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGU7XG4gICAgICAgIGRlbGV0ZSBvdmVycmlkZXNbZmllbGQubmFtZV0ucmVzdWx0c1RlbXBsYXRlO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5vdmVycmlkZVByZXZpZXdUZW1wbGF0ZSkge1xuICAgICAgICBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5vdmVycmlkZVByZXZpZXdUZW1wbGF0ZTtcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcub3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGUgPSBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZTtcbiAgICAgICAgZGVsZXRlIG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5vdmVycmlkZVByZXZpZXdUZW1wbGF0ZTtcbiAgICAgIH1cbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0ucGlja2VyQ2FsbGJhY2spIHtcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcuY2FsbGJhY2sgPSBvdmVycmlkZXNbZmllbGQubmFtZV0ucGlja2VyQ2FsbGJhY2s7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnR5cGUpIHtcbiAgICAgICAgdHlwZSA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS50eXBlO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5jb2x1bW5zKSB7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLmNvbHVtbnMgPSBvdmVycmlkZXNbZmllbGQubmFtZV0uY29sdW1ucztcbiAgICAgICAgY29udHJvbENvbmZpZy5jbG9zZU9uU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgZGVsZXRlIGNvbnRyb2xDb25maWcubGFiZWw7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLndhcm5pbmcpIHtcbiAgICAgICAgY29udHJvbENvbmZpZy53YXJuaW5nID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLndhcm5pbmc7XG4gICAgICB9XG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRyb2xDb25maWcsIG92ZXJyaWRlc1tmaWVsZC5uYW1lXSk7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdlbnRpdHljaGlwcyc6XG4gICAgICAgIC8vIFRPRE86IFRoaXMgZG9lc24ndCBiZWxvbmcgaW4gdGhpcyBjb2RlYmFzZVxuICAgICAgICBjb250cm9sQ29uZmlnLm11bHRpcGxlID0gdHJ1ZTtcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcucmVzdWx0c1RlbXBsYXRlID0gb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGUgfHwgRW50aXR5UGlja2VyUmVzdWx0cztcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcucHJldmlld1RlbXBsYXRlID0gb3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGUgfHwgRW50aXR5UGlja2VyUmVzdWx0O1xuICAgICAgICAvLyBUT0RPOiBXaGVuIGFwcGVuZFRvQm9keSBwaWNrZXIgd29ya3MgYmV0dGVyIGluIHRhYmxlL2Zvcm1cbiAgICAgICAgY29udHJvbCA9IG5ldyBQaWNrZXJDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoaXBzJzpcbiAgICAgICAgY29udHJvbENvbmZpZy5tdWx0aXBsZSA9IHRydWU7XG4gICAgICAgIC8vIFRPRE86IFdoZW4gYXBwZW5kVG9Cb2R5IHBpY2tlciB3b3JrcyBiZXR0ZXIgaW4gdGFibGUvZm9ybVxuICAgICAgICBjb250cm9sID0gbmV3IFBpY2tlckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZW50aXR5cGlja2VyJzpcbiAgICAgICAgLy8gVE9ETzogVGhpcyBkb2Vzbid0IGJlbG9uZyBpbiB0aGlzIGNvZGViYXNlXG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlIHx8IEVudGl0eVBpY2tlclJlc3VsdHM7XG4gICAgICAgIC8vIFRPRE86IFdoZW4gYXBwZW5kVG9Cb2R5IHBpY2tlciB3b3JrcyBiZXR0ZXIgaW4gdGFibGUvZm9ybVxuICAgICAgICBjb250cm9sID0gbmV3IFBpY2tlckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGlja2VyJzpcbiAgICAgICAgLy8gVE9ETzogV2hlbiBhcHBlbmRUb0JvZHkgcGlja2VyIHdvcmtzIGJldHRlciBpbiB0YWJsZS9mb3JtXG4gICAgICAgIGNvbnRyb2wgPSBuZXcgUGlja2VyQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXRldGltZSc6XG4gICAgICAgIGNvbnRyb2xDb25maWcubWlsaXRhcnkgPSBjb25maWcgPyAhIWNvbmZpZy5taWxpdGFyeSA6IGZhbHNlO1xuICAgICAgICBjb250cm9sID0gbmV3IERhdGVUaW1lQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgY29udHJvbENvbmZpZy5kYXRlRm9ybWF0ID0gZmllbGQuZGF0ZUZvcm1hdDtcbiAgICAgICAgY29udHJvbENvbmZpZy50ZXh0TWFza0VuYWJsZWQgPSBmaWVsZC50ZXh0TWFza0VuYWJsZWQ7XG4gICAgICAgIGNvbnRyb2xDb25maWcuYWxsb3dJbnZhbGlkRGF0ZSA9IGZpZWxkLmFsbG93SW52YWxpZERhdGU7XG4gICAgICAgIGNvbnRyb2xDb25maWcubWlsaXRhcnkgPSBjb25maWcgPyAhIWNvbmZpZy5taWxpdGFyeSA6IGZhbHNlO1xuICAgICAgICBjb250cm9sID0gbmV3IERhdGVDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RpbWUnOlxuICAgICAgICBjb250cm9sQ29uZmlnLm1pbGl0YXJ5ID0gY29uZmlnID8gISFjb25maWcubWlsaXRhcnkgOiBmYWxzZTtcbiAgICAgICAgY29udHJvbCA9IG5ldyBUaW1lQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXJyZW5jeSc6XG4gICAgICBjYXNlICdtb25leSc6XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICBjYXNlICdwZXJjZW50YWdlJzpcbiAgICAgIGNhc2UgJ2Zsb2F0JzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgLy8gVE9ETzogT25seSB0eXBlcyBmcm9tIGBkZXRlcm1pbmVJbnB1dFR5cGVgIHNob3VsZCBiZSB1c2VkIGluIHRoaXMgY2xhc3NcbiAgICAgICAgaWYgKHR5cGUgPT09ICdtb25leScpIHtcbiAgICAgICAgICB0eXBlID0gJ2N1cnJlbmN5JztcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sQ29uZmlnLnR5cGUgPSB0eXBlO1xuICAgICAgICBjb250cm9sID0gbmV3IFRleHRCb3hDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICBjb250cm9sID0gbmV3IFRleHRCb3hDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBUZXh0QXJlYUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdG9yJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBFZGl0b3JDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXRvci1taW5pbWFsJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBFZGl0b3JDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBjb250cm9sLm1pbmltYWwgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RpbGVzJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBUaWxlc0NvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICBjb250cm9sQ29uZmlnLmNoZWNrYm94TGFiZWwgPSBmaWVsZC5jaGVja2JveExhYmVsO1xuICAgICAgICBjb250cm9sID0gbmV3IENoZWNrYm94Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGVja2xpc3QnOlxuICAgICAgICBjb250cm9sID0gbmV3IENoZWNrTGlzdENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICBjb250cm9sID0gbmV3IFJhZGlvQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICBjb250cm9sID0gbmV3IFNlbGVjdENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYWRkcmVzcyc6XG4gICAgICAgIGNvbnRyb2xDb25maWcucmVxdWlyZWQgPSBmaWVsZC5yZXF1aXJlZCB8fCBmYWxzZTtcbiAgICAgICAgaWYgKEhlbHBlcnMuaXNCbGFuayhjb250cm9sQ29uZmlnLmNvbmZpZykpIHtcbiAgICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnJlcXVpcmVkID0gZmllbGQucmVxdWlyZWQ7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnJlYWRPbmx5ID0gY29udHJvbENvbmZpZy5yZWFkT25seTtcbiAgICAgICAgaWYgKGZpZWxkLmZpZWxkcyAmJiBmaWVsZC5maWVsZHMubGVuZ3RoKSB7XG4gICAgICAgICAgZm9yIChsZXQgc3ViZmllbGQgb2YgZmllbGQuZmllbGRzKSB7XG4gICAgICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZ1tzdWJmaWVsZC5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6ICEhc3ViZmllbGQucmVxdWlyZWQsXG4gICAgICAgICAgICAgIGhpZGRlbjogISFzdWJmaWVsZC5yZWFkT25seSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eShzdWJmaWVsZC5sYWJlbCkpIHtcbiAgICAgICAgICAgICAgY29udHJvbENvbmZpZy5jb25maWdbc3ViZmllbGQubmFtZV0ubGFiZWwgPSBzdWJmaWVsZC5sYWJlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghSGVscGVycy5pc0VtcHR5KHN1YmZpZWxkLm1heExlbmd0aCkpIHtcbiAgICAgICAgICAgICAgY29udHJvbENvbmZpZy5jb25maWdbc3ViZmllbGQubmFtZV0ubWF4bGVuZ3RoID0gc3ViZmllbGQubWF4TGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udHJvbENvbmZpZy5yZXF1aXJlZCA9IGNvbnRyb2xDb25maWcucmVxdWlyZWQgfHwgc3ViZmllbGQucmVxdWlyZWQ7XG4gICAgICAgICAgICBpZiAoc3ViZmllbGQuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICAgIGlmIChIZWxwZXJzLmlzQmxhbmsoY29udHJvbENvbmZpZy52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLnZhbHVlID0ge307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udHJvbENvbmZpZy52YWx1ZVtzdWJmaWVsZC5uYW1lXSA9IHN1YmZpZWxkLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3ViZmllbGQubmFtZSA9PT0gJ2NvdW50cnlJRCcpIHtcbiAgICAgICAgICAgICAgaWYgKEhlbHBlcnMuaXNCbGFuayhjb250cm9sQ29uZmlnLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xDb25maWcudmFsdWUgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLnZhbHVlW3N1YmZpZWxkLm5hbWVdID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdWJmaWVsZC5uYW1lID09PSAnc3RhdGUnIHx8IHN1YmZpZWxkLm5hbWUgPT09ICdjb3VudHJ5SUQnKSB7XG4gICAgICAgICAgICAgIGlmIChzdWJmaWVsZC5uYW1lID09PSAnY291bnRyeUlEJykge1xuICAgICAgICAgICAgICAgIHN1YmZpZWxkLm9wdGlvbnNUeXBlID0gJ0NvdW50cnknO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghc3ViZmllbGQub3B0aW9uc1VybCkge1xuICAgICAgICAgICAgICAgIHN1YmZpZWxkLm9wdGlvbnNVcmwgPSBgb3B0aW9ucy8ke3N1YmZpZWxkLm9wdGlvbnNUeXBlfWA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udHJvbENvbmZpZy5jb25maWdbc3ViZmllbGQubmFtZV0ucGlja2VyQ29uZmlnID0gdGhpcy5nZXRDb250cm9sT3B0aW9ucyhzdWJmaWVsZCwgaHR0cCwgY29uZmlnLCBmaWVsZERhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb250cm9sQ29uZmlnLmlzRW1wdHkgPSB0aGlzLmlzQWRkcmVzc0VtcHR5O1xuICAgICAgICBjb250cm9sID0gbmV3IEFkZHJlc3NDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICBjb250cm9sID0gbmV3IEZpbGVDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2N1c3RvbSc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgQ3VzdG9tQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb250cm9sID0gbmV3IFRleHRCb3hDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cblxuICBwcml2YXRlIHNob3VsZENyZWF0ZUNvbnRyb2woZmllbGQpOiBib29sZWFuIHtcbiAgICBpZiAoZmllbGQuc3lzdGVtUmVxdWlyZWQpIHtcbiAgICAgIGZpZWxkLnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIGZpZWxkLm5hbWUgIT09ICdpZCcgJiZcbiAgICAgIChmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24gIT09ICdTWVNURU0nIHx8IFsnYWRkcmVzcycsICdiaWxsaW5nQWRkcmVzcycsICdzZWNvbmRhcnlBZGRyZXNzJ10uaW5kZXhPZihmaWVsZC5uYW1lKSAhPT0gLTEpICYmXG4gICAgICAhZmllbGQucmVhZE9ubHlcbiAgICApO1xuICB9XG5cbiAgdG9Db250cm9scyhcbiAgICBtZXRhLFxuICAgIGN1cnJlbmN5Rm9ybWF0LFxuICAgIGh0dHAsXG4gICAgY29uZmlnOiB7IHRva2VuPzogc3RyaW5nOyByZXN0VXJsPzogc3RyaW5nOyBtaWxpdGFyeT86IGJvb2xlYW4gfSxcbiAgICBvdmVycmlkZXM/OiBhbnksXG4gICAgZm9yVGFibGU6IGJvb2xlYW4gPSBmYWxzZSxcbiAgKSB7XG4gICAgbGV0IGNvbnRyb2xzID0gW107XG4gICAgaWYgKG1ldGEgJiYgbWV0YS5maWVsZHMpIHtcbiAgICAgIGxldCBmaWVsZHMgPSBtZXRhLmZpZWxkcztcbiAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zaG91bGRDcmVhdGVDb250cm9sKGZpZWxkKSkge1xuICAgICAgICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sRm9yRmllbGQoZmllbGQsIGh0dHAsIGNvbmZpZywgb3ZlcnJpZGVzLCBmb3JUYWJsZSk7XG4gICAgICAgICAgLy8gU2V0IGN1cnJlbmN5IGZvcm1hdFxuICAgICAgICAgIGlmIChjb250cm9sLnN1YlR5cGUgPT09ICdjdXJyZW5jeScpIHtcbiAgICAgICAgICAgIGNvbnRyb2wuY3VycmVuY3lGb3JtYXQgPSBjdXJyZW5jeUZvcm1hdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQWRkIHRvIGNvbnRyb2xzXG4gICAgICAgICAgY29udHJvbHMucHVzaChjb250cm9sKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9scztcbiAgfVxuXG4gIHRvVGFibGVDb250cm9scyhtZXRhLCBjdXJyZW5jeUZvcm1hdCwgaHR0cCwgY29uZmlnOiB7IHRva2VuPzogc3RyaW5nOyByZXN0VXJsPzogc3RyaW5nOyBtaWxpdGFyeT86IGJvb2xlYW4gfSwgb3ZlcnJpZGVzPzogYW55KSB7XG4gICAgbGV0IGNvbnRyb2xzID0gdGhpcy50b0NvbnRyb2xzKG1ldGEsIGN1cnJlbmN5Rm9ybWF0LCBodHRwLCBjb25maWcsIG92ZXJyaWRlcywgdHJ1ZSk7XG4gICAgbGV0IHJldCA9IHt9O1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2w6IEJhc2VDb250cm9sKSA9PiB7XG4gICAgICByZXRbY29udHJvbC5rZXldID0ge1xuICAgICAgICBlZGl0b3JUeXBlOiBjb250cm9sLl9fdHlwZSxcbiAgICAgICAgZWRpdG9yQ29uZmlnOiBjb250cm9sLl9fY29uZmlnLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgdG9GaWVsZFNldHMoXG4gICAgbWV0YSxcbiAgICBjdXJyZW5jeUZvcm1hdCxcbiAgICBodHRwLFxuICAgIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuIH0sXG4gICAgb3ZlcnJpZGVzPyxcbiAgICBkYXRhPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgKSB7XG4gICAgbGV0IGZpZWxkc2V0czogQXJyYXk8Tm92b0ZpZWxkc2V0PiA9IFtdO1xuICAgIGxldCBmb3JtRmllbGRzID0gW107XG5cbiAgICBpZiAobWV0YSAmJiBtZXRhLmZpZWxkcykge1xuICAgICAgZm9ybUZpZWxkcyA9IHRoaXMuZ2V0Rm9ybUZpZWxkcyhtZXRhKTtcblxuICAgICAgZm9ybUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0hlYWRlcihmaWVsZCkpIHtcbiAgICAgICAgICBpZiAoZmllbGQuZW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRIZWFkZXJUb0ZpZWxkc2V0cyhmaWVsZHNldHMsIGZpZWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0VtYmVkZGVkRmllbGQoZmllbGQpKSB7XG4gICAgICAgICAgdGhpcy5pbnNlcnRIZWFkZXJUb0ZpZWxkc2V0cyhmaWVsZHNldHMsIGZpZWxkKTtcblxuICAgICAgICAgIGxldCBlbWJlZGRlZEZpZWxkcyA9IHRoaXMuZ2V0RW1iZWRkZWRGaWVsZHMoZmllbGQpO1xuXG4gICAgICAgICAgZW1iZWRkZWRGaWVsZHMuZm9yRWFjaCgoZW1iZWRkZWRGaWVsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkQ3JlYXRlQ29udHJvbChlbWJlZGRlZEZpZWxkKSkge1xuICAgICAgICAgICAgICBsZXQgY29udHJvbCA9IHRoaXMuY3JlYXRlQ29udHJvbChlbWJlZGRlZEZpZWxkLCBkYXRhLCBodHRwLCBjb25maWcsIG92ZXJyaWRlcywgY3VycmVuY3lGb3JtYXQpO1xuICAgICAgICAgICAgICBjb250cm9sID0gdGhpcy5tYXJrQ29udHJvbEFzRW1iZWRkZWQoY29udHJvbCk7XG4gICAgICAgICAgICAgIGZpZWxkc2V0c1tmaWVsZHNldHMubGVuZ3RoIC0gMV0uY29udHJvbHMucHVzaChjb250cm9sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3VsZENyZWF0ZUNvbnRyb2woZmllbGQpKSB7XG4gICAgICAgICAgbGV0IGNvbnRyb2wgPSB0aGlzLmNyZWF0ZUNvbnRyb2woZmllbGQsIGRhdGEsIGh0dHAsIGNvbmZpZywgb3ZlcnJpZGVzLCBjdXJyZW5jeUZvcm1hdCk7XG5cbiAgICAgICAgICBpZiAoZmllbGRzZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZmllbGRzZXRzLnB1c2goeyBjb250cm9sczogW10gfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmllbGRzZXRzW2ZpZWxkc2V0cy5sZW5ndGggLSAxXS5jb250cm9scy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGZpZWxkc2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZmllbGRzZXRzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgY29udHJvbHM6IHRoaXMudG9Db250cm9scyhtZXRhLCBjdXJyZW5jeUZvcm1hdCwgaHR0cCwgY29uZmlnKSxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0VtYmVkZGVkRmllbGQoZmllbGQpIHtcbiAgICByZXR1cm4gZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uICYmIGZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbi50b0xvd2VyQ2FzZSgpID09PSAnZW1iZWRkZWQnICYmICFmaWVsZC5yZWFkT25seTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ29udHJvbChmaWVsZCwgZGF0YSwgaHR0cCwgY29uZmlnLCBvdmVycmlkZXMsIGN1cnJlbmN5Rm9ybWF0KSB7XG4gICAgY29uc3QgZmllbGREYXRhID0gdGhpcy5pc0VtYmVkZGVkRmllbGREYXRhKGZpZWxkLCBkYXRhKSA/IHRoaXMuZ2V0RW1iZWRkZWRGaWVsZERhdGEoZmllbGQsIGRhdGEpIDogdGhpcy5nZXRGaWVsZERhdGEoZmllbGQsIGRhdGEpO1xuICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sRm9yRmllbGQoZmllbGQsIGh0dHAsIGNvbmZpZywgb3ZlcnJpZGVzLCB1bmRlZmluZWQsIGZpZWxkRGF0YSk7XG4gICAgLy8gU2V0IGN1cnJlbmN5IGZvcm1hdFxuICAgIGlmIChjb250cm9sLnN1YlR5cGUgPT09ICdjdXJyZW5jeScpIHtcbiAgICAgIGNvbnRyb2wuY3VycmVuY3lGb3JtYXQgPSBjdXJyZW5jeUZvcm1hdDtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cblxuICBwcml2YXRlIGlzRW1iZWRkZWRGaWVsZERhdGEoZmllbGQsIGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YSAmJiBmaWVsZC5uYW1lLmluY2x1ZGVzKCcuJyk7XG4gIH1cblxuICBwcml2YXRlIGdldEZpZWxkRGF0YShmaWVsZCwgZGF0YSkge1xuICAgIHJldHVybiAoZGF0YSAmJiBkYXRhW2ZpZWxkLm5hbWVdKSB8fCBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbWJlZGRlZEZpZWxkRGF0YShmaWVsZCwgZGF0YSkge1xuICAgIGxldCBbcGFyZW50RmllbGROYW1lLCBmaWVsZE5hbWVdID0gZmllbGQubmFtZS5zcGxpdCgnLicpO1xuICAgIHJldHVybiAoZGF0YSAmJiBkYXRhW3BhcmVudEZpZWxkTmFtZV0gJiYgZGF0YVtwYXJlbnRGaWVsZE5hbWVdW2ZpZWxkTmFtZV0pIHx8IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldEZvcm1GaWVsZHMobWV0YSkge1xuICAgIGxldCBzZWN0aW9uSGVhZGVycyA9IG1ldGEuc2VjdGlvbkhlYWRlcnNcbiAgICAgID8gbWV0YS5zZWN0aW9uSGVhZGVycy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBlbGVtZW50LmlzU2VjdGlvbkhlYWRlciA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH0pXG4gICAgICA6IFtdO1xuXG4gICAgbGV0IGZpZWxkcyA9IG1ldGEuZmllbGRzLm1hcCgoZmllbGQpID0+IHtcbiAgICAgIGlmICghZmllbGQuaGFzT3duUHJvcGVydHkoJ3NvcnRPcmRlcicpKSB7XG4gICAgICAgIGZpZWxkLnNvcnRPcmRlciA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIC0gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9KTtcblxuICAgIHJldHVybiBbLi4uc2VjdGlvbkhlYWRlcnMsIC4uLmZpZWxkc10uc29ydChIZWxwZXJzLnNvcnRCeUZpZWxkKFsnc29ydE9yZGVyJywgJ25hbWUnXSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbWJlZGRlZEZpZWxkcyhzdWJIZWFkZXIpIHtcbiAgICByZXR1cm4gc3ViSGVhZGVyLmFzc29jaWF0ZWRFbnRpdHkuZmllbGRzXG4gICAgICAuZmlsdGVyKChmaWVsZCkgPT4gZmllbGQubmFtZSAhPT0gJ2lkJylcbiAgICAgIC5tYXAoKGZpZWxkKSA9PiB7XG4gICAgICAgIGZpZWxkLm5hbWUgPSBgJHtzdWJIZWFkZXIubmFtZX0uJHtmaWVsZC5uYW1lfWA7XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICAgIH0pXG4gICAgICAuc29ydChIZWxwZXJzLnNvcnRCeUZpZWxkKFsnc29ydE9yZGVyJywgJ25hbWUnXSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0hlYWRlcihmaWVsZCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhSGVscGVycy5pc0JsYW5rKGZpZWxkKSAmJiBmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnaXNTZWN0aW9uSGVhZGVyJykgJiYgZmllbGQuaXNTZWN0aW9uSGVhZGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnNlcnRIZWFkZXJUb0ZpZWxkc2V0cyhmaWVsZHNldHMsIGZpZWxkKSB7XG4gICAgZmllbGRzZXRzLnB1c2goe1xuICAgICAgdGl0bGU6IGZpZWxkLmxhYmVsLFxuICAgICAgaWNvbjogZmllbGQuaWNvbiB8fCAnYmhpLXNlY3Rpb24nLFxuICAgICAgY29udHJvbHM6IFtdLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXJrQ29udHJvbEFzRW1iZWRkZWQoY29udHJvbCkge1xuICAgIGlmIChIZWxwZXJzLmlzQmxhbmsoY29udHJvbFsnY29uZmlnJ10pKSB7XG4gICAgICBjb250cm9sWydjb25maWcnXSA9IHt9O1xuICAgIH1cbiAgICBjb250cm9sWydjb25maWcnXVsnZW1iZWRkZWQnXSA9IHRydWU7XG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cblxuICBnZXRDb250cm9sT3B0aW9ucyhmaWVsZDogYW55LCBodHRwOiBhbnksIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuIH0sIGZpZWxkRGF0YT86IGFueSk6IGFueSB7XG4gICAgLy8gVE9ETzogVGhlIHRva2VuIHByb3BlcnR5IG9mIGNvbmZpZyBpcyB0aGUgb25seSBwcm9wZXJ0eSB1c2VkOyBqdXN0IHBhc3MgaW4gYHRva2VuOiBzdHJpbmdgXG4gICAgaWYgKGZpZWxkLmRhdGFUeXBlID09PSAnQm9vbGVhbicgJiYgIWZpZWxkLm9wdGlvbnMpIHtcbiAgICAgIC8vIFRPRE86IGRhdGFUeXBlIHNob3VsZCBvbmx5IGJlIGRldGVybWluZWQgYnkgYGRldGVybWluZUlucHV0VHlwZWAgd2hpY2ggZG9lc24ndCBldmVyIHJldHVybiAnQm9vbGVhbicgaXRcbiAgICAgIC8vIFRPRE86IChjb250LikgcmV0dXJucyBgdGlsZXNgXG4gICAgICByZXR1cm4gW3sgdmFsdWU6IGZhbHNlLCBsYWJlbDogdGhpcy5sYWJlbHMubm8gfSwgeyB2YWx1ZTogdHJ1ZSwgbGFiZWw6IHRoaXMubGFiZWxzLnllcyB9XTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLndvcmtmbG93T3B0aW9ucyAmJiBmaWVsZERhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFdvcmtmbG93T3B0aW9ucyhmaWVsZC53b3JrZmxvd09wdGlvbnMsIGZpZWxkRGF0YSk7XG4gICAgfSBlbHNlIGlmIChmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24gPT09ICdTUEVDSUFMSVpFRF9PUFRJT05TJykge1xuICAgICAgcmV0dXJuIGZpZWxkLm9wdGlvbnMuZmlsdGVyKChvKSA9PiAhby5yZWFkT25seSk7XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zVXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zU2VydmljZS5nZXRPcHRpb25zQ29uZmlnKGh0dHAsIGZpZWxkLCBjb25maWcpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShmaWVsZC5vcHRpb25zKSAmJiBmaWVsZC50eXBlID09PSAnY2hpcHMnKSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IGZpZWxkLm9wdGlvbnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmaWVsZDogJ3ZhbHVlJyxcbiAgICAgICAgZm9ybWF0OiAnJGxhYmVsJyxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zKSB7XG4gICAgICByZXR1cm4gZmllbGQub3B0aW9ucztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldFdvcmtmbG93T3B0aW9ucyhcbiAgICB3b3JrZmxvd09wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4gICAgZmllbGREYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICApOiBBcnJheTx7IHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7IGxhYmVsOiBzdHJpbmcgfCBudW1iZXIgfT4ge1xuICAgIGxldCBjdXJyZW50VmFsdWU6IHsgdmFsdWU6IHN0cmluZyB8IG51bWJlcjsgbGFiZWw6IHN0cmluZyB8IG51bWJlciB9O1xuICAgIGlmIChmaWVsZERhdGEuaWQpIHtcbiAgICAgIGN1cnJlbnRWYWx1ZSA9IHsgdmFsdWU6IGZpZWxkRGF0YS5pZCwgbGFiZWw6IGZpZWxkRGF0YS5sYWJlbCA/IGZpZWxkRGF0YS5sYWJlbCA6IGZpZWxkRGF0YS5pZCB9O1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRXb3JrZmxvd09wdGlvbjogbnVtYmVyIHwgc3RyaW5nID0gZmllbGREYXRhLmlkID8gZmllbGREYXRhLmlkIDogJ2luaXRpYWwnO1xuICAgIGxldCB1cGRhdGVXb3JrZmxvd09wdGlvbnM6IEFycmF5PHsgdmFsdWU6IHN0cmluZyB8IG51bWJlcjsgbGFiZWw6IHN0cmluZyB8IG51bWJlciB9PiA9IHdvcmtmbG93T3B0aW9uc1tjdXJyZW50V29ya2Zsb3dPcHRpb25dIHx8IFtdO1xuXG4gICAgaWYgKGN1cnJlbnRWYWx1ZSAmJiAhdXBkYXRlV29ya2Zsb3dPcHRpb25zLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSBjdXJyZW50VmFsdWUudmFsdWUpKSB7XG4gICAgICB1cGRhdGVXb3JrZmxvd09wdGlvbnMudW5zaGlmdChjdXJyZW50VmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB1cGRhdGVXb3JrZmxvd09wdGlvbnM7XG4gIH1cblxuICBzZXRJbml0aWFsVmFsdWVzKGNvbnRyb2xzOiBBcnJheTxOb3ZvQ29udHJvbENvbmZpZz4sIHZhbHVlczogYW55LCBrZWVwQ2xlYW4/OiBib29sZWFuLCBrZXlPdmVycmlkZT86IHN0cmluZykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBjb250cm9sc1tpXTtcbiAgICAgIGNvbnN0IGtleSA9IGtleU92ZXJyaWRlID8gY29udHJvbC5rZXkucmVwbGFjZShrZXlPdmVycmlkZSwgJycpIDogY29udHJvbC5rZXk7XG4gICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNba2V5XTtcblxuICAgICAgaWYgKEhlbHBlcnMuaXNCbGFuayh2YWx1ZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuZmlsdGVyKCh2YWwpID0+ICEoT2JqZWN0LmtleXModmFsKS5sZW5ndGggPT09IDAgJiYgdmFsLmNvbnN0cnVjdG9yID09PSBPYmplY3QpKTtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZS5kYXRhICYmIHZhbHVlLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29udHJvbC5kYXRhVHlwZSA9PT0gJ0RhdGUnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgY29udHJvbC5vcHRpb25zVHlwZSAhPT0gJ3NraXBDb252ZXJzaW9uJykge1xuICAgICAgICB2YWx1ZSA9IGRhdGVGbnMuc3RhcnRPZkRheSh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRyb2wudmFsdWUgPSB2YWx1ZTtcbiAgICAgIC8vIFRPRE86IGtlZXBDbGVhbiBpcyBub3QgcmVxdWlyZWQsIGJ1dCBpcyBhbHdheXMgdXNlZC4gSXQgc2hvdWxkIGRlZmF1bHQgKHRvIHRydWU/KVxuICAgICAgY29udHJvbC5kaXJ0eSA9ICFrZWVwQ2xlYW47XG4gICAgfVxuICB9XG5cbiAgc2V0SW5pdGlhbFZhbHVlc0ZpZWxkc2V0cyhmaWVsZHNldHM6IEFycmF5PE5vdm9GaWVsZHNldD4sIHZhbHVlcywga2VlcENsZWFuPzogYm9vbGVhbikge1xuICAgIGZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgdGhpcy5zZXRJbml0aWFsVmFsdWVzKGZpZWxkc2V0LmNvbnRyb2xzLCB2YWx1ZXMsIGtlZXBDbGVhbik7XG4gICAgfSk7XG4gIH1cblxuICBmb3JjZVNob3dBbGxDb250cm9scyhjb250cm9sczogQXJyYXk8Tm92b0NvbnRyb2xDb25maWc+KSB7XG4gICAgY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgY29udHJvbC5oaWRkZW4gPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlU2hvd0FsbENvbnRyb2xzSW5GaWVsZHNldHMoZmllbGRzZXRzOiBBcnJheTxOb3ZvRmllbGRzZXQ+KSB7XG4gICAgZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgIGNvbnRyb2wuaGlkZGVuID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlVmFsaWRhdGlvbihmb3JtOiBOb3ZvRm9ybUdyb3VwKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXMoZm9ybS5jb250cm9scykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGxldCBjb250cm9sOiBhbnkgPSBmb3JtLmNvbnRyb2xzW2tleV07XG4gICAgICBpZiAoY29udHJvbC5yZXF1aXJlZCAmJiBIZWxwZXJzLmlzQmxhbmsoZm9ybS52YWx1ZVtjb250cm9sLmtleV0pKSB7XG4gICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc0FkZHJlc3NFbXB0eShjb250cm9sOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgZmllbGRMaXN0OiBzdHJpbmdbXSA9IFsnYWRkcmVzczEnLCAnYWRkcmVzczInLCAnY2l0eScsICdzdGF0ZScsICd6aXAnLCAnY291bnRyeUlEJ107XG4gICAgbGV0IHZhbGlkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBpZiAoY29udHJvbC52YWx1ZSAmJiBjb250cm9sLmNvbmZpZykge1xuICAgICAgZmllbGRMaXN0LmZvckVhY2goKHN1YmZpZWxkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICgoc3ViZmllbGQgIT09ICdjb3VudHJ5SUQnICYmXG4gICAgICAgICAgICAhSGVscGVycy5pc0VtcHR5KGNvbnRyb2wuY29uZmlnW3N1YmZpZWxkXSkgJiZcbiAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnW3N1YmZpZWxkXS5yZXF1aXJlZCAmJlxuICAgICAgICAgICAgKEhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlW3N1YmZpZWxkXSkgfHwgSGVscGVycy5pc0VtcHR5KGNvbnRyb2wudmFsdWVbc3ViZmllbGRdKSkpIHx8XG4gICAgICAgICAgICAoc3ViZmllbGQgPT09ICdjb3VudHJ5SUQnICYmXG4gICAgICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29udHJvbC5jb25maWcuY291bnRyeUlEKSAmJlxuICAgICAgICAgICAgICBjb250cm9sLmNvbmZpZy5jb3VudHJ5SUQucmVxdWlyZWQgJiZcbiAgICAgICAgICAgICAgSGVscGVycy5pc0VtcHR5KGNvbnRyb2wudmFsdWUuY291bnRyeU5hbWUpKSkgJiZcbiAgICAgICAgICAhKFxuICAgICAgICAgICAgc3ViZmllbGQgPT09ICdzdGF0ZScgJiZcbiAgICAgICAgICAgICFIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZS5jb3VudHJ5TmFtZSkgJiZcbiAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZyAmJlxuICAgICAgICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zICYmXG4gICAgICAgICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMubGVuZ3RoID09PSAwXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGFydERhdGVGcm9tUmFuZ2UoZGF0ZVJhbmdlOiB7IG1pbkRhdGU6IHN0cmluZzsgbWluT2Zmc2V0OiBudW1iZXIgfSk6IERhdGUge1xuICAgIGlmIChkYXRlUmFuZ2UubWluRGF0ZSkge1xuICAgICAgcmV0dXJuIGRhdGVGbnMucGFyc2UoZGF0ZVJhbmdlLm1pbkRhdGUpO1xuICAgIH0gZWxzZSBpZiAoZGF0ZVJhbmdlLm1pbk9mZnNldCkge1xuICAgICAgcmV0dXJuIGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZUb2RheSgpLCBkYXRlUmFuZ2UubWluT2Zmc2V0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtaW4gc3RhcnQgZGF0ZSBvZiBhIERhdGUgYmFzZSBvbiBmaWVsZCBkYXRhLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTdGFydERhdGUoZmllbGQ6IGFueSk6IERhdGUgfCBudWxsIHtcbiAgICBpZiAoZmllbGQuYWxsb3dlZERhdGVSYW5nZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhcnREYXRlRnJvbVJhbmdlKGZpZWxkLmFsbG93ZWREYXRlUmFuZ2UpO1xuICAgIH1cbiAgICAvLyB0aGVyZSBpcyBubyByZXN0cmljdGlvbiBvbiB0aGUgc3RhcnQgZGF0ZVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBpbmZlclN0YXJ0RGF0ZShjb250cm9sQ29uZmlnLCBmaWVsZCkge1xuICAgIGlmIChmaWVsZC5kYXRhVHlwZSA9PT0gJ0RhdGUnKSB7XG4gICAgICBjb25zdCBzdGFydERhdGUgPSB0aGlzLmdldFN0YXJ0RGF0ZShmaWVsZCk7XG4gICAgICBpZiAoc3RhcnREYXRlKSB7XG4gICAgICAgIGNvbnRyb2xDb25maWcuc3RhcnREYXRlID0gc3RhcnREYXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXJ0RGF0ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==