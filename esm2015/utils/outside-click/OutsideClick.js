// NG2
import { EventEmitter } from '@angular/core';
// APP
import { Helpers } from '../Helpers';
import * as i0 from "@angular/core";
/**
 * Outside click helper, makes to set the element as inactive when clicking outside of it
 */
export class OutsideClick {
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
     */
    ngOnDestroy() {
        window.removeEventListener('click', this.onOutsideClick);
    }
    /**
     * Toggles the element as active and adds/removes the outside click handler
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
     */
    handleOutsideClick(event) {
        // If the elements doesn't contain the target element, it is an outside click
        let outsideClick = !this.element.nativeElement.contains(event.target);
        if (this.otherElement && outsideClick) {
            outsideClick = !this.otherElement.nativeElement.contains(event.target);
        }
        if (outsideClick) {
            this.toggleActive(event, false);
        }
    }
}
OutsideClick.ɵfac = function OutsideClick_Factory(t) { return new (t || OutsideClick)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
OutsideClick.ɵdir = i0.ɵɵdefineDirective({ type: OutsideClick });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3V0c2lkZUNsaWNrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsWUFBWSxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUNwRSxNQUFNO0FBQ04sT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQzs7QUFFckM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sWUFBWTtJQU92QixZQUFZLE9BQW1CO1FBSi9CLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsbUJBQWMsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUdsRSxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsd0JBQXdCO1FBQ3hCLDJFQUEyRTtRQUMzRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVztRQUNULE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7T0FFRztJQUNJLFlBQVksQ0FBQyxLQUFrQixFQUFFLFVBQW9CO1FBQzFELHdEQUF3RDtRQUN4RCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkUsb0RBQW9EO1FBQ3BELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3ZEO2FBQU07WUFDTCxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMxRDtRQUNELCtCQUErQjtRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksa0JBQWtCLENBQUMsS0FBaUI7UUFDekMsNkVBQTZFO1FBQzdFLElBQUksWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksWUFBWSxFQUFFO1lBQ3JDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEU7UUFDRCxJQUFJLFlBQVksRUFBRTtZQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7O3dFQWxEVSxZQUFZO2lEQUFaLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi9IZWxwZXJzJztcblxuLyoqXG4gKiBPdXRzaWRlIGNsaWNrIGhlbHBlciwgbWFrZXMgdG8gc2V0IHRoZSBlbGVtZW50IGFzIGluYWN0aXZlIHdoZW4gY2xpY2tpbmcgb3V0c2lkZSBvZiBpdFxuICovXG5leHBvcnQgY2xhc3MgT3V0c2lkZUNsaWNrIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgZWxlbWVudDogRWxlbWVudFJlZjtcbiAgb3RoZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuICBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgb25PdXRzaWRlQ2xpY2s6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3Q7XG4gIG9uQWN0aXZlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIC8vIENvbXBvbmVudCBlbGVtZW50XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAvLyBPdXRzaWRlIGNsaWNrIGhhbmRsZXJcbiAgICAvLyBQcm9wZXJ0eSBiZWNhdXNlIGB0aGlzLmZ1bmMuYmluZCh0aGlzKWAgcmV0dXJucyBhIG5ldyBmdW5jdGlvbiBlYWNoIHRpbWVcbiAgICB0aGlzLm9uT3V0c2lkZUNsaWNrID0gdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBlbGVtZW50IGlzIGRlc3Ryb3llZCwgbWFrZSBzdXJlIHRvIHJlbW92ZSB0aGUgaGFuZGxlclxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk91dHNpZGVDbGljayk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZWxlbWVudCBhcyBhY3RpdmUgYW5kIGFkZHMvcmVtb3ZlcyB0aGUgb3V0c2lkZSBjbGljayBoYW5kbGVyXG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlQWN0aXZlKGV2ZW50PzogTW91c2VFdmVudCwgZm9yY2VWYWx1ZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvLyBSZXZlcnNlIHRoZSBhY3RpdmUgcHJvcGVydHkgKGlmIGZvcmNlVmFsdWUsIHVzZSB0aGF0KVxuICAgIHRoaXMuYWN0aXZlID0gIUhlbHBlcnMuaXNCbGFuayhmb3JjZVZhbHVlKSA/IGZvcmNlVmFsdWUgOiAhdGhpcy5hY3RpdmU7XG4gICAgLy8gQmluZCB3aW5kb3cgY2xpY2sgZXZlbnRzIHRvIGhpZGUgb24gb3V0c2lkZSBjbGlja1xuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk91dHNpZGVDbGljayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25PdXRzaWRlQ2xpY2spO1xuICAgIH1cbiAgICAvLyBGaXJlIHRoZSBhY3RpdmUgY2hhbmdlIGV2ZW50XG4gICAgdGhpcy5vbkFjdGl2ZUNoYW5nZS5lbWl0KHRoaXMuYWN0aXZlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGNsaWNraW5nIG91dHNpZGUsIGNoZWNrcyB0aGUgZWxlbWVudCBhbmQgY2xvc2VzIGlmIG91dHNpZGVcbiAgICovXG4gIHB1YmxpYyBoYW5kbGVPdXRzaWRlQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBJZiB0aGUgZWxlbWVudHMgZG9lc24ndCBjb250YWluIHRoZSB0YXJnZXQgZWxlbWVudCwgaXQgaXMgYW4gb3V0c2lkZSBjbGlja1xuICAgIGxldCBvdXRzaWRlQ2xpY2sgPSAhdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAodGhpcy5vdGhlckVsZW1lbnQgJiYgb3V0c2lkZUNsaWNrKSB7XG4gICAgICBvdXRzaWRlQ2xpY2sgPSAhdGhpcy5vdGhlckVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xuICAgIH1cbiAgICBpZiAob3V0c2lkZUNsaWNrKSB7XG4gICAgICB0aGlzLnRvZ2dsZUFjdGl2ZShldmVudCwgZmFsc2UpO1xuICAgIH1cbiAgfVxufVxuIl19