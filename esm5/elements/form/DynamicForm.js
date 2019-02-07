/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, Input, ElementRef, ContentChildren, QueryList, } from '@angular/core';
// APP
import { Helpers } from './../../utils/Helpers';
import { NovoTemplateService } from '../../services/template/NovoTemplateService';
import { NovoTemplate } from '../common/novo-template/novo-template.directive';
var NovoFieldsetHeaderElement = /** @class */ (function () {
    function NovoFieldsetHeaderElement() {
    }
    NovoFieldsetHeaderElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-fieldset-header',
                    template: "\n    <h6><i [class]=\"icon || 'bhi-section'\"></i>{{ title }}</h6>\n  "
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
    }
    NovoFieldsetElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-fieldset',
                    template: "\n    <div class=\"novo-fieldset-container\">\n      <novo-fieldset-header [icon]=\"icon\" [title]=\"title\" *ngIf=\"title\"></novo-fieldset-header>\n      <ng-container *ngFor=\"let control of controls; let controlIndex = index\">\n        <div class=\"novo-form-row\" [class.disabled]=\"control.disabled\">\n          <novo-control [autoFocus]=\"autoFocus && index === 0 && controlIndex === 0\" [control]=\"control\" [form]=\"form\"></novo-control>\n        </div>\n      </ng-container>\n    </div>\n  "
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
            this.fieldsets.forEach(function (fieldset) {
                _this.numControls = _this.numControls + fieldset.controls.length;
            });
        }
        /** @type {?} */
        var requiredFields = [];
        /** @type {?} */
        var nonRequiredFields = [];
        this.fieldsets.forEach(function (fieldset) {
            fieldset.controls.forEach(function (control) {
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
            this.fieldsets.forEach(function (fieldset) {
                fieldset.controls.forEach(function (control) {
                    _this.form.controls[control.key].hidden = false;
                });
            });
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
            this.customTemplates.forEach(function (template) {
                _this.templates.addCustom(template.name, template.template);
            });
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
        this.form.fieldsets.forEach(function (fieldset) {
            fieldset.controls.forEach(function (control) {
                _this.form.controls[control.key].hidden = false;
            });
        });
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
        this.form.fieldsets.forEach(function (fieldset) {
            fieldset.controls.forEach(function (control) {
                // Hide any non-required fields
                if (!control.required) {
                    _this.form.controls[control.key].hidden = true;
                }
                // Hide required fields that have been successfully filled out
                if (hideRequiredWithValue &&
                    !Helpers.isBlank(_this.form.value[control.key]) &&
                    (!control.isEmpty || (control.isEmpty && control.isEmpty(_this.form.controls[control.key])))) {
                    _this.form.controls[control.key].hidden = true;
                }
                // Don't hide fields with errors
                if (_this.form.controls[control.key].errors) {
                    _this.form.controls[control.key].hidden = false;
                }
            });
        });
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
        this.form.fieldsets.forEach(function (fieldset) {
            fieldset.controls.forEach(function (control) {
                if (_this.form.controls[control.key].dirty || control.dirty) {
                    if (!ret) {
                        ret = {};
                    }
                    ret[control.key] = _this.form.value[control.key];
                }
            });
        });
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
        Object.keys(this.form.controls).forEach(function (key) {
            /** @type {?} */
            var control = _this.form.controls[key];
            if (control.required && Helpers.isBlank(_this.form.value[control.key])) {
                control.markAsDirty();
                control.markAsTouched();
            }
        });
    };
    NovoDynamicFormElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-dynamic-form',
                    template: "\n    <novo-control-templates></novo-control-templates>\n    <div class=\"novo-form-container\">\n      <header>\n        <ng-content select=\"form-title\"></ng-content>\n        <ng-content select=\"form-subtitle\"></ng-content>\n      </header>\n      <form class=\"novo-form\" [formGroup]=\"form\">\n        <ng-container *ngFor=\"let fieldset of form.fieldsets; let i = index\">\n          <novo-fieldset\n            *ngIf=\"fieldset.controls.length\"\n            [index]=\"i\"\n            [autoFocus]=\"autoFocusFirstField\"\n            [icon]=\"fieldset.icon\"\n            [controls]=\"fieldset.controls\"\n            [title]=\"fieldset.title\"\n            [form]=\"form\"\n          ></novo-fieldset>\n        </ng-container>\n      </form>\n    </div>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1pY0Zvcm0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9EeW5hbWljRm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFPTCxVQUFVLEVBQ1YsZUFBZSxFQUNmLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWhELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUUvRTtJQUFBO0lBV0EsQ0FBQzs7Z0JBWEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSx5RUFFVDtpQkFDRjs7O3dCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUFFUixnQ0FBQztDQUFBLEFBWEQsSUFXQztTQUxZLHlCQUF5Qjs7O0lBQ3BDLDBDQUNjOztJQUNkLHlDQUNhOztBQUdmO0lBQUE7UUFlRSxhQUFRLEdBQWUsRUFBRSxDQUFDO0lBVzVCLENBQUM7O2dCQTFCQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSwyZkFTVDtpQkFDRjs7OzJCQUVFLEtBQUs7dUJBRUwsS0FBSzt3QkFFTCxLQUFLO3VCQUVMLEtBQUs7d0JBRUwsS0FBSzs0QkFFTCxLQUFLOztJQUVSLDBCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FiWSxtQkFBbUI7OztJQUM5Qix1Q0FDMEI7O0lBQzFCLG1DQUNVOztJQUNWLG9DQUNjOztJQUNkLG1DQUNhOztJQUNiLG9DQUNjOztJQUNkLHdDQUNtQjs7QUFHckI7SUFnREUsZ0NBQW9CLE9BQW1CLEVBQVUsU0FBOEI7UUFBM0QsWUFBTyxHQUFQLE9BQU8sQ0FBWTtR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QUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDakM7Ozs7Z0JBN0VDLFVBQVU7Z0JBUUgsbUJBQW1COzs7MkJBdUV6QixLQUFLOzRCQUVMLEtBQUs7dUJBRUwsS0FBSzt5QkFFTCxLQUFLO3dDQUVMLEtBQUs7c0NBRUwsS0FBSztrQ0FFTCxlQUFlLFNBQUMsWUFBWTs7SUFvSS9CLDZCQUFDO0NBQUEsQUEzS0QsSUEyS0M7U0FqSlksc0JBQXNCOzs7SUFDakMsMENBQzBCOztJQUMxQiwyQ0FDb0M7O0lBQ3BDLHNDQUNvQjs7SUFDcEIsd0NBQ2U7O0lBQ2YsdURBQ3NDOztJQUN0QyxxREFDcUM7O0lBQ3JDLGlEQUN5Qzs7SUFFekMsbURBQTBCOztJQUMxQixzREFBNkI7O0lBQzdCLGtEQUF5Qjs7SUFDekIsdURBQTZCOztJQUM3Qiw2Q0FBZ0I7Ozs7O0lBRUoseUNBQTJCOzs7OztJQUFFLDJDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRWxlbWVudFJlZixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIEFmdGVyQ29udGVudEluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9GaWVsZHNldCwgTm92b0Zvcm1Hcm91cCB9IGZyb20gJy4vRm9ybUludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm92b1RlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlL05vdm9UZW1wbGF0ZVNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b1RlbXBsYXRlIH0gZnJvbSAnLi4vY29tbW9uL25vdm8tdGVtcGxhdGUvbm92by10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWZpZWxkc2V0LWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGg2PjxpIFtjbGFzc109XCJpY29uIHx8ICdiaGktc2VjdGlvbidcIj48L2k+e3sgdGl0bGUgfX08L2g2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRmllbGRzZXRIZWFkZXJFbGVtZW50IHtcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWZpZWxkc2V0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwibm92by1maWVsZHNldC1jb250YWluZXJcIj5cbiAgICAgIDxub3ZvLWZpZWxkc2V0LWhlYWRlciBbaWNvbl09XCJpY29uXCIgW3RpdGxlXT1cInRpdGxlXCIgKm5nSWY9XCJ0aXRsZVwiPjwvbm92by1maWVsZHNldC1oZWFkZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb250cm9sIG9mIGNvbnRyb2xzOyBsZXQgY29udHJvbEluZGV4ID0gaW5kZXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZm9ybS1yb3dcIiBbY2xhc3MuZGlzYWJsZWRdPVwiY29udHJvbC5kaXNhYmxlZFwiPlxuICAgICAgICAgIDxub3ZvLWNvbnRyb2wgW2F1dG9Gb2N1c109XCJhdXRvRm9jdXMgJiYgaW5kZXggPT09IDAgJiYgY29udHJvbEluZGV4ID09PSAwXCIgW2NvbnRyb2xdPVwiY29udHJvbFwiIFtmb3JtXT1cImZvcm1cIj48L25vdm8tY29udHJvbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0ZpZWxkc2V0RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGNvbnRyb2xzOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpXG4gIGZvcm06IGFueTtcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpbmRleDogbnVtYmVyO1xuICBASW5wdXQoKVxuICBhdXRvRm9jdXM6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZHluYW1pYy1mb3JtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bm92by1jb250cm9sLXRlbXBsYXRlcz48L25vdm8tY29udHJvbC10ZW1wbGF0ZXM+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tZm9ybS1jb250YWluZXJcIj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImZvcm0tdGl0bGVcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImZvcm0tc3VidGl0bGVcIj48L25nLWNvbnRlbnQ+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxmb3JtIGNsYXNzPVwibm92by1mb3JtXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkc2V0IG9mIGZvcm0uZmllbGRzZXRzOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgPG5vdm8tZmllbGRzZXRcbiAgICAgICAgICAgICpuZ0lmPVwiZmllbGRzZXQuY29udHJvbHMubGVuZ3RoXCJcbiAgICAgICAgICAgIFtpbmRleF09XCJpXCJcbiAgICAgICAgICAgIFthdXRvRm9jdXNdPVwiYXV0b0ZvY3VzRmlyc3RGaWVsZFwiXG4gICAgICAgICAgICBbaWNvbl09XCJmaWVsZHNldC5pY29uXCJcbiAgICAgICAgICAgIFtjb250cm9sc109XCJmaWVsZHNldC5jb250cm9sc1wiXG4gICAgICAgICAgICBbdGl0bGVdPVwiZmllbGRzZXQudGl0bGVcIlxuICAgICAgICAgICAgW2Zvcm1dPVwiZm9ybVwiXG4gICAgICAgICAgPjwvbm92by1maWVsZHNldD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHByb3ZpZGVyczogW05vdm9UZW1wbGF0ZVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRHluYW1pY0Zvcm1FbGVtZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKVxuICBjb250cm9sczogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKVxuICBmaWVsZHNldHM6IEFycmF5PE5vdm9GaWVsZHNldD4gPSBbXTtcbiAgQElucHV0KClcbiAgZm9ybTogTm92b0Zvcm1Hcm91cDtcbiAgQElucHV0KClcbiAgbGF5b3V0OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGhpZGVOb25SZXF1aXJlZEZpZWxkczogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIGF1dG9Gb2N1c0ZpcnN0RmllbGQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQENvbnRlbnRDaGlsZHJlbihOb3ZvVGVtcGxhdGUpXG4gIGN1c3RvbVRlbXBsYXRlczogUXVlcnlMaXN0PE5vdm9UZW1wbGF0ZT47XG5cbiAgYWxsRmllbGRzUmVxdWlyZWQgPSBmYWxzZTtcbiAgYWxsRmllbGRzTm90UmVxdWlyZWQgPSBmYWxzZTtcbiAgc2hvd2luZ0FsbEZpZWxkcyA9IGZhbHNlO1xuICBzaG93aW5nUmVxdWlyZWRGaWVsZHMgPSB0cnVlO1xuICBudW1Db250cm9scyA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHRlbXBsYXRlczogTm92b1RlbXBsYXRlU2VydmljZSkge31cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtLmxheW91dCA9IHRoaXMubGF5b3V0O1xuXG4gICAgaWYgKCEodGhpcy5maWVsZHNldHMgJiYgdGhpcy5maWVsZHNldHMubGVuZ3RoKSAmJiB0aGlzLmNvbnRyb2xzICYmIHRoaXMuY29udHJvbHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmZpZWxkc2V0cyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRyb2xzOiB0aGlzLmNvbnRyb2xzLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICAgIHRoaXMubnVtQ29udHJvbHMgPSB0aGlzLmNvbnRyb2xzLmxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmllbGRzZXRzKSB7XG4gICAgICB0aGlzLmZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgICB0aGlzLm51bUNvbnRyb2xzID0gdGhpcy5udW1Db250cm9scyArIGZpZWxkc2V0LmNvbnRyb2xzLmxlbmd0aDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCByZXF1aXJlZEZpZWxkczogQXJyYXk8YW55PiA9IFtdO1xuICAgIGxldCBub25SZXF1aXJlZEZpZWxkczogQXJyYXk8YW55PiA9IFtdO1xuICAgIHRoaXMuZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgIGlmIChjb250cm9sLnJlcXVpcmVkKSB7XG4gICAgICAgICAgcmVxdWlyZWRGaWVsZHMucHVzaChjb250cm9sKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub25SZXF1aXJlZEZpZWxkcy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLmFsbEZpZWxkc1JlcXVpcmVkID0gcmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSB0aGlzLm51bUNvbnRyb2xzO1xuICAgIHRoaXMuYWxsRmllbGRzTm90UmVxdWlyZWQgPSBub25SZXF1aXJlZEZpZWxkcy5sZW5ndGggPT09IHRoaXMubnVtQ29udHJvbHM7XG4gICAgaWYgKHRoaXMuYWxsRmllbGRzTm90UmVxdWlyZWQgJiYgdGhpcy5oaWRlTm9uUmVxdWlyZWRGaWVsZHMpIHtcbiAgICAgIHRoaXMuZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmZvcm0uZmllbGRzZXRzID0gWy4uLnRoaXMuZmllbGRzZXRzXTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5jdXN0b21UZW1wbGF0ZXMgJiYgdGhpcy5jdXN0b21UZW1wbGF0ZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmN1c3RvbVRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVzLmFkZEN1c3RvbSh0ZW1wbGF0ZS5uYW1lLCB0ZW1wbGF0ZS50ZW1wbGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2hvd0FsbEZpZWxkcygpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0uZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uaGlkZGVuID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNob3dpbmdBbGxGaWVsZHMgPSB0cnVlO1xuICAgIHRoaXMuc2hvd2luZ1JlcXVpcmVkRmllbGRzID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgc2hvd09ubHlSZXF1aXJlZChoaWRlUmVxdWlyZWRXaXRoVmFsdWUpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0uZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgIC8vIEhpZGUgYW55IG5vbi1yZXF1aXJlZCBmaWVsZHNcbiAgICAgICAgaWYgKCFjb250cm9sLnJlcXVpcmVkKSB7XG4gICAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGlkZSByZXF1aXJlZCBmaWVsZHMgdGhhdCBoYXZlIGJlZW4gc3VjY2Vzc2Z1bGx5IGZpbGxlZCBvdXRcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGhpZGVSZXF1aXJlZFdpdGhWYWx1ZSAmJlxuICAgICAgICAgICFIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLnZhbHVlW2NvbnRyb2wua2V5XSkgJiZcbiAgICAgICAgICAoIWNvbnRyb2wuaXNFbXB0eSB8fCAoY29udHJvbC5pc0VtcHR5ICYmIGNvbnRyb2wuaXNFbXB0eSh0aGlzLmZvcm0uY29udHJvbHNbY29udHJvbC5rZXldKSkpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvbid0IGhpZGUgZmllbGRzIHdpdGggZXJyb3JzXG4gICAgICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmVycm9ycykge1xuICAgICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2hvd2luZ0FsbEZpZWxkcyA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd2luZ1JlcXVpcmVkRmllbGRzID0gdHJ1ZTtcbiAgICB0aGlzLmZvcmNlVmFsaWRhdGlvbigpO1xuICB9XG5cbiAgZ2V0IHZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtID8gdGhpcy5mb3JtLnZhbHVlIDogbnVsbDtcbiAgfVxuXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0gPyB0aGlzLmZvcm0udmFsaWQgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVkVmFsdWVzKCk6IGFueSB7XG4gICAgbGV0IHJldCA9IG51bGw7XG4gICAgdGhpcy5mb3JtLmZpZWxkc2V0cy5mb3JFYWNoKChmaWVsZHNldCkgPT4ge1xuICAgICAgZmllbGRzZXQuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5kaXJ0eSB8fCBjb250cm9sLmRpcnR5KSB7XG4gICAgICAgICAgaWYgKCFyZXQpIHtcbiAgICAgICAgICAgIHJldCA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXRbY29udHJvbC5rZXldID0gdGhpcy5mb3JtLnZhbHVlW2NvbnRyb2wua2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHB1YmxpYyBmb3JjZVZhbGlkYXRpb24oKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXModGhpcy5mb3JtLmNvbnRyb2xzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgbGV0IGNvbnRyb2w6IGFueSA9IHRoaXMuZm9ybS5jb250cm9sc1trZXldO1xuICAgICAgaWYgKGNvbnRyb2wucmVxdWlyZWQgJiYgSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS52YWx1ZVtjb250cm9sLmtleV0pKSB7XG4gICAgICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==