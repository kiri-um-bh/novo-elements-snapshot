/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/extras/keep-filter-focus/KeepFilterFocus.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Directive, ElementRef } from '@angular/core';
var NovoTableKeepFilterFocus = /** @class */ (function () {
    function NovoTableKeepFilterFocus(element) {
        this.element = element;
    }
    /**
     * @return {?}
     */
    NovoTableKeepFilterFocus.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.element.nativeElement.focus();
    };
    NovoTableKeepFilterFocus.decorators = [
        { type: Directive, args: [{
                    selector: '[keepFilterFocused]',
                },] }
    ];
    /** @nocollapse */
    NovoTableKeepFilterFocus.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return NovoTableKeepFilterFocus;
}());
export { NovoTableKeepFilterFocus };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NovoTableKeepFilterFocus.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2VlcEZpbHRlckZvY3VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RhYmxlL2V4dHJhcy9rZWVwLWZpbHRlci1mb2N1cy9LZWVwRmlsdGVyRm9jdXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBaUIsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFO0lBSUUsa0NBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7SUFBRyxDQUFDOzs7O0lBRTNDLGtEQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JDLENBQUM7O2dCQVJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO2lCQUNoQzs7OztnQkFKa0MsVUFBVTs7SUFXN0MsK0JBQUM7Q0FBQSxBQVRELElBU0M7U0FOWSx3QkFBd0I7Ozs7OztJQUN2QiwyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdba2VlcEZpbHRlckZvY3VzZWRdJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYmxlS2VlcEZpbHRlckZvY3VzIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxufVxuIl19