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
            var charCount = (this.form.controls[this.control.key].maxlength &&
                this.focused &&
                (this.form.controls[this.control.key].controlType === 'text-area' ||
                    this.form.controls[this.control.key].controlType === 'textbox')) ||
                (this.form.controls[this.control.key].maxlength && this.form.controls[this.control.key].controlType === 'picker');
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
                    template: "\n    <div\n      class=\"novo-control-container\"\n      [hidden]=\"\n        form.controls[control.key].hidden ||\n        form.controls[control.key].type === 'hidden' ||\n        form.controls[control.key].controlType === 'hidden'\n      \"\n    >\n      <!--Encrypted Field-->\n      <span [tooltip]=\"labels.encryptedFieldTooltip\" [tooltipPosition]=\"'right'\"\n        ><i [hidden]=\"!form.controls[control.key].encrypted\" class=\"bhi-lock\"></i\n      ></span>\n      <!--Label (for horizontal)-->\n      <label\n        [attr.for]=\"control.key\"\n        *ngIf=\"form.layout !== 'vertical' && form.controls[control.key].label && !condensed\"\n        [ngClass]=\"{ encrypted: form.controls[control.key].encrypted }\"\n      >\n        {{ form.controls[control.key].label }}\n      </label>\n      <div class=\"novo-control-outer-container\">\n        <!--Label (for vertical)-->\n        <label\n          *ngIf=\"form.layout === 'vertical' && form.controls[control.key].label && !condensed\"\n          class=\"novo-control-label\"\n          [attr.for]=\"control.key\"\n          [class.novo-control-empty]=\"!hasValue\"\n          [class.novo-control-focused]=\"focused\"\n          [class.novo-control-filled]=\"hasValue\"\n          [class.novo-control-always-active]=\"alwaysActive || form.controls[control.key].placeholder\"\n          [class.novo-control-extra-spacing]=\"requiresExtraSpacing\"\n        >\n          {{ form.controls[control.key].label }}\n        </label>\n        <div\n          class=\"novo-control-inner-container\"\n          [class.required]=\"form.controls[control.key].required && !form.controls[control.key].readOnly\"\n        >\n          <div class=\"novo-control-inner-input-container\" [class.novo-control-filled]=\"hasValue\" [class.novo-control-empty]=\"!hasValue\">\n            <!--Required Indicator-->\n            <i\n              [hidden]=\"!form.controls[control.key].required || form.controls[control.key].readOnly\"\n              class=\"required-indicator {{ form.controls[control.key].controlType }}\"\n              [ngClass]=\"{ 'bhi-circle': !isValid, 'bhi-check': isValid }\"\n              *ngIf=\"!condensed || form.controls[control.key].required\"\n            >\n            </i>\n            <!--Form Controls-->\n            <div\n              class=\"novo-control-input {{ form.controls[control.key].controlType }}\"\n              [attr.data-automation-id]=\"control.key\"\n              [class.control-disabled]=\"form.controls[control.key].disabled\"\n            >\n              <!--TODO prefix/suffix on the control-->\n              <ng-container *ngIf=\"templates\">\n                <ng-container\n                  *ngTemplateOutlet=\"templates[form.controls[control.key].controlType]; context: templateContext\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngIf=\"!templates || loading\">\n                <div class=\"novo-control-input-container novo-control-input-with-label\"><input type=\"text\" /></div>\n              </ng-container>\n            </div>\n          </div>\n          <!--Error Message-->\n          <div\n            class=\"field-message {{ form.controls[control.key].controlType }}\"\n            *ngIf=\"!condensed\"\n            [class.has-tip]=\"form.controls[control.key].tipWell\"\n            [ngClass]=\"showErrorState || showMaxLengthMetMessage ? 'error-shown' : 'error-hidden'\"\n          >\n            <div class=\"messages\" [ngClass]=\"showMessages ? 'count-shown messages-shown' : 'count-hidden messages-hidden'\">\n              <span class=\"error-text\" *ngIf=\"showFieldMessage\"></span>\n              <span class=\"error-text\" *ngIf=\"isDirty && errors?.required && form.controls[control.key].controlType !== 'address'\"\n                >{{ form.controls[control.key].label | uppercase }} {{ labels.isRequired }}</span\n              >\n              <span class=\"error-text\" *ngIf=\"isDirty && errors?.minlength\"\n                >{{ form.controls[control.key].label | uppercase }} {{ labels.minLength }} {{ form.controls[control.key].minlength }}</span\n              >\n              <span\n                class=\"error-text\"\n                *ngIf=\"isDirty && maxLengthMet && focused && !errors?.maxlength && form.controls[control.key].controlType !== 'picker'\"\n                >{{ labels.maxlengthMet(form.controls[control.key].maxlength) }}</span\n              >\n              <span class=\"error-text\" *ngIf=\"errors?.maxlength && focused && !errors?.maxlengthFields\">{{\n                labels.invalidMaxlength(form.controls[control.key].maxlength)\n              }}</span>\n              <span class=\"error-text\" *ngIf=\"maxLengthMet && form.controls[control.key].controlType === 'picker'\">{{\n                labels.maxRecordsReached\n              }}</span>\n              <span class=\"error-text\" *ngIf=\"isDirty && errors?.invalidEmail\"\n                >{{ form.controls[control.key].label | uppercase }} {{ labels.invalidEmail }}</span\n              >\n              <span class=\"error-text\" *ngIf=\"isDirty && (errors?.integerTooLarge || errors?.doubleTooLarge)\"\n                >{{ form.controls[control.key].label | uppercase }} {{ labels.isTooLarge }}</span\n              >\n              <span *ngIf=\"isDirty && errors?.minYear\">{{ form.controls[control.key].label | uppercase }} {{ labels.notValidYear }}</span>\n              <span class=\"error-text\" *ngIf=\"isDirty && errors?.custom\">{{ errors.custom }}</span>\n              <span class=\"error-text\" *ngIf=\"errors?.maxlength && errors?.maxlengthFields && maxlengthErrorField && focused\">\n                {{\n                  labels.invalidMaxlengthWithField(\n                    control.config[maxlengthErrorField]?.label,\n                    control.config[maxlengthErrorField]?.maxlength\n                  )\n                }}\n              </span>\n              <span\n                class=\"error-text\"\n                *ngIf=\"isDirty && maxlengthMetField && focused && !errors?.maxlengthFields?.includes(maxlengthMetField)\"\n              >\n                {{ labels.maxlengthMetWithField(control.config[maxlengthMetField]?.label, control.config[maxlengthMetField]?.maxlength) }}\n              </span>\n              <span *ngIf=\"isDirty && errors?.invalidAddress\">\n                <span class=\"error-text\" *ngFor=\"let invalidAddressField of errors?.invalidAddressFields\"\n                  >{{ invalidAddressField | uppercase }} {{ labels.isRequired }}\n                </span>\n              </span>\n              <!--Field Hint-->\n              <span class=\"description\" *ngIf=\"form.controls[control.key].description\"> {{ form.controls[control.key].description }} </span>\n              <span class=\"warning-text\" *ngIf=\"form.controls[control.key].warning\">{{ form.controls[control.key].warning }}</span>\n            </div>\n            <span\n              class=\"character-count\"\n              [class.error]=\"\n                (errors?.maxlength && !errors?.maxlengthFields) ||\n                (errors?.maxlength && errors?.maxlengthFields && errors.maxlengthFields.includes(focusedField))\n              \"\n              *ngIf=\"showCount && form.controls[control.key].controlType !== 'picker'\"\n              >{{ itemCount }}/{{ maxLength || form.controls[control.key].maxlength }}</span\n            >\n            <span\n              class=\"record-count\"\n              [class.zero-count]=\"itemCount === 0\"\n              [class.row-picker]=\"form.controls[this.control.key].config.columns\"\n              *ngIf=\"showCount && form.controls[control.key].controlType === 'picker'\"\n              >{{ itemCount }}/{{ maxLength || form.controls[control.key].maxlength }}</span\n            >\n          </div>\n          <!--Tip Wel-->\n          <novo-tip-well\n            *ngIf=\"form.controls[control.key].tipWell\"\n            [name]=\"control.key\"\n            [tip]=\"form.controls[control.key]?.tipWell?.tip\"\n            [icon]=\"form.controls[control.key]?.tipWell?.icon\"\n            [button]=\"form.controls[control.key]?.tipWell?.button\"\n          ></novo-tip-well>\n        </div>\n        <i *ngIf=\"form.controls[control.key].fieldInteractionloading\" class=\"loading\">\n          <svg\n            version=\"1.1\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n            xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n            x=\"0px\"\n            y=\"0px\"\n            width=\"18.2px\"\n            height=\"18.5px\"\n            viewBox=\"0 0 18.2 18.5\"\n            style=\"enable-background:new 0 0 18.2 18.5;\"\n            xml:space=\"preserve\"\n          >\n            <style type=\"text/css\">\n              .spinner {\n                fill: #ffffff;\n              }\n            </style>\n            <path\n              class=\"spinner\"\n              d=\"M9.2,18.5C4.1,18.5,0,14.4,0,9.2S4.1,0,9.2,0c0.9,0,1.9,0.1,2.7,0.4c0.8,0.2,1.2,1.1,1,1.9\n                            c-0.2,0.8-1.1,1.2-1.9,1C10.5,3.1,9.9,3,9.2,3C5.8,3,3,5.8,3,9.2s2.8,6.2,6.2,6.2c2.8,0,5.3-1.9,6-4.7c0.2-0.8,1-1.3,1.8-1.1\n                            c0.8,0.2,1.3,1,1.1,1.8C17.1,15.7,13.4,18.5,9.2,18.5z\"\n            />\n          </svg>\n        </i>\n      </div>\n    </div>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0NvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsWUFBWSxFQUdaLFNBQVMsRUFDVCxZQUFZLEVBR1osU0FBUyxFQUNULE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRTlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7O0FBRWxGLGtDQUlDOzs7SUFIQyw0QkFBVTs7SUFDVix5Q0FBMkI7O0lBQzNCLDZCQUFlOztBQUdqQjtJQVNFLHNCQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQUcsQ0FBQzs7Ozs7SUFKMUMsOEJBQU87Ozs7SUFEUCxVQUNRLFFBQTZCO1FBQ25DLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBSUQseUNBQWtCOzs7SUFBbEI7UUFBQSxpQkFJQztRQUhDLFVBQVUs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TTt5QkFFTixNQUFNO3lCQUVOLE1BQU0sU0FBQyxNQUFNOzBCQUtiLE1BQU0sU0FBQyxPQUFPOztJQTJoQmpCLHlCQUFDO0NBQUEsQUEvdUJELENBNEx3QyxZQUFZLEdBbWpCbkQ7U0FuakJZLGtCQUFrQjs7O0lBQzdCLHFDQUNhOztJQUNiLGtDQUNVOztJQUNWLHVDQUMyQjs7SUFDM0IsdUNBQzJCOztJQUMzQixvQ0FDK0M7O0lBQy9DLGtDQUM2Qzs7SUFDN0Msa0NBQzZDOztJQUM3QyxvQ0FDK0M7O0lBQy9DLG9DQUMrQzs7SUFVL0MsdUNBQXlCOztJQUN6QiwwQ0FBNEI7O0lBQzVCLDRDQUE0Qjs7SUFDNUIsMENBQXFCOztJQUNyQiwwQ0FBOEI7O0lBQzlCLHVDQUFzQjs7SUFDdEIseUNBQTBCOzs7OztJQUUxQiwwQ0FBZ0Y7Ozs7O0lBQ2hGLDJDQUFpRjs7Ozs7SUFDakYsc0NBQWtDOzs7OztJQUNsQywwQ0FBa0M7Ozs7O0lBQ2xDLG9EQUFvQzs7Ozs7SUFDcEMsdURBQXVDOzs7OztJQUN2QyxxREFBcUM7Ozs7O0lBQ3JDLG9EQUFvQzs7Ozs7SUFDcEMsd0NBQW9DOzs7OztJQUNwQyxpREFBb0M7Ozs7O0lBQ3BDLHFEQUErQzs7Ozs7SUFDL0Msc0RBQXNDOztJQUV0Qyx1Q0FBb0I7O0lBQ3BCLDZDQUFxQjs7SUFDckIscUNBQXlCOztJQUl2QixvQ0FBK0I7Ozs7O0lBQy9CLCtDQUE0Qzs7Ozs7SUFDNUMsaURBQWdEOzs7OztJQUNoRCw2Q0FBNEM7Ozs7O0lBQzVDLCtDQUE0Qzs7Ozs7SUFDNUMsb0NBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBEaXJlY3RpdmUsXG4gIEhvc3RMaXN0ZW5lcixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgTE9DQUxFX0lELFxuICBJbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4vLyBBUFBcbmltcG9ydCB7IE91dHNpZGVDbGljayB9IGZyb20gJy4uLy4uL3V0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0JztcbmltcG9ydCB7IEZpZWxkSW50ZXJhY3Rpb25BcGkgfSBmcm9tICcuL0ZpZWxkSW50ZXJhY3Rpb25BcGknO1xuaW1wb3J0IHsgTm92b1RlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlL05vdm9UZW1wbGF0ZVNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNYXNrT3B0aW9ucyB7XG4gIG1hc2s6IGFueTtcbiAga2VlcENoYXJQb3NpdGlvbnM6IGJvb2xlYW47XG4gIGd1aWRlOiBib29sZWFuO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd0ZXh0YXJlYVthdXRvc2l6ZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQXV0b1NpemUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudC50YXJnZXQnXSlcbiAgb25JbnB1dCh0ZXh0QXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuYWRqdXN0KCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFkanVzdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRqdXN0KCk6IHZvaWQge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBuYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IG5hdGl2ZUVsZW1lbnQuc3R5bGUubWluSGVpZ2h0O1xuICAgIG5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7bmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHR9cHhgO1xuICB9XG59XG4vLyB1bmRvIGFsbCB0ZW1wbGF0ZSBjb250ZXh0IHJlZmVyZW5jZXMhXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwibm92by1jb250cm9sLWNvbnRhaW5lclwiXG4gICAgICBbaGlkZGVuXT1cIlxuICAgICAgICBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5oaWRkZW4gfHxcbiAgICAgICAgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0udHlwZSA9PT0gJ2hpZGRlbicgfHxcbiAgICAgICAgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICdoaWRkZW4nXG4gICAgICBcIlxuICAgID5cbiAgICAgIDwhLS1FbmNyeXB0ZWQgRmllbGQtLT5cbiAgICAgIDxzcGFuIFt0b29sdGlwXT1cImxhYmVscy5lbmNyeXB0ZWRGaWVsZFRvb2x0aXBcIiBbdG9vbHRpcFBvc2l0aW9uXT1cIidyaWdodCdcIlxuICAgICAgICA+PGkgW2hpZGRlbl09XCIhZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uZW5jcnlwdGVkXCIgY2xhc3M9XCJiaGktbG9ja1wiPjwvaVxuICAgICAgPjwvc3Bhbj5cbiAgICAgIDwhLS1MYWJlbCAoZm9yIGhvcml6b250YWwpLS0+XG4gICAgICA8bGFiZWxcbiAgICAgICAgW2F0dHIuZm9yXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgKm5nSWY9XCJmb3JtLmxheW91dCAhPT0gJ3ZlcnRpY2FsJyAmJiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCAmJiAhY29uZGVuc2VkXCJcbiAgICAgICAgW25nQ2xhc3NdPVwieyBlbmNyeXB0ZWQ6IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmVuY3J5cHRlZCB9XCJcbiAgICAgID5cbiAgICAgICAge3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgfX1cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLW91dGVyLWNvbnRhaW5lclwiPlxuICAgICAgICA8IS0tTGFiZWwgKGZvciB2ZXJ0aWNhbCktLT5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgKm5nSWY9XCJmb3JtLmxheW91dCA9PT0gJ3ZlcnRpY2FsJyAmJiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCAmJiAhY29uZGVuc2VkXCJcbiAgICAgICAgICBjbGFzcz1cIm5vdm8tY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgW2F0dHIuZm9yXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbY2xhc3Mubm92by1jb250cm9sLWVtcHR5XT1cIiFoYXNWYWx1ZVwiXG4gICAgICAgICAgW2NsYXNzLm5vdm8tY29udHJvbC1mb2N1c2VkXT1cImZvY3VzZWRcIlxuICAgICAgICAgIFtjbGFzcy5ub3ZvLWNvbnRyb2wtZmlsbGVkXT1cImhhc1ZhbHVlXCJcbiAgICAgICAgICBbY2xhc3Mubm92by1jb250cm9sLWFsd2F5cy1hY3RpdmVdPVwiYWx3YXlzQWN0aXZlIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICBbY2xhc3Mubm92by1jb250cm9sLWV4dHJhLXNwYWNpbmddPVwicmVxdWlyZXNFeHRyYVNwYWNpbmdcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwibm92by1jb250cm9sLWlubmVyLWNvbnRhaW5lclwiXG4gICAgICAgICAgW2NsYXNzLnJlcXVpcmVkXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnJlcXVpcmVkICYmICFmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5yZWFkT25seVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWlubmVyLWlucHV0LWNvbnRhaW5lclwiIFtjbGFzcy5ub3ZvLWNvbnRyb2wtZmlsbGVkXT1cImhhc1ZhbHVlXCIgW2NsYXNzLm5vdm8tY29udHJvbC1lbXB0eV09XCIhaGFzVmFsdWVcIj5cbiAgICAgICAgICAgIDwhLS1SZXF1aXJlZCBJbmRpY2F0b3ItLT5cbiAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgIFtoaWRkZW5dPVwiIWZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnJlcXVpcmVkIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnJlYWRPbmx5XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJyZXF1aXJlZC1pbmRpY2F0b3Ige3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgfX1cIlxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdiaGktY2lyY2xlJzogIWlzVmFsaWQsICdiaGktY2hlY2snOiBpc1ZhbGlkIH1cIlxuICAgICAgICAgICAgICAqbmdJZj1cIiFjb25kZW5zZWQgfHwgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ucmVxdWlyZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgPCEtLUZvcm0gQ29udHJvbHMtLT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJub3ZvLWNvbnRyb2wtaW5wdXQge3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgfX1cIlxuICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgICAgICBbY2xhc3MuY29udHJvbC1kaXNhYmxlZF09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5kaXNhYmxlZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwhLS1UT0RPIHByZWZpeC9zdWZmaXggb24gdGhlIGNvbnRyb2wtLT5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlbXBsYXRlc1wiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzW2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlXTsgY29udGV4dDogdGVtcGxhdGVDb250ZXh0XCJcbiAgICAgICAgICAgICAgICA+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXRlbXBsYXRlcyB8fCBsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1pbnB1dC1jb250YWluZXIgbm92by1jb250cm9sLWlucHV0LXdpdGgtbGFiZWxcIj48aW5wdXQgdHlwZT1cInRleHRcIiAvPjwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS1FcnJvciBNZXNzYWdlLS0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJmaWVsZC1tZXNzYWdlIHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlIH19XCJcbiAgICAgICAgICAgICpuZ0lmPVwiIWNvbmRlbnNlZFwiXG4gICAgICAgICAgICBbY2xhc3MuaGFzLXRpcF09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS50aXBXZWxsXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInNob3dFcnJvclN0YXRlIHx8IHNob3dNYXhMZW5ndGhNZXRNZXNzYWdlID8gJ2Vycm9yLXNob3duJyA6ICdlcnJvci1oaWRkZW4nXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZXNcIiBbbmdDbGFzc109XCJzaG93TWVzc2FnZXMgPyAnY291bnQtc2hvd24gbWVzc2FnZXMtc2hvd24nIDogJ2NvdW50LWhpZGRlbiBtZXNzYWdlcy1oaWRkZW4nXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwic2hvd0ZpZWxkTWVzc2FnZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIGVycm9ycz8ucmVxdWlyZWQgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgIT09ICdhZGRyZXNzJ1wiXG4gICAgICAgICAgICAgICAgPnt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIHwgdXBwZXJjYXNlIH19IHt7IGxhYmVscy5pc1JlcXVpcmVkIH19PC9zcGFuXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIGVycm9ycz8ubWlubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICA+e3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgfCB1cHBlcmNhc2UgfX0ge3sgbGFiZWxzLm1pbkxlbmd0aCB9fSB7eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5taW5sZW5ndGggfX08L3NwYW5cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZXJyb3ItdGV4dFwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpc0RpcnR5ICYmIG1heExlbmd0aE1ldCAmJiBmb2N1c2VkICYmICFlcnJvcnM/Lm1heGxlbmd0aCAmJiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSAhPT0gJ3BpY2tlcidcIlxuICAgICAgICAgICAgICAgID57eyBsYWJlbHMubWF4bGVuZ3RoTWV0KGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLm1heGxlbmd0aCkgfX08L3NwYW5cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImVycm9ycz8ubWF4bGVuZ3RoICYmIGZvY3VzZWQgJiYgIWVycm9ycz8ubWF4bGVuZ3RoRmllbGRzXCI+e3tcbiAgICAgICAgICAgICAgICBsYWJlbHMuaW52YWxpZE1heGxlbmd0aChmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5tYXhsZW5ndGgpXG4gICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cIm1heExlbmd0aE1ldCAmJiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3BpY2tlcidcIj57e1xuICAgICAgICAgICAgICAgIGxhYmVscy5tYXhSZWNvcmRzUmVhY2hlZFxuICAgICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIGVycm9ycz8uaW52YWxpZEVtYWlsXCJcbiAgICAgICAgICAgICAgICA+e3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgfCB1cHBlcmNhc2UgfX0ge3sgbGFiZWxzLmludmFsaWRFbWFpbCB9fTwvc3BhblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiaXNEaXJ0eSAmJiAoZXJyb3JzPy5pbnRlZ2VyVG9vTGFyZ2UgfHwgZXJyb3JzPy5kb3VibGVUb29MYXJnZSlcIlxuICAgICAgICAgICAgICAgID57eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCB8IHVwcGVyY2FzZSB9fSB7eyBsYWJlbHMuaXNUb29MYXJnZSB9fTwvc3BhblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXNEaXJ0eSAmJiBlcnJvcnM/Lm1pblllYXJcIj57eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCB8IHVwcGVyY2FzZSB9fSB7eyBsYWJlbHMubm90VmFsaWRZZWFyIH19PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImlzRGlydHkgJiYgZXJyb3JzPy5jdXN0b21cIj57eyBlcnJvcnMuY3VzdG9tIH19PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImVycm9ycz8ubWF4bGVuZ3RoICYmIGVycm9ycz8ubWF4bGVuZ3RoRmllbGRzICYmIG1heGxlbmd0aEVycm9yRmllbGQgJiYgZm9jdXNlZFwiPlxuICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICBsYWJlbHMuaW52YWxpZE1heGxlbmd0aFdpdGhGaWVsZChcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbC5jb25maWdbbWF4bGVuZ3RoRXJyb3JGaWVsZF0/LmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICBjb250cm9sLmNvbmZpZ1ttYXhsZW5ndGhFcnJvckZpZWxkXT8ubWF4bGVuZ3RoXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZXJyb3ItdGV4dFwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpc0RpcnR5ICYmIG1heGxlbmd0aE1ldEZpZWxkICYmIGZvY3VzZWQgJiYgIWVycm9ycz8ubWF4bGVuZ3RoRmllbGRzPy5pbmNsdWRlcyhtYXhsZW5ndGhNZXRGaWVsZClcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgbGFiZWxzLm1heGxlbmd0aE1ldFdpdGhGaWVsZChjb250cm9sLmNvbmZpZ1ttYXhsZW5ndGhNZXRGaWVsZF0/LmxhYmVsLCBjb250cm9sLmNvbmZpZ1ttYXhsZW5ndGhNZXRGaWVsZF0/Lm1heGxlbmd0aCkgfX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzRGlydHkgJiYgZXJyb3JzPy5pbnZhbGlkQWRkcmVzc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0Zvcj1cImxldCBpbnZhbGlkQWRkcmVzc0ZpZWxkIG9mIGVycm9ycz8uaW52YWxpZEFkZHJlc3NGaWVsZHNcIlxuICAgICAgICAgICAgICAgICAgPnt7IGludmFsaWRBZGRyZXNzRmllbGQgfCB1cHBlcmNhc2UgfX0ge3sgbGFiZWxzLmlzUmVxdWlyZWQgfX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPCEtLUZpZWxkIEhpbnQtLT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvblwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uZGVzY3JpcHRpb25cIj4ge3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uZGVzY3JpcHRpb24gfX0gPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndhcm5pbmctdGV4dFwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ud2FybmluZ1wiPnt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLndhcm5pbmcgfX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzPVwiY2hhcmFjdGVyLWNvdW50XCJcbiAgICAgICAgICAgICAgW2NsYXNzLmVycm9yXT1cIlxuICAgICAgICAgICAgICAgIChlcnJvcnM/Lm1heGxlbmd0aCAmJiAhZXJyb3JzPy5tYXhsZW5ndGhGaWVsZHMpIHx8XG4gICAgICAgICAgICAgICAgKGVycm9ycz8ubWF4bGVuZ3RoICYmIGVycm9ycz8ubWF4bGVuZ3RoRmllbGRzICYmIGVycm9ycy5tYXhsZW5ndGhGaWVsZHMuaW5jbHVkZXMoZm9jdXNlZEZpZWxkKSlcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKm5nSWY9XCJzaG93Q291bnQgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgIT09ICdwaWNrZXInXCJcbiAgICAgICAgICAgICAgPnt7IGl0ZW1Db3VudCB9fS97eyBtYXhMZW5ndGggfHwgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubWF4bGVuZ3RoIH19PC9zcGFuXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzcz1cInJlY29yZC1jb3VudFwiXG4gICAgICAgICAgICAgIFtjbGFzcy56ZXJvLWNvdW50XT1cIml0ZW1Db3VudCA9PT0gMFwiXG4gICAgICAgICAgICAgIFtjbGFzcy5yb3ctcGlja2VyXT1cImZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29uZmlnLmNvbHVtbnNcIlxuICAgICAgICAgICAgICAqbmdJZj1cInNob3dDb3VudCAmJiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3BpY2tlcidcIlxuICAgICAgICAgICAgICA+e3sgaXRlbUNvdW50IH19L3t7IG1heExlbmd0aCB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5tYXhsZW5ndGggfX08L3NwYW5cbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tVGlwIFdlbC0tPlxuICAgICAgICAgIDxub3ZvLXRpcC13ZWxsXG4gICAgICAgICAgICAqbmdJZj1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnRpcFdlbGxcIlxuICAgICAgICAgICAgW25hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgICAgW3RpcF09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XT8udGlwV2VsbD8udGlwXCJcbiAgICAgICAgICAgIFtpY29uXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldPy50aXBXZWxsPy5pY29uXCJcbiAgICAgICAgICAgIFtidXR0b25dPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0/LnRpcFdlbGw/LmJ1dHRvblwiXG4gICAgICAgICAgPjwvbm92by10aXAtd2VsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpICpuZ0lmPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uZmllbGRJbnRlcmFjdGlvbmxvYWRpbmdcIiBjbGFzcz1cImxvYWRpbmdcIj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgICAgIHhtbG5zOmE9XCJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvXCJcbiAgICAgICAgICAgIHg9XCIwcHhcIlxuICAgICAgICAgICAgeT1cIjBweFwiXG4gICAgICAgICAgICB3aWR0aD1cIjE4LjJweFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxOC41cHhcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxOC4yIDE4LjVcIlxuICAgICAgICAgICAgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4LjIgMTguNTtcIlxuICAgICAgICAgICAgeG1sOnNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj5cbiAgICAgICAgICAgICAgLnNwaW5uZXIge1xuICAgICAgICAgICAgICAgIGZpbGw6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBjbGFzcz1cInNwaW5uZXJcIlxuICAgICAgICAgICAgICBkPVwiTTkuMiwxOC41QzQuMSwxOC41LDAsMTQuNCwwLDkuMlM0LjEsMCw5LjIsMGMwLjksMCwxLjksMC4xLDIuNywwLjRjMC44LDAuMiwxLjIsMS4xLDEsMS45XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy0wLjIsMC44LTEuMSwxLjItMS45LDFDMTAuNSwzLjEsOS45LDMsOS4yLDNDNS44LDMsMyw1LjgsMyw5LjJzMi44LDYuMiw2LjIsNi4yYzIuOCwwLDUuMy0xLjksNi00LjdjMC4yLTAuOCwxLTEuMywxLjgtMS4xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzAuOCwwLjIsMS4zLDEsMS4xLDEuOEMxNy4xLDE1LjcsMTMuNCwxOC41LDkuMiwxOC41elwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2k+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzogJ2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlJyxcbiAgICAnW2F0dHIuZGF0YS1jb250cm9sLXR5cGVdJzogJ2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5yZWFkT25seScsXG4gICAgJ1tjbGFzcy5oaWRkZW5dJzogJ2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmhpZGRlbicsXG4gICAgJ1thdHRyLmRhdGEtY29udHJvbC1rZXldJzogJ2NvbnRyb2wua2V5JyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NvbnRyb2xFbGVtZW50IGV4dGVuZHMgT3V0c2lkZUNsaWNrIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKVxuICBjb250cm9sOiBhbnk7XG4gIEBJbnB1dCgpXG4gIGZvcm06IGFueTtcbiAgQElucHV0KClcbiAgY29uZGVuc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGF1dG9Gb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KClcbiAgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGVkaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgc2F2ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBkZWxldGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgdXBsb2FkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgnYmx1cicpXG4gIGdldCBvbkJsdXIoKTogT2JzZXJ2YWJsZTxGb2N1c0V2ZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuX2JsdXJFbWl0dGVyLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgQE91dHB1dCgnZm9jdXMnKVxuICBnZXQgb25Gb2N1cygpOiBPYnNlcnZhYmxlPEZvY3VzRXZlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNFbWl0dGVyLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIHB1YmxpYyBtYXhMZW5ndGg6IG51bWJlcjtcbiAgcHVibGljIGZvY3VzZWRGaWVsZDogc3RyaW5nO1xuICBmb3JtYXR0ZWRWYWx1ZTogc3RyaW5nID0gJyc7XG4gIHBlcmNlbnRWYWx1ZTogbnVtYmVyO1xuICBtYXhMZW5ndGhNZXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXRlbUNvdW50OiBudW1iZXIgPSAwO1xuICBtYXNrT3B0aW9uczogSU1hc2tPcHRpb25zO1xuXG4gIHByaXZhdGUgX2JsdXJFbWl0dGVyOiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIHByaXZhdGUgX2ZvY3VzRW1pdHRlcjogRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuICBwcml2YXRlIF9mb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2VudGVyZWRUZXh0OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBmb3JjZUNsZWFyU3Vic2NyaXB0aW9uOiBhbnk7XG4gIHByaXZhdGUgcGVyY2VudENoYW5nZVN1YnNjcmlwdGlvbjogYW55O1xuICBwcml2YXRlIHZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uOiBhbnk7XG4gIHByaXZhdGUgZGF0ZUNoYW5nZVN1YnNjcmlwdGlvbjogYW55O1xuICBwcml2YXRlIF9zaG93Q291bnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBjaGFyYWN0ZXJDb3VudEZpZWxkOiBzdHJpbmc7XG4gIHByaXZhdGUgbWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgc3RhdHVzQ2hhbmdlU3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgdGVtcGxhdGVzOiBhbnkgPSB7fTtcbiAgdGVtcGxhdGVDb250ZXh0OiBhbnk7XG4gIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkYXRlRm9ybWF0U2VydmljZTogRGF0ZUZvcm1hdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmaWVsZEludGVyYWN0aW9uQXBpOiBGaWVsZEludGVyYWN0aW9uQXBpLFxuICAgIHByaXZhdGUgdGVtcGxhdGVTZXJ2aWNlOiBOb3ZvVGVtcGxhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIGxvY2FsZTogc3RyaW5nID0gJ2VuLVVTJyxcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudCk7XG4gIH1cblxuICBnZXQgbWF4bGVuZ3RoTWV0RmllbGQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5tYXhMZW5ndGhNZXRFcnJvcmZpZWxkcyAmJiB0aGlzLm1heExlbmd0aE1ldEVycm9yZmllbGRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMuZmluZCgoZmllbGQ6IHN0cmluZykgPT4gZmllbGQgPT09IHRoaXMuZm9jdXNlZEZpZWxkKSB8fCAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtYXhsZW5ndGhFcnJvckZpZWxkKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuZXJyb3JzICYmIHRoaXMuZXJyb3JzLm1heGxlbmd0aEZpZWxkcyAmJiB0aGlzLmVycm9ycy5tYXhsZW5ndGhGaWVsZHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvcnMubWF4bGVuZ3RoRmllbGRzLmZpbmQoKGZpZWxkOiBzdHJpbmcpID0+IGZpZWxkID09PSB0aGlzLmZvY3VzZWRGaWVsZCkgfHwgJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICBnZXQgc2hvd0ZpZWxkTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gIXRoaXMuZXJyb3JzICYmICF0aGlzLm1heExlbmd0aE1ldCAmJiBIZWxwZXJzLmlzQmxhbmsodGhpcy5jb250cm9sLmRlc2NyaXB0aW9uKTtcbiAgfVxuXG4gIGdldCBzaG93TWF4TGVuZ3RoTWV0TWVzc2FnZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuaXNEaXJ0eSAmJiB0aGlzLm1heExlbmd0aE1ldCAmJiB0aGlzLmZvY3VzZWQgJiYgKCF0aGlzLmVycm9ycyB8fCAodGhpcy5lcnJvcnMgJiYgIXRoaXMuZXJyb3JzLm1heGxlbmd0aCkpKSB8fFxuICAgICAgKHRoaXMuaXNEaXJ0eSAmJlxuICAgICAgICB0aGlzLm1heGxlbmd0aE1ldEZpZWxkICYmXG4gICAgICAgIHRoaXMuZm9jdXNlZCAmJlxuICAgICAgICAoIXRoaXMuZXJyb3JzIHx8ICh0aGlzLmVycm9ycyAmJiAhdGhpcy5lcnJvcnMubWF4bGVuZ3RoRmllbGRzLmluY2x1ZGVzKHRoaXMubWF4bGVuZ3RoTWV0RmllbGQpKSkpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBzaG93RXJyb3JTdGF0ZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuaXNEaXJ0eSAmJiB0aGlzLmVycm9ycykgfHxcbiAgICAgICh0aGlzLmZvY3VzZWQgJiYgdGhpcy5lcnJvcnMgJiYgdGhpcy5lcnJvcnMubWF4bGVuZ3RoICYmIHRoaXMuZXJyb3JzLm1heGxlbmd0aEZpZWxkcykgfHxcbiAgICAgICh0aGlzLmZvY3VzZWQgJiYgdGhpcy5lcnJvcnMgJiYgdGhpcy5lcnJvcnMubWF4bGVuZ3RoICYmIHRoaXMuZXJyb3JzLm1heGxlbmd0aEZpZWxkcyAmJiB0aGlzLm1heGxlbmd0aEVycm9yRmllbGQpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBzaG93Q291bnQoKSB7XG4gICAgbGV0IGNoYXJDb3VudDogYm9vbGVhbiA9XG4gICAgICAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCAmJlxuICAgICAgICB0aGlzLmZvY3VzZWQgJiZcbiAgICAgICAgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3RleHQtYXJlYScgfHxcbiAgICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICd0ZXh0Ym94JykpIHx8XG4gICAgICAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCAmJiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICdwaWNrZXInKTtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0NvdW50IHx8IGNoYXJDb3VudDtcbiAgfVxuXG4gIHNldCBzaG93Q291bnQodmFsdWUpIHtcbiAgICB0aGlzLl9zaG93Q291bnQgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzaG93TWVzc2FnZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc2hvd0NvdW50IHx8XG4gICAgICAhSGVscGVycy5pc0VtcHR5KHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS53YXJuaW5nKSB8fFxuICAgICAgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uZGVzY3JpcHRpb24pXG4gICAgKTtcbiAgfVxuXG4gIGdldCBkZWNpbWFsU2VwYXJhdG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLmxvY2FsZSkuZm9ybWF0KDEuMilbMV07XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgRE9fTk9UX0ZPQ1VTX01FOiBzdHJpbmdbXSA9IFsncGlja2VyJywgJ3RpbWUnLCAnZGF0ZScsICdkYXRlLXRpbWUnXTtcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgJiYgIURPX05PVF9GT0NVU19NRS5pbmNsdWRlcyh0aGlzLmNvbnRyb2wuY29udHJvbFR5cGUpKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IGlucHV0OiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAvLyBTdWJzY3JpYmUgdG8gY29udHJvbCBpbnRlcmFjdGlvbnNcbiAgICBpZiAodGhpcy5jb250cm9sLmludGVyYWN0aW9ucyAmJiAhdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGZvciAobGV0IGludGVyYWN0aW9uIG9mIHRoaXMuY29udHJvbC5pbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgc3dpdGNoIChpbnRlcmFjdGlvbi5ldmVudCkge1xuICAgICAgICAgIGNhc2UgJ2JsdXInOlxuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMub25CbHVyLnBpcGUoZGVib3VuY2VUaW1lKDMwMCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZm9jdXMnOlxuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMub25Gb2N1cy5waXBlKGRlYm91bmNlVGltZSgzMDApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NoYW5nZSc6XG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlQ2hhbmdlcy5waXBlKGRlYm91bmNlVGltZSgzMDApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2luaXQnOlxuICAgICAgICAgICAgaW50ZXJhY3Rpb24uaW52b2tlT25Jbml0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW50ZXJhY3Rpb24uaW52b2tlT25Jbml0KSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5leGVjdXRlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudGVtcGxhdGVzID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuZ2V0QWxsKCk7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIC8vIE1ha2Ugc3VyZSB0byBpbml0aWFsbHkgZm9ybWF0IHRoZSB0aW1lIGNvbnRyb2xzXG4gICAgaWYgKHRoaXMuY29udHJvbCAmJiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsdWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAndGV4dGJveCcgfHxcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAndGV4dC1hcmVhJ1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMuaXRlbUNvdW50ID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuY29udHJvbCkge1xuICAgICAgLy8gTGlzdGVuIHRvIGNsZWFyIGV2ZW50c1xuICAgICAgdGhpcy5mb3JjZUNsZWFyU3Vic2NyaXB0aW9uID0gdGhpcy5jb250cm9sLmZvcmNlQ2xlYXIuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jbGVhclZhbHVlKCk7XG4gICAgICB9KTtcbiAgICAgIC8vIEZvciBBc3luY2hyb25vdXMgdmFsaWRhdGlvbnNcbiAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKCh2YWxpZGl0eSkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0gPSB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQ7XG4gICAgICAgIGlmICh2YWxpZGl0eSAhPT0gJ1BFTkRJTkcnICYmIHRoaXMuZm9ybS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KSB7XG4gICAgICAgICAgdGhpcy5mb3JtLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0ID0ge1xuICAgICAgJGltcGxpY2l0OiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIHJlc3RyaWN0S2V5czogdGhpcy5yZXN0cmljdEtleXMuYmluZCh0aGlzKSxcbiAgICAgICAgZW1pdENoYW5nZTogdGhpcy5lbWl0Q2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZUZvY3VzOiB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZVBlcmNlbnRDaGFuZ2U6IHRoaXMuaGFuZGxlUGVyY2VudENoYW5nZS5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVCbHVyOiB0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlVGV4dEFyZWFJbnB1dDogdGhpcy5oYW5kbGVUZXh0QXJlYUlucHV0LmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZUVkaXQ6IHRoaXMuaGFuZGxlRWRpdC5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVTYXZlOiB0aGlzLmhhbmRsZVNhdmUuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlRGVsZXRlOiB0aGlzLmhhbmRsZURlbGV0ZS5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVVcGxvYWQ6IHRoaXMuaGFuZGxlVXBsb2FkLmJpbmQodGhpcyksXG4gICAgICAgIG1vZGVsQ2hhbmdlOiB0aGlzLm1vZGVsQ2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgIG1vZGVsQ2hhbmdlV2l0aFJhdzogdGhpcy5tb2RlbENoYW5nZVdpdGhSYXcuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlQWRkcmVzc0NoYW5nZTogdGhpcy5oYW5kbGVBZGRyZXNzQ2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZVR5cGluZzogdGhpcy5oYW5kbGVUeXBpbmcuYmluZCh0aGlzKSxcbiAgICAgICAgdXBkYXRlVmFsaWRpdHk6IHRoaXMudXBkYXRlVmFsaWRpdHkuYmluZCh0aGlzKSxcbiAgICAgICAgdG9nZ2xlQWN0aXZlOiB0aGlzLnRvZ2dsZUFjdGl2ZS5iaW5kKHRoaXMpLFxuICAgICAgICB2YWxpZGF0ZUludGVnZXJJbnB1dDogdGhpcy52YWxpZGF0ZUludGVnZXJJbnB1dC5iaW5kKHRoaXMpLFxuICAgICAgICB2YWxpZGF0ZU51bWJlck9uQmx1cjogdGhpcy52YWxpZGF0ZU51bWJlck9uQmx1ci5iaW5kKHRoaXMpLFxuICAgICAgfSxcbiAgICAgIGZvcm06IHRoaXMuZm9ybSxcbiAgICB9O1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC50b29sdGlwUG9zaXRpb24gPSB0aGlzLnRvb2x0aXBQb3NpdGlvbjtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQudG9vbHRpcCA9IHRoaXMudG9vbHRpcDtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQudG9vbHRpcFNpemUgPSB0aGlzLnRvb2x0aXBTaXplO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC50b29sdGlwUHJlbGluZSA9IHRoaXMudG9vbHRpcFByZWxpbmU7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnJlbW92ZVRvb2x0aXBBcnJvdyA9IHRoaXMucmVtb3ZlVG9vbHRpcEFycm93O1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5zdGFydHVwRm9jdXMgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc3RhcnR1cEZvY3VzO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5maWxlQnJvd3NlckltYWdlVXBsb2FkVXJsID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmw7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0Lm1pbmltYWwgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWluaW1hbDtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQuY3VycmVuY3lGb3JtYXQgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY3VycmVuY3lGb3JtYXQ7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnBlcmNlbnRWYWx1ZSA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5wZXJjZW50VmFsdWU7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LmNvbmZpZyA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb25maWc7XG5cbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldICYmIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zdWJUeXBlID09PSAncGVyY2VudGFnZScpIHtcbiAgICAgIGlmICghSGVscGVycy5pc0VtcHR5KHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWx1ZSkpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnBlcmNlbnRWYWx1ZSA9IE51bWJlcihcbiAgICAgICAgICAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlICogMTAwKS50b0ZpeGVkKDYpLnJlcGxhY2UoL1xcLj8wKiQvLCAnJyksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLnBlcmNlbnRDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uZGlzcGxheVZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICghSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5wZXJjZW50VmFsdWUgPSBOdW1iZXIoKHZhbHVlICogMTAwKS50b0ZpeGVkKDYpLnJlcGxhY2UoL1xcLj8wKiQvLCAnJykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBVbnN1YnNjcmliZSBmcm9tIGNvbnRyb2wgaW50ZXJhY3Rpb25zXG4gICAgaWYgKHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgLy8gaWYgKHRoaXMuZGF0ZUNoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgIC8vICAgICB0aGlzLmRhdGVDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAvLyB9XG4gICAgaWYgKHRoaXMuZm9yY2VDbGVhclN1YnNjcmlwdGlvbikge1xuICAgICAgLy8gVW4tbGlzdGVuIGZvciBjbGVhciBldmVudHNcbiAgICAgIHRoaXMuZm9yY2VDbGVhclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wZXJjZW50Q2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICAvLyBVbi1saXN0ZW4gZm9yIGNsZWFyIGV2ZW50c1xuICAgICAgdGhpcy5wZXJjZW50Q2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGVDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZGF0ZUNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0dXNDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gIH1cblxuICBnZXQgZXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uZXJyb3JzO1xuICB9XG5cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWxpZDtcbiAgfVxuXG4gIGdldCBpc0RpcnR5KCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uZGlydHkgfHwgdGhpcy5jb250cm9sLmRpcnR5O1xuICB9XG5cbiAgZ2V0IGhhc1ZhbHVlKCkge1xuICAgIHJldHVybiAhSGVscGVycy5pc0VtcHR5KHRoaXMuZm9ybS52YWx1ZVt0aGlzLmNvbnRyb2wua2V5XSk7XG4gIH1cblxuICBnZXQgZm9jdXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNlZDtcbiAgfVxuXG4gIGdldCB0b29sdGlwKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udG9vbHRpcDtcbiAgfVxuXG4gIGdldCB0b29sdGlwUG9zaXRpb24oKSB7XG4gICAgaWYgKEhlbHBlcnMuaXNCbGFuayh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udG9vbHRpcFBvc2l0aW9uKSkge1xuICAgICAgcmV0dXJuICdyaWdodCc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udG9vbHRpcFBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0IHRvb2x0aXBTaXplKCkge1xuICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBTaXplKSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBTaXplO1xuICB9XG5cbiAgZ2V0IHRvb2x0aXBQcmVsaW5lKCkge1xuICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBQcmVsaW5lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBQcmVsaW5lO1xuICB9XG5cbiAgZ2V0IHJlbW92ZVRvb2x0aXBBcnJvdygpIHtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZW1vdmVUb29sdGlwQXJyb3cpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmVtb3ZlVG9vbHRpcEFycm93O1xuICB9XG5cbiAgZ2V0IGFsd2F5c0FjdGl2ZSgpIHtcbiAgICAvLyBDb250cm9scyB0aGF0IGhhdmUgdGhlIGxhYmVsIGFjdGl2ZSBpZiB0aGVyZSBpcyBhbnkgdXNlciBlbnRlcmVkIHRleHQgaW4gdGhlIGZpZWxkXG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3BpY2tlcicgJiYgdGhpcy5fZW50ZXJlZFRleHQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDb250cm9scyB0aGF0IGFsd2F5cyBoYXZlIHRoZSBsYWJlbCBhY3RpdmVcbiAgICByZXR1cm4gKFxuICAgICAgW1xuICAgICAgICAndGlsZXMnLFxuICAgICAgICAnY2hlY2tsaXN0JyxcbiAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgJ2RhdGUnLFxuICAgICAgICAndGltZScsXG4gICAgICAgICdkYXRlLXRpbWUnLFxuICAgICAgICAnYWRkcmVzcycsXG4gICAgICAgICdmaWxlJyxcbiAgICAgICAgJ2VkaXRvcicsXG4gICAgICAgICdhY2UtZWRpdG9yJyxcbiAgICAgICAgJ3JhZGlvJyxcbiAgICAgICAgJ3RleHQtYXJlYScsXG4gICAgICAgICdxdWljay1ub3RlJyxcbiAgICAgIF0uaW5kZXhPZih0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUpICE9PSAtMVxuICAgICk7XG4gIH1cblxuICBnZXQgcmVxdWlyZXNFeHRyYVNwYWNpbmcoKSB7XG4gICAgLy8gQ2hpcHNcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAncGlja2VyJyAmJiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubXVsdGlwbGUgJiYgdGhpcy5oYXNWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGV4ZWN1dGVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbikge1xuICAgIGlmIChpbnRlcmFjdGlvbi5zY3JpcHQgJiYgSGVscGVycy5pc0Z1bmN0aW9uKGludGVyYWN0aW9uLnNjcmlwdCkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpZWxkSW50ZXJhY3Rpb25BcGkuZm9ybSA9IHRoaXMuZm9ybTtcbiAgICAgICAgdGhpcy5maWVsZEludGVyYWN0aW9uQXBpLmN1cnJlbnRLZXkgPSB0aGlzLmNvbnRyb2wua2V5O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGludGVyYWN0aW9uLnNjcmlwdCh0aGlzLmZpZWxkSW50ZXJhY3Rpb25BcGksIHRoaXMuY29udHJvbC5rZXkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmluZm8oJ0ZpZWxkIEludGVyYWN0aW9uIEVycm9yIScsIHRoaXMuY29udHJvbC5rZXkpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVR5cGluZyhldmVudDogYW55KSB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IGV2ZW50ICYmIGV2ZW50Lmxlbmd0aDtcbiAgICB0aGlzLl9lbnRlcmVkVGV4dCA9IGV2ZW50O1xuICB9XG5cbiAgaGFuZGxlRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQsIGZpZWxkPzogYW55KSB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gICAgdGhpcy5mb2N1c2VkRmllbGQgPSBmaWVsZDtcbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayh0aGlzLmNoYXJhY3RlckNvdW50RmllbGQpICYmIHRoaXMuY2hhcmFjdGVyQ291bnRGaWVsZCA9PT0gZmllbGQpIHtcbiAgICAgIHRoaXMuc2hvd0NvdW50ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAnYWRkcmVzcycgJiZcbiAgICAgIGZpZWxkICYmXG4gICAgICAhSGVscGVycy5pc0VtcHR5KHRoaXMuZm9ybS52YWx1ZVt0aGlzLmNvbnRyb2wua2V5XSkgJiZcbiAgICAgICFIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLnZhbHVlW3RoaXMuY29udHJvbC5rZXldW2ZpZWxkXSlcbiAgICApIHtcbiAgICAgIHRoaXMuaGFuZGxlQWRkcmVzc0NoYW5nZSh7IHZhbHVlOiB0aGlzLmZvcm0udmFsdWVbdGhpcy5jb250cm9sLmtleV1bZmllbGRdLCBmaWVsZCB9KTtcbiAgICB9XG4gICAgdGhpcy5fZm9jdXNFbWl0dGVyLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgaGFuZGxlQmx1cihldmVudDogRm9jdXNFdmVudCkge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvY3VzZWRGaWVsZCA9ICcnO1xuICAgIHRoaXMuc2hvd0NvdW50ID0gZmFsc2U7XG4gICAgdGhpcy5fYmx1ckVtaXR0ZXIuZW1pdChldmVudCk7XG4gIH1cblxuICBjbGVhclZhbHVlKCkge1xuICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zZXRWYWx1ZShudWxsKTtcbiAgICB0aGlzLmZvcm1hdHRlZFZhbHVlID0gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZVRleHRBcmVhSW5wdXQoZXZlbnQpIHtcbiAgICB0aGlzLmVtaXRDaGFuZ2UoZXZlbnQpO1xuICAgIHRoaXMucmVzdHJpY3RLZXlzKGV2ZW50KTtcbiAgfVxuXG4gIGNoZWNrTWF4TGVuZ3RoKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY29udHJvbCAmJiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWF4bGVuZ3RoKSB7XG4gICAgICB0aGlzLml0ZW1Db3VudCA9IGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGg7XG4gICAgICB0aGlzLm1heExlbmd0aE1ldCA9IGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPj0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aDtcbiAgICB9XG4gIH1cblxuICBtb2RlbENoYW5nZVdpdGhSYXcoZXZlbnQpIHtcbiAgICBpZiAoSGVscGVycy5pc0VtcHR5KGV2ZW50LnZhbHVlKSkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW50ZXJlZFRleHQgPSAnJztcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3BpY2tlcicgJiYgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCkge1xuICAgICAgdGhpcy5pdGVtQ291bnQgPSBldmVudC52YWx1ZSA/IGV2ZW50LnZhbHVlLmxlbmd0aCA6IDA7XG4gICAgICB0aGlzLm1heExlbmd0aE1ldCA9IHRoaXMuaXRlbUNvdW50ID49IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGggPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yYXdWYWx1ZSA9IGV2ZW50LnJhd1ZhbHVlO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQudmFsdWUpO1xuICB9XG5cbiAgbW9kZWxDaGFuZ2UodmFsdWUpIHtcbiAgICBpZiAoSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW50ZXJlZFRleHQgPSAnJztcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICB2YWxpZGF0ZU51bWJlck9uQmx1cihldmVudDogRm9jdXNFdmVudCkge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvY3VzZWRGaWVsZCA9ICcnO1xuICAgIHRoaXMuc2hvd0NvdW50ID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zdWJUeXBlID09PSAnbnVtYmVyJykge1xuICAgICAgdGhpcy52YWxpZGF0ZUludGVnZXJJbnB1dCgpO1xuICAgIH1cbiAgICB0aGlzLl9ibHVyRW1pdHRlci5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHZhbGlkYXRlSW50ZWdlcklucHV0KCkge1xuICAgIGNvbnN0IE5VTUJFUlNfT05MWSA9IC9eW1xcZFxcLV1cXGQqJC87XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWx1ZSAmJiAhTlVNQkVSU19PTkxZLnRlc3QodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlKSkge1xuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1hcmtBc0ludmFsaWQoXG4gICAgICAgIGAke3RoaXMubGFiZWxzLmludmFsaWRJbnRlZ2VySW5wdXR9ICR7dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmxhYmVsLnRvVXBwZXJDYXNlKCl9YCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVzdHJpY3RLZXlzKGV2ZW50KSB7XG4gICAgY29uc3QgTlVNQkVSU19PTkxZID0gL1swLTlcXC1dLztcbiAgICBjb25zdCBOVU1CRVJTX1dJVEhfREVDSU1BTF9ET1QgPSAvWzAtOVxcLlxcLV0vO1xuICAgIGNvbnN0IE5VTUJFUlNfV0lUSF9ERUNJTUFMX0RPVF9BTkRfQ09NTUEgPSAvWzAtOVxcLlxcLFxcLV0vO1xuICAgIGNvbnN0IFVUSUxJVFlfS0VZUyA9IFsnQmFja3NwYWNlJywgJ0RlbGV0ZScsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICdUYWInXTtcbiAgICBsZXQga2V5ID0gZXZlbnQua2V5O1xuXG4gICAgLy8gTnVtYmVycyBvciBudW1iZXJzIGFuZCBkZWNpbWFsIGNoYXJhY3RlcnMgb25seVxuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc3ViVHlwZSA9PT0gJ251bWJlcicgJiYgIShOVU1CRVJTX09OTFkudGVzdChrZXkpIHx8IFVUSUxJVFlfS0VZUy5pbmNsdWRlcyhrZXkpKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgWydjdXJyZW5jeScsICdmbG9hdCcsICdwZXJjZW50YWdlJ10uaW5jbHVkZXModGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnN1YlR5cGUpICYmXG4gICAgICAhKFxuICAgICAgICAodGhpcy5kZWNpbWFsU2VwYXJhdG9yID09PSAnLicgJiYgTlVNQkVSU19XSVRIX0RFQ0lNQUxfRE9ULnRlc3Qoa2V5KSkgfHxcbiAgICAgICAgKHRoaXMuZGVjaW1hbFNlcGFyYXRvciA9PT0gJywnICYmIE5VTUJFUlNfV0lUSF9ERUNJTUFMX0RPVF9BTkRfQ09NTUEudGVzdChrZXkpKSB8fFxuICAgICAgICBVVElMSVRZX0tFWVMuaW5jbHVkZXMoa2V5KVxuICAgICAgKVxuICAgICkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgLy8gTWF4IExlbmd0aFxuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWF4bGVuZ3RoICYmIGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPj0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVQZXJjZW50Q2hhbmdlKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0Wyd2YWx1ZSddO1xuICAgIGxldCBwZXJjZW50ID0gSGVscGVycy5pc0VtcHR5KHZhbHVlKSA/IG51bGwgOiBOdW1iZXIoKHZhbHVlIC8gMTAwKS50b0ZpeGVkKDYpLnJlcGxhY2UoL1xcLj8wKiQvLCAnJykpO1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KHBlcmNlbnQpKSB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHBlcmNlbnQpO1xuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnNldFZhbHVlKHBlcmNlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KG51bGwpO1xuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnNldFZhbHVlKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVRhYkZvclBpY2tlcnMoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZSAmJiBldmVudCAmJiBldmVudC5rZXlDb2RlKSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRVNDIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlRBQikge1xuICAgICAgICB0aGlzLnRvZ2dsZUFjdGl2ZShldmVudCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtaXRDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLmNoZWNrTWF4TGVuZ3RoKHZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZUVkaXQodmFsdWUpIHtcbiAgICB0aGlzLmVkaXQuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVTYXZlKHZhbHVlKSB7XG4gICAgdGhpcy5zYXZlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlRGVsZXRlKHZhbHVlKSB7XG4gICAgdGhpcy5kZWxldGUuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVVcGxvYWQodmFsdWUpIHtcbiAgICB0aGlzLnVwbG9hZC5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZUFkZHJlc3NDaGFuZ2UoZGF0YSkge1xuICAgIGlmIChcbiAgICAgIGRhdGEgJiZcbiAgICAgICFIZWxwZXJzLmlzQmxhbmsoZGF0YS52YWx1ZSkgJiZcbiAgICAgIGRhdGEuZmllbGQgJiZcbiAgICAgIHRoaXMuY29udHJvbC5jb25maWdbZGF0YS5maWVsZF0gJiZcbiAgICAgICFIZWxwZXJzLmlzRW1wdHkodGhpcy5jb250cm9sLmNvbmZpZ1tkYXRhLmZpZWxkXS5tYXhsZW5ndGgpXG4gICAgKSB7XG4gICAgICB0aGlzLml0ZW1Db3VudCA9IGRhdGEudmFsdWUubGVuZ3RoO1xuICAgICAgdGhpcy5jaGFyYWN0ZXJDb3VudEZpZWxkID0gZGF0YS5maWVsZDtcbiAgICAgIHRoaXMubWF4TGVuZ3RoID0gdGhpcy5jb250cm9sLmNvbmZpZ1tkYXRhLmZpZWxkXS5tYXhsZW5ndGg7XG4gICAgICB0aGlzLnNob3dDb3VudCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5tYXhMZW5ndGggPT09IHRoaXMuaXRlbUNvdW50KSB7XG4gICAgICAgIHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMucHVzaChkYXRhLmZpZWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMgPSB0aGlzLm1heExlbmd0aE1ldEVycm9yZmllbGRzLmZpbHRlcigoZmllbGQ6IHN0cmluZykgPT4gZmllbGQgIT09IGRhdGEuZmllbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVZhbGlkaXR5KHNob3VsZEV2ZW50QmVFbWl0dGVkKTogdm9pZCB7XG4gICAgbGV0IGVtaXRFdmVudDogYm9vbGVhbiA9IHNob3VsZEV2ZW50QmVFbWl0dGVkID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50IH0pO1xuICB9XG59XG4iXX0=