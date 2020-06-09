import { __extends } from "tslib";
// NG2
import { Component, Input } from '@angular/core';
// APP
import { BaseRenderer } from '../base-renderer/BaseRenderer';
import { NovoLabelService } from '../../../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/novo-label-service";
var DateCell = /** @class */ (function (_super) {
    __extends(DateCell, _super);
    function DateCell(labels) {
        var _this = _super.call(this) || this;
        _this.labels = labels;
        return _this;
    }
    DateCell.prototype.getFormattedDate = function () {
        return this.labels.formatDate(this.value);
    };
    DateCell.ɵfac = function DateCell_Factory(t) { return new (t || DateCell)(i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
    DateCell.ɵcmp = i0.ɵɵdefineComponent({ type: DateCell, selectors: [["date-cell"]], inputs: { value: "value" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [[1, "date-cell"]], template: function DateCell_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "label");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.getFormattedDate());
        } }, encapsulation: 2 });
    return DateCell;
}(BaseRenderer));
export { DateCell };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateCell, [{
        type: Component,
        args: [{
                selector: 'date-cell',
                template: "\n        <div class=\"date-cell\">\n            <label>{{ getFormattedDate() }}</label>\n        </div>\n    ",
            }]
    }], function () { return [{ type: i1.NovoLabelService }]; }, { value: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZUNlbGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL2RhdGUtY2VsbC9EYXRlQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE1BQU07QUFDTixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7OztBQUUzRTtJQVE4Qiw0QkFBWTtJQUd4QyxrQkFBbUIsTUFBd0I7UUFBM0MsWUFDRSxpQkFBTyxTQUNSO1FBRmtCLFlBQU0sR0FBTixNQUFNLENBQWtCOztJQUUzQyxDQUFDO0lBRU0sbUNBQWdCLEdBQXZCO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztvRUFUVSxRQUFRO2lEQUFSLFFBQVE7WUFMYiw4QkFDSTtZQUFBLDZCQUFPO1lBQUEsWUFBd0I7WUFBQSxpQkFBUTtZQUMzQyxpQkFBTTs7WUFESyxlQUF3QjtZQUF4Qiw0Q0FBd0I7O21CQVYzQztDQXdCQyxBQWxCRCxDQVE4QixZQUFZLEdBVXpDO1NBVlksUUFBUTtrREFBUixRQUFRO2NBUnBCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLGdIQUlQO2FBQ0o7O2tCQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgQmFzZVJlbmRlcmVyIH0gZnJvbSAnLi4vYmFzZS1yZW5kZXJlci9CYXNlUmVuZGVyZXInO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGUtY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLWNlbGxcIj5cbiAgICAgICAgICAgIDxsYWJlbD57eyBnZXRGb3JtYXR0ZWREYXRlKCkgfX08L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlQ2VsbCBleHRlbmRzIEJhc2VSZW5kZXJlciB7XG4gIEBJbnB1dCgpXG4gIHZhbHVlOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGdldEZvcm1hdHRlZERhdGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZSh0aGlzLnZhbHVlKTtcbiAgfVxufVxuIl19