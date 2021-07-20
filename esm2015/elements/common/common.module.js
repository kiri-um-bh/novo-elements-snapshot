import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackgroundColorDirective } from './directives/bgc.directive';
import { BorderDirective } from './directives/border.directive';
import { TextColorDirective } from './directives/color.directive';
import { MarginDirective, PaddingDirective } from './directives/space.directive';
import { NovoTemplate } from './novo-template/novo-template.directive';
import { NovoOptionModule } from './option';
import { NovoCaption } from './typography/caption/caption.component';
import { NovoLabel } from './typography/label/label.component';
import { NovoLink } from './typography/link/link.component';
import { NovoText } from './typography/text/text.component';
import { NovoTitle } from './typography/title/title.component';
import * as i0 from "@angular/core";
export class NovoCommonModule {
}
NovoCommonModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoCommonModule });
NovoCommonModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoCommonModule_Factory(t) { return new (t || NovoCommonModule)(); }, imports: [[CommonModule, NovoOptionModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoCommonModule, { declarations: [NovoTemplate,
        NovoText,
        NovoTitle,
        NovoCaption,
        NovoLabel,
        NovoLink,
        MarginDirective,
        PaddingDirective,
        BackgroundColorDirective,
        TextColorDirective,
        BorderDirective], imports: [CommonModule, NovoOptionModule], exports: [NovoTemplate,
        NovoText,
        NovoTitle,
        NovoCaption,
        NovoLabel,
        NovoLink,
        MarginDirective,
        PaddingDirective,
        BackgroundColorDirective,
        TextColorDirective,
        BorderDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCommonModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NovoOptionModule],
                exports: [
                    NovoTemplate,
                    NovoText,
                    NovoTitle,
                    NovoCaption,
                    NovoLabel,
                    NovoLink,
                    MarginDirective,
                    PaddingDirective,
                    BackgroundColorDirective,
                    TextColorDirective,
                    BorderDirective,
                ],
                declarations: [
                    NovoTemplate,
                    NovoText,
                    NovoTitle,
                    NovoCaption,
                    NovoLabel,
                    NovoLink,
                    MarginDirective,
                    PaddingDirective,
                    BackgroundColorDirective,
                    TextColorDirective,
                    BorderDirective,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jb21tb24vY29tbW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDNUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDNUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7QUE4Qi9ELE1BQU0sT0FBTyxnQkFBZ0I7O29EQUFoQixnQkFBZ0I7K0dBQWhCLGdCQUFnQixrQkE1QmxCLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO3dGQTRCOUIsZ0JBQWdCLG1CQWJ6QixZQUFZO1FBQ1osUUFBUTtRQUNSLFNBQVM7UUFDVCxXQUFXO1FBQ1gsU0FBUztRQUNULFFBQVE7UUFDUixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIsZUFBZSxhQXpCUCxZQUFZLEVBQUUsZ0JBQWdCLGFBRXRDLFlBQVk7UUFDWixRQUFRO1FBQ1IsU0FBUztRQUNULFdBQVc7UUFDWCxTQUFTO1FBQ1QsUUFBUTtRQUNSLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsd0JBQXdCO1FBQ3hCLGtCQUFrQjtRQUNsQixlQUFlO2tEQWdCTixnQkFBZ0I7Y0E3QjVCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3pDLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFFBQVE7b0JBQ1IsU0FBUztvQkFDVCxXQUFXO29CQUNYLFNBQVM7b0JBQ1QsUUFBUTtvQkFDUixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsd0JBQXdCO29CQUN4QixrQkFBa0I7b0JBQ2xCLGVBQWU7aUJBQ2hCO2dCQUNELFlBQVksRUFBRTtvQkFDWixZQUFZO29CQUNaLFFBQVE7b0JBQ1IsU0FBUztvQkFDVCxXQUFXO29CQUNYLFNBQVM7b0JBQ1QsUUFBUTtvQkFDUixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsd0JBQXdCO29CQUN4QixrQkFBa0I7b0JBQ2xCLGVBQWU7aUJBQ2hCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhY2tncm91bmRDb2xvckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9iZ2MuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJvcmRlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9ib3JkZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRleHRDb2xvckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jb2xvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWFyZ2luRGlyZWN0aXZlLCBQYWRkaW5nRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3NwYWNlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOb3ZvVGVtcGxhdGUgfSBmcm9tICcuL25vdm8tdGVtcGxhdGUvbm92by10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTm92b09wdGlvbk1vZHVsZSB9IGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCB7IE5vdm9DYXB0aW9uIH0gZnJvbSAnLi90eXBvZ3JhcGh5L2NhcHRpb24vY2FwdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b0xhYmVsIH0gZnJvbSAnLi90eXBvZ3JhcGh5L2xhYmVsL2xhYmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3ZvTGluayB9IGZyb20gJy4vdHlwb2dyYXBoeS9saW5rL2xpbmsuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdm9UZXh0IH0gZnJvbSAnLi90eXBvZ3JhcGh5L3RleHQvdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b1RpdGxlIH0gZnJvbSAnLi90eXBvZ3JhcGh5L3RpdGxlL3RpdGxlLmNvbXBvbmVudCc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOb3ZvT3B0aW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIE5vdm9UZW1wbGF0ZSxcbiAgICBOb3ZvVGV4dCxcbiAgICBOb3ZvVGl0bGUsXG4gICAgTm92b0NhcHRpb24sXG4gICAgTm92b0xhYmVsLFxuICAgIE5vdm9MaW5rLFxuICAgIE1hcmdpbkRpcmVjdGl2ZSxcbiAgICBQYWRkaW5nRGlyZWN0aXZlLFxuICAgIEJhY2tncm91bmRDb2xvckRpcmVjdGl2ZSxcbiAgICBUZXh0Q29sb3JEaXJlY3RpdmUsXG4gICAgQm9yZGVyRGlyZWN0aXZlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOb3ZvVGVtcGxhdGUsXG4gICAgTm92b1RleHQsXG4gICAgTm92b1RpdGxlLFxuICAgIE5vdm9DYXB0aW9uLFxuICAgIE5vdm9MYWJlbCxcbiAgICBOb3ZvTGluayxcbiAgICBNYXJnaW5EaXJlY3RpdmUsXG4gICAgUGFkZGluZ0RpcmVjdGl2ZSxcbiAgICBCYWNrZ3JvdW5kQ29sb3JEaXJlY3RpdmUsXG4gICAgVGV4dENvbG9yRGlyZWN0aXZlLFxuICAgIEJvcmRlckRpcmVjdGl2ZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NvbW1vbk1vZHVsZSB7fVxuIl19