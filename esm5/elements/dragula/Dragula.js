/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Directive, ElementRef, Input } from '@angular/core';
// Vendor
import * as dragulaImported from '@bullhorn/dragula';
/** @type {?} */
var dragula = dragulaImported;
// APP
import { NovoDragulaService } from './DragulaService';
var NovoDragulaElement = /** @class */ (function () {
    function NovoDragulaElement(element, dragulaService) {
        this.dragulaService = dragulaService;
        this.drake = null;
        this.container = element.nativeElement;
    }
    /**
     * @return {?}
     */
    NovoDragulaElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var bag = this.dragulaService.find(this.bag);
        if (bag) {
            this.drake = bag.drake;
            this.checkModel();
            this.drake.containers.push(this.container);
        }
        else {
            this.drake = dragula({
                containers: [this.container],
            });
            this.checkModel();
            this.dragulaService.add(this.bag, this.drake);
        }
    };
    /**
     * @return {?}
     */
    NovoDragulaElement.prototype.checkModel = /**
     * @return {?}
     */
    function () {
        if (this.dragulaModel) {
            if (this.drake.models) {
                this.drake.models.push(this.dragulaModel);
            }
            else {
                this.drake.models = [this.dragulaModel];
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NovoDragulaElement.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes.dragulaModel) {
            if (this.drake) {
                if (this.drake.models) {
                    /** @type {?} */
                    var modelIndex = this.drake.models.indexOf(changes.dragulaModel.previousValue);
                    this.drake.models.splice(modelIndex, 1, changes.dragulaModel.currentValue);
                }
                else {
                    this.drake.models = [changes.dragulaModel.currentValue];
                }
            }
        }
    };
    NovoDragulaElement.decorators = [
        { type: Directive, args: [{
                    selector: '[dragula]',
                },] }
    ];
    /** @nocollapse */
    NovoDragulaElement.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NovoDragulaService }
    ]; };
    NovoDragulaElement.propDecorators = {
        bag: [{ type: Input, args: ['dragula',] }],
        dragulaModel: [{ type: Input }]
    };
    return NovoDragulaElement;
}());
export { NovoDragulaElement };
if (false) {
    /** @type {?} */
    NovoDragulaElement.prototype.bag;
    /** @type {?} */
    NovoDragulaElement.prototype.dragulaModel;
    /** @type {?} */
    NovoDragulaElement.prototype.drake;
    /** @type {?} */
    NovoDragulaElement.prototype.container;
    /** @type {?} */
    NovoDragulaElement.prototype.dragulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhZ3VsYS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kcmFndWxhL0RyYWd1bGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7O0FBRWhGLE9BQU8sS0FBSyxlQUFlLE1BQU0sbUJBQW1CLENBQUM7O0lBQy9DLE9BQU8sR0FBRyxlQUFlOztBQUUvQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV0RDtJQVdFLDRCQUFZLE9BQW1CLEVBQVUsY0FBa0M7UUFBbEMsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBSDNFLFVBQUssR0FBUSxJQUFJLENBQUM7UUFJaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7O1lBQ00sR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFNUMsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO2dCQUNuQixVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7Ozs7SUFFRCx1Q0FBVTs7O0lBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN6QztTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksT0FBTztRQUNqQixJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ25DLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFOzt3QkFDakIsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztvQkFDOUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDNUU7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUN6RDthQUNGO1NBQ0Y7SUFDSCxDQUFDOztnQkFwREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO2lCQUN0Qjs7OztnQkFUbUIsVUFBVTtnQkFLckIsa0JBQWtCOzs7c0JBTXhCLEtBQUssU0FBQyxTQUFTOytCQUVmLEtBQUs7O0lBK0NSLHlCQUFDO0NBQUEsQUFyREQsSUFxREM7U0FsRFksa0JBQWtCOzs7SUFDN0IsaUNBQ1M7O0lBQ1QsMENBQ2tCOztJQUNsQixtQ0FBa0I7O0lBQ2xCLHVDQUFlOztJQUVrQiw0Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBWZW5kb3JcbmltcG9ydCAqIGFzIGRyYWd1bGFJbXBvcnRlZCBmcm9tICdAYnVsbGhvcm4vZHJhZ3VsYSc7XG5jb25zdCBkcmFndWxhID0gZHJhZ3VsYUltcG9ydGVkO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvRHJhZ3VsYVNlcnZpY2UgfSBmcm9tICcuL0RyYWd1bGFTZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RyYWd1bGFdJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RyYWd1bGFFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoJ2RyYWd1bGEnKVxuICBiYWc6IGFueTtcbiAgQElucHV0KClcbiAgZHJhZ3VsYU1vZGVsOiBhbnk7XG4gIGRyYWtlOiBhbnkgPSBudWxsO1xuICBjb250YWluZXI6IGFueTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGRyYWd1bGFTZXJ2aWNlOiBOb3ZvRHJhZ3VsYVNlcnZpY2UpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBiYWcgPSB0aGlzLmRyYWd1bGFTZXJ2aWNlLmZpbmQodGhpcy5iYWcpO1xuXG4gICAgaWYgKGJhZykge1xuICAgICAgdGhpcy5kcmFrZSA9IGJhZy5kcmFrZTtcbiAgICAgIHRoaXMuY2hlY2tNb2RlbCgpO1xuICAgICAgdGhpcy5kcmFrZS5jb250YWluZXJzLnB1c2godGhpcy5jb250YWluZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyYWtlID0gZHJhZ3VsYSh7XG4gICAgICAgIGNvbnRhaW5lcnM6IFt0aGlzLmNvbnRhaW5lcl0sXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2hlY2tNb2RlbCgpO1xuICAgICAgdGhpcy5kcmFndWxhU2VydmljZS5hZGQodGhpcy5iYWcsIHRoaXMuZHJha2UpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrTW9kZWwoKSB7XG4gICAgaWYgKHRoaXMuZHJhZ3VsYU1vZGVsKSB7XG4gICAgICBpZiAodGhpcy5kcmFrZS5tb2RlbHMpIHtcbiAgICAgICAgdGhpcy5kcmFrZS5tb2RlbHMucHVzaCh0aGlzLmRyYWd1bGFNb2RlbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyYWtlLm1vZGVscyA9IFt0aGlzLmRyYWd1bGFNb2RlbF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuZHJhZ3VsYU1vZGVsKSB7XG4gICAgICBpZiAodGhpcy5kcmFrZSkge1xuICAgICAgICBpZiAodGhpcy5kcmFrZS5tb2RlbHMpIHtcbiAgICAgICAgICBsZXQgbW9kZWxJbmRleCA9IHRoaXMuZHJha2UubW9kZWxzLmluZGV4T2YoY2hhbmdlcy5kcmFndWxhTW9kZWwucHJldmlvdXNWYWx1ZSk7XG4gICAgICAgICAgdGhpcy5kcmFrZS5tb2RlbHMuc3BsaWNlKG1vZGVsSW5kZXgsIDEsIGNoYW5nZXMuZHJhZ3VsYU1vZGVsLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kcmFrZS5tb2RlbHMgPSBbY2hhbmdlcy5kcmFndWxhTW9kZWwuY3VycmVudFZhbHVlXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19