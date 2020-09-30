/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// APP
import { NovoListElement, NovoListItemElement, NovoItemAvatarElement, NovoItemTitleElement, NovoItemContentElement, NovoItemEndElement, NovoItemHeaderElement, NovoItemDateElement, } from './List';
export class NovoListModule {
}
NovoListModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    NovoListElement,
                    NovoListItemElement,
                    NovoItemAvatarElement,
                    NovoItemTitleElement,
                    NovoItemContentElement,
                    NovoItemEndElement,
                    NovoItemHeaderElement,
                    NovoItemDateElement,
                ],
                exports: [
                    NovoListElement,
                    NovoListItemElement,
                    NovoItemAvatarElement,
                    NovoItemTitleElement,
                    NovoItemHeaderElement,
                    NovoItemContentElement,
                    NovoItemEndElement,
                    NovoItemDateElement,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbGlzdC9MaXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUUvQyxPQUFPLEVBQ0wsZUFBZSxFQUNmLG1CQUFtQixFQUNuQixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLHNCQUFzQixFQUN0QixrQkFBa0IsRUFDbEIscUJBQXFCLEVBQ3JCLG1CQUFtQixHQUNwQixNQUFNLFFBQVEsQ0FBQztBQXlCaEIsTUFBTSxPQUFPLGNBQWM7OztZQXZCMUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFO29CQUNaLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFDcEIsc0JBQXNCO29CQUN0QixrQkFBa0I7b0JBQ2xCLHFCQUFxQjtvQkFDckIsbUJBQW1CO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLHFCQUFxQjtvQkFDckIsb0JBQW9CO29CQUNwQixxQkFBcUI7b0JBQ3JCLHNCQUFzQjtvQkFDdEIsa0JBQWtCO29CQUNsQixtQkFBbUI7aUJBQ3BCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gQVBQXG5pbXBvcnQge1xuICBOb3ZvTGlzdEVsZW1lbnQsXG4gIE5vdm9MaXN0SXRlbUVsZW1lbnQsXG4gIE5vdm9JdGVtQXZhdGFyRWxlbWVudCxcbiAgTm92b0l0ZW1UaXRsZUVsZW1lbnQsXG4gIE5vdm9JdGVtQ29udGVudEVsZW1lbnQsXG4gIE5vdm9JdGVtRW5kRWxlbWVudCxcbiAgTm92b0l0ZW1IZWFkZXJFbGVtZW50LFxuICBOb3ZvSXRlbURhdGVFbGVtZW50LFxufSBmcm9tICcuL0xpc3QnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTm92b0xpc3RFbGVtZW50LFxuICAgIE5vdm9MaXN0SXRlbUVsZW1lbnQsXG4gICAgTm92b0l0ZW1BdmF0YXJFbGVtZW50LFxuICAgIE5vdm9JdGVtVGl0bGVFbGVtZW50LFxuICAgIE5vdm9JdGVtQ29udGVudEVsZW1lbnQsXG4gICAgTm92b0l0ZW1FbmRFbGVtZW50LFxuICAgIE5vdm9JdGVtSGVhZGVyRWxlbWVudCxcbiAgICBOb3ZvSXRlbURhdGVFbGVtZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTm92b0xpc3RFbGVtZW50LFxuICAgIE5vdm9MaXN0SXRlbUVsZW1lbnQsXG4gICAgTm92b0l0ZW1BdmF0YXJFbGVtZW50LFxuICAgIE5vdm9JdGVtVGl0bGVFbGVtZW50LFxuICAgIE5vdm9JdGVtSGVhZGVyRWxlbWVudCxcbiAgICBOb3ZvSXRlbUNvbnRlbnRFbGVtZW50LFxuICAgIE5vdm9JdGVtRW5kRWxlbWVudCxcbiAgICBOb3ZvSXRlbURhdGVFbGVtZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTGlzdE1vZHVsZSB7fVxuIl19