import { Directive, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Helpers } from '../../utils/Helpers';
import { NovoDataTable } from './data-table.component';
import { DataTableState } from './state/data-table-state.service';
import * as i0 from "@angular/core";
import * as i1 from "./state/data-table-state.service";
import * as i2 from "./data-table.component";
export class NovoDataTableExpandDirective {
    constructor(vcRef, state, dataTable) {
        this.vcRef = vcRef;
        this.state = state;
        this.dataTable = dataTable;
        this.shouldExpandAllRows = (targetId) => targetId === undefined;
        this.shouldExpandOneRow = (targetId) => targetId === this.row.id;
        this.subscription = this.state.expandSource.subscribe((targetId) => {
            if (this.shouldExpandAllRows(targetId) || this.shouldExpandOneRow(targetId)) {
                if (dataTable.isExpanded(this.row)) {
                    this.render();
                }
                else {
                    this.clear();
                }
            }
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onClick(event) {
        if (event.target.hasAttribute('novo-data-table-expander')) {
            Helpers.swallowEvent(event);
            this.dataTable.expandRow(this.row);
        }
    }
    clear() {
        this.vcRef.clear();
    }
    render() {
        this.vcRef.clear();
        if (this.template && this.row) {
            this.vcRef.createEmbeddedView(this.template, { $implicit: this.row });
        }
    }
}
NovoDataTableExpandDirective.ɵfac = function NovoDataTableExpandDirective_Factory(t) { return new (t || NovoDataTableExpandDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i1.DataTableState), i0.ɵɵdirectiveInject(i2.NovoDataTable)); };
NovoDataTableExpandDirective.ɵdir = i0.ɵɵdefineDirective({ type: NovoDataTableExpandDirective, selectors: [["", "novoDataTableExpand", ""]], hostBindings: function NovoDataTableExpandDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function NovoDataTableExpandDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { row: "row", template: ["novoDataTableExpand", "template"] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDataTableExpandDirective, [{
        type: Directive,
        args: [{
                selector: '[novoDataTableExpand]',
            }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i1.DataTableState }, { type: i2.NovoDataTable }]; }, { row: [{
            type: Input
        }], template: [{
            type: Input,
            args: ['novoDataTableExpand']
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1leHBhbmQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLWV4cGFuZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7OztBQUtsRSxNQUFNLE9BQU8sNEJBQTRCO0lBUXZDLFlBQW1CLEtBQXVCLEVBQVUsS0FBd0IsRUFBVSxTQUEyQjtRQUE5RixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFZakgsd0JBQW1CLEdBQUcsQ0FBQyxRQUFnQixFQUFXLEVBQUUsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDO1FBRTVFLHVCQUFrQixHQUFHLENBQUMsUUFBZ0IsRUFBRSxFQUFFLENBQUMsUUFBUSxLQUFPLElBQUksQ0FBQyxHQUFrQyxDQUFDLEVBQUUsQ0FBQztRQWJuRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQWlCLEVBQUUsRUFBRTtZQUMxRSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzNFLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDZjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2Q7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQU1ELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFHRCxPQUFPLENBQUMsS0FBaUI7UUFDdkIsSUFBSyxLQUFLLENBQUMsTUFBa0IsQ0FBQyxZQUFZLENBQUMsMEJBQTBCLENBQUMsRUFBRTtZQUN0RSxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFTyxLQUFLO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sTUFBTTtRQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0gsQ0FBQzs7d0dBN0NVLDRCQUE0QjtpRUFBNUIsNEJBQTRCOytHQUE1QixtQkFBZTs7a0RBQWYsNEJBQTRCO2NBSHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2FBQ2xDOzRIQUdDLEdBQUc7a0JBREYsS0FBSztZQUdOLFFBQVE7a0JBRFAsS0FBSzttQkFBQyxxQkFBcUI7WUEwQjVCLE9BQU87a0JBRE4sWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZSB9IGZyb20gJy4vZGF0YS10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVRhYmxlU3RhdGUgfSBmcm9tICcuL3N0YXRlL2RhdGEtdGFibGUtc3RhdGUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvRGF0YVRhYmxlRXhwYW5kXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVFeHBhbmREaXJlY3RpdmU8VD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICByb3c6IFQ7XG4gIEBJbnB1dCgnbm92b0RhdGFUYWJsZUV4cGFuZCcpXG4gIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIHN0YXRlOiBEYXRhVGFibGVTdGF0ZTxUPiwgcHJpdmF0ZSBkYXRhVGFibGU6IE5vdm9EYXRhVGFibGU8VD4pIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuc3RhdGUuZXhwYW5kU291cmNlLnN1YnNjcmliZSgodGFyZ2V0SWQ/OiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLnNob3VsZEV4cGFuZEFsbFJvd3ModGFyZ2V0SWQpIHx8IHRoaXMuc2hvdWxkRXhwYW5kT25lUm93KHRhcmdldElkKSkge1xuICAgICAgICBpZiAoZGF0YVRhYmxlLmlzRXhwYW5kZWQodGhpcy5yb3cpKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNob3VsZEV4cGFuZEFsbFJvd3MgPSAodGFyZ2V0SWQ6IG51bWJlcik6IGJvb2xlYW4gPT4gdGFyZ2V0SWQgPT09IHVuZGVmaW5lZDtcblxuICBzaG91bGRFeHBhbmRPbmVSb3cgPSAodGFyZ2V0SWQ6IG51bWJlcikgPT4gdGFyZ2V0SWQgPT09ICgodGhpcy5yb3cgYXMgdW5rbm93bikgYXMgeyBpZDogbnVtYmVyIH0pLmlkO1xuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5oYXNBdHRyaWJ1dGUoJ25vdm8tZGF0YS10YWJsZS1leHBhbmRlcicpKSB7XG4gICAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICB0aGlzLmRhdGFUYWJsZS5leHBhbmRSb3codGhpcy5yb3cpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy52Y1JlZi5jbGVhcigpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy52Y1JlZi5jbGVhcigpO1xuICAgIGlmICh0aGlzLnRlbXBsYXRlICYmIHRoaXMucm93KSB7XG4gICAgICB0aGlzLnZjUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlLCB7ICRpbXBsaWNpdDogdGhpcy5yb3cgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=