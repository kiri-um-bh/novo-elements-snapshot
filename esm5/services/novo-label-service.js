/**
 * @fileoverview added by tsickle
 * Generated from: services/novo-label-service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Injectable, Inject, Optional, LOCALE_ID } from '@angular/core';
/**
 * @record
 */
function TimeFormatParts() { }
if (false) {
    /** @type {?} */
    TimeFormatParts.prototype.hour;
    /** @type {?} */
    TimeFormatParts.prototype.minute;
    /** @type {?|undefined} */
    TimeFormatParts.prototype.dayPeriod;
}
var NovoLabelService = /** @class */ (function () {
    function NovoLabelService(userLocale) {
        if (userLocale === void 0) { userLocale = 'en-US'; }
        this.userLocale = userLocale;
        this.filters = 'Filter';
        this.clear = 'Clear';
        this.sort = 'Sort';
        this.distributionListOwner = 'Owner';
        this.dateAdded = 'Date Added';
        this.emptyTableMessage = 'No Records to display...';
        this.noMatchingRecordsMessage = 'No Matching Records';
        this.erroredTableMessage = 'Oops! An error occurred.';
        this.pickerError = 'Oops! An error occurred.';
        this.pickerTextFieldEmpty = 'Begin typing to see results.';
        this.pickerEmpty = 'No results to display...';
        this.tabbedGroupPickerEmpty = 'No results found';
        this.quickNoteError = 'Oops! An error occurred.';
        this.quickNoteEmpty = 'No results to display...';
        this.required = 'Required';
        this.numberTooLarge = 'Number is too large';
        this.save = 'Save';
        this.cancel = 'Cancel';
        this.next = 'Next';
        this.itemsPerPage = 'Items per page:';
        this.select = 'Select...';
        this.selected = 'Selected';
        this.selectAllOnPage = 'Select all on page';
        this.deselectAll = 'Deselect all';
        this.refresh = 'Refresh';
        this.close = 'Close';
        this.move = 'Move';
        this.startDate = 'Start Date';
        this.endDate = 'End Date';
        this.more = 'more';
        this.clearAll = 'CLEAR ALL';
        this.clearAllNormalCase = 'Clear All';
        this.clearSort = 'Clear Sort';
        this.clearFilter = 'Clear Filter';
        this.today = 'Today';
        this.now = 'Now';
        this.isRequired = 'is required';
        this.notValidYear = 'is not a valid year';
        this.isTooLarge = 'is too large';
        this.invalidAddress = 'requires at least one field filled out';
        this.invalidEmail = 'requires a valid email (ex. abc@123.com)';
        this.minLength = 'is required to be a minimum length of';
        this.past1Day = 'Past 1 Day';
        this.past7Days = 'Past 7 Days';
        this.past30Days = 'Past 30 Days';
        this.past90Days = 'Past 90 Days';
        this.past1Year = 'Past 1 Year';
        this.next1Day = 'Next 1 Day';
        this.next7Days = 'Next 7 Days';
        this.next30Days = 'Next 30 Days';
        this.next90Days = 'Next 90 Days';
        this.next1Year = 'Next 1 Year';
        this.customDateRange = 'Custom Date Range';
        this.backToPresetFilters = 'Back to Preset Filters';
        this.okGotIt = 'Ok, Got it';
        this.address = 'Address';
        this.address1 = 'Address';
        this.apt = 'Apt'; // TODO delete
        // TODO delete
        this.address2 = 'Apt';
        this.city = 'City / Locality';
        this.state = 'State / Region';
        this.zip = 'Postal Code';
        this.zipCode = 'Postal Code'; // TODO delete
        // TODO delete
        this.country = 'Country';
        this.or = 'or';
        this.clickToBrowse = 'click to browse';
        this.chooseAFile = 'Choose a file';
        this.no = 'No';
        this.yes = 'Yes';
        this.search = 'SEARCH';
        this.noItems = 'There are no items';
        this.dateFormat = 'MM/dd/yyyy';
        this.dateFormatPlaceholder = 'MM/DD/YYYY';
        this.timeFormatPlaceholderAM = 'hh:mm AM';
        this.timeFormatPlaceholder24Hour = 'HH:mm';
        this.timeFormatAM = 'AM';
        this.timeFormatPM = 'PM';
        this.confirmChangesModalMessage = 'Are you sure you want to change this field?';
        this.promptModalMessage = 'Do you want to perform the following changes?';
        this.asyncFailure = 'Async validation was not called within the 10s threshold, you might want to reload the page to try again';
        this.previous = 'Previous';
        this.actions = 'Actions';
        this.all = 'All';
        this.groupedMultiPickerEmpty = 'No items to display';
        this.groupedMultiPickerSelectCategory = 'Select a category from the right to get started';
        this.add = 'Add';
        this.encryptedFieldTooltip = 'This data has been stored at the highest level of security';
        this.noStatesForCountry = 'No states available for the selected country';
        this.selectCountryFirst = 'Please select a country before selecting a state';
        this.invalidIntegerInput = 'Special characters are not allowed for';
        this.maxRecordsReached = 'Sorry, you have reached the maximum number of records allowed for this field';
        this.selectFilterOptions = 'Please select one or more filter options below.';
    }
    /**
     * @param {?} field
     * @param {?} maxlength
     * @return {?}
     */
    NovoLabelService.prototype.maxlengthMetWithField = /**
     * @param {?} field
     * @param {?} maxlength
     * @return {?}
     */
    function (field, maxlength) {
        return "Sorry, you have reached the maximum character count of " + maxlength + " for " + field + ".";
    };
    /**
     * @param {?} maxlength
     * @return {?}
     */
    NovoLabelService.prototype.maxlengthMet = /**
     * @param {?} maxlength
     * @return {?}
     */
    function (maxlength) {
        return "Sorry, you have reached the maximum character count of " + maxlength + " for this field.";
    };
    /**
     * @param {?} field
     * @param {?} maxlength
     * @return {?}
     */
    NovoLabelService.prototype.invalidMaxlengthWithField = /**
     * @param {?} field
     * @param {?} maxlength
     * @return {?}
     */
    function (field, maxlength) {
        return "Sorry, you have exceeded the maximum character count of " + maxlength + " for " + field + ".";
    };
    /**
     * @param {?} maxlength
     * @return {?}
     */
    NovoLabelService.prototype.invalidMaxlength = /**
     * @param {?} maxlength
     * @return {?}
     */
    function (maxlength) {
        return "Sorry, you have exceeded the maximum character count of " + maxlength + " for this field.";
    };
    /**
     * @param {?} toMany
     * @return {?}
     */
    NovoLabelService.prototype.getToManyPlusMore = /**
     * @param {?} toMany
     * @return {?}
     */
    function (toMany) {
        return "+" + toMany.quantity + " more";
    };
    /**
     * @param {?} selected
     * @return {?}
     */
    NovoLabelService.prototype.selectedRecords = /**
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        return selected + " records are selected.";
    };
    /**
     * @param {?} shown
     * @param {?} total
     * @return {?}
     */
    NovoLabelService.prototype.showingXofXResults = /**
     * @param {?} shown
     * @param {?} total
     * @return {?}
     */
    function (shown, total) {
        return "Showing " + shown + " of " + total + " Results.";
    };
    /**
     * @param {?} total
     * @param {?=} select
     * @return {?}
     */
    NovoLabelService.prototype.totalRecords = /**
     * @param {?} total
     * @param {?=} select
     * @return {?}
     */
    function (total, select) {
        if (select === void 0) { select = false; }
        return select ? "Select all " + total + " records." : "De-select remaining " + total + " records.";
    };
    /**
     * @return {?}
     */
    NovoLabelService.prototype.dateFormatString = /**
     * @return {?}
     */
    function () {
        return this.dateFormat;
    };
    /**
     * @param {?} tabLabelPlural
     * @return {?}
     */
    NovoLabelService.prototype.tabbedGroupClearSuggestion = /**
     * @param {?} tabLabelPlural
     * @return {?}
     */
    function (tabLabelPlural) {
        return "Clear your search to see all " + tabLabelPlural + ".";
    };
    /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    NovoLabelService.prototype.formatDateWithFormat = /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    function (value, format) {
        /** @type {?} */
        var date = value instanceof Date ? value : new Date(value);
        if (date.getTime() !== date.getTime()) {
            return value;
        }
        return new Intl.DateTimeFormat(this.userLocale, format).format(date);
    };
    /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    NovoLabelService.prototype.formatTimeWithFormat = /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    function (value, format) {
        /** @type {?} */
        var date = value instanceof Date ? value : new Date(value);
        if (date.getTime() !== date.getTime()) {
            return value;
        }
        /** @type {?} */
        var timeParts = Intl.DateTimeFormat(this.userLocale, format)
            .formatToParts(date)
            .reduce((/**
         * @param {?} obj
         * @param {?} part
         * @return {?}
         */
        function (obj, part) {
            obj[part.type] = part.value;
            return obj;
        }), {});
        /** @type {?} */
        var dayperiod = timeParts.dayperiod ? timeParts.dayperiod : '';
        return timeParts.hour + ":" + timeParts.minute + dayperiod;
    };
    /**
     * @return {?}
     */
    NovoLabelService.prototype.getWeekdays = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /**
         * @param {?} dayOfWeek
         * @return {?}
         */
        function getDay(dayOfWeek) {
            /** @type {?} */
            var dt = new Date();
            return dt.setDate(dt.getDate() - dt.getDay() + dayOfWeek);
        }
        return [getDay(0), getDay(1), getDay(2), getDay(3), getDay(4), getDay(5), getDay(6)].reduce((/**
         * @param {?} weekdays
         * @param {?} dt
         * @return {?}
         */
        function (weekdays, dt) {
            weekdays.push(new Intl.DateTimeFormat(_this.userLocale, { weekday: 'long' }).format(dt));
            return weekdays;
        }), []);
    };
    /**
     * @return {?}
     */
    NovoLabelService.prototype.getMonths = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /**
         * @param {?} month
         * @return {?}
         */
        function getMonth(month) {
            /** @type {?} */
            var dt = new Date();
            return dt.setMonth(month, 1);
        }
        return [
            getMonth(0),
            getMonth(1),
            getMonth(2),
            getMonth(3),
            getMonth(4),
            getMonth(5),
            getMonth(6),
            getMonth(7),
            getMonth(8),
            getMonth(9),
            getMonth(10),
            getMonth(11),
        ].reduce((/**
         * @param {?} months
         * @param {?} dt
         * @return {?}
         */
        function (months, dt) {
            months.push(new Intl.DateTimeFormat(_this.userLocale, { month: 'long' }).format(dt));
            return months;
        }), []);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoLabelService.prototype.getProperty = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this[value];
    };
    /**
     * @param {?} page
     * @param {?} pageSize
     * @param {?} length
     * @param {?} short
     * @return {?}
     */
    NovoLabelService.prototype.getRangeText = /**
     * @param {?} page
     * @param {?} pageSize
     * @param {?} length
     * @param {?} short
     * @return {?}
     */
    function (page, pageSize, length, short) {
        if (length === 0 || pageSize === 0) {
            return "Displaying 0 of " + length;
        }
        length = Math.max(length, 0);
        /** @type {?} */
        var startIndex = page * pageSize;
        // If the start index exceeds the list length, do not try and fix the end index to the end.
        /** @type {?} */
        var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return short ? startIndex + 1 + " - " + endIndex + "/" + length : "Displaying " + (startIndex + 1) + " - " + endIndex + " of " + length;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoLabelService.prototype.formatCurrency = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var options = { style: 'currency', currency: 'USD' };
        return new Intl.NumberFormat(this.userLocale, options).format(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoLabelService.prototype.formatBigDecimal = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valueAsString = value ? value.toString() : '0';
        // truncate at two decimals (do not round)
        /** @type {?} */
        var decimalIndex = valueAsString.indexOf('.');
        if (decimalIndex > -1 && decimalIndex + 3 < valueAsString.length) {
            valueAsString = valueAsString.substring(0, valueAsString.indexOf('.') + 3);
        }
        // convert back to number
        /** @type {?} */
        var truncatedValue = Number(valueAsString);
        /** @type {?} */
        var options = { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 };
        /** @type {?} */
        var _value = new Intl.NumberFormat(this.userLocale, options).format(truncatedValue);
        if (value < 0) {
            _value = "(" + _value.slice(1) + ")";
        }
        return _value;
    };
    /**
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    NovoLabelService.prototype.formatNumber = /**
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    function (value, options) {
        return new Intl.NumberFormat(this.userLocale, options).format(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoLabelService.prototype.formatDateShort = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var options = {
            // DD/MM/YYYY, HH:MM A - 02/14/2017, 1:17 PM
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
        };
        /** @type {?} */
        var _value = value === null || value === undefined || value === '' ? new Date() : new Date(value);
        return new Intl.DateTimeFormat(this.userLocale, options).format(_value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoLabelService.prototype.formatTime = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var options = {
            // HH:MM A - 1:17 PM
            hour: 'numeric',
            minute: '2-digit',
        };
        /** @type {?} */
        var _value = value === null || value === undefined || value === '' ? new Date() : new Date(value);
        return new Intl.DateTimeFormat(this.userLocale, options).format(_value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoLabelService.prototype.formatDate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var options = {
            // DD/MM/YYYY - 02/14/2017
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
        };
        /** @type {?} */
        var _value = value === null || value === undefined || value === '' ? new Date() : new Date(value);
        return new Intl.DateTimeFormat(this.userLocale, options).format(_value);
    };
    NovoLabelService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NovoLabelService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    return NovoLabelService;
}());
export { NovoLabelService };
if (false) {
    /** @type {?} */
    NovoLabelService.prototype.filters;
    /** @type {?} */
    NovoLabelService.prototype.clear;
    /** @type {?} */
    NovoLabelService.prototype.sort;
    /** @type {?} */
    NovoLabelService.prototype.distributionListOwner;
    /** @type {?} */
    NovoLabelService.prototype.dateAdded;
    /** @type {?} */
    NovoLabelService.prototype.emptyTableMessage;
    /** @type {?} */
    NovoLabelService.prototype.noMatchingRecordsMessage;
    /** @type {?} */
    NovoLabelService.prototype.erroredTableMessage;
    /** @type {?} */
    NovoLabelService.prototype.pickerError;
    /** @type {?} */
    NovoLabelService.prototype.pickerTextFieldEmpty;
    /** @type {?} */
    NovoLabelService.prototype.pickerEmpty;
    /** @type {?} */
    NovoLabelService.prototype.tabbedGroupPickerEmpty;
    /** @type {?} */
    NovoLabelService.prototype.quickNoteError;
    /** @type {?} */
    NovoLabelService.prototype.quickNoteEmpty;
    /** @type {?} */
    NovoLabelService.prototype.required;
    /** @type {?} */
    NovoLabelService.prototype.numberTooLarge;
    /** @type {?} */
    NovoLabelService.prototype.save;
    /** @type {?} */
    NovoLabelService.prototype.cancel;
    /** @type {?} */
    NovoLabelService.prototype.next;
    /** @type {?} */
    NovoLabelService.prototype.itemsPerPage;
    /** @type {?} */
    NovoLabelService.prototype.select;
    /** @type {?} */
    NovoLabelService.prototype.selected;
    /** @type {?} */
    NovoLabelService.prototype.selectAllOnPage;
    /** @type {?} */
    NovoLabelService.prototype.deselectAll;
    /** @type {?} */
    NovoLabelService.prototype.refresh;
    /** @type {?} */
    NovoLabelService.prototype.close;
    /** @type {?} */
    NovoLabelService.prototype.move;
    /** @type {?} */
    NovoLabelService.prototype.startDate;
    /** @type {?} */
    NovoLabelService.prototype.endDate;
    /** @type {?} */
    NovoLabelService.prototype.more;
    /** @type {?} */
    NovoLabelService.prototype.clearAll;
    /** @type {?} */
    NovoLabelService.prototype.clearAllNormalCase;
    /** @type {?} */
    NovoLabelService.prototype.clearSort;
    /** @type {?} */
    NovoLabelService.prototype.clearFilter;
    /** @type {?} */
    NovoLabelService.prototype.today;
    /** @type {?} */
    NovoLabelService.prototype.now;
    /** @type {?} */
    NovoLabelService.prototype.isRequired;
    /** @type {?} */
    NovoLabelService.prototype.notValidYear;
    /** @type {?} */
    NovoLabelService.prototype.isTooLarge;
    /** @type {?} */
    NovoLabelService.prototype.invalidAddress;
    /** @type {?} */
    NovoLabelService.prototype.invalidEmail;
    /** @type {?} */
    NovoLabelService.prototype.minLength;
    /** @type {?} */
    NovoLabelService.prototype.past1Day;
    /** @type {?} */
    NovoLabelService.prototype.past7Days;
    /** @type {?} */
    NovoLabelService.prototype.past30Days;
    /** @type {?} */
    NovoLabelService.prototype.past90Days;
    /** @type {?} */
    NovoLabelService.prototype.past1Year;
    /** @type {?} */
    NovoLabelService.prototype.next1Day;
    /** @type {?} */
    NovoLabelService.prototype.next7Days;
    /** @type {?} */
    NovoLabelService.prototype.next30Days;
    /** @type {?} */
    NovoLabelService.prototype.next90Days;
    /** @type {?} */
    NovoLabelService.prototype.next1Year;
    /** @type {?} */
    NovoLabelService.prototype.customDateRange;
    /** @type {?} */
    NovoLabelService.prototype.backToPresetFilters;
    /** @type {?} */
    NovoLabelService.prototype.okGotIt;
    /** @type {?} */
    NovoLabelService.prototype.address;
    /** @type {?} */
    NovoLabelService.prototype.address1;
    /** @type {?} */
    NovoLabelService.prototype.apt;
    /** @type {?} */
    NovoLabelService.prototype.address2;
    /** @type {?} */
    NovoLabelService.prototype.city;
    /** @type {?} */
    NovoLabelService.prototype.state;
    /** @type {?} */
    NovoLabelService.prototype.zip;
    /** @type {?} */
    NovoLabelService.prototype.zipCode;
    /** @type {?} */
    NovoLabelService.prototype.country;
    /** @type {?} */
    NovoLabelService.prototype.or;
    /** @type {?} */
    NovoLabelService.prototype.clickToBrowse;
    /** @type {?} */
    NovoLabelService.prototype.chooseAFile;
    /** @type {?} */
    NovoLabelService.prototype.no;
    /** @type {?} */
    NovoLabelService.prototype.yes;
    /** @type {?} */
    NovoLabelService.prototype.search;
    /** @type {?} */
    NovoLabelService.prototype.noItems;
    /** @type {?} */
    NovoLabelService.prototype.dateFormat;
    /** @type {?} */
    NovoLabelService.prototype.dateFormatPlaceholder;
    /** @type {?} */
    NovoLabelService.prototype.timeFormatPlaceholderAM;
    /** @type {?} */
    NovoLabelService.prototype.timeFormatPlaceholder24Hour;
    /** @type {?} */
    NovoLabelService.prototype.timeFormatAM;
    /** @type {?} */
    NovoLabelService.prototype.timeFormatPM;
    /** @type {?} */
    NovoLabelService.prototype.confirmChangesModalMessage;
    /** @type {?} */
    NovoLabelService.prototype.promptModalMessage;
    /** @type {?} */
    NovoLabelService.prototype.asyncFailure;
    /** @type {?} */
    NovoLabelService.prototype.previous;
    /** @type {?} */
    NovoLabelService.prototype.actions;
    /** @type {?} */
    NovoLabelService.prototype.all;
    /** @type {?} */
    NovoLabelService.prototype.groupedMultiPickerEmpty;
    /** @type {?} */
    NovoLabelService.prototype.groupedMultiPickerSelectCategory;
    /** @type {?} */
    NovoLabelService.prototype.add;
    /** @type {?} */
    NovoLabelService.prototype.encryptedFieldTooltip;
    /** @type {?} */
    NovoLabelService.prototype.noStatesForCountry;
    /** @type {?} */
    NovoLabelService.prototype.selectCountryFirst;
    /** @type {?} */
    NovoLabelService.prototype.invalidIntegerInput;
    /** @type {?} */
    NovoLabelService.prototype.maxRecordsReached;
    /** @type {?} */
    NovoLabelService.prototype.selectFilterOptions;
    /** @type {?} */
    NovoLabelService.prototype.userLocale;
}
/** @type {?} */
export var NOVO_ELEMENTS_LABELS_PROVIDERS = [{ provide: NovoLabelService, useClass: NovoLabelService }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm92by1sYWJlbC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBR3hFLDhCQUlDOzs7SUFIQywrQkFBYTs7SUFDYixpQ0FBZTs7SUFDZixvQ0FBbUI7O0FBR3JCO0lBK0ZFLDBCQUdTLFVBQTRCO1FBQTVCLDJCQUFBLEVBQUEsb0JBQTRCO1FBQTVCLGVBQVUsR0FBVixVQUFVLENBQWtCO1FBaEdyQyxZQUFPLEdBQUcsUUFBUSxDQUFDO1FBQ25CLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLDBCQUFxQixHQUFHLE9BQU8sQ0FBQztRQUNoQyxjQUFTLEdBQUcsWUFBWSxDQUFDO1FBQ3pCLHNCQUFpQixHQUFHLDBCQUEwQixDQUFDO1FBQy9DLDZCQUF3QixHQUFHLHFCQUFxQixDQUFDO1FBQ2pELHdCQUFtQixHQUFHLDBCQUEwQixDQUFDO1FBQ2pELGdCQUFXLEdBQUcsMEJBQTBCLENBQUM7UUFDekMseUJBQW9CLEdBQUcsOEJBQThCLENBQUM7UUFDdEQsZ0JBQVcsR0FBRywwQkFBMEIsQ0FBQztRQUN6QywyQkFBc0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM1QyxtQkFBYyxHQUFHLDBCQUEwQixDQUFDO1FBQzVDLG1CQUFjLEdBQUcsMEJBQTBCLENBQUM7UUFDNUMsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixtQkFBYyxHQUFHLHFCQUFxQixDQUFDO1FBQ3ZDLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxXQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ2xCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxpQkFBWSxHQUFHLGlCQUFpQixDQUFDO1FBQ2pDLFdBQU0sR0FBRyxXQUFXLENBQUM7UUFDckIsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixvQkFBZSxHQUFHLG9CQUFvQixDQUFDO1FBQ3ZDLGdCQUFXLEdBQUcsY0FBYyxDQUFDO1FBQzdCLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFDcEIsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsY0FBUyxHQUFHLFlBQVksQ0FBQztRQUN6QixZQUFPLEdBQUcsVUFBVSxDQUFDO1FBQ3JCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxhQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ3ZCLHVCQUFrQixHQUFHLFdBQVcsQ0FBQztRQUNqQyxjQUFTLEdBQUcsWUFBWSxDQUFDO1FBQ3pCLGdCQUFXLEdBQUcsY0FBYyxDQUFDO1FBQzdCLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsUUFBRyxHQUFHLEtBQUssQ0FBQztRQUNaLGVBQVUsR0FBRyxhQUFhLENBQUM7UUFDM0IsaUJBQVksR0FBRyxxQkFBcUIsQ0FBQztRQUNyQyxlQUFVLEdBQUcsY0FBYyxDQUFDO1FBQzVCLG1CQUFjLEdBQUcsd0NBQXdDLENBQUM7UUFDMUQsaUJBQVksR0FBRywwQ0FBMEMsQ0FBQztRQUMxRCxjQUFTLEdBQUcsdUNBQXVDLENBQUM7UUFDcEQsYUFBUSxHQUFHLFlBQVksQ0FBQztRQUN4QixjQUFTLEdBQUcsYUFBYSxDQUFDO1FBQzFCLGVBQVUsR0FBRyxjQUFjLENBQUM7UUFDNUIsZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUM1QixjQUFTLEdBQUcsYUFBYSxDQUFDO1FBQzFCLGFBQVEsR0FBRyxZQUFZLENBQUM7UUFDeEIsY0FBUyxHQUFHLGFBQWEsQ0FBQztRQUMxQixlQUFVLEdBQUcsY0FBYyxDQUFDO1FBQzVCLGVBQVUsR0FBRyxjQUFjLENBQUM7UUFDNUIsY0FBUyxHQUFHLGFBQWEsQ0FBQztRQUMxQixvQkFBZSxHQUFHLG1CQUFtQixDQUFDO1FBQ3RDLHdCQUFtQixHQUFHLHdCQUF3QixDQUFDO1FBQy9DLFlBQU8sR0FBRyxZQUFZLENBQUM7UUFDdkIsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUNwQixhQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ3JCLFFBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxjQUFjOztRQUMzQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFNBQUksR0FBRyxpQkFBaUIsQ0FBQztRQUN6QixVQUFLLEdBQUcsZ0JBQWdCLENBQUM7UUFDekIsUUFBRyxHQUFHLGFBQWEsQ0FBQztRQUNwQixZQUFPLEdBQUcsYUFBYSxDQUFDLENBQUMsY0FBYzs7UUFDdkMsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUNwQixPQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ1Ysa0JBQWEsR0FBRyxpQkFBaUIsQ0FBQztRQUNsQyxnQkFBVyxHQUFHLGVBQWUsQ0FBQztRQUM5QixPQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ1YsUUFBRyxHQUFHLEtBQUssQ0FBQztRQUNaLFdBQU0sR0FBRyxRQUFRLENBQUM7UUFDbEIsWUFBTyxHQUFHLG9CQUFvQixDQUFDO1FBQy9CLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFDMUIsMEJBQXFCLEdBQUcsWUFBWSxDQUFDO1FBQ3JDLDRCQUF1QixHQUFHLFVBQVUsQ0FBQztRQUNyQyxnQ0FBMkIsR0FBRyxPQUFPLENBQUM7UUFDdEMsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsK0JBQTBCLEdBQUcsNkNBQTZDLENBQUM7UUFDM0UsdUJBQWtCLEdBQUcsK0NBQStDLENBQUM7UUFDckUsaUJBQVksR0FBRywwR0FBMEcsQ0FBQztRQUMxSCxhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFDcEIsUUFBRyxHQUFHLEtBQUssQ0FBQztRQUNaLDRCQUF1QixHQUFHLHFCQUFxQixDQUFDO1FBQ2hELHFDQUFnQyxHQUFHLGlEQUFpRCxDQUFDO1FBQ3JGLFFBQUcsR0FBRyxLQUFLLENBQUM7UUFDWiwwQkFBcUIsR0FBRyw0REFBNEQsQ0FBQztRQUNyRix1QkFBa0IsR0FBRyw4Q0FBOEMsQ0FBQztRQUNwRSx1QkFBa0IsR0FBRyxrREFBa0QsQ0FBQztRQUN4RSx3QkFBbUIsR0FBRyx3Q0FBd0MsQ0FBQztRQUMvRCxzQkFBaUIsR0FBRyw4RUFBOEUsQ0FBQztRQUNuRyx3QkFBbUIsR0FBRyxpREFBaUQsQ0FBQztJQU1yRSxDQUFDOzs7Ozs7SUFFSixnREFBcUI7Ozs7O0lBQXJCLFVBQXNCLEtBQWEsRUFBRSxTQUFpQjtRQUNwRCxPQUFPLDREQUEwRCxTQUFTLGFBQVEsS0FBSyxNQUFHLENBQUM7SUFDN0YsQ0FBQzs7Ozs7SUFFRCx1Q0FBWTs7OztJQUFaLFVBQWEsU0FBaUI7UUFDNUIsT0FBTyw0REFBMEQsU0FBUyxxQkFBa0IsQ0FBQztJQUMvRixDQUFDOzs7Ozs7SUFFRCxvREFBeUI7Ozs7O0lBQXpCLFVBQTBCLEtBQWEsRUFBRSxTQUFpQjtRQUN4RCxPQUFPLDZEQUEyRCxTQUFTLGFBQVEsS0FBSyxNQUFHLENBQUM7SUFDOUYsQ0FBQzs7Ozs7SUFFRCwyQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsU0FBaUI7UUFDaEMsT0FBTyw2REFBMkQsU0FBUyxxQkFBa0IsQ0FBQztJQUNoRyxDQUFDOzs7OztJQUVELDRDQUFpQjs7OztJQUFqQixVQUFrQixNQUE0QjtRQUM1QyxPQUFPLE1BQUksTUFBTSxDQUFDLFFBQVEsVUFBTyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsMENBQWU7Ozs7SUFBZixVQUFnQixRQUFnQjtRQUM5QixPQUFVLFFBQVEsMkJBQXdCLENBQUM7SUFDN0MsQ0FBQzs7Ozs7O0lBRUQsNkNBQWtCOzs7OztJQUFsQixVQUFtQixLQUFhLEVBQUUsS0FBYTtRQUM3QyxPQUFPLGFBQVcsS0FBSyxZQUFPLEtBQUssY0FBVyxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUVELHVDQUFZOzs7OztJQUFaLFVBQWEsS0FBYSxFQUFFLE1BQXVCO1FBQXZCLHVCQUFBLEVBQUEsY0FBdUI7UUFDakQsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLGdCQUFjLEtBQUssY0FBVyxDQUFDLENBQUMsQ0FBQyx5QkFBdUIsS0FBSyxjQUFXLENBQUM7SUFDM0YsQ0FBQzs7OztJQUVELDJDQUFnQjs7O0lBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQscURBQTBCOzs7O0lBQTFCLFVBQTJCLGNBQXNCO1FBQy9DLE9BQU8sa0NBQWdDLGNBQWMsTUFBRyxDQUFDO0lBQzNELENBQUM7Ozs7OztJQUVELCtDQUFvQjs7Ozs7SUFBcEIsVUFBcUIsS0FBVSxFQUFFLE1BQWtDOztZQUMzRCxJQUFJLEdBQUcsS0FBSyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3JDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7SUFFRCwrQ0FBb0I7Ozs7O0lBQXBCLFVBQXFCLEtBQVUsRUFBRSxNQUFrQzs7WUFDM0QsSUFBSSxHQUFHLEtBQUssWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNkOztZQUNLLFNBQVMsR0FBK0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQzthQUN2RixhQUFhLENBQUMsSUFBSSxDQUFDO2FBQ25CLE1BQU07Ozs7O1FBQUMsVUFBQyxHQUFHLEVBQUUsSUFBSTtZQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDNUIsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEdBQUUsRUFBRSxDQUFDOztZQUNGLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2hFLE9BQVUsU0FBUyxDQUFDLElBQUksU0FBSSxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVcsQ0FBQztJQUM3RCxDQUFDOzs7O0lBRUQsc0NBQVc7OztJQUFYO1FBQUEsaUJBVUM7Ozs7O1FBVEMsU0FBUyxNQUFNLENBQUMsU0FBUzs7Z0JBQ2pCLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRTtZQUNyQixPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07Ozs7O1FBQUMsVUFBQyxRQUFRLEVBQUUsRUFBRTtZQUN2RyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEYsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQzs7OztJQUVELG9DQUFTOzs7SUFBVDtRQUFBLGlCQXVCQzs7Ozs7UUF0QkMsU0FBUyxRQUFRLENBQUMsS0FBSzs7Z0JBQ2YsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ3JCLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUVELE9BQU87WUFDTCxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ1gsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNYLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDWCxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ1gsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNYLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDWCxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ1gsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNYLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDWCxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ1gsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNaLFFBQVEsQ0FBQyxFQUFFLENBQUM7U0FDYixDQUFDLE1BQU07Ozs7O1FBQUMsVUFBQyxNQUFNLEVBQUUsRUFBRTtZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEYsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQzs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksS0FBYTtRQUN2QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7Ozs7OztJQUVELHVDQUFZOzs7Ozs7O0lBQVosVUFBYSxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxNQUFjLEVBQUUsS0FBYztRQUN6RSxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksUUFBUSxLQUFLLENBQUMsRUFBRTtZQUNsQyxPQUFPLHFCQUFtQixNQUFRLENBQUM7U0FDcEM7UUFFRCxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1lBRXZCLFVBQVUsR0FBRyxJQUFJLEdBQUcsUUFBUTs7O1lBRzVCLFFBQVEsR0FBRyxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxRQUFRO1FBRXRHLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBSSxVQUFVLEdBQUcsQ0FBQyxXQUFNLFFBQVEsU0FBSSxNQUFRLENBQUMsQ0FBQyxDQUFDLGlCQUFjLFVBQVUsR0FBRyxDQUFDLFlBQU0sUUFBUSxZQUFPLE1BQVEsQ0FBQztJQUN6SCxDQUFDOzs7OztJQUVELHlDQUFjOzs7O0lBQWQsVUFBZSxLQUFhOztZQUNwQixPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7UUFDdEQsT0FBTyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7SUFFRCwyQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBYTs7WUFDeEIsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHOzs7WUFFNUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQy9DLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLFlBQVksR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRTtZQUNoRSxhQUFhLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM1RTs7O1lBRUssY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7O1lBQ3RDLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxFQUFFLHFCQUFxQixFQUFFLENBQUMsRUFBRTs7WUFDcEYsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDbkYsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsTUFBTSxHQUFHLE1BQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBRyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRUQsdUNBQVk7Ozs7O0lBQVosVUFBYSxLQUFVLEVBQUUsT0FBa0M7UUFDekQsT0FBTyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7SUFFRCwwQ0FBZTs7OztJQUFmLFVBQWdCLEtBQVU7O1lBQ2xCLE9BQU8sR0FBK0I7O1lBRTFDLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEdBQUcsRUFBRSxTQUFTO1lBQ2QsSUFBSSxFQUFFLFNBQVM7WUFDZixJQUFJLEVBQUUsU0FBUztZQUNmLE1BQU0sRUFBRSxTQUFTO1NBQ2xCOztZQUNLLE1BQU0sR0FBRyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ25HLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFFLENBQUM7Ozs7O0lBRUQscUNBQVU7Ozs7SUFBVixVQUFXLEtBQVU7O1lBQ2IsT0FBTyxHQUErQjs7WUFFMUMsSUFBSSxFQUFFLFNBQVM7WUFDZixNQUFNLEVBQUUsU0FBUztTQUNsQjs7WUFDSyxNQUFNLEdBQUcsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuRyxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7OztJQUVELHFDQUFVOzs7O0lBQVYsVUFBVyxLQUFVOztZQUNiLE9BQU8sR0FBK0I7O1lBRTFDLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEdBQUcsRUFBRSxTQUFTO1lBQ2QsSUFBSSxFQUFFLFNBQVM7U0FDaEI7O1lBQ0ssTUFBTSxHQUFHLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkcsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7Z0JBdFJGLFVBQVU7Ozs7NkNBZ0dOLFFBQVEsWUFDUixNQUFNLFNBQUMsU0FBUzs7SUFzTHJCLHVCQUFDO0NBQUEsQUF2UkQsSUF1UkM7U0F0UlksZ0JBQWdCOzs7SUFDM0IsbUNBQW1COztJQUNuQixpQ0FBZ0I7O0lBQ2hCLGdDQUFjOztJQUNkLGlEQUFnQzs7SUFDaEMscUNBQXlCOztJQUN6Qiw2Q0FBK0M7O0lBQy9DLG9EQUFpRDs7SUFDakQsK0NBQWlEOztJQUNqRCx1Q0FBeUM7O0lBQ3pDLGdEQUFzRDs7SUFDdEQsdUNBQXlDOztJQUN6QyxrREFBNEM7O0lBQzVDLDBDQUE0Qzs7SUFDNUMsMENBQTRDOztJQUM1QyxvQ0FBc0I7O0lBQ3RCLDBDQUF1Qzs7SUFDdkMsZ0NBQWM7O0lBQ2Qsa0NBQWtCOztJQUNsQixnQ0FBYzs7SUFDZCx3Q0FBaUM7O0lBQ2pDLGtDQUFxQjs7SUFDckIsb0NBQXNCOztJQUN0QiwyQ0FBdUM7O0lBQ3ZDLHVDQUE2Qjs7SUFDN0IsbUNBQW9COztJQUNwQixpQ0FBZ0I7O0lBQ2hCLGdDQUFjOztJQUNkLHFDQUF5Qjs7SUFDekIsbUNBQXFCOztJQUNyQixnQ0FBYzs7SUFDZCxvQ0FBdUI7O0lBQ3ZCLDhDQUFpQzs7SUFDakMscUNBQXlCOztJQUN6Qix1Q0FBNkI7O0lBQzdCLGlDQUFnQjs7SUFDaEIsK0JBQVk7O0lBQ1osc0NBQTJCOztJQUMzQix3Q0FBcUM7O0lBQ3JDLHNDQUE0Qjs7SUFDNUIsMENBQTBEOztJQUMxRCx3Q0FBMEQ7O0lBQzFELHFDQUFvRDs7SUFDcEQsb0NBQXdCOztJQUN4QixxQ0FBMEI7O0lBQzFCLHNDQUE0Qjs7SUFDNUIsc0NBQTRCOztJQUM1QixxQ0FBMEI7O0lBQzFCLG9DQUF3Qjs7SUFDeEIscUNBQTBCOztJQUMxQixzQ0FBNEI7O0lBQzVCLHNDQUE0Qjs7SUFDNUIscUNBQTBCOztJQUMxQiwyQ0FBc0M7O0lBQ3RDLCtDQUErQzs7SUFDL0MsbUNBQXVCOztJQUN2QixtQ0FBb0I7O0lBQ3BCLG9DQUFxQjs7SUFDckIsK0JBQVk7O0lBQ1osb0NBQWlCOztJQUNqQixnQ0FBeUI7O0lBQ3pCLGlDQUF5Qjs7SUFDekIsK0JBQW9COztJQUNwQixtQ0FBd0I7O0lBQ3hCLG1DQUFvQjs7SUFDcEIsOEJBQVU7O0lBQ1YseUNBQWtDOztJQUNsQyx1Q0FBOEI7O0lBQzlCLDhCQUFVOztJQUNWLCtCQUFZOztJQUNaLGtDQUFrQjs7SUFDbEIsbUNBQStCOztJQUMvQixzQ0FBMEI7O0lBQzFCLGlEQUFxQzs7SUFDckMsbURBQXFDOztJQUNyQyx1REFBc0M7O0lBQ3RDLHdDQUFvQjs7SUFDcEIsd0NBQW9COztJQUNwQixzREFBMkU7O0lBQzNFLDhDQUFxRTs7SUFDckUsd0NBQTBIOztJQUMxSCxvQ0FBc0I7O0lBQ3RCLG1DQUFvQjs7SUFDcEIsK0JBQVk7O0lBQ1osbURBQWdEOztJQUNoRCw0REFBcUY7O0lBQ3JGLCtCQUFZOztJQUNaLGlEQUFxRjs7SUFDckYsOENBQW9FOztJQUNwRSw4Q0FBd0U7O0lBQ3hFLCtDQUErRDs7SUFDL0QsNkNBQW1HOztJQUNuRywrQ0FBd0U7O0lBR3RFLHNDQUVtQzs7O0FBdUx2QyxNQUFNLEtBQU8sOEJBQThCLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCwgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgRGF0ZVRpbWVGb3JtYXRQYXJ0ID0gSW50bC5EYXRlVGltZUZvcm1hdFBhcnQ7XG5cbmludGVyZmFjZSBUaW1lRm9ybWF0UGFydHMge1xuICBob3VyOiBzdHJpbmc7XG4gIG1pbnV0ZTogc3RyaW5nO1xuICBkYXlQZXJpb2Q/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3ZvTGFiZWxTZXJ2aWNlIHtcbiAgZmlsdGVycyA9ICdGaWx0ZXInO1xuICBjbGVhciA9ICdDbGVhcic7XG4gIHNvcnQgPSAnU29ydCc7XG4gIGRpc3RyaWJ1dGlvbkxpc3RPd25lciA9ICdPd25lcic7XG4gIGRhdGVBZGRlZCA9ICdEYXRlIEFkZGVkJztcbiAgZW1wdHlUYWJsZU1lc3NhZ2UgPSAnTm8gUmVjb3JkcyB0byBkaXNwbGF5Li4uJztcbiAgbm9NYXRjaGluZ1JlY29yZHNNZXNzYWdlID0gJ05vIE1hdGNoaW5nIFJlY29yZHMnO1xuICBlcnJvcmVkVGFibGVNZXNzYWdlID0gJ09vcHMhIEFuIGVycm9yIG9jY3VycmVkLic7XG4gIHBpY2tlckVycm9yID0gJ09vcHMhIEFuIGVycm9yIG9jY3VycmVkLic7XG4gIHBpY2tlclRleHRGaWVsZEVtcHR5ID0gJ0JlZ2luIHR5cGluZyB0byBzZWUgcmVzdWx0cy4nO1xuICBwaWNrZXJFbXB0eSA9ICdObyByZXN1bHRzIHRvIGRpc3BsYXkuLi4nO1xuICB0YWJiZWRHcm91cFBpY2tlckVtcHR5ID0gJ05vIHJlc3VsdHMgZm91bmQnO1xuICBxdWlja05vdGVFcnJvciA9ICdPb3BzISBBbiBlcnJvciBvY2N1cnJlZC4nO1xuICBxdWlja05vdGVFbXB0eSA9ICdObyByZXN1bHRzIHRvIGRpc3BsYXkuLi4nO1xuICByZXF1aXJlZCA9ICdSZXF1aXJlZCc7XG4gIG51bWJlclRvb0xhcmdlID0gJ051bWJlciBpcyB0b28gbGFyZ2UnO1xuICBzYXZlID0gJ1NhdmUnO1xuICBjYW5jZWwgPSAnQ2FuY2VsJztcbiAgbmV4dCA9ICdOZXh0JztcbiAgaXRlbXNQZXJQYWdlID0gJ0l0ZW1zIHBlciBwYWdlOic7XG4gIHNlbGVjdCA9ICdTZWxlY3QuLi4nO1xuICBzZWxlY3RlZCA9ICdTZWxlY3RlZCc7XG4gIHNlbGVjdEFsbE9uUGFnZSA9ICdTZWxlY3QgYWxsIG9uIHBhZ2UnO1xuICBkZXNlbGVjdEFsbCA9ICdEZXNlbGVjdCBhbGwnO1xuICByZWZyZXNoID0gJ1JlZnJlc2gnO1xuICBjbG9zZSA9ICdDbG9zZSc7XG4gIG1vdmUgPSAnTW92ZSc7XG4gIHN0YXJ0RGF0ZSA9ICdTdGFydCBEYXRlJztcbiAgZW5kRGF0ZSA9ICdFbmQgRGF0ZSc7XG4gIG1vcmUgPSAnbW9yZSc7XG4gIGNsZWFyQWxsID0gJ0NMRUFSIEFMTCc7XG4gIGNsZWFyQWxsTm9ybWFsQ2FzZSA9ICdDbGVhciBBbGwnO1xuICBjbGVhclNvcnQgPSAnQ2xlYXIgU29ydCc7XG4gIGNsZWFyRmlsdGVyID0gJ0NsZWFyIEZpbHRlcic7XG4gIHRvZGF5ID0gJ1RvZGF5JztcbiAgbm93ID0gJ05vdyc7XG4gIGlzUmVxdWlyZWQgPSAnaXMgcmVxdWlyZWQnO1xuICBub3RWYWxpZFllYXIgPSAnaXMgbm90IGEgdmFsaWQgeWVhcic7XG4gIGlzVG9vTGFyZ2UgPSAnaXMgdG9vIGxhcmdlJztcbiAgaW52YWxpZEFkZHJlc3MgPSAncmVxdWlyZXMgYXQgbGVhc3Qgb25lIGZpZWxkIGZpbGxlZCBvdXQnO1xuICBpbnZhbGlkRW1haWwgPSAncmVxdWlyZXMgYSB2YWxpZCBlbWFpbCAoZXguIGFiY0AxMjMuY29tKSc7XG4gIG1pbkxlbmd0aCA9ICdpcyByZXF1aXJlZCB0byBiZSBhIG1pbmltdW0gbGVuZ3RoIG9mJztcbiAgcGFzdDFEYXkgPSAnUGFzdCAxIERheSc7XG4gIHBhc3Q3RGF5cyA9ICdQYXN0IDcgRGF5cyc7XG4gIHBhc3QzMERheXMgPSAnUGFzdCAzMCBEYXlzJztcbiAgcGFzdDkwRGF5cyA9ICdQYXN0IDkwIERheXMnO1xuICBwYXN0MVllYXIgPSAnUGFzdCAxIFllYXInO1xuICBuZXh0MURheSA9ICdOZXh0IDEgRGF5JztcbiAgbmV4dDdEYXlzID0gJ05leHQgNyBEYXlzJztcbiAgbmV4dDMwRGF5cyA9ICdOZXh0IDMwIERheXMnO1xuICBuZXh0OTBEYXlzID0gJ05leHQgOTAgRGF5cyc7XG4gIG5leHQxWWVhciA9ICdOZXh0IDEgWWVhcic7XG4gIGN1c3RvbURhdGVSYW5nZSA9ICdDdXN0b20gRGF0ZSBSYW5nZSc7XG4gIGJhY2tUb1ByZXNldEZpbHRlcnMgPSAnQmFjayB0byBQcmVzZXQgRmlsdGVycyc7XG4gIG9rR290SXQgPSAnT2ssIEdvdCBpdCc7XG4gIGFkZHJlc3MgPSAnQWRkcmVzcyc7XG4gIGFkZHJlc3MxID0gJ0FkZHJlc3MnO1xuICBhcHQgPSAnQXB0JzsgLy8gVE9ETyBkZWxldGVcbiAgYWRkcmVzczIgPSAnQXB0JztcbiAgY2l0eSA9ICdDaXR5IC8gTG9jYWxpdHknO1xuICBzdGF0ZSA9ICdTdGF0ZSAvIFJlZ2lvbic7XG4gIHppcCA9ICdQb3N0YWwgQ29kZSc7XG4gIHppcENvZGUgPSAnUG9zdGFsIENvZGUnOyAvLyBUT0RPIGRlbGV0ZVxuICBjb3VudHJ5ID0gJ0NvdW50cnknO1xuICBvciA9ICdvcic7XG4gIGNsaWNrVG9Ccm93c2UgPSAnY2xpY2sgdG8gYnJvd3NlJztcbiAgY2hvb3NlQUZpbGUgPSAnQ2hvb3NlIGEgZmlsZSc7XG4gIG5vID0gJ05vJztcbiAgeWVzID0gJ1llcyc7XG4gIHNlYXJjaCA9ICdTRUFSQ0gnO1xuICBub0l0ZW1zID0gJ1RoZXJlIGFyZSBubyBpdGVtcyc7XG4gIGRhdGVGb3JtYXQgPSAnTU0vZGQveXl5eSc7XG4gIGRhdGVGb3JtYXRQbGFjZWhvbGRlciA9ICdNTS9ERC9ZWVlZJztcbiAgdGltZUZvcm1hdFBsYWNlaG9sZGVyQU0gPSAnaGg6bW0gQU0nO1xuICB0aW1lRm9ybWF0UGxhY2Vob2xkZXIyNEhvdXIgPSAnSEg6bW0nO1xuICB0aW1lRm9ybWF0QU0gPSAnQU0nO1xuICB0aW1lRm9ybWF0UE0gPSAnUE0nO1xuICBjb25maXJtQ2hhbmdlc01vZGFsTWVzc2FnZSA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2hhbmdlIHRoaXMgZmllbGQ/JztcbiAgcHJvbXB0TW9kYWxNZXNzYWdlID0gJ0RvIHlvdSB3YW50IHRvIHBlcmZvcm0gdGhlIGZvbGxvd2luZyBjaGFuZ2VzPyc7XG4gIGFzeW5jRmFpbHVyZSA9ICdBc3luYyB2YWxpZGF0aW9uIHdhcyBub3QgY2FsbGVkIHdpdGhpbiB0aGUgMTBzIHRocmVzaG9sZCwgeW91IG1pZ2h0IHdhbnQgdG8gcmVsb2FkIHRoZSBwYWdlIHRvIHRyeSBhZ2Fpbic7XG4gIHByZXZpb3VzID0gJ1ByZXZpb3VzJztcbiAgYWN0aW9ucyA9ICdBY3Rpb25zJztcbiAgYWxsID0gJ0FsbCc7XG4gIGdyb3VwZWRNdWx0aVBpY2tlckVtcHR5ID0gJ05vIGl0ZW1zIHRvIGRpc3BsYXknO1xuICBncm91cGVkTXVsdGlQaWNrZXJTZWxlY3RDYXRlZ29yeSA9ICdTZWxlY3QgYSBjYXRlZ29yeSBmcm9tIHRoZSByaWdodCB0byBnZXQgc3RhcnRlZCc7XG4gIGFkZCA9ICdBZGQnO1xuICBlbmNyeXB0ZWRGaWVsZFRvb2x0aXAgPSAnVGhpcyBkYXRhIGhhcyBiZWVuIHN0b3JlZCBhdCB0aGUgaGlnaGVzdCBsZXZlbCBvZiBzZWN1cml0eSc7XG4gIG5vU3RhdGVzRm9yQ291bnRyeSA9ICdObyBzdGF0ZXMgYXZhaWxhYmxlIGZvciB0aGUgc2VsZWN0ZWQgY291bnRyeSc7XG4gIHNlbGVjdENvdW50cnlGaXJzdCA9ICdQbGVhc2Ugc2VsZWN0IGEgY291bnRyeSBiZWZvcmUgc2VsZWN0aW5nIGEgc3RhdGUnO1xuICBpbnZhbGlkSW50ZWdlcklucHV0ID0gJ1NwZWNpYWwgY2hhcmFjdGVycyBhcmUgbm90IGFsbG93ZWQgZm9yJztcbiAgbWF4UmVjb3Jkc1JlYWNoZWQgPSAnU29ycnksIHlvdSBoYXZlIHJlYWNoZWQgdGhlIG1heGltdW0gbnVtYmVyIG9mIHJlY29yZHMgYWxsb3dlZCBmb3IgdGhpcyBmaWVsZCc7XG4gIHNlbGVjdEZpbHRlck9wdGlvbnMgPSAnUGxlYXNlIHNlbGVjdCBvbmUgb3IgbW9yZSBmaWx0ZXIgb3B0aW9ucyBiZWxvdy4nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChMT0NBTEVfSUQpXG4gICAgcHVibGljIHVzZXJMb2NhbGU6IHN0cmluZyA9ICdlbi1VUycsXG4gICkge31cblxuICBtYXhsZW5ndGhNZXRXaXRoRmllbGQoZmllbGQ6IHN0cmluZywgbWF4bGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgU29ycnksIHlvdSBoYXZlIHJlYWNoZWQgdGhlIG1heGltdW0gY2hhcmFjdGVyIGNvdW50IG9mICR7bWF4bGVuZ3RofSBmb3IgJHtmaWVsZH0uYDtcbiAgfVxuXG4gIG1heGxlbmd0aE1ldChtYXhsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBTb3JyeSwgeW91IGhhdmUgcmVhY2hlZCB0aGUgbWF4aW11bSBjaGFyYWN0ZXIgY291bnQgb2YgJHttYXhsZW5ndGh9IGZvciB0aGlzIGZpZWxkLmA7XG4gIH1cblxuICBpbnZhbGlkTWF4bGVuZ3RoV2l0aEZpZWxkKGZpZWxkOiBzdHJpbmcsIG1heGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFNvcnJ5LCB5b3UgaGF2ZSBleGNlZWRlZCB0aGUgbWF4aW11bSBjaGFyYWN0ZXIgY291bnQgb2YgJHttYXhsZW5ndGh9IGZvciAke2ZpZWxkfS5gO1xuICB9XG5cbiAgaW52YWxpZE1heGxlbmd0aChtYXhsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBTb3JyeSwgeW91IGhhdmUgZXhjZWVkZWQgdGhlIG1heGltdW0gY2hhcmFjdGVyIGNvdW50IG9mICR7bWF4bGVuZ3RofSBmb3IgdGhpcyBmaWVsZC5gO1xuICB9XG5cbiAgZ2V0VG9NYW55UGx1c01vcmUodG9NYW55OiB7IHF1YW50aXR5OiBudW1iZXIgfSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGArJHt0b01hbnkucXVhbnRpdHl9IG1vcmVgO1xuICB9XG5cbiAgc2VsZWN0ZWRSZWNvcmRzKHNlbGVjdGVkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gYCR7c2VsZWN0ZWR9IHJlY29yZHMgYXJlIHNlbGVjdGVkLmA7XG4gIH1cblxuICBzaG93aW5nWG9mWFJlc3VsdHMoc2hvd246IG51bWJlciwgdG90YWw6IG51bWJlcikge1xuICAgIHJldHVybiBgU2hvd2luZyAke3Nob3dufSBvZiAke3RvdGFsfSBSZXN1bHRzLmA7XG4gIH1cblxuICB0b3RhbFJlY29yZHModG90YWw6IG51bWJlciwgc2VsZWN0OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICByZXR1cm4gc2VsZWN0ID8gYFNlbGVjdCBhbGwgJHt0b3RhbH0gcmVjb3Jkcy5gIDogYERlLXNlbGVjdCByZW1haW5pbmcgJHt0b3RhbH0gcmVjb3Jkcy5gO1xuICB9XG5cbiAgZGF0ZUZvcm1hdFN0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRhdGVGb3JtYXQ7XG4gIH1cblxuICB0YWJiZWRHcm91cENsZWFyU3VnZ2VzdGlvbih0YWJMYWJlbFBsdXJhbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYENsZWFyIHlvdXIgc2VhcmNoIHRvIHNlZSBhbGwgJHt0YWJMYWJlbFBsdXJhbH0uYDtcbiAgfVxuXG4gIGZvcm1hdERhdGVXaXRoRm9ybWF0KHZhbHVlOiBhbnksIGZvcm1hdDogSW50bC5EYXRlVGltZUZvcm1hdE9wdGlvbnMpIHtcbiAgICBjb25zdCBkYXRlID0gdmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gdmFsdWUgOiBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgaWYgKGRhdGUuZ2V0VGltZSgpICE9PSBkYXRlLmdldFRpbWUoKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy51c2VyTG9jYWxlLCBmb3JtYXQpLmZvcm1hdChkYXRlKTtcbiAgfVxuXG4gIGZvcm1hdFRpbWVXaXRoRm9ybWF0KHZhbHVlOiBhbnksIGZvcm1hdDogSW50bC5EYXRlVGltZUZvcm1hdE9wdGlvbnMpOiBzdHJpbmcge1xuICAgIGNvbnN0IGRhdGUgPSB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgPyB2YWx1ZSA6IG5ldyBEYXRlKHZhbHVlKTtcbiAgICBpZiAoZGF0ZS5nZXRUaW1lKCkgIT09IGRhdGUuZ2V0VGltZSgpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IHRpbWVQYXJ0czogeyBbdHlwZTogc3RyaW5nXTogc3RyaW5nIH0gPSBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMudXNlckxvY2FsZSwgZm9ybWF0KVxuICAgICAgLmZvcm1hdFRvUGFydHMoZGF0ZSlcbiAgICAgIC5yZWR1Y2UoKG9iaiwgcGFydCkgPT4ge1xuICAgICAgICBvYmpbcGFydC50eXBlXSA9IHBhcnQudmFsdWU7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgICB9LCB7fSk7XG4gICAgY29uc3QgZGF5cGVyaW9kID0gdGltZVBhcnRzLmRheXBlcmlvZCA/IHRpbWVQYXJ0cy5kYXlwZXJpb2QgOiAnJztcbiAgICByZXR1cm4gYCR7dGltZVBhcnRzLmhvdXJ9OiR7dGltZVBhcnRzLm1pbnV0ZX0ke2RheXBlcmlvZH1gO1xuICB9XG5cbiAgZ2V0V2Vla2RheXMoKTogc3RyaW5nW10ge1xuICAgIGZ1bmN0aW9uIGdldERheShkYXlPZldlZWspIHtcbiAgICAgIGNvbnN0IGR0ID0gbmV3IERhdGUoKTtcbiAgICAgIHJldHVybiBkdC5zZXREYXRlKGR0LmdldERhdGUoKSAtIGR0LmdldERheSgpICsgZGF5T2ZXZWVrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW2dldERheSgwKSwgZ2V0RGF5KDEpLCBnZXREYXkoMiksIGdldERheSgzKSwgZ2V0RGF5KDQpLCBnZXREYXkoNSksIGdldERheSg2KV0ucmVkdWNlKCh3ZWVrZGF5cywgZHQpID0+IHtcbiAgICAgIHdlZWtkYXlzLnB1c2gobmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy51c2VyTG9jYWxlLCB7IHdlZWtkYXk6ICdsb25nJyB9KS5mb3JtYXQoZHQpKTtcbiAgICAgIHJldHVybiB3ZWVrZGF5cztcbiAgICB9LCBbXSk7XG4gIH1cblxuICBnZXRNb250aHMoKTogc3RyaW5nW10ge1xuICAgIGZ1bmN0aW9uIGdldE1vbnRoKG1vbnRoKSB7XG4gICAgICBjb25zdCBkdCA9IG5ldyBEYXRlKCk7XG4gICAgICByZXR1cm4gZHQuc2V0TW9udGgobW9udGgsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICBnZXRNb250aCgwKSxcbiAgICAgIGdldE1vbnRoKDEpLFxuICAgICAgZ2V0TW9udGgoMiksXG4gICAgICBnZXRNb250aCgzKSxcbiAgICAgIGdldE1vbnRoKDQpLFxuICAgICAgZ2V0TW9udGgoNSksXG4gICAgICBnZXRNb250aCg2KSxcbiAgICAgIGdldE1vbnRoKDcpLFxuICAgICAgZ2V0TW9udGgoOCksXG4gICAgICBnZXRNb250aCg5KSxcbiAgICAgIGdldE1vbnRoKDEwKSxcbiAgICAgIGdldE1vbnRoKDExKSxcbiAgICBdLnJlZHVjZSgobW9udGhzLCBkdCkgPT4ge1xuICAgICAgbW9udGhzLnB1c2gobmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy51c2VyTG9jYWxlLCB7IG1vbnRoOiAnbG9uZycgfSkuZm9ybWF0KGR0KSk7XG4gICAgICByZXR1cm4gbW9udGhzO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIGdldFByb3BlcnR5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpc1t2YWx1ZV07XG4gIH1cblxuICBnZXRSYW5nZVRleHQocGFnZTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBsZW5ndGg6IG51bWJlciwgc2hvcnQ6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGlmIChsZW5ndGggPT09IDAgfHwgcGFnZVNpemUgPT09IDApIHtcbiAgICAgIHJldHVybiBgRGlzcGxheWluZyAwIG9mICR7bGVuZ3RofWA7XG4gICAgfVxuXG4gICAgbGVuZ3RoID0gTWF0aC5tYXgobGVuZ3RoLCAwKTtcblxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBwYWdlICogcGFnZVNpemU7XG5cbiAgICAvLyBJZiB0aGUgc3RhcnQgaW5kZXggZXhjZWVkcyB0aGUgbGlzdCBsZW5ndGgsIGRvIG5vdCB0cnkgYW5kIGZpeCB0aGUgZW5kIGluZGV4IHRvIHRoZSBlbmQuXG4gICAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4IDwgbGVuZ3RoID8gTWF0aC5taW4oc3RhcnRJbmRleCArIHBhZ2VTaXplLCBsZW5ndGgpIDogc3RhcnRJbmRleCArIHBhZ2VTaXplO1xuXG4gICAgcmV0dXJuIHNob3J0ID8gYCR7c3RhcnRJbmRleCArIDF9IC0gJHtlbmRJbmRleH0vJHtsZW5ndGh9YCA6IGBEaXNwbGF5aW5nICR7c3RhcnRJbmRleCArIDF9IC0gJHtlbmRJbmRleH0gb2YgJHtsZW5ndGh9YDtcbiAgfVxuXG4gIGZvcm1hdEN1cnJlbmN5KHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1VTRCcgfTtcbiAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KHRoaXMudXNlckxvY2FsZSwgb3B0aW9ucykuZm9ybWF0KHZhbHVlKTtcbiAgfVxuXG4gIGZvcm1hdEJpZ0RlY2ltYWwodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IHZhbHVlQXNTdHJpbmcgPSB2YWx1ZSA/IHZhbHVlLnRvU3RyaW5nKCkgOiAnMCc7XG4gICAgLy8gdHJ1bmNhdGUgYXQgdHdvIGRlY2ltYWxzIChkbyBub3Qgcm91bmQpXG4gICAgY29uc3QgZGVjaW1hbEluZGV4ID0gdmFsdWVBc1N0cmluZy5pbmRleE9mKCcuJyk7XG4gICAgaWYgKGRlY2ltYWxJbmRleCA+IC0xICYmIGRlY2ltYWxJbmRleCArIDMgPCB2YWx1ZUFzU3RyaW5nLmxlbmd0aCkge1xuICAgICAgdmFsdWVBc1N0cmluZyA9IHZhbHVlQXNTdHJpbmcuc3Vic3RyaW5nKDAsIHZhbHVlQXNTdHJpbmcuaW5kZXhPZignLicpICsgMyk7XG4gICAgfVxuICAgIC8vIGNvbnZlcnQgYmFjayB0byBudW1iZXJcbiAgICBjb25zdCB0cnVuY2F0ZWRWYWx1ZSA9IE51bWJlcih2YWx1ZUFzU3RyaW5nKTtcbiAgICBjb25zdCBvcHRpb25zID0geyBzdHlsZTogJ2RlY2ltYWwnLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMiB9O1xuICAgIGxldCBfdmFsdWUgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy51c2VyTG9jYWxlLCBvcHRpb25zKS5mb3JtYXQodHJ1bmNhdGVkVmFsdWUpO1xuICAgIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgIF92YWx1ZSA9IGAoJHtfdmFsdWUuc2xpY2UoMSl9KWA7XG4gICAgfVxuICAgIHJldHVybiBfdmFsdWU7XG4gIH1cblxuICBmb3JtYXROdW1iZXIodmFsdWU6IGFueSwgb3B0aW9ucz86IEludGwuTnVtYmVyRm9ybWF0T3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLnVzZXJMb2NhbGUsIG9wdGlvbnMpLmZvcm1hdCh2YWx1ZSk7XG4gIH1cblxuICBmb3JtYXREYXRlU2hvcnQodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgY29uc3Qgb3B0aW9uczogSW50bC5EYXRlVGltZUZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICAvLyBERC9NTS9ZWVlZLCBISDpNTSBBIC0gMDIvMTQvMjAxNywgMToxNyBQTVxuICAgICAgbW9udGg6ICcyLWRpZ2l0JyxcbiAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgfTtcbiAgICBjb25zdCBfdmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJyA/IG5ldyBEYXRlKCkgOiBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMudXNlckxvY2FsZSwgb3B0aW9ucykuZm9ybWF0KF92YWx1ZSk7XG4gIH1cblxuICBmb3JtYXRUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGNvbnN0IG9wdGlvbnM6IEludGwuRGF0ZVRpbWVGb3JtYXRPcHRpb25zID0ge1xuICAgICAgLy8gSEg6TU0gQSAtIDE6MTcgUE1cbiAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgIH07XG4gICAgY29uc3QgX3ZhbHVlID0gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycgPyBuZXcgRGF0ZSgpIDogbmV3IERhdGUodmFsdWUpO1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLnVzZXJMb2NhbGUsIG9wdGlvbnMpLmZvcm1hdChfdmFsdWUpO1xuICB9XG5cbiAgZm9ybWF0RGF0ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBjb25zdCBvcHRpb25zOiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIC8vIEREL01NL1lZWVkgLSAwMi8xNC8yMDE3XG4gICAgICBtb250aDogJzItZGlnaXQnLFxuICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgfTtcbiAgICBjb25zdCBfdmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJyA/IG5ldyBEYXRlKCkgOiBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMudXNlckxvY2FsZSwgb3B0aW9ucykuZm9ybWF0KF92YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5PVk9fRUxFTUVOVFNfTEFCRUxTX1BST1ZJREVSUyA9IFt7IHByb3ZpZGU6IE5vdm9MYWJlbFNlcnZpY2UsIHVzZUNsYXNzOiBOb3ZvTGFiZWxTZXJ2aWNlIH1dO1xuIl19