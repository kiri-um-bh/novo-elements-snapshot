/**
 * @fileoverview added by tsickle
 * Generated from: elements/simple-table/sort.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvc29ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTlDO0lBSUUsd0JBQW9CLEtBQTZCO1FBQTdCLFVBQUssR0FBTCxLQUFLLENBQXdCO0lBQUcsQ0FBQzs7Ozs7OztJQUU5QywrQkFBTTs7Ozs7O0lBQWIsVUFBYyxFQUFVLEVBQUUsS0FBVSxFQUFFLFNBQW1COztZQUNuRCxNQUFNO1FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0IsTUFBTSxHQUFHLEVBQUUsRUFBRSxJQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUUsQ0FBQztTQUNuQzthQUFNO1lBQ0wsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxRQUFBLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7O0lBRU0sNkJBQUk7Ozs7OztJQUFYLFVBQVksRUFBVSxFQUFFLEtBQWEsRUFBRSxTQUFtQjs7WUFDbEQsSUFBSSxHQUFHLEVBQUUsRUFBRSxJQUFB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ekQsZ0NBQTJDOzs7OztJQUMzQyx3Q0FBNkI7O0lBRWpCLDhCQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b0FjdGl2aXR5VGFibGVTdGF0ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1NvcnRGaWx0ZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NvcnRGaWx0ZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXRlOiBOb3ZvQWN0aXZpdHlUYWJsZVN0YXRlKSB7fVxuXG4gIHB1YmxpYyBmaWx0ZXIoaWQ6IHN0cmluZywgdmFsdWU6IGFueSwgdHJhbnNmb3JtOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGxldCBmaWx0ZXI7XG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsodmFsdWUpKSB7XG4gICAgICBmaWx0ZXIgPSB7IGlkLCB2YWx1ZSwgdHJhbnNmb3JtIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5maWx0ZXIgPSBmaWx0ZXI7XG4gICAgdGhpcy5zdGF0ZS5yZXNldChmYWxzZSwgdHJ1ZSk7XG4gICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBmaWx0ZXIsIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzb3J0KGlkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHRyYW5zZm9ybTogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBjb25zdCBzb3J0ID0geyBpZCwgdmFsdWUsIHRyYW5zZm9ybSB9O1xuICAgIHRoaXMuc3RhdGUuc29ydCA9IHNvcnQ7XG4gICAgdGhpcy5zdGF0ZS5yZXNldChmYWxzZSwgdHJ1ZSk7XG4gICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBzb3J0LCBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyIH0pO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvU2VsZWN0aW9uXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TZWxlY3Rpb24gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KClcbiAgcHVibGljIG5vdm9TZWxlY3RBbGxUb2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgcHVibGljIGFsbFJvd3MgPSBuZXcgTWFwPHN0cmluZywgb2JqZWN0PigpO1xuICBwcml2YXRlIHRocm90dGxlVGltZW91dDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0ZTogTm92b0FjdGl2aXR5VGFibGVTdGF0ZSkge31cblxuICBwdWJsaWMgcmVnaXN0ZXIoaWQsIHJvdyk6IHZvaWQge1xuICAgIHRoaXMuYWxsUm93cy5zZXQoaWQsIHJvdyk7XG4gIH1cblxuICBwdWJsaWMgZGVyZWdpc3RlcihpZCk6IHZvaWQge1xuICAgIHRoaXMuYWxsUm93cy5kZWxldGUoaWQpO1xuICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLmRlbGV0ZShpZCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGhyb3R0bGVUaW1lb3V0KTtcbiAgICB0aGlzLnRocm90dGxlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLnNpemUgPT09IDApIHtcbiAgICAgICAgdGhpcy5ub3ZvU2VsZWN0QWxsVG9nZ2xlLmVtaXQoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuYWxsUm93cy5jbGVhcigpO1xuICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLmNsZWFyKCk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKGlkOiBzdHJpbmcsIHNlbGVjdGVkOiBib29sZWFuLCByb3c6IGFueSk6IHZvaWQge1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3Muc2V0KGlkLCByb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5kZWxldGUoaWQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RBbGwodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzID0gbmV3IE1hcDxzdHJpbmcsIG9iamVjdD4odGhpcy5hbGxSb3dzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MuY2xlYXIoKTtcbiAgICB9XG4gICAgdGhpcy5ub3ZvU2VsZWN0QWxsVG9nZ2xlLmVtaXQodmFsdWUpO1xuICB9XG59XG4iXX0=