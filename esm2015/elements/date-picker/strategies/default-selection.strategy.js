import { Injectable, InjectionToken, Optional, SkipSelf } from '@angular/core';
import { isSameDay } from 'date-fns';
import * as i0 from "@angular/core";
/** Injection token used to customize the date range selection behavior. */
export const NOVO_DATE_SELECTION_STRATEGY = new InjectionToken('NOVO_DATE_SELECTION_STRATEGY');
/** Provides the default date selection behavior. Single Date */
export class DefaultDateSelectionStrategy {
    selectionFinished(date, currentValue, event) {
        return [date];
    }
    createPreview(activeDate, [currentDate]) {
        return [activeDate];
    }
    isSelected(activeDate, [currentDate]) {
        return isSameDay(activeDate, currentDate);
    }
}
DefaultDateSelectionStrategy.ɵfac = function DefaultDateSelectionStrategy_Factory(t) { return new (t || DefaultDateSelectionStrategy)(); };
DefaultDateSelectionStrategy.ɵprov = i0.ɵɵdefineInjectable({ token: DefaultDateSelectionStrategy, factory: DefaultDateSelectionStrategy.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultDateSelectionStrategy, [{
        type: Injectable
    }], null, null); })();
/** @docs-private */
export function NOVO_DATE_SELECTION_STRATEGY_PROVIDER_FACTORY(parent) {
    return parent || new DefaultDateSelectionStrategy();
}
/** @docs-private */
export const NOVO_DATE_SELECTION_STRATEGY_PROVIDER = {
    provide: NOVO_DATE_SELECTION_STRATEGY,
    deps: [[new Optional(), new SkipSelf(), NOVO_DATE_SELECTION_STRATEGY]],
    useFactory: NOVO_DATE_SELECTION_STRATEGY_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1zZWxlY3Rpb24uc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0ZS1waWNrZXIvc3RyYXRlZ2llcy9kZWZhdWx0LXNlbGVjdGlvbi5zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW1CLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQUdyQywyRUFBMkU7QUFDM0UsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQUcsSUFBSSxjQUFjLENBQTRCLDhCQUE4QixDQUFDLENBQUM7QUFFMUgsZ0VBQWdFO0FBRWhFLE1BQU0sT0FBTyw0QkFBNEI7SUFDdkMsaUJBQWlCLENBQUMsSUFBcUIsRUFBRSxZQUF3QixFQUFFLEtBQVk7UUFDN0UsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFRCxhQUFhLENBQUMsVUFBMkIsRUFBRSxDQUFDLFdBQVcsQ0FBYTtRQUNsRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELFVBQVUsQ0FBQyxVQUEyQixFQUFFLENBQUMsV0FBVyxDQUFhO1FBQy9ELE9BQU8sU0FBUyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzt3R0FYVSw0QkFBNEI7b0VBQTVCLDRCQUE0QixXQUE1Qiw0QkFBNEI7a0RBQTVCLDRCQUE0QjtjQUR4QyxVQUFVOztBQWVYLG9CQUFvQjtBQUNwQixNQUFNLFVBQVUsNkNBQTZDLENBQUMsTUFBMEM7SUFDdEcsT0FBTyxNQUFNLElBQUksSUFBSSw0QkFBNEIsRUFBRSxDQUFDO0FBQ3RELENBQUM7QUFFRCxvQkFBb0I7QUFDcEIsTUFBTSxDQUFDLE1BQU0scUNBQXFDLEdBQW9CO0lBQ3BFLE9BQU8sRUFBRSw0QkFBNEI7SUFDckMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztJQUN0RSxVQUFVLEVBQUUsNkNBQTZDO0NBQzFELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWN0b3J5UHJvdmlkZXIsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzU2FtZURheSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IERhdGVMaWtlLCBOb3ZvRGF0ZVNlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi4vZGF0ZS1waWNrZXIudHlwZXMnO1xuXG4vKiogSW5qZWN0aW9uIHRva2VuIHVzZWQgdG8gY3VzdG9taXplIHRoZSBkYXRlIHJhbmdlIHNlbGVjdGlvbiBiZWhhdmlvci4gKi9cbmV4cG9ydCBjb25zdCBOT1ZPX0RBVEVfU0VMRUNUSU9OX1NUUkFURUdZID0gbmV3IEluamVjdGlvblRva2VuPE5vdm9EYXRlU2VsZWN0aW9uU3RyYXRlZ3k+KCdOT1ZPX0RBVEVfU0VMRUNUSU9OX1NUUkFURUdZJyk7XG5cbi8qKiBQcm92aWRlcyB0aGUgZGVmYXVsdCBkYXRlIHNlbGVjdGlvbiBiZWhhdmlvci4gU2luZ2xlIERhdGUgKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RGF0ZVNlbGVjdGlvblN0cmF0ZWd5IGltcGxlbWVudHMgTm92b0RhdGVTZWxlY3Rpb25TdHJhdGVneTxEYXRlTGlrZVtdPiB7XG4gIHNlbGVjdGlvbkZpbmlzaGVkKGRhdGU6IERhdGVMaWtlIHwgbnVsbCwgY3VycmVudFZhbHVlOiBEYXRlTGlrZVtdLCBldmVudDogRXZlbnQpOiBEYXRlTGlrZVtdIHtcbiAgICByZXR1cm4gW2RhdGVdO1xuICB9XG5cbiAgY3JlYXRlUHJldmlldyhhY3RpdmVEYXRlOiBEYXRlTGlrZSB8IG51bGwsIFtjdXJyZW50RGF0ZV06IERhdGVMaWtlW10pIHtcbiAgICByZXR1cm4gW2FjdGl2ZURhdGVdO1xuICB9XG5cbiAgaXNTZWxlY3RlZChhY3RpdmVEYXRlOiBEYXRlTGlrZSB8IG51bGwsIFtjdXJyZW50RGF0ZV06IERhdGVMaWtlW10pIHtcbiAgICByZXR1cm4gaXNTYW1lRGF5KGFjdGl2ZURhdGUsIGN1cnJlbnREYXRlKTtcbiAgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIE5PVk9fREFURV9TRUxFQ1RJT05fU1RSQVRFR1lfUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IE5vdm9EYXRlU2VsZWN0aW9uU3RyYXRlZ3k8dW5rbm93bj4pIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgRGVmYXVsdERhdGVTZWxlY3Rpb25TdHJhdGVneSgpO1xufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IE5PVk9fREFURV9TRUxFQ1RJT05fU1RSQVRFR1lfUFJPVklERVI6IEZhY3RvcnlQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTk9WT19EQVRFX1NFTEVDVElPTl9TVFJBVEVHWSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIE5PVk9fREFURV9TRUxFQ1RJT05fU1RSQVRFR1ldXSxcbiAgdXNlRmFjdG9yeTogTk9WT19EQVRFX1NFTEVDVElPTl9TVFJBVEVHWV9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==