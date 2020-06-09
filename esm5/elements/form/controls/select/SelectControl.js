import { __extends } from "tslib";
// APP
import { BaseControl } from './../BaseControl';
var SelectControl = /** @class */ (function (_super) {
    __extends(SelectControl, _super);
    function SelectControl(config) {
        var _this = _super.call(this, 'SelectControl', config) || this;
        _this.controlType = 'select';
        _this.options = [];
        _this.options = config.options || [];
        _this.placeholder = config.placeholder || '';
        return _this;
    }
    return SelectControl;
}(BaseControl));
export { SelectControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0Q29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2NvbnRyb2xzL3NlbGVjdC9TZWxlY3RDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFdBQVcsRUFBcUIsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRTtJQUFtQyxpQ0FBVztJQUk1Qyx1QkFBWSxNQUF5QjtRQUFyQyxZQUNFLGtCQUFNLGVBQWUsRUFBRSxNQUFNLENBQUMsU0FHL0I7UUFQRCxpQkFBVyxHQUFHLFFBQVEsQ0FBQztRQUN2QixhQUFPLEdBQUcsRUFBRSxDQUFDO1FBSVgsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUNwQyxLQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDOztJQUM5QyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBbUMsV0FBVyxHQVM3QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFQUFxuaW1wb3J0IHsgQmFzZUNvbnRyb2wsIE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi8uLi9CYXNlQ29udHJvbCc7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RDb250cm9sIGV4dGVuZHMgQmFzZUNvbnRyb2wge1xuICBjb250cm9sVHlwZSA9ICdzZWxlY3QnO1xuICBvcHRpb25zID0gW107XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZykge1xuICAgIHN1cGVyKCdTZWxlY3RDb250cm9sJywgY29uZmlnKTtcbiAgICB0aGlzLm9wdGlvbnMgPSBjb25maWcub3B0aW9ucyB8fCBbXTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gY29uZmlnLnBsYWNlaG9sZGVyIHx8ICcnO1xuICB9XG59XG4iXX0=