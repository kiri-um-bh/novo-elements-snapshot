/**
 * @fileoverview added by tsickle
 * Generated from: utils/Helpers.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
var 
// @dynamic
Helpers = /** @class */ (function () {
    function Helpers() {
    }
    /**
     * Swallows an event to stop further execution
     * @param event
     */
    /**
     * Swallows an event to stop further execution
     * @param {?} event
     * @return {?}
     */
    Helpers.swallowEvent = /**
     * Swallows an event to stop further execution
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
    };
    /**
     * @param {?} str
     * @param {?} props
     * @return {?}
     */
    Helpers.interpolate = /**
     * @param {?} str
     * @param {?} props
     * @return {?}
     */
    function (str, props) {
        if (this.isDate(props)) {
            props = this.dateToObject(props);
        }
        return str.replace(/\$([\w\.]+)/g, (/**
         * @param {?} original
         * @param {?} key
         * @return {?}
         */
        function (original, key) {
            /** @type {?} */
            var keys = key.split('.');
            /** @type {?} */
            var value = props[keys.shift()];
            while (keys.length && value !== undefined) {
                /** @type {?} */
                var k = keys.shift();
                value = k ? value[k] : value + ".";
            }
            return value !== undefined ? value : '';
        }));
    };
    /**
     * @param {?} formatString
     * @param {?} data
     * @return {?}
     */
    Helpers.interpolateWithFallback = /**
     * @param {?} formatString
     * @param {?} data
     * @return {?}
     */
    function (formatString, data) {
        // Format string can be an array, it will attempt to interpolate each item
        // in the array, if there is a failure to replace it will mark it as such
        // It will either return the first successful replacement of ALL variables,
        // or an empty string
        if (Array.isArray(formatString)) {
            /** @type {?} */
            var successes_1 = [];
            /** @type {?} */
            var failures_1 = [];
            formatString.forEach((/**
             * @param {?} format
             * @return {?}
             */
            function (format) {
                /** @type {?} */
                var isSuccess = true;
                /** @type {?} */
                var attempt = format.replace(/\$([\w\.]+)/g, (/**
                 * @param {?} original
                 * @param {?} key
                 * @return {?}
                 */
                function (original, key) {
                    /** @type {?} */
                    var keys = key.split('.');
                    /** @type {?} */
                    var value = data[keys.shift()];
                    while (keys.length && value !== undefined) {
                        /** @type {?} */
                        var k = keys.shift();
                        value = k ? value[k] : value + ".";
                    }
                    if (isSuccess && Helpers.isEmpty(value)) {
                        isSuccess = false;
                    }
                    return Helpers.isEmpty(value) ? '' : value;
                }));
                if (isSuccess) {
                    successes_1.push(attempt);
                }
                else {
                    failures_1.push(attempt);
                }
            }));
            if (successes_1.length !== 0) {
                return successes_1[0];
            }
            return '';
        }
        else {
            return Helpers.interpolate(formatString, data);
        }
    };
    /**
     * Verifies that an object has every property expected by a string to interpolate
     * @param str   The string to interpolate
     * @param props The params to replace in string.
     */
    /**
     * Verifies that an object has every property expected by a string to interpolate
     * @param {?} str   The string to interpolate
     * @param {?} props The params to replace in string.
     * @return {?}
     */
    Helpers.validateInterpolationProps = /**
     * Verifies that an object has every property expected by a string to interpolate
     * @param {?} str   The string to interpolate
     * @param {?} props The params to replace in string.
     * @return {?}
     */
    function (str, props) {
        /** @type {?} */
        var keys = str.match(/\$([\w\.]+)/g);
        return keys.every((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            return props.hasOwnProperty(key.substr(1));
        }));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    Helpers.isObject = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item && typeof item === 'object' && !Array.isArray(item) && item !== null;
    };
    /**
     * Checks to see if the object is a string
     */
    /**
     * Checks to see if the object is a string
     * @param {?} obj
     * @return {?}
     */
    Helpers.isString = /**
     * Checks to see if the object is a string
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return typeof obj === 'string';
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    Helpers.escapeString = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (Helpers.isString(obj)) {
            return obj.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
        return obj;
    };
    /**
     * @param {?} val
     * @param {?=} includeNegatives
     * @return {?}
     */
    Helpers.isNumber = /**
     * @param {?} val
     * @param {?=} includeNegatives
     * @return {?}
     */
    function (val, includeNegatives) {
        if (includeNegatives === void 0) { includeNegatives = false; }
        /** @type {?} */
        var numberRegex = includeNegatives ? /^-{0,1}\d*\.?\d*$/ : /^\d*\.?\d*$/;
        if (typeof val === 'string') {
            return val.length > 0 && val !== '.' && numberRegex.test(val);
        }
        else {
            return !isNaN(parseFloat(val));
        }
    };
    /**
     * Checks to see if the object is a undefined or null
     */
    /**
     * Checks to see if the object is a undefined or null
     * @param {?} obj
     * @return {?}
     */
    Helpers.isBlank = /**
     * Checks to see if the object is a undefined or null
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return obj === undefined || obj === null;
    };
    /**
     * Checks to see if the object is a undefined or null
     */
    /**
     * Checks to see if the object is a undefined or null
     * @param {?} obj
     * @return {?}
     */
    Helpers.isEmpty = /**
     * Checks to see if the object is a undefined or null
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return Helpers.isBlank(obj) || obj === '' || (Array.isArray(obj) && obj.length === 0);
    };
    /**
     * Checks to see if the object is a function
     */
    /**
     * Checks to see if the object is a function
     * @param {?} obj
     * @return {?}
     */
    Helpers.isFunction = /**
     * Checks to see if the object is a function
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    };
    /**
     * Checks to see if the object is a Date
     */
    /**
     * Checks to see if the object is a Date
     * @param {?} obj
     * @return {?}
     */
    Helpers.isDate = /**
     * Checks to see if the object is a Date
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return obj instanceof Date;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    Helpers.convertToArray = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (obj === undefined) {
            return [];
        }
        else if (!Array.isArray(obj)) {
            return [obj];
        }
        return obj;
    };
    /**
     * @param {?} fields
     * @param {?=} reverse
     * @return {?}
     */
    Helpers.sortByField = /**
     * @param {?} fields
     * @param {?=} reverse
     * @return {?}
     */
    function (fields, reverse) {
        if (reverse === void 0) { reverse = false; }
        return (/**
         * @param {?} previous
         * @param {?} current
         * @return {?}
         */
        function (previous, current) {
            if (Helpers.isFunction(fields)) {
                return fields(reverse ? 'desc' : 'asc', previous, current);
            }
            if (!Array.isArray(fields)) {
                fields = [fields];
            }
            for (var i = 0; i < fields.length; i++) {
                /** @type {?} */
                var field = fields[i];
                /** @type {?} */
                var first = previous[field] || '';
                /** @type {?} */
                var second = current[field] || '';
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
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    Helpers.filterByField = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        return (/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var results = [];
            /** @type {?} */
            var field = can(item).have(key);
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
                        function (v) { return field.includes(v); })));
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
                    function (v) { return field.includes(v); })));
                }
                if (value.not) {
                    results.push(!Helpers.filterByField(key, value.not)(item));
                }
                for (var subkey in value) {
                    if (['min', 'max', 'any', 'all', 'not'].indexOf(subkey) < 0) {
                        /** @type {?} */
                        var subvalue = value[subkey];
                        results.push(Helpers.filterByField(key + "." + subkey, subvalue)(item));
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
            function (x) { return x; }));
        });
    };
    /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    Helpers.findAncestor = /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    function (element, selector) {
        while ((element = element.parentElement) && !element.matches.call(element, selector))
            ; // tslint:disable-line
        return element;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    Helpers.deepClone = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (Array.isArray(item)) {
            /** @type {?} */
            var newArr = [];
            for (var i = item.length; i-- > 0;) {
                // tslint:disable-line
                newArr[i] = Helpers.deepClone(item[i]);
            }
            return newArr;
        }
        if (typeof item === 'function' && !/\(\) \{ \[native/.test(item.toString())) {
            /** @type {?} */
            var obj = void 0;
            eval('obj = ' + item.toString()); // tslint:disable-line
            for (var k in item) {
                if (k in item) {
                    obj[k] = Helpers.deepClone(item[k]);
                }
            }
            return obj;
        }
        if (item && typeof item === 'object') {
            /** @type {?} */
            var obj = {};
            for (var k in item) {
                if (k in item) {
                    obj[k] = Helpers.deepClone(item[k]);
                }
            }
            return obj;
        }
        return item;
    };
    /**
     * @param {...?} objs
     * @return {?}
     */
    Helpers.deepAssign = /**
     * @param {...?} objs
     * @return {?}
     */
    function () {
        var objs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objs[_i] = arguments[_i];
        }
        if (objs.length < 2) {
            throw new Error('Need two or more objects to merge');
        }
        /** @type {?} */
        var target = Object.assign({}, objs[0]);
        var _loop_1 = function (i) {
            /** @type {?} */
            var source = Object.assign({}, objs[i]);
            Object.keys(source).forEach((/**
             * @param {?} prop
             * @return {?}
             */
            function (prop) {
                /** @type {?} */
                var value = source[prop];
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
                        var targetArray_1 = target[prop];
                        value.forEach((/**
                         * @param {?} sourceItem
                         * @param {?} itemIndex
                         * @return {?}
                         */
                        function (sourceItem, itemIndex) {
                            if (itemIndex < targetArray_1.length) {
                                /** @type {?} */
                                var targetItem = targetArray_1[itemIndex];
                                if (Object.is(targetItem, sourceItem)) {
                                    return;
                                }
                                if (Helpers.isObject(targetItem) && Helpers.isObject(sourceItem)) {
                                    targetArray_1[itemIndex] = Helpers.deepAssign(targetItem, sourceItem);
                                }
                                else if (Array.isArray(targetItem) && Array.isArray(sourceItem)) {
                                    targetArray_1[itemIndex] = Helpers.deepAssign(targetItem, sourceItem);
                                }
                                else {
                                    targetArray_1[itemIndex] = sourceItem;
                                }
                            }
                            else {
                                targetArray_1.push(sourceItem);
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
        };
        for (var i = 1; i < objs.length; i++) {
            _loop_1(i);
        }
        return target;
    };
    /**
     * Workaround for Edge browser since Element:nextElementSibling is undefined inside of template directives
     * @param element any document element
     * @returns the next sibling node that is of type: Element
     */
    /**
     * Workaround for Edge browser since Element:nextElementSibling is undefined inside of template directives
     * @param {?} element any document element
     * @return {?} the next sibling node that is of type: Element
     */
    Helpers.getNextElementSibling = /**
     * Workaround for Edge browser since Element:nextElementSibling is undefined inside of template directives
     * @param {?} element any document element
     * @return {?} the next sibling node that is of type: Element
     */
    function (element) {
        if (element.nextElementSibling) {
            return element.nextElementSibling;
        }
        else {
            /** @type {?} */
            var e = element.nextSibling;
            while (e && 1 !== e.nodeType) {
                e = e.nextSibling;
            }
            return e;
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    Helpers.dateToObject = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var dateObj = {
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
        function (dateTimeFormatPart) {
            if (dateTimeFormatPart.type !== 'literal') {
                dateObj[dateTimeFormatPart.type] = dateTimeFormatPart.value;
            }
        }));
        return dateObj;
    };
    return Helpers;
}());
// @dynamic
export { Helpers };
var Can = /** @class */ (function () {
    function Can(obj) {
        this.obj = obj;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    Can.prototype.have = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var props = key.split('.');
        /** @type {?} */
        var item = this.obj;
        for (var i = 0; i < props.length; i++) {
            item = item[props[i]];
            if (this.check(item) === false) {
                return item;
            }
        }
        return item;
    };
    /**
     * @param {?} thing
     * @return {?}
     */
    Can.prototype.check = /**
     * @param {?} thing
     * @return {?}
     */
    function (thing) {
        return thing !== void 0;
    };
    return Can;
}());
export { Can };
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
        var guess = min + Math.floor((max - min) / 2);
        /** @type {?} */
        var comparison = compare(item, array[guess]);
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
            throw new Error("Input mismatch: " + JSON.stringify(item) + " not comparable to " + JSON.stringify(array[guess]));
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJ1dGlscy9IZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7SUFBQTtJQTJXQSxDQUFDO0lBMVdDOzs7T0FHRzs7Ozs7O0lBQ0ksb0JBQVk7Ozs7O0lBQW5CLFVBQW9CLEtBQUs7UUFDdkIsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sbUJBQVc7Ozs7O0lBQWxCLFVBQW1CLEdBQVcsRUFBRSxLQUFVO1FBQ3hDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0QixLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztRQUNELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjOzs7OztRQUFFLFVBQUMsUUFBZ0IsRUFBRSxHQUFXOztnQkFDM0QsSUFBSSxHQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztnQkFDL0IsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7O29CQUNyQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDcEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBSSxLQUFLLE1BQUcsQ0FBQzthQUNwQztZQUNELE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDMUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTSwrQkFBdUI7Ozs7O0lBQTlCLFVBQStCLFlBQStCLEVBQUUsSUFBUztRQUN2RSwwRUFBMEU7UUFDMUUseUVBQXlFO1FBQ3pFLDJFQUEyRTtRQUMzRSxxQkFBcUI7UUFDckIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFOztnQkFDM0IsV0FBUyxHQUFhLEVBQUU7O2dCQUN4QixVQUFRLEdBQWEsRUFBRTtZQUMzQixZQUFZLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsTUFBYzs7b0JBQzlCLFNBQVMsR0FBWSxJQUFJOztvQkFDekIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYzs7Ozs7Z0JBQUUsVUFBQyxRQUFRLEVBQUUsR0FBRzs7d0JBQ3JELElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7d0JBQ3JCLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUM5QixPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTs7NEJBQ3JDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO3dCQUNwQixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFJLEtBQUssTUFBRyxDQUFDO3FCQUNwQztvQkFDRCxJQUFJLFNBQVMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUN2QyxTQUFTLEdBQUcsS0FBSyxDQUFDO3FCQUNuQjtvQkFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUM3QyxDQUFDLEVBQUM7Z0JBQ0YsSUFBSSxTQUFTLEVBQUU7b0JBQ2IsV0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDekI7cUJBQU07b0JBQ0wsVUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDeEI7WUFDSCxDQUFDLEVBQUMsQ0FBQztZQUNILElBQUksV0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzFCLE9BQU8sV0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFLENBQUM7U0FDWDthQUFNO1lBQ0wsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0ksa0NBQTBCOzs7Ozs7SUFBakMsVUFBa0MsR0FBVyxFQUFFLEtBQVU7O1lBQ25ELElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUNwQyxPQUFPLElBQUksQ0FBQyxLQUFLOzs7O1FBQUMsVUFBQyxHQUFHO1lBQ3BCLE9BQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVNLGdCQUFROzs7O0lBQWYsVUFBZ0IsSUFBSTtRQUNsQixPQUFPLElBQUksSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxJQUFJLENBQUM7SUFDbkYsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSSxnQkFBUTs7Ozs7SUFBZixVQUFnQixHQUFRO1FBQ3RCLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRU0sb0JBQVk7Ozs7SUFBbkIsVUFBb0IsR0FBUTtRQUMxQixJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekIsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7Ozs7SUFFTSxnQkFBUTs7Ozs7SUFBZixVQUFnQixHQUFRLEVBQUUsZ0JBQWlDO1FBQWpDLGlDQUFBLEVBQUEsd0JBQWlDOztZQUNuRCxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxhQUFhO1FBQzFFLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzNCLE9BQU8sR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9EO2FBQU07WUFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSSxlQUFPOzs7OztJQUFkLFVBQWUsR0FBUTtRQUNyQixPQUFPLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQztJQUMzQyxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNJLGVBQU87Ozs7O0lBQWQsVUFBZSxHQUFRO1FBQ3JCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ksa0JBQVU7Ozs7O0lBQWpCLFVBQWtCLEdBQVE7UUFDeEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLFdBQVcsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNJLGNBQU07Ozs7O0lBQWIsVUFBYyxHQUFRO1FBQ3BCLE9BQU8sR0FBRyxZQUFZLElBQUksQ0FBQztJQUM3QixDQUFDOzs7OztJQUVNLHNCQUFjOzs7O0lBQXJCLFVBQXNCLEdBQVk7UUFDaEMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ3JCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7YUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDZDtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7O0lBRU0sbUJBQVc7Ozs7O0lBQWxCLFVBQW1CLE1BQVcsRUFBRSxPQUFlO1FBQWYsd0JBQUEsRUFBQSxlQUFlO1FBQzdDOzs7OztRQUFPLFVBQUMsUUFBYSxFQUFFLE9BQVk7WUFDakMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM5QixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUM1RDtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUMxQixNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNuQjtZQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztvQkFDbEMsS0FBSyxHQUFXLE1BQU0sQ0FBQyxDQUFDLENBQUM7O29CQUN6QixLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7O29CQUM3QixNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBRWpDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUNuRCxRQUFRO29CQUNSLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3hCLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQzNCO3FCQUFNLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUM5RCxnQkFBZ0I7b0JBQ2hCLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQzVCLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQy9CO3FCQUFNO29CQUNMLFVBQVU7b0JBQ1YsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JELE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUMxRDtnQkFFRCxJQUFJLEtBQUssR0FBRyxNQUFNLEVBQUU7b0JBQ2xCLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN6QjtxQkFBTSxJQUFJLEtBQUssR0FBRyxNQUFNLEVBQUU7b0JBQ3pCLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN6QjthQUNGO1lBQ0QsT0FBTyxDQUFDLENBQUM7UUFDWCxDQUFDLEVBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTSxxQkFBYTs7Ozs7SUFBcEIsVUFBcUIsR0FBRyxFQUFFLEtBQUs7UUFDN0I7Ozs7UUFBTyxVQUFDLElBQUk7O2dCQUNOLE9BQU8sR0FBRyxFQUFFOztnQkFDWixLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDL0IsSUFBSSxLQUFLLFlBQVksUUFBUSxFQUFFO2dCQUM3QixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNsQztpQkFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO2lCQUFNLElBQUksS0FBSyxZQUFZLE1BQU0sRUFBRTtnQkFDbEMsSUFBSSxLQUFLLFlBQVksSUFBSSxFQUFFO29CQUN6QixLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUN6QjtnQkFDRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUU7b0JBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNsQztnQkFDRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUU7b0JBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNsQztnQkFDRCxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3pDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUk7Ozs7d0JBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFqQixDQUFpQixFQUFDLENBQUMsQ0FBQztxQkFDeEQ7eUJBQU07d0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3FCQUN6QztpQkFDRjtnQkFDRCxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLOzs7O29CQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBakIsQ0FBaUIsRUFBQyxDQUFDLENBQUM7aUJBQ3pEO2dCQUNELElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRTtvQkFDYixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQzVEO2dCQUNELEtBQUssSUFBSSxNQUFNLElBQUksS0FBSyxFQUFFO29CQUN4QixJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7OzRCQUN2RCxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQzt3QkFDNUIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFJLEdBQUcsU0FBSSxNQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztxQkFDekU7aUJBQ0Y7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEU7WUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLOzs7O1lBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU0sb0JBQVk7Ozs7O0lBQW5CLFVBQW9CLE9BQWdCLEVBQUUsUUFBZ0I7UUFDcEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO1lBQUMsQ0FBQyxDQUFDLHNCQUFzQjtRQUM3RyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7OztJQUVNLGlCQUFTOzs7O0lBQWhCLFVBQWlCLElBQVM7UUFDeEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFOztnQkFDbkIsTUFBTSxHQUFHLEVBQUU7WUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFJO2dCQUNuQyxzQkFBc0I7Z0JBQ3RCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hDO1lBQ0QsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUNELElBQUksT0FBTyxJQUFJLEtBQUssVUFBVSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFOztnQkFDdkUsR0FBRyxTQUFBO1lBQ1AsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtZQUN4RCxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDbEIsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO29CQUNiLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNyQzthQUNGO1lBQ0QsT0FBTyxHQUFHLENBQUM7U0FDWjtRQUNELElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTs7Z0JBQ2hDLEdBQUcsR0FBRyxFQUFFO1lBQ1osS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtvQkFDYixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDckM7YUFDRjtZQUNELE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU0sa0JBQVU7Ozs7SUFBakI7UUFBa0IsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCx5QkFBTzs7UUFDdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7U0FDdEQ7O1lBQ0ssTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDaEMsQ0FBQzs7Z0JBQ0YsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLElBQUk7O29CQUN6QixLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDMUIsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUMzQixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTt3QkFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO3FCQUN4RDt5QkFBTTt3QkFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO3FCQUN0QjtpQkFDRjtxQkFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQy9CLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFOzs0QkFDeEQsYUFBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQ2hDLEtBQUssQ0FBQyxPQUFPOzs7Ozt3QkFBQyxVQUFDLFVBQVUsRUFBRSxTQUFTOzRCQUNsQyxJQUFJLFNBQVMsR0FBRyxhQUFXLENBQUMsTUFBTSxFQUFFOztvQ0FDNUIsVUFBVSxHQUFHLGFBQVcsQ0FBQyxTQUFTLENBQUM7Z0NBQ3pDLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUU7b0NBQ3JDLE9BQU87aUNBQ1I7Z0NBQ0QsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7b0NBQ2hFLGFBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztpQ0FDckU7cUNBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7b0NBQ2pFLGFBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztpQ0FDckU7cUNBQU07b0NBQ0wsYUFBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztpQ0FDckM7NkJBQ0Y7aUNBQU07Z0NBQ0wsYUFBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzs2QkFDOUI7d0JBQ0gsQ0FBQyxFQUFDLENBQUM7cUJBQ0o7eUJBQU07d0JBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztxQkFDdEI7aUJBQ0Y7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztpQkFDdEI7WUFDSCxDQUFDLEVBQUMsQ0FBQzs7UUFwQ0wsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUEzQixDQUFDO1NBcUNUO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7O09BSUc7Ozs7OztJQUNJLDZCQUFxQjs7Ozs7SUFBNUIsVUFBNkIsT0FBZ0I7UUFDM0MsSUFBSSxPQUFPLENBQUMsa0JBQWtCLEVBQUU7WUFDOUIsT0FBTyxPQUFPLENBQUMsa0JBQWtCLENBQUM7U0FDbkM7YUFBTTs7Z0JBQ0QsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxXQUFXO1lBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUM1QixDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQzthQUNuQjtZQUNELE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7SUFDSCxDQUFDOzs7OztJQUVNLG9CQUFZOzs7O0lBQW5CLFVBQ0UsSUFBVTs7WUFZTixPQUFPLEdBQUc7WUFDWixHQUFHLEVBQUUsRUFBRTtZQUNQLFNBQVMsRUFBRSxFQUFFO1lBQ2IsR0FBRyxFQUFFLEVBQUU7WUFDUCxJQUFJLEVBQUUsRUFBRTtZQUNSLE1BQU0sRUFBRSxFQUFFO1lBQ1YsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsRUFBRTtZQUNWLE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLEVBQUU7U0FDVDtRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFO1lBQzNCLEdBQUcsRUFBRSxTQUFTO1lBQ2QsR0FBRyxFQUFFLE9BQU87WUFDWixJQUFJLEVBQUUsU0FBUztZQUNmLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLE9BQU8sRUFBRSxNQUFNO1lBQ2YsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQzthQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7YUFDbkIsT0FBTzs7OztRQUFDLFVBQUMsa0JBQTJDO1lBQ25ELElBQUksa0JBQWtCLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtnQkFDekMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQzthQUM3RDtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBM1dELElBMldDOzs7QUFFRDtJQUdFLGFBQVksR0FBVztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDOzs7OztJQUVELGtCQUFJOzs7O0lBQUosVUFBSyxHQUFXOztZQUNWLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7WUFDdEIsSUFBSSxHQUFRLElBQUksQ0FBQyxHQUFHO1FBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRTtnQkFDOUIsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELG1CQUFLOzs7O0lBQUwsVUFBTSxLQUFVO1FBQ2QsT0FBTyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNILFVBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDOzs7O0lBckJDLGtCQUFZOzs7Ozs7QUEwQmQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFRO0lBQzFCLE9BQU8sSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEIsQ0FBQzs7Ozs7Ozs7O0FBR0QsTUFBTSxVQUFVLFlBQVksQ0FBSSxJQUFPLEVBQUUsS0FBVSxFQUFFLE9BQStDO0lBQ2xHLE9BQU8sTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7Ozs7SUFFbkMsU0FBUyxNQUFNLENBQUMsR0FBVyxFQUFFLEdBQVc7UUFDdEMsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO1lBQ2IsT0FBTyxTQUFTLENBQUM7U0FDbEI7O1lBQ0ssS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFDekMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlDLElBQUksVUFBVSxLQUFLLENBQUMsRUFBRTtZQUNwQixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQjthQUFNLElBQUksVUFBVSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzVCLE9BQU8sTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDL0I7YUFBTSxJQUFJLFVBQVUsS0FBSyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMvQjthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBbUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsMkJBQXNCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFHLENBQUMsQ0FBQztTQUM5RztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGR5bmFtaWNcbmV4cG9ydCBjbGFzcyBIZWxwZXJzIHtcbiAgLyoqXG4gICAqIFN3YWxsb3dzIGFuIGV2ZW50IHRvIHN0b3AgZnVydGhlciBleGVjdXRpb25cbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBzdGF0aWMgc3dhbGxvd0V2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGludGVycG9sYXRlKHN0cjogc3RyaW5nLCBwcm9wczogYW55KTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5pc0RhdGUocHJvcHMpKSB7XG4gICAgICBwcm9wcyA9IHRoaXMuZGF0ZVRvT2JqZWN0KHByb3BzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXCQoW1xcd1xcLl0rKS9nLCAob3JpZ2luYWw6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGxldCBrZXlzOiBzdHJpbmdbXSA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgbGV0IHZhbHVlID0gcHJvcHNba2V5cy5zaGlmdCgpXTtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCBrID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICB2YWx1ZSA9IGsgPyB2YWx1ZVtrXSA6IGAke3ZhbHVlfS5gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6ICcnO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGludGVycG9sYXRlV2l0aEZhbGxiYWNrKGZvcm1hdFN0cmluZzogc3RyaW5nIHwgc3RyaW5nW10sIGRhdGE6IGFueSk6IHN0cmluZyB7XG4gICAgLy8gRm9ybWF0IHN0cmluZyBjYW4gYmUgYW4gYXJyYXksIGl0IHdpbGwgYXR0ZW1wdCB0byBpbnRlcnBvbGF0ZSBlYWNoIGl0ZW1cbiAgICAvLyBpbiB0aGUgYXJyYXksIGlmIHRoZXJlIGlzIGEgZmFpbHVyZSB0byByZXBsYWNlIGl0IHdpbGwgbWFyayBpdCBhcyBzdWNoXG4gICAgLy8gSXQgd2lsbCBlaXRoZXIgcmV0dXJuIHRoZSBmaXJzdCBzdWNjZXNzZnVsIHJlcGxhY2VtZW50IG9mIEFMTCB2YXJpYWJsZXMsXG4gICAgLy8gb3IgYW4gZW1wdHkgc3RyaW5nXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZm9ybWF0U3RyaW5nKSkge1xuICAgICAgbGV0IHN1Y2Nlc3Nlczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGxldCBmYWlsdXJlczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGZvcm1hdFN0cmluZy5mb3JFYWNoKChmb3JtYXQ6IHN0cmluZykgPT4ge1xuICAgICAgICBsZXQgaXNTdWNjZXNzOiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgbGV0IGF0dGVtcHQgPSBmb3JtYXQucmVwbGFjZSgvXFwkKFtcXHdcXC5dKykvZywgKG9yaWdpbmFsLCBrZXkpID0+IHtcbiAgICAgICAgICBsZXQga2V5cyA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICAgIGxldCB2YWx1ZSA9IGRhdGFba2V5cy5zaGlmdCgpXTtcbiAgICAgICAgICB3aGlsZSAoa2V5cy5sZW5ndGggJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IGsgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YWx1ZSA9IGsgPyB2YWx1ZVtrXSA6IGAke3ZhbHVlfS5gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNTdWNjZXNzICYmIEhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlzU3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gSGVscGVycy5pc0VtcHR5KHZhbHVlKSA/ICcnIDogdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgc3VjY2Vzc2VzLnB1c2goYXR0ZW1wdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmFpbHVyZXMucHVzaChhdHRlbXB0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoc3VjY2Vzc2VzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gc3VjY2Vzc2VzWzBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gSGVscGVycy5pbnRlcnBvbGF0ZShmb3JtYXRTdHJpbmcsIGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyB0aGF0IGFuIG9iamVjdCBoYXMgZXZlcnkgcHJvcGVydHkgZXhwZWN0ZWQgYnkgYSBzdHJpbmcgdG8gaW50ZXJwb2xhdGVcbiAgICogQHBhcmFtIHN0ciAgIFRoZSBzdHJpbmcgdG8gaW50ZXJwb2xhdGVcbiAgICogQHBhcmFtIHByb3BzIFRoZSBwYXJhbXMgdG8gcmVwbGFjZSBpbiBzdHJpbmcuXG4gICAqL1xuICBzdGF0aWMgdmFsaWRhdGVJbnRlcnBvbGF0aW9uUHJvcHMoc3RyOiBzdHJpbmcsIHByb3BzOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQga2V5cyA9IHN0ci5tYXRjaCgvXFwkKFtcXHdcXC5dKykvZyk7XG4gICAgcmV0dXJuIGtleXMuZXZlcnkoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIHByb3BzLmhhc093blByb3BlcnR5KGtleS5zdWJzdHIoMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGlzT2JqZWN0KGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkgJiYgaXRlbSAhPT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSBzdHJpbmdcbiAgICovXG4gIHN0YXRpYyBpc1N0cmluZyhvYmo6IGFueSkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIHN0YXRpYyBlc2NhcGVTdHJpbmcob2JqOiBhbnkpOiBhbnkge1xuICAgIGlmIChIZWxwZXJzLmlzU3RyaW5nKG9iaikpIHtcbiAgICAgIHJldHVybiBvYmoucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHN0YXRpYyBpc051bWJlcih2YWw6IGFueSwgaW5jbHVkZU5lZ2F0aXZlczogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgY29uc3QgbnVtYmVyUmVnZXggPSBpbmNsdWRlTmVnYXRpdmVzID8gL14tezAsMX1cXGQqXFwuP1xcZCokLyA6IC9eXFxkKlxcLj9cXGQqJC87XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdmFsLmxlbmd0aCA+IDAgJiYgdmFsICE9PSAnLicgJiYgbnVtYmVyUmVnZXgudGVzdCh2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIHVuZGVmaW5lZCBvciBudWxsXG4gICAqL1xuICBzdGF0aWMgaXNCbGFuayhvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBvYmogPT09IHVuZGVmaW5lZCB8fCBvYmogPT09IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIGEgdW5kZWZpbmVkIG9yIG51bGxcbiAgICovXG4gIHN0YXRpYyBpc0VtcHR5KG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEhlbHBlcnMuaXNCbGFuayhvYmopIHx8IG9iaiA9PT0gJycgfHwgKEFycmF5LmlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09PSAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSBmdW5jdGlvblxuICAgKi9cbiAgc3RhdGljIGlzRnVuY3Rpb24ob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEob2JqICYmIG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY2FsbCAmJiBvYmouYXBwbHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIERhdGVcbiAgICovXG4gIHN0YXRpYyBpc0RhdGUob2JqOiBhbnkpIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRGF0ZTtcbiAgfVxuXG4gIHN0YXRpYyBjb252ZXJ0VG9BcnJheShvYmo6IHVua25vd24pOiBhbnlbXSB7XG4gICAgaWYgKG9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICByZXR1cm4gW29ial07XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBzdGF0aWMgc29ydEJ5RmllbGQoZmllbGRzOiBhbnksIHJldmVyc2UgPSBmYWxzZSkge1xuICAgIHJldHVybiAocHJldmlvdXM6IGFueSwgY3VycmVudDogYW55KSA9PiB7XG4gICAgICBpZiAoSGVscGVycy5pc0Z1bmN0aW9uKGZpZWxkcykpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkcyhyZXZlcnNlID8gJ2Rlc2MnIDogJ2FzYycsIHByZXZpb3VzLCBjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShmaWVsZHMpKSB7XG4gICAgICAgIGZpZWxkcyA9IFtmaWVsZHNdO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZpZWxkOiBzdHJpbmcgPSBmaWVsZHNbaV07XG4gICAgICAgIGxldCBmaXJzdCA9IHByZXZpb3VzW2ZpZWxkXSB8fCAnJztcbiAgICAgICAgbGV0IHNlY29uZCA9IGN1cnJlbnRbZmllbGRdIHx8ICcnO1xuXG4gICAgICAgIGlmIChIZWxwZXJzLmlzRGF0ZShmaXJzdCkgJiYgSGVscGVycy5pc0RhdGUoc2Vjb25kKSkge1xuICAgICAgICAgIC8vIERhdGVzXG4gICAgICAgICAgZmlyc3QgPSBmaXJzdC5nZXRUaW1lKCk7XG4gICAgICAgICAgc2Vjb25kID0gc2Vjb25kLmdldFRpbWUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChIZWxwZXJzLmlzU3RyaW5nKGZpcnN0KSAmJiBIZWxwZXJzLmlzU3RyaW5nKHNlY29uZCkpIHtcbiAgICAgICAgICAvLyBCYXNpYyBzdHJpbmdzXG4gICAgICAgICAgZmlyc3QgPSBmaXJzdC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHNlY29uZCA9IHNlY29uZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE51bWJlcnNcbiAgICAgICAgICBmaXJzdCA9IGlzTmFOKE51bWJlcihmaXJzdCkpID8gZmlyc3QgOiBOdW1iZXIoZmlyc3QpO1xuICAgICAgICAgIHNlY29uZCA9IGlzTmFOKE51bWJlcihzZWNvbmQpKSA/IHNlY29uZCA6IE51bWJlcihzZWNvbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpcnN0ID4gc2Vjb25kKSB7XG4gICAgICAgICAgcmV0dXJuIHJldmVyc2UgPyAtMSA6IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoZmlyc3QgPCBzZWNvbmQpIHtcbiAgICAgICAgICByZXR1cm4gcmV2ZXJzZSA/IDEgOiAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmaWx0ZXJCeUZpZWxkKGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gKGl0ZW0pID0+IHtcbiAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICBsZXQgZmllbGQgPSBjYW4oaXRlbSkuaGF2ZShrZXkpO1xuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlKGZpZWxkLCBpdGVtKSk7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh2YWx1ZS5pbmNsdWRlcyhmaWVsZCkpO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICBpZiAoZmllbGQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZmllbGQgPSBmaWVsZC5nZXRUaW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLm1pbikge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChmaWVsZCA+PSB2YWx1ZS5taW4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5tYXgpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goZmllbGQgPD0gdmFsdWUubWF4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUuYW55ICYmIEFycmF5LmlzQXJyYXkodmFsdWUuYW55KSkge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkKSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlLmFueS5zb21lKCh2KSA9PiBmaWVsZC5pbmNsdWRlcyh2KSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2godmFsdWUuYW55LmluY2x1ZGVzKGZpZWxkKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5hbGwgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZS5hbGwpKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlLmFsbC5ldmVyeSgodikgPT4gZmllbGQuaW5jbHVkZXModikpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUubm90KSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKCFIZWxwZXJzLmZpbHRlckJ5RmllbGQoa2V5LCB2YWx1ZS5ub3QpKGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBzdWJrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgICBpZiAoWydtaW4nLCAnbWF4JywgJ2FueScsICdhbGwnLCAnbm90J10uaW5kZXhPZihzdWJrZXkpIDwgMCkge1xuICAgICAgICAgICAgbGV0IHN1YnZhbHVlID0gdmFsdWVbc3Via2V5XTtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChIZWxwZXJzLmZpbHRlckJ5RmllbGQoYCR7a2V5fS4ke3N1YmtleX1gLCBzdWJ2YWx1ZSkoaXRlbSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKEpTT04uc3RyaW5naWZ5KGZpZWxkKS5tYXRjaChuZXcgUmVnRXhwKHZhbHVlLCAnZ2knKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHMuZXZlcnkoKHgpID0+IHgpO1xuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZmluZEFuY2VzdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpOiBFbGVtZW50IHtcbiAgICB3aGlsZSAoKGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQpICYmICFlbGVtZW50Lm1hdGNoZXMuY2FsbChlbGVtZW50LCBzZWxlY3RvcikpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZGVlcENsb25lKGl0ZW06IGFueSk6IGFueSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgIGxldCBuZXdBcnIgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSBpdGVtLmxlbmd0aDsgaS0tID4gMDsgKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgbmV3QXJyW2ldID0gSGVscGVycy5kZWVwQ2xvbmUoaXRlbVtpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3QXJyO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdmdW5jdGlvbicgJiYgIS9cXChcXCkgXFx7IFxcW25hdGl2ZS8udGVzdChpdGVtLnRvU3RyaW5nKCkpKSB7XG4gICAgICBsZXQgb2JqO1xuICAgICAgZXZhbCgnb2JqID0gJyArIGl0ZW0udG9TdHJpbmcoKSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIGZvciAobGV0IGsgaW4gaXRlbSkge1xuICAgICAgICBpZiAoayBpbiBpdGVtKSB7XG4gICAgICAgICAgb2JqW2tdID0gSGVscGVycy5kZWVwQ2xvbmUoaXRlbVtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgZm9yIChsZXQgayBpbiBpdGVtKSB7XG4gICAgICAgIGlmIChrIGluIGl0ZW0pIHtcbiAgICAgICAgICBvYmpba10gPSBIZWxwZXJzLmRlZXBDbG9uZShpdGVtW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBzdGF0aWMgZGVlcEFzc2lnbiguLi5vYmpzKSB7XG4gICAgaWYgKG9ianMubGVuZ3RoIDwgMikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZWVkIHR3byBvciBtb3JlIG9iamVjdHMgdG8gbWVyZ2UnKTtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gT2JqZWN0LmFzc2lnbih7fSwgb2Jqc1swXSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvYmpzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzb3VyY2UgPSBPYmplY3QuYXNzaWduKHt9LCBvYmpzW2ldKTtcbiAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgaWYgKEhlbHBlcnMuaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBIZWxwZXJzLmlzT2JqZWN0KHRhcmdldFtwcm9wXSkpIHtcbiAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IEhlbHBlcnMuZGVlcEFzc2lnbih0YXJnZXRbcHJvcF0sIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBBcnJheS5pc0FycmF5KHRhcmdldFtwcm9wXSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEFycmF5ID0gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgoc291cmNlSXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpdGVtSW5kZXggPCB0YXJnZXRBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRJdGVtID0gdGFyZ2V0QXJyYXlbaXRlbUluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmlzKHRhcmdldEl0ZW0sIHNvdXJjZUl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChIZWxwZXJzLmlzT2JqZWN0KHRhcmdldEl0ZW0pICYmIEhlbHBlcnMuaXNPYmplY3Qoc291cmNlSXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5W2l0ZW1JbmRleF0gPSBIZWxwZXJzLmRlZXBBc3NpZ24odGFyZ2V0SXRlbSwgc291cmNlSXRlbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRhcmdldEl0ZW0pICYmIEFycmF5LmlzQXJyYXkoc291cmNlSXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5W2l0ZW1JbmRleF0gPSBIZWxwZXJzLmRlZXBBc3NpZ24odGFyZ2V0SXRlbSwgc291cmNlSXRlbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5W2l0ZW1JbmRleF0gPSBzb3VyY2VJdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUl0ZW0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFdvcmthcm91bmQgZm9yIEVkZ2UgYnJvd3NlciBzaW5jZSBFbGVtZW50Om5leHRFbGVtZW50U2libGluZyBpcyB1bmRlZmluZWQgaW5zaWRlIG9mIHRlbXBsYXRlIGRpcmVjdGl2ZXNcbiAgICogQHBhcmFtIGVsZW1lbnQgYW55IGRvY3VtZW50IGVsZW1lbnRcbiAgICogQHJldHVybnMgdGhlIG5leHQgc2libGluZyBub2RlIHRoYXQgaXMgb2YgdHlwZTogRWxlbWVudFxuICAgKi9cbiAgc3RhdGljIGdldE5leHRFbGVtZW50U2libGluZyhlbGVtZW50OiBFbGVtZW50KTogTm9kZSB7XG4gICAgaWYgKGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBlID0gZWxlbWVudC5uZXh0U2libGluZztcbiAgICAgIHdoaWxlIChlICYmIDEgIT09IGUubm9kZVR5cGUpIHtcbiAgICAgICAgZSA9IGUubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm4gZTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZGF0ZVRvT2JqZWN0KFxuICAgIGRhdGU6IERhdGUsXG4gICk6IHtcbiAgICBkYXk6IHN0cmluZztcbiAgICBkYXlQZXJpb2Q6IHN0cmluZztcbiAgICBlcmE6IHN0cmluZztcbiAgICBob3VyOiBzdHJpbmc7XG4gICAgbWludXRlOiBzdHJpbmc7XG4gICAgbW9udGg6IHN0cmluZztcbiAgICBzZWNvbmQ6IHN0cmluZztcbiAgICB3ZWVrZGF5OiBzdHJpbmc7XG4gICAgeWVhcjogc3RyaW5nO1xuICB9IHtcbiAgICBsZXQgZGF0ZU9iaiA9IHtcbiAgICAgIGRheTogJycsXG4gICAgICBkYXlQZXJpb2Q6ICcnLFxuICAgICAgZXJhOiAnJyxcbiAgICAgIGhvdXI6ICcnLFxuICAgICAgbWludXRlOiAnJyxcbiAgICAgIG1vbnRoOiAnJyxcbiAgICAgIHNlY29uZDogJycsXG4gICAgICB3ZWVrZGF5OiAnJyxcbiAgICAgIHllYXI6ICcnLFxuICAgIH07XG4gICAgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgIGVyYTogJ3Nob3J0JyxcbiAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgIH0pXG4gICAgICAuZm9ybWF0VG9QYXJ0cyhkYXRlKVxuICAgICAgLmZvckVhY2goKGRhdGVUaW1lRm9ybWF0UGFydDogSW50bC5EYXRlVGltZUZvcm1hdFBhcnQpID0+IHtcbiAgICAgICAgaWYgKGRhdGVUaW1lRm9ybWF0UGFydC50eXBlICE9PSAnbGl0ZXJhbCcpIHtcbiAgICAgICAgICBkYXRlT2JqW2RhdGVUaW1lRm9ybWF0UGFydC50eXBlXSA9IGRhdGVUaW1lRm9ybWF0UGFydC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIGRhdGVPYmo7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhbiB7XG4gIG9iajogT2JqZWN0O1xuXG4gIGNvbnN0cnVjdG9yKG9iajogT2JqZWN0KSB7XG4gICAgdGhpcy5vYmogPSBvYmo7XG4gIH1cblxuICBoYXZlKGtleTogc3RyaW5nKTogYW55IHtcbiAgICBsZXQgcHJvcHMgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICBsZXQgaXRlbTogYW55ID0gdGhpcy5vYmo7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgaXRlbSA9IGl0ZW1bcHJvcHNbaV1dO1xuICAgICAgaWYgKHRoaXMuY2hlY2soaXRlbSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIGNoZWNrKHRoaW5nOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpbmcgIT09IHZvaWQgMDtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSBvYmpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbihvYmo6IGFueSkge1xuICByZXR1cm4gbmV3IENhbihvYmopO1xufVxuXG4vLyBBc3N1bWVzIGRhdGEgaXMgYWxyZWFkeSBzb3J0ZWRcbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlTZWFyY2g8VD4oaXRlbTogVCwgYXJyYXk6IFRbXSwgY29tcGFyZTogKGE6IFQsIGI6IFQpID0+IDEgfCAtMSB8IDAgfCB1bmRlZmluZWQpOiBUIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIHNlYXJjaCgwLCBhcnJheS5sZW5ndGggLSAxKTtcblxuICBmdW5jdGlvbiBzZWFyY2gobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKG1pbiA+IG1heCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgZ3Vlc3MgPSBtaW4gKyBNYXRoLmZsb29yKChtYXggLSBtaW4pIC8gMik7XG4gICAgY29uc3QgY29tcGFyaXNvbiA9IGNvbXBhcmUoaXRlbSwgYXJyYXlbZ3Vlc3NdKTtcblxuICAgIGlmIChjb21wYXJpc29uID09PSAwKSB7XG4gICAgICByZXR1cm4gYXJyYXlbZ3Vlc3NdO1xuICAgIH0gZWxzZSBpZiAoY29tcGFyaXNvbiA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBzZWFyY2gobWluLCBndWVzcyAtIDEpO1xuICAgIH0gZWxzZSBpZiAoY29tcGFyaXNvbiA9PT0gMSkge1xuICAgICAgcmV0dXJuIHNlYXJjaChndWVzcyArIDEsIG1heCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW5wdXQgbWlzbWF0Y2g6ICR7SlNPTi5zdHJpbmdpZnkoaXRlbSl9IG5vdCBjb21wYXJhYmxlIHRvICR7SlNPTi5zdHJpbmdpZnkoYXJyYXlbZ3Vlc3NdKX1gKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==