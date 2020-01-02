/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/DynamicForm.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG
import { Component, Input, ElementRef, ContentChildren, QueryList, } from '@angular/core';
// App
import { Helpers } from './../../utils/Helpers';
import { NovoTemplateService } from '../../services/template/NovoTemplateService';
import { NovoTemplate } from '../common/novo-template/novo-template.directive';
export class NovoFieldsetHeaderElement {
}
NovoFieldsetHeaderElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-fieldset-header',
                template: `
        <h6><i [class]="icon || 'bhi-section'"></i>{{title}}</h6>
    `
            }] }
];
NovoFieldsetHeaderElement.propDecorators = {
    title: [{ type: Input }],
    icon: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoFieldsetHeaderElement.prototype.title;
    /** @type {?} */
    NovoFieldsetHeaderElement.prototype.icon;
}
export class NovoFieldsetElement {
    constructor() {
        this.controls = [];
    }
}
NovoFieldsetElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-fieldset',
                template: `
        <div class="novo-fieldset-container">
            <novo-fieldset-header [icon]="icon" [title]="title" *ngIf="title"></novo-fieldset-header>
            <ng-container *ngFor="let control of controls;let controlIndex = index;">
                <div class="novo-form-row" [class.disabled]="control.disabled" *ngIf="control.__type !== 'GroupedControl'">
                    <novo-control [autoFocus]="autoFocus && index === 0 && controlIndex === 0" [control]="control" [form]="form"></novo-control>
                </div>
                <div *ngIf="control.__type === 'GroupedControl'">TODO - GroupedControl</div>
            </ng-container>
        </div>
    `
            }] }
];
NovoFieldsetElement.propDecorators = {
    controls: [{ type: Input }],
    form: [{ type: Input }],
    title: [{ type: Input }],
    icon: [{ type: Input }],
    index: [{ type: Input }],
    autoFocus: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoFieldsetElement.prototype.controls;
    /** @type {?} */
    NovoFieldsetElement.prototype.form;
    /** @type {?} */
    NovoFieldsetElement.prototype.title;
    /** @type {?} */
    NovoFieldsetElement.prototype.icon;
    /** @type {?} */
    NovoFieldsetElement.prototype.index;
    /** @type {?} */
    NovoFieldsetElement.prototype.autoFocus;
}
export class NovoDynamicFormElement {
    /**
     * @param {?} element
     * @param {?} templates
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ngOnChanges();
    }
    /**
     * @param {?=} changes
     * @return {?}
     */
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
            this.fieldsets.forEach((/**
             * @param {?} fieldset
             * @return {?}
             */
            (fieldset) => {
                this.numControls = this.numControls + fieldset.controls.length;
            }));
        }
        /** @type {?} */
        let requiredFields = [];
        /** @type {?} */
        let nonRequiredFields = [];
        this.fieldsets.forEach((/**
         * @param {?} fieldset
         * @return {?}
         */
        (fieldset) => {
            fieldset.controls.forEach((/**
             * @param {?} control
             * @return {?}
             */
            (control) => {
                if (control.required) {
                    requiredFields.push(control);
                }
                else {
                    nonRequiredFields.push(control);
                }
            }));
        }));
        this.allFieldsRequired = requiredFields.length === this.numControls;
        this.allFieldsNotRequired = nonRequiredFields.length === this.numControls;
        if (this.allFieldsNotRequired && this.hideNonRequiredFields) {
            this.fieldsets.forEach((/**
             * @param {?} fieldset
             * @return {?}
             */
            (fieldset) => {
                fieldset.controls.forEach((/**
                 * @param {?} control
                 * @return {?}
                 */
                (control) => {
                    if (!control.forceHide) {
                        this.form.controls[control.key].hidden = false;
                    }
                }));
            }));
        }
        this.form.fieldsets = [...this.fieldsets];
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.customTemplates && this.customTemplates.length) {
            this.customTemplates.forEach((/**
             * @param {?} template
             * @return {?}
             */
            (template) => {
                this.templates.addCustom(template.name, template.template);
            }));
        }
    }
    /**
     * @return {?}
     */
    showAllFields() {
        this.form.fieldsets.forEach((/**
         * @param {?} fieldset
         * @return {?}
         */
        (fieldset) => {
            fieldset.controls.forEach((/**
             * @param {?} control
             * @return {?}
             */
            (control) => {
                /** @type {?} */
                const ctl = this.form.controls[control.key];
                if (!this.fieldsAlreadyHidden.includes(control.key) && !ctl.forceHide) {
                    ctl.hidden = false;
                }
            }));
        }));
        this.showingAllFields = true;
        this.showingRequiredFields = false;
    }
    /**
     * @param {?} hideRequiredWithValue
     * @return {?}
     */
    showOnlyRequired(hideRequiredWithValue) {
        this.fieldsAlreadyHidden = [];
        this.form.fieldsets.forEach((/**
         * @param {?} fieldset
         * @return {?}
         */
        (fieldset) => {
            fieldset.controls.forEach((/**
             * @param {?} control
             * @return {?}
             */
            (control) => {
                /** @type {?} */
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
                if (ctl.errors && !ctl.forceHide) {
                    ctl.hidden = false;
                }
            }));
        }));
        this.showingAllFields = false;
        this.showingRequiredFields = true;
        this.forceValidation();
    }
    /**
     * @return {?}
     */
    get values() {
        return this.form ? this.form.value : null;
    }
    /**
     * @return {?}
     */
    get isValid() {
        return this.form ? this.form.valid : false;
    }
    /**
     * @return {?}
     */
    updatedValues() {
        /** @type {?} */
        let ret = null;
        this.form.fieldsets.forEach((/**
         * @param {?} fieldset
         * @return {?}
         */
        (fieldset) => {
            fieldset.controls.forEach((/**
             * @param {?} control
             * @return {?}
             */
            (control) => {
                if (this.form.controls[control.key].dirty || control.dirty) {
                    if (!ret) {
                        ret = {};
                    }
                    ret[control.key] = this.form.value[control.key];
                }
            }));
        }));
        return ret;
    }
    /**
     * @return {?}
     */
    forceValidation() {
        Object.keys(this.form.controls).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            /** @type {?} */
            let control = this.form.controls[key];
            if (control.required && Helpers.isBlank(this.form.value[control.key])) {
                control.markAsDirty();
                control.markAsTouched();
            }
        }));
    }
}
NovoDynamicFormElement.decorators = [
    { type: Component, args: [{
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
                    <novo-fieldset *ngIf="fieldset.controls.length" [index]="i" [autoFocus]="autoFocusFirstField" [icon]="fieldset.icon" [controls]="fieldset.controls" [title]="fieldset.title" [form]="form"></novo-fieldset>
                </ng-container>
            </form>
        </div>
    `,
                providers: [NovoTemplateService]
            }] }
];
/** @nocollapse */
NovoDynamicFormElement.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoTemplateService }
];
NovoDynamicFormElement.propDecorators = {
    controls: [{ type: Input }],
    fieldsets: [{ type: Input }],
    form: [{ type: Input }],
    layout: [{ type: Input }],
    hideNonRequiredFields: [{ type: Input }],
    autoFocusFirstField: [{ type: Input }],
    customTemplates: [{ type: ContentChildren, args: [NovoTemplate,] }]
};
if (false) {
    /** @type {?} */
    NovoDynamicFormElement.prototype.controls;
    /** @type {?} */
    NovoDynamicFormElement.prototype.fieldsets;
    /** @type {?} */
    NovoDynamicFormElement.prototype.form;
    /** @type {?} */
    NovoDynamicFormElement.prototype.layout;
    /** @type {?} */
    NovoDynamicFormElement.prototype.hideNonRequiredFields;
    /** @type {?} */
    NovoDynamicFormElement.prototype.autoFocusFirstField;
    /** @type {?} */
    NovoDynamicFormElement.prototype.customTemplates;
    /**
     * @type {?}
     * @private
     */
    NovoDynamicFormElement.prototype.fieldsAlreadyHidden;
    /** @type {?} */
    NovoDynamicFormElement.prototype.allFieldsRequired;
    /** @type {?} */
    NovoDynamicFormElement.prototype.allFieldsNotRequired;
    /** @type {?} */
    NovoDynamicFormElement.prototype.showingAllFields;
    /** @type {?} */
    NovoDynamicFormElement.prototype.showingRequiredFields;
    /** @type {?} */
    NovoDynamicFormElement.prototype.numControls;
    /**
     * @type {?}
     * @private
     */
    NovoDynamicFormElement.prototype.element;
    /**
     * @type {?}
     * @private
     */
    NovoDynamicFormElement.prototype.templates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1pY0Zvcm0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9EeW5hbWljRm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFJTCxVQUFVLEVBQ1YsZUFBZSxFQUNmLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWhELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQVEvRSxNQUFNLE9BQU8seUJBQXlCOzs7WUFOckMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7S0FFUDthQUNKOzs7b0JBRUUsS0FBSzttQkFFTCxLQUFLOzs7O0lBRk4sMENBQ2M7O0lBQ2QseUNBQ2E7O0FBaUJmLE1BQU0sT0FBTyxtQkFBbUI7SUFkaEM7UUFnQkUsYUFBUSxHQUFlLEVBQUUsQ0FBQztJQVc1QixDQUFDOzs7WUEzQkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7S0FVUDthQUNKOzs7dUJBRUUsS0FBSzttQkFFTCxLQUFLO29CQUVMLEtBQUs7bUJBRUwsS0FBSztvQkFFTCxLQUFLO3dCQUVMLEtBQUs7Ozs7SUFWTix1Q0FDMEI7O0lBQzFCLG1DQUNVOztJQUNWLG9DQUNjOztJQUNkLG1DQUNhOztJQUNiLG9DQUNjOztJQUNkLHdDQUNtQjs7QUFxQnJCLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBdUJqQyxZQUFvQixPQUFtQixFQUFVLFNBQThCO1FBQTNELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFxQjtRQXJC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TyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN0QixPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDekI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQS9LRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0tBYVA7Z0JBQ0gsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDakM7Ozs7WUF0RUMsVUFBVTtZQVFILG1CQUFtQjs7O3VCQWdFekIsS0FBSzt3QkFFTCxLQUFLO21CQUVMLEtBQUs7cUJBRUwsS0FBSztvQ0FFTCxLQUFLO2tDQUVMLEtBQUs7OEJBRUwsZUFBZSxTQUFDLFlBQVk7Ozs7SUFaN0IsMENBQzBCOztJQUMxQiwyQ0FDb0M7O0lBQ3BDLHNDQUNvQjs7SUFDcEIsd0NBQ2U7O0lBQ2YsdURBQ3NDOztJQUN0QyxxREFDcUM7O0lBQ3JDLGlEQUN5Qzs7Ozs7SUFDekMscURBQXNDOztJQUV0QyxtREFBMEI7O0lBQzFCLHNEQUE2Qjs7SUFDN0Isa0RBQXlCOztJQUN6Qix1REFBNkI7O0lBQzdCLDZDQUFnQjs7Ozs7SUFFSix5Q0FBMkI7Ozs7O0lBQUUsMkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBFbGVtZW50UmVmLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBcHBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0ZpZWxkc2V0LCBOb3ZvRm9ybUdyb3VwIH0gZnJvbSAnLi9Gb3JtSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOb3ZvVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVtcGxhdGUvTm92b1RlbXBsYXRlU2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvVGVtcGxhdGUgfSBmcm9tICcuLi9jb21tb24vbm92by10ZW1wbGF0ZS9ub3ZvLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZmllbGRzZXQtaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGg2PjxpIFtjbGFzc109XCJpY29uIHx8ICdiaGktc2VjdGlvbidcIj48L2k+e3t0aXRsZX19PC9oNj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRmllbGRzZXRIZWFkZXJFbGVtZW50IHtcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWZpZWxkc2V0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZmllbGRzZXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bm92by1maWVsZHNldC1oZWFkZXIgW2ljb25dPVwiaWNvblwiIFt0aXRsZV09XCJ0aXRsZVwiICpuZ0lmPVwidGl0bGVcIj48L25vdm8tZmllbGRzZXQtaGVhZGVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29udHJvbCBvZiBjb250cm9scztsZXQgY29udHJvbEluZGV4ID0gaW5kZXg7XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZm9ybS1yb3dcIiBbY2xhc3MuZGlzYWJsZWRdPVwiY29udHJvbC5kaXNhYmxlZFwiICpuZ0lmPVwiY29udHJvbC5fX3R5cGUgIT09ICdHcm91cGVkQ29udHJvbCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5vdm8tY29udHJvbCBbYXV0b0ZvY3VzXT1cImF1dG9Gb2N1cyAmJiBpbmRleCA9PT0gMCAmJiBjb250cm9sSW5kZXggPT09IDBcIiBbY29udHJvbF09XCJjb250cm9sXCIgW2Zvcm1dPVwiZm9ybVwiPjwvbm92by1jb250cm9sPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjb250cm9sLl9fdHlwZSA9PT0gJ0dyb3VwZWRDb250cm9sJ1wiPlRPRE8gLSBHcm91cGVkQ29udHJvbDwvZGl2PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9GaWVsZHNldEVsZW1lbnQge1xuICBASW5wdXQoKVxuICBjb250cm9sczogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKVxuICBmb3JtOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcbiAgQElucHV0KClcbiAgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KClcbiAgYXV0b0ZvY3VzOiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWR5bmFtaWMtZm9ybScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxub3ZvLWNvbnRyb2wtdGVtcGxhdGVzPjwvbm92by1jb250cm9sLXRlbXBsYXRlcz5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZm9ybS10aXRsZVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJmb3JtLXN1YnRpdGxlXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cIm5vdm8tZm9ybVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkc2V0IG9mIGZvcm0uZmllbGRzZXRzO2xldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5vdm8tZmllbGRzZXQgKm5nSWY9XCJmaWVsZHNldC5jb250cm9scy5sZW5ndGhcIiBbaW5kZXhdPVwiaVwiIFthdXRvRm9jdXNdPVwiYXV0b0ZvY3VzRmlyc3RGaWVsZFwiIFtpY29uXT1cImZpZWxkc2V0Lmljb25cIiBbY29udHJvbHNdPVwiZmllbGRzZXQuY29udHJvbHNcIiBbdGl0bGVdPVwiZmllbGRzZXQudGl0bGVcIiBbZm9ybV09XCJmb3JtXCI+PC9ub3ZvLWZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICBwcm92aWRlcnM6IFtOb3ZvVGVtcGxhdGVTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0R5bmFtaWNGb3JtRWxlbWVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KClcbiAgY29udHJvbHM6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KClcbiAgZmllbGRzZXRzOiBBcnJheTxOb3ZvRmllbGRzZXQ+ID0gW107XG4gIEBJbnB1dCgpXG4gIGZvcm06IE5vdm9Gb3JtR3JvdXA7XG4gIEBJbnB1dCgpXG4gIGxheW91dDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBoaWRlTm9uUmVxdWlyZWRGaWVsZHM6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBhdXRvRm9jdXNGaXJzdEZpZWxkOiBib29sZWFuID0gZmFsc2U7XG4gIEBDb250ZW50Q2hpbGRyZW4oTm92b1RlbXBsYXRlKVxuICBjdXN0b21UZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOb3ZvVGVtcGxhdGU+O1xuICBwcml2YXRlIGZpZWxkc0FscmVhZHlIaWRkZW46IHN0cmluZ1tdO1xuXG4gIGFsbEZpZWxkc1JlcXVpcmVkID0gZmFsc2U7XG4gIGFsbEZpZWxkc05vdFJlcXVpcmVkID0gZmFsc2U7XG4gIHNob3dpbmdBbGxGaWVsZHMgPSBmYWxzZTtcbiAgc2hvd2luZ1JlcXVpcmVkRmllbGRzID0gdHJ1ZTtcbiAgbnVtQ29udHJvbHMgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSB0ZW1wbGF0ZXM6IE5vdm9UZW1wbGF0ZVNlcnZpY2UpIHt9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuZm9ybS5sYXlvdXQgPSB0aGlzLmxheW91dDtcblxuICAgIGlmICghKHRoaXMuZmllbGRzZXRzICYmIHRoaXMuZmllbGRzZXRzLmxlbmd0aCkgJiYgdGhpcy5jb250cm9scyAmJiB0aGlzLmNvbnRyb2xzLmxlbmd0aCkge1xuICAgICAgdGhpcy5maWVsZHNldHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBjb250cm9sczogdGhpcy5jb250cm9scyxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgICB0aGlzLm51bUNvbnRyb2xzID0gdGhpcy5jb250cm9scy5sZW5ndGg7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZpZWxkc2V0cykge1xuICAgICAgdGhpcy5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgICAgdGhpcy5udW1Db250cm9scyA9IHRoaXMubnVtQ29udHJvbHMgKyBmaWVsZHNldC5jb250cm9scy5sZW5ndGg7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgcmVxdWlyZWRGaWVsZHM6IEFycmF5PGFueT4gPSBbXTtcbiAgICBsZXQgbm9uUmVxdWlyZWRGaWVsZHM6IEFycmF5PGFueT4gPSBbXTtcbiAgICB0aGlzLmZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgZmllbGRzZXQuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICBpZiAoY29udHJvbC5yZXF1aXJlZCkge1xuICAgICAgICAgIHJlcXVpcmVkRmllbGRzLnB1c2goY29udHJvbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9uUmVxdWlyZWRGaWVsZHMucHVzaChjb250cm9sKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5hbGxGaWVsZHNSZXF1aXJlZCA9IHJlcXVpcmVkRmllbGRzLmxlbmd0aCA9PT0gdGhpcy5udW1Db250cm9scztcbiAgICB0aGlzLmFsbEZpZWxkc05vdFJlcXVpcmVkID0gbm9uUmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSB0aGlzLm51bUNvbnRyb2xzO1xuICAgIGlmICh0aGlzLmFsbEZpZWxkc05vdFJlcXVpcmVkICYmIHRoaXMuaGlkZU5vblJlcXVpcmVkRmllbGRzKSB7XG4gICAgICB0aGlzLmZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgICAgaWYgKCFjb250cm9sLmZvcmNlSGlkZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuZm9ybS5maWVsZHNldHMgPSBbLi4udGhpcy5maWVsZHNldHNdO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLmN1c3RvbVRlbXBsYXRlcyAmJiB0aGlzLmN1c3RvbVRlbXBsYXRlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3VzdG9tVGVtcGxhdGVzLmZvckVhY2goKHRlbXBsYXRlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuYWRkQ3VzdG9tKHRlbXBsYXRlLm5hbWUsIHRlbXBsYXRlLnRlbXBsYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzaG93QWxsRmllbGRzKCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybS5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgY29uc3QgY3RsID0gdGhpcy5mb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XTtcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkc0FscmVhZHlIaWRkZW4uaW5jbHVkZXMoY29udHJvbC5rZXkpICYmICFjdGwuZm9yY2VIaWRlKSB7XG4gICAgICAgICAgY3RsLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNob3dpbmdBbGxGaWVsZHMgPSB0cnVlO1xuICAgIHRoaXMuc2hvd2luZ1JlcXVpcmVkRmllbGRzID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgc2hvd09ubHlSZXF1aXJlZChoaWRlUmVxdWlyZWRXaXRoVmFsdWUpOiB2b2lkIHtcbiAgICB0aGlzLmZpZWxkc0FscmVhZHlIaWRkZW4gPSBbXTtcbiAgICB0aGlzLmZvcm0uZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgIGNvbnN0IGN0bCA9IHRoaXMuZm9ybS5jb250cm9sc1tjb250cm9sLmtleV07XG5cbiAgICAgICAgaWYgKGN0bC5oaWRkZW4pIHtcbiAgICAgICAgICB0aGlzLmZpZWxkc0FscmVhZHlIaWRkZW4ucHVzaChjb250cm9sLmtleSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIaWRlIGFueSBub24tcmVxdWlyZWQgZmllbGRzXG4gICAgICAgIGlmICghY29udHJvbC5yZXF1aXJlZCkge1xuICAgICAgICAgIGN0bC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGlkZSByZXF1aXJlZCBmaWVsZHMgdGhhdCBoYXZlIGJlZW4gc3VjY2Vzc2Z1bGx5IGZpbGxlZCBvdXRcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGhpZGVSZXF1aXJlZFdpdGhWYWx1ZSAmJlxuICAgICAgICAgICFIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLnZhbHVlW2NvbnRyb2wua2V5XSkgJiZcbiAgICAgICAgICAoIWNvbnRyb2wuaXNFbXB0eSB8fCAoY29udHJvbC5pc0VtcHR5ICYmIGNvbnRyb2wuaXNFbXB0eShjdGwpKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY3RsLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEb24ndCBoaWRlIGZpZWxkcyB3aXRoIGVycm9yc1xuICAgICAgICBpZiAoY3RsLmVycm9ycyAmJiAhY3RsLmZvcmNlSGlkZSkge1xuICAgICAgICAgIGN0bC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zaG93aW5nQWxsRmllbGRzID0gZmFsc2U7XG4gICAgdGhpcy5zaG93aW5nUmVxdWlyZWRGaWVsZHMgPSB0cnVlO1xuICAgIHRoaXMuZm9yY2VWYWxpZGF0aW9uKCk7XG4gIH1cblxuICBnZXQgdmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0gPyB0aGlzLmZvcm0udmFsdWUgOiBudWxsO1xuICB9XG5cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybSA/IHRoaXMuZm9ybS52YWxpZCA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZWRWYWx1ZXMoKTogYW55IHtcbiAgICBsZXQgcmV0ID0gbnVsbDtcbiAgICB0aGlzLmZvcm0uZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmRpcnR5IHx8IGNvbnRyb2wuZGlydHkpIHtcbiAgICAgICAgICBpZiAoIXJldCkge1xuICAgICAgICAgICAgcmV0ID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldFtjb250cm9sLmtleV0gPSB0aGlzLmZvcm0udmFsdWVbY29udHJvbC5rZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHVibGljIGZvcmNlVmFsaWRhdGlvbigpOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmZvcm0uY29udHJvbHMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBsZXQgY29udHJvbDogYW55ID0gdGhpcy5mb3JtLmNvbnRyb2xzW2tleV07XG4gICAgICBpZiAoY29udHJvbC5yZXF1aXJlZCAmJiBIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLnZhbHVlW2NvbnRyb2wua2V5XSkpIHtcbiAgICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19