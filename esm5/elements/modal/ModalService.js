/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL21vZGFsL01vZGFsU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQTBDLE1BQU0sZUFBZSxDQUFDOztBQUVuRixPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNuRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFOUU7SUFJRSwwQkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUcsQ0FBQztJQUV0RCxzQkFBSSxpREFBbUI7Ozs7O1FBQXZCLFVBQXdCLElBQXNCO1lBQzVDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7Ozs7Ozs7SUFFRCwrQkFBSTs7Ozs7O0lBQUosVUFBUSxTQUFrQixFQUFFLEtBQVU7UUFBVixzQkFBQSxFQUFBLFVBQVU7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLGlLQUFpSyxDQUFDLENBQUM7U0FDcEw7O1lBRUssS0FBSyxHQUFHLElBQUksWUFBWSxFQUFFO1FBQ2hDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzVCLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7WUFFUCxTQUFTLEdBQXFCLENBQUMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQy9ILEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pILE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBdEJGLFVBQVU7Ozs7Z0JBRkYsY0FBYzs7SUF5QnZCLHVCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F0QlksZ0JBQWdCOzs7SUFDM0IsZ0RBQXVDOzs7OztJQUUzQiwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUsIFZpZXdDb250YWluZXJSZWYsIFN0YXRpY1Byb3ZpZGVyLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Nb2RhbFJlZiwgTm92b01vZGFsUGFyYW1zLCBOb3ZvTW9kYWxDb250YWluZXJFbGVtZW50IH0gZnJvbSAnLi9Nb2RhbCc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdm9Nb2RhbFNlcnZpY2Uge1xuICBfcGFyZW50Vmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscykge31cblxuICBzZXQgcGFyZW50Vmlld0NvbnRhaW5lcih2aWV3OiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgdGhpcy5fcGFyZW50Vmlld0NvbnRhaW5lciA9IHZpZXc7XG4gIH1cblxuICBvcGVuPFQ+KGNvbXBvbmVudDogVHlwZTxUPiwgc2NvcGUgPSB7fSk6IE5vdm9Nb2RhbFJlZiB7XG4gICAgaWYgKCF0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHBhcmVudCB2aWV3IGNvbnRhaW5lciBzcGVjaWZpZWQgZm9yIHRoZSBNb2RhbFNlcnZpY2UuIFNldCBpdCBpbnNpZGUgeW91ciBtYWluIGFwcGxpY2F0aW9uLiBcXG50aGlzLm1vZGFsU2VydmljZS5wYXJlbnRWaWV3Q29udGFpbmVyID0gdmlldyAoVmlld0NvbnRhaW5lclJlZiknKTtcbiAgICB9XG5cbiAgICBjb25zdCBtb2RhbCA9IG5ldyBOb3ZvTW9kYWxSZWYoKTtcbiAgICBtb2RhbC5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgbW9kYWwub3BlbigpO1xuXG4gICAgY29uc3QgcHJvdmlkZXJzOiBTdGF0aWNQcm92aWRlcltdID0gW3sgcHJvdmlkZTogTm92b01vZGFsUmVmLCB1c2VWYWx1ZTogbW9kYWwgfSwgeyBwcm92aWRlOiBOb3ZvTW9kYWxQYXJhbXMsIHVzZVZhbHVlOiBzY29wZSB9XTtcbiAgICBtb2RhbC5jb250YWluZXJSZWYgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZChOb3ZvTW9kYWxDb250YWluZXJFbGVtZW50LCB0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyLCBwcm92aWRlcnMpO1xuICAgIHJldHVybiBtb2RhbDtcbiAgfVxufVxuIl19