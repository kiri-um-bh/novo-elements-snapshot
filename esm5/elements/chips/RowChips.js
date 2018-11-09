/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    useExisting: forwardRef(function () { return NovoRowChipsElement; }),
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
                    template: "\n        <div class=\"novo-row-chips-columns\" *ngIf=\"items.length > 0\">\n          <div class=\"column-label\" *ngFor=\"let column of source.columns\">{{ column.label }}</div>\n        </div>\n        <novo-row-chip\n          *ngFor=\"let item of _items | async\"\n          [type]=\"type || item?.value?.searchEntity\"\n          [class.selected]=\"item == selected\"\n          [disabled]=\"disablePickerInput\"\n          (remove)=\"remove($event, item)\"\n          (select)=\"select($event, item)\">\n          <div class=\"column-data\" *ngFor=\"let column of source.columns\"><span>{{ column.data(item) }}</span></div>\n        </novo-row-chip>\n        <novo-picker\n            clearValueOnSelect=\"true\"\n            [closeOnSelect]=\"closeOnSelect\"\n            [config]=\"source\"\n            [disablePickerInput]=\"disablePickerInput\"\n            [hidden]=\"disablePickerInput\"\n            [placeholder]=\"placeholder\"\n            [(ngModel)]=\"itemToAdd\"\n            (select)=\"add($event)\"\n            (keydown)=\"onKeyDown($event)\"\n            (focus)=\"onFocus($event)\"\n            (typing)=\"onTyping($event)\"\n            (blur)=\"onTouched($event)\"\n            [selected]=\"items\"\n            [overrideElement]=\"element\">\n        </novo-picker>\n        <div class=\"preview-container\">\n            <span #preview></span>\n        </div>\n   "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm93Q2hpcHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2hpcHMvUm93Q2hpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxTQUFTLENBQUM7OztJQUd0RCxvQkFBb0IsR0FBRztJQUMzQixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFDO0lBQ2xELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFRDtJQUl3Qyw4Q0FBZTtJQUp2RDs7SUFRQSxDQUFDOzs7OztJQUhDLHFDQUFROzs7O0lBQVIsVUFBUyxDQUFDO1FBQ1IsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkFQRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxzSkFBOEk7aUJBQ3pKOztJQUtELHlCQUFDO0NBQUEsQUFSRCxDQUl3QyxlQUFlLEdBSXREO1NBSlksa0JBQWtCO0FBTS9CO0lBd0N5QywrQ0FBZ0I7SUFJdkQsNkJBQVksT0FBbUIsRUFBRSxjQUE4QixFQUFFLE1BQXdCO1FBQXpGLFlBQ0Usa0JBQU0sT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUMsU0FDdkM7UUFKRCxtQkFBYSxHQUFZLElBQUksQ0FBQzs7SUFJOUIsQ0FBQzs7Ozs7SUFFRCx1Q0FBUzs7OztJQUFULFVBQVUsS0FBSztRQUNiLE9BQU87SUFDVCxDQUFDOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNqQyxJQUFJLEVBQUU7d0JBQ0osb0JBQW9CLEVBQUUsa0JBQWtCO3FCQUN6QztvQkFDRCxRQUFRLEVBQUUsbzNDQWdDUjtpQkFDSDs7OztnQkEvRCtCLFVBQVU7Z0JBSWpDLGNBQWM7Z0JBRGQsZ0JBQWdCOzs7Z0NBOER0QixLQUFLOztJQVVSLDBCQUFDO0NBQUEsQUFuREQsQ0F3Q3lDLGdCQUFnQixHQVd4RDtTQVhZLG1CQUFtQjs7O0lBQzlCLDRDQUM4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuaW1wb3J0IHsgTm92b0NoaXBFbGVtZW50LCBOb3ZvQ2hpcHNFbGVtZW50IH0gZnJvbSAnLi9DaGlwcyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0hJUFNfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvUm93Q2hpcHNFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXJvdy1jaGlwJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibm92by1yb3ctY2hpcHMtY29sdW1uc1wiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48aSBjbGFzcz1cImJoaS1kZWxldGUtb1wiICpuZ0lmPVwiIWRpc2FibGVkXCIgKGNsaWNrKT1cIm9uUmVtb3ZlKCRldmVudClcIj48L2k+PC9kaXY+YCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1Jvd0NoaXBFbGVtZW50IGV4dGVuZHMgTm92b0NoaXBFbGVtZW50IHtcbiAgb25TZWxlY3QoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXJvdy1jaGlwcycsXG4gIHByb3ZpZGVyczogW0NISVBTX1ZBTFVFX0FDQ0VTU09SXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Mud2l0aC12YWx1ZV0nOiAnaXRlbXMubGVuZ3RoID4gMCcsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXJvdy1jaGlwcy1jb2x1bW5zXCIgKm5nSWY9XCJpdGVtcy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1sYWJlbFwiICpuZ0Zvcj1cImxldCBjb2x1bW4gb2Ygc291cmNlLmNvbHVtbnNcIj57eyBjb2x1bW4ubGFiZWwgfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxub3ZvLXJvdy1jaGlwXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgX2l0ZW1zIHwgYXN5bmNcIlxuICAgICAgICAgIFt0eXBlXT1cInR5cGUgfHwgaXRlbT8udmFsdWU/LnNlYXJjaEVudGl0eVwiXG4gICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cIml0ZW0gPT0gc2VsZWN0ZWRcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlUGlja2VySW5wdXRcIlxuICAgICAgICAgIChyZW1vdmUpPVwicmVtb3ZlKCRldmVudCwgaXRlbSlcIlxuICAgICAgICAgIChzZWxlY3QpPVwic2VsZWN0KCRldmVudCwgaXRlbSlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLWRhdGFcIiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIHNvdXJjZS5jb2x1bW5zXCI+PHNwYW4+e3sgY29sdW1uLmRhdGEoaXRlbSkgfX08L3NwYW4+PC9kaXY+XG4gICAgICAgIDwvbm92by1yb3ctY2hpcD5cbiAgICAgICAgPG5vdm8tcGlja2VyXG4gICAgICAgICAgICBjbGVhclZhbHVlT25TZWxlY3Q9XCJ0cnVlXCJcbiAgICAgICAgICAgIFtjbG9zZU9uU2VsZWN0XT1cImNsb3NlT25TZWxlY3RcIlxuICAgICAgICAgICAgW2NvbmZpZ109XCJzb3VyY2VcIlxuICAgICAgICAgICAgW2Rpc2FibGVQaWNrZXJJbnB1dF09XCJkaXNhYmxlUGlja2VySW5wdXRcIlxuICAgICAgICAgICAgW2hpZGRlbl09XCJkaXNhYmxlUGlja2VySW5wdXRcIlxuICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaXRlbVRvQWRkXCJcbiAgICAgICAgICAgIChzZWxlY3QpPVwiYWRkKCRldmVudClcIlxuICAgICAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgICAodHlwaW5nKT1cIm9uVHlwaW5nKCRldmVudClcIlxuICAgICAgICAgICAgKGJsdXIpPVwib25Ub3VjaGVkKCRldmVudClcIlxuICAgICAgICAgICAgW3NlbGVjdGVkXT1cIml0ZW1zXCJcbiAgICAgICAgICAgIFtvdmVycmlkZUVsZW1lbnRdPVwiZWxlbWVudFwiPlxuICAgICAgICA8L25vdm8tcGlja2VyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlldy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxzcGFuICNwcmV2aWV3Pjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvUm93Q2hpcHNFbGVtZW50IGV4dGVuZHMgTm92b0NoaXBzRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGNsb3NlT25TZWxlY3Q6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscywgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29tcG9uZW50VXRpbHMsIGxhYmVscyk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==