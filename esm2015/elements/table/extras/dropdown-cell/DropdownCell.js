/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/extras/dropdown-cell/DropdownCell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcGRvd25DZWxsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RhYmxlL2V4dHJhcy9kcm9wZG93bi1jZWxsL0Ryb3Bkb3duQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFFekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBRTdELDZDQUlDOzs7SUFIQywyQ0FBa0I7O0lBQ2xCLDJDQUFvQjs7SUFDcEIsMENBQThFOztBQXdCaEYsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFlBQVk7Ozs7SUFNekMsUUFBUTtRQUNiLCtCQUErQjtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDOzs7Ozs7O0lBRU0sT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSzs7WUFDOUIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLFFBQVE7UUFDakQsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCVDthQUNGOzs7bUJBRUUsS0FBSztvQkFFTCxLQUFLOzs7O0lBRk4sZ0NBQ1U7O0lBQ1YsaUNBQ1ciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBCYXNlUmVuZGVyZXIgfSBmcm9tICcuLi9iYXNlLXJlbmRlcmVyL0Jhc2VSZW5kZXJlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU5vdm9Ecm9wZG93bkNlbGxDb25maWcge1xuICBjYXRlZ29yeT86IHN0cmluZztcbiAgY2FsbGJhY2s/OiBGdW5jdGlvbjtcbiAgb3B0aW9uczogKHsgbGFiZWw/OiBzdHJpbmc7IHZhbHVlPzogc3RyaW5nOyBjYWxsYmFjaz86IEZ1bmN0aW9uIH0gfCBzdHJpbmcpW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZHJvcGRvd24tY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5vdm8tZHJvcGRvd24gcGFyZW50U2Nyb2xsU2VsZWN0b3I9XCIudGFibGUtY29udGFpbmVyXCIgY29udGFpbmVyQ2xhc3M9XCJub3ZvLXRhYmxlLWRyb3Bkb3duLWNlbGxcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwic2Vjb25kYXJ5XCIgaWNvbj1cImNvbGxhcHNlXCIgaW52ZXJzZT5cbiAgICAgICAgPHNwYW4gZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kcm9wZG93bi1jZWxsLXZhbHVlXCI+e3sgdmFsdWUgfX08L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxsaXN0PlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb25maWcgb2YgbWV0YS5kcm9wZG93bkNlbGxDb25maWc7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICA8ZHJvcGRvd24taXRlbS1oZWFkZXIgKm5nSWY9XCJjb25maWcuY2F0ZWdvcnlcIj57eyBjb25maWcuY2F0ZWdvcnkgfX08L2Ryb3Bkb3duLWl0ZW0taGVhZGVyPlxuICAgICAgICAgIDxpdGVtICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29uZmlnLm9wdGlvbnNcIiAoYWN0aW9uKT1cIm9uQ2xpY2soY29uZmlnLCBvcHRpb24sIG9wdGlvbi52YWx1ZSlcIlxuICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiKG9wdGlvbiB8fCBvcHRpb24udmFsdWUpID09PSB2YWx1ZVwiPlxuICAgICAgICAgICAgPHNwYW4gW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIm9wdGlvbi5sYWJlbCB8fCBvcHRpb25cIj57eyBvcHRpb24ubGFiZWwgfHwgb3B0aW9uIH19PC9zcGFuPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCIob3B0aW9uIHx8IG9wdGlvbi52YWx1ZSkgPT09IHZhbHVlXCIgY2xhc3M9XCJiaGktY2hlY2tcIj48L2k+XG4gICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgIDxociAqbmdJZj1cImkgPCBtZXRhLmRyb3Bkb3duQ2VsbENvbmZpZy5sZW5ndGggLSAxXCIvPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbGlzdD5cbiAgICA8L25vdm8tZHJvcGRvd24+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Ecm9wZG93bkNlbGwgZXh0ZW5kcyBCYXNlUmVuZGVyZXIgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBtZXRhOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHZhbHVlOiBhbnk7XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIENoZWNrIGZvciBhbmQgZml4IGJhZCBjb25maWdcbiAgICBpZiAoIXRoaXMubWV0YS5kcm9wZG93bkNlbGxDb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBcImRyb3Bkb3duQ2VsbENvbmZpZ1wiIG9uIHRoZSBjb2x1bW4gc2V0dXAnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25DbGljayhjb25maWcsIG9wdGlvbiwgdmFsdWUpOiB2b2lkIHtcbiAgICBsZXQgY2FsbGJhY2sgPSBvcHRpb24uY2FsbGJhY2sgfHwgY29uZmlnLmNhbGxiYWNrO1xuICAgIGNhbGxiYWNrKHRoaXMuZGF0YSwgdmFsdWUgfHwgb3B0aW9uKTtcbiAgfVxufVxuIl19