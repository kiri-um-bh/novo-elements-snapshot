/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
// Value accessor for the component (supports ngModel)
/** @type {?} */
const SWITCH_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoSwitchElement),
    multi: true,
};
export class NovoSwitchElement {
    /**
     * @param {?} ref
     */
    constructor(ref) {
        this.ref = ref;
        this.onChange = new EventEmitter();
        this._disabled = false;
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = !value;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeydown(event) {
        if (event.keyCode === KeyCodes.SPACE) {
            event.preventDefault();
            this.toggle(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggle(event) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        if (this.disabled) {
            return;
        }
        this.model = !this.model;
        this.onChange.next(this.model);
        this.onModelChange(this.model);
        this.ref.markForCheck();
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
}
NovoSwitchElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-switch',
                providers: [SWITCH_VALUE_ACCESSOR],
                template: `
        <div (click)="toggle($event)">
            <div class="novo-switch-container">
                <div class="novo-switch-bar"></div>
                <div class="novo-switch-thumb-container">
                    <div class="novo-switch-thumb"></div>
                </div>
            </div>
            <div class="novo-switch-label"><ng-content></ng-content></div>
        </div>
    `,
                host: {
                    role: 'checkbox',
                    '[attr.aria-checked]': 'model',
                    '[attr.aria-disabled]': 'disabled',
                    '(keydown)': 'onKeydown($event)',
                    '[class]': 'theme',
                }
            }] }
];
/** @nocollapse */
NovoSwitchElement.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NovoSwitchElement.propDecorators = {
    theme: [{ type: Input }],
    onChange: [{ type: Output }],
    disabled: [{ type: Input, args: ['disabled',] }]
};
if (false) {
    /** @type {?} */
    NovoSwitchElement.prototype.theme;
    /** @type {?} */
    NovoSwitchElement.prototype.onChange;
    /** @type {?} */
    NovoSwitchElement.prototype._disabled;
    /** @type {?} */
    NovoSwitchElement.prototype.model;
    /** @type {?} */
    NovoSwitchElement.prototype.onModelChange;
    /** @type {?} */
    NovoSwitchElement.prototype.onModelTouched;
    /**
     * @type {?}
     * @private
     */
    NovoSwitchElement.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3dpdGNoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3N3aXRjaC9Td2l0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXpFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7O01BR3BELHFCQUFxQixHQUFHO0lBQzVCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztJQUNoRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBd0JELE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFvQjVCLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBaEIxQyxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakQsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixrQkFBYSxHQUFhLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUNuQyxtQkFBYyxHQUFhLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQVdTLENBQUM7Ozs7SUFUOUMsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsSUFDSSxRQUFRLENBQUMsS0FBSztRQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBSUQsU0FBUyxDQUFDLEtBQUs7UUFDYixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLEtBQUssRUFBRTtZQUNwQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQUs7UUFDVixJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBWTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQVk7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBOUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ2xDLFFBQVEsRUFBRTs7Ozs7Ozs7OztLQVVQO2dCQUNILElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsVUFBVTtvQkFDaEIscUJBQXFCLEVBQUUsT0FBTztvQkFDOUIsc0JBQXNCLEVBQUUsVUFBVTtvQkFDbEMsV0FBVyxFQUFFLG1CQUFtQjtvQkFDaEMsU0FBUyxFQUFFLE9BQU87aUJBQ25CO2FBQ0Y7Ozs7WUFqQzRELGlCQUFpQjs7O29CQW1DM0UsS0FBSzt1QkFFTCxNQUFNO3VCQVlOLEtBQUssU0FBQyxVQUFVOzs7O0lBZGpCLGtDQUNjOztJQUNkLHFDQUNpRDs7SUFFakQsc0NBQTJCOztJQUMzQixrQ0FBZTs7SUFDZiwwQ0FBbUM7O0lBQ25DLDJDQUFvQzs7Ozs7SUFXeEIsZ0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIEFQUFxuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IFNXSVRDSF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9Td2l0Y2hFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXN3aXRjaCcsXG4gIHByb3ZpZGVyczogW1NXSVRDSF9WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgKGNsaWNrKT1cInRvZ2dsZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1zd2l0Y2gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tc3dpdGNoLWJhclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXN3aXRjaC10aHVtYi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tc3dpdGNoLXRodW1iXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXN3aXRjaC1sYWJlbFwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgaG9zdDoge1xuICAgIHJvbGU6ICdjaGVja2JveCcsXG4gICAgJ1thdHRyLmFyaWEtY2hlY2tlZF0nOiAnbW9kZWwnLFxuICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJyhrZXlkb3duKSc6ICdvbktleWRvd24oJGV2ZW50KScsXG4gICAgJ1tjbGFzc10nOiAndGhlbWUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU3dpdGNoRWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZztcbiAgQE91dHB1dCgpXG4gIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbW9kZWw6IGJvb2xlYW47XG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASW5wdXQoJ2Rpc2FibGVkJylcbiAgc2V0IGRpc2FibGVkKHZhbHVlKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSAhdmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgb25LZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlNQQUNFKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy50b2dnbGUoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZShldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tb2RlbCA9ICF0aGlzLm1vZGVsO1xuICAgIHRoaXMub25DaGFuZ2UubmV4dCh0aGlzLm1vZGVsKTtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5tb2RlbCk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19