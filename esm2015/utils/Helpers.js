/**
 * @fileoverview added by tsickle
 * Generated from: utils/Helpers.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        if (this.isDate(props)) {
            props = this.dateToObject(props);
        }
        return str.replace(/\$([\w\.]+)/g, (/**
         * @param {?} original
         * @param {?} key
         * @return {?}
         */
        (original, key) => {
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
        }));
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
            formatString.forEach((/**
             * @param {?} format
             * @return {?}
             */
            (format) => {
                /** @type {?} */
                let isSuccess = true;
                /** @type {?} */
                let attempt = format.replace(/\$([\w\.]+)/g, (/**
                 * @param {?} original
                 * @param {?} key
                 * @return {?}
                 */
                (original, key) => {
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
                }));
                if (isSuccess) {
                    successes.push(attempt);
                }
                else {
                    failures.push(attempt);
                }
            }));
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
        return keys.every((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            return props.hasOwnProperty(key.substr(1));
        }));
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
        return (/**
         * @param {?} previous
         * @param {?} current
         * @return {?}
         */
        (previous, current) => {
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
        });
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    static filterByField(key, value) {
        return (/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
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
                        results.push(value.any.some((/**
                         * @param {?} v
                         * @return {?}
                         */
                        (v) => field.includes(v))));
                    }
                    else {
                        results.push(value.any.includes(field));
                    }
                }
                if (value.all && Array.isArray(value.all)) {
                    results.push(value.all.every((/**
                     * @param {?} v
                     * @return {?}
                     */
                    (v) => field.includes(v))));
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
            return results.every((/**
             * @param {?} x
             * @return {?}
             */
            (x) => x));
        });
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
            Object.keys(source).forEach((/**
             * @param {?} prop
             * @return {?}
             */
            (prop) => {
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
                        value.forEach((/**
                         * @param {?} sourceItem
                         * @param {?} itemIndex
                         * @return {?}
                         */
                        (sourceItem, itemIndex) => {
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
                        }));
                    }
                    else {
                        target[prop] = value;
                    }
                }
                else {
                    target[prop] = value;
                }
            }));
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
    /**
     * @param {?} date
     * @return {?}
     */
    static dateToObject(date) {
        /** @type {?} */
        let dateObj = {
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
            .forEach((/**
         * @param {?} dateTimeFormatPart
         * @return {?}
         */
        (dateTimeFormatPart) => {
            if (dateTimeFormatPart.type !== 'literal') {
                dateObj[dateTimeFormatPart.type] = dateTimeFormatPart.value;
            }
        }));
        return dateObj;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJ1dGlscy9IZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE1BQU0sT0FBTyxPQUFPOzs7Ozs7SUFLbEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLO1FBQ3ZCLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBVyxFQUFFLEtBQVU7UUFDeEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWM7Ozs7O1FBQUUsQ0FBQyxRQUFnQixFQUFFLEdBQVcsRUFBRSxFQUFFOztnQkFDL0QsSUFBSSxHQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztnQkFDL0IsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7O29CQUNyQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDcEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDO2FBQ3BDO1lBQ0QsT0FBTyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxZQUErQixFQUFFLElBQVM7UUFDdkUsMEVBQTBFO1FBQzFFLHlFQUF5RTtRQUN6RSwyRUFBMkU7UUFDM0UscUJBQXFCO1FBQ3JCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRTs7Z0JBQzNCLFNBQVMsR0FBYSxFQUFFOztnQkFDeEIsUUFBUSxHQUFhLEVBQUU7WUFDM0IsWUFBWSxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLE1BQWMsRUFBRSxFQUFFOztvQkFDbEMsU0FBUyxHQUFZLElBQUk7O29CQUN6QixPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjOzs7OztnQkFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsRUFBRTs7d0JBQ3pELElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7d0JBQ3JCLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUM5QixPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTs7NEJBQ3JDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO3dCQUNwQixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUM7cUJBQ3BDO29CQUNELElBQUksU0FBUyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ3ZDLFNBQVMsR0FBRyxLQUFLLENBQUM7cUJBQ25CO29CQUNELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQzdDLENBQUMsRUFBQztnQkFDRixJQUFJLFNBQVMsRUFBRTtvQkFDYixTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN6QjtxQkFBTTtvQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN4QjtZQUNILENBQUMsRUFBQyxDQUFDO1lBQ0gsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDckI7WUFDRCxPQUFPLEVBQUUsQ0FBQztTQUNYO2FBQU07WUFDTCxPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7Ozs7OztJQU9ELE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxHQUFXLEVBQUUsS0FBVTs7WUFDbkQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLEtBQUs7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3hCLE9BQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSTtRQUNsQixPQUFPLElBQUksSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxJQUFJLENBQUM7SUFDbkYsQ0FBQzs7Ozs7O0lBS0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFRO1FBQ3RCLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFRO1FBQzFCLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbkQ7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBUSxFQUFFLG1CQUE0QixLQUFLOztjQUNuRCxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxhQUFhO1FBQzFFLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzNCLE9BQU8sR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9EO2FBQU07WUFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7Ozs7O0lBS0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFRO1FBQ3JCLE9BQU8sR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUtELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBUTtRQUNyQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN4RixDQUFDOzs7Ozs7SUFLRCxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQVE7UUFDeEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLFdBQVcsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7SUFLRCxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQVE7UUFDcEIsT0FBTyxHQUFHLFlBQVksSUFBSSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFZO1FBQ2hDLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNyQixPQUFPLEVBQUUsQ0FBQztTQUNYO2FBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBVyxFQUFFLE9BQU8sR0FBRyxLQUFLO1FBQzdDOzs7OztRQUFPLENBQUMsUUFBYSxFQUFFLE9BQVksRUFBRSxFQUFFO1lBQ3JDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDOUIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDNUQ7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDMUIsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbkI7WUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7b0JBQ2xDLEtBQUssR0FBVyxNQUFNLENBQUMsQ0FBQyxDQUFDOztvQkFDekIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFOztvQkFDN0IsTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUVqQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDbkQsUUFBUTtvQkFDUixLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUN4QixNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUMzQjtxQkFBTSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDOUQsZ0JBQWdCO29CQUNoQixLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUM1QixNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUMvQjtxQkFBTTtvQkFDTCxVQUFVO29CQUNWLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyRCxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDMUQ7Z0JBRUQsSUFBSSxLQUFLLEdBQUcsTUFBTSxFQUFFO29CQUNsQixPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDekI7cUJBQU0sSUFBSSxLQUFLLEdBQUcsTUFBTSxFQUFFO29CQUN6QixPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDekI7YUFDRjtZQUNELE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxFQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSztRQUM3Qjs7OztRQUFPLENBQUMsSUFBSSxFQUFFLEVBQUU7O2dCQUNWLE9BQU8sR0FBRyxFQUFFOztnQkFDWixLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDL0IsSUFBSSxLQUFLLFlBQVksUUFBUSxFQUFFO2dCQUM3QixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNsQztpQkFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO2lCQUFNLElBQUksS0FBSyxZQUFZLE1BQU0sRUFBRTtnQkFDbEMsSUFBSSxLQUFLLFlBQVksSUFBSSxFQUFFO29CQUN6QixLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUN6QjtnQkFDRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUU7b0JBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNsQztnQkFDRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUU7b0JBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNsQztnQkFDRCxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3pDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUk7Ozs7d0JBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO3FCQUN4RDt5QkFBTTt3QkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7cUJBQ3pDO2lCQUNGO2dCQUNELElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDekMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUs7Ozs7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2lCQUN6RDtnQkFDRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUU7b0JBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUM1RDtnQkFDRCxLQUFLLElBQUksTUFBTSxJQUFJLEtBQUssRUFBRTtvQkFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFOzs0QkFDdkQsUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7d0JBQzVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxNQUFNLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3FCQUN6RTtpQkFDRjthQUNGO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRTtZQUNELE9BQU8sT0FBTyxDQUFDLEtBQUs7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFnQixFQUFFLFFBQWdCO1FBQ3BELE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztZQUFDLENBQUMsQ0FBQyxzQkFBc0I7UUFDN0csT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQVM7UUFDeEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFOztnQkFDbkIsTUFBTSxHQUFHLEVBQUU7WUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFJO2dCQUNuQyxzQkFBc0I7Z0JBQ3RCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hDO1lBQ0QsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUNELElBQUksT0FBTyxJQUFJLEtBQUssVUFBVSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFOztnQkFDdkUsR0FBRztZQUNQLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7WUFDeEQsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtvQkFDYixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDckM7YUFDRjtZQUNELE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFDRCxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7O2dCQUNoQyxHQUFHLEdBQUcsRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUNsQixJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQ2IsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3JDO2FBQ0Y7WUFDRCxPQUFPLEdBQUcsQ0FBQztTQUNaO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJO1FBQ3ZCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBQ3REOztjQUNLLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUM5QixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTzs7OztZQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7O3NCQUM3QixLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDMUIsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUMzQixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTt3QkFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO3FCQUN4RDt5QkFBTTt3QkFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO3FCQUN0QjtpQkFDRjtxQkFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQy9CLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFOzs4QkFDeEQsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQ2hDLEtBQUssQ0FBQyxPQUFPOzs7Ozt3QkFBQyxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsRUFBRTs0QkFDdEMsSUFBSSxTQUFTLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRTs7c0NBQzVCLFVBQVUsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO2dDQUN6QyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxFQUFFO29DQUNyQyxPQUFPO2lDQUNSO2dDQUNELElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29DQUNoRSxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7aUNBQ3JFO3FDQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO29DQUNqRSxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7aUNBQ3JFO3FDQUFNO29DQUNMLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVLENBQUM7aUNBQ3JDOzZCQUNGO2lDQUFNO2dDQUNMLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7NkJBQzlCO3dCQUNILENBQUMsRUFBQyxDQUFDO3FCQUNKO3lCQUFNO3dCQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7cUJBQ3RCO2lCQUNGO3FCQUFNO29CQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7aUJBQ3RCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQU9ELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxPQUFnQjtRQUMzQyxJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRTtZQUM5QixPQUFPLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztTQUNuQzthQUFNOztnQkFDRCxDQUFDLEdBQUcsT0FBTyxDQUFDLFdBQVc7WUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQzVCLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDO2FBQ25CO1lBQ0QsT0FBTyxDQUFDLENBQUM7U0FDVjtJQUNILENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFlBQVksQ0FDakIsSUFBVTs7WUFZTixPQUFPLEdBQUc7WUFDWixHQUFHLEVBQUUsRUFBRTtZQUNQLFNBQVMsRUFBRSxFQUFFO1lBQ2IsR0FBRyxFQUFFLEVBQUU7WUFDUCxJQUFJLEVBQUUsRUFBRTtZQUNSLE1BQU0sRUFBRSxFQUFFO1lBQ1YsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsRUFBRTtZQUNWLE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLEVBQUU7U0FDVDtRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFO1lBQzNCLEdBQUcsRUFBRSxTQUFTO1lBQ2QsR0FBRyxFQUFFLE9BQU87WUFDWixJQUFJLEVBQUUsU0FBUztZQUNmLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLE9BQU8sRUFBRSxNQUFNO1lBQ2YsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQzthQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7YUFDbkIsT0FBTzs7OztRQUFDLENBQUMsa0JBQTJDLEVBQUUsRUFBRTtZQUN2RCxJQUFJLGtCQUFrQixDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQ3pDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7YUFDN0Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxHQUFHOzs7O0lBR2QsWUFBWSxHQUFXO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLEdBQVc7O1lBQ1YsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztZQUN0QixJQUFJLEdBQVEsSUFBSSxDQUFDLEdBQUc7UUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFO2dCQUM5QixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQVU7UUFDZCxPQUFPLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBQ0Y7OztJQXJCQyxrQkFBWTs7Ozs7O0FBMEJkLE1BQU0sVUFBVSxHQUFHLENBQUMsR0FBUTtJQUMxQixPQUFPLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLENBQUM7Ozs7Ozs7OztBQUdELE1BQU0sVUFBVSxZQUFZLENBQUksSUFBTyxFQUFFLEtBQVUsRUFBRSxPQUErQztJQUNsRyxPQUFPLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBRW5DLFNBQVMsTUFBTSxDQUFDLEdBQVcsRUFBRSxHQUFXO1FBQ3RDLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUNiLE9BQU8sU0FBUyxDQUFDO1NBQ2xCOztjQUNLLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7O2NBQ3pDLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5QyxJQUFJLFVBQVUsS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckI7YUFBTSxJQUFJLFVBQVUsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM1QixPQUFPLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQy9CO2FBQU0sSUFBSSxVQUFVLEtBQUssQ0FBQyxFQUFFO1lBQzNCLE9BQU8sTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDL0I7YUFBTTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHNCQUFzQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM5RztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGR5bmFtaWNcbmV4cG9ydCBjbGFzcyBIZWxwZXJzIHtcbiAgLyoqXG4gICAqIFN3YWxsb3dzIGFuIGV2ZW50IHRvIHN0b3AgZnVydGhlciBleGVjdXRpb25cbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBzdGF0aWMgc3dhbGxvd0V2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGludGVycG9sYXRlKHN0cjogc3RyaW5nLCBwcm9wczogYW55KTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5pc0RhdGUocHJvcHMpKSB7XG4gICAgICBwcm9wcyA9IHRoaXMuZGF0ZVRvT2JqZWN0KHByb3BzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXCQoW1xcd1xcLl0rKS9nLCAob3JpZ2luYWw6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGxldCBrZXlzOiBzdHJpbmdbXSA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgbGV0IHZhbHVlID0gcHJvcHNba2V5cy5zaGlmdCgpXTtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCBrID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICB2YWx1ZSA9IGsgPyB2YWx1ZVtrXSA6IGAke3ZhbHVlfS5gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6ICcnO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGludGVycG9sYXRlV2l0aEZhbGxiYWNrKGZvcm1hdFN0cmluZzogc3RyaW5nIHwgc3RyaW5nW10sIGRhdGE6IGFueSk6IHN0cmluZyB7XG4gICAgLy8gRm9ybWF0IHN0cmluZyBjYW4gYmUgYW4gYXJyYXksIGl0IHdpbGwgYXR0ZW1wdCB0byBpbnRlcnBvbGF0ZSBlYWNoIGl0ZW1cbiAgICAvLyBpbiB0aGUgYXJyYXksIGlmIHRoZXJlIGlzIGEgZmFpbHVyZSB0byByZXBsYWNlIGl0IHdpbGwgbWFyayBpdCBhcyBzdWNoXG4gICAgLy8gSXQgd2lsbCBlaXRoZXIgcmV0dXJuIHRoZSBmaXJzdCBzdWNjZXNzZnVsIHJlcGxhY2VtZW50IG9mIEFMTCB2YXJpYWJsZXMsXG4gICAgLy8gb3IgYW4gZW1wdHkgc3RyaW5nXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZm9ybWF0U3RyaW5nKSkge1xuICAgICAgbGV0IHN1Y2Nlc3Nlczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGxldCBmYWlsdXJlczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGZvcm1hdFN0cmluZy5mb3JFYWNoKChmb3JtYXQ6IHN0cmluZykgPT4ge1xuICAgICAgICBsZXQgaXNTdWNjZXNzOiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgbGV0IGF0dGVtcHQgPSBmb3JtYXQucmVwbGFjZSgvXFwkKFtcXHdcXC5dKykvZywgKG9yaWdpbmFsLCBrZXkpID0+IHtcbiAgICAgICAgICBsZXQga2V5cyA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICAgIGxldCB2YWx1ZSA9IGRhdGFba2V5cy5zaGlmdCgpXTtcbiAgICAgICAgICB3aGlsZSAoa2V5cy5sZW5ndGggJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IGsgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YWx1ZSA9IGsgPyB2YWx1ZVtrXSA6IGAke3ZhbHVlfS5gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNTdWNjZXNzICYmIEhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlzU3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gSGVscGVycy5pc0VtcHR5KHZhbHVlKSA/ICcnIDogdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgc3VjY2Vzc2VzLnB1c2goYXR0ZW1wdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmFpbHVyZXMucHVzaChhdHRlbXB0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoc3VjY2Vzc2VzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gc3VjY2Vzc2VzWzBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gSGVscGVycy5pbnRlcnBvbGF0ZShmb3JtYXRTdHJpbmcsIGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyB0aGF0IGFuIG9iamVjdCBoYXMgZXZlcnkgcHJvcGVydHkgZXhwZWN0ZWQgYnkgYSBzdHJpbmcgdG8gaW50ZXJwb2xhdGVcbiAgICogQHBhcmFtIHN0ciAgIFRoZSBzdHJpbmcgdG8gaW50ZXJwb2xhdGVcbiAgICogQHBhcmFtIHByb3BzIFRoZSBwYXJhbXMgdG8gcmVwbGFjZSBpbiBzdHJpbmcuXG4gICAqL1xuICBzdGF0aWMgdmFsaWRhdGVJbnRlcnBvbGF0aW9uUHJvcHMoc3RyOiBzdHJpbmcsIHByb3BzOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQga2V5cyA9IHN0ci5tYXRjaCgvXFwkKFtcXHdcXC5dKykvZyk7XG4gICAgcmV0dXJuIGtleXMuZXZlcnkoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIHByb3BzLmhhc093blByb3BlcnR5KGtleS5zdWJzdHIoMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGlzT2JqZWN0KGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkgJiYgaXRlbSAhPT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSBzdHJpbmdcbiAgICovXG4gIHN0YXRpYyBpc1N0cmluZyhvYmo6IGFueSkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIHN0YXRpYyBlc2NhcGVTdHJpbmcob2JqOiBhbnkpOiBhbnkge1xuICAgIGlmIChIZWxwZXJzLmlzU3RyaW5nKG9iaikpIHtcbiAgICAgIHJldHVybiBvYmoucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHN0YXRpYyBpc051bWJlcih2YWw6IGFueSwgaW5jbHVkZU5lZ2F0aXZlczogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgY29uc3QgbnVtYmVyUmVnZXggPSBpbmNsdWRlTmVnYXRpdmVzID8gL14tezAsMX1cXGQqXFwuP1xcZCokLyA6IC9eXFxkKlxcLj9cXGQqJC87XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdmFsLmxlbmd0aCA+IDAgJiYgdmFsICE9PSAnLicgJiYgbnVtYmVyUmVnZXgudGVzdCh2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIHVuZGVmaW5lZCBvciBudWxsXG4gICAqL1xuICBzdGF0aWMgaXNCbGFuayhvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBvYmogPT09IHVuZGVmaW5lZCB8fCBvYmogPT09IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIGEgdW5kZWZpbmVkIG9yIG51bGxcbiAgICovXG4gIHN0YXRpYyBpc0VtcHR5KG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEhlbHBlcnMuaXNCbGFuayhvYmopIHx8IG9iaiA9PT0gJycgfHwgKEFycmF5LmlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09PSAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSBmdW5jdGlvblxuICAgKi9cbiAgc3RhdGljIGlzRnVuY3Rpb24ob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEob2JqICYmIG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY2FsbCAmJiBvYmouYXBwbHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIERhdGVcbiAgICovXG4gIHN0YXRpYyBpc0RhdGUob2JqOiBhbnkpIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRGF0ZTtcbiAgfVxuXG4gIHN0YXRpYyBjb252ZXJ0VG9BcnJheShvYmo6IHVua25vd24pOiBhbnlbXSB7XG4gICAgaWYgKG9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICByZXR1cm4gW29ial07XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBzdGF0aWMgc29ydEJ5RmllbGQoZmllbGRzOiBhbnksIHJldmVyc2UgPSBmYWxzZSkge1xuICAgIHJldHVybiAocHJldmlvdXM6IGFueSwgY3VycmVudDogYW55KSA9PiB7XG4gICAgICBpZiAoSGVscGVycy5pc0Z1bmN0aW9uKGZpZWxkcykpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkcyhyZXZlcnNlID8gJ2Rlc2MnIDogJ2FzYycsIHByZXZpb3VzLCBjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShmaWVsZHMpKSB7XG4gICAgICAgIGZpZWxkcyA9IFtmaWVsZHNdO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZpZWxkOiBzdHJpbmcgPSBmaWVsZHNbaV07XG4gICAgICAgIGxldCBmaXJzdCA9IHByZXZpb3VzW2ZpZWxkXSB8fCAnJztcbiAgICAgICAgbGV0IHNlY29uZCA9IGN1cnJlbnRbZmllbGRdIHx8ICcnO1xuXG4gICAgICAgIGlmIChIZWxwZXJzLmlzRGF0ZShmaXJzdCkgJiYgSGVscGVycy5pc0RhdGUoc2Vjb25kKSkge1xuICAgICAgICAgIC8vIERhdGVzXG4gICAgICAgICAgZmlyc3QgPSBmaXJzdC5nZXRUaW1lKCk7XG4gICAgICAgICAgc2Vjb25kID0gc2Vjb25kLmdldFRpbWUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChIZWxwZXJzLmlzU3RyaW5nKGZpcnN0KSAmJiBIZWxwZXJzLmlzU3RyaW5nKHNlY29uZCkpIHtcbiAgICAgICAgICAvLyBCYXNpYyBzdHJpbmdzXG4gICAgICAgICAgZmlyc3QgPSBmaXJzdC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHNlY29uZCA9IHNlY29uZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE51bWJlcnNcbiAgICAgICAgICBmaXJzdCA9IGlzTmFOKE51bWJlcihmaXJzdCkpID8gZmlyc3QgOiBOdW1iZXIoZmlyc3QpO1xuICAgICAgICAgIHNlY29uZCA9IGlzTmFOKE51bWJlcihzZWNvbmQpKSA/IHNlY29uZCA6IE51bWJlcihzZWNvbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpcnN0ID4gc2Vjb25kKSB7XG4gICAgICAgICAgcmV0dXJuIHJldmVyc2UgPyAtMSA6IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoZmlyc3QgPCBzZWNvbmQpIHtcbiAgICAgICAgICByZXR1cm4gcmV2ZXJzZSA/IDEgOiAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmaWx0ZXJCeUZpZWxkKGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gKGl0ZW0pID0+IHtcbiAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICBsZXQgZmllbGQgPSBjYW4oaXRlbSkuaGF2ZShrZXkpO1xuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlKGZpZWxkLCBpdGVtKSk7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh2YWx1ZS5pbmNsdWRlcyhmaWVsZCkpO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICBpZiAoZmllbGQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZmllbGQgPSBmaWVsZC5nZXRUaW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLm1pbikge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChmaWVsZCA+PSB2YWx1ZS5taW4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5tYXgpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goZmllbGQgPD0gdmFsdWUubWF4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUuYW55ICYmIEFycmF5LmlzQXJyYXkodmFsdWUuYW55KSkge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkKSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlLmFueS5zb21lKCh2KSA9PiBmaWVsZC5pbmNsdWRlcyh2KSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2godmFsdWUuYW55LmluY2x1ZGVzKGZpZWxkKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5hbGwgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZS5hbGwpKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlLmFsbC5ldmVyeSgodikgPT4gZmllbGQuaW5jbHVkZXModikpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUubm90KSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKCFIZWxwZXJzLmZpbHRlckJ5RmllbGQoa2V5LCB2YWx1ZS5ub3QpKGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBzdWJrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgICBpZiAoWydtaW4nLCAnbWF4JywgJ2FueScsICdhbGwnLCAnbm90J10uaW5kZXhPZihzdWJrZXkpIDwgMCkge1xuICAgICAgICAgICAgbGV0IHN1YnZhbHVlID0gdmFsdWVbc3Via2V5XTtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChIZWxwZXJzLmZpbHRlckJ5RmllbGQoYCR7a2V5fS4ke3N1YmtleX1gLCBzdWJ2YWx1ZSkoaXRlbSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKEpTT04uc3RyaW5naWZ5KGZpZWxkKS5tYXRjaChuZXcgUmVnRXhwKHZhbHVlLCAnZ2knKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHMuZXZlcnkoKHgpID0+IHgpO1xuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZmluZEFuY2VzdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpOiBFbGVtZW50IHtcbiAgICB3aGlsZSAoKGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQpICYmICFlbGVtZW50Lm1hdGNoZXMuY2FsbChlbGVtZW50LCBzZWxlY3RvcikpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZGVlcENsb25lKGl0ZW06IGFueSk6IGFueSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgIGxldCBuZXdBcnIgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSBpdGVtLmxlbmd0aDsgaS0tID4gMDsgKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgbmV3QXJyW2ldID0gSGVscGVycy5kZWVwQ2xvbmUoaXRlbVtpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3QXJyO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdmdW5jdGlvbicgJiYgIS9cXChcXCkgXFx7IFxcW25hdGl2ZS8udGVzdChpdGVtLnRvU3RyaW5nKCkpKSB7XG4gICAgICBsZXQgb2JqO1xuICAgICAgZXZhbCgnb2JqID0gJyArIGl0ZW0udG9TdHJpbmcoKSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIGZvciAobGV0IGsgaW4gaXRlbSkge1xuICAgICAgICBpZiAoayBpbiBpdGVtKSB7XG4gICAgICAgICAgb2JqW2tdID0gSGVscGVycy5kZWVwQ2xvbmUoaXRlbVtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgZm9yIChsZXQgayBpbiBpdGVtKSB7XG4gICAgICAgIGlmIChrIGluIGl0ZW0pIHtcbiAgICAgICAgICBvYmpba10gPSBIZWxwZXJzLmRlZXBDbG9uZShpdGVtW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBzdGF0aWMgZGVlcEFzc2lnbiguLi5vYmpzKSB7XG4gICAgaWYgKG9ianMubGVuZ3RoIDwgMikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZWVkIHR3byBvciBtb3JlIG9iamVjdHMgdG8gbWVyZ2UnKTtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gT2JqZWN0LmFzc2lnbih7fSwgb2Jqc1swXSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvYmpzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzb3VyY2UgPSBPYmplY3QuYXNzaWduKHt9LCBvYmpzW2ldKTtcbiAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgaWYgKEhlbHBlcnMuaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBIZWxwZXJzLmlzT2JqZWN0KHRhcmdldFtwcm9wXSkpIHtcbiAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IEhlbHBlcnMuZGVlcEFzc2lnbih0YXJnZXRbcHJvcF0sIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBBcnJheS5pc0FycmF5KHRhcmdldFtwcm9wXSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEFycmF5ID0gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgoc291cmNlSXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpdGVtSW5kZXggPCB0YXJnZXRBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRJdGVtID0gdGFyZ2V0QXJyYXlbaXRlbUluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmlzKHRhcmdldEl0ZW0sIHNvdXJjZUl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChIZWxwZXJzLmlzT2JqZWN0KHRhcmdldEl0ZW0pICYmIEhlbHBlcnMuaXNPYmplY3Qoc291cmNlSXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5W2l0ZW1JbmRleF0gPSBIZWxwZXJzLmRlZXBBc3NpZ24odGFyZ2V0SXRlbSwgc291cmNlSXRlbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRhcmdldEl0ZW0pICYmIEFycmF5LmlzQXJyYXkoc291cmNlSXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5W2l0ZW1JbmRleF0gPSBIZWxwZXJzLmRlZXBBc3NpZ24odGFyZ2V0SXRlbSwgc291cmNlSXRlbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5W2l0ZW1JbmRleF0gPSBzb3VyY2VJdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUl0ZW0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFdvcmthcm91bmQgZm9yIEVkZ2UgYnJvd3NlciBzaW5jZSBFbGVtZW50Om5leHRFbGVtZW50U2libGluZyBpcyB1bmRlZmluZWQgaW5zaWRlIG9mIHRlbXBsYXRlIGRpcmVjdGl2ZXNcbiAgICogQHBhcmFtIGVsZW1lbnQgYW55IGRvY3VtZW50IGVsZW1lbnRcbiAgICogQHJldHVybnMgdGhlIG5leHQgc2libGluZyBub2RlIHRoYXQgaXMgb2YgdHlwZTogRWxlbWVudFxuICAgKi9cbiAgc3RhdGljIGdldE5leHRFbGVtZW50U2libGluZyhlbGVtZW50OiBFbGVtZW50KTogTm9kZSB7XG4gICAgaWYgKGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBlID0gZWxlbWVudC5uZXh0U2libGluZztcbiAgICAgIHdoaWxlIChlICYmIDEgIT09IGUubm9kZVR5cGUpIHtcbiAgICAgICAgZSA9IGUubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm4gZTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZGF0ZVRvT2JqZWN0KFxuICAgIGRhdGU6IERhdGUsXG4gICk6IHtcbiAgICBkYXk6IHN0cmluZztcbiAgICBkYXlQZXJpb2Q6IHN0cmluZztcbiAgICBlcmE6IHN0cmluZztcbiAgICBob3VyOiBzdHJpbmc7XG4gICAgbWludXRlOiBzdHJpbmc7XG4gICAgbW9udGg6IHN0cmluZztcbiAgICBzZWNvbmQ6IHN0cmluZztcbiAgICB3ZWVrZGF5OiBzdHJpbmc7XG4gICAgeWVhcjogc3RyaW5nO1xuICB9IHtcbiAgICBsZXQgZGF0ZU9iaiA9IHtcbiAgICAgIGRheTogJycsXG4gICAgICBkYXlQZXJpb2Q6ICcnLFxuICAgICAgZXJhOiAnJyxcbiAgICAgIGhvdXI6ICcnLFxuICAgICAgbWludXRlOiAnJyxcbiAgICAgIG1vbnRoOiAnJyxcbiAgICAgIHNlY29uZDogJycsXG4gICAgICB3ZWVrZGF5OiAnJyxcbiAgICAgIHllYXI6ICcnLFxuICAgIH07XG4gICAgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgIGVyYTogJ3Nob3J0JyxcbiAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgIH0pXG4gICAgICAuZm9ybWF0VG9QYXJ0cyhkYXRlKVxuICAgICAgLmZvckVhY2goKGRhdGVUaW1lRm9ybWF0UGFydDogSW50bC5EYXRlVGltZUZvcm1hdFBhcnQpID0+IHtcbiAgICAgICAgaWYgKGRhdGVUaW1lRm9ybWF0UGFydC50eXBlICE9PSAnbGl0ZXJhbCcpIHtcbiAgICAgICAgICBkYXRlT2JqW2RhdGVUaW1lRm9ybWF0UGFydC50eXBlXSA9IGRhdGVUaW1lRm9ybWF0UGFydC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIGRhdGVPYmo7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhbiB7XG4gIG9iajogT2JqZWN0O1xuXG4gIGNvbnN0cnVjdG9yKG9iajogT2JqZWN0KSB7XG4gICAgdGhpcy5vYmogPSBvYmo7XG4gIH1cblxuICBoYXZlKGtleTogc3RyaW5nKTogYW55IHtcbiAgICBsZXQgcHJvcHMgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICBsZXQgaXRlbTogYW55ID0gdGhpcy5vYmo7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgaXRlbSA9IGl0ZW1bcHJvcHNbaV1dO1xuICAgICAgaWYgKHRoaXMuY2hlY2soaXRlbSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIGNoZWNrKHRoaW5nOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpbmcgIT09IHZvaWQgMDtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSBvYmpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbihvYmo6IGFueSkge1xuICByZXR1cm4gbmV3IENhbihvYmopO1xufVxuXG4vLyBBc3N1bWVzIGRhdGEgaXMgYWxyZWFkeSBzb3J0ZWRcbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlTZWFyY2g8VD4oaXRlbTogVCwgYXJyYXk6IFRbXSwgY29tcGFyZTogKGE6IFQsIGI6IFQpID0+IDEgfCAtMSB8IDAgfCB1bmRlZmluZWQpOiBUIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIHNlYXJjaCgwLCBhcnJheS5sZW5ndGggLSAxKTtcblxuICBmdW5jdGlvbiBzZWFyY2gobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKG1pbiA+IG1heCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgZ3Vlc3MgPSBtaW4gKyBNYXRoLmZsb29yKChtYXggLSBtaW4pIC8gMik7XG4gICAgY29uc3QgY29tcGFyaXNvbiA9IGNvbXBhcmUoaXRlbSwgYXJyYXlbZ3Vlc3NdKTtcblxuICAgIGlmIChjb21wYXJpc29uID09PSAwKSB7XG4gICAgICByZXR1cm4gYXJyYXlbZ3Vlc3NdO1xuICAgIH0gZWxzZSBpZiAoY29tcGFyaXNvbiA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBzZWFyY2gobWluLCBndWVzcyAtIDEpO1xuICAgIH0gZWxzZSBpZiAoY29tcGFyaXNvbiA9PT0gMSkge1xuICAgICAgcmV0dXJuIHNlYXJjaChndWVzcyArIDEsIG1heCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW5wdXQgbWlzbWF0Y2g6ICR7SlNPTi5zdHJpbmdpZnkoaXRlbSl9IG5vdCBjb21wYXJhYmxlIHRvICR7SlNPTi5zdHJpbmdpZnkoYXJyYXlbZ3Vlc3NdKX1gKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==