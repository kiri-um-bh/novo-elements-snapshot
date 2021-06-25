// NG
import { Component, ContentChildren, ElementRef, Input, QueryList } from '@angular/core';
import { NovoTemplateService } from '../../services/template/NovoTemplateService';
import { NovoTemplate } from '../common/novo-template/novo-template.directive';
// App
import { Helpers } from './../../utils/Helpers';
export class NovoFieldsetHeaderElement {
}
NovoFieldsetHeaderElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-fieldset-header',
                template: `
        <h6><i [class]="icon || 'bhi-section'"></i>{{title}}</h6>
    `
            },] }
];
NovoFieldsetHeaderElement.propDecorators = {
    title: [{ type: Input }],
    icon: [{ type: Input }]
};
export class NovoFieldsetElement {
    constructor() {
        this.controls = [];
        this.isEmbedded = false;
        this.isInlineEmbedded = false;
        this.hidden = false;
    }
}
NovoFieldsetElement.decorators = [
    { type: Component, args: [{
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
    `
            },] }
];
NovoFieldsetElement.propDecorators = {
    controls: [{ type: Input }],
    form: [{ type: Input }],
    title: [{ type: Input }],
    icon: [{ type: Input }],
    index: [{ type: Input }],
    autoFocus: [{ type: Input }],
    isEmbedded: [{ type: Input }],
    isInlineEmbedded: [{ type: Input }],
    hidden: [{ type: Input }]
};
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
                    <novo-fieldset *ngIf="fieldset.controls.length" [index]="i" [autoFocus]="autoFocusFirstField" [icon]="fieldset.icon" [controls]="fieldset.controls" [title]="fieldset.title" [form]="form" [isEmbedded]="fieldset.isEmbedded" [isInlineEmbedded]="fieldset.isInlineEmbedded" [hidden]="fieldset.hidden"></novo-fieldset>
                </ng-container>
            </form>
        </div>
    `,
                providers: [NovoTemplateService]
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1pY0Zvcm0uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9EeW5hbWljRm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLO0FBQ0wsT0FBTyxFQUFvQixTQUFTLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDN0ksT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE1BQU07QUFDTixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFTaEQsTUFBTSxPQUFPLHlCQUF5Qjs7O1lBTnJDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7O0tBRVA7YUFDSjs7O29CQUVFLEtBQUs7bUJBRUwsS0FBSzs7QUFrQlIsTUFBTSxPQUFPLG1CQUFtQjtJQWRoQztRQWdCRSxhQUFRLEdBQWUsRUFBRSxDQUFDO1FBWTFCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRXpCLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFDakIsQ0FBQzs7O1lBakNBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7O0tBVVA7YUFDSjs7O3VCQUVFLEtBQUs7bUJBRUwsS0FBSztvQkFFTCxLQUFLO21CQUVMLEtBQUs7b0JBRUwsS0FBSzt3QkFFTCxLQUFLO3lCQUVMLEtBQUs7K0JBRUwsS0FBSztxQkFFTCxLQUFLOztBQXNCUixNQUFNLE9BQU8sc0JBQXNCO0lBdUJqQyxZQUFv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Q0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN6QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBN0tGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7S0FhUDtnQkFDSCxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUNqQzs7O1lBeEVzRCxVQUFVO1lBQ3hELG1CQUFtQjs7O3VCQXlFekIsS0FBSzt3QkFFTCxLQUFLO21CQUVMLEtBQUs7cUJBRUwsS0FBSztvQ0FFTCxLQUFLO2tDQUVMLEtBQUs7OEJBRUwsZUFBZSxTQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOR1xuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgUXVlcnlMaXN0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3ZvVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVtcGxhdGUvTm92b1RlbXBsYXRlU2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvVGVtcGxhdGUgfSBmcm9tICcuLi9jb21tb24vbm92by10ZW1wbGF0ZS9ub3ZvLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG4vLyBBcHBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0ZpZWxkc2V0LCBOb3ZvRm9ybUdyb3VwIH0gZnJvbSAnLi9Gb3JtSW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZmllbGRzZXQtaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGg2PjxpIFtjbGFzc109XCJpY29uIHx8ICdiaGktc2VjdGlvbidcIj48L2k+e3t0aXRsZX19PC9oNj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRmllbGRzZXRIZWFkZXJFbGVtZW50IHtcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWZpZWxkc2V0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZmllbGRzZXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bm92by1maWVsZHNldC1oZWFkZXIgW2ljb25dPVwiaWNvblwiIFt0aXRsZV09XCJ0aXRsZVwiICpuZ0lmPVwidGl0bGVcIiBbY2xhc3MuZW1iZWRkZWRdPVwiaXNFbWJlZGRlZFwiIFtjbGFzcy5pbmxpbmUtZW1iZWRkZWRdPVwiaXNJbmxpbmVFbWJlZGRlZFwiIFtjbGFzcy5oaWRkZW5dPVwiaGlkZGVuXCI+PC9ub3ZvLWZpZWxkc2V0LWhlYWRlcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbnRyb2wgb2YgY29udHJvbHM7bGV0IGNvbnRyb2xJbmRleCA9IGluZGV4O1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWZvcm0tcm93XCIgW2NsYXNzLmRpc2FibGVkXT1cImNvbnRyb2wuZGlzYWJsZWRcIiAqbmdJZj1cImNvbnRyb2wuX190eXBlICE9PSAnR3JvdXBlZENvbnRyb2wnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLWNvbnRyb2wgW2F1dG9Gb2N1c109XCJhdXRvRm9jdXMgJiYgaW5kZXggPT09IDAgJiYgY29udHJvbEluZGV4ID09PSAwXCIgW2NvbnRyb2xdPVwiY29udHJvbFwiIFtmb3JtXT1cImZvcm1cIj48L25vdm8tY29udHJvbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29udHJvbC5fX3R5cGUgPT09ICdHcm91cGVkQ29udHJvbCdcIj5UT0RPIC0gR3JvdXBlZENvbnRyb2w8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRmllbGRzZXRFbGVtZW50IHtcbiAgQElucHV0KClcbiAgY29udHJvbHM6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KClcbiAgZm9ybTogYW55O1xuICBASW5wdXQoKVxuICB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGF1dG9Gb2N1czogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgaXNFbWJlZGRlZCA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBpc0lubGluZUVtYmVkZGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGhpZGRlbiA9IGZhbHNlO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWR5bmFtaWMtZm9ybScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxub3ZvLWNvbnRyb2wtdGVtcGxhdGVzPjwvbm92by1jb250cm9sLXRlbXBsYXRlcz5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZm9ybS10aXRsZVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJmb3JtLXN1YnRpdGxlXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cIm5vdm8tZm9ybVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkc2V0IG9mIGZvcm0uZmllbGRzZXRzO2xldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5vdm8tZmllbGRzZXQgKm5nSWY9XCJmaWVsZHNldC5jb250cm9scy5sZW5ndGhcIiBbaW5kZXhdPVwiaVwiIFthdXRvRm9jdXNdPVwiYXV0b0ZvY3VzRmlyc3RGaWVsZFwiIFtpY29uXT1cImZpZWxkc2V0Lmljb25cIiBbY29udHJvbHNdPVwiZmllbGRzZXQuY29udHJvbHNcIiBbdGl0bGVdPVwiZmllbGRzZXQudGl0bGVcIiBbZm9ybV09XCJmb3JtXCIgW2lzRW1iZWRkZWRdPVwiZmllbGRzZXQuaXNFbWJlZGRlZFwiIFtpc0lubGluZUVtYmVkZGVkXT1cImZpZWxkc2V0LmlzSW5saW5lRW1iZWRkZWRcIiBbaGlkZGVuXT1cImZpZWxkc2V0LmhpZGRlblwiPjwvbm92by1maWVsZHNldD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgcHJvdmlkZXJzOiBbTm92b1RlbXBsYXRlU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EeW5hbWljRm9ybUVsZW1lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBJbnB1dCgpXG4gIGNvbnRyb2xzOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpXG4gIGZpZWxkc2V0czogQXJyYXk8Tm92b0ZpZWxkc2V0PiA9IFtdO1xuICBASW5wdXQoKVxuICBmb3JtOiBOb3ZvRm9ybUdyb3VwO1xuICBASW5wdXQoKVxuICBsYXlvdXQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgaGlkZU5vblJlcXVpcmVkRmllbGRzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgYXV0b0ZvY3VzRmlyc3RGaWVsZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAQ29udGVudENoaWxkcmVuKE5vdm9UZW1wbGF0ZSlcbiAgY3VzdG9tVGVtcGxhdGVzOiBRdWVyeUxpc3Q8Tm92b1RlbXBsYXRlPjtcbiAgcHJpdmF0ZSBmaWVsZHNBbHJlYWR5SGlkZGVuOiBzdHJpbmdbXTtcblxuICBhbGxGaWVsZHNSZXF1aXJlZCA9IGZhbHNlO1xuICBhbGxGaWVsZHNOb3RSZXF1aXJlZCA9IGZhbHNlO1xuICBzaG93aW5nQWxsRmllbGRzID0gZmFsc2U7XG4gIHNob3dpbmdSZXF1aXJlZEZpZWxkcyA9IHRydWU7XG4gIG51bUNvbnRyb2xzID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgdGVtcGxhdGVzOiBOb3ZvVGVtcGxhdGVTZXJ2aWNlKSB7IH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtLmxheW91dCA9IHRoaXMubGF5b3V0O1xuXG4gICAgaWYgKCEodGhpcy5maWVsZHNldHMgJiYgdGhpcy5maWVsZHNldHMubGVuZ3RoKSAmJiB0aGlzLmNvbnRyb2xzICYmIHRoaXMuY29udHJvbHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmZpZWxkc2V0cyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRyb2xzOiB0aGlzLmNvbnRyb2xzLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICAgIHRoaXMubnVtQ29udHJvbHMgPSB0aGlzLmNvbnRyb2xzLmxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmllbGRzZXRzKSB7XG4gICAgICB0aGlzLmZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgICB0aGlzLm51bUNvbnRyb2xzID0gdGhpcy5udW1Db250cm9scyArIGZpZWxkc2V0LmNvbnRyb2xzLmxlbmd0aDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcXVpcmVkRmllbGRzOiBBcnJheTxhbnk+ID0gW107XG4gICAgY29uc3Qgbm9uUmVxdWlyZWRGaWVsZHM6IEFycmF5PGFueT4gPSBbXTtcbiAgICB0aGlzLmZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgZmllbGRzZXQuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICBpZiAoY29udHJvbC5yZXF1aXJlZCkge1xuICAgICAgICAgIHJlcXVpcmVkRmllbGRzLnB1c2goY29udHJvbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9uUmVxdWlyZWRGaWVsZHMucHVzaChjb250cm9sKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5hbGxGaWVsZHNSZXF1aXJlZCA9IHJlcXVpcmVkRmllbGRzLmxlbmd0aCA9PT0gdGhpcy5udW1Db250cm9scztcbiAgICB0aGlzLmFsbEZpZWxkc05vdFJlcXVpcmVkID0gbm9uUmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSB0aGlzLm51bUNvbnRyb2xzO1xuICAgIGlmICh0aGlzLmFsbEZpZWxkc05vdFJlcXVpcmVkICYmIHRoaXMuaGlkZU5vblJlcXVpcmVkRmllbGRzKSB7XG4gICAgICB0aGlzLmZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5mb3JtLmZpZWxkc2V0cyA9IFsuLi50aGlzLmZpZWxkc2V0c107XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tVGVtcGxhdGVzICYmIHRoaXMuY3VzdG9tVGVtcGxhdGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5jdXN0b21UZW1wbGF0ZXMuZm9yRWFjaCgodGVtcGxhdGU6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnRlbXBsYXRlcy5hZGRDdXN0b20odGVtcGxhdGUubmFtZSwgdGVtcGxhdGUudGVtcGxhdGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNob3dBbGxGaWVsZHMoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtLmZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgZmllbGRzZXQuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICBjb25zdCBjdGwgPSB0aGlzLmZvcm0uY29udHJvbHNbY29udHJvbC5rZXldO1xuICAgICAgICBpZiAoIXRoaXMuZmllbGRzQWxyZWFkeUhpZGRlbi5pbmNsdWRlcyhjb250cm9sLmtleSkpIHtcbiAgICAgICAgICBjdGwuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2hvd2luZ0FsbEZpZWxkcyA9IHRydWU7XG4gICAgdGhpcy5zaG93aW5nUmVxdWlyZWRGaWVsZHMgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93T25seVJlcXVpcmVkKGhpZGVSZXF1aXJlZFdpdGhWYWx1ZSk6IHZvaWQge1xuICAgIHRoaXMuZmllbGRzQWxyZWFkeUhpZGRlbiA9IFtdO1xuICAgIHRoaXMuZm9ybS5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgY29uc3QgY3RsID0gdGhpcy5mb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XTtcblxuICAgICAgICBpZiAoY3RsLmhpZGRlbikge1xuICAgICAgICAgIHRoaXMuZmllbGRzQWxyZWFkeUhpZGRlbi5wdXNoKGNvbnRyb2wua2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhpZGUgYW55IG5vbi1yZXF1aXJlZCBmaWVsZHNcbiAgICAgICAgaWYgKCFjb250cm9sLnJlcXVpcmVkKSB7XG4gICAgICAgICAgY3RsLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIaWRlIHJlcXVpcmVkIGZpZWxkcyB0aGF0IGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgZmlsbGVkIG91dFxuICAgICAgICBpZiAoXG4gICAgICAgICAgaGlkZVJlcXVpcmVkV2l0aFZhbHVlICYmXG4gICAgICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLmZvcm0udmFsdWVbY29udHJvbC5rZXldKSAmJlxuICAgICAgICAgICghY29udHJvbC5pc0VtcHR5IHx8IChjb250cm9sLmlzRW1wdHkgJiYgY29udHJvbC5pc0VtcHR5KGN0bCkpKVxuICAgICAgICApIHtcbiAgICAgICAgICBjdGwuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvbid0IGhpZGUgZmllbGRzIHdpdGggZXJyb3JzXG4gICAgICAgIGlmIChjdGwuZXJyb3JzKSB7XG4gICAgICAgICAgY3RsLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNob3dpbmdBbGxGaWVsZHMgPSBmYWxzZTtcbiAgICB0aGlzLnNob3dpbmdSZXF1aXJlZEZpZWxkcyA9IHRydWU7XG4gICAgdGhpcy5mb3JjZVZhbGlkYXRpb24oKTtcbiAgfVxuXG4gIGdldCB2YWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybSA/IHRoaXMuZm9ybS52YWx1ZSA6IG51bGw7XG4gIH1cblxuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtID8gdGhpcy5mb3JtLnZhbGlkIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlZFZhbHVlcygpOiBhbnkge1xuICAgIGxldCByZXQgPSBudWxsO1xuICAgIHRoaXMuZm9ybS5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uZGlydHkgfHwgY29udHJvbC5kaXJ0eSkge1xuICAgICAgICAgIGlmICghcmV0KSB7XG4gICAgICAgICAgICByZXQgPSB7fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0W2NvbnRyb2wua2V5XSA9IHRoaXMuZm9ybS52YWx1ZVtjb250cm9sLmtleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwdWJsaWMgZm9yY2VWYWxpZGF0aW9uKCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZm9ybS5jb250cm9scykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRyb2w6IGFueSA9IHRoaXMuZm9ybS5jb250cm9sc1trZXldO1xuICAgICAgaWYgKGNvbnRyb2wucmVxdWlyZWQgJiYgSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS52YWx1ZVtjb250cm9sLmtleV0pKSB7XG4gICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==