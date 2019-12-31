/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja2VyQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2NvbnRyb2xzL3BpY2tlci9QaWNrZXJDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQXFCLE1BQU0sa0JBQWtCLENBQUM7QUFFbEU7SUFBbUMseUNBQVc7SUFJNUMsdUJBQVksTUFBeUI7UUFBckMsWUFDRSxrQkFBTSxlQUFlLEVBQUUsTUFBTSxDQUFDLFNBRS9CO1FBTkQsaUJBQVcsR0FBRyxRQUFRLENBQUM7UUFDdkIsYUFBTyxHQUFHLEVBQUUsQ0FBQztRQUlYLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7O0lBQ3RDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFSRCxDQUFtQyxXQUFXLEdBUTdDOzs7O0lBUEMsb0NBQXVCOztJQUN2QixnQ0FBYTs7QUFRZjtJQUF3Qyw4Q0FBYTtJQUNuRCw0QkFBWSxNQUF5QjtRQUFyQyxZQUNFLGtCQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLFNBRTNFO1FBREMsS0FBSSxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQzs7SUFDckMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXdDLGFBQWEsR0FLcEQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBUFBcbmltcG9ydCB7IEJhc2VDb250cm9sLCBOb3ZvQ29udHJvbENvbmZpZyB9IGZyb20gJy4vLi4vQmFzZUNvbnRyb2wnO1xuXG5leHBvcnQgY2xhc3MgUGlja2VyQ29udHJvbCBleHRlbmRzIEJhc2VDb250cm9sIHtcbiAgY29udHJvbFR5cGUgPSAncGlja2VyJztcbiAgb3B0aW9ucyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogTm92b0NvbnRyb2xDb25maWcpIHtcbiAgICBzdXBlcignUGlja2VyQ29udHJvbCcsIGNvbmZpZyk7XG4gICAgdGhpcy5vcHRpb25zID0gY29uZmlnLm9wdGlvbnMgfHwgW107XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlUGlja2VyQ29udHJvbCBleHRlbmRzIFBpY2tlckNvbnRyb2wge1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IE5vdm9Db250cm9sQ29uZmlnKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihjb25maWcsIHsgcGFyZW50U2Nyb2xsU2VsZWN0b3I6ICcudGFibGUtY29udGFpbmVyJyB9KSk7XG4gICAgdGhpcy5fX3R5cGUgPSAnVGFibGVQaWNrZXJDb250cm9sJztcbiAgfVxufVxuIl19