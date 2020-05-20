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
var CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NovoCheckboxElement; })),
    multi: true,
};
/** @type {?} */
var LAYOUT_DEFAULTS = { iconStyle: 'box' };
var NovoCheckboxElement = /** @class */ (function () {
    function NovoCheckboxElement(ref) {
        this.ref = ref;
        this.indeterminate = false;
        this.disabled = false;
        // TODO - avoid configs like this
        this.onSelect = new EventEmitter();
        this.boxIcon = true;
        this.onModelChange = (/**
         * @return {?}
         */
        function () { });
        this.onModelTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @return {?}
     */
    NovoCheckboxElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.layoutOptions = Object.assign({}, LAYOUT_DEFAULTS, this.layoutOptions);
        this.boxIcon = this.layoutOptions.iconStyle === 'box';
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoCheckboxElement.prototype.select = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        Helpers.swallowEvent(event);
        if (!this.disabled) {
            this.model = !this.model;
            this.onModelChange(this.model);
            this.onSelect.emit({ originalEvent: event, value: this.model });
        }
    };
    /**
     * @param {?} model
     * @return {?}
     */
    NovoCheckboxElement.prototype.writeValue = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        this.model = model;
        this.ref.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoCheckboxElement.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoCheckboxElement.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    NovoCheckboxElement.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.disabled = disabled;
    };
    NovoCheckboxElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-checkbox',
                    providers: [CHECKBOX_VALUE_ACCESSOR],
                    template: "\n    <div class=\"check-box-group\" [class.checked]=\"model\" [class.disabled]=\"disabled\">\n        <input [name]=\"name\" type=\"checkbox\" [(ngModel)]=\"model\" [attr.id]=\"name\" [disabled]=\"disabled\">\n        <label [attr.for]=\"name\" (click)=\"select($event)\" [class.disabled]=\"disabled\">\n          <i [class.bhi-checkbox-empty]=\"!model && !indeterminate && boxIcon\"\n              [class.bhi-checkbox-filled]=\"model && !indeterminate && boxIcon\"\n              [class.bhi-checkbox-indeterminate]=\"indeterminate && boxIcon\"\n              [class.bhi-circle-o]=\"!model && !indeterminate && !boxIcon\"\n              [class.bhi-check]=\"model && !indeterminate && !boxIcon\"\n              [class.bhi-circle]=\"indeterminate && !boxIcon\"></i>\n          <span *ngIf=\"label\">{{ label }}</span>\n        </label>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NovoCheckboxElement.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NovoCheckboxElement.propDecorators = {
        name: [{ type: Input }],
        label: [{ type: Input }],
        indeterminate: [{ type: Input }],
        disabled: [{ type: Input }],
        layoutOptions: [{ type: Input }],
        onSelect: [{ type: Output }]
    };
    return NovoCheckboxElement;
}());
export { NovoCheckboxElement };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9leHRyYXMvY2hlY2tib3gvQ2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUcsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztJQUc5Qyx1QkFBdUIsR0FBRztJQUM5QixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLEVBQUM7SUFDbEQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7SUFFSyxlQUFlLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFO0FBRTVDO0lBdUNFLDZCQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWYxQyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixhQUFRLEdBQVksS0FBSyxDQUFDOztRQUsxQixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakQsWUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixrQkFBYTs7O1FBQWEsY0FBUSxDQUFDLEVBQUM7UUFDcEMsbUJBQWM7OztRQUFhLGNBQVEsQ0FBQyxFQUFDO0lBRVMsQ0FBQzs7OztJQUUvQyxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFFRCxvQ0FBTTs7OztJQUFOLFVBQU8sS0FBWTtRQUNqQixPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDakU7SUFDSCxDQUFDOzs7OztJQUVELHdDQUFVOzs7O0lBQVYsVUFBVyxLQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCw4Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBWTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELCtDQUFpQjs7OztJQUFqQixVQUFrQixFQUFZO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsOENBQWdCOzs7O0lBQWhCLFVBQWlCLFFBQWlCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7O2dCQXRFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUNwQyxRQUFRLEVBQUUsbzFCQWFUO2lCQUNGOzs7O2dCQS9CUSxpQkFBaUI7Ozt1QkFpQ3ZCLEtBQUs7d0JBRUwsS0FBSztnQ0FFTCxLQUFLOzJCQUVMLEtBQUs7Z0NBRUwsS0FBSzsyQkFHTCxNQUFNOztJQXlDVCwwQkFBQztDQUFBLEFBdkVELElBdUVDO1NBckRZLG1CQUFtQjs7O0lBQzlCLG1DQUNhOztJQUNiLG9DQUNjOztJQUNkLDRDQUMrQjs7SUFDL0IsdUNBQzBCOztJQUMxQiw0Q0FDc0M7O0lBRXRDLHVDQUNpRDs7SUFFakQsc0NBQXdCOztJQUN4QixvQ0FBTTs7SUFFTiw0Q0FBb0M7O0lBQ3BDLDZDQUFxQzs7Ozs7SUFFekIsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0hFQ0tCT1hfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvQ2hlY2tib3hFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5jb25zdCBMQVlPVVRfREVGQVVMVFMgPSB7IGljb25TdHlsZTogJ2JveCcgfTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jaGVja2JveCcsXG4gIHByb3ZpZGVyczogW0NIRUNLQk9YX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2hlY2stYm94LWdyb3VwXCIgW2NsYXNzLmNoZWNrZWRdPVwibW9kZWxcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgPGlucHV0IFtuYW1lXT1cIm5hbWVcIiB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cIm1vZGVsXCIgW2F0dHIuaWRdPVwibmFtZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICA8bGFiZWwgW2F0dHIuZm9yXT1cIm5hbWVcIiAoY2xpY2spPVwic2VsZWN0KCRldmVudClcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgICA8aSBbY2xhc3MuYmhpLWNoZWNrYm94LWVtcHR5XT1cIiFtb2RlbCAmJiAhaW5kZXRlcm1pbmF0ZSAmJiBib3hJY29uXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmJoaS1jaGVja2JveC1maWxsZWRdPVwibW9kZWwgJiYgIWluZGV0ZXJtaW5hdGUgJiYgYm94SWNvblwiXG4gICAgICAgICAgICAgIFtjbGFzcy5iaGktY2hlY2tib3gtaW5kZXRlcm1pbmF0ZV09XCJpbmRldGVybWluYXRlICYmIGJveEljb25cIlxuICAgICAgICAgICAgICBbY2xhc3MuYmhpLWNpcmNsZS1vXT1cIiFtb2RlbCAmJiAhaW5kZXRlcm1pbmF0ZSAmJiAhYm94SWNvblwiXG4gICAgICAgICAgICAgIFtjbGFzcy5iaGktY2hlY2tdPVwibW9kZWwgJiYgIWluZGV0ZXJtaW5hdGUgJiYgIWJveEljb25cIlxuICAgICAgICAgICAgICBbY2xhc3MuYmhpLWNpcmNsZV09XCJpbmRldGVybWluYXRlICYmICFib3hJY29uXCI+PC9pPlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwibGFiZWxcIj57eyBsYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NoZWNrYm94RWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGluZGV0ZXJtaW5hdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgbGF5b3V0T3B0aW9uczogeyBpY29uU3R5bGU/OiBzdHJpbmcgfTsgLy8gVE9ETyAtIGF2b2lkIGNvbmZpZ3MgbGlrZSB0aGlzXG5cbiAgQE91dHB1dCgpXG4gIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBib3hJY29uOiBib29sZWFuID0gdHJ1ZTtcbiAgbW9kZWw7XG5cbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGF5b3V0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIExBWU9VVF9ERUZBVUxUUywgdGhpcy5sYXlvdXRPcHRpb25zKTtcbiAgICB0aGlzLmJveEljb24gPSB0aGlzLmxheW91dE9wdGlvbnMuaWNvblN0eWxlID09PSAnYm94JztcbiAgfVxuXG4gIHNlbGVjdChldmVudDogRXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm1vZGVsID0gIXRoaXMubW9kZWw7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5tb2RlbCk7XG4gICAgICB0aGlzLm9uU2VsZWN0LmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCwgdmFsdWU6IHRoaXMubW9kZWwgfSk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==