import { __extends } from "tslib";
// APP
import { BaseControl } from './../BaseControl';
var NativeSelectControl = /** @class */ (function (_super) {
    __extends(NativeSelectControl, _super);
    function NativeSelectControl(config) {
        var _this = _super.call(this, 'NativeSelectControl', config) || this;
        _this.controlType = 'native-select';
        _this.options = [];
        _this.options = config.options || [];
        return _this;
    }
    return NativeSelectControl;
}(BaseControl));
export { NativeSelectControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF0aXZlU2VsZWN0Q29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2NvbnRyb2xzL25hdGl2ZS1zZWxlY3QvTmF0aXZlU2VsZWN0Q29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxXQUFXLEVBQXFCLE1BQU0sa0JBQWtCLENBQUM7QUFFbEU7SUFBeUMsdUNBQVc7SUFJbEQsNkJBQVksTUFBeUI7UUFBckMsWUFDRSxrQkFBTSxxQkFBcUIsRUFBRSxNQUFNLENBQUMsU0FFckM7UUFORCxpQkFBVyxHQUFHLGVBQWUsQ0FBQztRQUM5QixhQUFPLEdBQUcsRUFBRSxDQUFDO1FBSVgsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQzs7SUFDdEMsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQVJELENBQXlDLFdBQVcsR0FRbkQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBUFBcbmltcG9ydCB7IEJhc2VDb250cm9sLCBOb3ZvQ29udHJvbENvbmZpZyB9IGZyb20gJy4vLi4vQmFzZUNvbnRyb2wnO1xuXG5leHBvcnQgY2xhc3MgTmF0aXZlU2VsZWN0Q29udHJvbCBleHRlbmRzIEJhc2VDb250cm9sIHtcbiAgY29udHJvbFR5cGUgPSAnbmF0aXZlLXNlbGVjdCc7XG4gIG9wdGlvbnMgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IE5vdm9Db250cm9sQ29uZmlnKSB7XG4gICAgc3VwZXIoJ05hdGl2ZVNlbGVjdENvbnRyb2wnLCBjb25maWcpO1xuICAgIHRoaXMub3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zIHx8IFtdO1xuICB9XG59XG4iXX0=