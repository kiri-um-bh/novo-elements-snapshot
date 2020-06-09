// NG2
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// APP
import { NovoLoadingModule } from './../loading/Loading.module';
import { NovoListModule } from './../list/List.module';
import { QuickNoteElement } from './QuickNote';
import { QuickNoteResults } from './extras/quick-note-results/QuickNoteResults';
import * as i0 from "@angular/core";
export class NovoQuickNoteModule {
}
NovoQuickNoteModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoQuickNoteModule });
NovoQuickNoteModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoQuickNoteModule_Factory(t) { return new (t || NovoQuickNoteModule)(); }, imports: [[CommonModule, FormsModule, NovoLoadingModule, NovoListModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoQuickNoteModule, { declarations: [QuickNoteElement, QuickNoteResults], imports: [CommonModule, FormsModule, NovoLoadingModule, NovoListModule], exports: [QuickNoteElement, QuickNoteResults] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoQuickNoteModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NovoLoadingModule, NovoListModule],
                declarations: [QuickNoteElement, QuickNoteResults],
                exports: [QuickNoteElement, QuickNoteResults],
                entryComponents: [QuickNoteResults],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tOb3RlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9xdWljay1ub3RlL1F1aWNrTm90ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxNQUFNO0FBQ04sT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7QUFRaEYsTUFBTSxPQUFPLG1CQUFtQjs7dURBQW5CLG1CQUFtQjtxSEFBbkIsbUJBQW1CLGtCQUxyQixDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxDQUFDO3dGQUs1RCxtQkFBbUIsbUJBSmYsZ0JBQWdCLEVBQUUsZ0JBQWdCLGFBRHZDLFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxhQUU1RCxnQkFBZ0IsRUFBRSxnQkFBZ0I7a0RBR2pDLG1CQUFtQjtjQU4vQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLENBQUM7Z0JBQ3ZFLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDO2dCQUNsRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDN0MsZUFBZSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Mb2FkaW5nTW9kdWxlIH0gZnJvbSAnLi8uLi9sb2FkaW5nL0xvYWRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5vdm9MaXN0TW9kdWxlIH0gZnJvbSAnLi8uLi9saXN0L0xpc3QubW9kdWxlJztcbmltcG9ydCB7IFF1aWNrTm90ZUVsZW1lbnQgfSBmcm9tICcuL1F1aWNrTm90ZSc7XG5pbXBvcnQgeyBRdWlja05vdGVSZXN1bHRzIH0gZnJvbSAnLi9leHRyYXMvcXVpY2stbm90ZS1yZXN1bHRzL1F1aWNrTm90ZVJlc3VsdHMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTm92b0xvYWRpbmdNb2R1bGUsIE5vdm9MaXN0TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbUXVpY2tOb3RlRWxlbWVudCwgUXVpY2tOb3RlUmVzdWx0c10sXG4gIGV4cG9ydHM6IFtRdWlja05vdGVFbGVtZW50LCBRdWlja05vdGVSZXN1bHRzXSxcbiAgZW50cnlDb21wb25lbnRzOiBbUXVpY2tOb3RlUmVzdWx0c10sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9RdWlja05vdGVNb2R1bGUge31cbiJdfQ==