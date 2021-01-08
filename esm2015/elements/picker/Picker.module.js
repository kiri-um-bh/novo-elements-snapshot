// NG2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NovoListModule } from '../list/List.module';
import { NovoLoadingModule } from '../loading/Loading.module';
// APP
import { NovoOverlayModule } from '../overlay/Overlay.module';
import { NovoSwitchModule } from '../switch/Switch.module';
import { ChecklistPickerResults } from './extras/checklist-picker-results/ChecklistPickerResults';
import { DistributionListPickerResults } from './extras/distributionlist-picker-results/DistributionListPickerResults';
import { EntityPickerResult, EntityPickerResults } from './extras/entity-picker-results/EntityPickerResults';
import { GroupedMultiPickerResults } from './extras/grouped-multi-picker-results/GroupedMultiPickerResults';
import { PickerResults } from './extras/picker-results/PickerResults';
import { SkillsSpecialtyPickerResults } from './extras/skills-picker-results/SkillsSpecialtyPickerResults';
import { WorkersCompCodesPickerResults } from './extras/workers-comp-codes-picker-results/WorkersCompCodesPickerResults';
import { NovoPickerElement } from './Picker';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3BpY2tlci9QaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE1BQU07QUFDTixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUN2SCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM3RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDM0csT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDekgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sVUFBVSxDQUFDOztBQTJCN0MsTUFBTSxPQUFPLGdCQUFnQjs7b0RBQWhCLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLGtCQXhCbEIsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQzt3RkF3QmpHLGdCQUFnQixtQkF0QnpCLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0IsNEJBQTRCLGFBVnBCLFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixhQWF6RyxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6Qiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLDRCQUE0QjtrREFHbkIsZ0JBQWdCO2NBekI1QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQzVHLFlBQVksRUFBRTtvQkFDWixpQkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2Isa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLHNCQUFzQjtvQkFDdEIseUJBQXlCO29CQUN6Qiw2QkFBNkI7b0JBQzdCLDZCQUE2QjtvQkFDN0IsNEJBQTRCO2lCQUM3QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQixzQkFBc0I7b0JBQ3RCLHlCQUF5QjtvQkFDekIsNkJBQTZCO29CQUM3Qiw2QkFBNkI7b0JBQzdCLDRCQUE0QjtpQkFDN0I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5vdm9MaXN0TW9kdWxlIH0gZnJvbSAnLi4vbGlzdC9MaXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTG9hZGluZ01vZHVsZSB9IGZyb20gJy4uL2xvYWRpbmcvTG9hZGluZy5tb2R1bGUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvT3ZlcmxheU1vZHVsZSB9IGZyb20gJy4uL292ZXJsYXkvT3ZlcmxheS5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1N3aXRjaE1vZHVsZSB9IGZyb20gJy4uL3N3aXRjaC9Td2l0Y2gubW9kdWxlJztcbmltcG9ydCB7IENoZWNrbGlzdFBpY2tlclJlc3VsdHMgfSBmcm9tICcuL2V4dHJhcy9jaGVja2xpc3QtcGlja2VyLXJlc3VsdHMvQ2hlY2tsaXN0UGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBEaXN0cmlidXRpb25MaXN0UGlja2VyUmVzdWx0cyB9IGZyb20gJy4vZXh0cmFzL2Rpc3RyaWJ1dGlvbmxpc3QtcGlja2VyLXJlc3VsdHMvRGlzdHJpYnV0aW9uTGlzdFBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgRW50aXR5UGlja2VyUmVzdWx0LCBFbnRpdHlQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi9leHRyYXMvZW50aXR5LXBpY2tlci1yZXN1bHRzL0VudGl0eVBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cyB9IGZyb20gJy4vZXh0cmFzL2dyb3VwZWQtbXVsdGktcGlja2VyLXJlc3VsdHMvR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi9leHRyYXMvcGlja2VyLXJlc3VsdHMvUGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBTa2lsbHNTcGVjaWFsdHlQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi9leHRyYXMvc2tpbGxzLXBpY2tlci1yZXN1bHRzL1NraWxsc1NwZWNpYWx0eVBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgV29ya2Vyc0NvbXBDb2Rlc1BpY2tlclJlc3VsdHMgfSBmcm9tICcuL2V4dHJhcy93b3JrZXJzLWNvbXAtY29kZXMtcGlja2VyLXJlc3VsdHMvV29ya2Vyc0NvbXBDb2Rlc1BpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgTm92b1BpY2tlckVsZW1lbnQgfSBmcm9tICcuL1BpY2tlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOb3ZvTG9hZGluZ01vZHVsZSwgTm92b0xpc3RNb2R1bGUsIE5vdm9PdmVybGF5TW9kdWxlLCBOb3ZvU3dpdGNoTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTm92b1BpY2tlckVsZW1lbnQsXG4gICAgUGlja2VyUmVzdWx0cyxcbiAgICBFbnRpdHlQaWNrZXJSZXN1bHQsXG4gICAgRW50aXR5UGlja2VyUmVzdWx0cyxcbiAgICBDaGVja2xpc3RQaWNrZXJSZXN1bHRzLFxuICAgIEdyb3VwZWRNdWx0aVBpY2tlclJlc3VsdHMsXG4gICAgRGlzdHJpYnV0aW9uTGlzdFBpY2tlclJlc3VsdHMsXG4gICAgV29ya2Vyc0NvbXBDb2Rlc1BpY2tlclJlc3VsdHMsXG4gICAgU2tpbGxzU3BlY2lhbHR5UGlja2VyUmVzdWx0cyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5vdm9QaWNrZXJFbGVtZW50LFxuICAgIFBpY2tlclJlc3VsdHMsXG4gICAgRW50aXR5UGlja2VyUmVzdWx0LFxuICAgIEVudGl0eVBpY2tlclJlc3VsdHMsXG4gICAgQ2hlY2tsaXN0UGlja2VyUmVzdWx0cyxcbiAgICBHcm91cGVkTXVsdGlQaWNrZXJSZXN1bHRzLFxuICAgIERpc3RyaWJ1dGlvbkxpc3RQaWNrZXJSZXN1bHRzLFxuICAgIFdvcmtlcnNDb21wQ29kZXNQaWNrZXJSZXN1bHRzLFxuICAgIFNraWxsc1NwZWNpYWx0eVBpY2tlclJlc3VsdHMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9QaWNrZXJNb2R1bGUge31cbiJdfQ==