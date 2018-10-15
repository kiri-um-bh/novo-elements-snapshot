/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFicy9UYWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUUvQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsa0JBQWtCLEVBQ2xCLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsb0JBQW9CLEdBQ3JCLE1BQU0sUUFBUSxDQUFDO0FBRWhCO0lBQUE7SUFxQjRCLENBQUM7O2dCQXJCNUIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFO3dCQUNaLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixxQkFBcUI7d0JBQ3JCLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixxQkFBcUI7d0JBQ3JCLG9CQUFvQjtxQkFDckI7aUJBQ0Y7O0lBQzJCLG9CQUFDO0NBQUEsQUFyQjdCLElBcUI2QjtTQUFoQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIEFQUFxuaW1wb3J0IHtcbiAgTm92b05hdkVsZW1lbnQsXG4gIE5vdm9UYWJFbGVtZW50LFxuICBOb3ZvVGFiQnV0dG9uRWxlbWVudCxcbiAgTm92b1RhYkxpbmtFbGVtZW50LFxuICBOb3ZvTmF2T3V0bGV0RWxlbWVudCxcbiAgTm92b05hdkNvbnRlbnRFbGVtZW50LFxuICBOb3ZvTmF2SGVhZGVyRWxlbWVudCxcbn0gZnJvbSAnLi9UYWJzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5vdm9OYXZFbGVtZW50LFxuICAgIE5vdm9UYWJFbGVtZW50LFxuICAgIE5vdm9UYWJCdXR0b25FbGVtZW50LFxuICAgIE5vdm9UYWJMaW5rRWxlbWVudCxcbiAgICBOb3ZvTmF2T3V0bGV0RWxlbWVudCxcbiAgICBOb3ZvTmF2Q29udGVudEVsZW1lbnQsXG4gICAgTm92b05hdkhlYWRlckVsZW1lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOb3ZvTmF2RWxlbWVudCxcbiAgICBOb3ZvVGFiRWxlbWVudCxcbiAgICBOb3ZvVGFiQnV0dG9uRWxlbWVudCxcbiAgICBOb3ZvVGFiTGlua0VsZW1lbnQsXG4gICAgTm92b05hdk91dGxldEVsZW1lbnQsXG4gICAgTm92b05hdkNvbnRlbnRFbGVtZW50LFxuICAgIE5vdm9OYXZIZWFkZXJFbGVtZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGFiTW9kdWxlIHt9XG4iXX0=