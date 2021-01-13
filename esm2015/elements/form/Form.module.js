// NG2
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IMaskDirectiveModule } from 'angular-imask';
// Vendor
import { TextMaskModule } from 'angular2-text-mask';
import { NovoCommonModule } from '../common/common.module';
import { NovoTemplateService } from './../../services/template/NovoTemplateService';
import { NovoAceEditorModule } from './../ace-editor/AceEditor.module';
import { NovoButtonModule } from './../button/Button.module';
import { NovoChipsModule } from './../chips/Chips.module';
import { NovoNovoCKEditorModule } from './../ckeditor/CKEditor.module';
import { NovoDatePickerModule } from './../date-picker/DatePicker.module';
import { NovoDateTimePickerModule } from './../date-time-picker/DateTimePicker.module';
import { NovoDragulaModule } from './../dragula/Dragula.module';
import { NovoHeaderModule } from './../header/Header.module';
import { NovoModalModule } from './../modal/modal.module';
import { NovoPickerModule } from './../picker/Picker.module';
import { NovoQuickNoteModule } from './../quick-note/QuickNote.module';
// APP
import { NovoRadioModule } from './../radio/Radio.module';
import { NovoSelectModule } from './../select/Select.module';
import { NovoTilesModule } from './../tiles/Tiles.module';
import { NovoTimePickerModule } from './../time-picker/TimePicker.module';
import { NovoTipWellModule } from './../tip-well/TipWell.module';
import { NovoTooltipModule } from './../tooltip/Tooltip.module';
import { NovoAutoSize, NovoControlElement } from './Control';
import { NovoControlGroup } from './ControlGroup';
import { NovoControlTemplates } from './ControlTemplates';
import { NovoDynamicFormElement, NovoFieldsetElement, NovoFieldsetHeaderElement } from './DynamicForm';
import { NovoFormExtrasModule } from './extras/FormExtras.module';
import { ControlConfirmModal, ControlPromptModal } from './FieldInteractionModals';
import { NovoFormElement } from './Form';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "@angular/cdk/bidi";
import * as i4 from "@angular/cdk/scrolling";
import * as i5 from "@angular/forms";
import * as i6 from "../radio/Radio";
import * as i7 from "../radio/RadioGroup";
import * as i8 from "../tiles/Tiles";
import * as i9 from "../select/Select";
import * as i10 from "../picker/Picker";
import * as i11 from "../picker/extras/picker-results/PickerResults";
import * as i12 from "../picker/extras/entity-picker-results/EntityPickerResults";
import * as i13 from "../picker/extras/checklist-picker-results/ChecklistPickerResults";
import * as i14 from "../picker/extras/grouped-multi-picker-results/GroupedMultiPickerResults";
import * as i15 from "../picker/extras/distributionlist-picker-results/DistributionListPickerResults";
import * as i16 from "../picker/extras/workers-comp-codes-picker-results/WorkersCompCodesPickerResults";
import * as i17 from "../picker/extras/skills-picker-results/SkillsSpecialtyPickerResults";
import * as i18 from "../chips/Chip";
import * as i19 from "../chips/Chips";
import * as i20 from "../chips/RowChips";
import * as i21 from "../date-picker/DatePicker";
import * as i22 from "../date-picker/DatePickerInput";
import * as i23 from "../date-picker/DateRangeInput";
import * as i24 from "../date-picker/MultiDateInput";
import * as i25 from "../date-picker/month-view/month-view.component";
import * as i26 from "../date-picker/month-select/month-select.component";
import * as i27 from "../date-picker/year-select/year-select.component";
import * as i28 from "../date-picker/calendar/calendar.component";
import * as i29 from "../time-picker/TimePicker";
import * as i30 from "../time-picker/TimePickerInput";
import * as i31 from "../ckeditor/CKEditor";
import * as i32 from "./extras/address/Address";
import * as i33 from "./extras/checkbox/Checkbox";
import * as i34 from "./extras/checkbox/CheckList";
import * as i35 from "./extras/file/FileInput";
import * as i36 from "../quick-note/QuickNote";
import * as i37 from "../quick-note/extras/quick-note-results/QuickNoteResults";
import * as i38 from "../date-time-picker/DateTimePicker";
import * as i39 from "../date-time-picker/DateTimePickerInput";
import * as i40 from "../header/Header";
import * as i41 from "../tooltip/Tooltip.directive";
import * as i42 from "../dragula/Dragula";
import * as i43 from "angular-imask";
import * as i44 from "angular2-text-mask";
import * as i45 from "../tip-well/TipWell";
import * as i46 from "../modal/modal.component";
import * as i47 from "../button/Button";
import * as i48 from "../ace-editor/AceEditor";
import * as i49 from "../common/novo-template/novo-template.directive";
export class NovoFormModule {
}
NovoFormModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoFormModule });
NovoFormModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoFormModule_Factory(t) { return new (t || NovoFormModule)(); }, providers: [NovoTemplateService], imports: [[
            CommonModule,
            OverlayModule,
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
            IMaskDirectiveModule,
            TextMaskModule,
            NovoTipWellModule,
            NovoModalModule,
            NovoButtonModule,
            NovoAceEditorModule,
            NovoCommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoFormModule, { declarations: [NovoAutoSize,
        NovoControlElement,
        NovoDynamicFormElement,
        NovoFormElement,
        NovoFieldsetElement,
        NovoFieldsetHeaderElement,
        ControlConfirmModal,
        ControlPromptModal,
        NovoControlGroup,
        NovoControlTemplates], imports: [CommonModule,
        OverlayModule,
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
        IMaskDirectiveModule,
        TextMaskModule,
        NovoTipWellModule,
        NovoModalModule,
        NovoButtonModule,
        NovoAceEditorModule,
        NovoCommonModule], exports: [NovoAutoSize,
        NovoDynamicFormElement,
        NovoControlElement,
        NovoFormElement,
        NovoFieldsetHeaderElement,
        NovoControlGroup,
        NovoControlTemplates] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoFormModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    OverlayModule,
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
                    IMaskDirectiveModule,
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
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(NovoControlGroup, [i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.CdkConnectedOverlay, i2.CdkOverlayOrigin, i3.Dir, i4.CdkScrollable, i4.CdkFixedSizeVirtualScroll, i4.CdkVirtualForOf, i4.CdkVirtualScrollViewport, i5.ɵangular_packages_forms_forms_y, i5.NgSelectOption, i5.ɵangular_packages_forms_forms_x, i5.DefaultValueAccessor, i5.NumberValueAccessor, i5.RangeValueAccessor, i5.CheckboxControlValueAccessor, i5.SelectControlValueAccessor, i5.SelectMultipleControlValueAccessor, i5.RadioControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.RequiredValidator, i5.MinLengthValidator, i5.MaxLengthValidator, i5.PatternValidator, i5.CheckboxRequiredValidator, i5.EmailValidator, i5.FormControlDirective, i5.FormGroupDirective, i5.FormControlName, i5.FormGroupName, i5.FormArrayName, i6.NovoRadioElement, i7.NovoRadioGroup, i8.NovoTilesElement, i9.NovoSelectElement, i10.NovoPickerElement, i11.PickerResults, i12.EntityPickerResult, i12.EntityPickerResults, i13.ChecklistPickerResults, i14.GroupedMultiPickerResults, i15.DistributionListPickerResults, i16.WorkersCompCodesPickerResults, i17.SkillsSpecialtyPickerResults, i18.NovoChipElement, i19.NovoChipsElement, i20.NovoRowChipElement, i20.NovoRowChipsElement, i21.NovoDatePickerElement, i22.NovoDatePickerInputElement, i23.NovoDateRangeInputElement, i24.NovoMultiDateInputElement, i25.NovoMonthViewElement, i26.NovoMonthSelectElement, i27.NovoYearSelectElement, i28.NovoCalendarElement, i29.NovoTimePickerElement, i30.NovoTimePickerInputElement, i31.NovoCKEditorElement, i32.NovoAddressElement, i33.NovoCheckboxElement, i34.NovoCheckListElement, i35.NovoFileInputElement, i36.QuickNoteElement, i37.QuickNoteResults, i38.NovoDateTimePickerElement, i39.NovoDateTimePickerInputElement, i40.NovoHeaderComponent, i40.NovoUtilActionComponent, i40.NovoUtilsComponent, i40.NovoHeaderSpacer, i41.TooltipDirective, i42.NovoDragulaElement, i43.IMaskDirective, i44.MaskedInputDirective, i45.NovoTipWellElement, i46.NovoModalElement, i46.NovoModalNotificationElement, i47.NovoButtonElement, i48.NovoAceEditor, i49.NovoTemplate, NovoAutoSize,
    NovoControlElement,
    NovoDynamicFormElement,
    NovoFormElement,
    NovoFieldsetElement,
    NovoFieldsetHeaderElement,
    ControlConfirmModal,
    ControlPromptModal,
    NovoControlGroup,
    NovoControlTemplates], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0Zvcm0ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELFNBQVM7QUFDVCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFN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ZTtvQkFDZixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLG9CQUFvQjtvQkFDcEIsb0JBQW9CO29CQUNwQixzQkFBc0I7b0JBQ3RCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQix3QkFBd0I7b0JBQ3hCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLG9CQUFvQjtvQkFDcEIsY0FBYztvQkFDZCxpQkFBaUI7b0JBQ2pCLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLGdCQUFnQjtpQkFDakI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLFlBQVk7b0JBQ1osa0JBQWtCO29CQUNsQixzQkFBc0I7b0JBQ3RCLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQix5QkFBeUI7b0JBQ3pCLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osc0JBQXNCO29CQUN0QixrQkFBa0I7b0JBQ2xCLGVBQWU7b0JBQ2YseUJBQXlCO29CQUN6QixnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtpQkFDckI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDakM7O3VCQWJHLGdCQUFnQiw0b0VBUmhCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElNYXNrRGlyZWN0aXZlTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1pbWFzayc7XG4vLyBWZW5kb3JcbmltcG9ydCB7IFRleHRNYXNrTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdGV4dC1tYXNrJztcbmltcG9ydCB7IE5vdm9Db21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9BY2VFZGl0b3JNb2R1bGUgfSBmcm9tICcuLy4uL2FjZS1lZGl0b3IvQWNlRWRpdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi8uLi9idXR0b24vQnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvQ2hpcHNNb2R1bGUgfSBmcm9tICcuLy4uL2NoaXBzL0NoaXBzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTm92b0NLRWRpdG9yTW9kdWxlIH0gZnJvbSAnLi8uLi9ja2VkaXRvci9DS0VkaXRvci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0RhdGVQaWNrZXJNb2R1bGUgfSBmcm9tICcuLy4uL2RhdGUtcGlja2VyL0RhdGVQaWNrZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9EYXRlVGltZVBpY2tlck1vZHVsZSB9IGZyb20gJy4vLi4vZGF0ZS10aW1lLXBpY2tlci9EYXRlVGltZVBpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0RyYWd1bGFNb2R1bGUgfSBmcm9tICcuLy4uL2RyYWd1bGEvRHJhZ3VsYS5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0hlYWRlck1vZHVsZSB9IGZyb20gJy4vLi4vaGVhZGVyL0hlYWRlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b01vZGFsTW9kdWxlIH0gZnJvbSAnLi8uLi9tb2RhbC9tb2RhbC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1BpY2tlck1vZHVsZSB9IGZyb20gJy4vLi4vcGlja2VyL1BpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1F1aWNrTm90ZU1vZHVsZSB9IGZyb20gJy4vLi4vcXVpY2stbm90ZS9RdWlja05vdGUubW9kdWxlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b1JhZGlvTW9kdWxlIH0gZnJvbSAnLi8uLi9yYWRpby9SYWRpby5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1NlbGVjdE1vZHVsZSB9IGZyb20gJy4vLi4vc2VsZWN0L1NlbGVjdC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1RpbGVzTW9kdWxlIH0gZnJvbSAnLi8uLi90aWxlcy9UaWxlcy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1RpbWVQaWNrZXJNb2R1bGUgfSBmcm9tICcuLy4uL3RpbWUtcGlja2VyL1RpbWVQaWNrZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UaXBXZWxsTW9kdWxlIH0gZnJvbSAnLi8uLi90aXAtd2VsbC9UaXBXZWxsLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4vLi4vdG9vbHRpcC9Ub29sdGlwLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvQXV0b1NpemUsIE5vdm9Db250cm9sRWxlbWVudCB9IGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgeyBOb3ZvQ29udHJvbEdyb3VwIH0gZnJvbSAnLi9Db250cm9sR3JvdXAnO1xuaW1wb3J0IHsgTm92b0NvbnRyb2xUZW1wbGF0ZXMgfSBmcm9tICcuL0NvbnRyb2xUZW1wbGF0ZXMnO1xuaW1wb3J0IHsgTm92b0R5bmFtaWNGb3JtRWxlbWVudCwgTm92b0ZpZWxkc2V0RWxlbWVudCwgTm92b0ZpZWxkc2V0SGVhZGVyRWxlbWVudCB9IGZyb20gJy4vRHluYW1pY0Zvcm0nO1xuaW1wb3J0IHsgTm92b0Zvcm1FeHRyYXNNb2R1bGUgfSBmcm9tICcuL2V4dHJhcy9Gb3JtRXh0cmFzLm1vZHVsZSc7XG5pbXBvcnQgeyBDb250cm9sQ29uZmlybU1vZGFsLCBDb250cm9sUHJvbXB0TW9kYWwgfSBmcm9tICcuL0ZpZWxkSW50ZXJhY3Rpb25Nb2RhbHMnO1xuaW1wb3J0IHsgTm92b0Zvcm1FbGVtZW50IH0gZnJvbSAnLi9Gb3JtJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTm92b1JhZGlvTW9kdWxlLFxuICAgIE5vdm9UaWxlc01vZHVsZSxcbiAgICBOb3ZvU2VsZWN0TW9kdWxlLFxuICAgIE5vdm9QaWNrZXJNb2R1bGUsXG4gICAgTm92b0NoaXBzTW9kdWxlLFxuICAgIE5vdm9EYXRlUGlja2VyTW9kdWxlLFxuICAgIE5vdm9UaW1lUGlja2VyTW9kdWxlLFxuICAgIE5vdm9Ob3ZvQ0tFZGl0b3JNb2R1bGUsXG4gICAgTm92b0Zvcm1FeHRyYXNNb2R1bGUsXG4gICAgTm92b1F1aWNrTm90ZU1vZHVsZSxcbiAgICBOb3ZvRGF0ZVRpbWVQaWNrZXJNb2R1bGUsXG4gICAgTm92b0hlYWRlck1vZHVsZSxcbiAgICBOb3ZvVG9vbHRpcE1vZHVsZSxcbiAgICBOb3ZvRHJhZ3VsYU1vZHVsZSxcbiAgICBJTWFza0RpcmVjdGl2ZU1vZHVsZSxcbiAgICBUZXh0TWFza01vZHVsZSxcbiAgICBOb3ZvVGlwV2VsbE1vZHVsZSxcbiAgICBOb3ZvTW9kYWxNb2R1bGUsXG4gICAgTm92b0J1dHRvbk1vZHVsZSxcbiAgICBOb3ZvQWNlRWRpdG9yTW9kdWxlLFxuICAgIE5vdm9Db21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5vdm9BdXRvU2l6ZSxcbiAgICBOb3ZvQ29udHJvbEVsZW1lbnQsXG4gICAgTm92b0R5bmFtaWNGb3JtRWxlbWVudCxcbiAgICBOb3ZvRm9ybUVsZW1lbnQsXG4gICAgTm92b0ZpZWxkc2V0RWxlbWVudCxcbiAgICBOb3ZvRmllbGRzZXRIZWFkZXJFbGVtZW50LFxuICAgIENvbnRyb2xDb25maXJtTW9kYWwsXG4gICAgQ29udHJvbFByb21wdE1vZGFsLFxuICAgIE5vdm9Db250cm9sR3JvdXAsXG4gICAgTm92b0NvbnRyb2xUZW1wbGF0ZXMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOb3ZvQXV0b1NpemUsXG4gICAgTm92b0R5bmFtaWNGb3JtRWxlbWVudCxcbiAgICBOb3ZvQ29udHJvbEVsZW1lbnQsXG4gICAgTm92b0Zvcm1FbGVtZW50LFxuICAgIE5vdm9GaWVsZHNldEhlYWRlckVsZW1lbnQsXG4gICAgTm92b0NvbnRyb2xHcm91cCxcbiAgICBOb3ZvQ29udHJvbFRlbXBsYXRlcyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbTm92b1RlbXBsYXRlU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Gb3JtTW9kdWxlIHt9XG4iXX0=