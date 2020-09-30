/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Injectable, EventEmitter } from '@angular/core';
var Security = /** @class */ (function () {
    function Security() {
        this.credentials = [];
        this.change = new EventEmitter();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    Security.prototype.grant = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var e_1, _a, e_2, _b;
        /** @type {?} */
        var parsed = [];
        if (data instanceof Array) {
            try {
                for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                    var permission = data_1_1.value;
                    parsed.push(permission.replace(/\s/gi, ''));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else if (typeof data === 'object') {
            for (var key in data) {
                if (data[key] instanceof Array) {
                    try {
                        for (var _c = tslib_1.__values(data[key]), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var permission = _d.value;
                            parsed.push(key + "." + permission);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
        }
        this.credentials = [].concat(this.credentials, parsed);
        this.change.emit(this.credentials);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    Security.prototype.has = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.credentials.indexOf(value) > -1;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    Security.prototype.revoke = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var i = this.credentials.indexOf(value);
        this.credentials.splice(i, 1);
        this.change.emit(this.credentials);
    };
    /**
     * @return {?}
     */
    Security.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.credentials = [];
        this.change.emit(this.credentials);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    Security.prototype.subscribe = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.change.subscribe(fn);
    };
    /**
     * @param {?} routes
     * @param {?} options
     * @return {?}
     */
    Security.prototype.checkRoutes = /**
     * @param {?} routes
     * @param {?} options
     * @return {?}
     */
    function (routes, options) {
        var _this = this;
        var e_3, _a;
        /** @type {?} */
        var filtered = [];
        try {
            for (var routes_1 = tslib_1.__values(routes), routes_1_1 = routes_1.next(); !routes_1_1.done; routes_1_1 = routes_1.next()) {
                var route = routes_1_1.value;
                if (route.entities && ~route.entities.indexOf(options.entityType)) {
                    if (route.permissions instanceof Function) {
                        if (route.permissions(options, this)) {
                            filtered.push(route);
                        }
                    }
                    else if (route.permissions && route.permissions.length) {
                        if (route.permissions.every((/**
                         * @param {?} perm
                         * @return {?}
                         */
                        function (perm) { return _this.has(perm); }))) {
                            filtered.push(route);
                        }
                    }
                    else {
                        filtered.push(route);
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (routes_1_1 && !routes_1_1.done && (_a = routes_1.return)) _a.call(routes_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return filtered;
    };
    Security.decorators = [
        { type: Injectable }
    ];
    return Security;
}());
export { Security };
if (false) {
    /** @type {?} */
    Security.prototype.credentials;
    /** @type {?} */
    Security.prototype.change;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjdXJpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvc2VjdXJpdHkvU2VjdXJpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFBQTtRQUVFLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQStEakQsQ0FBQzs7Ozs7SUE3REMsd0JBQUs7Ozs7SUFBTCxVQUFNLElBQW9COzs7WUFDcEIsTUFBTSxHQUFVLEVBQUU7UUFDdEIsSUFBSSxJQUFJLFlBQVksS0FBSyxFQUFFOztnQkFDekIsS0FBdUIsSUFBQSxTQUFBLGlCQUFBLElBQUksQ0FBQSwwQkFBQSw0Q0FBRTtvQkFBeEIsSUFBSSxVQUFVLGlCQUFBO29CQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzdDOzs7Ozs7Ozs7U0FDRjthQUFNLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ25DLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUNwQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxLQUFLLEVBQUU7O3dCQUM5QixLQUF1QixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBLGdCQUFBLDRCQUFFOzRCQUE3QixJQUFJLFVBQVUsV0FBQTs0QkFDakIsTUFBTSxDQUFDLElBQUksQ0FBSSxHQUFHLFNBQUksVUFBWSxDQUFDLENBQUM7eUJBQ3JDOzs7Ozs7Ozs7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsc0JBQUc7Ozs7SUFBSCxVQUFJLEtBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQseUJBQU07Ozs7SUFBTixVQUFPLEtBQVU7O1lBQ1gsQ0FBQyxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCx3QkFBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCw0QkFBUzs7OztJQUFULFVBQVUsRUFBTztRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUVELDhCQUFXOzs7OztJQUFYLFVBQ0UsTUFBbUgsRUFDbkgsT0FBZ0M7UUFGbEMsaUJBc0JDOzs7WUFsQkssUUFBUSxHQUFVLEVBQUU7O1lBQ3hCLEtBQWtCLElBQUEsV0FBQSxpQkFBQSxNQUFNLENBQUEsOEJBQUEsa0RBQUU7Z0JBQXJCLElBQUksS0FBSyxtQkFBQTtnQkFDWixJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ2pFLElBQUksS0FBSyxDQUFDLFdBQVcsWUFBWSxRQUFRLEVBQUU7d0JBQ3pDLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUU7NEJBQ3BDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQ3RCO3FCQUNGO3lCQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTt3QkFDeEQsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUs7Ozs7d0JBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFkLENBQWMsRUFBQyxFQUFFOzRCQUNyRCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUN0QjtxQkFDRjt5QkFBTTt3QkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUN0QjtpQkFDRjthQUNGOzs7Ozs7Ozs7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOztnQkFqRUYsVUFBVTs7SUFrRVgsZUFBQztDQUFBLEFBbEVELElBa0VDO1NBakVZLFFBQVE7OztJQUNuQiwrQkFBMkI7O0lBQzNCLDBCQUErQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWN1cml0eSB7XG4gIGNyZWRlbnRpYWxzOiBzdHJpbmdbXSA9IFtdO1xuICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdyYW50KGRhdGE6IGFueVtdIHwgT2JqZWN0KTogdm9pZCB7XG4gICAgbGV0IHBhcnNlZDogYW55W10gPSBbXTtcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBmb3IgKGxldCBwZXJtaXNzaW9uIG9mIGRhdGEpIHtcbiAgICAgICAgcGFyc2VkLnB1c2gocGVybWlzc2lvbi5yZXBsYWNlKC9cXHMvZ2ksICcnKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhW2tleV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgIGZvciAobGV0IHBlcm1pc3Npb24gb2YgZGF0YVtrZXldKSB7XG4gICAgICAgICAgICBwYXJzZWQucHVzaChgJHtrZXl9LiR7cGVybWlzc2lvbn1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IFtdLmNvbmNhdCh0aGlzLmNyZWRlbnRpYWxzLCBwYXJzZWQpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5jcmVkZW50aWFscyk7XG4gIH1cblxuICBoYXModmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNyZWRlbnRpYWxzLmluZGV4T2YodmFsdWUpID4gLTE7XG4gIH1cblxuICByZXZva2UodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGxldCBpOiBudW1iZXIgPSB0aGlzLmNyZWRlbnRpYWxzLmluZGV4T2YodmFsdWUpO1xuICAgIHRoaXMuY3JlZGVudGlhbHMuc3BsaWNlKGksIDEpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5jcmVkZW50aWFscyk7XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gW107XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmNyZWRlbnRpYWxzKTtcbiAgfVxuXG4gIHN1YnNjcmliZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2Uuc3Vic2NyaWJlKGZuKTtcbiAgfVxuXG4gIGNoZWNrUm91dGVzKFxuICAgIHJvdXRlczogeyBlbnRpdGllcz86IGFueVtdOyBwZXJtaXNzaW9ucz86IGFueVtdIHwgRnVuY3Rpb247IHBhdGg/OiBzdHJpbmc7IGxhYmVsPzogc3RyaW5nOyBjYW5EaXNhYmxlPzogQm9vbGVhbiB9W10sXG4gICAgb3B0aW9uczogeyBlbnRpdHlUeXBlPzogc3RyaW5nIH0sXG4gICk6IGFueSB7XG4gICAgbGV0IGZpbHRlcmVkOiBhbnlbXSA9IFtdO1xuICAgIGZvciAobGV0IHJvdXRlIG9mIHJvdXRlcykge1xuICAgICAgaWYgKHJvdXRlLmVudGl0aWVzICYmIH5yb3V0ZS5lbnRpdGllcy5pbmRleE9mKG9wdGlvbnMuZW50aXR5VHlwZSkpIHtcbiAgICAgICAgaWYgKHJvdXRlLnBlcm1pc3Npb25zIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICBpZiAocm91dGUucGVybWlzc2lvbnMob3B0aW9ucywgdGhpcykpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkLnB1c2gocm91dGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3V0ZS5wZXJtaXNzaW9ucyAmJiByb3V0ZS5wZXJtaXNzaW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAocm91dGUucGVybWlzc2lvbnMuZXZlcnkoKHBlcm0pID0+IHRoaXMuaGFzKHBlcm0pKSkge1xuICAgICAgICAgICAgZmlsdGVyZWQucHVzaChyb3V0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbHRlcmVkLnB1c2gocm91dGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbHRlcmVkO1xuICB9XG59XG4iXX0=