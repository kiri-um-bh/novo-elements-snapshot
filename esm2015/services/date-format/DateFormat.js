/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZUZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBR3JFLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFDNUIsWUFBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDOzs7OztJQUVoRCxXQUFXLENBQUMsWUFBcUI7O1lBQzNCLElBQUksR0FBa0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDOztZQUNyRCxlQUFlLEdBQWtCLEVBQUU7O1lBQ25DLG9CQUFvQixHQUFrQixFQUFFOztZQUN0QyxVQUFVLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUU7UUFDMUUsSUFBSSxZQUFZLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsZUFBZSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUMsSUFBSSxlQUFlLElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRTtnQkFDN0MsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDVixLQUFLLElBQUksY0FBYyxJQUFJLGVBQWUsRUFBRTtvQkFDMUMsSUFBSSxjQUFjLEtBQUssRUFBRSxFQUFFO3dCQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQyxD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QUFRLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDakUsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN4RSxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDbkQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBM0tGLFVBQVU7Ozs7WUFGRixnQkFBZ0I7Ozs7Ozs7SUFJWCxtQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlRm9ybWF0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIGdldFRpbWVNYXNrKG1pbGl0YXJ5VGltZTogYm9vbGVhbik6IEFycmF5PFJlZ0V4cD4ge1xuICAgIGxldCBtYXNrOiBBcnJheTxSZWdFeHA+ID0gWy9cXGQvLCAvXFxkLywgLzovLCAvXFxkLywgL1xcZC9dLFxuICAgICAgdGltZUZvcm1hdEFycmF5OiBBcnJheTxzdHJpbmc+ID0gW10sXG4gICAgICB0aW1lRm9ybWF0UGFydHNBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIGxldCB0aW1lRm9ybWF0OiBzdHJpbmcgPSB0aGlzLmxhYmVscy50aW1lRm9ybWF0UGxhY2Vob2xkZXJBTS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChtaWxpdGFyeVRpbWUpIHtcbiAgICAgIHJldHVybiBtYXNrO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lRm9ybWF0QXJyYXkgPSB0aW1lRm9ybWF0LnNwbGl0KCdoaDptbScpO1xuICAgICAgaWYgKHRpbWVGb3JtYXRBcnJheSAmJiB0aW1lRm9ybWF0QXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIG1hc2sgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgdGltZUZvcm1hdFBhcnQgb2YgdGltZUZvcm1hdEFycmF5KSB7XG4gICAgICAgICAgaWYgKHRpbWVGb3JtYXRQYXJ0ID09PSAnJykge1xuICAgICAgICAgICAgbWFzayA9IG1hc2suY29uY2F0KFsvXFxkLywgL1xcZHw6LywgLzp8XFxkLywgL1xcZHxcXHd8XFxzLywgL1xcZHxcXHN8XFx3L10pO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGltZUZvcm1hdFBhcnQubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVGb3JtYXRQYXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIG1hc2sucHVzaCgvXFxzfFxcd3xcXGR8XFwuLyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXNrO1xuICB9XG5cbiAgZ2V0RGF0ZU1hc2soKTogQXJyYXk8UmVnRXhwPiB7XG4gICAgcmV0dXJuIFsvXFxkLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXC98XFwufFxcLXxcXGQvLCAvXFxkfFxcL3xcXC58XFwtLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFxkfFxcL3xcXC58XFwtLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXGQvLCAvXFxkL107XG4gIH1cblxuICBnZXREYXRlVGltZU1hc2sobWlsaXRhcnlUaW1lOiBib29sZWFuID0gZmFsc2UpOiBBcnJheTxSZWdFeHA+IHtcbiAgICByZXR1cm4gWy4uLnRoaXMuZ2V0RGF0ZU1hc2soKSwgL1xcLD8vLCAvXFxzLywgLi4udGhpcy5nZXRUaW1lTWFzayhtaWxpdGFyeVRpbWUpXTtcbiAgfVxuXG4gIGdldFRpbWVQbGFjZUhvbGRlcihtaWxpdGFyeVRpbWU6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGlmIChtaWxpdGFyeVRpbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmxhYmVscy50aW1lRm9ybWF0UGxhY2Vob2xkZXIyNEhvdXI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxhYmVscy50aW1lRm9ybWF0UGxhY2Vob2xkZXJBTTtcbiAgfVxuXG4gIHBhcnNlRGF0ZVN0cmluZyhkYXRlU3RyaW5nOiBzdHJpbmcpOiBbRGF0ZSwgc3RyaW5nXSB7XG4gICAgbGV0IGRhdGVGb3JtYXQ6IHN0cmluZyA9IHRoaXMubGFiZWxzLmRhdGVGb3JtYXRTdHJpbmcoKSxcbiAgICAgIGRhdGVGb3JtYXRSZWdleCA9IC8oXFx3KylbXFwvfFxcLnxcXC1dKFxcdyspW1xcL3xcXC58XFwtXShcXHcrKS9naSxcbiAgICAgIGRhdGVWYWx1ZVJlZ2V4ID0gLyhcXGQrKVtcXC98XFwufFxcLV0oXFxkKylbXFwvfFxcLnxcXC1dKFxcZCspL2dpLFxuICAgICAgZGF0ZUZvcm1hdFRva2VuczogQXJyYXk8c3RyaW5nPixcbiAgICAgIGRhdGVWYWx1ZVRva2VuczogQXJyYXk8c3RyaW5nPixcbiAgICAgIHllYXI6IG51bWJlcixcbiAgICAgIG1vbnRoOiBudW1iZXIsXG4gICAgICBkYXk6IG51bWJlcixcbiAgICAgIGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGlmIChIZWxwZXJzLmlzRW1wdHkoZGF0ZUZvcm1hdCkpIHtcbiAgICAgIC8vIERlZmF1bHQgdG8gTU0vZGQveXl5eVxuICAgICAgZGF0ZUZvcm1hdCA9ICdtbS9kZC95eXl5JztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZUZvcm1hdCA9IGRhdGVGb3JtYXQudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgZGF0ZUZvcm1hdFRva2VucyA9IGRhdGVGb3JtYXRSZWdleC5leGVjKGRhdGVGb3JtYXQpO1xuICAgIGRhdGVWYWx1ZVRva2VucyA9IGRhdGVWYWx1ZVJlZ2V4LmV4ZWMoZGF0ZVN0cmluZyk7XG4gICAgaWYgKGRhdGVGb3JtYXRUb2tlbnMgJiYgZGF0ZUZvcm1hdFRva2Vucy5sZW5ndGggPT09IDQgJiYgZGF0ZVZhbHVlVG9rZW5zICYmIGRhdGVWYWx1ZVRva2Vucy5sZW5ndGggPT09IDQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGlmIChkYXRlRm9ybWF0VG9rZW5zW2ldLmluY2x1ZGVzKCdtJykpIHtcbiAgICAgICAgICBtb250aCA9IHBhcnNlSW50KGRhdGVWYWx1ZVRva2Vuc1tpXSkgLSAxO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGVGb3JtYXRUb2tlbnNbaV0uaW5jbHVkZXMoJ2QnKSkge1xuICAgICAgICAgIGRheSA9IHBhcnNlSW50KGRhdGVWYWx1ZVRva2Vuc1tpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeWVhciA9IHBhcnNlSW50KGRhdGVWYWx1ZVRva2Vuc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIHllYXIgPiAxOTAwICYmIGRheSA+IDAgJiYgZGF5IDw9IDMxKSB7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRhdGVGb3JtYXRUb2tlbnMgJiYgZGF0ZUZvcm1hdFRva2Vucy5sZW5ndGggPT09IDQgJiYgZGF0ZVN0cmluZy5sZW5ndGggPj0gMSkge1xuICAgICAgbGV0IHR3b1Rva2VucyA9IC9cXGR7MSw0fShcXC98XFwufFxcLSkoXFxkezEsMn0pLy5leGVjKGRhdGVTdHJpbmcpO1xuICAgICAgbGV0IG9uZVRva2VuID0gL14oXFxkezEsNH0pJC8uZXhlYyhkYXRlU3RyaW5nKTtcbiAgICAgIGxldCBkZWxpbWl0ZXIgPSAvXFx3KyhcXC98XFwufFxcLSlcXHcrW1xcL3xcXC58XFwtXVxcdysvZ2kuZXhlYyhkYXRlRm9ybWF0KTtcbiAgICAgIGxldCBkYXRlU3RyaW5nV2l0aERlbGltaXRlciA9IGRhdGVTdHJpbmdbZGF0ZVN0cmluZy5sZW5ndGggLSAxXS5tYXRjaCgvXFwvfFxcLnxcXC0vKTtcbiAgICAgIGlmICh0d29Ub2tlbnMgJiYgdHdvVG9rZW5zLmxlbmd0aCA9PT0gMyAmJiB0aGlzLmlzVmFsaWREYXRlUGFydCh0d29Ub2tlbnNbMl0sIGRhdGVGb3JtYXRUb2tlbnNbMl0pICYmICFkYXRlU3RyaW5nV2l0aERlbGltaXRlcikge1xuICAgICAgICBkYXRlU3RyaW5nID0gYCR7ZGF0ZVN0cmluZ30ke2RlbGltaXRlclsxXX1gO1xuICAgICAgfSBlbHNlIGlmIChvbmVUb2tlbiAmJiBvbmVUb2tlbi5sZW5ndGggPT09IDIgJiYgdGhpcy5pc1ZhbGlkRGF0ZVBhcnQob25lVG9rZW5bMV0sIGRhdGVGb3JtYXRUb2tlbnNbMV0pICYmICFkYXRlU3RyaW5nV2l0aERlbGltaXRlcikge1xuICAgICAgICBkYXRlU3RyaW5nID0gYCR7ZGF0ZVN0cmluZ30ke2RlbGltaXRlclsxXX1gO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW2RhdGUsIGRhdGVTdHJpbmddO1xuICB9XG5cbiAgcGFyc2VUaW1lU3RyaW5nKHRpbWVTdHJpbmc6IHN0cmluZywgbWlsaXRhcnlUaW1lOiBib29sZWFuKTogW0RhdGUsIHN0cmluZ10ge1xuICAgIGxldCB2YWx1ZTogRGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgICB0aW1lU3RyaW5nUGFydHM6IEFycmF5PHN0cmluZz4sXG4gICAgICB0aW1lRm9ybWF0OiBzdHJpbmc7XG4gICAgbGV0IGFtRm9ybWF0ID0gdGhpcy5sYWJlbHMudGltZUZvcm1hdEFNO1xuICAgIGxldCBwbUZvcm1hdCA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQTTtcbiAgICBpZiAoISh0aW1lU3RyaW5nICYmIHRpbWVTdHJpbmcuaW5jbHVkZXMoJzonKSkpIHtcbiAgICAgIHJldHVybiBbdmFsdWUsIHRpbWVTdHJpbmddO1xuICAgIH1cbiAgICBpZiAoIW1pbGl0YXJ5VGltZSAmJiBhbUZvcm1hdCAmJiBwbUZvcm1hdCkge1xuICAgICAgbGV0IHNwbGl0czogQXJyYXk8c3RyaW5nPiA9IFtdLFxuICAgICAgICBwbTogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgYW1Gb3JtYXQgPSB0aGlzLmxhYmVscy50aW1lRm9ybWF0QU0udG9Mb3dlckNhc2UoKTtcbiAgICAgIHBtRm9ybWF0ID0gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBNLnRvTG93ZXJDYXNlKCk7XG4gICAgICB0aW1lU3RyaW5nID0gdGltZVN0cmluZy50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHRpbWVTdHJpbmcuaW5jbHVkZXMoYW1Gb3JtYXQpKSB7XG4gICAgICAgIHNwbGl0cyA9IHRpbWVTdHJpbmcuc3BsaXQoYW1Gb3JtYXQpO1xuICAgICAgfSBlbHNlIGlmICh0aW1lU3RyaW5nLmluY2x1ZGVzKHBtRm9ybWF0KSkge1xuICAgICAgICBzcGxpdHMgPSB0aW1lU3RyaW5nLnNwbGl0KHBtRm9ybWF0KTtcbiAgICAgICAgcG0gPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHNwbGl0cyAmJiBzcGxpdHMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2Ygc3BsaXRzKSB7XG4gICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS50cmltKCkuaW5jbHVkZXMoJzonKSkge1xuICAgICAgICAgICAgdGltZVN0cmluZ1BhcnRzID0gaXRlbS50cmltKCkuc3BsaXQoJzonKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aW1lU3RyaW5nUGFydHMgJiYgdGltZVN0cmluZ1BhcnRzLmxlbmd0aCAmJiB0aW1lU3RyaW5nUGFydHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGxldCBob3VyczogbnVtYmVyID0gcGFyc2VJbnQodGltZVN0cmluZ1BhcnRzWzBdKTtcbiAgICAgICAgaWYgKGhvdXJzID09PSAxMiAmJiBwbSkge1xuICAgICAgICAgIGhvdXJzID0gMTI7XG4gICAgICAgIH0gZWxzZSBpZiAocG0pIHtcbiAgICAgICAgICBob3VycyA9IGhvdXJzICsgMTI7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICAgICAgaG91cnMgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlLnNldEhvdXJzKGhvdXJzKTtcbiAgICAgICAgdmFsdWUuc2V0TWludXRlcyhwYXJzZUludCh0aW1lU3RyaW5nUGFydHNbMV0pKTtcbiAgICAgICAgdmFsdWUuc2V0U2Vjb25kcygwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGltZVN0cmluZ1BhcnRzID0gLyhcXGR7MSwyfSk6KFxcZHsyfSkvLmV4ZWModGltZVN0cmluZyk7XG4gICAgICBpZiAodGltZVN0cmluZ1BhcnRzICYmIHRpbWVTdHJpbmdQYXJ0cy5sZW5ndGggJiYgdGltZVN0cmluZ1BhcnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICB2YWx1ZS5zZXRIb3VycyhwYXJzZUludCh0aW1lU3RyaW5nUGFydHNbMV0pKTtcbiAgICAgICAgdmFsdWUuc2V0TWludXRlcyhwYXJzZUludCh0aW1lU3RyaW5nUGFydHNbMl0pKTtcbiAgICAgICAgdmFsdWUuc2V0U2Vjb25kcygwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFt2YWx1ZSwgdGltZVN0cmluZ107XG4gIH1cblxuICBwYXJzZVN0cmluZyhkYXRlVGltZVN0cmluZzogc3RyaW5nLCBtaWxpdGFyeVRpbWU6IGJvb2xlYW4sIHR5cGU6IHN0cmluZyk6IFtEYXRlLCBzdHJpbmddIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2RhdGV0aW1lJzpcbiAgICAgICAgbGV0IHN0ciA9IGRhdGVUaW1lU3RyaW5nLnJlcGxhY2UoLy0vZywgJy8nKTtcbiAgICAgICAgbGV0IHBhcnRzID0gc3RyLnNwbGl0KCcgJyk7XG4gICAgICAgIGxldCBbZHQsIGR0c10gPSB0aGlzLnBhcnNlRGF0ZVN0cmluZyhwYXJ0c1swXSk7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgbGV0IFt0bSwgdG1zXSA9IHRoaXMucGFyc2VUaW1lU3RyaW5nKHBhcnRzWzFdLCBtaWxpdGFyeVRpbWUpO1xuICAgICAgICAgIHJldHVybiBbbmV3IERhdGUoZHQuc2V0SG91cnModG0uZ2V0SG91cnMoKSwgdG0uZ2V0TWludXRlcygpKSksIGAke2R0c30gJHt0bXN9YF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtkdCwgZHRzXTtcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZURhdGVTdHJpbmcoZGF0ZVRpbWVTdHJpbmcpO1xuICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlVGltZVN0cmluZyhkYXRlVGltZVN0cmluZywgbWlsaXRhcnlUaW1lKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpc1ZhbGlkRGF0ZVBhcnQodmFsdWU6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBsZXQgZGF0ZVBhcnQgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgaWYgKGZvcm1hdC5pbmNsdWRlcygnbScpICYmIChkYXRlUGFydCA+PSAyIHx8IHZhbHVlLmxlbmd0aCA9PT0gMikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZm9ybWF0LmluY2x1ZGVzKCdkJykgJiYgKGRhdGVQYXJ0ID49IDQgfHwgdmFsdWUubGVuZ3RoID09PSAyKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChmb3JtYXQuaW5jbHVkZXMoJ3knKSAmJiBkYXRlUGFydCA+PSAxMDAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=