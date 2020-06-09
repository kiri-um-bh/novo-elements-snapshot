/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/DynamicForm.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG
import { Component, ContentChildren, ElementRef, Input, QueryList } from '@angular/core';
import { NovoTemplateService } from '../../services/template/NovoTemplateService';
import { NovoTemplate } from '../common/novo-template/novo-template.directive';
// App
import { Helpers } from './../../utils/Helpers';
var NovoFieldsetHeaderElement = /** @class */ (function () {
    function NovoFieldsetHeaderElement() {
    }
    NovoFieldsetHeaderElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-fieldset-header',
                    template: "\n        <h6><i [class]=\"icon || 'bhi-section'\"></i>{{title}}</h6>\n    "
                }] }
    ];
    NovoFieldsetHeaderElement.propDecorators = {
        title: [{ type: Input }],
        icon: [{ type: Input }]
    };
    return NovoFieldsetHeaderElement;
}());
export { NovoFieldsetHeaderElement };
if (false) {
    /** @type {?} */
    NovoFieldsetHeaderElement.prototype.title;
    /** @type {?} */
    NovoFieldsetHeaderElement.prototype.icon;
}
var NovoFieldsetElement = /** @class */ (function () {
    function NovoFieldsetElement() {
        this.controls = [];
        this.isEmbedded = false;
        this.isInlineEmbedded = false;
        this.hidden = false;
    }
    NovoFieldsetElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-fieldset',
                    template: "\n        <div class=\"novo-fieldset-container\">\n            <novo-fieldset-header [icon]=\"icon\" [title]=\"title\" *ngIf=\"title\" [class.embedded]=\"isEmbedded\" [class.inline-embedded]=\"isInlineEmbedded\" [class.hidden]=\"hidden\"></novo-fieldset-header>\n            <ng-container *ngFor=\"let control of controls;let controlIndex = index;\">\n                <div class=\"novo-form-row\" [class.disabled]=\"control.disabled\" *ngIf=\"control.__type !== 'GroupedControl'\">\n                    <novo-control [autoFocus]=\"autoFocus && index === 0 && controlIndex === 0\" [control]=\"control\" [form]=\"form\"></novo-control>\n                </div>\n                <div *ngIf=\"control.__type === 'GroupedControl'\">TODO - GroupedControl</div>\n            </ng-container>\n        </div>\n    "
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
        isInlineEmbedded: [{ type: Input }],
        hidden: [{ type: Input }]
    };
    return NovoFieldsetElement;
}());
export { NovoFieldsetElement };
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
    /** @type {?} */
    NovoFieldsetElement.prototype.hidden;
}
var NovoDynamicFormElement = /** @class */ (function () {
    function NovoDynamicFormElement(element, templates) {
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
    NovoDynamicFormElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnChanges();
    };
    /**
     * @param {?=} changes
     * @return {?}
     */
    NovoDynamicFormElement.prototype.ngOnChanges = /**
     * @param {?=} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
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
            function (fieldset) {
                _this.numControls = _this.numControls + fieldset.controls.length;
            }));
        }
        /** @type {?} */
        var requiredFields = [];
        /** @type {?} */
        var nonRequiredFields = [];
        this.fieldsets.forEach((/**
         * @param {?} fieldset
         * @return {?}
         */
        function (fieldset) {
            fieldset.controls.forEach((/**
             * @param {?} control
             * @return {?}
             */
            function (control) {
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
            function (fieldset) {
                fieldset.controls.forEach((/**
                 * @param {?} control
                 * @return {?}
                 */
                function (control) {
                    _this.form.controls[control.key].hidden = false;
                }));
            }));
        }
        this.form.fieldsets = tslib_1.__spread(this.fieldsets);
    };
    /**
     * @return {?}
     */
    NovoDynamicFormElement.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.customTemplates && this.customTemplates.length) {
            this.customTemplates.forEach((/**
             * @param {?} template
             * @return {?}
             */
            function (template) {
                _this.templates.addCustom(template.name, template.template);
            }));
        }
    };
    /**
     * @return {?}
     */
    NovoDynamicFormElement.prototype.showAllFields = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.form.fieldsets.forEach((/**
         * @param {?} fieldset
         * @return {?}
         */
        function (fieldset) {
            fieldset.controls.forEach((/**
             * @param {?} control
             * @return {?}
             */
            function (control) {
                /** @type {?} */
                var ctl = _this.form.controls[control.key];
                if (!_this.fieldsAlreadyHidden.includes(control.key)) {
                    ctl.hidden = false;
                }
            }));
        }));
        this.showingAllFields = true;
        this.showingRequiredFields = false;
    };
    /**
     * @param {?} hideRequiredWithValue
     * @return {?}
     */
    NovoDynamicFormElement.prototype.showOnlyRequired = /**
     * @param {?} hideRequiredWithValue
     * @return {?}
     */
    function (hideRequiredWithValue) {
        var _this = this;
        this.fieldsAlreadyHidden = [];
        this.form.fieldsets.forEach((/**
         * @param {?} fieldset
         * @return {?}
         */
        function (fieldset) {
            fieldset.controls.forEach((/**
             * @param {?} control
             * @return {?}
             */
            function (control) {
                /** @type {?} */
                var ctl = _this.form.controls[control.key];
                if (ctl.hidden) {
                    _this.fieldsAlreadyHidden.push(control.key);
                }
                // Hide any non-required fields
                if (!control.required) {
                    ctl.hidden = true;
                }
                // Hide required fields that have been successfully filled out
                if (hideRequiredWithValue &&
                    !Helpers.isBlank(_this.form.value[control.key]) &&
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
    };
    Object.defineProperty(NovoDynamicFormElement.prototype, "values", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form ? this.form.value : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoDynamicFormElement.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form ? this.form.valid : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoDynamicFormElement.prototype.updatedValues = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var ret = null;
        this.form.fieldsets.forEach((/**
         * @param {?} fieldset
         * @return {?}
         */
        function (fieldset) {
            fieldset.controls.forEach((/**
             * @param {?} control
             * @return {?}
             */
            function (control) {
                if (_this.form.controls[control.key].dirty || control.dirty) {
                    if (!ret) {
                        ret = {};
                    }
                    ret[control.key] = _this.form.value[control.key];
                }
            }));
        }));
        return ret;
    };
    /**
     * @return {?}
     */
    NovoDynamicFormElement.prototype.forceValidation = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.form.controls).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var control = _this.form.controls[key];
            if (control.required && Helpers.isBlank(_this.form.value[control.key])) {
                control.markAsDirty();
                control.markAsTouched();
            }
        }));
    };
    NovoDynamicFormElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-dynamic-form',
                    template: "\n        <novo-control-templates></novo-control-templates>\n        <div class=\"novo-form-container\">\n            <header>\n                <ng-content select=\"form-title\"></ng-content>\n                <ng-content select=\"form-subtitle\"></ng-content>\n            </header>\n            <form class=\"novo-form\" [formGroup]=\"form\">\n                <ng-container *ngFor=\"let fieldset of form.fieldsets;let i = index\">\n                    <novo-fieldset *ngIf=\"fieldset.controls.length\" [index]=\"i\" [autoFocus]=\"autoFocusFirstField\" [icon]=\"fieldset.icon\" [controls]=\"fieldset.controls\" [title]=\"fieldset.title\" [form]=\"form\" [isEmbedded]=\"fieldset.isEmbedded\" [isInlineEmbedded]=\"fieldset.isInlineEmbedded\" [hidden]=\"fieldset.hidden\"></novo-fieldset>\n                </ng-container>\n            </form>\n        </div>\n    ",
                    providers: [NovoTemplateService]
                }] }
    ];
    /** @nocollapse */
    NovoDynamicFormElement.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NovoTemplateService }
    ]; };
    NovoDynamicFormElement.propDecorators = {
        controls: [{ type: Input }],
        fieldsets: [{ type: Input }],
        form: [{ type: Input }],
        layout: [{ type: Input }],
        hideNonRequiredFields: [{ type: Input }],
        autoFocusFirstField: [{ type: Input }],
        customTemplates: [{ type: ContentChildren, args: [NovoTemplate,] }]
    };
    return NovoDynamicFormElement;
}());
export { NovoDynamicFormElement };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1pY0Zvcm0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9EeW5hbWljRm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsT0FBTyxFQUFvQixTQUFTLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDN0ksT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDOztBQUUvRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHaEQ7SUFBQTtJQVdBLENBQUM7O2dCQVhBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsNkVBRVA7aUJBQ0o7Ozt3QkFFRSxLQUFLO3VCQUVMLEtBQUs7O0lBRVIsZ0NBQUM7Q0FBQSxBQVhELElBV0M7U0FMWSx5QkFBeUI7OztJQUNwQywwQ0FDYzs7SUFDZCx5Q0FDYTs7QUFHZjtJQUFBO1FBZ0JFLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFZMUIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFekIsV0FBTSxHQUFHLEtBQUssQ0FBQztJQUNqQixDQUFDOztnQkFqQ0EsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsc3lCQVVQO2lCQUNKOzs7MkJBRUUsS0FBSzt1QkFFTCxLQUFLO3dCQUVMLEtBQUs7dUJBRUwsS0FBSzt3QkFFTCxLQUFLOzRCQUVMLEtBQUs7NkJBRUwsS0FBSzttQ0FFTCxLQUFLO3lCQUVMLEtBQUs7O0lBRVIsMEJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQW5CWSxtQkFBbUI7OztJQUM5Qix1Q0FDMEI7O0lBQzFC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LElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNyRSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN6QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBN0tGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsKzFCQWFQO29CQUNILFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUNqQzs7OztnQkF4RXNELFVBQVU7Z0JBQ3hELG1CQUFtQjs7OzJCQXlFekIsS0FBSzs0QkFFTCxLQUFLO3VCQUVMLEtBQUs7eUJBRUwsS0FBSzt3Q0FFTCxLQUFLO3NDQUVMLEtBQUs7a0NBRUwsZUFBZSxTQUFDLFlBQVk7O0lBK0kvQiw2QkFBQztDQUFBLEFBOUtELElBOEtDO1NBNUpZLHNCQUFzQjs7O0lBQ2pDLDBDQUMwQjs7SUFDMUIsMkNBQ29DOztJQUNwQyxzQ0FDb0I7O0lBQ3BCLHdDQUNlOztJQUNmLHVEQUNzQzs7SUFDdEMscURBQ3FDOztJQUNyQyxpREFDeUM7Ozs7O0lBQ3pDLHFEQUFzQzs7SUFFdEMsbURBQTBCOztJQUMxQixzREFBNkI7O0lBQzdCLGtEQUF5Qjs7SUFDekIsdURBQTZCOztJQUM3Qiw2Q0FBZ0I7Ozs7O0lBRUoseUNBQTJCOzs7OztJQUFFLDJDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBRdWVyeUxpc3QsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9UZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9UZW1wbGF0ZSB9IGZyb20gJy4uL2NvbW1vbi9ub3ZvLXRlbXBsYXRlL25vdm8tdGVtcGxhdGUuZGlyZWN0aXZlJztcbi8vIEFwcFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvRmllbGRzZXQsIE5vdm9Gb3JtR3JvdXAgfSBmcm9tICcuL0Zvcm1JbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1maWVsZHNldC1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDY+PGkgW2NsYXNzXT1cImljb24gfHwgJ2JoaS1zZWN0aW9uJ1wiPjwvaT57e3RpdGxlfX08L2g2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9GaWVsZHNldEhlYWRlckVsZW1lbnQge1xuICBASW5wdXQoKVxuICB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZmllbGRzZXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1maWVsZHNldC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxub3ZvLWZpZWxkc2V0LWhlYWRlciBbaWNvbl09XCJpY29uXCIgW3RpdGxlXT1cInRpdGxlXCIgKm5nSWY9XCJ0aXRsZVwiIFtjbGFzcy5lbWJlZGRlZF09XCJpc0VtYmVkZGVkXCIgW2NsYXNzLmlubGluZS1lbWJlZGRlZF09XCJpc0lubGluZUVtYmVkZGVkXCIgW2NsYXNzLmhpZGRlbl09XCJoaWRkZW5cIj48L25vdm8tZmllbGRzZXQtaGVhZGVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29udHJvbCBvZiBjb250cm9scztsZXQgY29udHJvbEluZGV4ID0gaW5kZXg7XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZm9ybS1yb3dcIiBbY2xhc3MuZGlzYWJsZWRdPVwiY29udHJvbC5kaXNhYmxlZFwiICpuZ0lmPVwiY29udHJvbC5fX3R5cGUgIT09ICdHcm91cGVkQ29udHJvbCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5vdm8tY29udHJvbCBbYXV0b0ZvY3VzXT1cImF1dG9Gb2N1cyAmJiBpbmRleCA9PT0gMCAmJiBjb250cm9sSW5kZXggPT09IDBcIiBbY29udHJvbF09XCJjb250cm9sXCIgW2Zvcm1dPVwiZm9ybVwiPjwvbm92by1jb250cm9sPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjb250cm9sLl9fdHlwZSA9PT0gJ0dyb3VwZWRDb250cm9sJ1wiPlRPRE8gLSBHcm91cGVkQ29udHJvbDwvZGl2PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9GaWVsZHNldEVsZW1lbnQge1xuICBASW5wdXQoKVxuICBjb250cm9sczogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKVxuICBmb3JtOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcbiAgQElucHV0KClcbiAgaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KClcbiAgYXV0b0ZvY3VzOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBpc0VtYmVkZGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGlzSW5saW5lRW1iZWRkZWQgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgaGlkZGVuID0gZmFsc2U7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZHluYW1pYy1mb3JtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5vdm8tY29udHJvbC10ZW1wbGF0ZXM+PC9ub3ZvLWNvbnRyb2wtdGVtcGxhdGVzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1mb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJmb3JtLXRpdGxlXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImZvcm0tc3VidGl0bGVcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwibm92by1mb3JtXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGRzZXQgb2YgZm9ybS5maWVsZHNldHM7bGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICA8bm92by1maWVsZHNldCAqbmdJZj1cImZpZWxkc2V0LmNvbnRyb2xzLmxlbmd0aFwiIFtpbmRleF09XCJpXCIgW2F1dG9Gb2N1c109XCJhdXRvRm9jdXNGaXJzdEZpZWxkXCIgW2ljb25dPVwiZmllbGRzZXQuaWNvblwiIFtjb250cm9sc109XCJmaWVsZHNldC5jb250cm9sc1wiIFt0aXRsZV09XCJmaWVsZHNldC50aXRsZVwiIFtmb3JtXT1cImZvcm1cIiBbaXNFbWJlZGRlZF09XCJmaWVsZHNldC5pc0VtYmVkZGVkXCIgW2lzSW5saW5lRW1iZWRkZWRdPVwiZmllbGRzZXQuaXNJbmxpbmVFbWJlZGRlZFwiIFtoaWRkZW5dPVwiZmllbGRzZXQuaGlkZGVuXCI+PC9ub3ZvLWZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICBwcm92aWRlcnM6IFtOb3ZvVGVtcGxhdGVTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0R5bmFtaWNGb3JtRWxlbWVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KClcbiAgY29udHJvbHM6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KClcbiAgZmllbGRzZXRzOiBBcnJheTxOb3ZvRmllbGRzZXQ+ID0gW107XG4gIEBJbnB1dCgpXG4gIGZvcm06IE5vdm9Gb3JtR3JvdXA7XG4gIEBJbnB1dCgpXG4gIGxheW91dDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBoaWRlTm9uUmVxdWlyZWRGaWVsZHM6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBhdXRvRm9jdXNGaXJzdEZpZWxkOiBib29sZWFuID0gZmFsc2U7XG4gIEBDb250ZW50Q2hpbGRyZW4oTm92b1RlbXBsYXRlKVxuICBjdXN0b21UZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOb3ZvVGVtcGxhdGU+O1xuICBwcml2YXRlIGZpZWxkc0FscmVhZHlIaWRkZW46IHN0cmluZ1tdO1xuXG4gIGFsbEZpZWxkc1JlcXVpcmVkID0gZmFsc2U7XG4gIGFsbEZpZWxkc05vdFJlcXVpcmVkID0gZmFsc2U7XG4gIHNob3dpbmdBbGxGaWVsZHMgPSBmYWxzZTtcbiAgc2hvd2luZ1JlcXVpcmVkRmllbGRzID0gdHJ1ZTtcbiAgbnVtQ29udHJvbHMgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSB0ZW1wbGF0ZXM6IE5vdm9UZW1wbGF0ZVNlcnZpY2UpIHsgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0ubGF5b3V0ID0gdGhpcy5sYXlvdXQ7XG5cbiAgICBpZiAoISh0aGlzLmZpZWxkc2V0cyAmJiB0aGlzLmZpZWxkc2V0cy5sZW5ndGgpICYmIHRoaXMuY29udHJvbHMgJiYgdGhpcy5jb250cm9scy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZmllbGRzZXRzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgY29udHJvbHM6IHRoaXMuY29udHJvbHMsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgICAgdGhpcy5udW1Db250cm9scyA9IHRoaXMuY29udHJvbHMubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAodGhpcy5maWVsZHNldHMpIHtcbiAgICAgIHRoaXMuZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICAgIHRoaXMubnVtQ29udHJvbHMgPSB0aGlzLm51bUNvbnRyb2xzICsgZmllbGRzZXQuY29udHJvbHMubGVuZ3RoO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWlyZWRGaWVsZHM6IEFycmF5PGFueT4gPSBbXTtcbiAgICBjb25zdCBub25SZXF1aXJlZEZpZWxkczogQXJyYXk8YW55PiA9IFtdO1xuICAgIHRoaXMuZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgIGlmIChjb250cm9sLnJlcXVpcmVkKSB7XG4gICAgICAgICAgcmVxdWlyZWRGaWVsZHMucHVzaChjb250cm9sKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub25SZXF1aXJlZEZpZWxkcy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLmFsbEZpZWxkc1JlcXVpcmVkID0gcmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSB0aGlzLm51bUNvbnRyb2xzO1xuICAgIHRoaXMuYWxsRmllbGRzTm90UmVxdWlyZWQgPSBub25SZXF1aXJlZEZpZWxkcy5sZW5ndGggPT09IHRoaXMubnVtQ29udHJvbHM7XG4gICAgaWYgKHRoaXMuYWxsRmllbGRzTm90UmVxdWlyZWQgJiYgdGhpcy5oaWRlTm9uUmVxdWlyZWRGaWVsZHMpIHtcbiAgICAgIHRoaXMuZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmZvcm0uZmllbGRzZXRzID0gWy4uLnRoaXMuZmllbGRzZXRzXTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5jdXN0b21UZW1wbGF0ZXMgJiYgdGhpcy5jdXN0b21UZW1wbGF0ZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmN1c3RvbVRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVzLmFkZEN1c3RvbSh0ZW1wbGF0ZS5uYW1lLCB0ZW1wbGF0ZS50ZW1wbGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2hvd0FsbEZpZWxkcygpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0uZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgIGNvbnN0IGN0bCA9IHRoaXMuZm9ybS5jb250cm9sc1tjb250cm9sLmtleV07XG4gICAgICAgIGlmICghdGhpcy5maWVsZHNBbHJlYWR5SGlkZGVuLmluY2x1ZGVzKGNvbnRyb2wua2V5KSkge1xuICAgICAgICAgIGN0bC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zaG93aW5nQWxsRmllbGRzID0gdHJ1ZTtcbiAgICB0aGlzLnNob3dpbmdSZXF1aXJlZEZpZWxkcyA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHNob3dPbmx5UmVxdWlyZWQoaGlkZVJlcXVpcmVkV2l0aFZhbHVlKTogdm9pZCB7XG4gICAgdGhpcy5maWVsZHNBbHJlYWR5SGlkZGVuID0gW107XG4gICAgdGhpcy5mb3JtLmZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgZmllbGRzZXQuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICBjb25zdCBjdGwgPSB0aGlzLmZvcm0uY29udHJvbHNbY29udHJvbC5rZXldO1xuXG4gICAgICAgIGlmIChjdGwuaGlkZGVuKSB7XG4gICAgICAgICAgdGhpcy5maWVsZHNBbHJlYWR5SGlkZGVuLnB1c2goY29udHJvbC5rZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGlkZSBhbnkgbm9uLXJlcXVpcmVkIGZpZWxkc1xuICAgICAgICBpZiAoIWNvbnRyb2wucmVxdWlyZWQpIHtcbiAgICAgICAgICBjdGwuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhpZGUgcmVxdWlyZWQgZmllbGRzIHRoYXQgaGF2ZSBiZWVuIHN1Y2Nlc3NmdWxseSBmaWxsZWQgb3V0XG4gICAgICAgIGlmIChcbiAgICAgICAgICBoaWRlUmVxdWlyZWRXaXRoVmFsdWUgJiZcbiAgICAgICAgICAhSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS52YWx1ZVtjb250cm9sLmtleV0pICYmXG4gICAgICAgICAgKCFjb250cm9sLmlzRW1wdHkgfHwgKGNvbnRyb2wuaXNFbXB0eSAmJiBjb250cm9sLmlzRW1wdHkoY3RsKSkpXG4gICAgICAgICkge1xuICAgICAgICAgIGN0bC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRG9uJ3QgaGlkZSBmaWVsZHMgd2l0aCBlcnJvcnNcbiAgICAgICAgaWYgKGN0bC5lcnJvcnMpIHtcbiAgICAgICAgICBjdGwuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2hvd2luZ0FsbEZpZWxkcyA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd2luZ1JlcXVpcmVkRmllbGRzID0gdHJ1ZTtcbiAgICB0aGlzLmZvcmNlVmFsaWRhdGlvbigpO1xuICB9XG5cbiAgZ2V0IHZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtID8gdGhpcy5mb3JtLnZhbHVlIDogbnVsbDtcbiAgfVxuXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0gPyB0aGlzLmZvcm0udmFsaWQgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVkVmFsdWVzKCk6IGFueSB7XG4gICAgbGV0IHJldCA9IG51bGw7XG4gICAgdGhpcy5mb3JtLmZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgZmllbGRzZXQuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5kaXJ0eSB8fCBjb250cm9sLmRpcnR5KSB7XG4gICAgICAgICAgaWYgKCFyZXQpIHtcbiAgICAgICAgICAgIHJldCA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXRbY29udHJvbC5rZXldID0gdGhpcy5mb3JtLnZhbHVlW2NvbnRyb2wua2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHB1YmxpYyBmb3JjZVZhbGlkYXRpb24oKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXModGhpcy5mb3JtLmNvbnRyb2xzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgY29udHJvbDogYW55ID0gdGhpcy5mb3JtLmNvbnRyb2xzW2tleV07XG4gICAgICBpZiAoY29udHJvbC5yZXF1aXJlZCAmJiBIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLnZhbHVlW2NvbnRyb2wua2V5XSkpIHtcbiAgICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19