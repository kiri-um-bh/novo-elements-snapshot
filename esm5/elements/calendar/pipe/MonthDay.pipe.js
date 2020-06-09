import { Pipe, LOCALE_ID, Inject } from '@angular/core';
import * as i0 from "@angular/core";
var MonthDayPipe = /** @class */ (function () {
    function MonthDayPipe(locale) {
        if (locale === void 0) { locale = 'en-US'; }
        this.locale = locale;
    }
    MonthDayPipe.prototype.transform = function (date, locale, method) {
        if (locale === void 0) { locale = this.locale; }
        if (method === void 0) { method = 'short'; }
        return new Intl.DateTimeFormat(locale, { month: method, day: 'numeric' }).format(date);
    };
    MonthDayPipe.ɵfac = function MonthDayPipe_Factory(t) { return new (t || MonthDayPipe)(i0.ɵɵdirectiveInject(LOCALE_ID)); };
    MonthDayPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "monthday", type: MonthDayPipe, pure: true });
    return MonthDayPipe;
}());
export { MonthDayPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MonthDayPipe, [{
        type: Pipe,
        args: [{ name: 'monthday' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9udGhEYXkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9waXBlL01vbnRoRGF5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFdkU7SUFFRSxzQkFBdUMsTUFBd0I7UUFBeEIsdUJBQUEsRUFBQSxnQkFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDO0lBQ25FLGdDQUFTLEdBQVQsVUFBVSxJQUFVLEVBQUUsTUFBNEIsRUFBRSxNQUF3QjtRQUF0RCx1QkFBQSxFQUFBLFNBQWlCLElBQUksQ0FBQyxNQUFNO1FBQUUsdUJBQUEsRUFBQSxnQkFBd0I7UUFDMUUsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekYsQ0FBQzs0RUFKVSxZQUFZLHVCQUNILFNBQVM7bUVBRGxCLFlBQVk7dUJBSHpCO0NBUUMsQUFORCxJQU1DO1NBTFksWUFBWTtrREFBWixZQUFZO2NBRHhCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7O3NCQUVYLE1BQU07dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIExPQ0FMRV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ21vbnRoZGF5JyB9KVxuZXhwb3J0IGNsYXNzIE1vbnRoRGF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZyA9ICdlbi1VUycpIHt9XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlLCBsb2NhbGU6IHN0cmluZyA9IHRoaXMubG9jYWxlLCBtZXRob2Q6IHN0cmluZyA9ICdzaG9ydCcpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHsgbW9udGg6IG1ldGhvZCwgZGF5OiAnbnVtZXJpYycgfSkuZm9ybWF0KGRhdGUpO1xuICB9XG59XG4iXX0=