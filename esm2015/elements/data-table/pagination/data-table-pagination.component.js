import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { NovoLabelService } from '../../../services/novo-label-service';
import { DataTableState } from '../state/data-table-state.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/novo-label-service";
import * as i2 from "../state/data-table-state.service";
import * as i3 from "@angular/common";
import * as i4 from "../../button/Button";
import * as i5 from "../../tiles/Tiles";
import * as i6 from "@angular/forms";
import * as i7 from "../../select/Select";
function NovoDataTablePagination_ng_container_0_novo_tiles_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-tiles", 8);
    i0.ɵɵlistener("ngModelChange", function NovoDataTablePagination_ng_container_0_novo_tiles_2_Template_novo_tiles_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.pageSize = $event; })("onChange", function NovoDataTablePagination_ng_container_0_novo_tiles_2_Template_novo_tiles_onChange_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.changePageSize($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r2.pageSize)("options", ctx_r2.displayedPageSizeOptions);
} }
function NovoDataTablePagination_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.pageSize);
} }
function NovoDataTablePagination_ng_container_0_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 9);
} }
function NovoDataTablePagination_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1);
    i0.ɵɵtemplate(2, NovoDataTablePagination_ng_container_0_novo_tiles_2_Template, 1, 2, "novo-tiles", 2);
    i0.ɵɵtemplate(3, NovoDataTablePagination_ng_container_0_div_3_Template, 2, 1, "div", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 3);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 4);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, NovoDataTablePagination_ng_container_0_span_8_Template, 1, 0, "span", 5);
    i0.ɵɵelementStart(9, "button", 6);
    i0.ɵɵlistener("click", function NovoDataTablePagination_ng_container_0_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.previousPage(); });
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 7);
    i0.ɵɵlistener("click", function NovoDataTablePagination_ng_container_0_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.nextPage(); });
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.displayedPageSizeOptions.length > 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.displayedPageSizeOptions.length <= 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.longRangeLabel, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.shortRangeLabel, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.theme === "basic-wide");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", !ctx_r0.hasPreviousPage());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.labels.previous);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", !ctx_r0.hasNextPage());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.labels.next);
} }
const _c0 = function (a0) { return { active: a0 }; };
function NovoDataTablePagination_ng_container_1_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 14);
    i0.ɵɵlistener("click", function NovoDataTablePagination_ng_container_1_li_8_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r14); const p_r12 = ctx.$implicit; const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.selectPage(p_r12.number - 1); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r12 = ctx.$implicit;
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, p_r12.number === ctx_r11.page + 1));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", p_r12.text, " ");
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function NovoDataTablePagination_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h5", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "novo-select", 11);
    i0.ɵɵlistener("ngModelChange", function NovoDataTablePagination_ng_container_1_Template_novo_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.pageSize = $event; })("onSelect", function NovoDataTablePagination_ng_container_1_Template_novo_select_onSelect_3_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.changePageSize($event.selected); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "span", 12);
    i0.ɵɵelementStart(5, "ul", 13);
    i0.ɵɵelementStart(6, "li", 14);
    i0.ɵɵlistener("click", function NovoDataTablePagination_ng_container_1_Template_li_click_6_listener() { i0.ɵɵrestoreView(_r16); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.selectPage(ctx_r18.page - 1); });
    i0.ɵɵelement(7, "i", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, NovoDataTablePagination_ng_container_1_li_8_Template, 2, 4, "li", 16);
    i0.ɵɵelementStart(9, "li", 14);
    i0.ɵɵlistener("click", function NovoDataTablePagination_ng_container_1_Template_li_click_9_listener() { i0.ɵɵrestoreView(_r16); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.selectPage(ctx_r19.page + 1); });
    i0.ɵɵelement(10, "i", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.labels.itemsPerPage);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("options", ctx_r1.displayedPageSizeOptions)("placeholder", ctx_r1.labels.select)("ngModel", ctx_r1.pageSize);
    i0.ɵɵattribute("data-feature-id", ctx_r1.dataFeatureId);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c1, ctx_r1.page === 0));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.pages);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c1, ctx_r1.page + 1 === ctx_r1.totalPages));
} }
const MAX_PAGES_DISPLAYED = 5;
export class NovoDataTablePagination {
    constructor(changeDetectorRef, labels, state) {
        this.changeDetectorRef = changeDetectorRef;
        this.labels = labels;
        this.state = state;
        this.theme = 'standard';
        this._page = 0;
        this._pageSizeOptions = [];
        this._length = 0;
        this.pageChange = new EventEmitter();
        this.resetSubscription = this.state.resetSource.subscribe(() => {
            this.page = 0;
            this.changeDetectorRef.markForCheck();
        });
    }
    get page() {
        return this._page;
    }
    set page(page) {
        this._page = page;
        this.changeDetectorRef.markForCheck();
        this.longRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, false);
        this.shortRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, true);
        this.state.page = this._page;
    }
    get pageSize() {
        return this._pageSize;
    }
    set pageSize(pageSize) {
        this._pageSize = pageSize;
        this.updateDisplayedPageSizeOptions();
        this.state.pageSize = this._pageSize;
    }
    get pageSizeOptions() {
        return this._pageSizeOptions;
    }
    set pageSizeOptions(pageSizeOptions) {
        this._pageSizeOptions = pageSizeOptions;
        this.updateDisplayedPageSizeOptions();
    }
    get length() {
        return this._length;
    }
    set length(length) {
        this._length = length;
        this.changeDetectorRef.markForCheck();
        this.longRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, false);
        this.shortRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, true);
        this.totalPages = this.calculateTotalPages();
        this.pages = this.getPages(this.page, this.totalPages);
    }
    ngOnInit() {
        this._initialized = true;
        this.updateDisplayedPageSizeOptions();
    }
    ngOnDestroy() {
        this.resetSubscription.unsubscribe();
    }
    selectPage(page) {
        this.page = page;
        this.emitPageEvent();
    }
    nextPage() {
        if (!this.hasNextPage()) {
            return;
        }
        this.page++;
        this.pages = this.getPages(this.page, this.totalPages);
        this.emitPageEvent();
    }
    previousPage() {
        if (!this.hasPreviousPage()) {
            return;
        }
        this.page--;
        this.pages = this.getPages(this.page, this.totalPages);
        this.emitPageEvent();
    }
    hasPreviousPage() {
        return this.page >= 1 && this.pageSize !== 0;
    }
    hasNextPage() {
        const numberOfPages = Math.ceil(this.length / this.pageSize) - 1;
        return this.page < numberOfPages && this.pageSize !== 0;
    }
    changePageSize(pageSize) {
        this.page = 0;
        this.pageSize = pageSize;
        this.emitPageEvent(true);
    }
    updateDisplayedPageSizeOptions() {
        if (!this._initialized) {
            return;
        }
        if (!this.displayedPageSizeOptions) {
            this.displayedPageSizeOptions = [];
            this.pageSizeOptions.forEach((option) => {
                if (option.hasOwnProperty('value')) {
                    this.displayedPageSizeOptions.push(option);
                }
                else {
                    this.displayedPageSizeOptions.push({
                        value: option,
                        label: option,
                    });
                }
            });
        }
        this.longRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, false);
        this.shortRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, true);
        this.totalPages = this.calculateTotalPages();
        this.pages = this.getPages(this.page, this.totalPages);
        this.changeDetectorRef.detectChanges();
    }
    emitPageEvent(isPageSizeChange = false) {
        const event = {
            page: this.page,
            pageSize: this.pageSize,
            length: this.length,
            filter: this.state.filter,
            sort: this.state.sort,
        };
        this.pageChange.next(event);
        this.state.page = this.page;
        this.state.pageSize = this.pageSize;
        this.longRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, false);
        this.shortRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, true);
        this.totalPages = this.calculateTotalPages();
        this.pages = this.getPages(this.page, this.totalPages);
        this.state.updates.next(event);
        this.state.onPaginationChange(isPageSizeChange, this.pageSize);
    }
    calculateTotalPages() {
        const totalPages = this.pageSize < 1 ? 1 : Math.ceil(this.length / this.pageSize);
        return Math.max(totalPages || 0, 1);
    }
    makePage(number, text, isActive) {
        return {
            number,
            text,
            active: isActive,
        };
    }
    getPages(currentPage, totalPages) {
        const pages = [];
        // Default page limits
        let startPage = 1;
        let endPage = totalPages;
        const isMaxSized = MAX_PAGES_DISPLAYED < totalPages;
        // Recompute if maxPagesDisplayed
        if (isMaxSized) {
            // Current page is displayed in the middle of the visible ones
            startPage = Math.max(currentPage - Math.floor(MAX_PAGES_DISPLAYED / 2), 1);
            endPage = startPage + MAX_PAGES_DISPLAYED - 1;
            // Adjust if limit is exceeded
            if (endPage > totalPages) {
                endPage = totalPages;
                startPage = endPage - MAX_PAGES_DISPLAYED + 1;
            }
        }
        // Add page number links
        for (let number = startPage; number <= endPage; number++) {
            const page = this.makePage(number, number.toString(), number === currentPage);
            pages.push(page);
        }
        return pages;
    }
}
NovoDataTablePagination.ɵfac = function NovoDataTablePagination_Factory(t) { return new (t || NovoDataTablePagination)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i2.DataTableState)); };
NovoDataTablePagination.ɵcmp = i0.ɵɵdefineComponent({ type: NovoDataTablePagination, selectors: [["novo-data-table-pagination"]], hostVars: 2, hostBindings: function NovoDataTablePagination_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap(ctx.theme);
    } }, inputs: { theme: "theme", page: "page", pageSize: "pageSize", dataFeatureId: "dataFeatureId", pageSizeOptions: "pageSizeOptions", length: "length" }, outputs: { pageChange: "pageChange" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "novo-data-table-pagination-size"], ["data-automation-id", "novo-data-table-pagination-tiles", 3, "ngModel", "options", "ngModelChange", "onChange", 4, "ngIf"], ["data-automation-id", "novo-data-table-pagination-range-label-long", 1, "novo-data-table-range-label-long"], ["data-automation-id", "novo-data-table-pagination-range-label-short", 1, "novo-data-table-range-label-short"], ["class", "spacer novo-data-table-spacer", 4, "ngIf"], ["theme", "dialogue", "type", "button", "icon", "previous", "side", "left", "data-automation-id", "novo-data-table-pagination-previous", 1, "novo-data-table-pagination-navigation-previous", 3, "disabled", "click"], ["theme", "dialogue", "type", "button", "icon", "next", "side", "right", "data-automation-id", "novo-data-table-pagination-next", 1, "novo-data-table-pagination-navigation-next", 3, "disabled", "click"], ["data-automation-id", "novo-data-table-pagination-tiles", 3, "ngModel", "options", "ngModelChange", "onChange"], [1, "spacer", "novo-data-table-spacer"], [1, "rows"], ["data-automation-id", "pager-select", 3, "options", "placeholder", "ngModel", "ngModelChange", "onSelect"], [1, "spacer"], ["data-automation-id", "pager", 1, "pager"], [1, "page", 3, "ngClass", "click"], ["data-automation-id", "pager-previous", 1, "bhi-previous"], ["class", "page", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["data-automation-id", "pager-next", 1, "bhi-next"]], template: function NovoDataTablePagination_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoDataTablePagination_ng_container_0_Template, 15, 9, "ng-container", 0);
        i0.ɵɵtemplate(1, NovoDataTablePagination_ng_container_1_Template, 11, 12, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.theme === "basic" || ctx.theme === "basic-wide");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.theme === "standard");
    } }, directives: [i3.NgIf, i4.NovoButtonElement, i5.NovoTilesElement, i6.NgControlStatus, i6.NgModel, i7.NovoSelectElement, i3.NgClass, i3.NgForOf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDataTablePagination, [{
        type: Component,
        args: [{
                selector: 'novo-data-table-pagination',
                template: `
    <ng-container *ngIf="theme === 'basic' || theme === 'basic-wide'">
      <div class="novo-data-table-pagination-size">
        <novo-tiles
          *ngIf="displayedPageSizeOptions.length > 1"
          [(ngModel)]="pageSize"
          [options]="displayedPageSizeOptions"
          (onChange)="changePageSize($event)"
          data-automation-id="novo-data-table-pagination-tiles"
        >
        </novo-tiles>
        <div *ngIf="displayedPageSizeOptions.length <= 1">{{ pageSize }}</div>
      </div>

      <div class="novo-data-table-range-label-long" data-automation-id="novo-data-table-pagination-range-label-long">
        {{ longRangeLabel }}
      </div>
      <div class="novo-data-table-range-label-short" data-automation-id="novo-data-table-pagination-range-label-short">
        {{ shortRangeLabel }}
      </div>
      <span class="spacer novo-data-table-spacer" *ngIf="theme === 'basic-wide'"></span>
      <button
        theme="dialogue"
        type="button"
        class="novo-data-table-pagination-navigation-previous"
        (click)="previousPage()"
        icon="previous"
        side="left"
        [disabled]="!hasPreviousPage()"
        data-automation-id="novo-data-table-pagination-previous"
      >
        <span>{{ labels.previous }}</span>
      </button>
      <button
        theme="dialogue"
        type="button"
        class="novo-data-table-pagination-navigation-next"
        (click)="nextPage()"
        icon="next"
        side="right"
        [disabled]="!hasNextPage()"
        data-automation-id="novo-data-table-pagination-next"
      >
        <span>{{ labels.next }}</span>
      </button>
    </ng-container>
    <ng-container *ngIf="theme === 'standard'">
      <h5 class="rows">{{ labels.itemsPerPage }}</h5>
      <novo-select
        [options]="displayedPageSizeOptions"
        [placeholder]="labels.select"
        [(ngModel)]="pageSize"
        (onSelect)="changePageSize($event.selected)"
        data-automation-id="pager-select"
        [attr.data-feature-id]="dataFeatureId"
      >
      </novo-select>
      <span class="spacer"></span>
      <ul class="pager" data-automation-id="pager">
        <li class="page" (click)="selectPage(page - 1)" [ngClass]="{ disabled: page === 0 }">
          <i class="bhi-previous" data-automation-id="pager-previous"></i>
        </li>
        <li class="page" [ngClass]="{ active: p.number === page + 1 }" *ngFor="let p of pages" (click)="selectPage(p.number - 1)">
          {{ p.text }}
        </li>
        <li class="page" (click)="selectPage(page + 1)" [ngClass]="{ disabled: page + 1 === totalPages }">
          <i class="bhi-next" data-automation-id="pager-next"></i>
        </li>
      </ul>
    </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NovoLabelService }, { type: i2.DataTableState }]; }, { theme: [{
            type: HostBinding,
            args: ['class']
        }, {
            type: Input
        }], page: [{
            type: Input
        }], pageSize: [{
            type: Input
        }], dataFeatureId: [{
            type: Input
        }], pageSizeOptions: [{
            type: Input
        }], length: [{
            type: Input
        }], pageChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1wYWdpbmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvcGFnaW5hdGlvbi9kYXRhLXRhYmxlLXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFHTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFeEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7Ozs7OztJQVMzRCxxQ0FPYTtJQUxYLGlQQUFzQiwrTkFBQTtJQUt4QixpQkFBYTs7O0lBTFgseUNBQXNCLDRDQUFBOzs7SUFNeEIsMkJBQWtEO0lBQUEsWUFBYztJQUFBLGlCQUFNOzs7SUFBcEIsZUFBYztJQUFkLHFDQUFjOzs7SUFTbEUsMEJBQWtGOzs7O0lBbkJwRiw2QkFDRTtJQUFBLDhCQUNFO0lBQUEscUdBT0E7SUFDQSx1RkFBa0Q7SUFDcEQsaUJBQU07SUFFTiw4QkFDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBTTtJQUNOLDhCQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFNO0lBQ04seUZBQTJFO0lBQzNFLGlDQVVFO0lBTkEsc01BQXdCO0lBTXhCLDZCQUFNO0lBQUEsYUFBcUI7SUFBQSxpQkFBTztJQUNwQyxpQkFBUztJQUNULGtDQVVFO0lBTkEscU1BQW9CO0lBTXBCLDZCQUFNO0lBQUEsYUFBaUI7SUFBQSxpQkFBTztJQUNoQyxpQkFBUztJQUNYLDBCQUFlOzs7SUF6Q1QsZUFBMkM7SUFBM0MsaUVBQTJD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a0JBRFQsS0FBSztZQWNJLFVBQVU7a0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IElEYXRhVGFibGVQYWdpbmF0aW9uRXZlbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IERhdGFUYWJsZVN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlJztcblxuY29uc3QgTUFYX1BBR0VTX0RJU1BMQVlFRCA9IDU7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGhlbWUgPT09ICdiYXNpYycgfHwgdGhlbWUgPT09ICdiYXNpYy13aWRlJ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uLXNpemVcIj5cbiAgICAgICAgPG5vdm8tdGlsZXNcbiAgICAgICAgICAqbmdJZj1cImRpc3BsYXllZFBhZ2VTaXplT3B0aW9ucy5sZW5ndGggPiAxXCJcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cInBhZ2VTaXplXCJcbiAgICAgICAgICBbb3B0aW9uc109XCJkaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnNcIlxuICAgICAgICAgIChvbkNoYW5nZSk9XCJjaGFuZ2VQYWdlU2l6ZSgkZXZlbnQpXCJcbiAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbi10aWxlc1wiXG4gICAgICAgID5cbiAgICAgICAgPC9ub3ZvLXRpbGVzPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZGlzcGxheWVkUGFnZVNpemVPcHRpb25zLmxlbmd0aCA8PSAxXCI+e3sgcGFnZVNpemUgfX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLXJhbmdlLWxhYmVsLWxvbmdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbi1yYW5nZS1sYWJlbC1sb25nXCI+XG4gICAgICAgIHt7IGxvbmdSYW5nZUxhYmVsIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtcmFuZ2UtbGFiZWwtc2hvcnRcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbi1yYW5nZS1sYWJlbC1zaG9ydFwiPlxuICAgICAgICB7eyBzaG9ydFJhbmdlTGFiZWwgfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3M9XCJzcGFjZXIgbm92by1kYXRhLXRhYmxlLXNwYWNlclwiICpuZ0lmPVwidGhlbWUgPT09ICdiYXNpYy13aWRlJ1wiPjwvc3Bhbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdGhlbWU9XCJkaWFsb2d1ZVwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uLW5hdmlnYXRpb24tcHJldmlvdXNcIlxuICAgICAgICAoY2xpY2spPVwicHJldmlvdXNQYWdlKClcIlxuICAgICAgICBpY29uPVwicHJldmlvdXNcIlxuICAgICAgICBzaWRlPVwibGVmdFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCIhaGFzUHJldmlvdXNQYWdlKClcIlxuICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbi1wcmV2aW91c1wiXG4gICAgICA+XG4gICAgICAgIDxzcGFuPnt7IGxhYmVscy5wcmV2aW91cyB9fTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0aGVtZT1cImRpYWxvZ3VlXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwibm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb24tbmF2aWdhdGlvbi1uZXh0XCJcbiAgICAgICAgKGNsaWNrKT1cIm5leHRQYWdlKClcIlxuICAgICAgICBpY29uPVwibmV4dFwiXG4gICAgICAgIHNpZGU9XCJyaWdodFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCIhaGFzTmV4dFBhZ2UoKVwiXG4gICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uLW5leHRcIlxuICAgICAgPlxuICAgICAgICA8c3Bhbj57eyBsYWJlbHMubmV4dCB9fTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0aGVtZSA9PT0gJ3N0YW5kYXJkJ1wiPlxuICAgICAgPGg1IGNsYXNzPVwicm93c1wiPnt7IGxhYmVscy5pdGVtc1BlclBhZ2UgfX08L2g1PlxuICAgICAgPG5vdm8tc2VsZWN0XG4gICAgICAgIFtvcHRpb25zXT1cImRpc3BsYXllZFBhZ2VTaXplT3B0aW9uc1wiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJsYWJlbHMuc2VsZWN0XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJwYWdlU2l6ZVwiXG4gICAgICAgIChvblNlbGVjdCk9XCJjaGFuZ2VQYWdlU2l6ZSgkZXZlbnQuc2VsZWN0ZWQpXCJcbiAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXItc2VsZWN0XCJcbiAgICAgICAgW2F0dHIuZGF0YS1mZWF0dXJlLWlkXT1cImRhdGFGZWF0dXJlSWRcIlxuICAgICAgPlxuICAgICAgPC9ub3ZvLXNlbGVjdD5cbiAgICAgIDxzcGFuIGNsYXNzPVwic3BhY2VyXCI+PC9zcGFuPlxuICAgICAgPHVsIGNsYXNzPVwicGFnZXJcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlclwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJwYWdlXCIgKGNsaWNrKT1cInNlbGVjdFBhZ2UocGFnZSAtIDEpXCIgW25nQ2xhc3NdPVwieyBkaXNhYmxlZDogcGFnZSA9PT0gMCB9XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktcHJldmlvdXNcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlci1wcmV2aW91c1wiPjwvaT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwicGFnZVwiIFtuZ0NsYXNzXT1cInsgYWN0aXZlOiBwLm51bWJlciA9PT0gcGFnZSArIDEgfVwiICpuZ0Zvcj1cImxldCBwIG9mIHBhZ2VzXCIgKGNsaWNrKT1cInNlbGVjdFBhZ2UocC5udW1iZXIgLSAxKVwiPlxuICAgICAgICAgIHt7IHAudGV4dCB9fVxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJwYWdlXCIgKGNsaWNrKT1cInNlbGVjdFBhZ2UocGFnZSArIDEpXCIgW25nQ2xhc3NdPVwieyBkaXNhYmxlZDogcGFnZSArIDEgPT09IHRvdGFsUGFnZXMgfVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLW5leHRcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlci1uZXh0XCI+PC9pPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVQYWdpbmF0aW9uPFQ+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZyA9ICdzdGFuZGFyZCc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuICBzZXQgcGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlID0gcGFnZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMubG9uZ1JhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgZmFsc2UpO1xuICAgIHRoaXMuc2hvcnRSYW5nZUxhYmVsID0gdGhpcy5sYWJlbHMuZ2V0UmFuZ2VUZXh0KHRoaXMucGFnZSwgdGhpcy5wYWdlU2l6ZSwgdGhpcy5sZW5ndGgsIHRydWUpO1xuICAgIHRoaXMuc3RhdGUucGFnZSA9IHRoaXMuX3BhZ2U7XG4gIH1cbiAgX3BhZ2U6IG51bWJlciA9IDA7XG5cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplO1xuICB9XG4gIHNldCBwYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXllZFBhZ2VTaXplT3B0aW9ucygpO1xuICAgIHRoaXMuc3RhdGUucGFnZVNpemUgPSB0aGlzLl9wYWdlU2l6ZTtcbiAgfVxuICBwcml2YXRlIF9wYWdlU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBkYXRhRmVhdHVyZUlkOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2VTaXplT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVNpemVPcHRpb25zO1xuICB9XG4gIHNldCBwYWdlU2l6ZU9wdGlvbnMocGFnZVNpemVPcHRpb25zOiBhbnlbXSkge1xuICAgIHRoaXMuX3BhZ2VTaXplT3B0aW9ucyA9IHBhZ2VTaXplT3B0aW9ucztcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXllZFBhZ2VTaXplT3B0aW9ucygpO1xuICB9XG4gIHByaXZhdGUgX3BhZ2VTaXplT3B0aW9ucyA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBsZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xuICB9XG4gIHNldCBsZW5ndGgobGVuZ3RoOiBudW1iZXIpIHtcbiAgICB0aGlzLl9sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmxvbmdSYW5nZUxhYmVsID0gdGhpcy5sYWJlbHMuZ2V0UmFuZ2VUZXh0KHRoaXMucGFnZSwgdGhpcy5wYWdlU2l6ZSwgdGhpcy5sZW5ndGgsIGZhbHNlKTtcbiAgICB0aGlzLnNob3J0UmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCB0cnVlKTtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gIH1cbiAgX2xlbmd0aDogbnVtYmVyID0gMDtcblxuICBAT3V0cHV0KCkgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8SURhdGFUYWJsZVBhZ2luYXRpb25FdmVudD4oKTtcblxuICBwdWJsaWMgZGlzcGxheWVkUGFnZVNpemVPcHRpb25zOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdO1xuICBwdWJsaWMgbG9uZ1JhbmdlTGFiZWw6IHN0cmluZztcbiAgcHVibGljIHNob3J0UmFuZ2VMYWJlbDogc3RyaW5nO1xuICBwdWJsaWMgcGFnZXM6IHsgbnVtYmVyOiBudW1iZXI7IHRleHQ6IHN0cmluZzsgYWN0aXZlOiBib29sZWFuIH1bXTtcblxuICBwcml2YXRlIHJlc2V0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHB1YmxpYyB0b3RhbFBhZ2VzOiBudW1iZXI7XG4gIHByaXZhdGUgX2luaXRpYWxpemVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIHN0YXRlOiBEYXRhVGFibGVTdGF0ZTxUPikge1xuICAgIHRoaXMucmVzZXRTdWJzY3JpcHRpb24gPSB0aGlzLnN0YXRlLnJlc2V0U291cmNlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnBhZ2UgPSAwO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0UGFnZShwYWdlKSB7XG4gICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICB0aGlzLmVtaXRQYWdlRXZlbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZXh0UGFnZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzTmV4dFBhZ2UoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBhZ2UrKztcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5lbWl0UGFnZUV2ZW50KCk7XG4gIH1cblxuICBwdWJsaWMgcHJldmlvdXNQYWdlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNQcmV2aW91c1BhZ2UoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBhZ2UtLTtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5lbWl0UGFnZUV2ZW50KCk7XG4gIH1cblxuICBwdWJsaWMgaGFzUHJldmlvdXNQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2UgPj0gMSAmJiB0aGlzLnBhZ2VTaXplICE9PSAwO1xuICB9XG5cbiAgcHVibGljIGhhc05leHRQYWdlKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG51bWJlck9mUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKSAtIDE7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA8IG51bWJlck9mUGFnZXMgJiYgdGhpcy5wYWdlU2l6ZSAhPT0gMDtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlID0gMDtcbiAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgdGhpcy5lbWl0UGFnZUV2ZW50KHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVEaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZGlzcGxheWVkUGFnZVNpemVPcHRpb25zKSB7XG4gICAgICB0aGlzLmRpc3BsYXllZFBhZ2VTaXplT3B0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5wYWdlU2l6ZU9wdGlvbnMuZm9yRWFjaCgob3B0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbi5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheWVkUGFnZVNpemVPcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXllZFBhZ2VTaXplT3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgIHZhbHVlOiBvcHRpb24sXG4gICAgICAgICAgICBsYWJlbDogb3B0aW9uLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5sb25nUmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCBmYWxzZSk7XG4gICAgdGhpcy5zaG9ydFJhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgdHJ1ZSk7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0UGFnZUV2ZW50KGlzUGFnZVNpemVDaGFuZ2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgcGFnZTogdGhpcy5wYWdlLFxuICAgICAgcGFnZVNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgICBsZW5ndGg6IHRoaXMubGVuZ3RoLFxuICAgICAgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlcixcbiAgICAgIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCxcbiAgICB9O1xuICAgIHRoaXMucGFnZUNoYW5nZS5uZXh0KGV2ZW50KTtcbiAgICB0aGlzLnN0YXRlLnBhZ2UgPSB0aGlzLnBhZ2U7XG4gICAgdGhpcy5zdGF0ZS5wYWdlU2l6ZSA9IHRoaXMucGFnZVNpemU7XG4gICAgdGhpcy5sb25nUmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCBmYWxzZSk7XG4gICAgdGhpcy5zaG9ydFJhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgdHJ1ZSk7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KGV2ZW50KTtcbiAgICB0aGlzLnN0YXRlLm9uUGFnaW5hdGlvbkNoYW5nZShpc1BhZ2VTaXplQ2hhbmdlLCB0aGlzLnBhZ2VTaXplKTtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlVG90YWxQYWdlcygpIHtcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gdGhpcy5wYWdlU2l6ZSA8IDEgPyAxIDogTWF0aC5jZWlsKHRoaXMubGVuZ3RoIC8gdGhpcy5wYWdlU2l6ZSk7XG4gICAgcmV0dXJuIE1hdGgubWF4KHRvdGFsUGFnZXMgfHwgMCwgMSk7XG4gIH1cblxuICBwcml2YXRlIG1ha2VQYWdlKG51bWJlcjogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIGlzQWN0aXZlOiBib29sZWFuKTogeyBudW1iZXI6IG51bWJlcjsgdGV4dDogc3RyaW5nOyBhY3RpdmU6IGJvb2xlYW4gfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG51bWJlcixcbiAgICAgIHRleHQsXG4gICAgICBhY3RpdmU6IGlzQWN0aXZlLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldFBhZ2VzKGN1cnJlbnRQYWdlOiBudW1iZXIsIHRvdGFsUGFnZXM6IG51bWJlcik6IHsgbnVtYmVyOiBudW1iZXI7IHRleHQ6IHN0cmluZzsgYWN0aXZlOiBib29sZWFuIH1bXSB7XG4gICAgY29uc3QgcGFnZXMgPSBbXTtcblxuICAgIC8vIERlZmF1bHQgcGFnZSBsaW1pdHNcbiAgICBsZXQgc3RhcnRQYWdlID0gMTtcbiAgICBsZXQgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgY29uc3QgaXNNYXhTaXplZCA9IE1BWF9QQUdFU19ESVNQTEFZRUQgPCB0b3RhbFBhZ2VzO1xuXG4gICAgLy8gUmVjb21wdXRlIGlmIG1heFBhZ2VzRGlzcGxheWVkXG4gICAgaWYgKGlzTWF4U2l6ZWQpIHtcbiAgICAgIC8vIEN1cnJlbnQgcGFnZSBpcyBkaXNwbGF5ZWQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdmlzaWJsZSBvbmVzXG4gICAgICBzdGFydFBhZ2UgPSBNYXRoLm1heChjdXJyZW50UGFnZSAtIE1hdGguZmxvb3IoTUFYX1BBR0VTX0RJU1BMQVlFRCAvIDIpLCAxKTtcbiAgICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyBNQVhfUEFHRVNfRElTUExBWUVEIC0gMTtcblxuICAgICAgLy8gQWRqdXN0IGlmIGxpbWl0IGlzIGV4Y2VlZGVkXG4gICAgICBpZiAoZW5kUGFnZSA+IHRvdGFsUGFnZXMpIHtcbiAgICAgICAgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICAgIHN0YXJ0UGFnZSA9IGVuZFBhZ2UgLSBNQVhfUEFHRVNfRElTUExBWUVEICsgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgcGFnZSBudW1iZXIgbGlua3NcbiAgICBmb3IgKGxldCBudW1iZXIgPSBzdGFydFBhZ2U7IG51bWJlciA8PSBlbmRQYWdlOyBudW1iZXIrKykge1xuICAgICAgY29uc3QgcGFnZSA9IHRoaXMubWFrZVBhZ2UobnVtYmVyLCBudW1iZXIudG9TdHJpbmcoKSwgbnVtYmVyID09PSBjdXJyZW50UGFnZSk7XG4gICAgICBwYWdlcy5wdXNoKHBhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gcGFnZXM7XG4gIH1cbn1cbiJdfQ==