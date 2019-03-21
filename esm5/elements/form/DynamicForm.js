/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG
import { Component, Input, ElementRef, ContentChildren, QueryList, ViewChild, } from '@angular/core';
// App
import { Helpers } from './../../utils/Helpers';
import { NovoTemplateService } from '../../services/template/NovoTemplateService';
import { NovoTemplate } from '../common/novo-template/novo-template.directive';
var NovoFieldsetHeaderElement = /** @class */ (function () {
    function NovoFieldsetHeaderElement() {
        this.title = '';
        this.useCustomHeading = false;
    }
    /**
     * @return {?}
     */
    NovoFieldsetHeaderElement.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.useCustomHeading = this.customHeadingWrapper.elementRef.nativeElement.childNodes.length > 0;
    };
    NovoFieldsetHeaderElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-fieldset-header',
                    template: "\n    <h6>\n      <div *ngIf=\"title; else customHeadingWrapper\"><i [class]=\"icon || 'bhi-section'\"></i>{{ title }}</div>\n      <ng-template #customHeadingWrapper> <ng-content></ng-content> </ng-template>\n    </h6>\n  "
                }] }
    ];
    NovoFieldsetHeaderElement.propDecorators = {
        title: [{ type: Input }],
        icon: [{ type: Input }],
        customHeadingWrapper: [{ type: ViewChild, args: ['customHeadingWrapper',] }]
    };
    return NovoFieldsetHeaderElement;
}());
export { NovoFieldsetHeaderElement };
if (false) {
    /** @type {?} */
    NovoFieldsetHeaderElement.prototype.title;
    /** @type {?} */
    NovoFieldsetHeaderElement.prototype.icon;
    /** @type {?} */
    NovoFieldsetHeaderElement.prototype.customHeadingWrapper;
    /** @type {?} */
    NovoFieldsetHeaderElement.prototype.useCustomHeading;
}
var NovoFieldsetElement = /** @class */ (function () {
    function NovoFieldsetElement() {
        this.controls = [];
    }
    NovoFieldsetElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-fieldset',
                    template: "\n    <div class=\"novo-fieldset-container\">\n      <novo-fieldset-header [icon]=\"icon\" [title]=\"title\" *ngIf=\"title\"></novo-fieldset-header>\n      <ng-container *ngFor=\"let control of controls; let controlIndex = index\">\n        <div class=\"novo-form-row\" [class.disabled]=\"control.disabled\" *ngIf=\"control.__type !== 'GroupedControl'\">\n          <novo-control [autoFocus]=\"autoFocus && index === 0 && controlIndex === 0\" [control]=\"control\" [form]=\"form\"></novo-control>\n        </div>\n        <div *ngIf=\"control.__type === 'GroupedControl'\">TODO - GroupedControl</div>\n      </ng-container>\n    </div>\n  "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1pY0Zvcm0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9EeW5hbWljRm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFJTCxVQUFVLEVBQ1YsZUFBZSxFQUNmLFNBQVMsRUFFVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7O0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFFL0U7SUFBQTtRQVdFLFVBQUssR0FBWSxFQUFFLENBQUM7UUFJYixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7SUFLM0MsQ0FBQzs7OztJQUhDLHNEQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ25HLENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLGlPQUtUO2lCQUNGOzs7d0JBRUUsS0FBSzt1QkFFTCxLQUFLO3VDQUVMLFNBQVMsU0FBQyxzQkFBc0I7O0lBTW5DLGdDQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FYWSx5QkFBeUI7OztJQUNwQywwQ0FDb0I7O0lBQ3BCLHlDQUNhOztJQUNiLHlEQUF3RDs7SUFDeEQscURBQXlDOztBQU8zQztJQUFBO1FBZ0JFLGFBQVEsR0FBZSxFQUFFLENBQUM7SUFXNUIsQ0FBQzs7Z0JBM0JBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLGlvQkFVVDtp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LENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNyRSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN6QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBMUtGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsb3dCQXFCVDtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDakM7Ozs7Z0JBeEZDLFVBQVU7Z0JBU0gsbUJBQW1COzs7MkJBaUZ6QixLQUFLOzRCQUVMLEtBQUs7dUJBRUwsS0FBSzt5QkFFTCxLQUFLO3dDQUVMLEtBQUs7c0NBRUwsS0FBSztrQ0FFTCxlQUFlLFNBQUMsWUFBWTs7SUFvSS9CLDZCQUFDO0NBQUEsQUEzS0QsSUEyS0M7U0FqSlksc0JBQXNCOzs7SUFDakMsMENBQzBCOztJQUMxQiwyQ0FDb0M7O0lBQ3BDLHNDQUNvQjs7SUFDcEIsd0NBQ2U7O0lBQ2YsdURBQ3NDOztJQUN0QyxxREFDcUM7O0lBQ3JDLGlEQUN5Qzs7SUFFekMsbURBQTBCOztJQUMxQixzREFBNkI7O0lBQzdCLGtEQUF5Qjs7SUFDekIsdURBQTZCOztJQUM3Qiw2Q0FBZ0I7Ozs7O0lBRUoseUNBQTJCOzs7OztJQUFFLDJDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgRWxlbWVudFJlZixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBcHBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0ZpZWxkc2V0LCBOb3ZvRm9ybUdyb3VwIH0gZnJvbSAnLi9Gb3JtSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOb3ZvVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVtcGxhdGUvTm92b1RlbXBsYXRlU2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvVGVtcGxhdGUgfSBmcm9tICcuLi9jb21tb24vbm92by10ZW1wbGF0ZS9ub3ZvLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZmllbGRzZXQtaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aDY+XG4gICAgICA8ZGl2ICpuZ0lmPVwidGl0bGU7IGVsc2UgY3VzdG9tSGVhZGluZ1dyYXBwZXJcIj48aSBbY2xhc3NdPVwiaWNvbiB8fCAnYmhpLXNlY3Rpb24nXCI+PC9pPnt7IHRpdGxlIH19PC9kaXY+XG4gICAgICA8bmctdGVtcGxhdGUgI2N1c3RvbUhlYWRpbmdXcmFwcGVyPiA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IDwvbmctdGVtcGxhdGU+XG4gICAgPC9oNj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0ZpZWxkc2V0SGVhZGVyRWxlbWVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKVxuICB0aXRsZT86IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG4gIEBWaWV3Q2hpbGQoJ2N1c3RvbUhlYWRpbmdXcmFwcGVyJykgY3VzdG9tSGVhZGluZ1dyYXBwZXI7XG4gIHB1YmxpYyB1c2VDdXN0b21IZWFkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXNlQ3VzdG9tSGVhZGluZyA9IHRoaXMuY3VzdG9tSGVhZGluZ1dyYXBwZXIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMDtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWZpZWxkc2V0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwibm92by1maWVsZHNldC1jb250YWluZXJcIj5cbiAgICAgIDxub3ZvLWZpZWxkc2V0LWhlYWRlciBbaWNvbl09XCJpY29uXCIgW3RpdGxlXT1cInRpdGxlXCIgKm5nSWY9XCJ0aXRsZVwiPjwvbm92by1maWVsZHNldC1oZWFkZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb250cm9sIG9mIGNvbnRyb2xzOyBsZXQgY29udHJvbEluZGV4ID0gaW5kZXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZm9ybS1yb3dcIiBbY2xhc3MuZGlzYWJsZWRdPVwiY29udHJvbC5kaXNhYmxlZFwiICpuZ0lmPVwiY29udHJvbC5fX3R5cGUgIT09ICdHcm91cGVkQ29udHJvbCdcIj5cbiAgICAgICAgICA8bm92by1jb250cm9sIFthdXRvRm9jdXNdPVwiYXV0b0ZvY3VzICYmIGluZGV4ID09PSAwICYmIGNvbnRyb2xJbmRleCA9PT0gMFwiIFtjb250cm9sXT1cImNvbnRyb2xcIiBbZm9ybV09XCJmb3JtXCI+PC9ub3ZvLWNvbnRyb2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiY29udHJvbC5fX3R5cGUgPT09ICdHcm91cGVkQ29udHJvbCdcIj5UT0RPIC0gR3JvdXBlZENvbnRyb2w8L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRmllbGRzZXRFbGVtZW50IHtcbiAgQElucHV0KClcbiAgY29udHJvbHM6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KClcbiAgZm9ybTogYW55O1xuICBASW5wdXQoKVxuICB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGF1dG9Gb2N1czogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1keW5hbWljLWZvcm0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxub3ZvLWNvbnRyb2wtdGVtcGxhdGVzPjwvbm92by1jb250cm9sLXRlbXBsYXRlcz5cbiAgICA8ZGl2IGNsYXNzPVwibm92by1mb3JtLWNvbnRhaW5lclwiPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZm9ybS10aXRsZVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZm9ybS1zdWJ0aXRsZVwiPjwvbmctY29udGVudD5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGZvcm0gY2xhc3M9XCJub3ZvLWZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGRzZXQgb2YgZm9ybS5maWVsZHNldHM7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICA8bm92by1maWVsZHNldFxuICAgICAgICAgICAgKm5nSWY9XCJmaWVsZHNldC5jb250cm9scy5sZW5ndGhcIlxuICAgICAgICAgICAgW2luZGV4XT1cImlcIlxuICAgICAgICAgICAgW2F1dG9Gb2N1c109XCJhdXRvRm9jdXNGaXJzdEZpZWxkXCJcbiAgICAgICAgICAgIFtpY29uXT1cImZpZWxkc2V0Lmljb25cIlxuICAgICAgICAgICAgW2NvbnRyb2xzXT1cImZpZWxkc2V0LmNvbnRyb2xzXCJcbiAgICAgICAgICAgIFt0aXRsZV09XCJmaWVsZHNldC50aXRsZVwiXG4gICAgICAgICAgICBbZm9ybV09XCJmb3JtXCJcbiAgICAgICAgICA+PC9ub3ZvLWZpZWxkc2V0PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbTm92b1RlbXBsYXRlU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EeW5hbWljRm9ybUVsZW1lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBJbnB1dCgpXG4gIGNvbnRyb2xzOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpXG4gIGZpZWxkc2V0czogQXJyYXk8Tm92b0ZpZWxkc2V0PiA9IFtdO1xuICBASW5wdXQoKVxuICBmb3JtOiBOb3ZvRm9ybUdyb3VwO1xuICBASW5wdXQoKVxuICBsYXlvdXQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgaGlkZU5vblJlcXVpcmVkRmllbGRzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgYXV0b0ZvY3VzRmlyc3RGaWVsZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAQ29udGVudENoaWxkcmVuKE5vdm9UZW1wbGF0ZSlcbiAgY3VzdG9tVGVtcGxhdGVzOiBRdWVyeUxpc3Q8Tm92b1RlbXBsYXRlPjtcblxuICBhbGxGaWVsZHNSZXF1aXJlZCA9IGZhbHNlO1xuICBhbGxGaWVsZHNOb3RSZXF1aXJlZCA9IGZhbHNlO1xuICBzaG93aW5nQWxsRmllbGRzID0gZmFsc2U7XG4gIHNob3dpbmdSZXF1aXJlZEZpZWxkcyA9IHRydWU7XG4gIG51bUNvbnRyb2xzID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgdGVtcGxhdGVzOiBOb3ZvVGVtcGxhdGVTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0ubGF5b3V0ID0gdGhpcy5sYXlvdXQ7XG5cbiAgICBpZiAoISh0aGlzLmZpZWxkc2V0cyAmJiB0aGlzLmZpZWxkc2V0cy5sZW5ndGgpICYmIHRoaXMuY29udHJvbHMgJiYgdGhpcy5jb250cm9scy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZmllbGRzZXRzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgY29udHJvbHM6IHRoaXMuY29udHJvbHMsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgICAgdGhpcy5udW1Db250cm9scyA9IHRoaXMuY29udHJvbHMubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAodGhpcy5maWVsZHNldHMpIHtcbiAgICAgIHRoaXMuZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICAgIHRoaXMubnVtQ29udHJvbHMgPSB0aGlzLm51bUNvbnRyb2xzICsgZmllbGRzZXQuY29udHJvbHMubGVuZ3RoO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHJlcXVpcmVkRmllbGRzOiBBcnJheTxhbnk+ID0gW107XG4gICAgbGV0IG5vblJlcXVpcmVkRmllbGRzOiBBcnJheTxhbnk+ID0gW107XG4gICAgdGhpcy5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgaWYgKGNvbnRyb2wucmVxdWlyZWQpIHtcbiAgICAgICAgICByZXF1aXJlZEZpZWxkcy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vblJlcXVpcmVkRmllbGRzLnB1c2goY29udHJvbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuYWxsRmllbGRzUmVxdWlyZWQgPSByZXF1aXJlZEZpZWxkcy5sZW5ndGggPT09IHRoaXMubnVtQ29udHJvbHM7XG4gICAgdGhpcy5hbGxGaWVsZHNOb3RSZXF1aXJlZCA9IG5vblJlcXVpcmVkRmllbGRzLmxlbmd0aCA9PT0gdGhpcy5udW1Db250cm9scztcbiAgICBpZiAodGhpcy5hbGxGaWVsZHNOb3RSZXF1aXJlZCAmJiB0aGlzLmhpZGVOb25SZXF1aXJlZEZpZWxkcykge1xuICAgICAgdGhpcy5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgICAgZmllbGRzZXQuY29udHJvbHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuZm9ybS5maWVsZHNldHMgPSBbLi4udGhpcy5maWVsZHNldHNdO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLmN1c3RvbVRlbXBsYXRlcyAmJiB0aGlzLmN1c3RvbVRlbXBsYXRlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3VzdG9tVGVtcGxhdGVzLmZvckVhY2goKHRlbXBsYXRlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuYWRkQ3VzdG9tKHRlbXBsYXRlLm5hbWUsIHRlbXBsYXRlLnRlbXBsYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzaG93QWxsRmllbGRzKCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybS5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2hvd2luZ0FsbEZpZWxkcyA9IHRydWU7XG4gICAgdGhpcy5zaG93aW5nUmVxdWlyZWRGaWVsZHMgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93T25seVJlcXVpcmVkKGhpZGVSZXF1aXJlZFdpdGhWYWx1ZSk6IHZvaWQge1xuICAgIHRoaXMuZm9ybS5maWVsZHNldHMuZm9yRWFjaCgoZmllbGRzZXQpID0+IHtcbiAgICAgIGZpZWxkc2V0LmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgLy8gSGlkZSBhbnkgbm9uLXJlcXVpcmVkIGZpZWxkc1xuICAgICAgICBpZiAoIWNvbnRyb2wucmVxdWlyZWQpIHtcbiAgICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIaWRlIHJlcXVpcmVkIGZpZWxkcyB0aGF0IGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgZmlsbGVkIG91dFxuICAgICAgICBpZiAoXG4gICAgICAgICAgaGlkZVJlcXVpcmVkV2l0aFZhbHVlICYmXG4gICAgICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLmZvcm0udmFsdWVbY29udHJvbC5rZXldKSAmJlxuICAgICAgICAgICghY29udHJvbC5pc0VtcHR5IHx8IChjb250cm9sLmlzRW1wdHkgJiYgY29udHJvbC5pc0VtcHR5KHRoaXMuZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0pKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRG9uJ3QgaGlkZSBmaWVsZHMgd2l0aCBlcnJvcnNcbiAgICAgICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uZXJyb3JzKSB7XG4gICAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zaG93aW5nQWxsRmllbGRzID0gZmFsc2U7XG4gICAgdGhpcy5zaG93aW5nUmVxdWlyZWRGaWVsZHMgPSB0cnVlO1xuICAgIHRoaXMuZm9yY2VWYWxpZGF0aW9uKCk7XG4gIH1cblxuICBnZXQgdmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0gPyB0aGlzLmZvcm0udmFsdWUgOiBudWxsO1xuICB9XG5cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybSA/IHRoaXMuZm9ybS52YWxpZCA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZWRWYWx1ZXMoKTogYW55IHtcbiAgICBsZXQgcmV0ID0gbnVsbDtcbiAgICB0aGlzLmZvcm0uZmllbGRzZXRzLmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XG4gICAgICBmaWVsZHNldC5jb250cm9scy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmRpcnR5IHx8IGNvbnRyb2wuZGlydHkpIHtcbiAgICAgICAgICBpZiAoIXJldCkge1xuICAgICAgICAgICAgcmV0ID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldFtjb250cm9sLmtleV0gPSB0aGlzLmZvcm0udmFsdWVbY29udHJvbC5rZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHVibGljIGZvcmNlVmFsaWRhdGlvbigpOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmZvcm0uY29udHJvbHMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBsZXQgY29udHJvbDogYW55ID0gdGhpcy5mb3JtLmNvbnRyb2xzW2tleV07XG4gICAgICBpZiAoY29udHJvbC5yZXF1aXJlZCAmJiBIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLnZhbHVlW2NvbnRyb2wua2V5XSkpIHtcbiAgICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19