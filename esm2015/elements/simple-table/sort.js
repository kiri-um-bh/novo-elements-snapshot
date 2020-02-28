/**
 * @fileoverview added by tsickle
 * Generated from: elements/simple-table/sort.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, Output } from '@angular/core';
import { NovoActivityTableState } from './state';
import { Helpers } from '../../utils/Helpers';
export class NovoSortFilter {
    /**
     * @param {?} state
     */
    constructor(state) {
        this.state = state;
    }
    /**
     * @param {?} id
     * @param {?} value
     * @param {?} transform
     * @return {?}
     */
    filter(id, value, transform) {
        /** @type {?} */
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
    /**
     * @param {?} id
     * @param {?} value
     * @param {?} transform
     * @return {?}
     */
    sort(id, value, transform) {
        /** @type {?} */
        const sort = { id, value, transform };
        this.state.sort = sort;
        this.state.reset(false, true);
        this.state.updates.next({ sort, filter: this.state.filter });
    }
}
NovoSortFilter.decorators = [
    { type: Directive, args: [{
                selector: '[novoSortFilter]',
            },] }
];
/** @nocollapse */
NovoSortFilter.ctorParameters = () => [
    { type: NovoActivityTableState }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NovoSortFilter.prototype.state;
}
export class NovoSelection {
    /**
     * @param {?} state
     */
    constructor(state) {
        this.state = state;
        this.novoSelectAllToggle = new EventEmitter();
        this.allRows = new Map();
    }
    /**
     * @param {?} id
     * @param {?} row
     * @return {?}
     */
    register(id, row) {
        this.allRows.set(id, row);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deregister(id) {
        this.allRows.delete(id);
        this.state.selectedRows.delete(id);
        clearTimeout(this.throttleTimeout);
        this.throttleTimeout = setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.state.selectedRows.size === 0) {
                this.novoSelectAllToggle.emit(false);
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.allRows.clear();
        this.state.selectedRows.clear();
    }
    /**
     * @param {?} id
     * @param {?} selected
     * @param {?} row
     * @return {?}
     */
    toggle(id, selected, row) {
        if (selected) {
            this.state.selectedRows.set(id, row);
        }
        else {
            this.state.selectedRows.delete(id);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
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
NovoSelection.decorators = [
    { type: Directive, args: [{
                selector: '[novoSelection]',
            },] }
];
/** @nocollapse */
NovoSelection.ctorParameters = () => [
    { type: NovoActivityTableState }
];
NovoSelection.propDecorators = {
    novoSelectAllToggle: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NovoSelection.prototype.novoSelectAllToggle;
    /** @type {?} */
    NovoSelection.prototype.allRows;
    /**
     * @type {?}
     * @private
     */
    NovoSelection.prototype.throttleTimeout;
    /** @type {?} */
    NovoSelection.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvc29ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSzlDLE1BQU0sT0FBTyxjQUFjOzs7O0lBQ3pCLFlBQW9CLEtBQTZCO1FBQTdCLFVBQUssR0FBTCxLQUFLLENBQXdCO0lBQUcsQ0FBQzs7Ozs7OztJQUU5QyxNQUFNLENBQUMsRUFBVSxFQUFFLEtBQVUsRUFBRSxTQUFtQjs7WUFDbkQsTUFBTTtRQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNCLE1BQU0sR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7U0FDbkM7YUFBTTtZQUNMLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7Ozs7SUFFTSxJQUFJLENBQUMsRUFBVSxFQUFFLEtBQWEsRUFBRSxTQUFtQjs7Y0FDbEQsSUFBSSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7Ozs7WUFMUSxzQkFBc0I7Ozs7Ozs7SUFPakIsK0JBQXFDOztBQXlCbkQsTUFBTSxPQUFPLGFBQWE7Ozs7SUFPeEIsWUFBbUIsS0FBNkI7UUFBN0IsVUFBSyxHQUFMLEtBQUssQ0FBd0I7UUFMekMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUVsRCxZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7SUFHUSxDQUFDOzs7Ozs7SUFFN0MsUUFBUSxDQUFDLEVBQUUsRUFBRSxHQUFHO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVNLFVBQVUsQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ3JDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7O0lBRU0sTUFBTSxDQUFDLEVBQVUsRUFBRSxRQUFpQixFQUFFLEdBQVE7UUFDbkQsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7OztJQUVNLFNBQVMsQ0FBQyxLQUFjO1FBQzdCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxHQUFHLENBQWlCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqRTthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7OztZQS9CUSxzQkFBc0I7OztrQ0FpQzVCLE1BQU07Ozs7SUFBUCw0Q0FDeUQ7O0lBRXpELGdDQUEyQzs7Ozs7SUFDM0Msd0NBQTZCOztJQUVqQiw4QkFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9BY3Rpdml0eVRhYmxlU3RhdGUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9Tb3J0RmlsdGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Tb3J0RmlsdGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0ZTogTm92b0FjdGl2aXR5VGFibGVTdGF0ZSkge31cblxuICBwdWJsaWMgZmlsdGVyKGlkOiBzdHJpbmcsIHZhbHVlOiBhbnksIHRyYW5zZm9ybTogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBsZXQgZmlsdGVyO1xuICAgIGlmICghSGVscGVycy5pc0JsYW5rKHZhbHVlKSkge1xuICAgICAgZmlsdGVyID0geyBpZCwgdmFsdWUsIHRyYW5zZm9ybSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUuZmlsdGVyID0gZmlsdGVyO1xuICAgIHRoaXMuc3RhdGUucmVzZXQoZmFsc2UsIHRydWUpO1xuICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KHsgZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSk7XG4gIH1cblxuICBwdWJsaWMgc29ydChpZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCB0cmFuc2Zvcm06IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgY29uc3Qgc29ydCA9IHsgaWQsIHZhbHVlLCB0cmFuc2Zvcm0gfTtcbiAgICB0aGlzLnN0YXRlLnNvcnQgPSBzb3J0O1xuICAgIHRoaXMuc3RhdGUucmVzZXQoZmFsc2UsIHRydWUpO1xuICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KHsgc29ydCwgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlciB9KTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1NlbGVjdGlvbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2VsZWN0aW9uIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBub3ZvU2VsZWN0QWxsVG9nZ2xlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHB1YmxpYyBhbGxSb3dzID0gbmV3IE1hcDxzdHJpbmcsIG9iamVjdD4oKTtcbiAgcHJpdmF0ZSB0aHJvdHRsZVRpbWVvdXQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhdGU6IE5vdm9BY3Rpdml0eVRhYmxlU3RhdGUpIHt9XG5cbiAgcHVibGljIHJlZ2lzdGVyKGlkLCByb3cpOiB2b2lkIHtcbiAgICB0aGlzLmFsbFJvd3Muc2V0KGlkLCByb3cpO1xuICB9XG5cbiAgcHVibGljIGRlcmVnaXN0ZXIoaWQpOiB2b2lkIHtcbiAgICB0aGlzLmFsbFJvd3MuZGVsZXRlKGlkKTtcbiAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5kZWxldGUoaWQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRocm90dGxlVGltZW91dCk7XG4gICAgdGhpcy50aHJvdHRsZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5zaXplID09PSAwKSB7XG4gICAgICAgIHRoaXMubm92b1NlbGVjdEFsbFRvZ2dsZS5lbWl0KGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmFsbFJvd3MuY2xlYXIoKTtcbiAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZShpZDogc3RyaW5nLCBzZWxlY3RlZDogYm9vbGVhbiwgcm93OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLnNldChpZCwgcm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MuZGVsZXRlKGlkKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0QWxsKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cyA9IG5ldyBNYXA8c3RyaW5nLCBvYmplY3Q+KHRoaXMuYWxsUm93cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLmNsZWFyKCk7XG4gICAgfVxuICAgIHRoaXMubm92b1NlbGVjdEFsbFRvZ2dsZS5lbWl0KHZhbHVlKTtcbiAgfVxufVxuIl19