// NG2
import { Component, Input } from '@angular/core';
import { NovoLabelService } from '../../../../services/novo-label-service';
// APP
import { BaseRenderer } from '../base-renderer/BaseRenderer';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/novo-label-service";
export class DateCell extends BaseRenderer {
    constructor(labels) {
        super();
        this.labels = labels;
    }
    getFormattedDate() {
        return this.labels.formatDate(this.value);
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateCell, [{
        type: Component,
        args: [{
                selector: 'date-cell',
                template: `
    <div class="date-cell">
      <label>{{ getFormattedDate() }}</label>
    </div>
  `,
            }]
    }], function () { return [{ type: i1.NovoLabelService }]; }, { value: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZUNlbGwuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJsZS9leHRyYXMvZGF0ZS1jZWxsL0RhdGVDZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRSxNQUFNO0FBQ04sT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7QUFVN0QsTUFBTSxPQUFPLFFBQVMsU0FBUSxZQUFZO0lBR3hDLFlBQW1CLE1BQXdCO1FBQ3pDLEtBQUssRUFBRSxDQUFDO1FBRFMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFFM0MsQ0FBQztJQUVNLGdCQUFnQjtRQUNyQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOztnRUFUVSxRQUFROzZDQUFSLFFBQVE7UUFMakIsOEJBQ0U7UUFBQSw2QkFBTztRQUFBLFlBQXdCO1FBQUEsaUJBQVE7UUFDekMsaUJBQU07O1FBREcsZUFBd0I7UUFBeEIsNENBQXdCOztrREFJeEIsUUFBUTtjQVJwQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7OztHQUlUO2FBQ0Y7bUVBR0MsS0FBSztrQkFESixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbi8vIEFQUFxuaW1wb3J0IHsgQmFzZVJlbmRlcmVyIH0gZnJvbSAnLi4vYmFzZS1yZW5kZXJlci9CYXNlUmVuZGVyZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlLWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJkYXRlLWNlbGxcIj5cbiAgICAgIDxsYWJlbD57eyBnZXRGb3JtYXR0ZWREYXRlKCkgfX08L2xhYmVsPlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlQ2VsbCBleHRlbmRzIEJhc2VSZW5kZXJlciB7XG4gIEBJbnB1dCgpXG4gIHZhbHVlOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGdldEZvcm1hdHRlZERhdGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZSh0aGlzLnZhbHVlKTtcbiAgfVxufVxuIl19