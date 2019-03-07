/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Injectable } from '@angular/core';
var NovoTemplateService = /** @class */ (function () {
    function NovoTemplateService() {
        this.templates = {
            default: {},
            custom: {},
        };
    }
    /**
     * @return {?}
     */
    NovoTemplateService.prototype.getAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var templates = {};
        /** @type {?} */
        var customTemplateTypes = Object.keys(this.templates.custom);
        /** @type {?} */
        var defaultTemplateTypes = Object.keys(this.templates.default);
        defaultTemplateTypes.forEach(function (type) {
            templates[type] = _this.templates.default[type];
        });
        customTemplateTypes.forEach(function (type) {
            templates[type] = _this.templates.custom[type];
        });
        return templates;
    };
    /**
     * @param {?} key
     * @param {?} template
     * @return {?}
     */
    NovoTemplateService.prototype.addDefault = /**
     * @param {?} key
     * @param {?} template
     * @return {?}
     */
    function (key, template) {
        this.templates.default[key] = template;
    };
    /**
     * @param {?} key
     * @param {?} template
     * @return {?}
     */
    NovoTemplateService.prototype.addCustom = /**
     * @param {?} key
     * @param {?} template
     * @return {?}
     */
    function (key, template) {
        this.templates.custom[key] = template;
    };
    NovoTemplateService.decorators = [
        { type: Injectable }
    ];
    NovoTemplateService.ctorParameters = function () { return []; };
    return NovoTemplateService;
}());
export { NovoTemplateService };
if (false) {
    /** @type {?} */
    NovoTemplateService.prototype.templates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b1RlbXBsYXRlU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQU1FO1FBSkEsY0FBUyxHQUFRO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxNQUFNLEVBQUUsRUFBRTtTQUNYLENBQUM7SUFDYSxDQUFDOzs7O0lBRWhCLG9DQUFNOzs7SUFBTjtRQUFBLGlCQVdDOztZQVZLLFNBQVMsR0FBUSxFQUFFOztZQUNqQixtQkFBbUIsR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDOztZQUNsRSxvQkFBb0IsR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQzFFLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVk7WUFDeEMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO1FBQ0gsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBWTtZQUN2QyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFRCx3Q0FBVTs7Ozs7SUFBVixVQUFXLEdBQVcsRUFBRSxRQUFhO1FBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7SUFFRCx1Q0FBUzs7Ozs7SUFBVCxVQUFVLEdBQVcsRUFBRSxRQUFhO1FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUN4QyxDQUFDOztnQkEzQkYsVUFBVTs7O0lBNEJYLDBCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0EzQlksbUJBQW1COzs7SUFDOUIsd0NBR0UiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdm9UZW1wbGF0ZVNlcnZpY2Uge1xuICB0ZW1wbGF0ZXM6IGFueSA9IHtcbiAgICBkZWZhdWx0OiB7fSxcbiAgICBjdXN0b206IHt9LFxuICB9O1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2V0QWxsKCk6IGFueSB7XG4gICAgbGV0IHRlbXBsYXRlczogYW55ID0ge307XG4gICAgY29uc3QgY3VzdG9tVGVtcGxhdGVUeXBlczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh0aGlzLnRlbXBsYXRlcy5jdXN0b20pO1xuICAgIGNvbnN0IGRlZmF1bHRUZW1wbGF0ZVR5cGVzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHRoaXMudGVtcGxhdGVzLmRlZmF1bHQpO1xuICAgIGRlZmF1bHRUZW1wbGF0ZVR5cGVzLmZvckVhY2goKHR5cGU6IHN0cmluZykgPT4ge1xuICAgICAgdGVtcGxhdGVzW3R5cGVdID0gdGhpcy50ZW1wbGF0ZXMuZGVmYXVsdFt0eXBlXTtcbiAgICB9KTtcbiAgICBjdXN0b21UZW1wbGF0ZVR5cGVzLmZvckVhY2goKHR5cGU6IHN0cmluZykgPT4ge1xuICAgICAgdGVtcGxhdGVzW3R5cGVdID0gdGhpcy50ZW1wbGF0ZXMuY3VzdG9tW3R5cGVdO1xuICAgIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZXM7XG4gIH1cblxuICBhZGREZWZhdWx0KGtleTogc3RyaW5nLCB0ZW1wbGF0ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZXMuZGVmYXVsdFtrZXldID0gdGVtcGxhdGU7XG4gIH1cblxuICBhZGRDdXN0b20oa2V5OiBzdHJpbmcsIHRlbXBsYXRlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlcy5jdXN0b21ba2V5XSA9IHRlbXBsYXRlO1xuICB9XG59XG4iXX0=