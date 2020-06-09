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
var NovoQuickNoteModule = /** @class */ (function () {
    function NovoQuickNoteModule() {
    }
    NovoQuickNoteModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoQuickNoteModule });
    NovoQuickNoteModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoQuickNoteModule_Factory(t) { return new (t || NovoQuickNoteModule)(); }, imports: [[CommonModule, FormsModule, NovoLoadingModule, NovoListModule]] });
    return NovoQuickNoteModule;
}());
export { NovoQuickNoteModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tOb3RlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9xdWljay1ub3RlL1F1aWNrTm90ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxNQUFNO0FBQ04sT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7QUFFaEY7SUFBQTtLQU1tQzsyREFBdEIsbUJBQW1CO3lIQUFuQixtQkFBbUIsa0JBTHJCLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLENBQUM7OEJBWHpFO0NBZ0JtQyxBQU5uQyxJQU1tQztTQUF0QixtQkFBbUI7d0ZBQW5CLG1CQUFtQixtQkFKZixnQkFBZ0IsRUFBRSxnQkFBZ0IsYUFEdkMsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLGFBRTVELGdCQUFnQixFQUFFLGdCQUFnQjtrREFHakMsbUJBQW1CO2NBTi9CLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsQ0FBQztnQkFDdkUsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ2xELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDO2dCQUM3QyxlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUNwQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xvYWRpbmdNb2R1bGUgfSBmcm9tICcuLy4uL2xvYWRpbmcvTG9hZGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0xpc3RNb2R1bGUgfSBmcm9tICcuLy4uL2xpc3QvTGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgUXVpY2tOb3RlRWxlbWVudCB9IGZyb20gJy4vUXVpY2tOb3RlJztcbmltcG9ydCB7IFF1aWNrTm90ZVJlc3VsdHMgfSBmcm9tICcuL2V4dHJhcy9xdWljay1ub3RlLXJlc3VsdHMvUXVpY2tOb3RlUmVzdWx0cyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOb3ZvTG9hZGluZ01vZHVsZSwgTm92b0xpc3RNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtRdWlja05vdGVFbGVtZW50LCBRdWlja05vdGVSZXN1bHRzXSxcbiAgZXhwb3J0czogW1F1aWNrTm90ZUVsZW1lbnQsIFF1aWNrTm90ZVJlc3VsdHNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtRdWlja05vdGVSZXN1bHRzXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1F1aWNrTm90ZU1vZHVsZSB7fVxuIl19