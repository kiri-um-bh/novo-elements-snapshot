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
MenuItemDirective.ɵdir = i0.ɵɵdefineDirective({ type: MenuItemDirective, selectors: [["", "menuItem", ""]], inputs: { subMenu: "subMenu", divider: "divider", enabled: "enabled", passive: "passive", visible: "visible" }, outputs: { execute: "execute" } });
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
        }], execute: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL21lbnUvbWVudS1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT2hHLE1BQU0sT0FBTyxpQkFBaUI7SUFjNUIsWUFBbUIsUUFBb0MsRUFBUyxVQUFzQjtRQUFuRSxhQUFRLEdBQVIsUUFBUSxDQUE0QjtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFadEUsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQXVDLElBQUksQ0FBQztRQUNuRCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBdUMsSUFBSSxDQUFDO1FBQ2xELFlBQU8sR0FBOEMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdsRixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBS2lFLENBQUM7SUFKMUYsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFJTSxrQkFBa0IsQ0FBQyxLQUFVLEVBQUUsSUFBUztRQUM3QyxJQUFJLEtBQUssWUFBWSxRQUFRLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTSxlQUFlO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFDTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVNLGNBQWMsQ0FBQyxJQUFTLEVBQUUsTUFBbUM7UUFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2hELE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7O2tGQW5DVSxpQkFBaUI7c0RBQWpCLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBTDdCLFNBQVM7ZUFBQztnQkFDVCw0Q0FBNEM7Z0JBQzVDLFFBQVEsRUFBRSxZQUFZO2FBRXZCO3VGQUVpQixPQUFPO2tCQUF0QixLQUFLO1lBQ1UsT0FBTztrQkFBdEIsS0FBSztZQUNVLE9BQU87a0JBQXRCLEtBQUs7WUFDVSxPQUFPO2tCQUF0QixLQUFLO1lBQ1UsT0FBTztrQkFBdEIsS0FBSztZQUNXLE9BQU87a0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIaWdobGlnaHRhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZTpkaXJlY3RpdmUtc2VsZWN0b3ItdHlwZSAqL1xuICBzZWxlY3RvcjogJ1ttZW51SXRlbV0nLFxuICAvKiB0c2xpbnQ6ZW5hYmxlOmRpcmVjdGl2ZS1zZWxlY3Rvci10eXBlICovXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVJdGVtRGlyZWN0aXZlIGltcGxlbWVudHMgSGlnaGxpZ2h0YWJsZSB7XG4gIEBJbnB1dCgpIHB1YmxpYyBzdWJNZW51OiBhbnk7XG4gIEBJbnB1dCgpIHB1YmxpYyBkaXZpZGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBlbmFibGVkOiBib29sZWFuIHwgKChpdGVtOiBhbnkpID0+IGJvb2xlYW4pID0gdHJ1ZTtcbiAgQElucHV0KCkgcHVibGljIHBhc3NpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIHZpc2libGU6IGJvb2xlYW4gfCAoKGl0ZW06IGFueSkgPT4gYm9vbGVhbikgPSB0cnVlO1xuICBAT3V0cHV0KCkgcHVibGljIGV4ZWN1dGU6IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBFdmVudDsgaXRlbTogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBjdXJyZW50SXRlbTogYW55O1xuICBwdWJsaWMgaXNBY3RpdmUgPSBmYWxzZTtcbiAgcHVibGljIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXNzaXZlIHx8IHRoaXMuZGl2aWRlciB8fCAhdGhpcy5ldmFsdWF0ZUlmRnVuY3Rpb24odGhpcy5lbmFibGVkLCB0aGlzLmN1cnJlbnRJdGVtKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyBpdGVtOiBhbnkgfT4sIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIHB1YmxpYyBldmFsdWF0ZUlmRnVuY3Rpb24odmFsdWU6IGFueSwgaXRlbTogYW55KTogYW55IHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgcmV0dXJuIHZhbHVlKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgc2V0QWN0aXZlU3R5bGVzKCk6IHZvaWQge1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICB9XG4gIHB1YmxpYyBzZXRJbmFjdGl2ZVN0eWxlcygpOiB2b2lkIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdHJpZ2dlckV4ZWN1dGUoaXRlbTogYW55LCAkZXZlbnQ/OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5ldmFsdWF0ZUlmRnVuY3Rpb24odGhpcy5lbmFibGVkLCBpdGVtKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmV4ZWN1dGUuZW1pdCh7IGV2ZW50OiAkZXZlbnQsIGl0ZW0gfSk7XG4gIH1cbn1cbiJdfQ==