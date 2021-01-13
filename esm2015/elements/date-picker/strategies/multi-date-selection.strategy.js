import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class MultiDateSelectionStrategy {
    selectionFinished(dateLike, currentValue, event) {
        const date = dateLike;
        const current = new Set(currentValue.map((c) => c.getTime()));
        if (current.has(date.getTime())) {
            current.delete(date.getTime());
        }
        else {
            current.add(date.getTime());
        }
        return [...current].map((c) => new Date(c));
    }
    createPreview(activeDate, currentValue) {
        return [activeDate];
    }
    isSelected(activeDate, currentValue) {
        return currentValue && currentValue.includes(activeDate);
    }
}
MultiDateSelectionStrategy.ɵfac = function MultiDateSelectionStrategy_Factory(t) { return new (t || MultiDateSelectionStrategy)(); };
MultiDateSelectionStrategy.ɵprov = i0.ɵɵdefineInjectable({ token: MultiDateSelectionStrategy, factory: MultiDateSelectionStrategy.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MultiDateSelectionStrategy, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktZGF0ZS1zZWxlY3Rpb24uc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRlLXBpY2tlci9zdHJhdGVnaWVzL211bHRpLWRhdGUtc2VsZWN0aW9uLnN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSTNDLE1BQU0sT0FBTywwQkFBMEI7SUFDckMsaUJBQWlCLENBQUMsUUFBeUIsRUFBRSxZQUF3QixFQUFFLEtBQVk7UUFDakYsTUFBTSxJQUFJLEdBQUcsUUFBZ0IsQ0FBQztRQUM5QixNQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUMvQixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ2hDO2FBQU07WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxhQUFhLENBQUMsVUFBMkIsRUFBRSxZQUF3QjtRQUNqRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELFVBQVUsQ0FBQyxVQUEyQixFQUFFLFlBQXdCO1FBQzlELE9BQU8sWUFBWSxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7b0dBbEJVLDBCQUEwQjtrRUFBMUIsMEJBQTBCLFdBQTFCLDBCQUEwQjtrREFBMUIsMEJBQTBCO2NBRHRDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlTGlrZSwgTm92b0RhdGVTZWxlY3Rpb25TdHJhdGVneSB9IGZyb20gJy4uL2RhdGUtcGlja2VyLnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE11bHRpRGF0ZVNlbGVjdGlvblN0cmF0ZWd5IGltcGxlbWVudHMgTm92b0RhdGVTZWxlY3Rpb25TdHJhdGVneTxEYXRlTGlrZVtdPiB7XG4gIHNlbGVjdGlvbkZpbmlzaGVkKGRhdGVMaWtlOiBEYXRlTGlrZSB8IG51bGwsIGN1cnJlbnRWYWx1ZTogRGF0ZUxpa2VbXSwgZXZlbnQ6IEV2ZW50KTogRGF0ZUxpa2VbXSB7XG4gICAgY29uc3QgZGF0ZSA9IGRhdGVMaWtlIGFzIERhdGU7XG4gICAgY29uc3QgY3VycmVudCA9IG5ldyBTZXQoY3VycmVudFZhbHVlLm1hcCgoYzogRGF0ZSkgPT4gYy5nZXRUaW1lKCkpKTtcbiAgICBpZiAoY3VycmVudC5oYXMoZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgICBjdXJyZW50LmRlbGV0ZShkYXRlLmdldFRpbWUoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnQuYWRkKGRhdGUuZ2V0VGltZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIFsuLi5jdXJyZW50XS5tYXAoKGMpID0+IG5ldyBEYXRlKGMpKTtcbiAgfVxuXG4gIGNyZWF0ZVByZXZpZXcoYWN0aXZlRGF0ZTogRGF0ZUxpa2UgfCBudWxsLCBjdXJyZW50VmFsdWU6IERhdGVMaWtlW10pIHtcbiAgICByZXR1cm4gW2FjdGl2ZURhdGVdO1xuICB9XG5cbiAgaXNTZWxlY3RlZChhY3RpdmVEYXRlOiBEYXRlTGlrZSB8IG51bGwsIGN1cnJlbnRWYWx1ZTogRGF0ZUxpa2VbXSkge1xuICAgIHJldHVybiBjdXJyZW50VmFsdWUgJiYgY3VycmVudFZhbHVlLmluY2x1ZGVzKGFjdGl2ZURhdGUpO1xuICB9XG59XG4iXX0=