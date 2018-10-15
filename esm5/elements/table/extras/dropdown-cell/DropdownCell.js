/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, Input } from '@angular/core';
// APP
import { BaseRenderer } from '../base-renderer/BaseRenderer';
/**
 * @record
 */
export function INovoDropdownCellConfig() { }
if (false) {
    /** @type {?|undefined} */
    INovoDropdownCellConfig.prototype.category;
    /** @type {?|undefined} */
    INovoDropdownCellConfig.prototype.callback;
    /** @type {?} */
    INovoDropdownCellConfig.prototype.options;
}
var NovoDropdownCell = /** @class */ (function (_super) {
    tslib_1.__extends(NovoDropdownCell, _super);
    function NovoDropdownCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    NovoDropdownCell.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // Check for and fix bad config
        if (!this.meta.dropdownCellConfig) {
            throw new Error('Missing "dropdownCellConfig" on the column setup');
        }
    };
    /**
     * @param {?} config
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    NovoDropdownCell.prototype.onClick = /**
     * @param {?} config
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    function (config, option, value) {
        /** @type {?} */
        var callback = option.callback || config.callback;
        callback(this.data, value || option);
    };
    NovoDropdownCell.decorators = [
        { type: Component, args: [{
                    selector: 'novo-dropdown-cell',
                    template: "\n    <novo-dropdown parentScrollSelector=\".table-container\" containerClass=\"novo-table-dropdown-cell\">\n      <button type=\"button\" theme=\"secondary\" icon=\"collapse\" inverse>\n        <span data-automation-id=\"novo-dropdown-cell-value\">{{ value }}</span>\n      </button>\n      <list>\n        <ng-container *ngFor=\"let config of meta.dropdownCellConfig; let i = index\">\n          <dropdown-item-header *ngIf=\"config.category\">{{ config.category }}</dropdown-item-header>\n          <item *ngFor=\"let option of config.options\" (action)=\"onClick(config, option, option.value)\"\n                [class.active]=\"(option || option.value) === value\">\n            <span [attr.data-automation-id]=\"option.label || option\">{{ option.label || option }}</span>\n            <i *ngIf=\"(option || option.value) === value\" class=\"bhi-check\"></i>\n          </item>\n          <hr *ngIf=\"i < meta.dropdownCellConfig.length - 1\"/>\n        </ng-container>\n      </list>\n    </novo-dropdown>\n  "
                }] }
    ];
    NovoDropdownCell.propDecorators = {
        meta: [{ type: Input }],
        value: [{ type: Input }]
    };
    return NovoDropdownCell;
}(BaseRenderer));
export { NovoDropdownCell };
if (false) {
    /** @type {?} */
    NovoDropdownCell.prototype.meta;
    /** @type {?} */
    NovoDropdownCell.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcGRvd25DZWxsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RhYmxlL2V4dHJhcy9kcm9wZG93bi1jZWxsL0Ryb3Bkb3duQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFFekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBRTdELDZDQUlDOzs7SUFIQywyQ0FBa0I7O0lBQ2xCLDJDQUFvQjs7SUFDcEIsMENBQThFOztBQUdoRjtJQXFCc0MsNENBQVk7SUFyQmxEOztJQXNDQSxDQUFDOzs7O0lBWFEsbUNBQVE7OztJQUFmO1FBQ0UsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7Ozs7Ozs7SUFFTSxrQ0FBTzs7Ozs7O0lBQWQsVUFBZSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUs7O1lBQzlCLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxRQUFRO1FBQ2pELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssSUFBSSxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOztnQkFyQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSx5L0JBaUJUO2lCQUNGOzs7dUJBRUUsS0FBSzt3QkFFTCxLQUFLOztJQWNSLHVCQUFDO0NBQUEsQUF0Q0QsQ0FxQnNDLFlBQVksR0FpQmpEO1NBakJZLGdCQUFnQjs7O0lBQzNCLGdDQUNVOztJQUNWLGlDQUNXIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgQmFzZVJlbmRlcmVyIH0gZnJvbSAnLi4vYmFzZS1yZW5kZXJlci9CYXNlUmVuZGVyZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIElOb3ZvRHJvcGRvd25DZWxsQ29uZmlnIHtcbiAgY2F0ZWdvcnk/OiBzdHJpbmc7XG4gIGNhbGxiYWNrPzogRnVuY3Rpb247XG4gIG9wdGlvbnM6ICh7IGxhYmVsPzogc3RyaW5nOyB2YWx1ZT86IHN0cmluZzsgY2FsbGJhY2s/OiBGdW5jdGlvbiB9IHwgc3RyaW5nKVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRyb3Bkb3duLWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxub3ZvLWRyb3Bkb3duIHBhcmVudFNjcm9sbFNlbGVjdG9yPVwiLnRhYmxlLWNvbnRhaW5lclwiIGNvbnRhaW5lckNsYXNzPVwibm92by10YWJsZS1kcm9wZG93bi1jZWxsXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aGVtZT1cInNlY29uZGFyeVwiIGljb249XCJjb2xsYXBzZVwiIGludmVyc2U+XG4gICAgICAgIDxzcGFuIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZHJvcGRvd24tY2VsbC12YWx1ZVwiPnt7IHZhbHVlIH19PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8bGlzdD5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29uZmlnIG9mIG1ldGEuZHJvcGRvd25DZWxsQ29uZmlnOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgPGRyb3Bkb3duLWl0ZW0taGVhZGVyICpuZ0lmPVwiY29uZmlnLmNhdGVnb3J5XCI+e3sgY29uZmlnLmNhdGVnb3J5IH19PC9kcm9wZG93bi1pdGVtLWhlYWRlcj5cbiAgICAgICAgICA8aXRlbSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbmZpZy5vcHRpb25zXCIgKGFjdGlvbik9XCJvbkNsaWNrKGNvbmZpZywgb3B0aW9uLCBvcHRpb24udmFsdWUpXCJcbiAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIihvcHRpb24gfHwgb3B0aW9uLnZhbHVlKSA9PT0gdmFsdWVcIj5cbiAgICAgICAgICAgIDxzcGFuIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJvcHRpb24ubGFiZWwgfHwgb3B0aW9uXCI+e3sgb3B0aW9uLmxhYmVsIHx8IG9wdGlvbiB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiKG9wdGlvbiB8fCBvcHRpb24udmFsdWUpID09PSB2YWx1ZVwiIGNsYXNzPVwiYmhpLWNoZWNrXCI+PC9pPlxuICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICA8aHIgKm5nSWY9XCJpIDwgbWV0YS5kcm9wZG93bkNlbGxDb25maWcubGVuZ3RoIC0gMVwiLz5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L2xpc3Q+XG4gICAgPC9ub3ZvLWRyb3Bkb3duPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRHJvcGRvd25DZWxsIGV4dGVuZHMgQmFzZVJlbmRlcmVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgbWV0YTogYW55O1xuICBASW5wdXQoKVxuICB2YWx1ZTogYW55O1xuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBDaGVjayBmb3IgYW5kIGZpeCBiYWQgY29uZmlnXG4gICAgaWYgKCF0aGlzLm1ldGEuZHJvcGRvd25DZWxsQ29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgXCJkcm9wZG93bkNlbGxDb25maWdcIiBvbiB0aGUgY29sdW1uIHNldHVwJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQ2xpY2soY29uZmlnLCBvcHRpb24sIHZhbHVlKTogdm9pZCB7XG4gICAgbGV0IGNhbGxiYWNrID0gb3B0aW9uLmNhbGxiYWNrIHx8IGNvbmZpZy5jYWxsYmFjaztcbiAgICBjYWxsYmFjayh0aGlzLmRhdGEsIHZhbHVlIHx8IG9wdGlvbik7XG4gIH1cbn1cbiJdfQ==