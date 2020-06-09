import { Pipe, LOCALE_ID, Inject } from '@angular/core';
import * as i0 from "@angular/core";
var YearPipe = /** @class */ (function () {
    function YearPipe(locale) {
        if (locale === void 0) { locale = 'en-US'; }
        this.locale = locale;
    }
    YearPipe.prototype.transform = function (date, locale, method) {
        if (locale === void 0) { locale = this.locale; }
        if (method === void 0) { method = 'numeric'; }
        return new Intl.DateTimeFormat(locale, { year: method }).format(date);
    };
    YearPipe.ɵfac = function YearPipe_Factory(t) { return new (t || YearPipe)(i0.ɵɵdirectiveInject(LOCALE_ID)); };
    YearPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "year", type: YearPipe, pure: true });
    return YearPipe;
}());
export { YearPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(YearPipe, [{
        type: Pipe,
        args: [{ name: 'year' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWWVhci5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL3BpcGUvWWVhci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRXZFO0lBRUUsa0JBQXVDLE1BQXdCO1FBQXhCLHVCQUFBLEVBQUEsZ0JBQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQztJQUNuRSw0QkFBUyxHQUFULFVBQVUsSUFBVSxFQUFFLE1BQTRCLEVBQUUsTUFBMEI7UUFBeEQsdUJBQUEsRUFBQSxTQUFpQixJQUFJLENBQUMsTUFBTTtRQUFFLHVCQUFBLEVBQUEsa0JBQTBCO1FBQzVFLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDO29FQUpVLFFBQVEsdUJBQ0MsU0FBUzsyREFEbEIsUUFBUTttQkFIckI7Q0FRQyxBQU5ELElBTUM7U0FMWSxRQUFRO2tEQUFSLFFBQVE7Y0FEcEIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTs7c0JBRVAsTUFBTTt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgTE9DQUxFX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAneWVhcicgfSlcbmV4cG9ydCBjbGFzcyBZZWFyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZyA9ICdlbi1VUycpIHt9XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlLCBsb2NhbGU6IHN0cmluZyA9IHRoaXMubG9jYWxlLCBtZXRob2Q6IHN0cmluZyA9ICdudW1lcmljJyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgeyB5ZWFyOiBtZXRob2QgfSkuZm9ybWF0KGRhdGUpO1xuICB9XG59XG4iXX0=