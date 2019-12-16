/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/extras/date-cell/DateCell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, Input } from '@angular/core';
// APP
import { BaseRenderer } from '../base-renderer/BaseRenderer';
import { NovoLabelService } from '../../../../services/novo-label-service';
var DateCell = /** @class */ (function (_super) {
    tslib_1.__extends(DateCell, _super);
    function DateCell(labels) {
        var _this = _super.call(this) || this;
        _this.labels = labels;
        return _this;
    }
    /**
     * @return {?}
     */
    DateCell.prototype.getFormattedDate = /**
     * @return {?}
     */
    function () {
        return this.labels.formatDate(this.value);
    };
    DateCell.decorators = [
        { type: Component, args: [{
                    selector: 'date-cell',
                    template: "\n        <div class=\"date-cell\">\n            <label>{{ getFormattedDate() }}</label>\n        </div>\n    "
                }] }
    ];
    /** @nocollapse */
    DateCell.ctorParameters = function () { return [
        { type: NovoLabelService }
    ]; };
    DateCell.propDecorators = {
        value: [{ type: Input }]
    };
    return DateCell;
}(BaseRenderer));
export { DateCell };
if (false) {
    /** @type {?} */
    DateCell.prototype.value;
    /** @type {?} */
    DateCell.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZUNlbGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL2RhdGUtY2VsbC9EYXRlQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRWpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUUzRTtJQVE4QixvQ0FBWTtJQUd4QyxrQkFBbUIsTUFBd0I7UUFBM0MsWUFDRSxpQkFBTyxTQUNSO1FBRmtCLFlBQU0sR0FBTixNQUFNLENBQWtCOztJQUUzQyxDQUFDOzs7O0lBRU0sbUNBQWdCOzs7SUFBdkI7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsZ0hBSVA7aUJBQ0o7Ozs7Z0JBVFEsZ0JBQWdCOzs7d0JBV3RCLEtBQUs7O0lBU1IsZUFBQztDQUFBLEFBbEJELENBUThCLFlBQVksR0FVekM7U0FWWSxRQUFROzs7SUFDbkIseUJBQ1c7O0lBQ0MsMEJBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEJhc2VSZW5kZXJlciB9IGZyb20gJy4uL2Jhc2UtcmVuZGVyZXIvQmFzZVJlbmRlcmVyJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlLWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1jZWxsXCI+XG4gICAgICAgICAgICA8bGFiZWw+e3sgZ2V0Rm9ybWF0dGVkRGF0ZSgpIH19PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZUNlbGwgZXh0ZW5kcyBCYXNlUmVuZGVyZXIge1xuICBASW5wdXQoKVxuICB2YWx1ZTogYW55O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGb3JtYXR0ZWREYXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzLmZvcm1hdERhdGUodGhpcy52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==