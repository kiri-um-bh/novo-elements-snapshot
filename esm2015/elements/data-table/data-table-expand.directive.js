/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1leHBhbmQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS1leHBhbmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFhLE1BQU0sZUFBZSxDQUFDO0FBR3pHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBS3ZELE1BQU0sT0FBTyw0QkFBNEI7Ozs7OztJQVF2QyxZQUFtQixLQUF1QixFQUFVLEtBQXdCLEVBQVUsU0FBMkI7UUFBOUYsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBWWpILHdCQUFtQjs7OztRQUFHLENBQUMsUUFBZ0IsRUFBVyxFQUFFLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBQztRQUU1RSx1QkFBa0I7Ozs7UUFBRyxDQUFDLFFBQWdCLEVBQUUsRUFBRSxDQUFDLFFBQVEsS0FBSyxDQUFDLG1CQUFBLENBQUMsbUJBQUEsSUFBSSxDQUFDLEdBQUcsRUFBVyxDQUFDLEVBQWtCLENBQUMsQ0FBQyxFQUFFLEVBQUM7UUFibkcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxRQUFpQixFQUFFLEVBQUU7WUFDMUUsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMzRSxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNsQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNkO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFNRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUdELE9BQU8sQ0FBQyxLQUFpQjtRQUN2QixJQUFJLENBQUMsbUJBQUEsS0FBSyxDQUFDLE1BQU0sRUFBVyxDQUFDLENBQUMsWUFBWSxDQUFDLDBCQUEwQixDQUFDLEVBQUU7WUFDdEUsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7OztJQUVPLEtBQUs7UUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRU8sTUFBTTtRQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0gsQ0FBQzs7O1lBaERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2FBQ2xDOzs7O1lBVHFELGdCQUFnQjtZQUc3RCxjQUFjO1lBRWQsYUFBYTs7O2tCQU1uQixLQUFLO3VCQUVMLEtBQUssU0FBQyxxQkFBcUI7c0JBeUIzQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBM0JqQywyQ0FDTzs7SUFDUCxnREFDMkI7Ozs7O0lBRTNCLG9EQUFtQzs7SUFjbkMsMkRBQTRFOztJQUU1RSwwREFBcUc7O0lBZHpGLDZDQUE4Qjs7Ozs7SUFBRSw2Q0FBZ0M7Ozs7O0lBQUUsaURBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGF0YVRhYmxlU3RhdGUgfSBmcm9tICcuL3N0YXRlL2RhdGEtdGFibGUtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlIH0gZnJvbSAnLi9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvRGF0YVRhYmxlRXhwYW5kXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVFeHBhbmREaXJlY3RpdmU8VD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICByb3c6IFQ7XG4gIEBJbnB1dCgnbm92b0RhdGFUYWJsZUV4cGFuZCcpXG4gIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIHN0YXRlOiBEYXRhVGFibGVTdGF0ZTxUPiwgcHJpdmF0ZSBkYXRhVGFibGU6IE5vdm9EYXRhVGFibGU8VD4pIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuc3RhdGUuZXhwYW5kU291cmNlLnN1YnNjcmliZSgodGFyZ2V0SWQ/OiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLnNob3VsZEV4cGFuZEFsbFJvd3ModGFyZ2V0SWQpIHx8IHRoaXMuc2hvdWxkRXhwYW5kT25lUm93KHRhcmdldElkKSkge1xuICAgICAgICBpZiAoZGF0YVRhYmxlLmlzRXhwYW5kZWQodGhpcy5yb3cpKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNob3VsZEV4cGFuZEFsbFJvd3MgPSAodGFyZ2V0SWQ6IG51bWJlcik6IGJvb2xlYW4gPT4gdGFyZ2V0SWQgPT09IHVuZGVmaW5lZDtcblxuICBzaG91bGRFeHBhbmRPbmVSb3cgPSAodGFyZ2V0SWQ6IG51bWJlcikgPT4gdGFyZ2V0SWQgPT09ICgodGhpcy5yb3cgYXMgdW5rbm93bikgYXMgeyBpZDogbnVtYmVyIH0pLmlkO1xuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5oYXNBdHRyaWJ1dGUoJ25vdm8tZGF0YS10YWJsZS1leHBhbmRlcicpKSB7XG4gICAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICB0aGlzLmRhdGFUYWJsZS5leHBhbmRSb3codGhpcy5yb3cpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy52Y1JlZi5jbGVhcigpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy52Y1JlZi5jbGVhcigpO1xuICAgIGlmICh0aGlzLnRlbXBsYXRlICYmIHRoaXMucm93KSB7XG4gICAgICB0aGlzLnZjUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlLCB7ICRpbXBsaWNpdDogdGhpcy5yb3cgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=