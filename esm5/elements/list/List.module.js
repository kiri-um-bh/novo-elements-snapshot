/**
 * @fileoverview added by tsickle
 * Generated from: elements/list/List.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// APP
import { NovoListElement, NovoListItemElement, NovoItemAvatarElement, NovoItemTitleElement, NovoItemContentElement, NovoItemEndElement, NovoItemHeaderElement, NovoItemDateElement, } from './List';
var NovoListModule = /** @class */ (function () {
    function NovoListModule() {
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
    return NovoListModule;
}());
export { NovoListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbGlzdC9MaXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFL0MsT0FBTyxFQUNMLGVBQWUsRUFDZixtQkFBbUIsRUFDbkIscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUNwQixzQkFBc0IsRUFDdEIsa0JBQWtCLEVBQ2xCLHFCQUFxQixFQUNyQixtQkFBbUIsR0FDcEIsTUFBTSxRQUFRLENBQUM7QUFFaEI7SUFBQTtJQXVCNkIsQ0FBQzs7Z0JBdkI3QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUU7d0JBQ1osZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixzQkFBc0I7d0JBQ3RCLGtCQUFrQjt3QkFDbEIscUJBQXFCO3dCQUNyQixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0QixrQkFBa0I7d0JBQ2xCLG1CQUFtQjtxQkFDcEI7aUJBQ0Y7O0lBQzRCLHFCQUFDO0NBQUEsQUF2QjlCLElBdUI4QjtTQUFqQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIEFQUFxuaW1wb3J0IHtcbiAgTm92b0xpc3RFbGVtZW50LFxuICBOb3ZvTGlzdEl0ZW1FbGVtZW50LFxuICBOb3ZvSXRlbUF2YXRhckVsZW1lbnQsXG4gIE5vdm9JdGVtVGl0bGVFbGVtZW50LFxuICBOb3ZvSXRlbUNvbnRlbnRFbGVtZW50LFxuICBOb3ZvSXRlbUVuZEVsZW1lbnQsXG4gIE5vdm9JdGVtSGVhZGVyRWxlbWVudCxcbiAgTm92b0l0ZW1EYXRlRWxlbWVudCxcbn0gZnJvbSAnLi9MaXN0JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5vdm9MaXN0RWxlbWVudCxcbiAgICBOb3ZvTGlzdEl0ZW1FbGVtZW50LFxuICAgIE5vdm9JdGVtQXZhdGFyRWxlbWVudCxcbiAgICBOb3ZvSXRlbVRpdGxlRWxlbWVudCxcbiAgICBOb3ZvSXRlbUNvbnRlbnRFbGVtZW50LFxuICAgIE5vdm9JdGVtRW5kRWxlbWVudCxcbiAgICBOb3ZvSXRlbUhlYWRlckVsZW1lbnQsXG4gICAgTm92b0l0ZW1EYXRlRWxlbWVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5vdm9MaXN0RWxlbWVudCxcbiAgICBOb3ZvTGlzdEl0ZW1FbGVtZW50LFxuICAgIE5vdm9JdGVtQXZhdGFyRWxlbWVudCxcbiAgICBOb3ZvSXRlbVRpdGxlRWxlbWVudCxcbiAgICBOb3ZvSXRlbUhlYWRlckVsZW1lbnQsXG4gICAgTm92b0l0ZW1Db250ZW50RWxlbWVudCxcbiAgICBOb3ZvSXRlbUVuZEVsZW1lbnQsXG4gICAgTm92b0l0ZW1EYXRlRWxlbWVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0xpc3RNb2R1bGUge31cbiJdfQ==