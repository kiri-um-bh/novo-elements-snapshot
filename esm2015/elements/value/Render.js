/**
 * @fileoverview added by tsickle
 * Generated from: elements/value/Render.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVuZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3ZhbHVlL1JlbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUV6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDbEUsTUFBTSxPQUFPLFVBQVU7Ozs7OztJQUtyQixZQUFvQixjQUFpQyxFQUFVLG1CQUFpQyxFQUFVLE1BQXdCO1FBQTlHLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQzs7Ozs7O0lBRXRJLE1BQU0sQ0FBQyxTQUFjLEVBQUUsU0FBYztRQUNuQyxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksU0FBUyxLQUFLLElBQUksSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQzVDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLFNBQVMsS0FBSyxTQUFTLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUN0RCxPQUFPLElBQUksQ0FBQztTQUNiOztZQUNHLEVBQUUsR0FBUSxPQUFPLFNBQVM7O1lBQzFCLEVBQUUsR0FBUSxPQUFPLFNBQVM7O1lBQzFCLE1BQWM7O1lBQ2QsR0FBUTs7WUFDUixNQUFXO1FBQ2YsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxRQUFRLEVBQUU7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IEluamVjdGFibGUsIFBpcGUsIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3ksIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IGZpbmRCeUNvdW50cnlJZCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvdW50cmllcy9Db3VudHJpZXMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIFJlbmRlcnMgZGF0YSBhcHByb3ByaWF0ZWx5IGJhc2VkIG9uIHRoZSBkYXRhIHR5cGUgZm91bmQgaW4gTWV0YVxuICogQWxsIGRhdGEgdHlwZXMgZGVmaW5lZCBieSBidWxsaG9ybiBzaG91bGQgYmUgc3VwcG9ydGVkOlxuICpcbiAqIC0gKipTdHJpbmcqKjogdHJpbXMgdmFsdWUgYW5kIHJldHVybnNcbiAqIC0gKipJbnRlZ2VyKio6IHJldHVybiB2YWx1ZVxuICogLSAqKkRvdWJsZSoqOiByZXR1cm4gdmFsdWUgZml4ZWQgdG8gMiBkZWNpbWFsc1xuICogLSAqKkJpZ0RlY2ltYWwqKjogcmV0dXJuIHZhbHVlIGZpeGVkIHRvIDIgZGVjaW1hbHNcbiAqIC0gKipBZGRyZXNzKio6IG9ubHkgY2l0eSBhbmQvb3Igc3RhdGUgcmV0dXJuZWRcbiAqIC0gKipBZGRyZXNzMSoqOiBvbmx5IGNpdHkgYW5kL29yIHN0YXRlIHJldHVybmVkXG4gKiAtICoqQWRkcmVzc1dpdGhvdXRDb3VudHJ5Kio6IG9ubHkgY2l0eSBhbmQvb3Igc3RhdGUgcmV0dXJuZWRcbiAqIC0gKipDdXJyZW5jeSoqOiBwdXQgYSAkIGluIGZyb250XG4gKiAtICoqUGVyY2VudGFnZSoqOiBkaXZpZGUgYnkgMTAwIGZpeCB0byAyIGRlY2ltYWxzIHBsYWNlIGFuZCByZXR1cm5cbiAqIC0gKipPcHRpb25zKio6IHJldHVybnMgdGhlIGFwcHJvcHJpYXRlICdsYWJlbCcgZm9yIHRoZSAndmFsdWUnIGZyb20gJ29wdGlvbnMnXG4gKiAtICoqQXJyYXkqKjogcmV0dXJucyBsaXN0IGNvbW1hIHNlcGFyYXRlZFxuICogLSAqKkRhdGVUaW1lKio6IGZvcm1hdHMgdGhlIGRhdGVcbiAqIC0gKipUaW1lU3RhbXAqKjogZm9ybWF0cyB0aGUgZGF0ZVxuICogLSAqKlRvT25lKio6IHJldHVybiB0aGUgZW50aXR5IHNwZWNpZmljIG5hbWUgKGllLiBuYW1lLCBmaXJzdE5hbWUgbGFzdE5hbWUsIHRpdGxlLCAuLi4pXG4gKiAtICoqVG9NYW55Kio6IHJldHVybiBhbiBhcnJheSBvZiB0aGUgZW50aXR5IHNwZWNpZmljIG5hbWVzIChpZS4gbmFtZSwgZmlyc3ROYW1lIGxhc3ROYW1lLCB0aXRsZSwgLi4uKVxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBcbiAqIHt7IGV4cHJlc3Npb24gfCByZW5kZXI6ZmllbGQgfX1cbiAqIGBgYFxuICovXG5AUGlwZSh7XG4gIG5hbWU6ICdyZW5kZXInLFxuICBwdXJlOiBmYWxzZSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVuZGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB2YWx1ZTogYW55O1xuICBsYXN0VmFsdWU6IGFueTtcbiAgbGFzdEFyZ3M6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBzYW5pdGl6YXRpb25TZXJ2aWNlOiBEb21TYW5pdGl6ZXIsIHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIGVxdWFscyhvYmplY3RPbmU6IGFueSwgb2JqZWN0VHdvOiBhbnkpOiBhbnkge1xuICAgIGlmIChvYmplY3RPbmUgPT09IG9iamVjdFR3bykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChvYmplY3RPbmUgPT09IG51bGwgfHwgb2JqZWN0VHdvID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChvYmplY3RPbmUgIT09IG9iamVjdE9uZSAmJiBvYmplY3RUd28gIT09IG9iamVjdFR3bykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGxldCB0MTogYW55ID0gdHlwZW9mIG9iamVjdE9uZTtcbiAgICBsZXQgdDI6IGFueSA9IHR5cGVvZiBvYmplY3RUd287XG4gICAgbGV0IGxlbmd0aDogbnVtYmVyO1xuICAgIGxldCBrZXk6IGFueTtcbiAgICBsZXQga2V5U2V0OiBhbnk7XG4gICAgaWYgKHQxID09PSB0MiAmJiB0MSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iamVjdE9uZSkpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9iamVjdFR3bykpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGVuZ3RoID0gb2JqZWN0T25lLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gb2JqZWN0VHdvLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAoa2V5ID0gMDsga2V5IDwgbGVuZ3RoOyBrZXkrKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmVxdWFscyhvYmplY3RPbmVba2V5XSwgb2JqZWN0VHdvW2tleV0pKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iamVjdFR3bykpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAga2V5U2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZm9yIChrZXkgaW4gb2JqZWN0T25lKSB7XG4gICAgICAgICAgaWYgKG9iamVjdE9uZVtrZXldKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZXF1YWxzKG9iamVjdE9uZVtrZXldLCBvYmplY3RUd29ba2V5XSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U2V0W2tleV0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGtleSBpbiBvYmplY3RUd28pIHtcbiAgICAgICAgICBpZiAoIShrZXkgaW4ga2V5U2V0KSAmJiB0eXBlb2Ygb2JqZWN0VHdvW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRFbnRpdHlMYWJlbChpdGVtOiBhbnksIGVudGl0eTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKGVudGl0eSkge1xuICAgICAgY2FzZSAnQ29ycG9yYXRlVXNlcic6XG4gICAgICBjYXNlICdDbGllbnRDb250YWN0JzpcbiAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3QxJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3QyJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3QzJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3Q0JzpcbiAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3Q1JzpcbiAgICAgIGNhc2UgJ0xlYWQnOlxuICAgICAgY2FzZSAnQ2FuZGlkYXRlJzpcbiAgICAgIGNhc2UgJ1BlcnNvbic6XG4gICAgICAgIHJldHVybiBgJHtpdGVtLmZpcnN0TmFtZSB8fCAnJ30gJHtpdGVtLmxhc3ROYW1lIHx8ICcnfWAudHJpbSgpO1xuICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24nOlxuICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24xJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uMic6XG4gICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbjMnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb240JzpcbiAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uNSc6XG4gICAgICAgIHJldHVybiBgJHtpdGVtLm5hbWUgfHwgJyd9YC50cmltKCk7XG4gICAgICBjYXNlICdKb2JPcmRlcic6XG4gICAgICBjYXNlICdKb2JPcmRlcjEnOlxuICAgICAgY2FzZSAnSm9iT3JkZXIyJzpcbiAgICAgIGNhc2UgJ0pvYk9yZGVyMyc6XG4gICAgICBjYXNlICdKb2JPcmRlcjQnOlxuICAgICAgY2FzZSAnSm9iT3JkZXI1JzpcbiAgICAgIGNhc2UgJ09wcG9ydHVuaXR5JzpcbiAgICAgICAgcmV0dXJuIGAke2l0ZW0udGl0bGUgfHwgJyd9YC50cmltKCk7XG4gICAgICBjYXNlICdQbGFjZW1lbnQnOlxuICAgICAgICBsZXQgbGFiZWw6IHN0cmluZyA9ICcnO1xuICAgICAgICBpZiAoaXRlbS5jYW5kaWRhdGUpIHtcbiAgICAgICAgICBsYWJlbCA9IGAke2l0ZW0uY2FuZGlkYXRlLmZpcnN0TmFtZX0gJHtpdGVtLmNhbmRpZGF0ZS5sYXN0TmFtZX1gLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbS5qb2JPcmRlcikge1xuICAgICAgICAgIGxhYmVsID0gYCR7bGFiZWx9IC0gJHtpdGVtLmpvYk9yZGVyLnRpdGxlfWAudHJpbSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIHRoZSBmaWVsZHMgdG8gc2V0IG9yIHJldHJpZXZlIGZvciB0aGUgZ2l2ZW4gZW50aXR5LiBHZXR0ZXIgYW5kIFNldHRlciBtZXRob2RzIHdpbGwgYXV0b21hZ2ljYWxseVxuICAgKiBiZSBzZXQgdXAgb24gdGhlIGVudGl0eSBvbmNlIHRoZSBmaWVsZHMgYXJlIGRlZmluZWQuXG4gICAqIEBuYW1lIGZpZWxkc1xuICAgKiBAbWVtYmVyT2YgRW50aXR5I1xuICAgKiBAcGFyYW0gdmFsdWVcbiAgICogQHBhcmFtIGFyZ3MgLSBmaWVsZHMgY2FuIGVpdGhlciBiZSBzZW50IGFzIGEgbGlzdCBvZiBhcmd1bWVudHMgb3IgYXMgYW4gQXJyYXlcbiAgICogQHJldHVybiB0ZXh0XG4gICAqL1xuICByZW5kZXIodmFsdWU6IGFueSwgYXJnczogYW55KTogYW55IHtcbiAgICBsZXQgdHlwZTogYW55ID0gbnVsbDtcbiAgICBsZXQgdGV4dDogYW55ID0gdmFsdWU7XG4gICAgbGV0IHJlem9uZWRUaW1lOiBhbnk7XG5cbiAgICAvLyBIYW5kbGUgd2hlbiB3ZSBkb24ndCBoYXZlIG1ldGEsIGJ1dCBwYXNzaW5nIGFuIGVudGl0eVxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5fc3VidHlwZSAmJiAhYXJncykge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RW50aXR5TGFiZWwodmFsdWUsIHZhbHVlLl9zdWJ0eXBlKTtcbiAgICB9XG5cbiAgICAvLyBTdG9wIGxvZ2ljIGZvciBudWxsc1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsIHx8ICFhcmdzKSB7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG5cbiAgICBpZiAoYXJncy5mb3JtYXR0ZXIgJiYgdHlwZW9mIGFyZ3MuZm9ybWF0dGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gYXJncy5mb3JtYXR0ZXIodmFsdWUsIGFyZ3MpO1xuICAgIH1cbiAgICAvLyBUT0RPIG1vdmUgdGhpcyB0byBhIHNlcnZpY2VcbiAgICAvLyBEZXRlcm1pbmUgVFlQRSBiZWNhdXNlIGl0cyBub3QganVzdCAxIHZhbHVlIHRoYXQgZGV0ZXJtaW5lcyB0aGlzLlxuICAgIGlmIChhcmdzLnR5cGUgPT09ICdUT19NQU5ZJykge1xuICAgICAgdHlwZSA9ICdUb01hbnknO1xuICAgIH0gZWxzZSBpZiAoYXJncy50eXBlID09PSAnVE9fT05FJykge1xuICAgICAgdHlwZSA9IGFyZ3MuYXNzb2NpYXRlZEVudGl0eS5lbnRpdHk7XG4gICAgfSBlbHNlIGlmIChhcmdzLmRhdGFTcGVjaWFsaXphdGlvbiA9PT0gJ0RBVEVUSU1FJykge1xuICAgICAgdHlwZSA9ICdEYXRlVGltZSc7XG4gICAgfSBlbHNlIGlmIChhcmdzLmRhdGFTcGVjaWFsaXphdGlvbiA9PT0gJ1lFQVInKSB7XG4gICAgICB0eXBlID0gJ1llYXInO1xuICAgIH0gZWxzZSBpZiAoYXJncy5kYXRhU3BlY2lhbGl6YXRpb24gPT09ICdEQVRFJyAmJiBhcmdzLmRhdGFUeXBlID09PSAnRGF0ZScpIHtcbiAgICAgIHR5cGUgPSAnRGF0ZSc7XG4gICAgfSBlbHNlIGlmIChhcmdzLmRhdGFUeXBlID09PSAnVGltZXN0YW1wJykge1xuICAgICAgdHlwZSA9ICdUaW1lc3RhbXAnO1xuICAgIH0gZWxzZSBpZiAoWydtb2JpbGUnLCAncGhvbmUnLCAncGhvbmUxJywgJ3Bob25lMicsICdwaG9uZTMnLCAnd29ya1Bob25lJ10uaW5kZXhPZihhcmdzLm5hbWUpID4gLTEpIHtcbiAgICAgIHR5cGUgPSAnUGhvbmUnO1xuICAgIH0gZWxzZSBpZiAoYXJncy5uYW1lICYmIGFyZ3MubmFtZS5zdWJzdHJpbmcoMCwgNSkgPT09ICdlbWFpbCcpIHtcbiAgICAgIHR5cGUgPSAnRW1haWwnO1xuICAgIH0gZWxzZSBpZiAoKGFyZ3MubmFtZSAmJiBhcmdzLm5hbWUgPT09ICdhZGRyZXNzLmNvdW50cnlJRCcpIHx8IGFyZ3Mub3B0aW9uc1R5cGUgPT09ICdDb3VudHJ5Jykge1xuICAgICAgdHlwZSA9ICdDb3VudHJ5JztcbiAgICB9IGVsc2UgaWYgKGFyZ3Mub3B0aW9uc1R5cGUgPT09ICdTa2lsbFRleHQnKSB7XG4gICAgICB0eXBlID0gJ1NraWxsVGV4dCc7XG4gICAgfSBlbHNlIGlmIChhcmdzLm9wdGlvbnMgfHwgYXJncy5pbnB1dFR5cGUgPT09ICdTRUxFQ1QnIHx8IGFyZ3MuaW5wdXRUeXBlID09PSAnQ0hFQ0tCT1gnKSB7XG4gICAgICB0eXBlID0gJ09wdGlvbnMnO1xuICAgIH0gZWxzZSBpZiAoWydNT05FWScsICdQRVJDRU5UQUdFJywgJ0hUTUwnLCAnU1NOJ10uaW5kZXhPZihhcmdzLmRhdGFTcGVjaWFsaXphdGlvbikgPiAtMSkge1xuICAgICAgdHlwZSA9IHRoaXMuY2FwaXRhbGl6ZShhcmdzLmRhdGFTcGVjaWFsaXphdGlvbi50b0xvd2VyQ2FzZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZSA9IGFyZ3MuZGF0YVR5cGUgfHwgJ2RlZmF1bHQnO1xuICAgIH1cblxuICAgIC8vIFRyYW5zZm9ybSBkYXRhIGhlcmVcbiAgICB0cnkge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FkZHJlc3MnOlxuICAgICAgICBjYXNlICdBZGRyZXNzMSc6XG4gICAgICAgIGNhc2UgJ0FkZHJlc3NXaXRob3V0Q291bnRyeSc6XG4gICAgICAgIGNhc2UgJ1NlY29uZGFyeUFkZHJlc3MnOlxuICAgICAgICBjYXNlICdCaWxsaW5nQWRkcmVzcyc6XG4gICAgICAgICAgbGV0IGNvdW50cnk6IGFueSA9IGZpbmRCeUNvdW50cnlJZChOdW1iZXIodmFsdWUuY291bnRyeU5hbWUpKTtcbiAgICAgICAgICB0ZXh0ID0gJyc7XG4gICAgICAgICAgaWYgKHZhbHVlLmFkZHJlc3MxIHx8IHZhbHVlLmFkZHJlc3MyKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IGAke3ZhbHVlLmFkZHJlc3MxIHx8ICcnfSAke3ZhbHVlLmFkZHJlc3MyIHx8ICcnfTxiciAvPlxcbmA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHQgKz0gYCR7dmFsdWUuY2l0eSB8fCAnJ30gJHt2YWx1ZS5zdGF0ZSB8fCAnJ30gJHt2YWx1ZS56aXAgfHwgJyd9JHt2YWx1ZS5jaXR5IHx8IHZhbHVlLnN0YXRlIHx8IHZhbHVlLnppcCA/ICc8YnIgLz5cXG4nIDogJyd9YDtcbiAgICAgICAgICB0ZXh0ICs9IGAke2NvdW50cnkgPyBjb3VudHJ5Lm5hbWUgOiB2YWx1ZS5jb3VudHJ5TmFtZSB8fCAnJ30ke2NvdW50cnkgfHwgdmFsdWUuY291bnRyeU5hbWUgPyAnPGJyIC8+XFxuJyA6ICcnfWA7XG4gICAgICAgICAgdGV4dCA9IHRoaXMuc2FuaXRpemF0aW9uU2VydmljZS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0ZXh0LnRyaW0oKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0RhdGVUaW1lJzpcbiAgICAgICAgY2FzZSAnVGltZXN0YW1wJzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVNob3J0KHZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRGF0ZSc6XG4gICAgICAgICAgdGV4dCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGUobmV3IERhdGUodmFsdWUpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnWWVhcic6XG4gICAgICAgICAgdGV4dCA9IG5ldyBEYXRlKHZhbHVlKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQaG9uZSc6XG4gICAgICAgIGNhc2UgJ0VtYWlsJzpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ01vbmV5JzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5sYWJlbHMuZm9ybWF0Q3VycmVuY3kodmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQZXJjZW50YWdlJzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5sYWJlbHMuZm9ybWF0TnVtYmVyKHBhcnNlRmxvYXQodmFsdWUpLnRvU3RyaW5nKCksIHsgc3R5bGU6ICdwZXJjZW50JywgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdEb3VibGUnOlxuICAgICAgICBjYXNlICdCaWdEZWNpbWFsJzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5sYWJlbHMuZm9ybWF0TnVtYmVyKHZhbHVlLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogdGhpcy5nZXROdW1iZXJEZWNpbWFsUGxhY2VzKHZhbHVlKSB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSW50ZWdlcic6XG4gICAgICAgICAgdGV4dCA9IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdCdXNpbmVzc1NlY3Rvcic6XG4gICAgICAgIGNhc2UgJ0NhdGVnb3J5JzpcbiAgICAgICAgY2FzZSAnQ2VydGlmaWNhdGlvbic6XG4gICAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uJzpcbiAgICAgICAgY2FzZSAnQ29ycG9yYXRpb25EZXBhcnRtZW50JzpcbiAgICAgICAgY2FzZSAnRGlzdHJpYnV0aW9uTGlzdCc6XG4gICAgICAgIGNhc2UgJ1NraWxsJzpcbiAgICAgICAgY2FzZSAnVGVhcnNoZWV0JzpcbiAgICAgICAgY2FzZSAnU3BlY2lhbHR5JzpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUubGFiZWwgfHwgdmFsdWUubmFtZSB8fCAnJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnU2tpbGxUZXh0JzpcbiAgICAgICAgICB0ZXh0ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5qb2luKCcsICcpIDogdmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0xlYWQnOlxuICAgICAgICBjYXNlICdDYW5kaWRhdGUnOlxuICAgICAgICBjYXNlICdDbGllbnRDb250YWN0JzpcbiAgICAgICAgY2FzZSAnQ29ycG9yYXRlVXNlcic6XG4gICAgICAgIGNhc2UgJ1BlcnNvbic6XG4gICAgICAgICAgdGV4dCA9IHZhbHVlLmxhYmVsIHx8IGAke3ZhbHVlLmZpcnN0TmFtZSB8fCAnJ30gJHt2YWx1ZS5sYXN0TmFtZSB8fCAnJ31gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdPcHBvcnR1bml0eSc6XG4gICAgICAgIGNhc2UgJ0pvYk9yZGVyJzpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUubGFiZWwgfHwgdmFsdWUudGl0bGUgfHwgJyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1BsYWNlbWVudCc6XG4gICAgICAgICAgaWYgKHZhbHVlLmNhbmRpZGF0ZSkge1xuICAgICAgICAgICAgdGV4dCA9IGAke3ZhbHVlLmNhbmRpZGF0ZS5maXJzdE5hbWUgfHwgJyd9ICR7dmFsdWUuY2FuZGlkYXRlLmxhc3ROYW1lIHx8ICcnfWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2YWx1ZS5qb2JPcmRlcikge1xuICAgICAgICAgICAgdGV4dCA9IHZhbHVlLmNhbmRpZGF0ZSA/IGAke3RleHR9IC0gJHt2YWx1ZS5qb2JPcmRlci50aXRsZSB8fCAnJ31gIDogYCR7dmFsdWUuam9iT3JkZXIudGl0bGUgfHwgJyd9YDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0pvYlN1Ym1pc3Npb24nOlxuICAgICAgICAgIHRleHQgPVxuICAgICAgICAgICAgdmFsdWUubGFiZWwgfHxcbiAgICAgICAgICAgIGAke3ZhbHVlLmpvYk9yZGVyID8gYCR7dmFsdWUuam9iT3JkZXIudGl0bGV9IC0gYCA6ICcnfSAke3ZhbHVlLmNhbmRpZGF0ZSA/IHZhbHVlLmNhbmRpZGF0ZS5maXJzdE5hbWUgOiAnJ30gJHtcbiAgICAgICAgICAgICAgdmFsdWUuY2FuZGlkYXRlID8gdmFsdWUuY2FuZGlkYXRlLmxhc3ROYW1lIDogJydcbiAgICAgICAgICAgIH1gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdXb3JrZXJzQ29tcGVuc2F0aW9uUmF0ZSc6XG4gICAgICAgICAgdGV4dCA9IGAke3ZhbHVlLmNvbXBlbnNhdGlvbiA/IGAke3ZhbHVlLmNvbXBlbnNhdGlvbi5jb2RlfSAtIGAgOiAnJ30gJHt2YWx1ZS5jb21wZW5zYXRpb24gPyB2YWx1ZS5jb21wZW5zYXRpb24ubmFtZSA6ICcnfWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ09wdGlvbnMnOlxuICAgICAgICAgIHRleHQgPSB0aGlzLm9wdGlvbnModmFsdWUsIGFyZ3Mub3B0aW9ucywgYXJncyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1RvTWFueSc6XG4gICAgICAgICAgaWYgKFsnQ2FuZGlkYXRlJywgJ0NvcnBvcmF0ZVVzZXInLCAnUGVyc29uJ10uaW5kZXhPZihhcmdzLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5KSA+IC0xKSB7XG4gICAgICAgICAgICB0ZXh0ID0gdGhpcy5jb25jYXQodmFsdWUuZGF0YSwgJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScpO1xuICAgICAgICAgICAgaWYgKHZhbHVlLmRhdGEubGVuZ3RoIDwgdmFsdWUudG90YWwpIHtcbiAgICAgICAgICAgICAgdGV4dCA9IHRleHQgKyAnLCAnICsgdGhpcy5sYWJlbHMuZ2V0VG9NYW55UGx1c01vcmUoeyBxdWFudGl0eTogdmFsdWUudG90YWwgLSB2YWx1ZS5kYXRhLmxlbmd0aCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgWydDYXRlZ29yeScsICdCdXNpbmVzc1NlY3RvcicsICdTa2lsbCcsICdTcGVjaWFsdHknLCAnQ2xpZW50Q29ycG9yYXRpb24nLCAnQ29ycG9yYXRpb25EZXBhcnRtZW50J10uaW5kZXhPZihcbiAgICAgICAgICAgICAgYXJncy5hc3NvY2lhdGVkRW50aXR5LmVudGl0eSxcbiAgICAgICAgICAgICkgPiAtMVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGV4dCA9IHRoaXMuY29uY2F0KHZhbHVlLmRhdGEsICduYW1lJyk7XG4gICAgICAgICAgICBpZiAodmFsdWUuZGF0YS5sZW5ndGggPCB2YWx1ZS50b3RhbCkge1xuICAgICAgICAgICAgICB0ZXh0ID0gdGV4dCArICcsICcgKyB0aGlzLmxhYmVscy5nZXRUb01hbnlQbHVzTW9yZSh7IHF1YW50aXR5OiB2YWx1ZS50b3RhbCAtIHZhbHVlLmRhdGEubGVuZ3RoIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoYXJncy5hc3NvY2lhdGVkRW50aXR5LmVudGl0eSA9PT0gJ01haWxMaXN0UHVzaEhpc3RvcnlEZXRhaWwnKSB7XG4gICAgICAgICAgICB0ZXh0ID0gdGhpcy5jb25jYXQodmFsdWUuZGF0YSwgJ2V4dGVybmFsTGlzdE5hbWUnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGV4dCA9IGAke3ZhbHVlLnRvdGFsIHx8ICcnfWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdDb3VudHJ5JzpcbiAgICAgICAgICBsZXQgY291bnRyeU9iajogYW55ID0gZmluZEJ5Q291bnRyeUlkKE51bWJlcih2YWx1ZSkpO1xuICAgICAgICAgIHRleHQgPSBjb3VudHJ5T2JqID8gY291bnRyeU9iai5uYW1lIDogdmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0h0bWwnOlxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5qb2luKCcgJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRleHQgPSB0aGlzLnNhbml0aXphdGlvblNlcnZpY2UuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodmFsdWUucmVwbGFjZSgvXFw8YS9naSwgJzxhIHRhcmdldD1cIl9ibGFua1wiJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQ2FuZGlkYXRlQ29tbWVudCc6XG4gICAgICAgICAgdGV4dCA9IHZhbHVlLmNvbW1lbnRzID8gYCR7dGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVNob3J0KHZhbHVlLmRhdGVMYXN0TW9kaWZpZWQpfSAoJHt2YWx1ZS5uYW1lfSkgLSAke3ZhbHVlLmNvbW1lbnRzfWAgOiAnJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUudHJpbSA/IHZhbHVlLnRyaW0oKSA6IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgV0FSTklORzogVGhlcmUgd2FzIGEgcHJvYmxlbSByZW5kZXJpbmcgdGhlIHZhbHVlIG9mIHRoZSBmaWVsZDogJHthcmdzLmxhYmVsfS4gUGxlYXNlIGNoZWNrIHRoZSBjb25maWd1cmF0aW9uYCk7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVmFsdWUodmFsdWU6IGFueSwgYXJnczogYW55KTogYW55IHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5yZW5kZXIodmFsdWUsIGFyZ3MpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICB0cmFuc2Zvcm0odmFsdWU/OiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZXF1YWxzKHZhbHVlLCB0aGlzLmxhc3RWYWx1ZSkgJiYgdGhpcy5lcXVhbHMoYXJncywgdGhpcy5sYXN0QXJncykpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMubGFzdFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5sYXN0QXJncyA9IGFyZ3M7XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMubGFzdFZhbHVlLCB0aGlzLmxhc3RBcmdzKTtcblxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbXBsZSBmdW5jdGlvbiBjb25jYXQgYSBsaXN0IG9mIGZpZWxkcyBmcm9tIGEgbGlzdCBvZiBvYmplY3RzXG4gICAqIEBuYW1lIG9wdGlvbnNcbiAgICogQHBhcmFtIGxpc3QgLSB0aGUgbGlzdCBvZiB2YWx1ZXMgdG8gdXNlXG4gICAqIEBwYXJhbSBmaWVsZHMgLSBsaXN0IG9mIGZpZWxkcyB0byBleHRyYWN0XG4gICAqL1xuICBjb25jYXQobGlzdDogYW55LCAuLi5maWVsZHM6IGFueVtdKTogYW55IHtcbiAgICBsZXQgZGF0YTogYW55ID0gW107XG4gICAgZm9yIChsZXQgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBsZXQgbGFiZWw6IGFueSA9IFtdO1xuICAgICAgZm9yIChsZXQgZmllbGQgb2YgZmllbGRzKSB7XG4gICAgICAgIGxhYmVsLnB1c2goYCR7aXRlbVtmaWVsZF19YCk7XG4gICAgICB9XG4gICAgICBkYXRhLnB1c2gobGFiZWwuam9pbignICcpKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGEuam9pbignLCAnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW1wbGUgZnVuY3Rpb24gdG8gbG9vayB1cCB0aGUgKipsYWJlbCoqIHRvIGRpc3BsYXkgZnJvbSBvcHRpb25zXG4gICAqIEBuYW1lIG9wdGlvbnNcbiAgICogQHBhcmFtIHZhbHVlIC0gdGhlIHZhbHVlIHRvIGZpbmRcbiAgICogQHBhcmFtIGxpc3QgLSBsaXN0IG9mIG9wdGlvbnMgKGxhYmVsL3ZhbHVlIHBhaXJzKVxuICAgKi9cbiAgb3B0aW9ucyh2YWx1ZTogYW55LCBsaXN0OiBhbnksIGFyZ3M6IGFueSk6IGFueSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSBbdmFsdWVdO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHZhbHVlLm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIGxpc3QpIHtcbiAgICAgICAgICBpZiAob3B0aW9uLnZhbHVlID09PSBpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLmxhYmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghYXJncy5vcHRpb25zVHlwZSkge1xuICAgICAgICB0aHJvdyBFcnJvcihlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXROdW1iZXJEZWNpbWFsUGxhY2VzKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIGxldCBkZWNpbWFsUGxhY2VzOiBhbnk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBsZXQgbnVtYmVyU3RyaW5nOiBhbnkgPSBwYXJzZUZsb2F0KHZhbHVlKS50b1N0cmluZygpO1xuICAgICAgbGV0IGRlY2ltYWxQbGFjZTogYW55ID0gKG51bWJlclN0cmluZyB8fCAnJykuc3BsaXQoJy4nKVsxXSB8fCAnJztcbiAgICAgIGRlY2ltYWxQbGFjZXMgPSBkZWNpbWFsUGxhY2UubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gZGVjaW1hbFBsYWNlcyB8fCAxO1xuICB9XG5cbiAgLyoqXG4gICAqIENhcGl0YWxpemVzIHRoZSBmaXJzdCBsZXR0ZXJcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBjYXBpdGFsaXplKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuICB9XG59XG4iXX0=