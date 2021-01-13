// NG2
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { Helpers } from '../../../../utils/Helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = function (a0) { return { checked: a0 }; };
const _c1 = function (a0, a1) { return { "bhi-checkbox-empty": a0, "bhi-checkbox-filled": a1 }; };
function NovoCheckListElement_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "input", 2);
    i0.ɵɵlistener("change", function NovoCheckListElement_div_0_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r4); const option_r1 = ctx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.select($event, option_r1); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 3);
    i0.ɵɵlistener("click", function NovoCheckListElement_div_0_Template_label_click_2_listener($event) { i0.ɵɵrestoreView(_r4); const option_r1 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.select($event, option_r1); });
    i0.ɵɵelement(3, "i", 4);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", ctx_r0.disabled);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(12, _c0, option_r1.checked));
    i0.ɵɵattribute("data-automation-id", option_r1.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", ctx_r0.name)("ngModel", option_r1.checked)("value", option_r1.checked)("disabled", ctx_r0.disabled);
    i0.ɵɵattribute("id", ctx_r0.name + i_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("for", ctx_r0.name + i_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(14, _c1, !option_r1.checked, option_r1.checked));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r1.label);
} }
// Value accessor for the component (supports ngModel)
const CHECKLIST_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoCheckListElement),
    multi: true,
};
export class NovoCheckListElement {
    constructor() {
        this.onSelect = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    ngOnInit() {
        this.setModel();
        this.setupOptions();
    }
    select(event, item) {
        Helpers.swallowEvent(event);
        if (!this.disabled) {
            item.checked = !item.checked;
            this.model = this._options.filter((checkBox) => checkBox.checked).map((x) => x.value);
            this.onModelChange(this.model.length > 0 ? this.model : '');
            this.onSelect.emit({ selected: this.model });
        }
    }
    setupOptions() {
        this.options = this.options || [];
        this._options = [];
        if (this.options.length && !this.options[0].value) {
            this.options.forEach((option) => {
                const formattedOption = {
                    value: option,
                    label: option,
                    checked: this.model && this.model.length && this.model.indexOf(option.value) !== -1,
                };
                this._options.push(formattedOption);
            });
        }
        else {
            this.options.forEach((option) => {
                const formattedOption = option;
                formattedOption.checked = this.model && this.model.length && this.model.indexOf(option.value) !== -1;
                this._options.push(formattedOption);
            });
        }
    }
    setModel() {
        const checkedOptions = this.options.filter((checkBox) => checkBox.checked).map((x) => x.value);
        this.writeValue(checkedOptions);
    }
    writeValue(model) {
        this.model = model || [];
        if (model) {
            this.setupOptions();
        }
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
NovoCheckListElement.ɵfac = function NovoCheckListElement_Factory(t) { return new (t || NovoCheckListElement)(); };
NovoCheckListElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCheckListElement, selectors: [["novo-check-list"]], inputs: { name: "name", options: "options", disabled: "disabled" }, outputs: { onSelect: "onSelect" }, features: [i0.ɵɵProvidersFeature([CHECKLIST_VALUE_ACCESSOR])], decls: 1, vars: 1, consts: [["class", "check-box-group", 3, "ngClass", "disabled", 4, "ngFor", "ngForOf"], [1, "check-box-group", 3, "ngClass"], ["type", "checkbox", 3, "name", "ngModel", "value", "disabled", "change"], [3, "click"], [3, "ngClass"]], template: function NovoCheckListElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoCheckListElement_div_0_Template, 6, 17, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx._options);
    } }, directives: [i1.NgForOf, i1.NgClass, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCheckListElement, [{
        type: Component,
        args: [{
                selector: 'novo-check-list',
                providers: [CHECKLIST_VALUE_ACCESSOR],
                template: `
    <div
      class="check-box-group"
      *ngFor="let option of _options; let i = index"
      [ngClass]="{ checked: option.checked }"
      [class.disabled]="disabled"
      [attr.data-automation-id]="option.label"
    >
      <input
        [name]="name"
        type="checkbox"
        [ngModel]="option.checked"
        [attr.id]="name + i"
        [value]="option.checked"
        (change)="select($event, option)"
        [disabled]="disabled"
      />
      <label [attr.for]="name + i" (click)="select($event, option)">
        <i [ngClass]="{ 'bhi-checkbox-empty': !option.checked, 'bhi-checkbox-filled': option.checked }"></i>
        <span>{{ option.label }}</span>
      </label>
    </div>
  `,
            }]
    }], null, { name: [{
            type: Input
        }], options: [{
            type: Input
        }], disabled: [{
            type: Input
        }], onSelect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9leHRyYXMvY2hlY2tib3gvQ2hlY2tMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsTUFBTTtBQUNOLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7SUFhaEQsOEJBT0U7SUFBQSxnQ0FTQTtJQUhFLDZPQUFpQztJQU5uQyxpQkFTQTtJQUFBLGdDQUNFO0lBRDJCLDJPQUFnQztJQUMzRCx1QkFBb0c7SUFDcEcsNEJBQU07SUFBQSxZQUFrQjtJQUFBLGlCQUFPO0lBQ2pDLGlCQUFRO0lBQ1YsaUJBQU07Ozs7O0lBaEJKLDJDQUEyQjtJQUQzQix3RUFBdUM7SUFFdkMscURBQXdDO0lBR3RDLGVBQWE7SUFBYixrQ0FBYSw4QkFBQSw0QkFBQSw2QkFBQTtJQUdiLHdDQUFvQjtJQUtmLGVBQXFCO0lBQXJCLHlDQUFxQjtJQUN2QixlQUE0RjtJQUE1Riw0RkFBNEY7SUFDekYsZUFBa0I7SUFBbEIscUNBQWtCOztBQTdCaEMsc0RBQXNEO0FBQ3RELE1BQU0sd0JBQXdCLEdBQUc7SUFDL0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0lBQ25ELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQTZCRixNQUFNLE9BQU8sb0JBQW9CO0lBM0JqQztRQW1DRSxhQUFRLEdBQXNCLElB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Q0FBQztJQUNsQyxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQVk7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQVk7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWlCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7O3dGQXpFVSxvQkFBb0I7eURBQXBCLG9CQUFvQiw0S0F6QnBCLENBQUMsd0JBQXdCLENBQUM7UUFFbkMsc0VBT0U7O1FBTEEsc0NBQThDOztrREFxQnZDLG9CQUFvQjtjQTNCaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQlQ7YUFDRjtnQkFHQyxJQUFJO2tCQURILEtBQUs7WUFHTixPQUFPO2tCQUROLEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUs7WUFHTixRQUFRO2tCQURQLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IENIRUNLTElTVF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9DaGVja0xpc3RFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNoZWNrLWxpc3QnLFxuICBwcm92aWRlcnM6IFtDSEVDS0xJU1RfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiY2hlY2stYm94LWdyb3VwXCJcbiAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgX29wdGlvbnM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgW25nQ2xhc3NdPVwieyBjaGVja2VkOiBvcHRpb24uY2hlY2tlZCB9XCJcbiAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwib3B0aW9uLmxhYmVsXCJcbiAgICA+XG4gICAgICA8aW5wdXRcbiAgICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIFtuZ01vZGVsXT1cIm9wdGlvbi5jaGVja2VkXCJcbiAgICAgICAgW2F0dHIuaWRdPVwibmFtZSArIGlcIlxuICAgICAgICBbdmFsdWVdPVwib3B0aW9uLmNoZWNrZWRcIlxuICAgICAgICAoY2hhbmdlKT1cInNlbGVjdCgkZXZlbnQsIG9wdGlvbilcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwibmFtZSArIGlcIiAoY2xpY2spPVwic2VsZWN0KCRldmVudCwgb3B0aW9uKVwiPlxuICAgICAgICA8aSBbbmdDbGFzc109XCJ7ICdiaGktY2hlY2tib3gtZW1wdHknOiAhb3B0aW9uLmNoZWNrZWQsICdiaGktY2hlY2tib3gtZmlsbGVkJzogb3B0aW9uLmNoZWNrZWQgfVwiPjwvaT5cbiAgICAgICAgPHNwYW4+e3sgb3B0aW9uLmxhYmVsIH19PC9zcGFuPlxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NoZWNrTGlzdEVsZW1lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBvcHRpb25zOiBBcnJheTxhbnk+O1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQE91dHB1dCgpXG4gIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBfb3B0aW9uczogQXJyYXk8YW55PjtcbiAgbW9kZWw6IGFueTtcbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRNb2RlbCgpO1xuICAgIHRoaXMuc2V0dXBPcHRpb25zKCk7XG4gIH1cblxuICBzZWxlY3QoZXZlbnQsIGl0ZW0pIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkO1xuICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuX29wdGlvbnMuZmlsdGVyKChjaGVja0JveCkgPT4gY2hlY2tCb3guY2hlY2tlZCkubWFwKCh4KSA9PiB4LnZhbHVlKTtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLm1vZGVsLmxlbmd0aCA+IDAgPyB0aGlzLm1vZGVsIDogJycpO1xuICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KHsgc2VsZWN0ZWQ6IHRoaXMubW9kZWwgfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0dXBPcHRpb25zKCkge1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCBbXTtcbiAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgaWYgKHRoaXMub3B0aW9ucy5sZW5ndGggJiYgIXRoaXMub3B0aW9uc1swXS52YWx1ZSkge1xuICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWRPcHRpb24gPSB7XG4gICAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgICAgICBsYWJlbDogb3B0aW9uLFxuICAgICAgICAgIGNoZWNrZWQ6IHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5sZW5ndGggJiYgdGhpcy5tb2RlbC5pbmRleE9mKG9wdGlvbi52YWx1ZSkgIT09IC0xLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9vcHRpb25zLnB1c2goZm9ybWF0dGVkT3B0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZE9wdGlvbiA9IG9wdGlvbjtcbiAgICAgICAgZm9ybWF0dGVkT3B0aW9uLmNoZWNrZWQgPSB0aGlzLm1vZGVsICYmIHRoaXMubW9kZWwubGVuZ3RoICYmIHRoaXMubW9kZWwuaW5kZXhPZihvcHRpb24udmFsdWUpICE9PSAtMTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5wdXNoKGZvcm1hdHRlZE9wdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZXRNb2RlbCgpOiB2b2lkIHtcbiAgICBjb25zdCBjaGVja2VkT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIoKGNoZWNrQm94KSA9PiBjaGVja0JveC5jaGVja2VkKS5tYXAoKHgpID0+IHgudmFsdWUpO1xuICAgIHRoaXMud3JpdGVWYWx1ZShjaGVja2VkT3B0aW9ucyk7XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWwgfHwgW107XG4gICAgaWYgKG1vZGVsKSB7XG4gICAgICB0aGlzLnNldHVwT3B0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG59XG4iXX0=