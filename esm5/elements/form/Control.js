/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                this.itemCount = this.form.controls[this.control.key].value.length;
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
                    template: "\n        <div class=\"novo-control-container\" [hidden]=\"form.controls[control.key].hidden || form.controls[control.key].type === 'hidden' || form.controls[control.key].controlType === 'hidden'\">\n            <!--Encrypted Field-->\n            <span [tooltip]=\"labels.encryptedFieldTooltip\" [tooltipPosition]=\"'right'\"><i [hidden]=\"!form.controls[control.key].encrypted\"\n            class=\"bhi-lock\"></i></span>\n            <!--Label (for horizontal)-->\n            <label [attr.for]=\"control.key\" *ngIf=\"form.layout !== 'vertical' && form.controls[control.key].label && !condensed\" [ngClass]=\"{'encrypted': form.controls[control.key].encrypted }\">\n                {{ form.controls[control.key].label }}\n            </label>\n            <div class=\"novo-control-outer-container\">\n                <!--Label (for vertical)-->\n                <label\n                    *ngIf=\"form.layout === 'vertical' && form.controls[control.key].label && !condensed\"\n                    class=\"novo-control-label\"\n                    [attr.for]=\"control.key\"\n                    [class.novo-control-empty]=\"!hasValue\"\n                    [class.novo-control-focused]=\"focused\"\n                    [class.novo-control-filled]=\"hasValue\"\n                    [class.novo-control-always-active]=\"alwaysActive || form.controls[control.key].placeholder\"\n                    [class.novo-control-extra-spacing]=\"requiresExtraSpacing\">\n                    {{ form.controls[control.key].label }}\n                </label>\n                <div class=\"novo-control-inner-container\" [class.required]=\"form.controls[control.key].required && !form.controls[control.key].readOnly\">\n                    <div class=\"novo-control-inner-input-container\" [class.novo-control-filled]=\"hasValue\" [class.novo-control-empty]=\"!hasValue\">\n                      <!--Required Indicator-->\n                        <i [hidden]=\"!form.controls[control.key].required || form.controls[control.key].readOnly\"\n                            class=\"required-indicator {{ form.controls[control.key].controlType }}\"\n                            [ngClass]=\"{'bhi-circle': !isValid, 'bhi-check': isValid}\" *ngIf=\"!condensed || form.controls[control.key].required\">\n                        </i>\n                        <!--Form Controls-->\n                        <div class=\"novo-control-input {{ form.controls[control.key].controlType }}\" [attr.data-automation-id]=\"control.key\" [class.control-disabled]=\"form.controls[control.key].disabled\">\n                            <!--TODO prefix/suffix on the control-->\n                            <ng-container *ngIf=\"templates\">\n                              <ng-container *ngTemplateOutlet=\"templates[form.controls[control.key].controlType]; context: templateContext\"></ng-container>\n                            </ng-container>\n                            <ng-container *ngIf=\"!templates || loading\">\n                                <div class=\"novo-control-input-container novo-control-input-with-label\">\n                                  <input type=\"text\"/>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n                    <!--Error Message-->\n                    <div class=\"field-message {{ form.controls[control.key].controlType }}\" *ngIf=\"!condensed\" [class.has-tip]=\"form.controls[control.key].tipWell\" [ngClass]=\"showErrorState || showMaxLengthMetMessage ? 'error-shown' : 'error-hidden'\">\n                        <div class=\"messages\" [ngClass]=\"showMessages ? 'count-shown messages-shown' : 'count-hidden messages-hidden'\">\n                            <span class=\"error-text\" *ngIf=\"showFieldMessage\"></span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && errors?.required && form.controls[control.key].controlType !== 'address'\">{{ form.controls[control.key].label | uppercase }} {{ labels.isRequired }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && errors?.minlength\">{{ form.controls[control.key].label | uppercase }} {{ labels.minLength }} {{ form.controls[control.key].minlength }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && maxLengthMet && focused && !errors?.maxlength && form.controls[control.key].controlType !== 'picker'\">{{ labels.maxlengthMet(form.controls[control.key].maxlength) }}</span>\n                            <span class=\"error-text\" *ngIf=\"errors?.maxlength && focused && !errors?.maxlengthFields\">{{ labels.invalidMaxlength(form.controls[control.key].maxlength) }}</span>\n                            <span class=\"error-text\" *ngIf=\"maxLengthMet && form.controls[control.key].controlType === 'picker'\">{{ labels.maxRecordsReached }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && errors?.invalidEmail\">{{ form.controls[control.key].label | uppercase }} {{ labels.invalidEmail }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && (errors?.integerTooLarge || errors?.doubleTooLarge)\">{{ form.controls[control.key].label | uppercase }} {{ labels.isTooLarge }}</span>\n                            <span *ngIf=\"isDirty && errors?.minYear\">{{ form.controls[control.key].label | uppercase }} {{ labels.notValidYear }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && (errors?.custom)\">{{ errors.custom }}</span>\n                            <span class=\"error-text\" *ngIf=\"errors?.maxlength && errors?.maxlengthFields && maxlengthErrorField && focused\">\n                                {{ labels.invalidMaxlengthWithField(control.config[maxlengthErrorField]?.label, control.config[maxlengthErrorField]?.maxlength) }}\n                            </span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && maxlengthMetField && focused && !errors?.maxlengthFields?.includes(maxlengthMetField)\">\n                              {{ labels.maxlengthMetWithField(control.config[maxlengthMetField]?.label, control.config[maxlengthMetField]?.maxlength) }}\n                            </span>\n                            <span *ngIf=\"isDirty && errors?.invalidAddress\">\n                                <span class=\"error-text\" *ngFor=\"let invalidAddressField of errors?.invalidAddressFields\">{{ invalidAddressField | uppercase }} {{ labels.isRequired }} </span>\n                            </span>\n                            <!--Field Hint-->\n                            <span class=\"description\" *ngIf=\"form.controls[control.key].description\">\n                                {{ form.controls[control.key].description }}\n                            </span>\n                            <span class=\"warning-text\" *ngIf=\"form.controls[control.key].warning\">{{ form.controls[control.key].warning }}</span>\n\n                        </div>\n                        <span class=\"character-count\" [class.error]=\"((errors?.maxlength && !errors?.maxlengthFields) || (errors?.maxlength && errors?.maxlengthFields && errors.maxlengthFields.includes(focusedField)))\" *ngIf=\"showCount && form.controls[control.key].controlType !== 'picker'\">{{ itemCount }}/{{ maxLength || form.controls[control.key].maxlength }}</span>\n                        <span class=\"record-count\" [class.zero-count]=\"itemCount === 0\" [class.row-picker]=\"form.controls[this.control.key].config.columns\" *ngIf=\"showCount && form.controls[control.key].controlType === 'picker'\">{{ itemCount }}/{{ maxLength || form.controls[control.key].maxlength }}</span>\n                    </div>\n                    <!--Tip Wel-->\n                    <novo-tip-well *ngIf=\"form.controls[control.key].tipWell\" [name]=\"control.key\" [tip]=\"form.controls[control.key]?.tipWell?.tip\" [icon]=\"form.controls[control.key]?.tipWell?.icon\" [button]=\"form.controls[control.key]?.tipWell?.button\" [sanitize]=\"form.controls[control.key]?.tipWell?.sanitize\"></novo-tip-well>\n                </div>\n                <i *ngIf=\"form.controls[control.key].fieldInteractionloading\" class=\"loading\">\n                    <svg version=\"1.1\"\n                     xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n                     x=\"0px\" y=\"0px\" width=\"18.2px\" height=\"18.5px\" viewBox=\"0 0 18.2 18.5\" style=\"enable-background:new 0 0 18.2 18.5;\"\n                     xml:space=\"preserve\">\n                    <style type=\"text/css\">\n                        .spinner { fill:#FFFFFF; }\n                    </style>\n                        <path class=\"spinner\" d=\"M9.2,18.5C4.1,18.5,0,14.4,0,9.2S4.1,0,9.2,0c0.9,0,1.9,0.1,2.7,0.4c0.8,0.2,1.2,1.1,1,1.9\n                            c-0.2,0.8-1.1,1.2-1.9,1C10.5,3.1,9.9,3,9.2,3C5.8,3,3,5.8,3,9.2s2.8,6.2,6.2,6.2c2.8,0,5.3-1.9,6-4.7c0.2-0.8,1-1.3,1.8-1.1\n                            c0.8,0.2,1.3,1,1.1,1.8C17.1,15.7,13.4,18.5,9.2,18.5z\"/>\n                    </svg>\n                </i>\n            </div>\n        </div>\n    ",
                    host: {
                        '[class]': 'form.controls[control.key].controlType',
                        '[attr.data-control-type]': 'form.controls[control.key].controlType',
                        '[class.disabled]': 'form.controls[control.key].readOnly',
                        '[class.hidden]': 'form.controls[control.key].hidden',
                        '[attr.data-control-key]': 'control.key',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0NvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsWUFBWSxFQUdaLFNBQVMsRUFDVCxZQUFZLEVBR1osU0FBUyxFQUNULE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRTlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7O0FBRWxGLGtDQUlDOzs7SUFIQyw0QkFBVTs7SUFDVix5Q0FBMkI7O0lBQzNCLDZCQUFlOztBQUdqQjtJQVNFLHNCQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQUcsQ0FBQzs7Ozs7SUFKMUMsOEJBQU87Ozs7SUFEUCxVQUNRLFFBQTZCO1FBQ25DLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBSUQseUNBQWtCOzs7SUFBbEI7UUFBQSxpQkFJQztRQUhDLFVBQVUs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O0lBQzdDLGtDQUM2Qzs7SUFDN0Msb0NBQytDOztJQUMvQyxvQ0FDK0M7O0lBVS9DLHVDQUF5Qjs7SUFDekIsMENBQTRCOztJQUM1Qiw0Q0FBNEI7O0lBQzVCLDBDQUFxQjs7SUFDckIsMENBQThCOztJQUM5Qix1Q0FBc0I7O0lBQ3RCLHlDQUEwQjs7Ozs7SUFFMUIsMENBQWdGOzs7OztJQUNoRiwyQ0FBaUY7Ozs7O0lBQ2pGLHNDQUFrQzs7Ozs7SUFDbEMsMENBQWtDOzs7OztJQUNsQyxvREFBb0M7Ozs7O0lBQ3BDLHVEQUF1Qzs7Ozs7SUFDdkMscURBQXFDOzs7OztJQUNyQyxvREFBb0M7Ozs7O0lBQ3BDLHdDQUFvQzs7Ozs7SUFDcEMsaURBQW9DOzs7OztJQUNwQyxxREFBK0M7Ozs7O0lBQy9DLHNEQUFzQzs7SUFFdEMsdUNBQW9COztJQUNwQiw2Q0FBcUI7O0lBQ3JCLHFDQUF5Qjs7SUFJdkIsb0NBQStCOzs7OztJQUMvQiwrQ0FBNEM7Ozs7O0lBQzVDLGlEQUFnRDs7Ozs7SUFDaEQsNkNBQTRDOzs7OztJQUM1QywrQ0FBNEM7Ozs7O0lBQzVDLG9DQUFtRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgRGlyZWN0aXZlLFxuICBIb3N0TGlzdGVuZXIsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIExPQ0FMRV9JRCxcbiAgSW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLy8gQVBQXG5pbXBvcnQgeyBPdXRzaWRlQ2xpY2sgfSBmcm9tICcuLi8uLi91dGlscy9vdXRzaWRlLWNsaWNrL091dHNpZGVDbGljayc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcbmltcG9ydCB7IERhdGVGb3JtYXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0ZS1mb3JtYXQvRGF0ZUZvcm1hdCc7XG5pbXBvcnQgeyBGaWVsZEludGVyYWN0aW9uQXBpIH0gZnJvbSAnLi9GaWVsZEludGVyYWN0aW9uQXBpJztcbmltcG9ydCB7IE5vdm9UZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJTWFza09wdGlvbnMge1xuICBtYXNrOiBhbnk7XG4gIGtlZXBDaGFyUG9zaXRpb25zOiBib29sZWFuO1xuICBndWlkZTogYm9vbGVhbjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndGV4dGFyZWFbYXV0b3NpemVdJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0F1dG9TaXplIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQudGFyZ2V0J10pXG4gIG9uSW5wdXQodGV4dEFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmFkanVzdCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hZGp1c3QoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkanVzdCgpOiB2b2lkIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgbmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBuYXRpdmVFbGVtZW50LnN0eWxlLm1pbkhlaWdodDtcbiAgICBuYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke25hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgfVxufVxuLy8gdW5kbyBhbGwgdGVtcGxhdGUgY29udGV4dCByZWZlcmVuY2VzIVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jb250cm9sJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1jb250YWluZXJcIiBbaGlkZGVuXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmhpZGRlbiB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS50eXBlID09PSAnaGlkZGVuJyB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ2hpZGRlbidcIj5cbiAgICAgICAgICAgIDwhLS1FbmNyeXB0ZWQgRmllbGQtLT5cbiAgICAgICAgICAgIDxzcGFuIFt0b29sdGlwXT1cImxhYmVscy5lbmNyeXB0ZWRGaWVsZFRvb2x0aXBcIiBbdG9vbHRpcFBvc2l0aW9uXT1cIidyaWdodCdcIj48aSBbaGlkZGVuXT1cIiFmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5lbmNyeXB0ZWRcIlxuICAgICAgICAgICAgY2xhc3M9XCJiaGktbG9ja1wiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICA8IS0tTGFiZWwgKGZvciBob3Jpem9udGFsKS0tPlxuICAgICAgICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJjb250cm9sLmtleVwiICpuZ0lmPVwiZm9ybS5sYXlvdXQgIT09ICd2ZXJ0aWNhbCcgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgJiYgIWNvbmRlbnNlZFwiIFtuZ0NsYXNzXT1cInsnZW5jcnlwdGVkJzogZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uZW5jcnlwdGVkIH1cIj5cbiAgICAgICAgICAgICAgICB7eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCB9fVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtb3V0ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPCEtLUxhYmVsIChmb3IgdmVydGljYWwpLS0+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZm9ybS5sYXlvdXQgPT09ICd2ZXJ0aWNhbCcgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgJiYgIWNvbmRlbnNlZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm92by1jb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuZm9yXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLm5vdm8tY29udHJvbC1lbXB0eV09XCIhaGFzVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Mubm92by1jb250cm9sLWZvY3VzZWRdPVwiZm9jdXNlZFwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5ub3ZvLWNvbnRyb2wtZmlsbGVkXT1cImhhc1ZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLm5vdm8tY29udHJvbC1hbHdheXMtYWN0aXZlXT1cImFsd2F5c0FjdGl2ZSB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5ub3ZvLWNvbnRyb2wtZXh0cmEtc3BhY2luZ109XCJyZXF1aXJlc0V4dHJhU3BhY2luZ1wiPlxuICAgICAgICAgICAgICAgICAgICB7eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCB9fVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1pbm5lci1jb250YWluZXJcIiBbY2xhc3MucmVxdWlyZWRdPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ucmVxdWlyZWQgJiYgIWZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnJlYWRPbmx5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtaW5uZXItaW5wdXQtY29udGFpbmVyXCIgW2NsYXNzLm5vdm8tY29udHJvbC1maWxsZWRdPVwiaGFzVmFsdWVcIiBbY2xhc3Mubm92by1jb250cm9sLWVtcHR5XT1cIiFoYXNWYWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDwhLS1SZXF1aXJlZCBJbmRpY2F0b3ItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIFtoaWRkZW5dPVwiIWZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnJlcXVpcmVkIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnJlYWRPbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkLWluZGljYXRvciB7eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSB9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydiaGktY2lyY2xlJzogIWlzVmFsaWQsICdiaGktY2hlY2snOiBpc1ZhbGlkfVwiICpuZ0lmPVwiIWNvbmRlbnNlZCB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5yZXF1aXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLUZvcm0gQ29udHJvbHMtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtaW5wdXQge3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgfX1cIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY29udHJvbC5rZXlcIiBbY2xhc3MuY29udHJvbC1kaXNhYmxlZF09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1UT0RPIHByZWZpeC9zdWZmaXggb24gdGhlIGNvbnRyb2wtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGVtcGxhdGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzW2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlXTsgY29udGV4dDogdGVtcGxhdGVDb250ZXh0XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0ZW1wbGF0ZXMgfHwgbG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWlucHV0LWNvbnRhaW5lciBub3ZvLWNvbnRyb2wtaW5wdXQtd2l0aC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS1FcnJvciBNZXNzYWdlLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1tZXNzYWdlIHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlIH19XCIgKm5nSWY9XCIhY29uZGVuc2VkXCIgW2NsYXNzLmhhcy10aXBdPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0udGlwV2VsbFwiIFtuZ0NsYXNzXT1cInNob3dFcnJvclN0YXRlIHx8IHNob3dNYXhMZW5ndGhNZXRNZXNzYWdlID8gJ2Vycm9yLXNob3duJyA6ICdlcnJvci1oaWRkZW4nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZXNcIiBbbmdDbGFzc109XCJzaG93TWVzc2FnZXMgPyAnY291bnQtc2hvd24gbWVzc2FnZXMtc2hvd24nIDogJ2NvdW50LWhpZGRlbiBtZXNzYWdlcy1oaWRkZW4nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJzaG93RmllbGRNZXNzYWdlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiaXNEaXJ0eSAmJiBlcnJvcnM/LnJlcXVpcmVkICYmIGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlICE9PSAnYWRkcmVzcydcIj57eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCB8IHVwcGVyY2FzZSB9fSB7eyBsYWJlbHMuaXNSZXF1aXJlZCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImlzRGlydHkgJiYgZXJyb3JzPy5taW5sZW5ndGhcIj57eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCB8IHVwcGVyY2FzZSB9fSB7eyBsYWJlbHMubWluTGVuZ3RoIH19IHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLm1pbmxlbmd0aCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImlzRGlydHkgJiYgbWF4TGVuZ3RoTWV0ICYmIGZvY3VzZWQgJiYgIWVycm9ycz8ubWF4bGVuZ3RoICYmIGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlICE9PSAncGlja2VyJ1wiPnt7IGxhYmVscy5tYXhsZW5ndGhNZXQoZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubWF4bGVuZ3RoKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImVycm9ycz8ubWF4bGVuZ3RoICYmIGZvY3VzZWQgJiYgIWVycm9ycz8ubWF4bGVuZ3RoRmllbGRzXCI+e3sgbGFiZWxzLmludmFsaWRNYXhsZW5ndGgoZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubWF4bGVuZ3RoKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cIm1heExlbmd0aE1ldCAmJiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3BpY2tlcidcIj57eyBsYWJlbHMubWF4UmVjb3Jkc1JlYWNoZWQgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIGVycm9ycz8uaW52YWxpZEVtYWlsXCI+e3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgfCB1cHBlcmNhc2UgfX0ge3sgbGFiZWxzLmludmFsaWRFbWFpbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImlzRGlydHkgJiYgKGVycm9ycz8uaW50ZWdlclRvb0xhcmdlIHx8IGVycm9ycz8uZG91YmxlVG9vTGFyZ2UpXCI+e3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgfCB1cHBlcmNhc2UgfX0ge3sgbGFiZWxzLmlzVG9vTGFyZ2UgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJpc0RpcnR5ICYmIGVycm9ycz8ubWluWWVhclwiPnt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIHwgdXBwZXJjYXNlIH19IHt7IGxhYmVscy5ub3RWYWxpZFllYXIgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIChlcnJvcnM/LmN1c3RvbSlcIj57eyBlcnJvcnMuY3VzdG9tIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiZXJyb3JzPy5tYXhsZW5ndGggJiYgZXJyb3JzPy5tYXhsZW5ndGhGaWVsZHMgJiYgbWF4bGVuZ3RoRXJyb3JGaWVsZCAmJiBmb2N1c2VkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhYmVscy5pbnZhbGlkTWF4bGVuZ3RoV2l0aEZpZWxkKGNvbnRyb2wuY29uZmlnW21heGxlbmd0aEVycm9yRmllbGRdPy5sYWJlbCwgY29udHJvbC5jb25maWdbbWF4bGVuZ3RoRXJyb3JGaWVsZF0/Lm1heGxlbmd0aCkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIG1heGxlbmd0aE1ldEZpZWxkICYmIGZvY3VzZWQgJiYgIWVycm9ycz8ubWF4bGVuZ3RoRmllbGRzPy5pbmNsdWRlcyhtYXhsZW5ndGhNZXRGaWVsZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhYmVscy5tYXhsZW5ndGhNZXRXaXRoRmllbGQoY29udHJvbC5jb25maWdbbWF4bGVuZ3RoTWV0RmllbGRdPy5sYWJlbCwgY29udHJvbC5jb25maWdbbWF4bGVuZ3RoTWV0RmllbGRdPy5tYXhsZW5ndGgpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXNEaXJ0eSAmJiBlcnJvcnM/LmludmFsaWRBZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0Zvcj1cImxldCBpbnZhbGlkQWRkcmVzc0ZpZWxkIG9mIGVycm9ycz8uaW52YWxpZEFkZHJlc3NGaWVsZHNcIj57eyBpbnZhbGlkQWRkcmVzc0ZpZWxkIHwgdXBwZXJjYXNlIH19IHt7IGxhYmVscy5pc1JlcXVpcmVkIH19IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLUZpZWxkIEhpbnQtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5kZXNjcmlwdGlvbiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndhcm5pbmctdGV4dFwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ud2FybmluZ1wiPnt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLndhcm5pbmcgfX08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGFyYWN0ZXItY291bnRcIiBbY2xhc3MuZXJyb3JdPVwiKChlcnJvcnM/Lm1heGxlbmd0aCAmJiAhZXJyb3JzPy5tYXhsZW5ndGhGaWVsZHMpIHx8IChlcnJvcnM/Lm1heGxlbmd0aCAmJiBlcnJvcnM/Lm1heGxlbmd0aEZpZWxkcyAmJiBlcnJvcnMubWF4bGVuZ3RoRmllbGRzLmluY2x1ZGVzKGZvY3VzZWRGaWVsZCkpKVwiICpuZ0lmPVwic2hvd0NvdW50ICYmIGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlICE9PSAncGlja2VyJ1wiPnt7IGl0ZW1Db3VudCB9fS97eyBtYXhMZW5ndGggfHwgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubWF4bGVuZ3RoIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWNvcmQtY291bnRcIiBbY2xhc3MuemVyby1jb3VudF09XCJpdGVtQ291bnQgPT09IDBcIiBbY2xhc3Mucm93LXBpY2tlcl09XCJmb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbmZpZy5jb2x1bW5zXCIgKm5nSWY9XCJzaG93Q291bnQgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICdwaWNrZXInXCI+e3sgaXRlbUNvdW50IH19L3t7IG1heExlbmd0aCB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5tYXhsZW5ndGggfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8IS0tVGlwIFdlbC0tPlxuICAgICAgICAgICAgICAgICAgICA8bm92by10aXAtd2VsbCAqbmdJZj1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnRpcFdlbGxcIiBbbmFtZV09XCJjb250cm9sLmtleVwiIFt0aXBdPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0/LnRpcFdlbGw/LnRpcFwiIFtpY29uXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldPy50aXBXZWxsPy5pY29uXCIgW2J1dHRvbl09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XT8udGlwV2VsbD8uYnV0dG9uXCIgW3Nhbml0aXplXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldPy50aXBXZWxsPy5zYW5pdGl6ZVwiPjwvbm92by10aXAtd2VsbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aSAqbmdJZj1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmZpZWxkSW50ZXJhY3Rpb25sb2FkaW5nXCIgY2xhc3M9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeG1sbnM6YT1cImh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC9cIlxuICAgICAgICAgICAgICAgICAgICAgeD1cIjBweFwiIHk9XCIwcHhcIiB3aWR0aD1cIjE4LjJweFwiIGhlaWdodD1cIjE4LjVweFwiIHZpZXdCb3g9XCIwIDAgMTguMiAxOC41XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4LjIgMTguNTtcIlxuICAgICAgICAgICAgICAgICAgICAgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwaW5uZXIgeyBmaWxsOiNGRkZGRkY7IH1cbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwic3Bpbm5lclwiIGQ9XCJNOS4yLDE4LjVDNC4xLDE4LjUsMCwxNC40LDAsOS4yUzQuMSwwLDkuMiwwYzAuOSwwLDEuOSwwLjEsMi43LDAuNGMwLjgsMC4yLDEuMiwxLjEsMSwxLjlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLTAuMiwwLjgtMS4xLDEuMi0xLjksMUMxMC41LDMuMSw5LjksMyw5LjIsM0M1LjgsMywzLDUuOCwzLDkuMnMyLjgsNi4yLDYuMiw2LjJjMi44LDAsNS4zLTEuOSw2LTQuN2MwLjItMC44LDEtMS4zLDEuOC0xLjFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMC44LDAuMiwxLjMsMSwxLjEsMS44QzE3LjEsMTUuNywxMy40LDE4LjUsOS4yLDE4LjV6XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzogJ2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlJyxcbiAgICAnW2F0dHIuZGF0YS1jb250cm9sLXR5cGVdJzogJ2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5yZWFkT25seScsXG4gICAgJ1tjbGFzcy5oaWRkZW5dJzogJ2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmhpZGRlbicsXG4gICAgJ1thdHRyLmRhdGEtY29udHJvbC1rZXldJzogJ2NvbnRyb2wua2V5JyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NvbnRyb2xFbGVtZW50IGV4dGVuZHMgT3V0c2lkZUNsaWNrIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKVxuICBjb250cm9sOiBhbnk7XG4gIEBJbnB1dCgpXG4gIGZvcm06IGFueTtcbiAgQElucHV0KClcbiAgY29uZGVuc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGF1dG9Gb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KClcbiAgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGVkaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgc2F2ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBkZWxldGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgdXBsb2FkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgnYmx1cicpXG4gIGdldCBvbkJsdXIoKTogT2JzZXJ2YWJsZTxGb2N1c0V2ZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuX2JsdXJFbWl0dGVyLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgQE91dHB1dCgnZm9jdXMnKVxuICBnZXQgb25Gb2N1cygpOiBPYnNlcnZhYmxlPEZvY3VzRXZlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNFbWl0dGVyLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIHB1YmxpYyBtYXhMZW5ndGg6IG51bWJlcjtcbiAgcHVibGljIGZvY3VzZWRGaWVsZDogc3RyaW5nO1xuICBmb3JtYXR0ZWRWYWx1ZTogc3RyaW5nID0gJyc7XG4gIHBlcmNlbnRWYWx1ZTogbnVtYmVyO1xuICBtYXhMZW5ndGhNZXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXRlbUNvdW50OiBudW1iZXIgPSAwO1xuICBtYXNrT3B0aW9uczogSU1hc2tPcHRpb25zO1xuXG4gIHByaXZhdGUgX2JsdXJFbWl0dGVyOiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIHByaXZhdGUgX2ZvY3VzRW1pdHRlcjogRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuICBwcml2YXRlIF9mb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2VudGVyZWRUZXh0OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBmb3JjZUNsZWFyU3Vic2NyaXB0aW9uOiBhbnk7XG4gIHByaXZhdGUgcGVyY2VudENoYW5nZVN1YnNjcmlwdGlvbjogYW55O1xuICBwcml2YXRlIHZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uOiBhbnk7XG4gIHByaXZhdGUgZGF0ZUNoYW5nZVN1YnNjcmlwdGlvbjogYW55O1xuICBwcml2YXRlIF9zaG93Q291bnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBjaGFyYWN0ZXJDb3VudEZpZWxkOiBzdHJpbmc7XG4gIHByaXZhdGUgbWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgc3RhdHVzQ2hhbmdlU3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgdGVtcGxhdGVzOiBhbnkgPSB7fTtcbiAgdGVtcGxhdGVDb250ZXh0OiBhbnk7XG4gIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkYXRlRm9ybWF0U2VydmljZTogRGF0ZUZvcm1hdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmaWVsZEludGVyYWN0aW9uQXBpOiBGaWVsZEludGVyYWN0aW9uQXBpLFxuICAgIHByaXZhdGUgdGVtcGxhdGVTZXJ2aWNlOiBOb3ZvVGVtcGxhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIGxvY2FsZTogc3RyaW5nID0gJ2VuLVVTJyxcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudCk7XG4gIH1cblxuICBnZXQgbWF4bGVuZ3RoTWV0RmllbGQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5tYXhMZW5ndGhNZXRFcnJvcmZpZWxkcyAmJiB0aGlzLm1heExlbmd0aE1ldEVycm9yZmllbGRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMuZmluZCgoZmllbGQ6IHN0cmluZykgPT4gZmllbGQgPT09IHRoaXMuZm9jdXNlZEZpZWxkKSB8fCAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtYXhsZW5ndGhFcnJvckZpZWxkKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuZXJyb3JzICYmIHRoaXMuZXJyb3JzLm1heGxlbmd0aEZpZWxkcyAmJiB0aGlzLmVycm9ycy5tYXhsZW5ndGhGaWVsZHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvcnMubWF4bGVuZ3RoRmllbGRzLmZpbmQoKGZpZWxkOiBzdHJpbmcpID0+IGZpZWxkID09PSB0aGlzLmZvY3VzZWRGaWVsZCkgfHwgJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICBnZXQgc2hvd0ZpZWxkTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gIXRoaXMuZXJyb3JzICYmICF0aGlzLm1heExlbmd0aE1ldCAmJiBIZWxwZXJzLmlzQmxhbmsodGhpcy5jb250cm9sLmRlc2NyaXB0aW9uKTtcbiAgfVxuXG4gIGdldCBzaG93TWF4TGVuZ3RoTWV0TWVzc2FnZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuaXNEaXJ0eSAmJiB0aGlzLm1heExlbmd0aE1ldCAmJiB0aGlzLmZvY3VzZWQgJiYgKCF0aGlzLmVycm9ycyB8fCAodGhpcy5lcnJvcnMgJiYgIXRoaXMuZXJyb3JzLm1heGxlbmd0aCkpKSB8fFxuICAgICAgKHRoaXMuaXNEaXJ0eSAmJlxuICAgICAgICB0aGlzLm1heGxlbmd0aE1ldEZpZWxkICYmXG4gICAgICAgIHRoaXMuZm9jdXNlZCAmJlxuICAgICAgICAoIXRoaXMuZXJyb3JzIHx8ICh0aGlzLmVycm9ycyAmJiAhdGhpcy5lcnJvcnMubWF4bGVuZ3RoRmllbGRzLmluY2x1ZGVzKHRoaXMubWF4bGVuZ3RoTWV0RmllbGQpKSkpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBzaG93RXJyb3JTdGF0ZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuaXNEaXJ0eSAmJiB0aGlzLmVycm9ycykgfHxcbiAgICAgICh0aGlzLmZvY3VzZWQgJiYgdGhpcy5lcnJvcnMgJiYgdGhpcy5lcnJvcnMubWF4bGVuZ3RoICYmIHRoaXMuZXJyb3JzLm1heGxlbmd0aEZpZWxkcykgfHxcbiAgICAgICh0aGlzLmZvY3VzZWQgJiYgdGhpcy5lcnJvcnMgJiYgdGhpcy5lcnJvcnMubWF4bGVuZ3RoICYmIHRoaXMuZXJyb3JzLm1heGxlbmd0aEZpZWxkcyAmJiB0aGlzLm1heGxlbmd0aEVycm9yRmllbGQpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBzaG93Q291bnQoKSB7XG4gICAgY29uc3QgTUFYX0xFTkdUSF9DT05UUk9MX1RZUEVTOiBzdHJpbmdbXSA9IFsndGV4dGJveCcsICdwaWNrZXInLCAndGV4dC1hcmVhJ107XG4gICAgbGV0IGNoYXJDb3VudDogYm9vbGVhbiA9XG4gICAgICB0aGlzLmZvY3VzZWQgJiZcbiAgICAgICEhdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCAmJlxuICAgICAgTUFYX0xFTkdUSF9DT05UUk9MX1RZUEVTLmluY2x1ZGVzKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSk7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dDb3VudCB8fCBjaGFyQ291bnQ7XG4gIH1cblxuICBzZXQgc2hvd0NvdW50KHZhbHVlKSB7XG4gICAgdGhpcy5fc2hvd0NvdW50ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgc2hvd01lc3NhZ2VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnNob3dDb3VudCB8fFxuICAgICAgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ud2FybmluZykgfHxcbiAgICAgICFIZWxwZXJzLmlzRW1wdHkodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmRlc2NyaXB0aW9uKVxuICAgICk7XG4gIH1cblxuICBnZXQgZGVjaW1hbFNlcGFyYXRvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5sb2NhbGUpLmZvcm1hdCgxLjIpWzFdO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IERPX05PVF9GT0NVU19NRTogc3RyaW5nW10gPSBbJ3BpY2tlcicsICd0aW1lJywgJ2RhdGUnLCAnZGF0ZS10aW1lJ107XG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzICYmICFET19OT1RfRk9DVVNfTUUuaW5jbHVkZXModGhpcy5jb250cm9sLmNvbnRyb2xUeXBlKSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBpbnB1dDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gU3Vic2NyaWJlIHRvIGNvbnRyb2wgaW50ZXJhY3Rpb25zXG4gICAgaWYgKHRoaXMuY29udHJvbC5pbnRlcmFjdGlvbnMgJiYgIXRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBmb3IgKGxldCBpbnRlcmFjdGlvbiBvZiB0aGlzLmNvbnRyb2wuaW50ZXJhY3Rpb25zKSB7XG4gICAgICAgIHN3aXRjaCAoaW50ZXJhY3Rpb24uZXZlbnQpIHtcbiAgICAgICAgICBjYXNlICdibHVyJzpcbiAgICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLm9uQmx1ci5waXBlKGRlYm91bmNlVGltZSgzMDApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ZvY3VzJzpcbiAgICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLm9uRm9jdXMucGlwZShkZWJvdW5jZVRpbWUoMzAwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjaGFuZ2UnOlxuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWx1ZUNoYW5nZXMucGlwZShkZWJvdW5jZVRpbWUoMzAwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbml0JzpcbiAgICAgICAgICAgIGludGVyYWN0aW9uLmludm9rZU9uSW5pdCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGludGVyYWN0aW9uLmludm9rZU9uSW5pdCkge1xuICAgICAgICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRlbXBsYXRlcyA9IHRoaXMudGVtcGxhdGVTZXJ2aWNlLmdldEFsbCgpO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAvLyBNYWtlIHN1cmUgdG8gaW5pdGlhbGx5IGZvcm1hdCB0aGUgdGltZSBjb250cm9sc1xuICAgIGlmICh0aGlzLmNvbnRyb2wgJiYgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3RleHRib3gnIHx8XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3RleHQtYXJlYSdcbiAgICAgICkge1xuICAgICAgICB0aGlzLml0ZW1Db3VudCA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWx1ZS5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcbiAgICAgIC8vIExpc3RlbiB0byBjbGVhciBldmVudHNcbiAgICAgIHRoaXMuZm9yY2VDbGVhclN1YnNjcmlwdGlvbiA9IHRoaXMuY29udHJvbC5mb3JjZUNsZWFyLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xlYXJWYWx1ZSgpO1xuICAgICAgfSk7XG4gICAgICAvLyBGb3IgQXN5bmNocm9ub3VzIHZhbGlkYXRpb25zXG4gICAgICB0aGlzLnN0YXR1c0NoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSgodmFsaWRpdHkpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldID0gdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0O1xuICAgICAgICBpZiAodmFsaWRpdHkgIT09ICdQRU5ESU5HJyAmJiB0aGlzLmZvcm0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSkge1xuICAgICAgICAgIHRoaXMuZm9ybS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dCA9IHtcbiAgICAgICRpbXBsaWNpdDogdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICByZXN0cmljdEtleXM6IHRoaXMucmVzdHJpY3RLZXlzLmJpbmQodGhpcyksXG4gICAgICAgIGVtaXRDaGFuZ2U6IHRoaXMuZW1pdENoYW5nZS5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVGb2N1czogdGhpcy5oYW5kbGVGb2N1cy5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVQZXJjZW50Q2hhbmdlOiB0aGlzLmhhbmRsZVBlcmNlbnRDaGFuZ2UuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlQmx1cjogdGhpcy5oYW5kbGVCbHVyLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZVRleHRBcmVhSW5wdXQ6IHRoaXMuaGFuZGxlVGV4dEFyZWFJbnB1dC5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVFZGl0OiB0aGlzLmhhbmRsZUVkaXQuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlU2F2ZTogdGhpcy5oYW5kbGVTYXZlLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZURlbGV0ZTogdGhpcy5oYW5kbGVEZWxldGUuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlVXBsb2FkOiB0aGlzLmhhbmRsZVVwbG9hZC5iaW5kKHRoaXMpLFxuICAgICAgICBtb2RlbENoYW5nZTogdGhpcy5tb2RlbENoYW5nZS5iaW5kKHRoaXMpLFxuICAgICAgICBtb2RlbENoYW5nZVdpdGhSYXc6IHRoaXMubW9kZWxDaGFuZ2VXaXRoUmF3LmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZUFkZHJlc3NDaGFuZ2U6IHRoaXMuaGFuZGxlQWRkcmVzc0NoYW5nZS5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVUeXBpbmc6IHRoaXMuaGFuZGxlVHlwaW5nLmJpbmQodGhpcyksXG4gICAgICAgIHVwZGF0ZVZhbGlkaXR5OiB0aGlzLnVwZGF0ZVZhbGlkaXR5LmJpbmQodGhpcyksXG4gICAgICAgIHRvZ2dsZUFjdGl2ZTogdGhpcy50b2dnbGVBY3RpdmUuYmluZCh0aGlzKSxcbiAgICAgICAgdmFsaWRhdGVJbnRlZ2VySW5wdXQ6IHRoaXMudmFsaWRhdGVJbnRlZ2VySW5wdXQuYmluZCh0aGlzKSxcbiAgICAgICAgdmFsaWRhdGVOdW1iZXJPbkJsdXI6IHRoaXMudmFsaWRhdGVOdW1iZXJPbkJsdXIuYmluZCh0aGlzKSxcbiAgICAgIH0sXG4gICAgICBmb3JtOiB0aGlzLmZvcm0sXG4gICAgfTtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQudG9vbHRpcFBvc2l0aW9uID0gdGhpcy50b29sdGlwUG9zaXRpb247XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnRvb2x0aXAgPSB0aGlzLnRvb2x0aXA7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnRvb2x0aXBTaXplID0gdGhpcy50b29sdGlwU2l6ZTtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQudG9vbHRpcFByZWxpbmUgPSB0aGlzLnRvb2x0aXBQcmVsaW5lO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5yZW1vdmVUb29sdGlwQXJyb3cgPSB0aGlzLnJlbW92ZVRvb2x0aXBBcnJvdztcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQuc3RhcnR1cEZvY3VzID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnN0YXJ0dXBGb2N1cztcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQuZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybCA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5maWxlQnJvd3NlckltYWdlVXBsb2FkVXJsO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5taW5pbWFsID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1pbmltYWw7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LmN1cnJlbmN5Rm9ybWF0ID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmN1cnJlbmN5Rm9ybWF0O1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5wZXJjZW50VmFsdWUgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucGVyY2VudFZhbHVlO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5jb25maWcgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29uZmlnO1xuXG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XSAmJiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc3ViVHlwZSA9PT0gJ3BlcmNlbnRhZ2UnKSB7XG4gICAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsdWUpKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5wZXJjZW50VmFsdWUgPSBOdW1iZXIoXG4gICAgICAgICAgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWx1ZSAqIDEwMCkudG9GaXhlZCg2KS5yZXBsYWNlKC9cXC4/MCokLywgJycpLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy5wZXJjZW50Q2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmRpc3BsYXlWYWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQucGVyY2VudFZhbHVlID0gTnVtYmVyKCh2YWx1ZSAqIDEwMCkudG9GaXhlZCg2KS5yZXBsYWNlKC9cXC4/MCokLywgJycpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gVW5zdWJzY3JpYmUgZnJvbSBjb250cm9sIGludGVyYWN0aW9uc1xuICAgIGlmICh0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIC8vIGlmICh0aGlzLmRhdGVDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAvLyAgICAgdGhpcy5kYXRlQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgLy8gfVxuICAgIGlmICh0aGlzLmZvcmNlQ2xlYXJTdWJzY3JpcHRpb24pIHtcbiAgICAgIC8vIFVuLWxpc3RlbiBmb3IgY2xlYXIgZXZlbnRzXG4gICAgICB0aGlzLmZvcmNlQ2xlYXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGVyY2VudENoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgLy8gVW4tbGlzdGVuIGZvciBjbGVhciBldmVudHNcbiAgICAgIHRoaXMucGVyY2VudENoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRlQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmRhdGVDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdHVzQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN0YXR1c0NoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgZ2V0IGVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmVycm9ycztcbiAgfVxuXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsaWQ7XG4gIH1cblxuICBnZXQgaXNEaXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmRpcnR5IHx8IHRoaXMuY29udHJvbC5kaXJ0eTtcbiAgfVxuXG4gIGdldCBoYXNWYWx1ZSgpIHtcbiAgICByZXR1cm4gIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmZvcm0udmFsdWVbdGhpcy5jb250cm9sLmtleV0pO1xuICB9XG5cbiAgZ2V0IGZvY3VzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWQ7XG4gIH1cblxuICBnZXQgdG9vbHRpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXA7XG4gIH1cblxuICBnZXQgdG9vbHRpcFBvc2l0aW9uKCkge1xuICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBQb3NpdGlvbikpIHtcbiAgICAgIHJldHVybiAncmlnaHQnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBQb3NpdGlvbjtcbiAgfVxuXG4gIGdldCB0b29sdGlwU2l6ZSgpIHtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS50b29sdGlwU2l6ZSkpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS50b29sdGlwU2l6ZTtcbiAgfVxuXG4gIGdldCB0b29sdGlwUHJlbGluZSgpIHtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS50b29sdGlwUHJlbGluZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS50b29sdGlwUHJlbGluZTtcbiAgfVxuXG4gIGdldCByZW1vdmVUb29sdGlwQXJyb3coKSB7XG4gICAgaWYgKEhlbHBlcnMuaXNCbGFuayh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmVtb3ZlVG9vbHRpcEFycm93KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJlbW92ZVRvb2x0aXBBcnJvdztcbiAgfVxuXG4gIGdldCBhbHdheXNBY3RpdmUoKSB7XG4gICAgLy8gQ29udHJvbHMgdGhhdCBoYXZlIHRoZSBsYWJlbCBhY3RpdmUgaWYgdGhlcmUgaXMgYW55IHVzZXIgZW50ZXJlZCB0ZXh0IGluIHRoZSBmaWVsZFxuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICdwaWNrZXInICYmIHRoaXMuX2VudGVyZWRUZXh0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gQ29udHJvbHMgdGhhdCBhbHdheXMgaGF2ZSB0aGUgbGFiZWwgYWN0aXZlXG4gICAgcmV0dXJuIChcbiAgICAgIFtcbiAgICAgICAgJ3RpbGVzJyxcbiAgICAgICAgJ2NoZWNrbGlzdCcsXG4gICAgICAgICdjaGVja2JveCcsXG4gICAgICAgICdkYXRlJyxcbiAgICAgICAgJ3RpbWUnLFxuICAgICAgICAnZGF0ZS10aW1lJyxcbiAgICAgICAgJ2FkZHJlc3MnLFxuICAgICAgICAnZmlsZScsXG4gICAgICAgICdlZGl0b3InLFxuICAgICAgICAnYWNlLWVkaXRvcicsXG4gICAgICAgICdyYWRpbycsXG4gICAgICAgICd0ZXh0LWFyZWEnLFxuICAgICAgICAncXVpY2stbm90ZScsXG4gICAgICBdLmluZGV4T2YodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlKSAhPT0gLTFcbiAgICApO1xuICB9XG5cbiAgZ2V0IHJlcXVpcmVzRXh0cmFTcGFjaW5nKCkge1xuICAgIC8vIENoaXBzXG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3BpY2tlcicgJiYgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm11bHRpcGxlICYmIHRoaXMuaGFzVmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBleGVjdXRlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pIHtcbiAgICBpZiAoaW50ZXJhY3Rpb24uc2NyaXB0ICYmIEhlbHBlcnMuaXNGdW5jdGlvbihpbnRlcmFjdGlvbi5zY3JpcHQpKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5maWVsZEludGVyYWN0aW9uQXBpLmZvcm0gPSB0aGlzLmZvcm07XG4gICAgICAgIHRoaXMuZmllbGRJbnRlcmFjdGlvbkFwaS5jdXJyZW50S2V5ID0gdGhpcy5jb250cm9sLmtleTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpbnRlcmFjdGlvbi5zY3JpcHQodGhpcy5maWVsZEludGVyYWN0aW9uQXBpLCB0aGlzLmNvbnRyb2wua2V5KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKCdGaWVsZCBJbnRlcmFjdGlvbiBFcnJvciEnLCB0aGlzLmNvbnRyb2wua2V5KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVUeXBpbmcoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSBldmVudCAmJiBldmVudC5sZW5ndGg7XG4gICAgdGhpcy5fZW50ZXJlZFRleHQgPSBldmVudDtcbiAgfVxuXG4gIGhhbmRsZUZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50LCBmaWVsZD86IGFueSkge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSB0cnVlO1xuICAgIHRoaXMuZm9jdXNlZEZpZWxkID0gZmllbGQ7XG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsodGhpcy5jaGFyYWN0ZXJDb3VudEZpZWxkKSAmJiB0aGlzLmNoYXJhY3RlckNvdW50RmllbGQgPT09IGZpZWxkKSB7XG4gICAgICB0aGlzLnNob3dDb3VudCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ2FkZHJlc3MnICYmXG4gICAgICBmaWVsZCAmJlxuICAgICAgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmZvcm0udmFsdWVbdGhpcy5jb250cm9sLmtleV0pICYmXG4gICAgICAhSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS52YWx1ZVt0aGlzLmNvbnRyb2wua2V5XVtmaWVsZF0pXG4gICAgKSB7XG4gICAgICB0aGlzLmhhbmRsZUFkZHJlc3NDaGFuZ2UoeyB2YWx1ZTogdGhpcy5mb3JtLnZhbHVlW3RoaXMuY29udHJvbC5rZXldW2ZpZWxkXSwgZmllbGQgfSk7XG4gICAgfVxuICAgIHRoaXMuX2ZvY3VzRW1pdHRlci5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIGhhbmRsZUJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcbiAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5mb2N1c2VkRmllbGQgPSAnJztcbiAgICB0aGlzLnNob3dDb3VudCA9IGZhbHNlO1xuICAgIHRoaXMuX2JsdXJFbWl0dGVyLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgY2xlYXJWYWx1ZSgpIHtcbiAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc2V0VmFsdWUobnVsbCk7XG4gICAgdGhpcy5mb3JtYXR0ZWRWYWx1ZSA9IG51bGw7XG4gIH1cblxuICBoYW5kbGVUZXh0QXJlYUlucHV0KGV2ZW50KSB7XG4gICAgdGhpcy5lbWl0Q2hhbmdlKGV2ZW50KTtcbiAgICB0aGlzLnJlc3RyaWN0S2V5cyhldmVudCk7XG4gIH1cblxuICBjaGVja01heExlbmd0aChldmVudCkge1xuICAgIGlmICh0aGlzLmNvbnRyb2wgJiYgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCkge1xuICAgICAgdGhpcy5pdGVtQ291bnQgPSBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoO1xuICAgICAgdGhpcy5tYXhMZW5ndGhNZXQgPSBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID49IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgbW9kZWxDaGFuZ2VXaXRoUmF3KGV2ZW50KSB7XG4gICAgaWYgKEhlbHBlcnMuaXNFbXB0eShldmVudC52YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VudGVyZWRUZXh0ID0gJyc7XG4gICAgfVxuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICdwaWNrZXInICYmIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGgpIHtcbiAgICAgIHRoaXMuaXRlbUNvdW50ID0gZXZlbnQudmFsdWUgPyBldmVudC52YWx1ZS5sZW5ndGggOiAwO1xuICAgICAgdGhpcy5tYXhMZW5ndGhNZXQgPSB0aGlzLml0ZW1Db3VudCA+PSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWF4bGVuZ3RoID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmF3VmFsdWUgPSBldmVudC5yYXdWYWx1ZTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KGV2ZW50LnZhbHVlKTtcbiAgfVxuXG4gIG1vZGVsQ2hhbmdlKHZhbHVlKSB7XG4gICAgaWYgKEhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VudGVyZWRUZXh0ID0gJyc7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgdmFsaWRhdGVOdW1iZXJPbkJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcbiAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5mb2N1c2VkRmllbGQgPSAnJztcbiAgICB0aGlzLnNob3dDb3VudCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc3ViVHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVJbnRlZ2VySW5wdXQoKTtcbiAgICB9XG4gICAgdGhpcy5fYmx1ckVtaXR0ZXIuZW1pdChldmVudCk7XG4gIH1cblxuICB2YWxpZGF0ZUludGVnZXJJbnB1dCgpIHtcbiAgICBjb25zdCBOVU1CRVJTX09OTFkgPSAvXltcXGRcXC1dXFxkKiQvO1xuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsdWUgJiYgIU5VTUJFUlNfT05MWS50ZXN0KHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWx1ZSkpIHtcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXJrQXNJbnZhbGlkKFxuICAgICAgICBgJHt0aGlzLmxhYmVscy5pbnZhbGlkSW50ZWdlcklucHV0fSAke3RoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5sYWJlbC50b1VwcGVyQ2FzZSgpfWAsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlc3RyaWN0S2V5cyhldmVudCkge1xuICAgIGNvbnN0IE5VTUJFUlNfT05MWSA9IC9bMC05XFwtXS87XG4gICAgY29uc3QgTlVNQkVSU19XSVRIX0RFQ0lNQUxfRE9UID0gL1swLTlcXC5cXC1dLztcbiAgICBjb25zdCBOVU1CRVJTX1dJVEhfREVDSU1BTF9ET1RfQU5EX0NPTU1BID0gL1swLTlcXC5cXCxcXC1dLztcbiAgICBjb25zdCBVVElMSVRZX0tFWVMgPSBbJ0JhY2tzcGFjZScsICdEZWxldGUnLCAnQXJyb3dMZWZ0JywgJ0Fycm93UmlnaHQnLCAnVGFiJ107XG4gICAgbGV0IGtleSA9IGV2ZW50LmtleTtcblxuICAgIC8vIE51bWJlcnMgb3IgbnVtYmVycyBhbmQgZGVjaW1hbCBjaGFyYWN0ZXJzIG9ubHlcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnN1YlR5cGUgPT09ICdudW1iZXInICYmICEoTlVNQkVSU19PTkxZLnRlc3Qoa2V5KSB8fCBVVElMSVRZX0tFWVMuaW5jbHVkZXMoa2V5KSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIFsnY3VycmVuY3knLCAnZmxvYXQnLCAncGVyY2VudGFnZSddLmluY2x1ZGVzKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zdWJUeXBlKSAmJlxuICAgICAgIShcbiAgICAgICAgKHRoaXMuZGVjaW1hbFNlcGFyYXRvciA9PT0gJy4nICYmIE5VTUJFUlNfV0lUSF9ERUNJTUFMX0RPVC50ZXN0KGtleSkpIHx8XG4gICAgICAgICh0aGlzLmRlY2ltYWxTZXBhcmF0b3IgPT09ICcsJyAmJiBOVU1CRVJTX1dJVEhfREVDSU1BTF9ET1RfQU5EX0NPTU1BLnRlc3Qoa2V5KSkgfHxcbiAgICAgICAgVVRJTElUWV9LRVlTLmluY2x1ZGVzKGtleSlcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIC8vIE1heCBMZW5ndGhcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCAmJiBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID49IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGgpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUGVyY2VudENoYW5nZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldFsndmFsdWUnXTtcbiAgICBsZXQgcGVyY2VudCA9IEhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkgPyBudWxsIDogTnVtYmVyKCh2YWx1ZSAvIDEwMCkudG9GaXhlZCg2KS5yZXBsYWNlKC9cXC4/MCokLywgJycpKTtcbiAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eShwZXJjZW50KSkge1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChwZXJjZW50KTtcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zZXRWYWx1ZShwZXJjZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChudWxsKTtcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zZXRWYWx1ZShudWxsKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVUYWJGb3JQaWNrZXJzKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3RpdmUgJiYgZXZlbnQgJiYgZXZlbnQua2V5Q29kZSkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVTQyB8fCBldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5UQUIpIHtcbiAgICAgICAgdGhpcy50b2dnbGVBY3RpdmUoZXZlbnQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbWl0Q2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgdGhpcy5jaGVja01heExlbmd0aCh2YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVFZGl0KHZhbHVlKSB7XG4gICAgdGhpcy5lZGl0LmVtaXQodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlU2F2ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2F2ZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZSh2YWx1ZSkge1xuICAgIHRoaXMuZGVsZXRlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlVXBsb2FkKHZhbHVlKSB7XG4gICAgdGhpcy51cGxvYWQuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVBZGRyZXNzQ2hhbmdlKGRhdGEpIHtcbiAgICBpZiAoXG4gICAgICBkYXRhICYmXG4gICAgICAhSGVscGVycy5pc0JsYW5rKGRhdGEudmFsdWUpICYmXG4gICAgICBkYXRhLmZpZWxkICYmXG4gICAgICB0aGlzLmNvbnRyb2wuY29uZmlnW2RhdGEuZmllbGRdICYmXG4gICAgICAhSGVscGVycy5pc0VtcHR5KHRoaXMuY29udHJvbC5jb25maWdbZGF0YS5maWVsZF0ubWF4bGVuZ3RoKVxuICAgICkge1xuICAgICAgdGhpcy5pdGVtQ291bnQgPSBkYXRhLnZhbHVlLmxlbmd0aDtcbiAgICAgIHRoaXMuY2hhcmFjdGVyQ291bnRGaWVsZCA9IGRhdGEuZmllbGQ7XG4gICAgICB0aGlzLm1heExlbmd0aCA9IHRoaXMuY29udHJvbC5jb25maWdbZGF0YS5maWVsZF0ubWF4bGVuZ3RoO1xuICAgICAgdGhpcy5zaG93Q291bnQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMubWF4TGVuZ3RoID09PSB0aGlzLml0ZW1Db3VudCkge1xuICAgICAgICB0aGlzLm1heExlbmd0aE1ldEVycm9yZmllbGRzLnB1c2goZGF0YS5maWVsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1heExlbmd0aE1ldEVycm9yZmllbGRzID0gdGhpcy5tYXhMZW5ndGhNZXRFcnJvcmZpZWxkcy5maWx0ZXIoKGZpZWxkOiBzdHJpbmcpID0+IGZpZWxkICE9PSBkYXRhLmZpZWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVWYWxpZGl0eShzaG91bGRFdmVudEJlRW1pdHRlZCk6IHZvaWQge1xuICAgIGxldCBlbWl0RXZlbnQ6IGJvb2xlYW4gPSBzaG91bGRFdmVudEJlRW1pdHRlZCA/IHRydWUgOiBmYWxzZTtcbiAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudCB9KTtcbiAgfVxufVxuIl19