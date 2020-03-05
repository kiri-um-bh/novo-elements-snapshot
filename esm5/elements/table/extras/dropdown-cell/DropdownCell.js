/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/extras/dropdown-cell/DropdownCell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcGRvd25DZWxsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RhYmxlL2V4dHJhcy9kcm9wZG93bi1jZWxsL0Ryb3Bkb3duQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7OztBQUU3RCw2Q0FJQzs7O0lBSEMsMkNBQWtCOztJQUNsQiwyQ0FBb0I7O0lBQ3BCLDBDQUE4RTs7QUFHaEY7SUFxQnNDLDRDQUFZO0lBckJsRDs7SUFzQ0EsQ0FBQzs7OztJQVhRLG1DQUFROzs7SUFBZjtRQUNFLCtCQUErQjtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDOzs7Ozs7O0lBRU0sa0NBQU87Ozs7OztJQUFkLFVBQWUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLOztZQUM1QixRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUTtRQUNuRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLElBQUksTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Z0JBckNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUseS9CQWlCVDtpQkFDRjs7O3VCQUVFLEtBQUs7d0JBRUwsS0FBSzs7SUFjUix1QkFBQztDQUFBLEFBdENELENBcUJzQyxZQUFZLEdBaUJqRDtTQWpCWSxnQkFBZ0I7OztJQUMzQixnQ0FDVTs7SUFDVixpQ0FDVyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEJhc2VSZW5kZXJlciB9IGZyb20gJy4uL2Jhc2UtcmVuZGVyZXIvQmFzZVJlbmRlcmVyJztcblxuZXhwb3J0IGludGVyZmFjZSBJTm92b0Ryb3Bkb3duQ2VsbENvbmZpZyB7XG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xuICBjYWxsYmFjaz86IEZ1bmN0aW9uO1xuICBvcHRpb25zOiAoeyBsYWJlbD86IHN0cmluZzsgdmFsdWU/OiBzdHJpbmc7IGNhbGxiYWNrPzogRnVuY3Rpb24gfSB8IHN0cmluZylbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kcm9wZG93bi1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bm92by1kcm9wZG93biBwYXJlbnRTY3JvbGxTZWxlY3Rvcj1cIi50YWJsZS1jb250YWluZXJcIiBjb250YWluZXJDbGFzcz1cIm5vdm8tdGFibGUtZHJvcGRvd24tY2VsbFwiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGhlbWU9XCJzZWNvbmRhcnlcIiBpY29uPVwiY29sbGFwc2VcIiBpbnZlcnNlPlxuICAgICAgICA8c3BhbiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRyb3Bkb3duLWNlbGwtdmFsdWVcIj57eyB2YWx1ZSB9fTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGxpc3Q+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbmZpZyBvZiBtZXRhLmRyb3Bkb3duQ2VsbENvbmZpZzsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgIDxkcm9wZG93bi1pdGVtLWhlYWRlciAqbmdJZj1cImNvbmZpZy5jYXRlZ29yeVwiPnt7IGNvbmZpZy5jYXRlZ29yeSB9fTwvZHJvcGRvd24taXRlbS1oZWFkZXI+XG4gICAgICAgICAgPGl0ZW0gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb25maWcub3B0aW9uc1wiIChhY3Rpb24pPVwib25DbGljayhjb25maWcsIG9wdGlvbiwgb3B0aW9uLnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCIob3B0aW9uIHx8IG9wdGlvbi52YWx1ZSkgPT09IHZhbHVlXCI+XG4gICAgICAgICAgICA8c3BhbiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwib3B0aW9uLmxhYmVsIHx8IG9wdGlvblwiPnt7IG9wdGlvbi5sYWJlbCB8fCBvcHRpb24gfX08L3NwYW4+XG4gICAgICAgICAgICA8aSAqbmdJZj1cIihvcHRpb24gfHwgb3B0aW9uLnZhbHVlKSA9PT0gdmFsdWVcIiBjbGFzcz1cImJoaS1jaGVja1wiPjwvaT5cbiAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgPGhyICpuZ0lmPVwiaSA8IG1ldGEuZHJvcGRvd25DZWxsQ29uZmlnLmxlbmd0aCAtIDFcIi8+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9saXN0PlxuICAgIDwvbm92by1kcm9wZG93bj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0Ryb3Bkb3duQ2VsbCBleHRlbmRzIEJhc2VSZW5kZXJlciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIG1ldGE6IGFueTtcbiAgQElucHV0KClcbiAgdmFsdWU6IGFueTtcblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gQ2hlY2sgZm9yIGFuZCBmaXggYmFkIGNvbmZpZ1xuICAgIGlmICghdGhpcy5tZXRhLmRyb3Bkb3duQ2VsbENvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFwiZHJvcGRvd25DZWxsQ29uZmlnXCIgb24gdGhlIGNvbHVtbiBzZXR1cCcpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNsaWNrKGNvbmZpZywgb3B0aW9uLCB2YWx1ZSk6IHZvaWQge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gb3B0aW9uLmNhbGxiYWNrIHx8IGNvbmZpZy5jYWxsYmFjaztcbiAgICBjYWxsYmFjayh0aGlzLmRhdGEsIHZhbHVlIHx8IG9wdGlvbik7XG4gIH1cbn1cbiJdfQ==