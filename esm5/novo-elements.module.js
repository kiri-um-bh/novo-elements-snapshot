/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
// APP
import { NovoPipesModule } from './pipes/Pipes.module';
import { NovoButtonModule } from './elements/button/Button.module';
import { NovoAceEditorModule } from './elements/ace-editor/AceEditor.module';
import { NovoLoadingModule } from './elements/loading/Loading.module';
import { NovoCardModule } from './elements/card/Card.module';
import { NovoCalendarModule } from './elements/calendar/Calendar.module';
import { NovoToastModule } from './elements/toast/Toast.module';
import { NovoTooltipModule } from './elements/tooltip/Tooltip.module';
import { NovoHeaderModule } from './elements/header/Header.module';
import { NovoTabModule } from './elements/tabs/Tabs.module';
import { NovoTilesModule } from './elements/tiles/Tiles.module';
import { NovoModalModule } from './elements/modal/Modal.module';
import { NovoQuickNoteModule } from './elements/quick-note/QuickNote.module';
import { NovoRadioModule } from './elements/radio/Radio.module';
import { NovoDropdownModule } from './elements/dropdown/Dropdown.module';
import { NovoSelectModule } from './elements/select/Select.module';
import { NovoListModule } from './elements/list/List.module';
import { NovoSwitchModule } from './elements/switch/Switch.module';
import { NovoDragulaModule } from './elements/dragula/Dragula.module';
import { NovoSliderModule } from './elements/slider/Slider.module';
import { NovoPickerModule } from './elements/picker/Picker.module';
import { NovoChipsModule } from './elements/chips/Chips.module';
import { NovoDatePickerModule } from './elements/date-picker/DatePicker.module';
import { NovoTimePickerModule } from './elements/time-picker/TimePicker.module';
import { NovoDateTimePickerModule } from './elements/date-time-picker/DateTimePicker.module';
import { NovoNovoCKEditorModule } from './elements/ckeditor/CKEditor.module';
import { NovoTipWellModule } from './elements/tip-well/TipWell.module';
import { NovoSimpleTableModule } from './elements/simple-table/simple-table.module';
import { NovoTableModule } from './elements/table/Table.module';
import { NovoTableExtrasModule } from './elements/table/extras/TableExtras.module';
import { NovoFormModule } from './elements/form/Form.module';
import { NovoFormExtrasModule } from './elements/form/extras/FormExtras.module';
import { NovoCategoryDropdownModule } from './elements/category-dropdown/CategoryDropdown.module';
import { NovoMultiPickerModule } from './elements/multi-picker/MultiPicker.module';
import { NovoPopOverModule } from './elements/popover/PopOver.module';
import { NovoSearchBoxModule } from './elements/search/SearchBox.module';
import { GooglePlacesModule } from './elements/places/places.module';
import { NovoValueModule } from './elements/value/Value.module';
import { NovoDataTableModule } from './elements/data-table/data-table.module';
import { NovoIconModule } from './elements/icon/Icon.module';
import { NovoExpansionModule } from './elements/expansion/expansion.module';
import { NovoStepperModule } from './elements/stepper/stepper.module';
import { UnlessModule } from './elements/unless/Unless.module';
import { NovoOverlayModule } from './elements/overlay/Overlay.module';
import { DateFormatService } from './services/date-format/DateFormat';
import { NovoLabelService } from './services/novo-label-service';
import { NovoDragulaService } from './elements/dragula/DragulaService';
import { GooglePlacesService } from './elements/places/places.service';
import { GlobalRef, BrowserGlobalRef } from './services/global/global.service';
import { LocalStorageService } from './services/storage/storage.service';
import { ComponentUtils } from './utils/component-utils/ComponentUtils';
import { FormUtils } from './utils/form-utils/FormUtils';
import { OptionsService } from './services/options/OptionsService';
import { NovoCommonModule } from './elements/common/common.module';
var NovoElementsModule = /** @class */ (function () {
    function NovoElementsModule() {
    }
    NovoElementsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ReactiveFormsModule],
                    exports: [
                        NovoPipesModule,
                        NovoButtonModule,
                        NovoLoadingModule,
                        NovoCardModule,
                        NovoCalendarModule,
                        NovoToastModule,
                        NovoTooltipModule,
                        NovoHeaderModule,
                        NovoTabModule,
                        NovoTilesModule,
                        NovoModalModule,
                        NovoQuickNoteModule,
                        NovoRadioModule,
                        NovoDropdownModule,
                        NovoSelectModule,
                        NovoListModule,
                        NovoSwitchModule,
                        NovoDragulaModule,
                        NovoSliderModule,
                        NovoPickerModule,
                        NovoChipsModule,
                        NovoDatePickerModule,
                        NovoTimePickerModule,
                        NovoDateTimePickerModule,
                        NovoNovoCKEditorModule,
                        NovoTipWellModule,
                        NovoSimpleTableModule,
                        NovoTableModule,
                        NovoTableExtrasModule,
                        NovoFormModule,
                        NovoFormExtrasModule,
                        NovoCategoryDropdownModule,
                        NovoMultiPickerModule,
                        NovoPopOverModule,
                        NovoDataTableModule,
                        NovoSearchBoxModule,
                        NovoOverlayModule,
                        GooglePlacesModule,
                        NovoValueModule,
                        NovoAceEditorModule,
                        NovoIconModule,
                        NovoExpansionModule,
                        UnlessModule,
                        NovoCommonModule,
                        NovoStepperModule,
                        ScrollDispatchModule,
                    ],
                    providers: [
                        { provide: ComponentUtils, useClass: ComponentUtils },
                        { provide: DateFormatService, useClass: DateFormatService },
                        { provide: NovoLabelService, useClass: NovoLabelService },
                        { provide: NovoDragulaService, useClass: NovoDragulaService },
                        { provide: GooglePlacesService, useClass: GooglePlacesService },
                        { provide: GlobalRef, useClass: BrowserGlobalRef },
                        { provide: LocalStorageService, useClass: LocalStorageService },
                        { provide: OptionsService, useClass: OptionsService },
                        { provide: FormUtils, useClass: FormUtils },
                    ],
                },] }
    ];
    return NovoElementsModule;
}());
export { NovoElementsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm92by1lbGVtZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsibm92by1lbGVtZW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUU5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUs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USxFQUFFLGtCQUFrQixFQUFFO3dCQUM3RCxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7d0JBQy9ELEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUU7d0JBQ2xELEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTt3QkFDL0QsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7d0JBQ3JELEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFO3FCQUM1QztpQkFDRjs7SUFDZ0MseUJBQUM7Q0FBQSxBQTlEbEMsSUE4RGtDO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTY3JvbGxEaXNwYXRjaE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvUGlwZXNNb2R1bGUgfSBmcm9tICcuL3BpcGVzL1BpcGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9idXR0b24vQnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvQWNlRWRpdG9yTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9hY2UtZWRpdG9yL0FjZUVkaXRvci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0xvYWRpbmdNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2xvYWRpbmcvTG9hZGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0NhcmRNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2NhcmQvQ2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9jYWxlbmRhci9DYWxlbmRhci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1RvYXN0TW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy90b2FzdC9Ub2FzdC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3Rvb2x0aXAvVG9vbHRpcC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0hlYWRlck1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvaGVhZGVyL0hlYWRlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1RhYk1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvdGFicy9UYWJzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVGlsZXNNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3RpbGVzL1RpbGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTW9kYWxNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL21vZGFsL01vZGFsLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvUXVpY2tOb3RlTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9xdWljay1ub3RlL1F1aWNrTm90ZS5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1JhZGlvTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9yYWRpby9SYWRpby5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0Ryb3Bkb3duTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9kcm9wZG93bi9Ecm9wZG93bi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1NlbGVjdE1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvc2VsZWN0L1NlbGVjdC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0xpc3RNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2xpc3QvTGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1N3aXRjaE1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvc3dpdGNoL1N3aXRjaC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0RyYWd1bGFNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2RyYWd1bGEvRHJhZ3VsYS5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1NsaWRlck1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvc2xpZGVyL1NsaWRlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1BpY2tlck1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvcGlja2VyL1BpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0NoaXBzTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9jaGlwcy9DaGlwcy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0RhdGVQaWNrZXJNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2RhdGUtcGlja2VyL0RhdGVQaWNrZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UaW1lUGlja2VyTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy90aW1lLXBpY2tlci9UaW1lUGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRGF0ZVRpbWVQaWNrZXJNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2RhdGUtdGltZS1waWNrZXIvRGF0ZVRpbWVQaWNrZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Ob3ZvQ0tFZGl0b3JNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2NrZWRpdG9yL0NLRWRpdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVGlwV2VsbE1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvdGlwLXdlbGwvVGlwV2VsbC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1NpbXBsZVRhYmxlTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9zaW1wbGUtdGFibGUvc2ltcGxlLXRhYmxlLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVGFibGVNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3RhYmxlL1RhYmxlLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVGFibGVFeHRyYXNNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3RhYmxlL2V4dHJhcy9UYWJsZUV4dHJhcy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0Zvcm1Nb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2Zvcm0vRm9ybS5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0Zvcm1FeHRyYXNNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2Zvcm0vZXh0cmFzL0Zvcm1FeHRyYXMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9DYXRlZ29yeURyb3Bkb3duTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9jYXRlZ29yeS1kcm9wZG93bi9DYXRlZ29yeURyb3Bkb3duLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTXVsdGlQaWNrZXJNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL211bHRpLXBpY2tlci9NdWx0aVBpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1BvcE92ZXJNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3BvcG92ZXIvUG9wT3Zlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1NlYXJjaEJveE1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvc2VhcmNoL1NlYXJjaEJveC5tb2R1bGUnO1xuaW1wb3J0IHsgR29vZ2xlUGxhY2VzTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9wbGFjZXMvcGxhY2VzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVmFsdWVNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3ZhbHVlL1ZhbHVlLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9kYXRhLXRhYmxlL2RhdGEtdGFibGUubW9kdWxlJztcbmltcG9ydCB7IE5vdm9JY29uTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9pY29uL0ljb24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9FeHBhbnNpb25Nb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2V4cGFuc2lvbi9leHBhbnNpb24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9TdGVwcGVyTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9zdGVwcGVyL3N0ZXBwZXIubW9kdWxlJztcbmltcG9ydCB7IFVubGVzc01vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvdW5sZXNzL1VubGVzcy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b092ZXJsYXlNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL292ZXJsYXkvT3ZlcmxheS5tb2R1bGUnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGUtZm9ybWF0L0RhdGVGb3JtYXQnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9EcmFndWxhU2VydmljZSB9IGZyb20gJy4vZWxlbWVudHMvZHJhZ3VsYS9EcmFndWxhU2VydmljZSc7XG5pbXBvcnQgeyBHb29nbGVQbGFjZXNTZXJ2aWNlIH0gZnJvbSAnLi9lbGVtZW50cy9wbGFjZXMvcGxhY2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgR2xvYmFsUmVmLCBCcm93c2VyR2xvYmFsUmVmIH0gZnJvbSAnLi9zZXJ2aWNlcy9nbG9iYWwvZ2xvYmFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc3RvcmFnZS9zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuL3V0aWxzL2Zvcm0tdXRpbHMvRm9ybVV0aWxzJztcbmltcG9ydCB7IE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9vcHRpb25zL09wdGlvbnNTZXJ2aWNlJztcblxuaW1wb3J0IHsgTm92b0NvbW1vbk1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvY29tbW9uL2NvbW1vbi5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBOb3ZvUGlwZXNNb2R1bGUsXG4gICAgTm92b0J1dHRvbk1vZHVsZSxcbiAgICBOb3ZvTG9hZGluZ01vZHVsZSxcbiAgICBOb3ZvQ2FyZE1vZHVsZSxcbiAgICBOb3ZvQ2FsZW5kYXJNb2R1bGUsXG4gICAgTm92b1RvYXN0TW9kdWxlLFxuICAgIE5vdm9Ub29sdGlwTW9kdWxlLFxuICAgIE5vdm9IZWFkZXJNb2R1bGUsXG4gICAgTm92b1RhYk1vZHVsZSxcbiAgICBOb3ZvVGlsZXNNb2R1bGUsXG4gICAgTm92b01vZGFsTW9kdWxlLFxuICAgIE5vdm9RdWlja05vdGVNb2R1bGUsXG4gICAgTm92b1JhZGlvTW9kdWxlLFxuICAgIE5vdm9Ecm9wZG93bk1vZHVsZSxcbiAgICBOb3ZvU2VsZWN0TW9kdWxlLFxuICAgIE5vdm9MaXN0TW9kdWxlLFxuICAgIE5vdm9Td2l0Y2hNb2R1bGUsXG4gICAgTm92b0RyYWd1bGFNb2R1bGUsXG4gICAgTm92b1NsaWRlck1vZHVsZSxcbiAgICBOb3ZvUGlja2VyTW9kdWxlLFxuICAgIE5vdm9DaGlwc01vZHVsZSxcbiAgICBOb3ZvRGF0ZVBpY2tlck1vZHVsZSxcbiAgICBOb3ZvVGltZVBpY2tlck1vZHVsZSxcbiAgICBOb3ZvRGF0ZVRpbWVQaWNrZXJNb2R1bGUsXG4gICAgTm92b05vdm9DS0VkaXRvck1vZHVsZSxcbiAgICBOb3ZvVGlwV2VsbE1vZHVsZSxcbiAgICBOb3ZvU2ltcGxlVGFibGVNb2R1bGUsXG4gICAgTm92b1RhYmxlTW9kdWxlLFxuICAgIE5vdm9UYWJsZUV4dHJhc01vZHVsZSxcbiAgICBOb3ZvRm9ybU1vZHVsZSxcbiAgICBOb3ZvRm9ybUV4dHJhc01vZHVsZSxcbiAgICBOb3ZvQ2F0ZWdvcnlEcm9wZG93bk1vZHVsZSxcbiAgICBOb3ZvTXVsdGlQaWNrZXJNb2R1bGUsXG4gICAgTm92b1BvcE92ZXJNb2R1bGUsXG4gICAgTm92b0RhdGFUYWJsZU1vZHVsZSxcbiAgICBOb3ZvU2VhcmNoQm94TW9kdWxlLFxuICAgIE5vdm9PdmVybGF5TW9kdWxlLFxuICAgIEdvb2dsZVBsYWNlc01vZHVsZSxcbiAgICBOb3ZvVmFsdWVNb2R1bGUsXG4gICAgTm92b0FjZUVkaXRvck1vZHVsZSxcbiAgICBOb3ZvSWNvbk1vZHVsZSxcbiAgICBOb3ZvRXhwYW5zaW9uTW9kdWxlLFxuICAgIFVubGVzc01vZHVsZSxcbiAgICBOb3ZvQ29tbW9uTW9kdWxlLFxuICAgIE5vdm9TdGVwcGVyTW9kdWxlLFxuICAgIFNjcm9sbERpc3BhdGNoTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IENvbXBvbmVudFV0aWxzLCB1c2VDbGFzczogQ29tcG9uZW50VXRpbHMgfSxcbiAgICB7IHByb3ZpZGU6IERhdGVGb3JtYXRTZXJ2aWNlLCB1c2VDbGFzczogRGF0ZUZvcm1hdFNlcnZpY2UgfSxcbiAgICB7IHByb3ZpZGU6IE5vdm9MYWJlbFNlcnZpY2UsIHVzZUNsYXNzOiBOb3ZvTGFiZWxTZXJ2aWNlIH0sXG4gICAgeyBwcm92aWRlOiBOb3ZvRHJhZ3VsYVNlcnZpY2UsIHVzZUNsYXNzOiBOb3ZvRHJhZ3VsYVNlcnZpY2UgfSxcbiAgICB7IHByb3ZpZGU6IEdvb2dsZVBsYWNlc1NlcnZpY2UsIHVzZUNsYXNzOiBHb29nbGVQbGFjZXNTZXJ2aWNlIH0sXG4gICAgeyBwcm92aWRlOiBHbG9iYWxSZWYsIHVzZUNsYXNzOiBCcm93c2VyR2xvYmFsUmVmIH0sXG4gICAgeyBwcm92aWRlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCB1c2VDbGFzczogTG9jYWxTdG9yYWdlU2VydmljZSB9LFxuICAgIHsgcHJvdmlkZTogT3B0aW9uc1NlcnZpY2UsIHVzZUNsYXNzOiBPcHRpb25zU2VydmljZSB9LFxuICAgIHsgcHJvdmlkZTogRm9ybVV0aWxzLCB1c2VDbGFzczogRm9ybVV0aWxzIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9FbGVtZW50c01vZHVsZSB7fVxuIl19