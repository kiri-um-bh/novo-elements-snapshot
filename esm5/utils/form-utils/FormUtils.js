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
            if (field.dataSpecialization === 'WORKFLOW_OPTIONS') {
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
            controlConfig.config = optionsConfig;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybVV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL2Zvcm0tdXRpbHMvRm9ybVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUM7O0FBRXBDLE9BQU8sRUFDTCxjQUFjLEVBRWQsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsV0FBVyxFQUNYLGVBQWUsRUFDZixhQUFhLEVBQ2IsV0FBVyxFQUVYLGFBQWEsRUFDYixZQUFZLEVBQ1osYUFBYSxFQUNiLGVBQWUsRUFDZixjQUFjLEVBQ2QsWUFBWSxFQUNaLFdBQVcsR0FDWixNQUFNLGtDQUFrQyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ2pJLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFekU7SUFtQ0UsbUJBQW1CLE1BQXdCLEVBQVMsY0FBOEI7UUFBL0QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFqQ2xGLDJCQUFzQixHQUFhO1lBQ2pDLFdBQVc7WUFDWCxlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLE1BQU07WUFDTixhQUFhO1lBQ2IsVUFBVTtZQUNWLGVBQWU7WUFDZixRQUFRO1lBQ1IsV0FBVztTQUNaLENBQUM7UUFDRix1QkFB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U0FBUzs7O0lBQ3BCLDJDQVVFOztJQUNGLHVDQW9CRTs7SUFFVSwyQkFBK0I7O0lBQUUsbUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuLy8gQXBwXG5pbXBvcnQge1xuICBBZGRyZXNzQ29udHJvbCxcbiAgQmFzZUNvbnRyb2wsXG4gIENoZWNrYm94Q29udHJvbCxcbiAgQ2hlY2tMaXN0Q29udHJvbCxcbiAgQ3VzdG9tQ29udHJvbCxcbiAgRGF0ZUNvbnRyb2wsXG4gIERhdGVUaW1lQ29udHJvbCxcbiAgRWRpdG9yQ29udHJvbCxcbiAgRmlsZUNvbnRyb2wsXG4gIE5vdm9Db250cm9sQ29uZmlnLFxuICBQaWNrZXJDb250cm9sLFxuICBSYWRpb0NvbnRyb2wsXG4gIFNlbGVjdENvbnRyb2wsXG4gIFRleHRBcmVhQ29udHJvbCxcbiAgVGV4dEJveENvbnRyb2wsXG4gIFRpbGVzQ29udHJvbCxcbiAgVGltZUNvbnRyb2wsXG59IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0vRm9ybUNvbnRyb2xzJztcbmltcG9ydCB7IEVudGl0eVBpY2tlclJlc3VsdCwgRW50aXR5UGlja2VyUmVzdWx0cyB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL3BpY2tlci9leHRyYXMvZW50aXR5LXBpY2tlci1yZXN1bHRzL0VudGl0eVBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0ZpZWxkc2V0LCBGb3JtRmllbGQgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9mb3JtL0Zvcm1JbnRlcmZhY2VzJztcbmltcG9ydCB7IE5vdm9Gb3JtQ29udHJvbCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0vTm92b0Zvcm1Db250cm9sJztcbmltcG9ydCB7IE5vdm9Gb3JtR3JvdXAgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9mb3JtL05vdm9Gb3JtR3JvdXAnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBPcHRpb25zU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvb3B0aW9ucy9PcHRpb25zU2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtVXRpbHMge1xuICBBU1NPQ0lBVEVEX0VOVElUWV9MSVNUOiBzdHJpbmdbXSA9IFtcbiAgICAnQ2FuZGlkYXRlJyxcbiAgICAnQ2xpZW50Q29udGFjdCcsXG4gICAgJ0NsaWVudENvcnBvcmF0aW9uJyxcbiAgICAnTGVhZCcsXG4gICAgJ09wcG9ydHVuaXR5JyxcbiAgICAnSm9iT3JkZXInLFxuICAgICdDb3Jwb3JhdGVVc2VyJyxcbiAgICAnUGVyc29uJyxcbiAgICAnUGxhY2VtZW50JyxcbiAgXTtcbiAgRU5USVRZX1BJQ0tFUl9MSVNUOiBzdHJpbmdbXSA9IFtcbiAgICAnQ2FuZGlkYXRlJyxcbiAgICAnQ2FuZGlkYXRlVGV4dCcsXG4gICAgJ0NsaWVudCcsXG4gICAgJ0NsaWVudFRleHQnLFxuICAgICdDbGllbnRDb250YWN0JyxcbiAgICAnQ2xpZW50Q29udGFjdFRleHQnLFxuICAgICdDbGllbnRDb3Jwb3JhdGlvbicsXG4gICAgJ0NsaWVudENvcnBvcmF0aW9uVGV4dCcsXG4gICAgJ0xlYWQnLFxuICAgICdMZWFkVGV4dCcsXG4gICAgJ09wcG9ydHVuaXR5JyxcbiAgICAnT3Bwb3J0dW5pdHlUZXh0JyxcbiAgICAnSm9iT3JkZXInLFxuICAgICdKb2JPcmRlclRleHQnLFxuICAgICdDb3Jwb3JhdGVVc2VyJyxcbiAgICAnQ29ycG9yYXRlVXNlclRleHQnLFxuICAgICdQZXJzb24nLFxuICAgICdQZXJzb25UZXh0JyxcbiAgICAnUGxhY2VtZW50JyxcbiAgXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwdWJsaWMgb3B0aW9uc1NlcnZpY2U6IE9wdGlvbnNTZXJ2aWNlKSB7fVxuXG4gIHRvRm9ybUdyb3VwKGNvbnRyb2xzOiBBcnJheTxhbnk+KTogTm92b0Zvcm1Hcm91cCB7XG4gICAgbGV0IGdyb3VwOiBhbnkgPSB7fTtcbiAgICBjb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZSkgPyAnJyA6IGNvbnRyb2wudmFsdWU7XG4gICAgICBncm91cFtjb250cm9sLmtleV0gPSBuZXcgTm92b0Zvcm1Db250cm9sKHZhbHVlLCBjb250cm9sKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IE5vdm9Gb3JtR3JvdXAoZ3JvdXApO1xuICB9XG5cbiAgZW1wdHlGb3JtR3JvdXAoKTogTm92b0Zvcm1Hcm91cCB7XG4gICAgcmV0dXJuIG5ldyBOb3ZvRm9ybUdyb3VwKHt9KTtcbiAgfVxuXG4gIGFkZENvbnRyb2xzKGZvcm1Hcm91cDogTm92b0Zvcm1Hcm91cCwgY29udHJvbHM6IEFycmF5PE5vdm9Db250cm9sQ29uZmlnPik6IHZvaWQge1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IEhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlKSA/ICcnIDogY29udHJvbC52YWx1ZTtcbiAgICAgIGxldCBmb3JtQ29udHJvbCA9IG5ldyBOb3ZvRm9ybUNvbnRyb2wodmFsdWUsIGNvbnRyb2wpO1xuICAgICAgZm9ybUdyb3VwLmFkZENvbnRyb2woY29udHJvbC5rZXksIGZvcm1Db250cm9sKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUNvbnRyb2xzKGZvcm1Hcm91cDogTm92b0Zvcm1Hcm91cCwgY29udHJvbHM6IEFycmF5PE5vdm9Db250cm9sQ29uZmlnPik6IHZvaWQge1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgIGZvcm1Hcm91cC5yZW1vdmVDb250cm9sKGNvbnRyb2wua2V5KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSB0b0Zvcm1Hcm91cEZyb21GaWVsZHNldFxuICAgKiBAcGFyYW0gZmllbGRzZXRzXG4gICAqL1xuICB0b0Zvcm1Hcm91cEZyb21GaWVsZHNldChmaWVsZHNldHM6IEFycmF5PE5vdm9GaWVsZHNldD4pOiBOb3ZvRm9ybUdyb3VwIHtcbiAgICBsZXQgY29udHJvbHM6IEFycmF5PE5vdm9Gb3JtQ29udHJvbD4gPSBbXTtcbiAgICBmaWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIGNvbnRyb2xzLnB1c2goLi4uZmllbGRzZXQuY29udHJvbHMpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnRvRm9ybUdyb3VwKGNvbnRyb2xzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBoYXNBc3NvY2lhdGVkRW50aXR5XG4gICAqIEBwYXJhbSBmaWVsZFxuICAgKi9cbiAgaGFzQXNzb2NpYXRlZEVudGl0eShmaWVsZDogRm9ybUZpZWxkKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKGZpZWxkLmFzc29jaWF0ZWRFbnRpdHkgJiYgfnRoaXMuQVNTT0NJQVRFRF9FTlRJVFlfTElTVC5pbmRleE9mKGZpZWxkLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5KSk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZGV0ZXJtaW5lSW5wdXRUeXBlXG4gICAqIEBwYXJhbSBmaWVsZFxuICAgKi9cbiAgZGV0ZXJtaW5lSW5wdXRUeXBlKGZpZWxkOiBGb3JtRmllbGQpOiBzdHJpbmcge1xuICAgIGxldCB0eXBlOiBzdHJpbmc7XG4gICAgbGV0IGRhdGFTcGVjaWFsaXphdGlvblR5cGVNYXAgPSB7XG4gICAgICBEQVRFVElNRTogJ2RhdGV0aW1lJyxcbiAgICAgIFRJTUU6ICd0aW1lJyxcbiAgICAgIE1PTkVZOiAnY3VycmVuY3knLFxuICAgICAgUEVSQ0VOVEFHRTogJ3BlcmNlbnRhZ2UnLFxuICAgICAgSFRNTDogJ2VkaXRvcicsXG4gICAgICAnSFRNTC1NSU5JTUFMJzogJ2VkaXRvci1taW5pbWFsJyxcbiAgICAgIFlFQVI6ICd5ZWFyJyxcbiAgICAgIFdPUktGTE9XX09QVElPTlM6ICdzZWxlY3QnLFxuICAgIH07XG4gICAgbGV0IGRhdGFUeXBlVG9UeXBlTWFwID0ge1xuICAgICAgVGltZXN0YW1wOiAnZGF0ZScsXG4gICAgICBEYXRlOiAnZGF0ZScsXG4gICAgICBCb29sZWFuOiAndGlsZXMnLFxuICAgIH07XG4gICAgbGV0IGlucHV0VHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIENIRUNLQk9YOiAncmFkaW8nLFxuICAgICAgUkFESU86ICdyYWRpbycsXG4gICAgICBTRUxFQ1Q6ICdzZWxlY3QnLFxuICAgICAgVElMRVM6ICd0aWxlcycsXG4gICAgfTtcbiAgICBsZXQgaW5wdXRUeXBlTXVsdGlUb1R5cGVNYXAgPSB7XG4gICAgICBDSEVDS0JPWDogJ2NoZWNrbGlzdCcsXG4gICAgICBSQURJTzogJ2NoZWNrbGlzdCcsXG4gICAgICBTRUxFQ1Q6ICdjaGlwcycsXG4gICAgfTtcbiAgICBsZXQgdHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIGZpbGU6ICdmaWxlJyxcbiAgICAgIENPTVBPU0lURTogJ2FkZHJlc3MnLFxuICAgIH07XG4gICAgbGV0IG51bWJlckRhdGFUeXBlVG9UeXBlTWFwID0ge1xuICAgICAgRG91YmxlOiAnZmxvYXQnLFxuICAgICAgQmlnRGVjaW1hbDogJ2Zsb2F0JyxcbiAgICAgIEludGVnZXI6ICdudW1iZXInLFxuICAgIH07XG4gICAgaWYgKGZpZWxkLnR5cGUgPT09ICdUT19NQU5ZJykge1xuICAgICAgaWYgKHRoaXMuaGFzQXNzb2NpYXRlZEVudGl0eShmaWVsZCkpIHtcbiAgICAgICAgaWYgKGZpZWxkLm11bHRpVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdHlwZSA9ICdlbnRpdHlwaWNrZXInO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR5cGUgPSAnZW50aXR5Y2hpcHMnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZmllbGQubXVsdGlWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0eXBlID0gJ3BpY2tlcic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHlwZSA9ICdjaGlwcyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdUT19PTkUnKSB7XG4gICAgICBpZiAoZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uID09PSAnV09SS0ZMT1dfT1BUSU9OUycpIHtcbiAgICAgICAgdHlwZSA9IGRhdGFTcGVjaWFsaXphdGlvblR5cGVNYXBbZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uXTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5oYXNBc3NvY2lhdGVkRW50aXR5KGZpZWxkKSkge1xuICAgICAgICB0eXBlID0gJ2VudGl0eXBpY2tlcic7IC8vIFRPRE8hXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlID0gJ3BpY2tlcic7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zVXJsICYmIGZpZWxkLmlucHV0VHlwZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgIGlmIChmaWVsZC5vcHRpb25zVHlwZSAmJiB+dGhpcy5FTlRJVFlfUElDS0VSX0xJU1QuaW5kZXhPZihmaWVsZC5vcHRpb25zVHlwZSkpIHtcbiAgICAgICAgdHlwZSA9ICdlbnRpdHlwaWNrZXInOyAvLyBUT0RPIVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9ICdwaWNrZXInO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXMoZGF0YVNwZWNpYWxpemF0aW9uVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24pID4gLTEpIHtcbiAgICAgIHR5cGUgPSBkYXRhU3BlY2lhbGl6YXRpb25UeXBlTWFwW2ZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbl07XG4gICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhkYXRhVHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5kYXRhVHlwZSkgPiAtMSkge1xuICAgICAgdHlwZSA9IGRhdGFUeXBlVG9UeXBlTWFwW2ZpZWxkLmRhdGFUeXBlXTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLmlucHV0VHlwZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgdHlwZSA9ICd0ZXh0YXJlYSc7XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zICYmIE9iamVjdC5rZXlzKGlucHV0VHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5pbnB1dFR5cGUpID4gLTEgJiYgIWZpZWxkLm11bHRpVmFsdWUpIHtcbiAgICAgIHR5cGUgPSBpbnB1dFR5cGVUb1R5cGVNYXBbZmllbGQuaW5wdXRUeXBlXTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLm9wdGlvbnMgJiYgT2JqZWN0LmtleXMoaW5wdXRUeXBlTXVsdGlUb1R5cGVNYXApLmluZGV4T2YoZmllbGQuaW5wdXRUeXBlKSA+IC0xICYmIGZpZWxkLm11bHRpVmFsdWUpIHtcbiAgICAgIHR5cGUgPSBpbnB1dFR5cGVNdWx0aVRvVHlwZU1hcFtmaWVsZC5pbnB1dFR5cGVdO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXModHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC50eXBlKSA+IC0xKSB7XG4gICAgICB0eXBlID0gdHlwZVRvVHlwZU1hcFtmaWVsZC50eXBlXTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKG51bWJlckRhdGFUeXBlVG9UeXBlTWFwKS5pbmRleE9mKGZpZWxkLmRhdGFUeXBlKSA+IC0xKSB7XG4gICAgICB0eXBlID0gbnVtYmVyRGF0YVR5cGVUb1R5cGVNYXBbZmllbGQuZGF0YVR5cGVdO1xuICAgIH0gLyogZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm1VdGlsczogVGhpcyBmaWVsZCB0eXBlIGlzIHVuc3VwcG9ydGVkLicpO1xuICAgICAgICB9Ki9cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGlzRmllbGRFbmNyeXB0ZWQoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4ga2V5LmluZGV4T2YoJ2N1c3RvbUVuY3J5cHRlZCcpID4gLTE7XG4gIH1cblxuICBnZXRDb250cm9sRm9yRmllbGQoXG4gICAgZmllbGQ6IGFueSxcbiAgICBodHRwLFxuICAgIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuIH0sXG4gICAgb3ZlcnJpZGVzPzogYW55LFxuICAgIGZvclRhYmxlOiBib29sZWFuID0gZmFsc2UsXG4gICAgZmllbGREYXRhPzogYW55LFxuICApIHtcbiAgICAvLyBUT0RPOiBpZiBmaWVsZC50eXBlIG92ZXJyaWRlcyBgZGV0ZXJtaW5lSW5wdXRUeXBlYCB3ZSBzaG91bGQgdXNlIGl0IGluIHRoYXQgbWV0aG9kIG9yIHVzZSB0aGlzIG1ldGhvZFxuICAgIC8vIFRPRE86IChjb250LikgYXMgdGhlIHNldHRlciBvZiB0aGUgZmllbGQgYXJndW1lbnRcbiAgICBsZXQgdHlwZTogc3RyaW5nID0gdGhpcy5kZXRlcm1pbmVJbnB1dFR5cGUoZmllbGQpIHx8IGZpZWxkLnR5cGU7XG4gICAgbGV0IGNvbnRyb2w6IGFueTtcbiAgICBsZXQgY29udHJvbENvbmZpZzogTm92b0NvbnRyb2xDb25maWcgPSB7XG4gICAgICBtZXRhVHlwZTogZmllbGQudHlwZSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBrZXk6IGZpZWxkLm5hbWUsXG4gICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICBwbGFjZWhvbGRlcjogZmllbGQuaGludCB8fCAnJyxcbiAgICAgIHJlcXVpcmVkOiBmaWVsZC5yZXF1aXJlZCB8fCBmaWVsZC5zeXN0ZW1SZXF1aXJlZCxcbiAgICAgIGhpZGRlbjogIWZpZWxkLnJlcXVpcmVkLFxuICAgICAgZW5jcnlwdGVkOiB0aGlzLmlzRmllbGRFbmNyeXB0ZWQoZmllbGQubmFtZSA/IGZpZWxkLm5hbWUudG9TdHJpbmcoKSA6ICcnKSxcbiAgICAgIHZhbHVlOiBmaWVsZC52YWx1ZSB8fCBmaWVsZC5kZWZhdWx0VmFsdWUsXG4gICAgICBzb3J0T3JkZXI6IGZpZWxkLnNvcnRPcmRlcixcbiAgICAgIGFzc29jaWF0ZWRFbnRpdHk6IGZpZWxkLmFzc29jaWF0ZWRFbnRpdHksXG4gICAgICBvcHRpb25zVHlwZTogZmllbGQub3B0aW9uc1R5cGUsXG4gICAgICBtdWx0aXBsZTogZmllbGQubXVsdGlWYWx1ZSxcbiAgICAgIHJlYWRPbmx5OiAhIWZpZWxkLmRpc2FibGVkIHx8ICEhZmllbGQucmVhZE9ubHksXG4gICAgICBtYXhsZW5ndGg6IGZpZWxkLm1heExlbmd0aCxcbiAgICAgIGludGVyYWN0aW9uczogZmllbGQuaW50ZXJhY3Rpb25zLFxuICAgICAgZGF0YVNwZWNpYWxpemF0aW9uOiBmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24sXG4gICAgICBkYXRhVHlwZTogZmllbGQuZGF0YVR5cGUsXG4gICAgICBkZXNjcmlwdGlvbjogZmllbGQuZGVzY3JpcHRpb24gfHwgJycsXG4gICAgICB0b29sdGlwOiBmaWVsZC50b29sdGlwLFxuICAgICAgdG9vbHRpcFBvc2l0aW9uOiBmaWVsZC50b29sdGlwUG9zaXRpb24sXG4gICAgICBjdXN0b21Db250cm9sOiBmaWVsZC5jdXN0b21Db250cm9sLFxuICAgICAgdGVtcGxhdGU6IGZpZWxkLnRlbXBsYXRlLFxuICAgICAgY3VzdG9tQ29udHJvbENvbmZpZzogZmllbGQuY3VzdG9tQ29udHJvbENvbmZpZyxcbiAgICAgIHJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnM6IGZpZWxkLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMsXG4gICAgICB2YWxpZGF0b3JzOiBmaWVsZC52YWxpZGF0b3JzLFxuICAgICAgd2FybmluZzogZmllbGQud2FybmluZyxcbiAgICAgIGNvbmZpZzogZmllbGQuY29uZmlnIHx8IHt9LFxuICAgICAgY2xvc2VPblNlbGVjdDogZmllbGQuY2xvc2VPblNlbGVjdCxcbiAgICB9O1xuICAgIHRoaXMuaW5mZXJTdGFydERhdGUoY29udHJvbENvbmZpZywgZmllbGQpO1xuICAgIC8vIFRPRE86IGdldENvbnRyb2xPcHRpb25zIHNob3VsZCBhbHdheXMgcmV0dXJuIHRoZSBjb3JyZWN0IGZvcm1hdFxuICAgIGNvbnN0IG9wdGlvbnNDb25maWcgPSB0aGlzLmdldENvbnRyb2xPcHRpb25zKGZpZWxkLCBodHRwLCBjb25maWcsIGZpZWxkRGF0YSk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9uc0NvbmZpZykgJiYgISh0eXBlID09PSAnY2hpcHMnIHx8IHR5cGUgPT09ICdwaWNrZXInKSkge1xuICAgICAgY29udHJvbENvbmZpZy5vcHRpb25zID0gb3B0aW9uc0NvbmZpZztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9uc0NvbmZpZykgJiYgKHR5cGUgPT09ICdjaGlwcycgfHwgdHlwZSA9PT0gJ3BpY2tlcicpKSB7XG4gICAgICBjb250cm9sQ29uZmlnLmNvbmZpZyA9IHtcbiAgICAgICAgb3B0aW9uczogb3B0aW9uc0NvbmZpZyxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChvcHRpb25zQ29uZmlnKSB7XG4gICAgICBjb250cm9sQ29uZmlnLmNvbmZpZyA9IG9wdGlvbnNDb25maWc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICd5ZWFyJykge1xuICAgICAgY29udHJvbENvbmZpZy5tYXhsZW5ndGggPSA0O1xuICAgIH1cbiAgICAvLyBUT0RPOiBPdmVycmlkZXMgc2hvdWxkIGJlIGFuIGl0ZXJhYmxlIG9mIGFsbCBwcm9wZXJ0aWVzIChwb3RlbnRpYWxseSBhIHByaXZhdGUgbWV0aG9kKVxuICAgIGxldCBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZTtcbiAgICBsZXQgb3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGU7XG4gICAgaWYgKG92ZXJyaWRlcyAmJiBvdmVycmlkZXNbZmllbGQubmFtZV0pIHtcbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0ucmVzdWx0c1RlbXBsYXRlKSB7XG4gICAgICAgIG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnJlc3VsdHNUZW1wbGF0ZTtcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcucmVzdWx0c1RlbXBsYXRlID0gb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGU7XG4gICAgICAgIGRlbGV0ZSBvdmVycmlkZXNbZmllbGQubmFtZV0ucmVzdWx0c1RlbXBsYXRlO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5vdmVycmlkZVByZXZpZXdUZW1wbGF0ZSkge1xuICAgICAgICBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5vdmVycmlkZVByZXZpZXdUZW1wbGF0ZTtcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcub3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGUgPSBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZTtcbiAgICAgICAgZGVsZXRlIG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5vdmVycmlkZVByZXZpZXdUZW1wbGF0ZTtcbiAgICAgIH1cbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0ucGlja2VyQ2FsbGJhY2spIHtcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcuY2FsbGJhY2sgPSBvdmVycmlkZXNbZmllbGQubmFtZV0ucGlja2VyQ2FsbGJhY2s7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnR5cGUpIHtcbiAgICAgICAgdHlwZSA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS50eXBlO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5jb2x1bW5zKSB7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLmNvbHVtbnMgPSBvdmVycmlkZXNbZmllbGQubmFtZV0uY29sdW1ucztcbiAgICAgICAgY29udHJvbENvbmZpZy5jbG9zZU9uU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgZGVsZXRlIGNvbnRyb2xDb25maWcubGFiZWw7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLndhcm5pbmcpIHtcbiAgICAgICAgY29udHJvbENvbmZpZy53YXJuaW5nID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLndhcm5pbmc7XG4gICAgICB9XG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRyb2xDb25maWcsIG92ZXJyaWRlc1tmaWVsZC5uYW1lXSk7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdlbnRpdHljaGlwcyc6XG4gICAgICAgIC8vIFRPRE86IFRoaXMgZG9lc24ndCBiZWxvbmcgaW4gdGhpcyBjb2RlYmFzZVxuICAgICAgICBjb250cm9sQ29uZmlnLm11bHRpcGxlID0gdHJ1ZTtcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcucmVzdWx0c1RlbXBsYXRlID0gb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGUgfHwgRW50aXR5UGlja2VyUmVzdWx0cztcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcucHJldmlld1RlbXBsYXRlID0gb3ZlcnJpZGVQcmV2aWV3VGVtcGxhdGUgfHwgRW50aXR5UGlja2VyUmVzdWx0O1xuICAgICAgICAvLyBUT0RPOiBXaGVuIGFwcGVuZFRvQm9keSBwaWNrZXIgd29ya3MgYmV0dGVyIGluIHRhYmxlL2Zvcm1cbiAgICAgICAgY29udHJvbCA9IG5ldyBQaWNrZXJDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoaXBzJzpcbiAgICAgICAgY29udHJvbENvbmZpZy5tdWx0aXBsZSA9IHRydWU7XG4gICAgICAgIC8vIFRPRE86IFdoZW4gYXBwZW5kVG9Cb2R5IHBpY2tlciB3b3JrcyBiZXR0ZXIgaW4gdGFibGUvZm9ybVxuICAgICAgICBjb250cm9sID0gbmV3IFBpY2tlckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZW50aXR5cGlja2VyJzpcbiAgICAgICAgLy8gVE9ETzogVGhpcyBkb2Vzbid0IGJlbG9uZyBpbiB0aGlzIGNvZGViYXNlXG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSA9IG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlIHx8IEVudGl0eVBpY2tlclJlc3VsdHM7XG4gICAgICAgIC8vIFRPRE86IFdoZW4gYXBwZW5kVG9Cb2R5IHBpY2tlciB3b3JrcyBiZXR0ZXIgaW4gdGFibGUvZm9ybVxuICAgICAgICBjb250cm9sID0gbmV3IFBpY2tlckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGlja2VyJzpcbiAgICAgICAgLy8gVE9ETzogV2hlbiBhcHBlbmRUb0JvZHkgcGlja2VyIHdvcmtzIGJldHRlciBpbiB0YWJsZS9mb3JtXG4gICAgICAgIGNvbnRyb2wgPSBuZXcgUGlja2VyQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXRldGltZSc6XG4gICAgICAgIGNvbnRyb2xDb25maWcubWlsaXRhcnkgPSBjb25maWcgPyAhIWNvbmZpZy5taWxpdGFyeSA6IGZhbHNlO1xuICAgICAgICBjb250cm9sID0gbmV3IERhdGVUaW1lQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgY29udHJvbENvbmZpZy5kYXRlRm9ybWF0ID0gZmllbGQuZGF0ZUZvcm1hdDtcbiAgICAgICAgY29udHJvbENvbmZpZy50ZXh0TWFza0VuYWJsZWQgPSBmaWVsZC50ZXh0TWFza0VuYWJsZWQ7XG4gICAgICAgIGNvbnRyb2xDb25maWcuYWxsb3dJbnZhbGlkRGF0ZSA9IGZpZWxkLmFsbG93SW52YWxpZERhdGU7XG4gICAgICAgIGNvbnRyb2xDb25maWcubWlsaXRhcnkgPSBjb25maWcgPyAhIWNvbmZpZy5taWxpdGFyeSA6IGZhbHNlO1xuICAgICAgICBjb250cm9sID0gbmV3IERhdGVDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RpbWUnOlxuICAgICAgICBjb250cm9sQ29uZmlnLm1pbGl0YXJ5ID0gY29uZmlnID8gISFjb25maWcubWlsaXRhcnkgOiBmYWxzZTtcbiAgICAgICAgY29udHJvbCA9IG5ldyBUaW1lQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXJyZW5jeSc6XG4gICAgICBjYXNlICdtb25leSc6XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICBjYXNlICdwZXJjZW50YWdlJzpcbiAgICAgIGNhc2UgJ2Zsb2F0JzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgLy8gVE9ETzogT25seSB0eXBlcyBmcm9tIGBkZXRlcm1pbmVJbnB1dFR5cGVgIHNob3VsZCBiZSB1c2VkIGluIHRoaXMgY2xhc3NcbiAgICAgICAgaWYgKHR5cGUgPT09ICdtb25leScpIHtcbiAgICAgICAgICB0eXBlID0gJ2N1cnJlbmN5JztcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sQ29uZmlnLnR5cGUgPSB0eXBlO1xuICAgICAgICBjb250cm9sID0gbmV3IFRleHRCb3hDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICBjb250cm9sID0gbmV3IFRleHRCb3hDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBUZXh0QXJlYUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdG9yJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBFZGl0b3JDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VkaXRvci1taW5pbWFsJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBFZGl0b3JDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBjb250cm9sLm1pbmltYWwgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RpbGVzJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBUaWxlc0NvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICBjb250cm9sQ29uZmlnLmNoZWNrYm94TGFiZWwgPSBmaWVsZC5jaGVja2JveExhYmVsO1xuICAgICAgICBjb250cm9sID0gbmV3IENoZWNrYm94Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGVja2xpc3QnOlxuICAgICAgICBjb250cm9sID0gbmV3IENoZWNrTGlzdENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICBjb250cm9sID0gbmV3IFJhZGlvQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICBjb250cm9sID0gbmV3IFNlbGVjdENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYWRkcmVzcyc6XG4gICAgICAgIGNvbnRyb2xDb25maWcucmVxdWlyZWQgPSBmaWVsZC5yZXF1aXJlZCB8fCBmYWxzZTtcbiAgICAgICAgaWYgKEhlbHBlcnMuaXNCbGFuayhjb250cm9sQ29uZmlnLmNvbmZpZykpIHtcbiAgICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnJlcXVpcmVkID0gZmllbGQucmVxdWlyZWQ7XG4gICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnLnJlYWRPbmx5ID0gY29udHJvbENvbmZpZy5yZWFkT25seTtcbiAgICAgICAgaWYgKGZpZWxkLmZpZWxkcyAmJiBmaWVsZC5maWVsZHMubGVuZ3RoKSB7XG4gICAgICAgICAgZm9yIChsZXQgc3ViZmllbGQgb2YgZmllbGQuZmllbGRzKSB7XG4gICAgICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZ1tzdWJmaWVsZC5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6ICEhc3ViZmllbGQucmVxdWlyZWQsXG4gICAgICAgICAgICAgIGhpZGRlbjogISFzdWJmaWVsZC5yZWFkT25seSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eShzdWJmaWVsZC5sYWJlbCkpIHtcbiAgICAgICAgICAgICAgY29udHJvbENvbmZpZy5jb25maWdbc3ViZmllbGQubmFtZV0ubGFiZWwgPSBzdWJmaWVsZC5sYWJlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghSGVscGVycy5pc0VtcHR5KHN1YmZpZWxkLm1heExlbmd0aCkpIHtcbiAgICAgICAgICAgICAgY29udHJvbENvbmZpZy5jb25maWdbc3ViZmllbGQubmFtZV0ubWF4bGVuZ3RoID0gc3ViZmllbGQubWF4TGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udHJvbENvbmZpZy5yZXF1aXJlZCA9IGNvbnRyb2xDb25maWcucmVxdWlyZWQgfHwgc3ViZmllbGQucmVxdWlyZWQ7XG4gICAgICAgICAgICBpZiAoc3ViZmllbGQuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICAgIGlmIChIZWxwZXJzLmlzQmxhbmsoY29udHJvbENvbmZpZy52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLnZhbHVlID0ge307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udHJvbENvbmZpZy52YWx1ZVtzdWJmaWVsZC5uYW1lXSA9IHN1YmZpZWxkLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3ViZmllbGQubmFtZSA9PT0gJ2NvdW50cnlJRCcpIHtcbiAgICAgICAgICAgICAgaWYgKEhlbHBlcnMuaXNCbGFuayhjb250cm9sQ29uZmlnLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xDb25maWcudmFsdWUgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLnZhbHVlW3N1YmZpZWxkLm5hbWVdID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdWJmaWVsZC5uYW1lID09PSAnc3RhdGUnIHx8IHN1YmZpZWxkLm5hbWUgPT09ICdjb3VudHJ5SUQnKSB7XG4gICAgICAgICAgICAgIGlmIChzdWJmaWVsZC5uYW1lID09PSAnY291bnRyeUlEJykge1xuICAgICAgICAgICAgICAgIHN1YmZpZWxkLm9wdGlvbnNUeXBlID0gJ0NvdW50cnknO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghc3ViZmllbGQub3B0aW9uc1VybCkge1xuICAgICAgICAgICAgICAgIHN1YmZpZWxkLm9wdGlvbnNVcmwgPSBgb3B0aW9ucy8ke3N1YmZpZWxkLm9wdGlvbnNUeXBlfWA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udHJvbENvbmZpZy5jb25maWdbc3ViZmllbGQubmFtZV0ucGlja2VyQ29uZmlnID0gdGhpcy5nZXRDb250cm9sT3B0aW9ucyhzdWJmaWVsZCwgaHR0cCwgY29uZmlnLCBmaWVsZERhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb250cm9sQ29uZmlnLmlzRW1wdHkgPSB0aGlzLmlzQWRkcmVzc0VtcHR5O1xuICAgICAgICBjb250cm9sID0gbmV3IEFkZHJlc3NDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICBjb250cm9sID0gbmV3IEZpbGVDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2N1c3RvbSc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgQ3VzdG9tQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb250cm9sID0gbmV3IFRleHRCb3hDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cblxuICB0b0NvbnRyb2xzKFxuICAgIG1ldGEsXG4gICAgY3VycmVuY3lGb3JtYXQsXG4gICAgaHR0cCxcbiAgICBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiB9LFxuICAgIG92ZXJyaWRlcz86IGFueSxcbiAgICBmb3JUYWJsZTogYm9vbGVhbiA9IGZhbHNlLFxuICApIHtcbiAgICBsZXQgY29udHJvbHMgPSBbXTtcbiAgICBpZiAobWV0YSAmJiBtZXRhLmZpZWxkcykge1xuICAgICAgbGV0IGZpZWxkcyA9IG1ldGEuZmllbGRzO1xuICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBmaWVsZC5uYW1lICE9PSAnaWQnICYmXG4gICAgICAgICAgKGZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbiAhPT0gJ1NZU1RFTScgfHwgWydhZGRyZXNzJywgJ2JpbGxpbmdBZGRyZXNzJywgJ3NlY29uZGFyeUFkZHJlc3MnXS5pbmRleE9mKGZpZWxkLm5hbWUpICE9PSAtMSkgJiZcbiAgICAgICAgICAhZmllbGQucmVhZE9ubHlcbiAgICAgICAgKSB7XG4gICAgICAgICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2xGb3JGaWVsZChmaWVsZCwgaHR0cCwgY29uZmlnLCBvdmVycmlkZXMsIGZvclRhYmxlKTtcbiAgICAgICAgICAvLyBTZXQgY3VycmVuY3kgZm9ybWF0XG4gICAgICAgICAgaWYgKGNvbnRyb2wuc3ViVHlwZSA9PT0gJ2N1cnJlbmN5Jykge1xuICAgICAgICAgICAgY29udHJvbC5jdXJyZW5jeUZvcm1hdCA9IGN1cnJlbmN5Rm9ybWF0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBBZGQgdG8gY29udHJvbHNcbiAgICAgICAgICBjb250cm9scy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyb2xzO1xuICB9XG5cbiAgdG9UYWJsZUNvbnRyb2xzKG1ldGEsIGN1cnJlbmN5Rm9ybWF0LCBodHRwLCBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiB9LCBvdmVycmlkZXM/OiBhbnkpIHtcbiAgICBsZXQgY29udHJvbHMgPSB0aGlzLnRvQ29udHJvbHMobWV0YSwgY3VycmVuY3lGb3JtYXQsIGh0dHAsIGNvbmZpZywgb3ZlcnJpZGVzLCB0cnVlKTtcbiAgICBsZXQgcmV0ID0ge307XG4gICAgY29udHJvbHMuZm9yRWFjaCgoY29udHJvbDogQmFzZUNvbnRyb2wpID0+IHtcbiAgICAgIHJldFtjb250cm9sLmtleV0gPSB7XG4gICAgICAgIGVkaXRvclR5cGU6IGNvbnRyb2wuX190eXBlLFxuICAgICAgICBlZGl0b3JDb25maWc6IGNvbnRyb2wuX19jb25maWcsXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICB0b0ZpZWxkU2V0cyhcbiAgICBtZXRhLFxuICAgIGN1cnJlbmN5Rm9ybWF0LFxuICAgIGh0dHAsXG4gICAgY29uZmlnOiB7IHRva2VuPzogc3RyaW5nOyByZXN0VXJsPzogc3RyaW5nOyBtaWxpdGFyeT86IGJvb2xlYW4gfSxcbiAgICBvdmVycmlkZXM/LFxuICAgIGRhdGE/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICApIHtcbiAgICBsZXQgZmllbGRzZXRzOiBBcnJheTxOb3ZvRmllbGRzZXQ+ID0gW107XG4gICAgbGV0IHJhbmdlcyA9IFtdO1xuICAgIGlmIChtZXRhICYmIG1ldGEuZmllbGRzKSB7XG4gICAgICBsZXQgZmllbGRzID0gbWV0YS5maWVsZHNcbiAgICAgICAgLm1hcCgoZmllbGQpID0+IHtcbiAgICAgICAgICBpZiAoIWZpZWxkLmhhc093blByb3BlcnR5KCdzb3J0T3JkZXInKSkge1xuICAgICAgICAgICAgZmllbGQuc29ydE9yZGVyID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgICAgIH0pXG4gICAgICAgIC5zb3J0KEhlbHBlcnMuc29ydEJ5RmllbGQoWydzb3J0T3JkZXInLCAnbmFtZSddKSk7XG4gICAgICBpZiAobWV0YS5zZWN0aW9uSGVhZGVycyAmJiBtZXRhLnNlY3Rpb25IZWFkZXJzLmxlbmd0aCkge1xuICAgICAgICBtZXRhLnNlY3Rpb25IZWFkZXJzLnNvcnQoSGVscGVycy5zb3J0QnlGaWVsZChbJ3NvcnRPcmRlcicsICduYW1lJ10pKTtcbiAgICAgICAgbWV0YS5zZWN0aW9uSGVhZGVycy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uZW5hYmxlZCkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uc29ydE9yZGVyID4gMCAmJiBmaWVsZHNldHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIGZpZWxkc2V0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBjb250cm9sczogW10sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgIG1heDogaXRlbS5zb3J0T3JkZXIgLSAxLFxuICAgICAgICAgICAgICAgIGZpZWxkc2V0SWR4OiAwLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZWxkc2V0cy5wdXNoKHtcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubGFiZWwsXG4gICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbiB8fCAnYmhpLXNlY3Rpb24nLFxuICAgICAgICAgICAgICBjb250cm9sczogW10sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgbWluOiBpdGVtLnNvcnRPcmRlcixcbiAgICAgICAgICAgICAgbWF4OiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgICAgICAgZmllbGRzZXRJZHg6IGZpZWxkc2V0cy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaSA+IDAgJiYgZmllbGRzZXRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgcmFuZ2VzW2ZpZWxkc2V0cy5sZW5ndGggLSAyXS5tYXggPSBpdGVtLnNvcnRPcmRlciAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyYW5nZXMubGVuZ3RoKSB7XG4gICAgICAgICAgZmllbGRzZXRzLnB1c2goe1xuICAgICAgICAgICAgY29udHJvbHM6IFtdLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgICAgICBmaWVsZHNldElkeDogMCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGRzZXRzLnB1c2goe1xuICAgICAgICAgIGNvbnRyb2xzOiBbXSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJhbmdlcy5wdXNoKHtcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcbiAgICAgICAgICBmaWVsZHNldElkeDogMCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGZpZWxkLm5hbWUgIT09ICdpZCcgJiZcbiAgICAgICAgICAoZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uICE9PSAnU1lTVEVNJyB8fCBbJ2FkZHJlc3MnLCAnYmlsbGluZ0FkZHJlc3MnLCAnc2Vjb25kYXJ5QWRkcmVzcyddLmluZGV4T2YoZmllbGQubmFtZSkgIT09IC0xKSAmJlxuICAgICAgICAgICFmaWVsZC5yZWFkT25seVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBmaWVsZERhdGE6IGFueSA9IGRhdGEgJiYgZGF0YVtmaWVsZC5uYW1lXSA/IGRhdGFbZmllbGQubmFtZV0gOiBudWxsO1xuICAgICAgICAgIGxldCBjb250cm9sID0gdGhpcy5nZXRDb250cm9sRm9yRmllbGQoZmllbGQsIGh0dHAsIGNvbmZpZywgb3ZlcnJpZGVzLCB1bmRlZmluZWQsIGZpZWxkRGF0YSk7XG4gICAgICAgICAgLy8gU2V0IGN1cnJlbmN5IGZvcm1hdFxuICAgICAgICAgIGlmIChjb250cm9sLnN1YlR5cGUgPT09ICdjdXJyZW5jeScpIHtcbiAgICAgICAgICAgIGNvbnRyb2wuY3VycmVuY3lGb3JtYXQgPSBjdXJyZW5jeUZvcm1hdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGxvY2F0aW9uID0gcmFuZ2VzLmZpbmQoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoaXRlbS5taW4gPD0gZmllbGQuc29ydE9yZGVyICYmIGZpZWxkLnNvcnRPcmRlciA8PSBpdGVtLm1heCkgfHwgKGl0ZW0ubWluIDw9IGZpZWxkLnNvcnRPcmRlciAmJiBpdGVtLm1pbiA9PT0gaXRlbS5tYXgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgICAgICAgLy8gQWRkIHRvIGNvbnRyb2xzXG4gICAgICAgICAgICBmaWVsZHNldHNbbG9jYXRpb24uZmllbGRzZXRJZHhdLmNvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGZpZWxkc2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZmllbGRzZXRzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgY29udHJvbHM6IHRoaXMudG9Db250cm9scyhtZXRhLCBjdXJyZW5jeUZvcm1hdCwgaHR0cCwgY29uZmlnKSxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29udHJvbE9wdGlvbnMoZmllbGQ6IGFueSwgaHR0cDogYW55LCBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiB9LCBmaWVsZERhdGE/OiBhbnkpOiBhbnkge1xuICAgIC8vIFRPRE86IFRoZSB0b2tlbiBwcm9wZXJ0eSBvZiBjb25maWcgaXMgdGhlIG9ubHkgcHJvcGVydHkgdXNlZDsganVzdCBwYXNzIGluIGB0b2tlbjogc3RyaW5nYFxuICAgIGlmIChmaWVsZC5kYXRhVHlwZSA9PT0gJ0Jvb2xlYW4nICYmICFmaWVsZC5vcHRpb25zKSB7XG4gICAgICAvLyBUT0RPOiBkYXRhVHlwZSBzaG91bGQgb25seSBiZSBkZXRlcm1pbmVkIGJ5IGBkZXRlcm1pbmVJbnB1dFR5cGVgIHdoaWNoIGRvZXNuJ3QgZXZlciByZXR1cm4gJ0Jvb2xlYW4nIGl0XG4gICAgICAvLyBUT0RPOiAoY29udC4pIHJldHVybnMgYHRpbGVzYFxuICAgICAgcmV0dXJuIFt7IHZhbHVlOiBmYWxzZSwgbGFiZWw6IHRoaXMubGFiZWxzLm5vIH0sIHsgdmFsdWU6IHRydWUsIGxhYmVsOiB0aGlzLmxhYmVscy55ZXMgfV07XG4gICAgfSBlbHNlIGlmIChmaWVsZC53b3JrZmxvd09wdGlvbnMgJiYgZmllbGREYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRXb3JrZmxvd09wdGlvbnMoZmllbGQud29ya2Zsb3dPcHRpb25zLCBmaWVsZERhdGEpO1xuICAgIH0gZWxzZSBpZiAoZmllbGQub3B0aW9uc1VybCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1NlcnZpY2UuZ2V0T3B0aW9uc0NvbmZpZyhodHRwLCBmaWVsZCwgY29uZmlnKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQub3B0aW9ucykgJiYgZmllbGQudHlwZSA9PT0gJ2NoaXBzJykge1xuICAgICAgbGV0IG9wdGlvbnMgPSBmaWVsZC5vcHRpb25zO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmllbGQ6ICd2YWx1ZScsXG4gICAgICAgIGZvcm1hdDogJyRsYWJlbCcsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZmllbGQub3B0aW9ucykge1xuICAgICAgcmV0dXJuIGZpZWxkLm9wdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRXb3JrZmxvd09wdGlvbnMoXG4gICAgd29ya2Zsb3dPcHRpb25zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICAgIGZpZWxkRGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgKTogQXJyYXk8eyB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyOyBsYWJlbDogc3RyaW5nIHwgbnVtYmVyIH0+IHtcbiAgICBsZXQgY3VycmVudFZhbHVlOiB7IHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7IGxhYmVsOiBzdHJpbmcgfCBudW1iZXIgfTtcbiAgICBpZiAoZmllbGREYXRhLmlkKSB7XG4gICAgICBjdXJyZW50VmFsdWUgPSB7IHZhbHVlOiBmaWVsZERhdGEuaWQsIGxhYmVsOiBmaWVsZERhdGEubGFiZWwgPyBmaWVsZERhdGEubGFiZWwgOiBmaWVsZERhdGEuaWQgfTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50V29ya2Zsb3dPcHRpb246IG51bWJlciB8IHN0cmluZyA9IGZpZWxkRGF0YS5pZCA/IGZpZWxkRGF0YS5pZCA6ICdpbml0aWFsJztcbiAgICBsZXQgdXBkYXRlV29ya2Zsb3dPcHRpb25zOiBBcnJheTx7IHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7IGxhYmVsOiBzdHJpbmcgfCBudW1iZXIgfT4gPSB3b3JrZmxvd09wdGlvbnNbY3VycmVudFdvcmtmbG93T3B0aW9uXSB8fCBbXTtcblxuICAgIGlmIChjdXJyZW50VmFsdWUgJiYgIXVwZGF0ZVdvcmtmbG93T3B0aW9ucy5maW5kKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSA9PT0gY3VycmVudFZhbHVlLnZhbHVlKSkge1xuICAgICAgdXBkYXRlV29ya2Zsb3dPcHRpb25zLnVuc2hpZnQoY3VycmVudFZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXBkYXRlV29ya2Zsb3dPcHRpb25zO1xuICB9XG5cbiAgc2V0SW5pdGlhbFZhbHVlcyhjb250cm9sczogQXJyYXk8Tm92b0NvbnRyb2xDb25maWc+LCB2YWx1ZXM6IGFueSwga2VlcENsZWFuPzogYm9vbGVhbiwga2V5T3ZlcnJpZGU/OiBzdHJpbmcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRyb2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY29udHJvbCA9IGNvbnRyb2xzW2ldO1xuICAgICAgbGV0IGtleSA9IGtleU92ZXJyaWRlID8gY29udHJvbC5rZXkucmVwbGFjZShrZXlPdmVycmlkZSwgJycpIDogY29udHJvbC5rZXk7XG4gICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNba2V5XTtcblxuICAgICAgaWYgKEhlbHBlcnMuaXNCbGFuayh2YWx1ZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuZmlsdGVyKCh2YWwpID0+ICEoT2JqZWN0LmtleXModmFsKS5sZW5ndGggPT09IDAgJiYgdmFsLmNvbnN0cnVjdG9yID09PSBPYmplY3QpKTtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZS5kYXRhICYmIHZhbHVlLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb250cm9sLnZhbHVlID0gdmFsdWU7XG4gICAgICAvLyBUT0RPOiBrZWVwQ2xlYW4gaXMgbm90IHJlcXVpcmVkLCBidXQgaXMgYWx3YXlzIHVzZWQuIEl0IHNob3VsZCBkZWZhdWx0ICh0byB0cnVlPylcbiAgICAgIGNvbnRyb2wuZGlydHkgPSAha2VlcENsZWFuO1xuICAgIH1cbiAgfVxuXG4gIHNldEluaXRpYWxWYWx1ZXNGaWVsZHNldHMoZmllbGRzZXRzOiBBcnJheTxOb3ZvRmllbGRzZXQ+LCB2YWx1ZXMsIGtlZXBDbGVhbj86IGJvb2xlYW4pIHtcbiAgICBmaWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIHRoaXMuc2V0SW5pdGlhbFZhbHVlcyhmaWVsZHNldC5jb250cm9scywgdmFsdWVzLCBrZWVwQ2xlYW4pO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yY2VTaG93QWxsQ29udHJvbHMoY29udHJvbHM6IEFycmF5PE5vdm9Db250cm9sQ29uZmlnPikge1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgIGNvbnRyb2wuaGlkZGVuID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBmb3JjZVNob3dBbGxDb250cm9sc0luRmllbGRzZXRzKGZpZWxkc2V0czogQXJyYXk8Tm92b0ZpZWxkc2V0Pikge1xuICAgIGZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgZmllbGRzZXQuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICBjb250cm9sLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmb3JjZVZhbGlkYXRpb24oZm9ybTogTm92b0Zvcm1Hcm91cCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKGZvcm0uY29udHJvbHMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBsZXQgY29udHJvbDogYW55ID0gZm9ybS5jb250cm9sc1trZXldO1xuICAgICAgaWYgKGNvbnRyb2wucmVxdWlyZWQgJiYgSGVscGVycy5pc0JsYW5rKGZvcm0udmFsdWVbY29udHJvbC5rZXldKSkge1xuICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNBZGRyZXNzRW1wdHkoY29udHJvbDogYW55KTogYm9vbGVhbiB7XG4gICAgbGV0IGZpZWxkTGlzdDogc3RyaW5nW10gPSBbJ2FkZHJlc3MxJywgJ2FkZHJlc3MyJywgJ2NpdHknLCAnc3RhdGUnLCAnemlwJywgJ2NvdW50cnlJRCddO1xuICAgIGxldCB2YWxpZDogYm9vbGVhbiA9IHRydWU7XG4gICAgaWYgKGNvbnRyb2wudmFsdWUgJiYgY29udHJvbC5jb25maWcpIHtcbiAgICAgIGZpZWxkTGlzdC5mb3JFYWNoKChzdWJmaWVsZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoKHN1YmZpZWxkICE9PSAnY291bnRyeUlEJyAmJlxuICAgICAgICAgICAgIUhlbHBlcnMuaXNFbXB0eShjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0pICYmXG4gICAgICAgICAgICBjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0ucmVxdWlyZWQgJiZcbiAgICAgICAgICAgIChIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZVtzdWJmaWVsZF0pIHx8IEhlbHBlcnMuaXNFbXB0eShjb250cm9sLnZhbHVlW3N1YmZpZWxkXSkpKSB8fFxuICAgICAgICAgICAgKHN1YmZpZWxkID09PSAnY291bnRyeUlEJyAmJlxuICAgICAgICAgICAgICAhSGVscGVycy5pc0VtcHR5KGNvbnRyb2wuY29uZmlnLmNvdW50cnlJRCkgJiZcbiAgICAgICAgICAgICAgY29udHJvbC5jb25maWcuY291bnRyeUlELnJlcXVpcmVkICYmXG4gICAgICAgICAgICAgIEhlbHBlcnMuaXNFbXB0eShjb250cm9sLnZhbHVlLmNvdW50cnlOYW1lKSkpICYmXG4gICAgICAgICAgIShcbiAgICAgICAgICAgIHN1YmZpZWxkID09PSAnc3RhdGUnICYmXG4gICAgICAgICAgICAhSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWUuY291bnRyeU5hbWUpICYmXG4gICAgICAgICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcgJiZcbiAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyAmJlxuICAgICAgICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zLmxlbmd0aCA9PT0gMFxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RhcnREYXRlRnJvbVJhbmdlKGRhdGVSYW5nZTogeyBtaW5EYXRlOiBzdHJpbmc7IG1pbk9mZnNldDogbnVtYmVyIH0pOiBEYXRlIHtcbiAgICBpZiAoZGF0ZVJhbmdlLm1pbkRhdGUpIHtcbiAgICAgIHJldHVybiBkYXRlRm5zLnBhcnNlKGRhdGVSYW5nZS5taW5EYXRlKTtcbiAgICB9IGVsc2UgaWYgKGRhdGVSYW5nZS5taW5PZmZzZXQpIHtcbiAgICAgIHJldHVybiBkYXRlRm5zLmFkZERheXMoZGF0ZUZucy5zdGFydE9mVG9kYXkoKSwgZGF0ZVJhbmdlLm1pbk9mZnNldCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWluIHN0YXJ0IGRhdGUgb2YgYSBEYXRlIGJhc2Ugb24gZmllbGQgZGF0YS5cbiAgICovXG4gIHByaXZhdGUgZ2V0U3RhcnREYXRlKGZpZWxkOiBhbnkpOiBEYXRlIHwgbnVsbCB7XG4gICAgaWYgKGZpZWxkLmFsbG93ZWREYXRlUmFuZ2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXJ0RGF0ZUZyb21SYW5nZShmaWVsZC5hbGxvd2VkRGF0ZVJhbmdlKTtcbiAgICB9XG4gICAgLy8gdGhlcmUgaXMgbm8gcmVzdHJpY3Rpb24gb24gdGhlIHN0YXJ0IGRhdGVcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaW5mZXJTdGFydERhdGUoY29udHJvbENvbmZpZywgZmllbGQpIHtcbiAgICBpZiAoZmllbGQuZGF0YVR5cGUgPT09ICdEYXRlJykge1xuICAgICAgY29uc3Qgc3RhcnREYXRlID0gdGhpcy5nZXRTdGFydERhdGUoZmllbGQpO1xuICAgICAgaWYgKHN0YXJ0RGF0ZSkge1xuICAgICAgICBjb250cm9sQ29uZmlnLnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGFydERhdGU7XG4gICAgfVxuICB9XG59XG4iXX0=