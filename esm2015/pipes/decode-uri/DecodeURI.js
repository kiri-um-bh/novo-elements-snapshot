// NG2
import { Injectable, Pipe } from '@angular/core';
// App
import { Helpers } from '../../utils/Helpers';
import * as i0 from "@angular/core";
export class DecodeURIPipe {
    transform(encodedString) {
        let decodedString = '';
        if (!Helpers.isBlank(encodedString) && typeof encodedString === 'string') {
            decodedString = decodeURIComponent(encodedString);
        }
        return decodedString;
    }
}
DecodeURIPipe.ɵfac = function DecodeURIPipe_Factory(t) { return new (t || DecodeURIPipe)(); };
DecodeURIPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "decodeURI", type: DecodeURIPipe, pure: true });
DecodeURIPipe.ɵprov = i0.ɵɵdefineInjectable({ token: DecodeURIPipe, factory: DecodeURIPipe.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DecodeURIPipe, [{
        type: Pipe,
        args: [{ name: 'decodeURI' }]
    }, {
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjb2RlVVJJLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsicGlwZXMvZGVjb2RlLXVyaS9EZWNvZGVVUkkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxNQUFNO0FBQ04sT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUk5QyxNQUFNLE9BQU8sYUFBYTtJQUN4QixTQUFTLENBQUMsYUFBcUI7UUFDN0IsSUFBSSxhQUFhLEdBQVcsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLE9BQU8sYUFBYSxLQUFLLFFBQVEsRUFBRTtZQUN4RSxhQUFhLEdBQUcsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbkQ7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDOzswRUFQVSxhQUFhO2lFQUFiLGFBQWE7cURBQWIsYUFBYSxXQUFiLGFBQWE7a0RBQWIsYUFBYTtjQUZ6QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOztjQUMxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBcHBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuQFBpcGUoeyBuYW1lOiAnZGVjb2RlVVJJJyB9KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERlY29kZVVSSVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGVuY29kZWRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IGRlY29kZWRTdHJpbmc6IHN0cmluZyA9ICcnO1xuICAgIGlmICghSGVscGVycy5pc0JsYW5rKGVuY29kZWRTdHJpbmcpICYmIHR5cGVvZiBlbmNvZGVkU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgZGVjb2RlZFN0cmluZyA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkU3RyaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlY29kZWRTdHJpbmc7XG4gIH1cbn1cbiJdfQ==