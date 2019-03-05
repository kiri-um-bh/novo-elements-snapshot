/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
NovoModalService.ctorParameters = () => [
    { type: ComponentUtils }
];
if (false) {
    /** @type {?} */
    NovoModalService.prototype._parentViewContainer;
    /** @type {?} */
    NovoModalService.prototype.componentUtils;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL21vZGFsL01vZGFsU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRS9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLHlCQUF5QixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUc5RSxNQUFNOzs7O0lBR0osWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRmxELHlCQUFvQixHQUFRLElBQUksQ0FBQztJQUVvQixDQUFDOzs7OztJQUV0RCxJQUFJLG1CQUFtQixDQUFDLElBQUk7UUFDMUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUFFRCxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssR0FBRyxFQUFFO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDOUIsT0FBTyxDQUFDLEtBQUssQ0FDWCxpS0FBaUssQ0FDbEssQ0FBQztZQUNGLE9BQU8sSUFBSSxDQUFDO1NBQ2I7O2NBRUssS0FBSyxHQUFHLElBQUksWUFBWSxFQUFFO1FBQ2hDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzVCLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7WUFFVCxRQUFRLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDdEksS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5SCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQXpCRixVQUFVOzs7WUFGRixjQUFjOzs7O0lBSXJCLGdEQUFpQzs7SUFFckIsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBSZWZsZWN0aXZlSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b01vZGFsUmVmLCBOb3ZvTW9kYWxQYXJhbXMsIE5vdm9Nb2RhbENvbnRhaW5lckVsZW1lbnQgfSBmcm9tICcuL01vZGFsJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm92b01vZGFsU2VydmljZSB7XG4gIF9wYXJlbnRWaWV3Q29udGFpbmVyOiBhbnkgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzKSB7fVxuXG4gIHNldCBwYXJlbnRWaWV3Q29udGFpbmVyKHZpZXcpIHtcbiAgICB0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyID0gdmlldztcbiAgfVxuXG4gIG9wZW4oY29tcG9uZW50LCBzY29wZSA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnTm8gcGFyZW50IHZpZXcgY29udGFpbmVyIHNwZWNpZmllZCBmb3IgdGhlIE1vZGFsU2VydmljZS4gU2V0IGl0IGluc2lkZSB5b3VyIG1haW4gYXBwbGljYXRpb24uIFxcbnRoaXMubW9kYWxTZXJ2aWNlLnBhcmVudFZpZXdDb250YWluZXIgPSB2aWV3IChWaWV3Q29udGFpbmVyUmVmKScsXG4gICAgICApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbW9kYWwgPSBuZXcgTm92b01vZGFsUmVmKCk7XG4gICAgbW9kYWwuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIG1vZGFsLm9wZW4oKTtcblxuICAgIGxldCBiaW5kaW5ncyA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlKFt7IHByb3ZpZGU6IE5vdm9Nb2RhbFJlZiwgdXNlVmFsdWU6IG1vZGFsIH0sIHsgcHJvdmlkZTogTm92b01vZGFsUGFyYW1zLCB1c2VWYWx1ZTogc2NvcGUgfV0pO1xuICAgIG1vZGFsLmNvbnRhaW5lclJlZiA9IHRoaXMuY29tcG9uZW50VXRpbHMuYXBwZW5kTmV4dFRvTG9jYXRpb24oTm92b01vZGFsQ29udGFpbmVyRWxlbWVudCwgdGhpcy5fcGFyZW50Vmlld0NvbnRhaW5lciwgYmluZGluZ3MpO1xuICAgIHJldHVybiBtb2RhbDtcbiAgfVxufVxuIl19