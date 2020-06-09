// NG2
import { Component, ElementRef, ViewChild, ViewContainerRef, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
// Vendor
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
// APP
import { BaseRenderer } from './../base-renderer/BaseRenderer';
import { ComponentUtils } from './../../../../utils/component-utils/ComponentUtils';
import * as i0 from "@angular/core";
import * as i1 from "./../../../../utils/component-utils/ComponentUtils";
import * as i2 from "@angular/common";
import * as i3 from "../date-cell/DateCell";
const _c0 = ["container"];
function TableCell_date_cell_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "date-cell", 5);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r1.value);
} }
function TableCell_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵlistener("click", function TableCell_a_4_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onClick($event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.value);
} }
function TableCell_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.value);
} }
export class TableCell {
    constructor(element, componentUtils) {
        this.element = element;
        this.componentUtils = componentUtils;
        this.value = '';
        this.element = element;
        this.componentUtils = componentUtils;
    }
    ngOnInit() {
        this.column._type = this.column.type || 'text';
        if (this.column.renderer) {
            if (this.column.renderer.prototype instanceof BaseRenderer) {
                this.column._type = 'custom';
                const componentRef = this.componentUtils.append(this.column.renderer, this.container);
                componentRef.instance.meta = this.column;
                componentRef.instance.data = this.row;
                componentRef.instance.value = this.form && this.hasEditor ? this.form.value[this.column.name] : this.row[this.column.name];
                // TODO - save ref to this and update in the valueChanges below!!
            }
            else {
                // TODO - wtf to do here?
                this.value = this.column.renderer(this.row);
            }
        }
        else {
            this.value = this.form && this.hasEditor ? this.form.value[this.column.name] : this.row[this.column.name];
        }
        if (this.form && this.hasEditor) {
            this.valueChangeSubscription = this.form.valueChanges
                .pipe(debounceTime(300), distinctUntilChanged())
                .subscribe((value) => {
                this.value = value[this.column.name];
            });
        }
    }
    ngOnDestroy() {
        if (this.valueChangeSubscription) {
            this.valueChangeSubscription.unsubscribe();
        }
    }
    onClick(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (this.column.onClick) {
            this.column.onClick(this.row);
        }
    }
}
TableCell.ɵfac = function TableCell_Factory(t) { return new (t || TableCell)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ComponentUtils)); };
TableCell.ɵcmp = i0.ɵɵdefineComponent({ type: TableCell, selectors: [["novo-table-cell"]], viewQuery: function TableCell_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
    } }, inputs: { column: "column", row: "row", form: "form", hasEditor: "hasEditor" }, decls: 6, vars: 3, consts: [[3, "ngSwitch"], ["container", ""], [3, "value", 4, "ngSwitchCase"], [3, "click", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "value"], [3, "click"]], template: function TableCell_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "span", null, 1);
        i0.ɵɵtemplate(3, TableCell_date_cell_3_Template, 1, 1, "date-cell", 2);
        i0.ɵɵtemplate(4, TableCell_a_4_Template, 2, 1, "a", 3);
        i0.ɵɵtemplate(5, TableCell_span_5_Template, 2, 1, "span", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.column._type);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngSwitchCase", "date");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "link");
    } }, directives: [i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i3.DateCell], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableCell, [{
        type: Component,
        args: [{
                selector: 'novo-table-cell',
                template: `
    <div [ngSwitch]="column._type">
      <span #container></span>
      <date-cell *ngSwitchCase="'date'" [value]="value"></date-cell>
      <a *ngSwitchCase="'link'" (click)="onClick($event)">{{ value }}</a> <span *ngSwitchDefault>{{ value }}</span>
    </div>
  `,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.ComponentUtils }]; }, { container: [{
            type: ViewChild,
            args: ['container', { read: ViewContainerRef, static: true }]
        }], column: [{
            type: Input
        }], row: [{
            type: Input
        }], form: [{
            type: Input
        }], hasEditor: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGVDZWxsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RhYmxlL2V4dHJhcy90YWJsZS1jZWxsL1RhYmxlQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFVLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsU0FBUztBQUNULE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxNQUFNO0FBQ04sT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7OztJQU85RSwrQkFBOEQ7OztJQUE1QixvQ0FBZTs7OztJQUNqRCw0QkFBb0Q7SUFBMUIsK0tBQXlCO0lBQUMsWUFBVztJQUFBLGlCQUFJOzs7SUFBZixlQUFXO0lBQVgsa0NBQVc7OztJQUFLLDRCQUF1QjtJQUFBLFlBQVc7SUFBQSxpQkFBTzs7O0lBQWxCLGVBQVc7SUFBWCxrQ0FBVzs7QUFJNUcsTUFBTSxPQUFPLFNBQVM7SUFnQnBCLFlBQW9CLE9BQW1CLEVBQVUsY0FBOEI7UUFBM0QsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUh4RSxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBSXJCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElB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RUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7O0dBTVQ7YUFDRjs7a0JBRUUsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRy9ELEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBPbkluaXQsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vIEFQUFxuaW1wb3J0IHsgQmFzZVJlbmRlcmVyIH0gZnJvbSAnLi8uLi9iYXNlLXJlbmRlcmVyL0Jhc2VSZW5kZXJlcic7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4vLi4vLi4vLi4vLi4vdXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10YWJsZS1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtuZ1N3aXRjaF09XCJjb2x1bW4uX3R5cGVcIj5cbiAgICAgIDxzcGFuICNjb250YWluZXI+PC9zcGFuPlxuICAgICAgPGRhdGUtY2VsbCAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUnXCIgW3ZhbHVlXT1cInZhbHVlXCI+PC9kYXRlLWNlbGw+XG4gICAgICA8YSAqbmdTd2l0Y2hDYXNlPVwiJ2xpbmsnXCIgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiPnt7IHZhbHVlIH19PC9hPiA8c3BhbiAqbmdTd2l0Y2hEZWZhdWx0Pnt7IHZhbHVlIH19PC9zcGFuPlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNlbGwgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBASW5wdXQoKVxuICBjb2x1bW46IGFueTtcbiAgQElucHV0KClcbiAgcm93OiBhbnk7XG4gIEBJbnB1dCgpXG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgQElucHV0KClcbiAgaGFzRWRpdG9yOiBib29sZWFuO1xuXG4gIHB1YmxpYyB2YWx1ZTogYW55ID0gJyc7XG4gIHByaXZhdGUgdmFsdWVDaGFuZ2VTdWJzY3JpcHRpb246IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmNvbXBvbmVudFV0aWxzID0gY29tcG9uZW50VXRpbHM7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvbHVtbi5fdHlwZSA9IHRoaXMuY29sdW1uLnR5cGUgfHwgJ3RleHQnO1xuICAgIGlmICh0aGlzLmNvbHVtbi5yZW5kZXJlcikge1xuICAgICAgaWYgKHRoaXMuY29sdW1uLnJlbmRlcmVyLnByb3RvdHlwZSBpbnN0YW5jZW9mIEJhc2VSZW5kZXJlcikge1xuICAgICAgICB0aGlzLmNvbHVtbi5fdHlwZSA9ICdjdXN0b20nO1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZCh0aGlzLmNvbHVtbi5yZW5kZXJlciwgdGhpcy5jb250YWluZXIpIGFzIGFueTtcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLm1ldGEgPSB0aGlzLmNvbHVtbjtcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmRhdGEgPSB0aGlzLnJvdztcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlLnZhbHVlID0gdGhpcy5mb3JtICYmIHRoaXMuaGFzRWRpdG9yID8gdGhpcy5mb3JtLnZhbHVlW3RoaXMuY29sdW1uLm5hbWVdIDogdGhpcy5yb3dbdGhpcy5jb2x1bW4ubmFtZV07XG4gICAgICAgIC8vIFRPRE8gLSBzYXZlIHJlZiB0byB0aGlzIGFuZCB1cGRhdGUgaW4gdGhlIHZhbHVlQ2hhbmdlcyBiZWxvdyEhXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUT0RPIC0gd3RmIHRvIGRvIGhlcmU/XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmNvbHVtbi5yZW5kZXJlcih0aGlzLnJvdyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmZvcm0gJiYgdGhpcy5oYXNFZGl0b3IgPyB0aGlzLmZvcm0udmFsdWVbdGhpcy5jb2x1bW4ubmFtZV0gOiB0aGlzLnJvd1t0aGlzLmNvbHVtbi5uYW1lXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mb3JtICYmIHRoaXMuaGFzRWRpdG9yKSB7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5mb3JtLnZhbHVlQ2hhbmdlc1xuICAgICAgICAucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoMzAwKSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlW3RoaXMuY29sdW1uLm5hbWVdO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy52YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sdW1uLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMuY29sdW1uLm9uQ2xpY2sodGhpcy5yb3cpO1xuICAgIH1cbiAgfVxufVxuIl19