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
import { MixedMultiPickerResults } from './extras/mixed-multi-picker-results/MixedMultiPickerResults';
import { SkillsSpecialtyPickerResults } from './extras/skills-picker-results/SkillsSpecialtyPickerResults';
import { DistributionListPickerResults } from './extras/distributionlist-picker-results/DistributionListPickerResults';
import { WorkersCompCodesPickerResults } from './extras/workers-comp-codes-picker-results/WorkersCompCodesPickerResults';
export class NovoPickerModule {
}
NovoPickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, NovoLoadingModule, NovoListModule, NovoOverlayModule, NovoSwitchModule],
                declarations: [
                    NovoPickerElement,
                    PickerResults,
                    EntityPickerResult,
                    EntityPickerResults,
                    ChecklistPickerResults,
                    GroupedMultiPickerResults,
                    MixedMultiPickerResults,
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
                    MixedMultiPickerResults,
                    DistributionListPickerResults,
                    WorkersCompCodesPickerResults,
                    SkillsSpecialtyPickerResults,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvUGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE1BQU07QUFDTixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM3RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNsRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUMzRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUN2SCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQTZCekgsTUFBTSxPQUFPLGdCQUFnQjs7O1lBM0I1QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQzVHLFlBQVksRUFBRTtvQkFDWixpQkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2Isa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLHNCQUFzQjtvQkFDdEIseUJBQXlCO29CQUN6Qix1QkFBdUI7b0JBQ3ZCLDZCQUE2QjtvQkFDN0IsNkJBQTZCO29CQUM3Qiw0QkFBNEI7aUJBQzdCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxpQkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2Isa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLHNCQUFzQjtvQkFDdEIseUJBQXlCO29CQUN6Qix1QkFBdUI7b0JBQ3ZCLDZCQUE2QjtvQkFDN0IsNkJBQTZCO29CQUM3Qiw0QkFBNEI7aUJBQzdCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9PdmVybGF5TW9kdWxlIH0gZnJvbSAnLi4vb3ZlcmxheS9PdmVybGF5Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTGlzdE1vZHVsZSB9IGZyb20gJy4uL2xpc3QvTGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0xvYWRpbmdNb2R1bGUgfSBmcm9tICcuLi9sb2FkaW5nL0xvYWRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Td2l0Y2hNb2R1bGUgfSBmcm9tICcuLi9zd2l0Y2gvU3dpdGNoLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvUGlja2VyRWxlbWVudCB9IGZyb20gJy4vUGlja2VyJztcbmltcG9ydCB7IFBpY2tlclJlc3VsdHMgfSBmcm9tICcuL2V4dHJhcy9waWNrZXItcmVzdWx0cy9QaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IEVudGl0eVBpY2tlclJlc3VsdCwgRW50aXR5UGlja2VyUmVzdWx0cyB9IGZyb20gJy4vZXh0cmFzL2VudGl0eS1waWNrZXItcmVzdWx0cy9FbnRpdHlQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IENoZWNrbGlzdFBpY2tlclJlc3VsdHMgfSBmcm9tICcuL2V4dHJhcy9jaGVja2xpc3QtcGlja2VyLXJlc3VsdHMvQ2hlY2tsaXN0UGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBHcm91cGVkTXVsdGlQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi9leHRyYXMvZ3JvdXBlZC1tdWx0aS1waWNrZXItcmVzdWx0cy9Hcm91cGVkTXVsdGlQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IE1peGVkTXVsdGlQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi9leHRyYXMvbWl4ZWQtbXVsdGktcGlja2VyLXJlc3VsdHMvTWl4ZWRNdWx0aVBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgU2tpbGxzU3BlY2lhbHR5UGlja2VyUmVzdWx0cyB9IGZyb20gJy4vZXh0cmFzL3NraWxscy1waWNrZXItcmVzdWx0cy9Ta2lsbHNTcGVjaWFsdHlQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IERpc3RyaWJ1dGlvbkxpc3RQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi9leHRyYXMvZGlzdHJpYnV0aW9ubGlzdC1waWNrZXItcmVzdWx0cy9EaXN0cmlidXRpb25MaXN0UGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBXb3JrZXJzQ29tcENvZGVzUGlja2VyUmVzdWx0cyB9IGZyb20gJy4vZXh0cmFzL3dvcmtlcnMtY29tcC1jb2Rlcy1waWNrZXItcmVzdWx0cy9Xb3JrZXJzQ29tcENvZGVzUGlja2VyUmVzdWx0cyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOb3ZvTG9hZGluZ01vZHVsZSwgTm92b0xpc3RNb2R1bGUsIE5vdm9PdmVybGF5TW9kdWxlLCBOb3ZvU3dpdGNoTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTm92b1BpY2tlckVsZW1lbnQsXG4gICAgUGlja2VyUmVzdWx0cyxcbiAgICBFbnRpdHlQaWNrZXJSZXN1bHQsXG4gICAgRW50aXR5UGlja2VyUmVzdWx0cyxcbiAgICBDaGVja2xpc3RQaWNrZXJSZXN1bHRzLFxuICAgIEdyb3VwZWRNdWx0aVBpY2tlclJlc3VsdHMsXG4gICAgTWl4ZWRNdWx0aVBpY2tlclJlc3VsdHMsXG4gICAgRGlzdHJpYnV0aW9uTGlzdFBpY2tlclJlc3VsdHMsXG4gICAgV29ya2Vyc0NvbXBDb2Rlc1BpY2tlclJlc3VsdHMsXG4gICAgU2tpbGxzU3BlY2lhbHR5UGlja2VyUmVzdWx0cyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5vdm9QaWNrZXJFbGVtZW50LFxuICAgIFBpY2tlclJlc3VsdHMsXG4gICAgRW50aXR5UGlja2VyUmVzdWx0LFxuICAgIEVudGl0eVBpY2tlclJlc3VsdHMsXG4gICAgQ2hlY2tsaXN0UGlja2VyUmVzdWx0cyxcbiAgICBHcm91cGVkTXVsdGlQaWNrZXJSZXN1bHRzLFxuICAgIE1peGVkTXVsdGlQaWNrZXJSZXN1bHRzLFxuICAgIERpc3RyaWJ1dGlvbkxpc3RQaWNrZXJSZXN1bHRzLFxuICAgIFdvcmtlcnNDb21wQ29kZXNQaWNrZXJSZXN1bHRzLFxuICAgIFNraWxsc1NwZWNpYWx0eVBpY2tlclJlc3VsdHMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9QaWNrZXJNb2R1bGUgeyB9XG4iXX0=