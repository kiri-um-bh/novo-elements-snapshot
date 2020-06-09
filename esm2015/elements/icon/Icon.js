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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9pY29uL0ljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBaUIsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVNySSxNQUFNLE9BQU8saUJBQWlCO0lBc0M1QixZQUFtQixPQUFtQixFQUFVLEdBQXNCO1FBQW5ELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWhDL0QsU0FBSSxHQUFXLFFBQVEsQ0FBQztRQVF4QixTQUFJLEdBQVcsS0FBSyxDQUFDO0lBd0I2QyxDQUFDO0lBcEIxRSxJQUNJLEdBQUcsQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQ0ksSUFBSSxDQUFDLFFBQWdCO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFNTSxlQUFlO1FBQ3BCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2pELE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7a0ZBL0NVLGlCQUFpQjtzREFBakIsaUJBQWlCOzs7O1FBSHRCLHlCQUFzQjtRQUFBLDRCQUFNO1FBQUEsa0JBQVk7UUFBYSxpQkFBTztRQUFBLGlCQUFJOztRQUE3RCwyQkFBa0I7O2tEQUdoQixpQkFBaUI7Y0FQN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOztLQUVQO2FBQ0o7O2tCQUVFLFdBQVc7bUJBQUMsYUFBYTs7a0JBQ3pCLEtBQUs7O2tCQUVMLFdBQVc7bUJBQUMsV0FBVzs7a0JBQ3ZCLEtBQUs7O2tCQUVMLFdBQVc7bUJBQUMsWUFBWTs7a0JBQ3hCLEtBQUs7O2tCQUVMLFdBQVc7bUJBQUMsWUFBWTs7a0JBQ3hCLEtBQUs7O2tCQUVMLFdBQVc7bUJBQUMsV0FBVzs7a0JBRXZCLFdBQVc7bUJBQUMsaUJBQWlCOztrQkFHN0IsS0FBSzs7a0JBU0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIEhvc3RCaW5kaW5nLCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1pY29uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxpIFtjbGFzc109XCJpY29uTmFtZVwiPjxzcGFuPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3NwYW4+PC9pPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9JY29uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yYWlzZWQnKVxuICBASW5wdXQoKVxuICBwdWJsaWMgcmFpc2VkOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuc2l6ZScpXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaXplOiBzdHJpbmcgPSAnbWVkaXVtJztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRoZW1lJylcbiAgQElucHV0KClcbiAgcHVibGljIHRoZW1lOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnYXR0ci5jb2xvcicpXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlOiBzdHJpbmcgPSAnaW1nJztcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGFiZWwnKVxuICBwdWJsaWMgYXJpYUxhYmVsOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGFsdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5hcmlhTGFiZWwgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBhbHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5hcmlhTGFiZWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbmFtZShpY29uTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pY29uTmFtZSA9IGBiaGktJHtpY29uTmFtZX1gO1xuICB9XG5cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pY29uTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBpY29uTmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19