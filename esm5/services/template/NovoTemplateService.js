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
    /** @nocollapse */
    NovoTemplateService.ctorParameters = function () { return []; };
    return NovoTemplateService;
}());
export { NovoTemplateService };
if (false) {
    /** @type {?} */
    NovoTemplateService.prototype.templates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b1RlbXBsYXRlU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQU1FO1FBSkEsY0FBUyxHQUFRO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxNQUFNLEVBQUUsRUFBRTtTQUNYLENBQUM7SUFDYSxDQUFDOzs7O0lBRWhCLG9DQUFNOzs7SUFBTjtRQUFBLGlCQVdDOztZQVZLLFNBQVMsR0FBUSxFQUFFOztZQUNqQixtQkFBbUIsR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDOztZQUNsRSxvQkFBb0IsR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQzFFLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVk7WUFDeEMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO1FBQ0gsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBWTtZQUN2QyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFRCx3Q0FBVTs7Ozs7SUFBVixVQUFXLEdBQVcsRUFBRSxRQUFhO1FBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7SUFFRCx1Q0FBUzs7Ozs7SUFBVCxVQUFVLEdBQVcsRUFBRSxRQUFhO1FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUN4QyxDQUFDOztnQkEzQkYsVUFBVTs7OztJQTRCWCwwQkFBQztDQUFBLEFBNUJELElBNEJDO1NBM0JZLG1CQUFtQjs7O0lBQzlCLHdDQUdFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3ZvVGVtcGxhdGVTZXJ2aWNlIHtcbiAgdGVtcGxhdGVzOiBhbnkgPSB7XG4gICAgZGVmYXVsdDoge30sXG4gICAgY3VzdG9tOiB7fSxcbiAgfTtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGdldEFsbCgpOiBhbnkge1xuICAgIGxldCB0ZW1wbGF0ZXM6IGFueSA9IHt9O1xuICAgIGNvbnN0IGN1c3RvbVRlbXBsYXRlVHlwZXM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModGhpcy50ZW1wbGF0ZXMuY3VzdG9tKTtcbiAgICBjb25zdCBkZWZhdWx0VGVtcGxhdGVUeXBlczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh0aGlzLnRlbXBsYXRlcy5kZWZhdWx0KTtcbiAgICBkZWZhdWx0VGVtcGxhdGVUeXBlcy5mb3JFYWNoKCh0eXBlOiBzdHJpbmcpID0+IHtcbiAgICAgIHRlbXBsYXRlc1t0eXBlXSA9IHRoaXMudGVtcGxhdGVzLmRlZmF1bHRbdHlwZV07XG4gICAgfSk7XG4gICAgY3VzdG9tVGVtcGxhdGVUeXBlcy5mb3JFYWNoKCh0eXBlOiBzdHJpbmcpID0+IHtcbiAgICAgIHRlbXBsYXRlc1t0eXBlXSA9IHRoaXMudGVtcGxhdGVzLmN1c3RvbVt0eXBlXTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGVtcGxhdGVzO1xuICB9XG5cbiAgYWRkRGVmYXVsdChrZXk6IHN0cmluZywgdGVtcGxhdGU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudGVtcGxhdGVzLmRlZmF1bHRba2V5XSA9IHRlbXBsYXRlO1xuICB9XG5cbiAgYWRkQ3VzdG9tKGtleTogc3RyaW5nLCB0ZW1wbGF0ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZXMuY3VzdG9tW2tleV0gPSB0ZW1wbGF0ZTtcbiAgfVxufVxuIl19