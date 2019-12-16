/**
 * @fileoverview added by tsickle
 * Generated from: elements/modal/ModalService.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Injectable } from '@angular/core';
// APP
import { NovoModalRef, NovoModalParams, NovoModalContainerElement } from './Modal';
import { ComponentUtils } from './../../utils/component-utils/ComponentUtils';
var NovoModalService = /** @class */ (function () {
    function NovoModalService(componentUtils) {
        this.componentUtils = componentUtils;
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
     * @template T
     * @param {?} component
     * @param {?=} scope
     * @return {?}
     */
    NovoModalService.prototype.open = /**
     * @template T
     * @param {?} component
     * @param {?=} scope
     * @return {?}
     */
    function (component, scope) {
        if (scope === void 0) { scope = {}; }
        if (!this._parentViewContainer) {
            throw new Error('No parent view container specified for the ModalService. Set it inside your main application. \nthis.modalService.parentViewContainer = view (ViewContainerRef)');
        }
        /** @type {?} */
        var modal = new NovoModalRef();
        modal.component = component;
        modal.open();
        /** @type {?} */
        var providers = [{ provide: NovoModalRef, useValue: modal }, { provide: NovoModalParams, useValue: scope }];
        modal.containerRef = this.componentUtils.append(NovoModalContainerElement, this._parentViewContainer, providers);
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
    /**
     * @type {?}
     * @private
     */
    NovoModalService.prototype.componentUtils;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL21vZGFsL01vZGFsU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUEwQyxNQUFNLGVBQWUsQ0FBQzs7QUFFbkYsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRTlFO0lBSUUsMEJBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFHLENBQUM7SUFFdEQsc0JBQUksaURBQW1COzs7OztRQUF2QixVQUF3QixJQUFzQjtZQUM1QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQ25DLENBQUM7OztPQUFBOzs7Ozs7O0lBRUQsK0JBQUk7Ozs7OztJQUFKLFVBQVEsU0FBa0IsRUFBRSxLQUFVO1FBQVYsc0JBQUEsRUFBQSxVQUFVO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpS0FBaUssQ0FBQyxDQUFDO1NBQ3BMOztZQUVLLEtBQUssR0FBRyxJQUFJLFlBQVksRUFBRTtRQUNoQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUM1QixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7O1lBRVAsU0FBUyxHQUFxQixDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUMvSCxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNqSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQXRCRixVQUFVOzs7O2dCQUZGLGNBQWM7O0lBeUJ2Qix1QkFBQztDQUFBLEFBdkJELElBdUJDO1NBdEJZLGdCQUFnQjs7O0lBQzNCLGdEQUF1Qzs7Ozs7SUFFM0IsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBWaWV3Q29udGFpbmVyUmVmLCBTdGF0aWNQcm92aWRlciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTW9kYWxSZWYsIE5vdm9Nb2RhbFBhcmFtcywgTm92b01vZGFsQ29udGFpbmVyRWxlbWVudCB9IGZyb20gJy4vTW9kYWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3ZvTW9kYWxTZXJ2aWNlIHtcbiAgX3BhcmVudFZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMpIHt9XG5cbiAgc2V0IHBhcmVudFZpZXdDb250YWluZXIodmlldzogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHRoaXMuX3BhcmVudFZpZXdDb250YWluZXIgPSB2aWV3O1xuICB9XG5cbiAgb3BlbjxUPihjb21wb25lbnQ6IFR5cGU8VD4sIHNjb3BlID0ge30pOiBOb3ZvTW9kYWxSZWYge1xuICAgIGlmICghdGhpcy5fcGFyZW50Vmlld0NvbnRhaW5lcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBwYXJlbnQgdmlldyBjb250YWluZXIgc3BlY2lmaWVkIGZvciB0aGUgTW9kYWxTZXJ2aWNlLiBTZXQgaXQgaW5zaWRlIHlvdXIgbWFpbiBhcHBsaWNhdGlvbi4gXFxudGhpcy5tb2RhbFNlcnZpY2UucGFyZW50Vmlld0NvbnRhaW5lciA9IHZpZXcgKFZpZXdDb250YWluZXJSZWYpJyk7XG4gICAgfVxuXG4gICAgY29uc3QgbW9kYWwgPSBuZXcgTm92b01vZGFsUmVmKCk7XG4gICAgbW9kYWwuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIG1vZGFsLm9wZW4oKTtcblxuICAgIGNvbnN0IHByb3ZpZGVyczogU3RhdGljUHJvdmlkZXJbXSA9IFt7IHByb3ZpZGU6IE5vdm9Nb2RhbFJlZiwgdXNlVmFsdWU6IG1vZGFsIH0sIHsgcHJvdmlkZTogTm92b01vZGFsUGFyYW1zLCB1c2VWYWx1ZTogc2NvcGUgfV07XG4gICAgbW9kYWwuY29udGFpbmVyUmVmID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmQoTm92b01vZGFsQ29udGFpbmVyRWxlbWVudCwgdGhpcy5fcGFyZW50Vmlld0NvbnRhaW5lciwgcHJvdmlkZXJzKTtcbiAgICByZXR1cm4gbW9kYWw7XG4gIH1cbn1cbiJdfQ==