// NG2
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function NovoChipElement_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 3);
} }
function NovoChipElement_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 4);
    i0.ɵɵlistener("click", function NovoChipElement_i_4_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onRemove($event); });
    i0.ɵɵelementEnd();
} }
const _c0 = ["*"];
export class NovoChipElement {
    constructor() {
        this.disabled = false;
        this.select = new EventEmitter();
        this.remove = new EventEmitter();
        this.deselect = new EventEmitter();
    }
    set type(type) {
        this._type = type ? type.toLowerCase() : null;
    }
    onRemove(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.remove.emit(e);
        return false;
    }
    onSelect(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.select.emit(e);
        return false;
    }
    onDeselect(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.deselect.emit(e);
        return false;
    }
}
NovoChipElement.ɵfac = function NovoChipElement_Factory(t) { return new (t || NovoChipElement)(); };
NovoChipElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoChipElement, selectors: [["chip"], ["novo-chip"]], inputs: { type: "type", disabled: "disabled" }, outputs: { select: "select", remove: "remove", deselect: "deselect" }, ngContentSelectors: _c0, decls: 5, vars: 3, consts: [[3, "ngClass", "click", "mouseenter", "mouseleave"], ["class", "bhi-circle", 4, "ngIf"], ["class", "bhi-close", 3, "click", 4, "ngIf"], [1, "bhi-circle"], [1, "bhi-close", 3, "click"]], template: function NovoChipElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵlistener("click", function NovoChipElement_Template_span_click_0_listener($event) { return ctx.onSelect($event); })("mouseenter", function NovoChipElement_Template_span_mouseenter_0_listener($event) { return ctx.onSelect($event); })("mouseleave", function NovoChipElement_Template_span_mouseleave_0_listener($event) { return ctx.onDeselect($event); });
        i0.ɵɵtemplate(1, NovoChipElement_i_1_Template, 1, 0, "i", 1);
        i0.ɵɵelementStart(2, "span");
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, NovoChipElement_i_4_Template, 1, 0, "i", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx._type);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx._type);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.disabled);
    } }, directives: [i1.NgClass, i1.NgIf], styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}[_nghost-%COMP%]{background:#eee;border:1px solid transparent;border-radius:4px;flex-grow:inherit;justify-content:space-between;margin-bottom:5px;margin-right:5px;max-width:180px;padding:.3em .5em;transition:all .2s ease-in-out;width:auto}[_nghost-%COMP%], [_nghost-%COMP%]   span[_ngcontent-%COMP%]{align-items:center;display:flex}[_nghost-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:middle}[_nghost-%COMP%]   span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#4a89dc;cursor:pointer;display:block;max-width:115px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}[_nghost-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.8em;margin-right:.4rem}[_nghost-%COMP%]   i.bhi-close[_ngcontent-%COMP%]{color:#c8c8c8;cursor:pointer;margin-left:1rem}[_nghost-%COMP%]   i.bhi-close[_ngcontent-%COMP%]:hover{color:#959595}.selected[_nghost-%COMP%]{border:1px solid #4a89dc}[_nghost-%COMP%]   span.clientcontact[_ngcontent-%COMP%], [_nghost-%COMP%]   span.contact[_ngcontent-%COMP%]{color:#4a89dc}[_nghost-%COMP%]   span.clientcontact[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], [_nghost-%COMP%]   span.contact[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fa4}[_nghost-%COMP%]   span.clientcorporation[_ngcontent-%COMP%], [_nghost-%COMP%]   span.company[_ngcontent-%COMP%]{color:#4a89dc}[_nghost-%COMP%]   span.clientcorporation[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], [_nghost-%COMP%]   span.company[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#39d}[_nghost-%COMP%]   span.candidate[_ngcontent-%COMP%]{color:#4a89dc}[_nghost-%COMP%]   span.candidate[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#4b7}[_nghost-%COMP%]   span.job[_ngcontent-%COMP%], [_nghost-%COMP%]   span.joborder[_ngcontent-%COMP%]{color:#4a89dc}[_nghost-%COMP%]   span.job[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], [_nghost-%COMP%]   span.joborder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#b56}[_nghost-%COMP%]   span.placement[_ngcontent-%COMP%]{color:#4a89dc}[_nghost-%COMP%]   span.placement[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#0b344f}[_nghost-%COMP%]   span.opportunity[_ngcontent-%COMP%]{color:#4a89dc}[_nghost-%COMP%]   span.opportunity[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#625}[_nghost-%COMP%]   span.lead[_ngcontent-%COMP%]{color:#4a89dc}[_nghost-%COMP%]   span.lead[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#a69}[_nghost-%COMP%]   span.corporateuser[_ngcontent-%COMP%], [_nghost-%COMP%]   span.user[_ngcontent-%COMP%]{color:#4a89dc}[_nghost-%COMP%]   span.corporateuser[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], [_nghost-%COMP%]   span.user[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#4f5361}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoChipElement, [{
        type: Component,
        args: [{
                selector: 'chip,novo-chip',
                styleUrls: ['./Chip.scss'],
                template: `
    <span (click)="onSelect($event)" (mouseenter)="onSelect($event)" (mouseleave)="onDeselect($event)" [ngClass]="_type">
      <i *ngIf="_type" class="bhi-circle"></i>
      <span><ng-content></ng-content></span>
    </span>
    <i class="bhi-close" *ngIf="!disabled" (click)="onRemove($event)"></i>
  `,
            }]
    }], null, { type: [{
            type: Input
        }], disabled: [{
            type: Input
        }], select: [{
            type: Output
        }], remove: [{
            type: Output
        }], deselect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hpcC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NoaXBzL0NoaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7SUFPakUsdUJBQXdDOzs7O0lBRzFDLDRCQUFzRTtJQUEvQixzTEFBMEI7SUFBQyxpQkFBSTs7O0FBRzFFLE1BQU0sT0FBTyxlQUFlO0lBWDVCO1FBa0JFLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9DLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvQyxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7S0ErQmxEO0lBNUNDLElBQ0ksSUFBSSxDQUFDLElBQVk7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2hELENBQUM7SUFlRCxRQUFRLENBQUMsQ0FBQztRQUNSLElBQUksQ0FBQyxFQUFFO1lBQ0wsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELFFBQVEsQ0FBQyxDQUFDO1FBQ1IsSUFBSSxDQUFDLEVBQUU7WUFDTCxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsVUFBVSxDQUFDLENBQUM7UUFDVixJQUFJLENBQUMsRUFBRTtZQUNMLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OzhFQTVDVSxlQUFlO29EQUFmLGVBQWU7O1FBUHhCLCtCQUNFO1FBREksZ0dBQVMsb0JBQWdCLElBQUMsNkZBQWUsb0JBQWdCLElBQS9CLDZGQUErQyxzQkFBa0IsSUFBakU7UUFDOUIsNERBQW9DO1FBQ3BDLDRCQUFNO1FBQUEsa0JBQVk7UUFBYSxpQkFBTztRQUN4QyxpQkFBTztRQUNQLDREQUFrRTs7UUFKaUMsbUNBQWlCO1FBQy9HLGVBQWE7UUFBYixnQ0FBYTtRQUdHLGVBQWlCO1FBQWpCLG9DQUFpQjs7a0RBRzdCLGVBQWU7Y0FYM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7R0FNVDthQUNGO2dCQUdLLElBQUk7a0JBRFAsS0FBSztZQU1OLFFBQVE7a0JBRFAsS0FBSztZQUlOLE1BQU07a0JBREwsTUFBTTtZQUdQLE1BQU07a0JBREwsTUFBTTtZQUdQLFFBQVE7a0JBRFAsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcCxub3ZvLWNoaXAnLFxuICBzdHlsZVVybHM6IFsnLi9DaGlwLnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiAoY2xpY2spPVwib25TZWxlY3QoJGV2ZW50KVwiIChtb3VzZWVudGVyKT1cIm9uU2VsZWN0KCRldmVudClcIiAobW91c2VsZWF2ZSk9XCJvbkRlc2VsZWN0KCRldmVudClcIiBbbmdDbGFzc109XCJfdHlwZVwiPlxuICAgICAgPGkgKm5nSWY9XCJfdHlwZVwiIGNsYXNzPVwiYmhpLWNpcmNsZVwiPjwvaT5cbiAgICAgIDxzcGFuPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3NwYW4+XG4gICAgPC9zcGFuPlxuICAgIDxpIGNsYXNzPVwiYmhpLWNsb3NlXCIgKm5nSWY9XCIhZGlzYWJsZWRcIiAoY2xpY2spPVwib25SZW1vdmUoJGV2ZW50KVwiPjwvaT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NoaXBFbGVtZW50IHtcbiAgQElucHV0KClcbiAgc2V0IHR5cGUodHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGUgPyB0eXBlLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xuICB9XG5cbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHJlbW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBkZXNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZW50aXR5OiBzdHJpbmc7XG4gIF90eXBlOiBzdHJpbmc7XG5cbiAgb25SZW1vdmUoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZS5lbWl0KGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uU2VsZWN0KGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3QuZW1pdChlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkRlc2VsZWN0KGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGhpcy5kZXNlbGVjdC5lbWl0KGUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19