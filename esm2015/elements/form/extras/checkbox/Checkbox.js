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
      <input [name]="name" type="checkbox" [(ngModel)]="model" [attr.id]="name" [disabled]="disabled" />
      <label [attr.for]="name" (click)="select($event)" [class.disabled]="disabled">
        <i
          [class.bhi-checkbox-empty]="!model && !indeterminate && boxIcon"
          [class.bhi-checkbox-filled]="model && !indeterminate && boxIcon"
          [class.bhi-checkbox-indeterminate]="indeterminate && boxIcon"
          [class.bhi-circle-o]="!model && !indeterminate && !boxIcon"
          [class.bhi-check]="model && !indeterminate && !boxIcon"
          [class.bhi-circle]="indeterminate && !boxIcon"
        ></i>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2V4dHJhcy9jaGVja2JveC9DaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUcsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE1BQU07QUFDTixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7O0lBMEI1Qyw0QkFBb0I7SUFBQSxZQUFXO0lBQUEsaUJBQU87OztJQUFsQixlQUFXO0lBQVgsa0NBQVc7O0FBeEJ2QyxzREFBc0Q7QUFDdEQsTUFBTSx1QkFBdUIsR0FBRztJQUM5QixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUM7SUFDbEQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFzQjdDLE1BQU0sT0FBTyxtQkFBbUI7SUFxQjlCLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBZjFDLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBRS9CLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFLMUIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpELFlBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsa0JBQWEsR0FBYSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDbkMsbUJBQWMsR0FBYSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFFUyxDQUFDO0lBRTlDLFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUM7SUFDeEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFZO1FBQ2pCLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNqRTtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFZO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxRQUFpQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDOztzRkFwRFUsbUJBQW1CO3dEQUFuQixtQkFBbUIsc09BbEJuQixDQUFDLHVCQUF1QixDQUFDO1FBRWxDLDhCQUNFO1FBQUEsZ0NBQ0E7UUFEcUMsMklBQW1CO1FBQXhELGlCQUNBO1FBQUEsZ0NBQ0U7UUFEdUIscUdBQVMsa0JBQWMsSUFBQztRQUMvQyxvQkFPSztRQUNMLHNFQUFvQjtRQUN0QixpQkFBUTtRQUNWLGlCQUFNOztRQWJ1QixvQ0FBdUIsMEJBQUE7UUFDM0MsZUFBYTtRQUFiLCtCQUFhLHNCQUFBLDBCQUFBO1FBQXFDLDhCQUFnQjtRQUN2QixlQUEyQjtRQUEzQix3Q0FBMkI7UUFBdEUsK0JBQWlCO1FBRXBCLGVBQWdFO1FBQWhFLHFGQUFnRSx1RUFBQSxnRUFBQSxrRUFBQSw4REFBQSxpREFBQTtRQU81RCxlQUFhO1FBQWIsZ0NBQWE7O2tEQUtkLG1CQUFtQjtjQXBCL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDcEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7R0FlVDthQUNGO29FQUdDLElBQUk7a0JBREgsS0FBSztZQUdOLEtBQUs7a0JBREosS0FBSztZQUdOLGFBQWE7a0JBRFosS0FBSztZQUdOLFFBQVE7a0JBRFAsS0FBSztZQUdOLGFBQWE7a0JBRFosS0FBSztZQUlOLFFBQVE7a0JBRFAsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IENIRUNLQk9YX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0NoZWNrYm94RWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuY29uc3QgTEFZT1VUX0RFRkFVTFRTID0geyBpY29uU3R5bGU6ICdib3gnIH07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2hlY2tib3gnLFxuICBwcm92aWRlcnM6IFtDSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNoZWNrLWJveC1ncm91cFwiIFtjbGFzcy5jaGVja2VkXT1cIm1vZGVsXCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICA8aW5wdXQgW25hbWVdPVwibmFtZVwiIHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwibW9kZWxcIiBbYXR0ci5pZF09XCJuYW1lXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgLz5cbiAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwibmFtZVwiIChjbGljayk9XCJzZWxlY3QoJGV2ZW50KVwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICA8aVxuICAgICAgICAgIFtjbGFzcy5iaGktY2hlY2tib3gtZW1wdHldPVwiIW1vZGVsICYmICFpbmRldGVybWluYXRlICYmIGJveEljb25cIlxuICAgICAgICAgIFtjbGFzcy5iaGktY2hlY2tib3gtZmlsbGVkXT1cIm1vZGVsICYmICFpbmRldGVybWluYXRlICYmIGJveEljb25cIlxuICAgICAgICAgIFtjbGFzcy5iaGktY2hlY2tib3gtaW5kZXRlcm1pbmF0ZV09XCJpbmRldGVybWluYXRlICYmIGJveEljb25cIlxuICAgICAgICAgIFtjbGFzcy5iaGktY2lyY2xlLW9dPVwiIW1vZGVsICYmICFpbmRldGVybWluYXRlICYmICFib3hJY29uXCJcbiAgICAgICAgICBbY2xhc3MuYmhpLWNoZWNrXT1cIm1vZGVsICYmICFpbmRldGVybWluYXRlICYmICFib3hJY29uXCJcbiAgICAgICAgICBbY2xhc3MuYmhpLWNpcmNsZV09XCJpbmRldGVybWluYXRlICYmICFib3hJY29uXCJcbiAgICAgICAgPjwvaT5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJsYWJlbFwiPnt7IGxhYmVsIH19PC9zcGFuPlxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NoZWNrYm94RWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGluZGV0ZXJtaW5hdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgbGF5b3V0T3B0aW9uczogeyBpY29uU3R5bGU/OiBzdHJpbmcgfTsgLy8gVE9ETyAtIGF2b2lkIGNvbmZpZ3MgbGlrZSB0aGlzXG5cbiAgQE91dHB1dCgpXG4gIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBib3hJY29uOiBib29sZWFuID0gdHJ1ZTtcbiAgbW9kZWw7XG5cbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGF5b3V0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIExBWU9VVF9ERUZBVUxUUywgdGhpcy5sYXlvdXRPcHRpb25zKTtcbiAgICB0aGlzLmJveEljb24gPSB0aGlzLmxheW91dE9wdGlvbnMuaWNvblN0eWxlID09PSAnYm94JztcbiAgfVxuXG4gIHNlbGVjdChldmVudDogRXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm1vZGVsID0gIXRoaXMubW9kZWw7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5tb2RlbCk7XG4gICAgICB0aGlzLm9uU2VsZWN0LmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCwgdmFsdWU6IHRoaXMubW9kZWwgfSk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==