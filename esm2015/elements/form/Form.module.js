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
import { NovoControlElement, NovoAutoSize } from './Control';
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
export class NovoFormModule {
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
                    NovoControlElement,
                    NovoDynamicFormElement,
                    NovoFormElement,
                    NovoFieldsetElement,
                    NovoFieldsetHeaderElement,
                    ControlConfirmModal,
                    ControlPromptModal,
                    NovoControlGroup,
                    NovoControlTemplates,
                ],
                exports: [
                    NovoAutoSize,
                    NovoDynamicFormElement,
                    NovoControlElement,
                    NovoFormElement,
                    NovoFieldsetHeaderElement,
                    NovoControlGroup,
                    NovoControlTemplates,
                ],
                providers: [NovoTemplateService],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9Gb3JtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsU0FBUztBQUNULE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxNQUFNO0FBQ04sT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLHlCQUF5QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFlBQVksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM3RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFrRDNELE1BQU0sT0FBTyxjQUFjOzs7WUFoRDFCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsZUFBZTtvQkFDZixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIsc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsd0JBQXdCO29CQUN4QixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO2lCQUNqQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osWUFBWTtvQkFDWixrQkFBa0I7b0JBQ2xCLHNCQUFzQjtvQkFDdEIsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLHlCQUF5QjtvQkFDekIsbUJBQW1CO29CQUNuQixrQkFBa0I7b0JBQ2xCLGdCQUFnQjtvQkFDaEIsb0JBQW9CO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixzQkFBc0I7b0JBQ3RCLGtCQUFrQjtvQkFDbEIsZUFBZTtvQkFDZix5QkFBeUI7b0JBQ3pCLGdCQUFnQjtvQkFDaEIsb0JBQW9CO2lCQUNyQjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUNqQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBUZXh0TWFza01vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9SYWRpb01vZHVsZSB9IGZyb20gJy4vLi4vcmFkaW8vUmFkaW8ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLy4uL2J1dHRvbi9CdXR0b24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UaWxlc01vZHVsZSB9IGZyb20gJy4vLi4vdGlsZXMvVGlsZXMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9TZWxlY3RNb2R1bGUgfSBmcm9tICcuLy4uL3NlbGVjdC9TZWxlY3QubW9kdWxlJztcbmltcG9ydCB7IE5vdm9QaWNrZXJNb2R1bGUgfSBmcm9tICcuLy4uL3BpY2tlci9QaWNrZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9DaGlwc01vZHVsZSB9IGZyb20gJy4vLi4vY2hpcHMvQ2hpcHMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9EYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnLi8uLi9kYXRlLXBpY2tlci9EYXRlUGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVGltZVBpY2tlck1vZHVsZSB9IGZyb20gJy4vLi4vdGltZS1waWNrZXIvVGltZVBpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0RhdGVUaW1lUGlja2VyTW9kdWxlIH0gZnJvbSAnLi8uLi9kYXRlLXRpbWUtcGlja2VyL0RhdGVUaW1lUGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTm92b0NLRWRpdG9yTW9kdWxlIH0gZnJvbSAnLi8uLi9ja2VkaXRvci9DS0VkaXRvci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1F1aWNrTm90ZU1vZHVsZSB9IGZyb20gJy4vLi4vcXVpY2stbm90ZS9RdWlja05vdGUubW9kdWxlJztcbmltcG9ydCB7IE5vdm9EeW5hbWljRm9ybUVsZW1lbnQsIE5vdm9GaWVsZHNldEVsZW1lbnQsIE5vdm9GaWVsZHNldEhlYWRlckVsZW1lbnQgfSBmcm9tICcuL0R5bmFtaWNGb3JtJztcbmltcG9ydCB7IE5vdm9Gb3JtRWxlbWVudCB9IGZyb20gJy4vRm9ybSc7XG5pbXBvcnQgeyBOb3ZvQ29udHJvbEVsZW1lbnQsIE5vdm9BdXRvU2l6ZSB9IGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgeyBOb3ZvRm9ybUV4dHJhc01vZHVsZSB9IGZyb20gJy4vZXh0cmFzL0Zvcm1FeHRyYXMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9IZWFkZXJNb2R1bGUgfSBmcm9tICcuLy4uL2hlYWRlci9IZWFkZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Ub29sdGlwTW9kdWxlIH0gZnJvbSAnLi8uLi90b29sdGlwL1Rvb2x0aXAubW9kdWxlJztcbmltcG9ydCB7IE5vdm9EcmFndWxhTW9kdWxlIH0gZnJvbSAnLi8uLi9kcmFndWxhL0RyYWd1bGEubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UaXBXZWxsTW9kdWxlIH0gZnJvbSAnLi8uLi90aXAtd2VsbC9UaXBXZWxsLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvQWNlRWRpdG9yTW9kdWxlIH0gZnJvbSAnLi8uLi9hY2UtZWRpdG9yL0FjZUVkaXRvci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b01vZGFsTW9kdWxlIH0gZnJvbSAnLi8uLi9tb2RhbC9Nb2RhbC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29udHJvbENvbmZpcm1Nb2RhbCwgQ29udHJvbFByb21wdE1vZGFsIH0gZnJvbSAnLi9GaWVsZEludGVyYWN0aW9uTW9kYWxzJztcbmltcG9ydCB7IE5vdm9Db250cm9sR3JvdXAgfSBmcm9tICcuL0NvbnRyb2xHcm91cCc7XG5pbXBvcnQgeyBOb3ZvQ29udHJvbFRlbXBsYXRlcyB9IGZyb20gJy4vQ29udHJvbFRlbXBsYXRlcyc7XG5pbXBvcnQgeyBOb3ZvVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9Db21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOb3ZvUmFkaW9Nb2R1bGUsXG4gICAgTm92b1RpbGVzTW9kdWxlLFxuICAgIE5vdm9TZWxlY3RNb2R1bGUsXG4gICAgTm92b1BpY2tlck1vZHVsZSxcbiAgICBOb3ZvQ2hpcHNNb2R1bGUsXG4gICAgTm92b0RhdGVQaWNrZXJNb2R1bGUsXG4gICAgTm92b1RpbWVQaWNrZXJNb2R1bGUsXG4gICAgTm92b05vdm9DS0VkaXRvck1vZHVsZSxcbiAgICBOb3ZvRm9ybUV4dHJhc01vZHVsZSxcbiAgICBOb3ZvUXVpY2tOb3RlTW9kdWxlLFxuICAgIE5vdm9EYXRlVGltZVBpY2tlck1vZHVsZSxcbiAgICBOb3ZvSGVhZGVyTW9kdWxlLFxuICAgIE5vdm9Ub29sdGlwTW9kdWxlLFxuICAgIE5vdm9EcmFndWxhTW9kdWxlLFxuICAgIFRleHRNYXNrTW9kdWxlLFxuICAgIE5vdm9UaXBXZWxsTW9kdWxlLFxuICAgIE5vdm9Nb2RhbE1vZHVsZSxcbiAgICBOb3ZvQnV0dG9uTW9kdWxlLFxuICAgIE5vdm9BY2VFZGl0b3JNb2R1bGUsXG4gICAgTm92b0NvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTm92b0F1dG9TaXplLFxuICAgIE5vdm9Db250cm9sRWxlbWVudCxcbiAgICBOb3ZvRHluYW1pY0Zvcm1FbGVtZW50LFxuICAgIE5vdm9Gb3JtRWxlbWVudCxcbiAgICBOb3ZvRmllbGRzZXRFbGVtZW50LFxuICAgIE5vdm9GaWVsZHNldEhlYWRlckVsZW1lbnQsXG4gICAgQ29udHJvbENvbmZpcm1Nb2RhbCxcbiAgICBDb250cm9sUHJvbXB0TW9kYWwsXG4gICAgTm92b0NvbnRyb2xHcm91cCxcbiAgICBOb3ZvQ29udHJvbFRlbXBsYXRlcyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5vdm9BdXRvU2l6ZSxcbiAgICBOb3ZvRHluYW1pY0Zvcm1FbGVtZW50LFxuICAgIE5vdm9Db250cm9sRWxlbWVudCxcbiAgICBOb3ZvRm9ybUVsZW1lbnQsXG4gICAgTm92b0ZpZWxkc2V0SGVhZGVyRWxlbWVudCxcbiAgICBOb3ZvQ29udHJvbEdyb3VwLFxuICAgIE5vdm9Db250cm9sVGVtcGxhdGVzLFxuICBdLFxuICBwcm92aWRlcnM6IFtOb3ZvVGVtcGxhdGVTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0Zvcm1Nb2R1bGUgeyB9XG4iXX0=