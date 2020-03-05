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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJ1dGlscy9IZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7SUFBQTtJQTJXQSxDQUFDO0lBMVdDOzs7T0FHRzs7Ozs7O0lBQ0ksb0JBQVk7Ozs7O0lBQW5CLFVBQW9CLEtBQUs7UUFDdkIsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sbUJBQVc7Ozs7O0lBQWxCLFVBQW1CLEdBQVcsRUFBRSxLQUFVO1FBQ3hDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0QixLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztRQUNELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjOzs7OztRQUFFLFVBQUMsUUFBZ0IsRUFBRSxHQUFXOztnQkFDekQsSUFBSSxHQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztnQkFDakMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7O29CQUNuQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDdEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBSSxLQUFLLE1BQUcsQ0FBQzthQUNwQztZQUNELE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDMUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7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RyxDQUFDLENBQUM7U0FDOUc7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBkeW5hbWljXG5leHBvcnQgY2xhc3MgSGVscGVycyB7XG4gIC8qKlxuICAgKiBTd2FsbG93cyBhbiBldmVudCB0byBzdG9wIGZ1cnRoZXIgZXhlY3V0aW9uXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgc3RhdGljIHN3YWxsb3dFdmVudChldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBpbnRlcnBvbGF0ZShzdHI6IHN0cmluZywgcHJvcHM6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuaXNEYXRlKHByb3BzKSkge1xuICAgICAgcHJvcHMgPSB0aGlzLmRhdGVUb09iamVjdChwcm9wcyk7XG4gICAgfVxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFwkKFtcXHdcXC5dKykvZywgKG9yaWdpbmFsOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBrZXlzOiBzdHJpbmdbXSA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgbGV0IHZhbHVlID0gcHJvcHNba2V5cy5zaGlmdCgpXTtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGsgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIHZhbHVlID0gayA/IHZhbHVlW2tdIDogYCR7dmFsdWV9LmA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDogJyc7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaW50ZXJwb2xhdGVXaXRoRmFsbGJhY2soZm9ybWF0U3RyaW5nOiBzdHJpbmcgfCBzdHJpbmdbXSwgZGF0YTogYW55KTogc3RyaW5nIHtcbiAgICAvLyBGb3JtYXQgc3RyaW5nIGNhbiBiZSBhbiBhcnJheSwgaXQgd2lsbCBhdHRlbXB0IHRvIGludGVycG9sYXRlIGVhY2ggaXRlbVxuICAgIC8vIGluIHRoZSBhcnJheSwgaWYgdGhlcmUgaXMgYSBmYWlsdXJlIHRvIHJlcGxhY2UgaXQgd2lsbCBtYXJrIGl0IGFzIHN1Y2hcbiAgICAvLyBJdCB3aWxsIGVpdGhlciByZXR1cm4gdGhlIGZpcnN0IHN1Y2Nlc3NmdWwgcmVwbGFjZW1lbnQgb2YgQUxMIHZhcmlhYmxlcyxcbiAgICAvLyBvciBhbiBlbXB0eSBzdHJpbmdcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmb3JtYXRTdHJpbmcpKSB7XG4gICAgICBjb25zdCBzdWNjZXNzZXM6IHN0cmluZ1tdID0gW107XG4gICAgICBjb25zdCBmYWlsdXJlczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGZvcm1hdFN0cmluZy5mb3JFYWNoKChmb3JtYXQ6IHN0cmluZykgPT4ge1xuICAgICAgICBsZXQgaXNTdWNjZXNzOiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgYXR0ZW1wdCA9IGZvcm1hdC5yZXBsYWNlKC9cXCQoW1xcd1xcLl0rKS9nLCAob3JpZ2luYWwsIGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgICAgICBsZXQgdmFsdWUgPSBkYXRhW2tleXMuc2hpZnQoKV07XG4gICAgICAgICAgd2hpbGUgKGtleXMubGVuZ3RoICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YWx1ZSA9IGsgPyB2YWx1ZVtrXSA6IGAke3ZhbHVlfS5gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNTdWNjZXNzICYmIEhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlzU3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gSGVscGVycy5pc0VtcHR5KHZhbHVlKSA/ICcnIDogdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgc3VjY2Vzc2VzLnB1c2goYXR0ZW1wdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmFpbHVyZXMucHVzaChhdHRlbXB0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoc3VjY2Vzc2VzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gc3VjY2Vzc2VzWzBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gSGVscGVycy5pbnRlcnBvbGF0ZShmb3JtYXRTdHJpbmcsIGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyB0aGF0IGFuIG9iamVjdCBoYXMgZXZlcnkgcHJvcGVydHkgZXhwZWN0ZWQgYnkgYSBzdHJpbmcgdG8gaW50ZXJwb2xhdGVcbiAgICogQHBhcmFtIHN0ciAgIFRoZSBzdHJpbmcgdG8gaW50ZXJwb2xhdGVcbiAgICogQHBhcmFtIHByb3BzIFRoZSBwYXJhbXMgdG8gcmVwbGFjZSBpbiBzdHJpbmcuXG4gICAqL1xuICBzdGF0aWMgdmFsaWRhdGVJbnRlcnBvbGF0aW9uUHJvcHMoc3RyOiBzdHJpbmcsIHByb3BzOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBrZXlzID0gc3RyLm1hdGNoKC9cXCQoW1xcd1xcLl0rKS9nKTtcbiAgICByZXR1cm4ga2V5cy5ldmVyeSgoa2V5KSA9PiB7XG4gICAgICByZXR1cm4gcHJvcHMuaGFzT3duUHJvcGVydHkoa2V5LnN1YnN0cigxKSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaXNPYmplY3QoaXRlbSkge1xuICAgIHJldHVybiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSAmJiBpdGVtICE9PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIHN0cmluZ1xuICAgKi9cbiAgc3RhdGljIGlzU3RyaW5nKG9iajogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xuICB9XG5cbiAgc3RhdGljIGVzY2FwZVN0cmluZyhvYmo6IGFueSk6IGFueSB7XG4gICAgaWYgKEhlbHBlcnMuaXNTdHJpbmcob2JqKSkge1xuICAgICAgcmV0dXJuIG9iai5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgc3RhdGljIGlzTnVtYmVyKHZhbDogYW55LCBpbmNsdWRlTmVnYXRpdmVzOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBjb25zdCBudW1iZXJSZWdleCA9IGluY2x1ZGVOZWdhdGl2ZXMgPyAvXi17MCwxfVxcZCpcXC4/XFxkKiQvIDogL15cXGQqXFwuP1xcZCokLztcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB2YWwubGVuZ3RoID4gMCAmJiB2YWwgIT09ICcuJyAmJiBudW1iZXJSZWdleC50ZXN0KHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWwpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIGEgdW5kZWZpbmVkIG9yIG51bGxcbiAgICovXG4gIHN0YXRpYyBpc0JsYW5rKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSB1bmRlZmluZWQgb3IgbnVsbFxuICAgKi9cbiAgc3RhdGljIGlzRW1wdHkob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gSGVscGVycy5pc0JsYW5rKG9iaikgfHwgb2JqID09PSAnJyB8fCAoQXJyYXkuaXNBcnJheShvYmopICYmIG9iai5sZW5ndGggPT09IDApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIGZ1bmN0aW9uXG4gICAqL1xuICBzdGF0aWMgaXNGdW5jdGlvbihvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIShvYmogJiYgb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jYWxsICYmIG9iai5hcHBseSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIGEgRGF0ZVxuICAgKi9cbiAgc3RhdGljIGlzRGF0ZShvYmo6IGFueSkge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEYXRlO1xuICB9XG5cbiAgc3RhdGljIGNvbnZlcnRUb0FycmF5KG9iajogdW5rbm93bik6IGFueVtdIHtcbiAgICBpZiAob2JqID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIHJldHVybiBbb2JqXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHN0YXRpYyBzb3J0QnlGaWVsZChmaWVsZHM6IGFueSwgcmV2ZXJzZSA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIChwcmV2aW91czogYW55LCBjdXJyZW50OiBhbnkpID0+IHtcbiAgICAgIGlmIChIZWxwZXJzLmlzRnVuY3Rpb24oZmllbGRzKSkge1xuICAgICAgICByZXR1cm4gZmllbGRzKHJldmVyc2UgPyAnZGVzYycgOiAnYXNjJywgcHJldmlvdXMsIGN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGZpZWxkcykpIHtcbiAgICAgICAgZmllbGRzID0gW2ZpZWxkc107XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBmaWVsZDogc3RyaW5nID0gZmllbGRzW2ldO1xuICAgICAgICBsZXQgZmlyc3QgPSBwcmV2aW91c1tmaWVsZF0gfHwgJyc7XG4gICAgICAgIGxldCBzZWNvbmQgPSBjdXJyZW50W2ZpZWxkXSB8fCAnJztcblxuICAgICAgICBpZiAoSGVscGVycy5pc0RhdGUoZmlyc3QpICYmIEhlbHBlcnMuaXNEYXRlKHNlY29uZCkpIHtcbiAgICAgICAgICAvLyBEYXRlc1xuICAgICAgICAgIGZpcnN0ID0gZmlyc3QuZ2V0VGltZSgpO1xuICAgICAgICAgIHNlY29uZCA9IHNlY29uZC5nZXRUaW1lKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoSGVscGVycy5pc1N0cmluZyhmaXJzdCkgJiYgSGVscGVycy5pc1N0cmluZyhzZWNvbmQpKSB7XG4gICAgICAgICAgLy8gQmFzaWMgc3RyaW5nc1xuICAgICAgICAgIGZpcnN0ID0gZmlyc3QudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBzZWNvbmQgPSBzZWNvbmQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBOdW1iZXJzXG4gICAgICAgICAgZmlyc3QgPSBpc05hTihOdW1iZXIoZmlyc3QpKSA/IGZpcnN0IDogTnVtYmVyKGZpcnN0KTtcbiAgICAgICAgICBzZWNvbmQgPSBpc05hTihOdW1iZXIoc2Vjb25kKSkgPyBzZWNvbmQgOiBOdW1iZXIoc2Vjb25kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaXJzdCA+IHNlY29uZCkge1xuICAgICAgICAgIHJldHVybiByZXZlcnNlID8gLTEgOiAxO1xuICAgICAgICB9IGVsc2UgaWYgKGZpcnN0IDwgc2Vjb25kKSB7XG4gICAgICAgICAgcmV0dXJuIHJldmVyc2UgPyAxIDogLTE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZmlsdGVyQnlGaWVsZChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIChpdGVtKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICBsZXQgZmllbGQgPSBjYW4oaXRlbSkuaGF2ZShrZXkpO1xuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlKGZpZWxkLCBpdGVtKSk7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh2YWx1ZS5pbmNsdWRlcyhmaWVsZCkpO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICBpZiAoZmllbGQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZmllbGQgPSBmaWVsZC5nZXRUaW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLm1pbikge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChmaWVsZCA+PSB2YWx1ZS5taW4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5tYXgpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goZmllbGQgPD0gdmFsdWUubWF4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUuYW55ICYmIEFycmF5LmlzQXJyYXkodmFsdWUuYW55KSkge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkKSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlLmFueS5zb21lKCh2KSA9PiBmaWVsZC5pbmNsdWRlcyh2KSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2godmFsdWUuYW55LmluY2x1ZGVzKGZpZWxkKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5hbGwgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZS5hbGwpKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlLmFsbC5ldmVyeSgodikgPT4gZmllbGQuaW5jbHVkZXModikpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUubm90KSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKCFIZWxwZXJzLmZpbHRlckJ5RmllbGQoa2V5LCB2YWx1ZS5ub3QpKGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHN1YmtleSBpbiB2YWx1ZSkge1xuICAgICAgICAgIGlmIChbJ21pbicsICdtYXgnLCAnYW55JywgJ2FsbCcsICdub3QnXS5pbmRleE9mKHN1YmtleSkgPCAwKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJ2YWx1ZSA9IHZhbHVlW3N1YmtleV07XG4gICAgICAgICAgICByZXN1bHRzLnB1c2goSGVscGVycy5maWx0ZXJCeUZpZWxkKGAke2tleX0uJHtzdWJrZXl9YCwgc3VidmFsdWUpKGl0ZW0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChKU09OLnN0cmluZ2lmeShmaWVsZCkubWF0Y2gobmV3IFJlZ0V4cCh2YWx1ZSwgJ2dpJykpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzLmV2ZXJ5KCh4KSA9PiB4KTtcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZpbmRBbmNlc3RvcihlbGVtZW50OiBFbGVtZW50LCBzZWxlY3Rvcjogc3RyaW5nKTogRWxlbWVudCB7XG4gICAgd2hpbGUgKChlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50KSAmJiAhZWxlbWVudC5tYXRjaGVzLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGRlZXBDbG9uZShpdGVtOiBhbnkpOiBhbnkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICBjb25zdCBuZXdBcnIgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSBpdGVtLmxlbmd0aDsgaS0tID4gMDsgKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgbmV3QXJyW2ldID0gSGVscGVycy5kZWVwQ2xvbmUoaXRlbVtpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3QXJyO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdmdW5jdGlvbicgJiYgIS9cXChcXCkgXFx7IFxcW25hdGl2ZS8udGVzdChpdGVtLnRvU3RyaW5nKCkpKSB7XG4gICAgICBsZXQgb2JqO1xuICAgICAgZXZhbCgnb2JqID0gJyArIGl0ZW0udG9TdHJpbmcoKSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIGZvciAoY29uc3QgayBpbiBpdGVtKSB7XG4gICAgICAgIGlmIChrIGluIGl0ZW0pIHtcbiAgICAgICAgICBvYmpba10gPSBIZWxwZXJzLmRlZXBDbG9uZShpdGVtW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYgKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgIGZvciAoY29uc3QgayBpbiBpdGVtKSB7XG4gICAgICAgIGlmIChrIGluIGl0ZW0pIHtcbiAgICAgICAgICBvYmpba10gPSBIZWxwZXJzLmRlZXBDbG9uZShpdGVtW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBzdGF0aWMgZGVlcEFzc2lnbiguLi5vYmpzKSB7XG4gICAgaWYgKG9ianMubGVuZ3RoIDwgMikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZWVkIHR3byBvciBtb3JlIG9iamVjdHMgdG8gbWVyZ2UnKTtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gT2JqZWN0LmFzc2lnbih7fSwgb2Jqc1swXSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvYmpzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzb3VyY2UgPSBPYmplY3QuYXNzaWduKHt9LCBvYmpzW2ldKTtcbiAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgaWYgKEhlbHBlcnMuaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBIZWxwZXJzLmlzT2JqZWN0KHRhcmdldFtwcm9wXSkpIHtcbiAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IEhlbHBlcnMuZGVlcEFzc2lnbih0YXJnZXRbcHJvcF0sIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBBcnJheS5pc0FycmF5KHRhcmdldFtwcm9wXSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEFycmF5ID0gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgoc291cmNlSXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpdGVtSW5kZXggPCB0YXJnZXRBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRJdGVtID0gdGFyZ2V0QXJyYXlbaXRlbUluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmlzKHRhcmdldEl0ZW0sIHNvdXJjZUl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChIZWxwZXJzLmlzT2JqZWN0KHRhcmdldEl0ZW0pICYmIEhlbHBlcnMuaXNPYmplY3Qoc291cmNlSXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5W2l0ZW1JbmRleF0gPSBIZWxwZXJzLmRlZXBBc3NpZ24odGFyZ2V0SXRlbSwgc291cmNlSXRlbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRhcmdldEl0ZW0pICYmIEFycmF5LmlzQXJyYXkoc291cmNlSXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5W2l0ZW1JbmRleF0gPSBIZWxwZXJzLmRlZXBBc3NpZ24odGFyZ2V0SXRlbSwgc291cmNlSXRlbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5W2l0ZW1JbmRleF0gPSBzb3VyY2VJdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUl0ZW0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFdvcmthcm91bmQgZm9yIEVkZ2UgYnJvd3NlciBzaW5jZSBFbGVtZW50Om5leHRFbGVtZW50U2libGluZyBpcyB1bmRlZmluZWQgaW5zaWRlIG9mIHRlbXBsYXRlIGRpcmVjdGl2ZXNcbiAgICogQHBhcmFtIGVsZW1lbnQgYW55IGRvY3VtZW50IGVsZW1lbnRcbiAgICogQHJldHVybnMgdGhlIG5leHQgc2libGluZyBub2RlIHRoYXQgaXMgb2YgdHlwZTogRWxlbWVudFxuICAgKi9cbiAgc3RhdGljIGdldE5leHRFbGVtZW50U2libGluZyhlbGVtZW50OiBFbGVtZW50KTogTm9kZSB7XG4gICAgaWYgKGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBlID0gZWxlbWVudC5uZXh0U2libGluZztcbiAgICAgIHdoaWxlIChlICYmIDEgIT09IGUubm9kZVR5cGUpIHtcbiAgICAgICAgZSA9IGUubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm4gZTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZGF0ZVRvT2JqZWN0KFxuICAgIGRhdGU6IERhdGUsXG4gICk6IHtcbiAgICBkYXk6IHN0cmluZztcbiAgICBkYXlQZXJpb2Q6IHN0cmluZztcbiAgICBlcmE6IHN0cmluZztcbiAgICBob3VyOiBzdHJpbmc7XG4gICAgbWludXRlOiBzdHJpbmc7XG4gICAgbW9udGg6IHN0cmluZztcbiAgICBzZWNvbmQ6IHN0cmluZztcbiAgICB3ZWVrZGF5OiBzdHJpbmc7XG4gICAgeWVhcjogc3RyaW5nO1xuICB9IHtcbiAgICBjb25zdCBkYXRlT2JqID0ge1xuICAgICAgZGF5OiAnJyxcbiAgICAgIGRheVBlcmlvZDogJycsXG4gICAgICBlcmE6ICcnLFxuICAgICAgaG91cjogJycsXG4gICAgICBtaW51dGU6ICcnLFxuICAgICAgbW9udGg6ICcnLFxuICAgICAgc2Vjb25kOiAnJyxcbiAgICAgIHdlZWtkYXk6ICcnLFxuICAgICAgeWVhcjogJycsXG4gICAgfTtcbiAgICBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgZXJhOiAnc2hvcnQnLFxuICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgfSlcbiAgICAgIC5mb3JtYXRUb1BhcnRzKGRhdGUpXG4gICAgICAuZm9yRWFjaCgoZGF0ZVRpbWVGb3JtYXRQYXJ0OiBJbnRsLkRhdGVUaW1lRm9ybWF0UGFydCkgPT4ge1xuICAgICAgICBpZiAoZGF0ZVRpbWVGb3JtYXRQYXJ0LnR5cGUgIT09ICdsaXRlcmFsJykge1xuICAgICAgICAgIGRhdGVPYmpbZGF0ZVRpbWVGb3JtYXRQYXJ0LnR5cGVdID0gZGF0ZVRpbWVGb3JtYXRQYXJ0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICByZXR1cm4gZGF0ZU9iajtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FuIHtcbiAgb2JqOiBPYmplY3Q7XG5cbiAgY29uc3RydWN0b3Iob2JqOiBPYmplY3QpIHtcbiAgICB0aGlzLm9iaiA9IG9iajtcbiAgfVxuXG4gIGhhdmUoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IHByb3BzID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgbGV0IGl0ZW06IGFueSA9IHRoaXMub2JqO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW0gPSBpdGVtW3Byb3BzW2ldXTtcbiAgICAgIGlmICh0aGlzLmNoZWNrKGl0ZW0pID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBjaGVjayh0aGluZzogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaW5nICE9PSB2b2lkIDA7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gb2JqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYW4ob2JqOiBhbnkpIHtcbiAgcmV0dXJuIG5ldyBDYW4ob2JqKTtcbn1cblxuLy8gQXNzdW1lcyBkYXRhIGlzIGFscmVhZHkgc29ydGVkXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoPFQ+KGl0ZW06IFQsIGFycmF5OiBUW10sIGNvbXBhcmU6IChhOiBULCBiOiBUKSA9PiAxIHwgLTEgfCAwIHwgdW5kZWZpbmVkKTogVCB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBzZWFyY2goMCwgYXJyYXkubGVuZ3RoIC0gMSk7XG5cbiAgZnVuY3Rpb24gc2VhcmNoKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IFQgfCB1bmRlZmluZWQge1xuICAgIGlmIChtaW4gPiBtYXgpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IGd1ZXNzID0gbWluICsgTWF0aC5mbG9vcigobWF4IC0gbWluKSAvIDIpO1xuICAgIGNvbnN0IGNvbXBhcmlzb24gPSBjb21wYXJlKGl0ZW0sIGFycmF5W2d1ZXNzXSk7XG5cbiAgICBpZiAoY29tcGFyaXNvbiA9PT0gMCkge1xuICAgICAgcmV0dXJuIGFycmF5W2d1ZXNzXTtcbiAgICB9IGVsc2UgaWYgKGNvbXBhcmlzb24gPT09IC0xKSB7XG4gICAgICByZXR1cm4gc2VhcmNoKG1pbiwgZ3Vlc3MgLSAxKTtcbiAgICB9IGVsc2UgaWYgKGNvbXBhcmlzb24gPT09IDEpIHtcbiAgICAgIHJldHVybiBzZWFyY2goZ3Vlc3MgKyAxLCBtYXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYElucHV0IG1pc21hdGNoOiAke0pTT04uc3RyaW5naWZ5KGl0ZW0pfSBub3QgY29tcGFyYWJsZSB0byAke0pTT04uc3RyaW5naWZ5KGFycmF5W2d1ZXNzXSl9YCk7XG4gICAgfVxuICB9XG59XG4iXX0=