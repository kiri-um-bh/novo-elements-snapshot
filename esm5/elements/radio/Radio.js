/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, EventEmitter, forwardRef, Input, Output, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { Helpers } from '../../utils/Helpers';
// Value accessor for the component (supports ngModel)
/** @type {?} */
var RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NovoRadioElement; }),
    multi: true,
};
var NovoRadioGroup = /** @class */ (function () {
    function NovoRadioGroup() {
    }
    NovoRadioGroup.decorators = [
        { type: Component, args: [{
                    selector: 'novo-radio-group',
                    template: '<ng-content></ng-content>'
                }] }
    ];
    return NovoRadioGroup;
}());
export { NovoRadioGroup };
var NovoRadioElement = /** @class */ (function () {
    function NovoRadioElement(ref) {
        this.ref = ref;
        this.button = false;
        this.theme = 'secondary';
        this.disabled = false;
        this.change = new EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NovoRadioElement.prototype.select = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        Helpers.swallowEvent(event);
        // Only change the checked state if this is a new radio, they are not toggle buttons
        if (!this.checked) {
            this.checked = !this.checked;
            this.change.emit(this.value);
            this.onModelChange(this.value);
            this.ref.markForCheck();
        }
    };
    /**
     * @param {?} model
     * @return {?}
     */
    NovoRadioElement.prototype.writeValue = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        this.model = model;
        this.ref.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoRadioElement.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoRadioElement.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    NovoRadioElement.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.disabled = disabled;
    };
    NovoRadioElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-radio',
                    providers: [RADIO_VALUE_ACCESSOR],
                    template: "\n    <input [name]=\"name\" type=\"radio\" [checked]=\"checked\" [attr.id]=\"name\" (change)=\"select($event)\" [disabled]=\"disabled\" />\n    <label [attr.for]=\"name\" (click)=\"select($event)\" [class.disabled]=\"disabled\">\n      <button *ngIf=\"button\" [ngClass]=\"{ unchecked: !checked, checked: checked, 'has-icon': !!icon }\" [theme]=\"theme\" [icon]=\"icon\">\n        {{ label }}\n      </button>\n      <div *ngIf=\"!button\">\n        <i [ngClass]=\"{ 'bhi-radio-empty': !checked, 'bhi-radio-filled': checked }\"></i> {{ label }}\n        <ng-content></ng-content>\n      </div>\n    </label>\n  ",
                    host: {
                        '[class.vertical]': 'vertical',
                    }
                }] }
    ];
    /** @nocollapse */
    NovoRadioElement.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NovoRadioElement.propDecorators = {
        name: [{ type: Input }],
        value: [{ type: Input }],
        checked: [{ type: Input }],
        vertical: [{ type: Input }],
        label: [{ type: Input }],
        button: [{ type: Input }],
        theme: [{ type: Input }],
        icon: [{ type: Input }],
        disabled: [{ type: Input }],
        change: [{ type: Output }]
    };
    return NovoRadioElement;
}());
export { NovoRadioElement };
if (false) {
    /** @type {?} */
    NovoRadioElement.prototype.name;
    /** @type {?} */
    NovoRadioElement.prototype.value;
    /** @type {?} */
    NovoRadioElement.prototype.checked;
    /** @type {?} */
    NovoRadioElement.prototype.vertical;
    /** @type {?} */
    NovoRadioElement.prototype.label;
    /** @type {?} */
    NovoRadioElement.prototype.button;
    /** @type {?} */
    NovoRadioElement.prototype.theme;
    /** @type {?} */
    NovoRadioElement.prototype.icon;
    /** @type {?} */
    NovoRadioElement.prototype.disabled;
    /** @type {?} */
    NovoRadioElement.prototype.change;
    /** @type {?} */
    NovoRadioElement.prototype.model;
    /** @type {?} */
    NovoRadioElement.prototype.onModelChange;
    /** @type {?} */
    NovoRadioElement.prototype.onModelTouched;
    /**
     * @type {?}
     * @private
     */
    NovoRadioElement.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcmFkaW8vUmFkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBMkIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0gsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztJQUd4QyxvQkFBb0IsR0FBRztJQUMzQixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGdCQUFnQixFQUFoQixDQUFnQixDQUFDO0lBQy9DLEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFRDtJQUFBO0lBSTZCLENBQUM7O2dCQUo3QixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7O0lBQzRCLHFCQUFDO0NBQUEsQUFKOUIsSUFJOEI7U0FBakIsY0FBYztBQUUzQjtJQThDRSwwQkFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFmMUMsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixVQUFLLEdBQVcsV0FBVyxDQUFDO1FBSTVCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRy9DLGtCQUFhLEdBQWEsY0FBTyxDQUFDLENBQUM7UUFDbkMsbUJBQWMsR0FBYSxjQUFPLENBQUMsQ0FBQztJQUVTLENBQUM7Ozs7O0lBRTlDLGlDQUFNOzs7O0lBQU4sVUFBTyxLQUFLO1FBQ1YsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixvRkFBb0Y7UUFDcEYsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7OztJQUVELHFDQUFVOzs7O0lBQVYsVUFBVyxLQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCwyQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBWTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELDRDQUFpQjs7OztJQUFqQixVQUFrQixFQUFZO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsMkNBQWdCOzs7O0lBQWhCLFVBQWlCLFFBQWlCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7O2dCQTFFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNqQyxRQUFRLEVBQUUsc21CQVdUO29CQUNELElBQUksRUFBRTt3QkFDSixrQkFBa0IsRUFBRSxVQUFVO3FCQUMvQjtpQkFDRjs7OztnQkFwQ3FGLGlCQUFpQjs7O3VCQXNDcEcsS0FBSzt3QkFFTCxLQUFLOzBCQUVMLEtBQUs7MkJBRUwsS0FBSzt3QkFFTCxLQUFLO3lCQUVMLEtBQUs7d0JBRUwsS0FBSzt1QkFFTCxLQUFLOzJCQUVMLEtBQUs7eUJBR0wsTUFBTTs7SUFvQ1QsdUJBQUM7Q0FBQSxBQTNFRCxJQTJFQztTQXhEWSxnQkFBZ0I7OztJQUMzQixnQ0FDYTs7SUFDYixpQ0FDVzs7SUFDWCxtQ0FDaUI7O0lBQ2pCLG9DQUNrQjs7SUFDbEIsaUNBQ2M7O0lBQ2Qsa0NBQ3dCOztJQUN4QixpQ0FDNEI7O0lBQzVCLGdDQUNhOztJQUNiLG9DQUMwQjs7SUFFMUIsa0NBQytDOztJQUUvQyxpQ0FBVzs7SUFDWCx5Q0FBbUM7O0lBQ25DLDBDQUFvQzs7Ozs7SUFFeEIsK0JBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBSQURJT19WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9SYWRpb0VsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcmFkaW8tZ3JvdXAnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvUmFkaW9Hcm91cCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXJhZGlvJyxcbiAgcHJvdmlkZXJzOiBbUkFESU9fVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpbnB1dCBbbmFtZV09XCJuYW1lXCIgdHlwZT1cInJhZGlvXCIgW2NoZWNrZWRdPVwiY2hlY2tlZFwiIFthdHRyLmlkXT1cIm5hbWVcIiAoY2hhbmdlKT1cInNlbGVjdCgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgLz5cbiAgICA8bGFiZWwgW2F0dHIuZm9yXT1cIm5hbWVcIiAoY2xpY2spPVwic2VsZWN0KCRldmVudClcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgIDxidXR0b24gKm5nSWY9XCJidXR0b25cIiBbbmdDbGFzc109XCJ7IHVuY2hlY2tlZDogIWNoZWNrZWQsIGNoZWNrZWQ6IGNoZWNrZWQsICdoYXMtaWNvbic6ICEhaWNvbiB9XCIgW3RoZW1lXT1cInRoZW1lXCIgW2ljb25dPVwiaWNvblwiPlxuICAgICAgICB7eyBsYWJlbCB9fVxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2ICpuZ0lmPVwiIWJ1dHRvblwiPlxuICAgICAgICA8aSBbbmdDbGFzc109XCJ7ICdiaGktcmFkaW8tZW1wdHknOiAhY2hlY2tlZCwgJ2JoaS1yYWRpby1maWxsZWQnOiBjaGVja2VkIH1cIj48L2k+IHt7IGxhYmVsIH19XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnZlcnRpY2FsXSc6ICd2ZXJ0aWNhbCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9SYWRpb0VsZW1lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgdmFsdWU6IGFueTtcbiAgQElucHV0KClcbiAgY2hlY2tlZDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgdmVydGljYWw6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nID0gJ3NlY29uZGFyeSc7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBtb2RlbDogYW55O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgc2VsZWN0KGV2ZW50KSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIC8vIE9ubHkgY2hhbmdlIHRoZSBjaGVja2VkIHN0YXRlIGlmIHRoaXMgaXMgYSBuZXcgcmFkaW8sIHRoZXkgYXJlIG5vdCB0b2dnbGUgYnV0dG9uc1xuICAgIGlmICghdGhpcy5jaGVja2VkKSB7XG4gICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG59XG4iXX0=