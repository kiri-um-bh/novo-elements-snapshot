import { Directive } from '@angular/core';
import { DataTableState } from '../state/data-table-state.service';
import { Helpers } from '../../../utils/Helpers';
import * as i0 from "@angular/core";
import * as i1 from "../state/data-table-state.service";
export class NovoDataTableSortFilter {
    constructor(state) {
        this.state = state;
    }
    filter(id, type, value, transform, allowMultipleFilters = false, selectedOption) {
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
        this.state.updates.next({ filter, sort: this.state.sort });
        this.state.onSortFilterChange();
    }
    sort(id, value, transform) {
        const sort = { id, value, transform };
        this.state.sort = sort;
        this.state.reset(false, true);
        this.state.updates.next({ sort, filter: this.state.filter });
        this.state.onSortFilterChange();
    }
    resolveMultiFilter(id, type, value, transform, selectedOption) {
        let filter;
        filter = Helpers.convertToArray(this.state.filter);
        const filterIndex = filter.findIndex((aFilter) => aFilter && aFilter.id === id);
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
NovoDataTableSortFilter.ɵfac = function NovoDataTableSortFilter_Factory(t) { return new (t || NovoDataTableSortFilter)(i0.ɵɵdirectiveInject(i1.DataTableState)); };
NovoDataTableSortFilter.ɵdir = i0.ɵɵdefineDirective({ type: NovoDataTableSortFilter, selectors: [["", "novoDataTableSortFilter", ""]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDataTableSortFilter, [{
        type: Directive,
        args: [{
                selector: '[novoDataTableSortFilter]',
            }]
    }], function () { return [{ type: i1.DataTableState }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1maWx0ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvc29ydC1maWx0ZXIvc29ydC1maWx0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBS2pELE1BQU0sT0FBTyx1QkFBdUI7SUFDbEMsWUFBb0IsS0FBd0I7UUFBeEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7SUFBRyxDQUFDO0lBRXpDLE1BQU0sQ0FDWCxFQUFVLEVBQ1YsSUFBWSxFQUNaLEtBQVUsRUFDVixTQUFtQixFQUNuQix1QkFBZ0MsS0FBSyxFQUNyQyxjQUF1QjtRQUV2QixJQUFJLE1BQU0sQ0FBQztRQUVYLElBQUksb0JBQW9CLEVBQUU7WUFDeEIsTUFBTSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDOUU7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzQixNQUFNLG1CQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsSUFBSyxDQUFDLGNBQWMsSUFBSSxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUUsQ0FBQzthQUNwRjtpQkFBTTtnQkFDTCxNQUFNLEdBQUcsU0FBUyxDQUFDO2FBQ3BCO1NBQ0Y7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRU0sSUFBSSxDQUFDLEVBQVUsRUFBRSxLQUFhLEVBQUUsU0FBbUI7UUFDeEQsTUFBTSxJQUFJLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxFQUFVLEVBQUUsSUFBWSxFQUFFLEtBQVUsRUFBRSxTQUFtQixFQUFFLGNBQXNCO1FBQ3pHLElBQUksTUFBTSxDQUFDO1FBRVgsTUFBTSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVuRCxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNoRixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNCLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxrQkFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLElBQUssQ0FBQyxjQUFjLElBQUksRUFBRSxjQUFjLEVBQUUsQ0FBQyxFQUFHLENBQUM7U0FDakc7UUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDcEI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs4RkF4RFUsdUJBQXVCOzREQUF2Qix1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQUhuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL2RhdGEtdGFibGUtc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvRGF0YVRhYmxlU29ydEZpbHRlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlU29ydEZpbHRlcjxUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhdGU6IERhdGFUYWJsZVN0YXRlPFQ+KSB7fVxuXG4gIHB1YmxpYyBmaWx0ZXIoXG4gICAgaWQ6IHN0cmluZyxcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgdmFsdWU6IGFueSxcbiAgICB0cmFuc2Zvcm06IEZ1bmN0aW9uLFxuICAgIGFsbG93TXVsdGlwbGVGaWx0ZXJzOiBib29sZWFuID0gZmFsc2UsXG4gICAgc2VsZWN0ZWRPcHRpb24/OiBPYmplY3QsXG4gICk6IHZvaWQge1xuICAgIGxldCBmaWx0ZXI7XG5cbiAgICBpZiAoYWxsb3dNdWx0aXBsZUZpbHRlcnMpIHtcbiAgICAgIGZpbHRlciA9IHRoaXMucmVzb2x2ZU11bHRpRmlsdGVyKGlkLCB0eXBlLCB2YWx1ZSwgdHJhbnNmb3JtLCBzZWxlY3RlZE9wdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghSGVscGVycy5pc0JsYW5rKHZhbHVlKSkge1xuICAgICAgICBmaWx0ZXIgPSB7IGlkLCB0eXBlLCB2YWx1ZSwgdHJhbnNmb3JtLCAuLi4oc2VsZWN0ZWRPcHRpb24gJiYgeyBzZWxlY3RlZE9wdGlvbiB9KSB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsdGVyID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUuZmlsdGVyID0gZmlsdGVyO1xuICAgIHRoaXMuc3RhdGUucmVzZXQoZmFsc2UsIHRydWUpO1xuICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KHsgZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSk7XG4gICAgdGhpcy5zdGF0ZS5vblNvcnRGaWx0ZXJDaGFuZ2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBzb3J0KGlkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHRyYW5zZm9ybTogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBjb25zdCBzb3J0ID0geyBpZCwgdmFsdWUsIHRyYW5zZm9ybSB9O1xuICAgIHRoaXMuc3RhdGUuc29ydCA9IHNvcnQ7XG4gICAgdGhpcy5zdGF0ZS5yZXNldChmYWxzZSwgdHJ1ZSk7XG4gICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBzb3J0LCBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyIH0pO1xuICAgIHRoaXMuc3RhdGUub25Tb3J0RmlsdGVyQ2hhbmdlKCk7XG4gIH1cblxuICBwdWJsaWMgcmVzb2x2ZU11bHRpRmlsdGVyKGlkOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgdmFsdWU6IGFueSwgdHJhbnNmb3JtOiBGdW5jdGlvbiwgc2VsZWN0ZWRPcHRpb246IE9iamVjdCkge1xuICAgIGxldCBmaWx0ZXI7XG5cbiAgICBmaWx0ZXIgPSBIZWxwZXJzLmNvbnZlcnRUb0FycmF5KHRoaXMuc3RhdGUuZmlsdGVyKTtcblxuICAgIGNvbnN0IGZpbHRlckluZGV4ID0gZmlsdGVyLmZpbmRJbmRleCgoYUZpbHRlcikgPT4gYUZpbHRlciAmJiBhRmlsdGVyLmlkID09PSBpZCk7XG4gICAgaWYgKGZpbHRlckluZGV4ID4gLTEpIHtcbiAgICAgIGZpbHRlci5zcGxpY2UoZmlsdGVySW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGlmICghSGVscGVycy5pc0JsYW5rKHZhbHVlKSkge1xuICAgICAgZmlsdGVyID0gWy4uLmZpbHRlciwgeyBpZCwgdHlwZSwgdmFsdWUsIHRyYW5zZm9ybSwgLi4uKHNlbGVjdGVkT3B0aW9uICYmIHsgc2VsZWN0ZWRPcHRpb24gfSkgfV07XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlci5sZW5ndGggPCAxKSB7XG4gICAgICBmaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbHRlcjtcbiAgfVxufVxuIl19