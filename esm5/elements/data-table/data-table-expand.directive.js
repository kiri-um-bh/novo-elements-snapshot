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
var NovoDataTableExpandDirective = /** @class */ (function () {
    function NovoDataTableExpandDirective(vcRef, state, dataTable) {
        var _this = this;
        this.vcRef = vcRef;
        this.state = state;
        this.dataTable = dataTable;
        this.shouldExpandAllRows = function (targetId) { return targetId === undefined; };
        this.shouldExpandOneRow = function (targetId) { return targetId === ((/** @type {?} */ (((/** @type {?} */ (_this.row)))))).id; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1leHBhbmQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS1leHBhbmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFhLE1BQU0sZUFBZSxDQUFDO0FBR3pHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBRXZEO0lBV0Usc0NBQW1CLEtBQXVCLEVBQVUsS0FBd0IsRUFBVSxTQUEyQjtRQUFqSCxpQkFVQztRQVZrQixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFZakgsd0JBQW1CLEdBQUcsVUFBQyxRQUFnQixJQUFjLE9BQUEsUUFBUSxLQUFLLFNBQVMsRUFBdEIsQ0FBc0IsQ0FBQztRQUU1RSx1QkFBa0IsR0FBRyxVQUFDLFFBQWdCLElBQUssT0FBQSxRQUFRLEtBQUssQ0FBQyxtQkFBQSxDQUFDLG1CQUFBLEtBQUksQ0FBQyxHQUFHLEVBQVcsQ0FBQyxFQUFrQixDQUFDLENBQUMsRUFBRSxFQUF6RCxDQUF5RCxDQUFDO1FBYm5HLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBaUI7WUFDdEUsSUFBSSxLQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMzRSxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNsQyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNkO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFNRCxrREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBR0QsOENBQU87Ozs7SUFEUCxVQUNRLEtBQWlCO1FBQ3ZCLElBQUksQ0FBQyxtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsMEJBQTBCLENBQUMsRUFBRTtZQUN0RSxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Ozs7O0lBRU8sNENBQUs7Ozs7SUFBYjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTyw2Q0FBTTs7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDdkU7SUFDSCxDQUFDOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7aUJBQ2xDOzs7O2dCQVRxRCxnQkFBZ0I7Z0JBRzdELGNBQWM7Z0JBRWQsYUFBYTs7O3NCQU1uQixLQUFLOzJCQUVMLEtBQUssU0FBQyxxQkFBcUI7MEJBeUIzQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQWtCbkMsbUNBQUM7Q0FBQSxBQWpERCxJQWlEQztTQTlDWSw0QkFBNEI7OztJQUN2QywyQ0FDTzs7SUFDUCxnREFDMkI7Ozs7O0lBRTNCLG9EQUFtQzs7SUFjbkMsMkRBQTRFOztJQUU1RSwwREFBcUc7O0lBZHpGLDZDQUE4Qjs7Ozs7SUFBRSw2Q0FBZ0M7Ozs7O0lBQUUsaURBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlU3RhdGUgfSBmcm9tICcuL3N0YXRlL2RhdGEtdGFibGUtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlIH0gZnJvbSAnLi9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvRGF0YVRhYmxlRXhwYW5kXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVFeHBhbmREaXJlY3RpdmU8VD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICByb3c6IFQ7XG4gIEBJbnB1dCgnbm92b0RhdGFUYWJsZUV4cGFuZCcpXG4gIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIHN0YXRlOiBEYXRhVGFibGVTdGF0ZTxUPiwgcHJpdmF0ZSBkYXRhVGFibGU6IE5vdm9EYXRhVGFibGU8VD4pIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuc3RhdGUuZXhwYW5kU291cmNlLnN1YnNjcmliZSgodGFyZ2V0SWQ/OiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLnNob3VsZEV4cGFuZEFsbFJvd3ModGFyZ2V0SWQpIHx8IHRoaXMuc2hvdWxkRXhwYW5kT25lUm93KHRhcmdldElkKSkge1xuICAgICAgICBpZiAoZGF0YVRhYmxlLmlzRXhwYW5kZWQodGhpcy5yb3cpKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNob3VsZEV4cGFuZEFsbFJvd3MgPSAodGFyZ2V0SWQ6IG51bWJlcik6IGJvb2xlYW4gPT4gdGFyZ2V0SWQgPT09IHVuZGVmaW5lZDtcblxuICBzaG91bGRFeHBhbmRPbmVSb3cgPSAodGFyZ2V0SWQ6IG51bWJlcikgPT4gdGFyZ2V0SWQgPT09ICgodGhpcy5yb3cgYXMgdW5rbm93bikgYXMgeyBpZDogbnVtYmVyIH0pLmlkO1xuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5oYXNBdHRyaWJ1dGUoJ25vdm8tZGF0YS10YWJsZS1leHBhbmRlcicpKSB7XG4gICAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICB0aGlzLmRhdGFUYWJsZS5leHBhbmRSb3codGhpcy5yb3cpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy52Y1JlZi5jbGVhcigpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy52Y1JlZi5jbGVhcigpO1xuICAgIGlmICh0aGlzLnRlbXBsYXRlICYmIHRoaXMucm93KSB7XG4gICAgICB0aGlzLnZjUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlLCB7ICRpbXBsaWNpdDogdGhpcy5yb3cgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=