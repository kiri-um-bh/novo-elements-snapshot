/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Injectable } from '@angular/core';
// APP
import { NovoModalRef, NovoModalParams, NovoModalContainerElement } from './Modal';
import { ComponentUtils } from './../../utils/component-utils/ComponentUtils';
export class NovoModalService {
    /**
     * @param {?} componentUtils
     */
    constructor(componentUtils) {
        this.componentUtils = componentUtils;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    set parentViewContainer(view) {
        this._parentViewContainer = view;
    }
    /**
     * @template T
     * @param {?} component
     * @param {?=} scope
     * @return {?}
     */
    open(component, scope = {}) {
        if (!this._parentViewContainer) {
            throw new Error('No parent view container specified for the ModalService. Set it inside your main application. \nthis.modalService.parentViewContainer = view (ViewContainerRef)');
        }
        /** @type {?} */
        const modal = new NovoModalRef();
        modal.component = component;
        modal.open();
        /** @type {?} */
        const providers = [{ provide: NovoModalRef, useValue: modal }, { provide: NovoModalParams, useValue: scope }];
        modal.containerRef = this.componentUtils.append(NovoModalContainerElement, this._parentViewContainer, providers);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL21vZGFsL01vZGFsU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQTBDLE1BQU0sZUFBZSxDQUFDOztBQUVuRixPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNuRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFHOUUsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUczQixZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDOzs7OztJQUV0RCxJQUFJLG1CQUFtQixDQUFDLElBQXNCO1FBQzVDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQzs7Ozs7OztJQUVELElBQUksQ0FBSSxTQUFrQixFQUFFLEtBQUssR0FBRyxFQUFFO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpS0FBaUssQ0FBQyxDQUFDO1NBQ3BMOztjQUVLLEtBQUssR0FBRyxJQUFJLFlBQVksRUFBRTtRQUNoQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUM1QixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7O2NBRVAsU0FBUyxHQUFxQixDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUMvSCxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNqSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQXRCRixVQUFVOzs7O1lBRkYsY0FBYzs7OztJQUlyQixnREFBdUM7Ozs7O0lBRTNCLDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgVmlld0NvbnRhaW5lclJlZiwgU3RhdGljUHJvdmlkZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b01vZGFsUmVmLCBOb3ZvTW9kYWxQYXJhbXMsIE5vdm9Nb2RhbENvbnRhaW5lckVsZW1lbnQgfSBmcm9tICcuL01vZGFsJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm92b01vZGFsU2VydmljZSB7XG4gIF9wYXJlbnRWaWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzKSB7fVxuXG4gIHNldCBwYXJlbnRWaWV3Q29udGFpbmVyKHZpZXc6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICB0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyID0gdmlldztcbiAgfVxuXG4gIG9wZW48VD4oY29tcG9uZW50OiBUeXBlPFQ+LCBzY29wZSA9IHt9KTogTm92b01vZGFsUmVmIHtcbiAgICBpZiAoIXRoaXMuX3BhcmVudFZpZXdDb250YWluZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gcGFyZW50IHZpZXcgY29udGFpbmVyIHNwZWNpZmllZCBmb3IgdGhlIE1vZGFsU2VydmljZS4gU2V0IGl0IGluc2lkZSB5b3VyIG1haW4gYXBwbGljYXRpb24uIFxcbnRoaXMubW9kYWxTZXJ2aWNlLnBhcmVudFZpZXdDb250YWluZXIgPSB2aWV3IChWaWV3Q29udGFpbmVyUmVmKScpO1xuICAgIH1cblxuICAgIGNvbnN0IG1vZGFsID0gbmV3IE5vdm9Nb2RhbFJlZigpO1xuICAgIG1vZGFsLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICBtb2RhbC5vcGVuKCk7XG5cbiAgICBjb25zdCBwcm92aWRlcnM6IFN0YXRpY1Byb3ZpZGVyW10gPSBbeyBwcm92aWRlOiBOb3ZvTW9kYWxSZWYsIHVzZVZhbHVlOiBtb2RhbCB9LCB7IHByb3ZpZGU6IE5vdm9Nb2RhbFBhcmFtcywgdXNlVmFsdWU6IHNjb3BlIH1dO1xuICAgIG1vZGFsLmNvbnRhaW5lclJlZiA9IHRoaXMuY29tcG9uZW50VXRpbHMuYXBwZW5kKE5vdm9Nb2RhbENvbnRhaW5lckVsZW1lbnQsIHRoaXMuX3BhcmVudFZpZXdDb250YWluZXIsIHByb3ZpZGVycyk7XG4gICAgcmV0dXJuIG1vZGFsO1xuICB9XG59XG4iXX0=