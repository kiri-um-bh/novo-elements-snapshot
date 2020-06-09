// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// APP
import { NovoLoadingElement, NovoSpinnerElement, NovoIsLoadingDirective, NovoLoadedDirective, NovoSkeletonDirective } from './Loading';
import * as i0 from "@angular/core";
var NovoLoadingModule = /** @class */ (function () {
    function NovoLoadingModule() {
    }
    NovoLoadingModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoLoadingModule });
    NovoLoadingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoLoadingModule_Factory(t) { return new (t || NovoLoadingModule)(); }, imports: [[CommonModule]] });
    return NovoLoadingModule;
}());
export { NovoLoadingModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoLoadingModule, { declarations: [NovoLoadingElement, NovoSpinnerElement, NovoIsLoadingDirective, NovoLoadedDirective, NovoSkeletonDirective], imports: [CommonModule], exports: [NovoLoadingElement, NovoSpinnerElement, NovoIsLoadingDirective, NovoLoadedDirective, NovoSkeletonDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoLoadingModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [NovoLoadingElement, NovoSpinnerElement, NovoIsLoadingDirective, NovoLoadedDirective, NovoSkeletonDirective],
                exports: [NovoLoadingElement, NovoSpinnerElement, NovoIsLoadingDirective, NovoLoadedDirective, NovoSkeletonDirective],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbG9hZGluZy9Mb2FkaW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsTUFBTTtBQUNOLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFdkk7SUFBQTtLQUtpQzt5REFBcEIsaUJBQWlCO3FIQUFqQixpQkFBaUIsa0JBSm5CLENBQUMsWUFBWSxDQUFDOzRCQVB6QjtDQVdpQyxBQUxqQyxJQUtpQztTQUFwQixpQkFBaUI7d0ZBQWpCLGlCQUFpQixtQkFIYixrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsYUFEL0csWUFBWSxhQUVaLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQjtrREFFekcsaUJBQWlCO2NBTDdCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDO2dCQUMxSCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQzthQUN0SCIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Mb2FkaW5nRWxlbWVudCwgTm92b1NwaW5uZXJFbGVtZW50LCBOb3ZvSXNMb2FkaW5nRGlyZWN0aXZlLCBOb3ZvTG9hZGVkRGlyZWN0aXZlLCBOb3ZvU2tlbGV0b25EaXJlY3RpdmUgfSBmcm9tICcuL0xvYWRpbmcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTm92b0xvYWRpbmdFbGVtZW50LCBOb3ZvU3Bpbm5lckVsZW1lbnQsIE5vdm9Jc0xvYWRpbmdEaXJlY3RpdmUsIE5vdm9Mb2FkZWREaXJlY3RpdmUsIE5vdm9Ta2VsZXRvbkRpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtOb3ZvTG9hZGluZ0VsZW1lbnQsIE5vdm9TcGlubmVyRWxlbWVudCwgTm92b0lzTG9hZGluZ0RpcmVjdGl2ZSwgTm92b0xvYWRlZERpcmVjdGl2ZSwgTm92b1NrZWxldG9uRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0xvYWRpbmdNb2R1bGUge31cbiJdfQ==