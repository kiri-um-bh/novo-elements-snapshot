import { Pipe, LOCALE_ID, Inject } from '@angular/core';
export class YearPipe {
    constructor(locale = 'en-US') {
        this.locale = locale;
    }
    transform(date, locale = this.locale, method = 'numeric') {
        return new Intl.DateTimeFormat(locale, { year: method }).format(date);
    }
}
YearPipe.decorators = [
    { type: Pipe, args: [{ name: 'year' },] }
];
YearPipe.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWWVhci5waXBlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NhbGVuZGFyL3BpcGUvWWVhci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkUsTUFBTSxPQUFPLFFBQVE7SUFDbkIsWUFBdUMsU0FBaUIsT0FBTztRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7SUFDbkUsU0FBUyxDQUFDLElBQVUsRUFBRSxTQUFpQixJQUFJLENBQUMsTUFBTSxFQUFFLFNBQWlCLFNBQVM7UUFDNUUsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7OztZQUxGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7Ozt5Q0FFUCxNQUFNLFNBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIExPQ0FMRV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ3llYXInIH0pXG5leHBvcnQgY2xhc3MgWWVhclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlOiBzdHJpbmcgPSAnZW4tVVMnKSB7fVxuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZSwgbG9jYWxlOiBzdHJpbmcgPSB0aGlzLmxvY2FsZSwgbWV0aG9kOiBzdHJpbmcgPSAnbnVtZXJpYycpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHsgeWVhcjogbWV0aG9kIH0pLmZvcm1hdChkYXRlKTtcbiAgfVxufVxuIl19