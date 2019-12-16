/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/controls/picker/PickerControl.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// APP
import { BaseControl } from './../BaseControl';
var PickerControl = /** @class */ (function (_super) {
    tslib_1.__extends(PickerControl, _super);
    function PickerControl(config) {
        var _this = _super.call(this, 'PickerControl', config) || this;
        _this.controlType = 'picker';
        _this.options = [];
        _this.options = config.options || [];
        return _this;
    }
    return PickerControl;
}(BaseControl));
export { PickerControl };
if (false) {
    /** @type {?} */
    PickerControl.prototype.controlType;
    /** @type {?} */
    PickerControl.prototype.options;
}
var TablePickerControl = /** @class */ (function (_super) {
    tslib_1.__extends(TablePickerControl, _super);
    function TablePickerControl(config) {
        var _this = _super.call(this, Object.assign(config, { parentScrollSelector: '.table-container' })) || this;
        _this.__type = 'TablePickerControl';
        return _this;
    }
    return TablePickerControl;
}(PickerControl));
export { TablePickerControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja2VyQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2NvbnRyb2xzL3BpY2tlci9QaWNrZXJDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFxQixNQUFNLGtCQUFrQixDQUFDO0FBRWxFO0lBQW1DLHlDQUFXO0lBSTVDLHVCQUFZLE1BQXlCO1FBQXJDLFlBQ0Usa0JBQU0sZUFBZSxFQUFFLE1BQU0sQ0FBQyxTQUUvQjtRQU5ELGlCQUFXLEdBQUcsUUFBUSxDQUFDO1FBQ3ZCLGFBQU8sR0FBRyxFQUFFLENBQUM7UUFJWCxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDOztJQUN0QyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBbUMsV0FBVyxHQVE3Qzs7OztJQVBDLG9DQUF1Qjs7SUFDdkIsZ0NBQWE7O0FBUWY7SUFBd0MsOENBQWE7SUFDbkQsNEJBQVksTUFBeUI7UUFBckMsWUFDRSxrQkFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxTQUUzRTtRQURDLEtBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLENBQUM7O0lBQ3JDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFMRCxDQUF3QyxhQUFhLEdBS3BEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQVBQXG5pbXBvcnQgeyBCYXNlQ29udHJvbCwgTm92b0NvbnRyb2xDb25maWcgfSBmcm9tICcuLy4uL0Jhc2VDb250cm9sJztcblxuZXhwb3J0IGNsYXNzIFBpY2tlckNvbnRyb2wgZXh0ZW5kcyBCYXNlQ29udHJvbCB7XG4gIGNvbnRyb2xUeXBlID0gJ3BpY2tlcic7XG4gIG9wdGlvbnMgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IE5vdm9Db250cm9sQ29uZmlnKSB7XG4gICAgc3VwZXIoJ1BpY2tlckNvbnRyb2wnLCBjb25maWcpO1xuICAgIHRoaXMub3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zIHx8IFtdO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZVBpY2tlckNvbnRyb2wgZXh0ZW5kcyBQaWNrZXJDb250cm9sIHtcbiAgY29uc3RydWN0b3IoY29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZykge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oY29uZmlnLCB7IHBhcmVudFNjcm9sbFNlbGVjdG9yOiAnLnRhYmxlLWNvbnRhaW5lcicgfSkpO1xuICAgIHRoaXMuX190eXBlID0gJ1RhYmxlUGlja2VyQ29udHJvbCc7XG4gIH1cbn1cbiJdfQ==