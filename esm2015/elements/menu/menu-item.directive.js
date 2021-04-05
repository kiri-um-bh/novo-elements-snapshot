import { Directive, ElementRef, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export class MenuItemDirective {
    constructor(template, elementRef) {
        this.template = template;
        this.elementRef = elementRef;
        this.divider = false;
        this.enabled = true;
        this.passive = false;
        this.visible = true;
        this.execute = new EventEmitter();
        this.isActive = false;
    }
    get disabled() {
        return this.passive || this.divider || !this.evaluateIfFunction(this.enabled, this.currentItem);
    }
    evaluateIfFunction(value, item) {
        if (value instanceof Function) {
            return value(item);
        }
        return value;
    }
    setActiveStyles() {
        this.isActive = true;
    }
    setInactiveStyles() {
        this.isActive = false;
    }
    triggerExecute(item, $event) {
        if (!this.evaluateIfFunction(this.enabled, item)) {
            return;
        }
        this.execute.emit({ event: $event, item });
    }
}
MenuItemDirective.ɵfac = function MenuItemDirective_Factory(t) { return new (t || MenuItemDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
MenuItemDirective.ɵdir = i0.ɵɵdefineDirective({ type: MenuItemDirective, selectors: [["", "menuItem", ""]], inputs: { subMenu: "subMenu", divider: "divider", enabled: "enabled", passive: "passive", visible: "visible", name: "name" }, outputs: { execute: "execute" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuItemDirective, [{
        type: Directive,
        args: [{
                /* tslint:disable:directive-selector-type */
                selector: '[menuItem]',
            }]
    }], function () { return [{ type: i0.TemplateRef }, { type: i0.ElementRef }]; }, { subMenu: [{
            type: Input
        }], divider: [{
            type: Input
        }], enabled: [{
            type: Input
        }], passive: [{
            type: Input
        }], visible: [{
            type: Input
        }], name: [{
            type: Input
        }], execute: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL21lbnUvbWVudS1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT2hHLE1BQU0sT0FBTyxpQkFBaUI7SUFlNUIsWUFBbUIsUUFBb0MsRUFBUyxVQUFzQjtRQUFuRSxhQUFRLEdBQVIsUUFBUSxDQUE0QjtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFidEUsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQXVDLElBQUksQ0FBQztRQUNuRCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBdUMsSUFBSSxDQUFDO1FBRWxELFlBQU8sR0FBOEMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdsRixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBS2lFLENBQUM7SUFKMUYsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFJTSxrQkFBa0IsQ0FBQyxLQUFVLEVBQUUsSUFBUztRQUM3QyxJQUFJLEtBQUssWUFBWSxRQUFRLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTSxlQUFlO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFDTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVNLGNBQWMsQ0FBQyxJQUFTLEVBQUUsTUFBbUM7UUFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2hELE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7O2tGQXBDVSxpQkFBaUI7c0RBQWpCLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBTDdCLFNBQVM7ZUFBQztnQkFDVCw0Q0FBNEM7Z0JBQzVDLFFBQVEsRUFBRSxZQUFZO2FBRXZCO3VGQUVpQixPQUFPO2tCQUF0QixLQUFLO1lBQ1UsT0FBTztrQkFBdEIsS0FBSztZQUNVLE9BQU87a0JBQXRCLEtBQUs7WUFDVSxPQUFPO2tCQUF0QixLQUFLO1lBQ1UsT0FBTztrQkFBdEIsS0FBSztZQUNVLElBQUk7a0JBQW5CLEtBQUs7WUFDVyxPQUFPO2tCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGlnaGxpZ2h0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLyogdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLXNlbGVjdG9yLXR5cGUgKi9cbiAgc2VsZWN0b3I6ICdbbWVudUl0ZW1dJyxcbiAgLyogdHNsaW50OmVuYWJsZTpkaXJlY3RpdmUtc2VsZWN0b3ItdHlwZSAqL1xufSlcbmV4cG9ydCBjbGFzcyBNZW51SXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIEhpZ2hsaWdodGFibGUge1xuICBASW5wdXQoKSBwdWJsaWMgc3ViTWVudTogYW55O1xuICBASW5wdXQoKSBwdWJsaWMgZGl2aWRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbiB8ICgoaXRlbTogYW55KSA9PiBib29sZWFuKSA9IHRydWU7XG4gIEBJbnB1dCgpIHB1YmxpYyBwYXNzaXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuIHwgKChpdGVtOiBhbnkpID0+IGJvb2xlYW4pID0gdHJ1ZTtcbiAgQElucHV0KCkgcHVibGljIG5hbWU6IHN0cmluZztcbiAgQE91dHB1dCgpIHB1YmxpYyBleGVjdXRlOiBFdmVudEVtaXR0ZXI8eyBldmVudDogRXZlbnQ7IGl0ZW06IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgY3VycmVudEl0ZW06IGFueTtcbiAgcHVibGljIGlzQWN0aXZlID0gZmFsc2U7XG4gIHB1YmxpYyBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFzc2l2ZSB8fCB0aGlzLmRpdmlkZXIgfHwgIXRoaXMuZXZhbHVhdGVJZkZ1bmN0aW9uKHRoaXMuZW5hYmxlZCwgdGhpcy5jdXJyZW50SXRlbSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgaXRlbTogYW55IH0+LCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBwdWJsaWMgZXZhbHVhdGVJZkZ1bmN0aW9uKHZhbHVlOiBhbnksIGl0ZW06IGFueSk6IGFueSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHJldHVybiB2YWx1ZShpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcHVibGljIHNldEFjdGl2ZVN0eWxlcygpOiB2b2lkIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgfVxuICBwdWJsaWMgc2V0SW5hY3RpdmVTdHlsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHRyaWdnZXJFeGVjdXRlKGl0ZW06IGFueSwgJGV2ZW50PzogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZXZhbHVhdGVJZkZ1bmN0aW9uKHRoaXMuZW5hYmxlZCwgaXRlbSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5leGVjdXRlLmVtaXQoeyBldmVudDogJGV2ZW50LCBpdGVtIH0pO1xuICB9XG59XG4iXX0=