import { ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Inject, Input, Optional, Output, QueryList, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { MenuItemDirective } from './menu-item.directive';
import { NovoMenuService } from './menu.service';
import { MENU_OPTIONS } from './menu.tokens';
import * as i0 from "@angular/core";
import * as i1 from "./menu.service";
const _c0 = ["menu"];
export class MenuComponent {
    constructor(menuService, changeDetector, elementRef, options) {
        this.menuService = menuService;
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.options = options;
        this.menuClass = '';
        this.autoFocus = false;
        this.disabled = false;
        this.close = new EventEmitter();
        this.open = new EventEmitter();
        this.visibleMenuItems = [];
        this.links = [];
        this.subscription = new Subscription();
        if (options) {
            this.autoFocus = options.autoFocus;
        }
        this.subscription.add(menuService.show.subscribe((menuEvent) => {
            this.onMenuEvent(menuEvent);
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onMenuEvent(menuEvent) {
        if (this.disabled) {
            return;
        }
        const { menu, event, item } = menuEvent;
        if (menu && menu !== this) {
            return;
        }
        this.event = event;
        this.item = item;
        this.setVisibleMenuItems();
        this.menuService.openMenu(Object.assign(Object.assign({}, menuEvent), { menuItems: this.visibleMenuItems, menuClass: this.menuClass }));
        this.menuService.close
            .asObservable()
            .pipe(first())
            .subscribe((closeEvent) => this.close.emit(closeEvent));
        this.open.next(menuEvent);
    }
    isMenuItemVisible(menuItem) {
        return this.evaluateIfFunction(menuItem.visible);
    }
    setVisibleMenuItems() {
        this.visibleMenuItems = this.menuItems.filter((menuItem) => this.isMenuItemVisible(menuItem));
    }
    evaluateIfFunction(value) {
        if (value instanceof Function) {
            return value(this.item);
        }
        return value;
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(i0.ɵɵdirectiveInject(i1.NovoMenuService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(MENU_OPTIONS, 8)); };
MenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MenuComponent, selectors: [["novo-menu"]], contentQueries: function MenuComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, MenuItemDirective, false);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.menuItems = _t);
    } }, viewQuery: function MenuComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.menuElement = _t.first);
    } }, inputs: { menuClass: "menuClass", autoFocus: "autoFocus", disabled: "disabled" }, outputs: { close: "close", open: "open" }, decls: 0, vars: 0, template: function MenuComponent_Template(rf, ctx) { }, styles: ["\n      .cdk-overlay-container {\n        position: fixed;\n        z-index: 1000;\n        pointer-events: none;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n      .novo-menu.cdk-overlay-pane {\n        position: absolute;\n        pointer-events: auto;\n        box-sizing: border-box;\n      }\n    "], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'novo-menu',
                styles: [
                    `
      .cdk-overlay-container {
        position: fixed;
        z-index: 1000;
        pointer-events: none;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .novo-menu.cdk-overlay-pane {
        position: absolute;
        pointer-events: auto;
        box-sizing: border-box;
      }
    `,
                ],
                template: ``,
            }]
    }], function () { return [{ type: i1.NovoMenuService }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MENU_OPTIONS]
            }] }]; }, { menuClass: [{
            type: Input
        }], autoFocus: [{
            type: Input
        }], disabled: [{
            type: Input
        }], close: [{
            type: Output
        }], open: [{
            type: Output
        }], menuItems: [{
            type: ContentChildren,
            args: [MenuItemDirective]
        }], menuElement: [{
            type: ViewChild,
            args: ['menu']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9tZW51L21lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQW1DLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFpQzdDLE1BQU0sT0FBTyxhQUFhO0lBZXhCLFlBQ1UsV0FBNEIsRUFDNUIsY0FBaUMsRUFDakMsVUFBc0IsRUFHdEIsT0FBcUI7UUFMckIsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQzVCLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNqQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBR3RCLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFwQmYsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNoQixVQUFLLEdBQWlDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekQsU0FBSSxHQUFrQyxJQUFJLFlBQVksRUFBRSxDQUFD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WUFDUixXQUFXO2tCQUFwQyxTQUFTO21CQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9tZW51LWl0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IENsb3NlTWVudUV2ZW50LCBJTWVudUNsaWNrRXZlbnQsIE5vdm9NZW51U2VydmljZSB9IGZyb20gJy4vbWVudS5zZXJ2aWNlJztcbmltcG9ydCB7IE1FTlVfT1BUSU9OUyB9IGZyb20gJy4vbWVudS50b2tlbnMnO1xuaW1wb3J0IHsgSUxpbmtDb25maWcsIElNZW51T3B0aW9ucyB9IGZyb20gJy4vbWVudS50eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW91c2VMb2NhdGlvbiB7XG4gIGxlZnQ/OiBzdHJpbmc7XG4gIG1hcmdpbkxlZnQ/OiBzdHJpbmc7XG4gIG1hcmdpblRvcD86IHN0cmluZztcbiAgdG9wPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICdub3ZvLW1lbnUnLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgLm5vdm8tbWVudS5jZGstb3ZlcmxheS1wYW5lIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxuICB0ZW1wbGF0ZTogYGAsXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwdWJsaWMgbWVudUNsYXNzID0gJyc7XG4gIEBJbnB1dCgpIHB1YmxpYyBhdXRvRm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGRpc2FibGVkID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBwdWJsaWMgY2xvc2U6IEV2ZW50RW1pdHRlcjxDbG9zZU1lbnVFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb3BlbjogRXZlbnRFbWl0dGVyPElNZW51Q2xpY2tFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBDb250ZW50Q2hpbGRyZW4oTWVudUl0ZW1EaXJlY3RpdmUpIHB1YmxpYyBtZW51SXRlbXM6IFF1ZXJ5TGlzdDxNZW51SXRlbURpcmVjdGl2ZT47XG4gIEBWaWV3Q2hpbGQoJ21lbnUnKSBwdWJsaWMgbWVudUVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIHB1YmxpYyB2aXNpYmxlTWVudUl0ZW1zOiBNZW51SXRlbURpcmVjdGl2ZVtdID0gW107XG5cbiAgcHVibGljIGxpbmtzOiBJTGlua0NvbmZpZ1tdID0gW107XG4gIHB1YmxpYyBpdGVtOiBhbnk7XG4gIHB1YmxpYyBldmVudDogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQ7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtZW51U2VydmljZTogTm92b01lbnVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoTUVOVV9PUFRJT05TKVxuICAgIHByaXZhdGUgb3B0aW9uczogSU1lbnVPcHRpb25zLFxuICApIHtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy5hdXRvRm9jdXMgPSBvcHRpb25zLmF1dG9Gb2N1cztcbiAgICB9XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgbWVudVNlcnZpY2Uuc2hvdy5zdWJzY3JpYmUoKG1lbnVFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLm9uTWVudUV2ZW50KG1lbnVFdmVudCk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgb25NZW51RXZlbnQobWVudUV2ZW50OiBJTWVudUNsaWNrRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IG1lbnUsIGV2ZW50LCBpdGVtIH0gPSBtZW51RXZlbnQ7XG4gICAgaWYgKG1lbnUgJiYgbWVudSAhPT0gdGhpcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gICAgdGhpcy5pdGVtID0gaXRlbTtcbiAgICB0aGlzLnNldFZpc2libGVNZW51SXRlbXMoKTtcbiAgICB0aGlzLm1lbnVTZXJ2aWNlLm9wZW5NZW51KHsgLi4ubWVudUV2ZW50LCBtZW51SXRlbXM6IHRoaXMudmlzaWJsZU1lbnVJdGVtcywgbWVudUNsYXNzOiB0aGlzLm1lbnVDbGFzcyB9KTtcbiAgICB0aGlzLm1lbnVTZXJ2aWNlLmNsb3NlXG4gICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAuc3Vic2NyaWJlKChjbG9zZUV2ZW50KSA9PiB0aGlzLmNsb3NlLmVtaXQoY2xvc2VFdmVudCkpO1xuICAgIHRoaXMub3Blbi5uZXh0KG1lbnVFdmVudCk7XG4gIH1cblxuICBwdWJsaWMgaXNNZW51SXRlbVZpc2libGUobWVudUl0ZW06IE1lbnVJdGVtRGlyZWN0aXZlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVJZkZ1bmN0aW9uKG1lbnVJdGVtLnZpc2libGUpO1xuICB9XG5cbiAgcHVibGljIHNldFZpc2libGVNZW51SXRlbXMoKTogdm9pZCB7XG4gICAgdGhpcy52aXNpYmxlTWVudUl0ZW1zID0gdGhpcy5tZW51SXRlbXMuZmlsdGVyKChtZW51SXRlbSkgPT4gdGhpcy5pc01lbnVJdGVtVmlzaWJsZShtZW51SXRlbSkpO1xuICB9XG5cbiAgcHVibGljIGV2YWx1YXRlSWZGdW5jdGlvbih2YWx1ZTogYW55KTogYW55IHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgcmV0dXJuIHZhbHVlKHRoaXMuaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIl19