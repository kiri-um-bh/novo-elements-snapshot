/**
 * @fileoverview added by tsickle
 * Generated from: services/date-format/DateFormat.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Injectable } from '@angular/core';
// APP
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
var DateFormatService = /** @class */ (function () {
    function DateFormatService(labels) {
        this.labels = labels;
    }
    /**
     * @param {?} militaryTime
     * @return {?}
     */
    DateFormatService.prototype.getTimeMask = /**
     * @param {?} militaryTime
     * @return {?}
     */
    function (militaryTime) {
        var e_1, _a;
        /** @type {?} */
        var mask = [/\d/, /\d/, /:/, /\d/, /\d/];
        /** @type {?} */
        var timeFormatArray = [];
        /** @type {?} */
        var timeFormat = this.labels.timeFormatPlaceholderAM.toLowerCase();
        if (militaryTime) {
            return mask;
        }
        else {
            timeFormatArray = timeFormat.split('hh:mm');
            if (timeFormatArray && timeFormatArray.length) {
                mask = [];
                try {
                    for (var timeFormatArray_1 = tslib_1.__values(timeFormatArray), timeFormatArray_1_1 = timeFormatArray_1.next(); !timeFormatArray_1_1.done; timeFormatArray_1_1 = timeFormatArray_1.next()) {
                        var timeFormatPart = timeFormatArray_1_1.value;
                        if (timeFormatPart === '') {
                            mask = mask.concat([/\d/, /\d|:/, /:|\d/, /\d|\w|\s/, /\d|\s|\w/]);
                        }
                        else if (timeFormatPart.length) {
                            for (var i = 0; i < timeFormatPart.length; i++) {
                                mask.push(/\s|\w|\d|\./);
                            }
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (timeFormatArray_1_1 && !timeFormatArray_1_1.done && (_a = timeFormatArray_1.return)) _a.call(timeFormatArray_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
        return mask;
    };
    /**
     * @return {?}
     */
    DateFormatService.prototype.getDateMask = /**
     * @return {?}
     */
    function () {
        return [/\d/, /\d|\/|\.|\-/, /\/|\.|\-|\d/, /\d|\/|\.|\-/, /\d|\/|\.|\-/, /\d|\/|\.|\-/, /\d|\/|\.|\-/, /\d|\/|\.|\-/, /\d/, /\d/];
    };
    /**
     * @param {?=} militaryTime
     * @return {?}
     */
    DateFormatService.prototype.getDateTimeMask = /**
     * @param {?=} militaryTime
     * @return {?}
     */
    function (militaryTime) {
        if (militaryTime === void 0) { militaryTime = false; }
        return tslib_1.__spread(this.getDateMask(), [/\,?/, /\s/], this.getTimeMask(militaryTime));
    };
    /**
     * @param {?} militaryTime
     * @return {?}
     */
    DateFormatService.prototype.getTimePlaceHolder = /**
     * @param {?} militaryTime
     * @return {?}
     */
    function (militaryTime) {
        if (militaryTime) {
            return this.labels.timeFormatPlaceholder24Hour;
        }
        return this.labels.timeFormatPlaceholderAM;
    };
    /**
     * @param {?} dateString
     * @return {?}
     */
    DateFormatService.prototype.parseDateString = /**
     * @param {?} dateString
     * @return {?}
     */
    function (dateString) {
        /** @type {?} */
        var dateFormat = this.labels.dateFormatString();
        /** @type {?} */
        var dateFormatRegex = /(\w+)[\/|\.|\-](\w+)[\/|\.|\-](\w+)/gi;
        /** @type {?} */
        var dateValueRegex = /(\d+)[\/|\.|\-](\d+)[\/|\.|\-](\d+)/gi;
        /** @type {?} */
        var dateFormatTokens;
        /** @type {?} */
        var dateValueTokens;
        /** @type {?} */
        var year;
        /** @type {?} */
        var month;
        /** @type {?} */
        var day;
        /** @type {?} */
        var date = new Date();
        if (Helpers.isEmpty(dateFormat)) {
            // Default to MM/dd/yyyy
            dateFormat = 'mm/dd/yyyy';
        }
        else {
            dateFormat = dateFormat.toLowerCase();
        }
        dateFormatTokens = dateFormatRegex.exec(dateFormat);
        dateValueTokens = dateValueRegex.exec(dateString);
        if (dateFormatTokens && dateFormatTokens.length === 4 && dateValueTokens && dateValueTokens.length === 4) {
            for (var i = 1; i < 4; i++) {
                if (dateFormatTokens[i].includes('m')) {
                    month = parseInt(dateValueTokens[i], 10) - 1;
                }
                else if (dateFormatTokens[i].includes('d')) {
                    day = parseInt(dateValueTokens[i], 10);
                }
                else {
                    year = parseInt(dateValueTokens[i], 10);
                }
            }
            if (month >= 0 && month <= 11 && year > 1900 && day > 0 && day <= 31) {
                date = new Date(year, month, day);
            }
        }
        else if (dateFormatTokens && dateFormatTokens.length === 4 && dateString.length >= 1) {
            /** @type {?} */
            var twoTokens = /\d{1,4}(\/|\.|\-)(\d{1,2})/.exec(dateString);
            /** @type {?} */
            var oneToken = /^(\d{1,4})$/.exec(dateString);
            /** @type {?} */
            var delimiter = /\w+(\/|\.|\-)\w+[\/|\.|\-]\w+/gi.exec(dateFormat);
            /** @type {?} */
            var dateStringWithDelimiter = dateString[dateString.length - 1].match(/\/|\.|\-/);
            if (twoTokens && twoTokens.length === 3 && this.isValidDatePart(twoTokens[2], dateFormatTokens[2]) && !dateStringWithDelimiter) {
                dateString = "" + dateString + delimiter[1];
            }
            else if (oneToken && oneToken.length === 2 && this.isValidDatePart(oneToken[1], dateFormatTokens[1]) && !dateStringWithDelimiter) {
                dateString = "" + dateString + delimiter[1];
            }
        }
        return [date, dateString];
    };
    /**
     * @param {?} timeString
     * @param {?} militaryTime
     * @return {?}
     */
    DateFormatService.prototype.parseTimeString = /**
     * @param {?} timeString
     * @param {?} militaryTime
     * @return {?}
     */
    function (timeString, militaryTime) {
        var e_2, _a;
        /** @type {?} */
        var value = new Date();
        /** @type {?} */
        var timeStringParts;
        /** @type {?} */
        var amFormat = this.labels.timeFormatAM;
        /** @type {?} */
        var pmFormat = this.labels.timeFormatPM;
        if (!(timeString && timeString.includes(':'))) {
            return [value, timeString];
        }
        if (!militaryTime && amFormat && pmFormat) {
            /** @type {?} */
            var splits = [];
            /** @type {?} */
            var pm = false;
            amFormat = this.labels.timeFormatAM.toLowerCase();
            pmFormat = this.labels.timeFormatPM.toLowerCase();
            timeString = timeString.toLowerCase();
            if (timeString.includes(amFormat)) {
                splits = timeString.split(amFormat);
            }
            else if (timeString.includes(pmFormat)) {
                splits = timeString.split(pmFormat);
                pm = true;
            }
            if (splits && splits.length) {
                try {
                    for (var splits_1 = tslib_1.__values(splits), splits_1_1 = splits_1.next(); !splits_1_1.done; splits_1_1 = splits_1.next()) {
                        var item = splits_1_1.value;
                        if (item && item.trim().includes(':')) {
                            timeStringParts = item.trim().split(':');
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (splits_1_1 && !splits_1_1.done && (_a = splits_1.return)) _a.call(splits_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (timeStringParts && timeStringParts.length && timeStringParts.length === 2) {
                /** @type {?} */
                var hours = parseInt(timeStringParts[0], 10);
                if (hours === 12 && pm) {
                    hours = 12;
                }
                else if (pm) {
                    hours = hours + 12;
                }
                else if (hours === 12) {
                    hours = 0;
                }
                value.setHours(hours);
                value.setMinutes(parseInt(timeStringParts[1], 10));
                value.setSeconds(0);
            }
        }
        else {
            timeStringParts = /(\d{1,2}):(\d{2})/.exec(timeString);
            if (timeStringParts && timeStringParts.length && timeStringParts.length === 3) {
                value.setHours(parseInt(timeStringParts[1], 10));
                value.setMinutes(parseInt(timeStringParts[2], 10));
                value.setSeconds(0);
            }
        }
        return [value, timeString];
    };
    /**
     * @param {?} dateTimeString
     * @param {?} militaryTime
     * @param {?} type
     * @return {?}
     */
    DateFormatService.prototype.parseString = /**
     * @param {?} dateTimeString
     * @param {?} militaryTime
     * @param {?} type
     * @return {?}
     */
    function (dateTimeString, militaryTime, type) {
        switch (type) {
            case 'datetime':
                /** @type {?} */
                var str = dateTimeString.replace(/-/g, '/');
                /** @type {?} */
                var parts = str.split(' ');
                var _a = tslib_1.__read(this.parseDateString(parts[0]), 2), dt = _a[0], dts = _a[1];
                if (parts.length > 1) {
                    var _b = tslib_1.__read(this.parseTimeString(parts[1], militaryTime), 2), tm = _b[0], tms = _b[1];
                    return [new Date(dt.setHours(tm.getHours(), tm.getMinutes())), dts + " " + tms];
                }
                return [dt, dts];
            case 'date':
                return this.parseDateString(dateTimeString);
            case 'time':
                return this.parseTimeString(dateTimeString, militaryTime);
            default:
                return;
        }
    };
    /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    DateFormatService.prototype.isValidDatePart = /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    function (value, format) {
        /** @type {?} */
        var datePart = parseInt(value, 10);
        if (format.includes('m') && (datePart >= 2 || value.length === 2)) {
            return true;
        }
        else if (format.includes('d') && (datePart >= 4 || value.length === 2)) {
            return true;
        }
        else if (format.includes('y') && datePart >= 1000) {
            return true;
        }
        return false;
    };
    DateFormatService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DateFormatService.ctorParameters = function () { return [
        { type: NovoLabelService }
    ]; };
    return DateFormatService;
}());
export { DateFormatService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DateFormatService.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZUZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFckU7SUFFRSwyQkFBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBSSxDQUFDOzs7OztJQUVqRCx1Q0FBVzs7OztJQUFYLFVBQVksWUFBcUI7OztZQUMzQixJQUFJLEdBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzs7WUFDbkQsZUFBZSxHQUFrQixFQUFFOztZQUNqQyxVQUFVLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUU7UUFDNUUsSUFBSSxZQUFZLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsZUFBZSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUMsSUFBSSxlQUFlLElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRTtnQkFDN0MsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7b0JBQ1YsS0FBNkIsSUFBQSxvQkFBQSxpQkFBQSxlQUFlLENBQUEsZ0RBQUEsNkVBQUU7d0JBQXpDLElBQU0sY0FBYyw0QkFBQTt3QkFDdkIsSUFBSSxjQUFjLEtBQUssRUFBRSxFQUFFOzRCQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMs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QUcsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDcEMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2pFLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDeEUsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ25ELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQXpLRixVQUFVOzs7O2dCQUZGLGdCQUFnQjs7SUE0S3pCLHdCQUFDO0NBQUEsQUExS0QsSUEwS0M7U0F6S1ksaUJBQWlCOzs7Ozs7SUFDaEIsbUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1hdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkgeyB9XG5cbiAgZ2V0VGltZU1hc2sobWlsaXRhcnlUaW1lOiBib29sZWFuKTogQXJyYXk8UmVnRXhwPiB7XG4gICAgbGV0IG1hc2s6IEFycmF5PFJlZ0V4cD4gPSBbL1xcZC8sIC9cXGQvLCAvOi8sIC9cXGQvLCAvXFxkL107XG4gICAgbGV0IHRpbWVGb3JtYXRBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIGNvbnN0IHRpbWVGb3JtYXQ6IHN0cmluZyA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQbGFjZWhvbGRlckFNLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG1pbGl0YXJ5VGltZSkge1xuICAgICAgcmV0dXJuIG1hc2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVGb3JtYXRBcnJheSA9IHRpbWVGb3JtYXQuc3BsaXQoJ2hoOm1tJyk7XG4gICAgICBpZiAodGltZUZvcm1hdEFycmF5ICYmIHRpbWVGb3JtYXRBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgbWFzayA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHRpbWVGb3JtYXRQYXJ0IG9mIHRpbWVGb3JtYXRBcnJheSkge1xuICAgICAgICAgIGlmICh0aW1lRm9ybWF0UGFydCA9PT0gJycpIHtcbiAgICAgICAgICAgIG1hc2sgPSBtYXNrLmNvbmNhdChbL1xcZC8sIC9cXGR8Oi8sIC86fFxcZC8sIC9cXGR8XFx3fFxccy8sIC9cXGR8XFxzfFxcdy9dKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRpbWVGb3JtYXRQYXJ0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lRm9ybWF0UGFydC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBtYXNrLnB1c2goL1xcc3xcXHd8XFxkfFxcLi8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFzaztcbiAgfVxuXG4gIGdldERhdGVNYXNrKCk6IEFycmF5PFJlZ0V4cD4ge1xuICAgIHJldHVybiBbL1xcZC8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFwvfFxcLnxcXC18XFxkLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFxkfFxcL3xcXC58XFwtLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFxkLywgL1xcZC9dO1xuICB9XG5cbiAgZ2V0RGF0ZVRpbWVNYXNrKG1pbGl0YXJ5VGltZTogYm9vbGVhbiA9IGZhbHNlKTogQXJyYXk8UmVnRXhwPiB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmdldERhdGVNYXNrKCksIC9cXCw/LywgL1xccy8sIC4uLnRoaXMuZ2V0VGltZU1hc2sobWlsaXRhcnlUaW1lKV07XG4gIH1cblxuICBnZXRUaW1lUGxhY2VIb2xkZXIobWlsaXRhcnlUaW1lOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBpZiAobWlsaXRhcnlUaW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBsYWNlaG9sZGVyMjRIb3VyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBsYWNlaG9sZGVyQU07XG4gIH1cblxuICBwYXJzZURhdGVTdHJpbmcoZGF0ZVN0cmluZzogc3RyaW5nKTogW0RhdGUsIHN0cmluZ10ge1xuICAgIGxldCBkYXRlRm9ybWF0OiBzdHJpbmcgPSB0aGlzLmxhYmVscy5kYXRlRm9ybWF0U3RyaW5nKCk7XG4gICAgY29uc3QgZGF0ZUZvcm1hdFJlZ2V4ID0gLyhcXHcrKVtcXC98XFwufFxcLV0oXFx3KylbXFwvfFxcLnxcXC1dKFxcdyspL2dpO1xuICAgIGNvbnN0IGRhdGVWYWx1ZVJlZ2V4ID0gLyhcXGQrKVtcXC98XFwufFxcLV0oXFxkKylbXFwvfFxcLnxcXC1dKFxcZCspL2dpO1xuICAgIGxldCBkYXRlRm9ybWF0VG9rZW5zOiBBcnJheTxzdHJpbmc+O1xuICAgIGxldCBkYXRlVmFsdWVUb2tlbnM6IEFycmF5PHN0cmluZz47XG4gICAgbGV0IHllYXI6IG51bWJlcjtcbiAgICBsZXQgbW9udGg6IG51bWJlcjtcbiAgICBsZXQgZGF5OiBudW1iZXI7XG4gICAgbGV0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGlmIChIZWxwZXJzLmlzRW1wdHkoZGF0ZUZvcm1hdCkpIHtcbiAgICAgIC8vIERlZmF1bHQgdG8gTU0vZGQveXl5eVxuICAgICAgZGF0ZUZvcm1hdCA9ICdtbS9kZC95eXl5JztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZUZvcm1hdCA9IGRhdGVGb3JtYXQudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgZGF0ZUZvcm1hdFRva2VucyA9IGRhdGVGb3JtYXRSZWdleC5leGVjKGRhdGVGb3JtYXQpO1xuICAgIGRhdGVWYWx1ZVRva2VucyA9IGRhdGVWYWx1ZVJlZ2V4LmV4ZWMoZGF0ZVN0cmluZyk7XG4gICAgaWYgKGRhdGVGb3JtYXRUb2tlbnMgJiYgZGF0ZUZvcm1hdFRva2Vucy5sZW5ndGggPT09IDQgJiYgZGF0ZVZhbHVlVG9rZW5zICYmIGRhdGVWYWx1ZVRva2Vucy5sZW5ndGggPT09IDQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGlmIChkYXRlRm9ybWF0VG9rZW5zW2ldLmluY2x1ZGVzKCdtJykpIHtcbiAgICAgICAgICBtb250aCA9IHBhcnNlSW50KGRhdGVWYWx1ZVRva2Vuc1tpXSwgMTApIC0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRlRm9ybWF0VG9rZW5zW2ldLmluY2x1ZGVzKCdkJykpIHtcbiAgICAgICAgICBkYXkgPSBwYXJzZUludChkYXRlVmFsdWVUb2tlbnNbaV0sIDEwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ZWFyID0gcGFyc2VJbnQoZGF0ZVZhbHVlVG9rZW5zW2ldLCAxMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIHllYXIgPiAxOTAwICYmIGRheSA+IDAgJiYgZGF5IDw9IDMxKSB7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRhdGVGb3JtYXRUb2tlbnMgJiYgZGF0ZUZvcm1hdFRva2Vucy5sZW5ndGggPT09IDQgJiYgZGF0ZVN0cmluZy5sZW5ndGggPj0gMSkge1xuICAgICAgY29uc3QgdHdvVG9rZW5zID0gL1xcZHsxLDR9KFxcL3xcXC58XFwtKShcXGR7MSwyfSkvLmV4ZWMoZGF0ZVN0cmluZyk7XG4gICAgICBjb25zdCBvbmVUb2tlbiA9IC9eKFxcZHsxLDR9KSQvLmV4ZWMoZGF0ZVN0cmluZyk7XG4gICAgICBjb25zdCBkZWxpbWl0ZXIgPSAvXFx3KyhcXC98XFwufFxcLSlcXHcrW1xcL3xcXC58XFwtXVxcdysvZ2kuZXhlYyhkYXRlRm9ybWF0KTtcbiAgICAgIGNvbnN0IGRhdGVTdHJpbmdXaXRoRGVsaW1pdGVyID0gZGF0ZVN0cmluZ1tkYXRlU3RyaW5nLmxlbmd0aCAtIDFdLm1hdGNoKC9cXC98XFwufFxcLS8pO1xuICAgICAgaWYgKHR3b1Rva2VucyAmJiB0d29Ub2tlbnMubGVuZ3RoID09PSAzICYmIHRoaXMuaXNWYWxpZERhdGVQYXJ0KHR3b1Rva2Vuc1syXSwgZGF0ZUZvcm1hdFRva2Vuc1syXSkgJiYgIWRhdGVTdHJpbmdXaXRoRGVsaW1pdGVyKSB7XG4gICAgICAgIGRhdGVTdHJpbmcgPSBgJHtkYXRlU3RyaW5nfSR7ZGVsaW1pdGVyWzFdfWA7XG4gICAgICB9IGVsc2UgaWYgKG9uZVRva2VuICYmIG9uZVRva2VuLmxlbmd0aCA9PT0gMiAmJiB0aGlzLmlzVmFsaWREYXRlUGFydChvbmVUb2tlblsxXSwgZGF0ZUZvcm1hdFRva2Vuc1sxXSkgJiYgIWRhdGVTdHJpbmdXaXRoRGVsaW1pdGVyKSB7XG4gICAgICAgIGRhdGVTdHJpbmcgPSBgJHtkYXRlU3RyaW5nfSR7ZGVsaW1pdGVyWzFdfWA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbZGF0ZSwgZGF0ZVN0cmluZ107XG4gIH1cblxuICBwYXJzZVRpbWVTdHJpbmcodGltZVN0cmluZzogc3RyaW5nLCBtaWxpdGFyeVRpbWU6IGJvb2xlYW4pOiBbRGF0ZSwgc3RyaW5nXSB7XG4gICAgY29uc3QgdmFsdWU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCB0aW1lU3RyaW5nUGFydHM6IEFycmF5PHN0cmluZz47XG4gICAgbGV0IGFtRm9ybWF0ID0gdGhpcy5sYWJlbHMudGltZUZvcm1hdEFNO1xuICAgIGxldCBwbUZvcm1hdCA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQTTtcbiAgICBpZiAoISh0aW1lU3RyaW5nICYmIHRpbWVTdHJpbmcuaW5jbHVkZXMoJzonKSkpIHtcbiAgICAgIHJldHVybiBbdmFsdWUsIHRpbWVTdHJpbmddO1xuICAgIH1cbiAgICBpZiAoIW1pbGl0YXJ5VGltZSAmJiBhbUZvcm1hdCAmJiBwbUZvcm1hdCkge1xuICAgICAgbGV0IHNwbGl0czogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgbGV0IHBtOiBib29sZWFuID0gZmFsc2U7XG4gICAgICBhbUZvcm1hdCA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRBTS50b0xvd2VyQ2FzZSgpO1xuICAgICAgcG1Gb3JtYXQgPSB0aGlzLmxhYmVscy50aW1lRm9ybWF0UE0udG9Mb3dlckNhc2UoKTtcbiAgICAgIHRpbWVTdHJpbmcgPSB0aW1lU3RyaW5nLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAodGltZVN0cmluZy5pbmNsdWRlcyhhbUZvcm1hdCkpIHtcbiAgICAgICAgc3BsaXRzID0gdGltZVN0cmluZy5zcGxpdChhbUZvcm1hdCk7XG4gICAgICB9IGVsc2UgaWYgKHRpbWVTdHJpbmcuaW5jbHVkZXMocG1Gb3JtYXQpKSB7XG4gICAgICAgIHNwbGl0cyA9IHRpbWVTdHJpbmcuc3BsaXQocG1Gb3JtYXQpO1xuICAgICAgICBwbSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoc3BsaXRzICYmIHNwbGl0cy5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHNwbGl0cykge1xuICAgICAgICAgIGlmIChpdGVtICYmIGl0ZW0udHJpbSgpLmluY2x1ZGVzKCc6JykpIHtcbiAgICAgICAgICAgIHRpbWVTdHJpbmdQYXJ0cyA9IGl0ZW0udHJpbSgpLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGltZVN0cmluZ1BhcnRzICYmIHRpbWVTdHJpbmdQYXJ0cy5sZW5ndGggJiYgdGltZVN0cmluZ1BhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBsZXQgaG91cnM6IG51bWJlciA9IHBhcnNlSW50KHRpbWVTdHJpbmdQYXJ0c1swXSwgMTApO1xuICAgICAgICBpZiAoaG91cnMgPT09IDEyICYmIHBtKSB7XG4gICAgICAgICAgaG91cnMgPSAxMjtcbiAgICAgICAgfSBlbHNlIGlmIChwbSkge1xuICAgICAgICAgIGhvdXJzID0gaG91cnMgKyAxMjtcbiAgICAgICAgfSBlbHNlIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgICAgICBob3VycyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUuc2V0SG91cnMoaG91cnMpO1xuICAgICAgICB2YWx1ZS5zZXRNaW51dGVzKHBhcnNlSW50KHRpbWVTdHJpbmdQYXJ0c1sxXSwgMTApKTtcbiAgICAgICAgdmFsdWUuc2V0U2Vjb25kcygwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGltZVN0cmluZ1BhcnRzID0gLyhcXGR7MSwyfSk6KFxcZHsyfSkvLmV4ZWModGltZVN0cmluZyk7XG4gICAgICBpZiAodGltZVN0cmluZ1BhcnRzICYmIHRpbWVTdHJpbmdQYXJ0cy5sZW5ndGggJiYgdGltZVN0cmluZ1BhcnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICB2YWx1ZS5zZXRIb3VycyhwYXJzZUludCh0aW1lU3RyaW5nUGFydHNbMV0sIDEwKSk7XG4gICAgICAgIHZhbHVlLnNldE1pbnV0ZXMocGFyc2VJbnQodGltZVN0cmluZ1BhcnRzWzJdLCAxMCkpO1xuICAgICAgICB2YWx1ZS5zZXRTZWNvbmRzKDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW3ZhbHVlLCB0aW1lU3RyaW5nXTtcbiAgfVxuXG4gIHBhcnNlU3RyaW5nKGRhdGVUaW1lU3RyaW5nOiBzdHJpbmcsIG1pbGl0YXJ5VGltZTogYm9vbGVhbiwgdHlwZTogc3RyaW5nKTogW0RhdGUsIHN0cmluZ10ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnZGF0ZXRpbWUnOlxuICAgICAgICBjb25zdCBzdHIgPSBkYXRlVGltZVN0cmluZy5yZXBsYWNlKC8tL2csICcvJyk7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gc3RyLnNwbGl0KCcgJyk7XG4gICAgICAgIGNvbnN0IFtkdCwgZHRzXSA9IHRoaXMucGFyc2VEYXRlU3RyaW5nKHBhcnRzWzBdKTtcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBjb25zdCBbdG0sIHRtc10gPSB0aGlzLnBhcnNlVGltZVN0cmluZyhwYXJ0c1sxXSwgbWlsaXRhcnlUaW1lKTtcbiAgICAgICAgICByZXR1cm4gW25ldyBEYXRlKGR0LnNldEhvdXJzKHRtLmdldEhvdXJzKCksIHRtLmdldE1pbnV0ZXMoKSkpLCBgJHtkdHN9ICR7dG1zfWBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZHQsIGR0c107XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VEYXRlU3RyaW5nKGRhdGVUaW1lU3RyaW5nKTtcbiAgICAgIGNhc2UgJ3RpbWUnOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVRpbWVTdHJpbmcoZGF0ZVRpbWVTdHJpbmcsIG1pbGl0YXJ5VGltZSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaXNWYWxpZERhdGVQYXJ0KHZhbHVlOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGF0ZVBhcnQgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIGlmIChmb3JtYXQuaW5jbHVkZXMoJ20nKSAmJiAoZGF0ZVBhcnQgPj0gMiB8fCB2YWx1ZS5sZW5ndGggPT09IDIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGZvcm1hdC5pbmNsdWRlcygnZCcpICYmIChkYXRlUGFydCA+PSA0IHx8IHZhbHVlLmxlbmd0aCA9PT0gMikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZm9ybWF0LmluY2x1ZGVzKCd5JykgJiYgZGF0ZVBhcnQgPj0gMTAwMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19