/**
 * @fileoverview added by tsickle
 * Generated from: services/date-format/DateFormat.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Injectable } from '@angular/core';
// APP
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
export class DateFormatService {
    /**
     * @param {?} labels
     */
    constructor(labels) {
        this.labels = labels;
    }
    /**
     * @param {?} militaryTime
     * @return {?}
     */
    getTimeMask(militaryTime) {
        /** @type {?} */
        let mask = [/\d/, /\d/, /:/, /\d/, /\d/];
        /** @type {?} */
        let timeFormatArray = [];
        /** @type {?} */
        let timeFormatPartsArray = [];
        /** @type {?} */
        let timeFormat = this.labels.timeFormatPlaceholderAM.toLowerCase();
        if (militaryTime) {
            return mask;
        }
        else {
            timeFormatArray = timeFormat.split('hh:mm');
            if (timeFormatArray && timeFormatArray.length) {
                mask = [];
                for (let timeFormatPart of timeFormatArray) {
                    if (timeFormatPart === '') {
                        mask = mask.concat([/\d/, /\d|:/, /:|\d/, /\d|\w|\s/, /\d|\s|\w/]);
                    }
                    else if (timeFormatPart.length) {
                        for (let i = 0; i < timeFormatPart.length; i++) {
                            mask.push(/\s|\w|\d|\./);
                        }
                    }
                }
            }
        }
        return mask;
    }
    /**
     * @return {?}
     */
    getDateMask() {
        return [/\d/, /\d|\/|\.|\-/, /\/|\.|\-|\d/, /\d|\/|\.|\-/, /\d|\/|\.|\-/, /\d|\/|\.|\-/, /\d|\/|\.|\-/, /\d|\/|\.|\-/, /\d/, /\d/];
    }
    /**
     * @param {?=} militaryTime
     * @return {?}
     */
    getDateTimeMask(militaryTime = false) {
        return [...this.getDateMask(), /\,?/, /\s/, ...this.getTimeMask(militaryTime)];
    }
    /**
     * @param {?} militaryTime
     * @return {?}
     */
    getTimePlaceHolder(militaryTime) {
        if (militaryTime) {
            return this.labels.timeFormatPlaceholder24Hour;
        }
        return this.labels.timeFormatPlaceholderAM;
    }
    /**
     * @param {?} dateString
     * @return {?}
     */
    parseDateString(dateString) {
        /** @type {?} */
        let dateFormat = this.labels.dateFormatString();
        /** @type {?} */
        let dateFormatRegex = /(\w+)[\/|\.|\-](\w+)[\/|\.|\-](\w+)/gi;
        /** @type {?} */
        let dateValueRegex = /(\d+)[\/|\.|\-](\d+)[\/|\.|\-](\d+)/gi;
        /** @type {?} */
        let dateFormatTokens;
        /** @type {?} */
        let dateValueTokens;
        /** @type {?} */
        let year;
        /** @type {?} */
        let month;
        /** @type {?} */
        let day;
        /** @type {?} */
        let date = new Date();
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
            for (let i = 1; i < 4; i++) {
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
            let twoTokens = /\d{1,4}(\/|\.|\-)(\d{1,2})/.exec(dateString);
            /** @type {?} */
            let oneToken = /^(\d{1,4})$/.exec(dateString);
            /** @type {?} */
            let delimiter = /\w+(\/|\.|\-)\w+[\/|\.|\-]\w+/gi.exec(dateFormat);
            /** @type {?} */
            let dateStringWithDelimiter = dateString[dateString.length - 1].match(/\/|\.|\-/);
            if (twoTokens && twoTokens.length === 3 && this.isValidDatePart(twoTokens[2], dateFormatTokens[2]) && !dateStringWithDelimiter) {
                dateString = `${dateString}${delimiter[1]}`;
            }
            else if (oneToken && oneToken.length === 2 && this.isValidDatePart(oneToken[1], dateFormatTokens[1]) && !dateStringWithDelimiter) {
                dateString = `${dateString}${delimiter[1]}`;
            }
        }
        return [date, dateString];
    }
    /**
     * @param {?} timeString
     * @param {?} militaryTime
     * @return {?}
     */
    parseTimeString(timeString, militaryTime) {
        /** @type {?} */
        let value = new Date();
        /** @type {?} */
        let timeStringParts;
        /** @type {?} */
        let timeFormat;
        /** @type {?} */
        let amFormat = this.labels.timeFormatAM;
        /** @type {?} */
        let pmFormat = this.labels.timeFormatPM;
        if (!(timeString && timeString.includes(':'))) {
            return [value, timeString];
        }
        if (!militaryTime && amFormat && pmFormat) {
            /** @type {?} */
            let splits = [];
            /** @type {?} */
            let pm = false;
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
                for (let item of splits) {
                    if (item && item.trim().includes(':')) {
                        timeStringParts = item.trim().split(':');
                    }
                }
            }
            if (timeStringParts && timeStringParts.length && timeStringParts.length === 2) {
                /** @type {?} */
                let hours = parseInt(timeStringParts[0]);
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
    }
    /**
     * @param {?} dateTimeString
     * @param {?} militaryTime
     * @param {?} type
     * @return {?}
     */
    parseString(dateTimeString, militaryTime, type) {
        switch (type) {
            case 'datetime':
                /** @type {?} */
                let str = dateTimeString.replace(/-/g, '/');
                /** @type {?} */
                let parts = str.split(' ');
                let [dt, dts] = this.parseDateString(parts[0]);
                if (parts.length > 1) {
                    let [tm, tms] = this.parseTimeString(parts[1], militaryTime);
                    return [new Date(dt.setHours(tm.getHours(), tm.getMinutes())), `${dts} ${tms}`];
                }
                return [dt, dts];
            case 'date':
                return this.parseDateString(dateTimeString);
            case 'time':
                return this.parseTimeString(dateTimeString, militaryTime);
            default:
                return;
        }
    }
    /**
     * @param {?} value
     * @param {?} format
     * @return {?}
     */
    isValidDatePart(value, format) {
        /** @type {?} */
        let datePart = parseInt(value);
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
    }
}
DateFormatService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DateFormatService.ctorParameters = () => [
    { type: NovoLabelService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DateFormatService.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZUZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUdyRSxNQUFNLE9BQU8saUJBQWlCOzs7O0lBQzVCLFlBQW9CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQzs7Ozs7SUFFaEQsV0FBVyxDQUFDLFlBQXFCOztZQUMzQixJQUFJLEdBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzs7WUFDckQsZUFBZSxHQUFrQixFQUFFOztZQUNuQyxvQkFBb0IsR0FBa0IsRUFBRTs7WUFDdEMsVUFBVSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFO1FBQzFFLElBQUksWUFBWSxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLGVBQWUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLElBQUksZUFBZSxJQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUU7Z0JBQzdDLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ1YsS0FBSyxJQUFJLGNBQWMsSUFBSSxlQUFlLEVBQUU7b0JBQzFDLElBQUksY0FBYyxLQUFLLEVBQUUsRUFBRTt3QkFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMs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UUFBUSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2pFLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDeEUsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ25ELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQTNLRixVQUFVOzs7O1lBRkYsZ0JBQWdCOzs7Ozs7O0lBSVgsbUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1hdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cblxuICBnZXRUaW1lTWFzayhtaWxpdGFyeVRpbWU6IGJvb2xlYW4pOiBBcnJheTxSZWdFeHA+IHtcbiAgICBsZXQgbWFzazogQXJyYXk8UmVnRXhwPiA9IFsvXFxkLywgL1xcZC8sIC86LywgL1xcZC8sIC9cXGQvXSxcbiAgICAgIHRpbWVGb3JtYXRBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtdLFxuICAgICAgdGltZUZvcm1hdFBhcnRzQXJyYXk6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBsZXQgdGltZUZvcm1hdDogc3RyaW5nID0gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBsYWNlaG9sZGVyQU0udG9Mb3dlckNhc2UoKTtcbiAgICBpZiAobWlsaXRhcnlUaW1lKSB7XG4gICAgICByZXR1cm4gbWFzaztcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZUZvcm1hdEFycmF5ID0gdGltZUZvcm1hdC5zcGxpdCgnaGg6bW0nKTtcbiAgICAgIGlmICh0aW1lRm9ybWF0QXJyYXkgJiYgdGltZUZvcm1hdEFycmF5Lmxlbmd0aCkge1xuICAgICAgICBtYXNrID0gW107XG4gICAgICAgIGZvciAobGV0IHRpbWVGb3JtYXRQYXJ0IG9mIHRpbWVGb3JtYXRBcnJheSkge1xuICAgICAgICAgIGlmICh0aW1lRm9ybWF0UGFydCA9PT0gJycpIHtcbiAgICAgICAgICAgIG1hc2sgPSBtYXNrLmNvbmNhdChbL1xcZC8sIC9cXGR8Oi8sIC86fFxcZC8sIC9cXGR8XFx3fFxccy8sIC9cXGR8XFxzfFxcdy9dKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRpbWVGb3JtYXRQYXJ0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lRm9ybWF0UGFydC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBtYXNrLnB1c2goL1xcc3xcXHd8XFxkfFxcLi8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFzaztcbiAgfVxuXG4gIGdldERhdGVNYXNrKCk6IEFycmF5PFJlZ0V4cD4ge1xuICAgIHJldHVybiBbL1xcZC8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFwvfFxcLnxcXC18XFxkLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFxkfFxcL3xcXC58XFwtLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFxkLywgL1xcZC9dO1xuICB9XG5cbiAgZ2V0RGF0ZVRpbWVNYXNrKG1pbGl0YXJ5VGltZTogYm9vbGVhbiA9IGZhbHNlKTogQXJyYXk8UmVnRXhwPiB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmdldERhdGVNYXNrKCksIC9cXCw/LywgL1xccy8sIC4uLnRoaXMuZ2V0VGltZU1hc2sobWlsaXRhcnlUaW1lKV07XG4gIH1cblxuICBnZXRUaW1lUGxhY2VIb2xkZXIobWlsaXRhcnlUaW1lOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBpZiAobWlsaXRhcnlUaW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBsYWNlaG9sZGVyMjRIb3VyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBsYWNlaG9sZGVyQU07XG4gIH1cblxuICBwYXJzZURhdGVTdHJpbmcoZGF0ZVN0cmluZzogc3RyaW5nKTogW0RhdGUsIHN0cmluZ10ge1xuICAgIGxldCBkYXRlRm9ybWF0OiBzdHJpbmcgPSB0aGlzLmxhYmVscy5kYXRlRm9ybWF0U3RyaW5nKCksXG4gICAgICBkYXRlRm9ybWF0UmVnZXggPSAvKFxcdyspW1xcL3xcXC58XFwtXShcXHcrKVtcXC98XFwufFxcLV0oXFx3KykvZ2ksXG4gICAgICBkYXRlVmFsdWVSZWdleCA9IC8oXFxkKylbXFwvfFxcLnxcXC1dKFxcZCspW1xcL3xcXC58XFwtXShcXGQrKS9naSxcbiAgICAgIGRhdGVGb3JtYXRUb2tlbnM6IEFycmF5PHN0cmluZz4sXG4gICAgICBkYXRlVmFsdWVUb2tlbnM6IEFycmF5PHN0cmluZz4sXG4gICAgICB5ZWFyOiBudW1iZXIsXG4gICAgICBtb250aDogbnVtYmVyLFxuICAgICAgZGF5OiBudW1iZXIsXG4gICAgICBkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICBpZiAoSGVscGVycy5pc0VtcHR5KGRhdGVGb3JtYXQpKSB7XG4gICAgICAvLyBEZWZhdWx0IHRvIE1NL2RkL3l5eXlcbiAgICAgIGRhdGVGb3JtYXQgPSAnbW0vZGQveXl5eSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVGb3JtYXQgPSBkYXRlRm9ybWF0LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIGRhdGVGb3JtYXRUb2tlbnMgPSBkYXRlRm9ybWF0UmVnZXguZXhlYyhkYXRlRm9ybWF0KTtcbiAgICBkYXRlVmFsdWVUb2tlbnMgPSBkYXRlVmFsdWVSZWdleC5leGVjKGRhdGVTdHJpbmcpO1xuICAgIGlmIChkYXRlRm9ybWF0VG9rZW5zICYmIGRhdGVGb3JtYXRUb2tlbnMubGVuZ3RoID09PSA0ICYmIGRhdGVWYWx1ZVRva2VucyAmJiBkYXRlVmFsdWVUb2tlbnMubGVuZ3RoID09PSA0KSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgICBpZiAoZGF0ZUZvcm1hdFRva2Vuc1tpXS5pbmNsdWRlcygnbScpKSB7XG4gICAgICAgICAgbW9udGggPSBwYXJzZUludChkYXRlVmFsdWVUb2tlbnNbaV0pIC0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRlRm9ybWF0VG9rZW5zW2ldLmluY2x1ZGVzKCdkJykpIHtcbiAgICAgICAgICBkYXkgPSBwYXJzZUludChkYXRlVmFsdWVUb2tlbnNbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHllYXIgPSBwYXJzZUludChkYXRlVmFsdWVUb2tlbnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiB5ZWFyID4gMTkwMCAmJiBkYXkgPiAwICYmIGRheSA8PSAzMSkge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRlRm9ybWF0VG9rZW5zICYmIGRhdGVGb3JtYXRUb2tlbnMubGVuZ3RoID09PSA0ICYmIGRhdGVTdHJpbmcubGVuZ3RoID49IDEpIHtcbiAgICAgIGxldCB0d29Ub2tlbnMgPSAvXFxkezEsNH0oXFwvfFxcLnxcXC0pKFxcZHsxLDJ9KS8uZXhlYyhkYXRlU3RyaW5nKTtcbiAgICAgIGxldCBvbmVUb2tlbiA9IC9eKFxcZHsxLDR9KSQvLmV4ZWMoZGF0ZVN0cmluZyk7XG4gICAgICBsZXQgZGVsaW1pdGVyID0gL1xcdysoXFwvfFxcLnxcXC0pXFx3K1tcXC98XFwufFxcLV1cXHcrL2dpLmV4ZWMoZGF0ZUZvcm1hdCk7XG4gICAgICBsZXQgZGF0ZVN0cmluZ1dpdGhEZWxpbWl0ZXIgPSBkYXRlU3RyaW5nW2RhdGVTdHJpbmcubGVuZ3RoIC0gMV0ubWF0Y2goL1xcL3xcXC58XFwtLyk7XG4gICAgICBpZiAodHdvVG9rZW5zICYmIHR3b1Rva2Vucy5sZW5ndGggPT09IDMgJiYgdGhpcy5pc1ZhbGlkRGF0ZVBhcnQodHdvVG9rZW5zWzJdLCBkYXRlRm9ybWF0VG9rZW5zWzJdKSAmJiAhZGF0ZVN0cmluZ1dpdGhEZWxpbWl0ZXIpIHtcbiAgICAgICAgZGF0ZVN0cmluZyA9IGAke2RhdGVTdHJpbmd9JHtkZWxpbWl0ZXJbMV19YDtcbiAgICAgIH0gZWxzZSBpZiAob25lVG9rZW4gJiYgb25lVG9rZW4ubGVuZ3RoID09PSAyICYmIHRoaXMuaXNWYWxpZERhdGVQYXJ0KG9uZVRva2VuWzFdLCBkYXRlRm9ybWF0VG9rZW5zWzFdKSAmJiAhZGF0ZVN0cmluZ1dpdGhEZWxpbWl0ZXIpIHtcbiAgICAgICAgZGF0ZVN0cmluZyA9IGAke2RhdGVTdHJpbmd9JHtkZWxpbWl0ZXJbMV19YDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtkYXRlLCBkYXRlU3RyaW5nXTtcbiAgfVxuXG4gIHBhcnNlVGltZVN0cmluZyh0aW1lU3RyaW5nOiBzdHJpbmcsIG1pbGl0YXJ5VGltZTogYm9vbGVhbik6IFtEYXRlLCBzdHJpbmddIHtcbiAgICBsZXQgdmFsdWU6IERhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgdGltZVN0cmluZ1BhcnRzOiBBcnJheTxzdHJpbmc+LFxuICAgICAgdGltZUZvcm1hdDogc3RyaW5nO1xuICAgIGxldCBhbUZvcm1hdCA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRBTTtcbiAgICBsZXQgcG1Gb3JtYXQgPSB0aGlzLmxhYmVscy50aW1lRm9ybWF0UE07XG4gICAgaWYgKCEodGltZVN0cmluZyAmJiB0aW1lU3RyaW5nLmluY2x1ZGVzKCc6JykpKSB7XG4gICAgICByZXR1cm4gW3ZhbHVlLCB0aW1lU3RyaW5nXTtcbiAgICB9XG4gICAgaWYgKCFtaWxpdGFyeVRpbWUgJiYgYW1Gb3JtYXQgJiYgcG1Gb3JtYXQpIHtcbiAgICAgIGxldCBzcGxpdHM6IEFycmF5PHN0cmluZz4gPSBbXSxcbiAgICAgICAgcG06IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgIGFtRm9ybWF0ID0gdGhpcy5sYWJlbHMudGltZUZvcm1hdEFNLnRvTG93ZXJDYXNlKCk7XG4gICAgICBwbUZvcm1hdCA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQTS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdGltZVN0cmluZyA9IHRpbWVTdHJpbmcudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmICh0aW1lU3RyaW5nLmluY2x1ZGVzKGFtRm9ybWF0KSkge1xuICAgICAgICBzcGxpdHMgPSB0aW1lU3RyaW5nLnNwbGl0KGFtRm9ybWF0KTtcbiAgICAgIH0gZWxzZSBpZiAodGltZVN0cmluZy5pbmNsdWRlcyhwbUZvcm1hdCkpIHtcbiAgICAgICAgc3BsaXRzID0gdGltZVN0cmluZy5zcGxpdChwbUZvcm1hdCk7XG4gICAgICAgIHBtID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChzcGxpdHMgJiYgc3BsaXRzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHNwbGl0cykge1xuICAgICAgICAgIGlmIChpdGVtICYmIGl0ZW0udHJpbSgpLmluY2x1ZGVzKCc6JykpIHtcbiAgICAgICAgICAgIHRpbWVTdHJpbmdQYXJ0cyA9IGl0ZW0udHJpbSgpLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGltZVN0cmluZ1BhcnRzICYmIHRpbWVTdHJpbmdQYXJ0cy5sZW5ndGggJiYgdGltZVN0cmluZ1BhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBsZXQgaG91cnM6IG51bWJlciA9IHBhcnNlSW50KHRpbWVTdHJpbmdQYXJ0c1swXSk7XG4gICAgICAgIGlmIChob3VycyA9PT0gMTIgJiYgcG0pIHtcbiAgICAgICAgICBob3VycyA9IDEyO1xuICAgICAgICB9IGVsc2UgaWYgKHBtKSB7XG4gICAgICAgICAgaG91cnMgPSBob3VycyArIDEyO1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgICAgIGhvdXJzID0gMDtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZS5zZXRIb3Vycyhob3Vycyk7XG4gICAgICAgIHZhbHVlLnNldE1pbnV0ZXMocGFyc2VJbnQodGltZVN0cmluZ1BhcnRzWzFdKSk7XG4gICAgICAgIHZhbHVlLnNldFNlY29uZHMoMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVTdHJpbmdQYXJ0cyA9IC8oXFxkezEsMn0pOihcXGR7Mn0pLy5leGVjKHRpbWVTdHJpbmcpO1xuICAgICAgaWYgKHRpbWVTdHJpbmdQYXJ0cyAmJiB0aW1lU3RyaW5nUGFydHMubGVuZ3RoICYmIHRpbWVTdHJpbmdQYXJ0cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgdmFsdWUuc2V0SG91cnMocGFyc2VJbnQodGltZVN0cmluZ1BhcnRzWzFdKSk7XG4gICAgICAgIHZhbHVlLnNldE1pbnV0ZXMocGFyc2VJbnQodGltZVN0cmluZ1BhcnRzWzJdKSk7XG4gICAgICAgIHZhbHVlLnNldFNlY29uZHMoMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbdmFsdWUsIHRpbWVTdHJpbmddO1xuICB9XG5cbiAgcGFyc2VTdHJpbmcoZGF0ZVRpbWVTdHJpbmc6IHN0cmluZywgbWlsaXRhcnlUaW1lOiBib29sZWFuLCB0eXBlOiBzdHJpbmcpOiBbRGF0ZSwgc3RyaW5nXSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdkYXRldGltZSc6XG4gICAgICAgIGxldCBzdHIgPSBkYXRlVGltZVN0cmluZy5yZXBsYWNlKC8tL2csICcvJyk7XG4gICAgICAgIGxldCBwYXJ0cyA9IHN0ci5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgW2R0LCBkdHNdID0gdGhpcy5wYXJzZURhdGVTdHJpbmcocGFydHNbMF0pO1xuICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGxldCBbdG0sIHRtc10gPSB0aGlzLnBhcnNlVGltZVN0cmluZyhwYXJ0c1sxXSwgbWlsaXRhcnlUaW1lKTtcbiAgICAgICAgICByZXR1cm4gW25ldyBEYXRlKGR0LnNldEhvdXJzKHRtLmdldEhvdXJzKCksIHRtLmdldE1pbnV0ZXMoKSkpLCBgJHtkdHN9ICR7dG1zfWBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZHQsIGR0c107XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VEYXRlU3RyaW5nKGRhdGVUaW1lU3RyaW5nKTtcbiAgICAgIGNhc2UgJ3RpbWUnOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVRpbWVTdHJpbmcoZGF0ZVRpbWVTdHJpbmcsIG1pbGl0YXJ5VGltZSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaXNWYWxpZERhdGVQYXJ0KHZhbHVlOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgbGV0IGRhdGVQYXJ0ID0gcGFyc2VJbnQodmFsdWUpO1xuICAgIGlmIChmb3JtYXQuaW5jbHVkZXMoJ20nKSAmJiAoZGF0ZVBhcnQgPj0gMiB8fCB2YWx1ZS5sZW5ndGggPT09IDIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGZvcm1hdC5pbmNsdWRlcygnZCcpICYmIChkYXRlUGFydCA+PSA0IHx8IHZhbHVlLmxlbmd0aCA9PT0gMikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZm9ybWF0LmluY2x1ZGVzKCd5JykgJiYgZGF0ZVBhcnQgPj0gMTAwMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19