// NG2
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NovoLabelService } from '../../services/novo-label-service';
import { NovoButtonModule } from '../button/Button.module';
import { NovoDropdownModule } from '../dropdown/Dropdown.module';
import { NovoFormExtrasModule } from '../form/extras/FormExtras.module';
import { NovoListModule } from '../list/List.module';
import { NovoTabModule } from '../tabs/Tabs.module';
// APP
import { NovoTabbedGroupPickerElement } from './TabbedGroupPicker';
import * as i0 from "@angular/core";
export class NovoTabbedGroupPickerModule {
}
NovoTabbedGroupPickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoTabbedGroupPickerModule });
NovoTabbedGroupPickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoTabbedGroupPickerModule_Factory(t) { return new (t || NovoTabbedGroupPickerModule)(); }, providers: [NovoLabelService], imports: [[
            CommonModule,
            FormsModule,
            ScrollingModule,
            NovoTabModule,
            NovoListModule,
            NovoFormExtrasModule,
            NovoButtonModule,
            NovoDropdownModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoTabbedGroupPickerModule, { declarations: [NovoTabbedGroupPickerElement], imports: [CommonModule,
        FormsModule,
        ScrollingModule,
        NovoTabModule,
        NovoListModule,
        NovoFormExtrasModule,
        NovoButtonModule,
        NovoDropdownModule], exports: [NovoTabbedGroupPickerElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTabbedGroupPickerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ScrollingModule,
                    NovoTabModule,
                    NovoListModule,
                    NovoFormExtrasModule,
                    NovoButtonModule,
                    NovoDropdownModule,
                ],
                providers: [NovoLabelService],
                declarations: [NovoTabbedGroupPickerElement],
                exports: [NovoTabbedGroupPickerElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiYmVkR3JvdXBQaWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFiYmVkLWdyb3VwLXBpY2tlci9UYWJiZWRHcm91cFBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxNQUFNO0FBQ04sT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBaUJuRSxNQUFNLE9BQU8sMkJBQTJCOzsrREFBM0IsMkJBQTJCO3FJQUEzQiwyQkFBMkIsbUJBSjNCLENBQUMsZ0JBQWdCLENBQUMsWUFWcEI7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLGVBQWU7WUFDZixhQUFhO1lBQ2IsY0FBYztZQUNkLG9CQUFvQjtZQUNwQixnQkFBZ0I7WUFDaEIsa0JBQWtCO1NBQ25CO3dGQUtVLDJCQUEyQixtQkFIdkIsNEJBQTRCLGFBVnpDLFlBQVk7UUFDWixXQUFXO1FBQ1gsZUFBZTtRQUNmLGFBQWE7UUFDYixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLGdCQUFnQjtRQUNoQixrQkFBa0IsYUFJViw0QkFBNEI7a0RBRTNCLDJCQUEyQjtjQWZ2QyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxlQUFlO29CQUNmLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLGdCQUFnQjtvQkFDaEIsa0JBQWtCO2lCQUNuQjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDN0IsWUFBWSxFQUFFLENBQUMsNEJBQTRCLENBQUM7Z0JBQzVDLE9BQU8sRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBTY3JvbGxpbmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vQnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuLi9kcm9wZG93bi9Ecm9wZG93bi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0Zvcm1FeHRyYXNNb2R1bGUgfSBmcm9tICcuLi9mb3JtL2V4dHJhcy9Gb3JtRXh0cmFzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTGlzdE1vZHVsZSB9IGZyb20gJy4uL2xpc3QvTGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1RhYk1vZHVsZSB9IGZyb20gJy4uL3RhYnMvVGFicy5tb2R1bGUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvVGFiYmVkR3JvdXBQaWNrZXJFbGVtZW50IH0gZnJvbSAnLi9UYWJiZWRHcm91cFBpY2tlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgU2Nyb2xsaW5nTW9kdWxlLFxuICAgIE5vdm9UYWJNb2R1bGUsXG4gICAgTm92b0xpc3RNb2R1bGUsXG4gICAgTm92b0Zvcm1FeHRyYXNNb2R1bGUsXG4gICAgTm92b0J1dHRvbk1vZHVsZSxcbiAgICBOb3ZvRHJvcGRvd25Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW05vdm9MYWJlbFNlcnZpY2VdLFxuICBkZWNsYXJhdGlvbnM6IFtOb3ZvVGFiYmVkR3JvdXBQaWNrZXJFbGVtZW50XSxcbiAgZXhwb3J0czogW05vdm9UYWJiZWRHcm91cFBpY2tlckVsZW1lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGFiYmVkR3JvdXBQaWNrZXJNb2R1bGUge31cbiJdfQ==