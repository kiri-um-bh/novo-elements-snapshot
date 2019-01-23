/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { DataTableState } from './state/data-table-state.service';
import { Helpers } from '../../utils/Helpers';
import { NovoDataTable } from './data-table.component';
/**
 * @template T
 */
export class NovoDataTableExpandDirective {
    /**
     * @param {?} vcRef
     * @param {?} state
     * @param {?} dataTable
     */
    constructor(vcRef, state, dataTable) {
        this.vcRef = vcRef;
        this.state = state;
        this.dataTable = dataTable;
        this.subscription = this.state.expandSource.subscribe(() => {
            if (dataTable.isExpanded(this.row)) {
                this.render();
            }
            else {
                this.clear();
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (((/** @type {?} */ (event.target))).hasAttribute('novo-data-table-expander')) {
            Helpers.swallowEvent(event);
            this.dataTable.expandRow(this.row);
        }
    }
    /**
     * @private
     * @return {?}
     */
    clear() {
        this.vcRef.clear();
    }
    /**
     * @private
     * @return {?}
     */
    render() {
        this.vcRef.clear();
        if (this.template && this.row) {
            this.vcRef.createEmbeddedView(this.template, { $implicit: this.row });
        }
    }
}
NovoDataTableExpandDirective.decorators = [
    { type: Directive, args: [{
                selector: '[novoDataTableExpand]',
            },] }
];
/** @nocollapse */
NovoDataTableExpandDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: DataTableState },
    { type: NovoDataTable }
];
NovoDataTableExpandDirective.propDecorators = {
    row: [{ type: Input }],
    template: [{ type: Input, args: ['novoDataTableExpand',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    NovoDataTableExpandDirective.prototype.row;
    /** @type {?} */
    NovoDataTableExpandDirective.prototype.template;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableExpandDirective.prototype.subscription;
    /** @type {?} */
    NovoDataTableExpandDirective.prototype.vcRef;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableExpandDirective.prototype.state;
    /**
     * @type {?}
     * @private
     */
    NovoDataTableExpandDirective.prototype.dataTable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1leHBhbmQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS1leHBhbmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFhLE1BQU0sZUFBZSxDQUFDO0FBR3pHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBS3ZELE1BQU0sT0FBTyw0QkFBNEI7Ozs7OztJQVF2QyxZQUFtQixLQUF1QixFQUFVLEtBQXdCLEVBQVUsU0FBMkI7UUFBOUYsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQy9HLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN6RCxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBR0QsT0FBTyxDQUFDLEtBQWlCO1FBQ3ZCLElBQUksQ0FBQyxtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsMEJBQTBCLENBQUMsRUFBRTtZQUN0RSxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Ozs7O0lBRU8sS0FBSztRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTyxNQUFNO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDdkU7SUFDSCxDQUFDOzs7WUExQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7YUFDbEM7Ozs7WUFUcUQsZ0JBQWdCO1lBRzdELGNBQWM7WUFFZCxhQUFhOzs7a0JBTW5CLEtBQUs7dUJBRUwsS0FBSyxTQUFDLHFCQUFxQjtzQkFtQjNCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFyQmpDLDJDQUNPOztJQUNQLGdEQUMyQjs7Ozs7SUFFM0Isb0RBQW1DOztJQUV2Qiw2Q0FBOEI7Ozs7O0lBQUUsNkNBQWdDOzs7OztJQUFFLGlEQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhdGFUYWJsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZS9kYXRhLXRhYmxlLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZSB9IGZyb20gJy4vZGF0YS10YWJsZS5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b0RhdGFUYWJsZUV4cGFuZF0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlRXhwYW5kRGlyZWN0aXZlPFQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgcm93OiBUO1xuICBASW5wdXQoJ25vdm9EYXRhVGFibGVFeHBhbmQnKVxuICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBzdGF0ZTogRGF0YVRhYmxlU3RhdGU8VD4sIHByaXZhdGUgZGF0YVRhYmxlOiBOb3ZvRGF0YVRhYmxlPFQ+KSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnN0YXRlLmV4cGFuZFNvdXJjZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKGRhdGFUYWJsZS5pc0V4cGFuZGVkKHRoaXMucm93KSkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICgoZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQpLmhhc0F0dHJpYnV0ZSgnbm92by1kYXRhLXRhYmxlLWV4cGFuZGVyJykpIHtcbiAgICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAgIHRoaXMuZGF0YVRhYmxlLmV4cGFuZFJvdyh0aGlzLnJvdyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLnZjUmVmLmNsZWFyKCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLnZjUmVmLmNsZWFyKCk7XG4gICAgaWYgKHRoaXMudGVtcGxhdGUgJiYgdGhpcy5yb3cpIHtcbiAgICAgIHRoaXMudmNSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGUsIHsgJGltcGxpY2l0OiB0aGlzLnJvdyB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==