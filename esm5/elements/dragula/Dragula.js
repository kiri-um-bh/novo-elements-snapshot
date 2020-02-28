/**
 * @fileoverview added by tsickle
 * Generated from: elements/dragula/Dragula.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /**
     * @type {?}
     * @private
     */
    NovoDragulaElement.prototype.dragulaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhZ3VsYS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kcmFndWxhL0RyYWd1bGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDOztBQUVoRixPQUFPLEtBQUssZUFBZSxNQUFNLG1CQUFtQixDQUFDOztJQUMvQyxPQUFPLEdBQUcsZUFBZTs7QUFFL0IsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFdEQ7SUFXRSw0QkFBWSxPQUFtQixFQUFVLGNBQWtDO1FBQWxDLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQUgzRSxVQUFLLEdBQVEsSUFBSSxDQUFDO1FBSWhCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSOztZQUNRLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRTlDLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVDO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztnQkFDbkIsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDOzs7O0lBRUQsdUNBQVU7OztJQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDekM7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsd0NBQVc7Ozs7SUFBWCxVQUFZLE9BQU87UUFDakIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUNuQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTs7d0JBQ2YsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztvQkFDaEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDNUU7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUN6RDthQUNGO1NBQ0Y7SUFDSCxDQUFDOztnQkFwREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO2lCQUN0Qjs7OztnQkFUbUIsVUFBVTtnQkFLckIsa0JBQWtCOzs7c0JBTXhCLEtBQUssU0FBQyxTQUFTOytCQUVmLEtBQUs7O0lBK0NSLHlCQUFDO0NBQUEsQUFyREQsSUFxREM7U0FsRFksa0JBQWtCOzs7SUFDN0IsaUNBQ1M7O0lBQ1QsMENBQ2tCOztJQUNsQixtQ0FBa0I7O0lBQ2xCLHVDQUFlOzs7OztJQUVrQiw0Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBWZW5kb3JcbmltcG9ydCAqIGFzIGRyYWd1bGFJbXBvcnRlZCBmcm9tICdAYnVsbGhvcm4vZHJhZ3VsYSc7XG5jb25zdCBkcmFndWxhID0gZHJhZ3VsYUltcG9ydGVkO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvRHJhZ3VsYVNlcnZpY2UgfSBmcm9tICcuL0RyYWd1bGFTZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RyYWd1bGFdJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RyYWd1bGFFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoJ2RyYWd1bGEnKVxuICBiYWc6IGFueTtcbiAgQElucHV0KClcbiAgZHJhZ3VsYU1vZGVsOiBhbnk7XG4gIGRyYWtlOiBhbnkgPSBudWxsO1xuICBjb250YWluZXI6IGFueTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGRyYWd1bGFTZXJ2aWNlOiBOb3ZvRHJhZ3VsYVNlcnZpY2UpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGJhZyA9IHRoaXMuZHJhZ3VsYVNlcnZpY2UuZmluZCh0aGlzLmJhZyk7XG5cbiAgICBpZiAoYmFnKSB7XG4gICAgICB0aGlzLmRyYWtlID0gYmFnLmRyYWtlO1xuICAgICAgdGhpcy5jaGVja01vZGVsKCk7XG4gICAgICB0aGlzLmRyYWtlLmNvbnRhaW5lcnMucHVzaCh0aGlzLmNvbnRhaW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJha2UgPSBkcmFndWxhKHtcbiAgICAgICAgY29udGFpbmVyczogW3RoaXMuY29udGFpbmVyXSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jaGVja01vZGVsKCk7XG4gICAgICB0aGlzLmRyYWd1bGFTZXJ2aWNlLmFkZCh0aGlzLmJhZywgdGhpcy5kcmFrZSk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tNb2RlbCgpIHtcbiAgICBpZiAodGhpcy5kcmFndWxhTW9kZWwpIHtcbiAgICAgIGlmICh0aGlzLmRyYWtlLm1vZGVscykge1xuICAgICAgICB0aGlzLmRyYWtlLm1vZGVscy5wdXNoKHRoaXMuZHJhZ3VsYU1vZGVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHJha2UubW9kZWxzID0gW3RoaXMuZHJhZ3VsYU1vZGVsXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5kcmFndWxhTW9kZWwpIHtcbiAgICAgIGlmICh0aGlzLmRyYWtlKSB7XG4gICAgICAgIGlmICh0aGlzLmRyYWtlLm1vZGVscykge1xuICAgICAgICAgIGNvbnN0IG1vZGVsSW5kZXggPSB0aGlzLmRyYWtlLm1vZGVscy5pbmRleE9mKGNoYW5nZXMuZHJhZ3VsYU1vZGVsLnByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgIHRoaXMuZHJha2UubW9kZWxzLnNwbGljZShtb2RlbEluZGV4LCAxLCBjaGFuZ2VzLmRyYWd1bGFNb2RlbC5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZHJha2UubW9kZWxzID0gW2NoYW5nZXMuZHJhZ3VsYU1vZGVsLmN1cnJlbnRWYWx1ZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==