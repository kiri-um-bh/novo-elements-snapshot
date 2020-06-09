// NG2
import { Injectable } from '@angular/core';
// APP
import { NovoModalRef, NovoModalParams, NovoModalContainerElement } from './Modal';
import { ComponentUtils } from './../../utils/component-utils/ComponentUtils';
import * as i0 from "@angular/core";
import * as i1 from "./../../utils/component-utils/ComponentUtils";
var NovoModalService = /** @class */ (function () {
    function NovoModalService(componentUtils) {
        this.componentUtils = componentUtils;
    }
    Object.defineProperty(NovoModalService.prototype, "parentViewContainer", {
        set: function (view) {
            this._parentViewContainer = view;
        },
        enumerable: true,
        configurable: true
    });
    NovoModalService.prototype.open = function (component, scope) {
        if (scope === void 0) { scope = {}; }
        if (!this._parentViewContainer) {
            throw new Error('No parent view container specified for the ModalService. Set it inside your main application. \nthis.modalService.parentViewContainer = view (ViewContainerRef)');
        }
        var modal = new NovoModalRef();
        modal.component = component;
        modal.open();
        var providers = [{ provide: NovoModalRef, useValue: modal }, { provide: NovoModalParams, useValue: scope }];
        modal.containerRef = this.componentUtils.append(NovoModalContainerElement, this._parentViewContainer, providers);
        return modal;
    };
    NovoModalService.ɵfac = function NovoModalService_Factory(t) { return new (t || NovoModalService)(i0.ɵɵinject(i1.ComponentUtils)); };
    NovoModalService.ɵprov = i0.ɵɵdefineInjectable({ token: NovoModalService, factory: NovoModalService.ɵfac });
    return NovoModalService;
}());
export { NovoModalService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoModalService, [{
        type: Injectable
    }], function () { return [{ type: i1.ComponentUtils }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL21vZGFsL01vZGFsU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFVBQVUsRUFBMEMsTUFBTSxlQUFlLENBQUM7QUFDbkYsTUFBTTtBQUNOLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLHlCQUF5QixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7O0FBRTlFO0lBSUUsMEJBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFHLENBQUM7SUFFdEQsc0JBQUksaURBQW1CO2FBQXZCLFVBQXdCLElBQXNCO1lBQzVDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFRCwrQkFBSSxHQUFKLFVBQVEsU0FBa0IsRUFBRSxLQUFVO1FBQVYsc0JBQUEsRUFBQSxVQUFVO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpS0FBaUssQ0FBQyxDQUFDO1NBQ3BMO1FBRUQsSUFBTSxLQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUM1QixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFYixJQUFNLFNBQVMsR0FBcUIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNoSSxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNqSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7b0ZBckJVLGdCQUFnQjs0REFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQjsyQkFQN0I7Q0E2QkMsQUF2QkQsSUF1QkM7U0F0QlksZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0FENUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgVmlld0NvbnRhaW5lclJlZiwgU3RhdGljUHJvdmlkZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b01vZGFsUmVmLCBOb3ZvTW9kYWxQYXJhbXMsIE5vdm9Nb2RhbENvbnRhaW5lckVsZW1lbnQgfSBmcm9tICcuL01vZGFsJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm92b01vZGFsU2VydmljZSB7XG4gIF9wYXJlbnRWaWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzKSB7fVxuXG4gIHNldCBwYXJlbnRWaWV3Q29udGFpbmVyKHZpZXc6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICB0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyID0gdmlldztcbiAgfVxuXG4gIG9wZW48VD4oY29tcG9uZW50OiBUeXBlPFQ+LCBzY29wZSA9IHt9KTogTm92b01vZGFsUmVmIHtcbiAgICBpZiAoIXRoaXMuX3BhcmVudFZpZXdDb250YWluZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gcGFyZW50IHZpZXcgY29udGFpbmVyIHNwZWNpZmllZCBmb3IgdGhlIE1vZGFsU2VydmljZS4gU2V0IGl0IGluc2lkZSB5b3VyIG1haW4gYXBwbGljYXRpb24uIFxcbnRoaXMubW9kYWxTZXJ2aWNlLnBhcmVudFZpZXdDb250YWluZXIgPSB2aWV3IChWaWV3Q29udGFpbmVyUmVmKScpO1xuICAgIH1cblxuICAgIGNvbnN0IG1vZGFsID0gbmV3IE5vdm9Nb2RhbFJlZigpO1xuICAgIG1vZGFsLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICBtb2RhbC5vcGVuKCk7XG5cbiAgICBjb25zdCBwcm92aWRlcnM6IFN0YXRpY1Byb3ZpZGVyW10gPSBbeyBwcm92aWRlOiBOb3ZvTW9kYWxSZWYsIHVzZVZhbHVlOiBtb2RhbCB9LCB7IHByb3ZpZGU6IE5vdm9Nb2RhbFBhcmFtcywgdXNlVmFsdWU6IHNjb3BlIH1dO1xuICAgIG1vZGFsLmNvbnRhaW5lclJlZiA9IHRoaXMuY29tcG9uZW50VXRpbHMuYXBwZW5kKE5vdm9Nb2RhbENvbnRhaW5lckVsZW1lbnQsIHRoaXMuX3BhcmVudFZpZXdDb250YWluZXIsIHByb3ZpZGVycyk7XG4gICAgcmV0dXJuIG1vZGFsO1xuICB9XG59XG4iXX0=