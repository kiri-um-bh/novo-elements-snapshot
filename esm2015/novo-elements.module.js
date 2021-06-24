// NG2
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
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
import { NovoTabbedGroupPickerModule } from './elements/tabbed-group-picker/TabbedGroupPicker.module';
import { NovoCommonModule } from './elements/common/common.module';
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
    ], imports: [[ReactiveFormsModule], NovoPipesModule,
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
        ScrollingModule,
        NovoTabbedGroupPickerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoElementsModule, { imports: [ReactiveFormsModule], exports: [NovoPipesModule,
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
        ScrollingModule,
        NovoTabbedGroupPickerModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoElementsModule, [{
        type: NgModule,
        args: [{
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
                    ScrollingModule,
                    NovoTabbedGroupPickerModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm92by1lbGVtZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsibm92by1lbGVtZW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE1BQU07QUFDTixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUV0RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFpRW5FLE1BQU0sT0FBTyxrQkFBa0I7O3NEQUFsQixrQkFBa0I7bUhBQWxCLGtCQUFrQixtQkFabEI7UUFDVCxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTtRQUNyRCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7UUFDM0QsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO1FBQ3pELEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTtRQUM3RCxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7UUFDL0QsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTtRQUNsRCxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7UUFDL0QsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7UUFDckQsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUU7S0FDNUMsWUE1RFEsQ0FBQyxtQkFBbUIsQ0FBQyxFQUU1QixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixlQUFlO1FBQ2YsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QixzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsMkJBQTJCO3dGQWNsQixrQkFBa0IsY0E5RG5CLG1CQUFtQixhQUUzQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixlQUFlO1FBQ2YsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QixzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsMkJBQTJCO2tEQWNsQixrQkFBa0I7Y0EvRDlCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDOUIsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixnQkFBZ0I7b0JBQ2hCLGNBQWM7b0JBQ2QsZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLG9CQUFvQjtvQkFDcEIsb0JBQW9CO29CQUNwQix3QkFBd0I7b0JBQ3hCLHNCQUFzQjtvQkFDdEIsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLGVBQWU7b0JBQ2YscUJBQXFCO29CQUNyQixjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIsMEJBQTBCO29CQUMxQixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtvQkFDakIsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsY0FBYztvQkFDZCxtQkFBbUI7b0JBQ25CLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLGVBQWU7b0JBQ2YsMkJBQTJCO2lCQUM1QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7b0JBQ3JELEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRTtvQkFDM0QsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO29CQUN6RCxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUU7b0JBQzdELEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTtvQkFDL0QsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTtvQkFDbEQsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFO29CQUMvRCxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTtvQkFDckQsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUU7aUJBQzVDO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU2Nyb2xsaW5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9QaXBlc01vZHVsZSB9IGZyb20gJy4vcGlwZXMvUGlwZXMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9CdXR0b25Nb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2J1dHRvbi9CdXR0b24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9BY2VFZGl0b3JNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2FjZS1lZGl0b3IvQWNlRWRpdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTG9hZGluZ01vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvbG9hZGluZy9Mb2FkaW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvQ2FyZE1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvY2FyZC9DYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvQ2FsZW5kYXJNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2NhbGVuZGFyL0NhbGVuZGFyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVG9hc3RNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3RvYXN0L1RvYXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvdG9vbHRpcC9Ub29sdGlwLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvSGVhZGVyTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9oZWFkZXIvSGVhZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVGFiTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy90YWJzL1RhYnMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UaWxlc01vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvdGlsZXMvVGlsZXMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Nb2RhbE1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvbW9kYWwvTW9kYWwubW9kdWxlJztcbmltcG9ydCB7IE5vdm9RdWlja05vdGVNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3F1aWNrLW5vdGUvUXVpY2tOb3RlLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvUmFkaW9Nb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3JhZGlvL1JhZGlvLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2Ryb3Bkb3duL0Ryb3Bkb3duLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvU2VsZWN0TW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9zZWxlY3QvU2VsZWN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTGlzdE1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvbGlzdC9MaXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvU3dpdGNoTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9zd2l0Y2gvU3dpdGNoLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRHJhZ3VsYU1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvZHJhZ3VsYS9EcmFndWxhLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvU2xpZGVyTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9zbGlkZXIvU2xpZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvUGlja2VyTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9waWNrZXIvUGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvQ2hpcHNNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2NoaXBzL0NoaXBzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvZGF0ZS1waWNrZXIvRGF0ZVBpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1RpbWVQaWNrZXJNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3RpbWUtcGlja2VyL1RpbWVQaWNrZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9EYXRlVGltZVBpY2tlck1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvZGF0ZS10aW1lLXBpY2tlci9EYXRlVGltZVBpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b05vdm9DS0VkaXRvck1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvY2tlZGl0b3IvQ0tFZGl0b3IubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UaXBXZWxsTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy90aXAtd2VsbC9UaXBXZWxsLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvU2ltcGxlVGFibGVNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3NpbXBsZS10YWJsZS9zaW1wbGUtdGFibGUubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UYWJsZU1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvdGFibGUvVGFibGUubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UYWJsZUV4dHJhc01vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvdGFibGUvZXh0cmFzL1RhYmxlRXh0cmFzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRm9ybU1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvZm9ybS9Gb3JtLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRm9ybUV4dHJhc01vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvZm9ybS9leHRyYXMvRm9ybUV4dHJhcy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0NhdGVnb3J5RHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2NhdGVnb3J5LWRyb3Bkb3duL0NhdGVnb3J5RHJvcGRvd24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9NdWx0aVBpY2tlck1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvbXVsdGktcGlja2VyL011bHRpUGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvUG9wT3Zlck1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvcG9wb3Zlci9Qb3BPdmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvU2VhcmNoQm94TW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9zZWFyY2gvU2VhcmNoQm94Lm1vZHVsZSc7XG5pbXBvcnQgeyBHb29nbGVQbGFjZXNNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3BsYWNlcy9wbGFjZXMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9WYWx1ZU1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvdmFsdWUvVmFsdWUubW9kdWxlJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGVNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0ljb25Nb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2ljb24vSWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0V4cGFuc2lvbk1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvZXhwYW5zaW9uL2V4cGFuc2lvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1N0ZXBwZXJNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3N0ZXBwZXIvc3RlcHBlci5tb2R1bGUnO1xuaW1wb3J0IHsgVW5sZXNzTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy91bmxlc3MvVW5sZXNzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvT3ZlcmxheU1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvb3ZlcmxheS9PdmVybGF5Lm1vZHVsZSc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGF0ZS1mb3JtYXQvRGF0ZUZvcm1hdCc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b0RyYWd1bGFTZXJ2aWNlIH0gZnJvbSAnLi9lbGVtZW50cy9kcmFndWxhL0RyYWd1bGFTZXJ2aWNlJztcbmltcG9ydCB7IEdvb2dsZVBsYWNlc1NlcnZpY2UgfSBmcm9tICcuL2VsZW1lbnRzL3BsYWNlcy9wbGFjZXMuc2VydmljZSc7XG5pbXBvcnQgeyBHbG9iYWxSZWYsIEJyb3dzZXJHbG9iYWxSZWYgfSBmcm9tICcuL3NlcnZpY2VzL2dsb2JhbC9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zdG9yYWdlL3N0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4vdXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzJztcbmltcG9ydCB7IEZvcm1VdGlscyB9IGZyb20gJy4vdXRpbHMvZm9ybS11dGlscy9Gb3JtVXRpbHMnO1xuaW1wb3J0IHsgT3B0aW9uc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL29wdGlvbnMvT3B0aW9uc1NlcnZpY2UnO1xuaW1wb3J0IHsgTm92b1RhYmJlZEdyb3VwUGlja2VyTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy90YWJiZWQtZ3JvdXAtcGlja2VyL1RhYmJlZEdyb3VwUGlja2VyLm1vZHVsZSc7XG5cbmltcG9ydCB7IE5vdm9Db21tb25Nb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2NvbW1vbi9jb21tb24ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JlYWN0aXZlRm9ybXNNb2R1bGVdLFxuICBleHBvcnRzOiBbXG4gICAgTm92b1BpcGVzTW9kdWxlLFxuICAgIE5vdm9CdXR0b25Nb2R1bGUsXG4gICAgTm92b0xvYWRpbmdNb2R1bGUsXG4gICAgTm92b0NhcmRNb2R1bGUsXG4gICAgTm92b0NhbGVuZGFyTW9kdWxlLFxuICAgIE5vdm9Ub2FzdE1vZHVsZSxcbiAgICBOb3ZvVG9vbHRpcE1vZHVsZSxcbiAgICBOb3ZvSGVhZGVyTW9kdWxlLFxuICAgIE5vdm9UYWJNb2R1bGUsXG4gICAgTm92b1RpbGVzTW9kdWxlLFxuICAgIE5vdm9Nb2RhbE1vZHVsZSxcbiAgICBOb3ZvUXVpY2tOb3RlTW9kdWxlLFxuICAgIE5vdm9SYWRpb01vZHVsZSxcbiAgICBOb3ZvRHJvcGRvd25Nb2R1bGUsXG4gICAgTm92b1NlbGVjdE1vZHVsZSxcbiAgICBOb3ZvTGlzdE1vZHVsZSxcbiAgICBOb3ZvU3dpdGNoTW9kdWxlLFxuICAgIE5vdm9EcmFndWxhTW9kdWxlLFxuICAgIE5vdm9TbGlkZXJNb2R1bGUsXG4gICAgTm92b1BpY2tlck1vZHVsZSxcbiAgICBOb3ZvQ2hpcHNNb2R1bGUsXG4gICAgTm92b0RhdGVQaWNrZXJNb2R1bGUsXG4gICAgTm92b1RpbWVQaWNrZXJNb2R1bGUsXG4gICAgTm92b0RhdGVUaW1lUGlja2VyTW9kdWxlLFxuICAgIE5vdm9Ob3ZvQ0tFZGl0b3JNb2R1bGUsXG4gICAgTm92b1RpcFdlbGxNb2R1bGUsXG4gICAgTm92b1NpbXBsZVRhYmxlTW9kdWxlLFxuICAgIE5vdm9UYWJsZU1vZHVsZSxcbiAgICBOb3ZvVGFibGVFeHRyYXNNb2R1bGUsXG4gICAgTm92b0Zvcm1Nb2R1bGUsXG4gICAgTm92b0Zvcm1FeHRyYXNNb2R1bGUsXG4gICAgTm92b0NhdGVnb3J5RHJvcGRvd25Nb2R1bGUsXG4gICAgTm92b011bHRpUGlja2VyTW9kdWxlLFxuICAgIE5vdm9Qb3BPdmVyTW9kdWxlLFxuICAgIE5vdm9EYXRhVGFibGVNb2R1bGUsXG4gICAgTm92b1NlYXJjaEJveE1vZHVsZSxcbiAgICBOb3ZvT3ZlcmxheU1vZHVsZSxcbiAgICBHb29nbGVQbGFjZXNNb2R1bGUsXG4gICAgTm92b1ZhbHVlTW9kdWxlLFxuICAgIE5vdm9BY2VFZGl0b3JNb2R1bGUsXG4gICAgTm92b0ljb25Nb2R1bGUsXG4gICAgTm92b0V4cGFuc2lvbk1vZHVsZSxcbiAgICBVbmxlc3NNb2R1bGUsXG4gICAgTm92b0NvbW1vbk1vZHVsZSxcbiAgICBOb3ZvU3RlcHBlck1vZHVsZSxcbiAgICBTY3JvbGxpbmdNb2R1bGUsXG4gICAgTm92b1RhYmJlZEdyb3VwUGlja2VyTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IENvbXBvbmVudFV0aWxzLCB1c2VDbGFzczogQ29tcG9uZW50VXRpbHMgfSxcbiAgICB7IHByb3ZpZGU6IERhdGVGb3JtYXRTZXJ2aWNlLCB1c2VDbGFzczogRGF0ZUZvcm1hdFNlcnZpY2UgfSxcbiAgICB7IHByb3ZpZGU6IE5vdm9MYWJlbFNlcnZpY2UsIHVzZUNsYXNzOiBOb3ZvTGFiZWxTZXJ2aWNlIH0sXG4gICAgeyBwcm92aWRlOiBOb3ZvRHJhZ3VsYVNlcnZpY2UsIHVzZUNsYXNzOiBOb3ZvRHJhZ3VsYVNlcnZpY2UgfSxcbiAgICB7IHByb3ZpZGU6IEdvb2dsZVBsYWNlc1NlcnZpY2UsIHVzZUNsYXNzOiBHb29nbGVQbGFjZXNTZXJ2aWNlIH0sXG4gICAgeyBwcm92aWRlOiBHbG9iYWxSZWYsIHVzZUNsYXNzOiBCcm93c2VyR2xvYmFsUmVmIH0sXG4gICAgeyBwcm92aWRlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCB1c2VDbGFzczogTG9jYWxTdG9yYWdlU2VydmljZSB9LFxuICAgIHsgcHJvdmlkZTogT3B0aW9uc1NlcnZpY2UsIHVzZUNsYXNzOiBPcHRpb25zU2VydmljZSB9LFxuICAgIHsgcHJvdmlkZTogRm9ybVV0aWxzLCB1c2VDbGFzczogRm9ybVV0aWxzIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9FbGVtZW50c01vZHVsZSB7fVxuIl19