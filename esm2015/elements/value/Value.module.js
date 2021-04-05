// NG2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// APP
import { NovoCommonModule } from '../common/common.module';
import { EntityList } from './EntityList';
import { RenderPipe } from './Render';
import { NovoValueElement } from './Value';
import * as i0 from "@angular/core";
export class NovoValueModule {
}
NovoValueModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoValueModule });
NovoValueModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoValueModule_Factory(t) { return new (t || NovoValueModule)(); }, imports: [[CommonModule, NovoCommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoValueModule, { declarations: [NovoValueElement, RenderPipe, EntityList], imports: [CommonModule, NovoCommonModule], exports: [NovoValueElement, RenderPipe, EntityList] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoValueModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NovoCommonModule],
                declarations: [NovoValueElement, RenderPipe, EntityList],
                exports: [NovoValueElement, RenderPipe, EntityList],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsdWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdmFsdWUvVmFsdWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxNQUFNO0FBQ04sT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFPM0MsTUFBTSxPQUFPLGVBQWU7O21EQUFmLGVBQWU7NkdBQWYsZUFBZSxrQkFKakIsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7d0ZBSTlCLGVBQWUsbUJBSFgsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLFVBQVUsYUFEN0MsWUFBWSxFQUFFLGdCQUFnQixhQUU5QixnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsVUFBVTtrREFFdkMsZUFBZTtjQUwzQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO2dCQUN6QyxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO2dCQUN4RCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO2FBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0NvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24ubW9kdWxlJztcbmltcG9ydCB7IEVudGl0eUxpc3QgfSBmcm9tICcuL0VudGl0eUxpc3QnO1xuaW1wb3J0IHsgUmVuZGVyUGlwZSB9IGZyb20gJy4vUmVuZGVyJztcbmltcG9ydCB7IE5vdm9WYWx1ZUVsZW1lbnQgfSBmcm9tICcuL1ZhbHVlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTm92b0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9WYWx1ZUVsZW1lbnQsIFJlbmRlclBpcGUsIEVudGl0eUxpc3RdLFxuICBleHBvcnRzOiBbTm92b1ZhbHVlRWxlbWVudCwgUmVuZGVyUGlwZSwgRW50aXR5TGlzdF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9WYWx1ZU1vZHVsZSB7fVxuIl19