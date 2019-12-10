/**
 * @fileoverview added by tsickle
 * Generated from: pipes/decode-uri/DecodeURI.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Injectable, Pipe } from '@angular/core';
// App
import { Helpers } from '../../utils/Helpers';
var DecodeURIPipe = /** @class */ (function () {
    function DecodeURIPipe() {
    }
    /**
     * @param {?} encodedString
     * @return {?}
     */
    DecodeURIPipe.prototype.transform = /**
     * @param {?} encodedString
     * @return {?}
     */
    function (encodedString) {
        /** @type {?} */
        var decodedString = '';
        if (!Helpers.isBlank(encodedString) && typeof encodedString === 'string') {
            decodedString = decodeURIComponent(encodedString);
        }
        return decodedString;
    };
    DecodeURIPipe.decorators = [
        { type: Pipe, args: [{ name: 'decodeURI' },] },
        { type: Injectable }
    ];
    return DecodeURIPipe;
}());
export { DecodeURIPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjb2RlVVJJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInBpcGVzL2RlY29kZS11cmkvRGVjb2RlVVJJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFFaEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTlDO0lBQUE7SUFVQSxDQUFDOzs7OztJQVBDLGlDQUFTOzs7O0lBQVQsVUFBVSxhQUFxQjs7WUFDekIsYUFBYSxHQUFXLEVBQUU7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksT0FBTyxhQUFhLEtBQUssUUFBUSxFQUFFO1lBQ3hFLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNuRDtRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7O2dCQVRGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0JBQzFCLFVBQVU7O0lBU1gsb0JBQUM7Q0FBQSxBQVZELElBVUM7U0FSWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBcHBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuQFBpcGUoeyBuYW1lOiAnZGVjb2RlVVJJJyB9KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERlY29kZVVSSVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGVuY29kZWRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IGRlY29kZWRTdHJpbmc6IHN0cmluZyA9ICcnO1xuICAgIGlmICghSGVscGVycy5pc0JsYW5rKGVuY29kZWRTdHJpbmcpICYmIHR5cGVvZiBlbmNvZGVkU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgZGVjb2RlZFN0cmluZyA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkU3RyaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlY29kZWRTdHJpbmc7XG4gIH1cbn1cbiJdfQ==