// NG2
import { Injectable, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class DefaultPipe {
    transform(value, defaultValue) {
        return value || defaultValue;
    }
}
DefaultPipe.ɵfac = function DefaultPipe_Factory(t) { return new (t || DefaultPipe)(); };
DefaultPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "default", type: DefaultPipe, pure: true });
DefaultPipe.ɵprov = i0.ɵɵdefineInjectable({ token: DefaultPipe, factory: DefaultPipe.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultPipe, [{
        type: Pipe,
        args: [{ name: 'default', pure: true }]
    }, {
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbInBpcGVzL2RlZmF1bHQvRGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUloRSxNQUFNLE9BQU8sV0FBVztJQUN0QixTQUFTLENBQUMsS0FBVSxFQUFFLFlBQWlCO1FBQ3JDLE9BQU8sS0FBSyxJQUFJLFlBQVksQ0FBQztJQUMvQixDQUFDOztzRUFIVSxXQUFXOzZEQUFYLFdBQVc7bURBQVgsV0FBVyxXQUFYLFdBQVc7a0RBQVgsV0FBVztjQUZ2QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7O2NBQ3BDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnZGVmYXVsdCcsIHB1cmU6IHRydWUgfSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZWZhdWx0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgZGVmYXVsdFZhbHVlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2YWx1ZSB8fCBkZWZhdWx0VmFsdWU7XG4gIH1cbn1cbiJdfQ==