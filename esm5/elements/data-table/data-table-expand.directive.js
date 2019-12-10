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
var NovoDataTableExpandDirective = /** @class */ (function () {
    function NovoDataTableExpandDirective(vcRef, state, dataTable) {
        var _this = this;
        this.vcRef = vcRef;
        this.state = state;
        this.dataTable = dataTable;
        this.shouldExpandAllRows = (/**
         * @param {?} targetId
         * @return {?}
         */
        function (targetId) { return targetId === undefined; });
        this.shouldExpandOneRow = (/**
         * @param {?} targetId
         * @return {?}
         */
        function (targetId) { return targetId === ((/** @type {?} */ (((/** @type {?} */ (_this.row)))))).id; });
        this.subscription = this.state.expandSource.subscribe((/**
         * @param {?=} targetId
         * @return {?}
         */
        function (targetId) {
            if (_this.shouldExpandAllRows(targetId) || _this.shouldExpandOneRow(targetId)) {
                if (dataTable.isExpanded(_this.row)) {
                    _this.render();
                }
                else {
                    _this.clear();
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    NovoDataTableExpandDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoDataTableExpandDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (((/** @type {?} */ (event.target))).hasAttribute('novo-data-table-expander')) {
            Helpers.swallowEvent(event);
            this.dataTable.expandRow(this.row);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NovoDataTableExpandDirective.prototype.clear = /**
     * @private
     * @return {?}
     */
    function () {
        this.vcRef.clear();
    };
    /**
     * @private
     * @return {?}
     */
    NovoDataTableExpandDirective.prototype.render = /**
     * @private
     * @return {?}
     */
    function () {
        this.vcRef.clear();
        if (this.template && this.row) {
            this.vcRef.createEmbeddedView(this.template, { $implicit: this.row });
        }
    };
    NovoDataTableExpandDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[novoDataTableExpand]',
                },] }
    ];
    /** @nocollapse */
    NovoDataTableExpandDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: DataTableState },
        { type: NovoDataTable }
    ]; };
    NovoDataTableExpandDirective.propDecorators = {
        row: [{ type: Input }],
        template: [{ type: Input, args: ['novoDataTableExpand',] }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return NovoDataTableExpandDirective;
}());
export { NovoDataTableExpandDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1leHBhbmQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS1leHBhbmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUd6RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUV2RDtJQVdFLHNDQUFtQixLQUF1QixFQUFVLEtBQXdCLEVBQVUsU0FBMkI7UUFBakgsaUJBVUM7UUFWa0IsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBWWpILHdCQUFtQjs7OztRQUFHLFVBQUMsUUFBZ0IsSUFBYyxPQUFBLFFBQVEsS0FBSyxTQUFTLEVBQXRCLENBQXNCLEVBQUM7UUFFNUUsdUJBQWtCOzs7O1FBQUcsVUFBQyxRQUFnQixJQUFLLE9BQUEsUUFBUSxLQUFLLENBQUMsbUJBQUEsQ0FBQyxtQkFBQSxLQUFJLENBQUMsR0FBRyxFQUFXLENBQUMsRUFBa0IsQ0FBQyxDQUFDLEVBQUUsRUFBekQsQ0FBeUQsRUFBQztRQWJuRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLFFBQWlCO1lBQ3RFLElBQUksS0FBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDM0UsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDbEMsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUNmO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDZDthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBTUQsa0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUdELDhDQUFPOzs7O0lBRFAsVUFDUSxLQUFpQjtRQUN2QixJQUFJLENBQUMsbUJBQUEsS0FBSyxDQUFDLE1BQU0sRUFBVyxDQUFDLENBQUMsWUFBWSxDQUFDLDBCQUEwQixDQUFDLEVBQUU7WUFDdEUsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7OztJQUVPLDRDQUFLOzs7O0lBQWI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRU8sNkNBQU07Ozs7SUFBZDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0gsQ0FBQzs7Z0JBaERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2lCQUNsQzs7OztnQkFUcUQsZ0JBQWdCO2dCQUc3RCxjQUFjO2dCQUVkLGFBQWE7OztzQkFNbkIsS0FBSzsyQkFFTCxLQUFLLFNBQUMscUJBQXFCOzBCQXlCM0IsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFrQm5DLG1DQUFDO0NBQUEsQUFqREQsSUFpREM7U0E5Q1ksNEJBQTRCOzs7SUFDdkMsMkNBQ087O0lBQ1AsZ0RBQzJCOzs7OztJQUUzQixvREFBbUM7O0lBY25DLDJEQUE0RTs7SUFFNUUsMERBQXFHOztJQWR6Riw2Q0FBOEI7Ozs7O0lBQUUsNkNBQWdDOzs7OztJQUFFLGlEQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhdGFUYWJsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZS9kYXRhLXRhYmxlLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZSB9IGZyb20gJy4vZGF0YS10YWJsZS5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b0RhdGFUYWJsZUV4cGFuZF0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlRXhwYW5kRGlyZWN0aXZlPFQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgcm93OiBUO1xuICBASW5wdXQoJ25vdm9EYXRhVGFibGVFeHBhbmQnKVxuICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBzdGF0ZTogRGF0YVRhYmxlU3RhdGU8VD4sIHByaXZhdGUgZGF0YVRhYmxlOiBOb3ZvRGF0YVRhYmxlPFQ+KSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnN0YXRlLmV4cGFuZFNvdXJjZS5zdWJzY3JpYmUoKHRhcmdldElkPzogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy5zaG91bGRFeHBhbmRBbGxSb3dzKHRhcmdldElkKSB8fCB0aGlzLnNob3VsZEV4cGFuZE9uZVJvdyh0YXJnZXRJZCkpIHtcbiAgICAgICAgaWYgKGRhdGFUYWJsZS5pc0V4cGFuZGVkKHRoaXMucm93KSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzaG91bGRFeHBhbmRBbGxSb3dzID0gKHRhcmdldElkOiBudW1iZXIpOiBib29sZWFuID0+IHRhcmdldElkID09PSB1bmRlZmluZWQ7XG5cbiAgc2hvdWxkRXhwYW5kT25lUm93ID0gKHRhcmdldElkOiBudW1iZXIpID0+IHRhcmdldElkID09PSAoKHRoaXMucm93IGFzIHVua25vd24pIGFzIHsgaWQ6IG51bWJlciB9KS5pZDtcblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKChldmVudC50YXJnZXQgYXMgRWxlbWVudCkuaGFzQXR0cmlidXRlKCdub3ZvLWRhdGEtdGFibGUtZXhwYW5kZXInKSkge1xuICAgICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgICAgdGhpcy5kYXRhVGFibGUuZXhwYW5kUm93KHRoaXMucm93KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMudmNSZWYuY2xlYXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xuICAgIHRoaXMudmNSZWYuY2xlYXIoKTtcbiAgICBpZiAodGhpcy50ZW1wbGF0ZSAmJiB0aGlzLnJvdykge1xuICAgICAgdGhpcy52Y1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZSwgeyAkaW1wbGljaXQ6IHRoaXMucm93IH0pO1xuICAgIH1cbiAgfVxufVxuIl19