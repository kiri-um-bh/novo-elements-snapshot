// NG2
import { Component, ElementRef, ViewContainerRef, ViewChild, Input } from '@angular/core';
// APP
import { BaseRenderer } from './../base-renderer/BaseRenderer';
import { ComponentUtils } from './../../../../utils/component-utils/ComponentUtils';
import * as i0 from "@angular/core";
import * as i1 from "./../../../../utils/component-utils/ComponentUtils";
var _c0 = ["container"];
var RowDetails = /** @class */ (function () {
    function RowDetails(element, componentUtils) {
        this.element = element;
        this.componentUtils = componentUtils;
        this.value = '';
    }
    RowDetails.prototype.ngOnInit = function () {
        if (this.renderer) {
            if (this.renderer.prototype instanceof BaseRenderer) {
                var componentRef = this.componentUtils.append(this.renderer, this.container);
                componentRef.instance['data'] = this.data;
            }
            else {
                this.value = this.renderer(this.data);
            }
        }
        else {
            // this.value = this.row[this.column.name];
        }
    };
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
    return RowDetails;
}());
export { RowDetails };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RowDetails, [{
        type: Component,
        args: [{
                selector: 'novo-row-details',
                template: "\n    <span #container></span> <span>{{ value }}</span>\n  ",
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.ComponentUtils }]; }, { container: [{
            type: ViewChild,
            args: ['container', { read: ViewContainerRef, static: true }]
        }], data: [{
            type: Input
        }], renderer: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm93RGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJsZS9leHRyYXMvcm93LWRldGFpbHMvUm93RGV0YWlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxNQUFNO0FBQ04sT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7OztBQUVwRjtJQWlCRSxvQkFBb0IsT0FBbUIsRUFBVSxjQUE4QjtRQUEzRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRi9FLFVBQUssR0FBUSxFQUFFLENBQUM7SUFFa0UsQ0FBQztJQUVuRiw2QkFBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLFlBQVksWUFBWSxFQUFFO2dCQUNuRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDL0UsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzNDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkM7U0FDRjthQUFNO1lBQ0wsMkNBQTJDO1NBQzVDO0lBQ0gsQ0FBQzt3RUF4QlUsVUFBVTttREFBVixVQUFVOzRDQUNXLGdCQUFnQjs7Ozs7WUFKOUMsZ0NBQXdCO1lBQUMsNEJBQU07WUFBQSxZQUFXO1lBQUEsaUJBQU87O1lBQWxCLGVBQVc7WUFBWCwrQkFBVzs7cUJBVDlDO0NBcUNDLEFBL0JELElBK0JDO1NBekJZLFVBQVU7a0RBQVYsVUFBVTtjQU50QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLDZEQUVUO2FBQ0Y7O2tCQUVFLFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUcvRCxLQUFLOztrQkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIFZpZXdDaGlsZCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBCYXNlUmVuZGVyZXIgfSBmcm9tICcuLy4uL2Jhc2UtcmVuZGVyZXIvQmFzZVJlbmRlcmVyJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXJvdy1kZXRhaWxzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiAjY29udGFpbmVyPjwvc3Bhbj4gPHNwYW4+e3sgdmFsdWUgfX08L3NwYW4+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFJvd0RldGFpbHMgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgQElucHV0KClcbiAgZGF0YTogYW55O1xuICBASW5wdXQoKVxuICByZW5kZXJlcjogYW55O1xuXG4gIHZhbHVlOiBhbnkgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XG4gICAgICBpZiAodGhpcy5yZW5kZXJlci5wcm90b3R5cGUgaW5zdGFuY2VvZiBCYXNlUmVuZGVyZXIpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmQodGhpcy5yZW5kZXJlciwgdGhpcy5jb250YWluZXIpO1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2VbJ2RhdGEnXSA9IHRoaXMuZGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnJlbmRlcmVyKHRoaXMuZGF0YSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMudmFsdWUgPSB0aGlzLnJvd1t0aGlzLmNvbHVtbi5uYW1lXTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==