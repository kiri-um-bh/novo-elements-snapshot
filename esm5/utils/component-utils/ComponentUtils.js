/**
 * @fileoverview added by tsickle
 * Generated from: utils/component-utils/ComponentUtils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { ComponentFactoryResolver, Injectable, Injector, } from '@angular/core';
var ComponentUtils = /** @class */ (function () {
    function ComponentUtils(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * @template T
     * @param {?} ComponentClass
     * @param {?} location
     * @param {?=} providers
     * @param {?=} onTop
     * @return {?}
     */
    ComponentUtils.prototype.append = /**
     * @template T
     * @param {?} ComponentClass
     * @param {?} location
     * @param {?=} providers
     * @param {?=} onTop
     * @return {?}
     */
    function (ComponentClass, location, providers, onTop) {
        /** @type {?} */
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponentClass);
        /** @type {?} */
        var parent = location.injector;
        /** @type {?} */
        var index = onTop ? 0 : location.length;
        return location.createComponent(componentFactory, index, Injector.create({ providers: providers, parent: parent }));
    };
    ComponentUtils.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ComponentUtils.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    return ComponentUtils;
}());
export { ComponentUtils };
if (false) {
    /** @type {?} */
    ComponentUtils.prototype.componentFactoryResolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50VXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsidXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx3QkFBd0IsRUFFeEIsVUFBVSxFQUNWLFFBQVEsR0FNVCxNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQUVFLHdCQUFtQix3QkFBa0Q7UUFBbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUFHLENBQUM7Ozs7Ozs7OztJQUV6RSwrQkFBTTs7Ozs7Ozs7SUFBTixVQUFVLGNBQXVCLEVBQUUsUUFBMEIsRUFBRSxTQUE0QixFQUFFLEtBQWU7O1lBQ3BHLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUM7O1lBQ3hGLE1BQU0sR0FBRyxRQUFRLENBQUMsUUFBUTs7WUFDMUIsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTTtRQUN6QyxPQUFPLFFBQVEsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFTLFdBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRyxDQUFDOztnQkFURixVQUFVOzs7O2dCQVhULHdCQUF3Qjs7SUFxQjFCLHFCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVFksY0FBYzs7O0lBQ2Isa0RBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIFJlZmxlY3RpdmVJbmplY3RvcixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgUmVzb2x2ZWRSZWZsZWN0aXZlUHJvdmlkZXIsXG4gIFN0YXRpY1Byb3ZpZGVyLFxuICBUeXBlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFV0aWxzIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7fVxuXG4gIGFwcGVuZDxUPihDb21wb25lbnRDbGFzczogVHlwZTxUPiwgbG9jYXRpb246IFZpZXdDb250YWluZXJSZWYsIHByb3ZpZGVycz86IFN0YXRpY1Byb3ZpZGVyW10sIG9uVG9wPzogYm9vbGVhbik6IENvbXBvbmVudFJlZjxUPiB7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KENvbXBvbmVudENsYXNzKTtcbiAgICBjb25zdCBwYXJlbnQgPSBsb2NhdGlvbi5pbmplY3RvcjtcbiAgICBjb25zdCBpbmRleCA9IG9uVG9wID8gMCA6IGxvY2F0aW9uLmxlbmd0aDtcbiAgICByZXR1cm4gbG9jYXRpb24uY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnksIGluZGV4LCBJbmplY3Rvci5jcmVhdGUoeyBwcm92aWRlcnMsIHBhcmVudCB9KSk7XG4gIH1cbn1cbiJdfQ==