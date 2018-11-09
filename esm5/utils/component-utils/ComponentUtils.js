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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50VXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsidXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNMLHdCQUF3QixFQUV4QixVQUFVLEVBRVYsa0JBQWtCLEdBR25CLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBSUUsd0JBQVksd0JBQWtEO1FBQzVELElBQUksQ0FBQyx3QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7O0lBRUQsNkNBQW9COzs7Ozs7SUFBcEIsVUFBcUIsY0FBYyxFQUFFLFFBQTBCLEVBQUUsU0FBd0M7O1lBQ25HLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUM7O1lBQ3hGLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYzs7WUFDeEMsYUFBYSxHQUFhLGNBQWM7UUFDNUMsSUFBSSxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckMsYUFBYSxHQUFHLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNyRjtRQUNELE9BQU8sUUFBUSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7Ozs7Ozs7SUFFRCw0Q0FBbUI7Ozs7OztJQUFuQixVQUFvQixjQUFjLEVBQUUsUUFBMEIsRUFBRSxTQUF3Qzs7WUFDbEcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQzs7WUFDeEYsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjOztZQUN4QyxhQUFhLEdBQWEsY0FBYztRQUM1QyxJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQyxhQUFhLEdBQUcsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ3JGO1FBQ0QsT0FBTyxRQUFRLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN0RSxDQUFDOztnQkExQkYsVUFBVTs7OztnQkFUVCx3QkFBd0I7O0lBb0MxQixxQkFBQztDQUFBLEFBM0JELElBMkJDO1NBMUJZLGNBQWM7OztJQUN6QixrREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBJbmplY3RhYmxlLFxuICBJbmplY3RvcixcbiAgUmVmbGVjdGl2ZUluamVjdG9yLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRVdGlscyB7XG4gIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xuXG4gIGNvbnN0cnVjdG9yKGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG4gICAgdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgPSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XG4gIH1cblxuICBhcHBlbmROZXh0VG9Mb2NhdGlvbihDb21wb25lbnRDbGFzcywgbG9jYXRpb246IFZpZXdDb250YWluZXJSZWYsIHByb3ZpZGVycz86IFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyW10pOiBDb21wb25lbnRSZWY8YW55PiB7XG4gICAgbGV0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShDb21wb25lbnRDbGFzcyk7XG4gICAgbGV0IHBhcmVudEluamVjdG9yID0gbG9jYXRpb24ucGFyZW50SW5qZWN0b3I7XG4gICAgbGV0IGNoaWxkSW5qZWN0b3I6IEluamVjdG9yID0gcGFyZW50SW5qZWN0b3I7XG4gICAgaWYgKHByb3ZpZGVycyAmJiBwcm92aWRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgY2hpbGRJbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMocHJvdmlkZXJzLCBwYXJlbnRJbmplY3Rvcik7XG4gICAgfVxuICAgIHJldHVybiBsb2NhdGlvbi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSwgbG9jYXRpb24ubGVuZ3RoLCBjaGlsZEluamVjdG9yKTtcbiAgfVxuXG4gIGFwcGVuZFRvcE9mTG9jYXRpb24oQ29tcG9uZW50Q2xhc3MsIGxvY2F0aW9uOiBWaWV3Q29udGFpbmVyUmVmLCBwcm92aWRlcnM/OiBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlcltdKTogQ29tcG9uZW50UmVmPGFueT4ge1xuICAgIGxldCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoQ29tcG9uZW50Q2xhc3MpO1xuICAgIGxldCBwYXJlbnRJbmplY3RvciA9IGxvY2F0aW9uLnBhcmVudEluamVjdG9yO1xuICAgIGxldCBjaGlsZEluamVjdG9yOiBJbmplY3RvciA9IHBhcmVudEluamVjdG9yO1xuICAgIGlmIChwcm92aWRlcnMgJiYgcHJvdmlkZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNoaWxkSW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IuZnJvbVJlc29sdmVkUHJvdmlkZXJzKHByb3ZpZGVycywgcGFyZW50SW5qZWN0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYXRpb24uY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnksIDAsIGNoaWxkSW5qZWN0b3IpO1xuICB9XG59XG4iXX0=