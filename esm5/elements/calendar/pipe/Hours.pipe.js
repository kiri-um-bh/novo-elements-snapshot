import { Pipe, LOCALE_ID, Inject } from '@angular/core';
import * as i0 from "@angular/core";
var HoursPipe = /** @class */ (function () {
    function HoursPipe(locale) {
        if (locale === void 0) { locale = 'en-US'; }
        this.locale = locale;
    }
    HoursPipe.prototype.transform = function (date, locale, method) {
        if (locale === void 0) { locale = this.locale; }
        if (method === void 0) { method = 'numeric'; }
        return new Intl.DateTimeFormat(locale, { hour: method }).format(date);
    };
    HoursPipe.ɵfac = function HoursPipe_Factory(t) { return new (t || HoursPipe)(i0.ɵɵdirectiveInject(LOCALE_ID)); };
    HoursPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "hours", type: HoursPipe, pure: true });
    return HoursPipe;
}());
export { HoursPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HoursPipe, [{
        type: Pipe,
        args: [{ name: 'hours' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG91cnMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9waXBlL0hvdXJzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFdkU7SUFFRSxtQkFBdUMsTUFBd0I7UUFBeEIsdUJBQUEsRUFBQSxnQkFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDO0lBQ25FLDZCQUFTLEdBQVQsVUFBVSxJQUFVLEVBQUUsTUFBNEIsRUFBRSxNQUEwQjtRQUF4RCx1QkFBQSxFQUFBLFNBQWlCLElBQUksQ0FBQyxNQUFNO1FBQUUsdUJBQUEsRUFBQSxrQkFBMEI7UUFDNUUsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7c0VBSlUsU0FBUyx1QkFDQSxTQUFTOzZEQURsQixTQUFTO29CQUh0QjtDQVFDLEFBTkQsSUFNQztTQUxZLFNBQVM7a0RBQVQsU0FBUztjQURyQixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFOztzQkFFUixNQUFNO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBMT0NBTEVfSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICdob3VycycgfSlcbmV4cG9ydCBjbGFzcyBIb3Vyc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlOiBzdHJpbmcgPSAnZW4tVVMnKSB7fVxuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZSwgbG9jYWxlOiBzdHJpbmcgPSB0aGlzLmxvY2FsZSwgbWV0aG9kOiBzdHJpbmcgPSAnbnVtZXJpYycpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHsgaG91cjogbWV0aG9kIH0pLmZvcm1hdChkYXRlKTtcbiAgfVxufVxuIl19