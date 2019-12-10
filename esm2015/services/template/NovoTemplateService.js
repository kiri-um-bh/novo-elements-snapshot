/**
 * @fileoverview added by tsickle
 * Generated from: services/template/NovoTemplateService.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        defaultTemplateTypes.forEach((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            templates[type] = this.templates.default[type];
        }));
        customTemplateTypes.forEach((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            templates[type] = this.templates.custom[type];
        }));
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
/** @nocollapse */
NovoTemplateService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    NovoTemplateService.prototype.templates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b1RlbXBsYXRlU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsTUFBTSxPQUFPLG1CQUFtQjtJQUs5QjtRQUpBLGNBQVMsR0FBUTtZQUNmLE9BQU8sRUFBRSxFQUFFO1lBQ1gsTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFDO0lBQ2EsQ0FBQzs7OztJQUVoQixNQUFNOztZQUNBLFNBQVMsR0FBUSxFQUFFOztjQUNqQixtQkFBbUIsR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDOztjQUNsRSxvQkFBb0IsR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQzFFLG9CQUFvQixDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLElBQVksRUFBRSxFQUFFO1lBQzVDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxDQUFDLEVBQUMsQ0FBQztRQUNILG1CQUFtQixDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLElBQVksRUFBRSxFQUFFO1lBQzNDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxHQUFXLEVBQUUsUUFBYTtRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDekMsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQVcsRUFBRSxRQUFhO1FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUN4QyxDQUFDOzs7WUEzQkYsVUFBVTs7Ozs7O0lBRVQsd0NBR0UiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdm9UZW1wbGF0ZVNlcnZpY2Uge1xuICB0ZW1wbGF0ZXM6IGFueSA9IHtcbiAgICBkZWZhdWx0OiB7fSxcbiAgICBjdXN0b206IHt9LFxuICB9O1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2V0QWxsKCk6IGFueSB7XG4gICAgbGV0IHRlbXBsYXRlczogYW55ID0ge307XG4gICAgY29uc3QgY3VzdG9tVGVtcGxhdGVUeXBlczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh0aGlzLnRlbXBsYXRlcy5jdXN0b20pO1xuICAgIGNvbnN0IGRlZmF1bHRUZW1wbGF0ZVR5cGVzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHRoaXMudGVtcGxhdGVzLmRlZmF1bHQpO1xuICAgIGRlZmF1bHRUZW1wbGF0ZVR5cGVzLmZvckVhY2goKHR5cGU6IHN0cmluZykgPT4ge1xuICAgICAgdGVtcGxhdGVzW3R5cGVdID0gdGhpcy50ZW1wbGF0ZXMuZGVmYXVsdFt0eXBlXTtcbiAgICB9KTtcbiAgICBjdXN0b21UZW1wbGF0ZVR5cGVzLmZvckVhY2goKHR5cGU6IHN0cmluZykgPT4ge1xuICAgICAgdGVtcGxhdGVzW3R5cGVdID0gdGhpcy50ZW1wbGF0ZXMuY3VzdG9tW3R5cGVdO1xuICAgIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZXM7XG4gIH1cblxuICBhZGREZWZhdWx0KGtleTogc3RyaW5nLCB0ZW1wbGF0ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZXMuZGVmYXVsdFtrZXldID0gdGVtcGxhdGU7XG4gIH1cblxuICBhZGRDdXN0b20oa2V5OiBzdHJpbmcsIHRlbXBsYXRlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlcy5jdXN0b21ba2V5XSA9IHRlbXBsYXRlO1xuICB9XG59XG4iXX0=