import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, Optional, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Subscription } from 'rxjs';
import { NovoButtonElement } from '../../button';
import { NovoOverlayTemplateComponent } from '../../overlay';
import { NovoFieldElement, NOVO_FORM_FIELD } from '../field';
import * as i0 from "@angular/core";
import * as i1 from "../field";
import * as i2 from "../../button/Button";
import * as i3 from "../../overlay/Overlay";
const _c0 = ["button"];
const _c1 = ["*"];
export class NovoPickerToggleElement {
    constructor(_elementRef, cdr, defaultTabIndex, _formField) {
        this._elementRef = _elementRef;
        this.cdr = cdr;
        this._formField = _formField;
        this._stateChanges = Subscription.EMPTY;
        const parsedTabIndex = Number(defaultTabIndex);
        this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
    }
    /** Whether the toggle button is disabled. */
    get disabled() {
        if (this._disabled === undefined && this.picker) {
            return this.picker.disabled;
        }
        return !!this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    ngOnChanges(changes) {
        if (changes.picker) {
            this._watchStateChanges();
        }
    }
    ngOnDestroy() {
        this._stateChanges.unsubscribe();
    }
    ngAfterContentInit() {
        this._watchStateChanges();
    }
    ngAfterViewInit() {
        this.element = this._formField.getConnectedOverlayOrigin() || this._elementRef;
    }
    togglePanel(event) {
        this.cdr.detectChanges();
        if (!this.overlay.panelOpen) {
            this.openPanel(event);
        }
        else {
            this.closePanel(event);
        }
    }
    /** BEGIN: Convenient Panel Methods. */
    openPanel(event) {
        if (!this.overlay.panelOpen) {
            this.overlay.openPanel();
        }
    }
    closePanel(event) {
        this.overlay.closePanel();
    }
    get panelOpen() {
        return this.overlay && this.overlay.panelOpen;
    }
    _watchStateChanges() {
        // const pickerStateChanged = this.picker ? this.picker.stateChanges : observableOf();
        // const inputStateChanged = this.picker && this.picker.pickerInput ? this.picker.pickerInput.stateChanges : observableOf();
        // const pickerToggled = this.picker ? merge(this.picker.openedStream, this.picker.closedStream) : observableOf();
        // this._stateChanges.unsubscribe();
        // this._stateChanges = merge(pickerStateChanged, inputStateChanged, pickerToggled).subscribe(() => this.cdr.markForCheck());
    }
}
NovoPickerToggleElement.ɵfac = function NovoPickerToggleElement_Factory(t) { return new (t || NovoPickerToggleElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵinjectAttribute('tabindex'), i0.ɵɵdirectiveInject(NOVO_FORM_FIELD, 8)); };
NovoPickerToggleElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoPickerToggleElement, selectors: [["novo-picker-toggle"]], viewQuery: function NovoPickerToggleElement_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(NovoOverlayTemplateComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._button = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.overlay = _t.first);
    } }, hostAttrs: [1, "novo-picker-toggle"], hostVars: 7, hostBindings: function NovoPickerToggleElement_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("focus", function NovoPickerToggleElement_focus_HostBindingHandler() { return ctx._button.focus(); });
    } if (rf & 2) {
        i0.ɵɵattribute("tabindex", ctx.disabled ? null : 0 - 1);
        i0.ɵɵclassProp("novo-toggle-active", ctx.picker && ctx.picker.opened)("novo-accent", ctx.picker && ctx.picker.color === "accent")("novo-warn", ctx.picker && ctx.picker.color === "warn");
    } }, inputs: { picker: ["for", "picker"], icon: "icon", tabIndex: "tabIndex", ariaLabel: ["aria-label", "ariaLabel"], disabled: "disabled", disableRipple: "disableRipple" }, exportAs: ["novoPickerToggle"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 4, vars: 5, consts: [["theme", "icon", 3, "icon", "disabled", "click"], ["button", ""], ["position", "above-below", 3, "parent"]], template: function NovoPickerToggleElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "button", 0, 1);
        i0.ɵɵlistener("click", function NovoPickerToggleElement_Template_button_click_0_listener($event) { return ctx.togglePanel($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "novo-overlay-template", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("icon", ctx.icon)("disabled", ctx.disabled);
        i0.ɵɵattribute("aria-haspopup", "dialog")("tabindex", ctx.disabled ? 0 - 1 : ctx.tabIndex);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("parent", ctx.element);
    } }, directives: [i2.NovoButtonElement, i3.NovoOverlayTemplateComponent], styles: [""], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoPickerToggleElement, [{
        type: Component,
        args: [{
                selector: 'novo-picker-toggle',
                templateUrl: 'picker-toggle.component.html',
                styleUrls: ['picker-toggle.component.scss'],
                host: {
                    class: 'novo-picker-toggle',
                    // Always set the tabindex to -1 so that it doesn't overlap with any custom tabindex the
                    // consumer may have provided, while still being able to receive focus.
                    '[attr.tabindex]': 'disabled ? null : -1',
                    '[class.novo-toggle-active]': 'picker && picker.opened',
                    '[class.novo-accent]': 'picker && picker.color === "accent"',
                    '[class.novo-warn]': 'picker && picker.color === "warn"',
                    '(focus)': '_button.focus()',
                },
                exportAs: 'novoPickerToggle',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Attribute,
                args: ['tabindex']
            }] }, { type: i1.NovoFieldElement, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NOVO_FORM_FIELD]
            }] }]; }, { picker: [{
            type: Input,
            args: ['for']
        }], icon: [{
            type: Input
        }], tabIndex: [{
            type: Input
        }], ariaLabel: [{
            type: Input,
            args: ['aria-label']
        }], disabled: [{
            type: Input
        }], disableRipple: [{
            type: Input
        }], _button: [{
            type: ViewChild,
            args: ['button']
        }], overlay: [{
            type: ViewChild,
            args: [NovoOverlayTemplateComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLXRvZ2dsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9maWVsZC90b2dnbGUvcGlja2VyLXRvZ2dsZS5jb21wb25lbnQudHMiLCJlbGVtZW50cy9maWVsZC90b2dnbGUvcGlja2VyLXRvZ2dsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUUsT0FBTyxFQUdMLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFHTCxRQUFRLEVBRVIsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7Ozs7OztBQW9CN0QsTUFBTSxPQUFPLHVCQUF1QjtJQXdDbEMsWUFDVSxXQUF1QixFQUN2QixHQUFzQixFQUNQLGVBQXVCLEVBQ0QsVUFBNEI7UUFIakUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFFZSxlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQTNDbkUsa0JBQWEsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBNkN6QyxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFD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RUFBRSxtQ0FBbUM7b0JBQ3hELFNBQVMsRUFBRSxpQkFBaUI7aUJBQzdCO2dCQUNELFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7c0JBNENJLFNBQVM7dUJBQUMsVUFBVTs7c0JBQ3BCLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsZUFBZTt3QkF4Q3ZCLE1BQU07a0JBQW5CLEtBQUs7bUJBQUMsS0FBSztZQUVILElBQUk7a0JBQVosS0FBSztZQUdHLFFBQVE7a0JBQWhCLEtBQUs7WUFHZSxTQUFTO2tCQUE3QixLQUFLO21CQUFDLFlBQVk7WUFJZixRQUFRO2tCQURYLEtBQUs7WUFjRyxhQUFhO2tCQUFyQixLQUFLO1lBR2UsT0FBTztrQkFBM0IsU0FBUzttQkFBQyxRQUFRO1lBSW5CLE9BQU87a0JBRE4sU0FBUzttQkFBQyw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBBdHRyaWJ1dGUsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOb3ZvQnV0dG9uRWxlbWVudCB9IGZyb20gJy4uLy4uL2J1dHRvbic7XG5pbXBvcnQgeyBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vb3ZlcmxheSc7XG5pbXBvcnQgeyBOb3ZvRmllbGRFbGVtZW50LCBOT1ZPX0ZPUk1fRklFTEQgfSBmcm9tICcuLi9maWVsZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcGlja2VyLXRvZ2dsZScsXG4gIHRlbXBsYXRlVXJsOiAncGlja2VyLXRvZ2dsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydwaWNrZXItdG9nZ2xlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25vdm8tcGlja2VyLXRvZ2dsZScsXG4gICAgLy8gQWx3YXlzIHNldCB0aGUgdGFiaW5kZXggdG8gLTEgc28gdGhhdCBpdCBkb2Vzbid0IG92ZXJsYXAgd2l0aCBhbnkgY3VzdG9tIHRhYmluZGV4IHRoZVxuICAgIC8vIGNvbnN1bWVyIG1heSBoYXZlIHByb3ZpZGVkLCB3aGlsZSBzdGlsbCBiZWluZyBhYmxlIHRvIHJlY2VpdmUgZm9jdXMuXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdkaXNhYmxlZCA/IG51bGwgOiAtMScsXG4gICAgJ1tjbGFzcy5ub3ZvLXRvZ2dsZS1hY3RpdmVdJzogJ3BpY2tlciAmJiBwaWNrZXIub3BlbmVkJyxcbiAgICAnW2NsYXNzLm5vdm8tYWNjZW50XSc6ICdwaWNrZXIgJiYgcGlja2VyLmNvbG9yID09PSBcImFjY2VudFwiJyxcbiAgICAnW2NsYXNzLm5vdm8td2Fybl0nOiAncGlja2VyICYmIHBpY2tlci5jb2xvciA9PT0gXCJ3YXJuXCInLFxuICAgICcoZm9jdXMpJzogJ19idXR0b24uZm9jdXMoKScsXG4gIH0sXG4gIGV4cG9ydEFzOiAnbm92b1BpY2tlclRvZ2dsZScsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvUGlja2VyVG9nZ2xlRWxlbWVudDxUID0gYW55PiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc3RhdGVDaGFuZ2VzID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIC8qKiBEYXRlcGlja2VyIGluc3RhbmNlIHRoYXQgdGhlIGJ1dHRvbiB3aWxsIHRvZ2dsZS4gKi9cbiAgQElucHV0KCdmb3InKSBwaWNrZXI6IFQ7XG5cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuXG4gIC8qKiBUYWJpbmRleCBmb3IgdGhlIHRvZ2dsZS4gKi9cbiAgQElucHV0KCkgdGFiSW5kZXg6IG51bWJlciB8IG51bGw7XG5cbiAgLyoqIFNjcmVlbnJlYWRlciBsYWJlbCBmb3IgdGhlIGJ1dHRvbi4gKi9cbiAgQElucHV0KCdhcmlhLWxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHRvZ2dsZSBidXR0b24gaXMgZGlzYWJsZWQuICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fZGlzYWJsZWQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLnBpY2tlcikge1xuICAgICAgcmV0dXJuICh0aGlzLnBpY2tlciBhcyBhbnkpLmRpc2FibGVkO1xuICAgIH1cblxuICAgIHJldHVybiAhIXRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciByaXBwbGVzIG9uIHRoZSB0b2dnbGUgc2hvdWxkIGJlIGRpc2FibGVkLiAqL1xuICBASW5wdXQoKSBkaXNhYmxlUmlwcGxlOiBib29sZWFuO1xuXG4gIC8qKiBVbmRlcmx5aW5nIGJ1dHRvbiBlbGVtZW50LiAqL1xuICBAVmlld0NoaWxkKCdidXR0b24nKSBfYnV0dG9uOiBOb3ZvQnV0dG9uRWxlbWVudDtcblxuICAvKiogRWxlbWVudCBmb3IgdGhlIHBhbmVsIGNvbnRhaW5pbmcgdGhlIGF1dG9jb21wbGV0ZSBvcHRpb25zLiAqL1xuICBAVmlld0NoaWxkKE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQpXG4gIG92ZXJsYXk6IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQ7XG5cbiAgZWxlbWVudDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAQXR0cmlidXRlKCd0YWJpbmRleCcpIGRlZmF1bHRUYWJJbmRleDogc3RyaW5nLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTk9WT19GT1JNX0ZJRUxEKSBwcml2YXRlIF9mb3JtRmllbGQ6IE5vdm9GaWVsZEVsZW1lbnQsXG4gICkge1xuICAgIGNvbnN0IHBhcnNlZFRhYkluZGV4ID0gTnVtYmVyKGRlZmF1bHRUYWJJbmRleCk7XG4gICAgdGhpcy50YWJJbmRleCA9IHBhcnNlZFRhYkluZGV4IHx8IHBhcnNlZFRhYkluZGV4ID09PSAwID8gcGFyc2VkVGFiSW5kZXggOiBudWxsO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLnBpY2tlcikge1xuICAgICAgdGhpcy5fd2F0Y2hTdGF0ZUNoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9zdGF0ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl93YXRjaFN0YXRlQ2hhbmdlcygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuX2Zvcm1GaWVsZC5nZXRDb25uZWN0ZWRPdmVybGF5T3JpZ2luKCkgfHwgdGhpcy5fZWxlbWVudFJlZjtcbiAgfVxuXG4gIHRvZ2dsZVBhbmVsKGV2ZW50PzogRXZlbnQpIHtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgaWYgKCF0aGlzLm92ZXJsYXkucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLm9wZW5QYW5lbChldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2VQYW5lbChldmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEJFR0lOOiBDb252ZW5pZW50IFBhbmVsIE1ldGhvZHMuICovXG4gIG9wZW5QYW5lbChldmVudD86IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm92ZXJsYXkucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLm92ZXJsYXkub3BlblBhbmVsKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VQYW5lbChldmVudD86IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5LmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIGdldCBwYW5lbE9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkucGFuZWxPcGVuO1xuICB9XG5cbiAgcHJpdmF0ZSBfd2F0Y2hTdGF0ZUNoYW5nZXMoKSB7XG4gICAgLy8gY29uc3QgcGlja2VyU3RhdGVDaGFuZ2VkID0gdGhpcy5waWNrZXIgPyB0aGlzLnBpY2tlci5zdGF0ZUNoYW5nZXMgOiBvYnNlcnZhYmxlT2YoKTtcbiAgICAvLyBjb25zdCBpbnB1dFN0YXRlQ2hhbmdlZCA9IHRoaXMucGlja2VyICYmIHRoaXMucGlja2VyLnBpY2tlcklucHV0ID8gdGhpcy5waWNrZXIucGlja2VySW5wdXQuc3RhdGVDaGFuZ2VzIDogb2JzZXJ2YWJsZU9mKCk7XG4gICAgLy8gY29uc3QgcGlja2VyVG9nZ2xlZCA9IHRoaXMucGlja2VyID8gbWVyZ2UodGhpcy5waWNrZXIub3BlbmVkU3RyZWFtLCB0aGlzLnBpY2tlci5jbG9zZWRTdHJlYW0pIDogb2JzZXJ2YWJsZU9mKCk7XG4gICAgLy8gdGhpcy5fc3RhdGVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gICAgLy8gdGhpcy5fc3RhdGVDaGFuZ2VzID0gbWVyZ2UocGlja2VyU3RhdGVDaGFuZ2VkLCBpbnB1dFN0YXRlQ2hhbmdlZCwgcGlja2VyVG9nZ2xlZCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xufVxuIiwiPGJ1dHRvblxuICAjYnV0dG9uXG4gIHRoZW1lPVwiaWNvblwiXG4gIFtpY29uXT1cImljb25cIlxuICBbYXR0ci5hcmlhLWhhc3BvcHVwXT1cIidkaWFsb2cnXCJcbiAgW2F0dHIudGFiaW5kZXhdPVwiZGlzYWJsZWQgPyAtMSA6IHRhYkluZGV4XCJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgKGNsaWNrKT1cInRvZ2dsZVBhbmVsKCRldmVudClcIj48L2J1dHRvbj5cblxuPG5vdm8tb3ZlcmxheS10ZW1wbGF0ZSBbcGFyZW50XT1cImVsZW1lbnRcIiBwb3NpdGlvbj1cImFib3ZlLWJlbG93XCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbm92by1vdmVybGF5LXRlbXBsYXRlPiJdfQ==