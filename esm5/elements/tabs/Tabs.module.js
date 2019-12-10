/**
 * @fileoverview added by tsickle
 * Generated from: elements/tabs/Tabs.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// APP
import { NovoNavElement, NovoTabElement, NovoTabButtonElement, NovoTabLinkElement, NovoNavOutletElement, NovoNavContentElement, NovoNavHeaderElement, } from './Tabs';
var NovoTabModule = /** @class */ (function () {
    function NovoTabModule() {
    }
    NovoTabModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [
                        NovoNavElement,
                        NovoTabElement,
                        NovoTabButtonElement,
                        NovoTabLinkElement,
                        NovoNavOutletElement,
                        NovoNavContentElement,
                        NovoNavHeaderElement,
                    ],
                    exports: [
                        NovoNavElement,
                        NovoTabElement,
                        NovoTabButtonElement,
                        NovoTabLinkElement,
                        NovoNavOutletElement,
                        NovoNavContentElement,
                        NovoNavHeaderElement,
                    ],
                },] }
    ];
    return NovoTabModule;
}());
export { NovoTabModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFicy9UYWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFL0MsT0FBTyxFQUNMLGNBQWMsRUFDZCxjQUFjLEVBQ2Qsb0JBQW9CLEVBQ3BCLGtCQUFrQixFQUNsQixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLG9CQUFvQixHQUNyQixNQUFNLFFBQVEsQ0FBQztBQUVoQjtJQUFBO0lBcUI0QixDQUFDOztnQkFyQjVCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDWixjQUFjO3dCQUNkLGNBQWM7d0JBQ2Qsb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLG9CQUFvQjt3QkFDcEIscUJBQXFCO3dCQUNyQixvQkFBb0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2Qsb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLG9CQUFvQjt3QkFDcEIscUJBQXFCO3dCQUNyQixvQkFBb0I7cUJBQ3JCO2lCQUNGOztJQUMyQixvQkFBQztDQUFBLEFBckI3QixJQXFCNkI7U0FBaEIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBBUFBcbmltcG9ydCB7XG4gIE5vdm9OYXZFbGVtZW50LFxuICBOb3ZvVGFiRWxlbWVudCxcbiAgTm92b1RhYkJ1dHRvbkVsZW1lbnQsXG4gIE5vdm9UYWJMaW5rRWxlbWVudCxcbiAgTm92b05hdk91dGxldEVsZW1lbnQsXG4gIE5vdm9OYXZDb250ZW50RWxlbWVudCxcbiAgTm92b05hdkhlYWRlckVsZW1lbnQsXG59IGZyb20gJy4vVGFicyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOb3ZvTmF2RWxlbWVudCxcbiAgICBOb3ZvVGFiRWxlbWVudCxcbiAgICBOb3ZvVGFiQnV0dG9uRWxlbWVudCxcbiAgICBOb3ZvVGFiTGlua0VsZW1lbnQsXG4gICAgTm92b05hdk91dGxldEVsZW1lbnQsXG4gICAgTm92b05hdkNvbnRlbnRFbGVtZW50LFxuICAgIE5vdm9OYXZIZWFkZXJFbGVtZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTm92b05hdkVsZW1lbnQsXG4gICAgTm92b1RhYkVsZW1lbnQsXG4gICAgTm92b1RhYkJ1dHRvbkVsZW1lbnQsXG4gICAgTm92b1RhYkxpbmtFbGVtZW50LFxuICAgIE5vdm9OYXZPdXRsZXRFbGVtZW50LFxuICAgIE5vdm9OYXZDb250ZW50RWxlbWVudCxcbiAgICBOb3ZvTmF2SGVhZGVyRWxlbWVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYk1vZHVsZSB7fVxuIl19