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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhZ3VsYS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kcmFndWxhL0RyYWd1bGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7O0FBRWhGLE9BQU8sS0FBSyxlQUFlLE1BQU0sbUJBQW1CLENBQUM7O0lBQy9DLE9BQU8sR0FBRyxlQUFlOztBQUUvQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV0RDtJQVdFLDRCQUFZLE9BQW1CLEVBQVUsY0FBa0M7UUFBbEMsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBSDNFLFVBQUssR0FBUSxJQUFJLENBQUM7UUFJaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7O1lBQ00sR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFNUMsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO2dCQUNuQixVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7Ozs7SUFFRCx1Q0FBVTs7O0lBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN6QztTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksT0FBTztRQUNqQixJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ25DLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFOzt3QkFDakIsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztvQkFDOUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDNUU7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUN6RDthQUNGO1NBQ0Y7SUFDSCxDQUFDOztnQkFwREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO2lCQUN0Qjs7O2dCQVRtQixVQUFVO2dCQUtyQixrQkFBa0I7OztzQkFNeEIsS0FBSyxTQUFDLFNBQVM7K0JBRWYsS0FBSzs7SUErQ1IseUJBQUM7Q0FBQSxBQXJERCxJQXFEQztTQWxEWSxrQkFBa0I7OztJQUM3QixpQ0FDUzs7SUFDVCwwQ0FDa0I7O0lBQ2xCLG1DQUFrQjs7SUFDbEIsdUNBQWU7O0lBRWtCLDRDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIFZlbmRvclxuaW1wb3J0ICogYXMgZHJhZ3VsYUltcG9ydGVkIGZyb20gJ0BidWxsaG9ybi9kcmFndWxhJztcbmNvbnN0IGRyYWd1bGEgPSBkcmFndWxhSW1wb3J0ZWQ7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9EcmFndWxhU2VydmljZSB9IGZyb20gJy4vRHJhZ3VsYVNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZHJhZ3VsYV0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRHJhZ3VsYUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgnZHJhZ3VsYScpXG4gIGJhZzogYW55O1xuICBASW5wdXQoKVxuICBkcmFndWxhTW9kZWw6IGFueTtcbiAgZHJha2U6IGFueSA9IG51bGw7XG4gIGNvbnRhaW5lcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgZHJhZ3VsYVNlcnZpY2U6IE5vdm9EcmFndWxhU2VydmljZSkge1xuICAgIHRoaXMuY29udGFpbmVyID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGJhZyA9IHRoaXMuZHJhZ3VsYVNlcnZpY2UuZmluZCh0aGlzLmJhZyk7XG5cbiAgICBpZiAoYmFnKSB7XG4gICAgICB0aGlzLmRyYWtlID0gYmFnLmRyYWtlO1xuICAgICAgdGhpcy5jaGVja01vZGVsKCk7XG4gICAgICB0aGlzLmRyYWtlLmNvbnRhaW5lcnMucHVzaCh0aGlzLmNvbnRhaW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJha2UgPSBkcmFndWxhKHtcbiAgICAgICAgY29udGFpbmVyczogW3RoaXMuY29udGFpbmVyXSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jaGVja01vZGVsKCk7XG4gICAgICB0aGlzLmRyYWd1bGFTZXJ2aWNlLmFkZCh0aGlzLmJhZywgdGhpcy5kcmFrZSk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tNb2RlbCgpIHtcbiAgICBpZiAodGhpcy5kcmFndWxhTW9kZWwpIHtcbiAgICAgIGlmICh0aGlzLmRyYWtlLm1vZGVscykge1xuICAgICAgICB0aGlzLmRyYWtlLm1vZGVscy5wdXNoKHRoaXMuZHJhZ3VsYU1vZGVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHJha2UubW9kZWxzID0gW3RoaXMuZHJhZ3VsYU1vZGVsXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5kcmFndWxhTW9kZWwpIHtcbiAgICAgIGlmICh0aGlzLmRyYWtlKSB7XG4gICAgICAgIGlmICh0aGlzLmRyYWtlLm1vZGVscykge1xuICAgICAgICAgIGxldCBtb2RlbEluZGV4ID0gdGhpcy5kcmFrZS5tb2RlbHMuaW5kZXhPZihjaGFuZ2VzLmRyYWd1bGFNb2RlbC5wcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICB0aGlzLmRyYWtlLm1vZGVscy5zcGxpY2UobW9kZWxJbmRleCwgMSwgY2hhbmdlcy5kcmFndWxhTW9kZWwuY3VycmVudFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRyYWtlLm1vZGVscyA9IFtjaGFuZ2VzLmRyYWd1bGFNb2RlbC5jdXJyZW50VmFsdWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=