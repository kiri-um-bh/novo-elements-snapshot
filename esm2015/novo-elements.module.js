// NG2
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NovoAceEditorModule } from './elements/ace-editor/AceEditor.module';
import { NovoAsideModule } from './elements/aside/aside.module';
import { NovoAvatarModule } from './elements/avatar/Avatar.module';
import { NovoBreadcrumbModule } from './elements/breadcrumbs/Breadcrumb.module';
import { NovoButtonModule } from './elements/button/Button.module';
import { NovoCalendarModule } from './elements/calendar/Calendar.module';
import { NovoCardModule } from './elements/card/Card.module';
import { NovoCategoryDropdownModule } from './elements/category-dropdown/CategoryDropdown.module';
import { NovoChipsModule } from './elements/chips/Chips.module';
import { NovoNovoCKEditorModule } from './elements/ckeditor/CKEditor.module';
import { NovoColorPickerModule } from './elements/color-picker/color-picker.module';
import { NovoCommonModule } from './elements/common/common.module';
import { NovoDataTableModule } from './elements/data-table/data-table.module';
import { NovoDatePickerModule } from './elements/date-picker/DatePicker.module';
import { NovoDateTimePickerModule } from './elements/date-time-picker/DateTimePicker.module';
import { NovoDividerModule } from './elements/divider/divider.module';
import { NovoDragulaModule } from './elements/dragula/Dragula.module';
import { NovoDragulaService } from './elements/dragula/DragulaService';
import { NovoDropdownModule } from './elements/dropdown/Dropdown.module';
import { NovoExpansionModule } from './elements/expansion/expansion.module';
import { NovoFieldModule } from './elements/field/field.module';
import { NovoFlexModule } from './elements/flex/Flex.module';
import { NovoFormExtrasModule } from './elements/form/extras/FormExtras.module';
import { NovoFormModule } from './elements/form/Form.module';
import { NovoHeaderModule } from './elements/header/Header.module';
import { NovoIconModule } from './elements/icon/Icon.module';
import { NovoLayoutModule } from './elements/layout/layout.module';
import { NovoListModule } from './elements/list/List.module';
import { NovoLoadingModule } from './elements/loading/Loading.module';
import { NovoMenuModule } from './elements/menu/menu.module';
import { NovoModalModule } from './elements/modal/modal.module';
import { NovoMultiPickerModule } from './elements/multi-picker/MultiPicker.module';
import { NovoNonIdealStateModule } from './elements/non-ideal-state/NonIdealState.module';
import { NovoOverlayModule } from './elements/overlay/Overlay.module';
import { NovoPickerModule } from './elements/picker/Picker.module';
import { GooglePlacesModule } from './elements/places/places.module';
import { GooglePlacesService } from './elements/places/places.service';
import { NovoPopOverModule } from './elements/popover/PopOver.module';
import { NovoProgressModule } from './elements/progress/Progress.module';
import { NovoQuickNoteModule } from './elements/quick-note/QuickNote.module';
import { NovoRadioModule } from './elements/radio/Radio.module';
import { NovoSearchBoxModule } from './elements/search/SearchBox.module';
import { NovoSelectModule } from './elements/select/Select.module';
import { NovoSimpleTableModule } from './elements/simple-table/simple-table.module';
import { NovoSliderModule } from './elements/slider/Slider.module';
import { NovoStepperModule } from './elements/stepper/stepper.module';
import { NovoSwitchModule } from './elements/switch/Switch.module';
import { NovoTabbedGroupPickerModule } from './elements/tabbed-group-picker/TabbedGroupPicker.module';
import { NovoTableExtrasModule } from './elements/table/extras/TableExtras.module';
import { NovoTableModule } from './elements/table/Table.module';
import { NovoTabModule } from './elements/tabs/Tabs.module';
import { NovoTilesModule } from './elements/tiles/Tiles.module';
import { NovoTimePickerModule } from './elements/time-picker/TimePicker.module';
import { NovoTipWellModule } from './elements/tip-well/TipWell.module';
import { NovoToastModule } from './elements/toast/Toast.module';
import { NovoTooltipModule } from './elements/tooltip/Tooltip.module';
import { UnlessModule } from './elements/unless/Unless.module';
import { NovoValueModule } from './elements/value/Value.module';
// APP
import { NovoPipesModule } from './pipes/Pipes.module';
import { DateFormatService } from './services/date-format/DateFormat';
import { BrowserGlobalRef, GlobalRef } from './services/global/global.service';
import { NovoLabelService } from './services/novo-label-service';
import { OptionsService } from './services/options/OptionsService';
import { LocalStorageService } from './services/storage/storage.service';
import { ComponentUtils } from './utils/component-utils/ComponentUtils';
import { FormUtils } from './utils/form-utils/FormUtils';
import * as i0 from "@angular/core";
export class NovoElementsModule {
}
NovoElementsModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoElementsModule });
NovoElementsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoElementsModule_Factory(t) { return new (t || NovoElementsModule)(); }, providers: [
        { provide: ComponentUtils, useClass: ComponentUtils },
        { provide: DateFormatService, useClass: DateFormatService },
        { provide: NovoLabelService, useClass: NovoLabelService },
        { provide: NovoDragulaService, useClass: NovoDragulaService },
        { provide: GooglePlacesService, useClass: GooglePlacesService },
        { provide: GlobalRef, useClass: BrowserGlobalRef },
        { provide: LocalStorageService, useClass: LocalStorageService },
        { provide: OptionsService, useClass: OptionsService },
        { provide: FormUtils, useClass: FormUtils },
    ], imports: [[ReactiveFormsModule], NovoAsideModule,
        NovoAvatarModule,
        NovoPipesModule,
        NovoButtonModule,
        NovoLoadingModule,
        NovoCardModule,
        NovoCalendarModule,
        NovoFlexModule,
        NovoLayoutModule,
        NovoDividerModule,
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
        NovoProgressModule,
        NovoOverlayModule,
        GooglePlacesModule,
        NovoValueModule,
        NovoAceEditorModule,
        NovoIconModule,
        NovoExpansionModule,
        UnlessModule,
        NovoCommonModule,
        NovoStepperModule,
        ScrollingModule,
        NovoTabbedGroupPickerModule,
        NovoNonIdealStateModule,
        NovoBreadcrumbModule,
        NovoFieldModule,
        NovoColorPickerModule,
        NovoMenuModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoElementsModule, { imports: [ReactiveFormsModule], exports: [NovoAsideModule,
        NovoAvatarModule,
        NovoPipesModule,
        NovoButtonModule,
        NovoLoadingModule,
        NovoCardModule,
        NovoCalendarModule,
        NovoFlexModule,
        NovoLayoutModule,
        NovoDividerModule,
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
        NovoProgressModule,
        NovoOverlayModule,
        GooglePlacesModule,
        NovoValueModule,
        NovoAceEditorModule,
        NovoIconModule,
        NovoExpansionModule,
        UnlessModule,
        NovoCommonModule,
        NovoStepperModule,
        ScrollingModule,
        NovoTabbedGroupPickerModule,
        NovoNonIdealStateModule,
        NovoBreadcrumbModule,
        NovoFieldModule,
        NovoColorPickerModule,
        NovoMenuModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoElementsModule, [{
        type: NgModule,
        args: [{
                imports: [ReactiveFormsModule],
                exports: [
                    NovoAsideModule,
                    NovoAvatarModule,
                    NovoPipesModule,
                    NovoButtonModule,
                    NovoLoadingModule,
                    NovoCardModule,
                    NovoCalendarModule,
                    NovoFlexModule,
                    NovoLayoutModule,
                    NovoDividerModule,
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
                    NovoProgressModule,
                    NovoOverlayModule,
                    GooglePlacesModule,
                    NovoValueModule,
                    NovoAceEditorModule,
                    NovoIconModule,
                    NovoExpansionModule,
                    UnlessModule,
                    NovoCommonModule,
                    NovoStepperModule,
                    ScrollingModule,
                    NovoTabbedGroupPickerModule,
                    NovoNonIdealStateModule,
                    NovoBreadcrumbModule,
                    NovoFieldModule,
                    NovoColorPickerModule,
                    NovoMenuModule,
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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm92by1lbGVtZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJub3ZvLWVsZW1lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNB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QUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTtvQkFDN0QsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFO29CQUMvRCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO29CQUNsRCxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7b0JBQy9ELEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFO29CQUNyRCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTtpQkFDNUM7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgU2Nyb2xsaW5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5vdm9BY2VFZGl0b3JNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2FjZS1lZGl0b3IvQWNlRWRpdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvQXNpZGVNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2FzaWRlL2FzaWRlLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvQXZhdGFyTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9hdmF0YXIvQXZhdGFyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvQnJlYWRjcnVtYk1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvYnJlYWRjcnVtYnMvQnJlYWRjcnVtYi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvYnV0dG9uL0J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0NhbGVuZGFyTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9jYWxlbmRhci9DYWxlbmRhci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0NhcmRNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2NhcmQvQ2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0NhdGVnb3J5RHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2NhdGVnb3J5LWRyb3Bkb3duL0NhdGVnb3J5RHJvcGRvd24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9DaGlwc01vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvY2hpcHMvQ2hpcHMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Ob3ZvQ0tFZGl0b3JNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2NrZWRpdG9yL0NLRWRpdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvQ29sb3JQaWNrZXJNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2NvbG9yLXBpY2tlci9jb2xvci1waWNrZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Db21tb25Nb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2NvbW1vbi9jb21tb24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0RhdGVQaWNrZXJNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2RhdGUtcGlja2VyL0RhdGVQaWNrZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9EYXRlVGltZVBpY2tlck1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvZGF0ZS10aW1lLXBpY2tlci9EYXRlVGltZVBpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0RpdmlkZXJNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2RpdmlkZXIvZGl2aWRlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0RyYWd1bGFNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2RyYWd1bGEvRHJhZ3VsYS5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0RyYWd1bGFTZXJ2aWNlIH0gZnJvbSAnLi9lbGVtZW50cy9kcmFndWxhL0RyYWd1bGFTZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9Ecm9wZG93bk1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvZHJvcGRvd24vRHJvcGRvd24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9FeHBhbnNpb25Nb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2V4cGFuc2lvbi9leHBhbnNpb24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9GaWVsZE1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvZmllbGQvZmllbGQubW9kdWxlJztcbmltcG9ydCB7IE5vdm9GbGV4TW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9mbGV4L0ZsZXgubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Gb3JtRXh0cmFzTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9mb3JtL2V4dHJhcy9Gb3JtRXh0cmFzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRm9ybU1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvZm9ybS9Gb3JtLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvSGVhZGVyTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9oZWFkZXIvSGVhZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvSWNvbk1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvaWNvbi9JY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9sYXlvdXQvbGF5b3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTGlzdE1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvbGlzdC9MaXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTG9hZGluZ01vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvbG9hZGluZy9Mb2FkaW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTWVudU1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvbWVudS9tZW51Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTW9kYWxNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL21vZGFsL21vZGFsLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTXVsdGlQaWNrZXJNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL211bHRpLXBpY2tlci9NdWx0aVBpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b05vbklkZWFsU3RhdGVNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL25vbi1pZGVhbC1zdGF0ZS9Ob25JZGVhbFN0YXRlLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvT3ZlcmxheU1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvb3ZlcmxheS9PdmVybGF5Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvUGlja2VyTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9waWNrZXIvUGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBHb29nbGVQbGFjZXNNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3BsYWNlcy9wbGFjZXMubW9kdWxlJztcbmltcG9ydCB7IEdvb2dsZVBsYWNlc1NlcnZpY2UgfSBmcm9tICcuL2VsZW1lbnRzL3BsYWNlcy9wbGFjZXMuc2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvUG9wT3Zlck1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvcG9wb3Zlci9Qb3BPdmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvUHJvZ3Jlc3NNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3Byb2dyZXNzL1Byb2dyZXNzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvUXVpY2tOb3RlTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9xdWljay1ub3RlL1F1aWNrTm90ZS5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1JhZGlvTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9yYWRpby9SYWRpby5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1NlYXJjaEJveE1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvc2VhcmNoL1NlYXJjaEJveC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1NlbGVjdE1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvc2VsZWN0L1NlbGVjdC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1NpbXBsZVRhYmxlTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9zaW1wbGUtdGFibGUvc2ltcGxlLXRhYmxlLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvU2xpZGVyTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9zbGlkZXIvU2xpZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvU3RlcHBlck1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvc3RlcHBlci9zdGVwcGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvU3dpdGNoTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9zd2l0Y2gvU3dpdGNoLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVGFiYmVkR3JvdXBQaWNrZXJNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3RhYmJlZC1ncm91cC1waWNrZXIvVGFiYmVkR3JvdXBQaWNrZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UYWJsZUV4dHJhc01vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvdGFibGUvZXh0cmFzL1RhYmxlRXh0cmFzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVGFibGVNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3RhYmxlL1RhYmxlLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVGFiTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy90YWJzL1RhYnMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UaWxlc01vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvdGlsZXMvVGlsZXMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UaW1lUGlja2VyTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy90aW1lLXBpY2tlci9UaW1lUGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVGlwV2VsbE1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvdGlwLXdlbGwvVGlwV2VsbC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1RvYXN0TW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy90b2FzdC9Ub2FzdC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3Rvb2x0aXAvVG9vbHRpcC5tb2R1bGUnO1xuaW1wb3J0IHsgVW5sZXNzTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy91bmxlc3MvVW5sZXNzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVmFsdWVNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3ZhbHVlL1ZhbHVlLm1vZHVsZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9QaXBlc01vZHVsZSB9IGZyb20gJy4vcGlwZXMvUGlwZXMubW9kdWxlJztcbmltcG9ydCB7IERhdGVGb3JtYXRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0JztcbmltcG9ydCB7IEJyb3dzZXJHbG9iYWxSZWYsIEdsb2JhbFJlZiB9IGZyb20gJy4vc2VydmljZXMvZ2xvYmFsL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBPcHRpb25zU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvb3B0aW9ucy9PcHRpb25zU2VydmljZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zdG9yYWdlL3N0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4vdXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzJztcbmltcG9ydCB7IEZvcm1VdGlscyB9IGZyb20gJy4vdXRpbHMvZm9ybS11dGlscy9Gb3JtVXRpbHMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBOb3ZvQXNpZGVNb2R1bGUsXG4gICAgTm92b0F2YXRhck1vZHVsZSxcbiAgICBOb3ZvUGlwZXNNb2R1bGUsXG4gICAgTm92b0J1dHRvbk1vZHVsZSxcbiAgICBOb3ZvTG9hZGluZ01vZHVsZSxcbiAgICBOb3ZvQ2FyZE1vZHVsZSxcbiAgICBOb3ZvQ2FsZW5kYXJNb2R1bGUsXG4gICAgTm92b0ZsZXhNb2R1bGUsXG4gICAgTm92b0xheW91dE1vZHVsZSxcbiAgICBOb3ZvRGl2aWRlck1vZHVsZSxcbiAgICBOb3ZvVG9hc3RNb2R1bGUsXG4gICAgTm92b1Rvb2x0aXBNb2R1bGUsXG4gICAgTm92b0hlYWRlck1vZHVsZSxcbiAgICBOb3ZvVGFiTW9kdWxlLFxuICAgIE5vdm9UaWxlc01vZHVsZSxcbiAgICBOb3ZvTW9kYWxNb2R1bGUsXG4gICAgTm92b1F1aWNrTm90ZU1vZHVsZSxcbiAgICBOb3ZvUmFkaW9Nb2R1bGUsXG4gICAgTm92b0Ryb3Bkb3duTW9kdWxlLFxuICAgIE5vdm9TZWxlY3RNb2R1bGUsXG4gICAgTm92b0xpc3RNb2R1bGUsXG4gICAgTm92b1N3aXRjaE1vZHVsZSxcbiAgICBOb3ZvRHJhZ3VsYU1vZHVsZSxcbiAgICBOb3ZvU2xpZGVyTW9kdWxlLFxuICAgIE5vdm9QaWNrZXJNb2R1bGUsXG4gICAgTm92b0NoaXBzTW9kdWxlLFxuICAgIE5vdm9EYXRlUGlja2VyTW9kdWxlLFxuICAgIE5vdm9UaW1lUGlja2VyTW9kdWxlLFxuICAgIE5vdm9EYXRlVGltZVBpY2tlck1vZHVsZSxcbiAgICBOb3ZvTm92b0NLRWRpdG9yTW9kdWxlLFxuICAgIE5vdm9UaXBXZWxsTW9kdWxlLFxuICAgIE5vdm9TaW1wbGVUYWJsZU1vZHVsZSxcbiAgICBOb3ZvVGFibGVNb2R1bGUsXG4gICAgTm92b1RhYmxlRXh0cmFzTW9kdWxlLFxuICAgIE5vdm9Gb3JtTW9kdWxlLFxuICAgIE5vdm9Gb3JtRXh0cmFzTW9kdWxlLFxuICAgIE5vdm9DYXRlZ29yeURyb3Bkb3duTW9kdWxlLFxuICAgIE5vdm9NdWx0aVBpY2tlck1vZHVsZSxcbiAgICBOb3ZvUG9wT3Zlck1vZHVsZSxcbiAgICBOb3ZvRGF0YVRhYmxlTW9kdWxlLFxuICAgIE5vdm9TZWFyY2hCb3hNb2R1bGUsXG4gICAgTm92b1Byb2dyZXNzTW9kdWxlLFxuICAgIE5vdm9PdmVybGF5TW9kdWxlLFxuICAgIEdvb2dsZVBsYWNlc01vZHVsZSxcbiAgICBOb3ZvVmFsdWVNb2R1bGUsXG4gICAgTm92b0FjZUVkaXRvck1vZHVsZSxcbiAgICBOb3ZvSWNvbk1vZHVsZSxcbiAgICBOb3ZvRXhwYW5zaW9uTW9kdWxlLFxuICAgIFVubGVzc01vZHVsZSxcbiAgICBOb3ZvQ29tbW9uTW9kdWxlLFxuICAgIE5vdm9TdGVwcGVyTW9kdWxlLFxuICAgIFNjcm9sbGluZ01vZHVsZSxcbiAgICBOb3ZvVGFiYmVkR3JvdXBQaWNrZXJNb2R1bGUsXG4gICAgTm92b05vbklkZWFsU3RhdGVNb2R1bGUsXG4gICAgTm92b0JyZWFkY3J1bWJNb2R1bGUsXG4gICAgTm92b0ZpZWxkTW9kdWxlLFxuICAgIE5vdm9Db2xvclBpY2tlck1vZHVsZSxcbiAgICBOb3ZvTWVudU1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBDb21wb25lbnRVdGlscywgdXNlQ2xhc3M6IENvbXBvbmVudFV0aWxzIH0sXG4gICAgeyBwcm92aWRlOiBEYXRlRm9ybWF0U2VydmljZSwgdXNlQ2xhc3M6IERhdGVGb3JtYXRTZXJ2aWNlIH0sXG4gICAgeyBwcm92aWRlOiBOb3ZvTGFiZWxTZXJ2aWNlLCB1c2VDbGFzczogTm92b0xhYmVsU2VydmljZSB9LFxuICAgIHsgcHJvdmlkZTogTm92b0RyYWd1bGFTZXJ2aWNlLCB1c2VDbGFzczogTm92b0RyYWd1bGFTZXJ2aWNlIH0sXG4gICAgeyBwcm92aWRlOiBHb29nbGVQbGFjZXNTZXJ2aWNlLCB1c2VDbGFzczogR29vZ2xlUGxhY2VzU2VydmljZSB9LFxuICAgIHsgcHJvdmlkZTogR2xvYmFsUmVmLCB1c2VDbGFzczogQnJvd3Nlckdsb2JhbFJlZiB9LFxuICAgIHsgcHJvdmlkZTogTG9jYWxTdG9yYWdlU2VydmljZSwgdXNlQ2xhc3M6IExvY2FsU3RvcmFnZVNlcnZpY2UgfSxcbiAgICB7IHByb3ZpZGU6IE9wdGlvbnNTZXJ2aWNlLCB1c2VDbGFzczogT3B0aW9uc1NlcnZpY2UgfSxcbiAgICB7IHByb3ZpZGU6IEZvcm1VdGlscywgdXNlQ2xhc3M6IEZvcm1VdGlscyB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRWxlbWVudHNNb2R1bGUge31cbiJdfQ==