/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/Control.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { ChangeDetectorRef, Component, Input, Output, ElementRef, EventEmitter, Directive, HostListener, LOCALE_ID, Inject, } from '@angular/core';
// Vendor
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
// APP
import { OutsideClick } from '../../utils/outside-click/OutsideClick';
import { NovoLabelService } from '../../services/novo-label-service';
import { Helpers } from '../../utils/Helpers';
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
import { DateFormatService } from '../../services/date-format/DateFormat';
import { FieldInteractionApi } from './FieldInteractionApi';
import { NovoTemplateService } from '../../services/template/NovoTemplateService';
/**
 * @record
 */
export function IMaskOptions() { }
if (false) {
    /** @type {?} */
    IMaskOptions.prototype.mask;
    /** @type {?} */
    IMaskOptions.prototype.keepCharPositions;
    /** @type {?} */
    IMaskOptions.prototype.guide;
}
var NovoAutoSize = /** @class */ (function () {
    function NovoAutoSize(element) {
        this.element = element;
    }
    /**
     * @param {?} textArea
     * @return {?}
     */
    NovoAutoSize.prototype.onInput = /**
     * @param {?} textArea
     * @return {?}
     */
    function (textArea) {
        this.adjust();
    };
    /**
     * @return {?}
     */
    NovoAutoSize.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.adjust();
        }));
    };
    /**
     * @return {?}
     */
    NovoAutoSize.prototype.adjust = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nativeElement = this.element.nativeElement;
        nativeElement.style.height = nativeElement.style.minHeight;
        nativeElement.style.height = nativeElement.scrollHeight + "px";
    };
    NovoAutoSize.decorators = [
        { type: Directive, args: [{
                    selector: 'textarea[autosize]',
                },] }
    ];
    /** @nocollapse */
    NovoAutoSize.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    NovoAutoSize.propDecorators = {
        onInput: [{ type: HostListener, args: ['input', ['$event.target'],] }]
    };
    return NovoAutoSize;
}());
export { NovoAutoSize };
if (false) {
    /** @type {?} */
    NovoAutoSize.prototype.element;
}
// undo all template context references!
var NovoControlElement = /** @class */ (function (_super) {
    tslib_1.__extends(NovoControlElement, _super);
    function NovoControlElement(element, labels, dateFormatService, fieldInteractionApi, templateService, changeDetectorRef, locale) {
        if (locale === void 0) { locale = 'en-US'; }
        var _this = _super.call(this, element) || this;
        _this.labels = labels;
        _this.dateFormatService = dateFormatService;
        _this.fieldInteractionApi = fieldInteractionApi;
        _this.templateService = templateService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.locale = locale;
        _this.condensed = false;
        _this.autoFocus = false;
        _this.change = new EventEmitter();
        _this.edit = new EventEmitter();
        _this.save = new EventEmitter();
        _this.delete = new EventEmitter();
        _this.upload = new EventEmitter();
        _this.formattedValue = '';
        _this.maxLengthMet = false;
        _this.itemCount = 0;
        _this._blurEmitter = new EventEmitter();
        _this._focusEmitter = new EventEmitter();
        _this._focused = false;
        _this._enteredText = '';
        _this._showCount = false;
        _this.maxLengthMetErrorfields = [];
        _this.templates = {};
        _this.loading = false;
        return _this;
    }
    Object.defineProperty(NovoControlElement.prototype, "onBlur", {
        get: /**
         * @return {?}
         */
        function () {
            return this._blurEmitter.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "onFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._focusEmitter.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "maxlengthMetField", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.maxLengthMetErrorfields && this.maxLengthMetErrorfields.length) {
                return this.maxLengthMetErrorfields.find((/**
                 * @param {?} field
                 * @return {?}
                 */
                function (field) { return field === _this.focusedField; })) || '';
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "maxlengthErrorField", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.errors && this.errors.maxlengthFields && this.errors.maxlengthFields.length) {
                return this.errors.maxlengthFields.find((/**
                 * @param {?} field
                 * @return {?}
                 */
                function (field) { return field === _this.focusedField; })) || '';
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "showFieldMessage", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.errors && !this.maxLengthMet && Helpers.isBlank(this.control.description);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "showMaxLengthMetMessage", {
        get: /**
         * @return {?}
         */
        function () {
            return ((this.isDirty && this.maxLengthMet && this.focused && (!this.errors || (this.errors && !this.errors.maxlength))) ||
                (this.isDirty &&
                    this.maxlengthMetField &&
                    this.focused &&
                    (!this.errors || (this.errors && !this.errors.maxlengthFields.includes(this.maxlengthMetField)))));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "showErrorState", {
        get: /**
         * @return {?}
         */
        function () {
            return ((this.isDirty && this.errors) ||
                (this.focused && this.errors && this.errors.maxlength && this.errors.maxlengthFields) ||
                (this.focused && this.errors && this.errors.maxlength && this.errors.maxlengthFields && this.maxlengthErrorField));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "showCount", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var MAX_LENGTH_CONTROL_TYPES = ['textbox', 'picker', 'text-area'];
            /** @type {?} */
            var charCount = this.focused &&
                !!this.form.controls[this.control.key].maxlength &&
                MAX_LENGTH_CONTROL_TYPES.includes(this.form.controls[this.control.key].controlType);
            return this._showCount || charCount;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "showMessages", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.showCount ||
                !Helpers.isEmpty(this.form.controls[this.control.key].warning) ||
                !Helpers.isEmpty(this.form.controls[this.control.key].description));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "decimalSeparator", {
        get: /**
         * @return {?}
         */
        function () {
            return new Intl.NumberFormat(this.locale).format(1.2)[1];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoControlElement.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var DO_NOT_FOCUS_ME = ['picker', 'time', 'date', 'date-time'];
        if (this.autoFocus && !DO_NOT_FOCUS_ME.includes(this.control.controlType)) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var input = _this.element.nativeElement.querySelector('input');
                if (input) {
                    input.focus();
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    NovoControlElement.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        var _this = this;
        // Subscribe to control interactions
        if (this.control.interactions && !this.form.controls[this.control.key].restrictFieldInteractions) {
            var _loop_1 = function (interaction) {
                switch (interaction.event) {
                    case 'blur':
                        this_1.valueChangeSubscription = this_1.onBlur.pipe(debounceTime(300)).subscribe((/**
                         * @return {?}
                         */
                        function () {
                            if (!_this.form.controls[_this.control.key].restrictFieldInteractions) {
                                _this.executeInteraction(interaction);
                            }
                        }));
                        break;
                    case 'focus':
                        this_1.valueChangeSubscription = this_1.onFocus.pipe(debounceTime(300)).subscribe((/**
                         * @return {?}
                         */
                        function () {
                            if (!_this.form.controls[_this.control.key].restrictFieldInteractions) {
                                _this.executeInteraction(interaction);
                            }
                        }));
                        break;
                    case 'change':
                        this_1.valueChangeSubscription = this_1.form.controls[this_1.control.key].valueChanges.pipe(debounceTime(300)).subscribe((/**
                         * @return {?}
                         */
                        function () {
                            if (!_this.form.controls[_this.control.key].restrictFieldInteractions) {
                                _this.executeInteraction(interaction);
                            }
                        }));
                        break;
                    case 'init':
                        interaction.invokeOnInit = true;
                        break;
                    default:
                        break;
                }
                if (interaction.invokeOnInit) {
                    if (!this_1.form.controls[this_1.control.key].restrictFieldInteractions) {
                        this_1.executeInteraction(interaction);
                    }
                }
            };
            var this_1 = this;
            try {
                for (var _b = tslib_1.__values(this.control.interactions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var interaction = _c.value;
                    _loop_1(interaction);
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
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.templates = _this.templateService.getAll();
            _this.loading = false;
            _this.changeDetectorRef.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NovoControlElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loading = true;
        // Make sure to initially format the time controls
        if (this.control && this.form.controls[this.control.key].value) {
            if (this.form.controls[this.control.key].controlType === 'textbox' ||
                this.form.controls[this.control.key].controlType === 'text-area') {
                this.itemCount = this.form.controls[this.control.key].value.length;
            }
        }
        if (this.control) {
            // Listen to clear events
            this.forceClearSubscription = this.control.forceClear.subscribe((/**
             * @return {?}
             */
            function () {
                _this.clearValue();
            }));
            // For Asynchronous validations
            this.statusChangeSubscription = this.form.controls[this.control.key].statusChanges.subscribe((/**
             * @param {?} validity
             * @return {?}
             */
            function (validity) {
                _this.form.controls[_this.control.key] = _this.templateContext.$implicit;
                if (validity !== 'PENDING' && _this.form.updateValueAndValidity) {
                    _this.form.updateValueAndValidity();
                }
            }));
        }
        this.templateContext = {
            $implicit: this.form.controls[this.control.key],
            methods: {
                restrictKeys: this.restrictKeys.bind(this),
                emitChange: this.emitChange.bind(this),
                handleFocus: this.handleFocus.bind(this),
                handlePercentChange: this.handlePercentChange.bind(this),
                handleBlur: this.handleBlur.bind(this),
                handleTextAreaInput: this.handleTextAreaInput.bind(this),
                handleEdit: this.handleEdit.bind(this),
                handleSave: this.handleSave.bind(this),
                handleDelete: this.handleDelete.bind(this),
                handleUpload: this.handleUpload.bind(this),
                modelChange: this.modelChange.bind(this),
                modelChangeWithRaw: this.modelChangeWithRaw.bind(this),
                handleAddressChange: this.handleAddressChange.bind(this),
                handleTyping: this.handleTyping.bind(this),
                updateValidity: this.updateValidity.bind(this),
                toggleActive: this.toggleActive.bind(this),
                validateIntegerInput: this.validateIntegerInput.bind(this),
                validateNumberOnBlur: this.validateNumberOnBlur.bind(this),
            },
            form: this.form,
        };
        this.templateContext.$implicit.tooltipPosition = this.tooltipPosition;
        this.templateContext.$implicit.tooltip = this.tooltip;
        this.templateContext.$implicit.tooltipSize = this.tooltipSize;
        this.templateContext.$implicit.tooltipPreline = this.tooltipPreline;
        this.templateContext.$implicit.removeTooltipArrow = this.removeTooltipArrow;
        this.templateContext.$implicit.startupFocus = this.form.controls[this.control.key].startupFocus;
        this.templateContext.$implicit.fileBrowserImageUploadUrl = this.form.controls[this.control.key].fileBrowserImageUploadUrl;
        this.templateContext.$implicit.minimal = this.form.controls[this.control.key].minimal;
        this.templateContext.$implicit.currencyFormat = this.form.controls[this.control.key].currencyFormat;
        this.templateContext.$implicit.percentValue = this.form.controls[this.control.key].percentValue;
        this.templateContext.$implicit.config = this.form.controls[this.control.key].config;
        if (this.form.controls[this.control.key] && this.form.controls[this.control.key].subType === 'percentage') {
            if (!Helpers.isEmpty(this.form.controls[this.control.key].value)) {
                this.templateContext.$implicit.percentValue = Number((this.form.controls[this.control.key].value * 100).toFixed(6).replace(/\.?0*$/, ''));
            }
            this.percentChangeSubscription = this.form.controls[this.control.key].displayValueChanges.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (!Helpers.isEmpty(value)) {
                    _this.templateContext.$implicit.percentValue = Number((value * 100).toFixed(6).replace(/\.?0*$/, ''));
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    NovoControlElement.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // Unsubscribe from control interactions
        if (this.valueChangeSubscription) {
            this.valueChangeSubscription.unsubscribe();
        }
        // if (this.dateChangeSubscription) {
        //     this.dateChangeSubscription.unsubscribe();
        // }
        if (this.forceClearSubscription) {
            // Un-listen for clear events
            this.forceClearSubscription.unsubscribe();
        }
        if (this.percentChangeSubscription) {
            // Un-listen for clear events
            this.percentChangeSubscription.unsubscribe();
        }
        if (this.dateChangeSubscription) {
            this.dateChangeSubscription.unsubscribe();
        }
        if (this.statusChangeSubscription) {
            this.statusChangeSubscription.unsubscribe();
        }
        _super.prototype.ngOnDestroy.call(this);
    };
    Object.defineProperty(NovoControlElement.prototype, "errors", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.control.key].errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.control.key].valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "isDirty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.control.key].dirty || this.control.dirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "hasValue", {
        get: /**
         * @return {?}
         */
        function () {
            return !Helpers.isEmpty(this.form.value[this.control.key]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "focused", {
        get: /**
         * @return {?}
         */
        function () {
            return this._focused;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "tooltip", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.controls[this.control.key].tooltip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "tooltipPosition", {
        get: /**
         * @return {?}
         */
        function () {
            if (Helpers.isBlank(this.form.controls[this.control.key].tooltipPosition)) {
                return 'right';
            }
            return this.form.controls[this.control.key].tooltipPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "tooltipSize", {
        get: /**
         * @return {?}
         */
        function () {
            if (Helpers.isBlank(this.form.controls[this.control.key].tooltipSize)) {
                return '';
            }
            return this.form.controls[this.control.key].tooltipSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "tooltipPreline", {
        get: /**
         * @return {?}
         */
        function () {
            if (Helpers.isBlank(this.form.controls[this.control.key].tooltipPreline)) {
                return false;
            }
            return this.form.controls[this.control.key].tooltipPreline;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "removeTooltipArrow", {
        get: /**
         * @return {?}
         */
        function () {
            if (Helpers.isBlank(this.form.controls[this.control.key].removeTooltipArrow)) {
                return false;
            }
            return this.form.controls[this.control.key].removeTooltipArrow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "alwaysActive", {
        get: /**
         * @return {?}
         */
        function () {
            // Controls that have the label active if there is any user entered text in the field
            if (this.form.controls[this.control.key].controlType === 'picker' && this._enteredText.length) {
                return true;
            }
            // Controls that always have the label active
            return ([
                'tiles',
                'checklist',
                'checkbox',
                'date',
                'time',
                'date-time',
                'address',
                'file',
                'editor',
                'ace-editor',
                'radio',
                'text-area',
                'quick-note',
            ].indexOf(this.form.controls[this.control.key].controlType) !== -1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "requiresExtraSpacing", {
        get: /**
         * @return {?}
         */
        function () {
            // Chips
            if (this.form.controls[this.control.key].controlType === 'picker' && this.form.controls[this.control.key].multiple && this.hasValue) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} interaction
     * @return {?}
     */
    NovoControlElement.prototype.executeInteraction = /**
     * @param {?} interaction
     * @return {?}
     */
    function (interaction) {
        var _this = this;
        if (interaction.script && Helpers.isFunction(interaction.script)) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.fieldInteractionApi.form = _this.form;
                _this.fieldInteractionApi.currentKey = _this.control.key;
                try {
                    interaction.script(_this.fieldInteractionApi, _this.control.key);
                }
                catch (err) {
                    console.info('Field Interaction Error!', _this.control.key); // tslint:disable-line
                    console.error(err); // tslint:disable-line
                }
            }));
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoControlElement.prototype.handleTyping = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._focused = event && event.length;
        this._enteredText = event;
    };
    /**
     * @param {?} event
     * @param {?=} field
     * @return {?}
     */
    NovoControlElement.prototype.handleFocus = /**
     * @param {?} event
     * @param {?=} field
     * @return {?}
     */
    function (event, field) {
        this._focused = true;
        this.focusedField = field;
        if (!Helpers.isBlank(this.characterCountField) && this.characterCountField === field) {
            this.showCount = true;
        }
        else if (this.form.controls[this.control.key].controlType === 'address' &&
            field &&
            !Helpers.isEmpty(this.form.value[this.control.key]) &&
            !Helpers.isBlank(this.form.value[this.control.key][field])) {
            this.handleAddressChange({ value: this.form.value[this.control.key][field], field: field });
        }
        this._focusEmitter.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoControlElement.prototype.handleBlur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._focused = false;
        this.focusedField = '';
        this.showCount = false;
        this._blurEmitter.emit(event);
    };
    /**
     * @return {?}
     */
    NovoControlElement.prototype.clearValue = /**
     * @return {?}
     */
    function () {
        this.form.controls[this.control.key].setValue(null);
        this.formattedValue = null;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoControlElement.prototype.handleTextAreaInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.emitChange(event);
        this.restrictKeys(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoControlElement.prototype.checkMaxLength = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.control && this.form.controls[this.control.key].maxlength) {
            this.itemCount = event.target.value.length;
            this.maxLengthMet = event.target.value.length >= this.form.controls[this.control.key].maxlength;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoControlElement.prototype.modelChangeWithRaw = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (Helpers.isEmpty(event.value)) {
            this._focused = false;
            this._enteredText = '';
        }
        if (this.form.controls[this.control.key].controlType === 'picker' && this.form.controls[this.control.key].maxlength) {
            this.itemCount = event.value ? event.value.length : 0;
            this.maxLengthMet = this.itemCount >= this.form.controls[this.control.key].maxlength ? true : false;
        }
        this.form.controls[this.control.key].rawValue = event.rawValue;
        this.change.emit(event.value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoControlElement.prototype.modelChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (Helpers.isEmpty(value)) {
            this._focused = false;
            this._enteredText = '';
        }
        this.change.emit(value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoControlElement.prototype.validateNumberOnBlur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._focused = false;
        this.focusedField = '';
        this.showCount = false;
        if (this.form.controls[this.control.key].subType === 'number') {
            this.validateIntegerInput();
        }
        this._blurEmitter.emit(event);
    };
    /**
     * @return {?}
     */
    NovoControlElement.prototype.validateIntegerInput = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var NUMBERS_ONLY = /^[\d\-]\d*$/;
        if (this.form.controls[this.control.key].value && !NUMBERS_ONLY.test(this.form.controls[this.control.key].value)) {
            this.form.controls[this.control.key].markAsInvalid(this.labels.invalidIntegerInput + " " + this.form.controls[this.control.key].label.toUpperCase());
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoControlElement.prototype.restrictKeys = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var NUMBERS_ONLY = /[0-9\-]/;
        /** @type {?} */
        var NUMBERS_WITH_DECIMAL_DOT = /[0-9\.\-]/;
        /** @type {?} */
        var NUMBERS_WITH_DECIMAL_DOT_AND_COMMA = /[0-9\.\,\-]/;
        /** @type {?} */
        var UTILITY_KEYS = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
        /** @type {?} */
        var key = event.key;
        // Numbers or numbers and decimal characters only
        if (this.form.controls[this.control.key].subType === 'number' && !(NUMBERS_ONLY.test(key) || UTILITY_KEYS.includes(key))) {
            event.preventDefault();
        }
        else if (['currency', 'float', 'percentage'].includes(this.form.controls[this.control.key].subType) &&
            !((this.decimalSeparator === '.' && NUMBERS_WITH_DECIMAL_DOT.test(key)) ||
                (this.decimalSeparator === ',' && NUMBERS_WITH_DECIMAL_DOT_AND_COMMA.test(key)) ||
                UTILITY_KEYS.includes(key))) {
            event.preventDefault();
        }
        // Max Length
        if (this.form.controls[this.control.key].maxlength && event.target.value.length >= this.form.controls[this.control.key].maxlength) {
            event.preventDefault();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoControlElement.prototype.handlePercentChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var value = event.target['value'];
        /** @type {?} */
        var percent = Helpers.isEmpty(value) ? null : Number((value / 100).toFixed(6).replace(/\.?0*$/, ''));
        if (!Helpers.isEmpty(percent)) {
            this.change.emit(percent);
            this.form.controls[this.control.key].setValue(percent);
        }
        else {
            this.change.emit(null);
            this.form.controls[this.control.key].setValue(null);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoControlElement.prototype.handleTabForPickers = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.active && event && event.keyCode) {
            if (event.keyCode === KeyCodes.ESC || event.keyCode === KeyCodes.TAB) {
                this.toggleActive(event, false);
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoControlElement.prototype.emitChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.change.emit(value);
        this.checkMaxLength(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoControlElement.prototype.handleEdit = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.edit.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoControlElement.prototype.handleSave = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.save.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoControlElement.prototype.handleDelete = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.delete.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoControlElement.prototype.handleUpload = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.upload.emit(value);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    NovoControlElement.prototype.handleAddressChange = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (data &&
            !Helpers.isBlank(data.value) &&
            data.field &&
            this.control.config[data.field] &&
            !Helpers.isEmpty(this.control.config[data.field].maxlength)) {
            this.itemCount = data.value.length;
            this.characterCountField = data.field;
            this.maxLength = this.control.config[data.field].maxlength;
            this.showCount = true;
            if (this.maxLength === this.itemCount) {
                this.maxLengthMetErrorfields.push(data.field);
            }
            else {
                this.maxLengthMetErrorfields = this.maxLengthMetErrorfields.filter((/**
                 * @param {?} field
                 * @return {?}
                 */
                function (field) { return field !== data.field; }));
            }
        }
    };
    /**
     * @param {?} shouldEventBeEmitted
     * @return {?}
     */
    NovoControlElement.prototype.updateValidity = /**
     * @param {?} shouldEventBeEmitted
     * @return {?}
     */
    function (shouldEventBeEmitted) {
        /** @type {?} */
        var emitEvent = shouldEventBeEmitted ? true : false;
        this.form.controls[this.control.key].updateValueAndValidity({ emitEvent: emitEvent });
    };
    NovoControlElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-control',
                    template: "\n        <div class=\"novo-control-container\" [hidden]=\"form.controls[control.key].hidden || form.controls[control.key].type === 'hidden' || form.controls[control.key].controlType === 'hidden'\">\n            <!--Encrypted Field-->\n            <span [tooltip]=\"labels.encryptedFieldTooltip\" [tooltipPosition]=\"'right'\"><i [hidden]=\"!form.controls[control.key].encrypted\"\n            class=\"bhi-lock\"></i></span>\n            <!--Label (for horizontal)-->\n            <label [attr.for]=\"control.key\" *ngIf=\"form.layout !== 'vertical' && form.controls[control.key].label && !condensed\" [ngClass]=\"{'encrypted': form.controls[control.key].encrypted }\">\n                {{ form.controls[control.key].label }}\n            </label>\n            <div class=\"novo-control-outer-container\">\n                <!--Label (for vertical)-->\n                <label\n                    *ngIf=\"form.layout === 'vertical' && form.controls[control.key].label && !condensed\"\n                    class=\"novo-control-label\"\n                    [attr.for]=\"control.key\"\n                    [class.novo-control-empty]=\"!hasValue\"\n                    [class.novo-control-focused]=\"focused\"\n                    [class.novo-control-filled]=\"hasValue\"\n                    [class.novo-control-always-active]=\"alwaysActive || form.controls[control.key].placeholder\"\n                    [class.novo-control-extra-spacing]=\"requiresExtraSpacing\">\n                    {{ form.controls[control.key].label }}\n                </label>\n                <div class=\"novo-control-inner-container\" [class.required]=\"form.controls[control.key].required && !form.controls[control.key].readOnly\">\n                    <div class=\"novo-control-inner-input-container\" [class.novo-control-filled]=\"hasValue\" [class.novo-control-empty]=\"!hasValue\">\n                      <!--Required Indicator-->\n                        <i [hidden]=\"!form.controls[control.key].required || form.controls[control.key].readOnly\"\n                            class=\"required-indicator {{ form.controls[control.key].controlType }}\"\n                            [ngClass]=\"{'bhi-circle': !isValid, 'bhi-check': isValid}\" *ngIf=\"!condensed || form.controls[control.key].required\">\n                        </i>\n                        <!--Form Controls-->\n                        <div class=\"novo-control-input {{ form.controls[control.key].controlType }}\" [attr.data-automation-id]=\"control.key\" [class.control-disabled]=\"form.controls[control.key].disabled\">\n                            <!--TODO prefix/suffix on the control-->\n                            <ng-container *ngIf=\"templates\">\n                              <ng-container *ngTemplateOutlet=\"templates[form.controls[control.key].controlType]; context: templateContext\"></ng-container>\n                            </ng-container>\n                            <ng-container *ngIf=\"!templates || loading\">\n                                <div class=\"novo-control-input-container novo-control-input-with-label\">\n                                  <input type=\"text\"/>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n                    <!--Error Message-->\n                    <div class=\"field-message {{ form.controls[control.key].controlType }}\" *ngIf=\"!condensed\" [class.has-tip]=\"form.controls[control.key].tipWell\" [ngClass]=\"showErrorState || showMaxLengthMetMessage ? 'error-shown' : 'error-hidden'\">\n                        <div class=\"messages\" [ngClass]=\"showMessages ? 'count-shown messages-shown' : 'count-hidden messages-hidden'\">\n                            <span class=\"error-text\" *ngIf=\"showFieldMessage\"></span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && errors?.required && form.controls[control.key].controlType !== 'address'\">{{ form.controls[control.key].label | uppercase }} {{ labels.isRequired }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && errors?.minlength\">{{ form.controls[control.key].label | uppercase }} {{ labels.minLength }} {{ form.controls[control.key].minlength }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && maxLengthMet && focused && !errors?.maxlength && form.controls[control.key].controlType !== 'picker'\">{{ labels.maxlengthMet(form.controls[control.key].maxlength) }}</span>\n                            <span class=\"error-text\" *ngIf=\"errors?.maxlength && focused && !errors?.maxlengthFields\">{{ labels.invalidMaxlength(form.controls[control.key].maxlength) }}</span>\n                            <span class=\"error-text\" *ngIf=\"maxLengthMet && form.controls[control.key].controlType === 'picker'\">{{ labels.maxRecordsReached }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && errors?.invalidEmail\">{{ form.controls[control.key].label | uppercase }} {{ labels.invalidEmail }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && (errors?.integerTooLarge || errors?.doubleTooLarge)\">{{ form.controls[control.key].label | uppercase }} {{ labels.isTooLarge }}</span>\n                            <span *ngIf=\"isDirty && errors?.minYear\">{{ form.controls[control.key].label | uppercase }} {{ labels.notValidYear }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && (errors?.custom)\">{{ errors.custom }}</span>\n                            <span class=\"error-text\" *ngIf=\"errors?.maxlength && errors?.maxlengthFields && maxlengthErrorField && focused\">\n                                {{ labels.invalidMaxlengthWithField(control.config[maxlengthErrorField]?.label, control.config[maxlengthErrorField]?.maxlength) }}\n                            </span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && maxlengthMetField && focused && !errors?.maxlengthFields?.includes(maxlengthMetField)\">\n                              {{ labels.maxlengthMetWithField(control.config[maxlengthMetField]?.label, control.config[maxlengthMetField]?.maxlength) }}\n                            </span>\n                            <span *ngIf=\"isDirty && errors?.invalidAddress\">\n                                <span class=\"error-text\" *ngFor=\"let invalidAddressField of errors?.invalidAddressFields\">{{ invalidAddressField | uppercase }} {{ labels.isRequired }} </span>\n                            </span>\n                            <!--Field Hint-->\n                            <span class=\"description\" *ngIf=\"form.controls[control.key].description\">\n                                {{ form.controls[control.key].description }}\n                            </span>\n                            <span class=\"warning-text\" *ngIf=\"form.controls[control.key].warning\">{{ form.controls[control.key].warning }}</span>\n\n                        </div>\n                        <span class=\"character-count\" [class.error]=\"((errors?.maxlength && !errors?.maxlengthFields) || (errors?.maxlength && errors?.maxlengthFields && errors.maxlengthFields.includes(focusedField)))\" *ngIf=\"showCount && form.controls[control.key].controlType !== 'picker'\">{{ itemCount }}/{{ maxLength || form.controls[control.key].maxlength }}</span>\n                        <span class=\"record-count\" [class.zero-count]=\"itemCount === 0\" [class.row-picker]=\"form.controls[this.control.key].config.columns\" *ngIf=\"showCount && form.controls[control.key].controlType === 'picker'\">{{ itemCount }}/{{ maxLength || form.controls[control.key].maxlength }}</span>\n                    </div>\n                    <!--Tip Wel-->\n                    <novo-tip-well *ngIf=\"form.controls[control.key].tipWell\" [name]=\"control.key\" [tip]=\"form.controls[control.key]?.tipWell?.tip\" [icon]=\"form.controls[control.key]?.tipWell?.icon\" [button]=\"form.controls[control.key]?.tipWell?.button\" [sanitize]=\"form.controls[control.key]?.tipWell?.sanitize\"></novo-tip-well>\n                </div>\n                <i *ngIf=\"form.controls[control.key].fieldInteractionloading\" class=\"loading\">\n                    <svg version=\"1.1\"\n                     xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n                     x=\"0px\" y=\"0px\" width=\"18.2px\" height=\"18.5px\" viewBox=\"0 0 18.2 18.5\" style=\"enable-background:new 0 0 18.2 18.5;\"\n                     xml:space=\"preserve\">\n                    <style type=\"text/css\">\n                        .spinner { fill:#FFFFFF; }\n                    </style>\n                        <path class=\"spinner\" d=\"M9.2,18.5C4.1,18.5,0,14.4,0,9.2S4.1,0,9.2,0c0.9,0,1.9,0.1,2.7,0.4c0.8,0.2,1.2,1.1,1,1.9\n                            c-0.2,0.8-1.1,1.2-1.9,1C10.5,3.1,9.9,3,9.2,3C5.8,3,3,5.8,3,9.2s2.8,6.2,6.2,6.2c2.8,0,5.3-1.9,6-4.7c0.2-0.8,1-1.3,1.8-1.1\n                            c0.8,0.2,1.3,1,1.1,1.8C17.1,15.7,13.4,18.5,9.2,18.5z\"/>\n                    </svg>\n                </i>\n            </div>\n        </div>\n    ",
                    host: {
                        '[class]': 'form.controls[control.key].controlType',
                        '[attr.data-control-type]': 'form.controls[control.key].controlType',
                        '[class.disabled]': 'form.controls[control.key].readOnly',
                        '[class.hidden]': 'form.controls[control.key].hidden',
                        '[attr.data-control-key]': 'control.key',
                        '[class.inline-embedded]': 'control.isInlineEmbedded',
                        '[class.embedded]': 'control.isEmbedded',
                    }
                }] }
    ];
    /** @nocollapse */
    NovoControlElement.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NovoLabelService },
        { type: DateFormatService },
        { type: FieldInteractionApi },
        { type: NovoTemplateService },
        { type: ChangeDetectorRef },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    NovoControlElement.propDecorators = {
        control: [{ type: Input }],
        form: [{ type: Input }],
        condensed: [{ type: Input }],
        autoFocus: [{ type: Input }],
        change: [{ type: Output }],
        edit: [{ type: Output }],
        save: [{ type: Output }],
        delete: [{ type: Output }],
        upload: [{ type: Output }],
        onBlur: [{ type: Output, args: ['blur',] }],
        onFocus: [{ type: Output, args: ['focus',] }]
    };
    return NovoControlElement;
}(OutsideClick));
export { NovoControlElement };
if (false) {
    /** @type {?} */
    NovoControlElement.prototype.control;
    /** @type {?} */
    NovoControlElement.prototype.form;
    /** @type {?} */
    NovoControlElement.prototype.condensed;
    /** @type {?} */
    NovoControlElement.prototype.autoFocus;
    /** @type {?} */
    NovoControlElement.prototype.change;
    /** @type {?} */
    NovoControlElement.prototype.edit;
    /** @type {?} */
    NovoControlElement.prototype.save;
    /** @type {?} */
    NovoControlElement.prototype.delete;
    /** @type {?} */
    NovoControlElement.prototype.upload;
    /** @type {?} */
    NovoControlElement.prototype.maxLength;
    /** @type {?} */
    NovoControlElement.prototype.focusedField;
    /** @type {?} */
    NovoControlElement.prototype.formattedValue;
    /** @type {?} */
    NovoControlElement.prototype.percentValue;
    /** @type {?} */
    NovoControlElement.prototype.maxLengthMet;
    /** @type {?} */
    NovoControlElement.prototype.itemCount;
    /** @type {?} */
    NovoControlElement.prototype.maskOptions;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype._blurEmitter;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype._focusEmitter;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype._focused;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype._enteredText;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.forceClearSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.percentChangeSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.valueChangeSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.dateChangeSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype._showCount;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.characterCountField;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.maxLengthMetErrorfields;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.statusChangeSubscription;
    /** @type {?} */
    NovoControlElement.prototype.templates;
    /** @type {?} */
    NovoControlElement.prototype.templateContext;
    /** @type {?} */
    NovoControlElement.prototype.loading;
    /** @type {?} */
    NovoControlElement.prototype.labels;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.dateFormatService;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.fieldInteractionApi;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.templateService;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    NovoControlElement.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0NvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sVUFBVSxFQUNWLFlBQVksRUFHWixTQUFTLEVBQ1QsWUFBWSxFQUdaLFNBQVMsRUFDVCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7O0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUU5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7OztBQUVsRixrQ0FJQzs7O0lBSEMsNEJBQVU7O0lBQ1YseUNBQTJCOztJQUMzQiw2QkFBZTs7QUFHakI7SUFTRSxzQkFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtJQUFHLENBQUM7Ozs7O0lBSjFDLDhCQUFPOzs7O0lBRFAsVUFDUSxRQUE2QjtRQUNuQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUlELHlDQUFrQjs7O0lBQWxCO1FBQUEsaUJBSUM7UUFIQyxVQUFV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WSxrQkFBa0I7OztJQUM3QixxQ0FDYTs7SUFDYixrQ0FDVTs7SUFDVix1Q0FDMkI7O0lBQzNCLHVDQUMyQjs7SUFDM0Isb0NBQytDOztJQUMvQyxrQ0FDNkM7O0lBQzdDLGtDQUM2Qzs7SUFDN0Msb0NBQytDOztJQUMvQyxvQ0FDK0M7O0lBVS9DLHVDQUF5Qjs7SUFDekIsMENBQTRCOztJQUM1Qiw0Q0FBNEI7O0lBQzVCLDBDQUFxQjs7SUFDckIsMENBQThCOztJQUM5Qix1Q0FBc0I7O0lBQ3RCLHlDQUEwQjs7Ozs7SUFFMUIsMENBQWdGOzs7OztJQUNoRiwyQ0FBaUY7Ozs7O0lBQ2pGLHNDQUFrQzs7Ozs7SUFDbEMsMENBQWtDOzs7OztJQUNsQyxvREFBb0M7Ozs7O0lBQ3BDLHVEQUF1Qzs7Ozs7SUFDdkMscURBQXFDOzs7OztJQUNyQyxvREFBb0M7Ozs7O0lBQ3BDLHdDQUFvQzs7Ozs7SUFDcEMsaURBQW9DOzs7OztJQUNwQyxxREFBK0M7Ozs7O0lBQy9DLHNEQUFzQzs7SUFFdEMsdUNBQW9COztJQUNwQiw2Q0FBcUI7O0lBQ3JCLHFDQUF5Qjs7SUFJdkIsb0NBQStCOzs7OztJQUMvQiwrQ0FBNEM7Ozs7O0lBQzVDLGlEQUFnRDs7Ozs7SUFDaEQsNkNBQTRDOzs7OztJQUM1QywrQ0FBNEM7Ozs7O0lBQzVDLG9DQUFtRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgRGlyZWN0aXZlLFxuICBIb3N0TGlzdGVuZXIsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIExPQ0FMRV9JRCxcbiAgSW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLy8gQVBQXG5pbXBvcnQgeyBPdXRzaWRlQ2xpY2sgfSBmcm9tICcuLi8uLi91dGlscy9vdXRzaWRlLWNsaWNrL091dHNpZGVDbGljayc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcbmltcG9ydCB7IERhdGVGb3JtYXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0ZS1mb3JtYXQvRGF0ZUZvcm1hdCc7XG5pbXBvcnQgeyBGaWVsZEludGVyYWN0aW9uQXBpIH0gZnJvbSAnLi9GaWVsZEludGVyYWN0aW9uQXBpJztcbmltcG9ydCB7IE5vdm9UZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJTWFza09wdGlvbnMge1xuICBtYXNrOiBhbnk7XG4gIGtlZXBDaGFyUG9zaXRpb25zOiBib29sZWFuO1xuICBndWlkZTogYm9vbGVhbjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndGV4dGFyZWFbYXV0b3NpemVdJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0F1dG9TaXplIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQudGFyZ2V0J10pXG4gIG9uSW5wdXQodGV4dEFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmFkanVzdCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hZGp1c3QoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkanVzdCgpOiB2b2lkIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgbmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBuYXRpdmVFbGVtZW50LnN0eWxlLm1pbkhlaWdodDtcbiAgICBuYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke25hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgfVxufVxuLy8gdW5kbyBhbGwgdGVtcGxhdGUgY29udGV4dCByZWZlcmVuY2VzIVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jb250cm9sJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1jb250YWluZXJcIiBbaGlkZGVuXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmhpZGRlbiB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS50eXBlID09PSAnaGlkZGVuJyB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ2hpZGRlbidcIj5cbiAgICAgICAgICAgIDwhLS1FbmNyeXB0ZWQgRmllbGQtLT5cbiAgICAgICAgICAgIDxzcGFuIFt0b29sdGlwXT1cImxhYmVscy5lbmNyeXB0ZWRGaWVsZFRvb2x0aXBcIiBbdG9vbHRpcFBvc2l0aW9uXT1cIidyaWdodCdcIj48aSBbaGlkZGVuXT1cIiFmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5lbmNyeXB0ZWRcIlxuICAgICAgICAgICAgY2xhc3M9XCJiaGktbG9ja1wiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICA8IS0tTGFiZWwgKGZvciBob3Jpem9udGFsKS0tPlxuICAgICAgICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJjb250cm9sLmtleVwiICpuZ0lmPVwiZm9ybS5sYXlvdXQgIT09ICd2ZXJ0aWNhbCcgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgJiYgIWNvbmRlbnNlZFwiIFtuZ0NsYXNzXT1cInsnZW5jcnlwdGVkJzogZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uZW5jcnlwdGVkIH1cIj5cbiAgICAgICAgICAgICAgICB7eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCB9fVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtb3V0ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPCEtLUxhYmVsIChmb3IgdmVydGljYWwpLS0+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZm9ybS5sYXlvdXQgPT09ICd2ZXJ0aWNhbCcgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgJiYgIWNvbmRlbnNlZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm92by1jb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuZm9yXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLm5vdm8tY29udHJvbC1lbXB0eV09XCIhaGFzVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Mubm92by1jb250cm9sLWZvY3VzZWRdPVwiZm9jdXNlZFwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5ub3ZvLWNvbnRyb2wtZmlsbGVkXT1cImhhc1ZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLm5vdm8tY29udHJvbC1hbHdheXMtYWN0aXZlXT1cImFsd2F5c0FjdGl2ZSB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5ub3ZvLWNvbnRyb2wtZXh0cmEtc3BhY2luZ109XCJyZXF1aXJlc0V4dHJhU3BhY2luZ1wiPlxuICAgICAgICAgICAgICAgICAgICB7eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCB9fVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1pbm5lci1jb250YWluZXJcIiBbY2xhc3MucmVxdWlyZWRdPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ucmVxdWlyZWQgJiYgIWZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnJlYWRPbmx5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtaW5uZXItaW5wdXQtY29udGFpbmVyXCIgW2NsYXNzLm5vdm8tY29udHJvbC1maWxsZWRdPVwiaGFzVmFsdWVcIiBbY2xhc3Mubm92by1jb250cm9sLWVtcHR5XT1cIiFoYXNWYWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDwhLS1SZXF1aXJlZCBJbmRpY2F0b3ItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIFtoaWRkZW5dPVwiIWZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnJlcXVpcmVkIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnJlYWRPbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkLWluZGljYXRvciB7eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSB9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydiaGktY2lyY2xlJzogIWlzVmFsaWQsICdiaGktY2hlY2snOiBpc1ZhbGlkfVwiICpuZ0lmPVwiIWNvbmRlbnNlZCB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5yZXF1aXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLUZvcm0gQ29udHJvbHMtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtaW5wdXQge3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgfX1cIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY29udHJvbC5rZXlcIiBbY2xhc3MuY29udHJvbC1kaXNhYmxlZF09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1UT0RPIHByZWZpeC9zdWZmaXggb24gdGhlIGNvbnRyb2wtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGVtcGxhdGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzW2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlXTsgY29udGV4dDogdGVtcGxhdGVDb250ZXh0XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0ZW1wbGF0ZXMgfHwgbG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWlucHV0LWNvbnRhaW5lciBub3ZvLWNvbnRyb2wtaW5wdXQtd2l0aC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS1FcnJvciBNZXNzYWdlLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1tZXNzYWdlIHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlIH19XCIgKm5nSWY9XCIhY29uZGVuc2VkXCIgW2NsYXNzLmhhcy10aXBdPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0udGlwV2VsbFwiIFtuZ0NsYXNzXT1cInNob3dFcnJvclN0YXRlIHx8IHNob3dNYXhMZW5ndGhNZXRNZXNzYWdlID8gJ2Vycm9yLXNob3duJyA6ICdlcnJvci1oaWRkZW4nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZXNcIiBbbmdDbGFzc109XCJzaG93TWVzc2FnZXMgPyAnY291bnQtc2hvd24gbWVzc2FnZXMtc2hvd24nIDogJ2NvdW50LWhpZGRlbiBtZXNzYWdlcy1oaWRkZW4nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJzaG93RmllbGRNZXNzYWdlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiaXNEaXJ0eSAmJiBlcnJvcnM/LnJlcXVpcmVkICYmIGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlICE9PSAnYWRkcmVzcydcIj57eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCB8IHVwcGVyY2FzZSB9fSB7eyBsYWJlbHMuaXNSZXF1aXJlZCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImlzRGlydHkgJiYgZXJyb3JzPy5taW5sZW5ndGhcIj57eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCB8IHVwcGVyY2FzZSB9fSB7eyBsYWJlbHMubWluTGVuZ3RoIH19IHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLm1pbmxlbmd0aCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImlzRGlydHkgJiYgbWF4TGVuZ3RoTWV0ICYmIGZvY3VzZWQgJiYgIWVycm9ycz8ubWF4bGVuZ3RoICYmIGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlICE9PSAncGlja2VyJ1wiPnt7IGxhYmVscy5tYXhsZW5ndGhNZXQoZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubWF4bGVuZ3RoKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImVycm9ycz8ubWF4bGVuZ3RoICYmIGZvY3VzZWQgJiYgIWVycm9ycz8ubWF4bGVuZ3RoRmllbGRzXCI+e3sgbGFiZWxzLmludmFsaWRNYXhsZW5ndGgoZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubWF4bGVuZ3RoKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cIm1heExlbmd0aE1ldCAmJiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3BpY2tlcidcIj57eyBsYWJlbHMubWF4UmVjb3Jkc1JlYWNoZWQgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIGVycm9ycz8uaW52YWxpZEVtYWlsXCI+e3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgfCB1cHBlcmNhc2UgfX0ge3sgbGFiZWxzLmludmFsaWRFbWFpbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImlzRGlydHkgJiYgKGVycm9ycz8uaW50ZWdlclRvb0xhcmdlIHx8IGVycm9ycz8uZG91YmxlVG9vTGFyZ2UpXCI+e3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgfCB1cHBlcmNhc2UgfX0ge3sgbGFiZWxzLmlzVG9vTGFyZ2UgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJpc0RpcnR5ICYmIGVycm9ycz8ubWluWWVhclwiPnt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIHwgdXBwZXJjYXNlIH19IHt7IGxhYmVscy5ub3RWYWxpZFllYXIgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIChlcnJvcnM/LmN1c3RvbSlcIj57eyBlcnJvcnMuY3VzdG9tIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiZXJyb3JzPy5tYXhsZW5ndGggJiYgZXJyb3JzPy5tYXhsZW5ndGhGaWVsZHMgJiYgbWF4bGVuZ3RoRXJyb3JGaWVsZCAmJiBmb2N1c2VkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhYmVscy5pbnZhbGlkTWF4bGVuZ3RoV2l0aEZpZWxkKGNvbnRyb2wuY29uZmlnW21heGxlbmd0aEVycm9yRmllbGRdPy5sYWJlbCwgY29udHJvbC5jb25maWdbbWF4bGVuZ3RoRXJyb3JGaWVsZF0/Lm1heGxlbmd0aCkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIG1heGxlbmd0aE1ldEZpZWxkICYmIGZvY3VzZWQgJiYgIWVycm9ycz8ubWF4bGVuZ3RoRmllbGRzPy5pbmNsdWRlcyhtYXhsZW5ndGhNZXRGaWVsZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhYmVscy5tYXhsZW5ndGhNZXRXaXRoRmllbGQoY29udHJvbC5jb25maWdbbWF4bGVuZ3RoTWV0RmllbGRdPy5sYWJlbCwgY29udHJvbC5jb25maWdbbWF4bGVuZ3RoTWV0RmllbGRdPy5tYXhsZW5ndGgpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXNEaXJ0eSAmJiBlcnJvcnM/LmludmFsaWRBZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0Zvcj1cImxldCBpbnZhbGlkQWRkcmVzc0ZpZWxkIG9mIGVycm9ycz8uaW52YWxpZEFkZHJlc3NGaWVsZHNcIj57eyBpbnZhbGlkQWRkcmVzc0ZpZWxkIHwgdXBwZXJjYXNlIH19IHt7IGxhYmVscy5pc1JlcXVpcmVkIH19IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLUZpZWxkIEhpbnQtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5kZXNjcmlwdGlvbiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndhcm5pbmctdGV4dFwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ud2FybmluZ1wiPnt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLndhcm5pbmcgfX08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGFyYWN0ZXItY291bnRcIiBbY2xhc3MuZXJyb3JdPVwiKChlcnJvcnM/Lm1heGxlbmd0aCAmJiAhZXJyb3JzPy5tYXhsZW5ndGhGaWVsZHMpIHx8IChlcnJvcnM/Lm1heGxlbmd0aCAmJiBlcnJvcnM/Lm1heGxlbmd0aEZpZWxkcyAmJiBlcnJvcnMubWF4bGVuZ3RoRmllbGRzLmluY2x1ZGVzKGZvY3VzZWRGaWVsZCkpKVwiICpuZ0lmPVwic2hvd0NvdW50ICYmIGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlICE9PSAncGlja2VyJ1wiPnt7IGl0ZW1Db3VudCB9fS97eyBtYXhMZW5ndGggfHwgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubWF4bGVuZ3RoIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWNvcmQtY291bnRcIiBbY2xhc3MuemVyby1jb3VudF09XCJpdGVtQ291bnQgPT09IDBcIiBbY2xhc3Mucm93LXBpY2tlcl09XCJmb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbmZpZy5jb2x1bW5zXCIgKm5nSWY9XCJzaG93Q291bnQgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICdwaWNrZXInXCI+e3sgaXRlbUNvdW50IH19L3t7IG1heExlbmd0aCB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5tYXhsZW5ndGggfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8IS0tVGlwIFdlbC0tPlxuICAgICAgICAgICAgICAgICAgICA8bm92by10aXAtd2VsbCAqbmdJZj1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnRpcFdlbGxcIiBbbmFtZV09XCJjb250cm9sLmtleVwiIFt0aXBdPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0/LnRpcFdlbGw/LnRpcFwiIFtpY29uXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldPy50aXBXZWxsPy5pY29uXCIgW2J1dHRvbl09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XT8udGlwV2VsbD8uYnV0dG9uXCIgW3Nhbml0aXplXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldPy50aXBXZWxsPy5zYW5pdGl6ZVwiPjwvbm92by10aXAtd2VsbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aSAqbmdJZj1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmZpZWxkSW50ZXJhY3Rpb25sb2FkaW5nXCIgY2xhc3M9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeG1sbnM6YT1cImh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC9cIlxuICAgICAgICAgICAgICAgICAgICAgeD1cIjBweFwiIHk9XCIwcHhcIiB3aWR0aD1cIjE4LjJweFwiIGhlaWdodD1cIjE4LjVweFwiIHZpZXdCb3g9XCIwIDAgMTguMiAxOC41XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4LjIgMTguNTtcIlxuICAgICAgICAgICAgICAgICAgICAgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwaW5uZXIgeyBmaWxsOiNGRkZGRkY7IH1cbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwic3Bpbm5lclwiIGQ9XCJNOS4yLDE4LjVDNC4xLDE4LjUsMCwxNC40LDAsOS4yUzQuMSwwLDkuMiwwYzAuOSwwLDEuOSwwLjEsMi43LDAuNGMwLjgsMC4yLDEuMiwxLjEsMSwxLjlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLTAuMiwwLjgtMS4xLDEuMi0xLjksMUMxMC41LDMuMSw5LjksMyw5LjIsM0M1LjgsMywzLDUuOCwzLDkuMnMyLjgsNi4yLDYuMiw2LjJjMi44LDAsNS4zLTEuOSw2LTQuN2MwLjItMC44LDEtMS4zLDEuOC0xLjFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMC44LDAuMiwxLjMsMSwxLjEsMS44QzE3LjEsMTUuNywxMy40LDE4LjUsOS4yLDE4LjV6XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzogJ2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlJyxcbiAgICAnW2F0dHIuZGF0YS1jb250cm9sLXR5cGVdJzogJ2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5yZWFkT25seScsXG4gICAgJ1tjbGFzcy5oaWRkZW5dJzogJ2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmhpZGRlbicsXG4gICAgJ1thdHRyLmRhdGEtY29udHJvbC1rZXldJzogJ2NvbnRyb2wua2V5JyxcbiAgICAnW2NsYXNzLmlubGluZS1lbWJlZGRlZF0nOiAnY29udHJvbC5pc0lubGluZUVtYmVkZGVkJyxcbiAgICAnW2NsYXNzLmVtYmVkZGVkXSc6ICdjb250cm9sLmlzRW1iZWRkZWQnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ29udHJvbEVsZW1lbnQgZXh0ZW5kcyBPdXRzaWRlQ2xpY2sgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBJbnB1dCgpXG4gIGNvbnRyb2w6IGFueTtcbiAgQElucHV0KClcbiAgZm9ybTogYW55O1xuICBASW5wdXQoKVxuICBjb25kZW5zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgYXV0b0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZWRpdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBzYXZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGRlbGV0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICB1cGxvYWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCdibHVyJylcbiAgZ2V0IG9uQmx1cigpOiBPYnNlcnZhYmxlPEZvY3VzRXZlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5fYmx1ckVtaXR0ZXIuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBAT3V0cHV0KCdmb2N1cycpXG4gIGdldCBvbkZvY3VzKCk6IE9ic2VydmFibGU8Rm9jdXNFdmVudD4ge1xuICAgIHJldHVybiB0aGlzLl9mb2N1c0VtaXR0ZXIuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbiAgcHVibGljIG1heExlbmd0aDogbnVtYmVyO1xuICBwdWJsaWMgZm9jdXNlZEZpZWxkOiBzdHJpbmc7XG4gIGZvcm1hdHRlZFZhbHVlOiBzdHJpbmcgPSAnJztcbiAgcGVyY2VudFZhbHVlOiBudW1iZXI7XG4gIG1heExlbmd0aE1ldDogYm9vbGVhbiA9IGZhbHNlO1xuICBpdGVtQ291bnQ6IG51bWJlciA9IDA7XG4gIG1hc2tPcHRpb25zOiBJTWFza09wdGlvbnM7XG5cbiAgcHJpdmF0ZSBfYmx1ckVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgcHJpdmF0ZSBfZm9jdXNFbWl0dGVyOiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIHByaXZhdGUgX2ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZW50ZXJlZFRleHQ6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIGZvcmNlQ2xlYXJTdWJzY3JpcHRpb246IGFueTtcbiAgcHJpdmF0ZSBwZXJjZW50Q2hhbmdlU3Vic2NyaXB0aW9uOiBhbnk7XG4gIHByaXZhdGUgdmFsdWVDaGFuZ2VTdWJzY3JpcHRpb246IGFueTtcbiAgcHJpdmF0ZSBkYXRlQ2hhbmdlU3Vic2NyaXB0aW9uOiBhbnk7XG4gIHByaXZhdGUgX3Nob3dDb3VudDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGNoYXJhY3RlckNvdW50RmllbGQ6IHN0cmluZztcbiAgcHJpdmF0ZSBtYXhMZW5ndGhNZXRFcnJvcmZpZWxkczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBzdGF0dXNDaGFuZ2VTdWJzY3JpcHRpb246IGFueTtcblxuICB0ZW1wbGF0ZXM6IGFueSA9IHt9O1xuICB0ZW1wbGF0ZUNvbnRleHQ6IGFueTtcbiAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSxcbiAgICBwcml2YXRlIGRhdGVGb3JtYXRTZXJ2aWNlOiBEYXRlRm9ybWF0U2VydmljZSxcbiAgICBwcml2YXRlIGZpZWxkSW50ZXJhY3Rpb25BcGk6IEZpZWxkSW50ZXJhY3Rpb25BcGksXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVNlcnZpY2U6IE5vdm9UZW1wbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlOiBzdHJpbmcgPSAnZW4tVVMnLFxuICApIHtcbiAgICBzdXBlcihlbGVtZW50KTtcbiAgfVxuXG4gIGdldCBtYXhsZW5ndGhNZXRGaWVsZCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLm1heExlbmd0aE1ldEVycm9yZmllbGRzICYmIHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXhMZW5ndGhNZXRFcnJvcmZpZWxkcy5maW5kKChmaWVsZDogc3RyaW5nKSA9PiBmaWVsZCA9PT0gdGhpcy5mb2N1c2VkRmllbGQpIHx8ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1heGxlbmd0aEVycm9yRmllbGQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5lcnJvcnMgJiYgdGhpcy5lcnJvcnMubWF4bGVuZ3RoRmllbGRzICYmIHRoaXMuZXJyb3JzLm1heGxlbmd0aEZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9ycy5tYXhsZW5ndGhGaWVsZHMuZmluZCgoZmllbGQ6IHN0cmluZykgPT4gZmllbGQgPT09IHRoaXMuZm9jdXNlZEZpZWxkKSB8fCAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzaG93RmllbGRNZXNzYWdlKCkge1xuICAgIHJldHVybiAhdGhpcy5lcnJvcnMgJiYgIXRoaXMubWF4TGVuZ3RoTWV0ICYmIEhlbHBlcnMuaXNCbGFuayh0aGlzLmNvbnRyb2wuZGVzY3JpcHRpb24pO1xuICB9XG5cbiAgZ2V0IHNob3dNYXhMZW5ndGhNZXRNZXNzYWdlKCkge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5pc0RpcnR5ICYmIHRoaXMubWF4TGVuZ3RoTWV0ICYmIHRoaXMuZm9jdXNlZCAmJiAoIXRoaXMuZXJyb3JzIHx8ICh0aGlzLmVycm9ycyAmJiAhdGhpcy5lcnJvcnMubWF4bGVuZ3RoKSkpIHx8XG4gICAgICAodGhpcy5pc0RpcnR5ICYmXG4gICAgICAgIHRoaXMubWF4bGVuZ3RoTWV0RmllbGQgJiZcbiAgICAgICAgdGhpcy5mb2N1c2VkICYmXG4gICAgICAgICghdGhpcy5lcnJvcnMgfHwgKHRoaXMuZXJyb3JzICYmICF0aGlzLmVycm9ycy5tYXhsZW5ndGhGaWVsZHMuaW5jbHVkZXModGhpcy5tYXhsZW5ndGhNZXRGaWVsZCkpKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0IHNob3dFcnJvclN0YXRlKCkge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5pc0RpcnR5ICYmIHRoaXMuZXJyb3JzKSB8fFxuICAgICAgKHRoaXMuZm9jdXNlZCAmJiB0aGlzLmVycm9ycyAmJiB0aGlzLmVycm9ycy5tYXhsZW5ndGggJiYgdGhpcy5lcnJvcnMubWF4bGVuZ3RoRmllbGRzKSB8fFxuICAgICAgKHRoaXMuZm9jdXNlZCAmJiB0aGlzLmVycm9ycyAmJiB0aGlzLmVycm9ycy5tYXhsZW5ndGggJiYgdGhpcy5lcnJvcnMubWF4bGVuZ3RoRmllbGRzICYmIHRoaXMubWF4bGVuZ3RoRXJyb3JGaWVsZClcbiAgICApO1xuICB9XG5cbiAgZ2V0IHNob3dDb3VudCgpIHtcbiAgICBjb25zdCBNQVhfTEVOR1RIX0NPTlRST0xfVFlQRVM6IHN0cmluZ1tdID0gWyd0ZXh0Ym94JywgJ3BpY2tlcicsICd0ZXh0LWFyZWEnXTtcbiAgICBjb25zdCBjaGFyQ291bnQ6IGJvb2xlYW4gPVxuICAgICAgdGhpcy5mb2N1c2VkICYmXG4gICAgICAhIXRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGggJiZcbiAgICAgIE1BWF9MRU5HVEhfQ09OVFJPTF9UWVBFUy5pbmNsdWRlcyh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUpO1xuICAgIHJldHVybiB0aGlzLl9zaG93Q291bnQgfHwgY2hhckNvdW50O1xuICB9XG5cbiAgc2V0IHNob3dDb3VudCh2YWx1ZSkge1xuICAgIHRoaXMuX3Nob3dDb3VudCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNob3dNZXNzYWdlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zaG93Q291bnQgfHxcbiAgICAgICFIZWxwZXJzLmlzRW1wdHkodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLndhcm5pbmcpIHx8XG4gICAgICAhSGVscGVycy5pc0VtcHR5KHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5kZXNjcmlwdGlvbilcbiAgICApO1xuICB9XG5cbiAgZ2V0IGRlY2ltYWxTZXBhcmF0b3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KHRoaXMubG9jYWxlKS5mb3JtYXQoMS4yKVsxXTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBET19OT1RfRk9DVVNfTUU6IHN0cmluZ1tdID0gWydwaWNrZXInLCAndGltZScsICdkYXRlJywgJ2RhdGUtdGltZSddO1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyAmJiAhRE9fTk9UX0ZPQ1VTX01FLmluY2x1ZGVzKHRoaXMuY29udHJvbC5jb250cm9sVHlwZSkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gU3Vic2NyaWJlIHRvIGNvbnRyb2wgaW50ZXJhY3Rpb25zXG4gICAgaWYgKHRoaXMuY29udHJvbC5pbnRlcmFjdGlvbnMgJiYgIXRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBmb3IgKGNvbnN0IGludGVyYWN0aW9uIG9mIHRoaXMuY29udHJvbC5pbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgc3dpdGNoIChpbnRlcmFjdGlvbi5ldmVudCkge1xuICAgICAgICAgIGNhc2UgJ2JsdXInOlxuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMub25CbHVyLnBpcGUoZGVib3VuY2VUaW1lKDMwMCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZm9jdXMnOlxuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMub25Gb2N1cy5waXBlKGRlYm91bmNlVGltZSgzMDApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NoYW5nZSc6XG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlQ2hhbmdlcy5waXBlKGRlYm91bmNlVGltZSgzMDApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2luaXQnOlxuICAgICAgICAgICAgaW50ZXJhY3Rpb24uaW52b2tlT25Jbml0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW50ZXJhY3Rpb24uaW52b2tlT25Jbml0KSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5leGVjdXRlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudGVtcGxhdGVzID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuZ2V0QWxsKCk7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIC8vIE1ha2Ugc3VyZSB0byBpbml0aWFsbHkgZm9ybWF0IHRoZSB0aW1lIGNvbnRyb2xzXG4gICAgaWYgKHRoaXMuY29udHJvbCAmJiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsdWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAndGV4dGJveCcgfHxcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAndGV4dC1hcmVhJ1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMuaXRlbUNvdW50ID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuY29udHJvbCkge1xuICAgICAgLy8gTGlzdGVuIHRvIGNsZWFyIGV2ZW50c1xuICAgICAgdGhpcy5mb3JjZUNsZWFyU3Vic2NyaXB0aW9uID0gdGhpcy5jb250cm9sLmZvcmNlQ2xlYXIuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jbGVhclZhbHVlKCk7XG4gICAgICB9KTtcbiAgICAgIC8vIEZvciBBc3luY2hyb25vdXMgdmFsaWRhdGlvbnNcbiAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKCh2YWxpZGl0eSkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0gPSB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQ7XG4gICAgICAgIGlmICh2YWxpZGl0eSAhPT0gJ1BFTkRJTkcnICYmIHRoaXMuZm9ybS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KSB7XG4gICAgICAgICAgdGhpcy5mb3JtLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0ID0ge1xuICAgICAgJGltcGxpY2l0OiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIHJlc3RyaWN0S2V5czogdGhpcy5yZXN0cmljdEtleXMuYmluZCh0aGlzKSxcbiAgICAgICAgZW1pdENoYW5nZTogdGhpcy5lbWl0Q2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZUZvY3VzOiB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZVBlcmNlbnRDaGFuZ2U6IHRoaXMuaGFuZGxlUGVyY2VudENoYW5nZS5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVCbHVyOiB0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlVGV4dEFyZWFJbnB1dDogdGhpcy5oYW5kbGVUZXh0QXJlYUlucHV0LmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZUVkaXQ6IHRoaXMuaGFuZGxlRWRpdC5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVTYXZlOiB0aGlzLmhhbmRsZVNhdmUuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlRGVsZXRlOiB0aGlzLmhhbmRsZURlbGV0ZS5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVVcGxvYWQ6IHRoaXMuaGFuZGxlVXBsb2FkLmJpbmQodGhpcyksXG4gICAgICAgIG1vZGVsQ2hhbmdlOiB0aGlzLm1vZGVsQ2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgIG1vZGVsQ2hhbmdlV2l0aFJhdzogdGhpcy5tb2RlbENoYW5nZVdpdGhSYXcuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlQWRkcmVzc0NoYW5nZTogdGhpcy5oYW5kbGVBZGRyZXNzQ2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZVR5cGluZzogdGhpcy5oYW5kbGVUeXBpbmcuYmluZCh0aGlzKSxcbiAgICAgICAgdXBkYXRlVmFsaWRpdHk6IHRoaXMudXBkYXRlVmFsaWRpdHkuYmluZCh0aGlzKSxcbiAgICAgICAgdG9nZ2xlQWN0aXZlOiB0aGlzLnRvZ2dsZUFjdGl2ZS5iaW5kKHRoaXMpLFxuICAgICAgICB2YWxpZGF0ZUludGVnZXJJbnB1dDogdGhpcy52YWxpZGF0ZUludGVnZXJJbnB1dC5iaW5kKHRoaXMpLFxuICAgICAgICB2YWxpZGF0ZU51bWJlck9uQmx1cjogdGhpcy52YWxpZGF0ZU51bWJlck9uQmx1ci5iaW5kKHRoaXMpLFxuICAgICAgfSxcbiAgICAgIGZvcm06IHRoaXMuZm9ybSxcbiAgICB9O1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC50b29sdGlwUG9zaXRpb24gPSB0aGlzLnRvb2x0aXBQb3NpdGlvbjtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQudG9vbHRpcCA9IHRoaXMudG9vbHRpcDtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQudG9vbHRpcFNpemUgPSB0aGlzLnRvb2x0aXBTaXplO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC50b29sdGlwUHJlbGluZSA9IHRoaXMudG9vbHRpcFByZWxpbmU7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnJlbW92ZVRvb2x0aXBBcnJvdyA9IHRoaXMucmVtb3ZlVG9vbHRpcEFycm93O1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5zdGFydHVwRm9jdXMgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc3RhcnR1cEZvY3VzO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5maWxlQnJvd3NlckltYWdlVXBsb2FkVXJsID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmw7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0Lm1pbmltYWwgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWluaW1hbDtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQuY3VycmVuY3lGb3JtYXQgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY3VycmVuY3lGb3JtYXQ7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnBlcmNlbnRWYWx1ZSA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5wZXJjZW50VmFsdWU7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LmNvbmZpZyA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb25maWc7XG5cbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldICYmIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zdWJUeXBlID09PSAncGVyY2VudGFnZScpIHtcbiAgICAgIGlmICghSGVscGVycy5pc0VtcHR5KHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWx1ZSkpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnBlcmNlbnRWYWx1ZSA9IE51bWJlcihcbiAgICAgICAgICAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlICogMTAwKS50b0ZpeGVkKDYpLnJlcGxhY2UoL1xcLj8wKiQvLCAnJyksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLnBlcmNlbnRDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uZGlzcGxheVZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICghSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5wZXJjZW50VmFsdWUgPSBOdW1iZXIoKHZhbHVlICogMTAwKS50b0ZpeGVkKDYpLnJlcGxhY2UoL1xcLj8wKiQvLCAnJykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBVbnN1YnNjcmliZSBmcm9tIGNvbnRyb2wgaW50ZXJhY3Rpb25zXG4gICAgaWYgKHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgLy8gaWYgKHRoaXMuZGF0ZUNoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgIC8vICAgICB0aGlzLmRhdGVDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAvLyB9XG4gICAgaWYgKHRoaXMuZm9yY2VDbGVhclN1YnNjcmlwdGlvbikge1xuICAgICAgLy8gVW4tbGlzdGVuIGZvciBjbGVhciBldmVudHNcbiAgICAgIHRoaXMuZm9yY2VDbGVhclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wZXJjZW50Q2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICAvLyBVbi1saXN0ZW4gZm9yIGNsZWFyIGV2ZW50c1xuICAgICAgdGhpcy5wZXJjZW50Q2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGVDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZGF0ZUNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0dXNDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gIH1cblxuICBnZXQgZXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uZXJyb3JzO1xuICB9XG5cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWxpZDtcbiAgfVxuXG4gIGdldCBpc0RpcnR5KCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uZGlydHkgfHwgdGhpcy5jb250cm9sLmRpcnR5O1xuICB9XG5cbiAgZ2V0IGhhc1ZhbHVlKCkge1xuICAgIHJldHVybiAhSGVscGVycy5pc0VtcHR5KHRoaXMuZm9ybS52YWx1ZVt0aGlzLmNvbnRyb2wua2V5XSk7XG4gIH1cblxuICBnZXQgZm9jdXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNlZDtcbiAgfVxuXG4gIGdldCB0b29sdGlwKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udG9vbHRpcDtcbiAgfVxuXG4gIGdldCB0b29sdGlwUG9zaXRpb24oKSB7XG4gICAgaWYgKEhlbHBlcnMuaXNCbGFuayh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udG9vbHRpcFBvc2l0aW9uKSkge1xuICAgICAgcmV0dXJuICdyaWdodCc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udG9vbHRpcFBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0IHRvb2x0aXBTaXplKCkge1xuICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBTaXplKSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBTaXplO1xuICB9XG5cbiAgZ2V0IHRvb2x0aXBQcmVsaW5lKCkge1xuICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBQcmVsaW5lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBQcmVsaW5lO1xuICB9XG5cbiAgZ2V0IHJlbW92ZVRvb2x0aXBBcnJvdygpIHtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZW1vdmVUb29sdGlwQXJyb3cpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmVtb3ZlVG9vbHRpcEFycm93O1xuICB9XG5cbiAgZ2V0IGFsd2F5c0FjdGl2ZSgpIHtcbiAgICAvLyBDb250cm9scyB0aGF0IGhhdmUgdGhlIGxhYmVsIGFjdGl2ZSBpZiB0aGVyZSBpcyBhbnkgdXNlciBlbnRlcmVkIHRleHQgaW4gdGhlIGZpZWxkXG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3BpY2tlcicgJiYgdGhpcy5fZW50ZXJlZFRleHQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDb250cm9scyB0aGF0IGFsd2F5cyBoYXZlIHRoZSBsYWJlbCBhY3RpdmVcbiAgICByZXR1cm4gKFxuICAgICAgW1xuICAgICAgICAndGlsZXMnLFxuICAgICAgICAnY2hlY2tsaXN0JyxcbiAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgJ2RhdGUnLFxuICAgICAgICAndGltZScsXG4gICAgICAgICdkYXRlLXRpbWUnLFxuICAgICAgICAnYWRkcmVzcycsXG4gICAgICAgICdmaWxlJyxcbiAgICAgICAgJ2VkaXRvcicsXG4gICAgICAgICdhY2UtZWRpdG9yJyxcbiAgICAgICAgJ3JhZGlvJyxcbiAgICAgICAgJ3RleHQtYXJlYScsXG4gICAgICAgICdxdWljay1ub3RlJyxcbiAgICAgIF0uaW5kZXhPZih0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUpICE9PSAtMVxuICAgICk7XG4gIH1cblxuICBnZXQgcmVxdWlyZXNFeHRyYVNwYWNpbmcoKSB7XG4gICAgLy8gQ2hpcHNcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAncGlja2VyJyAmJiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubXVsdGlwbGUgJiYgdGhpcy5oYXNWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGV4ZWN1dGVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbikge1xuICAgIGlmIChpbnRlcmFjdGlvbi5zY3JpcHQgJiYgSGVscGVycy5pc0Z1bmN0aW9uKGludGVyYWN0aW9uLnNjcmlwdCkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpZWxkSW50ZXJhY3Rpb25BcGkuZm9ybSA9IHRoaXMuZm9ybTtcbiAgICAgICAgdGhpcy5maWVsZEludGVyYWN0aW9uQXBpLmN1cnJlbnRLZXkgPSB0aGlzLmNvbnRyb2wua2V5O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGludGVyYWN0aW9uLnNjcmlwdCh0aGlzLmZpZWxkSW50ZXJhY3Rpb25BcGksIHRoaXMuY29udHJvbC5rZXkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmluZm8oJ0ZpZWxkIEludGVyYWN0aW9uIEVycm9yIScsIHRoaXMuY29udHJvbC5rZXkpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVR5cGluZyhldmVudDogYW55KSB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IGV2ZW50ICYmIGV2ZW50Lmxlbmd0aDtcbiAgICB0aGlzLl9lbnRlcmVkVGV4dCA9IGV2ZW50O1xuICB9XG5cbiAgaGFuZGxlRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQsIGZpZWxkPzogYW55KSB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gICAgdGhpcy5mb2N1c2VkRmllbGQgPSBmaWVsZDtcbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayh0aGlzLmNoYXJhY3RlckNvdW50RmllbGQpICYmIHRoaXMuY2hhcmFjdGVyQ291bnRGaWVsZCA9PT0gZmllbGQpIHtcbiAgICAgIHRoaXMuc2hvd0NvdW50ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAnYWRkcmVzcycgJiZcbiAgICAgIGZpZWxkICYmXG4gICAgICAhSGVscGVycy5pc0VtcHR5KHRoaXMuZm9ybS52YWx1ZVt0aGlzLmNvbnRyb2wua2V5XSkgJiZcbiAgICAgICFIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLnZhbHVlW3RoaXMuY29udHJvbC5rZXldW2ZpZWxkXSlcbiAgICApIHtcbiAgICAgIHRoaXMuaGFuZGxlQWRkcmVzc0NoYW5nZSh7IHZhbHVlOiB0aGlzLmZvcm0udmFsdWVbdGhpcy5jb250cm9sLmtleV1bZmllbGRdLCBmaWVsZCB9KTtcbiAgICB9XG4gICAgdGhpcy5fZm9jdXNFbWl0dGVyLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgaGFuZGxlQmx1cihldmVudDogRm9jdXNFdmVudCkge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvY3VzZWRGaWVsZCA9ICcnO1xuICAgIHRoaXMuc2hvd0NvdW50ID0gZmFsc2U7XG4gICAgdGhpcy5fYmx1ckVtaXR0ZXIuZW1pdChldmVudCk7XG4gIH1cblxuICBjbGVhclZhbHVlKCkge1xuICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zZXRWYWx1ZShudWxsKTtcbiAgICB0aGlzLmZvcm1hdHRlZFZhbHVlID0gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZVRleHRBcmVhSW5wdXQoZXZlbnQpIHtcbiAgICB0aGlzLmVtaXRDaGFuZ2UoZXZlbnQpO1xuICAgIHRoaXMucmVzdHJpY3RLZXlzKGV2ZW50KTtcbiAgfVxuXG4gIGNoZWNrTWF4TGVuZ3RoKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY29udHJvbCAmJiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWF4bGVuZ3RoKSB7XG4gICAgICB0aGlzLml0ZW1Db3VudCA9IGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGg7XG4gICAgICB0aGlzLm1heExlbmd0aE1ldCA9IGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPj0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aDtcbiAgICB9XG4gIH1cblxuICBtb2RlbENoYW5nZVdpdGhSYXcoZXZlbnQpIHtcbiAgICBpZiAoSGVscGVycy5pc0VtcHR5KGV2ZW50LnZhbHVlKSkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW50ZXJlZFRleHQgPSAnJztcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3BpY2tlcicgJiYgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCkge1xuICAgICAgdGhpcy5pdGVtQ291bnQgPSBldmVudC52YWx1ZSA/IGV2ZW50LnZhbHVlLmxlbmd0aCA6IDA7XG4gICAgICB0aGlzLm1heExlbmd0aE1ldCA9IHRoaXMuaXRlbUNvdW50ID49IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGggPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yYXdWYWx1ZSA9IGV2ZW50LnJhd1ZhbHVlO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQudmFsdWUpO1xuICB9XG5cbiAgbW9kZWxDaGFuZ2UodmFsdWUpIHtcbiAgICBpZiAoSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW50ZXJlZFRleHQgPSAnJztcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICB2YWxpZGF0ZU51bWJlck9uQmx1cihldmVudDogRm9jdXNFdmVudCkge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvY3VzZWRGaWVsZCA9ICcnO1xuICAgIHRoaXMuc2hvd0NvdW50ID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zdWJUeXBlID09PSAnbnVtYmVyJykge1xuICAgICAgdGhpcy52YWxpZGF0ZUludGVnZXJJbnB1dCgpO1xuICAgIH1cbiAgICB0aGlzLl9ibHVyRW1pdHRlci5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHZhbGlkYXRlSW50ZWdlcklucHV0KCkge1xuICAgIGNvbnN0IE5VTUJFUlNfT05MWSA9IC9eW1xcZFxcLV1cXGQqJC87XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWx1ZSAmJiAhTlVNQkVSU19PTkxZLnRlc3QodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlKSkge1xuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1hcmtBc0ludmFsaWQoXG4gICAgICAgIGAke3RoaXMubGFiZWxzLmludmFsaWRJbnRlZ2VySW5wdXR9ICR7dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmxhYmVsLnRvVXBwZXJDYXNlKCl9YCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVzdHJpY3RLZXlzKGV2ZW50KSB7XG4gICAgY29uc3QgTlVNQkVSU19PTkxZID0gL1swLTlcXC1dLztcbiAgICBjb25zdCBOVU1CRVJTX1dJVEhfREVDSU1BTF9ET1QgPSAvWzAtOVxcLlxcLV0vO1xuICAgIGNvbnN0IE5VTUJFUlNfV0lUSF9ERUNJTUFMX0RPVF9BTkRfQ09NTUEgPSAvWzAtOVxcLlxcLFxcLV0vO1xuICAgIGNvbnN0IFVUSUxJVFlfS0VZUyA9IFsnQmFja3NwYWNlJywgJ0RlbGV0ZScsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICdUYWInXTtcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXk7XG5cbiAgICAvLyBOdW1iZXJzIG9yIG51bWJlcnMgYW5kIGRlY2ltYWwgY2hhcmFjdGVycyBvbmx5XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zdWJUeXBlID09PSAnbnVtYmVyJyAmJiAhKE5VTUJFUlNfT05MWS50ZXN0KGtleSkgfHwgVVRJTElUWV9LRVlTLmluY2x1ZGVzKGtleSkpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBbJ2N1cnJlbmN5JywgJ2Zsb2F0JywgJ3BlcmNlbnRhZ2UnXS5pbmNsdWRlcyh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc3ViVHlwZSkgJiZcbiAgICAgICEoXG4gICAgICAgICh0aGlzLmRlY2ltYWxTZXBhcmF0b3IgPT09ICcuJyAmJiBOVU1CRVJTX1dJVEhfREVDSU1BTF9ET1QudGVzdChrZXkpKSB8fFxuICAgICAgICAodGhpcy5kZWNpbWFsU2VwYXJhdG9yID09PSAnLCcgJiYgTlVNQkVSU19XSVRIX0RFQ0lNQUxfRE9UX0FORF9DT01NQS50ZXN0KGtleSkpIHx8XG4gICAgICAgIFVUSUxJVFlfS0VZUy5pbmNsdWRlcyhrZXkpXG4gICAgICApXG4gICAgKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICAvLyBNYXggTGVuZ3RoXG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGggJiYgZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA+PSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWF4bGVuZ3RoKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVBlcmNlbnRDaGFuZ2UoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldFsndmFsdWUnXTtcbiAgICBjb25zdCBwZXJjZW50ID0gSGVscGVycy5pc0VtcHR5KHZhbHVlKSA/IG51bGwgOiBOdW1iZXIoKHZhbHVlIC8gMTAwKS50b0ZpeGVkKDYpLnJlcGxhY2UoL1xcLj8wKiQvLCAnJykpO1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KHBlcmNlbnQpKSB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHBlcmNlbnQpO1xuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnNldFZhbHVlKHBlcmNlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KG51bGwpO1xuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnNldFZhbHVlKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVRhYkZvclBpY2tlcnMoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZSAmJiBldmVudCAmJiBldmVudC5rZXlDb2RlKSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRVNDIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlRBQikge1xuICAgICAgICB0aGlzLnRvZ2dsZUFjdGl2ZShldmVudCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtaXRDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLmNoZWNrTWF4TGVuZ3RoKHZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZUVkaXQodmFsdWUpIHtcbiAgICB0aGlzLmVkaXQuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVTYXZlKHZhbHVlKSB7XG4gICAgdGhpcy5zYXZlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlRGVsZXRlKHZhbHVlKSB7XG4gICAgdGhpcy5kZWxldGUuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVVcGxvYWQodmFsdWUpIHtcbiAgICB0aGlzLnVwbG9hZC5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZUFkZHJlc3NDaGFuZ2UoZGF0YSkge1xuICAgIGlmIChcbiAgICAgIGRhdGEgJiZcbiAgICAgICFIZWxwZXJzLmlzQmxhbmsoZGF0YS52YWx1ZSkgJiZcbiAgICAgIGRhdGEuZmllbGQgJiZcbiAgICAgIHRoaXMuY29udHJvbC5jb25maWdbZGF0YS5maWVsZF0gJiZcbiAgICAgICFIZWxwZXJzLmlzRW1wdHkodGhpcy5jb250cm9sLmNvbmZpZ1tkYXRhLmZpZWxkXS5tYXhsZW5ndGgpXG4gICAgKSB7XG4gICAgICB0aGlzLml0ZW1Db3VudCA9IGRhdGEudmFsdWUubGVuZ3RoO1xuICAgICAgdGhpcy5jaGFyYWN0ZXJDb3VudEZpZWxkID0gZGF0YS5maWVsZDtcbiAgICAgIHRoaXMubWF4TGVuZ3RoID0gdGhpcy5jb250cm9sLmNvbmZpZ1tkYXRhLmZpZWxkXS5tYXhsZW5ndGg7XG4gICAgICB0aGlzLnNob3dDb3VudCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5tYXhMZW5ndGggPT09IHRoaXMuaXRlbUNvdW50KSB7XG4gICAgICAgIHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMucHVzaChkYXRhLmZpZWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMgPSB0aGlzLm1heExlbmd0aE1ldEVycm9yZmllbGRzLmZpbHRlcigoZmllbGQ6IHN0cmluZykgPT4gZmllbGQgIT09IGRhdGEuZmllbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVZhbGlkaXR5KHNob3VsZEV2ZW50QmVFbWl0dGVkKTogdm9pZCB7XG4gICAgY29uc3QgZW1pdEV2ZW50OiBib29sZWFuID0gc2hvdWxkRXZlbnRCZUVtaXR0ZWQgPyB0cnVlIDogZmFsc2U7XG4gICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQgfSk7XG4gIH1cbn1cbiJdfQ==