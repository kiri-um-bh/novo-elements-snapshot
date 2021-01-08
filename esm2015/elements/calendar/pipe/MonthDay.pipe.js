import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class MonthDayPipe {
    constructor(locale = 'en-US') {
        this.locale = locale;
    }
    transform(date, locale = this.locale, method = 'short') {
        return new Intl.DateTimeFormat(locale, { month: method, day: 'numeric' }).format(date);
    }
}
MonthDayPipe.ɵfac = function MonthDayPipe_Factory(t) { return new (t || MonthDayPipe)(i0.ɵɵdirectiveInject(LOCALE_ID)); };
MonthDayPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "monthday", type: MonthDayPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MonthDayPipe, [{
        type: Pipe,
        args: [{ name: 'monthday' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9udGhEYXkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL3BpcGUvTW9udGhEYXkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUd2RSxNQUFNLE9BQU8sWUFBWTtJQUN2QixZQUF1QyxTQUFpQixPQUFPO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQztJQUNuRSxTQUFTLENBQUMsSUFBVSxFQUFFLFNBQWlCLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBaUIsT0FBTztRQUMxRSxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RixDQUFDOzt3RUFKVSxZQUFZLHVCQUNILFNBQVM7K0RBRGxCLFlBQVk7a0RBQVosWUFBWTtjQUR4QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFOztzQkFFWCxNQUFNO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIExPQ0FMRV9JRCwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICdtb250aGRheScgfSlcbmV4cG9ydCBjbGFzcyBNb250aERheVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlOiBzdHJpbmcgPSAnZW4tVVMnKSB7fVxuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZSwgbG9jYWxlOiBzdHJpbmcgPSB0aGlzLmxvY2FsZSwgbWV0aG9kOiBzdHJpbmcgPSAnc2hvcnQnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7IG1vbnRoOiBtZXRob2QsIGRheTogJ251bWVyaWMnIH0pLmZvcm1hdChkYXRlKTtcbiAgfVxufVxuIl19