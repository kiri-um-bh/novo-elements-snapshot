import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class NovoDividerComponent {
    constructor() {
        this._vertical = false;
        this._inset = false;
    }
    /** Whether the divider is vertically aligned. */
    get vertical() {
        return this._vertical;
    }
    set vertical(value) {
        this._vertical = coerceBooleanProperty(value);
    }
    /** Whether the divider is an inset divider. */
    get inset() {
        return this._inset;
    }
    set inset(value) {
        this._inset = coerceBooleanProperty(value);
    }
}
NovoDividerComponent.ɵfac = function NovoDividerComponent_Factory(t) { return new (t || NovoDividerComponent)(); };
NovoDividerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NovoDividerComponent, selectors: [["novo-divider"]], hostAttrs: ["role", "separator", 1, "novo-divider"], hostVars: 7, hostBindings: function NovoDividerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
        i0.ɵɵclassProp("novo-divider-vertical", ctx.vertical)("novo-divider-horizontal", !ctx.vertical)("novo-divider-inset", ctx.inset);
    } }, inputs: { vertical: "vertical", inset: "inset" }, decls: 0, vars: 0, template: function NovoDividerComponent_Template(rf, ctx) { }, styles: [".novo-divider{border-top-style:solid;border-top-width:1px;display:block;margin:0}.novo-divider.novo-divider-vertical{border-right-style:solid;border-right-width:1px;border-top:0}.novo-divider.novo-divider-inset{margin-left:80px}[dir=rtl] .novo-divider.novo-divider-inset{margin-left:auto;margin-right:80px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDividerComponent, [{
        type: Component,
        args: [{
                selector: 'novo-divider',
                host: {
                    role: 'separator',
                    '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
                    '[class.novo-divider-vertical]': 'vertical',
                    '[class.novo-divider-horizontal]': '!vertical',
                    '[class.novo-divider-inset]': 'inset',
                    class: 'novo-divider',
                },
                template: '',
                styleUrls: ['./divider.component.scss'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { vertical: [{
            type: Input
        }], inset: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kaXZpZGVyL2RpdmlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBZ0IscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFpQjdGLE1BQU0sT0FBTyxvQkFBb0I7SUFmakM7UUF3QlUsY0FBUyxHQUFZLEtBQUssQ0FBQztRQVUzQixXQUFNLEdBQVksS0FBSyxDQUFDO0tBSWpDO0lBdEJDLGlEQUFpRDtJQUNqRCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBR0QsK0NBQStDO0lBQy9DLElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBYztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7O3dGQWxCVSxvQkFBb0I7eURBQXBCLG9CQUFvQjs7OztrREFBcEIsb0JBQW9CO2NBZmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxXQUFXO29CQUNqQix5QkFBeUIsRUFBRSxzQ0FBc0M7b0JBQ2pFLCtCQUErQixFQUFFLFVBQVU7b0JBQzNDLGlDQUFpQyxFQUFFLFdBQVc7b0JBQzlDLDRCQUE0QixFQUFFLE9BQU87b0JBQ3JDLEtBQUssRUFBRSxjQUFjO2lCQUN0QjtnQkFDRCxRQUFRLEVBQUUsRUFBRTtnQkFDWixTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztnQkFDdkMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO2dCQUlLLFFBQVE7a0JBRFgsS0FBSztZQVdGLEtBQUs7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRpdmlkZXInLFxuICBob3N0OiB7XG4gICAgcm9sZTogJ3NlcGFyYXRvcicsXG4gICAgJ1thdHRyLmFyaWEtb3JpZW50YXRpb25dJzogJ3ZlcnRpY2FsID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCInLFxuICAgICdbY2xhc3Mubm92by1kaXZpZGVyLXZlcnRpY2FsXSc6ICd2ZXJ0aWNhbCcsXG4gICAgJ1tjbGFzcy5ub3ZvLWRpdmlkZXItaG9yaXpvbnRhbF0nOiAnIXZlcnRpY2FsJyxcbiAgICAnW2NsYXNzLm5vdm8tZGl2aWRlci1pbnNldF0nOiAnaW5zZXQnLFxuICAgIGNsYXNzOiAnbm92by1kaXZpZGVyJyxcbiAgfSxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZVVybHM6IFsnLi9kaXZpZGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGl2aWRlckNvbXBvbmVudCB7XG4gIC8qKiBXaGV0aGVyIHRoZSBkaXZpZGVyIGlzIHZlcnRpY2FsbHkgYWxpZ25lZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHZlcnRpY2FsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcbiAgfVxuICBzZXQgdmVydGljYWwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfdmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogV2hldGhlciB0aGUgZGl2aWRlciBpcyBhbiBpbnNldCBkaXZpZGVyLiAqL1xuICBASW5wdXQoKVxuICBnZXQgaW5zZXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2luc2V0O1xuICB9XG4gIHNldCBpbnNldCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2luc2V0ID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9pbnNldDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92ZXJ0aWNhbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaW5zZXQ6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==