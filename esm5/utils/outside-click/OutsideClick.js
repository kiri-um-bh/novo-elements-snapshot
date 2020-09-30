/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3V0c2lkZUNsaWNrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBeUIsTUFBTSxlQUFlLENBQUM7O0FBRXBFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7QUFLckM7Ozs7SUFPRSxzQkFBWSxPQUFtQjtRQUovQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLG1CQUFjLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFHbEUsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLHdCQUF3QjtRQUN4QiwyRUFBMkU7UUFDM0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxrQ0FBVzs7OztJQUFYO1FBQ0UsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSSxtQ0FBWTs7Ozs7O0lBQW5CLFVBQW9CLEtBQWtCLEVBQUUsVUFBb0I7UUFDMUQsd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2RSxvREFBb0Q7UUFDcEQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDdkQ7YUFBTTtZQUNMLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSSx5Q0FBa0I7Ozs7O0lBQXpCLFVBQTBCLEtBQWlCOzs7WUFFckMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDckUsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLFlBQVksRUFBRTtZQUNyQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hFO1FBQ0QsSUFBSSxZQUFZLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBdERELElBc0RDOzs7Ozs7O0lBckRDLCtCQUFvQjs7SUFDcEIsb0NBQXlCOztJQUN6Qiw4QkFBd0I7O0lBQ3hCLHNDQUFtRDs7SUFDbkQsc0NBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vSGVscGVycyc7XG5cbi8qKlxuICogT3V0c2lkZSBjbGljayBoZWxwZXIsIG1ha2VzIHRvIHNldCB0aGUgZWxlbWVudCBhcyBpbmFjdGl2ZSB3aGVuIGNsaWNraW5nIG91dHNpZGUgb2YgaXRcbiAqL1xuZXhwb3J0IGNsYXNzIE91dHNpZGVDbGljayBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIG90aGVyRWxlbWVudDogRWxlbWVudFJlZjtcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIG9uT3V0c2lkZUNsaWNrOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0O1xuICBvbkFjdGl2ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAvLyBDb21wb25lbnQgZWxlbWVudFxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgLy8gT3V0c2lkZSBjbGljayBoYW5kbGVyXG4gICAgLy8gUHJvcGVydHkgYmVjYXVzZSBgdGhpcy5mdW5jLmJpbmQodGhpcylgIHJldHVybnMgYSBuZXcgZnVuY3Rpb24gZWFjaCB0aW1lXG4gICAgdGhpcy5vbk91dHNpZGVDbGljayA9IHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiB0aGUgZWxlbWVudCBpcyBkZXN0cm95ZWQsIG1ha2Ugc3VyZSB0byByZW1vdmUgdGhlIGhhbmRsZXJcbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25PdXRzaWRlQ2xpY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGVsZW1lbnQgYXMgYWN0aXZlIGFuZCBhZGRzL3JlbW92ZXMgdGhlIG91dHNpZGUgY2xpY2sgaGFuZGxlclxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICogQHBhcmFtIGZvcmNlVmFsdWVcbiAgICovXG4gIHB1YmxpYyB0b2dnbGVBY3RpdmUoZXZlbnQ/OiBNb3VzZUV2ZW50LCBmb3JjZVZhbHVlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIC8vIFJldmVyc2UgdGhlIGFjdGl2ZSBwcm9wZXJ0eSAoaWYgZm9yY2VWYWx1ZSwgdXNlIHRoYXQpXG4gICAgdGhpcy5hY3RpdmUgPSAhSGVscGVycy5pc0JsYW5rKGZvcmNlVmFsdWUpID8gZm9yY2VWYWx1ZSA6ICF0aGlzLmFjdGl2ZTtcbiAgICAvLyBCaW5kIHdpbmRvdyBjbGljayBldmVudHMgdG8gaGlkZSBvbiBvdXRzaWRlIGNsaWNrXG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3V0c2lkZUNsaWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk91dHNpZGVDbGljayk7XG4gICAgfVxuICAgIC8vIEZpcmUgdGhlIGFjdGl2ZSBjaGFuZ2UgZXZlbnRcbiAgICB0aGlzLm9uQWN0aXZlQ2hhbmdlLmVtaXQodGhpcy5hY3RpdmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gY2xpY2tpbmcgb3V0c2lkZSwgY2hlY2tzIHRoZSBlbGVtZW50IGFuZCBjbG9zZXMgaWYgb3V0c2lkZVxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIHB1YmxpYyBoYW5kbGVPdXRzaWRlQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBJZiB0aGUgZWxlbWVudHMgZG9lc24ndCBjb250YWluIHRoZSB0YXJnZXQgZWxlbWVudCwgaXQgaXMgYW4gb3V0c2lkZSBjbGlja1xuICAgIGxldCBvdXRzaWRlQ2xpY2sgPSAhdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAodGhpcy5vdGhlckVsZW1lbnQgJiYgb3V0c2lkZUNsaWNrKSB7XG4gICAgICBvdXRzaWRlQ2xpY2sgPSAhdGhpcy5vdGhlckVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xuICAgIH1cbiAgICBpZiAob3V0c2lkZUNsaWNrKSB7XG4gICAgICB0aGlzLnRvZ2dsZUFjdGl2ZShldmVudCwgZmFsc2UpO1xuICAgIH1cbiAgfVxufVxuIl19