// NG2
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, EventEmitter, Input, Output } from '@angular/core';
// APP
import { NovoLabelService } from '../../../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/novo-label-service";
import * as i2 from "../../../select/Select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
const _c0 = function (a0) { return { active: a0 }; };
function Pagination_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4);
    i0.ɵɵlistener("click", function Pagination_li_7_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r3); const p_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.selectPage(p_r1.num, $event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", ctx_r0.disablePageSelection);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, p_r1.active));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(p_r1.text);
} }
const _c1 = function (a0) { return { "disabled": a0 }; };
export class Pagination {
    constructor(labels) {
        this.labels = labels;
        this.itemsPerPage = 10;
        this.pageChange = new EventEmitter();
        this.itemsPerPageChange = new EventEmitter();
        this.onPageChange = new EventEmitter();
        this.maxPagesDisplayed = 5;
    }
    get disablePageSelection() {
        return this.pageSelectDisabled;
    }
    set disablePageSelection(val) {
        this.pageSelectDisabled = coerceBooleanProperty(val);
    }
    ngOnInit() {
        this.label = this.label || this.labels.itemsPerPage;
        this.rowOptions = this.rowOptions || this.getDefaultRowOptions();
    }
    ngOnChanges(changes) {
        this.page = this.page || 1;
        this.totalPages = this.calculateTotalPages();
        this.pages = this.getPages(this.page, this.totalPages);
    }
    getDefaultRowOptions() {
        return [{ value: 10, label: '10' }, { value: 25, label: '25' }, { value: 50, label: '50' }, { value: 100, label: '100' }];
    }
    onPageSizeChanged(event) {
        this.page = 1;
        this.itemsPerPage = event.selected;
        this.totalPages = this.calculateTotalPages();
        this.pages = this.getPages(this.page, this.totalPages);
        this.pageChange.emit(this.page);
        this.itemsPerPageChange.emit(this.itemsPerPage);
        this.onPageChange.emit({
            page: this.page,
            itemsPerPage: this.itemsPerPage,
        });
    }
    selectPage(page, event) {
        if (event) {
            event.preventDefault();
        }
        this.page = page;
        this.pages = this.getPages(this.page, this.totalPages);
        this.pageChange.emit(this.page);
        this.onPageChange.emit({
            page: this.page,
            itemsPerPage: this.itemsPerPage,
        });
    }
    noPrevious() {
        return this.page === 1;
    }
    noNext() {
        return this.page === this.totalPages;
    }
    // Create page object used in template
    makePage(num, text, isActive) {
        return { num, text, active: isActive, };
    }
    getPages(currentPage, totalPages) {
        const pages = [];
        // Default page limits
        let startPage = 1;
        let endPage = totalPages;
        const isMaxSized = this.maxPagesDisplayed < totalPages;
        // recompute if maxPagesDisplayed
        if (isMaxSized) {
            // Current page is displayed in the middle of the visible ones
            startPage = Math.max(currentPage - Math.floor(this.maxPagesDisplayed / 2), 1);
            endPage = startPage + this.maxPagesDisplayed - 1;
            // Adjust if limit is exceeded
            if (endPage > totalPages) {
                endPage = totalPages;
                startPage = endPage - this.maxPagesDisplayed + 1;
            }
        }
        // Add page number links
        for (let num = startPage; num <= endPage; num++) {
            const page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        return pages;
    }
    calculateTotalPages() {
        const totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    }
}
Pagination.ɵfac = function Pagination_Factory(t) { return new (t || Pagination)(i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
Pagination.ɵcmp = i0.ɵɵdefineComponent({ type: Pagination, selectors: [["novo-pagination"]], inputs: { page: "page", totalItems: "totalItems", itemsPerPage: "itemsPerPage", rowOptions: "rowOptions", label: "label", disablePageSelection: "disablePageSelection" }, outputs: { pageChange: "pageChange", itemsPerPageChange: "itemsPerPageChange", onPageChange: "onPageChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 11, consts: [[1, "rows"], ["data-automation-id", "pager-select", 3, "options", "placeholder", "ngModel", "ngModelChange", "onSelect"], [1, "spacer"], ["data-automation-id", "pager", 1, "pager"], [1, "page", 3, "ngClass", "click"], ["data-automation-id", "pager-previous", 1, "bhi-previous"], ["class", "page", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], ["data-automation-id", "pager-next", 1, "bhi-next"]], template: function Pagination_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h5", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "novo-select", 1);
        i0.ɵɵlistener("ngModelChange", function Pagination_Template_novo_select_ngModelChange_2_listener($event) { return ctx.itemsPerPage = $event; })("onSelect", function Pagination_Template_novo_select_onSelect_2_listener($event) { return ctx.onPageSizeChanged($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "span", 2);
        i0.ɵɵelementStart(4, "ul", 3);
        i0.ɵɵelementStart(5, "li", 4);
        i0.ɵɵlistener("click", function Pagination_Template_li_click_5_listener() { return ctx.selectPage(ctx.page - 1); });
        i0.ɵɵelement(6, "i", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, Pagination_li_7_Template, 2, 6, "li", 6);
        i0.ɵɵelementStart(8, "li", 4);
        i0.ɵɵlistener("click", function Pagination_Template_li_click_8_listener() { return ctx.selectPage(ctx.page + 1); });
        i0.ɵɵelement(9, "i", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("options", ctx.rowOptions)("placeholder", ctx.labels.select)("ngModel", ctx.itemsPerPage);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c1, ctx.noPrevious()));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.pages);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c1, ctx.noNext()));
    } }, directives: [i2.NovoSelectElement, i3.NgControlStatus, i3.NgModel, i4.NgClass, i4.NgForOf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Pagination, [{
        type: Component,
        args: [{
                selector: 'novo-pagination',
                template: `
        <h5 class="rows">{{label}}</h5>
        <novo-select [options]="rowOptions" [placeholder]="labels.select" [(ngModel)]="itemsPerPage" (onSelect)="onPageSizeChanged($event)" data-automation-id="pager-select"></novo-select>
        <span class="spacer"></span>
        <ul class="pager" data-automation-id="pager">
            <li class="page" (click)="selectPage(page-1)" [ngClass]="{'disabled': noPrevious()}"><i class="bhi-previous" data-automation-id="pager-previous"></i></li>
            <li class="page" [ngClass]="{active: p.active}" [class.disabled]="disablePageSelection" *ngFor="let p of pages" (click)="selectPage(p.num, $event)">{{p.text}}</li>
            <li class="page" (click)="selectPage(page+1)" [ngClass]="{'disabled': noNext()}"><i class="bhi-next" data-automation-id="pager-next"></i></li>
        </ul>
  `,
            }]
    }], function () { return [{ type: i1.NovoLabelService }]; }, { page: [{
            type: Input
        }], totalItems: [{
            type: Input
        }], itemsPerPage: [{
            type: Input
        }], rowOptions: [{
            type: Input
        }], label: [{
            type: Input
        }], disablePageSelection: [{
            type: Input
        }], pageChange: [{
            type: Output
        }], itemsPerPageChange: [{
            type: Output
        }], onPageChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJsZS9leHRyYXMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDekcsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7Ozs7SUFlL0QsNkJBQW9KO0lBQXBDLDJOQUFtQztJQUFDLFlBQVU7SUFBQSxpQkFBSzs7OztJQUFuSCx1REFBdUM7SUFBdEUsaUVBQThCO0lBQXFHLGVBQVU7SUFBViwrQkFBVTs7O0FBSzFLLE1BQU0sT0FBTyxVQUFVO0lBOEJyQixZQUFtQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQXhCM0MsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFhbEIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbEMsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBSXlCLENBQUM7SUFuQmhELElBQ0ksb0JBQW9CO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUFJLG9CQUFvQixDQUFDLEdBQVk7UUFDbkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7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eyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5pbnRlcmZhY2UgUGFnZSB7XG4gIG51bTogbnVtYmVyO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoNSBjbGFzcz1cInJvd3NcIj57e2xhYmVsfX08L2g1PlxuICAgICAgICA8bm92by1zZWxlY3QgW29wdGlvbnNdPVwicm93T3B0aW9uc1wiIFtwbGFjZWhvbGRlcl09XCJsYWJlbHMuc2VsZWN0XCIgWyhuZ01vZGVsKV09XCJpdGVtc1BlclBhZ2VcIiAob25TZWxlY3QpPVwib25QYWdlU2l6ZUNoYW5nZWQoJGV2ZW50KVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInBhZ2VyLXNlbGVjdFwiPjwvbm92by1zZWxlY3Q+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3BhY2VyXCI+PC9zcGFuPlxuICAgICAgICA8dWwgY2xhc3M9XCJwYWdlclwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInBhZ2VyXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlXCIgKGNsaWNrKT1cInNlbGVjdFBhZ2UocGFnZS0xKVwiIFtuZ0NsYXNzXT1cInsnZGlzYWJsZWQnOiBub1ByZXZpb3VzKCl9XCI+PGkgY2xhc3M9XCJiaGktcHJldmlvdXNcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlci1wcmV2aW91c1wiPjwvaT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZVwiIFtuZ0NsYXNzXT1cInthY3RpdmU6IHAuYWN0aXZlfVwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlUGFnZVNlbGVjdGlvblwiICpuZ0Zvcj1cImxldCBwIG9mIHBhZ2VzXCIgKGNsaWNrKT1cInNlbGVjdFBhZ2UocC5udW0sICRldmVudClcIj57e3AudGV4dH19PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VcIiAoY2xpY2spPVwic2VsZWN0UGFnZShwYWdlKzEpXCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6IG5vTmV4dCgpfVwiPjxpIGNsYXNzPVwiYmhpLW5leHRcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlci1uZXh0XCI+PC9pPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb24gaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIHBhZ2U6IG51bWJlcjtcbiAgQElucHV0KClcbiAgdG90YWxJdGVtczogbnVtYmVyO1xuICBASW5wdXQoKVxuICBpdGVtc1BlclBhZ2UgPSAxMDtcbiAgQElucHV0KClcbiAgcm93T3B0aW9ucztcbiAgQElucHV0KClcbiAgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVQYWdlU2VsZWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2VTZWxlY3REaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZVBhZ2VTZWxlY3Rpb24odmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5wYWdlU2VsZWN0RGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsKTtcbiAgfVxuICBAT3V0cHV0KClcbiAgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGl0ZW1zUGVyUGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIG9uUGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgcGFnZVNlbGVjdERpc2FibGVkOiBib29sZWFuO1xuICBtYXhQYWdlc0Rpc3BsYXllZCA9IDU7XG4gIHRvdGFsUGFnZXM6IG51bWJlcjtcbiAgcGFnZXM6IEFycmF5PFBhZ2U+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGFiZWwgPSB0aGlzLmxhYmVsIHx8IHRoaXMubGFiZWxzLml0ZW1zUGVyUGFnZTtcbiAgICB0aGlzLnJvd09wdGlvbnMgPSB0aGlzLnJvd09wdGlvbnMgfHwgdGhpcy5nZXREZWZhdWx0Um93T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2UgfHwgMTtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gIH1cblxuICBnZXREZWZhdWx0Um93T3B0aW9ucygpIHtcbiAgICByZXR1cm4gW3sgdmFsdWU6IDEwLCBsYWJlbDogJzEwJyB9LCB7IHZhbHVlOiAyNSwgbGFiZWw6ICcyNScgfSwgeyB2YWx1ZTogNTAsIGxhYmVsOiAnNTAnIH0sIHsgdmFsdWU6IDEwMCwgbGFiZWw6ICcxMDAnIH1dO1xuICB9XG5cbiAgb25QYWdlU2l6ZUNoYW5nZWQoZXZlbnQpIHtcbiAgICB0aGlzLnBhZ2UgPSAxO1xuICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gZXZlbnQuc2VsZWN0ZWQ7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KHRoaXMucGFnZSk7XG4gICAgdGhpcy5pdGVtc1BlclBhZ2VDaGFuZ2UuZW1pdCh0aGlzLml0ZW1zUGVyUGFnZSk7XG4gICAgdGhpcy5vblBhZ2VDaGFuZ2UuZW1pdCh7XG4gICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICBpdGVtc1BlclBhZ2U6IHRoaXMuaXRlbXNQZXJQYWdlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0UGFnZShwYWdlOiBudW1iZXIsIGV2ZW50PzogTW91c2VFdmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdCh0aGlzLnBhZ2UpO1xuICAgIHRoaXMub25QYWdlQ2hhbmdlLmVtaXQoe1xuICAgICAgcGFnZTogdGhpcy5wYWdlLFxuICAgICAgaXRlbXNQZXJQYWdlOiB0aGlzLml0ZW1zUGVyUGFnZSxcbiAgICB9KTtcbiAgfVxuXG4gIG5vUHJldmlvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gMTtcbiAgfVxuXG4gIG5vTmV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlID09PSB0aGlzLnRvdGFsUGFnZXM7XG4gIH1cblxuICAvLyBDcmVhdGUgcGFnZSBvYmplY3QgdXNlZCBpbiB0ZW1wbGF0ZVxuICBtYWtlUGFnZShudW06IG51bWJlciwgdGV4dDogc3RyaW5nLCBpc0FjdGl2ZTogYm9vbGVhbikge1xuICAgIHJldHVybiB7IG51bSwgdGV4dCwgYWN0aXZlOiBpc0FjdGl2ZSwgfSBhcyBQYWdlO1xuICB9XG5cbiAgZ2V0UGFnZXMoY3VycmVudFBhZ2U6IG51bWJlciwgdG90YWxQYWdlczogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFnZXM6IEFycmF5PFBhZ2U+ID0gW107XG4gICAgLy8gRGVmYXVsdCBwYWdlIGxpbWl0c1xuICAgIGxldCBzdGFydFBhZ2UgPSAxO1xuICAgIGxldCBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICBjb25zdCBpc01heFNpemVkID0gdGhpcy5tYXhQYWdlc0Rpc3BsYXllZCA8IHRvdGFsUGFnZXM7XG5cbiAgICAvLyByZWNvbXB1dGUgaWYgbWF4UGFnZXNEaXNwbGF5ZWRcbiAgICBpZiAoaXNNYXhTaXplZCkge1xuICAgICAgLy8gQ3VycmVudCBwYWdlIGlzIGRpc3BsYXllZCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB2aXNpYmxlIG9uZXNcbiAgICAgIHN0YXJ0UGFnZSA9IE1hdGgubWF4KGN1cnJlbnRQYWdlIC0gTWF0aC5mbG9vcih0aGlzLm1heFBhZ2VzRGlzcGxheWVkIC8gMiksIDEpO1xuICAgICAgZW5kUGFnZSA9IHN0YXJ0UGFnZSArIHRoaXMubWF4UGFnZXNEaXNwbGF5ZWQgLSAxO1xuXG4gICAgICAvLyBBZGp1c3QgaWYgbGltaXQgaXMgZXhjZWVkZWRcbiAgICAgIGlmIChlbmRQYWdlID4gdG90YWxQYWdlcykge1xuICAgICAgICBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICAgICAgc3RhcnRQYWdlID0gZW5kUGFnZSAtIHRoaXMubWF4UGFnZXNEaXNwbGF5ZWQgKyAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBwYWdlIG51bWJlciBsaW5rc1xuICAgIGZvciAobGV0IG51bSA9IHN0YXJ0UGFnZTsgbnVtIDw9IGVuZFBhZ2U7IG51bSsrKSB7XG4gICAgICBjb25zdCBwYWdlID0gdGhpcy5tYWtlUGFnZShudW0sIG51bS50b1N0cmluZygpLCBudW0gPT09IGN1cnJlbnRQYWdlKTtcbiAgICAgIHBhZ2VzLnB1c2gocGFnZSk7XG4gICAgfVxuICAgIHJldHVybiBwYWdlcztcbiAgfVxuXG4gIGNhbGN1bGF0ZVRvdGFsUGFnZXMoKSB7XG4gICAgY29uc3QgdG90YWxQYWdlcyA9IHRoaXMuaXRlbXNQZXJQYWdlIDwgMSA/IDEgOiBNYXRoLmNlaWwodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5pdGVtc1BlclBhZ2UpO1xuICAgIHJldHVybiBNYXRoLm1heCh0b3RhbFBhZ2VzIHx8IDAsIDEpO1xuICB9XG59XG4iXX0=