import { __extends } from "tslib";
// APP
import { BaseControl } from './../BaseControl';
var FileControl = /** @class */ (function (_super) {
    __extends(FileControl, _super);
    function FileControl(config) {
        var _this = _super.call(this, 'FileControl', config) || this;
        _this.controlType = 'file';
        // TODO - translate
        _this.placeholder = config.placeholder;
        _this.multiple = config.multiple;
        return _this;
    }
    return FileControl;
}(BaseControl));
export { FileControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9maWxlL0ZpbGVDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFdBQVcsRUFBcUIsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRTtJQUFpQywrQkFBVztJQUcxQyxxQkFBWSxNQUF5QjtRQUFyQyxZQUNFLGtCQUFNLGFBQWEsRUFBRSxNQUFNLENBQUMsU0FJN0I7UUFQRCxpQkFBVyxHQUFHLE1BQU0sQ0FBQztRQUluQixtQkFBbUI7UUFDbkIsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3RDLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7SUFDbEMsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQVRELENBQWlDLFdBQVcsR0FTM0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBUFBcbmltcG9ydCB7IEJhc2VDb250cm9sLCBOb3ZvQ29udHJvbENvbmZpZyB9IGZyb20gJy4vLi4vQmFzZUNvbnRyb2wnO1xuXG5leHBvcnQgY2xhc3MgRmlsZUNvbnRyb2wgZXh0ZW5kcyBCYXNlQ29udHJvbCB7XG4gIGNvbnRyb2xUeXBlID0gJ2ZpbGUnO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogTm92b0NvbnRyb2xDb25maWcpIHtcbiAgICBzdXBlcignRmlsZUNvbnRyb2wnLCBjb25maWcpO1xuICAgIC8vIFRPRE8gLSB0cmFuc2xhdGVcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gY29uZmlnLnBsYWNlaG9sZGVyO1xuICAgIHRoaXMubXVsdGlwbGUgPSBjb25maWcubXVsdGlwbGU7XG4gIH1cbn1cbiJdfQ==