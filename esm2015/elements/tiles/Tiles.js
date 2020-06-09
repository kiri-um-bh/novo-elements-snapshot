// NG2
import { Component, Input, Output, EventEmitter, forwardRef, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { Helpers } from '../../utils/Helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0, a1) { return { active: a0, disabled: a1 }; };
function NovoTilesElement_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵlistener("click", function NovoTilesElement_div_1_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r4); const option_r1 = ctx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.select($event, option_r1); });
    i0.ɵɵelementStart(1, "input", 3);
    i0.ɵɵlistener("change", function NovoTilesElement_div_1_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r4); const option_r1 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.select($event, option_r1); })("focus", function NovoTilesElement_div_1_Template_input_focus_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.setFocus(true); })("blur", function NovoTilesElement_div_1_Template_input_blur_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.setFocus(false); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(9, _c0, option_r1.checked, option_r1.disabled));
    i0.ɵɵattribute("data-automation-id", option_r1.label || option_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", ctx_r0.name)("value", option_r1.checked || option_r1.value || option_r1)("disabled", ctx_r0.disabled);
    i0.ɵɵattribute("id", ctx_r0.name + i_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("for", ctx_r0.name + i_r2)("data-automation-id", option_r1.label || option_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r1.label || option_r1, " ");
} }
// Value accessor for the component (supports ngModel)
const TILES_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoTilesElement),
    multi: true,
};
export class NovoTilesElement {
    constructor(element, ref) {
        this.element = element;
        this.ref = ref;
        this.name = new Date().getTime().toString();
        this.disabled = false;
        this.onChange = new EventEmitter();
        this.onSelectedOptionClick = new EventEmitter();
        this.onDisabledOptionClick = new EventEmitter();
        this._options = [];
        this.activeTile = null;
        this.focused = false;
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    setFocus(focus) {
        this.focused = focus;
    }
    ngAfterContentInit() {
        this.name = this.name || '';
        this.setupOptions();
    }
    ngOnChanges(change) {
        if (change['options'] && change['options'].currentValue && !change['options'].firstChange) {
            this.name = this.name || '';
            this._options = [];
            this.setupOptions();
        }
    }
    setupOptions() {
        if (this.options && this.options.length && (this.options[0].value === undefined || this.options[0].value === null)) {
            this._options = this.options.map((x) => {
                const item = { value: x, label: x, checked: this.model === x };
                if (item.checked) {
                    this.setTile(item);
                }
                return item;
            });
        }
        else {
            this._options = this.options.map((x) => {
                x.checked = this.model === x.value || (this.model && this.model.id === x.value);
                if (x.checked) {
                    this.setTile(x);
                }
                return x;
            });
        }
        this.ref.markForCheck();
    }
    select(event, item) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        if (!item.disabled) {
            if (item.checked) {
                this.onSelectedOptionClick.emit(item);
                return;
            }
            for (const option of this._options) {
                option.checked = false;
            }
            item.checked = !item.checked;
            this.onChange.emit(item.value);
            this.onModelChange(item.value);
            this.setTile(item);
            this.model = item.value;
        }
        else {
            this.onDisabledOptionClick.emit(item);
        }
        this.ref.markForCheck();
    }
    setTile(item) {
        if (item) {
            this.activeTile = item.value;
            this.ref.markForCheck();
        }
    }
    writeValue(model) {
        this.model = model;
        if (!Helpers.isBlank(model)) {
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
NovoTilesElement.ɵfac = function NovoTilesElement_Factory(t) { return new (t || NovoTilesElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
NovoTilesElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoTilesElement, selectors: [["novo-tiles"]], inputs: { name: "name", options: "options", required: "required", disabled: ["controlDisabled", "disabled"] }, outputs: { onChange: "onChange", onSelectedOptionClick: "onSelectedOptionClick", onDisabledOptionClick: "onDisabledOptionClick" }, features: [i0.ɵɵProvidersFeature([TILES_VALUE_ACCESSOR]), i0.ɵɵNgOnChangesFeature], decls: 2, vars: 5, consts: [[1, "tile-container"], ["class", "tile", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "tile", 3, "ngClass", "click"], ["type", "radio", 1, "tiles-input", 3, "name", "value", "disabled", "change", "focus", "blur"]], template: function NovoTilesElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, NovoTilesElement_div_1_Template, 4, 12, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("active", ctx.focused)("disabled", ctx.disabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx._options);
    } }, directives: [i1.NgForOf, i1.NgClass], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTilesElement, [{
        type: Component,
        args: [{
                selector: 'novo-tiles',
                providers: [TILES_VALUE_ACCESSOR],
                template: `
    <div class="tile-container" [class.active]="focused" [class.disabled]="disabled">
      <div
        class="tile"
        *ngFor="let option of _options; let i = index"
        [ngClass]="{ active: option.checked, disabled: option.disabled }"
        (click)="select($event, option)"
        [attr.data-automation-id]="option.label || option"
      >
        <input
          class="tiles-input"
          [name]="name"
          type="radio"
          [value]="option.checked || option.value || option"
          [attr.id]="name + i"
          (change)="select($event, option)"
          (focus)="setFocus(true)"
          (blur)="setFocus(false)"
          [disabled]="disabled"
        />
        <label [attr.for]="name + i" [attr.data-automation-id]="option.label || option">
          {{ option.label || option }}
        </label>
      </div>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { name: [{
            type: Input
        }], options: [{
            type: Input
        }], required: [{
            type: Input
        }], disabled: [{
            type: Input,
            args: ['controlDisabled']
        }], onChange: [{
            type: Output
        }], onSelectedOptionClick: [{
            type: Output
        }], onDisabledOptionClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlsZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGlsZXMvVGlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLFVBQVUsRUFHVixpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxNQUFNO0FBQ04sT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7SUFjeEMsOEJBT0U7SUFIQSxxT0FBZ0M7SUFHaEMsZ0NBV0E7SUFMRSx5T0FBaUMsK0pBQ2YsSUFBSSxLQURXLDZKQUVoQixLQUFLLEtBRlc7SUFObkMsaUJBV0E7SUFBQSw2QkFDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBUTtJQUNWLGlCQUFNOzs7OztJQWxCSiwyRkFBaUU7SUFFakUsa0VBQWtEO0lBSWhELGVBQWE7SUFBYixrQ0FBYSw0REFBQSw2QkFBQTtJQUdiLHdDQUFvQjtJQU1mLGVBQXFCO0lBQXJCLHlDQUFxQixvREFBQTtJQUMxQixlQUNGO0lBREUsNkRBQ0Y7O0FBaENSLHNEQUFzRDtBQUN0RCxNQUFNLG9CQUFvQixHQUFHO0lBQzNCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFpQ0YsTUFBTSxPQUFPLGdCQUFnQjtJQXdCM0IsWUFBb0IsT0FBbUIsRUFBVSxHQUFzQjtRQUFuRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUF0QnZFLFNBQUksR0FBVyxJQUFJLElBQUksRUFB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O1NBQ3JCO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQVk7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQVk7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWlCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7O2dGQW5IVSxnQkFBZ0I7cURBQWhCLGdCQUFnQixrVEE3QmhCLENBQUMsb0JBQW9CLENBQUM7UUFFL0IsOEJBQ0U7UUFBQSxrRUFPRTtRQWVKLGlCQUFNOztRQXZCc0IscUNBQXdCLDBCQUFBO1FBR2hELGVBQThDO1FBQTlDLHNDQUE4Qzs7a0RBd0J6QyxnQkFBZ0I7Y0EvQjVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBRUUsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzttQkFBQyxpQkFBaUI7O2tCQUV2QixNQUFNOztrQkFFTixNQUFNOztrQkFFTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgRWxlbWVudFJlZixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgVElMRVNfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvVGlsZXNFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRpbGVzJyxcbiAgcHJvdmlkZXJzOiBbVElMRVNfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJ0aWxlLWNvbnRhaW5lclwiIFtjbGFzcy5hY3RpdmVdPVwiZm9jdXNlZFwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInRpbGVcIlxuICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIF9vcHRpb25zOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgW25nQ2xhc3NdPVwieyBhY3RpdmU6IG9wdGlvbi5jaGVja2VkLCBkaXNhYmxlZDogb3B0aW9uLmRpc2FibGVkIH1cIlxuICAgICAgICAoY2xpY2spPVwic2VsZWN0KCRldmVudCwgb3B0aW9uKVwiXG4gICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJvcHRpb24ubGFiZWwgfHwgb3B0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3M9XCJ0aWxlcy1pbnB1dFwiXG4gICAgICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uLmNoZWNrZWQgfHwgb3B0aW9uLnZhbHVlIHx8IG9wdGlvblwiXG4gICAgICAgICAgW2F0dHIuaWRdPVwibmFtZSArIGlcIlxuICAgICAgICAgIChjaGFuZ2UpPVwic2VsZWN0KCRldmVudCwgb3B0aW9uKVwiXG4gICAgICAgICAgKGZvY3VzKT1cInNldEZvY3VzKHRydWUpXCJcbiAgICAgICAgICAoYmx1cik9XCJzZXRGb2N1cyhmYWxzZSlcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwibmFtZSArIGlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwib3B0aW9uLmxhYmVsIHx8IG9wdGlvblwiPlxuICAgICAgICAgIHt7IG9wdGlvbi5sYWJlbCB8fCBvcHRpb24gfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RpbGVzRWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmcgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpO1xuICBASW5wdXQoKVxuICBvcHRpb25zOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHJlcXVpcmVkOiBib29sZWFuO1xuICBASW5wdXQoJ2NvbnRyb2xEaXNhYmxlZCcpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBvblNlbGVjdGVkT3B0aW9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25EaXNhYmxlZE9wdGlvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBfb3B0aW9uczogQXJyYXk8YW55PiA9IFtdO1xuICBwdWJsaWMgYWN0aXZlVGlsZTogYW55ID0gbnVsbDtcbiAgcHVibGljIGZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBtb2RlbDogYW55O1xuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBwdWJsaWMgc2V0Rm9jdXMoZm9jdXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzZWQgPSBmb2N1cztcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUgfHwgJyc7XG4gICAgdGhpcy5zZXR1cE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZTogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VbJ29wdGlvbnMnXSAmJiBjaGFuZ2VbJ29wdGlvbnMnXS5jdXJyZW50VmFsdWUgJiYgIWNoYW5nZVsnb3B0aW9ucyddLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUgfHwgJyc7XG4gICAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgICB0aGlzLnNldHVwT3B0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIHNldHVwT3B0aW9ucygpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5sZW5ndGggJiYgKHRoaXMub3B0aW9uc1swXS52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMub3B0aW9uc1swXS52YWx1ZSA9PT0gbnVsbCkpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLm9wdGlvbnMubWFwKCh4KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB7IHZhbHVlOiB4LCBsYWJlbDogeCwgY2hlY2tlZDogdGhpcy5tb2RlbCA9PT0geCB9O1xuICAgICAgICBpZiAoaXRlbS5jaGVja2VkKSB7XG4gICAgICAgICAgdGhpcy5zZXRUaWxlKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLm9wdGlvbnMubWFwKCh4KSA9PiB7XG4gICAgICAgIHguY2hlY2tlZCA9IHRoaXMubW9kZWwgPT09IHgudmFsdWUgfHwgKHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5pZCA9PT0geC52YWx1ZSk7XG4gICAgICAgIGlmICh4LmNoZWNrZWQpIHtcbiAgICAgICAgICB0aGlzLnNldFRpbGUoeCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHg7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBzZWxlY3QoZXZlbnQsIGl0ZW0pIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoIWl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5vblNlbGVjdGVkT3B0aW9uQ2xpY2suZW1pdChpdGVtKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiB0aGlzLl9vcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoaXRlbS52YWx1ZSk7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UoaXRlbS52YWx1ZSk7XG4gICAgICB0aGlzLnNldFRpbGUoaXRlbSk7XG4gICAgICB0aGlzLm1vZGVsID0gaXRlbS52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkRpc2FibGVkT3B0aW9uQ2xpY2suZW1pdChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBzZXRUaWxlKGl0ZW0pIHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdGhpcy5hY3RpdmVUaWxlID0gaXRlbS52YWx1ZTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayhtb2RlbCkpIHtcbiAgICAgIHRoaXMuc2V0dXBPcHRpb25zKCk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==