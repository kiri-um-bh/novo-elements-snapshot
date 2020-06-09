import { Pipe, LOCALE_ID, Inject } from '@angular/core';
import * as i0 from "@angular/core";
var EndOfWeekDisplayPipe = /** @class */ (function () {
    function EndOfWeekDisplayPipe(locale) {
        if (locale === void 0) { locale = 'en-US'; }
        this.locale = locale;
    }
    EndOfWeekDisplayPipe.prototype.transform = function (endOfWeek, startOfWeek, locale, method) {
        if (locale === void 0) { locale = this.locale; }
        if (method === void 0) { method = 'short'; }
        if (endOfWeek.getMonth() === startOfWeek.getMonth()) {
            return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(endOfWeek);
        }
        return new Intl.DateTimeFormat(locale, { month: method, day: 'numeric' }).format(endOfWeek);
    };
    EndOfWeekDisplayPipe.ɵfac = function EndOfWeekDisplayPipe_Factory(t) { return new (t || EndOfWeekDisplayPipe)(i0.ɵɵdirectiveInject(LOCALE_ID)); };
    EndOfWeekDisplayPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "endofweekdisplay", type: EndOfWeekDisplayPipe, pure: true });
    return EndOfWeekDisplayPipe;
}());
export { EndOfWeekDisplayPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EndOfWeekDisplayPipe, [{
        type: Pipe,
        args: [{ name: 'endofweekdisplay' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5kT2ZXZWVrRGlzcGxheVBpcGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9waXBlL0VuZE9mV2Vla0Rpc3BsYXlQaXBlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFdkU7SUFFRSw4QkFBdUMsTUFBd0I7UUFBeEIsdUJBQUEsRUFBQSxnQkFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDO0lBRW5FLHdDQUFTLEdBQVQsVUFBVSxTQUFlLEVBQUUsV0FBaUIsRUFBRSxNQUE0QixFQUFFLE1BQXdCO1FBQXRELHVCQUFBLEVBQUEsU0FBaUIsSUFBSSxDQUFDLE1BQU07UUFBRSx1QkFBQSxFQUFBLGdCQUF3QjtRQUNsRyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDbkQsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzlFO1FBRUQsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUYsQ0FBQzs0RkFUVSxvQkFBb0IsdUJBQ1gsU0FBUzttRkFEbEIsb0JBQW9COytCQUhqQztDQWFDLEFBWEQsSUFXQztTQVZZLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBRGhDLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTs7c0JBRW5CLE1BQU07dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIExPQ0FMRV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2VuZG9md2Vla2Rpc3BsYXknIH0pXG5leHBvcnQgY2xhc3MgRW5kT2ZXZWVrRGlzcGxheVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlOiBzdHJpbmcgPSAnZW4tVVMnKSB7fVxuXG4gIHRyYW5zZm9ybShlbmRPZldlZWs6IERhdGUsIHN0YXJ0T2ZXZWVrOiBEYXRlLCBsb2NhbGU6IHN0cmluZyA9IHRoaXMubG9jYWxlLCBtZXRob2Q6IHN0cmluZyA9ICdzaG9ydCcpOiBTdHJpbmcge1xuICAgIGlmIChlbmRPZldlZWsuZ2V0TW9udGgoKSA9PT0gc3RhcnRPZldlZWsuZ2V0TW9udGgoKSkge1xuICAgICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgeyBkYXk6ICdudW1lcmljJyB9KS5mb3JtYXQoZW5kT2ZXZWVrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7IG1vbnRoOiBtZXRob2QsIGRheTogJ251bWVyaWMnIH0pLmZvcm1hdChlbmRPZldlZWspO1xuICB9XG59XG4iXX0=