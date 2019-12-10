/**
 * @fileoverview added by tsickle
 * Generated from: elements/radio/Radio.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NovoRadioElement; })),
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
        this.onModelChange = (/**
         * @return {?}
         */
        function () { });
        this.onModelTouched = (/**
         * @return {?}
         */
        function () { });
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
                    template: "\n        <input [name]=\"name\" type=\"radio\" [checked]=\"checked\" [attr.id]=\"name\" (change)=\"select($event)\" [disabled]=\"disabled\">\n        <label [attr.for]=\"name\" (click)=\"select($event)\" [class.disabled]=\"disabled\">\n            <button *ngIf=\"button\" [ngClass]=\"{'unchecked': !checked, 'checked': checked, 'has-icon': !!icon}\" [theme]=\"theme\" [icon]=\"icon\">{{ label }}</button>\n            <div *ngIf=\"!button\">\n                <i [ngClass]=\"{'bhi-radio-empty': !checked, 'bhi-radio-filled': checked}\"></i>\n                {{ label }}\n                <ng-content></ng-content>\n            </div>\n        </label>\n    ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcmFkaW8vUmFkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQTJCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ILE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7SUFHeEMsb0JBQW9CLEdBQUc7SUFDM0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsY0FBTSxPQUFBLGdCQUFnQixFQUFoQixDQUFnQixFQUFDO0lBQy9DLEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFRDtJQUFBO0lBSTZCLENBQUM7O2dCQUo3QixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7O0lBQzRCLHFCQUFDO0NBQUEsQUFKOUIsSUFJOEI7U0FBakIsY0FBYztBQUUzQjtJQTZDRSwwQkFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFmMUMsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixVQUFLLEdBQVcsV0FBVyxDQUFDO1FBSTVCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRy9DLGtCQUFhOzs7UUFBYSxjQUFPLENBQUMsRUFBQztRQUNuQyxtQkFBYzs7O1FBQWEsY0FBTyxDQUFDLEVBQUM7SUFFUyxDQUFDOzs7OztJQUU5QyxpQ0FBTTs7OztJQUFOLFVBQU8sS0FBSztRQUNWLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsb0ZBQW9GO1FBQ3BGLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxxQ0FBVTs7OztJQUFWLFVBQVcsS0FBVTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsMkNBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQVk7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCw0Q0FBaUI7Ozs7SUFBakIsVUFBa0IsRUFBWTtRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELDJDQUFnQjs7OztJQUFoQixVQUFpQixRQUFpQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDOztnQkF6RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDakMsUUFBUSxFQUFFLG1wQkFVUDtvQkFDSCxJQUFJLEVBQUU7d0JBQ0osa0JBQWtCLEVBQUUsVUFBVTtxQkFDL0I7aUJBQ0Y7Ozs7Z0JBbkNxRixpQkFBaUI7Ozt1QkFxQ3BHLEtBQUs7d0JBRUwsS0FBSzswQkFFTCxLQUFLOzJCQUVMLEtBQUs7d0JBRUwsS0FBSzt5QkFFTCxLQUFLO3dCQUVMLEtBQUs7dUJBRUwsS0FBSzsyQkFFTCxLQUFLO3lCQUdMLE1BQU07O0lBb0NULHVCQUFDO0NBQUEsQUExRUQsSUEwRUM7U0F4RFksZ0JBQWdCOzs7SUFDM0IsZ0NBQ2E7O0lBQ2IsaUNBQ1c7O0lBQ1gsbUNBQ2lCOztJQUNqQixvQ0FDa0I7O0lBQ2xCLGlDQUNjOztJQUNkLGtDQUN3Qjs7SUFDeEIsaUNBQzRCOztJQUM1QixnQ0FDYTs7SUFDYixvQ0FDMEI7O0lBRTFCLGtDQUMrQzs7SUFFL0MsaUNBQVc7O0lBQ1gseUNBQW1DOztJQUNuQywwQ0FBb0M7Ozs7O0lBRXhCLCtCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPdXRwdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgUkFESU9fVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvUmFkaW9FbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXJhZGlvLWdyb3VwJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1JhZGlvR3JvdXAge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1yYWRpbycsXG4gIHByb3ZpZGVyczogW1JBRElPX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGlucHV0IFtuYW1lXT1cIm5hbWVcIiB0eXBlPVwicmFkaW9cIiBbY2hlY2tlZF09XCJjaGVja2VkXCIgW2F0dHIuaWRdPVwibmFtZVwiIChjaGFuZ2UpPVwic2VsZWN0KCRldmVudClcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJuYW1lXCIgKGNsaWNrKT1cInNlbGVjdCgkZXZlbnQpXCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiYnV0dG9uXCIgW25nQ2xhc3NdPVwieyd1bmNoZWNrZWQnOiAhY2hlY2tlZCwgJ2NoZWNrZWQnOiBjaGVja2VkLCAnaGFzLWljb24nOiAhIWljb259XCIgW3RoZW1lXT1cInRoZW1lXCIgW2ljb25dPVwiaWNvblwiPnt7IGxhYmVsIH19PC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIDxpIFtuZ0NsYXNzXT1cInsnYmhpLXJhZGlvLWVtcHR5JzogIWNoZWNrZWQsICdiaGktcmFkaW8tZmlsbGVkJzogY2hlY2tlZH1cIj48L2k+XG4gICAgICAgICAgICAgICAge3sgbGFiZWwgfX1cbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy52ZXJ0aWNhbF0nOiAndmVydGljYWwnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvUmFkaW9FbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHZhbHVlOiBhbnk7XG4gIEBJbnB1dCgpXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHZlcnRpY2FsOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBidXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZyA9ICdzZWNvbmRhcnknO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbW9kZWw6IGFueTtcbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHNlbGVjdChldmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAvLyBPbmx5IGNoYW5nZSB0aGUgY2hlY2tlZCBzdGF0ZSBpZiB0aGlzIGlzIGEgbmV3IHJhZGlvLCB0aGV5IGFyZSBub3QgdG9nZ2xlIGJ1dHRvbnNcbiAgICBpZiAoIXRoaXMuY2hlY2tlZCkge1xuICAgICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxufVxuIl19