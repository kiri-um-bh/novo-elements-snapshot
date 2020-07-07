/**
 * @fileoverview added by tsickle
 * Generated from: utils/outside-click/OutsideClick.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { EventEmitter } from '@angular/core';
// APP
import { Helpers } from '../Helpers';
/**
 * Outside click helper, makes to set the element as inactive when clicking outside of it
 */
var /**
 * Outside click helper, makes to set the element as inactive when clicking outside of it
 */
OutsideClick = /** @class */ (function () {
    function OutsideClick(element) {
        this.active = false;
        this.onActiveChange = new EventEmitter();
        // Component element
        this.element = element;
        // Outside click handler
        // Property because `this.func.bind(this)` returns a new function each time
        this.onOutsideClick = this.handleOutsideClick.bind(this);
    }
    /**
     * When the element is destroyed, make sure to remove the handler
     */
    /**
     * When the element is destroyed, make sure to remove the handler
     * @return {?}
     */
    OutsideClick.prototype.ngOnDestroy = /**
     * When the element is destroyed, make sure to remove the handler
     * @return {?}
     */
    function () {
        window.removeEventListener('click', this.onOutsideClick);
    };
    /**
     * Toggles the element as active and adds/removes the outside click handler
     * @param event
     * @param forceValue
     */
    /**
     * Toggles the element as active and adds/removes the outside click handler
     * @param {?=} event
     * @param {?=} forceValue
     * @return {?}
     */
    OutsideClick.prototype.toggleActive = /**
     * Toggles the element as active and adds/removes the outside click handler
     * @param {?=} event
     * @param {?=} forceValue
     * @return {?}
     */
    function (event, forceValue) {
        // Reverse the active property (if forceValue, use that)
        this.active = !Helpers.isBlank(forceValue) ? forceValue : !this.active;
        // Bind window click events to hide on outside click
        if (this.active) {
            window.addEventListener('click', this.onOutsideClick);
        }
        else {
            window.removeEventListener('click', this.onOutsideClick);
        }
        // Fire the active change event
        this.onActiveChange.emit(this.active);
    };
    /**
     * When clicking outside, checks the element and closes if outside
     * @param event
     */
    /**
     * When clicking outside, checks the element and closes if outside
     * @param {?} event
     * @return {?}
     */
    OutsideClick.prototype.handleOutsideClick = /**
     * When clicking outside, checks the element and closes if outside
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // If the elements doesn't contain the target element, it is an outside click
        /** @type {?} */
        var outsideClick = !this.element.nativeElement.contains(event.target);
        if (this.otherElement && outsideClick) {
            outsideClick = !this.otherElement.nativeElement.contains(event.target);
        }
        if (outsideClick) {
            this.toggleActive(event, false);
        }
    };
    return OutsideClick;
}());
/**
 * Outside click helper, makes to set the element as inactive when clicking outside of it
 */
export { OutsideClick };
if (false) {
    /** @type {?} */
    OutsideClick.prototype.element;
    /** @type {?} */
    OutsideClick.prototype.otherElement;
    /** @type {?} */
    OutsideClick.prototype.active;
    /** @type {?} */
    OutsideClick.prototype.onOutsideClick;
    /** @type {?} */
    OutsideClick.prototype.onActiveChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3V0c2lkZUNsaWNrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQXlCLE1BQU0sZUFBZSxDQUFDOztBQUVwRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7O0FBS3JDOzs7O0lBT0Usc0JBQVksT0FBbUI7UUFKL0IsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixtQkFBYyxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBR2xFLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2Qix3QkFBd0I7UUFDeEIsMkVBQTJFO1FBQzNFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsa0NBQVc7Ozs7SUFBWDtRQUNFLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0ksbUNBQVk7Ozs7OztJQUFuQixVQUFvQixLQUFrQixFQUFFLFVBQW9CO1FBQzFELHdEQUF3RDtRQUN4RCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkUsb0RBQW9EO1FBQ3BELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3ZEO2FBQU07WUFDTCxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMxRDtRQUNELCtCQUErQjtRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0kseUNBQWtCOzs7OztJQUF6QixVQUEwQixLQUFpQjs7O1lBRXJDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3JFLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxZQUFZLEVBQUU7WUFDckMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4RTtRQUNELElBQUksWUFBWSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXRERCxJQXNEQzs7Ozs7OztJQXJEQywrQkFBb0I7O0lBQ3BCLG9DQUF5Qjs7SUFDekIsOEJBQXdCOztJQUN4QixzQ0FBbUQ7O0lBQ25ELHNDQUFvRSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uL0hlbHBlcnMnO1xuXG4vKipcbiAqIE91dHNpZGUgY2xpY2sgaGVscGVyLCBtYWtlcyB0byBzZXQgdGhlIGVsZW1lbnQgYXMgaW5hY3RpdmUgd2hlbiBjbGlja2luZyBvdXRzaWRlIG9mIGl0XG4gKi9cbmV4cG9ydCBjbGFzcyBPdXRzaWRlQ2xpY2sgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBlbGVtZW50OiBFbGVtZW50UmVmO1xuICBvdGhlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBvbk91dHNpZGVDbGljazogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdDtcbiAgb25BY3RpdmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgLy8gQ29tcG9uZW50IGVsZW1lbnRcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIC8vIE91dHNpZGUgY2xpY2sgaGFuZGxlclxuICAgIC8vIFByb3BlcnR5IGJlY2F1c2UgYHRoaXMuZnVuYy5iaW5kKHRoaXMpYCByZXR1cm5zIGEgbmV3IGZ1bmN0aW9uIGVhY2ggdGltZVxuICAgIHRoaXMub25PdXRzaWRlQ2xpY2sgPSB0aGlzLmhhbmRsZU91dHNpZGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIGVsZW1lbnQgaXMgZGVzdHJveWVkLCBtYWtlIHN1cmUgdG8gcmVtb3ZlIHRoZSBoYW5kbGVyXG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3V0c2lkZUNsaWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBlbGVtZW50IGFzIGFjdGl2ZSBhbmQgYWRkcy9yZW1vdmVzIHRoZSBvdXRzaWRlIGNsaWNrIGhhbmRsZXJcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBwYXJhbSBmb3JjZVZhbHVlXG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlQWN0aXZlKGV2ZW50PzogTW91c2VFdmVudCwgZm9yY2VWYWx1ZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvLyBSZXZlcnNlIHRoZSBhY3RpdmUgcHJvcGVydHkgKGlmIGZvcmNlVmFsdWUsIHVzZSB0aGF0KVxuICAgIHRoaXMuYWN0aXZlID0gIUhlbHBlcnMuaXNCbGFuayhmb3JjZVZhbHVlKSA/IGZvcmNlVmFsdWUgOiAhdGhpcy5hY3RpdmU7XG4gICAgLy8gQmluZCB3aW5kb3cgY2xpY2sgZXZlbnRzIHRvIGhpZGUgb24gb3V0c2lkZSBjbGlja1xuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk91dHNpZGVDbGljayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25PdXRzaWRlQ2xpY2spO1xuICAgIH1cbiAgICAvLyBGaXJlIHRoZSBhY3RpdmUgY2hhbmdlIGV2ZW50XG4gICAgdGhpcy5vbkFjdGl2ZUNoYW5nZS5lbWl0KHRoaXMuYWN0aXZlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGNsaWNraW5nIG91dHNpZGUsIGNoZWNrcyB0aGUgZWxlbWVudCBhbmQgY2xvc2VzIGlmIG91dHNpZGVcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgaGFuZGxlT3V0c2lkZUNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgLy8gSWYgdGhlIGVsZW1lbnRzIGRvZXNuJ3QgY29udGFpbiB0aGUgdGFyZ2V0IGVsZW1lbnQsIGl0IGlzIGFuIG91dHNpZGUgY2xpY2tcbiAgICBsZXQgb3V0c2lkZUNsaWNrID0gIXRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG4gICAgaWYgKHRoaXMub3RoZXJFbGVtZW50ICYmIG91dHNpZGVDbGljaykge1xuICAgICAgb3V0c2lkZUNsaWNrID0gIXRoaXMub3RoZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG4gICAgaWYgKG91dHNpZGVDbGljaykge1xuICAgICAgdGhpcy50b2dnbGVBY3RpdmUoZXZlbnQsIGZhbHNlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==