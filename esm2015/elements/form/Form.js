/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG
import { Component, Input, ContentChildren, QueryList } from '@angular/core';
import { Helpers } from '../../utils/Helpers';
import { NovoTemplate } from '../common/novo-template/novo-template.directive';
import { NovoTemplateService } from '../../services/template/NovoTemplateService';
export class NovoFormElement {
    /**
     * @param {?} templates
     */
    constructor(templates) {
        this.templates = templates;
        this.hideHeader = false;
        this.showingAllFields = false;
        this.showingRequiredFields = true;
    }
    /**
     * @return {?}
     */
    get value() {
        return this.form.getRawValue();
    }
    /**
     * @return {?}
     */
    get isValid() {
        return this.form.valid;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form.layout = this.layout;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.customTemplates && this.customTemplates.length) {
            this.customTemplates.forEach((template) => {
                this.templates.addCustom(template.name, template.template);
            });
        }
    }
    /**
     * @return {?}
     */
    showAllFields() {
        Object.keys(this.form.controls).forEach((key) => {
            this.form.controls[key].hidden = false;
        });
        this.showingAllFields = true;
        this.showingRequiredFields = false;
    }
    /**
     * @param {?} hideRequiredWithValue
     * @return {?}
     */
    showOnlyRequired(hideRequiredWithValue) {
        Object.keys(this.form.controls).forEach((key) => {
            // Hide any non-required fields
            if (!this.form.controls[key].required) {
                this.form.controls[key].hidden = true;
            }
            // Hide required fields that have been successfully filled out
            if (hideRequiredWithValue && !Helpers.isBlank(this.form.value[key])) {
                this.form.controls[key].hidden = true;
            }
            // Don't hide fields with errors
            if (this.form.controls[key].errors) {
                this.form.controls[key].hidden = false;
            }
        });
        this.showingAllFields = false;
        this.showingRequiredFields = true;
        this.forceValidation();
    }
    /**
     * @return {?}
     */
    forceValidation() {
        Object.keys(this.form.controls).forEach((key) => {
            /** @type {?} */
            let control = this.form.controls[key];
            if (control.required && Helpers.isBlank(this.form.value[control.key])) {
                control.markAsDirty();
                control.markAsTouched();
            }
        });
    }
    /**
     * @return {?}
     */
    updatedValues() {
        /** @type {?} */
        let ret = null;
        this.form.controls.forEach((control) => {
            if (this.form.controls[control.key].dirty || control.dirty) {
                if (!ret) {
                    ret = {};
                }
                ret[control.key] = this.form.value[control.key];
            }
        });
        return ret;
    }
}
NovoFormElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-form',
                template: `
    <novo-control-templates></novo-control-templates>
    <div class="novo-form-container">
      <header *ngIf="!hideHeader">
        <ng-content select="form-title"></ng-content>
        <ng-content select="form-subtitle"></ng-content>
      </header>
      <form class="novo-form" [formGroup]="form"><ng-content></ng-content></form>
    </div>
  `,
                providers: [NovoTemplateService]
            }] }
];
/** @nocollapse */
NovoFormElement.ctorParameters = () => [
    { type: NovoTemplateService }
];
NovoFormElement.propDecorators = {
    form: [{ type: Input }],
    layout: [{ type: Input }],
    hideHeader: [{ type: Input }],
    customTemplates: [{ type: ContentChildren, args: [NovoTemplate,] }]
};
if (false) {
    /** @type {?} */
    NovoFormElement.prototype.form;
    /** @type {?} */
    NovoFormElement.prototype.layout;
    /** @type {?} */
    NovoFormElement.prototype.hideHeader;
    /** @type {?} */
    NovoFormElement.prototype.customTemplates;
    /** @type {?} */
    NovoFormElement.prototype.showingAllFields;
    /** @type {?} */
    NovoFormElement.prototype.showingRequiredFields;
    /**
     * @type {?}
     * @private
     */
    NovoFormElement.prototype.templates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQW9CLFNBQVMsRUFBRSxLQUFLLEVBQVUsZUFBZSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd2RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBZ0JsRixNQUFNLE9BQU8sZUFBZTs7OztJQWMxQixZQUFvQixTQUE4QjtRQUE5QixjQUFTLEdBQVQsU0FBUyxDQUFxQjtRQVJsRCxlQUFVLEdBQVksS0FBSyxDQUFDO1FBS3JCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQywwQkFBcUIsR0FBWSxJQUFJLENBQUM7SUFFUSxDQUFDOzs7O0lBRXRELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7WUFDdkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUks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QUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDakQ7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7O1lBckdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7R0FTVDtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUNqQzs7OztZQWZRLG1CQUFtQjs7O21CQWlCekIsS0FBSztxQkFFTCxLQUFLO3lCQUVMLEtBQUs7OEJBR0wsZUFBZSxTQUFDLFlBQVk7Ozs7SUFQN0IsK0JBQ29COztJQUNwQixpQ0FDZTs7SUFDZixxQ0FDNEI7O0lBRTVCLDBDQUN5Qzs7SUFFekMsMkNBQXlDOztJQUN6QyxnREFBNkM7Ozs7O0lBRWpDLG9DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBcHBcbmltcG9ydCB7IE5vdm9Gb3JtR3JvdXAgfSBmcm9tICcuL0Zvcm1JbnRlcmZhY2VzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9UZW1wbGF0ZSB9IGZyb20gJy4uL2NvbW1vbi9ub3ZvLXRlbXBsYXRlL25vdm8tdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5vdm9UZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1mb3JtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bm92by1jb250cm9sLXRlbXBsYXRlcz48L25vdm8tY29udHJvbC10ZW1wbGF0ZXM+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tZm9ybS1jb250YWluZXJcIj5cbiAgICAgIDxoZWFkZXIgKm5nSWY9XCIhaGlkZUhlYWRlclwiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJmb3JtLXRpdGxlXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJmb3JtLXN1YnRpdGxlXCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8Zm9ybSBjbGFzcz1cIm5vdm8tZm9ybVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Zvcm0+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHByb3ZpZGVyczogW05vdm9UZW1wbGF0ZVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRm9ybUVsZW1lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkluaXQge1xuICBASW5wdXQoKVxuICBmb3JtOiBOb3ZvRm9ybUdyb3VwO1xuICBASW5wdXQoKVxuICBsYXlvdXQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgaGlkZUhlYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTm92b1RlbXBsYXRlKVxuICBjdXN0b21UZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOb3ZvVGVtcGxhdGU+O1xuXG4gIHB1YmxpYyBzaG93aW5nQWxsRmllbGRzOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzaG93aW5nUmVxdWlyZWRGaWVsZHM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVtcGxhdGVzOiBOb3ZvVGVtcGxhdGVTZXJ2aWNlKSB7fVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmdldFJhd1ZhbHVlKCk7XG4gIH1cblxuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLnZhbGlkO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mb3JtLmxheW91dCA9IHRoaXMubGF5b3V0O1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLmN1c3RvbVRlbXBsYXRlcyAmJiB0aGlzLmN1c3RvbVRlbXBsYXRlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3VzdG9tVGVtcGxhdGVzLmZvckVhY2goKHRlbXBsYXRlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuYWRkQ3VzdG9tKHRlbXBsYXRlLm5hbWUsIHRlbXBsYXRlLnRlbXBsYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzaG93QWxsRmllbGRzKCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZm9ybS5jb250cm9scykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1trZXldLmhpZGRlbiA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMuc2hvd2luZ0FsbEZpZWxkcyA9IHRydWU7XG4gICAgdGhpcy5zaG93aW5nUmVxdWlyZWRGaWVsZHMgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93T25seVJlcXVpcmVkKGhpZGVSZXF1aXJlZFdpdGhWYWx1ZSk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZm9ybS5jb250cm9scykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIC8vIEhpZGUgYW55IG5vbi1yZXF1aXJlZCBmaWVsZHNcbiAgICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW2tleV0ucmVxdWlyZWQpIHtcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW2tleV0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSGlkZSByZXF1aXJlZCBmaWVsZHMgdGhhdCBoYXZlIGJlZW4gc3VjY2Vzc2Z1bGx5IGZpbGxlZCBvdXRcbiAgICAgIGlmIChoaWRlUmVxdWlyZWRXaXRoVmFsdWUgJiYgIUhlbHBlcnMuaXNCbGFuayh0aGlzLmZvcm0udmFsdWVba2V5XSkpIHtcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW2tleV0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gRG9uJ3QgaGlkZSBmaWVsZHMgd2l0aCBlcnJvcnNcbiAgICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNba2V5XS5lcnJvcnMpIHtcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW2tleV0uaGlkZGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zaG93aW5nQWxsRmllbGRzID0gZmFsc2U7XG4gICAgdGhpcy5zaG93aW5nUmVxdWlyZWRGaWVsZHMgPSB0cnVlO1xuICAgIHRoaXMuZm9yY2VWYWxpZGF0aW9uKCk7XG4gIH1cblxuICBwdWJsaWMgZm9yY2VWYWxpZGF0aW9uKCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZm9ybS5jb250cm9scykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGxldCBjb250cm9sOiBhbnkgPSB0aGlzLmZvcm0uY29udHJvbHNba2V5XTtcbiAgICAgIGlmIChjb250cm9sLnJlcXVpcmVkICYmIEhlbHBlcnMuaXNCbGFuayh0aGlzLmZvcm0udmFsdWVbY29udHJvbC5rZXldKSkge1xuICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZWRWYWx1ZXMoKTogYW55IHtcbiAgICBsZXQgcmV0ID0gbnVsbDtcbiAgICB0aGlzLmZvcm0uY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uZGlydHkgfHwgY29udHJvbC5kaXJ0eSkge1xuICAgICAgICBpZiAoIXJldCkge1xuICAgICAgICAgIHJldCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHJldFtjb250cm9sLmtleV0gPSB0aGlzLmZvcm0udmFsdWVbY29udHJvbC5rZXldO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cbiJdfQ==