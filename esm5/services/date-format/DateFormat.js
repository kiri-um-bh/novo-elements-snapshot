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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZUZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFckU7SUFFRSwyQkFBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDOzs7OztJQUVoRCx1Q0FBVzs7OztJQUFYLFVBQVksWUFBcUI7OztZQUMzQixJQUFJLEdBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzs7WUFDckQsZUFBZSxHQUFrQixFQUFFOztZQUNuQyxvQkFBb0IsR0FBa0IsRUFBRTs7WUFDdEMsVUFBVSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFO1FBQzFFLElBQUksWUFBWSxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLGVBQWUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLElBQUksZUFBZSxJQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUU7Z0JBQzdDLElBQUksR0FBRyxFQUFFLENBQUM7O29CQUNWLEtBQTJCLElBQUEsb0JBQUEsaUJBQUEsZUFBZSxDQUFBLGdEQUFBLDZFQUFFO3dCQUF2QyxJQUFJLGNBQWMsNEJBQUE7d0JBQ3JCLElBQUksY0FBYyxLQUFLLEVBQUUsRUFBRTs0QkFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0s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QUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNqRSxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3hFLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUNuRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkEzS0YsVUFBVTs7OztnQkFGRixnQkFBZ0I7O0lBOEt6Qix3QkFBQztDQUFBLEFBNUtELElBNEtDO1NBM0tZLGlCQUFpQjs7Ozs7O0lBQ2hCLG1DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgZ2V0VGltZU1hc2sobWlsaXRhcnlUaW1lOiBib29sZWFuKTogQXJyYXk8UmVnRXhwPiB7XG4gICAgbGV0IG1hc2s6IEFycmF5PFJlZ0V4cD4gPSBbL1xcZC8sIC9cXGQvLCAvOi8sIC9cXGQvLCAvXFxkL10sXG4gICAgICB0aW1lRm9ybWF0QXJyYXk6IEFycmF5PHN0cmluZz4gPSBbXSxcbiAgICAgIHRpbWVGb3JtYXRQYXJ0c0FycmF5OiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgbGV0IHRpbWVGb3JtYXQ6IHN0cmluZyA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQbGFjZWhvbGRlckFNLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG1pbGl0YXJ5VGltZSkge1xuICAgICAgcmV0dXJuIG1hc2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVGb3JtYXRBcnJheSA9IHRpbWVGb3JtYXQuc3BsaXQoJ2hoOm1tJyk7XG4gICAgICBpZiAodGltZUZvcm1hdEFycmF5ICYmIHRpbWVGb3JtYXRBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgbWFzayA9IFtdO1xuICAgICAgICBmb3IgKGxldCB0aW1lRm9ybWF0UGFydCBvZiB0aW1lRm9ybWF0QXJyYXkpIHtcbiAgICAgICAgICBpZiAodGltZUZvcm1hdFBhcnQgPT09ICcnKSB7XG4gICAgICAgICAgICBtYXNrID0gbWFzay5jb25jYXQoWy9cXGQvLCAvXFxkfDovLCAvOnxcXGQvLCAvXFxkfFxcd3xcXHMvLCAvXFxkfFxcc3xcXHcvXSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aW1lRm9ybWF0UGFydC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZUZvcm1hdFBhcnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgbWFzay5wdXNoKC9cXHN8XFx3fFxcZHxcXC4vKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cblxuICBnZXREYXRlTWFzaygpOiBBcnJheTxSZWdFeHA+IHtcbiAgICByZXR1cm4gWy9cXGQvLCAvXFxkfFxcL3xcXC58XFwtLywgL1xcL3xcXC58XFwtfFxcZC8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFxkfFxcL3xcXC58XFwtLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFxkfFxcL3xcXC58XFwtLywgL1xcZC8sIC9cXGQvXTtcbiAgfVxuXG4gIGdldERhdGVUaW1lTWFzayhtaWxpdGFyeVRpbWU6IGJvb2xlYW4gPSBmYWxzZSk6IEFycmF5PFJlZ0V4cD4ge1xuICAgIHJldHVybiBbLi4udGhpcy5nZXREYXRlTWFzaygpLCAvXFwsPy8sIC9cXHMvLCAuLi50aGlzLmdldFRpbWVNYXNrKG1pbGl0YXJ5VGltZSldO1xuICB9XG5cbiAgZ2V0VGltZVBsYWNlSG9sZGVyKG1pbGl0YXJ5VGltZTogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgaWYgKG1pbGl0YXJ5VGltZSkge1xuICAgICAgcmV0dXJuIHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQbGFjZWhvbGRlcjI0SG91cjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQbGFjZWhvbGRlckFNO1xuICB9XG5cbiAgcGFyc2VEYXRlU3RyaW5nKGRhdGVTdHJpbmc6IHN0cmluZyk6IFtEYXRlLCBzdHJpbmddIHtcbiAgICBsZXQgZGF0ZUZvcm1hdDogc3RyaW5nID0gdGhpcy5sYWJlbHMuZGF0ZUZvcm1hdFN0cmluZygpLFxuICAgICAgZGF0ZUZvcm1hdFJlZ2V4ID0gLyhcXHcrKVtcXC98XFwufFxcLV0oXFx3KylbXFwvfFxcLnxcXC1dKFxcdyspL2dpLFxuICAgICAgZGF0ZVZhbHVlUmVnZXggPSAvKFxcZCspW1xcL3xcXC58XFwtXShcXGQrKVtcXC98XFwufFxcLV0oXFxkKykvZ2ksXG4gICAgICBkYXRlRm9ybWF0VG9rZW5zOiBBcnJheTxzdHJpbmc+LFxuICAgICAgZGF0ZVZhbHVlVG9rZW5zOiBBcnJheTxzdHJpbmc+LFxuICAgICAgeWVhcjogbnVtYmVyLFxuICAgICAgbW9udGg6IG51bWJlcixcbiAgICAgIGRheTogbnVtYmVyLFxuICAgICAgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgaWYgKEhlbHBlcnMuaXNFbXB0eShkYXRlRm9ybWF0KSkge1xuICAgICAgLy8gRGVmYXVsdCB0byBNTS9kZC95eXl5XG4gICAgICBkYXRlRm9ybWF0ID0gJ21tL2RkL3l5eXknO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlRm9ybWF0ID0gZGF0ZUZvcm1hdC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBkYXRlRm9ybWF0VG9rZW5zID0gZGF0ZUZvcm1hdFJlZ2V4LmV4ZWMoZGF0ZUZvcm1hdCk7XG4gICAgZGF0ZVZhbHVlVG9rZW5zID0gZGF0ZVZhbHVlUmVnZXguZXhlYyhkYXRlU3RyaW5nKTtcbiAgICBpZiAoZGF0ZUZvcm1hdFRva2VucyAmJiBkYXRlRm9ybWF0VG9rZW5zLmxlbmd0aCA9PT0gNCAmJiBkYXRlVmFsdWVUb2tlbnMgJiYgZGF0ZVZhbHVlVG9rZW5zLmxlbmd0aCA9PT0gNCkge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgaWYgKGRhdGVGb3JtYXRUb2tlbnNbaV0uaW5jbHVkZXMoJ20nKSkge1xuICAgICAgICAgIG1vbnRoID0gcGFyc2VJbnQoZGF0ZVZhbHVlVG9rZW5zW2ldKSAtIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0ZUZvcm1hdFRva2Vuc1tpXS5pbmNsdWRlcygnZCcpKSB7XG4gICAgICAgICAgZGF5ID0gcGFyc2VJbnQoZGF0ZVZhbHVlVG9rZW5zW2ldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ZWFyID0gcGFyc2VJbnQoZGF0ZVZhbHVlVG9rZW5zW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgeWVhciA+IDE5MDAgJiYgZGF5ID4gMCAmJiBkYXkgPD0gMzEpIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGF0ZUZvcm1hdFRva2VucyAmJiBkYXRlRm9ybWF0VG9rZW5zLmxlbmd0aCA9PT0gNCAmJiBkYXRlU3RyaW5nLmxlbmd0aCA+PSAxKSB7XG4gICAgICBsZXQgdHdvVG9rZW5zID0gL1xcZHsxLDR9KFxcL3xcXC58XFwtKShcXGR7MSwyfSkvLmV4ZWMoZGF0ZVN0cmluZyk7XG4gICAgICBsZXQgb25lVG9rZW4gPSAvXihcXGR7MSw0fSkkLy5leGVjKGRhdGVTdHJpbmcpO1xuICAgICAgbGV0IGRlbGltaXRlciA9IC9cXHcrKFxcL3xcXC58XFwtKVxcdytbXFwvfFxcLnxcXC1dXFx3Ky9naS5leGVjKGRhdGVGb3JtYXQpO1xuICAgICAgbGV0IGRhdGVTdHJpbmdXaXRoRGVsaW1pdGVyID0gZGF0ZVN0cmluZ1tkYXRlU3RyaW5nLmxlbmd0aCAtIDFdLm1hdGNoKC9cXC98XFwufFxcLS8pO1xuICAgICAgaWYgKHR3b1Rva2VucyAmJiB0d29Ub2tlbnMubGVuZ3RoID09PSAzICYmIHRoaXMuaXNWYWxpZERhdGVQYXJ0KHR3b1Rva2Vuc1syXSwgZGF0ZUZvcm1hdFRva2Vuc1syXSkgJiYgIWRhdGVTdHJpbmdXaXRoRGVsaW1pdGVyKSB7XG4gICAgICAgIGRhdGVTdHJpbmcgPSBgJHtkYXRlU3RyaW5nfSR7ZGVsaW1pdGVyWzFdfWA7XG4gICAgICB9IGVsc2UgaWYgKG9uZVRva2VuICYmIG9uZVRva2VuLmxlbmd0aCA9PT0gMiAmJiB0aGlzLmlzVmFsaWREYXRlUGFydChvbmVUb2tlblsxXSwgZGF0ZUZvcm1hdFRva2Vuc1sxXSkgJiYgIWRhdGVTdHJpbmdXaXRoRGVsaW1pdGVyKSB7XG4gICAgICAgIGRhdGVTdHJpbmcgPSBgJHtkYXRlU3RyaW5nfSR7ZGVsaW1pdGVyWzFdfWA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbZGF0ZSwgZGF0ZVN0cmluZ107XG4gIH1cblxuICBwYXJzZVRpbWVTdHJpbmcodGltZVN0cmluZzogc3RyaW5nLCBtaWxpdGFyeVRpbWU6IGJvb2xlYW4pOiBbRGF0ZSwgc3RyaW5nXSB7XG4gICAgbGV0IHZhbHVlOiBEYXRlID0gbmV3IERhdGUoKSxcbiAgICAgIHRpbWVTdHJpbmdQYXJ0czogQXJyYXk8c3RyaW5nPixcbiAgICAgIHRpbWVGb3JtYXQ6IHN0cmluZztcbiAgICBsZXQgYW1Gb3JtYXQgPSB0aGlzLmxhYmVscy50aW1lRm9ybWF0QU07XG4gICAgbGV0IHBtRm9ybWF0ID0gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBNO1xuICAgIGlmICghKHRpbWVTdHJpbmcgJiYgdGltZVN0cmluZy5pbmNsdWRlcygnOicpKSkge1xuICAgICAgcmV0dXJuIFt2YWx1ZSwgdGltZVN0cmluZ107XG4gICAgfVxuICAgIGlmICghbWlsaXRhcnlUaW1lICYmIGFtRm9ybWF0ICYmIHBtRm9ybWF0KSB7XG4gICAgICBsZXQgc3BsaXRzOiBBcnJheTxzdHJpbmc+ID0gW10sXG4gICAgICAgIHBtOiBib29sZWFuID0gZmFsc2U7XG4gICAgICBhbUZvcm1hdCA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRBTS50b0xvd2VyQ2FzZSgpO1xuICAgICAgcG1Gb3JtYXQgPSB0aGlzLmxhYmVscy50aW1lRm9ybWF0UE0udG9Mb3dlckNhc2UoKTtcbiAgICAgIHRpbWVTdHJpbmcgPSB0aW1lU3RyaW5nLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAodGltZVN0cmluZy5pbmNsdWRlcyhhbUZvcm1hdCkpIHtcbiAgICAgICAgc3BsaXRzID0gdGltZVN0cmluZy5zcGxpdChhbUZvcm1hdCk7XG4gICAgICB9IGVsc2UgaWYgKHRpbWVTdHJpbmcuaW5jbHVkZXMocG1Gb3JtYXQpKSB7XG4gICAgICAgIHNwbGl0cyA9IHRpbWVTdHJpbmcuc3BsaXQocG1Gb3JtYXQpO1xuICAgICAgICBwbSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoc3BsaXRzICYmIHNwbGl0cy5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBzcGxpdHMpIHtcbiAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLnRyaW0oKS5pbmNsdWRlcygnOicpKSB7XG4gICAgICAgICAgICB0aW1lU3RyaW5nUGFydHMgPSBpdGVtLnRyaW0oKS5zcGxpdCgnOicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRpbWVTdHJpbmdQYXJ0cyAmJiB0aW1lU3RyaW5nUGFydHMubGVuZ3RoICYmIHRpbWVTdHJpbmdQYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgbGV0IGhvdXJzOiBudW1iZXIgPSBwYXJzZUludCh0aW1lU3RyaW5nUGFydHNbMF0pO1xuICAgICAgICBpZiAoaG91cnMgPT09IDEyICYmIHBtKSB7XG4gICAgICAgICAgaG91cnMgPSAxMjtcbiAgICAgICAgfSBlbHNlIGlmIChwbSkge1xuICAgICAgICAgIGhvdXJzID0gaG91cnMgKyAxMjtcbiAgICAgICAgfSBlbHNlIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgICAgICBob3VycyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUuc2V0SG91cnMoaG91cnMpO1xuICAgICAgICB2YWx1ZS5zZXRNaW51dGVzKHBhcnNlSW50KHRpbWVTdHJpbmdQYXJ0c1sxXSkpO1xuICAgICAgICB2YWx1ZS5zZXRTZWNvbmRzKDApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lU3RyaW5nUGFydHMgPSAvKFxcZHsxLDJ9KTooXFxkezJ9KS8uZXhlYyh0aW1lU3RyaW5nKTtcbiAgICAgIGlmICh0aW1lU3RyaW5nUGFydHMgJiYgdGltZVN0cmluZ1BhcnRzLmxlbmd0aCAmJiB0aW1lU3RyaW5nUGFydHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHZhbHVlLnNldEhvdXJzKHBhcnNlSW50KHRpbWVTdHJpbmdQYXJ0c1sxXSkpO1xuICAgICAgICB2YWx1ZS5zZXRNaW51dGVzKHBhcnNlSW50KHRpbWVTdHJpbmdQYXJ0c1syXSkpO1xuICAgICAgICB2YWx1ZS5zZXRTZWNvbmRzKDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW3ZhbHVlLCB0aW1lU3RyaW5nXTtcbiAgfVxuXG4gIHBhcnNlU3RyaW5nKGRhdGVUaW1lU3RyaW5nOiBzdHJpbmcsIG1pbGl0YXJ5VGltZTogYm9vbGVhbiwgdHlwZTogc3RyaW5nKTogW0RhdGUsIHN0cmluZ10ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnZGF0ZXRpbWUnOlxuICAgICAgICBsZXQgc3RyID0gZGF0ZVRpbWVTdHJpbmcucmVwbGFjZSgvLS9nLCAnLycpO1xuICAgICAgICBsZXQgcGFydHMgPSBzdHIuc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IFtkdCwgZHRzXSA9IHRoaXMucGFyc2VEYXRlU3RyaW5nKHBhcnRzWzBdKTtcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBsZXQgW3RtLCB0bXNdID0gdGhpcy5wYXJzZVRpbWVTdHJpbmcocGFydHNbMV0sIG1pbGl0YXJ5VGltZSk7XG4gICAgICAgICAgcmV0dXJuIFtuZXcgRGF0ZShkdC5zZXRIb3Vycyh0bS5nZXRIb3VycygpLCB0bS5nZXRNaW51dGVzKCkpKSwgYCR7ZHRzfSAke3Rtc31gXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2R0LCBkdHNdO1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlRGF0ZVN0cmluZyhkYXRlVGltZVN0cmluZyk7XG4gICAgICBjYXNlICd0aW1lJzpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VUaW1lU3RyaW5nKGRhdGVUaW1lU3RyaW5nLCBtaWxpdGFyeVRpbWUpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlzVmFsaWREYXRlUGFydCh2YWx1ZTogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGxldCBkYXRlUGFydCA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICBpZiAoZm9ybWF0LmluY2x1ZGVzKCdtJykgJiYgKGRhdGVQYXJ0ID49IDIgfHwgdmFsdWUubGVuZ3RoID09PSAyKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChmb3JtYXQuaW5jbHVkZXMoJ2QnKSAmJiAoZGF0ZVBhcnQgPj0gNCB8fCB2YWx1ZS5sZW5ndGggPT09IDIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGZvcm1hdC5pbmNsdWRlcygneScpICYmIGRhdGVQYXJ0ID49IDEwMDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==