import { __extends } from "tslib";
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
    var ctx_r0 = i0.ɵɵnextContext();
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
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.index + 1);
} }
function NovoStepHeader_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 7);
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2._templateLabel().template);
} }
function NovoStepHeader_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.label);
} }
var NovoStepHeader = /** @class */ (function (_super) {
    __extends(NovoStepHeader, _super);
    function NovoStepHeader(_focusMonitor, _element) {
        var _this = _super.call(this, _element) || this;
        _this._focusMonitor = _focusMonitor;
        _this._element = _element;
        _focusMonitor.monitor(_element.nativeElement, true);
        return _this;
    }
    Object.defineProperty(NovoStepHeader.prototype, "index", {
        /** Index of the given step. */
        get: function () {
            return this._index;
        },
        set: function (value) {
            this._index = coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoStepHeader.prototype, "selected", {
        /** Whether the given step is selected. */
        get: function () {
            return this._selected;
        },
        set: function (value) {
            this._selected = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoStepHeader.prototype, "active", {
        /** Whether the given step label is active. */
        get: function () {
            return this._active;
        },
        set: function (value) {
            this._active = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoStepHeader.prototype, "touched", {
        /** Whether the given step label is active. */
        get: function () {
            return this.selected || this.state === 'edit' || this.state === 'done';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoStepHeader.prototype, "optional", {
        /** Whether the given step is optional. */
        get: function () {
            return this._optional;
        },
        set: function (value) {
            this._optional = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    NovoStepHeader.prototype.ngOnDestroy = function () {
        this._focusMonitor.stopMonitoring(this._element.nativeElement);
    };
    /** Returns string label of given step if it is a text label. */
    NovoStepHeader.prototype._stringLabel = function () {
        return this.label instanceof NovoStepLabel ? null : this.label;
    };
    /** Returns NovoStepLabel if the label of given step is a template label. */
    NovoStepHeader.prototype._templateLabel = function () {
        return this.label instanceof NovoStepLabel ? this.label : null;
    };
    /** Returns the host HTML element. */
    NovoStepHeader.prototype._getHostElement = function () {
        return this._element.nativeElement;
    };
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
    return NovoStepHeader;
}(CdkStepHeader));
export { NovoStepHeader };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3N0ZXBwZXIvc3RlcC1oZWFkZXIuY29tcG9uZW50LnRzIiwiZWxlbWVudHMvc3RlcHBlci9zdGVwLWhlYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBMEIsTUFBTSxlQUFlLENBQUM7QUFDOUcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztJQ0ZuRCw2QkFDRTtJQUFBLG9DQUFzRDtJQUFBLFlBQVE7SUFBQSxpQkFBWTtJQUM1RSwwQkFBZTs7O0lBRHlCLGVBQWU7SUFBZixvQ0FBZTtJQUFDLGVBQVE7SUFBUixpQ0FBUTs7O0lBRWhFLDZCQUNFO0lBQUEsK0JBQStCO0lBQUEsWUFBYTtJQUFBLGlCQUFPO0lBQ3JELDBCQUFlOzs7SUFEa0IsZUFBYTtJQUFiLHNDQUFhOzs7SUFPOUMsMkJBQ2U7OztJQUR3QixtRUFBK0M7OztJQUd0Riw4QkFBeUQ7SUFBQSxZQUFTO0lBQUEsaUJBQU07OztJQUFmLGVBQVM7SUFBVCxrQ0FBUzs7QURWcEU7SUFXb0Msa0NBQWE7SUFnRS9DLHdCQUFvQixhQUEyQixFQUFVLFFBQW9CO1FBQTdFLFlBQ0Usa0JBQU0sUUFBUSxDQUFDLFNBRWhCO1FBSG1CLG1CQUFhLEdBQWIsYUFBYSxDQUFjO1FBQVUsY0FBUSxHQUFSLFFBQVEsQ0FBWTtRQUUzRSxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBQ3RELENBQUM7SUEvQ0Qsc0JBQ0ksaUNBQUs7UUFGVCwrQkFBK0I7YUFDL0I7WUFFRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzthQUNELFVBQVUsS0FBYTtZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLENBQUM7OztPQUhBO0lBT0Qsc0JBQ0ksb0NBQVE7UUFGWiwwQ0FBMEM7YUFDMUM7WUFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzthQUNELFVBQWEsS0FBYztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELENBQUM7OztPQUhBO0lBT0Qsc0JBQ0ksa0NBQU07UUFGViw4Q0FBOEM7YUFDOUM7WUFFRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzthQUNELFVBQVcsS0FBYztZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLENBQUM7OztPQUhBO0lBT0Qsc0JBQUksbUNBQU87UUFEWCw4Q0FBOEM7YUFDOUM7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUM7UUFDekUsQ0FBQzs7O09BQUE7SUFHRCxzQkFDSSxvQ0FBUTtRQUZaLDBDQUEwQzthQUMxQztZQUVFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDO2FBQ0QsVUFBYSxLQUFjO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsQ0FBQzs7O09BSEE7SUFXRCxvQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsZ0VBQWdFO0lBQ2hFLHFDQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLFlBQVksYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDakUsQ0FBQztJQUVELDRFQUE0RTtJQUM1RSx1Q0FBYyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxZQUFZLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2pFLENBQUM7SUFFRCxxQ0FBcUM7SUFDckMsd0NBQWUsR0FBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDckMsQ0FBQztnRkF0RlUsY0FBYzt1REFBZCxjQUFjO1lDakIzQiwyQkFFRTtZQUFBLGlGQUNFO1lBRUYsaUZBQ0U7WUFFSixpQkFBTTtZQUNOLDhCQUdFO1lBQ0EsaUZBQ0E7WUFFQSwrREFBeUQ7WUFDM0QsaUJBQU07WUFDTixzQ0FBcUQ7O1lBbEJoRCw2Q0FBZ0MsNENBQUE7WUFFckIsZUFBWTtZQUFaLCtCQUFZO1lBR1osZUFBYTtZQUFiLGdDQUFhO1lBS3hCLGVBQXVDO1lBQXZDLG9EQUF1QywwQ0FBQTtZQUc1QixlQUF3QjtZQUF4QiwyQ0FBd0I7WUFHSixlQUFzQjtZQUF0Qix5Q0FBc0I7WUFFeEMsZUFBZTtZQUFmLGlDQUFlOzt5QkRsQmpDO0NBd0dDLEFBbEdELENBV29DLGFBQWEsR0F1RmhEO1NBdkZZLGNBQWM7a0RBQWQsY0FBYztjQVgxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7Z0JBQ3pDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsa0JBQWtCO29CQUN6QixJQUFJLEVBQUUsS0FBSztpQkFDWjtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBRUUsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBR0wsS0FBSzs7a0JBSUwsS0FBSzs7a0JBSUwsS0FBSzs7a0JBSUwsS0FBSzs7a0JBVUwsS0FBSzs7a0JBVUwsS0FBSzs7a0JBZUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSwgY29lcmNlTnVtYmVyUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9TdGVwTGFiZWwgfSBmcm9tICcuL3N0ZXAtbGFiZWwuY29tcG9uZW50JztcbmltcG9ydCB7IENka1N0ZXBIZWFkZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc3RlcC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJ3N0ZXAtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0ZXAtaGVhZGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25vdm8tc3RlcC1oZWFkZXInLFxuICAgIHJvbGU6ICd0YWInLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TdGVwSGVhZGVyIGV4dGVuZHMgQ2RrU3RlcEhlYWRlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcbiAgLyoqIFN0YXRlIG9mIHRoZSBnaXZlbiBzdGVwLiAqL1xuICBASW5wdXQoKVxuICBzdGF0ZTogc3RyaW5nO1xuXG4gIC8qKiBMYWJlbCBvZiB0aGUgZ2l2ZW4gc3RlcC4gKi9cbiAgQElucHV0KClcbiAgbGFiZWw6IE5vdm9TdGVwTGFiZWwgfCBzdHJpbmc7XG5cbiAgLyoqIE92ZXJyaWRlcyBmb3IgdGhlIGhlYWRlciBpY29ucywgcGFzc2VkIGluIHZpYSB0aGUgc3RlcHBlci4gKi9cbiAgQElucHV0KClcbiAgaWNvbk92ZXJyaWRlczogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxhbnk+IH07XG5cbiAgLyoqIEluZGV4IG9mIHRoZSBnaXZlbiBzdGVwLiAqL1xuICBASW5wdXQoKVxuICBnZXQgaW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faW5kZXg7XG4gIH1cbiAgc2V0IGluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbmRleCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9pbmRleDogbnVtYmVyO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBnaXZlbiBzdGVwIGlzIHNlbGVjdGVkLiAqL1xuICBASW5wdXQoKVxuICBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG4gIHNldCBzZWxlY3RlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NlbGVjdGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9zZWxlY3RlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciB0aGUgZ2l2ZW4gc3RlcCBsYWJlbCBpcyBhY3RpdmUuICovXG4gIEBJbnB1dCgpXG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuICBzZXQgYWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9hY3RpdmU6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGdpdmVuIHN0ZXAgbGFiZWwgaXMgYWN0aXZlLiAqL1xuICBnZXQgdG91Y2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZCB8fCB0aGlzLnN0YXRlID09PSAnZWRpdCcgfHwgdGhpcy5zdGF0ZSA9PT0gJ2RvbmUnO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGdpdmVuIHN0ZXAgaXMgb3B0aW9uYWwuICovXG4gIEBJbnB1dCgpXG4gIGdldCBvcHRpb25hbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uYWw7XG4gIH1cbiAgc2V0IG9wdGlvbmFsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fb3B0aW9uYWwgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX29wdGlvbmFsOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLCBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoX2VsZW1lbnQpO1xuICAgIF9mb2N1c01vbml0b3IubW9uaXRvcihfZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0cnVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgLyoqIFJldHVybnMgc3RyaW5nIGxhYmVsIG9mIGdpdmVuIHN0ZXAgaWYgaXQgaXMgYSB0ZXh0IGxhYmVsLiAqL1xuICBfc3RyaW5nTGFiZWwoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWwgaW5zdGFuY2VvZiBOb3ZvU3RlcExhYmVsID8gbnVsbCA6IHRoaXMubGFiZWw7XG4gIH1cblxuICAvKiogUmV0dXJucyBOb3ZvU3RlcExhYmVsIGlmIHRoZSBsYWJlbCBvZiBnaXZlbiBzdGVwIGlzIGEgdGVtcGxhdGUgbGFiZWwuICovXG4gIF90ZW1wbGF0ZUxhYmVsKCk6IE5vdm9TdGVwTGFiZWwgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbCBpbnN0YW5jZW9mIE5vdm9TdGVwTGFiZWwgPyB0aGlzLmxhYmVsIDogbnVsbDtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBob3N0IEhUTUwgZWxlbWVudC4gKi9cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbiIsIjxkaXYgW2NsYXNzLm5vdm8tc3RlcC1pY29uXT1cInRvdWNoZWRcIlxuICAgICBbY2xhc3Mubm92by1zdGVwLWljb24tbm90LXRvdWNoZWRdPVwiIXRvdWNoZWRcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImljb25cIj5cbiAgICA8bm92by1pY29uIHNpemU9XCJzbWFsbFwiIHJhaXNlZD1cInRydWVcIiBbdGhlbWVdPVwidGhlbWVcIj57e2ljb259fTwvbm92by1pY29uPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpY29uXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJub3ZvLXN0ZXAtbnVtYmVyXCI+e3tpbmRleCArIDF9fTwvc3Bhbj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJub3ZvLXN0ZXAtbGFiZWxcIlxuICAgICBbY2xhc3Mubm92by1zdGVwLWxhYmVsLWFjdGl2ZV09XCJhY3RpdmVcIlxuICAgICBbY2xhc3Mubm92by1zdGVwLWxhYmVsLXNlbGVjdGVkXT1cInNlbGVjdGVkXCI+XG4gIDwhLS0gSWYgdGhlcmUgaXMgYSBsYWJlbCB0ZW1wbGF0ZSwgdXNlIGl0LiAtLT5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl90ZW1wbGF0ZUxhYmVsKClcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJfdGVtcGxhdGVMYWJlbCgpIS50ZW1wbGF0ZVwiPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPCEtLSBJdCB0aGVyZSBpcyBubyBsYWJlbCB0ZW1wbGF0ZSwgZmFsbCBiYWNrIHRvIHRoZSB0ZXh0IGxhYmVsLiAtLT5cbiAgPGRpdiBjbGFzcz1cIm5vdm8tc3RlcC10ZXh0LWxhYmVsXCIgKm5nSWY9XCJfc3RyaW5nTGFiZWwoKVwiPnt7bGFiZWx9fTwvZGl2PlxuPC9kaXY+XG48bm92by1zdGVwLXN0YXR1cyBbc3RhdGVdPVwic3RhdGVcIj48L25vdm8tc3RlcC1zdGF0dXM+XG4iXX0=