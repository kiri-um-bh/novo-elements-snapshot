/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Injectable, Pipe } from '@angular/core';
// App
import { Helpers } from '../../utils/Helpers';
export class DecodeURIPipe {
    /**
     * @param {?} encodedString
     * @return {?}
     */
    transform(encodedString) {
        /** @type {?} */
        let decodedString = '';
        if (!Helpers.isBlank(encodedString) && typeof encodedString === 'string') {
            decodedString = decodeURIComponent(encodedString);
        }
        return decodedString;
    }
}
DecodeURIPipe.decorators = [
    { type: Pipe, args: [{ name: 'decodeURI' },] },
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjb2RlVVJJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInBpcGVzL2RlY29kZS11cmkvRGVjb2RlVVJJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUVoRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFJOUMsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBQ3hCLFNBQVMsQ0FBQyxhQUFxQjs7WUFDekIsYUFBYSxHQUFXLEVBQUU7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksT0FBTyxhQUFhLEtBQUssUUFBUSxFQUFFO1lBQ3hFLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNuRDtRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7OztZQVRGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7WUFDMUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQXBwXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RlY29kZVVSSScgfSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZWNvZGVVUklQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShlbmNvZGVkU3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBkZWNvZGVkU3RyaW5nOiBzdHJpbmcgPSAnJztcbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayhlbmNvZGVkU3RyaW5nKSAmJiB0eXBlb2YgZW5jb2RlZFN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRlY29kZWRTdHJpbmcgPSBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZFN0cmluZyk7XG4gICAgfVxuICAgIHJldHVybiBkZWNvZGVkU3RyaW5nO1xuICB9XG59XG4iXX0=