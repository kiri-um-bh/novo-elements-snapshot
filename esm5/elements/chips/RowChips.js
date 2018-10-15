/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, forwardRef, ElementRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
import { ComponentUtils } from '../../utils/component-utils/ComponentUtils';
import { NovoChipElement, NovoChipsElement } from './Chips';
// Value accessor for the component (supports ngModel)
/** @type {?} */
var CHIPS_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NovoRowChipsElement; }),
    multi: true,
};
var NovoRowChipElement = /** @class */ (function (_super) {
    tslib_1.__extends(NovoRowChipElement, _super);
    function NovoRowChipElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    NovoRowChipElement.prototype.onSelect = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        return false;
    };
    NovoRowChipElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-row-chip',
                    template: "<div class=\"novo-row-chips-columns\"><ng-content></ng-content><i class=\"bhi-delete-o\" *ngIf=\"!disabled\" (click)=\"onRemove($event)\"></i></div>"
                }] }
    ];
    return NovoRowChipElement;
}(NovoChipElement));
export { NovoRowChipElement };
var NovoRowChipsElement = /** @class */ (function (_super) {
    tslib_1.__extends(NovoRowChipsElement, _super);
    function NovoRowChipsElement(element, componentUtils, labels) {
        var _this = _super.call(this, element, componentUtils, labels) || this;
        _this.closeOnSelect = true;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NovoRowChipsElement.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return;
    };
    NovoRowChipsElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-row-chips',
                    providers: [CHIPS_VALUE_ACCESSOR],
                    host: {
                        '[class.with-value]': 'items.length > 0',
                    },
                    template: "\n        <div class=\"novo-row-chips-columns\" *ngIf=\"items.length > 0\">\n          <div class=\"column-label\" *ngFor=\"let column of source.columns\">{{ column.label }}</div>\n        </div>\n        <novo-row-chip\n          *ngFor=\"let item of _items | async\"\n          [type]=\"type || item?.value?.searchEntity\"\n          [class.selected]=\"item == selected\"\n          [disabled]=\"disablePickerInput\"\n          (remove)=\"remove($event, item)\"\n          (select)=\"select($event, item)\">\n          <div class=\"column-data\" *ngFor=\"let column of source.columns\"><span>{{ column.data(item) }}</span></div>\n        </novo-row-chip>\n        <novo-picker\n            clearValueOnSelect=\"true\"\n            [closeOnSelect]=\"closeOnSelect\"\n            [config]=\"source\"\n            [disablePickerInput]=\"disablePickerInput\"\n            [hidden]=\"disablePickerInput\"\n            [placeholder]=\"placeholder\"\n            [(ngModel)]=\"itemToAdd\"\n            (select)=\"add($event)\"\n            (keydown)=\"onKeyDown($event)\"\n            (focus)=\"onFocus($event)\"\n            (typing)=\"onTyping($event)\"\n            (blur)=\"onTouched($event)\"\n            [selected]=\"items\"\n            [overrideElement]=\"element\">\n        </novo-picker>\n        <div class=\"preview-container\">\n            <span #preview></span>\n        </div>\n   "
                }] }
    ];
    NovoRowChipsElement.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ComponentUtils },
        { type: NovoLabelService }
    ]; };
    NovoRowChipsElement.propDecorators = {
        closeOnSelect: [{ type: Input }]
    };
    return NovoRowChipsElement;
}(NovoChipsElement));
export { NovoRowChipsElement };
if (false) {
    /** @type {?} */
    NovoRowChipsElement.prototype.closeOnSelect;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm93Q2hpcHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2hpcHMvUm93Q2hpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxTQUFTLENBQUM7OztJQUd0RCxvQkFBb0IsR0FBRztJQUMzQixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFDO0lBQ2xELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFRDtJQUl3Qyw4Q0FBZTtJQUp2RDs7SUFRQSxDQUFDOzs7OztJQUhDLHFDQUFROzs7O0lBQVIsVUFBUyxDQUFDO1FBQ1IsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkFQRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxzSkFBOEk7aUJBQ3pKOztJQUtELHlCQUFDO0NBQUEsQUFSRCxDQUl3QyxlQUFlLEdBSXREO1NBSlksa0JBQWtCO0FBTS9CO0lBd0N5QywrQ0FBZ0I7SUFJdkQsNkJBQVksT0FBbUIsRUFBRSxjQUE4QixFQUFFLE1BQXdCO1FBQXpGLFlBQ0Usa0JBQU0sT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUMsU0FDdkM7UUFKRCxtQkFBYSxHQUFZLElBQUksQ0FBQzs7SUFJOUIsQ0FBQzs7Ozs7SUFFRCx1Q0FBUzs7OztJQUFULFVBQVUsS0FBSztRQUNiLE9BQU87SUFDVCxDQUFDOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNqQyxJQUFJLEVBQUU7d0JBQ0osb0JBQW9CLEVBQUUsa0JBQWtCO3FCQUN6QztvQkFDRCxRQUFRLEVBQUUsbzNDQWdDUjtpQkFDSDs7O2dCQS9EK0IsVUFBVTtnQkFJakMsY0FBYztnQkFEZCxnQkFBZ0I7OztnQ0E4RHRCLEtBQUs7O0lBVVIsMEJBQUM7Q0FBQSxBQW5ERCxDQXdDeUMsZ0JBQWdCLEdBV3hEO1NBWFksbUJBQW1COzs7SUFDOUIsNENBQzhCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5pbXBvcnQgeyBOb3ZvQ2hpcEVsZW1lbnQsIE5vdm9DaGlwc0VsZW1lbnQgfSBmcm9tICcuL0NoaXBzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBDSElQU19WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9Sb3dDaGlwc0VsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcm93LWNoaXAnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJub3ZvLXJvdy1jaGlwcy1jb2x1bW5zXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjxpIGNsYXNzPVwiYmhpLWRlbGV0ZS1vXCIgKm5nSWY9XCIhZGlzYWJsZWRcIiAoY2xpY2spPVwib25SZW1vdmUoJGV2ZW50KVwiPjwvaT48L2Rpdj5gLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvUm93Q2hpcEVsZW1lbnQgZXh0ZW5kcyBOb3ZvQ2hpcEVsZW1lbnQge1xuICBvblNlbGVjdChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcm93LWNoaXBzJyxcbiAgcHJvdmlkZXJzOiBbQ0hJUFNfVkFMVUVfQUNDRVNTT1JdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy53aXRoLXZhbHVlXSc6ICdpdGVtcy5sZW5ndGggPiAwJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tcm93LWNoaXBzLWNvbHVtbnNcIiAqbmdJZj1cIml0ZW1zLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLWxhYmVsXCIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBzb3VyY2UuY29sdW1uc1wiPnt7IGNvbHVtbi5sYWJlbCB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5vdm8tcm93LWNoaXBcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfaXRlbXMgfCBhc3luY1wiXG4gICAgICAgICAgW3R5cGVdPVwidHlwZSB8fCBpdGVtPy52YWx1ZT8uc2VhcmNoRW50aXR5XCJcbiAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXRlbSA9PSBzZWxlY3RlZFwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAgICAgKHJlbW92ZSk9XCJyZW1vdmUoJGV2ZW50LCBpdGVtKVwiXG4gICAgICAgICAgKHNlbGVjdCk9XCJzZWxlY3QoJGV2ZW50LCBpdGVtKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tZGF0YVwiICpuZ0Zvcj1cImxldCBjb2x1bW4gb2Ygc291cmNlLmNvbHVtbnNcIj48c3Bhbj57eyBjb2x1bW4uZGF0YShpdGVtKSB9fTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPC9ub3ZvLXJvdy1jaGlwPlxuICAgICAgICA8bm92by1waWNrZXJcbiAgICAgICAgICAgIGNsZWFyVmFsdWVPblNlbGVjdD1cInRydWVcIlxuICAgICAgICAgICAgW2Nsb3NlT25TZWxlY3RdPVwiY2xvc2VPblNlbGVjdFwiXG4gICAgICAgICAgICBbY29uZmlnXT1cInNvdXJjZVwiXG4gICAgICAgICAgICBbZGlzYWJsZVBpY2tlcklucHV0XT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAgICAgICBbaGlkZGVuXT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpdGVtVG9BZGRcIlxuICAgICAgICAgICAgKHNlbGVjdCk9XCJhZGQoJGV2ZW50KVwiXG4gICAgICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAgICh0eXBpbmcpPVwib25UeXBpbmcoJGV2ZW50KVwiXG4gICAgICAgICAgICAoYmx1cik9XCJvblRvdWNoZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICBbc2VsZWN0ZWRdPVwiaXRlbXNcIlxuICAgICAgICAgICAgW292ZXJyaWRlRWxlbWVudF09XCJlbGVtZW50XCI+XG4gICAgICAgIDwvbm92by1waWNrZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHNwYW4gI3ByZXZpZXc+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Sb3dDaGlwc0VsZW1lbnQgZXh0ZW5kcyBOb3ZvQ2hpcHNFbGVtZW50IHtcbiAgQElucHV0KClcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzLCBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb21wb25lbnRVdGlscywgbGFiZWxzKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19