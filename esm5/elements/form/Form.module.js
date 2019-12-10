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
                    entryComponents: [ControlConfirmModal, ControlPromptModal],
                    providers: [NovoTemplateService],
                },] }
    ];
    return NovoFormModule;
}());
export { NovoFormModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9Gb3JtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUVwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN2RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUzRDtJQUFBO0lBaUQ2QixDQUFDOztnQkFqRDdCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixvQkFBb0I7d0JBQ3BCLG9CQUFvQjt3QkFDcEIsc0JBQXNCO3dCQUN0QixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3dCQUN4QixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3FCQUNqQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLHNCQUFzQjt3QkFDdEIsZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLHlCQUF5Qjt3QkFDekIsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixzQkFBc0I7d0JBQ3RCLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZix5QkFBeUI7d0JBQ3pCLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3FCQUNyQjtvQkFDRCxlQUFlLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxrQkFBa0IsQ0FBQztvQkFDMUQsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQ2pDOztJQUM0QixxQkFBQztDQUFBLEFBakQ5QixJQWlEOEI7U0FBakIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBUZXh0TWFza01vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXRleHQtbWFzayc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9SYWRpb01vZHVsZSB9IGZyb20gJy4vLi4vcmFkaW8vUmFkaW8ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLy4uL2J1dHRvbi9CdXR0b24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UaWxlc01vZHVsZSB9IGZyb20gJy4vLi4vdGlsZXMvVGlsZXMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9TZWxlY3RNb2R1bGUgfSBmcm9tICcuLy4uL3NlbGVjdC9TZWxlY3QubW9kdWxlJztcbmltcG9ydCB7IE5vdm9QaWNrZXJNb2R1bGUgfSBmcm9tICcuLy4uL3BpY2tlci9QaWNrZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9DaGlwc01vZHVsZSB9IGZyb20gJy4vLi4vY2hpcHMvQ2hpcHMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9EYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnLi8uLi9kYXRlLXBpY2tlci9EYXRlUGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVGltZVBpY2tlck1vZHVsZSB9IGZyb20gJy4vLi4vdGltZS1waWNrZXIvVGltZVBpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0RhdGVUaW1lUGlja2VyTW9kdWxlIH0gZnJvbSAnLi8uLi9kYXRlLXRpbWUtcGlja2VyL0RhdGVUaW1lUGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTm92b0NLRWRpdG9yTW9kdWxlIH0gZnJvbSAnLi8uLi9ja2VkaXRvci9DS0VkaXRvci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1F1aWNrTm90ZU1vZHVsZSB9IGZyb20gJy4vLi4vcXVpY2stbm90ZS9RdWlja05vdGUubW9kdWxlJztcbmltcG9ydCB7IE5vdm9EeW5hbWljRm9ybUVsZW1lbnQsIE5vdm9GaWVsZHNldEVsZW1lbnQsIE5vdm9GaWVsZHNldEhlYWRlckVsZW1lbnQgfSBmcm9tICcuL0R5bmFtaWNGb3JtJztcbmltcG9ydCB7IE5vdm9Gb3JtRWxlbWVudCB9IGZyb20gJy4vRm9ybSc7XG5pbXBvcnQgeyBOb3ZvQ29udHJvbEVsZW1lbnQsIE5vdm9BdXRvU2l6ZSB9IGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgeyBOb3ZvRm9ybUV4dHJhc01vZHVsZSB9IGZyb20gJy4vZXh0cmFzL0Zvcm1FeHRyYXMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9IZWFkZXJNb2R1bGUgfSBmcm9tICcuLy4uL2hlYWRlci9IZWFkZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Ub29sdGlwTW9kdWxlIH0gZnJvbSAnLi8uLi90b29sdGlwL1Rvb2x0aXAubW9kdWxlJztcbmltcG9ydCB7IE5vdm9EcmFndWxhTW9kdWxlIH0gZnJvbSAnLi8uLi9kcmFndWxhL0RyYWd1bGEubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UaXBXZWxsTW9kdWxlIH0gZnJvbSAnLi8uLi90aXAtd2VsbC9UaXBXZWxsLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvQWNlRWRpdG9yTW9kdWxlIH0gZnJvbSAnLi8uLi9hY2UtZWRpdG9yL0FjZUVkaXRvci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b01vZGFsTW9kdWxlIH0gZnJvbSAnLi8uLi9tb2RhbC9Nb2RhbC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29udHJvbENvbmZpcm1Nb2RhbCwgQ29udHJvbFByb21wdE1vZGFsIH0gZnJvbSAnLi9GaWVsZEludGVyYWN0aW9uTW9kYWxzJztcbmltcG9ydCB7IE5vdm9Db250cm9sR3JvdXAgfSBmcm9tICcuL0NvbnRyb2xHcm91cCc7XG5pbXBvcnQgeyBOb3ZvQ29udHJvbFRlbXBsYXRlcyB9IGZyb20gJy4vQ29udHJvbFRlbXBsYXRlcyc7XG5pbXBvcnQgeyBOb3ZvVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9Db21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOb3ZvUmFkaW9Nb2R1bGUsXG4gICAgTm92b1RpbGVzTW9kdWxlLFxuICAgIE5vdm9TZWxlY3RNb2R1bGUsXG4gICAgTm92b1BpY2tlck1vZHVsZSxcbiAgICBOb3ZvQ2hpcHNNb2R1bGUsXG4gICAgTm92b0RhdGVQaWNrZXJNb2R1bGUsXG4gICAgTm92b1RpbWVQaWNrZXJNb2R1bGUsXG4gICAgTm92b05vdm9DS0VkaXRvck1vZHVsZSxcbiAgICBOb3ZvRm9ybUV4dHJhc01vZHVsZSxcbiAgICBOb3ZvUXVpY2tOb3RlTW9kdWxlLFxuICAgIE5vdm9EYXRlVGltZVBpY2tlck1vZHVsZSxcbiAgICBOb3ZvSGVhZGVyTW9kdWxlLFxuICAgIE5vdm9Ub29sdGlwTW9kdWxlLFxuICAgIE5vdm9EcmFndWxhTW9kdWxlLFxuICAgIFRleHRNYXNrTW9kdWxlLFxuICAgIE5vdm9UaXBXZWxsTW9kdWxlLFxuICAgIE5vdm9Nb2RhbE1vZHVsZSxcbiAgICBOb3ZvQnV0dG9uTW9kdWxlLFxuICAgIE5vdm9BY2VFZGl0b3JNb2R1bGUsXG4gICAgTm92b0NvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTm92b0F1dG9TaXplLFxuICAgIE5vdm9Db250cm9sRWxlbWVudCxcbiAgICBOb3ZvRHluYW1pY0Zvcm1FbGVtZW50LFxuICAgIE5vdm9Gb3JtRWxlbWVudCxcbiAgICBOb3ZvRmllbGRzZXRFbGVtZW50LFxuICAgIE5vdm9GaWVsZHNldEhlYWRlckVsZW1lbnQsXG4gICAgQ29udHJvbENvbmZpcm1Nb2RhbCxcbiAgICBDb250cm9sUHJvbXB0TW9kYWwsXG4gICAgTm92b0NvbnRyb2xHcm91cCxcbiAgICBOb3ZvQ29udHJvbFRlbXBsYXRlcyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5vdm9BdXRvU2l6ZSxcbiAgICBOb3ZvRHluYW1pY0Zvcm1FbGVtZW50LFxuICAgIE5vdm9Db250cm9sRWxlbWVudCxcbiAgICBOb3ZvRm9ybUVsZW1lbnQsXG4gICAgTm92b0ZpZWxkc2V0SGVhZGVyRWxlbWVudCxcbiAgICBOb3ZvQ29udHJvbEdyb3VwLFxuICAgIE5vdm9Db250cm9sVGVtcGxhdGVzLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDb250cm9sQ29uZmlybU1vZGFsLCBDb250cm9sUHJvbXB0TW9kYWxdLFxuICBwcm92aWRlcnM6IFtOb3ZvVGVtcGxhdGVTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0Zvcm1Nb2R1bGUge31cbiJdfQ==