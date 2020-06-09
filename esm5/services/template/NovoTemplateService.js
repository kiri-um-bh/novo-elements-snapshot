// NG2
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var NovoTemplateService = /** @class */ (function () {
    function NovoTemplateService() {
        this.templates = {
            default: {},
            custom: {},
        };
    }
    NovoTemplateService.prototype.getAll = function () {
        var _this = this;
        var templates = {};
        var customTemplateTypes = Object.keys(this.templates.custom);
        var defaultTemplateTypes = Object.keys(this.templates.default);
        defaultTemplateTypes.forEach(function (type) {
            templates[type] = _this.templates.default[type];
        });
        customTemplateTypes.forEach(function (type) {
            templates[type] = _this.templates.custom[type];
        });
        return templates;
    };
    NovoTemplateService.prototype.addDefault = function (key, template) {
        this.templates.default[key] = template;
    };
    NovoTemplateService.prototype.addCustom = function (key, template) {
        this.templates.custom[key] = template;
    };
    NovoTemplateService.ɵfac = function NovoTemplateService_Factory(t) { return new (t || NovoTemplateService)(); };
    NovoTemplateService.ɵprov = i0.ɵɵdefineInjectable({ token: NovoTemplateService, factory: NovoTemplateService.ɵfac });
    return NovoTemplateService;
}());
export { NovoTemplateService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTemplateService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b1RlbXBsYXRlU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQztJQU1FO1FBSkEsY0FBUyxHQUFRO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxNQUFNLEVBQUUsRUFBRTtTQUNYLENBQUM7SUFDYSxDQUFDO0lBRWhCLG9DQUFNLEdBQU47UUFBQSxpQkFXQztRQVZDLElBQU0sU0FBUyxHQUFRLEVBQUUsQ0FBQztRQUMxQixJQUFNLG1CQUFtQixHQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RSxJQUFNLG9CQUFvQixHQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzRSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFZO1lBQ3hDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztRQUNILG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVk7WUFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELHdDQUFVLEdBQVYsVUFBVyxHQUFXLEVBQUUsUUFBYTtRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDekMsQ0FBQztJQUVELHVDQUFTLEdBQVQsVUFBVSxHQUFXLEVBQUUsUUFBYTtRQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDeEMsQ0FBQzswRkExQlUsbUJBQW1COytEQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1COzhCQUpoQztDQStCQyxBQTVCRCxJQTRCQztTQTNCWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQUQvQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3ZvVGVtcGxhdGVTZXJ2aWNlIHtcbiAgdGVtcGxhdGVzOiBhbnkgPSB7XG4gICAgZGVmYXVsdDoge30sXG4gICAgY3VzdG9tOiB7fSxcbiAgfTtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGdldEFsbCgpOiBhbnkge1xuICAgIGNvbnN0IHRlbXBsYXRlczogYW55ID0ge307XG4gICAgY29uc3QgY3VzdG9tVGVtcGxhdGVUeXBlczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh0aGlzLnRlbXBsYXRlcy5jdXN0b20pO1xuICAgIGNvbnN0IGRlZmF1bHRUZW1wbGF0ZVR5cGVzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHRoaXMudGVtcGxhdGVzLmRlZmF1bHQpO1xuICAgIGRlZmF1bHRUZW1wbGF0ZVR5cGVzLmZvckVhY2goKHR5cGU6IHN0cmluZykgPT4ge1xuICAgICAgdGVtcGxhdGVzW3R5cGVdID0gdGhpcy50ZW1wbGF0ZXMuZGVmYXVsdFt0eXBlXTtcbiAgICB9KTtcbiAgICBjdXN0b21UZW1wbGF0ZVR5cGVzLmZvckVhY2goKHR5cGU6IHN0cmluZykgPT4ge1xuICAgICAgdGVtcGxhdGVzW3R5cGVdID0gdGhpcy50ZW1wbGF0ZXMuY3VzdG9tW3R5cGVdO1xuICAgIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZXM7XG4gIH1cblxuICBhZGREZWZhdWx0KGtleTogc3RyaW5nLCB0ZW1wbGF0ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZXMuZGVmYXVsdFtrZXldID0gdGVtcGxhdGU7XG4gIH1cblxuICBhZGRDdXN0b20oa2V5OiBzdHJpbmcsIHRlbXBsYXRlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlcy5jdXN0b21ba2V5XSA9IHRlbXBsYXRlO1xuICB9XG59XG4iXX0=