// NG2
import { Directive, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
var NovoTableKeepFilterFocus = /** @class */ (function () {
    function NovoTableKeepFilterFocus(element) {
        this.element = element;
    }
    NovoTableKeepFilterFocus.prototype.ngAfterViewInit = function () {
        this.element.nativeElement.focus();
    };
    NovoTableKeepFilterFocus.ɵfac = function NovoTableKeepFilterFocus_Factory(t) { return new (t || NovoTableKeepFilterFocus)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    NovoTableKeepFilterFocus.ɵdir = i0.ɵɵdefineDirective({ type: NovoTableKeepFilterFocus, selectors: [["", "keepFilterFocused", ""]] });
    return NovoTableKeepFilterFocus;
}());
export { NovoTableKeepFilterFocus };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTableKeepFilterFocus, [{
        type: Directive,
        args: [{
                selector: '[keepFilterFocused]',
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2VlcEZpbHRlckZvY3VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RhYmxlL2V4dHJhcy9rZWVwLWZpbHRlci1mb2N1cy9LZWVwRmlsdGVyRm9jdXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQWlCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFckU7SUFJRSxrQ0FBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtJQUFHLENBQUM7SUFFM0Msa0RBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JDLENBQUM7b0dBTFUsd0JBQXdCO2lFQUF4Qix3QkFBd0I7bUNBTnJDO0NBWUMsQUFURCxJQVNDO1NBTlksd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FIcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7YUFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdba2VlcEZpbHRlckZvY3VzZWRdJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYmxlS2VlcEZpbHRlckZvY3VzIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxufVxuIl19