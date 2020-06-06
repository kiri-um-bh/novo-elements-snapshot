/**
 * @fileoverview added by tsickle
 * Generated from: elements/data-table/configure-columns/configure-columns-dropdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, } from '@angular/core';
// APP
import { BasePickerResults } from '../../picker/extras/base-picker-results/BasePickerResults';
export class ConfigureColumnsDropdown extends BasePickerResults {
    /**
     * @param {?} element
     * @param {?} ref
     */
    constructor(element, ref) {
        super(element, ref);
        this.applyColumnConfig = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.matches = this.columns;
    }
    /**
     * @param {?=} emit
     * @return {?}
     */
    saveColumns(emit = true) {
        if (this.columns) {
            /** @type {?} */
            const enabledColumns = this.columns.filter((/**
             * @param {?} column
             * @return {?}
             */
            (column) => column.enabled));
            this.displayedColumns = [...enabledColumns.map((/**
                 * @param {?} column
                 * @return {?}
                 */
                (column) => column.id))];
            this.ref.markForCheck();
            if (emit) {
                this.applyColumnConfig.emit(this.displayedColumns);
            }
        }
        this.clearQuickSearch();
    }
    /**
     * @return {?}
     */
    clearQuickSearch() {
        this.term = '';
    }
    /**
     * @return {?}
     */
    processSearch() {
        this.matches = this.columns.filter((/**
         * @param {?} column
         * @return {?}
         */
        (column) => column.label.toLowerCase().includes(this.term.toLowerCase())));
        this.ref.markForCheck();
    }
}
ConfigureColumnsDropdown.decorators = [
    { type: Component, args: [{
                selector: 'configure-columns-dropdown',
                template: "<novo-dropdown side=\"left\" containerClass=\"configure-columns-dropdown\">\r\n    <button theme=\"secondary\"\r\n            icon=\"collapse\"><i class=\"bhi-columns\"></i>Columns</button>\r\n    <div class=\"configure-columns-dropdown-list-options\">\r\n        <div class=\"picker-input-filter\">\r\n            <div class=\"input-container\">\r\n                <input [(ngModel)]=\"term\" type=\"text\">\r\n                <i class=\"bhi-search\" *ngIf=\"term === ''\"></i>\r\n                <i class=\"bhi-times\" *ngIf=\"term !== ''\" (click)=\"clearQuickSearch()\"></i>\r\n            </div>\r\n        </div>\r\n        <!--section class=\"picker-loading\" *ngIf=\"isLoading && !matches?.length\">\r\n            <novo-loading theme=\"line\"></novo-loading>\r\n        </section-->\r\n        <list class=\"results-list\" direction=\"vertical\" *ngIf=\"matches?.length > 0 && !hasError\">\r\n            <item keepOpen=\"true\" *ngFor=\"let column of matches\">\r\n                <item-title>\r\n                    <span class=\"column-name\">\r\n                        <novo-checkbox [(ngModel)]=\"column.enabled\"></novo-checkbox>\r\n                        <span>{{ column.label }}</span>\r\n                    </span>\r\n                </item-title>\r\n            </item>\r\n        </list>\r\n    </div>\r\n    <item>\r\n        <div class=\"configure-columns-footer\">\r\n        <button theme=\"standard\"\r\n                (click)=\"clearQuickSearch()\">Cancel</button>\r\n        <button theme=\"primary\"\r\n                icon=\"check\"\r\n                (click)=\"saveColumns()\">Save</button>\r\n        </div>\r\n    </item>\r\n\r\n</novo-dropdown>\r\n"
            }] }
];
/** @nocollapse */
ConfigureColumnsDropdown.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
ConfigureColumnsDropdown.propDecorators = {
    columns: [{ type: Input }],
    applyColumnConfig: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ConfigureColumnsDropdown.prototype.columns;
    /** @type {?} */
    ConfigureColumnsDropdown.prototype.displayedColumns;
    /** @type {?} */
    ConfigureColumnsDropdown.prototype.applyColumnConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJlLWNvbHVtbnMtZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvY29uZmlndXJlLWNvbHVtbnMvY29uZmlndXJlLWNvbHVtbnMtZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDSCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sR0FDVCxNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFNOUYsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGlCQUFpQjs7Ozs7SUFPM0QsWUFDSSxPQUFtQixFQUNuQixHQUFzQjtRQUV0QixLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBTmQsc0JBQWlCLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7SUFPakYsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUk7UUFDbkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFOztrQkFDUixjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUM7WUFDM0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsR0FBRyxjQUFjLENBQUMsR0FBRzs7OztnQkFBQyxDQUFDLE1BQVcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4QixJQUFJLElBQUksRUFBRTtnQkFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ3REO1NBQ0o7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELGFBQWE7UUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUM3RyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVCLENBQUM7OztZQXpDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsaXFEQUFnRDthQUNuRDs7OztZQVpHLFVBQVU7WUFGVixpQkFBaUI7OztzQkFnQmhCLEtBQUs7Z0NBSUwsTUFBTTs7OztJQUpQLDJDQUFzQjs7SUFFdEIsb0RBQXdCOztJQUV4QixxREFBaUYiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcclxuaW1wb3J0IHtcclxuICAgIENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIElucHV0LFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBBUFBcclxuaW1wb3J0IHsgQmFzZVBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi8uLi9waWNrZXIvZXh0cmFzL2Jhc2UtcGlja2VyLXJlc3VsdHMvQmFzZVBpY2tlclJlc3VsdHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvbmZpZ3VyZS1jb2x1bW5zLWRyb3Bkb3duJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb25maWd1cmUtY29sdW1ucy1kcm9wZG93bi5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyZUNvbHVtbnNEcm9wZG93biBleHRlbmRzIEJhc2VQaWNrZXJSZXN1bHRzIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIGNvbHVtbnM6IGFueTtcclxuXHJcbiAgICBwdWJsaWMgZGlzcGxheWVkQ29sdW1ucztcclxuXHJcbiAgICBAT3V0cHV0KCkgYXBwbHlDb2x1bW5Db25maWc6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihlbGVtZW50LCByZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuY29sdW1ucztcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQ29sdW1ucyhlbWl0ID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbHVtbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZW5hYmxlZENvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2x1bW46IGFueSkgPT4gY29sdW1uLmVuYWJsZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBbLi4uZW5hYmxlZENvbHVtbnMubWFwKChjb2x1bW46IGFueSkgPT4gY29sdW1uLmlkKV07XHJcbiAgICAgICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgICBpZiAoZW1pdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseUNvbHVtbkNvbmZpZy5lbWl0KHRoaXMuZGlzcGxheWVkQ29sdW1ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbGVhclF1aWNrU2VhcmNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJRdWlja1NlYXJjaCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRlcm0gPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBwcm9jZXNzU2VhcmNoKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gY29sdW1uLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy50ZXJtLnRvTG93ZXJDYXNlKCkpKTtcclxuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxufVxyXG4iXX0=