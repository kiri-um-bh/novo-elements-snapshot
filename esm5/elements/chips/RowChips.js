/**
 * @fileoverview added by tsickle
 * Generated from: elements/chips/RowChips.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, forwardRef, ElementRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
import { ComponentUtils } from '../../utils/component-utils/ComponentUtils';
import { NovoChipElement, NovoChipsElement } from './Chips';
// Value accessor for the component (supports ngModel)
/** @type {?} */
var CHIPS_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NovoRowChipsElement; })),
    multi: true,
};
var NovoRowChipElement = /** @class */ (function (_super) {
    tslib_1.__extends(NovoRowChipElement, _super);
    function NovoRowChipElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    NovoRowChipElement.prototype.onSelect = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        return false;
    };
    NovoRowChipElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-row-chip',
                    template: "<div class=\"novo-row-chips-columns\"><ng-content></ng-content><i class=\"bhi-delete-o\" *ngIf=\"!disabled\" (click)=\"onRemove($event)\"></i></div>"
                }] }
    ];
    return NovoRowChipElement;
}(NovoChipElement));
export { NovoRowChipElement };
var NovoRowChipsElement = /** @class */ (function (_super) {
    tslib_1.__extends(NovoRowChipsElement, _super);
    function NovoRowChipsElement(element, componentUtils, labels) {
        var _this = _super.call(this, element, componentUtils, labels) || this;
        _this.closeOnSelect = true;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NovoRowChipsElement.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return;
    };
    NovoRowChipsElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-row-chips',
                    providers: [CHIPS_VALUE_ACCESSOR],
                    host: {
                        '[class.with-value]': 'items.length > 0',
                    },
                    template: "\n        <div class=\"novo-row-chips-columns\" *ngIf=\"items.length > 0\">\n          <div class=\"column-label\" *ngFor=\"let column of source.columns\">{{ column.label }}</div>\n        </div>\n        <div class=\"novo-row-chips-empty-message\" *ngIf=\"source.emptyReadOnlyMessage && disablePickerInput && items.length === 0\">{{source.emptyReadOnlyMessage}}</div>\n        <novo-row-chip\n          *ngFor=\"let item of _items | async\"\n          [type]=\"type || item?.value?.searchEntity\"\n          [class.selected]=\"item == selected\"\n          [disabled]=\"disablePickerInput\"\n          (remove)=\"remove($event, item)\"\n          (select)=\"select($event, item)\">\n          <div class=\"column-data\" *ngFor=\"let column of source.columns\"><span>{{ column.data(item) }}</span></div>\n        </novo-row-chip>\n        <novo-picker\n            clearValueOnSelect=\"true\"\n            [closeOnSelect]=\"closeOnSelect\"\n            [config]=\"source\"\n            [disablePickerInput]=\"disablePickerInput\"\n            [hidden]=\"disablePickerInput\"\n            [placeholder]=\"placeholder\"\n            [(ngModel)]=\"itemToAdd\"\n            (select)=\"add($event)\"\n            (keydown)=\"onKeyDown($event)\"\n            (focus)=\"onFocus($event)\"\n            (typing)=\"onTyping($event)\"\n            (blur)=\"onTouched($event)\"\n            [selected]=\"items\"\n            [overrideElement]=\"element\"\n            *ngIf=\"!maxlength || (maxlength && items.length < maxlength)\">\n        </novo-picker>\n        <div class=\"preview-container\">\n            <span #preview></span>\n        </div>\n   "
                }] }
    ];
    /** @nocollapse */
    NovoRowChipsElement.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ComponentUtils },
        { type: NovoLabelService }
    ]; };
    NovoRowChipsElement.propDecorators = {
        closeOnSelect: [{ type: Input }]
    };
    return NovoRowChipsElement;
}(NovoChipsElement));
export { NovoRowChipsElement };
if (false) {
    /** @type {?} */
    NovoRowChipsElement.prototype.closeOnSelect;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm93Q2hpcHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2hpcHMvUm93Q2hpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRW5ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sU0FBUyxDQUFDOzs7SUFHdEQsb0JBQW9CLEdBQUc7SUFDM0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixFQUFDO0lBQ2xELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFRDtJQUl3Qyw4Q0FBZTtJQUp2RDs7SUFRQSxDQUFDOzs7OztJQUhDLHFDQUFROzs7O0lBQVIsVUFBUyxDQUFDO1FBQ1IsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkFQRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxzSkFBOEk7aUJBQ3pKOztJQUtELHlCQUFDO0NBQUEsQUFSRCxDQUl3QyxlQUFlLEdBSXREO1NBSlksa0JBQWtCO0FBTS9CO0lBMEN5QywrQ0FBZ0I7SUFJdkQsNkJBQVksT0FBbUIsRUFBRSxjQUE4QixFQUFFLE1BQXdCO1FBQXpGLFlBQ0Usa0JBQU0sT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUMsU0FDdkM7UUFKRCxtQkFBYSxHQUFZLElBQUksQ0FBQzs7SUFJOUIsQ0FBQzs7Ozs7SUFFRCx1Q0FBUzs7OztJQUFULFVBQVUsS0FBSztRQUNiLE9BQU87SUFDVCxDQUFDOztnQkFwREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNqQyxJQUFJLEVBQUU7d0JBQ0osb0JBQW9CLEVBQUUsa0JBQWtCO3FCQUN6QztvQkFDRCxRQUFRLEVBQUUsOG1EQWtDUjtpQkFDSDs7OztnQkFqRStCLFVBQVU7Z0JBSWpDLGNBQWM7Z0JBRGQsZ0JBQWdCOzs7Z0NBZ0V0QixLQUFLOztJQVVSLDBCQUFDO0NBQUEsQUFyREQsQ0EwQ3lDLGdCQUFnQixHQVd4RDtTQVhZLG1CQUFtQjs7O0lBQzlCLDRDQUM4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuaW1wb3J0IHsgTm92b0NoaXBFbGVtZW50LCBOb3ZvQ2hpcHNFbGVtZW50IH0gZnJvbSAnLi9DaGlwcyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0hJUFNfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvUm93Q2hpcHNFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXJvdy1jaGlwJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibm92by1yb3ctY2hpcHMtY29sdW1uc1wiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48aSBjbGFzcz1cImJoaS1kZWxldGUtb1wiICpuZ0lmPVwiIWRpc2FibGVkXCIgKGNsaWNrKT1cIm9uUmVtb3ZlKCRldmVudClcIj48L2k+PC9kaXY+YCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1Jvd0NoaXBFbGVtZW50IGV4dGVuZHMgTm92b0NoaXBFbGVtZW50IHtcbiAgb25TZWxlY3QoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXJvdy1jaGlwcycsXG4gIHByb3ZpZGVyczogW0NISVBTX1ZBTFVFX0FDQ0VTU09SXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Mud2l0aC12YWx1ZV0nOiAnaXRlbXMubGVuZ3RoID4gMCcsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXJvdy1jaGlwcy1jb2x1bW5zXCIgKm5nSWY9XCJpdGVtcy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1sYWJlbFwiICpuZ0Zvcj1cImxldCBjb2x1bW4gb2Ygc291cmNlLmNvbHVtbnNcIj57eyBjb2x1bW4ubGFiZWwgfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXJvdy1jaGlwcy1lbXB0eS1tZXNzYWdlXCIgKm5nSWY9XCJzb3VyY2UuZW1wdHlSZWFkT25seU1lc3NhZ2UgJiYgZGlzYWJsZVBpY2tlcklucHV0ICYmIGl0ZW1zLmxlbmd0aCA9PT0gMFwiPnt7c291cmNlLmVtcHR5UmVhZE9ubHlNZXNzYWdlfX08L2Rpdj5cbiAgICAgICAgPG5vdm8tcm93LWNoaXBcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfaXRlbXMgfCBhc3luY1wiXG4gICAgICAgICAgW3R5cGVdPVwidHlwZSB8fCBpdGVtPy52YWx1ZT8uc2VhcmNoRW50aXR5XCJcbiAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXRlbSA9PSBzZWxlY3RlZFwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAgICAgKHJlbW92ZSk9XCJyZW1vdmUoJGV2ZW50LCBpdGVtKVwiXG4gICAgICAgICAgKHNlbGVjdCk9XCJzZWxlY3QoJGV2ZW50LCBpdGVtKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tZGF0YVwiICpuZ0Zvcj1cImxldCBjb2x1bW4gb2Ygc291cmNlLmNvbHVtbnNcIj48c3Bhbj57eyBjb2x1bW4uZGF0YShpdGVtKSB9fTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPC9ub3ZvLXJvdy1jaGlwPlxuICAgICAgICA8bm92by1waWNrZXJcbiAgICAgICAgICAgIGNsZWFyVmFsdWVPblNlbGVjdD1cInRydWVcIlxuICAgICAgICAgICAgW2Nsb3NlT25TZWxlY3RdPVwiY2xvc2VPblNlbGVjdFwiXG4gICAgICAgICAgICBbY29uZmlnXT1cInNvdXJjZVwiXG4gICAgICAgICAgICBbZGlzYWJsZVBpY2tlcklucHV0XT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAgICAgICBbaGlkZGVuXT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpdGVtVG9BZGRcIlxuICAgICAgICAgICAgKHNlbGVjdCk9XCJhZGQoJGV2ZW50KVwiXG4gICAgICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAgICh0eXBpbmcpPVwib25UeXBpbmcoJGV2ZW50KVwiXG4gICAgICAgICAgICAoYmx1cik9XCJvblRvdWNoZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICBbc2VsZWN0ZWRdPVwiaXRlbXNcIlxuICAgICAgICAgICAgW292ZXJyaWRlRWxlbWVudF09XCJlbGVtZW50XCJcbiAgICAgICAgICAgICpuZ0lmPVwiIW1heGxlbmd0aCB8fCAobWF4bGVuZ3RoICYmIGl0ZW1zLmxlbmd0aCA8IG1heGxlbmd0aClcIj5cbiAgICAgICAgPC9ub3ZvLXBpY2tlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8c3BhbiAjcHJldmlldz48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1Jvd0NoaXBzRWxlbWVudCBleHRlbmRzIE5vdm9DaGlwc0VsZW1lbnQge1xuICBASW5wdXQoKVxuICBjbG9zZU9uU2VsZWN0OiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMsIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbXBvbmVudFV0aWxzLCBsYWJlbHMpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=