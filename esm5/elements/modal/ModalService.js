/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            console.error('No parent view container specified for the ModalService. Set it inside your main application. \nthis.modalService.parentViewContainer = view (ViewContainerRef)');
            return null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL21vZGFsL01vZGFsU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQTBDLE1BQU0sZUFBZSxDQUFDOztBQUVuRixPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNuRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFOUU7SUFJRSwwQkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUcsQ0FBQztJQUV0RCxzQkFBSSxpREFBbUI7Ozs7O1FBQXZCLFVBQXdCLElBQXNCO1lBQzVDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7Ozs7Ozs7SUFFRCwrQkFBSTs7Ozs7O0lBQUosVUFBUSxTQUFrQixFQUFFLEtBQVU7UUFBVixzQkFBQSxFQUFBLFVBQVU7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM5QixPQUFPLENBQUMsS0FBSyxDQUNYLGlLQUFpSyxDQUNsSyxDQUFDO1lBQ0YsT0FBTyxJQUFJLENBQUM7U0FDYjs7WUFFSyxLQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFDaEMsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDNUIsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDOztZQUVQLFNBQVMsR0FBcUIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDL0gsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDakgsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkF6QkYsVUFBVTs7OztnQkFGRixjQUFjOztJQTRCdkIsdUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXpCWSxnQkFBZ0I7OztJQUMzQixnREFBdUM7Ozs7O0lBRTNCLDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgVmlld0NvbnRhaW5lclJlZiwgU3RhdGljUHJvdmlkZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b01vZGFsUmVmLCBOb3ZvTW9kYWxQYXJhbXMsIE5vdm9Nb2RhbENvbnRhaW5lckVsZW1lbnQgfSBmcm9tICcuL01vZGFsJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm92b01vZGFsU2VydmljZSB7XG4gIF9wYXJlbnRWaWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzKSB7fVxuXG4gIHNldCBwYXJlbnRWaWV3Q29udGFpbmVyKHZpZXc6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICB0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyID0gdmlldztcbiAgfVxuXG4gIG9wZW48VD4oY29tcG9uZW50OiBUeXBlPFQ+LCBzY29wZSA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnTm8gcGFyZW50IHZpZXcgY29udGFpbmVyIHNwZWNpZmllZCBmb3IgdGhlIE1vZGFsU2VydmljZS4gU2V0IGl0IGluc2lkZSB5b3VyIG1haW4gYXBwbGljYXRpb24uIFxcbnRoaXMubW9kYWxTZXJ2aWNlLnBhcmVudFZpZXdDb250YWluZXIgPSB2aWV3IChWaWV3Q29udGFpbmVyUmVmKScsXG4gICAgICApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbW9kYWwgPSBuZXcgTm92b01vZGFsUmVmKCk7XG4gICAgbW9kYWwuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIG1vZGFsLm9wZW4oKTtcblxuICAgIGNvbnN0IHByb3ZpZGVyczogU3RhdGljUHJvdmlkZXJbXSA9IFt7IHByb3ZpZGU6IE5vdm9Nb2RhbFJlZiwgdXNlVmFsdWU6IG1vZGFsIH0sIHsgcHJvdmlkZTogTm92b01vZGFsUGFyYW1zLCB1c2VWYWx1ZTogc2NvcGUgfV07XG4gICAgbW9kYWwuY29udGFpbmVyUmVmID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmQoTm92b01vZGFsQ29udGFpbmVyRWxlbWVudCwgdGhpcy5fcGFyZW50Vmlld0NvbnRhaW5lciwgcHJvdmlkZXJzKTtcbiAgICByZXR1cm4gbW9kYWw7XG4gIH1cbn1cbiJdfQ==