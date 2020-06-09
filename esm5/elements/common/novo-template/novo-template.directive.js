import { Directive, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
var NovoTemplate = /** @class */ (function () {
    function NovoTemplate(template) {
        this.template = template;
    }
    NovoTemplate.prototype.getType = function () {
        return this.name;
    };
    NovoTemplate.ɵfac = function NovoTemplate_Factory(t) { return new (t || NovoTemplate)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
    NovoTemplate.ɵdir = i0.ɵɵdefineDirective({ type: NovoTemplate, selectors: [["", "novoTemplate", ""]], inputs: { type: "type", name: ["novoTemplate", "name"] } });
    return NovoTemplate;
}());
export { NovoTemplate };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTemplate, [{
        type: Directive,
        args: [{
                selector: '[novoTemplate]',
            }]
    }], function () { return [{ type: i0.TemplateRef }]; }, { type: [{
            type: Input
        }], name: [{
            type: Input,
            args: ['novoTemplate']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm92by10ZW1wbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY29tbW9uL25vdm8tdGVtcGxhdGUvbm92by10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUU5RDtJQU9FLHNCQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtJQUFHLENBQUM7SUFFakQsOEJBQU8sR0FBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzRFQVJVLFlBQVk7cURBQVosWUFBWTt1QkFMekI7Q0FjQyxBQVpELElBWUM7U0FUWSxZQUFZO2tEQUFaLFlBQVk7Y0FIeEIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUs7bUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvVGVtcGxhdGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RlbXBsYXRlIHtcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuICBASW5wdXQoJ25vdm9UZW1wbGF0ZScpIG5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG5cbiAgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbn1cbiJdfQ==