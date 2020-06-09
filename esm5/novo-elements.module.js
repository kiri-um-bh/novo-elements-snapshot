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
var NovoElementsModule = /** @class */ (function () {
    function NovoElementsModule() {
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
        ], imports: [[ReactiveFormsModule],
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
            NovoTabbedGroupPickerModule] });
    return NovoElementsModule;
}());
export { NovoElementsModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm92by1lbGVtZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsibm92by1lbGVtZW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE1BQU07QUFDTixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStC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TyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTtvQkFDN0QsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFO29CQUMvRCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO29CQUNsRCxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7b0JBQy9ELEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFO29CQUNyRCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTtpQkFDNUM7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTY3JvbGxpbmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b1BpcGVzTW9kdWxlIH0gZnJvbSAnLi9waXBlcy9QaXBlcy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvYnV0dG9uL0J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0FjZUVkaXRvck1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvYWNlLWVkaXRvci9BY2VFZGl0b3IubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Mb2FkaW5nTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9sb2FkaW5nL0xvYWRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5vdm9DYXJkTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9jYXJkL0NhcmQubW9kdWxlJztcbmltcG9ydCB7IE5vdm9DYWxlbmRhck1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvY2FsZW5kYXIvQ2FsZW5kYXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Ub2FzdE1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvdG9hc3QvVG9hc3QubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Ub29sdGlwTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy90b29sdGlwL1Rvb2x0aXAubW9kdWxlJztcbmltcG9ydCB7IE5vdm9IZWFkZXJNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL2hlYWRlci9IZWFkZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UYWJNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3RhYnMvVGFicy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1RpbGVzTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy90aWxlcy9UaWxlcy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b01vZGFsTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9tb2RhbC9Nb2RhbC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1F1aWNrTm90ZU1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvcXVpY2stbm90ZS9RdWlja05vdGUubW9kdWxlJztcbmltcG9ydCB7IE5vdm9SYWRpb01vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvcmFkaW8vUmFkaW8ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Ecm9wZG93bk1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvZHJvcGRvd24vRHJvcGRvd24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9TZWxlY3RNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3NlbGVjdC9TZWxlY3QubW9kdWxlJztcbmltcG9ydCB7IE5vdm9MaXN0TW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9saXN0L0xpc3QubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Td2l0Y2hNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3N3aXRjaC9Td2l0Y2gubW9kdWxlJztcbmltcG9ydCB7IE5vdm9EcmFndWxhTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9kcmFndWxhL0RyYWd1bGEubW9kdWxlJztcbmltcG9ydCB7IE5vdm9TbGlkZXJNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3NsaWRlci9TbGlkZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9QaWNrZXJNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3BpY2tlci9QaWNrZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9DaGlwc01vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvY2hpcHMvQ2hpcHMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9EYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9kYXRlLXBpY2tlci9EYXRlUGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvVGltZVBpY2tlck1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvdGltZS1waWNrZXIvVGltZVBpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0RhdGVUaW1lUGlja2VyTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9kYXRlLXRpbWUtcGlja2VyL0RhdGVUaW1lUGlja2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvTm92b0NLRWRpdG9yTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9ja2VkaXRvci9DS0VkaXRvci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1RpcFdlbGxNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3RpcC13ZWxsL1RpcFdlbGwubW9kdWxlJztcbmltcG9ydCB7IE5vdm9TaW1wbGVUYWJsZU1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvc2ltcGxlLXRhYmxlL3NpbXBsZS10YWJsZS5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1RhYmxlTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy90YWJsZS9UYWJsZS5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1RhYmxlRXh0cmFzTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy90YWJsZS9leHRyYXMvVGFibGVFeHRyYXMubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Gb3JtTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9mb3JtL0Zvcm0ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Gb3JtRXh0cmFzTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9mb3JtL2V4dHJhcy9Gb3JtRXh0cmFzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvQ2F0ZWdvcnlEcm9wZG93bk1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvY2F0ZWdvcnktZHJvcGRvd24vQ2F0ZWdvcnlEcm9wZG93bi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b011bHRpUGlja2VyTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9tdWx0aS1waWNrZXIvTXVsdGlQaWNrZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9Qb3BPdmVyTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9wb3BvdmVyL1BvcE92ZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9TZWFyY2hCb3hNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3NlYXJjaC9TZWFyY2hCb3gubW9kdWxlJztcbmltcG9ydCB7IEdvb2dsZVBsYWNlc01vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvcGxhY2VzL3BsYWNlcy5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1ZhbHVlTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy92YWx1ZS9WYWx1ZS5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZU1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvSWNvbk1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvaWNvbi9JY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvRXhwYW5zaW9uTW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9leHBhbnNpb24vZXhwYW5zaW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvU3RlcHBlck1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvc3RlcHBlci9zdGVwcGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBVbmxlc3NNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3VubGVzcy9Vbmxlc3MubW9kdWxlJztcbmltcG9ydCB7IE5vdm9PdmVybGF5TW9kdWxlIH0gZnJvbSAnLi9lbGVtZW50cy9vdmVybGF5L092ZXJsYXkubW9kdWxlJztcbmltcG9ydCB7IERhdGVGb3JtYXRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0JztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvRHJhZ3VsYVNlcnZpY2UgfSBmcm9tICcuL2VsZW1lbnRzL2RyYWd1bGEvRHJhZ3VsYVNlcnZpY2UnO1xuaW1wb3J0IHsgR29vZ2xlUGxhY2VzU2VydmljZSB9IGZyb20gJy4vZWxlbWVudHMvcGxhY2VzL3BsYWNlcy5zZXJ2aWNlJztcbmltcG9ydCB7IEdsb2JhbFJlZiwgQnJvd3Nlckdsb2JhbFJlZiB9IGZyb20gJy4vc2VydmljZXMvZ2xvYmFsL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3N0b3JhZ2Uvc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuaW1wb3J0IHsgRm9ybVV0aWxzIH0gZnJvbSAnLi91dGlscy9mb3JtLXV0aWxzL0Zvcm1VdGlscyc7XG5pbXBvcnQgeyBPcHRpb25zU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvb3B0aW9ucy9PcHRpb25zU2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvVGFiYmVkR3JvdXBQaWNrZXJNb2R1bGUgfSBmcm9tICcuL2VsZW1lbnRzL3RhYmJlZC1ncm91cC1waWNrZXIvVGFiYmVkR3JvdXBQaWNrZXIubW9kdWxlJztcblxuaW1wb3J0IHsgTm92b0NvbW1vbk1vZHVsZSB9IGZyb20gJy4vZWxlbWVudHMvY29tbW9uL2NvbW1vbi5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBOb3ZvUGlwZXNNb2R1bGUsXG4gICAgTm92b0J1dHRvbk1vZHVsZSxcbiAgICBOb3ZvTG9hZGluZ01vZHVsZSxcbiAgICBOb3ZvQ2FyZE1vZHVsZSxcbiAgICBOb3ZvQ2FsZW5kYXJNb2R1bGUsXG4gICAgTm92b1RvYXN0TW9kdWxlLFxuICAgIE5vdm9Ub29sdGlwTW9kdWxlLFxuICAgIE5vdm9IZWFkZXJNb2R1bGUsXG4gICAgTm92b1RhYk1vZHVsZSxcbiAgICBOb3ZvVGlsZXNNb2R1bGUsXG4gICAgTm92b01vZGFsTW9kdWxlLFxuICAgIE5vdm9RdWlja05vdGVNb2R1bGUsXG4gICAgTm92b1JhZGlvTW9kdWxlLFxuICAgIE5vdm9Ecm9wZG93bk1vZHVsZSxcbiAgICBOb3ZvU2VsZWN0TW9kdWxlLFxuICAgIE5vdm9MaXN0TW9kdWxlLFxuICAgIE5vdm9Td2l0Y2hNb2R1bGUsXG4gICAgTm92b0RyYWd1bGFNb2R1bGUsXG4gICAgTm92b1NsaWRlck1vZHVsZSxcbiAgICBOb3ZvUGlja2VyTW9kdWxlLFxuICAgIE5vdm9DaGlwc01vZHVsZSxcbiAgICBOb3ZvRGF0ZVBpY2tlck1vZHVsZSxcbiAgICBOb3ZvVGltZVBpY2tlck1vZHVsZSxcbiAgICBOb3ZvRGF0ZVRpbWVQaWNrZXJNb2R1bGUsXG4gICAgTm92b05vdm9DS0VkaXRvck1vZHVsZSxcbiAgICBOb3ZvVGlwV2VsbE1vZHVsZSxcbiAgICBOb3ZvU2ltcGxlVGFibGVNb2R1bGUsXG4gICAgTm92b1RhYmxlTW9kdWxlLFxuICAgIE5vdm9UYWJsZUV4dHJhc01vZHVsZSxcbiAgICBOb3ZvRm9ybU1vZHVsZSxcbiAgICBOb3ZvRm9ybUV4dHJhc01vZHVsZSxcbiAgICBOb3ZvQ2F0ZWdvcnlEcm9wZG93bk1vZHVsZSxcbiAgICBOb3ZvTXVsdGlQaWNrZXJNb2R1bGUsXG4gICAgTm92b1BvcE92ZXJNb2R1bGUsXG4gICAgTm92b0RhdGFUYWJsZU1vZHVsZSxcbiAgICBOb3ZvU2VhcmNoQm94TW9kdWxlLFxuICAgIE5vdm9PdmVybGF5TW9kdWxlLFxuICAgIEdvb2dsZVBsYWNlc01vZHVsZSxcbiAgICBOb3ZvVmFsdWVNb2R1bGUsXG4gICAgTm92b0FjZUVkaXRvck1vZHVsZSxcbiAgICBOb3ZvSWNvbk1vZHVsZSxcbiAgICBOb3ZvRXhwYW5zaW9uTW9kdWxlLFxuICAgIFVubGVzc01vZHVsZSxcbiAgICBOb3ZvQ29tbW9uTW9kdWxlLFxuICAgIE5vdm9TdGVwcGVyTW9kdWxlLFxuICAgIFNjcm9sbGluZ01vZHVsZSxcbiAgICBOb3ZvVGFiYmVkR3JvdXBQaWNrZXJNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ29tcG9uZW50VXRpbHMsIHVzZUNsYXNzOiBDb21wb25lbnRVdGlscyB9LFxuICAgIHsgcHJvdmlkZTogRGF0ZUZvcm1hdFNlcnZpY2UsIHVzZUNsYXNzOiBEYXRlRm9ybWF0U2VydmljZSB9LFxuICAgIHsgcHJvdmlkZTogTm92b0xhYmVsU2VydmljZSwgdXNlQ2xhc3M6IE5vdm9MYWJlbFNlcnZpY2UgfSxcbiAgICB7IHByb3ZpZGU6IE5vdm9EcmFndWxhU2VydmljZSwgdXNlQ2xhc3M6IE5vdm9EcmFndWxhU2VydmljZSB9LFxuICAgIHsgcHJvdmlkZTogR29vZ2xlUGxhY2VzU2VydmljZSwgdXNlQ2xhc3M6IEdvb2dsZVBsYWNlc1NlcnZpY2UgfSxcbiAgICB7IHByb3ZpZGU6IEdsb2JhbFJlZiwgdXNlQ2xhc3M6IEJyb3dzZXJHbG9iYWxSZWYgfSxcbiAgICB7IHByb3ZpZGU6IExvY2FsU3RvcmFnZVNlcnZpY2UsIHVzZUNsYXNzOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0sXG4gICAgeyBwcm92aWRlOiBPcHRpb25zU2VydmljZSwgdXNlQ2xhc3M6IE9wdGlvbnNTZXJ2aWNlIH0sXG4gICAgeyBwcm92aWRlOiBGb3JtVXRpbHMsIHVzZUNsYXNzOiBGb3JtVXRpbHMgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0VsZW1lbnRzTW9kdWxlIHt9XG4iXX0=