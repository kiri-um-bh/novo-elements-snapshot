// NG2
import { Directive, ElementRef, Input } from '@angular/core';
// Vendor
import * as dragulaImported from '@bullhorn/dragula';
const dragula = dragulaImported;
// APP
import { NovoDragulaService } from './DragulaService';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhZ3VsYS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kcmFndWxhL0RyYWd1bGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNoRixTQUFTO0FBQ1QsT0FBTyxLQUFLLGVBQWUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxNQUFNLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFDaEMsTUFBTTtBQUNOLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBS3RELE1BQU0sT0FBTyxrQkFBa0I7SUFRN0IsWUFBWSxPQUFtQixFQUFVLGNBQWtDO1FBQWxDLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtRQUgzRSxVQUFLLEdBQVEsSUFBSSxDQUFDO1FBSWhCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUN6QyxDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUvQyxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7Z0JBQ25CLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0IsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN6QztTQUNGO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFPO1FBQ2pCLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDbkMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ3JCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNqRixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUM1RTtxQkFBTTtvQkFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ3pEO2FBQ0Y7U0FDRjtJQUNILENBQUM7OztZQXBERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7YUFDdEI7OztZQVRtQixVQUFVO1lBS3JCLGtCQUFrQjs7O2tCQU14QixLQUFLLFNBQUMsU0FBUzsyQkFFZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gVmVuZG9yXG5pbXBvcnQgKiBhcyBkcmFndWxhSW1wb3J0ZWQgZnJvbSAnQGJ1bGxob3JuL2RyYWd1bGEnO1xuY29uc3QgZHJhZ3VsYSA9IGRyYWd1bGFJbXBvcnRlZDtcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0RyYWd1bGFTZXJ2aWNlIH0gZnJvbSAnLi9EcmFndWxhU2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkcmFndWxhXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EcmFndWxhRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCdkcmFndWxhJylcbiAgYmFnOiBhbnk7XG4gIEBJbnB1dCgpXG4gIGRyYWd1bGFNb2RlbDogYW55O1xuICBkcmFrZTogYW55ID0gbnVsbDtcbiAgY29udGFpbmVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBkcmFndWxhU2VydmljZTogTm92b0RyYWd1bGFTZXJ2aWNlKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBiYWcgPSB0aGlzLmRyYWd1bGFTZXJ2aWNlLmZpbmQodGhpcy5iYWcpO1xuXG4gICAgaWYgKGJhZykge1xuICAgICAgdGhpcy5kcmFrZSA9IGJhZy5kcmFrZTtcbiAgICAgIHRoaXMuY2hlY2tNb2RlbCgpO1xuICAgICAgdGhpcy5kcmFrZS5jb250YWluZXJzLnB1c2godGhpcy5jb250YWluZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyYWtlID0gZHJhZ3VsYSh7XG4gICAgICAgIGNvbnRhaW5lcnM6IFt0aGlzLmNvbnRhaW5lcl0sXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2hlY2tNb2RlbCgpO1xuICAgICAgdGhpcy5kcmFndWxhU2VydmljZS5hZGQodGhpcy5iYWcsIHRoaXMuZHJha2UpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrTW9kZWwoKSB7XG4gICAgaWYgKHRoaXMuZHJhZ3VsYU1vZGVsKSB7XG4gICAgICBpZiAodGhpcy5kcmFrZS5tb2RlbHMpIHtcbiAgICAgICAgdGhpcy5kcmFrZS5tb2RlbHMucHVzaCh0aGlzLmRyYWd1bGFNb2RlbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyYWtlLm1vZGVscyA9IFt0aGlzLmRyYWd1bGFNb2RlbF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuZHJhZ3VsYU1vZGVsKSB7XG4gICAgICBpZiAodGhpcy5kcmFrZSkge1xuICAgICAgICBpZiAodGhpcy5kcmFrZS5tb2RlbHMpIHtcbiAgICAgICAgICBjb25zdCBtb2RlbEluZGV4ID0gdGhpcy5kcmFrZS5tb2RlbHMuaW5kZXhPZihjaGFuZ2VzLmRyYWd1bGFNb2RlbC5wcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICB0aGlzLmRyYWtlLm1vZGVscy5zcGxpY2UobW9kZWxJbmRleCwgMSwgY2hhbmdlcy5kcmFndWxhTW9kZWwuY3VycmVudFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRyYWtlLm1vZGVscyA9IFtjaGFuZ2VzLmRyYWd1bGFNb2RlbC5jdXJyZW50VmFsdWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=