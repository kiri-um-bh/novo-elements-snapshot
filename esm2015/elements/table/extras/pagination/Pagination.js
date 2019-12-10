/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/extras/pagination/Pagination.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
// APP
import { NovoLabelService } from '../../../../services/novo-label-service';
export class Pagination {
    /**
     * @param {?} labels
     */
    constructor(labels) {
        this.labels = labels;
        this.itemsPerPage = 10;
        this.pageChange = new EventEmitter();
        this.itemsPerPageChange = new EventEmitter();
        this.onPageChange = new EventEmitter();
        this.maxPagesDisplayed = 5;
    }
    /**
     * @return {?}
     */
    get disablePageSelection() {
        return this.pageSelectDisabled;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set disablePageSelection(val) {
        this.pageSelectDisabled = coerceBooleanProperty(val);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.label = this.label || this.labels.itemsPerPage;
        this.rowOptions = this.rowOptions || this.getDefaultRowOptions();
    }
    /**
     * @param {?=} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.page = this.page || 1;
        this.totalPages = this.calculateTotalPages();
        this.pages = this.getPages(this.page, this.totalPages);
    }
    /**
     * @return {?}
     */
    getDefaultRowOptions() {
        return [{ value: 10, label: '10' }, { value: 25, label: '25' }, { value: 50, label: '50' }, { value: 100, label: '100' }];
    }
    /**
     * @param {?} event
     * @return {?}
     */
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
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    noPrevious() {
        return this.page === 1;
    }
    /**
     * @return {?}
     */
    noNext() {
        return this.page === this.totalPages;
    }
    // Create page object used in template
    /**
     * @param {?} number
     * @param {?} text
     * @param {?} isActive
     * @return {?}
     */
    makePage(number, text, isActive) {
        return {
            number: number,
            text: text,
            active: isActive,
        };
    }
    /**
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    getPages(currentPage, totalPages) {
        /** @type {?} */
        let pages = [];
        // Default page limits
        /** @type {?} */
        let startPage = 1;
        /** @type {?} */
        let endPage = totalPages;
        /** @type {?} */
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
        for (let number = startPage; number <= endPage; number++) {
            /** @type {?} */
            const page = this.makePage(number, number.toString(), number === currentPage);
            pages.push(page);
        }
        return pages;
    }
    /**
     * @return {?}
     */
    calculateTotalPages() {
        /** @type {?} */
        const totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    }
}
Pagination.decorators = [
    { type: Component, args: [{
                selector: 'novo-pagination',
                template: `
        <h5 class="rows">{{label}}</h5>
        <novo-select [options]="rowOptions" [placeholder]="labels.select" [(ngModel)]="itemsPerPage" (onSelect)="onPageSizeChanged($event)" data-automation-id="pager-select"></novo-select>
        <span class="spacer"></span>
        <ul class="pager" data-automation-id="pager">
            <li class="page" (click)="selectPage(page-1)" [ngClass]="{'disabled': noPrevious()}"><i class="bhi-previous" data-automation-id="pager-previous"></i></li>
            <li class="page" [ngClass]="{active: p.number==page}" [class.disabled]="disablePageSelection" *ngFor="let p of pages" (click)="selectPage(p.number)">{{p.text}}</li>
            <li class="page" (click)="selectPage(page+1)" [ngClass]="{'disabled': noNext()}"><i class="bhi-next" data-automation-id="pager-next"></i></li>
        </ul>
  `
            }] }
];
/** @nocollapse */
Pagination.ctorParameters = () => [
    { type: NovoLabelService }
];
Pagination.propDecorators = {
    page: [{ type: Input }],
    totalItems: [{ type: Input }],
    itemsPerPage: [{ type: Input }],
    rowOptions: [{ type: Input }],
    label: [{ type: Input }],
    disablePageSelection: [{ type: Input }],
    pageChange: [{ type: Output }],
    itemsPerPageChange: [{ type: Output }],
    onPageChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    Pagination.prototype.page;
    /** @type {?} */
    Pagination.prototype.totalItems;
    /** @type {?} */
    Pagination.prototype.itemsPerPage;
    /** @type {?} */
    Pagination.prototype.rowOptions;
    /** @type {?} */
    Pagination.prototype.label;
    /** @type {?} */
    Pagination.prototype.pageChange;
    /** @type {?} */
    Pagination.prototype.itemsPerPageChange;
    /** @type {?} */
    Pagination.prototype.onPageChange;
    /** @type {?} */
    Pagination.prototype.pageSelectDisabled;
    /** @type {?} */
    Pagination.prototype.maxPagesDisplayed;
    /** @type {?} */
    Pagination.prototype.totalPages;
    /** @type {?} */
    Pagination.prototype.pages;
    /** @type {?} */
    Pagination.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJsZS9leHRyYXMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUU5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQWUzRSxNQUFNLE9BQU8sVUFBVTs7OztJQThCckIsWUFBbUIsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUF4QjNDLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBYTFCLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRCx1QkFBa0IsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUzRCxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3JELHNCQUFpQixHQUFXLENBQUMsQ0FBQztJQUlnQixDQUFDOzs7O0lBbkIvQyxJQUNJLG9CQUFvQjtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUNELElBQUksb0JBQW9CLENBQUMsR0FBWTtRQUNuQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQWVELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lB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QUMzQixRQUFRLEVBQUU7Ozs7Ozs7OztHQVNUO2FBQ0Y7Ozs7WUFkUSxnQkFBZ0I7OzttQkFnQnRCLEtBQUs7eUJBRUwsS0FBSzsyQkFFTCxLQUFLO3lCQUVMLEtBQUs7b0JBRUwsS0FBSzttQ0FFTCxLQUFLO3lCQU9MLE1BQU07aUNBRU4sTUFBTTsyQkFFTixNQUFNOzs7O0lBckJQLDBCQUNhOztJQUNiLGdDQUNtQjs7SUFDbkIsa0NBQzBCOztJQUMxQixnQ0FDZ0I7O0lBQ2hCLDJCQUNjOztJQVFkLGdDQUNtRDs7SUFDbkQsd0NBQzJEOztJQUMzRCxrQ0FDcUQ7O0lBRXJELHdDQUFtQzs7SUFDbkMsdUNBQThCOztJQUM5QixnQ0FBbUI7O0lBQ25CLDJCQUFrQjs7SUFFTiw0QkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoNSBjbGFzcz1cInJvd3NcIj57e2xhYmVsfX08L2g1PlxuICAgICAgICA8bm92by1zZWxlY3QgW29wdGlvbnNdPVwicm93T3B0aW9uc1wiIFtwbGFjZWhvbGRlcl09XCJsYWJlbHMuc2VsZWN0XCIgWyhuZ01vZGVsKV09XCJpdGVtc1BlclBhZ2VcIiAob25TZWxlY3QpPVwib25QYWdlU2l6ZUNoYW5nZWQoJGV2ZW50KVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInBhZ2VyLXNlbGVjdFwiPjwvbm92by1zZWxlY3Q+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3BhY2VyXCI+PC9zcGFuPlxuICAgICAgICA8dWwgY2xhc3M9XCJwYWdlclwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInBhZ2VyXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlXCIgKGNsaWNrKT1cInNlbGVjdFBhZ2UocGFnZS0xKVwiIFtuZ0NsYXNzXT1cInsnZGlzYWJsZWQnOiBub1ByZXZpb3VzKCl9XCI+PGkgY2xhc3M9XCJiaGktcHJldmlvdXNcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlci1wcmV2aW91c1wiPjwvaT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZVwiIFtuZ0NsYXNzXT1cInthY3RpdmU6IHAubnVtYmVyPT1wYWdlfVwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlUGFnZVNlbGVjdGlvblwiICpuZ0Zvcj1cImxldCBwIG9mIHBhZ2VzXCIgKGNsaWNrKT1cInNlbGVjdFBhZ2UocC5udW1iZXIpXCI+e3twLnRleHR9fTwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJwYWdlXCIgKGNsaWNrKT1cInNlbGVjdFBhZ2UocGFnZSsxKVwiIFtuZ0NsYXNzXT1cInsnZGlzYWJsZWQnOiBub05leHQoKX1cIj48aSBjbGFzcz1cImJoaS1uZXh0XCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXItbmV4dFwiPjwvaT48L2xpPlxuICAgICAgICA8L3VsPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICBwYWdlOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHRvdGFsSXRlbXM6IG51bWJlcjtcbiAgQElucHV0KClcbiAgaXRlbXNQZXJQYWdlOiBudW1iZXIgPSAxMDtcbiAgQElucHV0KClcbiAgcm93T3B0aW9uczogYW55O1xuICBASW5wdXQoKVxuICBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZVBhZ2VTZWxlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZVNlbGVjdERpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlUGFnZVNlbGVjdGlvbih2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnBhZ2VTZWxlY3REaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWwpO1xuICB9XG4gIEBPdXRwdXQoKVxuICBwYWdlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGl0ZW1zUGVyUGFnZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBvblBhZ2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBwYWdlU2VsZWN0RGlzYWJsZWQ6IGJvb2xlYW47XG4gIG1heFBhZ2VzRGlzcGxheWVkOiBudW1iZXIgPSA1O1xuICB0b3RhbFBhZ2VzOiBudW1iZXI7XG4gIHBhZ2VzOiBBcnJheTxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sYWJlbCA9IHRoaXMubGFiZWwgfHwgdGhpcy5sYWJlbHMuaXRlbXNQZXJQYWdlO1xuICAgIHRoaXMucm93T3B0aW9ucyA9IHRoaXMucm93T3B0aW9ucyB8fCB0aGlzLmdldERlZmF1bHRSb3dPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZSB8fCAxO1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgfVxuXG4gIGdldERlZmF1bHRSb3dPcHRpb25zKCkge1xuICAgIHJldHVybiBbeyB2YWx1ZTogMTAsIGxhYmVsOiAnMTAnIH0sIHsgdmFsdWU6IDI1LCBsYWJlbDogJzI1JyB9LCB7IHZhbHVlOiA1MCwgbGFiZWw6ICc1MCcgfSwgeyB2YWx1ZTogMTAwLCBsYWJlbDogJzEwMCcgfV07XG4gIH1cblxuICBvblBhZ2VTaXplQ2hhbmdlZChldmVudCkge1xuICAgIHRoaXMucGFnZSA9IDE7XG4gICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBldmVudC5zZWxlY3RlZDtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQodGhpcy5wYWdlKTtcbiAgICB0aGlzLml0ZW1zUGVyUGFnZUNoYW5nZS5lbWl0KHRoaXMuaXRlbXNQZXJQYWdlKTtcbiAgICB0aGlzLm9uUGFnZUNoYW5nZS5lbWl0KHtcbiAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgIGl0ZW1zUGVyUGFnZTogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RQYWdlKHBhZ2UsIGV2ZW50PzogYW55KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KHRoaXMucGFnZSk7XG4gICAgdGhpcy5vblBhZ2VDaGFuZ2UuZW1pdCh7XG4gICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICBpdGVtc1BlclBhZ2U6IHRoaXMuaXRlbXNQZXJQYWdlLFxuICAgIH0pO1xuICB9XG5cbiAgbm9QcmV2aW91cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlID09PSAxO1xuICB9XG5cbiAgbm9OZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnBhZ2UgPT09IHRoaXMudG90YWxQYWdlcztcbiAgfVxuXG4gIC8vIENyZWF0ZSBwYWdlIG9iamVjdCB1c2VkIGluIHRlbXBsYXRlXG4gIG1ha2VQYWdlKG51bWJlciwgdGV4dCwgaXNBY3RpdmUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbnVtYmVyOiBudW1iZXIsXG4gICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgYWN0aXZlOiBpc0FjdGl2ZSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0UGFnZXMoY3VycmVudFBhZ2UsIHRvdGFsUGFnZXMpIHtcbiAgICBsZXQgcGFnZXMgPSBbXTtcbiAgICAvLyBEZWZhdWx0IHBhZ2UgbGltaXRzXG4gICAgbGV0IHN0YXJ0UGFnZSA9IDE7XG4gICAgbGV0IGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgIGNvbnN0IGlzTWF4U2l6ZWQgPSB0aGlzLm1heFBhZ2VzRGlzcGxheWVkIDwgdG90YWxQYWdlcztcblxuICAgIC8vIHJlY29tcHV0ZSBpZiBtYXhQYWdlc0Rpc3BsYXllZFxuICAgIGlmIChpc01heFNpemVkKSB7XG4gICAgICAvLyBDdXJyZW50IHBhZ2UgaXMgZGlzcGxheWVkIGluIHRoZSBtaWRkbGUgb2YgdGhlIHZpc2libGUgb25lc1xuICAgICAgc3RhcnRQYWdlID0gTWF0aC5tYXgoY3VycmVudFBhZ2UgLSBNYXRoLmZsb29yKHRoaXMubWF4UGFnZXNEaXNwbGF5ZWQgLyAyKSwgMSk7XG4gICAgICBlbmRQYWdlID0gc3RhcnRQYWdlICsgdGhpcy5tYXhQYWdlc0Rpc3BsYXllZCAtIDE7XG5cbiAgICAgIC8vIEFkanVzdCBpZiBsaW1pdCBpcyBleGNlZWRlZFxuICAgICAgaWYgKGVuZFBhZ2UgPiB0b3RhbFBhZ2VzKSB7XG4gICAgICAgIGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgICAgICBzdGFydFBhZ2UgPSBlbmRQYWdlIC0gdGhpcy5tYXhQYWdlc0Rpc3BsYXllZCArIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHBhZ2UgbnVtYmVyIGxpbmtzXG4gICAgZm9yIChsZXQgbnVtYmVyID0gc3RhcnRQYWdlOyBudW1iZXIgPD0gZW5kUGFnZTsgbnVtYmVyKyspIHtcbiAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLm1ha2VQYWdlKG51bWJlciwgbnVtYmVyLnRvU3RyaW5nKCksIG51bWJlciA9PT0gY3VycmVudFBhZ2UpO1xuICAgICAgcGFnZXMucHVzaChwYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhZ2VzO1xuICB9XG5cbiAgY2FsY3VsYXRlVG90YWxQYWdlcygpIHtcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gdGhpcy5pdGVtc1BlclBhZ2UgPCAxID8gMSA6IE1hdGguY2VpbCh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLml0ZW1zUGVyUGFnZSk7XG4gICAgcmV0dXJuIE1hdGgubWF4KHRvdGFsUGFnZXMgfHwgMCwgMSk7XG4gIH1cbn1cbiJdfQ==