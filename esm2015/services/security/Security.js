/**
 * @fileoverview added by tsickle
 * Generated from: services/security/Security.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjdXJpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvc2VjdXJpdHkvU2VjdXJpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekQsTUFBTSxPQUFPLFFBQVE7SUFEckI7UUFFRSxnQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUMzQixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUErRGpELENBQUM7Ozs7O0lBN0RDLEtBQUssQ0FBQyxJQUFvQjs7WUFDcEIsTUFBTSxHQUFVLEVBQUU7UUFDdEIsSUFBSSxJQUFJLFlBQVksS0FBSyxFQUFFO1lBQ3pCLEtBQUssSUFBSSxVQUFVLElBQUksSUFBSSxFQUFFO2dCQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDN0M7U0FDRjthQUFNLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ25DLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUNwQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxLQUFLLEVBQUU7b0JBQzlCLEtBQUssSUFBSSxVQUFVLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUM7cUJBQ3JDO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxLQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFVOztZQUNYLENBQUMsR0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxFQUFPO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBRUQsV0FBVyxDQUNULE1BQW1ILEVBQ25ILE9BQWdDOztZQUU1QixRQUFRLEdBQVUsRUFBRTtRQUN4QixLQUFLLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUN4QixJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ2pFLElBQUksS0FBSyxDQUFDLFdBQVcsWUFBWSxRQUFRLEVBQUU7b0JBQ3pDLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUU7d0JBQ3BDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3RCO2lCQUNGO3FCQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtvQkFDeEQsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUs7Ozs7b0JBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRTt3QkFDckQsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDdEI7aUJBQ0Y7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdEI7YUFDRjtTQUNGO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7O1lBakVGLFVBQVU7Ozs7SUFFVCwrQkFBMkI7O0lBQzNCLDBCQUErQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWN1cml0eSB7XG4gIGNyZWRlbnRpYWxzOiBzdHJpbmdbXSA9IFtdO1xuICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdyYW50KGRhdGE6IGFueVtdIHwgT2JqZWN0KTogdm9pZCB7XG4gICAgbGV0IHBhcnNlZDogYW55W10gPSBbXTtcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBmb3IgKGxldCBwZXJtaXNzaW9uIG9mIGRhdGEpIHtcbiAgICAgICAgcGFyc2VkLnB1c2gocGVybWlzc2lvbi5yZXBsYWNlKC9cXHMvZ2ksICcnKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhW2tleV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgIGZvciAobGV0IHBlcm1pc3Npb24gb2YgZGF0YVtrZXldKSB7XG4gICAgICAgICAgICBwYXJzZWQucHVzaChgJHtrZXl9LiR7cGVybWlzc2lvbn1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IFtdLmNvbmNhdCh0aGlzLmNyZWRlbnRpYWxzLCBwYXJzZWQpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5jcmVkZW50aWFscyk7XG4gIH1cblxuICBoYXModmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNyZWRlbnRpYWxzLmluZGV4T2YodmFsdWUpID4gLTE7XG4gIH1cblxuICByZXZva2UodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGxldCBpOiBudW1iZXIgPSB0aGlzLmNyZWRlbnRpYWxzLmluZGV4T2YodmFsdWUpO1xuICAgIHRoaXMuY3JlZGVudGlhbHMuc3BsaWNlKGksIDEpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5jcmVkZW50aWFscyk7XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gW107XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmNyZWRlbnRpYWxzKTtcbiAgfVxuXG4gIHN1YnNjcmliZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2Uuc3Vic2NyaWJlKGZuKTtcbiAgfVxuXG4gIGNoZWNrUm91dGVzKFxuICAgIHJvdXRlczogeyBlbnRpdGllcz86IGFueVtdOyBwZXJtaXNzaW9ucz86IGFueVtdIHwgRnVuY3Rpb247IHBhdGg/OiBzdHJpbmc7IGxhYmVsPzogc3RyaW5nOyBjYW5EaXNhYmxlPzogQm9vbGVhbiB9W10sXG4gICAgb3B0aW9uczogeyBlbnRpdHlUeXBlPzogc3RyaW5nIH0sXG4gICk6IGFueSB7XG4gICAgbGV0IGZpbHRlcmVkOiBhbnlbXSA9IFtdO1xuICAgIGZvciAobGV0IHJvdXRlIG9mIHJvdXRlcykge1xuICAgICAgaWYgKHJvdXRlLmVudGl0aWVzICYmIH5yb3V0ZS5lbnRpdGllcy5pbmRleE9mKG9wdGlvbnMuZW50aXR5VHlwZSkpIHtcbiAgICAgICAgaWYgKHJvdXRlLnBlcm1pc3Npb25zIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICBpZiAocm91dGUucGVybWlzc2lvbnMob3B0aW9ucywgdGhpcykpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkLnB1c2gocm91dGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyb3V0ZS5wZXJtaXNzaW9ucyAmJiByb3V0ZS5wZXJtaXNzaW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAocm91dGUucGVybWlzc2lvbnMuZXZlcnkoKHBlcm0pID0+IHRoaXMuaGFzKHBlcm0pKSkge1xuICAgICAgICAgICAgZmlsdGVyZWQucHVzaChyb3V0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbHRlcmVkLnB1c2gocm91dGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbHRlcmVkO1xuICB9XG59XG4iXX0=