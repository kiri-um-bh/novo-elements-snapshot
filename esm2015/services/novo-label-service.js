/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Injectable, Inject, Optional, LOCALE_ID } from '@angular/core';
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
        return [getDay(0), getDay(1), getDay(2), getDay(3), getDay(4), getDay(5), getDay(6)].reduce((weekdays, dt) => {
            weekdays.push(new Intl.DateTimeFormat(this.userLocale, { weekday: 'long' }).format(dt));
            return weekdays;
        }, []);
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
        ].reduce((months, dt) => {
            months.push(new Intl.DateTimeFormat(this.userLocale, { month: 'long' }).format(dt));
            return months;
        }, []);
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
export const NOVO_ELEMENTS_LABELS_PROVIDERS = [{ provide: NovoLabelService, useClass: NovoLabelService }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm92by1sYWJlbC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHeEUsTUFBTTs7OztJQTBGSixZQUdTLGFBQXFCLE9BQU87UUFBNUIsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7UUE1RnJDLFlBQU8sR0FBRyxRQUFRLENBQUM7UUFDbkIsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsMEJBQXFCLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLGNBQVMsR0FBRyxZQUFZLENBQUM7UUFDekIsc0JBQWlCLEdBQUcsMEJBQTBCLENBQUM7UUFDL0MsNkJBQXdCLEdBQUcscUJBQXFCLENBQUM7UUFDakQsd0JBQW1CLEdBQUcsMEJBQTBCLENBQUM7UUFDakQsZ0JBQVcsR0FBRywwQkFBMEIsQ0FBQztRQUN6QyxnQkFBVyxHQUFHLDBCQUEwQixDQUFDO1FBQ3pDLG1CQUFjLEdBQUcsMEJBQTBCLENBQUM7UUFDNUMsbUJBQWMsR0FBRywwQkFBMEIsQ0FBQztRQUM1QyxhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcscUJBQXFCLENBQUM7UUFDdkMsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLFdBQU0sR0FBRyxRQUFRLENBQUM7UUFDbEIsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLGlCQUFZLEdBQUcsaUJBQWlCLENBQUM7UUFDakMsV0FBTSxHQUFHLFdBQVcsQ0FBQztRQUNyQixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsb0JBQW9CLENBQUM7UUFDdkMsZ0JBQVcsR0FBRyxjQUFjLENBQUM7UUFDN0IsWUFB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SUFDdEMsd0NBQW9COztJQUNwQix3Q0FBb0I7O0lBQ3BCLHNEQUEyRTs7SUFDM0UsOENBQXFFOztJQUNyRSx3Q0FBMEg7O0lBQzFILG9DQUFzQjs7SUFDdEIsbUNBQW9COztJQUNwQiwrQkFBWTs7SUFDWixtREFBZ0Q7O0lBQ2hELDREQUFxRjs7SUFDckYsK0JBQVk7O0lBQ1osaURBQXFGOztJQUNyRiw4Q0FBb0U7O0lBQ3BFLDhDQUF3RTs7SUFDeEUsK0NBQStEOztJQUc3RCxzQ0FFbUM7OztBQStJdkMsTUFBTSxPQUFPLDhCQUE4QixHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWwsIExPQ0FMRV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm92b0xhYmVsU2VydmljZSB7XG4gIGZpbHRlcnMgPSAnRmlsdGVyJztcbiAgY2xlYXIgPSAnQ2xlYXInO1xuICBzb3J0ID0gJ1NvcnQnO1xuICBkaXN0cmlidXRpb25MaXN0T3duZXIgPSAnT3duZXInO1xuICBkYXRlQWRkZWQgPSAnRGF0ZSBBZGRlZCc7XG4gIGVtcHR5VGFibGVNZXNzYWdlID0gJ05vIFJlY29yZHMgdG8gZGlzcGxheS4uLic7XG4gIG5vTWF0Y2hpbmdSZWNvcmRzTWVzc2FnZSA9ICdObyBNYXRjaGluZyBSZWNvcmRzJztcbiAgZXJyb3JlZFRhYmxlTWVzc2FnZSA9ICdPb3BzISBBbiBlcnJvciBvY2N1cnJlZC4nO1xuICBwaWNrZXJFcnJvciA9ICdPb3BzISBBbiBlcnJvciBvY2N1cnJlZC4nO1xuICBwaWNrZXJFbXB0eSA9ICdObyByZXN1bHRzIHRvIGRpc3BsYXkuLi4nO1xuICBxdWlja05vdGVFcnJvciA9ICdPb3BzISBBbiBlcnJvciBvY2N1cnJlZC4nO1xuICBxdWlja05vdGVFbXB0eSA9ICdObyByZXN1bHRzIHRvIGRpc3BsYXkuLi4nO1xuICByZXF1aXJlZCA9ICdSZXF1aXJlZCc7XG4gIG51bWJlclRvb0xhcmdlID0gJ051bWJlciBpcyB0b28gbGFyZ2UnO1xuICBzYXZlID0gJ1NhdmUnO1xuICBjYW5jZWwgPSAnQ2FuY2VsJztcbiAgbmV4dCA9ICdOZXh0JztcbiAgaXRlbXNQZXJQYWdlID0gJ0l0ZW1zIHBlciBwYWdlOic7XG4gIHNlbGVjdCA9ICdTZWxlY3QuLi4nO1xuICBzZWxlY3RlZCA9ICdTZWxlY3RlZCc7XG4gIHNlbGVjdEFsbE9uUGFnZSA9ICdTZWxlY3QgYWxsIG9uIHBhZ2UnO1xuICBkZXNlbGVjdEFsbCA9ICdEZXNlbGVjdCBhbGwnO1xuICByZWZyZXNoID0gJ1JlZnJlc2gnO1xuICBjbG9zZSA9ICdDbG9zZSc7XG4gIG1vdmUgPSAnTW92ZSc7XG4gIHN0YXJ0RGF0ZSA9ICdTdGFydCBEYXRlJztcbiAgZW5kRGF0ZSA9ICdFbmQgRGF0ZSc7XG4gIG1vcmUgPSAnbW9yZSc7XG4gIGNsZWFyQWxsID0gJ0NMRUFSIEFMTCc7XG4gIGNsZWFyQWxsTm9ybWFsQ2FzZSA9ICdDbGVhciBBbGwnO1xuICBjbGVhclNvcnQgPSAnQ2xlYXIgU29ydCc7XG4gIGNsZWFyRmlsdGVyID0gJ0NsZWFyIEZpbHRlcic7XG4gIHRvZGF5ID0gJ1RvZGF5JztcbiAgbm93ID0gJ05vdyc7XG4gIGlzUmVxdWlyZWQgPSAnaXMgcmVxdWlyZWQnO1xuICBub3RWYWxpZFllYXIgPSAnaXMgbm90IGEgdmFsaWQgeWVhcic7XG4gIGlzVG9vTGFyZ2UgPSAnaXMgdG9vIGxhcmdlJztcbiAgaW52YWxpZEFkZHJlc3MgPSAncmVxdWlyZXMgYXQgbGVhc3Qgb25lIGZpZWxkIGZpbGxlZCBvdXQnO1xuICBpbnZhbGlkRW1haWwgPSAncmVxdWlyZXMgYSB2YWxpZCBlbWFpbCAoZXguIGFiY0AxMjMuY29tKSc7XG4gIG1pbkxlbmd0aCA9ICdpcyByZXF1aXJlZCB0byBiZSBhIG1pbmltdW0gbGVuZ3RoIG9mJztcbiAgcGFzdDFEYXkgPSAnUGFzdCAxIERheSc7XG4gIHBhc3Q3RGF5cyA9ICdQYXN0IDcgRGF5cyc7XG4gIHBhc3QzMERheXMgPSAnUGFzdCAzMCBEYXlzJztcbiAgcGFzdDkwRGF5cyA9ICdQYXN0IDkwIERheXMnO1xuICBwYXN0MVllYXIgPSAnUGFzdCAxIFllYXInO1xuICBuZXh0MURheSA9ICdOZXh0IDEgRGF5JztcbiAgbmV4dDdEYXlzID0gJ05leHQgNyBEYXlzJztcbiAgbmV4dDMwRGF5cyA9ICdOZXh0IDMwIERheXMnO1xuICBuZXh0OTBEYXlzID0gJ05leHQgOTAgRGF5cyc7XG4gIG5leHQxWWVhciA9ICdOZXh0IDEgWWVhcic7XG4gIGN1c3RvbURhdGVSYW5nZSA9ICdDdXN0b20gRGF0ZSBSYW5nZSc7XG4gIGJhY2tUb1ByZXNldEZpbHRlcnMgPSAnQmFjayB0byBQcmVzZXQgRmlsdGVycyc7XG4gIG9rR290SXQgPSAnT2ssIEdvdCBpdCc7XG4gIGFkZHJlc3MgPSAnQWRkcmVzcyc7XG4gIGFkZHJlc3MxID0gJ0FkZHJlc3MnO1xuICBhcHQgPSAnQXB0JzsgLy8gVE9ETyBkZWxldGVcbiAgYWRkcmVzczIgPSAnQXB0JztcbiAgY2l0eSA9ICdDaXR5IC8gTG9jYWxpdHknO1xuICBzdGF0ZSA9ICdTdGF0ZSAvIFJlZ2lvbic7XG4gIHppcCA9ICdQb3N0YWwgQ29kZSc7XG4gIHppcENvZGUgPSAnUG9zdGFsIENvZGUnOyAvLyBUT0RPIGRlbGV0ZVxuICBjb3VudHJ5ID0gJ0NvdW50cnknO1xuICBvciA9ICdvcic7XG4gIGNsaWNrVG9Ccm93c2UgPSAnY2xpY2sgdG8gYnJvd3NlJztcbiAgY2hvb3NlQUZpbGUgPSAnQ2hvb3NlIGEgZmlsZSc7XG4gIG5vID0gJ05vJztcbiAgeWVzID0gJ1llcyc7XG4gIHNlYXJjaCA9ICdTRUFSQ0gnO1xuICBub0l0ZW1zID0gJ1RoZXJlIGFyZSBubyBpdGVtcyc7XG4gIGRhdGVGb3JtYXQgPSAnTU0vZGQveXl5eSc7XG4gIGRhdGVGb3JtYXRQbGFjZWhvbGRlciA9ICdNTS9ERC9ZWVlZJztcbiAgdGltZUZvcm1hdFBsYWNlaG9sZGVyQU0gPSAnaGg6bW0gQU0nO1xuICB0aW1lRm9ybWF0UGxhY2Vob2xkZXIyNEhvdXIgPSAnSEg6bW0nO1xuICB0aW1lRm9ybWF0QU0gPSAnQU0nO1xuICB0aW1lRm9ybWF0UE0gPSAnUE0nO1xuICBjb25maXJtQ2hhbmdlc01vZGFsTWVzc2FnZSA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2hhbmdlIHRoaXMgZmllbGQ/JztcbiAgcHJvbXB0TW9kYWxNZXNzYWdlID0gJ0RvIHlvdSB3YW50IHRvIHBlcmZvcm0gdGhlIGZvbGxvd2luZyBjaGFuZ2VzPyc7XG4gIGFzeW5jRmFpbHVyZSA9ICdBc3luYyB2YWxpZGF0aW9uIHdhcyBub3QgY2FsbGVkIHdpdGhpbiB0aGUgMTBzIHRocmVzaG9sZCwgeW91IG1pZ2h0IHdhbnQgdG8gcmVsb2FkIHRoZSBwYWdlIHRvIHRyeSBhZ2Fpbic7XG4gIHByZXZpb3VzID0gJ1ByZXZpb3VzJztcbiAgYWN0aW9ucyA9ICdBY3Rpb25zJztcbiAgYWxsID0gJ0FsbCc7XG4gIGdyb3VwZWRNdWx0aVBpY2tlckVtcHR5ID0gJ05vIGl0ZW1zIHRvIGRpc3BsYXknO1xuICBncm91cGVkTXVsdGlQaWNrZXJTZWxlY3RDYXRlZ29yeSA9ICdTZWxlY3QgYSBjYXRlZ29yeSBmcm9tIHRoZSByaWdodCB0byBnZXQgc3RhcnRlZCc7XG4gIGFkZCA9ICdBZGQnO1xuICBlbmNyeXB0ZWRGaWVsZFRvb2x0aXAgPSAnVGhpcyBkYXRhIGhhcyBiZWVuIHN0b3JlZCBhdCB0aGUgaGlnaGVzdCBsZXZlbCBvZiBzZWN1cml0eSc7XG4gIG5vU3RhdGVzRm9yQ291bnRyeSA9ICdObyBzdGF0ZXMgYXZhaWxhYmxlIGZvciB0aGUgc2VsZWN0ZWQgY291bnRyeSc7XG4gIHNlbGVjdENvdW50cnlGaXJzdCA9ICdQbGVhc2Ugc2VsZWN0IGEgY291bnRyeSBiZWZvcmUgc2VsZWN0aW5nIGEgc3RhdGUnO1xuICBpbnZhbGlkSW50ZWdlcklucHV0ID0gJ1NwZWNpYWwgY2hhcmFjdGVycyBhcmUgbm90IGFsbG93ZWQgZm9yJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoTE9DQUxFX0lEKVxuICAgIHB1YmxpYyB1c2VyTG9jYWxlOiBzdHJpbmcgPSAnZW4tVVMnLFxuICApIHt9XG5cbiAgbWF4bGVuZ3RoTWV0V2l0aEZpZWxkKGZpZWxkOiBzdHJpbmcsIG1heGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFNvcnJ5LCB5b3UgaGF2ZSByZWFjaGVkIHRoZSBtYXhpbXVtIGNoYXJhY3RlciBjb3VudCBvZiAke21heGxlbmd0aH0gZm9yICR7ZmllbGR9LmA7XG4gIH1cblxuICBtYXhsZW5ndGhNZXQobWF4bGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgU29ycnksIHlvdSBoYXZlIHJlYWNoZWQgdGhlIG1heGltdW0gY2hhcmFjdGVyIGNvdW50IG9mICR7bWF4bGVuZ3RofSBmb3IgdGhpcyBmaWVsZC5gO1xuICB9XG5cbiAgaW52YWxpZE1heGxlbmd0aFdpdGhGaWVsZChmaWVsZDogc3RyaW5nLCBtYXhsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBTb3JyeSwgeW91IGhhdmUgZXhjZWVkZWQgdGhlIG1heGltdW0gY2hhcmFjdGVyIGNvdW50IG9mICR7bWF4bGVuZ3RofSBmb3IgJHtmaWVsZH0uYDtcbiAgfVxuXG4gIGludmFsaWRNYXhsZW5ndGgobWF4bGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgU29ycnksIHlvdSBoYXZlIGV4Y2VlZGVkIHRoZSBtYXhpbXVtIGNoYXJhY3RlciBjb3VudCBvZiAke21heGxlbmd0aH0gZm9yIHRoaXMgZmllbGQuYDtcbiAgfVxuXG4gIGdldFRvTWFueVBsdXNNb3JlKHRvTWFueTogeyBxdWFudGl0eTogbnVtYmVyIH0pOiBzdHJpbmcge1xuICAgIHJldHVybiBgKyR7dG9NYW55LnF1YW50aXR5fSBtb3JlYDtcbiAgfVxuXG4gIHNlbGVjdGVkUmVjb3JkcyhzZWxlY3RlZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGAke3NlbGVjdGVkfSByZWNvcmRzIGFyZSBzZWxlY3RlZC5gO1xuICB9XG5cbiAgc2hvd2luZ1hvZlhSZXN1bHRzKHNob3duOiBudW1iZXIsIHRvdGFsOiBudW1iZXIpIHtcbiAgICByZXR1cm4gYFNob3dpbmcgJHtzaG93bn0gb2YgJHt0b3RhbH0gUmVzdWx0cy5gO1xuICB9XG5cbiAgdG90YWxSZWNvcmRzKHRvdGFsOiBudW1iZXIsIHNlbGVjdDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIHNlbGVjdCA/IGBTZWxlY3QgYWxsICR7dG90YWx9IHJlY29yZHMuYCA6IGBEZS1zZWxlY3QgcmVtYWluaW5nICR7dG90YWx9IHJlY29yZHMuYDtcbiAgfVxuXG4gIGZvcm1hdERhdGVXaXRoRm9ybWF0KHZhbHVlOiBhbnksIGZvcm1hdDogSW50bC5EYXRlVGltZUZvcm1hdE9wdGlvbnMpIHtcbiAgICBsZXQgZGF0ZSA9IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IHZhbHVlIDogbmV3IERhdGUodmFsdWUpO1xuICAgIGlmIChkYXRlLmdldFRpbWUoKSAhPT0gZGF0ZS5nZXRUaW1lKCkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMudXNlckxvY2FsZSwgZm9ybWF0KS5mb3JtYXQoZGF0ZSk7XG4gIH1cblxuICBnZXRXZWVrZGF5cygpOiBzdHJpbmdbXSB7XG4gICAgZnVuY3Rpb24gZ2V0RGF5KGRheU9mV2Vlaykge1xuICAgICAgbGV0IGR0ID0gbmV3IERhdGUoKTtcbiAgICAgIHJldHVybiBkdC5zZXREYXRlKGR0LmdldERhdGUoKSAtIGR0LmdldERheSgpICsgZGF5T2ZXZWVrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW2dldERheSgwKSwgZ2V0RGF5KDEpLCBnZXREYXkoMiksIGdldERheSgzKSwgZ2V0RGF5KDQpLCBnZXREYXkoNSksIGdldERheSg2KV0ucmVkdWNlKCh3ZWVrZGF5cywgZHQpID0+IHtcbiAgICAgIHdlZWtkYXlzLnB1c2gobmV3IEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy51c2VyTG9jYWxlLCB7IHdlZWtkYXk6ICdsb25nJyB9KS5mb3JtYXQoZHQpKTtcbiAgICAgIHJldHVybiB3ZWVrZGF5cztcbiAgICB9LCBbXSk7XG4gIH1cblxuICBnZXRNb250aHMoKTogc3RyaW5nW10ge1xuICAgIGZ1bmN0aW9uIGdldE1vbnRoKG1vbnRoKSB7XG4gICAgICBsZXQgZHQgPSBuZXcgRGF0ZSgpO1xuICAgICAgcmV0dXJuIGR0LnNldE1vbnRoKG1vbnRoLCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAgZ2V0TW9udGgoMCksXG4gICAgICBnZXRNb250aCgxKSxcbiAgICAgIGdldE1vbnRoKDIpLFxuICAgICAgZ2V0TW9udGgoMyksXG4gICAgICBnZXRNb250aCg0KSxcbiAgICAgIGdldE1vbnRoKDUpLFxuICAgICAgZ2V0TW9udGgoNiksXG4gICAgICBnZXRNb250aCg3KSxcbiAgICAgIGdldE1vbnRoKDgpLFxuICAgICAgZ2V0TW9udGgoOSksXG4gICAgICBnZXRNb250aCgxMCksXG4gICAgICBnZXRNb250aCgxMSksXG4gICAgXS5yZWR1Y2UoKG1vbnRocywgZHQpID0+IHtcbiAgICAgIG1vbnRocy5wdXNoKG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMudXNlckxvY2FsZSwgeyBtb250aDogJ2xvbmcnIH0pLmZvcm1hdChkdCkpO1xuICAgICAgcmV0dXJuIG1vbnRocztcbiAgICB9LCBbXSk7XG4gIH1cblxuICBnZXRQcm9wZXJ0eSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXNbdmFsdWVdO1xuICB9XG5cbiAgZ2V0UmFuZ2VUZXh0KHBhZ2U6IG51bWJlciwgcGFnZVNpemU6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIsIHNob3J0OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBpZiAobGVuZ3RoID09PSAwIHx8IHBhZ2VTaXplID09PSAwKSB7XG4gICAgICByZXR1cm4gYERpc3BsYXlpbmcgMCBvZiAke2xlbmd0aH1gO1xuICAgIH1cblxuICAgIGxlbmd0aCA9IE1hdGgubWF4KGxlbmd0aCwgMCk7XG5cbiAgICBjb25zdCBzdGFydEluZGV4ID0gcGFnZSAqIHBhZ2VTaXplO1xuXG4gICAgLy8gSWYgdGhlIHN0YXJ0IGluZGV4IGV4Y2VlZHMgdGhlIGxpc3QgbGVuZ3RoLCBkbyBub3QgdHJ5IGFuZCBmaXggdGhlIGVuZCBpbmRleCB0byB0aGUgZW5kLlxuICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnRJbmRleCA8IGxlbmd0aCA/IE1hdGgubWluKHN0YXJ0SW5kZXggKyBwYWdlU2l6ZSwgbGVuZ3RoKSA6IHN0YXJ0SW5kZXggKyBwYWdlU2l6ZTtcblxuICAgIHJldHVybiBzaG9ydCA/IGAke3N0YXJ0SW5kZXggKyAxfSAtICR7ZW5kSW5kZXh9LyR7bGVuZ3RofWAgOiBgRGlzcGxheWluZyAke3N0YXJ0SW5kZXggKyAxfSAtICR7ZW5kSW5kZXh9IG9mICR7bGVuZ3RofWA7XG4gIH1cblxuICBmb3JtYXRDdXJyZW5jeSh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgb3B0aW9ucyA9IHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnVVNEJyB9O1xuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy51c2VyTG9jYWxlLCBvcHRpb25zKS5mb3JtYXQodmFsdWUpO1xuICB9XG5cbiAgZm9ybWF0TnVtYmVyKHZhbHVlOiBhbnksIG9wdGlvbnM/OiBJbnRsLk51bWJlckZvcm1hdE9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy51c2VyTG9jYWxlLCBvcHRpb25zKS5mb3JtYXQodmFsdWUpO1xuICB9XG5cbiAgZm9ybWF0RGF0ZVNob3J0KHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGxldCBvcHRpb25zOiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIC8vIEREL01NL1lZWVksIEhIOk1NIEEgLSAwMi8xNC8yMDE3LCAxOjE3IFBNXG4gICAgICBtb250aDogJzItZGlnaXQnLFxuICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICB9O1xuICAgIGxldCBfdmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJyA/IG5ldyBEYXRlKCkgOiBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMudXNlckxvY2FsZSwgb3B0aW9ucykuZm9ybWF0KF92YWx1ZSk7XG4gIH1cblxuICBmb3JtYXRUaW1lKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGxldCBvcHRpb25zOiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIC8vIEhIOk1NIEEgLSAxOjE3IFBNXG4gICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICB9O1xuICAgIGxldCBfdmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJyA/IG5ldyBEYXRlKCkgOiBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMudXNlckxvY2FsZSwgb3B0aW9ucykuZm9ybWF0KF92YWx1ZSk7XG4gIH1cblxuICBmb3JtYXREYXRlKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGxldCBvcHRpb25zOiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIC8vIEREL01NL1lZWVkgLSAwMi8xNC8yMDE3XG4gICAgICBtb250aDogJzItZGlnaXQnLFxuICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgfTtcbiAgICBsZXQgX3ZhbHVlID0gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycgPyBuZXcgRGF0ZSgpIDogbmV3IERhdGUodmFsdWUpO1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLnVzZXJMb2NhbGUsIG9wdGlvbnMpLmZvcm1hdChfdmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBOT1ZPX0VMRU1FTlRTX0xBQkVMU19QUk9WSURFUlMgPSBbeyBwcm92aWRlOiBOb3ZvTGFiZWxTZXJ2aWNlLCB1c2VDbGFzczogTm92b0xhYmVsU2VydmljZSB9XTtcbiJdfQ==