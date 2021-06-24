// NG2
import { Injectable } from '@angular/core';
// APP
import { NovoModalRef, NovoModalParams, NovoModalContainerElement } from './Modal';
import { ComponentUtils } from './../../utils/component-utils/ComponentUtils';
import * as i0 from "@angular/core";
import * as i1 from "./../../utils/component-utils/ComponentUtils";
export class NovoModalService {
    constructor(componentUtils) {
        this.componentUtils = componentUtils;
    }
    set parentViewContainer(view) {
        this._parentViewContainer = view;
    }
    open(component, scope = {}) {
        if (!this._parentViewContainer) {
            throw new Error('No parent view container specified for the ModalService. Set it inside your main application. \nthis.modalService.parentViewContainer = view (ViewContainerRef)');
        }
        const modal = new NovoModalRef();
        modal.component = component;
        modal.open();
        const providers = [{ provide: NovoModalRef, useValue: modal }, { provide: NovoModalParams, useValue: scope }];
        modal.containerRef = this.componentUtils.append(NovoModalContainerElement, this._parentViewContainer, providers);
        return modal;
    }
}
NovoModalService.ɵfac = function NovoModalService_Factory(t) { return new (t || NovoModalService)(i0.ɵɵinject(i1.ComponentUtils)); };
NovoModalService.ɵprov = i0.ɵɵdefineInjectable({ token: NovoModalService, factory: NovoModalService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoModalService, [{
        type: Injectable
    }], function () { return [{ type: i1.ComponentUtils }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL21vZGFsL01vZGFsU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFVBQVUsRUFBMEMsTUFBTSxlQUFlLENBQUM7QUFDbkYsTUFBTTtBQUNOLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLHlCQUF5QixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7O0FBRzlFLE1BQU0sT0FBTyxnQkFBZ0I7SUFHM0IsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUcsQ0FBQztJQUV0RCxJQUFJLG1CQUFtQixDQUFDLElBQXNCO1FBQzVDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQUksQ0FBSSxTQUFrQixFQUFFLEtBQUssR0FBRyxFQUFFO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpS0FBaUssQ0FBQyxDQUFDO1NBQ3BMO1FBRUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUM1QixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFYixNQUFNLFNBQVMsR0FBcUIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNoSSxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNqSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dGQXJCVSxnQkFBZ0I7d0RBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBWaWV3Q29udGFpbmVyUmVmLCBTdGF0aWNQcm92aWRlciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTW9kYWxSZWYsIE5vdm9Nb2RhbFBhcmFtcywgTm92b01vZGFsQ29udGFpbmVyRWxlbWVudCB9IGZyb20gJy4vTW9kYWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3ZvTW9kYWxTZXJ2aWNlIHtcbiAgX3BhcmVudFZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMpIHt9XG5cbiAgc2V0IHBhcmVudFZpZXdDb250YWluZXIodmlldzogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHRoaXMuX3BhcmVudFZpZXdDb250YWluZXIgPSB2aWV3O1xuICB9XG5cbiAgb3BlbjxUPihjb21wb25lbnQ6IFR5cGU8VD4sIHNjb3BlID0ge30pOiBOb3ZvTW9kYWxSZWYge1xuICAgIGlmICghdGhpcy5fcGFyZW50Vmlld0NvbnRhaW5lcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBwYXJlbnQgdmlldyBjb250YWluZXIgc3BlY2lmaWVkIGZvciB0aGUgTW9kYWxTZXJ2aWNlLiBTZXQgaXQgaW5zaWRlIHlvdXIgbWFpbiBhcHBsaWNhdGlvbi4gXFxudGhpcy5tb2RhbFNlcnZpY2UucGFyZW50Vmlld0NvbnRhaW5lciA9IHZpZXcgKFZpZXdDb250YWluZXJSZWYpJyk7XG4gICAgfVxuXG4gICAgY29uc3QgbW9kYWwgPSBuZXcgTm92b01vZGFsUmVmKCk7XG4gICAgbW9kYWwuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIG1vZGFsLm9wZW4oKTtcblxuICAgIGNvbnN0IHByb3ZpZGVyczogU3RhdGljUHJvdmlkZXJbXSA9IFt7IHByb3ZpZGU6IE5vdm9Nb2RhbFJlZiwgdXNlVmFsdWU6IG1vZGFsIH0sIHsgcHJvdmlkZTogTm92b01vZGFsUGFyYW1zLCB1c2VWYWx1ZTogc2NvcGUgfV07XG4gICAgbW9kYWwuY29udGFpbmVyUmVmID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmQoTm92b01vZGFsQ29udGFpbmVyRWxlbWVudCwgdGhpcy5fcGFyZW50Vmlld0NvbnRhaW5lciwgcHJvdmlkZXJzKTtcbiAgICByZXR1cm4gbW9kYWw7XG4gIH1cbn1cbiJdfQ==