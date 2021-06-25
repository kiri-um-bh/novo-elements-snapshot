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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGVDZWxsLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RhYmxlL2V4dHJhcy90YWJsZS1jZWxsL1RhYmxlQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFVLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsU0FBUztBQUNULE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxNQUFNO0FBQ04sT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7OztJQU85RSwrQkFBOEQ7OztJQUE1QixvQ0FBZTs7OztJQUNqRCw0QkFBb0Q7SUFBMUIsK0tBQXlCO0lBQUMsWUFBVztJQUFBLGlCQUFJOzs7SUFBZixlQUFXO0lBQVgsa0NBQVc7OztJQUFLLDRCQUF1QjtJQUFBLFlBQVc7SUFBQSxpQkFBTzs7O0lBQWxCLGVBQVc7SUFBWCxrQ0FBVzs7QUFJNUcsTUFBTSxPQUFPLFNBQVM7SUFnQnBCLFlBQW9CLE9BQW1CLEVBQVUsY0FBOEI7UUFBM0QsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUh4RSxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBSXJCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFB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O1FBQXRCLHFDQUFzQjs7a0RBSWxCLFNBQVM7Y0FWckIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7O0dBTVQ7YUFDRjswRkFHQyxTQUFTO2tCQURSLFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFJaEUsTUFBTTtrQkFETCxLQUFLO1lBR04sR0FBRztrQkFERixLQUFLO1lBR04sSUFBSTtrQkFESCxLQUFLO1lBR04sU0FBUztrQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiwgT25Jbml0LCBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBWZW5kb3JcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4vLyBBUFBcbmltcG9ydCB7IEJhc2VSZW5kZXJlciB9IGZyb20gJy4vLi4vYmFzZS1yZW5kZXJlci9CYXNlUmVuZGVyZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLy4uLy4uLy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdGFibGUtY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbbmdTd2l0Y2hdPVwiY29sdW1uLl90eXBlXCI+XG4gICAgICA8c3BhbiAjY29udGFpbmVyPjwvc3Bhbj5cbiAgICAgIDxkYXRlLWNlbGwgKm5nU3dpdGNoQ2FzZT1cIidkYXRlJ1wiIFt2YWx1ZV09XCJ2YWx1ZVwiPjwvZGF0ZS1jZWxsPlxuICAgICAgPGEgKm5nU3dpdGNoQ2FzZT1cIidsaW5rJ1wiIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIj57eyB2YWx1ZSB9fTwvYT4gPHNwYW4gKm5nU3dpdGNoRGVmYXVsdD57eyB2YWx1ZSB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDZWxsIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgQElucHV0KClcbiAgY29sdW1uOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHJvdzogYW55O1xuICBASW5wdXQoKVxuICBmb3JtOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpXG4gIGhhc0VkaXRvcjogYm9vbGVhbjtcblxuICBwdWJsaWMgdmFsdWU6IGFueSA9ICcnO1xuICBwcml2YXRlIHZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscykge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jb21wb25lbnRVdGlscyA9IGNvbXBvbmVudFV0aWxzO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb2x1bW4uX3R5cGUgPSB0aGlzLmNvbHVtbi50eXBlIHx8ICd0ZXh0JztcbiAgICBpZiAodGhpcy5jb2x1bW4ucmVuZGVyZXIpIHtcbiAgICAgIGlmICh0aGlzLmNvbHVtbi5yZW5kZXJlci5wcm90b3R5cGUgaW5zdGFuY2VvZiBCYXNlUmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5jb2x1bW4uX3R5cGUgPSAnY3VzdG9tJztcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmQodGhpcy5jb2x1bW4ucmVuZGVyZXIsIHRoaXMuY29udGFpbmVyKSBhcyBhbnk7XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5tZXRhID0gdGhpcy5jb2x1bW47XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5kYXRhID0gdGhpcy5yb3c7XG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS52YWx1ZSA9IHRoaXMuZm9ybSAmJiB0aGlzLmhhc0VkaXRvciA/IHRoaXMuZm9ybS52YWx1ZVt0aGlzLmNvbHVtbi5uYW1lXSA6IHRoaXMucm93W3RoaXMuY29sdW1uLm5hbWVdO1xuICAgICAgICAvLyBUT0RPIC0gc2F2ZSByZWYgdG8gdGhpcyBhbmQgdXBkYXRlIGluIHRoZSB2YWx1ZUNoYW5nZXMgYmVsb3chIVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVE9ETyAtIHd0ZiB0byBkbyBoZXJlP1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5jb2x1bW4ucmVuZGVyZXIodGhpcy5yb3cpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtICYmIHRoaXMuaGFzRWRpdG9yID8gdGhpcy5mb3JtLnZhbHVlW3RoaXMuY29sdW1uLm5hbWVdIDogdGhpcy5yb3dbdGhpcy5jb2x1bW4ubmFtZV07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZm9ybSAmJiB0aGlzLmhhc0VkaXRvcikge1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuZm9ybS52YWx1ZUNoYW5nZXNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZGVib3VuY2VUaW1lKDMwMCksXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVt0aGlzLmNvbHVtbi5uYW1lXTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbHVtbi5vbkNsaWNrKSB7XG4gICAgICB0aGlzLmNvbHVtbi5vbkNsaWNrKHRoaXMucm93KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==