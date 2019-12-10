/**
 * @fileoverview added by tsickle
 * Generated from: utils/component-utils/ComponentUtils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { ComponentFactoryResolver, Injectable, Injector, } from '@angular/core';
export class ComponentUtils {
    /**
     * @param {?} componentFactoryResolver
     */
    constructor(componentFactoryResolver) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50VXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsidXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx3QkFBd0IsRUFFeEIsVUFBVSxFQUNWLFFBQVEsR0FNVCxNQUFNLGVBQWUsQ0FBQztBQUd2QixNQUFNLE9BQU8sY0FBYzs7OztJQUN6QixZQUFtQix3QkFBa0Q7UUFBbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUFHLENBQUM7Ozs7Ozs7OztJQUV6RSxNQUFNLENBQUksY0FBdUIsRUFBRSxRQUEwQixFQUFFLFNBQTRCLEVBQUUsS0FBZTs7Y0FDcEcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQzs7Y0FDeEYsTUFBTSxHQUFHLFFBQVEsQ0FBQyxRQUFROztjQUMxQixLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNO1FBQ3pDLE9BQU8sUUFBUSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkcsQ0FBQzs7O1lBVEYsVUFBVTs7OztZQVhULHdCQUF3Qjs7OztJQWFaLGtEQUF5RCIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBSZWZsZWN0aXZlSW5qZWN0b3IsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyLFxuICBTdGF0aWNQcm92aWRlcixcbiAgVHlwZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRVdGlscyB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cblxuICBhcHBlbmQ8VD4oQ29tcG9uZW50Q2xhc3M6IFR5cGU8VD4sIGxvY2F0aW9uOiBWaWV3Q29udGFpbmVyUmVmLCBwcm92aWRlcnM/OiBTdGF0aWNQcm92aWRlcltdLCBvblRvcD86IGJvb2xlYW4pOiBDb21wb25lbnRSZWY8VD4ge1xuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShDb21wb25lbnRDbGFzcyk7XG4gICAgY29uc3QgcGFyZW50ID0gbG9jYXRpb24uaW5qZWN0b3I7XG4gICAgY29uc3QgaW5kZXggPSBvblRvcCA/IDAgOiBsb2NhdGlvbi5sZW5ndGg7XG4gICAgcmV0dXJuIGxvY2F0aW9uLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5LCBpbmRleCwgSW5qZWN0b3IuY3JlYXRlKHsgcHJvdmlkZXJzLCBwYXJlbnQgfSkpO1xuICB9XG59XG4iXX0=