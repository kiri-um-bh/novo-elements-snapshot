// NG2
import { ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { Helpers } from '../../utils/Helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../button/Button";
const _c0 = ["*"];
const _c1 = function (a0, a1, a2) { return { "unchecked": a0, "checked": a1, "has-icon": a2 }; };
function NovoRadioElement_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(4, _c1, !ctx_r0.checked, ctx_r0.checked, !!ctx_r0.icon))("theme", ctx_r0.theme)("icon", ctx_r0.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.label);
} }
const _c2 = function (a0, a1) { return { "bhi-radio-empty": a0, "bhi-radio-filled": a1 }; };
function NovoRadioElement_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "i", 5);
    i0.ɵɵtext(2);
    i0.ɵɵprojection(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c2, !ctx_r1.checked, ctx_r1.checked));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.label, " ");
} }
// Value accessor for the component (supports ngModel)
const RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoRadioElement),
    multi: true,
};
export class NovoRadioGroup {
}
NovoRadioGroup.ɵfac = function NovoRadioGroup_Factory(t) { return new (t || NovoRadioGroup)(); };
NovoRadioGroup.ɵcmp = i0.ɵɵdefineComponent({ type: NovoRadioGroup, selectors: [["novo-radio-group"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoRadioGroup_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoRadioGroup, [{
        type: Component,
        args: [{
                selector: 'novo-radio-group',
                template: '<ng-content></ng-content>',
            }]
    }], null, null); })();
export class NovoRadioElement {
    constructor(ref) {
        this.ref = ref;
        this.button = false;
        this.theme = 'secondary';
        this.disabled = false;
        this.change = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
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
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
}
NovoRadioElement.ɵfac = function NovoRadioElement_Factory(t) { return new (t || NovoRadioElement)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
NovoRadioElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoRadioElement, selectors: [["novo-radio"]], hostVars: 2, hostBindings: function NovoRadioElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("vertical", ctx.vertical);
    } }, inputs: { name: "name", value: "value", checked: "checked", vertical: "vertical", label: "label", button: "button", theme: "theme", icon: "icon", disabled: "disabled" }, outputs: { change: "change" }, features: [i0.ɵɵProvidersFeature([RADIO_VALUE_ACCESSOR])], ngContentSelectors: _c0, decls: 4, vars: 9, consts: [["type", "radio", 3, "name", "checked", "disabled", "change"], [3, "click"], [3, "ngClass", "theme", "icon", 4, "ngIf"], [4, "ngIf"], [3, "ngClass", "theme", "icon"], [3, "ngClass"]], template: function NovoRadioElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "input", 0);
        i0.ɵɵlistener("change", function NovoRadioElement_Template_input_change_0_listener($event) { return ctx.select($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "label", 1);
        i0.ɵɵlistener("click", function NovoRadioElement_Template_label_click_1_listener($event) { return ctx.select($event); });
        i0.ɵɵtemplate(2, NovoRadioElement_button_2_Template, 2, 8, "button", 2);
        i0.ɵɵtemplate(3, NovoRadioElement_div_3_Template, 4, 5, "div", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("name", ctx.name)("checked", ctx.checked)("disabled", ctx.disabled);
        i0.ɵɵattribute("id", ctx.name);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("disabled", ctx.disabled);
        i0.ɵɵattribute("for", ctx.name);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.button);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.button);
    } }, directives: [i1.NgIf, i2.NovoButtonElement, i1.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoRadioElement, [{
        type: Component,
        args: [{
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
                },
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { name: [{
            type: Input
        }], value: [{
            type: Input
        }], checked: [{
            type: Input
        }], vertical: [{
            type: Input
        }], label: [{
            type: Input
        }], button: [{
            type: Input
        }], theme: [{
            type: Input
        }], icon: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcmFkaW8vUmFkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxNQUFNO0FBQ04sT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0lBcUJsQyxpQ0FBaUk7SUFBQSxZQUFXO0lBQUEsaUJBQVM7OztJQUE5SCxvR0FBMkUsdUJBQUEscUJBQUE7SUFBK0IsZUFBVztJQUFYLGtDQUFXOzs7O0lBQzVJLDJCQUNJO0lBQUEsdUJBQThFO0lBQzlFLFlBQ0E7SUFBQSxrQkFBWTtJQUNoQixpQkFBTTs7O0lBSEMsZUFBc0U7SUFBdEUscUZBQXNFO0lBQ3pFLGVBQ0E7SUFEQSw2Q0FDQTs7QUF2QmhCLHNEQUFzRDtBQUN0RCxNQUFNLG9CQUFvQixHQUFHO0lBQzNCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFNRixNQUFNLE9BQU8sY0FBYzs7NEVBQWQsY0FBYzttREFBZCxjQUFjOztRQUZkLGtCQUFZOztrREFFWixjQUFjO2NBSjFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDOztBQXFCRCxNQUFNLE9BQU8sZ0JBQWdCO0lBMkIzQixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWYxQyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLFVBQUssR0FBVyxXQUFXLENBQUM7UUFJNUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUcxQixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHL0Msa0JBQWEsR0FBYSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsbUJBQWMsR0FBYSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFUyxDQUFDO0lBRS9DLE1BQU0sQ0FBQyxLQUFpQjtRQUN0QixPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLG9GQUFvRjtRQUNwRixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFZO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxRQUFpQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDOztnRkF2RFUsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7O21QQWhCaEIsQ0FBQyxvQkFBb0IsQ0FBQzs7UUFFM0IsZ0NBQ0E7UUFEdUUsb0dBQVUsa0JBQWMsSUFBQztRQUFoRyxpQkFDQTtRQUFBLGdDQUNJO1FBRHFCLGtHQUFTLGtCQUFjLElBQUM7UUFDN0MsdUVBQWlJO1FBQ2pJLGlFQUNJO1FBSVIsaUJBQVE7O1FBUkQsK0JBQWEsd0JBQUEsMEJBQUE7UUFBa0MsOEJBQWdCO1FBQ3BCLGVBQTJCO1FBQTNCLHdDQUEyQjtRQUF0RSwrQkFBaUI7UUFDWixlQUFjO1FBQWQsaUNBQWM7UUFDakIsZUFBZTtRQUFmLGtDQUFlOztrREFXbkIsZ0JBQWdCO2NBbEI1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7S0FVUDtnQkFDSCxJQUFJLEVBQUU7b0JBQ0osa0JBQWtCLEVBQUUsVUFBVTtpQkFDL0I7YUFDRjs7a0JBRUUsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBR0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBSQURJT19WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9SYWRpb0VsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcmFkaW8tZ3JvdXAnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvUmFkaW9Hcm91cCB7IH1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1yYWRpbycsXG4gIHByb3ZpZGVyczogW1JBRElPX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGlucHV0IFtuYW1lXT1cIm5hbWVcIiB0eXBlPVwicmFkaW9cIiBbY2hlY2tlZF09XCJjaGVja2VkXCIgW2F0dHIuaWRdPVwibmFtZVwiIChjaGFuZ2UpPVwic2VsZWN0KCRldmVudClcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJuYW1lXCIgKGNsaWNrKT1cInNlbGVjdCgkZXZlbnQpXCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiYnV0dG9uXCIgW25nQ2xhc3NdPVwieyd1bmNoZWNrZWQnOiAhY2hlY2tlZCwgJ2NoZWNrZWQnOiBjaGVja2VkLCAnaGFzLWljb24nOiAhIWljb259XCIgW3RoZW1lXT1cInRoZW1lXCIgW2ljb25dPVwiaWNvblwiPnt7IGxhYmVsIH19PC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIDxpIFtuZ0NsYXNzXT1cInsnYmhpLXJhZGlvLWVtcHR5JzogIWNoZWNrZWQsICdiaGktcmFkaW8tZmlsbGVkJzogY2hlY2tlZH1cIj48L2k+XG4gICAgICAgICAgICAgICAge3sgbGFiZWwgfX1cbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy52ZXJ0aWNhbF0nOiAndmVydGljYWwnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvUmFkaW9FbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHZhbHVlOiBhbnk7XG4gIEBJbnB1dCgpXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHZlcnRpY2FsOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBidXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZyA9ICdzZWNvbmRhcnknO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbW9kZWw6IGFueTtcbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIHNlbGVjdChldmVudDogTW91c2VFdmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAvLyBPbmx5IGNoYW5nZSB0aGUgY2hlY2tlZCBzdGF0ZSBpZiB0aGlzIGlzIGEgbmV3IHJhZGlvLCB0aGV5IGFyZSBub3QgdG9nZ2xlIGJ1dHRvbnNcbiAgICBpZiAoIXRoaXMuY2hlY2tlZCkge1xuICAgICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxufVxuIl19