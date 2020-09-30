/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        var timeFormatPartsArray = [];
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
        var dateFormat = this.labels.dateFormat;
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
                    month = parseInt(dateValueTokens[i]) - 1;
                }
                else if (dateFormatTokens[i].includes('d')) {
                    day = parseInt(dateValueTokens[i]);
                }
                else {
                    year = parseInt(dateValueTokens[i]);
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
        var timeFormat;
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
                var hours = parseInt(timeStringParts[0]);
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
                value.setMinutes(parseInt(timeStringParts[1]));
                value.setSeconds(0);
            }
        }
        else {
            timeStringParts = /(\d{1,2}):(\d{2})/.exec(timeString);
            if (timeStringParts && timeStringParts.length && timeStringParts.length === 3) {
                value.setHours(parseInt(timeStringParts[1]));
                value.setMinutes(parseInt(timeStringParts[2]));
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
        var datePart = parseInt(value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZUZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVyRTtJQUVFLDJCQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7Ozs7O0lBRWhELHVDQUFXOzs7O0lBQVgsVUFBWSxZQUFxQjs7O1lBQzNCLElBQUksR0FBa0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDOztZQUNyRCxlQUFlLEdBQWtCLEVBQUU7O1lBQ25DLG9CQUFvQixHQUFrQixFQUFFOztZQUN0QyxVQUFVLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUU7UUFDMUUsSUFBSSxZQUFZLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsZUFBZSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUMsSUFBSSxlQUFlLElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRTtnQkFDN0MsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7b0JBQ1YsS0FBMkIsSUFBQSxvQkFBQSxpQkFBQSxlQUFlLENBQUEsZ0RBQUEsNkVBQUU7d0JBQXZDLElBQUksY0FBYyw0QkFBQTt3QkFDckIsSUFBSSxjQUFjLEtBQUssRUFBRSxFQUFFOzRCQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxF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Q0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDakUsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN4RSxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDbkQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBM0tGLFVBQVU7Ozs7Z0JBRkYsZ0JBQWdCOztJQThLekIsd0JBQUM7Q0FBQSxBQTVLRCxJQTRLQztTQTNLWSxpQkFBaUI7Ozs7OztJQUNoQixtQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlRm9ybWF0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIGdldFRpbWVNYXNrKG1pbGl0YXJ5VGltZTogYm9vbGVhbik6IEFycmF5PFJlZ0V4cD4ge1xuICAgIGxldCBtYXNrOiBBcnJheTxSZWdFeHA+ID0gWy9cXGQvLCAvXFxkLywgLzovLCAvXFxkLywgL1xcZC9dLFxuICAgICAgdGltZUZvcm1hdEFycmF5OiBBcnJheTxzdHJpbmc+ID0gW10sXG4gICAgICB0aW1lRm9ybWF0UGFydHNBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIGxldCB0aW1lRm9ybWF0OiBzdHJpbmcgPSB0aGlzLmxhYmVscy50aW1lRm9ybWF0UGxhY2Vob2xkZXJBTS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChtaWxpdGFyeVRpbWUpIHtcbiAgICAgIHJldHVybiBtYXNrO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lRm9ybWF0QXJyYXkgPSB0aW1lRm9ybWF0LnNwbGl0KCdoaDptbScpO1xuICAgICAgaWYgKHRpbWVGb3JtYXRBcnJheSAmJiB0aW1lRm9ybWF0QXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIG1hc2sgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgdGltZUZvcm1hdFBhcnQgb2YgdGltZUZvcm1hdEFycmF5KSB7XG4gICAgICAgICAgaWYgKHRpbWVGb3JtYXRQYXJ0ID09PSAnJykge1xuICAgICAgICAgICAgbWFzayA9IG1hc2suY29uY2F0KFsvXFxkLywgL1xcZHw6LywgLzp8XFxkLywgL1xcZHxcXHd8XFxzLywgL1xcZHxcXHN8XFx3L10pO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGltZUZvcm1hdFBhcnQubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVGb3JtYXRQYXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIG1hc2sucHVzaCgvXFxzfFxcd3xcXGR8XFwuLyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXNrO1xuICB9XG5cbiAgZ2V0RGF0ZU1hc2soKTogQXJyYXk8UmVnRXhwPiB7XG4gICAgcmV0dXJuIFsvXFxkLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXC98XFwufFxcLXxcXGQvLCAvXFxkfFxcL3xcXC58XFwtLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFxkfFxcL3xcXC58XFwtLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXGQvLCAvXFxkL107XG4gIH1cblxuICBnZXREYXRlVGltZU1hc2sobWlsaXRhcnlUaW1lOiBib29sZWFuID0gZmFsc2UpOiBBcnJheTxSZWdFeHA+IHtcbiAgICByZXR1cm4gWy4uLnRoaXMuZ2V0RGF0ZU1hc2soKSwgL1xcLD8vLCAvXFxzLywgLi4udGhpcy5nZXRUaW1lTWFzayhtaWxpdGFyeVRpbWUpXTtcbiAgfVxuXG4gIGdldFRpbWVQbGFjZUhvbGRlcihtaWxpdGFyeVRpbWU6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGlmIChtaWxpdGFyeVRpbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmxhYmVscy50aW1lRm9ybWF0UGxhY2Vob2xkZXIyNEhvdXI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxhYmVscy50aW1lRm9ybWF0UGxhY2Vob2xkZXJBTTtcbiAgfVxuXG4gIHBhcnNlRGF0ZVN0cmluZyhkYXRlU3RyaW5nOiBzdHJpbmcpOiBbRGF0ZSwgc3RyaW5nXSB7XG4gICAgbGV0IGRhdGVGb3JtYXQ6IHN0cmluZyA9IHRoaXMubGFiZWxzLmRhdGVGb3JtYXQsXG4gICAgICBkYXRlRm9ybWF0UmVnZXggPSAvKFxcdyspW1xcL3xcXC58XFwtXShcXHcrKVtcXC98XFwufFxcLV0oXFx3KykvZ2ksXG4gICAgICBkYXRlVmFsdWVSZWdleCA9IC8oXFxkKylbXFwvfFxcLnxcXC1dKFxcZCspW1xcL3xcXC58XFwtXShcXGQrKS9naSxcbiAgICAgIGRhdGVGb3JtYXRUb2tlbnM6IEFycmF5PHN0cmluZz4sXG4gICAgICBkYXRlVmFsdWVUb2tlbnM6IEFycmF5PHN0cmluZz4sXG4gICAgICB5ZWFyOiBudW1iZXIsXG4gICAgICBtb250aDogbnVtYmVyLFxuICAgICAgZGF5OiBudW1iZXIsXG4gICAgICBkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICBpZiAoSGVscGVycy5pc0VtcHR5KGRhdGVGb3JtYXQpKSB7XG4gICAgICAvLyBEZWZhdWx0IHRvIE1NL2RkL3l5eXlcbiAgICAgIGRhdGVGb3JtYXQgPSAnbW0vZGQveXl5eSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVGb3JtYXQgPSBkYXRlRm9ybWF0LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIGRhdGVGb3JtYXRUb2tlbnMgPSBkYXRlRm9ybWF0UmVnZXguZXhlYyhkYXRlRm9ybWF0KTtcbiAgICBkYXRlVmFsdWVUb2tlbnMgPSBkYXRlVmFsdWVSZWdleC5leGVjKGRhdGVTdHJpbmcpO1xuICAgIGlmIChkYXRlRm9ybWF0VG9rZW5zICYmIGRhdGVGb3JtYXRUb2tlbnMubGVuZ3RoID09PSA0ICYmIGRhdGVWYWx1ZVRva2VucyAmJiBkYXRlVmFsdWVUb2tlbnMubGVuZ3RoID09PSA0KSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgICBpZiAoZGF0ZUZvcm1hdFRva2Vuc1tpXS5pbmNsdWRlcygnbScpKSB7XG4gICAgICAgICAgbW9udGggPSBwYXJzZUludChkYXRlVmFsdWVUb2tlbnNbaV0pIC0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRlRm9ybWF0VG9rZW5zW2ldLmluY2x1ZGVzKCdkJykpIHtcbiAgICAgICAgICBkYXkgPSBwYXJzZUludChkYXRlVmFsdWVUb2tlbnNbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHllYXIgPSBwYXJzZUludChkYXRlVmFsdWVUb2tlbnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiB5ZWFyID4gMTkwMCAmJiBkYXkgPiAwICYmIGRheSA8PSAzMSkge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRlRm9ybWF0VG9rZW5zICYmIGRhdGVGb3JtYXRUb2tlbnMubGVuZ3RoID09PSA0ICYmIGRhdGVTdHJpbmcubGVuZ3RoID49IDEpIHtcbiAgICAgIGxldCB0d29Ub2tlbnMgPSAvXFxkezEsNH0oXFwvfFxcLnxcXC0pKFxcZHsxLDJ9KS8uZXhlYyhkYXRlU3RyaW5nKTtcbiAgICAgIGxldCBvbmVUb2tlbiA9IC9eKFxcZHsxLDR9KSQvLmV4ZWMoZGF0ZVN0cmluZyk7XG4gICAgICBsZXQgZGVsaW1pdGVyID0gL1xcdysoXFwvfFxcLnxcXC0pXFx3K1tcXC98XFwufFxcLV1cXHcrL2dpLmV4ZWMoZGF0ZUZvcm1hdCk7XG4gICAgICBsZXQgZGF0ZVN0cmluZ1dpdGhEZWxpbWl0ZXIgPSBkYXRlU3RyaW5nW2RhdGVTdHJpbmcubGVuZ3RoIC0gMV0ubWF0Y2goL1xcL3xcXC58XFwtLyk7XG4gICAgICBpZiAodHdvVG9rZW5zICYmIHR3b1Rva2Vucy5sZW5ndGggPT09IDMgJiYgdGhpcy5pc1ZhbGlkRGF0ZVBhcnQodHdvVG9rZW5zWzJdLCBkYXRlRm9ybWF0VG9rZW5zWzJdKSAmJiAhZGF0ZVN0cmluZ1dpdGhEZWxpbWl0ZXIpIHtcbiAgICAgICAgZGF0ZVN0cmluZyA9IGAke2RhdGVTdHJpbmd9JHtkZWxpbWl0ZXJbMV19YDtcbiAgICAgIH0gZWxzZSBpZiAob25lVG9rZW4gJiYgb25lVG9rZW4ubGVuZ3RoID09PSAyICYmIHRoaXMuaXNWYWxpZERhdGVQYXJ0KG9uZVRva2VuWzFdLCBkYXRlRm9ybWF0VG9rZW5zWzFdKSAmJiAhZGF0ZVN0cmluZ1dpdGhEZWxpbWl0ZXIpIHtcbiAgICAgICAgZGF0ZVN0cmluZyA9IGAke2RhdGVTdHJpbmd9JHtkZWxpbWl0ZXJbMV19YDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtkYXRlLCBkYXRlU3RyaW5nXTtcbiAgfVxuXG4gIHBhcnNlVGltZVN0cmluZyh0aW1lU3RyaW5nOiBzdHJpbmcsIG1pbGl0YXJ5VGltZTogYm9vbGVhbik6IFtEYXRlLCBzdHJpbmddIHtcbiAgICBsZXQgdmFsdWU6IERhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgdGltZVN0cmluZ1BhcnRzOiBBcnJheTxzdHJpbmc+LFxuICAgICAgdGltZUZvcm1hdDogc3RyaW5nO1xuICAgIGxldCBhbUZvcm1hdCA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRBTTtcbiAgICBsZXQgcG1Gb3JtYXQgPSB0aGlzLmxhYmVscy50aW1lRm9ybWF0UE07XG4gICAgaWYgKCEodGltZVN0cmluZyAmJiB0aW1lU3RyaW5nLmluY2x1ZGVzKCc6JykpKSB7XG4gICAgICByZXR1cm4gW3ZhbHVlLCB0aW1lU3RyaW5nXTtcbiAgICB9XG4gICAgaWYgKCFtaWxpdGFyeVRpbWUgJiYgYW1Gb3JtYXQgJiYgcG1Gb3JtYXQpIHtcbiAgICAgIGxldCBzcGxpdHM6IEFycmF5PHN0cmluZz4gPSBbXSxcbiAgICAgICAgcG06IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgIGFtRm9ybWF0ID0gdGhpcy5sYWJlbHMudGltZUZvcm1hdEFNLnRvTG93ZXJDYXNlKCk7XG4gICAgICBwbUZvcm1hdCA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQTS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdGltZVN0cmluZyA9IHRpbWVTdHJpbmcudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmICh0aW1lU3RyaW5nLmluY2x1ZGVzKGFtRm9ybWF0KSkge1xuICAgICAgICBzcGxpdHMgPSB0aW1lU3RyaW5nLnNwbGl0KGFtRm9ybWF0KTtcbiAgICAgIH0gZWxzZSBpZiAodGltZVN0cmluZy5pbmNsdWRlcyhwbUZvcm1hdCkpIHtcbiAgICAgICAgc3BsaXRzID0gdGltZVN0cmluZy5zcGxpdChwbUZvcm1hdCk7XG4gICAgICAgIHBtID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChzcGxpdHMgJiYgc3BsaXRzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHNwbGl0cykge1xuICAgICAgICAgIGlmIChpdGVtICYmIGl0ZW0udHJpbSgpLmluY2x1ZGVzKCc6JykpIHtcbiAgICAgICAgICAgIHRpbWVTdHJpbmdQYXJ0cyA9IGl0ZW0udHJpbSgpLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGltZVN0cmluZ1BhcnRzICYmIHRpbWVTdHJpbmdQYXJ0cy5sZW5ndGggJiYgdGltZVN0cmluZ1BhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBsZXQgaG91cnM6IG51bWJlciA9IHBhcnNlSW50KHRpbWVTdHJpbmdQYXJ0c1swXSk7XG4gICAgICAgIGlmIChob3VycyA9PT0gMTIgJiYgcG0pIHtcbiAgICAgICAgICBob3VycyA9IDEyO1xuICAgICAgICB9IGVsc2UgaWYgKHBtKSB7XG4gICAgICAgICAgaG91cnMgPSBob3VycyArIDEyO1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgICAgIGhvdXJzID0gMDtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZS5zZXRIb3Vycyhob3Vycyk7XG4gICAgICAgIHZhbHVlLnNldE1pbnV0ZXMocGFyc2VJbnQodGltZVN0cmluZ1BhcnRzWzFdKSk7XG4gICAgICAgIHZhbHVlLnNldFNlY29uZHMoMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVTdHJpbmdQYXJ0cyA9IC8oXFxkezEsMn0pOihcXGR7Mn0pLy5leGVjKHRpbWVTdHJpbmcpO1xuICAgICAgaWYgKHRpbWVTdHJpbmdQYXJ0cyAmJiB0aW1lU3RyaW5nUGFydHMubGVuZ3RoICYmIHRpbWVTdHJpbmdQYXJ0cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgdmFsdWUuc2V0SG91cnMocGFyc2VJbnQodGltZVN0cmluZ1BhcnRzWzFdKSk7XG4gICAgICAgIHZhbHVlLnNldE1pbnV0ZXMocGFyc2VJbnQodGltZVN0cmluZ1BhcnRzWzJdKSk7XG4gICAgICAgIHZhbHVlLnNldFNlY29uZHMoMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbdmFsdWUsIHRpbWVTdHJpbmddO1xuICB9XG5cbiAgcGFyc2VTdHJpbmcoZGF0ZVRpbWVTdHJpbmc6IHN0cmluZywgbWlsaXRhcnlUaW1lOiBib29sZWFuLCB0eXBlOiBzdHJpbmcpOiBbRGF0ZSwgc3RyaW5nXSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdkYXRldGltZSc6XG4gICAgICAgIGxldCBzdHIgPSBkYXRlVGltZVN0cmluZy5yZXBsYWNlKC8tL2csICcvJyk7XG4gICAgICAgIGxldCBwYXJ0cyA9IHN0ci5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgW2R0LCBkdHNdID0gdGhpcy5wYXJzZURhdGVTdHJpbmcocGFydHNbMF0pO1xuICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGxldCBbdG0sIHRtc10gPSB0aGlzLnBhcnNlVGltZVN0cmluZyhwYXJ0c1sxXSwgbWlsaXRhcnlUaW1lKTtcbiAgICAgICAgICByZXR1cm4gW25ldyBEYXRlKGR0LnNldEhvdXJzKHRtLmdldEhvdXJzKCksIHRtLmdldE1pbnV0ZXMoKSkpLCBgJHtkdHN9ICR7dG1zfWBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZHQsIGR0c107XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VEYXRlU3RyaW5nKGRhdGVUaW1lU3RyaW5nKTtcbiAgICAgIGNhc2UgJ3RpbWUnOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVRpbWVTdHJpbmcoZGF0ZVRpbWVTdHJpbmcsIG1pbGl0YXJ5VGltZSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaXNWYWxpZERhdGVQYXJ0KHZhbHVlOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgbGV0IGRhdGVQYXJ0ID0gcGFyc2VJbnQodmFsdWUpO1xuICAgIGlmIChmb3JtYXQuaW5jbHVkZXMoJ20nKSAmJiAoZGF0ZVBhcnQgPj0gMiB8fCB2YWx1ZS5sZW5ndGggPT09IDIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGZvcm1hdC5pbmNsdWRlcygnZCcpICYmIChkYXRlUGFydCA+PSA0IHx8IHZhbHVlLmxlbmd0aCA9PT0gMikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZm9ybWF0LmluY2x1ZGVzKCd5JykgJiYgZGF0ZVBhcnQgPj0gMTAwMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19