import { Component, ElementRef, Input, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
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
}
NovoIconComponent.ɵfac = function NovoIconComponent_Factory(t) { return new (t || NovoIconComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
NovoIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NovoIconComponent, selectors: [["novo-icon"]], hostVars: 6, hostBindings: function NovoIconComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("raised", ctx.raised)("size", ctx.size)("theme", ctx.theme)("color", ctx.color)("role", ctx.role)("aria-label", ctx.ariaLabel);
    } }, inputs: { raised: "raised", size: "size", theme: "theme", color: "color", alt: "alt", name: "name" }, ngContentSelectors: _c0, decls: 3, vars: 2, template: function NovoIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "i");
        i0.ɵɵelementStart(1, "span");
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap(ctx.iconName);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoIconComponent, [{
        type: Component,
        args: [{
                selector: 'novo-icon',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
        <i [class]="iconName"><span><ng-content></ng-content></span></i>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9pY29uL0ljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBaUIsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVNySSxNQUFNLE9BQU8saUJBQWlCO0lBc0M1QixZQUFtQixPQUFtQixFQUFVLEdBQXNCO1FBQW5ELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWhDL0QsU0FBSSxHQUFXLFFBQVEsQ0FBQztRQVF4QixTQUFJLEdBQVcsS0FBSyxDQUFDO0lBd0I2QyxDQUFDO0lBcEIxRSxJQUNJLEdBQUcsQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQ0ksSUFBSSxDQUFDLFFBQWdCO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFNTSxlQUFlO1FBQ3BCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2pELE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7a0ZBL0NVLGlCQUFpQjtzREFBakIsaUJBQWlCOzs7O1FBSHRCLHlCQUFzQjtRQUFBLDRCQUFNO1FBQUEsa0JBQVk7UUFBYSxpQkFBTztRQUFBLGlCQUFJOztRQUE3RCwyQkFBa0I7O2tEQUdoQixpQkFBaUI7Y0FQN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOztLQUVQO2FBQ0o7NkZBSVEsTUFBTTtrQkFGWixXQUFXO21CQUFDLGFBQWE7O2tCQUN6QixLQUFLO1lBSUMsSUFBSTtrQkFGVixXQUFXO21CQUFDLFdBQVc7O2tCQUN2QixLQUFLO1lBSUMsS0FBSztrQkFGWCxXQUFXO21CQUFDLFlBQVk7O2tCQUN4QixLQUFLO1lBSUMsS0FBSztrQkFGWCxXQUFXO21CQUFDLFlBQVk7O2tCQUN4QixLQUFLO1lBR0MsSUFBSTtrQkFEVixXQUFXO21CQUFDLFdBQVc7WUFHakIsU0FBUztrQkFEZixXQUFXO21CQUFDLGlCQUFpQjtZQUkxQixHQUFHO2tCQUROLEtBQUs7WUFVRixJQUFJO2tCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0QmluZGluZywgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8taWNvbicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aSBbY2xhc3NdPVwiaWNvbk5hbWVcIj48c3Bhbj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPjwvaT5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucmFpc2VkJylcbiAgQElucHV0KClcbiAgcHVibGljIHJhaXNlZDogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnNpemUnKVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2l6ZTogc3RyaW5nID0gJ21lZGl1bSc7XG4gIEBIb3N0QmluZGluZygnYXR0ci50aGVtZScpXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0aGVtZTogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuY29sb3InKVxuICBASW5wdXQoKVxuICBwdWJsaWMgY29sb3I6IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZTogc3RyaW5nID0gJ2ltZyc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWxhYmVsJylcbiAgcHVibGljIGFyaWFMYWJlbDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBhbHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuYXJpYUxhYmVsID0gdmFsdWU7XG4gIH1cblxuICBnZXQgYWx0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYXJpYUxhYmVsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG5hbWUoaWNvbk5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuaWNvbk5hbWUgPSBgYmhpLSR7aWNvbk5hbWV9YDtcbiAgfVxuXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbk5hbWU7XG4gIH1cblxuICBwdWJsaWMgaWNvbk5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==