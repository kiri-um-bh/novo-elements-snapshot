/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        let dateFormat = this.labels.dateFormat;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZUZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBR3JFLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFDNUIsWUFBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDOzs7OztJQUVoRCxXQUFXLENBQUMsWUFBcUI7O1lBQzNCLElBQUksR0FBa0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDOztZQUNyRCxlQUFlLEdBQWtCLEVBQUU7O1lBQ25DLG9CQUFvQixHQUFrQixFQUFFOztZQUN0QyxVQUFVLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUU7UUFDMUUsSUFBSSxZQUFZLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsZUFBZSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUMsSUFBSSxlQUFlLElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRTtnQkFDN0MsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDVixLQUFLLElBQUksY0FBYyxJQUFJLGVBQWUsRUFBRTtvQkFDMUMsSUFBSSxjQUFjLEtBQUssRUFBRSxFQUFFO3dCQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQyxD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SSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNqRSxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3hFLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUNuRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUEzS0YsVUFBVTs7OztZQUZGLGdCQUFnQjs7Ozs7OztJQUlYLG1DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgZ2V0VGltZU1hc2sobWlsaXRhcnlUaW1lOiBib29sZWFuKTogQXJyYXk8UmVnRXhwPiB7XG4gICAgbGV0IG1hc2s6IEFycmF5PFJlZ0V4cD4gPSBbL1xcZC8sIC9cXGQvLCAvOi8sIC9cXGQvLCAvXFxkL10sXG4gICAgICB0aW1lRm9ybWF0QXJyYXk6IEFycmF5PHN0cmluZz4gPSBbXSxcbiAgICAgIHRpbWVGb3JtYXRQYXJ0c0FycmF5OiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgbGV0IHRpbWVGb3JtYXQ6IHN0cmluZyA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQbGFjZWhvbGRlckFNLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG1pbGl0YXJ5VGltZSkge1xuICAgICAgcmV0dXJuIG1hc2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVGb3JtYXRBcnJheSA9IHRpbWVGb3JtYXQuc3BsaXQoJ2hoOm1tJyk7XG4gICAgICBpZiAodGltZUZvcm1hdEFycmF5ICYmIHRpbWVGb3JtYXRBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgbWFzayA9IFtdO1xuICAgICAgICBmb3IgKGxldCB0aW1lRm9ybWF0UGFydCBvZiB0aW1lRm9ybWF0QXJyYXkpIHtcbiAgICAgICAgICBpZiAodGltZUZvcm1hdFBhcnQgPT09ICcnKSB7XG4gICAgICAgICAgICBtYXNrID0gbWFzay5jb25jYXQoWy9cXGQvLCAvXFxkfDovLCAvOnxcXGQvLCAvXFxkfFxcd3xcXHMvLCAvXFxkfFxcc3xcXHcvXSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aW1lRm9ybWF0UGFydC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZUZvcm1hdFBhcnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgbWFzay5wdXNoKC9cXHN8XFx3fFxcZHxcXC4vKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cblxuICBnZXREYXRlTWFzaygpOiBBcnJheTxSZWdFeHA+IHtcbiAgICByZXR1cm4gWy9cXGQvLCAvXFxkfFxcL3xcXC58XFwtLywgL1xcL3xcXC58XFwtfFxcZC8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFxkfFxcL3xcXC58XFwtLywgL1xcZHxcXC98XFwufFxcLS8sIC9cXGR8XFwvfFxcLnxcXC0vLCAvXFxkfFxcL3xcXC58XFwtLywgL1xcZC8sIC9cXGQvXTtcbiAgfVxuXG4gIGdldERhdGVUaW1lTWFzayhtaWxpdGFyeVRpbWU6IGJvb2xlYW4gPSBmYWxzZSk6IEFycmF5PFJlZ0V4cD4ge1xuICAgIHJldHVybiBbLi4udGhpcy5nZXREYXRlTWFzaygpLCAvXFwsPy8sIC9cXHMvLCAuLi50aGlzLmdldFRpbWVNYXNrKG1pbGl0YXJ5VGltZSldO1xuICB9XG5cbiAgZ2V0VGltZVBsYWNlSG9sZGVyKG1pbGl0YXJ5VGltZTogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgaWYgKG1pbGl0YXJ5VGltZSkge1xuICAgICAgcmV0dXJuIHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQbGFjZWhvbGRlcjI0SG91cjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQbGFjZWhvbGRlckFNO1xuICB9XG5cbiAgcGFyc2VEYXRlU3RyaW5nKGRhdGVTdHJpbmc6IHN0cmluZyk6IFtEYXRlLCBzdHJpbmddIHtcbiAgICBsZXQgZGF0ZUZvcm1hdDogc3RyaW5nID0gdGhpcy5sYWJlbHMuZGF0ZUZvcm1hdCxcbiAgICAgIGRhdGVGb3JtYXRSZWdleCA9IC8oXFx3KylbXFwvfFxcLnxcXC1dKFxcdyspW1xcL3xcXC58XFwtXShcXHcrKS9naSxcbiAgICAgIGRhdGVWYWx1ZVJlZ2V4ID0gLyhcXGQrKVtcXC98XFwufFxcLV0oXFxkKylbXFwvfFxcLnxcXC1dKFxcZCspL2dpLFxuICAgICAgZGF0ZUZvcm1hdFRva2VuczogQXJyYXk8c3RyaW5nPixcbiAgICAgIGRhdGVWYWx1ZVRva2VuczogQXJyYXk8c3RyaW5nPixcbiAgICAgIHllYXI6IG51bWJlcixcbiAgICAgIG1vbnRoOiBudW1iZXIsXG4gICAgICBkYXk6IG51bWJlcixcbiAgICAgIGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGlmIChIZWxwZXJzLmlzRW1wdHkoZGF0ZUZvcm1hdCkpIHtcbiAgICAgIC8vIERlZmF1bHQgdG8gTU0vZGQveXl5eVxuICAgICAgZGF0ZUZvcm1hdCA9ICdtbS9kZC95eXl5JztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZUZvcm1hdCA9IGRhdGVGb3JtYXQudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgZGF0ZUZvcm1hdFRva2VucyA9IGRhdGVGb3JtYXRSZWdleC5leGVjKGRhdGVGb3JtYXQpO1xuICAgIGRhdGVWYWx1ZVRva2VucyA9IGRhdGVWYWx1ZVJlZ2V4LmV4ZWMoZGF0ZVN0cmluZyk7XG4gICAgaWYgKGRhdGVGb3JtYXRUb2tlbnMgJiYgZGF0ZUZvcm1hdFRva2Vucy5sZW5ndGggPT09IDQgJiYgZGF0ZVZhbHVlVG9rZW5zICYmIGRhdGVWYWx1ZVRva2Vucy5sZW5ndGggPT09IDQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGlmIChkYXRlRm9ybWF0VG9rZW5zW2ldLmluY2x1ZGVzKCdtJykpIHtcbiAgICAgICAgICBtb250aCA9IHBhcnNlSW50KGRhdGVWYWx1ZVRva2Vuc1tpXSkgLSAxO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGVGb3JtYXRUb2tlbnNbaV0uaW5jbHVkZXMoJ2QnKSkge1xuICAgICAgICAgIGRheSA9IHBhcnNlSW50KGRhdGVWYWx1ZVRva2Vuc1tpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeWVhciA9IHBhcnNlSW50KGRhdGVWYWx1ZVRva2Vuc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIHllYXIgPiAxOTAwICYmIGRheSA+IDAgJiYgZGF5IDw9IDMxKSB7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRhdGVGb3JtYXRUb2tlbnMgJiYgZGF0ZUZvcm1hdFRva2Vucy5sZW5ndGggPT09IDQgJiYgZGF0ZVN0cmluZy5sZW5ndGggPj0gMSkge1xuICAgICAgbGV0IHR3b1Rva2VucyA9IC9cXGR7MSw0fShcXC98XFwufFxcLSkoXFxkezEsMn0pLy5leGVjKGRhdGVTdHJpbmcpO1xuICAgICAgbGV0IG9uZVRva2VuID0gL14oXFxkezEsNH0pJC8uZXhlYyhkYXRlU3RyaW5nKTtcbiAgICAgIGxldCBkZWxpbWl0ZXIgPSAvXFx3KyhcXC98XFwufFxcLSlcXHcrW1xcL3xcXC58XFwtXVxcdysvZ2kuZXhlYyhkYXRlRm9ybWF0KTtcbiAgICAgIGxldCBkYXRlU3RyaW5nV2l0aERlbGltaXRlciA9IGRhdGVTdHJpbmdbZGF0ZVN0cmluZy5sZW5ndGggLSAxXS5tYXRjaCgvXFwvfFxcLnxcXC0vKTtcbiAgICAgIGlmICh0d29Ub2tlbnMgJiYgdHdvVG9rZW5zLmxlbmd0aCA9PT0gMyAmJiB0aGlzLmlzVmFsaWREYXRlUGFydCh0d29Ub2tlbnNbMl0sIGRhdGVGb3JtYXRUb2tlbnNbMl0pICYmICFkYXRlU3RyaW5nV2l0aERlbGltaXRlcikge1xuICAgICAgICBkYXRlU3RyaW5nID0gYCR7ZGF0ZVN0cmluZ30ke2RlbGltaXRlclsxXX1gO1xuICAgICAgfSBlbHNlIGlmIChvbmVUb2tlbiAmJiBvbmVUb2tlbi5sZW5ndGggPT09IDIgJiYgdGhpcy5pc1ZhbGlkRGF0ZVBhcnQob25lVG9rZW5bMV0sIGRhdGVGb3JtYXRUb2tlbnNbMV0pICYmICFkYXRlU3RyaW5nV2l0aERlbGltaXRlcikge1xuICAgICAgICBkYXRlU3RyaW5nID0gYCR7ZGF0ZVN0cmluZ30ke2RlbGltaXRlclsxXX1gO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW2RhdGUsIGRhdGVTdHJpbmddO1xuICB9XG5cbiAgcGFyc2VUaW1lU3RyaW5nKHRpbWVTdHJpbmc6IHN0cmluZywgbWlsaXRhcnlUaW1lOiBib29sZWFuKTogW0RhdGUsIHN0cmluZ10ge1xuICAgIGxldCB2YWx1ZTogRGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgICB0aW1lU3RyaW5nUGFydHM6IEFycmF5PHN0cmluZz4sXG4gICAgICB0aW1lRm9ybWF0OiBzdHJpbmc7XG4gICAgbGV0IGFtRm9ybWF0ID0gdGhpcy5sYWJlbHMudGltZUZvcm1hdEFNO1xuICAgIGxldCBwbUZvcm1hdCA9IHRoaXMubGFiZWxzLnRpbWVGb3JtYXRQTTtcbiAgICBpZiAoISh0aW1lU3RyaW5nICYmIHRpbWVTdHJpbmcuaW5jbHVkZXMoJzonKSkpIHtcbiAgICAgIHJldHVybiBbdmFsdWUsIHRpbWVTdHJpbmddO1xuICAgIH1cbiAgICBpZiAoIW1pbGl0YXJ5VGltZSAmJiBhbUZvcm1hdCAmJiBwbUZvcm1hdCkge1xuICAgICAgbGV0IHNwbGl0czogQXJyYXk8c3RyaW5nPiA9IFtdLFxuICAgICAgICBwbTogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgYW1Gb3JtYXQgPSB0aGlzLmxhYmVscy50aW1lRm9ybWF0QU0udG9Mb3dlckNhc2UoKTtcbiAgICAgIHBtRm9ybWF0ID0gdGhpcy5sYWJlbHMudGltZUZvcm1hdFBNLnRvTG93ZXJDYXNlKCk7XG4gICAgICB0aW1lU3RyaW5nID0gdGltZVN0cmluZy50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHRpbWVTdHJpbmcuaW5jbHVkZXMoYW1Gb3JtYXQpKSB7XG4gICAgICAgIHNwbGl0cyA9IHRpbWVTdHJpbmcuc3BsaXQoYW1Gb3JtYXQpO1xuICAgICAgfSBlbHNlIGlmICh0aW1lU3RyaW5nLmluY2x1ZGVzKHBtRm9ybWF0KSkge1xuICAgICAgICBzcGxpdHMgPSB0aW1lU3RyaW5nLnNwbGl0KHBtRm9ybWF0KTtcbiAgICAgICAgcG0gPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHNwbGl0cyAmJiBzcGxpdHMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2Ygc3BsaXRzKSB7XG4gICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS50cmltKCkuaW5jbHVkZXMoJzonKSkge1xuICAgICAgICAgICAgdGltZVN0cmluZ1BhcnRzID0gaXRlbS50cmltKCkuc3BsaXQoJzonKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aW1lU3RyaW5nUGFydHMgJiYgdGltZVN0cmluZ1BhcnRzLmxlbmd0aCAmJiB0aW1lU3RyaW5nUGFydHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGxldCBob3VyczogbnVtYmVyID0gcGFyc2VJbnQodGltZVN0cmluZ1BhcnRzWzBdKTtcbiAgICAgICAgaWYgKGhvdXJzID09PSAxMiAmJiBwbSkge1xuICAgICAgICAgIGhvdXJzID0gMTI7XG4gICAgICAgIH0gZWxzZSBpZiAocG0pIHtcbiAgICAgICAgICBob3VycyA9IGhvdXJzICsgMTI7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICAgICAgaG91cnMgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlLnNldEhvdXJzKGhvdXJzKTtcbiAgICAgICAgdmFsdWUuc2V0TWludXRlcyhwYXJzZUludCh0aW1lU3RyaW5nUGFydHNbMV0pKTtcbiAgICAgICAgdmFsdWUuc2V0U2Vjb25kcygwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGltZVN0cmluZ1BhcnRzID0gLyhcXGR7MSwyfSk6KFxcZHsyfSkvLmV4ZWModGltZVN0cmluZyk7XG4gICAgICBpZiAodGltZVN0cmluZ1BhcnRzICYmIHRpbWVTdHJpbmdQYXJ0cy5sZW5ndGggJiYgdGltZVN0cmluZ1BhcnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICB2YWx1ZS5zZXRIb3VycyhwYXJzZUludCh0aW1lU3RyaW5nUGFydHNbMV0pKTtcbiAgICAgICAgdmFsdWUuc2V0TWludXRlcyhwYXJzZUludCh0aW1lU3RyaW5nUGFydHNbMl0pKTtcbiAgICAgICAgdmFsdWUuc2V0U2Vjb25kcygwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFt2YWx1ZSwgdGltZVN0cmluZ107XG4gIH1cblxuICBwYXJzZVN0cmluZyhkYXRlVGltZVN0cmluZzogc3RyaW5nLCBtaWxpdGFyeVRpbWU6IGJvb2xlYW4sIHR5cGU6IHN0cmluZyk6IFtEYXRlLCBzdHJpbmddIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2RhdGV0aW1lJzpcbiAgICAgICAgbGV0IHN0ciA9IGRhdGVUaW1lU3RyaW5nLnJlcGxhY2UoLy0vZywgJy8nKTtcbiAgICAgICAgbGV0IHBhcnRzID0gc3RyLnNwbGl0KCcgJyk7XG4gICAgICAgIGxldCBbZHQsIGR0c10gPSB0aGlzLnBhcnNlRGF0ZVN0cmluZyhwYXJ0c1swXSk7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgbGV0IFt0bSwgdG1zXSA9IHRoaXMucGFyc2VUaW1lU3RyaW5nKHBhcnRzWzFdLCBtaWxpdGFyeVRpbWUpO1xuICAgICAgICAgIHJldHVybiBbbmV3IERhdGUoZHQuc2V0SG91cnModG0uZ2V0SG91cnMoKSwgdG0uZ2V0TWludXRlcygpKSksIGAke2R0c30gJHt0bXN9YF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtkdCwgZHRzXTtcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZURhdGVTdHJpbmcoZGF0ZVRpbWVTdHJpbmcpO1xuICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlVGltZVN0cmluZyhkYXRlVGltZVN0cmluZywgbWlsaXRhcnlUaW1lKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpc1ZhbGlkRGF0ZVBhcnQodmFsdWU6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBsZXQgZGF0ZVBhcnQgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgaWYgKGZvcm1hdC5pbmNsdWRlcygnbScpICYmIChkYXRlUGFydCA+PSAyIHx8IHZhbHVlLmxlbmd0aCA9PT0gMikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZm9ybWF0LmluY2x1ZGVzKCdkJykgJiYgKGRhdGVQYXJ0ID49IDQgfHwgdmFsdWUubGVuZ3RoID09PSAyKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChmb3JtYXQuaW5jbHVkZXMoJ3knKSAmJiBkYXRlUGFydCA+PSAxMDAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=