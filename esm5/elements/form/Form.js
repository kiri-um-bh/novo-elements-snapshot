/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG
import { Component, Input, ContentChildren, QueryList } from '@angular/core';
import { Helpers } from '../../utils/Helpers';
import { NovoTemplate } from '../common/novo-template/novo-template.directive';
import { NovoTemplateService } from '../../services/template/NovoTemplateService';
var NovoFormElement = /** @class */ (function () {
    function NovoFormElement(templates) {
        this.templates = templates;
        this.hideHeader = false;
        this.showingAllFields = false;
        this.showingRequiredFields = true;
    }
    Object.defineProperty(NovoFormElement.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.getRawValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoFormElement.prototype, "isValid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.valid;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoFormElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.form.layout = this.layout;
    };
    /**
     * @return {?}
     */
    NovoFormElement.prototype.ngAfterContentInit = /**
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
    NovoFormElement.prototype.showAllFields = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.form.controls).forEach(function (key) {
            _this.form.controls[key].hidden = false;
        });
        this.showingAllFields = true;
        this.showingRequiredFields = false;
    };
    /**
     * @param {?} hideRequiredWithValue
     * @return {?}
     */
    NovoFormElement.prototype.showOnlyRequired = /**
     * @param {?} hideRequiredWithValue
     * @return {?}
     */
    function (hideRequiredWithValue) {
        var _this = this;
        Object.keys(this.form.controls).forEach(function (key) {
            // Hide any non-required fields
            if (!_this.form.controls[key].required) {
                _this.form.controls[key].hidden = true;
            }
            // Hide required fields that have been successfully filled out
            if (hideRequiredWithValue && !Helpers.isBlank(_this.form.value[key])) {
                _this.form.controls[key].hidden = true;
            }
            // Don't hide fields with errors
            if (_this.form.controls[key].errors) {
                _this.form.controls[key].hidden = false;
            }
        });
        this.showingAllFields = false;
        this.showingRequiredFields = true;
        this.forceValidation();
    };
    /**
     * @return {?}
     */
    NovoFormElement.prototype.forceValidation = /**
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
    /**
     * @return {?}
     */
    NovoFormElement.prototype.updatedValues = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var ret = null;
        this.form.controls.forEach(function (control) {
            if (_this.form.controls[control.key].dirty || control.dirty) {
                if (!ret) {
                    ret = {};
                }
                ret[control.key] = _this.form.value[control.key];
            }
        });
        return ret;
    };
    NovoFormElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-form',
                    template: "\n    <novo-control-templates></novo-control-templates>\n    <div class=\"novo-form-container\">\n      <header *ngIf=\"!hideHeader\">\n        <ng-content select=\"form-title\"></ng-content>\n        <ng-content select=\"form-subtitle\"></ng-content>\n      </header>\n      <form class=\"novo-form\" [formGroup]=\"form\"><ng-content></ng-content></form>\n    </div>\n  ",
                    providers: [NovoTemplateService]
                }] }
    ];
    /** @nocollapse */
    NovoFormElement.ctorParameters = function () { return [
        { type: NovoTemplateService }
    ]; };
    NovoFormElement.propDecorators = {
        form: [{ type: Input }],
        layout: [{ type: Input }],
        hideHeader: [{ type: Input }],
        customTemplates: [{ type: ContentChildren, args: [NovoTemplate,] }]
    };
    return NovoFormElement;
}());
export { NovoFormElement };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQW9CLFNBQVMsRUFBRSxLQUFLLEVBQVUsZUFBZSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd2RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRWxGO0lBNEJFLHlCQUFvQixTQUE4QjtRQUE5QixjQUFTLEdBQVQsU0FBUyxDQUFxQjtRQVJsRCxlQUFVLEdBQVksS0FBSyxDQUFDO1FBS3JCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQywwQkFBcUIsR0FBWSxJQUFJLENBQUM7SUFFUSxDQUFDO0lBRXRELHNCQUFJLGtDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FBQTs7OztJQUVELGtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELDRDQUFrQjs7O0lBQWxCO1FBQUEsaUJBTUM7UUFMQyxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7WUFDdkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFhO2dCQUN6QyxLQUFJLENBQUMsU0FBUyxDQUFD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QUNWO2dCQUNELEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O2dCQXJHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxxWEFTVDtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDakM7Ozs7Z0JBZlEsbUJBQW1COzs7dUJBaUJ6QixLQUFLO3lCQUVMLEtBQUs7NkJBRUwsS0FBSztrQ0FHTCxlQUFlLFNBQUMsWUFBWTs7SUFnRi9CLHNCQUFDO0NBQUEsQUF0R0QsSUFzR0M7U0F4RlksZUFBZTs7O0lBQzFCLCtCQUNvQjs7SUFDcEIsaUNBQ2U7O0lBQ2YscUNBQzRCOztJQUU1QiwwQ0FDeUM7O0lBRXpDLDJDQUF5Qzs7SUFDekMsZ0RBQTZDOzs7OztJQUVqQyxvQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOR1xuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQXBwXG5pbXBvcnQgeyBOb3ZvRm9ybUdyb3VwIH0gZnJvbSAnLi9Gb3JtSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvVGVtcGxhdGUgfSBmcm9tICcuLi9jb21tb24vbm92by10ZW1wbGF0ZS9ub3ZvLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOb3ZvVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVtcGxhdGUvTm92b1RlbXBsYXRlU2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZm9ybScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5vdm8tY29udHJvbC10ZW1wbGF0ZXM+PC9ub3ZvLWNvbnRyb2wtdGVtcGxhdGVzPlxuICAgIDxkaXYgY2xhc3M9XCJub3ZvLWZvcm0tY29udGFpbmVyXCI+XG4gICAgICA8aGVhZGVyICpuZ0lmPVwiIWhpZGVIZWFkZXJcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZm9ybS10aXRsZVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZm9ybS1zdWJ0aXRsZVwiPjwvbmctY29udGVudD5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGZvcm0gY2xhc3M9XCJub3ZvLWZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1cIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9mb3JtPlxuICAgIDwvZGl2PlxuICBgLFxuICBwcm92aWRlcnM6IFtOb3ZvVGVtcGxhdGVTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0Zvcm1FbGVtZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25Jbml0IHtcbiAgQElucHV0KClcbiAgZm9ybTogTm92b0Zvcm1Hcm91cDtcbiAgQElucHV0KClcbiAgbGF5b3V0OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGhpZGVIZWFkZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAQ29udGVudENoaWxkcmVuKE5vdm9UZW1wbGF0ZSlcbiAgY3VzdG9tVGVtcGxhdGVzOiBRdWVyeUxpc3Q8Tm92b1RlbXBsYXRlPjtcblxuICBwdWJsaWMgc2hvd2luZ0FsbEZpZWxkczogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd2luZ1JlcXVpcmVkRmllbGRzOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRlbXBsYXRlczogTm92b1RlbXBsYXRlU2VydmljZSkge31cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5nZXRSYXdWYWx1ZSgpO1xuICB9XG5cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS52YWxpZDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybS5sYXlvdXQgPSB0aGlzLmxheW91dDtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5jdXN0b21UZW1wbGF0ZXMgJiYgdGhpcy5jdXN0b21UZW1wbGF0ZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmN1c3RvbVRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVzLmFkZEN1c3RvbSh0ZW1wbGF0ZS5uYW1lLCB0ZW1wbGF0ZS50ZW1wbGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2hvd0FsbEZpZWxkcygpOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmZvcm0uY29udHJvbHMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNba2V5XS5oaWRkZW4gPSBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLnNob3dpbmdBbGxGaWVsZHMgPSB0cnVlO1xuICAgIHRoaXMuc2hvd2luZ1JlcXVpcmVkRmllbGRzID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgc2hvd09ubHlSZXF1aXJlZChoaWRlUmVxdWlyZWRXaXRoVmFsdWUpOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmZvcm0uY29udHJvbHMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAvLyBIaWRlIGFueSBub24tcmVxdWlyZWQgZmllbGRzXG4gICAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1trZXldLnJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1trZXldLmhpZGRlbiA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEhpZGUgcmVxdWlyZWQgZmllbGRzIHRoYXQgaGF2ZSBiZWVuIHN1Y2Nlc3NmdWxseSBmaWxsZWQgb3V0XG4gICAgICBpZiAoaGlkZVJlcXVpcmVkV2l0aFZhbHVlICYmICFIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLnZhbHVlW2tleV0pKSB7XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1trZXldLmhpZGRlbiA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIERvbid0IGhpZGUgZmllbGRzIHdpdGggZXJyb3JzXG4gICAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW2tleV0uZXJyb3JzKSB7XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1trZXldLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2hvd2luZ0FsbEZpZWxkcyA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd2luZ1JlcXVpcmVkRmllbGRzID0gdHJ1ZTtcbiAgICB0aGlzLmZvcmNlVmFsaWRhdGlvbigpO1xuICB9XG5cbiAgcHVibGljIGZvcmNlVmFsaWRhdGlvbigpOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmZvcm0uY29udHJvbHMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBsZXQgY29udHJvbDogYW55ID0gdGhpcy5mb3JtLmNvbnRyb2xzW2tleV07XG4gICAgICBpZiAoY29udHJvbC5yZXF1aXJlZCAmJiBIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLnZhbHVlW2NvbnRyb2wua2V5XSkpIHtcbiAgICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVkVmFsdWVzKCk6IGFueSB7XG4gICAgbGV0IHJldCA9IG51bGw7XG4gICAgdGhpcy5mb3JtLmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmRpcnR5IHx8IGNvbnRyb2wuZGlydHkpIHtcbiAgICAgICAgaWYgKCFyZXQpIHtcbiAgICAgICAgICByZXQgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXRbY29udHJvbC5rZXldID0gdGhpcy5mb3JtLnZhbHVlW2NvbnRyb2wua2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iXX0=