import { Directive, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { DataTableState } from './state/data-table-state.service';
import { Helpers } from '../../utils/Helpers';
import { NovoDataTable } from './data-table.component';
import * as i0 from "@angular/core";
import * as i1 from "./state/data-table-state.service";
import * as i2 from "./data-table.component";
var NovoDataTableExpandDirective = /** @class */ (function () {
    function NovoDataTableExpandDirective(vcRef, state, dataTable) {
        var _this = this;
        this.vcRef = vcRef;
        this.state = state;
        this.dataTable = dataTable;
        this.shouldExpandAllRows = function (targetId) { return targetId === undefined; };
        this.shouldExpandOneRow = function (targetId) { return targetId === _this.row.id; };
        this.subscription = this.state.expandSource.subscribe(function (targetId) {
            if (_this.shouldExpandAllRows(targetId) || _this.shouldExpandOneRow(targetId)) {
                if (dataTable.isExpanded(_this.row)) {
                    _this.render();
                }
                else {
                    _this.clear();
                }
            }
        });
    }
    NovoDataTableExpandDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NovoDataTableExpandDirective.prototype.onClick = function (event) {
        if (event.target.hasAttribute('novo-data-table-expander')) {
            Helpers.swallowEvent(event);
            this.dataTable.expandRow(this.row);
        }
    };
    NovoDataTableExpandDirective.prototype.clear = function () {
        this.vcRef.clear();
    };
    NovoDataTableExpandDirective.prototype.render = function () {
        this.vcRef.clear();
        if (this.template && this.row) {
            this.vcRef.createEmbeddedView(this.template, { $implicit: this.row });
        }
    };
    NovoDataTableExpandDirective.ɵfac = function NovoDataTableExpandDirective_Factory(t) { return new (t || NovoDataTableExpandDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i1.DataTableState), i0.ɵɵdirectiveInject(i2.NovoDataTable)); };
    NovoDataTableExpandDirective.ɵdir = i0.ɵɵdefineDirective({ type: NovoDataTableExpandDirective, selectors: [["", "novoDataTableExpand", ""]], hostBindings: function NovoDataTableExpandDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function NovoDataTableExpandDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } }, inputs: { row: "row", template: ["novoDataTableExpand", "template"] } });
    return NovoDataTableExpandDirective;
}());
export { NovoDataTableExpandDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1leHBhbmQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS1leHBhbmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFHekcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFdkQ7SUFXRSxzQ0FBbUIsS0FBdUIsRUFBVSxLQUF3QixFQUFVLFNBQTJCO1FBQWpILGlCQVVDO1FBVmtCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQVlqSCx3QkFBbUIsR0FBRyxVQUFDLFFBQWdCLElBQWMsT0FBQSxRQUFRLEtBQUssU0FBUyxFQUF0QixDQUFzQixDQUFDO1FBRTVFLHVCQUFrQixHQUFHLFVBQUMsUUFBZ0IsSUFBSyxPQUFBLFFBQVEsS0FBTyxLQUFJLENBQUMsR0FBa0MsQ0FBQyxFQUFFLEVBQXpELENBQXlELENBQUM7UUFibkcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFpQjtZQUN0RSxJQUFJLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzNFLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ2xDLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDZjtxQkFBTTtvQkFDTCxLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2Q7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQU1ELGtEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFHRCw4Q0FBTyxHQURQLFVBQ1EsS0FBaUI7UUFDdkIsSUFBSyxLQUFLLENBQUMsTUFBa0IsQ0FBQyxZQUFZLENBQUMsMEJBQTBCLENBQUMsRUFBRTtZQUN0RSxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFTyw0Q0FBSyxHQUFiO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sNkNBQU0sR0FBZDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0gsQ0FBQzs0R0E3Q1UsNEJBQTRCO3FFQUE1Qiw0QkFBNEI7bUhBQTVCLG1CQUFlOzt1Q0FWNUI7Q0F3REMsQUFqREQsSUFpREM7U0E5Q1ksNEJBQTRCO2tEQUE1Qiw0QkFBNEI7Y0FIeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7YUFDbEM7O2tCQUVFLEtBQUs7O2tCQUVMLEtBQUs7bUJBQUMscUJBQXFCOztrQkF5QjNCLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlU3RhdGUgfSBmcm9tICcuL3N0YXRlL2RhdGEtdGFibGUtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlIH0gZnJvbSAnLi9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvRGF0YVRhYmxlRXhwYW5kXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVFeHBhbmREaXJlY3RpdmU8VD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICByb3c6IFQ7XG4gIEBJbnB1dCgnbm92b0RhdGFUYWJsZUV4cGFuZCcpXG4gIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIHN0YXRlOiBEYXRhVGFibGVTdGF0ZTxUPiwgcHJpdmF0ZSBkYXRhVGFibGU6IE5vdm9EYXRhVGFibGU8VD4pIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuc3RhdGUuZXhwYW5kU291cmNlLnN1YnNjcmliZSgodGFyZ2V0SWQ/OiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLnNob3VsZEV4cGFuZEFsbFJvd3ModGFyZ2V0SWQpIHx8IHRoaXMuc2hvdWxkRXhwYW5kT25lUm93KHRhcmdldElkKSkge1xuICAgICAgICBpZiAoZGF0YVRhYmxlLmlzRXhwYW5kZWQodGhpcy5yb3cpKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNob3VsZEV4cGFuZEFsbFJvd3MgPSAodGFyZ2V0SWQ6IG51bWJlcik6IGJvb2xlYW4gPT4gdGFyZ2V0SWQgPT09IHVuZGVmaW5lZDtcblxuICBzaG91bGRFeHBhbmRPbmVSb3cgPSAodGFyZ2V0SWQ6IG51bWJlcikgPT4gdGFyZ2V0SWQgPT09ICgodGhpcy5yb3cgYXMgdW5rbm93bikgYXMgeyBpZDogbnVtYmVyIH0pLmlkO1xuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5oYXNBdHRyaWJ1dGUoJ25vdm8tZGF0YS10YWJsZS1leHBhbmRlcicpKSB7XG4gICAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICB0aGlzLmRhdGFUYWJsZS5leHBhbmRSb3codGhpcy5yb3cpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy52Y1JlZi5jbGVhcigpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy52Y1JlZi5jbGVhcigpO1xuICAgIGlmICh0aGlzLnRlbXBsYXRlICYmIHRoaXMucm93KSB7XG4gICAgICB0aGlzLnZjUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlLCB7ICRpbXBsaWNpdDogdGhpcy5yb3cgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=