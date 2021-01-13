import { Directive } from '@angular/core';
import { Helpers } from '../../../utils/Helpers';
import { DataTableState } from '../state/data-table-state.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1maWx0ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9zb3J0LWZpbHRlci9zb3J0LWZpbHRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7QUFLbkUsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUFvQixLQUF3QjtRQUF4QixVQUFLLEdBQUwsS0FBSyxDQUFtQjtJQUFHLENBQUM7SUFFekMsTUFBTSxDQUNYLEVBQVUsRUFDVixJQUFZLEVBQ1osS0FBVSxFQUNWLFNBQW1CLEVBQ25CLHVCQUFnQyxLQUFLLEVBQ3JDLGNBQXVCO1FBRXZCLElBQUksTUFBTSxDQUFDO1FBRVgsSUFBSSxvQkFBb0IsRUFBRTtZQUN4QixNQUFNLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUM5RTthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzNCLE1BQU0sbUJBQUssRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxJQUFLLENBQUMsY0FBYyxJQUFJLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBRSxDQUFDO2FBQ3BGO2lCQUFNO2dCQUNMLE1BQU0sR0FBRyxTQUFTLENBQUM7YUFDcEI7U0FDRjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTSxJQUFJLENBQUMsRUFBVSxFQUFFLEtBQWEsRUFBRSxTQUFtQjtRQUN4RCxNQUFNLElBQUksR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVNLGtCQUFrQixDQUFDLEVBQVUsRUFBRSxJQUFZLEVBQUUsS0FBVSxFQUFFLFNBQW1CLEVBQUUsY0FBc0I7UUFDekcsSUFBSSxNQUFNLENBQUM7UUFFWCxNQUFNLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRW5ELE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2hGLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3BCLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQy9CO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0IsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLGtCQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsSUFBSyxDQUFDLGNBQWMsSUFBSSxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQUcsQ0FBQztTQUNqRztRQUVELElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUNwQjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OzhGQXhEVSx1QkFBdUI7NERBQXZCLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBSG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBEYXRhVGFibGVTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL2RhdGEtdGFibGUtc3RhdGUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvRGF0YVRhYmxlU29ydEZpbHRlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRGF0YVRhYmxlU29ydEZpbHRlcjxUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhdGU6IERhdGFUYWJsZVN0YXRlPFQ+KSB7fVxuXG4gIHB1YmxpYyBmaWx0ZXIoXG4gICAgaWQ6IHN0cmluZyxcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgdmFsdWU6IGFueSxcbiAgICB0cmFuc2Zvcm06IEZ1bmN0aW9uLFxuICAgIGFsbG93TXVsdGlwbGVGaWx0ZXJzOiBib29sZWFuID0gZmFsc2UsXG4gICAgc2VsZWN0ZWRPcHRpb24/OiBPYmplY3QsXG4gICk6IHZvaWQge1xuICAgIGxldCBmaWx0ZXI7XG5cbiAgICBpZiAoYWxsb3dNdWx0aXBsZUZpbHRlcnMpIHtcbiAgICAgIGZpbHRlciA9IHRoaXMucmVzb2x2ZU11bHRpRmlsdGVyKGlkLCB0eXBlLCB2YWx1ZSwgdHJhbnNmb3JtLCBzZWxlY3RlZE9wdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghSGVscGVycy5pc0JsYW5rKHZhbHVlKSkge1xuICAgICAgICBmaWx0ZXIgPSB7IGlkLCB0eXBlLCB2YWx1ZSwgdHJhbnNmb3JtLCAuLi4oc2VsZWN0ZWRPcHRpb24gJiYgeyBzZWxlY3RlZE9wdGlvbiB9KSB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsdGVyID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUuZmlsdGVyID0gZmlsdGVyO1xuICAgIHRoaXMuc3RhdGUucmVzZXQoZmFsc2UsIHRydWUpO1xuICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KHsgZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSk7XG4gICAgdGhpcy5zdGF0ZS5vblNvcnRGaWx0ZXJDaGFuZ2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBzb3J0KGlkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHRyYW5zZm9ybTogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBjb25zdCBzb3J0ID0geyBpZCwgdmFsdWUsIHRyYW5zZm9ybSB9O1xuICAgIHRoaXMuc3RhdGUuc29ydCA9IHNvcnQ7XG4gICAgdGhpcy5zdGF0ZS5yZXNldChmYWxzZSwgdHJ1ZSk7XG4gICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBzb3J0LCBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyIH0pO1xuICAgIHRoaXMuc3RhdGUub25Tb3J0RmlsdGVyQ2hhbmdlKCk7XG4gIH1cblxuICBwdWJsaWMgcmVzb2x2ZU11bHRpRmlsdGVyKGlkOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgdmFsdWU6IGFueSwgdHJhbnNmb3JtOiBGdW5jdGlvbiwgc2VsZWN0ZWRPcHRpb246IE9iamVjdCkge1xuICAgIGxldCBmaWx0ZXI7XG5cbiAgICBmaWx0ZXIgPSBIZWxwZXJzLmNvbnZlcnRUb0FycmF5KHRoaXMuc3RhdGUuZmlsdGVyKTtcblxuICAgIGNvbnN0IGZpbHRlckluZGV4ID0gZmlsdGVyLmZpbmRJbmRleCgoYUZpbHRlcikgPT4gYUZpbHRlciAmJiBhRmlsdGVyLmlkID09PSBpZCk7XG4gICAgaWYgKGZpbHRlckluZGV4ID4gLTEpIHtcbiAgICAgIGZpbHRlci5zcGxpY2UoZmlsdGVySW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGlmICghSGVscGVycy5pc0JsYW5rKHZhbHVlKSkge1xuICAgICAgZmlsdGVyID0gWy4uLmZpbHRlciwgeyBpZCwgdHlwZSwgdmFsdWUsIHRyYW5zZm9ybSwgLi4uKHNlbGVjdGVkT3B0aW9uICYmIHsgc2VsZWN0ZWRPcHRpb24gfSkgfV07XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlci5sZW5ndGggPCAxKSB7XG4gICAgICBmaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbHRlcjtcbiAgfVxufVxuIl19