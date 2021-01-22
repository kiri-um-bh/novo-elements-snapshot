/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/Form.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Vendor
import { TextMaskModule } from 'angular2-text-mask';
// APP
import { NovoRadioModule } from './../radio/Radio.module';
import { NovoButtonModule } from './../button/Button.module';
import { NovoTilesModule } from './../tiles/Tiles.module';
import { NovoSelectModule } from './../select/Select.module';
import { NovoPickerModule } from './../picker/Picker.module';
import { NovoChipsModule } from './../chips/Chips.module';
import { NovoDatePickerModule } from './../date-picker/DatePicker.module';
import { NovoTimePickerModule } from './../time-picker/TimePicker.module';
import { NovoDateTimePickerModule } from './../date-time-picker/DateTimePicker.module';
import { NovoNovoCKEditorModule } from './../ckeditor/CKEditor.module';
import { NovoQuickNoteModule } from './../quick-note/QuickNote.module';
import { NovoDynamicFormElement, NovoFieldsetElement, NovoFieldsetHeaderElement } from './DynamicForm';
import { NovoFormElement } from './Form';
import { NovoAutoSize, NovoControlElement } from './Control';
import { NovoFormExtrasModule } from './extras/FormExtras.module';
import { NovoHeaderModule } from './../header/Header.module';
import { NovoTooltipModule } from './../tooltip/Tooltip.module';
import { NovoDragulaModule } from './../dragula/Dragula.module';
import { NovoTipWellModule } from './../tip-well/TipWell.module';
import { NovoAceEditorModule } from './../ace-editor/AceEditor.module';
import { NovoModalModule } from './../modal/Modal.module';
import { ControlConfirmModal, ControlPromptModal } from './FieldInteractionModals';
import { NovoControlGroup } from './ControlGroup';
import { NovoControlTemplates } from './ControlTemplates';
import { NovoTemplateService } from './../../services/template/NovoTemplateService';
import { NovoCommonModule } from '../common/common.module';
import { NovoEmbeddedFormGroupElement } from './EmbeddedFormGroup';
var NovoFormModule = /** @class */ (function () {
    function NovoFormModule() {
    }
    NovoFormModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NovoRadioModule,
                        NovoTilesModule,
                        NovoSelectModule,
                        NovoPickerModule,
                        NovoChipsModule,
                        NovoDatePickerModule,
                        NovoTimePickerModule,
                        NovoNovoCKEditorModule,
                        NovoFormExtrasModule,
                        NovoQuickNoteModule,
                        NovoDateTimePickerModule,
                        NovoHeaderModule,
                        NovoTooltipModule,
                        NovoDragulaModule,
                        TextMaskModule,
                        NovoTipWellModule,
                        NovoModalModule,
                        NovoButtonModule,
                        NovoAceEditorModule,
                        NovoCommonModule,
                    ],
                    declarations: [
                        NovoAutoSize,
                        NovoDynamicFormElement,
                        NovoFormElement,
                        NovoFieldsetElement,
                        NovoFieldsetHeaderElement,
                        NovoControlElement,
                        ControlConfirmModal,
                        ControlPromptModal,
                        NovoControlGroup,
                        NovoControlTemplates,
                        NovoEmbeddedFormGroupElement,
                    ],
                    exports: [
                        NovoAutoSize,
                        NovoDynamicFormElement,
                        NovoFormElement,
                        NovoFieldsetHeaderElement,
                        NovoControlElement,
                        NovoControlGroup,
                        NovoControlTemplates,
                        NovoEmbeddedFormGroupElement,
                    ],
                    entryComponents: [ControlConfirmModal, ControlPromptModal],
                    providers: [NovoTemplateService],
                },] }
    ];
    return NovoFormModule;
}());
export { NovoFormModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9Gb3JtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUVwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN2RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVuRTtJQUFBO0lBbUQ2QixDQUFDOztnQkFuRDdCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixvQkFBb0I7d0JBQ3BCLG9CQUFvQjt3QkFDcEIsc0JBQXNCO3dCQUN0QixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3dCQUN4QixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3FCQUNqQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osWUFBWTt3QkFDWixzQkFBc0I7d0JBQ3RCLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQix5QkFBeUI7d0JBQ3pCLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3dCQUNwQiw0QkFBNEI7cUJBQzdCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLHNCQUFzQjt3QkFDdEIsZUFBZTt3QkFDZix5QkFBeUI7d0JBQ3pCLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLDRCQUE0QjtxQkFDN0I7b0JBQ0QsZUFBZSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsa0JBQWtCLENBQUM7b0JBQzFELFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUNqQzs7SUFDNEIscUJBQUM7Q0FBQSxBQW5EOUIsSUFtRDhCO1NBQWpCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgVGV4dE1hc2tNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi10ZXh0LW1hc2snO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvUmFkaW9Nb2R1bGUgfSBmcm9tICcuLy4uL3JhZGlvL1JhZGlvLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi8uLi9idXR0b24vQnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVGlsZXNNb2R1bGUgfSBmcm9tICcuLy4uL3RpbGVzL1RpbGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvU2VsZWN0TW9kdWxlIH0gZnJvbSAnLi8uLi9zZWxlY3QvU2VsZWN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvUGlja2VyTW9kdWxlIH0gZnJvbSAnLi8uLi9waWNrZXIvUGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvQ2hpcHNNb2R1bGUgfSBmcm9tICcuLy4uL2NoaXBzL0NoaXBzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJy4vLi4vZGF0ZS1waWNrZXIvRGF0ZVBpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1RpbWVQaWNrZXJNb2R1bGUgfSBmcm9tICcuLy4uL3RpbWUtcGlja2VyL1RpbWVQaWNrZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9EYXRlVGltZVBpY2tlck1vZHVsZSB9IGZyb20gJy4vLi4vZGF0ZS10aW1lLXBpY2tlci9EYXRlVGltZVBpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b05vdm9DS0VkaXRvck1vZHVsZSB9IGZyb20gJy4vLi4vY2tlZGl0b3IvQ0tFZGl0b3IubW9kdWxlJztcbmltcG9ydCB7IE5vdm9RdWlja05vdGVNb2R1bGUgfSBmcm9tICcuLy4uL3F1aWNrLW5vdGUvUXVpY2tOb3RlLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRHluYW1pY0Zvcm1FbGVtZW50LCBOb3ZvRmllbGRzZXRFbGVtZW50LCBOb3ZvRmllbGRzZXRIZWFkZXJFbGVtZW50IH0gZnJvbSAnLi9EeW5hbWljRm9ybSc7XG5pbXBvcnQgeyBOb3ZvRm9ybUVsZW1lbnQgfSBmcm9tICcuL0Zvcm0nO1xuaW1wb3J0IHsgTm92b0F1dG9TaXplLCBOb3ZvQ29udHJvbEVsZW1lbnQgfSBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IHsgTm92b0Zvcm1FeHRyYXNNb2R1bGUgfSBmcm9tICcuL2V4dHJhcy9Gb3JtRXh0cmFzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvSGVhZGVyTW9kdWxlIH0gZnJvbSAnLi8uLi9oZWFkZXIvSGVhZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4vLi4vdG9vbHRpcC9Ub29sdGlwLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRHJhZ3VsYU1vZHVsZSB9IGZyb20gJy4vLi4vZHJhZ3VsYS9EcmFndWxhLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVGlwV2VsbE1vZHVsZSB9IGZyb20gJy4vLi4vdGlwLXdlbGwvVGlwV2VsbC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0FjZUVkaXRvck1vZHVsZSB9IGZyb20gJy4vLi4vYWNlLWVkaXRvci9BY2VFZGl0b3IubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Nb2RhbE1vZHVsZSB9IGZyb20gJy4vLi4vbW9kYWwvTW9kYWwubW9kdWxlJztcbmltcG9ydCB7IENvbnRyb2xDb25maXJtTW9kYWwsIENvbnRyb2xQcm9tcHRNb2RhbCB9IGZyb20gJy4vRmllbGRJbnRlcmFjdGlvbk1vZGFscyc7XG5pbXBvcnQgeyBOb3ZvQ29udHJvbEdyb3VwIH0gZnJvbSAnLi9Db250cm9sR3JvdXAnO1xuaW1wb3J0IHsgTm92b0NvbnRyb2xUZW1wbGF0ZXMgfSBmcm9tICcuL0NvbnRyb2xUZW1wbGF0ZXMnO1xuaW1wb3J0IHsgTm92b1RlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvdGVtcGxhdGUvTm92b1RlbXBsYXRlU2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0VtYmVkZGVkRm9ybUdyb3VwRWxlbWVudCB9IGZyb20gJy4vRW1iZWRkZWRGb3JtR3JvdXAnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTm92b1JhZGlvTW9kdWxlLFxuICAgIE5vdm9UaWxlc01vZHVsZSxcbiAgICBOb3ZvU2VsZWN0TW9kdWxlLFxuICAgIE5vdm9QaWNrZXJNb2R1bGUsXG4gICAgTm92b0NoaXBzTW9kdWxlLFxuICAgIE5vdm9EYXRlUGlja2VyTW9kdWxlLFxuICAgIE5vdm9UaW1lUGlja2VyTW9kdWxlLFxuICAgIE5vdm9Ob3ZvQ0tFZGl0b3JNb2R1bGUsXG4gICAgTm92b0Zvcm1FeHRyYXNNb2R1bGUsXG4gICAgTm92b1F1aWNrTm90ZU1vZHVsZSxcbiAgICBOb3ZvRGF0ZVRpbWVQaWNrZXJNb2R1bGUsXG4gICAgTm92b0hlYWRlck1vZHVsZSxcbiAgICBOb3ZvVG9vbHRpcE1vZHVsZSxcbiAgICBOb3ZvRHJhZ3VsYU1vZHVsZSxcbiAgICBUZXh0TWFza01vZHVsZSxcbiAgICBOb3ZvVGlwV2VsbE1vZHVsZSxcbiAgICBOb3ZvTW9kYWxNb2R1bGUsXG4gICAgTm92b0J1dHRvbk1vZHVsZSxcbiAgICBOb3ZvQWNlRWRpdG9yTW9kdWxlLFxuICAgIE5vdm9Db21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5vdm9BdXRvU2l6ZSxcbiAgICBOb3ZvRHluYW1pY0Zvcm1FbGVtZW50LFxuICAgIE5vdm9Gb3JtRWxlbWVudCxcbiAgICBOb3ZvRmllbGRzZXRFbGVtZW50LFxuICAgIE5vdm9GaWVsZHNldEhlYWRlckVsZW1lbnQsXG4gICAgTm92b0NvbnRyb2xFbGVtZW50LFxuICAgIENvbnRyb2xDb25maXJtTW9kYWwsXG4gICAgQ29udHJvbFByb21wdE1vZGFsLFxuICAgIE5vdm9Db250cm9sR3JvdXAsXG4gICAgTm92b0NvbnRyb2xUZW1wbGF0ZXMsXG4gICAgTm92b0VtYmVkZGVkRm9ybUdyb3VwRWxlbWVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5vdm9BdXRvU2l6ZSxcbiAgICBOb3ZvRHluYW1pY0Zvcm1FbGVtZW50LFxuICAgIE5vdm9Gb3JtRWxlbWVudCxcbiAgICBOb3ZvRmllbGRzZXRIZWFkZXJFbGVtZW50LFxuICAgIE5vdm9Db250cm9sRWxlbWVudCxcbiAgICBOb3ZvQ29udHJvbEdyb3VwLFxuICAgIE5vdm9Db250cm9sVGVtcGxhdGVzLFxuICAgIE5vdm9FbWJlZGRlZEZvcm1Hcm91cEVsZW1lbnQsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NvbnRyb2xDb25maXJtTW9kYWwsIENvbnRyb2xQcm9tcHRNb2RhbF0sXG4gIHByb3ZpZGVyczogW05vdm9UZW1wbGF0ZVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRm9ybU1vZHVsZSB7fVxuIl19