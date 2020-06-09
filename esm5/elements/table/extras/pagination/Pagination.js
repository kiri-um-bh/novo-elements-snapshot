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
var _c0 = function (a0) { return { active: a0 }; };
function Pagination_li_7_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4);
    i0.ɵɵlistener("click", function Pagination_li_7_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r3); var p_r1 = ctx.$implicit; var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.selectPage(p_r1.num, $event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var p_r1 = ctx.$implicit;
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", ctx_r0.disablePageSelection);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, p_r1.active));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(p_r1.text);
} }
var _c1 = function (a0) { return { "disabled": a0 }; };
var Pagination = /** @class */ (function () {
    function Pagination(labels) {
        this.labels = labels;
        this.itemsPerPage = 10;
        this.pageChange = new EventEmitter();
        this.itemsPerPageChange = new EventEmitter();
        this.onPageChange = new EventEmitter();
        this.maxPagesDisplayed = 5;
    }
    Object.defineProperty(Pagination.prototype, "disablePageSelection", {
        get: function () {
            return this.pageSelectDisabled;
        },
        set: function (val) {
            this.pageSelectDisabled = coerceBooleanProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Pagination.prototype.ngOnInit = function () {
        this.label = this.label || this.labels.itemsPerPage;
        this.rowOptions = this.rowOptions || this.getDefaultRowOptions();
    };
    Pagination.prototype.ngOnChanges = function (changes) {
        this.page = this.page || 1;
        this.totalPages = this.calculateTotalPages();
        this.pages = this.getPages(this.page, this.totalPages);
    };
    Pagination.prototype.getDefaultRowOptions = function () {
        return [{ value: 10, label: '10' }, { value: 25, label: '25' }, { value: 50, label: '50' }, { value: 100, label: '100' }];
    };
    Pagination.prototype.onPageSizeChanged = function (event) {
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
    };
    Pagination.prototype.selectPage = function (page, event) {
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
    };
    Pagination.prototype.noPrevious = function () {
        return this.page === 1;
    };
    Pagination.prototype.noNext = function () {
        return this.page === this.totalPages;
    };
    // Create page object used in template
    Pagination.prototype.makePage = function (num, text, isActive) {
        return { num: num, text: text, active: isActive, };
    };
    Pagination.prototype.getPages = function (currentPage, totalPages) {
        var pages = [];
        // Default page limits
        var startPage = 1;
        var endPage = totalPages;
        var isMaxSized = this.maxPagesDisplayed < totalPages;
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
        for (var num = startPage; num <= endPage; num++) {
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        return pages;
    };
    Pagination.prototype.calculateTotalPages = function () {
        var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
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
    return Pagination;
}());
export { Pagination };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Pagination, [{
        type: Component,
        args: [{
                selector: 'novo-pagination',
                template: "\n        <h5 class=\"rows\">{{label}}</h5>\n        <novo-select [options]=\"rowOptions\" [placeholder]=\"labels.select\" [(ngModel)]=\"itemsPerPage\" (onSelect)=\"onPageSizeChanged($event)\" data-automation-id=\"pager-select\"></novo-select>\n        <span class=\"spacer\"></span>\n        <ul class=\"pager\" data-automation-id=\"pager\">\n            <li class=\"page\" (click)=\"selectPage(page-1)\" [ngClass]=\"{'disabled': noPrevious()}\"><i class=\"bhi-previous\" data-automation-id=\"pager-previous\"></i></li>\n            <li class=\"page\" [ngClass]=\"{active: p.active}\" [class.disabled]=\"disablePageSelection\" *ngFor=\"let p of pages\" (click)=\"selectPage(p.num, $event)\">{{p.text}}</li>\n            <li class=\"page\" (click)=\"selectPage(page+1)\" [ngClass]=\"{'disabled': noNext()}\"><i class=\"bhi-next\" data-automation-id=\"pager-next\"></i></li>\n        </ul>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJsZS9leHRyYXMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDekcsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7Ozs7SUFlL0QsNkJBQW9KO0lBQXBDLHVOQUFtQztJQUFDLFlBQVU7SUFBQSxpQkFBSzs7OztJQUFuSCx1REFBdUM7SUFBdEUsaUVBQThCO0lBQXFHLGVBQVU7SUFBViwrQkFBVTs7O0FBUjFLO0lBMkNFLG9CQUFtQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQXhCM0MsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFhbEIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbEMsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBSXlCLENBQUM7SUFuQmhELHNCQUNJLDRDQUFvQjthQUR4QjtZQUVFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ2pDLENBQUM7YUFDRCxVQUF5QixHQUFZO1lBQ25DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxDQUFDOzs7T0FIQTtJQWtCRCw2QkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUks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QyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUYsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQzt3RUF0SFUsVUFBVTttREFBVixVQUFVO1lBVmYsNkJBQWlCO1lBQUEsWUFBUztZQUFBLGlCQUFLO1lBQy9CLHNDQUFvTDtZQUFsSCwrSUFBMEIsMkZBQWEsNkJBQXlCLElBQXRDO1lBQTBFLGlCQUFjO1lBQ3BMLDBCQUE0QjtZQUM1Qiw2QkFDSTtZQUFBLDZCQUFxRjtZQUFwRSxtRkFBUywwQkFBZ0IsQ0FBQyxDQUFDLElBQUM7WUFBd0MsdUJBQWdFO1lBQUEsaUJBQUs7WUFDMUoseURBQW9KO1lBQ3BKLDZCQUFpRjtZQUFoRSxtRkFBUywwQkFBZ0IsQ0FBQyxDQUFDLElBQUM7WUFBb0MsdUJBQXdEO1lBQUEsaUJBQUs7WUFDbEosaUJBQUs7O1lBUFksZUFBUztZQUFULCtCQUFTO1lBQ2IsZUFBc0I7WUFBdEIsd0NBQXNCLGtDQUFBLDZCQUFBO1lBR2UsZUFBc0M7WUFBdEMsc0VBQXNDO1lBQ0ksZUFBdUI7WUFBdkIsbUNBQXVCO1lBQ2pFLGVBQWtDO1lBQWxDLGtFQUFrQzs7cUJBcEI1RjtDQStJQyxBQXBJRCxJQW9JQztTQXZIWSxVQUFVO2tEQUFWLFVBQVU7Y0FidEIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSw4M0JBU1Q7YUFDRjs7a0JBRUUsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBT0wsTUFBTTs7a0JBRU4sTUFBTTs7a0JBRU4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuaW50ZXJmYWNlIFBhZ2Uge1xuICBudW06IG51bWJlcjtcbiAgdGV4dDogc3RyaW5nO1xuICBhY3RpdmU6IGJvb2xlYW47XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDUgY2xhc3M9XCJyb3dzXCI+e3tsYWJlbH19PC9oNT5cbiAgICAgICAgPG5vdm8tc2VsZWN0IFtvcHRpb25zXT1cInJvd09wdGlvbnNcIiBbcGxhY2Vob2xkZXJdPVwibGFiZWxzLnNlbGVjdFwiIFsobmdNb2RlbCldPVwiaXRlbXNQZXJQYWdlXCIgKG9uU2VsZWN0KT1cIm9uUGFnZVNpemVDaGFuZ2VkKCRldmVudClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlci1zZWxlY3RcIj48L25vdm8tc2VsZWN0PlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNwYWNlclwiPjwvc3Bhbj5cbiAgICAgICAgPHVsIGNsYXNzPVwicGFnZXJcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlclwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZVwiIChjbGljayk9XCJzZWxlY3RQYWdlKHBhZ2UtMSlcIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkJzogbm9QcmV2aW91cygpfVwiPjxpIGNsYXNzPVwiYmhpLXByZXZpb3VzXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXItcHJldmlvdXNcIj48L2k+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VcIiBbbmdDbGFzc109XCJ7YWN0aXZlOiBwLmFjdGl2ZX1cIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZVBhZ2VTZWxlY3Rpb25cIiAqbmdGb3I9XCJsZXQgcCBvZiBwYWdlc1wiIChjbGljayk9XCJzZWxlY3RQYWdlKHAubnVtLCAkZXZlbnQpXCI+e3twLnRleHR9fTwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlXCIgKGNsaWNrKT1cInNlbGVjdFBhZ2UocGFnZSsxKVwiIFtuZ0NsYXNzXT1cInsnZGlzYWJsZWQnOiBub05leHQoKX1cIj48aSBjbGFzcz1cImJoaS1uZXh0XCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXItbmV4dFwiPjwvaT48L2xpPlxuICAgICAgICA8L3VsPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICBwYWdlOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHRvdGFsSXRlbXM6IG51bWJlcjtcbiAgQElucHV0KClcbiAgaXRlbXNQZXJQYWdlID0gMTA7XG4gIEBJbnB1dCgpXG4gIHJvd09wdGlvbnM7XG4gIEBJbnB1dCgpXG4gIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlUGFnZVNlbGVjdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlU2VsZWN0RGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVQYWdlU2VsZWN0aW9uKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMucGFnZVNlbGVjdERpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbCk7XG4gIH1cbiAgQE91dHB1dCgpXG4gIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBpdGVtc1BlclBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBvblBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIHBhZ2VTZWxlY3REaXNhYmxlZDogYm9vbGVhbjtcbiAgbWF4UGFnZXNEaXNwbGF5ZWQgPSA1O1xuICB0b3RhbFBhZ2VzOiBudW1iZXI7XG4gIHBhZ2VzOiBBcnJheTxQYWdlPjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxhYmVsID0gdGhpcy5sYWJlbCB8fCB0aGlzLmxhYmVscy5pdGVtc1BlclBhZ2U7XG4gICAgdGhpcy5yb3dPcHRpb25zID0gdGhpcy5yb3dPcHRpb25zIHx8IHRoaXMuZ2V0RGVmYXVsdFJvd09wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlIHx8IDE7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICB9XG5cbiAgZ2V0RGVmYXVsdFJvd09wdGlvbnMoKSB7XG4gICAgcmV0dXJuIFt7IHZhbHVlOiAxMCwgbGFiZWw6ICcxMCcgfSwgeyB2YWx1ZTogMjUsIGxhYmVsOiAnMjUnIH0sIHsgdmFsdWU6IDUwLCBsYWJlbDogJzUwJyB9LCB7IHZhbHVlOiAxMDAsIGxhYmVsOiAnMTAwJyB9XTtcbiAgfVxuXG4gIG9uUGFnZVNpemVDaGFuZ2VkKGV2ZW50KSB7XG4gICAgdGhpcy5wYWdlID0gMTtcbiAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IGV2ZW50LnNlbGVjdGVkO1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdCh0aGlzLnBhZ2UpO1xuICAgIHRoaXMuaXRlbXNQZXJQYWdlQ2hhbmdlLmVtaXQodGhpcy5pdGVtc1BlclBhZ2UpO1xuICAgIHRoaXMub25QYWdlQ2hhbmdlLmVtaXQoe1xuICAgICAgcGFnZTogdGhpcy5wYWdlLFxuICAgICAgaXRlbXNQZXJQYWdlOiB0aGlzLml0ZW1zUGVyUGFnZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdFBhZ2UocGFnZTogbnVtYmVyLCBldmVudD86IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQodGhpcy5wYWdlKTtcbiAgICB0aGlzLm9uUGFnZUNoYW5nZS5lbWl0KHtcbiAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgIGl0ZW1zUGVyUGFnZTogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgfSk7XG4gIH1cblxuICBub1ByZXZpb3VzKCkge1xuICAgIHJldHVybiB0aGlzLnBhZ2UgPT09IDE7XG4gIH1cblxuICBub05leHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gdGhpcy50b3RhbFBhZ2VzO1xuICB9XG5cbiAgLy8gQ3JlYXRlIHBhZ2Ugb2JqZWN0IHVzZWQgaW4gdGVtcGxhdGVcbiAgbWFrZVBhZ2UobnVtOiBudW1iZXIsIHRleHQ6IHN0cmluZywgaXNBY3RpdmU6IGJvb2xlYW4pIHtcbiAgICByZXR1cm4geyBudW0sIHRleHQsIGFjdGl2ZTogaXNBY3RpdmUsIH0gYXMgUGFnZTtcbiAgfVxuXG4gIGdldFBhZ2VzKGN1cnJlbnRQYWdlOiBudW1iZXIsIHRvdGFsUGFnZXM6IG51bWJlcikge1xuICAgIGNvbnN0IHBhZ2VzOiBBcnJheTxQYWdlPiA9IFtdO1xuICAgIC8vIERlZmF1bHQgcGFnZSBsaW1pdHNcbiAgICBsZXQgc3RhcnRQYWdlID0gMTtcbiAgICBsZXQgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgY29uc3QgaXNNYXhTaXplZCA9IHRoaXMubWF4UGFnZXNEaXNwbGF5ZWQgPCB0b3RhbFBhZ2VzO1xuXG4gICAgLy8gcmVjb21wdXRlIGlmIG1heFBhZ2VzRGlzcGxheWVkXG4gICAgaWYgKGlzTWF4U2l6ZWQpIHtcbiAgICAgIC8vIEN1cnJlbnQgcGFnZSBpcyBkaXNwbGF5ZWQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdmlzaWJsZSBvbmVzXG4gICAgICBzdGFydFBhZ2UgPSBNYXRoLm1heChjdXJyZW50UGFnZSAtIE1hdGguZmxvb3IodGhpcy5tYXhQYWdlc0Rpc3BsYXllZCAvIDIpLCAxKTtcbiAgICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyB0aGlzLm1heFBhZ2VzRGlzcGxheWVkIC0gMTtcblxuICAgICAgLy8gQWRqdXN0IGlmIGxpbWl0IGlzIGV4Y2VlZGVkXG4gICAgICBpZiAoZW5kUGFnZSA+IHRvdGFsUGFnZXMpIHtcbiAgICAgICAgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICAgIHN0YXJ0UGFnZSA9IGVuZFBhZ2UgLSB0aGlzLm1heFBhZ2VzRGlzcGxheWVkICsgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgcGFnZSBudW1iZXIgbGlua3NcbiAgICBmb3IgKGxldCBudW0gPSBzdGFydFBhZ2U7IG51bSA8PSBlbmRQYWdlOyBudW0rKykge1xuICAgICAgY29uc3QgcGFnZSA9IHRoaXMubWFrZVBhZ2UobnVtLCBudW0udG9TdHJpbmcoKSwgbnVtID09PSBjdXJyZW50UGFnZSk7XG4gICAgICBwYWdlcy5wdXNoKHBhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gcGFnZXM7XG4gIH1cblxuICBjYWxjdWxhdGVUb3RhbFBhZ2VzKCkge1xuICAgIGNvbnN0IHRvdGFsUGFnZXMgPSB0aGlzLml0ZW1zUGVyUGFnZSA8IDEgPyAxIDogTWF0aC5jZWlsKHRoaXMudG90YWxJdGVtcyAvIHRoaXMuaXRlbXNQZXJQYWdlKTtcbiAgICByZXR1cm4gTWF0aC5tYXgodG90YWxQYWdlcyB8fCAwLCAxKTtcbiAgfVxufVxuIl19