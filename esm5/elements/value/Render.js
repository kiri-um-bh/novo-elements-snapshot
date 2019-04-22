/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Injectable, Pipe, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
import { findByCountryId } from '../../utils/countries/Countries';
/**
 * \@classdesc
 * Renders data appropriately based on the data type found in Meta
 * All data types defined by bullhorn should be supported:
 *
 * - **String**: trims value and returns
 * - **Integer**: return value
 * - **Double**: return value fixed to 2 decimals
 * - **BigDecimal**: return value fixed to 2 decimals
 * - **Address**: only city and/or state returned
 * - **Address1**: only city and/or state returned
 * - **AddressWithoutCountry**: only city and/or state returned
 * - **Currency**: put a $ in front
 * - **Percentage**: divide by 100 fix to 2 decimals place and return
 * - **Options**: returns the appropriate 'label' for the 'value' from 'options'
 * - **Array**: returns list comma separated
 * - **DateTime**: formats the date
 * - **TimeStamp**: formats the date
 * - **ToOne**: return the entity specific name (ie. name, firstName lastName, title, ...)
 * - **ToMany**: return an array of the entity specific names (ie. name, firstName lastName, title, ...)
 *
 * \@example
 * ```
 * {{ expression | render:field }}
 * ```
 */
var RenderPipe = /** @class */ (function () {
    function RenderPipe(changeDetector, sanitizationService, labels) {
        this.changeDetector = changeDetector;
        this.sanitizationService = sanitizationService;
        this.labels = labels;
    }
    /**
     * @param {?} objectOne
     * @param {?} objectTwo
     * @return {?}
     */
    RenderPipe.prototype.equals = /**
     * @param {?} objectOne
     * @param {?} objectTwo
     * @return {?}
     */
    function (objectOne, objectTwo) {
        if (objectOne === objectTwo) {
            return true;
        }
        if (objectOne === null || objectTwo === null) {
            return false;
        }
        if (objectOne !== objectOne && objectTwo !== objectTwo) {
            return true;
        }
        /** @type {?} */
        var t1 = typeof objectOne;
        /** @type {?} */
        var t2 = typeof objectTwo;
        /** @type {?} */
        var length;
        /** @type {?} */
        var key;
        /** @type {?} */
        var keySet;
        if (t1 === t2 && t1 === 'object') {
            if (Array.isArray(objectOne)) {
                if (!Array.isArray(objectTwo)) {
                    return false;
                }
                length = objectOne.length;
                if (length === objectTwo.length) {
                    for (key = 0; key < length; key++) {
                        if (!this.equals(objectOne[key], objectTwo[key])) {
                            return false;
                        }
                    }
                    return true;
                }
            }
            else {
                if (Array.isArray(objectTwo)) {
                    return false;
                }
                keySet = Object.create(null);
                for (key in objectOne) {
                    if (objectOne[key]) {
                        if (!this.equals(objectOne[key], objectTwo[key])) {
                            return false;
                        }
                        keySet[key] = true;
                    }
                }
                for (key in objectTwo) {
                    if (!(key in keySet) && typeof objectTwo[key] !== 'undefined') {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} item
     * @param {?} entity
     * @return {?}
     */
    RenderPipe.prototype.getEntityLabel = /**
     * @param {?} item
     * @param {?} entity
     * @return {?}
     */
    function (item, entity) {
        switch (entity) {
            case 'CorporateUser':
            case 'ClientContact':
            case 'ClientContact1':
            case 'ClientContact2':
            case 'ClientContact3':
            case 'ClientContact4':
            case 'ClientContact5':
            case 'Lead':
            case 'Candidate':
            case 'Person':
                return ((item.firstName || '') + " " + (item.lastName || '')).trim();
            case 'ClientCorporation':
            case 'ClientCorporation1':
            case 'ClientCorporation2':
            case 'ClientCorporation3':
            case 'ClientCorporation4':
            case 'ClientCorporation5':
                return ("" + (item.name || '')).trim();
            case 'JobOrder':
            case 'JobOrder1':
            case 'JobOrder2':
            case 'JobOrder3':
            case 'JobOrder4':
            case 'JobOrder5':
            case 'Opportunity':
                return ("" + (item.title || '')).trim();
            case 'Placement':
                /** @type {?} */
                var label = '';
                if (item.candidate) {
                    label = (item.candidate.firstName + " " + item.candidate.lastName).trim();
                }
                if (item.jobOrder) {
                    label = (label + " - " + item.jobOrder.title).trim();
                }
                return label;
            default:
                return '';
        }
    };
    /**
     * Define the fields to set or retrieve for the given entity. Getter and Setter methods will automagically
     * be set up on the entity once the fields are defined.
     * @name fields
     * @memberOf Entity#
     * @param value
     * @param args - fields can either be sent as a list of arguments or as an Array
     * @return text
     */
    /**
     * Define the fields to set or retrieve for the given entity. Getter and Setter methods will automagically
     * be set up on the entity once the fields are defined.
     * \@name fields
     * \@memberOf Entity#
     * @param {?} value
     * @param {?} args - fields can either be sent as a list of arguments or as an Array
     * @return {?} text
     */
    RenderPipe.prototype.render = /**
     * Define the fields to set or retrieve for the given entity. Getter and Setter methods will automagically
     * be set up on the entity once the fields are defined.
     * \@name fields
     * \@memberOf Entity#
     * @param {?} value
     * @param {?} args - fields can either be sent as a list of arguments or as an Array
     * @return {?} text
     */
    function (value, args) {
        /** @type {?} */
        var type = null;
        /** @type {?} */
        var text = value;
        /** @type {?} */
        var rezonedTime;
        // Handle when we don't have meta, but passing an entity
        if (value && value._subtype && !args) {
            return this.getEntityLabel(value, value._subtype);
        }
        // Stop logic for nulls
        if (value === undefined || value === null || !args) {
            return text;
        }
        if (args.formatter && typeof args.formatter === 'function') {
            return args.formatter(value, args);
        }
        // TODO move this to a service
        // Determine TYPE because its not just 1 value that determines this.
        if (args.type === 'TO_MANY') {
            type = 'ToMany';
        }
        else if (args.type === 'TO_ONE') {
            type = args.associatedEntity.entity;
        }
        else if (args.dataSpecialization === 'DATETIME') {
            type = 'DateTime';
        }
        else if (args.dataSpecialization === 'YEAR') {
            type = 'Year';
        }
        else if (args.dataSpecialization === 'DATE' && args.dataType === 'Date') {
            type = 'Date';
        }
        else if (args.dataType === 'Timestamp') {
            type = 'Timestamp';
        }
        else if (['mobile', 'phone', 'phone1', 'phone2', 'phone3', 'workPhone'].indexOf(args.name) > -1) {
            type = 'Phone';
        }
        else if (args.name && args.name.substring(0, 5) === 'email') {
            type = 'Email';
        }
        else if ((args.name && args.name === 'address.countryID') || args.optionsType === 'Country') {
            type = 'Country';
        }
        else if (args.optionsType === 'SkillText') {
            type = 'SkillText';
        }
        else if (args.options || args.inputType === 'SELECT' || args.inputType === 'CHECKBOX') {
            type = 'Options';
        }
        else if (['MONEY', 'PERCENTAGE', 'HTML', 'SSN'].indexOf(args.dataSpecialization) > -1) {
            type = this.capitalize(args.dataSpecialization.toLowerCase());
        }
        else {
            type = args.dataType || 'default';
        }
        // Transform data here
        switch (type) {
            case 'Address':
            case 'Address1':
            case 'AddressWithoutCountry':
            case 'SecondaryAddress':
            case 'BillingAddress':
                /** @type {?} */
                var country = findByCountryId(Number(value.countryName));
                text = '';
                if (value.address1 || value.address2) {
                    text += (value.address1 || '') + " " + (value.address2 || '') + "<br />\n";
                }
                text += (value.city || '') + " " + (value.state || '') + " " + (value.zip || '') + (value.city || value.state || value.zip ? '<br />\n' : '');
                text += "" + (country ? country.name : value.countryName || '') + (country || value.countryName ? '<br />\n' : '');
                text = this.sanitizationService.bypassSecurityTrustHtml(text.trim());
                break;
            case 'DateTime':
            case 'Timestamp':
                text = this.labels.formatDateShort(value);
                break;
            case 'Date':
                text = this.labels.formatDate(new Date(value));
                break;
            case 'Year':
                text = new Date(value).getFullYear();
                break;
            case 'Phone':
            case 'Email':
                text = value;
                break;
            case 'Money':
                text = this.labels.formatCurrency(value);
                break;
            case 'Percentage':
                text = this.labels.formatNumber(parseFloat(value).toString(), { style: 'percent', minimumFractionDigits: 2 });
                break;
            case 'Double':
            case 'BigDecimal':
                text = this.labels.formatNumber(value, { minimumFractionDigits: this.getNumberDecimalPlaces(value) });
                break;
            case 'Integer':
                text = value;
                break;
            case 'BusinessSector':
            case 'Category':
            case 'Certification':
            case 'ClientCorporation':
            case 'CorporationDepartment':
            case 'DistributionList':
            case 'Skill':
            case 'Tearsheet':
            case 'Specialty':
                text = value.label || value.name || '';
                break;
            case 'SkillText':
                text = Array.isArray(value) ? value.join(', ') : value;
                break;
            case 'Lead':
            case 'Candidate':
            case 'ClientContact':
            case 'CorporateUser':
            case 'Person':
                text = value.label || (value.firstName || '') + " " + (value.lastName || '');
                break;
            case 'Opportunity':
            case 'JobOrder':
                text = value.label || value.title || '';
                break;
            case 'Placement':
                if (value.candidate) {
                    text = (value.candidate.firstName || '') + " " + (value.candidate.lastName || '');
                }
                if (value.jobOrder) {
                    text = value.candidate ? text + " - " + (value.jobOrder.title || '') : "" + (value.jobOrder.title || '');
                }
                break;
            case 'JobSubmission':
                text =
                    value.label ||
                        (value.jobOrder ? value.jobOrder.title + " - " : '') + " " + (value.candidate ? value.candidate.firstName : '') + " " + (value.candidate ? value.candidate.lastName : '');
                break;
            case 'WorkersCompensationRate':
                text = (value.compensation ? value.compensation.code + " - " : '') + " " + (value.compensation ? value.compensation.name : '');
                break;
            case 'Options':
                text = this.options(value, args.options, args);
                break;
            case 'ToMany':
                if (['Candidate', 'CorporateUser', 'Person'].indexOf(args.associatedEntity.entity) > -1) {
                    text = this.concat(value.data, 'firstName', 'lastName');
                    if (value.data.length < value.total) {
                        text = text + ', ' + this.labels.getToManyPlusMore({ quantity: value.total - value.data.length });
                    }
                }
                else if (['Category', 'BusinessSector', 'Skill', 'Specialty', 'ClientCorporation', 'CorporationDepartment'].indexOf(args.associatedEntity.entity) > -1) {
                    text = this.concat(value.data, 'name');
                    if (value.data.length < value.total) {
                        text = text + ', ' + this.labels.getToManyPlusMore({ quantity: value.total - value.data.length });
                    }
                }
                else if (args.associatedEntity.entity === 'MailListPushHistoryDetail') {
                    text = this.concat(value.data, 'externalListName');
                }
                else {
                    text = "" + (value.total || '');
                }
                break;
            case 'Country':
                /** @type {?} */
                var countryObj = findByCountryId(Number(value));
                text = countryObj ? countryObj.name : value;
                break;
            case 'Html':
                if (Array.isArray(value)) {
                    value = value.join(' ');
                }
                if (typeof text === 'string') {
                    text = this.sanitizationService.bypassSecurityTrustHtml(value.replace(/\<a/gi, '<a target="_blank"'));
                }
                break;
            case 'CandidateComment':
                text = value.comments ? this.labels.formatDateShort(value.dateLastModified) + " (" + value.name + ") - " + value.comments : '';
                break;
            default:
                text = value.trim ? value.trim() : value;
                break;
        }
        return text;
    };
    /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    RenderPipe.prototype.updateValue = /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    function (value, args) {
        this.value = this.render(value, args);
        this.changeDetector.markForCheck();
    };
    /**
     * @param {?=} value
     * @param {?=} args
     * @return {?}
     */
    RenderPipe.prototype.transform = /**
     * @param {?=} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        if (value === undefined || value === null) {
            return '';
        }
        if (this.equals(value, this.lastValue) && this.equals(args, this.lastArgs)) {
            return this.value;
        }
        this.lastValue = value;
        this.lastArgs = args;
        this.updateValue(this.lastValue, this.lastArgs);
        return this.value;
    };
    /**
     * Simple function concat a list of fields from a list of objects
     * @name options
     * @param list - the list of values to use
     * @param fields - list of fields to extract
     */
    /**
     * Simple function concat a list of fields from a list of objects
     * \@name options
     * @param {?} list - the list of values to use
     * @param {...?} fields - list of fields to extract
     * @return {?}
     */
    RenderPipe.prototype.concat = /**
     * Simple function concat a list of fields from a list of objects
     * \@name options
     * @param {?} list - the list of values to use
     * @param {...?} fields - list of fields to extract
     * @return {?}
     */
    function (list) {
        var fields = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fields[_i - 1] = arguments[_i];
        }
        var e_1, _a, e_2, _b;
        /** @type {?} */
        var data = [];
        try {
            for (var list_1 = tslib_1.__values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var item = list_1_1.value;
                /** @type {?} */
                var label = [];
                try {
                    for (var fields_1 = tslib_1.__values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                        var field = fields_1_1.value;
                        label.push("" + item[field]);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (fields_1_1 && !fields_1_1.done && (_b = fields_1.return)) _b.call(fields_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                data.push(label.join(' '));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return data.join(', ');
    };
    /**
     * Simple function to look up the **label** to display from options
     * @name options
     * @param value - the value to find
     * @param list - list of options (label/value pairs)
     */
    /**
     * Simple function to look up the **label** to display from options
     * \@name options
     * @param {?} value - the value to find
     * @param {?} list - list of options (label/value pairs)
     * @param {?} args
     * @return {?}
     */
    RenderPipe.prototype.options = /**
     * Simple function to look up the **label** to display from options
     * \@name options
     * @param {?} value - the value to find
     * @param {?} list - list of options (label/value pairs)
     * @param {?} args
     * @return {?}
     */
    function (value, list, args) {
        if (!Array.isArray(value)) {
            value = [value];
        }
        try {
            return value.map(function (item) {
                var e_3, _a;
                try {
                    for (var list_2 = tslib_1.__values(list), list_2_1 = list_2.next(); !list_2_1.done; list_2_1 = list_2.next()) {
                        var option = list_2_1.value;
                        if (option.value === item) {
                            return option.label;
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (list_2_1 && !list_2_1.done && (_a = list_2.return)) _a.call(list_2);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                return item;
            });
        }
        catch (e) {
            if (!args.optionsType) {
                console.error("WARNING: There are no options configured for the field: " + args.label);
            }
            return value;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RenderPipe.prototype.getNumberDecimalPlaces = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var decimalPlaces;
        if (value) {
            /** @type {?} */
            var numberString = parseFloat(value).toString();
            /** @type {?} */
            var decimalPlace = (numberString || '').split('.')[1] || '';
            decimalPlaces = decimalPlace.length;
        }
        return decimalPlaces || 1;
    };
    /**
     * Capitalizes the first letter
     * @param value
     */
    /**
     * Capitalizes the first letter
     * @param {?} value
     * @return {?}
     */
    RenderPipe.prototype.capitalize = /**
     * Capitalizes the first letter
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    RenderPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'render',
                    pure: false,
                },] },
        { type: Injectable }
    ];
    /** @nocollapse */
    RenderPipe.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: DomSanitizer },
        { type: NovoLabelService }
    ]; };
    return RenderPipe;
}());
export { RenderPipe };
if (false) {
    /** @type {?} */
    RenderPipe.prototype.value;
    /** @type {?} */
    RenderPipe.prototype.lastValue;
    /** @type {?} */
    RenderPipe.prototype.lastArgs;
    /**
     * @type {?}
     * @private
     */
    RenderPipe.prototype.changeDetector;
    /**
     * @type {?}
     * @private
     */
    RenderPipe.prototype.sanitizationService;
    /**
     * @type {?}
     * @private
     */
    RenderPipe.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVuZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3ZhbHVlL1JlbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUV6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCbEU7SUFVRSxvQkFBb0IsY0FBaUMsRUFBVSxtQkFBaUMsRUFBVSxNQUF3QjtRQUE5RyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7Ozs7OztJQUV0SSwyQkFBTTs7Ozs7SUFBTixVQUFPLFNBQWMsRUFBRSxTQUFjO1FBQ25DLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxTQUFTLEtBQUssSUFBSSxJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDNUMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksU0FBUyxLQUFLLFNBQVMsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQ3RELE9BQU8sSUFBSSxDQUFDO1NBQ2I7O1lBQ0csRUFBRSxHQUFRLE9BQU8sU0FBUzs7WUFDMUIsRUFBRSxHQUFRLE9BQU8sU0FBUzs7WUFDMUIsTUFBYzs7WUFDZCxHQUFROztZQUNSLE1BQVc7UUFDZixJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUNoQyxJQUFJ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QkFBZ0I7O0lBeVp6QixpQkFBQztDQUFBLEFBNVhELElBNFhDO1NBdlhZLFVBQVU7OztJQUNyQiwyQkFBVzs7SUFDWCwrQkFBZTs7SUFDZiw4QkFBYzs7Ozs7SUFFRixvQ0FBeUM7Ozs7O0lBQUUseUNBQXlDOzs7OztJQUFFLDRCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgZmluZEJ5Q291bnRyeUlkIH0gZnJvbSAnLi4vLi4vdXRpbHMvY291bnRyaWVzL0NvdW50cmllcyc7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogUmVuZGVycyBkYXRhIGFwcHJvcHJpYXRlbHkgYmFzZWQgb24gdGhlIGRhdGEgdHlwZSBmb3VuZCBpbiBNZXRhXG4gKiBBbGwgZGF0YSB0eXBlcyBkZWZpbmVkIGJ5IGJ1bGxob3JuIHNob3VsZCBiZSBzdXBwb3J0ZWQ6XG4gKlxuICogLSAqKlN0cmluZyoqOiB0cmltcyB2YWx1ZSBhbmQgcmV0dXJuc1xuICogLSAqKkludGVnZXIqKjogcmV0dXJuIHZhbHVlXG4gKiAtICoqRG91YmxlKio6IHJldHVybiB2YWx1ZSBmaXhlZCB0byAyIGRlY2ltYWxzXG4gKiAtICoqQmlnRGVjaW1hbCoqOiByZXR1cm4gdmFsdWUgZml4ZWQgdG8gMiBkZWNpbWFsc1xuICogLSAqKkFkZHJlc3MqKjogb25seSBjaXR5IGFuZC9vciBzdGF0ZSByZXR1cm5lZFxuICogLSAqKkFkZHJlc3MxKio6IG9ubHkgY2l0eSBhbmQvb3Igc3RhdGUgcmV0dXJuZWRcbiAqIC0gKipBZGRyZXNzV2l0aG91dENvdW50cnkqKjogb25seSBjaXR5IGFuZC9vciBzdGF0ZSByZXR1cm5lZFxuICogLSAqKkN1cnJlbmN5Kio6IHB1dCBhICQgaW4gZnJvbnRcbiAqIC0gKipQZXJjZW50YWdlKio6IGRpdmlkZSBieSAxMDAgZml4IHRvIDIgZGVjaW1hbHMgcGxhY2UgYW5kIHJldHVyblxuICogLSAqKk9wdGlvbnMqKjogcmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgJ2xhYmVsJyBmb3IgdGhlICd2YWx1ZScgZnJvbSAnb3B0aW9ucydcbiAqIC0gKipBcnJheSoqOiByZXR1cm5zIGxpc3QgY29tbWEgc2VwYXJhdGVkXG4gKiAtICoqRGF0ZVRpbWUqKjogZm9ybWF0cyB0aGUgZGF0ZVxuICogLSAqKlRpbWVTdGFtcCoqOiBmb3JtYXRzIHRoZSBkYXRlXG4gKiAtICoqVG9PbmUqKjogcmV0dXJuIHRoZSBlbnRpdHkgc3BlY2lmaWMgbmFtZSAoaWUuIG5hbWUsIGZpcnN0TmFtZSBsYXN0TmFtZSwgdGl0bGUsIC4uLilcbiAqIC0gKipUb01hbnkqKjogcmV0dXJuIGFuIGFycmF5IG9mIHRoZSBlbnRpdHkgc3BlY2lmaWMgbmFtZXMgKGllLiBuYW1lLCBmaXJzdE5hbWUgbGFzdE5hbWUsIHRpdGxlLCAuLi4pXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYFxuICoge3sgZXhwcmVzc2lvbiB8IHJlbmRlcjpmaWVsZCB9fVxuICogYGBgXG4gKi9cbkBQaXBlKHtcbiAgbmFtZTogJ3JlbmRlcicsXG4gIHB1cmU6IGZhbHNlLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZW5kZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHZhbHVlOiBhbnk7XG4gIGxhc3RWYWx1ZTogYW55O1xuICBsYXN0QXJnczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHNhbml0aXphdGlvblNlcnZpY2U6IERvbVNhbml0aXplciwgcHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgZXF1YWxzKG9iamVjdE9uZTogYW55LCBvYmplY3RUd286IGFueSk6IGFueSB7XG4gICAgaWYgKG9iamVjdE9uZSA9PT0gb2JqZWN0VHdvKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG9iamVjdE9uZSA9PT0gbnVsbCB8fCBvYmplY3RUd28gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9iamVjdE9uZSAhPT0gb2JqZWN0T25lICYmIG9iamVjdFR3byAhPT0gb2JqZWN0VHdvKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbGV0IHQxOiBhbnkgPSB0eXBlb2Ygb2JqZWN0T25lO1xuICAgIGxldCB0MjogYW55ID0gdHlwZW9mIG9iamVjdFR3bztcbiAgICBsZXQgbGVuZ3RoOiBudW1iZXI7XG4gICAgbGV0IGtleTogYW55O1xuICAgIGxldCBrZXlTZXQ6IGFueTtcbiAgICBpZiAodDEgPT09IHQyICYmIHQxID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0T25lKSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob2JqZWN0VHdvKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGggPSBvYmplY3RPbmUubGVuZ3RoO1xuICAgICAgICBpZiAobGVuZ3RoID09PSBvYmplY3RUd28ubGVuZ3RoKSB7XG4gICAgICAgICAgZm9yIChrZXkgPSAwOyBrZXkgPCBsZW5ndGg7IGtleSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZXF1YWxzKG9iamVjdE9uZVtrZXldLCBvYmplY3RUd29ba2V5XSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0VHdvKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBrZXlTZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBmb3IgKGtleSBpbiBvYmplY3RPbmUpIHtcbiAgICAgICAgICBpZiAob2JqZWN0T25lW2tleV0pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5lcXVhbHMob2JqZWN0T25lW2tleV0sIG9iamVjdFR3b1trZXldKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlTZXRba2V5XSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoa2V5IGluIG9iamVjdFR3bykge1xuICAgICAgICAgIGlmICghKGtleSBpbiBrZXlTZXQpICYmIHR5cGVvZiBvYmplY3RUd29ba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldEVudGl0eUxhYmVsKGl0ZW06IGFueSwgZW50aXR5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAoZW50aXR5KSB7XG4gICAgICBjYXNlICdDb3Jwb3JhdGVVc2VyJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3QnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdDEnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdDInOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdDMnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdDQnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdDUnOlxuICAgICAgY2FzZSAnTGVhZCc6XG4gICAgICBjYXNlICdDYW5kaWRhdGUnOlxuICAgICAgY2FzZSAnUGVyc29uJzpcbiAgICAgICAgcmV0dXJuIGAke2l0ZW0uZmlyc3ROYW1lIHx8ICcnfSAke2l0ZW0ubGFzdE5hbWUgfHwgJyd9YC50cmltKCk7XG4gICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbic6XG4gICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbjEnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24yJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uMyc6XG4gICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbjQnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb241JzpcbiAgICAgICAgcmV0dXJuIGAke2l0ZW0ubmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgIGNhc2UgJ0pvYk9yZGVyJzpcbiAgICAgIGNhc2UgJ0pvYk9yZGVyMSc6XG4gICAgICBjYXNlICdKb2JPcmRlcjInOlxuICAgICAgY2FzZSAnSm9iT3JkZXIzJzpcbiAgICAgIGNhc2UgJ0pvYk9yZGVyNCc6XG4gICAgICBjYXNlICdKb2JPcmRlcjUnOlxuICAgICAgY2FzZSAnT3Bwb3J0dW5pdHknOlxuICAgICAgICByZXR1cm4gYCR7aXRlbS50aXRsZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgIGNhc2UgJ1BsYWNlbWVudCc6XG4gICAgICAgIGxldCBsYWJlbDogc3RyaW5nID0gJyc7XG4gICAgICAgIGlmIChpdGVtLmNhbmRpZGF0ZSkge1xuICAgICAgICAgIGxhYmVsID0gYCR7aXRlbS5jYW5kaWRhdGUuZmlyc3ROYW1lfSAke2l0ZW0uY2FuZGlkYXRlLmxhc3ROYW1lfWAudHJpbSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLmpvYk9yZGVyKSB7XG4gICAgICAgICAgbGFiZWwgPSBgJHtsYWJlbH0gLSAke2l0ZW0uam9iT3JkZXIudGl0bGV9YC50cmltKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIGZpZWxkcyB0byBzZXQgb3IgcmV0cmlldmUgZm9yIHRoZSBnaXZlbiBlbnRpdHkuIEdldHRlciBhbmQgU2V0dGVyIG1ldGhvZHMgd2lsbCBhdXRvbWFnaWNhbGx5XG4gICAqIGJlIHNldCB1cCBvbiB0aGUgZW50aXR5IG9uY2UgdGhlIGZpZWxkcyBhcmUgZGVmaW5lZC5cbiAgICogQG5hbWUgZmllbGRzXG4gICAqIEBtZW1iZXJPZiBFbnRpdHkjXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcGFyYW0gYXJncyAtIGZpZWxkcyBjYW4gZWl0aGVyIGJlIHNlbnQgYXMgYSBsaXN0IG9mIGFyZ3VtZW50cyBvciBhcyBhbiBBcnJheVxuICAgKiBAcmV0dXJuIHRleHRcbiAgICovXG4gIHJlbmRlcih2YWx1ZTogYW55LCBhcmdzOiBhbnkpOiBhbnkge1xuICAgIGxldCB0eXBlOiBhbnkgPSBudWxsO1xuICAgIGxldCB0ZXh0OiBhbnkgPSB2YWx1ZTtcbiAgICBsZXQgcmV6b25lZFRpbWU6IGFueTtcblxuICAgIC8vIEhhbmRsZSB3aGVuIHdlIGRvbid0IGhhdmUgbWV0YSwgYnV0IHBhc3NpbmcgYW4gZW50aXR5XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLl9zdWJ0eXBlICYmICFhcmdzKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRFbnRpdHlMYWJlbCh2YWx1ZSwgdmFsdWUuX3N1YnR5cGUpO1xuICAgIH1cblxuICAgIC8vIFN0b3AgbG9naWMgZm9yIG51bGxzXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwgfHwgIWFyZ3MpIHtcbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cblxuICAgIGlmIChhcmdzLmZvcm1hdHRlciAmJiB0eXBlb2YgYXJncy5mb3JtYXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBhcmdzLmZvcm1hdHRlcih2YWx1ZSwgYXJncyk7XG4gICAgfVxuICAgIC8vIFRPRE8gbW92ZSB0aGlzIHRvIGEgc2VydmljZVxuICAgIC8vIERldGVybWluZSBUWVBFIGJlY2F1c2UgaXRzIG5vdCBqdXN0IDEgdmFsdWUgdGhhdCBkZXRlcm1pbmVzIHRoaXMuXG4gICAgaWYgKGFyZ3MudHlwZSA9PT0gJ1RPX01BTlknKSB7XG4gICAgICB0eXBlID0gJ1RvTWFueSc7XG4gICAgfSBlbHNlIGlmIChhcmdzLnR5cGUgPT09ICdUT19PTkUnKSB7XG4gICAgICB0eXBlID0gYXJncy5hc3NvY2lhdGVkRW50aXR5LmVudGl0eTtcbiAgICB9IGVsc2UgaWYgKGFyZ3MuZGF0YVNwZWNpYWxpemF0aW9uID09PSAnREFURVRJTUUnKSB7XG4gICAgICB0eXBlID0gJ0RhdGVUaW1lJztcbiAgICB9IGVsc2UgaWYgKGFyZ3MuZGF0YVNwZWNpYWxpemF0aW9uID09PSAnWUVBUicpIHtcbiAgICAgIHR5cGUgPSAnWWVhcic7XG4gICAgfSBlbHNlIGlmIChhcmdzLmRhdGFTcGVjaWFsaXphdGlvbiA9PT0gJ0RBVEUnICYmIGFyZ3MuZGF0YVR5cGUgPT09ICdEYXRlJykge1xuICAgICAgdHlwZSA9ICdEYXRlJztcbiAgICB9IGVsc2UgaWYgKGFyZ3MuZGF0YVR5cGUgPT09ICdUaW1lc3RhbXAnKSB7XG4gICAgICB0eXBlID0gJ1RpbWVzdGFtcCc7XG4gICAgfSBlbHNlIGlmIChbJ21vYmlsZScsICdwaG9uZScsICdwaG9uZTEnLCAncGhvbmUyJywgJ3Bob25lMycsICd3b3JrUGhvbmUnXS5pbmRleE9mKGFyZ3MubmFtZSkgPiAtMSkge1xuICAgICAgdHlwZSA9ICdQaG9uZSc7XG4gICAgfSBlbHNlIGlmIChhcmdzLm5hbWUgJiYgYXJncy5uYW1lLnN1YnN0cmluZygwLCA1KSA9PT0gJ2VtYWlsJykge1xuICAgICAgdHlwZSA9ICdFbWFpbCc7XG4gICAgfSBlbHNlIGlmICgoYXJncy5uYW1lICYmIGFyZ3MubmFtZSA9PT0gJ2FkZHJlc3MuY291bnRyeUlEJykgfHwgYXJncy5vcHRpb25zVHlwZSA9PT0gJ0NvdW50cnknKSB7XG4gICAgICB0eXBlID0gJ0NvdW50cnknO1xuICAgIH0gZWxzZSBpZiAoYXJncy5vcHRpb25zVHlwZSA9PT0gJ1NraWxsVGV4dCcpIHtcbiAgICAgIHR5cGUgPSAnU2tpbGxUZXh0JztcbiAgICB9IGVsc2UgaWYgKGFyZ3Mub3B0aW9ucyB8fCBhcmdzLmlucHV0VHlwZSA9PT0gJ1NFTEVDVCcgfHwgYXJncy5pbnB1dFR5cGUgPT09ICdDSEVDS0JPWCcpIHtcbiAgICAgIHR5cGUgPSAnT3B0aW9ucyc7XG4gICAgfSBlbHNlIGlmIChbJ01PTkVZJywgJ1BFUkNFTlRBR0UnLCAnSFRNTCcsICdTU04nXS5pbmRleE9mKGFyZ3MuZGF0YVNwZWNpYWxpemF0aW9uKSA+IC0xKSB7XG4gICAgICB0eXBlID0gdGhpcy5jYXBpdGFsaXplKGFyZ3MuZGF0YVNwZWNpYWxpemF0aW9uLnRvTG93ZXJDYXNlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlID0gYXJncy5kYXRhVHlwZSB8fCAnZGVmYXVsdCc7XG4gICAgfVxuXG4gICAgLy8gVHJhbnNmb3JtIGRhdGEgaGVyZVxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnQWRkcmVzcyc6XG4gICAgICBjYXNlICdBZGRyZXNzMSc6XG4gICAgICBjYXNlICdBZGRyZXNzV2l0aG91dENvdW50cnknOlxuICAgICAgY2FzZSAnU2Vjb25kYXJ5QWRkcmVzcyc6XG4gICAgICBjYXNlICdCaWxsaW5nQWRkcmVzcyc6XG4gICAgICAgIGxldCBjb3VudHJ5OiBhbnkgPSBmaW5kQnlDb3VudHJ5SWQoTnVtYmVyKHZhbHVlLmNvdW50cnlOYW1lKSk7XG4gICAgICAgIHRleHQgPSAnJztcbiAgICAgICAgaWYgKHZhbHVlLmFkZHJlc3MxIHx8IHZhbHVlLmFkZHJlc3MyKSB7XG4gICAgICAgICAgdGV4dCArPSBgJHt2YWx1ZS5hZGRyZXNzMSB8fCAnJ30gJHt2YWx1ZS5hZGRyZXNzMiB8fCAnJ308YnIgLz5cXG5gO1xuICAgICAgICB9XG4gICAgICAgIHRleHQgKz0gYCR7dmFsdWUuY2l0eSB8fCAnJ30gJHt2YWx1ZS5zdGF0ZSB8fCAnJ30gJHt2YWx1ZS56aXAgfHwgJyd9JHt2YWx1ZS5jaXR5IHx8IHZhbHVlLnN0YXRlIHx8IHZhbHVlLnppcCA/ICc8YnIgLz5cXG4nIDogJyd9YDtcbiAgICAgICAgdGV4dCArPSBgJHtjb3VudHJ5ID8gY291bnRyeS5uYW1lIDogdmFsdWUuY291bnRyeU5hbWUgfHwgJyd9JHtjb3VudHJ5IHx8IHZhbHVlLmNvdW50cnlOYW1lID8gJzxiciAvPlxcbicgOiAnJ31gO1xuICAgICAgICB0ZXh0ID0gdGhpcy5zYW5pdGl6YXRpb25TZXJ2aWNlLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRleHQudHJpbSgpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdEYXRlVGltZSc6XG4gICAgICBjYXNlICdUaW1lc3RhbXAnOlxuICAgICAgICB0ZXh0ID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVNob3J0KHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdEYXRlJzpcbiAgICAgICAgdGV4dCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGUobmV3IERhdGUodmFsdWUpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdZZWFyJzpcbiAgICAgICAgdGV4dCA9IG5ldyBEYXRlKHZhbHVlKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1Bob25lJzpcbiAgICAgIGNhc2UgJ0VtYWlsJzpcbiAgICAgICAgdGV4dCA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ01vbmV5JzpcbiAgICAgICAgdGV4dCA9IHRoaXMubGFiZWxzLmZvcm1hdEN1cnJlbmN5KHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdQZXJjZW50YWdlJzpcbiAgICAgICAgdGV4dCA9IHRoaXMubGFiZWxzLmZvcm1hdE51bWJlcihwYXJzZUZsb2F0KHZhbHVlKS50b1N0cmluZygpLCB7IHN0eWxlOiAncGVyY2VudCcsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdEb3VibGUnOlxuICAgICAgY2FzZSAnQmlnRGVjaW1hbCc6XG4gICAgICAgIHRleHQgPSB0aGlzLmxhYmVscy5mb3JtYXROdW1iZXIodmFsdWUsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiB0aGlzLmdldE51bWJlckRlY2ltYWxQbGFjZXModmFsdWUpIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0ludGVnZXInOlxuICAgICAgICB0ZXh0ID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQnVzaW5lc3NTZWN0b3InOlxuICAgICAgY2FzZSAnQ2F0ZWdvcnknOlxuICAgICAgY2FzZSAnQ2VydGlmaWNhdGlvbic6XG4gICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbic6XG4gICAgICBjYXNlICdDb3Jwb3JhdGlvbkRlcGFydG1lbnQnOlxuICAgICAgY2FzZSAnRGlzdHJpYnV0aW9uTGlzdCc6XG4gICAgICBjYXNlICdTa2lsbCc6XG4gICAgICBjYXNlICdUZWFyc2hlZXQnOlxuICAgICAgY2FzZSAnU3BlY2lhbHR5JzpcbiAgICAgICAgdGV4dCA9IHZhbHVlLmxhYmVsIHx8IHZhbHVlLm5hbWUgfHwgJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnU2tpbGxUZXh0JzpcbiAgICAgICAgdGV4dCA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUuam9pbignLCAnKSA6IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0xlYWQnOlxuICAgICAgY2FzZSAnQ2FuZGlkYXRlJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3QnOlxuICAgICAgY2FzZSAnQ29ycG9yYXRlVXNlcic6XG4gICAgICBjYXNlICdQZXJzb24nOlxuICAgICAgICB0ZXh0ID0gdmFsdWUubGFiZWwgfHwgYCR7dmFsdWUuZmlyc3ROYW1lIHx8ICcnfSAke3ZhbHVlLmxhc3ROYW1lIHx8ICcnfWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnT3Bwb3J0dW5pdHknOlxuICAgICAgY2FzZSAnSm9iT3JkZXInOlxuICAgICAgICB0ZXh0ID0gdmFsdWUubGFiZWwgfHwgdmFsdWUudGl0bGUgfHwgJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnUGxhY2VtZW50JzpcbiAgICAgICAgaWYgKHZhbHVlLmNhbmRpZGF0ZSkge1xuICAgICAgICAgIHRleHQgPSBgJHt2YWx1ZS5jYW5kaWRhdGUuZmlyc3ROYW1lIHx8ICcnfSAke3ZhbHVlLmNhbmRpZGF0ZS5sYXN0TmFtZSB8fCAnJ31gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5qb2JPcmRlcikge1xuICAgICAgICAgIHRleHQgPSB2YWx1ZS5jYW5kaWRhdGUgPyBgJHt0ZXh0fSAtICR7dmFsdWUuam9iT3JkZXIudGl0bGUgfHwgJyd9YCA6IGAke3ZhbHVlLmpvYk9yZGVyLnRpdGxlIHx8ICcnfWA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdKb2JTdWJtaXNzaW9uJzpcbiAgICAgICAgdGV4dCA9XG4gICAgICAgICAgdmFsdWUubGFiZWwgfHxcbiAgICAgICAgICBgJHt2YWx1ZS5qb2JPcmRlciA/IGAke3ZhbHVlLmpvYk9yZGVyLnRpdGxlfSAtIGAgOiAnJ30gJHt2YWx1ZS5jYW5kaWRhdGUgPyB2YWx1ZS5jYW5kaWRhdGUuZmlyc3ROYW1lIDogJyd9ICR7XG4gICAgICAgICAgICB2YWx1ZS5jYW5kaWRhdGUgPyB2YWx1ZS5jYW5kaWRhdGUubGFzdE5hbWUgOiAnJ1xuICAgICAgICAgIH1gO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1dvcmtlcnNDb21wZW5zYXRpb25SYXRlJzpcbiAgICAgICAgdGV4dCA9IGAke3ZhbHVlLmNvbXBlbnNhdGlvbiA/IGAke3ZhbHVlLmNvbXBlbnNhdGlvbi5jb2RlfSAtIGAgOiAnJ30gJHt2YWx1ZS5jb21wZW5zYXRpb24gPyB2YWx1ZS5jb21wZW5zYXRpb24ubmFtZSA6ICcnfWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnT3B0aW9ucyc6XG4gICAgICAgIHRleHQgPSB0aGlzLm9wdGlvbnModmFsdWUsIGFyZ3Mub3B0aW9ucywgYXJncyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVG9NYW55JzpcbiAgICAgICAgaWYgKFsnQ2FuZGlkYXRlJywgJ0NvcnBvcmF0ZVVzZXInLCAnUGVyc29uJ10uaW5kZXhPZihhcmdzLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5KSA+IC0xKSB7XG4gICAgICAgICAgdGV4dCA9IHRoaXMuY29uY2F0KHZhbHVlLmRhdGEsICdmaXJzdE5hbWUnLCAnbGFzdE5hbWUnKTtcbiAgICAgICAgICBpZiAodmFsdWUuZGF0YS5sZW5ndGggPCB2YWx1ZS50b3RhbCkge1xuICAgICAgICAgICAgdGV4dCA9IHRleHQgKyAnLCAnICsgdGhpcy5sYWJlbHMuZ2V0VG9NYW55UGx1c01vcmUoeyBxdWFudGl0eTogdmFsdWUudG90YWwgLSB2YWx1ZS5kYXRhLmxlbmd0aCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgWydDYXRlZ29yeScsICdCdXNpbmVzc1NlY3RvcicsICdTa2lsbCcsICdTcGVjaWFsdHknLCAnQ2xpZW50Q29ycG9yYXRpb24nLCAnQ29ycG9yYXRpb25EZXBhcnRtZW50J10uaW5kZXhPZihcbiAgICAgICAgICAgIGFyZ3MuYXNzb2NpYXRlZEVudGl0eS5lbnRpdHksXG4gICAgICAgICAgKSA+IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIHRleHQgPSB0aGlzLmNvbmNhdCh2YWx1ZS5kYXRhLCAnbmFtZScpO1xuICAgICAgICAgIGlmICh2YWx1ZS5kYXRhLmxlbmd0aCA8IHZhbHVlLnRvdGFsKSB7XG4gICAgICAgICAgICB0ZXh0ID0gdGV4dCArICcsICcgKyB0aGlzLmxhYmVscy5nZXRUb01hbnlQbHVzTW9yZSh7IHF1YW50aXR5OiB2YWx1ZS50b3RhbCAtIHZhbHVlLmRhdGEubGVuZ3RoIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChhcmdzLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5ID09PSAnTWFpbExpc3RQdXNoSGlzdG9yeURldGFpbCcpIHtcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5jb25jYXQodmFsdWUuZGF0YSwgJ2V4dGVybmFsTGlzdE5hbWUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXh0ID0gYCR7dmFsdWUudG90YWwgfHwgJyd9YDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0NvdW50cnknOlxuICAgICAgICBsZXQgY291bnRyeU9iajogYW55ID0gZmluZEJ5Q291bnRyeUlkKE51bWJlcih2YWx1ZSkpO1xuICAgICAgICB0ZXh0ID0gY291bnRyeU9iaiA/IGNvdW50cnlPYmoubmFtZSA6IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0h0bWwnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGV4dCA9IHRoaXMuc2FuaXRpemF0aW9uU2VydmljZS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZS5yZXBsYWNlKC9cXDxhL2dpLCAnPGEgdGFyZ2V0PVwiX2JsYW5rXCInKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDYW5kaWRhdGVDb21tZW50JzpcbiAgICAgICAgdGV4dCA9IHZhbHVlLmNvbW1lbnRzID8gYCR7dGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVNob3J0KHZhbHVlLmRhdGVMYXN0TW9kaWZpZWQpfSAoJHt2YWx1ZS5uYW1lfSkgLSAke3ZhbHVlLmNvbW1lbnRzfWAgOiAnJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0ZXh0ID0gdmFsdWUudHJpbSA/IHZhbHVlLnRyaW0oKSA6IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICB1cGRhdGVWYWx1ZSh2YWx1ZTogYW55LCBhcmdzOiBhbnkpOiBhbnkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnJlbmRlcih2YWx1ZSwgYXJncyk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZT86IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lcXVhbHModmFsdWUsIHRoaXMubGFzdFZhbHVlKSAmJiB0aGlzLmVxdWFscyhhcmdzLCB0aGlzLmxhc3RBcmdzKSkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmxhc3RBcmdzID0gYXJncztcblxuICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5sYXN0VmFsdWUsIHRoaXMubGFzdEFyZ3MpO1xuXG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2ltcGxlIGZ1bmN0aW9uIGNvbmNhdCBhIGxpc3Qgb2YgZmllbGRzIGZyb20gYSBsaXN0IG9mIG9iamVjdHNcbiAgICogQG5hbWUgb3B0aW9uc1xuICAgKiBAcGFyYW0gbGlzdCAtIHRoZSBsaXN0IG9mIHZhbHVlcyB0byB1c2VcbiAgICogQHBhcmFtIGZpZWxkcyAtIGxpc3Qgb2YgZmllbGRzIHRvIGV4dHJhY3RcbiAgICovXG4gIGNvbmNhdChsaXN0OiBhbnksIC4uLmZpZWxkczogYW55W10pOiBhbnkge1xuICAgIGxldCBkYXRhOiBhbnkgPSBbXTtcbiAgICBmb3IgKGxldCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgIGxldCBsYWJlbDogYW55ID0gW107XG4gICAgICBmb3IgKGxldCBmaWVsZCBvZiBmaWVsZHMpIHtcbiAgICAgICAgbGFiZWwucHVzaChgJHtpdGVtW2ZpZWxkXX1gKTtcbiAgICAgIH1cbiAgICAgIGRhdGEucHVzaChsYWJlbC5qb2luKCcgJykpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YS5qb2luKCcsICcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbXBsZSBmdW5jdGlvbiB0byBsb29rIHVwIHRoZSAqKmxhYmVsKiogdG8gZGlzcGxheSBmcm9tIG9wdGlvbnNcbiAgICogQG5hbWUgb3B0aW9uc1xuICAgKiBAcGFyYW0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gZmluZFxuICAgKiBAcGFyYW0gbGlzdCAtIGxpc3Qgb2Ygb3B0aW9ucyAobGFiZWwvdmFsdWUgcGFpcnMpXG4gICAqL1xuICBvcHRpb25zKHZhbHVlOiBhbnksIGxpc3Q6IGFueSwgYXJnczogYW55KTogYW55IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IFt2YWx1ZV07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdmFsdWUubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2YgbGlzdCkge1xuICAgICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24ubGFiZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCFhcmdzLm9wdGlvbnNUeXBlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdBUk5JTkc6IFRoZXJlIGFyZSBubyBvcHRpb25zIGNvbmZpZ3VyZWQgZm9yIHRoZSBmaWVsZDogJHthcmdzLmxhYmVsfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldE51bWJlckRlY2ltYWxQbGFjZXModmFsdWU6IGFueSk6IGFueSB7XG4gICAgbGV0IGRlY2ltYWxQbGFjZXM6IGFueTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCBudW1iZXJTdHJpbmc6IGFueSA9IHBhcnNlRmxvYXQodmFsdWUpLnRvU3RyaW5nKCk7XG4gICAgICBsZXQgZGVjaW1hbFBsYWNlOiBhbnkgPSAobnVtYmVyU3RyaW5nIHx8ICcnKS5zcGxpdCgnLicpWzFdIHx8ICcnO1xuICAgICAgZGVjaW1hbFBsYWNlcyA9IGRlY2ltYWxQbGFjZS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBkZWNpbWFsUGxhY2VzIHx8IDE7XG4gIH1cblxuICAvKipcbiAgICogQ2FwaXRhbGl6ZXMgdGhlIGZpcnN0IGxldHRlclxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIGNhcGl0YWxpemUodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG4gIH1cbn1cbiJdfQ==