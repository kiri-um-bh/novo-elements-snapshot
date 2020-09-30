/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class NovoDropdownCell extends BaseRenderer {
    /**
     * @return {?}
     */
    ngOnInit() {
        // Check for and fix bad config
        if (!this.meta.dropdownCellConfig) {
            throw new Error('Missing "dropdownCellConfig" on the column setup');
        }
    }
    /**
     * @param {?} config
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    onClick(config, option, value) {
        /** @type {?} */
        let callback = option.callback || config.callback;
        callback(this.data, value || option);
    }
}
NovoDropdownCell.decorators = [
    { type: Component, args: [{
                selector: 'novo-dropdown-cell',
                template: `
    <novo-dropdown parentScrollSelector=".table-container" containerClass="novo-table-dropdown-cell">
      <button type="button" theme="secondary" icon="collapse" inverse>
        <span data-automation-id="novo-dropdown-cell-value">{{ value }}</span>
      </button>
      <list>
        <ng-container *ngFor="let config of meta.dropdownCellConfig; let i = index">
          <dropdown-item-header *ngIf="config.category">{{ config.category }}</dropdown-item-header>
          <item *ngFor="let option of config.options" (action)="onClick(config, option, option.value)"
                [class.active]="(option || option.value) === value">
            <span [attr.data-automation-id]="option.label || option">{{ option.label || option }}</span>
            <i *ngIf="(option || option.value) === value" class="bhi-check"></i>
          </item>
          <hr *ngIf="i < meta.dropdownCellConfig.length - 1"/>
        </ng-container>
      </list>
    </novo-dropdown>
  `
            }] }
];
NovoDropdownCell.propDecorators = {
    meta: [{ type: Input }],
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoDropdownCell.prototype.meta;
    /** @type {?} */
    NovoDropdownCell.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcGRvd25DZWxsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RhYmxlL2V4dHJhcy9kcm9wZG93bi1jZWxsL0Ryb3Bkb3duQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQUV6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFFN0QsNkNBSUM7OztJQUhDLDJDQUFrQjs7SUFDbEIsMkNBQW9COztJQUNwQiwwQ0FBOEU7O0FBd0JoRixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsWUFBWTs7OztJQU16QyxRQUFRO1FBQ2IsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7Ozs7Ozs7SUFFTSxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLOztZQUM5QixRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUTtRQUNqRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLElBQUksTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBckNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJUO2FBQ0Y7OzttQkFFRSxLQUFLO29CQUVMLEtBQUs7Ozs7SUFGTixnQ0FDVTs7SUFDVixpQ0FDVyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEJhc2VSZW5kZXJlciB9IGZyb20gJy4uL2Jhc2UtcmVuZGVyZXIvQmFzZVJlbmRlcmVyJztcblxuZXhwb3J0IGludGVyZmFjZSBJTm92b0Ryb3Bkb3duQ2VsbENvbmZpZyB7XG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xuICBjYWxsYmFjaz86IEZ1bmN0aW9uO1xuICBvcHRpb25zOiAoeyBsYWJlbD86IHN0cmluZzsgdmFsdWU/OiBzdHJpbmc7IGNhbGxiYWNrPzogRnVuY3Rpb24gfSB8IHN0cmluZylbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kcm9wZG93bi1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bm92by1kcm9wZG93biBwYXJlbnRTY3JvbGxTZWxlY3Rvcj1cIi50YWJsZS1jb250YWluZXJcIiBjb250YWluZXJDbGFzcz1cIm5vdm8tdGFibGUtZHJvcGRvd24tY2VsbFwiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGhlbWU9XCJzZWNvbmRhcnlcIiBpY29uPVwiY29sbGFwc2VcIiBpbnZlcnNlPlxuICAgICAgICA8c3BhbiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRyb3Bkb3duLWNlbGwtdmFsdWVcIj57eyB2YWx1ZSB9fTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGxpc3Q+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbmZpZyBvZiBtZXRhLmRyb3Bkb3duQ2VsbENvbmZpZzsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgIDxkcm9wZG93bi1pdGVtLWhlYWRlciAqbmdJZj1cImNvbmZpZy5jYXRlZ29yeVwiPnt7IGNvbmZpZy5jYXRlZ29yeSB9fTwvZHJvcGRvd24taXRlbS1oZWFkZXI+XG4gICAgICAgICAgPGl0ZW0gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb25maWcub3B0aW9uc1wiIChhY3Rpb24pPVwib25DbGljayhjb25maWcsIG9wdGlvbiwgb3B0aW9uLnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCIob3B0aW9uIHx8IG9wdGlvbi52YWx1ZSkgPT09IHZhbHVlXCI+XG4gICAgICAgICAgICA8c3BhbiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwib3B0aW9uLmxhYmVsIHx8IG9wdGlvblwiPnt7IG9wdGlvbi5sYWJlbCB8fCBvcHRpb24gfX08L3NwYW4+XG4gICAgICAgICAgICA8aSAqbmdJZj1cIihvcHRpb24gfHwgb3B0aW9uLnZhbHVlKSA9PT0gdmFsdWVcIiBjbGFzcz1cImJoaS1jaGVja1wiPjwvaT5cbiAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgPGhyICpuZ0lmPVwiaSA8IG1ldGEuZHJvcGRvd25DZWxsQ29uZmlnLmxlbmd0aCAtIDFcIi8+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9saXN0PlxuICAgIDwvbm92by1kcm9wZG93bj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0Ryb3Bkb3duQ2VsbCBleHRlbmRzIEJhc2VSZW5kZXJlciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIG1ldGE6IGFueTtcbiAgQElucHV0KClcbiAgdmFsdWU6IGFueTtcblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gQ2hlY2sgZm9yIGFuZCBmaXggYmFkIGNvbmZpZ1xuICAgIGlmICghdGhpcy5tZXRhLmRyb3Bkb3duQ2VsbENvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFwiZHJvcGRvd25DZWxsQ29uZmlnXCIgb24gdGhlIGNvbHVtbiBzZXR1cCcpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNsaWNrKGNvbmZpZywgb3B0aW9uLCB2YWx1ZSk6IHZvaWQge1xuICAgIGxldCBjYWxsYmFjayA9IG9wdGlvbi5jYWxsYmFjayB8fCBjb25maWcuY2FsbGJhY2s7XG4gICAgY2FsbGJhY2sodGhpcy5kYXRhLCB2YWx1ZSB8fCBvcHRpb24pO1xuICB9XG59XG4iXX0=