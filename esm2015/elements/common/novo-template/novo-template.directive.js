import { Directive, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export class NovoTemplate {
    constructor(template) {
        this.template = template;
    }
    getType() {
        return this.name;
    }
}
NovoTemplate.ɵfac = function NovoTemplate_Factory(t) { return new (t || NovoTemplate)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
NovoTemplate.ɵdir = i0.ɵɵdefineDirective({ type: NovoTemplate, selectors: [["", "novoTemplate", ""]], inputs: { type: "type", name: ["novoTemplate", "name"] } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm92by10ZW1wbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jb21tb24vbm92by10ZW1wbGF0ZS9ub3ZvLXRlbXBsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzlELE1BQU0sT0FBTyxZQUFZO0lBSXZCLFlBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0lBQUcsQ0FBQztJQUVqRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7O3dFQVJVLFlBQVk7aURBQVosWUFBWTtrREFBWixZQUFZO2NBSHhCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzhEQUVVLElBQUk7a0JBQVosS0FBSztZQUNpQixJQUFJO2tCQUExQixLQUFLO21CQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1RlbXBsYXRlXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UZW1wbGF0ZSB7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgQElucHV0KCdub3ZvVGVtcGxhdGUnKSBuYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxuXG4gIGdldFR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG59XG4iXX0=