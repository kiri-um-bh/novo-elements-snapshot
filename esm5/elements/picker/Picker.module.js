/**
 * @fileoverview added by tsickle
 * Generated from: elements/picker/Picker.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
var NovoPickerModule = /** @class */ (function () {
    function NovoPickerModule() {
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
                        DistributionListPickerResults,
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
                        SkillsSpecialtyPickerResults,
                    ],
                    entryComponents: [
                        PickerResults,
                        EntityPickerResult,
                        EntityPickerResults,
                        ChecklistPickerResults,
                        GroupedMultiPickerResults,
                        DistributionListPickerResults,
                        SkillsSpecialtyPickerResults,
                    ],
                },] }
    ];
    return NovoPickerModule;
}());
export { NovoPickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvUGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzdHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQzNHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBRXZIO0lBQUE7SUFnQytCLENBQUM7O2dCQWhDL0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDO29CQUM1RyxZQUFZLEVBQUU7d0JBQ1osaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixzQkFBc0I7d0JBQ3RCLHlCQUF5Qjt3QkFDekIsNkJBQTZCO3dCQUM3Qiw0QkFBNEI7cUJBQzdCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLHNCQUFzQjt3QkFDdEIseUJBQXlCO3dCQUN6Qiw2QkFBNkI7d0JBQzdCLDRCQUE0QjtxQkFDN0I7b0JBQ0QsZUFBZSxFQUFFO3dCQUNmLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLHNCQUFzQjt3QkFDdEIseUJBQXlCO3dCQUN6Qiw2QkFBNkI7d0JBQzdCLDRCQUE0QjtxQkFDN0I7aUJBQ0Y7O0lBQzhCLHVCQUFDO0NBQUEsQUFoQ2hDLElBZ0NnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9PdmVybGF5TW9kdWxlIH0gZnJvbSAnLi4vb3ZlcmxheS9PdmVybGF5Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTGlzdE1vZHVsZSB9IGZyb20gJy4uL2xpc3QvTGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0xvYWRpbmdNb2R1bGUgfSBmcm9tICcuLi9sb2FkaW5nL0xvYWRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Td2l0Y2hNb2R1bGUgfSBmcm9tICcuLi9zd2l0Y2gvU3dpdGNoLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvUGlja2VyRWxlbWVudCB9IGZyb20gJy4vUGlja2VyJztcbmltcG9ydCB7IFBpY2tlclJlc3VsdHMgfSBmcm9tICcuL2V4dHJhcy9waWNrZXItcmVzdWx0cy9QaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IEVudGl0eVBpY2tlclJlc3VsdCwgRW50aXR5UGlja2VyUmVzdWx0cyB9IGZyb20gJy4vZXh0cmFzL2VudGl0eS1waWNrZXItcmVzdWx0cy9FbnRpdHlQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IENoZWNrbGlzdFBpY2tlclJlc3VsdHMgfSBmcm9tICcuL2V4dHJhcy9jaGVja2xpc3QtcGlja2VyLXJlc3VsdHMvQ2hlY2tsaXN0UGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBHcm91cGVkTXVsdGlQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi9leHRyYXMvZ3JvdXBlZC1tdWx0aS1waWNrZXItcmVzdWx0cy9Hcm91cGVkTXVsdGlQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IFNraWxsc1NwZWNpYWx0eVBpY2tlclJlc3VsdHMgfSBmcm9tICcuL2V4dHJhcy9za2lsbHMtcGlja2VyLXJlc3VsdHMvU2tpbGxzU3BlY2lhbHR5UGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBEaXN0cmlidXRpb25MaXN0UGlja2VyUmVzdWx0cyB9IGZyb20gJy4vZXh0cmFzL2Rpc3RyaWJ1dGlvbmxpc3QtcGlja2VyLXJlc3VsdHMvRGlzdHJpYnV0aW9uTGlzdFBpY2tlclJlc3VsdHMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTm92b0xvYWRpbmdNb2R1bGUsIE5vdm9MaXN0TW9kdWxlLCBOb3ZvT3ZlcmxheU1vZHVsZSwgTm92b1N3aXRjaE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5vdm9QaWNrZXJFbGVtZW50LFxuICAgIFBpY2tlclJlc3VsdHMsXG4gICAgRW50aXR5UGlja2VyUmVzdWx0LFxuICAgIEVudGl0eVBpY2tlclJlc3VsdHMsXG4gICAgQ2hlY2tsaXN0UGlja2VyUmVzdWx0cyxcbiAgICBHcm91cGVkTXVsdGlQaWNrZXJSZXN1bHRzLFxuICAgIERpc3RyaWJ1dGlvbkxpc3RQaWNrZXJSZXN1bHRzLFxuICAgIFNraWxsc1NwZWNpYWx0eVBpY2tlclJlc3VsdHMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOb3ZvUGlja2VyRWxlbWVudCxcbiAgICBQaWNrZXJSZXN1bHRzLFxuICAgIEVudGl0eVBpY2tlclJlc3VsdCxcbiAgICBFbnRpdHlQaWNrZXJSZXN1bHRzLFxuICAgIENoZWNrbGlzdFBpY2tlclJlc3VsdHMsXG4gICAgR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cyxcbiAgICBEaXN0cmlidXRpb25MaXN0UGlja2VyUmVzdWx0cyxcbiAgICBTa2lsbHNTcGVjaWFsdHlQaWNrZXJSZXN1bHRzLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBQaWNrZXJSZXN1bHRzLFxuICAgIEVudGl0eVBpY2tlclJlc3VsdCxcbiAgICBFbnRpdHlQaWNrZXJSZXN1bHRzLFxuICAgIENoZWNrbGlzdFBpY2tlclJlc3VsdHMsXG4gICAgR3JvdXBlZE11bHRpUGlja2VyUmVzdWx0cyxcbiAgICBEaXN0cmlidXRpb25MaXN0UGlja2VyUmVzdWx0cyxcbiAgICBTa2lsbHNTcGVjaWFsdHlQaWNrZXJSZXN1bHRzLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvUGlja2VyTW9kdWxlIHt9XG4iXX0=