/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// APP
import { NovoLoadingModule } from './../loading/Loading.module';
import { NovoListModule } from './../list/List.module';
import { QuickNoteElement } from './QuickNote';
import { QuickNoteResults } from './extras/quick-note-results/QuickNoteResults';
export class NovoQuickNoteModule {
}
NovoQuickNoteModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, NovoLoadingModule, NovoListModule],
                declarations: [QuickNoteElement, QuickNoteResults],
                exports: [QuickNoteElement, QuickNoteResults],
                entryComponents: [QuickNoteResults],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tOb3RlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9xdWljay1ub3RlL1F1aWNrTm90ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFRaEYsTUFBTSxPQUFPLG1CQUFtQjs7O1lBTi9CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsQ0FBQztnQkFDdkUsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ2xELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDO2dCQUM3QyxlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUNwQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xvYWRpbmdNb2R1bGUgfSBmcm9tICcuLy4uL2xvYWRpbmcvTG9hZGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0xpc3RNb2R1bGUgfSBmcm9tICcuLy4uL2xpc3QvTGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgUXVpY2tOb3RlRWxlbWVudCB9IGZyb20gJy4vUXVpY2tOb3RlJztcbmltcG9ydCB7IFF1aWNrTm90ZVJlc3VsdHMgfSBmcm9tICcuL2V4dHJhcy9xdWljay1ub3RlLXJlc3VsdHMvUXVpY2tOb3RlUmVzdWx0cyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOb3ZvTG9hZGluZ01vZHVsZSwgTm92b0xpc3RNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtRdWlja05vdGVFbGVtZW50LCBRdWlja05vdGVSZXN1bHRzXSxcbiAgZXhwb3J0czogW1F1aWNrTm90ZUVsZW1lbnQsIFF1aWNrTm90ZVJlc3VsdHNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtRdWlja05vdGVSZXN1bHRzXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1F1aWNrTm90ZU1vZHVsZSB7fVxuIl19