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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL21vZGFsL01vZGFsU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUEwQyxNQUFNLGVBQWUsQ0FBQzs7QUFFbkYsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRzlFLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFHM0IsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUcsQ0FBQzs7Ozs7SUFFdEQsSUFBSSxtQkFBbUIsQ0FBQyxJQUFzQjtRQUM1QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7Ozs7Ozs7SUFFRCxJQUFJLENBQUksU0FBa0IsRUFBRSxLQUFLLEdBQUcsRUFBRTtRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUtBQWlLLENBQUMsQ0FBQztTQUNwTDs7Y0FFSyxLQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFDaEMsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDNUIsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDOztjQUVQLFNBQVMsR0FBcUIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDL0gsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDakgsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUF0QkYsVUFBVTs7OztZQUZGLGNBQWM7Ozs7SUFJckIsZ0RBQXVDOzs7OztJQUUzQiwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUsIFZpZXdDb250YWluZXJSZWYsIFN0YXRpY1Byb3ZpZGVyLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Nb2RhbFJlZiwgTm92b01vZGFsUGFyYW1zLCBOb3ZvTW9kYWxDb250YWluZXJFbGVtZW50IH0gZnJvbSAnLi9Nb2RhbCc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdm9Nb2RhbFNlcnZpY2Uge1xuICBfcGFyZW50Vmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscykge31cblxuICBzZXQgcGFyZW50Vmlld0NvbnRhaW5lcih2aWV3OiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgdGhpcy5fcGFyZW50Vmlld0NvbnRhaW5lciA9IHZpZXc7XG4gIH1cblxuICBvcGVuPFQ+KGNvbXBvbmVudDogVHlwZTxUPiwgc2NvcGUgPSB7fSk6IE5vdm9Nb2RhbFJlZiB7XG4gICAgaWYgKCF0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHBhcmVudCB2aWV3IGNvbnRhaW5lciBzcGVjaWZpZWQgZm9yIHRoZSBNb2RhbFNlcnZpY2UuIFNldCBpdCBpbnNpZGUgeW91ciBtYWluIGFwcGxpY2F0aW9uLiBcXG50aGlzLm1vZGFsU2VydmljZS5wYXJlbnRWaWV3Q29udGFpbmVyID0gdmlldyAoVmlld0NvbnRhaW5lclJlZiknKTtcbiAgICB9XG5cbiAgICBjb25zdCBtb2RhbCA9IG5ldyBOb3ZvTW9kYWxSZWYoKTtcbiAgICBtb2RhbC5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgbW9kYWwub3BlbigpO1xuXG4gICAgY29uc3QgcHJvdmlkZXJzOiBTdGF0aWNQcm92aWRlcltdID0gW3sgcHJvdmlkZTogTm92b01vZGFsUmVmLCB1c2VWYWx1ZTogbW9kYWwgfSwgeyBwcm92aWRlOiBOb3ZvTW9kYWxQYXJhbXMsIHVzZVZhbHVlOiBzY29wZSB9XTtcbiAgICBtb2RhbC5jb250YWluZXJSZWYgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZChOb3ZvTW9kYWxDb250YWluZXJFbGVtZW50LCB0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyLCBwcm92aWRlcnMpO1xuICAgIHJldHVybiBtb2RhbDtcbiAgfVxufVxuIl19