// NG2
import { Component, Input } from '@angular/core';
// APP
import { BaseRenderer } from '../base-renderer/BaseRenderer';
import { NovoLabelService } from '../../../../services/novo-label-service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZUNlbGwuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL2RhdGUtY2VsbC9EYXRlQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsTUFBTTtBQUNOLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7O0FBVTNFLE1BQU0sT0FBTyxRQUFTLFNBQVEsWUFBWTtJQUd4QyxZQUFtQixNQUF3QjtRQUN6QyxLQUFLLEVBQUUsQ0FBQztRQURTLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBRTNDLENBQUM7SUFFTSxnQkFBZ0I7UUFDckIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Z0VBVFUsUUFBUTs2Q0FBUixRQUFRO1FBTGIsOEJBQ0k7UUFBQSw2QkFBTztRQUFBLFlBQXdCO1FBQUEsaUJBQVE7UUFDM0MsaUJBQU07O1FBREssZUFBd0I7UUFBeEIsNENBQXdCOztrREFJOUIsUUFBUTtjQVJwQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7OztLQUlQO2FBQ0o7bUVBR0MsS0FBSztrQkFESixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEJhc2VSZW5kZXJlciB9IGZyb20gJy4uL2Jhc2UtcmVuZGVyZXIvQmFzZVJlbmRlcmVyJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlLWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1jZWxsXCI+XG4gICAgICAgICAgICA8bGFiZWw+e3sgZ2V0Rm9ybWF0dGVkRGF0ZSgpIH19PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZUNlbGwgZXh0ZW5kcyBCYXNlUmVuZGVyZXIge1xuICBASW5wdXQoKVxuICB2YWx1ZTogYW55O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGb3JtYXR0ZWREYXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzLmZvcm1hdERhdGUodGhpcy52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==