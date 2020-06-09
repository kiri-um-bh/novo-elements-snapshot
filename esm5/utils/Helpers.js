// @dynamic
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    /**
     * Swallows an event to stop further execution
     */
    Helpers.swallowEvent = function (event) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
    };
    Helpers.interpolate = function (str, props) {
        if (this.isDate(props)) {
            props = this.dateToObject(props);
        }
        return str.replace(/\$([\w\.]+)/g, function (original, key) {
            var keys = key.split('.');
            var value = props[keys.shift()];
            while (keys.length && value !== undefined) {
                var k = keys.shift();
                value = k ? value[k] : value + ".";
            }
            return value !== undefined ? value : '';
        });
    };
    Helpers.interpolateWithFallback = function (formatString, data) {
        // Format string can be an array, it will attempt to interpolate each item
        // in the array, if there is a failure to replace it will mark it as such
        // It will either return the first successful replacement of ALL variables,
        // or an empty string
        if (Array.isArray(formatString)) {
            var successes_1 = [];
            var failures_1 = [];
            formatString.forEach(function (format) {
                var isSuccess = true;
                var attempt = format.replace(/\$([\w\.]+)/g, function (original, key) {
                    var keys = key.split('.');
                    var value = data[keys.shift()];
                    while (keys.length && value !== undefined) {
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
    Helpers.validateInterpolationProps = function (str, props) {
        var keys = str.match(/\$([\w\.]+)/g);
        return keys.every(function (key) {
            return props.hasOwnProperty(key.substr(1));
        });
    };
    Helpers.isObject = function (item) {
        return item && typeof item === 'object' && !Array.isArray(item) && item !== null;
    };
    /**
     * Checks to see if the object is a string
     */
    Helpers.isString = function (obj) {
        return typeof obj === 'string';
    };
    Helpers.escapeString = function (obj) {
        if (Helpers.isString(obj)) {
            return obj.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
        return obj;
    };
    Helpers.isNumber = function (val, includeNegatives) {
        if (includeNegatives === void 0) { includeNegatives = false; }
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
    Helpers.isBlank = function (obj) {
        return obj === undefined || obj === null;
    };
    /**
     * Checks to see if the object is a undefined or null
     */
    Helpers.isEmpty = function (obj) {
        return Helpers.isBlank(obj) || obj === '' || (Array.isArray(obj) && obj.length === 0);
    };
    /**
     * Checks to see if the object is a function
     */
    Helpers.isFunction = function (obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    };
    /**
     * Checks to see if the object is a Date
     */
    Helpers.isDate = function (obj) {
        return obj instanceof Date;
    };
    Helpers.convertToArray = function (obj) {
        if (obj === undefined) {
            return [];
        }
        else if (!Array.isArray(obj)) {
            return [obj];
        }
        return obj;
    };
    Helpers.sortByField = function (fields, reverse) {
        if (reverse === void 0) { reverse = false; }
        return function (previous, current) {
            if (Helpers.isFunction(fields)) {
                return fields(reverse ? 'desc' : 'asc', previous, current);
            }
            if (!Array.isArray(fields)) {
                fields = [fields];
            }
            for (var i = 0; i < fields.length; i++) {
                var field = fields[i];
                var first = previous[field] || '';
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
    Helpers.filterByField = function (key, value) {
        return function (item) {
            var results = [];
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
    Helpers.findAncestor = function (element, selector) {
        while ((element = element.parentElement) && !element.matches.call(element, selector))
            ; // tslint:disable-line
        return element;
    };
    Helpers.deepClone = function (item) {
        if (Array.isArray(item)) {
            var newArr = [];
            for (var i = item.length; i-- > 0;) {
                // tslint:disable-line
                newArr[i] = Helpers.deepClone(item[i]);
            }
            return newArr;
        }
        if (typeof item === 'function' && !/\(\) \{ \[native/.test(item.toString())) {
            var obj = void 0;
            for (var k in item) {
                if (k in item) {
                    obj[k] = Helpers.deepClone(item[k]);
                }
            }
            return obj;
        }
        if (item && typeof item === 'object') {
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
    Helpers.deepAssign = function () {
        var objs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objs[_i] = arguments[_i];
        }
        if (objs.length < 2) {
            throw new Error('Need two or more objects to merge');
        }
        var target = Object.assign({}, objs[0]);
        var _loop_1 = function (i) {
            var source = Object.assign({}, objs[i]);
            Object.keys(source).forEach(function (prop) {
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
                        var targetArray_1 = target[prop];
                        value.forEach(function (sourceItem, itemIndex) {
                            if (itemIndex < targetArray_1.length) {
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
    Helpers.getNextElementSibling = function (element) {
        if (element.nextElementSibling) {
            return element.nextElementSibling;
        }
        else {
            var e = element.nextSibling;
            while (e && 1 !== e.nodeType) {
                e = e.nextSibling;
            }
            return e;
        }
    };
    Helpers.dateToObject = function (date) {
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
            .forEach(function (dateTimeFormatPart) {
            if (dateTimeFormatPart.type !== 'literal') {
                dateObj[dateTimeFormatPart.type] = dateTimeFormatPart.value;
            }
        });
        return dateObj;
    };
    return Helpers;
}());
export { Helpers };
var Can = /** @class */ (function () {
    function Can(obj) {
        this.obj = obj;
    }
    Can.prototype.have = function (key) {
        var props = key.split('.');
        var item = this.obj;
        for (var i = 0; i < props.length; i++) {
            item = item[props[i]];
            if (this.check(item) === false) {
                return item;
            }
        }
        return item;
    };
    Can.prototype.check = function (thing) {
        return thing !== void 0;
    };
    return Can;
}());
export { Can };
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
        var guess = min + Math.floor((max - min) / 2);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJ1dGlscy9IZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUFDWDtJQUFBO0lBeVdBLENBQUM7SUF4V0M7O09BRUc7SUFDSSxvQkFBWSxHQUFuQixVQUFvQixLQUFLO1FBQ3ZCLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFTSxtQkFBVyxHQUFsQixVQUFtQixHQUFXLEVBQUUsS0FBVTtRQUN4QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEIsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7UUFDRCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFVBQUMsUUFBZ0IsRUFBRSxHQUFXO1lBQy9ELElBQU0sSUFBSSxHQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUN6QyxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZCLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUksS0FBSyxNQUFHLENBQUM7YUFDcEM7WUFDRCxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FB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LCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZHluYW1pY1xuZXhwb3J0IGNsYXNzIEhlbHBlcnMge1xuICAvKipcbiAgICogU3dhbGxvd3MgYW4gZXZlbnQgdG8gc3RvcCBmdXJ0aGVyIGV4ZWN1dGlvblxuICAgKi9cbiAgc3RhdGljIHN3YWxsb3dFdmVudChldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBpbnRlcnBvbGF0ZShzdHI6IHN0cmluZywgcHJvcHM6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuaXNEYXRlKHByb3BzKSkge1xuICAgICAgcHJvcHMgPSB0aGlzLmRhdGVUb09iamVjdChwcm9wcyk7XG4gICAgfVxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFwkKFtcXHdcXC5dKykvZywgKG9yaWdpbmFsOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBrZXlzOiBzdHJpbmdbXSA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgbGV0IHZhbHVlID0gcHJvcHNba2V5cy5zaGlmdCgpXTtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGsgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIHZhbHVlID0gayA/IHZhbHVlW2tdIDogYCR7dmFsdWV9LmA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDogJyc7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaW50ZXJwb2xhdGVXaXRoRmFsbGJhY2soZm9ybWF0U3RyaW5nOiBzdHJpbmcgfCBzdHJpbmdbXSwgZGF0YTogYW55KTogc3RyaW5nIHtcbiAgICAvLyBGb3JtYXQgc3RyaW5nIGNhbiBiZSBhbiBhcnJheSwgaXQgd2lsbCBhdHRlbXB0IHRvIGludGVycG9sYXRlIGVhY2ggaXRlbVxuICAgIC8vIGluIHRoZSBhcnJheSwgaWYgdGhlcmUgaXMgYSBmYWlsdXJlIHRvIHJlcGxhY2UgaXQgd2lsbCBtYXJrIGl0IGFzIHN1Y2hcbiAgICAvLyBJdCB3aWxsIGVpdGhlciByZXR1cm4gdGhlIGZpcnN0IHN1Y2Nlc3NmdWwgcmVwbGFjZW1lbnQgb2YgQUxMIHZhcmlhYmxlcyxcbiAgICAvLyBvciBhbiBlbXB0eSBzdHJpbmdcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmb3JtYXRTdHJpbmcpKSB7XG4gICAgICBjb25zdCBzdWNjZXNzZXM6IHN0cmluZ1tdID0gW107XG4gICAgICBjb25zdCBmYWlsdXJlczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGZvcm1hdFN0cmluZy5mb3JFYWNoKChmb3JtYXQ6IHN0cmluZykgPT4ge1xuICAgICAgICBsZXQgaXNTdWNjZXNzOiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgYXR0ZW1wdCA9IGZvcm1hdC5yZXBsYWNlKC9cXCQoW1xcd1xcLl0rKS9nLCAob3JpZ2luYWwsIGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgICAgICBsZXQgdmFsdWUgPSBkYXRhW2tleXMuc2hpZnQoKV07XG4gICAgICAgICAgd2hpbGUgKGtleXMubGVuZ3RoICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YWx1ZSA9IGsgPyB2YWx1ZVtrXSA6IGAke3ZhbHVlfS5gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNTdWNjZXNzICYmIEhlbHBlcnMuaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlzU3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gSGVscGVycy5pc0VtcHR5KHZhbHVlKSA/ICcnIDogdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgc3VjY2Vzc2VzLnB1c2goYXR0ZW1wdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmFpbHVyZXMucHVzaChhdHRlbXB0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoc3VjY2Vzc2VzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gc3VjY2Vzc2VzWzBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gSGVscGVycy5pbnRlcnBvbGF0ZShmb3JtYXRTdHJpbmcsIGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyB0aGF0IGFuIG9iamVjdCBoYXMgZXZlcnkgcHJvcGVydHkgZXhwZWN0ZWQgYnkgYSBzdHJpbmcgdG8gaW50ZXJwb2xhdGVcbiAgICogQHBhcmFtIHN0ciAgIFRoZSBzdHJpbmcgdG8gaW50ZXJwb2xhdGVcbiAgICogQHBhcmFtIHByb3BzIFRoZSBwYXJhbXMgdG8gcmVwbGFjZSBpbiBzdHJpbmcuXG4gICAqL1xuICBzdGF0aWMgdmFsaWRhdGVJbnRlcnBvbGF0aW9uUHJvcHMoc3RyOiBzdHJpbmcsIHByb3BzOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBrZXlzID0gc3RyLm1hdGNoKC9cXCQoW1xcd1xcLl0rKS9nKTtcbiAgICByZXR1cm4ga2V5cy5ldmVyeSgoa2V5KSA9PiB7XG4gICAgICByZXR1cm4gcHJvcHMuaGFzT3duUHJvcGVydHkoa2V5LnN1YnN0cigxKSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaXNPYmplY3QoaXRlbSkge1xuICAgIHJldHVybiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSAmJiBpdGVtICE9PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIHN0cmluZ1xuICAgKi9cbiAgc3RhdGljIGlzU3RyaW5nKG9iajogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xuICB9XG5cbiAgc3RhdGljIGVzY2FwZVN0cmluZyhvYmo6IGFueSk6IGFueSB7XG4gICAgaWYgKEhlbHBlcnMuaXNTdHJpbmcob2JqKSkge1xuICAgICAgcmV0dXJuIG9iai5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgc3RhdGljIGlzTnVtYmVyKHZhbDogYW55LCBpbmNsdWRlTmVnYXRpdmVzOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBjb25zdCBudW1iZXJSZWdleCA9IGluY2x1ZGVOZWdhdGl2ZXMgPyAvXi17MCwxfVxcZCpcXC4/XFxkKiQvIDogL15cXGQqXFwuP1xcZCokLztcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB2YWwubGVuZ3RoID4gMCAmJiB2YWwgIT09ICcuJyAmJiBudW1iZXJSZWdleC50ZXN0KHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWwpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIGEgdW5kZWZpbmVkIG9yIG51bGxcbiAgICovXG4gIHN0YXRpYyBpc0JsYW5rKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSB1bmRlZmluZWQgb3IgbnVsbFxuICAgKi9cbiAgc3RhdGljIGlzRW1wdHkob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gSGVscGVycy5pc0JsYW5rKG9iaikgfHwgb2JqID09PSAnJyB8fCAoQXJyYXkuaXNBcnJheShvYmopICYmIG9iai5sZW5ndGggPT09IDApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIGZ1bmN0aW9uXG4gICAqL1xuICBzdGF0aWMgaXNGdW5jdGlvbihvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIShvYmogJiYgb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jYWxsICYmIG9iai5hcHBseSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIGEgRGF0ZVxuICAgKi9cbiAgc3RhdGljIGlzRGF0ZShvYmo6IGFueSkge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEYXRlO1xuICB9XG5cbiAgc3RhdGljIGNvbnZlcnRUb0FycmF5KG9iajogdW5rbm93bikge1xuICAgIGlmIChvYmogPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgcmV0dXJuIFtvYmpdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgc3RhdGljIHNvcnRCeUZpZWxkKGZpZWxkczogYW55LCByZXZlcnNlID0gZmFsc2UpIHtcbiAgICByZXR1cm4gKHByZXZpb3VzOiBhbnksIGN1cnJlbnQ6IGFueSkgPT4ge1xuICAgICAgaWYgKEhlbHBlcnMuaXNGdW5jdGlvbihmaWVsZHMpKSB7XG4gICAgICAgIHJldHVybiBmaWVsZHMocmV2ZXJzZSA/ICdkZXNjJyA6ICdhc2MnLCBwcmV2aW91cywgY3VycmVudCk7XG4gICAgICB9XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZmllbGRzKSkge1xuICAgICAgICBmaWVsZHMgPSBbZmllbGRzXTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkOiBzdHJpbmcgPSBmaWVsZHNbaV07XG4gICAgICAgIGxldCBmaXJzdCA9IHByZXZpb3VzW2ZpZWxkXSB8fCAnJztcbiAgICAgICAgbGV0IHNlY29uZCA9IGN1cnJlbnRbZmllbGRdIHx8ICcnO1xuXG4gICAgICAgIGlmIChIZWxwZXJzLmlzRGF0ZShmaXJzdCkgJiYgSGVscGVycy5pc0RhdGUoc2Vjb25kKSkge1xuICAgICAgICAgIC8vIERhdGVzXG4gICAgICAgICAgZmlyc3QgPSBmaXJzdC5nZXRUaW1lKCk7XG4gICAgICAgICAgc2Vjb25kID0gc2Vjb25kLmdldFRpbWUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChIZWxwZXJzLmlzU3RyaW5nKGZpcnN0KSAmJiBIZWxwZXJzLmlzU3RyaW5nKHNlY29uZCkpIHtcbiAgICAgICAgICAvLyBCYXNpYyBzdHJpbmdzXG4gICAgICAgICAgZmlyc3QgPSBmaXJzdC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHNlY29uZCA9IHNlY29uZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE51bWJlcnNcbiAgICAgICAgICBmaXJzdCA9IGlzTmFOKE51bWJlcihmaXJzdCkpID8gZmlyc3QgOiBOdW1iZXIoZmlyc3QpO1xuICAgICAgICAgIHNlY29uZCA9IGlzTmFOKE51bWJlcihzZWNvbmQpKSA/IHNlY29uZCA6IE51bWJlcihzZWNvbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpcnN0ID4gc2Vjb25kKSB7XG4gICAgICAgICAgcmV0dXJuIHJldmVyc2UgPyAtMSA6IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoZmlyc3QgPCBzZWNvbmQpIHtcbiAgICAgICAgICByZXR1cm4gcmV2ZXJzZSA/IDEgOiAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmaWx0ZXJCeUZpZWxkKGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICAgIGxldCBmaWVsZCA9IGNhbihpdGVtKS5oYXZlKGtleSk7XG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICByZXN1bHRzLnB1c2godmFsdWUoZmllbGQsIGl0ZW0pKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlLmluY2x1ZGVzKGZpZWxkKSk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIGlmIChmaWVsZCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBmaWVsZCA9IGZpZWxkLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUubWluKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGZpZWxkID49IHZhbHVlLm1pbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLm1heCkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChmaWVsZCA8PSB2YWx1ZS5tYXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5hbnkgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZS5hbnkpKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQpKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2godmFsdWUuYW55LnNvbWUoKHYpID0+IGZpZWxkLmluY2x1ZGVzKHYpKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh2YWx1ZS5hbnkuaW5jbHVkZXMoZmllbGQpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLmFsbCAmJiBBcnJheS5pc0FycmF5KHZhbHVlLmFsbCkpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2godmFsdWUuYWxsLmV2ZXJ5KCh2KSA9PiBmaWVsZC5pbmNsdWRlcyh2KSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5ub3QpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goIUhlbHBlcnMuZmlsdGVyQnlGaWVsZChrZXksIHZhbHVlLm5vdCkoaXRlbSkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgc3Via2V5IGluIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKFsnbWluJywgJ21heCcsICdhbnknLCAnYWxsJywgJ25vdCddLmluZGV4T2Yoc3Via2V5KSA8IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnZhbHVlID0gdmFsdWVbc3Via2V5XTtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChIZWxwZXJzLmZpbHRlckJ5RmllbGQoYCR7a2V5fS4ke3N1YmtleX1gLCBzdWJ2YWx1ZSkoaXRlbSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKEpTT04uc3RyaW5naWZ5KGZpZWxkKS5tYXRjaChuZXcgUmVnRXhwKHZhbHVlLCAnZ2knKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHMuZXZlcnkoKHgpID0+IHgpO1xuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZmluZEFuY2VzdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpOiBFbGVtZW50IHtcbiAgICB3aGlsZSAoKGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQpICYmICFlbGVtZW50Lm1hdGNoZXMuY2FsbChlbGVtZW50LCBzZWxlY3RvcikpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZGVlcENsb25lKGl0ZW06IGFueSk6IGFueSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgIGNvbnN0IG5ld0FyciA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IGl0ZW0ubGVuZ3RoOyBpLS0gPiAwOyApIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICBuZXdBcnJbaV0gPSBIZWxwZXJzLmRlZXBDbG9uZShpdGVtW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdBcnI7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ2Z1bmN0aW9uJyAmJiAhL1xcKFxcKSBcXHsgXFxbbmF0aXZlLy50ZXN0KGl0ZW0udG9TdHJpbmcoKSkpIHtcbiAgICAgIGxldCBvYmo7XG4gICAgICBmb3IgKGNvbnN0IGsgaW4gaXRlbSkge1xuICAgICAgICBpZiAoayBpbiBpdGVtKSB7XG4gICAgICAgICAgb2JqW2tdID0gSGVscGVycy5kZWVwQ2xvbmUoaXRlbVtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICBmb3IgKGNvbnN0IGsgaW4gaXRlbSkge1xuICAgICAgICBpZiAoayBpbiBpdGVtKSB7XG4gICAgICAgICAgb2JqW2tdID0gSGVscGVycy5kZWVwQ2xvbmUoaXRlbVtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgc3RhdGljIGRlZXBBc3NpZ24oLi4ub2Jqcykge1xuICAgIGlmIChvYmpzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmVlZCB0d28gb3IgbW9yZSBvYmplY3RzIHRvIG1lcmdlJyk7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IE9iamVjdC5hc3NpZ24oe30sIG9ianNbMF0pO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgb2Jqcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc291cmNlID0gT2JqZWN0LmFzc2lnbih7fSwgb2Jqc1tpXSk7XG4gICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzb3VyY2VbcHJvcF07XG4gICAgICAgIGlmIChIZWxwZXJzLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgIGlmICh0YXJnZXQuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgSGVscGVycy5pc09iamVjdCh0YXJnZXRbcHJvcF0pKSB7XG4gICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSBIZWxwZXJzLmRlZXBBc3NpZ24odGFyZ2V0W3Byb3BdLCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIGlmICh0YXJnZXQuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgQXJyYXkuaXNBcnJheSh0YXJnZXRbcHJvcF0pKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRBcnJheSA9IHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKHNvdXJjZUl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXRlbUluZGV4IDwgdGFyZ2V0QXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0SXRlbSA9IHRhcmdldEFycmF5W2l0ZW1JbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5pcyh0YXJnZXRJdGVtLCBzb3VyY2VJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoSGVscGVycy5pc09iamVjdCh0YXJnZXRJdGVtKSAmJiBIZWxwZXJzLmlzT2JqZWN0KHNvdXJjZUl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRBcnJheVtpdGVtSW5kZXhdID0gSGVscGVycy5kZWVwQXNzaWduKHRhcmdldEl0ZW0sIHNvdXJjZUl0ZW0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXRJdGVtKSAmJiBBcnJheS5pc0FycmF5KHNvdXJjZUl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRBcnJheVtpdGVtSW5kZXhdID0gSGVscGVycy5kZWVwQXNzaWduKHRhcmdldEl0ZW0sIHNvdXJjZUl0ZW0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRBcnJheVtpdGVtSW5kZXhdID0gc291cmNlSXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0QXJyYXkucHVzaChzb3VyY2VJdGVtKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBXb3JrYXJvdW5kIGZvciBFZGdlIGJyb3dzZXIgc2luY2UgRWxlbWVudDpuZXh0RWxlbWVudFNpYmxpbmcgaXMgdW5kZWZpbmVkIGluc2lkZSBvZiB0ZW1wbGF0ZSBkaXJlY3RpdmVzXG4gICAqIEBwYXJhbSBlbGVtZW50IGFueSBkb2N1bWVudCBlbGVtZW50XG4gICAqIEByZXR1cm5zIHRoZSBuZXh0IHNpYmxpbmcgbm9kZSB0aGF0IGlzIG9mIHR5cGU6IEVsZW1lbnRcbiAgICovXG4gIHN0YXRpYyBnZXROZXh0RWxlbWVudFNpYmxpbmcoZWxlbWVudDogRWxlbWVudCk6IE5vZGUge1xuICAgIGlmIChlbGVtZW50Lm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZSA9IGVsZW1lbnQubmV4dFNpYmxpbmc7XG4gICAgICB3aGlsZSAoZSAmJiAxICE9PSBlLm5vZGVUeXBlKSB7XG4gICAgICAgIGUgPSBlLm5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGRhdGVUb09iamVjdChcbiAgICBkYXRlOiBEYXRlLFxuICApOiB7XG4gICAgZGF5OiBzdHJpbmc7XG4gICAgZGF5UGVyaW9kOiBzdHJpbmc7XG4gICAgZXJhOiBzdHJpbmc7XG4gICAgaG91cjogc3RyaW5nO1xuICAgIG1pbnV0ZTogc3RyaW5nO1xuICAgIG1vbnRoOiBzdHJpbmc7XG4gICAgc2Vjb25kOiBzdHJpbmc7XG4gICAgd2Vla2RheTogc3RyaW5nO1xuICAgIHllYXI6IHN0cmluZztcbiAgfSB7XG4gICAgY29uc3QgZGF0ZU9iaiA9IHtcbiAgICAgIGRheTogJycsXG4gICAgICBkYXlQZXJpb2Q6ICcnLFxuICAgICAgZXJhOiAnJyxcbiAgICAgIGhvdXI6ICcnLFxuICAgICAgbWludXRlOiAnJyxcbiAgICAgIG1vbnRoOiAnJyxcbiAgICAgIHNlY29uZDogJycsXG4gICAgICB3ZWVrZGF5OiAnJyxcbiAgICAgIHllYXI6ICcnLFxuICAgIH07XG4gICAgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgIGVyYTogJ3Nob3J0JyxcbiAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgIHNlY29uZDogJ251bWVyaWMnLFxuICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgIH0pXG4gICAgICAuZm9ybWF0VG9QYXJ0cyhkYXRlKVxuICAgICAgLmZvckVhY2goKGRhdGVUaW1lRm9ybWF0UGFydDogSW50bC5EYXRlVGltZUZvcm1hdFBhcnQpID0+IHtcbiAgICAgICAgaWYgKGRhdGVUaW1lRm9ybWF0UGFydC50eXBlICE9PSAnbGl0ZXJhbCcpIHtcbiAgICAgICAgICBkYXRlT2JqW2RhdGVUaW1lRm9ybWF0UGFydC50eXBlXSA9IGRhdGVUaW1lRm9ybWF0UGFydC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIGRhdGVPYmo7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhbiB7XG4gIG9iajogT2JqZWN0O1xuXG4gIGNvbnN0cnVjdG9yKG9iajogT2JqZWN0KSB7XG4gICAgdGhpcy5vYmogPSBvYmo7XG4gIH1cblxuICBoYXZlKGtleTogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBwcm9wcyA9IGtleS5zcGxpdCgnLicpO1xuICAgIGxldCBpdGVtOiBhbnkgPSB0aGlzLm9iajtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtID0gaXRlbVtwcm9wc1tpXV07XG4gICAgICBpZiAodGhpcy5jaGVjayhpdGVtKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgY2hlY2sodGhpbmc6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGluZyAhPT0gdm9pZCAwO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW4ob2JqOiBhbnkpIHtcbiAgcmV0dXJuIG5ldyBDYW4ob2JqKTtcbn1cblxuLy8gQXNzdW1lcyBkYXRhIGlzIGFscmVhZHkgc29ydGVkXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoPFQ+KGl0ZW06IFQsIGFycmF5OiBUW10sIGNvbXBhcmU6IChhOiBULCBiOiBUKSA9PiAxIHwgLTEgfCAwIHwgdW5kZWZpbmVkKTogVCB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBzZWFyY2goMCwgYXJyYXkubGVuZ3RoIC0gMSk7XG5cbiAgZnVuY3Rpb24gc2VhcmNoKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IFQgfCB1bmRlZmluZWQge1xuICAgIGlmIChtaW4gPiBtYXgpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IGd1ZXNzID0gbWluICsgTWF0aC5mbG9vcigobWF4IC0gbWluKSAvIDIpO1xuICAgIGNvbnN0IGNvbXBhcmlzb24gPSBjb21wYXJlKGl0ZW0sIGFycmF5W2d1ZXNzXSk7XG5cbiAgICBpZiAoY29tcGFyaXNvbiA9PT0gMCkge1xuICAgICAgcmV0dXJuIGFycmF5W2d1ZXNzXTtcbiAgICB9IGVsc2UgaWYgKGNvbXBhcmlzb24gPT09IC0xKSB7XG4gICAgICByZXR1cm4gc2VhcmNoKG1pbiwgZ3Vlc3MgLSAxKTtcbiAgICB9IGVsc2UgaWYgKGNvbXBhcmlzb24gPT09IDEpIHtcbiAgICAgIHJldHVybiBzZWFyY2goZ3Vlc3MgKyAxLCBtYXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYElucHV0IG1pc21hdGNoOiAke0pTT04uc3RyaW5naWZ5KGl0ZW0pfSBub3QgY29tcGFyYWJsZSB0byAke0pTT04uc3RyaW5naWZ5KGFycmF5W2d1ZXNzXSl9YCk7XG4gICAgfVxuICB9XG59XG4iXX0=