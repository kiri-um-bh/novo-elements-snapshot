import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class EndOfWeekDisplayPipe {
    constructor(locale = 'en-US') {
        this.locale = locale;
    }
    transform(endOfWeek, startOfWeek, locale = this.locale, method = 'short') {
        if (endOfWeek.getMonth() === startOfWeek.getMonth()) {
            return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(endOfWeek);
        }
        return new Intl.DateTimeFormat(locale, { month: method, day: 'numeric' }).format(endOfWeek);
    }
}
EndOfWeekDisplayPipe.ɵfac = function EndOfWeekDisplayPipe_Factory(t) { return new (t || EndOfWeekDisplayPipe)(i0.ɵɵdirectiveInject(LOCALE_ID)); };
EndOfWeekDisplayPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "endofweekdisplay", type: EndOfWeekDisplayPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EndOfWeekDisplayPipe, [{
        type: Pipe,
        args: [{ name: 'endofweekdisplay' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5kT2ZXZWVrRGlzcGxheVBpcGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL3BpcGUvRW5kT2ZXZWVrRGlzcGxheVBpcGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUd2RSxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLFlBQXVDLFNBQWlCLE9BQU87UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDO0lBRW5FLFNBQVMsQ0FBQyxTQUFlLEVBQUUsV0FBaUIsRUFBRSxTQUFpQixJQUFJLENBQUMsTUFBTSxFQUFFLFNBQWlCLE9BQU87UUFDbEcsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ25ELE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5RTtRQUVELE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlGLENBQUM7O3dGQVRVLG9CQUFvQix1QkFDWCxTQUFTOytFQURsQixvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQURoQyxJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7O3NCQUVuQixNQUFNO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIExPQ0FMRV9JRCwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICdlbmRvZndlZWtkaXNwbGF5JyB9KVxuZXhwb3J0IGNsYXNzIEVuZE9mV2Vla0Rpc3BsYXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIGxvY2FsZTogc3RyaW5nID0gJ2VuLVVTJykge31cblxuICB0cmFuc2Zvcm0oZW5kT2ZXZWVrOiBEYXRlLCBzdGFydE9mV2VlazogRGF0ZSwgbG9jYWxlOiBzdHJpbmcgPSB0aGlzLmxvY2FsZSwgbWV0aG9kOiBzdHJpbmcgPSAnc2hvcnQnKTogU3RyaW5nIHtcbiAgICBpZiAoZW5kT2ZXZWVrLmdldE1vbnRoKCkgPT09IHN0YXJ0T2ZXZWVrLmdldE1vbnRoKCkpIHtcbiAgICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHsgZGF5OiAnbnVtZXJpYycgfSkuZm9ybWF0KGVuZE9mV2Vlayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgeyBtb250aDogbWV0aG9kLCBkYXk6ICdudW1lcmljJyB9KS5mb3JtYXQoZW5kT2ZXZWVrKTtcbiAgfVxufVxuIl19