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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhZ3VsYS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kcmFndWxhL0RyYWd1bGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDOztBQUVoRixPQUFPLEtBQUssZUFBZSxNQUFNLG1CQUFtQixDQUFDOztJQUMvQyxPQUFPLEdBQUcsZUFBZTs7QUFFL0IsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFdEQ7SUFXRSw0QkFBWSxPQUFtQixFQUFVLGNBQWtDO1FBQWxDLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQUgzRSxVQUFLLEdBQVEsSUFBSSxDQUFDO1FBSWhCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSOztZQUNNLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRTVDLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVDO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztnQkFDbkIsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDOzs7O0lBRUQsdUNBQVU7OztJQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDekM7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsd0NBQVc7Ozs7SUFBWCxVQUFZLE9BQU87UUFDakIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUNuQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTs7d0JBQ2pCLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7b0JBQzlFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzVFO3FCQUFNO29CQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDekQ7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7Z0JBcERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztpQkFDdEI7Ozs7Z0JBVG1CLFVBQVU7Z0JBS3JCLGtCQUFrQjs7O3NCQU14QixLQUFLLFNBQUMsU0FBUzsrQkFFZixLQUFLOztJQStDUix5QkFBQztDQUFBLEFBckRELElBcURDO1NBbERZLGtCQUFrQjs7O0lBQzdCLGlDQUNTOztJQUNULDBDQUNrQjs7SUFDbEIsbUNBQWtCOztJQUNsQix1Q0FBZTs7Ozs7SUFFa0IsNENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gVmVuZG9yXG5pbXBvcnQgKiBhcyBkcmFndWxhSW1wb3J0ZWQgZnJvbSAnQGJ1bGxob3JuL2RyYWd1bGEnO1xuY29uc3QgZHJhZ3VsYSA9IGRyYWd1bGFJbXBvcnRlZDtcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0RyYWd1bGFTZXJ2aWNlIH0gZnJvbSAnLi9EcmFndWxhU2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkcmFndWxhXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EcmFndWxhRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCdkcmFndWxhJylcbiAgYmFnOiBhbnk7XG4gIEBJbnB1dCgpXG4gIGRyYWd1bGFNb2RlbDogYW55O1xuICBkcmFrZTogYW55ID0gbnVsbDtcbiAgY29udGFpbmVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBkcmFndWxhU2VydmljZTogTm92b0RyYWd1bGFTZXJ2aWNlKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgYmFnID0gdGhpcy5kcmFndWxhU2VydmljZS5maW5kKHRoaXMuYmFnKTtcblxuICAgIGlmIChiYWcpIHtcbiAgICAgIHRoaXMuZHJha2UgPSBiYWcuZHJha2U7XG4gICAgICB0aGlzLmNoZWNrTW9kZWwoKTtcbiAgICAgIHRoaXMuZHJha2UuY29udGFpbmVycy5wdXNoKHRoaXMuY29udGFpbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmFrZSA9IGRyYWd1bGEoe1xuICAgICAgICBjb250YWluZXJzOiBbdGhpcy5jb250YWluZXJdLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmNoZWNrTW9kZWwoKTtcbiAgICAgIHRoaXMuZHJhZ3VsYVNlcnZpY2UuYWRkKHRoaXMuYmFnLCB0aGlzLmRyYWtlKTtcbiAgICB9XG4gIH1cblxuICBjaGVja01vZGVsKCkge1xuICAgIGlmICh0aGlzLmRyYWd1bGFNb2RlbCkge1xuICAgICAgaWYgKHRoaXMuZHJha2UubW9kZWxzKSB7XG4gICAgICAgIHRoaXMuZHJha2UubW9kZWxzLnB1c2godGhpcy5kcmFndWxhTW9kZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kcmFrZS5tb2RlbHMgPSBbdGhpcy5kcmFndWxhTW9kZWxdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLmRyYWd1bGFNb2RlbCkge1xuICAgICAgaWYgKHRoaXMuZHJha2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJha2UubW9kZWxzKSB7XG4gICAgICAgICAgbGV0IG1vZGVsSW5kZXggPSB0aGlzLmRyYWtlLm1vZGVscy5pbmRleE9mKGNoYW5nZXMuZHJhZ3VsYU1vZGVsLnByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgIHRoaXMuZHJha2UubW9kZWxzLnNwbGljZShtb2RlbEluZGV4LCAxLCBjaGFuZ2VzLmRyYWd1bGFNb2RlbC5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZHJha2UubW9kZWxzID0gW2NoYW5nZXMuZHJhZ3VsYU1vZGVsLmN1cnJlbnRWYWx1ZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==