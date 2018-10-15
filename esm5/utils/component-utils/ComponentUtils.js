/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { ComponentFactoryResolver, Injectable, ReflectiveInjector, } from '@angular/core';
var ComponentUtils = /** @class */ (function () {
    function ComponentUtils(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * @param {?} ComponentClass
     * @param {?} location
     * @param {?=} providers
     * @return {?}
     */
    ComponentUtils.prototype.appendNextToLocation = /**
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
     * @param {?} ComponentClass
     * @param {?} location
     * @param {?=} providers
     * @return {?}
     */
    ComponentUtils.prototype.appendTopOfLocation = /**
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
    ComponentUtils.decorators = [
        { type: Injectable }
    ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50VXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsidXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNMLHdCQUF3QixFQUV4QixVQUFVLEVBRVYsa0JBQWtCLEdBR25CLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBSUUsd0JBQVksd0JBQWtEO1FBQzVELElBQUksQ0FBQyx3QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7O0lBRUQsNkNBQW9COzs7Ozs7SUFBcEIsVUFBcUIsY0FBYyxFQUFFLFFBQTBCLEVBQUUsU0FBd0M7O1lBQ25HLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUM7O1lBQ3hGLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYzs7WUFDeEMsYUFBYSxHQUFhLGNBQWM7UUFDNUMsSUFBSSxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckMsYUFBYSxHQUFHLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNyRjtRQUNELE9BQU8sUUFBUSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7Ozs7Ozs7SUFFRCw0Q0FBbUI7Ozs7OztJQUFuQixVQUFvQixjQUFjLEVBQUUsUUFBMEIsRUFBRSxTQUF3Qzs7WUFDbEcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQzs7WUFDeEYsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjOztZQUN4QyxhQUFhLEdBQWEsY0FBYztRQUM1QyxJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQyxhQUFhLEdBQUcsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ3JGO1FBQ0QsT0FBTyxRQUFRLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN0RSxDQUFDOztnQkExQkYsVUFBVTs7O2dCQVRULHdCQUF3Qjs7SUFvQzFCLHFCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0ExQlksY0FBYzs7O0lBQ3pCLGtEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBSZWZsZWN0aXZlSW5qZWN0b3IsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFV0aWxzIHtcbiAgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XG5cbiAgY29uc3RydWN0b3IoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcbiAgICB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciA9IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcbiAgfVxuXG4gIGFwcGVuZE5leHRUb0xvY2F0aW9uKENvbXBvbmVudENsYXNzLCBsb2NhdGlvbjogVmlld0NvbnRhaW5lclJlZiwgcHJvdmlkZXJzPzogUmVzb2x2ZWRSZWZsZWN0aXZlUHJvdmlkZXJbXSk6IENvbXBvbmVudFJlZjxhbnk+IHtcbiAgICBsZXQgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KENvbXBvbmVudENsYXNzKTtcbiAgICBsZXQgcGFyZW50SW5qZWN0b3IgPSBsb2NhdGlvbi5wYXJlbnRJbmplY3RvcjtcbiAgICBsZXQgY2hpbGRJbmplY3RvcjogSW5qZWN0b3IgPSBwYXJlbnRJbmplY3RvcjtcbiAgICBpZiAocHJvdmlkZXJzICYmIHByb3ZpZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICBjaGlsZEluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhwcm92aWRlcnMsIHBhcmVudEluamVjdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2F0aW9uLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5LCBsb2NhdGlvbi5sZW5ndGgsIGNoaWxkSW5qZWN0b3IpO1xuICB9XG5cbiAgYXBwZW5kVG9wT2ZMb2NhdGlvbihDb21wb25lbnRDbGFzcywgbG9jYXRpb246IFZpZXdDb250YWluZXJSZWYsIHByb3ZpZGVycz86IFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyW10pOiBDb21wb25lbnRSZWY8YW55PiB7XG4gICAgbGV0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShDb21wb25lbnRDbGFzcyk7XG4gICAgbGV0IHBhcmVudEluamVjdG9yID0gbG9jYXRpb24ucGFyZW50SW5qZWN0b3I7XG4gICAgbGV0IGNoaWxkSW5qZWN0b3I6IEluamVjdG9yID0gcGFyZW50SW5qZWN0b3I7XG4gICAgaWYgKHByb3ZpZGVycyAmJiBwcm92aWRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgY2hpbGRJbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMocHJvdmlkZXJzLCBwYXJlbnRJbmplY3Rvcik7XG4gICAgfVxuICAgIHJldHVybiBsb2NhdGlvbi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSwgMCwgY2hpbGRJbmplY3Rvcik7XG4gIH1cbn1cbiJdfQ==