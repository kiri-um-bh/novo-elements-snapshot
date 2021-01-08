// NG2
import { ChangeDetectorRef, Component, EventEmitter, forwardRef, HostBinding, Inject, Input, Optional, Output, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NOVO_RADIO_GROUP } from './tokens';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../button/Button";
const _c0 = function (a0, a1, a2) { return { unchecked: a0, checked: a1, "has-icon": a2 }; };
function NovoRadioElement_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(5, _c0, !ctx_r0.checked, ctx_r0.checked, !!ctx_r0.icon))("theme", ctx_r0.theme)("icon", ctx_r0.icon)("size", ctx_r0.size);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.label, " ");
} }
const _c1 = function (a0, a1) { return { "bhi-radio-empty": a0, "bhi-radio-filled": a1 }; };
function NovoRadioElement_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "i", 5);
    i0.ɵɵtext(2);
    i0.ɵɵprojection(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c1, !ctx_r1.checked, ctx_r1.checked));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.label, " ");
} }
const _c2 = ["*"];
// make radio-buttons ids unique
let nextId = 0;
// Value accessor for the component (supports ngModel)
const RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoRadioElement),
    multi: true,
};
export class NovoRadioElement {
    constructor(radioGroup, ref) {
        this.radioGroup = radioGroup;
        this.ref = ref;
        this._uniqueId = `novo-radio-${++nextId}`;
        this.id = this._uniqueId;
        this.name = this._uniqueId;
        this.tabindex = 0;
        this.button = false;
        this.theme = 'secondary';
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.focus = new EventEmitter();
        this._checked = false;
        this._value = false;
        this._disabled = false;
        this.onChangeCallback = (_) => {
            // placeholder
        };
        this.onTouchedCallback = () => {
            // placeholder
        };
        this.radioGroup = radioGroup;
    }
    get checked() {
        return this._checked;
    }
    set checked(value) {
        value = !!value;
        if (this._checked !== value) {
            this._checked = value;
            if (this._checked && this.radioGroup && this.radioGroup.value !== this.value) {
                this.radioGroup.value = this.value;
            }
            this.onChangeCallback(this._value);
        }
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (this.value !== value) {
            this._value = value;
            if (this.radioGroup) {
                this._checked = this.radioGroup.value === this.value;
            }
            this.onChangeCallback(this._value);
        }
    }
    // Disabled State
    get disabled() {
        return this._disabled || (this.radioGroup != null && this.radioGroup.disabled);
    }
    set disabled(value) {
        this._disabled = !!value;
    }
    ngOnInit() {
        if (this.radioGroup) {
            this.checked = this.radioGroup.value === this._value;
            this.name = this.radioGroup.name;
        }
    }
    _onInputChange(event) {
        event.stopPropagation();
        this.change.emit(event);
        this.checked = true;
        if (this.radioGroup) {
            this.radioGroup.value = this.value;
        }
    }
    writeValue(value) {
        this.value = value;
        this.ref.markForCheck();
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
}
NovoRadioElement.ɵfac = function NovoRadioElement_Factory(t) { return new (t || NovoRadioElement)(i0.ɵɵdirectiveInject(NOVO_RADIO_GROUP, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
NovoRadioElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoRadioElement, selectors: [["novo-radio"]], hostVars: 4, hostBindings: function NovoRadioElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("vertical", ctx.vertical)("disabled", ctx.disabled);
    } }, inputs: { id: "id", name: "name", tabindex: "tabindex", vertical: "vertical", label: "label", button: "button", theme: "theme", size: "size", icon: "icon", checked: "checked", value: "value", disabled: "disabled" }, outputs: { change: "change", blur: "blur", focus: "focus" }, features: [i0.ɵɵProvidersFeature([RADIO_VALUE_ACCESSOR])], ngContentSelectors: _c2, decls: 4, vars: 10, consts: [["type", "radio", 3, "id", "name", "checked", "tabIndex", "disabled", "focus", "blur", "change"], [3, "ngClass", "theme", "icon", "size", 4, "ngIf"], ["class", "novo-radio-button-label", 4, "ngIf"], [3, "ngClass", "theme", "icon", "size"], [1, "novo-radio-button-label"], [3, "ngClass"]], template: function NovoRadioElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "input", 0);
        i0.ɵɵlistener("focus", function NovoRadioElement_Template_input_focus_0_listener($event) { return ctx.focus.emit($event); })("blur", function NovoRadioElement_Template_input_blur_0_listener($event) { return ctx.blur.emit($event); })("change", function NovoRadioElement_Template_input_change_0_listener($event) { return ctx._onInputChange($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "label");
        i0.ɵɵtemplate(2, NovoRadioElement_button_2_Template, 2, 9, "button", 1);
        i0.ɵɵtemplate(3, NovoRadioElement_div_3_Template, 4, 5, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("id", ctx.id)("name", ctx.name)("checked", ctx.checked)("tabIndex", ctx.tabindex)("disabled", ctx.disabled);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("disabled", ctx.disabled);
        i0.ɵɵattribute("for", ctx.id);
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
    <input
      type="radio"
      [id]="id"
      [name]="name"
      [checked]="checked"
      [tabIndex]="tabindex"
      [disabled]="disabled"
      (focus)="focus.emit($event)"
      (blur)="blur.emit($event)"
      (change)="_onInputChange($event)"
    />
    <label [attr.for]="id" [class.disabled]="disabled">
      <button
        *ngIf="button"
        [ngClass]="{ unchecked: !checked, checked: checked, 'has-icon': !!icon }"
        [theme]="theme"
        [icon]="icon"
        [size]="size"
      >
        {{ label }}
      </button>
      <div *ngIf="!button" class="novo-radio-button-label">
        <i [ngClass]="{ 'bhi-radio-empty': !checked, 'bhi-radio-filled': checked }"></i>
        {{ label }}
        <ng-content></ng-content>
      </div>
    </label>
  `,
                host: {
                    '[class.vertical]': 'vertical',
                },
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [NOVO_RADIO_GROUP]
            }, {
                type: Optional
            }] }, { type: i0.ChangeDetectorRef }]; }, { id: [{
            type: Input
        }], name: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], vertical: [{
            type: Input
        }], label: [{
            type: Input
        }], button: [{
            type: Input
        }], theme: [{
            type: Input
        }], size: [{
            type: Input
        }], icon: [{
            type: Input
        }], change: [{
            type: Output
        }], blur: [{
            type: Output
        }], focus: [{
            type: Output
        }], checked: [{
            type: Input
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['class.disabled']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW8uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9yYWRpby9SYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQWMsTUFBTSxVQUFVLENBQUM7Ozs7OztJQTRCbEQsaUNBT0U7SUFBQSxZQUNGO0lBQUEsaUJBQVM7OztJQU5QLG9HQUF5RSx1QkFBQSxxQkFBQSxxQkFBQTtJQUt6RSxlQUNGO0lBREUsNkNBQ0Y7Ozs7SUFDQSw4QkFDRTtJQUFBLHVCQUFnRjtJQUNoRixZQUNBO0lBQUEsa0JBQVk7SUFDZCxpQkFBTTs7O0lBSEQsZUFBd0U7SUFBeEUscUZBQXdFO0lBQzNFLGVBQ0E7SUFEQSw2Q0FDQTs7O0FBdENSLGdDQUFnQztBQUNoQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFFZixzREFBc0Q7QUFDdEQsTUFBTSxvQkFBb0IsR0FBRztJQUMzQixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7SUFDL0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBc0NGLE1BQU0sT0FBTyxnQkFBZ0I7SUFnRTNCLFlBQXlELFVBQXNCLEVBQVUsR0FBc0I7UUFBdEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBL0R2RyxjQUFTLEdBQVcsY0FBYyxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBQzVDLE9BQUUsR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzVCLFNBQUksR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzlCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFPOUIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixVQUFLLEdBQVcsV0FBVyxDQUFDO1FBTWxCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTdCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBMEUzQixxQkFBZ0IsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFO1lBQ3BDLGNBQWM7UUFDaEIsQ0FBQyxDQUFDO1FBRU0sc0JBQWlCLEdBQUcsR0FBRyxFQUFFO1lBQy9CLGNBQWM7UUFDaEIsQ0FBQyxDQUFDO1FBeENBLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUF2Q0QsSUFBYSxPQUFPO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxPQUFPLENBQUMsS0FBYztRQUN4QixLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNoQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQzVFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDcEM7WUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELElBQWEsS0FBSztRQUNoQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEtBQUs7UUFDYixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ3REO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFDRCxpQkFBaUI7SUFDakIsSUFFSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQU1ELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3JELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQVk7UUFDekIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXBCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFVRCxnQkFBZ0IsQ0FBQyxRQUFpQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDOztnRkE3R1UsZ0JBQWdCLHVCQWdFUCxnQkFBZ0I7cURBaEV6QixnQkFBZ0I7OytUQWxDaEIsQ0FBQyxvQkFBb0IsQ0FBQzs7UUFFL0IsZ0NBV0E7UUFKRSxrR0FBUyxzQkFBa0IsSUFBQyxtRkFDcEIscUJBQWlCLElBREcsdUZBRWxCLDBCQUFzQixJQUZKO1FBUDlCLGlCQVdBO1FBQUEsNkJBQ0U7UUFBQSx1RUFPRTtRQUVGLGlFQUNFO1FBSUosaUJBQVE7O1FBeEJOLDJCQUFTLGtCQUFBLHdCQUFBLDBCQUFBLDBCQUFBO1FBU1ksZUFBMkI7UUFBM0Isd0NBQTJCO1FBQTNDLDZCQUFlO1FBRWxCLGVBQWM7UUFBZCxpQ0FBYztRQVFYLGVBQWU7UUFBZixrQ0FBZTs7a0RBV2IsZ0JBQWdCO2NBcEM1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0QlQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLGtCQUFrQixFQUFFLFVBQVU7aUJBQy9CO2FBQ0Y7O3NCQWlFYyxNQUFNO3VCQUFDLGdCQUFnQjs7c0JBQUcsUUFBUTt3REE5RHRDLEVBQUU7a0JBQVYsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFHTixNQUFNO2tCQURMLEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUs7WUFHTixJQUFJO2tCQURILEtBQUs7WUFHTixJQUFJO2tCQURILEtBQUs7WUFHSSxNQUFNO2tCQUFmLE1BQU07WUFDRyxJQUFJO2tCQUFiLE1BQU07WUFDRyxLQUFLO2tCQUFkLE1BQU07WUFNTSxPQUFPO2tCQUFuQixLQUFLO1lBZU8sS0FBSztrQkFBakIsS0FBSztZQWVGLFFBQVE7a0JBRlgsS0FBSzs7a0JBQ0wsV0FBVzttQkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOT1ZPX1JBRElPX0dST1VQLCBSYWRpb0dyb3VwIH0gZnJvbSAnLi90b2tlbnMnO1xuXG4vLyBtYWtlIHJhZGlvLWJ1dHRvbnMgaWRzIHVuaXF1ZVxubGV0IG5leHRJZCA9IDA7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgUkFESU9fVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvUmFkaW9FbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXJhZGlvJyxcbiAgcHJvdmlkZXJzOiBbUkFESU9fVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpbnB1dFxuICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgIFtpZF09XCJpZFwiXG4gICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgIFtjaGVja2VkXT1cImNoZWNrZWRcIlxuICAgICAgW3RhYkluZGV4XT1cInRhYmluZGV4XCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAoZm9jdXMpPVwiZm9jdXMuZW1pdCgkZXZlbnQpXCJcbiAgICAgIChibHVyKT1cImJsdXIuZW1pdCgkZXZlbnQpXCJcbiAgICAgIChjaGFuZ2UpPVwiX29uSW5wdXRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgLz5cbiAgICA8bGFiZWwgW2F0dHIuZm9yXT1cImlkXCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgICpuZ0lmPVwiYnV0dG9uXCJcbiAgICAgICAgW25nQ2xhc3NdPVwieyB1bmNoZWNrZWQ6ICFjaGVja2VkLCBjaGVja2VkOiBjaGVja2VkLCAnaGFzLWljb24nOiAhIWljb24gfVwiXG4gICAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXG4gICAgICAgIFtpY29uXT1cImljb25cIlxuICAgICAgICBbc2l6ZV09XCJzaXplXCJcbiAgICAgID5cbiAgICAgICAge3sgbGFiZWwgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiAqbmdJZj1cIiFidXR0b25cIiBjbGFzcz1cIm5vdm8tcmFkaW8tYnV0dG9uLWxhYmVsXCI+XG4gICAgICAgIDxpIFtuZ0NsYXNzXT1cInsgJ2JoaS1yYWRpby1lbXB0eSc6ICFjaGVja2VkLCAnYmhpLXJhZGlvLWZpbGxlZCc6IGNoZWNrZWQgfVwiPjwvaT5cbiAgICAgICAge3sgbGFiZWwgfX1cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9sYWJlbD5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MudmVydGljYWxdJzogJ3ZlcnRpY2FsJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1JhZGlvRWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBwcml2YXRlIF91bmlxdWVJZDogc3RyaW5nID0gYG5vdm8tcmFkaW8tJHsrK25leHRJZH1gO1xuICBASW5wdXQoKSBpZDogc3RyaW5nID0gdGhpcy5fdW5pcXVlSWQ7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9IHRoaXMuX3VuaXF1ZUlkO1xuICBASW5wdXQoKSB0YWJpbmRleDogbnVtYmVyID0gMDtcblxuICBASW5wdXQoKVxuICB2ZXJ0aWNhbDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgYnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmcgPSAnc2Vjb25kYXJ5JztcbiAgQElucHV0KClcbiAgc2l6ZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcml2YXRlIF9jaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3ZhbHVlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgZ2V0IGNoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG4gIH1cblxuICBzZXQgY2hlY2tlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICBpZiAodGhpcy5fY2hlY2tlZCAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX2NoZWNrZWQgPSB2YWx1ZTtcbiAgICAgIGlmICh0aGlzLl9jaGVja2VkICYmIHRoaXMucmFkaW9Hcm91cCAmJiB0aGlzLnJhZGlvR3JvdXAudmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgdGhpcy5yYWRpb0dyb3VwLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLl92YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgZ2V0IHZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodGhpcy5yYWRpb0dyb3VwKSB7XG4gICAgICAgIHRoaXMuX2NoZWNrZWQgPSB0aGlzLnJhZGlvR3JvdXAudmFsdWUgPT09IHRoaXMudmFsdWU7XG4gICAgICB9XG4gICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5fdmFsdWUpO1xuICAgIH1cbiAgfVxuICAvLyBEaXNhYmxlZCBTdGF0ZVxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRpc2FibGVkJylcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZCB8fCAodGhpcy5yYWRpb0dyb3VwICE9IG51bGwgJiYgdGhpcy5yYWRpb0dyb3VwLmRpc2FibGVkKTtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9ICEhdmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE5PVk9fUkFESU9fR1JPVVApIEBPcHRpb25hbCgpIHB1YmxpYyByYWRpb0dyb3VwOiBSYWRpb0dyb3VwLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLnJhZGlvR3JvdXAgPSByYWRpb0dyb3VwO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMucmFkaW9Hcm91cCkge1xuICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy5yYWRpb0dyb3VwLnZhbHVlID09PSB0aGlzLl92YWx1ZTtcbiAgICAgIHRoaXMubmFtZSA9IHRoaXMucmFkaW9Hcm91cC5uYW1lO1xuICAgIH1cbiAgfVxuXG4gIF9vbklucHV0Q2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQpO1xuXG4gICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnJhZGlvR3JvdXApIHtcbiAgICAgIHRoaXMucmFkaW9Hcm91cC52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrID0gKF86IGFueSkgPT4ge1xuICAgIC8vIHBsYWNlaG9sZGVyXG4gIH07XG5cbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAvLyBwbGFjZWhvbGRlclxuICB9O1xuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==