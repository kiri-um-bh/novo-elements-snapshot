/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/extras/checkbox/Checkbox.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { Helpers } from '../../../../utils/Helpers';
// Value accessor for the component (supports ngModel)
/** @type {?} */
const CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NovoCheckboxElement)),
    multi: true,
};
/** @type {?} */
const LAYOUT_DEFAULTS = { iconStyle: 'box' };
export class NovoCheckboxElement {
    /**
     * @param {?} ref
     */
    constructor(ref) {
        this.ref = ref;
        this.indeterminate = false;
        this.disabled = false;
        // TODO - avoid configs like this
        this.onSelect = new EventEmitter();
        this.boxIcon = true;
        this.onModelChange = (/**
         * @return {?}
         */
        () => { });
        this.onModelTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.layoutOptions = Object.assign({}, LAYOUT_DEFAULTS, this.layoutOptions);
        this.boxIcon = this.layoutOptions.iconStyle === 'box';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    select(event) {
        Helpers.swallowEvent(event);
        if (!this.disabled) {
            this.model = !this.model;
            this.onModelChange(this.model);
            this.onSelect.emit({ originalEvent: event, value: this.model });
        }
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
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
}
NovoCheckboxElement.decorators = [
    { type: Component, args: [{
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
  `
            }] }
];
/** @nocollapse */
NovoCheckboxElement.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NovoCheckboxElement.propDecorators = {
    name: [{ type: Input }],
    label: [{ type: Input }],
    indeterminate: [{ type: Input }],
    disabled: [{ type: Input }],
    layoutOptions: [{ type: Input }],
    onSelect: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NovoCheckboxElement.prototype.name;
    /** @type {?} */
    NovoCheckboxElement.prototype.label;
    /** @type {?} */
    NovoCheckboxElement.prototype.indeterminate;
    /** @type {?} */
    NovoCheckboxElement.prototype.disabled;
    /** @type {?} */
    NovoCheckboxElement.prototype.layoutOptions;
    /** @type {?} */
    NovoCheckboxElement.prototype.onSelect;
    /** @type {?} */
    NovoCheckboxElement.prototype.boxIcon;
    /** @type {?} */
    NovoCheckboxElement.prototype.model;
    /** @type {?} */
    NovoCheckboxElement.prototype.onModelChange;
    /** @type {?} */
    NovoCheckboxElement.prototype.onModelTouched;
    /**
     * @type {?}
     * @private
     */
    NovoCheckboxElement.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9leHRyYXMvY2hlY2tib3gvQ2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUcsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztNQUc5Qyx1QkFBdUIsR0FBRztJQUM5QixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNaOztNQUVLLGVBQWUsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUU7QUFvQjVDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFxQjlCLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBZjFDLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBRS9CLGFBQVEsR0FBWSxLQUFLLENBQUM7O1FBSzFCLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVqRCxZQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGtCQUFhOzs7UUFBYSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUM7UUFDcEMsbUJBQWM7OztRQUFhLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQztJQUVTLENBQUM7Ozs7SUFFL0MsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQztJQUN4RCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFZO1FBQ2pCLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNqRTtJQUNILENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQVk7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsUUFBaUI7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7O1lBdEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7Z0JBQ3BDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztHQWFUO2FBQ0Y7Ozs7WUEvQlEsaUJBQWlCOzs7bUJBaUN2QixLQUFLO29CQUVMLEtBQUs7NEJBRUwsS0FBSzt1QkFFTCxLQUFLOzRCQUVMLEtBQUs7dUJBR0wsTUFBTTs7OztJQVhQLG1DQUNhOztJQUNiLG9DQUNjOztJQUNkLDRDQUMrQjs7SUFDL0IsdUNBQzBCOztJQUMxQiw0Q0FDc0M7O0lBRXRDLHVDQUNpRDs7SUFFakQsc0NBQXdCOztJQUN4QixvQ0FBTTs7SUFFTiw0Q0FBb0M7O0lBQ3BDLDZDQUFxQzs7Ozs7SUFFekIsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0hFQ0tCT1hfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvQ2hlY2tib3hFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5jb25zdCBMQVlPVVRfREVGQVVMVFMgPSB7IGljb25TdHlsZTogJ2JveCcgfTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jaGVja2JveCcsXG4gIHByb3ZpZGVyczogW0NIRUNLQk9YX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2hlY2stYm94LWdyb3VwXCIgW2NsYXNzLmNoZWNrZWRdPVwibW9kZWxcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgPGlucHV0IFtuYW1lXT1cIm5hbWVcIiB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cIm1vZGVsXCIgW2F0dHIuaWRdPVwibmFtZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICA8bGFiZWwgW2F0dHIuZm9yXT1cIm5hbWVcIiAoY2xpY2spPVwic2VsZWN0KCRldmVudClcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgICA8aSBbY2xhc3MuYmhpLWNoZWNrYm94LWVtcHR5XT1cIiFtb2RlbCAmJiAhaW5kZXRlcm1pbmF0ZSAmJiBib3hJY29uXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmJoaS1jaGVja2JveC1maWxsZWRdPVwibW9kZWwgJiYgIWluZGV0ZXJtaW5hdGUgJiYgYm94SWNvblwiXG4gICAgICAgICAgICAgIFtjbGFzcy5iaGktY2hlY2tib3gtaW5kZXRlcm1pbmF0ZV09XCJpbmRldGVybWluYXRlICYmIGJveEljb25cIlxuICAgICAgICAgICAgICBbY2xhc3MuYmhpLWNpcmNsZS1vXT1cIiFtb2RlbCAmJiAhaW5kZXRlcm1pbmF0ZSAmJiAhYm94SWNvblwiXG4gICAgICAgICAgICAgIFtjbGFzcy5iaGktY2hlY2tdPVwibW9kZWwgJiYgIWluZGV0ZXJtaW5hdGUgJiYgIWJveEljb25cIlxuICAgICAgICAgICAgICBbY2xhc3MuYmhpLWNpcmNsZV09XCJpbmRldGVybWluYXRlICYmICFib3hJY29uXCI+PC9pPlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwibGFiZWxcIj57eyBsYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NoZWNrYm94RWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGluZGV0ZXJtaW5hdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgbGF5b3V0T3B0aW9uczogeyBpY29uU3R5bGU/OiBzdHJpbmcgfTsgLy8gVE9ETyAtIGF2b2lkIGNvbmZpZ3MgbGlrZSB0aGlzXG5cbiAgQE91dHB1dCgpXG4gIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBib3hJY29uOiBib29sZWFuID0gdHJ1ZTtcbiAgbW9kZWw7XG5cbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGF5b3V0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIExBWU9VVF9ERUZBVUxUUywgdGhpcy5sYXlvdXRPcHRpb25zKTtcbiAgICB0aGlzLmJveEljb24gPSB0aGlzLmxheW91dE9wdGlvbnMuaWNvblN0eWxlID09PSAnYm94JztcbiAgfVxuXG4gIHNlbGVjdChldmVudDogRXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm1vZGVsID0gIXRoaXMubW9kZWw7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5tb2RlbCk7XG4gICAgICB0aGlzLm9uU2VsZWN0LmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCwgdmFsdWU6IHRoaXMubW9kZWwgfSk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==