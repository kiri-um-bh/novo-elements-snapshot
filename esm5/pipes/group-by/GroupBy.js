/**
 * @fileoverview added by tsickle
 * Generated from: pipes/group-by/GroupBy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return Object.keys(arr).map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return ({ key: key, value: arr[key] }); }));
    };
    GroupByPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'groupBy',
                },] }
    ];
    return GroupByPipe;
}());
export { GroupByPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBCeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJwaXBlcy9ncm91cC1ieS9Hcm91cEJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFbkQ7SUFBQTtJQXNCQSxDQUFDOzs7Ozs7SUFsQkMsK0JBQVM7Ozs7O0lBQVQsVUFBVSxLQUFVLEVBQUUsSUFBWTs7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsT0FBTyxLQUFLLENBQUM7U0FDZDs7WUFFSyxHQUFHLEdBQWtDLEVBQUU7O1lBRTdDLEtBQW9CLElBQUEsVUFBQSxpQkFBQSxLQUFLLENBQUEsNEJBQUEsK0NBQUU7Z0JBQXRCLElBQU0sS0FBSyxrQkFBQTs7b0JBQ1IsS0FBSyxHQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN4QyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQy9CLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQ2pCO2dCQUVELEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEI7Ozs7Ozs7OztRQUVELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxDQUFDLEVBQUUsR0FBRyxLQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQTFCLENBQTBCLEVBQUMsQ0FBQztJQUNuRSxDQUFDOztnQkFyQkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxTQUFTO2lCQUNoQjs7SUFvQkQsa0JBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQW5CWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVycywgY2FuIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2dyb3VwQnknLFxufSlcbmV4cG9ydCBjbGFzcyBHcm91cEJ5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaW5wdXQ6IGFueSwgcHJvcDogc3RyaW5nKTogQXJyYXk8YW55PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIGNvbnN0IGFycjogeyBba2V5OiBzdHJpbmddOiBBcnJheTxhbnk+IH0gPSB7fTtcblxuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgaW5wdXQpIHtcbiAgICAgIGNvbnN0IGZpZWxkOiBhbnkgPSBjYW4odmFsdWUpLmhhdmUocHJvcCk7XG4gICAgICBpZiAoSGVscGVycy5pc0JsYW5rKGFycltmaWVsZF0pKSB7XG4gICAgICAgIGFycltmaWVsZF0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgYXJyW2ZpZWxkXS5wdXNoKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYXJyKS5tYXAoKGtleSkgPT4gKHsga2V5LCB2YWx1ZTogYXJyW2tleV0gfSkpO1xuICB9XG59XG4iXX0=