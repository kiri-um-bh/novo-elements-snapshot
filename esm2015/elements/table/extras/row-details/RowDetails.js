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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm93RGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJsZS9leHRyYXMvcm93LWRldGFpbHMvUm93RGV0YWlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxNQUFNO0FBQ04sT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7OztBQVFwRixNQUFNLE9BQU8sVUFBVTtJQVdyQixZQUFvQixPQUFtQixFQUFVLGNBQThCO1FBQTNELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGL0UsVUFBSyxHQUFRLEVBQUUsQ0FBQztJQUVrRSxDQUFDO0lBRW5GLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsWUFBWSxZQUFZLEVBQUU7Z0JBQ25ELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMvRSxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QztTQUNGO2FBQU07WUFDTCwyQ0FBMkM7U0FDNUM7SUFDSCxDQUFDOztvRUF4QlUsVUFBVTsrQ0FBVixVQUFVO3dDQUNXLGdCQUFnQjs7Ozs7UUFKOUMsZ0NBQXdCO1FBQUMsNEJBQU07UUFBQSxZQUFXO1FBQUEsaUJBQU87O1FBQWxCLGVBQVc7UUFBWCwrQkFBVzs7a0RBR2pDLFVBQVU7Y0FOdEIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7R0FFVDthQUNGOzBGQUdDLFNBQVM7a0JBRFIsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUloRSxJQUFJO2tCQURILEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEJhc2VSZW5kZXJlciB9IGZyb20gJy4vLi4vYmFzZS1yZW5kZXJlci9CYXNlUmVuZGVyZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLy4uLy4uLy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcm93LWRldGFpbHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuICNjb250YWluZXI+PC9zcGFuPiA8c3Bhbj57eyB2YWx1ZSB9fTwvc3Bhbj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUm93RGV0YWlscyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBASW5wdXQoKVxuICBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHJlbmRlcmVyOiBhbnk7XG5cbiAgdmFsdWU6IGFueSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMucmVuZGVyZXIpIHtcbiAgICAgIGlmICh0aGlzLnJlbmRlcmVyLnByb3RvdHlwZSBpbnN0YW5jZW9mIEJhc2VSZW5kZXJlcikge1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZCh0aGlzLnJlbmRlcmVyLCB0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZVsnZGF0YSddID0gdGhpcy5kYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMucmVuZGVyZXIodGhpcy5kYXRhKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy52YWx1ZSA9IHRoaXMucm93W3RoaXMuY29sdW1uLm5hbWVdO1xuICAgIH1cbiAgfVxufVxuIl19