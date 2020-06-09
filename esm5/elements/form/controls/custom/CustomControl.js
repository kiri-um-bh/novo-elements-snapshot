import { __extends } from "tslib";
// APP
import { BaseControl } from './../BaseControl';
var CustomControl = /** @class */ (function (_super) {
    __extends(CustomControl, _super);
    function CustomControl(config) {
        var _this = _super.call(this, config.template, config) || this;
        _this.controlType = 'custom';
        _this.controlType = config.template;
        return _this;
    }
    return CustomControl;
}(BaseControl));
export { CustomControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2NvbnRyb2xzL2N1c3RvbS9DdXN0b21Db250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFdBQVcsRUFBcUIsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRTtJQUFtQyxpQ0FBVztJQUc1Qyx1QkFBWSxNQUF5QjtRQUFyQyxZQUNFLGtCQUFNLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLFNBRS9CO1FBTEQsaUJBQVcsR0FBRyxRQUFRLENBQUM7UUFJckIsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDOztJQUNyQyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBbUMsV0FBVyxHQU83QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFQUFxuaW1wb3J0IHsgQmFzZUNvbnRyb2wsIE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi8uLi9CYXNlQ29udHJvbCc7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21Db250cm9sIGV4dGVuZHMgQmFzZUNvbnRyb2wge1xuICBjb250cm9sVHlwZSA9ICdjdXN0b20nO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogTm92b0NvbnRyb2xDb25maWcpIHtcbiAgICBzdXBlcihjb25maWcudGVtcGxhdGUsIGNvbmZpZyk7XG4gICAgdGhpcy5jb250cm9sVHlwZSA9IGNvbmZpZy50ZW1wbGF0ZTtcbiAgfVxufVxuIl19