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
        const parsed = [];
        if (data instanceof Array) {
            for (const permission of data) {
                parsed.push(permission.replace(/\s/gi, ''));
            }
        }
        else if (typeof data === 'object') {
            for (const key in data) {
                if (data[key] instanceof Array) {
                    for (const permission of data[key]) {
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
        const i = this.credentials.indexOf(value);
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
        const filtered = [];
        for (const route of routes) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjdXJpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvc2VjdXJpdHkvU2VjdXJpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekQsTUFBTSxPQUFPLFFBQVE7SUFEckI7UUFFRSxnQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUMzQixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUErRGpELENBQUM7Ozs7O0lBN0RDLEtBQUssQ0FBQyxJQUFvQjs7Y0FDbEIsTUFBTSxHQUFVLEVBQUU7UUFDeEIsSUFBSSxJQUFJLFlBQVksS0FBSyxFQUFFO1lBQ3pCLEtBQUssTUFBTSxVQUFVLElBQUksSUFBSSxFQUFFO2dCQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDN0M7U0FDRjthQUFNLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ25DLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUN0QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxLQUFLLEVBQUU7b0JBQzlCLEtBQUssTUFBTSxVQUFVLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUM7cUJBQ3JDO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxLQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFVOztjQUNULENBQUMsR0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxFQUFPO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBRUQsV0FBVyxDQUNULE1BQW1ILEVBQ25ILE9BQWdDOztjQUUxQixRQUFRLEdBQVUsRUFBRTtRQUMxQixLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUMxQixJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ2pFLElBQUksS0FBSyxDQUFDLFdBQVcsWUFBWSxRQUFRLEVBQUU7b0JBQ3pDLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUU7d0JBQ3BDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3RCO2lCQUNGO3FCQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtvQkFDeEQsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUs7Ozs7b0JBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRTt3QkFDckQsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDdEI7aUJBQ0Y7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdEI7YUFDRjtTQUNGO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7O1lBakVGLFVBQVU7Ozs7SUFFVCwrQkFBMkI7O0lBQzNCLDBCQUErQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWN1cml0eSB7XG4gIGNyZWRlbnRpYWxzOiBzdHJpbmdbXSA9IFtdO1xuICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdyYW50KGRhdGE6IGFueVtdIHwgT2JqZWN0KTogdm9pZCB7XG4gICAgY29uc3QgcGFyc2VkOiBhbnlbXSA9IFtdO1xuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGZvciAoY29uc3QgcGVybWlzc2lvbiBvZiBkYXRhKSB7XG4gICAgICAgIHBhcnNlZC5wdXNoKHBlcm1pc3Npb24ucmVwbGFjZSgvXFxzL2dpLCAnJykpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhW2tleV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgIGZvciAoY29uc3QgcGVybWlzc2lvbiBvZiBkYXRhW2tleV0pIHtcbiAgICAgICAgICAgIHBhcnNlZC5wdXNoKGAke2tleX0uJHtwZXJtaXNzaW9ufWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gW10uY29uY2F0KHRoaXMuY3JlZGVudGlhbHMsIHBhcnNlZCk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmNyZWRlbnRpYWxzKTtcbiAgfVxuXG4gIGhhcyh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlZGVudGlhbHMuaW5kZXhPZih2YWx1ZSkgPiAtMTtcbiAgfVxuXG4gIHJldm9rZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgaTogbnVtYmVyID0gdGhpcy5jcmVkZW50aWFscy5pbmRleE9mKHZhbHVlKTtcbiAgICB0aGlzLmNyZWRlbnRpYWxzLnNwbGljZShpLCAxKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuY3JlZGVudGlhbHMpO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IFtdO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5jcmVkZW50aWFscyk7XG4gIH1cblxuICBzdWJzY3JpYmUoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlLnN1YnNjcmliZShmbik7XG4gIH1cblxuICBjaGVja1JvdXRlcyhcbiAgICByb3V0ZXM6IHsgZW50aXRpZXM/OiBhbnlbXTsgcGVybWlzc2lvbnM/OiBhbnlbXSB8IEZ1bmN0aW9uOyBwYXRoPzogc3RyaW5nOyBsYWJlbD86IHN0cmluZzsgY2FuRGlzYWJsZT86IEJvb2xlYW4gfVtdLFxuICAgIG9wdGlvbnM6IHsgZW50aXR5VHlwZT86IHN0cmluZyB9LFxuICApOiBhbnkge1xuICAgIGNvbnN0IGZpbHRlcmVkOiBhbnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3Qgcm91dGUgb2Ygcm91dGVzKSB7XG4gICAgICBpZiAocm91dGUuZW50aXRpZXMgJiYgfnJvdXRlLmVudGl0aWVzLmluZGV4T2Yob3B0aW9ucy5lbnRpdHlUeXBlKSkge1xuICAgICAgICBpZiAocm91dGUucGVybWlzc2lvbnMgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgIGlmIChyb3V0ZS5wZXJtaXNzaW9ucyhvcHRpb25zLCB0aGlzKSkge1xuICAgICAgICAgICAgZmlsdGVyZWQucHVzaChyb3V0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJvdXRlLnBlcm1pc3Npb25zICYmIHJvdXRlLnBlcm1pc3Npb25zLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChyb3V0ZS5wZXJtaXNzaW9ucy5ldmVyeSgocGVybSkgPT4gdGhpcy5oYXMocGVybSkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZC5wdXNoKHJvdXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlsdGVyZWQucHVzaChyb3V0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmlsdGVyZWQ7XG4gIH1cbn1cbiJdfQ==