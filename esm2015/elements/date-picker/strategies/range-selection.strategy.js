import { Injectable } from '@angular/core';
import { differenceInCalendarDays, isWithinRange } from 'date-fns';
import * as i0 from "@angular/core";
export class RangeSelectionStrategy {
    selectionFinished(date, currentRange) {
        let [start, end] = currentRange;
        if (start == null) {
            start = date;
        }
        else if (end == null && date && differenceInCalendarDays(date, start) >= 0) {
            end = date;
        }
        else {
            start = date;
            end = null;
        }
        return [start, end];
    }
    createPreview(activeDate, currentRange) {
        let start = null;
        let end = null;
        const [currStart, currEnd] = currentRange;
        if (currStart && !currEnd && activeDate) {
            start = currStart;
            end = activeDate;
        }
        return [start, end];
    }
    isSelected(activeDate, currentRange) {
        const [start, end] = currentRange;
        return isWithinRange(activeDate, start, end);
    }
}
RangeSelectionStrategy.ɵfac = function RangeSelectionStrategy_Factory(t) { return new (t || RangeSelectionStrategy)(); };
RangeSelectionStrategy.ɵprov = i0.ɵɵdefineInjectable({ token: RangeSelectionStrategy, factory: RangeSelectionStrategy.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RangeSelectionStrategy, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Utc2VsZWN0aW9uLnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0ZS1waWNrZXIvc3RyYXRlZ2llcy9yYW5nZS1zZWxlY3Rpb24uc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQUluRSxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLGlCQUFpQixDQUFDLElBQWMsRUFBRSxZQUF3QjtRQUN4RCxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQztRQUVoQyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDakIsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNkO2FBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVFLEdBQUcsR0FBRyxJQUFJLENBQUM7U0FDWjthQUFNO1lBQ0wsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNiLEdBQUcsR0FBRyxJQUFJLENBQUM7U0FDWjtRQUVELE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELGFBQWEsQ0FBQyxVQUEyQixFQUFFLFlBQXdCO1FBQ2pFLElBQUksS0FBSyxHQUFvQixJQUFJLENBQUM7UUFDbEMsSUFBSSxHQUFHLEdBQW9CLElBQUksQ0FBQztRQUNoQyxNQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLFlBQVksQ0FBQztRQUUxQyxJQUFJLFNBQVMsSUFBSSxDQUFDLE9BQU8sSUFBSSxVQUFVLEVBQUU7WUFDdkMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUNsQixHQUFHLEdBQUcsVUFBVSxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsVUFBVSxDQUFDLFVBQTJCLEVBQUUsWUFBd0I7UUFDOUQsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUM7UUFDbEMsT0FBTyxhQUFhLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs0RkFoQ1Usc0JBQXNCOzhEQUF0QixzQkFBc0IsV0FBdEIsc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cywgaXNXaXRoaW5SYW5nZSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IERhdGVMaWtlLCBOb3ZvRGF0ZVNlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi4vZGF0ZS1waWNrZXIudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmFuZ2VTZWxlY3Rpb25TdHJhdGVneSBpbXBsZW1lbnRzIE5vdm9EYXRlU2VsZWN0aW9uU3RyYXRlZ3k8RGF0ZUxpa2VbXT4ge1xuICBzZWxlY3Rpb25GaW5pc2hlZChkYXRlOiBEYXRlTGlrZSwgY3VycmVudFJhbmdlOiBEYXRlTGlrZVtdKSB7XG4gICAgbGV0IFtzdGFydCwgZW5kXSA9IGN1cnJlbnRSYW5nZTtcblxuICAgIGlmIChzdGFydCA9PSBudWxsKSB7XG4gICAgICBzdGFydCA9IGRhdGU7XG4gICAgfSBlbHNlIGlmIChlbmQgPT0gbnVsbCAmJiBkYXRlICYmIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlLCBzdGFydCkgPj0gMCkge1xuICAgICAgZW5kID0gZGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnQgPSBkYXRlO1xuICAgICAgZW5kID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gW3N0YXJ0LCBlbmRdO1xuICB9XG5cbiAgY3JlYXRlUHJldmlldyhhY3RpdmVEYXRlOiBEYXRlTGlrZSB8IG51bGwsIGN1cnJlbnRSYW5nZTogRGF0ZUxpa2VbXSkge1xuICAgIGxldCBzdGFydDogRGF0ZUxpa2UgfCBudWxsID0gbnVsbDtcbiAgICBsZXQgZW5kOiBEYXRlTGlrZSB8IG51bGwgPSBudWxsO1xuICAgIGNvbnN0IFtjdXJyU3RhcnQsIGN1cnJFbmRdID0gY3VycmVudFJhbmdlO1xuXG4gICAgaWYgKGN1cnJTdGFydCAmJiAhY3VyckVuZCAmJiBhY3RpdmVEYXRlKSB7XG4gICAgICBzdGFydCA9IGN1cnJTdGFydDtcbiAgICAgIGVuZCA9IGFjdGl2ZURhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtzdGFydCwgZW5kXTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQoYWN0aXZlRGF0ZTogRGF0ZUxpa2UgfCBudWxsLCBjdXJyZW50UmFuZ2U6IERhdGVMaWtlW10pIHtcbiAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSBjdXJyZW50UmFuZ2U7XG4gICAgcmV0dXJuIGlzV2l0aGluUmFuZ2UoYWN0aXZlRGF0ZSwgc3RhcnQsIGVuZCk7XG4gIH1cbn1cbiJdfQ==