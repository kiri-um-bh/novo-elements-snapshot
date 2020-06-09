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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJ1dGlscy9IZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7SUFBQTtJQXlXQSxDQUFDO0lBeFdDOztPQUVHOzs7Ozs7SUFDSSxvQkFBWTs7Ozs7SUFBbkIsVUFBb0IsS0FBSztRQUN2QixJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7Ozs7SUFFTSxtQkFBVzs7Ozs7SUFBbEIsVUFBbUIsR0FBVyxFQUFFLEtBQVU7UUFDeEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWM7Ozs7O1FBQUUsVUFBQyxRQUFnQixFQUFFLEdBQVc7O2dCQUN6RCxJQUFJLEdBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O2dCQUNqQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMvQixPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTs7b0JBQ25DLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUN0QixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFJLEtBQUssTUFBRyxDQUFDO2FBQ3BDO1lBQ0QsT0FBTyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7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XG5leHBvcnQgY2xhc3MgSGVscGVycyB7XG4gIC8qKlxuICAgKiBTd2FsbG93cyBhbiBldmVudCB0byBzdG9wIGZ1cnRoZXIgZXhlY3V0aW9uXG4gICAqL1xuICBzdGF0aWMgc3dhbGxvd0V2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGludGVycG9sYXRlKHN0cjogc3RyaW5nLCBwcm9wczogYW55KTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5pc0RhdGUocHJvcHMpKSB7XG4gICAgICBwcm9wcyA9IHRoaXMuZGF0ZVRvT2JqZWN0KHByb3BzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXCQoW1xcd1xcLl0rKS9nLCAob3JpZ2luYWw6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGtleXM6IHN0cmluZ1tdID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgICBsZXQgdmFsdWUgPSBwcm9wc1trZXlzLnNoaWZ0KCldO1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgayA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgdmFsdWUgPSBrID8gdmFsdWVba10gOiBgJHt2YWx1ZX0uYDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiAnJztcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpbnRlcnBvbGF0ZVdpdGhGYWxsYmFjayhmb3JtYXRTdHJpbmc6IHN0cmluZyB8IHN0cmluZ1tdLCBkYXRhOiBhbnkpOiBzdHJpbmcge1xuICAgIC8vIEZvcm1hdCBzdHJpbmcgY2FuIGJlIGFuIGFycmF5LCBpdCB3aWxsIGF0dGVtcHQgdG8gaW50ZXJwb2xhdGUgZWFjaCBpdGVtXG4gICAgLy8gaW4gdGhlIGFycmF5LCBpZiB0aGVyZSBpcyBhIGZhaWx1cmUgdG8gcmVwbGFjZSBpdCB3aWxsIG1hcmsgaXQgYXMgc3VjaFxuICAgIC8vIEl0IHdpbGwgZWl0aGVyIHJldHVybiB0aGUgZmlyc3Qgc3VjY2Vzc2Z1bCByZXBsYWNlbWVudCBvZiBBTEwgdmFyaWFibGVzLFxuICAgIC8vIG9yIGFuIGVtcHR5IHN0cmluZ1xuICAgIGlmIChBcnJheS5pc0FycmF5KGZvcm1hdFN0cmluZykpIHtcbiAgICAgIGNvbnN0IHN1Y2Nlc3Nlczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGNvbnN0IGZhaWx1cmVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgZm9ybWF0U3RyaW5nLmZvckVhY2goKGZvcm1hdDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGxldCBpc1N1Y2Nlc3M6IGJvb2xlYW4gPSB0cnVlO1xuICAgICAgICBjb25zdCBhdHRlbXB0ID0gZm9ybWF0LnJlcGxhY2UoL1xcJChbXFx3XFwuXSspL2csIChvcmlnaW5hbCwga2V5KSA9PiB7XG4gICAgICAgICAgY29uc3Qga2V5cyA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICAgIGxldCB2YWx1ZSA9IGRhdGFba2V5cy5zaGlmdCgpXTtcbiAgICAgICAgICB3aGlsZSAoa2V5cy5sZW5ndGggJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgayA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhbHVlID0gayA/IHZhbHVlW2tdIDogYCR7dmFsdWV9LmA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc1N1Y2Nlc3MgJiYgSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgaXNTdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBIZWxwZXJzLmlzRW1wdHkodmFsdWUpID8gJycgOiB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc1N1Y2Nlc3MpIHtcbiAgICAgICAgICBzdWNjZXNzZXMucHVzaChhdHRlbXB0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWlsdXJlcy5wdXNoKGF0dGVtcHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChzdWNjZXNzZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBzdWNjZXNzZXNbMF07XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBIZWxwZXJzLmludGVycG9sYXRlKGZvcm1hdFN0cmluZywgZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIHRoYXQgYW4gb2JqZWN0IGhhcyBldmVyeSBwcm9wZXJ0eSBleHBlY3RlZCBieSBhIHN0cmluZyB0byBpbnRlcnBvbGF0ZVxuICAgKiBAcGFyYW0gc3RyICAgVGhlIHN0cmluZyB0byBpbnRlcnBvbGF0ZVxuICAgKiBAcGFyYW0gcHJvcHMgVGhlIHBhcmFtcyB0byByZXBsYWNlIGluIHN0cmluZy5cbiAgICovXG4gIHN0YXRpYyB2YWxpZGF0ZUludGVycG9sYXRpb25Qcm9wcyhzdHI6IHN0cmluZywgcHJvcHM6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGtleXMgPSBzdHIubWF0Y2goL1xcJChbXFx3XFwuXSspL2cpO1xuICAgIHJldHVybiBrZXlzLmV2ZXJ5KChrZXkpID0+IHtcbiAgICAgIHJldHVybiBwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkuc3Vic3RyKDEpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpc09iamVjdChpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pICYmIGl0ZW0gIT09IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIGEgc3RyaW5nXG4gICAqL1xuICBzdGF0aWMgaXNTdHJpbmcob2JqOiBhbnkpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZyc7XG4gIH1cblxuICBzdGF0aWMgZXNjYXBlU3RyaW5nKG9iajogYW55KTogYW55IHtcbiAgICBpZiAoSGVscGVycy5pc1N0cmluZyhvYmopKSB7XG4gICAgICByZXR1cm4gb2JqLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBzdGF0aWMgaXNOdW1iZXIodmFsOiBhbnksIGluY2x1ZGVOZWdhdGl2ZXM6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGNvbnN0IG51bWJlclJlZ2V4ID0gaW5jbHVkZU5lZ2F0aXZlcyA/IC9eLXswLDF9XFxkKlxcLj9cXGQqJC8gOiAvXlxcZCpcXC4/XFxkKiQvO1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHZhbC5sZW5ndGggPiAwICYmIHZhbCAhPT0gJy4nICYmIG51bWJlclJlZ2V4LnRlc3QodmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSB1bmRlZmluZWQgb3IgbnVsbFxuICAgKi9cbiAgc3RhdGljIGlzQmxhbmsob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQgfHwgb2JqID09PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIHVuZGVmaW5lZCBvciBudWxsXG4gICAqL1xuICBzdGF0aWMgaXNFbXB0eShvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBIZWxwZXJzLmlzQmxhbmsob2JqKSB8fCBvYmogPT09ICcnIHx8IChBcnJheS5pc0FycmF5KG9iaikgJiYgb2JqLmxlbmd0aCA9PT0gMCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIGEgZnVuY3Rpb25cbiAgICovXG4gIHN0YXRpYyBpc0Z1bmN0aW9uKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKG9iaiAmJiBvYmouY29uc3RydWN0b3IgJiYgb2JqLmNhbGwgJiYgb2JqLmFwcGx5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSBEYXRlXG4gICAqL1xuICBzdGF0aWMgaXNEYXRlKG9iajogYW55KSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIERhdGU7XG4gIH1cblxuICBzdGF0aWMgY29udmVydFRvQXJyYXkob2JqOiB1bmtub3duKSB7XG4gICAgaWYgKG9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICByZXR1cm4gW29ial07XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBzdGF0aWMgc29ydEJ5RmllbGQoZmllbGRzOiBhbnksIHJldmVyc2UgPSBmYWxzZSkge1xuICAgIHJldHVybiAocHJldmlvdXM6IGFueSwgY3VycmVudDogYW55KSA9PiB7XG4gICAgICBpZiAoSGVscGVycy5pc0Z1bmN0aW9uKGZpZWxkcykpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkcyhyZXZlcnNlID8gJ2Rlc2MnIDogJ2FzYycsIHByZXZpb3VzLCBjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShmaWVsZHMpKSB7XG4gICAgICAgIGZpZWxkcyA9IFtmaWVsZHNdO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZmllbGQ6IHN0cmluZyA9IGZpZWxkc1tpXTtcbiAgICAgICAgbGV0IGZpcnN0ID0gcHJldmlvdXNbZmllbGRdIHx8ICcnO1xuICAgICAgICBsZXQgc2Vjb25kID0gY3VycmVudFtmaWVsZF0gfHwgJyc7XG5cbiAgICAgICAgaWYgKEhlbHBlcnMuaXNEYXRlKGZpcnN0KSAmJiBIZWxwZXJzLmlzRGF0ZShzZWNvbmQpKSB7XG4gICAgICAgICAgLy8gRGF0ZXNcbiAgICAgICAgICBmaXJzdCA9IGZpcnN0LmdldFRpbWUoKTtcbiAgICAgICAgICBzZWNvbmQgPSBzZWNvbmQuZ2V0VGltZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKEhlbHBlcnMuaXNTdHJpbmcoZmlyc3QpICYmIEhlbHBlcnMuaXNTdHJpbmcoc2Vjb25kKSkge1xuICAgICAgICAgIC8vIEJhc2ljIHN0cmluZ3NcbiAgICAgICAgICBmaXJzdCA9IGZpcnN0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgc2Vjb25kID0gc2Vjb25kLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTnVtYmVyc1xuICAgICAgICAgIGZpcnN0ID0gaXNOYU4oTnVtYmVyKGZpcnN0KSkgPyBmaXJzdCA6IE51bWJlcihmaXJzdCk7XG4gICAgICAgICAgc2Vjb25kID0gaXNOYU4oTnVtYmVyKHNlY29uZCkpID8gc2Vjb25kIDogTnVtYmVyKHNlY29uZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmlyc3QgPiBzZWNvbmQpIHtcbiAgICAgICAgICByZXR1cm4gcmV2ZXJzZSA/IC0xIDogMTtcbiAgICAgICAgfSBlbHNlIGlmIChmaXJzdCA8IHNlY29uZCkge1xuICAgICAgICAgIHJldHVybiByZXZlcnNlID8gMSA6IC0xO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZpbHRlckJ5RmllbGQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiAoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgbGV0IGZpZWxkID0gY2FuKGl0ZW0pLmhhdmUoa2V5KTtcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh2YWx1ZShmaWVsZCwgaXRlbSkpO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXN1bHRzLnB1c2godmFsdWUuaW5jbHVkZXMoZmllbGQpKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgaWYgKGZpZWxkIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgIGZpZWxkID0gZmllbGQuZ2V0VGltZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5taW4pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goZmllbGQgPj0gdmFsdWUubWluKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUubWF4KSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGZpZWxkIDw9IHZhbHVlLm1heCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLmFueSAmJiBBcnJheS5pc0FycmF5KHZhbHVlLmFueSkpIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZCkpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh2YWx1ZS5hbnkuc29tZSgodikgPT4gZmllbGQuaW5jbHVkZXModikpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlLmFueS5pbmNsdWRlcyhmaWVsZCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUuYWxsICYmIEFycmF5LmlzQXJyYXkodmFsdWUuYWxsKSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaCh2YWx1ZS5hbGwuZXZlcnkoKHYpID0+IGZpZWxkLmluY2x1ZGVzKHYpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLm5vdCkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaCghSGVscGVycy5maWx0ZXJCeUZpZWxkKGtleSwgdmFsdWUubm90KShpdGVtKSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBzdWJrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgICBpZiAoWydtaW4nLCAnbWF4JywgJ2FueScsICdhbGwnLCAnbm90J10uaW5kZXhPZihzdWJrZXkpIDwgMCkge1xuICAgICAgICAgICAgY29uc3Qgc3VidmFsdWUgPSB2YWx1ZVtzdWJrZXldO1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKEhlbHBlcnMuZmlsdGVyQnlGaWVsZChgJHtrZXl9LiR7c3Via2V5fWAsIHN1YnZhbHVlKShpdGVtKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzLnB1c2goSlNPTi5zdHJpbmdpZnkoZmllbGQpLm1hdGNoKG5ldyBSZWdFeHAodmFsdWUsICdnaScpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cy5ldmVyeSgoeCkgPT4geCk7XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kQW5jZXN0b3IoZWxlbWVudDogRWxlbWVudCwgc2VsZWN0b3I6IHN0cmluZyk6IEVsZW1lbnQge1xuICAgIHdoaWxlICgoZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudCkgJiYgIWVsZW1lbnQubWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBkZWVwQ2xvbmUoaXRlbTogYW55KTogYW55IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgY29uc3QgbmV3QXJyID0gW107XG4gICAgICBmb3IgKGxldCBpID0gaXRlbS5sZW5ndGg7IGktLSA+IDA7ICkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgIG5ld0FycltpXSA9IEhlbHBlcnMuZGVlcENsb25lKGl0ZW1baV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld0FycjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBpdGVtID09PSAnZnVuY3Rpb24nICYmICEvXFwoXFwpIFxceyBcXFtuYXRpdmUvLnRlc3QoaXRlbS50b1N0cmluZygpKSkge1xuICAgICAgbGV0IG9iajtcbiAgICAgIGZvciAoY29uc3QgayBpbiBpdGVtKSB7XG4gICAgICAgIGlmIChrIGluIGl0ZW0pIHtcbiAgICAgICAgICBvYmpba10gPSBIZWxwZXJzLmRlZXBDbG9uZShpdGVtW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYgKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgIGZvciAoY29uc3QgayBpbiBpdGVtKSB7XG4gICAgICAgIGlmIChrIGluIGl0ZW0pIHtcbiAgICAgICAgICBvYmpba10gPSBIZWxwZXJzLmRlZXBDbG9uZShpdGVtW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBzdGF0aWMgZGVlcEFzc2lnbiguLi5vYmpzKSB7XG4gICAgaWYgKG9ianMubGVuZ3RoIDwgMikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZWVkIHR3byBvciBtb3JlIG9iamVjdHMgdG8gbWVyZ2UnKTtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gT2JqZWN0LmFzc2lnbih7fSwgb2Jqc1swXSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvYmpzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzb3VyY2UgPSBPYmplY3QuYXNzaWduKHt9LCBvYmpzW2ldKTtcbiAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgaWYgKEhlbHBlcnMuaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBIZWxwZXJzLmlzT2JqZWN0KHRhcmdldFtwcm9wXSkpIHtcbiAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IEhlbHBlcnMuZGVlcEFzc2lnbih0YXJnZXRbcHJvcF0sIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBBcnJheS5pc0FycmF5KHRhcmdldFtwcm9wXSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEFycmF5ID0gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgoc291cmNlSXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpdGVtSW5kZXggPCB0YXJnZXRBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRJdGVtID0gdGFyZ2V0QXJyYXlbaXRlbUluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmlzKHRhcmdldEl0ZW0sIHNvdXJjZUl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChIZWxwZXJzLmlzT2JqZWN0KHRhcmdldEl0ZW0pICYmIEhlbHBlcnMuaXNPYmplY3Qoc291cmNlSXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5W2l0ZW1JbmRleF0gPSBIZWxwZXJzLmRlZXBBc3NpZ24odGFyZ2V0SXRlbSwgc291cmNlSXRlbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRhcmdldEl0ZW0pICYmIEFycmF5LmlzQXJyYXkoc291cmNlSXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5W2l0ZW1JbmRleF0gPSBIZWxwZXJzLmRlZXBBc3NpZ24odGFyZ2V0SXRlbSwgc291cmNlSXRlbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5W2l0ZW1JbmRleF0gPSBzb3VyY2VJdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUl0ZW0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFdvcmthcm91bmQgZm9yIEVkZ2UgYnJvd3NlciBzaW5jZSBFbGVtZW50Om5leHRFbGVtZW50U2libGluZyBpcyB1bmRlZmluZWQgaW5zaWRlIG9mIHRlbXBsYXRlIGRpcmVjdGl2ZXNcbiAgICogQHBhcmFtIGVsZW1lbnQgYW55IGRvY3VtZW50IGVsZW1lbnRcbiAgICogQHJldHVybnMgdGhlIG5leHQgc2libGluZyBub2RlIHRoYXQgaXMgb2YgdHlwZTogRWxlbWVudFxuICAgKi9cbiAgc3RhdGljIGdldE5leHRFbGVtZW50U2libGluZyhlbGVtZW50OiBFbGVtZW50KTogTm9kZSB7XG4gICAgaWYgKGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBlID0gZWxlbWVudC5uZXh0U2libGluZztcbiAgICAgIHdoaWxlIChlICYmIDEgIT09IGUubm9kZVR5cGUpIHtcbiAgICAgICAgZSA9IGUubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm4gZTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZGF0ZVRvT2JqZWN0KFxuICAgIGRhdGU6IERhdGUsXG4gICk6IHtcbiAgICBkYXk6IHN0cmluZztcbiAgICBkYXlQZXJpb2Q6IHN0cmluZztcbiAgICBlcmE6IHN0cmluZztcbiAgICBob3VyOiBzdHJpbmc7XG4gICAgbWludXRlOiBzdHJpbmc7XG4gICAgbW9udGg6IHN0cmluZztcbiAgICBzZWNvbmQ6IHN0cmluZztcbiAgICB3ZWVrZGF5OiBzdHJpbmc7XG4gICAgeWVhcjogc3RyaW5nO1xuICB9IHtcbiAgICBjb25zdCBkYXRlT2JqID0ge1xuICAgICAgZGF5OiAnJyxcbiAgICAgIGRheVBlcmlvZDogJycsXG4gICAgICBlcmE6ICcnLFxuICAgICAgaG91cjogJycsXG4gICAgICBtaW51dGU6ICcnLFxuICAgICAgbW9udGg6ICcnLFxuICAgICAgc2Vjb25kOiAnJyxcbiAgICAgIHdlZWtkYXk6ICcnLFxuICAgICAgeWVhcjogJycsXG4gICAgfTtcbiAgICBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgZXJhOiAnc2hvcnQnLFxuICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgfSlcbiAgICAgIC5mb3JtYXRUb1BhcnRzKGRhdGUpXG4gICAgICAuZm9yRWFjaCgoZGF0ZVRpbWVGb3JtYXRQYXJ0OiBJbnRsLkRhdGVUaW1lRm9ybWF0UGFydCkgPT4ge1xuICAgICAgICBpZiAoZGF0ZVRpbWVGb3JtYXRQYXJ0LnR5cGUgIT09ICdsaXRlcmFsJykge1xuICAgICAgICAgIGRhdGVPYmpbZGF0ZVRpbWVGb3JtYXRQYXJ0LnR5cGVdID0gZGF0ZVRpbWVGb3JtYXRQYXJ0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICByZXR1cm4gZGF0ZU9iajtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FuIHtcbiAgb2JqOiBPYmplY3Q7XG5cbiAgY29uc3RydWN0b3Iob2JqOiBPYmplY3QpIHtcbiAgICB0aGlzLm9iaiA9IG9iajtcbiAgfVxuXG4gIGhhdmUoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IHByb3BzID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgbGV0IGl0ZW06IGFueSA9IHRoaXMub2JqO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW0gPSBpdGVtW3Byb3BzW2ldXTtcbiAgICAgIGlmICh0aGlzLmNoZWNrKGl0ZW0pID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBjaGVjayh0aGluZzogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaW5nICE9PSB2b2lkIDA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbihvYmo6IGFueSkge1xuICByZXR1cm4gbmV3IENhbihvYmopO1xufVxuXG4vLyBBc3N1bWVzIGRhdGEgaXMgYWxyZWFkeSBzb3J0ZWRcbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlTZWFyY2g8VD4oaXRlbTogVCwgYXJyYXk6IFRbXSwgY29tcGFyZTogKGE6IFQsIGI6IFQpID0+IDEgfCAtMSB8IDAgfCB1bmRlZmluZWQpOiBUIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIHNlYXJjaCgwLCBhcnJheS5sZW5ndGggLSAxKTtcblxuICBmdW5jdGlvbiBzZWFyY2gobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKG1pbiA+IG1heCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgZ3Vlc3MgPSBtaW4gKyBNYXRoLmZsb29yKChtYXggLSBtaW4pIC8gMik7XG4gICAgY29uc3QgY29tcGFyaXNvbiA9IGNvbXBhcmUoaXRlbSwgYXJyYXlbZ3Vlc3NdKTtcblxuICAgIGlmIChjb21wYXJpc29uID09PSAwKSB7XG4gICAgICByZXR1cm4gYXJyYXlbZ3Vlc3NdO1xuICAgIH0gZWxzZSBpZiAoY29tcGFyaXNvbiA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBzZWFyY2gobWluLCBndWVzcyAtIDEpO1xuICAgIH0gZWxzZSBpZiAoY29tcGFyaXNvbiA9PT0gMSkge1xuICAgICAgcmV0dXJuIHNlYXJjaChndWVzcyArIDEsIG1heCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW5wdXQgbWlzbWF0Y2g6ICR7SlNPTi5zdHJpbmdpZnkoaXRlbSl9IG5vdCBjb21wYXJhYmxlIHRvICR7SlNPTi5zdHJpbmdpZnkoYXJyYXlbZ3Vlc3NdKX1gKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==