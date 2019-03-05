/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { Helpers, can } from '../../utils/Helpers';
var GroupByPipe = /** @class */ (function () {
    function GroupByPipe() {
    }
    /**
     * @param {?} input
     * @param {?} prop
     * @return {?}
     */
    GroupByPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} prop
     * @return {?}
     */
    function (input, prop) {
        var e_1, _a;
        if (!Array.isArray(input)) {
            return input;
        }
        /** @type {?} */
        var arr = {};
        try {
            for (var input_1 = tslib_1.__values(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
                var value = input_1_1.value;
                /** @type {?} */
                var field = can(value).have(prop);
                if (Helpers.isBlank(arr[field])) {
                    arr[field] = [];
                }
                arr[field].push(value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (input_1_1 && !input_1_1.done && (_a = input_1.return)) _a.call(input_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return Object.keys(arr).map(function (key) { return ({ key: key, value: arr[key] }); });
    };
    GroupByPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'groupBy',
                },] }
    ];
    return GroupByPipe;
}());
export { GroupByPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBCeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJwaXBlcy9ncm91cC1ieS9Hcm91cEJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVuRDtJQUFBO0lBc0JBLENBQUM7Ozs7OztJQWxCQywrQkFBUzs7Ozs7SUFBVCxVQUFVLEtBQVUsRUFBRSxJQUFZOztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixPQUFPLEtBQUssQ0FBQztTQUNkOztZQUVLLEdBQUcsR0FBa0MsRUFBRTs7WUFFN0MsS0FBb0IsSUFBQSxVQUFBLGlCQUFBLEtBQUssQ0FBQSw0QkFBQSwrQ0FBRTtnQkFBdEIsSUFBTSxLQUFLLGtCQUFBOztvQkFDUixLQUFLLEdBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3hDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDL0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDakI7Z0JBRUQsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4Qjs7Ozs7Ozs7O1FBRUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLENBQUMsRUFBRSxHQUFHLEtBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBQ25FLENBQUM7O2dCQXJCRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFNBQVM7aUJBQ2hCOztJQW9CRCxrQkFBQztDQUFBLEFBdEJELElBc0JDO1NBbkJZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJzLCBjYW4gfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZ3JvdXBCeScsXG59KVxuZXhwb3J0IGNsYXNzIEdyb3VwQnlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpbnB1dDogYW55LCBwcm9wOiBzdHJpbmcpOiBBcnJheTxhbnk+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgY29uc3QgYXJyOiB7IFtrZXk6IHN0cmluZ106IEFycmF5PGFueT4gfSA9IHt9O1xuXG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiBpbnB1dCkge1xuICAgICAgY29uc3QgZmllbGQ6IGFueSA9IGNhbih2YWx1ZSkuaGF2ZShwcm9wKTtcbiAgICAgIGlmIChIZWxwZXJzLmlzQmxhbmsoYXJyW2ZpZWxkXSkpIHtcbiAgICAgICAgYXJyW2ZpZWxkXSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBhcnJbZmllbGRdLnB1c2godmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhhcnIpLm1hcCgoa2V5KSA9PiAoeyBrZXksIHZhbHVlOiBhcnJba2V5XSB9KSk7XG4gIH1cbn1cbiJdfQ==