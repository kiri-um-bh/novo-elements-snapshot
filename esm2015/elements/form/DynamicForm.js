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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1pY0Zvcm0uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9EeW5hbWljRm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLO0FBQ0wsT0FBTyxFQUFvQixTQUFTLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDN0ksT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE1BQU07QUFDTixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7O0lBb0JwQywwQ0FBMEw7OztJQUF4SCw2Q0FBNkIsNENBQUEseUJBQUE7SUFBekUsa0NBQWEsdUJBQUE7OztJQUUvQiw4QkFDSTtJQUFBLGtDQUE0SDtJQUNoSSxpQkFBTTs7Ozs7O0lBRnFCLCtDQUFtQztJQUM1QyxlQUE0RDtJQUE1RCwyRkFBNEQsdUJBQUEscUJBQUE7OztJQUU5RSwyQkFBaUQ7SUFBQSxxQ0FBcUI7SUFBQSxpQkFBTTs7O0lBSmhGLDZCQUNJO0lBQUEsbUZBQ0k7SUFFSixtRkFBaUQ7SUFDckQsMEJBQWU7OztJQUpvRCxlQUEyQztJQUEzQyw2REFBMkM7SUFHckcsZUFBMkM7SUFBM0MsNkRBQTJDOzs7SUFxQzVDLG1DQUF3VDs7Ozs7O0lBQXhRLDRCQUFXLHlDQUFBLDBCQUFBLGtDQUFBLDRCQUFBLHFCQUFBLHNDQUFBLGtEQUFBLDhCQUFBOzs7SUFEL0QsNkJBQ0k7SUFBQSwwR0FBd1M7SUFDNVMsMEJBQWU7OztJQURJLGVBQWdDO0lBQWhDLGtEQUFnQzs7OztBQXJEbkUsTUFBTSxPQUFPLHlCQUF5Qjs7a0dB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LHNCQUFzQjsyREFBdEIsc0JBQXNCO29DQWFoQixZQUFZOzs7O2dPQWZsQixDQUFDLG1CQUFtQixDQUFDOztRQWIxQix5Q0FBaUQ7UUFDakQsOEJBQ0k7UUFBQSw4QkFDSTtRQUFBLGtCQUFnQztRQUNoQyxxQkFBbUM7UUFDdkMsaUJBQVM7UUFDVCwrQkFDSTtRQUFBLHlGQUNJO1FBRVIsaUJBQU87UUFDWCxpQkFBTTs7UUFMc0IsZUFBa0I7UUFBbEIsb0NBQWtCO1FBQ3hCLGVBQXFEO1FBQXJELDRDQUFxRDt3SkEvQnRFLG1CQUFtQjtrREF1Q25CLHNCQUFzQjtjQWxCbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztLQWFQO2dCQUNILFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQ2pDOytGQUdDLFFBQVE7a0JBRFAsS0FBSztZQUdOLFNBQVM7a0JBRFIsS0FBSztZQUdOLElBQUk7a0JBREgsS0FBSztZQUdOLE1BQU07a0JBREwsS0FBSztZQUdOLHFCQUFxQjtrQkFEcEIsS0FBSztZQUdOLG1CQUFtQjtrQkFEbEIsS0FBSztZQUdOLGVBQWU7a0JBRGQsZUFBZTttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFF1ZXJ5TGlzdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b1RlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlL05vdm9UZW1wbGF0ZVNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b1RlbXBsYXRlIH0gZnJvbSAnLi4vY29tbW9uL25vdm8tdGVtcGxhdGUvbm92by10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuLy8gQXBwXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9GaWVsZHNldCwgTm92b0Zvcm1Hcm91cCB9IGZyb20gJy4vRm9ybUludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWZpZWxkc2V0LWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoNj48aSBbY2xhc3NdPVwiaWNvbiB8fCAnYmhpLXNlY3Rpb24nXCI+PC9pPnt7dGl0bGV9fTwvaDY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0ZpZWxkc2V0SGVhZGVyRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1maWVsZHNldCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWZpZWxkc2V0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPG5vdm8tZmllbGRzZXQtaGVhZGVyIFtpY29uXT1cImljb25cIiBbdGl0bGVdPVwidGl0bGVcIiAqbmdJZj1cInRpdGxlXCIgW2NsYXNzLmVtYmVkZGVkXT1cImlzRW1iZWRkZWRcIiBbY2xhc3MuaW5saW5lLWVtYmVkZGVkXT1cImlzSW5saW5lRW1iZWRkZWRcIiBbY2xhc3MuaGlkZGVuXT1cImhpZGRlblwiPjwvbm92by1maWVsZHNldC1oZWFkZXI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb250cm9sIG9mIGNvbnRyb2xzO2xldCBjb250cm9sSW5kZXggPSBpbmRleDtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1mb3JtLXJvd1wiIFtjbGFzcy5kaXNhYmxlZF09XCJjb250cm9sLmRpc2FibGVkXCIgKm5nSWY9XCJjb250cm9sLl9fdHlwZSAhPT0gJ0dyb3VwZWRDb250cm9sJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bm92by1jb250cm9sIFthdXRvRm9jdXNdPVwiYXV0b0ZvY3VzICYmIGluZGV4ID09PSAwICYmIGNvbnRyb2xJbmRleCA9PT0gMFwiIFtjb250cm9sXT1cImNvbnRyb2xcIiBbZm9ybV09XCJmb3JtXCI+PC9ub3ZvLWNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNvbnRyb2wuX190eXBlID09PSAnR3JvdXBlZENvbnRyb2wnXCI+VE9ETyAtIEdyb3VwZWRDb250cm9sPC9kaXY+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0ZpZWxkc2V0RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGNvbnRyb2xzOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpXG4gIGZvcm06IGFueTtcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpbmRleDogbnVtYmVyO1xuICBASW5wdXQoKVxuICBhdXRvRm9jdXM6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGlzRW1iZWRkZWQgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgaXNJbmxpbmVFbWJlZGRlZCA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBoaWRkZW4gPSBmYWxzZTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1keW5hbWljLWZvcm0nLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bm92by1jb250cm9sLXRlbXBsYXRlcz48L25vdm8tY29udHJvbC10ZW1wbGF0ZXM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImZvcm0tdGl0bGVcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZm9ybS1zdWJ0aXRsZVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJub3ZvLWZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZHNldCBvZiBmb3JtLmZpZWxkc2V0cztsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLWZpZWxkc2V0ICpuZ0lmPVwiZmllbGRzZXQuY29udHJvbHMubGVuZ3RoXCIgW2luZGV4XT1cImlcIiBbYXV0b0ZvY3VzXT1cImF1dG9Gb2N1c0ZpcnN0RmllbGRcIiBbaWNvbl09XCJmaWVsZHNldC5pY29uXCIgW2NvbnRyb2xzXT1cImZpZWxkc2V0LmNvbnRyb2xzXCIgW3RpdGxlXT1cImZpZWxkc2V0LnRpdGxlXCIgW2Zvcm1dPVwiZm9ybVwiIFtpc0VtYmVkZGVkXT1cImZpZWxkc2V0LmlzRW1iZWRkZWRcIiBbaXNJbmxpbmVFbWJlZGRlZF09XCJmaWVsZHNldC5pc0lubGluZUVtYmVkZGVkXCIgW2hpZGRlbl09XCJmaWVsZHNldC5oaWRkZW5cIj48L25vdm8tZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gIHByb3ZpZGVyczogW05vdm9UZW1wbGF0ZVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRHluYW1pY0Zvcm1FbGVtZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKVxuICBjb250cm9sczogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKVxuICBmaWVsZHNldHM6IEFycmF5PE5vdm9GaWVsZHNldD4gPSBbXTtcbiAgQElucHV0KClcbiAgZm9ybTogTm92b0Zvcm1Hcm91cDtcbiAgQElucHV0KClcbiAgbGF5b3V0OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGhpZGVOb25SZXF1aXJlZEZpZWxkczogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIGF1dG9Gb2N1c0ZpcnN0RmllbGQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQENvbnRlbnRDaGlsZHJlbihOb3ZvVGVtcGxhdGUpXG4gIGN1c3RvbVRlbXBsYXRlczogUXVlcnlMaXN0PE5vdm9UZW1wbGF0ZT47XG4gIHByaXZhdGUgZmllbGRzQWxyZWFkeUhpZGRlbjogc3RyaW5nW107XG5cbiAgYWxsRmllbGRzUmVxdWlyZWQgPSBmYWxzZTtcbiAgYWxsRmllbGRzTm90UmVxdWlyZWQgPSBmYWxzZTtcbiAgc2hvd2luZ0FsbEZpZWxkcyA9IGZhbHNlO1xuICBzaG93aW5nUmVxdWlyZWRGaWVsZHMgPSB0cnVlO1xuICBudW1Db250cm9scyA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHRlbXBsYXRlczogTm92b1RlbXBsYXRlU2VydmljZSkgeyB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuZm9ybS5sYXlvdXQgPSB0aGlzLmxheW91dDtcblxuICAgIGlmICghKHRoaXMuZmllbGRzZXRzICYmIHRoaXMuZmllbGRzZXRzLmxlbmd0aCkgJiYgdGhpcy5jb250cm9scyAmJiB0aGlzLmNvbnRyb2xzLmxlbmd0aCkge1xuICAgICAgdGhpcy5maWVsZHNldHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBjb250cm9sczogdGhpcy5jb250cm9scyxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgICB0aGlzLm51bUNvbnRyb2xzID0gdGhpcy5jb250cm9scy5sZW5ndGg7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZpZWxkc2V0cykge1xuICAgICAgdGhpcy5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgICAgdGhpcy5udW1Db250cm9scyA9IHRoaXMubnVtQ29udHJvbHMgKyBmaWVsZHNldC5jb250cm9scy5sZW5ndGg7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1aXJlZEZpZWxkczogQXJyYXk8YW55PiA9IFtdO1xuICAgIGNvbnN0IG5vblJlcXVpcmVkRmllbGRzOiBBcnJheTxhbnk+ID0gW107XG4gICAgdGhpcy5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgaWYgKGNvbnRyb2wucmVxdWlyZWQpIHtcbiAgICAgICAgICByZXF1aXJlZEZpZWxkcy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vblJlcXVpcmVkRmllbGRzLnB1c2goY29udHJvbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuYWxsRmllbGRzUmVxdWlyZWQgPSByZXF1aXJlZEZpZWxkcy5sZW5ndGggPT09IHRoaXMubnVtQ29udHJvbHM7XG4gICAgdGhpcy5hbGxGaWVsZHNOb3RSZXF1aXJlZCA9IG5vblJlcXVpcmVkRmllbGRzLmxlbmd0aCA9PT0gdGhpcy5udW1Db250cm9scztcbiAgICBpZiAodGhpcy5hbGxGaWVsZHNOb3RSZXF1aXJlZCAmJiB0aGlzLmhpZGVOb25SZXF1aXJlZEZpZWxkcykge1xuICAgICAgdGhpcy5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgICAgZmllbGRzZXQuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuZm9ybS5maWVsZHNldHMgPSBbLi4udGhpcy5maWVsZHNldHNdO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLmN1c3RvbVRlbXBsYXRlcyAmJiB0aGlzLmN1c3RvbVRlbXBsYXRlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3VzdG9tVGVtcGxhdGVzLmZvckVhY2goKHRlbXBsYXRlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuYWRkQ3VzdG9tKHRlbXBsYXRlLm5hbWUsIHRlbXBsYXRlLnRlbXBsYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzaG93QWxsRmllbGRzKCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybS5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgY29uc3QgY3RsID0gdGhpcy5mb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XTtcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkc0FscmVhZHlIaWRkZW4uaW5jbHVkZXMoY29udHJvbC5rZXkpKSB7XG4gICAgICAgICAgY3RsLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNob3dpbmdBbGxGaWVsZHMgPSB0cnVlO1xuICAgIHRoaXMuc2hvd2luZ1JlcXVpcmVkRmllbGRzID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgc2hvd09ubHlSZXF1aXJlZChoaWRlUmVxdWlyZWRXaXRoVmFsdWUpOiB2b2lkIHtcbiAgICB0aGlzLmZpZWxkc0FscmVhZHlIaWRkZW4gPSBbXTtcbiAgICB0aGlzLmZvcm0uZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgIGNvbnN0IGN0bCA9IHRoaXMuZm9ybS5jb250cm9sc1tjb250cm9sLmtleV07XG5cbiAgICAgICAgaWYgKGN0bC5oaWRkZW4pIHtcbiAgICAgICAgICB0aGlzLmZpZWxkc0FscmVhZHlIaWRkZW4ucHVzaChjb250cm9sLmtleSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIaWRlIGFueSBub24tcmVxdWlyZWQgZmllbGRzXG4gICAgICAgIGlmICghY29udHJvbC5yZXF1aXJlZCkge1xuICAgICAgICAgIGN0bC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGlkZSByZXF1aXJlZCBmaWVsZHMgdGhhdCBoYXZlIGJlZW4gc3VjY2Vzc2Z1bGx5IGZpbGxlZCBvdXRcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGhpZGVSZXF1aXJlZFdpdGhWYWx1ZSAmJlxuICAgICAgICAgICFIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLnZhbHVlW2NvbnRyb2wua2V5XSkgJiZcbiAgICAgICAgICAoIWNvbnRyb2wuaXNFbXB0eSB8fCAoY29udHJvbC5pc0VtcHR5ICYmIGNvbnRyb2wuaXNFbXB0eShjdGwpKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY3RsLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEb24ndCBoaWRlIGZpZWxkcyB3aXRoIGVycm9yc1xuICAgICAgICBpZiAoY3RsLmVycm9ycykge1xuICAgICAgICAgIGN0bC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zaG93aW5nQWxsRmllbGRzID0gZmFsc2U7XG4gICAgdGhpcy5zaG93aW5nUmVxdWlyZWRGaWVsZHMgPSB0cnVlO1xuICAgIHRoaXMuZm9yY2VWYWxpZGF0aW9uKCk7XG4gIH1cblxuICBnZXQgdmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0gPyB0aGlzLmZvcm0udmFsdWUgOiBudWxsO1xuICB9XG5cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybSA/IHRoaXMuZm9ybS52YWxpZCA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZWRWYWx1ZXMoKTogYW55IHtcbiAgICBsZXQgcmV0ID0gbnVsbDtcbiAgICB0aGlzLmZvcm0uZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmRpcnR5IHx8IGNvbnRyb2wuZGlydHkpIHtcbiAgICAgICAgICBpZiAoIXJldCkge1xuICAgICAgICAgICAgcmV0ID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldFtjb250cm9sLmtleV0gPSB0aGlzLmZvcm0udmFsdWVbY29udHJvbC5rZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHVibGljIGZvcmNlVmFsaWRhdGlvbigpOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmZvcm0uY29udHJvbHMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBjb250cm9sOiBhbnkgPSB0aGlzLmZvcm0uY29udHJvbHNba2V5XTtcbiAgICAgIGlmIChjb250cm9sLnJlcXVpcmVkICYmIEhlbHBlcnMuaXNCbGFuayh0aGlzLmZvcm0udmFsdWVbY29udHJvbC5rZXldKSkge1xuICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=