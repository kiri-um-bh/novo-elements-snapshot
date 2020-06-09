import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, HostBinding, } from '@angular/core';
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
    var _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-tiles", 8);
    i0.ɵɵlistener("ngModelChange", function NovoDataTablePagination_ng_container_0_novo_tiles_2_Template_novo_tiles_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r6); var ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.pageSize = $event; })("onChange", function NovoDataTablePagination_ng_container_0_novo_tiles_2_Template_novo_tiles_onChange_0_listener($event) { i0.ɵɵrestoreView(_r6); var ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.changePageSize($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r2.pageSize)("options", ctx_r2.displayedPageSizeOptions);
} }
function NovoDataTablePagination_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.pageSize);
} }
function NovoDataTablePagination_ng_container_0_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 9);
} }
function NovoDataTablePagination_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r9 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("click", function NovoDataTablePagination_ng_container_0_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r9); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.previousPage(); });
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 7);
    i0.ɵɵlistener("click", function NovoDataTablePagination_ng_container_0_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r9); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.nextPage(); });
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
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
var _c0 = function (a0) { return { active: a0 }; };
function NovoDataTablePagination_ng_container_1_li_8_Template(rf, ctx) { if (rf & 1) {
    var _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 14);
    i0.ɵɵlistener("click", function NovoDataTablePagination_ng_container_1_li_8_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r14); var p_r12 = ctx.$implicit; var ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.selectPage(p_r12.number - 1); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var p_r12 = ctx.$implicit;
    var ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, p_r12.number === ctx_r11.page + 1));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(p_r12.text);
} }
var _c1 = function (a0) { return { "disabled": a0 }; };
function NovoDataTablePagination_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h5", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "novo-select", 11);
    i0.ɵɵlistener("ngModelChange", function NovoDataTablePagination_ng_container_1_Template_novo_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r16); var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.pageSize = $event; })("onSelect", function NovoDataTablePagination_ng_container_1_Template_novo_select_onSelect_3_listener($event) { i0.ɵɵrestoreView(_r16); var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.changePageSize($event.selected); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "span", 12);
    i0.ɵɵelementStart(5, "ul", 13);
    i0.ɵɵelementStart(6, "li", 14);
    i0.ɵɵlistener("click", function NovoDataTablePagination_ng_container_1_Template_li_click_6_listener() { i0.ɵɵrestoreView(_r16); var ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.selectPage(ctx_r18.page - 1); });
    i0.ɵɵelement(7, "i", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, NovoDataTablePagination_ng_container_1_li_8_Template, 2, 4, "li", 16);
    i0.ɵɵelementStart(9, "li", 14);
    i0.ɵɵlistener("click", function NovoDataTablePagination_ng_container_1_Template_li_click_9_listener() { i0.ɵɵrestoreView(_r16); var ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.selectPage(ctx_r19.page + 1); });
    i0.ɵɵelement(10, "i", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
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
var MAX_PAGES_DISPLAYED = 5;
var NovoDataTablePagination = /** @class */ (function () {
    function NovoDataTablePagination(changeDetectorRef, labels, state) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this.labels = labels;
        this.state = state;
        this.theme = 'standard';
        this._page = 0;
        this._pageSizeOptions = [];
        this._length = 0;
        this.pageChange = new EventEmitter();
        this.resetSubscription = this.state.resetSource.subscribe(function () {
            _this.page = 0;
            _this.changeDetectorRef.markForCheck();
        });
    }
    Object.defineProperty(NovoDataTablePagination.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (page) {
            this._page = page;
            this.changeDetectorRef.markForCheck();
            this.longRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, false);
            this.shortRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, true);
            this.state.page = this._page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoDataTablePagination.prototype, "pageSize", {
        get: function () {
            return this._pageSize;
        },
        set: function (pageSize) {
            this._pageSize = pageSize;
            this.updateDisplayedPageSizeOptions();
            this.state.pageSize = this._pageSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoDataTablePagination.prototype, "pageSizeOptions", {
        get: function () {
            return this._pageSizeOptions;
        },
        set: function (pageSizeOptions) {
            this._pageSizeOptions = pageSizeOptions;
            this.updateDisplayedPageSizeOptions();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoDataTablePagination.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (length) {
            this._length = length;
            this.changeDetectorRef.markForCheck();
            this.longRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, false);
            this.shortRangeLabel = this.labels.getRangeText(this.page, this.pageSize, this.length, true);
            this.totalPages = this.calculateTotalPages();
            this.pages = this.getPages(this.page, this.totalPages);
        },
        enumerable: true,
        configurable: true
    });
    NovoDataTablePagination.prototype.ngOnInit = function () {
        this._initialized = true;
        this.updateDisplayedPageSizeOptions();
    };
    NovoDataTablePagination.prototype.ngOnDestroy = function () {
        this.resetSubscription.unsubscribe();
    };
    NovoDataTablePagination.prototype.selectPage = function (page) {
        this.page = page;
        this.emitPageEvent();
    };
    NovoDataTablePagination.prototype.nextPage = function () {
        if (!this.hasNextPage()) {
            return;
        }
        this.page++;
        this.pages = this.getPages(this.page, this.totalPages);
        this.emitPageEvent();
    };
    NovoDataTablePagination.prototype.previousPage = function () {
        if (!this.hasPreviousPage()) {
            return;
        }
        this.page--;
        this.pages = this.getPages(this.page, this.totalPages);
        this.emitPageEvent();
    };
    NovoDataTablePagination.prototype.hasPreviousPage = function () {
        return this.page >= 1 && this.pageSize !== 0;
    };
    NovoDataTablePagination.prototype.hasNextPage = function () {
        var numberOfPages = Math.ceil(this.length / this.pageSize) - 1;
        return this.page < numberOfPages && this.pageSize !== 0;
    };
    NovoDataTablePagination.prototype.changePageSize = function (pageSize) {
        this.page = 0;
        this.pageSize = pageSize;
        this.emitPageEvent(true);
    };
    NovoDataTablePagination.prototype.updateDisplayedPageSizeOptions = function () {
        var _this = this;
        if (!this._initialized) {
            return;
        }
        if (!this.displayedPageSizeOptions) {
            this.displayedPageSizeOptions = [];
            this.pageSizeOptions.forEach(function (option) {
                if (option.hasOwnProperty('value')) {
                    _this.displayedPageSizeOptions.push(option);
                }
                else {
                    _this.displayedPageSizeOptions.push({
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
    };
    NovoDataTablePagination.prototype.emitPageEvent = function (isPageSizeChange) {
        if (isPageSizeChange === void 0) { isPageSizeChange = false; }
        var event = {
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
    };
    NovoDataTablePagination.prototype.calculateTotalPages = function () {
        var totalPages = this.pageSize < 1 ? 1 : Math.ceil(this.length / this.pageSize);
        return Math.max(totalPages || 0, 1);
    };
    NovoDataTablePagination.prototype.makePage = function (number, text, isActive) {
        return {
            number: number,
            text: text,
            active: isActive,
        };
    };
    NovoDataTablePagination.prototype.getPages = function (currentPage, totalPages) {
        var pages = [];
        // Default page limits
        var startPage = 1;
        var endPage = totalPages;
        var isMaxSized = MAX_PAGES_DISPLAYED < totalPages;
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
        for (var number = startPage; number <= endPage; number++) {
            var page = this.makePage(number, number.toString(), number === currentPage);
            pages.push(page);
        }
        return pages;
    };
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
    return NovoDataTablePagination;
}());
export { NovoDataTablePagination };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDataTablePagination, [{
        type: Component,
        args: [{
                selector: 'novo-data-table-pagination',
                template: "\n      <ng-container *ngIf=\"theme === 'basic' || theme === 'basic-wide'\">\n        <div class=\"novo-data-table-pagination-size\">\n            <novo-tiles *ngIf=\"displayedPageSizeOptions.length > 1\"\n                        [(ngModel)]=\"pageSize\"\n                        [options]=\"displayedPageSizeOptions\"\n                        (onChange)=\"changePageSize($event)\"\n                        data-automation-id=\"novo-data-table-pagination-tiles\">\n            </novo-tiles>\n            <div *ngIf=\"displayedPageSizeOptions.length <= 1\">{{ pageSize }}</div>\n        </div>\n\n        <div class=\"novo-data-table-range-label-long\" data-automation-id=\"novo-data-table-pagination-range-label-long\">\n            {{ longRangeLabel }}\n        </div>\n        <div class=\"novo-data-table-range-label-short\" data-automation-id=\"novo-data-table-pagination-range-label-short\">\n            {{ shortRangeLabel }}\n        </div>\n        <span class=\"spacer novo-data-table-spacer\" *ngIf=\"theme === 'basic-wide'\"></span>\n        <button theme=\"dialogue\" type=\"button\"\n                class=\"novo-data-table-pagination-navigation-previous\"\n                (click)=\"previousPage()\"\n                icon=\"previous\"\n                side=\"left\"\n                [disabled]=\"!hasPreviousPage()\"\n                data-automation-id=\"novo-data-table-pagination-previous\">\n            <span>{{ labels.previous }}</span>\n        </button>\n        <button theme=\"dialogue\" type=\"button\"\n                class=\"novo-data-table-pagination-navigation-next\"\n                (click)=\"nextPage()\"\n                icon=\"next\"\n                side=\"right\"\n                [disabled]=\"!hasNextPage()\"\n                data-automation-id=\"novo-data-table-pagination-next\">\n            <span>{{ labels.next }}</span>\n        </button>\n      </ng-container>\n      <ng-container *ngIf=\"theme === 'standard'\">\n        <h5 class=\"rows\">{{ labels.itemsPerPage }}</h5>\n        <novo-select\n          [options]=\"displayedPageSizeOptions\"\n          [placeholder]=\"labels.select\"\n          [(ngModel)]=\"pageSize\"\n          (onSelect)=\"changePageSize($event.selected)\"\n          data-automation-id=\"pager-select\"\n          [attr.data-feature-id]=\"dataFeatureId\">\n        </novo-select>\n        <span class=\"spacer\"></span>\n        <ul class=\"pager\" data-automation-id=\"pager\">\n            <li class=\"page\" (click)=\"selectPage(page - 1)\" [ngClass]=\"{ 'disabled': page === 0 }\"><i class=\"bhi-previous\" data-automation-id=\"pager-previous\"></i></li>\n            <li class=\"page\" [ngClass]=\"{active: p.number === page + 1}\" *ngFor=\"let p of pages\" (click)=\"selectPage(p.number - 1)\">{{ p.text }}</li>\n            <li class=\"page\" (click)=\"selectPage(page + 1)\" [ngClass]=\"{ 'disabled': page + 1 === totalPages }\"><i class=\"bhi-next\" data-automation-id=\"pager-next\"></i></li>\n        </ul>\n      </ng-container>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1wYWdpbmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL3BhZ2luYXRpb24vZGF0YS10YWJsZS1wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7Ozs7SUFTdkQscUNBS2E7SUFKRCwrT0FBc0IsNk5BQUE7SUFJbEMsaUJBQWE7OztJQUpELHlDQUFzQiw0Q0FBQTs7O0lBS2xDLDJCQUFrRDtJQUFBLFlBQWM7SUFBQSxpQkFBTTs7O0lBQXBCLGVBQWM7SUFBZCxxQ0FBYzs7O0lBU3BFLDBCQUFrRjs7OztJQWpCcEYsNkJBQ0U7SUFBQSw4QkFDSTtJQUFBLHFHQUtBO0lBQ0EsdUZBQWtEO0lBQ3RELGlCQUFNO0lBRU4sOEJBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQU07SUFDTiw4QkFDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBTTtJQUNOLHlGQUEyRTtJQUMzRSxpQ0FPSTtJQUxJLG9NQUF3QjtJQUs1Qiw2QkFBTTtJQUFBLGFBQXFCO0lBQUEsaUJBQU87SUFDdEMsaUJBQVM7SUFDVCxrQ0FPSTtJQUxJLG1NQUFvQjtJQUt4Qiw2QkFBTTtJQUFBLGFBQWlCO0lBQUEsaUJBQU87SUFDbEMsaUJBQVM7SUFDWCwwQkFBZTs7O0lBbENHLGVBQTJDO0lBQTNDLGlFQUEyQztJQU1sRCxlQUE0QztJQUE1QyxrRUFBNEM7SUFJakQsZUFDSjtJQURJLHNEQUNKO0lB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a0JBY0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSURhdGFUYWJsZVBhZ2luYXRpb25FdmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL2RhdGEtdGFibGUtc3RhdGUuc2VydmljZSc7XG5cbmNvbnN0IE1BWF9QQUdFU19ESVNQTEFZRUQgPSA1O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGhlbWUgPT09ICdiYXNpYycgfHwgdGhlbWUgPT09ICdiYXNpYy13aWRlJ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb24tc2l6ZVwiPlxuICAgICAgICAgICAgPG5vdm8tdGlsZXMgKm5nSWY9XCJkaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMubGVuZ3RoID4gMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInBhZ2VTaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cImRpc3BsYXllZFBhZ2VTaXplT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2UpPVwiY2hhbmdlUGFnZVNpemUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbi10aWxlc1wiPlxuICAgICAgICAgICAgPC9ub3ZvLXRpbGVzPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImRpc3BsYXllZFBhZ2VTaXplT3B0aW9ucy5sZW5ndGggPD0gMVwiPnt7IHBhZ2VTaXplIH19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtcmFuZ2UtbGFiZWwtbG9uZ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uLXJhbmdlLWxhYmVsLWxvbmdcIj5cbiAgICAgICAgICAgIHt7IGxvbmdSYW5nZUxhYmVsIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLXJhbmdlLWxhYmVsLXNob3J0XCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb24tcmFuZ2UtbGFiZWwtc2hvcnRcIj5cbiAgICAgICAgICAgIHt7IHNob3J0UmFuZ2VMYWJlbCB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGFjZXIgbm92by1kYXRhLXRhYmxlLXNwYWNlclwiICpuZ0lmPVwidGhlbWUgPT09ICdiYXNpYy13aWRlJ1wiPjwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImRpYWxvZ3VlXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvbi1uYXZpZ2F0aW9uLXByZXZpb3VzXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJldmlvdXNQYWdlKClcIlxuICAgICAgICAgICAgICAgIGljb249XCJwcmV2aW91c1wiXG4gICAgICAgICAgICAgICAgc2lkZT1cImxlZnRcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhaGFzUHJldmlvdXNQYWdlKClcIlxuICAgICAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uLXByZXZpb3VzXCI+XG4gICAgICAgICAgICA8c3Bhbj57eyBsYWJlbHMucHJldmlvdXMgfX08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1wYWdpbmF0aW9uLW5hdmlnYXRpb24tbmV4dFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm5leHRQYWdlKClcIlxuICAgICAgICAgICAgICAgIGljb249XCJuZXh0XCJcbiAgICAgICAgICAgICAgICBzaWRlPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhaGFzTmV4dFBhZ2UoKVwiXG4gICAgICAgICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb24tbmV4dFwiPlxuICAgICAgICAgICAgPHNwYW4+e3sgbGFiZWxzLm5leHQgfX08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGhlbWUgPT09ICdzdGFuZGFyZCdcIj5cbiAgICAgICAgPGg1IGNsYXNzPVwicm93c1wiPnt7IGxhYmVscy5pdGVtc1BlclBhZ2UgfX08L2g1PlxuICAgICAgICA8bm92by1zZWxlY3RcbiAgICAgICAgICBbb3B0aW9uc109XCJkaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnNcIlxuICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJsYWJlbHMuc2VsZWN0XCJcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cInBhZ2VTaXplXCJcbiAgICAgICAgICAob25TZWxlY3QpPVwiY2hhbmdlUGFnZVNpemUoJGV2ZW50LnNlbGVjdGVkKVwiXG4gICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXItc2VsZWN0XCJcbiAgICAgICAgICBbYXR0ci5kYXRhLWZlYXR1cmUtaWRdPVwiZGF0YUZlYXR1cmVJZFwiPlxuICAgICAgICA8L25vdm8tc2VsZWN0PlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNwYWNlclwiPjwvc3Bhbj5cbiAgICAgICAgPHVsIGNsYXNzPVwicGFnZXJcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlclwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZVwiIChjbGljayk9XCJzZWxlY3RQYWdlKHBhZ2UgLSAxKVwiIFtuZ0NsYXNzXT1cInsgJ2Rpc2FibGVkJzogcGFnZSA9PT0gMCB9XCI+PGkgY2xhc3M9XCJiaGktcHJldmlvdXNcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlci1wcmV2aW91c1wiPjwvaT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZVwiIFtuZ0NsYXNzXT1cInthY3RpdmU6IHAubnVtYmVyID09PSBwYWdlICsgMX1cIiAqbmdGb3I9XCJsZXQgcCBvZiBwYWdlc1wiIChjbGljayk9XCJzZWxlY3RQYWdlKHAubnVtYmVyIC0gMSlcIj57eyBwLnRleHQgfX08L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZVwiIChjbGljayk9XCJzZWxlY3RQYWdlKHBhZ2UgKyAxKVwiIFtuZ0NsYXNzXT1cInsgJ2Rpc2FibGVkJzogcGFnZSArIDEgPT09IHRvdGFsUGFnZXMgfVwiPjxpIGNsYXNzPVwiYmhpLW5leHRcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlci1uZXh0XCI+PC9pPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVQYWdpbmF0aW9uPFQ+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZyA9ICdzdGFuZGFyZCc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuICBzZXQgcGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlID0gcGFnZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMubG9uZ1JhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgZmFsc2UpO1xuICAgIHRoaXMuc2hvcnRSYW5nZUxhYmVsID0gdGhpcy5sYWJlbHMuZ2V0UmFuZ2VUZXh0KHRoaXMucGFnZSwgdGhpcy5wYWdlU2l6ZSwgdGhpcy5sZW5ndGgsIHRydWUpO1xuICAgIHRoaXMuc3RhdGUucGFnZSA9IHRoaXMuX3BhZ2U7XG4gIH1cbiAgX3BhZ2U6IG51bWJlciA9IDA7XG5cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplO1xuICB9XG4gIHNldCBwYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXllZFBhZ2VTaXplT3B0aW9ucygpO1xuICAgIHRoaXMuc3RhdGUucGFnZVNpemUgPSB0aGlzLl9wYWdlU2l6ZTtcbiAgfVxuICBwcml2YXRlIF9wYWdlU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBkYXRhRmVhdHVyZUlkOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2VTaXplT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVNpemVPcHRpb25zO1xuICB9XG4gIHNldCBwYWdlU2l6ZU9wdGlvbnMocGFnZVNpemVPcHRpb25zOiBhbnlbXSkge1xuICAgIHRoaXMuX3BhZ2VTaXplT3B0aW9ucyA9IHBhZ2VTaXplT3B0aW9ucztcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXllZFBhZ2VTaXplT3B0aW9ucygpO1xuICB9XG4gIHByaXZhdGUgX3BhZ2VTaXplT3B0aW9ucyA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBsZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xuICB9XG4gIHNldCBsZW5ndGgobGVuZ3RoOiBudW1iZXIpIHtcbiAgICB0aGlzLl9sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmxvbmdSYW5nZUxhYmVsID0gdGhpcy5sYWJlbHMuZ2V0UmFuZ2VUZXh0KHRoaXMucGFnZSwgdGhpcy5wYWdlU2l6ZSwgdGhpcy5sZW5ndGgsIGZhbHNlKTtcbiAgICB0aGlzLnNob3J0UmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCB0cnVlKTtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gIH1cbiAgX2xlbmd0aDogbnVtYmVyID0gMDtcblxuICBAT3V0cHV0KCkgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8SURhdGFUYWJsZVBhZ2luYXRpb25FdmVudD4oKTtcblxuICBwdWJsaWMgZGlzcGxheWVkUGFnZVNpemVPcHRpb25zOiB7IHZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdO1xuICBwdWJsaWMgbG9uZ1JhbmdlTGFiZWw6IHN0cmluZztcbiAgcHVibGljIHNob3J0UmFuZ2VMYWJlbDogc3RyaW5nO1xuICBwdWJsaWMgcGFnZXM6IHsgbnVtYmVyOiBudW1iZXI7IHRleHQ6IHN0cmluZzsgYWN0aXZlOiBib29sZWFuIH1bXTtcblxuICBwcml2YXRlIHJlc2V0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHB1YmxpYyB0b3RhbFBhZ2VzOiBudW1iZXI7XG4gIHByaXZhdGUgX2luaXRpYWxpemVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIHN0YXRlOiBEYXRhVGFibGVTdGF0ZTxUPikge1xuICAgIHRoaXMucmVzZXRTdWJzY3JpcHRpb24gPSB0aGlzLnN0YXRlLnJlc2V0U291cmNlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnBhZ2UgPSAwO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0UGFnZShwYWdlKSB7XG4gICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICB0aGlzLmVtaXRQYWdlRXZlbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZXh0UGFnZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzTmV4dFBhZ2UoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBhZ2UrKztcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5lbWl0UGFnZUV2ZW50KCk7XG4gIH1cblxuICBwdWJsaWMgcHJldmlvdXNQYWdlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNQcmV2aW91c1BhZ2UoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBhZ2UtLTtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5lbWl0UGFnZUV2ZW50KCk7XG4gIH1cblxuICBwdWJsaWMgaGFzUHJldmlvdXNQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2UgPj0gMSAmJiB0aGlzLnBhZ2VTaXplICE9PSAwO1xuICB9XG5cbiAgcHVibGljIGhhc05leHRQYWdlKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG51bWJlck9mUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKSAtIDE7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA8IG51bWJlck9mUGFnZXMgJiYgdGhpcy5wYWdlU2l6ZSAhPT0gMDtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlID0gMDtcbiAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgdGhpcy5lbWl0UGFnZUV2ZW50KHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVEaXNwbGF5ZWRQYWdlU2l6ZU9wdGlvbnMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZGlzcGxheWVkUGFnZVNpemVPcHRpb25zKSB7XG4gICAgICB0aGlzLmRpc3BsYXllZFBhZ2VTaXplT3B0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5wYWdlU2l6ZU9wdGlvbnMuZm9yRWFjaCgob3B0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbi5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheWVkUGFnZVNpemVPcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXllZFBhZ2VTaXplT3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgIHZhbHVlOiBvcHRpb24sXG4gICAgICAgICAgICBsYWJlbDogb3B0aW9uLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5sb25nUmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCBmYWxzZSk7XG4gICAgdGhpcy5zaG9ydFJhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgdHJ1ZSk7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0UGFnZUV2ZW50KGlzUGFnZVNpemVDaGFuZ2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgcGFnZTogdGhpcy5wYWdlLFxuICAgICAgcGFnZVNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgICBsZW5ndGg6IHRoaXMubGVuZ3RoLFxuICAgICAgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlcixcbiAgICAgIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCxcbiAgICB9O1xuICAgIHRoaXMucGFnZUNoYW5nZS5uZXh0KGV2ZW50KTtcbiAgICB0aGlzLnN0YXRlLnBhZ2UgPSB0aGlzLnBhZ2U7XG4gICAgdGhpcy5zdGF0ZS5wYWdlU2l6ZSA9IHRoaXMucGFnZVNpemU7XG4gICAgdGhpcy5sb25nUmFuZ2VMYWJlbCA9IHRoaXMubGFiZWxzLmdldFJhbmdlVGV4dCh0aGlzLnBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubGVuZ3RoLCBmYWxzZSk7XG4gICAgdGhpcy5zaG9ydFJhbmdlTGFiZWwgPSB0aGlzLmxhYmVscy5nZXRSYW5nZVRleHQodGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLmxlbmd0aCwgdHJ1ZSk7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KGV2ZW50KTtcbiAgICB0aGlzLnN0YXRlLm9uUGFnaW5hdGlvbkNoYW5nZShpc1BhZ2VTaXplQ2hhbmdlLCB0aGlzLnBhZ2VTaXplKTtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlVG90YWxQYWdlcygpIHtcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gdGhpcy5wYWdlU2l6ZSA8IDEgPyAxIDogTWF0aC5jZWlsKHRoaXMubGVuZ3RoIC8gdGhpcy5wYWdlU2l6ZSk7XG4gICAgcmV0dXJuIE1hdGgubWF4KHRvdGFsUGFnZXMgfHwgMCwgMSk7XG4gIH1cblxuICBwcml2YXRlIG1ha2VQYWdlKG51bWJlcjogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIGlzQWN0aXZlOiBib29sZWFuKTogeyBudW1iZXI6IG51bWJlcjsgdGV4dDogc3RyaW5nOyBhY3RpdmU6IGJvb2xlYW4gfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG51bWJlcixcbiAgICAgIHRleHQsXG4gICAgICBhY3RpdmU6IGlzQWN0aXZlLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldFBhZ2VzKGN1cnJlbnRQYWdlOiBudW1iZXIsIHRvdGFsUGFnZXM6IG51bWJlcik6IHsgbnVtYmVyOiBudW1iZXI7IHRleHQ6IHN0cmluZzsgYWN0aXZlOiBib29sZWFuIH1bXSB7XG4gICAgY29uc3QgcGFnZXMgPSBbXTtcblxuICAgIC8vIERlZmF1bHQgcGFnZSBsaW1pdHNcbiAgICBsZXQgc3RhcnRQYWdlID0gMTtcbiAgICBsZXQgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgY29uc3QgaXNNYXhTaXplZCA9IE1BWF9QQUdFU19ESVNQTEFZRUQgPCB0b3RhbFBhZ2VzO1xuXG4gICAgLy8gUmVjb21wdXRlIGlmIG1heFBhZ2VzRGlzcGxheWVkXG4gICAgaWYgKGlzTWF4U2l6ZWQpIHtcbiAgICAgIC8vIEN1cnJlbnQgcGFnZSBpcyBkaXNwbGF5ZWQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdmlzaWJsZSBvbmVzXG4gICAgICBzdGFydFBhZ2UgPSBNYXRoLm1heChjdXJyZW50UGFnZSAtIE1hdGguZmxvb3IoTUFYX1BBR0VTX0RJU1BMQVlFRCAvIDIpLCAxKTtcbiAgICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyBNQVhfUEFHRVNfRElTUExBWUVEIC0gMTtcblxuICAgICAgLy8gQWRqdXN0IGlmIGxpbWl0IGlzIGV4Y2VlZGVkXG4gICAgICBpZiAoZW5kUGFnZSA+IHRvdGFsUGFnZXMpIHtcbiAgICAgICAgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICAgIHN0YXJ0UGFnZSA9IGVuZFBhZ2UgLSBNQVhfUEFHRVNfRElTUExBWUVEICsgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgcGFnZSBudW1iZXIgbGlua3NcbiAgICBmb3IgKGxldCBudW1iZXIgPSBzdGFydFBhZ2U7IG51bWJlciA8PSBlbmRQYWdlOyBudW1iZXIrKykge1xuICAgICAgY29uc3QgcGFnZSA9IHRoaXMubWFrZVBhZ2UobnVtYmVyLCBudW1iZXIudG9TdHJpbmcoKSwgbnVtYmVyID09PSBjdXJyZW50UGFnZSk7XG4gICAgICBwYWdlcy5wdXNoKHBhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gcGFnZXM7XG4gIH1cbn1cbiJdfQ==