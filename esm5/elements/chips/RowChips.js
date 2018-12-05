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
                    template: "\n        <div class=\"novo-row-chips-columns\" *ngIf=\"items.length > 0\">\n          <div class=\"column-label\" *ngFor=\"let column of source.columns\">{{ column.label }}</div>\n        </div>\n        <div class=\"novo-row-chips-empty-message\" *ngIf=\"source.emptyReadOnlyMessage && disablePickerInput && items.length === 0\">{{source.emptyReadOnlyMessage}}</div>\n        <novo-row-chip\n          *ngFor=\"let item of _items | async\"\n          [type]=\"type || item?.value?.searchEntity\"\n          [class.selected]=\"item == selected\"\n          [disabled]=\"disablePickerInput\"\n          (remove)=\"remove($event, item)\"\n          (select)=\"select($event, item)\">\n          <div class=\"column-data\" *ngFor=\"let column of source.columns\"><span>{{ column.data(item) }}</span></div>\n        </novo-row-chip>\n        <novo-picker\n            clearValueOnSelect=\"true\"\n            [closeOnSelect]=\"closeOnSelect\"\n            [config]=\"source\"\n            [disablePickerInput]=\"disablePickerInput\"\n            [hidden]=\"disablePickerInput\"\n            [placeholder]=\"placeholder\"\n            [(ngModel)]=\"itemToAdd\"\n            (select)=\"add($event)\"\n            (keydown)=\"onKeyDown($event)\"\n            (focus)=\"onFocus($event)\"\n            (typing)=\"onTyping($event)\"\n            (blur)=\"onTouched($event)\"\n            [selected]=\"items\"\n            [overrideElement]=\"element\">\n        </novo-picker>\n        <div class=\"preview-container\">\n            <span #preview></span>\n        </div>\n   "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm93Q2hpcHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2hpcHMvUm93Q2hpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxTQUFTLENBQUM7OztJQUd0RCxvQkFBb0IsR0FBRztJQUMzQixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFDO0lBQ2xELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFRDtJQUl3Qyw4Q0FBZTtJQUp2RDs7SUFRQSxDQUFDOzs7OztJQUhDLHFDQUFROzs7O0lBQVIsVUFBUyxDQUFDO1FBQ1IsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkFQRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxzSkFBOEk7aUJBQ3pKOztJQUtELHlCQUFDO0NBQUEsQUFSRCxDQUl3QyxlQUFlLEdBSXREO1NBSlksa0JBQWtCO0FBTS9CO0lBeUN5QywrQ0FBZ0I7SUFJdkQsNkJBQVksT0FBbUIsRUFBRSxjQUE4QixFQUFFLE1BQXdCO1FBQXpGLFlBQ0Usa0JBQU0sT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUMsU0FDdkM7UUFKRCxtQkFBYSxHQUFZLElBQUksQ0FBQzs7SUFJOUIsQ0FBQzs7Ozs7SUFFRCx1Q0FBUzs7OztJQUFULFVBQVUsS0FBSztRQUNiLE9BQU87SUFDVCxDQUFDOztnQkFuREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNqQyxJQUFJLEVBQUU7d0JBQ0osb0JBQW9CLEVBQUUsa0JBQWtCO3FCQUN6QztvQkFDRCxRQUFRLEVBQUUsaWlEQWlDUjtpQkFDSDs7O2dCQWhFK0IsVUFBVTtnQkFJakMsY0FBYztnQkFEZCxnQkFBZ0I7OztnQ0ErRHRCLEtBQUs7O0lBVVIsMEJBQUM7Q0FBQSxBQXBERCxDQXlDeUMsZ0JBQWdCLEdBV3hEO1NBWFksbUJBQW1COzs7SUFDOUIsNENBQzhCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5pbXBvcnQgeyBOb3ZvQ2hpcEVsZW1lbnQsIE5vdm9DaGlwc0VsZW1lbnQgfSBmcm9tICcuL0NoaXBzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBDSElQU19WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9Sb3dDaGlwc0VsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcm93LWNoaXAnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJub3ZvLXJvdy1jaGlwcy1jb2x1bW5zXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjxpIGNsYXNzPVwiYmhpLWRlbGV0ZS1vXCIgKm5nSWY9XCIhZGlzYWJsZWRcIiAoY2xpY2spPVwib25SZW1vdmUoJGV2ZW50KVwiPjwvaT48L2Rpdj5gLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvUm93Q2hpcEVsZW1lbnQgZXh0ZW5kcyBOb3ZvQ2hpcEVsZW1lbnQge1xuICBvblNlbGVjdChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcm93LWNoaXBzJyxcbiAgcHJvdmlkZXJzOiBbQ0hJUFNfVkFMVUVfQUNDRVNTT1JdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy53aXRoLXZhbHVlXSc6ICdpdGVtcy5sZW5ndGggPiAwJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tcm93LWNoaXBzLWNvbHVtbnNcIiAqbmdJZj1cIml0ZW1zLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLWxhYmVsXCIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBzb3VyY2UuY29sdW1uc1wiPnt7IGNvbHVtbi5sYWJlbCB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tcm93LWNoaXBzLWVtcHR5LW1lc3NhZ2VcIiAqbmdJZj1cInNvdXJjZS5lbXB0eVJlYWRPbmx5TWVzc2FnZSAmJiBkaXNhYmxlUGlja2VySW5wdXQgJiYgaXRlbXMubGVuZ3RoID09PSAwXCI+e3tzb3VyY2UuZW1wdHlSZWFkT25seU1lc3NhZ2V9fTwvZGl2PlxuICAgICAgICA8bm92by1yb3ctY2hpcFxuICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIF9pdGVtcyB8IGFzeW5jXCJcbiAgICAgICAgICBbdHlwZV09XCJ0eXBlIHx8IGl0ZW0/LnZhbHVlPy5zZWFyY2hFbnRpdHlcIlxuICAgICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJpdGVtID09IHNlbGVjdGVkXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZVBpY2tlcklucHV0XCJcbiAgICAgICAgICAocmVtb3ZlKT1cInJlbW92ZSgkZXZlbnQsIGl0ZW0pXCJcbiAgICAgICAgICAoc2VsZWN0KT1cInNlbGVjdCgkZXZlbnQsIGl0ZW0pXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1kYXRhXCIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBzb3VyY2UuY29sdW1uc1wiPjxzcGFuPnt7IGNvbHVtbi5kYXRhKGl0ZW0pIH19PC9zcGFuPjwvZGl2PlxuICAgICAgICA8L25vdm8tcm93LWNoaXA+XG4gICAgICAgIDxub3ZvLXBpY2tlclxuICAgICAgICAgICAgY2xlYXJWYWx1ZU9uU2VsZWN0PVwidHJ1ZVwiXG4gICAgICAgICAgICBbY2xvc2VPblNlbGVjdF09XCJjbG9zZU9uU2VsZWN0XCJcbiAgICAgICAgICAgIFtjb25maWddPVwic291cmNlXCJcbiAgICAgICAgICAgIFtkaXNhYmxlUGlja2VySW5wdXRdPVwiZGlzYWJsZVBpY2tlcklucHV0XCJcbiAgICAgICAgICAgIFtoaWRkZW5dPVwiZGlzYWJsZVBpY2tlcklucHV0XCJcbiAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cIml0ZW1Ub0FkZFwiXG4gICAgICAgICAgICAoc2VsZWN0KT1cImFkZCgkZXZlbnQpXCJcbiAgICAgICAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcbiAgICAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxuICAgICAgICAgICAgKHR5cGluZyk9XCJvblR5cGluZygkZXZlbnQpXCJcbiAgICAgICAgICAgIChibHVyKT1cIm9uVG91Y2hlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgIFtzZWxlY3RlZF09XCJpdGVtc1wiXG4gICAgICAgICAgICBbb3ZlcnJpZGVFbGVtZW50XT1cImVsZW1lbnRcIj5cbiAgICAgICAgPC9ub3ZvLXBpY2tlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8c3BhbiAjcHJldmlldz48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1Jvd0NoaXBzRWxlbWVudCBleHRlbmRzIE5vdm9DaGlwc0VsZW1lbnQge1xuICBASW5wdXQoKVxuICBjbG9zZU9uU2VsZWN0OiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMsIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbXBvbmVudFV0aWxzLCBsYWJlbHMpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=