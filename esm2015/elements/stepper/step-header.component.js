import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { NovoStepLabel } from './step-label.component';
import { CdkStepHeader } from '@angular/cdk/stepper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
function NovoStepHeader_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "novo-icon", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("theme", ctx_r0.theme);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.icon);
} }
function NovoStepHeader_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.index + 1);
} }
function NovoStepHeader_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 7);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2._templateLabel().template);
} }
function NovoStepHeader_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.label);
} }
export class NovoStepHeader extends CdkStepHeader {
    constructor(_focusMonitor, _element) {
        super(_element);
        this._focusMonitor = _focusMonitor;
        this._element = _element;
        _focusMonitor.monitor(_element.nativeElement, true);
    }
    /** Index of the given step. */
    get index() {
        return this._index;
    }
    set index(value) {
        this._index = coerceNumberProperty(value);
    }
    /** Whether the given step is selected. */
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = coerceBooleanProperty(value);
    }
    /** Whether the given step label is active. */
    get active() {
        return this._active;
    }
    set active(value) {
        this._active = coerceBooleanProperty(value);
    }
    /** Whether the given step label is active. */
    get touched() {
        return this.selected || this.state === 'edit' || this.state === 'done';
    }
    /** Whether the given step is optional. */
    get optional() {
        return this._optional;
    }
    set optional(value) {
        this._optional = coerceBooleanProperty(value);
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._element.nativeElement);
    }
    /** Returns string label of given step if it is a text label. */
    _stringLabel() {
        return this.label instanceof NovoStepLabel ? null : this.label;
    }
    /** Returns NovoStepLabel if the label of given step is a template label. */
    _templateLabel() {
        return this.label instanceof NovoStepLabel ? this.label : null;
    }
    /** Returns the host HTML element. */
    _getHostElement() {
        return this._element.nativeElement;
    }
}
NovoStepHeader.ɵfac = function NovoStepHeader_Factory(t) { return new (t || NovoStepHeader)(i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i0.ElementRef)); };
NovoStepHeader.ɵcmp = i0.ɵɵdefineComponent({ type: NovoStepHeader, selectors: [["novo-step-header"]], hostAttrs: ["role", "tab", 1, "novo-step-header"], inputs: { theme: "theme", color: "color", icon: "icon", state: "state", label: "label", iconOverrides: "iconOverrides", index: "index", selected: "selected", active: "active", optional: "optional" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 13, consts: [[4, "ngIf"], [1, "novo-step-label"], [3, "ngTemplateOutlet", 4, "ngIf"], ["class", "novo-step-text-label", 4, "ngIf"], [3, "state"], ["size", "small", "raised", "true", 3, "theme"], [1, "novo-step-number"], [3, "ngTemplateOutlet"], [1, "novo-step-text-label"]], template: function NovoStepHeader_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtemplate(1, NovoStepHeader_ng_container_1_Template, 3, 2, "ng-container", 0);
        i0.ɵɵtemplate(2, NovoStepHeader_ng_container_2_Template, 3, 1, "ng-container", 0);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵtemplate(4, NovoStepHeader_ng_container_4_Template, 1, 1, "ng-container", 2);
        i0.ɵɵtemplate(5, NovoStepHeader_div_5_Template, 2, 1, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(6, "novo-step-status", 4);
    } if (rf & 2) {
        i0.ɵɵclassProp("novo-step-icon", ctx.touched)("novo-step-icon-not-touched", !ctx.touched);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.icon);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.icon);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("novo-step-label-active", ctx.active)("novo-step-label-selected", ctx.selected);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx._templateLabel());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx._stringLabel());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("state", ctx.state);
    } }, styles: ["@-webkit-keyframes rotate{0%{transform:rotateZ(0)}75%{transform:rotateZ(200deg)}100%{transform:rotateZ(180deg)}}@keyframes rotate{0%{transform:rotateZ(0)}75%{transform:rotateZ(200deg)}100%{transform:rotateZ(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotateZ(45deg)}75%{transform:rotateZ(100deg)}100%{transform:rotateZ(90deg)}}@keyframes half-rotate{0%{transform:rotateZ(45deg)}75%{transform:rotateZ(100deg)}100%{transform:rotateZ(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotateZ(90deg)}100%{transform:rotateZ(0)}}@keyframes rotateBack{0%{transform:rotateZ(90deg)}100%{transform:rotateZ(0)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}100%{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}100%{opacity:1;transform:translateX(0)}}.novo-step-header[_ngcontent-%COMP%]{overflow:visible;outline:0;cursor:pointer;position:relative}.novo-step-optional[_ngcontent-%COMP%]{font-size:12px}.novo-step-icon[_ngcontent-%COMP%], .novo-step-icon-not-touched[_ngcontent-%COMP%]{border-radius:50%;height:24px;width:24px;align-items:center;justify-content:center;display:flex}.novo-step-icon[_ngcontent-%COMP%]   .novo-step-number[_ngcontent-%COMP%], .novo-step-icon-not-touched[_ngcontent-%COMP%]   .novo-step-number[_ngcontent-%COMP%]{font-size:1em;min-width:1.6em;height:1.6em;box-shadow:2px 2px 0 rgba(0,0,0,.2);display:flex;align-items:center;justify-content:center;border-radius:4px}.novo-step-icon[_ngcontent-%COMP%]   .novo-step-number[_ngcontent-%COMP%]{background:#4a89dc;color:#fff}.novo-step-icon-not-touched[_ngcontent-%COMP%]   .novo-step-number[_ngcontent-%COMP%]{background:#a9adbb;color:#fff}.novo-step-label[_ngcontent-%COMP%]{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;text-align:center;padding:4px 0}.novo-step-text-label[_ngcontent-%COMP%]{text-align:center;text-overflow:ellipsis;overflow:hidden}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoStepHeader, [{
        type: Component,
        args: [{
                selector: 'novo-step-header',
                templateUrl: 'step-header.component.html',
                styleUrls: ['step-header.component.scss'],
                host: {
                    class: 'novo-step-header',
                    role: 'tab',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.FocusMonitor }, { type: i0.ElementRef }]; }, { theme: [{
            type: Input
        }], color: [{
            type: Input
        }], icon: [{
            type: Input
        }], state: [{
            type: Input
        }], label: [{
            type: Input
        }], iconOverrides: [{
            type: Input
        }], index: [{
            type: Input
        }], selected: [{
            type: Input
        }], active: [{
            type: Input
        }], optional: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3N0ZXBwZXIvc3RlcC1oZWFkZXIuY29tcG9uZW50LnRzIiwiZWxlbWVudHMvc3RlcHBlci9zdGVwLWhlYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUEwQixNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0lDRm5ELDZCQUNFO0lBQUEsb0NBQXNEO0lBQUEsWUFBUTtJQUFBLGlCQUFZO0lBQzVFLDBCQUFlOzs7SUFEeUIsZUFBZTtJQUFmLG9DQUFlO0lBQUMsZUFBUTtJQUFSLGlDQUFROzs7SUFFaEUsNkJBQ0U7SUFBQSwrQkFBK0I7SUFBQSxZQUFhO0lBQUEsaUJBQU87SUFDckQsMEJBQWU7OztJQURrQixlQUFhO0lBQWIsc0NBQWE7OztJQU85QywyQkFDZTs7O0lBRHdCLG1FQUErQzs7O0lBR3RGLDhCQUF5RDtJQUFBLFlBQVM7SUFBQSxpQkFBTTs7O0lBQWYsZUFBUztJQUFULGtDQUFTOztBRENwRSxNQUFNLE9BQU8sY0FBZSxTQUFRLGFBQWE7SUFnRS9DLFlBQW9CLGFBQTJCLEVBQVUsUUFBb0I7UUFDM0UsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBREUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFZO1FBRTNFLGFBQWEsQ0FB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QUFLOztrQkFHTCxLQUFLOztrQkFJTCxLQUFLOztrQkFJTCxLQUFLOztrQkFJTCxLQUFLOztrQkFVTCxLQUFLOztrQkFVTCxLQUFLOztrQkFlTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5LCBjb2VyY2VOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b1N0ZXBMYWJlbCB9IGZyb20gJy4vc3RlcC1sYWJlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2RrU3RlcEhlYWRlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zdGVwcGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zdGVwLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3RlcC1oZWFkZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbm92by1zdGVwLWhlYWRlcicsXG4gICAgcm9sZTogJ3RhYicsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1N0ZXBIZWFkZXIgZXh0ZW5kcyBDZGtTdGVwSGVhZGVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgY29sb3I6IHN0cmluZztcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xuICAvKiogU3RhdGUgb2YgdGhlIGdpdmVuIHN0ZXAuICovXG4gIEBJbnB1dCgpXG4gIHN0YXRlOiBzdHJpbmc7XG5cbiAgLyoqIExhYmVsIG9mIHRoZSBnaXZlbiBzdGVwLiAqL1xuICBASW5wdXQoKVxuICBsYWJlbDogTm92b1N0ZXBMYWJlbCB8IHN0cmluZztcblxuICAvKiogT3ZlcnJpZGVzIGZvciB0aGUgaGVhZGVyIGljb25zLCBwYXNzZWQgaW4gdmlhIHRoZSBzdGVwcGVyLiAqL1xuICBASW5wdXQoKVxuICBpY29uT3ZlcnJpZGVzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPGFueT4gfTtcblxuICAvKiogSW5kZXggb2YgdGhlIGdpdmVuIHN0ZXAuICovXG4gIEBJbnB1dCgpXG4gIGdldCBpbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pbmRleDtcbiAgfVxuICBzZXQgaW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2luZGV4ID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2luZGV4OiBudW1iZXI7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGdpdmVuIHN0ZXAgaXMgc2VsZWN0ZWQuICovXG4gIEBJbnB1dCgpXG4gIGdldCBzZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gIH1cbiAgc2V0IHNlbGVjdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3NlbGVjdGVkOiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBnaXZlbiBzdGVwIGxhYmVsIGlzIGFjdGl2ZS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG4gIHNldCBhY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hY3RpdmUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgZ2l2ZW4gc3RlcCBsYWJlbCBpcyBhY3RpdmUuICovXG4gIGdldCB0b3VjaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkIHx8IHRoaXMuc3RhdGUgPT09ICdlZGl0JyB8fCB0aGlzLnN0YXRlID09PSAnZG9uZSc7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgZ2l2ZW4gc3RlcCBpcyBvcHRpb25hbC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG9wdGlvbmFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25hbDtcbiAgfVxuICBzZXQgb3B0aW9uYWwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9vcHRpb25hbCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfb3B0aW9uYWw6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihfZWxlbWVudCk7XG4gICAgX2ZvY3VzTW9uaXRvci5tb25pdG9yKF9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRydWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICAvKiogUmV0dXJucyBzdHJpbmcgbGFiZWwgb2YgZ2l2ZW4gc3RlcCBpZiBpdCBpcyBhIHRleHQgbGFiZWwuICovXG4gIF9zdHJpbmdMYWJlbCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbCBpbnN0YW5jZW9mIE5vdm9TdGVwTGFiZWwgPyBudWxsIDogdGhpcy5sYWJlbDtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIE5vdm9TdGVwTGFiZWwgaWYgdGhlIGxhYmVsIG9mIGdpdmVuIHN0ZXAgaXMgYSB0ZW1wbGF0ZSBsYWJlbC4gKi9cbiAgX3RlbXBsYXRlTGFiZWwoKTogTm92b1N0ZXBMYWJlbCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmxhYmVsIGluc3RhbmNlb2YgTm92b1N0ZXBMYWJlbCA/IHRoaXMubGFiZWwgOiBudWxsO1xuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGhvc3QgSFRNTCBlbGVtZW50LiAqL1xuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuIiwiPGRpdiBbY2xhc3Mubm92by1zdGVwLWljb25dPVwidG91Y2hlZFwiXG4gICAgIFtjbGFzcy5ub3ZvLXN0ZXAtaWNvbi1ub3QtdG91Y2hlZF09XCIhdG91Y2hlZFwiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiaWNvblwiPlxuICAgIDxub3ZvLWljb24gc2l6ZT1cInNtYWxsXCIgcmFpc2VkPVwidHJ1ZVwiIFt0aGVtZV09XCJ0aGVtZVwiPnt7aWNvbn19PC9ub3ZvLWljb24+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWljb25cIj5cbiAgICA8c3BhbiBjbGFzcz1cIm5vdm8tc3RlcC1udW1iZXJcIj57e2luZGV4ICsgMX19PC9zcGFuPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm5vdm8tc3RlcC1sYWJlbFwiXG4gICAgIFtjbGFzcy5ub3ZvLXN0ZXAtbGFiZWwtYWN0aXZlXT1cImFjdGl2ZVwiXG4gICAgIFtjbGFzcy5ub3ZvLXN0ZXAtbGFiZWwtc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIj5cbiAgPCEtLSBJZiB0aGVyZSBpcyBhIGxhYmVsIHRlbXBsYXRlLCB1c2UgaXQuIC0tPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiX3RlbXBsYXRlTGFiZWwoKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIl90ZW1wbGF0ZUxhYmVsKCkhLnRlbXBsYXRlXCI+XG4gIDwvbmctY29udGFpbmVyPlxuICA8IS0tIEl0IHRoZXJlIGlzIG5vIGxhYmVsIHRlbXBsYXRlLCBmYWxsIGJhY2sgdG8gdGhlIHRleHQgbGFiZWwuIC0tPlxuICA8ZGl2IGNsYXNzPVwibm92by1zdGVwLXRleHQtbGFiZWxcIiAqbmdJZj1cIl9zdHJpbmdMYWJlbCgpXCI+e3tsYWJlbH19PC9kaXY+XG48L2Rpdj5cbjxub3ZvLXN0ZXAtc3RhdHVzIFtzdGF0ZV09XCJzdGF0ZVwiPjwvbm92by1zdGVwLXN0YXR1cz5cbiJdfQ==