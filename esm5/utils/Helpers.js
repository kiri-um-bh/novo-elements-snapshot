/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return str.replace(/\$([\w\.]+)/g, function (original, key) {
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
        });
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
            formatString.forEach(function (format) {
                /** @type {?} */
                var isSuccess = true;
                /** @type {?} */
                var attempt = format.replace(/\$([\w\.]+)/g, function (original, key) {
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
                });
                if (isSuccess) {
                    successes_1.push(attempt);
                }
                else {
                    failures_1.push(attempt);
                }
            });
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
        return keys.every(function (key) {
            return props.hasOwnProperty(key.substr(1));
        });
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
        return function (previous, current) {
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
        };
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
        return function (item) {
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
                        results.push(value.any.some(function (v) { return field.includes(v); }));
                    }
                    else {
                        results.push(value.any.includes(field));
                    }
                }
                if (value.all && Array.isArray(value.all)) {
                    results.push(value.all.every(function (v) { return field.includes(v); }));
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
            return results.every(function (x) { return x; });
        };
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
            Object.keys(source).forEach(function (prop) {
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
                        value.forEach(function (sourceItem, itemIndex) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJ1dGlscy9IZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7OztJQUFBO0lBNlRBLENBQUM7SUE1VEM7OztPQUdHOzs7Ozs7SUFDSSxvQkFBWTs7Ozs7SUFBbkIsVUFBb0IsS0FBSztRQUN2QixJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7Ozs7SUFFTSxtQkFBVzs7Ozs7SUFBbEIsVUFBbUIsR0FBVyxFQUFFLEtBQVU7UUFDeEMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxVQUFDLFFBQVEsRUFBRSxHQUFHOztnQkFDM0MsSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztnQkFDckIsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7O29CQUNyQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDcEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBSSxLQUFLLE1BQUcsQ0FBQzthQUNwQztZQUNELE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTSwrQkFBdUI7Ozs7O0lBQTlCLFVBQStCLFlBQStCLEVBQUUsSUFBUztRQUN2RSwwRUFBMEU7UUFDMUUseUVBQXlFO1FBQ3pFLDJFQUEyRTtRQUMzRSxxQkFBcUI7UUFDckIsSUFB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QU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxtQkFBSzs7OztJQUFMLFVBQU0sS0FBVTtRQUNkLE9BQU8sS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDSCxVQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQzs7OztJQXJCQyxrQkFBWTs7Ozs7O0FBMEJkLE1BQU0sVUFBVSxHQUFHLENBQUMsR0FBUTtJQUMxQixPQUFPLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZHluYW1pY1xuZXhwb3J0IGNsYXNzIEhlbHBlcnMge1xuICAvKipcbiAgICogU3dhbGxvd3MgYW4gZXZlbnQgdG8gc3RvcCBmdXJ0aGVyIGV4ZWN1dGlvblxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIHN0YXRpYyBzd2FsbG93RXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaW50ZXJwb2xhdGUoc3RyOiBzdHJpbmcsIHByb3BzOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFwkKFtcXHdcXC5dKykvZywgKG9yaWdpbmFsLCBrZXkpID0+IHtcbiAgICAgIGxldCBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgICBsZXQgdmFsdWUgPSBwcm9wc1trZXlzLnNoaWZ0KCldO1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGV0IGsgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIHZhbHVlID0gayA/IHZhbHVlW2tdIDogYCR7dmFsdWV9LmA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDogJyc7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaW50ZXJwb2xhdGVXaXRoRmFsbGJhY2soZm9ybWF0U3RyaW5nOiBzdHJpbmcgfCBzdHJpbmdbXSwgZGF0YTogYW55KTogc3RyaW5nIHtcbiAgICAvLyBGb3JtYXQgc3RyaW5nIGNhbiBiZSBhbiBhcnJheSwgaXQgd2lsbCBhdHRlbXB0IHRvIGludGVycG9sYXRlIGVhY2ggaXRlbVxuICAgIC8vIGluIHRoZSBhcnJheSwgaWYgdGhlcmUgaXMgYSBmYWlsdXJlIHRvIHJlcGxhY2UgaXQgd2lsbCBtYXJrIGl0IGFzIHN1Y2hcbiAgICAvLyBJdCB3aWxsIGVpdGhlciByZXR1cm4gdGhlIGZpcnN0IHN1Y2Nlc3NmdWwgcmVwbGFjZW1lbnQgb2YgQUxMIHZhcmlhYmxlcyxcbiAgICAvLyBvciBhbiBlbXB0eSBzdHJpbmdcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmb3JtYXRTdHJpbmcpKSB7XG4gICAgICBsZXQgc3VjY2Vzc2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgbGV0IGZhaWx1cmVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgZm9ybWF0U3RyaW5nLmZvckVhY2goKGZvcm1hdDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGxldCBpc1N1Y2Nlc3M6IGJvb2xlYW4gPSB0cnVlO1xuICAgICAgICBsZXQgYXR0ZW1wdCA9IGZvcm1hdC5yZXBsYWNlKC9cXCQoW1xcd1xcLl0rKS9nLCAob3JpZ2luYWwsIGtleSkgPT4ge1xuICAgICAgICAgIGxldCBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgICAgICAgbGV0IHZhbHVlID0gZGF0YVtrZXlzLnNoaWZ0KCldO1xuICAgICAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgayA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhbHVlID0gayA/IHZhbHVlW2tdIDogYCR7dmFsdWV9LmA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc1N1Y2Nlc3MgJiYgSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgICAgaXNTdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBIZWxwZXJzLmlzRW1wdHkodmFsdWUpID8gJycgOiB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc1N1Y2Nlc3MpIHtcbiAgICAgICAgICBzdWNjZXNzZXMucHVzaChhdHRlbXB0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYWlsdXJlcy5wdXNoKGF0dGVtcHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChzdWNjZXNzZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBzdWNjZXNzZXNbMF07XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBIZWxwZXJzLmludGVycG9sYXRlKGZvcm1hdFN0cmluZywgZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIHRoYXQgYW4gb2JqZWN0IGhhcyBldmVyeSBwcm9wZXJ0eSBleHBlY3RlZCBieSBhIHN0cmluZyB0byBpbnRlcnBvbGF0ZVxuICAgKiBAcGFyYW0gc3RyICAgVGhlIHN0cmluZyB0byBpbnRlcnBvbGF0ZVxuICAgKiBAcGFyYW0gcHJvcHMgVGhlIHBhcmFtcyB0byByZXBsYWNlIGluIHN0cmluZy5cbiAgICovXG4gIHN0YXRpYyB2YWxpZGF0ZUludGVycG9sYXRpb25Qcm9wcyhzdHI6IHN0cmluZywgcHJvcHM6IGFueSk6IGJvb2xlYW4ge1xuICAgIGxldCBrZXlzID0gc3RyLm1hdGNoKC9cXCQoW1xcd1xcLl0rKS9nKTtcbiAgICByZXR1cm4ga2V5cy5ldmVyeSgoa2V5KSA9PiB7XG4gICAgICByZXR1cm4gcHJvcHMuaGFzT3duUHJvcGVydHkoa2V5LnN1YnN0cigxKSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaXNPYmplY3QoaXRlbSkge1xuICAgIHJldHVybiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSAmJiBpdGVtICE9PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIHN0cmluZ1xuICAgKi9cbiAgc3RhdGljIGlzU3RyaW5nKG9iajogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xuICB9XG5cbiAgc3RhdGljIGVzY2FwZVN0cmluZyhvYmo6IGFueSk6IGFueSB7XG4gICAgaWYgKEhlbHBlcnMuaXNTdHJpbmcob2JqKSkge1xuICAgICAgcmV0dXJuIG9iai5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgc3RhdGljIGlzTnVtYmVyKHZhbDogYW55LCBpbmNsdWRlTmVnYXRpdmVzOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBjb25zdCBudW1iZXJSZWdleCA9IGluY2x1ZGVOZWdhdGl2ZXMgPyAvXi17MCwxfVxcZCpcXC4/XFxkKiQvIDogL15cXGQqXFwuP1xcZCokLztcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB2YWwubGVuZ3RoID4gMCAmJiB2YWwgIT09ICcuJyAmJiBudW1iZXJSZWdleC50ZXN0KHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWwpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIGEgdW5kZWZpbmVkIG9yIG51bGxcbiAgICovXG4gIHN0YXRpYyBpc0JsYW5rKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSB1bmRlZmluZWQgb3IgbnVsbFxuICAgKi9cbiAgc3RhdGljIGlzRW1wdHkob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gSGVscGVycy5pc0JsYW5rKG9iaikgfHwgb2JqID09PSAnJyB8fCAoQXJyYXkuaXNBcnJheShvYmopICYmIG9iai5sZW5ndGggPT09IDApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIGZ1bmN0aW9uXG4gICAqL1xuICBzdGF0aWMgaXNGdW5jdGlvbihvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIShvYmogJiYgb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jYWxsICYmIG9iai5hcHBseSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIGEgRGF0ZVxuICAgKi9cbiAgc3RhdGljIGlzRGF0ZShvYmo6IGFueSkge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEYXRlO1xuICB9XG5cbiAgc3RhdGljIGNvbnZlcnRUb0FycmF5KG9iajogdW5rbm93bik6IGFueVtdIHtcbiAgICBpZiAob2JqID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIHJldHVybiBbb2JqXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHN0YXRpYyBzb3J0QnlGaWVsZChmaWVsZHM6IGFueSwgcmV2ZXJzZSA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIChwcmV2aW91czogYW55LCBjdXJyZW50OiBhbnkpID0+IHtcbiAgICAgIGlmIChIZWxwZXJzLmlzRnVuY3Rpb24oZmllbGRzKSkge1xuICAgICAgICByZXR1cm4gZmllbGRzKHJldmVyc2UgPyAnZGVzYycgOiAnYXNjJywgcHJldmlvdXMsIGN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGZpZWxkcykpIHtcbiAgICAgICAgZmllbGRzID0gW2ZpZWxkc107XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZmllbGQ6IHN0cmluZyA9IGZpZWxkc1tpXTtcbiAgICAgICAgbGV0IGZpcnN0ID0gcHJldmlvdXNbZmllbGRdIHx8ICcnO1xuICAgICAgICBsZXQgc2Vjb25kID0gY3VycmVudFtmaWVsZF0gfHwgJyc7XG5cbiAgICAgICAgaWYgKEhlbHBlcnMuaXNEYXRlKGZpcnN0KSAmJiBIZWxwZXJzLmlzRGF0ZShzZWNvbmQpKSB7XG4gICAgICAgICAgLy8gRGF0ZXNcbiAgICAgICAgICBmaXJzdCA9IGZpcnN0LmdldFRpbWUoKTtcbiAgICAgICAgICBzZWNvbmQgPSBzZWNvbmQuZ2V0VGltZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKEhlbHBlcnMuaXNTdHJpbmcoZmlyc3QpICYmIEhlbHBlcnMuaXNTdHJpbmcoc2Vjb25kKSkge1xuICAgICAgICAgIC8vIEJhc2ljIHN0cmluZ3NcbiAgICAgICAgICBmaXJzdCA9IGZpcnN0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgc2Vjb25kID0gc2Vjb25kLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTnVtYmVyc1xuICAgICAgICAgIGZpcnN0ID0gaXNOYU4oTnVtYmVyKGZpcnN0KSkgPyBmaXJzdCA6IE51bWJlcihmaXJzdCk7XG4gICAgICAgICAgc2Vjb25kID0gaXNOYU4oTnVtYmVyKHNlY29uZCkpID8gc2Vjb25kIDogTnVtYmVyKHNlY29uZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmlyc3QgPiBzZWNvbmQpIHtcbiAgICAgICAgICByZXR1cm4gcmV2ZXJzZSA/IC0xIDogMTtcbiAgICAgICAgfSBlbHNlIGlmIChmaXJzdCA8IHNlY29uZCkge1xuICAgICAgICAgIHJldHVybiByZXZlcnNlID8gMSA6IC0xO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZpbHRlckJ5RmllbGQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiAoaXRlbSkgPT4ge1xuICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICAgIGxldCBmaWVsZCA9IGNhbihpdGVtKS5oYXZlKGtleSk7XG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICByZXN1bHRzLnB1c2godmFsdWUoZmllbGQsIGl0ZW0pKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlLmluY2x1ZGVzKGZpZWxkKSk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIGlmIChmaWVsZCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBmaWVsZCA9IGZpZWxkLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUubWluKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGZpZWxkID49IHZhbHVlLm1pbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLm1heCkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChmaWVsZCA8PSB2YWx1ZS5tYXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5hbnkgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZS5hbnkpKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQpKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2godmFsdWUuYW55LnNvbWUoKHYpID0+IGZpZWxkLmluY2x1ZGVzKHYpKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh2YWx1ZS5hbnkuaW5jbHVkZXMoZmllbGQpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLmFsbCAmJiBBcnJheS5pc0FycmF5KHZhbHVlLmFsbCkpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2godmFsdWUuYWxsLmV2ZXJ5KCh2KSA9PiBmaWVsZC5pbmNsdWRlcyh2KSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5ub3QpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goIUhlbHBlcnMuZmlsdGVyQnlGaWVsZChrZXksIHZhbHVlLm5vdCkoaXRlbSkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHN1YmtleSBpbiB2YWx1ZSkge1xuICAgICAgICAgIGlmIChbJ21pbicsICdtYXgnLCAnYW55JywgJ2FsbCcsICdub3QnXS5pbmRleE9mKHN1YmtleSkgPCAwKSB7XG4gICAgICAgICAgICBsZXQgc3VidmFsdWUgPSB2YWx1ZVtzdWJrZXldO1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKEhlbHBlcnMuZmlsdGVyQnlGaWVsZChgJHtrZXl9LiR7c3Via2V5fWAsIHN1YnZhbHVlKShpdGVtKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzLnB1c2goSlNPTi5zdHJpbmdpZnkoZmllbGQpLm1hdGNoKG5ldyBSZWdFeHAodmFsdWUsICdnaScpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cy5ldmVyeSgoeCkgPT4geCk7XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kQW5jZXN0b3IoZWxlbWVudDogRWxlbWVudCwgc2VsZWN0b3I6IHN0cmluZyk6IEVsZW1lbnQge1xuICAgIHdoaWxlICgoZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudCkgJiYgIWVsZW1lbnQubWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBkZWVwQ2xvbmUoaXRlbTogYW55KTogYW55IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgbGV0IG5ld0FyciA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IGl0ZW0ubGVuZ3RoOyBpLS0gPiAwOyApIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICBuZXdBcnJbaV0gPSBIZWxwZXJzLmRlZXBDbG9uZShpdGVtW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdBcnI7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ2Z1bmN0aW9uJyAmJiAhL1xcKFxcKSBcXHsgXFxbbmF0aXZlLy50ZXN0KGl0ZW0udG9TdHJpbmcoKSkpIHtcbiAgICAgIGxldCBvYmo7XG4gICAgICBldmFsKCdvYmogPSAnICsgaXRlbS50b1N0cmluZygpKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgZm9yIChsZXQgayBpbiBpdGVtKSB7XG4gICAgICAgIGlmIChrIGluIGl0ZW0pIHtcbiAgICAgICAgICBvYmpba10gPSBIZWxwZXJzLmRlZXBDbG9uZShpdGVtW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYgKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICBsZXQgb2JqID0ge307XG4gICAgICBmb3IgKGxldCBrIGluIGl0ZW0pIHtcbiAgICAgICAgaWYgKGsgaW4gaXRlbSkge1xuICAgICAgICAgIG9ialtrXSA9IEhlbHBlcnMuZGVlcENsb25lKGl0ZW1ba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIHN0YXRpYyBkZWVwQXNzaWduKC4uLm9ianMpIHtcbiAgICBpZiAob2Jqcy5sZW5ndGggPCAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05lZWQgdHdvIG9yIG1vcmUgb2JqZWN0cyB0byBtZXJnZScpO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBPYmplY3QuYXNzaWduKHt9LCBvYmpzWzBdKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG9ianMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHNvdXJjZSA9IE9iamVjdC5hc3NpZ24oe30sIG9ianNbaV0pO1xuICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gc291cmNlW3Byb3BdO1xuICAgICAgICBpZiAoSGVscGVycy5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0Lmhhc093blByb3BlcnR5KHByb3ApICYmIEhlbHBlcnMuaXNPYmplY3QodGFyZ2V0W3Byb3BdKSkge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gSGVscGVycy5kZWVwQXNzaWduKHRhcmdldFtwcm9wXSwgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0Lmhhc093blByb3BlcnR5KHByb3ApICYmIEFycmF5LmlzQXJyYXkodGFyZ2V0W3Byb3BdKSkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0QXJyYXkgPSB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKChzb3VyY2VJdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW1JbmRleCA8IHRhcmdldEFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0YXJnZXRBcnJheVtpdGVtSW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QuaXModGFyZ2V0SXRlbSwgc291cmNlSXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKEhlbHBlcnMuaXNPYmplY3QodGFyZ2V0SXRlbSkgJiYgSGVscGVycy5pc09iamVjdChzb3VyY2VJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0QXJyYXlbaXRlbUluZGV4XSA9IEhlbHBlcnMuZGVlcEFzc2lnbih0YXJnZXRJdGVtLCBzb3VyY2VJdGVtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0SXRlbSkgJiYgQXJyYXkuaXNBcnJheShzb3VyY2VJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0QXJyYXlbaXRlbUluZGV4XSA9IEhlbHBlcnMuZGVlcEFzc2lnbih0YXJnZXRJdGVtLCBzb3VyY2VJdGVtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0QXJyYXlbaXRlbUluZGV4XSA9IHNvdXJjZUl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldEFycmF5LnB1c2goc291cmNlSXRlbSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogV29ya2Fyb3VuZCBmb3IgRWRnZSBicm93c2VyIHNpbmNlIEVsZW1lbnQ6bmV4dEVsZW1lbnRTaWJsaW5nIGlzIHVuZGVmaW5lZCBpbnNpZGUgb2YgdGVtcGxhdGUgZGlyZWN0aXZlc1xuICAgKiBAcGFyYW0gZWxlbWVudCBhbnkgZG9jdW1lbnQgZWxlbWVudFxuICAgKiBAcmV0dXJucyB0aGUgbmV4dCBzaWJsaW5nIG5vZGUgdGhhdCBpcyBvZiB0eXBlOiBFbGVtZW50XG4gICAqL1xuICBzdGF0aWMgZ2V0TmV4dEVsZW1lbnRTaWJsaW5nKGVsZW1lbnQ6IEVsZW1lbnQpOiBOb2RlIHtcbiAgICBpZiAoZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgIHJldHVybiBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGUgPSBlbGVtZW50Lm5leHRTaWJsaW5nO1xuICAgICAgd2hpbGUgKGUgJiYgMSAhPT0gZS5ub2RlVHlwZSkge1xuICAgICAgICBlID0gZS5uZXh0U2libGluZztcbiAgICAgIH1cbiAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FuIHtcbiAgb2JqOiBPYmplY3Q7XG5cbiAgY29uc3RydWN0b3Iob2JqOiBPYmplY3QpIHtcbiAgICB0aGlzLm9iaiA9IG9iajtcbiAgfVxuXG4gIGhhdmUoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIGxldCBwcm9wcyA9IGtleS5zcGxpdCgnLicpO1xuICAgIGxldCBpdGVtOiBhbnkgPSB0aGlzLm9iajtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtID0gaXRlbVtwcm9wc1tpXV07XG4gICAgICBpZiAodGhpcy5jaGVjayhpdGVtKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgY2hlY2sodGhpbmc6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGluZyAhPT0gdm9pZCAwO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIG9ialxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FuKG9iajogYW55KSB7XG4gIHJldHVybiBuZXcgQ2FuKG9iaik7XG59XG4iXX0=