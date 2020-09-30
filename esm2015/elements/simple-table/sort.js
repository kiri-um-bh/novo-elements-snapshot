/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.state.updates.next({ filter: filter, sort: this.state.sort });
    }
    /**
     * @param {?} id
     * @param {?} value
     * @param {?} transform
     * @return {?}
     */
    sort(id, value, transform) {
        /** @type {?} */
        let sort = { id, value, transform };
        this.state.sort = sort;
        this.state.reset(false, true);
        this.state.updates.next({ sort: sort, filter: this.state.filter });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvc29ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLOUMsTUFBTSxPQUFPLGNBQWM7Ozs7SUFDekIsWUFBb0IsS0FBNkI7UUFBN0IsVUFBSyxHQUFMLEtBQUssQ0FBd0I7SUFBRyxDQUFDOzs7Ozs7O0lBRTlDLE1BQU0sQ0FBQyxFQUFVLEVBQUUsS0FBVSxFQUFFLFNBQW1COztZQUNuRCxNQUFNO1FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0IsTUFBTSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQztTQUNuQzthQUFNO1lBQ0wsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7Ozs7SUFFTSxJQUFJLENBQUMsRUFBVSxFQUFFLEtBQWEsRUFBRSxTQUFtQjs7WUFDcEQsSUFBSSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7O1lBdkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7O1lBTFEsc0JBQXNCOzs7Ozs7O0lBT2pCLCtCQUFxQzs7QUF5Qm5ELE1BQU0sT0FBTyxhQUFhOzs7O0lBT3hCLFlBQW1CLEtBQTZCO1FBQTdCLFVBQUssR0FBTCxLQUFLLENBQXdCO1FBTHpDLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFbEQsWUFBTyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0lBR1EsQ0FBQzs7Ozs7O0lBRTdDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsR0FBRztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTSxVQUFVLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNyQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7OztJQUVNLE1BQU0sQ0FBQyxFQUFVLEVBQUUsUUFBaUIsRUFBRSxHQUFRO1FBQ25ELElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxTQUFTLENBQUMsS0FBYztRQUM3QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksR0FBRyxDQUFpQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakU7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7Ozs7WUEvQlEsc0JBQXNCOzs7a0NBaUM1QixNQUFNOzs7O0lBQVAsNENBQ3lEOztJQUV6RCxnQ0FBMkM7Ozs7O0lBQzNDLHdDQUE2Qjs7SUFFakIsOEJBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3ZvQWN0aXZpdHlUYWJsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvU29ydEZpbHRlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU29ydEZpbHRlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhdGU6IE5vdm9BY3Rpdml0eVRhYmxlU3RhdGUpIHt9XG5cbiAgcHVibGljIGZpbHRlcihpZDogc3RyaW5nLCB2YWx1ZTogYW55LCB0cmFuc2Zvcm06IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgbGV0IGZpbHRlcjtcbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayh2YWx1ZSkpIHtcbiAgICAgIGZpbHRlciA9IHsgaWQsIHZhbHVlLCB0cmFuc2Zvcm0gfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlLmZpbHRlciA9IGZpbHRlcjtcbiAgICB0aGlzLnN0YXRlLnJlc2V0KGZhbHNlLCB0cnVlKTtcbiAgICB0aGlzLnN0YXRlLnVwZGF0ZXMubmV4dCh7IGZpbHRlcjogZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSk7XG4gIH1cblxuICBwdWJsaWMgc29ydChpZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCB0cmFuc2Zvcm06IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgbGV0IHNvcnQgPSB7IGlkLCB2YWx1ZSwgdHJhbnNmb3JtIH07XG4gICAgdGhpcy5zdGF0ZS5zb3J0ID0gc29ydDtcbiAgICB0aGlzLnN0YXRlLnJlc2V0KGZhbHNlLCB0cnVlKTtcbiAgICB0aGlzLnN0YXRlLnVwZGF0ZXMubmV4dCh7IHNvcnQ6IHNvcnQsIGZpbHRlcjogdGhpcy5zdGF0ZS5maWx0ZXIgfSk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TZWxlY3Rpb25dJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NlbGVjdGlvbiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgbm92b1NlbGVjdEFsbFRvZ2dsZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwdWJsaWMgYWxsUm93cyA9IG5ldyBNYXA8c3RyaW5nLCBvYmplY3Q+KCk7XG4gIHByaXZhdGUgdGhyb3R0bGVUaW1lb3V0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0YXRlOiBOb3ZvQWN0aXZpdHlUYWJsZVN0YXRlKSB7fVxuXG4gIHB1YmxpYyByZWdpc3RlcihpZCwgcm93KTogdm9pZCB7XG4gICAgdGhpcy5hbGxSb3dzLnNldChpZCwgcm93KTtcbiAgfVxuXG4gIHB1YmxpYyBkZXJlZ2lzdGVyKGlkKTogdm9pZCB7XG4gICAgdGhpcy5hbGxSb3dzLmRlbGV0ZShpZCk7XG4gICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MuZGVsZXRlKGlkKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aHJvdHRsZVRpbWVvdXQpO1xuICAgIHRoaXMudGhyb3R0bGVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3Muc2l6ZSA9PT0gMCkge1xuICAgICAgICB0aGlzLm5vdm9TZWxlY3RBbGxUb2dnbGUuZW1pdChmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5hbGxSb3dzLmNsZWFyKCk7XG4gICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MuY2xlYXIoKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoaWQ6IHN0cmluZywgc2VsZWN0ZWQ6IGJvb2xlYW4sIHJvdzogYW55KTogdm9pZCB7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5zZXQoaWQsIHJvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLmRlbGV0ZShpZCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNlbGVjdEFsbCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MgPSBuZXcgTWFwPHN0cmluZywgb2JqZWN0Pih0aGlzLmFsbFJvd3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5jbGVhcigpO1xuICAgIH1cbiAgICB0aGlzLm5vdm9TZWxlY3RBbGxUb2dnbGUuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==