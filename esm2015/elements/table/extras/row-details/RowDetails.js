// NG2
import { Component, ElementRef, ViewContainerRef, ViewChild, Input } from '@angular/core';
// APP
import { BaseRenderer } from './../base-renderer/BaseRenderer';
import { ComponentUtils } from './../../../../utils/component-utils/ComponentUtils';
import * as i0 from "@angular/core";
import * as i1 from "./../../../../utils/component-utils/ComponentUtils";
const _c0 = ["container"];
export class RowDetails {
    constructor(element, componentUtils) {
        this.element = element;
        this.componentUtils = componentUtils;
        this.value = '';
    }
    ngOnInit() {
        if (this.renderer) {
            if (this.renderer.prototype instanceof BaseRenderer) {
                const componentRef = this.componentUtils.append(this.renderer, this.container);
                componentRef.instance['data'] = this.data;
            }
            else {
                this.value = this.renderer(this.data);
            }
        }
        else {
            // this.value = this.row[this.column.name];
        }
    }
}
RowDetails.ɵfac = function RowDetails_Factory(t) { return new (t || RowDetails)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ComponentUtils)); };
RowDetails.ɵcmp = i0.ɵɵdefineComponent({ type: RowDetails, selectors: [["novo-row-details"]], viewQuery: function RowDetails_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
    } }, inputs: { data: "data", renderer: "renderer" }, decls: 4, vars: 1, consts: [["container", ""]], template: function RowDetails_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "span", null, 0);
        i0.ɵɵelementStart(2, "span");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.value);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RowDetails, [{
        type: Component,
        args: [{
                selector: 'novo-row-details',
                template: `
    <span #container></span> <span>{{ value }}</span>
  `,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.ComponentUtils }]; }, { container: [{
            type: ViewChild,
            args: ['container', { read: ViewContainerRef, static: true }]
        }], data: [{
            type: Input
        }], renderer: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm93RGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJsZS9leHRyYXMvcm93LWRldGFpbHMvUm93RGV0YWlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxNQUFNO0FBQ04sT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7OztBQVFwRixNQUFNLE9BQU8sVUFBVTtJQVdyQixZQUFvQixPQUFtQixFQUFVLGNBQThCO1FBQTNELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGL0UsVUFBSyxHQUFRLEVBQUUsQ0FBQztJQUVrRSxDQUFDO0lBRW5GLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsWUFBWSxZQUFZLEVBQUU7Z0JBQ25ELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMvRSxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QztTQUNGO2FBQU07WUFDTCwyQ0FBMkM7U0FDNUM7SUFDSCxDQUFDOztvRUF4QlUsVUFBVTsrQ0FBVixVQUFVO3dDQUNXLGdCQUFnQjs7Ozs7UUFKOUMsZ0NBQXdCO1FBQUMsNEJBQU07UUFBQSxZQUFXO1FBQUEsaUJBQU87O1FBQWxCLGVBQVc7UUFBWCwrQkFBVzs7a0RBR2pDLFVBQVU7Y0FOdEIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7R0FFVDthQUNGOztrQkFFRSxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFHL0QsS0FBSzs7a0JBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3Q2hpbGQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgQmFzZVJlbmRlcmVyIH0gZnJvbSAnLi8uLi9iYXNlLXJlbmRlcmVyL0Jhc2VSZW5kZXJlcic7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4vLi4vLi4vLi4vLi4vdXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1yb3ctZGV0YWlscycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gI2NvbnRhaW5lcj48L3NwYW4+IDxzcGFuPnt7IHZhbHVlIH19PC9zcGFuPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBSb3dEZXRhaWxzIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBJbnB1dCgpXG4gIGRhdGE6IGFueTtcbiAgQElucHV0KClcbiAgcmVuZGVyZXI6IGFueTtcblxuICB2YWx1ZTogYW55ID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscykge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5yZW5kZXJlcikge1xuICAgICAgaWYgKHRoaXMucmVuZGVyZXIucHJvdG90eXBlIGluc3RhbmNlb2YgQmFzZVJlbmRlcmVyKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50VXRpbHMuYXBwZW5kKHRoaXMucmVuZGVyZXIsIHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlWydkYXRhJ10gPSB0aGlzLmRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5yZW5kZXJlcih0aGlzLmRhdGEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLnZhbHVlID0gdGhpcy5yb3dbdGhpcy5jb2x1bW4ubmFtZV07XG4gICAgfVxuICB9XG59XG4iXX0=