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
        console.log("jbTest - parseDateString() / dateString = " + dateString);
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
        console.log("jbTest - parseDateString() / dateFormat = " + dateFormat);
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
            console.log("jbTest - parseDateString() / month = " + month + " day = " + day + " year = " + year);
            if (month >= 0 && month <= 11 && year > 1900 && day > 0 && day <= 31) {
                date = new Date(year, month, day);
                console.log("jbTest - parseDateString() / date = " + date + " dateString = " + dateString);
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
                console.log("jbTest - parseDateString() dateString twotokens = " + dateString + " dateStringWithDelimiter = " + dateStringWithDelimiter);
            }
            else if (oneToken && oneToken.length === 2 && this.isValidDatePart(oneToken[1], dateFormatTokens[1]) && !dateStringWithDelimiter) {
                dateString = "" + dateString + delimiter[1];
                console.log("jbTest - parseDateString() dateString onetoken = " + dateString + " dateStringWithDelimiter = " + dateStringWithDelimiter);
            }
        }
        console.log("jbTest - parseDateString() before return/ date = " + date + " dateString = " + dateString);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZUZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFckU7SUFFRSwyQkFBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDOzs7OztJQUVoRCx1Q0FBVzs7OztJQUFYLFVBQVksWUFBcUI7OztZQUMzQixJQUFJLEdBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzs7WUFDbkQsZUFBZSxHQUFrQixFQUFFOztZQUNqQyxVQUFVLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUU7UUFDNUUsSUFBSSxZQUFZLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsZUFBZSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUMsSUFBSSxlQUFlLElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRTtnQkFDN0MsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7b0JBQ1YsS0FBNkIsSUFBQSxvQkFBQSxpQkFBQSxlQUFlLENBQUEsZ0RBQUEsNkVBQUU7d0JBQXpDLElBQU0sY0FBYyw0QkFBQTt3QkFDdkIsSUFBSSxjQUFjLEtBQUssRUFBRSxFQUFFOzRCQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMs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Qjs7Ozs7O0lBQ2hCLG1DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgZ2V0VGltZU1hc2sobWlsaXRhcnlUaW1lOiBib29sZWFuKTogQXJyYXk8UmVnRXhwPiB7XG4gICAgbGV0IG1hc2s6IEFycmF5PFJlZ0V4cD4gPSBbL1xcZC8sIC9cXGQvLCAvOi8sIC9cXGQvLCAvXFxkL107XG4gICAgbGV0IHRpbWVGb3JtYXRBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIGNvbnN0IHRpbWVGb3JtYXQ6IHN0cmluZyA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQbGFjZWhvbGRlckFNLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG1pbGl0YXJ5VGltZSkge1xuICAgICAgcmV0dXJuIG1hc2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVGb3JtYXRBcnJheSA9IHRpbWVGb3JtYXQuc3BsaXQoJ2hoOm1tJyk7XG4gICAgICBpZiAodGltZUZvcm1hdEFycmF5ICYmIHRpbWVGb3JtYXRBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgbWFzayA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHRpbWVGb3JtYXRQYXJ0IG9mIHRpbWVGb3JtYXRBcnJheSkge1xuICAgICAgICAgIGlmICh0aW1lRm9ybWF0UGFydCA9PT0gJycpIHtcbiAgICAgICAgICAgIG1hc2sgPSBtYXNrLmNvbmNhdChbL1xcZC8sIC9cXGR8Oi8sIC86fFxcZC8sIC9cXGR8XFx3fFxccy8sIC9cXGR8XFxzfFxcdy9dKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRpbWVGb3JtYXRQYXJ0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lRm9ybWF0UGFydC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBtYXNrLnB1c2goL1xcc3xcXHd8XFxkfFxcLi8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFzaztcbiAgfVxuXG4gIGdldERhdGVNYXNrKCk6IEFycmF5PFJlZ0V4cD4ge1xuICAgIHJldHVybiBbL1xcZC8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFwvfFxcLnxcXC18XFxkLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFxkfFxcL3xcXC58XFwtLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFxkLywgL1xcZC9dO1xuICB9XG5cbiAgZ2V0RGF0ZVRpbWVNYXNrKG1pbGl0YXJ5VGltZTogYm9vbGVhbiA9IGZhbHNlKTogQXJyYXk8UmVnRXhwPiB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmdldERhdGVNYXNrKCksIC9cXCw/LywgL1xccy8sIC4uLnRoaXMuZ2V0VGltZU1hc2sobWlsaXRhcnlUaW1lKV07XG4gIH1cblxuICBnZXRUaW1lUGxhY2VIb2xkZXIobWlsaXRhcnlUaW1lOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBpZiAobWlsaXRhcnlUaW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBsYWNlaG9sZGVyMjRIb3VyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBsYWNlaG9sZGVyQU07XG4gIH1cblxuICBwYXJzZURhdGVTdHJpbmcoZGF0ZVN0cmluZzogc3RyaW5nKTogW0RhdGUsIHN0cmluZ10ge1xuICAgIGNvbnNvbGUubG9nKGBqYlRlc3QgLSBwYXJzZURhdGVTdHJpbmcoKSAvIGRhdGVTdHJpbmcgPSAke2RhdGVTdHJpbmd9YCk7XG5cbiAgICBsZXQgZGF0ZUZvcm1hdDogc3RyaW5nID0gdGhpcy5sYWJlbHMuZGF0ZUZvcm1hdFN0cmluZygpO1xuICAgIGNvbnN0IGRhdGVGb3JtYXRSZWdleCA9IC8oXFx3KylbXFwvfFxcLnxcXC1dKFxcdyspW1xcL3xcXC58XFwtXShcXHcrKS9naTtcbiAgICBjb25zdCBkYXRlVmFsdWVSZWdleCA9IC8oXFxkKylbXFwvfFxcLnxcXC1dKFxcZCspW1xcL3xcXC58XFwtXShcXGQrKS9naTtcbiAgICBsZXQgZGF0ZUZvcm1hdFRva2VuczogQXJyYXk8c3RyaW5nPjtcbiAgICBsZXQgZGF0ZVZhbHVlVG9rZW5zOiBBcnJheTxzdHJpbmc+O1xuICAgIGxldCB5ZWFyOiBudW1iZXI7XG4gICAgbGV0IG1vbnRoOiBudW1iZXI7XG4gICAgbGV0IGRheTogbnVtYmVyO1xuICAgIGxldCBkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICBpZiAoSGVscGVycy5pc0VtcHR5KGRhdGVGb3JtYXQpKSB7XG4gICAgICAvLyBEZWZhdWx0IHRvIE1NL2RkL3l5eXlcbiAgICAgIGRhdGVGb3JtYXQgPSAnbW0vZGQveXl5eSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVGb3JtYXQgPSBkYXRlRm9ybWF0LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYGpiVGVzdCAtIHBhcnNlRGF0ZVN0cmluZygpIC8gZGF0ZUZvcm1hdCA9ICR7ZGF0ZUZvcm1hdH1gKTtcblxuICAgIGRhdGVGb3JtYXRUb2tlbnMgPSBkYXRlRm9ybWF0UmVnZXguZXhlYyhkYXRlRm9ybWF0KTtcbiAgICBkYXRlVmFsdWVUb2tlbnMgPSBkYXRlVmFsdWVSZWdleC5leGVjKGRhdGVTdHJpbmcpO1xuICAgIGlmIChkYXRlRm9ybWF0VG9rZW5zICYmIGRhdGVGb3JtYXRUb2tlbnMubGVuZ3RoID09PSA0ICYmIGRhdGVWYWx1ZVRva2VucyAmJiBkYXRlVmFsdWVUb2tlbnMubGVuZ3RoID09PSA0KSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgICBpZiAoZGF0ZUZvcm1hdFRva2Vuc1tpXS5pbmNsdWRlcygnbScpKSB7XG4gICAgICAgICAgbW9udGggPSBwYXJzZUludChkYXRlVmFsdWVUb2tlbnNbaV0sIDEwKSAtIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0ZUZvcm1hdFRva2Vuc1tpXS5pbmNsdWRlcygnZCcpKSB7XG4gICAgICAgICAgZGF5ID0gcGFyc2VJbnQoZGF0ZVZhbHVlVG9rZW5zW2ldLCAxMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeWVhciA9IHBhcnNlSW50KGRhdGVWYWx1ZVRva2Vuc1tpXSwgMTApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKGBqYlRlc3QgLSBwYXJzZURhdGVTdHJpbmcoKSAvIG1vbnRoID0gJHttb250aH0gZGF5ID0gJHtkYXl9IHllYXIgPSAke3llYXJ9YCk7XG5cbiAgICAgIGlmIChtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIHllYXIgPiAxOTAwICYmIGRheSA+IDAgJiYgZGF5IDw9IDMxKSB7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgICAgY29uc29sZS5sb2coYGpiVGVzdCAtIHBhcnNlRGF0ZVN0cmluZygpIC8gZGF0ZSA9ICR7ZGF0ZX0gZGF0ZVN0cmluZyA9ICR7ZGF0ZVN0cmluZ31gKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRhdGVGb3JtYXRUb2tlbnMgJiYgZGF0ZUZvcm1hdFRva2Vucy5sZW5ndGggPT09IDQgJiYgZGF0ZVN0cmluZy5sZW5ndGggPj0gMSkge1xuICAgICAgY29uc3QgdHdvVG9rZW5zID0gL1xcZHsxLDR9KFxcL3xcXC58XFwtKShcXGR7MSwyfSkvLmV4ZWMoZGF0ZVN0cmluZyk7XG4gICAgICBjb25zdCBvbmVUb2tlbiA9IC9eKFxcZHsxLDR9KSQvLmV4ZWMoZGF0ZVN0cmluZyk7XG4gICAgICBjb25zdCBkZWxpbWl0ZXIgPSAvXFx3KyhcXC98XFwufFxcLSlcXHcrW1xcL3xcXC58XFwtXVxcdysvZ2kuZXhlYyhkYXRlRm9ybWF0KTtcbiAgICAgIGNvbnN0IGRhdGVTdHJpbmdXaXRoRGVsaW1pdGVyID0gZGF0ZVN0cmluZ1tkYXRlU3RyaW5nLmxlbmd0aCAtIDFdLm1hdGNoKC9cXC98XFwufFxcLS8pO1xuICAgICAgaWYgKHR3b1Rva2VucyAmJiB0d29Ub2tlbnMubGVuZ3RoID09PSAzICYmIHRoaXMuaXNWYWxpZERhdGVQYXJ0KHR3b1Rva2Vuc1syXSwgZGF0ZUZvcm1hdFRva2Vuc1syXSkgJiYgIWRhdGVTdHJpbmdXaXRoRGVsaW1pdGVyKSB7XG4gICAgICAgIGRhdGVTdHJpbmcgPSBgJHtkYXRlU3RyaW5nfSR7ZGVsaW1pdGVyWzFdfWA7XG4gICAgICAgIGNvbnNvbGUubG9nKGBqYlRlc3QgLSBwYXJzZURhdGVTdHJpbmcoKSBkYXRlU3RyaW5nIHR3b3Rva2VucyA9ICR7ZGF0ZVN0cmluZ30gZGF0ZVN0cmluZ1dpdGhEZWxpbWl0ZXIgPSAke2RhdGVTdHJpbmdXaXRoRGVsaW1pdGVyfWApO1xuICAgICAgfSBlbHNlIGlmIChvbmVUb2tlbiAmJiBvbmVUb2tlbi5sZW5ndGggPT09IDIgJiYgdGhpcy5pc1ZhbGlkRGF0ZVBhcnQob25lVG9rZW5bMV0sIGRhdGVGb3JtYXRUb2tlbnNbMV0pICYmICFkYXRlU3RyaW5nV2l0aERlbGltaXRlcikge1xuICAgICAgICBkYXRlU3RyaW5nID0gYCR7ZGF0ZVN0cmluZ30ke2RlbGltaXRlclsxXX1gO1xuICAgICAgICBjb25zb2xlLmxvZyhgamJUZXN0IC0gcGFyc2VEYXRlU3RyaW5nKCkgZGF0ZVN0cmluZyBvbmV0b2tlbiA9ICR7ZGF0ZVN0cmluZ30gZGF0ZVN0cmluZ1dpdGhEZWxpbWl0ZXIgPSAke2RhdGVTdHJpbmdXaXRoRGVsaW1pdGVyfWApO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgamJUZXN0IC0gcGFyc2VEYXRlU3RyaW5nKCkgYmVmb3JlIHJldHVybi8gZGF0ZSA9ICR7ZGF0ZX0gZGF0ZVN0cmluZyA9ICR7ZGF0ZVN0cmluZ31gKTtcbiAgICByZXR1cm4gW2RhdGUsIGRhdGVTdHJpbmddO1xuICB9XG5cbiAgcGFyc2VUaW1lU3RyaW5nKHRpbWVTdHJpbmc6IHN0cmluZywgbWlsaXRhcnlUaW1lOiBib29sZWFuKTogW0RhdGUsIHN0cmluZ10ge1xuICAgIGNvbnN0IHZhbHVlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgdGltZVN0cmluZ1BhcnRzOiBBcnJheTxzdHJpbmc+O1xuICAgIGxldCBhbUZvcm1hdCA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRBTTtcbiAgICBsZXQgcG1Gb3JtYXQgPSB0aGlzLmxhYmVscy50aW1lRm9ybWF0UE07XG4gICAgaWYgKCEodGltZVN0cmluZyAmJiB0aW1lU3RyaW5nLmluY2x1ZGVzKCc6JykpKSB7XG4gICAgICByZXR1cm4gW3ZhbHVlLCB0aW1lU3RyaW5nXTtcbiAgICB9XG4gICAgaWYgKCFtaWxpdGFyeVRpbWUgJiYgYW1Gb3JtYXQgJiYgcG1Gb3JtYXQpIHtcbiAgICAgIGxldCBzcGxpdHM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICAgIGxldCBwbTogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgYW1Gb3JtYXQgPSB0aGlzLmxhYmVscy50aW1lRm9ybWF0QU0udG9Mb3dlckNhc2UoKTtcbiAgICAgIHBtRm9ybWF0ID0gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBNLnRvTG93ZXJDYXNlKCk7XG4gICAgICB0aW1lU3RyaW5nID0gdGltZVN0cmluZy50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHRpbWVTdHJpbmcuaW5jbHVkZXMoYW1Gb3JtYXQpKSB7XG4gICAgICAgIHNwbGl0cyA9IHRpbWVTdHJpbmcuc3BsaXQoYW1Gb3JtYXQpO1xuICAgICAgfSBlbHNlIGlmICh0aW1lU3RyaW5nLmluY2x1ZGVzKHBtRm9ybWF0KSkge1xuICAgICAgICBzcGxpdHMgPSB0aW1lU3RyaW5nLnNwbGl0KHBtRm9ybWF0KTtcbiAgICAgICAgcG0gPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHNwbGl0cyAmJiBzcGxpdHMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzcGxpdHMpIHtcbiAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLnRyaW0oKS5pbmNsdWRlcygnOicpKSB7XG4gICAgICAgICAgICB0aW1lU3RyaW5nUGFydHMgPSBpdGVtLnRyaW0oKS5zcGxpdCgnOicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRpbWVTdHJpbmdQYXJ0cyAmJiB0aW1lU3RyaW5nUGFydHMubGVuZ3RoICYmIHRpbWVTdHJpbmdQYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgbGV0IGhvdXJzOiBudW1iZXIgPSBwYXJzZUludCh0aW1lU3RyaW5nUGFydHNbMF0sIDEwKTtcbiAgICAgICAgaWYgKGhvdXJzID09PSAxMiAmJiBwbSkge1xuICAgICAgICAgIGhvdXJzID0gMTI7XG4gICAgICAgIH0gZWxzZSBpZiAocG0pIHtcbiAgICAgICAgICBob3VycyA9IGhvdXJzICsgMTI7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICAgICAgaG91cnMgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlLnNldEhvdXJzKGhvdXJzKTtcbiAgICAgICAgdmFsdWUuc2V0TWludXRlcyhwYXJzZUludCh0aW1lU3RyaW5nUGFydHNbMV0sIDEwKSk7XG4gICAgICAgIHZhbHVlLnNldFNlY29uZHMoMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVTdHJpbmdQYXJ0cyA9IC8oXFxkezEsMn0pOihcXGR7Mn0pLy5leGVjKHRpbWVTdHJpbmcpO1xuICAgICAgaWYgKHRpbWVTdHJpbmdQYXJ0cyAmJiB0aW1lU3RyaW5nUGFydHMubGVuZ3RoICYmIHRpbWVTdHJpbmdQYXJ0cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgdmFsdWUuc2V0SG91cnMocGFyc2VJbnQodGltZVN0cmluZ1BhcnRzWzFdLCAxMCkpO1xuICAgICAgICB2YWx1ZS5zZXRNaW51dGVzKHBhcnNlSW50KHRpbWVTdHJpbmdQYXJ0c1syXSwgMTApKTtcbiAgICAgICAgdmFsdWUuc2V0U2Vjb25kcygwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFt2YWx1ZSwgdGltZVN0cmluZ107XG4gIH1cblxuICBwYXJzZVN0cmluZyhkYXRlVGltZVN0cmluZzogc3RyaW5nLCBtaWxpdGFyeVRpbWU6IGJvb2xlYW4sIHR5cGU6IHN0cmluZyk6IFtEYXRlLCBzdHJpbmddIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2RhdGV0aW1lJzpcbiAgICAgICAgY29uc3Qgc3RyID0gZGF0ZVRpbWVTdHJpbmcucmVwbGFjZSgvLS9nLCAnLycpO1xuICAgICAgICBjb25zdCBwYXJ0cyA9IHN0ci5zcGxpdCgnICcpO1xuICAgICAgICBjb25zdCBbZHQsIGR0c10gPSB0aGlzLnBhcnNlRGF0ZVN0cmluZyhwYXJ0c1swXSk7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgY29uc3QgW3RtLCB0bXNdID0gdGhpcy5wYXJzZVRpbWVTdHJpbmcocGFydHNbMV0sIG1pbGl0YXJ5VGltZSk7XG4gICAgICAgICAgcmV0dXJuIFtuZXcgRGF0ZShkdC5zZXRIb3Vycyh0bS5nZXRIb3VycygpLCB0bS5nZXRNaW51dGVzKCkpKSwgYCR7ZHRzfSAke3Rtc31gXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2R0LCBkdHNdO1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlRGF0ZVN0cmluZyhkYXRlVGltZVN0cmluZyk7XG4gICAgICBjYXNlICd0aW1lJzpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VUaW1lU3RyaW5nKGRhdGVUaW1lU3RyaW5nLCBtaWxpdGFyeVRpbWUpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlzVmFsaWREYXRlUGFydCh2YWx1ZTogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRhdGVQYXJ0ID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICBpZiAoZm9ybWF0LmluY2x1ZGVzKCdtJykgJiYgKGRhdGVQYXJ0ID49IDIgfHwgdmFsdWUubGVuZ3RoID09PSAyKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChmb3JtYXQuaW5jbHVkZXMoJ2QnKSAmJiAoZGF0ZVBhcnQgPj0gNCB8fCB2YWx1ZS5sZW5ndGggPT09IDIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGZvcm1hdC5pbmNsdWRlcygneScpICYmIGRhdGVQYXJ0ID49IDEwMDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==