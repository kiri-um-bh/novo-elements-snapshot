import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/observers";
const _c0 = ["*"];
export class NovoIconComponent {
    constructor(element, cdr) {
        this.element = element;
        this.cdr = cdr;
        this.size = 'medium';
        this.role = 'img';
    }
    set alt(value) {
        this.ariaLabel = value;
    }
    get alt() {
        return this.ariaLabel;
    }
    set name(iconName) {
        this.iconName = `bhi-${iconName}`;
    }
    get name() {
        return this.iconName;
    }
    ngAfterViewInit() {
        if (this.element.nativeElement.textContent.trim()) {
            Promise.resolve().then(() => {
                this.name = this.element.nativeElement.textContent.trim();
                this.cdr.markForCheck();
            });
        }
    }
    projectContentChanged(record) {
        this.name = this.element.nativeElement.textContent.trim();
        this.cdr.detectChanges();
    }
}
NovoIconComponent.ɵfac = function NovoIconComponent_Factory(t) { return new (t || NovoIconComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
NovoIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NovoIconComponent, selectors: [["novo-icon"]], hostVars: 6, hostBindings: function NovoIconComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("raised", ctx.raised)("size", ctx.size)("theme", ctx.theme)("color", ctx.color)("role", ctx.role)("aria-label", ctx.ariaLabel);
    } }, inputs: { raised: "raised", size: "size", theme: "theme", color: "color", alt: "alt", name: "name" }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[3, "cdkObserveContent"]], template: function NovoIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "i");
        i0.ɵɵelementStart(1, "span", 0);
        i0.ɵɵlistener("cdkObserveContent", function NovoIconComponent_Template_span_cdkObserveContent_1_listener($event) { return ctx.projectContentChanged($event); });
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap(ctx.iconName);
    } }, directives: [i1.CdkObserveContent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoIconComponent, [{
        type: Component,
        args: [{
                selector: 'novo-icon',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <i [class]="iconName"
      ><span (cdkObserveContent)="projectContentChanged($event)"><ng-content></ng-content></span
    ></i>
  `,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { raised: [{
            type: HostBinding,
            args: ['attr.raised']
        }, {
            type: Input
        }], size: [{
            type: HostBinding,
            args: ['attr.size']
        }, {
            type: Input
        }], theme: [{
            type: HostBinding,
            args: ['attr.theme']
        }, {
            type: Input
        }], color: [{
            type: HostBinding,
            args: ['attr.color']
        }, {
            type: Input
        }], role: [{
            type: HostBinding,
            args: ['attr.role']
        }], ariaLabel: [{
            type: HostBinding,
            args: ['attr.aria-label']
        }], alt: [{
            type: Input
        }], name: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2ljb24vSWNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVdySSxNQUFNLE9BQU8saUJBQWlCO0lBc0M1QixZQUFtQixPQUFtQixFQUFVLEdBQXNCO1FBQW5ELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWhDL0QsU0FBSSxHQUFXLFFBQVEsQ0FBQztRQVF4QixTQUFJLEdBQVcsS0FBSyxDQUFDO0lBd0I2QyxDQUFDO0lBcEIxRSxJQUNJLEdBQUcsQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQ0ksSUFBSSxDQUFDLFFBQWdCO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFNTSxlQUFlO1FBQ3BCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2pELE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVNLHFCQUFxQixDQUFDLE1BQXNCO1FBQ2pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7a0ZBcERVLGlCQUFpQjtzREFBakIsaUJBQWlCOzs7O1FBTDFCLHlCQUNHO1FBQUEsK0JBQTBEO1FBQXBELDBIQUFxQixpQ0FBNkIsSUFBQztRQUFDLGtCQUFZO1FBQWEsaUJBQ3JGO1FBQUEsaUJBQUk7O1FBRkYsMkJBQWtCOztrREFLWixpQkFBaUI7Y0FUN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7O0dBSVQ7YUFDRjs2RkFJUSxNQUFNO2tCQUZaLFdBQVc7bUJBQUMsYUFBYTs7a0JBQ3pCLEtBQUs7WUFJQyxJQUFJO2tCQUZWLFdBQVc7bUJBQUMsV0FBVzs7a0JBQ3ZCLEtBQUs7WUFJQyxLQUFLO2tCQUZYLFdBQVc7bUJBQUMsWUFBWTs7a0JBQ3hCLEtBQUs7WUFJQyxLQUFLO2tCQUZYLFdBQVc7bUJBQUMsWUFBWTs7a0JBQ3hCLEtBQUs7WUFHQyxJQUFJO2tCQURWLFdBQVc7bUJBQUMsV0FBVztZQUdqQixTQUFTO2tCQURmLFdBQVc7bUJBQUMsaUJBQWlCO1lBSTFCLEdBQUc7a0JBRE4sS0FBSztZQVVGLElBQUk7a0JBRFAsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1pY29uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgW2NsYXNzXT1cImljb25OYW1lXCJcbiAgICAgID48c3BhbiAoY2RrT2JzZXJ2ZUNvbnRlbnQpPVwicHJvamVjdENvbnRlbnRDaGFuZ2VkKCRldmVudClcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuXG4gICAgPjwvaT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0ljb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJhaXNlZCcpXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByYWlzZWQ6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnYXR0ci5zaXplJylcbiAgQElucHV0KClcbiAgcHVibGljIHNpemU6IHN0cmluZyA9ICdtZWRpdW0nO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIudGhlbWUnKVxuICBASW5wdXQoKVxuICBwdWJsaWMgdGhlbWU6IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmNvbG9yJylcbiAgQElucHV0KClcbiAgcHVibGljIGNvbG9yOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGU6IHN0cmluZyA9ICdpbWcnO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbCcpXG4gIHB1YmxpYyBhcmlhTGFiZWw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgYWx0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFyaWFMYWJlbCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGFsdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmFyaWFMYWJlbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuYW1lKGljb25OYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmljb25OYW1lID0gYGJoaS0ke2ljb25OYW1lfWA7XG4gIH1cblxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmljb25OYW1lO1xuICB9XG5cbiAgcHVibGljIGljb25OYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCkpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHByb2plY3RDb250ZW50Q2hhbmdlZChyZWNvcmQ6IE11dGF0aW9uUmVjb3JkKSB7XG4gICAgdGhpcy5uYW1lID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIl19