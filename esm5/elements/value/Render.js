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
     * @param args - fields can either be sent as a list of arguments or as an Array
     * @return text
     */
    /**
     * Define the fields to set or retrieve for the given entity. Getter and Setter methods will automagically
     * be set up on the entity once the fields are defined.
     * @param {?} value
     * @param {?} args - fields can either be sent as a list of arguments or as an Array
     * @return {?} text
     */
    RenderPipe.prototype.render = /**
     * Define the fields to set or retrieve for the given entity. Getter and Setter methods will automagically
     * be set up on the entity once the fields are defined.
     * @param {?} value
     * @param {?} args - fields can either be sent as a list of arguments or as an Array
     * @return {?} text
     */
    function (value, args) {
        /** @type {?} */
        var type = null;
        /** @type {?} */
        var text = value;
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
     * @param list - the list of values to use
     * @param fields - list of fields to extract
     */
    /**
     * Simple function concat a list of fields from a list of objects
     * @param {?} list - the list of values to use
     * @param {...?} fields - list of fields to extract
     * @return {?}
     */
    RenderPipe.prototype.concat = /**
     * Simple function concat a list of fields from a list of objects
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
     * @param value - the value to find
     * @param list - list of options (label/value pairs)
     */
    /**
     * Simple function to look up the **label** to display from options
     * @param {?} value - the value to find
     * @param {?} list - list of options (label/value pairs)
     * @param {?} args
     * @return {?}
     */
    RenderPipe.prototype.options = /**
     * Simple function to look up the **label** to display from options
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVuZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3ZhbHVlL1JlbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QmxFO0lBVUUsb0JBQW9CLGNBQWlDLEVBQVUsbUJBQWlDLEVBQVUsTUFBd0I7UUFBOUcsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBSSxDQUFDOzs7Ozs7SUFFdkksMkJBQU07Ozs7O0lBQU4sVUFBTyxTQUFjLEVBQUUsU0FBYztRQUNuQyxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksU0FBUyxLQUFLLElBQUksSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQzVDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLFNBQVMsS0FBSyxTQUFTLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUN0RCxPQUFPLElBQUksQ0FBQztTQUNiOztZQUNLLEVBQUUsR0FBUSxPQUFPLFNBQVM7O1lBQzFCLEVBQUUsR0FBUSxPQUFPLFNBQVM7O1lBQzVCLE1BQWM7O1lBQ2QsR0FBUTs7WUFDUixNQUFXO1FBQ2YsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxRQUFRLEVBQUU7WUFDaEMsSUFB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QUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnQkExWEYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxRQUFRO29CQUNkLElBQUksRUFBRSxLQUFLO2lCQUNaO2dCQUNBLFVBQVU7Ozs7Z0JBcENGLGlCQUFpQjtnQkFDakIsWUFBWTtnQkFFWixnQkFBZ0I7O0lBd1p6QixpQkFBQztDQUFBLEFBM1hELElBMlhDO1NBdFhZLFVBQVU7OztJQUNyQiwyQkFBVzs7SUFDWCwrQkFBZTs7SUFDZiw4QkFBYzs7Ozs7SUFFRixvQ0FBeUM7Ozs7O0lBQUUseUNBQXlDOzs7OztJQUFFLDRCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IGZpbmRCeUNvdW50cnlJZCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvdW50cmllcy9Db3VudHJpZXMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIFJlbmRlcnMgZGF0YSBhcHByb3ByaWF0ZWx5IGJhc2VkIG9uIHRoZSBkYXRhIHR5cGUgZm91bmQgaW4gTWV0YVxuICogQWxsIGRhdGEgdHlwZXMgZGVmaW5lZCBieSBidWxsaG9ybiBzaG91bGQgYmUgc3VwcG9ydGVkOlxuICpcbiAqIC0gKipTdHJpbmcqKjogdHJpbXMgdmFsdWUgYW5kIHJldHVybnNcbiAqIC0gKipJbnRlZ2VyKio6IHJldHVybiB2YWx1ZVxuICogLSAqKkRvdWJsZSoqOiByZXR1cm4gdmFsdWUgZml4ZWQgdG8gMiBkZWNpbWFsc1xuICogLSAqKkJpZ0RlY2ltYWwqKjogcmV0dXJuIHZhbHVlIGZpeGVkIHRvIDIgZGVjaW1hbHNcbiAqIC0gKipBZGRyZXNzKio6IG9ubHkgY2l0eSBhbmQvb3Igc3RhdGUgcmV0dXJuZWRcbiAqIC0gKipBZGRyZXNzMSoqOiBvbmx5IGNpdHkgYW5kL29yIHN0YXRlIHJldHVybmVkXG4gKiAtICoqQWRkcmVzc1dpdGhvdXRDb3VudHJ5Kio6IG9ubHkgY2l0eSBhbmQvb3Igc3RhdGUgcmV0dXJuZWRcbiAqIC0gKipDdXJyZW5jeSoqOiBwdXQgYSAkIGluIGZyb250XG4gKiAtICoqUGVyY2VudGFnZSoqOiBkaXZpZGUgYnkgMTAwIGZpeCB0byAyIGRlY2ltYWxzIHBsYWNlIGFuZCByZXR1cm5cbiAqIC0gKipPcHRpb25zKio6IHJldHVybnMgdGhlIGFwcHJvcHJpYXRlICdsYWJlbCcgZm9yIHRoZSAndmFsdWUnIGZyb20gJ29wdGlvbnMnXG4gKiAtICoqQXJyYXkqKjogcmV0dXJucyBsaXN0IGNvbW1hIHNlcGFyYXRlZFxuICogLSAqKkRhdGVUaW1lKio6IGZvcm1hdHMgdGhlIGRhdGVcbiAqIC0gKipUaW1lU3RhbXAqKjogZm9ybWF0cyB0aGUgZGF0ZVxuICogLSAqKlRvT25lKio6IHJldHVybiB0aGUgZW50aXR5IHNwZWNpZmljIG5hbWUgKGllLiBuYW1lLCBmaXJzdE5hbWUgbGFzdE5hbWUsIHRpdGxlLCAuLi4pXG4gKiAtICoqVG9NYW55Kio6IHJldHVybiBhbiBhcnJheSBvZiB0aGUgZW50aXR5IHNwZWNpZmljIG5hbWVzIChpZS4gbmFtZSwgZmlyc3ROYW1lIGxhc3ROYW1lLCB0aXRsZSwgLi4uKVxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBcbiAqIHt7IGV4cHJlc3Npb24gfCByZW5kZXI6ZmllbGQgfX1cbiAqIGBgYFxuICovXG5AUGlwZSh7XG4gIG5hbWU6ICdyZW5kZXInLFxuICBwdXJlOiBmYWxzZSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVuZGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB2YWx1ZTogYW55O1xuICBsYXN0VmFsdWU6IGFueTtcbiAgbGFzdEFyZ3M6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBzYW5pdGl6YXRpb25TZXJ2aWNlOiBEb21TYW5pdGl6ZXIsIHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7IH1cblxuICBlcXVhbHMob2JqZWN0T25lOiBhbnksIG9iamVjdFR3bzogYW55KTogYW55IHtcbiAgICBpZiAob2JqZWN0T25lID09PSBvYmplY3RUd28pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAob2JqZWN0T25lID09PSBudWxsIHx8IG9iamVjdFR3byA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAob2JqZWN0T25lICE9PSBvYmplY3RPbmUgJiYgb2JqZWN0VHdvICE9PSBvYmplY3RUd28pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB0MTogYW55ID0gdHlwZW9mIG9iamVjdE9uZTtcbiAgICBjb25zdCB0MjogYW55ID0gdHlwZW9mIG9iamVjdFR3bztcbiAgICBsZXQgbGVuZ3RoOiBudW1iZXI7XG4gICAgbGV0IGtleTogYW55O1xuICAgIGxldCBrZXlTZXQ6IGFueTtcbiAgICBpZiAodDEgPT09IHQyICYmIHQxID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0T25lKSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob2JqZWN0VHdvKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGggPSBvYmplY3RPbmUubGVuZ3RoO1xuICAgICAgICBpZiAobGVuZ3RoID09PSBvYmplY3RUd28ubGVuZ3RoKSB7XG4gICAgICAgICAgZm9yIChrZXkgPSAwOyBrZXkgPCBsZW5ndGg7IGtleSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZXF1YWxzKG9iamVjdE9uZVtrZXldLCBvYmplY3RUd29ba2V5XSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0VHdvKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBrZXlTZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBmb3IgKGtleSBpbiBvYmplY3RPbmUpIHtcbiAgICAgICAgICBpZiAob2JqZWN0T25lW2tleV0pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5lcXVhbHMob2JqZWN0T25lW2tleV0sIG9iamVjdFR3b1trZXldKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlTZXRba2V5XSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoa2V5IGluIG9iamVjdFR3bykge1xuICAgICAgICAgIGlmICghKGtleSBpbiBrZXlTZXQpICYmIHR5cGVvZiBvYmplY3RUd29ba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldEVudGl0eUxhYmVsKGl0ZW06IGFueSwgZW50aXR5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAoZW50aXR5KSB7XG4gICAgICBjYXNlICdDb3Jwb3JhdGVVc2VyJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3QnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdDEnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdDInOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdDMnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdDQnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdDUnOlxuICAgICAgY2FzZSAnTGVhZCc6XG4gICAgICBjYXNlICdDYW5kaWRhdGUnOlxuICAgICAgY2FzZSAnUGVyc29uJzpcbiAgICAgICAgcmV0dXJuIGAke2l0ZW0uZmlyc3ROYW1lIHx8ICcnfSAke2l0ZW0ubGFzdE5hbWUgfHwgJyd9YC50cmltKCk7XG4gICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbic6XG4gICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbjEnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24yJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uMyc6XG4gICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbjQnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb241JzpcbiAgICAgICAgcmV0dXJuIGAke2l0ZW0ubmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgIGNhc2UgJ0pvYk9yZGVyJzpcbiAgICAgIGNhc2UgJ0pvYk9yZGVyMSc6XG4gICAgICBjYXNlICdKb2JPcmRlcjInOlxuICAgICAgY2FzZSAnSm9iT3JkZXIzJzpcbiAgICAgIGNhc2UgJ0pvYk9yZGVyNCc6XG4gICAgICBjYXNlICdKb2JPcmRlcjUnOlxuICAgICAgY2FzZSAnT3Bwb3J0dW5pdHknOlxuICAgICAgICByZXR1cm4gYCR7aXRlbS50aXRsZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgIGNhc2UgJ1BsYWNlbWVudCc6XG4gICAgICAgIGxldCBsYWJlbDogc3RyaW5nID0gJyc7XG4gICAgICAgIGlmIChpdGVtLmNhbmRpZGF0ZSkge1xuICAgICAgICAgIGxhYmVsID0gYCR7aXRlbS5jYW5kaWRhdGUuZmlyc3ROYW1lfSAke2l0ZW0uY2FuZGlkYXRlLmxhc3ROYW1lfWAudHJpbSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLmpvYk9yZGVyKSB7XG4gICAgICAgICAgbGFiZWwgPSBgJHtsYWJlbH0gLSAke2l0ZW0uam9iT3JkZXIudGl0bGV9YC50cmltKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIGZpZWxkcyB0byBzZXQgb3IgcmV0cmlldmUgZm9yIHRoZSBnaXZlbiBlbnRpdHkuIEdldHRlciBhbmQgU2V0dGVyIG1ldGhvZHMgd2lsbCBhdXRvbWFnaWNhbGx5XG4gICAqIGJlIHNldCB1cCBvbiB0aGUgZW50aXR5IG9uY2UgdGhlIGZpZWxkcyBhcmUgZGVmaW5lZC5cbiAgICogQHBhcmFtIGFyZ3MgLSBmaWVsZHMgY2FuIGVpdGhlciBiZSBzZW50IGFzIGEgbGlzdCBvZiBhcmd1bWVudHMgb3IgYXMgYW4gQXJyYXlcbiAgICogQHJldHVybiB0ZXh0XG4gICAqL1xuICByZW5kZXIodmFsdWU6IGFueSwgYXJnczogYW55KTogYW55IHtcbiAgICBsZXQgdHlwZTogYW55ID0gbnVsbDtcbiAgICBsZXQgdGV4dDogYW55ID0gdmFsdWU7XG5cbiAgICAvLyBIYW5kbGUgd2hlbiB3ZSBkb24ndCBoYXZlIG1ldGEsIGJ1dCBwYXNzaW5nIGFuIGVudGl0eVxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5fc3VidHlwZSAmJiAhYXJncykge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RW50aXR5TGFiZWwodmFsdWUsIHZhbHVlLl9zdWJ0eXBlKTtcbiAgICB9XG5cbiAgICAvLyBTdG9wIGxvZ2ljIGZvciBudWxsc1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsIHx8ICFhcmdzKSB7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG5cbiAgICBpZiAoYXJncy5mb3JtYXR0ZXIgJiYgdHlwZW9mIGFyZ3MuZm9ybWF0dGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gYXJncy5mb3JtYXR0ZXIodmFsdWUsIGFyZ3MpO1xuICAgIH1cbiAgICAvLyBUT0RPIG1vdmUgdGhpcyB0byBhIHNlcnZpY2VcbiAgICAvLyBEZXRlcm1pbmUgVFlQRSBiZWNhdXNlIGl0cyBub3QganVzdCAxIHZhbHVlIHRoYXQgZGV0ZXJtaW5lcyB0aGlzLlxuICAgIGlmIChhcmdzLnR5cGUgPT09ICdUT19NQU5ZJykge1xuICAgICAgdHlwZSA9ICdUb01hbnknO1xuICAgIH0gZWxzZSBpZiAoYXJncy50eXBlID09PSAnVE9fT05FJykge1xuICAgICAgdHlwZSA9IGFyZ3MuYXNzb2NpYXRlZEVudGl0eS5lbnRpdHk7XG4gICAgfSBlbHNlIGlmIChhcmdzLmRhdGFTcGVjaWFsaXphdGlvbiA9PT0gJ0RBVEVUSU1FJykge1xuICAgICAgdHlwZSA9ICdEYXRlVGltZSc7XG4gICAgfSBlbHNlIGlmIChhcmdzLmRhdGFTcGVjaWFsaXphdGlvbiA9PT0gJ1lFQVInKSB7XG4gICAgICB0eXBlID0gJ1llYXInO1xuICAgIH0gZWxzZSBpZiAoYXJncy5kYXRhU3BlY2lhbGl6YXRpb24gPT09ICdEQVRFJyAmJiBhcmdzLmRhdGFUeXBlID09PSAnRGF0ZScpIHtcbiAgICAgIHR5cGUgPSAnRGF0ZSc7XG4gICAgfSBlbHNlIGlmIChhcmdzLmRhdGFUeXBlID09PSAnVGltZXN0YW1wJykge1xuICAgICAgdHlwZSA9ICdUaW1lc3RhbXAnO1xuICAgIH0gZWxzZSBpZiAoWydtb2JpbGUnLCAncGhvbmUnLCAncGhvbmUxJywgJ3Bob25lMicsICdwaG9uZTMnLCAnd29ya1Bob25lJ10uaW5kZXhPZihhcmdzLm5hbWUpID4gLTEpIHtcbiAgICAgIHR5cGUgPSAnUGhvbmUnO1xuICAgIH0gZWxzZSBpZiAoYXJncy5uYW1lICYmIGFyZ3MubmFtZS5zdWJzdHJpbmcoMCwgNSkgPT09ICdlbWFpbCcpIHtcbiAgICAgIHR5cGUgPSAnRW1haWwnO1xuICAgIH0gZWxzZSBpZiAoKGFyZ3MubmFtZSAmJiBhcmdzLm5hbWUgPT09ICdhZGRyZXNzLmNvdW50cnlJRCcpIHx8IGFyZ3Mub3B0aW9uc1R5cGUgPT09ICdDb3VudHJ5Jykge1xuICAgICAgdHlwZSA9ICdDb3VudHJ5JztcbiAgICB9IGVsc2UgaWYgKGFyZ3Mub3B0aW9uc1R5cGUgPT09ICdTa2lsbFRleHQnKSB7XG4gICAgICB0eXBlID0gJ1NraWxsVGV4dCc7XG4gICAgfSBlbHNlIGlmIChhcmdzLm9wdGlvbnMgfHwgYXJncy5pbnB1dFR5cGUgPT09ICdTRUxFQ1QnIHx8IGFyZ3MuaW5wdXRUeXBlID09PSAnQ0hFQ0tCT1gnKSB7XG4gICAgICB0eXBlID0gJ09wdGlvbnMnO1xuICAgIH0gZWxzZSBpZiAoWydNT05FWScsICdQRVJDRU5UQUdFJywgJ0hUTUwnLCAnU1NOJ10uaW5kZXhPZihhcmdzLmRhdGFTcGVjaWFsaXphdGlvbikgPiAtMSkge1xuICAgICAgdHlwZSA9IHRoaXMuY2FwaXRhbGl6ZShhcmdzLmRhdGFTcGVjaWFsaXphdGlvbi50b0xvd2VyQ2FzZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZSA9IGFyZ3MuZGF0YVR5cGUgfHwgJ2RlZmF1bHQnO1xuICAgIH1cblxuICAgIC8vIFRyYW5zZm9ybSBkYXRhIGhlcmVcbiAgICB0cnkge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FkZHJlc3MnOlxuICAgICAgICBjYXNlICdBZGRyZXNzMSc6XG4gICAgICAgIGNhc2UgJ0FkZHJlc3NXaXRob3V0Q291bnRyeSc6XG4gICAgICAgIGNhc2UgJ1NlY29uZGFyeUFkZHJlc3MnOlxuICAgICAgICBjYXNlICdCaWxsaW5nQWRkcmVzcyc6XG4gICAgICAgICAgY29uc3QgY291bnRyeTogYW55ID0gZmluZEJ5Q291bnRyeUlkKE51bWJlcih2YWx1ZS5jb3VudHJ5TmFtZSkpO1xuICAgICAgICAgIHRleHQgPSAnJztcbiAgICAgICAgICBpZiAodmFsdWUuYWRkcmVzczEgfHwgdmFsdWUuYWRkcmVzczIpIHtcbiAgICAgICAgICAgIHRleHQgKz0gYCR7dmFsdWUuYWRkcmVzczEgfHwgJyd9ICR7dmFsdWUuYWRkcmVzczIgfHwgJyd9PGJyIC8+XFxuYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGV4dCArPSBgJHt2YWx1ZS5jaXR5IHx8ICcnfSAke3ZhbHVlLnN0YXRlIHx8ICcnfSAke3ZhbHVlLnppcCB8fCAnJ30ke3ZhbHVlLmNpdHkgfHwgdmFsdWUuc3RhdGUgfHwgdmFsdWUuemlwID8gJzxiciAvPlxcbicgOiAnJ31gO1xuICAgICAgICAgIHRleHQgKz0gYCR7Y291bnRyeSA/IGNvdW50cnkubmFtZSA6IHZhbHVlLmNvdW50cnlOYW1lIHx8ICcnfSR7Y291bnRyeSB8fCB2YWx1ZS5jb3VudHJ5TmFtZSA/ICc8YnIgLz5cXG4nIDogJyd9YDtcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5zYW5pdGl6YXRpb25TZXJ2aWNlLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRleHQudHJpbSgpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRGF0ZVRpbWUnOlxuICAgICAgICBjYXNlICdUaW1lc3RhbXAnOlxuICAgICAgICAgIHRleHQgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlU2hvcnQodmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdEYXRlJzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZShuZXcgRGF0ZSh2YWx1ZSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdZZWFyJzpcbiAgICAgICAgICB0ZXh0ID0gbmV3IERhdGUodmFsdWUpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1Bob25lJzpcbiAgICAgICAgY2FzZSAnRW1haWwnOlxuICAgICAgICAgIHRleHQgPSB2YWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTW9uZXknOlxuICAgICAgICAgIHRleHQgPSB0aGlzLmxhYmVscy5mb3JtYXRDdXJyZW5jeSh2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1BlcmNlbnRhZ2UnOlxuICAgICAgICAgIHRleHQgPSB0aGlzLmxhYmVscy5mb3JtYXROdW1iZXIocGFyc2VGbG9hdCh2YWx1ZSkudG9TdHJpbmcoKSwgeyBzdHlsZTogJ3BlcmNlbnQnLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0RvdWJsZSc6XG4gICAgICAgIGNhc2UgJ0JpZ0RlY2ltYWwnOlxuICAgICAgICAgIHRleHQgPSB0aGlzLmxhYmVscy5mb3JtYXROdW1iZXIodmFsdWUsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiB0aGlzLmdldE51bWJlckRlY2ltYWxQbGFjZXModmFsdWUpIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdJbnRlZ2VyJzpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0J1c2luZXNzU2VjdG9yJzpcbiAgICAgICAgY2FzZSAnQ2F0ZWdvcnknOlxuICAgICAgICBjYXNlICdDZXJ0aWZpY2F0aW9uJzpcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24nOlxuICAgICAgICBjYXNlICdDb3Jwb3JhdGlvbkRlcGFydG1lbnQnOlxuICAgICAgICBjYXNlICdEaXN0cmlidXRpb25MaXN0JzpcbiAgICAgICAgY2FzZSAnU2tpbGwnOlxuICAgICAgICBjYXNlICdUZWFyc2hlZXQnOlxuICAgICAgICBjYXNlICdTcGVjaWFsdHknOlxuICAgICAgICAgIHRleHQgPSB2YWx1ZS5sYWJlbCB8fCB2YWx1ZS5uYW1lIHx8ICcnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTa2lsbFRleHQnOlxuICAgICAgICAgIHRleHQgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLmpvaW4oJywgJykgOiB2YWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTGVhZCc6XG4gICAgICAgIGNhc2UgJ0NhbmRpZGF0ZSc6XG4gICAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3QnOlxuICAgICAgICBjYXNlICdDb3Jwb3JhdGVVc2VyJzpcbiAgICAgICAgY2FzZSAnUGVyc29uJzpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUubGFiZWwgfHwgYCR7dmFsdWUuZmlyc3ROYW1lIHx8ICcnfSAke3ZhbHVlLmxhc3ROYW1lIHx8ICcnfWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ09wcG9ydHVuaXR5JzpcbiAgICAgICAgY2FzZSAnSm9iT3JkZXInOlxuICAgICAgICAgIHRleHQgPSB2YWx1ZS5sYWJlbCB8fCB2YWx1ZS50aXRsZSB8fCAnJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGxhY2VtZW50JzpcbiAgICAgICAgICBpZiAodmFsdWUuY2FuZGlkYXRlKSB7XG4gICAgICAgICAgICB0ZXh0ID0gYCR7dmFsdWUuY2FuZGlkYXRlLmZpcnN0TmFtZSB8fCAnJ30gJHt2YWx1ZS5jYW5kaWRhdGUubGFzdE5hbWUgfHwgJyd9YDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHZhbHVlLmpvYk9yZGVyKSB7XG4gICAgICAgICAgICB0ZXh0ID0gdmFsdWUuY2FuZGlkYXRlID8gYCR7dGV4dH0gLSAke3ZhbHVlLmpvYk9yZGVyLnRpdGxlIHx8ICcnfWAgOiBgJHt2YWx1ZS5qb2JPcmRlci50aXRsZSB8fCAnJ31gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSm9iU3VibWlzc2lvbic6XG4gICAgICAgICAgdGV4dCA9XG4gICAgICAgICAgICB2YWx1ZS5sYWJlbCB8fFxuICAgICAgICAgICAgYCR7dmFsdWUuam9iT3JkZXIgPyBgJHt2YWx1ZS5qb2JPcmRlci50aXRsZX0gLSBgIDogJyd9ICR7dmFsdWUuY2FuZGlkYXRlID8gdmFsdWUuY2FuZGlkYXRlLmZpcnN0TmFtZSA6ICcnfSAke1xuICAgICAgICAgICAgdmFsdWUuY2FuZGlkYXRlID8gdmFsdWUuY2FuZGlkYXRlLmxhc3ROYW1lIDogJydcbiAgICAgICAgICAgIH1gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdXb3JrZXJzQ29tcGVuc2F0aW9uUmF0ZSc6XG4gICAgICAgICAgdGV4dCA9IGAke3ZhbHVlLmNvbXBlbnNhdGlvbiA/IGAke3ZhbHVlLmNvbXBlbnNhdGlvbi5jb2RlfSAtIGAgOiAnJ30gJHt2YWx1ZS5jb21wZW5zYXRpb24gPyB2YWx1ZS5jb21wZW5zYXRpb24ubmFtZSA6ICcnfWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ09wdGlvbnMnOlxuICAgICAgICAgIHRleHQgPSB0aGlzLm9wdGlvbnModmFsdWUsIGFyZ3Mub3B0aW9ucywgYXJncyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1RvTWFueSc6XG4gICAgICAgICAgaWYgKFsnQ2FuZGlkYXRlJywgJ0NvcnBvcmF0ZVVzZXInLCAnUGVyc29uJ10uaW5kZXhPZihhcmdzLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5KSA+IC0xKSB7XG4gICAgICAgICAgICB0ZXh0ID0gdGhpcy5jb25jYXQodmFsdWUuZGF0YSwgJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScpO1xuICAgICAgICAgICAgaWYgKHZhbHVlLmRhdGEubGVuZ3RoIDwgdmFsdWUudG90YWwpIHtcbiAgICAgICAgICAgICAgdGV4dCA9IHRleHQgKyAnLCAnICsgdGhpcy5sYWJlbHMuZ2V0VG9NYW55UGx1c01vcmUoeyBxdWFudGl0eTogdmFsdWUudG90YWwgLSB2YWx1ZS5kYXRhLmxlbmd0aCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgWydDYXRlZ29yeScsICdCdXNpbmVzc1NlY3RvcicsICdTa2lsbCcsICdTcGVjaWFsdHknLCAnQ2xpZW50Q29ycG9yYXRpb24nLCAnQ29ycG9yYXRpb25EZXBhcnRtZW50J10uaW5kZXhPZihcbiAgICAgICAgICAgICAgYXJncy5hc3NvY2lhdGVkRW50aXR5LmVudGl0eSxcbiAgICAgICAgICAgICkgPiAtMVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGV4dCA9IHRoaXMuY29uY2F0KHZhbHVlLmRhdGEsICduYW1lJyk7XG4gICAgICAgICAgICBpZiAodmFsdWUuZGF0YS5sZW5ndGggPCB2YWx1ZS50b3RhbCkge1xuICAgICAgICAgICAgICB0ZXh0ID0gdGV4dCArICcsICcgKyB0aGlzLmxhYmVscy5nZXRUb01hbnlQbHVzTW9yZSh7IHF1YW50aXR5OiB2YWx1ZS50b3RhbCAtIHZhbHVlLmRhdGEubGVuZ3RoIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5hc3NvY2lhdGVkRW50aXR5LmVudGl0eSA9PT0gJ01haWxMaXN0UHVzaEhpc3RvcnlEZXRhaWwnKSB7XG4gICAgICAgICAgICB0ZXh0ID0gdGhpcy5jb25jYXQodmFsdWUuZGF0YSwgJ2V4dGVybmFsTGlzdE5hbWUnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGV4dCA9IGAke3ZhbHVlLnRvdGFsIHx8ICcnfWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdDb3VudHJ5JzpcbiAgICAgICAgICBjb25zdCBjb3VudHJ5T2JqOiBhbnkgPSBmaW5kQnlDb3VudHJ5SWQoTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgICAgdGV4dCA9IGNvdW50cnlPYmogPyBjb3VudHJ5T2JqLm5hbWUgOiB2YWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSHRtbCc6XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmpvaW4oJyAnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGV4dCA9IHRoaXMuc2FuaXRpemF0aW9uU2VydmljZS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZS5yZXBsYWNlKC9cXDxhL2dpLCAnPGEgdGFyZ2V0PVwiX2JsYW5rXCInKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdDYW5kaWRhdGVDb21tZW50JzpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUuY29tbWVudHMgPyBgJHt0aGlzLmxhYmVscy5mb3JtYXREYXRlU2hvcnQodmFsdWUuZGF0ZUxhc3RNb2RpZmllZCl9ICgke3ZhbHVlLm5hbWV9KSAtICR7dmFsdWUuY29tbWVudHN9YCA6ICcnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRleHQgPSB2YWx1ZS50cmltID8gdmFsdWUudHJpbSgpIDogdmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBXQVJOSU5HOiBUaGVyZSB3YXMgYSBwcm9ibGVtIHJlbmRlcmluZyB0aGUgdmFsdWUgb2YgdGhlIGZpZWxkOiAke2FyZ3MubGFiZWx9LiBQbGVhc2UgY2hlY2sgdGhlIGNvbmZpZ3VyYXRpb25gKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVWYWx1ZSh2YWx1ZTogYW55LCBhcmdzOiBhbnkpOiBhbnkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnJlbmRlcih2YWx1ZSwgYXJncyk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZT86IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lcXVhbHModmFsdWUsIHRoaXMubGFzdFZhbHVlKSAmJiB0aGlzLmVxdWFscyhhcmdzLCB0aGlzLmxhc3RBcmdzKSkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmxhc3RBcmdzID0gYXJncztcblxuICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5sYXN0VmFsdWUsIHRoaXMubGFzdEFyZ3MpO1xuXG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2ltcGxlIGZ1bmN0aW9uIGNvbmNhdCBhIGxpc3Qgb2YgZmllbGRzIGZyb20gYSBsaXN0IG9mIG9iamVjdHNcbiAgICogQHBhcmFtIGxpc3QgLSB0aGUgbGlzdCBvZiB2YWx1ZXMgdG8gdXNlXG4gICAqIEBwYXJhbSBmaWVsZHMgLSBsaXN0IG9mIGZpZWxkcyB0byBleHRyYWN0XG4gICAqL1xuICBjb25jYXQobGlzdDogYW55LCAuLi5maWVsZHM6IGFueVtdKTogYW55IHtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgY29uc3QgbGFiZWw6IGFueSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBmaWVsZHMpIHtcbiAgICAgICAgbGFiZWwucHVzaChgJHtpdGVtW2ZpZWxkXX1gKTtcbiAgICAgIH1cbiAgICAgIGRhdGEucHVzaChsYWJlbC5qb2luKCcgJykpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YS5qb2luKCcsICcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbXBsZSBmdW5jdGlvbiB0byBsb29rIHVwIHRoZSAqKmxhYmVsKiogdG8gZGlzcGxheSBmcm9tIG9wdGlvbnNcbiAgICogQHBhcmFtIHZhbHVlIC0gdGhlIHZhbHVlIHRvIGZpbmRcbiAgICogQHBhcmFtIGxpc3QgLSBsaXN0IG9mIG9wdGlvbnMgKGxhYmVsL3ZhbHVlIHBhaXJzKVxuICAgKi9cbiAgb3B0aW9ucyh2YWx1ZTogYW55LCBsaXN0OiBhbnksIGFyZ3M6IGFueSk6IGFueSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSBbdmFsdWVdO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHZhbHVlLm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIGxpc3QpIHtcbiAgICAgICAgICBpZiAob3B0aW9uLnZhbHVlID09PSBpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLmxhYmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghYXJncy5vcHRpb25zVHlwZSkge1xuICAgICAgICB0aHJvdyBFcnJvcihlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXROdW1iZXJEZWNpbWFsUGxhY2VzKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIGxldCBkZWNpbWFsUGxhY2VzOiBhbnk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCBudW1iZXJTdHJpbmc6IGFueSA9IHBhcnNlRmxvYXQodmFsdWUpLnRvU3RyaW5nKCk7XG4gICAgICBjb25zdCBkZWNpbWFsUGxhY2U6IGFueSA9IChudW1iZXJTdHJpbmcgfHwgJycpLnNwbGl0KCcuJylbMV0gfHwgJyc7XG4gICAgICBkZWNpbWFsUGxhY2VzID0gZGVjaW1hbFBsYWNlLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGRlY2ltYWxQbGFjZXMgfHwgMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXBpdGFsaXplcyB0aGUgZmlyc3QgbGV0dGVyXG4gICAqL1xuICBjYXBpdGFsaXplKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuICB9XG59XG4iXX0=