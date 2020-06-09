import { __extends } from "tslib";
// APP
import { BaseControl } from '../BaseControl';
var QuickNoteControl = /** @class */ (function (_super) {
    __extends(QuickNoteControl, _super);
    function QuickNoteControl(config) {
        var _this = _super.call(this, 'QuickNoteControl', config) || this;
        _this.controlType = 'quick-note';
        _this.options = [];
        _this.options = config.options || [];
        return _this;
    }
    return QuickNoteControl;
}(BaseControl));
export { QuickNoteControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tOb3RlQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2NvbnRyb2xzL3F1aWNrLW5vdGUvUXVpY2tOb3RlQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxXQUFXLEVBQXFCLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEU7SUFBc0Msb0NBQVc7SUFJL0MsMEJBQVksTUFBeUI7UUFBckMsWUFDRSxrQkFBTSxrQkFBa0IsRUFBRSxNQUFNLENBQUMsU0FFbEM7UUFORCxpQkFBVyxHQUFHLFlBQVksQ0FBQztRQUMzQixhQUFPLEdBQUcsRUFBRSxDQUFDO1FBSVgsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQzs7SUFDdEMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQVJELENBQXNDLFdBQVcsR0FRaEQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBUFBcbmltcG9ydCB7IEJhc2VDb250cm9sLCBOb3ZvQ29udHJvbENvbmZpZyB9IGZyb20gJy4uL0Jhc2VDb250cm9sJztcblxuZXhwb3J0IGNsYXNzIFF1aWNrTm90ZUNvbnRyb2wgZXh0ZW5kcyBCYXNlQ29udHJvbCB7XG4gIGNvbnRyb2xUeXBlID0gJ3F1aWNrLW5vdGUnO1xuICBvcHRpb25zID0gW107XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZykge1xuICAgIHN1cGVyKCdRdWlja05vdGVDb250cm9sJywgY29uZmlnKTtcbiAgICB0aGlzLm9wdGlvbnMgPSBjb25maWcub3B0aW9ucyB8fCBbXTtcbiAgfVxufVxuIl19