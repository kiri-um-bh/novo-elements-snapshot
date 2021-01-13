// NG2
import { Directive, ElementRef, Input } from '@angular/core';
// Vendor
import * as dragulaImported from '@bullhorn/dragula';
// APP
import { NovoDragulaService } from './DragulaService';
import * as i0 from "@angular/core";
import * as i1 from "./DragulaService";
const dragula = dragulaImported;
export class NovoDragulaElement {
    constructor(element, dragulaService) {
        this.dragulaService = dragulaService;
        this.drake = null;
        this.container = element.nativeElement;
    }
    ngOnInit() {
        const bag = this.dragulaService.find(this.bag);
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
    ngOnChanges(changes) {
        if (changes && changes.dragulaModel) {
            if (this.drake) {
                if (this.drake.models) {
                    const modelIndex = this.drake.models.indexOf(changes.dragulaModel.previousValue);
                    this.drake.models.splice(modelIndex, 1, changes.dragulaModel.currentValue);
                }
                else {
                    this.drake.models = [changes.dragulaModel.currentValue];
                }
            }
        }
    }
}
NovoDragulaElement.ɵfac = function NovoDragulaElement_Factory(t) { return new (t || NovoDragulaElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NovoDragulaService)); };
NovoDragulaElement.ɵdir = i0.ɵɵdefineDirective({ type: NovoDragulaElement, selectors: [["", "dragula", ""]], inputs: { bag: ["dragula", "bag"], dragulaModel: "dragulaModel" }, features: [i0.ɵɵNgOnChangesFeature] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhZ3VsYS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RyYWd1bGEvRHJhZ3VsYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNoRixTQUFTO0FBQ1QsT0FBTyxLQUFLLGVBQWUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxNQUFNO0FBQ04sT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUN0RCxNQUFNLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFLaEMsTUFBTSxPQUFPLGtCQUFrQjtJQVE3QixZQUFZLE9BQW1CLEVBQVUsY0FBa0M7UUFBbEMsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBSDNFLFVBQUssR0FBUSxJQUFJLENBQUM7UUFJaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRS9DLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVDO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztnQkFDbkIsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzNDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3pDO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQU87UUFDakIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUNuQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDckIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ2pGLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzVFO3FCQUFNO29CQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDekQ7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7b0ZBakRVLGtCQUFrQjt1REFBbEIsa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FIOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2FBQ3RCOzhGQUdDLEdBQUc7a0JBREYsS0FBSzttQkFBQyxTQUFTO1lBR2hCLFlBQVk7a0JBRFgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIFZlbmRvclxuaW1wb3J0ICogYXMgZHJhZ3VsYUltcG9ydGVkIGZyb20gJ0BidWxsaG9ybi9kcmFndWxhJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0RyYWd1bGFTZXJ2aWNlIH0gZnJvbSAnLi9EcmFndWxhU2VydmljZSc7XG5jb25zdCBkcmFndWxhID0gZHJhZ3VsYUltcG9ydGVkO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZHJhZ3VsYV0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRHJhZ3VsYUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgnZHJhZ3VsYScpXG4gIGJhZzogYW55O1xuICBASW5wdXQoKVxuICBkcmFndWxhTW9kZWw6IGFueTtcbiAgZHJha2U6IGFueSA9IG51bGw7XG4gIGNvbnRhaW5lcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgZHJhZ3VsYVNlcnZpY2U6IE5vdm9EcmFndWxhU2VydmljZSkge1xuICAgIHRoaXMuY29udGFpbmVyID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgYmFnID0gdGhpcy5kcmFndWxhU2VydmljZS5maW5kKHRoaXMuYmFnKTtcblxuICAgIGlmIChiYWcpIHtcbiAgICAgIHRoaXMuZHJha2UgPSBiYWcuZHJha2U7XG4gICAgICB0aGlzLmNoZWNrTW9kZWwoKTtcbiAgICAgIHRoaXMuZHJha2UuY29udGFpbmVycy5wdXNoKHRoaXMuY29udGFpbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmFrZSA9IGRyYWd1bGEoe1xuICAgICAgICBjb250YWluZXJzOiBbdGhpcy5jb250YWluZXJdLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmNoZWNrTW9kZWwoKTtcbiAgICAgIHRoaXMuZHJhZ3VsYVNlcnZpY2UuYWRkKHRoaXMuYmFnLCB0aGlzLmRyYWtlKTtcbiAgICB9XG4gIH1cblxuICBjaGVja01vZGVsKCkge1xuICAgIGlmICh0aGlzLmRyYWd1bGFNb2RlbCkge1xuICAgICAgaWYgKHRoaXMuZHJha2UubW9kZWxzKSB7XG4gICAgICAgIHRoaXMuZHJha2UubW9kZWxzLnB1c2godGhpcy5kcmFndWxhTW9kZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kcmFrZS5tb2RlbHMgPSBbdGhpcy5kcmFndWxhTW9kZWxdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLmRyYWd1bGFNb2RlbCkge1xuICAgICAgaWYgKHRoaXMuZHJha2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJha2UubW9kZWxzKSB7XG4gICAgICAgICAgY29uc3QgbW9kZWxJbmRleCA9IHRoaXMuZHJha2UubW9kZWxzLmluZGV4T2YoY2hhbmdlcy5kcmFndWxhTW9kZWwucHJldmlvdXNWYWx1ZSk7XG4gICAgICAgICAgdGhpcy5kcmFrZS5tb2RlbHMuc3BsaWNlKG1vZGVsSW5kZXgsIDEsIGNoYW5nZXMuZHJhZ3VsYU1vZGVsLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kcmFrZS5tb2RlbHMgPSBbY2hhbmdlcy5kcmFndWxhTW9kZWwuY3VycmVudFZhbHVlXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19