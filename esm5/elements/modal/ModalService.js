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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWxTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL21vZGFsL01vZGFsU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRS9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLHlCQUF5QixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUU5RTtJQUlFLDBCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGbEQseUJBQW9CLEdBQVEsSUFBSSxDQUFDO0lBRW9CLENBQUM7SUFFdEQsc0JBQUksaURBQW1COzs7OztRQUF2QixVQUF3QixJQUFJO1lBQzFCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7Ozs7OztJQUVELCtCQUFJOzs7OztJQUFKLFVBQUssU0FBUyxFQUFFLEtBQVU7UUFBVixzQkFBQSxFQUFBLFVBQVU7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM5QixPQUFPLENBQUMsS0FBSyxDQUNYLGlLQUFpSyxDQUNsSyxDQUFDO1lBQ0YsT0FBTyxJQUFJLENBQUM7U0FDYjs7WUFFSyxLQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFDaEMsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDNUIsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDOztZQUVULFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN0SSxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzlILE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBekJGLFVBQVU7OztnQkFGRixjQUFjOztJQTRCdkIsdUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXpCWSxnQkFBZ0I7OztJQUMzQixnREFBaUM7O0lBRXJCLDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVmbGVjdGl2ZUluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Nb2RhbFJlZiwgTm92b01vZGFsUGFyYW1zLCBOb3ZvTW9kYWxDb250YWluZXJFbGVtZW50IH0gZnJvbSAnLi9Nb2RhbCc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdm9Nb2RhbFNlcnZpY2Uge1xuICBfcGFyZW50Vmlld0NvbnRhaW5lcjogYW55ID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscykge31cblxuICBzZXQgcGFyZW50Vmlld0NvbnRhaW5lcih2aWV3KSB7XG4gICAgdGhpcy5fcGFyZW50Vmlld0NvbnRhaW5lciA9IHZpZXc7XG4gIH1cblxuICBvcGVuKGNvbXBvbmVudCwgc2NvcGUgPSB7fSkge1xuICAgIGlmICghdGhpcy5fcGFyZW50Vmlld0NvbnRhaW5lcikge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ05vIHBhcmVudCB2aWV3IGNvbnRhaW5lciBzcGVjaWZpZWQgZm9yIHRoZSBNb2RhbFNlcnZpY2UuIFNldCBpdCBpbnNpZGUgeW91ciBtYWluIGFwcGxpY2F0aW9uLiBcXG50aGlzLm1vZGFsU2VydmljZS5wYXJlbnRWaWV3Q29udGFpbmVyID0gdmlldyAoVmlld0NvbnRhaW5lclJlZiknLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG1vZGFsID0gbmV3IE5vdm9Nb2RhbFJlZigpO1xuICAgIG1vZGFsLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICBtb2RhbC5vcGVuKCk7XG5cbiAgICBsZXQgYmluZGluZ3MgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShbeyBwcm92aWRlOiBOb3ZvTW9kYWxSZWYsIHVzZVZhbHVlOiBtb2RhbCB9LCB7IHByb3ZpZGU6IE5vdm9Nb2RhbFBhcmFtcywgdXNlVmFsdWU6IHNjb3BlIH1dKTtcbiAgICBtb2RhbC5jb250YWluZXJSZWYgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZE5leHRUb0xvY2F0aW9uKE5vdm9Nb2RhbENvbnRhaW5lckVsZW1lbnQsIHRoaXMuX3BhcmVudFZpZXdDb250YWluZXIsIGJpbmRpbmdzKTtcbiAgICByZXR1cm4gbW9kYWw7XG4gIH1cbn1cbiJdfQ==