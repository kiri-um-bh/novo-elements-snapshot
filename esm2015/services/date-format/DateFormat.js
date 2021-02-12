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
        console.log(`jbTest - parseDateString() / dateString = ${dateString}`);
        /** @type {?} */
        let dateFormat = this.labels.dateFormatString();
        /** @type {?} */
        const dateFormatRegex = /(\w+)[\/|\.|\-](\w+)[\/|\.|\-](\w+)/gi;
        /** @type {?} */
        const dateValueRegex = /(\d+)[\/|\.|\-](\d+)[\/|\.|\-](\d+)/gi;
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
        console.log(`jbTest - parseDateString() / dateFormat = ${dateFormat}`);
        dateFormatTokens = dateFormatRegex.exec(dateFormat);
        dateValueTokens = dateValueRegex.exec(dateString);
        if (dateFormatTokens && dateFormatTokens.length === 4 && dateValueTokens && dateValueTokens.length === 4) {
            for (let i = 1; i < 4; i++) {
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
            console.log(`jbTest - parseDateString() / month = ${month} day = ${day} year = ${year}`);
            if (month >= 0 && month <= 11 && year > 1900 && day > 0 && day <= 31) {
                date = new Date(year, month, day);
                console.log(`jbTest - parseDateString() / date = ${date} dateString = ${dateString}`);
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
                console.log(`jbTest - parseDateString() dateString twotokens = ${dateString} dateStringWithDelimiter = ${dateStringWithDelimiter}`);
            }
            else if (oneToken && oneToken.length === 2 && this.isValidDatePart(oneToken[1], dateFormatTokens[1]) && !dateStringWithDelimiter) {
                dateString = `${dateString}${delimiter[1]}`;
                console.log(`jbTest - parseDateString() dateString onetoken = ${dateString} dateStringWithDelimiter = ${dateStringWithDelimiter}`);
            }
        }
        console.log(`jbTest - parseDateString() before return/ date = ${date} dateString = ${dateString}`);
        return [date, dateString];
    }
    /**
     * @param {?} timeString
     * @param {?} militaryTime
     * @return {?}
     */
    parseTimeString(timeString, militaryTime) {
        /** @type {?} */
        const value = new Date();
        /** @type {?} */
        let timeStringParts;
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
                let hours = parseInt(timeStringParts[0], 10);
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
        const datePart = parseInt(value, 10);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZUZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUdyRSxNQUFNLE9BQU8saUJBQWlCOzs7O0lBQzVCLFlBQW9CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQzs7Ozs7SUFFaEQsV0FBVyxDQUFDLFlBQXFCOztZQUMzQixJQUFJLEdBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzs7WUFDbkQsZUFBZSxHQUFrQixFQUFFOztjQUNqQyxVQUFVLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUU7UUFDNUUsSUFBSSxZQUFZLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsZUFBZSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUMsSUFBSSxlQUFlLElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRTtnQkFDN0MsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDVixLQUFLLE1BQU0sY0FBYyxJQUFJLGVBQWUsRUFBRTtvQkFDNUMsSUFBSSxjQUFjLEtBQUssRUFBRSxFQUFFO3dCQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO3FCQUNwRTt5QkFBTSxJQUFJLGNB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IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgZ2V0VGltZU1hc2sobWlsaXRhcnlUaW1lOiBib29sZWFuKTogQXJyYXk8UmVnRXhwPiB7XG4gICAgbGV0IG1hc2s6IEFycmF5PFJlZ0V4cD4gPSBbL1xcZC8sIC9cXGQvLCAvOi8sIC9cXGQvLCAvXFxkL107XG4gICAgbGV0IHRpbWVGb3JtYXRBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIGNvbnN0IHRpbWVGb3JtYXQ6IHN0cmluZyA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQbGFjZWhvbGRlckFNLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG1pbGl0YXJ5VGltZSkge1xuICAgICAgcmV0dXJuIG1hc2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVGb3JtYXRBcnJheSA9IHRpbWVGb3JtYXQuc3BsaXQoJ2hoOm1tJyk7XG4gICAgICBpZiAodGltZUZvcm1hdEFycmF5ICYmIHRpbWVGb3JtYXRBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgbWFzayA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHRpbWVGb3JtYXRQYXJ0IG9mIHRpbWVGb3JtYXRBcnJheSkge1xuICAgICAgICAgIGlmICh0aW1lRm9ybWF0UGFydCA9PT0gJycpIHtcbiAgICAgICAgICAgIG1hc2sgPSBtYXNrLmNvbmNhdChbL1xcZC8sIC9cXGR8Oi8sIC86fFxcZC8sIC9cXGR8XFx3fFxccy8sIC9cXGR8XFxzfFxcdy9dKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRpbWVGb3JtYXRQYXJ0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lRm9ybWF0UGFydC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBtYXNrLnB1c2goL1xcc3xcXHd8XFxkfFxcLi8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFzaztcbiAgfVxuXG4gIGdldERhdGVNYXNrKCk6IEFycmF5PFJlZ0V4cD4ge1xuICAgIHJldHVybiBbL1xcZC8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFwvfFxcLnxcXC18XFxkLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFxkfFxcL3xcXC58XFwtLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFxkLywgL1xcZC9dO1xuICB9XG5cbiAgZ2V0RGF0ZVRpbWVNYXNrKG1pbGl0YXJ5VGltZTogYm9vbGVhbiA9IGZhbHNlKTogQXJyYXk8UmVnRXhwPiB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmdldERhdGVNYXNrKCksIC9cXCw/LywgL1xccy8sIC4uLnRoaXMuZ2V0VGltZU1hc2sobWlsaXRhcnlUaW1lKV07XG4gIH1cblxuICBnZXRUaW1lUGxhY2VIb2xkZXIobWlsaXRhcnlUaW1lOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBpZiAobWlsaXRhcnlUaW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBsYWNlaG9sZGVyMjRIb3VyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBsYWNlaG9sZGVyQU07XG4gIH1cblxuICBwYXJzZURhdGVTdHJpbmcoZGF0ZVN0cmluZzogc3RyaW5nKTogW0RhdGUsIHN0cmluZ10ge1xuICAgIGNvbnNvbGUubG9nKGBqYlRlc3QgLSBwYXJzZURhdGVTdHJpbmcoKSAvIGRhdGVTdHJpbmcgPSAke2RhdGVTdHJpbmd9YCk7XG5cbiAgICBsZXQgZGF0ZUZvcm1hdDogc3RyaW5nID0gdGhpcy5sYWJlbHMuZGF0ZUZvcm1hdFN0cmluZygpO1xuICAgIGNvbnN0IGRhdGVGb3JtYXRSZWdleCA9IC8oXFx3KylbXFwvfFxcLnxcXC1dKFxcdyspW1xcL3xcXC58XFwtXShcXHcrKS9naTtcbiAgICBjb25zdCBkYXRlVmFsdWVSZWdleCA9IC8oXFxkKylbXFwvfFxcLnxcXC1dKFxcZCspW1xcL3xcXC58XFwtXShcXGQrKS9naTtcbiAgICBsZXQgZGF0ZUZvcm1hdFRva2VuczogQXJyYXk8c3RyaW5nPjtcbiAgICBsZXQgZGF0ZVZhbHVlVG9rZW5zOiBBcnJheTxzdHJpbmc+O1xuICAgIGxldCB5ZWFyOiBudW1iZXI7XG4gICAgbGV0IG1vbnRoOiBudW1iZXI7XG4gICAgbGV0IGRheTogbnVtYmVyO1xuICAgIGxldCBkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICBpZiAoSGVscGVycy5pc0VtcHR5KGRhdGVGb3JtYXQpKSB7XG4gICAgICAvLyBEZWZhdWx0IHRvIE1NL2RkL3l5eXlcbiAgICAgIGRhdGVGb3JtYXQgPSAnbW0vZGQveXl5eSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVGb3JtYXQgPSBkYXRlRm9ybWF0LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYGpiVGVzdCAtIHBhcnNlRGF0ZVN0cmluZygpIC8gZGF0ZUZvcm1hdCA9ICR7ZGF0ZUZvcm1hdH1gKTtcblxuICAgIGRhdGVGb3JtYXRUb2tlbnMgPSBkYXRlRm9ybWF0UmVnZXguZXhlYyhkYXRlRm9ybWF0KTtcbiAgICBkYXRlVmFsdWVUb2tlbnMgPSBkYXRlVmFsdWVSZWdleC5leGVjKGRhdGVTdHJpbmcpO1xuICAgIGlmIChkYXRlRm9ybWF0VG9rZW5zICYmIGRhdGVGb3JtYXRUb2tlbnMubGVuZ3RoID09PSA0ICYmIGRhdGVWYWx1ZVRva2VucyAmJiBkYXRlVmFsdWVUb2tlbnMubGVuZ3RoID09PSA0KSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgICBpZiAoZGF0ZUZvcm1hdFRva2Vuc1tpXS5pbmNsdWRlcygnbScpKSB7XG4gICAgICAgICAgbW9udGggPSBwYXJzZUludChkYXRlVmFsdWVUb2tlbnNbaV0sIDEwKSAtIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0ZUZvcm1hdFRva2Vuc1tpXS5pbmNsdWRlcygnZCcpKSB7XG4gICAgICAgICAgZGF5ID0gcGFyc2VJbnQoZGF0ZVZhbHVlVG9rZW5zW2ldLCAxMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeWVhciA9IHBhcnNlSW50KGRhdGVWYWx1ZVRva2Vuc1tpXSwgMTApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKGBqYlRlc3QgLSBwYXJzZURhdGVTdHJpbmcoKSAvIG1vbnRoID0gJHttb250aH0gZGF5ID0gJHtkYXl9IHllYXIgPSAke3llYXJ9YCk7XG5cbiAgICAgIGlmIChtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIHllYXIgPiAxOTAwICYmIGRheSA+IDAgJiYgZGF5IDw9IDMxKSB7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgICAgY29uc29sZS5sb2coYGpiVGVzdCAtIHBhcnNlRGF0ZVN0cmluZygpIC8gZGF0ZSA9ICR7ZGF0ZX0gZGF0ZVN0cmluZyA9ICR7ZGF0ZVN0cmluZ31gKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRhdGVGb3JtYXRUb2tlbnMgJiYgZGF0ZUZvcm1hdFRva2Vucy5sZW5ndGggPT09IDQgJiYgZGF0ZVN0cmluZy5sZW5ndGggPj0gMSkge1xuICAgICAgY29uc3QgdHdvVG9rZW5zID0gL1xcZHsxLDR9KFxcL3xcXC58XFwtKShcXGR7MSwyfSkvLmV4ZWMoZGF0ZVN0cmluZyk7XG4gICAgICBjb25zdCBvbmVUb2tlbiA9IC9eKFxcZHsxLDR9KSQvLmV4ZWMoZGF0ZVN0cmluZyk7XG4gICAgICBjb25zdCBkZWxpbWl0ZXIgPSAvXFx3KyhcXC98XFwufFxcLSlcXHcrW1xcL3xcXC58XFwtXVxcdysvZ2kuZXhlYyhkYXRlRm9ybWF0KTtcbiAgICAgIGNvbnN0IGRhdGVTdHJpbmdXaXRoRGVsaW1pdGVyID0gZGF0ZVN0cmluZ1tkYXRlU3RyaW5nLmxlbmd0aCAtIDFdLm1hdGNoKC9cXC98XFwufFxcLS8pO1xuICAgICAgaWYgKHR3b1Rva2VucyAmJiB0d29Ub2tlbnMubGVuZ3RoID09PSAzICYmIHRoaXMuaXNWYWxpZERhdGVQYXJ0KHR3b1Rva2Vuc1syXSwgZGF0ZUZvcm1hdFRva2Vuc1syXSkgJiYgIWRhdGVTdHJpbmdXaXRoRGVsaW1pdGVyKSB7XG4gICAgICAgIGRhdGVTdHJpbmcgPSBgJHtkYXRlU3RyaW5nfSR7ZGVsaW1pdGVyWzFdfWA7XG4gICAgICAgIGNvbnNvbGUubG9nKGBqYlRlc3QgLSBwYXJzZURhdGVTdHJpbmcoKSBkYXRlU3RyaW5nIHR3b3Rva2VucyA9ICR7ZGF0ZVN0cmluZ30gZGF0ZVN0cmluZ1dpdGhEZWxpbWl0ZXIgPSAke2RhdGVTdHJpbmdXaXRoRGVsaW1pdGVyfWApO1xuICAgICAgfSBlbHNlIGlmIChvbmVUb2tlbiAmJiBvbmVUb2tlbi5sZW5ndGggPT09IDIgJiYgdGhpcy5pc1ZhbGlkRGF0ZVBhcnQob25lVG9rZW5bMV0sIGRhdGVGb3JtYXRUb2tlbnNbMV0pICYmICFkYXRlU3RyaW5nV2l0aERlbGltaXRlcikge1xuICAgICAgICBkYXRlU3RyaW5nID0gYCR7ZGF0ZVN0cmluZ30ke2RlbGltaXRlclsxXX1gO1xuICAgICAgICBjb25zb2xlLmxvZyhgamJUZXN0IC0gcGFyc2VEYXRlU3RyaW5nKCkgZGF0ZVN0cmluZyBvbmV0b2tlbiA9ICR7ZGF0ZVN0cmluZ30gZGF0ZVN0cmluZ1dpdGhEZWxpbWl0ZXIgPSAke2RhdGVTdHJpbmdXaXRoRGVsaW1pdGVyfWApO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgamJUZXN0IC0gcGFyc2VEYXRlU3RyaW5nKCkgYmVmb3JlIHJldHVybi8gZGF0ZSA9ICR7ZGF0ZX0gZGF0ZVN0cmluZyA9ICR7ZGF0ZVN0cmluZ31gKTtcbiAgICByZXR1cm4gW2RhdGUsIGRhdGVTdHJpbmddO1xuICB9XG5cbiAgcGFyc2VUaW1lU3RyaW5nKHRpbWVTdHJpbmc6IHN0cmluZywgbWlsaXRhcnlUaW1lOiBib29sZWFuKTogW0RhdGUsIHN0cmluZ10ge1xuICAgIGNvbnN0IHZhbHVlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgdGltZVN0cmluZ1BhcnRzOiBBcnJheTxzdHJpbmc+O1xuICAgIGxldCBhbUZvcm1hdCA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRBTTtcbiAgICBsZXQgcG1Gb3JtYXQgPSB0aGlzLmxhYmVscy50aW1lRm9ybWF0UE07XG4gICAgaWYgKCEodGltZVN0cmluZyAmJiB0aW1lU3RyaW5nLmluY2x1ZGVzKCc6JykpKSB7XG4gICAgICByZXR1cm4gW3ZhbHVlLCB0aW1lU3RyaW5nXTtcbiAgICB9XG4gICAgaWYgKCFtaWxpdGFyeVRpbWUgJiYgYW1Gb3JtYXQgJiYgcG1Gb3JtYXQpIHtcbiAgICAgIGxldCBzcGxpdHM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICAgIGxldCBwbTogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgYW1Gb3JtYXQgPSB0aGlzLmxhYmVscy50aW1lRm9ybWF0QU0udG9Mb3dlckNhc2UoKTtcbiAgICAgIHBtRm9ybWF0ID0gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBNLnRvTG93ZXJDYXNlKCk7XG4gICAgICB0aW1lU3RyaW5nID0gdGltZVN0cmluZy50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHRpbWVTdHJpbmcuaW5jbHVkZXMoYW1Gb3JtYXQpKSB7XG4gICAgICAgIHNwbGl0cyA9IHRpbWVTdHJpbmcuc3BsaXQoYW1Gb3JtYXQpO1xuICAgICAgfSBlbHNlIGlmICh0aW1lU3RyaW5nLmluY2x1ZGVzKHBtRm9ybWF0KSkge1xuICAgICAgICBzcGxpdHMgPSB0aW1lU3RyaW5nLnNwbGl0KHBtRm9ybWF0KTtcbiAgICAgICAgcG0gPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHNwbGl0cyAmJiBzcGxpdHMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBzcGxpdHMpIHtcbiAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLnRyaW0oKS5pbmNsdWRlcygnOicpKSB7XG4gICAgICAgICAgICB0aW1lU3RyaW5nUGFydHMgPSBpdGVtLnRyaW0oKS5zcGxpdCgnOicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRpbWVTdHJpbmdQYXJ0cyAmJiB0aW1lU3RyaW5nUGFydHMubGVuZ3RoICYmIHRpbWVTdHJpbmdQYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgbGV0IGhvdXJzOiBudW1iZXIgPSBwYXJzZUludCh0aW1lU3RyaW5nUGFydHNbMF0sIDEwKTtcbiAgICAgICAgaWYgKGhvdXJzID09PSAxMiAmJiBwbSkge1xuICAgICAgICAgIGhvdXJzID0gMTI7XG4gICAgICAgIH0gZWxzZSBpZiAocG0pIHtcbiAgICAgICAgICBob3VycyA9IGhvdXJzICsgMTI7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICAgICAgaG91cnMgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlLnNldEhvdXJzKGhvdXJzKTtcbiAgICAgICAgdmFsdWUuc2V0TWludXRlcyhwYXJzZUludCh0aW1lU3RyaW5nUGFydHNbMV0sIDEwKSk7XG4gICAgICAgIHZhbHVlLnNldFNlY29uZHMoMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVTdHJpbmdQYXJ0cyA9IC8oXFxkezEsMn0pOihcXGR7Mn0pLy5leGVjKHRpbWVTdHJpbmcpO1xuICAgICAgaWYgKHRpbWVTdHJpbmdQYXJ0cyAmJiB0aW1lU3RyaW5nUGFydHMubGVuZ3RoICYmIHRpbWVTdHJpbmdQYXJ0cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgdmFsdWUuc2V0SG91cnMocGFyc2VJbnQodGltZVN0cmluZ1BhcnRzWzFdLCAxMCkpO1xuICAgICAgICB2YWx1ZS5zZXRNaW51dGVzKHBhcnNlSW50KHRpbWVTdHJpbmdQYXJ0c1syXSwgMTApKTtcbiAgICAgICAgdmFsdWUuc2V0U2Vjb25kcygwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFt2YWx1ZSwgdGltZVN0cmluZ107XG4gIH1cblxuICBwYXJzZVN0cmluZyhkYXRlVGltZVN0cmluZzogc3RyaW5nLCBtaWxpdGFyeVRpbWU6IGJvb2xlYW4sIHR5cGU6IHN0cmluZyk6IFtEYXRlLCBzdHJpbmddIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2RhdGV0aW1lJzpcbiAgICAgICAgY29uc3Qgc3RyID0gZGF0ZVRpbWVTdHJpbmcucmVwbGFjZSgvLS9nLCAnLycpO1xuICAgICAgICBjb25zdCBwYXJ0cyA9IHN0ci5zcGxpdCgnICcpO1xuICAgICAgICBjb25zdCBbZHQsIGR0c10gPSB0aGlzLnBhcnNlRGF0ZVN0cmluZyhwYXJ0c1swXSk7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgY29uc3QgW3RtLCB0bXNdID0gdGhpcy5wYXJzZVRpbWVTdHJpbmcocGFydHNbMV0sIG1pbGl0YXJ5VGltZSk7XG4gICAgICAgICAgcmV0dXJuIFtuZXcgRGF0ZShkdC5zZXRIb3Vycyh0bS5nZXRIb3VycygpLCB0bS5nZXRNaW51dGVzKCkpKSwgYCR7ZHRzfSAke3Rtc31gXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2R0LCBkdHNdO1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlRGF0ZVN0cmluZyhkYXRlVGltZVN0cmluZyk7XG4gICAgICBjYXNlICd0aW1lJzpcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VUaW1lU3RyaW5nKGRhdGVUaW1lU3RyaW5nLCBtaWxpdGFyeVRpbWUpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlzVmFsaWREYXRlUGFydCh2YWx1ZTogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRhdGVQYXJ0ID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICBpZiAoZm9ybWF0LmluY2x1ZGVzKCdtJykgJiYgKGRhdGVQYXJ0ID49IDIgfHwgdmFsdWUubGVuZ3RoID09PSAyKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChmb3JtYXQuaW5jbHVkZXMoJ2QnKSAmJiAoZGF0ZVBhcnQgPj0gNCB8fCB2YWx1ZS5sZW5ndGggPT09IDIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGZvcm1hdC5pbmNsdWRlcygneScpICYmIGRhdGVQYXJ0ID49IDEwMDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==