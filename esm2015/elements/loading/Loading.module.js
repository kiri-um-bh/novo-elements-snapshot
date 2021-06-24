// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// APP
import { NovoLoadingElement, NovoSpinnerElement, NovoIsLoadingDirective, NovoLoadedDirective, NovoSkeletonDirective } from './Loading';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbG9hZGluZy9Mb2FkaW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsTUFBTTtBQUNOLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFPdkksTUFBTSxPQUFPLGlCQUFpQjs7cURBQWpCLGlCQUFpQjtpSEFBakIsaUJBQWlCLGtCQUpuQixDQUFDLFlBQVksQ0FBQzt3RkFJWixpQkFBaUIsbUJBSGIsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLGFBRC9HLFlBQVksYUFFWixrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUI7a0RBRXpHLGlCQUFpQjtjQUw3QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQztnQkFDMUgsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLENBQUM7YUFDdEgiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTG9hZGluZ0VsZW1lbnQsIE5vdm9TcGlubmVyRWxlbWVudCwgTm92b0lzTG9hZGluZ0RpcmVjdGl2ZSwgTm92b0xvYWRlZERpcmVjdGl2ZSwgTm92b1NrZWxldG9uRGlyZWN0aXZlIH0gZnJvbSAnLi9Mb2FkaW5nJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9Mb2FkaW5nRWxlbWVudCwgTm92b1NwaW5uZXJFbGVtZW50LCBOb3ZvSXNMb2FkaW5nRGlyZWN0aXZlLCBOb3ZvTG9hZGVkRGlyZWN0aXZlLCBOb3ZvU2tlbGV0b25EaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbTm92b0xvYWRpbmdFbGVtZW50LCBOb3ZvU3Bpbm5lckVsZW1lbnQsIE5vdm9Jc0xvYWRpbmdEaXJlY3RpdmUsIE5vdm9Mb2FkZWREaXJlY3RpdmUsIE5vdm9Ta2VsZXRvbkRpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Mb2FkaW5nTW9kdWxlIHt9XG4iXX0=