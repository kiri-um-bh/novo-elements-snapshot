// NG2
import { Directive, ElementRef, Input } from '@angular/core';
// Vendor
import * as dragulaImported from '@bullhorn/dragula';
// APP
import { NovoDragulaService } from './DragulaService';
import * as i0 from "@angular/core";
import * as i1 from "./DragulaService";
var dragula = dragulaImported;
var NovoDragulaElement = /** @class */ (function () {
    function NovoDragulaElement(element, dragulaService) {
        this.dragulaService = dragulaService;
        this.drake = null;
        this.container = element.nativeElement;
    }
    NovoDragulaElement.prototype.ngOnInit = function () {
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
    NovoDragulaElement.prototype.checkModel = function () {
        if (this.dragulaModel) {
            if (this.drake.models) {
                this.drake.models.push(this.dragulaModel);
            }
            else {
                this.drake.models = [this.dragulaModel];
            }
        }
    };
    NovoDragulaElement.prototype.ngOnChanges = function (changes) {
        if (changes && changes.dragulaModel) {
            if (this.drake) {
                if (this.drake.models) {
                    var modelIndex = this.drake.models.indexOf(changes.dragulaModel.previousValue);
                    this.drake.models.splice(modelIndex, 1, changes.dragulaModel.currentValue);
                }
                else {
                    this.drake.models = [changes.dragulaModel.currentValue];
                }
            }
        }
    };
    NovoDragulaElement.ɵfac = function NovoDragulaElement_Factory(t) { return new (t || NovoDragulaElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NovoDragulaService)); };
    NovoDragulaElement.ɵdir = i0.ɵɵdefineDirective({ type: NovoDragulaElement, selectors: [["", "dragula", ""]], inputs: { bag: ["dragula", "bag"], dragulaModel: "dragulaModel" }, features: [i0.ɵɵNgOnChangesFeature] });
    return NovoDragulaElement;
}());
export { NovoDragulaElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDragulaElement, [{
        type: Directive,
        args: [{
                selector: '[dragula]',
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NovoDragulaService }]; }, { bag: [{
            type: Input,
            args: ['dragula']
        }], dragulaModel: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhZ3VsYS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kcmFndWxhL0RyYWd1bGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNoRixTQUFTO0FBQ1QsT0FBTyxLQUFLLGVBQWUsTUFBTSxtQkFBbUIsQ0FBQztBQUVyRCxNQUFNO0FBQ04sT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUZ0RCxJQUFNLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFJaEM7SUFXRSw0QkFBWSxPQUFtQixFQUFVLGNBQWtDO1FBQWxDLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQUgzRSxVQUFLLEdBQVEsSUFBSSxDQUFDO1FBSWhCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUN6QyxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUvQyxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7Z0JBQ25CLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0IsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUVELHVDQUFVLEdBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN6QztTQUNGO0lBQ0gsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxPQUFPO1FBQ2pCLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDbkMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ3JCLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNqRixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUM1RTtxQkFBTTtvQkFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ3pEO2FBQ0Y7U0FDRjtJQUNILENBQUM7d0ZBakRVLGtCQUFrQjsyREFBbEIsa0JBQWtCOzZCQVgvQjtDQTZEQyxBQXJERCxJQXFEQztTQWxEWSxrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQUg5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7YUFDdEI7O2tCQUVFLEtBQUs7bUJBQUMsU0FBUzs7a0JBRWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIFZlbmRvclxuaW1wb3J0ICogYXMgZHJhZ3VsYUltcG9ydGVkIGZyb20gJ0BidWxsaG9ybi9kcmFndWxhJztcbmNvbnN0IGRyYWd1bGEgPSBkcmFndWxhSW1wb3J0ZWQ7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9EcmFndWxhU2VydmljZSB9IGZyb20gJy4vRHJhZ3VsYVNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZHJhZ3VsYV0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRHJhZ3VsYUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgnZHJhZ3VsYScpXG4gIGJhZzogYW55O1xuICBASW5wdXQoKVxuICBkcmFndWxhTW9kZWw6IGFueTtcbiAgZHJha2U6IGFueSA9IG51bGw7XG4gIGNvbnRhaW5lcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgZHJhZ3VsYVNlcnZpY2U6IE5vdm9EcmFndWxhU2VydmljZSkge1xuICAgIHRoaXMuY29udGFpbmVyID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgYmFnID0gdGhpcy5kcmFndWxhU2VydmljZS5maW5kKHRoaXMuYmFnKTtcblxuICAgIGlmIChiYWcpIHtcbiAgICAgIHRoaXMuZHJha2UgPSBiYWcuZHJha2U7XG4gICAgICB0aGlzLmNoZWNrTW9kZWwoKTtcbiAgICAgIHRoaXMuZHJha2UuY29udGFpbmVycy5wdXNoKHRoaXMuY29udGFpbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmFrZSA9IGRyYWd1bGEoe1xuICAgICAgICBjb250YWluZXJzOiBbdGhpcy5jb250YWluZXJdLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmNoZWNrTW9kZWwoKTtcbiAgICAgIHRoaXMuZHJhZ3VsYVNlcnZpY2UuYWRkKHRoaXMuYmFnLCB0aGlzLmRyYWtlKTtcbiAgICB9XG4gIH1cblxuICBjaGVja01vZGVsKCkge1xuICAgIGlmICh0aGlzLmRyYWd1bGFNb2RlbCkge1xuICAgICAgaWYgKHRoaXMuZHJha2UubW9kZWxzKSB7XG4gICAgICAgIHRoaXMuZHJha2UubW9kZWxzLnB1c2godGhpcy5kcmFndWxhTW9kZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kcmFrZS5tb2RlbHMgPSBbdGhpcy5kcmFndWxhTW9kZWxdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLmRyYWd1bGFNb2RlbCkge1xuICAgICAgaWYgKHRoaXMuZHJha2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJha2UubW9kZWxzKSB7XG4gICAgICAgICAgY29uc3QgbW9kZWxJbmRleCA9IHRoaXMuZHJha2UubW9kZWxzLmluZGV4T2YoY2hhbmdlcy5kcmFndWxhTW9kZWwucHJldmlvdXNWYWx1ZSk7XG4gICAgICAgICAgdGhpcy5kcmFrZS5tb2RlbHMuc3BsaWNlKG1vZGVsSW5kZXgsIDEsIGNoYW5nZXMuZHJhZ3VsYU1vZGVsLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kcmFrZS5tb2RlbHMgPSBbY2hhbmdlcy5kcmFndWxhTW9kZWwuY3VycmVudFZhbHVlXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19