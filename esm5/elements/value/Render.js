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
        else if (args.options || args.inputType === 'SELECT') {
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
                text = this.options(value, args.options);
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
     * @return {?}
     */
    RenderPipe.prototype.options = /**
     * Simple function to look up the **label** to display from options
     * \@name options
     * @param {?} value - the value to find
     * @param {?} list - list of options (label/value pairs)
     * @return {?}
     */
    function (value, list) {
        var e_3, _a;
        try {
            try {
                for (var list_2 = tslib_1.__values(list), list_2_1 = list_2.next(); !list_2_1.done; list_2_1 = list_2.next()) {
                    var item = list_2_1.value;
                    if (item.value === value) {
                        return item.label;
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
        }
        catch (e) {
            // do nothing
        }
        return value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVuZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3ZhbHVlL1JlbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUV6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCbEU7SUFVRSxvQkFBb0IsY0FBaUMsRUFBVSxtQkFBaUMsRUFBVSxNQUF3QjtRQUE5RyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7Ozs7OztJQUV0SSwyQkFBTTs7Ozs7SUFBTixVQUFPLFNBQWMsRUFBRSxTQUFjO1FBQ25DLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxTQUFTLEtBQUssSUFBSSxJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDNUMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksU0FBUyxLQUFLLFNBQVMsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQ3RELE9BQU8sSUFBSSxDQUFDO1NBQ2I7O1lBQ0csRUFBRSxHQUFRLE9BQU8sU0FBUzs7WUFDMUIsRUFBRSxHQUFRLE9BQU8sU0FBUzs7WUFDMUIsTUFBYzs7WUFDZCxHQUFROztZQUNSLE1BQVc7UUFDZixJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUNoQyxJQUFJ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QXVCLEtBQVU7O1lBQzNCLGFBQWtCO1FBQ3RCLElBQUksS0FBSyxFQUFFOztnQkFDTCxZQUFZLEdBQVEsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRTs7Z0JBQ2hELFlBQVksR0FBUSxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtZQUNoRSxhQUFhLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztTQUNyQztRQUNELE9BQU8sYUFBYSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCwrQkFBVTs7Ozs7SUFBVixVQUFXLEtBQVU7UUFDbkIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Z0JBalhGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsUUFBUTtvQkFDZCxJQUFJLEVBQUUsS0FBSztpQkFDWjtnQkFDQSxVQUFVOzs7O2dCQXBDZ0IsaUJBQWlCO2dCQUNuQyxZQUFZO2dCQUVaLGdCQUFnQjs7SUErWXpCLGlCQUFDO0NBQUEsQUFsWEQsSUFrWEM7U0E3V1ksVUFBVTs7O0lBQ3JCLDJCQUFXOztJQUNYLCtCQUFlOztJQUNmLDhCQUFjOzs7OztJQUVGLG9DQUF5Qzs7Ozs7SUFBRSx5Q0FBeUM7Ozs7O0lBQUUsNEJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95LCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBmaW5kQnlDb3VudHJ5SWQgfSBmcm9tICcuLi8uLi91dGlscy9jb3VudHJpZXMvQ291bnRyaWVzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBSZW5kZXJzIGRhdGEgYXBwcm9wcmlhdGVseSBiYXNlZCBvbiB0aGUgZGF0YSB0eXBlIGZvdW5kIGluIE1ldGFcbiAqIEFsbCBkYXRhIHR5cGVzIGRlZmluZWQgYnkgYnVsbGhvcm4gc2hvdWxkIGJlIHN1cHBvcnRlZDpcbiAqXG4gKiAtICoqU3RyaW5nKio6IHRyaW1zIHZhbHVlIGFuZCByZXR1cm5zXG4gKiAtICoqSW50ZWdlcioqOiByZXR1cm4gdmFsdWVcbiAqIC0gKipEb3VibGUqKjogcmV0dXJuIHZhbHVlIGZpeGVkIHRvIDIgZGVjaW1hbHNcbiAqIC0gKipCaWdEZWNpbWFsKio6IHJldHVybiB2YWx1ZSBmaXhlZCB0byAyIGRlY2ltYWxzXG4gKiAtICoqQWRkcmVzcyoqOiBvbmx5IGNpdHkgYW5kL29yIHN0YXRlIHJldHVybmVkXG4gKiAtICoqQWRkcmVzczEqKjogb25seSBjaXR5IGFuZC9vciBzdGF0ZSByZXR1cm5lZFxuICogLSAqKkFkZHJlc3NXaXRob3V0Q291bnRyeSoqOiBvbmx5IGNpdHkgYW5kL29yIHN0YXRlIHJldHVybmVkXG4gKiAtICoqQ3VycmVuY3kqKjogcHV0IGEgJCBpbiBmcm9udFxuICogLSAqKlBlcmNlbnRhZ2UqKjogZGl2aWRlIGJ5IDEwMCBmaXggdG8gMiBkZWNpbWFscyBwbGFjZSBhbmQgcmV0dXJuXG4gKiAtICoqT3B0aW9ucyoqOiByZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSAnbGFiZWwnIGZvciB0aGUgJ3ZhbHVlJyBmcm9tICdvcHRpb25zJ1xuICogLSAqKkFycmF5Kio6IHJldHVybnMgbGlzdCBjb21tYSBzZXBhcmF0ZWRcbiAqIC0gKipEYXRlVGltZSoqOiBmb3JtYXRzIHRoZSBkYXRlXG4gKiAtICoqVGltZVN0YW1wKio6IGZvcm1hdHMgdGhlIGRhdGVcbiAqIC0gKipUb09uZSoqOiByZXR1cm4gdGhlIGVudGl0eSBzcGVjaWZpYyBuYW1lIChpZS4gbmFtZSwgZmlyc3ROYW1lIGxhc3ROYW1lLCB0aXRsZSwgLi4uKVxuICogLSAqKlRvTWFueSoqOiByZXR1cm4gYW4gYXJyYXkgb2YgdGhlIGVudGl0eSBzcGVjaWZpYyBuYW1lcyAoaWUuIG5hbWUsIGZpcnN0TmFtZSBsYXN0TmFtZSwgdGl0bGUsIC4uLilcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgXG4gKiB7eyBleHByZXNzaW9uIHwgcmVuZGVyOmZpZWxkIH19XG4gKiBgYGBcbiAqL1xuQFBpcGUoe1xuICBuYW1lOiAncmVuZGVyJyxcbiAgcHVyZTogZmFsc2UsXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlbmRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdmFsdWU6IGFueTtcbiAgbGFzdFZhbHVlOiBhbnk7XG4gIGxhc3RBcmdzOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgc2FuaXRpemF0aW9uU2VydmljZTogRG9tU2FuaXRpemVyLCBwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cblxuICBlcXVhbHMob2JqZWN0T25lOiBhbnksIG9iamVjdFR3bzogYW55KTogYW55IHtcbiAgICBpZiAob2JqZWN0T25lID09PSBvYmplY3RUd28pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAob2JqZWN0T25lID09PSBudWxsIHx8IG9iamVjdFR3byA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAob2JqZWN0T25lICE9PSBvYmplY3RPbmUgJiYgb2JqZWN0VHdvICE9PSBvYmplY3RUd28pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBsZXQgdDE6IGFueSA9IHR5cGVvZiBvYmplY3RPbmU7XG4gICAgbGV0IHQyOiBhbnkgPSB0eXBlb2Ygb2JqZWN0VHdvO1xuICAgIGxldCBsZW5ndGg6IG51bWJlcjtcbiAgICBsZXQga2V5OiBhbnk7XG4gICAgbGV0IGtleVNldDogYW55O1xuICAgIGlmICh0MSA9PT0gdDIgJiYgdDEgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmplY3RPbmUpKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShvYmplY3RUd28pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxlbmd0aCA9IG9iamVjdE9uZS5sZW5ndGg7XG4gICAgICAgIGlmIChsZW5ndGggPT09IG9iamVjdFR3by5sZW5ndGgpIHtcbiAgICAgICAgICBmb3IgKGtleSA9IDA7IGtleSA8IGxlbmd0aDsga2V5KyspIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5lcXVhbHMob2JqZWN0T25lW2tleV0sIG9iamVjdFR3b1trZXldKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmplY3RUd28pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGtleVNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGZvciAoa2V5IGluIG9iamVjdE9uZSkge1xuICAgICAgICAgIGlmIChvYmplY3RPbmVba2V5XSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmVxdWFscyhvYmplY3RPbmVba2V5XSwgb2JqZWN0VHdvW2tleV0pKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVNldFtrZXldID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqZWN0VHdvKSB7XG4gICAgICAgICAgaWYgKCEoa2V5IGluIGtleVNldCkgJiYgdHlwZW9mIG9iamVjdFR3b1trZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0RW50aXR5TGFiZWwoaXRlbTogYW55LCBlbnRpdHk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChlbnRpdHkpIHtcbiAgICAgIGNhc2UgJ0NvcnBvcmF0ZVVzZXInOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdCc6XG4gICAgICBjYXNlICdDbGllbnRDb250YWN0MSc6XG4gICAgICBjYXNlICdDbGllbnRDb250YWN0Mic6XG4gICAgICBjYXNlICdDbGllbnRDb250YWN0Myc6XG4gICAgICBjYXNlICdDbGllbnRDb250YWN0NCc6XG4gICAgICBjYXNlICdDbGllbnRDb250YWN0NSc6XG4gICAgICBjYXNlICdMZWFkJzpcbiAgICAgIGNhc2UgJ0NhbmRpZGF0ZSc6XG4gICAgICBjYXNlICdQZXJzb24nOlxuICAgICAgICByZXR1cm4gYCR7aXRlbS5maXJzdE5hbWUgfHwgJyd9ICR7aXRlbS5sYXN0TmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uMSc6XG4gICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbjInOlxuICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24zJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uNCc6XG4gICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbjUnOlxuICAgICAgICByZXR1cm4gYCR7aXRlbS5uYW1lIHx8ICcnfWAudHJpbSgpO1xuICAgICAgY2FzZSAnSm9iT3JkZXInOlxuICAgICAgY2FzZSAnSm9iT3JkZXIxJzpcbiAgICAgIGNhc2UgJ0pvYk9yZGVyMic6XG4gICAgICBjYXNlICdKb2JPcmRlcjMnOlxuICAgICAgY2FzZSAnSm9iT3JkZXI0JzpcbiAgICAgIGNhc2UgJ0pvYk9yZGVyNSc6XG4gICAgICBjYXNlICdPcHBvcnR1bml0eSc6XG4gICAgICAgIHJldHVybiBgJHtpdGVtLnRpdGxlIHx8ICcnfWAudHJpbSgpO1xuICAgICAgY2FzZSAnUGxhY2VtZW50JzpcbiAgICAgICAgbGV0IGxhYmVsOiBzdHJpbmcgPSAnJztcbiAgICAgICAgaWYgKGl0ZW0uY2FuZGlkYXRlKSB7XG4gICAgICAgICAgbGFiZWwgPSBgJHtpdGVtLmNhbmRpZGF0ZS5maXJzdE5hbWV9ICR7aXRlbS5jYW5kaWRhdGUubGFzdE5hbWV9YC50cmltKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0uam9iT3JkZXIpIHtcbiAgICAgICAgICBsYWJlbCA9IGAke2xhYmVsfSAtICR7aXRlbS5qb2JPcmRlci50aXRsZX1gLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZSB0aGUgZmllbGRzIHRvIHNldCBvciByZXRyaWV2ZSBmb3IgdGhlIGdpdmVuIGVudGl0eS4gR2V0dGVyIGFuZCBTZXR0ZXIgbWV0aG9kcyB3aWxsIGF1dG9tYWdpY2FsbHlcbiAgICogYmUgc2V0IHVwIG9uIHRoZSBlbnRpdHkgb25jZSB0aGUgZmllbGRzIGFyZSBkZWZpbmVkLlxuICAgKiBAbmFtZSBmaWVsZHNcbiAgICogQG1lbWJlck9mIEVudGl0eSNcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEBwYXJhbSBhcmdzIC0gZmllbGRzIGNhbiBlaXRoZXIgYmUgc2VudCBhcyBhIGxpc3Qgb2YgYXJndW1lbnRzIG9yIGFzIGFuIEFycmF5XG4gICAqIEByZXR1cm4gdGV4dFxuICAgKi9cbiAgcmVuZGVyKHZhbHVlOiBhbnksIGFyZ3M6IGFueSk6IGFueSB7XG4gICAgbGV0IHR5cGU6IGFueSA9IG51bGw7XG4gICAgbGV0IHRleHQ6IGFueSA9IHZhbHVlO1xuICAgIGxldCByZXpvbmVkVGltZTogYW55O1xuXG4gICAgLy8gSGFuZGxlIHdoZW4gd2UgZG9uJ3QgaGF2ZSBtZXRhLCBidXQgcGFzc2luZyBhbiBlbnRpdHlcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUuX3N1YnR5cGUgJiYgIWFyZ3MpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEVudGl0eUxhYmVsKHZhbHVlLCB2YWx1ZS5fc3VidHlwZSk7XG4gICAgfVxuXG4gICAgLy8gU3RvcCBsb2dpYyBmb3IgbnVsbHNcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCAhYXJncykge1xuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MuZm9ybWF0dGVyICYmIHR5cGVvZiBhcmdzLmZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGFyZ3MuZm9ybWF0dGVyKHZhbHVlLCBhcmdzKTtcbiAgICB9XG4gICAgLy8gVE9ETyBtb3ZlIHRoaXMgdG8gYSBzZXJ2aWNlXG4gICAgLy8gRGV0ZXJtaW5lIFRZUEUgYmVjYXVzZSBpdHMgbm90IGp1c3QgMSB2YWx1ZSB0aGF0IGRldGVybWluZXMgdGhpcy5cbiAgICBpZiAoYXJncy50eXBlID09PSAnVE9fTUFOWScpIHtcbiAgICAgIHR5cGUgPSAnVG9NYW55JztcbiAgICB9IGVsc2UgaWYgKGFyZ3MudHlwZSA9PT0gJ1RPX09ORScpIHtcbiAgICAgIHR5cGUgPSBhcmdzLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5O1xuICAgIH0gZWxzZSBpZiAoYXJncy5kYXRhU3BlY2lhbGl6YXRpb24gPT09ICdEQVRFVElNRScpIHtcbiAgICAgIHR5cGUgPSAnRGF0ZVRpbWUnO1xuICAgIH0gZWxzZSBpZiAoYXJncy5kYXRhU3BlY2lhbGl6YXRpb24gPT09ICdZRUFSJykge1xuICAgICAgdHlwZSA9ICdZZWFyJztcbiAgICB9IGVsc2UgaWYgKGFyZ3MuZGF0YVNwZWNpYWxpemF0aW9uID09PSAnREFURScgJiYgYXJncy5kYXRhVHlwZSA9PT0gJ0RhdGUnKSB7XG4gICAgICB0eXBlID0gJ0RhdGUnO1xuICAgIH0gZWxzZSBpZiAoYXJncy5kYXRhVHlwZSA9PT0gJ1RpbWVzdGFtcCcpIHtcbiAgICAgIHR5cGUgPSAnVGltZXN0YW1wJztcbiAgICB9IGVsc2UgaWYgKFsnbW9iaWxlJywgJ3Bob25lJywgJ3Bob25lMScsICdwaG9uZTInLCAncGhvbmUzJywgJ3dvcmtQaG9uZSddLmluZGV4T2YoYXJncy5uYW1lKSA+IC0xKSB7XG4gICAgICB0eXBlID0gJ1Bob25lJztcbiAgICB9IGVsc2UgaWYgKGFyZ3MubmFtZSAmJiBhcmdzLm5hbWUuc3Vic3RyaW5nKDAsIDUpID09PSAnZW1haWwnKSB7XG4gICAgICB0eXBlID0gJ0VtYWlsJztcbiAgICB9IGVsc2UgaWYgKChhcmdzLm5hbWUgJiYgYXJncy5uYW1lID09PSAnYWRkcmVzcy5jb3VudHJ5SUQnKSB8fCBhcmdzLm9wdGlvbnNUeXBlID09PSAnQ291bnRyeScpIHtcbiAgICAgIHR5cGUgPSAnQ291bnRyeSc7XG4gICAgfSBlbHNlIGlmIChhcmdzLm9wdGlvbnNUeXBlID09PSAnU2tpbGxUZXh0Jykge1xuICAgICAgdHlwZSA9ICdTa2lsbFRleHQnO1xuICAgIH0gZWxzZSBpZiAoYXJncy5vcHRpb25zIHx8IGFyZ3MuaW5wdXRUeXBlID09PSAnU0VMRUNUJykge1xuICAgICAgdHlwZSA9ICdPcHRpb25zJztcbiAgICB9IGVsc2UgaWYgKFsnTU9ORVknLCAnUEVSQ0VOVEFHRScsICdIVE1MJywgJ1NTTiddLmluZGV4T2YoYXJncy5kYXRhU3BlY2lhbGl6YXRpb24pID4gLTEpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmNhcGl0YWxpemUoYXJncy5kYXRhU3BlY2lhbGl6YXRpb24udG9Mb3dlckNhc2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGUgPSBhcmdzLmRhdGFUeXBlIHx8ICdkZWZhdWx0JztcbiAgICB9XG5cbiAgICAvLyBUcmFuc2Zvcm0gZGF0YSBoZXJlXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdBZGRyZXNzJzpcbiAgICAgIGNhc2UgJ0FkZHJlc3MxJzpcbiAgICAgIGNhc2UgJ0FkZHJlc3NXaXRob3V0Q291bnRyeSc6XG4gICAgICAgIGxldCBjb3VudHJ5OiBhbnkgPSBmaW5kQnlDb3VudHJ5SWQoTnVtYmVyKHZhbHVlLmNvdW50cnlOYW1lKSk7XG4gICAgICAgIHRleHQgPSAnJztcbiAgICAgICAgaWYgKHZhbHVlLmFkZHJlc3MxIHx8IHZhbHVlLmFkZHJlc3MyKSB7XG4gICAgICAgICAgdGV4dCArPSBgJHt2YWx1ZS5hZGRyZXNzMSB8fCAnJ30gJHt2YWx1ZS5hZGRyZXNzMiB8fCAnJ308YnIgLz5cXG5gO1xuICAgICAgICB9XG4gICAgICAgIHRleHQgKz0gYCR7dmFsdWUuY2l0eSB8fCAnJ30gJHt2YWx1ZS5zdGF0ZSB8fCAnJ30gJHt2YWx1ZS56aXAgfHwgJyd9JHt2YWx1ZS5jaXR5IHx8IHZhbHVlLnN0YXRlIHx8IHZhbHVlLnppcCA/ICc8YnIgLz5cXG4nIDogJyd9YDtcbiAgICAgICAgdGV4dCArPSBgJHtjb3VudHJ5ID8gY291bnRyeS5uYW1lIDogdmFsdWUuY291bnRyeU5hbWUgfHwgJyd9JHtjb3VudHJ5IHx8IHZhbHVlLmNvdW50cnlOYW1lID8gJzxiciAvPlxcbicgOiAnJ31gO1xuICAgICAgICB0ZXh0ID0gdGhpcy5zYW5pdGl6YXRpb25TZXJ2aWNlLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRleHQudHJpbSgpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdEYXRlVGltZSc6XG4gICAgICBjYXNlICdUaW1lc3RhbXAnOlxuICAgICAgICB0ZXh0ID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVNob3J0KHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdEYXRlJzpcbiAgICAgICAgdGV4dCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGUobmV3IERhdGUodmFsdWUpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdZZWFyJzpcbiAgICAgICAgdGV4dCA9IG5ldyBEYXRlKHZhbHVlKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1Bob25lJzpcbiAgICAgIGNhc2UgJ0VtYWlsJzpcbiAgICAgICAgdGV4dCA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ01vbmV5JzpcbiAgICAgICAgdGV4dCA9IHRoaXMubGFiZWxzLmZvcm1hdEN1cnJlbmN5KHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdQZXJjZW50YWdlJzpcbiAgICAgICAgdGV4dCA9IHRoaXMubGFiZWxzLmZvcm1hdE51bWJlcihwYXJzZUZsb2F0KHZhbHVlKS50b1N0cmluZygpLCB7IHN0eWxlOiAncGVyY2VudCcsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMiB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdEb3VibGUnOlxuICAgICAgY2FzZSAnQmlnRGVjaW1hbCc6XG4gICAgICAgIHRleHQgPSB0aGlzLmxhYmVscy5mb3JtYXROdW1iZXIodmFsdWUsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiB0aGlzLmdldE51bWJlckRlY2ltYWxQbGFjZXModmFsdWUpIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0ludGVnZXInOlxuICAgICAgICB0ZXh0ID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQnVzaW5lc3NTZWN0b3InOlxuICAgICAgY2FzZSAnQ2F0ZWdvcnknOlxuICAgICAgY2FzZSAnQ2VydGlmaWNhdGlvbic6XG4gICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbic6XG4gICAgICBjYXNlICdDb3Jwb3JhdGlvbkRlcGFydG1lbnQnOlxuICAgICAgY2FzZSAnRGlzdHJpYnV0aW9uTGlzdCc6XG4gICAgICBjYXNlICdTa2lsbCc6XG4gICAgICBjYXNlICdUZWFyc2hlZXQnOlxuICAgICAgY2FzZSAnU3BlY2lhbHR5JzpcbiAgICAgICAgdGV4dCA9IHZhbHVlLmxhYmVsIHx8IHZhbHVlLm5hbWUgfHwgJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnU2tpbGxUZXh0JzpcbiAgICAgICAgdGV4dCA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUuam9pbignLCAnKSA6IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0xlYWQnOlxuICAgICAgY2FzZSAnQ2FuZGlkYXRlJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3QnOlxuICAgICAgY2FzZSAnQ29ycG9yYXRlVXNlcic6XG4gICAgICBjYXNlICdQZXJzb24nOlxuICAgICAgICB0ZXh0ID0gdmFsdWUubGFiZWwgfHwgYCR7dmFsdWUuZmlyc3ROYW1lIHx8ICcnfSAke3ZhbHVlLmxhc3ROYW1lIHx8ICcnfWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnT3Bwb3J0dW5pdHknOlxuICAgICAgY2FzZSAnSm9iT3JkZXInOlxuICAgICAgICB0ZXh0ID0gdmFsdWUubGFiZWwgfHwgdmFsdWUudGl0bGUgfHwgJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnUGxhY2VtZW50JzpcbiAgICAgICAgaWYgKHZhbHVlLmNhbmRpZGF0ZSkge1xuICAgICAgICAgIHRleHQgPSBgJHt2YWx1ZS5jYW5kaWRhdGUuZmlyc3ROYW1lIHx8ICcnfSAke3ZhbHVlLmNhbmRpZGF0ZS5sYXN0TmFtZSB8fCAnJ31gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5qb2JPcmRlcikge1xuICAgICAgICAgIHRleHQgPSB2YWx1ZS5jYW5kaWRhdGUgPyBgJHt0ZXh0fSAtICR7dmFsdWUuam9iT3JkZXIudGl0bGUgfHwgJyd9YCA6IGAke3ZhbHVlLmpvYk9yZGVyLnRpdGxlIHx8ICcnfWA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdKb2JTdWJtaXNzaW9uJzpcbiAgICAgICAgdGV4dCA9XG4gICAgICAgICAgdmFsdWUubGFiZWwgfHxcbiAgICAgICAgICBgJHt2YWx1ZS5qb2JPcmRlciA/IGAke3ZhbHVlLmpvYk9yZGVyLnRpdGxlfSAtIGAgOiAnJ30gJHt2YWx1ZS5jYW5kaWRhdGUgPyB2YWx1ZS5jYW5kaWRhdGUuZmlyc3ROYW1lIDogJyd9ICR7XG4gICAgICAgICAgICB2YWx1ZS5jYW5kaWRhdGUgPyB2YWx1ZS5jYW5kaWRhdGUubGFzdE5hbWUgOiAnJ1xuICAgICAgICAgIH1gO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1dvcmtlcnNDb21wZW5zYXRpb25SYXRlJzpcbiAgICAgICAgdGV4dCA9IGAke3ZhbHVlLmNvbXBlbnNhdGlvbiA/IGAke3ZhbHVlLmNvbXBlbnNhdGlvbi5jb2RlfSAtIGAgOiAnJ30gJHt2YWx1ZS5jb21wZW5zYXRpb24gPyB2YWx1ZS5jb21wZW5zYXRpb24ubmFtZSA6ICcnfWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnT3B0aW9ucyc6XG4gICAgICAgIHRleHQgPSB0aGlzLm9wdGlvbnModmFsdWUsIGFyZ3Mub3B0aW9ucyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVG9NYW55JzpcbiAgICAgICAgaWYgKFsnQ2FuZGlkYXRlJywgJ0NvcnBvcmF0ZVVzZXInLCAnUGVyc29uJ10uaW5kZXhPZihhcmdzLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5KSA+IC0xKSB7XG4gICAgICAgICAgdGV4dCA9IHRoaXMuY29uY2F0KHZhbHVlLmRhdGEsICdmaXJzdE5hbWUnLCAnbGFzdE5hbWUnKTtcbiAgICAgICAgICBpZiAodmFsdWUuZGF0YS5sZW5ndGggPCB2YWx1ZS50b3RhbCkge1xuICAgICAgICAgICAgdGV4dCA9IHRleHQgKyAnLCAnICsgdGhpcy5sYWJlbHMuZ2V0VG9NYW55UGx1c01vcmUoeyBxdWFudGl0eTogdmFsdWUudG90YWwgLSB2YWx1ZS5kYXRhLmxlbmd0aCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgWydDYXRlZ29yeScsICdCdXNpbmVzc1NlY3RvcicsICdTa2lsbCcsICdTcGVjaWFsdHknLCAnQ2xpZW50Q29ycG9yYXRpb24nLCAnQ29ycG9yYXRpb25EZXBhcnRtZW50J10uaW5kZXhPZihcbiAgICAgICAgICAgIGFyZ3MuYXNzb2NpYXRlZEVudGl0eS5lbnRpdHksXG4gICAgICAgICAgKSA+IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIHRleHQgPSB0aGlzLmNvbmNhdCh2YWx1ZS5kYXRhLCAnbmFtZScpO1xuICAgICAgICAgIGlmICh2YWx1ZS5kYXRhLmxlbmd0aCA8IHZhbHVlLnRvdGFsKSB7XG4gICAgICAgICAgICB0ZXh0ID0gdGV4dCArICcsICcgKyB0aGlzLmxhYmVscy5nZXRUb01hbnlQbHVzTW9yZSh7IHF1YW50aXR5OiB2YWx1ZS50b3RhbCAtIHZhbHVlLmRhdGEubGVuZ3RoIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChhcmdzLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5ID09PSAnTWFpbExpc3RQdXNoSGlzdG9yeURldGFpbCcpIHtcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5jb25jYXQodmFsdWUuZGF0YSwgJ2V4dGVybmFsTGlzdE5hbWUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXh0ID0gYCR7dmFsdWUudG90YWwgfHwgJyd9YDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0NvdW50cnknOlxuICAgICAgICBsZXQgY291bnRyeU9iajogYW55ID0gZmluZEJ5Q291bnRyeUlkKE51bWJlcih2YWx1ZSkpO1xuICAgICAgICB0ZXh0ID0gY291bnRyeU9iaiA/IGNvdW50cnlPYmoubmFtZSA6IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0h0bWwnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGV4dCA9IHRoaXMuc2FuaXRpemF0aW9uU2VydmljZS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZS5yZXBsYWNlKC9cXDxhL2dpLCAnPGEgdGFyZ2V0PVwiX2JsYW5rXCInKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDYW5kaWRhdGVDb21tZW50JzpcbiAgICAgICAgdGV4dCA9IHZhbHVlLmNvbW1lbnRzID8gYCR7dGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVNob3J0KHZhbHVlLmRhdGVMYXN0TW9kaWZpZWQpfSAoJHt2YWx1ZS5uYW1lfSkgLSAke3ZhbHVlLmNvbW1lbnRzfWAgOiAnJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0ZXh0ID0gdmFsdWUudHJpbSA/IHZhbHVlLnRyaW0oKSA6IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICB1cGRhdGVWYWx1ZSh2YWx1ZTogYW55LCBhcmdzOiBhbnkpOiBhbnkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnJlbmRlcih2YWx1ZSwgYXJncyk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZT86IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lcXVhbHModmFsdWUsIHRoaXMubGFzdFZhbHVlKSAmJiB0aGlzLmVxdWFscyhhcmdzLCB0aGlzLmxhc3RBcmdzKSkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmxhc3RBcmdzID0gYXJncztcblxuICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5sYXN0VmFsdWUsIHRoaXMubGFzdEFyZ3MpO1xuXG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2ltcGxlIGZ1bmN0aW9uIGNvbmNhdCBhIGxpc3Qgb2YgZmllbGRzIGZyb20gYSBsaXN0IG9mIG9iamVjdHNcbiAgICogQG5hbWUgb3B0aW9uc1xuICAgKiBAcGFyYW0gbGlzdCAtIHRoZSBsaXN0IG9mIHZhbHVlcyB0byB1c2VcbiAgICogQHBhcmFtIGZpZWxkcyAtIGxpc3Qgb2YgZmllbGRzIHRvIGV4dHJhY3RcbiAgICovXG4gIGNvbmNhdChsaXN0OiBhbnksIC4uLmZpZWxkczogYW55W10pOiBhbnkge1xuICAgIGxldCBkYXRhOiBhbnkgPSBbXTtcbiAgICBmb3IgKGxldCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgIGxldCBsYWJlbDogYW55ID0gW107XG4gICAgICBmb3IgKGxldCBmaWVsZCBvZiBmaWVsZHMpIHtcbiAgICAgICAgbGFiZWwucHVzaChgJHtpdGVtW2ZpZWxkXX1gKTtcbiAgICAgIH1cbiAgICAgIGRhdGEucHVzaChsYWJlbC5qb2luKCcgJykpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YS5qb2luKCcsICcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbXBsZSBmdW5jdGlvbiB0byBsb29rIHVwIHRoZSAqKmxhYmVsKiogdG8gZGlzcGxheSBmcm9tIG9wdGlvbnNcbiAgICogQG5hbWUgb3B0aW9uc1xuICAgKiBAcGFyYW0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gZmluZFxuICAgKiBAcGFyYW0gbGlzdCAtIGxpc3Qgb2Ygb3B0aW9ucyAobGFiZWwvdmFsdWUgcGFpcnMpXG4gICAqL1xuICBvcHRpb25zKHZhbHVlOiBhbnksIGxpc3Q6IGFueSk6IGFueSB7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICAgIGlmIChpdGVtLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBpdGVtLmxhYmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBnZXROdW1iZXJEZWNpbWFsUGxhY2VzKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIGxldCBkZWNpbWFsUGxhY2VzOiBhbnk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBsZXQgbnVtYmVyU3RyaW5nOiBhbnkgPSBwYXJzZUZsb2F0KHZhbHVlKS50b1N0cmluZygpO1xuICAgICAgbGV0IGRlY2ltYWxQbGFjZTogYW55ID0gKG51bWJlclN0cmluZyB8fCAnJykuc3BsaXQoJy4nKVsxXSB8fCAnJztcbiAgICAgIGRlY2ltYWxQbGFjZXMgPSBkZWNpbWFsUGxhY2UubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gZGVjaW1hbFBsYWNlcyB8fCAxO1xuICB9XG5cbiAgLyoqXG4gICAqIENhcGl0YWxpemVzIHRoZSBmaXJzdCBsZXR0ZXJcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBjYXBpdGFsaXplKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuICB9XG59XG4iXX0=