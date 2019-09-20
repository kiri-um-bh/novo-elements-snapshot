/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Injectable, ReflectiveInjector } from '@angular/core';
// APP
import { NovoModalRef, NovoModalParams, NovoModalContainerElement } from './Modal';
import { ComponentUtils } from './../../utils/component-utils/ComponentUtils';
export class NovoModalService {
    /**
     * @param {?} componentUtils
     */
    constructor(componentUtils) {
        this.componentUtils = componentUtils;
        this._parentViewContainer = null;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    set parentViewContainer(view) {
        this._parentViewContainer = view;
    }
    /**
     * @param {?} component
     * @param {?=} scope
     * @return {?}
     */
    open(component, scope = {}) {
        if (!this._parentViewContainer) {
            console.error('No parent view container specified for the ModalService. Set it inside your main application. \nthis.modalService.parentViewContainer = view (ViewContainerRef)');
            return null;
        }
        /** @type {?} */
        const modal = new NovoModalRef();
        modal.component = component;
        modal.open();
        /** @type {?} */
        let bindings = ReflectiveInjector.resolve([{ provide: NovoModalRef, useValue: modal }, { provide: NovoModalParams, useValue: scope }]);
        modal.containerRef = this.componentUtils.appendNextToLocation(NovoModalContainerElement, this._parentViewContainer, bindings);
        return modal;
    }
}
NovoModalService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NovoModalService.ctorParameters = () => [
    { type: ComponentUtils }
];
if (false) {
    /** @type {?} */
    NovoModalService.prototype._parentViewContainer;
    /**
     * @type {?}
     * @private
     */
    NovoModalService.prototype.componentUtils;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL21vZGFsL01vZGFsU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRS9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLHlCQUF5QixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUc5RSxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBRzNCLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUZsRCx5QkFBb0IsR0FBUSxJQUFJLENBQUM7SUFFb0IsQ0FBQzs7Ozs7SUFFdEQsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJO1FBQzFCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBRUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEdBQUcsRUFBRTtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzlCLE9BQU8sQ0FBQyxLQUFLLENBQ1gsaUtBQWlLLENBQ2xLLENBQUM7WUFDRixPQUFPLElBQUksQ0FBQztTQUNiOztjQUVLLEtBQUssR0FBRyxJQUFJLFlBQVksRUFBRTtRQUNoQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUM1QixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7O1lBRVQsUUFBUSxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3RJLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDOUgsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUF6QkYsVUFBVTs7OztZQUZGLGNBQWM7Ozs7SUFJckIsZ0RBQWlDOzs7OztJQUVyQiwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUsIFJlZmxlY3RpdmVJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTW9kYWxSZWYsIE5vdm9Nb2RhbFBhcmFtcywgTm92b01vZGFsQ29udGFpbmVyRWxlbWVudCB9IGZyb20gJy4vTW9kYWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3ZvTW9kYWxTZXJ2aWNlIHtcbiAgX3BhcmVudFZpZXdDb250YWluZXI6IGFueSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMpIHt9XG5cbiAgc2V0IHBhcmVudFZpZXdDb250YWluZXIodmlldykge1xuICAgIHRoaXMuX3BhcmVudFZpZXdDb250YWluZXIgPSB2aWV3O1xuICB9XG5cbiAgb3Blbihjb21wb25lbnQsIHNjb3BlID0ge30pIHtcbiAgICBpZiAoIXRoaXMuX3BhcmVudFZpZXdDb250YWluZXIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdObyBwYXJlbnQgdmlldyBjb250YWluZXIgc3BlY2lmaWVkIGZvciB0aGUgTW9kYWxTZXJ2aWNlLiBTZXQgaXQgaW5zaWRlIHlvdXIgbWFpbiBhcHBsaWNhdGlvbi4gXFxudGhpcy5tb2RhbFNlcnZpY2UucGFyZW50Vmlld0NvbnRhaW5lciA9IHZpZXcgKFZpZXdDb250YWluZXJSZWYpJyxcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBtb2RhbCA9IG5ldyBOb3ZvTW9kYWxSZWYoKTtcbiAgICBtb2RhbC5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgbW9kYWwub3BlbigpO1xuXG4gICAgbGV0IGJpbmRpbmdzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUoW3sgcHJvdmlkZTogTm92b01vZGFsUmVmLCB1c2VWYWx1ZTogbW9kYWwgfSwgeyBwcm92aWRlOiBOb3ZvTW9kYWxQYXJhbXMsIHVzZVZhbHVlOiBzY29wZSB9XSk7XG4gICAgbW9kYWwuY29udGFpbmVyUmVmID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmROZXh0VG9Mb2NhdGlvbihOb3ZvTW9kYWxDb250YWluZXJFbGVtZW50LCB0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyLCBiaW5kaW5ncyk7XG4gICAgcmV0dXJuIG1vZGFsO1xuICB9XG59XG4iXX0=