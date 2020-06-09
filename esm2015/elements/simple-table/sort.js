import { Directive, EventEmitter, Output } from '@angular/core';
import { NovoActivityTableState } from './state';
import { Helpers } from '../../utils/Helpers';
import * as i0 from "@angular/core";
import * as i1 from "./state";
export class NovoSortFilter {
    constructor(state) {
        this.state = state;
    }
    filter(id, value, transform) {
        let filter;
        if (!Helpers.isBlank(value)) {
            filter = { id, value, transform };
        }
        else {
            filter = undefined;
        }
        this.state.filter = filter;
        this.state.reset(false, true);
        this.state.updates.next({ filter, sort: this.state.sort });
    }
    sort(id, value, transform) {
        const sort = { id, value, transform };
        this.state.sort = sort;
        this.state.reset(false, true);
        this.state.updates.next({ sort, filter: this.state.filter });
    }
}
NovoSortFilter.ɵfac = function NovoSortFilter_Factory(t) { return new (t || NovoSortFilter)(i0.ɵɵdirectiveInject(i1.NovoActivityTableState)); };
NovoSortFilter.ɵdir = i0.ɵɵdefineDirective({ type: NovoSortFilter, selectors: [["", "novoSortFilter", ""]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSortFilter, [{
        type: Directive,
        args: [{
                selector: '[novoSortFilter]',
            }]
    }], function () { return [{ type: i1.NovoActivityTableState }]; }, null); })();
export class NovoSelection {
    constructor(state) {
        this.state = state;
        this.novoSelectAllToggle = new EventEmitter();
        this.allRows = new Map();
    }
    register(id, row) {
        this.allRows.set(id, row);
    }
    deregister(id) {
        this.allRows.delete(id);
        this.state.selectedRows.delete(id);
        clearTimeout(this.throttleTimeout);
        this.throttleTimeout = setTimeout(() => {
            if (this.state.selectedRows.size === 0) {
                this.novoSelectAllToggle.emit(false);
            }
        });
    }
    ngOnDestroy() {
        this.allRows.clear();
        this.state.selectedRows.clear();
    }
    toggle(id, selected, row) {
        if (selected) {
            this.state.selectedRows.set(id, row);
        }
        else {
            this.state.selectedRows.delete(id);
        }
    }
    selectAll(value) {
        if (value) {
            this.state.selectedRows = new Map(this.allRows);
        }
        else {
            this.state.selectedRows.clear();
        }
        this.novoSelectAllToggle.emit(value);
    }
}
NovoSelection.ɵfac = function NovoSelection_Factory(t) { return new (t || NovoSelection)(i0.ɵɵdirectiveInject(i1.NovoActivityTableState)); };
NovoSelection.ɵdir = i0.ɵɵdefineDirective({ type: NovoSelection, selectors: [["", "novoSelection", ""]], outputs: { novoSelectAllToggle: "novoSelectAllToggle" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSelection, [{
        type: Directive,
        args: [{
                selector: '[novoSelection]',
            }]
    }], function () { return [{ type: i1.NovoActivityTableState }]; }, { novoSelectAllToggle: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvc29ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBSzlDLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFlBQW9CLEtBQTZCO1FBQTdCLFVBQUssR0FBTCxLQUFLLENBQXdCO0lBQUcsQ0FBQztJQUU5QyxNQUFNLENBQUMsRUFBVSxFQUFFLEtBQVUsRUFBRSxTQUFtQjtRQUN2RCxJQUFJLE1BQU0sQ0FBQztRQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNCLE1BQU0sR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7U0FDbkM7YUFBTTtZQUNMLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTSxJQUFJLENBQUMsRUFBVSxFQUFFLEtBQWEsRUFBRSxTQUFtQjtRQUN4RCxNQUFNLElBQUksR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs0RUFwQlUsY0FBYzttREFBZCxjQUFjO2tEQUFkLGNBQWM7Y0FIMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7O0FBMkJELE1BQU0sT0FBTyxhQUFhO0lBT3hCLFlBQW1CLEtBQTZCO1FBQTdCLFVBQUssR0FBTCxLQUFLLENBQXdCO1FBTHpDLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFbEQsWUFBTyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0lBR1EsQ0FBQztJQUU3QyxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUc7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSxVQUFVLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDckMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTSxNQUFNLENBQUMsRUFBVSxFQUFFLFFBQWlCLEVBQUUsR0FBUTtRQUNuRCxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFTSxTQUFTLENBQUMsS0FBYztRQUM3QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksR0FBRyxDQUFpQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakU7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDOzswRUE1Q1UsYUFBYTtrREFBYixhQUFhO2tEQUFiLGFBQWE7Y0FIekIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7O2tCQUVFLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9BY3Rpdml0eVRhYmxlU3RhdGUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9Tb3J0RmlsdGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Tb3J0RmlsdGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0ZTogTm92b0FjdGl2aXR5VGFibGVTdGF0ZSkge31cblxuICBwdWJsaWMgZmlsdGVyKGlkOiBzdHJpbmcsIHZhbHVlOiBhbnksIHRyYW5zZm9ybTogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBsZXQgZmlsdGVyO1xuICAgIGlmICghSGVscGVycy5pc0JsYW5rKHZhbHVlKSkge1xuICAgICAgZmlsdGVyID0geyBpZCwgdmFsdWUsIHRyYW5zZm9ybSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUuZmlsdGVyID0gZmlsdGVyO1xuICAgIHRoaXMuc3RhdGUucmVzZXQoZmFsc2UsIHRydWUpO1xuICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KHsgZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSk7XG4gIH1cblxuICBwdWJsaWMgc29ydChpZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCB0cmFuc2Zvcm06IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgY29uc3Qgc29ydCA9IHsgaWQsIHZhbHVlLCB0cmFuc2Zvcm0gfTtcbiAgICB0aGlzLnN0YXRlLnNvcnQgPSBzb3J0O1xuICAgIHRoaXMuc3RhdGUucmVzZXQoZmFsc2UsIHRydWUpO1xuICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KHsgc29ydCwgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlciB9KTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1NlbGVjdGlvbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2VsZWN0aW9uIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBub3ZvU2VsZWN0QWxsVG9nZ2xlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHB1YmxpYyBhbGxSb3dzID0gbmV3IE1hcDxzdHJpbmcsIG9iamVjdD4oKTtcbiAgcHJpdmF0ZSB0aHJvdHRsZVRpbWVvdXQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhdGU6IE5vdm9BY3Rpdml0eVRhYmxlU3RhdGUpIHt9XG5cbiAgcHVibGljIHJlZ2lzdGVyKGlkLCByb3cpOiB2b2lkIHtcbiAgICB0aGlzLmFsbFJvd3Muc2V0KGlkLCByb3cpO1xuICB9XG5cbiAgcHVibGljIGRlcmVnaXN0ZXIoaWQpOiB2b2lkIHtcbiAgICB0aGlzLmFsbFJvd3MuZGVsZXRlKGlkKTtcbiAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5kZWxldGUoaWQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRocm90dGxlVGltZW91dCk7XG4gICAgdGhpcy50aHJvdHRsZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5zaXplID09PSAwKSB7XG4gICAgICAgIHRoaXMubm92b1NlbGVjdEFsbFRvZ2dsZS5lbWl0KGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmFsbFJvd3MuY2xlYXIoKTtcbiAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZShpZDogc3RyaW5nLCBzZWxlY3RlZDogYm9vbGVhbiwgcm93OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLnNldChpZCwgcm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MuZGVsZXRlKGlkKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0QWxsKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cyA9IG5ldyBNYXA8c3RyaW5nLCBvYmplY3Q+KHRoaXMuYWxsUm93cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLmNsZWFyKCk7XG4gICAgfVxuICAgIHRoaXMubm92b1NlbGVjdEFsbFRvZ2dsZS5lbWl0KHZhbHVlKTtcbiAgfVxufVxuIl19