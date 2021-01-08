// NG2
import { ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
import * as i0 from "@angular/core";
const _c0 = ["*"];
// Value accessor for the component (supports ngModel)
const SWITCH_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoSwitchElement),
    multi: true,
};
export class NovoSwitchElement {
    constructor(ref) {
        this.ref = ref;
        this.onChange = new EventEmitter();
        this._disabled = false;
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = !value;
    }
    onKeydown(event) {
        if (event.keyCode === KeyCodes.SPACE) {
            event.preventDefault();
            this.toggle(event);
        }
    }
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
    writeValue(model) {
        this.model = model;
        this.ref.markForCheck();
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
}
NovoSwitchElement.ɵfac = function NovoSwitchElement_Factory(t) { return new (t || NovoSwitchElement)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
NovoSwitchElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoSwitchElement, selectors: [["novo-switch"]], hostAttrs: ["role", "checkbox"], hostVars: 4, hostBindings: function NovoSwitchElement_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function NovoSwitchElement_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
    } if (rf & 2) {
        i0.ɵɵattribute("aria-checked", ctx.model)("aria-disabled", ctx.disabled);
        i0.ɵɵclassMap(ctx.theme);
    } }, inputs: { theme: "theme", disabled: "disabled" }, outputs: { onChange: "onChange" }, features: [i0.ɵɵProvidersFeature([SWITCH_VALUE_ACCESSOR])], ngContentSelectors: _c0, decls: 7, vars: 0, consts: [[3, "click"], [1, "novo-switch-container"], [1, "novo-switch-bar"], [1, "novo-switch-thumb-container"], [1, "novo-switch-thumb"], [1, "novo-switch-label"]], template: function NovoSwitchElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function NovoSwitchElement_Template_div_click_0_listener($event) { return ctx.toggle($event); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelement(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelement(4, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵprojection(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSwitchElement, [{
        type: Component,
        args: [{
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
                },
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { theme: [{
            type: Input
        }], onChange: [{
            type: Output
        }], disabled: [{
            type: Input,
            args: ['disabled']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3dpdGNoLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvc3dpdGNoL1N3aXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE1BQU07QUFDTixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7OztBQUUxRCxzREFBc0Q7QUFDdEQsTUFBTSxxQkFBcUIsR0FBRztJQUM1QixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUM7SUFDaEQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBd0JGLE1BQU0sT0FBTyxpQkFBaUI7SUFvQjVCLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBaEIxQyxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakQsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixrQkFBYSxHQUFhLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUNuQyxtQkFBYyxHQUFhLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQVdTLENBQUM7SUFUOUMsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUNJLFFBQVEsQ0FBQyxLQUFLO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUlELFNBQVMsQ0FBQyxLQUFLO1FBQ2IsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDcEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUs7UUFDVixJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFjO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQVk7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQVk7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7a0ZBeERVLGlCQUFpQjtzREFBakIsaUJBQWlCO3dHQUFqQixxQkFBaUI7Ozs7K0hBcEJqQixDQUFDLHFCQUFxQixDQUFDOztRQUVoQyw4QkFDRTtRQURHLGlHQUFTLGtCQUFjLElBQUM7UUFDM0IsOEJBQ0U7UUFBQSx5QkFBbUM7UUFDbkMsOEJBQ0U7UUFBQSx5QkFBcUM7UUFDdkMsaUJBQU07UUFDUixpQkFBTTtRQUNOLDhCQUErQjtRQUFBLGtCQUFZO1FBQWEsaUJBQU07UUFDaEUsaUJBQU07O2tEQVVHLGlCQUFpQjtjQXRCN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDbEMsUUFBUSxFQUFFOzs7Ozs7Ozs7O0dBVVQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxVQUFVO29CQUNoQixxQkFBcUIsRUFBRSxPQUFPO29CQUM5QixzQkFBc0IsRUFBRSxVQUFVO29CQUNsQyxXQUFXLEVBQUUsbUJBQW1CO29CQUNoQyxTQUFTLEVBQUUsT0FBTztpQkFDbkI7YUFDRjtvRUFHQyxLQUFLO2tCQURKLEtBQUs7WUFHTixRQUFRO2tCQURQLE1BQU07WUFhSCxRQUFRO2tCQURYLEtBQUs7bUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBTV0lUQ0hfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvU3dpdGNoRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zd2l0Y2gnLFxuICBwcm92aWRlcnM6IFtTV0lUQ0hfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKGNsaWNrKT1cInRvZ2dsZSgkZXZlbnQpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1zd2l0Y2gtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXN3aXRjaC1iYXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tc3dpdGNoLXRodW1iLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXN3aXRjaC10aHVtYlwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tc3dpdGNoLWxhYmVsXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgcm9sZTogJ2NoZWNrYm94JyxcbiAgICAnW2F0dHIuYXJpYS1jaGVja2VkXSc6ICdtb2RlbCcsXG4gICAgJ1thdHRyLmFyaWEtZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAnKGtleWRvd24pJzogJ29uS2V5ZG93bigkZXZlbnQpJyxcbiAgICAnW2NsYXNzXSc6ICd0aGVtZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Td2l0Y2hFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nO1xuICBAT3V0cHV0KClcbiAgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBtb2RlbDogYm9vbGVhbjtcbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgnZGlzYWJsZWQnKVxuICBzZXQgZGlzYWJsZWQodmFsdWUpIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9ICF2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBvbktleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuU1BBQ0UpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnRvZ2dsZShldmVudCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm1vZGVsID0gIXRoaXMubW9kZWw7XG4gICAgdGhpcy5vbkNoYW5nZS5uZXh0KHRoaXMubW9kZWwpO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLm1vZGVsKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=