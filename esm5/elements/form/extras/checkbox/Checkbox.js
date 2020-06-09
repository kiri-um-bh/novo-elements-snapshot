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
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.label);
} }
// Value accessor for the component (supports ngModel)
var CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NovoCheckboxElement; }),
    multi: true,
};
var LAYOUT_DEFAULTS = { iconStyle: 'box' };
var NovoCheckboxElement = /** @class */ (function () {
    function NovoCheckboxElement(ref) {
        this.ref = ref;
        this.indeterminate = false;
        this.disabled = false;
        this.onSelect = new EventEmitter();
        this.boxIcon = true;
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    NovoCheckboxElement.prototype.ngOnInit = function () {
        this.layoutOptions = Object.assign({}, LAYOUT_DEFAULTS, this.layoutOptions);
        this.boxIcon = this.layoutOptions.iconStyle === 'box';
    };
    NovoCheckboxElement.prototype.select = function (event) {
        Helpers.swallowEvent(event);
        if (!this.disabled) {
            this.model = !this.model;
            this.onModelChange(this.model);
            this.onSelect.emit({ originalEvent: event, value: this.model });
        }
    };
    NovoCheckboxElement.prototype.writeValue = function (model) {
        this.model = model;
        this.ref.markForCheck();
    };
    NovoCheckboxElement.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    NovoCheckboxElement.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    NovoCheckboxElement.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
    };
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
    return NovoCheckboxElement;
}());
export { NovoCheckboxElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCheckboxElement, [{
        type: Component,
        args: [{
                selector: 'novo-checkbox',
                providers: [CHECKBOX_VALUE_ACCESSOR],
                template: "\n    <div class=\"check-box-group\" [class.checked]=\"model\" [class.disabled]=\"disabled\">\n        <input [name]=\"name\" type=\"checkbox\" [(ngModel)]=\"model\" [attr.id]=\"name\" [disabled]=\"disabled\">\n        <label [attr.for]=\"name\" (click)=\"select($event)\" [class.disabled]=\"disabled\">\n          <i [class.bhi-checkbox-empty]=\"!model && !indeterminate && boxIcon\"\n              [class.bhi-checkbox-filled]=\"model && !indeterminate && boxIcon\"\n              [class.bhi-checkbox-indeterminate]=\"indeterminate && boxIcon\"\n              [class.bhi-circle-o]=\"!model && !indeterminate && !boxIcon\"\n              [class.bhi-check]=\"model && !indeterminate && !boxIcon\"\n              [class.bhi-circle]=\"indeterminate && !boxIcon\"></i>\n          <span *ngIf=\"label\">{{ label }}</span>\n        </label>\n    </div>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9leHRyYXMvY2hlY2tib3gvQ2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxNQUFNO0FBQ04sT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7OztJQXdCMUMsNEJBQW9CO0lBQUEsWUFBVztJQUFBLGlCQUFPOzs7SUFBbEIsZUFBVztJQUFYLGtDQUFXOztBQXRCekMsc0RBQXNEO0FBQ3RELElBQU0sdUJBQXVCLEdBQUc7SUFDOUIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxtQkFBbUIsRUFBbkIsQ0FBbUIsQ0FBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFFRixJQUFNLGVBQWUsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUU3QztJQXVDRSw2QkFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFmMUMsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFFL0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUsxQixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakQsWUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixrQkFBYSxHQUFhLGNBQVEsQ0FBQyxDQUFDO1FBQ3BDLG1CQUFjLEdBQWEsY0FBUSxDQUFDLENBQUM7SUFFUyxDQUFDO0lBRS9DLHNDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUM7SUFDeEQsQ0FBQztJQUVELG9DQUFNLEdBQU4sVUFBTyxLQUFZO1FBQ2pCLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNqRTtJQUNILENBQUM7SUFFRCx3Q0FBVSxHQUFWLFVBQVcsS0FBVTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw4Q0FBZ0IsR0FBaEIsVUFBaUIsRUFBWTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsK0NBQWlCLEdBQWpCLFVBQWtCLEVBQVk7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDhDQUFnQixHQUFoQixVQUFpQixRQUFpQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDOzBGQXBEVSxtQkFBbUI7NERBQW5CLG1CQUFtQixzT0FoQm5CLENBQUMsdUJBQXVCLENBQUM7WUFFbEMsOEJBQ0k7WUFBQSxnQ0FDQTtZQURxQywySUFBbUI7WUFBeEQsaUJBQ0E7WUFBQSxnQ0FDRTtZQUR1QixxR0FBUyxrQkFBYyxJQUFDO1lBQy9DLG9CQUt1RDtZQUN2RCxzRUFBb0I7WUFDdEIsaUJBQVE7WUFDWixpQkFBTTs7WUFYdUIsb0NBQXVCLDBCQUFBO1lBQ3pDLGVBQWE7WUFBYiwrQkFBYSxzQkFBQSwwQkFBQTtZQUFxQyw4QkFBZ0I7WUFDdkIsZUFBMkI7WUFBM0Isd0NBQTJCO1lBQXRFLCtCQUFpQjtZQUNuQixlQUFnRTtZQUFoRSxxRkFBZ0UsdUVBQUEsZ0VBQUEsa0VBQUEsOERBQUEsaURBQUE7WUFNN0QsZUFBYTtZQUFiLGdDQUFhOzs4QkE1QjdCO0NBc0ZDLEFBdkVELElBdUVDO1NBckRZLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBbEIvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUNwQyxRQUFRLEVBQUUsbzFCQWFUO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUdMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBDSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9DaGVja2JveEVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbmNvbnN0IExBWU9VVF9ERUZBVUxUUyA9IHsgaWNvblN0eWxlOiAnYm94JyB9O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNoZWNrYm94JyxcbiAgcHJvdmlkZXJzOiBbQ0hFQ0tCT1hfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjaGVjay1ib3gtZ3JvdXBcIiBbY2xhc3MuY2hlY2tlZF09XCJtb2RlbFwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICA8aW5wdXQgW25hbWVdPVwibmFtZVwiIHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwibW9kZWxcIiBbYXR0ci5pZF09XCJuYW1lXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwibmFtZVwiIChjbGljayk9XCJzZWxlY3QoJGV2ZW50KVwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICAgIDxpIFtjbGFzcy5iaGktY2hlY2tib3gtZW1wdHldPVwiIW1vZGVsICYmICFpbmRldGVybWluYXRlICYmIGJveEljb25cIlxuICAgICAgICAgICAgICBbY2xhc3MuYmhpLWNoZWNrYm94LWZpbGxlZF09XCJtb2RlbCAmJiAhaW5kZXRlcm1pbmF0ZSAmJiBib3hJY29uXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmJoaS1jaGVja2JveC1pbmRldGVybWluYXRlXT1cImluZGV0ZXJtaW5hdGUgJiYgYm94SWNvblwiXG4gICAgICAgICAgICAgIFtjbGFzcy5iaGktY2lyY2xlLW9dPVwiIW1vZGVsICYmICFpbmRldGVybWluYXRlICYmICFib3hJY29uXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmJoaS1jaGVja109XCJtb2RlbCAmJiAhaW5kZXRlcm1pbmF0ZSAmJiAhYm94SWNvblwiXG4gICAgICAgICAgICAgIFtjbGFzcy5iaGktY2lyY2xlXT1cImluZGV0ZXJtaW5hdGUgJiYgIWJveEljb25cIj48L2k+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJsYWJlbFwiPnt7IGxhYmVsIH19PC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2hlY2tib3hFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgaW5kZXRlcm1pbmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBsYXlvdXRPcHRpb25zOiB7IGljb25TdHlsZT86IHN0cmluZyB9OyAvLyBUT0RPIC0gYXZvaWQgY29uZmlncyBsaWtlIHRoaXNcblxuICBAT3V0cHV0KClcbiAgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGJveEljb246IGJvb2xlYW4gPSB0cnVlO1xuICBtb2RlbDtcblxuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sYXlvdXRPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgTEFZT1VUX0RFRkFVTFRTLCB0aGlzLmxheW91dE9wdGlvbnMpO1xuICAgIHRoaXMuYm94SWNvbiA9IHRoaXMubGF5b3V0T3B0aW9ucy5pY29uU3R5bGUgPT09ICdib3gnO1xuICB9XG5cbiAgc2VsZWN0KGV2ZW50OiBFdmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubW9kZWwgPSAhdGhpcy5tb2RlbDtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLm1vZGVsKTtcbiAgICAgIHRoaXMub25TZWxlY3QuZW1pdCh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCB2YWx1ZTogdGhpcy5tb2RlbCB9KTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxufVxuIl19