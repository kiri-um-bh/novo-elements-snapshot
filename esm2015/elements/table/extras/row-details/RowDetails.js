/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/extras/row-details/RowDetails.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, ElementRef, ViewContainerRef, ViewChild, Input } from '@angular/core';
// APP
import { BaseRenderer } from './../base-renderer/BaseRenderer';
import { ComponentUtils } from './../../../../utils/component-utils/ComponentUtils';
export class RowDetails {
    /**
     * @param {?} element
     * @param {?} componentUtils
     */
    constructor(element, componentUtils) {
        this.element = element;
        this.componentUtils = componentUtils;
        this.value = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.renderer) {
            if (this.renderer.prototype instanceof BaseRenderer) {
                /** @type {?} */
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
RowDetails.decorators = [
    { type: Component, args: [{
                selector: 'novo-row-details',
                template: `
    <span #container></span> <span>{{ value }}</span>
  `
            }] }
];
/** @nocollapse */
RowDetails.ctorParameters = () => [
    { type: ElementRef },
    { type: ComponentUtils }
];
RowDetails.propDecorators = {
    container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: true },] }],
    data: [{ type: Input }],
    renderer: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RowDetails.prototype.container;
    /** @type {?} */
    RowDetails.prototype.data;
    /** @type {?} */
    RowDetails.prototype.renderer;
    /** @type {?} */
    RowDetails.prototype.value;
    /**
     * @type {?}
     * @private
     */
    RowDetails.prototype.element;
    /**
     * @type {?}
     * @private
     */
    RowDetails.prototype.componentUtils;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm93RGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJsZS9leHRyYXMvcm93LWRldGFpbHMvUm93RGV0YWlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQUVsRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBUXBGLE1BQU0sT0FBTyxVQUFVOzs7OztJQVdyQixZQUFvQixPQUFtQixFQUFVLGNBQThCO1FBQTNELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGL0UsVUFBSyxHQUFRLEVBQUUsQ0FBQztJQUVrRSxDQUFDOzs7O0lBRW5GLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsWUFBWSxZQUFZLEVBQUU7O3NCQUM3QyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUM5RSxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QztTQUNGO2FBQU07WUFDTCwyQ0FBMkM7U0FDNUM7SUFDSCxDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7R0FFVDthQUNGOzs7O1lBVm1CLFVBQVU7WUFHckIsY0FBYzs7O3dCQVNwQixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7bUJBRy9ELEtBQUs7dUJBRUwsS0FBSzs7OztJQUxOLCtCQUM0Qjs7SUFFNUIsMEJBQ1U7O0lBQ1YsOEJBQ2M7O0lBRWQsMkJBQWdCOzs7OztJQUVKLDZCQUEyQjs7Ozs7SUFBRSxvQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEJhc2VSZW5kZXJlciB9IGZyb20gJy4vLi4vYmFzZS1yZW5kZXJlci9CYXNlUmVuZGVyZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLy4uLy4uLy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcm93LWRldGFpbHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuICNjb250YWluZXI+PC9zcGFuPiA8c3Bhbj57eyB2YWx1ZSB9fTwvc3Bhbj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUm93RGV0YWlscyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBASW5wdXQoKVxuICBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHJlbmRlcmVyOiBhbnk7XG5cbiAgdmFsdWU6IGFueSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMucmVuZGVyZXIpIHtcbiAgICAgIGlmICh0aGlzLnJlbmRlcmVyLnByb3RvdHlwZSBpbnN0YW5jZW9mIEJhc2VSZW5kZXJlcikge1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZCh0aGlzLnJlbmRlcmVyLCB0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZVsnZGF0YSddID0gdGhpcy5kYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMucmVuZGVyZXIodGhpcy5kYXRhKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy52YWx1ZSA9IHRoaXMucm93W3RoaXMuY29sdW1uLm5hbWVdO1xuICAgIH1cbiAgfVxufVxuIl19