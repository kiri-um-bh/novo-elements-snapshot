/**
 * @fileoverview added by tsickle
 * Generated from: pipes/group-by/GroupBy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { Helpers, can } from '../../utils/Helpers';
export class GroupByPipe {
    /**
     * @param {?} input
     * @param {?} prop
     * @return {?}
     */
    transform(input, prop) {
        if (!Array.isArray(input)) {
            return input;
        }
        /** @type {?} */
        const arr = {};
        for (const value of input) {
            /** @type {?} */
            const field = can(value).have(prop);
            if (Helpers.isBlank(arr[field])) {
                arr[field] = [];
            }
            arr[field].push(value);
        }
        return Object.keys(arr).map((/**
         * @param {?} key
         * @return {?}
         */
        (key) => ({ key, value: arr[key] })));
    }
}
GroupByPipe.decorators = [
    { type: Pipe, args: [{
                name: 'groupBy',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBCeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJwaXBlcy9ncm91cC1ieS9Hcm91cEJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUtuRCxNQUFNLE9BQU8sV0FBVzs7Ozs7O0lBQ3RCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBWTtRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixPQUFPLEtBQUssQ0FBQztTQUNkOztjQUVLLEdBQUcsR0FBa0MsRUFBRTtRQUU3QyxLQUFLLE1BQU0sS0FBSyxJQUFJLEtBQUssRUFBRTs7a0JBQ25CLEtBQUssR0FBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN4QyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQy9CLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDakI7WUFFRCxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQ25FLENBQUM7OztZQXJCRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFNBQVM7YUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJzLCBjYW4gfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZ3JvdXBCeScsXG59KVxuZXhwb3J0IGNsYXNzIEdyb3VwQnlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpbnB1dDogYW55LCBwcm9wOiBzdHJpbmcpOiBBcnJheTxhbnk+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgY29uc3QgYXJyOiB7IFtrZXk6IHN0cmluZ106IEFycmF5PGFueT4gfSA9IHt9O1xuXG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiBpbnB1dCkge1xuICAgICAgY29uc3QgZmllbGQ6IGFueSA9IGNhbih2YWx1ZSkuaGF2ZShwcm9wKTtcbiAgICAgIGlmIChIZWxwZXJzLmlzQmxhbmsoYXJyW2ZpZWxkXSkpIHtcbiAgICAgICAgYXJyW2ZpZWxkXSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBhcnJbZmllbGRdLnB1c2godmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhhcnIpLm1hcCgoa2V5KSA9PiAoeyBrZXksIHZhbHVlOiBhcnJba2V5XSB9KSk7XG4gIH1cbn1cbiJdfQ==