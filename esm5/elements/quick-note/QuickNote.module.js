/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
var NovoQuickNoteModule = /** @class */ (function () {
    function NovoQuickNoteModule() {
    }
    NovoQuickNoteModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, NovoLoadingModule, NovoListModule],
                    declarations: [QuickNoteElement, QuickNoteResults],
                    exports: [QuickNoteElement, QuickNoteResults],
                    entryComponents: [QuickNoteResults],
                },] }
    ];
    return NovoQuickNoteModule;
}());
export { NovoQuickNoteModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tOb3RlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9xdWljay1ub3RlL1F1aWNrTm90ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFaEY7SUFBQTtJQU1rQyxDQUFDOztnQkFObEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxDQUFDO29CQUN2RSxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQztvQkFDbEQsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUM7b0JBQzdDLGVBQWUsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUNwQzs7SUFDaUMsMEJBQUM7Q0FBQSxBQU5uQyxJQU1tQztTQUF0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Mb2FkaW5nTW9kdWxlIH0gZnJvbSAnLi8uLi9sb2FkaW5nL0xvYWRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5vdm9MaXN0TW9kdWxlIH0gZnJvbSAnLi8uLi9saXN0L0xpc3QubW9kdWxlJztcbmltcG9ydCB7IFF1aWNrTm90ZUVsZW1lbnQgfSBmcm9tICcuL1F1aWNrTm90ZSc7XG5pbXBvcnQgeyBRdWlja05vdGVSZXN1bHRzIH0gZnJvbSAnLi9leHRyYXMvcXVpY2stbm90ZS1yZXN1bHRzL1F1aWNrTm90ZVJlc3VsdHMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTm92b0xvYWRpbmdNb2R1bGUsIE5vdm9MaXN0TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbUXVpY2tOb3RlRWxlbWVudCwgUXVpY2tOb3RlUmVzdWx0c10sXG4gIGV4cG9ydHM6IFtRdWlja05vdGVFbGVtZW50LCBRdWlja05vdGVSZXN1bHRzXSxcbiAgZW50cnlDb21wb25lbnRzOiBbUXVpY2tOb3RlUmVzdWx0c10sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9RdWlja05vdGVNb2R1bGUge31cbiJdfQ==