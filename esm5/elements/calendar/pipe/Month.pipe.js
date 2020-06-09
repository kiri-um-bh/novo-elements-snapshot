import { Pipe, LOCALE_ID, Inject } from '@angular/core';
import * as i0 from "@angular/core";
var MonthPipe = /** @class */ (function () {
    function MonthPipe(locale) {
        if (locale === void 0) { locale = 'en-US'; }
        this.locale = locale;
    }
    MonthPipe.prototype.transform = function (date, locale, method) {
        if (locale === void 0) { locale = this.locale; }
        if (method === void 0) { method = 'long'; }
        return new Intl.DateTimeFormat(locale, { month: method }).format(date);
    };
    MonthPipe.ɵfac = function MonthPipe_Factory(t) { return new (t || MonthPipe)(i0.ɵɵdirectiveInject(LOCALE_ID)); };
    MonthPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "month", type: MonthPipe, pure: true });
    return MonthPipe;
}());
export { MonthPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MonthPipe, [{
        type: Pipe,
        args: [{ name: 'month' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9udGgucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9waXBlL01vbnRoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFdkU7SUFFRSxtQkFBdUMsTUFBd0I7UUFBeEIsdUJBQUEsRUFBQSxnQkFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDO0lBQ25FLDZCQUFTLEdBQVQsVUFBVSxJQUFVLEVBQUUsTUFBNEIsRUFBRSxNQUF1QjtRQUFyRCx1QkFBQSxFQUFBLFNBQWlCLElBQUksQ0FBQyxNQUFNO1FBQUUsdUJBQUEsRUFBQSxlQUF1QjtRQUN6RSxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekUsQ0FBQztzRUFKVSxTQUFTLHVCQUNBLFNBQVM7NkRBRGxCLFNBQVM7b0JBSHRCO0NBUUMsQUFORCxJQU1DO1NBTFksU0FBUztrREFBVCxTQUFTO2NBRHJCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7O3NCQUVSLE1BQU07dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIExPQ0FMRV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ21vbnRoJyB9KVxuZXhwb3J0IGNsYXNzIE1vbnRoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZyA9ICdlbi1VUycpIHt9XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlLCBsb2NhbGU6IHN0cmluZyA9IHRoaXMubG9jYWxlLCBtZXRob2Q6IHN0cmluZyA9ICdsb25nJyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgeyBtb250aDogbWV0aG9kIH0pLmZvcm1hdChkYXRlKTtcbiAgfVxufVxuIl19