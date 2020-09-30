/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, forwardRef, Input, Output, ChangeDetectorRef, EventEmitter } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9leHRyYXMvY2hlY2tib3gvQ2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFtQyxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkksT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztNQUc5Qyx1QkFBdUIsR0FBRztJQUM5QixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNaOztNQUVLLGVBQWUsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUU7QUFvQjVDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFxQjlCLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBZjFDLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBRS9CLGFBQVEsR0FBWSxLQUFLLENBQUM7O1FBSzFCLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVqRCxZQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGtCQUFhOzs7UUFBYSxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQUM7UUFDbkMsbUJBQWM7OztRQUFhLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBQztJQUVTLENBQUM7Ozs7SUFFOUMsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQztJQUN4RCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFZO1FBQ2pCLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNqRTtJQUNILENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQVk7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsUUFBaUI7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7O1lBdEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7Z0JBQ3BDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztHQWFUO2FBQ0Y7Ozs7WUEvQitFLGlCQUFpQjs7O21CQWlDOUYsS0FBSztvQkFFTCxLQUFLOzRCQUVMLEtBQUs7dUJBRUwsS0FBSzs0QkFFTCxLQUFLO3VCQUdMLE1BQU07Ozs7SUFYUCxtQ0FDYTs7SUFDYixvQ0FDYzs7SUFDZCw0Q0FDK0I7O0lBQy9CLHVDQUMwQjs7SUFDMUIsNENBQ3NDOztJQUV0Qyx1Q0FDaUQ7O0lBRWpELHNDQUF3Qjs7SUFDeEIsb0NBQU07O0lBRU4sNENBQW1DOztJQUNuQyw2Q0FBb0M7Ozs7O0lBRXhCLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBDSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9DaGVja2JveEVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbmNvbnN0IExBWU9VVF9ERUZBVUxUUyA9IHsgaWNvblN0eWxlOiAnYm94JyB9O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNoZWNrYm94JyxcbiAgcHJvdmlkZXJzOiBbQ0hFQ0tCT1hfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjaGVjay1ib3gtZ3JvdXBcIiBbY2xhc3MuY2hlY2tlZF09XCJtb2RlbFwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICA8aW5wdXQgW25hbWVdPVwibmFtZVwiIHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwibW9kZWxcIiBbYXR0ci5pZF09XCJuYW1lXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwibmFtZVwiIChjbGljayk9XCJzZWxlY3QoJGV2ZW50KVwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICAgIDxpIFtjbGFzcy5iaGktY2hlY2tib3gtZW1wdHldPVwiIW1vZGVsICYmICFpbmRldGVybWluYXRlICYmIGJveEljb25cIlxuICAgICAgICAgICAgICBbY2xhc3MuYmhpLWNoZWNrYm94LWZpbGxlZF09XCJtb2RlbCAmJiAhaW5kZXRlcm1pbmF0ZSAmJiBib3hJY29uXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmJoaS1jaGVja2JveC1pbmRldGVybWluYXRlXT1cImluZGV0ZXJtaW5hdGUgJiYgYm94SWNvblwiXG4gICAgICAgICAgICAgIFtjbGFzcy5iaGktY2lyY2xlLW9dPVwiIW1vZGVsICYmICFpbmRldGVybWluYXRlICYmICFib3hJY29uXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmJoaS1jaGVja109XCJtb2RlbCAmJiAhaW5kZXRlcm1pbmF0ZSAmJiAhYm94SWNvblwiXG4gICAgICAgICAgICAgIFtjbGFzcy5iaGktY2lyY2xlXT1cImluZGV0ZXJtaW5hdGUgJiYgIWJveEljb25cIj48L2k+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJsYWJlbFwiPnt7IGxhYmVsIH19PC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2hlY2tib3hFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgaW5kZXRlcm1pbmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBsYXlvdXRPcHRpb25zOiB7IGljb25TdHlsZT86IHN0cmluZyB9OyAvLyBUT0RPIC0gYXZvaWQgY29uZmlncyBsaWtlIHRoaXNcblxuICBAT3V0cHV0KClcbiAgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGJveEljb246IGJvb2xlYW4gPSB0cnVlO1xuICBtb2RlbDtcblxuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sYXlvdXRPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgTEFZT1VUX0RFRkFVTFRTLCB0aGlzLmxheW91dE9wdGlvbnMpO1xuICAgIHRoaXMuYm94SWNvbiA9IHRoaXMubGF5b3V0T3B0aW9ucy5pY29uU3R5bGUgPT09ICdib3gnO1xuICB9XG5cbiAgc2VsZWN0KGV2ZW50OiBFdmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubW9kZWwgPSAhdGhpcy5tb2RlbDtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLm1vZGVsKTtcbiAgICAgIHRoaXMub25TZWxlY3QuZW1pdCh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCB2YWx1ZTogdGhpcy5tb2RlbCB9KTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxufVxuIl19