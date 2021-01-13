// NG2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// APP
import { NovoItemAvatarElement, NovoItemContentElement, NovoItemDateElement, NovoItemEndElement, NovoItemHeaderElement, NovoItemTitleElement, NovoListElement, NovoListItemElement, } from './List';
import * as i0 from "@angular/core";
export class NovoListModule {
}
NovoListModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoListModule });
NovoListModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoListModule_Factory(t) { return new (t || NovoListModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoListModule, { declarations: [NovoListElement,
        NovoListItemElement,
        NovoItemAvatarElement,
        NovoItemTitleElement,
        NovoItemContentElement,
        NovoItemEndElement,
        NovoItemHeaderElement,
        NovoItemDateElement], imports: [CommonModule], exports: [NovoListElement,
        NovoListItemElement,
        NovoItemAvatarElement,
        NovoItemTitleElement,
        NovoItemHeaderElement,
        NovoItemContentElement,
        NovoItemEndElement,
        NovoItemDateElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoListModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9saXN0L0xpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxNQUFNO0FBQ04sT0FBTyxFQUNMLHFCQUFxQixFQUNyQixzQkFBc0IsRUFDdEIsbUJBQW1CLEVBQ25CLGtCQUFrQixFQUNsQixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLGVBQWUsRUFDZixtQkFBbUIsR0FDcEIsTUFBTSxRQUFRLENBQUM7O0FBeUJoQixNQUFNLE9BQU8sY0FBYzs7a0RBQWQsY0FBYzsyR0FBZCxjQUFjLGtCQXRCaEIsQ0FBQyxZQUFZLENBQUM7d0ZBc0JaLGNBQWMsbUJBcEJ2QixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsbUJBQW1CLGFBVFgsWUFBWSxhQVlwQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixrQkFBa0I7UUFDbEIsbUJBQW1CO2tEQUdWLGNBQWM7Y0F2QjFCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRTtvQkFDWixlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIscUJBQXFCO29CQUNyQixvQkFBb0I7b0JBQ3BCLHNCQUFzQjtvQkFDdEIsa0JBQWtCO29CQUNsQixxQkFBcUI7b0JBQ3JCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFDcEIscUJBQXFCO29CQUNyQixzQkFBc0I7b0JBQ3RCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO2lCQUNwQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHtcbiAgTm92b0l0ZW1BdmF0YXJFbGVtZW50LFxuICBOb3ZvSXRlbUNvbnRlbnRFbGVtZW50LFxuICBOb3ZvSXRlbURhdGVFbGVtZW50LFxuICBOb3ZvSXRlbUVuZEVsZW1lbnQsXG4gIE5vdm9JdGVtSGVhZGVyRWxlbWVudCxcbiAgTm92b0l0ZW1UaXRsZUVsZW1lbnQsXG4gIE5vdm9MaXN0RWxlbWVudCxcbiAgTm92b0xpc3RJdGVtRWxlbWVudCxcbn0gZnJvbSAnLi9MaXN0JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5vdm9MaXN0RWxlbWVudCxcbiAgICBOb3ZvTGlzdEl0ZW1FbGVtZW50LFxuICAgIE5vdm9JdGVtQXZhdGFyRWxlbWVudCxcbiAgICBOb3ZvSXRlbVRpdGxlRWxlbWVudCxcbiAgICBOb3ZvSXRlbUNvbnRlbnRFbGVtZW50LFxuICAgIE5vdm9JdGVtRW5kRWxlbWVudCxcbiAgICBOb3ZvSXRlbUhlYWRlckVsZW1lbnQsXG4gICAgTm92b0l0ZW1EYXRlRWxlbWVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5vdm9MaXN0RWxlbWVudCxcbiAgICBOb3ZvTGlzdEl0ZW1FbGVtZW50LFxuICAgIE5vdm9JdGVtQXZhdGFyRWxlbWVudCxcbiAgICBOb3ZvSXRlbVRpdGxlRWxlbWVudCxcbiAgICBOb3ZvSXRlbUhlYWRlckVsZW1lbnQsXG4gICAgTm92b0l0ZW1Db250ZW50RWxlbWVudCxcbiAgICBOb3ZvSXRlbUVuZEVsZW1lbnQsXG4gICAgTm92b0l0ZW1EYXRlRWxlbWVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0xpc3RNb2R1bGUge31cbiJdfQ==