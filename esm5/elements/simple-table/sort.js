/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    NovoSortFilter.ctorParameters = function () { return [
        { type: NovoActivityTableState }
    ]; };
    return NovoSortFilter;
}());
export { NovoSortFilter };
if (false) {
    /** @type {?} */
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
    /** @type {?} */
    NovoSelection.prototype.throttleTimeout;
    /** @type {?} */
    NovoSelection.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvc29ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFOUM7SUFJRSx3QkFBb0IsS0FBNkI7UUFBN0IsVUFBSyxHQUFMLEtBQUssQ0FBd0I7SUFBRyxDQUFDOzs7Ozs7O0lBRTlDLCtCQUFNOzs7Ozs7SUFBYixVQUFjLEVBQVUsRUFBRSxLQUFVLEVBQUUsU0FBbUI7O1lBQ25ELE1BQU07UUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQixNQUFNLEdBQUcsRUFBRSxFQUFFLElBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDO1NBQ25DO2FBQU07WUFDTCxNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7OztJQUVNLDZCQUFJOzs7Ozs7SUFBWCxVQUFZLEVBQVUsRUFBRSxLQUFhLEVBQUUsU0FBbUI7O1lBQ3BELElBQUksR0FBRyxFQUFFLEVBQUUs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QUV6RCxnQ0FBMkM7O0lBQzNDLHdDQUE2Qjs7SUFFakIsOEJBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3ZvQWN0aXZpdHlUYWJsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvU29ydEZpbHRlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU29ydEZpbHRlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhdGU6IE5vdm9BY3Rpdml0eVRhYmxlU3RhdGUpIHt9XG5cbiAgcHVibGljIGZpbHRlcihpZDogc3RyaW5nLCB2YWx1ZTogYW55LCB0cmFuc2Zvcm06IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgbGV0IGZpbHRlcjtcbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayh2YWx1ZSkpIHtcbiAgICAgIGZpbHRlciA9IHsgaWQsIHZhbHVlLCB0cmFuc2Zvcm0gfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlLmZpbHRlciA9IGZpbHRlcjtcbiAgICB0aGlzLnN0YXRlLnJlc2V0KGZhbHNlLCB0cnVlKTtcbiAgICB0aGlzLnN0YXRlLnVwZGF0ZXMubmV4dCh7IGZpbHRlcjogZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSk7XG4gIH1cblxuICBwdWJsaWMgc29ydChpZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCB0cmFuc2Zvcm06IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgbGV0IHNvcnQgPSB7IGlkLCB2YWx1ZSwgdHJhbnNmb3JtIH07XG4gICAgdGhpcy5zdGF0ZS5zb3J0ID0gc29ydDtcbiAgICB0aGlzLnN0YXRlLnJlc2V0KGZhbHNlLCB0cnVlKTtcbiAgICB0aGlzLnN0YXRlLnVwZGF0ZXMubmV4dCh7IHNvcnQ6IHNvcnQsIGZpbHRlcjogdGhpcy5zdGF0ZS5maWx0ZXIgfSk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TZWxlY3Rpb25dJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NlbGVjdGlvbiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgbm92b1NlbGVjdEFsbFRvZ2dsZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwdWJsaWMgYWxsUm93cyA9IG5ldyBNYXA8c3RyaW5nLCBvYmplY3Q+KCk7XG4gIHByaXZhdGUgdGhyb3R0bGVUaW1lb3V0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0YXRlOiBOb3ZvQWN0aXZpdHlUYWJsZVN0YXRlKSB7fVxuXG4gIHB1YmxpYyByZWdpc3RlcihpZCwgcm93KTogdm9pZCB7XG4gICAgdGhpcy5hbGxSb3dzLnNldChpZCwgcm93KTtcbiAgfVxuXG4gIHB1YmxpYyBkZXJlZ2lzdGVyKGlkKTogdm9pZCB7XG4gICAgdGhpcy5hbGxSb3dzLmRlbGV0ZShpZCk7XG4gICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MuZGVsZXRlKGlkKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aHJvdHRsZVRpbWVvdXQpO1xuICAgIHRoaXMudGhyb3R0bGVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3Muc2l6ZSA9PT0gMCkge1xuICAgICAgICB0aGlzLm5vdm9TZWxlY3RBbGxUb2dnbGUuZW1pdChmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5hbGxSb3dzLmNsZWFyKCk7XG4gICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MuY2xlYXIoKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoaWQ6IHN0cmluZywgc2VsZWN0ZWQ6IGJvb2xlYW4sIHJvdzogYW55KTogdm9pZCB7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5zZXQoaWQsIHJvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLmRlbGV0ZShpZCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNlbGVjdEFsbCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MgPSBuZXcgTWFwPHN0cmluZywgb2JqZWN0Pih0aGlzLmFsbFJvd3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuICAgIH1cbiAgICB0aGlzLm5vdm9TZWxlY3RBbGxUb2dnbGUuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==