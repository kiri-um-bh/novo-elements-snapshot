/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
export class Helpers {
    /**
     * Swallows an event to stop further execution
     * @param {?} event
     * @return {?}
     */
    static swallowEvent(event) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
    }
    /**
     * @param {?} str
     * @param {?} props
     * @return {?}
     */
    static interpolate(str, props) {
        return str.replace(/\$([\w\.]+)/g, (original, key) => {
            /** @type {?} */
            let keys = key.split('.');
            /** @type {?} */
            let value = props[keys.shift()];
            while (keys.length && value !== undefined) {
                /** @type {?} */
                let k = keys.shift();
                value = k ? value[k] : `${value}.`;
            }
            return value !== undefined ? value : '';
        });
    }
    /**
     * @param {?} formatString
     * @param {?} data
     * @return {?}
     */
    static interpolateWithFallback(formatString, data) {
        // Format string can be an array, it will attempt to interpolate each item
        // in the array, if there is a failure to replace it will mark it as such
        // It will either return the first successful replacement of ALL variables,
        // or an empty string
        if (Array.isArray(formatString)) {
            /** @type {?} */
            let successes = [];
            /** @type {?} */
            let failures = [];
            formatString.forEach((format) => {
                /** @type {?} */
                let isSuccess = true;
                /** @type {?} */
                let attempt = format.replace(/\$([\w\.]+)/g, (original, key) => {
                    /** @type {?} */
                    let keys = key.split('.');
                    /** @type {?} */
                    let value = data[keys.shift()];
                    while (keys.length && value !== undefined) {
                        /** @type {?} */
                        let k = keys.shift();
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
     * @param {?} str   The string to interpolate
     * @param {?} props The params to replace in string.
     * @return {?}
     */
    static validateInterpolationProps(str, props) {
        /** @type {?} */
        let keys = str.match(/\$([\w\.]+)/g);
        return keys.every((key) => {
            return props.hasOwnProperty(key.substr(1));
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    static isObject(item) {
        return item && typeof item === 'object' && !Array.isArray(item) && item !== null;
    }
    /**
     * Checks to see if the object is a string
     * @param {?} obj
     * @return {?}
     */
    static isString(obj) {
        return typeof obj === 'string';
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    static escapeString(obj) {
        if (Helpers.isString(obj)) {
            return obj.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
        return obj;
    }
    /**
     * @param {?} val
     * @param {?=} includeNegatives
     * @return {?}
     */
    static isNumber(val, includeNegatives = false) {
        /** @type {?} */
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
     * @param {?} obj
     * @return {?}
     */
    static isBlank(obj) {
        return obj === undefined || obj === null;
    }
    /**
     * Checks to see if the object is a undefined or null
     * @param {?} obj
     * @return {?}
     */
    static isEmpty(obj) {
        return Helpers.isBlank(obj) || obj === '' || (Array.isArray(obj) && obj.length === 0);
    }
    /**
     * Checks to see if the object is a function
     * @param {?} obj
     * @return {?}
     */
    static isFunction(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    }
    /**
     * Checks to see if the object is a Date
     * @param {?} obj
     * @return {?}
     */
    static isDate(obj) {
        return obj instanceof Date;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    static convertToArray(obj) {
        if (obj === undefined) {
            return [];
        }
        else if (!Array.isArray(obj)) {
            return [obj];
        }
        return obj;
    }
    /**
     * @param {?} fields
     * @param {?=} reverse
     * @return {?}
     */
    static sortByField(fields, reverse = false) {
        return (previous, current) => {
            if (Helpers.isFunction(fields)) {
                return fields(reverse ? 'desc' : 'asc', previous, current);
            }
            if (!Array.isArray(fields)) {
                fields = [fields];
            }
            for (let i = 0; i < fields.length; i++) {
                /** @type {?} */
                let field = fields[i];
                /** @type {?} */
                let first = previous[field] || '';
                /** @type {?} */
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
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    static filterByField(key, value) {
        return (item) => {
            /** @type {?} */
            let results = [];
            /** @type {?} */
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
                for (let subkey in value) {
                    if (['min', 'max', 'any', 'all', 'not'].indexOf(subkey) < 0) {
                        /** @type {?} */
                        let subvalue = value[subkey];
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
    /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    static findAncestor(element, selector) {
        while ((element = element.parentElement) && !element.matches.call(element, selector))
            ; // tslint:disable-line
        return element;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    static deepClone(item) {
        if (Array.isArray(item)) {
            /** @type {?} */
            let newArr = [];
            for (let i = item.length; i-- > 0;) {
                // tslint:disable-line
                newArr[i] = Helpers.deepClone(item[i]);
            }
            return newArr;
        }
        if (typeof item === 'function' && !/\(\) \{ \[native/.test(item.toString())) {
            /** @type {?} */
            let obj;
            eval('obj = ' + item.toString()); // tslint:disable-line
            for (let k in item) {
                if (k in item) {
                    obj[k] = Helpers.deepClone(item[k]);
                }
            }
            return obj;
        }
        if (item && typeof item === 'object') {
            /** @type {?} */
            let obj = {};
            for (let k in item) {
                if (k in item) {
                    obj[k] = Helpers.deepClone(item[k]);
                }
            }
            return obj;
        }
        return item;
    }
    /**
     * @param {...?} objs
     * @return {?}
     */
    static deepAssign(...objs) {
        if (objs.length < 2) {
            throw new Error('Need two or more objects to merge');
        }
        /** @type {?} */
        const target = Object.assign({}, objs[0]);
        for (let i = 1; i < objs.length; i++) {
            /** @type {?} */
            const source = Object.assign({}, objs[i]);
            Object.keys(source).forEach((prop) => {
                /** @type {?} */
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
                        /** @type {?} */
                        const targetArray = target[prop];
                        value.forEach((sourceItem, itemIndex) => {
                            if (itemIndex < targetArray.length) {
                                /** @type {?} */
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
     * @param {?} element any document element
     * @return {?} the next sibling node that is of type: Element
     */
    static getNextElementSibling(element) {
        if (element.nextElementSibling) {
            return element.nextElementSibling;
        }
        else {
            /** @type {?} */
            let e = element.nextSibling;
            while (e && 1 !== e.nodeType) {
                e = e.nextSibling;
            }
            return e;
        }
    }
}
export class Can {
    /**
     * @param {?} obj
     */
    constructor(obj) {
        this.obj = obj;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    have(key) {
        /** @type {?} */
        let props = key.split('.');
        /** @type {?} */
        let item = this.obj;
        for (let i = 0; i < props.length; i++) {
            item = item[props[i]];
            if (this.check(item) === false) {
                return item;
            }
        }
        return item;
    }
    /**
     * @param {?} thing
     * @return {?}
     */
    check(thing) {
        return thing !== void 0;
    }
}
if (false) {
    /** @type {?} */
    Can.prototype.obj;
}
/**
 * @param {?} obj
 * @return {?}
 */
export function can(obj) {
    return new Can(obj);
}
// Assumes data is already sorted
/**
 * @template T
 * @param {?} item
 * @param {?} array
 * @param {?} compare
 * @return {?}
 */
export function binarySearch(item, array, compare) {
    return search(0, array.length - 1);
    /**
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    function search(min, max) {
        if (min > max) {
            return undefined;
        }
        /** @type {?} */
        const guess = min + Math.floor((max - min) / 2);
        /** @type {?} */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJ1dGlscy9IZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsTUFBTSxPQUFPLE9BQU87Ozs7OztJQUtsQixNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUs7UUFDdkIsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUN4QyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFOztnQkFDL0MsSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztnQkFDckIsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7O29CQUNyQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDcEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDO2FBQ3BDO1lBQ0QsT0FBTyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxZQUErQixFQUFFLElBQVM7UUFDdkUsMEVBQTBFO1FBQzFFLHlFQUF5RTtRQUN6RSwyRUFBMkU7UUFDM0UscUJBQXFCO1FBQ3JCLElBQUksS0FB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e1xuICAvKipcbiAgICogU3dhbGxvd3MgYW4gZXZlbnQgdG8gc3RvcCBmdXJ0aGVyIGV4ZWN1dGlvblxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIHN0YXRpYyBzd2FsbG93RXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaW50ZXJwb2xhdGUoc3RyOiBzdHJpbmcsIHByb3BzOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFwkKFtcXHdcXC5dKykvZywgKG9yaWdpbmFsLCBrZXkpID0+IHtcbiAgICAgIGxldCBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgICBsZXQgdmFsdWUgPSBwcm9wc1trZXlzLnNoaWZ0KCldO1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGV0IGsgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIHZhbHVlID0gayA/IHZhbHVlW2tdIDogYCR7dmFsdWV9LmA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDogJyc7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaW50ZXJwb2xhdGVXaXRoRmFsbGJhY2soZm9ybWF0U3RyaW5nOiBzdHJpbmcgfCBzdHJpbmdbXSwgZGF0YTogYW55KTogc3RyaW5nIHtcbiAgICAvLyBGb3JtYXQgc3RyaW5nIGNhbiBiZSBhbiBhcnJheSwgaXQgd2lsbCBhdHRlbXB0IHRvIGludGVycG9sYXRlIGVhY2ggaXRlbVxuICAgIC8vIGluIHRoZSBhcnJheSwgaWYgdGhlcmUgaXMgYSBmYWlsdXJlIHRvIHJlcGxhY2UgaXQgd2lsbCBtYXJrIGl0IGFzIHN1Y2hcbiAgICAvLyBJdCB3aWxsIGVpdGhlciByZXR1cm4gdGhlIGZpcnN0IHN1Y2Nlc3NmdWwgcmVwbGFjZW1lbnQgb2YgQUxMIHZhcmlhYmxlcyxcbiAgICAvLyBvciBhbiBlbXB0eSBzdHJpbmdcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmb3JtYXRTdHJpbmcpKSB7XG4gICAgICBsZXQgc3VjY2Vzc2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgbGV0IGZhaWx1cmVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgZm9ybWF0U3RyaW5nLmZvckVhY2goKGZvcm1hdDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGxldCBpc1N1Y2Nlc3M6IGJvb2xlYW4gPSB0cnVlO1xuICAgICAgICBsZXQgYXR0ZW1wdCA9IGZvcm1hdC5yZXBsYWNlKC9cXCQoW1xcd1xcLl0rKS9nLCAob3JpZ2luYWwsIGtleSkgPT4ge1xuICAgICAgICAgIGxldCBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgICAgICAgbGV0IHZhbHVlID0gZGF0YVtrZXlzLnNoaWZ0KCldO1xuICAgICAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgayA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhbHVlID0gayA/IHZhbHVlW2tdIDogYCR7dmFsdWV9LmA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc1N1Y2Nlc3MgJiYgSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgaXNTdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBIZWxwZXJzLmlzRW1wdHkodmFsdWUpID8gJycgOiB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc1N1Y2Nlc3MpIHtcbiAgICAgICAgICBzdWNjZXNzZXMucHVzaChhdHRlbXB0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWlsdXJlcy5wdXNoKGF0dGVtcHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChzdWNjZXNzZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBzdWNjZXNzZXNbMF07XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBIZWxwZXJzLmludGVycG9sYXRlKGZvcm1hdFN0cmluZywgZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIHRoYXQgYW4gb2JqZWN0IGhhcyBldmVyeSBwcm9wZXJ0eSBleHBlY3RlZCBieSBhIHN0cmluZyB0byBpbnRlcnBvbGF0ZVxuICAgKiBAcGFyYW0gc3RyICAgVGhlIHN0cmluZyB0byBpbnRlcnBvbGF0ZVxuICAgKiBAcGFyYW0gcHJvcHMgVGhlIHBhcmFtcyB0byByZXBsYWNlIGluIHN0cmluZy5cbiAgICovXG4gIHN0YXRpYyB2YWxpZGF0ZUludGVycG9sYXRpb25Qcm9wcyhzdHI6IHN0cmluZywgcHJvcHM6IGFueSk6IGJvb2xlYW4ge1xuICAgIGxldCBrZXlzID0gc3RyLm1hdGNoKC9cXCQoW1xcd1xcLl0rKS9nKTtcbiAgICByZXR1cm4ga2V5cy5ldmVyeSgoa2V5KSA9PiB7XG4gICAgICByZXR1cm4gcHJvcHMuaGFzT3duUHJvcGVydHkoa2V5LnN1YnN0cigxKSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaXNPYmplY3QoaXRlbSkge1xuICAgIHJldHVybiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSAmJiBpdGVtICE9PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIHN0cmluZ1xuICAgKi9cbiAgc3RhdGljIGlzU3RyaW5nKG9iajogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xuICB9XG5cbiAgc3RhdGljIGVzY2FwZVN0cmluZyhvYmo6IGFueSk6IGFueSB7XG4gICAgaWYgKEhlbHBlcnMuaXNTdHJpbmcob2JqKSkge1xuICAgICAgcmV0dXJuIG9iai5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgc3RhdGljIGlzTnVtYmVyKHZhbDogYW55LCBpbmNsdWRlTmVnYXRpdmVzOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBjb25zdCBudW1iZXJSZWdleCA9IGluY2x1ZGVOZWdhdGl2ZXMgPyAvXi17MCwxfVxcZCpcXC4/XFxkKiQvIDogL15cXGQqXFwuP1xcZCokLztcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB2YWwubGVuZ3RoID4gMCAmJiB2YWwgIT09ICcuJyAmJiBudW1iZXJSZWdleC50ZXN0KHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWwpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIGEgdW5kZWZpbmVkIG9yIG51bGxcbiAgICovXG4gIHN0YXRpYyBpc0JsYW5rKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSB1bmRlZmluZWQgb3IgbnVsbFxuICAgKi9cbiAgc3RhdGljIGlzRW1wdHkob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gSGVscGVycy5pc0JsYW5rKG9iaikgfHwgb2JqID09PSAnJyB8fCAoQXJyYXkuaXNBcnJheShvYmopICYmIG9iai5sZW5ndGggPT09IDApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIGZ1bmN0aW9uXG4gICAqL1xuICBzdGF0aWMgaXNGdW5jdGlvbihvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIShvYmogJiYgb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jYWxsICYmIG9iai5hcHBseSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIGEgRGF0ZVxuICAgKi9cbiAgc3RhdGljIGlzRGF0ZShvYmo6IGFueSkge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEYXRlO1xuICB9XG5cbiAgc3RhdGljIGNvbnZlcnRUb0FycmF5KG9iajogdW5rbm93bik6IGFueVtdIHtcbiAgICBpZiAob2JqID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIHJldHVybiBbb2JqXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHN0YXRpYyBzb3J0QnlGaWVsZChmaWVsZHM6IGFueSwgcmV2ZXJzZSA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIChwcmV2aW91czogYW55LCBjdXJyZW50OiBhbnkpID0+IHtcbiAgICAgIGlmIChIZWxwZXJzLmlzRnVuY3Rpb24oZmllbGRzKSkge1xuICAgICAgICByZXR1cm4gZmllbGRzKHJldmVyc2UgPyAnZGVzYycgOiAnYXNjJywgcHJldmlvdXMsIGN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGZpZWxkcykpIHtcbiAgICAgICAgZmllbGRzID0gW2ZpZWxkc107XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZmllbGQ6IHN0cmluZyA9IGZpZWxkc1tpXTtcbiAgICAgICAgbGV0IGZpcnN0ID0gcHJldmlvdXNbZmllbGRdIHx8ICcnO1xuICAgICAgICBsZXQgc2Vjb25kID0gY3VycmVudFtmaWVsZF0gfHwgJyc7XG5cbiAgICAgICAgaWYgKEhlbHBlcnMuaXNEYXRlKGZpcnN0KSAmJiBIZWxwZXJzLmlzRGF0ZShzZWNvbmQpKSB7XG4gICAgICAgICAgLy8gRGF0ZXNcbiAgICAgICAgICBmaXJzdCA9IGZpcnN0LmdldFRpbWUoKTtcbiAgICAgICAgICBzZWNvbmQgPSBzZWNvbmQuZ2V0VGltZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKEhlbHBlcnMuaXNTdHJpbmcoZmlyc3QpICYmIEhlbHBlcnMuaXNTdHJpbmcoc2Vjb25kKSkge1xuICAgICAgICAgIC8vIEJhc2ljIHN0cmluZ3NcbiAgICAgICAgICBmaXJzdCA9IGZpcnN0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgc2Vjb25kID0gc2Vjb25kLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTnVtYmVyc1xuICAgICAgICAgIGZpcnN0ID0gaXNOYU4oTnVtYmVyKGZpcnN0KSkgPyBmaXJzdCA6IE51bWJlcihmaXJzdCk7XG4gICAgICAgICAgc2Vjb25kID0gaXNOYU4oTnVtYmVyKHNlY29uZCkpID8gc2Vjb25kIDogTnVtYmVyKHNlY29uZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmlyc3QgPiBzZWNvbmQpIHtcbiAgICAgICAgICByZXR1cm4gcmV2ZXJzZSA/IC0xIDogMTtcbiAgICAgICAgfSBlbHNlIGlmIChmaXJzdCA8IHNlY29uZCkge1xuICAgICAgICAgIHJldHVybiByZXZlcnNlID8gMSA6IC0xO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZpbHRlckJ5RmllbGQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiAoaXRlbSkgPT4ge1xuICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICAgIGxldCBmaWVsZCA9IGNhbihpdGVtKS5oYXZlKGtleSk7XG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICByZXN1bHRzLnB1c2godmFsdWUoZmllbGQsIGl0ZW0pKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlLmluY2x1ZGVzKGZpZWxkKSk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIGlmIChmaWVsZCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBmaWVsZCA9IGZpZWxkLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUubWluKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGZpZWxkID49IHZhbHVlLm1pbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLm1heCkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChmaWVsZCA8PSB2YWx1ZS5tYXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5hbnkgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZS5hbnkpKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQpKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2godmFsdWUuYW55LnNvbWUoKHYpID0+IGZpZWxkLmluY2x1ZGVzKHYpKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh2YWx1ZS5hbnkuaW5jbHVkZXMoZmllbGQpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLmFsbCAmJiBBcnJheS5pc0FycmF5KHZhbHVlLmFsbCkpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2godmFsdWUuYWxsLmV2ZXJ5KCh2KSA9PiBmaWVsZC5pbmNsdWRlcyh2KSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5ub3QpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goIUhlbHBlcnMuZmlsdGVyQnlGaWVsZChrZXksIHZhbHVlLm5vdCkoaXRlbSkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHN1YmtleSBpbiB2YWx1ZSkge1xuICAgICAgICAgIGlmIChbJ21pbicsICdtYXgnLCAnYW55JywgJ2FsbCcsICdub3QnXS5pbmRleE9mKHN1YmtleSkgPCAwKSB7XG4gICAgICAgICAgICBsZXQgc3VidmFsdWUgPSB2YWx1ZVtzdWJrZXldO1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKEhlbHBlcnMuZmlsdGVyQnlGaWVsZChgJHtrZXl9LiR7c3Via2V5fWAsIHN1YnZhbHVlKShpdGVtKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzLnB1c2goSlNPTi5zdHJpbmdpZnkoZmllbGQpLm1hdGNoKG5ldyBSZWdFeHAodmFsdWUsICdnaScpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cy5ldmVyeSgoeCkgPT4geCk7XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kQW5jZXN0b3IoZWxlbWVudDogRWxlbWVudCwgc2VsZWN0b3I6IHN0cmluZyk6IEVsZW1lbnQge1xuICAgIHdoaWxlICgoZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudCkgJiYgIWVsZW1lbnQubWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBkZWVwQ2xvbmUoaXRlbTogYW55KTogYW55IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgbGV0IG5ld0FyciA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IGl0ZW0ubGVuZ3RoOyBpLS0gPiAwOyApIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICBuZXdBcnJbaV0gPSBIZWxwZXJzLmRlZXBDbG9uZShpdGVtW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdBcnI7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ2Z1bmN0aW9uJyAmJiAhL1xcKFxcKSBcXHsgXFxbbmF0aXZlLy50ZXN0KGl0ZW0udG9TdHJpbmcoKSkpIHtcbiAgICAgIGxldCBvYmo7XG4gICAgICBldmFsKCdvYmogPSAnICsgaXRlbS50b1N0cmluZygpKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgZm9yIChsZXQgayBpbiBpdGVtKSB7XG4gICAgICAgIGlmIChrIGluIGl0ZW0pIHtcbiAgICAgICAgICBvYmpba10gPSBIZWxwZXJzLmRlZXBDbG9uZShpdGVtW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYgKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICBsZXQgb2JqID0ge307XG4gICAgICBmb3IgKGxldCBrIGluIGl0ZW0pIHtcbiAgICAgICAgaWYgKGsgaW4gaXRlbSkge1xuICAgICAgICAgIG9ialtrXSA9IEhlbHBlcnMuZGVlcENsb25lKGl0ZW1ba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIHN0YXRpYyBkZWVwQXNzaWduKC4uLm9ianMpIHtcbiAgICBpZiAob2Jqcy5sZW5ndGggPCAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05lZWQgdHdvIG9yIG1vcmUgb2JqZWN0cyB0byBtZXJnZScpO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBPYmplY3QuYXNzaWduKHt9LCBvYmpzWzBdKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG9ianMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHNvdXJjZSA9IE9iamVjdC5hc3NpZ24oe30sIG9ianNbaV0pO1xuICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gc291cmNlW3Byb3BdO1xuICAgICAgICBpZiAoSGVscGVycy5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0Lmhhc093blByb3BlcnR5KHByb3ApICYmIEhlbHBlcnMuaXNPYmplY3QodGFyZ2V0W3Byb3BdKSkge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gSGVscGVycy5kZWVwQXNzaWduKHRhcmdldFtwcm9wXSwgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0Lmhhc093blByb3BlcnR5KHByb3ApICYmIEFycmF5LmlzQXJyYXkodGFyZ2V0W3Byb3BdKSkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0QXJyYXkgPSB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKChzb3VyY2VJdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW1JbmRleCA8IHRhcmdldEFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0YXJnZXRBcnJheVtpdGVtSW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QuaXModGFyZ2V0SXRlbSwgc291cmNlSXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKEhlbHBlcnMuaXNPYmplY3QodGFyZ2V0SXRlbSkgJiYgSGVscGVycy5pc09iamVjdChzb3VyY2VJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0QXJyYXlbaXRlbUluZGV4XSA9IEhlbHBlcnMuZGVlcEFzc2lnbih0YXJnZXRJdGVtLCBzb3VyY2VJdGVtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0SXRlbSkgJiYgQXJyYXkuaXNBcnJheShzb3VyY2VJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0QXJyYXlbaXRlbUluZGV4XSA9IEhlbHBlcnMuZGVlcEFzc2lnbih0YXJnZXRJdGVtLCBzb3VyY2VJdGVtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0QXJyYXlbaXRlbUluZGV4XSA9IHNvdXJjZUl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldEFycmF5LnB1c2goc291cmNlSXRlbSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogV29ya2Fyb3VuZCBmb3IgRWRnZSBicm93c2VyIHNpbmNlIEVsZW1lbnQ6bmV4dEVsZW1lbnRTaWJsaW5nIGlzIHVuZGVmaW5lZCBpbnNpZGUgb2YgdGVtcGxhdGUgZGlyZWN0aXZlc1xuICAgKiBAcGFyYW0gZWxlbWVudCBhbnkgZG9jdW1lbnQgZWxlbWVudFxuICAgKiBAcmV0dXJucyB0aGUgbmV4dCBzaWJsaW5nIG5vZGUgdGhhdCBpcyBvZiB0eXBlOiBFbGVtZW50XG4gICAqL1xuICBzdGF0aWMgZ2V0TmV4dEVsZW1lbnRTaWJsaW5nKGVsZW1lbnQ6IEVsZW1lbnQpOiBOb2RlIHtcbiAgICBpZiAoZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgIHJldHVybiBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGUgPSBlbGVtZW50Lm5leHRTaWJsaW5nO1xuICAgICAgd2hpbGUgKGUgJiYgMSAhPT0gZS5ub2RlVHlwZSkge1xuICAgICAgICBlID0gZS5uZXh0U2libGluZztcbiAgICAgIH1cbiAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FuIHtcbiAgb2JqOiBPYmplY3Q7XG5cbiAgY29uc3RydWN0b3Iob2JqOiBPYmplY3QpIHtcbiAgICB0aGlzLm9iaiA9IG9iajtcbiAgfVxuXG4gIGhhdmUoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIGxldCBwcm9wcyA9IGtleS5zcGxpdCgnLicpO1xuICAgIGxldCBpdGVtOiBhbnkgPSB0aGlzLm9iajtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtID0gaXRlbVtwcm9wc1tpXV07XG4gICAgICBpZiAodGhpcy5jaGVjayhpdGVtKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgY2hlY2sodGhpbmc6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGluZyAhPT0gdm9pZCAwO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIG9ialxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FuKG9iajogYW55KSB7XG4gIHJldHVybiBuZXcgQ2FuKG9iaik7XG59XG5cbi8vIEFzc3VtZXMgZGF0YSBpcyBhbHJlYWR5IHNvcnRlZFxuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeVNlYXJjaDxUPihpdGVtOiBULCBhcnJheTogVFtdLCBjb21wYXJlOiAoYTogVCwgYjogVCkgPT4gMSB8IC0xIHwgMCB8IHVuZGVmaW5lZCk6IFQgfCB1bmRlZmluZWQge1xuICByZXR1cm4gc2VhcmNoKDAsIGFycmF5Lmxlbmd0aCAtIDEpO1xuXG4gIGZ1bmN0aW9uIHNlYXJjaChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBUIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAobWluID4gbWF4KSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBndWVzcyA9IG1pbiArIE1hdGguZmxvb3IoKG1heCAtIG1pbikgLyAyKTtcbiAgICBjb25zdCBjb21wYXJpc29uID0gY29tcGFyZShpdGVtLCBhcnJheVtndWVzc10pO1xuXG4gICAgaWYgKGNvbXBhcmlzb24gPT09IDApIHtcbiAgICAgIHJldHVybiBhcnJheVtndWVzc107XG4gICAgfSBlbHNlIGlmIChjb21wYXJpc29uID09PSAtMSkge1xuICAgICAgcmV0dXJuIHNlYXJjaChtaW4sIGd1ZXNzIC0gMSk7XG4gICAgfSBlbHNlIGlmIChjb21wYXJpc29uID09PSAxKSB7XG4gICAgICByZXR1cm4gc2VhcmNoKGd1ZXNzICsgMSwgbWF4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnB1dCBtaXNtYXRjaDogJHtKU09OLnN0cmluZ2lmeShpdGVtKX0gbm90IGNvbXBhcmFibGUgdG8gJHtKU09OLnN0cmluZ2lmeShhcnJheVtndWVzc10pfWApO1xuICAgIH1cbiAgfVxufVxuIl19