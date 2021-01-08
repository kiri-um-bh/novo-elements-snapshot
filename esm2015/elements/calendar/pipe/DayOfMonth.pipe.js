import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class DayOfMonthPipe {
    constructor(locale = 'en-US') {
        this.locale = locale;
    }
    transform(date, locale = this.locale, method = 'numeric') {
        return new Intl.DateTimeFormat(locale, { day: method }).format(date);
    }
}
DayOfMonthPipe.ɵfac = function DayOfMonthPipe_Factory(t) { return new (t || DayOfMonthPipe)(i0.ɵɵdirectiveInject(LOCALE_ID)); };
DayOfMonthPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "dayofmonth", type: DayOfMonthPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DayOfMonthPipe, [{
        type: Pipe,
        args: [{ name: 'dayofmonth' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF5T2ZNb250aC5waXBlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2FsZW5kYXIvcGlwZS9EYXlPZk1vbnRoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFHdkUsTUFBTSxPQUFPLGNBQWM7SUFDekIsWUFBdUMsU0FBaUIsT0FBTztRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7SUFDbkUsU0FBUyxDQUFDLElBQVUsRUFBRSxTQUFpQixJQUFJLENBQUMsTUFBTSxFQUFFLFNBQWlCLFNBQVM7UUFDNUUsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7OzRFQUpVLGNBQWMsdUJBQ0wsU0FBUzttRUFEbEIsY0FBYztrREFBZCxjQUFjO2NBRDFCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7O3NCQUViLE1BQU07dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgTE9DQUxFX0lELCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2RheW9mbW9udGgnIH0pXG5leHBvcnQgY2xhc3MgRGF5T2ZNb250aFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlOiBzdHJpbmcgPSAnZW4tVVMnKSB7fVxuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZSwgbG9jYWxlOiBzdHJpbmcgPSB0aGlzLmxvY2FsZSwgbWV0aG9kOiBzdHJpbmcgPSAnbnVtZXJpYycpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHsgZGF5OiBtZXRob2QgfSkuZm9ybWF0KGRhdGUpO1xuICB9XG59XG4iXX0=