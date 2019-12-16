/**
 * @fileoverview added by tsickle
 * Generated from: elements/expansion/accordion.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CdkAccordion } from '@angular/cdk/accordion';
/**
 * Directive for a Material Design Accordion.
 */
var NovoAccordion = /** @class */ (function (_super) {
    tslib_1.__extends(NovoAccordion, _super);
    function NovoAccordion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._hideToggle = false;
        /**
         * The display mode used for all expansion panels in the accordion. Currently two display
         * modes exist:
         *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
         *     panel at a different elevation from the reset of the accordion.
         *  flat - no spacing is placed around expanded panels, showing all panels at the same
         *     elevation.
         */
        _this.displayMode = 'default';
        return _this;
    }
    Object.defineProperty(NovoAccordion.prototype, "hideToggle", {
        /** Whether the expansion indicator should be hidden. */
        get: /**
         * Whether the expansion indicator should be hidden.
         * @return {?}
         */
        function () {
            return this._hideToggle;
        },
        set: /**
         * @param {?} show
         * @return {?}
         */
        function (show) {
            this._hideToggle = coerceBooleanProperty(show);
        },
        enumerable: true,
        configurable: true
    });
    NovoAccordion.decorators = [
        { type: Directive, args: [{
                    selector: 'novo-accordion',
                    exportAs: 'novoAccordion',
                    host: {
                        class: 'novo-accordion',
                    },
                },] }
    ];
    NovoAccordion.propDecorators = {
        hideToggle: [{ type: Input }],
        displayMode: [{ type: Input }]
    };
    return NovoAccordion;
}(CdkAccordion));
export { NovoAccordion };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NovoAccordion.prototype._hideToggle;
    /**
     * The display mode used for all expansion panels in the accordion. Currently two display
     * modes exist:
     *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
     *     panel at a different elevation from the reset of the accordion.
     *  flat - no spacing is placed around expanded panels, showing all panels at the same
     *     elevation.
     * @type {?}
     */
    NovoAccordion.prototype.displayMode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2V4cGFuc2lvbi9hY2NvcmRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBUXREO0lBT21DLHlDQUFZO0lBUC9DO1FBQUEscUVBNEJDO1FBWlMsaUJBQVcsR0FBWSxLQUFLLENBQUM7Ozs7Ozs7OztRQVdyQyxpQkFBVyxHQUE2QixTQUFTLENBQUM7O0lBQ3BELENBQUM7SUFuQkMsc0JBQ0kscUNBQVU7UUFGZCx3REFBd0Q7Ozs7O1FBQ3hEO1lBRUUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7Ozs7O1FBQ0QsVUFBZSxJQUFhO1lBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQzs7O09BSEE7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsZUFBZTtvQkFDekIsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxnQkFBZ0I7cUJBQ3hCO2lCQUNGOzs7NkJBR0UsS0FBSzs4QkFpQkwsS0FBSzs7SUFFUixvQkFBQztDQUFBLEFBNUJELENBT21DLFlBQVksR0FxQjlDO1NBckJZLGFBQWE7Ozs7OztJQVN4QixvQ0FBcUM7Ozs7Ozs7Ozs7SUFVckMsb0NBQ2tEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IENka0FjY29yZGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hY2NvcmRpb24nO1xuXG4vKiogTm92b0FjY29yZGlvbidzIGRpc3BsYXkgbW9kZXMuICovXG5leHBvcnQgdHlwZSBOb3ZvQWNjb3JkaW9uRGlzcGxheU1vZGUgPSAnZGVmYXVsdCcgfCAnZmxhdCc7XG5cbi8qKlxuICogRGlyZWN0aXZlIGZvciBhIE1hdGVyaWFsIERlc2lnbiBBY2NvcmRpb24uXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tYWNjb3JkaW9uJyxcbiAgZXhwb3J0QXM6ICdub3ZvQWNjb3JkaW9uJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbm92by1hY2NvcmRpb24nLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWNjb3JkaW9uIGV4dGVuZHMgQ2RrQWNjb3JkaW9uIHtcbiAgLyoqIFdoZXRoZXIgdGhlIGV4cGFuc2lvbiBpbmRpY2F0b3Igc2hvdWxkIGJlIGhpZGRlbi4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGhpZGVUb2dnbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGVUb2dnbGU7XG4gIH1cbiAgc2V0IGhpZGVUb2dnbGUoc2hvdzogYm9vbGVhbikge1xuICAgIHRoaXMuX2hpZGVUb2dnbGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoc2hvdyk7XG4gIH1cbiAgcHJpdmF0ZSBfaGlkZVRvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgZGlzcGxheSBtb2RlIHVzZWQgZm9yIGFsbCBleHBhbnNpb24gcGFuZWxzIGluIHRoZSBhY2NvcmRpb24uIEN1cnJlbnRseSB0d28gZGlzcGxheVxuICAgKiBtb2RlcyBleGlzdDpcbiAgICogIGRlZmF1bHQgLSBhIGd1dHRlci1saWtlIHNwYWNpbmcgaXMgcGxhY2VkIGFyb3VuZCBhbnkgZXhwYW5kZWQgcGFuZWwsIHBsYWNpbmcgdGhlIGV4cGFuZGVkXG4gICAqICAgICBwYW5lbCBhdCBhIGRpZmZlcmVudCBlbGV2YXRpb24gZnJvbSB0aGUgcmVzZXQgb2YgdGhlIGFjY29yZGlvbi5cbiAgICogIGZsYXQgLSBubyBzcGFjaW5nIGlzIHBsYWNlZCBhcm91bmQgZXhwYW5kZWQgcGFuZWxzLCBzaG93aW5nIGFsbCBwYW5lbHMgYXQgdGhlIHNhbWVcbiAgICogICAgIGVsZXZhdGlvbi5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGRpc3BsYXlNb2RlOiBOb3ZvQWNjb3JkaW9uRGlzcGxheU1vZGUgPSAnZGVmYXVsdCc7XG59XG4iXX0=