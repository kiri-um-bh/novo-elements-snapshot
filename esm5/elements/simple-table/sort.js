/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.throttleTimeout = setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.state.selectedRows.size === 0) {
                _this.novoSelectAllToggle.emit(false);
            }
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvc29ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFOUM7SUFJRSx3QkFBb0IsS0FBNkI7UUFBN0IsVUFBSyxHQUFMLEtBQUssQ0FBd0I7SUFBRyxDQUFDOzs7Ozs7O0lBRTlDLCtCQUFNOzs7Ozs7SUFBYixVQUFjLEVBQVUsRUFBRSxLQUFVLEVBQUUsU0FBbUI7O1lBQ25ELE1BQU07UUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQixNQUFNLEdBQUcsRUFBRSxFQUFFLElBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDO1NBQ25DO2FBQU07WUFDTCxNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7OztJQUVNLDZCQUFJOzs7Ozs7SUFBWCxVQUFZLEVBQVUsRUFBRSxLQUFhLEVBQUUsU0FBbUI7O1lBQ3BELElBQUksR0FBRyxFQUFFLEVBQUUs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QUN5RDs7SUFFekQsZ0NBQTJDOzs7OztJQUMzQyx3Q0FBNkI7O0lBRWpCLDhCQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b0FjdGl2aXR5VGFibGVTdGF0ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1NvcnRGaWx0ZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NvcnRGaWx0ZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXRlOiBOb3ZvQWN0aXZpdHlUYWJsZVN0YXRlKSB7fVxuXG4gIHB1YmxpYyBmaWx0ZXIoaWQ6IHN0cmluZywgdmFsdWU6IGFueSwgdHJhbnNmb3JtOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGxldCBmaWx0ZXI7XG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsodmFsdWUpKSB7XG4gICAgICBmaWx0ZXIgPSB7IGlkLCB2YWx1ZSwgdHJhbnNmb3JtIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5maWx0ZXIgPSBmaWx0ZXI7XG4gICAgdGhpcy5zdGF0ZS5yZXNldChmYWxzZSwgdHJ1ZSk7XG4gICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBmaWx0ZXI6IGZpbHRlciwgc29ydDogdGhpcy5zdGF0ZS5zb3J0IH0pO1xuICB9XG5cbiAgcHVibGljIHNvcnQoaWQ6IHN0cmluZywgdmFsdWU6IHN0cmluZywgdHJhbnNmb3JtOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGxldCBzb3J0ID0geyBpZCwgdmFsdWUsIHRyYW5zZm9ybSB9O1xuICAgIHRoaXMuc3RhdGUuc29ydCA9IHNvcnQ7XG4gICAgdGhpcy5zdGF0ZS5yZXNldChmYWxzZSwgdHJ1ZSk7XG4gICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBzb3J0OiBzb3J0LCBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyIH0pO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvU2VsZWN0aW9uXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TZWxlY3Rpb24gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KClcbiAgcHVibGljIG5vdm9TZWxlY3RBbGxUb2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgcHVibGljIGFsbFJvd3MgPSBuZXcgTWFwPHN0cmluZywgb2JqZWN0PigpO1xuICBwcml2YXRlIHRocm90dGxlVGltZW91dDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0ZTogTm92b0FjdGl2aXR5VGFibGVTdGF0ZSkge31cblxuICBwdWJsaWMgcmVnaXN0ZXIoaWQsIHJvdyk6IHZvaWQge1xuICAgIHRoaXMuYWxsUm93cy5zZXQoaWQsIHJvdyk7XG4gIH1cblxuICBwdWJsaWMgZGVyZWdpc3RlcihpZCk6IHZvaWQge1xuICAgIHRoaXMuYWxsUm93cy5kZWxldGUoaWQpO1xuICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLmRlbGV0ZShpZCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGhyb3R0bGVUaW1lb3V0KTtcbiAgICB0aGlzLnRocm90dGxlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLnNpemUgPT09IDApIHtcbiAgICAgICAgdGhpcy5ub3ZvU2VsZWN0QWxsVG9nZ2xlLmVtaXQoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuYWxsUm93cy5jbGVhcigpO1xuICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLmNsZWFyKCk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKGlkOiBzdHJpbmcsIHNlbGVjdGVkOiBib29sZWFuLCByb3c6IGFueSk6IHZvaWQge1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3Muc2V0KGlkLCByb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5kZWxldGUoaWQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RBbGwodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzID0gbmV3IE1hcDxzdHJpbmcsIG9iamVjdD4odGhpcy5hbGxSb3dzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MuY2xlYXIoKTtcbiAgICB9XG4gICAgdGhpcy5ub3ZvU2VsZWN0QWxsVG9nZ2xlLmVtaXQodmFsdWUpO1xuICB9XG59XG4iXX0=