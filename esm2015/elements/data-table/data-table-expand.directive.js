/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/data-table-expand.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.shouldExpandAllRows = (/**
         * @param {?} targetId
         * @return {?}
         */
        (targetId) => targetId === undefined);
        this.shouldExpandOneRow = (/**
         * @param {?} targetId
         * @return {?}
         */
        (targetId) => targetId === ((/** @type {?} */ (((/** @type {?} */ (this.row)))))).id);
        this.subscription = this.state.expandSource.subscribe((/**
         * @param {?=} targetId
         * @return {?}
         */
        (targetId) => {
            if (this.shouldExpandAllRows(targetId) || this.shouldExpandOneRow(targetId)) {
                if (dataTable.isExpanded(this.row)) {
                    this.render();
                }
                else {
                    this.clear();
                }
            }
        }));
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
    NovoDataTableExpandDirective.prototype.shouldExpandAllRows;
    /** @type {?} */
    NovoDataTableExpandDirective.prototype.shouldExpandOneRow;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1leHBhbmQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS1leHBhbmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUd6RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUt2RCxNQUFNLE9BQU8sNEJBQTRCOzs7Ozs7SUFRdkMsWUFBbUIsS0FBdUIsRUFBVSxLQUF3QixFQUFVLFNBQTJCO1FBQTlGLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQVlqSCx3QkFBbUI7Ozs7UUFBRyxDQUFDLFFBQWdCLEVBQVcsRUFBRSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUM7UUFFNUUsdUJBQWtCOzs7O1FBQUcsQ0FBQyxRQUFnQixFQUFFLEVBQUUsQ0FBQyxRQUFRLEtBQUssQ0FBQyxtQkFBQSxDQUFDLG1CQUFBLElBQUksQ0FBQyxHQUFHLEVBQVcsQ0FBQyxFQUFrQixDQUFDLENBQUMsRUFBRSxFQUFDO1FBYm5HLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsUUFBaUIsRUFBRSxFQUFFO1lBQzFFLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDM0UsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUNmO3FCQUFNO29CQUNMLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDZDthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBTUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFHRCxPQUFPLENBQUMsS0FBaUI7UUFDdkIsSUFBSSxDQUFDLG1CQUFBLEtBQUssQ0FBQyxNQUFNLEVBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxFQUFFO1lBQ3RFLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxLQUFLO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLE1BQU07UUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUN2RTtJQUNILENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjthQUNsQzs7OztZQVRxRCxnQkFBZ0I7WUFHN0QsY0FBYztZQUVkLGFBQWE7OztrQkFNbkIsS0FBSzt1QkFFTCxLQUFLLFNBQUMscUJBQXFCO3NCQXlCM0IsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQTNCakMsMkNBQ087O0lBQ1AsZ0RBQzJCOzs7OztJQUUzQixvREFBbUM7O0lBY25DLDJEQUE0RTs7SUFFNUUsMERBQXFHOztJQWR6Riw2Q0FBOEI7Ozs7O0lBQUUsNkNBQWdDOzs7OztJQUFFLGlEQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhdGFUYWJsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZS9kYXRhLXRhYmxlLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZSB9IGZyb20gJy4vZGF0YS10YWJsZS5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b0RhdGFUYWJsZUV4cGFuZF0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlRXhwYW5kRGlyZWN0aXZlPFQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgcm93OiBUO1xuICBASW5wdXQoJ25vdm9EYXRhVGFibGVFeHBhbmQnKVxuICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBzdGF0ZTogRGF0YVRhYmxlU3RhdGU8VD4sIHByaXZhdGUgZGF0YVRhYmxlOiBOb3ZvRGF0YVRhYmxlPFQ+KSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnN0YXRlLmV4cGFuZFNvdXJjZS5zdWJzY3JpYmUoKHRhcmdldElkPzogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy5zaG91bGRFeHBhbmRBbGxSb3dzKHRhcmdldElkKSB8fCB0aGlzLnNob3VsZEV4cGFuZE9uZVJvdyh0YXJnZXRJZCkpIHtcbiAgICAgICAgaWYgKGRhdGFUYWJsZS5pc0V4cGFuZGVkKHRoaXMucm93KSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzaG91bGRFeHBhbmRBbGxSb3dzID0gKHRhcmdldElkOiBudW1iZXIpOiBib29sZWFuID0+IHRhcmdldElkID09PSB1bmRlZmluZWQ7XG5cbiAgc2hvdWxkRXhwYW5kT25lUm93ID0gKHRhcmdldElkOiBudW1iZXIpID0+IHRhcmdldElkID09PSAoKHRoaXMucm93IGFzIHVua25vd24pIGFzIHsgaWQ6IG51bWJlciB9KS5pZDtcblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKChldmVudC50YXJnZXQgYXMgRWxlbWVudCkuaGFzQXR0cmlidXRlKCdub3ZvLWRhdGEtdGFibGUtZXhwYW5kZXInKSkge1xuICAgICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgICAgdGhpcy5kYXRhVGFibGUuZXhwYW5kUm93KHRoaXMucm93KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMudmNSZWYuY2xlYXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xuICAgIHRoaXMudmNSZWYuY2xlYXIoKTtcbiAgICBpZiAodGhpcy50ZW1wbGF0ZSAmJiB0aGlzLnJvdykge1xuICAgICAgdGhpcy52Y1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZSwgeyAkaW1wbGljaXQ6IHRoaXMucm93IH0pO1xuICAgIH1cbiAgfVxufVxuIl19