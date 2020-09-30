/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { ComponentFactoryResolver, Injectable, Injector, ReflectiveInjector, } from '@angular/core';
var ComponentUtils = /** @class */ (function () {
    function ComponentUtils(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * @deprecated use append() instead.
     */
    /**
     * @deprecated use append() instead.
     * @param {?} ComponentClass
     * @param {?} location
     * @param {?=} providers
     * @return {?}
     */
    ComponentUtils.prototype.appendNextToLocation = /**
     * @deprecated use append() instead.
     * @param {?} ComponentClass
     * @param {?} location
     * @param {?=} providers
     * @return {?}
     */
    function (ComponentClass, location, providers) {
        /** @type {?} */
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponentClass);
        /** @type {?} */
        var parentInjector = location.parentInjector;
        /** @type {?} */
        var childInjector = parentInjector;
        if (providers && providers.length > 0) {
            childInjector = ReflectiveInjector.fromResolvedProviders(providers, parentInjector);
        }
        return location.createComponent(componentFactory, location.length, childInjector);
    };
    /**
     * @deprecated
     */
    /**
     * @deprecated
     * @param {?} ComponentClass
     * @param {?} location
     * @param {?=} providers
     * @return {?}
     */
    ComponentUtils.prototype.appendTopOfLocation = /**
     * @deprecated
     * @param {?} ComponentClass
     * @param {?} location
     * @param {?=} providers
     * @return {?}
     */
    function (ComponentClass, location, providers) {
        /** @type {?} */
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponentClass);
        /** @type {?} */
        var parentInjector = location.parentInjector;
        /** @type {?} */
        var childInjector = parentInjector;
        if (providers && providers.length > 0) {
            childInjector = ReflectiveInjector.fromResolvedProviders(providers, parentInjector);
        }
        return location.createComponent(componentFactory, 0, childInjector);
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50VXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsidXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNMLHdCQUF3QixFQUV4QixVQUFVLEVBQ1YsUUFBUSxFQUNSLGtCQUFrQixHQUtuQixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQUVFLHdCQUFtQix3QkFBa0Q7UUFBbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUFHLENBQUM7SUFFekU7O09BRUc7Ozs7Ozs7O0lBQ0gsNkNBQW9COzs7Ozs7O0lBQXBCLFVBQXFCLGNBQWMsRUFBRSxRQUEwQixFQUFFLFNBQXdDOztZQUNuRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDOztZQUN4RixjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWM7O1lBQ3hDLGFBQWEsR0FBYSxjQUFjO1FBQzVDLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDckY7UUFDRCxPQUFPLFFBQVEsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7O0lBQ0gsNENBQW1COzs7Ozs7O0lBQW5CLFVBQW9CLGNBQWMsRUFBRSxRQUEwQixFQUFFLFNBQXdDOztZQUNsRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDOztZQUN4RixjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWM7O1lBQ3hDLGFBQWEsR0FBYSxjQUFjO1FBQzVDLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDckY7UUFDRCxPQUFPLFFBQVEsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7Ozs7OztJQUVELCtCQUFNOzs7Ozs7OztJQUFOLFVBQVUsY0FBdUIsRUFBRSxRQUEwQixFQUFFLFNBQTRCLEVBQUUsS0FBZTs7WUFDcEcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQzs7WUFDeEYsTUFBTSxHQUFHLFFBQVEsQ0FBQyxRQUFROztZQUMxQixLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNO1FBQ3pDLE9BQU8sUUFBUSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsV0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25HLENBQUM7O2dCQW5DRixVQUFVOzs7O2dCQVhULHdCQUF3Qjs7SUErQzFCLHFCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0FuQ1ksY0FBYzs7O0lBQ2Isa0RBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIFJlZmxlY3RpdmVJbmplY3RvcixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgUmVzb2x2ZWRSZWZsZWN0aXZlUHJvdmlkZXIsXG4gIFN0YXRpY1Byb3ZpZGVyLFxuICBUeXBlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFV0aWxzIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7fVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgYXBwZW5kKCkgaW5zdGVhZC5cbiAgICovXG4gIGFwcGVuZE5leHRUb0xvY2F0aW9uKENvbXBvbmVudENsYXNzLCBsb2NhdGlvbjogVmlld0NvbnRhaW5lclJlZiwgcHJvdmlkZXJzPzogUmVzb2x2ZWRSZWZsZWN0aXZlUHJvdmlkZXJbXSk6IENvbXBvbmVudFJlZjxhbnk+IHtcbiAgICBsZXQgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KENvbXBvbmVudENsYXNzKTtcbiAgICBsZXQgcGFyZW50SW5qZWN0b3IgPSBsb2NhdGlvbi5wYXJlbnRJbmplY3RvcjtcbiAgICBsZXQgY2hpbGRJbmplY3RvcjogSW5qZWN0b3IgPSBwYXJlbnRJbmplY3RvcjtcbiAgICBpZiAocHJvdmlkZXJzICYmIHByb3ZpZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICBjaGlsZEluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhwcm92aWRlcnMsIHBhcmVudEluamVjdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2F0aW9uLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5LCBsb2NhdGlvbi5sZW5ndGgsIGNoaWxkSW5qZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBhcHBlbmRUb3BPZkxvY2F0aW9uKENvbXBvbmVudENsYXNzLCBsb2NhdGlvbjogVmlld0NvbnRhaW5lclJlZiwgcHJvdmlkZXJzPzogUmVzb2x2ZWRSZWZsZWN0aXZlUHJvdmlkZXJbXSk6IENvbXBvbmVudFJlZjxhbnk+IHtcbiAgICBsZXQgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KENvbXBvbmVudENsYXNzKTtcbiAgICBsZXQgcGFyZW50SW5qZWN0b3IgPSBsb2NhdGlvbi5wYXJlbnRJbmplY3RvcjtcbiAgICBsZXQgY2hpbGRJbmplY3RvcjogSW5qZWN0b3IgPSBwYXJlbnRJbmplY3RvcjtcbiAgICBpZiAocHJvdmlkZXJzICYmIHByb3ZpZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICBjaGlsZEluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhwcm92aWRlcnMsIHBhcmVudEluamVjdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2F0aW9uLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5LCAwLCBjaGlsZEluamVjdG9yKTtcbiAgfVxuXG4gIGFwcGVuZDxUPihDb21wb25lbnRDbGFzczogVHlwZTxUPiwgbG9jYXRpb246IFZpZXdDb250YWluZXJSZWYsIHByb3ZpZGVycz86IFN0YXRpY1Byb3ZpZGVyW10sIG9uVG9wPzogYm9vbGVhbik6IENvbXBvbmVudFJlZjxUPiB7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KENvbXBvbmVudENsYXNzKTtcbiAgICBjb25zdCBwYXJlbnQgPSBsb2NhdGlvbi5pbmplY3RvcjtcbiAgICBjb25zdCBpbmRleCA9IG9uVG9wID8gMCA6IGxvY2F0aW9uLmxlbmd0aDtcbiAgICByZXR1cm4gbG9jYXRpb24uY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnksIGluZGV4LCBJbmplY3Rvci5jcmVhdGUoeyBwcm92aWRlcnMsIHBhcmVudCB9KSk7XG4gIH1cbn1cbiJdfQ==