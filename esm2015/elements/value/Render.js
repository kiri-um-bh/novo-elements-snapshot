/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class RenderPipe {
    /**
     * @param {?} changeDetector
     * @param {?} sanitizationService
     * @param {?} labels
     */
    constructor(changeDetector, sanitizationService, labels) {
        this.changeDetector = changeDetector;
        this.sanitizationService = sanitizationService;
        this.labels = labels;
    }
    /**
     * @param {?} objectOne
     * @param {?} objectTwo
     * @return {?}
     */
    equals(objectOne, objectTwo) {
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
        let t1 = typeof objectOne;
        /** @type {?} */
        let t2 = typeof objectTwo;
        /** @type {?} */
        let length;
        /** @type {?} */
        let key;
        /** @type {?} */
        let keySet;
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
    }
    /**
     * @param {?} item
     * @param {?} entity
     * @return {?}
     */
    getEntityLabel(item, entity) {
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
                return `${item.firstName || ''} ${item.lastName || ''}`.trim();
            case 'ClientCorporation':
            case 'ClientCorporation1':
            case 'ClientCorporation2':
            case 'ClientCorporation3':
            case 'ClientCorporation4':
            case 'ClientCorporation5':
                return `${item.name || ''}`.trim();
            case 'JobOrder':
            case 'JobOrder1':
            case 'JobOrder2':
            case 'JobOrder3':
            case 'JobOrder4':
            case 'JobOrder5':
            case 'Opportunity':
                return `${item.title || ''}`.trim();
            case 'Placement':
                /** @type {?} */
                let label = '';
                if (item.candidate) {
                    label = `${item.candidate.firstName} ${item.candidate.lastName}`.trim();
                }
                if (item.jobOrder) {
                    label = `${label} - ${item.jobOrder.title}`.trim();
                }
                return label;
            default:
                return '';
        }
    }
    /**
     * Define the fields to set or retrieve for the given entity. Getter and Setter methods will automagically
     * be set up on the entity once the fields are defined.
     * \@name fields
     * \@memberOf Entity#
     * @param {?} value
     * @param {?} args - fields can either be sent as a list of arguments or as an Array
     * @return {?} text
     */
    render(value, args) {
        /** @type {?} */
        let type = null;
        /** @type {?} */
        let text = value;
        /** @type {?} */
        let rezonedTime;
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
                    let country = findByCountryId(Number(value.countryName));
                    text = '';
                    if (value.address1 || value.address2) {
                        text += `${value.address1 || ''} ${value.address2 || ''}<br />\n`;
                    }
                    text += `${value.city || ''} ${value.state || ''} ${value.zip || ''}${value.city || value.state || value.zip ? '<br />\n' : ''}`;
                    text += `${country ? country.name : value.countryName || ''}${country || value.countryName ? '<br />\n' : ''}`;
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
                    text = value.label || `${value.firstName || ''} ${value.lastName || ''}`;
                    break;
                case 'Opportunity':
                case 'JobOrder':
                    text = value.label || value.title || '';
                    break;
                case 'Placement':
                    if (value.candidate) {
                        text = `${value.candidate.firstName || ''} ${value.candidate.lastName || ''}`;
                    }
                    if (value.jobOrder) {
                        text = value.candidate ? `${text} - ${value.jobOrder.title || ''}` : `${value.jobOrder.title || ''}`;
                    }
                    break;
                case 'JobSubmission':
                    text =
                        value.label ||
                            `${value.jobOrder ? `${value.jobOrder.title} - ` : ''} ${value.candidate ? value.candidate.firstName : ''} ${value.candidate ? value.candidate.lastName : ''}`;
                    break;
                case 'WorkersCompensationRate':
                    text = `${value.compensation ? `${value.compensation.code} - ` : ''} ${value.compensation ? value.compensation.name : ''}`;
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
                        text = `${value.total || ''}`;
                    }
                    break;
                case 'Country':
                    /** @type {?} */
                    let countryObj = findByCountryId(Number(value));
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
                    text = value.comments ? `${this.labels.formatDateShort(value.dateLastModified)} (${value.name}) - ${value.comments}` : '';
                    break;
                default:
                    text = value.trim ? value.trim() : value;
                    break;
            }
            return text;
        }
        catch (e) {
            console.error(`WARNING: There was a problem rendering the value of the field: ${args.label}. Please check the configuration`);
            console.error(e);
            return text;
        }
    }
    /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    updateValue(value, args) {
        this.value = this.render(value, args);
        this.changeDetector.markForCheck();
    }
    /**
     * @param {?=} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
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
    }
    /**
     * Simple function concat a list of fields from a list of objects
     * \@name options
     * @param {?} list - the list of values to use
     * @param {...?} fields - list of fields to extract
     * @return {?}
     */
    concat(list, ...fields) {
        /** @type {?} */
        let data = [];
        for (let item of list) {
            /** @type {?} */
            let label = [];
            for (let field of fields) {
                label.push(`${item[field]}`);
            }
            data.push(label.join(' '));
        }
        return data.join(', ');
    }
    /**
     * Simple function to look up the **label** to display from options
     * \@name options
     * @param {?} value - the value to find
     * @param {?} list - list of options (label/value pairs)
     * @param {?} args
     * @return {?}
     */
    options(value, list, args) {
        if (!Array.isArray(value)) {
            value = [value];
        }
        try {
            return value.map((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                for (const option of list) {
                    if (option.value === item) {
                        return option.label;
                    }
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getNumberDecimalPlaces(value) {
        /** @type {?} */
        let decimalPlaces;
        if (value) {
            /** @type {?} */
            let numberString = parseFloat(value).toString();
            /** @type {?} */
            let decimalPlace = (numberString || '').split('.')[1] || '';
            decimalPlaces = decimalPlace.length;
        }
        return decimalPlaces || 1;
    }
    /**
     * Capitalizes the first letter
     * @param {?} value
     * @return {?}
     */
    capitalize(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}
RenderPipe.decorators = [
    { type: Pipe, args: [{
                name: 'render',
                pure: false,
            },] },
    { type: Injectable }
];
/** @nocollapse */
RenderPipe.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: DomSanitizer },
    { type: NovoLabelService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVuZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3ZhbHVlL1JlbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBRXpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNsRSxNQUFNLE9BQU8sVUFBVTs7Ozs7O0lBS3JCLFlBQW9CLGNBQWlDLEVBQVUsbUJBQWlDLEVBQVUsTUFBd0I7UUFBOUcsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDOzs7Ozs7SUFFdEksTUFBTSxDQUFDLFNBQWMsRUFBRSxTQUFjO1FBQ25DLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxTQUFTLEtBQUssSUFBSSxJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDNUMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksU0FBUyxLQUFLLFNBQVMsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQ3RELE9BQU8sSUFBSSxDQUFDO1NBQ2I7O1lBQ0csRUFBRSxHQUFRLE9BQU8sU0FBUzs7WUFDMUIsRUFBRSxHQUFRLE9BQU8sU0FBUzs7WUFDMUIsTUFBYzs7WUFDZCxHQUFROztZQUNSLE1BQVc7UUFDZixJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLFFBQVEsRUFBRTtZ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SW5qZWN0YWJsZSwgUGlwZSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgZmluZEJ5Q291bnRyeUlkIH0gZnJvbSAnLi4vLi4vdXRpbHMvY291bnRyaWVzL0NvdW50cmllcyc7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogUmVuZGVycyBkYXRhIGFwcHJvcHJpYXRlbHkgYmFzZWQgb24gdGhlIGRhdGEgdHlwZSBmb3VuZCBpbiBNZXRhXG4gKiBBbGwgZGF0YSB0eXBlcyBkZWZpbmVkIGJ5IGJ1bGxob3JuIHNob3VsZCBiZSBzdXBwb3J0ZWQ6XG4gKlxuICogLSAqKlN0cmluZyoqOiB0cmltcyB2YWx1ZSBhbmQgcmV0dXJuc1xuICogLSAqKkludGVnZXIqKjogcmV0dXJuIHZhbHVlXG4gKiAtICoqRG91YmxlKio6IHJldHVybiB2YWx1ZSBmaXhlZCB0byAyIGRlY2ltYWxzXG4gKiAtICoqQmlnRGVjaW1hbCoqOiByZXR1cm4gdmFsdWUgZml4ZWQgdG8gMiBkZWNpbWFsc1xuICogLSAqKkFkZHJlc3MqKjogb25seSBjaXR5IGFuZC9vciBzdGF0ZSByZXR1cm5lZFxuICogLSAqKkFkZHJlc3MxKio6IG9ubHkgY2l0eSBhbmQvb3Igc3RhdGUgcmV0dXJuZWRcbiAqIC0gKipBZGRyZXNzV2l0aG91dENvdW50cnkqKjogb25seSBjaXR5IGFuZC9vciBzdGF0ZSByZXR1cm5lZFxuICogLSAqKkN1cnJlbmN5Kio6IHB1dCBhICQgaW4gZnJvbnRcbiAqIC0gKipQZXJjZW50YWdlKio6IGRpdmlkZSBieSAxMDAgZml4IHRvIDIgZGVjaW1hbHMgcGxhY2UgYW5kIHJldHVyblxuICogLSAqKk9wdGlvbnMqKjogcmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgJ2xhYmVsJyBmb3IgdGhlICd2YWx1ZScgZnJvbSAnb3B0aW9ucydcbiAqIC0gKipBcnJheSoqOiByZXR1cm5zIGxpc3QgY29tbWEgc2VwYXJhdGVkXG4gKiAtICoqRGF0ZVRpbWUqKjogZm9ybWF0cyB0aGUgZGF0ZVxuICogLSAqKlRpbWVTdGFtcCoqOiBmb3JtYXRzIHRoZSBkYXRlXG4gKiAtICoqVG9PbmUqKjogcmV0dXJuIHRoZSBlbnRpdHkgc3BlY2lmaWMgbmFtZSAoaWUuIG5hbWUsIGZpcnN0TmFtZSBsYXN0TmFtZSwgdGl0bGUsIC4uLilcbiAqIC0gKipUb01hbnkqKjogcmV0dXJuIGFuIGFycmF5IG9mIHRoZSBlbnRpdHkgc3BlY2lmaWMgbmFtZXMgKGllLiBuYW1lLCBmaXJzdE5hbWUgbGFzdE5hbWUsIHRpdGxlLCAuLi4pXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYFxuICoge3sgZXhwcmVzc2lvbiB8IHJlbmRlcjpmaWVsZCB9fVxuICogYGBgXG4gKi9cbkBQaXBlKHtcbiAgbmFtZTogJ3JlbmRlcicsXG4gIHB1cmU6IGZhbHNlLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZW5kZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHZhbHVlOiBhbnk7XG4gIGxhc3RWYWx1ZTogYW55O1xuICBsYXN0QXJnczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHNhbml0aXphdGlvblNlcnZpY2U6IERvbVNhbml0aXplciwgcHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgZXF1YWxzKG9iamVjdE9uZTogYW55LCBvYmplY3RUd286IGFueSk6IGFueSB7XG4gICAgaWYgKG9iamVjdE9uZSA9PT0gb2JqZWN0VHdvKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG9iamVjdE9uZSA9PT0gbnVsbCB8fCBvYmplY3RUd28gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9iamVjdE9uZSAhPT0gb2JqZWN0T25lICYmIG9iamVjdFR3byAhPT0gb2JqZWN0VHdvKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbGV0IHQxOiBhbnkgPSB0eXBlb2Ygb2JqZWN0T25lO1xuICAgIGxldCB0MjogYW55ID0gdHlwZW9mIG9iamVjdFR3bztcbiAgICBsZXQgbGVuZ3RoOiBudW1iZXI7XG4gICAgbGV0IGtleTogYW55O1xuICAgIGxldCBrZXlTZXQ6IGFueTtcbiAgICBpZiAodDEgPT09IHQyICYmIHQxID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0T25lKSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob2JqZWN0VHdvKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGggPSBvYmplY3RPbmUubGVuZ3RoO1xuICAgICAgICBpZiAobGVuZ3RoID09PSBvYmplY3RUd28ubGVuZ3RoKSB7XG4gICAgICAgICAgZm9yIChrZXkgPSAwOyBrZXkgPCBsZW5ndGg7IGtleSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZXF1YWxzKG9iamVjdE9uZVtrZXldLCBvYmplY3RUd29ba2V5XSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0VHdvKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBrZXlTZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBmb3IgKGtleSBpbiBvYmplY3RPbmUpIHtcbiAgICAgICAgICBpZiAob2JqZWN0T25lW2tleV0pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5lcXVhbHMob2JqZWN0T25lW2tleV0sIG9iamVjdFR3b1trZXldKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlTZXRba2V5XSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoa2V5IGluIG9iamVjdFR3bykge1xuICAgICAgICAgIGlmICghKGtleSBpbiBrZXlTZXQpICYmIHR5cGVvZiBvYmplY3RUd29ba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldEVudGl0eUxhYmVsKGl0ZW06IGFueSwgZW50aXR5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAoZW50aXR5KSB7XG4gICAgICBjYXNlICdDb3Jwb3JhdGVVc2VyJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3QnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdDEnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdDInOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdDMnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdDQnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdDUnOlxuICAgICAgY2FzZSAnTGVhZCc6XG4gICAgICBjYXNlICdDYW5kaWRhdGUnOlxuICAgICAgY2FzZSAnUGVyc29uJzpcbiAgICAgICAgcmV0dXJuIGAke2l0ZW0uZmlyc3ROYW1lIHx8ICcnfSAke2l0ZW0ubGFzdE5hbWUgfHwgJyd9YC50cmltKCk7XG4gICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbic6XG4gICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbjEnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24yJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uMyc6XG4gICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbjQnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb241JzpcbiAgICAgICAgcmV0dXJuIGAke2l0ZW0ubmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgIGNhc2UgJ0pvYk9yZGVyJzpcbiAgICAgIGNhc2UgJ0pvYk9yZGVyMSc6XG4gICAgICBjYXNlICdKb2JPcmRlcjInOlxuICAgICAgY2FzZSAnSm9iT3JkZXIzJzpcbiAgICAgIGNhc2UgJ0pvYk9yZGVyNCc6XG4gICAgICBjYXNlICdKb2JPcmRlcjUnOlxuICAgICAgY2FzZSAnT3Bwb3J0dW5pdHknOlxuICAgICAgICByZXR1cm4gYCR7aXRlbS50aXRsZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgIGNhc2UgJ1BsYWNlbWVudCc6XG4gICAgICAgIGxldCBsYWJlbDogc3RyaW5nID0gJyc7XG4gICAgICAgIGlmIChpdGVtLmNhbmRpZGF0ZSkge1xuICAgICAgICAgIGxhYmVsID0gYCR7aXRlbS5jYW5kaWRhdGUuZmlyc3ROYW1lfSAke2l0ZW0uY2FuZGlkYXRlLmxhc3ROYW1lfWAudHJpbSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLmpvYk9yZGVyKSB7XG4gICAgICAgICAgbGFiZWwgPSBgJHtsYWJlbH0gLSAke2l0ZW0uam9iT3JkZXIudGl0bGV9YC50cmltKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIGZpZWxkcyB0byBzZXQgb3IgcmV0cmlldmUgZm9yIHRoZSBnaXZlbiBlbnRpdHkuIEdldHRlciBhbmQgU2V0dGVyIG1ldGhvZHMgd2lsbCBhdXRvbWFnaWNhbGx5XG4gICAqIGJlIHNldCB1cCBvbiB0aGUgZW50aXR5IG9uY2UgdGhlIGZpZWxkcyBhcmUgZGVmaW5lZC5cbiAgICogQG5hbWUgZmllbGRzXG4gICAqIEBtZW1iZXJPZiBFbnRpdHkjXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcGFyYW0gYXJncyAtIGZpZWxkcyBjYW4gZWl0aGVyIGJlIHNlbnQgYXMgYSBsaXN0IG9mIGFyZ3VtZW50cyBvciBhcyBhbiBBcnJheVxuICAgKiBAcmV0dXJuIHRleHRcbiAgICovXG4gIHJlbmRlcih2YWx1ZTogYW55LCBhcmdzOiBhbnkpOiBhbnkge1xuICAgIGxldCB0eXBlOiBhbnkgPSBudWxsO1xuICAgIGxldCB0ZXh0OiBhbnkgPSB2YWx1ZTtcbiAgICBsZXQgcmV6b25lZFRpbWU6IGFueTtcblxuICAgIC8vIEhhbmRsZSB3aGVuIHdlIGRvbid0IGhhdmUgbWV0YSwgYnV0IHBhc3NpbmcgYW4gZW50aXR5XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLl9zdWJ0eXBlICYmICFhcmdzKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRFbnRpdHlMYWJlbCh2YWx1ZSwgdmFsdWUuX3N1YnR5cGUpO1xuICAgIH1cblxuICAgIC8vIFN0b3AgbG9naWMgZm9yIG51bGxzXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwgfHwgIWFyZ3MpIHtcbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cblxuICAgIGlmIChhcmdzLmZvcm1hdHRlciAmJiB0eXBlb2YgYXJncy5mb3JtYXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBhcmdzLmZvcm1hdHRlcih2YWx1ZSwgYXJncyk7XG4gICAgfVxuICAgIC8vIFRPRE8gbW92ZSB0aGlzIHRvIGEgc2VydmljZVxuICAgIC8vIERldGVybWluZSBUWVBFIGJlY2F1c2UgaXRzIG5vdCBqdXN0IDEgdmFsdWUgdGhhdCBkZXRlcm1pbmVzIHRoaXMuXG4gICAgaWYgKGFyZ3MudHlwZSA9PT0gJ1RPX01BTlknKSB7XG4gICAgICB0eXBlID0gJ1RvTWFueSc7XG4gICAgfSBlbHNlIGlmIChhcmdzLnR5cGUgPT09ICdUT19PTkUnKSB7XG4gICAgICB0eXBlID0gYXJncy5hc3NvY2lhdGVkRW50aXR5LmVudGl0eTtcbiAgICB9IGVsc2UgaWYgKGFyZ3MuZGF0YVNwZWNpYWxpemF0aW9uID09PSAnREFURVRJTUUnKSB7XG4gICAgICB0eXBlID0gJ0RhdGVUaW1lJztcbiAgICB9IGVsc2UgaWYgKGFyZ3MuZGF0YVNwZWNpYWxpemF0aW9uID09PSAnWUVBUicpIHtcbiAgICAgIHR5cGUgPSAnWWVhcic7XG4gICAgfSBlbHNlIGlmIChhcmdzLmRhdGFTcGVjaWFsaXphdGlvbiA9PT0gJ0RBVEUnICYmIGFyZ3MuZGF0YVR5cGUgPT09ICdEYXRlJykge1xuICAgICAgdHlwZSA9ICdEYXRlJztcbiAgICB9IGVsc2UgaWYgKGFyZ3MuZGF0YVR5cGUgPT09ICdUaW1lc3RhbXAnKSB7XG4gICAgICB0eXBlID0gJ1RpbWVzdGFtcCc7XG4gICAgfSBlbHNlIGlmIChbJ21vYmlsZScsICdwaG9uZScsICdwaG9uZTEnLCAncGhvbmUyJywgJ3Bob25lMycsICd3b3JrUGhvbmUnXS5pbmRleE9mKGFyZ3MubmFtZSkgPiAtMSkge1xuICAgICAgdHlwZSA9ICdQaG9uZSc7XG4gICAgfSBlbHNlIGlmIChhcmdzLm5hbWUgJiYgYXJncy5uYW1lLnN1YnN0cmluZygwLCA1KSA9PT0gJ2VtYWlsJykge1xuICAgICAgdHlwZSA9ICdFbWFpbCc7XG4gICAgfSBlbHNlIGlmICgoYXJncy5uYW1lICYmIGFyZ3MubmFtZSA9PT0gJ2FkZHJlc3MuY291bnRyeUlEJykgfHwgYXJncy5vcHRpb25zVHlwZSA9PT0gJ0NvdW50cnknKSB7XG4gICAgICB0eXBlID0gJ0NvdW50cnknO1xuICAgIH0gZWxzZSBpZiAoYXJncy5vcHRpb25zVHlwZSA9PT0gJ1NraWxsVGV4dCcpIHtcbiAgICAgIHR5cGUgPSAnU2tpbGxUZXh0JztcbiAgICB9IGVsc2UgaWYgKGFyZ3Mub3B0aW9ucyB8fCBhcmdzLmlucHV0VHlwZSA9PT0gJ1NFTEVDVCcgfHwgYXJncy5pbnB1dFR5cGUgPT09ICdDSEVDS0JPWCcpIHtcbiAgICAgIHR5cGUgPSAnT3B0aW9ucyc7XG4gICAgfSBlbHNlIGlmIChbJ01PTkVZJywgJ1BFUkNFTlRBR0UnLCAnSFRNTCcsICdTU04nXS5pbmRleE9mKGFyZ3MuZGF0YVNwZWNpYWxpemF0aW9uKSA+IC0xKSB7XG4gICAgICB0eXBlID0gdGhpcy5jYXBpdGFsaXplKGFyZ3MuZGF0YVNwZWNpYWxpemF0aW9uLnRvTG93ZXJDYXNlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlID0gYXJncy5kYXRhVHlwZSB8fCAnZGVmYXVsdCc7XG4gICAgfVxuXG4gICAgLy8gVHJhbnNmb3JtIGRhdGEgaGVyZVxuICAgIHRyeSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnQWRkcmVzcyc6XG4gICAgICAgIGNhc2UgJ0FkZHJlc3MxJzpcbiAgICAgICAgY2FzZSAnQWRkcmVzc1dpdGhvdXRDb3VudHJ5JzpcbiAgICAgICAgY2FzZSAnU2Vjb25kYXJ5QWRkcmVzcyc6XG4gICAgICAgIGNhc2UgJ0JpbGxpbmdBZGRyZXNzJzpcbiAgICAgICAgICBsZXQgY291bnRyeTogYW55ID0gZmluZEJ5Q291bnRyeUlkKE51bWJlcih2YWx1ZS5jb3VudHJ5TmFtZSkpO1xuICAgICAgICAgIHRleHQgPSAnJztcbiAgICAgICAgICBpZiAodmFsdWUuYWRkcmVzczEgfHwgdmFsdWUuYWRkcmVzczIpIHtcbiAgICAgICAgICAgIHRleHQgKz0gYCR7dmFsdWUuYWRkcmVzczEgfHwgJyd9ICR7dmFsdWUuYWRkcmVzczIgfHwgJyd9PGJyIC8+XFxuYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGV4dCArPSBgJHt2YWx1ZS5jaXR5IHx8ICcnfSAke3ZhbHVlLnN0YXRlIHx8ICcnfSAke3ZhbHVlLnppcCB8fCAnJ30ke3ZhbHVlLmNpdHkgfHwgdmFsdWUuc3RhdGUgfHwgdmFsdWUuemlwID8gJzxiciAvPlxcbicgOiAnJ31gO1xuICAgICAgICAgIHRleHQgKz0gYCR7Y291bnRyeSA/IGNvdW50cnkubmFtZSA6IHZhbHVlLmNvdW50cnlOYW1lIHx8ICcnfSR7Y291bnRyeSB8fCB2YWx1ZS5jb3VudHJ5TmFtZSA/ICc8YnIgLz5cXG4nIDogJyd9YDtcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5zYW5pdGl6YXRpb25TZXJ2aWNlLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRleHQudHJpbSgpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRGF0ZVRpbWUnOlxuICAgICAgICBjYXNlICdUaW1lc3RhbXAnOlxuICAgICAgICAgIHRleHQgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlU2hvcnQodmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdEYXRlJzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZShuZXcgRGF0ZSh2YWx1ZSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdZZWFyJzpcbiAgICAgICAgICB0ZXh0ID0gbmV3IERhdGUodmFsdWUpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1Bob25lJzpcbiAgICAgICAgY2FzZSAnRW1haWwnOlxuICAgICAgICAgIHRleHQgPSB2YWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTW9uZXknOlxuICAgICAgICAgIHRleHQgPSB0aGlzLmxhYmVscy5mb3JtYXRDdXJyZW5jeSh2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1BlcmNlbnRhZ2UnOlxuICAgICAgICAgIHRleHQgPSB0aGlzLmxhYmVscy5mb3JtYXROdW1iZXIocGFyc2VGbG9hdCh2YWx1ZSkudG9TdHJpbmcoKSwgeyBzdHlsZTogJ3BlcmNlbnQnLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0RvdWJsZSc6XG4gICAgICAgIGNhc2UgJ0JpZ0RlY2ltYWwnOlxuICAgICAgICAgIHRleHQgPSB0aGlzLmxhYmVscy5mb3JtYXROdW1iZXIodmFsdWUsIHsgbWluaW11bUZyYWN0aW9uRGlnaXRzOiB0aGlzLmdldE51bWJlckRlY2ltYWxQbGFjZXModmFsdWUpIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdJbnRlZ2VyJzpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0J1c2luZXNzU2VjdG9yJzpcbiAgICAgICAgY2FzZSAnQ2F0ZWdvcnknOlxuICAgICAgICBjYXNlICdDZXJ0aWZpY2F0aW9uJzpcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24nOlxuICAgICAgICBjYXNlICdDb3Jwb3JhdGlvbkRlcGFydG1lbnQnOlxuICAgICAgICBjYXNlICdEaXN0cmlidXRpb25MaXN0JzpcbiAgICAgICAgY2FzZSAnU2tpbGwnOlxuICAgICAgICBjYXNlICdUZWFyc2hlZXQnOlxuICAgICAgICBjYXNlICdTcGVjaWFsdHknOlxuICAgICAgICAgIHRleHQgPSB2YWx1ZS5sYWJlbCB8fCB2YWx1ZS5uYW1lIHx8ICcnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTa2lsbFRleHQnOlxuICAgICAgICAgIHRleHQgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLmpvaW4oJywgJykgOiB2YWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTGVhZCc6XG4gICAgICAgIGNhc2UgJ0NhbmRpZGF0ZSc6XG4gICAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3QnOlxuICAgICAgICBjYXNlICdDb3Jwb3JhdGVVc2VyJzpcbiAgICAgICAgY2FzZSAnUGVyc29uJzpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUubGFiZWwgfHwgYCR7dmFsdWUuZmlyc3ROYW1lIHx8ICcnfSAke3ZhbHVlLmxhc3ROYW1lIHx8ICcnfWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ09wcG9ydHVuaXR5JzpcbiAgICAgICAgY2FzZSAnSm9iT3JkZXInOlxuICAgICAgICAgIHRleHQgPSB2YWx1ZS5sYWJlbCB8fCB2YWx1ZS50aXRsZSB8fCAnJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGxhY2VtZW50JzpcbiAgICAgICAgICBpZiAodmFsdWUuY2FuZGlkYXRlKSB7XG4gICAgICAgICAgICB0ZXh0ID0gYCR7dmFsdWUuY2FuZGlkYXRlLmZpcnN0TmFtZSB8fCAnJ30gJHt2YWx1ZS5jYW5kaWRhdGUubGFzdE5hbWUgfHwgJyd9YDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHZhbHVlLmpvYk9yZGVyKSB7XG4gICAgICAgICAgICB0ZXh0ID0gdmFsdWUuY2FuZGlkYXRlID8gYCR7dGV4dH0gLSAke3ZhbHVlLmpvYk9yZGVyLnRpdGxlIHx8ICcnfWAgOiBgJHt2YWx1ZS5qb2JPcmRlci50aXRsZSB8fCAnJ31gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSm9iU3VibWlzc2lvbic6XG4gICAgICAgICAgdGV4dCA9XG4gICAgICAgICAgICB2YWx1ZS5sYWJlbCB8fFxuICAgICAgICAgICAgYCR7dmFsdWUuam9iT3JkZXIgPyBgJHt2YWx1ZS5qb2JPcmRlci50aXRsZX0gLSBgIDogJyd9ICR7dmFsdWUuY2FuZGlkYXRlID8gdmFsdWUuY2FuZGlkYXRlLmZpcnN0TmFtZSA6ICcnfSAke1xuICAgICAgICAgICAgICB2YWx1ZS5jYW5kaWRhdGUgPyB2YWx1ZS5jYW5kaWRhdGUubGFzdE5hbWUgOiAnJ1xuICAgICAgICAgICAgfWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1dvcmtlcnNDb21wZW5zYXRpb25SYXRlJzpcbiAgICAgICAgICB0ZXh0ID0gYCR7dmFsdWUuY29tcGVuc2F0aW9uID8gYCR7dmFsdWUuY29tcGVuc2F0aW9uLmNvZGV9IC0gYCA6ICcnfSAke3ZhbHVlLmNvbXBlbnNhdGlvbiA/IHZhbHVlLmNvbXBlbnNhdGlvbi5uYW1lIDogJyd9YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnT3B0aW9ucyc6XG4gICAgICAgICAgdGV4dCA9IHRoaXMub3B0aW9ucyh2YWx1ZSwgYXJncy5vcHRpb25zLCBhcmdzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVG9NYW55JzpcbiAgICAgICAgICBpZiAoWydDYW5kaWRhdGUnLCAnQ29ycG9yYXRlVXNlcicsICdQZXJzb24nXS5pbmRleE9mKGFyZ3MuYXNzb2NpYXRlZEVudGl0eS5lbnRpdHkpID4gLTEpIHtcbiAgICAgICAgICAgIHRleHQgPSB0aGlzLmNvbmNhdCh2YWx1ZS5kYXRhLCAnZmlyc3ROYW1lJywgJ2xhc3ROYW1lJyk7XG4gICAgICAgICAgICBpZiAodmFsdWUuZGF0YS5sZW5ndGggPCB2YWx1ZS50b3RhbCkge1xuICAgICAgICAgICAgICB0ZXh0ID0gdGV4dCArICcsICcgKyB0aGlzLmxhYmVscy5nZXRUb01hbnlQbHVzTW9yZSh7IHF1YW50aXR5OiB2YWx1ZS50b3RhbCAtIHZhbHVlLmRhdGEubGVuZ3RoIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBbJ0NhdGVnb3J5JywgJ0J1c2luZXNzU2VjdG9yJywgJ1NraWxsJywgJ1NwZWNpYWx0eScsICdDbGllbnRDb3Jwb3JhdGlvbicsICdDb3Jwb3JhdGlvbkRlcGFydG1lbnQnXS5pbmRleE9mKFxuICAgICAgICAgICAgICBhcmdzLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5LFxuICAgICAgICAgICAgKSA+IC0xXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0ZXh0ID0gdGhpcy5jb25jYXQodmFsdWUuZGF0YSwgJ25hbWUnKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5kYXRhLmxlbmd0aCA8IHZhbHVlLnRvdGFsKSB7XG4gICAgICAgICAgICAgIHRleHQgPSB0ZXh0ICsgJywgJyArIHRoaXMubGFiZWxzLmdldFRvTWFueVBsdXNNb3JlKHsgcXVhbnRpdHk6IHZhbHVlLnRvdGFsIC0gdmFsdWUuZGF0YS5sZW5ndGggfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChhcmdzLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5ID09PSAnTWFpbExpc3RQdXNoSGlzdG9yeURldGFpbCcpIHtcbiAgICAgICAgICAgIHRleHQgPSB0aGlzLmNvbmNhdCh2YWx1ZS5kYXRhLCAnZXh0ZXJuYWxMaXN0TmFtZScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0ID0gYCR7dmFsdWUudG90YWwgfHwgJyd9YDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0NvdW50cnknOlxuICAgICAgICAgIGxldCBjb3VudHJ5T2JqOiBhbnkgPSBmaW5kQnlDb3VudHJ5SWQoTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgICAgdGV4dCA9IGNvdW50cnlPYmogPyBjb3VudHJ5T2JqLm5hbWUgOiB2YWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSHRtbCc6XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmpvaW4oJyAnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGV4dCA9IHRoaXMuc2FuaXRpemF0aW9uU2VydmljZS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZS5yZXBsYWNlKC9cXDxhL2dpLCAnPGEgdGFyZ2V0PVwiX2JsYW5rXCInKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdDYW5kaWRhdGVDb21tZW50JzpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUuY29tbWVudHMgPyBgJHt0aGlzLmxhYmVscy5mb3JtYXREYXRlU2hvcnQodmFsdWUuZGF0ZUxhc3RNb2RpZmllZCl9ICgke3ZhbHVlLm5hbWV9KSAtICR7dmFsdWUuY29tbWVudHN9YCA6ICcnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRleHQgPSB2YWx1ZS50cmltID8gdmFsdWUudHJpbSgpIDogdmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBXQVJOSU5HOiBUaGVyZSB3YXMgYSBwcm9ibGVtIHJlbmRlcmluZyB0aGUgdmFsdWUgb2YgdGhlIGZpZWxkOiAke2FyZ3MubGFiZWx9LiBQbGVhc2UgY2hlY2sgdGhlIGNvbmZpZ3VyYXRpb25gKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVWYWx1ZSh2YWx1ZTogYW55LCBhcmdzOiBhbnkpOiBhbnkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnJlbmRlcih2YWx1ZSwgYXJncyk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZT86IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lcXVhbHModmFsdWUsIHRoaXMubGFzdFZhbHVlKSAmJiB0aGlzLmVxdWFscyhhcmdzLCB0aGlzLmxhc3RBcmdzKSkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmxhc3RBcmdzID0gYXJncztcblxuICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5sYXN0VmFsdWUsIHRoaXMubGFzdEFyZ3MpO1xuXG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2ltcGxlIGZ1bmN0aW9uIGNvbmNhdCBhIGxpc3Qgb2YgZmllbGRzIGZyb20gYSBsaXN0IG9mIG9iamVjdHNcbiAgICogQG5hbWUgb3B0aW9uc1xuICAgKiBAcGFyYW0gbGlzdCAtIHRoZSBsaXN0IG9mIHZhbHVlcyB0byB1c2VcbiAgICogQHBhcmFtIGZpZWxkcyAtIGxpc3Qgb2YgZmllbGRzIHRvIGV4dHJhY3RcbiAgICovXG4gIGNvbmNhdChsaXN0OiBhbnksIC4uLmZpZWxkczogYW55W10pOiBhbnkge1xuICAgIGxldCBkYXRhOiBhbnkgPSBbXTtcbiAgICBmb3IgKGxldCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgIGxldCBsYWJlbDogYW55ID0gW107XG4gICAgICBmb3IgKGxldCBmaWVsZCBvZiBmaWVsZHMpIHtcbiAgICAgICAgbGFiZWwucHVzaChgJHtpdGVtW2ZpZWxkXX1gKTtcbiAgICAgIH1cbiAgICAgIGRhdGEucHVzaChsYWJlbC5qb2luKCcgJykpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YS5qb2luKCcsICcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbXBsZSBmdW5jdGlvbiB0byBsb29rIHVwIHRoZSAqKmxhYmVsKiogdG8gZGlzcGxheSBmcm9tIG9wdGlvbnNcbiAgICogQG5hbWUgb3B0aW9uc1xuICAgKiBAcGFyYW0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gZmluZFxuICAgKiBAcGFyYW0gbGlzdCAtIGxpc3Qgb2Ygb3B0aW9ucyAobGFiZWwvdmFsdWUgcGFpcnMpXG4gICAqL1xuICBvcHRpb25zKHZhbHVlOiBhbnksIGxpc3Q6IGFueSwgYXJnczogYW55KTogYW55IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IFt2YWx1ZV07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdmFsdWUubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2YgbGlzdCkge1xuICAgICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24ubGFiZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCFhcmdzLm9wdGlvbnNUeXBlKSB7XG4gICAgICAgIHRocm93IEVycm9yKGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldE51bWJlckRlY2ltYWxQbGFjZXModmFsdWU6IGFueSk6IGFueSB7XG4gICAgbGV0IGRlY2ltYWxQbGFjZXM6IGFueTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCBudW1iZXJTdHJpbmc6IGFueSA9IHBhcnNlRmxvYXQodmFsdWUpLnRvU3RyaW5nKCk7XG4gICAgICBsZXQgZGVjaW1hbFBsYWNlOiBhbnkgPSAobnVtYmVyU3RyaW5nIHx8ICcnKS5zcGxpdCgnLicpWzFdIHx8ICcnO1xuICAgICAgZGVjaW1hbFBsYWNlcyA9IGRlY2ltYWxQbGFjZS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBkZWNpbWFsUGxhY2VzIHx8IDE7XG4gIH1cblxuICAvKipcbiAgICogQ2FwaXRhbGl6ZXMgdGhlIGZpcnN0IGxldHRlclxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIGNhcGl0YWxpemUodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSk7XG4gIH1cbn1cbiJdfQ==