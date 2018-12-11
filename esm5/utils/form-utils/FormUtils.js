/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
     * @return {?}
     */
    FormUtils.prototype.getControlForField = /**
     * @param {?} field
     * @param {?} http
     * @param {?} config
     * @param {?=} overrides
     * @param {?=} forTable
     * @return {?}
     */
    function (field, http, config, overrides, forTable) {
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
            warning: field.warning,
            config: field.config || {},
            closeOnSelect: field.closeOnSelect,
        };
        // TODO: getControlOptions should always return the correct format
        /** @type {?} */
        var optionsConfig = this.getControlOptions(field, http, config);
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
                                if (subfield.name === 'state') {
                                    subfield.optionsType = 'State';
                                }
                                else if (subfield.name === 'countryID') {
                                    subfield.optionsType = 'Country';
                                }
                                if (!subfield.optionsUrl) {
                                    subfield.optionsUrl = "options/" + subfield.optionsType;
                                }
                                controlConfig.config[subfield.name].pickerConfig = this.getControlOptions(subfield, http, config);
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
     * @return {?}
     */
    FormUtils.prototype.toFieldSets = /**
     * @param {?} meta
     * @param {?} currencyFormat
     * @param {?} http
     * @param {?} config
     * @param {?=} overrides
     * @return {?}
     */
    function (meta, currencyFormat, http, config, overrides) {
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
                    var control = _this.getControlForField(field, http, config, overrides);
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
     * @return {?}
     */
    FormUtils.prototype.getControlOptions = /**
     * @param {?} field
     * @param {?} http
     * @param {?} config
     * @return {?}
     */
    function (field, http, config) {
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
    FormUtils.prototype.PICKER_TEST_LIST;
    /** @type {?} */
    FormUtils.prototype.labels;
    /** @type {?} */
    FormUtils.prototype.optionsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybVV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL2Zvcm0tdXRpbHMvRm9ybVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUczQyxPQUFPLEVBQ0wsY0FBYyxFQUVkLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLFdBQVcsRUFDWCxlQUFlLEVBQ2YsYUFBYSxFQUNiLFdBQVcsRUFFWCxhQUFhLEVBQ2IsWUFBWSxFQUNaLGFBQWEsRUFDYixlQUFlLEVBQ2YsY0FBYyxFQUNkLFlBQVksRUFDWixXQUFXLEdBQ1osTUFBTSxrQ0FBa0MsQ0FBQztBQUMxQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUNqSSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXJDLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRXpFO0lBeUJFLG1CQUFtQixNQUF3QixFQUFTLGNBQThCO1FBQS9ELFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBdkJsRiwyQkFBc0IsR0FBYTtZQUNqQyxXQUFXO1lBQ1gsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixNQUFNO1lBQ04sYUFBYTtZQUNiLFVBQVU7WUFDVixlQUFlO1lBQ2YsUUFBUTtZQUNSLFdBQVc7U0FDWixDQUFDO1FBQ0YscUJBQWdCLEdBQWE7WUFDM0IsZUFBZTtZQUNmLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsdUJBQXVCO1lBQ3ZCLFVBQVU7WUFD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T0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO3dCQUMzQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZO3dCQUNqQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsY0FBYzt3QkFDaEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUM5RCxFQUNEO29CQUNBLEtBQUssR0FBRyxLQUFLLENBQUM7aUJBQ2Y7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkFybkJGLFVBQVU7Ozs7Z0JBSEYsZ0JBQWdCO2dCQUNoQixjQUFjOztJQXduQnZCLGdCQUFDO0NBQUEsQUF0bkJELElBc25CQztTQXJuQlksU0FBUzs7O0lBQ3BCLDJDQVVFOztJQUNGLHFDQVVFOztJQUVVLDJCQUErQjs7SUFBRSxtQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIFZlbmRvclxuLy8gQVBQXG5pbXBvcnQge1xuICBBZGRyZXNzQ29udHJvbCxcbiAgQmFzZUNvbnRyb2wsXG4gIENoZWNrYm94Q29udHJvbCxcbiAgQ2hlY2tMaXN0Q29udHJvbCxcbiAgQ3VzdG9tQ29udHJvbCxcbiAgRGF0ZUNvbnRyb2wsXG4gIERhdGVUaW1lQ29udHJvbCxcbiAgRWRpdG9yQ29udHJvbCxcbiAgRmlsZUNvbnRyb2wsXG4gIE5vdm9Db250cm9sQ29uZmlnLFxuICBQaWNrZXJDb250cm9sLFxuICBSYWRpb0NvbnRyb2wsXG4gIFNlbGVjdENvbnRyb2wsXG4gIFRleHRBcmVhQ29udHJvbCxcbiAgVGV4dEJveENvbnRyb2wsXG4gIFRpbGVzQ29udHJvbCxcbiAgVGltZUNvbnRyb2wsXG59IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0vRm9ybUNvbnRyb2xzJztcbmltcG9ydCB7IEVudGl0eVBpY2tlclJlc3VsdCwgRW50aXR5UGlja2VyUmVzdWx0cyB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL3BpY2tlci9leHRyYXMvZW50aXR5LXBpY2tlci1yZXN1bHRzL0VudGl0eVBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0ZpZWxkc2V0IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybS9Gb3JtSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOb3ZvRm9ybUNvbnRyb2wsIE5vdm9Gb3JtR3JvdXAgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9mb3JtL05vdm9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9vcHRpb25zL09wdGlvbnNTZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1VdGlscyB7XG4gIEFTU09DSUFURURfRU5USVRZX0xJU1Q6IHN0cmluZ1tdID0gW1xuICAgICdDYW5kaWRhdGUnLFxuICAgICdDbGllbnRDb250YWN0JyxcbiAgICAnQ2xpZW50Q29ycG9yYXRpb24nLFxuICAgICdMZWFkJyxcbiAgICAnT3Bwb3J0dW5pdHknLFxuICAgICdKb2JPcmRlcicsXG4gICAgJ0NvcnBvcmF0ZVVzZXInLFxuICAgICdQZXJzb24nLFxuICAgICdQbGFjZW1lbnQnLFxuICBdO1xuICBQSUNLRVJfVEVTVF9MSVNUOiBzdHJpbmdbXSA9IFtcbiAgICAnQ2FuZGlkYXRlVGV4dCcsXG4gICAgJ0NsaWVudFRleHQnLFxuICAgICdDbGllbnRDb250YWN0VGV4dCcsXG4gICAgJ0NsaWVudENvcnBvcmF0aW9uVGV4dCcsXG4gICAgJ0xlYWRUZXh0JyxcbiAgICAnT3Bwb3J0dW5pdHlUZXh0JyxcbiAgICAnSm9iT3JkZXJUZXh0JyxcbiAgICAnQ29ycG9yYXRlVXNlclRleHQnLFxuICAgICdQZXJzb25UZXh0JyxcbiAgXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwdWJsaWMgb3B0aW9uc1NlcnZpY2U6IE9wdGlvbnNTZXJ2aWNlKSB7fVxuXG4gIHRvRm9ybUdyb3VwKGNvbnRyb2xzOiBBcnJheTxhbnk+KTogTm92b0Zvcm1Hcm91cCB7XG4gICAgbGV0IGdyb3VwOiBhbnkgPSB7fTtcbiAgICBjb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZSkgPyAnJyA6IGNvbnRyb2wudmFsdWU7XG4gICAgICBncm91cFtjb250cm9sLmtleV0gPSBuZXcgTm92b0Zvcm1Db250cm9sKHZhbHVlLCBjb250cm9sKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IE5vdm9Gb3JtR3JvdXAoZ3JvdXApO1xuICB9XG5cbiAgZW1wdHlGb3JtR3JvdXAoKTogTm92b0Zvcm1Hcm91cCB7XG4gICAgcmV0dXJuIG5ldyBOb3ZvRm9ybUdyb3VwKHt9KTtcbiAgfVxuXG4gIGFkZENvbnRyb2xzKGZvcm1Hcm91cDogTm92b0Zvcm1Hcm91cCwgY29udHJvbHM6IEFycmF5PE5vdm9Db250cm9sQ29uZmlnPik6IHZvaWQge1xuICAgIGNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IEhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlKSA/ICcnIDogY29udHJvbC52YWx1ZTtcbiAgICAgIGxldCBmb3JtQ29udHJvbCA9IG5ldyBOb3ZvRm9ybUNvbnRyb2wodmFsdWUsIGNvbnRyb2wpO1xuICAgICAgZm9ybUdyb3VwLmFkZENvbnRyb2woY29udHJvbC5rZXksIGZvcm1Db250cm9sKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSB0b0Zvcm1Hcm91cEZyb21GaWVsZHNldFxuICAgKiBAcGFyYW0gZmllbGRzZXRzXG4gICAqL1xuICB0b0Zvcm1Hcm91cEZyb21GaWVsZHNldChmaWVsZHNldHM6IEFycmF5PE5vdm9GaWVsZHNldD4pOiBOb3ZvRm9ybUdyb3VwIHtcbiAgICBsZXQgY29udHJvbHM6IEFycmF5PE5vdm9Gb3JtQ29udHJvbD4gPSBbXTtcbiAgICBmaWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIGNvbnRyb2xzLnB1c2goLi4uZmllbGRzZXQuY29udHJvbHMpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnRvRm9ybUdyb3VwKGNvbnRyb2xzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBkZXRlcm1pbmVJbnB1dFR5cGVcbiAgICogQHBhcmFtIGZpZWxkXG4gICAqL1xuICBkZXRlcm1pbmVJbnB1dFR5cGUoZmllbGQ6IHtcbiAgICBkYXRhU3BlY2lhbGl6YXRpb246IHN0cmluZztcbiAgICBpbnB1dFR5cGU6IHN0cmluZztcbiAgICBvcHRpb25zOiBzdHJpbmc7XG4gICAgbXVsdGlWYWx1ZTogYm9vbGVhbjtcbiAgICBkYXRhVHlwZTogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBhc3NvY2lhdGVkRW50aXR5PzogYW55O1xuICAgIG9wdGlvbnNVcmw/OiBzdHJpbmc7XG4gICAgb3B0aW9uc1R5cGU/OiBzdHJpbmc7XG4gIH0pOiBzdHJpbmcge1xuICAgIGxldCB0eXBlOiBzdHJpbmc7XG4gICAgbGV0IGRhdGFTcGVjaWFsaXphdGlvblR5cGVNYXAgPSB7XG4gICAgICBEQVRFVElNRTogJ2RhdGV0aW1lJyxcbiAgICAgIFRJTUU6ICd0aW1lJyxcbiAgICAgIE1PTkVZOiAnY3VycmVuY3knLFxuICAgICAgUEVSQ0VOVEFHRTogJ3BlcmNlbnRhZ2UnLFxuICAgICAgSFRNTDogJ2VkaXRvcicsXG4gICAgICAnSFRNTC1NSU5JTUFMJzogJ2VkaXRvci1taW5pbWFsJyxcbiAgICAgIFlFQVI6ICd5ZWFyJyxcbiAgICB9O1xuICAgIGxldCBkYXRhVHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIFRpbWVzdGFtcDogJ2RhdGUnLFxuICAgICAgRGF0ZTogJ2RhdGUnLFxuICAgICAgQm9vbGVhbjogJ3RpbGVzJyxcbiAgICB9O1xuICAgIGxldCBpbnB1dFR5cGVUb1R5cGVNYXAgPSB7XG4gICAgICBDSEVDS0JPWDogJ3JhZGlvJyxcbiAgICAgIFJBRElPOiAncmFkaW8nLFxuICAgICAgU0VMRUNUOiAnc2VsZWN0JyxcbiAgICAgIFRJTEVTOiAndGlsZXMnLFxuICAgIH07XG4gICAgbGV0IGlucHV0VHlwZU11bHRpVG9UeXBlTWFwID0ge1xuICAgICAgQ0hFQ0tCT1g6ICdjaGVja2xpc3QnLFxuICAgICAgUkFESU86ICdjaGVja2xpc3QnLFxuICAgICAgU0VMRUNUOiAnY2hpcHMnLFxuICAgIH07XG4gICAgbGV0IHR5cGVUb1R5cGVNYXAgPSB7XG4gICAgICBmaWxlOiAnZmlsZScsXG4gICAgICBDT01QT1NJVEU6ICdhZGRyZXNzJyxcbiAgICB9O1xuICAgIGxldCBudW1iZXJEYXRhVHlwZVRvVHlwZU1hcCA9IHtcbiAgICAgIERvdWJsZTogJ2Zsb2F0JyxcbiAgICAgIEJpZ0RlY2ltYWw6ICdmbG9hdCcsXG4gICAgICBJbnRlZ2VyOiAnbnVtYmVyJyxcbiAgICB9O1xuICAgIGlmIChmaWVsZC50eXBlID09PSAnVE9fTUFOWScpIHtcbiAgICAgIGlmIChmaWVsZC5hc3NvY2lhdGVkRW50aXR5ICYmIH50aGlzLkFTU09DSUFURURfRU5USVRZX0xJU1QuaW5kZXhPZihmaWVsZC5hc3NvY2lhdGVkRW50aXR5LmVudGl0eSkpIHtcbiAgICAgICAgdHlwZSA9ICdlbnRpdHljaGlwcyc7IC8vIFRPRE8hXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlID0gJ2NoaXBzJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdUT19PTkUnKSB7XG4gICAgICBpZiAoZmllbGQuYXNzb2NpYXRlZEVudGl0eSAmJiB+dGhpcy5BU1NPQ0lBVEVEX0VOVElUWV9MSVNULmluZGV4T2YoZmllbGQuYXNzb2NpYXRlZEVudGl0eS5lbnRpdHkpKSB7XG4gICAgICAgIHR5cGUgPSAnZW50aXR5cGlja2VyJzsgLy8gVE9ETyFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGUgPSAncGlja2VyJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZpZWxkLm9wdGlvbnNVcmwgJiYgZmllbGQuaW5wdXRUeXBlID09PSAnU0VMRUNUJykge1xuICAgICAgaWYgKGZpZWxkLm9wdGlvbnNUeXBlICYmIH50aGlzLlBJQ0tFUl9URVNUX0xJU1QuaW5kZXhPZihmaWVsZC5vcHRpb25zVHlwZSkpIHtcbiAgICAgICAgdHlwZSA9ICdlbnRpdHlwaWNrZXInOyAvLyBUT0RPIVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9ICdwaWNrZXInO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXMoZGF0YVNwZWNpYWxpemF0aW9uVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24pID4gLTEpIHtcbiAgICAgIHR5cGUgPSBkYXRhU3BlY2lhbGl6YXRpb25UeXBlTWFwW2ZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbl07XG4gICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhkYXRhVHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5kYXRhVHlwZSkgPiAtMSkge1xuICAgICAgdHlwZSA9IGRhdGFUeXBlVG9UeXBlTWFwW2ZpZWxkLmRhdGFUeXBlXTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLmlucHV0VHlwZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgdHlwZSA9ICd0ZXh0YXJlYSc7XG4gICAgfSBlbHNlIGlmIChmaWVsZC5vcHRpb25zICYmIE9iamVjdC5rZXlzKGlucHV0VHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC5pbnB1dFR5cGUpID4gLTEgJiYgIWZpZWxkLm11bHRpVmFsdWUpIHtcbiAgICAgIHR5cGUgPSBpbnB1dFR5cGVUb1R5cGVNYXBbZmllbGQuaW5wdXRUeXBlXTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLm9wdGlvbnMgJiYgT2JqZWN0LmtleXMoaW5wdXRUeXBlTXVsdGlUb1R5cGVNYXApLmluZGV4T2YoZmllbGQuaW5wdXRUeXBlKSA+IC0xICYmIGZpZWxkLm11bHRpVmFsdWUpIHtcbiAgICAgIHR5cGUgPSBpbnB1dFR5cGVNdWx0aVRvVHlwZU1hcFtmaWVsZC5pbnB1dFR5cGVdO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXModHlwZVRvVHlwZU1hcCkuaW5kZXhPZihmaWVsZC50eXBlKSA+IC0xKSB7XG4gICAgICB0eXBlID0gdHlwZVRvVHlwZU1hcFtmaWVsZC50eXBlXTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKG51bWJlckRhdGFUeXBlVG9UeXBlTWFwKS5pbmRleE9mKGZpZWxkLmRhdGFUeXBlKSA+IC0xKSB7XG4gICAgICB0eXBlID0gbnVtYmVyRGF0YVR5cGVUb1R5cGVNYXBbZmllbGQuZGF0YVR5cGVdO1xuICAgIH0gLyogZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm1VdGlsczogVGhpcyBmaWVsZCB0eXBlIGlzIHVuc3VwcG9ydGVkLicpO1xuICAgICAgICB9Ki9cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGlzRmllbGRFbmNyeXB0ZWQoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4ga2V5LmluZGV4T2YoJ2N1c3RvbUVuY3J5cHRlZCcpID4gLTE7XG4gIH1cblxuICBnZXRDb250cm9sRm9yRmllbGQoXG4gICAgZmllbGQ6IGFueSxcbiAgICBodHRwLFxuICAgIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuIH0sXG4gICAgb3ZlcnJpZGVzPzogYW55LFxuICAgIGZvclRhYmxlOiBib29sZWFuID0gZmFsc2UsXG4gICkge1xuICAgIC8vIFRPRE86IGlmIGZpZWxkLnR5cGUgb3ZlcnJpZGVzIGBkZXRlcm1pbmVJbnB1dFR5cGVgIHdlIHNob3VsZCB1c2UgaXQgaW4gdGhhdCBtZXRob2Qgb3IgdXNlIHRoaXMgbWV0aG9kXG4gICAgLy8gVE9ETzogKGNvbnQuKSBhcyB0aGUgc2V0dGVyIG9mIHRoZSBmaWVsZCBhcmd1bWVudFxuICAgIGxldCB0eXBlOiBzdHJpbmcgPSB0aGlzLmRldGVybWluZUlucHV0VHlwZShmaWVsZCkgfHwgZmllbGQudHlwZTtcbiAgICBsZXQgY29udHJvbDogYW55O1xuICAgIGxldCBjb250cm9sQ29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZyA9IHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBrZXk6IGZpZWxkLm5hbWUsXG4gICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICBwbGFjZWhvbGRlcjogZmllbGQuaGludCB8fCAnJyxcbiAgICAgIHJlcXVpcmVkOiBmaWVsZC5yZXF1aXJlZCxcbiAgICAgIGhpZGRlbjogIWZpZWxkLnJlcXVpcmVkLFxuICAgICAgZW5jcnlwdGVkOiB0aGlzLmlzRmllbGRFbmNyeXB0ZWQoZmllbGQubmFtZSA/IGZpZWxkLm5hbWUudG9TdHJpbmcoKSA6ICcnKSxcbiAgICAgIHZhbHVlOiBmaWVsZC52YWx1ZSB8fCBmaWVsZC5kZWZhdWx0VmFsdWUsXG4gICAgICBzb3J0T3JkZXI6IGZpZWxkLnNvcnRPcmRlcixcbiAgICAgIGFzc29jaWF0ZWRFbnRpdHk6IGZpZWxkLmFzc29jaWF0ZWRFbnRpdHksXG4gICAgICBvcHRpb25zVHlwZTogZmllbGQub3B0aW9uc1R5cGUsXG4gICAgICBtdWx0aXBsZTogZmllbGQubXVsdGlWYWx1ZSxcbiAgICAgIHJlYWRPbmx5OiAhIWZpZWxkLmRpc2FibGVkIHx8ICEhZmllbGQucmVhZE9ubHksXG4gICAgICBtYXhsZW5ndGg6IGZpZWxkLm1heExlbmd0aCxcbiAgICAgIGludGVyYWN0aW9uczogZmllbGQuaW50ZXJhY3Rpb25zLFxuICAgICAgZGF0YVNwZWNpYWxpemF0aW9uOiBmaWVsZC5kYXRhU3BlY2lhbGl6YXRpb24sXG4gICAgICBkYXRhVHlwZTogZmllbGQuZGF0YVR5cGUsXG4gICAgICBkZXNjcmlwdGlvbjogZmllbGQuZGVzY3JpcHRpb24gfHwgJycsXG4gICAgICB0b29sdGlwOiBmaWVsZC50b29sdGlwLFxuICAgICAgdG9vbHRpcFBvc2l0aW9uOiBmaWVsZC50b29sdGlwUG9zaXRpb24sXG4gICAgICBjdXN0b21Db250cm9sOiBmaWVsZC5jdXN0b21Db250cm9sLFxuICAgICAgdGVtcGxhdGU6IGZpZWxkLnRlbXBsYXRlLFxuICAgICAgY3VzdG9tQ29udHJvbENvbmZpZzogZmllbGQuY3VzdG9tQ29udHJvbENvbmZpZyxcbiAgICAgIHJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnM6IGZpZWxkLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMsXG4gICAgICB2YWxpZGF0b3JzOiBmaWVsZC52YWxpZGF0b3JzLFxuICAgICAgd2FybmluZzogZmllbGQud2FybmluZyxcbiAgICAgIGNvbmZpZzogZmllbGQuY29uZmlnIHx8IHt9LFxuICAgICAgY2xvc2VPblNlbGVjdDogZmllbGQuY2xvc2VPblNlbGVjdCxcbiAgICB9O1xuICAgIC8vIFRPRE86IGdldENvbnRyb2xPcHRpb25zIHNob3VsZCBhbHdheXMgcmV0dXJuIHRoZSBjb3JyZWN0IGZvcm1hdFxuICAgIGxldCBvcHRpb25zQ29uZmlnID0gdGhpcy5nZXRDb250cm9sT3B0aW9ucyhmaWVsZCwgaHR0cCwgY29uZmlnKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zQ29uZmlnKSAmJiAhKHR5cGUgPT09ICdjaGlwcycgfHwgdHlwZSA9PT0gJ3BpY2tlcicpKSB7XG4gICAgICBjb250cm9sQ29uZmlnLm9wdGlvbnMgPSBvcHRpb25zQ29uZmlnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zQ29uZmlnKSAmJiAodHlwZSA9PT0gJ2NoaXBzJyB8fCB0eXBlID09PSAncGlja2VyJykpIHtcbiAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnID0ge1xuICAgICAgICBvcHRpb25zOiBvcHRpb25zQ29uZmlnLFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnNDb25maWcpIHtcbiAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnID0gb3B0aW9uc0NvbmZpZztcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ3llYXInKSB7XG4gICAgICBjb250cm9sQ29uZmlnLm1heGxlbmd0aCA9IDQ7XG4gICAgfVxuICAgIC8vIFRPRE86IE92ZXJyaWRlcyBzaG91bGQgYmUgYW4gaXRlcmFibGUgb2YgYWxsIHByb3BlcnRpZXMgKHBvdGVudGlhbGx5IGEgcHJpdmF0ZSBtZXRob2QpXG4gICAgbGV0IG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlO1xuICAgIGxldCBvdmVycmlkZVByZXZpZXdUZW1wbGF0ZTtcbiAgICBpZiAob3ZlcnJpZGVzICYmIG92ZXJyaWRlc1tmaWVsZC5uYW1lXSkge1xuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5yZXN1bHRzVGVtcGxhdGUpIHtcbiAgICAgICAgb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGUgPSBvdmVycmlkZXNbZmllbGQubmFtZV0ucmVzdWx0c1RlbXBsYXRlO1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5yZXN1bHRzVGVtcGxhdGUgPSBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZTtcbiAgICAgICAgZGVsZXRlIG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5yZXN1bHRzVGVtcGxhdGU7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLm92ZXJyaWRlUHJldmlld1RlbXBsYXRlKSB7XG4gICAgICAgIG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLm92ZXJyaWRlUHJldmlld1RlbXBsYXRlO1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5vdmVycmlkZVByZXZpZXdUZW1wbGF0ZSA9IG92ZXJyaWRlUmVzdWx0c1RlbXBsYXRlO1xuICAgICAgICBkZWxldGUgb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLm92ZXJyaWRlUHJldmlld1RlbXBsYXRlO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5waWNrZXJDYWxsYmFjaykge1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5jYWxsYmFjayA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5waWNrZXJDYWxsYmFjaztcbiAgICAgIH1cbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0udHlwZSkge1xuICAgICAgICB0eXBlID0gb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLnR5cGU7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcnJpZGVzW2ZpZWxkLm5hbWVdLmNvbHVtbnMpIHtcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcuY29sdW1ucyA9IG92ZXJyaWRlc1tmaWVsZC5uYW1lXS5jb2x1bW5zO1xuICAgICAgICBjb250cm9sQ29uZmlnLmNsb3NlT25TZWxlY3QgPSB0cnVlO1xuICAgICAgICBkZWxldGUgY29udHJvbENvbmZpZy5sYWJlbDtcbiAgICAgIH1cbiAgICAgIGlmIChvdmVycmlkZXNbZmllbGQubmFtZV0ud2FybmluZykge1xuICAgICAgICBjb250cm9sQ29uZmlnLndhcm5pbmcgPSBvdmVycmlkZXNbZmllbGQubmFtZV0ud2FybmluZztcbiAgICAgIH1cbiAgICAgIE9iamVjdC5hc3NpZ24oY29udHJvbENvbmZpZywgb3ZlcnJpZGVzW2ZpZWxkLm5hbWVdKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2VudGl0eWNoaXBzJzpcbiAgICAgICAgLy8gVE9ETzogVGhpcyBkb2Vzbid0IGJlbG9uZyBpbiB0aGlzIGNvZGViYXNlXG4gICAgICAgIGNvbnRyb2xDb25maWcubXVsdGlwbGUgPSB0cnVlO1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5yZXN1bHRzVGVtcGxhdGUgPSBvdmVycmlkZVJlc3VsdHNUZW1wbGF0ZSB8fCBFbnRpdHlQaWNrZXJSZXN1bHRzO1xuICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZy5wcmV2aWV3VGVtcGxhdGUgPSBvdmVycmlkZVByZXZpZXdUZW1wbGF0ZSB8fCBFbnRpdHlQaWNrZXJSZXN1bHQ7XG4gICAgICAgIC8vIFRPRE86IFdoZW4gYXBwZW5kVG9Cb2R5IHBpY2tlciB3b3JrcyBiZXR0ZXIgaW4gdGFibGUvZm9ybVxuICAgICAgICBjb250cm9sID0gbmV3IFBpY2tlckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hpcHMnOlxuICAgICAgICBjb250cm9sQ29uZmlnLm11bHRpcGxlID0gdHJ1ZTtcbiAgICAgICAgLy8gVE9ETzogV2hlbiBhcHBlbmRUb0JvZHkgcGlja2VyIHdvcmtzIGJldHRlciBpbiB0YWJsZS9mb3JtXG4gICAgICAgIGNvbnRyb2wgPSBuZXcgUGlja2VyQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlbnRpdHlwaWNrZXInOlxuICAgICAgICAvLyBUT0RPOiBUaGlzIGRvZXNuJ3QgYmVsb25nIGluIHRoaXMgY29kZWJhc2VcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcucmVzdWx0c1RlbXBsYXRlID0gb3ZlcnJpZGVSZXN1bHRzVGVtcGxhdGUgfHwgRW50aXR5UGlja2VyUmVzdWx0cztcbiAgICAgICAgLy8gVE9ETzogV2hlbiBhcHBlbmRUb0JvZHkgcGlja2VyIHdvcmtzIGJldHRlciBpbiB0YWJsZS9mb3JtXG4gICAgICAgIGNvbnRyb2wgPSBuZXcgUGlja2VyQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwaWNrZXInOlxuICAgICAgICAvLyBUT0RPOiBXaGVuIGFwcGVuZFRvQm9keSBwaWNrZXIgd29ya3MgYmV0dGVyIGluIHRhYmxlL2Zvcm1cbiAgICAgICAgY29udHJvbCA9IG5ldyBQaWNrZXJDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RhdGV0aW1lJzpcbiAgICAgICAgY29udHJvbENvbmZpZy5taWxpdGFyeSA9IGNvbmZpZyA/ICEhY29uZmlnLm1pbGl0YXJ5IDogZmFsc2U7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgRGF0ZVRpbWVDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICBjb250cm9sQ29uZmlnLmRhdGVGb3JtYXQgPSBmaWVsZC5kYXRlRm9ybWF0O1xuICAgICAgICBjb250cm9sQ29uZmlnLnRleHRNYXNrRW5hYmxlZCA9IGZpZWxkLnRleHRNYXNrRW5hYmxlZDtcbiAgICAgICAgY29udHJvbENvbmZpZy5hbGxvd0ludmFsaWREYXRlID0gZmllbGQuYWxsb3dJbnZhbGlkRGF0ZTtcbiAgICAgICAgY29udHJvbENvbmZpZy5taWxpdGFyeSA9IGNvbmZpZyA/ICEhY29uZmlnLm1pbGl0YXJ5IDogZmFsc2U7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgRGF0ZUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgIGNvbnRyb2xDb25maWcubWlsaXRhcnkgPSBjb25maWcgPyAhIWNvbmZpZy5taWxpdGFyeSA6IGZhbHNlO1xuICAgICAgICBjb250cm9sID0gbmV3IFRpbWVDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgIGNhc2UgJ21vbmV5JzpcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgIGNhc2UgJ3BlcmNlbnRhZ2UnOlxuICAgICAgY2FzZSAnZmxvYXQnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAvLyBUT0RPOiBPbmx5IHR5cGVzIGZyb20gYGRldGVybWluZUlucHV0VHlwZWAgc2hvdWxkIGJlIHVzZWQgaW4gdGhpcyBjbGFzc1xuICAgICAgICBpZiAodHlwZSA9PT0gJ21vbmV5Jykge1xuICAgICAgICAgIHR5cGUgPSAnY3VycmVuY3knO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xDb25maWcudHlwZSA9IHR5cGU7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGV4dEJveENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGV4dEJveENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICBjb250cm9sID0gbmV3IFRleHRBcmVhQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlZGl0b3InOlxuICAgICAgICBjb250cm9sID0gbmV3IEVkaXRvckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdG9yLW1pbmltYWwnOlxuICAgICAgICBjb250cm9sID0gbmV3IEVkaXRvckNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGNvbnRyb2wubWluaW1hbCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGlsZXMnOlxuICAgICAgICBjb250cm9sID0gbmV3IFRpbGVzQ29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIGNvbnRyb2xDb25maWcuY2hlY2tib3hMYWJlbCA9IGZpZWxkLmNoZWNrYm94TGFiZWw7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgQ2hlY2tib3hDb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoZWNrbGlzdCc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgQ2hlY2tMaXN0Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgUmFkaW9Db250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgU2VsZWN0Q29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhZGRyZXNzJzpcbiAgICAgICAgY29udHJvbENvbmZpZy5yZXF1aXJlZCA9IGZpZWxkLnJlcXVpcmVkIHx8IGZhbHNlO1xuICAgICAgICBpZiAoSGVscGVycy5pc0JsYW5rKGNvbnRyb2xDb25maWcuY29uZmlnKSkge1xuICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnID0ge307XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcucmVxdWlyZWQgPSBmaWVsZC5yZXF1aXJlZDtcbiAgICAgICAgY29udHJvbENvbmZpZy5jb25maWcucmVhZE9ubHkgPSBjb250cm9sQ29uZmlnLnJlYWRPbmx5O1xuICAgICAgICBpZiAoZmllbGQuZmllbGRzICYmIGZpZWxkLmZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgICBmb3IgKGxldCBzdWJmaWVsZCBvZiBmaWVsZC5maWVsZHMpIHtcbiAgICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnW3N1YmZpZWxkLm5hbWVdID0ge1xuICAgICAgICAgICAgICByZXF1aXJlZDogISFzdWJmaWVsZC5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgaGlkZGVuOiAhIXN1YmZpZWxkLnJlYWRPbmx5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghSGVscGVycy5pc0VtcHR5KHN1YmZpZWxkLmxhYmVsKSkge1xuICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZ1tzdWJmaWVsZC5uYW1lXS5sYWJlbCA9IHN1YmZpZWxkLmxhYmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkoc3ViZmllbGQubWF4TGVuZ3RoKSkge1xuICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLmNvbmZpZ1tzdWJmaWVsZC5uYW1lXS5tYXhsZW5ndGggPSBzdWJmaWVsZC5tYXhMZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250cm9sQ29uZmlnLnJlcXVpcmVkID0gY29udHJvbENvbmZpZy5yZXF1aXJlZCB8fCBzdWJmaWVsZC5yZXF1aXJlZDtcbiAgICAgICAgICAgIGlmIChzdWJmaWVsZC5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYgKEhlbHBlcnMuaXNCbGFuayhjb250cm9sQ29uZmlnLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xDb25maWcudmFsdWUgPSB7fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250cm9sQ29uZmlnLnZhbHVlW3N1YmZpZWxkLm5hbWVdID0gc3ViZmllbGQuZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdWJmaWVsZC5uYW1lID09PSAnY291bnRyeUlEJykge1xuICAgICAgICAgICAgICBpZiAoSGVscGVycy5pc0JsYW5rKGNvbnRyb2xDb25maWcudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbENvbmZpZy52YWx1ZSA9IHt9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcudmFsdWVbc3ViZmllbGQubmFtZV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1YmZpZWxkLm5hbWUgPT09ICdzdGF0ZScgfHwgc3ViZmllbGQubmFtZSA9PT0gJ2NvdW50cnlJRCcpIHtcbiAgICAgICAgICAgICAgaWYgKHN1YmZpZWxkLm5hbWUgPT09ICdzdGF0ZScpIHtcbiAgICAgICAgICAgICAgICBzdWJmaWVsZC5vcHRpb25zVHlwZSA9ICdTdGF0ZSc7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3ViZmllbGQubmFtZSA9PT0gJ2NvdW50cnlJRCcpIHtcbiAgICAgICAgICAgICAgICBzdWJmaWVsZC5vcHRpb25zVHlwZSA9ICdDb3VudHJ5JztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIXN1YmZpZWxkLm9wdGlvbnNVcmwpIHtcbiAgICAgICAgICAgICAgICBzdWJmaWVsZC5vcHRpb25zVXJsID0gYG9wdGlvbnMvJHtzdWJmaWVsZC5vcHRpb25zVHlwZX1gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRyb2xDb25maWcuY29uZmlnW3N1YmZpZWxkLm5hbWVdLnBpY2tlckNvbmZpZyA9IHRoaXMuZ2V0Q29udHJvbE9wdGlvbnMoc3ViZmllbGQsIGh0dHAsIGNvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xDb25maWcuaXNFbXB0eSA9IHRoaXMuaXNBZGRyZXNzRW1wdHk7XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgQWRkcmVzc0NvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgRmlsZUNvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY3VzdG9tJzpcbiAgICAgICAgY29udHJvbCA9IG5ldyBDdXN0b21Db250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnRyb2wgPSBuZXcgVGV4dEJveENvbnRyb2woY29udHJvbENvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gY29udHJvbDtcbiAgfVxuXG4gIHRvQ29udHJvbHMoXG4gICAgbWV0YSxcbiAgICBjdXJyZW5jeUZvcm1hdCxcbiAgICBodHRwLFxuICAgIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuIH0sXG4gICAgb3ZlcnJpZGVzPzogYW55LFxuICAgIGZvclRhYmxlOiBib29sZWFuID0gZmFsc2UsXG4gICkge1xuICAgIGxldCBjb250cm9scyA9IFtdO1xuICAgIGlmIChtZXRhICYmIG1ldGEuZmllbGRzKSB7XG4gICAgICBsZXQgZmllbGRzID0gbWV0YS5maWVsZHM7XG4gICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGZpZWxkLm5hbWUgIT09ICdpZCcgJiZcbiAgICAgICAgICAoZmllbGQuZGF0YVNwZWNpYWxpemF0aW9uICE9PSAnU1lTVEVNJyB8fCBbJ2FkZHJlc3MnLCAnYmlsbGluZ0FkZHJlc3MnLCAnc2Vjb25kYXJ5QWRkcmVzcyddLmluZGV4T2YoZmllbGQubmFtZSkgIT09IC0xKSAmJlxuICAgICAgICAgICFmaWVsZC5yZWFkT25seVxuICAgICAgICApIHtcbiAgICAgICAgICBsZXQgY29udHJvbCA9IHRoaXMuZ2V0Q29udHJvbEZvckZpZWxkKGZpZWxkLCBodHRwLCBjb25maWcsIG92ZXJyaWRlcywgZm9yVGFibGUpO1xuICAgICAgICAgIC8vIFNldCBjdXJyZW5jeSBmb3JtYXRcbiAgICAgICAgICBpZiAoY29udHJvbC5zdWJUeXBlID09PSAnY3VycmVuY3knKSB7XG4gICAgICAgICAgICBjb250cm9sLmN1cnJlbmN5Rm9ybWF0ID0gY3VycmVuY3lGb3JtYXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEFkZCB0byBjb250cm9sc1xuICAgICAgICAgIGNvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY29udHJvbHM7XG4gIH1cblxuICB0b1RhYmxlQ29udHJvbHMobWV0YSwgY3VycmVuY3lGb3JtYXQsIGh0dHAsIGNvbmZpZzogeyB0b2tlbj86IHN0cmluZzsgcmVzdFVybD86IHN0cmluZzsgbWlsaXRhcnk/OiBib29sZWFuIH0sIG92ZXJyaWRlcz86IGFueSkge1xuICAgIGxldCBjb250cm9scyA9IHRoaXMudG9Db250cm9scyhtZXRhLCBjdXJyZW5jeUZvcm1hdCwgaHR0cCwgY29uZmlnLCBvdmVycmlkZXMsIHRydWUpO1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBjb250cm9scy5mb3JFYWNoKChjb250cm9sOiBCYXNlQ29udHJvbCkgPT4ge1xuICAgICAgcmV0W2NvbnRyb2wua2V5XSA9IHtcbiAgICAgICAgZWRpdG9yVHlwZTogY29udHJvbC5fX3R5cGUsXG4gICAgICAgIGVkaXRvckNvbmZpZzogY29udHJvbC5fX2NvbmZpZyxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHRvRmllbGRTZXRzKG1ldGEsIGN1cnJlbmN5Rm9ybWF0LCBodHRwLCBjb25maWc6IHsgdG9rZW4/OiBzdHJpbmc7IHJlc3RVcmw/OiBzdHJpbmc7IG1pbGl0YXJ5PzogYm9vbGVhbiB9LCBvdmVycmlkZXM/KSB7XG4gICAgbGV0IGZpZWxkc2V0czogQXJyYXk8Tm92b0ZpZWxkc2V0PiA9IFtdO1xuICAgIGxldCByYW5nZXMgPSBbXTtcbiAgICBpZiAobWV0YSAmJiBtZXRhLmZpZWxkcykge1xuICAgICAgbGV0IGZpZWxkcyA9IG1ldGEuZmllbGRzXG4gICAgICAgIC5tYXAoKGZpZWxkKSA9PiB7XG4gICAgICAgICAgaWYgKCFmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnc29ydE9yZGVyJykpIHtcbiAgICAgICAgICAgIGZpZWxkLnNvcnRPcmRlciA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIC0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgICAgICB9KVxuICAgICAgICAuc29ydChIZWxwZXJzLnNvcnRCeUZpZWxkKFsnc29ydE9yZGVyJywgJ25hbWUnXSkpO1xuICAgICAgaWYgKG1ldGEuc2VjdGlvbkhlYWRlcnMgJiYgbWV0YS5zZWN0aW9uSGVhZGVycy5sZW5ndGgpIHtcbiAgICAgICAgbWV0YS5zZWN0aW9uSGVhZGVycy5zb3J0KEhlbHBlcnMuc29ydEJ5RmllbGQoWydzb3J0T3JkZXInLCAnbmFtZSddKSk7XG4gICAgICAgIG1ldGEuc2VjdGlvbkhlYWRlcnMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnNvcnRPcmRlciA+IDAgJiYgZmllbGRzZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICBmaWVsZHNldHMucHVzaCh7XG4gICAgICAgICAgICAgICAgY29udHJvbHM6IFtdLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICBtYXg6IGl0ZW0uc29ydE9yZGVyIC0gMSxcbiAgICAgICAgICAgICAgICBmaWVsZHNldElkeDogMCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWVsZHNldHMucHVzaCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLmxhYmVsLFxuICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24gfHwgJ2JoaS1zZWN0aW9uJyxcbiAgICAgICAgICAgICAgY29udHJvbHM6IFtdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgIG1pbjogaXRlbS5zb3J0T3JkZXIsXG4gICAgICAgICAgICAgIG1heDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgICAgICAgIGZpZWxkc2V0SWR4OiBmaWVsZHNldHMubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGkgPiAwICYmIGZpZWxkc2V0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIHJhbmdlc1tmaWVsZHNldHMubGVuZ3RoIC0gMl0ubWF4ID0gaXRlbS5zb3J0T3JkZXIgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghcmFuZ2VzLmxlbmd0aCkge1xuICAgICAgICAgIGZpZWxkc2V0cy5wdXNoKHtcbiAgICAgICAgICAgIGNvbnRyb2xzOiBbXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxuICAgICAgICAgICAgZmllbGRzZXRJZHg6IDAsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkc2V0cy5wdXNoKHtcbiAgICAgICAgICBjb250cm9sczogW10sXG4gICAgICAgIH0pO1xuICAgICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXG4gICAgICAgICAgZmllbGRzZXRJZHg6IDAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBmaWVsZC5uYW1lICE9PSAnaWQnICYmXG4gICAgICAgICAgKGZpZWxkLmRhdGFTcGVjaWFsaXphdGlvbiAhPT0gJ1NZU1RFTScgfHwgWydhZGRyZXNzJywgJ2JpbGxpbmdBZGRyZXNzJywgJ3NlY29uZGFyeUFkZHJlc3MnXS5pbmRleE9mKGZpZWxkLm5hbWUpICE9PSAtMSkgJiZcbiAgICAgICAgICAhZmllbGQucmVhZE9ubHlcbiAgICAgICAgKSB7XG4gICAgICAgICAgbGV0IGNvbnRyb2wgPSB0aGlzLmdldENvbnRyb2xGb3JGaWVsZChmaWVsZCwgaHR0cCwgY29uZmlnLCBvdmVycmlkZXMpO1xuICAgICAgICAgIC8vIFNldCBjdXJyZW5jeSBmb3JtYXRcbiAgICAgICAgICBpZiAoY29udHJvbC5zdWJUeXBlID09PSAnY3VycmVuY3knKSB7XG4gICAgICAgICAgICBjb250cm9sLmN1cnJlbmN5Rm9ybWF0ID0gY3VycmVuY3lGb3JtYXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBsb2NhdGlvbiA9IHJhbmdlcy5maW5kKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGl0ZW0ubWluIDw9IGZpZWxkLnNvcnRPcmRlciAmJiBmaWVsZC5zb3J0T3JkZXIgPD0gaXRlbS5tYXgpIHx8IChpdGVtLm1pbiA8PSBmaWVsZC5zb3J0T3JkZXIgJiYgaXRlbS5taW4gPT09IGl0ZW0ubWF4KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgICAgICAgIC8vIEFkZCB0byBjb250cm9sc1xuICAgICAgICAgICAgZmllbGRzZXRzW2xvY2F0aW9uLmZpZWxkc2V0SWR4XS5jb250cm9scy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChmaWVsZHNldHMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGZpZWxkc2V0cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRyb2xzOiB0aGlzLnRvQ29udHJvbHMobWV0YSwgY3VycmVuY3lGb3JtYXQsIGh0dHAsIGNvbmZpZyksXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIGdldENvbnRyb2xPcHRpb25zKGZpZWxkOiBhbnksIGh0dHA6IGFueSwgY29uZmlnOiB7IHRva2VuPzogc3RyaW5nOyByZXN0VXJsPzogc3RyaW5nOyBtaWxpdGFyeT86IGJvb2xlYW4gfSk6IGFueSB7XG4gICAgLy8gVE9ETzogVGhlIHRva2VuIHByb3BlcnR5IG9mIGNvbmZpZyBpcyB0aGUgb25seSBwcm9wZXJ0eSB1c2VkOyBqdXN0IHBhc3MgaW4gYHRva2VuOiBzdHJpbmdgXG4gICAgaWYgKGZpZWxkLmRhdGFUeXBlID09PSAnQm9vbGVhbicgJiYgIWZpZWxkLm9wdGlvbnMpIHtcbiAgICAgIC8vIFRPRE86IGRhdGFUeXBlIHNob3VsZCBvbmx5IGJlIGRldGVybWluZWQgYnkgYGRldGVybWluZUlucHV0VHlwZWAgd2hpY2ggZG9lc24ndCBldmVyIHJldHVybiAnQm9vbGVhbicgaXRcbiAgICAgIC8vIFRPRE86IChjb250LikgcmV0dXJucyBgdGlsZXNgXG4gICAgICByZXR1cm4gW3sgdmFsdWU6IGZhbHNlLCBsYWJlbDogdGhpcy5sYWJlbHMubm8gfSwgeyB2YWx1ZTogdHJ1ZSwgbGFiZWw6IHRoaXMubGFiZWxzLnllcyB9XTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLm9wdGlvbnNVcmwpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNTZXJ2aWNlLmdldE9wdGlvbnNDb25maWcoaHR0cCwgZmllbGQsIGNvbmZpZyk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGZpZWxkLm9wdGlvbnMpICYmIGZpZWxkLnR5cGUgPT09ICdjaGlwcycpIHtcbiAgICAgIGxldCBvcHRpb25zID0gZmllbGQub3B0aW9ucztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpZWxkOiAndmFsdWUnLFxuICAgICAgICBmb3JtYXQ6ICckbGFiZWwnLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkLm9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBmaWVsZC5vcHRpb25zO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNldEluaXRpYWxWYWx1ZXMoY29udHJvbHM6IEFycmF5PE5vdm9Db250cm9sQ29uZmlnPiwgdmFsdWVzOiBhbnksIGtlZXBDbGVhbj86IGJvb2xlYW4sIGtleU92ZXJyaWRlPzogc3RyaW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cm9scy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNvbnRyb2wgPSBjb250cm9sc1tpXTtcbiAgICAgIGxldCBrZXkgPSBrZXlPdmVycmlkZSA/IGNvbnRyb2wua2V5LnJlcGxhY2Uoa2V5T3ZlcnJpZGUsICcnKSA6IGNvbnRyb2wua2V5O1xuICAgICAgbGV0IHZhbHVlID0gdmFsdWVzW2tleV07XG5cbiAgICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodmFsdWUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmZpbHRlcigodmFsKSA9PiAhKE9iamVjdC5rZXlzKHZhbCkubGVuZ3RoID09PSAwICYmIHZhbC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSk7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUuZGF0YSAmJiB2YWx1ZS5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDAgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29udHJvbC52YWx1ZSA9IHZhbHVlO1xuICAgICAgLy8gVE9ETzoga2VlcENsZWFuIGlzIG5vdCByZXF1aXJlZCwgYnV0IGlzIGFsd2F5cyB1c2VkLiBJdCBzaG91bGQgZGVmYXVsdCAodG8gdHJ1ZT8pXG4gICAgICBjb250cm9sLmRpcnR5ID0gIWtlZXBDbGVhbjtcbiAgICB9XG4gIH1cblxuICBzZXRJbml0aWFsVmFsdWVzRmllbGRzZXRzKGZpZWxkc2V0czogQXJyYXk8Tm92b0ZpZWxkc2V0PiwgdmFsdWVzLCBrZWVwQ2xlYW4/OiBib29sZWFuKSB7XG4gICAgZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICB0aGlzLnNldEluaXRpYWxWYWx1ZXMoZmllbGRzZXQuY29udHJvbHMsIHZhbHVlcywga2VlcENsZWFuKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlU2hvd0FsbENvbnRyb2xzKGNvbnRyb2xzOiBBcnJheTxOb3ZvQ29udHJvbENvbmZpZz4pIHtcbiAgICBjb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICBjb250cm9sLmhpZGRlbiA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yY2VTaG93QWxsQ29udHJvbHNJbkZpZWxkc2V0cyhmaWVsZHNldHM6IEFycmF5PE5vdm9GaWVsZHNldD4pIHtcbiAgICBmaWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgY29udHJvbC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yY2VWYWxpZGF0aW9uKGZvcm06IE5vdm9Gb3JtR3JvdXApOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyhmb3JtLmNvbnRyb2xzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgbGV0IGNvbnRyb2w6IGFueSA9IGZvcm0uY29udHJvbHNba2V5XTtcbiAgICAgIGlmIChjb250cm9sLnJlcXVpcmVkICYmIEhlbHBlcnMuaXNCbGFuayhmb3JtLnZhbHVlW2NvbnRyb2wua2V5XSkpIHtcbiAgICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzQWRkcmVzc0VtcHR5KGNvbnRyb2w6IGFueSk6IGJvb2xlYW4ge1xuICAgIGxldCBmaWVsZExpc3Q6IHN0cmluZ1tdID0gWydhZGRyZXNzMScsICdhZGRyZXNzMicsICdjaXR5JywgJ3N0YXRlJywgJ3ppcCcsICdjb3VudHJ5SUQnXTtcbiAgICBsZXQgdmFsaWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGlmIChjb250cm9sLnZhbHVlICYmIGNvbnRyb2wuY29uZmlnKSB7XG4gICAgICBmaWVsZExpc3QuZm9yRWFjaCgoc3ViZmllbGQ6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKChzdWJmaWVsZCAhPT0gJ2NvdW50cnlJRCcgJiZcbiAgICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29udHJvbC5jb25maWdbc3ViZmllbGRdKSAmJlxuICAgICAgICAgICAgY29udHJvbC5jb25maWdbc3ViZmllbGRdLnJlcXVpcmVkICYmXG4gICAgICAgICAgICAoSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWVbc3ViZmllbGRdKSB8fCBIZWxwZXJzLmlzRW1wdHkoY29udHJvbC52YWx1ZVtzdWJmaWVsZF0pKSkgfHxcbiAgICAgICAgICAgIChzdWJmaWVsZCA9PT0gJ2NvdW50cnlJRCcgJiZcbiAgICAgICAgICAgICAgIUhlbHBlcnMuaXNFbXB0eShjb250cm9sLmNvbmZpZy5jb3VudHJ5SUQpICYmXG4gICAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLmNvdW50cnlJRC5yZXF1aXJlZCAmJlxuICAgICAgICAgICAgICBIZWxwZXJzLmlzRW1wdHkoY29udHJvbC52YWx1ZS5jb3VudHJ5TmFtZSkpKSAmJlxuICAgICAgICAgICEoXG4gICAgICAgICAgICBzdWJmaWVsZCA9PT0gJ3N0YXRlJyAmJlxuICAgICAgICAgICAgIUhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlLmNvdW50cnlOYW1lKSAmJlxuICAgICAgICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnICYmXG4gICAgICAgICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgJiZcbiAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucy5sZW5ndGggPT09IDBcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cbn1cbiJdfQ==