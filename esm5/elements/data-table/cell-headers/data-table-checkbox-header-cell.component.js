import { __extends } from "tslib";
import { CdkColumnDef, CdkHeaderCell } from '@angular/cdk/table';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Renderer2 } from '@angular/core';
import { NovoDataTable } from '../data-table.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
import * as i2 from "../data-table.component";
var NovoDataTableCheckboxHeaderCell = /** @class */ (function (_super) {
    __extends(NovoDataTableCheckboxHeaderCell, _super);
    function NovoDataTableCheckboxHeaderCell(columnDef, elementRef, renderer, dataTable, ref) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        _this.dataTable = dataTable;
        _this.ref = ref;
        _this.role = 'columnheader';
        _this.checked = false;
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', "novo-checkbox-column-header-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, "novo-checkbox-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, 'novo-data-table-checkbox-header-cell');
        _this.selectionSubscription = _this.dataTable.state.selectionSource.subscribe(function () {
            _this.checked = _this.dataTable.allCurrentRowsSelected();
            _this.ref.markForCheck();
        });
        _this.paginationSubscription = _this.dataTable.state.paginationSource.subscribe(function (event) {
            if (event.isPageSizeChange) {
                _this.checked = false;
                _this.dataTable.selectRows(false);
            }
            else {
                _this.checked = _this.dataTable.allCurrentRowsSelected();
            }
            _this.ref.markForCheck();
        });
        _this.resetSubscription = _this.dataTable.state.resetSource.subscribe(function () {
            _this.checked = false;
            _this.ref.markForCheck();
        });
        return _this;
    }
    NovoDataTableCheckboxHeaderCell.prototype.ngOnDestroy = function () {
        if (this.selectionSubscription) {
            this.selectionSubscription.unsubscribe();
        }
        if (this.paginationSubscription) {
            this.paginationSubscription.unsubscribe();
        }
        if (this.resetSubscription) {
            this.resetSubscription.unsubscribe();
        }
    };
    NovoDataTableCheckboxHeaderCell.prototype.onClick = function () {
        this.dataTable.selectRows(!this.checked);
    };
    NovoDataTableCheckboxHeaderCell.ɵfac = function NovoDataTableCheckboxHeaderCell_Factory(t) { return new (t || NovoDataTableCheckboxHeaderCell)(i0.ɵɵdirectiveInject(i1.CdkColumnDef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.NovoDataTable), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    NovoDataTableCheckboxHeaderCell.ɵcmp = i0.ɵɵdefineComponent({ type: NovoDataTableCheckboxHeaderCell, selectors: [["novo-data-table-checkbox-header-cell"]], hostVars: 1, hostBindings: function NovoDataTableCheckboxHeaderCell_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("role", ctx.role);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 5, consts: [[1, "data-table-checkbox", 3, "click"], ["type", "checkbox", 3, "checked"]], template: function NovoDataTableCheckboxHeaderCell_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function NovoDataTableCheckboxHeaderCell_Template_div_click_0_listener() { return ctx.onClick(); });
            i0.ɵɵelement(1, "input", 1);
            i0.ɵɵelementStart(2, "label");
            i0.ɵɵelement(3, "i");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("checked", ctx.checked);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("bhi-checkbox-empty", !ctx.checked)("bhi-checkbox-filled", ctx.checked);
        } }, encapsulation: 2, changeDetection: 0 });
    return NovoDataTableCheckboxHeaderCell;
}(CdkHeaderCell));
export { NovoDataTableCheckboxHeaderCell };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDataTableCheckboxHeaderCell, [{
        type: Component,
        args: [{
                selector: 'novo-data-table-checkbox-header-cell',
                template: "\n    <div class=\"data-table-checkbox\" (click)=\"onClick()\">\n      <input type=\"checkbox\" [checked]=\"checked\">\n      <label>\n        <i [class.bhi-checkbox-empty]=\"!checked\"\n          [class.bhi-checkbox-filled]=\"checked\"></i>\n      </label>\n    </div>\n  ",
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.CdkColumnDef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i2.NovoDataTable }, { type: i0.ChangeDetectorRef }]; }, { role: [{
            type: HostBinding,
            args: ['attr.role']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jaGVja2JveC1oZWFkZXItY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1jaGVja2JveC1oZWFkZXItY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVySSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFHeEQ7SUFhd0QsbURBQWE7SUFTbkUseUNBQ0UsU0FBdUIsRUFDdkIsVUFBc0IsRUFDdEIsUUFBbUIsRUFDWCxTQUEyQixFQUMzQixHQUFzQjtRQUxoQyxZQU9FLGtCQUFNLFNBQVMsRUFBRSxVQUFVLENBQUMsU0FzQjdCO1FBekJTLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFNBQUcsR0FBSCxHQUFHLENBQW1CO1FBWnpCLFVBQUksR0FBRyxjQUFjLENBQUM7UUFFdEIsYUFBTyxHQUFZLEtBQUssQ0FBQztRQWE5QixRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsaUNBQStCLFNBQVMsQ0FBQyxvQkFBc0IsQ0FBQyxDQUFDO1FBQ3ZJLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSwwQkFBd0IsU0FBUyxDQUFDLG9CQUFzQixDQUFDLENBQUM7UUFDdEcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHNDQUFzQyxDQUFDLENBQUM7UUFFcEYsS0FBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7WUFDMUUsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDdkQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILEtBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFvQztZQUNqSCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDMUIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQ3hEO1lBQ0QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO1lBQ2xFLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7O0lBQ0wsQ0FBQztJQUVNLHFEQUFXLEdBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDL0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUVNLGlEQUFPLEdBQWQ7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO2tIQXREVSwrQkFBK0I7d0VBQS9CLCtCQUErQjs7O1lBVnhDLDhCQUNFO1lBRCtCLHlHQUFTLGFBQVMsSUFBQztZQUNsRCwyQkFDQTtZQUFBLDZCQUNFO1lBQUEsb0JBQzRDO1lBQzlDLGlCQUFRO1lBQ1YsaUJBQU07O1lBTG1CLGVBQW1CO1lBQW5CLHFDQUFtQjtZQUVyQyxlQUFxQztZQUFyQyxrREFBcUMsb0NBQUE7OzBDQVpoRDtDQTBFQyxBQXBFRCxDQWF3RCxhQUFhLEdBdURwRTtTQXZEWSwrQkFBK0I7a0RBQS9CLCtCQUErQjtjQWIzQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztnQkFDaEQsUUFBUSxFQUFFLG1SQVFUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFFRSxXQUFXO21CQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtDb2x1bW5EZWYsIENka0hlYWRlckNlbGwgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlIH0gZnJvbSAnLi4vZGF0YS10YWJsZS5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0YS10YWJsZS1jaGVja2JveC1oZWFkZXItY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtY2hlY2tib3hcIiAoY2xpY2spPVwib25DbGljaygpXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW2NoZWNrZWRdPVwiY2hlY2tlZFwiPlxuICAgICAgPGxhYmVsPlxuICAgICAgICA8aSBbY2xhc3MuYmhpLWNoZWNrYm94LWVtcHR5XT1cIiFjaGVja2VkXCJcbiAgICAgICAgICBbY2xhc3MuYmhpLWNoZWNrYm94LWZpbGxlZF09XCJjaGVja2VkXCI+PC9pPlxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVDaGVja2JveEhlYWRlckNlbGw8VD4gZXh0ZW5kcyBDZGtIZWFkZXJDZWxsIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdjb2x1bW5oZWFkZXInO1xuXG4gIHB1YmxpYyBjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgc2VsZWN0aW9uU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcGFnaW5hdGlvblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHJlc2V0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZGF0YVRhYmxlOiBOb3ZvRGF0YVRhYmxlPFQ+LFxuICAgIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1hdXRvbWF0aW9uLWlkJywgYG5vdm8tY2hlY2tib3gtY29sdW1uLWhlYWRlci0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBub3ZvLWNoZWNrYm94LWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLWRhdGEtdGFibGUtY2hlY2tib3gtaGVhZGVyLWNlbGwnKTtcblxuICAgIHRoaXMuc2VsZWN0aW9uU3Vic2NyaXB0aW9uID0gdGhpcy5kYXRhVGFibGUuc3RhdGUuc2VsZWN0aW9uU291cmNlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmRhdGFUYWJsZS5hbGxDdXJyZW50Um93c1NlbGVjdGVkKCk7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLnBhZ2luYXRpb25TdWJzY3JpcHRpb24gPSB0aGlzLmRhdGFUYWJsZS5zdGF0ZS5wYWdpbmF0aW9uU291cmNlLnN1YnNjcmliZSgoZXZlbnQ6IHsgaXNQYWdlU2l6ZUNoYW5nZTogYm9vbGVhbiB9KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuaXNQYWdlU2l6ZUNoYW5nZSkge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRhVGFibGUuc2VsZWN0Um93cyhmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmRhdGFUYWJsZS5hbGxDdXJyZW50Um93c1NlbGVjdGVkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlc2V0U3Vic2NyaXB0aW9uID0gdGhpcy5kYXRhVGFibGUuc3RhdGUucmVzZXRTb3VyY2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnBhZ2luYXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVzZXRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucmVzZXRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFUYWJsZS5zZWxlY3RSb3dzKCF0aGlzLmNoZWNrZWQpO1xuICB9XG59XG4iXX0=