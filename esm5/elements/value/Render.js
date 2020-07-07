/**
 * @fileoverview added by tsickle
 * Generated from: elements/value/Render.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        try {
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
        }
        catch (e) {
            console.error("WARNING: There was a problem rendering the value of the field: " + args.label + ". Please check the configuration");
            console.error(e);
            return text;
        }
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
        var e_1, _a, e_2, _b;
        var fields = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fields[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var data = [];
        try {
            for (var list_1 = tslib_1.__values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var item = list_1_1.value;
                /** @type {?} */
                var label = [];
                try {
                    for (var fields_1 = (e_2 = void 0, tslib_1.__values(fields)), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
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
            return value.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
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
            }));
        }
        catch (e) {
            if (!args.optionsType) {
                throw Error(e);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVuZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3ZhbHVlL1JlbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QmxFO0lBVUUsb0JBQW9CLGNBQWlDLEVBQVUsbUJBQWlDLEVBQVUsTUFBd0I7UUFBOUcsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDOzs7Ozs7SUFFdEksMkJBQU07Ozs7O0lBQU4sVUFBTyxTQUFjLEVBQUUsU0FBYztRQUNuQyxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksU0FBUyxLQUFLLElBQUksSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQzVDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLFNBQVMsS0FBSyxTQUFTLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUN0RCxPQUFPLElBQUksQ0FBQztTQUNiOztZQUNLLEVBQUUsR0FBUSxPQUFPLFNBQVM7O1lBQzFCLEVBQUUsR0FBUSxPQUFPLFNBQVM7O1lBQzVCLE1BQWM7O1lBQ2QsR0FBUTs7WUFDUixNQUFXO1FBQ2YsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxRQUFRLEVBQUU7WUFDaEMsSUFB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LENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnQkFqWUYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxRQUFRO29CQUNkLElBQUksRUFBRSxLQUFLO2lCQUNaO2dCQUNBLFVBQVU7Ozs7Z0JBcENnQixpQkFBaUI7Z0JBQ25DLFlBQVk7Z0JBRVosZ0JBQWdCOztJQStaekIsaUJBQUM7Q0FBQSxBQWxZRCxJQWtZQztTQTdYWSxVQUFVOzs7SUFDckIsMkJBQVc7O0lBQ1gsK0JBQWU7O0lBQ2YsOEJBQWM7Ozs7O0lBRUYsb0NBQXlDOzs7OztJQUFFLHlDQUF5Qzs7Ozs7SUFBRSw0QkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3ksIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IGZpbmRCeUNvdW50cnlJZCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvdW50cmllcy9Db3VudHJpZXMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIFJlbmRlcnMgZGF0YSBhcHByb3ByaWF0ZWx5IGJhc2VkIG9uIHRoZSBkYXRhIHR5cGUgZm91bmQgaW4gTWV0YVxuICogQWxsIGRhdGEgdHlwZXMgZGVmaW5lZCBieSBidWxsaG9ybiBzaG91bGQgYmUgc3VwcG9ydGVkOlxuICpcbiAqIC0gKipTdHJpbmcqKjogdHJpbXMgdmFsdWUgYW5kIHJldHVybnNcbiAqIC0gKipJbnRlZ2VyKio6IHJldHVybiB2YWx1ZVxuICogLSAqKkRvdWJsZSoqOiByZXR1cm4gdmFsdWUgZml4ZWQgdG8gMiBkZWNpbWFsc1xuICogLSAqKkJpZ0RlY2ltYWwqKjogcmV0dXJuIHZhbHVlIGZpeGVkIHRvIDIgZGVjaW1hbHNcbiAqIC0gKipBZGRyZXNzKio6IG9ubHkgY2l0eSBhbmQvb3Igc3RhdGUgcmV0dXJuZWRcbiAqIC0gKipBZGRyZXNzMSoqOiBvbmx5IGNpdHkgYW5kL29yIHN0YXRlIHJldHVybmVkXG4gKiAtICoqQWRkcmVzc1dpdGhvdXRDb3VudHJ5Kio6IG9ubHkgY2l0eSBhbmQvb3Igc3RhdGUgcmV0dXJuZWRcbiAqIC0gKipDdXJyZW5jeSoqOiBwdXQgYSAkIGluIGZyb250XG4gKiAtICoqUGVyY2VudGFnZSoqOiBkaXZpZGUgYnkgMTAwIGZpeCB0byAyIGRlY2ltYWxzIHBsYWNlIGFuZCByZXR1cm5cbiAqIC0gKipPcHRpb25zKio6IHJldHVybnMgdGhlIGFwcHJvcHJpYXRlICdsYWJlbCcgZm9yIHRoZSAndmFsdWUnIGZyb20gJ29wdGlvbnMnXG4gKiAtICoqQXJyYXkqKjogcmV0dXJucyBsaXN0IGNvbW1hIHNlcGFyYXRlZFxuICogLSAqKkRhdGVUaW1lKio6IGZvcm1hdHMgdGhlIGRhdGVcbiAqIC0gKipUaW1lU3RhbXAqKjogZm9ybWF0cyB0aGUgZGF0ZVxuICogLSAqKlRvT25lKio6IHJldHVybiB0aGUgZW50aXR5IHNwZWNpZmljIG5hbWUgKGllLiBuYW1lLCBmaXJzdE5hbWUgbGFzdE5hbWUsIHRpdGxlLCAuLi4pXG4gKiAtICoqVG9NYW55Kio6IHJldHVybiBhbiBhcnJheSBvZiB0aGUgZW50aXR5IHNwZWNpZmljIG5hbWVzIChpZS4gbmFtZSwgZmlyc3ROYW1lIGxhc3ROYW1lLCB0aXRsZSwgLi4uKVxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBcbiAqIHt7IGV4cHJlc3Npb24gfCByZW5kZXI6ZmllbGQgfX1cbiAqIGBgYFxuICovXG5AUGlwZSh7XG4gIG5hbWU6ICdyZW5kZXInLFxuICBwdXJlOiBmYWxzZSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVuZGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB2YWx1ZTogYW55O1xuICBsYXN0VmFsdWU6IGFueTtcbiAgbGFzdEFyZ3M6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBzYW5pdGl6YXRpb25TZXJ2aWNlOiBEb21TYW5pdGl6ZXIsIHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIGVxdWFscyhvYmplY3RPbmU6IGFueSwgb2JqZWN0VHdvOiBhbnkpOiBhbnkge1xuICAgIGlmIChvYmplY3RPbmUgPT09IG9iamVjdFR3bykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChvYmplY3RPbmUgPT09IG51bGwgfHwgb2JqZWN0VHdvID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChvYmplY3RPbmUgIT09IG9iamVjdE9uZSAmJiBvYmplY3RUd28gIT09IG9iamVjdFR3bykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHQxOiBhbnkgPSB0eXBlb2Ygb2JqZWN0T25lO1xuICAgIGNvbnN0IHQyOiBhbnkgPSB0eXBlb2Ygb2JqZWN0VHdvO1xuICAgIGxldCBsZW5ndGg6IG51bWJlcjtcbiAgICBsZXQga2V5OiBhbnk7XG4gICAgbGV0IGtleVNldDogYW55O1xuICAgIGlmICh0MSA9PT0gdDIgJiYgdDEgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmplY3RPbmUpKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvYmplY3RUd28pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxlbmd0aCA9IG9iamVjdE9uZS5sZW5ndGg7XG4gICAgICAgIGlmIChsZW5ndGggPT09IG9iamVjdFR3by5sZW5ndGgpIHtcbiAgICAgICAgICBmb3IgKGtleSA9IDA7IGtleSA8IGxlbmd0aDsga2V5KyspIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5lcXVhbHMob2JqZWN0T25lW2tleV0sIG9iamVjdFR3b1trZXldKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmplY3RUd28pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGtleVNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGZvciAoa2V5IGluIG9iamVjdE9uZSkge1xuICAgICAgICAgIGlmIChvYmplY3RPbmVba2V5XSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmVxdWFscyhvYmplY3RPbmVba2V5XSwgb2JqZWN0VHdvW2tleV0pKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVNldFtrZXldID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqZWN0VHdvKSB7XG4gICAgICAgICAgaWYgKCEoa2V5IGluIGtleVNldCkgJiYgdHlwZW9mIG9iamVjdFR3b1trZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0RW50aXR5TGFiZWwoaXRlbTogYW55LCBlbnRpdHk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChlbnRpdHkpIHtcbiAgICAgIGNhc2UgJ0NvcnBvcmF0ZVVzZXInOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdCc6XG4gICAgICBjYXNlICdDbGllbnRDb250YWN0MSc6XG4gICAgICBjYXNlICdDbGllbnRDb250YWN0Mic6XG4gICAgICBjYXNlICdDbGllbnRDb250YWN0Myc6XG4gICAgICBjYXNlICdDbGllbnRDb250YWN0NCc6XG4gICAgICBjYXNlICdDbGllbnRDb250YWN0NSc6XG4gICAgICBjYXNlICdMZWFkJzpcbiAgICAgIGNhc2UgJ0NhbmRpZGF0ZSc6XG4gICAgICBjYXNlICdQZXJzb24nOlxuICAgICAgICByZXR1cm4gYCR7aXRlbS5maXJzdE5hbWUgfHwgJyd9ICR7aXRlbS5sYXN0TmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uMSc6XG4gICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbjInOlxuICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24zJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uNCc6XG4gICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbjUnOlxuICAgICAgICByZXR1cm4gYCR7aXRlbS5uYW1lIHx8ICcnfWAudHJpbSgpO1xuICAgICAgY2FzZSAnSm9iT3JkZXInOlxuICAgICAgY2FzZSAnSm9iT3JkZXIxJzpcbiAgICAgIGNhc2UgJ0pvYk9yZGVyMic6XG4gICAgICBjYXNlICdKb2JPcmRlcjMnOlxuICAgICAgY2FzZSAnSm9iT3JkZXI0JzpcbiAgICAgIGNhc2UgJ0pvYk9yZGVyNSc6XG4gICAgICBjYXNlICdPcHBvcnR1bml0eSc6XG4gICAgICAgIHJldHVybiBgJHtpdGVtLnRpdGxlIHx8ICcnfWAudHJpbSgpO1xuICAgICAgY2FzZSAnUGxhY2VtZW50JzpcbiAgICAgICAgbGV0IGxhYmVsOiBzdHJpbmcgPSAnJztcbiAgICAgICAgaWYgKGl0ZW0uY2FuZGlkYXRlKSB7XG4gICAgICAgICAgbGFiZWwgPSBgJHtpdGVtLmNhbmRpZGF0ZS5maXJzdE5hbWV9ICR7aXRlbS5jYW5kaWRhdGUubGFzdE5hbWV9YC50cmltKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0uam9iT3JkZXIpIHtcbiAgICAgICAgICBsYWJlbCA9IGAke2xhYmVsfSAtICR7aXRlbS5qb2JPcmRlci50aXRsZX1gLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZSB0aGUgZmllbGRzIHRvIHNldCBvciByZXRyaWV2ZSBmb3IgdGhlIGdpdmVuIGVudGl0eS4gR2V0dGVyIGFuZCBTZXR0ZXIgbWV0aG9kcyB3aWxsIGF1dG9tYWdpY2FsbHlcbiAgICogYmUgc2V0IHVwIG9uIHRoZSBlbnRpdHkgb25jZSB0aGUgZmllbGRzIGFyZSBkZWZpbmVkLlxuICAgKiBAbmFtZSBmaWVsZHNcbiAgICogQG1lbWJlck9mIEVudGl0eSNcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEBwYXJhbSBhcmdzIC0gZmllbGRzIGNhbiBlaXRoZXIgYmUgc2VudCBhcyBhIGxpc3Qgb2YgYXJndW1lbnRzIG9yIGFzIGFuIEFycmF5XG4gICAqIEByZXR1cm4gdGV4dFxuICAgKi9cbiAgcmVuZGVyKHZhbHVlOiBhbnksIGFyZ3M6IGFueSk6IGFueSB7XG4gICAgbGV0IHR5cGU6IGFueSA9IG51bGw7XG4gICAgbGV0IHRleHQ6IGFueSA9IHZhbHVlO1xuICAgIGxldCByZXpvbmVkVGltZTogYW55O1xuXG4gICAgLy8gSGFuZGxlIHdoZW4gd2UgZG9uJ3QgaGF2ZSBtZXRhLCBidXQgcGFzc2luZyBhbiBlbnRpdHlcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUuX3N1YnR5cGUgJiYgIWFyZ3MpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEVudGl0eUxhYmVsKHZhbHVlLCB2YWx1ZS5fc3VidHlwZSk7XG4gICAgfVxuXG4gICAgLy8gU3RvcCBsb2dpYyBmb3IgbnVsbHNcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCAhYXJncykge1xuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MuZm9ybWF0dGVyICYmIHR5cGVvZiBhcmdzLmZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGFyZ3MuZm9ybWF0dGVyKHZhbHVlLCBhcmdzKTtcbiAgICB9XG4gICAgLy8gVE9ETyBtb3ZlIHRoaXMgdG8gYSBzZXJ2aWNlXG4gICAgLy8gRGV0ZXJtaW5lIFRZUEUgYmVjYXVzZSBpdHMgbm90IGp1c3QgMSB2YWx1ZSB0aGF0IGRldGVybWluZXMgdGhpcy5cbiAgICBpZiAoYXJncy50eXBlID09PSAnVE9fTUFOWScpIHtcbiAgICAgIHR5cGUgPSAnVG9NYW55JztcbiAgICB9IGVsc2UgaWYgKGFyZ3MudHlwZSA9PT0gJ1RPX09ORScpIHtcbiAgICAgIHR5cGUgPSBhcmdzLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5O1xuICAgIH0gZWxzZSBpZiAoYXJncy5kYXRhU3BlY2lhbGl6YXRpb24gPT09ICdEQVRFVElNRScpIHtcbiAgICAgIHR5cGUgPSAnRGF0ZVRpbWUnO1xuICAgIH0gZWxzZSBpZiAoYXJncy5kYXRhU3BlY2lhbGl6YXRpb24gPT09ICdZRUFSJykge1xuICAgICAgdHlwZSA9ICdZZWFyJztcbiAgICB9IGVsc2UgaWYgKGFyZ3MuZGF0YVNwZWNpYWxpemF0aW9uID09PSAnREFURScgJiYgYXJncy5kYXRhVHlwZSA9PT0gJ0RhdGUnKSB7XG4gICAgICB0eXBlID0gJ0RhdGUnO1xuICAgIH0gZWxzZSBpZiAoYXJncy5kYXRhVHlwZSA9PT0gJ1RpbWVzdGFtcCcpIHtcbiAgICAgIHR5cGUgPSAnVGltZXN0YW1wJztcbiAgICB9IGVsc2UgaWYgKFsnbW9iaWxlJywgJ3Bob25lJywgJ3Bob25lMScsICdwaG9uZTInLCAncGhvbmUzJywgJ3dvcmtQaG9uZSddLmluZGV4T2YoYXJncy5uYW1lKSA+IC0xKSB7XG4gICAgICB0eXBlID0gJ1Bob25lJztcbiAgICB9IGVsc2UgaWYgKGFyZ3MubmFtZSAmJiBhcmdzLm5hbWUuc3Vic3RyaW5nKDAsIDUpID09PSAnZW1haWwnKSB7XG4gICAgICB0eXBlID0gJ0VtYWlsJztcbiAgICB9IGVsc2UgaWYgKChhcmdzLm5hbWUgJiYgYXJncy5uYW1lID09PSAnYWRkcmVzcy5jb3VudHJ5SUQnKSB8fCBhcmdzLm9wdGlvbnNUeXBlID09PSAnQ291bnRyeScpIHtcbiAgICAgIHR5cGUgPSAnQ291bnRyeSc7XG4gICAgfSBlbHNlIGlmIChhcmdzLm9wdGlvbnNUeXBlID09PSAnU2tpbGxUZXh0Jykge1xuICAgICAgdHlwZSA9ICdTa2lsbFRleHQnO1xuICAgIH0gZWxzZSBpZiAoYXJncy5vcHRpb25zIHx8IGFyZ3MuaW5wdXRUeXBlID09PSAnU0VMRUNUJyB8fCBhcmdzLmlucHV0VHlwZSA9PT0gJ0NIRUNLQk9YJykge1xuICAgICAgdHlwZSA9ICdPcHRpb25zJztcbiAgICB9IGVsc2UgaWYgKFsnTU9ORVknLCAnUEVSQ0VOVEFHRScsICdIVE1MJywgJ1NTTiddLmluZGV4T2YoYXJncy5kYXRhU3BlY2lhbGl6YXRpb24pID4gLTEpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmNhcGl0YWxpemUoYXJncy5kYXRhU3BlY2lhbGl6YXRpb24udG9Mb3dlckNhc2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGUgPSBhcmdzLmRhdGFUeXBlIHx8ICdkZWZhdWx0JztcbiAgICB9XG5cbiAgICAvLyBUcmFuc2Zvcm0gZGF0YSBoZXJlXG4gICAgdHJ5IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdBZGRyZXNzJzpcbiAgICAgICAgY2FzZSAnQWRkcmVzczEnOlxuICAgICAgICBjYXNlICdBZGRyZXNzV2l0aG91dENvdW50cnknOlxuICAgICAgICBjYXNlICdTZWNvbmRhcnlBZGRyZXNzJzpcbiAgICAgICAgY2FzZSAnQmlsbGluZ0FkZHJlc3MnOlxuICAgICAgICAgIGNvbnN0IGNvdW50cnk6IGFueSA9IGZpbmRCeUNvdW50cnlJZChOdW1iZXIodmFsdWUuY291bnRyeU5hbWUpKTtcbiAgICAgICAgICB0ZXh0ID0gJyc7XG4gICAgICAgICAgaWYgKHZhbHVlLmFkZHJlc3MxIHx8IHZhbHVlLmFkZHJlc3MyKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IGAke3ZhbHVlLmFkZHJlc3MxIHx8ICcnfSAke3ZhbHVlLmFkZHJlc3MyIHx8ICcnfTxiciAvPlxcbmA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHQgKz0gYCR7dmFsdWUuY2l0eSB8fCAnJ30gJHt2YWx1ZS5zdGF0ZSB8fCAnJ30gJHt2YWx1ZS56aXAgfHwgJyd9JHt2YWx1ZS5jaXR5IHx8IHZhbHVlLnN0YXRlIHx8IHZhbHVlLnppcCA/ICc8YnIgLz5cXG4nIDogJyd9YDtcbiAgICAgICAgICB0ZXh0ICs9IGAke2NvdW50cnkgPyBjb3VudHJ5Lm5hbWUgOiB2YWx1ZS5jb3VudHJ5TmFtZSB8fCAnJ30ke2NvdW50cnkgfHwgdmFsdWUuY291bnRyeU5hbWUgPyAnPGJyIC8+XFxuJyA6ICcnfWA7XG4gICAgICAgICAgdGV4dCA9IHRoaXMuc2FuaXRpemF0aW9uU2VydmljZS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0ZXh0LnRyaW0oKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0RhdGVUaW1lJzpcbiAgICAgICAgY2FzZSAnVGltZXN0YW1wJzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVNob3J0KHZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRGF0ZSc6XG4gICAgICAgICAgdGV4dCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGUobmV3IERhdGUodmFsdWUpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnWWVhcic6XG4gICAgICAgICAgdGV4dCA9IG5ldyBEYXRlKHZhbHVlKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQaG9uZSc6XG4gICAgICAgIGNhc2UgJ0VtYWlsJzpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ01vbmV5JzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5sYWJlbHMuZm9ybWF0Q3VycmVuY3kodmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQZXJjZW50YWdlJzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5sYWJlbHMuZm9ybWF0TnVtYmVyKHBhcnNlRmxvYXQodmFsdWUpLnRvU3RyaW5nKCksIHsgc3R5bGU6ICdwZXJjZW50JywgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdEb3VibGUnOlxuICAgICAgICBjYXNlICdCaWdEZWNpbWFsJzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5sYWJlbHMuZm9ybWF0TnVtYmVyKHZhbHVlLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogdGhpcy5nZXROdW1iZXJEZWNpbWFsUGxhY2VzKHZhbHVlKSB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSW50ZWdlcic6XG4gICAgICAgICAgdGV4dCA9IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdCdXNpbmVzc1NlY3Rvcic6XG4gICAgICAgIGNhc2UgJ0NhdGVnb3J5JzpcbiAgICAgICAgY2FzZSAnQ2VydGlmaWNhdGlvbic6XG4gICAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uJzpcbiAgICAgICAgY2FzZSAnQ29ycG9yYXRpb25EZXBhcnRtZW50JzpcbiAgICAgICAgY2FzZSAnRGlzdHJpYnV0aW9uTGlzdCc6XG4gICAgICAgIGNhc2UgJ1NraWxsJzpcbiAgICAgICAgY2FzZSAnVGVhcnNoZWV0JzpcbiAgICAgICAgY2FzZSAnU3BlY2lhbHR5JzpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUubGFiZWwgfHwgdmFsdWUubmFtZSB8fCAnJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnU2tpbGxUZXh0JzpcbiAgICAgICAgICB0ZXh0ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5qb2luKCcsICcpIDogdmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0xlYWQnOlxuICAgICAgICBjYXNlICdDYW5kaWRhdGUnOlxuICAgICAgICBjYXNlICdDbGllbnRDb250YWN0JzpcbiAgICAgICAgY2FzZSAnQ29ycG9yYXRlVXNlcic6XG4gICAgICAgIGNhc2UgJ1BlcnNvbic6XG4gICAgICAgICAgdGV4dCA9IHZhbHVlLmxhYmVsIHx8IGAke3ZhbHVlLmZpcnN0TmFtZSB8fCAnJ30gJHt2YWx1ZS5sYXN0TmFtZSB8fCAnJ31gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdPcHBvcnR1bml0eSc6XG4gICAgICAgIGNhc2UgJ0pvYk9yZGVyJzpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUubGFiZWwgfHwgdmFsdWUudGl0bGUgfHwgJyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1BsYWNlbWVudCc6XG4gICAgICAgICAgaWYgKHZhbHVlLmNhbmRpZGF0ZSkge1xuICAgICAgICAgICAgdGV4dCA9IGAke3ZhbHVlLmNhbmRpZGF0ZS5maXJzdE5hbWUgfHwgJyd9ICR7dmFsdWUuY2FuZGlkYXRlLmxhc3ROYW1lIHx8ICcnfWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2YWx1ZS5qb2JPcmRlcikge1xuICAgICAgICAgICAgdGV4dCA9IHZhbHVlLmNhbmRpZGF0ZSA/IGAke3RleHR9IC0gJHt2YWx1ZS5qb2JPcmRlci50aXRsZSB8fCAnJ31gIDogYCR7dmFsdWUuam9iT3JkZXIudGl0bGUgfHwgJyd9YDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0pvYlN1Ym1pc3Npb24nOlxuICAgICAgICAgIHRleHQgPVxuICAgICAgICAgICAgdmFsdWUubGFiZWwgfHxcbiAgICAgICAgICAgIGAke3ZhbHVlLmpvYk9yZGVyID8gYCR7dmFsdWUuam9iT3JkZXIudGl0bGV9IC0gYCA6ICcnfSAke3ZhbHVlLmNhbmRpZGF0ZSA/IHZhbHVlLmNhbmRpZGF0ZS5maXJzdE5hbWUgOiAnJ30gJHtcbiAgICAgICAgICAgICAgdmFsdWUuY2FuZGlkYXRlID8gdmFsdWUuY2FuZGlkYXRlLmxhc3ROYW1lIDogJydcbiAgICAgICAgICAgIH1gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdXb3JrZXJzQ29tcGVuc2F0aW9uUmF0ZSc6XG4gICAgICAgICAgdGV4dCA9IGAke3ZhbHVlLmNvbXBlbnNhdGlvbiA/IGAke3ZhbHVlLmNvbXBlbnNhdGlvbi5jb2RlfSAtIGAgOiAnJ30gJHt2YWx1ZS5jb21wZW5zYXRpb24gPyB2YWx1ZS5jb21wZW5zYXRpb24ubmFtZSA6ICcnfWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ09wdGlvbnMnOlxuICAgICAgICAgIHRleHQgPSB0aGlzLm9wdGlvbnModmFsdWUsIGFyZ3Mub3B0aW9ucywgYXJncyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1RvTWFueSc6XG4gICAgICAgICAgaWYgKFsnQ2FuZGlkYXRlJywgJ0NvcnBvcmF0ZVVzZXInLCAnUGVyc29uJ10uaW5kZXhPZihhcmdzLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5KSA+IC0xKSB7XG4gICAgICAgICAgICB0ZXh0ID0gdGhpcy5jb25jYXQodmFsdWUuZGF0YSwgJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScpO1xuICAgICAgICAgICAgaWYgKHZhbHVlLmRhdGEubGVuZ3RoIDwgdmFsdWUudG90YWwpIHtcbiAgICAgICAgICAgICAgdGV4dCA9IHRleHQgKyAnLCAnICsgdGhpcy5sYWJlbHMuZ2V0VG9NYW55UGx1c01vcmUoeyBxdWFudGl0eTogdmFsdWUudG90YWwgLSB2YWx1ZS5kYXRhLmxlbmd0aCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgWydDYXRlZ29yeScsICdCdXNpbmVzc1NlY3RvcicsICdTa2lsbCcsICdTcGVjaWFsdHknLCAnQ2xpZW50Q29ycG9yYXRpb24nLCAnQ29ycG9yYXRpb25EZXBhcnRtZW50J10uaW5kZXhPZihcbiAgICAgICAgICAgICAgYXJncy5hc3NvY2lhdGVkRW50aXR5LmVudGl0eSxcbiAgICAgICAgICAgICkgPiAtMVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGV4dCA9IHRoaXMuY29uY2F0KHZhbHVlLmRhdGEsICduYW1lJyk7XG4gICAgICAgICAgICBpZiAodmFsdWUuZGF0YS5sZW5ndGggPCB2YWx1ZS50b3RhbCkge1xuICAgICAgICAgICAgICB0ZXh0ID0gdGV4dCArICcsICcgKyB0aGlzLmxhYmVscy5nZXRUb01hbnlQbHVzTW9yZSh7IHF1YW50aXR5OiB2YWx1ZS50b3RhbCAtIHZhbHVlLmRhdGEubGVuZ3RoIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5hc3NvY2lhdGVkRW50aXR5LmVudGl0eSA9PT0gJ01haWxMaXN0UHVzaEhpc3RvcnlEZXRhaWwnKSB7XG4gICAgICAgICAgICB0ZXh0ID0gdGhpcy5jb25jYXQodmFsdWUuZGF0YSwgJ2V4dGVybmFsTGlzdE5hbWUnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGV4dCA9IGAke3ZhbHVlLnRvdGFsIHx8ICcnfWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdDb3VudHJ5JzpcbiAgICAgICAgICBjb25zdCBjb3VudHJ5T2JqOiBhbnkgPSBmaW5kQnlDb3VudHJ5SWQoTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgICAgdGV4dCA9IGNvdW50cnlPYmogPyBjb3VudHJ5T2JqLm5hbWUgOiB2YWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSHRtbCc6XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmpvaW4oJyAnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGV4dCA9IHRoaXMuc2FuaXRpemF0aW9uU2VydmljZS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZS5yZXBsYWNlKC9cXDxhL2dpLCAnPGEgdGFyZ2V0PVwiX2JsYW5rXCInKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdDYW5kaWRhdGVDb21tZW50JzpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUuY29tbWVudHMgPyBgJHt0aGlzLmxhYmVscy5mb3JtYXREYXRlU2hvcnQodmFsdWUuZGF0ZUxhc3RNb2RpZmllZCl9ICgke3ZhbHVlLm5hbWV9KSAtICR7dmFsdWUuY29tbWVudHN9YCA6ICcnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRleHQgPSB2YWx1ZS50cmltID8gdmFsdWUudHJpbSgpIDogdmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBXQVJOSU5HOiBUaGVyZSB3YXMgYSBwcm9ibGVtIHJlbmRlcmluZyB0aGUgdmFsdWUgb2YgdGhlIGZpZWxkOiAke2FyZ3MubGFiZWx9LiBQbGVhc2UgY2hlY2sgdGhlIGNvbmZpZ3VyYXRpb25gKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVWYWx1ZSh2YWx1ZTogYW55LCBhcmdzOiBhbnkpOiBhbnkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnJlbmRlcih2YWx1ZSwgYXJncyk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZT86IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lcXVhbHModmFsdWUsIHRoaXMubGFzdFZhbHVlKSAmJiB0aGlzLmVxdWFscyhhcmdzLCB0aGlzLmxhc3RBcmdzKSkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmxhc3RBcmdzID0gYXJncztcblxuICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5sYXN0VmFsdWUsIHRoaXMubGFzdEFyZ3MpO1xuXG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2ltcGxlIGZ1bmN0aW9uIGNvbmNhdCBhIGxpc3Qgb2YgZmllbGRzIGZyb20gYSBsaXN0IG9mIG9iamVjdHNcbiAgICogQG5hbWUgb3B0aW9uc1xuICAgKiBAcGFyYW0gbGlzdCAtIHRoZSBsaXN0IG9mIHZhbHVlcyB0byB1c2VcbiAgICogQHBhcmFtIGZpZWxkcyAtIGxpc3Qgb2YgZmllbGRzIHRvIGV4dHJhY3RcbiAgICovXG4gIGNvbmNhdChsaXN0OiBhbnksIC4uLmZpZWxkczogYW55W10pOiBhbnkge1xuICAgIGNvbnN0IGRhdGE6IGFueSA9IFtdO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBjb25zdCBsYWJlbDogYW55ID0gW107XG4gICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZpZWxkcykge1xuICAgICAgICBsYWJlbC5wdXNoKGAke2l0ZW1bZmllbGRdfWApO1xuICAgICAgfVxuICAgICAgZGF0YS5wdXNoKGxhYmVsLmpvaW4oJyAnKSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhLmpvaW4oJywgJyk7XG4gIH1cblxuICAvKipcbiAgICogU2ltcGxlIGZ1bmN0aW9uIHRvIGxvb2sgdXAgdGhlICoqbGFiZWwqKiB0byBkaXNwbGF5IGZyb20gb3B0aW9uc1xuICAgKiBAbmFtZSBvcHRpb25zXG4gICAqIEBwYXJhbSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBmaW5kXG4gICAqIEBwYXJhbSBsaXN0IC0gbGlzdCBvZiBvcHRpb25zIChsYWJlbC92YWx1ZSBwYWlycylcbiAgICovXG4gIG9wdGlvbnModmFsdWU6IGFueSwgbGlzdDogYW55LCBhcmdzOiBhbnkpOiBhbnkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gW3ZhbHVlXTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB2YWx1ZS5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBsaXN0KSB7XG4gICAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5sYWJlbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIWFyZ3Mub3B0aW9uc1R5cGUpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0TnVtYmVyRGVjaW1hbFBsYWNlcyh2YWx1ZTogYW55KTogYW55IHtcbiAgICBsZXQgZGVjaW1hbFBsYWNlczogYW55O1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgbnVtYmVyU3RyaW5nOiBhbnkgPSBwYXJzZUZsb2F0KHZhbHVlKS50b1N0cmluZygpO1xuICAgICAgY29uc3QgZGVjaW1hbFBsYWNlOiBhbnkgPSAobnVtYmVyU3RyaW5nIHx8ICcnKS5zcGxpdCgnLicpWzFdIHx8ICcnO1xuICAgICAgZGVjaW1hbFBsYWNlcyA9IGRlY2ltYWxQbGFjZS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBkZWNpbWFsUGxhY2VzIHx8IDE7XG4gIH1cblxuICAvKipcbiAgICogQ2FwaXRhbGl6ZXMgdGhlIGZpcnN0IGxldHRlclxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIGNhcGl0YWxpemUodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG4gIH1cbn1cbiJdfQ==