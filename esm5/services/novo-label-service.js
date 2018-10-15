/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Injectable, Inject, Optional, LOCALE_ID } from '@angular/core';
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
        this.address2 = 'Apt';
        this.city = 'City / Locality';
        this.state = 'State / Region';
        this.zip = 'Postal Code';
        this.zipCode = 'Postal Code'; // TODO delete
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
            hour: '2-digit',
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
            hour: '2-digit',
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
    NovoLabelService.prototype.userLocale;
}
/** @type {?} */
export var NOVO_ELEMENTS_LABELS_PROVIDERS = [{ provide: NovoLabelService, useClass: NovoLabelService }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm92by1sYWJlbC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEU7SUEyRkUsMEJBR1MsVUFBNEI7UUFBNUIsMkJBQUEsRUFBQSxvQkFBNEI7UUFBNUIsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7UUE1RnJDLFlBQU8sR0FBRyxRQUFRLENBQUM7UUFDbkIsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsMEJBQXFCLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLGNBQVMsR0FBRyxZQUFZLENBQUM7UUFDekIsc0JBQWlCLEdBQUcsMEJBQTBCLENBQUM7UUFDL0MsNkJBQXdCLEdBQUcscUJBQXFCLENBQUM7UUFDakQsd0JBQW1CLEdBQUcsMEJBQTBCLENBQUM7UUFDakQsZ0JBQVcsR0FBRywwQkFBMEIsQ0FBQztRQUN6QyxnQkFBVyxHQUFHLDBCQUEwQixDQUFDO1FBQ3pDLG1CQUFjLEdBQUcsMEJBQTBCLENBQUM7UUFDNUMsbUJBQWMsR0FBRywwQkFBMEIsQ0FBQztRQUM1QyxhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcscUJBQXFCLENBQUM7UUFDdkMsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLFdBQU0sR0FBRyxRQUFRLENBQUM7UUFDbEIsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLGlCQUFZLEdBQUcsaUJBQWlCLENBQUM7UUFDakMsV0FBTSxHQUFHLFdBQVcsQ0FBQztRQUNyQixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsb0JBQW9CLENBQUM7UUFDdkMsZ0JBQVcsR0FBRyxjQUFjLENB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QUNaLG9DQUFpQjs7SUFDakIsZ0NBQXlCOztJQUN6QixpQ0FBeUI7O0lBQ3pCLCtCQUFvQjs7SUFDcEIsbUNBQXdCOztJQUN4QixtQ0FBb0I7O0lBQ3BCLDhCQUFVOztJQUNWLHlDQUFrQzs7SUFDbEMsdUNBQThCOztJQUM5Qiw4QkFBVTs7SUFDViwrQkFBWTs7SUFDWixrQ0FBa0I7O0lBQ2xCLG1DQUErQjs7SUFDL0Isc0NBQTBCOztJQUMxQixpREFBcUM7O0lBQ3JDLG1EQUFxQzs7SUFDckMsdURBQXNDOztJQUN0Qyx3Q0FBb0I7O0lBQ3BCLHdDQUFvQjs7SUFDcEIsc0RBQTJFOztJQUMzRSw4Q0FBcUU7O0lBQ3JFLHdDQUEwSDs7SUFDMUgsb0NBQXNCOztJQUN0QixtQ0FBb0I7O0lBQ3BCLCtCQUFZOztJQUNaLG1EQUFnRDs7SUFDaEQsNERBQXFGOztJQUNyRiwrQkFBWTs7SUFDWixpREFBcUY7O0lBQ3JGLDhDQUFvRTs7SUFDcEUsOENBQXdFOztJQUN4RSwrQ0FBK0Q7O0lBRzdELHNDQUVtQzs7O0FBK0l2QyxNQUFNLEtBQU8sOEJBQThCLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCwgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3ZvTGFiZWxTZXJ2aWNlIHtcbiAgZmlsdGVycyA9ICdGaWx0ZXInO1xuICBjbGVhciA9ICdDbGVhcic7XG4gIHNvcnQgPSAnU29ydCc7XG4gIGRpc3RyaWJ1dGlvbkxpc3RPd25lciA9ICdPd25lcic7XG4gIGRhdGVBZGRlZCA9ICdEYXRlIEFkZGVkJztcbiAgZW1wdHlUYWJsZU1lc3NhZ2UgPSAnTm8gUmVjb3JkcyB0byBkaXNwbGF5Li4uJztcbiAgbm9NYXRjaGluZ1JlY29yZHNNZXNzYWdlID0gJ05vIE1hdGNoaW5nIFJlY29yZHMnO1xuICBlcnJvcmVkVGFibGVNZXNzYWdlID0gJ09vcHMhIEFuIGVycm9yIG9jY3VycmVkLic7XG4gIHBpY2tlckVycm9yID0gJ09vcHMhIEFuIGVycm9yIG9jY3VycmVkLic7XG4gIHBpY2tlckVtcHR5ID0gJ05vIHJlc3VsdHMgdG8gZGlzcGxheS4uLic7XG4gIHF1aWNrTm90ZUVycm9yID0gJ09vcHMhIEFuIGVycm9yIG9jY3VycmVkLic7XG4gIHF1aWNrTm90ZUVtcHR5ID0gJ05vIHJlc3VsdHMgdG8gZGlzcGxheS4uLic7XG4gIHJlcXVpcmVkID0gJ1JlcXVpcmVkJztcbiAgbnVtYmVyVG9vTGFyZ2UgPSAnTnVtYmVyIGlzIHRvbyBsYXJnZSc7XG4gIHNhdmUgPSAnU2F2ZSc7XG4gIGNhbmNlbCA9ICdDYW5jZWwnO1xuICBuZXh0ID0gJ05leHQnO1xuICBpdGVtc1BlclBhZ2UgPSAnSXRlbXMgcGVyIHBhZ2U6JztcbiAgc2VsZWN0ID0gJ1NlbGVjdC4uLic7XG4gIHNlbGVjdGVkID0gJ1NlbGVjdGVkJztcbiAgc2VsZWN0QWxsT25QYWdlID0gJ1NlbGVjdCBhbGwgb24gcGFnZSc7XG4gIGRlc2VsZWN0QWxsID0gJ0Rlc2VsZWN0IGFsbCc7XG4gIHJlZnJlc2ggPSAnUmVmcmVzaCc7XG4gIGNsb3NlID0gJ0Nsb3NlJztcbiAgbW92ZSA9ICdNb3ZlJztcbiAgc3RhcnREYXRlID0gJ1N0YXJ0IERhdGUnO1xuICBlbmREYXRlID0gJ0VuZCBEYXRlJztcbiAgbW9yZSA9ICdtb3JlJztcbiAgY2xlYXJBbGwgPSAnQ0xFQVIgQUxMJztcbiAgY2xlYXJBbGxOb3JtYWxDYXNlID0gJ0NsZWFyIEFsbCc7XG4gIGNsZWFyU29ydCA9ICdDbGVhciBTb3J0JztcbiAgY2xlYXJGaWx0ZXIgPSAnQ2xlYXIgRmlsdGVyJztcbiAgdG9kYXkgPSAnVG9kYXknO1xuICBub3cgPSAnTm93JztcbiAgaXNSZXF1aXJlZCA9ICdpcyByZXF1aXJlZCc7XG4gIG5vdFZhbGlkWWVhciA9ICdpcyBub3QgYSB2YWxpZCB5ZWFyJztcbiAgaXNUb29MYXJnZSA9ICdpcyB0b28gbGFyZ2UnO1xuICBpbnZhbGlkQWRkcmVzcyA9ICdyZXF1aXJlcyBhdCBsZWFzdCBvbmUgZmllbGQgZmlsbGVkIG91dCc7XG4gIGludmFsaWRFbWFpbCA9ICdyZXF1aXJlcyBhIHZhbGlkIGVtYWlsIChleC4gYWJjQDEyMy5jb20pJztcbiAgbWluTGVuZ3RoID0gJ2lzIHJlcXVpcmVkIHRvIGJlIGEgbWluaW11bSBsZW5ndGggb2YnO1xuICBwYXN0MURheSA9ICdQYXN0IDEgRGF5JztcbiAgcGFzdDdEYXlzID0gJ1Bhc3QgNyBEYXlzJztcbiAgcGFzdDMwRGF5cyA9ICdQYXN0IDMwIERheXMnO1xuICBwYXN0OTBEYXlzID0gJ1Bhc3QgOTAgRGF5cyc7XG4gIHBhc3QxWWVhciA9ICdQYXN0IDEgWWVhcic7XG4gIG5leHQxRGF5ID0gJ05leHQgMSBEYXknO1xuICBuZXh0N0RheXMgPSAnTmV4dCA3IERheXMnO1xuICBuZXh0MzBEYXlzID0gJ05leHQgMzAgRGF5cyc7XG4gIG5leHQ5MERheXMgPSAnTmV4dCA5MCBEYXlzJztcbiAgbmV4dDFZZWFyID0gJ05leHQgMSBZZWFyJztcbiAgY3VzdG9tRGF0ZVJhbmdlID0gJ0N1c3RvbSBEYXRlIFJhbmdlJztcbiAgYmFja1RvUHJlc2V0RmlsdGVycyA9ICdCYWNrIHRvIFByZXNldCBGaWx0ZXJzJztcbiAgb2tHb3RJdCA9ICdPaywgR290IGl0JztcbiAgYWRkcmVzcyA9ICdBZGRyZXNzJztcbiAgYWRkcmVzczEgPSAnQWRkcmVzcyc7XG4gIGFwdCA9ICdBcHQnOyAvLyBUT0RPIGRlbGV0ZVxuICBhZGRyZXNzMiA9ICdBcHQnO1xuICBjaXR5ID0gJ0NpdHkgLyBMb2NhbGl0eSc7XG4gIHN0YXRlID0gJ1N0YXRlIC8gUmVnaW9uJztcbiAgemlwID0gJ1Bvc3RhbCBDb2RlJztcbiAgemlwQ29kZSA9ICdQb3N0YWwgQ29kZSc7IC8vIFRPRE8gZGVsZXRlXG4gIGNvdW50cnkgPSAnQ291bnRyeSc7XG4gIG9yID0gJ29yJztcbiAgY2xpY2tUb0Jyb3dzZSA9ICdjbGljayB0byBicm93c2UnO1xuICBjaG9vc2VBRmlsZSA9ICdDaG9vc2UgYSBmaWxlJztcbiAgbm8gPSAnTm8nO1xuICB5ZXMgPSAnWWVzJztcbiAgc2VhcmNoID0gJ1NFQVJDSCc7XG4gIG5vSXRlbXMgPSAnVGhlcmUgYXJlIG5vIGl0ZW1zJztcbiAgZGF0ZUZvcm1hdCA9ICdNTS9kZC95eXl5JztcbiAgZGF0ZUZvcm1hdFBsYWNlaG9sZGVyID0gJ01NL0REL1lZWVknO1xuICB0aW1lRm9ybWF0UGxhY2Vob2xkZXJBTSA9ICdoaDptbSBBTSc7XG4gIHRpbWVGb3JtYXRQbGFjZWhvbGRlcjI0SG91ciA9ICdISDptbSc7XG4gIHRpbWVGb3JtYXRBTSA9ICdBTSc7XG4gIHRpbWVGb3JtYXRQTSA9ICdQTSc7XG4gIGNvbmZpcm1DaGFuZ2VzTW9kYWxNZXNzYWdlID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjaGFuZ2UgdGhpcyBmaWVsZD8nO1xuICBwcm9tcHRNb2RhbE1lc3NhZ2UgPSAnRG8geW91IHdhbnQgdG8gcGVyZm9ybSB0aGUgZm9sbG93aW5nIGNoYW5nZXM/JztcbiAgYXN5bmNGYWlsdXJlID0gJ0FzeW5jIHZhbGlkYXRpb24gd2FzIG5vdCBjYWxsZWQgd2l0aGluIHRoZSAxMHMgdGhyZXNob2xkLCB5b3UgbWlnaHQgd2FudCB0byByZWxvYWQgdGhlIHBhZ2UgdG8gdHJ5IGFnYWluJztcbiAgcHJldmlvdXMgPSAnUHJldmlvdXMnO1xuICBhY3Rpb25zID0gJ0FjdGlvbnMnO1xuICBhbGwgPSAnQWxsJztcbiAgZ3JvdXBlZE11bHRpUGlja2VyRW1wdHkgPSAnTm8gaXRlbXMgdG8gZGlzcGxheSc7XG4gIGdyb3VwZWRNdWx0aVBpY2tlclNlbGVjdENhdGVnb3J5ID0gJ1NlbGVjdCBhIGNhdGVnb3J5IGZyb20gdGhlIHJpZ2h0IHRvIGdldCBzdGFydGVkJztcbiAgYWRkID0gJ0FkZCc7XG4gIGVuY3J5cHRlZEZpZWxkVG9vbHRpcCA9ICdUaGlzIGRhdGEgaGFzIGJlZW4gc3RvcmVkIGF0IHRoZSBoaWdoZXN0IGxldmVsIG9mIHNlY3VyaXR5JztcbiAgbm9TdGF0ZXNGb3JDb3VudHJ5ID0gJ05vIHN0YXRlcyBhdmFpbGFibGUgZm9yIHRoZSBzZWxlY3RlZCBjb3VudHJ5JztcbiAgc2VsZWN0Q291bnRyeUZpcnN0ID0gJ1BsZWFzZSBzZWxlY3QgYSBjb3VudHJ5IGJlZm9yZSBzZWxlY3RpbmcgYSBzdGF0ZSc7XG4gIGludmFsaWRJbnRlZ2VySW5wdXQgPSAnU3BlY2lhbCBjaGFyYWN0ZXJzIGFyZSBub3QgYWxsb3dlZCBmb3InO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChMT0NBTEVfSUQpXG4gICAgcHVibGljIHVzZXJMb2NhbGU6IHN0cmluZyA9ICdlbi1VUycsXG4gICkge31cblxuICBtYXhsZW5ndGhNZXRXaXRoRmllbGQoZmllbGQ6IHN0cmluZywgbWF4bGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgU29ycnksIHlvdSBoYXZlIHJlYWNoZWQgdGhlIG1heGltdW0gY2hhcmFjdGVyIGNvdW50IG9mICR7bWF4bGVuZ3RofSBmb3IgJHtmaWVsZH0uYDtcbiAgfVxuXG4gIG1heGxlbmd0aE1ldChtYXhsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBTb3JyeSwgeW91IGhhdmUgcmVhY2hlZCB0aGUgbWF4aW11bSBjaGFyYWN0ZXIgY291bnQgb2YgJHttYXhsZW5ndGh9IGZvciB0aGlzIGZpZWxkLmA7XG4gIH1cblxuICBpbnZhbGlkTWF4bGVuZ3RoV2l0aEZpZWxkKGZpZWxkOiBzdHJpbmcsIG1heGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFNvcnJ5LCB5b3UgaGF2ZSBleGNlZWRlZCB0aGUgbWF4aW11bSBjaGFyYWN0ZXIgY291bnQgb2YgJHttYXhsZW5ndGh9IGZvciAke2ZpZWxkfS5gO1xuICB9XG5cbiAgaW52YWxpZE1heGxlbmd0aChtYXhsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBTb3JyeSwgeW91IGhhdmUgZXhjZWVkZWQgdGhlIG1heGltdW0gY2hhcmFjdGVyIGNvdW50IG9mICR7bWF4bGVuZ3RofSBmb3IgdGhpcyBmaWVsZC5gO1xuICB9XG5cbiAgZ2V0VG9NYW55UGx1c01vcmUodG9NYW55OiB7IHF1YW50aXR5OiBudW1iZXIgfSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGArJHt0b01hbnkucXVhbnRpdHl9IG1vcmVgO1xuICB9XG5cbiAgc2VsZWN0ZWRSZWNvcmRzKHNlbGVjdGVkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gYCR7c2VsZWN0ZWR9IHJlY29yZHMgYXJlIHNlbGVjdGVkLmA7XG4gIH1cblxuICBzaG93aW5nWG9mWFJlc3VsdHMoc2hvd246IG51bWJlciwgdG90YWw6IG51bWJlcikge1xuICAgIHJldHVybiBgU2hvd2luZyAke3Nob3dufSBvZiAke3RvdGFsfSBSZXN1bHRzLmA7XG4gIH1cblxuICB0b3RhbFJlY29yZHModG90YWw6IG51bWJlciwgc2VsZWN0OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICByZXR1cm4gc2VsZWN0ID8gYFNlbGVjdCBhbGwgJHt0b3RhbH0gcmVjb3Jkcy5gIDogYERlLXNlbGVjdCByZW1haW5pbmcgJHt0b3RhbH0gcmVjb3Jkcy5gO1xuICB9XG5cbiAgZm9ybWF0RGF0ZVdpdGhGb3JtYXQodmFsdWU6IGFueSwgZm9ybWF0OiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucykge1xuICAgIGxldCBkYXRlID0gdmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gdmFsdWUgOiBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgaWYgKGRhdGUuZ2V0VGltZSgpICE9PSBkYXRlLmdldFRpbWUoKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy51c2VyTG9jYWxlLCBmb3JtYXQpLmZvcm1hdChkYXRlKTtcbiAgfVxuXG4gIGdldFdlZWtkYXlzKCk6IHN0cmluZ1tdIHtcbiAgICBmdW5jdGlvbiBnZXREYXkoZGF5T2ZXZWVrKSB7XG4gICAgICBsZXQgZHQgPSBuZXcgRGF0ZSgpO1xuICAgICAgcmV0dXJuIGR0LnNldERhdGUoZHQuZ2V0RGF0ZSgpIC0gZHQuZ2V0RGF5KCkgKyBkYXlPZldlZWspO1xuICAgIH1cblxuICAgIHJldHVybiBbZ2V0RGF5KDApLCBnZXREYXkoMSksIGdldERheSgyKSwgZ2V0RGF5KDMpLCBnZXREYXkoNCksIGdldERheSg1KSwgZ2V0RGF5KDYpXS5yZWR1Y2UoKHdlZWtkYXlzLCBkdCkgPT4ge1xuICAgICAgd2Vla2RheXMucHVzaChuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLnVzZXJMb2NhbGUsIHsgd2Vla2RheTogJ2xvbmcnIH0pLmZvcm1hdChkdCkpO1xuICAgICAgcmV0dXJuIHdlZWtkYXlzO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIGdldE1vbnRocygpOiBzdHJpbmdbXSB7XG4gICAgZnVuY3Rpb24gZ2V0TW9udGgobW9udGgpIHtcbiAgICAgIGxldCBkdCA9IG5ldyBEYXRlKCk7XG4gICAgICByZXR1cm4gZHQuc2V0TW9udGgobW9udGgsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICBnZXRNb250aCgwKSxcbiAgICAgIGdldE1vbnRoKDEpLFxuICAgICAgZ2V0TW9udGgoMiksXG4gICAgICBnZXRNb250aCgzKSxcbiAgICAgIGdldE1vbnRoKDQpLFxuICAgICAgZ2V0TW9udGgoNSksXG4gICAgICBnZXRNb250aCg2KSxcbiAgICAgIGdldE1vbnRoKDcpLFxuICAgICAgZ2V0TW9udGgoOCksXG4gICAgICBnZXRNb250aCg5KSxcbiAgICAgIGdldE1vbnRoKDEwKSxcbiAgICAgIGdldE1vbnRoKDExKSxcbiAgICBdLnJlZHVjZSgobW9udGhzLCBkdCkgPT4ge1xuICAgICAgbW9udGhzLnB1c2gobmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy51c2VyTG9jYWxlLCB7IG1vbnRoOiAnbG9uZycgfSkuZm9ybWF0KGR0KSk7XG4gICAgICByZXR1cm4gbW9udGhzO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIGdldFByb3BlcnR5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpc1t2YWx1ZV07XG4gIH1cblxuICBnZXRSYW5nZVRleHQocGFnZTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBsZW5ndGg6IG51bWJlciwgc2hvcnQ6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGlmIChsZW5ndGggPT09IDAgfHwgcGFnZVNpemUgPT09IDApIHtcbiAgICAgIHJldHVybiBgRGlzcGxheWluZyAwIG9mICR7bGVuZ3RofWA7XG4gICAgfVxuXG4gICAgbGVuZ3RoID0gTWF0aC5tYXgobGVuZ3RoLCAwKTtcblxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBwYWdlICogcGFnZVNpemU7XG5cbiAgICAvLyBJZiB0aGUgc3RhcnQgaW5kZXggZXhjZWVkcyB0aGUgbGlzdCBsZW5ndGgsIGRvIG5vdCB0cnkgYW5kIGZpeCB0aGUgZW5kIGluZGV4IHRvIHRoZSBlbmQuXG4gICAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4IDwgbGVuZ3RoID8gTWF0aC5taW4oc3RhcnRJbmRleCArIHBhZ2VTaXplLCBsZW5ndGgpIDogc3RhcnRJbmRleCArIHBhZ2VTaXplO1xuXG4gICAgcmV0dXJuIHNob3J0ID8gYCR7c3RhcnRJbmRleCArIDF9IC0gJHtlbmRJbmRleH0vJHtsZW5ndGh9YCA6IGBEaXNwbGF5aW5nICR7c3RhcnRJbmRleCArIDF9IC0gJHtlbmRJbmRleH0gb2YgJHtsZW5ndGh9YDtcbiAgfVxuXG4gIGZvcm1hdEN1cnJlbmN5KHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGxldCBvcHRpb25zID0geyBzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdVU0QnIH07XG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLnVzZXJMb2NhbGUsIG9wdGlvbnMpLmZvcm1hdCh2YWx1ZSk7XG4gIH1cblxuICBmb3JtYXROdW1iZXIodmFsdWU6IGFueSwgb3B0aW9ucz86IEludGwuTnVtYmVyRm9ybWF0T3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLnVzZXJMb2NhbGUsIG9wdGlvbnMpLmZvcm1hdCh2YWx1ZSk7XG4gIH1cblxuICBmb3JtYXREYXRlU2hvcnQodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgbGV0IG9wdGlvbnM6IEludGwuRGF0ZVRpbWVGb3JtYXRPcHRpb25zID0ge1xuICAgICAgLy8gREQvTU0vWVlZWSwgSEg6TU0gQSAtIDAyLzE0LzIwMTcsIDE6MTcgUE1cbiAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXG4gICAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgIH07XG4gICAgbGV0IF92YWx1ZSA9IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnID8gbmV3IERhdGUoKSA6IG5ldyBEYXRlKHZhbHVlKTtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy51c2VyTG9jYWxlLCBvcHRpb25zKS5mb3JtYXQoX3ZhbHVlKTtcbiAgfVxuXG4gIGZvcm1hdFRpbWUodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgbGV0IG9wdGlvbnM6IEludGwuRGF0ZVRpbWVGb3JtYXRPcHRpb25zID0ge1xuICAgICAgLy8gSEg6TU0gQSAtIDE6MTcgUE1cbiAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgIH07XG4gICAgbGV0IF92YWx1ZSA9IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnID8gbmV3IERhdGUoKSA6IG5ldyBEYXRlKHZhbHVlKTtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy51c2VyTG9jYWxlLCBvcHRpb25zKS5mb3JtYXQoX3ZhbHVlKTtcbiAgfVxuXG4gIGZvcm1hdERhdGUodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgbGV0IG9wdGlvbnM6IEludGwuRGF0ZVRpbWVGb3JtYXRPcHRpb25zID0ge1xuICAgICAgLy8gREQvTU0vWVlZWSAtIDAyLzE0LzIwMTdcbiAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXG4gICAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICB9O1xuICAgIGxldCBfdmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJyA/IG5ldyBEYXRlKCkgOiBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMudXNlckxvY2FsZSwgb3B0aW9ucykuZm9ybWF0KF92YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5PVk9fRUxFTUVOVFNfTEFCRUxTX1BST1ZJREVSUyA9IFt7IHByb3ZpZGU6IE5vdm9MYWJlbFNlcnZpY2UsIHVzZUNsYXNzOiBOb3ZvTGFiZWxTZXJ2aWNlIH1dO1xuIl19