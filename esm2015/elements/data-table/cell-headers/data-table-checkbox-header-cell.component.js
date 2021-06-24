import { CdkColumnDef, CdkHeaderCell } from '@angular/cdk/table';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Renderer2 } from '@angular/core';
import { NovoDataTable } from '../data-table.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
import * as i2 from "../data-table.component";
export class NovoDataTableCheckboxHeaderCell extends CdkHeaderCell {
    constructor(columnDef, elementRef, renderer, dataTable, ref) {
        super(columnDef, elementRef);
        this.dataTable = dataTable;
        this.ref = ref;
        this.role = 'columnheader';
        this.checked = false;
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', `novo-checkbox-column-header-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, `novo-checkbox-column-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, 'novo-data-table-checkbox-header-cell');
        this.selectionSubscription = this.dataTable.state.selectionSource.subscribe(() => {
            this.checked = this.dataTable.allCurrentRowsSelected();
            this.ref.markForCheck();
        });
        this.paginationSubscription = this.dataTable.state.paginationSource.subscribe((event) => {
            if (event.isPageSizeChange) {
                this.checked = false;
                this.dataTable.selectRows(false);
            }
            else {
                this.checked = this.dataTable.allCurrentRowsSelected();
            }
            this.ref.markForCheck();
        });
        this.resetSubscription = this.dataTable.state.resetSource.subscribe(() => {
            this.checked = false;
            this.ref.markForCheck();
        });
    }
    ngOnDestroy() {
        if (this.selectionSubscription) {
            this.selectionSubscription.unsubscribe();
        }
        if (this.paginationSubscription) {
            this.paginationSubscription.unsubscribe();
        }
        if (this.resetSubscription) {
            this.resetSubscription.unsubscribe();
        }
    }
    onClick() {
        this.dataTable.selectRows(!this.checked);
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDataTableCheckboxHeaderCell, [{
        type: Component,
        args: [{
                selector: 'novo-data-table-checkbox-header-cell',
                template: `
    <div class="data-table-checkbox" (click)="onClick()">
      <input type="checkbox" [checked]="checked">
      <label>
        <i [class.bhi-checkbox-empty]="!checked"
          [class.bhi-checkbox-filled]="checked"></i>
      </label>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.CdkColumnDef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i2.NovoDataTable }, { type: i0.ChangeDetectorRef }]; }, { role: [{
            type: HostBinding,
            args: ['attr.role']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jaGVja2JveC1oZWFkZXItY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1jaGVja2JveC1oZWFkZXItY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJJLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQWdCeEQsTUFBTSxPQUFPLCtCQUFtQyxTQUFRLGFBQWE7SUFTbkUsWUFDRSxTQUF1QixFQUN2QixVQUFzQixFQUN0QixRQUFtQixFQUNYLFNBQTJCLEVBQzNCLEdBQXNCO1FBRTlCLEtBQUssQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFIckIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFaekIsU0FBSSxHQUFHLGNBQWMsQ0FBQztRQUV0QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBYTlCLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSwrQkFBK0IsU0FBUyxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztRQUN2SSxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsd0JBQXdCLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7UUFDdEcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHNDQUFzQyxDQUFDLENBQUM7UUFFcEYsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQy9FLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBb0MsRUFBRSxFQUFFO1lBQ3JILElBQUksS0FBSyxDQUFDLGdCQUFnQixFQUFFO2dCQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLENBQUM7YUFDeEQ7WUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDMUM7UUFDRCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDM0M7UUFDRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRU0sT0FBTztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7OzhHQXREVSwrQkFBK0I7b0VBQS9CLCtCQUErQjs7O1FBVnhDLDhCQUNFO1FBRCtCLHlHQUFTLGFBQVMsSUFBQztRQUNsRCwyQkFDQTtRQUFBLDZCQUNFO1FBQUEsb0JBQzRDO1FBQzlDLGlCQUFRO1FBQ1YsaUJBQU07O1FBTG1CLGVBQW1CO1FBQW5CLHFDQUFtQjtRQUVyQyxlQUFxQztRQUFyQyxrREFBcUMsb0NBQUE7O2tEQU9uQywrQkFBK0I7Y0FiM0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQ0FBc0M7Z0JBQ2hELFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs0S0FHUSxJQUFJO2tCQURWLFdBQVc7bUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0NvbHVtbkRlZiwgQ2RrSGVhZGVyQ2VsbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIE9uRGVzdHJveSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGUgfSBmcm9tICcuLi9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRhLXRhYmxlLWNoZWNrYm94LWhlYWRlci1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZGF0YS10YWJsZS1jaGVja2JveFwiIChjbGljayk9XCJvbkNsaWNrKClcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbY2hlY2tlZF09XCJjaGVja2VkXCI+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIDxpIFtjbGFzcy5iaGktY2hlY2tib3gtZW1wdHldPVwiIWNoZWNrZWRcIlxuICAgICAgICAgIFtjbGFzcy5iaGktY2hlY2tib3gtZmlsbGVkXT1cImNoZWNrZWRcIj48L2k+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZUNoZWNrYm94SGVhZGVyQ2VsbDxUPiBleHRlbmRzIENka0hlYWRlckNlbGwgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ2NvbHVtbmhlYWRlcic7XG5cbiAgcHVibGljIGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzZWxlY3Rpb25TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBwYWdpbmF0aW9uU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcmVzZXRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb2x1bW5EZWY6IENka0NvbHVtbkRlZixcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBkYXRhVGFibGU6IE5vdm9EYXRhVGFibGU8VD4sXG4gICAgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWF1dG9tYXRpb24taWQnLCBgbm92by1jaGVja2JveC1jb2x1bW4taGVhZGVyLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG5vdm8tY2hlY2tib3gtY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tZGF0YS10YWJsZS1jaGVja2JveC1oZWFkZXItY2VsbCcpO1xuXG4gICAgdGhpcy5zZWxlY3Rpb25TdWJzY3JpcHRpb24gPSB0aGlzLmRhdGFUYWJsZS5zdGF0ZS5zZWxlY3Rpb25Tb3VyY2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMuZGF0YVRhYmxlLmFsbEN1cnJlbnRSb3dzU2VsZWN0ZWQoKTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIHRoaXMucGFnaW5hdGlvblN1YnNjcmlwdGlvbiA9IHRoaXMuZGF0YVRhYmxlLnN0YXRlLnBhZ2luYXRpb25Tb3VyY2Uuc3Vic2NyaWJlKChldmVudDogeyBpc1BhZ2VTaXplQ2hhbmdlOiBib29sZWFuIH0pID0+IHtcbiAgICAgIGlmIChldmVudC5pc1BhZ2VTaXplQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRhdGFUYWJsZS5zZWxlY3RSb3dzKGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMuZGF0YVRhYmxlLmFsbEN1cnJlbnRSb3dzU2VsZWN0ZWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIHRoaXMucmVzZXRTdWJzY3JpcHRpb24gPSB0aGlzLmRhdGFUYWJsZS5zdGF0ZS5yZXNldFNvdXJjZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb25TdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2luYXRpb25TdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucGFnaW5hdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZXNldFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5yZXNldFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YVRhYmxlLnNlbGVjdFJvd3MoIXRoaXMuY2hlY2tlZCk7XG4gIH1cbn1cbiJdfQ==