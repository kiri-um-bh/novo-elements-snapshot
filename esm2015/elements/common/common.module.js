import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarginDirective, PaddingDirective } from './directives/space.directive';
import { NovoTemplate } from './novo-template/novo-template.directive';
import { NovoCaption } from './typography/caption/caption.component';
import { NovoLabel } from './typography/label/label.component';
import { NovoLink } from './typography/link/link.component';
import { NovoText } from './typography/text/text.component';
import { NovoTitle } from './typography/title/title.component';
import * as i0 from "@angular/core";
export class NovoCommonModule {
}
NovoCommonModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoCommonModule });
NovoCommonModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoCommonModule_Factory(t) { return new (t || NovoCommonModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoCommonModule, { declarations: [NovoTemplate, NovoText, NovoTitle, NovoCaption, NovoLabel, NovoLink, MarginDirective, PaddingDirective], imports: [CommonModule], exports: [NovoTemplate, NovoText, NovoTitle, NovoCaption, NovoLabel, NovoLink, MarginDirective, PaddingDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCommonModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [NovoTemplate, NovoText, NovoTitle, NovoCaption, NovoLabel, NovoLink, MarginDirective, PaddingDirective],
                declarations: [NovoTemplate, NovoText, NovoTitle, NovoCaption, NovoLabel, NovoLink, MarginDirective, PaddingDirective],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NvbW1vbi9jb21tb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDNUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFNL0QsTUFBTSxPQUFPLGdCQUFnQjs7b0RBQWhCLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLGtCQUpsQixDQUFDLFlBQVksQ0FBQzt3RkFJWixnQkFBZ0IsbUJBRlosWUFBWSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixhQUYzRyxZQUFZLGFBQ1osWUFBWSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLGdCQUFnQjtrREFHckcsZ0JBQWdCO2NBTDVCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDakgsWUFBWSxFQUFFLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixDQUFDO2FBQ3ZIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXJnaW5EaXJlY3RpdmUsIFBhZGRpbmdEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvc3BhY2UuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5vdm9UZW1wbGF0ZSB9IGZyb20gJy4vbm92by10ZW1wbGF0ZS9ub3ZvLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOb3ZvQ2FwdGlvbiB9IGZyb20gJy4vdHlwb2dyYXBoeS9jYXB0aW9uL2NhcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5vdm9MYWJlbCB9IGZyb20gJy4vdHlwb2dyYXBoeS9sYWJlbC9sYWJlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm92b0xpbmsgfSBmcm9tICcuL3R5cG9ncmFwaHkvbGluay9saW5rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3ZvVGV4dCB9IGZyb20gJy4vdHlwb2dyYXBoeS90ZXh0L3RleHQuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdm9UaXRsZSB9IGZyb20gJy4vdHlwb2dyYXBoeS90aXRsZS90aXRsZS5jb21wb25lbnQnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtOb3ZvVGVtcGxhdGUsIE5vdm9UZXh0LCBOb3ZvVGl0bGUsIE5vdm9DYXB0aW9uLCBOb3ZvTGFiZWwsIE5vdm9MaW5rLCBNYXJnaW5EaXJlY3RpdmUsIFBhZGRpbmdEaXJlY3RpdmVdLFxuICBkZWNsYXJhdGlvbnM6IFtOb3ZvVGVtcGxhdGUsIE5vdm9UZXh0LCBOb3ZvVGl0bGUsIE5vdm9DYXB0aW9uLCBOb3ZvTGFiZWwsIE5vdm9MaW5rLCBNYXJnaW5EaXJlY3RpdmUsIFBhZGRpbmdEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ29tbW9uTW9kdWxlIHt9XG4iXX0=