// NG2
import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectorRef } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3dpdGNoLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3N3aXRjaC9Td2l0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7QUFFMUQsc0RBQXNEO0FBQ3RELE1BQU0scUJBQXFCLEdBQUc7SUFDNUIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQXdCRixNQUFNLE9BQU8saUJBQWlCO0lBb0I1QixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWhCMUMsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpELGNBQVMsR0FBWSxLQUFLLENBQUM7UUFFM0Isa0JBQWEsR0FBYSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDbkMsbUJBQWMsR0FBYSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFXUyxDQUFDO0lBVDlDLElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFDSSxRQUFRLENBQUMsS0FBSztRQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFJRCxTQUFTLENBQUMsS0FBSztRQUNiLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ3BDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLO1FBQ1YsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFZO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7O2tGQXhEVSxpQkFBaUI7c0RBQWpCLGlCQUFpQjt3R0FBakIscUJBQWlCOzs7OytIQXBCakIsQ0FBQyxxQkFBcUIsQ0FBQzs7UUFFNUIsOEJBQ0k7UUFEQyxpR0FBUyxrQkFBYyxJQUFDO1FBQ3pCLDhCQUNJO1FBQUEseUJBQW1DO1FBQ25DLDhCQUNJO1FBQUEseUJBQXFDO1FBQ3pDLGlCQUFNO1FBQ1YsaUJBQU07UUFDTiw4QkFBK0I7UUFBQSxrQkFBWTtRQUFhLGlCQUFNO1FBQ2xFLGlCQUFNOztrREFVRCxpQkFBaUI7Y0F0QjdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ2xDLFFBQVEsRUFBRTs7Ozs7Ozs7OztLQVVQO2dCQUNILElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsVUFBVTtvQkFDaEIscUJBQXFCLEVBQUUsT0FBTztvQkFDOUIsc0JBQXNCLEVBQUUsVUFBVTtvQkFDbEMsV0FBVyxFQUFFLG1CQUFtQjtvQkFDaEMsU0FBUyxFQUFFLE9BQU87aUJBQ25CO2FBQ0Y7b0VBR0MsS0FBSztrQkFESixLQUFLO1lBR04sUUFBUTtrQkFEUCxNQUFNO1lBYUgsUUFBUTtrQkFEWCxLQUFLO21CQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gJy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgU1dJVENIX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b1N3aXRjaEVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc3dpdGNoJyxcbiAgcHJvdmlkZXJzOiBbU1dJVENIX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAoY2xpY2spPVwidG9nZ2xlKCRldmVudClcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXN3aXRjaC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1zd2l0Y2gtYmFyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tc3dpdGNoLXRodW1iLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1zd2l0Y2gtdGh1bWJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tc3dpdGNoLWxhYmVsXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICBob3N0OiB7XG4gICAgcm9sZTogJ2NoZWNrYm94JyxcbiAgICAnW2F0dHIuYXJpYS1jaGVja2VkXSc6ICdtb2RlbCcsXG4gICAgJ1thdHRyLmFyaWEtZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAnKGtleWRvd24pJzogJ29uS2V5ZG93bigkZXZlbnQpJyxcbiAgICAnW2NsYXNzXSc6ICd0aGVtZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Td2l0Y2hFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nO1xuICBAT3V0cHV0KClcbiAgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBtb2RlbDogYm9vbGVhbjtcbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgnZGlzYWJsZWQnKVxuICBzZXQgZGlzYWJsZWQodmFsdWUpIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9ICF2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBvbktleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuU1BBQ0UpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnRvZ2dsZShldmVudCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm1vZGVsID0gIXRoaXMubW9kZWw7XG4gICAgdGhpcy5vbkNoYW5nZS5uZXh0KHRoaXMubW9kZWwpO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLm1vZGVsKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=