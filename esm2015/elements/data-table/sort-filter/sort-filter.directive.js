/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/sort-filter/sort-filter.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
import { DataTableState } from '../state/data-table-state.service';
import { Helpers } from '../../../utils/Helpers';
/**
 * @template T
 */
export class NovoDataTableSortFilter {
    /**
     * @param {?} state
     */
    constructor(state) {
        this.state = state;
    }
    /**
     * @param {?} id
     * @param {?} type
     * @param {?} value
     * @param {?} transform
     * @param {?=} allowMultipleFilters
     * @param {?=} selectedOption
     * @return {?}
     */
    filter(id, type, value, transform, allowMultipleFilters = false, selectedOption) {
        /** @type {?} */
        let filter;
        if (allowMultipleFilters) {
            filter = this.resolveMultiFilter(id, type, value, transform, selectedOption);
        }
        else {
            if (!Helpers.isBlank(value)) {
                filter = Object.assign({ id, type, value, transform }, (selectedOption && { selectedOption }));
            }
            else {
                filter = undefined;
            }
        }
        this.state.filter = filter;
        this.state.reset(false, true);
        this.state.updates.next({ filter: filter, sort: this.state.sort });
        this.state.onSortFilterChange();
    }
    /**
     * @param {?} id
     * @param {?} value
     * @param {?} transform
     * @return {?}
     */
    sort(id, value, transform) {
        /** @type {?} */
        let sort = { id, value, transform };
        this.state.sort = sort;
        this.state.reset(false, true);
        this.state.updates.next({ sort: sort, filter: this.state.filter });
        this.state.onSortFilterChange();
    }
    /**
     * @param {?} id
     * @param {?} type
     * @param {?} value
     * @param {?} transform
     * @param {?} selectedOption
     * @return {?}
     */
    resolveMultiFilter(id, type, value, transform, selectedOption) {
        /** @type {?} */
        let filter;
        filter = Helpers.convertToArray(this.state.filter);
        /** @type {?} */
        let filterIndex = filter.findIndex((/**
         * @param {?} aFilter
         * @return {?}
         */
        (aFilter) => aFilter && aFilter.id === id));
        if (filterIndex > -1) {
            filter.splice(filterIndex, 1);
        }
        if (!Helpers.isBlank(value)) {
            filter = [...filter, Object.assign({ id, type, value, transform }, (selectedOption && { selectedOption }))];
        }
        if (filter.length < 1) {
            filter = undefined;
        }
        return filter;
    }
}
NovoDataTableSortFilter.decorators = [
    { type: Directive, args: [{
                selector: '[novoDataTableSortFilter]',
            },] }
];
/** @nocollapse */
NovoDataTableSortFilter.ctorParameters = () => [
    { type: DataTableState }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NovoDataTableSortFilter.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1maWx0ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvc29ydC1maWx0ZXIvc29ydC1maWx0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBS2pELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFDbEMsWUFBb0IsS0FBd0I7UUFBeEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7SUFBRyxDQUFDOzs7Ozs7Ozs7O0lBRXpDLE1BQU0sQ0FDWCxFQUFVLEVBQ1YsSUFBWSxFQUNaLEtBQVUsRUFDVixTQUFtQixFQUNuQix1QkFBZ0MsS0FBSyxFQUNyQyxjQUF1Qjs7WUFFbkIsTUFBTTtRQUVWLElBQUksb0JBQW9CLEVBQUU7WUFDeEIsTUFBTSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDOUU7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzQixNQUFNLG1CQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsSUFBSyxDQUFDLGNBQWMsSUFBSSxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUUsQ0FBQzthQUNwRjtpQkFBTTtnQkFDTCxNQUFNLEdBQUcsU0FBUyxDQUFDO2FBQ3BCO1NBQ0Y7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7OztJQUVNLElBQUksQ0FBQyxFQUFVLEVBQUUsS0FBYSxFQUFFLFNBQW1COztZQUNwRCxJQUFJLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7Ozs7O0lBRU0sa0JBQWtCLENBQUMsRUFBVSxFQUFFLElBQVksRUFBRSxLQUFVLEVBQUUsU0FBbUIsRUFBRSxjQUFzQjs7WUFDckcsTUFBTTtRQUVWLE1BQU0sR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7O1lBRS9DLFdBQVcsR0FBRyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUM7UUFDN0UsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDL0I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQixNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU0sa0JBQUksRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxJQUFLLENBQUMsY0FBYyxJQUFJLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBRyxDQUFDO1NBQ2pHO1FBRUQsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQ3BCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7O1lBM0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDOzs7O1lBTFEsY0FBYzs7Ozs7OztJQU9ULHdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL2RhdGEtdGFibGUtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvRGF0YVRhYmxlU29ydEZpbHRlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlU29ydEZpbHRlcjxUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhdGU6IERhdGFUYWJsZVN0YXRlPFQ+KSB7fVxuXG4gIHB1YmxpYyBmaWx0ZXIoXG4gICAgaWQ6IHN0cmluZyxcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgdmFsdWU6IGFueSxcbiAgICB0cmFuc2Zvcm06IEZ1bmN0aW9uLFxuICAgIGFsbG93TXVsdGlwbGVGaWx0ZXJzOiBib29sZWFuID0gZmFsc2UsXG4gICAgc2VsZWN0ZWRPcHRpb24/OiBPYmplY3QsXG4gICk6IHZvaWQge1xuICAgIGxldCBmaWx0ZXI7XG5cbiAgICBpZiAoYWxsb3dNdWx0aXBsZUZpbHRlcnMpIHtcbiAgICAgIGZpbHRlciA9IHRoaXMucmVzb2x2ZU11bHRpRmlsdGVyKGlkLCB0eXBlLCB2YWx1ZSwgdHJhbnNmb3JtLCBzZWxlY3RlZE9wdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghSGVscGVycy5pc0JsYW5rKHZhbHVlKSkge1xuICAgICAgICBmaWx0ZXIgPSB7IGlkLCB0eXBlLCB2YWx1ZSwgdHJhbnNmb3JtLCAuLi4oc2VsZWN0ZWRPcHRpb24gJiYgeyBzZWxlY3RlZE9wdGlvbiB9KSB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsdGVyID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUuZmlsdGVyID0gZmlsdGVyO1xuICAgIHRoaXMuc3RhdGUucmVzZXQoZmFsc2UsIHRydWUpO1xuICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KHsgZmlsdGVyOiBmaWx0ZXIsIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCB9KTtcbiAgICB0aGlzLnN0YXRlLm9uU29ydEZpbHRlckNoYW5nZSgpO1xuICB9XG5cbiAgcHVibGljIHNvcnQoaWQ6IHN0cmluZywgdmFsdWU6IHN0cmluZywgdHJhbnNmb3JtOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGxldCBzb3J0ID0geyBpZCwgdmFsdWUsIHRyYW5zZm9ybSB9O1xuICAgIHRoaXMuc3RhdGUuc29ydCA9IHNvcnQ7XG4gICAgdGhpcy5zdGF0ZS5yZXNldChmYWxzZSwgdHJ1ZSk7XG4gICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBzb3J0OiBzb3J0LCBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyIH0pO1xuICAgIHRoaXMuc3RhdGUub25Tb3J0RmlsdGVyQ2hhbmdlKCk7XG4gIH1cblxuICBwdWJsaWMgcmVzb2x2ZU11bHRpRmlsdGVyKGlkOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgdmFsdWU6IGFueSwgdHJhbnNmb3JtOiBGdW5jdGlvbiwgc2VsZWN0ZWRPcHRpb246IE9iamVjdCkge1xuICAgIGxldCBmaWx0ZXI7XG5cbiAgICBmaWx0ZXIgPSBIZWxwZXJzLmNvbnZlcnRUb0FycmF5KHRoaXMuc3RhdGUuZmlsdGVyKTtcblxuICAgIGxldCBmaWx0ZXJJbmRleCA9IGZpbHRlci5maW5kSW5kZXgoKGFGaWx0ZXIpID0+IGFGaWx0ZXIgJiYgYUZpbHRlci5pZCA9PT0gaWQpO1xuICAgIGlmIChmaWx0ZXJJbmRleCA+IC0xKSB7XG4gICAgICBmaWx0ZXIuc3BsaWNlKGZpbHRlckluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayh2YWx1ZSkpIHtcbiAgICAgIGZpbHRlciA9IFsuLi5maWx0ZXIsIHsgaWQsIHR5cGUsIHZhbHVlLCB0cmFuc2Zvcm0sIC4uLihzZWxlY3RlZE9wdGlvbiAmJiB7IHNlbGVjdGVkT3B0aW9uIH0pIH1dO1xuICAgIH1cblxuICAgIGlmIChmaWx0ZXIubGVuZ3RoIDwgMSkge1xuICAgICAgZmlsdGVyID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBmaWx0ZXI7XG4gIH1cbn1cbiJdfQ==