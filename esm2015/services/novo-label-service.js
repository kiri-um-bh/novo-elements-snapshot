/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export class NovoLabelService {
    /**
     * @param {?=} userLocale
     */
    constructor(userLocale = 'en-US') {
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
    maxlengthMetWithField(field, maxlength) {
        return `Sorry, you have reached the maximum character count of ${maxlength} for ${field}.`;
    }
    /**
     * @param {?} maxlength
     * @return {?}
     */
    maxlengthMet(maxlength) {
        return `Sorry, you have reached the maximum character count of ${maxlength} for this field.`;
    }
    /**
     * @param {?} field
     * @param {?} maxlength
     * @return {?}
     */
    invalidMaxlengthWithField(field, maxlength) {
        return `Sorry, you have exceeded the maximum character count of ${maxlength} for ${field}.`;
    }
    /**
     * @param {?} maxlength
     * @return {?}
     */
    invalidMaxlength(maxlength) {
        return `Sorry, you have exceeded the maximum character count of ${maxlength} for this field.`;
    }
    /**
     * @param {?} toMany
     * @return {?}
     */
    getToManyPlusMore(toMany) {
        return `+${toMany.quantity} more`;
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    selectedRecords(selected) {
        return `${selected} records are selected.`;
    }
    /**
     * @param {?} shown
     * @param {?} total
     * @return {?}
     */
    showingXofXResults(shown, total) {
        return `Showing ${shown} of ${total} Results.`;
    }
    /**
     * @param {?} total
     * @param {?=} select
     * @return {?}
     */
    totalRecords(total, select = false) {
        return select ? `Select all ${total} records.` : `De-select remaining ${total} records.`;
    }
    /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    formatDateWithFormat(value, format) {
        /** @type {?} */
        let date = value instanceof Date ? value : new Date(value);
        if (date.getTime() !== date.getTime()) {
            return value;
        }
        return new Intl.DateTimeFormat(this.userLocale, format).format(date);
    }
    /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    formatTimeWithFormat(value, format) {
        /** @type {?} */
        let date = value instanceof Date ? value : new Date(value);
        if (date.getTime() !== date.getTime()) {
            return value;
        }
        /** @type {?} */
        let timeParts = Intl.DateTimeFormat(this.userLocale, format).formatToParts(date).reduce((/**
         * @param {?} obj
         * @param {?} part
         * @return {?}
         */
        (obj, part) => {
            obj[part.type] = part.value;
            return obj;
        }), {});
        /** @type {?} */
        const dayperiod = timeParts.dayperiod ? timeParts.dayperiod : '';
        return `${timeParts.hour}:${timeParts.minute}${dayperiod}`;
    }
    /**
     * @return {?}
     */
    getWeekdays() {
        /**
         * @param {?} dayOfWeek
         * @return {?}
         */
        function getDay(dayOfWeek) {
            /** @type {?} */
            let dt = new Date();
            return dt.setDate(dt.getDate() - dt.getDay() + dayOfWeek);
        }
        return [getDay(0), getDay(1), getDay(2), getDay(3), getDay(4), getDay(5), getDay(6)].reduce((/**
         * @param {?} weekdays
         * @param {?} dt
         * @return {?}
         */
        (weekdays, dt) => {
            weekdays.push(new Intl.DateTimeFormat(this.userLocale, { weekday: 'long' }).format(dt));
            return weekdays;
        }), []);
    }
    /**
     * @return {?}
     */
    getMonths() {
        /**
         * @param {?} month
         * @return {?}
         */
        function getMonth(month) {
            /** @type {?} */
            let dt = new Date();
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
        (months, dt) => {
            months.push(new Intl.DateTimeFormat(this.userLocale, { month: 'long' }).format(dt));
            return months;
        }), []);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getProperty(value) {
        return this[value];
    }
    /**
     * @param {?} page
     * @param {?} pageSize
     * @param {?} length
     * @param {?} short
     * @return {?}
     */
    getRangeText(page, pageSize, length, short) {
        if (length === 0 || pageSize === 0) {
            return `Displaying 0 of ${length}`;
        }
        length = Math.max(length, 0);
        /** @type {?} */
        const startIndex = page * pageSize;
        // If the start index exceeds the list length, do not try and fix the end index to the end.
        /** @type {?} */
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return short ? `${startIndex + 1} - ${endIndex}/${length}` : `Displaying ${startIndex + 1} - ${endIndex} of ${length}`;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    formatCurrency(value) {
        /** @type {?} */
        let options = { style: 'currency', currency: 'USD' };
        return new Intl.NumberFormat(this.userLocale, options).format(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    formatBigDecimal(value) {
        /** @type {?} */
        let valueAsString = value ? value.toString() : '0';
        // truncate at two decimals (do not round)
        /** @type {?} */
        const decimalIndex = valueAsString.indexOf('.');
        if (decimalIndex > -1 && decimalIndex + 3 < valueAsString.length) {
            valueAsString = valueAsString.substring(0, valueAsString.indexOf('.') + 3);
        }
        // convert back to number
        /** @type {?} */
        const truncatedValue = Number(valueAsString);
        /** @type {?} */
        const options = { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 };
        /** @type {?} */
        let _value = new Intl.NumberFormat(this.userLocale, options).format(truncatedValue);
        if (value < 0) {
            _value = `(${_value.slice(1)})`;
        }
        return _value;
    }
    /**
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    formatNumber(value, options) {
        return new Intl.NumberFormat(this.userLocale, options).format(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    formatDateShort(value) {
        /** @type {?} */
        let options = {
            // DD/MM/YYYY, HH:MM A - 02/14/2017, 1:17 PM
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        };
        /** @type {?} */
        let _value = value === null || value === undefined || value === '' ? new Date() : new Date(value);
        return new Intl.DateTimeFormat(this.userLocale, options).format(_value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    formatTime(value) {
        /** @type {?} */
        let options = {
            // HH:MM A - 1:17 PM
            hour: '2-digit',
            minute: '2-digit',
        };
        /** @type {?} */
        let _value = value === null || value === undefined || value === '' ? new Date() : new Date(value);
        return new Intl.DateTimeFormat(this.userLocale, options).format(_value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    formatDate(value) {
        /** @type {?} */
        let options = {
            // DD/MM/YYYY - 02/14/2017
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
        };
        /** @type {?} */
        let _value = value === null || value === undefined || value === '' ? new Date() : new Date(value);
        return new Intl.DateTimeFormat(this.userLocale, options).format(_value);
    }
}
NovoLabelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NovoLabelService.ctorParameters = () => [
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [LOCALE_ID,] }] }
];
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
export const NOVO_ELEMENTS_LABELS_PROVIDERS = [{ provide: NovoLabelService, useClass: NovoLabelService }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm92by1sYWJlbC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFHeEUsOEJBSUM7OztJQUhDLCtCQUFhOztJQUNiLGlDQUFlOztJQUNmLG9DQUFtQjs7QUFJckIsTUFBTSxPQUFPLGdCQUFnQjs7OztJQTZGM0IsWUFHUyxhQUFxQixPQUFPO1FBQTVCLGVBQVUsR0FBVixVQUFVLENBQWtCO1FBL0ZyQyxZQUFPLEdBQUcsUUFBUSxDQUFDO1FBQ25CLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLDBCQUFxQixHQUFHLE9BQU8sQ0FBQztRQUNoQyxjQUFTLEdBQUcsWUFBWSxDQUFDO1FBQ3pCLHNCQUFpQixHQUFHLDBCQUEwQixDQUFDO1FBQy9DLDZCQUF3QixHQUFHLHFCQUFxQixDQUFDO1FBQ2pELHdCQUFtQixHQUFHLDBCQUEwQixDQUFDO1FBQ2pELGdCQUFXLEdBQUcsMEJBQTBCLENBQUM7UUFDekMseUJBQW9CLEdBQUcsOEJBQThCLENBQUM7UUFDdEQsZ0JBQVcsR0FBRywwQkFBMEIsQ0FBQztRQUN6QyxtQkFBYyxHQUFHLDBCQUEwQixDQUFDO1FBQzVDLG1CQUFjLEdBQUcsMEJBQTBCLENBQUM7UUFDNUMsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixtQkFBYyxHQUFHLHFCQUFxQixDQUFDO1FBQ3ZDLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxXQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ2xCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxpQkFBWSxHQUFHLGlCQUFpQixDQUFDO1FBQ2pDLFdBQU0sR0FBRyxXQUFX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LGdCQUFnQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsLCBMT0NBTEVfSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBEYXRlVGltZUZvcm1hdFBhcnQgPSBJbnRsLkRhdGVUaW1lRm9ybWF0UGFydDtcblxuaW50ZXJmYWNlIFRpbWVGb3JtYXRQYXJ0cyB7XG4gIGhvdXI6IHN0cmluZztcbiAgbWludXRlOiBzdHJpbmc7XG4gIGRheVBlcmlvZD86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdm9MYWJlbFNlcnZpY2Uge1xuICBmaWx0ZXJzID0gJ0ZpbHRlcic7XG4gIGNsZWFyID0gJ0NsZWFyJztcbiAgc29ydCA9ICdTb3J0JztcbiAgZGlzdHJpYnV0aW9uTGlzdE93bmVyID0gJ093bmVyJztcbiAgZGF0ZUFkZGVkID0gJ0RhdGUgQWRkZWQnO1xuICBlbXB0eVRhYmxlTWVzc2FnZSA9ICdObyBSZWNvcmRzIHRvIGRpc3BsYXkuLi4nO1xuICBub01hdGNoaW5nUmVjb3Jkc01lc3NhZ2UgPSAnTm8gTWF0Y2hpbmcgUmVjb3Jkcyc7XG4gIGVycm9yZWRUYWJsZU1lc3NhZ2UgPSAnT29wcyEgQW4gZXJyb3Igb2NjdXJyZWQuJztcbiAgcGlja2VyRXJyb3IgPSAnT29wcyEgQW4gZXJyb3Igb2NjdXJyZWQuJztcbiAgcGlja2VyVGV4dEZpZWxkRW1wdHkgPSAnQmVnaW4gdHlwaW5nIHRvIHNlZSByZXN1bHRzLic7XG4gIHBpY2tlckVtcHR5ID0gJ05vIHJlc3VsdHMgdG8gZGlzcGxheS4uLic7XG4gIHF1aWNrTm90ZUVycm9yID0gJ09vcHMhIEFuIGVycm9yIG9jY3VycmVkLic7XG4gIHF1aWNrTm90ZUVtcHR5ID0gJ05vIHJlc3VsdHMgdG8gZGlzcGxheS4uLic7XG4gIHJlcXVpcmVkID0gJ1JlcXVpcmVkJztcbiAgbnVtYmVyVG9vTGFyZ2UgPSAnTnVtYmVyIGlzIHRvbyBsYXJnZSc7XG4gIHNhdmUgPSAnU2F2ZSc7XG4gIGNhbmNlbCA9ICdDYW5jZWwnO1xuICBuZXh0ID0gJ05leHQnO1xuICBpdGVtc1BlclBhZ2UgPSAnSXRlbXMgcGVyIHBhZ2U6JztcbiAgc2VsZWN0ID0gJ1NlbGVjdC4uLic7XG4gIHNlbGVjdGVkID0gJ1NlbGVjdGVkJztcbiAgc2VsZWN0QWxsT25QYWdlID0gJ1NlbGVjdCBhbGwgb24gcGFnZSc7XG4gIGRlc2VsZWN0QWxsID0gJ0Rlc2VsZWN0IGFsbCc7XG4gIHJlZnJlc2ggPSAnUmVmcmVzaCc7XG4gIGNsb3NlID0gJ0Nsb3NlJztcbiAgbW92ZSA9ICdNb3ZlJztcbiAgc3RhcnREYXRlID0gJ1N0YXJ0IERhdGUnO1xuICBlbmREYXRlID0gJ0VuZCBEYXRlJztcbiAgbW9yZSA9ICdtb3JlJztcbiAgY2xlYXJBbGwgPSAnQ0xFQVIgQUxMJztcbiAgY2xlYXJBbGxOb3JtYWxDYXNlID0gJ0NsZWFyIEFsbCc7XG4gIGNsZWFyU29ydCA9ICdDbGVhciBTb3J0JztcbiAgY2xlYXJGaWx0ZXIgPSAnQ2xlYXIgRmlsdGVyJztcbiAgdG9kYXkgPSAnVG9kYXknO1xuICBub3cgPSAnTm93JztcbiAgaXNSZXF1aXJlZCA9ICdpcyByZXF1aXJlZCc7XG4gIG5vdFZhbGlkWWVhciA9ICdpcyBub3QgYSB2YWxpZCB5ZWFyJztcbiAgaXNUb29MYXJnZSA9ICdpcyB0b28gbGFyZ2UnO1xuICBpbnZhbGlkQWRkcmVzcyA9ICdyZXF1aXJlcyBhdCBsZWFzdCBvbmUgZmllbGQgZmlsbGVkIG91dCc7XG4gIGludmFsaWRFbWFpbCA9ICdyZXF1aXJlcyBhIHZhbGlkIGVtYWlsIChleC4gYWJjQDEyMy5jb20pJztcbiAgbWluTGVuZ3RoID0gJ2lzIHJlcXVpcmVkIHRvIGJlIGEgbWluaW11bSBsZW5ndGggb2YnO1xuICBwYXN0MURheSA9ICdQYXN0IDEgRGF5JztcbiAgcGFzdDdEYXlzID0gJ1Bhc3QgNyBEYXlzJztcbiAgcGFzdDMwRGF5cyA9ICdQYXN0IDMwIERheXMnO1xuICBwYXN0OTBEYXlzID0gJ1Bhc3QgOTAgRGF5cyc7XG4gIHBhc3QxWWVhciA9ICdQYXN0IDEgWWVhcic7XG4gIG5leHQxRGF5ID0gJ05leHQgMSBEYXknO1xuICBuZXh0N0RheXMgPSAnTmV4dCA3IERheXMnO1xuICBuZXh0MzBEYXlzID0gJ05leHQgMzAgRGF5cyc7XG4gIG5leHQ5MERheXMgPSAnTmV4dCA5MCBEYXlzJztcbiAgbmV4dDFZZWFyID0gJ05leHQgMSBZZWFyJztcbiAgY3VzdG9tRGF0ZVJhbmdlID0gJ0N1c3RvbSBEYXRlIFJhbmdlJztcbiAgYmFja1RvUHJlc2V0RmlsdGVycyA9ICdCYWNrIHRvIFByZXNldCBGaWx0ZXJzJztcbiAgb2tHb3RJdCA9ICdPaywgR290IGl0JztcbiAgYWRkcmVzcyA9ICdBZGRyZXNzJztcbiAgYWRkcmVzczEgPSAnQWRkcmVzcyc7XG4gIGFwdCA9ICdBcHQnOyAvLyBUT0RPIGRlbGV0ZVxuICBhZGRyZXNzMiA9ICdBcHQnO1xuICBjaXR5ID0gJ0NpdHkgLyBMb2NhbGl0eSc7XG4gIHN0YXRlID0gJ1N0YXRlIC8gUmVnaW9uJztcbiAgemlwID0gJ1Bvc3RhbCBDb2RlJztcbiAgemlwQ29kZSA9ICdQb3N0YWwgQ29kZSc7IC8vIFRPRE8gZGVsZXRlXG4gIGNvdW50cnkgPSAnQ291bnRyeSc7XG4gIG9yID0gJ29yJztcbiAgY2xpY2tUb0Jyb3dzZSA9ICdjbGljayB0byBicm93c2UnO1xuICBjaG9vc2VBRmlsZSA9ICdDaG9vc2UgYSBmaWxlJztcbiAgbm8gPSAnTm8nO1xuICB5ZXMgPSAnWWVzJztcbiAgc2VhcmNoID0gJ1NFQVJDSCc7XG4gIG5vSXRlbXMgPSAnVGhlcmUgYXJlIG5vIGl0ZW1zJztcbiAgZGF0ZUZvcm1hdCA9ICdNTS9kZC95eXl5JztcbiAgZGF0ZUZvcm1hdFBsYWNlaG9sZGVyID0gJ01NL0REL1lZWVknO1xuICB0aW1lRm9ybWF0UGxhY2Vob2xkZXJBTSA9ICdoaDptbSBBTSc7XG4gIHRpbWVGb3JtYXRQbGFjZWhvbGRlcjI0SG91ciA9ICdISDptbSc7XG4gIHRpbWVGb3JtYXRBTSA9ICdBTSc7XG4gIHRpbWVGb3JtYXRQTSA9ICdQTSc7XG4gIGNvbmZpcm1DaGFuZ2VzTW9kYWxNZXNzYWdlID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjaGFuZ2UgdGhpcyBmaWVsZD8nO1xuICBwcm9tcHRNb2RhbE1lc3NhZ2UgPSAnRG8geW91IHdhbnQgdG8gcGVyZm9ybSB0aGUgZm9sbG93aW5nIGNoYW5nZXM/JztcbiAgYXN5bmNGYWlsdXJlID0gJ0FzeW5jIHZhbGlkYXRpb24gd2FzIG5vdCBjYWxsZWQgd2l0aGluIHRoZSAxMHMgdGhyZXNob2xkLCB5b3UgbWlnaHQgd2FudCB0byByZWxvYWQgdGhlIHBhZ2UgdG8gdHJ5IGFnYWluJztcbiAgcHJldmlvdXMgPSAnUHJldmlvdXMnO1xuICBhY3Rpb25zID0gJ0FjdGlvbnMnO1xuICBhbGwgPSAnQWxsJztcbiAgZ3JvdXBlZE11bHRpUGlja2VyRW1wdHkgPSAnTm8gaXRlbXMgdG8gZGlzcGxheSc7XG4gIGdyb3VwZWRNdWx0aVBpY2tlclNlbGVjdENhdGVnb3J5ID0gJ1NlbGVjdCBhIGNhdGVnb3J5IGZyb20gdGhlIHJpZ2h0IHRvIGdldCBzdGFydGVkJztcbiAgYWRkID0gJ0FkZCc7XG4gIGVuY3J5cHRlZEZpZWxkVG9vbHRpcCA9ICdUaGlzIGRhdGEgaGFzIGJlZW4gc3RvcmVkIGF0IHRoZSBoaWdoZXN0IGxldmVsIG9mIHNlY3VyaXR5JztcbiAgbm9TdGF0ZXNGb3JDb3VudHJ5ID0gJ05vIHN0YXRlcyBhdmFpbGFibGUgZm9yIHRoZSBzZWxlY3RlZCBjb3VudHJ5JztcbiAgc2VsZWN0Q291bnRyeUZpcnN0ID0gJ1BsZWFzZSBzZWxlY3QgYSBjb3VudHJ5IGJlZm9yZSBzZWxlY3RpbmcgYSBzdGF0ZSc7XG4gIGludmFsaWRJbnRlZ2VySW5wdXQgPSAnU3BlY2lhbCBjaGFyYWN0ZXJzIGFyZSBub3QgYWxsb3dlZCBmb3InO1xuICBtYXhSZWNvcmRzUmVhY2hlZCA9ICdTb3JyeSwgeW91IGhhdmUgcmVhY2hlZCB0aGUgbWF4aW11bSBudW1iZXIgb2YgcmVjb3JkcyBhbGxvd2VkIGZvciB0aGlzIGZpZWxkJztcbiAgc2VsZWN0RmlsdGVyT3B0aW9ucyA9ICdQbGVhc2Ugc2VsZWN0IG9uZSBvciBtb3JlIGZpbHRlciBvcHRpb25zIGJlbG93Lic7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KExPQ0FMRV9JRClcbiAgICBwdWJsaWMgdXNlckxvY2FsZTogc3RyaW5nID0gJ2VuLVVTJyxcbiAgKSB7fVxuXG4gIG1heGxlbmd0aE1ldFdpdGhGaWVsZChmaWVsZDogc3RyaW5nLCBtYXhsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBTb3JyeSwgeW91IGhhdmUgcmVhY2hlZCB0aGUgbWF4aW11bSBjaGFyYWN0ZXIgY291bnQgb2YgJHttYXhsZW5ndGh9IGZvciAke2ZpZWxkfS5gO1xuICB9XG5cbiAgbWF4bGVuZ3RoTWV0KG1heGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFNvcnJ5LCB5b3UgaGF2ZSByZWFjaGVkIHRoZSBtYXhpbXVtIGNoYXJhY3RlciBjb3VudCBvZiAke21heGxlbmd0aH0gZm9yIHRoaXMgZmllbGQuYDtcbiAgfVxuXG4gIGludmFsaWRNYXhsZW5ndGhXaXRoRmllbGQoZmllbGQ6IHN0cmluZywgbWF4bGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgU29ycnksIHlvdSBoYXZlIGV4Y2VlZGVkIHRoZSBtYXhpbXVtIGNoYXJhY3RlciBjb3VudCBvZiAke21heGxlbmd0aH0gZm9yICR7ZmllbGR9LmA7XG4gIH1cblxuICBpbnZhbGlkTWF4bGVuZ3RoKG1heGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFNvcnJ5LCB5b3UgaGF2ZSBleGNlZWRlZCB0aGUgbWF4aW11bSBjaGFyYWN0ZXIgY291bnQgb2YgJHttYXhsZW5ndGh9IGZvciB0aGlzIGZpZWxkLmA7XG4gIH1cblxuICBnZXRUb01hbnlQbHVzTW9yZSh0b01hbnk6IHsgcXVhbnRpdHk6IG51bWJlciB9KTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCske3RvTWFueS5xdWFudGl0eX0gbW9yZWA7XG4gIH1cblxuICBzZWxlY3RlZFJlY29yZHMoc2VsZWN0ZWQ6IG51bWJlcikge1xuICAgIHJldHVybiBgJHtzZWxlY3RlZH0gcmVjb3JkcyBhcmUgc2VsZWN0ZWQuYDtcbiAgfVxuXG4gIHNob3dpbmdYb2ZYUmVzdWx0cyhzaG93bjogbnVtYmVyLCB0b3RhbDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGBTaG93aW5nICR7c2hvd259IG9mICR7dG90YWx9IFJlc3VsdHMuYDtcbiAgfVxuXG4gIHRvdGFsUmVjb3Jkcyh0b3RhbDogbnVtYmVyLCBzZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIHJldHVybiBzZWxlY3QgPyBgU2VsZWN0IGFsbCAke3RvdGFsfSByZWNvcmRzLmAgOiBgRGUtc2VsZWN0IHJlbWFpbmluZyAke3RvdGFsfSByZWNvcmRzLmA7XG4gIH1cblxuICBmb3JtYXREYXRlV2l0aEZvcm1hdCh2YWx1ZTogYW55LCBmb3JtYXQ6IEludGwuRGF0ZVRpbWVGb3JtYXRPcHRpb25zKSB7XG4gICAgbGV0IGRhdGUgPSB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgPyB2YWx1ZSA6IG5ldyBEYXRlKHZhbHVlKTtcbiAgICBpZiAoZGF0ZS5nZXRUaW1lKCkgIT09IGRhdGUuZ2V0VGltZSgpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLnVzZXJMb2NhbGUsIGZvcm1hdCkuZm9ybWF0KGRhdGUpO1xuICB9XG5cbiAgZm9ybWF0VGltZVdpdGhGb3JtYXQodmFsdWU6IGFueSwgZm9ybWF0OiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyk6IHN0cmluZyB7XG4gICAgbGV0IGRhdGUgPSB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgPyB2YWx1ZSA6IG5ldyBEYXRlKHZhbHVlKTtcbiAgICBpZiAoZGF0ZS5nZXRUaW1lKCkgIT09IGRhdGUuZ2V0VGltZSgpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGxldCB0aW1lUGFydHM6IHsgW3R5cGU6IHN0cmluZ106IHN0cmluZyB9ID0gIEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy51c2VyTG9jYWxlLCBmb3JtYXQpLmZvcm1hdFRvUGFydHMoZGF0ZSkucmVkdWNlKChvYmosIHBhcnQpID0+IHtcbiAgICAgIG9ialtwYXJ0LnR5cGVdID0gcGFydC52YWx1ZTtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSwge30pO1xuICAgIGNvbnN0IGRheXBlcmlvZCA9IHRpbWVQYXJ0cy5kYXlwZXJpb2QgPyB0aW1lUGFydHMuZGF5cGVyaW9kIDogJyc7XG4gICAgcmV0dXJuIGAke3RpbWVQYXJ0cy5ob3VyfToke3RpbWVQYXJ0cy5taW51dGV9JHtkYXlwZXJpb2R9YDtcbiAgfVxuXG4gIGdldFdlZWtkYXlzKCk6IHN0cmluZ1tdIHtcbiAgICBmdW5jdGlvbiBnZXREYXkoZGF5T2ZXZWVrKSB7XG4gICAgICBsZXQgZHQgPSBuZXcgRGF0ZSgpO1xuICAgICAgcmV0dXJuIGR0LnNldERhdGUoZHQuZ2V0RGF0ZSgpIC0gZHQuZ2V0RGF5KCkgKyBkYXlPZldlZWspO1xuICAgIH1cblxuICAgIHJldHVybiBbZ2V0RGF5KDApLCBnZXREYXkoMSksIGdldERheSgyKSwgZ2V0RGF5KDMpLCBnZXREYXkoNCksIGdldERheSg1KSwgZ2V0RGF5KDYpXS5yZWR1Y2UoKHdlZWtkYXlzLCBkdCkgPT4ge1xuICAgICAgd2Vla2RheXMucHVzaChuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLnVzZXJMb2NhbGUsIHsgd2Vla2RheTogJ2xvbmcnIH0pLmZvcm1hdChkdCkpO1xuICAgICAgcmV0dXJuIHdlZWtkYXlzO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIGdldE1vbnRocygpOiBzdHJpbmdbXSB7XG4gICAgZnVuY3Rpb24gZ2V0TW9udGgobW9udGgpIHtcbiAgICAgIGxldCBkdCA9IG5ldyBEYXRlKCk7XG4gICAgICByZXR1cm4gZHQuc2V0TW9udGgobW9udGgsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICBnZXRNb250aCgwKSxcbiAgICAgIGdldE1vbnRoKDEpLFxuICAgICAgZ2V0TW9udGgoMiksXG4gICAgICBnZXRNb250aCgzKSxcbiAgICAgIGdldE1vbnRoKDQpLFxuICAgICAgZ2V0TW9udGgoNSksXG4gICAgICBnZXRNb250aCg2KSxcbiAgICAgIGdldE1vbnRoKDcpLFxuICAgICAgZ2V0TW9udGgoOCksXG4gICAgICBnZXRNb250aCg5KSxcbiAgICAgIGdldE1vbnRoKDEwKSxcbiAgICAgIGdldE1vbnRoKDExKSxcbiAgICBdLnJlZHVjZSgobW9udGhzLCBkdCkgPT4ge1xuICAgICAgbW9udGhzLnB1c2gobmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy51c2VyTG9jYWxlLCB7IG1vbnRoOiAnbG9uZycgfSkuZm9ybWF0KGR0KSk7XG4gICAgICByZXR1cm4gbW9udGhzO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIGdldFByb3BlcnR5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpc1t2YWx1ZV07XG4gIH1cblxuICBnZXRSYW5nZVRleHQocGFnZTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBsZW5ndGg6IG51bWJlciwgc2hvcnQ6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGlmIChsZW5ndGggPT09IDAgfHwgcGFnZVNpemUgPT09IDApIHtcbiAgICAgIHJldHVybiBgRGlzcGxheWluZyAwIG9mICR7bGVuZ3RofWA7XG4gICAgfVxuXG4gICAgbGVuZ3RoID0gTWF0aC5tYXgobGVuZ3RoLCAwKTtcblxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBwYWdlICogcGFnZVNpemU7XG5cbiAgICAvLyBJZiB0aGUgc3RhcnQgaW5kZXggZXhjZWVkcyB0aGUgbGlzdCBsZW5ndGgsIGRvIG5vdCB0cnkgYW5kIGZpeCB0aGUgZW5kIGluZGV4IHRvIHRoZSBlbmQuXG4gICAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4IDwgbGVuZ3RoID8gTWF0aC5taW4oc3RhcnRJbmRleCArIHBhZ2VTaXplLCBsZW5ndGgpIDogc3RhcnRJbmRleCArIHBhZ2VTaXplO1xuXG4gICAgcmV0dXJuIHNob3J0ID8gYCR7c3RhcnRJbmRleCArIDF9IC0gJHtlbmRJbmRleH0vJHtsZW5ndGh9YCA6IGBEaXNwbGF5aW5nICR7c3RhcnRJbmRleCArIDF9IC0gJHtlbmRJbmRleH0gb2YgJHtsZW5ndGh9YDtcbiAgfVxuXG4gIGZvcm1hdEN1cnJlbmN5KHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGxldCBvcHRpb25zID0geyBzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdVU0QnIH07XG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLnVzZXJMb2NhbGUsIG9wdGlvbnMpLmZvcm1hdCh2YWx1ZSk7XG4gIH1cblxuICBmb3JtYXRCaWdEZWNpbWFsKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGxldCB2YWx1ZUFzU3RyaW5nID0gdmFsdWUgPyB2YWx1ZS50b1N0cmluZygpIDogJzAnO1xuICAgIC8vIHRydW5jYXRlIGF0IHR3byBkZWNpbWFscyAoZG8gbm90IHJvdW5kKVxuICAgIGNvbnN0IGRlY2ltYWxJbmRleCA9IHZhbHVlQXNTdHJpbmcuaW5kZXhPZignLicpO1xuICAgIGlmIChkZWNpbWFsSW5kZXggPiAtMSAmJiBkZWNpbWFsSW5kZXggKyAzIDwgdmFsdWVBc1N0cmluZy5sZW5ndGgpIHtcbiAgICAgIHZhbHVlQXNTdHJpbmcgPSB2YWx1ZUFzU3RyaW5nLnN1YnN0cmluZygwLCB2YWx1ZUFzU3RyaW5nLmluZGV4T2YoJy4nKSArIDMpO1xuICAgIH1cbiAgICAvLyBjb252ZXJ0IGJhY2sgdG8gbnVtYmVyXG4gICAgY29uc3QgdHJ1bmNhdGVkVmFsdWUgPSBOdW1iZXIodmFsdWVBc1N0cmluZyk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgc3R5bGU6ICdkZWNpbWFsJywgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfTtcbiAgICBsZXQgX3ZhbHVlID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KHRoaXMudXNlckxvY2FsZSwgb3B0aW9ucykuZm9ybWF0KHRydW5jYXRlZFZhbHVlKTtcbiAgICBpZiAodmFsdWUgPCAwKSB7XG4gICAgICBfdmFsdWUgPSBgKCR7X3ZhbHVlLnNsaWNlKDEpfSlgO1xuICAgIH1cbiAgICByZXR1cm4gX3ZhbHVlO1xuICB9XG5cbiAgZm9ybWF0TnVtYmVyKHZhbHVlOiBhbnksIG9wdGlvbnM/OiBJbnRsLk51bWJlckZvcm1hdE9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy51c2VyTG9jYWxlLCBvcHRpb25zKS5mb3JtYXQodmFsdWUpO1xuICB9XG5cbiAgZm9ybWF0RGF0ZVNob3J0KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGxldCBvcHRpb25zOiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIC8vIEREL01NL1lZWVksIEhIOk1NIEEgLSAwMi8xNC8yMDE3LCAxOjE3IFBNXG4gICAgICBtb250aDogJzItZGlnaXQnLFxuICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICB9O1xuICAgIGxldCBfdmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJyA/IG5ldyBEYXRlKCkgOiBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMudXNlckxvY2FsZSwgb3B0aW9ucykuZm9ybWF0KF92YWx1ZSk7XG4gIH1cblxuICBmb3JtYXRUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGxldCBvcHRpb25zOiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIC8vIEhIOk1NIEEgLSAxOjE3IFBNXG4gICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICB9O1xuICAgIGxldCBfdmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJyA/IG5ldyBEYXRlKCkgOiBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMudXNlckxvY2FsZSwgb3B0aW9ucykuZm9ybWF0KF92YWx1ZSk7XG4gIH1cblxuICBmb3JtYXREYXRlKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGxldCBvcHRpb25zOiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIC8vIEREL01NL1lZWVkgLSAwMi8xNC8yMDE3XG4gICAgICBtb250aDogJzItZGlnaXQnLFxuICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgfTtcbiAgICBsZXQgX3ZhbHVlID0gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycgPyBuZXcgRGF0ZSgpIDogbmV3IERhdGUodmFsdWUpO1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLnVzZXJMb2NhbGUsIG9wdGlvbnMpLmZvcm1hdChfdmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBOT1ZPX0VMRU1FTlRTX0xBQkVMU19QUk9WSURFUlMgPSBbeyBwcm92aWRlOiBOb3ZvTGFiZWxTZXJ2aWNlLCB1c2VDbGFzczogTm92b0xhYmVsU2VydmljZSB9XTtcbiJdfQ==