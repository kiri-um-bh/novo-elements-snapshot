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
var RowDetails = /** @class */ (function () {
    function RowDetails(element, componentUtils) {
        this.element = element;
        this.componentUtils = componentUtils;
        this.value = '';
    }
    /**
     * @return {?}
     */
    RowDetails.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.renderer) {
            if (this.renderer.prototype instanceof BaseRenderer) {
                /** @type {?} */
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
    RowDetails.decorators = [
        { type: Component, args: [{
                    selector: 'novo-row-details',
                    template: "\n    <span #container></span> <span>{{ value }}</span>\n  "
                }] }
    ];
    /** @nocollapse */
    RowDetails.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ComponentUtils }
    ]; };
    RowDetails.propDecorators = {
        container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: true },] }],
        data: [{ type: Input }],
        renderer: [{ type: Input }]
    };
    return RowDetails;
}());
export { RowDetails };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm93RGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJsZS9leHRyYXMvcm93LWRldGFpbHMvUm93RGV0YWlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQUVsRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRXBGO0lBaUJFLG9CQUFvQixPQUFtQixFQUFVLGNBQThCO1FBQTNELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGL0UsVUFBSyxHQUFRLEVBQUUsQ0FBQztJQUVrRSxDQUFDOzs7O0lBRW5GLDZCQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxZQUFZLFlBQVksRUFBRTs7b0JBQzdDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQzlFLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMzQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Y7YUFBTTtZQUNMLDJDQUEyQztTQUM1QztJQUNILENBQUM7O2dCQTlCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLDZEQUVUO2lCQUNGOzs7O2dCQVZtQixVQUFVO2dCQUdyQixjQUFjOzs7NEJBU3BCLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt1QkFHL0QsS0FBSzsyQkFFTCxLQUFLOztJQW1CUixpQkFBQztDQUFBLEFBL0JELElBK0JDO1NBekJZLFVBQVU7OztJQUNyQiwrQkFDNEI7O0lBRTVCLDBCQUNVOztJQUNWLDhCQUNjOztJQUVkLDJCQUFnQjs7Ozs7SUFFSiw2QkFBMkI7Ozs7O0lBQUUsb0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIFZpZXdDaGlsZCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBCYXNlUmVuZGVyZXIgfSBmcm9tICcuLy4uL2Jhc2UtcmVuZGVyZXIvQmFzZVJlbmRlcmVyJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXJvdy1kZXRhaWxzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiAjY29udGFpbmVyPjwvc3Bhbj4gPHNwYW4+e3sgdmFsdWUgfX08L3NwYW4+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFJvd0RldGFpbHMgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgQElucHV0KClcbiAgZGF0YTogYW55O1xuICBASW5wdXQoKVxuICByZW5kZXJlcjogYW55O1xuXG4gIHZhbHVlOiBhbnkgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XG4gICAgICBpZiAodGhpcy5yZW5kZXJlci5wcm90b3R5cGUgaW5zdGFuY2VvZiBCYXNlUmVuZGVyZXIpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmQodGhpcy5yZW5kZXJlciwgdGhpcy5jb250YWluZXIpO1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2VbJ2RhdGEnXSA9IHRoaXMuZGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnJlbmRlcmVyKHRoaXMuZGF0YSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMudmFsdWUgPSB0aGlzLnJvd1t0aGlzLmNvbHVtbi5uYW1lXTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==