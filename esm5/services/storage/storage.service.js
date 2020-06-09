import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.setItem = function (key, value) {
        localStorage.setItem(key, value);
    };
    LocalStorageService.prototype.getItem = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageService.prototype.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
    LocalStorageService.ɵprov = i0.ɵɵdefineInjectable({ token: LocalStorageService, factory: LocalStorageService.ɵfac });
    return LocalStorageService;
}());
export { LocalStorageService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LocalStorageService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3N0b3JhZ2Uvc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDO0lBQUE7S0FhQztJQVhDLHFDQUFPLEdBQVAsVUFBUSxHQUFRLEVBQUUsS0FBVTtRQUMxQixZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQscUNBQU8sR0FBUCxVQUFRLEdBQVE7UUFDZCxPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHdDQUFVLEdBQVYsVUFBVyxHQUFRO1FBQ2pCLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQzswRkFYVSxtQkFBbUI7K0RBQW5CLG1CQUFtQixXQUFuQixtQkFBbUI7OEJBSGhDO0NBZUMsQUFiRCxJQWFDO1NBWlksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FEL0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2Uge1xuICBzZXRJdGVtKGtleTogYW55LCB2YWx1ZTogYW55KTogYW55IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgfVxuXG4gIGdldEl0ZW0oa2V5OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShrZXk6IGFueSk6IGFueSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgfVxufVxuIl19