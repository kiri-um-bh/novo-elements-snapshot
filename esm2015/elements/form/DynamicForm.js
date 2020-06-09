// NG
import { Component, ContentChildren, ElementRef, Input, QueryList } from '@angular/core';
import { NovoTemplateService } from '../../services/template/NovoTemplateService';
import { NovoTemplate } from '../common/novo-template/novo-template.directive';
// App
import { Helpers } from './../../utils/Helpers';
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
                template: `
        <h6><i [class]="icon || 'bhi-section'"></i>{{title}}</h6>
    `,
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
            <novo-fieldset-header [icon]="icon" [title]="title" *ngIf="title" [class.embedded]="isEmbedded" [class.inline-embedded]="isInlineEmbedded" [class.hidden]="hidden"></novo-fieldset-header>
            <ng-container *ngFor="let control of controls;let controlIndex = index;">
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
                <ng-container *ngFor="let fieldset of form.fieldsets;let i = index">
                    <novo-fieldset *ngIf="fieldset.controls.length" [index]="i" [autoFocus]="autoFocusFirstField" [icon]="fieldset.icon" [controls]="fieldset.controls" [title]="fieldset.title" [form]="form" [isEmbedded]="fieldset.isEmbedded" [isInlineEmbedded]="fieldset.isInlineEmbedded" [hidden]="fieldset.hidden"></novo-fieldset>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1pY0Zvcm0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9EeW5hbWljRm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLO0FBQ0wsT0FBTyxFQUFvQixTQUFTLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDN0ksT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE1BQU07QUFDTixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7O0lBb0JwQywwQ0FBMEw7OztJQUF4SCw2Q0FBNkIsNENBQUEseUJBQUE7SUFBekUsa0NBQWEsdUJBQUE7OztJQUUvQiw4QkFDSTtJQUFBLGtDQUE0SDtJQUNoSSxpQkFBTTs7Ozs7O0lBRnFCLCtDQUFtQztJQUM1QyxlQUE0RDtJQUE1RCwyRkFBNEQsdUJBQUEscUJBQUE7OztJQUU5RSwyQkFBaUQ7SUFBQSxxQ0FBcUI7SUFBQSxpQkFBTTs7O0lBSmhGLDZCQUNJO0lBQUEsbUZBQ0k7SUFFSixtRkFBaUQ7SUFDckQsMEJBQWU7OztJQUpvRCxlQUEyQztJQUEzQyw2REFBMkM7SUFHckcsZUFBMkM7SUFBM0MsNkRBQTJDOzs7SUFxQzVDLG1DQUF3VDs7Ozs7O0lBQXhRLDRCQUFXLHlDQUFBLDBCQUFBLGtDQUFBLDRCQUFBLHFCQUFBLHNDQUFBLGtEQUFBLDhCQUFBOzs7SUFEL0QsNkJBQ0k7SUFBQSwwR0FBd1M7SUFDNVMsMEJBQWU7OztJQURJLGVBQWdDO0lBQWhDLGtEQUFnQzs7OztBQXJEbkUsTUFBTSxPQUFPLHlCQUF5Qjs7a0dBQXpCLHlCQUF5Qjs4REFBekIseUJBQXlCO1FBSDlCLDBCQUFJO1FBQUEsb0JBQXVDO1FBQUEs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UUFFUixpQkFBTztRQUNYLGlCQUFNOztRQUxzQixlQUFrQjtRQUFsQixvQ0FBa0I7UUFDeEIsZUFBcUQ7UUFBckQsNENBQXFEO3dKQS9CdEUsbUJBQW1CO2tEQXVDbkIsc0JBQXNCO2NBbEJsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0tBYVA7Z0JBQ0gsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDakM7O2tCQUVFLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLGVBQWU7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBRdWVyeUxpc3QsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9UZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9UZW1wbGF0ZSB9IGZyb20gJy4uL2NvbW1vbi9ub3ZvLXRlbXBsYXRlL25vdm8tdGVtcGxhdGUuZGlyZWN0aXZlJztcbi8vIEFwcFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvRmllbGRzZXQsIE5vdm9Gb3JtR3JvdXAgfSBmcm9tICcuL0Zvcm1JbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1maWVsZHNldC1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDY+PGkgW2NsYXNzXT1cImljb24gfHwgJ2JoaS1zZWN0aW9uJ1wiPjwvaT57e3RpdGxlfX08L2g2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9GaWVsZHNldEhlYWRlckVsZW1lbnQge1xuICBASW5wdXQoKVxuICB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZmllbGRzZXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1maWVsZHNldC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxub3ZvLWZpZWxkc2V0LWhlYWRlciBbaWNvbl09XCJpY29uXCIgW3RpdGxlXT1cInRpdGxlXCIgKm5nSWY9XCJ0aXRsZVwiIFtjbGFzcy5lbWJlZGRlZF09XCJpc0VtYmVkZGVkXCIgW2NsYXNzLmlubGluZS1lbWJlZGRlZF09XCJpc0lubGluZUVtYmVkZGVkXCIgW2NsYXNzLmhpZGRlbl09XCJoaWRkZW5cIj48L25vdm8tZmllbGRzZXQtaGVhZGVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29udHJvbCBvZiBjb250cm9scztsZXQgY29udHJvbEluZGV4ID0gaW5kZXg7XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZm9ybS1yb3dcIiBbY2xhc3MuZGlzYWJsZWRdPVwiY29udHJvbC5kaXNhYmxlZFwiICpuZ0lmPVwiY29udHJvbC5fX3R5cGUgIT09ICdHcm91cGVkQ29udHJvbCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5vdm8tY29udHJvbCBbYXV0b0ZvY3VzXT1cImF1dG9Gb2N1cyAmJiBpbmRleCA9PT0gMCAmJiBjb250cm9sSW5kZXggPT09IDBcIiBbY29udHJvbF09XCJjb250cm9sXCIgW2Zvcm1dPVwiZm9ybVwiPjwvbm92by1jb250cm9sPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjb250cm9sLl9fdHlwZSA9PT0gJ0dyb3VwZWRDb250cm9sJ1wiPlRPRE8gLSBHcm91cGVkQ29udHJvbDwvZGl2PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9GaWVsZHNldEVsZW1lbnQge1xuICBASW5wdXQoKVxuICBjb250cm9sczogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKVxuICBmb3JtOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcbiAgQElucHV0KClcbiAgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KClcbiAgYXV0b0ZvY3VzOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBpc0VtYmVkZGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGlzSW5saW5lRW1iZWRkZWQgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgaGlkZGVuID0gZmFsc2U7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZHluYW1pYy1mb3JtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5vdm8tY29udHJvbC10ZW1wbGF0ZXM+PC9ub3ZvLWNvbnRyb2wtdGVtcGxhdGVzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1mb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJmb3JtLXRpdGxlXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImZvcm0tc3VidGl0bGVcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwibm92by1mb3JtXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGRzZXQgb2YgZm9ybS5maWVsZHNldHM7bGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICA8bm92by1maWVsZHNldCAqbmdJZj1cImZpZWxkc2V0LmNvbnRyb2xzLmxlbmd0aFwiIFtpbmRleF09XCJpXCIgW2F1dG9Gb2N1c109XCJhdXRvRm9jdXNGaXJzdEZpZWxkXCIgW2ljb25dPVwiZmllbGRzZXQuaWNvblwiIFtjb250cm9sc109XCJmaWVsZHNldC5jb250cm9sc1wiIFt0aXRsZV09XCJmaWVsZHNldC50aXRsZVwiIFtmb3JtXT1cImZvcm1cIiBbaXNFbWJlZGRlZF09XCJmaWVsZHNldC5pc0VtYmVkZGVkXCIgW2lzSW5saW5lRW1iZWRkZWRdPVwiZmllbGRzZXQuaXNJbmxpbmVFbWJlZGRlZFwiIFtoaWRkZW5dPVwiZmllbGRzZXQuaGlkZGVuXCI+PC9ub3ZvLWZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICBwcm92aWRlcnM6IFtOb3ZvVGVtcGxhdGVTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0R5bmFtaWNGb3JtRWxlbWVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KClcbiAgY29udHJvbHM6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KClcbiAgZmllbGRzZXRzOiBBcnJheTxOb3ZvRmllbGRzZXQ+ID0gW107XG4gIEBJbnB1dCgpXG4gIGZvcm06IE5vdm9Gb3JtR3JvdXA7XG4gIEBJbnB1dCgpXG4gIGxheW91dDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBoaWRlTm9uUmVxdWlyZWRGaWVsZHM6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBhdXRvRm9jdXNGaXJzdEZpZWxkOiBib29sZWFuID0gZmFsc2U7XG4gIEBDb250ZW50Q2hpbGRyZW4oTm92b1RlbXBsYXRlKVxuICBjdXN0b21UZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOb3ZvVGVtcGxhdGU+O1xuICBwcml2YXRlIGZpZWxkc0FscmVhZHlIaWRkZW46IHN0cmluZ1tdO1xuXG4gIGFsbEZpZWxkc1JlcXVpcmVkID0gZmFsc2U7XG4gIGFsbEZpZWxkc05vdFJlcXVpcmVkID0gZmFsc2U7XG4gIHNob3dpbmdBbGxGaWVsZHMgPSBmYWxzZTtcbiAgc2hvd2luZ1JlcXVpcmVkRmllbGRzID0gdHJ1ZTtcbiAgbnVtQ29udHJvbHMgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSB0ZW1wbGF0ZXM6IE5vdm9UZW1wbGF0ZVNlcnZpY2UpIHsgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0ubGF5b3V0ID0gdGhpcy5sYXlvdXQ7XG5cbiAgICBpZiAoISh0aGlzLmZpZWxkc2V0cyAmJiB0aGlzLmZpZWxkc2V0cy5sZW5ndGgpICYmIHRoaXMuY29udHJvbHMgJiYgdGhpcy5jb250cm9scy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZmllbGRzZXRzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgY29udHJvbHM6IHRoaXMuY29udHJvbHMsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgICAgdGhpcy5udW1Db250cm9scyA9IHRoaXMuY29udHJvbHMubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAodGhpcy5maWVsZHNldHMpIHtcbiAgICAgIHRoaXMuZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICAgIHRoaXMubnVtQ29udHJvbHMgPSB0aGlzLm51bUNvbnRyb2xzICsgZmllbGRzZXQuY29udHJvbHMubGVuZ3RoO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWlyZWRGaWVsZHM6IEFycmF5PGFueT4gPSBbXTtcbiAgICBjb25zdCBub25SZXF1aXJlZEZpZWxkczogQXJyYXk8YW55PiA9IFtdO1xuICAgIHRoaXMuZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgIGlmIChjb250cm9sLnJlcXVpcmVkKSB7XG4gICAgICAgICAgcmVxdWlyZWRGaWVsZHMucHVzaChjb250cm9sKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub25SZXF1aXJlZEZpZWxkcy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLmFsbEZpZWxkc1JlcXVpcmVkID0gcmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSB0aGlzLm51bUNvbnRyb2xzO1xuICAgIHRoaXMuYWxsRmllbGRzTm90UmVxdWlyZWQgPSBub25SZXF1aXJlZEZpZWxkcy5sZW5ndGggPT09IHRoaXMubnVtQ29udHJvbHM7XG4gICAgaWYgKHRoaXMuYWxsRmllbGRzTm90UmVxdWlyZWQgJiYgdGhpcy5oaWRlTm9uUmVxdWlyZWRGaWVsZHMpIHtcbiAgICAgIHRoaXMuZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmZvcm0uZmllbGRzZXRzID0gWy4uLnRoaXMuZmllbGRzZXRzXTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5jdXN0b21UZW1wbGF0ZXMgJiYgdGhpcy5jdXN0b21UZW1wbGF0ZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmN1c3RvbVRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVzLmFkZEN1c3RvbSh0ZW1wbGF0ZS5uYW1lLCB0ZW1wbGF0ZS50ZW1wbGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2hvd0FsbEZpZWxkcygpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0uZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgIGNvbnN0IGN0bCA9IHRoaXMuZm9ybS5jb250cm9sc1tjb250cm9sLmtleV07XG4gICAgICAgIGlmICghdGhpcy5maWVsZHNBbHJlYWR5SGlkZGVuLmluY2x1ZGVzKGNvbnRyb2wua2V5KSkge1xuICAgICAgICAgIGN0bC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zaG93aW5nQWxsRmllbGRzID0gdHJ1ZTtcbiAgICB0aGlzLnNob3dpbmdSZXF1aXJlZEZpZWxkcyA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHNob3dPbmx5UmVxdWlyZWQoaGlkZVJlcXVpcmVkV2l0aFZhbHVlKTogdm9pZCB7XG4gICAgdGhpcy5maWVsZHNBbHJlYWR5SGlkZGVuID0gW107XG4gICAgdGhpcy5mb3JtLmZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgZmllbGRzZXQuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICBjb25zdCBjdGwgPSB0aGlzLmZvcm0uY29udHJvbHNbY29udHJvbC5rZXldO1xuXG4gICAgICAgIGlmIChjdGwuaGlkZGVuKSB7XG4gICAgICAgICAgdGhpcy5maWVsZHNBbHJlYWR5SGlkZGVuLnB1c2goY29udHJvbC5rZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGlkZSBhbnkgbm9uLXJlcXVpcmVkIGZpZWxkc1xuICAgICAgICBpZiAoIWNvbnRyb2wucmVxdWlyZWQpIHtcbiAgICAgICAgICBjdGwuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhpZGUgcmVxdWlyZWQgZmllbGRzIHRoYXQgaGF2ZSBiZWVuIHN1Y2Nlc3NmdWxseSBmaWxsZWQgb3V0XG4gICAgICAgIGlmIChcbiAgICAgICAgICBoaWRlUmVxdWlyZWRXaXRoVmFsdWUgJiZcbiAgICAgICAgICAhSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS52YWx1ZVtjb250cm9sLmtleV0pICYmXG4gICAgICAgICAgKCFjb250cm9sLmlzRW1wdHkgfHwgKGNvbnRyb2wuaXNFbXB0eSAmJiBjb250cm9sLmlzRW1wdHkoY3RsKSkpXG4gICAgICAgICkge1xuICAgICAgICAgIGN0bC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRG9uJ3QgaGlkZSBmaWVsZHMgd2l0aCBlcnJvcnNcbiAgICAgICAgaWYgKGN0bC5lcnJvcnMpIHtcbiAgICAgICAgICBjdGwuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2hvd2luZ0FsbEZpZWxkcyA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd2luZ1JlcXVpcmVkRmllbGRzID0gdHJ1ZTtcbiAgICB0aGlzLmZvcmNlVmFsaWRhdGlvbigpO1xuICB9XG5cbiAgZ2V0IHZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtID8gdGhpcy5mb3JtLnZhbHVlIDogbnVsbDtcbiAgfVxuXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0gPyB0aGlzLmZvcm0udmFsaWQgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVkVmFsdWVzKCk6IGFueSB7XG4gICAgbGV0IHJldCA9IG51bGw7XG4gICAgdGhpcy5mb3JtLmZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgZmllbGRzZXQuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5kaXJ0eSB8fCBjb250cm9sLmRpcnR5KSB7XG4gICAgICAgICAgaWYgKCFyZXQpIHtcbiAgICAgICAgICAgIHJldCA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXRbY29udHJvbC5rZXldID0gdGhpcy5mb3JtLnZhbHVlW2NvbnRyb2wua2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHB1YmxpYyBmb3JjZVZhbGlkYXRpb24oKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXModGhpcy5mb3JtLmNvbnRyb2xzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgY29udHJvbDogYW55ID0gdGhpcy5mb3JtLmNvbnRyb2xzW2tleV07XG4gICAgICBpZiAoY29udHJvbC5yZXF1aXJlZCAmJiBIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLnZhbHVlW2NvbnRyb2wua2V5XSkpIHtcbiAgICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19