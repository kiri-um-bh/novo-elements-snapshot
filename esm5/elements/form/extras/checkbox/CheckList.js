// NG2
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { Helpers } from '../../../../utils/Helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
var _c0 = function (a0) { return { checked: a0 }; };
var _c1 = function (a0, a1) { return { "bhi-checkbox-empty": a0, "bhi-checkbox-filled": a1 }; };
function NovoCheckListElement_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "input", 2);
    i0.ɵɵlistener("change", function NovoCheckListElement_div_0_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r4); var option_r1 = ctx.$implicit; var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.select($event, option_r1); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 3);
    i0.ɵɵlistener("click", function NovoCheckListElement_div_0_Template_label_click_2_listener($event) { i0.ɵɵrestoreView(_r4); var option_r1 = ctx.$implicit; var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.select($event, option_r1); });
    i0.ɵɵelement(3, "i", 4);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r1 = ctx.$implicit;
    var i_r2 = ctx.index;
    var ctx_r0 = i0.ɵɵnextContext();
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
var CHECKLIST_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NovoCheckListElement; }),
    multi: true,
};
var NovoCheckListElement = /** @class */ (function () {
    function NovoCheckListElement() {
        this.onSelect = new EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    NovoCheckListElement.prototype.ngOnInit = function () {
        this.setModel();
        this.setupOptions();
    };
    NovoCheckListElement.prototype.select = function (event, item) {
        Helpers.swallowEvent(event);
        if (!this.disabled) {
            item.checked = !item.checked;
            this.model = this._options.filter(function (checkBox) { return checkBox.checked; }).map(function (x) { return x.value; });
            this.onModelChange(this.model.length > 0 ? this.model : '');
            this.onSelect.emit({ selected: this.model });
        }
    };
    NovoCheckListElement.prototype.setupOptions = function () {
        var _this = this;
        this.options = this.options || [];
        this._options = [];
        if (this.options.length && !this.options[0].value) {
            this.options.forEach(function (option) {
                var formattedOption = {
                    value: option,
                    label: option,
                    checked: _this.model && _this.model.length && _this.model.indexOf(option.value) !== -1,
                };
                _this._options.push(formattedOption);
            });
        }
        else {
            this.options.forEach(function (option) {
                var formattedOption = option;
                formattedOption.checked = _this.model && _this.model.length && _this.model.indexOf(option.value) !== -1;
                _this._options.push(formattedOption);
            });
        }
    };
    NovoCheckListElement.prototype.setModel = function () {
        var checkedOptions = this.options.filter(function (checkBox) { return checkBox.checked; }).map(function (x) { return x.value; });
        this.writeValue(checkedOptions);
    };
    NovoCheckListElement.prototype.writeValue = function (model) {
        this.model = model || [];
        if (model) {
            this.setupOptions();
        }
    };
    NovoCheckListElement.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    NovoCheckListElement.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    NovoCheckListElement.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
    };
    NovoCheckListElement.ɵfac = function NovoCheckListElement_Factory(t) { return new (t || NovoCheckListElement)(); };
    NovoCheckListElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCheckListElement, selectors: [["novo-check-list"]], inputs: { name: "name", options: "options", disabled: "disabled" }, outputs: { onSelect: "onSelect" }, features: [i0.ɵɵProvidersFeature([CHECKLIST_VALUE_ACCESSOR])], decls: 1, vars: 1, consts: [["class", "check-box-group", 3, "ngClass", "disabled", 4, "ngFor", "ngForOf"], [1, "check-box-group", 3, "ngClass"], ["type", "checkbox", 3, "name", "ngModel", "value", "disabled", "change"], [3, "click"], [3, "ngClass"]], template: function NovoCheckListElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NovoCheckListElement_div_0_Template, 6, 17, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx._options);
        } }, directives: [i1.NgForOf, i1.NgClass, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return NovoCheckListElement;
}());
export { NovoCheckListElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCheckListElement, [{
        type: Component,
        args: [{
                selector: 'novo-check-list',
                providers: [CHECKLIST_VALUE_ACCESSOR],
                template: "\n    <div\n      class=\"check-box-group\"\n      *ngFor=\"let option of _options; let i = index\"\n      [ngClass]=\"{ checked: option.checked }\"\n      [class.disabled]=\"disabled\"\n      [attr.data-automation-id]=\"option.label\"\n    >\n      <input\n        [name]=\"name\"\n        type=\"checkbox\"\n        [ngModel]=\"option.checked\"\n        [attr.id]=\"name + i\"\n        [value]=\"option.checked\"\n        (change)=\"select($event, option)\"\n        [disabled]=\"disabled\"\n      />\n      <label [attr.for]=\"name + i\" (click)=\"select($event, option)\">\n        <i [ngClass]=\"{ 'bhi-checkbox-empty': !option.checked, 'bhi-checkbox-filled': option.checked }\"></i>\n        <span>{{ option.label }}</span>\n      </label>\n    </div>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tMaXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vZXh0cmFzL2NoZWNrYm94L0NoZWNrTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE1BQU07QUFDTixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7O0lBYWhELDhCQU9FO0lBQUEsZ0NBU0E7SUFIRSx5T0FBaUM7SUFObkMsaUJBU0E7SUFBQSxnQ0FDRTtJQUQyQix1T0FBZ0M7SUFDM0QsdUJBQW9HO0lBQ3BHLDRCQUFNO0lBQUEsWUFBa0I7SUFBQSxpQkFBTztJQUNqQyxpQkFBUTtJQUNWLGlCQUFNOzs7OztJQWhCSiwyQ0FBMkI7SUFEM0Isd0VBQXVDO0lBRXZDLHFEQUF3QztJQUd0QyxlQUFhO0lBQWIsa0NBQWEsOEJBQUEsNEJBQUEsNkJBQUE7SUFHYix3Q0FBb0I7SUFLZixlQUFxQjtJQUFyQix5Q0FBcUI7SUFDdkIsZUFBNEY7SUFBNUYsNEZBQTRGO0lBQ3pGLGVBQWtCO0lBQWxCLHFDQUFrQjs7QUE3QmhDLHNEQUFzRDtBQUN0RCxJQUFNLHdCQUF3QixHQUFHO0lBQy9CLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsb0JBQW9CLEVBQXBCLENBQW9CLENBQUM7SUFDbkQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBRUY7SUFBQTtRQW1DRSxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFJakQsa0JBQWEsR0FBYSxjQUFPLENBQUMsQ0FBQztRQUNuQyxtQkFBYyxH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UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELCtDQUFnQixHQUFoQixVQUFpQixFQUFZO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnREFBaUIsR0FBakIsVUFBa0IsRUFBWTtRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsK0NBQWdCLEdBQWhCLFVBQWlCLFFBQWlCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7NEZBekVVLG9CQUFvQjs2REFBcEIsb0JBQW9CLDRLQXpCcEIsQ0FBQyx3QkFBd0IsQ0FBQztZQUVuQyxzRUFPRTs7WUFMQSxzQ0FBOEM7OytCQW5CcEQ7Q0FrSEMsQUFyR0QsSUFxR0M7U0ExRVksb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0EzQmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsUUFBUSxFQUFFLDJ2QkFzQlQ7YUFDRjs7a0JBRUUsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0hFQ0tMSVNUX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0NoZWNrTGlzdEVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2hlY2stbGlzdCcsXG4gIHByb3ZpZGVyczogW0NIRUNLTElTVF9WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJjaGVjay1ib3gtZ3JvdXBcIlxuICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBfb3B0aW9uczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICBbbmdDbGFzc109XCJ7IGNoZWNrZWQ6IG9wdGlvbi5jaGVja2VkIH1cIlxuICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJvcHRpb24ubGFiZWxcIlxuICAgID5cbiAgICAgIDxpbnB1dFxuICAgICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgW25nTW9kZWxdPVwib3B0aW9uLmNoZWNrZWRcIlxuICAgICAgICBbYXR0ci5pZF09XCJuYW1lICsgaVwiXG4gICAgICAgIFt2YWx1ZV09XCJvcHRpb24uY2hlY2tlZFwiXG4gICAgICAgIChjaGFuZ2UpPVwic2VsZWN0KCRldmVudCwgb3B0aW9uKVwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAvPlxuICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJuYW1lICsgaVwiIChjbGljayk9XCJzZWxlY3QoJGV2ZW50LCBvcHRpb24pXCI+XG4gICAgICAgIDxpIFtuZ0NsYXNzXT1cInsgJ2JoaS1jaGVja2JveC1lbXB0eSc6ICFvcHRpb24uY2hlY2tlZCwgJ2JoaS1jaGVja2JveC1maWxsZWQnOiBvcHRpb24uY2hlY2tlZCB9XCI+PC9pPlxuICAgICAgICA8c3Bhbj57eyBvcHRpb24ubGFiZWwgfX08L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2hlY2tMaXN0RWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG9wdGlvbnM6IEFycmF5PGFueT47XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBAT3V0cHV0KClcbiAgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIF9vcHRpb25zOiBBcnJheTxhbnk+O1xuICBtb2RlbDogYW55O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldE1vZGVsKCk7XG4gICAgdGhpcy5zZXR1cE9wdGlvbnMoKTtcbiAgfVxuXG4gIHNlbGVjdChldmVudCwgaXRlbSkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XG4gICAgICB0aGlzLm1vZGVsID0gdGhpcy5fb3B0aW9ucy5maWx0ZXIoKGNoZWNrQm94KSA9PiBjaGVja0JveC5jaGVja2VkKS5tYXAoKHgpID0+IHgudmFsdWUpO1xuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMubW9kZWwubGVuZ3RoID4gMCA/IHRoaXMubW9kZWwgOiAnJyk7XG4gICAgICB0aGlzLm9uU2VsZWN0LmVtaXQoeyBzZWxlY3RlZDogdGhpcy5tb2RlbCB9KTtcbiAgICB9XG4gIH1cblxuICBzZXR1cE9wdGlvbnMoKSB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IFtdO1xuICAgIHRoaXMuX29wdGlvbnMgPSBbXTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmxlbmd0aCAmJiAhdGhpcy5vcHRpb25zWzBdLnZhbHVlKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZE9wdGlvbiA9IHtcbiAgICAgICAgICB2YWx1ZTogb3B0aW9uLFxuICAgICAgICAgIGxhYmVsOiBvcHRpb24sXG4gICAgICAgICAgY2hlY2tlZDogdGhpcy5tb2RlbCAmJiB0aGlzLm1vZGVsLmxlbmd0aCAmJiB0aGlzLm1vZGVsLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPT0gLTEsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX29wdGlvbnMucHVzaChmb3JtYXR0ZWRPcHRpb24pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkT3B0aW9uID0gb3B0aW9uO1xuICAgICAgICBmb3JtYXR0ZWRPcHRpb24uY2hlY2tlZCA9IHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5sZW5ndGggJiYgdGhpcy5tb2RlbC5pbmRleE9mKG9wdGlvbi52YWx1ZSkgIT09IC0xO1xuICAgICAgICB0aGlzLl9vcHRpb25zLnB1c2goZm9ybWF0dGVkT3B0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNldE1vZGVsKCk6IHZvaWQge1xuICAgIGNvbnN0IGNoZWNrZWRPcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcigoY2hlY2tCb3gpID0+IGNoZWNrQm94LmNoZWNrZWQpLm1hcCgoeCkgPT4geC52YWx1ZSk7XG4gICAgdGhpcy53cml0ZVZhbHVlKGNoZWNrZWRPcHRpb25zKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbCB8fCBbXTtcbiAgICBpZiAobW9kZWwpIHtcbiAgICAgIHRoaXMuc2V0dXBPcHRpb25zKCk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==