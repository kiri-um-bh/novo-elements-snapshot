/**
 * @fileoverview added by tsickle
 * Generated from: services/security/Security.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                        for (var _c = (e_2 = void 0, tslib_1.__values(data[key])), _d = _c.next(); !_d.done; _d = _c.next()) {
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
        var e_3, _a;
        var _this = this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjdXJpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvc2VjdXJpdHkvU2VjdXJpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBQUE7UUFFRSxnQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUMzQixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUErRGpELENBQUM7Ozs7O0lBN0RDLHdCQUFLOzs7O0lBQUwsVUFBTSxJQUFvQjs7O1lBQ2xCLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLElBQUksSUFBSSxZQUFZLEtBQUssRUFBRTs7Z0JBQ3pCLEtBQXlCLElBQUEsU0FBQSxpQkFBQSxJQUFJLENBQUEsMEJBQUEsNENBQUU7b0JBQTFCLElBQU0sVUFBVSxpQkFBQTtvQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUM3Qzs7Ozs7Ozs7O1NBQ0Y7YUFBTSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNuQyxLQUFLLElBQU0sR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDdEIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksS0FBSyxFQUFFOzt3QkFDOUIsS0FBeUIsSUFBQSxvQkFBQSxpQkFBQSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQSxnQkFBQSw0QkFBRTs0QkFBL0IsSUFBTSxVQUFVLFdBQUE7NEJBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUksR0FBRyxTQUFJLFVBQVksQ0FBQyxDQUFDO3lCQUNyQzs7Ozs7Ozs7O2lCQUNGO2FBQ0Y7U0FDRjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELHNCQUFHOzs7O0lBQUgsVUFBSSxLQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELHlCQUFNOzs7O0lBQU4sVUFBTyxLQUFVOztZQUNULENBQUMsR0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsd0JBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsNEJBQVM7Ozs7SUFBVCxVQUFVLEVBQU87UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7Ozs7SUFFRCw4QkFBVzs7Ozs7SUFBWCxVQUNFLE1BQW1ILEVBQ25ILE9BQWdDOztRQUZsQyxpQkFzQkM7O1lBbEJPLFFBQVEsR0FBRyxFQUFFOztZQUNuQixLQUFvQixJQUFBLFdBQUEsaUJBQUEsTUFBTSxDQUFBLDhCQUFBLGtEQUFFO2dCQUF2QixJQUFNLEtBQUssbUJBQUE7Z0JBQ2QsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUNqRSxJQUFJLEtBQUssQ0FBQyxXQUFXLFlBQVksUUFBUSxFQUFFO3dCQUN6QyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFOzRCQUNwQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUN0QjtxQkFDRjt5QkFBTSxJQUFJLEtBQUssQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7d0JBQ3hELElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLOzs7O3dCQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBZCxDQUFjLEVBQUMsRUFBRTs0QkFDckQsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDdEI7cUJBQ0Y7eUJBQU07d0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDdEI7aUJBQ0Y7YUFDRjs7Ozs7Ozs7O1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Z0JBakVGLFVBQVU7O0lBa0VYLGVBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQWpFWSxRQUFROzs7SUFDbkIsK0JBQTJCOztJQUMzQiwwQkFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VjdXJpdHkge1xuICBjcmVkZW50aWFsczogc3RyaW5nW10gPSBbXTtcbiAgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBncmFudChkYXRhOiBhbnlbXSB8IE9iamVjdCk6IHZvaWQge1xuICAgIGNvbnN0IHBhcnNlZCA9IFtdO1xuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGZvciAoY29uc3QgcGVybWlzc2lvbiBvZiBkYXRhKSB7XG4gICAgICAgIHBhcnNlZC5wdXNoKHBlcm1pc3Npb24ucmVwbGFjZSgvXFxzL2dpLCAnJykpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhW2tleV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgIGZvciAoY29uc3QgcGVybWlzc2lvbiBvZiBkYXRhW2tleV0pIHtcbiAgICAgICAgICAgIHBhcnNlZC5wdXNoKGAke2tleX0uJHtwZXJtaXNzaW9ufWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gW10uY29uY2F0KHRoaXMuY3JlZGVudGlhbHMsIHBhcnNlZCk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmNyZWRlbnRpYWxzKTtcbiAgfVxuXG4gIGhhcyh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlZGVudGlhbHMuaW5kZXhPZih2YWx1ZSkgPiAtMTtcbiAgfVxuXG4gIHJldm9rZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgaTogbnVtYmVyID0gdGhpcy5jcmVkZW50aWFscy5pbmRleE9mKHZhbHVlKTtcbiAgICB0aGlzLmNyZWRlbnRpYWxzLnNwbGljZShpLCAxKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuY3JlZGVudGlhbHMpO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IFtdO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5jcmVkZW50aWFscyk7XG4gIH1cblxuICBzdWJzY3JpYmUoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlLnN1YnNjcmliZShmbik7XG4gIH1cblxuICBjaGVja1JvdXRlcyhcbiAgICByb3V0ZXM6IHsgZW50aXRpZXM/OiBhbnlbXTsgcGVybWlzc2lvbnM/OiBhbnlbXSB8IEZ1bmN0aW9uOyBwYXRoPzogc3RyaW5nOyBsYWJlbD86IHN0cmluZzsgY2FuRGlzYWJsZT86IEJvb2xlYW4gfVtdLFxuICAgIG9wdGlvbnM6IHsgZW50aXR5VHlwZT86IHN0cmluZyB9LFxuICApOiBhbnkge1xuICAgIGNvbnN0IGZpbHRlcmVkID0gW107XG4gICAgZm9yIChjb25zdCByb3V0ZSBvZiByb3V0ZXMpIHtcbiAgICAgIGlmIChyb3V0ZS5lbnRpdGllcyAmJiB+cm91dGUuZW50aXRpZXMuaW5kZXhPZihvcHRpb25zLmVudGl0eVR5cGUpKSB7XG4gICAgICAgIGlmIChyb3V0ZS5wZXJtaXNzaW9ucyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgaWYgKHJvdXRlLnBlcm1pc3Npb25zKG9wdGlvbnMsIHRoaXMpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZC5wdXNoKHJvdXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm91dGUucGVybWlzc2lvbnMgJiYgcm91dGUucGVybWlzc2lvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKHJvdXRlLnBlcm1pc3Npb25zLmV2ZXJ5KChwZXJtKSA9PiB0aGlzLmhhcyhwZXJtKSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkLnB1c2gocm91dGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWx0ZXJlZC5wdXNoKHJvdXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgfVxufVxuIl19