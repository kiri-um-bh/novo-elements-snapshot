// NG2
import { ChangeDetectorRef, Injectable, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
import { findByCountryId } from '../../utils/countries/Countries';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../../services/novo-label-service";
/**
 * @classdesc
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
 * @example
 * ```
 * {{ expression | render:field }}
 * ```
 */
export class RenderPipe {
    constructor(changeDetector, sanitizationService, labels) {
        this.changeDetector = changeDetector;
        this.sanitizationService = sanitizationService;
        this.labels = labels;
    }
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
        const t1 = typeof objectOne;
        const t2 = typeof objectTwo;
        let length;
        let key;
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
     * @param args - fields can either be sent as a list of arguments or as an Array
     * @return text
     */
    render(value, args) {
        let type = null;
        let text = value;
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
                    const country = findByCountryId(Number(value.countryName));
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
                    const countryObj = findByCountryId(Number(value));
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
    updateValue(value, args) {
        this.value = this.render(value, args);
        this.changeDetector.markForCheck();
    }
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
     * @param list - the list of values to use
     * @param fields - list of fields to extract
     */
    concat(list, ...fields) {
        const data = [];
        for (const item of list) {
            const label = [];
            for (const field of fields) {
                label.push(`${item[field]}`);
            }
            data.push(label.join(' '));
        }
        return data.join(', ');
    }
    /**
     * Simple function to look up the **label** to display from options
     * @param value - the value to find
     * @param list - list of options (label/value pairs)
     */
    options(value, list, args) {
        if (!Array.isArray(value)) {
            value = [value];
        }
        try {
            return value.map((item) => {
                for (const option of list) {
                    if (option.value === item) {
                        return option.label;
                    }
                }
                return item;
            });
        }
        catch (e) {
            if (!args.optionsType) {
                throw Error(e);
            }
            return value;
        }
    }
    getNumberDecimalPlaces(value) {
        let decimalPlaces;
        if (value) {
            const numberString = parseFloat(value).toString();
            const decimalPlace = (numberString || '').split('.')[1] || '';
            decimalPlaces = decimalPlace.length;
        }
        return decimalPlaces || 1;
    }
    /**
     * Capitalizes the first letter
     */
    capitalize(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}
RenderPipe.ɵfac = function RenderPipe_Factory(t) { return new (t || RenderPipe)(i0.ɵɵinjectPipeChangeDetectorRef(), i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i2.NovoLabelService)); };
RenderPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "render", type: RenderPipe, pure: false });
RenderPipe.ɵprov = i0.ɵɵdefineInjectable({ token: RenderPipe, factory: RenderPipe.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RenderPipe, [{
        type: Pipe,
        args: [{
                name: 'render',
                pure: false,
            }]
    }, {
        type: Injectable
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.DomSanitizer }, { type: i2.NovoLabelService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVuZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3ZhbHVlL1JlbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxNQUFNO0FBQ04sT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBRWxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJHO0FBTUgsTUFBTSxPQUFPLFVBQVU7SUFLckIsWUFBb0IsY0FBaUMsRUFBVSxtQkFBaUMsRUFBVSxNQUF3QjtRQUE5RyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFJLENBQUM7SUFFdkksTUFBTSxDQUFDLFNBQWMsRUFBRSxTQUFjO1FBQ25DLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxTQUFTLEtBQUssSUFBSSxJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDNUMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksU0FBUyxLQUFLLFNBQVMsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQ3RELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxNQUFNLEVBQUUsR0FBUSxPQUFPLFNBQVMsQ0FBQztRQUNqQyxNQUFNLEVBQUUsR0FBUSxPQUFPLFNBQVMsQ0FBQztRQUNqQyxJQUFJLE1BQWMsQ0FBQztRQUNuQixJQUFJLEdBQVEsQ0FBQztRQUNiLElBQUks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LEVBQUUsS0FBSzthQUNaOztjQUNBLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBmaW5kQnlDb3VudHJ5SWQgfSBmcm9tICcuLi8uLi91dGlscy9jb3VudHJpZXMvQ291bnRyaWVzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBSZW5kZXJzIGRhdGEgYXBwcm9wcmlhdGVseSBiYXNlZCBvbiB0aGUgZGF0YSB0eXBlIGZvdW5kIGluIE1ldGFcbiAqIEFsbCBkYXRhIHR5cGVzIGRlZmluZWQgYnkgYnVsbGhvcm4gc2hvdWxkIGJlIHN1cHBvcnRlZDpcbiAqXG4gKiAtICoqU3RyaW5nKio6IHRyaW1zIHZhbHVlIGFuZCByZXR1cm5zXG4gKiAtICoqSW50ZWdlcioqOiByZXR1cm4gdmFsdWVcbiAqIC0gKipEb3VibGUqKjogcmV0dXJuIHZhbHVlIGZpeGVkIHRvIDIgZGVjaW1hbHNcbiAqIC0gKipCaWdEZWNpbWFsKio6IHJldHVybiB2YWx1ZSBmaXhlZCB0byAyIGRlY2ltYWxzXG4gKiAtICoqQWRkcmVzcyoqOiBvbmx5IGNpdHkgYW5kL29yIHN0YXRlIHJldHVybmVkXG4gKiAtICoqQWRkcmVzczEqKjogb25seSBjaXR5IGFuZC9vciBzdGF0ZSByZXR1cm5lZFxuICogLSAqKkFkZHJlc3NXaXRob3V0Q291bnRyeSoqOiBvbmx5IGNpdHkgYW5kL29yIHN0YXRlIHJldHVybmVkXG4gKiAtICoqQ3VycmVuY3kqKjogcHV0IGEgJCBpbiBmcm9udFxuICogLSAqKlBlcmNlbnRhZ2UqKjogZGl2aWRlIGJ5IDEwMCBmaXggdG8gMiBkZWNpbWFscyBwbGFjZSBhbmQgcmV0dXJuXG4gKiAtICoqT3B0aW9ucyoqOiByZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSAnbGFiZWwnIGZvciB0aGUgJ3ZhbHVlJyBmcm9tICdvcHRpb25zJ1xuICogLSAqKkFycmF5Kio6IHJldHVybnMgbGlzdCBjb21tYSBzZXBhcmF0ZWRcbiAqIC0gKipEYXRlVGltZSoqOiBmb3JtYXRzIHRoZSBkYXRlXG4gKiAtICoqVGltZVN0YW1wKio6IGZvcm1hdHMgdGhlIGRhdGVcbiAqIC0gKipUb09uZSoqOiByZXR1cm4gdGhlIGVudGl0eSBzcGVjaWZpYyBuYW1lIChpZS4gbmFtZSwgZmlyc3ROYW1lIGxhc3ROYW1lLCB0aXRsZSwgLi4uKVxuICogLSAqKlRvTWFueSoqOiByZXR1cm4gYW4gYXJyYXkgb2YgdGhlIGVudGl0eSBzcGVjaWZpYyBuYW1lcyAoaWUuIG5hbWUsIGZpcnN0TmFtZSBsYXN0TmFtZSwgdGl0bGUsIC4uLilcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgXG4gKiB7eyBleHByZXNzaW9uIHwgcmVuZGVyOmZpZWxkIH19XG4gKiBgYGBcbiAqL1xuQFBpcGUoe1xuICBuYW1lOiAncmVuZGVyJyxcbiAgcHVyZTogZmFsc2UsXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlbmRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdmFsdWU6IGFueTtcbiAgbGFzdFZhbHVlOiBhbnk7XG4gIGxhc3RBcmdzOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgc2FuaXRpemF0aW9uU2VydmljZTogRG9tU2FuaXRpemVyLCBwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkgeyB9XG5cbiAgZXF1YWxzKG9iamVjdE9uZTogYW55LCBvYmplY3RUd286IGFueSk6IGFueSB7XG4gICAgaWYgKG9iamVjdE9uZSA9PT0gb2JqZWN0VHdvKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG9iamVjdE9uZSA9PT0gbnVsbCB8fCBvYmplY3RUd28gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9iamVjdE9uZSAhPT0gb2JqZWN0T25lICYmIG9iamVjdFR3byAhPT0gb2JqZWN0VHdvKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgdDE6IGFueSA9IHR5cGVvZiBvYmplY3RPbmU7XG4gICAgY29uc3QgdDI6IGFueSA9IHR5cGVvZiBvYmplY3RUd287XG4gICAgbGV0IGxlbmd0aDogbnVtYmVyO1xuICAgIGxldCBrZXk6IGFueTtcbiAgICBsZXQga2V5U2V0OiBhbnk7XG4gICAgaWYgKHQxID09PSB0MiAmJiB0MSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iamVjdE9uZSkpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG9iamVjdFR3bykpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGVuZ3RoID0gb2JqZWN0T25lLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gb2JqZWN0VHdvLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAoa2V5ID0gMDsga2V5IDwgbGVuZ3RoOyBrZXkrKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmVxdWFscyhvYmplY3RPbmVba2V5XSwgb2JqZWN0VHdvW2tleV0pKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iamVjdFR3bykpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAga2V5U2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZm9yIChrZXkgaW4gb2JqZWN0T25lKSB7XG4gICAgICAgICAgaWYgKG9iamVjdE9uZVtrZXldKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZXF1YWxzKG9iamVjdE9uZVtrZXldLCBvYmplY3RUd29ba2V5XSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5U2V0W2tleV0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGtleSBpbiBvYmplY3RUd28pIHtcbiAgICAgICAgICBpZiAoIShrZXkgaW4ga2V5U2V0KSAmJiB0eXBlb2Ygb2JqZWN0VHdvW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRFbnRpdHlMYWJlbChpdGVtOiBhbnksIGVudGl0eTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKGVudGl0eSkge1xuICAgICAgY2FzZSAnQ29ycG9yYXRlVXNlcic6XG4gICAgICBjYXNlICdDbGllbnRDb250YWN0JzpcbiAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3QxJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3QyJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3QzJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3Q0JzpcbiAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3Q1JzpcbiAgICAgIGNhc2UgJ0xlYWQnOlxuICAgICAgY2FzZSAnQ2FuZGlkYXRlJzpcbiAgICAgIGNhc2UgJ1BlcnNvbic6XG4gICAgICAgIHJldHVybiBgJHtpdGVtLmZpcnN0TmFtZSB8fCAnJ30gJHtpdGVtLmxhc3ROYW1lIHx8ICcnfWAudHJpbSgpO1xuICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24nOlxuICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24xJzpcbiAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uMic6XG4gICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbjMnOlxuICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb240JzpcbiAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uNSc6XG4gICAgICAgIHJldHVybiBgJHtpdGVtLm5hbWUgfHwgJyd9YC50cmltKCk7XG4gICAgICBjYXNlICdKb2JPcmRlcic6XG4gICAgICBjYXNlICdKb2JPcmRlcjEnOlxuICAgICAgY2FzZSAnSm9iT3JkZXIyJzpcbiAgICAgIGNhc2UgJ0pvYk9yZGVyMyc6XG4gICAgICBjYXNlICdKb2JPcmRlcjQnOlxuICAgICAgY2FzZSAnSm9iT3JkZXI1JzpcbiAgICAgIGNhc2UgJ09wcG9ydHVuaXR5JzpcbiAgICAgICAgcmV0dXJuIGAke2l0ZW0udGl0bGUgfHwgJyd9YC50cmltKCk7XG4gICAgICBjYXNlICdQbGFjZW1lbnQnOlxuICAgICAgICBsZXQgbGFiZWw6IHN0cmluZyA9ICcnO1xuICAgICAgICBpZiAoaXRlbS5jYW5kaWRhdGUpIHtcbiAgICAgICAgICBsYWJlbCA9IGAke2l0ZW0uY2FuZGlkYXRlLmZpcnN0TmFtZX0gJHtpdGVtLmNhbmRpZGF0ZS5sYXN0TmFtZX1gLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbS5qb2JPcmRlcikge1xuICAgICAgICAgIGxhYmVsID0gYCR7bGFiZWx9IC0gJHtpdGVtLmpvYk9yZGVyLnRpdGxlfWAudHJpbSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIHRoZSBmaWVsZHMgdG8gc2V0IG9yIHJldHJpZXZlIGZvciB0aGUgZ2l2ZW4gZW50aXR5LiBHZXR0ZXIgYW5kIFNldHRlciBtZXRob2RzIHdpbGwgYXV0b21hZ2ljYWxseVxuICAgKiBiZSBzZXQgdXAgb24gdGhlIGVudGl0eSBvbmNlIHRoZSBmaWVsZHMgYXJlIGRlZmluZWQuXG4gICAqIEBwYXJhbSBhcmdzIC0gZmllbGRzIGNhbiBlaXRoZXIgYmUgc2VudCBhcyBhIGxpc3Qgb2YgYXJndW1lbnRzIG9yIGFzIGFuIEFycmF5XG4gICAqIEByZXR1cm4gdGV4dFxuICAgKi9cbiAgcmVuZGVyKHZhbHVlOiBhbnksIGFyZ3M6IGFueSk6IGFueSB7XG4gICAgbGV0IHR5cGU6IGFueSA9IG51bGw7XG4gICAgbGV0IHRleHQ6IGFueSA9IHZhbHVlO1xuXG4gICAgLy8gSGFuZGxlIHdoZW4gd2UgZG9uJ3QgaGF2ZSBtZXRhLCBidXQgcGFzc2luZyBhbiBlbnRpdHlcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUuX3N1YnR5cGUgJiYgIWFyZ3MpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEVudGl0eUxhYmVsKHZhbHVlLCB2YWx1ZS5fc3VidHlwZSk7XG4gICAgfVxuXG4gICAgLy8gU3RvcCBsb2dpYyBmb3IgbnVsbHNcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCAhYXJncykge1xuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MuZm9ybWF0dGVyICYmIHR5cGVvZiBhcmdzLmZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGFyZ3MuZm9ybWF0dGVyKHZhbHVlLCBhcmdzKTtcbiAgICB9XG4gICAgLy8gVE9ETyBtb3ZlIHRoaXMgdG8gYSBzZXJ2aWNlXG4gICAgLy8gRGV0ZXJtaW5lIFRZUEUgYmVjYXVzZSBpdHMgbm90IGp1c3QgMSB2YWx1ZSB0aGF0IGRldGVybWluZXMgdGhpcy5cbiAgICBpZiAoYXJncy50eXBlID09PSAnVE9fTUFOWScpIHtcbiAgICAgIHR5cGUgPSAnVG9NYW55JztcbiAgICB9IGVsc2UgaWYgKGFyZ3MudHlwZSA9PT0gJ1RPX09ORScpIHtcbiAgICAgIHR5cGUgPSBhcmdzLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5O1xuICAgIH0gZWxzZSBpZiAoYXJncy5kYXRhU3BlY2lhbGl6YXRpb24gPT09ICdEQVRFVElNRScpIHtcbiAgICAgIHR5cGUgPSAnRGF0ZVRpbWUnO1xuICAgIH0gZWxzZSBpZiAoYXJncy5kYXRhU3BlY2lhbGl6YXRpb24gPT09ICdZRUFSJykge1xuICAgICAgdHlwZSA9ICdZZWFyJztcbiAgICB9IGVsc2UgaWYgKGFyZ3MuZGF0YVNwZWNpYWxpemF0aW9uID09PSAnREFURScgJiYgYXJncy5kYXRhVHlwZSA9PT0gJ0RhdGUnKSB7XG4gICAgICB0eXBlID0gJ0RhdGUnO1xuICAgIH0gZWxzZSBpZiAoYXJncy5kYXRhVHlwZSA9PT0gJ1RpbWVzdGFtcCcpIHtcbiAgICAgIHR5cGUgPSAnVGltZXN0YW1wJztcbiAgICB9IGVsc2UgaWYgKFsnbW9iaWxlJywgJ3Bob25lJywgJ3Bob25lMScsICdwaG9uZTInLCAncGhvbmUzJywgJ3dvcmtQaG9uZSddLmluZGV4T2YoYXJncy5uYW1lKSA+IC0xKSB7XG4gICAgICB0eXBlID0gJ1Bob25lJztcbiAgICB9IGVsc2UgaWYgKGFyZ3MubmFtZSAmJiBhcmdzLm5hbWUuc3Vic3RyaW5nKDAsIDUpID09PSAnZW1haWwnKSB7XG4gICAgICB0eXBlID0gJ0VtYWlsJztcbiAgICB9IGVsc2UgaWYgKChhcmdzLm5hbWUgJiYgYXJncy5uYW1lID09PSAnYWRkcmVzcy5jb3VudHJ5SUQnKSB8fCBhcmdzLm9wdGlvbnNUeXBlID09PSAnQ291bnRyeScpIHtcbiAgICAgIHR5cGUgPSAnQ291bnRyeSc7XG4gICAgfSBlbHNlIGlmIChhcmdzLm9wdGlvbnNUeXBlID09PSAnU2tpbGxUZXh0Jykge1xuICAgICAgdHlwZSA9ICdTa2lsbFRleHQnO1xuICAgIH0gZWxzZSBpZiAoYXJncy5vcHRpb25zIHx8IGFyZ3MuaW5wdXRUeXBlID09PSAnU0VMRUNUJyB8fCBhcmdzLmlucHV0VHlwZSA9PT0gJ0NIRUNLQk9YJykge1xuICAgICAgdHlwZSA9ICdPcHRpb25zJztcbiAgICB9IGVsc2UgaWYgKFsnTU9ORVknLCAnUEVSQ0VOVEFHRScsICdIVE1MJywgJ1NTTiddLmluZGV4T2YoYXJncy5kYXRhU3BlY2lhbGl6YXRpb24pID4gLTEpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmNhcGl0YWxpemUoYXJncy5kYXRhU3BlY2lhbGl6YXRpb24udG9Mb3dlckNhc2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGUgPSBhcmdzLmRhdGFUeXBlIHx8ICdkZWZhdWx0JztcbiAgICB9XG5cbiAgICAvLyBUcmFuc2Zvcm0gZGF0YSBoZXJlXG4gICAgdHJ5IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdBZGRyZXNzJzpcbiAgICAgICAgY2FzZSAnQWRkcmVzczEnOlxuICAgICAgICBjYXNlICdBZGRyZXNzV2l0aG91dENvdW50cnknOlxuICAgICAgICBjYXNlICdTZWNvbmRhcnlBZGRyZXNzJzpcbiAgICAgICAgY2FzZSAnQmlsbGluZ0FkZHJlc3MnOlxuICAgICAgICAgIGNvbnN0IGNvdW50cnk6IGFueSA9IGZpbmRCeUNvdW50cnlJZChOdW1iZXIodmFsdWUuY291bnRyeU5hbWUpKTtcbiAgICAgICAgICB0ZXh0ID0gJyc7XG4gICAgICAgICAgaWYgKHZhbHVlLmFkZHJlc3MxIHx8IHZhbHVlLmFkZHJlc3MyKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IGAke3ZhbHVlLmFkZHJlc3MxIHx8ICcnfSAke3ZhbHVlLmFkZHJlc3MyIHx8ICcnfTxiciAvPlxcbmA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHQgKz0gYCR7dmFsdWUuY2l0eSB8fCAnJ30gJHt2YWx1ZS5zdGF0ZSB8fCAnJ30gJHt2YWx1ZS56aXAgfHwgJyd9JHt2YWx1ZS5jaXR5IHx8IHZhbHVlLnN0YXRlIHx8IHZhbHVlLnppcCA/ICc8YnIgLz5cXG4nIDogJyd9YDtcbiAgICAgICAgICB0ZXh0ICs9IGAke2NvdW50cnkgPyBjb3VudHJ5Lm5hbWUgOiB2YWx1ZS5jb3VudHJ5TmFtZSB8fCAnJ30ke2NvdW50cnkgfHwgdmFsdWUuY291bnRyeU5hbWUgPyAnPGJyIC8+XFxuJyA6ICcnfWA7XG4gICAgICAgICAgdGV4dCA9IHRoaXMuc2FuaXRpemF0aW9uU2VydmljZS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0ZXh0LnRyaW0oKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0RhdGVUaW1lJzpcbiAgICAgICAgY2FzZSAnVGltZXN0YW1wJzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVNob3J0KHZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRGF0ZSc6XG4gICAgICAgICAgdGV4dCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGUobmV3IERhdGUodmFsdWUpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnWWVhcic6XG4gICAgICAgICAgdGV4dCA9IG5ldyBEYXRlKHZhbHVlKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQaG9uZSc6XG4gICAgICAgIGNhc2UgJ0VtYWlsJzpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ01vbmV5JzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5sYWJlbHMuZm9ybWF0Q3VycmVuY3kodmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQZXJjZW50YWdlJzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5sYWJlbHMuZm9ybWF0TnVtYmVyKHBhcnNlRmxvYXQodmFsdWUpLnRvU3RyaW5nKCksIHsgc3R5bGU6ICdwZXJjZW50JywgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdEb3VibGUnOlxuICAgICAgICBjYXNlICdCaWdEZWNpbWFsJzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5sYWJlbHMuZm9ybWF0TnVtYmVyKHZhbHVlLCB7IG1pbmltdW1GcmFjdGlvbkRpZ2l0czogdGhpcy5nZXROdW1iZXJEZWNpbWFsUGxhY2VzKHZhbHVlKSB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSW50ZWdlcic6XG4gICAgICAgICAgdGV4dCA9IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdCdXNpbmVzc1NlY3Rvcic6XG4gICAgICAgIGNhc2UgJ0NhdGVnb3J5JzpcbiAgICAgICAgY2FzZSAnQ2VydGlmaWNhdGlvbic6XG4gICAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uJzpcbiAgICAgICAgY2FzZSAnQ29ycG9yYXRpb25EZXBhcnRtZW50JzpcbiAgICAgICAgY2FzZSAnRGlzdHJpYnV0aW9uTGlzdCc6XG4gICAgICAgIGNhc2UgJ1NraWxsJzpcbiAgICAgICAgY2FzZSAnVGVhcnNoZWV0JzpcbiAgICAgICAgY2FzZSAnU3BlY2lhbHR5JzpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUubGFiZWwgfHwgdmFsdWUubmFtZSB8fCAnJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnU2tpbGxUZXh0JzpcbiAgICAgICAgICB0ZXh0ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5qb2luKCcsICcpIDogdmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0xlYWQnOlxuICAgICAgICBjYXNlICdDYW5kaWRhdGUnOlxuICAgICAgICBjYXNlICdDbGllbnRDb250YWN0JzpcbiAgICAgICAgY2FzZSAnQ29ycG9yYXRlVXNlcic6XG4gICAgICAgIGNhc2UgJ1BlcnNvbic6XG4gICAgICAgICAgdGV4dCA9IHZhbHVlLmxhYmVsIHx8IGAke3ZhbHVlLmZpcnN0TmFtZSB8fCAnJ30gJHt2YWx1ZS5sYXN0TmFtZSB8fCAnJ31gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdPcHBvcnR1bml0eSc6XG4gICAgICAgIGNhc2UgJ0pvYk9yZGVyJzpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUubGFiZWwgfHwgdmFsdWUudGl0bGUgfHwgJyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1BsYWNlbWVudCc6XG4gICAgICAgICAgaWYgKHZhbHVlLmNhbmRpZGF0ZSkge1xuICAgICAgICAgICAgdGV4dCA9IGAke3ZhbHVlLmNhbmRpZGF0ZS5maXJzdE5hbWUgfHwgJyd9ICR7dmFsdWUuY2FuZGlkYXRlLmxhc3ROYW1lIHx8ICcnfWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2YWx1ZS5qb2JPcmRlcikge1xuICAgICAgICAgICAgdGV4dCA9IHZhbHVlLmNhbmRpZGF0ZSA/IGAke3RleHR9IC0gJHt2YWx1ZS5qb2JPcmRlci50aXRsZSB8fCAnJ31gIDogYCR7dmFsdWUuam9iT3JkZXIudGl0bGUgfHwgJyd9YDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0pvYlN1Ym1pc3Npb24nOlxuICAgICAgICAgIHRleHQgPVxuICAgICAgICAgICAgdmFsdWUubGFiZWwgfHxcbiAgICAgICAgICAgIGAke3ZhbHVlLmpvYk9yZGVyID8gYCR7dmFsdWUuam9iT3JkZXIudGl0bGV9IC0gYCA6ICcnfSAke3ZhbHVlLmNhbmRpZGF0ZSA/IHZhbHVlLmNhbmRpZGF0ZS5maXJzdE5hbWUgOiAnJ30gJHtcbiAgICAgICAgICAgIHZhbHVlLmNhbmRpZGF0ZSA/IHZhbHVlLmNhbmRpZGF0ZS5sYXN0TmFtZSA6ICcnXG4gICAgICAgICAgICB9YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnV29ya2Vyc0NvbXBlbnNhdGlvblJhdGUnOlxuICAgICAgICAgIHRleHQgPSBgJHt2YWx1ZS5jb21wZW5zYXRpb24gPyBgJHt2YWx1ZS5jb21wZW5zYXRpb24uY29kZX0gLSBgIDogJyd9ICR7dmFsdWUuY29tcGVuc2F0aW9uID8gdmFsdWUuY29tcGVuc2F0aW9uLm5hbWUgOiAnJ31gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdPcHRpb25zJzpcbiAgICAgICAgICB0ZXh0ID0gdGhpcy5vcHRpb25zKHZhbHVlLCBhcmdzLm9wdGlvbnMsIGFyZ3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdUb01hbnknOlxuICAgICAgICAgIGlmIChbJ0NhbmRpZGF0ZScsICdDb3Jwb3JhdGVVc2VyJywgJ1BlcnNvbiddLmluZGV4T2YoYXJncy5hc3NvY2lhdGVkRW50aXR5LmVudGl0eSkgPiAtMSkge1xuICAgICAgICAgICAgdGV4dCA9IHRoaXMuY29uY2F0KHZhbHVlLmRhdGEsICdmaXJzdE5hbWUnLCAnbGFzdE5hbWUnKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5kYXRhLmxlbmd0aCA8IHZhbHVlLnRvdGFsKSB7XG4gICAgICAgICAgICAgIHRleHQgPSB0ZXh0ICsgJywgJyArIHRoaXMubGFiZWxzLmdldFRvTWFueVBsdXNNb3JlKHsgcXVhbnRpdHk6IHZhbHVlLnRvdGFsIC0gdmFsdWUuZGF0YS5sZW5ndGggfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIFsnQ2F0ZWdvcnknLCAnQnVzaW5lc3NTZWN0b3InLCAnU2tpbGwnLCAnU3BlY2lhbHR5JywgJ0NsaWVudENvcnBvcmF0aW9uJywgJ0NvcnBvcmF0aW9uRGVwYXJ0bWVudCddLmluZGV4T2YoXG4gICAgICAgICAgICAgIGFyZ3MuYXNzb2NpYXRlZEVudGl0eS5lbnRpdHksXG4gICAgICAgICAgICApID4gLTFcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRleHQgPSB0aGlzLmNvbmNhdCh2YWx1ZS5kYXRhLCAnbmFtZScpO1xuICAgICAgICAgICAgaWYgKHZhbHVlLmRhdGEubGVuZ3RoIDwgdmFsdWUudG90YWwpIHtcbiAgICAgICAgICAgICAgdGV4dCA9IHRleHQgKyAnLCAnICsgdGhpcy5sYWJlbHMuZ2V0VG9NYW55UGx1c01vcmUoeyBxdWFudGl0eTogdmFsdWUudG90YWwgLSB2YWx1ZS5kYXRhLmxlbmd0aCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MuYXNzb2NpYXRlZEVudGl0eS5lbnRpdHkgPT09ICdNYWlsTGlzdFB1c2hIaXN0b3J5RGV0YWlsJykge1xuICAgICAgICAgICAgdGV4dCA9IHRoaXMuY29uY2F0KHZhbHVlLmRhdGEsICdleHRlcm5hbExpc3ROYW1lJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHQgPSBgJHt2YWx1ZS50b3RhbCB8fCAnJ31gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQ291bnRyeSc6XG4gICAgICAgICAgY29uc3QgY291bnRyeU9iajogYW55ID0gZmluZEJ5Q291bnRyeUlkKE51bWJlcih2YWx1ZSkpO1xuICAgICAgICAgIHRleHQgPSBjb3VudHJ5T2JqID8gY291bnRyeU9iai5uYW1lIDogdmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0h0bWwnOlxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5qb2luKCcgJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRleHQgPSB0aGlzLnNhbml0aXphdGlvblNlcnZpY2UuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodmFsdWUucmVwbGFjZSgvXFw8YS9naSwgJzxhIHRhcmdldD1cIl9ibGFua1wiJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQ2FuZGlkYXRlQ29tbWVudCc6XG4gICAgICAgICAgdGV4dCA9IHZhbHVlLmNvbW1lbnRzID8gYCR7dGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVNob3J0KHZhbHVlLmRhdGVMYXN0TW9kaWZpZWQpfSAoJHt2YWx1ZS5uYW1lfSkgLSAke3ZhbHVlLmNvbW1lbnRzfWAgOiAnJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUudHJpbSA/IHZhbHVlLnRyaW0oKSA6IHZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgV0FSTklORzogVGhlcmUgd2FzIGEgcHJvYmxlbSByZW5kZXJpbmcgdGhlIHZhbHVlIG9mIHRoZSBmaWVsZDogJHthcmdzLmxhYmVsfS4gUGxlYXNlIGNoZWNrIHRoZSBjb25maWd1cmF0aW9uYCk7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVmFsdWUodmFsdWU6IGFueSwgYXJnczogYW55KTogYW55IHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5yZW5kZXIodmFsdWUsIGFyZ3MpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICB0cmFuc2Zvcm0odmFsdWU/OiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZXF1YWxzKHZhbHVlLCB0aGlzLmxhc3RWYWx1ZSkgJiYgdGhpcy5lcXVhbHMoYXJncywgdGhpcy5sYXN0QXJncykpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMubGFzdFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5sYXN0QXJncyA9IGFyZ3M7XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMubGFzdFZhbHVlLCB0aGlzLmxhc3RBcmdzKTtcblxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbXBsZSBmdW5jdGlvbiBjb25jYXQgYSBsaXN0IG9mIGZpZWxkcyBmcm9tIGEgbGlzdCBvZiBvYmplY3RzXG4gICAqIEBwYXJhbSBsaXN0IC0gdGhlIGxpc3Qgb2YgdmFsdWVzIHRvIHVzZVxuICAgKiBAcGFyYW0gZmllbGRzIC0gbGlzdCBvZiBmaWVsZHMgdG8gZXh0cmFjdFxuICAgKi9cbiAgY29uY2F0KGxpc3Q6IGFueSwgLi4uZmllbGRzOiBhbnlbXSk6IGFueSB7XG4gICAgY29uc3QgZGF0YTogYW55ID0gW107XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgIGNvbnN0IGxhYmVsOiBhbnkgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgZmllbGRzKSB7XG4gICAgICAgIGxhYmVsLnB1c2goYCR7aXRlbVtmaWVsZF19YCk7XG4gICAgICB9XG4gICAgICBkYXRhLnB1c2gobGFiZWwuam9pbignICcpKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGEuam9pbignLCAnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW1wbGUgZnVuY3Rpb24gdG8gbG9vayB1cCB0aGUgKipsYWJlbCoqIHRvIGRpc3BsYXkgZnJvbSBvcHRpb25zXG4gICAqIEBwYXJhbSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBmaW5kXG4gICAqIEBwYXJhbSBsaXN0IC0gbGlzdCBvZiBvcHRpb25zIChsYWJlbC92YWx1ZSBwYWlycylcbiAgICovXG4gIG9wdGlvbnModmFsdWU6IGFueSwgbGlzdDogYW55LCBhcmdzOiBhbnkpOiBhbnkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gW3ZhbHVlXTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB2YWx1ZS5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBsaXN0KSB7XG4gICAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5sYWJlbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIWFyZ3Mub3B0aW9uc1R5cGUpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0TnVtYmVyRGVjaW1hbFBsYWNlcyh2YWx1ZTogYW55KTogYW55IHtcbiAgICBsZXQgZGVjaW1hbFBsYWNlczogYW55O1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgbnVtYmVyU3RyaW5nOiBhbnkgPSBwYXJzZUZsb2F0KHZhbHVlKS50b1N0cmluZygpO1xuICAgICAgY29uc3QgZGVjaW1hbFBsYWNlOiBhbnkgPSAobnVtYmVyU3RyaW5nIHx8ICcnKS5zcGxpdCgnLicpWzFdIHx8ICcnO1xuICAgICAgZGVjaW1hbFBsYWNlcyA9IGRlY2ltYWxQbGFjZS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBkZWNpbWFsUGxhY2VzIHx8IDE7XG4gIH1cblxuICAvKipcbiAgICogQ2FwaXRhbGl6ZXMgdGhlIGZpcnN0IGxldHRlclxuICAgKi9cbiAgY2FwaXRhbGl6ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcbiAgfVxufVxuIl19