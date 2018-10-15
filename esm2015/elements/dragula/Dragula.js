/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Directive, ElementRef, Input } from '@angular/core';
// Vendor
import * as dragulaImported from '@bullhorn/dragula';
/** @type {?} */
const dragula = dragulaImported;
// APP
import { NovoDragulaService } from './DragulaService';
export class NovoDragulaElement {
    /**
     * @param {?} element
     * @param {?} dragulaService
     */
    constructor(element, dragulaService) {
        this.dragulaService = dragulaService;
        this.drake = null;
        this.container = element.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let bag = this.dragulaService.find(this.bag);
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
    }
    /**
     * @return {?}
     */
    checkModel() {
        if (this.dragulaModel) {
            if (this.drake.models) {
                this.drake.models.push(this.dragulaModel);
            }
            else {
                this.drake.models = [this.dragulaModel];
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes && changes.dragulaModel) {
            if (this.drake) {
                if (this.drake.models) {
                    /** @type {?} */
                    let modelIndex = this.drake.models.indexOf(changes.dragulaModel.previousValue);
                    this.drake.models.splice(modelIndex, 1, changes.dragulaModel.currentValue);
                }
                else {
                    this.drake.models = [changes.dragulaModel.currentValue];
                }
            }
        }
    }
}
NovoDragulaElement.decorators = [
    { type: Directive, args: [{
                selector: '[dragula]',
            },] }
];
NovoDragulaElement.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoDragulaService }
];
NovoDragulaElement.propDecorators = {
    bag: [{ type: Input, args: ['dragula',] }],
    dragulaModel: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhZ3VsYS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kcmFndWxhL0RyYWd1bGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7O0FBRWhGLE9BQU8sS0FBSyxlQUFlLE1BQU0sbUJBQW1CLENBQUM7O01BQy9DLE9BQU8sR0FBRyxlQUFlOztBQUUvQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUt0RCxNQUFNOzs7OztJQVFKLFlBQVksT0FBbUIsRUFBVSxjQUFrQztRQUFsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7UUFIM0UsVUFBSyxHQUFRLElBQUksQ0FBQztRQUloQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELFFBQVE7O1lBQ0YsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFNUMsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO2dCQUNuQixVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDekM7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQU87UUFDakIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUNuQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTs7d0JBQ2pCLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7b0JBQzlFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzVFO3FCQUFNO29CQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDekQ7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7O1lBcERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVzthQUN0Qjs7O1lBVG1CLFVBQVU7WUFLckIsa0JBQWtCOzs7a0JBTXhCLEtBQUssU0FBQyxTQUFTOzJCQUVmLEtBQUs7Ozs7SUFGTixpQ0FDUzs7SUFDVCwwQ0FDa0I7O0lBQ2xCLG1DQUFrQjs7SUFDbEIsdUNBQWU7O0lBRWtCLDRDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIFZlbmRvclxuaW1wb3J0ICogYXMgZHJhZ3VsYUltcG9ydGVkIGZyb20gJ0BidWxsaG9ybi9kcmFndWxhJztcbmNvbnN0IGRyYWd1bGEgPSBkcmFndWxhSW1wb3J0ZWQ7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9EcmFndWxhU2VydmljZSB9IGZyb20gJy4vRHJhZ3VsYVNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZHJhZ3VsYV0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRHJhZ3VsYUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgnZHJhZ3VsYScpXG4gIGJhZzogYW55O1xuICBASW5wdXQoKVxuICBkcmFndWxhTW9kZWw6IGFueTtcbiAgZHJha2U6IGFueSA9IG51bGw7XG4gIGNvbnRhaW5lcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgZHJhZ3VsYVNlcnZpY2U6IE5vdm9EcmFndWxhU2VydmljZSkge1xuICAgIHRoaXMuY29udGFpbmVyID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGJhZyA9IHRoaXMuZHJhZ3VsYVNlcnZpY2UuZmluZCh0aGlzLmJhZyk7XG5cbiAgICBpZiAoYmFnKSB7XG4gICAgICB0aGlzLmRyYWtlID0gYmFnLmRyYWtlO1xuICAgICAgdGhpcy5jaGVja01vZGVsKCk7XG4gICAgICB0aGlzLmRyYWtlLmNvbnRhaW5lcnMucHVzaCh0aGlzLmNvbnRhaW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJha2UgPSBkcmFndWxhKHtcbiAgICAgICAgY29udGFpbmVyczogW3RoaXMuY29udGFpbmVyXSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jaGVja01vZGVsKCk7XG4gICAgICB0aGlzLmRyYWd1bGFTZXJ2aWNlLmFkZCh0aGlzLmJhZywgdGhpcy5kcmFrZSk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tNb2RlbCgpIHtcbiAgICBpZiAodGhpcy5kcmFndWxhTW9kZWwpIHtcbiAgICAgIGlmICh0aGlzLmRyYWtlLm1vZGVscykge1xuICAgICAgICB0aGlzLmRyYWtlLm1vZGVscy5wdXNoKHRoaXMuZHJhZ3VsYU1vZGVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHJha2UubW9kZWxzID0gW3RoaXMuZHJhZ3VsYU1vZGVsXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5kcmFndWxhTW9kZWwpIHtcbiAgICAgIGlmICh0aGlzLmRyYWtlKSB7XG4gICAgICAgIGlmICh0aGlzLmRyYWtlLm1vZGVscykge1xuICAgICAgICAgIGxldCBtb2RlbEluZGV4ID0gdGhpcy5kcmFrZS5tb2RlbHMuaW5kZXhPZihjaGFuZ2VzLmRyYWd1bGFNb2RlbC5wcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICB0aGlzLmRyYWtlLm1vZGVscy5zcGxpY2UobW9kZWxJbmRleCwgMSwgY2hhbmdlcy5kcmFndWxhTW9kZWwuY3VycmVudFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRyYWtlLm1vZGVscyA9IFtjaGFuZ2VzLmRyYWd1bGFNb2RlbC5jdXJyZW50VmFsdWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=