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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZUZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUdyRSxNQUFNLE9BQU8saUJBQWlCOzs7O0lBQzVCLFlBQW9CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUksQ0FBQzs7Ozs7SUFFakQsV0FBVyxDQUFDLFlBQXFCOztZQUMzQixJQUFJLEdBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzs7WUFDbkQsZUFBZSxHQUFrQixFQUFFOztjQUNqQyxVQUFVLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUU7UUFDNUUsSUFBSSxZQUFZLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsZUFBZSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUMsSUFBSSxlQUFlLElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRTtnQkFDN0MsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDVixLQUFLLE1BQU0sY0FBYyxJQUFJLGVBQWUsRUFBRTtvQkFDNUMsSUFBSSxjQUFjLEtBQUssRUFBRSxFQUFFO3dCQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO3FCQUNwRTt5QkFBTSxJQUFJLGNB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LE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDakUsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN4RSxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDbkQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBektGLFVBQVU7Ozs7WUFGRixnQkFBZ0I7Ozs7Ozs7SUFJWCxtQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlRm9ybWF0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7IH1cblxuICBnZXRUaW1lTWFzayhtaWxpdGFyeVRpbWU6IGJvb2xlYW4pOiBBcnJheTxSZWdFeHA+IHtcbiAgICBsZXQgbWFzazogQXJyYXk8UmVnRXhwPiA9IFsvXFxkLywgL1xcZC8sIC86LywgL1xcZC8sIC9cXGQvXTtcbiAgICBsZXQgdGltZUZvcm1hdEFycmF5OiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgY29uc3QgdGltZUZvcm1hdDogc3RyaW5nID0gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBsYWNlaG9sZGVyQU0udG9Mb3dlckNhc2UoKTtcbiAgICBpZiAobWlsaXRhcnlUaW1lKSB7XG4gICAgICByZXR1cm4gbWFzaztcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZUZvcm1hdEFycmF5ID0gdGltZUZvcm1hdC5zcGxpdCgnaGg6bW0nKTtcbiAgICAgIGlmICh0aW1lRm9ybWF0QXJyYXkgJiYgdGltZUZvcm1hdEFycmF5Lmxlbmd0aCkge1xuICAgICAgICBtYXNrID0gW107XG4gICAgICAgIGZvciAoY29uc3QgdGltZUZvcm1hdFBhcnQgb2YgdGltZUZvcm1hdEFycmF5KSB7XG4gICAgICAgICAgaWYgKHRpbWVGb3JtYXRQYXJ0ID09PSAnJykge1xuICAgICAgICAgICAgbWFzayA9IG1hc2suY29uY2F0KFsvXFxkLywgL1xcZHw6LywgLzp8XFxkLywgL1xcZHxcXHd8XFxzLywgL1xcZHxcXHN8XFx3L10pO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGltZUZvcm1hdFBhcnQubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVGb3JtYXRQYXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIG1hc2sucHVzaCgvXFxzfFxcd3xcXGR8XFwuLyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXNrO1xuICB9XG5cbiAgZ2V0RGF0ZU1hc2soKTogQXJyYXk8UmVnRXhwPiB7XG4gICAgcmV0dXJuIFsvXFxkLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXC98XFwufFxcLXxcXGQvLCAvXFxkfFxcL3xcXC58XFwtLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFxkfFxcL3xcXC58XFwtLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXGQvLCAvXFxkL107XG4gIH1cblxuICBnZXREYXRlVGltZU1hc2sobWlsaXRhcnlUaW1lOiBib29sZWFuID0gZmFsc2UpOiBBcnJheTxSZWdFeHA+IHtcbiAgICByZXR1cm4gWy4uLnRoaXMuZ2V0RGF0ZU1hc2soKSwgL1xcLD8vLCAvXFxzLywgLi4udGhpcy5nZXRUaW1lTWFzayhtaWxpdGFyeVRpbWUpXTtcbiAgfVxuXG4gIGdldFRpbWVQbGFjZUhvbGRlcihtaWxpdGFyeVRpbWU6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGlmIChtaWxpdGFyeVRpbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmxhYmVscy50aW1lRm9ybWF0UGxhY2Vob2xkZXIyNEhvdXI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxhYmVscy50aW1lRm9ybWF0UGxhY2Vob2xkZXJBTTtcbiAgfVxuXG4gIHBhcnNlRGF0ZVN0cmluZyhkYXRlU3RyaW5nOiBzdHJpbmcpOiBbRGF0ZSwgc3RyaW5nXSB7XG4gICAgbGV0IGRhdGVGb3JtYXQ6IHN0cmluZyA9IHRoaXMubGFiZWxzLmRhdGVGb3JtYXRTdHJpbmcoKTtcbiAgICBjb25zdCBkYXRlRm9ybWF0UmVnZXggPSAvKFxcdyspW1xcL3xcXC58XFwtXShcXHcrKVtcXC98XFwufFxcLV0oXFx3KykvZ2k7XG4gICAgY29uc3QgZGF0ZVZhbHVlUmVnZXggPSAvKFxcZCspW1xcL3xcXC58XFwtXShcXGQrKVtcXC98XFwufFxcLV0oXFxkKykvZ2k7XG4gICAgbGV0IGRhdGVGb3JtYXRUb2tlbnM6IEFycmF5PHN0cmluZz47XG4gICAgbGV0IGRhdGVWYWx1ZVRva2VuczogQXJyYXk8c3RyaW5nPjtcbiAgICBsZXQgeWVhcjogbnVtYmVyO1xuICAgIGxldCBtb250aDogbnVtYmVyO1xuICAgIGxldCBkYXk6IG51bWJlcjtcbiAgICBsZXQgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgaWYgKEhlbHBlcnMuaXNFbXB0eShkYXRlRm9ybWF0KSkge1xuICAgICAgLy8gRGVmYXVsdCB0byBNTS9kZC95eXl5XG4gICAgICBkYXRlRm9ybWF0ID0gJ21tL2RkL3l5eXknO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlRm9ybWF0ID0gZGF0ZUZvcm1hdC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBkYXRlRm9ybWF0VG9rZW5zID0gZGF0ZUZvcm1hdFJlZ2V4LmV4ZWMoZGF0ZUZvcm1hdCk7XG4gICAgZGF0ZVZhbHVlVG9rZW5zID0gZGF0ZVZhbHVlUmVnZXguZXhlYyhkYXRlU3RyaW5nKTtcbiAgICBpZiAoZGF0ZUZvcm1hdFRva2VucyAmJiBkYXRlRm9ybWF0VG9rZW5zLmxlbmd0aCA9PT0gNCAmJiBkYXRlVmFsdWVUb2tlbnMgJiYgZGF0ZVZhbHVlVG9rZW5zLmxlbmd0aCA9PT0gNCkge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgaWYgKGRhdGVGb3JtYXRUb2tlbnNbaV0uaW5jbHVkZXMoJ20nKSkge1xuICAgICAgICAgIG1vbnRoID0gcGFyc2VJbnQoZGF0ZVZhbHVlVG9rZW5zW2ldLCAxMCkgLSAxO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGVGb3JtYXRUb2tlbnNbaV0uaW5jbHVkZXMoJ2QnKSkge1xuICAgICAgICAgIGRheSA9IHBhcnNlSW50KGRhdGVWYWx1ZVRva2Vuc1tpXSwgMTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHllYXIgPSBwYXJzZUludChkYXRlVmFsdWVUb2tlbnNbaV0sIDEwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgeWVhciA+IDE5MDAgJiYgZGF5ID4gMCAmJiBkYXkgPD0gMzEpIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGF0ZUZvcm1hdFRva2VucyAmJiBkYXRlRm9ybWF0VG9rZW5zLmxlbmd0aCA9PT0gNCAmJiBkYXRlU3RyaW5nLmxlbmd0aCA+PSAxKSB7XG4gICAgICBjb25zdCB0d29Ub2tlbnMgPSAvXFxkezEsNH0oXFwvfFxcLnxcXC0pKFxcZHsxLDJ9KS8uZXhlYyhkYXRlU3RyaW5nKTtcbiAgICAgIGNvbnN0IG9uZVRva2VuID0gL14oXFxkezEsNH0pJC8uZXhlYyhkYXRlU3RyaW5nKTtcbiAgICAgIGNvbnN0IGRlbGltaXRlciA9IC9cXHcrKFxcL3xcXC58XFwtKVxcdytbXFwvfFxcLnxcXC1dXFx3Ky9naS5leGVjKGRhdGVGb3JtYXQpO1xuICAgICAgY29uc3QgZGF0ZVN0cmluZ1dpdGhEZWxpbWl0ZXIgPSBkYXRlU3RyaW5nW2RhdGVTdHJpbmcubGVuZ3RoIC0gMV0ubWF0Y2goL1xcL3xcXC58XFwtLyk7XG4gICAgICBpZiAodHdvVG9rZW5zICYmIHR3b1Rva2Vucy5sZW5ndGggPT09IDMgJiYgdGhpcy5pc1ZhbGlkRGF0ZVBhcnQodHdvVG9rZW5zWzJdLCBkYXRlRm9ybWF0VG9rZW5zWzJdKSAmJiAhZGF0ZVN0cmluZ1dpdGhEZWxpbWl0ZXIpIHtcbiAgICAgICAgZGF0ZVN0cmluZyA9IGAke2RhdGVTdHJpbmd9JHtkZWxpbWl0ZXJbMV19YDtcbiAgICAgIH0gZWxzZSBpZiAob25lVG9rZW4gJiYgb25lVG9rZW4ubGVuZ3RoID09PSAyICYmIHRoaXMuaXNWYWxpZERhdGVQYXJ0KG9uZVRva2VuWzFdLCBkYXRlRm9ybWF0VG9rZW5zWzFdKSAmJiAhZGF0ZVN0cmluZ1dpdGhEZWxpbWl0ZXIpIHtcbiAgICAgICAgZGF0ZVN0cmluZyA9IGAke2RhdGVTdHJpbmd9JHtkZWxpbWl0ZXJbMV19YDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtkYXRlLCBkYXRlU3RyaW5nXTtcbiAgfVxuXG4gIHBhcnNlVGltZVN0cmluZyh0aW1lU3RyaW5nOiBzdHJpbmcsIG1pbGl0YXJ5VGltZTogYm9vbGVhbik6IFtEYXRlLCBzdHJpbmddIHtcbiAgICBjb25zdCB2YWx1ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRpbWVTdHJpbmdQYXJ0czogQXJyYXk8c3RyaW5nPjtcbiAgICBsZXQgYW1Gb3JtYXQgPSB0aGlzLmxhYmVscy50aW1lRm9ybWF0QU07XG4gICAgbGV0IHBtRm9ybWF0ID0gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBNO1xuICAgIGlmICghKHRpbWVTdHJpbmcgJiYgdGltZVN0cmluZy5pbmNsdWRlcygnOicpKSkge1xuICAgICAgcmV0dXJuIFt2YWx1ZSwgdGltZVN0cmluZ107XG4gICAgfVxuICAgIGlmICghbWlsaXRhcnlUaW1lICYmIGFtRm9ybWF0ICYmIHBtRm9ybWF0KSB7XG4gICAgICBsZXQgc3BsaXRzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgICBsZXQgcG06IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgIGFtRm9ybWF0ID0gdGhpcy5sYWJlbHMudGltZUZvcm1hdEFNLnRvTG93ZXJDYXNlKCk7XG4gICAgICBwbUZvcm1hdCA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQTS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdGltZVN0cmluZyA9IHRpbWVTdHJpbmcudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmICh0aW1lU3RyaW5nLmluY2x1ZGVzKGFtRm9ybWF0KSkge1xuICAgICAgICBzcGxpdHMgPSB0aW1lU3RyaW5nLnNwbGl0KGFtRm9ybWF0KTtcbiAgICAgIH0gZWxzZSBpZiAodGltZVN0cmluZy5pbmNsdWRlcyhwbUZvcm1hdCkpIHtcbiAgICAgICAgc3BsaXRzID0gdGltZVN0cmluZy5zcGxpdChwbUZvcm1hdCk7XG4gICAgICAgIHBtID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChzcGxpdHMgJiYgc3BsaXRzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc3BsaXRzKSB7XG4gICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS50cmltKCkuaW5jbHVkZXMoJzonKSkge1xuICAgICAgICAgICAgdGltZVN0cmluZ1BhcnRzID0gaXRlbS50cmltKCkuc3BsaXQoJzonKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aW1lU3RyaW5nUGFydHMgJiYgdGltZVN0cmluZ1BhcnRzLmxlbmd0aCAmJiB0aW1lU3RyaW5nUGFydHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGxldCBob3VyczogbnVtYmVyID0gcGFyc2VJbnQodGltZVN0cmluZ1BhcnRzWzBdLCAxMCk7XG4gICAgICAgIGlmIChob3VycyA9PT0gMTIgJiYgcG0pIHtcbiAgICAgICAgICBob3VycyA9IDEyO1xuICAgICAgICB9IGVsc2UgaWYgKHBtKSB7XG4gICAgICAgICAgaG91cnMgPSBob3VycyArIDEyO1xuICAgICAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgICAgIGhvdXJzID0gMDtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZS5zZXRIb3Vycyhob3Vycyk7XG4gICAgICAgIHZhbHVlLnNldE1pbnV0ZXMocGFyc2VJbnQodGltZVN0cmluZ1BhcnRzWzFdLCAxMCkpO1xuICAgICAgICB2YWx1ZS5zZXRTZWNvbmRzKDApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lU3RyaW5nUGFydHMgPSAvKFxcZHsxLDJ9KTooXFxkezJ9KS8uZXhlYyh0aW1lU3RyaW5nKTtcbiAgICAgIGlmICh0aW1lU3RyaW5nUGFydHMgJiYgdGltZVN0cmluZ1BhcnRzLmxlbmd0aCAmJiB0aW1lU3RyaW5nUGFydHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHZhbHVlLnNldEhvdXJzKHBhcnNlSW50KHRpbWVTdHJpbmdQYXJ0c1sxXSwgMTApKTtcbiAgICAgICAgdmFsdWUuc2V0TWludXRlcyhwYXJzZUludCh0aW1lU3RyaW5nUGFydHNbMl0sIDEwKSk7XG4gICAgICAgIHZhbHVlLnNldFNlY29uZHMoMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbdmFsdWUsIHRpbWVTdHJpbmddO1xuICB9XG5cbiAgcGFyc2VTdHJpbmcoZGF0ZVRpbWVTdHJpbmc6IHN0cmluZywgbWlsaXRhcnlUaW1lOiBib29sZWFuLCB0eXBlOiBzdHJpbmcpOiBbRGF0ZSwgc3RyaW5nXSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdkYXRldGltZSc6XG4gICAgICAgIGNvbnN0IHN0ciA9IGRhdGVUaW1lU3RyaW5nLnJlcGxhY2UoLy0vZywgJy8nKTtcbiAgICAgICAgY29uc3QgcGFydHMgPSBzdHIuc3BsaXQoJyAnKTtcbiAgICAgICAgY29uc3QgW2R0LCBkdHNdID0gdGhpcy5wYXJzZURhdGVTdHJpbmcocGFydHNbMF0pO1xuICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGNvbnN0IFt0bSwgdG1zXSA9IHRoaXMucGFyc2VUaW1lU3RyaW5nKHBhcnRzWzFdLCBtaWxpdGFyeVRpbWUpO1xuICAgICAgICAgIHJldHVybiBbbmV3IERhdGUoZHQuc2V0SG91cnModG0uZ2V0SG91cnMoKSwgdG0uZ2V0TWludXRlcygpKSksIGAke2R0c30gJHt0bXN9YF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtkdCwgZHRzXTtcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZURhdGVTdHJpbmcoZGF0ZVRpbWVTdHJpbmcpO1xuICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlVGltZVN0cmluZyhkYXRlVGltZVN0cmluZywgbWlsaXRhcnlUaW1lKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpc1ZhbGlkRGF0ZVBhcnQodmFsdWU6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBkYXRlUGFydCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgaWYgKGZvcm1hdC5pbmNsdWRlcygnbScpICYmIChkYXRlUGFydCA+PSAyIHx8IHZhbHVlLmxlbmd0aCA9PT0gMikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZm9ybWF0LmluY2x1ZGVzKCdkJykgJiYgKGRhdGVQYXJ0ID49IDQgfHwgdmFsdWUubGVuZ3RoID09PSAyKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChmb3JtYXQuaW5jbHVkZXMoJ3knKSAmJiBkYXRlUGFydCA+PSAxMDAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=