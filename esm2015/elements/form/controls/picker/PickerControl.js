/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// APP
import { BaseControl } from './../BaseControl';
export class PickerControl extends BaseControl {
    /**
     * @param {?} config
     */
    constructor(config) {
        super('PickerControl', config);
        this.controlType = 'picker';
        this.options = [];
        this.options = config.options || [];
    }
}
if (false) {
    /** @type {?} */
    PickerControl.prototype.controlType;
    /** @type {?} */
    PickerControl.prototype.options;
}
export class TablePickerControl extends PickerControl {
    /**
     * @param {?} config
     */
    constructor(config) {
        super(Object.assign(config, { parentScrollSelector: '.table-container' }));
        this.__type = 'TablePickerControl';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja2VyQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2NvbnRyb2xzL3BpY2tlci9QaWNrZXJDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBcUIsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRSxNQUFNLE9BQU8sYUFBYyxTQUFRLFdBQVc7Ozs7SUFJNUMsWUFBWSxNQUF5QjtRQUNuQyxLQUFLLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBSmpDLGdCQUFXLEdBQUcsUUFBUSxDQUFDO1FBQ3ZCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFJWCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7Q0FDRjs7O0lBUEMsb0NBQXVCOztJQUN2QixnQ0FBYTs7QUFRZixNQUFNLE9BQU8sa0JBQW1CLFNBQVEsYUFBYTs7OztJQUNuRCxZQUFZLE1BQXlCO1FBQ25DLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLENBQUM7SUFDckMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQVBQXG5pbXBvcnQgeyBCYXNlQ29udHJvbCwgTm92b0NvbnRyb2xDb25maWcgfSBmcm9tICcuLy4uL0Jhc2VDb250cm9sJztcblxuZXhwb3J0IGNsYXNzIFBpY2tlckNvbnRyb2wgZXh0ZW5kcyBCYXNlQ29udHJvbCB7XG4gIGNvbnRyb2xUeXBlID0gJ3BpY2tlcic7XG4gIG9wdGlvbnMgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IE5vdm9Db250cm9sQ29uZmlnKSB7XG4gICAgc3VwZXIoJ1BpY2tlckNvbnRyb2wnLCBjb25maWcpO1xuICAgIHRoaXMub3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zIHx8IFtdO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZVBpY2tlckNvbnRyb2wgZXh0ZW5kcyBQaWNrZXJDb250cm9sIHtcbiAgY29uc3RydWN0b3IoY29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZykge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oY29uZmlnLCB7IHBhcmVudFNjcm9sbFNlbGVjdG9yOiAnLnRhYmxlLWNvbnRhaW5lcicgfSkpO1xuICAgIHRoaXMuX190eXBlID0gJ1RhYmxlUGlja2VyQ29udHJvbCc7XG4gIH1cbn1cbiJdfQ==