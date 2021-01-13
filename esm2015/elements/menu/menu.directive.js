import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Directive, HostBinding, HostListener, Input } from '@angular/core';
import { BooleanInput } from '../../utils';
import { MenuComponent } from './menu.component';
import { NovoMenuService } from './menu.service';
import * as i0 from "@angular/core";
import * as i1 from "./menu.service";
export class MenuDirective {
    constructor(menuService, cdr) {
        this.menuService = menuService;
        this.cdr = cdr;
        this.waitWhenOpen = false;
        this.capture = false;
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
        if (this.waitWhenOpen && this.menuService.hasOpenMenus()) {
            return;
        }
        if (!this.menu.disabled) {
            this.menuService.show.next({
                menu: this.menu,
                event,
                item: this.menuContext,
            });
            this.isActive = true;
            event.preventDefault();
            event.stopPropagation();
            this.cdr.detectChanges();
        }
    }
}
MenuDirective.ɵfac = function MenuDirective_Factory(t) { return new (t || MenuDirective)(i0.ɵɵdirectiveInject(i1.NovoMenuService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
MenuDirective.ɵdir = i0.ɵɵdefineDirective({ type: MenuDirective, selectors: [["", "menu", ""]], hostVars: 2, hostBindings: function MenuDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function MenuDirective_click_HostBindingHandler($event) { return ctx.onMenuClick($event); });
    } if (rf & 2) {
        i0.ɵɵclassProp("menu-active", ctx.hb_menuActive);
    } }, inputs: { menuContext: "menuContext", menu: "menu", waitWhenOpen: "waitWhenOpen", capture: "capture" } });
__decorate([
    BooleanInput(),
    __metadata("design:type", Boolean)
], MenuDirective.prototype, "waitWhenOpen", void 0);
__decorate([
    BooleanInput(),
    __metadata("design:type", Boolean)
], MenuDirective.prototype, "capture", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuDirective, [{
        type: Directive,
        args: [{
                selector: '[menu]',
            }]
    }], function () { return [{ type: i1.NovoMenuService }, { type: i0.ChangeDetectorRef }]; }, { menuContext: [{
            type: Input
        }], menu: [{
            type: Input
        }], waitWhenOpen: [{
            type: Input
        }], capture: [{
            type: Input
        }], hb_menuActive: [{
            type: HostBinding,
            args: ['class.menu-active']
        }], onMenuClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9tZW51L21lbnUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUVsSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUtqRCxNQUFNLE9BQU8sYUFBYTtJQWN4QixZQUFvQixXQUE0QixFQUFVLEdBQXNCO1FBQTVELGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBWGhELGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekQsYUFBUSxHQUFZLEtBQUssQ0FBQztJQVF5RCxDQUFDO0lBUHBGLElBQ0ksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBTUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFHTSxXQUFXLENBQUMsS0FBaUI7UUFDbEMsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDeEQsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLEtBQUs7Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO2FBQ3ZCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7OzBFQTNDVSxhQUFhO2tEQUFiLGFBQWE7Z0dBQWIsdUJBQW1COzs7O0FBR0w7SUFBZixZQUFZLEVBQUU7O21EQUFzQztBQUNyQztJQUFmLFlBQVksRUFBRTs7OENBQWlDO2tEQUo5QyxhQUFhO2NBSHpCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTthQUNuQjtrR0FFaUIsV0FBVztrQkFBMUIsS0FBSztZQUNVLElBQUk7a0JBQW5CLEtBQUs7WUFDMEIsWUFBWTtrQkFBM0MsS0FBSztZQUMwQixPQUFPO2tCQUF0QyxLQUFLO1lBSUYsYUFBYTtrQkFEaEIsV0FBVzttQkFBQyxtQkFBbUI7WUFxQnpCLFdBQVc7a0JBRGpCLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tICcuL21lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdm9NZW51U2VydmljZSB9IGZyb20gJy4vbWVudS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21lbnVdJyxcbn0pXG5leHBvcnQgY2xhc3MgTWVudURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHVibGljIG1lbnVDb250ZXh0OiBhbnk7XG4gIEBJbnB1dCgpIHB1YmxpYyBtZW51OiBNZW51Q29tcG9uZW50O1xuICBASW5wdXQoKSBAQm9vbGVhbklucHV0KCkgcHVibGljIHdhaXRXaGVuT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBAQm9vbGVhbklucHV0KCkgcHVibGljIGNhcHR1cmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBpc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1lbnUtYWN0aXZlJylcbiAgZ2V0IGhiX21lbnVBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNBY3RpdmU7XG4gIH1cblxuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lbnVTZXJ2aWNlOiBOb3ZvTWVudVNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMubWVudVNlcnZpY2UuY2xvc2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uTWVudUNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMud2FpdFdoZW5PcGVuICYmIHRoaXMubWVudVNlcnZpY2UuaGFzT3Blbk1lbnVzKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm1lbnUuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubWVudVNlcnZpY2Uuc2hvdy5uZXh0KHtcbiAgICAgICAgbWVudTogdGhpcy5tZW51LFxuICAgICAgICBldmVudCxcbiAgICAgICAgaXRlbTogdGhpcy5tZW51Q29udGV4dCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG59XG4iXX0=