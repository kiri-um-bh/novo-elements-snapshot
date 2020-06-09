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
export class OutsideClick {
    /**
     * @param {?} element
     */
    constructor(element) {
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
     * @return {?}
     */
    ngOnDestroy() {
        window.removeEventListener('click', this.onOutsideClick);
    }
    /**
     * Toggles the element as active and adds/removes the outside click handler
     * @param {?=} event
     * @param {?=} forceValue
     * @return {?}
     */
    toggleActive(event, forceValue) {
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
    }
    /**
     * When clicking outside, checks the element and closes if outside
     * @param {?} event
     * @return {?}
     */
    handleOutsideClick(event) {
        // If the elements doesn't contain the target element, it is an outside click
        /** @type {?} */
        let outsideClick = !this.element.nativeElement.contains(event.target);
        if (this.otherElement && outsideClick) {
            outsideClick = !this.otherElement.nativeElement.contains(event.target);
        }
        if (outsideClick) {
            this.toggleActive(event, false);
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3V0c2lkZUNsaWNrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQXlCLE1BQU0sZUFBZSxDQUFDOztBQUVwRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7O0FBS3JDLE1BQU0sT0FBTyxZQUFZOzs7O0lBT3ZCLFlBQVksT0FBbUI7UUFKL0IsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixtQkFBYyxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBR2xFLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2Qix3QkFBd0I7UUFDeEIsMkVBQTJFO1FBQzNFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUtELFdBQVc7UUFDVCxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7O0lBS00sWUFBWSxDQUFDLEtBQWtCLEVBQUUsVUFBb0I7UUFDMUQsd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2RSxvREFBb0Q7UUFDcEQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDdkQ7YUFBTTtZQUNMLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7SUFLTSxrQkFBa0IsQ0FBQyxLQUFpQjs7O1lBRXJDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3JFLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxZQUFZLEVBQUU7WUFDckMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4RTtRQUNELElBQUksWUFBWSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztDQUNGOzs7SUFsREMsK0JBQW9COztJQUNwQixvQ0FBeUI7O0lBQ3pCLDhCQUF3Qjs7SUFDeEIsc0NBQW1EOztJQUNuRCxzQ0FBb0UiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi9IZWxwZXJzJztcblxuLyoqXG4gKiBPdXRzaWRlIGNsaWNrIGhlbHBlciwgbWFrZXMgdG8gc2V0IHRoZSBlbGVtZW50IGFzIGluYWN0aXZlIHdoZW4gY2xpY2tpbmcgb3V0c2lkZSBvZiBpdFxuICovXG5leHBvcnQgY2xhc3MgT3V0c2lkZUNsaWNrIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgZWxlbWVudDogRWxlbWVudFJlZjtcbiAgb3RoZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuICBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgb25PdXRzaWRlQ2xpY2s6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3Q7XG4gIG9uQWN0aXZlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIC8vIENvbXBvbmVudCBlbGVtZW50XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAvLyBPdXRzaWRlIGNsaWNrIGhhbmRsZXJcbiAgICAvLyBQcm9wZXJ0eSBiZWNhdXNlIGB0aGlzLmZ1bmMuYmluZCh0aGlzKWAgcmV0dXJucyBhIG5ldyBmdW5jdGlvbiBlYWNoIHRpbWVcbiAgICB0aGlzLm9uT3V0c2lkZUNsaWNrID0gdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBlbGVtZW50IGlzIGRlc3Ryb3llZCwgbWFrZSBzdXJlIHRvIHJlbW92ZSB0aGUgaGFuZGxlclxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk91dHNpZGVDbGljayk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZWxlbWVudCBhcyBhY3RpdmUgYW5kIGFkZHMvcmVtb3ZlcyB0aGUgb3V0c2lkZSBjbGljayBoYW5kbGVyXG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlQWN0aXZlKGV2ZW50PzogTW91c2VFdmVudCwgZm9yY2VWYWx1ZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvLyBSZXZlcnNlIHRoZSBhY3RpdmUgcHJvcGVydHkgKGlmIGZvcmNlVmFsdWUsIHVzZSB0aGF0KVxuICAgIHRoaXMuYWN0aXZlID0gIUhlbHBlcnMuaXNCbGFuayhmb3JjZVZhbHVlKSA/IGZvcmNlVmFsdWUgOiAhdGhpcy5hY3RpdmU7XG4gICAgLy8gQmluZCB3aW5kb3cgY2xpY2sgZXZlbnRzIHRvIGhpZGUgb24gb3V0c2lkZSBjbGlja1xuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk91dHNpZGVDbGljayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25PdXRzaWRlQ2xpY2spO1xuICAgIH1cbiAgICAvLyBGaXJlIHRoZSBhY3RpdmUgY2hhbmdlIGV2ZW50XG4gICAgdGhpcy5vbkFjdGl2ZUNoYW5nZS5lbWl0KHRoaXMuYWN0aXZlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGNsaWNraW5nIG91dHNpZGUsIGNoZWNrcyB0aGUgZWxlbWVudCBhbmQgY2xvc2VzIGlmIG91dHNpZGVcbiAgICovXG4gIHB1YmxpYyBoYW5kbGVPdXRzaWRlQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBJZiB0aGUgZWxlbWVudHMgZG9lc24ndCBjb250YWluIHRoZSB0YXJnZXQgZWxlbWVudCwgaXQgaXMgYW4gb3V0c2lkZSBjbGlja1xuICAgIGxldCBvdXRzaWRlQ2xpY2sgPSAhdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAodGhpcy5vdGhlckVsZW1lbnQgJiYgb3V0c2lkZUNsaWNrKSB7XG4gICAgICBvdXRzaWRlQ2xpY2sgPSAhdGhpcy5vdGhlckVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xuICAgIH1cbiAgICBpZiAob3V0c2lkZUNsaWNrKSB7XG4gICAgICB0aGlzLnRvZ2dsZUFjdGl2ZShldmVudCwgZmFsc2UpO1xuICAgIH1cbiAgfVxufVxuIl19