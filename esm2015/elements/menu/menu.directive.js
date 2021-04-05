import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { BooleanInput } from '../../utils';
import { MenuComponent } from './menu.component';
import { NovoMenuService } from './menu.service';
import * as i0 from "@angular/core";
import * as i1 from "./menu.service";
export class MenuDirective {
    constructor(element, menuService, cdr) {
        this.element = element;
        this.menuService = menuService;
        this.cdr = cdr;
        this.waitWhenOpen = false;
        this.capture = false;
        this.anchor = false;
        this.trigger = 'click';
        this.isActive = false;
    }
    get hb_menuActive() {
        return this.isActive;
    }
    ngOnInit() {
        this.subscription = this.menuService.close.subscribe(() => {
            this.isActive = false;
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        this.isActive = false;
        this.subscription.unsubscribe();
    }
    onMenuClick(event) {
        if (this.trigger === 'click' && event.button !== 0) {
            return;
        }
        else if (this.trigger === 'contextmenu' && event.button !== 2) {
            return;
        }
        if (this.waitWhenOpen && this.menuService.hasOpenMenus()) {
            return;
        }
        if (!this.menu.disabled) {
            this.menuService.show.next({
                menu: this.menu,
                event,
                item: this.menuContext,
                anchorElement: this.anchor ? this.element.nativeElement : null,
            });
            this.isActive = true;
            event.preventDefault();
            event.stopPropagation();
            this.cdr.detectChanges();
        }
    }
}
MenuDirective.ɵfac = function MenuDirective_Factory(t) { return new (t || MenuDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NovoMenuService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
MenuDirective.ɵdir = i0.ɵɵdefineDirective({ type: MenuDirective, selectors: [["", "menu", ""]], hostVars: 2, hostBindings: function MenuDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function MenuDirective_click_HostBindingHandler($event) { return ctx.onMenuClick($event); })("contextmenu", function MenuDirective_contextmenu_HostBindingHandler($event) { return ctx.onMenuClick($event); });
    } if (rf & 2) {
        i0.ɵɵclassProp("menu-active", ctx.hb_menuActive);
    } }, inputs: { menuContext: "menuContext", menu: "menu", waitWhenOpen: "waitWhenOpen", capture: "capture", anchor: "anchor", trigger: "trigger" } });
__decorate([
    BooleanInput(),
    __metadata("design:type", Boolean)
], MenuDirective.prototype, "waitWhenOpen", void 0);
__decorate([
    BooleanInput(),
    __metadata("design:type", Boolean)
], MenuDirective.prototype, "capture", void 0);
__decorate([
    BooleanInput(),
    __metadata("design:type", Boolean)
], MenuDirective.prototype, "anchor", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuDirective, [{
        type: Directive,
        args: [{
                selector: '[menu]',
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NovoMenuService }, { type: i0.ChangeDetectorRef }]; }, { menuContext: [{
            type: Input
        }], menu: [{
            type: Input
        }], waitWhenOpen: [{
            type: Input
        }], capture: [{
            type: Input
        }], anchor: [{
            type: Input
        }], trigger: [{
            type: Input
        }], hb_menuActive: [{
            type: HostBinding,
            args: ['class.menu-active']
        }], onMenuClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }, {
            type: HostListener,
            args: ['contextmenu', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9tZW51L21lbnUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFOUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLakQsTUFBTSxPQUFPLGFBQWE7SUFnQnhCLFlBQW9CLE9BQW1CLEVBQVUsV0FBNEIsRUFBVSxHQUFzQjtRQUF6RixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFiN0UsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hDLFlBQU8sR0FBNEIsT0FBTyxDQUFDO1FBRTNELGFBQVEsR0FBWSxLQUFLLENBQUM7SUFRc0YsQ0FBQztJQVBqSCxJQUNJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQU1ELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBSU0sV0FBVyxDQUFDLEtBQWlCO1FBQ2xDLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEQsT0FBTztTQUNSO2FBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLGFBQWEsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMvRCxPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUN4RCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN6QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsS0FBSztnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQ3RCLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSTthQUMvRCxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOzswRUFyRFUsYUFBYTtrREFBYixhQUFhO2dHQUFiLHVCQUFtQiwyRkFBbkIsdUJBQW1COzs7O0FBR0w7SUFBZixZQUFZLEVBQUU7O21EQUFzQztBQUNyQztJQUFmLFlBQVksRUFBRTs7OENBQWlDO0FBQ2hDO0lBQWYsWUFBWSxFQUFFOzs2Q0FBZ0M7a0RBTDdDLGFBQWE7Y0FIekIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2FBQ25COzJIQUVpQixXQUFXO2tCQUExQixLQUFLO1lBQ1UsSUFBSTtrQkFBbkIsS0FBSztZQUMwQixZQUFZO2tCQUEzQyxLQUFLO1lBQzBCLE9BQU87a0JBQXRDLEtBQUs7WUFDMEIsTUFBTTtrQkFBckMsS0FBSztZQUNVLE9BQU87a0JBQXRCLEtBQUs7WUFJRixhQUFhO2tCQURoQixXQUFXO21CQUFDLG1CQUFtQjtZQXNCekIsV0FBVztrQkFGakIsWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tCQUNoQyxZQUFZO21CQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3ZvTWVudVNlcnZpY2UgfSBmcm9tICcuL21lbnUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZW51XScsXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHB1YmxpYyBtZW51Q29udGV4dDogYW55O1xuICBASW5wdXQoKSBwdWJsaWMgbWVudTogTWVudUNvbXBvbmVudDtcbiAgQElucHV0KCkgQEJvb2xlYW5JbnB1dCgpIHB1YmxpYyB3YWl0V2hlbk9wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQEJvb2xlYW5JbnB1dCgpIHB1YmxpYyBjYXB0dXJlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBCb29sZWFuSW5wdXQoKSBwdWJsaWMgYW5jaG9yOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyB0cmlnZ2VyOiAnY2xpY2snIHwgJ2NvbnRleHRtZW51JyA9ICdjbGljayc7XG5cbiAgaXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tZW51LWFjdGl2ZScpXG4gIGdldCBoYl9tZW51QWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmlzQWN0aXZlO1xuICB9XG5cbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIG1lbnVTZXJ2aWNlOiBOb3ZvTWVudVNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMubWVudVNlcnZpY2UuY2xvc2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignY29udGV4dG1lbnUnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25NZW51Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyID09PSAnY2xpY2snICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodGhpcy50cmlnZ2VyID09PSAnY29udGV4dG1lbnUnICYmIGV2ZW50LmJ1dHRvbiAhPT0gMikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLndhaXRXaGVuT3BlbiAmJiB0aGlzLm1lbnVTZXJ2aWNlLmhhc09wZW5NZW51cygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5tZW51LmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm1lbnVTZXJ2aWNlLnNob3cubmV4dCh7XG4gICAgICAgIG1lbnU6IHRoaXMubWVudSxcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGl0ZW06IHRoaXMubWVudUNvbnRleHQsXG4gICAgICAgIGFuY2hvckVsZW1lbnQ6IHRoaXMuYW5jaG9yID8gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiBudWxsLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==