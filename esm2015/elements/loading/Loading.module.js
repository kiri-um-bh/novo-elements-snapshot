// NG2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// APP
import { NovoIsLoadingDirective, NovoLoadedDirective, NovoLoadingElement, NovoSkeletonDirective, NovoSpinnerElement } from './Loading';
import * as i0 from "@angular/core";
export class NovoLoadingModule {
}
NovoLoadingModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoLoadingModule });
NovoLoadingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoLoadingModule_Factory(t) { return new (t || NovoLoadingModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoLoadingModule, { declarations: [NovoLoadingElement, NovoSpinnerElement, NovoIsLoadingDirective, NovoLoadedDirective, NovoSkeletonDirective], imports: [CommonModule], exports: [NovoLoadingElement, NovoSpinnerElement, NovoIsLoadingDirective, NovoLoadedDirective, NovoSkeletonDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoLoadingModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [NovoLoadingElement, NovoSpinnerElement, NovoIsLoadingDirective, NovoLoadedDirective, NovoSkeletonDirective],
                exports: [NovoLoadingElement, NovoSpinnerElement, NovoIsLoadingDirective, NovoLoadedDirective, NovoSkeletonDirective],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9sb2FkaW5nL0xvYWRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxNQUFNO0FBQ04sT0FBTyxFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLHFCQUFxQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sV0FBVyxDQUFDOztBQU92SSxNQUFNLE9BQU8saUJBQWlCOztxREFBakIsaUJBQWlCO2lIQUFqQixpQkFBaUIsa0JBSm5CLENBQUMsWUFBWSxDQUFDO3dGQUlaLGlCQUFpQixtQkFIYixrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsYUFEL0csWUFBWSxhQUVaLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQjtrREFFekcsaUJBQWlCO2NBTDdCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDO2dCQUMxSCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQzthQUN0SCIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Jc0xvYWRpbmdEaXJlY3RpdmUsIE5vdm9Mb2FkZWREaXJlY3RpdmUsIE5vdm9Mb2FkaW5nRWxlbWVudCwgTm92b1NrZWxldG9uRGlyZWN0aXZlLCBOb3ZvU3Bpbm5lckVsZW1lbnQgfSBmcm9tICcuL0xvYWRpbmcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTm92b0xvYWRpbmdFbGVtZW50LCBOb3ZvU3Bpbm5lckVsZW1lbnQsIE5vdm9Jc0xvYWRpbmdEaXJlY3RpdmUsIE5vdm9Mb2FkZWREaXJlY3RpdmUsIE5vdm9Ta2VsZXRvbkRpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtOb3ZvTG9hZGluZ0VsZW1lbnQsIE5vdm9TcGlubmVyRWxlbWVudCwgTm92b0lzTG9hZGluZ0RpcmVjdGl2ZSwgTm92b0xvYWRlZERpcmVjdGl2ZSwgTm92b1NrZWxldG9uRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0xvYWRpbmdNb2R1bGUge31cbiJdfQ==