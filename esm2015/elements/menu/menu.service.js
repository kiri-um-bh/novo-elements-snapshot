import { Overlay, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ElementRef, Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { MenuContentComponent } from './menu-content.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class NovoMenuService {
    constructor(overlay, scrollStrategy) {
        this.overlay = overlay;
        this.scrollStrategy = scrollStrategy;
        this.isDestroyingLeafMenu = false;
        this.show = new Subject();
        this.triggerClose = new Subject();
        this.close = new Subject();
        this.overlays = [];
        this.fakeElement = {
            getBoundingClientRect: () => ({
                bottom: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                width: 0,
            }),
        };
    }
    openMenu(context) {
        const { anchorElement, event, parentMenu } = context;
        if (!parentMenu) {
            const mouseEvent = event;
            this.fakeElement.getBoundingClientRect = () => ({
                bottom: mouseEvent.clientY,
                height: 0,
                left: mouseEvent.clientX,
                right: mouseEvent.clientX,
                top: mouseEvent.clientY,
                width: 0,
            });
            this.closeAllMenus({ eventType: 'cancel', event });
            const positionStrategy = this.overlay
                .position()
                .connectedTo(new ElementRef(anchorElement || this.fakeElement), { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' })
                .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
                .withFallbackPosition({ originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' })
                .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
                .withFallbackPosition({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' })
                .withFallbackPosition({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' });
            this.overlays = [
                this.overlay.create({
                    positionStrategy,
                    panelClass: 'novo-menu',
                    scrollStrategy: this.scrollStrategy.close(),
                }),
            ];
            this.attachMenu(this.overlays[0], context);
        }
        else {
            const positionStrategy = this.overlay
                .position()
                .connectedTo(new ElementRef(event ? event.target : anchorElement), { originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' })
                .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
                .withFallbackPosition({ originX: 'end', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' })
                .withFallbackPosition({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' });
            const newOverlay = this.overlay.create({
                positionStrategy,
                panelClass: 'novo-menu',
                scrollStrategy: this.scrollStrategy.close(),
            });
            // this.destroySubMenus(parentMenu);
            this.overlays = this.overlays.concat(newOverlay);
            this.attachMenu(newOverlay, context);
        }
    }
    attachMenu(overlay, context) {
        const { event, item, menu, menuItems, menuClass, menuTrigger } = context;
        const menuContent = overlay.attach(new ComponentPortal(MenuContentComponent));
        menuContent.instance.event = event;
        menuContent.instance.item = item;
        menuContent.instance.menu = menu;
        menuContent.instance.menuItems = menuItems;
        menuContent.instance.overlay = overlay;
        menuContent.instance.isLeaf = true;
        menuContent.instance.menuClass = menuClass;
        overlay.menu = menuContent.instance;
        if (!!menuTrigger) {
            menuTrigger.menuContent = menuContent.instance;
        }
        const subscriptions = new Subscription();
        // subscriptions.add(
        //   menuContent.instance.execute
        //     .asObservable()
        //     .subscribe((executeEvent) => this.closeAllMenus({ eventType: 'execute', ...executeEvent })),
        // );
        subscriptions.add(menuContent.instance.closeAllMenus
            .asObservable()
            .subscribe((closeAllEvent) => this.closeAllMenus(Object.assign({ eventType: 'cancel' }, closeAllEvent))));
        subscriptions.add(menuContent.instance.closeLeafMenu.asObservable().subscribe((closeLeafMenuEvent) => this.destroyLeafMenu(closeLeafMenuEvent)));
        subscriptions.add(menuContent.instance.openSubMenu.asObservable().subscribe((subMenuEvent) => {
            this.destroySubMenus(menuContent.instance);
            if (!subMenuEvent.menu) {
                menuContent.instance.isLeaf = true;
                return;
            }
            menuContent.instance.isLeaf = false;
            this.show.next(subMenuEvent);
        }));
        menuContent.onDestroy(() => {
            // menuItems.forEach((menuItem) => (menuItem.isActive = false));
            subscriptions.unsubscribe();
        });
        menuContent.changeDetectorRef.detectChanges();
    }
    closeAllMenus(closeEvent) {
        if (this.overlays) {
            this.close.next(closeEvent);
            this.overlays.forEach((overlay, index) => {
                overlay.detach();
                overlay.dispose();
            });
        }
        this.overlays = [];
    }
    hasOpenMenus() {
        var _a;
        return ((_a = this.overlays) === null || _a === void 0 ? void 0 : _a.length) > 0;
    }
    getLastAttachedOverlay() {
        let overlay = this.overlays[this.overlays.length - 1];
        while (this.overlays.length > 1 && overlay && !overlay.hasAttached()) {
            overlay.detach();
            overlay.dispose();
            this.overlays = this.overlays.slice(0, -1);
            overlay = this.overlays[this.overlays.length - 1];
        }
        return overlay;
    }
    destroyLeafMenu({ exceptRootMenu, event } = {}) {
        if (this.isDestroyingLeafMenu) {
            return;
        }
        this.isDestroyingLeafMenu = true;
        setTimeout(() => {
            const overlay = this.getLastAttachedOverlay();
            if (this.overlays.length > 1 && overlay) {
                overlay.detach();
                overlay.dispose();
            }
            if (!exceptRootMenu && this.overlays.length > 0 && overlay) {
                this.close.next({ eventType: 'cancel', event });
                overlay.detach();
                overlay.dispose();
            }
            const newLeaf = this.getLastAttachedOverlay();
            if (newLeaf) {
                newLeaf.menu.isLeaf = true;
            }
            this.isDestroyingLeafMenu = false;
        });
    }
    destroySubMenus(menu) {
        const overlay = menu.overlay;
        const index = this.overlays.indexOf(overlay);
        this.overlays.slice(index + 1).forEach((subMenuOverlay) => {
            subMenuOverlay.detach();
            subMenuOverlay.dispose();
        });
    }
    isLeafMenu(menuContent) {
        const overlay = this.getLastAttachedOverlay();
        return menuContent.overlay === overlay;
    }
}
NovoMenuService.ɵfac = function NovoMenuService_Factory(t) { return new (t || NovoMenuService)(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i1.ScrollStrategyOptions)); };
NovoMenuService.ɵprov = i0.ɵɵdefineInjectable({ token: NovoMenuService, factory: NovoMenuService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoMenuService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.Overlay }, { type: i1.ScrollStrategyOptions }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL21lbnUvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQWMscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFnQixVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUF1Q2hFLE1BQU0sT0FBTyxlQUFlO0lBb0IxQixZQUFvQixPQUFnQixFQUFVLGNBQXFDO1FBQS9ELFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFuQjVFLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUU3QixTQUFJLEdBQTZCLElBQUksT0FBTyxFQUFtQixDQUFDO1FBQ2hFLGlCQUFZLEdBQWtDLElBQUksT0FBTyxFQUFFLENBQUM7UUFDNUQsVUFBSyxHQUE0QixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRzlDLGFBQVEsR0FBaUIsRUFBRSxDQUFDO1FBQzVCLGdCQUFXLEdBQVE7WUFDekIscUJBQXFCLEVBQUUsR0FBZSxFQUFFLENBQUMsQ0FBQztnQkFDeEMsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsR0FBRyxFQUFFLENBQUM7Z0JBQ04sS0FBSyxFQUFFLENBQUM7YUFD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SyxFQUFFLENBQUMsQ0FBQztnQkFDaEQsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNqQixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbkI7WUFFRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUM5QyxJQUFJLE9BQU8sRUFBRTtnQkFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDNUI7WUFFRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLGVBQWUsQ0FBQyxJQUEwQjtRQUMvQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUN4RCxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDeEIsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLFVBQVUsQ0FBQyxXQUFpQztRQUNqRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QyxPQUFPLFdBQVcsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDO0lBQ3pDLENBQUM7OzhFQWhNVSxlQUFlO3VEQUFmLGVBQWUsV0FBZixlQUFlLG1CQURGLE1BQU07a0RBQ25CLGVBQWU7Y0FEM0IsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlSZWYsIFNjcm9sbFN0cmF0ZWd5T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1lbnVDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51LWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB0eXBlIHsgTWVudUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL21lbnUtaXRlbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHR5cGUgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgdHlwZSB7IE1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL21lbnUuZGlyZWN0aXZlJztcblxuZXhwb3J0IGludGVyZmFjZSBJTWVudUNsaWNrRXZlbnQge1xuICBhbmNob3JFbGVtZW50PzogRWxlbWVudCB8IEV2ZW50VGFyZ2V0O1xuICBtZW51PzogTWVudUNvbXBvbmVudDtcbiAgZXZlbnQ/OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudDtcbiAgcGFyZW50TWVudT86IE1lbnVDb21wb25lbnQ7XG4gIG1lbnVUcmlnZ2VyPzogTWVudURpcmVjdGl2ZTtcbiAgaXRlbTogYW55O1xuICBhY3RpdmVNZW51SXRlbUluZGV4PzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBJTWVudUNvbnRleHQgZXh0ZW5kcyBJTWVudUNsaWNrRXZlbnQge1xuICBtZW51SXRlbXM6IE1lbnVJdGVtRGlyZWN0aXZlW107XG4gIG1lbnVDbGFzczogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBDbG9zZUxlYWZNZW51RXZlbnQge1xuICBleGNlcHRSb290TWVudT86IGJvb2xlYW47XG4gIGV2ZW50PzogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIE92ZXJsYXlSZWZXaXRoTWVudSBleHRlbmRzIE92ZXJsYXlSZWYge1xuICBtZW51PzogTWVudUNvbnRlbnRDb21wb25lbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuY2VsTWVudUV2ZW50IHtcbiAgZXZlbnRUeXBlOiAnY2FuY2VsJztcbiAgZXZlbnQ/OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRXhlY3V0ZU1lbnVFdmVudCB7XG4gIGV2ZW50VHlwZTogJ2V4ZWN1dGUnO1xuICBldmVudD86IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50O1xuICBpdGVtOiBhbnk7XG4gIG1lbnVJdGVtOiBNZW51SXRlbURpcmVjdGl2ZTtcbn1cbmV4cG9ydCB0eXBlIENsb3NlTWVudUV2ZW50ID0gRXhlY3V0ZU1lbnVFdmVudCB8IENhbmNlbE1lbnVFdmVudDtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBOb3ZvTWVudVNlcnZpY2Uge1xuICBwdWJsaWMgaXNEZXN0cm95aW5nTGVhZk1lbnUgPSBmYWxzZTtcblxuICBwdWJsaWMgc2hvdzogU3ViamVjdDxJTWVudUNsaWNrRXZlbnQ+ID0gbmV3IFN1YmplY3Q8SU1lbnVDbGlja0V2ZW50PigpO1xuICBwdWJsaWMgdHJpZ2dlckNsb3NlOiBTdWJqZWN0PE1lbnVDb250ZW50Q29tcG9uZW50PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBjbG9zZTogU3ViamVjdDxDbG9zZU1lbnVFdmVudD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgbWVudUNvbnRlbnQ6IENvbXBvbmVudFJlZjxNZW51Q29udGVudENvbXBvbmVudD47XG4gIHByaXZhdGUgb3ZlcmxheXM6IE92ZXJsYXlSZWZbXSA9IFtdO1xuICBwcml2YXRlIGZha2VFbGVtZW50OiBhbnkgPSB7XG4gICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiAoKTogQ2xpZW50UmVjdCA9PiAoe1xuICAgICAgYm90dG9tOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgICAgd2lkdGg6IDAsXG4gICAgfSksXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIHNjcm9sbFN0cmF0ZWd5OiBTY3JvbGxTdHJhdGVneU9wdGlvbnMpIHt9XG5cbiAgcHVibGljIG9wZW5NZW51KGNvbnRleHQ6IElNZW51Q29udGV4dCkge1xuICAgIGNvbnN0IHsgYW5jaG9yRWxlbWVudCwgZXZlbnQsIHBhcmVudE1lbnUgfSA9IGNvbnRleHQ7XG5cbiAgICBpZiAoIXBhcmVudE1lbnUpIHtcbiAgICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCBhcyBNb3VzZUV2ZW50O1xuICAgICAgdGhpcy5mYWtlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPSAoKTogQ2xpZW50UmVjdCA9PiAoe1xuICAgICAgICBib3R0b206IG1vdXNlRXZlbnQuY2xpZW50WSxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBsZWZ0OiBtb3VzZUV2ZW50LmNsaWVudFgsXG4gICAgICAgIHJpZ2h0OiBtb3VzZUV2ZW50LmNsaWVudFgsXG4gICAgICAgIHRvcDogbW91c2VFdmVudC5jbGllbnRZLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jbG9zZUFsbE1lbnVzKHsgZXZlbnRUeXBlOiAnY2FuY2VsJywgZXZlbnQgfSk7XG4gICAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XG4gICAgICAgIC5wb3NpdGlvbigpXG4gICAgICAgIC5jb25uZWN0ZWRUbyhcbiAgICAgICAgICBuZXcgRWxlbWVudFJlZihhbmNob3JFbGVtZW50IHx8IHRoaXMuZmFrZUVsZW1lbnQpLFxuICAgICAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSxcbiAgICAgICAgICB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSxcbiAgICAgICAgKVxuICAgICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSlcbiAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KVxuICAgICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICd0b3AnIH0pXG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAnY2VudGVyJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2NlbnRlcicgfSlcbiAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2NlbnRlcicgfSwgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAnY2VudGVyJyB9KTtcbiAgICAgIHRoaXMub3ZlcmxheXMgPSBbXG4gICAgICAgIHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuICAgICAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXG4gICAgICAgICAgcGFuZWxDbGFzczogJ25vdm8tbWVudScsXG4gICAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMuc2Nyb2xsU3RyYXRlZ3kuY2xvc2UoKSxcbiAgICAgICAgfSksXG4gICAgICBdO1xuICAgICAgdGhpcy5hdHRhY2hNZW51KHRoaXMub3ZlcmxheXNbMF0sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XG4gICAgICAgIC5wb3NpdGlvbigpXG4gICAgICAgIC5jb25uZWN0ZWRUbyhcbiAgICAgICAgICBuZXcgRWxlbWVudFJlZihldmVudCA/IGV2ZW50LnRhcmdldCA6IGFuY2hvckVsZW1lbnQpLFxuICAgICAgICAgIHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICd0b3AnIH0sXG4gICAgICAgICAgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0sXG4gICAgICAgIClcbiAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAndG9wJyB9KVxuICAgICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pXG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSk7XG4gICAgICBjb25zdCBuZXdPdmVybGF5ID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7XG4gICAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXG4gICAgICAgIHBhbmVsQ2xhc3M6ICdub3ZvLW1lbnUnLFxuICAgICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5zY3JvbGxTdHJhdGVneS5jbG9zZSgpLFxuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLmRlc3Ryb3lTdWJNZW51cyhwYXJlbnRNZW51KTtcbiAgICAgIHRoaXMub3ZlcmxheXMgPSB0aGlzLm92ZXJsYXlzLmNvbmNhdChuZXdPdmVybGF5KTtcbiAgICAgIHRoaXMuYXR0YWNoTWVudShuZXdPdmVybGF5LCBjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXR0YWNoTWVudShvdmVybGF5OiBPdmVybGF5UmVmLCBjb250ZXh0OiBJTWVudUNvbnRleHQpOiB2b2lkIHtcbiAgICBjb25zdCB7IGV2ZW50LCBpdGVtLCBtZW51LCBtZW51SXRlbXMsIG1lbnVDbGFzcywgbWVudVRyaWdnZXIgfSA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBtZW51Q29udGVudDogQ29tcG9uZW50UmVmPE1lbnVDb250ZW50Q29tcG9uZW50PiA9IG92ZXJsYXkuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwoTWVudUNvbnRlbnRDb21wb25lbnQpKTtcbiAgICBtZW51Q29udGVudC5pbnN0YW5jZS5ldmVudCA9IGV2ZW50O1xuICAgIG1lbnVDb250ZW50Lmluc3RhbmNlLml0ZW0gPSBpdGVtO1xuICAgIG1lbnVDb250ZW50Lmluc3RhbmNlLm1lbnUgPSBtZW51O1xuICAgIG1lbnVDb250ZW50Lmluc3RhbmNlLm1lbnVJdGVtcyA9IG1lbnVJdGVtcztcbiAgICBtZW51Q29udGVudC5pbnN0YW5jZS5vdmVybGF5ID0gb3ZlcmxheTtcbiAgICBtZW51Q29udGVudC5pbnN0YW5jZS5pc0xlYWYgPSB0cnVlO1xuICAgIG1lbnVDb250ZW50Lmluc3RhbmNlLm1lbnVDbGFzcyA9IG1lbnVDbGFzcztcbiAgICAob3ZlcmxheSBhcyBPdmVybGF5UmVmV2l0aE1lbnUpLm1lbnUgPSBtZW51Q29udGVudC5pbnN0YW5jZTtcblxuICAgIGlmICghIW1lbnVUcmlnZ2VyKSB7XG4gICAgICBtZW51VHJpZ2dlci5tZW51Q29udGVudCA9IG1lbnVDb250ZW50Lmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICAvLyBzdWJzY3JpcHRpb25zLmFkZChcbiAgICAvLyAgIG1lbnVDb250ZW50Lmluc3RhbmNlLmV4ZWN1dGVcbiAgICAvLyAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgLy8gICAgIC5zdWJzY3JpYmUoKGV4ZWN1dGVFdmVudCkgPT4gdGhpcy5jbG9zZUFsbE1lbnVzKHsgZXZlbnRUeXBlOiAnZXhlY3V0ZScsIC4uLmV4ZWN1dGVFdmVudCB9KSksXG4gICAgLy8gKTtcbiAgICBzdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIG1lbnVDb250ZW50Lmluc3RhbmNlLmNsb3NlQWxsTWVudXNcbiAgICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgIC5zdWJzY3JpYmUoKGNsb3NlQWxsRXZlbnQpID0+IHRoaXMuY2xvc2VBbGxNZW51cyh7IGV2ZW50VHlwZTogJ2NhbmNlbCcsIC4uLmNsb3NlQWxsRXZlbnQgfSkpLFxuICAgICk7XG4gICAgc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICBtZW51Q29udGVudC5pbnN0YW5jZS5jbG9zZUxlYWZNZW51LmFzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoY2xvc2VMZWFmTWVudUV2ZW50KSA9PiB0aGlzLmRlc3Ryb3lMZWFmTWVudShjbG9zZUxlYWZNZW51RXZlbnQpKSxcbiAgICApO1xuICAgIHN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgbWVudUNvbnRlbnQuaW5zdGFuY2Uub3BlblN1Yk1lbnUuYXNPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKChzdWJNZW51RXZlbnQ6IElNZW51Q29udGV4dCkgPT4ge1xuICAgICAgICB0aGlzLmRlc3Ryb3lTdWJNZW51cyhtZW51Q29udGVudC5pbnN0YW5jZSk7XG4gICAgICAgIGlmICghc3ViTWVudUV2ZW50Lm1lbnUpIHtcbiAgICAgICAgICBtZW51Q29udGVudC5pbnN0YW5jZS5pc0xlYWYgPSB0cnVlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBtZW51Q29udGVudC5pbnN0YW5jZS5pc0xlYWYgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93Lm5leHQoc3ViTWVudUV2ZW50KTtcbiAgICAgIH0pLFxuICAgICk7XG4gICAgbWVudUNvbnRlbnQub25EZXN0cm95KCgpID0+IHtcbiAgICAgIC8vIG1lbnVJdGVtcy5mb3JFYWNoKChtZW51SXRlbSkgPT4gKG1lbnVJdGVtLmlzQWN0aXZlID0gZmFsc2UpKTtcbiAgICAgIHN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgICB9KTtcbiAgICBtZW51Q29udGVudC5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VBbGxNZW51cyhjbG9zZUV2ZW50OiBDbG9zZU1lbnVFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlzKSB7XG4gICAgICB0aGlzLmNsb3NlLm5leHQoY2xvc2VFdmVudCk7XG4gICAgICB0aGlzLm92ZXJsYXlzLmZvckVhY2goKG92ZXJsYXksIGluZGV4KSA9PiB7XG4gICAgICAgIG92ZXJsYXkuZGV0YWNoKCk7XG4gICAgICAgIG92ZXJsYXkuZGlzcG9zZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMub3ZlcmxheXMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBoYXNPcGVuTWVudXMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheXM/Lmxlbmd0aCA+IDA7XG4gIH1cblxuICBwdWJsaWMgZ2V0TGFzdEF0dGFjaGVkT3ZlcmxheSgpOiBPdmVybGF5UmVmV2l0aE1lbnUge1xuICAgIGxldCBvdmVybGF5OiBPdmVybGF5UmVmID0gdGhpcy5vdmVybGF5c1t0aGlzLm92ZXJsYXlzLmxlbmd0aCAtIDFdO1xuICAgIHdoaWxlICh0aGlzLm92ZXJsYXlzLmxlbmd0aCA+IDEgJiYgb3ZlcmxheSAmJiAhb3ZlcmxheS5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICBvdmVybGF5LmRldGFjaCgpO1xuICAgICAgb3ZlcmxheS5kaXNwb3NlKCk7XG4gICAgICB0aGlzLm92ZXJsYXlzID0gdGhpcy5vdmVybGF5cy5zbGljZSgwLCAtMSk7XG4gICAgICBvdmVybGF5ID0gdGhpcy5vdmVybGF5c1t0aGlzLm92ZXJsYXlzLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95TGVhZk1lbnUoeyBleGNlcHRSb290TWVudSwgZXZlbnQgfTogQ2xvc2VMZWFmTWVudUV2ZW50ID0ge30pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0Rlc3Ryb3lpbmdMZWFmTWVudSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzRGVzdHJveWluZ0xlYWZNZW51ID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3Qgb3ZlcmxheSA9IHRoaXMuZ2V0TGFzdEF0dGFjaGVkT3ZlcmxheSgpO1xuICAgICAgaWYgKHRoaXMub3ZlcmxheXMubGVuZ3RoID4gMSAmJiBvdmVybGF5KSB7XG4gICAgICAgIG92ZXJsYXkuZGV0YWNoKCk7XG4gICAgICAgIG92ZXJsYXkuZGlzcG9zZSgpO1xuICAgICAgfVxuICAgICAgaWYgKCFleGNlcHRSb290TWVudSAmJiB0aGlzLm92ZXJsYXlzLmxlbmd0aCA+IDAgJiYgb3ZlcmxheSkge1xuICAgICAgICB0aGlzLmNsb3NlLm5leHQoeyBldmVudFR5cGU6ICdjYW5jZWwnLCBldmVudCB9KTtcbiAgICAgICAgb3ZlcmxheS5kZXRhY2goKTtcbiAgICAgICAgb3ZlcmxheS5kaXNwb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld0xlYWYgPSB0aGlzLmdldExhc3RBdHRhY2hlZE92ZXJsYXkoKTtcbiAgICAgIGlmIChuZXdMZWFmKSB7XG4gICAgICAgIG5ld0xlYWYubWVudS5pc0xlYWYgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmlzRGVzdHJveWluZ0xlYWZNZW51ID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveVN1Yk1lbnVzKG1lbnU6IE1lbnVDb250ZW50Q29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IG1lbnUub3ZlcmxheTtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMub3ZlcmxheXMuaW5kZXhPZihvdmVybGF5KTtcbiAgICB0aGlzLm92ZXJsYXlzLnNsaWNlKGluZGV4ICsgMSkuZm9yRWFjaCgoc3ViTWVudU92ZXJsYXkpID0+IHtcbiAgICAgIHN1Yk1lbnVPdmVybGF5LmRldGFjaCgpO1xuICAgICAgc3ViTWVudU92ZXJsYXkuZGlzcG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGlzTGVhZk1lbnUobWVudUNvbnRlbnQ6IE1lbnVDb250ZW50Q29tcG9uZW50KTogYm9vbGVhbiB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IHRoaXMuZ2V0TGFzdEF0dGFjaGVkT3ZlcmxheSgpO1xuICAgIHJldHVybiBtZW51Q29udGVudC5vdmVybGF5ID09PSBvdmVybGF5O1xuICB9XG59XG4iXX0=