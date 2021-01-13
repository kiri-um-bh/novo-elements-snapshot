// NG2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// APP
import { EntityList } from './EntityList';
import { RenderPipe } from './Render';
import { NovoValueElement } from './Value';
import * as i0 from "@angular/core";
export class NovoValueModule {
}
NovoValueModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoValueModule });
NovoValueModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoValueModule_Factory(t) { return new (t || NovoValueModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoValueModule, { declarations: [NovoValueElement, RenderPipe, EntityList], imports: [CommonModule], exports: [NovoValueElement, RenderPipe, EntityList] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoValueModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [NovoValueElement, RenderPipe, EntityList],
                exports: [NovoValueElement, RenderPipe, EntityList],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsdWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdmFsdWUvVmFsdWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxNQUFNO0FBQ04sT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFPM0MsTUFBTSxPQUFPLGVBQWU7O21EQUFmLGVBQWU7NkdBQWYsZUFBZSxrQkFKakIsQ0FBQyxZQUFZLENBQUM7d0ZBSVosZUFBZSxtQkFIWCxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsVUFBVSxhQUQ3QyxZQUFZLGFBRVosZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLFVBQVU7a0RBRXZDLGVBQWU7Y0FMM0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztnQkFDeEQsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQzthQUNwRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEVudGl0eUxpc3QgfSBmcm9tICcuL0VudGl0eUxpc3QnO1xuaW1wb3J0IHsgUmVuZGVyUGlwZSB9IGZyb20gJy4vUmVuZGVyJztcbmltcG9ydCB7IE5vdm9WYWx1ZUVsZW1lbnQgfSBmcm9tICcuL1ZhbHVlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9WYWx1ZUVsZW1lbnQsIFJlbmRlclBpcGUsIEVudGl0eUxpc3RdLFxuICBleHBvcnRzOiBbTm92b1ZhbHVlRWxlbWVudCwgUmVuZGVyUGlwZSwgRW50aXR5TGlzdF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9WYWx1ZU1vZHVsZSB7fVxuIl19