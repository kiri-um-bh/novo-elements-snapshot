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
                if (field.name !== 'id' &&
                    (field.dataSpecialization !== 'SYSTEM' || ['address', 'billingAddress', 'secondaryAddress'].indexOf(field.name) !== -1) &&
                    !field.readOnly) {
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
        var ranges = [];
        if (meta && meta.fields) {
            /** @type {?} */
            var fields = meta.fields
                .map(function (field) {
                if (!field.hasOwnProperty('sortOrder')) {
                    field.sortOrder = Number.MAX_SAFE_INTEGER - 1;
                }
                return field;
            })
                .sort(Helpers.sortByField(['sortOrder', 'name']));
            if (meta.sectionHeaders && meta.sectionHeaders.length) {
                meta.sectionHeaders.sort(Helpers.sortByField(['sortOrder', 'name']));
                meta.sectionHeaders.forEach(function (item, i) {
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
            fields.forEach(function (field) {
                if (field.name !== 'id' &&
                    (field.dataSpecialization !== 'SYSTEM' || ['address', 'billingAddress', 'secondaryAddress'].indexOf(field.name) !== -1) &&
                    !field.readOnly) {
                    /** @type {?} */
                    var fieldData = data && data[field.name] ? data[field.name] : null;
                    /** @type {?} */
                    var control = _this.getControlForField(field, http, config, overrides, undefined, fieldData);
                    // Set currency format
                    if (control.subType === 'currency') {
                        control.currencyFormat = currencyFormat;
                    }
                    /** @type {?} */
                    var location_1 = ranges.find(function (item) {
                        return (item.min <= field.sortOrder && field.sortOrder <= item.max) || (item.min <= field.sortOrder && item.min === item.max);
                    });
                    if (location_1) {
                        // Add to controls
                        fieldsets[location_1.fieldsetIdx].controls.push(control);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybVV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL2Zvcm0tdXRpbHMvRm9ybVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7O0FBRXBDLE9BQU8sRUFDTCxjQUFjLEVBRWQsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsV0FBVyxFQUNYLGVBQWUsRUFDZixhQUFhLEVBQ2IsV0FBVyxFQUVYLGFBQWEsRUFDYixZQUFZLEVBQ1osYUFBYSxFQUNiLGVBQWUsRUFDZixjQUFjLEVBQ2QsWUFBWSxFQUNaLFdBQVcsR0FDWixNQUFNLGtDQUFrQyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ2pJLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFekU7SUFtQ0UsbUJBQW1CLE1BQXdCLEVBQVMsY0FBOEI7UUFBL0QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFqQ2xGLDJCQUFzQixHQUFhO1lBQ2pDLFdBQVc7WUFDWCxlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLE1BQU07WUFDTixhQUFhO1lBQ2IsVUFBVTtZQUNWLGVBQWU7WUFDZixRQUFRO1lBQ1IsV0FBVztTQUNaLENBQUM7UUFDRix1QkFBa0IsR0FBYTtZQUM3QixXQUFXO1lBQ1gsZUFBZTtZQUNmLFFBQVE7WUFDUixZQUFZO1lBQ1osZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsdUJBQXVCO1lBQ3ZCLE1BQU07WUFDTixVQUFVO1lBQ1YsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixVQUFVO1lBQ1YsY0FBYztZQUNkLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsUUFBUTtZQUNSLFlBQVk7WUFDWixXQUFXO1NBQ1osQ0FBQztJQUVtRixDQUFDOzs7OztJQUV0RiwrQkFBVzs7OztJQUFYLFVBQVksUUFBb0I7O1lBQzFCLEtBQUssR0FBUSxFQUFFO1FBQ25CLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPOztnQkFDbkIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQy9ELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsa0NBQWM7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCwrQkFBVzs7Ozs7SUFBWCxVQUFZLFNBQXdCLEVBQUUsUUFBa0M7UUFDdEUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87O2dCQUNuQixLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUs7O2dCQUMzRCxXQUFXLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztZQUNyRCxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxrQ0FBYzs7Ozs7SUFBZCxVQUFlLFNBQXdCLEVBQUUsUUFBa0M7UUFDekUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDdkIsU0FBUyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCwyQ0FBdUI7Ozs7O0lBQXZCLFVBQXdCLFNBQThCOztZQUNoRCxRQUFRLEdBQTJCLEVBQUU7UUFDekMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7WUFDekIsUUFBUSxDQUFDLElBQUksT0FBYixRQUFRLG1CQUFTLFFBQVEsQ0FBQyxRQUFRLEdBQUU7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsdUNBQW1COzs7OztJQUFuQixVQUFvQixLQUFnQjtRQUNsQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDM0csQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsc0NBQWtCOzs7OztJQUFsQixVQUFtQixLQUFnQjs7WUFDN0IsSUFBWTs7WUFDWix5QkFBeUIsR0FBRztZQUM5QixRQUFRLEVBQUUsVUFBVTtZQUNwQixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLElBQUksRUFBRSxRQUFRO1lBQ2QsY0FBYyxFQUFFLGdCQUFnQjtZQUNoQyxJQUFJLEVBQUUsTUFBTTtZQUNaLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsbUJBQW1CLEVBQUUsUUFBUTtZQUM3QixxQkFBcUIsRUFBRSxRQUFRO1lBQy9CLHdCQUF3QixFQUFFLFFBQVE7U0FDbkM7O1lBQ0csaUJBQWlCLEdBQUc7WUFDdEIsU0FBUyxFQUFFLE1BQU07WUFDakIsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsT0FBTztTQUNqQjs7WUFDRyxrQkFBa0IsR0FBRztZQUN2QixRQUFRLEVBQUUsT0FBTztZQUNqQixLQUFLLEVBQUUsT0FBTztZQUNkLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLEtBQUssRUFBRSxPQUFPO1NBQ2Y7O1lBQ0csdUJBQXVCLEdBQUc7WUFDNUIsUUFBUSxFQUFFLFdBQVc7WUFDckIsS0FBSyxFQUFFLFdBQVc7WUFDbEIsTUFBTSxFQUFFLE9BQU87U0FDaEI7O1lBQ0csYUFBYSxHQUFHO1lBQ2xCLElBQUksRUFBRSxNQUFNO1lBQ1osU0FBUyxFQUFFLFNBQVM7U0FDckI7O1lBQ0csdUJBQXVCLEdBQUc7WUFDNUIsTUFBTSxFQUFFLE9BQU87WUFDZixVQUFVLEVBQUUsT0FBTztZQUNuQixPQUFPLEVBQUUsUUFBUTtTQUNsQjtRQUNELElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25DLElBQUksS0FBSyxDQUFDLFVBQVUsS0FBSyxLQUFLLEVBQUU7b0JBQzlCLElBQUksR0FBRyxjQUFjLENBQUM7aUJBQ3ZCO3FCQUFNO29CQUNMLElBQUksR0FBRyxhQUFhLENBQUM7aUJBQ3RCO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxLQUFLLENBQUMsVUFBVSxLQUFLLEtBQUssRUFBRTtvQkFDOUIsSUFBSSxHQUFHLFFBQVEsQ0FBQztpQkFDakI7cUJBQU07b0JBQ0wsSUFBSSxHQUFHLE9BQU8sQ0FBQztpQkFDaEI7YUFDRjtTQUNGO2FBQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNsQyxJQUFJLFFBQVEsS0FBSyxLQUFLLENBQUMsa0JBQWtCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzNILElBQUksR0FBRyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbEQ7aUJBQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLHFCQUFxQixDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO2dCQUN6RixJQUFJLEdBQUcseUJBQXlCLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDNUQ7aUJBQU0sSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzFDLElBQUksR0FBRyxjQUFjLENBQUMsQ0FBQyxRQUFRO2FBQ2hDO2lCQUFNO2dCQUNMLElBQUksR0FBRyxRQUFRLENBQUM7YUFDakI7U0FDRjthQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUMzRCxJQUFJLEtBQUssQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDNUUsSUFBSSxHQUFHLGNBQWMsQ0FBQyxDQUFDLFFBQVE7YUFDaEM7aUJBQU07Z0JBQ0wsSUFBSSxHQUFHLFFBQVEsQ0FBQzthQUNqQjtTQUNGO2FBQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3hGLElBQUksR0FBRyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUM1RDthQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDdEUsSUFBSSxHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQzthQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxVQUFVLEVBQUU7WUFDekMsSUFBSSxHQUFHLFVBQVUsQ0FBQztTQUNuQjthQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDOUcsSUFBSSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QzthQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO1lBQ2xILElBQUksR0FBRyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakQ7YUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUM5RCxJQUFJLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQzthQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDNUUsSUFBSSxHQUFHLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoRCxDQUFDOztlQUVLO1FBQ1AsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELG9DQUFnQjs7OztJQUFoQixVQUFpQixHQUFXO1FBQzFCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7Ozs7Ozs7SUFFRCxzQ0FBa0I7Ozs7Ozs7OztJQUFsQixVQUNFLEtBQVUsRUFDVixJQUFJLEVBQ0osTUFBZ0UsRUFDaEUsU0FBZSxFQUNmLFFBQXlCLEVBQ3pCLFNBQWU7UUFEZix5QkFBQSxFQUFBLGdCQUF5Qjs7Ozs7WUFLckIsSUFBSSxHQUFXLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSTs7WUFDM0QsT0FBWTs7WUFDWixhQUFhLEdBQXNCO1lBQ3JDLFFBQVEsRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNwQixJQUFJLEVBQUUsSUFBSTtZQUNWLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixXQUFXLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQzdCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxjQUFjO1lBQ2hELE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3pFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxZQUFZO1lBQ3hDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDMUIsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUM5QyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVcsSUFBSSxFQUFFO1lBQ3BDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO1lBQzlDLHlCQUF5QixFQUFFLEtBQUssQ0FBQyx5QkFBeUI7WUFDMUQsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFO1lBQzFCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7U0FDbkM7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQzs7O1lBRXBDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDO1FBQzVFLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLEtBQUssUUFBUSxDQUFDLEVBQUU7WUFDNUUsYUFBYSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7U0FDdkM7YUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksS0FBSyxRQUFRLENBQUMsRUFBRTtZQUNsRixhQUFhLENBQUMsTUFBTSxHQUFHO2dCQUNyQixPQUFPLEVBQUUsYUFBYTthQUN2QixDQUFDO1NBQ0g7YUFBTSxJQUFJLGFBQWEsRUFBRTtZQUN4QixhQUFhLENBQUMsTUFBTSx3QkFDZixhQUFhLEVBQ2IsQ0FBQyxhQUFhLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUMzQyxDQUFDO1NBQ0g7UUFFRCxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDbkIsYUFBYSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7U0FDN0I7OztZQUVHLHVCQUF1Qjs7WUFDdkIsdUJBQXVCO1FBQzNCLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRTtnQkFDekMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUM7Z0JBQ2hFLGFBQWEsQ0FBQyxNQUFNLENBQUMsZUFBZSxHQUFHLHVCQUF1QixDQUFDO2dCQUMvRCxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZSxDQUFDO2FBQzlDO1lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLHVCQUF1QixFQUFFO2dCQUNqRCx1QkFBdUIsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLHVCQUF1QixDQUFDO2dCQUN4RSxhQUFhLENBQUMsTUFBTSxDQUFDLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDO2dCQUN2RSxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsdUJBQXVCLENBQUM7YUFDdEQ7WUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFO2dCQUN4QyxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQzthQUN0RTtZQUNELElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7Z0JBQzlCLElBQUksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzthQUNuQztZQUNELElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUM3RCxhQUFhLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDbkMsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDO2FBQzVCO1lBQ0QsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRTtnQkFDakMsYUFBYSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUN2RDtZQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNyRDtRQUVELFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxhQUFhO2dCQUNoQiw2Q0FBNkM7Z0JBQzdDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUM5QixhQUFhLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBRyx1QkFBdUIsSUFBSSxtQkFBbUIsQ0FBQztnQkFDdEYsYUFBYSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsdUJBQXVCLElBQUksa0JBQWtCLENBQUM7Z0JBQ3JGLDREQUE0RDtnQkFDNUQsT0FBTyxHQUFHLElBQUksYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUM5Qiw0REFBNEQ7Z0JBQzVELE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0MsTUFBTTtZQUNSLEtBQUssY0FBYztnQkFDakIsNkNBQTZDO2dCQUM3QyxhQUFhLENBQUMsTUFBTSxDQUFDLGVBQWUsR0FBRyx1QkFBdUIsSUFBSSxtQkFBbUIsQ0FBQztnQkFDdEYsNERBQTREO2dCQUM1RCxPQUFPLEdBQUcsSUFBSSxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzNDLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsNERBQTREO2dCQUM1RCxPQUFPLEdBQUcsSUFBSSxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzNDLE1BQU07WUFDUixLQUFLLFVBQVU7Z0JBQ2IsYUFBYSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQzVELE9BQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDN0MsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxhQUFhLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7Z0JBQzVDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztnQkFDdEQsYUFBYSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDeEQsYUFBYSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQzVELE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDekMsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxhQUFhLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDNUQsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN6QyxNQUFNO1lBQ1IsS0FBSyxVQUFVLENBQUM7WUFDaEIsS0FBSyxPQUFPLENBQUM7WUFDYixLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssWUFBWSxDQUFDO1lBQ2xCLEtBQUssT0FBTyxDQUFDO1lBQ2IsS0FBSyxRQUFRLENBQUM7WUFDZCxLQUFLLE1BQU07Z0JBQ1QsMEVBQTBFO2dCQUMxRSxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7b0JBQ3BCLElBQUksR0FBRyxVQUFVLENBQUM7aUJBQ25CO2dCQUNELGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixPQUFPLEdBQUcsSUFBSSxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzVDLE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsT0FBTyxHQUFHLElBQUksY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNO1lBQ1IsS0FBSyxVQUFVO2dCQUNiLE9BQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDN0MsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxPQUFPLEdBQUcsSUFBSSxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzNDLE1BQU07WUFDUixLQUFLLGdCQUFnQjtnQkFDbkIsT0FBTyxHQUFHLElBQUksYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDdkIsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzFDLE1BQU07WUFDUixLQUFLLFVBQVU7Z0JBQ2IsYUFBYSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO2dCQUNsRCxPQUFPLEdBQUcsSUFBSSxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzdDLE1BQU07WUFDUixLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxHQUFHLElBQUksZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzlDLE1BQU07WUFDUixLQUFLLE9BQU87Z0JBQ1YsT0FBTyxHQUFHLElBQUksWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMxQyxNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0MsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDO2dCQUNqRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUN6QyxhQUFhLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztpQkFDM0I7Z0JBQ0QsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztnQkFDL0MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQztnQkFDdkQsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFOzt3QkFDdkMsS0FBcUIsSUFBQSxLQUFBLGlCQUFBLEtBQUssQ0FBQyxNQUFNLENBQUEsZ0JBQUEsNEJBQUU7NEJBQTlCLElBQUksUUFBUSxXQUFBOzRCQUNmLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHO2dDQUNwQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRO2dDQUM3QixNQUFNLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFROzZCQUM1QixDQUFDOzRCQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQ0FDcEMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7NkJBQzVEOzRCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtnQ0FDeEMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7NkJBQ3BFOzRCQUNELGFBQWEsQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDOzRCQUNyRSxJQUFJLFFBQVEsQ0FBQyxZQUFZLEVBQUU7Z0NBQ3pCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7b0NBQ3hDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2lDQUMxQjtnQ0FDRCxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDOzZCQUM1RDtpQ0FBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFO2dDQUN4QyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO29DQUN4QyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztpQ0FDMUI7Z0NBQ0QsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzZCQUN4Qzs0QkFDRCxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFO2dDQUM5RCxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFO29DQUNqQyxRQUFRLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztpQ0FDbEM7Z0NBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7b0NBQ3hCLFFBQVEsQ0FBQyxVQUFVLEdBQUcsYUFBVyxRQUFRLENBQUMsV0FBYSxDQUFDO2lDQUN6RDtnQ0FDRCxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDOzZCQUM5Rzt5QkFDRjs7Ozs7Ozs7O2lCQUNGO2dCQUNELGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztnQkFDNUMsT0FBTyxHQUFHLElBQUksY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDekMsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxPQUFPLEdBQUcsSUFBSSxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzNDLE1BQU07WUFDUjtnQkFDRSxPQUFPLEdBQUcsSUFBSSxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzVDLE1BQU07U0FDVDtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7Ozs7Ozs7SUFFRCw4QkFBVTs7Ozs7Ozs7O0lBQVYsVUFDRSxJQUFJLEVBQ0osY0FBYyxFQUNkLElBQUksRUFDSixNQUFnRSxFQUNoRSxTQUFlLEVBQ2YsUUFBeUI7UUFOM0IsaUJBNEJDO1FBdEJDLHlCQUFBLEVBQUEsZ0JBQXlCOztZQUVyQixRQUFRLEdBQUcsRUFBRTtRQUNqQixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFOztnQkFDbkIsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO1lBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO2dCQUNuQixJQUNFLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSTtvQkFDbkIsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEtBQUssUUFBUSxJQUFJLENBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDdkgsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUNmOzt3QkFDSSxPQUFPLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUM7b0JBQy9FLHNCQUFzQjtvQkFDdEIsSUFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFBRTt3QkFDbEMsT0FBTyxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7cUJBQ3pDO29CQUNELGtCQUFrQjtvQkFDbEIsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDeEI7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7Ozs7O0lBRUQsbUNBQWU7Ozs7Ozs7O0lBQWYsVUFBZ0IsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsTUFBZ0UsRUFBRSxTQUFlOztZQUN2SCxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQzs7WUFDL0UsR0FBRyxHQUFHLEVBQUU7UUFDWixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBb0I7WUFDcEMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRztnQkFDakIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2dCQUMxQixZQUFZLEVBQUUsT0FBTyxDQUFDLFFBQVE7YUFDL0IsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7Ozs7Ozs7O0lBRUQsK0JBQVc7Ozs7Ozs7OztJQUFYLFVBQ0UsSUFBSSxFQUNKLGNBQWMsRUFDZCxJQUFJLEVBQ0osTUFBZ0UsRUFDaEUsU0FBVSxFQUNWLElBQTZCO1FBTi9CLGlCQW1HQzs7WUEzRkssU0FBUyxHQUF3QixFQUFFOztZQUNuQyxNQUFNLEdBQUcsRUFBRTtRQUNmLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7O2dCQUNuQixNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU07aUJBQ3JCLEdBQUcsQ0FBQyxVQUFDLEtBQUs7Z0JBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQ3RDLEtBQUssQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztpQkFDL0M7Z0JBQ0QsT0FBTyxLQUFLLENBQUM7WUFDZixDQUFDLENBQUM7aUJBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxDQUFDO29CQUNsQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7d0JBQ2hCLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7NEJBQ2hELFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0NBQ2IsUUFBUSxFQUFFLEVBQUU7NkJBQ2IsQ0FBQyxDQUFDOzRCQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0NBQ1YsR0FBRyxFQUFFLENBQUM7Z0NBQ04sR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQztnQ0FDdkIsV0FBVyxFQUFFLENBQUM7NkJBQ2YsQ0FBQyxDQUFDO3lCQUNKO3dCQUNELFNBQVMsQ0FBQyxJQUFJLENBQUM7NEJBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLOzRCQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxhQUFhOzRCQUNoQyxRQUFRLEVBQUUsRUFBRTt5QkFDYixDQUFDLENBQUM7d0JBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDVixHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVM7NEJBQ25CLEdBQUcsRUFBRSxNQUFNLENBQUMsZ0JBQWdCOzRCQUM1QixXQUFXLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDO3lCQUNsQyxDQUFDLENBQUM7d0JBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzRCQUNqQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7eUJBQ3ZEO3FCQUNGO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO29CQUNsQixTQUFTLENBQUMsSUFBSSxDQUFDO3dCQUNiLFFBQVEsRUFBRSxFQUFFO3FCQUNiLENBQUMsQ0FBQztvQkFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUNWLEdBQUcsRUFBRSxDQUFDO3dCQUNOLEdBQUcsRUFBRSxNQUFNLENBQUMsZ0JBQWdCO3dCQUM1QixXQUFXLEVBQUUsQ0FBQztxQkFDZixDQUFDLENBQUM7aUJBQ0o7YUFDRjtpQkFBTTtnQkFDTCxTQUFTLENBQUMsSUFBSSxDQUFDO29CQUNiLFFBQVEsRUFBRSxFQUFFO2lCQUNiLENBQUMsQ0FBQztnQkFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNWLEdBQUcsRUFBRSxDQUFDO29CQUNOLEdBQUcsRUFBRSxNQUFNLENBQUMsZ0JBQWdCO29CQUM1QixXQUFXLEVBQUUsQ0FBQztpQkFDZixDQUFDLENBQUM7YUFDSjtZQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO2dCQUNuQixJQUNFLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSTtvQkFDbkIsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEtBQUssUUFBUSxJQUFJLENBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDdkgsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUNmOzt3QkFDTSxTQUFTLEdBQVEsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7O3dCQUNyRSxPQUFPLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO29CQUMzRixzQkFBc0I7b0JBQ3RCLElBQUksT0FBTyxDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQUU7d0JBQ2xDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO3FCQUN6Qzs7d0JBQ0csVUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO3dCQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNoSSxDQUFDLENBQUM7b0JBQ0YsSUFBSSxVQUFRLEVBQUU7d0JBQ1osa0JBQWtCO3dCQUNsQixTQUFTLENBQUMsVUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ3hEO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxTQUFTLENBQUM7U0FDbEI7YUFBTTtZQUNMLE9BQU87Z0JBQ0w7b0JBQ0UsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDO2lCQUM5RDthQUNGLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7Ozs7O0lBRUQscUNBQWlCOzs7Ozs7O0lBQWpCLFVBQWtCLEtBQVUsRUFBRSxJQUFTLEVBQUUsTUFBZ0UsRUFBRSxTQUFlO1FBQ3hILDZGQUE2RjtRQUM3RixJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNsRCwwR0FBMEc7WUFDMUcsZ0NBQWdDO1lBQ2hDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDM0Y7YUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLElBQUksU0FBUyxFQUFFO1lBQzdDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDbEU7YUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsS0FBSyxxQkFBcUIsRUFBRTtZQUM3RCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFYLENBQVcsQ0FBQyxDQUFDO1NBQ2pEO2FBQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2xFO2FBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTs7Z0JBQzdELE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTztZQUMzQixPQUFPO2dCQUNMLEtBQUssRUFBRSxPQUFPO2dCQUNkLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixPQUFPLFNBQUE7YUFDUixDQUFDO1NBQ0g7YUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDeEIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1NBQ3RCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7O0lBRU8sc0NBQWtCOzs7Ozs7SUFBMUIsVUFDRSxlQUF1QyxFQUN2QyxTQUFpQzs7WUFFN0IsWUFBZ0U7UUFDcEUsSUFBSSxTQUFTLENBQUMsRUFBRSxFQUFFO1lBQ2hCLFlBQVksR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUM7U0FDakc7O1lBRUsscUJBQXFCLEdBQW9CLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7O1lBQ2xGLHFCQUFxQixHQUE4RCxlQUFlLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFO1FBRW5JLElBQUksWUFBWSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLEtBQUssS0FBSyxZQUFZLENBQUMsS0FBSyxFQUFuQyxDQUFtQyxDQUFDLEVBQUU7WUFDaEcscUJBQXFCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzdDO1FBRUQsT0FBTyxxQkFBcUIsQ0FBQztJQUMvQixDQUFDOzs7Ozs7OztJQUVELG9DQUFnQjs7Ozs7OztJQUFoQixVQUFpQixRQUFrQyxFQUFFLE1BQVcsRUFBRSxTQUFtQixFQUFFLFdBQW9CO1FBQ3pHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDbEMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7O2dCQUNyQixHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHOztnQkFDeEUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFFdkIsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMxQixTQUFTO2FBQ1Y7WUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzlDLFNBQVM7YUFDVjtZQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDNUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxXQUFXLEtBQUssTUFBTSxDQUFDLEVBQTlELENBQThELENBQUMsQ0FBQztnQkFDOUYsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDdEIsU0FBUztpQkFDVjthQUNGO1lBRUQsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDekMsU0FBUzthQUNWO1lBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxNQUFNLEVBQUU7Z0JBQ25FLFNBQVM7YUFDVjtZQUVELElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxNQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxXQUFXLEtBQUssZ0JBQWdCLEVBQUU7Z0JBQ3hHLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25DO1lBRUQsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDdEIsb0ZBQW9GO1lBQ3BGLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxTQUFTLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7Ozs7O0lBRUQsNkNBQXlCOzs7Ozs7SUFBekIsVUFBMEIsU0FBOEIsRUFBRSxNQUFNLEVBQUUsU0FBbUI7UUFBckYsaUJBSUM7UUFIQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtZQUN6QixLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHdDQUFvQjs7OztJQUFwQixVQUFxQixRQUFrQztRQUNyRCxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUN2QixPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsbURBQStCOzs7O0lBQS9CLFVBQWdDLFNBQThCO1FBQzVELFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO1lBQ3pCLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFDaEMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsbUNBQWU7Ozs7SUFBZixVQUFnQixJQUFtQjtRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFXOztnQkFDekMsT0FBTyxHQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQ3JDLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdEIsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGtDQUFjOzs7O0lBQWQsVUFBZSxPQUFZOztZQUNyQixTQUFTLEdBQWEsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQzs7WUFDbkYsS0FBSyxHQUFZLElBQUk7UUFDekIsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbkMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQWdCO2dCQUNqQyxJQUNFLENBQUMsQ0FBQyxRQUFRLEtBQUssV0FBVztvQkFDeEIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUTtvQkFDakMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2RixDQUFDLFFBQVEsS0FBSyxXQUFXO3dCQUN2QixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7d0JBQzFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVE7d0JBQ2pDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUNoRCxDQUFDLENBQ0MsUUFBUSxLQUFLLE9BQU87d0JBQ3BCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzt3QkFDM0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWTt3QkFDakMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGNBQWM7d0JBQ2hELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FDOUQsRUFDRDtvQkFDQSxLQUFLLEdBQUcsS0FBSyxDQUFDO2lCQUNmO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRU8seUNBQXFCOzs7OztJQUE3QixVQUE4QixTQUFpRDtRQUM3RSxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDckIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6QzthQUFNLElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUM5QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7OztJQUNLLGdDQUFZOzs7Ozs7SUFBcEIsVUFBcUIsS0FBVTtRQUM3QixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUMzRDtRQUNELDRDQUE0QztRQUM1QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFFTyxrQ0FBYzs7Ozs7O0lBQXRCLFVBQXVCLGFBQWEsRUFBRSxLQUFLO1FBQ3pDLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxNQUFNLEVBQUU7O2dCQUN2QixTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDMUMsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsYUFBYSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7YUFDckM7WUFDRCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUNILENBQUM7O2dCQXp0QkYsVUFBVTs7OztnQkFIRixnQkFBZ0I7Z0JBQ2hCLGNBQWM7O0lBNHRCdkIsZ0JBQUM7Q0FBQSxBQTF0QkQsSUEwdEJDO1NBenRCWSxTQUFTOzs7SUFDcEIsMkNBVUU7O0lBQ0YsdUNBb0JFOztJQUVVLDJCQUErQjs7SUFBRSxtQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOR1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG4vLyBBcHBcbmltcG9ydCB7XG4gIEFkZHJlc3NDb250cm9sLFxuICBCYXNlQ29udHJvbCxcbiAgQ2hlY2tib3hDb250cm9sLFxuICBDaGVja0xpc3RDb250cm9sLFxuICBDdXN0b21Db250cm9sLFxuICBEYXRlQ29udHJvbCxcbiAgRGF0ZVRpbWVDb250cm9sLFxuICBFZGl0b3JDb250cm9sLFxuICBGaWxlQ29udHJvbCxcbiAgTm92b0NvbnRyb2xDb25maWcsXG4gIFBpY2tlckNvbnRyb2wsXG4gIFJhZGlvQ29udHJvbCxcbiAgU2VsZWN0Q29udHJvbCxcbiAgVGV4dEFyZWFDb250cm9sLFxuICBUZXh0Qm94Q29udHJvbCxcbiAgVGlsZXNDb250cm9sLFxuICBUaW1lQ29udHJvbCxcbn0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybS9Gb3JtQ29udHJvbHMnO1xuaW1wb3J0IHsgRW50aXR5UGlja2VyUmVzdWx0LCBFbnRpdHlQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvcGlja2VyL2V4dHJhcy9lbnRpdHktcGlja2VyLXJlc3VsdHMvRW50aXR5UGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvRmllbGRzZXQsIEZvcm1GaWVsZCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0vRm9ybUludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm92b0Zvcm1Db250cm9sIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybS9Ob3ZvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IHsgTm92b0Zvcm1Hcm91cCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0vTm92b0Zvcm1Hcm91cCc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9vcHRpb25zL09wdGlvbnNTZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1VdGlscyB7XG4gIEFTU09DSUFURURfRU5USVRZX0xJU1Q6IHN0cmluZ1tdID0gW1xuICAgICdDYW5kaWRhdGUnLFxuICAgICdDbGllbnRDb250YWN0JyxcbiAgICAnQ2xpZW50Q29ycG9yYXRpb24nLFxuICAgICdMZWFkJyxcbiAgICAnT3Bwb3J0dW5pdHknLFxuICAgICdKb2JPcmRlcicsXG4gICAgJ0NvcnBvcmF0ZVVzZXInLFxuICAgICdQZXJzb24nLFxuICAgICdQbGFjZW1lbnQnLFxuICBdO1xuICBFTlRJVFlfUElDS0VSX0xJU1Q6IHN0cmluZ1tdID0gW1xuICAgICdDYW5kaWRhdGUnLFxuICAgICdDYW5kaWRhdGVUZXh0JyxcbiAgICAnQ2xpZW50JyxcbiAgICAnQ2xpZW50VGV4dCcsXG4gICAgJ0NsaWVudENvbnRhY3QnLFxuICAgICdDbGllbnRDb250YWN0VGV4dCcsXG4gICAgJ0NsaWVudENvcnBvcmF0aW9uJyxcbiAgICAnQ2xpZW50Q29ycG9yYXRpb25UZXh0JyxcbiAgICAnTGVhZCcsXG4gICAgJ0xlYWRUZXh0JyxcbiAgICAnT3Bwb3J0dW5pdHknLFxuICAgICdPcHBvcnR1bml0eVRleHQnLFxuICAgICdKb2JPcmRlcicsXG4gICAgJ0pvYk9yZGVyVGV4dCcsXG4gICAgJ0NvcnBvcmF0ZVVzZXInLFxuICAgICdDb3Jwb3JhdGVVc2VyVGV4dCcsXG4gICAgJ1BlcnNvbicsXG4gICAgJ1BlcnNvblRleHQnLFxuICAgICdQbGFjZW1lbnQnLFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHB1YmxpYyBvcHRpb25zU2VydmljZTogT3B0aW9uc1NlcnZpY2UpIHt9XG5cbiAgdG9Gb3JtR3JvdXAoY29udHJvbHM6IEFycmF5PGFueT4pOiBOb3ZvRm9ybUdyb3VwIHtcbiAgICBsZXQgZ3JvdXA6IGFueSA9IHt9O1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IEhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlKSA/ICcnIDogY29udHJvbC52YWx1ZTtcbiAgICAgIGdyb3VwW2NvbnRyb2wua2V5XSA9IG5ldyBOb3ZvRm9ybUNvbnRyb2wodmFsdWUsIGNvbnRyb2wpO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgTm92b0Zvcm1Hcm91cChncm91cCk7XG4gIH1cblxuICBlbXB0eUZvcm1Hcm91cCgpOiBOb3ZvRm9ybUdyb3VwIHtcbiAgICByZXR1cm4gbmV3IE5vdm9Gb3JtR3JvdXAoe30pO1xuICB9XG5cbiAgYWRkQ29udHJvbHMoZm9ybUdyb3VwOiBOb3ZvRm9ybUdyb3VwLCBjb250cm9sczogQXJyYXk8Tm92b0NvbnRyb2xDb25maWc+KTogdm9pZCB7XG4gICAgY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWUpID8gJycgOiBjb250cm9sLnZhbHVlO1xuICAgICAgbGV0IGZvcm1Db250cm9sID0gbmV3IE5vdm9Gb3JtQ29udHJvbCh2YWx1ZSwgY29udHJvbCk7XG4gICAgICBmb3JtR3JvdXAuYWRkQ29udHJvbChjb250cm9sLmtleSwgZm9ybUNvbnRyb2wpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlQ29udHJvbHMoZm9ybUdyb3VwOiBOb3ZvRm9ybUdyb3VwLCBjb250cm9sczogQXJyYXk8Tm92b0NvbnRyb2xDb25maWc+KTogdm9pZCB7XG4gICAgY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgZm9ybUdyb3VwLnJlbW92ZUNvbnRyb2woY29udHJvbC5rZXkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHRvRm9ybUdyb3VwRnJvbUZpZWxkc2V0XG4gICAqIEBwYXJhbSBmaWVsZHNldHNcbiAgICovXG4gIHRvRm9ybUdyb3VwRnJvbUZpZWxkc2V0KGZpZWxkc2V0czogQXJyYXk8Tm92b0ZpZWxkc2V0Pik6IE5vdm9Gb3JtR3JvdXAge1xuICAgIGxldCBjb250cm9sczogQXJyYXk8Tm92b0Zvcm1Db250cm9sPiA9IFtdO1xuICAgIGZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgY29udHJvbHMucHVzaCguLi5maWVsZHNldC5jb250cm9scyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMudG9Gb3JtR3JvdXAoY29udHJvbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGhhc0Fzc29jaWF0ZWRFbnRpdHlcbiAgICogQHBhcmFtIGZpZWxkXG4gICAqL1xuICBoYXNBc3NvY2lhdGVkRW50aXR5KGZpZWxkOiBGb3JtRmllbGQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEoZmllbGQuYXNzb2NpYXRlZEVudGl0eSAmJiB+dGhpcy5BU1NPQ0lBVEVEX0VOVElUWV9MSVNULmluZGV4T2YoZmllbGQuYXNzb2NpYXRlZEVudGl0eS5lbnRpdHkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBkZXRlcm1pbmVJbnB1dFR5cGVcbiAgICogQHBhcmFtIGZpZWxkXG4gICAqL1xuICBkZXRlcm1pbmVJbnB1dFR5cGUoZmllbGQ6IEZvcm1GaWVsZCk6IHN0cmluZyB7XG4gICAgbGV0IHR5cGU6IHN0cmluZztcbiAgICBsZXQgZGF0YVNwZWNpYWxpemF0aW9uVHlwZU1hcCA9IHtcbiAgICAgIERBVEVUSU1FOiAnZGF0ZXRpbWUnLFxuICAgICAgVElNRTogJ3RpbWUnLFxuICAgICAgTU9ORVk6ICdjdXJyZW5jeScsXG4gICAgICBQRVJDRU5UQUdFOiAncGVyY2VudGFnZScsXG4gICAgICBIVE1MOiAnZWRpdG9yJyxcbiAgICAgICdIVE1MLU1JTklNQUwnOiAnZWRpdG9yLW1pbmltYWwnLFxuICAgICAgWUVBUjogJ3llYXInLFxuICAgICAgV09SS0ZMT1dfT1BUSU9OUzogJ3NlbGVjdCcsXG4gICAgICBTUEVDSUFMSVpFRF9PUFRJT05TOiAnc2VsZWN0JyxcbiAgICAgIFdvcmtmbG93T3B0aW9uc0xvb2t1cDogJ3NlbGVjdCcsXG4gICAgICBTcGVjaWFsaXplZE9wdGlvbnNMb29rdXA6ICdzZWxlY3QnLFxuICAgIH07XG4gICAgbGV0IGRhdGFUeXBlVG9UeXBlTWFwID0ge1xuICAgICAgVGltZXN0YW1wOiAnZGF0ZScsXG4gICAgICBEYXRlOiAnZGF0ZScsXG4gICAgICBCb29sZWFuOiAndGlsZXMnLFxuICAgIH07XG4gICAgbGV0IGlucHV0VHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIENIRUNLQk9YOiAncmFkaW8nLFxuICAgICAgUkFESU86ICdyYWRpbycsXG4gICAgICBTRUxFQ1Q6ICdzZWxlY3QnLFxuICAgICAgVElMRVM6ICd0aWxlcycsXG4gICAgfTtcbiAgICBsZXQgaW5wdXRUeXBlTXVsdGlUb1R5cGVNYXAgPSB7XG4gICAgICBDSEVDS0JPWDogJ2NoZWNrbGlzdCcsXG4gICAgICBSQURJTzogJ2NoZWNrbGlzdCcsXG4gICAgICBTRUxFQ1Q6ICdjaGlwcycsXG4gICAgfTtcbiAgICBsZXQgdHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIGZpbGU6ICdmaWxlJyxcbiAgICAgIENPTVBPU0lURTogJ2FkZHJlc3MnLFxuICAgIH07XG4gICAgbGV0IG51bWJlckRhdGFUeXBlVG9UeXBlTWFwID0ge1xuICAgICAgRG91YmxlOiAnZmxvYXQnLFxuICAgICAgQmlnRGVjaW1hbDogJ2Zsb2F0JyxcbiAgICAgIEludGVnZXI6ICdudW1iZXInLFxuICAgIH07XG4gICAgaWYgKGZpZWxkLnR5cGUgPT09ICdUT19NQU5ZJykge1xuICAgICAgaWYgKHRoaXMuaGFzQXNzb2NpYXRlZEVudGl0eShmaWVsZCkpIHtcbiAgICAgICAgaWYgKGZpZWxkLm11bHRpVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdHlwZSA9ICdlbnRpdHlwaWNrZXInO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR5cGUgPSAnZW50aXR5Y2hpcHMnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZmllbGQubXVsdGlWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0eXBlID0gJ3BpY2tlcic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHlwZSA9ICdjaGlwcyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdUT19PTkUnKSB7XG4gICAgICBpZiAoJ1NZU1RFTScgPT09IGZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbiAmJiBbJ1dvcmtmbG93T3B0aW9uc0xvb2t1cCcsICdTcGVjaWFsaXplZE9wdGlvbnNMb29rdXAnXS5pbmNsdWRlcyhmaWVsZC5kYXRhVHlwZSkpIHtcbiAgICAgICAgdHlwZSA9IGRhdGFTcGVjaWFsaXphdGlvblR5cGVNYXBbZmllbGQuZGF0YVR5cGVdO1xuICAgICAgfSBlbHNlIGlmIChbJ1dPUktGTE9XX09QVElPTlMnLCAnU1BFQ0lBTElaRURfT1BUSU9OUyddLmluY2x1ZGVzKGZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbikpIHtcbiAgICAgICAgdHlwZSA9IGRhdGFTcGVjaWFsaXphdGlvblR5cGVNYXBbZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uXTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5oYXNBc3NvY2lhdGVkRW50aXR5KGZpZWxkKSkge1xuICAgICAgICB0eXBlID0gJ2VudGl0eXBpY2tlcic7IC8vIFRPRE8hXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlID0gJ3BpY2tlcic7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zVXJsICYmIGZpZWxkLmlucHV0VHlwZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgIGlmIChmaWVsZC5vcHRpb25zVHlwZSAmJiB+dGhpcy5FTlRJVFlfUElDS0VSX0xJU1QuaW5kZXhPZihmaWVsZC5vcHRpb25zVHlwZSkpIHtcbiAgICAgICAgdHlwZSA9ICdlbnRpdHlwaWNrZXInOyAvLyBUT0RPIVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9ICdwaWNrZXInO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXMoZGF0YVNwZWNpYWxpemF0aW9uVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24pID4gLTEpIHtcbiAgICAgIHR5cGUgPSBkYXRhU3BlY2lhbGl6YXRpb25UeXBlTWFwW2ZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbl07XG4gICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhkYXRhVHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5kYXRhVHlwZSkgPiAtMSkge1xuICAgICAgdHlwZSA9IGRhdGFUeXBlVG9UeXBlTWFwW2ZpZWxkLmRhdGFUeXBlXTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLmlucHV0VHlwZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgdHlwZSA9ICd0ZXh0YXJlYSc7XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zICYmIE9iamVjdC5rZXlzKGlucHV0VHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5pbnB1dFR5cGUpID4gLTEgJiYgIWZpZWxkLm11bHRpVmFsdWUpIHtcbiAgICAgIHR5cGUgPSBpbnB1dFR5cGVUb1R5cGVNYXBbZmllbGQuaW5wdXRUeXBlXTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLm9wdGlvbnMgJiYgT2JqZWN0LmtleXMoaW5wdXRUeXBlTXVsdGlUb1R5cGVNYXApLmluZGV4T2YoZmllbGQuaW5wdXRUeXBlKSA+IC0xICYmIGZpZWxkLm11bHRpVmFsdWUpIHtcbiAgICAgIHR5cGUgPSBpbnB1dFR5cGVNdWx0aVRvVHlwZU1hcFtmaWVsZC5pbnB1dFR5cGVdO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXModHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC50eXBlKSA+IC0xKSB7XG4gICAgICB0eXBlID0gdHlwZVRvVHlwZU1hcFtmaWVsZC50eXBlXTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKG51bWJlckRhdGFUeXBlVG9UeXBlTWFwKS5pbmRleE9mKGZpZWxkLmRhdGFUeXBlKSA+IC0xKSB7XG4gICAgICB0eXBlID0gbnVtYmVyRGF0YVR5cGVUb1R5cGVNYXBbZmllbGQuZGF0YVR5cGVdO1xuICAgIH0gLyogZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm1VdGlsczogVGhpcyBmaWVsZCB0eXBlIGlzIHVuc3VwcG9ydGVkLicpO1xuICAgICAgICB9Ki9cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGlzRmllbGRFbmNyeXB0ZWQoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4ga2V5LmluZGV4T2YoJ2N1c3RvbUVuY3J5cHRlZCcpID4gLTE7XG4gIH1cblxuICBnZXRDb250cm9sRm9yRmllbGQoXG4gICAgZmllbGQ6IGFueSxcbiAgICBodHRwLFxuICAgIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuIH0sXG4gICAgb3ZlcnJpZGVzPzogYW55LFxuICAgIGZvclRhYmxlOiBib29sZWFuID0gZmFsc2UsXG4gICAgZmllbGREYXRhPzogYW55LFxuICApIHtcbiAgICAvLyBUT0RPOiBpZiBmaWVsZC50eXBlIG92ZXJyaWRlcyBgZGV0ZXJtaW5lSW5wdXRUeXBlYCB3ZSBzaG91bGQgdXNlIGl0IGluIHRoYXQgbWV0aG9kIG9yIHVzZSB0aGlzIG1ldGhvZFxuICAgIC8vIFRPRE86IChjb250LikgYXMgdGhlIHNldHRlciBvZiB0aGUgZmllbGQgYXJndW1lbnRcbiAgICBsZXQgdHlwZTogc3RyaW5nID0gdGhpcy5kZXRlcm1pbmVJbnB1dFR5cGUoZmllbGQpIHx8IGZpZWxkLnR5cGU7XG4gICAgbGV0IGNvbnRyb2w6IGFueTtcbiAgICBsZXQgY29udHJvbENvbmZpZzogTm92b0NvbnRyb2xDb25maWcgPSB7XG4gICAgICBtZXRhVHlwZTogZmllbGQudHlwZSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBrZXk6IGZpZWxkLm5hbWUsXG4gICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICBwbGFjZWhvbGRlcjogZmllbGQuaGludCB8fCAnJyxcbiAgICAgIHJlcXVpcmVkOiBmaWVsZC5yZXF1aXJlZCB8fCBmaWVsZC5zeXN0ZW1SZXF1aXJlZCxcbiAgICAgIGhpZGRlbjogIWZpZWxkLnJlcXVpcmVkLFxuICAgICAgZW5jcnlwdGVkOiB0aGlzLmlzRmllbGRFbmNyeXB0ZWQoZmllbGQubmFtZSA/IGZpZWxkLm5hbWUudG9TdHJpbmcoKSA6ICcnKSxcbiAgICAgIHZhbHVlOiBmaWVsZC52YWx1ZSB8fCBmaWVsZC5kZWZhdWx0VmFsdWUsXG4gICAgICBzb3J0T3JkZXI6IGZpZWxkLnNvcnRPcmRlcixcbiAgICAgIGFzc29jaWF0ZWRFbnRpdHk6IGZpZWxkLmFzc29jaWF0ZWRFbnRpdHksXG4gICAgICBvcHRpb25zVHlwZTogZmllbGQub3B0aW9uc1R5cGUsXG4gICAgICBtdWx0aXBsZTogZmllbGQubXVsdGlWYWx1ZSxcbiAgICAgIHJlYWRPbmx5OiAhIWZpZWxkLmRpc2FibGVkIHx8ICEhZmllbGQucmVhZE9ubHksXG4gICAgICBkaXNhYmxlZDogZmllbGQuZGlzYWJsZWQsXG4gICAgICBtYXhsZW5ndGg6IGZpZWxkLm1heExlbmd0aCxcbiAgICAgIGludGVyYWN0aW9uczogZmllbGQuaW50ZXJhY3Rpb25zLFxuICAgICAgZGF0YVNwZWNpYWxpemF0aW9uOiBmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24sXG4gICAgICBkYXRhVHlwZTogZmllbGQuZGF0YVR5cGUsXG4gICAgICBkZXNjcmlwdGlvbjogZmllbGQuZGVzY3JpcHRpb24gfHwgJycsXG4gICAgICB0b29sdGlwOiBmaWVsZC50b29sdGlwLFxuICAgICAgdG9vbHRpcFBvc2l0aW9uOiBmaWVsZC50b29sdGlwUG9zaXRpb24sXG4gICAgICBjdXN0b21Db250cm9sOiBmaWVsZC5jdXN0b21Db250cm9sLFxuICAgICAgdGVtcGxhdGU6IGZpZWxkLnRlbXBsYXRlLFxuICAgICAgY3VzdG9tQ29udHJvbENvbmZpZzogZmllbGQuY3VzdG9tQ29udHJvbENvbmZpZyxcbiAgICAgIHJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnM6IGZpZWxkLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMsXG4gICAgICB2YWxpZGF0b3JzOiBmaWVsZC52YWxpZGF0b3JzLFxuICAgICAgd2FybmluZzogZmllbGQud2FybmluZyxcbiAgICAgIGNvbmZpZzogZmllbGQuY29uZmlnIHx8IHt9LFxuICAgICAgY2xvc2VPblNlbGVjdDogZmllbGQuY2xvc2VPblNlbGVjdCxcbiAgICAgIGxheW91dE9wdGlvbnM6IGZpZWxkLmxheW91dE9wdGlvbnMsXG4gICAgfTtcbiAgICB0aGlzLmluZmVyU3RhcnREYXRlKGNvbnRyb2xDb25maWcsIGZpZWxkKTtcbiAgICAvLyBUT0RPOiBnZXRDb250cm9sT3B0aW9ucyBzaG91bGQgYWx3YXlzIHJldHVybiB0aGUgY29ycmVjdCBmb3JtYXRcbiAgICBjb25zdCBvcHRpb25zQ29uZmlnID0gdGhpcy5nZXRDb250cm9sT3B0aW9ucyhmaWVsZCwgaHR0cCwgY29uZmlnLCBmaWVsZERhdGEpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnNDb25maWcpICYmICEodHlwZSA9PT0gJ2NoaXBzJyB8fCB0eXBlID09PSAncGlja2VyJykpIHtcbiAgICAgIGNvbnRyb2xDb25maWcub3B0aW9ucyA9IG9wdGlvbnNDb25maWc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnNDb25maWcpICYmICh0eXBlID09PSAnY2hpcHMnIHx8IHR5cGUgPT09ICdwaWNrZXInKSkge1xuICAgICAgY29udHJvbENvbmZpZy5jb25maWcgPSB7XG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnNDb25maWcsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAob3B0aW9uc0NvbmZpZykge1xuICAgICAgY29udHJvbENvbmZpZy5jb25maWcgPSB7XG4gICAgICAgIC4uLm9wdGlvbnNDb25maWcsXG4gICAgICAgIC4uLihjb250cm9sQ29uZmlnICYmIGNvbnRyb2xDb25maWcuY29uZmlnKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICd5ZWFyJykge1xuICAgICAgY29udHJvbENvbmZpZy5tYXhsZW5ndGggPSA0O1xuICAgIH1cbiAgICAvLyBUT0RPOiBPdmVycmlkZXMgc2hvdWxkIGJlIGFuIGl0ZXJhYmxlIG9mIGFsbCBwcm9wZXJ0aWVzIChwb3RlbnRpYWxseSBhIHByaXZhdGUgbWV0aG9kKVxuICAgIGxldCBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZTtcbiAgICBsZXQgb3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGU7XG4gICAgaWYgKG92ZXJyaWRlcyAmJiBvdmVycmlkZXNbZmllbGQubmFtZV0pIHtcbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0ucmVzdWx0c1RlbXBsYXRlKSB7XG4gICAgICAgIG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnJlc3VsdHNUZW1wbGF0ZTtcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcucmVzdWx0c1RlbXBsYXRlID0gb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGU7XG4gICAgICAgIGRlbGV0ZSBvdmVycmlkZXNbZmllbGQubmFtZV0ucmVzdWx0c1RlbXBsYXRlO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5vdmVycmlkZVByZXZpZXdUZW1wbGF0ZSkge1xuICAgICAgICBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5vdmVycmlkZVByZXZpZXdUZW1wbGF0ZTtcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcub3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGUgPSBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZTtcbiAgICAgICAgZGVsZXRlIG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5vdmVycmlkZVByZXZpZXdUZW1wbGF0ZTtcbiAgICAgIH1cbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0ucGlja2VyQ2FsbGJhY2spIHtcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcuY2FsbGJhY2sgPSBvdmVycmlkZXNbZmllbGQubmFtZV0ucGlja2VyQ2FsbGJhY2s7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnR5cGUpIHtcbiAgICAgICAgdHlwZSA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS50eXBlO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5jb2x1bW5zKSB7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLmNvbHVtbnMgPSBvdmVycmlkZXNbZmllbGQubmFtZV0uY29sdW1ucztcbiAgICAgICAgY29udHJvbENvbmZpZy5jbG9zZU9uU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgZGVsZXRlIGNvbnRyb2xDb25maWcubGFiZWw7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLndhcm5pbmcpIHtcbiAgICAgICAgY29udHJvbENvbmZpZy53YXJuaW5nID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLndhcm5pbmc7XG4gICAgICB9XG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRyb2xDb25maWcsIG92ZXJyaWRlc1tmaWVsZC5uYW1lXSk7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdlbnRpdHljaGlwcyc6XG4gICAgICAgIC8vIFRPRE86IFRoaXMgZG9lc24ndCBiZWxvbmcgaW4gdGhpcyBjb2RlYmFzZVxuICAgICAgICBjb250cm9sQ29uZmlnLm11bHRpcGxlID0gdHJ1ZTtcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcucmVzdWx0c1RlbXBsYXRlID0gb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGUgfHwgRW50aXR5UGlja2VyUmVzdWx0cztcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcucHJldmlld1RlbXBsYXRlID0gb3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGUgfHwgRW50aXR5UGlja2VyUmVzdWx0O1xuICAgICAgICAvLyBUT0RPOiBXaGVuIGFwcGVuZFRvQm9keSBwaWNrZXIgd29ya3MgYmV0dGVyIGluIHRhYmxlL2Zvcm1cbiAgICAgICAgY29udHJvbCA9IG5ldyBQaWNrZXJDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoaXBzJzpcbiAgICAgICAgY29udHJvbENvbmZpZy5tdWx0aXBsZSA9IHRydWU7XG4gICAgICAgIC8vIFRPRE86IFdoZW4gYXBwZW5kVG9Cb2R5IHBpY2tlciB3b3JrcyBiZXR0ZXIgaW4gdGFibGUvZm9ybVxuICAgICAgICBjb250cm9sID0gbmV3IFBpY2tlckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZW50aXR5cGlja2VyJzpcbiAgICAgICAgLy8gVE9ETzogVGhpcyBkb2Vzbid0IGJlbG9uZyBpbiB0aGlzIGNvZGViYXNlXG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlIHx8IEVudGl0eVBpY2tlclJlc3VsdHM7XG4gICAgICAgIC8vIFRPRE86IFdoZW4gYXBwZW5kVG9Cb2R5IHBpY2tlciB3b3JrcyBiZXR0ZXIgaW4gdGFibGUvZm9ybVxuICAgICAgICBjb250cm9sID0gbmV3IFBpY2tlckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGlja2VyJzpcbiAgICAgICAgLy8gVE9ETzogV2hlbiBhcHBlbmRUb0JvZHkgcGlja2VyIHdvcmtzIGJldHRlciBpbiB0YWJsZS9mb3JtXG4gICAgICAgIGNvbnRyb2wgPSBuZXcgUGlja2VyQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXRldGltZSc6XG4gICAgICAgIGNvbnRyb2xDb25maWcubWlsaXRhcnkgPSBjb25maWcgPyAhIWNvbmZpZy5taWxpdGFyeSA6IGZhbHNlO1xuICAgICAgICBjb250cm9sID0gbmV3IERhdGVUaW1lQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgY29udHJvbENvbmZpZy5kYXRlRm9ybWF0ID0gZmllbGQuZGF0ZUZvcm1hdDtcbiAgICAgICAgY29udHJvbENvbmZpZy50ZXh0TWFza0VuYWJsZWQgPSBmaWVsZC50ZXh0TWFza0VuYWJsZWQ7XG4gICAgICAgIGNvbnRyb2xDb25maWcuYWxsb3dJbnZhbGlkRGF0ZSA9IGZpZWxkLmFsbG93SW52YWxpZERhdGU7XG4gICAgICAgIGNvbnRyb2xDb25maWcubWlsaXRhcnkgPSBjb25maWcgPyAhIWNvbmZpZy5taWxpdGFyeSA6IGZhbHNlO1xuICAgICAgICBjb250cm9sID0gbmV3IERhdGVDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RpbWUnOlxuICAgICAgICBjb250cm9sQ29uZmlnLm1pbGl0YXJ5ID0gY29uZmlnID8gISFjb25maWcubWlsaXRhcnkgOiBmYWxzZTtcbiAgICAgICAgY29udHJvbCA9IG5ldyBUaW1lQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXJyZW5jeSc6XG4gICAgICBjYXNlICdtb25leSc6XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICBjYXNlICdwZXJjZW50YWdlJzpcbiAgICAgIGNhc2UgJ2Zsb2F0JzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgLy8gVE9ETzogT25seSB0eXBlcyBmcm9tIGBkZXRlcm1pbmVJbnB1dFR5cGVgIHNob3VsZCBiZSB1c2VkIGluIHRoaXMgY2xhc3NcbiAgICAgICAgaWYgKHR5cGUgPT09ICdtb25leScpIHtcbiAgICAgICAgICB0eXBlID0gJ2N1cnJlbmN5JztcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sQ29uZmlnLnR5cGUgPSB0eXBlO1xuICAgICAgICBjb250cm9sID0gbmV3IFRleHRCb3hDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICBjb250cm9sID0gbmV3IFRleHRCb3hDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBUZXh0QXJlYUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdG9yJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBFZGl0b3JDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXRvci1taW5pbWFsJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBFZGl0b3JDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBjb250cm9sLm1pbmltYWwgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RpbGVzJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBUaWxlc0NvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICBjb250cm9sQ29uZmlnLmNoZWNrYm94TGFiZWwgPSBmaWVsZC5jaGVja2JveExhYmVsO1xuICAgICAgICBjb250cm9sID0gbmV3IENoZWNrYm94Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGVja2xpc3QnOlxuICAgICAgICBjb250cm9sID0gbmV3IENoZWNrTGlzdENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICBjb250cm9sID0gbmV3IFJhZGlvQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICBjb250cm9sID0gbmV3IFNlbGVjdENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYWRkcmVzcyc6XG4gICAgICAgIGNvbnRyb2xDb25maWcucmVxdWlyZWQgPSBmaWVsZC5yZXF1aXJlZCB8fCBmYWxzZTtcbiAgICAgICAgaWYgKEhlbHBlcnMuaXNCbGFuayhjb250cm9sQ29uZmlnLmNvbmZpZykpIHtcbiAgICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnJlcXVpcmVkID0gZmllbGQucmVxdWlyZWQ7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnJlYWRPbmx5ID0gY29udHJvbENvbmZpZy5yZWFkT25seTtcbiAgICAgICAgaWYgKGZpZWxkLmZpZWxkcyAmJiBmaWVsZC5maWVsZHMubGVuZ3RoKSB7XG4gICAgICAgICAgZm9yIChsZXQgc3ViZmllbGQgb2YgZmllbGQuZmllbGRzKSB7XG4gICAgICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZ1tzdWJmaWVsZC5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6ICEhc3ViZmllbGQucmVxdWlyZWQsXG4gICAgICAgICAgICAgIGhpZGRlbjogISFzdWJmaWVsZC5yZWFkT25seSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eShzdWJmaWVsZC5sYWJlbCkpIHtcbiAgICAgICAgICAgICAgY29udHJvbENvbmZpZy5jb25maWdbc3ViZmllbGQubmFtZV0ubGFiZWwgPSBzdWJmaWVsZC5sYWJlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghSGVscGVycy5pc0VtcHR5KHN1YmZpZWxkLm1heExlbmd0aCkpIHtcbiAgICAgICAgICAgICAgY29udHJvbENvbmZpZy5jb25maWdbc3ViZmllbGQubmFtZV0ubWF4bGVuZ3RoID0gc3ViZmllbGQubWF4TGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udHJvbENvbmZpZy5yZXF1aXJlZCA9IGNvbnRyb2xDb25maWcucmVxdWlyZWQgfHwgc3ViZmllbGQucmVxdWlyZWQ7XG4gICAgICAgICAgICBpZiAoc3ViZmllbGQuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICAgIGlmIChIZWxwZXJzLmlzQmxhbmsoY29udHJvbENvbmZpZy52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLnZhbHVlID0ge307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udHJvbENvbmZpZy52YWx1ZVtzdWJmaWVsZC5uYW1lXSA9IHN1YmZpZWxkLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3ViZmllbGQubmFtZSA9PT0gJ2NvdW50cnlJRCcpIHtcbiAgICAgICAgICAgICAgaWYgKEhlbHBlcnMuaXNCbGFuayhjb250cm9sQ29uZmlnLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xDb25maWcudmFsdWUgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLnZhbHVlW3N1YmZpZWxkLm5hbWVdID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdWJmaWVsZC5uYW1lID09PSAnc3RhdGUnIHx8IHN1YmZpZWxkLm5hbWUgPT09ICdjb3VudHJ5SUQnKSB7XG4gICAgICAgICAgICAgIGlmIChzdWJmaWVsZC5uYW1lID09PSAnY291bnRyeUlEJykge1xuICAgICAgICAgICAgICAgIHN1YmZpZWxkLm9wdGlvbnNUeXBlID0gJ0NvdW50cnknO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghc3ViZmllbGQub3B0aW9uc1VybCkge1xuICAgICAgICAgICAgICAgIHN1YmZpZWxkLm9wdGlvbnNVcmwgPSBgb3B0aW9ucy8ke3N1YmZpZWxkLm9wdGlvbnNUeXBlfWA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udHJvbENvbmZpZy5jb25maWdbc3ViZmllbGQubmFtZV0ucGlja2VyQ29uZmlnID0gdGhpcy5nZXRDb250cm9sT3B0aW9ucyhzdWJmaWVsZCwgaHR0cCwgY29uZmlnLCBmaWVsZERhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb250cm9sQ29uZmlnLmlzRW1wdHkgPSB0aGlzLmlzQWRkcmVzc0VtcHR5O1xuICAgICAgICBjb250cm9sID0gbmV3IEFkZHJlc3NDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICBjb250cm9sID0gbmV3IEZpbGVDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2N1c3RvbSc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgQ3VzdG9tQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb250cm9sID0gbmV3IFRleHRCb3hDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cblxuICB0b0NvbnRyb2xzKFxuICAgIG1ldGEsXG4gICAgY3VycmVuY3lGb3JtYXQsXG4gICAgaHR0cCxcbiAgICBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiB9LFxuICAgIG92ZXJyaWRlcz86IGFueSxcbiAgICBmb3JUYWJsZTogYm9vbGVhbiA9IGZhbHNlLFxuICApIHtcbiAgICBsZXQgY29udHJvbHMgPSBbXTtcbiAgICBpZiAobWV0YSAmJiBtZXRhLmZpZWxkcykge1xuICAgICAgbGV0IGZpZWxkcyA9IG1ldGEuZmllbGRzO1xuICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBmaWVsZC5uYW1lICE9PSAnaWQnICYmXG4gICAgICAgICAgKGZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbiAhPT0gJ1NZU1RFTScgfHwgWydhZGRyZXNzJywgJ2JpbGxpbmdBZGRyZXNzJywgJ3NlY29uZGFyeUFkZHJlc3MnXS5pbmRleE9mKGZpZWxkLm5hbWUpICE9PSAtMSkgJiZcbiAgICAgICAgICAhZmllbGQucmVhZE9ubHlcbiAgICAgICAgKSB7XG4gICAgICAgICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2xGb3JGaWVsZChmaWVsZCwgaHR0cCwgY29uZmlnLCBvdmVycmlkZXMsIGZvclRhYmxlKTtcbiAgICAgICAgICAvLyBTZXQgY3VycmVuY3kgZm9ybWF0XG4gICAgICAgICAgaWYgKGNvbnRyb2wuc3ViVHlwZSA9PT0gJ2N1cnJlbmN5Jykge1xuICAgICAgICAgICAgY29udHJvbC5jdXJyZW5jeUZvcm1hdCA9IGN1cnJlbmN5Rm9ybWF0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBBZGQgdG8gY29udHJvbHNcbiAgICAgICAgICBjb250cm9scy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyb2xzO1xuICB9XG5cbiAgdG9UYWJsZUNvbnRyb2xzKG1ldGEsIGN1cnJlbmN5Rm9ybWF0LCBodHRwLCBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiB9LCBvdmVycmlkZXM/OiBhbnkpIHtcbiAgICBsZXQgY29udHJvbHMgPSB0aGlzLnRvQ29udHJvbHMobWV0YSwgY3VycmVuY3lGb3JtYXQsIGh0dHAsIGNvbmZpZywgb3ZlcnJpZGVzLCB0cnVlKTtcbiAgICBsZXQgcmV0ID0ge307XG4gICAgY29udHJvbHMuZm9yRWFjaCgoY29udHJvbDogQmFzZUNvbnRyb2wpID0+IHtcbiAgICAgIHJldFtjb250cm9sLmtleV0gPSB7XG4gICAgICAgIGVkaXRvclR5cGU6IGNvbnRyb2wuX190eXBlLFxuICAgICAgICBlZGl0b3JDb25maWc6IGNvbnRyb2wuX19jb25maWcsXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICB0b0ZpZWxkU2V0cyhcbiAgICBtZXRhLFxuICAgIGN1cnJlbmN5Rm9ybWF0LFxuICAgIGh0dHAsXG4gICAgY29uZmlnOiB7IHRva2VuPzogc3RyaW5nOyByZXN0VXJsPzogc3RyaW5nOyBtaWxpdGFyeT86IGJvb2xlYW4gfSxcbiAgICBvdmVycmlkZXM/LFxuICAgIGRhdGE/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICApIHtcbiAgICBsZXQgZmllbGRzZXRzOiBBcnJheTxOb3ZvRmllbGRzZXQ+ID0gW107XG4gICAgbGV0IHJhbmdlcyA9IFtdO1xuICAgIGlmIChtZXRhICYmIG1ldGEuZmllbGRzKSB7XG4gICAgICBsZXQgZmllbGRzID0gbWV0YS5maWVsZHNcbiAgICAgICAgLm1hcCgoZmllbGQpID0+IHtcbiAgICAgICAgICBpZiAoIWZpZWxkLmhhc093blByb3BlcnR5KCdzb3J0T3JkZXInKSkge1xuICAgICAgICAgICAgZmllbGQuc29ydE9yZGVyID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgICAgIH0pXG4gICAgICAgIC5zb3J0KEhlbHBlcnMuc29ydEJ5RmllbGQoWydzb3J0T3JkZXInLCAnbmFtZSddKSk7XG4gICAgICBpZiAobWV0YS5zZWN0aW9uSGVhZGVycyAmJiBtZXRhLnNlY3Rpb25IZWFkZXJzLmxlbmd0aCkge1xuICAgICAgICBtZXRhLnNlY3Rpb25IZWFkZXJzLnNvcnQoSGVscGVycy5zb3J0QnlGaWVsZChbJ3NvcnRPcmRlcicsICduYW1lJ10pKTtcbiAgICAgICAgbWV0YS5zZWN0aW9uSGVhZGVycy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uZW5hYmxlZCkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uc29ydE9yZGVyID4gMCAmJiBmaWVsZHNldHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIGZpZWxkc2V0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBjb250cm9sczogW10sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgIG1heDogaXRlbS5zb3J0T3JkZXIgLSAxLFxuICAgICAgICAgICAgICAgIGZpZWxkc2V0SWR4OiAwLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZWxkc2V0cy5wdXNoKHtcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubGFiZWwsXG4gICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbiB8fCAnYmhpLXNlY3Rpb24nLFxuICAgICAgICAgICAgICBjb250cm9sczogW10sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgbWluOiBpdGVtLnNvcnRPcmRlcixcbiAgICAgICAgICAgICAgbWF4OiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgICAgICAgZmllbGRzZXRJZHg6IGZpZWxkc2V0cy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaSA+IDAgJiYgZmllbGRzZXRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgcmFuZ2VzW2ZpZWxkc2V0cy5sZW5ndGggLSAyXS5tYXggPSBpdGVtLnNvcnRPcmRlciAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyYW5nZXMubGVuZ3RoKSB7XG4gICAgICAgICAgZmllbGRzZXRzLnB1c2goe1xuICAgICAgICAgICAgY29udHJvbHM6IFtdLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgICAgICBmaWVsZHNldElkeDogMCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGRzZXRzLnB1c2goe1xuICAgICAgICAgIGNvbnRyb2xzOiBbXSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJhbmdlcy5wdXNoKHtcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgICBmaWVsZHNldElkeDogMCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGZpZWxkLm5hbWUgIT09ICdpZCcgJiZcbiAgICAgICAgICAoZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uICE9PSAnU1lTVEVNJyB8fCBbJ2FkZHJlc3MnLCAnYmlsbGluZ0FkZHJlc3MnLCAnc2Vjb25kYXJ5QWRkcmVzcyddLmluZGV4T2YoZmllbGQubmFtZSkgIT09IC0xKSAmJlxuICAgICAgICAgICFmaWVsZC5yZWFkT25seVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBmaWVsZERhdGE6IGFueSA9IGRhdGEgJiYgZGF0YVtmaWVsZC5uYW1lXSA/IGRhdGFbZmllbGQubmFtZV0gOiBudWxsO1xuICAgICAgICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sRm9yRmllbGQoZmllbGQsIGh0dHAsIGNvbmZpZywgb3ZlcnJpZGVzLCB1bmRlZmluZWQsIGZpZWxkRGF0YSk7XG4gICAgICAgICAgLy8gU2V0IGN1cnJlbmN5IGZvcm1hdFxuICAgICAgICAgIGlmIChjb250cm9sLnN1YlR5cGUgPT09ICdjdXJyZW5jeScpIHtcbiAgICAgICAgICAgIGNvbnRyb2wuY3VycmVuY3lGb3JtYXQgPSBjdXJyZW5jeUZvcm1hdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGxvY2F0aW9uID0gcmFuZ2VzLmZpbmQoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoaXRlbS5taW4gPD0gZmllbGQuc29ydE9yZGVyICYmIGZpZWxkLnNvcnRPcmRlciA8PSBpdGVtLm1heCkgfHwgKGl0ZW0ubWluIDw9IGZpZWxkLnNvcnRPcmRlciAmJiBpdGVtLm1pbiA9PT0gaXRlbS5tYXgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgICAgICAgLy8gQWRkIHRvIGNvbnRyb2xzXG4gICAgICAgICAgICBmaWVsZHNldHNbbG9jYXRpb24uZmllbGRzZXRJZHhdLmNvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGZpZWxkc2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZmllbGRzZXRzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgY29udHJvbHM6IHRoaXMudG9Db250cm9scyhtZXRhLCBjdXJyZW5jeUZvcm1hdCwgaHR0cCwgY29uZmlnKSxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29udHJvbE9wdGlvbnMoZmllbGQ6IGFueSwgaHR0cDogYW55LCBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiB9LCBmaWVsZERhdGE/OiBhbnkpOiBhbnkge1xuICAgIC8vIFRPRE86IFRoZSB0b2tlbiBwcm9wZXJ0eSBvZiBjb25maWcgaXMgdGhlIG9ubHkgcHJvcGVydHkgdXNlZDsganVzdCBwYXNzIGluIGB0b2tlbjogc3RyaW5nYFxuICAgIGlmIChmaWVsZC5kYXRhVHlwZSA9PT0gJ0Jvb2xlYW4nICYmICFmaWVsZC5vcHRpb25zKSB7XG4gICAgICAvLyBUT0RPOiBkYXRhVHlwZSBzaG91bGQgb25seSBiZSBkZXRlcm1pbmVkIGJ5IGBkZXRlcm1pbmVJbnB1dFR5cGVgIHdoaWNoIGRvZXNuJ3QgZXZlciByZXR1cm4gJ0Jvb2xlYW4nIGl0XG4gICAgICAvLyBUT0RPOiAoY29udC4pIHJldHVybnMgYHRpbGVzYFxuICAgICAgcmV0dXJuIFt7IHZhbHVlOiBmYWxzZSwgbGFiZWw6IHRoaXMubGFiZWxzLm5vIH0sIHsgdmFsdWU6IHRydWUsIGxhYmVsOiB0aGlzLmxhYmVscy55ZXMgfV07XG4gICAgfSBlbHNlIGlmIChmaWVsZC53b3JrZmxvd09wdGlvbnMgJiYgZmllbGREYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRXb3JrZmxvd09wdGlvbnMoZmllbGQud29ya2Zsb3dPcHRpb25zLCBmaWVsZERhdGEpO1xuICAgIH0gZWxzZSBpZiAoZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uID09PSAnU1BFQ0lBTElaRURfT1BUSU9OUycpIHtcbiAgICAgIHJldHVybiBmaWVsZC5vcHRpb25zLmZpbHRlcigobykgPT4gIW8ucmVhZE9ubHkpO1xuICAgIH0gZWxzZSBpZiAoZmllbGQub3B0aW9uc1VybCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1NlcnZpY2UuZ2V0T3B0aW9uc0NvbmZpZyhodHRwLCBmaWVsZCwgY29uZmlnKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQub3B0aW9ucykgJiYgZmllbGQudHlwZSA9PT0gJ2NoaXBzJykge1xuICAgICAgbGV0IG9wdGlvbnMgPSBmaWVsZC5vcHRpb25zO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmllbGQ6ICd2YWx1ZScsXG4gICAgICAgIGZvcm1hdDogJyRsYWJlbCcsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZmllbGQub3B0aW9ucykge1xuICAgICAgcmV0dXJuIGZpZWxkLm9wdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRXb3JrZmxvd09wdGlvbnMoXG4gICAgd29ya2Zsb3dPcHRpb25zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICAgIGZpZWxkRGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgKTogQXJyYXk8eyB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyOyBsYWJlbDogc3RyaW5nIHwgbnVtYmVyIH0+IHtcbiAgICBsZXQgY3VycmVudFZhbHVlOiB7IHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7IGxhYmVsOiBzdHJpbmcgfCBudW1iZXIgfTtcbiAgICBpZiAoZmllbGREYXRhLmlkKSB7XG4gICAgICBjdXJyZW50VmFsdWUgPSB7IHZhbHVlOiBmaWVsZERhdGEuaWQsIGxhYmVsOiBmaWVsZERhdGEubGFiZWwgPyBmaWVsZERhdGEubGFiZWwgOiBmaWVsZERhdGEuaWQgfTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50V29ya2Zsb3dPcHRpb246IG51bWJlciB8IHN0cmluZyA9IGZpZWxkRGF0YS5pZCA/IGZpZWxkRGF0YS5pZCA6ICdpbml0aWFsJztcbiAgICBsZXQgdXBkYXRlV29ya2Zsb3dPcHRpb25zOiBBcnJheTx7IHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7IGxhYmVsOiBzdHJpbmcgfCBudW1iZXIgfT4gPSB3b3JrZmxvd09wdGlvbnNbY3VycmVudFdvcmtmbG93T3B0aW9uXSB8fCBbXTtcblxuICAgIGlmIChjdXJyZW50VmFsdWUgJiYgIXVwZGF0ZVdvcmtmbG93T3B0aW9ucy5maW5kKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSA9PT0gY3VycmVudFZhbHVlLnZhbHVlKSkge1xuICAgICAgdXBkYXRlV29ya2Zsb3dPcHRpb25zLnVuc2hpZnQoY3VycmVudFZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXBkYXRlV29ya2Zsb3dPcHRpb25zO1xuICB9XG5cbiAgc2V0SW5pdGlhbFZhbHVlcyhjb250cm9sczogQXJyYXk8Tm92b0NvbnRyb2xDb25maWc+LCB2YWx1ZXM6IGFueSwga2VlcENsZWFuPzogYm9vbGVhbiwga2V5T3ZlcnJpZGU/OiBzdHJpbmcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRyb2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gY29udHJvbHNbaV07XG4gICAgICBjb25zdCBrZXkgPSBrZXlPdmVycmlkZSA/IGNvbnRyb2wua2V5LnJlcGxhY2Uoa2V5T3ZlcnJpZGUsICcnKSA6IGNvbnRyb2wua2V5O1xuICAgICAgbGV0IHZhbHVlID0gdmFsdWVzW2tleV07XG5cbiAgICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodmFsdWUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmZpbHRlcigodmFsKSA9PiAhKE9iamVjdC5rZXlzKHZhbCkubGVuZ3RoID09PSAwICYmIHZhbC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSk7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUuZGF0YSAmJiB2YWx1ZS5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDAgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRyb2wuZGF0YVR5cGUgPT09ICdEYXRlJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIGNvbnRyb2wub3B0aW9uc1R5cGUgIT09ICdza2lwQ29udmVyc2lvbicpIHtcbiAgICAgICAgdmFsdWUgPSBkYXRlRm5zLnN0YXJ0T2ZEYXkodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBjb250cm9sLnZhbHVlID0gdmFsdWU7XG4gICAgICAvLyBUT0RPOiBrZWVwQ2xlYW4gaXMgbm90IHJlcXVpcmVkLCBidXQgaXMgYWx3YXlzIHVzZWQuIEl0IHNob3VsZCBkZWZhdWx0ICh0byB0cnVlPylcbiAgICAgIGNvbnRyb2wuZGlydHkgPSAha2VlcENsZWFuO1xuICAgIH1cbiAgfVxuXG4gIHNldEluaXRpYWxWYWx1ZXNGaWVsZHNldHMoZmllbGRzZXRzOiBBcnJheTxOb3ZvRmllbGRzZXQ+LCB2YWx1ZXMsIGtlZXBDbGVhbj86IGJvb2xlYW4pIHtcbiAgICBmaWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlcyhmaWVsZHNldC5jb250cm9scywgdmFsdWVzLCBrZWVwQ2xlYW4pO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yY2VTaG93QWxsQ29udHJvbHMoY29udHJvbHM6IEFycmF5PE5vdm9Db250cm9sQ29uZmlnPikge1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgIGNvbnRyb2wuaGlkZGVuID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBmb3JjZVNob3dBbGxDb250cm9sc0luRmllbGRzZXRzKGZpZWxkc2V0czogQXJyYXk8Tm92b0ZpZWxkc2V0Pikge1xuICAgIGZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgZmllbGRzZXQuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICBjb250cm9sLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmb3JjZVZhbGlkYXRpb24oZm9ybTogTm92b0Zvcm1Hcm91cCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKGZvcm0uY29udHJvbHMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBsZXQgY29udHJvbDogYW55ID0gZm9ybS5jb250cm9sc1trZXldO1xuICAgICAgaWYgKGNvbnRyb2wucmVxdWlyZWQgJiYgSGVscGVycy5pc0JsYW5rKGZvcm0udmFsdWVbY29udHJvbC5rZXldKSkge1xuICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNBZGRyZXNzRW1wdHkoY29udHJvbDogYW55KTogYm9vbGVhbiB7XG4gICAgbGV0IGZpZWxkTGlzdDogc3RyaW5nW10gPSBbJ2FkZHJlc3MxJywgJ2FkZHJlc3MyJywgJ2NpdHknLCAnc3RhdGUnLCAnemlwJywgJ2NvdW50cnlJRCddO1xuICAgIGxldCB2YWxpZDogYm9vbGVhbiA9IHRydWU7XG4gICAgaWYgKGNvbnRyb2wudmFsdWUgJiYgY29udHJvbC5jb25maWcpIHtcbiAgICAgIGZpZWxkTGlzdC5mb3JFYWNoKChzdWJmaWVsZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoKHN1YmZpZWxkICE9PSAnY291bnRyeUlEJyAmJlxuICAgICAgICAgICAgIUhlbHBlcnMuaXNFbXB0eShjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0pICYmXG4gICAgICAgICAgICBjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0ucmVxdWlyZWQgJiZcbiAgICAgICAgICAgIChIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZVtzdWJmaWVsZF0pIHx8IEhlbHBlcnMuaXNFbXB0eShjb250cm9sLnZhbHVlW3N1YmZpZWxkXSkpKSB8fFxuICAgICAgICAgICAgKHN1YmZpZWxkID09PSAnY291bnRyeUlEJyAmJlxuICAgICAgICAgICAgICAhSGVscGVycy5pc0VtcHR5KGNvbnRyb2wuY29uZmlnLmNvdW50cnlJRCkgJiZcbiAgICAgICAgICAgICAgY29udHJvbC5jb25maWcuY291bnRyeUlELnJlcXVpcmVkICYmXG4gICAgICAgICAgICAgIEhlbHBlcnMuaXNFbXB0eShjb250cm9sLnZhbHVlLmNvdW50cnlOYW1lKSkpICYmXG4gICAgICAgICAgIShcbiAgICAgICAgICAgIHN1YmZpZWxkID09PSAnc3RhdGUnICYmXG4gICAgICAgICAgICAhSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWUuY291bnRyeU5hbWUpICYmXG4gICAgICAgICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcgJiZcbiAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyAmJlxuICAgICAgICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zLmxlbmd0aCA9PT0gMFxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RhcnREYXRlRnJvbVJhbmdlKGRhdGVSYW5nZTogeyBtaW5EYXRlOiBzdHJpbmc7IG1pbk9mZnNldDogbnVtYmVyIH0pOiBEYXRlIHtcbiAgICBpZiAoZGF0ZVJhbmdlLm1pbkRhdGUpIHtcbiAgICAgIHJldHVybiBkYXRlRm5zLnBhcnNlKGRhdGVSYW5nZS5taW5EYXRlKTtcbiAgICB9IGVsc2UgaWYgKGRhdGVSYW5nZS5taW5PZmZzZXQpIHtcbiAgICAgIHJldHVybiBkYXRlRm5zLmFkZERheXMoZGF0ZUZucy5zdGFydE9mVG9kYXkoKSwgZGF0ZVJhbmdlLm1pbk9mZnNldCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWluIHN0YXJ0IGRhdGUgb2YgYSBEYXRlIGJhc2Ugb24gZmllbGQgZGF0YS5cbiAgICovXG4gIHByaXZhdGUgZ2V0U3RhcnREYXRlKGZpZWxkOiBhbnkpOiBEYXRlIHwgbnVsbCB7XG4gICAgaWYgKGZpZWxkLmFsbG93ZWREYXRlUmFuZ2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXJ0RGF0ZUZyb21SYW5nZShmaWVsZC5hbGxvd2VkRGF0ZVJhbmdlKTtcbiAgICB9XG4gICAgLy8gdGhlcmUgaXMgbm8gcmVzdHJpY3Rpb24gb24gdGhlIHN0YXJ0IGRhdGVcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaW5mZXJTdGFydERhdGUoY29udHJvbENvbmZpZywgZmllbGQpIHtcbiAgICBpZiAoZmllbGQuZGF0YVR5cGUgPT09ICdEYXRlJykge1xuICAgICAgY29uc3Qgc3RhcnREYXRlID0gdGhpcy5nZXRTdGFydERhdGUoZmllbGQpO1xuICAgICAgaWYgKHN0YXJ0RGF0ZSkge1xuICAgICAgICBjb250cm9sQ29uZmlnLnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGFydERhdGU7XG4gICAgfVxuICB9XG59XG4iXX0=