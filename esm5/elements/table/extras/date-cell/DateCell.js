/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZUNlbGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL2RhdGUtY2VsbC9EYXRlQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTNFO0lBUThCLG9DQUFZO0lBR3hDLGtCQUFtQixNQUF3QjtRQUEzQyxZQUNFLGlCQUFPLFNBQ1I7UUFGa0IsWUFBTSxHQUFOLE1BQU0sQ0FBa0I7O0lBRTNDLENBQUM7Ozs7SUFFTSxtQ0FBZ0I7OztJQUF2QjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxnSEFJUDtpQkFDSjs7OztnQkFUUSxnQkFBZ0I7Ozt3QkFXdEIsS0FBSzs7SUFTUixlQUFDO0NBQUEsQUFsQkQsQ0FROEIsWUFBWSxHQVV6QztTQVZZLFFBQVE7OztJQUNuQix5QkFDVzs7SUFDQywwQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgQmFzZVJlbmRlcmVyIH0gZnJvbSAnLi4vYmFzZS1yZW5kZXJlci9CYXNlUmVuZGVyZXInO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGUtY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLWNlbGxcIj5cbiAgICAgICAgICAgIDxsYWJlbD57eyBnZXRGb3JtYXR0ZWREYXRlKCkgfX08L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlQ2VsbCBleHRlbmRzIEJhc2VSZW5kZXJlciB7XG4gIEBJbnB1dCgpXG4gIHZhbHVlOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGdldEZvcm1hdHRlZERhdGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZSh0aGlzLnZhbHVlKTtcbiAgfVxufVxuIl19