/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, EventEmitter, forwardRef, Input, Output, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { Helpers } from '../../utils/Helpers';
// Value accessor for the component (supports ngModel)
/** @type {?} */
const RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NovoRadioElement)),
    multi: true,
};
export class NovoRadioGroup {
}
NovoRadioGroup.decorators = [
    { type: Component, args: [{
                selector: 'novo-radio-group',
                template: '<ng-content></ng-content>'
            }] }
];
export class NovoRadioElement {
    /**
     * @param {?} ref
     */
    constructor(ref) {
        this.ref = ref;
        this.button = false;
        this.theme = 'secondary';
        this.disabled = false;
        this.change = new EventEmitter();
        this.onModelChange = (/**
         * @return {?}
         */
        () => { });
        this.onModelTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    select(event) {
        Helpers.swallowEvent(event);
        // Only change the checked state if this is a new radio, they are not toggle buttons
        if (!this.checked) {
            this.checked = !this.checked;
            this.change.emit(this.value);
            this.onModelChange(this.value);
            this.ref.markForCheck();
        }
    }
    /**
     * @param {?} model
     * @return {?}
     */
    writeValue(model) {
        this.model = model;
        this.ref.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
}
NovoRadioElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-radio',
                providers: [RADIO_VALUE_ACCESSOR],
                template: `
        <input [name]="name" type="radio" [checked]="checked" [attr.id]="name" (change)="select($event)" [disabled]="disabled">
        <label [attr.for]="name" (click)="select($event)" [class.disabled]="disabled">
            <button *ngIf="button" [ngClass]="{'unchecked': !checked, 'checked': checked, 'has-icon': !!icon}" [theme]="theme" [icon]="icon">{{ label }}</button>
            <div *ngIf="!button">
                <i [ngClass]="{'bhi-radio-empty': !checked, 'bhi-radio-filled': checked}"></i>
                {{ label }}
                <ng-content></ng-content>
            </div>
        </label>
    `,
                host: {
                    '[class.vertical]': 'vertical',
                }
            }] }
];
/** @nocollapse */
NovoRadioElement.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcmFkaW8vUmFkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBMkIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0gsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztNQUd4QyxvQkFBb0IsR0FBRztJQUMzQixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBQztJQUMvQyxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBTUQsTUFBTSxPQUFPLGNBQWM7OztZQUoxQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLDJCQUEyQjthQUN0Qzs7QUFxQkQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQTJCM0IsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFmMUMsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixVQUFLLEdBQVcsV0FBVyxDQUFDO1FBSTVCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRy9DLGtCQUFhOzs7UUFBYSxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQUM7UUFDbkMsbUJBQWM7OztRQUFhLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBQztJQUVTLENBQUM7Ozs7O0lBRTlDLE1BQU0sQ0FBQyxLQUFLO1FBQ1YsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixvRkFBb0Y7UUFDcEYsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFZO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBWTtRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLFFBQWlCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7OztZQXpFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7S0FVUDtnQkFDSCxJQUFJLEVBQUU7b0JBQ0osa0JBQWtCLEVBQUUsVUFBVTtpQkFDL0I7YUFDRjs7OztZQW5DcUYsaUJBQWlCOzs7bUJBcUNwRyxLQUFLO29CQUVMLEtBQUs7c0JBRUwsS0FBSzt1QkFFTCxLQUFLO29CQUVMLEtBQUs7cUJBRUwsS0FBSztvQkFFTCxLQUFLO21CQUVMLEtBQUs7dUJBRUwsS0FBSztxQkFHTCxNQUFNOzs7O0lBbkJQLGdDQUNhOztJQUNiLGlDQUNXOztJQUNYLG1DQUNpQjs7SUFDakIsb0NBQ2tCOztJQUNsQixpQ0FDYzs7SUFDZCxrQ0FDd0I7O0lBQ3hCLGlDQUM0Qjs7SUFDNUIsZ0NBQ2E7O0lBQ2Isb0NBQzBCOztJQUUxQixrQ0FDK0M7O0lBRS9DLGlDQUFXOztJQUNYLHlDQUFtQzs7SUFDbkMsMENBQW9DOzs7OztJQUV4QiwrQkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IFJBRElPX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b1JhZGlvRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1yYWRpby1ncm91cCcsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9SYWRpb0dyb3VwIHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcmFkaW8nLFxuICBwcm92aWRlcnM6IFtSQURJT19WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxpbnB1dCBbbmFtZV09XCJuYW1lXCIgdHlwZT1cInJhZGlvXCIgW2NoZWNrZWRdPVwiY2hlY2tlZFwiIFthdHRyLmlkXT1cIm5hbWVcIiAoY2hhbmdlKT1cInNlbGVjdCgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwibmFtZVwiIChjbGljayk9XCJzZWxlY3QoJGV2ZW50KVwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImJ1dHRvblwiIFtuZ0NsYXNzXT1cInsndW5jaGVja2VkJzogIWNoZWNrZWQsICdjaGVja2VkJzogY2hlY2tlZCwgJ2hhcy1pY29uJzogISFpY29ufVwiIFt0aGVtZV09XCJ0aGVtZVwiIFtpY29uXT1cImljb25cIj57eyBsYWJlbCB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFidXR0b25cIj5cbiAgICAgICAgICAgICAgICA8aSBbbmdDbGFzc109XCJ7J2JoaS1yYWRpby1lbXB0eSc6ICFjaGVja2VkLCAnYmhpLXJhZGlvLWZpbGxlZCc6IGNoZWNrZWR9XCI+PC9pPlxuICAgICAgICAgICAgICAgIHt7IGxhYmVsIH19XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MudmVydGljYWxdJzogJ3ZlcnRpY2FsJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1JhZGlvRWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICB2YWx1ZTogYW55O1xuICBASW5wdXQoKVxuICBjaGVja2VkOiBib29sZWFuO1xuICBASW5wdXQoKVxuICB2ZXJ0aWNhbDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgYnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmcgPSAnc2Vjb25kYXJ5JztcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG1vZGVsOiBhbnk7XG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBzZWxlY3QoZXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgLy8gT25seSBjaGFuZ2UgdGhlIGNoZWNrZWQgc3RhdGUgaWYgdGhpcyBpcyBhIG5ldyByYWRpbywgdGhleSBhcmUgbm90IHRvZ2dsZSBidXR0b25zXG4gICAgaWYgKCF0aGlzLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==