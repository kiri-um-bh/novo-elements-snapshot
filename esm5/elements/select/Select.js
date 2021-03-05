/**
 * @fileoverview added by tsickle
 * Generated from: elements/select/Select.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, NgZone, Output, ViewChild, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NovoLabelService } from '../../services/novo-label-service';
import { Helpers } from '../../utils/Helpers';
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
// App
import { NovoOverlayTemplateComponent } from '../overlay/Overlay';
// Value accessor for the component (supports ngModel)
/** @type {?} */
var SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NovoSelectElement; })),
    multi: true,
};
var NovoSelectElement = /** @class */ (function () {
    function NovoSelectElement(element, labels, ref, focusMonitor, ngZone) {
        this.element = element;
        this.labels = labels;
        this.ref = ref;
        this.focusMonitor = focusMonitor;
        this.ngZone = ngZone;
        this.placeholder = 'Select...';
        this.onSelect = new EventEmitter();
        this.selectedIndex = -1;
        this.empty = true;
        this.header = {
            open: false,
            valid: true,
            value: '',
        };
        this.onModelChange = (/**
         * @return {?}
         */
        function () { });
        this.onModelTouched = (/**
         * @return {?}
         */
        function () { });
        this.filterTerm = '';
        this.disabled = false;
    }
    /**
     * @return {?}
     */
    NovoSelectElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor.monitor(this.dropdown.nativeElement).subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        function (origin) {
            return _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                if (origin === 'keyboard' && !_this.disabled) {
                    _this.openPanel();
                }
            }));
        }));
        this.ngOnChanges();
    };
    /**
     * @param {?=} changes
     * @return {?}
     */
    NovoSelectElement.prototype.ngOnChanges = /**
     * @param {?=} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        this.readonly = this.readonly === true;
        if (this.options && this.options.length && typeof this.options[0] === 'string') {
            this.filteredOptions = this.options.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return { value: item, label: item };
            }));
        }
        else {
            this.filteredOptions = (this.options || [])
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return !item.readOnly;
            }))
                .map((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                return tslib_1.__assign({}, element, { active: false });
            }));
        }
        if (!this.model && !this.createdItem) {
            this.clear();
        }
        else if (this.createdItem) {
            /** @type {?} */
            var item = this.options.find((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.label === _this.createdItem; }));
            /** @type {?} */
            var index = this.options.indexOf(item);
            this.select(item, index);
        }
        else {
            this.writeValue(this.model);
        }
        if (this.panelOpen) {
            this.openPanel();
        }
    };
    /**
     * @return {?}
     */
    NovoSelectElement.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring(this.dropdown.nativeElement);
    };
    /** BEGIN: Convienient Panel Methods. */
    /**
     * BEGIN: Convienient Panel Methods.
     * @return {?}
     */
    NovoSelectElement.prototype.openPanel = /**
     * BEGIN: Convienient Panel Methods.
     * @return {?}
     */
    function () {
        this.overlay.openPanel();
    };
    /**
     * @return {?}
     */
    NovoSelectElement.prototype.closePanel = /**
     * @return {?}
     */
    function () {
        this.overlay.closePanel();
    };
    /**
     * @return {?}
     */
    NovoSelectElement.prototype.togglePanel = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.panelOpen) {
            this.closePanel();
        }
        else {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.dropdown.nativeElement.focus();
            }));
            this.openPanel();
        }
    };
    Object.defineProperty(NovoSelectElement.prototype, "panelOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.overlay && this.overlay.panelOpen;
        },
        enumerable: true,
        configurable: true
    });
    /** END: Convenient Panel Methods. */
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     */
    /** END: Convenient Panel Methods. */
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     * @param {?} event
     * @return {?}
     */
    NovoSelectElement.prototype.setValueAndClose = /** END: Convenient Panel Methods. */
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.value && event.index >= 0) {
            this.select(event.value, event.index);
        }
        this.closePanel();
    };
    /**
     * @param {?} option
     * @param {?} i
     * @param {?=} fireEvents
     * @return {?}
     */
    NovoSelectElement.prototype.select = /**
     * @param {?} option
     * @param {?} i
     * @param {?=} fireEvents
     * @return {?}
     */
    function (option, i, fireEvents) {
        if (fireEvents === void 0) { fireEvents = true; }
        if (this.selected) {
            this.selected.active = false;
        }
        this.selectedIndex = i;
        this.selected = option;
        this.selected.active = true;
        this.empty = false;
        if (fireEvents) {
            this.onModelChange(this.selected.value);
            this.onSelect.emit({ selected: this.selected.value });
        }
    };
    /**
     * @return {?}
     */
    NovoSelectElement.prototype.clear = /**
     * @return {?}
     */
    function () {
        if (this.selected) {
            this.selected.active = false;
        }
        this.selected = {
            label: this.placeholder,
            value: null,
            active: false,
        };
        this.header = {
            open: false,
            valid: true,
            value: '',
        };
        this.selectedIndex = -1;
        this.empty = true;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoSelectElement.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // To prevent default window scrolling
        if ([KeyCodes.UP, KeyCodes.DOWN].includes(event.keyCode)) {
            event.preventDefault();
        }
        if ([KeyCodes.ESC, KeyCodes.TAB].includes(event.keyCode)) {
            this.closePanel();
        }
        else if (event.keyCode === KeyCodes.ENTER) {
            if (this.header.open && this.header.value) {
                this.saveHeader();
            }
            else {
                this.setValueAndClose({
                    value: this.filteredOptions[this.selectedIndex],
                    index: this.selectedIndex,
                });
            }
        }
        else if (event.keyCode === KeyCodes.UP) {
            if (!this.panelOpen) {
                this.openPanel();
            }
            if (this.selectedIndex > 0) {
                this.selectedIndex--;
                this.select(this.filteredOptions[this.selectedIndex], this.selectedIndex);
                this.scrollToSelected();
            }
        }
        else if (event.keyCode === KeyCodes.DOWN) {
            if (!this.panelOpen) {
                this.openPanel();
            }
            if (this.selectedIndex < this.filteredOptions.length - 1) {
                this.selectedIndex++;
                this.select(this.filteredOptions[this.selectedIndex], this.selectedIndex);
                this.scrollToSelected();
                if (this.header.open) {
                    this.toggleHeader(null, false);
                }
            }
        }
        else if (event.keyCode === KeyCodes.UP && this.selectedIndex === 0) {
            if (!this.panelOpen) {
                this.openPanel();
            }
            this.selectedIndex--;
            this.toggleHeader(null, true);
        }
        else if ((event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode === KeyCodes.SPACE) {
            if (event.keyCode === KeyCodes.SPACE) {
                event.preventDefault();
            }
            if (!this.panelOpen) {
                this.openPanel();
            }
            clearTimeout(this.filterTermTimeout);
            this.filterTermTimeout = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.filterTerm = '';
            }), 2000);
            /** @type {?} */
            var char = event.key;
            this.filterTerm = this.filterTerm.concat(char).toUpperCase();
            /** @type {?} */
            var item = this.filteredOptions.find((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.label.toUpperCase().indexOf(_this.filterTerm) === 0; }));
            if (item) {
                this.select(item, this.filteredOptions.indexOf(item));
                this.scrollToSelected();
            }
        }
        else if ([KeyCodes.BACKSPACE, KeyCodes.DELETE].includes(event.keyCode)) {
            clearTimeout(this.filterTermTimeout);
            this.filterTermTimeout = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.filterTerm = '';
            }), 2000);
            this.filterTerm = this.filterTerm.slice(0, -1);
        }
    };
    /**
     * @return {?}
     */
    NovoSelectElement.prototype.scrollToSelected = /**
     * @return {?}
     */
    function () {
        this.scrollToIndex(this.selectedIndex);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NovoSelectElement.prototype.scrollToIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var element = this.overlay.overlayRef.overlayElement;
        /** @type {?} */
        var list = element.querySelector('.novo-select-list');
        /** @type {?} */
        var items = list.querySelectorAll('li');
        /** @type {?} */
        var item = items[this.headerConfig ? index + 1 : index];
        if (item) {
            list.scrollTop = item.offsetTop;
        }
    };
    /**
     * @param {?} event
     * @param {?=} forceValue
     * @return {?}
     */
    NovoSelectElement.prototype.toggleHeader = /**
     * @param {?} event
     * @param {?=} forceValue
     * @return {?}
     */
    function (event, forceValue) {
        if (forceValue === void 0) { forceValue = false; }
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        // Reverse the active property (if forceValue, use that)
        this.header = {
            open: forceValue !== undefined ? forceValue : !this.header.open,
            value: '',
            valid: true,
        };
    };
    /**
     * @param {?} match
     * @param {?} query
     * @return {?}
     */
    NovoSelectElement.prototype.highlight = /**
     * @param {?} match
     * @param {?} query
     * @return {?}
     */
    function (match, query) {
        // Replaces the capture string with a the same string inside of a "strong" tag
        return query ? match.replace(new RegExp(this.escapeRegexp(query), 'gi'), '<strong>$&</strong>') : match;
    };
    /**
     * @param {?} queryToEscape
     * @return {?}
     */
    NovoSelectElement.prototype.escapeRegexp = /**
     * @param {?} queryToEscape
     * @return {?}
     */
    function (queryToEscape) {
        // Ex: if the capture is "a" the result will be \a
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    };
    /**
     * @return {?}
     */
    NovoSelectElement.prototype.saveHeader = /**
     * @return {?}
     */
    function () {
        if (this.header.value) {
            this.headerConfig.onSave(this.header.value);
            this.createdItem = this.header.value;
            this.closePanel();
        }
        else {
            this.header.valid = false;
        }
    };
    /**
     * @param {?} model
     * @return {?}
     */
    NovoSelectElement.prototype.writeValue = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        this.model = model;
        if (this.options) {
            /** @type {?} */
            var item = this.filteredOptions.find((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.value === model || (model && i.value === model.id); }));
            if (!item && !Helpers.isEmpty(model)) {
                item = {
                    label: model,
                    value: model,
                };
                if (!item.readOnly) {
                    this.options.unshift(item);
                }
            }
            if (item) {
                this.select(item, this.filteredOptions.indexOf(item), false);
                this.empty = false;
            }
            else {
                this.clear();
            }
        }
        this.ref.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoSelectElement.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoSelectElement.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    NovoSelectElement.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.disabled = disabled;
    };
    NovoSelectElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-select',
                    providers: [SELECT_VALUE_ACCESSOR],
                    template: "\n    <div #dropdownElement (click)=\"togglePanel(); (false)\" tabIndex=\"{{ disabled ? -1 : 0 }}\" type=\"button\" [class.empty]=\"empty\">\n      {{ selected.label }}<i class=\"bhi-collapse\"></i>\n    </div>\n    <novo-overlay-template [parent]=\"element\" position=\"center\" (closing)=\"dropdown.nativeElement.focus()\">\n      <ul class=\"novo-select-list\" tabIndex=\"-1\" [class.header]=\"headerConfig\" [class.active]=\"panelOpen\">\n        <ng-content></ng-content>\n        <li *ngIf=\"headerConfig\" class=\"select-header\" [class.open]=\"header.open\">\n          <button *ngIf=\"!header.open\" (click)=\"toggleHeader($event); (false)\" tabIndex=\"-1\" type=\"button\" class=\"header\">\n            <i class=\"bhi-add-thin\"></i>&nbsp;{{ headerConfig.label }}\n          </button>\n          <div *ngIf=\"header.open\" [ngClass]=\"{ active: header.open }\">\n            <input\n              autofocus\n              type=\"text\"\n              [placeholder]=\"headerConfig.placeholder\"\n              [attr.id]=\"name\"\n              autocomplete=\"false\"\n              [(ngModel)]=\"header.value\"\n              [ngClass]=\"{ invalid: !header.valid }\"\n            />\n            <footer>\n              <button (click)=\"toggleHeader($event, false)\">{{ labels.cancel }}</button>\n              <button (click)=\"saveHeader()\" class=\"primary\">{{ labels.save }}</button>\n            </footer>\n          </div>\n        </li>\n        <li\n          *ngFor=\"let option of filteredOptions; let i = index\"\n          [ngClass]=\"{ active: option.active }\"\n          (click)=\"setValueAndClose({ value: option, index: i })\"\n          [attr.data-automation-value]=\"option.label\"\n        >\n          <span [innerHtml]=\"highlight(option.label, filterTerm)\"></span> <i *ngIf=\"option.active\" class=\"bhi-check\"></i>\n        </li>\n      </ul>\n    </novo-overlay-template>\n  ",
                    host: {
                        '(keydown)': 'onKeyDown($event)',
                    }
                }] }
    ];
    /** @nocollapse */
    NovoSelectElement.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NovoLabelService },
        { type: ChangeDetectorRef },
        { type: FocusMonitor },
        { type: NgZone }
    ]; };
    NovoSelectElement.propDecorators = {
        name: [{ type: Input }],
        options: [{ type: Input }],
        placeholder: [{ type: Input }],
        readonly: [{ type: Input }],
        headerConfig: [{ type: Input }],
        onSelect: [{ type: Output }],
        overlay: [{ type: ViewChild, args: [NovoOverlayTemplateComponent, { static: true },] }],
        dropdown: [{ type: ViewChild, args: ['dropdownElement', { static: true },] }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return NovoSelectElement;
}());
export { NovoSelectElement };
if (false) {
    /** @type {?} */
    NovoSelectElement.prototype.name;
    /** @type {?} */
    NovoSelectElement.prototype.options;
    /** @type {?} */
    NovoSelectElement.prototype.placeholder;
    /** @type {?} */
    NovoSelectElement.prototype.readonly;
    /** @type {?} */
    NovoSelectElement.prototype.headerConfig;
    /** @type {?} */
    NovoSelectElement.prototype.onSelect;
    /** @type {?} */
    NovoSelectElement.prototype.selectedIndex;
    /** @type {?} */
    NovoSelectElement.prototype.empty;
    /** @type {?} */
    NovoSelectElement.prototype.header;
    /** @type {?} */
    NovoSelectElement.prototype.createdItem;
    /** @type {?} */
    NovoSelectElement.prototype.selected;
    /** @type {?} */
    NovoSelectElement.prototype.model;
    /** @type {?} */
    NovoSelectElement.prototype.onModelChange;
    /** @type {?} */
    NovoSelectElement.prototype.onModelTouched;
    /** @type {?} */
    NovoSelectElement.prototype.filterTerm;
    /** @type {?} */
    NovoSelectElement.prototype.filterTermTimeout;
    /** @type {?} */
    NovoSelectElement.prototype.filteredOptions;
    /** @type {?} */
    NovoSelectElement.prototype.disabled;
    /**
     * Element for the panel containing the autocomplete options.
     * @type {?}
     */
    NovoSelectElement.prototype.overlay;
    /** @type {?} */
    NovoSelectElement.prototype.dropdown;
    /** @type {?} */
    NovoSelectElement.prototype.element;
    /** @type {?} */
    NovoSelectElement.prototype.labels;
    /** @type {?} */
    NovoSelectElement.prototype.ref;
    /**
     * @type {?}
     * @private
     */
    NovoSelectElement.prototype.focusMonitor;
    /**
     * @type {?}
     * @private
     */
    NovoSelectElement.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NlbGVjdC9TZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFJTixNQUFNLEVBRU4sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUUxRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0lBRzVELHFCQUFxQixHQUFHO0lBQzVCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsRUFBQztJQUNoRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBRUQ7SUFrRkUsMkJBQ1MsT0FBbUIsRUFDbkIsTUFBd0IsRUFDeEIsR0FBc0IsRUFDckIsWUFBMEIsRUFDMUIsTUFBYztRQUpmLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDckIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXBDeEIsZ0JBQVcsR0FBVyxXQUFXLENBQUM7UUFN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Z0JBdkVDLFVBQVU7Z0JBY0gsZ0JBQWdCO2dCQWhCdkIsaUJBQWlCO2dCQUZWLFlBQVk7Z0JBU25CLE1BQU07Ozt1QkFvRUwsS0FBSzswQkFFTCxLQUFLOzhCQUVMLEtBQUs7MkJBRUwsS0FBSzsrQkFFTCxLQUFLOzJCQUVMLE1BQU07MEJBcUJOLFNBQVMsU0FBQyw0QkFBNEIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBRXhELFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NEJBK0g3QyxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQXdKckMsd0JBQUM7Q0FBQSxBQXRXRCxJQXNXQztTQXpUWSxpQkFBaUI7OztJQUM1QixpQ0FDYTs7SUFDYixvQ0FDb0I7O0lBQ3BCLHdDQUNrQzs7SUFDbEMscUNBQ2tCOztJQUNsQix5Q0FDa0I7O0lBQ2xCLHFDQUNpRDs7SUFFakQsMENBQTJCOztJQUMzQixrQ0FBc0I7O0lBQ3RCLG1DQUlFOztJQUNGLHdDQUFpQjs7SUFDakIscUNBQWM7O0lBQ2Qsa0NBQVc7O0lBQ1gsMENBQW1DOztJQUNuQywyQ0FBb0M7O0lBQ3BDLHVDQUF3Qjs7SUFDeEIsOENBQWtCOztJQUNsQiw0Q0FBcUI7O0lBQ3JCLHFDQUEwQjs7Ozs7SUFHMUIsb0NBQ3NDOztJQUN0QyxxQ0FDcUI7O0lBR25CLG9DQUEwQjs7SUFDMUIsbUNBQStCOztJQUMvQixnQ0FBNkI7Ozs7O0lBQzdCLHlDQUFrQzs7Ozs7SUFDbEMsbUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcbi8vIEFwcFxuaW1wb3J0IHsgTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uL292ZXJsYXkvT3ZlcmxheSc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgU0VMRUNUX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b1NlbGVjdEVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2VsZWN0JyxcbiAgcHJvdmlkZXJzOiBbU0VMRUNUX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICNkcm9wZG93bkVsZW1lbnQgKGNsaWNrKT1cInRvZ2dsZVBhbmVsKCk7IChmYWxzZSlcIiB0YWJJbmRleD1cInt7IGRpc2FibGVkID8gLTEgOiAwIH19XCIgdHlwZT1cImJ1dHRvblwiIFtjbGFzcy5lbXB0eV09XCJlbXB0eVwiPlxuICAgICAge3sgc2VsZWN0ZWQubGFiZWwgfX08aSBjbGFzcz1cImJoaS1jb2xsYXBzZVwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgICA8bm92by1vdmVybGF5LXRlbXBsYXRlIFtwYXJlbnRdPVwiZWxlbWVudFwiIHBvc2l0aW9uPVwiY2VudGVyXCIgKGNsb3NpbmcpPVwiZHJvcGRvd24ubmF0aXZlRWxlbWVudC5mb2N1cygpXCI+XG4gICAgICA8dWwgY2xhc3M9XCJub3ZvLXNlbGVjdC1saXN0XCIgdGFiSW5kZXg9XCItMVwiIFtjbGFzcy5oZWFkZXJdPVwiaGVhZGVyQ29uZmlnXCIgW2NsYXNzLmFjdGl2ZV09XCJwYW5lbE9wZW5cIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8bGkgKm5nSWY9XCJoZWFkZXJDb25maWdcIiBjbGFzcz1cInNlbGVjdC1oZWFkZXJcIiBbY2xhc3Mub3Blbl09XCJoZWFkZXIub3BlblwiPlxuICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhaGVhZGVyLm9wZW5cIiAoY2xpY2spPVwidG9nZ2xlSGVhZGVyKCRldmVudCk7IChmYWxzZSlcIiB0YWJJbmRleD1cIi0xXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1hZGQtdGhpblwiPjwvaT4mbmJzcDt7eyBoZWFkZXJDb25maWcubGFiZWwgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaGVhZGVyLm9wZW5cIiBbbmdDbGFzc109XCJ7IGFjdGl2ZTogaGVhZGVyLm9wZW4gfVwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJoZWFkZXJDb25maWcucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICBbYXR0ci5pZF09XCJuYW1lXCJcbiAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImhlYWRlci52YWx1ZVwiXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgaW52YWxpZDogIWhlYWRlci52YWxpZCB9XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVIZWFkZXIoJGV2ZW50LCBmYWxzZSlcIj57eyBsYWJlbHMuY2FuY2VsIH19PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInNhdmVIZWFkZXIoKVwiIGNsYXNzPVwicHJpbWFyeVwiPnt7IGxhYmVscy5zYXZlIH19PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBmaWx0ZXJlZE9wdGlvbnM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInsgYWN0aXZlOiBvcHRpb24uYWN0aXZlIH1cIlxuICAgICAgICAgIChjbGljayk9XCJzZXRWYWx1ZUFuZENsb3NlKHsgdmFsdWU6IG9wdGlvbiwgaW5kZXg6IGkgfSlcIlxuICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi12YWx1ZV09XCJvcHRpb24ubGFiZWxcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQob3B0aW9uLmxhYmVsLCBmaWx0ZXJUZXJtKVwiPjwvc3Bhbj4gPGkgKm5nSWY9XCJvcHRpb24uYWN0aXZlXCIgY2xhc3M9XCJiaGktY2hlY2tcIj48L2k+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbm92by1vdmVybGF5LXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgJyhrZXlkb3duKSc6ICdvbktleURvd24oJGV2ZW50KScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TZWxlY3RFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG9wdGlvbnM6IEFycmF5PGFueT47XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnU2VsZWN0Li4uJztcbiAgQElucHV0KClcbiAgcmVhZG9ubHk6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGhlYWRlckNvbmZpZzogYW55O1xuICBAT3V0cHV0KClcbiAgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHNlbGVjdGVkSW5kZXg6IG51bWJlciA9IC0xO1xuICBlbXB0eTogYm9vbGVhbiA9IHRydWU7XG4gIGhlYWRlcjogYW55ID0ge1xuICAgIG9wZW46IGZhbHNlLFxuICAgIHZhbGlkOiB0cnVlLFxuICAgIHZhbHVlOiAnJyxcbiAgfTtcbiAgY3JlYXRlZEl0ZW06IGFueTtcbiAgc2VsZWN0ZWQ6IGFueTtcbiAgbW9kZWw6IGFueTtcbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIGZpbHRlclRlcm06IHN0cmluZyA9ICcnO1xuICBmaWx0ZXJUZXJtVGltZW91dDtcbiAgZmlsdGVyZWRPcHRpb25zOiBhbnk7XG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIEVsZW1lbnQgZm9yIHRoZSBwYW5lbCBjb250YWluaW5nIHRoZSBhdXRvY29tcGxldGUgb3B0aW9ucy4gKi9cbiAgQFZpZXdDaGlsZChOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBvdmVybGF5OiBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdkcm9wZG93bkVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBkcm9wZG93bjogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICAgIHB1YmxpYyByZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50KS5zdWJzY3JpYmUoKG9yaWdpbikgPT5cbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIGlmIChvcmlnaW4gPT09ICdrZXlib2FyZCcgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5yZWFkb25seSA9IHRoaXMucmVhZG9ubHkgPT09IHRydWU7XG4gICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubGVuZ3RoICYmIHR5cGVvZiB0aGlzLm9wdGlvbnNbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGl0ZW0sIGxhYmVsOiBpdGVtIH07XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSAodGhpcy5vcHRpb25zIHx8IFtdKVxuICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuICFpdGVtLnJlYWRPbmx5O1xuICAgICAgICB9KVxuICAgICAgICAubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmVsZW1lbnQsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubW9kZWwgJiYgIXRoaXMuY3JlYXRlZEl0ZW0pIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3JlYXRlZEl0ZW0pIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLm9wdGlvbnMuZmluZCgoaSkgPT4gaS5sYWJlbCA9PT0gdGhpcy5jcmVhdGVkSXRlbSk7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMub3B0aW9ucy5pbmRleE9mKGl0ZW0pO1xuICAgICAgdGhpcy5zZWxlY3QoaXRlbSwgaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5tb2RlbCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhbmVsT3Blbikge1xuICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgLyoqIEJFR0lOOiBDb252aWVuaWVudCBQYW5lbCBNZXRob2RzLiAqL1xuICBvcGVuUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5Lm9wZW5QYW5lbCgpO1xuICB9XG5cbiAgY2xvc2VQYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXkuY2xvc2VQYW5lbCgpO1xuICB9XG5cbiAgdG9nZ2xlUGFuZWwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBwYW5lbE9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkucGFuZWxPcGVuO1xuICB9XG4gIC8qKiBFTkQ6IENvbnZlbmllbnQgUGFuZWwgTWV0aG9kcy4gKi9cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgY2xvc2VzIHRoZSBwYW5lbCwgYW5kIGlmIGEgdmFsdWUgaXMgc3BlY2lmaWVkLCBhbHNvIHNldHMgdGhlIGFzc29jaWF0ZWRcbiAgICogY29udHJvbCB0byB0aGF0IHZhbHVlLiBJdCB3aWxsIGFsc28gbWFyayB0aGUgY29udHJvbCBhcyBkaXJ0eSBpZiB0aGlzIGludGVyYWN0aW9uXG4gICAqIHN0ZW1tZWQgZnJvbSB0aGUgdXNlci5cbiAgICovXG4gIHNldFZhbHVlQW5kQ2xvc2UoZXZlbnQ6IGFueSB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudmFsdWUgJiYgZXZlbnQuaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5zZWxlY3QoZXZlbnQudmFsdWUsIGV2ZW50LmluZGV4KTtcbiAgICB9XG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gIH1cblxuICBzZWxlY3Qob3B0aW9uLCBpLCBmaXJlRXZlbnRzOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBvcHRpb247XG4gICAgdGhpcy5zZWxlY3RlZC5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuZW1wdHkgPSBmYWxzZTtcbiAgICBpZiAoZmlyZUV2ZW50cykge1xuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMuc2VsZWN0ZWQudmFsdWUpO1xuICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KHsgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQudmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWQgPSB7XG4gICAgICBsYWJlbDogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMuaGVhZGVyID0ge1xuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICB9O1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgIHRoaXMuZW1wdHkgPSB0cnVlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIC8vIFRvIHByZXZlbnQgZGVmYXVsdCB3aW5kb3cgc2Nyb2xsaW5nXG4gICAgaWYgKFtLZXlDb2Rlcy5VUCwgS2V5Q29kZXMuRE9XTl0uaW5jbHVkZXMoZXZlbnQua2V5Q29kZSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmIChbS2V5Q29kZXMuRVNDLCBLZXlDb2Rlcy5UQUJdLmluY2x1ZGVzKGV2ZW50LmtleUNvZGUpKSB7XG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVOVEVSKSB7XG4gICAgICBpZiAodGhpcy5oZWFkZXIub3BlbiAmJiB0aGlzLmhlYWRlci52YWx1ZSkge1xuICAgICAgICB0aGlzLnNhdmVIZWFkZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWVBbmRDbG9zZSh7XG4gICAgICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyZWRPcHRpb25zW3RoaXMuc2VsZWN0ZWRJbmRleF0sXG4gICAgICAgICAgaW5kZXg6IHRoaXMuc2VsZWN0ZWRJbmRleCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5VUCkge1xuICAgICAgaWYgKCF0aGlzLnBhbmVsT3Blbikge1xuICAgICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA+IDApIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4LS07XG4gICAgICAgIHRoaXMuc2VsZWN0KHRoaXMuZmlsdGVyZWRPcHRpb25zW3RoaXMuc2VsZWN0ZWRJbmRleF0sIHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRE9XTikge1xuICAgICAgaWYgKCF0aGlzLnBhbmVsT3Blbikge1xuICAgICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA8IHRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Kys7XG4gICAgICAgIHRoaXMuc2VsZWN0KHRoaXMuZmlsdGVyZWRPcHRpb25zW3RoaXMuc2VsZWN0ZWRJbmRleF0sIHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCgpO1xuICAgICAgICBpZiAodGhpcy5oZWFkZXIub3Blbikge1xuICAgICAgICAgIHRoaXMudG9nZ2xlSGVhZGVyKG51bGwsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuVVAgJiYgdGhpcy5zZWxlY3RlZEluZGV4ID09PSAwKSB7XG4gICAgICBpZiAoIXRoaXMucGFuZWxPcGVuKSB7XG4gICAgICAgIHRoaXMub3BlblBhbmVsKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXgtLTtcbiAgICAgIHRoaXMudG9nZ2xlSGVhZGVyKG51bGwsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAoKGV2ZW50LmtleUNvZGUgPj0gNjUgJiYgZXZlbnQua2V5Q29kZSA8PSA5MCkgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuU1BBQ0UpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5TUEFDRSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnBhbmVsT3Blbikge1xuICAgICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgICAgfVxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmlsdGVyVGVybVRpbWVvdXQpO1xuICAgICAgdGhpcy5maWx0ZXJUZXJtVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlclRlcm0gPSAnJztcbiAgICAgIH0sIDIwMDApO1xuICAgICAgY29uc3QgY2hhciA9IGV2ZW50LmtleTtcbiAgICAgIHRoaXMuZmlsdGVyVGVybSA9IHRoaXMuZmlsdGVyVGVybS5jb25jYXQoY2hhcikudG9VcHBlckNhc2UoKTtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmZpbHRlcmVkT3B0aW9ucy5maW5kKChpKSA9PiBpLmxhYmVsLnRvVXBwZXJDYXNlKCkuaW5kZXhPZih0aGlzLmZpbHRlclRlcm0pID09PSAwKTtcbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KGl0ZW0sIHRoaXMuZmlsdGVyZWRPcHRpb25zLmluZGV4T2YoaXRlbSkpO1xuICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFtLZXlDb2Rlcy5CQUNLU1BBQ0UsIEtleUNvZGVzLkRFTEVURV0uaW5jbHVkZXMoZXZlbnQua2V5Q29kZSkpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZpbHRlclRlcm1UaW1lb3V0KTtcbiAgICAgIHRoaXMuZmlsdGVyVGVybVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJUZXJtID0gJyc7XG4gICAgICB9LCAyMDAwKTtcbiAgICAgIHRoaXMuZmlsdGVyVGVybSA9IHRoaXMuZmlsdGVyVGVybS5zbGljZSgwLCAtMSk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsVG9TZWxlY3RlZCgpIHtcbiAgICB0aGlzLnNjcm9sbFRvSW5kZXgodGhpcy5zZWxlY3RlZEluZGV4KTtcbiAgfVxuXG4gIHNjcm9sbFRvSW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudDtcbiAgICBjb25zdCBsaXN0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubm92by1zZWxlY3QtbGlzdCcpO1xuICAgIGNvbnN0IGl0ZW1zID0gbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1t0aGlzLmhlYWRlckNvbmZpZyA/IGluZGV4ICsgMSA6IGluZGV4XTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgbGlzdC5zY3JvbGxUb3AgPSBpdGVtLm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVIZWFkZXIoZXZlbnQsIGZvcmNlVmFsdWU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICAvLyBSZXZlcnNlIHRoZSBhY3RpdmUgcHJvcGVydHkgKGlmIGZvcmNlVmFsdWUsIHVzZSB0aGF0KVxuICAgIHRoaXMuaGVhZGVyID0ge1xuICAgICAgb3BlbjogZm9yY2VWYWx1ZSAhPT0gdW5kZWZpbmVkID8gZm9yY2VWYWx1ZSA6ICF0aGlzLmhlYWRlci5vcGVuLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgdmFsaWQ6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIGhpZ2hsaWdodChtYXRjaCwgcXVlcnkpIHtcbiAgICAvLyBSZXBsYWNlcyB0aGUgY2FwdHVyZSBzdHJpbmcgd2l0aCBhIHRoZSBzYW1lIHN0cmluZyBpbnNpZGUgb2YgYSBcInN0cm9uZ1wiIHRhZ1xuICAgIHJldHVybiBxdWVyeSA/IG1hdGNoLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLmVzY2FwZVJlZ2V4cChxdWVyeSksICdnaScpLCAnPHN0cm9uZz4kJjwvc3Ryb25nPicpIDogbWF0Y2g7XG4gIH1cblxuICBlc2NhcGVSZWdleHAocXVlcnlUb0VzY2FwZSkge1xuICAgIC8vIEV4OiBpZiB0aGUgY2FwdHVyZSBpcyBcImFcIiB0aGUgcmVzdWx0IHdpbGwgYmUgXFxhXG4gICAgcmV0dXJuIHF1ZXJ5VG9Fc2NhcGUucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2csICdcXFxcJDEnKTtcbiAgfVxuXG4gIHNhdmVIZWFkZXIoKSB7XG4gICAgaWYgKHRoaXMuaGVhZGVyLnZhbHVlKSB7XG4gICAgICB0aGlzLmhlYWRlckNvbmZpZy5vblNhdmUodGhpcy5oZWFkZXIudmFsdWUpO1xuICAgICAgdGhpcy5jcmVhdGVkSXRlbSA9IHRoaXMuaGVhZGVyLnZhbHVlO1xuICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVhZGVyLnZhbGlkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgIGxldCBpdGVtID0gdGhpcy5maWx0ZXJlZE9wdGlvbnMuZmluZCgoaSkgPT4gaS52YWx1ZSA9PT0gbW9kZWwgfHwgKG1vZGVsICYmIGkudmFsdWUgPT09IG1vZGVsLmlkKSk7XG4gICAgICBpZiAoIWl0ZW0gJiYgIUhlbHBlcnMuaXNFbXB0eShtb2RlbCkpIHtcbiAgICAgICAgaXRlbSA9IHtcbiAgICAgICAgICBsYWJlbDogbW9kZWwsXG4gICAgICAgICAgdmFsdWU6IG1vZGVsLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoIWl0ZW0ucmVhZE9ubHkpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMudW5zaGlmdChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5zZWxlY3QoaXRlbSwgdGhpcy5maWx0ZXJlZE9wdGlvbnMuaW5kZXhPZihpdGVtKSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmVtcHR5ID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==