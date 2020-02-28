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
        const timeFormat = this.labels.timeFormatPlaceholderAM.toLowerCase();
        if (militaryTime) {
            return mask;
        }
        else {
            timeFormatArray = timeFormat.split('hh:mm');
            if (timeFormatArray && timeFormatArray.length) {
                mask = [];
                for (const timeFormatPart of timeFormatArray) {
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
            const twoTokens = /\d{1,4}(\/|\.|\-)(\d{1,2})/.exec(dateString);
            /** @type {?} */
            const oneToken = /^(\d{1,4})$/.exec(dateString);
            /** @type {?} */
            const delimiter = /\w+(\/|\.|\-)\w+[\/|\.|\-]\w+/gi.exec(dateFormat);
            /** @type {?} */
            const dateStringWithDelimiter = dateString[dateString.length - 1].match(/\/|\.|\-/);
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
                for (const item of splits) {
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
                const str = dateTimeString.replace(/-/g, '/');
                /** @type {?} */
                const parts = str.split(' ');
                const [dt, dts] = this.parseDateString(parts[0]);
                if (parts.length > 1) {
                    const [tm, tms] = this.parseTimeString(parts[1], militaryTime);
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
        const datePart = parseInt(value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZUZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUdyRSxNQUFNLE9BQU8saUJBQWlCOzs7O0lBQzVCLFlBQW9CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQzs7Ozs7SUFFaEQsV0FBVyxDQUFDLFlBQXFCOztZQUMzQixJQUFJLEdBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzs7WUFDckQsZUFBZSxHQUFrQixFQUFFOztZQUNuQyxvQkFBb0IsR0FBa0IsRUFBRTs7Y0FDcEMsVUFBVSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFO1FBQzVFLElBQUksWUFBWSxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLGVBQWUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLElBQUksZUFBZSxJQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUU7Z0JBQzdDLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ1YsS0FBSyxNQUFNLGNBQWMsSUFBSSxlQUFlLEVBQUU7b0JBQzVDLElBQUksY0FBYyxLQUFLLEVBQUUsRUFBRTt3QkFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMs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QUFRLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDakUsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN4RSxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDbkQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBM0tGLFVBQVU7Ozs7WUFGRixnQkFBZ0I7Ozs7Ozs7SUFJWCxtQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlRm9ybWF0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIGdldFRpbWVNYXNrKG1pbGl0YXJ5VGltZTogYm9vbGVhbik6IEFycmF5PFJlZ0V4cD4ge1xuICAgIGxldCBtYXNrOiBBcnJheTxSZWdFeHA+ID0gWy9cXGQvLCAvXFxkLywgLzovLCAvXFxkLywgL1xcZC9dLFxuICAgICAgdGltZUZvcm1hdEFycmF5OiBBcnJheTxzdHJpbmc+ID0gW10sXG4gICAgICB0aW1lRm9ybWF0UGFydHNBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIGNvbnN0IHRpbWVGb3JtYXQ6IHN0cmluZyA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQbGFjZWhvbGRlckFNLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG1pbGl0YXJ5VGltZSkge1xuICAgICAgcmV0dXJuIG1hc2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVGb3JtYXRBcnJheSA9IHRpbWVGb3JtYXQuc3BsaXQoJ2hoOm1tJyk7XG4gICAgICBpZiAodGltZUZvcm1hdEFycmF5ICYmIHRpbWVGb3JtYXRBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgbWFzayA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHRpbWVGb3JtYXRQYXJ0IG9mIHRpbWVGb3JtYXRBcnJheSkge1xuICAgICAgICAgIGlmICh0aW1lRm9ybWF0UGFydCA9PT0gJycpIHtcbiAgICAgICAgICAgIG1hc2sgPSBtYXNrLmNvbmNhdChbL1xcZC8sIC9cXGR8Oi8sIC86fFxcZC8sIC9cXGR8XFx3fFxccy8sIC9cXGR8XFxzfFxcdy9dKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRpbWVGb3JtYXRQYXJ0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lRm9ybWF0UGFydC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBtYXNrLnB1c2goL1xcc3xcXHd8XFxkfFxcLi8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFzaztcbiAgfVxuXG4gIGdldERhdGVNYXNrKCk6IEFycmF5PFJlZ0V4cD4ge1xuICAgIHJldHVybiBbL1xcZC8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFwvfFxcLnxcXC18XFxkLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFxkfFxcL3xcXC58XFwtLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFxkLywgL1xcZC9dO1xuICB9XG5cbiAgZ2V0RGF0ZVRpbWVNYXNrKG1pbGl0YXJ5VGltZTogYm9vbGVhbiA9IGZhbHNlKTogQXJyYXk8UmVnRXhwPiB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmdldERhdGVNYXNrKCksIC9cXCw/LywgL1xccy8sIC4uLnRoaXMuZ2V0VGltZU1hc2sobWlsaXRhcnlUaW1lKV07XG4gIH1cblxuICBnZXRUaW1lUGxhY2VIb2xkZXIobWlsaXRhcnlUaW1lOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBpZiAobWlsaXRhcnlUaW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBsYWNlaG9sZGVyMjRIb3VyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBsYWNlaG9sZGVyQU07XG4gIH1cblxuICBwYXJzZURhdGVTdHJpbmcoZGF0ZVN0cmluZzogc3RyaW5nKTogW0RhdGUsIHN0cmluZ10ge1xuICAgIGxldCBkYXRlRm9ybWF0OiBzdHJpbmcgPSB0aGlzLmxhYmVscy5kYXRlRm9ybWF0U3RyaW5nKCksXG4gICAgICBkYXRlRm9ybWF0UmVnZXggPSAvKFxcdyspW1xcL3xcXC58XFwtXShcXHcrKVtcXC98XFwufFxcLV0oXFx3KykvZ2ksXG4gICAgICBkYXRlVmFsdWVSZWdleCA9IC8oXFxkKylbXFwvfFxcLnxcXC1dKFxcZCspW1xcL3xcXC58XFwtXShcXGQrKS9naSxcbiAgICAgIGRhdGVGb3JtYXRUb2tlbnM6IEFycmF5PHN0cmluZz4sXG4gICAgICBkYXRlVmFsdWVUb2tlbnM6IEFycmF5PHN0cmluZz4sXG4gICAgICB5ZWFyOiBudW1iZXIsXG4gICAgICBtb250aDogbnVtYmVyLFxuICAgICAgZGF5OiBudW1iZXIsXG4gICAgICBkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICBpZiAoSGVscGVycy5pc0VtcHR5KGRhdGVGb3JtYXQpKSB7XG4gICAgICAvLyBEZWZhdWx0IHRvIE1NL2RkL3l5eXlcbiAgICAgIGRhdGVGb3JtYXQgPSAnbW0vZGQveXl5eSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVGb3JtYXQgPSBkYXRlRm9ybWF0LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIGRhdGVGb3JtYXRUb2tlbnMgPSBkYXRlRm9ybWF0UmVnZXguZXhlYyhkYXRlRm9ybWF0KTtcbiAgICBkYXRlVmFsdWVUb2tlbnMgPSBkYXRlVmFsdWVSZWdleC5leGVjKGRhdGVTdHJpbmcpO1xuICAgIGlmIChkYXRlRm9ybWF0VG9rZW5zICYmIGRhdGVGb3JtYXRUb2tlbnMubGVuZ3RoID09PSA0ICYmIGRhdGVWYWx1ZVRva2VucyAmJiBkYXRlVmFsdWVUb2tlbnMubGVuZ3RoID09PSA0KSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgICBpZiAoZGF0ZUZvcm1hdFRva2Vuc1tpXS5pbmNsdWRlcygnbScpKSB7XG4gICAgICAgICAgbW9udGggPSBwYXJzZUludChkYXRlVmFsdWVUb2tlbnNbaV0pIC0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRlRm9ybWF0VG9rZW5zW2ldLmluY2x1ZGVzKCdkJykpIHtcbiAgICAgICAgICBkYXkgPSBwYXJzZUludChkYXRlVmFsdWVUb2tlbnNbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHllYXIgPSBwYXJzZUludChkYXRlVmFsdWVUb2tlbnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiB5ZWFyID4gMTkwMCAmJiBkYXkgPiAwICYmIGRheSA8PSAzMSkge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRlRm9ybWF0VG9rZW5zICYmIGRhdGVGb3JtYXRUb2tlbnMubGVuZ3RoID09PSA0ICYmIGRhdGVTdHJpbmcubGVuZ3RoID49IDEpIHtcbiAgICAgIGNvbnN0IHR3b1Rva2VucyA9IC9cXGR7MSw0fShcXC98XFwufFxcLSkoXFxkezEsMn0pLy5leGVjKGRhdGVTdHJpbmcpO1xuICAgICAgY29uc3Qgb25lVG9rZW4gPSAvXihcXGR7MSw0fSkkLy5leGVjKGRhdGVTdHJpbmcpO1xuICAgICAgY29uc3QgZGVsaW1pdGVyID0gL1xcdysoXFwvfFxcLnxcXC0pXFx3K1tcXC98XFwufFxcLV1cXHcrL2dpLmV4ZWMoZGF0ZUZvcm1hdCk7XG4gICAgICBjb25zdCBkYXRlU3RyaW5nV2l0aERlbGltaXRlciA9IGRhdGVTdHJpbmdbZGF0ZVN0cmluZy5sZW5ndGggLSAxXS5tYXRjaCgvXFwvfFxcLnxcXC0vKTtcbiAgICAgIGlmICh0d29Ub2tlbnMgJiYgdHdvVG9rZW5zLmxlbmd0aCA9PT0gMyAmJiB0aGlzLmlzVmFsaWREYXRlUGFydCh0d29Ub2tlbnNbMl0sIGRhdGVGb3JtYXRUb2tlbnNbMl0pICYmICFkYXRlU3RyaW5nV2l0aERlbGltaXRlcikge1xuICAgICAgICBkYXRlU3RyaW5nID0gYCR7ZGF0ZVN0cmluZ30ke2RlbGltaXRlclsxXX1gO1xuICAgICAgfSBlbHNlIGlmIChvbmVUb2tlbiAmJiBvbmVUb2tlbi5sZW5ndGggPT09IDIgJiYgdGhpcy5pc1ZhbGlkRGF0ZVBhcnQob25lVG9rZW5bMV0sIGRhdGVGb3JtYXRUb2tlbnNbMV0pICYmICFkYXRlU3RyaW5nV2l0aERlbGltaXRlcikge1xuICAgICAgICBkYXRlU3RyaW5nID0gYCR7ZGF0ZVN0cmluZ30ke2RlbGltaXRlclsxXX1gO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW2RhdGUsIGRhdGVTdHJpbmddO1xuICB9XG5cbiAgcGFyc2VUaW1lU3RyaW5nKHRpbWVTdHJpbmc6IHN0cmluZywgbWlsaXRhcnlUaW1lOiBib29sZWFuKTogW0RhdGUsIHN0cmluZ10ge1xuICAgIGxldCB2YWx1ZTogRGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgICB0aW1lU3RyaW5nUGFydHM6IEFycmF5PHN0cmluZz4sXG4gICAgICB0aW1lRm9ybWF0OiBzdHJpbmc7XG4gICAgbGV0IGFtRm9ybWF0ID0gdGhpcy5sYWJlbHMudGltZUZvcm1hdEFNO1xuICAgIGxldCBwbUZvcm1hdCA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQTTtcbiAgICBpZiAoISh0aW1lU3RyaW5nICYmIHRpbWVTdHJpbmcuaW5jbHVkZXMoJzonKSkpIHtcbiAgICAgIHJldHVybiBbdmFsdWUsIHRpbWVTdHJpbmddO1xuICAgIH1cbiAgICBpZiAoIW1pbGl0YXJ5VGltZSAmJiBhbUZvcm1hdCAmJiBwbUZvcm1hdCkge1xuICAgICAgbGV0IHNwbGl0czogQXJyYXk8c3RyaW5nPiA9IFtdLFxuICAgICAgICBwbTogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgYW1Gb3JtYXQgPSB0aGlzLmxhYmVscy50aW1lRm9ybWF0QU0udG9Mb3dlckNhc2UoKTtcbiAgICAgIHBtRm9ybWF0ID0gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBNLnRvTG93ZXJDYXNlKCk7XG4gICAgICB0aW1lU3RyaW5nID0gdGltZVN0cmluZy50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHRpbWVTdHJpbmcuaW5jbHVkZXMoYW1Gb3JtYXQpKSB7XG4gICAgICAgIHNwbGl0cyA9IHRpbWVTdHJpbmcuc3BsaXQoYW1Gb3JtYXQpO1xuICAgICAgfSBlbHNlIGlmICh0aW1lU3RyaW5nLmluY2x1ZGVzKHBtRm9ybWF0KSkge1xuICAgICAgICBzcGxpdHMgPSB0aW1lU3RyaW5nLnNwbGl0KHBtRm9ybWF0KTtcbiAgICAgICAgcG0gPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHNwbGl0cyAmJiBzcGxpdHMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzcGxpdHMpIHtcbiAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLnRyaW0oKS5pbmNsdWRlcygnOicpKSB7XG4gICAgICAgICAgICB0aW1lU3RyaW5nUGFydHMgPSBpdGVtLnRyaW0oKS5zcGxpdCgnOicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRpbWVTdHJpbmdQYXJ0cyAmJiB0aW1lU3RyaW5nUGFydHMubGVuZ3RoICYmIHRpbWVTdHJpbmdQYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgbGV0IGhvdXJzOiBudW1iZXIgPSBwYXJzZUludCh0aW1lU3RyaW5nUGFydHNbMF0pO1xuICAgICAgICBpZiAoaG91cnMgPT09IDEyICYmIHBtKSB7XG4gICAgICAgICAgaG91cnMgPSAxMjtcbiAgICAgICAgfSBlbHNlIGlmIChwbSkge1xuICAgICAgICAgIGhvdXJzID0gaG91cnMgKyAxMjtcbiAgICAgICAgfSBlbHNlIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgICAgICBob3VycyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUuc2V0SG91cnMoaG91cnMpO1xuICAgICAgICB2YWx1ZS5zZXRNaW51dGVzKHBhcnNlSW50KHRpbWVTdHJpbmdQYXJ0c1sxXSkpO1xuICAgICAgICB2YWx1ZS5zZXRTZWNvbmRzKDApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lU3RyaW5nUGFydHMgPSAvKFxcZHsxLDJ9KTooXFxkezJ9KS8uZXhlYyh0aW1lU3RyaW5nKTtcbiAgICAgIGlmICh0aW1lU3RyaW5nUGFydHMgJiYgdGltZVN0cmluZ1BhcnRzLmxlbmd0aCAmJiB0aW1lU3RyaW5nUGFydHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHZhbHVlLnNldEhvdXJzKHBhcnNlSW50KHRpbWVTdHJpbmdQYXJ0c1sxXSkpO1xuICAgICAgICB2YWx1ZS5zZXRNaW51dGVzKHBhcnNlSW50KHRpbWVTdHJpbmdQYXJ0c1syXSkpO1xuICAgICAgICB2YWx1ZS5zZXRTZWNvbmRzKDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW3ZhbHVlLCB0aW1lU3RyaW5nXTtcbiAgfVxuXG4gIHBhcnNlU3RyaW5nKGRhdGVUaW1lU3RyaW5nOiBzdHJpbmcsIG1pbGl0YXJ5VGltZTogYm9vbGVhbiwgdHlwZTogc3RyaW5nKTogW0RhdGUsIHN0cmluZ10ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnZGF0ZXRpbWUnOlxuICAgICAgICBjb25zdCBzdHIgPSBkYXRlVGltZVN0cmluZy5yZXBsYWNlKC8tL2csICcvJyk7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gc3RyLnNwbGl0KCcgJyk7XG4gICAgICAgIGNvbnN0IFtkdCwgZHRzXSA9IHRoaXMucGFyc2VEYXRlU3RyaW5nKHBhcnRzWzBdKTtcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBjb25zdCBbdG0sIHRtc10gPSB0aGlzLnBhcnNlVGltZVN0cmluZyhwYXJ0c1sxXSwgbWlsaXRhcnlUaW1lKTtcbiAgICAgICAgICByZXR1cm4gW25ldyBEYXRlKGR0LnNldEhvdXJzKHRtLmdldEhvdXJzKCksIHRtLmdldE1pbnV0ZXMoKSkpLCBgJHtkdHN9ICR7dG1zfWBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZHQsIGR0c107XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VEYXRlU3RyaW5nKGRhdGVUaW1lU3RyaW5nKTtcbiAgICAgIGNhc2UgJ3RpbWUnOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVRpbWVTdHJpbmcoZGF0ZVRpbWVTdHJpbmcsIG1pbGl0YXJ5VGltZSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaXNWYWxpZERhdGVQYXJ0KHZhbHVlOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGF0ZVBhcnQgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgaWYgKGZvcm1hdC5pbmNsdWRlcygnbScpICYmIChkYXRlUGFydCA+PSAyIHx8IHZhbHVlLmxlbmd0aCA9PT0gMikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZm9ybWF0LmluY2x1ZGVzKCdkJykgJiYgKGRhdGVQYXJ0ID49IDQgfHwgdmFsdWUubGVuZ3RoID09PSAyKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChmb3JtYXQuaW5jbHVkZXMoJ3knKSAmJiBkYXRlUGFydCA+PSAxMDAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=