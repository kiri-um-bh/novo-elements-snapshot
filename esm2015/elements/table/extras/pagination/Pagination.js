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
            number,
            text,
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
        const pages = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJsZS9leHRyYXMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUU5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQWUzRSxNQUFNLE9BQU8sVUFBVTs7OztJQThCckIsWUFBbUIsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUF4QjNDLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBYTFCLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRCx1QkFBa0IsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUzRCxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3JELHNCQUFpQixHQUFXLENBQUMsQ0FBQztJQUlnQixDQUFDOzs7O0lBbkIvQyxJQUNJLG9CQUFvQjtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUNELElBQUksb0JBQW9CLENBQUMsR0FBWTtRQUNuQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQWVELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lB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Ozs7R0FTVDthQUNGOzs7O1lBZFEsZ0JBQWdCOzs7bUJBZ0J0QixLQUFLO3lCQUVMLEtBQUs7MkJBRUwsS0FBSzt5QkFFTCxLQUFLO29CQUVMLEtBQUs7bUNBRUwsS0FBSzt5QkFPTCxNQUFNO2lDQUVOLE1BQU07MkJBRU4sTUFBTTs7OztJQXJCUCwwQkFDYTs7SUFDYixnQ0FDbUI7O0lBQ25CLGtDQUMwQjs7SUFDMUIsZ0NBQ2dCOztJQUNoQiwyQkFDYzs7SUFRZCxnQ0FDbUQ7O0lBQ25ELHdDQUMyRDs7SUFDM0Qsa0NBQ3FEOztJQUVyRCx3Q0FBbUM7O0lBQ25DLHVDQUE4Qjs7SUFDOUIsZ0NBQW1COztJQUNuQiwyQkFBa0I7O0lBRU4sNEJBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDUgY2xhc3M9XCJyb3dzXCI+e3tsYWJlbH19PC9oNT5cbiAgICAgICAgPG5vdm8tc2VsZWN0IFtvcHRpb25zXT1cInJvd09wdGlvbnNcIiBbcGxhY2Vob2xkZXJdPVwibGFiZWxzLnNlbGVjdFwiIFsobmdNb2RlbCldPVwiaXRlbXNQZXJQYWdlXCIgKG9uU2VsZWN0KT1cIm9uUGFnZVNpemVDaGFuZ2VkKCRldmVudClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlci1zZWxlY3RcIj48L25vdm8tc2VsZWN0PlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNwYWNlclwiPjwvc3Bhbj5cbiAgICAgICAgPHVsIGNsYXNzPVwicGFnZXJcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlclwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZVwiIChjbGljayk9XCJzZWxlY3RQYWdlKHBhZ2UtMSlcIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkJzogbm9QcmV2aW91cygpfVwiPjxpIGNsYXNzPVwiYmhpLXByZXZpb3VzXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZXItcHJldmlvdXNcIj48L2k+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInBhZ2VcIiBbbmdDbGFzc109XCJ7YWN0aXZlOiBwLm51bWJlcj09cGFnZX1cIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZVBhZ2VTZWxlY3Rpb25cIiAqbmdGb3I9XCJsZXQgcCBvZiBwYWdlc1wiIChjbGljayk9XCJzZWxlY3RQYWdlKHAubnVtYmVyKVwiPnt7cC50ZXh0fX08L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFnZVwiIChjbGljayk9XCJzZWxlY3RQYWdlKHBhZ2UrMSlcIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkJzogbm9OZXh0KCl9XCI+PGkgY2xhc3M9XCJiaGktbmV4dFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInBhZ2VyLW5leHRcIj48L2k+PC9saT5cbiAgICAgICAgPC91bD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbiBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgcGFnZTogbnVtYmVyO1xuICBASW5wdXQoKVxuICB0b3RhbEl0ZW1zOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGl0ZW1zUGVyUGFnZTogbnVtYmVyID0gMTA7XG4gIEBJbnB1dCgpXG4gIHJvd09wdGlvbnM6IGFueTtcbiAgQElucHV0KClcbiAgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVQYWdlU2VsZWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2VTZWxlY3REaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZVBhZ2VTZWxlY3Rpb24odmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5wYWdlU2VsZWN0RGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsKTtcbiAgfVxuICBAT3V0cHV0KClcbiAgcGFnZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBpdGVtc1BlclBhZ2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25QYWdlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgcGFnZVNlbGVjdERpc2FibGVkOiBib29sZWFuO1xuICBtYXhQYWdlc0Rpc3BsYXllZDogbnVtYmVyID0gNTtcbiAgdG90YWxQYWdlczogbnVtYmVyO1xuICBwYWdlczogQXJyYXk8YW55PjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGFiZWwgPSB0aGlzLmxhYmVsIHx8IHRoaXMubGFiZWxzLml0ZW1zUGVyUGFnZTtcbiAgICB0aGlzLnJvd09wdGlvbnMgPSB0aGlzLnJvd09wdGlvbnMgfHwgdGhpcy5nZXREZWZhdWx0Um93T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2UgfHwgMTtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gIH1cblxuICBnZXREZWZhdWx0Um93T3B0aW9ucygpIHtcbiAgICByZXR1cm4gW3sgdmFsdWU6IDEwLCBsYWJlbDogJzEwJyB9LCB7IHZhbHVlOiAyNSwgbGFiZWw6ICcyNScgfSwgeyB2YWx1ZTogNTAsIGxhYmVsOiAnNTAnIH0sIHsgdmFsdWU6IDEwMCwgbGFiZWw6ICcxMDAnIH1dO1xuICB9XG5cbiAgb25QYWdlU2l6ZUNoYW5nZWQoZXZlbnQpIHtcbiAgICB0aGlzLnBhZ2UgPSAxO1xuICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gZXZlbnQuc2VsZWN0ZWQ7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KHRoaXMucGFnZSk7XG4gICAgdGhpcy5pdGVtc1BlclBhZ2VDaGFuZ2UuZW1pdCh0aGlzLml0ZW1zUGVyUGFnZSk7XG4gICAgdGhpcy5vblBhZ2VDaGFuZ2UuZW1pdCh7XG4gICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICBpdGVtc1BlclBhZ2U6IHRoaXMuaXRlbXNQZXJQYWdlLFxuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0UGFnZShwYWdlLCBldmVudD86IGFueSkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdCh0aGlzLnBhZ2UpO1xuICAgIHRoaXMub25QYWdlQ2hhbmdlLmVtaXQoe1xuICAgICAgcGFnZTogdGhpcy5wYWdlLFxuICAgICAgaXRlbXNQZXJQYWdlOiB0aGlzLml0ZW1zUGVyUGFnZSxcbiAgICB9KTtcbiAgfVxuXG4gIG5vUHJldmlvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gMTtcbiAgfVxuXG4gIG5vTmV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlID09PSB0aGlzLnRvdGFsUGFnZXM7XG4gIH1cblxuICAvLyBDcmVhdGUgcGFnZSBvYmplY3QgdXNlZCBpbiB0ZW1wbGF0ZVxuICBtYWtlUGFnZShudW1iZXIsIHRleHQsIGlzQWN0aXZlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG51bWJlcixcbiAgICAgIHRleHQsXG4gICAgICBhY3RpdmU6IGlzQWN0aXZlLFxuICAgIH07XG4gIH1cblxuICBnZXRQYWdlcyhjdXJyZW50UGFnZSwgdG90YWxQYWdlcykge1xuICAgIGNvbnN0IHBhZ2VzID0gW107XG4gICAgLy8gRGVmYXVsdCBwYWdlIGxpbWl0c1xuICAgIGxldCBzdGFydFBhZ2UgPSAxO1xuICAgIGxldCBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICBjb25zdCBpc01heFNpemVkID0gdGhpcy5tYXhQYWdlc0Rpc3BsYXllZCA8IHRvdGFsUGFnZXM7XG5cbiAgICAvLyByZWNvbXB1dGUgaWYgbWF4UGFnZXNEaXNwbGF5ZWRcbiAgICBpZiAoaXNNYXhTaXplZCkge1xuICAgICAgLy8gQ3VycmVudCBwYWdlIGlzIGRpc3BsYXllZCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB2aXNpYmxlIG9uZXNcbiAgICAgIHN0YXJ0UGFnZSA9IE1hdGgubWF4KGN1cnJlbnRQYWdlIC0gTWF0aC5mbG9vcih0aGlzLm1heFBhZ2VzRGlzcGxheWVkIC8gMiksIDEpO1xuICAgICAgZW5kUGFnZSA9IHN0YXJ0UGFnZSArIHRoaXMubWF4UGFnZXNEaXNwbGF5ZWQgLSAxO1xuXG4gICAgICAvLyBBZGp1c3QgaWYgbGltaXQgaXMgZXhjZWVkZWRcbiAgICAgIGlmIChlbmRQYWdlID4gdG90YWxQYWdlcykge1xuICAgICAgICBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICAgICAgc3RhcnRQYWdlID0gZW5kUGFnZSAtIHRoaXMubWF4UGFnZXNEaXNwbGF5ZWQgKyAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBwYWdlIG51bWJlciBsaW5rc1xuICAgIGZvciAobGV0IG51bWJlciA9IHN0YXJ0UGFnZTsgbnVtYmVyIDw9IGVuZFBhZ2U7IG51bWJlcisrKSB7XG4gICAgICBjb25zdCBwYWdlID0gdGhpcy5tYWtlUGFnZShudW1iZXIsIG51bWJlci50b1N0cmluZygpLCBudW1iZXIgPT09IGN1cnJlbnRQYWdlKTtcbiAgICAgIHBhZ2VzLnB1c2gocGFnZSk7XG4gICAgfVxuICAgIHJldHVybiBwYWdlcztcbiAgfVxuXG4gIGNhbGN1bGF0ZVRvdGFsUGFnZXMoKSB7XG4gICAgY29uc3QgdG90YWxQYWdlcyA9IHRoaXMuaXRlbXNQZXJQYWdlIDwgMSA/IDEgOiBNYXRoLmNlaWwodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5pdGVtc1BlclBhZ2UpO1xuICAgIHJldHVybiBNYXRoLm1heCh0b3RhbFBhZ2VzIHx8IDAsIDEpO1xuICB9XG59XG4iXX0=