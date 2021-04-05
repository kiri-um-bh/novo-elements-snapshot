import { Directive, ElementRef, Inject, Input, Optional, Self } from '@angular/core';
import { NOVO_INPUT_FORMAT } from './formats/base-format';
import * as i0 from "@angular/core";
/** Directive used to connect an input to a MatDatepicker. */
export class NovoPickerDirective {
    constructor(_elementRef, formatter) {
        var _a;
        this._elementRef = _elementRef;
        this.formatter = formatter;
        if (!this.formatter) {
            console.warn('Picker directive is missing required formatter');
        }
        (_a = this.formatter) === null || _a === void 0 ? void 0 : _a.valueChange.subscribe((value) => {
            this.updatePicker(value);
        });
    }
    /** The datepicker that this input is associated with. */
    set picker(picker) {
        if (picker) {
            this._picker = picker;
            picker.registerOnChange((value) => this.updateValue(value));
        }
    }
    updateValue(value) {
        this.formatter.writeValue(value);
    }
    updatePicker(value) {
        if (this._picker) {
            this._picker.writeValue(value);
        }
    }
}
NovoPickerDirective.ɵfac = function NovoPickerDirective_Factory(t) { return new (t || NovoPickerDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(NOVO_INPUT_FORMAT, 10)); };
NovoPickerDirective.ɵdir = i0.ɵɵdefineDirective({ type: NovoPickerDirective, selectors: [["input", "picker", ""]], hostAttrs: [1, "novo-has-picker"], inputs: { picker: "picker" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoPickerDirective, [{
        type: Directive,
        args: [{
                selector: 'input[picker]',
                host: {
                    class: 'novo-has-picker',
                },
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Self
            }, {
                type: Inject,
                args: [NOVO_INPUT_FORMAT]
            }] }]; }, { picker: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2ZpZWxkL3BpY2tlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJGLE9BQU8sRUFBbUIsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFM0UsNkRBQTZEO0FBTzdELE1BQU0sT0FBTyxtQkFBbUI7SUFXOUIsWUFDVSxXQUF5QyxFQUNNLFNBQStCOztRQUQ5RSxnQkFBVyxHQUFYLFdBQVcsQ0FBOEI7UUFDTSxjQUFTLEdBQVQsU0FBUyxDQUFzQjtRQUV0RixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLGdEQUFnRCxDQUFDLENBQUM7U0FDaEU7UUFDRCxNQUFBLElBQUksQ0FBQyxTQUFTLDBDQUFFLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBRTtJQUNMLENBQUM7SUFwQkQseURBQXlEO0lBQ3pELElBQ0ksTUFBTSxDQUFDLE1BQTRCO1FBQ3JDLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDdEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDN0Q7SUFDSCxDQUFDO0lBZUQsV0FBVyxDQUFDLEtBQVU7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFVO1FBQ3JCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7O3NGQS9CVSxtQkFBbUIsNERBYUEsaUJBQWlCO3dEQWJwQyxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQU4vQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsaUJBQWlCO2lCQUN6QjthQUNGOztzQkFjSSxRQUFROztzQkFBSSxJQUFJOztzQkFBSSxNQUFNO3VCQUFDLGlCQUFpQjt3QkFWM0MsTUFBTTtrQkFEVCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBPcHRpb25hbCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOb3ZvSW5wdXRGb3JtYXQsIE5PVk9fSU5QVVRfRk9STUFUIH0gZnJvbSAnLi9mb3JtYXRzL2Jhc2UtZm9ybWF0JztcblxuLyoqIERpcmVjdGl2ZSB1c2VkIHRvIGNvbm5lY3QgYW4gaW5wdXQgdG8gYSBNYXREYXRlcGlja2VyLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbcGlja2VyXScsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25vdm8taGFzLXBpY2tlcicsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9QaWNrZXJEaXJlY3RpdmUge1xuICAvKiogVGhlIGRhdGVwaWNrZXIgdGhhdCB0aGlzIGlucHV0IGlzIGFzc29jaWF0ZWQgd2l0aC4gKi9cbiAgQElucHV0KClcbiAgc2V0IHBpY2tlcihwaWNrZXI6IENvbnRyb2xWYWx1ZUFjY2Vzc29yKSB7XG4gICAgaWYgKHBpY2tlcikge1xuICAgICAgdGhpcy5fcGlja2VyID0gcGlja2VyO1xuICAgICAgcGlja2VyLnJlZ2lzdGVyT25DaGFuZ2UoKHZhbHVlKSA9PiB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlKSk7XG4gICAgfVxuICB9XG4gIF9waWNrZXI6IENvbnRyb2xWYWx1ZUFjY2Vzc29yO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4sXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBASW5qZWN0KE5PVk9fSU5QVVRfRk9STUFUKSBwcml2YXRlIGZvcm1hdHRlcjogTm92b0lucHV0Rm9ybWF0PGFueT4sXG4gICkge1xuICAgIGlmICghdGhpcy5mb3JtYXR0ZXIpIHtcbiAgICAgIGNvbnNvbGUud2FybignUGlja2VyIGRpcmVjdGl2ZSBpcyBtaXNzaW5nIHJlcXVpcmVkIGZvcm1hdHRlcicpO1xuICAgIH1cbiAgICB0aGlzLmZvcm1hdHRlcj8udmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVQaWNrZXIodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuZm9ybWF0dGVyLndyaXRlVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgdXBkYXRlUGlja2VyKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fcGlja2VyKSB7XG4gICAgICB0aGlzLl9waWNrZXIud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=