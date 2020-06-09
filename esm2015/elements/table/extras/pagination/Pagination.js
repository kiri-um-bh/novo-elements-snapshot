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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJsZS9leHRyYXMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDekcsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7Ozs7SUFlL0QsNkJBQW9KO0lBQXBDLDJOQUFtQztJQUFDLFlBQVU7SUFBQSxpQkFBSzs7OztJQUFuSCx1REFBdUM7SUFBdEUsaUVBQThCO0lBQXFHLGVBQVU7SUFBViwrQkFBVTs7O0FBSzFLLE1BQU0sT0FBTyxVQUFVO0lBOEJyQixZQUFtQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQXhCM0MsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFhbEIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbEMsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBSXlCLENBQUM7SUFuQmhELElBQ0ksb0JBQW9CO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFDRCxJQUFJLG9CQUFvQixDQUFDLEdBQVk7UUFDbkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFlRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNuRSxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXVCO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzVILENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFLO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDaEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFZLEVBQUUsS0FBa0I7UUFDekMsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtTQUNoQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsc0NBQXNDO0lBQ3RDLFFBQVEsQ0FBQyxHQUFXLEVBQUUsSUFBWSxFQUFFLFFBQWlCO1FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEdBQVcsQ0FBQztJQUNsRCxDQUFDO0lBRUQsUUFBUSxDQUFDLFdBQW1CLEVBQUUsVUFBa0I7UUFDOUMsTUFBTSxLQUFLLEdBQWdCLEVBQUUsQ0FBQztRQUM5QixzQkFBc0I7UUFDdEIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUN6QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDO1FBRXZELGlDQUFpQztRQUNqQyxJQUFJLFVBQVUsRUFBRTtZQUNkLDhEQUE4RDtZQUM5RCxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUUsT0FBTyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1lBRWpELDhCQUE4QjtZQUM5QixJQUFJLE9BQU8sR0FBRyxVQUFVLEVBQUU7Z0JBQ3hCLE9BQU8sR0FBRyxVQUFVLENBQUM7Z0JBQ3JCLFNBQVMsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQzthQUNsRDtTQUNGO1FBRUQsd0JBQXdCO1FBQ3hCLEtBQUssSUFBSSxHQUFHLEdBQUcsU0FBUyxFQUFFLEdBQUcsSUFBSSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDL0MsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsS0FBSyxXQUFXLENBQUMsQ0FBQztZQUNyRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUYsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7b0VBdEhVLFVBQVU7K0NBQVYsVUFBVTtRQVZmLDZCQUFpQjtRQUFBLFlBQVM7UUFBQSxpQkFBSztRQUMvQixzQ0FBb0w7UUFBbEgsK0lBQTBCLDJGQUFhLDZCQUF5QixJQUF0QztRQUEwRSxpQkFBYztRQUNwTCwwQkFBNEI7UUFDNUIsNkJBQ0k7UUFBQSw2QkFBcUY7UUFBcEUsbUZBQVMsMEJBQWdCLENBQUMsQ0FBQyxJQUFDO1FBQXdDLHVCQUFnRTtRQUFBLGlCQUFLO1FBQzFKLHlEQUFvSjtRQUNwSiw2QkFBaUY7UUFBaEUsbUZBQVMsMEJBQWdCLENBQUMsQ0FBQyxJQUFDO1FBQW9DLHVCQUF3RDtRQUFBLGlCQUFLO1FBQ2xKLGlCQUFLOztRQVBZLGVBQVM7UUFBVCwrQkFBUztRQUNiLGVBQXNCO1FBQXRCLHdDQUFzQixrQ0FBQSw2QkFBQTtRQUdlLGVBQXNDO1FBQXRDLHNFQUFzQztRQUNJLGVBQXVCO1FBQXZCLG1DQUF1QjtRQUNqRSxlQUFrQztRQUFsQyxrRUFBa0M7O2tEQUkvRSxVQUFVO2NBYnRCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7OztHQVNUO2FBQ0Y7O2tCQUVFLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQU9MLE1BQU07O2tCQUVOLE1BQU07O2tCQUVOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbmludGVyZmFjZSBQYWdlIHtcbiAgbnVtOiBudW1iZXI7XG4gIHRleHQ6IHN0cmluZztcbiAgYWN0aXZlOiBib29sZWFuO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGg1IGNsYXNzPVwicm93c1wiPnt7bGFiZWx9fTwvaDU+XG4gICAgICAgIDxub3ZvLXNlbGVjdCBbb3B0aW9uc109XCJyb3dPcHRpb25zXCIgW3BsYWNlaG9sZGVyXT1cImxhYmVscy5zZWxlY3RcIiBbKG5nTW9kZWwpXT1cIml0ZW1zUGVyUGFnZVwiIChvblNlbGVjdCk9XCJvblBhZ2VTaXplQ2hhbmdlZCgkZXZlbnQpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXItc2VsZWN0XCI+PC9ub3ZvLXNlbGVjdD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGFjZXJcIj48L3NwYW4+XG4gICAgICAgIDx1bCBjbGFzcz1cInBhZ2VyXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXJcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VcIiAoY2xpY2spPVwic2VsZWN0UGFnZShwYWdlLTEpXCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6IG5vUHJldmlvdXMoKX1cIj48aSBjbGFzcz1cImJoaS1wcmV2aW91c1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cInBhZ2VyLXByZXZpb3VzXCI+PC9pPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlXCIgW25nQ2xhc3NdPVwie2FjdGl2ZTogcC5hY3RpdmV9XCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVQYWdlU2VsZWN0aW9uXCIgKm5nRm9yPVwibGV0IHAgb2YgcGFnZXNcIiAoY2xpY2spPVwic2VsZWN0UGFnZShwLm51bSwgJGV2ZW50KVwiPnt7cC50ZXh0fX08L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZVwiIChjbGljayk9XCJzZWxlY3RQYWdlKHBhZ2UrMSlcIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkJzogbm9OZXh0KCl9XCI+PGkgY2xhc3M9XCJiaGktbmV4dFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInBhZ2VyLW5leHRcIj48L2k+PC9saT5cbiAgICAgICAgPC91bD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbiBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgcGFnZTogbnVtYmVyO1xuICBASW5wdXQoKVxuICB0b3RhbEl0ZW1zOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGl0ZW1zUGVyUGFnZSA9IDEwO1xuICBASW5wdXQoKVxuICByb3dPcHRpb25zO1xuICBASW5wdXQoKVxuICBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZVBhZ2VTZWxlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZVNlbGVjdERpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlUGFnZVNlbGVjdGlvbih2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnBhZ2VTZWxlY3REaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWwpO1xuICB9XG4gIEBPdXRwdXQoKVxuICBwYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgaXRlbXNQZXJQYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25QYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBwYWdlU2VsZWN0RGlzYWJsZWQ6IGJvb2xlYW47XG4gIG1heFBhZ2VzRGlzcGxheWVkID0gNTtcbiAgdG90YWxQYWdlczogbnVtYmVyO1xuICBwYWdlczogQXJyYXk8UGFnZT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sYWJlbCA9IHRoaXMubGFiZWwgfHwgdGhpcy5sYWJlbHMuaXRlbXNQZXJQYWdlO1xuICAgIHRoaXMucm93T3B0aW9ucyA9IHRoaXMucm93T3B0aW9ucyB8fCB0aGlzLmdldERlZmF1bHRSb3dPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZSB8fCAxO1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgfVxuXG4gIGdldERlZmF1bHRSb3dPcHRpb25zKCkge1xuICAgIHJldHVybiBbeyB2YWx1ZTogMTAsIGxhYmVsOiAnMTAnIH0sIHsgdmFsdWU6IDI1LCBsYWJlbDogJzI1JyB9LCB7IHZhbHVlOiA1MCwgbGFiZWw6ICc1MCcgfSwgeyB2YWx1ZTogMTAwLCBsYWJlbDogJzEwMCcgfV07XG4gIH1cblxuICBvblBhZ2VTaXplQ2hhbmdlZChldmVudCkge1xuICAgIHRoaXMucGFnZSA9IDE7XG4gICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBldmVudC5zZWxlY3RlZDtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQodGhpcy5wYWdlKTtcbiAgICB0aGlzLml0ZW1zUGVyUGFnZUNoYW5nZS5lbWl0KHRoaXMuaXRlbXNQZXJQYWdlKTtcbiAgICB0aGlzLm9uUGFnZUNoYW5nZS5lbWl0KHtcbiAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgIGl0ZW1zUGVyUGFnZTogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RQYWdlKHBhZ2U6IG51bWJlciwgZXZlbnQ/OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KHRoaXMucGFnZSk7XG4gICAgdGhpcy5vblBhZ2VDaGFuZ2UuZW1pdCh7XG4gICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICBpdGVtc1BlclBhZ2U6IHRoaXMuaXRlbXNQZXJQYWdlLFxuICAgIH0pO1xuICB9XG5cbiAgbm9QcmV2aW91cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlID09PSAxO1xuICB9XG5cbiAgbm9OZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnBhZ2UgPT09IHRoaXMudG90YWxQYWdlcztcbiAgfVxuXG4gIC8vIENyZWF0ZSBwYWdlIG9iamVjdCB1c2VkIGluIHRlbXBsYXRlXG4gIG1ha2VQYWdlKG51bTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIGlzQWN0aXZlOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIHsgbnVtLCB0ZXh0LCBhY3RpdmU6IGlzQWN0aXZlLCB9IGFzIFBhZ2U7XG4gIH1cblxuICBnZXRQYWdlcyhjdXJyZW50UGFnZTogbnVtYmVyLCB0b3RhbFBhZ2VzOiBudW1iZXIpIHtcbiAgICBjb25zdCBwYWdlczogQXJyYXk8UGFnZT4gPSBbXTtcbiAgICAvLyBEZWZhdWx0IHBhZ2UgbGltaXRzXG4gICAgbGV0IHN0YXJ0UGFnZSA9IDE7XG4gICAgbGV0IGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgIGNvbnN0IGlzTWF4U2l6ZWQgPSB0aGlzLm1heFBhZ2VzRGlzcGxheWVkIDwgdG90YWxQYWdlcztcblxuICAgIC8vIHJlY29tcHV0ZSBpZiBtYXhQYWdlc0Rpc3BsYXllZFxuICAgIGlmIChpc01heFNpemVkKSB7XG4gICAgICAvLyBDdXJyZW50IHBhZ2UgaXMgZGlzcGxheWVkIGluIHRoZSBtaWRkbGUgb2YgdGhlIHZpc2libGUgb25lc1xuICAgICAgc3RhcnRQYWdlID0gTWF0aC5tYXgoY3VycmVudFBhZ2UgLSBNYXRoLmZsb29yKHRoaXMubWF4UGFnZXNEaXNwbGF5ZWQgLyAyKSwgMSk7XG4gICAgICBlbmRQYWdlID0gc3RhcnRQYWdlICsgdGhpcy5tYXhQYWdlc0Rpc3BsYXllZCAtIDE7XG5cbiAgICAgIC8vIEFkanVzdCBpZiBsaW1pdCBpcyBleGNlZWRlZFxuICAgICAgaWYgKGVuZFBhZ2UgPiB0b3RhbFBhZ2VzKSB7XG4gICAgICAgIGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgICAgICBzdGFydFBhZ2UgPSBlbmRQYWdlIC0gdGhpcy5tYXhQYWdlc0Rpc3BsYXllZCArIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHBhZ2UgbnVtYmVyIGxpbmtzXG4gICAgZm9yIChsZXQgbnVtID0gc3RhcnRQYWdlOyBudW0gPD0gZW5kUGFnZTsgbnVtKyspIHtcbiAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLm1ha2VQYWdlKG51bSwgbnVtLnRvU3RyaW5nKCksIG51bSA9PT0gY3VycmVudFBhZ2UpO1xuICAgICAgcGFnZXMucHVzaChwYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhZ2VzO1xuICB9XG5cbiAgY2FsY3VsYXRlVG90YWxQYWdlcygpIHtcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gdGhpcy5pdGVtc1BlclBhZ2UgPCAxID8gMSA6IE1hdGguY2VpbCh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLml0ZW1zUGVyUGFnZSk7XG4gICAgcmV0dXJuIE1hdGgubWF4KHRvdGFsUGFnZXMgfHwgMCwgMSk7XG4gIH1cbn1cbiJdfQ==