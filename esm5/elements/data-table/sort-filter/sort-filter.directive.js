/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1maWx0ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvc29ydC1maWx0ZXIvc29ydC1maWx0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBRWpEO0lBSUUsaUNBQW9CLEtBQXdCO1FBQXhCLFVBQUssR0FBTCxLQUFLLENBQW1CO0lBQUcsQ0FBQzs7Ozs7Ozs7OztJQUV6Qyx3Q0FBTTs7Ozs7Ozs7O0lBQWIsVUFDRSxFQUFVLEVBQ1YsSUFBWSxFQUNaLEtBQVUsRUFDVixTQUFtQixFQUNuQixvQkFBcUMsRUFDckMsY0FBdUI7UUFEdkIscUNBQUEsRUFBQSw0QkFBcUM7O1lBR2pDLE1BQU07UUFFVixJQUFJLG9CQUFvQixFQUFFO1lBQ3hCLE1BQU0sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQzlFO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDM0IsTUFBTSxzQkFBSyxFQUFFLElBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxTQUFTLFdBQUEsSUFBSyxDQUFDLGNBQWMsSUFBSSxFQUFFLGNBQWMsZ0JBQUEsRUFBRSxDQUFDLENBQUUsQ0FBQzthQUNwRjtpQkFBTTtnQkFDTCxNQUFNLEdBQUcsU0FBUyxDQUFDO2FBQ3BCO1NBQ0Y7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7OztJQUVNLHNDQUFJOzs7Ozs7SUFBWCxVQUFZLEVBQVUsRUFBRSxLQUFhLEVBQUUsU0FBbUI7O1lBQ3BELElBQUksR0FBRyxFQUFFLEVBQUUsSUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLFNBQVMsV0FBQSxFQUFFO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7Ozs7SUFFTSxvREFBa0I7Ozs7Ozs7O0lBQXpCLFVBQTBCLEVBQVUsRUFBRSxJQUFZLEVBQUUsS0FBVSxFQUFFLFNBQW1CLEVBQUUsY0FBc0I7O1lBQ3JHLE1BQU07UUFFVixNQUFNLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztZQUUvQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLE9BQU8sSUFBSSxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBNUIsQ0FBNEIsRUFBQztRQUM3RSxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNCLE1BQU0sb0JBQU8sTUFBTSxzQkFBSSxFQUFFLElBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxTQUFTLFdBQUEsSUFBSyxDQUFDLGNBQWMsSUFBSSxFQUFFLGNBQWMsZ0JBQUEsRUFBRSxDQUFDLEdBQUcsQ0FBQztTQUNqRztRQUVELElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUNwQjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQTNERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7Ozs7Z0JBTFEsY0FBYzs7SUErRHZCLDhCQUFDO0NBQUEsQUE1REQsSUE0REM7U0F6RFksdUJBQXVCOzs7Ozs7SUFDdEIsd0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGFUYWJsZVN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9EYXRhVGFibGVTb3J0RmlsdGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVTb3J0RmlsdGVyPFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0ZTogRGF0YVRhYmxlU3RhdGU8VD4pIHt9XG5cbiAgcHVibGljIGZpbHRlcihcbiAgICBpZDogc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICB2YWx1ZTogYW55LFxuICAgIHRyYW5zZm9ybTogRnVuY3Rpb24sXG4gICAgYWxsb3dNdWx0aXBsZUZpbHRlcnM6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICBzZWxlY3RlZE9wdGlvbj86IE9iamVjdCxcbiAgKTogdm9pZCB7XG4gICAgbGV0IGZpbHRlcjtcblxuICAgIGlmIChhbGxvd011bHRpcGxlRmlsdGVycykge1xuICAgICAgZmlsdGVyID0gdGhpcy5yZXNvbHZlTXVsdGlGaWx0ZXIoaWQsIHR5cGUsIHZhbHVlLCB0cmFuc2Zvcm0sIHNlbGVjdGVkT3B0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsodmFsdWUpKSB7XG4gICAgICAgIGZpbHRlciA9IHsgaWQsIHR5cGUsIHZhbHVlLCB0cmFuc2Zvcm0sIC4uLihzZWxlY3RlZE9wdGlvbiAmJiB7IHNlbGVjdGVkT3B0aW9uIH0pIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS5maWx0ZXIgPSBmaWx0ZXI7XG4gICAgdGhpcy5zdGF0ZS5yZXNldChmYWxzZSwgdHJ1ZSk7XG4gICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBmaWx0ZXI6IGZpbHRlciwgc29ydDogdGhpcy5zdGF0ZS5zb3J0IH0pO1xuICAgIHRoaXMuc3RhdGUub25Tb3J0RmlsdGVyQ2hhbmdlKCk7XG4gIH1cblxuICBwdWJsaWMgc29ydChpZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCB0cmFuc2Zvcm06IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgbGV0IHNvcnQgPSB7IGlkLCB2YWx1ZSwgdHJhbnNmb3JtIH07XG4gICAgdGhpcy5zdGF0ZS5zb3J0ID0gc29ydDtcbiAgICB0aGlzLnN0YXRlLnJlc2V0KGZhbHNlLCB0cnVlKTtcbiAgICB0aGlzLnN0YXRlLnVwZGF0ZXMubmV4dCh7IHNvcnQ6IHNvcnQsIGZpbHRlcjogdGhpcy5zdGF0ZS5maWx0ZXIgfSk7XG4gICAgdGhpcy5zdGF0ZS5vblNvcnRGaWx0ZXJDaGFuZ2UoKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNvbHZlTXVsdGlGaWx0ZXIoaWQ6IHN0cmluZywgdHlwZTogc3RyaW5nLCB2YWx1ZTogYW55LCB0cmFuc2Zvcm06IEZ1bmN0aW9uLCBzZWxlY3RlZE9wdGlvbjogT2JqZWN0KSB7XG4gICAgbGV0IGZpbHRlcjtcblxuICAgIGZpbHRlciA9IEhlbHBlcnMuY29udmVydFRvQXJyYXkodGhpcy5zdGF0ZS5maWx0ZXIpO1xuXG4gICAgbGV0IGZpbHRlckluZGV4ID0gZmlsdGVyLmZpbmRJbmRleCgoYUZpbHRlcikgPT4gYUZpbHRlciAmJiBhRmlsdGVyLmlkID09PSBpZCk7XG4gICAgaWYgKGZpbHRlckluZGV4ID4gLTEpIHtcbiAgICAgIGZpbHRlci5zcGxpY2UoZmlsdGVySW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGlmICghSGVscGVycy5pc0JsYW5rKHZhbHVlKSkge1xuICAgICAgZmlsdGVyID0gWy4uLmZpbHRlciwgeyBpZCwgdHlwZSwgdmFsdWUsIHRyYW5zZm9ybSwgLi4uKHNlbGVjdGVkT3B0aW9uICYmIHsgc2VsZWN0ZWRPcHRpb24gfSkgfV07XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlci5sZW5ndGggPCAxKSB7XG4gICAgICBmaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbHRlcjtcbiAgfVxufVxuIl19