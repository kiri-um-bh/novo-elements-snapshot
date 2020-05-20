/**
 * @fileoverview added by tsickle
 * Generated from: utils/component-utils/ComponentUtils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50VXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsidXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSx3QkFBd0IsRUFBZ0IsVUFBVSxFQUFFLFFBQVEsRUFBMEMsTUFBTSxlQUFlLENBQUM7QUFFckk7SUFFRSx3QkFBbUIsd0JBQWtEO1FBQWxELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7SUFBSSxDQUFDOzs7Ozs7Ozs7SUFFMUUsK0JBQU07Ozs7Ozs7O0lBQU4sVUFBVSxjQUF1QixFQUFFLFFBQTBCLEVBQUUsU0FBNEIsRUFBRSxLQUFlOztZQUNwRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDOztZQUN4RixNQUFNLEdBQUcsUUFBUSxDQUFDLFFBQVE7O1lBQzFCLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU07UUFDekMsT0FBTyxRQUFRLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxXQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkcsQ0FBQzs7Z0JBVEYsVUFBVTs7OztnQkFGRix3QkFBd0I7O0lBWWpDLHFCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVFksY0FBYzs7O0lBQ2Isa0RBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFN0YXRpY1Byb3ZpZGVyLCBUeXBlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRVdGlscyB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikgeyB9XG5cbiAgYXBwZW5kPFQ+KENvbXBvbmVudENsYXNzOiBUeXBlPFQ+LCBsb2NhdGlvbjogVmlld0NvbnRhaW5lclJlZiwgcHJvdmlkZXJzPzogU3RhdGljUHJvdmlkZXJbXSwgb25Ub3A/OiBib29sZWFuKTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoQ29tcG9uZW50Q2xhc3MpO1xuICAgIGNvbnN0IHBhcmVudCA9IGxvY2F0aW9uLmluamVjdG9yO1xuICAgIGNvbnN0IGluZGV4ID0gb25Ub3AgPyAwIDogbG9jYXRpb24ubGVuZ3RoO1xuICAgIHJldHVybiBsb2NhdGlvbi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSwgaW5kZXgsIEluamVjdG9yLmNyZWF0ZSh7IHByb3ZpZGVycywgcGFyZW50IH0pKTtcbiAgfVxufVxuIl19