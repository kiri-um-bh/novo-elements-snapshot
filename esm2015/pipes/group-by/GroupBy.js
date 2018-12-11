/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return Object.keys(arr).map((key) => ({ key, value: arr[key] }));
    }
}
GroupByPipe.decorators = [
    { type: Pipe, args: [{
                name: 'groupBy',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBCeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJwaXBlcy9ncm91cC1ieS9Hcm91cEJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBS25ELE1BQU0sT0FBTyxXQUFXOzs7Ozs7SUFDdEIsU0FBUyxDQUFDLEtBQVUsRUFBRSxJQUFZO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O2NBRUssR0FBRyxHQUFrQyxFQUFFO1FBRTdDLEtBQUssTUFBTSxLQUFLLElBQUksS0FBSyxFQUFFOztrQkFDbkIsS0FBSyxHQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3hDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDL0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNqQjtZQUVELEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEI7UUFFRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7O1lBckJGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsU0FBUzthQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlcnMsIGNhbiB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdncm91cEJ5Jyxcbn0pXG5leHBvcnQgY2xhc3MgR3JvdXBCeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIHByb3A6IHN0cmluZyk6IEFycmF5PGFueT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG5cbiAgICBjb25zdCBhcnI6IHsgW2tleTogc3RyaW5nXTogQXJyYXk8YW55PiB9ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGlucHV0KSB7XG4gICAgICBjb25zdCBmaWVsZDogYW55ID0gY2FuKHZhbHVlKS5oYXZlKHByb3ApO1xuICAgICAgaWYgKEhlbHBlcnMuaXNCbGFuayhhcnJbZmllbGRdKSkge1xuICAgICAgICBhcnJbZmllbGRdID0gW107XG4gICAgICB9XG5cbiAgICAgIGFycltmaWVsZF0ucHVzaCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFycikubWFwKChrZXkpID0+ICh7IGtleSwgdmFsdWU6IGFycltrZXldIH0pKTtcbiAgfVxufVxuIl19