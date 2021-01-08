// NG2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NovoListModule } from './../list/List.module';
// APP
import { NovoLoadingModule } from './../loading/Loading.module';
import { QuickNoteResults } from './extras/quick-note-results/QuickNoteResults';
import { QuickNoteElement } from './QuickNote';
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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tOb3RlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3F1aWNrLW5vdGUvUXVpY2tOb3RlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxNQUFNO0FBQ04sT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDOztBQU8vQyxNQUFNLE9BQU8sbUJBQW1COzt1REFBbkIsbUJBQW1CO3FIQUFuQixtQkFBbUIsa0JBSnJCLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLENBQUM7d0ZBSTVELG1CQUFtQixtQkFIZixnQkFBZ0IsRUFBRSxnQkFBZ0IsYUFEdkMsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLGFBRTVELGdCQUFnQixFQUFFLGdCQUFnQjtrREFFakMsbUJBQW1CO2NBTC9CLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsQ0FBQztnQkFDdkUsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ2xELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDO2FBQzlDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTm92b0xpc3RNb2R1bGUgfSBmcm9tICcuLy4uL2xpc3QvTGlzdC5tb2R1bGUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTG9hZGluZ01vZHVsZSB9IGZyb20gJy4vLi4vbG9hZGluZy9Mb2FkaW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBRdWlja05vdGVSZXN1bHRzIH0gZnJvbSAnLi9leHRyYXMvcXVpY2stbm90ZS1yZXN1bHRzL1F1aWNrTm90ZVJlc3VsdHMnO1xuaW1wb3J0IHsgUXVpY2tOb3RlRWxlbWVudCB9IGZyb20gJy4vUXVpY2tOb3RlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE5vdm9Mb2FkaW5nTW9kdWxlLCBOb3ZvTGlzdE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1F1aWNrTm90ZUVsZW1lbnQsIFF1aWNrTm90ZVJlc3VsdHNdLFxuICBleHBvcnRzOiBbUXVpY2tOb3RlRWxlbWVudCwgUXVpY2tOb3RlUmVzdWx0c10sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9RdWlja05vdGVNb2R1bGUge31cbiJdfQ==