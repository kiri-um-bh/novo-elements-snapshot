/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/sort-filter/sort-filter.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive } from '@angular/core';
import { DataTableState } from '../state/data-table-state.service';
import { Helpers } from '../../../utils/Helpers';
/**
 * @template T
 */
var NovoDataTableSortFilter = /** @class */ (function () {
    function NovoDataTableSortFilter(state) {
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
    NovoDataTableSortFilter.prototype.filter = /**
     * @param {?} id
     * @param {?} type
     * @param {?} value
     * @param {?} transform
     * @param {?=} allowMultipleFilters
     * @param {?=} selectedOption
     * @return {?}
     */
    function (id, type, value, transform, allowMultipleFilters, selectedOption) {
        if (allowMultipleFilters === void 0) { allowMultipleFilters = false; }
        /** @type {?} */
        var filter;
        if (allowMultipleFilters) {
            filter = this.resolveMultiFilter(id, type, value, transform, selectedOption);
        }
        else {
            if (!Helpers.isBlank(value)) {
                filter = tslib_1.__assign({ id: id, type: type, value: value, transform: transform }, (selectedOption && { selectedOption: selectedOption }));
            }
            else {
                filter = undefined;
            }
        }
        this.state.filter = filter;
        this.state.reset(false, true);
        this.state.updates.next({ filter: filter, sort: this.state.sort });
        this.state.onSortFilterChange();
    };
    /**
     * @param {?} id
     * @param {?} value
     * @param {?} transform
     * @return {?}
     */
    NovoDataTableSortFilter.prototype.sort = /**
     * @param {?} id
     * @param {?} value
     * @param {?} transform
     * @return {?}
     */
    function (id, value, transform) {
        /** @type {?} */
        var sort = { id: id, value: value, transform: transform };
        this.state.sort = sort;
        this.state.reset(false, true);
        this.state.updates.next({ sort: sort, filter: this.state.filter });
        this.state.onSortFilterChange();
    };
    /**
     * @param {?} id
     * @param {?} type
     * @param {?} value
     * @param {?} transform
     * @param {?} selectedOption
     * @return {?}
     */
    NovoDataTableSortFilter.prototype.resolveMultiFilter = /**
     * @param {?} id
     * @param {?} type
     * @param {?} value
     * @param {?} transform
     * @param {?} selectedOption
     * @return {?}
     */
    function (id, type, value, transform, selectedOption) {
        /** @type {?} */
        var filter;
        filter = Helpers.convertToArray(this.state.filter);
        /** @type {?} */
        var filterIndex = filter.findIndex((/**
         * @param {?} aFilter
         * @return {?}
         */
        function (aFilter) { return aFilter && aFilter.id === id; }));
        if (filterIndex > -1) {
            filter.splice(filterIndex, 1);
        }
        if (!Helpers.isBlank(value)) {
            filter = tslib_1.__spread(filter, [tslib_1.__assign({ id: id, type: type, value: value, transform: transform }, (selectedOption && { selectedOption: selectedOption }))]);
        }
        if (filter.length < 1) {
            filter = undefined;
        }
        return filter;
    };
    NovoDataTableSortFilter.decorators = [
        { type: Directive, args: [{
                    selector: '[novoDataTableSortFilter]',
                },] }
    ];
    /** @nocollapse */
    NovoDataTableSortFilter.ctorParameters = function () { return [
        { type: DataTableState }
    ]; };
    return NovoDataTableSortFilter;
}());
export { NovoDataTableSortFilter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NovoDataTableSortFilter.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1maWx0ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvc29ydC1maWx0ZXIvc29ydC1maWx0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVqRDtJQUlFLGlDQUFvQixLQUF3QjtRQUF4QixVQUFLLEdBQUwsS0FBSyxDQUFtQjtJQUFHLENBQUM7Ozs7Ozs7Ozs7SUFFekMsd0NBQU07Ozs7Ozs7OztJQUFiLFVBQ0UsRUFBVSxFQUNWLElBQVksRUFDWixLQUFVLEVBQ1YsU0FBbUIsRUFDbkIsb0JBQXFDLEVBQ3JDLGNBQXVCO1FBRHZCLHFDQUFBLEVBQUEsNEJBQXFDOztZQUdqQyxNQUFNO1FBRVYsSUFBSSxvQkFBb0IsRUFBRTtZQUN4QixNQUFNLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUM5RTthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzNCLE1BQU0sc0JBQUssRUFBRSxJQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsU0FBUyxXQUFBLElBQUssQ0FBQyxjQUFjLElBQUksRUFBRSxjQUFjLGdCQUFBLEVBQUUsQ0FBQyxDQUFFLENBQUM7YUFDcEY7aUJBQU07Z0JBQ0wsTUFBTSxHQUFHLFNBQVMsQ0FBQzthQUNwQjtTQUNGO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLFFBQUEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7O0lBRU0sc0NBQUk7Ozs7OztJQUFYLFVBQVksRUFBVSxFQUFFLEtBQWEsRUFBRSxTQUFtQjs7WUFDbEQsSUFBSSxHQUFHLEVBQUUsRUFBRSxJQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUU7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7Ozs7SUFFTSxvREFBa0I7Ozs7Ozs7O0lBQXpCLFVBQTBCLEVBQVUsRUFBRSxJQUFZLEVBQUUsS0FBVSxFQUFFLFNBQW1CLEVBQUUsY0FBc0I7O1lBQ3JHLE1BQU07UUFFVixNQUFNLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztZQUU3QyxXQUFXLEdBQUcsTUFBTSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLE9BQU8sSUFBSSxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBNUIsQ0FBNEIsRUFBQztRQUMvRSxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNCLE1BQU0sb0JBQU8sTUFBTSxzQkFBSSxFQUFFLElBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxTQUFTLFdBQUEsSUFBSyxDQUFDLGNBQWMsSUFBSSxFQUFFLGNBQWMsZ0JBQUEsRUFBRSxDQUFDLEdBQUcsQ0FBQztTQUNqRztRQUVELElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUNwQjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQTNERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7Ozs7Z0JBTFEsY0FBYzs7SUErRHZCLDhCQUFDO0NBQUEsQUE1REQsSUE0REM7U0F6RFksdUJBQXVCOzs7Ozs7SUFDdEIsd0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGFUYWJsZVN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9EYXRhVGFibGVTb3J0RmlsdGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVTb3J0RmlsdGVyPFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0ZTogRGF0YVRhYmxlU3RhdGU8VD4pIHt9XG5cbiAgcHVibGljIGZpbHRlcihcbiAgICBpZDogc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICB2YWx1ZTogYW55LFxuICAgIHRyYW5zZm9ybTogRnVuY3Rpb24sXG4gICAgYWxsb3dNdWx0aXBsZUZpbHRlcnM6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICBzZWxlY3RlZE9wdGlvbj86IE9iamVjdCxcbiAgKTogdm9pZCB7XG4gICAgbGV0IGZpbHRlcjtcblxuICAgIGlmIChhbGxvd011bHRpcGxlRmlsdGVycykge1xuICAgICAgZmlsdGVyID0gdGhpcy5yZXNvbHZlTXVsdGlGaWx0ZXIoaWQsIHR5cGUsIHZhbHVlLCB0cmFuc2Zvcm0sIHNlbGVjdGVkT3B0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsodmFsdWUpKSB7XG4gICAgICAgIGZpbHRlciA9IHsgaWQsIHR5cGUsIHZhbHVlLCB0cmFuc2Zvcm0sIC4uLihzZWxlY3RlZE9wdGlvbiAmJiB7IHNlbGVjdGVkT3B0aW9uIH0pIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS5maWx0ZXIgPSBmaWx0ZXI7XG4gICAgdGhpcy5zdGF0ZS5yZXNldChmYWxzZSwgdHJ1ZSk7XG4gICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBmaWx0ZXIsIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCB9KTtcbiAgICB0aGlzLnN0YXRlLm9uU29ydEZpbHRlckNoYW5nZSgpO1xuICB9XG5cbiAgcHVibGljIHNvcnQoaWQ6IHN0cmluZywgdmFsdWU6IHN0cmluZywgdHJhbnNmb3JtOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IHNvcnQgPSB7IGlkLCB2YWx1ZSwgdHJhbnNmb3JtIH07XG4gICAgdGhpcy5zdGF0ZS5zb3J0ID0gc29ydDtcbiAgICB0aGlzLnN0YXRlLnJlc2V0KGZhbHNlLCB0cnVlKTtcbiAgICB0aGlzLnN0YXRlLnVwZGF0ZXMubmV4dCh7IHNvcnQsIGZpbHRlcjogdGhpcy5zdGF0ZS5maWx0ZXIgfSk7XG4gICAgdGhpcy5zdGF0ZS5vblNvcnRGaWx0ZXJDaGFuZ2UoKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNvbHZlTXVsdGlGaWx0ZXIoaWQ6IHN0cmluZywgdHlwZTogc3RyaW5nLCB2YWx1ZTogYW55LCB0cmFuc2Zvcm06IEZ1bmN0aW9uLCBzZWxlY3RlZE9wdGlvbjogT2JqZWN0KSB7XG4gICAgbGV0IGZpbHRlcjtcblxuICAgIGZpbHRlciA9IEhlbHBlcnMuY29udmVydFRvQXJyYXkodGhpcy5zdGF0ZS5maWx0ZXIpO1xuXG4gICAgY29uc3QgZmlsdGVySW5kZXggPSBmaWx0ZXIuZmluZEluZGV4KChhRmlsdGVyKSA9PiBhRmlsdGVyICYmIGFGaWx0ZXIuaWQgPT09IGlkKTtcbiAgICBpZiAoZmlsdGVySW5kZXggPiAtMSkge1xuICAgICAgZmlsdGVyLnNwbGljZShmaWx0ZXJJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsodmFsdWUpKSB7XG4gICAgICBmaWx0ZXIgPSBbLi4uZmlsdGVyLCB7IGlkLCB0eXBlLCB2YWx1ZSwgdHJhbnNmb3JtLCAuLi4oc2VsZWN0ZWRPcHRpb24gJiYgeyBzZWxlY3RlZE9wdGlvbiB9KSB9XTtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyLmxlbmd0aCA8IDEpIHtcbiAgICAgIGZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsdGVyO1xuICB9XG59XG4iXX0=