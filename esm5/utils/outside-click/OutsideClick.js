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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3V0c2lkZUNsaWNrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQXlCLE1BQU0sZUFBZSxDQUFDOztBQUVwRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7O0FBS3JDOzs7O0lBT0Usc0JBQVksT0FBbUI7UUFKL0IsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixtQkFBYyxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBR2xFLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2Qix3QkFBd0I7UUFDeEIsMkVBQTJFO1FBQzNFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsa0NBQVc7Ozs7SUFBWDtRQUNFLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7T0FFRzs7Ozs7OztJQUNJLG1DQUFZOzs7Ozs7SUFBbkIsVUFBb0IsS0FBa0IsRUFBRSxVQUFvQjtRQUMxRCx3REFBd0Q7UUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZFLG9EQUFvRDtRQUNwRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUN2RDthQUFNO1lBQ0wsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDMUQ7UUFDRCwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0kseUNBQWtCOzs7OztJQUF6QixVQUEwQixLQUFpQjs7O1lBRXJDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3JFLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxZQUFZLEVBQUU7WUFDckMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4RTtRQUNELElBQUksWUFBWSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQW5ERCxJQW1EQzs7Ozs7OztJQWxEQywrQkFBb0I7O0lBQ3BCLG9DQUF5Qjs7SUFDekIsOEJBQXdCOztJQUN4QixzQ0FBbUQ7O0lBQ25ELHNDQUFvRSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uL0hlbHBlcnMnO1xuXG4vKipcbiAqIE91dHNpZGUgY2xpY2sgaGVscGVyLCBtYWtlcyB0byBzZXQgdGhlIGVsZW1lbnQgYXMgaW5hY3RpdmUgd2hlbiBjbGlja2luZyBvdXRzaWRlIG9mIGl0XG4gKi9cbmV4cG9ydCBjbGFzcyBPdXRzaWRlQ2xpY2sgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBlbGVtZW50OiBFbGVtZW50UmVmO1xuICBvdGhlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBvbk91dHNpZGVDbGljazogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdDtcbiAgb25BY3RpdmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgLy8gQ29tcG9uZW50IGVsZW1lbnRcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIC8vIE91dHNpZGUgY2xpY2sgaGFuZGxlclxuICAgIC8vIFByb3BlcnR5IGJlY2F1c2UgYHRoaXMuZnVuYy5iaW5kKHRoaXMpYCByZXR1cm5zIGEgbmV3IGZ1bmN0aW9uIGVhY2ggdGltZVxuICAgIHRoaXMub25PdXRzaWRlQ2xpY2sgPSB0aGlzLmhhbmRsZU91dHNpZGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIGVsZW1lbnQgaXMgZGVzdHJveWVkLCBtYWtlIHN1cmUgdG8gcmVtb3ZlIHRoZSBoYW5kbGVyXG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3V0c2lkZUNsaWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBlbGVtZW50IGFzIGFjdGl2ZSBhbmQgYWRkcy9yZW1vdmVzIHRoZSBvdXRzaWRlIGNsaWNrIGhhbmRsZXJcbiAgICovXG4gIHB1YmxpYyB0b2dnbGVBY3RpdmUoZXZlbnQ/OiBNb3VzZUV2ZW50LCBmb3JjZVZhbHVlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIC8vIFJldmVyc2UgdGhlIGFjdGl2ZSBwcm9wZXJ0eSAoaWYgZm9yY2VWYWx1ZSwgdXNlIHRoYXQpXG4gICAgdGhpcy5hY3RpdmUgPSAhSGVscGVycy5pc0JsYW5rKGZvcmNlVmFsdWUpID8gZm9yY2VWYWx1ZSA6ICF0aGlzLmFjdGl2ZTtcbiAgICAvLyBCaW5kIHdpbmRvdyBjbGljayBldmVudHMgdG8gaGlkZSBvbiBvdXRzaWRlIGNsaWNrXG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3V0c2lkZUNsaWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk91dHNpZGVDbGljayk7XG4gICAgfVxuICAgIC8vIEZpcmUgdGhlIGFjdGl2ZSBjaGFuZ2UgZXZlbnRcbiAgICB0aGlzLm9uQWN0aXZlQ2hhbmdlLmVtaXQodGhpcy5hY3RpdmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gY2xpY2tpbmcgb3V0c2lkZSwgY2hlY2tzIHRoZSBlbGVtZW50IGFuZCBjbG9zZXMgaWYgb3V0c2lkZVxuICAgKi9cbiAgcHVibGljIGhhbmRsZU91dHNpZGVDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIC8vIElmIHRoZSBlbGVtZW50cyBkb2Vzbid0IGNvbnRhaW4gdGhlIHRhcmdldCBlbGVtZW50LCBpdCBpcyBhbiBvdXRzaWRlIGNsaWNrXG4gICAgbGV0IG91dHNpZGVDbGljayA9ICF0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xuICAgIGlmICh0aGlzLm90aGVyRWxlbWVudCAmJiBvdXRzaWRlQ2xpY2spIHtcbiAgICAgIG91dHNpZGVDbGljayA9ICF0aGlzLm90aGVyRWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuICAgIGlmIChvdXRzaWRlQ2xpY2spIHtcbiAgICAgIHRoaXMudG9nZ2xlQWN0aXZlKGV2ZW50LCBmYWxzZSk7XG4gICAgfVxuICB9XG59XG4iXX0=