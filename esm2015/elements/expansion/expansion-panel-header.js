import { ENTER, SPACE } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, Host, Input, ViewEncapsulation, } from '@angular/core';
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
        i0.ɵɵattribute("id", ctx.panel._headerId)("tabindex", ctx.panel.disabled ? 0 - 1 : 0)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2V4cGFuc2lvbi9leHBhbnNpb24tcGFuZWwtaGVhZGVyLnRzIiwiZWxlbWVudHMvZXhwYW5zaW9uL2V4cGFuc2lvbi1wYW5lbC1oZWFkZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBRUwsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7OztJQ1Z2RCwwQkFDOEM7OztJQUR4Qyw2REFBd0M7Ozs7QURZOUM7Ozs7R0FJRztBQTRCSCxNQUFNLE9BQU8sd0JBQXdCO0lBR25DLFlBQ2lCLEtBQXlCLEVBQ2hDLFFBQW9CO0lBQzVCLHVDQUF1QztJQUMvQixrQkFBcUM7UUFIOUIsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUVwQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBTnZDLDhCQUF5QixHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFRckQsK0RBQStEO1FBQy9ELDREQUE0RDtR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RkFrQlAsY0FBYztrQkFEYixLQUFLO1lBS04sZUFBZTtrQkFEZCxLQUFLOztBQWdEUjs7OztHQUlHO0FBT0gsTUFBTSxPQUFPLDZCQUE2Qjs7MEdBQTdCLDZCQUE2QjtrRUFBN0IsNkJBQTZCO2tEQUE3Qiw2QkFBNkI7Y0FOekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUseUNBQXlDO2lCQUNqRDthQUNGOztBQUdEOzs7O0dBSUc7QUFPSCxNQUFNLE9BQU8sdUJBQXVCOzs4RkFBdkIsdUJBQXVCOzREQUF2Qix1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQU5uQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxtQ0FBbUM7aUJBQzNDO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFTlRFUiwgU1BBQ0UgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbm92b0V4cGFuc2lvbkFuaW1hdGlvbnMgfSBmcm9tICcuL2V4cGFuc2lvbi1hbmltYXRpb25zJztcbmltcG9ydCB7IE5vdm9FeHBhbnNpb25QYW5lbCB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsJztcblxuLyoqXG4gKiBgPG5vdm8tZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5gXG4gKlxuICogVGhpcyBjb21wb25lbnQgY29ycmVzcG9uZHMgdG8gdGhlIGhlYWRlciBlbGVtZW50IG9mIGFuIGA8bm92by1leHBhbnNpb24tcGFuZWw+YC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1leHBhbnNpb24tcGFuZWwtaGVhZGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBhbnNpb24tcGFuZWwtaGVhZGVyLmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW25vdm9FeHBhbnNpb25BbmltYXRpb25zLmluZGljYXRvclJvdGF0ZSwgbm92b0V4cGFuc2lvbkFuaW1hdGlvbnMuZXhwYW5zaW9uSGVhZGVySGVpZ2h0XSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbm92by1leHBhbnNpb24tcGFuZWwtaGVhZGVyJyxcbiAgICByb2xlOiAnYnV0dG9uJyxcbiAgICAnW2F0dHIuaWRdJzogJ3BhbmVsLl9oZWFkZXJJZCcsXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdwYW5lbC5kaXNhYmxlZCA/IC0xIDogMCcsXG4gICAgJ1thdHRyLmFyaWEtY29udHJvbHNdJzogJ19nZXRQYW5lbElkKCknLFxuICAgICdbYXR0ci5hcmlhLWV4cGFuZGVkXSc6ICdfaXNFeHBhbmRlZCgpJyxcbiAgICAnW2F0dHIuYXJpYS1kaXNhYmxlZF0nOiAncGFuZWwuZGlzYWJsZWQnLFxuICAgICdbY2xhc3Mubm92by1leHBhbmRlZF0nOiAnX2lzRXhwYW5kZWQoKScsXG4gICAgJyhjbGljayknOiAnX3RvZ2dsZSgpJyxcbiAgICAnKGtleWRvd24pJzogJ19rZXlkb3duKCRldmVudCknLFxuICAgICdbQGV4cGFuc2lvbkhlaWdodF0nOiBge1xuICAgICAgICB2YWx1ZTogX2dldEV4cGFuZGVkU3RhdGUoKSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgY29sbGFwc2VkSGVpZ2h0OiBjb2xsYXBzZWRIZWlnaHQsXG4gICAgICAgICAgZXhwYW5kZWRIZWlnaHQ6IGV4cGFuZGVkSGVpZ2h0XG4gICAgICAgIH1cbiAgICB9YCxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0V4cGFuc2lvblBhbmVsSGVhZGVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfcGFyZW50Q2hhbmdlU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBIb3N0KCkgcHVibGljIHBhbmVsOiBOb3ZvRXhwYW5zaW9uUGFuZWwsXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAvLyBwcml2YXRlIF9mb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIC8vIFNpbmNlIHRoZSB0b2dnbGUgc3RhdGUgZGVwZW5kcyBvbiBhbiBASW5wdXQgb24gdGhlIHBhbmVsLCB3ZVxuICAgIC8vIG5lZWQgdG8gIHN1YnNjcmliZSBhbmQgdHJpZ2dlciBjaGFuZ2UgZGV0ZWN0aW9uIG1hbnVhbGx5LlxuICAgIHRoaXMuX3BhcmVudENoYW5nZVN1YnNjcmlwdGlvbiA9IG1lcmdlKFxuICAgICAgcGFuZWwub3BlbmVkLFxuICAgICAgcGFuZWwuY2xvc2VkLFxuICAgICAgcGFuZWwuX2lucHV0Q2hhbmdlcy5waXBlKGZpbHRlcigoY2hhbmdlcykgPT4gISEoY2hhbmdlcy5oaWRlVG9nZ2xlIHx8IGNoYW5nZXMuZGlzYWJsZWQpKSksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCkpO1xuXG4gICAgLy8gX2ZvY3VzTW9uaXRvci5tb25pdG9yKF9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgLyoqIEhlaWdodCBvZiB0aGUgaGVhZGVyIHdoaWxlIHRoZSBwYW5lbCBpcyBleHBhbmRlZC4gKi9cbiAgQElucHV0KClcbiAgZXhwYW5kZWRIZWlnaHQ6IHN0cmluZztcblxuICAvKiogSGVpZ2h0IG9mIHRoZSBoZWFkZXIgd2hpbGUgdGhlIHBhbmVsIGlzIGNvbGxhcHNlZC4gKi9cbiAgQElucHV0KClcbiAgY29sbGFwc2VkSGVpZ2h0OiBzdHJpbmc7XG5cbiAgLyoqIFRvZ2dsZXMgdGhlIGV4cGFuZGVkIHN0YXRlIG9mIHRoZSBwYW5lbC4gKi9cbiAgX3RvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnBhbmVsLnRvZ2dsZSgpO1xuICB9XG5cbiAgLyoqIEdldHMgd2hldGhlciB0aGUgcGFuZWwgaXMgZXhwYW5kZWQuICovXG4gIF9pc0V4cGFuZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhbmVsLmV4cGFuZGVkO1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIGV4cGFuZGVkIHN0YXRlIHN0cmluZyBvZiB0aGUgcGFuZWwuICovXG4gIF9nZXRFeHBhbmRlZFN0YXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGFuZWwuX2dldEV4cGFuZGVkU3RhdGUoKTtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBwYW5lbCBpZC4gKi9cbiAgX2dldFBhbmVsSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wYW5lbC5pZDtcbiAgfVxuXG4gIC8qKiBHZXRzIHdoZXRoZXIgdGhlIGV4cGFuZCBpbmRpY2F0b3Igc2hvdWxkIGJlIHNob3duLiAqL1xuICBfc2hvd1RvZ2dsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMucGFuZWwuaGlkZVRvZ2dsZSAmJiAhdGhpcy5wYW5lbC5kaXNhYmxlZDtcbiAgfVxuXG4gIC8qKiBIYW5kbGUga2V5ZG93biBldmVudCBjYWxsaW5nIHRvIHRvZ2dsZSgpIGlmIGFwcHJvcHJpYXRlLiAqL1xuICBfa2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgLy8gVG9nZ2xlIGZvciBzcGFjZSBhbmQgZW50ZXIga2V5cy5cbiAgICAgIGNhc2UgU1BBQ0U6XG4gICAgICBjYXNlIEVOVEVSOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLl90b2dnbGUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcGFyZW50Q2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgLy8gdGhpcy5fZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gIH1cbn1cblxuLyoqXG4gKiBgPG5vdm8tcGFuZWwtZGVzY3JpcHRpb24+YFxuICpcbiAqIFRoaXMgZGlyZWN0aW9uIGlzIHRvIGJlIHVzZWQgaW5zaWRlIG9mIHRoZSBOb3ZvRXhwYW5zaW9uUGFuZWxIZWFkZXIgY29tcG9uZW50LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLXBhbmVsLWRlc2NyaXB0aW9uJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbm92by1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0V4cGFuc2lvblBhbmVsRGVzY3JpcHRpb24ge31cblxuLyoqXG4gKiBgPG5vdm8tcGFuZWwtdGl0bGU+YFxuICpcbiAqIFRoaXMgZGlyZWN0aW9uIGlzIHRvIGJlIHVzZWQgaW5zaWRlIG9mIHRoZSBOb3ZvRXhwYW5zaW9uUGFuZWxIZWFkZXIgY29tcG9uZW50LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLXBhbmVsLXRpdGxlJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbm92by1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0V4cGFuc2lvblBhbmVsVGl0bGUge31cbiIsIjxzcGFuIGNsYXNzPVwibm92by1jb250ZW50XCI+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8tcGFuZWwtdGl0bGVcIj48L25nLWNvbnRlbnQ+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8tcGFuZWwtZGVzY3JpcHRpb25cIj48L25nLWNvbnRlbnQ+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvc3Bhbj5cbjxzcGFuIFtAaW5kaWNhdG9yUm90YXRlXT1cIl9nZXRFeHBhbmRlZFN0YXRlKClcIiAqbmdJZj1cIl9zaG93VG9nZ2xlKClcIlxuICAgICAgY2xhc3M9XCJub3ZvLWV4cGFuc2lvbi1pbmRpY2F0b3JcIj48L3NwYW4+XG4iXX0=