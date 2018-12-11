/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, Output } from '@angular/core';
import { NovoActivityTableState } from './state';
import { Helpers } from '../../utils/Helpers';
var NovoSortFilter = /** @class */ (function () {
    function NovoSortFilter(state) {
        this.state = state;
    }
    /**
     * @param {?} id
     * @param {?} value
     * @param {?} transform
     * @return {?}
     */
    NovoSortFilter.prototype.filter = /**
     * @param {?} id
     * @param {?} value
     * @param {?} transform
     * @return {?}
     */
    function (id, value, transform) {
        /** @type {?} */
        var filter;
        if (!Helpers.isBlank(value)) {
            filter = { id: id, value: value, transform: transform };
        }
        else {
            filter = undefined;
        }
        this.state.filter = filter;
        this.state.reset(false, true);
        this.state.updates.next({ filter: filter, sort: this.state.sort });
    };
    /**
     * @param {?} id
     * @param {?} value
     * @param {?} transform
     * @return {?}
     */
    NovoSortFilter.prototype.sort = /**
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
    };
    NovoSortFilter.decorators = [
        { type: Directive, args: [{
                    selector: '[novoSortFilter]',
                },] }
    ];
    /** @nocollapse */
    NovoSortFilter.ctorParameters = function () { return [
        { type: NovoActivityTableState }
    ]; };
    return NovoSortFilter;
}());
export { NovoSortFilter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NovoSortFilter.prototype.state;
}
var NovoSelection = /** @class */ (function () {
    function NovoSelection(state) {
        this.state = state;
        this.novoSelectAllToggle = new EventEmitter();
        this.allRows = new Map();
    }
    /**
     * @param {?} id
     * @param {?} row
     * @return {?}
     */
    NovoSelection.prototype.register = /**
     * @param {?} id
     * @param {?} row
     * @return {?}
     */
    function (id, row) {
        this.allRows.set(id, row);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    NovoSelection.prototype.deregister = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        this.allRows.delete(id);
        this.state.selectedRows.delete(id);
        clearTimeout(this.throttleTimeout);
        this.throttleTimeout = setTimeout(function () {
            if (_this.state.selectedRows.size === 0) {
                _this.novoSelectAllToggle.emit(false);
            }
        });
    };
    /**
     * @return {?}
     */
    NovoSelection.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.allRows.clear();
        this.state.selectedRows.clear();
    };
    /**
     * @param {?} id
     * @param {?} selected
     * @param {?} row
     * @return {?}
     */
    NovoSelection.prototype.toggle = /**
     * @param {?} id
     * @param {?} selected
     * @param {?} row
     * @return {?}
     */
    function (id, selected, row) {
        if (selected) {
            this.state.selectedRows.set(id, row);
        }
        else {
            this.state.selectedRows.delete(id);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoSelection.prototype.selectAll = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            this.state.selectedRows = new Map(this.allRows);
        }
        else {
            this.state.selectedRows.clear();
        }
        this.novoSelectAllToggle.emit(value);
    };
    NovoSelection.decorators = [
        { type: Directive, args: [{
                    selector: '[novoSelection]',
                },] }
    ];
    /** @nocollapse */
    NovoSelection.ctorParameters = function () { return [
        { type: NovoActivityTableState }
    ]; };
    NovoSelection.propDecorators = {
        novoSelectAllToggle: [{ type: Output }]
    };
    return NovoSelection;
}());
export { NovoSelection };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvc29ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFOUM7SUFJRSx3QkFBb0IsS0FBNkI7UUFBN0IsVUFBSyxHQUFMLEtBQUssQ0FBd0I7SUFBRyxDQUFDOzs7Ozs7O0lBRTlDLCtCQUFNOzs7Ozs7SUFBYixVQUFjLEVBQVUsRUFBRSxLQUFVLEVBQUUsU0FBbUI7O1lBQ25ELE1BQU07UUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQixNQUFNLEdBQUcsRUFBRSxFQUFFLElBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDO1NBQ25DO2FBQU07WUFDTCxNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7OztJQUVNLDZCQUFJOzs7Ozs7SUFBWCxVQUFZLEVBQVUsRUFBRSxLQUFhLEVBQUUsU0FBbUI7O1lBQ3BELElBQUksR0FBRyxFQUFFLEVBQUUs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eUQ7O0lBRXpELGdDQUEyQzs7Ozs7SUFDM0Msd0NBQTZCOztJQUVqQiw4QkFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9BY3Rpdml0eVRhYmxlU3RhdGUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9Tb3J0RmlsdGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Tb3J0RmlsdGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0ZTogTm92b0FjdGl2aXR5VGFibGVTdGF0ZSkge31cblxuICBwdWJsaWMgZmlsdGVyKGlkOiBzdHJpbmcsIHZhbHVlOiBhbnksIHRyYW5zZm9ybTogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBsZXQgZmlsdGVyO1xuICAgIGlmICghSGVscGVycy5pc0JsYW5rKHZhbHVlKSkge1xuICAgICAgZmlsdGVyID0geyBpZCwgdmFsdWUsIHRyYW5zZm9ybSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUuZmlsdGVyID0gZmlsdGVyO1xuICAgIHRoaXMuc3RhdGUucmVzZXQoZmFsc2UsIHRydWUpO1xuICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KHsgZmlsdGVyOiBmaWx0ZXIsIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzb3J0KGlkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHRyYW5zZm9ybTogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBsZXQgc29ydCA9IHsgaWQsIHZhbHVlLCB0cmFuc2Zvcm0gfTtcbiAgICB0aGlzLnN0YXRlLnNvcnQgPSBzb3J0O1xuICAgIHRoaXMuc3RhdGUucmVzZXQoZmFsc2UsIHRydWUpO1xuICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KHsgc29ydDogc29ydCwgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlciB9KTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1NlbGVjdGlvbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2VsZWN0aW9uIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBub3ZvU2VsZWN0QWxsVG9nZ2xlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHB1YmxpYyBhbGxSb3dzID0gbmV3IE1hcDxzdHJpbmcsIG9iamVjdD4oKTtcbiAgcHJpdmF0ZSB0aHJvdHRsZVRpbWVvdXQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhdGU6IE5vdm9BY3Rpdml0eVRhYmxlU3RhdGUpIHt9XG5cbiAgcHVibGljIHJlZ2lzdGVyKGlkLCByb3cpOiB2b2lkIHtcbiAgICB0aGlzLmFsbFJvd3Muc2V0KGlkLCByb3cpO1xuICB9XG5cbiAgcHVibGljIGRlcmVnaXN0ZXIoaWQpOiB2b2lkIHtcbiAgICB0aGlzLmFsbFJvd3MuZGVsZXRlKGlkKTtcbiAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5kZWxldGUoaWQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRocm90dGxlVGltZW91dCk7XG4gICAgdGhpcy50aHJvdHRsZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5zaXplID09PSAwKSB7XG4gICAgICAgIHRoaXMubm92b1NlbGVjdEFsbFRvZ2dsZS5lbWl0KGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmFsbFJvd3MuY2xlYXIoKTtcbiAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZShpZDogc3RyaW5nLCBzZWxlY3RlZDogYm9vbGVhbiwgcm93OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLnNldChpZCwgcm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MuZGVsZXRlKGlkKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0QWxsKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cyA9IG5ldyBNYXA8c3RyaW5nLCBvYmplY3Q+KHRoaXMuYWxsUm93cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLmNsZWFyKCk7XG4gICAgfVxuICAgIHRoaXMubm92b1NlbGVjdEFsbFRvZ2dsZS5lbWl0KHZhbHVlKTtcbiAgfVxufVxuIl19