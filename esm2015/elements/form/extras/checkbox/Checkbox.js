// NG2
import { ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { Helpers } from '../../../../utils/Helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function NovoCheckboxElement_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.label);
} }
// Value accessor for the component (supports ngModel)
const CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoCheckboxElement),
    multi: true,
};
const LAYOUT_DEFAULTS = { iconStyle: 'box' };
export class NovoCheckboxElement {
    constructor(ref) {
        this.ref = ref;
        this.indeterminate = false;
        this.disabled = false;
        this.onSelect = new EventEmitter();
        this.boxIcon = true;
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    ngOnInit() {
        this.layoutOptions = Object.assign({}, LAYOUT_DEFAULTS, this.layoutOptions);
        this.boxIcon = this.layoutOptions.iconStyle === 'box';
    }
    select(event) {
        Helpers.swallowEvent(event);
        if (!this.disabled) {
            this.model = !this.model;
            this.onModelChange(this.model);
            this.onSelect.emit({ originalEvent: event, value: this.model });
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
NovoCheckboxElement.ɵfac = function NovoCheckboxElement_Factory(t) { return new (t || NovoCheckboxElement)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
NovoCheckboxElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCheckboxElement, selectors: [["novo-checkbox"]], inputs: { name: "name", label: "label", indeterminate: "indeterminate", disabled: "disabled", layoutOptions: "layoutOptions" }, outputs: { onSelect: "onSelect" }, features: [i0.ɵɵProvidersFeature([CHECKBOX_VALUE_ACCESSOR])], decls: 5, vars: 24, consts: [[1, "check-box-group"], ["type", "checkbox", 3, "name", "ngModel", "disabled", "ngModelChange"], [3, "click"], [4, "ngIf"]], template: function NovoCheckboxElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "input", 1);
        i0.ɵɵlistener("ngModelChange", function NovoCheckboxElement_Template_input_ngModelChange_1_listener($event) { return ctx.model = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "label", 2);
        i0.ɵɵlistener("click", function NovoCheckboxElement_Template_label_click_2_listener($event) { return ctx.select($event); });
        i0.ɵɵelement(3, "i");
        i0.ɵɵtemplate(4, NovoCheckboxElement_span_4_Template, 2, 1, "span", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("checked", ctx.model)("disabled", ctx.disabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("name", ctx.name)("ngModel", ctx.model)("disabled", ctx.disabled);
        i0.ɵɵattribute("id", ctx.name);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("disabled", ctx.disabled);
        i0.ɵɵattribute("for", ctx.name);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("bhi-checkbox-empty", !ctx.model && !ctx.indeterminate && ctx.boxIcon)("bhi-checkbox-filled", ctx.model && !ctx.indeterminate && ctx.boxIcon)("bhi-checkbox-indeterminate", ctx.indeterminate && ctx.boxIcon)("bhi-circle-o", !ctx.model && !ctx.indeterminate && !ctx.boxIcon)("bhi-check", ctx.model && !ctx.indeterminate && !ctx.boxIcon)("bhi-circle", ctx.indeterminate && !ctx.boxIcon);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.label);
    } }, directives: [i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgModel, i2.NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCheckboxElement, [{
        type: Component,
        args: [{
                selector: 'novo-checkbox',
                providers: [CHECKBOX_VALUE_ACCESSOR],
                template: `
    <div class="check-box-group" [class.checked]="model" [class.disabled]="disabled">
        <input [name]="name" type="checkbox" [(ngModel)]="model" [attr.id]="name" [disabled]="disabled">
        <label [attr.for]="name" (click)="select($event)" [class.disabled]="disabled">
          <i [class.bhi-checkbox-empty]="!model && !indeterminate && boxIcon"
              [class.bhi-checkbox-filled]="model && !indeterminate && boxIcon"
              [class.bhi-checkbox-indeterminate]="indeterminate && boxIcon"
              [class.bhi-circle-o]="!model && !indeterminate && !boxIcon"
              [class.bhi-check]="model && !indeterminate && !boxIcon"
              [class.bhi-circle]="indeterminate && !boxIcon"></i>
          <span *ngIf="label">{{ label }}</span>
        </label>
    </div>
  `,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { name: [{
            type: Input
        }], label: [{
            type: Input
        }], indeterminate: [{
            type: Input
        }], disabled: [{
            type: Input
        }], layoutOptions: [{
            type: Input
        }], onSelect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9leHRyYXMvY2hlY2tib3gvQ2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxNQUFNO0FBQ04sT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7OztJQXdCMUMsNEJBQW9CO0lBQUEsWUFBVztJQUFBLGlCQUFPOzs7SUFBbEIsZUFBVztJQUFYLGtDQUFXOztBQXRCekMsc0RBQXNEO0FBQ3RELE1BQU0sdUJBQXVCLEdBQUc7SUFDOUIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQUVGLE1BQU0sZUFBZSxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDO0FBb0I3QyxNQUFNLE9BQU8sbUJBQW1CO0lBcUI5QixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWYxQyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBSzFCLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVqRCxZQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGtCQUFhLEdBQWEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLG1CQUFjLEdBQWEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRVMsQ0FBQztJQUUvQyxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDO0lBQ3hELENBQUM7SUFFRCxNQUFNLENBQUMsS0FBWTtRQUNqQixPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDakU7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBWTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBWTtRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsUUFBaUI7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7c0ZBcERVLG1CQUFtQjt3REFBbkIsbUJBQW1CLHNPQWhCbkIsQ0FBQyx1QkFBdUIsQ0FBQztRQUVsQyw4QkFDSTtRQUFBLGdDQUNBO1FBRHFDLDJJQUFtQjtRQUF4RCxpQkFDQTtRQUFBLGdDQUNFO1FBRHVCLHFHQUFTLGtCQUFjLElBQUM7UUFDL0Msb0JBS3VEO1FBQ3ZELHNFQUFvQjtRQUN0QixpQkFBUTtRQUNaLGlCQUFNOztRQVh1QixvQ0FBdUIsMEJBQUE7UUFDekMsZUFBYTtRQUFiLCtCQUFhLHNCQUFBLDBCQUFBO1FBQXFDLDhCQUFnQjtRQUN2QixlQUEyQjtRQUEzQix3Q0FBMkI7UUFBdEUsK0JBQWlCO1FBQ25CLGVBQWdFO1FBQWhFLHFGQUFnRSx1RUFBQSxnRUFBQSxrRUFBQSw4REFBQSxpREFBQTtRQU03RCxlQUFhO1FBQWIsZ0NBQWE7O2tEQUtoQixtQkFBbUI7Y0FsQi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7Z0JBQ3BDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztHQWFUO2FBQ0Y7b0VBR0MsSUFBSTtrQkFESCxLQUFLO1lBR04sS0FBSztrQkFESixLQUFLO1lBR04sYUFBYTtrQkFEWixLQUFLO1lBR04sUUFBUTtrQkFEUCxLQUFLO1lBR04sYUFBYTtrQkFEWixLQUFLO1lBSU4sUUFBUTtrQkFEUCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0hFQ0tCT1hfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvQ2hlY2tib3hFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5jb25zdCBMQVlPVVRfREVGQVVMVFMgPSB7IGljb25TdHlsZTogJ2JveCcgfTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jaGVja2JveCcsXG4gIHByb3ZpZGVyczogW0NIRUNLQk9YX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2hlY2stYm94LWdyb3VwXCIgW2NsYXNzLmNoZWNrZWRdPVwibW9kZWxcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgPGlucHV0IFtuYW1lXT1cIm5hbWVcIiB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cIm1vZGVsXCIgW2F0dHIuaWRdPVwibmFtZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICA8bGFiZWwgW2F0dHIuZm9yXT1cIm5hbWVcIiAoY2xpY2spPVwic2VsZWN0KCRldmVudClcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgICA8aSBbY2xhc3MuYmhpLWNoZWNrYm94LWVtcHR5XT1cIiFtb2RlbCAmJiAhaW5kZXRlcm1pbmF0ZSAmJiBib3hJY29uXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmJoaS1jaGVja2JveC1maWxsZWRdPVwibW9kZWwgJiYgIWluZGV0ZXJtaW5hdGUgJiYgYm94SWNvblwiXG4gICAgICAgICAgICAgIFtjbGFzcy5iaGktY2hlY2tib3gtaW5kZXRlcm1pbmF0ZV09XCJpbmRldGVybWluYXRlICYmIGJveEljb25cIlxuICAgICAgICAgICAgICBbY2xhc3MuYmhpLWNpcmNsZS1vXT1cIiFtb2RlbCAmJiAhaW5kZXRlcm1pbmF0ZSAmJiAhYm94SWNvblwiXG4gICAgICAgICAgICAgIFtjbGFzcy5iaGktY2hlY2tdPVwibW9kZWwgJiYgIWluZGV0ZXJtaW5hdGUgJiYgIWJveEljb25cIlxuICAgICAgICAgICAgICBbY2xhc3MuYmhpLWNpcmNsZV09XCJpbmRldGVybWluYXRlICYmICFib3hJY29uXCI+PC9pPlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwibGFiZWxcIj57eyBsYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NoZWNrYm94RWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGluZGV0ZXJtaW5hdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgbGF5b3V0T3B0aW9uczogeyBpY29uU3R5bGU/OiBzdHJpbmcgfTsgLy8gVE9ETyAtIGF2b2lkIGNvbmZpZ3MgbGlrZSB0aGlzXG5cbiAgQE91dHB1dCgpXG4gIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBib3hJY29uOiBib29sZWFuID0gdHJ1ZTtcbiAgbW9kZWw7XG5cbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGF5b3V0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIExBWU9VVF9ERUZBVUxUUywgdGhpcy5sYXlvdXRPcHRpb25zKTtcbiAgICB0aGlzLmJveEljb24gPSB0aGlzLmxheW91dE9wdGlvbnMuaWNvblN0eWxlID09PSAnYm94JztcbiAgfVxuXG4gIHNlbGVjdChldmVudDogRXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm1vZGVsID0gIXRoaXMubW9kZWw7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5tb2RlbCk7XG4gICAgICB0aGlzLm9uU2VsZWN0LmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCwgdmFsdWU6IHRoaXMubW9kZWwgfSk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==