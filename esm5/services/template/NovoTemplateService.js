/**
 * @fileoverview added by tsickle
 * Generated from: services/template/NovoTemplateService.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        defaultTemplateTypes.forEach((/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            templates[type] = _this.templates.default[type];
        }));
        customTemplateTypes.forEach((/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            templates[type] = _this.templates.custom[type];
        }));
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
    /** @nocollapse */
    NovoTemplateService.ctorParameters = function () { return []; };
    return NovoTemplateService;
}());
export { NovoTemplateService };
if (false) {
    /** @type {?} */
    NovoTemplateService.prototype.templates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b1RlbXBsYXRlU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFNRTtRQUpBLGNBQVMsR0FBUTtZQUNmLE9BQU8sRUFBRSxFQUFFO1lBQ1gsTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFDO0lBQ2EsQ0FBQzs7OztJQUVoQixvQ0FBTTs7O0lBQU47UUFBQSxpQkFXQzs7WUFWSyxTQUFTLEdBQVEsRUFBRTs7WUFDakIsbUJBQW1CLEdBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQzs7WUFDbEUsb0JBQW9CLEdBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUMxRSxvQkFBb0IsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxJQUFZO1lBQ3hDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxDQUFDLEVBQUMsQ0FBQztRQUNILG1CQUFtQixDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLElBQVk7WUFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRUQsd0NBQVU7Ozs7O0lBQVYsVUFBVyxHQUFXLEVBQUUsUUFBYTtRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDekMsQ0FBQzs7Ozs7O0lBRUQsdUNBQVM7Ozs7O0lBQVQsVUFBVSxHQUFXLEVBQUUsUUFBYTtRQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDeEMsQ0FBQzs7Z0JBM0JGLFVBQVU7Ozs7SUE0QlgsMEJBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQTNCWSxtQkFBbUI7OztJQUM5Qix3Q0FHRSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm92b1RlbXBsYXRlU2VydmljZSB7XG4gIHRlbXBsYXRlczogYW55ID0ge1xuICAgIGRlZmF1bHQ6IHt9LFxuICAgIGN1c3RvbToge30sXG4gIH07XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBnZXRBbGwoKTogYW55IHtcbiAgICBsZXQgdGVtcGxhdGVzOiBhbnkgPSB7fTtcbiAgICBjb25zdCBjdXN0b21UZW1wbGF0ZVR5cGVzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHRoaXMudGVtcGxhdGVzLmN1c3RvbSk7XG4gICAgY29uc3QgZGVmYXVsdFRlbXBsYXRlVHlwZXM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModGhpcy50ZW1wbGF0ZXMuZGVmYXVsdCk7XG4gICAgZGVmYXVsdFRlbXBsYXRlVHlwZXMuZm9yRWFjaCgodHlwZTogc3RyaW5nKSA9PiB7XG4gICAgICB0ZW1wbGF0ZXNbdHlwZV0gPSB0aGlzLnRlbXBsYXRlcy5kZWZhdWx0W3R5cGVdO1xuICAgIH0pO1xuICAgIGN1c3RvbVRlbXBsYXRlVHlwZXMuZm9yRWFjaCgodHlwZTogc3RyaW5nKSA9PiB7XG4gICAgICB0ZW1wbGF0ZXNbdHlwZV0gPSB0aGlzLnRlbXBsYXRlcy5jdXN0b21bdHlwZV07XG4gICAgfSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlcztcbiAgfVxuXG4gIGFkZERlZmF1bHQoa2V5OiBzdHJpbmcsIHRlbXBsYXRlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlcy5kZWZhdWx0W2tleV0gPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGFkZEN1c3RvbShrZXk6IHN0cmluZywgdGVtcGxhdGU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudGVtcGxhdGVzLmN1c3RvbVtrZXldID0gdGVtcGxhdGU7XG4gIH1cbn1cbiJdfQ==