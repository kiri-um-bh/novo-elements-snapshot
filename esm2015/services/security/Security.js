/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        if (typeof value === 'string') {
            return value.startsWith('InvoiceTermVersion.') || this.credentials.indexOf(value) > -1;
        }
        else {
            return false;
        }
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
                    if (route.permissions.every((perm) => this.has(perm))) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjdXJpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvc2VjdXJpdHkvU2VjdXJpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6RCxNQUFNO0lBRE47UUFFRSxnQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUMzQixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFtRWpELENBQUM7Ozs7O0lBakVDLEtBQUssQ0FBQyxJQUFvQjs7WUFDcEIsTUFBTSxHQUFVLEVBQUU7UUFDdEIsSUFBSSxJQUFJLFlBQVksS0FBSyxFQUFFO1lBQ3pCLEtBQUssSUFBSSxVQUFVLElBQUksSUFBSSxFQUFFO2dCQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDN0M7U0FDRjthQUFNLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ25DLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUNwQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxLQUFLLEVBQUU7b0JBQzlCLEtBQUssSUFBSSxVQUFVLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUM7cUJBQ3JDO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxLQUFVO1FBQ1osSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDeEY7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFVOztZQUNYLENBQUMsR0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxFQUFPO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7O0lBRUQsV0FBVyxDQUNULE1BQW1ILEVBQ25ILE9BQWdDOztZQUU1QixRQUFRLEdBQVUsRUFBRTtRQUN4QixLQUFLLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUN4QixJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ2pFLElBQUksS0FBSyxDQUFDLFdBQVcsWUFBWSxRQUFRLEVBQUU7b0JBQ3pDLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUU7d0JBQ3BDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3RCO2lCQUNGO3FCQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtvQkFDeEQsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO3dCQUNyRCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUN0QjtpQkFDRjtxQkFBTTtvQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0QjthQUNGO1NBQ0Y7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7WUFyRUYsVUFBVTs7OztJQUVULCtCQUEyQjs7SUFDM0IsMEJBQStDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5IHtcbiAgY3JlZGVudGlhbHM6IHN0cmluZ1tdID0gW107XG4gIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZ3JhbnQoZGF0YTogYW55W10gfCBPYmplY3QpOiB2b2lkIHtcbiAgICBsZXQgcGFyc2VkOiBhbnlbXSA9IFtdO1xuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGZvciAobGV0IHBlcm1pc3Npb24gb2YgZGF0YSkge1xuICAgICAgICBwYXJzZWQucHVzaChwZXJtaXNzaW9uLnJlcGxhY2UoL1xccy9naSwgJycpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGFba2V5XSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgZm9yIChsZXQgcGVybWlzc2lvbiBvZiBkYXRhW2tleV0pIHtcbiAgICAgICAgICAgIHBhcnNlZC5wdXNoKGAke2tleX0uJHtwZXJtaXNzaW9ufWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gW10uY29uY2F0KHRoaXMuY3JlZGVudGlhbHMsIHBhcnNlZCk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmNyZWRlbnRpYWxzKTtcbiAgfVxuXG4gIGhhcyh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5zdGFydHNXaXRoKCdJbnZvaWNlVGVybVZlcnNpb24uJykgfHwgdGhpcy5jcmVkZW50aWFscy5pbmRleE9mKHZhbHVlKSA+IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV2b2tlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgaTogbnVtYmVyID0gdGhpcy5jcmVkZW50aWFscy5pbmRleE9mKHZhbHVlKTtcbiAgICB0aGlzLmNyZWRlbnRpYWxzLnNwbGljZShpLCAxKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuY3JlZGVudGlhbHMpO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IFtdO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5jcmVkZW50aWFscyk7XG4gIH1cblxuICBzdWJzY3JpYmUoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlLnN1YnNjcmliZShmbik7XG4gIH1cblxuICBjaGVja1JvdXRlcyhcbiAgICByb3V0ZXM6IHsgZW50aXRpZXM/OiBhbnlbXTsgcGVybWlzc2lvbnM/OiBhbnlbXSB8IEZ1bmN0aW9uOyBwYXRoPzogc3RyaW5nOyBsYWJlbD86IHN0cmluZzsgY2FuRGlzYWJsZT86IEJvb2xlYW4gfVtdLFxuICAgIG9wdGlvbnM6IHsgZW50aXR5VHlwZT86IHN0cmluZyB9LFxuICApOiBhbnkge1xuICAgIGxldCBmaWx0ZXJlZDogYW55W10gPSBbXTtcbiAgICBmb3IgKGxldCByb3V0ZSBvZiByb3V0ZXMpIHtcbiAgICAgIGlmIChyb3V0ZS5lbnRpdGllcyAmJiB+cm91dGUuZW50aXRpZXMuaW5kZXhPZihvcHRpb25zLmVudGl0eVR5cGUpKSB7XG4gICAgICAgIGlmIChyb3V0ZS5wZXJtaXNzaW9ucyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgaWYgKHJvdXRlLnBlcm1pc3Npb25zKG9wdGlvbnMsIHRoaXMpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZC5wdXNoKHJvdXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocm91dGUucGVybWlzc2lvbnMgJiYgcm91dGUucGVybWlzc2lvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKHJvdXRlLnBlcm1pc3Npb25zLmV2ZXJ5KChwZXJtKSA9PiB0aGlzLmhhcyhwZXJtKSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkLnB1c2gocm91dGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWx0ZXJlZC5wdXNoKHJvdXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgfVxufVxuIl19