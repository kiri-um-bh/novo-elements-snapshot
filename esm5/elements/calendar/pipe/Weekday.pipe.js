import { Pipe, LOCALE_ID, Inject } from '@angular/core';
import * as i0 from "@angular/core";
var WeekdayPipe = /** @class */ (function () {
    function WeekdayPipe(locale) {
        if (locale === void 0) { locale = 'en-US'; }
        this.locale = locale;
    }
    WeekdayPipe.prototype.transform = function (date, locale, method) {
        if (locale === void 0) { locale = this.locale; }
        if (method === void 0) { method = 'short'; }
        return new Intl.DateTimeFormat(locale, { weekday: method }).format(date);
    };
    WeekdayPipe.ɵfac = function WeekdayPipe_Factory(t) { return new (t || WeekdayPipe)(i0.ɵɵdirectiveInject(LOCALE_ID)); };
    WeekdayPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "weekday", type: WeekdayPipe, pure: true });
    return WeekdayPipe;
}());
export { WeekdayPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WeekdayPipe, [{
        type: Pipe,
        args: [{ name: 'weekday' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2Vla2RheS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL3BpcGUvV2Vla2RheS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRXZFO0lBRUUscUJBQXVDLE1BQXdCO1FBQXhCLHVCQUFBLEVBQUEsZ0JBQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQztJQUNuRSwrQkFBUyxHQUFULFVBQVUsSUFBVSxFQUFFLE1BQTRCLEVBQUUsTUFBd0I7UUFBdEQsdUJBQUEsRUFBQSxTQUFpQixJQUFJLENBQUMsTUFBTTtRQUFFLHVCQUFBLEVBQUEsZ0JBQXdCO1FBQzFFLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDOzBFQUpVLFdBQVcsdUJBQ0YsU0FBUztpRUFEbEIsV0FBVztzQkFIeEI7Q0FRQyxBQU5ELElBTUM7U0FMWSxXQUFXO2tEQUFYLFdBQVc7Y0FEdkIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTs7c0JBRVYsTUFBTTt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgTE9DQUxFX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnd2Vla2RheScgfSlcbmV4cG9ydCBjbGFzcyBXZWVrZGF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZyA9ICdlbi1VUycpIHt9XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlLCBsb2NhbGU6IHN0cmluZyA9IHRoaXMubG9jYWxlLCBtZXRob2Q6IHN0cmluZyA9ICdzaG9ydCcpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHsgd2Vla2RheTogbWV0aG9kIH0pLmZvcm1hdChkYXRlKTtcbiAgfVxufVxuIl19