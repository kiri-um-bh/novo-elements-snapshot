// NG2
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { getMonth } from 'date-fns';
import { NovoLabelService } from '../../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/novo-label-service";
import * as i2 from "@angular/common";
function NovoMonthSelectElement_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("click", function NovoMonthSelectElement_div_0_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r4); const i_r2 = ctx.index; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onSelect($event, i_r2); });
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("selected", ctx_r0._isSelected(i_r2));
    i0.ɵɵattribute("data-automation-id", month_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", month_r1, "");
} }
export class NovoMonthSelectElement {
    constructor(labels) {
        this.labels = labels;
        this.activeDate = new Date();
        this.selected = [];
        // Select callback for output
        this.select = new EventEmitter(false);
        // List of all months
        this.monthNames = this.labels.getMonths();
    }
    ngOnInit() { }
    onSelect(event, month) {
        // Helpers.swallowEvent(event);
        this.select.next({ event, month });
    }
    _isActive(month) {
        return this.activeDate && month === getMonth(this.activeDate);
    }
    _isSelected(month) {
        return this.selected && month === getMonth(this.selected[0]);
    }
}
NovoMonthSelectElement.ɵfac = function NovoMonthSelectElement_Factory(t) { return new (t || NovoMonthSelectElement)(i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
NovoMonthSelectElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoMonthSelectElement, selectors: [["novo-month-select"]], inputs: { activeDate: "activeDate", selected: "selected" }, outputs: { select: "select" }, decls: 1, vars: 1, consts: [[3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "month"]], template: function NovoMonthSelectElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoMonthSelectElement_div_0_Template, 3, 4, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.monthNames);
    } }, directives: [i2.NgForOf], styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}[_nghost-%COMP%]{display:grid;flex:1;grid-template-columns:1fr 1fr 1fr}[_nghost-%COMP%]   .month[_ngcontent-%COMP%]{border-radius:.4rem;cursor:pointer;padding:1rem}[_nghost-%COMP%]   .month.selected[_ngcontent-%COMP%], [_nghost-%COMP%]   .month[_ngcontent-%COMP%]:hover{background-color:#4a89dc;color:#fff}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoMonthSelectElement, [{
        type: Component,
        args: [{
                selector: 'novo-month-select',
                templateUrl: './month-select.component.html',
                styleUrls: ['./month-select.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.NovoLabelService }]; }, { activeDate: [{
            type: Input
        }], selected: [{
            type: Input
        }], select: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGUtcGlja2VyL21vbnRoLXNlbGVjdC9tb250aC1zZWxlY3QuY29tcG9uZW50LnRzIiwiZWxlbWVudHMvZGF0ZS1waWNrZXIvbW9udGgtc2VsZWN0L21vbnRoLXNlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7SUNIeEUsOEJBQ0U7SUFEbUQsK05BQTZCO0lBQ2hGLDhCQUNFO0lBQUEsWUFBVztJQUFBLGlCQUFNO0lBQ3JCLGlCQUFNOzs7OztJQUZlLGVBQWlDO0lBQWpDLG9EQUFpQztJQUFDLDhDQUFpQztJQUNwRixlQUFXO0lBQVgsd0NBQVc7O0FEVWYsTUFBTSxPQUFPLHNCQUFzQjtJQWFqQyxZQUFtQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQVgzQyxlQUFVLEdBQWEsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUVsQyxhQUFRLEdBQWUsRUFBRSxDQUFDO1FBRTFCLDZCQUE2QjtRQUU3QixXQUFNLEdBQXNCLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBELHFCQUFxQjtRQUNyQixlQUFVLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUVELENBQUM7SUFFL0MsUUFBUSxLQUFJLENBQUM7SUFFYixRQUFRLENBQUMsS0FBWSxFQUFFLEtBQWE7UUFDbEMsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQWE7UUFDdkIsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7OzRGQTVCVSxzQkFBc0I7MkRBQXRCLHNCQUFzQjtRQ1puQyx1RUFDRTs7UUFERyx3Q0FBK0M7O2tERFl2QyxzQkFBc0I7Y0FObEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2dCQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDttRUFHQyxVQUFVO2tCQURULEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUs7WUFLTixNQUFNO2tCQURMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZUxpa2UgfSBmcm9tICcuLi9kYXRlLXBpY2tlci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbW9udGgtc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vbnRoLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21vbnRoLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b01vbnRoU2VsZWN0RWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGFjdGl2ZURhdGU6IERhdGVMaWtlID0gbmV3IERhdGUoKTtcbiAgQElucHV0KClcbiAgc2VsZWN0ZWQ6IERhdGVMaWtlW10gPSBbXTtcblxuICAvLyBTZWxlY3QgY2FsbGJhY2sgZm9yIG91dHB1dFxuICBAT3V0cHV0KClcbiAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoZmFsc2UpO1xuXG4gIC8vIExpc3Qgb2YgYWxsIG1vbnRoc1xuICBtb250aE5hbWVzOiBzdHJpbmdbXSA9IHRoaXMubGFiZWxzLmdldE1vbnRocygpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIG9uU2VsZWN0KGV2ZW50OiBFdmVudCwgbW9udGg6IG51bWJlcikge1xuICAgIC8vIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLnNlbGVjdC5uZXh0KHsgZXZlbnQsIG1vbnRoIH0pO1xuICB9XG5cbiAgX2lzQWN0aXZlKG1vbnRoOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVEYXRlICYmIG1vbnRoID09PSBnZXRNb250aCh0aGlzLmFjdGl2ZURhdGUpO1xuICB9XG5cbiAgX2lzU2VsZWN0ZWQobW9udGg6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkICYmIG1vbnRoID09PSBnZXRNb250aCh0aGlzLnNlbGVjdGVkWzBdKTtcbiAgfVxufVxuIiwiPGRpdiAqbmdGb3I9XCJsZXQgbW9udGggb2YgbW9udGhOYW1lczsgbGV0IGkgPSBpbmRleFwiIChjbGljayk9XCJvblNlbGVjdCgkZXZlbnQsIGkpXCI+XG4gIDxkaXYgY2xhc3M9XCJtb250aFwiIFtjbGFzcy5zZWxlY3RlZF09XCJfaXNTZWxlY3RlZChpKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJtb250aFwiPlxuICAgIHt7IG1vbnRoIH19PC9kaXY+XG48L2Rpdj4iXX0=