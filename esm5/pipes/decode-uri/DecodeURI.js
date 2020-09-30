/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjb2RlVVJJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInBpcGVzL2RlY29kZS11cmkvRGVjb2RlVVJJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUVoRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFOUM7SUFBQTtJQVVBLENBQUM7Ozs7O0lBUEMsaUNBQVM7Ozs7SUFBVCxVQUFVLGFBQXFCOztZQUN6QixhQUFhLEdBQVcsRUFBRTtRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxPQUFPLGFBQWEsS0FBSyxRQUFRLEVBQUU7WUFDeEUsYUFBYSxHQUFHLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7Z0JBVEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtnQkFDMUIsVUFBVTs7SUFTWCxvQkFBQztDQUFBLEFBVkQsSUFVQztTQVJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFwcFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5AUGlwZSh7IG5hbWU6ICdkZWNvZGVVUkknIH0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVjb2RlVVJJUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZW5jb2RlZFN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgZGVjb2RlZFN0cmluZzogc3RyaW5nID0gJyc7XG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsoZW5jb2RlZFN0cmluZykgJiYgdHlwZW9mIGVuY29kZWRTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkZWNvZGVkU3RyaW5nID0gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRTdHJpbmcpO1xuICAgIH1cbiAgICByZXR1cm4gZGVjb2RlZFN0cmluZztcbiAgfVxufVxuIl19