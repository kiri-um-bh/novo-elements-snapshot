// @dynamic
export class Helpers {
    /**
     * Swallows an event to stop further execution
     */
    static swallowEvent(event) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
    }
    static interpolate(str, props) {
        if (this.isDate(props)) {
            props = this.dateToObject(props);
        }
        return str.replace(/\$([\w\.]+)/g, (original, key) => {
            const keys = key.split('.');
            let value = props[keys.shift()];
            while (keys.length && value !== undefined) {
                const k = keys.shift();
                value = k ? value[k] : `${value}.`;
            }
            return value !== undefined ? value : '';
        });
    }
    static interpolateWithFallback(formatString, data) {
        // Format string can be an array, it will attempt to interpolate each item
        // in the array, if there is a failure to replace it will mark it as such
        // It will either return the first successful replacement of ALL variables,
        // or an empty string
        if (Array.isArray(formatString)) {
            const successes = [];
            const failures = [];
            formatString.forEach((format) => {
                let isSuccess = true;
                const attempt = format.replace(/\$([\w\.]+)/g, (original, key) => {
                    const keys = key.split('.');
                    let value = data[keys.shift()];
                    while (keys.length && value !== undefined) {
                        const k = keys.shift();
                        value = k ? value[k] : `${value}.`;
                    }
                    if (isSuccess && Helpers.isEmpty(value)) {
                        isSuccess = false;
                    }
                    return Helpers.isEmpty(value) ? '' : value;
                });
                if (isSuccess) {
                    successes.push(attempt);
                }
                else {
                    failures.push(attempt);
                }
            });
            if (successes.length !== 0) {
                return successes[0];
            }
            return '';
        }
        else {
            return Helpers.interpolate(formatString, data);
        }
    }
    /**
     * Verifies that an object has every property expected by a string to interpolate
     * @param str   The string to interpolate
     * @param props The params to replace in string.
     */
    static validateInterpolationProps(str, props) {
        const keys = str.match(/\$([\w\.]+)/g);
        return keys.every((key) => {
            return props.hasOwnProperty(key.substr(1));
        });
    }
    static isObject(item) {
        return item && typeof item === 'object' && !Array.isArray(item) && item !== null;
    }
    /**
     * Checks to see if the object is a string
     */
    static isString(obj) {
        return typeof obj === 'string';
    }
    static escapeString(obj) {
        if (Helpers.isString(obj)) {
            return obj.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
        return obj;
    }
    static isNumber(val, includeNegatives = false) {
        const numberRegex = includeNegatives ? /^-{0,1}\d*\.?\d*$/ : /^\d*\.?\d*$/;
        if (typeof val === 'string') {
            return val.length > 0 && val !== '.' && numberRegex.test(val);
        }
        else {
            return !isNaN(parseFloat(val));
        }
    }
    /**
     * Checks to see if the object is a undefined or null
     */
    static isBlank(obj) {
        return obj === undefined || obj === null;
    }
    /**
     * Checks to see if the object is a undefined or null
     */
    static isEmpty(obj) {
        return Helpers.isBlank(obj) || obj === '' || (Array.isArray(obj) && obj.length === 0);
    }
    /**
     * Checks to see if the object is a function
     */
    static isFunction(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    }
    /**
     * Checks to see if the object is a Date
     */
    static isDate(obj) {
        return obj instanceof Date;
    }
    static convertToArray(obj) {
        if (obj === undefined) {
            return [];
        }
        else if (!Array.isArray(obj)) {
            return [obj];
        }
        return obj;
    }
    static sortByField(fields, reverse = false) {
        return (previous, current) => {
            if (Helpers.isFunction(fields)) {
                return fields(reverse ? 'desc' : 'asc', previous, current);
            }
            if (!Array.isArray(fields)) {
                fields = [fields];
            }
            for (let i = 0; i < fields.length; i++) {
                const field = fields[i];
                let first = previous[field] || '';
                let second = current[field] || '';
                if (Helpers.isDate(first) && Helpers.isDate(second)) {
                    // Dates
                    first = first.getTime();
                    second = second.getTime();
                }
                else if (Helpers.isString(first) && Helpers.isString(second)) {
                    // Basic strings
                    first = first.toLowerCase();
                    second = second.toLowerCase();
                }
                else {
                    // Numbers
                    first = isNaN(Number(first)) ? first : Number(first);
                    second = isNaN(Number(second)) ? second : Number(second);
                }
                if (first > second) {
                    return reverse ? -1 : 1;
                }
                else if (first < second) {
                    return reverse ? 1 : -1;
                }
            }
            return 0;
        };
    }
    static filterByField(key, value) {
        return (item) => {
            const results = [];
            let field = can(item).have(key);
            if (value instanceof Function) {
                results.push(value(field, item));
            }
            else if (Array.isArray(value)) {
                results.push(value.includes(field));
            }
            else if (value instanceof Object) {
                if (field instanceof Date) {
                    field = field.getTime();
                }
                if (value.min) {
                    results.push(field >= value.min);
                }
                if (value.max) {
                    results.push(field <= value.max);
                }
                if (value.any && Array.isArray(value.any)) {
                    if (Array.isArray(field)) {
                        results.push(value.any.some((v) => field.includes(v)));
                    }
                    else {
                        results.push(value.any.includes(field));
                    }
                }
                if (value.all && Array.isArray(value.all)) {
                    results.push(value.all.every((v) => field.includes(v)));
                }
                if (value.not) {
                    results.push(!Helpers.filterByField(key, value.not)(item));
                }
                for (const subkey in value) {
                    if (['min', 'max', 'any', 'all', 'not'].indexOf(subkey) < 0) {
                        const subvalue = value[subkey];
                        results.push(Helpers.filterByField(`${key}.${subkey}`, subvalue)(item));
                    }
                }
            }
            else {
                results.push(JSON.stringify(field).match(new RegExp(value, 'gi')));
            }
            return results.every((x) => x);
        };
    }
    static findAncestor(element, selector) {
        while ((element = element.parentElement) && !element.matches.call(element, selector))
            ; // tslint:disable-line
        return element;
    }
    static deepClone(item) {
        if (Array.isArray(item)) {
            const newArr = [];
            for (let i = item.length; i-- > 0;) {
                // tslint:disable-line
                newArr[i] = Helpers.deepClone(item[i]);
            }
            return newArr;
        }
        if (typeof item === 'function' && !/\(\) \{ \[native/.test(item.toString()) && !item.toString().startsWith('class')) {
            let obj;
            for (const k in item) {
                if (k in item) {
                    obj[k] = Helpers.deepClone(item[k]);
                }
            }
            return obj;
        }
        if (item && typeof item === 'object') {
            const obj = {};
            for (const k in item) {
                if (k in item) {
                    obj[k] = Helpers.deepClone(item[k]);
                }
            }
            return obj;
        }
        return item;
    }
    static deepAssign(...objs) {
        if (objs.length < 2) {
            throw new Error('Need two or more objects to merge');
        }
        const target = Object.assign({}, objs[0]);
        for (let i = 1; i < objs.length; i++) {
            const source = Object.assign({}, objs[i]);
            Object.keys(source).forEach((prop) => {
                const value = source[prop];
                if (Helpers.isObject(value)) {
                    if (target.hasOwnProperty(prop) && Helpers.isObject(target[prop])) {
                        target[prop] = Helpers.deepAssign(target[prop], value);
                    }
                    else {
                        target[prop] = value;
                    }
                }
                else if (Array.isArray(value)) {
                    if (target.hasOwnProperty(prop) && Array.isArray(target[prop])) {
                        const targetArray = target[prop];
                        value.forEach((sourceItem, itemIndex) => {
                            if (itemIndex < targetArray.length) {
                                const targetItem = targetArray[itemIndex];
                                if (Object.is(targetItem, sourceItem)) {
                                    return;
                                }
                                if (Helpers.isObject(targetItem) && Helpers.isObject(sourceItem)) {
                                    targetArray[itemIndex] = Helpers.deepAssign(targetItem, sourceItem);
                                }
                                else if (Array.isArray(targetItem) && Array.isArray(sourceItem)) {
                                    targetArray[itemIndex] = Helpers.deepAssign(targetItem, sourceItem);
                                }
                                else {
                                    targetArray[itemIndex] = sourceItem;
                                }
                            }
                            else {
                                targetArray.push(sourceItem);
                            }
                        });
                    }
                    else {
                        target[prop] = value;
                    }
                }
                else {
                    target[prop] = value;
                }
            });
        }
        return target;
    }
    /**
     * Workaround for Edge browser since Element:nextElementSibling is undefined inside of template directives
     * @param element any document element
     * @returns the next sibling node that is of type: Element
     */
    static getNextElementSibling(element) {
        if (element.nextElementSibling) {
            return element.nextElementSibling;
        }
        else {
            let e = element.nextSibling;
            while (e && 1 !== e.nodeType) {
                e = e.nextSibling;
            }
            return e;
        }
    }
    static dateToObject(date) {
        const dateObj = {
            day: '',
            dayPeriod: '',
            era: '',
            hour: '',
            minute: '',
            month: '',
            second: '',
            weekday: '',
            year: '',
        };
        Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            era: 'short',
            hour: 'numeric',
            minute: 'numeric',
            month: 'numeric',
            second: 'numeric',
            weekday: 'long',
            year: 'numeric',
        })
            .formatToParts(date)
            .forEach((dateTimeFormatPart) => {
            if (dateTimeFormatPart.type !== 'literal') {
                dateObj[dateTimeFormatPart.type] = dateTimeFormatPart.value;
            }
        });
        return dateObj;
    }
}
export class Can {
    constructor(obj) {
        this.obj = obj;
    }
    have(key) {
        const props = key.split('.');
        let item = this.obj;
        for (let i = 0; i < props.length; i++) {
            item = item[props[i]];
            if (this.check(item) === false) {
                return item;
            }
        }
        return item;
    }
    check(thing) {
        return thing !== void 0;
    }
}
export function can(obj) {
    return new Can(obj);
}
// Assumes data is already sorted
export function binarySearch(item, array, compare) {
    return search(0, array.length - 1);
    function search(min, max) {
        if (min > max) {
            return undefined;
        }
        const guess = min + Math.floor((max - min) / 2);
        const comparison = compare(item, array[guess]);
        if (comparison === 0) {
            return array[guess];
        }
        else if (comparison === -1) {
            return search(min, guess - 1);
        }
        else if (comparison === 1) {
            return search(guess + 1, max);
        }
        else {
            throw new Error(`Input mismatch: ${JSON.stringify(item)} not comparable to ${JSON.stringify(array[guess])}`);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJ1dGlscy9IZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUFDWCxNQUFNLE9BQU8sT0FBTztJQUNsQjs7T0FFRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSztRQUN2QixJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUN4QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEIsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7UUFDRCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBZ0IsRUFBRSxHQUFXLEVBQUUsRUFBRTtZQUNuRSxNQUFNLElBQUksR0FBYSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNoQyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDekMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN2QixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUM7YUFDcEM7WUFDRCxPQUFPLEtBQUssS0FBSyxTQUFTLENB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QyxTQUFTLENBQUMsSUFBSSxDQUFDLHNCQUFzQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM5RztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGR5bmFtaWNcbmV4cG9ydCBjbGFzcyBIZWxwZXJzIHtcbiAgLyoqXG4gICAqIFN3YWxsb3dzIGFuIGV2ZW50IHRvIHN0b3AgZnVydGhlciBleGVjdXRpb25cbiAgICovXG4gIHN0YXRpYyBzd2FsbG93RXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaW50ZXJwb2xhdGUoc3RyOiBzdHJpbmcsIHByb3BzOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmlzRGF0ZShwcm9wcykpIHtcbiAgICAgIHByb3BzID0gdGhpcy5kYXRlVG9PYmplY3QocHJvcHMpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcJChbXFx3XFwuXSspL2csIChvcmlnaW5hbDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qga2V5czogc3RyaW5nW10gPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgIGxldCB2YWx1ZSA9IHByb3BzW2tleXMuc2hpZnQoKV07XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGggJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBrID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICB2YWx1ZSA9IGsgPyB2YWx1ZVtrXSA6IGAke3ZhbHVlfS5gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6ICcnO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGludGVycG9sYXRlV2l0aEZhbGxiYWNrKGZvcm1hdFN0cmluZzogc3RyaW5nIHwgc3RyaW5nW10sIGRhdGE6IGFueSk6IHN0cmluZyB7XG4gICAgLy8gRm9ybWF0IHN0cmluZyBjYW4gYmUgYW4gYXJyYXksIGl0IHdpbGwgYXR0ZW1wdCB0byBpbnRlcnBvbGF0ZSBlYWNoIGl0ZW1cbiAgICAvLyBpbiB0aGUgYXJyYXksIGlmIHRoZXJlIGlzIGEgZmFpbHVyZSB0byByZXBsYWNlIGl0IHdpbGwgbWFyayBpdCBhcyBzdWNoXG4gICAgLy8gSXQgd2lsbCBlaXRoZXIgcmV0dXJuIHRoZSBmaXJzdCBzdWNjZXNzZnVsIHJlcGxhY2VtZW50IG9mIEFMTCB2YXJpYWJsZXMsXG4gICAgLy8gb3IgYW4gZW1wdHkgc3RyaW5nXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZm9ybWF0U3RyaW5nKSkge1xuICAgICAgY29uc3Qgc3VjY2Vzc2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgY29uc3QgZmFpbHVyZXM6IHN0cmluZ1tdID0gW107XG4gICAgICBmb3JtYXRTdHJpbmcuZm9yRWFjaCgoZm9ybWF0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgbGV0IGlzU3VjY2VzczogYm9vbGVhbiA9IHRydWU7XG4gICAgICAgIGNvbnN0IGF0dGVtcHQgPSBmb3JtYXQucmVwbGFjZSgvXFwkKFtcXHdcXC5dKykvZywgKG9yaWdpbmFsLCBrZXkpID0+IHtcbiAgICAgICAgICBjb25zdCBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgICAgICAgbGV0IHZhbHVlID0gZGF0YVtrZXlzLnNoaWZ0KCldO1xuICAgICAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBrID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICAgICAgdmFsdWUgPSBrID8gdmFsdWVba10gOiBgJHt2YWx1ZX0uYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzU3VjY2VzcyAmJiBIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICBpc1N1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIEhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkgPyAnJyA6IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzU3VjY2Vzcykge1xuICAgICAgICAgIHN1Y2Nlc3Nlcy5wdXNoKGF0dGVtcHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZhaWx1cmVzLnB1c2goYXR0ZW1wdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHN1Y2Nlc3Nlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3Nlc1swXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEhlbHBlcnMuaW50ZXJwb2xhdGUoZm9ybWF0U3RyaW5nLCBkYXRhKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgdGhhdCBhbiBvYmplY3QgaGFzIGV2ZXJ5IHByb3BlcnR5IGV4cGVjdGVkIGJ5IGEgc3RyaW5nIHRvIGludGVycG9sYXRlXG4gICAqIEBwYXJhbSBzdHIgICBUaGUgc3RyaW5nIHRvIGludGVycG9sYXRlXG4gICAqIEBwYXJhbSBwcm9wcyBUaGUgcGFyYW1zIHRvIHJlcGxhY2UgaW4gc3RyaW5nLlxuICAgKi9cbiAgc3RhdGljIHZhbGlkYXRlSW50ZXJwb2xhdGlvblByb3BzKHN0cjogc3RyaW5nLCBwcm9wczogYW55KTogYm9vbGVhbiB7XG4gICAgY29uc3Qga2V5cyA9IHN0ci5tYXRjaCgvXFwkKFtcXHdcXC5dKykvZyk7XG4gICAgcmV0dXJuIGtleXMuZXZlcnkoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIHByb3BzLmhhc093blByb3BlcnR5KGtleS5zdWJzdHIoMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGlzT2JqZWN0KGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkgJiYgaXRlbSAhPT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSBzdHJpbmdcbiAgICovXG4gIHN0YXRpYyBpc1N0cmluZyhvYmo6IGFueSkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIHN0YXRpYyBlc2NhcGVTdHJpbmcob2JqOiBhbnkpOiBhbnkge1xuICAgIGlmIChIZWxwZXJzLmlzU3RyaW5nKG9iaikpIHtcbiAgICAgIHJldHVybiBvYmoucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHN0YXRpYyBpc051bWJlcih2YWw6IGFueSwgaW5jbHVkZU5lZ2F0aXZlczogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgY29uc3QgbnVtYmVyUmVnZXggPSBpbmNsdWRlTmVnYXRpdmVzID8gL14tezAsMX1cXGQqXFwuP1xcZCokLyA6IC9eXFxkKlxcLj9cXGQqJC87XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdmFsLmxlbmd0aCA+IDAgJiYgdmFsICE9PSAnLicgJiYgbnVtYmVyUmVnZXgudGVzdCh2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIHVuZGVmaW5lZCBvciBudWxsXG4gICAqL1xuICBzdGF0aWMgaXNCbGFuayhvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBvYmogPT09IHVuZGVmaW5lZCB8fCBvYmogPT09IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIGEgdW5kZWZpbmVkIG9yIG51bGxcbiAgICovXG4gIHN0YXRpYyBpc0VtcHR5KG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEhlbHBlcnMuaXNCbGFuayhvYmopIHx8IG9iaiA9PT0gJycgfHwgKEFycmF5LmlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09PSAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSBmdW5jdGlvblxuICAgKi9cbiAgc3RhdGljIGlzRnVuY3Rpb24ob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEob2JqICYmIG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY2FsbCAmJiBvYmouYXBwbHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIERhdGVcbiAgICovXG4gIHN0YXRpYyBpc0RhdGUob2JqOiBhbnkpIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRGF0ZTtcbiAgfVxuXG4gIHN0YXRpYyBjb252ZXJ0VG9BcnJheShvYmo6IHVua25vd24pIHtcbiAgICBpZiAob2JqID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIHJldHVybiBbb2JqXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHN0YXRpYyBzb3J0QnlGaWVsZChmaWVsZHM6IGFueSwgcmV2ZXJzZSA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIChwcmV2aW91czogYW55LCBjdXJyZW50OiBhbnkpID0+IHtcbiAgICAgIGlmIChIZWxwZXJzLmlzRnVuY3Rpb24oZmllbGRzKSkge1xuICAgICAgICByZXR1cm4gZmllbGRzKHJldmVyc2UgPyAnZGVzYycgOiAnYXNjJywgcHJldmlvdXMsIGN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGZpZWxkcykpIHtcbiAgICAgICAgZmllbGRzID0gW2ZpZWxkc107XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBmaWVsZDogc3RyaW5nID0gZmllbGRzW2ldO1xuICAgICAgICBsZXQgZmlyc3QgPSBwcmV2aW91c1tmaWVsZF0gfHwgJyc7XG4gICAgICAgIGxldCBzZWNvbmQgPSBjdXJyZW50W2ZpZWxkXSB8fCAnJztcblxuICAgICAgICBpZiAoSGVscGVycy5pc0RhdGUoZmlyc3QpICYmIEhlbHBlcnMuaXNEYXRlKHNlY29uZCkpIHtcbiAgICAgICAgICAvLyBEYXRlc1xuICAgICAgICAgIGZpcnN0ID0gZmlyc3QuZ2V0VGltZSgpO1xuICAgICAgICAgIHNlY29uZCA9IHNlY29uZC5nZXRUaW1lKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoSGVscGVycy5pc1N0cmluZyhmaXJzdCkgJiYgSGVscGVycy5pc1N0cmluZyhzZWNvbmQpKSB7XG4gICAgICAgICAgLy8gQmFzaWMgc3RyaW5nc1xuICAgICAgICAgIGZpcnN0ID0gZmlyc3QudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBzZWNvbmQgPSBzZWNvbmQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBOdW1iZXJzXG4gICAgICAgICAgZmlyc3QgPSBpc05hTihOdW1iZXIoZmlyc3QpKSA/IGZpcnN0IDogTnVtYmVyKGZpcnN0KTtcbiAgICAgICAgICBzZWNvbmQgPSBpc05hTihOdW1iZXIoc2Vjb25kKSkgPyBzZWNvbmQgOiBOdW1iZXIoc2Vjb25kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaXJzdCA+IHNlY29uZCkge1xuICAgICAgICAgIHJldHVybiByZXZlcnNlID8gLTEgOiAxO1xuICAgICAgICB9IGVsc2UgaWYgKGZpcnN0IDwgc2Vjb25kKSB7XG4gICAgICAgICAgcmV0dXJuIHJldmVyc2UgPyAxIDogLTE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZmlsdGVyQnlGaWVsZChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIChpdGVtKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICBsZXQgZmllbGQgPSBjYW4oaXRlbSkuaGF2ZShrZXkpO1xuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlKGZpZWxkLCBpdGVtKSk7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh2YWx1ZS5pbmNsdWRlcyhmaWVsZCkpO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICBpZiAoZmllbGQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZmllbGQgPSBmaWVsZC5nZXRUaW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLm1pbikge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChmaWVsZCA+PSB2YWx1ZS5taW4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5tYXgpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goZmllbGQgPD0gdmFsdWUubWF4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUuYW55ICYmIEFycmF5LmlzQXJyYXkodmFsdWUuYW55KSkge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkKSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlLmFueS5zb21lKCh2KSA9PiBmaWVsZC5pbmNsdWRlcyh2KSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2godmFsdWUuYW55LmluY2x1ZGVzKGZpZWxkKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5hbGwgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZS5hbGwpKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlLmFsbC5ldmVyeSgodikgPT4gZmllbGQuaW5jbHVkZXModikpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUubm90KSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKCFIZWxwZXJzLmZpbHRlckJ5RmllbGQoa2V5LCB2YWx1ZS5ub3QpKGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHN1YmtleSBpbiB2YWx1ZSkge1xuICAgICAgICAgIGlmIChbJ21pbicsICdtYXgnLCAnYW55JywgJ2FsbCcsICdub3QnXS5pbmRleE9mKHN1YmtleSkgPCAwKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJ2YWx1ZSA9IHZhbHVlW3N1YmtleV07XG4gICAgICAgICAgICByZXN1bHRzLnB1c2goSGVscGVycy5maWx0ZXJCeUZpZWxkKGAke2tleX0uJHtzdWJrZXl9YCwgc3VidmFsdWUpKGl0ZW0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChKU09OLnN0cmluZ2lmeShmaWVsZCkubWF0Y2gobmV3IFJlZ0V4cCh2YWx1ZSwgJ2dpJykpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzLmV2ZXJ5KCh4KSA9PiB4KTtcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZpbmRBbmNlc3RvcihlbGVtZW50OiBFbGVtZW50LCBzZWxlY3Rvcjogc3RyaW5nKTogRWxlbWVudCB7XG4gICAgd2hpbGUgKChlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50KSAmJiAhZWxlbWVudC5tYXRjaGVzLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGRlZXBDbG9uZShpdGVtOiBhbnkpOiBhbnkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICBjb25zdCBuZXdBcnIgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSBpdGVtLmxlbmd0aDsgaS0tID4gMDsgKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgbmV3QXJyW2ldID0gSGVscGVycy5kZWVwQ2xvbmUoaXRlbVtpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3QXJyO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdmdW5jdGlvbicgJiYgIS9cXChcXCkgXFx7IFxcW25hdGl2ZS8udGVzdChpdGVtLnRvU3RyaW5nKCkpICYmICFpdGVtLnRvU3RyaW5nKCkuc3RhcnRzV2l0aCgnY2xhc3MnKSkge1xuICAgICAgbGV0IG9iajtcbiAgICAgIGZvciAoY29uc3QgayBpbiBpdGVtKSB7XG4gICAgICAgIGlmIChrIGluIGl0ZW0pIHtcbiAgICAgICAgICBvYmpba10gPSBIZWxwZXJzLmRlZXBDbG9uZShpdGVtW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYgKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgIGZvciAoY29uc3QgayBpbiBpdGVtKSB7XG4gICAgICAgIGlmIChrIGluIGl0ZW0pIHtcbiAgICAgICAgICBvYmpba10gPSBIZWxwZXJzLmRlZXBDbG9uZShpdGVtW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBzdGF0aWMgZGVlcEFzc2lnbiguLi5vYmpzKSB7XG4gICAgaWYgKG9ianMubGVuZ3RoIDwgMikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZWVkIHR3byBvciBtb3JlIG9iamVjdHMgdG8gbWVyZ2UnKTtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gT2JqZWN0LmFzc2lnbih7fSwgb2Jqc1swXSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvYmpzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzb3VyY2UgPSBPYmplY3QuYXNzaWduKHt9LCBvYmpzW2ldKTtcbiAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgaWYgKEhlbHBlcnMuaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBIZWxwZXJzLmlzT2JqZWN0KHRhcmdldFtwcm9wXSkpIHtcbiAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IEhlbHBlcnMuZGVlcEFzc2lnbih0YXJnZXRbcHJvcF0sIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBBcnJheS5pc0FycmF5KHRhcmdldFtwcm9wXSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEFycmF5ID0gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgoc291cmNlSXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpdGVtSW5kZXggPCB0YXJnZXRBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRJdGVtID0gdGFyZ2V0QXJyYXlbaXRlbUluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmlzKHRhcmdldEl0ZW0sIHNvdXJjZUl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChIZWxwZXJzLmlzT2JqZWN0KHRhcmdldEl0ZW0pICYmIEhlbHBlcnMuaXNPYmplY3Qoc291cmNlSXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5W2l0ZW1JbmRleF0gPSBIZWxwZXJzLmRlZXBBc3NpZ24odGFyZ2V0SXRlbSwgc291cmNlSXRlbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRhcmdldEl0ZW0pICYmIEFycmF5LmlzQXJyYXkoc291cmNlSXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5W2l0ZW1JbmRleF0gPSBIZWxwZXJzLmRlZXBBc3NpZ24odGFyZ2V0SXRlbSwgc291cmNlSXRlbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5W2l0ZW1JbmRleF0gPSBzb3VyY2VJdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUl0ZW0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFdvcmthcm91bmQgZm9yIEVkZ2UgYnJvd3NlciBzaW5jZSBFbGVtZW50Om5leHRFbGVtZW50U2libGluZyBpcyB1bmRlZmluZWQgaW5zaWRlIG9mIHRlbXBsYXRlIGRpcmVjdGl2ZXNcbiAgICogQHBhcmFtIGVsZW1lbnQgYW55IGRvY3VtZW50IGVsZW1lbnRcbiAgICogQHJldHVybnMgdGhlIG5leHQgc2libGluZyBub2RlIHRoYXQgaXMgb2YgdHlwZTogRWxlbWVudFxuICAgKi9cbiAgc3RhdGljIGdldE5leHRFbGVtZW50U2libGluZyhlbGVtZW50OiBFbGVtZW50KTogTm9kZSB7XG4gICAgaWYgKGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBlID0gZWxlbWVudC5uZXh0U2libGluZztcbiAgICAgIHdoaWxlIChlICYmIDEgIT09IGUubm9kZVR5cGUpIHtcbiAgICAgICAgZSA9IGUubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm4gZTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZGF0ZVRvT2JqZWN0KFxuICAgIGRhdGU6IERhdGUsXG4gICk6IHtcbiAgICBkYXk6IHN0cmluZztcbiAgICBkYXlQZXJpb2Q6IHN0cmluZztcbiAgICBlcmE6IHN0cmluZztcbiAgICBob3VyOiBzdHJpbmc7XG4gICAgbWludXRlOiBzdHJpbmc7XG4gICAgbW9udGg6IHN0cmluZztcbiAgICBzZWNvbmQ6IHN0cmluZztcbiAgICB3ZWVrZGF5OiBzdHJpbmc7XG4gICAgeWVhcjogc3RyaW5nO1xuICB9IHtcbiAgICBjb25zdCBkYXRlT2JqID0ge1xuICAgICAgZGF5OiAnJyxcbiAgICAgIGRheVBlcmlvZDogJycsXG4gICAgICBlcmE6ICcnLFxuICAgICAgaG91cjogJycsXG4gICAgICBtaW51dGU6ICcnLFxuICAgICAgbW9udGg6ICcnLFxuICAgICAgc2Vjb25kOiAnJyxcbiAgICAgIHdlZWtkYXk6ICcnLFxuICAgICAgeWVhcjogJycsXG4gICAgfTtcbiAgICBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgZXJhOiAnc2hvcnQnLFxuICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgfSlcbiAgICAgIC5mb3JtYXRUb1BhcnRzKGRhdGUpXG4gICAgICAuZm9yRWFjaCgoZGF0ZVRpbWVGb3JtYXRQYXJ0OiBJbnRsLkRhdGVUaW1lRm9ybWF0UGFydCkgPT4ge1xuICAgICAgICBpZiAoZGF0ZVRpbWVGb3JtYXRQYXJ0LnR5cGUgIT09ICdsaXRlcmFsJykge1xuICAgICAgICAgIGRhdGVPYmpbZGF0ZVRpbWVGb3JtYXRQYXJ0LnR5cGVdID0gZGF0ZVRpbWVGb3JtYXRQYXJ0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICByZXR1cm4gZGF0ZU9iajtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FuIHtcbiAgb2JqOiBPYmplY3Q7XG5cbiAgY29uc3RydWN0b3Iob2JqOiBPYmplY3QpIHtcbiAgICB0aGlzLm9iaiA9IG9iajtcbiAgfVxuXG4gIGhhdmUoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IHByb3BzID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgbGV0IGl0ZW06IGFueSA9IHRoaXMub2JqO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW0gPSBpdGVtW3Byb3BzW2ldXTtcbiAgICAgIGlmICh0aGlzLmNoZWNrKGl0ZW0pID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBjaGVjayh0aGluZzogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaW5nICE9PSB2b2lkIDA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbihvYmo6IGFueSkge1xuICByZXR1cm4gbmV3IENhbihvYmopO1xufVxuXG4vLyBBc3N1bWVzIGRhdGEgaXMgYWxyZWFkeSBzb3J0ZWRcbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlTZWFyY2g8VD4oaXRlbTogVCwgYXJyYXk6IFRbXSwgY29tcGFyZTogKGE6IFQsIGI6IFQpID0+IDEgfCAtMSB8IDAgfCB1bmRlZmluZWQpOiBUIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIHNlYXJjaCgwLCBhcnJheS5sZW5ndGggLSAxKTtcblxuICBmdW5jdGlvbiBzZWFyY2gobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKG1pbiA+IG1heCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgZ3Vlc3MgPSBtaW4gKyBNYXRoLmZsb29yKChtYXggLSBtaW4pIC8gMik7XG4gICAgY29uc3QgY29tcGFyaXNvbiA9IGNvbXBhcmUoaXRlbSwgYXJyYXlbZ3Vlc3NdKTtcblxuICAgIGlmIChjb21wYXJpc29uID09PSAwKSB7XG4gICAgICByZXR1cm4gYXJyYXlbZ3Vlc3NdO1xuICAgIH0gZWxzZSBpZiAoY29tcGFyaXNvbiA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBzZWFyY2gobWluLCBndWVzcyAtIDEpO1xuICAgIH0gZWxzZSBpZiAoY29tcGFyaXNvbiA9PT0gMSkge1xuICAgICAgcmV0dXJuIHNlYXJjaChndWVzcyArIDEsIG1heCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW5wdXQgbWlzbWF0Y2g6ICR7SlNPTi5zdHJpbmdpZnkoaXRlbSl9IG5vdCBjb21wYXJhYmxlIHRvICR7SlNPTi5zdHJpbmdpZnkoYXJyYXlbZ3Vlc3NdKX1gKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==