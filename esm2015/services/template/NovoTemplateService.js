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
/** @nocollapse */
NovoTemplateService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    NovoTemplateService.prototype.templates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b1RlbXBsYXRlU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8sbUJBQW1CO0lBSzlCO1FBSkEsY0FBUyxHQUFRO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxNQUFNLEVBQUUsRUFBRTtTQUNYLENBQUM7SUFDYSxDQUFDOzs7O0lBRWhCLE1BQU07O1lBQ0EsU0FBUyxHQUFRLEVBQUU7O2NBQ2pCLG1CQUFtQixHQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7O2NBQ2xFLG9CQUFvQixHQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDMUUsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7WUFDNUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO1FBQ0gsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7WUFDM0MsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLEdBQVcsRUFBRSxRQUFhO1FBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBVyxFQUFFLFFBQWE7UUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQ3hDLENBQUM7OztZQTNCRixVQUFVOzs7Ozs7SUFFVCx3Q0FHRSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm92b1RlbXBsYXRlU2VydmljZSB7XG4gIHRlbXBsYXRlczogYW55ID0ge1xuICAgIGRlZmF1bHQ6IHt9LFxuICAgIGN1c3RvbToge30sXG4gIH07XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBnZXRBbGwoKTogYW55IHtcbiAgICBsZXQgdGVtcGxhdGVzOiBhbnkgPSB7fTtcbiAgICBjb25zdCBjdXN0b21UZW1wbGF0ZVR5cGVzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHRoaXMudGVtcGxhdGVzLmN1c3RvbSk7XG4gICAgY29uc3QgZGVmYXVsdFRlbXBsYXRlVHlwZXM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModGhpcy50ZW1wbGF0ZXMuZGVmYXVsdCk7XG4gICAgZGVmYXVsdFRlbXBsYXRlVHlwZXMuZm9yRWFjaCgodHlwZTogc3RyaW5nKSA9PiB7XG4gICAgICB0ZW1wbGF0ZXNbdHlwZV0gPSB0aGlzLnRlbXBsYXRlcy5kZWZhdWx0W3R5cGVdO1xuICAgIH0pO1xuICAgIGN1c3RvbVRlbXBsYXRlVHlwZXMuZm9yRWFjaCgodHlwZTogc3RyaW5nKSA9PiB7XG4gICAgICB0ZW1wbGF0ZXNbdHlwZV0gPSB0aGlzLnRlbXBsYXRlcy5jdXN0b21bdHlwZV07XG4gICAgfSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlcztcbiAgfVxuXG4gIGFkZERlZmF1bHQoa2V5OiBzdHJpbmcsIHRlbXBsYXRlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlcy5kZWZhdWx0W2tleV0gPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGFkZEN1c3RvbShrZXk6IHN0cmluZywgdGVtcGxhdGU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudGVtcGxhdGVzLmN1c3RvbVtrZXldID0gdGVtcGxhdGU7XG4gIH1cbn1cbiJdfQ==