import { ENTER, SPACE } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, Host, Input, ViewEncapsulation } from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { novoExpansionAnimations } from './expansion-animations';
import { NovoExpansionPanel } from './expansion-panel';
import * as i0 from "@angular/core";
import * as i1 from "./expansion-panel";
import * as i2 from "@angular/common";
const _c0 = function (a0, a1) { return { collapsedHeight: a0, expandedHeight: a1 }; };
const _c1 = function (a0, a1) { return { value: a0, params: a1 }; };
function NovoExpansionPanelHeader_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@indicatorRotate", ctx_r0._getExpandedState());
} }
const _c2 = [[["novo-panel-title"]], [["novo-panel-description"]], "*"];
const _c3 = ["novo-panel-title", "novo-panel-description", "*"];
/**
 * `<novo-expansion-panel-header>`
 *
 * This component corresponds to the header element of an `<novo-expansion-panel>`.
 */
export class NovoExpansionPanelHeader {
    constructor(panel, _element, 
    // private _focusMonitor: FocusMonitor,
    _changeDetectorRef) {
        this.panel = panel;
        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        this._parentChangeSubscription = Subscription.EMPTY;
        // Since the toggle state depends on an @Input on the panel, we
        // need to  subscribe and trigger change detection manually.
        this._parentChangeSubscription = merge(panel.opened, panel.closed, panel._inputChanges.pipe(filter((changes) => !!(changes.hideToggle || changes.disabled)))).subscribe(() => this._changeDetectorRef.markForCheck());
        // _focusMonitor.monitor(_element.nativeElement);
    }
    /** Toggles the expanded state of the panel. */
    _toggle() {
        this.panel.toggle();
    }
    /** Gets whether the panel is expanded. */
    _isExpanded() {
        return this.panel.expanded;
    }
    /** Gets the expanded state string of the panel. */
    _getExpandedState() {
        return this.panel._getExpandedState();
    }
    /** Gets the panel id. */
    _getPanelId() {
        return this.panel.id;
    }
    /** Gets whether the expand indicator should be shown. */
    _showToggle() {
        return !this.panel.hideToggle && !this.panel.disabled;
    }
    /** Handle keydown event calling to toggle() if appropriate. */
    _keydown(event) {
        switch (event.keyCode) {
            // Toggle for space and enter keys.
            case SPACE:
            case ENTER:
                event.preventDefault();
                this._toggle();
                break;
            default:
                return;
        }
    }
    ngOnDestroy() {
        this._parentChangeSubscription.unsubscribe();
        // this._focusMonitor.stopMonitoring(this._element.nativeElement);
    }
}
NovoExpansionPanelHeader.ɵfac = function NovoExpansionPanelHeader_Factory(t) { return new (t || NovoExpansionPanelHeader)(i0.ɵɵdirectiveInject(i1.NovoExpansionPanel, 1), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
NovoExpansionPanelHeader.ɵcmp = i0.ɵɵdefineComponent({ type: NovoExpansionPanelHeader, selectors: [["novo-expansion-panel-header"]], hostAttrs: ["role", "button", 1, "novo-expansion-panel-header"], hostVars: 14, hostBindings: function NovoExpansionPanelHeader_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function NovoExpansionPanelHeader_click_HostBindingHandler() { return ctx._toggle(); })("keydown", function NovoExpansionPanelHeader_keydown_HostBindingHandler($event) { return ctx._keydown($event); });
    } if (rf & 2) {
        i0.ɵɵattribute("id", ctx.panel._headerId)("tabindex", ctx.panel.disabled ? -1 : 0)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
        i0.ɵɵsyntheticHostProperty("@expansionHeight", i0.ɵɵpureFunction2(11, _c1, ctx._getExpandedState(), i0.ɵɵpureFunction2(8, _c0, ctx.collapsedHeight, ctx.expandedHeight)));
        i0.ɵɵclassProp("novo-expanded", ctx._isExpanded());
    } }, inputs: { expandedHeight: "expandedHeight", collapsedHeight: "collapsedHeight" }, ngContentSelectors: _c3, decls: 5, vars: 1, consts: [[1, "novo-content"], ["class", "novo-expansion-indicator", 4, "ngIf"], [1, "novo-expansion-indicator"]], template: function NovoExpansionPanelHeader_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c2);
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵprojection(2, 1);
        i0.ɵɵprojection(3, 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, NovoExpansionPanelHeader_span_4_Template, 1, 1, "span", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx._showToggle());
    } }, directives: [i2.NgIf], styles: [".novo-expansion-panel-header{align-items:center;display:flex;flex-direction:row;padding:0 24px}.novo-expansion-panel-header:focus,.novo-expansion-panel-header:hover{outline:none}.novo-expansion-panel-header.novo-expanded:focus,.novo-expansion-panel-header.novo-expanded:hover{background:inherit}.novo-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.novo-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.novo-expansion-panel-header-description,.novo-expansion-panel-header-title{align-items:center;display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .novo-expansion-panel-header-description,[dir=rtl] .novo-expansion-panel-header-title{margin-left:16px;margin-right:0}.novo-expansion-panel-header-description{flex-grow:2}.novo-expansion-indicator:after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}"], encapsulation: 2, data: { animation: [novoExpansionAnimations.indicatorRotate, novoExpansionAnimations.expansionHeaderHeight] }, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoExpansionPanelHeader, [{
        type: Component,
        args: [{
                selector: 'novo-expansion-panel-header',
                styleUrls: ['./expansion-panel-header.scss'],
                templateUrl: './expansion-panel-header.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [novoExpansionAnimations.indicatorRotate, novoExpansionAnimations.expansionHeaderHeight],
                host: {
                    class: 'novo-expansion-panel-header',
                    role: 'button',
                    '[attr.id]': 'panel._headerId',
                    '[attr.tabindex]': 'panel.disabled ? -1 : 0',
                    '[attr.aria-controls]': '_getPanelId()',
                    '[attr.aria-expanded]': '_isExpanded()',
                    '[attr.aria-disabled]': 'panel.disabled',
                    '[class.novo-expanded]': '_isExpanded()',
                    '(click)': '_toggle()',
                    '(keydown)': '_keydown($event)',
                    '[@expansionHeight]': `{
        value: _getExpandedState(),
        params: {
          collapsedHeight: collapsedHeight,
          expandedHeight: expandedHeight
        }
    }`,
                },
            }]
    }], function () { return [{ type: i1.NovoExpansionPanel, decorators: [{
                type: Host
            }] }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { expandedHeight: [{
            type: Input
        }], collapsedHeight: [{
            type: Input
        }] }); })();
/**
 * `<novo-panel-description>`
 *
 * This direction is to be used inside of the NovoExpansionPanelHeader component.
 */
export class NovoExpansionPanelDescription {
}
NovoExpansionPanelDescription.ɵfac = function NovoExpansionPanelDescription_Factory(t) { return new (t || NovoExpansionPanelDescription)(); };
NovoExpansionPanelDescription.ɵdir = i0.ɵɵdefineDirective({ type: NovoExpansionPanelDescription, selectors: [["novo-panel-description"]], hostAttrs: [1, "novo-expansion-panel-header-description"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoExpansionPanelDescription, [{
        type: Directive,
        args: [{
                selector: 'novo-panel-description',
                host: {
                    class: 'novo-expansion-panel-header-description',
                },
            }]
    }], null, null); })();
/**
 * `<novo-panel-title>`
 *
 * This direction is to be used inside of the NovoExpansionPanelHeader component.
 */
export class NovoExpansionPanelTitle {
}
NovoExpansionPanelTitle.ɵfac = function NovoExpansionPanelTitle_Factory(t) { return new (t || NovoExpansionPanelTitle)(); };
NovoExpansionPanelTitle.ɵdir = i0.ɵɵdefineDirective({ type: NovoExpansionPanelTitle, selectors: [["novo-panel-title"]], hostAttrs: [1, "novo-expansion-panel-header-title"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoExpansionPanelTitle, [{
        type: Directive,
        args: [{
                selector: 'novo-panel-title',
                host: {
                    class: 'novo-expansion-panel-header-title',
                },
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9leHBhbnNpb24vZXhwYW5zaW9uLXBhbmVsLWhlYWRlci50cyIsImVsZW1lbnRzL2V4cGFuc2lvbi9leHBhbnNpb24tcGFuZWwtaGVhZGVyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4SixPQUFPLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7SUNBdkQsMEJBQzhDOzs7SUFEeEMsNkRBQXdDOzs7O0FERTlDOzs7O0dBSUc7QUE0QkgsTUFBTSxPQUFPLHdCQUF3QjtJQUduQyxZQUNpQixLQUF5QixFQUNoQyxRQUFvQjtJQUM1Qix1Q0FBdUM7SUFDL0Isa0JBQXFDO1FBSDlCLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQVk7UUFFcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQU52Qyw4QkFBeUIsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBUXJELCtEQUErRDtRQUMvRCw0REFBNEQ7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RkFrQlAsY0FBYztrQkFEYixLQUFLO1lBS04sZUFBZTtrQkFEZCxLQUFLOztBQWdEUjs7OztHQUlHO0FBT0gsTUFBTSxPQUFPLDZCQUE2Qjs7MEdBQTdCLDZCQUE2QjtrRUFBN0IsNkJBQTZCO2tEQUE3Qiw2QkFBNkI7Y0FOekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUseUNBQXlDO2lCQUNqRDthQUNGOztBQUdEOzs7O0dBSUc7QUFPSCxNQUFNLE9BQU8sdUJBQXVCOzs4RkFBdkIsdUJBQXVCOzREQUF2Qix1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQU5uQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxtQ0FBbUM7aUJBQzNDO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFTlRFUiwgU1BBQ0UgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgSW5wdXQsIE9uRGVzdHJveSwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1lcmdlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG5vdm9FeHBhbnNpb25BbmltYXRpb25zIH0gZnJvbSAnLi9leHBhbnNpb24tYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBOb3ZvRXhwYW5zaW9uUGFuZWwgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbCc7XG5cbi8qKlxuICogYDxub3ZvLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+YFxuICpcbiAqIFRoaXMgY29tcG9uZW50IGNvcnJlc3BvbmRzIHRvIHRoZSBoZWFkZXIgZWxlbWVudCBvZiBhbiBgPG5vdm8tZXhwYW5zaW9uLXBhbmVsPmAuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZXhwYW5zaW9uLXBhbmVsLWhlYWRlcicsXG4gIHN0eWxlVXJsczogWycuL2V4cGFuc2lvbi1wYW5lbC1oZWFkZXIuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtub3ZvRXhwYW5zaW9uQW5pbWF0aW9ucy5pbmRpY2F0b3JSb3RhdGUsIG5vdm9FeHBhbnNpb25BbmltYXRpb25zLmV4cGFuc2lvbkhlYWRlckhlaWdodF0sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25vdm8tZXhwYW5zaW9uLXBhbmVsLWhlYWRlcicsXG4gICAgcm9sZTogJ2J1dHRvbicsXG4gICAgJ1thdHRyLmlkXSc6ICdwYW5lbC5faGVhZGVySWQnLFxuICAgICdbYXR0ci50YWJpbmRleF0nOiAncGFuZWwuZGlzYWJsZWQgPyAtMSA6IDAnLFxuICAgICdbYXR0ci5hcmlhLWNvbnRyb2xzXSc6ICdfZ2V0UGFuZWxJZCgpJyxcbiAgICAnW2F0dHIuYXJpYS1leHBhbmRlZF0nOiAnX2lzRXhwYW5kZWQoKScsXG4gICAgJ1thdHRyLmFyaWEtZGlzYWJsZWRdJzogJ3BhbmVsLmRpc2FibGVkJyxcbiAgICAnW2NsYXNzLm5vdm8tZXhwYW5kZWRdJzogJ19pc0V4cGFuZGVkKCknLFxuICAgICcoY2xpY2spJzogJ190b2dnbGUoKScsXG4gICAgJyhrZXlkb3duKSc6ICdfa2V5ZG93bigkZXZlbnQpJyxcbiAgICAnW0BleHBhbnNpb25IZWlnaHRdJzogYHtcbiAgICAgICAgdmFsdWU6IF9nZXRFeHBhbmRlZFN0YXRlKCksXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGNvbGxhcHNlZEhlaWdodDogY29sbGFwc2VkSGVpZ2h0LFxuICAgICAgICAgIGV4cGFuZGVkSGVpZ2h0OiBleHBhbmRlZEhlaWdodFxuICAgICAgICB9XG4gICAgfWAsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9FeHBhbnNpb25QYW5lbEhlYWRlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3BhcmVudENoYW5nZVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASG9zdCgpIHB1YmxpYyBwYW5lbDogTm92b0V4cGFuc2lvblBhbmVsLFxuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgLy8gcHJpdmF0ZSBfZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHtcbiAgICAvLyBTaW5jZSB0aGUgdG9nZ2xlIHN0YXRlIGRlcGVuZHMgb24gYW4gQElucHV0IG9uIHRoZSBwYW5lbCwgd2VcbiAgICAvLyBuZWVkIHRvICBzdWJzY3JpYmUgYW5kIHRyaWdnZXIgY2hhbmdlIGRldGVjdGlvbiBtYW51YWxseS5cbiAgICB0aGlzLl9wYXJlbnRDaGFuZ2VTdWJzY3JpcHRpb24gPSBtZXJnZShcbiAgICAgIHBhbmVsLm9wZW5lZCxcbiAgICAgIHBhbmVsLmNsb3NlZCxcbiAgICAgIHBhbmVsLl9pbnB1dENoYW5nZXMucGlwZShmaWx0ZXIoKGNoYW5nZXMpID0+ICEhKGNoYW5nZXMuaGlkZVRvZ2dsZSB8fCBjaGFuZ2VzLmRpc2FibGVkKSkpLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpKTtcblxuICAgIC8vIF9mb2N1c01vbml0b3IubW9uaXRvcihfZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIC8qKiBIZWlnaHQgb2YgdGhlIGhlYWRlciB3aGlsZSB0aGUgcGFuZWwgaXMgZXhwYW5kZWQuICovXG4gIEBJbnB1dCgpXG4gIGV4cGFuZGVkSGVpZ2h0OiBzdHJpbmc7XG5cbiAgLyoqIEhlaWdodCBvZiB0aGUgaGVhZGVyIHdoaWxlIHRoZSBwYW5lbCBpcyBjb2xsYXBzZWQuICovXG4gIEBJbnB1dCgpXG4gIGNvbGxhcHNlZEhlaWdodDogc3RyaW5nO1xuXG4gIC8qKiBUb2dnbGVzIHRoZSBleHBhbmRlZCBzdGF0ZSBvZiB0aGUgcGFuZWwuICovXG4gIF90b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5wYW5lbC50b2dnbGUoKTtcbiAgfVxuXG4gIC8qKiBHZXRzIHdoZXRoZXIgdGhlIHBhbmVsIGlzIGV4cGFuZGVkLiAqL1xuICBfaXNFeHBhbmRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYW5lbC5leHBhbmRlZDtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBleHBhbmRlZCBzdGF0ZSBzdHJpbmcgb2YgdGhlIHBhbmVsLiAqL1xuICBfZ2V0RXhwYW5kZWRTdGF0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBhbmVsLl9nZXRFeHBhbmRlZFN0YXRlKCk7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgcGFuZWwgaWQuICovXG4gIF9nZXRQYW5lbElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGFuZWwuaWQ7XG4gIH1cblxuICAvKiogR2V0cyB3aGV0aGVyIHRoZSBleHBhbmQgaW5kaWNhdG9yIHNob3VsZCBiZSBzaG93bi4gKi9cbiAgX3Nob3dUb2dnbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLnBhbmVsLmhpZGVUb2dnbGUgJiYgIXRoaXMucGFuZWwuZGlzYWJsZWQ7XG4gIH1cblxuICAvKiogSGFuZGxlIGtleWRvd24gZXZlbnQgY2FsbGluZyB0byB0b2dnbGUoKSBpZiBhcHByb3ByaWF0ZS4gKi9cbiAgX2tleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIC8vIFRvZ2dsZSBmb3Igc3BhY2UgYW5kIGVudGVyIGtleXMuXG4gICAgICBjYXNlIFNQQUNFOlxuICAgICAgY2FzZSBFTlRFUjpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5fdG9nZ2xlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3BhcmVudENoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIC8vIHRoaXMuX2ZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICB9XG59XG5cbi8qKlxuICogYDxub3ZvLXBhbmVsLWRlc2NyaXB0aW9uPmBcbiAqXG4gKiBUaGlzIGRpcmVjdGlvbiBpcyB0byBiZSB1c2VkIGluc2lkZSBvZiB0aGUgTm92b0V4cGFuc2lvblBhbmVsSGVhZGVyIGNvbXBvbmVudC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbm92by1wYW5lbC1kZXNjcmlwdGlvbicsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25vdm8tZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbicsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9FeHBhbnNpb25QYW5lbERlc2NyaXB0aW9uIHsgfVxuXG4vKipcbiAqIGA8bm92by1wYW5lbC10aXRsZT5gXG4gKlxuICogVGhpcyBkaXJlY3Rpb24gaXMgdG8gYmUgdXNlZCBpbnNpZGUgb2YgdGhlIE5vdm9FeHBhbnNpb25QYW5lbEhlYWRlciBjb21wb25lbnQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tcGFuZWwtdGl0bGUnLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdub3ZvLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRXhwYW5zaW9uUGFuZWxUaXRsZSB7IH1cbiIsIjxzcGFuIGNsYXNzPVwibm92by1jb250ZW50XCI+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8tcGFuZWwtdGl0bGVcIj48L25nLWNvbnRlbnQ+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8tcGFuZWwtZGVzY3JpcHRpb25cIj48L25nLWNvbnRlbnQ+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvc3Bhbj5cbjxzcGFuIFtAaW5kaWNhdG9yUm90YXRlXT1cIl9nZXRFeHBhbmRlZFN0YXRlKClcIiAqbmdJZj1cIl9zaG93VG9nZ2xlKClcIlxuICAgICAgY2xhc3M9XCJub3ZvLWV4cGFuc2lvbi1pbmRpY2F0b3JcIj48L3NwYW4+XG4iXX0=