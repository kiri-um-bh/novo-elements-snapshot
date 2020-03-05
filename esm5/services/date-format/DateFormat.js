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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZUZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFckU7SUFFRSwyQkFBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDOzs7OztJQUVoRCx1Q0FBVzs7OztJQUFYLFVBQVksWUFBcUI7OztZQUMzQixJQUFJLEdBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzs7WUFDckQsZUFBZSxHQUFrQixFQUFFOztZQUNuQyxvQkFBb0IsR0FBa0IsRUFBRTs7WUFDcEMsVUFBVSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFO1FBQzVFLElBQUksWUFBWSxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLGVBQWUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLElBQUksZUFBZSxJQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUU7Z0JBQzdDLElBQUksR0FBRyxFQUFFLENBQUM7O29CQUNWLEtBQTZCLElBQUEsb0JBQUEsaUJBQUEsZUFBZSxDQUFBLGdEQUFBLDZFQUFFO3dCQUF6QyxJQUFNLGNBQWMsNEJBQUE7d0JBQ3ZCLElBQUksY0FBYyxLQUFLLEVBQUUsRUFBRTs0QkFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0s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SSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2pFLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDeEUsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ25ELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQTNLRixVQUFVOzs7O2dCQUZGLGdCQUFnQjs7SUE4S3pCLHdCQUFDO0NBQUEsQUE1S0QsSUE0S0M7U0EzS1ksaUJBQWlCOzs7Ozs7SUFDaEIsbUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1hdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cblxuICBnZXRUaW1lTWFzayhtaWxpdGFyeVRpbWU6IGJvb2xlYW4pOiBBcnJheTxSZWdFeHA+IHtcbiAgICBsZXQgbWFzazogQXJyYXk8UmVnRXhwPiA9IFsvXFxkLywgL1xcZC8sIC86LywgL1xcZC8sIC9cXGQvXSxcbiAgICAgIHRpbWVGb3JtYXRBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtdLFxuICAgICAgdGltZUZvcm1hdFBhcnRzQXJyYXk6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBjb25zdCB0aW1lRm9ybWF0OiBzdHJpbmcgPSB0aGlzLmxhYmVscy50aW1lRm9ybWF0UGxhY2Vob2xkZXJBTS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChtaWxpdGFyeVRpbWUpIHtcbiAgICAgIHJldHVybiBtYXNrO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lRm9ybWF0QXJyYXkgPSB0aW1lRm9ybWF0LnNwbGl0KCdoaDptbScpO1xuICAgICAgaWYgKHRpbWVGb3JtYXRBcnJheSAmJiB0aW1lRm9ybWF0QXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIG1hc2sgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCB0aW1lRm9ybWF0UGFydCBvZiB0aW1lRm9ybWF0QXJyYXkpIHtcbiAgICAgICAgICBpZiAodGltZUZvcm1hdFBhcnQgPT09ICcnKSB7XG4gICAgICAgICAgICBtYXNrID0gbWFzay5jb25jYXQoWy9cXGQvLCAvXFxkfDovLCAvOnxcXGQvLCAvXFxkfFxcd3xcXHMvLCAvXFxkfFxcc3xcXHcvXSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aW1lRm9ybWF0UGFydC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZUZvcm1hdFBhcnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgbWFzay5wdXNoKC9cXHN8XFx3fFxcZHxcXC4vKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cblxuICBnZXREYXRlTWFzaygpOiBBcnJheTxSZWdFeHA+IHtcbiAgICByZXR1cm4gWy9cXGQvLCAvXFxkfFxcL3xcXC58XFwtLywgL1xcL3xcXC58XFwtfFxcZC8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFxkfFxcL3xcXC58XFwtLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFxkfFxcL3xcXC58XFwtLywgL1xcZC8sIC9cXGQvXTtcbiAgfVxuXG4gIGdldERhdGVUaW1lTWFzayhtaWxpdGFyeVRpbWU6IGJvb2xlYW4gPSBmYWxzZSk6IEFycmF5PFJlZ0V4cD4ge1xuICAgIHJldHVybiBbLi4udGhpcy5nZXREYXRlTWFzaygpLCAvXFwsPy8sIC9cXHMvLCAuLi50aGlzLmdldFRpbWVNYXNrKG1pbGl0YXJ5VGltZSldO1xuICB9XG5cbiAgZ2V0VGltZVBsYWNlSG9sZGVyKG1pbGl0YXJ5VGltZTogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgaWYgKG1pbGl0YXJ5VGltZSkge1xuICAgICAgcmV0dXJuIHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQbGFjZWhvbGRlcjI0SG91cjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQbGFjZWhvbGRlckFNO1xuICB9XG5cbiAgcGFyc2VEYXRlU3RyaW5nKGRhdGVTdHJpbmc6IHN0cmluZyk6IFtEYXRlLCBzdHJpbmddIHtcbiAgICBsZXQgZGF0ZUZvcm1hdDogc3RyaW5nID0gdGhpcy5sYWJlbHMuZGF0ZUZvcm1hdFN0cmluZygpLFxuICAgICAgZGF0ZUZvcm1hdFJlZ2V4ID0gLyhcXHcrKVtcXC98XFwufFxcLV0oXFx3KylbXFwvfFxcLnxcXC1dKFxcdyspL2dpLFxuICAgICAgZGF0ZVZhbHVlUmVnZXggPSAvKFxcZCspW1xcL3xcXC58XFwtXShcXGQrKVtcXC98XFwufFxcLV0oXFxkKykvZ2ksXG4gICAgICBkYXRlRm9ybWF0VG9rZW5zOiBBcnJheTxzdHJpbmc+LFxuICAgICAgZGF0ZVZhbHVlVG9rZW5zOiBBcnJheTxzdHJpbmc+LFxuICAgICAgeWVhcjogbnVtYmVyLFxuICAgICAgbW9udGg6IG51bWJlcixcbiAgICAgIGRheTogbnVtYmVyLFxuICAgICAgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgaWYgKEhlbHBlcnMuaXNFbXB0eShkYXRlRm9ybWF0KSkge1xuICAgICAgLy8gRGVmYXVsdCB0byBNTS9kZC95eXl5XG4gICAgICBkYXRlRm9ybWF0ID0gJ21tL2RkL3l5eXknO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlRm9ybWF0ID0gZGF0ZUZvcm1hdC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBkYXRlRm9ybWF0VG9rZW5zID0gZGF0ZUZvcm1hdFJlZ2V4LmV4ZWMoZGF0ZUZvcm1hdCk7XG4gICAgZGF0ZVZhbHVlVG9rZW5zID0gZGF0ZVZhbHVlUmVnZXguZXhlYyhkYXRlU3RyaW5nKTtcbiAgICBpZiAoZGF0ZUZvcm1hdFRva2VucyAmJiBkYXRlRm9ybWF0VG9rZW5zLmxlbmd0aCA9PT0gNCAmJiBkYXRlVmFsdWVUb2tlbnMgJiYgZGF0ZVZhbHVlVG9rZW5zLmxlbmd0aCA9PT0gNCkge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgaWYgKGRhdGVGb3JtYXRUb2tlbnNbaV0uaW5jbHVkZXMoJ20nKSkge1xuICAgICAgICAgIG1vbnRoID0gcGFyc2VJbnQoZGF0ZVZhbHVlVG9rZW5zW2ldKSAtIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0ZUZvcm1hdFRva2Vuc1tpXS5pbmNsdWRlcygnZCcpKSB7XG4gICAgICAgICAgZGF5ID0gcGFyc2VJbnQoZGF0ZVZhbHVlVG9rZW5zW2ldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ZWFyID0gcGFyc2VJbnQoZGF0ZVZhbHVlVG9rZW5zW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgeWVhciA+IDE5MDAgJiYgZGF5ID4gMCAmJiBkYXkgPD0gMzEpIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGF0ZUZvcm1hdFRva2VucyAmJiBkYXRlRm9ybWF0VG9rZW5zLmxlbmd0aCA9PT0gNCAmJiBkYXRlU3RyaW5nLmxlbmd0aCA+PSAxKSB7XG4gICAgICBjb25zdCB0d29Ub2tlbnMgPSAvXFxkezEsNH0oXFwvfFxcLnxcXC0pKFxcZHsxLDJ9KS8uZXhlYyhkYXRlU3RyaW5nKTtcbiAgICAgIGNvbnN0IG9uZVRva2VuID0gL14oXFxkezEsNH0pJC8uZXhlYyhkYXRlU3RyaW5nKTtcbiAgICAgIGNvbnN0IGRlbGltaXRlciA9IC9cXHcrKFxcL3xcXC58XFwtKVxcdytbXFwvfFxcLnxcXC1dXFx3Ky9naS5leGVjKGRhdGVGb3JtYXQpO1xuICAgICAgY29uc3QgZGF0ZVN0cmluZ1dpdGhEZWxpbWl0ZXIgPSBkYXRlU3RyaW5nW2RhdGVTdHJpbmcubGVuZ3RoIC0gMV0ubWF0Y2goL1xcL3xcXC58XFwtLyk7XG4gICAgICBpZiAodHdvVG9rZW5zICYmIHR3b1Rva2Vucy5sZW5ndGggPT09IDMgJiYgdGhpcy5pc1ZhbGlkRGF0ZVBhcnQodHdvVG9rZW5zWzJdLCBkYXRlRm9ybWF0VG9rZW5zWzJdKSAmJiAhZGF0ZVN0cmluZ1dpdGhEZWxpbWl0ZXIpIHtcbiAgICAgICAgZGF0ZVN0cmluZyA9IGAke2RhdGVTdHJpbmd9JHtkZWxpbWl0ZXJbMV19YDtcbiAgICAgIH0gZWxzZSBpZiAob25lVG9rZW4gJiYgb25lVG9rZW4ubGVuZ3RoID09PSAyICYmIHRoaXMuaXNWYWxpZERhdGVQYXJ0KG9uZVRva2VuWzFdLCBkYXRlRm9ybWF0VG9rZW5zWzFdKSAmJiAhZGF0ZVN0cmluZ1dpdGhEZWxpbWl0ZXIpIHtcbiAgICAgICAgZGF0ZVN0cmluZyA9IGAke2RhdGVTdHJpbmd9JHtkZWxpbWl0ZXJbMV19YDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtkYXRlLCBkYXRlU3RyaW5nXTtcbiAgfVxuXG4gIHBhcnNlVGltZVN0cmluZyh0aW1lU3RyaW5nOiBzdHJpbmcsIG1pbGl0YXJ5VGltZTogYm9vbGVhbik6IFtEYXRlLCBzdHJpbmddIHtcbiAgICBsZXQgdmFsdWU6IERhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgdGltZVN0cmluZ1BhcnRzOiBBcnJheTxzdHJpbmc+LFxuICAgICAgdGltZUZvcm1hdDogc3RyaW5nO1xuICAgIGxldCBhbUZvcm1hdCA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRBTTtcbiAgICBsZXQgcG1Gb3JtYXQgPSB0aGlzLmxhYmVscy50aW1lRm9ybWF0UE07XG4gICAgaWYgKCEodGltZVN0cmluZyAmJiB0aW1lU3RyaW5nLmluY2x1ZGVzKCc6JykpKSB7XG4gICAgICByZXR1cm4gW3ZhbHVlLCB0aW1lU3RyaW5nXTtcbiAgICB9XG4gICAgaWYgKCFtaWxpdGFyeVRpbWUgJiYgYW1Gb3JtYXQgJiYgcG1Gb3JtYXQpIHtcbiAgICAgIGxldCBzcGxpdHM6IEFycmF5PHN0cmluZz4gPSBbXSxcbiAgICAgICAgcG06IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgIGFtRm9ybWF0ID0gdGhpcy5sYWJlbHMudGltZUZvcm1hdEFNLnRvTG93ZXJDYXNlKCk7XG4gICAgICBwbUZvcm1hdCA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQTS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdGltZVN0cmluZyA9IHRpbWVTdHJpbmcudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmICh0aW1lU3RyaW5nLmluY2x1ZGVzKGFtRm9ybWF0KSkge1xuICAgICAgICBzcGxpdHMgPSB0aW1lU3RyaW5nLnNwbGl0KGFtRm9ybWF0KTtcbiAgICAgIH0gZWxzZSBpZiAodGltZVN0cmluZy5pbmNsdWRlcyhwbUZvcm1hdCkpIHtcbiAgICAgICAgc3BsaXRzID0gdGltZVN0cmluZy5zcGxpdChwbUZvcm1hdCk7XG4gICAgICAgIHBtID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChzcGxpdHMgJiYgc3BsaXRzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc3BsaXRzKSB7XG4gICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS50cmltKCkuaW5jbHVkZXMoJzonKSkge1xuICAgICAgICAgICAgdGltZVN0cmluZ1BhcnRzID0gaXRlbS50cmltKCkuc3BsaXQoJzonKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aW1lU3RyaW5nUGFydHMgJiYgdGltZVN0cmluZ1BhcnRzLmxlbmd0aCAmJiB0aW1lU3RyaW5nUGFydHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGxldCBob3VyczogbnVtYmVyID0gcGFyc2VJbnQodGltZVN0cmluZ1BhcnRzWzBdKTtcbiAgICAgICAgaWYgKGhvdXJzID09PSAxMiAmJiBwbSkge1xuICAgICAgICAgIGhvdXJzID0gMTI7XG4gICAgICAgIH0gZWxzZSBpZiAocG0pIHtcbiAgICAgICAgICBob3VycyA9IGhvdXJzICsgMTI7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICAgICAgaG91cnMgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlLnNldEhvdXJzKGhvdXJzKTtcbiAgICAgICAgdmFsdWUuc2V0TWludXRlcyhwYXJzZUludCh0aW1lU3RyaW5nUGFydHNbMV0pKTtcbiAgICAgICAgdmFsdWUuc2V0U2Vjb25kcygwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGltZVN0cmluZ1BhcnRzID0gLyhcXGR7MSwyfSk6KFxcZHsyfSkvLmV4ZWModGltZVN0cmluZyk7XG4gICAgICBpZiAodGltZVN0cmluZ1BhcnRzICYmIHRpbWVTdHJpbmdQYXJ0cy5sZW5ndGggJiYgdGltZVN0cmluZ1BhcnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICB2YWx1ZS5zZXRIb3VycyhwYXJzZUludCh0aW1lU3RyaW5nUGFydHNbMV0pKTtcbiAgICAgICAgdmFsdWUuc2V0TWludXRlcyhwYXJzZUludCh0aW1lU3RyaW5nUGFydHNbMl0pKTtcbiAgICAgICAgdmFsdWUuc2V0U2Vjb25kcygwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFt2YWx1ZSwgdGltZVN0cmluZ107XG4gIH1cblxuICBwYXJzZVN0cmluZyhkYXRlVGltZVN0cmluZzogc3RyaW5nLCBtaWxpdGFyeVRpbWU6IGJvb2xlYW4sIHR5cGU6IHN0cmluZyk6IFtEYXRlLCBzdHJpbmddIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2RhdGV0aW1lJzpcbiAgICAgICAgY29uc3Qgc3RyID0gZGF0ZVRpbWVTdHJpbmcucmVwbGFjZSgvLS9nLCAnLycpO1xuICAgICAgICBjb25zdCBwYXJ0cyA9IHN0ci5zcGxpdCgnICcpO1xuICAgICAgICBjb25zdCBbZHQsIGR0c10gPSB0aGlzLnBhcnNlRGF0ZVN0cmluZyhwYXJ0c1swXSk7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgY29uc3QgW3RtLCB0bXNdID0gdGhpcy5wYXJzZVRpbWVTdHJpbmcocGFydHNbMV0sIG1pbGl0YXJ5VGltZSk7XG4gICAgICAgICAgcmV0dXJuIFtuZXcgRGF0ZShkdC5zZXRIb3Vycyh0bS5nZXRIb3VycygpLCB0bS5nZXRNaW51dGVzKCkpKSwgYCR7ZHRzfSAke3Rtc31gXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2R0LCBkdHNdO1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlRGF0ZVN0cmluZyhkYXRlVGltZVN0cmluZyk7XG4gICAgICBjYXNlICd0aW1lJzpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VUaW1lU3RyaW5nKGRhdGVUaW1lU3RyaW5nLCBtaWxpdGFyeVRpbWUpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlzVmFsaWREYXRlUGFydCh2YWx1ZTogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRhdGVQYXJ0ID0gcGFyc2VJbnQodmFsdWUpO1xuICAgIGlmIChmb3JtYXQuaW5jbHVkZXMoJ20nKSAmJiAoZGF0ZVBhcnQgPj0gMiB8fCB2YWx1ZS5sZW5ndGggPT09IDIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGZvcm1hdC5pbmNsdWRlcygnZCcpICYmIChkYXRlUGFydCA+PSA0IHx8IHZhbHVlLmxlbmd0aCA9PT0gMikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZm9ybWF0LmluY2x1ZGVzKCd5JykgJiYgZGF0ZVBhcnQgPj0gMTAwMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19