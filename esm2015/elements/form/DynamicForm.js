// NG
import { Component, ContentChildren, ElementRef, Input, QueryList, } from '@angular/core';
import { NovoTemplateService } from '../../services/template/NovoTemplateService';
import { NovoTemplate } from '../common/novo-template/novo-template.directive';
// App
import { Helpers } from './../../utils/Helpers';
import { NovoFormGroup } from './NovoFormGroup';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./Control";
import * as i3 from "../../services/template/NovoTemplateService";
import * as i4 from "./ControlTemplates";
import * as i5 from "@angular/forms";
function NovoFieldsetElement_novo_fieldset_header_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-fieldset-header", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("embedded", ctx_r0.isEmbedded)("inline-embedded", ctx_r0.isInlineEmbedded)("hidden", ctx_r0.hidden);
    i0.ɵɵproperty("icon", ctx_r0.icon)("title", ctx_r0.title);
} }
function NovoFieldsetElement_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "novo-control", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    const control_r2 = ctx_r6.$implicit;
    const controlIndex_r3 = ctx_r6.index;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", control_r2.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("autoFocus", ctx_r4.autoFocus && ctx_r4.index === 0 && controlIndex_r3 === 0)("control", control_r2)("form", ctx_r4.form);
} }
function NovoFieldsetElement_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "TODO - GroupedControl");
    i0.ɵɵelementEnd();
} }
function NovoFieldsetElement_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NovoFieldsetElement_ng_container_2_div_1_Template, 2, 5, "div", 4);
    i0.ɵɵtemplate(2, NovoFieldsetElement_ng_container_2_div_2_Template, 2, 0, "div", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const control_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", control_r2.__type !== "GroupedControl");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", control_r2.__type === "GroupedControl");
} }
function NovoDynamicFormElement_ng_container_6_novo_fieldset_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-fieldset", 4);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const i_r2 = ctx_r4.index;
    const fieldset_r1 = ctx_r4.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("index", i_r2)("autoFocus", ctx_r3.autoFocusFirstField)("icon", fieldset_r1.icon)("controls", fieldset_r1.controls)("title", fieldset_r1.title)("form", ctx_r3.form)("isEmbedded", fieldset_r1.isEmbedded)("isInlineEmbedded", fieldset_r1.isInlineEmbedded)("hidden", fieldset_r1.hidden);
} }
function NovoDynamicFormElement_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NovoDynamicFormElement_ng_container_6_novo_fieldset_1_Template, 1, 9, "novo-fieldset", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const fieldset_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", fieldset_r1.controls.length);
} }
const _c0 = [[["form-title"]], [["form-subtitle"]]];
const _c1 = ["form-title", "form-subtitle"];
export class NovoFieldsetHeaderElement {
}
NovoFieldsetHeaderElement.ɵfac = function NovoFieldsetHeaderElement_Factory(t) { return new (t || NovoFieldsetHeaderElement)(); };
NovoFieldsetHeaderElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoFieldsetHeaderElement, selectors: [["novo-fieldset-header"]], inputs: { title: "title", icon: "icon" }, decls: 3, vars: 3, template: function NovoFieldsetHeaderElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h6");
        i0.ɵɵelement(1, "i");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.icon || "bhi-section");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.title);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoFieldsetHeaderElement, [{
        type: Component,
        args: [{
                selector: 'novo-fieldset-header',
                template: ` <h6><i [class]="icon || 'bhi-section'"></i>{{ title }}</h6> `,
            }]
    }], null, { title: [{
            type: Input
        }], icon: [{
            type: Input
        }] }); })();
export class NovoFieldsetElement {
    constructor() {
        this.controls = [];
        this.isEmbedded = false;
        this.isInlineEmbedded = false;
        this.hidden = false;
    }
}
NovoFieldsetElement.ɵfac = function NovoFieldsetElement_Factory(t) { return new (t || NovoFieldsetElement)(); };
NovoFieldsetElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoFieldsetElement, selectors: [["novo-fieldset"]], inputs: { controls: "controls", form: "form", title: "title", icon: "icon", index: "index", autoFocus: "autoFocus", isEmbedded: "isEmbedded", isInlineEmbedded: "isInlineEmbedded", hidden: "hidden" }, decls: 3, vars: 2, consts: [[1, "novo-fieldset-container"], [3, "icon", "title", "embedded", "inline-embedded", "hidden", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "icon", "title"], ["class", "novo-form-row", 3, "disabled", 4, "ngIf"], [4, "ngIf"], [1, "novo-form-row"], [3, "autoFocus", "control", "form"]], template: function NovoFieldsetElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, NovoFieldsetElement_novo_fieldset_header_1_Template, 1, 8, "novo-fieldset-header", 1);
        i0.ɵɵtemplate(2, NovoFieldsetElement_ng_container_2_Template, 3, 2, "ng-container", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.controls);
    } }, directives: [i1.NgIf, i1.NgForOf, NovoFieldsetHeaderElement, i2.NovoControlElement], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoFieldsetElement, [{
        type: Component,
        args: [{
                selector: 'novo-fieldset',
                template: `
    <div class="novo-fieldset-container">
      <novo-fieldset-header
        [icon]="icon"
        [title]="title"
        *ngIf="title"
        [class.embedded]="isEmbedded"
        [class.inline-embedded]="isInlineEmbedded"
        [class.hidden]="hidden"
      ></novo-fieldset-header>
      <ng-container *ngFor="let control of controls; let controlIndex = index">
        <div class="novo-form-row" [class.disabled]="control.disabled" *ngIf="control.__type !== 'GroupedControl'">
          <novo-control [autoFocus]="autoFocus && index === 0 && controlIndex === 0" [control]="control" [form]="form"></novo-control>
        </div>
        <div *ngIf="control.__type === 'GroupedControl'">TODO - GroupedControl</div>
      </ng-container>
    </div>
  `,
            }]
    }], null, { controls: [{
            type: Input
        }], form: [{
            type: Input
        }], title: [{
            type: Input
        }], icon: [{
            type: Input
        }], index: [{
            type: Input
        }], autoFocus: [{
            type: Input
        }], isEmbedded: [{
            type: Input
        }], isInlineEmbedded: [{
            type: Input
        }], hidden: [{
            type: Input
        }] }); })();
export class NovoDynamicFormElement {
    constructor(element, templates) {
        this.element = element;
        this.templates = templates;
        this.controls = [];
        this.fieldsets = [];
        this.hideNonRequiredFields = true;
        this.autoFocusFirstField = false;
        this.allFieldsRequired = false;
        this.allFieldsNotRequired = false;
        this.showingAllFields = false;
        this.showingRequiredFields = true;
        this.numControls = 0;
    }
    ngOnInit() {
        this.ngOnChanges();
    }
    ngOnChanges(changes) {
        this.form.layout = this.layout;
        if (!(this.fieldsets && this.fieldsets.length) && this.controls && this.controls.length) {
            this.fieldsets = [
                {
                    controls: this.controls,
                },
            ];
            this.numControls = this.controls.length;
        }
        else if (this.fieldsets) {
            this.fieldsets.forEach((fieldset) => {
                this.numControls = this.numControls + fieldset.controls.length;
            });
        }
        const requiredFields = [];
        const nonRequiredFields = [];
        this.fieldsets.forEach((fieldset) => {
            fieldset.controls.forEach((control) => {
                if (control.required) {
                    requiredFields.push(control);
                }
                else {
                    nonRequiredFields.push(control);
                }
            });
        });
        this.allFieldsRequired = requiredFields.length === this.numControls;
        this.allFieldsNotRequired = nonRequiredFields.length === this.numControls;
        if (this.allFieldsNotRequired && this.hideNonRequiredFields) {
            this.fieldsets.forEach((fieldset) => {
                fieldset.controls.forEach((control) => {
                    this.form.controls[control.key].hidden = false;
                });
            });
        }
        this.form.fieldsets = [...this.fieldsets];
    }
    ngAfterContentInit() {
        if (this.customTemplates && this.customTemplates.length) {
            this.customTemplates.forEach((template) => {
                this.templates.addCustom(template.name, template.template);
            });
        }
    }
    showAllFields() {
        this.form.fieldsets.forEach((fieldset) => {
            fieldset.controls.forEach((control) => {
                const ctl = this.form.controls[control.key];
                if (!this.fieldsAlreadyHidden.includes(control.key)) {
                    ctl.hidden = false;
                }
            });
        });
        this.showingAllFields = true;
        this.showingRequiredFields = false;
    }
    showOnlyRequired(hideRequiredWithValue) {
        this.fieldsAlreadyHidden = [];
        this.form.fieldsets.forEach((fieldset) => {
            fieldset.controls.forEach((control) => {
                const ctl = this.form.controls[control.key];
                if (ctl.hidden) {
                    this.fieldsAlreadyHidden.push(control.key);
                }
                // Hide any non-required fields
                if (!control.required) {
                    ctl.hidden = true;
                }
                // Hide required fields that have been successfully filled out
                if (hideRequiredWithValue &&
                    !Helpers.isBlank(this.form.value[control.key]) &&
                    (!control.isEmpty || (control.isEmpty && control.isEmpty(ctl)))) {
                    ctl.hidden = true;
                }
                // Don't hide fields with errors
                if (ctl.errors) {
                    ctl.hidden = false;
                }
            });
        });
        this.showingAllFields = false;
        this.showingRequiredFields = true;
        this.forceValidation();
    }
    get values() {
        return this.form ? this.form.value : null;
    }
    get isValid() {
        return this.form ? this.form.valid : false;
    }
    updatedValues() {
        let ret = null;
        this.form.fieldsets.forEach((fieldset) => {
            fieldset.controls.forEach((control) => {
                if (this.form.controls[control.key].dirty || control.dirty) {
                    if (!ret) {
                        ret = {};
                    }
                    ret[control.key] = this.form.value[control.key];
                }
            });
        });
        return ret;
    }
    forceValidation() {
        Object.keys(this.form.controls).forEach((key) => {
            const control = this.form.controls[key];
            if (control.required && Helpers.isBlank(this.form.value[control.key])) {
                control.markAsDirty();
                control.markAsTouched();
            }
        });
    }
}
NovoDynamicFormElement.ɵfac = function NovoDynamicFormElement_Factory(t) { return new (t || NovoDynamicFormElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.NovoTemplateService)); };
NovoDynamicFormElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoDynamicFormElement, selectors: [["novo-dynamic-form"]], contentQueries: function NovoDynamicFormElement_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NovoTemplate, false);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.customTemplates = _t);
    } }, inputs: { controls: "controls", fieldsets: "fieldsets", form: "form", layout: "layout", hideNonRequiredFields: "hideNonRequiredFields", autoFocusFirstField: "autoFocusFirstField" }, features: [i0.ɵɵProvidersFeature([NovoTemplateService]), i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 7, vars: 2, consts: [[1, "novo-form-container"], [1, "novo-form", 3, "formGroup"], [4, "ngFor", "ngForOf"], [3, "index", "autoFocus", "icon", "controls", "title", "form", "isEmbedded", "isInlineEmbedded", "hidden", 4, "ngIf"], [3, "index", "autoFocus", "icon", "controls", "title", "form", "isEmbedded", "isInlineEmbedded", "hidden"]], template: function NovoDynamicFormElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵelement(0, "novo-control-templates");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵelementStart(2, "header");
        i0.ɵɵprojection(3);
        i0.ɵɵprojection(4, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "form", 1);
        i0.ɵɵtemplate(6, NovoDynamicFormElement_ng_container_6_Template, 2, 1, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.form.fieldsets);
    } }, directives: [i4.NovoControlTemplates, i5.ɵangular_packages_forms_forms_y, i5.NgControlStatusGroup, i5.FormGroupDirective, i1.NgForOf, i1.NgIf, NovoFieldsetElement], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDynamicFormElement, [{
        type: Component,
        args: [{
                selector: 'novo-dynamic-form',
                template: `
    <novo-control-templates></novo-control-templates>
    <div class="novo-form-container">
      <header>
        <ng-content select="form-title"></ng-content>
        <ng-content select="form-subtitle"></ng-content>
      </header>
      <form class="novo-form" [formGroup]="form">
        <ng-container *ngFor="let fieldset of form.fieldsets; let i = index">
          <novo-fieldset
            *ngIf="fieldset.controls.length"
            [index]="i"
            [autoFocus]="autoFocusFirstField"
            [icon]="fieldset.icon"
            [controls]="fieldset.controls"
            [title]="fieldset.title"
            [form]="form"
            [isEmbedded]="fieldset.isEmbedded"
            [isInlineEmbedded]="fieldset.isInlineEmbedded"
            [hidden]="fieldset.hidden"
          ></novo-fieldset>
        </ng-container>
      </form>
    </div>
  `,
                providers: [NovoTemplateService],
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i3.NovoTemplateService }]; }, { controls: [{
            type: Input
        }], fieldsets: [{
            type: Input
        }], form: [{
            type: Input
        }], layout: [{
            type: Input
        }], hideNonRequiredFields: [{
            type: Input
        }], autoFocusFirstField: [{
            type: Input
        }], customTemplates: [{
            type: ContentChildren,
            args: [NovoTemplate]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1pY0Zvcm0uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0R5bmFtaWNGb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEtBQUs7QUFDTCxPQUFPLEVBRUwsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDL0UsTUFBTTtBQUNOLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7O0lBaUIxQywwQ0FPd0I7OztJQUh0Qiw2Q0FBNkIsNENBQUEseUJBQUE7SUFIN0Isa0NBQWEsdUJBQUE7OztJQVFiLDhCQUNFO0lBQUEsa0NBQTRIO0lBQzlILGlCQUFNOzs7Ozs7SUFGcUIsK0NBQW1DO0lBQzlDLGVBQTREO0lBQTVELDJGQUE0RCx1QkFBQSxxQkFBQTs7O0lBRTVFLDJCQUFpRDtJQUFBLHFDQUFxQjtJQUFBLGlCQUFNOzs7SUFKOUUsNkJBQ0U7SUFBQSxtRkFDRTtJQUVGLG1GQUFpRDtJQUNuRCwwQkFBZTs7O0lBSmtELGVBQTJDO0lBQTNDLDZEQUEyQztJQUdyRyxlQUEyQztJQUEzQyw2REFBMkM7OztJQXFDOUMsbUNBV2lCOzs7Ozs7SUFUZiw0QkFBVyx5Q0FBQSwwQkFBQSxrQ0FBQSw0QkFBQSxxQkFBQSxzQ0FBQSxrREFBQSw4QkFBQTs7O0lBSGYsNkJBQ0U7SUFBQSwwR0FXQztJQUNILDBCQUFlOzs7SUFYWCxlQUFnQztJQUFoQyxrREFBZ0M7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Q3pCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs0RkEzSlUsc0JBQXNCOzJEQUF0QixzQkFBc0I7b0NBYWhCLFlBQVk7Ozs7Z09BZmxCLENBQUMsbUJBQW1CLENBQUM7O1FBeEI5Qix5Q0FBaUQ7UUFDakQsOEJBQ0U7UUFBQSw4QkFDRTtRQUFBLGtCQUFnQztRQUNoQyxxQkFBbUM7UUFDckMsaUJBQVM7UUFDVCwrQkFDRTtRQUFBLHlGQUNFO1FBYUosaUJBQU87UUFDVCxpQkFBTTs7UUFoQm9CLGVBQWtCO1FBQWxCLG9DQUFrQjtRQUMxQixlQUFzRDtRQUF0RCw0Q0FBc0Q7d0pBL0IvRCxtQkFBbUI7a0RBa0RuQixzQkFBc0I7Y0E3QmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCVDtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUNqQzsrRkFHQyxRQUFRO2tCQURQLEtBQUs7WUFHTixTQUFTO2tCQURSLEtBQUs7WUFHTixJQUFJO2tCQURILEtBQUs7WUFHTixNQUFNO2tCQURMLEtBQUs7WUFHTixxQkFBcUI7a0JBRHBCLEtBQUs7WUFHTixtQkFBbUI7a0JBRGxCLEtBQUs7WUFHTixlQUFlO2tCQURkLGVBQWU7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b1RlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlL05vdm9UZW1wbGF0ZVNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b1RlbXBsYXRlIH0gZnJvbSAnLi4vY29tbW9uL25vdm8tdGVtcGxhdGUvbm92by10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuLy8gQXBwXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9GaWVsZHNldCB9IGZyb20gJy4vRm9ybUludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm92b0Zvcm1Hcm91cCB9IGZyb20gJy4vTm92b0Zvcm1Hcm91cCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZmllbGRzZXQtaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGAgPGg2PjxpIFtjbGFzc109XCJpY29uIHx8ICdiaGktc2VjdGlvbidcIj48L2k+e3sgdGl0bGUgfX08L2g2PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRmllbGRzZXRIZWFkZXJFbGVtZW50IHtcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWZpZWxkc2V0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwibm92by1maWVsZHNldC1jb250YWluZXJcIj5cbiAgICAgIDxub3ZvLWZpZWxkc2V0LWhlYWRlclxuICAgICAgICBbaWNvbl09XCJpY29uXCJcbiAgICAgICAgW3RpdGxlXT1cInRpdGxlXCJcbiAgICAgICAgKm5nSWY9XCJ0aXRsZVwiXG4gICAgICAgIFtjbGFzcy5lbWJlZGRlZF09XCJpc0VtYmVkZGVkXCJcbiAgICAgICAgW2NsYXNzLmlubGluZS1lbWJlZGRlZF09XCJpc0lubGluZUVtYmVkZGVkXCJcbiAgICAgICAgW2NsYXNzLmhpZGRlbl09XCJoaWRkZW5cIlxuICAgICAgPjwvbm92by1maWVsZHNldC1oZWFkZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb250cm9sIG9mIGNvbnRyb2xzOyBsZXQgY29udHJvbEluZGV4ID0gaW5kZXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZm9ybS1yb3dcIiBbY2xhc3MuZGlzYWJsZWRdPVwiY29udHJvbC5kaXNhYmxlZFwiICpuZ0lmPVwiY29udHJvbC5fX3R5cGUgIT09ICdHcm91cGVkQ29udHJvbCdcIj5cbiAgICAgICAgICA8bm92by1jb250cm9sIFthdXRvRm9jdXNdPVwiYXV0b0ZvY3VzICYmIGluZGV4ID09PSAwICYmIGNvbnRyb2xJbmRleCA9PT0gMFwiIFtjb250cm9sXT1cImNvbnRyb2xcIiBbZm9ybV09XCJmb3JtXCI+PC9ub3ZvLWNvbnRyb2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiY29udHJvbC5fX3R5cGUgPT09ICdHcm91cGVkQ29udHJvbCdcIj5UT0RPIC0gR3JvdXBlZENvbnRyb2w8L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRmllbGRzZXRFbGVtZW50IHtcbiAgQElucHV0KClcbiAgY29udHJvbHM6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KClcbiAgZm9ybTogYW55O1xuICBASW5wdXQoKVxuICB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGF1dG9Gb2N1czogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgaXNFbWJlZGRlZCA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBpc0lubGluZUVtYmVkZGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGhpZGRlbiA9IGZhbHNlO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWR5bmFtaWMtZm9ybScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5vdm8tY29udHJvbC10ZW1wbGF0ZXM+PC9ub3ZvLWNvbnRyb2wtdGVtcGxhdGVzPlxuICAgIDxkaXYgY2xhc3M9XCJub3ZvLWZvcm0tY29udGFpbmVyXCI+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJmb3JtLXRpdGxlXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJmb3JtLXN1YnRpdGxlXCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8Zm9ybSBjbGFzcz1cIm5vdm8tZm9ybVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZHNldCBvZiBmb3JtLmZpZWxkc2V0czsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgIDxub3ZvLWZpZWxkc2V0XG4gICAgICAgICAgICAqbmdJZj1cImZpZWxkc2V0LmNvbnRyb2xzLmxlbmd0aFwiXG4gICAgICAgICAgICBbaW5kZXhdPVwiaVwiXG4gICAgICAgICAgICBbYXV0b0ZvY3VzXT1cImF1dG9Gb2N1c0ZpcnN0RmllbGRcIlxuICAgICAgICAgICAgW2ljb25dPVwiZmllbGRzZXQuaWNvblwiXG4gICAgICAgICAgICBbY29udHJvbHNdPVwiZmllbGRzZXQuY29udHJvbHNcIlxuICAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkc2V0LnRpdGxlXCJcbiAgICAgICAgICAgIFtmb3JtXT1cImZvcm1cIlxuICAgICAgICAgICAgW2lzRW1iZWRkZWRdPVwiZmllbGRzZXQuaXNFbWJlZGRlZFwiXG4gICAgICAgICAgICBbaXNJbmxpbmVFbWJlZGRlZF09XCJmaWVsZHNldC5pc0lubGluZUVtYmVkZGVkXCJcbiAgICAgICAgICAgIFtoaWRkZW5dPVwiZmllbGRzZXQuaGlkZGVuXCJcbiAgICAgICAgICA+PC9ub3ZvLWZpZWxkc2V0PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbTm92b1RlbXBsYXRlU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EeW5hbWljRm9ybUVsZW1lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBJbnB1dCgpXG4gIGNvbnRyb2xzOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpXG4gIGZpZWxkc2V0czogQXJyYXk8Tm92b0ZpZWxkc2V0PiA9IFtdO1xuICBASW5wdXQoKVxuICBmb3JtOiBOb3ZvRm9ybUdyb3VwO1xuICBASW5wdXQoKVxuICBsYXlvdXQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgaGlkZU5vblJlcXVpcmVkRmllbGRzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgYXV0b0ZvY3VzRmlyc3RGaWVsZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAQ29udGVudENoaWxkcmVuKE5vdm9UZW1wbGF0ZSlcbiAgY3VzdG9tVGVtcGxhdGVzOiBRdWVyeUxpc3Q8Tm92b1RlbXBsYXRlPjtcbiAgcHJpdmF0ZSBmaWVsZHNBbHJlYWR5SGlkZGVuOiBzdHJpbmdbXTtcblxuICBhbGxGaWVsZHNSZXF1aXJlZCA9IGZhbHNlO1xuICBhbGxGaWVsZHNOb3RSZXF1aXJlZCA9IGZhbHNlO1xuICBzaG93aW5nQWxsRmllbGRzID0gZmFsc2U7XG4gIHNob3dpbmdSZXF1aXJlZEZpZWxkcyA9IHRydWU7XG4gIG51bUNvbnRyb2xzID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgdGVtcGxhdGVzOiBOb3ZvVGVtcGxhdGVTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0ubGF5b3V0ID0gdGhpcy5sYXlvdXQ7XG5cbiAgICBpZiAoISh0aGlzLmZpZWxkc2V0cyAmJiB0aGlzLmZpZWxkc2V0cy5sZW5ndGgpICYmIHRoaXMuY29udHJvbHMgJiYgdGhpcy5jb250cm9scy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZmllbGRzZXRzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgY29udHJvbHM6IHRoaXMuY29udHJvbHMsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgICAgdGhpcy5udW1Db250cm9scyA9IHRoaXMuY29udHJvbHMubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAodGhpcy5maWVsZHNldHMpIHtcbiAgICAgIHRoaXMuZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICAgIHRoaXMubnVtQ29udHJvbHMgPSB0aGlzLm51bUNvbnRyb2xzICsgZmllbGRzZXQuY29udHJvbHMubGVuZ3RoO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWlyZWRGaWVsZHM6IEFycmF5PGFueT4gPSBbXTtcbiAgICBjb25zdCBub25SZXF1aXJlZEZpZWxkczogQXJyYXk8YW55PiA9IFtdO1xuICAgIHRoaXMuZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgIGlmIChjb250cm9sLnJlcXVpcmVkKSB7XG4gICAgICAgICAgcmVxdWlyZWRGaWVsZHMucHVzaChjb250cm9sKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub25SZXF1aXJlZEZpZWxkcy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLmFsbEZpZWxkc1JlcXVpcmVkID0gcmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSB0aGlzLm51bUNvbnRyb2xzO1xuICAgIHRoaXMuYWxsRmllbGRzTm90UmVxdWlyZWQgPSBub25SZXF1aXJlZEZpZWxkcy5sZW5ndGggPT09IHRoaXMubnVtQ29udHJvbHM7XG4gICAgaWYgKHRoaXMuYWxsRmllbGRzTm90UmVxdWlyZWQgJiYgdGhpcy5oaWRlTm9uUmVxdWlyZWRGaWVsZHMpIHtcbiAgICAgIHRoaXMuZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmZvcm0uZmllbGRzZXRzID0gWy4uLnRoaXMuZmllbGRzZXRzXTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5jdXN0b21UZW1wbGF0ZXMgJiYgdGhpcy5jdXN0b21UZW1wbGF0ZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmN1c3RvbVRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVzLmFkZEN1c3RvbSh0ZW1wbGF0ZS5uYW1lLCB0ZW1wbGF0ZS50ZW1wbGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2hvd0FsbEZpZWxkcygpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0uZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgIGNvbnN0IGN0bCA9IHRoaXMuZm9ybS5jb250cm9sc1tjb250cm9sLmtleV07XG4gICAgICAgIGlmICghdGhpcy5maWVsZHNBbHJlYWR5SGlkZGVuLmluY2x1ZGVzKGNvbnRyb2wua2V5KSkge1xuICAgICAgICAgIGN0bC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zaG93aW5nQWxsRmllbGRzID0gdHJ1ZTtcbiAgICB0aGlzLnNob3dpbmdSZXF1aXJlZEZpZWxkcyA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHNob3dPbmx5UmVxdWlyZWQoaGlkZVJlcXVpcmVkV2l0aFZhbHVlKTogdm9pZCB7XG4gICAgdGhpcy5maWVsZHNBbHJlYWR5SGlkZGVuID0gW107XG4gICAgdGhpcy5mb3JtLmZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgZmllbGRzZXQuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICBjb25zdCBjdGwgPSB0aGlzLmZvcm0uY29udHJvbHNbY29udHJvbC5rZXldO1xuXG4gICAgICAgIGlmIChjdGwuaGlkZGVuKSB7XG4gICAgICAgICAgdGhpcy5maWVsZHNBbHJlYWR5SGlkZGVuLnB1c2goY29udHJvbC5rZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGlkZSBhbnkgbm9uLXJlcXVpcmVkIGZpZWxkc1xuICAgICAgICBpZiAoIWNvbnRyb2wucmVxdWlyZWQpIHtcbiAgICAgICAgICBjdGwuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhpZGUgcmVxdWlyZWQgZmllbGRzIHRoYXQgaGF2ZSBiZWVuIHN1Y2Nlc3NmdWxseSBmaWxsZWQgb3V0XG4gICAgICAgIGlmIChcbiAgICAgICAgICBoaWRlUmVxdWlyZWRXaXRoVmFsdWUgJiZcbiAgICAgICAgICAhSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS52YWx1ZVtjb250cm9sLmtleV0pICYmXG4gICAgICAgICAgKCFjb250cm9sLmlzRW1wdHkgfHwgKGNvbnRyb2wuaXNFbXB0eSAmJiBjb250cm9sLmlzRW1wdHkoY3RsKSkpXG4gICAgICAgICkge1xuICAgICAgICAgIGN0bC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRG9uJ3QgaGlkZSBmaWVsZHMgd2l0aCBlcnJvcnNcbiAgICAgICAgaWYgKGN0bC5lcnJvcnMpIHtcbiAgICAgICAgICBjdGwuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2hvd2luZ0FsbEZpZWxkcyA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd2luZ1JlcXVpcmVkRmllbGRzID0gdHJ1ZTtcbiAgICB0aGlzLmZvcmNlVmFsaWRhdGlvbigpO1xuICB9XG5cbiAgZ2V0IHZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtID8gdGhpcy5mb3JtLnZhbHVlIDogbnVsbDtcbiAgfVxuXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0gPyB0aGlzLmZvcm0udmFsaWQgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVkVmFsdWVzKCk6IGFueSB7XG4gICAgbGV0IHJldCA9IG51bGw7XG4gICAgdGhpcy5mb3JtLmZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgZmllbGRzZXQuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5kaXJ0eSB8fCBjb250cm9sLmRpcnR5KSB7XG4gICAgICAgICAgaWYgKCFyZXQpIHtcbiAgICAgICAgICAgIHJldCA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXRbY29udHJvbC5rZXldID0gdGhpcy5mb3JtLnZhbHVlW2NvbnRyb2wua2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHB1YmxpYyBmb3JjZVZhbGlkYXRpb24oKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXModGhpcy5mb3JtLmNvbnRyb2xzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgY29udHJvbDogYW55ID0gdGhpcy5mb3JtLmNvbnRyb2xzW2tleV07XG4gICAgICBpZiAoY29udHJvbC5yZXF1aXJlZCAmJiBIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLnZhbHVlW2NvbnRyb2wua2V5XSkpIHtcbiAgICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19