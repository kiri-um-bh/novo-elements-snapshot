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
var _c0 = ["container"];
function TableCell_date_cell_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "date-cell", 5);
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r1.value);
} }
function TableCell_a_4_Template(rf, ctx) { if (rf & 1) {
    var _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵlistener("click", function TableCell_a_4_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r5); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onClick($event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.value);
} }
function TableCell_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.value);
} }
var TableCell = /** @class */ (function () {
    function TableCell(element, componentUtils) {
        this.element = element;
        this.componentUtils = componentUtils;
        this.value = '';
        this.element = element;
        this.componentUtils = componentUtils;
    }
    TableCell.prototype.ngOnInit = function () {
        var _this = this;
        this.column._type = this.column.type || 'text';
        if (this.column.renderer) {
            if (this.column.renderer.prototype instanceof BaseRenderer) {
                this.column._type = 'custom';
                var componentRef = this.componentUtils.append(this.column.renderer, this.container);
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
                .subscribe(function (value) {
                _this.value = value[_this.column.name];
            });
        }
    };
    TableCell.prototype.ngOnDestroy = function () {
        if (this.valueChangeSubscription) {
            this.valueChangeSubscription.unsubscribe();
        }
    };
    TableCell.prototype.onClick = function (event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (this.column.onClick) {
            this.column.onClick(this.row);
        }
    };
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
    return TableCell;
}());
export { TableCell };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableCell, [{
        type: Component,
        args: [{
                selector: 'novo-table-cell',
                template: "\n    <div [ngSwitch]=\"column._type\">\n      <span #container></span>\n      <date-cell *ngSwitchCase=\"'date'\" [value]=\"value\"></date-cell>\n      <a *ngSwitchCase=\"'link'\" (click)=\"onClick($event)\">{{ value }}</a> <span *ngSwitchDefault>{{ value }}</span>\n    </div>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGVDZWxsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RhYmxlL2V4dHJhcy90YWJsZS1jZWxsL1RhYmxlQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFVLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsU0FBUztBQUNULE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxNQUFNO0FBQ04sT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7OztJQU85RSwrQkFBOEQ7OztJQUE1QixvQ0FBZTs7OztJQUNqRCw0QkFBb0Q7SUFBMUIsNktBQXlCO0lBQUMsWUFBVztJQUFBLGlCQUFJOzs7SUFBZixlQUFXO0lBQVgsa0NBQVc7OztJQUFLLDRCQUF1QjtJQUFBLFlBQVc7SUFBQSxpQkFBTzs7O0lBQWxCLGVBQVc7SUFBWCxrQ0FBVzs7QUFONUc7SUEwQkUsbUJBQW9CLE9BQW1CLEVBQVUsY0FBOEI7UUFBM0QsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUh4RSxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBSXJCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQUEsaUJBNEJDO1FBM0JDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFB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O2tEQUFULFNBQVM7Y0FWckIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSw0UkFNVDthQUNGOztrQkFFRSxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFHL0QsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLy8gQVBQXG5pbXBvcnQgeyBCYXNlUmVuZGVyZXIgfSBmcm9tICcuLy4uL2Jhc2UtcmVuZGVyZXIvQmFzZVJlbmRlcmVyJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRhYmxlLWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW25nU3dpdGNoXT1cImNvbHVtbi5fdHlwZVwiPlxuICAgICAgPHNwYW4gI2NvbnRhaW5lcj48L3NwYW4+XG4gICAgICA8ZGF0ZS1jZWxsICpuZ1N3aXRjaENhc2U9XCInZGF0ZSdcIiBbdmFsdWVdPVwidmFsdWVcIj48L2RhdGUtY2VsbD5cbiAgICAgIDxhICpuZ1N3aXRjaENhc2U9XCInbGluaydcIiAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCI+e3sgdmFsdWUgfX08L2E+IDxzcGFuICpuZ1N3aXRjaERlZmF1bHQ+e3sgdmFsdWUgfX08L3NwYW4+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ2VsbCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBJbnB1dCgpXG4gIGNvbHVtbjogYW55O1xuICBASW5wdXQoKVxuICByb3c6IGFueTtcbiAgQElucHV0KClcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBASW5wdXQoKVxuICBoYXNFZGl0b3I6IGJvb2xlYW47XG5cbiAgcHVibGljIHZhbHVlOiBhbnkgPSAnJztcbiAgcHJpdmF0ZSB2YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY29tcG9uZW50VXRpbHMgPSBjb21wb25lbnRVdGlscztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29sdW1uLl90eXBlID0gdGhpcy5jb2x1bW4udHlwZSB8fCAndGV4dCc7XG4gICAgaWYgKHRoaXMuY29sdW1uLnJlbmRlcmVyKSB7XG4gICAgICBpZiAodGhpcy5jb2x1bW4ucmVuZGVyZXIucHJvdG90eXBlIGluc3RhbmNlb2YgQmFzZVJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuY29sdW1uLl90eXBlID0gJ2N1c3RvbSc7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50VXRpbHMuYXBwZW5kKHRoaXMuY29sdW1uLnJlbmRlcmVyLCB0aGlzLmNvbnRhaW5lcikgYXMgYW55O1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UubWV0YSA9IHRoaXMuY29sdW1uO1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuZGF0YSA9IHRoaXMucm93O1xuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UudmFsdWUgPSB0aGlzLmZvcm0gJiYgdGhpcy5oYXNFZGl0b3IgPyB0aGlzLmZvcm0udmFsdWVbdGhpcy5jb2x1bW4ubmFtZV0gOiB0aGlzLnJvd1t0aGlzLmNvbHVtbi5uYW1lXTtcbiAgICAgICAgLy8gVE9ETyAtIHNhdmUgcmVmIHRvIHRoaXMgYW5kIHVwZGF0ZSBpbiB0aGUgdmFsdWVDaGFuZ2VzIGJlbG93ISFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRPRE8gLSB3dGYgdG8gZG8gaGVyZT9cbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuY29sdW1uLnJlbmRlcmVyKHRoaXMucm93KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9ybSAmJiB0aGlzLmhhc0VkaXRvciA/IHRoaXMuZm9ybS52YWx1ZVt0aGlzLmNvbHVtbi5uYW1lXSA6IHRoaXMucm93W3RoaXMuY29sdW1uLm5hbWVdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZvcm0gJiYgdGhpcy5oYXNFZGl0b3IpIHtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGRlYm91bmNlVGltZSgzMDApLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVbdGhpcy5jb2x1bW4ubmFtZV07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2x1bW4ub25DbGljaykge1xuICAgICAgdGhpcy5jb2x1bW4ub25DbGljayh0aGlzLnJvdyk7XG4gICAgfVxuICB9XG59XG4iXX0=