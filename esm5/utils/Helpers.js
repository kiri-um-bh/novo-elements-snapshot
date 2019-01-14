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
    Helpers.isNumber = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return obj && !isNaN(parseInt(obj, 10));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJ1dGlscy9IZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7OztJQUFBO0lBd1NBLENBQUM7SUF2U0M7OztPQUdHOzs7Ozs7SUFDSSxvQkFBWTs7Ozs7SUFBbkIsVUFBb0IsS0FBSztRQUN2QixJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7Ozs7SUFFTSxtQkFBVzs7Ozs7SUFBbEIsVUFBbUIsR0FBVyxFQUFFLEtBQVU7UUFDeEMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxVQUFDLFFBQVEsRUFBRSxHQUFHOztnQkFDM0MsSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztnQkFDckIsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7O29CQUNyQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDcEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBSSxLQUFLLE1BQUcsQ0FBQzthQUNwQztZQUNELE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTSwrQkFBdUI7Ozs7O0lBQTlCLFVBQStCLFlBQStCLEVBQUUsSUFBUztRQUN2RSwwRUFBMEU7UUFDMUUseUVBQXlFO1FBQ3pFLDJFQUEyRTtRQUMzRSxxQkFBcUI7UUFDckIsSUFB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QyxLQUFLLENBQUMsR0FBRyxDQUFDOztZQUN0QixJQUFJLEdBQVEsSUFBSSxDQUFDLEdBQUc7UUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFO2dCQUM5QixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsbUJBQUs7Ozs7SUFBTCxVQUFNLEtBQVU7UUFDZCxPQUFPLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0gsVUFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7Ozs7SUFyQkMsa0JBQVk7Ozs7OztBQTBCZCxNQUFNLFVBQVUsR0FBRyxDQUFDLEdBQVE7SUFDMUIsT0FBTyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGR5bmFtaWNcbmV4cG9ydCBjbGFzcyBIZWxwZXJzIHtcbiAgLyoqXG4gICAqIFN3YWxsb3dzIGFuIGV2ZW50IHRvIHN0b3AgZnVydGhlciBleGVjdXRpb25cbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBzdGF0aWMgc3dhbGxvd0V2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGludGVycG9sYXRlKHN0cjogc3RyaW5nLCBwcm9wczogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcJChbXFx3XFwuXSspL2csIChvcmlnaW5hbCwga2V5KSA9PiB7XG4gICAgICBsZXQga2V5cyA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgbGV0IHZhbHVlID0gcHJvcHNba2V5cy5zaGlmdCgpXTtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCBrID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICB2YWx1ZSA9IGsgPyB2YWx1ZVtrXSA6IGAke3ZhbHVlfS5gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6ICcnO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGludGVycG9sYXRlV2l0aEZhbGxiYWNrKGZvcm1hdFN0cmluZzogc3RyaW5nIHwgc3RyaW5nW10sIGRhdGE6IGFueSk6IHN0cmluZyB7XG4gICAgLy8gRm9ybWF0IHN0cmluZyBjYW4gYmUgYW4gYXJyYXksIGl0IHdpbGwgYXR0ZW1wdCB0byBpbnRlcnBvbGF0ZSBlYWNoIGl0ZW1cbiAgICAvLyBpbiB0aGUgYXJyYXksIGlmIHRoZXJlIGlzIGEgZmFpbHVyZSB0byByZXBsYWNlIGl0IHdpbGwgbWFyayBpdCBhcyBzdWNoXG4gICAgLy8gSXQgd2lsbCBlaXRoZXIgcmV0dXJuIHRoZSBmaXJzdCBzdWNjZXNzZnVsIHJlcGxhY2VtZW50IG9mIEFMTCB2YXJpYWJsZXMsXG4gICAgLy8gb3IgYW4gZW1wdHkgc3RyaW5nXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZm9ybWF0U3RyaW5nKSkge1xuICAgICAgbGV0IHN1Y2Nlc3Nlczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGxldCBmYWlsdXJlczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGZvcm1hdFN0cmluZy5mb3JFYWNoKChmb3JtYXQ6IHN0cmluZykgPT4ge1xuICAgICAgICBsZXQgaXNTdWNjZXNzOiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgbGV0IGF0dGVtcHQgPSBmb3JtYXQucmVwbGFjZSgvXFwkKFtcXHdcXC5dKykvZywgKG9yaWdpbmFsLCBrZXkpID0+IHtcbiAgICAgICAgICBsZXQga2V5cyA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICAgIGxldCB2YWx1ZSA9IGRhdGFba2V5cy5zaGlmdCgpXTtcbiAgICAgICAgICB3aGlsZSAoa2V5cy5sZW5ndGggJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IGsgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YWx1ZSA9IGsgPyB2YWx1ZVtrXSA6IGAke3ZhbHVlfS5gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNTdWNjZXNzICYmIEhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlzU3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gSGVscGVycy5pc0VtcHR5KHZhbHVlKSA/ICcnIDogdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgc3VjY2Vzc2VzLnB1c2goYXR0ZW1wdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmFpbHVyZXMucHVzaChhdHRlbXB0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoc3VjY2Vzc2VzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gc3VjY2Vzc2VzWzBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gSGVscGVycy5pbnRlcnBvbGF0ZShmb3JtYXRTdHJpbmcsIGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyB0aGF0IGFuIG9iamVjdCBoYXMgZXZlcnkgcHJvcGVydHkgZXhwZWN0ZWQgYnkgYSBzdHJpbmcgdG8gaW50ZXJwb2xhdGVcbiAgICogQHBhcmFtIHN0ciAgIFRoZSBzdHJpbmcgdG8gaW50ZXJwb2xhdGVcbiAgICogQHBhcmFtIHByb3BzIFRoZSBwYXJhbXMgdG8gcmVwbGFjZSBpbiBzdHJpbmcuXG4gICAqL1xuICBzdGF0aWMgdmFsaWRhdGVJbnRlcnBvbGF0aW9uUHJvcHMoc3RyOiBzdHJpbmcsIHByb3BzOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQga2V5cyA9IHN0ci5tYXRjaCgvXFwkKFtcXHdcXC5dKykvZyk7XG4gICAgcmV0dXJuIGtleXMuZXZlcnkoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIHByb3BzLmhhc093blByb3BlcnR5KGtleS5zdWJzdHIoMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGlzT2JqZWN0KGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkgJiYgaXRlbSAhPT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSBzdHJpbmdcbiAgICovXG4gIHN0YXRpYyBpc1N0cmluZyhvYmo6IGFueSkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIHN0YXRpYyBpc051bWJlcihvYmo6IGFueSkge1xuICAgIHJldHVybiBvYmogJiYgIWlzTmFOKHBhcnNlSW50KG9iaiwgMTApKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSB1bmRlZmluZWQgb3IgbnVsbFxuICAgKi9cbiAgc3RhdGljIGlzQmxhbmsob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQgfHwgb2JqID09PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIHVuZGVmaW5lZCBvciBudWxsXG4gICAqL1xuICBzdGF0aWMgaXNFbXB0eShvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBIZWxwZXJzLmlzQmxhbmsob2JqKSB8fCBvYmogPT09ICcnIHx8IChBcnJheS5pc0FycmF5KG9iaikgJiYgb2JqLmxlbmd0aCA9PT0gMCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIGEgZnVuY3Rpb25cbiAgICovXG4gIHN0YXRpYyBpc0Z1bmN0aW9uKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKG9iaiAmJiBvYmouY29uc3RydWN0b3IgJiYgb2JqLmNhbGwgJiYgb2JqLmFwcGx5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSBEYXRlXG4gICAqL1xuICBzdGF0aWMgaXNEYXRlKG9iajogYW55KSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIERhdGU7XG4gIH1cblxuICBzdGF0aWMgc29ydEJ5RmllbGQoZmllbGRzOiBhbnksIHJldmVyc2UgPSBmYWxzZSkge1xuICAgIHJldHVybiAocHJldmlvdXM6IGFueSwgY3VycmVudDogYW55KSA9PiB7XG4gICAgICBpZiAoSGVscGVycy5pc0Z1bmN0aW9uKGZpZWxkcykpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkcyhyZXZlcnNlID8gJ2Rlc2MnIDogJ2FzYycsIHByZXZpb3VzLCBjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShmaWVsZHMpKSB7XG4gICAgICAgIGZpZWxkcyA9IFtmaWVsZHNdO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZpZWxkOiBzdHJpbmcgPSBmaWVsZHNbaV07XG4gICAgICAgIGxldCBmaXJzdCA9IHByZXZpb3VzW2ZpZWxkXSB8fCAnJztcbiAgICAgICAgbGV0IHNlY29uZCA9IGN1cnJlbnRbZmllbGRdIHx8ICcnO1xuXG4gICAgICAgIGlmIChIZWxwZXJzLmlzRGF0ZShmaXJzdCkgJiYgSGVscGVycy5pc0RhdGUoc2Vjb25kKSkge1xuICAgICAgICAgIC8vIERhdGVzXG4gICAgICAgICAgZmlyc3QgPSBmaXJzdC5nZXRUaW1lKCk7XG4gICAgICAgICAgc2Vjb25kID0gc2Vjb25kLmdldFRpbWUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChIZWxwZXJzLmlzU3RyaW5nKGZpcnN0KSAmJiBIZWxwZXJzLmlzU3RyaW5nKHNlY29uZCkpIHtcbiAgICAgICAgICAvLyBCYXNpYyBzdHJpbmdzXG4gICAgICAgICAgZmlyc3QgPSBmaXJzdC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHNlY29uZCA9IHNlY29uZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE51bWJlcnNcbiAgICAgICAgICBmaXJzdCA9IGlzTmFOKE51bWJlcihmaXJzdCkpID8gZmlyc3QgOiBOdW1iZXIoZmlyc3QpO1xuICAgICAgICAgIHNlY29uZCA9IGlzTmFOKE51bWJlcihzZWNvbmQpKSA/IHNlY29uZCA6IE51bWJlcihzZWNvbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpcnN0ID4gc2Vjb25kKSB7XG4gICAgICAgICAgcmV0dXJuIHJldmVyc2UgPyAtMSA6IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoZmlyc3QgPCBzZWNvbmQpIHtcbiAgICAgICAgICByZXR1cm4gcmV2ZXJzZSA/IDEgOiAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmaWx0ZXJCeUZpZWxkKGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gKGl0ZW0pID0+IHtcbiAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICBsZXQgZmllbGQgPSBjYW4oaXRlbSkuaGF2ZShrZXkpO1xuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlKGZpZWxkLCBpdGVtKSk7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh2YWx1ZS5pbmNsdWRlcyhmaWVsZCkpO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICBpZiAoZmllbGQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZmllbGQgPSBmaWVsZC5nZXRUaW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLm1pbikge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChmaWVsZCA+PSB2YWx1ZS5taW4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5tYXgpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goZmllbGQgPD0gdmFsdWUubWF4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUuYW55ICYmIEFycmF5LmlzQXJyYXkodmFsdWUuYW55KSkge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkKSkge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlLmFueS5zb21lKCh2KSA9PiBmaWVsZC5pbmNsdWRlcyh2KSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2godmFsdWUuYW55LmluY2x1ZGVzKGZpZWxkKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5hbGwgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZS5hbGwpKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlLmFsbC5ldmVyeSgodikgPT4gZmllbGQuaW5jbHVkZXModikpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUubm90KSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKCFIZWxwZXJzLmZpbHRlckJ5RmllbGQoa2V5LCB2YWx1ZS5ub3QpKGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBzdWJrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgICBpZiAoWydtaW4nLCAnbWF4JywgJ2FueScsICdhbGwnLCAnbm90J10uaW5kZXhPZihzdWJrZXkpIDwgMCkge1xuICAgICAgICAgICAgbGV0IHN1YnZhbHVlID0gdmFsdWVbc3Via2V5XTtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChIZWxwZXJzLmZpbHRlckJ5RmllbGQoYCR7a2V5fS4ke3N1YmtleX1gLCBzdWJ2YWx1ZSkoaXRlbSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKEpTT04uc3RyaW5naWZ5KGZpZWxkKS5tYXRjaChuZXcgUmVnRXhwKHZhbHVlLCAnZ2knKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHMuZXZlcnkoKHgpID0+IHgpO1xuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZmluZEFuY2VzdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpOiBFbGVtZW50IHtcbiAgICB3aGlsZSAoKGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQpICYmICFlbGVtZW50Lm1hdGNoZXMuY2FsbChlbGVtZW50LCBzZWxlY3RvcikpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZGVlcENsb25lKGl0ZW06IGFueSk6IGFueSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgIGxldCBuZXdBcnIgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSBpdGVtLmxlbmd0aDsgaS0tID4gMDsgKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgbmV3QXJyW2ldID0gSGVscGVycy5kZWVwQ2xvbmUoaXRlbVtpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3QXJyO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdmdW5jdGlvbicgJiYgIS9cXChcXCkgXFx7IFxcW25hdGl2ZS8udGVzdChpdGVtLnRvU3RyaW5nKCkpKSB7XG4gICAgICBsZXQgb2JqO1xuICAgICAgZXZhbCgnb2JqID0gJyArIGl0ZW0udG9TdHJpbmcoKSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgIGZvciAobGV0IGsgaW4gaXRlbSkge1xuICAgICAgICBpZiAoayBpbiBpdGVtKSB7XG4gICAgICAgICAgb2JqW2tdID0gSGVscGVycy5kZWVwQ2xvbmUoaXRlbVtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgZm9yIChsZXQgayBpbiBpdGVtKSB7XG4gICAgICAgIGlmIChrIGluIGl0ZW0pIHtcbiAgICAgICAgICBvYmpba10gPSBIZWxwZXJzLmRlZXBDbG9uZShpdGVtW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBzdGF0aWMgZGVlcEFzc2lnbiguLi5vYmpzKSB7XG4gICAgaWYgKG9ianMubGVuZ3RoIDwgMikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZWVkIHR3byBvciBtb3JlIG9iamVjdHMgdG8gbWVyZ2UnKTtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gT2JqZWN0LmFzc2lnbih7fSwgb2Jqc1swXSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvYmpzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzb3VyY2UgPSBPYmplY3QuYXNzaWduKHt9LCBvYmpzW2ldKTtcbiAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgaWYgKEhlbHBlcnMuaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBIZWxwZXJzLmlzT2JqZWN0KHRhcmdldFtwcm9wXSkpIHtcbiAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IEhlbHBlcnMuZGVlcEFzc2lnbih0YXJnZXRbcHJvcF0sIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBBcnJheS5pc0FycmF5KHRhcmdldFtwcm9wXSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEFycmF5ID0gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgoc291cmNlSXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpdGVtSW5kZXggPCB0YXJnZXRBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRJdGVtID0gdGFyZ2V0QXJyYXlbaXRlbUluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmlzKHRhcmdldEl0ZW0sIHNvdXJjZUl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChIZWxwZXJzLmlzT2JqZWN0KHRhcmdldEl0ZW0pICYmIEhlbHBlcnMuaXNPYmplY3Qoc291cmNlSXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5W2l0ZW1JbmRleF0gPSBIZWxwZXJzLmRlZXBBc3NpZ24odGFyZ2V0SXRlbSwgc291cmNlSXRlbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRhcmdldEl0ZW0pICYmIEFycmF5LmlzQXJyYXkoc291cmNlSXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5W2l0ZW1JbmRleF0gPSBIZWxwZXJzLmRlZXBBc3NpZ24odGFyZ2V0SXRlbSwgc291cmNlSXRlbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5W2l0ZW1JbmRleF0gPSBzb3VyY2VJdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUl0ZW0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFdvcmthcm91bmQgZm9yIEVkZ2UgYnJvd3NlciBzaW5jZSBFbGVtZW50Om5leHRFbGVtZW50U2libGluZyBpcyB1bmRlZmluZWQgaW5zaWRlIG9mIHRlbXBsYXRlIGRpcmVjdGl2ZXNcbiAgICogQHBhcmFtIGVsZW1lbnQgYW55IGRvY3VtZW50IGVsZW1lbnRcbiAgICogQHJldHVybnMgdGhlIG5leHQgc2libGluZyBub2RlIHRoYXQgaXMgb2YgdHlwZTogRWxlbWVudFxuICAgKi9cbiAgc3RhdGljIGdldE5leHRFbGVtZW50U2libGluZyhlbGVtZW50OiBFbGVtZW50KTogTm9kZSB7XG4gICAgaWYgKGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBlID0gZWxlbWVudC5uZXh0U2libGluZztcbiAgICAgIHdoaWxlIChlICYmIDEgIT09IGUubm9kZVR5cGUpIHtcbiAgICAgICAgZSA9IGUubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm4gZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhbiB7XG4gIG9iajogT2JqZWN0O1xuXG4gIGNvbnN0cnVjdG9yKG9iajogT2JqZWN0KSB7XG4gICAgdGhpcy5vYmogPSBvYmo7XG4gIH1cblxuICBoYXZlKGtleTogc3RyaW5nKTogYW55IHtcbiAgICBsZXQgcHJvcHMgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICBsZXQgaXRlbTogYW55ID0gdGhpcy5vYmo7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgaXRlbSA9IGl0ZW1bcHJvcHNbaV1dO1xuICAgICAgaWYgKHRoaXMuY2hlY2soaXRlbSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIGNoZWNrKHRoaW5nOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpbmcgIT09IHZvaWQgMDtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSBvYmpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbihvYmo6IGFueSkge1xuICByZXR1cm4gbmV3IENhbihvYmopO1xufVxuIl19