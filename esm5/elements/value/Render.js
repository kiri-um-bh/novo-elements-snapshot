/**
 * @fileoverview added by tsickle
 * Generated from: elements/value/Render.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { ChangeDetectorRef, Injectable, Pipe } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVuZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3ZhbHVlL1JlbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QmxFO0lBVUUsb0JBQW9CLGNBQWlDLEVBQVUsbUJBQWlDLEVBQVUsTUFBd0I7UUFBOUcsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBSSxDQUFDOzs7Ozs7SUFFdkksMkJBQU07Ozs7O0lBQU4sVUFBTyxTQUFjLEVBQUUsU0FBYztRQUNuQyxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksU0FBUyxLQUFLLElBQUksSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQzVDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLFNBQVMsS0FBSyxTQUFTLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUN0RCxPQUFPLElBQUksQ0FBQztTQUNiOztZQUNLLEVBQUUsR0FBUSxPQUFPLFNBQVM7O1lBQzFCLEVBQUUsR0FBUSxPQUFPLFNBQVM7O1lBQzVCLE1BQWM7O1lBQ2QsR0FBUTs7WUFDUixNQUFXO1FBQ2YsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxRQUFRLEVBQUU7WUFDaEMsSUFB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LENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnQkFqWUYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxRQUFRO29CQUNkLElBQUksRUFBRSxLQUFLO2lCQUNaO2dCQUNBLFVBQVU7Ozs7Z0JBcENGLGlCQUFpQjtnQkFDakIsWUFBWTtnQkFFWixnQkFBZ0I7O0lBK1p6QixpQkFBQztDQUFBLEFBbFlELElBa1lDO1NBN1hZLFVBQVU7OztJQUNyQiwyQkFBVzs7SUFDWCwrQkFBZTs7SUFDZiw4QkFBYzs7Ozs7SUFFRixvQ0FBeUM7Ozs7O0lBQUUseUNBQXlDOzs7OztJQUFFLDRCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IGZpbmRCeUNvdW50cnlJZCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvdW50cmllcy9Db3VudHJpZXMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIFJlbmRlcnMgZGF0YSBhcHByb3ByaWF0ZWx5IGJhc2VkIG9uIHRoZSBkYXRhIHR5cGUgZm91bmQgaW4gTWV0YVxuICogQWxsIGRhdGEgdHlwZXMgZGVmaW5lZCBieSBidWxsaG9ybiBzaG91bGQgYmUgc3VwcG9ydGVkOlxuICpcbiAqIC0gKipTdHJpbmcqKjogdHJpbXMgdmFsdWUgYW5kIHJldHVybnNcbiAqIC0gKipJbnRlZ2VyKio6IHJldHVybiB2YWx1ZVxuICogLSAqKkRvdWJsZSoqOiByZXR1cm4gdmFsdWUgZml4ZWQgdG8gMiBkZWNpbWFsc1xuICogLSAqKkJpZ0RlY2ltYWwqKjogcmV0dXJuIHZhbHVlIGZpeGVkIHRvIDIgZGVjaW1hbHNcbiAqIC0gKipBZGRyZXNzKio6IG9ubHkgY2l0eSBhbmQvb3Igc3RhdGUgcmV0dXJuZWRcbiAqIC0gKipBZGRyZXNzMSoqOiBvbmx5IGNpdHkgYW5kL29yIHN0YXRlIHJldHVybmVkXG4gKiAtICoqQWRkcmVzc1dpdGhvdXRDb3VudHJ5Kio6IG9ubHkgY2l0eSBhbmQvb3Igc3RhdGUgcmV0dXJuZWRcbiAqIC0gKipDdXJyZW5jeSoqOiBwdXQgYSAkIGluIGZyb250XG4gKiAtICoqUGVyY2VudGFnZSoqOiBkaXZpZGUgYnkgMTAwIGZpeCB0byAyIGRlY2ltYWxzIHBsYWNlIGFuZCByZXR1cm5cbiAqIC0gKipPcHRpb25zKio6IHJldHVybnMgdGhlIGFwcHJvcHJpYXRlICdsYWJlbCcgZm9yIHRoZSAndmFsdWUnIGZyb20gJ29wdGlvbnMnXG4gKiAtICoqQXJyYXkqKjogcmV0dXJucyBsaXN0IGNvbW1hIHNlcGFyYXRlZFxuICogLSAqKkRhdGVUaW1lKio6IGZvcm1hdHMgdGhlIGRhdGVcbiAqIC0gKipUaW1lU3RhbXAqKjogZm9ybWF0cyB0aGUgZGF0ZVxuICogLSAqKlRvT25lKio6IHJldHVybiB0aGUgZW50aXR5IHNwZWNpZmljIG5hbWUgKGllLiBuYW1lLCBmaXJzdE5hbWUgbGFzdE5hbWUsIHRpdGxlLCAuLi4pXG4gKiAtICoqVG9NYW55Kio6IHJldHVybiBhbiBhcnJheSBvZiB0aGUgZW50aXR5IHNwZWNpZmljIG5hbWVzIChpZS4gbmFtZSwgZmlyc3ROYW1lIGxhc3ROYW1lLCB0aXRsZSwgLi4uKVxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBcbiAqIHt7IGV4cHJlc3Npb24gfCByZW5kZXI6ZmllbGQgfX1cbiAqIGBgYFxuICovXG5AUGlwZSh7XG4gIG5hbWU6ICdyZW5kZXInLFxuICBwdXJlOiBmYWxzZSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVuZGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB2YWx1ZTogYW55O1xuICBsYXN0VmFsdWU6IGFueTtcbiAgbGFzdEFyZ3M6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBzYW5pdGl6YXRpb25TZXJ2aWNlOiBEb21TYW5pdGl6ZXIsIHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7IH1cblxuICBlcXVhbHMob2JqZWN0T25lOiBhbnksIG9iamVjdFR3bzogYW55KTogYW55IHtcbiAgICBpZiAob2JqZWN0T25lID09PSBvYmplY3RUd28pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAob2JqZWN0T25lID09PSBudWxsIHx8IG9iamVjdFR3byA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAob2JqZWN0T25lICE9PSBvYmplY3RPbmUgJiYgb2JqZWN0VHdvICE9PSBvYmplY3RUd28pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB0MTogYW55ID0gdHlwZW9mIG9iamVjdE9uZTtcbiAgICBjb25zdCB0MjogYW55ID0gdHlwZW9mIG9iamVjdFR3bztcbiAgICBsZXQgbGVuZ3RoOiBudW1iZXI7XG4gICAgbGV0IGtleTogYW55O1xuICAgIGxldCBrZXlTZXQ6IGFueTtcbiAgICBpZiAodDEgPT09IHQyICYmIHQxID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0T25lKSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob2JqZWN0VHdvKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGggPSBvYmplY3RPbmUubGVuZ3RoO1xuICAgICAgICBpZiAobGVuZ3RoID09PSBvYmplY3RUd28ubGVuZ3RoKSB7XG4gICAgICAgICAgZm9yIChrZXkgPSAwOyBrZXkgPCBsZW5ndGg7IGtleSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZXF1YWxzKG9iamVjdE9uZVtrZXldLCBvYmplY3RUd29ba2V5XSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0VHdvKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBrZXlTZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBmb3IgKGtleSBpbiBvYmplY3RPbmUpIHtcbiAgICAgICAgICBpZiAob2JqZWN0T25lW2tleV0pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5lcXVhbHMob2JqZWN0T25lW2tleV0sIG9iamVjdFR3b1trZXldKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlTZXRba2V5XSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoa2V5IGluIG9iamVjdFR3bykge1xuICAgICAgICAgIGlmICghKGtleSBpbiBrZXlTZXQpICYmIHR5cGVvZiBvYmplY3RUd29ba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldEVudGl0eUxhYmVsKGl0ZW06IGFueSwgZW50aXR5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAoZW50aXR5KSB7XG4gICAgICBjYXNlICdDb3Jwb3JhdGVVc2VyJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3QnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdDEnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdDInOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdDMnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdDQnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdDUnOlxuICAgICAgY2FzZSAnTGVhZCc6XG4gICAgICBjYXNlICdDYW5kaWRhdGUnOlxuICAgICAgY2FzZSAnUGVyc29uJzpcbiAgICAgICAgcmV0dXJuIGAke2l0ZW0uZmlyc3ROYW1lIHx8ICcnfSAke2l0ZW0ubGFzdE5hbWUgfHwgJyd9YC50cmltKCk7XG4gICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbic6XG4gICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbjEnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24yJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uMyc6XG4gICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbjQnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb241JzpcbiAgICAgICAgcmV0dXJuIGAke2l0ZW0ubmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgIGNhc2UgJ0pvYk9yZGVyJzpcbiAgICAgIGNhc2UgJ0pvYk9yZGVyMSc6XG4gICAgICBjYXNlICdKb2JPcmRlcjInOlxuICAgICAgY2FzZSAnSm9iT3JkZXIzJzpcbiAgICAgIGNhc2UgJ0pvYk9yZGVyNCc6XG4gICAgICBjYXNlICdKb2JPcmRlcjUnOlxuICAgICAgY2FzZSAnT3Bwb3J0dW5pdHknOlxuICAgICAgICByZXR1cm4gYCR7aXRlbS50aXRsZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgIGNhc2UgJ1BsYWNlbWVudCc6XG4gICAgICAgIGxldCBsYWJlbDogc3RyaW5nID0gJyc7XG4gICAgICAgIGlmIChpdGVtLmNhbmRpZGF0ZSkge1xuICAgICAgICAgIGxhYmVsID0gYCR7aXRlbS5jYW5kaWRhdGUuZmlyc3ROYW1lfSAke2l0ZW0uY2FuZGlkYXRlLmxhc3ROYW1lfWAudHJpbSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLmpvYk9yZGVyKSB7XG4gICAgICAgICAgbGFiZWwgPSBgJHtsYWJlbH0gLSAke2l0ZW0uam9iT3JkZXIudGl0bGV9YC50cmltKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIGZpZWxkcyB0byBzZXQgb3IgcmV0cmlldmUgZm9yIHRoZSBnaXZlbiBlbnRpdHkuIEdldHRlciBhbmQgU2V0dGVyIG1ldGhvZHMgd2lsbCBhdXRvbWFnaWNhbGx5XG4gICAqIGJlIHNldCB1cCBvbiB0aGUgZW50aXR5IG9uY2UgdGhlIGZpZWxkcyBhcmUgZGVmaW5lZC5cbiAgICogQG5hbWUgZmllbGRzXG4gICAqIEBtZW1iZXJPZiBFbnRpdHkjXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcGFyYW0gYXJncyAtIGZpZWxkcyBjYW4gZWl0aGVyIGJlIHNlbnQgYXMgYSBsaXN0IG9mIGFyZ3VtZW50cyBvciBhcyBhbiBBcnJheVxuICAgKiBAcmV0dXJuIHRleHRcbiAgICovXG4gIHJlbmRlcih2YWx1ZTogYW55LCBhcmdzOiBhbnkpOiBhbnkge1xuICAgIGxldCB0eXBlOiBhbnkgPSBudWxsO1xuICAgIGxldCB0ZXh0OiBhbnkgPSB2YWx1ZTtcbiAgICBsZXQgcmV6b25lZFRpbWU6IGFueTtcblxuICAgIC8vIEhhbmRsZSB3aGVuIHdlIGRvbid0IGhhdmUgbWV0YSwgYnV0IHBhc3NpbmcgYW4gZW50aXR5XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLl9zdWJ0eXBlICYmICFhcmdzKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRFbnRpdHlMYWJlbCh2YWx1ZSwgdmFsdWUuX3N1YnR5cGUpO1xuICAgIH1cblxuICAgIC8vIFN0b3AgbG9naWMgZm9yIG51bGxzXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwgfHwgIWFyZ3MpIHtcbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cblxuICAgIGlmIChhcmdzLmZvcm1hdHRlciAmJiB0eXBlb2YgYXJncy5mb3JtYXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBhcmdzLmZvcm1hdHRlcih2YWx1ZSwgYXJncyk7XG4gICAgfVxuICAgIC8vIFRPRE8gbW92ZSB0aGlzIHRvIGEgc2VydmljZVxuICAgIC8vIERldGVybWluZSBUWVBFIGJlY2F1c2UgaXRzIG5vdCBqdXN0IDEgdmFsdWUgdGhhdCBkZXRlcm1pbmVzIHRoaXMuXG4gICAgaWYgKGFyZ3MudHlwZSA9PT0gJ1RPX01BTlknKSB7XG4gICAgICB0eXBlID0gJ1RvTWFueSc7XG4gICAgfSBlbHNlIGlmIChhcmdzLnR5cGUgPT09ICdUT19PTkUnKSB7XG4gICAgICB0eXBlID0gYXJncy5hc3NvY2lhdGVkRW50aXR5LmVudGl0eTtcbiAgICB9IGVsc2UgaWYgKGFyZ3MuZGF0YVNwZWNpYWxpemF0aW9uID09PSAnREFURVRJTUUnKSB7XG4gICAgICB0eXBlID0gJ0RhdGVUaW1lJztcbiAgICB9IGVsc2UgaWYgKGFyZ3MuZGF0YVNwZWNpYWxpemF0aW9uID09PSAnWUVBUicpIHtcbiAgICAgIHR5cGUgPSAnWWVhcic7XG4gICAgfSBlbHNlIGlmIChhcmdzLmRhdGFTcGVjaWFsaXphdGlvbiA9PT0gJ0RBVEUnICYmIGFyZ3MuZGF0YVR5cGUgPT09ICdEYXRlJykge1xuICAgICAgdHlwZSA9ICdEYXRlJztcbiAgICB9IGVsc2UgaWYgKGFyZ3MuZGF0YVR5cGUgPT09ICdUaW1lc3RhbXAnKSB7XG4gICAgICB0eXBlID0gJ1RpbWVzdGFtcCc7XG4gICAgfSBlbHNlIGlmIChbJ21vYmlsZScsICdwaG9uZScsICdwaG9uZTEnLCAncGhvbmUyJywgJ3Bob25lMycsICd3b3JrUGhvbmUnXS5pbmRleE9mKGFyZ3MubmFtZSkgPiAtMSkge1xuICAgICAgdHlwZSA9ICdQaG9uZSc7XG4gICAgfSBlbHNlIGlmIChhcmdzLm5hbWUgJiYgYXJncy5uYW1lLnN1YnN0cmluZygwLCA1KSA9PT0gJ2VtYWlsJykge1xuICAgICAgdHlwZSA9ICdFbWFpbCc7XG4gICAgfSBlbHNlIGlmICgoYXJncy5uYW1lICYmIGFyZ3MubmFtZSA9PT0gJ2FkZHJlc3MuY291bnRyeUlEJykgfHwgYXJncy5vcHRpb25zVHlwZSA9PT0gJ0NvdW50cnknKSB7XG4gICAgICB0eXBlID0gJ0NvdW50cnknO1xuICAgIH0gZWxzZSBpZiAoYXJncy5vcHRpb25zVHlwZSA9PT0gJ1NraWxsVGV4dCcpIHtcbiAgICAgIHR5cGUgPSAnU2tpbGxUZXh0JztcbiAgICB9IGVsc2UgaWYgKGFyZ3Mub3B0aW9ucyB8fCBhcmdzLmlucHV0VHlwZSA9PT0gJ1NFTEVDVCcgfHwgYXJncy5pbnB1dFR5cGUgPT09ICdDSEVDS0JPWCcpIHtcbiAgICAgIHR5cGUgPSAnT3B0aW9ucyc7XG4gICAgfSBlbHNlIGlmIChbJ01PTkVZJywgJ1BFUkNFTlRBR0UnLCAnSFRNTCcsICdTU04nXS5pbmRleE9mKGFyZ3MuZGF0YVNwZWNpYWxpemF0aW9uKSA+IC0xKSB7XG4gICAgICB0eXBlID0gdGhpcy5jYXBpdGFsaXplKGFyZ3MuZGF0YVNwZWNpYWxpemF0aW9uLnRvTG93ZXJDYXNlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlID0gYXJncy5kYXRhVHlwZSB8fCAnZGVmYXVsdCc7XG4gICAgfVxuXG4gICAgLy8gVHJhbnNmb3JtIGRhdGEgaGVyZVxuICAgIHRyeSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnQWRkcmVzcyc6XG4gICAgICAgIGNhc2UgJ0FkZHJlc3MxJzpcbiAgICAgICAgY2FzZSAnQWRkcmVzc1dpdGhvdXRDb3VudHJ5JzpcbiAgICAgICAgY2FzZSAnU2Vjb25kYXJ5QWRkcmVzcyc6XG4gICAgICAgIGNhc2UgJ0JpbGxpbmdBZGRyZXNzJzpcbiAgICAgICAgICBjb25zdCBjb3VudHJ5OiBhbnkgPSBmaW5kQnlDb3VudHJ5SWQoTnVtYmVyKHZhbHVlLmNvdW50cnlOYW1lKSk7XG4gICAgICAgICAgdGV4dCA9ICcnO1xuICAgICAgICAgIGlmICh2YWx1ZS5hZGRyZXNzMSB8fCB2YWx1ZS5hZGRyZXNzMikge1xuICAgICAgICAgICAgdGV4dCArPSBgJHt2YWx1ZS5hZGRyZXNzMSB8fCAnJ30gJHt2YWx1ZS5hZGRyZXNzMiB8fCAnJ308YnIgLz5cXG5gO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZXh0ICs9IGAke3ZhbHVlLmNpdHkgfHwgJyd9ICR7dmFsdWUuc3RhdGUgfHwgJyd9ICR7dmFsdWUuemlwIHx8ICcnfSR7dmFsdWUuY2l0eSB8fCB2YWx1ZS5zdGF0ZSB8fCB2YWx1ZS56aXAgPyAnPGJyIC8+XFxuJyA6ICcnfWA7XG4gICAgICAgICAgdGV4dCArPSBgJHtjb3VudHJ5ID8gY291bnRyeS5uYW1lIDogdmFsdWUuY291bnRyeU5hbWUgfHwgJyd9JHtjb3VudHJ5IHx8IHZhbHVlLmNvdW50cnlOYW1lID8gJzxiciAvPlxcbicgOiAnJ31gO1xuICAgICAgICAgIHRleHQgPSB0aGlzLnNhbml0aXphdGlvblNlcnZpY2UuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGV4dC50cmltKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdEYXRlVGltZSc6XG4gICAgICAgIGNhc2UgJ1RpbWVzdGFtcCc6XG4gICAgICAgICAgdGV4dCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGVTaG9ydCh2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgICAgIHRleHQgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlKG5ldyBEYXRlKHZhbHVlKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1llYXInOlxuICAgICAgICAgIHRleHQgPSBuZXcgRGF0ZSh2YWx1ZSkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGhvbmUnOlxuICAgICAgICBjYXNlICdFbWFpbCc6XG4gICAgICAgICAgdGV4dCA9IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdNb25leSc6XG4gICAgICAgICAgdGV4dCA9IHRoaXMubGFiZWxzLmZvcm1hdEN1cnJlbmN5KHZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGVyY2VudGFnZSc6XG4gICAgICAgICAgdGV4dCA9IHRoaXMubGFiZWxzLmZvcm1hdE51bWJlcihwYXJzZUZsb2F0KHZhbHVlKS50b1N0cmluZygpLCB7IHN0eWxlOiAncGVyY2VudCcsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRG91YmxlJzpcbiAgICAgICAgY2FzZSAnQmlnRGVjaW1hbCc6XG4gICAgICAgICAgdGV4dCA9IHRoaXMubGFiZWxzLmZvcm1hdE51bWJlcih2YWx1ZSwgeyBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHRoaXMuZ2V0TnVtYmVyRGVjaW1hbFBsYWNlcyh2YWx1ZSkgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0ludGVnZXInOlxuICAgICAgICAgIHRleHQgPSB2YWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQnVzaW5lc3NTZWN0b3InOlxuICAgICAgICBjYXNlICdDYXRlZ29yeSc6XG4gICAgICAgIGNhc2UgJ0NlcnRpZmljYXRpb24nOlxuICAgICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbic6XG4gICAgICAgIGNhc2UgJ0NvcnBvcmF0aW9uRGVwYXJ0bWVudCc6XG4gICAgICAgIGNhc2UgJ0Rpc3RyaWJ1dGlvbkxpc3QnOlxuICAgICAgICBjYXNlICdTa2lsbCc6XG4gICAgICAgIGNhc2UgJ1RlYXJzaGVldCc6XG4gICAgICAgIGNhc2UgJ1NwZWNpYWx0eSc6XG4gICAgICAgICAgdGV4dCA9IHZhbHVlLmxhYmVsIHx8IHZhbHVlLm5hbWUgfHwgJyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NraWxsVGV4dCc6XG4gICAgICAgICAgdGV4dCA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUuam9pbignLCAnKSA6IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdMZWFkJzpcbiAgICAgICAgY2FzZSAnQ2FuZGlkYXRlJzpcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdCc6XG4gICAgICAgIGNhc2UgJ0NvcnBvcmF0ZVVzZXInOlxuICAgICAgICBjYXNlICdQZXJzb24nOlxuICAgICAgICAgIHRleHQgPSB2YWx1ZS5sYWJlbCB8fCBgJHt2YWx1ZS5maXJzdE5hbWUgfHwgJyd9ICR7dmFsdWUubGFzdE5hbWUgfHwgJyd9YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnT3Bwb3J0dW5pdHknOlxuICAgICAgICBjYXNlICdKb2JPcmRlcic6XG4gICAgICAgICAgdGV4dCA9IHZhbHVlLmxhYmVsIHx8IHZhbHVlLnRpdGxlIHx8ICcnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQbGFjZW1lbnQnOlxuICAgICAgICAgIGlmICh2YWx1ZS5jYW5kaWRhdGUpIHtcbiAgICAgICAgICAgIHRleHQgPSBgJHt2YWx1ZS5jYW5kaWRhdGUuZmlyc3ROYW1lIHx8ICcnfSAke3ZhbHVlLmNhbmRpZGF0ZS5sYXN0TmFtZSB8fCAnJ31gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodmFsdWUuam9iT3JkZXIpIHtcbiAgICAgICAgICAgIHRleHQgPSB2YWx1ZS5jYW5kaWRhdGUgPyBgJHt0ZXh0fSAtICR7dmFsdWUuam9iT3JkZXIudGl0bGUgfHwgJyd9YCA6IGAke3ZhbHVlLmpvYk9yZGVyLnRpdGxlIHx8ICcnfWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdKb2JTdWJtaXNzaW9uJzpcbiAgICAgICAgICB0ZXh0ID1cbiAgICAgICAgICAgIHZhbHVlLmxhYmVsIHx8XG4gICAgICAgICAgICBgJHt2YWx1ZS5qb2JPcmRlciA/IGAke3ZhbHVlLmpvYk9yZGVyLnRpdGxlfSAtIGAgOiAnJ30gJHt2YWx1ZS5jYW5kaWRhdGUgPyB2YWx1ZS5jYW5kaWRhdGUuZmlyc3ROYW1lIDogJyd9ICR7XG4gICAgICAgICAgICB2YWx1ZS5jYW5kaWRhdGUgPyB2YWx1ZS5jYW5kaWRhdGUubGFzdE5hbWUgOiAnJ1xuICAgICAgICAgICAgfWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1dvcmtlcnNDb21wZW5zYXRpb25SYXRlJzpcbiAgICAgICAgICB0ZXh0ID0gYCR7dmFsdWUuY29tcGVuc2F0aW9uID8gYCR7dmFsdWUuY29tcGVuc2F0aW9uLmNvZGV9IC0gYCA6ICcnfSAke3ZhbHVlLmNvbXBlbnNhdGlvbiA/IHZhbHVlLmNvbXBlbnNhdGlvbi5uYW1lIDogJyd9YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnT3B0aW9ucyc6XG4gICAgICAgICAgdGV4dCA9IHRoaXMub3B0aW9ucyh2YWx1ZSwgYXJncy5vcHRpb25zLCBhcmdzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVG9NYW55JzpcbiAgICAgICAgICBpZiAoWydDYW5kaWRhdGUnLCAnQ29ycG9yYXRlVXNlcicsICdQZXJzb24nXS5pbmRleE9mKGFyZ3MuYXNzb2NpYXRlZEVudGl0eS5lbnRpdHkpID4gLTEpIHtcbiAgICAgICAgICAgIHRleHQgPSB0aGlzLmNvbmNhdCh2YWx1ZS5kYXRhLCAnZmlyc3ROYW1lJywgJ2xhc3ROYW1lJyk7XG4gICAgICAgICAgICBpZiAodmFsdWUuZGF0YS5sZW5ndGggPCB2YWx1ZS50b3RhbCkge1xuICAgICAgICAgICAgICB0ZXh0ID0gdGV4dCArICcsICcgKyB0aGlzLmxhYmVscy5nZXRUb01hbnlQbHVzTW9yZSh7IHF1YW50aXR5OiB2YWx1ZS50b3RhbCAtIHZhbHVlLmRhdGEubGVuZ3RoIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBbJ0NhdGVnb3J5JywgJ0J1c2luZXNzU2VjdG9yJywgJ1NraWxsJywgJ1NwZWNpYWx0eScsICdDbGllbnRDb3Jwb3JhdGlvbicsICdDb3Jwb3JhdGlvbkRlcGFydG1lbnQnXS5pbmRleE9mKFxuICAgICAgICAgICAgICBhcmdzLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5LFxuICAgICAgICAgICAgKSA+IC0xXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0ZXh0ID0gdGhpcy5jb25jYXQodmFsdWUuZGF0YSwgJ25hbWUnKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5kYXRhLmxlbmd0aCA8IHZhbHVlLnRvdGFsKSB7XG4gICAgICAgICAgICAgIHRleHQgPSB0ZXh0ICsgJywgJyArIHRoaXMubGFiZWxzLmdldFRvTWFueVBsdXNNb3JlKHsgcXVhbnRpdHk6IHZhbHVlLnRvdGFsIC0gdmFsdWUuZGF0YS5sZW5ndGggfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5ID09PSAnTWFpbExpc3RQdXNoSGlzdG9yeURldGFpbCcpIHtcbiAgICAgICAgICAgIHRleHQgPSB0aGlzLmNvbmNhdCh2YWx1ZS5kYXRhLCAnZXh0ZXJuYWxMaXN0TmFtZScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0ID0gYCR7dmFsdWUudG90YWwgfHwgJyd9YDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0NvdW50cnknOlxuICAgICAgICAgIGNvbnN0IGNvdW50cnlPYmo6IGFueSA9IGZpbmRCeUNvdW50cnlJZChOdW1iZXIodmFsdWUpKTtcbiAgICAgICAgICB0ZXh0ID0gY291bnRyeU9iaiA/IGNvdW50cnlPYmoubmFtZSA6IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdIdG1sJzpcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuam9pbignICcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0ZXh0ID0gdGhpcy5zYW5pdGl6YXRpb25TZXJ2aWNlLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlLnJlcGxhY2UoL1xcPGEvZ2ksICc8YSB0YXJnZXQ9XCJfYmxhbmtcIicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0NhbmRpZGF0ZUNvbW1lbnQnOlxuICAgICAgICAgIHRleHQgPSB2YWx1ZS5jb21tZW50cyA/IGAke3RoaXMubGFiZWxzLmZvcm1hdERhdGVTaG9ydCh2YWx1ZS5kYXRlTGFzdE1vZGlmaWVkKX0gKCR7dmFsdWUubmFtZX0pIC0gJHt2YWx1ZS5jb21tZW50c31gIDogJyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGV4dCA9IHZhbHVlLnRyaW0gPyB2YWx1ZS50cmltKCkgOiB2YWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFdBUk5JTkc6IFRoZXJlIHdhcyBhIHByb2JsZW0gcmVuZGVyaW5nIHRoZSB2YWx1ZSBvZiB0aGUgZmllbGQ6ICR7YXJncy5sYWJlbH0uIFBsZWFzZSBjaGVjayB0aGUgY29uZmlndXJhdGlvbmApO1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKHZhbHVlOiBhbnksIGFyZ3M6IGFueSk6IGFueSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMucmVuZGVyKHZhbHVlLCBhcmdzKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgdHJhbnNmb3JtKHZhbHVlPzogYW55LCBhcmdzPzogYW55KTogYW55IHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVxdWFscyh2YWx1ZSwgdGhpcy5sYXN0VmFsdWUpICYmIHRoaXMuZXF1YWxzKGFyZ3MsIHRoaXMubGFzdEFyZ3MpKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmxhc3RWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMubGFzdEFyZ3MgPSBhcmdzO1xuXG4gICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLmxhc3RWYWx1ZSwgdGhpcy5sYXN0QXJncyk7XG5cbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW1wbGUgZnVuY3Rpb24gY29uY2F0IGEgbGlzdCBvZiBmaWVsZHMgZnJvbSBhIGxpc3Qgb2Ygb2JqZWN0c1xuICAgKiBAbmFtZSBvcHRpb25zXG4gICAqIEBwYXJhbSBsaXN0IC0gdGhlIGxpc3Qgb2YgdmFsdWVzIHRvIHVzZVxuICAgKiBAcGFyYW0gZmllbGRzIC0gbGlzdCBvZiBmaWVsZHMgdG8gZXh0cmFjdFxuICAgKi9cbiAgY29uY2F0KGxpc3Q6IGFueSwgLi4uZmllbGRzOiBhbnlbXSk6IGFueSB7XG4gICAgY29uc3QgZGF0YTogYW55ID0gW107XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgIGNvbnN0IGxhYmVsOiBhbnkgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgZmllbGRzKSB7XG4gICAgICAgIGxhYmVsLnB1c2goYCR7aXRlbVtmaWVsZF19YCk7XG4gICAgICB9XG4gICAgICBkYXRhLnB1c2gobGFiZWwuam9pbignICcpKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGEuam9pbignLCAnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW1wbGUgZnVuY3Rpb24gdG8gbG9vayB1cCB0aGUgKipsYWJlbCoqIHRvIGRpc3BsYXkgZnJvbSBvcHRpb25zXG4gICAqIEBuYW1lIG9wdGlvbnNcbiAgICogQHBhcmFtIHZhbHVlIC0gdGhlIHZhbHVlIHRvIGZpbmRcbiAgICogQHBhcmFtIGxpc3QgLSBsaXN0IG9mIG9wdGlvbnMgKGxhYmVsL3ZhbHVlIHBhaXJzKVxuICAgKi9cbiAgb3B0aW9ucyh2YWx1ZTogYW55LCBsaXN0OiBhbnksIGFyZ3M6IGFueSk6IGFueSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSBbdmFsdWVdO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHZhbHVlLm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIGxpc3QpIHtcbiAgICAgICAgICBpZiAob3B0aW9uLnZhbHVlID09PSBpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLmxhYmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghYXJncy5vcHRpb25zVHlwZSkge1xuICAgICAgICB0aHJvdyBFcnJvcihlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXROdW1iZXJEZWNpbWFsUGxhY2VzKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIGxldCBkZWNpbWFsUGxhY2VzOiBhbnk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCBudW1iZXJTdHJpbmc6IGFueSA9IHBhcnNlRmxvYXQodmFsdWUpLnRvU3RyaW5nKCk7XG4gICAgICBjb25zdCBkZWNpbWFsUGxhY2U6IGFueSA9IChudW1iZXJTdHJpbmcgfHwgJycpLnNwbGl0KCcuJylbMV0gfHwgJyc7XG4gICAgICBkZWNpbWFsUGxhY2VzID0gZGVjaW1hbFBsYWNlLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGRlY2ltYWxQbGFjZXMgfHwgMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXBpdGFsaXplcyB0aGUgZmlyc3QgbGV0dGVyXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgY2FwaXRhbGl6ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcbiAgfVxufVxuIl19