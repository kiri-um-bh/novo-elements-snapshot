/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            .reduce(function (obj, part) {
            obj[part.type] = part.value;
            return obj;
        }, {});
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
        return [getDay(0), getDay(1), getDay(2), getDay(3), getDay(4), getDay(5), getDay(6)].reduce(function (weekdays, dt) {
            weekdays.push(new Intl.DateTimeFormat(_this.userLocale, { weekday: 'long' }).format(dt));
            return weekdays;
        }, []);
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
        ].reduce(function (months, dt) {
            months.push(new Intl.DateTimeFormat(_this.userLocale, { month: 'long' }).format(dt));
            return months;
        }, []);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm92by1sYWJlbC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFHeEUsOEJBSUM7OztJQUhDLCtCQUFhOztJQUNiLGlDQUFlOztJQUNmLG9DQUFtQjs7QUFHckI7SUE4RkUsMEJBR1MsVUFBNEI7UUFBNUIsMkJBQUEsRUFBQSxvQkFBNEI7UUFBNUIsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7UUEvRnJDLFlBQU8sR0FBRyxRQUFRLENBQUM7UUFDbkIsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsMEJBQXFCLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLGNBQVMsR0FBRyxZQUFZLENBQUM7UUFDekIsc0JBQWlCLEdBQUcsMEJBQTBCLENBQUM7UUFDL0MsNkJBQXdCLEdBQUcscUJBQXFCLENBQUM7UUFDakQsd0JBQW1CLEdBQUcsMEJBQTBCLENBQUM7UUFDakQsZ0JBQVcsR0FBRywwQkFBMEIsQ0FBQztRQUN6Qyx5QkFBb0IsR0FBRyw4QkFBOEIsQ0FBQztRQUN0RCxnQkFBVyxHQUFHLDBCQUEwQixDQUFDO1FBQ3pDLG1CQUFjLEdBQUcsMEJBQTBCLENBQUM7UUFDNUMsbUJBQWMsR0FBRywwQkFBMEIsQ0FBQztRQUM1QyxhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcscUJBQXFCLENBQUM7UUFDdkMsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLFdBQU0sR0FBRyxRQUFRLENBQUM7UUFDbEIsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLGlCQUFZLEdBQUcsaUJBQWlCLENBQUM7UUFDakMsV0FBTSxHQUFHLFdBQVcs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LG1DQUFvQjs7SUFDcEIsK0JBQVk7O0lBQ1osbURBQWdEOztJQUNoRCw0REFBcUY7O0lBQ3JGLCtCQUFZOztJQUNaLGlEQUFxRjs7SUFDckYsOENBQW9FOztJQUNwRSw4Q0FBd0U7O0lBQ3hFLCtDQUErRDs7SUFDL0QsNkNBQW1HOztJQUNuRywrQ0FBd0U7O0lBR3RFLHNDQUVtQzs7O0FBK0t2QyxNQUFNLEtBQU8sOEJBQThCLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCwgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgRGF0ZVRpbWVGb3JtYXRQYXJ0ID0gSW50bC5EYXRlVGltZUZvcm1hdFBhcnQ7XG5cbmludGVyZmFjZSBUaW1lRm9ybWF0UGFydHMge1xuICBob3VyOiBzdHJpbmc7XG4gIG1pbnV0ZTogc3RyaW5nO1xuICBkYXlQZXJpb2Q/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3ZvTGFiZWxTZXJ2aWNlIHtcbiAgZmlsdGVycyA9ICdGaWx0ZXInO1xuICBjbGVhciA9ICdDbGVhcic7XG4gIHNvcnQgPSAnU29ydCc7XG4gIGRpc3RyaWJ1dGlvbkxpc3RPd25lciA9ICdPd25lcic7XG4gIGRhdGVBZGRlZCA9ICdEYXRlIEFkZGVkJztcbiAgZW1wdHlUYWJsZU1lc3NhZ2UgPSAnTm8gUmVjb3JkcyB0byBkaXNwbGF5Li4uJztcbiAgbm9NYXRjaGluZ1JlY29yZHNNZXNzYWdlID0gJ05vIE1hdGNoaW5nIFJlY29yZHMnO1xuICBlcnJvcmVkVGFibGVNZXNzYWdlID0gJ09vcHMhIEFuIGVycm9yIG9jY3VycmVkLic7XG4gIHBpY2tlckVycm9yID0gJ09vcHMhIEFuIGVycm9yIG9jY3VycmVkLic7XG4gIHBpY2tlclRleHRGaWVsZEVtcHR5ID0gJ0JlZ2luIHR5cGluZyB0byBzZWUgcmVzdWx0cy4nO1xuICBwaWNrZXJFbXB0eSA9ICdObyByZXN1bHRzIHRvIGRpc3BsYXkuLi4nO1xuICBxdWlja05vdGVFcnJvciA9ICdPb3BzISBBbiBlcnJvciBvY2N1cnJlZC4nO1xuICBxdWlja05vdGVFbXB0eSA9ICdObyByZXN1bHRzIHRvIGRpc3BsYXkuLi4nO1xuICByZXF1aXJlZCA9ICdSZXF1aXJlZCc7XG4gIG51bWJlclRvb0xhcmdlID0gJ051bWJlciBpcyB0b28gbGFyZ2UnO1xuICBzYXZlID0gJ1NhdmUnO1xuICBjYW5jZWwgPSAnQ2FuY2VsJztcbiAgbmV4dCA9ICdOZXh0JztcbiAgaXRlbXNQZXJQYWdlID0gJ0l0ZW1zIHBlciBwYWdlOic7XG4gIHNlbGVjdCA9ICdTZWxlY3QuLi4nO1xuICBzZWxlY3RlZCA9ICdTZWxlY3RlZCc7XG4gIHNlbGVjdEFsbE9uUGFnZSA9ICdTZWxlY3QgYWxsIG9uIHBhZ2UnO1xuICBkZXNlbGVjdEFsbCA9ICdEZXNlbGVjdCBhbGwnO1xuICByZWZyZXNoID0gJ1JlZnJlc2gnO1xuICBjbG9zZSA9ICdDbG9zZSc7XG4gIG1vdmUgPSAnTW92ZSc7XG4gIHN0YXJ0RGF0ZSA9ICdTdGFydCBEYXRlJztcbiAgZW5kRGF0ZSA9ICdFbmQgRGF0ZSc7XG4gIG1vcmUgPSAnbW9yZSc7XG4gIGNsZWFyQWxsID0gJ0NMRUFSIEFMTCc7XG4gIGNsZWFyQWxsTm9ybWFsQ2FzZSA9ICdDbGVhciBBbGwnO1xuICBjbGVhclNvcnQgPSAnQ2xlYXIgU29ydCc7XG4gIGNsZWFyRmlsdGVyID0gJ0NsZWFyIEZpbHRlcic7XG4gIHRvZGF5ID0gJ1RvZGF5JztcbiAgbm93ID0gJ05vdyc7XG4gIGlzUmVxdWlyZWQgPSAnaXMgcmVxdWlyZWQnO1xuICBub3RWYWxpZFllYXIgPSAnaXMgbm90IGEgdmFsaWQgeWVhcic7XG4gIGlzVG9vTGFyZ2UgPSAnaXMgdG9vIGxhcmdlJztcbiAgaW52YWxpZEFkZHJlc3MgPSAncmVxdWlyZXMgYXQgbGVhc3Qgb25lIGZpZWxkIGZpbGxlZCBvdXQnO1xuICBpbnZhbGlkRW1haWwgPSAncmVxdWlyZXMgYSB2YWxpZCBlbWFpbCAoZXguIGFiY0AxMjMuY29tKSc7XG4gIG1pbkxlbmd0aCA9ICdpcyByZXF1aXJlZCB0byBiZSBhIG1pbmltdW0gbGVuZ3RoIG9mJztcbiAgcGFzdDFEYXkgPSAnUGFzdCAxIERheSc7XG4gIHBhc3Q3RGF5cyA9ICdQYXN0IDcgRGF5cyc7XG4gIHBhc3QzMERheXMgPSAnUGFzdCAzMCBEYXlzJztcbiAgcGFzdDkwRGF5cyA9ICdQYXN0IDkwIERheXMnO1xuICBwYXN0MVllYXIgPSAnUGFzdCAxIFllYXInO1xuICBuZXh0MURheSA9ICdOZXh0IDEgRGF5JztcbiAgbmV4dDdEYXlzID0gJ05leHQgNyBEYXlzJztcbiAgbmV4dDMwRGF5cyA9ICdOZXh0IDMwIERheXMnO1xuICBuZXh0OTBEYXlzID0gJ05leHQgOTAgRGF5cyc7XG4gIG5leHQxWWVhciA9ICdOZXh0IDEgWWVhcic7XG4gIGN1c3RvbURhdGVSYW5nZSA9ICdDdXN0b20gRGF0ZSBSYW5nZSc7XG4gIGJhY2tUb1ByZXNldEZpbHRlcnMgPSAnQmFjayB0byBQcmVzZXQgRmlsdGVycyc7XG4gIG9rR290SXQgPSAnT2ssIEdvdCBpdCc7XG4gIGFkZHJlc3MgPSAnQWRkcmVzcyc7XG4gIGFkZHJlc3MxID0gJ0FkZHJlc3MnO1xuICBhcHQgPSAnQXB0JzsgLy8gVE9ETyBkZWxldGVcbiAgYWRkcmVzczIgPSAnQXB0JztcbiAgY2l0eSA9ICdDaXR5IC8gTG9jYWxpdHknO1xuICBzdGF0ZSA9ICdTdGF0ZSAvIFJlZ2lvbic7XG4gIHppcCA9ICdQb3N0YWwgQ29kZSc7XG4gIHppcENvZGUgPSAnUG9zdGFsIENvZGUnOyAvLyBUT0RPIGRlbGV0ZVxuICBjb3VudHJ5ID0gJ0NvdW50cnknO1xuICBvciA9ICdvcic7XG4gIGNsaWNrVG9Ccm93c2UgPSAnY2xpY2sgdG8gYnJvd3NlJztcbiAgY2hvb3NlQUZpbGUgPSAnQ2hvb3NlIGEgZmlsZSc7XG4gIG5vID0gJ05vJztcbiAgeWVzID0gJ1llcyc7XG4gIHNlYXJjaCA9ICdTRUFSQ0gnO1xuICBub0l0ZW1zID0gJ1RoZXJlIGFyZSBubyBpdGVtcyc7XG4gIGRhdGVGb3JtYXQgPSAnTU0vZGQveXl5eSc7XG4gIGRhdGVGb3JtYXRQbGFjZWhvbGRlciA9ICdNTS9ERC9ZWVlZJztcbiAgdGltZUZvcm1hdFBsYWNlaG9sZGVyQU0gPSAnaGg6bW0gQU0nO1xuICB0aW1lRm9ybWF0UGxhY2Vob2xkZXIyNEhvdXIgPSAnSEg6bW0nO1xuICB0aW1lRm9ybWF0QU0gPSAnQU0nO1xuICB0aW1lRm9ybWF0UE0gPSAnUE0nO1xuICBjb25maXJtQ2hhbmdlc01vZGFsTWVzc2FnZSA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2hhbmdlIHRoaXMgZmllbGQ/JztcbiAgcHJvbXB0TW9kYWxNZXNzYWdlID0gJ0RvIHlvdSB3YW50IHRvIHBlcmZvcm0gdGhlIGZvbGxvd2luZyBjaGFuZ2VzPyc7XG4gIGFzeW5jRmFpbHVyZSA9ICdBc3luYyB2YWxpZGF0aW9uIHdhcyBub3QgY2FsbGVkIHdpdGhpbiB0aGUgMTBzIHRocmVzaG9sZCwgeW91IG1pZ2h0IHdhbnQgdG8gcmVsb2FkIHRoZSBwYWdlIHRvIHRyeSBhZ2Fpbic7XG4gIHByZXZpb3VzID0gJ1ByZXZpb3VzJztcbiAgYWN0aW9ucyA9ICdBY3Rpb25zJztcbiAgYWxsID0gJ0FsbCc7XG4gIGdyb3VwZWRNdWx0aVBpY2tlckVtcHR5ID0gJ05vIGl0ZW1zIHRvIGRpc3BsYXknO1xuICBncm91cGVkTXVsdGlQaWNrZXJTZWxlY3RDYXRlZ29yeSA9ICdTZWxlY3QgYSBjYXRlZ29yeSBmcm9tIHRoZSByaWdodCB0byBnZXQgc3RhcnRlZCc7XG4gIGFkZCA9ICdBZGQnO1xuICBlbmNyeXB0ZWRGaWVsZFRvb2x0aXAgPSAnVGhpcyBkYXRhIGhhcyBiZWVuIHN0b3JlZCBhdCB0aGUgaGlnaGVzdCBsZXZlbCBvZiBzZWN1cml0eSc7XG4gIG5vU3RhdGVzRm9yQ291bnRyeSA9ICdObyBzdGF0ZXMgYXZhaWxhYmxlIGZvciB0aGUgc2VsZWN0ZWQgY291bnRyeSc7XG4gIHNlbGVjdENvdW50cnlGaXJzdCA9ICdQbGVhc2Ugc2VsZWN0IGEgY291bnRyeSBiZWZvcmUgc2VsZWN0aW5nIGEgc3RhdGUnO1xuICBpbnZhbGlkSW50ZWdlcklucHV0ID0gJ1NwZWNpYWwgY2hhcmFjdGVycyBhcmUgbm90IGFsbG93ZWQgZm9yJztcbiAgbWF4UmVjb3Jkc1JlYWNoZWQgPSAnU29ycnksIHlvdSBoYXZlIHJlYWNoZWQgdGhlIG1heGltdW0gbnVtYmVyIG9mIHJlY29yZHMgYWxsb3dlZCBmb3IgdGhpcyBmaWVsZCc7XG4gIHNlbGVjdEZpbHRlck9wdGlvbnMgPSAnUGxlYXNlIHNlbGVjdCBvbmUgb3IgbW9yZSBmaWx0ZXIgb3B0aW9ucyBiZWxvdy4nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChMT0NBTEVfSUQpXG4gICAgcHVibGljIHVzZXJMb2NhbGU6IHN0cmluZyA9ICdlbi1VUycsXG4gICkge31cblxuICBtYXhsZW5ndGhNZXRXaXRoRmllbGQoZmllbGQ6IHN0cmluZywgbWF4bGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgU29ycnksIHlvdSBoYXZlIHJlYWNoZWQgdGhlIG1heGltdW0gY2hhcmFjdGVyIGNvdW50IG9mICR7bWF4bGVuZ3RofSBmb3IgJHtmaWVsZH0uYDtcbiAgfVxuXG4gIG1heGxlbmd0aE1ldChtYXhsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBTb3JyeSwgeW91IGhhdmUgcmVhY2hlZCB0aGUgbWF4aW11bSBjaGFyYWN0ZXIgY291bnQgb2YgJHttYXhsZW5ndGh9IGZvciB0aGlzIGZpZWxkLmA7XG4gIH1cblxuICBpbnZhbGlkTWF4bGVuZ3RoV2l0aEZpZWxkKGZpZWxkOiBzdHJpbmcsIG1heGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFNvcnJ5LCB5b3UgaGF2ZSBleGNlZWRlZCB0aGUgbWF4aW11bSBjaGFyYWN0ZXIgY291bnQgb2YgJHttYXhsZW5ndGh9IGZvciAke2ZpZWxkfS5gO1xuICB9XG5cbiAgaW52YWxpZE1heGxlbmd0aChtYXhsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBTb3JyeSwgeW91IGhhdmUgZXhjZWVkZWQgdGhlIG1heGltdW0gY2hhcmFjdGVyIGNvdW50IG9mICR7bWF4bGVuZ3RofSBmb3IgdGhpcyBmaWVsZC5gO1xuICB9XG5cbiAgZ2V0VG9NYW55UGx1c01vcmUodG9NYW55OiB7IHF1YW50aXR5OiBudW1iZXIgfSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGArJHt0b01hbnkucXVhbnRpdHl9IG1vcmVgO1xuICB9XG5cbiAgc2VsZWN0ZWRSZWNvcmRzKHNlbGVjdGVkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gYCR7c2VsZWN0ZWR9IHJlY29yZHMgYXJlIHNlbGVjdGVkLmA7XG4gIH1cblxuICBzaG93aW5nWG9mWFJlc3VsdHMoc2hvd246IG51bWJlciwgdG90YWw6IG51bWJlcikge1xuICAgIHJldHVybiBgU2hvd2luZyAke3Nob3dufSBvZiAke3RvdGFsfSBSZXN1bHRzLmA7XG4gIH1cblxuICB0b3RhbFJlY29yZHModG90YWw6IG51bWJlciwgc2VsZWN0OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICByZXR1cm4gc2VsZWN0ID8gYFNlbGVjdCBhbGwgJHt0b3RhbH0gcmVjb3Jkcy5gIDogYERlLXNlbGVjdCByZW1haW5pbmcgJHt0b3RhbH0gcmVjb3Jkcy5gO1xuICB9XG5cbiAgZm9ybWF0RGF0ZVdpdGhGb3JtYXQodmFsdWU6IGFueSwgZm9ybWF0OiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucykge1xuICAgIGxldCBkYXRlID0gdmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gdmFsdWUgOiBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgaWYgKGRhdGUuZ2V0VGltZSgpICE9PSBkYXRlLmdldFRpbWUoKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy51c2VyTG9jYWxlLCBmb3JtYXQpLmZvcm1hdChkYXRlKTtcbiAgfVxuXG4gIGZvcm1hdFRpbWVXaXRoRm9ybWF0KHZhbHVlOiBhbnksIGZvcm1hdDogSW50bC5EYXRlVGltZUZvcm1hdE9wdGlvbnMpOiBzdHJpbmcge1xuICAgIGxldCBkYXRlID0gdmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gdmFsdWUgOiBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgaWYgKGRhdGUuZ2V0VGltZSgpICE9PSBkYXRlLmdldFRpbWUoKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBsZXQgdGltZVBhcnRzOiB7IFt0eXBlOiBzdHJpbmddOiBzdHJpbmcgfSA9IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy51c2VyTG9jYWxlLCBmb3JtYXQpXG4gICAgICAuZm9ybWF0VG9QYXJ0cyhkYXRlKVxuICAgICAgLnJlZHVjZSgob2JqLCBwYXJ0KSA9PiB7XG4gICAgICAgIG9ialtwYXJ0LnR5cGVdID0gcGFydC52YWx1ZTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH0sIHt9KTtcbiAgICBjb25zdCBkYXlwZXJpb2QgPSB0aW1lUGFydHMuZGF5cGVyaW9kID8gdGltZVBhcnRzLmRheXBlcmlvZCA6ICcnO1xuICAgIHJldHVybiBgJHt0aW1lUGFydHMuaG91cn06JHt0aW1lUGFydHMubWludXRlfSR7ZGF5cGVyaW9kfWA7XG4gIH1cblxuICBnZXRXZWVrZGF5cygpOiBzdHJpbmdbXSB7XG4gICAgZnVuY3Rpb24gZ2V0RGF5KGRheU9mV2Vlaykge1xuICAgICAgbGV0IGR0ID0gbmV3IERhdGUoKTtcbiAgICAgIHJldHVybiBkdC5zZXREYXRlKGR0LmdldERhdGUoKSAtIGR0LmdldERheSgpICsgZGF5T2ZXZWVrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW2dldERheSgwKSwgZ2V0RGF5KDEpLCBnZXREYXkoMiksIGdldERheSgzKSwgZ2V0RGF5KDQpLCBnZXREYXkoNSksIGdldERheSg2KV0ucmVkdWNlKCh3ZWVrZGF5cywgZHQpID0+IHtcbiAgICAgIHdlZWtkYXlzLnB1c2gobmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy51c2VyTG9jYWxlLCB7IHdlZWtkYXk6ICdsb25nJyB9KS5mb3JtYXQoZHQpKTtcbiAgICAgIHJldHVybiB3ZWVrZGF5cztcbiAgICB9LCBbXSk7XG4gIH1cblxuICBnZXRNb250aHMoKTogc3RyaW5nW10ge1xuICAgIGZ1bmN0aW9uIGdldE1vbnRoKG1vbnRoKSB7XG4gICAgICBsZXQgZHQgPSBuZXcgRGF0ZSgpO1xuICAgICAgcmV0dXJuIGR0LnNldE1vbnRoKG1vbnRoLCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAgZ2V0TW9udGgoMCksXG4gICAgICBnZXRNb250aCgxKSxcbiAgICAgIGdldE1vbnRoKDIpLFxuICAgICAgZ2V0TW9udGgoMyksXG4gICAgICBnZXRNb250aCg0KSxcbiAgICAgIGdldE1vbnRoKDUpLFxuICAgICAgZ2V0TW9udGgoNiksXG4gICAgICBnZXRNb250aCg3KSxcbiAgICAgIGdldE1vbnRoKDgpLFxuICAgICAgZ2V0TW9udGgoOSksXG4gICAgICBnZXRNb250aCgxMCksXG4gICAgICBnZXRNb250aCgxMSksXG4gICAgXS5yZWR1Y2UoKG1vbnRocywgZHQpID0+IHtcbiAgICAgIG1vbnRocy5wdXNoKG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMudXNlckxvY2FsZSwgeyBtb250aDogJ2xvbmcnIH0pLmZvcm1hdChkdCkpO1xuICAgICAgcmV0dXJuIG1vbnRocztcbiAgICB9LCBbXSk7XG4gIH1cblxuICBnZXRQcm9wZXJ0eSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXNbdmFsdWVdO1xuICB9XG5cbiAgZ2V0UmFuZ2VUZXh0KHBhZ2U6IG51bWJlciwgcGFnZVNpemU6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIsIHNob3J0OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBpZiAobGVuZ3RoID09PSAwIHx8IHBhZ2VTaXplID09PSAwKSB7XG4gICAgICByZXR1cm4gYERpc3BsYXlpbmcgMCBvZiAke2xlbmd0aH1gO1xuICAgIH1cblxuICAgIGxlbmd0aCA9IE1hdGgubWF4KGxlbmd0aCwgMCk7XG5cbiAgICBjb25zdCBzdGFydEluZGV4ID0gcGFnZSAqIHBhZ2VTaXplO1xuXG4gICAgLy8gSWYgdGhlIHN0YXJ0IGluZGV4IGV4Y2VlZHMgdGhlIGxpc3QgbGVuZ3RoLCBkbyBub3QgdHJ5IGFuZCBmaXggdGhlIGVuZCBpbmRleCB0byB0aGUgZW5kLlxuICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnRJbmRleCA8IGxlbmd0aCA/IE1hdGgubWluKHN0YXJ0SW5kZXggKyBwYWdlU2l6ZSwgbGVuZ3RoKSA6IHN0YXJ0SW5kZXggKyBwYWdlU2l6ZTtcblxuICAgIHJldHVybiBzaG9ydCA/IGAke3N0YXJ0SW5kZXggKyAxfSAtICR7ZW5kSW5kZXh9LyR7bGVuZ3RofWAgOiBgRGlzcGxheWluZyAke3N0YXJ0SW5kZXggKyAxfSAtICR7ZW5kSW5kZXh9IG9mICR7bGVuZ3RofWA7XG4gIH1cblxuICBmb3JtYXRDdXJyZW5jeSh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgb3B0aW9ucyA9IHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnVVNEJyB9O1xuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy51c2VyTG9jYWxlLCBvcHRpb25zKS5mb3JtYXQodmFsdWUpO1xuICB9XG5cbiAgZm9ybWF0QmlnRGVjaW1hbCh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgdmFsdWVBc1N0cmluZyA9IHZhbHVlID8gdmFsdWUudG9TdHJpbmcoKSA6ICcwJztcbiAgICAvLyB0cnVuY2F0ZSBhdCB0d28gZGVjaW1hbHMgKGRvIG5vdCByb3VuZClcbiAgICBjb25zdCBkZWNpbWFsSW5kZXggPSB2YWx1ZUFzU3RyaW5nLmluZGV4T2YoJy4nKTtcbiAgICBpZiAoZGVjaW1hbEluZGV4ID4gLTEgJiYgZGVjaW1hbEluZGV4ICsgMyA8IHZhbHVlQXNTdHJpbmcubGVuZ3RoKSB7XG4gICAgICB2YWx1ZUFzU3RyaW5nID0gdmFsdWVBc1N0cmluZy5zdWJzdHJpbmcoMCwgdmFsdWVBc1N0cmluZy5pbmRleE9mKCcuJykgKyAzKTtcbiAgICB9XG4gICAgLy8gY29udmVydCBiYWNrIHRvIG51bWJlclxuICAgIGNvbnN0IHRydW5jYXRlZFZhbHVlID0gTnVtYmVyKHZhbHVlQXNTdHJpbmcpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IHN0eWxlOiAnZGVjaW1hbCcsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiwgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH07XG4gICAgbGV0IF92YWx1ZSA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLnVzZXJMb2NhbGUsIG9wdGlvbnMpLmZvcm1hdCh0cnVuY2F0ZWRWYWx1ZSk7XG4gICAgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgX3ZhbHVlID0gYCgke192YWx1ZS5zbGljZSgxKX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIF92YWx1ZTtcbiAgfVxuXG4gIGZvcm1hdE51bWJlcih2YWx1ZTogYW55LCBvcHRpb25zPzogSW50bC5OdW1iZXJGb3JtYXRPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KHRoaXMudXNlckxvY2FsZSwgb3B0aW9ucykuZm9ybWF0KHZhbHVlKTtcbiAgfVxuXG4gIGZvcm1hdERhdGVTaG9ydCh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBsZXQgb3B0aW9uczogSW50bC5EYXRlVGltZUZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICAvLyBERC9NTS9ZWVlZLCBISDpNTSBBIC0gMDIvMTQvMjAxNywgMToxNyBQTVxuICAgICAgbW9udGg6ICcyLWRpZ2l0JyxcbiAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgfTtcbiAgICBsZXQgX3ZhbHVlID0gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycgPyBuZXcgRGF0ZSgpIDogbmV3IERhdGUodmFsdWUpO1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLnVzZXJMb2NhbGUsIG9wdGlvbnMpLmZvcm1hdChfdmFsdWUpO1xuICB9XG5cbiAgZm9ybWF0VGltZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBsZXQgb3B0aW9uczogSW50bC5EYXRlVGltZUZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICAvLyBISDpNTSBBIC0gMToxNyBQTVxuICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgfTtcbiAgICBsZXQgX3ZhbHVlID0gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycgPyBuZXcgRGF0ZSgpIDogbmV3IERhdGUodmFsdWUpO1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLnVzZXJMb2NhbGUsIG9wdGlvbnMpLmZvcm1hdChfdmFsdWUpO1xuICB9XG5cbiAgZm9ybWF0RGF0ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBsZXQgb3B0aW9uczogSW50bC5EYXRlVGltZUZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICAvLyBERC9NTS9ZWVlZIC0gMDIvMTQvMjAxN1xuICAgICAgbW9udGg6ICcyLWRpZ2l0JyxcbiAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgIH07XG4gICAgbGV0IF92YWx1ZSA9IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnID8gbmV3IERhdGUoKSA6IG5ldyBEYXRlKHZhbHVlKTtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy51c2VyTG9jYWxlLCBvcHRpb25zKS5mb3JtYXQoX3ZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTk9WT19FTEVNRU5UU19MQUJFTFNfUFJPVklERVJTID0gW3sgcHJvdmlkZTogTm92b0xhYmVsU2VydmljZSwgdXNlQ2xhc3M6IE5vdm9MYWJlbFNlcnZpY2UgfV07XG4iXX0=