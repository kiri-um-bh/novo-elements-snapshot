/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Injectable } from '@angular/core';
export class NovoTemplateService {
    constructor() {
        this.templates = {
            default: {},
            custom: {},
        };
    }
    /**
     * @return {?}
     */
    getAll() {
        /** @type {?} */
        let templates = {};
        /** @type {?} */
        const customTemplateTypes = Object.keys(this.templates.custom);
        /** @type {?} */
        const defaultTemplateTypes = Object.keys(this.templates.default);
        defaultTemplateTypes.forEach((type) => {
            templates[type] = this.templates.default[type];
        });
        customTemplateTypes.forEach((type) => {
            templates[type] = this.templates.custom[type];
        });
        return templates;
    }
    /**
     * @param {?} key
     * @param {?} template
     * @return {?}
     */
    addDefault(key, template) {
        this.templates.default[key] = template;
    }
    /**
     * @param {?} key
     * @param {?} template
     * @return {?}
     */
    addCustom(key, template) {
        this.templates.custom[key] = template;
    }
}
NovoTemplateService.decorators = [
    { type: Injectable }
];
NovoTemplateService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    NovoTemplateService.prototype.templates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b1RlbXBsYXRlU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNO0lBS0o7UUFKQSxjQUFTLEdBQVE7WUFDZixPQUFPLEVBQUUsRUFBRTtZQUNYLE1BQU0sRUFBRSxFQUFFO1NBQ1gsQ0FBQztJQUNhLENBQUM7Ozs7SUFFaEIsTUFBTTs7WUFDQSxTQUFTLEdBQVEsRUFBRTs7Y0FDakIsbUJBQW1CLEdBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQzs7Y0FDbEUsb0JBQW9CLEdBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUMxRSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRTtZQUM1QyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7UUFDSCxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRTtZQUMzQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsR0FBVyxFQUFFLFFBQWE7UUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxHQUFXLEVBQUUsUUFBYTtRQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDeEMsQ0FBQzs7O1lBM0JGLFVBQVU7Ozs7O0lBRVQsd0NBR0UiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdm9UZW1wbGF0ZVNlcnZpY2Uge1xuICB0ZW1wbGF0ZXM6IGFueSA9IHtcbiAgICBkZWZhdWx0OiB7fSxcbiAgICBjdXN0b206IHt9LFxuICB9O1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2V0QWxsKCk6IGFueSB7XG4gICAgbGV0IHRlbXBsYXRlczogYW55ID0ge307XG4gICAgY29uc3QgY3VzdG9tVGVtcGxhdGVUeXBlczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh0aGlzLnRlbXBsYXRlcy5jdXN0b20pO1xuICAgIGNvbnN0IGRlZmF1bHRUZW1wbGF0ZVR5cGVzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHRoaXMudGVtcGxhdGVzLmRlZmF1bHQpO1xuICAgIGRlZmF1bHRUZW1wbGF0ZVR5cGVzLmZvckVhY2goKHR5cGU6IHN0cmluZykgPT4ge1xuICAgICAgdGVtcGxhdGVzW3R5cGVdID0gdGhpcy50ZW1wbGF0ZXMuZGVmYXVsdFt0eXBlXTtcbiAgICB9KTtcbiAgICBjdXN0b21UZW1wbGF0ZVR5cGVzLmZvckVhY2goKHR5cGU6IHN0cmluZykgPT4ge1xuICAgICAgdGVtcGxhdGVzW3R5cGVdID0gdGhpcy50ZW1wbGF0ZXMuY3VzdG9tW3R5cGVdO1xuICAgIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZXM7XG4gIH1cblxuICBhZGREZWZhdWx0KGtleTogc3RyaW5nLCB0ZW1wbGF0ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZXMuZGVmYXVsdFtrZXldID0gdGVtcGxhdGU7XG4gIH1cblxuICBhZGRDdXN0b20oa2V5OiBzdHJpbmcsIHRlbXBsYXRlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlcy5jdXN0b21ba2V5XSA9IHRlbXBsYXRlO1xuICB9XG59XG4iXX0=