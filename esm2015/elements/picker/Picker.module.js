// NG2
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// APP
import { NovoOverlayModule } from '../overlay/Overlay.module';
import { NovoListModule } from '../list/List.module';
import { NovoLoadingModule } from '../loading/Loading.module';
import { NovoSwitchModule } from '../switch/Switch.module';
import { NovoPickerElement } from './Picker';
import { PickerResults } from './extras/picker-results/PickerResults';
import { EntityPickerResult, EntityPickerResults } from './extras/entity-picker-results/EntityPickerResults';
import { ChecklistPickerResults } from './extras/checklist-picker-results/ChecklistPickerResults';
import { GroupedMultiPickerResults } from './extras/grouped-multi-picker-results/GroupedMultiPickerResults';
import { SkillsSpecialtyPickerResults } from './extras/skills-picker-results/SkillsSpecialtyPickerResults';
import { DistributionListPickerResults } from './extras/distributionlist-picker-results/DistributionListPickerResults';
import { WorkersCompCodesPickerResults } from './extras/workers-comp-codes-picker-results/WorkersCompCodesPickerResults';
import * as i0 from "@angular/core";
export class NovoPickerModule {
}
NovoPickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoPickerModule });
NovoPickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoPickerModule_Factory(t) { return new (t || NovoPickerModule)(); }, imports: [[CommonModule, FormsModule, NovoLoadingModule, NovoListModule, NovoOverlayModule, NovoSwitchModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoPickerModule, { declarations: [NovoPickerElement,
        PickerResults,
        EntityPickerResult,
        EntityPickerResults,
        ChecklistPickerResults,
        GroupedMultiPickerResults,
        DistributionListPickerResults,
        WorkersCompCodesPickerResults,
        SkillsSpecialtyPickerResults], imports: [CommonModule, FormsModule, NovoLoadingModule, NovoListModule, NovoOverlayModule, NovoSwitchModule], exports: [NovoPickerElement,
        PickerResults,
        EntityPickerResult,
        EntityPickerResults,
        ChecklistPickerResults,
        GroupedMultiPickerResults,
        DistributionListPickerResults,
        WorkersCompCodesPickerResults,
        SkillsSpecialtyPickerResults] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoPickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NovoLoadingModule, NovoListModule, NovoOverlayModule, NovoSwitchModule],
                declarations: [
                    NovoPickerElement,
                    PickerResults,
                    EntityPickerResult,
                    EntityPickerResults,
                    ChecklistPickerResults,
                    GroupedMultiPickerResults,
                    DistributionListPickerResults,
                    WorkersCompCodesPickerResults,
                    SkillsSpecialtyPickerResults,
                ],
                exports: [
                    NovoPickerElement,
                    PickerResults,
                    EntityPickerResult,
                    EntityPickerResults,
                    ChecklistPickerResults,
                    GroupedMultiPickerResults,
                    DistributionListPickerResults,
                    WorkersCompCodesPickerResults,
                    SkillsSpecialtyPickerResults,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvUGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE1BQU07QUFDTixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM3RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNsRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUMzRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUN2SCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQzs7QUEyQnpILE1BQU0sT0FBTyxnQkFBZ0I7O29EQUFoQixnQkFBZ0I7K0dBQWhCLGdCQUFnQixrQkF4QmxCLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUM7d0ZBd0JqRyxnQkFBZ0IsbUJBdEJ6QixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6Qiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLDRCQUE0QixhQVZwQixZQUFZLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsYUFhekcsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3Qiw0QkFBNEI7a0RBR25CLGdCQUFnQjtjQXpCNUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDO2dCQUM1RyxZQUFZLEVBQUU7b0JBQ1osaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQixzQkFBc0I7b0JBQ3RCLHlCQUF5QjtvQkFDekIsNkJBQTZCO29CQUM3Qiw2QkFBNkI7b0JBQzdCLDRCQUE0QjtpQkFDN0I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGlCQUFpQjtvQkFDakIsYUFBYTtvQkFDYixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0Qix5QkFBeUI7b0JBQ3pCLDZCQUE2QjtvQkFDN0IsNkJBQTZCO29CQUM3Qiw0QkFBNEI7aUJBQzdCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9PdmVybGF5TW9kdWxlIH0gZnJvbSAnLi4vb3ZlcmxheS9PdmVybGF5Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTGlzdE1vZHVsZSB9IGZyb20gJy4uL2xpc3QvTGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0xvYWRpbmdNb2R1bGUgfSBmcm9tICcuLi9sb2FkaW5nL0xvYWRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Td2l0Y2hNb2R1bGUgfSBmcm9tICcuLi9zd2l0Y2gvU3dpdGNoLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvUGlja2VyRWxlbWVudCB9IGZyb20gJy4vUGlja2VyJztcbmltcG9ydCB7IFBpY2tlclJlc3VsdHMgfSBmcm9tICcuL2V4dHJhcy9waWNrZXItcmVzdWx0cy9QaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IEVudGl0eVBpY2tlclJlc3VsdCwgRW50aXR5UGlja2VyUmVzdWx0cyB9IGZyb20gJy4vZXh0cmFzL2VudGl0eS1waWNrZXItcmVzdWx0cy9FbnRpdHlQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IENoZWNrbGlzdFBpY2tlclJlc3VsdHMgfSBmcm9tICcuL2V4dHJhcy9jaGVja2xpc3QtcGlja2VyLXJlc3VsdHMvQ2hlY2tsaXN0UGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBHcm91cGVkTXVsdGlQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi9leHRyYXMvZ3JvdXBlZC1tdWx0aS1waWNrZXItcmVzdWx0cy9Hcm91cGVkTXVsdGlQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IFNraWxsc1NwZWNpYWx0eVBpY2tlclJlc3VsdHMgfSBmcm9tICcuL2V4dHJhcy9za2lsbHMtcGlja2VyLXJlc3VsdHMvU2tpbGxzU3BlY2lhbHR5UGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBEaXN0cmlidXRpb25MaXN0UGlja2VyUmVzdWx0cyB9IGZyb20gJy4vZXh0cmFzL2Rpc3RyaWJ1dGlvbmxpc3QtcGlja2VyLXJlc3VsdHMvRGlzdHJpYnV0aW9uTGlzdFBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgV29ya2Vyc0NvbXBDb2Rlc1BpY2tlclJlc3VsdHMgfSBmcm9tICcuL2V4dHJhcy93b3JrZXJzLWNvbXAtY29kZXMtcGlja2VyLXJlc3VsdHMvV29ya2Vyc0NvbXBDb2Rlc1BpY2tlclJlc3VsdHMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTm92b0xvYWRpbmdNb2R1bGUsIE5vdm9MaXN0TW9kdWxlLCBOb3ZvT3ZlcmxheU1vZHVsZSwgTm92b1N3aXRjaE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5vdm9QaWNrZXJFbGVtZW50LFxuICAgIFBpY2tlclJlc3VsdHMsXG4gICAgRW50aXR5UGlja2VyUmVzdWx0LFxuICAgIEVudGl0eVBpY2tlclJlc3VsdHMsXG4gICAgQ2hlY2tsaXN0UGlja2VyUmVzdWx0cyxcbiAgICBHcm91cGVkTXVsdGlQaWNrZXJSZXN1bHRzLFxuICAgIERpc3RyaWJ1dGlvbkxpc3RQaWNrZXJSZXN1bHRzLFxuICAgIFdvcmtlcnNDb21wQ29kZXNQaWNrZXJSZXN1bHRzLFxuICAgIFNraWxsc1NwZWNpYWx0eVBpY2tlclJlc3VsdHMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOb3ZvUGlja2VyRWxlbWVudCxcbiAgICBQaWNrZXJSZXN1bHRzLFxuICAgIEVudGl0eVBpY2tlclJlc3VsdCxcbiAgICBFbnRpdHlQaWNrZXJSZXN1bHRzLFxuICAgIENoZWNrbGlzdFBpY2tlclJlc3VsdHMsXG4gICAgR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cyxcbiAgICBEaXN0cmlidXRpb25MaXN0UGlja2VyUmVzdWx0cyxcbiAgICBXb3JrZXJzQ29tcENvZGVzUGlja2VyUmVzdWx0cyxcbiAgICBTa2lsbHNTcGVjaWFsdHlQaWNrZXJSZXN1bHRzLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvUGlja2VyTW9kdWxlIHsgfVxuIl19