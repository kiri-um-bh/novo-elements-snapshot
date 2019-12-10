/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/extras/percentage-cell/PercentageCell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component } from '@angular/core';
// APP
import { BaseRenderer } from '../base-renderer/BaseRenderer';
var PercentageCell = /** @class */ (function (_super) {
    tslib_1.__extends(PercentageCell, _super);
    function PercentageCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PercentageCell.decorators = [
        { type: Component, args: [{
                    selector: 'percentage-cell',
                    template: "\n        <div class=\"percentage\" *ngIf=\"value || value === 0\">{{ value | percent:'1.0-2' }}</div>\n    "
                }] }
    ];
    return PercentageCell;
}(BaseRenderer));
export { PercentageCell };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyY2VudGFnZUNlbGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL3BlcmNlbnRhZ2UtY2VsbC9QZXJjZW50YWdlQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTdEO0lBTW9DLDBDQUFZO0lBTmhEOztJQU1rRCxDQUFDOztnQkFObEQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSw4R0FFUDtpQkFDSjs7SUFDaUQscUJBQUM7Q0FBQSxBQU5uRCxDQU1vQyxZQUFZLEdBQUc7U0FBdEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEJhc2VSZW5kZXJlciB9IGZyb20gJy4uL2Jhc2UtcmVuZGVyZXIvQmFzZVJlbmRlcmVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGVyY2VudGFnZS1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInBlcmNlbnRhZ2VcIiAqbmdJZj1cInZhbHVlIHx8IHZhbHVlID09PSAwXCI+e3sgdmFsdWUgfCBwZXJjZW50OicxLjAtMicgfX08L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBQZXJjZW50YWdlQ2VsbCBleHRlbmRzIEJhc2VSZW5kZXJlciB7fVxuIl19