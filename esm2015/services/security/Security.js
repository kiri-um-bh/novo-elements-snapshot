/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Injectable, EventEmitter } from '@angular/core';
export class Security {
    constructor() {
        this.credentials = [];
        this.change = new EventEmitter();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    grant(data) {
        /** @type {?} */
        let parsed = [];
        if (data instanceof Array) {
            for (let permission of data) {
                parsed.push(permission.replace(/\s/gi, ''));
            }
        }
        else if (typeof data === 'object') {
            for (let key in data) {
                if (data[key] instanceof Array) {
                    for (let permission of data[key]) {
                        parsed.push(`${key}.${permission}`);
                    }
                }
            }
        }
        this.credentials = [].concat(this.credentials, parsed);
        this.change.emit(this.credentials);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    has(value) {
        return this.credentials.indexOf(value) > -1;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    revoke(value) {
        /** @type {?} */
        let i = this.credentials.indexOf(value);
        this.credentials.splice(i, 1);
        this.change.emit(this.credentials);
    }
    /**
     * @return {?}
     */
    clear() {
        this.credentials = [];
        this.change.emit(this.credentials);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    subscribe(fn) {
        this.change.subscribe(fn);
    }
    /**
     * @param {?} routes
     * @param {?} options
     * @return {?}
     */
    checkRoutes(routes, options) {
        /** @type {?} */
        let filtered = [];
        for (let route of routes) {
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
                    (perm) => this.has(perm)))) {
                        filtered.push(route);
                    }
                }
                else {
                    filtered.push(route);
                }
            }
        }
        return filtered;
    }
}
Security.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    Security.prototype.credentials;
    /** @type {?} */
    Security.prototype.change;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjdXJpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvc2VjdXJpdHkvU2VjdXJpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6RCxNQUFNLE9BQU8sUUFBUTtJQURyQjtRQUVFLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQStEakQsQ0FBQzs7Ozs7SUE3REMsS0FBSyxDQUFDLElBQW9COztZQUNwQixNQUFNLEdBQVUsRUFBRTtRQUN0QixJQUFJLElBQUksWUFBWSxLQUFLLEVBQUU7WUFDekIsS0FBSyxJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUU7Z0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM3QztTQUNGO2FBQU0sSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDbkMsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEtBQUssRUFBRTtvQkFDOUIsS0FBSyxJQUFJLFVBQVUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUMsQ0FBQztxQkFDckM7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEtBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQVU7O1lBQ1gsQ0FBQyxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEVBQU87UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQ1QsTUFBbUgsRUFDbkgsT0FBZ0M7O1lBRTVCLFFBQVEsR0FBVSxFQUFFO1FBQ3hCLEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ3hCLElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDakUsSUFBSSxLQUFLLENBQUMsV0FBVyxZQUFZLFFBQVEsRUFBRTtvQkFDekMsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRTt3QkFDcEMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDdEI7aUJBQ0Y7cUJBQU0sSUFBSSxLQUFLLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO29CQUN4RCxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSzs7OztvQkFBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFO3dCQUNyRCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUN0QjtpQkFDRjtxQkFBTTtvQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0QjthQUNGO1NBQ0Y7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7WUFqRUYsVUFBVTs7OztJQUVULCtCQUEyQjs7SUFDM0IsMEJBQStDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5IHtcbiAgY3JlZGVudGlhbHM6IHN0cmluZ1tdID0gW107XG4gIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZ3JhbnQoZGF0YTogYW55W10gfCBPYmplY3QpOiB2b2lkIHtcbiAgICBsZXQgcGFyc2VkOiBhbnlbXSA9IFtdO1xuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGZvciAobGV0IHBlcm1pc3Npb24gb2YgZGF0YSkge1xuICAgICAgICBwYXJzZWQucHVzaChwZXJtaXNzaW9uLnJlcGxhY2UoL1xccy9naSwgJycpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGFba2V5XSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgZm9yIChsZXQgcGVybWlzc2lvbiBvZiBkYXRhW2tleV0pIHtcbiAgICAgICAgICAgIHBhcnNlZC5wdXNoKGAke2tleX0uJHtwZXJtaXNzaW9ufWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gW10uY29uY2F0KHRoaXMuY3JlZGVudGlhbHMsIHBhcnNlZCk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmNyZWRlbnRpYWxzKTtcbiAgfVxuXG4gIGhhcyh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlZGVudGlhbHMuaW5kZXhPZih2YWx1ZSkgPiAtMTtcbiAgfVxuXG4gIHJldm9rZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgbGV0IGk6IG51bWJlciA9IHRoaXMuY3JlZGVudGlhbHMuaW5kZXhPZih2YWx1ZSk7XG4gICAgdGhpcy5jcmVkZW50aWFscy5zcGxpY2UoaSwgMSk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmNyZWRlbnRpYWxzKTtcbiAgfVxuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBbXTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuY3JlZGVudGlhbHMpO1xuICB9XG5cbiAgc3Vic2NyaWJlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZS5zdWJzY3JpYmUoZm4pO1xuICB9XG5cbiAgY2hlY2tSb3V0ZXMoXG4gICAgcm91dGVzOiB7IGVudGl0aWVzPzogYW55W107IHBlcm1pc3Npb25zPzogYW55W10gfCBGdW5jdGlvbjsgcGF0aD86IHN0cmluZzsgbGFiZWw/OiBzdHJpbmc7IGNhbkRpc2FibGU/OiBCb29sZWFuIH1bXSxcbiAgICBvcHRpb25zOiB7IGVudGl0eVR5cGU/OiBzdHJpbmcgfSxcbiAgKTogYW55IHtcbiAgICBsZXQgZmlsdGVyZWQ6IGFueVtdID0gW107XG4gICAgZm9yIChsZXQgcm91dGUgb2Ygcm91dGVzKSB7XG4gICAgICBpZiAocm91dGUuZW50aXRpZXMgJiYgfnJvdXRlLmVudGl0aWVzLmluZGV4T2Yob3B0aW9ucy5lbnRpdHlUeXBlKSkge1xuICAgICAgICBpZiAocm91dGUucGVybWlzc2lvbnMgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgIGlmIChyb3V0ZS5wZXJtaXNzaW9ucyhvcHRpb25zLCB0aGlzKSkge1xuICAgICAgICAgICAgZmlsdGVyZWQucHVzaChyb3V0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdXRlLnBlcm1pc3Npb25zICYmIHJvdXRlLnBlcm1pc3Npb25zLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChyb3V0ZS5wZXJtaXNzaW9ucy5ldmVyeSgocGVybSkgPT4gdGhpcy5oYXMocGVybSkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZC5wdXNoKHJvdXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlsdGVyZWQucHVzaChyb3V0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmlsdGVyZWQ7XG4gIH1cbn1cbiJdfQ==