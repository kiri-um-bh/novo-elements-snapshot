/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { ChangeDetectorRef, Component, Input, Output, ElementRef, EventEmitter, Directive, HostListener, LOCALE_ID, Inject, } from '@angular/core';
// Vendor
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
        setTimeout(function () {
            _this.adjust();
        });
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
        _this.characterCount = 0;
        _this._blurEmitter = new EventEmitter();
        _this._focusEmitter = new EventEmitter();
        _this._focused = false;
        _this._enteredText = '';
        _this._showCount = false;
        _this.maxLengthMetErrorfields = [];
        _this.templates = {};
        _this.loading = false;
        _this.decimalSeparator = '.';
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
                return this.maxLengthMetErrorfields.find(function (field) { return field === _this.focusedField; }) || '';
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
                return this.errors.maxlengthFields.find(function (field) { return field === _this.focusedField; }) || '';
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
            var charCount = this.form.controls[this.control.key].maxlength &&
                this.focused &&
                (this.form.controls[this.control.key].controlType === 'text-area' || this.form.controls[this.control.key].controlType === 'textbox');
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
            return this.showCount || !Helpers.isEmpty(this.form.controls[this.control.key].warning) || !Helpers.isEmpty(this.form.controls[this.control.key].description);
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
            setTimeout(function () {
                /** @type {?} */
                var input = _this.element.nativeElement.querySelector('input');
                if (input) {
                    input.focus();
                }
            });
        }
    };
    /**
     * @return {?}
     */
    NovoControlElement.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var e_1, _a;
        // Subscribe to control interactions
        if (this.control.interactions && !this.form.controls[this.control.key].restrictFieldInteractions) {
            var _loop_1 = function (interaction) {
                switch (interaction.event) {
                    case 'blur':
                        this_1.valueChangeSubscription = this_1.onBlur.pipe(debounceTime(300)).subscribe(function () {
                            if (!_this.form.controls[_this.control.key].restrictFieldInteractions) {
                                _this.executeInteraction(interaction);
                            }
                        });
                        break;
                    case 'focus':
                        this_1.valueChangeSubscription = this_1.onFocus.pipe(debounceTime(300)).subscribe(function () {
                            if (!_this.form.controls[_this.control.key].restrictFieldInteractions) {
                                _this.executeInteraction(interaction);
                            }
                        });
                        break;
                    case 'change':
                        this_1.valueChangeSubscription = this_1.form.controls[this_1.control.key].valueChanges.pipe(debounceTime(300)).subscribe(function () {
                            if (!_this.form.controls[_this.control.key].restrictFieldInteractions) {
                                _this.executeInteraction(interaction);
                            }
                        });
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
        setTimeout(function () {
            _this.templates = _this.templateService.getAll();
            _this.loading = false;
            _this.changeDetectorRef.markForCheck();
        });
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
                this.characterCount = this.form.controls[this.control.key].value.length;
            }
        }
        if (this.control) {
            // Listen to clear events
            this.forceClearSubscription = this.control.forceClear.subscribe(function () {
                _this.clearValue();
            });
            // For Asynchronous validations
            this.statusChangeSubscription = this.form.controls[this.control.key].statusChanges.subscribe(function (validity) {
                _this.form.controls[_this.control.key] = _this.templateContext.$implicit;
                if (validity !== 'PENDING' && _this.form.updateValueAndValidity) {
                    _this.form.updateValueAndValidity();
                }
            });
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
            this.percentChangeSubscription = this.form.controls[this.control.key].displayValueChanges.subscribe(function (value) {
                if (!Helpers.isEmpty(value)) {
                    _this.templateContext.$implicit.percentValue = Number((value * 100).toFixed(6).replace(/\.?0*$/, ''));
                }
            });
        }
        this.decimalSeparator = this.getDecimalSeparator();
    };
    /**
     * @return {?}
     */
    NovoControlElement.prototype.getDecimalSeparator = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = new Intl.NumberFormat(this.locale).format(1.2)[1];
        return result;
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
            setTimeout(function () {
                _this.fieldInteractionApi.form = _this.form;
                _this.fieldInteractionApi.currentKey = _this.control.key;
                try {
                    interaction.script(_this.fieldInteractionApi, _this.control.key);
                }
                catch (err) {
                    console.info('Field Interaction Error!', _this.control.key); // tslint:disable-line
                    console.error(err); // tslint:disable-line
                }
            });
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
            this.characterCount = event.target.value.length;
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
        var NUMBERS_WITH_DECIMAL_COMMA = /[0-9\,\-]/;
        /** @type {?} */
        var UTILITY_KEYS = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
        /** @type {?} */
        var key = event.key;
        // Types
        if (this.form.controls[this.control.key].subType === 'number' && !(NUMBERS_ONLY.test(key) || UTILITY_KEYS.includes(key))) {
            event.preventDefault();
        }
        else if (~['currency', 'float', 'percentage'].indexOf(this.form.controls[this.control.key].subType) &&
            !((this.decimalSeparator === '.' && NUMBERS_WITH_DECIMAL_DOT.test(key)) ||
                (this.decimalSeparator === ',' && NUMBERS_WITH_DECIMAL_COMMA.test(key)) ||
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
            this.characterCount = data.value.length;
            this.characterCountField = data.field;
            this.maxLength = this.control.config[data.field].maxlength;
            this.showCount = true;
            if (this.maxLength === this.characterCount) {
                this.maxLengthMetErrorfields.push(data.field);
            }
            else {
                this.maxLengthMetErrorfields = this.maxLengthMetErrorfields.filter(function (field) { return field !== data.field; });
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
                    template: "\n        <div class=\"novo-control-container\" [hidden]=\"form.controls[control.key].hidden || form.controls[control.key].type === 'hidden' || form.controls[control.key].controlType === 'hidden'\">\n            <!--Encrypted Field-->\n            <span [tooltip]=\"labels.encryptedFieldTooltip\" [tooltipPosition]=\"'right'\"><i [hidden]=\"!form.controls[control.key].encrypted\"\n            class=\"bhi-lock\"></i></span>\n            <!--Label (for horizontal)-->\n            <label [attr.for]=\"control.key\" *ngIf=\"form.layout !== 'vertical' && form.controls[control.key].label && !condensed\" [ngClass]=\"{'encrypted': form.controls[control.key].encrypted }\">\n                {{ form.controls[control.key].label }}\n            </label>\n            <div class=\"novo-control-outer-container\">\n                <!--Label (for vertical)-->\n                <label\n                    *ngIf=\"form.layout === 'vertical' && form.controls[control.key].label && !condensed\"\n                    class=\"novo-control-label\"\n                    [attr.for]=\"control.key\"\n                    [class.novo-control-empty]=\"!hasValue\"\n                    [class.novo-control-focused]=\"focused\"\n                    [class.novo-control-filled]=\"hasValue\"\n                    [class.novo-control-always-active]=\"alwaysActive || form.controls[control.key].placeholder\"\n                    [class.novo-control-extra-spacing]=\"requiresExtraSpacing\">\n                    {{ form.controls[control.key].label }}\n                </label>\n                <div class=\"novo-control-inner-container\" [class.required]=\"form.controls[control.key].required && !form.controls[control.key].readOnly\">\n                    <div class=\"novo-control-inner-input-container\" [class.novo-control-filled]=\"hasValue\" [class.novo-control-empty]=\"!hasValue\">\n                      <!--Required Indicator-->\n                        <i [hidden]=\"!form.controls[control.key].required || form.controls[control.key].readOnly\"\n                            class=\"required-indicator {{ form.controls[control.key].controlType }}\"\n                            [ngClass]=\"{'bhi-circle': !isValid, 'bhi-check': isValid}\" *ngIf=\"!condensed || form.controls[control.key].required\">\n                        </i>\n                        <!--Form Controls-->\n                        <div class=\"novo-control-input {{ form.controls[control.key].controlType }}\" [attr.data-automation-id]=\"control.key\" [class.control-disabled]=\"form.controls[control.key].disabled\">\n                            <!--TODO prefix/suffix on the control-->\n                            <ng-container *ngIf=\"templates\">\n                              <ng-container *ngTemplateOutlet=\"templates[form.controls[control.key].controlType]; context: templateContext\"></ng-container>\n                            </ng-container>\n                            <ng-container *ngIf=\"!templates || loading\">\n                                <div class=\"novo-control-input-container novo-control-input-with-label\">\n                                  <input type=\"text\"/>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n                    <!--Error Message-->\n                    <div class=\"field-message {{ form.controls[control.key].controlType }}\" *ngIf=\"!condensed\" [class.has-tip]=\"form.controls[control.key].tipWell\" [ngClass]=\"showErrorState || showMaxLengthMetMessage ? 'error-shown' : 'error-hidden'\">\n                        <div class=\"messages\" [ngClass]=\"showMessages ? 'count-shown messages-shown' : 'count-hidden messages-hidden'\">\n                            <span class=\"error-text\" *ngIf=\"showFieldMessage\"></span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && errors?.required && form.controls[control.key].controlType !== 'address'\">{{ form.controls[control.key].label | uppercase }} {{ labels.isRequired }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && errors?.minlength\">{{ form.controls[control.key].label | uppercase }} {{ labels.minLength }} {{ form.controls[control.key].minlength }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && maxLengthMet && focused && !errors?.maxlength\">{{ labels.maxlengthMet(form.controls[control.key].maxlength) }}</span>\n                            <span class=\"error-text\" *ngIf=\"errors?.maxlength && focused && !errors?.maxlengthFields\">{{ labels.invalidMaxlength(form.controls[control.key].maxlength) }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && errors?.invalidEmail\">{{ form.controls[control.key].label | uppercase }} {{ labels.invalidEmail }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && (errors?.integerTooLarge || errors?.doubleTooLarge)\">{{ form.controls[control.key].label | uppercase }} {{ labels.isTooLarge }}</span>\n                            <span *ngIf=\"isDirty && errors?.minYear\">{{ form.controls[control.key].label | uppercase }} {{ labels.notValidYear }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && (errors?.custom)\">{{ errors.custom }}</span>\n                            <span class=\"error-text\" *ngIf=\"errors?.maxlength && errors?.maxlengthFields && maxlengthErrorField && focused\">\n                                {{ labels.invalidMaxlengthWithField(control.config[maxlengthErrorField]?.label, control.config[maxlengthErrorField]?.maxlength) }}\n                            </span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && maxlengthMetField && focused && !errors?.maxlengthFields?.includes(maxlengthMetField)\">\n                              {{ labels.maxlengthMetWithField(control.config[maxlengthMetField]?.label, control.config[maxlengthMetField]?.maxlength) }}\n                            </span>\n                            <span *ngIf=\"isDirty && errors?.invalidAddress\">\n                                <span class=\"error-text\" *ngFor=\"let invalidAddressField of errors?.invalidAddressFields\">{{ invalidAddressField | uppercase }} {{ labels.isRequired }} </span>\n                            </span>\n                            <!--Field Hint-->\n                            <span class=\"description\" *ngIf=\"form.controls[control.key].description\">\n                                {{ form.controls[control.key].description }}\n                            </span>\n                            <span class=\"warning-text\" *ngIf=\"form.controls[control.key].warning\">{{ form.controls[control.key].warning }}</span>\n\n                        </div>\n                        <span class=\"character-count\" [class.error]=\"((errors?.maxlength && !errors?.maxlengthFields) || (errors?.maxlength && errors?.maxlengthFields && errors.maxlengthFields.includes(focusedField)))\" *ngIf=\"showCount\">{{ characterCount }}/{{ maxLength || form.controls[control.key].maxlength }}</span>\n                    </div>\n                    <!--Tip Wel-->\n                    <novo-tip-well *ngIf=\"form.controls[control.key].tipWell\" [name]=\"control.key\" [tip]=\"form.controls[control.key]?.tipWell?.tip\" [icon]=\"form.controls[control.key]?.tipWell?.icon\" [button]=\"form.controls[control.key]?.tipWell?.button\"></novo-tip-well>\n                </div>\n                <i *ngIf=\"form.controls[control.key].fieldInteractionloading\" class=\"loading\">\n                    <svg version=\"1.1\"\n                     xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n                     x=\"0px\" y=\"0px\" width=\"18.2px\" height=\"18.5px\" viewBox=\"0 0 18.2 18.5\" style=\"enable-background:new 0 0 18.2 18.5;\"\n                     xml:space=\"preserve\">\n                    <style type=\"text/css\">\n                        .spinner { fill:#FFFFFF; }\n                    </style>\n                        <path class=\"spinner\" d=\"M9.2,18.5C4.1,18.5,0,14.4,0,9.2S4.1,0,9.2,0c0.9,0,1.9,0.1,2.7,0.4c0.8,0.2,1.2,1.1,1,1.9\n                            c-0.2,0.8-1.1,1.2-1.9,1C10.5,3.1,9.9,3,9.2,3C5.8,3,3,5.8,3,9.2s2.8,6.2,6.2,6.2c2.8,0,5.3-1.9,6-4.7c0.2-0.8,1-1.3,1.8-1.1\n                            c0.8,0.2,1.3,1,1.1,1.8C17.1,15.7,13.4,18.5,9.2,18.5z\"/>\n                    </svg>\n                </i>\n            </div>\n        </div>\n    ",
                    host: {
                        '[class]': 'form.controls[control.key].controlType',
                        '[attr.data-control-type]': 'form.controls[control.key].controlType',
                        '[class.disabled]': 'form.controls[control.key].readOnly',
                        '[class.hidden]': 'form.controls[control.key].hidden',
                        '[attr.data-control-key]': 'control.key',
                    }
                }] }
    ];
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
    NovoControlElement.prototype.characterCount;
    /** @type {?} */
    NovoControlElement.prototype.maskOptions;
    /** @type {?} */
    NovoControlElement.prototype._blurEmitter;
    /** @type {?} */
    NovoControlElement.prototype._focusEmitter;
    /** @type {?} */
    NovoControlElement.prototype._focused;
    /** @type {?} */
    NovoControlElement.prototype._enteredText;
    /** @type {?} */
    NovoControlElement.prototype.forceClearSubscription;
    /** @type {?} */
    NovoControlElement.prototype.percentChangeSubscription;
    /** @type {?} */
    NovoControlElement.prototype.valueChangeSubscription;
    /** @type {?} */
    NovoControlElement.prototype.dateChangeSubscription;
    /** @type {?} */
    NovoControlElement.prototype._showCount;
    /** @type {?} */
    NovoControlElement.prototype.characterCountField;
    /** @type {?} */
    NovoControlElement.prototype.maxLengthMetErrorfields;
    /** @type {?} */
    NovoControlElement.prototype.statusChangeSubscription;
    /** @type {?} */
    NovoControlElement.prototype.templates;
    /** @type {?} */
    NovoControlElement.prototype.templateContext;
    /** @type {?} */
    NovoControlElement.prototype.loading;
    /** @type {?} */
    NovoControlElement.prototype.decimalSeparator;
    /** @type {?} */
    NovoControlElement.prototype.labels;
    /** @type {?} */
    NovoControlElement.prototype.dateFormatService;
    /** @type {?} */
    NovoControlElement.prototype.fieldInteractionApi;
    /** @type {?} */
    NovoControlElement.prototype.templateService;
    /** @type {?} */
    NovoControlElement.prototype.changeDetectorRef;
    /** @type {?} */
    NovoControlElement.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0NvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsWUFBWSxFQUdaLFNBQVMsRUFDVCxZQUFZLEVBR1osU0FBUyxFQUNULE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7QUFFbEYsa0NBSUM7OztJQUhDLDRCQUFVOztJQUNWLHlDQUEyQjs7SUFDM0IsNkJBQWU7O0FBR2pCO0lBU0Usc0JBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7SUFBRyxDQUFDOzs7OztJQUoxQyw4QkFBTzs7OztJQURQLFVBQ1EsUUFBNkI7UUFDbkMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFJRCx5Q0FBa0I7OztJQUFsQjtRQUFBLGlCQUlDO1FBSEMsVUFBVSxD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Q3JCLHFDQUF5Qjs7SUFDekIsOENBQStCOztJQUk3QixvQ0FBK0I7O0lBQy9CLCtDQUE0Qzs7SUFDNUMsaURBQWdEOztJQUNoRCw2Q0FBNEM7O0lBQzVDLCtDQUE0Qzs7SUFDNUMsb0NBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBEaXJlY3RpdmUsXG4gIEhvc3RMaXN0ZW5lcixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgTE9DQUxFX0lELFxuICBJbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Gb3JtR3JvdXAgfSBmcm9tICcuL0Zvcm1JbnRlcmZhY2VzJztcbmltcG9ydCB7IE91dHNpZGVDbGljayB9IGZyb20gJy4uLy4uL3V0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0JztcbmltcG9ydCB7IEZpZWxkSW50ZXJhY3Rpb25BcGkgfSBmcm9tICcuL0ZpZWxkSW50ZXJhY3Rpb25BcGknO1xuaW1wb3J0IHsgTm92b1RlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlL05vdm9UZW1wbGF0ZVNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNYXNrT3B0aW9ucyB7XG4gIG1hc2s6IGFueTtcbiAga2VlcENoYXJQb3NpdGlvbnM6IGJvb2xlYW47XG4gIGd1aWRlOiBib29sZWFuO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd0ZXh0YXJlYVthdXRvc2l6ZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQXV0b1NpemUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudC50YXJnZXQnXSlcbiAgb25JbnB1dCh0ZXh0QXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuYWRqdXN0KCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFkanVzdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRqdXN0KCk6IHZvaWQge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBuYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IG5hdGl2ZUVsZW1lbnQuc3R5bGUubWluSGVpZ2h0O1xuICAgIG5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7bmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHR9cHhgO1xuICB9XG59XG4vLyB1bmRvIGFsbCB0ZW1wbGF0ZSBjb250ZXh0IHJlZmVyZW5jZXMhXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWNvbnRhaW5lclwiIFtoaWRkZW5dPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uaGlkZGVuIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnR5cGUgPT09ICdoaWRkZW4nIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAnaGlkZGVuJ1wiPlxuICAgICAgICAgICAgPCEtLUVuY3J5cHRlZCBGaWVsZC0tPlxuICAgICAgICAgICAgPHNwYW4gW3Rvb2x0aXBdPVwibGFiZWxzLmVuY3J5cHRlZEZpZWxkVG9vbHRpcFwiIFt0b29sdGlwUG9zaXRpb25dPVwiJ3JpZ2h0J1wiPjxpIFtoaWRkZW5dPVwiIWZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmVuY3J5cHRlZFwiXG4gICAgICAgICAgICBjbGFzcz1cImJoaS1sb2NrXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgIDwhLS1MYWJlbCAoZm9yIGhvcml6b250YWwpLS0+XG4gICAgICAgICAgICA8bGFiZWwgW2F0dHIuZm9yXT1cImNvbnRyb2wua2V5XCIgKm5nSWY9XCJmb3JtLmxheW91dCAhPT0gJ3ZlcnRpY2FsJyAmJiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCAmJiAhY29uZGVuc2VkXCIgW25nQ2xhc3NdPVwieydlbmNyeXB0ZWQnOiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5lbmNyeXB0ZWQgfVwiPlxuICAgICAgICAgICAgICAgIHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIH19XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1vdXRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8IS0tTGFiZWwgKGZvciB2ZXJ0aWNhbCktLT5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmb3JtLmxheW91dCA9PT0gJ3ZlcnRpY2FsJyAmJiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCAmJiAhY29uZGVuc2VkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub3ZvLWNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5mb3JdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Mubm92by1jb250cm9sLWVtcHR5XT1cIiFoYXNWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5ub3ZvLWNvbnRyb2wtZm9jdXNlZF09XCJmb2N1c2VkXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLm5vdm8tY29udHJvbC1maWxsZWRdPVwiaGFzVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Mubm92by1jb250cm9sLWFsd2F5cy1hY3RpdmVdPVwiYWx3YXlzQWN0aXZlIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLm5vdm8tY29udHJvbC1leHRyYS1zcGFjaW5nXT1cInJlcXVpcmVzRXh0cmFTcGFjaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIH19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWlubmVyLWNvbnRhaW5lclwiIFtjbGFzcy5yZXF1aXJlZF09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5yZXF1aXJlZCAmJiAhZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ucmVhZE9ubHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1pbm5lci1pbnB1dC1jb250YWluZXJcIiBbY2xhc3Mubm92by1jb250cm9sLWZpbGxlZF09XCJoYXNWYWx1ZVwiIFtjbGFzcy5ub3ZvLWNvbnRyb2wtZW1wdHldPVwiIWhhc1ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLVJlcXVpcmVkIEluZGljYXRvci0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgW2hpZGRlbl09XCIhZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ucmVxdWlyZWQgfHwgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ucmVhZE9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmVxdWlyZWQtaW5kaWNhdG9yIHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlIH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2JoaS1jaXJjbGUnOiAhaXNWYWxpZCwgJ2JoaS1jaGVjayc6IGlzVmFsaWR9XCIgKm5nSWY9XCIhY29uZGVuc2VkIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnJlcXVpcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tRm9ybSBDb250cm9scy0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1pbnB1dCB7eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSB9fVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjb250cm9sLmtleVwiIFtjbGFzcy5jb250cm9sLWRpc2FibGVkXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVRPRE8gcHJlZml4L3N1ZmZpeCBvbiB0aGUgY29udHJvbC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0ZW1wbGF0ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGVdOyBjb250ZXh0OiB0ZW1wbGF0ZUNvbnRleHRcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXRlbXBsYXRlcyB8fCBsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtaW5wdXQtY29udGFpbmVyIG5vdm8tY29udHJvbC1pbnB1dC13aXRoLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLUVycm9yIE1lc3NhZ2UtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLW1lc3NhZ2Uge3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgfX1cIiAqbmdJZj1cIiFjb25kZW5zZWRcIiBbY2xhc3MuaGFzLXRpcF09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS50aXBXZWxsXCIgW25nQ2xhc3NdPVwic2hvd0Vycm9yU3RhdGUgfHwgc2hvd01heExlbmd0aE1ldE1lc3NhZ2UgPyAnZXJyb3Itc2hvd24nIDogJ2Vycm9yLWhpZGRlbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlc1wiIFtuZ0NsYXNzXT1cInNob3dNZXNzYWdlcyA/ICdjb3VudC1zaG93biBtZXNzYWdlcy1zaG93bicgOiAnY291bnQtaGlkZGVuIG1lc3NhZ2VzLWhpZGRlbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cInNob3dGaWVsZE1lc3NhZ2VcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIGVycm9ycz8ucmVxdWlyZWQgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgIT09ICdhZGRyZXNzJ1wiPnt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIHwgdXBwZXJjYXNlIH19IHt7IGxhYmVscy5pc1JlcXVpcmVkIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiaXNEaXJ0eSAmJiBlcnJvcnM/Lm1pbmxlbmd0aFwiPnt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIHwgdXBwZXJjYXNlIH19IHt7IGxhYmVscy5taW5MZW5ndGggfX0ge3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubWlubGVuZ3RoIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiaXNEaXJ0eSAmJiBtYXhMZW5ndGhNZXQgJiYgZm9jdXNlZCAmJiAhZXJyb3JzPy5tYXhsZW5ndGhcIj57eyBsYWJlbHMubWF4bGVuZ3RoTWV0KGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLm1heGxlbmd0aCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJlcnJvcnM/Lm1heGxlbmd0aCAmJiBmb2N1c2VkICYmICFlcnJvcnM/Lm1heGxlbmd0aEZpZWxkc1wiPnt7IGxhYmVscy5pbnZhbGlkTWF4bGVuZ3RoKGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLm1heGxlbmd0aCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIGVycm9ycz8uaW52YWxpZEVtYWlsXCI+e3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgfCB1cHBlcmNhc2UgfX0ge3sgbGFiZWxzLmludmFsaWRFbWFpbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImlzRGlydHkgJiYgKGVycm9ycz8uaW50ZWdlclRvb0xhcmdlIHx8IGVycm9ycz8uZG91YmxlVG9vTGFyZ2UpXCI+e3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgfCB1cHBlcmNhc2UgfX0ge3sgbGFiZWxzLmlzVG9vTGFyZ2UgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJpc0RpcnR5ICYmIGVycm9ycz8ubWluWWVhclwiPnt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIHwgdXBwZXJjYXNlIH19IHt7IGxhYmVscy5ub3RWYWxpZFllYXIgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIChlcnJvcnM/LmN1c3RvbSlcIj57eyBlcnJvcnMuY3VzdG9tIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiZXJyb3JzPy5tYXhsZW5ndGggJiYgZXJyb3JzPy5tYXhsZW5ndGhGaWVsZHMgJiYgbWF4bGVuZ3RoRXJyb3JGaWVsZCAmJiBmb2N1c2VkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhYmVscy5pbnZhbGlkTWF4bGVuZ3RoV2l0aEZpZWxkKGNvbnRyb2wuY29uZmlnW21heGxlbmd0aEVycm9yRmllbGRdPy5sYWJlbCwgY29udHJvbC5jb25maWdbbWF4bGVuZ3RoRXJyb3JGaWVsZF0/Lm1heGxlbmd0aCkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIG1heGxlbmd0aE1ldEZpZWxkICYmIGZvY3VzZWQgJiYgIWVycm9ycz8ubWF4bGVuZ3RoRmllbGRzPy5pbmNsdWRlcyhtYXhsZW5ndGhNZXRGaWVsZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhYmVscy5tYXhsZW5ndGhNZXRXaXRoRmllbGQoY29udHJvbC5jb25maWdbbWF4bGVuZ3RoTWV0RmllbGRdPy5sYWJlbCwgY29udHJvbC5jb25maWdbbWF4bGVuZ3RoTWV0RmllbGRdPy5tYXhsZW5ndGgpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXNEaXJ0eSAmJiBlcnJvcnM/LmludmFsaWRBZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0Zvcj1cImxldCBpbnZhbGlkQWRkcmVzc0ZpZWxkIG9mIGVycm9ycz8uaW52YWxpZEFkZHJlc3NGaWVsZHNcIj57eyBpbnZhbGlkQWRkcmVzc0ZpZWxkIHwgdXBwZXJjYXNlIH19IHt7IGxhYmVscy5pc1JlcXVpcmVkIH19IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLUZpZWxkIEhpbnQtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5kZXNjcmlwdGlvbiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndhcm5pbmctdGV4dFwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ud2FybmluZ1wiPnt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLndhcm5pbmcgfX08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGFyYWN0ZXItY291bnRcIiBbY2xhc3MuZXJyb3JdPVwiKChlcnJvcnM/Lm1heGxlbmd0aCAmJiAhZXJyb3JzPy5tYXhsZW5ndGhGaWVsZHMpIHx8IChlcnJvcnM/Lm1heGxlbmd0aCAmJiBlcnJvcnM/Lm1heGxlbmd0aEZpZWxkcyAmJiBlcnJvcnMubWF4bGVuZ3RoRmllbGRzLmluY2x1ZGVzKGZvY3VzZWRGaWVsZCkpKVwiICpuZ0lmPVwic2hvd0NvdW50XCI+e3sgY2hhcmFjdGVyQ291bnQgfX0ve3sgbWF4TGVuZ3RoIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLm1heGxlbmd0aCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS1UaXAgV2VsLS0+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLXRpcC13ZWxsICpuZ0lmPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0udGlwV2VsbFwiIFtuYW1lXT1cImNvbnRyb2wua2V5XCIgW3RpcF09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XT8udGlwV2VsbD8udGlwXCIgW2ljb25dPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0/LnRpcFdlbGw/Lmljb25cIiBbYnV0dG9uXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldPy50aXBXZWxsPy5idXR0b25cIj48L25vdm8tdGlwLXdlbGw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGkgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5maWVsZEludGVyYWN0aW9ubG9hZGluZ1wiIGNsYXNzPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHhtbG5zOmE9XCJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvXCJcbiAgICAgICAgICAgICAgICAgICAgIHg9XCIwcHhcIiB5PVwiMHB4XCIgd2lkdGg9XCIxOC4ycHhcIiBoZWlnaHQ9XCIxOC41cHhcIiB2aWV3Qm94PVwiMCAwIDE4LjIgMTguNVwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOC4yIDE4LjU7XCJcbiAgICAgICAgICAgICAgICAgICAgIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGlubmVyIHsgZmlsbDojRkZGRkZGOyB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cInNwaW5uZXJcIiBkPVwiTTkuMiwxOC41QzQuMSwxOC41LDAsMTQuNCwwLDkuMlM0LjEsMCw5LjIsMGMwLjksMCwxLjksMC4xLDIuNywwLjRjMC44LDAuMiwxLjIsMS4xLDEsMS45XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy0wLjIsMC44LTEuMSwxLjItMS45LDFDMTAuNSwzLjEsOS45LDMsOS4yLDNDNS44LDMsMyw1LjgsMyw5LjJzMi44LDYuMiw2LjIsNi4yYzIuOCwwLDUuMy0xLjksNi00LjdjMC4yLTAuOCwxLTEuMywxLjgtMS4xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzAuOCwwLjIsMS4zLDEsMS4xLDEuOEMxNy4xLDE1LjcsMTMuNCwxOC41LDkuMiwxOC41elwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6ICdmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZScsXG4gICAgJ1thdHRyLmRhdGEtY29udHJvbC10eXBlXSc6ICdmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZScsXG4gICAgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ucmVhZE9ubHknLFxuICAgICdbY2xhc3MuaGlkZGVuXSc6ICdmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5oaWRkZW4nLFxuICAgICdbYXR0ci5kYXRhLWNvbnRyb2wta2V5XSc6ICdjb250cm9sLmtleScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Db250cm9sRWxlbWVudCBleHRlbmRzIE91dHNpZGVDbGljayBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KClcbiAgY29udHJvbDogYW55O1xuICBASW5wdXQoKVxuICBmb3JtOiBhbnk7XG4gIEBJbnB1dCgpXG4gIGNvbmRlbnNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBhdXRvRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpXG4gIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBlZGl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHNhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZGVsZXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHVwbG9hZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoJ2JsdXInKVxuICBnZXQgb25CbHVyKCk6IE9ic2VydmFibGU8Rm9jdXNFdmVudD4ge1xuICAgIHJldHVybiB0aGlzLl9ibHVyRW1pdHRlci5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIEBPdXRwdXQoJ2ZvY3VzJylcbiAgZ2V0IG9uRm9jdXMoKTogT2JzZXJ2YWJsZTxGb2N1c0V2ZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzRW1pdHRlci5hc09ic2VydmFibGUoKTtcbiAgfVxuICBwdWJsaWMgbWF4TGVuZ3RoOiBudW1iZXI7XG4gIHB1YmxpYyBmb2N1c2VkRmllbGQ6IHN0cmluZztcbiAgZm9ybWF0dGVkVmFsdWU6IHN0cmluZyA9ICcnO1xuICBwZXJjZW50VmFsdWU6IG51bWJlcjtcbiAgbWF4TGVuZ3RoTWV0OiBib29sZWFuID0gZmFsc2U7XG4gIGNoYXJhY3RlckNvdW50OiBudW1iZXIgPSAwO1xuICBtYXNrT3B0aW9uczogSU1hc2tPcHRpb25zO1xuXG4gIHByaXZhdGUgX2JsdXJFbWl0dGVyOiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIHByaXZhdGUgX2ZvY3VzRW1pdHRlcjogRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuICBwcml2YXRlIF9mb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2VudGVyZWRUZXh0OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBmb3JjZUNsZWFyU3Vic2NyaXB0aW9uOiBhbnk7XG4gIHByaXZhdGUgcGVyY2VudENoYW5nZVN1YnNjcmlwdGlvbjogYW55O1xuICBwcml2YXRlIHZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uOiBhbnk7XG4gIHByaXZhdGUgZGF0ZUNoYW5nZVN1YnNjcmlwdGlvbjogYW55O1xuICBwcml2YXRlIF9zaG93Q291bnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBjaGFyYWN0ZXJDb3VudEZpZWxkOiBzdHJpbmc7XG4gIHByaXZhdGUgbWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgc3RhdHVzQ2hhbmdlU3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgdGVtcGxhdGVzOiBhbnkgPSB7fTtcbiAgdGVtcGxhdGVDb250ZXh0OiBhbnk7XG4gIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZGVjaW1hbFNlcGFyYXRvcjogc3RyaW5nID0gJy4nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSxcbiAgICBwcml2YXRlIGRhdGVGb3JtYXRTZXJ2aWNlOiBEYXRlRm9ybWF0U2VydmljZSxcbiAgICBwcml2YXRlIGZpZWxkSW50ZXJhY3Rpb25BcGk6IEZpZWxkSW50ZXJhY3Rpb25BcGksXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVNlcnZpY2U6IE5vdm9UZW1wbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlOiBzdHJpbmcgPSAnZW4tVVMnLFxuICApIHtcbiAgICBzdXBlcihlbGVtZW50KTtcbiAgfVxuXG4gIGdldCBtYXhsZW5ndGhNZXRGaWVsZCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLm1heExlbmd0aE1ldEVycm9yZmllbGRzICYmIHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXhMZW5ndGhNZXRFcnJvcmZpZWxkcy5maW5kKChmaWVsZDogc3RyaW5nKSA9PiBmaWVsZCA9PT0gdGhpcy5mb2N1c2VkRmllbGQpIHx8ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1heGxlbmd0aEVycm9yRmllbGQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5lcnJvcnMgJiYgdGhpcy5lcnJvcnMubWF4bGVuZ3RoRmllbGRzICYmIHRoaXMuZXJyb3JzLm1heGxlbmd0aEZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9ycy5tYXhsZW5ndGhGaWVsZHMuZmluZCgoZmllbGQ6IHN0cmluZykgPT4gZmllbGQgPT09IHRoaXMuZm9jdXNlZEZpZWxkKSB8fCAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzaG93RmllbGRNZXNzYWdlKCkge1xuICAgIHJldHVybiAhdGhpcy5lcnJvcnMgJiYgIXRoaXMubWF4TGVuZ3RoTWV0ICYmIEhlbHBlcnMuaXNCbGFuayh0aGlzLmNvbnRyb2wuZGVzY3JpcHRpb24pO1xuICB9XG5cbiAgZ2V0IHNob3dNYXhMZW5ndGhNZXRNZXNzYWdlKCkge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5pc0RpcnR5ICYmIHRoaXMubWF4TGVuZ3RoTWV0ICYmIHRoaXMuZm9jdXNlZCAmJiAoIXRoaXMuZXJyb3JzIHx8ICh0aGlzLmVycm9ycyAmJiAhdGhpcy5lcnJvcnMubWF4bGVuZ3RoKSkpIHx8XG4gICAgICAodGhpcy5pc0RpcnR5ICYmXG4gICAgICAgIHRoaXMubWF4bGVuZ3RoTWV0RmllbGQgJiZcbiAgICAgICAgdGhpcy5mb2N1c2VkICYmXG4gICAgICAgICghdGhpcy5lcnJvcnMgfHwgKHRoaXMuZXJyb3JzICYmICF0aGlzLmVycm9ycy5tYXhsZW5ndGhGaWVsZHMuaW5jbHVkZXModGhpcy5tYXhsZW5ndGhNZXRGaWVsZCkpKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0IHNob3dFcnJvclN0YXRlKCkge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5pc0RpcnR5ICYmIHRoaXMuZXJyb3JzKSB8fFxuICAgICAgKHRoaXMuZm9jdXNlZCAmJiB0aGlzLmVycm9ycyAmJiB0aGlzLmVycm9ycy5tYXhsZW5ndGggJiYgdGhpcy5lcnJvcnMubWF4bGVuZ3RoRmllbGRzKSB8fFxuICAgICAgKHRoaXMuZm9jdXNlZCAmJiB0aGlzLmVycm9ycyAmJiB0aGlzLmVycm9ycy5tYXhsZW5ndGggJiYgdGhpcy5lcnJvcnMubWF4bGVuZ3RoRmllbGRzICYmIHRoaXMubWF4bGVuZ3RoRXJyb3JGaWVsZClcbiAgICApO1xuICB9XG5cbiAgZ2V0IHNob3dDb3VudCgpIHtcbiAgICBsZXQgY2hhckNvdW50OiBib29sZWFuID1cbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGggJiZcbiAgICAgIHRoaXMuZm9jdXNlZCAmJlxuICAgICAgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3RleHQtYXJlYScgfHwgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAndGV4dGJveCcpO1xuICAgIHJldHVybiB0aGlzLl9zaG93Q291bnQgfHwgY2hhckNvdW50O1xuICB9XG5cbiAgc2V0IHNob3dDb3VudCh2YWx1ZSkge1xuICAgIHRoaXMuX3Nob3dDb3VudCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNob3dNZXNzYWdlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaG93Q291bnQgfHwgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ud2FybmluZykgfHwgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uZGVzY3JpcHRpb24pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IERPX05PVF9GT0NVU19NRTogc3RyaW5nW10gPSBbJ3BpY2tlcicsICd0aW1lJywgJ2RhdGUnLCAnZGF0ZS10aW1lJ107XG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzICYmICFET19OT1RfRk9DVVNfTUUuaW5jbHVkZXModGhpcy5jb250cm9sLmNvbnRyb2xUeXBlKSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBpbnB1dDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gU3Vic2NyaWJlIHRvIGNvbnRyb2wgaW50ZXJhY3Rpb25zXG4gICAgaWYgKHRoaXMuY29udHJvbC5pbnRlcmFjdGlvbnMgJiYgIXRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBmb3IgKGxldCBpbnRlcmFjdGlvbiBvZiB0aGlzLmNvbnRyb2wuaW50ZXJhY3Rpb25zKSB7XG4gICAgICAgIHN3aXRjaCAoaW50ZXJhY3Rpb24uZXZlbnQpIHtcbiAgICAgICAgICBjYXNlICdibHVyJzpcbiAgICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLm9uQmx1ci5waXBlKGRlYm91bmNlVGltZSgzMDApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ZvY3VzJzpcbiAgICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLm9uRm9jdXMucGlwZShkZWJvdW5jZVRpbWUoMzAwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjaGFuZ2UnOlxuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWx1ZUNoYW5nZXMucGlwZShkZWJvdW5jZVRpbWUoMzAwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbml0JzpcbiAgICAgICAgICAgIGludGVyYWN0aW9uLmludm9rZU9uSW5pdCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGludGVyYWN0aW9uLmludm9rZU9uSW5pdCkge1xuICAgICAgICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRlbXBsYXRlcyA9IHRoaXMudGVtcGxhdGVTZXJ2aWNlLmdldEFsbCgpO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAvLyBNYWtlIHN1cmUgdG8gaW5pdGlhbGx5IGZvcm1hdCB0aGUgdGltZSBjb250cm9sc1xuICAgIGlmICh0aGlzLmNvbnRyb2wgJiYgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3RleHRib3gnIHx8XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3RleHQtYXJlYSdcbiAgICAgICkge1xuICAgICAgICB0aGlzLmNoYXJhY3RlckNvdW50ID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuY29udHJvbCkge1xuICAgICAgLy8gTGlzdGVuIHRvIGNsZWFyIGV2ZW50c1xuICAgICAgdGhpcy5mb3JjZUNsZWFyU3Vic2NyaXB0aW9uID0gdGhpcy5jb250cm9sLmZvcmNlQ2xlYXIuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jbGVhclZhbHVlKCk7XG4gICAgICB9KTtcbiAgICAgIC8vIEZvciBBc3luY2hyb25vdXMgdmFsaWRhdGlvbnNcbiAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKCh2YWxpZGl0eSkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0gPSB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQ7XG4gICAgICAgIGlmICh2YWxpZGl0eSAhPT0gJ1BFTkRJTkcnICYmIHRoaXMuZm9ybS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KSB7XG4gICAgICAgICAgdGhpcy5mb3JtLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0ID0ge1xuICAgICAgJGltcGxpY2l0OiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIHJlc3RyaWN0S2V5czogdGhpcy5yZXN0cmljdEtleXMuYmluZCh0aGlzKSxcbiAgICAgICAgZW1pdENoYW5nZTogdGhpcy5lbWl0Q2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZUZvY3VzOiB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZVBlcmNlbnRDaGFuZ2U6IHRoaXMuaGFuZGxlUGVyY2VudENoYW5nZS5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVCbHVyOiB0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlVGV4dEFyZWFJbnB1dDogdGhpcy5oYW5kbGVUZXh0QXJlYUlucHV0LmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZUVkaXQ6IHRoaXMuaGFuZGxlRWRpdC5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVTYXZlOiB0aGlzLmhhbmRsZVNhdmUuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlRGVsZXRlOiB0aGlzLmhhbmRsZURlbGV0ZS5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVVcGxvYWQ6IHRoaXMuaGFuZGxlVXBsb2FkLmJpbmQodGhpcyksXG4gICAgICAgIG1vZGVsQ2hhbmdlOiB0aGlzLm1vZGVsQ2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgIG1vZGVsQ2hhbmdlV2l0aFJhdzogdGhpcy5tb2RlbENoYW5nZVdpdGhSYXcuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlQWRkcmVzc0NoYW5nZTogdGhpcy5oYW5kbGVBZGRyZXNzQ2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZVR5cGluZzogdGhpcy5oYW5kbGVUeXBpbmcuYmluZCh0aGlzKSxcbiAgICAgICAgdXBkYXRlVmFsaWRpdHk6IHRoaXMudXBkYXRlVmFsaWRpdHkuYmluZCh0aGlzKSxcbiAgICAgICAgdG9nZ2xlQWN0aXZlOiB0aGlzLnRvZ2dsZUFjdGl2ZS5iaW5kKHRoaXMpLFxuICAgICAgICB2YWxpZGF0ZUludGVnZXJJbnB1dDogdGhpcy52YWxpZGF0ZUludGVnZXJJbnB1dC5iaW5kKHRoaXMpLFxuICAgICAgICB2YWxpZGF0ZU51bWJlck9uQmx1cjogdGhpcy52YWxpZGF0ZU51bWJlck9uQmx1ci5iaW5kKHRoaXMpLFxuICAgICAgfSxcbiAgICAgIGZvcm06IHRoaXMuZm9ybSxcbiAgICB9O1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC50b29sdGlwUG9zaXRpb24gPSB0aGlzLnRvb2x0aXBQb3NpdGlvbjtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQudG9vbHRpcCA9IHRoaXMudG9vbHRpcDtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQudG9vbHRpcFNpemUgPSB0aGlzLnRvb2x0aXBTaXplO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC50b29sdGlwUHJlbGluZSA9IHRoaXMudG9vbHRpcFByZWxpbmU7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnJlbW92ZVRvb2x0aXBBcnJvdyA9IHRoaXMucmVtb3ZlVG9vbHRpcEFycm93O1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5zdGFydHVwRm9jdXMgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc3RhcnR1cEZvY3VzO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5maWxlQnJvd3NlckltYWdlVXBsb2FkVXJsID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmw7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0Lm1pbmltYWwgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWluaW1hbDtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQuY3VycmVuY3lGb3JtYXQgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY3VycmVuY3lGb3JtYXQ7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnBlcmNlbnRWYWx1ZSA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5wZXJjZW50VmFsdWU7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LmNvbmZpZyA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb25maWc7XG5cbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldICYmIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zdWJUeXBlID09PSAncGVyY2VudGFnZScpIHtcbiAgICAgIGlmICghSGVscGVycy5pc0VtcHR5KHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWx1ZSkpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnBlcmNlbnRWYWx1ZSA9IE51bWJlcihcbiAgICAgICAgICAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlICogMTAwKS50b0ZpeGVkKDYpLnJlcGxhY2UoL1xcLj8wKiQvLCAnJyksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLnBlcmNlbnRDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uZGlzcGxheVZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICghSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5wZXJjZW50VmFsdWUgPSBOdW1iZXIoKHZhbHVlICogMTAwKS50b0ZpeGVkKDYpLnJlcGxhY2UoL1xcLj8wKiQvLCAnJykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRlY2ltYWxTZXBhcmF0b3IgPSB0aGlzLmdldERlY2ltYWxTZXBhcmF0b3IoKTtcbiAgfVxuXG4gIGdldERlY2ltYWxTZXBhcmF0b3IoKTogc3RyaW5nIHtcbiAgICBsZXQgcmVzdWx0ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KHRoaXMubG9jYWxlKS5mb3JtYXQoMS4yKVsxXTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gVW5zdWJzY3JpYmUgZnJvbSBjb250cm9sIGludGVyYWN0aW9uc1xuICAgIGlmICh0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIC8vIGlmICh0aGlzLmRhdGVDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAvLyAgICAgdGhpcy5kYXRlQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgLy8gfVxuICAgIGlmICh0aGlzLmZvcmNlQ2xlYXJTdWJzY3JpcHRpb24pIHtcbiAgICAgIC8vIFVuLWxpc3RlbiBmb3IgY2xlYXIgZXZlbnRzXG4gICAgICB0aGlzLmZvcmNlQ2xlYXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGVyY2VudENoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgLy8gVW4tbGlzdGVuIGZvciBjbGVhciBldmVudHNcbiAgICAgIHRoaXMucGVyY2VudENoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRlQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmRhdGVDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdHVzQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN0YXR1c0NoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgZ2V0IGVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmVycm9ycztcbiAgfVxuXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsaWQ7XG4gIH1cblxuICBnZXQgaXNEaXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmRpcnR5IHx8IHRoaXMuY29udHJvbC5kaXJ0eTtcbiAgfVxuXG4gIGdldCBoYXNWYWx1ZSgpIHtcbiAgICByZXR1cm4gIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmZvcm0udmFsdWVbdGhpcy5jb250cm9sLmtleV0pO1xuICB9XG5cbiAgZ2V0IGZvY3VzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWQ7XG4gIH1cblxuICBnZXQgdG9vbHRpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXA7XG4gIH1cblxuICBnZXQgdG9vbHRpcFBvc2l0aW9uKCkge1xuICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBQb3NpdGlvbikpIHtcbiAgICAgIHJldHVybiAncmlnaHQnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBQb3NpdGlvbjtcbiAgfVxuXG4gIGdldCB0b29sdGlwU2l6ZSgpIHtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS50b29sdGlwU2l6ZSkpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS50b29sdGlwU2l6ZTtcbiAgfVxuXG4gIGdldCB0b29sdGlwUHJlbGluZSgpIHtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS50b29sdGlwUHJlbGluZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS50b29sdGlwUHJlbGluZTtcbiAgfVxuXG4gIGdldCByZW1vdmVUb29sdGlwQXJyb3coKSB7XG4gICAgaWYgKEhlbHBlcnMuaXNCbGFuayh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmVtb3ZlVG9vbHRpcEFycm93KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJlbW92ZVRvb2x0aXBBcnJvdztcbiAgfVxuXG4gIGdldCBhbHdheXNBY3RpdmUoKSB7XG4gICAgLy8gQ29udHJvbHMgdGhhdCBoYXZlIHRoZSBsYWJlbCBhY3RpdmUgaWYgdGhlcmUgaXMgYW55IHVzZXIgZW50ZXJlZCB0ZXh0IGluIHRoZSBmaWVsZFxuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICdwaWNrZXInICYmIHRoaXMuX2VudGVyZWRUZXh0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gQ29udHJvbHMgdGhhdCBhbHdheXMgaGF2ZSB0aGUgbGFiZWwgYWN0aXZlXG4gICAgcmV0dXJuIChcbiAgICAgIFtcbiAgICAgICAgJ3RpbGVzJyxcbiAgICAgICAgJ2NoZWNrbGlzdCcsXG4gICAgICAgICdjaGVja2JveCcsXG4gICAgICAgICdkYXRlJyxcbiAgICAgICAgJ3RpbWUnLFxuICAgICAgICAnZGF0ZS10aW1lJyxcbiAgICAgICAgJ2FkZHJlc3MnLFxuICAgICAgICAnZmlsZScsXG4gICAgICAgICdlZGl0b3InLFxuICAgICAgICAnYWNlLWVkaXRvcicsXG4gICAgICAgICdyYWRpbycsXG4gICAgICAgICd0ZXh0LWFyZWEnLFxuICAgICAgICAncXVpY2stbm90ZScsXG4gICAgICBdLmluZGV4T2YodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlKSAhPT0gLTFcbiAgICApO1xuICB9XG5cbiAgZ2V0IHJlcXVpcmVzRXh0cmFTcGFjaW5nKCkge1xuICAgIC8vIENoaXBzXG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3BpY2tlcicgJiYgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm11bHRpcGxlICYmIHRoaXMuaGFzVmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBleGVjdXRlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pIHtcbiAgICBpZiAoaW50ZXJhY3Rpb24uc2NyaXB0ICYmIEhlbHBlcnMuaXNGdW5jdGlvbihpbnRlcmFjdGlvbi5zY3JpcHQpKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5maWVsZEludGVyYWN0aW9uQXBpLmZvcm0gPSB0aGlzLmZvcm07XG4gICAgICAgIHRoaXMuZmllbGRJbnRlcmFjdGlvbkFwaS5jdXJyZW50S2V5ID0gdGhpcy5jb250cm9sLmtleTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpbnRlcmFjdGlvbi5zY3JpcHQodGhpcy5maWVsZEludGVyYWN0aW9uQXBpLCB0aGlzLmNvbnRyb2wua2V5KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKCdGaWVsZCBJbnRlcmFjdGlvbiBFcnJvciEnLCB0aGlzLmNvbnRyb2wua2V5KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVUeXBpbmcoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSBldmVudCAmJiBldmVudC5sZW5ndGg7XG4gICAgdGhpcy5fZW50ZXJlZFRleHQgPSBldmVudDtcbiAgfVxuXG4gIGhhbmRsZUZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50LCBmaWVsZD86IGFueSkge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSB0cnVlO1xuICAgIHRoaXMuZm9jdXNlZEZpZWxkID0gZmllbGQ7XG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsodGhpcy5jaGFyYWN0ZXJDb3VudEZpZWxkKSAmJiB0aGlzLmNoYXJhY3RlckNvdW50RmllbGQgPT09IGZpZWxkKSB7XG4gICAgICB0aGlzLnNob3dDb3VudCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ2FkZHJlc3MnICYmXG4gICAgICBmaWVsZCAmJlxuICAgICAgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmZvcm0udmFsdWVbdGhpcy5jb250cm9sLmtleV0pICYmXG4gICAgICAhSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS52YWx1ZVt0aGlzLmNvbnRyb2wua2V5XVtmaWVsZF0pXG4gICAgKSB7XG4gICAgICB0aGlzLmhhbmRsZUFkZHJlc3NDaGFuZ2UoeyB2YWx1ZTogdGhpcy5mb3JtLnZhbHVlW3RoaXMuY29udHJvbC5rZXldW2ZpZWxkXSwgZmllbGQgfSk7XG4gICAgfVxuICAgIHRoaXMuX2ZvY3VzRW1pdHRlci5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIGhhbmRsZUJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcbiAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5mb2N1c2VkRmllbGQgPSAnJztcbiAgICB0aGlzLnNob3dDb3VudCA9IGZhbHNlO1xuICAgIHRoaXMuX2JsdXJFbWl0dGVyLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgY2xlYXJWYWx1ZSgpIHtcbiAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc2V0VmFsdWUobnVsbCk7XG4gICAgdGhpcy5mb3JtYXR0ZWRWYWx1ZSA9IG51bGw7XG4gIH1cblxuICBoYW5kbGVUZXh0QXJlYUlucHV0KGV2ZW50KSB7XG4gICAgdGhpcy5lbWl0Q2hhbmdlKGV2ZW50KTtcbiAgICB0aGlzLnJlc3RyaWN0S2V5cyhldmVudCk7XG4gIH1cblxuICBjaGVja01heExlbmd0aChldmVudCkge1xuICAgIGlmICh0aGlzLmNvbnRyb2wgJiYgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCkge1xuICAgICAgdGhpcy5jaGFyYWN0ZXJDb3VudCA9IGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGg7XG4gICAgICB0aGlzLm1heExlbmd0aE1ldCA9IGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPj0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aDtcbiAgICB9XG4gIH1cblxuICBtb2RlbENoYW5nZVdpdGhSYXcoZXZlbnQpIHtcbiAgICBpZiAoSGVscGVycy5pc0VtcHR5KGV2ZW50LnZhbHVlKSkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW50ZXJlZFRleHQgPSAnJztcbiAgICB9XG4gICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJhd1ZhbHVlID0gZXZlbnQucmF3VmFsdWU7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChldmVudC52YWx1ZSk7XG4gIH1cblxuICBtb2RlbENoYW5nZSh2YWx1ZSkge1xuICAgIGlmIChIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbnRlcmVkVGV4dCA9ICcnO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIHZhbGlkYXRlTnVtYmVyT25CbHVyKGV2ZW50OiBGb2N1c0V2ZW50KSB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9jdXNlZEZpZWxkID0gJyc7XG4gICAgdGhpcy5zaG93Q291bnQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnN1YlR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlSW50ZWdlcklucHV0KCk7XG4gICAgfVxuICAgIHRoaXMuX2JsdXJFbWl0dGVyLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgdmFsaWRhdGVJbnRlZ2VySW5wdXQoKSB7XG4gICAgY29uc3QgTlVNQkVSU19PTkxZID0gL15bXFxkXFwtXVxcZCokLztcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlICYmICFOVU1CRVJTX09OTFkudGVzdCh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsdWUpKSB7XG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWFya0FzSW52YWxpZChcbiAgICAgICAgYCR7dGhpcy5sYWJlbHMuaW52YWxpZEludGVnZXJJbnB1dH0gJHt0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubGFiZWwudG9VcHBlckNhc2UoKX1gLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXN0cmljdEtleXMoZXZlbnQpIHtcbiAgICBjb25zdCBOVU1CRVJTX09OTFkgPSAvWzAtOVxcLV0vO1xuICAgIGNvbnN0IE5VTUJFUlNfV0lUSF9ERUNJTUFMX0RPVCA9IC9bMC05XFwuXFwtXS87XG4gICAgY29uc3QgTlVNQkVSU19XSVRIX0RFQ0lNQUxfQ09NTUEgPSAvWzAtOVxcLFxcLV0vO1xuICAgIGNvbnN0IFVUSUxJVFlfS0VZUyA9IFsnQmFja3NwYWNlJywgJ0RlbGV0ZScsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICdUYWInXTtcbiAgICBsZXQga2V5ID0gZXZlbnQua2V5O1xuXG4gICAgLy8gVHlwZXNcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnN1YlR5cGUgPT09ICdudW1iZXInICYmICEoTlVNQkVSU19PTkxZLnRlc3Qoa2V5KSB8fCBVVElMSVRZX0tFWVMuaW5jbHVkZXMoa2V5KSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIH5bJ2N1cnJlbmN5JywgJ2Zsb2F0JywgJ3BlcmNlbnRhZ2UnXS5pbmRleE9mKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zdWJUeXBlKSAmJlxuICAgICAgIShcbiAgICAgICAgKHRoaXMuZGVjaW1hbFNlcGFyYXRvciA9PT0gJy4nICYmIE5VTUJFUlNfV0lUSF9ERUNJTUFMX0RPVC50ZXN0KGtleSkpIHx8XG4gICAgICAgICh0aGlzLmRlY2ltYWxTZXBhcmF0b3IgPT09ICcsJyAmJiBOVU1CRVJTX1dJVEhfREVDSU1BTF9DT01NQS50ZXN0KGtleSkpIHx8XG4gICAgICAgIFVUSUxJVFlfS0VZUy5pbmNsdWRlcyhrZXkpXG4gICAgICApXG4gICAgKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICAvLyBNYXggTGVuZ3RoXG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGggJiYgZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA+PSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWF4bGVuZ3RoKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVBlcmNlbnRDaGFuZ2UoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXRbJ3ZhbHVlJ107XG4gICAgbGV0IHBlcmNlbnQgPSBIZWxwZXJzLmlzRW1wdHkodmFsdWUpID8gbnVsbCA6IE51bWJlcigodmFsdWUgLyAxMDApLnRvRml4ZWQoNikucmVwbGFjZSgvXFwuPzAqJC8sICcnKSk7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkocGVyY2VudCkpIHtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQocGVyY2VudCk7XG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc2V0VmFsdWUocGVyY2VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQobnVsbCk7XG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc2V0VmFsdWUobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlVGFiRm9yUGlja2VycyhldmVudDogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aXZlICYmIGV2ZW50ICYmIGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FU0MgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuVEFCKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlQWN0aXZlKGV2ZW50LCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZW1pdENoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIHRoaXMuY2hlY2tNYXhMZW5ndGgodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlRWRpdCh2YWx1ZSkge1xuICAgIHRoaXMuZWRpdC5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZVNhdmUodmFsdWUpIHtcbiAgICB0aGlzLnNhdmUuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVEZWxldGUodmFsdWUpIHtcbiAgICB0aGlzLmRlbGV0ZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZVVwbG9hZCh2YWx1ZSkge1xuICAgIHRoaXMudXBsb2FkLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlQWRkcmVzc0NoYW5nZShkYXRhKSB7XG4gICAgaWYgKFxuICAgICAgZGF0YSAmJlxuICAgICAgIUhlbHBlcnMuaXNCbGFuayhkYXRhLnZhbHVlKSAmJlxuICAgICAgZGF0YS5maWVsZCAmJlxuICAgICAgdGhpcy5jb250cm9sLmNvbmZpZ1tkYXRhLmZpZWxkXSAmJlxuICAgICAgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmNvbnRyb2wuY29uZmlnW2RhdGEuZmllbGRdLm1heGxlbmd0aClcbiAgICApIHtcbiAgICAgIHRoaXMuY2hhcmFjdGVyQ291bnQgPSBkYXRhLnZhbHVlLmxlbmd0aDtcbiAgICAgIHRoaXMuY2hhcmFjdGVyQ291bnRGaWVsZCA9IGRhdGEuZmllbGQ7XG4gICAgICB0aGlzLm1heExlbmd0aCA9IHRoaXMuY29udHJvbC5jb25maWdbZGF0YS5maWVsZF0ubWF4bGVuZ3RoO1xuICAgICAgdGhpcy5zaG93Q291bnQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMubWF4TGVuZ3RoID09PSB0aGlzLmNoYXJhY3RlckNvdW50KSB7XG4gICAgICAgIHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMucHVzaChkYXRhLmZpZWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMgPSB0aGlzLm1heExlbmd0aE1ldEVycm9yZmllbGRzLmZpbHRlcigoZmllbGQ6IHN0cmluZykgPT4gZmllbGQgIT09IGRhdGEuZmllbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB1cGRhdGVWYWxpZGl0eShzaG91bGRFdmVudEJlRW1pdHRlZCk6IHZvaWQge1xuICAgIGxldCBlbWl0RXZlbnQ6IGJvb2xlYW4gPSBzaG91bGRFdmVudEJlRW1pdHRlZCA/IHRydWUgOiBmYWxzZTtcbiAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudCB9KTtcbiAgfVxufVxuIl19