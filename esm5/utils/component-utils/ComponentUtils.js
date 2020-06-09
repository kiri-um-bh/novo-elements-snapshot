// NG2
import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import * as i0 from "@angular/core";
var ComponentUtils = /** @class */ (function () {
    function ComponentUtils(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    ComponentUtils.prototype.append = function (ComponentClass, location, providers, onTop) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponentClass);
        var parent = location.injector;
        var index = onTop ? 0 : location.length;
        return location.createComponent(componentFactory, index, Injector.create({ providers: providers, parent: parent }));
    };
    ComponentUtils.ɵfac = function ComponentUtils_Factory(t) { return new (t || ComponentUtils)(i0.ɵɵinject(i0.ComponentFactoryResolver)); };
    ComponentUtils.ɵprov = i0.ɵɵdefineInjectable({ token: ComponentUtils, factory: ComponentUtils.ɵfac });
    return ComponentUtils;
}());
export { ComponentUtils };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ComponentUtils, [{
        type: Injectable
    }], function () { return [{ type: i0.ComponentFactoryResolver }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50VXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsidXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsd0JBQXdCLEVBQWdCLFVBQVUsRUFBRSxRQUFRLEVBQTBDLE1BQU0sZUFBZSxDQUFDOztBQUVySTtJQUVFLHdCQUFtQix3QkFBa0Q7UUFBbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUFJLENBQUM7SUFFMUUsK0JBQU0sR0FBTixVQUFVLGNBQXVCLEVBQUUsUUFBMEIsRUFBRSxTQUE0QixFQUFFLEtBQWU7UUFDMUcsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDL0YsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUMxQyxPQUFPLFFBQVEsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFTLFdBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRyxDQUFDO2dGQVJVLGNBQWM7MERBQWQsY0FBYyxXQUFkLGNBQWM7eUJBSjNCO0NBYUMsQUFWRCxJQVVDO1NBVFksY0FBYztrREFBZCxjQUFjO2NBRDFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlLCBJbmplY3RvciwgU3RhdGljUHJvdmlkZXIsIFR5cGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFV0aWxzIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7IH1cblxuICBhcHBlbmQ8VD4oQ29tcG9uZW50Q2xhc3M6IFR5cGU8VD4sIGxvY2F0aW9uOiBWaWV3Q29udGFpbmVyUmVmLCBwcm92aWRlcnM/OiBTdGF0aWNQcm92aWRlcltdLCBvblRvcD86IGJvb2xlYW4pOiBDb21wb25lbnRSZWY8VD4ge1xuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShDb21wb25lbnRDbGFzcyk7XG4gICAgY29uc3QgcGFyZW50ID0gbG9jYXRpb24uaW5qZWN0b3I7XG4gICAgY29uc3QgaW5kZXggPSBvblRvcCA/IDAgOiBsb2NhdGlvbi5sZW5ndGg7XG4gICAgcmV0dXJuIGxvY2F0aW9uLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5LCBpbmRleCwgSW5qZWN0b3IuY3JlYXRlKHsgcHJvdmlkZXJzLCBwYXJlbnQgfSkpO1xuICB9XG59XG4iXX0=