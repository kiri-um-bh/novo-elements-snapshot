/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Injectable, ReflectiveInjector } from '@angular/core';
// APP
import { NovoModalRef, NovoModalParams, NovoModalContainerElement } from './Modal';
import { ComponentUtils } from './../../utils/component-utils/ComponentUtils';
var NovoModalService = /** @class */ (function () {
    function NovoModalService(componentUtils) {
        this.componentUtils = componentUtils;
        this._parentViewContainer = null;
    }
    Object.defineProperty(NovoModalService.prototype, "parentViewContainer", {
        set: /**
         * @param {?} view
         * @return {?}
         */
        function (view) {
            this._parentViewContainer = view;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} component
     * @param {?=} scope
     * @return {?}
     */
    NovoModalService.prototype.open = /**
     * @param {?} component
     * @param {?=} scope
     * @return {?}
     */
    function (component, scope) {
        if (scope === void 0) { scope = {}; }
        if (!this._parentViewContainer) {
            console.error('No parent view container specified for the ModalService. Set it inside your main application. \nthis.modalService.parentViewContainer = view (ViewContainerRef)');
            return null;
        }
        /** @type {?} */
        var modal = new NovoModalRef();
        modal.component = component;
        modal.open();
        /** @type {?} */
        var bindings = ReflectiveInjector.resolve([{ provide: NovoModalRef, useValue: modal }, { provide: NovoModalParams, useValue: scope }]);
        modal.containerRef = this.componentUtils.appendNextToLocation(NovoModalContainerElement, this._parentViewContainer, bindings);
        return modal;
    };
    NovoModalService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NovoModalService.ctorParameters = function () { return [
        { type: ComponentUtils }
    ]; };
    return NovoModalService;
}());
export { NovoModalService };
if (false) {
    /** @type {?} */
    NovoModalService.prototype._parentViewContainer;
    /** @type {?} */
    NovoModalService.prototype.componentUtils;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL21vZGFsL01vZGFsU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRS9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLHlCQUF5QixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUU5RTtJQUlFLDBCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGbEQseUJBQW9CLEdBQVEsSUFBSSxDQUFDO0lBRW9CLENBQUM7SUFFdEQsc0JBQUksaURBQW1COzs7OztRQUF2QixVQUF3QixJQUFJO1lBQzFCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7Ozs7OztJQUVELCtCQUFJOzs7OztJQUFKLFVBQUssU0FBUyxFQUFFLEtBQVU7UUFBVixzQkFBQSxFQUFBLFVBQVU7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM5QixPQUFPLENBQUMsS0FBSyxDQUNYLGlLQUFpSyxDQUNsSyxDQUFDO1lBQ0YsT0FBTyxJQUFJLENBQUM7U0FDYjs7WUFFSyxLQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFDaEMsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDNUIsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDOztZQUVULFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN0SSxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzlILE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBekJGLFVBQVU7Ozs7Z0JBRkYsY0FBYzs7SUE0QnZCLHVCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0F6QlksZ0JBQWdCOzs7SUFDM0IsZ0RBQWlDOztJQUVyQiwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUsIFJlZmxlY3RpdmVJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTW9kYWxSZWYsIE5vdm9Nb2RhbFBhcmFtcywgTm92b01vZGFsQ29udGFpbmVyRWxlbWVudCB9IGZyb20gJy4vTW9kYWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3ZvTW9kYWxTZXJ2aWNlIHtcbiAgX3BhcmVudFZpZXdDb250YWluZXI6IGFueSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMpIHt9XG5cbiAgc2V0IHBhcmVudFZpZXdDb250YWluZXIodmlldykge1xuICAgIHRoaXMuX3BhcmVudFZpZXdDb250YWluZXIgPSB2aWV3O1xuICB9XG5cbiAgb3Blbihjb21wb25lbnQsIHNjb3BlID0ge30pIHtcbiAgICBpZiAoIXRoaXMuX3BhcmVudFZpZXdDb250YWluZXIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdObyBwYXJlbnQgdmlldyBjb250YWluZXIgc3BlY2lmaWVkIGZvciB0aGUgTW9kYWxTZXJ2aWNlLiBTZXQgaXQgaW5zaWRlIHlvdXIgbWFpbiBhcHBsaWNhdGlvbi4gXFxudGhpcy5tb2RhbFNlcnZpY2UucGFyZW50Vmlld0NvbnRhaW5lciA9IHZpZXcgKFZpZXdDb250YWluZXJSZWYpJyxcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBtb2RhbCA9IG5ldyBOb3ZvTW9kYWxSZWYoKTtcbiAgICBtb2RhbC5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgbW9kYWwub3BlbigpO1xuXG4gICAgbGV0IGJpbmRpbmdzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUoW3sgcHJvdmlkZTogTm92b01vZGFsUmVmLCB1c2VWYWx1ZTogbW9kYWwgfSwgeyBwcm92aWRlOiBOb3ZvTW9kYWxQYXJhbXMsIHVzZVZhbHVlOiBzY29wZSB9XSk7XG4gICAgbW9kYWwuY29udGFpbmVyUmVmID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmROZXh0VG9Mb2NhdGlvbihOb3ZvTW9kYWxDb250YWluZXJFbGVtZW50LCB0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyLCBiaW5kaW5ncyk7XG4gICAgcmV0dXJuIG1vZGFsO1xuICB9XG59XG4iXX0=