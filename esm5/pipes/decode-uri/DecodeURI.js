// NG2
import { Injectable, Pipe } from '@angular/core';
// App
import { Helpers } from '../../utils/Helpers';
import * as i0 from "@angular/core";
var DecodeURIPipe = /** @class */ (function () {
    function DecodeURIPipe() {
    }
    DecodeURIPipe.prototype.transform = function (encodedString) {
        var decodedString = '';
        if (!Helpers.isBlank(encodedString) && typeof encodedString === 'string') {
            decodedString = decodeURIComponent(encodedString);
        }
        return decodedString;
    };
    DecodeURIPipe.ɵfac = function DecodeURIPipe_Factory(t) { return new (t || DecodeURIPipe)(); };
    DecodeURIPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "decodeURI", type: DecodeURIPipe, pure: true });
    DecodeURIPipe.ɵprov = i0.ɵɵdefineInjectable({ token: DecodeURIPipe, factory: DecodeURIPipe.ɵfac });
    return DecodeURIPipe;
}());
export { DecodeURIPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DecodeURIPipe, [{
        type: Pipe,
        args: [{ name: 'decodeURI' }]
    }, {
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjb2RlVVJJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInBpcGVzL2RlY29kZS11cmkvRGVjb2RlVVJJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsTUFBTTtBQUNOLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFOUM7SUFBQTtLQVVDO0lBUEMsaUNBQVMsR0FBVCxVQUFVLGFBQXFCO1FBQzdCLElBQUksYUFBYSxHQUFXLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxPQUFPLGFBQWEsS0FBSyxRQUFRLEVBQUU7WUFDeEUsYUFBYSxHQUFHLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs4RUFQVSxhQUFhO3FFQUFiLGFBQWE7eURBQWIsYUFBYSxXQUFiLGFBQWE7d0JBUDFCO0NBZUMsQUFWRCxJQVVDO1NBUlksYUFBYTtrREFBYixhQUFhO2NBRnpCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7O2NBQzFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFwcFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5AUGlwZSh7IG5hbWU6ICdkZWNvZGVVUkknIH0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVjb2RlVVJJUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZW5jb2RlZFN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgZGVjb2RlZFN0cmluZzogc3RyaW5nID0gJyc7XG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsoZW5jb2RlZFN0cmluZykgJiYgdHlwZW9mIGVuY29kZWRTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBkZWNvZGVkU3RyaW5nID0gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRTdHJpbmcpO1xuICAgIH1cbiAgICByZXR1cm4gZGVjb2RlZFN0cmluZztcbiAgfVxufVxuIl19