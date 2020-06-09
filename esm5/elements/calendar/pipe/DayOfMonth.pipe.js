import { Pipe, LOCALE_ID, Inject } from '@angular/core';
import * as i0 from "@angular/core";
var DayOfMonthPipe = /** @class */ (function () {
    function DayOfMonthPipe(locale) {
        if (locale === void 0) { locale = 'en-US'; }
        this.locale = locale;
    }
    DayOfMonthPipe.prototype.transform = function (date, locale, method) {
        if (locale === void 0) { locale = this.locale; }
        if (method === void 0) { method = 'numeric'; }
        return new Intl.DateTimeFormat(locale, { day: method }).format(date);
    };
    DayOfMonthPipe.ɵfac = function DayOfMonthPipe_Factory(t) { return new (t || DayOfMonthPipe)(i0.ɵɵdirectiveInject(LOCALE_ID)); };
    DayOfMonthPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "dayofmonth", type: DayOfMonthPipe, pure: true });
    return DayOfMonthPipe;
}());
export { DayOfMonthPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DayOfMonthPipe, [{
        type: Pipe,
        args: [{ name: 'dayofmonth' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF5T2ZNb250aC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL3BpcGUvRGF5T2ZNb250aC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRXZFO0lBRUUsd0JBQXVDLE1BQXdCO1FBQXhCLHVCQUFBLEVBQUEsZ0JBQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQztJQUNuRSxrQ0FBUyxHQUFULFVBQVUsSUFBVSxFQUFFLE1BQTRCLEVBQUUsTUFBMEI7UUFBeEQsdUJBQUEsRUFBQSxTQUFpQixJQUFJLENBQUMsTUFBTTtRQUFFLHVCQUFBLEVBQUEsa0JBQTBCO1FBQzVFLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO2dGQUpVLGNBQWMsdUJBQ0wsU0FBUzt1RUFEbEIsY0FBYzt5QkFIM0I7Q0FRQyxBQU5ELElBTUM7U0FMWSxjQUFjO2tEQUFkLGNBQWM7Y0FEMUIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTs7c0JBRWIsTUFBTTt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgTE9DQUxFX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnZGF5b2Ztb250aCcgfSlcbmV4cG9ydCBjbGFzcyBEYXlPZk1vbnRoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZyA9ICdlbi1VUycpIHt9XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlLCBsb2NhbGU6IHN0cmluZyA9IHRoaXMubG9jYWxlLCBtZXRob2Q6IHN0cmluZyA9ICdudW1lcmljJyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgeyBkYXk6IG1ldGhvZCB9KS5mb3JtYXQoZGF0ZSk7XG4gIH1cbn1cbiJdfQ==