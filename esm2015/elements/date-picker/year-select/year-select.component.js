// NG2
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { getYear } from 'date-fns';
import { NovoLabelService } from '../../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/novo-label-service";
import * as i2 from "@angular/common";
function NovoYearSelectElement_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("click", function NovoYearSelectElement_div_0_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r3); const year_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onSelect($event, year_r1); });
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const year_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("selected", ctx_r0._isSelected(year_r1));
    i0.ɵɵattribute("data-automation-id", year_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(year_r1);
} }
export class NovoYearSelectElement {
    constructor(labels) {
        this.labels = labels;
        this.activeDate = new Date();
        this.selected = [];
        // Select callback for output
        this.select = new EventEmitter(false);
        // List of all years (generated in ngOnInit)
        this.years = [];
    }
    ngOnInit() {
        // Determine the year array
        const now = new Date();
        const start = this.minYear ? Number(this.minYear) : now.getFullYear() - 100;
        const end = this.maxYear ? Number(this.maxYear) : now.getFullYear() + 10;
        const years = [];
        for (let i = start; i <= end; i++) {
            years.push(i);
        }
        this.years = years.reverse();
    }
    onSelect(event, year) {
        // Helpers.swallowEvent(event);
        this.select.next({ event, year });
    }
    _isActive(year) {
        return this.activeDate && year === getYear(this.activeDate);
    }
    _isSelected(year) {
        return this.selected && year === getYear(this.selected[0]);
    }
}
NovoYearSelectElement.ɵfac = function NovoYearSelectElement_Factory(t) { return new (t || NovoYearSelectElement)(i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
NovoYearSelectElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoYearSelectElement, selectors: [["novo-year-select"]], inputs: { minYear: "minYear", maxYear: "maxYear", activeDate: "activeDate", selected: "selected" }, outputs: { select: "select" }, decls: 1, vars: 1, consts: [[3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "year"]], template: function NovoYearSelectElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoYearSelectElement_div_0_Template, 3, 4, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.years);
    } }, directives: [i2.NgForOf], styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}[_nghost-%COMP%]{display:grid;flex:1;grid-template-columns:1fr 1fr 1fr 1fr;max-height:320px;overflow-y:scroll}[_nghost-%COMP%]   .year[_ngcontent-%COMP%]{border-radius:.4rem;cursor:pointer;padding:1rem}[_nghost-%COMP%]   .year.selected[_ngcontent-%COMP%], [_nghost-%COMP%]   .year[_ngcontent-%COMP%]:hover{background-color:#4a89dc;color:#fff}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoYearSelectElement, [{
        type: Component,
        args: [{
                selector: 'novo-year-select',
                templateUrl: './year-select.component.html',
                styleUrls: ['./year-select.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.NovoLabelService }]; }, { minYear: [{
            type: Input
        }], maxYear: [{
            type: Input
        }], activeDate: [{
            type: Input
        }], selected: [{
            type: Input
        }], select: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0ZS1waWNrZXIveWVhci1zZWxlY3QveWVhci1zZWxlY3QuY29tcG9uZW50LnRzIiwiZWxlbWVudHMvZGF0ZS1waWNrZXIveWVhci1zZWxlY3QveWVhci1zZWxlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNuQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7O0lDSHhFLDhCQUNFO0lBRDhCLHdPQUFnQztJQUM5RCw4QkFBd0Y7SUFBQSxZQUFVO0lBQUEsaUJBQU07SUFDMUcsaUJBQU07Ozs7SUFEYyxlQUFvQztJQUFwQyx1REFBb0M7SUFBQyw2Q0FBZ0M7SUFBQyxlQUFVO0lBQVYsNkJBQVU7O0FEV3BHLE1BQU0sT0FBTyxxQkFBcUI7SUFpQmhDLFlBQW1CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBVjNDLGVBQVUsR0FBYSxJQUFJLElBQUksRUFBRSxDQUFDO1FBRWxDLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFDMUIsNkJBQTZCO1FBRTdCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEQsNENBQTRDO1FBQzVDLFVBQUssR0FBZSxFQUFFLENBQUM7SUFFdUIsQ0FBQztJQUUvQyxRQUFRO1FBQ04sMkJBQTJCO1FBQzNCLE1BQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUM1RSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ3pFLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDZjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBWSxFQUFFLElBQVk7UUFDakMsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFNBQVMsQ0FBQyxJQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQVk7UUFDdEIsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7OzBGQTFDVSxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ1psQyxzRUFDRTs7UUFERyxtQ0FBMEI7O2tERFlsQixxQkFBcUI7Y0FOakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2dCQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDttRUFHQyxPQUFPO2tCQUROLEtBQUs7WUFHTixPQUFPO2tCQUROLEtBQUs7WUFJTixVQUFVO2tCQURULEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUs7WUFJTixNQUFNO2tCQURMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXRZZWFyIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlTGlrZSB9IGZyb20gJy4uL2RhdGUtcGlja2VyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by15ZWFyLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi95ZWFyLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3llYXItc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvWWVhclNlbGVjdEVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBtaW5ZZWFyOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1heFllYXI6IHN0cmluZyB8IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBhY3RpdmVEYXRlOiBEYXRlTGlrZSA9IG5ldyBEYXRlKCk7XG4gIEBJbnB1dCgpXG4gIHNlbGVjdGVkOiBEYXRlTGlrZVtdID0gW107XG4gIC8vIFNlbGVjdCBjYWxsYmFjayBmb3Igb3V0cHV0XG4gIEBPdXRwdXQoKVxuICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcihmYWxzZSk7XG5cbiAgLy8gTGlzdCBvZiBhbGwgeWVhcnMgKGdlbmVyYXRlZCBpbiBuZ09uSW5pdClcbiAgeWVhcnM6IEFycmF5PGFueT4gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIERldGVybWluZSB0aGUgeWVhciBhcnJheVxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLm1pblllYXIgPyBOdW1iZXIodGhpcy5taW5ZZWFyKSA6IG5vdy5nZXRGdWxsWWVhcigpIC0gMTAwO1xuICAgIGNvbnN0IGVuZCA9IHRoaXMubWF4WWVhciA/IE51bWJlcih0aGlzLm1heFllYXIpIDogbm93LmdldEZ1bGxZZWFyKCkgKyAxMDtcbiAgICBjb25zdCB5ZWFycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgeWVhcnMucHVzaChpKTtcbiAgICB9XG4gICAgdGhpcy55ZWFycyA9IHllYXJzLnJldmVyc2UoKTtcbiAgfVxuXG4gIG9uU2VsZWN0KGV2ZW50OiBFdmVudCwgeWVhcjogbnVtYmVyKSB7XG4gICAgLy8gSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuc2VsZWN0Lm5leHQoeyBldmVudCwgeWVhciB9KTtcbiAgfVxuXG4gIF9pc0FjdGl2ZSh5ZWFyOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVEYXRlICYmIHllYXIgPT09IGdldFllYXIodGhpcy5hY3RpdmVEYXRlKTtcbiAgfVxuXG4gIF9pc1NlbGVjdGVkKHllYXI6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkICYmIHllYXIgPT09IGdldFllYXIodGhpcy5zZWxlY3RlZFswXSk7XG4gIH1cbn1cbiIsIjxkaXYgKm5nRm9yPVwibGV0IHllYXIgb2YgeWVhcnNcIiAoY2xpY2spPVwib25TZWxlY3QoJGV2ZW50LCB5ZWFyKVwiPlxuICA8ZGl2IGNsYXNzPVwieWVhclwiIFtjbGFzcy5zZWxlY3RlZF09XCJfaXNTZWxlY3RlZCh5ZWFyKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJ5ZWFyXCI+e3sgeWVhciB9fTwvZGl2PlxuPC9kaXY+Il19