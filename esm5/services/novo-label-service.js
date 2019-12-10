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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm92by1sYWJlbC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBR3hFLDhCQUlDOzs7SUFIQywrQkFBYTs7SUFDYixpQ0FBZTs7SUFDZixvQ0FBbUI7O0FBR3JCO0lBK0ZFLDBCQUdTLFVBQTRCO1FBQTVCLDJCQUFBLEVBQUEsb0JBQTRCO1FBQTVCLGVBQVUsR0FBVixVQUFVLENBQWtCO1FBaEdyQyxZQUFPLEdBQUcsUUFBUSxDQUFDO1FBQ25CLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLDBCQUFxQixHQUFHLE9BQU8sQ0FBQztRQUNoQyxjQUFTLEdBQUcsWUFBWSxDQUFDO1FBQ3pCLHNCQUFpQixHQUFHLDBCQUEwQixDQUFDO1FBQy9DLDZCQUF3QixHQUFHLHFCQUFxQixDQUFDO1FBQ2pELHdCQUFtQixHQUFHLDBCQUEwQixDQUFDO1FBQ2pELGdCQUFXLEdBQUcsMEJBQTBCLENBQUM7UUFDekMseUJBQW9CLEdBQUcsOEJBQThCLENBQUM7UUFDdEQsZ0JBQVcsR0FBRywwQkFBMEIsQ0FBQztRQUN6QywyQkFBc0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM1QyxtQkFBYyxHQUFHLDBCQUEwQixDQUFDO1FBQzVDLG1CQUFjLEdBQUcsMEJBQTBCLENBQUM7UUFDNUMsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixtQkFBYyxHQUFHLHFCQUFxQixDQUFDO1FBQ3ZDLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxXQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ2xCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxpQkFBWSxHQUFHLGlC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QThCOztJQUM5Qiw4QkFBVTs7SUFDViwrQkFBWTs7SUFDWixrQ0FBa0I7O0lBQ2xCLG1DQUErQjs7SUFDL0Isc0NBQTBCOztJQUMxQixpREFBcUM7O0lBQ3JDLG1EQUFxQzs7SUFDckMsdURBQXNDOztJQUN0Qyx3Q0FBb0I7O0lBQ3BCLHdDQUFvQjs7SUFDcEIsc0RBQTJFOztJQUMzRSw4Q0FBcUU7O0lBQ3JFLHdDQUEwSDs7SUFDMUgsb0NBQXNCOztJQUN0QixtQ0FBb0I7O0lBQ3BCLCtCQUFZOztJQUNaLG1EQUFnRDs7SUFDaEQsNERBQXFGOztJQUNyRiwrQkFBWTs7SUFDWixpREFBcUY7O0lBQ3JGLDhDQUFvRTs7SUFDcEUsOENBQXdFOztJQUN4RSwrQ0FBK0Q7O0lBQy9ELDZDQUFtRzs7SUFDbkcsK0NBQXdFOztJQUd0RSxzQ0FFbUM7OztBQXVMdkMsTUFBTSxLQUFPLDhCQUE4QixHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWwsIExPQ0FMRV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IERhdGVUaW1lRm9ybWF0UGFydCA9IEludGwuRGF0ZVRpbWVGb3JtYXRQYXJ0O1xuXG5pbnRlcmZhY2UgVGltZUZvcm1hdFBhcnRzIHtcbiAgaG91cjogc3RyaW5nO1xuICBtaW51dGU6IHN0cmluZztcbiAgZGF5UGVyaW9kPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm92b0xhYmVsU2VydmljZSB7XG4gIGZpbHRlcnMgPSAnRmlsdGVyJztcbiAgY2xlYXIgPSAnQ2xlYXInO1xuICBzb3J0ID0gJ1NvcnQnO1xuICBkaXN0cmlidXRpb25MaXN0T3duZXIgPSAnT3duZXInO1xuICBkYXRlQWRkZWQgPSAnRGF0ZSBBZGRlZCc7XG4gIGVtcHR5VGFibGVNZXNzYWdlID0gJ05vIFJlY29yZHMgdG8gZGlzcGxheS4uLic7XG4gIG5vTWF0Y2hpbmdSZWNvcmRzTWVzc2FnZSA9ICdObyBNYXRjaGluZyBSZWNvcmRzJztcbiAgZXJyb3JlZFRhYmxlTWVzc2FnZSA9ICdPb3BzISBBbiBlcnJvciBvY2N1cnJlZC4nO1xuICBwaWNrZXJFcnJvciA9ICdPb3BzISBBbiBlcnJvciBvY2N1cnJlZC4nO1xuICBwaWNrZXJUZXh0RmllbGRFbXB0eSA9ICdCZWdpbiB0eXBpbmcgdG8gc2VlIHJlc3VsdHMuJztcbiAgcGlja2VyRW1wdHkgPSAnTm8gcmVzdWx0cyB0byBkaXNwbGF5Li4uJztcbiAgdGFiYmVkR3JvdXBQaWNrZXJFbXB0eSA9ICdObyByZXN1bHRzIGZvdW5kJztcbiAgcXVpY2tOb3RlRXJyb3IgPSAnT29wcyEgQW4gZXJyb3Igb2NjdXJyZWQuJztcbiAgcXVpY2tOb3RlRW1wdHkgPSAnTm8gcmVzdWx0cyB0byBkaXNwbGF5Li4uJztcbiAgcmVxdWlyZWQgPSAnUmVxdWlyZWQnO1xuICBudW1iZXJUb29MYXJnZSA9ICdOdW1iZXIgaXMgdG9vIGxhcmdlJztcbiAgc2F2ZSA9ICdTYXZlJztcbiAgY2FuY2VsID0gJ0NhbmNlbCc7XG4gIG5leHQgPSAnTmV4dCc7XG4gIGl0ZW1zUGVyUGFnZSA9ICdJdGVtcyBwZXIgcGFnZTonO1xuICBzZWxlY3QgPSAnU2VsZWN0Li4uJztcbiAgc2VsZWN0ZWQgPSAnU2VsZWN0ZWQnO1xuICBzZWxlY3RBbGxPblBhZ2UgPSAnU2VsZWN0IGFsbCBvbiBwYWdlJztcbiAgZGVzZWxlY3RBbGwgPSAnRGVzZWxlY3QgYWxsJztcbiAgcmVmcmVzaCA9ICdSZWZyZXNoJztcbiAgY2xvc2UgPSAnQ2xvc2UnO1xuICBtb3ZlID0gJ01vdmUnO1xuICBzdGFydERhdGUgPSAnU3RhcnQgRGF0ZSc7XG4gIGVuZERhdGUgPSAnRW5kIERhdGUnO1xuICBtb3JlID0gJ21vcmUnO1xuICBjbGVhckFsbCA9ICdDTEVBUiBBTEwnO1xuICBjbGVhckFsbE5vcm1hbENhc2UgPSAnQ2xlYXIgQWxsJztcbiAgY2xlYXJTb3J0ID0gJ0NsZWFyIFNvcnQnO1xuICBjbGVhckZpbHRlciA9ICdDbGVhciBGaWx0ZXInO1xuICB0b2RheSA9ICdUb2RheSc7XG4gIG5vdyA9ICdOb3cnO1xuICBpc1JlcXVpcmVkID0gJ2lzIHJlcXVpcmVkJztcbiAgbm90VmFsaWRZZWFyID0gJ2lzIG5vdCBhIHZhbGlkIHllYXInO1xuICBpc1Rvb0xhcmdlID0gJ2lzIHRvbyBsYXJnZSc7XG4gIGludmFsaWRBZGRyZXNzID0gJ3JlcXVpcmVzIGF0IGxlYXN0IG9uZSBmaWVsZCBmaWxsZWQgb3V0JztcbiAgaW52YWxpZEVtYWlsID0gJ3JlcXVpcmVzIGEgdmFsaWQgZW1haWwgKGV4LiBhYmNAMTIzLmNvbSknO1xuICBtaW5MZW5ndGggPSAnaXMgcmVxdWlyZWQgdG8gYmUgYSBtaW5pbXVtIGxlbmd0aCBvZic7XG4gIHBhc3QxRGF5ID0gJ1Bhc3QgMSBEYXknO1xuICBwYXN0N0RheXMgPSAnUGFzdCA3IERheXMnO1xuICBwYXN0MzBEYXlzID0gJ1Bhc3QgMzAgRGF5cyc7XG4gIHBhc3Q5MERheXMgPSAnUGFzdCA5MCBEYXlzJztcbiAgcGFzdDFZZWFyID0gJ1Bhc3QgMSBZZWFyJztcbiAgbmV4dDFEYXkgPSAnTmV4dCAxIERheSc7XG4gIG5leHQ3RGF5cyA9ICdOZXh0IDcgRGF5cyc7XG4gIG5leHQzMERheXMgPSAnTmV4dCAzMCBEYXlzJztcbiAgbmV4dDkwRGF5cyA9ICdOZXh0IDkwIERheXMnO1xuICBuZXh0MVllYXIgPSAnTmV4dCAxIFllYXInO1xuICBjdXN0b21EYXRlUmFuZ2UgPSAnQ3VzdG9tIERhdGUgUmFuZ2UnO1xuICBiYWNrVG9QcmVzZXRGaWx0ZXJzID0gJ0JhY2sgdG8gUHJlc2V0IEZpbHRlcnMnO1xuICBva0dvdEl0ID0gJ09rLCBHb3QgaXQnO1xuICBhZGRyZXNzID0gJ0FkZHJlc3MnO1xuICBhZGRyZXNzMSA9ICdBZGRyZXNzJztcbiAgYXB0ID0gJ0FwdCc7IC8vIFRPRE8gZGVsZXRlXG4gIGFkZHJlc3MyID0gJ0FwdCc7XG4gIGNpdHkgPSAnQ2l0eSAvIExvY2FsaXR5JztcbiAgc3RhdGUgPSAnU3RhdGUgLyBSZWdpb24nO1xuICB6aXAgPSAnUG9zdGFsIENvZGUnO1xuICB6aXBDb2RlID0gJ1Bvc3RhbCBDb2RlJzsgLy8gVE9ETyBkZWxldGVcbiAgY291bnRyeSA9ICdDb3VudHJ5JztcbiAgb3IgPSAnb3InO1xuICBjbGlja1RvQnJvd3NlID0gJ2NsaWNrIHRvIGJyb3dzZSc7XG4gIGNob29zZUFGaWxlID0gJ0Nob29zZSBhIGZpbGUnO1xuICBubyA9ICdObyc7XG4gIHllcyA9ICdZZXMnO1xuICBzZWFyY2ggPSAnU0VBUkNIJztcbiAgbm9JdGVtcyA9ICdUaGVyZSBhcmUgbm8gaXRlbXMnO1xuICBkYXRlRm9ybWF0ID0gJ01NL2RkL3l5eXknO1xuICBkYXRlRm9ybWF0UGxhY2Vob2xkZXIgPSAnTU0vREQvWVlZWSc7XG4gIHRpbWVGb3JtYXRQbGFjZWhvbGRlckFNID0gJ2hoOm1tIEFNJztcbiAgdGltZUZvcm1hdFBsYWNlaG9sZGVyMjRIb3VyID0gJ0hIOm1tJztcbiAgdGltZUZvcm1hdEFNID0gJ0FNJztcbiAgdGltZUZvcm1hdFBNID0gJ1BNJztcbiAgY29uZmlybUNoYW5nZXNNb2RhbE1lc3NhZ2UgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNoYW5nZSB0aGlzIGZpZWxkPyc7XG4gIHByb21wdE1vZGFsTWVzc2FnZSA9ICdEbyB5b3Ugd2FudCB0byBwZXJmb3JtIHRoZSBmb2xsb3dpbmcgY2hhbmdlcz8nO1xuICBhc3luY0ZhaWx1cmUgPSAnQXN5bmMgdmFsaWRhdGlvbiB3YXMgbm90IGNhbGxlZCB3aXRoaW4gdGhlIDEwcyB0aHJlc2hvbGQsIHlvdSBtaWdodCB3YW50IHRvIHJlbG9hZCB0aGUgcGFnZSB0byB0cnkgYWdhaW4nO1xuICBwcmV2aW91cyA9ICdQcmV2aW91cyc7XG4gIGFjdGlvbnMgPSAnQWN0aW9ucyc7XG4gIGFsbCA9ICdBbGwnO1xuICBncm91cGVkTXVsdGlQaWNrZXJFbXB0eSA9ICdObyBpdGVtcyB0byBkaXNwbGF5JztcbiAgZ3JvdXBlZE11bHRpUGlja2VyU2VsZWN0Q2F0ZWdvcnkgPSAnU2VsZWN0IGEgY2F0ZWdvcnkgZnJvbSB0aGUgcmlnaHQgdG8gZ2V0IHN0YXJ0ZWQnO1xuICBhZGQgPSAnQWRkJztcbiAgZW5jcnlwdGVkRmllbGRUb29sdGlwID0gJ1RoaXMgZGF0YSBoYXMgYmVlbiBzdG9yZWQgYXQgdGhlIGhpZ2hlc3QgbGV2ZWwgb2Ygc2VjdXJpdHknO1xuICBub1N0YXRlc0ZvckNvdW50cnkgPSAnTm8gc3RhdGVzIGF2YWlsYWJsZSBmb3IgdGhlIHNlbGVjdGVkIGNvdW50cnknO1xuICBzZWxlY3RDb3VudHJ5Rmlyc3QgPSAnUGxlYXNlIHNlbGVjdCBhIGNvdW50cnkgYmVmb3JlIHNlbGVjdGluZyBhIHN0YXRlJztcbiAgaW52YWxpZEludGVnZXJJbnB1dCA9ICdTcGVjaWFsIGNoYXJhY3RlcnMgYXJlIG5vdCBhbGxvd2VkIGZvcic7XG4gIG1heFJlY29yZHNSZWFjaGVkID0gJ1NvcnJ5LCB5b3UgaGF2ZSByZWFjaGVkIHRoZSBtYXhpbXVtIG51bWJlciBvZiByZWNvcmRzIGFsbG93ZWQgZm9yIHRoaXMgZmllbGQnO1xuICBzZWxlY3RGaWx0ZXJPcHRpb25zID0gJ1BsZWFzZSBzZWxlY3Qgb25lIG9yIG1vcmUgZmlsdGVyIG9wdGlvbnMgYmVsb3cuJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoTE9DQUxFX0lEKVxuICAgIHB1YmxpYyB1c2VyTG9jYWxlOiBzdHJpbmcgPSAnZW4tVVMnLFxuICApIHt9XG5cbiAgbWF4bGVuZ3RoTWV0V2l0aEZpZWxkKGZpZWxkOiBzdHJpbmcsIG1heGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFNvcnJ5LCB5b3UgaGF2ZSByZWFjaGVkIHRoZSBtYXhpbXVtIGNoYXJhY3RlciBjb3VudCBvZiAke21heGxlbmd0aH0gZm9yICR7ZmllbGR9LmA7XG4gIH1cblxuICBtYXhsZW5ndGhNZXQobWF4bGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgU29ycnksIHlvdSBoYXZlIHJlYWNoZWQgdGhlIG1heGltdW0gY2hhcmFjdGVyIGNvdW50IG9mICR7bWF4bGVuZ3RofSBmb3IgdGhpcyBmaWVsZC5gO1xuICB9XG5cbiAgaW52YWxpZE1heGxlbmd0aFdpdGhGaWVsZChmaWVsZDogc3RyaW5nLCBtYXhsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBTb3JyeSwgeW91IGhhdmUgZXhjZWVkZWQgdGhlIG1heGltdW0gY2hhcmFjdGVyIGNvdW50IG9mICR7bWF4bGVuZ3RofSBmb3IgJHtmaWVsZH0uYDtcbiAgfVxuXG4gIGludmFsaWRNYXhsZW5ndGgobWF4bGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgU29ycnksIHlvdSBoYXZlIGV4Y2VlZGVkIHRoZSBtYXhpbXVtIGNoYXJhY3RlciBjb3VudCBvZiAke21heGxlbmd0aH0gZm9yIHRoaXMgZmllbGQuYDtcbiAgfVxuXG4gIGdldFRvTWFueVBsdXNNb3JlKHRvTWFueTogeyBxdWFudGl0eTogbnVtYmVyIH0pOiBzdHJpbmcge1xuICAgIHJldHVybiBgKyR7dG9NYW55LnF1YW50aXR5fSBtb3JlYDtcbiAgfVxuXG4gIHNlbGVjdGVkUmVjb3JkcyhzZWxlY3RlZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGAke3NlbGVjdGVkfSByZWNvcmRzIGFyZSBzZWxlY3RlZC5gO1xuICB9XG5cbiAgc2hvd2luZ1hvZlhSZXN1bHRzKHNob3duOiBudW1iZXIsIHRvdGFsOiBudW1iZXIpIHtcbiAgICByZXR1cm4gYFNob3dpbmcgJHtzaG93bn0gb2YgJHt0b3RhbH0gUmVzdWx0cy5gO1xuICB9XG5cbiAgdG90YWxSZWNvcmRzKHRvdGFsOiBudW1iZXIsIHNlbGVjdDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIHNlbGVjdCA/IGBTZWxlY3QgYWxsICR7dG90YWx9IHJlY29yZHMuYCA6IGBEZS1zZWxlY3QgcmVtYWluaW5nICR7dG90YWx9IHJlY29yZHMuYDtcbiAgfVxuXG4gIGRhdGVGb3JtYXRTdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlRm9ybWF0O1xuICB9XG5cbiAgdGFiYmVkR3JvdXBDbGVhclN1Z2dlc3Rpb24odGFiTGFiZWxQbHVyYWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBDbGVhciB5b3VyIHNlYXJjaCB0byBzZWUgYWxsICR7dGFiTGFiZWxQbHVyYWx9LmA7XG4gIH1cblxuICBmb3JtYXREYXRlV2l0aEZvcm1hdCh2YWx1ZTogYW55LCBmb3JtYXQ6IEludGwuRGF0ZVRpbWVGb3JtYXRPcHRpb25zKSB7XG4gICAgbGV0IGRhdGUgPSB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgPyB2YWx1ZSA6IG5ldyBEYXRlKHZhbHVlKTtcbiAgICBpZiAoZGF0ZS5nZXRUaW1lKCkgIT09IGRhdGUuZ2V0VGltZSgpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLnVzZXJMb2NhbGUsIGZvcm1hdCkuZm9ybWF0KGRhdGUpO1xuICB9XG5cbiAgZm9ybWF0VGltZVdpdGhGb3JtYXQodmFsdWU6IGFueSwgZm9ybWF0OiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyk6IHN0cmluZyB7XG4gICAgbGV0IGRhdGUgPSB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgPyB2YWx1ZSA6IG5ldyBEYXRlKHZhbHVlKTtcbiAgICBpZiAoZGF0ZS5nZXRUaW1lKCkgIT09IGRhdGUuZ2V0VGltZSgpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGxldCB0aW1lUGFydHM6IHsgW3R5cGU6IHN0cmluZ106IHN0cmluZyB9ID0gSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLnVzZXJMb2NhbGUsIGZvcm1hdClcbiAgICAgIC5mb3JtYXRUb1BhcnRzKGRhdGUpXG4gICAgICAucmVkdWNlKChvYmosIHBhcnQpID0+IHtcbiAgICAgICAgb2JqW3BhcnQudHlwZV0gPSBwYXJ0LnZhbHVlO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgfSwge30pO1xuICAgIGNvbnN0IGRheXBlcmlvZCA9IHRpbWVQYXJ0cy5kYXlwZXJpb2QgPyB0aW1lUGFydHMuZGF5cGVyaW9kIDogJyc7XG4gICAgcmV0dXJuIGAke3RpbWVQYXJ0cy5ob3VyfToke3RpbWVQYXJ0cy5taW51dGV9JHtkYXlwZXJpb2R9YDtcbiAgfVxuXG4gIGdldFdlZWtkYXlzKCk6IHN0cmluZ1tdIHtcbiAgICBmdW5jdGlvbiBnZXREYXkoZGF5T2ZXZWVrKSB7XG4gICAgICBsZXQgZHQgPSBuZXcgRGF0ZSgpO1xuICAgICAgcmV0dXJuIGR0LnNldERhdGUoZHQuZ2V0RGF0ZSgpIC0gZHQuZ2V0RGF5KCkgKyBkYXlPZldlZWspO1xuICAgIH1cblxuICAgIHJldHVybiBbZ2V0RGF5KDApLCBnZXREYXkoMSksIGdldERheSgyKSwgZ2V0RGF5KDMpLCBnZXREYXkoNCksIGdldERheSg1KSwgZ2V0RGF5KDYpXS5yZWR1Y2UoKHdlZWtkYXlzLCBkdCkgPT4ge1xuICAgICAgd2Vla2RheXMucHVzaChuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLnVzZXJMb2NhbGUsIHsgd2Vla2RheTogJ2xvbmcnIH0pLmZvcm1hdChkdCkpO1xuICAgICAgcmV0dXJuIHdlZWtkYXlzO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIGdldE1vbnRocygpOiBzdHJpbmdbXSB7XG4gICAgZnVuY3Rpb24gZ2V0TW9udGgobW9udGgpIHtcbiAgICAgIGxldCBkdCA9IG5ldyBEYXRlKCk7XG4gICAgICByZXR1cm4gZHQuc2V0TW9udGgobW9udGgsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICBnZXRNb250aCgwKSxcbiAgICAgIGdldE1vbnRoKDEpLFxuICAgICAgZ2V0TW9udGgoMiksXG4gICAgICBnZXRNb250aCgzKSxcbiAgICAgIGdldE1vbnRoKDQpLFxuICAgICAgZ2V0TW9udGgoNSksXG4gICAgICBnZXRNb250aCg2KSxcbiAgICAgIGdldE1vbnRoKDcpLFxuICAgICAgZ2V0TW9udGgoOCksXG4gICAgICBnZXRNb250aCg5KSxcbiAgICAgIGdldE1vbnRoKDEwKSxcbiAgICAgIGdldE1vbnRoKDExKSxcbiAgICBdLnJlZHVjZSgobW9udGhzLCBkdCkgPT4ge1xuICAgICAgbW9udGhzLnB1c2gobmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy51c2VyTG9jYWxlLCB7IG1vbnRoOiAnbG9uZycgfSkuZm9ybWF0KGR0KSk7XG4gICAgICByZXR1cm4gbW9udGhzO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIGdldFByb3BlcnR5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpc1t2YWx1ZV07XG4gIH1cblxuICBnZXRSYW5nZVRleHQocGFnZTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBsZW5ndGg6IG51bWJlciwgc2hvcnQ6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGlmIChsZW5ndGggPT09IDAgfHwgcGFnZVNpemUgPT09IDApIHtcbiAgICAgIHJldHVybiBgRGlzcGxheWluZyAwIG9mICR7bGVuZ3RofWA7XG4gICAgfVxuXG4gICAgbGVuZ3RoID0gTWF0aC5tYXgobGVuZ3RoLCAwKTtcblxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBwYWdlICogcGFnZVNpemU7XG5cbiAgICAvLyBJZiB0aGUgc3RhcnQgaW5kZXggZXhjZWVkcyB0aGUgbGlzdCBsZW5ndGgsIGRvIG5vdCB0cnkgYW5kIGZpeCB0aGUgZW5kIGluZGV4IHRvIHRoZSBlbmQuXG4gICAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4IDwgbGVuZ3RoID8gTWF0aC5taW4oc3RhcnRJbmRleCArIHBhZ2VTaXplLCBsZW5ndGgpIDogc3RhcnRJbmRleCArIHBhZ2VTaXplO1xuXG4gICAgcmV0dXJuIHNob3J0ID8gYCR7c3RhcnRJbmRleCArIDF9IC0gJHtlbmRJbmRleH0vJHtsZW5ndGh9YCA6IGBEaXNwbGF5aW5nICR7c3RhcnRJbmRleCArIDF9IC0gJHtlbmRJbmRleH0gb2YgJHtsZW5ndGh9YDtcbiAgfVxuXG4gIGZvcm1hdEN1cnJlbmN5KHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGxldCBvcHRpb25zID0geyBzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdVU0QnIH07XG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLnVzZXJMb2NhbGUsIG9wdGlvbnMpLmZvcm1hdCh2YWx1ZSk7XG4gIH1cblxuICBmb3JtYXRCaWdEZWNpbWFsKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGxldCB2YWx1ZUFzU3RyaW5nID0gdmFsdWUgPyB2YWx1ZS50b1N0cmluZygpIDogJzAnO1xuICAgIC8vIHRydW5jYXRlIGF0IHR3byBkZWNpbWFscyAoZG8gbm90IHJvdW5kKVxuICAgIGNvbnN0IGRlY2ltYWxJbmRleCA9IHZhbHVlQXNTdHJpbmcuaW5kZXhPZignLicpO1xuICAgIGlmIChkZWNpbWFsSW5kZXggPiAtMSAmJiBkZWNpbWFsSW5kZXggKyAzIDwgdmFsdWVBc1N0cmluZy5sZW5ndGgpIHtcbiAgICAgIHZhbHVlQXNTdHJpbmcgPSB2YWx1ZUFzU3RyaW5nLnN1YnN0cmluZygwLCB2YWx1ZUFzU3RyaW5nLmluZGV4T2YoJy4nKSArIDMpO1xuICAgIH1cbiAgICAvLyBjb252ZXJ0IGJhY2sgdG8gbnVtYmVyXG4gICAgY29uc3QgdHJ1bmNhdGVkVmFsdWUgPSBOdW1iZXIodmFsdWVBc1N0cmluZyk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgc3R5bGU6ICdkZWNpbWFsJywgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfTtcbiAgICBsZXQgX3ZhbHVlID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KHRoaXMudXNlckxvY2FsZSwgb3B0aW9ucykuZm9ybWF0KHRydW5jYXRlZFZhbHVlKTtcbiAgICBpZiAodmFsdWUgPCAwKSB7XG4gICAgICBfdmFsdWUgPSBgKCR7X3ZhbHVlLnNsaWNlKDEpfSlgO1xuICAgIH1cbiAgICByZXR1cm4gX3ZhbHVlO1xuICB9XG5cbiAgZm9ybWF0TnVtYmVyKHZhbHVlOiBhbnksIG9wdGlvbnM/OiBJbnRsLk51bWJlckZvcm1hdE9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy51c2VyTG9jYWxlLCBvcHRpb25zKS5mb3JtYXQodmFsdWUpO1xuICB9XG5cbiAgZm9ybWF0RGF0ZVNob3J0KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGxldCBvcHRpb25zOiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIC8vIEREL01NL1lZWVksIEhIOk1NIEEgLSAwMi8xNC8yMDE3LCAxOjE3IFBNXG4gICAgICBtb250aDogJzItZGlnaXQnLFxuICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICB9O1xuICAgIGxldCBfdmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJyA/IG5ldyBEYXRlKCkgOiBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMudXNlckxvY2FsZSwgb3B0aW9ucykuZm9ybWF0KF92YWx1ZSk7XG4gIH1cblxuICBmb3JtYXRUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGxldCBvcHRpb25zOiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIC8vIEhIOk1NIEEgLSAxOjE3IFBNXG4gICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICB9O1xuICAgIGxldCBfdmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJyA/IG5ldyBEYXRlKCkgOiBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMudXNlckxvY2FsZSwgb3B0aW9ucykuZm9ybWF0KF92YWx1ZSk7XG4gIH1cblxuICBmb3JtYXREYXRlKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGxldCBvcHRpb25zOiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIC8vIEREL01NL1lZWVkgLSAwMi8xNC8yMDE3XG4gICAgICBtb250aDogJzItZGlnaXQnLFxuICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgfTtcbiAgICBsZXQgX3ZhbHVlID0gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycgPyBuZXcgRGF0ZSgpIDogbmV3IERhdGUodmFsdWUpO1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLnVzZXJMb2NhbGUsIG9wdGlvbnMpLmZvcm1hdChfdmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBOT1ZPX0VMRU1FTlRTX0xBQkVMU19QUk9WSURFUlMgPSBbeyBwcm92aWRlOiBOb3ZvTGFiZWxTZXJ2aWNlLCB1c2VDbGFzczogTm92b0xhYmVsU2VydmljZSB9XTtcbiJdfQ==