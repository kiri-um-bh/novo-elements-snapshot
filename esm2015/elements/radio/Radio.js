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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW8uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcmFkaW8vUmFkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxNQUFNO0FBQ04sT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0lBcUJsQyxpQ0FBaUk7SUFBQSxZQUFXO0lBQUEsaUJBQVM7OztJQUE5SCxvR0FBMkUsdUJBQUEscUJBQUE7SUFBK0IsZUFBVztJQUFYLGtDQUFXOzs7O0lBQzVJLDJCQUNJO0lBQUEsdUJBQThFO0lBQzlFLFlBQ0E7SUFBQSxrQkFBWTtJQUNoQixpQkFBTTs7O0lBSEMsZUFBc0U7SUFBdEUscUZBQXNFO0lBQ3pFLGVBQ0E7SUFEQSw2Q0FDQTs7QUF2QmhCLHNEQUFzRDtBQUN0RCxNQUFNLG9CQUFvQixHQUFHO0lBQzNCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFNRixNQUFNLE9BQU8sY0FBYzs7NEVBQWQsY0FBYzttREFBZCxjQUFjOztRQUZkLGtCQUFZOztrREFFWixjQUFjO2NBSjFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDOztBQXFCRCxNQUFNLE9BQU8sZ0JBQWdCO0lBMkIzQixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWYxQyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLFVBQUssR0FBVyxXQUFXLENBQUM7UUFJNUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUcxQixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHL0Msa0JBQWEsR0FBYSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsbUJBQWMsR0FBYSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFUyxDQUFDO0lBRS9DLE1BQU0sQ0FBQyxLQUFpQjtRQUN0QixPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLG9GQUFvRjtRQUNwRixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFZO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxRQUFpQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDOztnRkF2RFUsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7O21QQWhCaEIsQ0FBQyxvQkFBb0IsQ0FBQzs7UUFFM0IsZ0NBQ0E7UUFEdUUsb0dBQVUsa0JBQWMsSUFBQztRQUFoRyxpQkFDQTtRQUFBLGdDQUNJO1FBRHFCLGtHQUFTLGtCQUFjLElBQUM7UUFDN0MsdUVBQWlJO1FBQ2pJLGlFQUNJO1FBSVIsaUJBQVE7O1FBUkQsK0JBQWEsd0JBQUEsMEJBQUE7UUFBa0MsOEJBQWdCO1FBQ3BCLGVBQTJCO1FBQTNCLHdDQUEyQjtRQUF0RSwrQkFBaUI7UUFDWixlQUFjO1FBQWQsaUNBQWM7UUFDakIsZUFBZTtRQUFmLGtDQUFlOztrREFXbkIsZ0JBQWdCO2NBbEI1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7S0FVUDtnQkFDSCxJQUFJLEVBQUU7b0JBQ0osa0JBQWtCLEVBQUUsVUFBVTtpQkFDL0I7YUFDRjtvRUFHQyxJQUFJO2tCQURILEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFHTixPQUFPO2tCQUROLEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFHTixNQUFNO2tCQURMLEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFHTixJQUFJO2tCQURILEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUs7WUFJTixNQUFNO2tCQURMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgUkFESU9fVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvUmFkaW9FbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXJhZGlvLWdyb3VwJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1JhZGlvR3JvdXAgeyB9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcmFkaW8nLFxuICBwcm92aWRlcnM6IFtSQURJT19WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxpbnB1dCBbbmFtZV09XCJuYW1lXCIgdHlwZT1cInJhZGlvXCIgW2NoZWNrZWRdPVwiY2hlY2tlZFwiIFthdHRyLmlkXT1cIm5hbWVcIiAoY2hhbmdlKT1cInNlbGVjdCgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwibmFtZVwiIChjbGljayk9XCJzZWxlY3QoJGV2ZW50KVwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImJ1dHRvblwiIFtuZ0NsYXNzXT1cInsndW5jaGVja2VkJzogIWNoZWNrZWQsICdjaGVja2VkJzogY2hlY2tlZCwgJ2hhcy1pY29uJzogISFpY29ufVwiIFt0aGVtZV09XCJ0aGVtZVwiIFtpY29uXT1cImljb25cIj57eyBsYWJlbCB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFidXR0b25cIj5cbiAgICAgICAgICAgICAgICA8aSBbbmdDbGFzc109XCJ7J2JoaS1yYWRpby1lbXB0eSc6ICFjaGVja2VkLCAnYmhpLXJhZGlvLWZpbGxlZCc6IGNoZWNrZWR9XCI+PC9pPlxuICAgICAgICAgICAgICAgIHt7IGxhYmVsIH19XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MudmVydGljYWxdJzogJ3ZlcnRpY2FsJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1JhZGlvRWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICB2YWx1ZTogYW55O1xuICBASW5wdXQoKVxuICBjaGVja2VkOiBib29sZWFuO1xuICBASW5wdXQoKVxuICB2ZXJ0aWNhbDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgYnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmcgPSAnc2Vjb25kYXJ5JztcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG1vZGVsOiBhbnk7XG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBzZWxlY3QoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgLy8gT25seSBjaGFuZ2UgdGhlIGNoZWNrZWQgc3RhdGUgaWYgdGhpcyBpcyBhIG5ldyByYWRpbywgdGhleSBhcmUgbm90IHRvZ2dsZSBidXR0b25zXG4gICAgaWYgKCF0aGlzLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==