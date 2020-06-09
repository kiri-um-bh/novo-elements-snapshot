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
        if (typeof item === 'function' && !/\(\) \{ \[native/.test(item.toString())) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJ1dGlscy9IZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUFDWCxNQUFNLE9BQU8sT0FBTztJQUNsQjs7T0FFRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSztRQUN2QixJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUN4QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEIsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7UUFDRCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBZ0IsRUFBRSxHQUFXLEVBQUUsRUFBRTtZQUNuRSxNQUFNLElBQUksR0FBYSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNoQyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDekMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN2QixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUM7YUFDcEM7WUFDRCxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzFDLENBQUMs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LENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZHluYW1pY1xuZXhwb3J0IGNsYXNzIEhlbHBlcnMge1xuICAvKipcbiAgICogU3dhbGxvd3MgYW4gZXZlbnQgdG8gc3RvcCBmdXJ0aGVyIGV4ZWN1dGlvblxuICAgKi9cbiAgc3RhdGljIHN3YWxsb3dFdmVudChldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBpbnRlcnBvbGF0ZShzdHI6IHN0cmluZywgcHJvcHM6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuaXNEYXRlKHByb3BzKSkge1xuICAgICAgcHJvcHMgPSB0aGlzLmRhdGVUb09iamVjdChwcm9wcyk7XG4gICAgfVxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFwkKFtcXHdcXC5dKykvZywgKG9yaWdpbmFsOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBrZXlzOiBzdHJpbmdbXSA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgbGV0IHZhbHVlID0gcHJvcHNba2V5cy5zaGlmdCgpXTtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGsgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIHZhbHVlID0gayA/IHZhbHVlW2tdIDogYCR7dmFsdWV9LmA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDogJyc7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaW50ZXJwb2xhdGVXaXRoRmFsbGJhY2soZm9ybWF0U3RyaW5nOiBzdHJpbmcgfCBzdHJpbmdbXSwgZGF0YTogYW55KTogc3RyaW5nIHtcbiAgICAvLyBGb3JtYXQgc3RyaW5nIGNhbiBiZSBhbiBhcnJheSwgaXQgd2lsbCBhdHRlbXB0IHRvIGludGVycG9sYXRlIGVhY2ggaXRlbVxuICAgIC8vIGluIHRoZSBhcnJheSwgaWYgdGhlcmUgaXMgYSBmYWlsdXJlIHRvIHJlcGxhY2UgaXQgd2lsbCBtYXJrIGl0IGFzIHN1Y2hcbiAgICAvLyBJdCB3aWxsIGVpdGhlciByZXR1cm4gdGhlIGZpcnN0IHN1Y2Nlc3NmdWwgcmVwbGFjZW1lbnQgb2YgQUxMIHZhcmlhYmxlcyxcbiAgICAvLyBvciBhbiBlbXB0eSBzdHJpbmdcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmb3JtYXRTdHJpbmcpKSB7XG4gICAgICBjb25zdCBzdWNjZXNzZXM6IHN0cmluZ1tdID0gW107XG4gICAgICBjb25zdCBmYWlsdXJlczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGZvcm1hdFN0cmluZy5mb3JFYWNoKChmb3JtYXQ6IHN0cmluZykgPT4ge1xuICAgICAgICBsZXQgaXNTdWNjZXNzOiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgYXR0ZW1wdCA9IGZvcm1hdC5yZXBsYWNlKC9cXCQoW1xcd1xcLl0rKS9nLCAob3JpZ2luYWwsIGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgICAgICBsZXQgdmFsdWUgPSBkYXRhW2tleXMuc2hpZnQoKV07XG4gICAgICAgICAgd2hpbGUgKGtleXMubGVuZ3RoICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YWx1ZSA9IGsgPyB2YWx1ZVtrXSA6IGAke3ZhbHVlfS5gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNTdWNjZXNzICYmIEhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlzU3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gSGVscGVycy5pc0VtcHR5KHZhbHVlKSA/ICcnIDogdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgc3VjY2Vzc2VzLnB1c2goYXR0ZW1wdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmFpbHVyZXMucHVzaChhdHRlbXB0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoc3VjY2Vzc2VzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gc3VjY2Vzc2VzWzBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gSGVscGVycy5pbnRlcnBvbGF0ZShmb3JtYXRTdHJpbmcsIGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyB0aGF0IGFuIG9iamVjdCBoYXMgZXZlcnkgcHJvcGVydHkgZXhwZWN0ZWQgYnkgYSBzdHJpbmcgdG8gaW50ZXJwb2xhdGVcbiAgICogQHBhcmFtIHN0ciAgIFRoZSBzdHJpbmcgdG8gaW50ZXJwb2xhdGVcbiAgICogQHBhcmFtIHByb3BzIFRoZSBwYXJhbXMgdG8gcmVwbGFjZSBpbiBzdHJpbmcuXG4gICAqL1xuICBzdGF0aWMgdmFsaWRhdGVJbnRlcnBvbGF0aW9uUHJvcHMoc3RyOiBzdHJpbmcsIHByb3BzOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBrZXlzID0gc3RyLm1hdGNoKC9cXCQoW1xcd1xcLl0rKS9nKTtcbiAgICByZXR1cm4ga2V5cy5ldmVyeSgoa2V5KSA9PiB7XG4gICAgICByZXR1cm4gcHJvcHMuaGFzT3duUHJvcGVydHkoa2V5LnN1YnN0cigxKSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaXNPYmplY3QoaXRlbSkge1xuICAgIHJldHVybiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSAmJiBpdGVtICE9PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIHN0cmluZ1xuICAgKi9cbiAgc3RhdGljIGlzU3RyaW5nKG9iajogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xuICB9XG5cbiAgc3RhdGljIGVzY2FwZVN0cmluZyhvYmo6IGFueSk6IGFueSB7XG4gICAgaWYgKEhlbHBlcnMuaXNTdHJpbmcob2JqKSkge1xuICAgICAgcmV0dXJuIG9iai5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgc3RhdGljIGlzTnVtYmVyKHZhbDogYW55LCBpbmNsdWRlTmVnYXRpdmVzOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBjb25zdCBudW1iZXJSZWdleCA9IGluY2x1ZGVOZWdhdGl2ZXMgPyAvXi17MCwxfVxcZCpcXC4/XFxkKiQvIDogL15cXGQqXFwuP1xcZCokLztcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB2YWwubGVuZ3RoID4gMCAmJiB2YWwgIT09ICcuJyAmJiBudW1iZXJSZWdleC50ZXN0KHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWwpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIGEgdW5kZWZpbmVkIG9yIG51bGxcbiAgICovXG4gIHN0YXRpYyBpc0JsYW5rKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSB1bmRlZmluZWQgb3IgbnVsbFxuICAgKi9cbiAgc3RhdGljIGlzRW1wdHkob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gSGVscGVycy5pc0JsYW5rKG9iaikgfHwgb2JqID09PSAnJyB8fCAoQXJyYXkuaXNBcnJheShvYmopICYmIG9iai5sZW5ndGggPT09IDApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIGZ1bmN0aW9uXG4gICAqL1xuICBzdGF0aWMgaXNGdW5jdGlvbihvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIShvYmogJiYgb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jYWxsICYmIG9iai5hcHBseSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIGEgRGF0ZVxuICAgKi9cbiAgc3RhdGljIGlzRGF0ZShvYmo6IGFueSkge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEYXRlO1xuICB9XG5cbiAgc3RhdGljIGNvbnZlcnRUb0FycmF5KG9iajogdW5rbm93bikge1xuICAgIGlmIChvYmogPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgcmV0dXJuIFtvYmpdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgc3RhdGljIHNvcnRCeUZpZWxkKGZpZWxkczogYW55LCByZXZlcnNlID0gZmFsc2UpIHtcbiAgICByZXR1cm4gKHByZXZpb3VzOiBhbnksIGN1cnJlbnQ6IGFueSkgPT4ge1xuICAgICAgaWYgKEhlbHBlcnMuaXNGdW5jdGlvbihmaWVsZHMpKSB7XG4gICAgICAgIHJldHVybiBmaWVsZHMocmV2ZXJzZSA/ICdkZXNjJyA6ICdhc2MnLCBwcmV2aW91cywgY3VycmVudCk7XG4gICAgICB9XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZmllbGRzKSkge1xuICAgICAgICBmaWVsZHMgPSBbZmllbGRzXTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkOiBzdHJpbmcgPSBmaWVsZHNbaV07XG4gICAgICAgIGxldCBmaXJzdCA9IHByZXZpb3VzW2ZpZWxkXSB8fCAnJztcbiAgICAgICAgbGV0IHNlY29uZCA9IGN1cnJlbnRbZmllbGRdIHx8ICcnO1xuXG4gICAgICAgIGlmIChIZWxwZXJzLmlzRGF0ZShmaXJzdCkgJiYgSGVscGVycy5pc0RhdGUoc2Vjb25kKSkge1xuICAgICAgICAgIC8vIERhdGVzXG4gICAgICAgICAgZmlyc3QgPSBmaXJzdC5nZXRUaW1lKCk7XG4gICAgICAgICAgc2Vjb25kID0gc2Vjb25kLmdldFRpbWUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChIZWxwZXJzLmlzU3RyaW5nKGZpcnN0KSAmJiBIZWxwZXJzLmlzU3RyaW5nKHNlY29uZCkpIHtcbiAgICAgICAgICAvLyBCYXNpYyBzdHJpbmdzXG4gICAgICAgICAgZmlyc3QgPSBmaXJzdC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHNlY29uZCA9IHNlY29uZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE51bWJlcnNcbiAgICAgICAgICBmaXJzdCA9IGlzTmFOKE51bWJlcihmaXJzdCkpID8gZmlyc3QgOiBOdW1iZXIoZmlyc3QpO1xuICAgICAgICAgIHNlY29uZCA9IGlzTmFOKE51bWJlcihzZWNvbmQpKSA/IHNlY29uZCA6IE51bWJlcihzZWNvbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpcnN0ID4gc2Vjb25kKSB7XG4gICAgICAgICAgcmV0dXJuIHJldmVyc2UgPyAtMSA6IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoZmlyc3QgPCBzZWNvbmQpIHtcbiAgICAgICAgICByZXR1cm4gcmV2ZXJzZSA/IDEgOiAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmaWx0ZXJCeUZpZWxkKGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICAgIGxldCBmaWVsZCA9IGNhbihpdGVtKS5oYXZlKGtleSk7XG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICByZXN1bHRzLnB1c2godmFsdWUoZmllbGQsIGl0ZW0pKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlLmluY2x1ZGVzKGZpZWxkKSk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIGlmIChmaWVsZCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBmaWVsZCA9IGZpZWxkLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUubWluKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGZpZWxkID49IHZhbHVlLm1pbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLm1heCkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChmaWVsZCA8PSB2YWx1ZS5tYXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5hbnkgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZS5hbnkpKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQpKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2godmFsdWUuYW55LnNvbWUoKHYpID0+IGZpZWxkLmluY2x1ZGVzKHYpKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh2YWx1ZS5hbnkuaW5jbHVkZXMoZmllbGQpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLmFsbCAmJiBBcnJheS5pc0FycmF5KHZhbHVlLmFsbCkpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2godmFsdWUuYWxsLmV2ZXJ5KCh2KSA9PiBmaWVsZC5pbmNsdWRlcyh2KSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5ub3QpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goIUhlbHBlcnMuZmlsdGVyQnlGaWVsZChrZXksIHZhbHVlLm5vdCkoaXRlbSkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgc3Via2V5IGluIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKFsnbWluJywgJ21heCcsICdhbnknLCAnYWxsJywgJ25vdCddLmluZGV4T2Yoc3Via2V5KSA8IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnZhbHVlID0gdmFsdWVbc3Via2V5XTtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChIZWxwZXJzLmZpbHRlckJ5RmllbGQoYCR7a2V5fS4ke3N1YmtleX1gLCBzdWJ2YWx1ZSkoaXRlbSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKEpTT04uc3RyaW5naWZ5KGZpZWxkKS5tYXRjaChuZXcgUmVnRXhwKHZhbHVlLCAnZ2knKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHMuZXZlcnkoKHgpID0+IHgpO1xuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZmluZEFuY2VzdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpOiBFbGVtZW50IHtcbiAgICB3aGlsZSAoKGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQpICYmICFlbGVtZW50Lm1hdGNoZXMuY2FsbChlbGVtZW50LCBzZWxlY3RvcikpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZGVlcENsb25lKGl0ZW06IGFueSk6IGFueSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgIGNvbnN0IG5ld0FyciA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IGl0ZW0ubGVuZ3RoOyBpLS0gPiAwOyApIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICBuZXdBcnJbaV0gPSBIZWxwZXJzLmRlZXBDbG9uZShpdGVtW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdBcnI7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ2Z1bmN0aW9uJyAmJiAhL1xcKFxcKSBcXHsgXFxbbmF0aXZlLy50ZXN0KGl0ZW0udG9TdHJpbmcoKSkpIHtcbiAgICAgIGxldCBvYmo7XG4gICAgICBmb3IgKGNvbnN0IGsgaW4gaXRlbSkge1xuICAgICAgICBpZiAoayBpbiBpdGVtKSB7XG4gICAgICAgICAgb2JqW2tdID0gSGVscGVycy5kZWVwQ2xvbmUoaXRlbVtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICBmb3IgKGNvbnN0IGsgaW4gaXRlbSkge1xuICAgICAgICBpZiAoayBpbiBpdGVtKSB7XG4gICAgICAgICAgb2JqW2tdID0gSGVscGVycy5kZWVwQ2xvbmUoaXRlbVtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgc3RhdGljIGRlZXBBc3NpZ24oLi4ub2Jqcykge1xuICAgIGlmIChvYmpzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmVlZCB0d28gb3IgbW9yZSBvYmplY3RzIHRvIG1lcmdlJyk7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IE9iamVjdC5hc3NpZ24oe30sIG9ianNbMF0pO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgb2Jqcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc291cmNlID0gT2JqZWN0LmFzc2lnbih7fSwgb2Jqc1tpXSk7XG4gICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzb3VyY2VbcHJvcF07XG4gICAgICAgIGlmIChIZWxwZXJzLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgIGlmICh0YXJnZXQuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgSGVscGVycy5pc09iamVjdCh0YXJnZXRbcHJvcF0pKSB7XG4gICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSBIZWxwZXJzLmRlZXBBc3NpZ24odGFyZ2V0W3Byb3BdLCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIGlmICh0YXJnZXQuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgQXJyYXkuaXNBcnJheSh0YXJnZXRbcHJvcF0pKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRBcnJheSA9IHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKHNvdXJjZUl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXRlbUluZGV4IDwgdGFyZ2V0QXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0SXRlbSA9IHRhcmdldEFycmF5W2l0ZW1JbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5pcyh0YXJnZXRJdGVtLCBzb3VyY2VJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoSGVscGVycy5pc09iamVjdCh0YXJnZXRJdGVtKSAmJiBIZWxwZXJzLmlzT2JqZWN0KHNvdXJjZUl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRBcnJheVtpdGVtSW5kZXhdID0gSGVscGVycy5kZWVwQXNzaWduKHRhcmdldEl0ZW0sIHNvdXJjZUl0ZW0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXRJdGVtKSAmJiBBcnJheS5pc0FycmF5KHNvdXJjZUl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRBcnJheVtpdGVtSW5kZXhdID0gSGVscGVycy5kZWVwQXNzaWduKHRhcmdldEl0ZW0sIHNvdXJjZUl0ZW0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRBcnJheVtpdGVtSW5kZXhdID0gc291cmNlSXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0QXJyYXkucHVzaChzb3VyY2VJdGVtKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBXb3JrYXJvdW5kIGZvciBFZGdlIGJyb3dzZXIgc2luY2UgRWxlbWVudDpuZXh0RWxlbWVudFNpYmxpbmcgaXMgdW5kZWZpbmVkIGluc2lkZSBvZiB0ZW1wbGF0ZSBkaXJlY3RpdmVzXG4gICAqIEBwYXJhbSBlbGVtZW50IGFueSBkb2N1bWVudCBlbGVtZW50XG4gICAqIEByZXR1cm5zIHRoZSBuZXh0IHNpYmxpbmcgbm9kZSB0aGF0IGlzIG9mIHR5cGU6IEVsZW1lbnRcbiAgICovXG4gIHN0YXRpYyBnZXROZXh0RWxlbWVudFNpYmxpbmcoZWxlbWVudDogRWxlbWVudCk6IE5vZGUge1xuICAgIGlmIChlbGVtZW50Lm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZSA9IGVsZW1lbnQubmV4dFNpYmxpbmc7XG4gICAgICB3aGlsZSAoZSAmJiAxICE9PSBlLm5vZGVUeXBlKSB7XG4gICAgICAgIGUgPSBlLm5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGRhdGVUb09iamVjdChcbiAgICBkYXRlOiBEYXRlLFxuICApOiB7XG4gICAgZGF5OiBzdHJpbmc7XG4gICAgZGF5UGVyaW9kOiBzdHJpbmc7XG4gICAgZXJhOiBzdHJpbmc7XG4gICAgaG91cjogc3RyaW5nO1xuICAgIG1pbnV0ZTogc3RyaW5nO1xuICAgIG1vbnRoOiBzdHJpbmc7XG4gICAgc2Vjb25kOiBzdHJpbmc7XG4gICAgd2Vla2RheTogc3RyaW5nO1xuICAgIHllYXI6IHN0cmluZztcbiAgfSB7XG4gICAgY29uc3QgZGF0ZU9iaiA9IHtcbiAgICAgIGRheTogJycsXG4gICAgICBkYXlQZXJpb2Q6ICcnLFxuICAgICAgZXJhOiAnJyxcbiAgICAgIGhvdXI6ICcnLFxuICAgICAgbWludXRlOiAnJyxcbiAgICAgIG1vbnRoOiAnJyxcbiAgICAgIHNlY29uZDogJycsXG4gICAgICB3ZWVrZGF5OiAnJyxcbiAgICAgIHllYXI6ICcnLFxuICAgIH07XG4gICAgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgIGVyYTogJ3Nob3J0JyxcbiAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgIH0pXG4gICAgICAuZm9ybWF0VG9QYXJ0cyhkYXRlKVxuICAgICAgLmZvckVhY2goKGRhdGVUaW1lRm9ybWF0UGFydDogSW50bC5EYXRlVGltZUZvcm1hdFBhcnQpID0+IHtcbiAgICAgICAgaWYgKGRhdGVUaW1lRm9ybWF0UGFydC50eXBlICE9PSAnbGl0ZXJhbCcpIHtcbiAgICAgICAgICBkYXRlT2JqW2RhdGVUaW1lRm9ybWF0UGFydC50eXBlXSA9IGRhdGVUaW1lRm9ybWF0UGFydC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIGRhdGVPYmo7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhbiB7XG4gIG9iajogT2JqZWN0O1xuXG4gIGNvbnN0cnVjdG9yKG9iajogT2JqZWN0KSB7XG4gICAgdGhpcy5vYmogPSBvYmo7XG4gIH1cblxuICBoYXZlKGtleTogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBwcm9wcyA9IGtleS5zcGxpdCgnLicpO1xuICAgIGxldCBpdGVtOiBhbnkgPSB0aGlzLm9iajtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtID0gaXRlbVtwcm9wc1tpXV07XG4gICAgICBpZiAodGhpcy5jaGVjayhpdGVtKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgY2hlY2sodGhpbmc6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGluZyAhPT0gdm9pZCAwO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW4ob2JqOiBhbnkpIHtcbiAgcmV0dXJuIG5ldyBDYW4ob2JqKTtcbn1cblxuLy8gQXNzdW1lcyBkYXRhIGlzIGFscmVhZHkgc29ydGVkXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoPFQ+KGl0ZW06IFQsIGFycmF5OiBUW10sIGNvbXBhcmU6IChhOiBULCBiOiBUKSA9PiAxIHwgLTEgfCAwIHwgdW5kZWZpbmVkKTogVCB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBzZWFyY2goMCwgYXJyYXkubGVuZ3RoIC0gMSk7XG5cbiAgZnVuY3Rpb24gc2VhcmNoKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IFQgfCB1bmRlZmluZWQge1xuICAgIGlmIChtaW4gPiBtYXgpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IGd1ZXNzID0gbWluICsgTWF0aC5mbG9vcigobWF4IC0gbWluKSAvIDIpO1xuICAgIGNvbnN0IGNvbXBhcmlzb24gPSBjb21wYXJlKGl0ZW0sIGFycmF5W2d1ZXNzXSk7XG5cbiAgICBpZiAoY29tcGFyaXNvbiA9PT0gMCkge1xuICAgICAgcmV0dXJuIGFycmF5W2d1ZXNzXTtcbiAgICB9IGVsc2UgaWYgKGNvbXBhcmlzb24gPT09IC0xKSB7XG4gICAgICByZXR1cm4gc2VhcmNoKG1pbiwgZ3Vlc3MgLSAxKTtcbiAgICB9IGVsc2UgaWYgKGNvbXBhcmlzb24gPT09IDEpIHtcbiAgICAgIHJldHVybiBzZWFyY2goZ3Vlc3MgKyAxLCBtYXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYElucHV0IG1pc21hdGNoOiAke0pTT04uc3RyaW5naWZ5KGl0ZW0pfSBub3QgY29tcGFyYWJsZSB0byAke0pTT04uc3RyaW5naWZ5KGFycmF5W2d1ZXNzXSl9YCk7XG4gICAgfVxuICB9XG59XG4iXX0=