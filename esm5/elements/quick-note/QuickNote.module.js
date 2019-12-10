/**
 * @fileoverview added by tsickle
 * Generated from: elements/quick-note/QuickNote.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tOb3RlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9xdWljay1ub3RlL1F1aWNrTm90ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUUvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRWhGO0lBQUE7SUFNa0MsQ0FBQzs7Z0JBTmxDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsQ0FBQztvQkFDdkUsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ2xELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDO29CQUM3QyxlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDcEM7O0lBQ2lDLDBCQUFDO0NBQUEsQUFObkMsSUFNbUM7U0FBdEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTG9hZGluZ01vZHVsZSB9IGZyb20gJy4vLi4vbG9hZGluZy9Mb2FkaW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTGlzdE1vZHVsZSB9IGZyb20gJy4vLi4vbGlzdC9MaXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBRdWlja05vdGVFbGVtZW50IH0gZnJvbSAnLi9RdWlja05vdGUnO1xuaW1wb3J0IHsgUXVpY2tOb3RlUmVzdWx0cyB9IGZyb20gJy4vZXh0cmFzL3F1aWNrLW5vdGUtcmVzdWx0cy9RdWlja05vdGVSZXN1bHRzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE5vdm9Mb2FkaW5nTW9kdWxlLCBOb3ZvTGlzdE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1F1aWNrTm90ZUVsZW1lbnQsIFF1aWNrTm90ZVJlc3VsdHNdLFxuICBleHBvcnRzOiBbUXVpY2tOb3RlRWxlbWVudCwgUXVpY2tOb3RlUmVzdWx0c10sXG4gIGVudHJ5Q29tcG9uZW50czogW1F1aWNrTm90ZVJlc3VsdHNdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvUXVpY2tOb3RlTW9kdWxlIHt9XG4iXX0=