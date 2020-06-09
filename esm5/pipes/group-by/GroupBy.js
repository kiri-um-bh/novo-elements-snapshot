import { __values } from "tslib";
import { Pipe } from '@angular/core';
import { Helpers, can } from '../../utils/Helpers';
import * as i0 from "@angular/core";
var GroupByPipe = /** @class */ (function () {
    function GroupByPipe() {
    }
    GroupByPipe.prototype.transform = function (input, prop) {
        var e_1, _a;
        if (!Array.isArray(input)) {
            return input;
        }
        var arr = {};
        try {
            for (var input_1 = __values(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
                var value = input_1_1.value;
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
    GroupByPipe.ɵfac = function GroupByPipe_Factory(t) { return new (t || GroupByPipe)(); };
    GroupByPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "groupBy", type: GroupByPipe, pure: true });
    return GroupByPipe;
}());
export { GroupByPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GroupByPipe, [{
        type: Pipe,
        args: [{
                name: 'groupBy',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBCeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJwaXBlcy9ncm91cC1ieS9Hcm91cEJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUVuRDtJQUFBO0tBc0JDO0lBbEJDLCtCQUFTLEdBQVQsVUFBVSxLQUFVLEVBQUUsSUFBWTs7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQU0sR0FBRyxHQUFrQyxFQUFFLENBQUM7O1lBRTlDLEtBQW9CLElBQUEsVUFBQSxTQUFBLEtBQUssQ0FBQSw0QkFBQSwrQ0FBRTtnQkFBdEIsSUFBTSxLQUFLLGtCQUFBO2dCQUNkLElBQU0sS0FBSyxHQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDL0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDakI7Z0JBRUQsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4Qjs7Ozs7Ozs7O1FBRUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLENBQUMsRUFBRSxHQUFHLEtBQUEsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBQ25FLENBQUM7MEVBbEJVLFdBQVc7aUVBQVgsV0FBVztzQkFOeEI7Q0F5QkMsQUF0QkQsSUFzQkM7U0FuQlksV0FBVztrREFBWCxXQUFXO2NBSHZCLElBQUk7ZUFBQztnQkFDSixJQUFJLEVBQUUsU0FBUzthQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlcnMsIGNhbiB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdncm91cEJ5Jyxcbn0pXG5leHBvcnQgY2xhc3MgR3JvdXBCeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGlucHV0OiBhbnksIHByb3A6IHN0cmluZyk6IEFycmF5PGFueT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG5cbiAgICBjb25zdCBhcnI6IHsgW2tleTogc3RyaW5nXTogQXJyYXk8YW55PiB9ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGlucHV0KSB7XG4gICAgICBjb25zdCBmaWVsZDogYW55ID0gY2FuKHZhbHVlKS5oYXZlKHByb3ApO1xuICAgICAgaWYgKEhlbHBlcnMuaXNCbGFuayhhcnJbZmllbGRdKSkge1xuICAgICAgICBhcnJbZmllbGRdID0gW107XG4gICAgICB9XG5cbiAgICAgIGFycltmaWVsZF0ucHVzaCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFycikubWFwKChrZXkpID0+ICh7IGtleSwgdmFsdWU6IGFycltrZXldIH0pKTtcbiAgfVxufVxuIl19