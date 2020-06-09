import { __assign, __read, __spread } from "tslib";
import { Directive } from '@angular/core';
import { DataTableState } from '../state/data-table-state.service';
import { Helpers } from '../../../utils/Helpers';
import * as i0 from "@angular/core";
import * as i1 from "../state/data-table-state.service";
var NovoDataTableSortFilter = /** @class */ (function () {
    function NovoDataTableSortFilter(state) {
        this.state = state;
    }
    NovoDataTableSortFilter.prototype.filter = function (id, type, value, transform, allowMultipleFilters, selectedOption) {
        if (allowMultipleFilters === void 0) { allowMultipleFilters = false; }
        var filter;
        if (allowMultipleFilters) {
            filter = this.resolveMultiFilter(id, type, value, transform, selectedOption);
        }
        else {
            if (!Helpers.isBlank(value)) {
                filter = __assign({ id: id, type: type, value: value, transform: transform }, (selectedOption && { selectedOption: selectedOption }));
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
    NovoDataTableSortFilter.prototype.sort = function (id, value, transform) {
        var sort = { id: id, value: value, transform: transform };
        this.state.sort = sort;
        this.state.reset(false, true);
        this.state.updates.next({ sort: sort, filter: this.state.filter });
        this.state.onSortFilterChange();
    };
    NovoDataTableSortFilter.prototype.resolveMultiFilter = function (id, type, value, transform, selectedOption) {
        var filter;
        filter = Helpers.convertToArray(this.state.filter);
        var filterIndex = filter.findIndex(function (aFilter) { return aFilter && aFilter.id === id; });
        if (filterIndex > -1) {
            filter.splice(filterIndex, 1);
        }
        if (!Helpers.isBlank(value)) {
            filter = __spread(filter, [__assign({ id: id, type: type, value: value, transform: transform }, (selectedOption && { selectedOption: selectedOption }))]);
        }
        if (filter.length < 1) {
            filter = undefined;
        }
        return filter;
    };
    NovoDataTableSortFilter.ɵfac = function NovoDataTableSortFilter_Factory(t) { return new (t || NovoDataTableSortFilter)(i0.ɵɵdirectiveInject(i1.DataTableState)); };
    NovoDataTableSortFilter.ɵdir = i0.ɵɵdefineDirective({ type: NovoDataTableSortFilter, selectors: [["", "novoDataTableSortFilter", ""]] });
    return NovoDataTableSortFilter;
}());
export { NovoDataTableSortFilter };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDataTableSortFilter, [{
        type: Directive,
        args: [{
                selector: '[novoDataTableSortFilter]',
            }]
    }], function () { return [{ type: i1.DataTableState }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1maWx0ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvc29ydC1maWx0ZXIvc29ydC1maWx0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQUVqRDtJQUlFLGlDQUFvQixLQUF3QjtRQUF4QixVQUFLLEdBQUwsS0FBSyxDQUFtQjtJQUFHLENBQUM7SUFFekMsd0NBQU0sR0FBYixVQUNFLEVBQVUsRUFDVixJQUFZLEVBQ1osS0FBVSxFQUNWLFNBQW1CLEVBQ25CLG9CQUFxQyxFQUNyQyxjQUF1QjtRQUR2QixxQ0FBQSxFQUFBLDRCQUFxQztRQUdyQyxJQUFJLE1BQU0sQ0FBQztRQUVYLElBQUksb0JBQW9CLEVBQUU7WUFDeEIsTUFBTSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDOUU7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzQixNQUFNLGNBQUssRUFBRSxJQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsU0FBUyxXQUFBLElBQUssQ0FBQyxjQUFjLElBQUksRUFBRSxjQUFjLGdCQUFBLEVBQUUsQ0FBQyxDQUFFLENBQUM7YUFDcEY7aUJBQU07Z0JBQ0wsTUFBTSxHQUFHLFNBQVMsQ0FBQzthQUNwQjtTQUNGO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLFFBQUEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRU0sc0NBQUksR0FBWCxVQUFZLEVBQVUsRUFBRSxLQUFhLEVBQUUsU0FBbUI7UUFDeEQsSUFBTSxJQUFJLEdBQUcsRUFBRSxFQUFFLElBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVNLG9EQUFrQixHQUF6QixVQUEwQixFQUFVLEVBQUUsSUFBWSxFQUFFLEtBQVUsRUFBRSxTQUFtQixFQUFFLGNBQXNCO1FBQ3pHLElBQUksTUFBTSxDQUFDO1FBRVgsTUFBTSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVuRCxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsT0FBTyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUE1QixDQUE0QixDQUFDLENBQUM7UUFDaEYsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDL0I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQixNQUFNLFlBQU8sTUFBTSxjQUFJLEVBQUUsSUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLFNBQVMsV0FBQSxJQUFLLENBQUMsY0FBYyxJQUFJLEVBQUUsY0FBYyxnQkFBQSxFQUFFLENBQUMsR0FBRyxDQUFDO1NBQ2pHO1FBRUQsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQ3BCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztrR0F4RFUsdUJBQXVCO2dFQUF2Qix1QkFBdUI7a0NBUnBDO0NBaUVDLEFBNURELElBNERDO1NBekRZLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBSG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGFUYWJsZVN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9EYXRhVGFibGVTb3J0RmlsdGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVTb3J0RmlsdGVyPFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0ZTogRGF0YVRhYmxlU3RhdGU8VD4pIHt9XG5cbiAgcHVibGljIGZpbHRlcihcbiAgICBpZDogc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICB2YWx1ZTogYW55LFxuICAgIHRyYW5zZm9ybTogRnVuY3Rpb24sXG4gICAgYWxsb3dNdWx0aXBsZUZpbHRlcnM6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICBzZWxlY3RlZE9wdGlvbj86IE9iamVjdCxcbiAgKTogdm9pZCB7XG4gICAgbGV0IGZpbHRlcjtcblxuICAgIGlmIChhbGxvd011bHRpcGxlRmlsdGVycykge1xuICAgICAgZmlsdGVyID0gdGhpcy5yZXNvbHZlTXVsdGlGaWx0ZXIoaWQsIHR5cGUsIHZhbHVlLCB0cmFuc2Zvcm0sIHNlbGVjdGVkT3B0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsodmFsdWUpKSB7XG4gICAgICAgIGZpbHRlciA9IHsgaWQsIHR5cGUsIHZhbHVlLCB0cmFuc2Zvcm0sIC4uLihzZWxlY3RlZE9wdGlvbiAmJiB7IHNlbGVjdGVkT3B0aW9uIH0pIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS5maWx0ZXIgPSBmaWx0ZXI7XG4gICAgdGhpcy5zdGF0ZS5yZXNldChmYWxzZSwgdHJ1ZSk7XG4gICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBmaWx0ZXIsIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCB9KTtcbiAgICB0aGlzLnN0YXRlLm9uU29ydEZpbHRlckNoYW5nZSgpO1xuICB9XG5cbiAgcHVibGljIHNvcnQoaWQ6IHN0cmluZywgdmFsdWU6IHN0cmluZywgdHJhbnNmb3JtOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IHNvcnQgPSB7IGlkLCB2YWx1ZSwgdHJhbnNmb3JtIH07XG4gICAgdGhpcy5zdGF0ZS5zb3J0ID0gc29ydDtcbiAgICB0aGlzLnN0YXRlLnJlc2V0KGZhbHNlLCB0cnVlKTtcbiAgICB0aGlzLnN0YXRlLnVwZGF0ZXMubmV4dCh7IHNvcnQsIGZpbHRlcjogdGhpcy5zdGF0ZS5maWx0ZXIgfSk7XG4gICAgdGhpcy5zdGF0ZS5vblNvcnRGaWx0ZXJDaGFuZ2UoKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNvbHZlTXVsdGlGaWx0ZXIoaWQ6IHN0cmluZywgdHlwZTogc3RyaW5nLCB2YWx1ZTogYW55LCB0cmFuc2Zvcm06IEZ1bmN0aW9uLCBzZWxlY3RlZE9wdGlvbjogT2JqZWN0KSB7XG4gICAgbGV0IGZpbHRlcjtcblxuICAgIGZpbHRlciA9IEhlbHBlcnMuY29udmVydFRvQXJyYXkodGhpcy5zdGF0ZS5maWx0ZXIpO1xuXG4gICAgY29uc3QgZmlsdGVySW5kZXggPSBmaWx0ZXIuZmluZEluZGV4KChhRmlsdGVyKSA9PiBhRmlsdGVyICYmIGFGaWx0ZXIuaWQgPT09IGlkKTtcbiAgICBpZiAoZmlsdGVySW5kZXggPiAtMSkge1xuICAgICAgZmlsdGVyLnNwbGljZShmaWx0ZXJJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsodmFsdWUpKSB7XG4gICAgICBmaWx0ZXIgPSBbLi4uZmlsdGVyLCB7IGlkLCB0eXBlLCB2YWx1ZSwgdHJhbnNmb3JtLCAuLi4oc2VsZWN0ZWRPcHRpb24gJiYgeyBzZWxlY3RlZE9wdGlvbiB9KSB9XTtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyLmxlbmd0aCA8IDEpIHtcbiAgICAgIGZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsdGVyO1xuICB9XG59XG4iXX0=