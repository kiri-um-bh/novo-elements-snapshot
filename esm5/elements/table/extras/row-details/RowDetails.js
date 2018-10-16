/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                var componentRef = this.componentUtils.appendNextToLocation(this.renderer, this.container);
                componentRef.instance.data = this.data;
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
                    template: "\n        <span #container></span>\n        <span>{{value}}</span>\n    "
                }] }
    ];
    RowDetails.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ComponentUtils }
    ]; };
    RowDetails.propDecorators = {
        container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] }],
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
    /** @type {?} */
    RowDetails.prototype.element;
    /** @type {?} */
    RowDetails.prototype.componentUtils;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm93RGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJsZS9leHRyYXMvcm93LWRldGFpbHMvUm93RGV0YWlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBRWxHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFcEY7SUFrQkUsb0JBQW9CLE9BQW1CLEVBQVUsY0FBOEI7UUFBM0QsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUYvRSxVQUFLLEdBQVEsRUFBRSxDQUFDO0lBRWtFLENBQUM7Ozs7SUFFbkYsNkJBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLFlBQVksWUFBWSxFQUFFOztvQkFDL0MsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUMxRixZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3hDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkM7U0FDRjthQUFNO1lBQ0wsMkNBQTJDO1NBQzVDO0lBQ0gsQ0FBQzs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsMEVBR1A7aUJBQ0o7OztnQkFYbUIsVUFBVTtnQkFHckIsY0FBYzs7OzRCQVVwQixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3VCQUdqRCxLQUFLOzJCQUVMLEtBQUs7O0lBbUJSLGlCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0F6QlksVUFBVTs7O0lBQ3JCLCtCQUM0Qjs7SUFFNUIsMEJBQ1U7O0lBQ1YsOEJBQ2M7O0lBRWQsMkJBQWdCOztJQUVKLDZCQUEyQjs7SUFBRSxvQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEJhc2VSZW5kZXJlciB9IGZyb20gJy4vLi4vYmFzZS1yZW5kZXJlci9CYXNlUmVuZGVyZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLy4uLy4uLy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcm93LWRldGFpbHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c3BhbiAjY29udGFpbmVyPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+e3t2YWx1ZX19PC9zcGFuPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFJvd0RldGFpbHMgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBJbnB1dCgpXG4gIGRhdGE6IGFueTtcbiAgQElucHV0KClcbiAgcmVuZGVyZXI6IGFueTtcblxuICB2YWx1ZTogYW55ID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscykge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5yZW5kZXJlcikge1xuICAgICAgaWYgKHRoaXMucmVuZGVyZXIucHJvdG90eXBlIGluc3RhbmNlb2YgQmFzZVJlbmRlcmVyKSB7XG4gICAgICAgIGxldCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZE5leHRUb0xvY2F0aW9uKHRoaXMucmVuZGVyZXIsIHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5yZW5kZXJlcih0aGlzLmRhdGEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLnZhbHVlID0gdGhpcy5yb3dbdGhpcy5jb2x1bW4ubmFtZV07XG4gICAgfVxuICB9XG59XG4iXX0=