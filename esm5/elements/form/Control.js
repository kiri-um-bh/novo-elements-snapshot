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
                    template: "\n        <div class=\"novo-control-container\" [hidden]=\"form.controls[control.key].hidden || form.controls[control.key].type === 'hidden' || form.controls[control.key].controlType === 'hidden'\">\n            <!--Encrypted Field-->\n            <span [tooltip]=\"labels.encryptedFieldTooltip\" [tooltipPosition]=\"'right'\"><i [hidden]=\"!form.controls[control.key].encrypted\"\n            class=\"bhi-lock\"></i></span>\n            <!--Label (for horizontal)-->\n            <label [attr.for]=\"control.key\" *ngIf=\"form.layout !== 'vertical' && form.controls[control.key].label && !condensed\" [ngClass]=\"{'encrypted': form.controls[control.key].encrypted }\">\n                {{ form.controls[control.key].label }}\n            </label>\n            <div class=\"novo-control-outer-container\">\n                <!--Label (for vertical)-->\n                <label\n                    *ngIf=\"form.layout === 'vertical' && form.controls[control.key].label && !condensed\"\n                    class=\"novo-control-label\"\n                    [attr.for]=\"control.key\"\n                    [class.novo-control-empty]=\"!hasValue\"\n                    [class.novo-control-focused]=\"focused\"\n                    [class.novo-control-filled]=\"hasValue\"\n                    [class.novo-control-always-active]=\"alwaysActive || form.controls[control.key].placeholder\"\n                    [class.novo-control-extra-spacing]=\"requiresExtraSpacing\">\n                    {{ form.controls[control.key].label }}\n                </label>\n                <div class=\"novo-control-inner-container\" [class.required]=\"form.controls[control.key].required && !form.controls[control.key].readOnly\">\n                    <div class=\"novo-control-inner-input-container\" [class.novo-control-filled]=\"hasValue\" [class.novo-control-empty]=\"!hasValue\">\n                      <!--Required Indicator-->\n                        <i [hidden]=\"!form.controls[control.key].required || form.controls[control.key].readOnly\"\n                            class=\"required-indicator {{ form.controls[control.key].controlType }}\"\n                            [ngClass]=\"{'bhi-circle': !isValid, 'bhi-check': isValid}\" *ngIf=\"!condensed || form.controls[control.key].required\">\n                        </i>\n                        <!--Form Controls-->\n                        <div class=\"novo-control-input {{ form.controls[control.key].controlType }}\" [attr.data-automation-id]=\"control.key\" [class.control-disabled]=\"form.controls[control.key].disabled\">\n                            <!--TODO prefix/suffix on the control-->\n                            <ng-container *ngIf=\"templates\">\n                              <ng-container *ngTemplateOutlet=\"templates[form.controls[control.key].controlType]; context: templateContext\"></ng-container>\n                            </ng-container>\n                            <ng-container *ngIf=\"!templates || loading\">\n                                <div class=\"novo-control-input-container novo-control-input-with-label\">\n                                  <input type=\"text\"/>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n                    <!--Error Message-->\n                    <div class=\"field-message {{ form.controls[control.key].controlType }}\" *ngIf=\"!condensed\" [class.has-tip]=\"form.controls[control.key].tipWell\" [ngClass]=\"showErrorState || showMaxLengthMetMessage ? 'error-shown' : 'error-hidden'\">\n                        <div class=\"messages\" [ngClass]=\"showMessages ? 'count-shown messages-shown' : 'count-hidden messages-hidden'\">\n                            <span class=\"error-text\" *ngIf=\"showFieldMessage\"></span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && errors?.required && form.controls[control.key].controlType !== 'address'\">{{ form.controls[control.key].label | uppercase }} {{ labels.isRequired }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && errors?.minlength\">{{ form.controls[control.key].label | uppercase }} {{ labels.minLength }} {{ form.controls[control.key].minlength }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && maxLengthMet && focused && !errors?.maxlength && form.controls[control.key].controlType !== 'picker'\">{{ labels.maxlengthMet(form.controls[control.key].maxlength) }}</span>\n                            <span class=\"error-text\" *ngIf=\"errors?.maxlength && focused && !errors?.maxlengthFields\">{{ labels.invalidMaxlength(form.controls[control.key].maxlength) }}</span>\n                            <span class=\"error-text\" *ngIf=\"maxLengthMet && form.controls[control.key].controlType === 'picker'\">{{ labels.maxRecordsReached }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && errors?.invalidEmail\">{{ form.controls[control.key].label | uppercase }} {{ labels.invalidEmail }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && (errors?.integerTooLarge || errors?.doubleTooLarge)\">{{ form.controls[control.key].label | uppercase }} {{ labels.isTooLarge }}</span>\n                            <span *ngIf=\"isDirty && errors?.minYear\">{{ form.controls[control.key].label | uppercase }} {{ labels.notValidYear }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && (errors?.custom)\">{{ errors.custom }}</span>\n                            <span class=\"error-text\" *ngIf=\"errors?.maxlength && errors?.maxlengthFields && maxlengthErrorField && focused\">\n                                {{ labels.invalidMaxlengthWithField(control.config[maxlengthErrorField]?.label, control.config[maxlengthErrorField]?.maxlength) }}\n                            </span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && maxlengthMetField && focused && !errors?.maxlengthFields?.includes(maxlengthMetField)\">\n                              {{ labels.maxlengthMetWithField(control.config[maxlengthMetField]?.label, control.config[maxlengthMetField]?.maxlength) }}\n                            </span>\n                            <span *ngIf=\"isDirty && errors?.invalidAddress\">\n                                <span class=\"error-text\" *ngFor=\"let invalidAddressField of errors?.invalidAddressFields\">{{ invalidAddressField | uppercase }} {{ labels.isRequired }} </span>\n                            </span>\n                            <!--Field Hint-->\n                            <span class=\"description\" *ngIf=\"form.controls[control.key].description\">\n                                {{ form.controls[control.key].description }}\n                            </span>\n                            <span class=\"warning-text\" *ngIf=\"form.controls[control.key].warning\">{{ form.controls[control.key].warning }}</span>\n\n                        </div>\n                        <span class=\"character-count\" [class.error]=\"((errors?.maxlength && !errors?.maxlengthFields) || (errors?.maxlength && errors?.maxlengthFields && errors.maxlengthFields.includes(focusedField)))\" *ngIf=\"showCount && form.controls[control.key].controlType !== 'picker'\">{{ itemCount }}/{{ maxLength || form.controls[control.key].maxlength }}</span>\n                        <span class=\"record-count\" [class.zero-count]=\"itemCount === 0\" [class.row-picker]=\"form.controls[this.control.key].config.columns\" *ngIf=\"showCount && form.controls[control.key].controlType === 'picker'\">{{ itemCount }}/{{ maxLength || form.controls[control.key].maxlength }}</span>\n                    </div>\n                    <!--Tip Wel-->\n                    <novo-tip-well *ngIf=\"form.controls[control.key].tipWell\" [name]=\"control.key\" [tip]=\"form.controls[control.key]?.tipWell?.tip\" [icon]=\"form.controls[control.key]?.tipWell?.icon\" [button]=\"form.controls[control.key]?.tipWell?.button\"></novo-tip-well>\n                </div>\n                <i *ngIf=\"form.controls[control.key].fieldInteractionloading\" class=\"loading\">\n                    <svg version=\"1.1\"\n                     xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n                     x=\"0px\" y=\"0px\" width=\"18.2px\" height=\"18.5px\" viewBox=\"0 0 18.2 18.5\" style=\"enable-background:new 0 0 18.2 18.5;\"\n                     xml:space=\"preserve\">\n                    <style type=\"text/css\">\n                        .spinner { fill:#FFFFFF; }\n                    </style>\n                        <path class=\"spinner\" d=\"M9.2,18.5C4.1,18.5,0,14.4,0,9.2S4.1,0,9.2,0c0.9,0,1.9,0.1,2.7,0.4c0.8,0.2,1.2,1.1,1,1.9\n                            c-0.2,0.8-1.1,1.2-1.9,1C10.5,3.1,9.9,3,9.2,3C5.8,3,3,5.8,3,9.2s2.8,6.2,6.2,6.2c2.8,0,5.3-1.9,6-4.7c0.2-0.8,1-1.3,1.8-1.1\n                            c0.8,0.2,1.3,1,1.1,1.8C17.1,15.7,13.4,18.5,9.2,18.5z\"/>\n                    </svg>\n                </i>\n            </div>\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0NvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsWUFBWSxFQUdaLFNBQVMsRUFDVCxZQUFZLEVBR1osU0FBUyxFQUNULE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7QUFFbEYsa0NBSUM7OztJQUhDLDRCQUFVOztJQUNWLHlDQUEyQjs7SUFDM0IsNkJBQWU7O0FBR2pCO0lBU0Usc0JBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7SUFBRyxDQUFDOzs7OztJQUoxQyw4QkFBTzs7OztJQURQLFVBQ1EsUUFBNkI7UUFDbkMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFJRCx5Q0FBa0I7OztJQUFsQjtRQUFBLGlCQUlDO1FBSEMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDZCQUFNOzs7SUFBTjs7WUFDUSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhO1FBQ2hELGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQzNELGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFNLGFBQWEsQ0FBQyxZQUFZLE9BQUksQ0FBQztJQUNqRSxDQUFDOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9COzs7O2dCQWhDQyxVQUFVOzs7MEJBa0NULFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7O0lBa0IxQyxtQkFBQztDQUFBLEFBdEJELElBc0JDO1NBbkJZLFlBQVk7OztJQU1YLCtCQUEwQjs7O0FBZXhDO0lBdUd3Qyw4Q0FBWTtJQXFEbEQsNEJBQ0UsT0FBbUIsRUFDWixNQUF3QixFQUN2QixpQkFBb0MsRUFDcEMsbUJBQXdDLEVBQ3hDLGVBQW9DLEVBQ3BDLGlCQUFvQyxFQUNqQixNQUF3QjtRQUF4Qix1QkFBQSxFQUFBLGdCQUF3QjtRQVByRCxZQVNFLGtCQUFNLE9BQU8sQ0FBQyxTQUNmO1FBUlEsWUFBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDdkIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyx5QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHFCQUFlLEdBQWYsZUFBZSxDQUFxQjtRQUNwQyx1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ2pCLFlBQU0sR0FBTixNQUFNLENBQWtCO1FBdERyRCxlQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFFM0IsWUFBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9DLFVBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3QyxVQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0MsWUFBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9DLFlBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVkvQyxvQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUU1QixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBR2Qsa0JBQVksR0FBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN4RSxtQkFBYSxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3pFLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsa0JBQVksR0FBVyxFQUFFLENBQUM7UUFLMUIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsNkJBQXVCLEdBQWEsRUFBRSxDQUFDO1FBRy9DLGVBQVMsR0FBUSxFQUFFLENBQUM7UUFFcEIsYUFBTyxHQUFZLEtBQUssQ0FBQzs7SUFZekIsQ0FBQztJQTVDRCxzQkFDSSxzQ0FBTTs7OztRQURWO1lBRUUsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksdUNBQU87Ozs7UUFEWDtZQUVFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQXNDRCxzQkFBSSxpREFBaUI7Ozs7UUFBckI7WUFBQSxpQkFNQztZQUxDLElBQUksSUFBSSxDQUFDLHVCQUF1QixJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZFLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFDLEtBQWEsSUFBSyxPQUFBLEtBQUssS0FBSyxLQUFJLENBQUMsWUFBWSxFQUEzQixDQUEyQixDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2hHO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDO2FBQ1g7UUFDSCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1EQUFtQjs7OztRQUF2QjtZQUFBLGlCQU1DO1lBTEMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRTtnQkFDcEYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFhLElBQUssT0FBQSxLQUFLLEtBQUssS0FBSSxDQUFDLFlBQVksRUFBM0IsQ0FBMkIsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMvRjtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQzthQUNYO1FBQ0gsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxnREFBZ0I7Ozs7UUFBcEI7WUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pGLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdURBQXVCOzs7O1FBQTNCO1lBQ0UsT0FBTyxDQUNMLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNoSCxDQUFDLElBQUksQ0FBQyxPQUFPO29CQUNYLElBQUksQ0FBQyxpQkFBaUI7b0JBQ3RCLElBQUksQ0FBQyxPQUFPO29CQUNaLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDcEcsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOENBQWM7Ozs7UUFBbEI7WUFDRSxPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzdCLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO2dCQUNyRixDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FDbEgsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQVM7Ozs7UUFBYjs7Z0JBQ00sU0FBUyxHQUNYLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTO2dCQUM3QyxJQUFJLENBQUMsT0FBTztnQkFDWixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxLQUFLLFdBQVc7b0JBQy9ELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxLQUFLLFNBQVMsQ0FBQyxDQUFDO2dCQUNwRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxLQUFLLFFBQVEsQ0FBQztZQUNuSCxPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDO1FBQ3RDLENBQUM7Ozs7O1FBRUQsVUFBYyxLQUFLO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksNENBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLENBQ0wsSUFBSSxDQUFDLFNBQVM7Z0JBQ2QsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUM5RCxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FDbkUsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0RBQWdCOzs7O1FBQXBCO1lBQ0UsT0FBTyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDOzs7T0FBQTs7OztJQUVELDRDQUFlOzs7SUFBZjtRQUFBLGlCQVVDOztZQVRPLGVBQWUsR0FBYSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQztRQUN6RSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDekUsVUFBVSxDQUFDOztvQkFDTCxLQUFLLEdBQWdCLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7Z0JBQzFFLElBQUksS0FBSyxFQUFFO29CQUNULEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDZjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsK0NBQWtCOzs7SUFBbEI7UUFBQSxpQkE0Q0M7O1FBM0NDLG9DQUFvQztRQUNwQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyx5QkFBeUIsRUFBRTtvQ0FDdkYsV0FBVztnQkFDbEIsUUFBUSxXQUFXLENBQUMsS0FBSyxFQUFFO29CQUN6QixLQUFLLE1BQU07d0JBQ1QsT0FBSyx1QkFBdUIsR0FBRyxPQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDOzRCQUMzRSxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyx5QkFBeUIsRUFBRTtnQ0FDbkUsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDOzZCQUN0Qzt3QkFDSCxDQUFDLENBQUMsQ0FBQzt3QkFDSCxNQUFNO29CQUNSLEtBQUssT0FBTzt3QkFDVixPQUFLLHVCQUF1QixHQUFHLE9BQUssT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7NEJBQzVFLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHlCQUF5QixFQUFFO2dDQUNuRSxLQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7NkJBQ3RDO3dCQUNILENBQUMsQ0FBQyxDQUFDO3dCQUNILE1BQU07b0JBQ1IsS0FBSyxRQUFRO3dCQUNYLE9BQUssdUJBQXVCLEdBQUcsT0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDOzRCQUNqSCxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyx5QkFBeUIsRUFBRTtnQ0FDbkUsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDOzZCQUN0Qzt3QkFDSCxDQUFDLENBQUMsQ0FBQzt3QkFDSCxNQUFNO29CQUNSLEtBQUssTUFBTTt3QkFDVCxXQUFXLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzt3QkFDaEMsTUFBTTtvQkFDUjt3QkFDRSxNQUFNO2lCQUNUO2dCQUNELElBQUksV0FBVyxDQUFDLFlBQVksRUFBRTtvQkFDNUIsSUFBSSxDQUFDLE9BQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyx5QkFBeUIsRUFBRTt3QkFDbkUsT0FBSyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFDdEM7aUJBQ0Y7Ozs7Z0JBakNILEtBQXdCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQSxnQkFBQTtvQkFBNUMsSUFBSSxXQUFXLFdBQUE7NEJBQVgsV0FBVztpQkFrQ25COzs7Ozs7Ozs7U0FDRjtRQUNELFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixLQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQUEsaUJBd0VDO1FBdkVDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGtEQUFrRDtRQUNsRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDOUQsSUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsS0FBSyxTQUFTO2dCQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsS0FBSyxXQUFXLEVBQ2hFO2dCQUNBLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQ3BFO1NBQ0Y7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIseUJBQXlCO1lBQ3pCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7Z0JBQzlELEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQztZQUNILCtCQUErQjtZQUMvQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUTtnQkFDcEcsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztnQkFDdEUsSUFBSSxRQUFRLEtBQUssU0FBUyxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7b0JBQzlELEtBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztpQkFDcEM7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRztZQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDL0MsT0FBTyxFQUFFO2dCQUNQLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3RDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3hDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN4RCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN0QyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDeEQsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDdEMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDdEMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDMUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDMUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDeEMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3RELG1CQUFtQixFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN4RCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUMxQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM5QyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUMxQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDMUQsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDM0Q7WUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztRQUNGLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RELElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzlELElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUM1RSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDaEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQztRQUMxSCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDdEYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUNoRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFcEYsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxLQUFLLFlBQVksRUFBRTtZQUN6RyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNoRSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUNsRCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUNwRixDQUFDO2FBQ0g7WUFDRCxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFLO2dCQUN4RyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDM0IsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUN0RztZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0Usd0NBQXdDO1FBQ3hDLElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ2hDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1QztRQUNELHFDQUFxQztRQUNyQyxpREFBaUQ7UUFDakQsSUFBSTtRQUNKLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLDZCQUE2QjtZQUM3QixJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDM0M7UUFDRCxJQUFJLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtZQUNsQyw2QkFBNkI7WUFDN0IsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDL0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUU7WUFDakMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzdDO1FBQ0QsaUJBQU0sV0FBVyxXQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHNCQUFJLHNDQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3JELENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMxRSxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdDQUFROzs7O1FBQVo7WUFDRSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDdEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQ0FBZTs7OztRQUFuQjtZQUNFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFO2dCQUN6RSxPQUFPLE9BQU8sQ0FBQzthQUNoQjtZQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUM7UUFDOUQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyQ0FBVzs7OztRQUFmO1lBQ0UsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ3JFLE9BQU8sRUFBRSxDQUFDO2FBQ1g7WUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzFELENBQUM7OztPQUFBO0lBRUQsc0JBQUksOENBQWM7Ozs7UUFBbEI7WUFDRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDeEUsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUM7UUFDN0QsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrREFBa0I7Ozs7UUFBdEI7WUFDRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO2dCQUM1RSxPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO1FBQ2pFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNENBQVk7Ozs7UUFBaEI7WUFDRSxxRkFBcUY7WUFDckYsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7Z0JBQzdGLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCw2Q0FBNkM7WUFDN0MsT0FBTyxDQUNMO2dCQUNFLE9BQU87Z0JBQ1AsV0FBVztnQkFDWCxVQUFVO2dCQUNWLE1BQU07Z0JBQ04sTUFBTTtnQkFDTixXQUFXO2dCQUNYLFNBQVM7Z0JBQ1QsTUFBTTtnQkFDTixRQUFRO2dCQUNSLFlBQVk7Z0JBQ1osT0FBTztnQkFDUCxXQUFXO2dCQUNYLFlBQVk7YUFDYixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNuRSxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvREFBb0I7Ozs7UUFBeEI7WUFDRSxRQUFRO1lBQ1IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbkksT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsK0NBQWtCOzs7O0lBQWxCLFVBQW1CLFdBQVc7UUFBOUIsaUJBYUM7UUFaQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaEUsVUFBVSxDQUFDO2dCQUNULEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQztnQkFDMUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztnQkFDdkQsSUFBSTtvQkFDRixXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNoRTtnQkFBQyxPQUFPLEdBQUcsRUFBRTtvQkFDWixPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7b0JBQ2xGLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7aUJBQzNDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRUQseUNBQVk7Ozs7SUFBWixVQUFhLEtBQVU7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzs7Ozs7SUFFRCx3Q0FBVzs7Ozs7SUFBWCxVQUFZLEtBQWlCLEVBQUUsS0FBVztRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEtBQUssS0FBSyxFQUFFO1lBQ3BGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO2FBQU0sSUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsS0FBSyxTQUFTO1lBQzlELEtBQUs7WUFDTCxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRCxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMxRDtZQUNBLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztTQUN0RjtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsdUNBQVU7Ozs7SUFBVixVQUFXLEtBQWlCO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCx1Q0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELGdEQUFtQjs7OztJQUFuQixVQUFvQixLQUFLO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELDJDQUFjOzs7O0lBQWQsVUFBZSxLQUFLO1FBQ2xCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUNsRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztTQUNqRztJQUNILENBQUM7Ozs7O0lBRUQsK0NBQWtCOzs7O0lBQWxCLFVBQW1CLEtBQUs7UUFDdEIsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFO1lBQ25ILElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ3JHO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksS0FBSztRQUNmLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsaURBQW9COzs7O0lBQXBCLFVBQXFCLEtBQWlCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQzdELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELGlEQUFvQjs7O0lBQXBCOztZQUNRLFlBQVksR0FBRyxhQUFhO1FBQ2xDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEgsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLFNBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFJLENBQ2pHLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7O0lBRUQseUNBQVk7Ozs7SUFBWixVQUFhLEtBQUs7O1lBQ1YsWUFBWSxHQUFHLFNBQVM7O1lBQ3hCLHdCQUF3QixHQUFHLFdBQVc7O1lBQ3RDLGtDQUFrQyxHQUFHLGFBQWE7O1lBQ2xELFlBQVksR0FBRyxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7O1lBQzFFLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRztRQUVuQixpREFBaUQ7UUFDakQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3hILEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjthQUFNLElBQ0wsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUMxRixDQUFDLENBQ0MsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssR0FBRyxJQUFJLHdCQUF3QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssR0FBRyxJQUFJLGtDQUFrQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0UsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FDM0IsRUFDRDtZQUNBLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtRQUNELGFBQWE7UUFDYixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUNqSSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7OztJQUVELGdEQUFtQjs7OztJQUFuQixVQUFvQixLQUFvQjs7WUFDbEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDOztZQUM3QixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnREFBbUI7Ozs7SUFBbkIsVUFBb0IsS0FBVTtRQUM1QixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDekMsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsR0FBRyxFQUFFO2dCQUNwRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNqQztTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx1Q0FBVTs7OztJQUFWLFVBQVcsS0FBSztRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCx1Q0FBVTs7OztJQUFWLFVBQVcsS0FBSztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsdUNBQVU7Ozs7SUFBVixVQUFXLEtBQUs7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELHlDQUFZOzs7O0lBQVosVUFBYSxLQUFLO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQseUNBQVk7Ozs7SUFBWixVQUFhLEtBQUs7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxnREFBbUI7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUN0QixJQUNFLElBQUk7WUFDSixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSztZQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDL0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFDM0Q7WUFDQSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ25DLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUMzRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0M7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFhLElBQUssT0FBQSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO2FBQzdHO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELDJDQUFjOzs7O0lBQWQsVUFBZSxvQkFBb0I7O1lBQzdCLFNBQVMsR0FBWSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsc0JBQXNCLENBQUMsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Z0JBenBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSx5L1JBNEZQO29CQUNILElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsd0NBQXdDO3dCQUNuRCwwQkFBMEIsRUFBRSx3Q0FBd0M7d0JBQ3BFLGtCQUFrQixFQUFFLHFDQUFxQzt3QkFDekQsZ0JBQWdCLEVBQUUsbUNBQW1DO3dCQUNyRCx5QkFBeUIsRUFBRSxhQUFhO3FCQUN6QztpQkFDRjs7OztnQkE1SkMsVUFBVTtnQkFpQkgsZ0JBQWdCO2dCQUdoQixpQkFBaUI7Z0JBQ2pCLG1CQUFtQjtnQkFDbkIsbUJBQW1CO2dCQTFCMUIsaUJBQWlCOzZDQTZOZCxNQUFNLFNBQUMsU0FBUzs7OzBCQTNEbEIsS0FBSzt1QkFFTCxLQUFLOzRCQUVMLEtBQUs7NEJBRUwsS0FBSzt5QkFFTCxNQUFNO3VCQUVOLE1BQU07dUJBRU4sTUFBTTt5QkFFTixNQUFNO3lCQUVOLE1BQU07eUJBRU4sTUFBTSxTQUFDLE1BQU07MEJBS2IsTUFBTSxTQUFDLE9BQU87O0lBMmhCakIseUJBQUM7Q0FBQSxBQTFwQkQsQ0F1R3dDLFlBQVksR0FtakJuRDtTQW5qQlksa0JBQWtCOzs7SUFDN0IscUNBQ2E7O0lBQ2Isa0NBQ1U7O0lBQ1YsdUNBQzJCOztJQUMzQix1Q0FDMkI7O0lBQzNCLG9DQUMrQzs7SUFDL0Msa0NBQzZDOztJQUM3QyxrQ0FDNkM7O0lBQzdDLG9DQUMrQzs7SUFDL0Msb0NBQytDOztJQVUvQyx1Q0FBeUI7O0lBQ3pCLDBDQUE0Qjs7SUFDNUIsNENBQTRCOztJQUM1QiwwQ0FBcUI7O0lBQ3JCLDBDQUE4Qjs7SUFDOUIsdUNBQXNCOztJQUN0Qix5Q0FBMEI7Ozs7O0lBRTFCLDBDQUFnRjs7Ozs7SUFDaEYsMkNBQWlGOzs7OztJQUNqRixzQ0FBa0M7Ozs7O0lBQ2xDLDBDQUFrQzs7Ozs7SUFDbEMsb0RBQW9DOzs7OztJQUNwQyx1REFBdUM7Ozs7O0lBQ3ZDLHFEQUFxQzs7Ozs7SUFDckMsb0RBQW9DOzs7OztJQUNwQyx3Q0FBb0M7Ozs7O0lBQ3BDLGlEQUFvQzs7Ozs7SUFDcEMscURBQStDOzs7OztJQUMvQyxzREFBc0M7O0lBRXRDLHVDQUFvQjs7SUFDcEIsNkNBQXFCOztJQUNyQixxQ0FBeUI7O0lBSXZCLG9DQUErQjs7Ozs7SUFDL0IsK0NBQTRDOzs7OztJQUM1QyxpREFBZ0Q7Ozs7O0lBQ2hELDZDQUE0Qzs7Ozs7SUFDNUMsK0NBQTRDOzs7OztJQUM1QyxvQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIERpcmVjdGl2ZSxcbiAgSG9zdExpc3RlbmVyLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBMT0NBTEVfSUQsXG4gIEluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBWZW5kb3JcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0Zvcm1Hcm91cCB9IGZyb20gJy4vRm9ybUludGVyZmFjZXMnO1xuaW1wb3J0IHsgT3V0c2lkZUNsaWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvb3V0c2lkZS1jbGljay9PdXRzaWRlQ2xpY2snO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gJy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGUtZm9ybWF0L0RhdGVGb3JtYXQnO1xuaW1wb3J0IHsgRmllbGRJbnRlcmFjdGlvbkFwaSB9IGZyb20gJy4vRmllbGRJbnRlcmFjdGlvbkFwaSc7XG5pbXBvcnQgeyBOb3ZvVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVtcGxhdGUvTm92b1RlbXBsYXRlU2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1hc2tPcHRpb25zIHtcbiAgbWFzazogYW55O1xuICBrZWVwQ2hhclBvc2l0aW9uczogYm9vbGVhbjtcbiAgZ3VpZGU6IGJvb2xlYW47XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3RleHRhcmVhW2F1dG9zaXplXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9BdXRvU2l6ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50LnRhcmdldCddKVxuICBvbklucHV0KHRleHRBcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5hZGp1c3QoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYWRqdXN0KCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGp1c3QoKTogdm9pZCB7XG4gICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIG5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gbmF0aXZlRWxlbWVudC5zdHlsZS5taW5IZWlnaHQ7XG4gICAgbmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtuYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodH1weGA7XG4gIH1cbn1cbi8vIHVuZG8gYWxsIHRlbXBsYXRlIGNvbnRleHQgcmVmZXJlbmNlcyFcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY29udHJvbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtY29udGFpbmVyXCIgW2hpZGRlbl09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5oaWRkZW4gfHwgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0udHlwZSA9PT0gJ2hpZGRlbicgfHwgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICdoaWRkZW4nXCI+XG4gICAgICAgICAgICA8IS0tRW5jcnlwdGVkIEZpZWxkLS0+XG4gICAgICAgICAgICA8c3BhbiBbdG9vbHRpcF09XCJsYWJlbHMuZW5jcnlwdGVkRmllbGRUb29sdGlwXCIgW3Rvb2x0aXBQb3NpdGlvbl09XCIncmlnaHQnXCI+PGkgW2hpZGRlbl09XCIhZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uZW5jcnlwdGVkXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYmhpLWxvY2tcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgPCEtLUxhYmVsIChmb3IgaG9yaXpvbnRhbCktLT5cbiAgICAgICAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwiY29udHJvbC5rZXlcIiAqbmdJZj1cImZvcm0ubGF5b3V0ICE9PSAndmVydGljYWwnICYmIGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsICYmICFjb25kZW5zZWRcIiBbbmdDbGFzc109XCJ7J2VuY3J5cHRlZCc6IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmVuY3J5cHRlZCB9XCI+XG4gICAgICAgICAgICAgICAge3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgfX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLW91dGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDwhLS1MYWJlbCAoZm9yIHZlcnRpY2FsKS0tPlxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZvcm0ubGF5b3V0ID09PSAndmVydGljYWwnICYmIGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsICYmICFjb25kZW5zZWRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vdm8tY29udHJvbC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmZvcl09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5ub3ZvLWNvbnRyb2wtZW1wdHldPVwiIWhhc1ZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLm5vdm8tY29udHJvbC1mb2N1c2VkXT1cImZvY3VzZWRcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Mubm92by1jb250cm9sLWZpbGxlZF09XCJoYXNWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5ub3ZvLWNvbnRyb2wtYWx3YXlzLWFjdGl2ZV09XCJhbHdheXNBY3RpdmUgfHwgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Mubm92by1jb250cm9sLWV4dHJhLXNwYWNpbmddPVwicmVxdWlyZXNFeHRyYVNwYWNpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgfX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtaW5uZXItY29udGFpbmVyXCIgW2NsYXNzLnJlcXVpcmVkXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnJlcXVpcmVkICYmICFmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5yZWFkT25seVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWlubmVyLWlucHV0LWNvbnRhaW5lclwiIFtjbGFzcy5ub3ZvLWNvbnRyb2wtZmlsbGVkXT1cImhhc1ZhbHVlXCIgW2NsYXNzLm5vdm8tY29udHJvbC1lbXB0eV09XCIhaGFzVmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8IS0tUmVxdWlyZWQgSW5kaWNhdG9yLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBbaGlkZGVuXT1cIiFmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5yZXF1aXJlZCB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5yZWFkT25seVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyZXF1aXJlZC1pbmRpY2F0b3Ige3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYmhpLWNpcmNsZSc6ICFpc1ZhbGlkLCAnYmhpLWNoZWNrJzogaXNWYWxpZH1cIiAqbmdJZj1cIiFjb25kZW5zZWQgfHwgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ucmVxdWlyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1Gb3JtIENvbnRyb2xzLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWlucHV0IHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlIH19XCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNvbnRyb2wua2V5XCIgW2NsYXNzLmNvbnRyb2wtZGlzYWJsZWRdPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tVE9ETyBwcmVmaXgvc3VmZml4IG9uIHRoZSBjb250cm9sLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlbXBsYXRlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlc1tmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZV07IGNvbnRleHQ6IHRlbXBsYXRlQ29udGV4dFwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdGVtcGxhdGVzIHx8IGxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1pbnB1dC1jb250YWluZXIgbm92by1jb250cm9sLWlucHV0LXdpdGgtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8IS0tRXJyb3IgTWVzc2FnZS0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtbWVzc2FnZSB7eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSB9fVwiICpuZ0lmPVwiIWNvbmRlbnNlZFwiIFtjbGFzcy5oYXMtdGlwXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnRpcFdlbGxcIiBbbmdDbGFzc109XCJzaG93RXJyb3JTdGF0ZSB8fCBzaG93TWF4TGVuZ3RoTWV0TWVzc2FnZSA/ICdlcnJvci1zaG93bicgOiAnZXJyb3ItaGlkZGVuJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2VzXCIgW25nQ2xhc3NdPVwic2hvd01lc3NhZ2VzID8gJ2NvdW50LXNob3duIG1lc3NhZ2VzLXNob3duJyA6ICdjb3VudC1oaWRkZW4gbWVzc2FnZXMtaGlkZGVuJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwic2hvd0ZpZWxkTWVzc2FnZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImlzRGlydHkgJiYgZXJyb3JzPy5yZXF1aXJlZCAmJiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSAhPT0gJ2FkZHJlc3MnXCI+e3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgfCB1cHBlcmNhc2UgfX0ge3sgbGFiZWxzLmlzUmVxdWlyZWQgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIGVycm9ycz8ubWlubGVuZ3RoXCI+e3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgfCB1cHBlcmNhc2UgfX0ge3sgbGFiZWxzLm1pbkxlbmd0aCB9fSB7eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5taW5sZW5ndGggfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIG1heExlbmd0aE1ldCAmJiBmb2N1c2VkICYmICFlcnJvcnM/Lm1heGxlbmd0aCAmJiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSAhPT0gJ3BpY2tlcidcIj57eyBsYWJlbHMubWF4bGVuZ3RoTWV0KGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLm1heGxlbmd0aCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJlcnJvcnM/Lm1heGxlbmd0aCAmJiBmb2N1c2VkICYmICFlcnJvcnM/Lm1heGxlbmd0aEZpZWxkc1wiPnt7IGxhYmVscy5pbnZhbGlkTWF4bGVuZ3RoKGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLm1heGxlbmd0aCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJtYXhMZW5ndGhNZXQgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICdwaWNrZXInXCI+e3sgbGFiZWxzLm1heFJlY29yZHNSZWFjaGVkIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiaXNEaXJ0eSAmJiBlcnJvcnM/LmludmFsaWRFbWFpbFwiPnt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIHwgdXBwZXJjYXNlIH19IHt7IGxhYmVscy5pbnZhbGlkRW1haWwgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIChlcnJvcnM/LmludGVnZXJUb29MYXJnZSB8fCBlcnJvcnM/LmRvdWJsZVRvb0xhcmdlKVwiPnt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIHwgdXBwZXJjYXNlIH19IHt7IGxhYmVscy5pc1Rvb0xhcmdlIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXNEaXJ0eSAmJiBlcnJvcnM/Lm1pblllYXJcIj57eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCB8IHVwcGVyY2FzZSB9fSB7eyBsYWJlbHMubm90VmFsaWRZZWFyIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiaXNEaXJ0eSAmJiAoZXJyb3JzPy5jdXN0b20pXCI+e3sgZXJyb3JzLmN1c3RvbSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImVycm9ycz8ubWF4bGVuZ3RoICYmIGVycm9ycz8ubWF4bGVuZ3RoRmllbGRzICYmIG1heGxlbmd0aEVycm9yRmllbGQgJiYgZm9jdXNlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBsYWJlbHMuaW52YWxpZE1heGxlbmd0aFdpdGhGaWVsZChjb250cm9sLmNvbmZpZ1ttYXhsZW5ndGhFcnJvckZpZWxkXT8ubGFiZWwsIGNvbnRyb2wuY29uZmlnW21heGxlbmd0aEVycm9yRmllbGRdPy5tYXhsZW5ndGgpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiaXNEaXJ0eSAmJiBtYXhsZW5ndGhNZXRGaWVsZCAmJiBmb2N1c2VkICYmICFlcnJvcnM/Lm1heGxlbmd0aEZpZWxkcz8uaW5jbHVkZXMobWF4bGVuZ3RoTWV0RmllbGQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBsYWJlbHMubWF4bGVuZ3RoTWV0V2l0aEZpZWxkKGNvbnRyb2wuY29uZmlnW21heGxlbmd0aE1ldEZpZWxkXT8ubGFiZWwsIGNvbnRyb2wuY29uZmlnW21heGxlbmd0aE1ldEZpZWxkXT8ubWF4bGVuZ3RoKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzRGlydHkgJiYgZXJyb3JzPy5pbnZhbGlkQWRkcmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdGb3I9XCJsZXQgaW52YWxpZEFkZHJlc3NGaWVsZCBvZiBlcnJvcnM/LmludmFsaWRBZGRyZXNzRmllbGRzXCI+e3sgaW52YWxpZEFkZHJlc3NGaWVsZCB8IHVwcGVyY2FzZSB9fSB7eyBsYWJlbHMuaXNSZXF1aXJlZCB9fSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1GaWVsZCBIaW50LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvblwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3YXJuaW5nLXRleHRcIiAqbmdJZj1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLndhcm5pbmdcIj57eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS53YXJuaW5nIH19PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hhcmFjdGVyLWNvdW50XCIgW2NsYXNzLmVycm9yXT1cIigoZXJyb3JzPy5tYXhsZW5ndGggJiYgIWVycm9ycz8ubWF4bGVuZ3RoRmllbGRzKSB8fCAoZXJyb3JzPy5tYXhsZW5ndGggJiYgZXJyb3JzPy5tYXhsZW5ndGhGaWVsZHMgJiYgZXJyb3JzLm1heGxlbmd0aEZpZWxkcy5pbmNsdWRlcyhmb2N1c2VkRmllbGQpKSlcIiAqbmdJZj1cInNob3dDb3VudCAmJiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSAhPT0gJ3BpY2tlcidcIj57eyBpdGVtQ291bnQgfX0ve3sgbWF4TGVuZ3RoIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLm1heGxlbmd0aCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVjb3JkLWNvdW50XCIgW2NsYXNzLnplcm8tY291bnRdPVwiaXRlbUNvdW50ID09PSAwXCIgW2NsYXNzLnJvdy1waWNrZXJdPVwiZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb25maWcuY29sdW1uc1wiICpuZ0lmPVwic2hvd0NvdW50ICYmIGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAncGlja2VyJ1wiPnt7IGl0ZW1Db3VudCB9fS97eyBtYXhMZW5ndGggfHwgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubWF4bGVuZ3RoIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLVRpcCBXZWwtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5vdm8tdGlwLXdlbGwgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS50aXBXZWxsXCIgW25hbWVdPVwiY29udHJvbC5rZXlcIiBbdGlwXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldPy50aXBXZWxsPy50aXBcIiBbaWNvbl09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XT8udGlwV2VsbD8uaWNvblwiIFtidXR0b25dPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0/LnRpcFdlbGw/LmJ1dHRvblwiPjwvbm92by10aXAtd2VsbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aSAqbmdJZj1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmZpZWxkSW50ZXJhY3Rpb25sb2FkaW5nXCIgY2xhc3M9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeG1sbnM6YT1cImh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC9cIlxuICAgICAgICAgICAgICAgICAgICAgeD1cIjBweFwiIHk9XCIwcHhcIiB3aWR0aD1cIjE4LjJweFwiIGhlaWdodD1cIjE4LjVweFwiIHZpZXdCb3g9XCIwIDAgMTguMiAxOC41XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4LjIgMTguNTtcIlxuICAgICAgICAgICAgICAgICAgICAgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwaW5uZXIgeyBmaWxsOiNGRkZGRkY7IH1cbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwic3Bpbm5lclwiIGQ9XCJNOS4yLDE4LjVDNC4xLDE4LjUsMCwxNC40LDAsOS4yUzQuMSwwLDkuMiwwYzAuOSwwLDEuOSwwLjEsMi43LDAuNGMwLjgsMC4yLDEuMiwxLjEsMSwxLjlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLTAuMiwwLjgtMS4xLDEuMi0xLjksMUMxMC41LDMuMSw5LjksMyw5LjIsM0M1LjgsMywzLDUuOCwzLDkuMnMyLjgsNi4yLDYuMiw2LjJjMi44LDAsNS4zLTEuOSw2LTQuN2MwLjItMC44LDEtMS4zLDEuOC0xLjFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMC44LDAuMiwxLjMsMSwxLjEsMS44QzE3LjEsMTUuNywxMy40LDE4LjUsOS4yLDE4LjV6XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzogJ2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlJyxcbiAgICAnW2F0dHIuZGF0YS1jb250cm9sLXR5cGVdJzogJ2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5yZWFkT25seScsXG4gICAgJ1tjbGFzcy5oaWRkZW5dJzogJ2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmhpZGRlbicsXG4gICAgJ1thdHRyLmRhdGEtY29udHJvbC1rZXldJzogJ2NvbnRyb2wua2V5JyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NvbnRyb2xFbGVtZW50IGV4dGVuZHMgT3V0c2lkZUNsaWNrIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKVxuICBjb250cm9sOiBhbnk7XG4gIEBJbnB1dCgpXG4gIGZvcm06IGFueTtcbiAgQElucHV0KClcbiAgY29uZGVuc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGF1dG9Gb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KClcbiAgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGVkaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgc2F2ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBkZWxldGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgdXBsb2FkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgnYmx1cicpXG4gIGdldCBvbkJsdXIoKTogT2JzZXJ2YWJsZTxGb2N1c0V2ZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuX2JsdXJFbWl0dGVyLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgQE91dHB1dCgnZm9jdXMnKVxuICBnZXQgb25Gb2N1cygpOiBPYnNlcnZhYmxlPEZvY3VzRXZlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNFbWl0dGVyLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIHB1YmxpYyBtYXhMZW5ndGg6IG51bWJlcjtcbiAgcHVibGljIGZvY3VzZWRGaWVsZDogc3RyaW5nO1xuICBmb3JtYXR0ZWRWYWx1ZTogc3RyaW5nID0gJyc7XG4gIHBlcmNlbnRWYWx1ZTogbnVtYmVyO1xuICBtYXhMZW5ndGhNZXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXRlbUNvdW50OiBudW1iZXIgPSAwO1xuICBtYXNrT3B0aW9uczogSU1hc2tPcHRpb25zO1xuXG4gIHByaXZhdGUgX2JsdXJFbWl0dGVyOiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIHByaXZhdGUgX2ZvY3VzRW1pdHRlcjogRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuICBwcml2YXRlIF9mb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2VudGVyZWRUZXh0OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBmb3JjZUNsZWFyU3Vic2NyaXB0aW9uOiBhbnk7XG4gIHByaXZhdGUgcGVyY2VudENoYW5nZVN1YnNjcmlwdGlvbjogYW55O1xuICBwcml2YXRlIHZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uOiBhbnk7XG4gIHByaXZhdGUgZGF0ZUNoYW5nZVN1YnNjcmlwdGlvbjogYW55O1xuICBwcml2YXRlIF9zaG93Q291bnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBjaGFyYWN0ZXJDb3VudEZpZWxkOiBzdHJpbmc7XG4gIHByaXZhdGUgbWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgc3RhdHVzQ2hhbmdlU3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgdGVtcGxhdGVzOiBhbnkgPSB7fTtcbiAgdGVtcGxhdGVDb250ZXh0OiBhbnk7XG4gIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkYXRlRm9ybWF0U2VydmljZTogRGF0ZUZvcm1hdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmaWVsZEludGVyYWN0aW9uQXBpOiBGaWVsZEludGVyYWN0aW9uQXBpLFxuICAgIHByaXZhdGUgdGVtcGxhdGVTZXJ2aWNlOiBOb3ZvVGVtcGxhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIGxvY2FsZTogc3RyaW5nID0gJ2VuLVVTJyxcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudCk7XG4gIH1cblxuICBnZXQgbWF4bGVuZ3RoTWV0RmllbGQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5tYXhMZW5ndGhNZXRFcnJvcmZpZWxkcyAmJiB0aGlzLm1heExlbmd0aE1ldEVycm9yZmllbGRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMuZmluZCgoZmllbGQ6IHN0cmluZykgPT4gZmllbGQgPT09IHRoaXMuZm9jdXNlZEZpZWxkKSB8fCAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtYXhsZW5ndGhFcnJvckZpZWxkKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuZXJyb3JzICYmIHRoaXMuZXJyb3JzLm1heGxlbmd0aEZpZWxkcyAmJiB0aGlzLmVycm9ycy5tYXhsZW5ndGhGaWVsZHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvcnMubWF4bGVuZ3RoRmllbGRzLmZpbmQoKGZpZWxkOiBzdHJpbmcpID0+IGZpZWxkID09PSB0aGlzLmZvY3VzZWRGaWVsZCkgfHwgJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICBnZXQgc2hvd0ZpZWxkTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gIXRoaXMuZXJyb3JzICYmICF0aGlzLm1heExlbmd0aE1ldCAmJiBIZWxwZXJzLmlzQmxhbmsodGhpcy5jb250cm9sLmRlc2NyaXB0aW9uKTtcbiAgfVxuXG4gIGdldCBzaG93TWF4TGVuZ3RoTWV0TWVzc2FnZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuaXNEaXJ0eSAmJiB0aGlzLm1heExlbmd0aE1ldCAmJiB0aGlzLmZvY3VzZWQgJiYgKCF0aGlzLmVycm9ycyB8fCAodGhpcy5lcnJvcnMgJiYgIXRoaXMuZXJyb3JzLm1heGxlbmd0aCkpKSB8fFxuICAgICAgKHRoaXMuaXNEaXJ0eSAmJlxuICAgICAgICB0aGlzLm1heGxlbmd0aE1ldEZpZWxkICYmXG4gICAgICAgIHRoaXMuZm9jdXNlZCAmJlxuICAgICAgICAoIXRoaXMuZXJyb3JzIHx8ICh0aGlzLmVycm9ycyAmJiAhdGhpcy5lcnJvcnMubWF4bGVuZ3RoRmllbGRzLmluY2x1ZGVzKHRoaXMubWF4bGVuZ3RoTWV0RmllbGQpKSkpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBzaG93RXJyb3JTdGF0ZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuaXNEaXJ0eSAmJiB0aGlzLmVycm9ycykgfHxcbiAgICAgICh0aGlzLmZvY3VzZWQgJiYgdGhpcy5lcnJvcnMgJiYgdGhpcy5lcnJvcnMubWF4bGVuZ3RoICYmIHRoaXMuZXJyb3JzLm1heGxlbmd0aEZpZWxkcykgfHxcbiAgICAgICh0aGlzLmZvY3VzZWQgJiYgdGhpcy5lcnJvcnMgJiYgdGhpcy5lcnJvcnMubWF4bGVuZ3RoICYmIHRoaXMuZXJyb3JzLm1heGxlbmd0aEZpZWxkcyAmJiB0aGlzLm1heGxlbmd0aEVycm9yRmllbGQpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBzaG93Q291bnQoKSB7XG4gICAgbGV0IGNoYXJDb3VudDogYm9vbGVhbiA9XG4gICAgICAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCAmJlxuICAgICAgICB0aGlzLmZvY3VzZWQgJiZcbiAgICAgICAgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3RleHQtYXJlYScgfHxcbiAgICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICd0ZXh0Ym94JykpIHx8XG4gICAgICAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCAmJiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICdwaWNrZXInKTtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0NvdW50IHx8IGNoYXJDb3VudDtcbiAgfVxuXG4gIHNldCBzaG93Q291bnQodmFsdWUpIHtcbiAgICB0aGlzLl9zaG93Q291bnQgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzaG93TWVzc2FnZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc2hvd0NvdW50IHx8XG4gICAgICAhSGVscGVycy5pc0VtcHR5KHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS53YXJuaW5nKSB8fFxuICAgICAgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uZGVzY3JpcHRpb24pXG4gICAgKTtcbiAgfVxuXG4gIGdldCBkZWNpbWFsU2VwYXJhdG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLmxvY2FsZSkuZm9ybWF0KDEuMilbMV07XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgRE9fTk9UX0ZPQ1VTX01FOiBzdHJpbmdbXSA9IFsncGlja2VyJywgJ3RpbWUnLCAnZGF0ZScsICdkYXRlLXRpbWUnXTtcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgJiYgIURPX05PVF9GT0NVU19NRS5pbmNsdWRlcyh0aGlzLmNvbnRyb2wuY29udHJvbFR5cGUpKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IGlucHV0OiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAvLyBTdWJzY3JpYmUgdG8gY29udHJvbCBpbnRlcmFjdGlvbnNcbiAgICBpZiAodGhpcy5jb250cm9sLmludGVyYWN0aW9ucyAmJiAhdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGZvciAobGV0IGludGVyYWN0aW9uIG9mIHRoaXMuY29udHJvbC5pbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgc3dpdGNoIChpbnRlcmFjdGlvbi5ldmVudCkge1xuICAgICAgICAgIGNhc2UgJ2JsdXInOlxuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMub25CbHVyLnBpcGUoZGVib3VuY2VUaW1lKDMwMCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZm9jdXMnOlxuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMub25Gb2N1cy5waXBlKGRlYm91bmNlVGltZSgzMDApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NoYW5nZSc6XG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlQ2hhbmdlcy5waXBlKGRlYm91bmNlVGltZSgzMDApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2luaXQnOlxuICAgICAgICAgICAgaW50ZXJhY3Rpb24uaW52b2tlT25Jbml0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW50ZXJhY3Rpb24uaW52b2tlT25Jbml0KSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5leGVjdXRlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudGVtcGxhdGVzID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuZ2V0QWxsKCk7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIC8vIE1ha2Ugc3VyZSB0byBpbml0aWFsbHkgZm9ybWF0IHRoZSB0aW1lIGNvbnRyb2xzXG4gICAgaWYgKHRoaXMuY29udHJvbCAmJiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsdWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAndGV4dGJveCcgfHxcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAndGV4dC1hcmVhJ1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMuaXRlbUNvdW50ID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuY29udHJvbCkge1xuICAgICAgLy8gTGlzdGVuIHRvIGNsZWFyIGV2ZW50c1xuICAgICAgdGhpcy5mb3JjZUNsZWFyU3Vic2NyaXB0aW9uID0gdGhpcy5jb250cm9sLmZvcmNlQ2xlYXIuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jbGVhclZhbHVlKCk7XG4gICAgICB9KTtcbiAgICAgIC8vIEZvciBBc3luY2hyb25vdXMgdmFsaWRhdGlvbnNcbiAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKCh2YWxpZGl0eSkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0gPSB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQ7XG4gICAgICAgIGlmICh2YWxpZGl0eSAhPT0gJ1BFTkRJTkcnICYmIHRoaXMuZm9ybS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KSB7XG4gICAgICAgICAgdGhpcy5mb3JtLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0ID0ge1xuICAgICAgJGltcGxpY2l0OiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIHJlc3RyaWN0S2V5czogdGhpcy5yZXN0cmljdEtleXMuYmluZCh0aGlzKSxcbiAgICAgICAgZW1pdENoYW5nZTogdGhpcy5lbWl0Q2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZUZvY3VzOiB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZVBlcmNlbnRDaGFuZ2U6IHRoaXMuaGFuZGxlUGVyY2VudENoYW5nZS5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVCbHVyOiB0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlVGV4dEFyZWFJbnB1dDogdGhpcy5oYW5kbGVUZXh0QXJlYUlucHV0LmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZUVkaXQ6IHRoaXMuaGFuZGxlRWRpdC5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVTYXZlOiB0aGlzLmhhbmRsZVNhdmUuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlRGVsZXRlOiB0aGlzLmhhbmRsZURlbGV0ZS5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVVcGxvYWQ6IHRoaXMuaGFuZGxlVXBsb2FkLmJpbmQodGhpcyksXG4gICAgICAgIG1vZGVsQ2hhbmdlOiB0aGlzLm1vZGVsQ2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgIG1vZGVsQ2hhbmdlV2l0aFJhdzogdGhpcy5tb2RlbENoYW5nZVdpdGhSYXcuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlQWRkcmVzc0NoYW5nZTogdGhpcy5oYW5kbGVBZGRyZXNzQ2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZVR5cGluZzogdGhpcy5oYW5kbGVUeXBpbmcuYmluZCh0aGlzKSxcbiAgICAgICAgdXBkYXRlVmFsaWRpdHk6IHRoaXMudXBkYXRlVmFsaWRpdHkuYmluZCh0aGlzKSxcbiAgICAgICAgdG9nZ2xlQWN0aXZlOiB0aGlzLnRvZ2dsZUFjdGl2ZS5iaW5kKHRoaXMpLFxuICAgICAgICB2YWxpZGF0ZUludGVnZXJJbnB1dDogdGhpcy52YWxpZGF0ZUludGVnZXJJbnB1dC5iaW5kKHRoaXMpLFxuICAgICAgICB2YWxpZGF0ZU51bWJlck9uQmx1cjogdGhpcy52YWxpZGF0ZU51bWJlck9uQmx1ci5iaW5kKHRoaXMpLFxuICAgICAgfSxcbiAgICAgIGZvcm06IHRoaXMuZm9ybSxcbiAgICB9O1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC50b29sdGlwUG9zaXRpb24gPSB0aGlzLnRvb2x0aXBQb3NpdGlvbjtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQudG9vbHRpcCA9IHRoaXMudG9vbHRpcDtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQudG9vbHRpcFNpemUgPSB0aGlzLnRvb2x0aXBTaXplO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC50b29sdGlwUHJlbGluZSA9IHRoaXMudG9vbHRpcFByZWxpbmU7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnJlbW92ZVRvb2x0aXBBcnJvdyA9IHRoaXMucmVtb3ZlVG9vbHRpcEFycm93O1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5zdGFydHVwRm9jdXMgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc3RhcnR1cEZvY3VzO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5maWxlQnJvd3NlckltYWdlVXBsb2FkVXJsID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmw7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0Lm1pbmltYWwgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWluaW1hbDtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQuY3VycmVuY3lGb3JtYXQgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY3VycmVuY3lGb3JtYXQ7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnBlcmNlbnRWYWx1ZSA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5wZXJjZW50VmFsdWU7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LmNvbmZpZyA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb25maWc7XG5cbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldICYmIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zdWJUeXBlID09PSAncGVyY2VudGFnZScpIHtcbiAgICAgIGlmICghSGVscGVycy5pc0VtcHR5KHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWx1ZSkpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnBlcmNlbnRWYWx1ZSA9IE51bWJlcihcbiAgICAgICAgICAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlICogMTAwKS50b0ZpeGVkKDYpLnJlcGxhY2UoL1xcLj8wKiQvLCAnJyksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLnBlcmNlbnRDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uZGlzcGxheVZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICghSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5wZXJjZW50VmFsdWUgPSBOdW1iZXIoKHZhbHVlICogMTAwKS50b0ZpeGVkKDYpLnJlcGxhY2UoL1xcLj8wKiQvLCAnJykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBVbnN1YnNjcmliZSBmcm9tIGNvbnRyb2wgaW50ZXJhY3Rpb25zXG4gICAgaWYgKHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgLy8gaWYgKHRoaXMuZGF0ZUNoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgIC8vICAgICB0aGlzLmRhdGVDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAvLyB9XG4gICAgaWYgKHRoaXMuZm9yY2VDbGVhclN1YnNjcmlwdGlvbikge1xuICAgICAgLy8gVW4tbGlzdGVuIGZvciBjbGVhciBldmVudHNcbiAgICAgIHRoaXMuZm9yY2VDbGVhclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wZXJjZW50Q2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICAvLyBVbi1saXN0ZW4gZm9yIGNsZWFyIGV2ZW50c1xuICAgICAgdGhpcy5wZXJjZW50Q2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGVDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZGF0ZUNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0dXNDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gIH1cblxuICBnZXQgZXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uZXJyb3JzO1xuICB9XG5cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWxpZDtcbiAgfVxuXG4gIGdldCBpc0RpcnR5KCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uZGlydHkgfHwgdGhpcy5jb250cm9sLmRpcnR5O1xuICB9XG5cbiAgZ2V0IGhhc1ZhbHVlKCkge1xuICAgIHJldHVybiAhSGVscGVycy5pc0VtcHR5KHRoaXMuZm9ybS52YWx1ZVt0aGlzLmNvbnRyb2wua2V5XSk7XG4gIH1cblxuICBnZXQgZm9jdXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNlZDtcbiAgfVxuXG4gIGdldCB0b29sdGlwKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udG9vbHRpcDtcbiAgfVxuXG4gIGdldCB0b29sdGlwUG9zaXRpb24oKSB7XG4gICAgaWYgKEhlbHBlcnMuaXNCbGFuayh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udG9vbHRpcFBvc2l0aW9uKSkge1xuICAgICAgcmV0dXJuICdyaWdodCc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udG9vbHRpcFBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0IHRvb2x0aXBTaXplKCkge1xuICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBTaXplKSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBTaXplO1xuICB9XG5cbiAgZ2V0IHRvb2x0aXBQcmVsaW5lKCkge1xuICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBQcmVsaW5lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBQcmVsaW5lO1xuICB9XG5cbiAgZ2V0IHJlbW92ZVRvb2x0aXBBcnJvdygpIHtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZW1vdmVUb29sdGlwQXJyb3cpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmVtb3ZlVG9vbHRpcEFycm93O1xuICB9XG5cbiAgZ2V0IGFsd2F5c0FjdGl2ZSgpIHtcbiAgICAvLyBDb250cm9scyB0aGF0IGhhdmUgdGhlIGxhYmVsIGFjdGl2ZSBpZiB0aGVyZSBpcyBhbnkgdXNlciBlbnRlcmVkIHRleHQgaW4gdGhlIGZpZWxkXG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3BpY2tlcicgJiYgdGhpcy5fZW50ZXJlZFRleHQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDb250cm9scyB0aGF0IGFsd2F5cyBoYXZlIHRoZSBsYWJlbCBhY3RpdmVcbiAgICByZXR1cm4gKFxuICAgICAgW1xuICAgICAgICAndGlsZXMnLFxuICAgICAgICAnY2hlY2tsaXN0JyxcbiAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgJ2RhdGUnLFxuICAgICAgICAndGltZScsXG4gICAgICAgICdkYXRlLXRpbWUnLFxuICAgICAgICAnYWRkcmVzcycsXG4gICAgICAgICdmaWxlJyxcbiAgICAgICAgJ2VkaXRvcicsXG4gICAgICAgICdhY2UtZWRpdG9yJyxcbiAgICAgICAgJ3JhZGlvJyxcbiAgICAgICAgJ3RleHQtYXJlYScsXG4gICAgICAgICdxdWljay1ub3RlJyxcbiAgICAgIF0uaW5kZXhPZih0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUpICE9PSAtMVxuICAgICk7XG4gIH1cblxuICBnZXQgcmVxdWlyZXNFeHRyYVNwYWNpbmcoKSB7XG4gICAgLy8gQ2hpcHNcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAncGlja2VyJyAmJiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubXVsdGlwbGUgJiYgdGhpcy5oYXNWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGV4ZWN1dGVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbikge1xuICAgIGlmIChpbnRlcmFjdGlvbi5zY3JpcHQgJiYgSGVscGVycy5pc0Z1bmN0aW9uKGludGVyYWN0aW9uLnNjcmlwdCkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpZWxkSW50ZXJhY3Rpb25BcGkuZm9ybSA9IHRoaXMuZm9ybTtcbiAgICAgICAgdGhpcy5maWVsZEludGVyYWN0aW9uQXBpLmN1cnJlbnRLZXkgPSB0aGlzLmNvbnRyb2wua2V5O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGludGVyYWN0aW9uLnNjcmlwdCh0aGlzLmZpZWxkSW50ZXJhY3Rpb25BcGksIHRoaXMuY29udHJvbC5rZXkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmluZm8oJ0ZpZWxkIEludGVyYWN0aW9uIEVycm9yIScsIHRoaXMuY29udHJvbC5rZXkpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVR5cGluZyhldmVudDogYW55KSB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IGV2ZW50ICYmIGV2ZW50Lmxlbmd0aDtcbiAgICB0aGlzLl9lbnRlcmVkVGV4dCA9IGV2ZW50O1xuICB9XG5cbiAgaGFuZGxlRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQsIGZpZWxkPzogYW55KSB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gICAgdGhpcy5mb2N1c2VkRmllbGQgPSBmaWVsZDtcbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayh0aGlzLmNoYXJhY3RlckNvdW50RmllbGQpICYmIHRoaXMuY2hhcmFjdGVyQ291bnRGaWVsZCA9PT0gZmllbGQpIHtcbiAgICAgIHRoaXMuc2hvd0NvdW50ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAnYWRkcmVzcycgJiZcbiAgICAgIGZpZWxkICYmXG4gICAgICAhSGVscGVycy5pc0VtcHR5KHRoaXMuZm9ybS52YWx1ZVt0aGlzLmNvbnRyb2wua2V5XSkgJiZcbiAgICAgICFIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLnZhbHVlW3RoaXMuY29udHJvbC5rZXldW2ZpZWxkXSlcbiAgICApIHtcbiAgICAgIHRoaXMuaGFuZGxlQWRkcmVzc0NoYW5nZSh7IHZhbHVlOiB0aGlzLmZvcm0udmFsdWVbdGhpcy5jb250cm9sLmtleV1bZmllbGRdLCBmaWVsZCB9KTtcbiAgICB9XG4gICAgdGhpcy5fZm9jdXNFbWl0dGVyLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgaGFuZGxlQmx1cihldmVudDogRm9jdXNFdmVudCkge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvY3VzZWRGaWVsZCA9ICcnO1xuICAgIHRoaXMuc2hvd0NvdW50ID0gZmFsc2U7XG4gICAgdGhpcy5fYmx1ckVtaXR0ZXIuZW1pdChldmVudCk7XG4gIH1cblxuICBjbGVhclZhbHVlKCkge1xuICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zZXRWYWx1ZShudWxsKTtcbiAgICB0aGlzLmZvcm1hdHRlZFZhbHVlID0gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZVRleHRBcmVhSW5wdXQoZXZlbnQpIHtcbiAgICB0aGlzLmVtaXRDaGFuZ2UoZXZlbnQpO1xuICAgIHRoaXMucmVzdHJpY3RLZXlzKGV2ZW50KTtcbiAgfVxuXG4gIGNoZWNrTWF4TGVuZ3RoKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY29udHJvbCAmJiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWF4bGVuZ3RoKSB7XG4gICAgICB0aGlzLml0ZW1Db3VudCA9IGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGg7XG4gICAgICB0aGlzLm1heExlbmd0aE1ldCA9IGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPj0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aDtcbiAgICB9XG4gIH1cblxuICBtb2RlbENoYW5nZVdpdGhSYXcoZXZlbnQpIHtcbiAgICBpZiAoSGVscGVycy5pc0VtcHR5KGV2ZW50LnZhbHVlKSkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW50ZXJlZFRleHQgPSAnJztcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3BpY2tlcicgJiYgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCkge1xuICAgICAgdGhpcy5pdGVtQ291bnQgPSBldmVudC52YWx1ZSA/IGV2ZW50LnZhbHVlLmxlbmd0aCA6IDA7XG4gICAgICB0aGlzLm1heExlbmd0aE1ldCA9IHRoaXMuaXRlbUNvdW50ID49IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGggPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yYXdWYWx1ZSA9IGV2ZW50LnJhd1ZhbHVlO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQudmFsdWUpO1xuICB9XG5cbiAgbW9kZWxDaGFuZ2UodmFsdWUpIHtcbiAgICBpZiAoSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW50ZXJlZFRleHQgPSAnJztcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICB2YWxpZGF0ZU51bWJlck9uQmx1cihldmVudDogRm9jdXNFdmVudCkge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvY3VzZWRGaWVsZCA9ICcnO1xuICAgIHRoaXMuc2hvd0NvdW50ID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zdWJUeXBlID09PSAnbnVtYmVyJykge1xuICAgICAgdGhpcy52YWxpZGF0ZUludGVnZXJJbnB1dCgpO1xuICAgIH1cbiAgICB0aGlzLl9ibHVyRW1pdHRlci5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHZhbGlkYXRlSW50ZWdlcklucHV0KCkge1xuICAgIGNvbnN0IE5VTUJFUlNfT05MWSA9IC9eW1xcZFxcLV1cXGQqJC87XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWx1ZSAmJiAhTlVNQkVSU19PTkxZLnRlc3QodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlKSkge1xuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1hcmtBc0ludmFsaWQoXG4gICAgICAgIGAke3RoaXMubGFiZWxzLmludmFsaWRJbnRlZ2VySW5wdXR9ICR7dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmxhYmVsLnRvVXBwZXJDYXNlKCl9YCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVzdHJpY3RLZXlzKGV2ZW50KSB7XG4gICAgY29uc3QgTlVNQkVSU19PTkxZID0gL1swLTlcXC1dLztcbiAgICBjb25zdCBOVU1CRVJTX1dJVEhfREVDSU1BTF9ET1QgPSAvWzAtOVxcLlxcLV0vO1xuICAgIGNvbnN0IE5VTUJFUlNfV0lUSF9ERUNJTUFMX0RPVF9BTkRfQ09NTUEgPSAvWzAtOVxcLlxcLFxcLV0vO1xuICAgIGNvbnN0IFVUSUxJVFlfS0VZUyA9IFsnQmFja3NwYWNlJywgJ0RlbGV0ZScsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICdUYWInXTtcbiAgICBsZXQga2V5ID0gZXZlbnQua2V5O1xuXG4gICAgLy8gTnVtYmVycyBvciBudW1iZXJzIGFuZCBkZWNpbWFsIGNoYXJhY3RlcnMgb25seVxuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc3ViVHlwZSA9PT0gJ251bWJlcicgJiYgIShOVU1CRVJTX09OTFkudGVzdChrZXkpIHx8IFVUSUxJVFlfS0VZUy5pbmNsdWRlcyhrZXkpKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgWydjdXJyZW5jeScsICdmbG9hdCcsICdwZXJjZW50YWdlJ10uaW5jbHVkZXModGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnN1YlR5cGUpICYmXG4gICAgICAhKFxuICAgICAgICAodGhpcy5kZWNpbWFsU2VwYXJhdG9yID09PSAnLicgJiYgTlVNQkVSU19XSVRIX0RFQ0lNQUxfRE9ULnRlc3Qoa2V5KSkgfHxcbiAgICAgICAgKHRoaXMuZGVjaW1hbFNlcGFyYXRvciA9PT0gJywnICYmIE5VTUJFUlNfV0lUSF9ERUNJTUFMX0RPVF9BTkRfQ09NTUEudGVzdChrZXkpKSB8fFxuICAgICAgICBVVElMSVRZX0tFWVMuaW5jbHVkZXMoa2V5KVxuICAgICAgKVxuICAgICkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgLy8gTWF4IExlbmd0aFxuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWF4bGVuZ3RoICYmIGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPj0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVQZXJjZW50Q2hhbmdlKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0Wyd2YWx1ZSddO1xuICAgIGxldCBwZXJjZW50ID0gSGVscGVycy5pc0VtcHR5KHZhbHVlKSA/IG51bGwgOiBOdW1iZXIoKHZhbHVlIC8gMTAwKS50b0ZpeGVkKDYpLnJlcGxhY2UoL1xcLj8wKiQvLCAnJykpO1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KHBlcmNlbnQpKSB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHBlcmNlbnQpO1xuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnNldFZhbHVlKHBlcmNlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KG51bGwpO1xuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnNldFZhbHVlKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVRhYkZvclBpY2tlcnMoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZSAmJiBldmVudCAmJiBldmVudC5rZXlDb2RlKSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRVNDIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlRBQikge1xuICAgICAgICB0aGlzLnRvZ2dsZUFjdGl2ZShldmVudCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtaXRDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLmNoZWNrTWF4TGVuZ3RoKHZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZUVkaXQodmFsdWUpIHtcbiAgICB0aGlzLmVkaXQuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVTYXZlKHZhbHVlKSB7XG4gICAgdGhpcy5zYXZlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlRGVsZXRlKHZhbHVlKSB7XG4gICAgdGhpcy5kZWxldGUuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVVcGxvYWQodmFsdWUpIHtcbiAgICB0aGlzLnVwbG9hZC5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZUFkZHJlc3NDaGFuZ2UoZGF0YSkge1xuICAgIGlmIChcbiAgICAgIGRhdGEgJiZcbiAgICAgICFIZWxwZXJzLmlzQmxhbmsoZGF0YS52YWx1ZSkgJiZcbiAgICAgIGRhdGEuZmllbGQgJiZcbiAgICAgIHRoaXMuY29udHJvbC5jb25maWdbZGF0YS5maWVsZF0gJiZcbiAgICAgICFIZWxwZXJzLmlzRW1wdHkodGhpcy5jb250cm9sLmNvbmZpZ1tkYXRhLmZpZWxkXS5tYXhsZW5ndGgpXG4gICAgKSB7XG4gICAgICB0aGlzLml0ZW1Db3VudCA9IGRhdGEudmFsdWUubGVuZ3RoO1xuICAgICAgdGhpcy5jaGFyYWN0ZXJDb3VudEZpZWxkID0gZGF0YS5maWVsZDtcbiAgICAgIHRoaXMubWF4TGVuZ3RoID0gdGhpcy5jb250cm9sLmNvbmZpZ1tkYXRhLmZpZWxkXS5tYXhsZW5ndGg7XG4gICAgICB0aGlzLnNob3dDb3VudCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5tYXhMZW5ndGggPT09IHRoaXMuaXRlbUNvdW50KSB7XG4gICAgICAgIHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMucHVzaChkYXRhLmZpZWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMgPSB0aGlzLm1heExlbmd0aE1ldEVycm9yZmllbGRzLmZpbHRlcigoZmllbGQ6IHN0cmluZykgPT4gZmllbGQgIT09IGRhdGEuZmllbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVZhbGlkaXR5KHNob3VsZEV2ZW50QmVFbWl0dGVkKTogdm9pZCB7XG4gICAgbGV0IGVtaXRFdmVudDogYm9vbGVhbiA9IHNob3VsZEV2ZW50QmVFbWl0dGVkID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50IH0pO1xuICB9XG59XG4iXX0=