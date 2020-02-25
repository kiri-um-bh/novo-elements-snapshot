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
        this.isEmbedded = false;
        this.isInlineEmbedded = false;
    }
}
NovoFieldsetElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-fieldset',
                template: `
        <div class="novo-fieldset-container">
            <novo-fieldset-header [icon]="icon" [title]="title" *ngIf="title" [class.embedded]="isEmbedded" [class.inline-embedded]="isInlineEmbedded"></novo-fieldset-header>
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
    autoFocus: [{ type: Input }],
    isEmbedded: [{ type: Input }],
    isInlineEmbedded: [{ type: Input }]
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
    /** @type {?} */
    NovoFieldsetElement.prototype.isEmbedded;
    /** @type {?} */
    NovoFieldsetElement.prototype.isInlineEmbedded;
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
                    this.form.controls[control.key].hidden = false;
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
                if (!this.fieldsAlreadyHidden.includes(control.key)) {
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
                if (ctl.errors) {
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
                    <novo-fieldset *ngIf="fieldset.controls.length" [index]="i" [autoFocus]="autoFocusFirstField" [icon]="fieldset.icon" [controls]="fieldset.controls" [title]="fieldset.title" [form]="form" [isEmbedded]="fieldset.isEmbedded" [isInlineEmbedded]="fieldset.isInlineEmbedded"></novo-fieldset>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1pY0Zvcm0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9EeW5hbWljRm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFJTCxVQUFVLEVBQ1YsZUFBZSxFQUNmLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWhELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQVEvRSxNQUFNLE9BQU8seUJBQXlCOzs7WUFOckMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7S0FFUDthQUNKOzs7b0JBRUUsS0FBSzttQkFFTCxLQUFLOzs7O0lBRk4sMENBQ2M7O0lBQ2QseUNBQ2E7O0FBaUJmLE1BQU0sT0FBTyxtQkFBbUI7SUFkaEM7UUFnQkUsYUFBUSxHQUFlLEVBQUUsQ0FBQztRQVkxQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLHFCQUFnQixHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOzs7WUEvQkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7S0FVUDthQUNKOzs7dUJBRUUsS0FBSzttQkFFTCxLQUFLO29CQUVMLEtBQUs7bUJBRUwsS0FBSztvQkFFTCxLQUFLO3dCQUVMLEtBQUs7eUJBRUwsS0FBSzsrQkFFTCxLQUFLOzs7O0lBZE4sdUNBQzBCOztJQUMxQixtQ0FDVTs7SUFDVixvQ0FDYzs7SUFDZCxtQ0FDYTs7SUFDYixvQ0FDYzs7SUFDZCx3Q0FDbUI7O0lBQ25CLHlDQUNtQjs7SUFDbkIsK0NBQ3lCOztBQXFCM0IsTUFB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Z0JBQ3JFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdEIsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUE3S0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztLQWFQO2dCQUNILFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQ2pDOzs7O1lBMUVDLFVBQVU7WUFRSCxtQkFBbUI7Ozt1QkFvRXpCLEtBQUs7d0JBRUwsS0FBSzttQkFFTCxLQUFLO3FCQUVMLEtBQUs7b0NBRUwsS0FBSztrQ0FFTCxLQUFLOzhCQUVMLGVBQWUsU0FBQyxZQUFZOzs7O0lBWjdCLDBDQUMwQjs7SUFDMUIsMkNBQ29DOztJQUNwQyxzQ0FDb0I7O0lBQ3BCLHdDQUNlOztJQUNmLHVEQUNzQzs7SUFDdEMscURBQ3FDOztJQUNyQyxpREFDeUM7Ozs7O0lBQ3pDLHFEQUFzQzs7SUFFdEMsbURBQTBCOztJQUMxQixzREFBNkI7O0lBQzdCLGtEQUF5Qjs7SUFDekIsdURBQTZCOztJQUM3Qiw2Q0FBZ0I7Ozs7O0lBRUoseUNBQTJCOzs7OztJQUFFLDJDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgRWxlbWVudFJlZixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIEFmdGVyQ29udGVudEluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQXBwXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9GaWVsZHNldCwgTm92b0Zvcm1Hcm91cCB9IGZyb20gJy4vRm9ybUludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm92b1RlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlL05vdm9UZW1wbGF0ZVNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b1RlbXBsYXRlIH0gZnJvbSAnLi4vY29tbW9uL25vdm8tdGVtcGxhdGUvbm92by10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWZpZWxkc2V0LWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoNj48aSBbY2xhc3NdPVwiaWNvbiB8fCAnYmhpLXNlY3Rpb24nXCI+PC9pPnt7dGl0bGV9fTwvaDY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0ZpZWxkc2V0SGVhZGVyRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1maWVsZHNldCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWZpZWxkc2V0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPG5vdm8tZmllbGRzZXQtaGVhZGVyIFtpY29uXT1cImljb25cIiBbdGl0bGVdPVwidGl0bGVcIiAqbmdJZj1cInRpdGxlXCIgW2NsYXNzLmVtYmVkZGVkXT1cImlzRW1iZWRkZWRcIiBbY2xhc3MuaW5saW5lLWVtYmVkZGVkXT1cImlzSW5saW5lRW1iZWRkZWRcIj48L25vdm8tZmllbGRzZXQtaGVhZGVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29udHJvbCBvZiBjb250cm9scztsZXQgY29udHJvbEluZGV4ID0gaW5kZXg7XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZm9ybS1yb3dcIiBbY2xhc3MuZGlzYWJsZWRdPVwiY29udHJvbC5kaXNhYmxlZFwiICpuZ0lmPVwiY29udHJvbC5fX3R5cGUgIT09ICdHcm91cGVkQ29udHJvbCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5vdm8tY29udHJvbCBbYXV0b0ZvY3VzXT1cImF1dG9Gb2N1cyAmJiBpbmRleCA9PT0gMCAmJiBjb250cm9sSW5kZXggPT09IDBcIiBbY29udHJvbF09XCJjb250cm9sXCIgW2Zvcm1dPVwiZm9ybVwiPjwvbm92by1jb250cm9sPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjb250cm9sLl9fdHlwZSA9PT0gJ0dyb3VwZWRDb250cm9sJ1wiPlRPRE8gLSBHcm91cGVkQ29udHJvbDwvZGl2PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9GaWVsZHNldEVsZW1lbnQge1xuICBASW5wdXQoKVxuICBjb250cm9sczogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKVxuICBmb3JtOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcbiAgQElucHV0KClcbiAgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KClcbiAgYXV0b0ZvY3VzOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBpc0VtYmVkZGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGlzSW5saW5lRW1iZWRkZWQgPSBmYWxzZTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1keW5hbWljLWZvcm0nLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bm92by1jb250cm9sLXRlbXBsYXRlcz48L25vdm8tY29udHJvbC10ZW1wbGF0ZXM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImZvcm0tdGl0bGVcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZm9ybS1zdWJ0aXRsZVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJub3ZvLWZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZHNldCBvZiBmb3JtLmZpZWxkc2V0cztsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLWZpZWxkc2V0ICpuZ0lmPVwiZmllbGRzZXQuY29udHJvbHMubGVuZ3RoXCIgW2luZGV4XT1cImlcIiBbYXV0b0ZvY3VzXT1cImF1dG9Gb2N1c0ZpcnN0RmllbGRcIiBbaWNvbl09XCJmaWVsZHNldC5pY29uXCIgW2NvbnRyb2xzXT1cImZpZWxkc2V0LmNvbnRyb2xzXCIgW3RpdGxlXT1cImZpZWxkc2V0LnRpdGxlXCIgW2Zvcm1dPVwiZm9ybVwiIFtpc0VtYmVkZGVkXT1cImZpZWxkc2V0LmlzRW1iZWRkZWRcIiBbaXNJbmxpbmVFbWJlZGRlZF09XCJmaWVsZHNldC5pc0lubGluZUVtYmVkZGVkXCI+PC9ub3ZvLWZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICBwcm92aWRlcnM6IFtOb3ZvVGVtcGxhdGVTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0R5bmFtaWNGb3JtRWxlbWVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KClcbiAgY29udHJvbHM6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KClcbiAgZmllbGRzZXRzOiBBcnJheTxOb3ZvRmllbGRzZXQ+ID0gW107XG4gIEBJbnB1dCgpXG4gIGZvcm06IE5vdm9Gb3JtR3JvdXA7XG4gIEBJbnB1dCgpXG4gIGxheW91dDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBoaWRlTm9uUmVxdWlyZWRGaWVsZHM6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBhdXRvRm9jdXNGaXJzdEZpZWxkOiBib29sZWFuID0gZmFsc2U7XG4gIEBDb250ZW50Q2hpbGRyZW4oTm92b1RlbXBsYXRlKVxuICBjdXN0b21UZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOb3ZvVGVtcGxhdGU+O1xuICBwcml2YXRlIGZpZWxkc0FscmVhZHlIaWRkZW46IHN0cmluZ1tdO1xuXG4gIGFsbEZpZWxkc1JlcXVpcmVkID0gZmFsc2U7XG4gIGFsbEZpZWxkc05vdFJlcXVpcmVkID0gZmFsc2U7XG4gIHNob3dpbmdBbGxGaWVsZHMgPSBmYWxzZTtcbiAgc2hvd2luZ1JlcXVpcmVkRmllbGRzID0gdHJ1ZTtcbiAgbnVtQ29udHJvbHMgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSB0ZW1wbGF0ZXM6IE5vdm9UZW1wbGF0ZVNlcnZpY2UpIHt9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuZm9ybS5sYXlvdXQgPSB0aGlzLmxheW91dDtcblxuICAgIGlmICghKHRoaXMuZmllbGRzZXRzICYmIHRoaXMuZmllbGRzZXRzLmxlbmd0aCkgJiYgdGhpcy5jb250cm9scyAmJiB0aGlzLmNvbnRyb2xzLmxlbmd0aCkge1xuICAgICAgdGhpcy5maWVsZHNldHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBjb250cm9sczogdGhpcy5jb250cm9scyxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgICB0aGlzLm51bUNvbnRyb2xzID0gdGhpcy5jb250cm9scy5sZW5ndGg7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZpZWxkc2V0cykge1xuICAgICAgdGhpcy5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgICAgdGhpcy5udW1Db250cm9scyA9IHRoaXMubnVtQ29udHJvbHMgKyBmaWVsZHNldC5jb250cm9scy5sZW5ndGg7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgcmVxdWlyZWRGaWVsZHM6IEFycmF5PGFueT4gPSBbXTtcbiAgICBsZXQgbm9uUmVxdWlyZWRGaWVsZHM6IEFycmF5PGFueT4gPSBbXTtcbiAgICB0aGlzLmZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgZmllbGRzZXQuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICBpZiAoY29udHJvbC5yZXF1aXJlZCkge1xuICAgICAgICAgIHJlcXVpcmVkRmllbGRzLnB1c2goY29udHJvbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9uUmVxdWlyZWRGaWVsZHMucHVzaChjb250cm9sKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5hbGxGaWVsZHNSZXF1aXJlZCA9IHJlcXVpcmVkRmllbGRzLmxlbmd0aCA9PT0gdGhpcy5udW1Db250cm9scztcbiAgICB0aGlzLmFsbEZpZWxkc05vdFJlcXVpcmVkID0gbm9uUmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSB0aGlzLm51bUNvbnRyb2xzO1xuICAgIGlmICh0aGlzLmFsbEZpZWxkc05vdFJlcXVpcmVkICYmIHRoaXMuaGlkZU5vblJlcXVpcmVkRmllbGRzKSB7XG4gICAgICB0aGlzLmZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5mb3JtLmZpZWxkc2V0cyA9IFsuLi50aGlzLmZpZWxkc2V0c107XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tVGVtcGxhdGVzICYmIHRoaXMuY3VzdG9tVGVtcGxhdGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5jdXN0b21UZW1wbGF0ZXMuZm9yRWFjaCgodGVtcGxhdGU6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnRlbXBsYXRlcy5hZGRDdXN0b20odGVtcGxhdGUubmFtZSwgdGVtcGxhdGUudGVtcGxhdGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNob3dBbGxGaWVsZHMoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtLmZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgZmllbGRzZXQuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICBjb25zdCBjdGwgPSB0aGlzLmZvcm0uY29udHJvbHNbY29udHJvbC5rZXldO1xuICAgICAgICBpZiAoIXRoaXMuZmllbGRzQWxyZWFkeUhpZGRlbi5pbmNsdWRlcyhjb250cm9sLmtleSkpIHtcbiAgICAgICAgICBjdGwuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2hvd2luZ0FsbEZpZWxkcyA9IHRydWU7XG4gICAgdGhpcy5zaG93aW5nUmVxdWlyZWRGaWVsZHMgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93T25seVJlcXVpcmVkKGhpZGVSZXF1aXJlZFdpdGhWYWx1ZSk6IHZvaWQge1xuICAgIHRoaXMuZmllbGRzQWxyZWFkeUhpZGRlbiA9IFtdO1xuICAgIHRoaXMuZm9ybS5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgY29uc3QgY3RsID0gdGhpcy5mb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XTtcblxuICAgICAgICBpZiAoY3RsLmhpZGRlbikge1xuICAgICAgICAgIHRoaXMuZmllbGRzQWxyZWFkeUhpZGRlbi5wdXNoKGNvbnRyb2wua2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhpZGUgYW55IG5vbi1yZXF1aXJlZCBmaWVsZHNcbiAgICAgICAgaWYgKCFjb250cm9sLnJlcXVpcmVkKSB7XG4gICAgICAgICAgY3RsLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIaWRlIHJlcXVpcmVkIGZpZWxkcyB0aGF0IGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgZmlsbGVkIG91dFxuICAgICAgICBpZiAoXG4gICAgICAgICAgaGlkZVJlcXVpcmVkV2l0aFZhbHVlICYmXG4gICAgICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLmZvcm0udmFsdWVbY29udHJvbC5rZXldKSAmJlxuICAgICAgICAgICghY29udHJvbC5pc0VtcHR5IHx8IChjb250cm9sLmlzRW1wdHkgJiYgY29udHJvbC5pc0VtcHR5KGN0bCkpKVxuICAgICAgICApIHtcbiAgICAgICAgICBjdGwuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvbid0IGhpZGUgZmllbGRzIHdpdGggZXJyb3JzXG4gICAgICAgIGlmIChjdGwuZXJyb3JzKSB7XG4gICAgICAgICAgY3RsLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNob3dpbmdBbGxGaWVsZHMgPSBmYWxzZTtcbiAgICB0aGlzLnNob3dpbmdSZXF1aXJlZEZpZWxkcyA9IHRydWU7XG4gICAgdGhpcy5mb3JjZVZhbGlkYXRpb24oKTtcbiAgfVxuXG4gIGdldCB2YWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybSA/IHRoaXMuZm9ybS52YWx1ZSA6IG51bGw7XG4gIH1cblxuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtID8gdGhpcy5mb3JtLnZhbGlkIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlZFZhbHVlcygpOiBhbnkge1xuICAgIGxldCByZXQgPSBudWxsO1xuICAgIHRoaXMuZm9ybS5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uZGlydHkgfHwgY29udHJvbC5kaXJ0eSkge1xuICAgICAgICAgIGlmICghcmV0KSB7XG4gICAgICAgICAgICByZXQgPSB7fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0W2NvbnRyb2wua2V5XSA9IHRoaXMuZm9ybS52YWx1ZVtjb250cm9sLmtleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwdWJsaWMgZm9yY2VWYWxpZGF0aW9uKCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZm9ybS5jb250cm9scykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGxldCBjb250cm9sOiBhbnkgPSB0aGlzLmZvcm0uY29udHJvbHNba2V5XTtcbiAgICAgIGlmIChjb250cm9sLnJlcXVpcmVkICYmIEhlbHBlcnMuaXNCbGFuayh0aGlzLmZvcm0udmFsdWVbY29udHJvbC5rZXldKSkge1xuICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=