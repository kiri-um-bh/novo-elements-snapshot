import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class MonthPipe {
    constructor(locale = 'en-US') {
        this.locale = locale;
    }
    transform(date, locale = this.locale, method = 'long') {
        return new Intl.DateTimeFormat(locale, { month: method }).format(date);
    }
}
MonthPipe.ɵfac = function MonthPipe_Factory(t) { return new (t || MonthPipe)(i0.ɵɵdirectiveInject(LOCALE_ID)); };
MonthPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "month", type: MonthPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MonthPipe, [{
        type: Pipe,
        args: [{ name: 'month' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9udGgucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYWxlbmRhci9waXBlL01vbnRoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFHdkUsTUFBTSxPQUFPLFNBQVM7SUFDcEIsWUFBdUMsU0FBaUIsT0FBTztRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7SUFDbkUsU0FBUyxDQUFDLElBQVUsRUFBRSxTQUFpQixJQUFJLENBQUMsTUFBTSxFQUFFLFNBQWlCLE1BQU07UUFDekUsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7O2tFQUpVLFNBQVMsdUJBQ0EsU0FBUzt5REFEbEIsU0FBUztrREFBVCxTQUFTO2NBRHJCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7O3NCQUVSLE1BQU07dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgTE9DQUxFX0lELCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ21vbnRoJyB9KVxuZXhwb3J0IGNsYXNzIE1vbnRoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZyA9ICdlbi1VUycpIHt9XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlLCBsb2NhbGU6IHN0cmluZyA9IHRoaXMubG9jYWxlLCBtZXRob2Q6IHN0cmluZyA9ICdsb25nJyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgeyBtb250aDogbWV0aG9kIH0pLmZvcm1hdChkYXRlKTtcbiAgfVxufVxuIl19