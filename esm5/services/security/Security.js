import { __values } from "tslib";
// NG2
import { Injectable, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
var Security = /** @class */ (function () {
    function Security() {
        this.credentials = [];
        this.change = new EventEmitter();
    }
    Security.prototype.grant = function (data) {
        var e_1, _a, e_2, _b;
        var parsed = [];
        if (data instanceof Array) {
            try {
                for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
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
                        for (var _c = (e_2 = void 0, __values(data[key])), _d = _c.next(); !_d.done; _d = _c.next()) {
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
    Security.prototype.has = function (value) {
        return this.credentials.indexOf(value) > -1;
    };
    Security.prototype.revoke = function (value) {
        var i = this.credentials.indexOf(value);
        this.credentials.splice(i, 1);
        this.change.emit(this.credentials);
    };
    Security.prototype.clear = function () {
        this.credentials = [];
        this.change.emit(this.credentials);
    };
    Security.prototype.subscribe = function (fn) {
        this.change.subscribe(fn);
    };
    Security.prototype.checkRoutes = function (routes, options) {
        var e_3, _a;
        var _this = this;
        var filtered = [];
        try {
            for (var routes_1 = __values(routes), routes_1_1 = routes_1.next(); !routes_1_1.done; routes_1_1 = routes_1.next()) {
                var route = routes_1_1.value;
                if (route.entities && ~route.entities.indexOf(options.entityType)) {
                    if (route.permissions instanceof Function) {
                        if (route.permissions(options, this)) {
                            filtered.push(route);
                        }
                    }
                    else if (route.permissions && route.permissions.length) {
                        if (route.permissions.every(function (perm) { return _this.has(perm); })) {
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
    Security.ɵfac = function Security_Factory(t) { return new (t || Security)(); };
    Security.ɵprov = i0.ɵɵdefineInjectable({ token: Security, factory: Security.ɵfac });
    return Security;
}());
export { Security };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Security, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjdXJpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvc2VjdXJpdHkvU2VjdXJpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFekQ7SUFBQTtRQUVFLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQStEaEQ7SUE3REMsd0JBQUssR0FBTCxVQUFNLElBQW9COztRQUN4QixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxJQUFJLFlBQVksS0FBSyxFQUFFOztnQkFDekIsS0FBeUIsSUFBQSxTQUFBLFNBQUEsSUFBSSxDQUFBLDBCQUFBLDRDQUFFO29CQUExQixJQUFNLFVBQVUsaUJBQUE7b0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDN0M7Ozs7Ozs7OztTQUNGO2FBQU0sSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDbkMsS0FBSyxJQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ3RCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEtBQUssRUFBRTs7d0JBQzlCLEtBQXlCLElBQUEsb0JBQUEsU0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQSxnQkFBQSw0QkFBRTs0QkFBL0IsSUFBTSxVQUFVLFdBQUE7NEJBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUksR0FBRyxTQUFJLFVBQVksQ0FBQyxDQUFDO3lCQUNyQzs7Ozs7Ozs7O2lCQUNGO2FBQ0Y7U0FDRjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsc0JBQUcsR0FBSCxVQUFJLEtBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sS0FBVTtRQUNmLElBQU0sQ0FBQyxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxFQUFPO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELDhCQUFXLEdBQVgsVUFDRSxNQUFtSCxFQUNuSCxPQUFnQzs7UUFGbEMsaUJBc0JDO1FBbEJDLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQzs7WUFDcEIsS0FBb0IsSUFBQSxXQUFBLFNBQUEsTUFBTSxDQUFBLDhCQUFBLGtEQUFFO2dCQUF2QixJQUFNLEtBQUssbUJBQUE7Z0JBQ2QsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUNqRSxJQUFJLEtBQUssQ0FBQyxXQUFXLFlBQVksUUFBUSxFQUFFO3dCQUN6QyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFOzRCQUNwQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUN0QjtxQkFDRjt5QkFBTSxJQUFJLEtBQUssQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7d0JBQ3hELElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFkLENBQWMsQ0FBQyxFQUFFOzRCQUNyRCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUN0QjtxQkFDRjt5QkFBTTt3QkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUN0QjtpQkFDRjthQUNGOzs7Ozs7Ozs7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO29FQWhFVSxRQUFRO29EQUFSLFFBQVEsV0FBUixRQUFRO21CQUpyQjtDQXFFQyxBQWxFRCxJQWtFQztTQWpFWSxRQUFRO2tEQUFSLFFBQVE7Y0FEcEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWN1cml0eSB7XG4gIGNyZWRlbnRpYWxzOiBzdHJpbmdbXSA9IFtdO1xuICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdyYW50KGRhdGE6IGFueVtdIHwgT2JqZWN0KTogdm9pZCB7XG4gICAgY29uc3QgcGFyc2VkID0gW107XG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgZm9yIChjb25zdCBwZXJtaXNzaW9uIG9mIGRhdGEpIHtcbiAgICAgICAgcGFyc2VkLnB1c2gocGVybWlzc2lvbi5yZXBsYWNlKC9cXHMvZ2ksICcnKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGFba2V5XSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgZm9yIChjb25zdCBwZXJtaXNzaW9uIG9mIGRhdGFba2V5XSkge1xuICAgICAgICAgICAgcGFyc2VkLnB1c2goYCR7a2V5fS4ke3Blcm1pc3Npb259YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBbXS5jb25jYXQodGhpcy5jcmVkZW50aWFscywgcGFyc2VkKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuY3JlZGVudGlhbHMpO1xuICB9XG5cbiAgaGFzKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jcmVkZW50aWFscy5pbmRleE9mKHZhbHVlKSA+IC0xO1xuICB9XG5cbiAgcmV2b2tlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBpOiBudW1iZXIgPSB0aGlzLmNyZWRlbnRpYWxzLmluZGV4T2YodmFsdWUpO1xuICAgIHRoaXMuY3JlZGVudGlhbHMuc3BsaWNlKGksIDEpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5jcmVkZW50aWFscyk7XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gW107XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmNyZWRlbnRpYWxzKTtcbiAgfVxuXG4gIHN1YnNjcmliZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2Uuc3Vic2NyaWJlKGZuKTtcbiAgfVxuXG4gIGNoZWNrUm91dGVzKFxuICAgIHJvdXRlczogeyBlbnRpdGllcz86IGFueVtdOyBwZXJtaXNzaW9ucz86IGFueVtdIHwgRnVuY3Rpb247IHBhdGg/OiBzdHJpbmc7IGxhYmVsPzogc3RyaW5nOyBjYW5EaXNhYmxlPzogQm9vbGVhbiB9W10sXG4gICAgb3B0aW9uczogeyBlbnRpdHlUeXBlPzogc3RyaW5nIH0sXG4gICk6IGFueSB7XG4gICAgY29uc3QgZmlsdGVyZWQgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xuICAgICAgaWYgKHJvdXRlLmVudGl0aWVzICYmIH5yb3V0ZS5lbnRpdGllcy5pbmRleE9mKG9wdGlvbnMuZW50aXR5VHlwZSkpIHtcbiAgICAgICAgaWYgKHJvdXRlLnBlcm1pc3Npb25zIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICBpZiAocm91dGUucGVybWlzc2lvbnMob3B0aW9ucywgdGhpcykpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkLnB1c2gocm91dGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3V0ZS5wZXJtaXNzaW9ucyAmJiByb3V0ZS5wZXJtaXNzaW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAocm91dGUucGVybWlzc2lvbnMuZXZlcnkoKHBlcm0pID0+IHRoaXMuaGFzKHBlcm0pKSkge1xuICAgICAgICAgICAgZmlsdGVyZWQucHVzaChyb3V0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbHRlcmVkLnB1c2gocm91dGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbHRlcmVkO1xuICB9XG59XG4iXX0=