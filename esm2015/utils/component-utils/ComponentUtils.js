/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { ComponentFactoryResolver, Injectable, Injector, ReflectiveInjector, } from '@angular/core';
export class ComponentUtils {
    /**
     * @param {?} componentFactoryResolver
     */
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * @deprecated use append() instead.
     * @param {?} ComponentClass
     * @param {?} location
     * @param {?=} providers
     * @return {?}
     */
    appendNextToLocation(ComponentClass, location, providers) {
        /** @type {?} */
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponentClass);
        /** @type {?} */
        let parentInjector = location.parentInjector;
        /** @type {?} */
        let childInjector = parentInjector;
        if (providers && providers.length > 0) {
            childInjector = ReflectiveInjector.fromResolvedProviders(providers, parentInjector);
        }
        return location.createComponent(componentFactory, location.length, childInjector);
    }
    /**
     * @deprecated
     * @param {?} ComponentClass
     * @param {?} location
     * @param {?=} providers
     * @return {?}
     */
    appendTopOfLocation(ComponentClass, location, providers) {
        /** @type {?} */
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponentClass);
        /** @type {?} */
        let parentInjector = location.parentInjector;
        /** @type {?} */
        let childInjector = parentInjector;
        if (providers && providers.length > 0) {
            childInjector = ReflectiveInjector.fromResolvedProviders(providers, parentInjector);
        }
        return location.createComponent(componentFactory, 0, childInjector);
    }
    /**
     * @template T
     * @param {?} ComponentClass
     * @param {?} location
     * @param {?=} providers
     * @param {?=} onTop
     * @return {?}
     */
    append(ComponentClass, location, providers, onTop) {
        /** @type {?} */
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponentClass);
        /** @type {?} */
        const parent = location.injector;
        /** @type {?} */
        const index = onTop ? 0 : location.length;
        return location.createComponent(componentFactory, index, Injector.create({ providers, parent }));
    }
}
ComponentUtils.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ComponentUtils.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
if (false) {
    /** @type {?} */
    ComponentUtils.prototype.componentFactoryResolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50VXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsidXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNMLHdCQUF3QixFQUV4QixVQUFVLEVBQ1YsUUFBUSxFQUNSLGtCQUFrQixHQUtuQixNQUFNLGVBQWUsQ0FBQztBQUd2QixNQUFNLE9BQU8sY0FBYzs7OztJQUN6QixZQUFtQix3QkFBa0Q7UUFBbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUFHLENBQUM7Ozs7Ozs7O0lBS3pFLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxRQUEwQixFQUFFLFNBQXdDOztZQUNuRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDOztZQUN4RixjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWM7O1lBQ3hDLGFBQWEsR0FBYSxjQUFjO1FBQzVDLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDckY7UUFDRCxPQUFPLFFBQVEsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNwRixDQUFDOzs7Ozs7OztJQUtELG1CQUFtQixDQUFDLGNBQWMsRUFBRSxRQUEwQixFQUFFLFNBQXdDOztZQUNsRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDOztZQUN4RixjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWM7O1lBQ3hDLGFBQWEsR0FBYSxjQUFjO1FBQzVDLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDckY7UUFDRCxPQUFPLFFBQVEsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7Ozs7OztJQUVELE1BQU0sQ0FBSSxjQUF1QixFQUFFLFFBQTBCLEVBQUUsU0FBNEIsRUFBRSxLQUFlOztjQUNwRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDOztjQUN4RixNQUFNLEdBQUcsUUFBUSxDQUFDLFFBQVE7O2NBQzFCLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU07UUFDekMsT0FBTyxRQUFRLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRyxDQUFDOzs7WUFuQ0YsVUFBVTs7OztZQVhULHdCQUF3Qjs7OztJQWFaLGtEQUF5RCIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBSZWZsZWN0aXZlSW5qZWN0b3IsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyLFxuICBTdGF0aWNQcm92aWRlcixcbiAgVHlwZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRVdGlscyB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGFwcGVuZCgpIGluc3RlYWQuXG4gICAqL1xuICBhcHBlbmROZXh0VG9Mb2NhdGlvbihDb21wb25lbnRDbGFzcywgbG9jYXRpb246IFZpZXdDb250YWluZXJSZWYsIHByb3ZpZGVycz86IFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyW10pOiBDb21wb25lbnRSZWY8YW55PiB7XG4gICAgbGV0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShDb21wb25lbnRDbGFzcyk7XG4gICAgbGV0IHBhcmVudEluamVjdG9yID0gbG9jYXRpb24ucGFyZW50SW5qZWN0b3I7XG4gICAgbGV0IGNoaWxkSW5qZWN0b3I6IEluamVjdG9yID0gcGFyZW50SW5qZWN0b3I7XG4gICAgaWYgKHByb3ZpZGVycyAmJiBwcm92aWRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgY2hpbGRJbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMocHJvdmlkZXJzLCBwYXJlbnRJbmplY3Rvcik7XG4gICAgfVxuICAgIHJldHVybiBsb2NhdGlvbi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSwgbG9jYXRpb24ubGVuZ3RoLCBjaGlsZEluamVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgYXBwZW5kVG9wT2ZMb2NhdGlvbihDb21wb25lbnRDbGFzcywgbG9jYXRpb246IFZpZXdDb250YWluZXJSZWYsIHByb3ZpZGVycz86IFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyW10pOiBDb21wb25lbnRSZWY8YW55PiB7XG4gICAgbGV0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShDb21wb25lbnRDbGFzcyk7XG4gICAgbGV0IHBhcmVudEluamVjdG9yID0gbG9jYXRpb24ucGFyZW50SW5qZWN0b3I7XG4gICAgbGV0IGNoaWxkSW5qZWN0b3I6IEluamVjdG9yID0gcGFyZW50SW5qZWN0b3I7XG4gICAgaWYgKHByb3ZpZGVycyAmJiBwcm92aWRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgY2hpbGRJbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMocHJvdmlkZXJzLCBwYXJlbnRJbmplY3Rvcik7XG4gICAgfVxuICAgIHJldHVybiBsb2NhdGlvbi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSwgMCwgY2hpbGRJbmplY3Rvcik7XG4gIH1cblxuICBhcHBlbmQ8VD4oQ29tcG9uZW50Q2xhc3M6IFR5cGU8VD4sIGxvY2F0aW9uOiBWaWV3Q29udGFpbmVyUmVmLCBwcm92aWRlcnM/OiBTdGF0aWNQcm92aWRlcltdLCBvblRvcD86IGJvb2xlYW4pOiBDb21wb25lbnRSZWY8VD4ge1xuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShDb21wb25lbnRDbGFzcyk7XG4gICAgY29uc3QgcGFyZW50ID0gbG9jYXRpb24uaW5qZWN0b3I7XG4gICAgY29uc3QgaW5kZXggPSBvblRvcCA/IDAgOiBsb2NhdGlvbi5sZW5ndGg7XG4gICAgcmV0dXJuIGxvY2F0aW9uLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5LCBpbmRleCwgSW5qZWN0b3IuY3JlYXRlKHsgcHJvdmlkZXJzLCBwYXJlbnQgfSkpO1xuICB9XG59XG4iXX0=