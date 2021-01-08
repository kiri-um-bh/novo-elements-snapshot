import { CdkColumnDef } from '@angular/cdk/table';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Optional, Renderer2, TemplateRef, ViewChild, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { NovoLabelService } from '../../../services/novo-label-service';
import { Helpers } from '../../../utils/Helpers';
import { KeyCodes } from '../../../utils/key-codes/KeyCodes';
import { NovoDropdownElement } from '../../dropdown/Dropdown';
import { NovoDataTableFilterUtils } from '../services/data-table-filter-utils';
import { NovoDataTableSortFilter } from '../sort-filter/sort-filter.directive';
import { DataTableState } from '../state/data-table-state.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/novo-label-service";
import * as i2 from "../state/data-table-state.service";
import * as i3 from "../sort-filter/sort-filter.directive";
import * as i4 from "@angular/cdk/table";
import * as i5 from "@angular/common";
import * as i6 from "../../button/Button";
import * as i7 from "../../tooltip/Tooltip.directive";
import * as i8 from "../../dropdown/Dropdown";
import * as i9 from "../../date-picker/DatePicker";
import * as i10 from "@angular/forms";
const _c0 = ["filterInput"];
const _c1 = ["optionFilterInput"];
const _c2 = ["novo-data-table-cell-config", ""];
function NovoDataTableCellHeader_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 6);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("bhi-", ctx_r0.labelIcon, " label-icon");
} }
function NovoDataTableCellHeader_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function NovoDataTableCellHeader_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.sort(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r1.sortActive);
    i0.ɵɵproperty("tooltip", ctx_r1.labels.sort)("icon", ctx_r1.icon);
    i0.ɵɵattribute("data-feature-id", "novo-data-table-sort-" + ctx_r1.id);
} }
function NovoDataTableCellHeader_novo_dropdown_5_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function NovoDataTableCellHeader_novo_dropdown_5_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.clearFilter(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.labels.clear, " ");
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_7_ng_container_1_item_1_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 23);
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_7_ng_container_1_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "item", 21);
    i0.ɵɵlistener("click", function NovoDataTableCellHeader_novo_dropdown_5_list_7_ng_container_1_item_1_Template_item_click_0_listener() { i0.ɵɵrestoreView(_r22); const option_r19 = ctx.$implicit; const ctx_r21 = i0.ɵɵnextContext(4); return ctx_r21.filterData(option_r19); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, NovoDataTableCellHeader_novo_dropdown_5_list_7_ng_container_1_item_1_i_2_Template, 1, 0, "i", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r19 = ctx.$implicit;
    const ctx_r18 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("active", ctx_r18.activeDateFilter === option_r19.label);
    i0.ɵɵattribute("data-automation-id", "novo-data-table-filter-" + option_r19.label);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r19.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.activeDateFilter === option_r19.label);
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NovoDataTableCellHeader_novo_dropdown_5_list_7_ng_container_1_item_1_Template, 3, 5, "item", 20);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r15.config.filterConfig.options);
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_7_item_2_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 23);
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_7_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "item", 24);
    i0.ɵɵlistener("click", function NovoDataTableCellHeader_novo_dropdown_5_list_7_item_2_Template_item_click_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(3); return ctx_r24.toggleCustomRange($event, true); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, NovoDataTableCellHeader_novo_dropdown_5_list_7_item_2_i_2_Template, 1, 0, "i", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("active", ctx_r16.labels.customDateRange === ctx_r16.activeDateFilter);
    i0.ɵɵproperty("keepOpen", true);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r16.labels.customDateRange, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r16.labels.customDateRange === ctx_r16.activeDateFilter);
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_7_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelementStart(1, "div", 21);
    i0.ɵɵlistener("click", function NovoDataTableCellHeader_novo_dropdown_5_list_7_div_3_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(3); return ctx_r26.toggleCustomRange($event, false); });
    i0.ɵɵelement(2, "i", 26);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "novo-date-picker", 27);
    i0.ɵɵlistener("onSelect", function NovoDataTableCellHeader_novo_dropdown_5_list_7_div_3_Template_novo_date_picker_onSelect_4_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r28 = i0.ɵɵnextContext(3); return ctx_r28.filterData($event); })("ngModelChange", function NovoDataTableCellHeader_novo_dropdown_5_list_7_div_3_Template_novo_date_picker_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r29 = i0.ɵɵnextContext(3); return ctx_r29.filter = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r17.labels.backToPresetFilters);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r17.filter);
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "list");
    i0.ɵɵtemplate(1, NovoDataTableCellHeader_novo_dropdown_5_list_7_ng_container_1_Template, 2, 1, "ng-container", 17);
    i0.ɵɵtemplate(2, NovoDataTableCellHeader_novo_dropdown_5_list_7_item_2_Template, 3, 5, "item", 18);
    i0.ɵɵtemplate(3, NovoDataTableCellHeader_novo_dropdown_5_list_7_div_3_Template, 5, 2, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r7.showCustomRange);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.config.filterConfig.allowCustomRange && !ctx_r7.showCustomRange);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.showCustomRange);
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_8_item_1_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 23);
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_8_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "item", 21);
    i0.ɵɵlistener("click", function NovoDataTableCellHeader_novo_dropdown_5_list_8_item_1_Template_item_click_0_listener() { i0.ɵɵrestoreView(_r34); const option_r31 = ctx.$implicit; const ctx_r33 = i0.ɵɵnextContext(3); return ctx_r33.filterData(option_r31); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, NovoDataTableCellHeader_novo_dropdown_5_list_8_item_1_i_3_Template, 1, 0, "i", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r31 = ctx.$implicit;
    const ctx_r30 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("active", ctx_r30.filter === option_r31);
    i0.ɵɵattribute("data-automation-id", "novo-data-table-filter-" + ((option_r31 == null ? null : option_r31.label) || option_r31));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((option_r31 == null ? null : option_r31.label) || option_r31);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", option_r31.hasOwnProperty("value") ? ctx_r30.filter === option_r31.value : ctx_r30.filter === option_r31);
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "list");
    i0.ɵɵtemplate(1, NovoDataTableCellHeader_novo_dropdown_5_list_8_item_1_Template, 4, 5, "item", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r8.config.filterConfig.options);
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_9_item_9_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "item", 37);
    i0.ɵɵlistener("click", function NovoDataTableCellHeader_novo_dropdown_5_list_9_item_9_Template_item_click_0_listener() { i0.ɵɵrestoreView(_r39); const option_r37 = ctx.$implicit; const ctx_r38 = i0.ɵɵnextContext(3); return ctx_r38.toggleSelection(option_r37); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r37 = ctx.$implicit;
    const ctx_r36 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("hidden", ctx_r36.multiSelectOptionIsHidden(option_r37))("keepOpen", true);
    i0.ɵɵattribute("data-automation-id", "novo-data-table-filter-" + ((option_r37 == null ? null : option_r37.label) || option_r37));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((option_r37 == null ? null : option_r37.label) || option_r37);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("bhi-checkbox-empty", !ctx_r36.isSelected(option_r37, ctx_r36.multiSelectedOptions))("bhi-checkbox-filled", ctx_r36.isSelected(option_r37, ctx_r36.multiSelectedOptions));
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_9_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "list");
    i0.ɵɵelementStart(1, "div", 28);
    i0.ɵɵlistener("keydown", function NovoDataTableCellHeader_novo_dropdown_5_list_9_Template_div_keydown_1_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(2); return ctx_r40.multiSelectOptionFilterHandleKeydown($event); });
    i0.ɵɵelementStart(2, "item", 29);
    i0.ɵɵelementStart(3, "input", 30, 31);
    i0.ɵɵlistener("ngModelChange", function NovoDataTableCellHeader_novo_dropdown_5_list_9_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r42 = i0.ɵɵnextContext(2); return ctx_r42.optionFilter = $event; })("ngModelChange", function NovoDataTableCellHeader_novo_dropdown_5_list_9_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r43 = i0.ɵɵnextContext(2); return ctx_r43.multiSelectOptionFilter($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "i", 32);
    i0.ɵɵelementStart(6, "span", 33);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 34);
    i0.ɵɵtemplate(9, NovoDataTableCellHeader_novo_dropdown_5_list_9_item_9_Template, 4, 8, "item", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p", 36);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r9.optionFilter);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hidden", !ctx_r9.error || !ctx_r9.multiSelectHasVisibleOptions());
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r9.labels.selectFilterOptions);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r9.config.filterConfig.options);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hidden", ctx_r9.multiSelectHasVisibleOptions());
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r9.labels.pickerEmpty);
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c3 = function (a0) { return { $implicit: a0 }; };
function NovoDataTableCellHeader_novo_dropdown_5_list_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "list");
    i0.ɵɵelementStart(1, "item", 29);
    i0.ɵɵtemplate(2, NovoDataTableCellHeader_novo_dropdown_5_list_10_ng_container_2_Template, 1, 0, "ng-container", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r10.filterTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c3, ctx_r10.config));
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_11_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "list");
    i0.ɵɵelementStart(1, "item", 29);
    i0.ɵɵelementStart(2, "input", 39, 40);
    i0.ɵɵlistener("ngModelChange", function NovoDataTableCellHeader_novo_dropdown_5_list_11_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r47); const ctx_r46 = i0.ɵɵnextContext(2); return ctx_r46.filter = $event; })("ngModelChange", function NovoDataTableCellHeader_novo_dropdown_5_list_11_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r47); const ctx_r48 = i0.ɵɵnextContext(2); return ctx_r48.filterData($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("type", ctx_r11.config.filterConfig.type)("ngModel", ctx_r11.filter);
} }
function NovoDataTableCellHeader_novo_dropdown_5_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵelementStart(1, "button", 42);
    i0.ɵɵlistener("click", function NovoDataTableCellHeader_novo_dropdown_5_div_12_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r50); const ctx_r49 = i0.ɵɵnextContext(2); return ctx_r49.cancel(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 43);
    i0.ɵɵlistener("click", function NovoDataTableCellHeader_novo_dropdown_5_div_12_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r50); const ctx_r51 = i0.ɵɵnextContext(2); return ctx_r51.filterMultiSelect(); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r12.labels.cancel, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r12.labels.filters, " ");
} }
function NovoDataTableCellHeader_novo_dropdown_5_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-dropdown", 8);
    i0.ɵɵelementStart(1, "button", 9);
    i0.ɵɵlistener("click", function NovoDataTableCellHeader_novo_dropdown_5_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r53); const ctx_r52 = i0.ɵɵnextContext(); return ctx_r52.focusInput(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 10);
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, NovoDataTableCellHeader_novo_dropdown_5_button_5_Template, 2, 1, "button", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerStart(6, 12);
    i0.ɵɵtemplate(7, NovoDataTableCellHeader_novo_dropdown_5_list_7_Template, 4, 3, "list", 13);
    i0.ɵɵtemplate(8, NovoDataTableCellHeader_novo_dropdown_5_list_8_Template, 2, 1, "list", 13);
    i0.ɵɵtemplate(9, NovoDataTableCellHeader_novo_dropdown_5_list_9_Template, 12, 6, "list", 13);
    i0.ɵɵtemplate(10, NovoDataTableCellHeader_novo_dropdown_5_list_10_Template, 3, 4, "list", 13);
    i0.ɵɵtemplate(11, NovoDataTableCellHeader_novo_dropdown_5_list_11_Template, 4, 2, "list", 14);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(12, NovoDataTableCellHeader_novo_dropdown_5_div_12_Template, 5, 2, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("active", ctx_r2.filterActive);
    i0.ɵɵproperty("tooltip", ctx_r2.labels.filters);
    i0.ɵɵattribute("data-feature-id", "novo-data-table-filter-" + ctx_r2.id);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.labels.filters);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.filter !== null && ctx_r2.filter !== undefined && ctx_r2.filter !== "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", ctx_r2.config.filterConfig.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "date");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "select");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "multi-select");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "custom");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.multiSelect);
} }
function NovoDataTableCellHeader_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵelementStart(1, "span", 45);
    i0.ɵɵlistener("mousedown", function NovoDataTableCellHeader_div_7_Template_span_mousedown_1_listener($event) { i0.ɵɵrestoreView(_r55); const ctx_r54 = i0.ɵɵnextContext(); return ctx_r54.startResize($event); });
    i0.ɵɵtext(2, "\u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
export class NovoDataTableCellHeader {
    constructor(changeDetectorRef, labels, state, renderer, elementRef, _sort, _cdkColumnDef) {
        this.changeDetectorRef = changeDetectorRef;
        this.labels = labels;
        this.state = state;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this._sort = _sort;
        this._cdkColumnDef = _cdkColumnDef;
        this.allowMultipleFilters = false;
        this.icon = 'sortable';
        this.filterActive = false;
        this.sortActive = false;
        this.showCustomRange = false;
        this.multiSelect = false;
        this.multiSelectedOptions = [];
        this.multiSelectedOptionIsHidden = [];
        this.optionFilter = '';
        this.error = false;
        this.subscriptions = [];
        this._rerenderSubscription = state.updates.subscribe((change) => this.checkSortFilterState(change));
    }
    set column(column) {
        this._column = column;
        this.label = column.type === 'action' ? '' : column.label;
        this.labelIcon = column.labelIcon;
        this.config = {
            sortable: !!column.sortable,
            filterable: !!column.filterable,
            resizable: !!column.resizable,
        };
        this.resizable = this.config.resizable;
        const transforms = {};
        if (column.filterable && Helpers.isObject(column.filterable)) {
            this.config.filterConfig = column.filterable;
            if (!this.config.filterConfig.type) {
                this.config.filterConfig = { type: 'text' };
            }
            if (column.filterable.transform) {
                transforms.filter = column.filterable.transform;
            }
        }
        else {
            this.config.filterConfig = { type: 'text' };
        }
        if (column.sortable && Helpers.isObject(column.sortable)) {
            if (column.sortable.transform) {
                transforms.sort = column.sortable.transform;
            }
        }
        if (this.config.filterConfig.type === 'date' && !this.config.filterConfig.options) {
            this.config.filterConfig.options = this.getDefaultDateFilterOptions();
        }
        this.config.transforms = transforms;
    }
    ngOnInit() {
        if (this._cdkColumnDef) {
            this.id = this._cdkColumnDef.name;
        }
        this.checkSortFilterState({ filter: this.state.filter, sort: this.state.sort }, true);
        this.multiSelect = this.config.filterConfig && this.config.filterConfig.type ? this.config.filterConfig.type === 'multi-select' : false;
        if (this.multiSelect) {
            this.multiSelectedOptions = this.filter ? [...this.filter] : [];
        }
        this.changeDetectorRef.markForCheck();
    }
    ngOnDestroy() {
        this._rerenderSubscription.unsubscribe();
        this.subscriptions.forEach((subscription) => {
            subscription.unsubscribe();
        });
    }
    checkSortFilterState(sortFilterState, initialConfig = false) {
        if (sortFilterState.sort && sortFilterState.sort.id === this.id) {
            this.icon = `sort-${sortFilterState.sort.value}`;
            this.sortActive = true;
        }
        else {
            this.icon = 'sortable';
            this.sortActive = false;
        }
        const tableFilter = Helpers.convertToArray(sortFilterState.filter);
        const thisFilter = tableFilter.find((filter) => filter && filter.id === this.id);
        if (thisFilter) {
            this.filterActive = true;
            if (initialConfig && thisFilter.type === 'date' && thisFilter.selectedOption) {
                this.activeDateFilter = thisFilter.selectedOption.label || this.labels.customDateRange;
            }
            this.filter = thisFilter.value;
        }
        else {
            this.filterActive = false;
            this.filter = undefined;
            this.activeDateFilter = undefined;
            this.multiSelectedOptions = [];
        }
        if (this.defaultSort && this.id === this.defaultSort.id) {
            this.icon = `sort-${this.defaultSort.value}`;
            this.sortActive = true;
        }
        this.multiSelect = this.config.filterConfig && this.config.filterConfig.type ? this.config.filterConfig.type === 'multi-select' : false;
        if (this.multiSelect) {
            this.multiSelectedOptions = this.filter ? [...this.filter] : [];
            if (this.config.filterConfig.options) {
                if (typeof this.config.filterConfig.options[0] === 'string') {
                    this.multiSelectedOptionIsHidden = this.config.filterConfig.options.map((option) => ({ option, hidden: false }));
                }
                else {
                    this.multiSelectedOptionIsHidden = this.config.filterConfig.options.map((option) => ({
                        option,
                        hidden: false,
                    }));
                }
            }
        }
        this.changeDetectorRef.markForCheck();
    }
    isSelected(option, optionsList) {
        if (optionsList) {
            const optionValue = option.hasOwnProperty('value') ? option.value : option;
            const found = optionsList.find((item) => this.optionPresentCheck(item, optionValue));
            return found !== undefined;
        }
        return false;
    }
    toggleSelection(option) {
        const optionValue = option.hasOwnProperty('value') ? option.value : option;
        const optionIndex = this.multiSelectedOptions.findIndex((item) => this.optionPresentCheck(item, optionValue));
        this.error = false;
        if (optionIndex > -1) {
            this.multiSelectedOptions.splice(optionIndex, 1);
            if (this.optionFilter && !this.getOptionText(option).toLowerCase().startsWith(this.optionFilter.toLowerCase())) {
                this.multiSelectedOptionIsHidden[this.multiSelectedOptionIsHidden.findIndex((record) => record.option === option)].hidden = true;
            }
        }
        else {
            this.multiSelectedOptions.push(optionValue);
        }
    }
    optionPresentCheck(item, optionValue) {
        if (item.hasOwnProperty('value')) {
            return item.value === optionValue;
        }
        else {
            return item === optionValue;
        }
    }
    cancel() {
        this.multiSelectedOptions = this.filter ? [...this.filter] : [];
        this.dropdown.closePanel();
        this.clearOptionFilter();
    }
    filterMultiSelect() {
        if (this.multiSelectedOptions.length === 0 && !this.filter) {
            this.multiSelectHasVisibleOptions() && this.dropdown ? (this.error = true) : null;
        }
        else {
            this.clearOptionFilter();
            const actualFilter = this.multiSelectedOptions.length > 0 ? [...this.multiSelectedOptions] : undefined;
            this.filterData(actualFilter);
            this.dropdown.closePanel();
        }
    }
    multiSelectOptionFilter(optionFilter) {
        this.multiSelectedOptionIsHidden.forEach((record) => {
            if (record.option) {
                record.hidden = !(this.getOptionText(record.option).toLowerCase().startsWith(optionFilter.toLowerCase()) ||
                    this.isSelected(record.option, this.multiSelectedOptions));
            }
        });
    }
    multiSelectOptionIsHidden(option) {
        return this.multiSelectedOptionIsHidden.find((record) => record.option === option).hidden;
    }
    multiSelectHasVisibleOptions() {
        return this.multiSelectedOptionIsHidden.some((record) => !record.hidden);
    }
    getOptionText(option) {
        if (typeof option !== 'object') {
            return option.toString();
        }
        else {
            const opt = option;
            return (opt.label.length > 0 ? opt.label : opt.value).toString();
        }
    }
    multiSelectOptionFilterHandleKeydown(event) {
        if (this.multiSelect) {
            this.error = false;
            if (this.dropdown.panelOpen && event.keyCode === KeyCodes.ESC) {
                // escape = clear text box and close
                Helpers.swallowEvent(event);
                this.clearOptionFilter();
                this.dropdown.closePanel();
            }
            else if (event.keyCode === KeyCodes.ENTER) {
                Helpers.swallowEvent(event);
                this.filterMultiSelect();
            }
            else if ((event.keyCode >= 65 && event.keyCode <= 90) ||
                (event.keyCode >= 96 && event.keyCode <= 105) ||
                (event.keyCode >= 48 && event.keyCode <= 57)) {
                this.optionFilterInput.nativeElement.focus();
            }
        }
    }
    clearOptionFilter() {
        this.error = false;
        if (this.optionFilter.length > 0) {
            this.optionFilter = '';
            this.multiSelectedOptionIsHidden.forEach((record) => {
                record.hidden = false;
            });
        }
    }
    startResize(mouseDownEvent) {
        mouseDownEvent.preventDefault();
        const minimumWidth = 60 + (this.config.filterable ? 30 : 0) + (this.config.sortable ? 30 : 0);
        const startingWidth = this.elementRef.nativeElement.getBoundingClientRect().width;
        const mouseMoveSubscription = fromEvent(window.document, 'mousemove').subscribe((middleMouseEvent) => {
            const differenceWidth = middleMouseEvent.clientX - mouseDownEvent.clientX;
            let width = startingWidth + differenceWidth;
            if (width < minimumWidth) {
                width = minimumWidth;
            }
            this._column.width = width;
            this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', `${this._column.width}px`);
            this.renderer.setStyle(this.elementRef.nativeElement, 'max-width', `${this._column.width}px`);
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${this._column.width}px`);
            this.changeDetectorRef.markForCheck();
            this.resized.next(this._column);
        });
        const mouseUpSubscription = fromEvent(window.document, 'mouseup').subscribe(() => {
            mouseUpSubscription.unsubscribe();
            mouseMoveSubscription.unsubscribe();
            this.changeDetectorRef.markForCheck();
        });
        this.subscriptions.push(mouseMoveSubscription);
        this.subscriptions.push(mouseUpSubscription);
    }
    toggleCustomRange(event, value) {
        Helpers.swallowEvent(event);
        this.showCustomRange = value;
        this.changeDetectorRef.markForCheck();
        this.dropdown.openPanel(); // Ensures that the panel correctly updates to the dynamic size of the dropdown
    }
    focusInput() {
        if (this.filterInput && this.filterInput.nativeElement) {
            setTimeout(() => this.filterInput.nativeElement.focus(), 0);
        }
        if (this.multiSelect && this.dropdown) {
            this.dropdown.onKeyDown = (event) => {
                this.multiSelectOptionFilterHandleKeydown(event);
            };
            setTimeout(() => this.optionFilterInput.nativeElement.focus(), 0);
            this.changeDetectorRef.markForCheck();
        }
    }
    sort() {
        if (this.changeTimeout) {
            clearTimeout(this.changeTimeout);
        }
        this.changeTimeout = setTimeout(() => {
            this.direction = this.getNextSortDirection(this.direction);
            this._sort.sort(this.id, this.direction, this.config.transforms.sort);
            this.changeDetectorRef.markForCheck();
        }, 300);
    }
    filterData(filter) {
        let actualFilter = NovoDataTableFilterUtils.constructFilter(filter, this.config.filterConfig.type, this.multiSelect);
        const selectedOption = this.config.filterConfig.type === 'date' && filter ? filter : undefined;
        if (this.changeTimeout) {
            clearTimeout(this.changeTimeout);
        }
        this.changeTimeout = setTimeout(() => {
            if (actualFilter === '') {
                actualFilter = undefined;
            }
            this._sort.filter(this.id, this.config.filterConfig.type, actualFilter, this.config.transforms.filter, this.allowMultipleFilters, selectedOption);
            this.changeDetectorRef.markForCheck();
        }, 300);
    }
    clearFilter() {
        this.filter = undefined;
        this.multiSelectedOptions = [];
        this.activeDateFilter = undefined;
        this.filterData(undefined);
        this.clearOptionFilter();
        this.dropdown.closePanel();
    }
    getNextSortDirection(direction) {
        if (!direction) {
            return 'asc';
        }
        if (direction === 'asc') {
            return 'desc';
        }
        return 'asc';
    }
    getDefaultDateFilterOptions() {
        const opts = [
            { label: this.labels.past1Day, min: -1, max: 0 },
            { label: this.labels.past7Days, min: -7, max: 0 },
            { label: this.labels.past30Days, min: -30, max: 0 },
            { label: this.labels.past90Days, min: -90, max: 0 },
            { label: this.labels.past1Year, min: -366, max: 0 },
            { label: this.labels.next1Day, min: 0, max: 1 },
            { label: this.labels.next7Days, min: 0, max: 7 },
            { label: this.labels.next30Days, min: 0, max: 30 },
            { label: this.labels.next90Days, min: 0, max: 90 },
            { label: this.labels.next1Year, min: 0, max: 366 },
        ];
        return opts;
    }
}
NovoDataTableCellHeader.ɵfac = function NovoDataTableCellHeader_Factory(t) { return new (t || NovoDataTableCellHeader)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i2.DataTableState), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.NovoDataTableSortFilter, 8), i0.ɵɵdirectiveInject(i4.CdkColumnDef, 8)); };
NovoDataTableCellHeader.ɵcmp = i0.ɵɵdefineComponent({ type: NovoDataTableCellHeader, selectors: [["", "novo-data-table-cell-config", ""]], viewQuery: function NovoDataTableCellHeader_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(NovoDropdownElement, true);
        i0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.filterInput = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdown = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.optionFilterInput = _t.first);
    } }, hostVars: 2, hostBindings: function NovoDataTableCellHeader_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function NovoDataTableCellHeader_keydown_HostBindingHandler($event) { return ctx.multiSelectOptionFilterHandleKeydown($event); });
    } if (rf & 2) {
        i0.ɵɵclassProp("resizable", ctx.resizable);
    } }, inputs: { defaultSort: "defaultSort", allowMultipleFilters: "allowMultipleFilters", resized: "resized", filterTemplate: "filterTemplate", column: ["novo-data-table-cell-config", "column"] }, attrs: _c2, decls: 8, vars: 5, consts: [["data-automation-id", "novo-data-table-header-icon", 3, "class", 4, "ngIf"], ["data-automation-id", "novo-data-table-label"], ["tooltipPosition", "right", "theme", "icon", "data-automation-id", "novo-data-table-sort", 3, "tooltip", "icon", "active", "click", 4, "ngIf"], ["side", "right", "parentScrollSelector", ".novo-data-table-container", "containerClass", "data-table-dropdown", "data-automation-id", "novo-data-table-filter", 4, "ngIf"], [1, "spacer"], ["class", "data-table-header-resizable", 4, "ngIf"], ["data-automation-id", "novo-data-table-header-icon"], ["tooltipPosition", "right", "theme", "icon", "data-automation-id", "novo-data-table-sort", 3, "tooltip", "icon", "click"], ["side", "right", "parentScrollSelector", ".novo-data-table-container", "containerClass", "data-table-dropdown", "data-automation-id", "novo-data-table-filter"], ["type", "button", "theme", "icon", "icon", "filter", "tooltipPosition", "right", 3, "tooltip", "click"], [1, "header"], ["theme", "dialogue", "color", "negative", "icon", "times", "data-automation-id", "novo-data-table-filter-clear", 3, "click", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["class", "footer", 4, "ngIf"], ["theme", "dialogue", "color", "negative", "icon", "times", "data-automation-id", "novo-data-table-filter-clear", 3, "click"], [4, "ngIf"], [3, "active", "keepOpen", "click", 4, "ngIf"], ["class", "calendar-container", 4, "ngIf"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["class", "bhi-check", 4, "ngIf"], [1, "bhi-check"], [3, "keepOpen", "click"], [1, "calendar-container"], [1, "bhi-previous"], ["range", "true", 3, "ngModel", "onSelect", "ngModelChange"], [1, "dropdown-list-filter", 3, "keydown"], ["keepOpen", "true", 1, "filter-search"], ["data-automation-id", "novo-data-table-multi-select-option-filter-input", 3, "ngModel", "ngModelChange"], ["optionFilterInput", ""], [1, "bhi-search"], [1, "error-text", 3, "hidden"], [1, "dropdown-list-options"], [3, "hidden", "keepOpen", "click", 4, "ngFor", "ngForOf"], [1, "filter-null-results", 3, "hidden"], [3, "hidden", "keepOpen", "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-automation-id", "novo-data-table-filter-input", 3, "type", "ngModel", "ngModelChange"], ["filterInput", ""], [1, "footer"], ["theme", "dialogue", "color", "dark", "data-automation-id", "novo-data-table-multi-select-cancel", 3, "click"], ["theme", "dialogue", "color", "positive", "data-automation-id", "novo-data-table-multi-select-filter", 3, "click"], [1, "data-table-header-resizable"], [3, "mousedown"]], template: function NovoDataTableCellHeader_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoDataTableCellHeader_i_0_Template, 1, 3, "i", 0);
        i0.ɵɵelementStart(1, "label", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div");
        i0.ɵɵtemplate(4, NovoDataTableCellHeader_button_4_Template, 1, 5, "button", 2);
        i0.ɵɵtemplate(5, NovoDataTableCellHeader_novo_dropdown_5_Template, 13, 12, "novo-dropdown", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(6, "div", 4);
        i0.ɵɵtemplate(7, NovoDataTableCellHeader_div_7_Template, 3, 0, "div", 5);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.labelIcon);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.label);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.config.sortable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.config.filterable);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.config.resizable);
    } }, directives: [i5.NgIf, i6.NovoButtonElement, i7.TooltipDirective, i8.NovoDropdownElement, i5.NgSwitch, i5.NgSwitchCase, i5.NgSwitchDefault, i8.NovoDropdownListElement, i5.NgForOf, i8.NovoItemElement, i9.NovoDatePickerElement, i10.NgControlStatus, i10.NgModel, i10.DefaultValueAccessor, i5.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDataTableCellHeader, [{
        type: Component,
        args: [{
                selector: '[novo-data-table-cell-config]',
                template: `
    <i class="bhi-{{ labelIcon }} label-icon" *ngIf="labelIcon" data-automation-id="novo-data-table-header-icon"></i>
    <label data-automation-id="novo-data-table-label">{{ label }}</label>
    <div>
      <button
        *ngIf="config.sortable"
        tooltipPosition="right"
        [tooltip]="labels.sort"
        theme="icon"
        [icon]="icon"
        (click)="sort()"
        [class.active]="sortActive"
        data-automation-id="novo-data-table-sort"
        [attr.data-feature-id]="'novo-data-table-sort-' + this.id"
      ></button>
      <novo-dropdown
        *ngIf="config.filterable"
        side="right"
        parentScrollSelector=".novo-data-table-container"
        containerClass="data-table-dropdown"
        data-automation-id="novo-data-table-filter"
      >
        <button
          type="button"
          theme="icon"
          icon="filter"
          [class.active]="filterActive"
          (click)="focusInput()"
          tooltipPosition="right"
          [tooltip]="labels.filters"
          [attr.data-feature-id]="'novo-data-table-filter-' + this.id"
        ></button>
        <div class="header">
          <span>{{ labels.filters }}</span>
          <button
            theme="dialogue"
            color="negative"
            icon="times"
            (click)="clearFilter()"
            *ngIf="filter !== null && filter !== undefined && filter !== ''"
            data-automation-id="novo-data-table-filter-clear"
          >
            {{ labels.clear }}
          </button>
        </div>
        <ng-container [ngSwitch]="config.filterConfig.type">
          <list *ngSwitchCase="'date'">
            <ng-container *ngIf="!showCustomRange">
              <item
                [class.active]="activeDateFilter === option.label"
                *ngFor="let option of config.filterConfig.options"
                (click)="filterData(option)"
                [attr.data-automation-id]="'novo-data-table-filter-' + option.label"
              >
                {{ option.label }} <i class="bhi-check" *ngIf="activeDateFilter === option.label"></i>
              </item>
            </ng-container>
            <item
              [class.active]="labels.customDateRange === activeDateFilter"
              (click)="toggleCustomRange($event, true)"
              *ngIf="config.filterConfig.allowCustomRange && !showCustomRange"
              [keepOpen]="true"
            >
              {{ labels.customDateRange }} <i class="bhi-check" *ngIf="labels.customDateRange === activeDateFilter"></i>
            </item>
            <div class="calendar-container" *ngIf="showCustomRange">
              <div (click)="toggleCustomRange($event, false)"><i class="bhi-previous"></i>{{ labels.backToPresetFilters }}</div>
              <novo-date-picker (onSelect)="filterData($event)" [(ngModel)]="filter" range="true"></novo-date-picker>
            </div>
          </list>
          <list *ngSwitchCase="'select'">
            <item
              [class.active]="filter === option"
              *ngFor="let option of config.filterConfig.options"
              (click)="filterData(option)"
              [attr.data-automation-id]="'novo-data-table-filter-' + (option?.label || option)"
            >
              <span>{{ option?.label || option }}</span>
              <i class="bhi-check" *ngIf="option.hasOwnProperty('value') ? filter === option.value : filter === option"></i>
            </item>
          </list>
          <list *ngSwitchCase="'multi-select'">
            <div class="dropdown-list-filter" (keydown)="multiSelectOptionFilterHandleKeydown($event)">
              <item class="filter-search" keepOpen="true">
                <input
                  [(ngModel)]="optionFilter"
                  (ngModelChange)="multiSelectOptionFilter($event)"
                  #optionFilterInput
                  data-automation-id="novo-data-table-multi-select-option-filter-input"
                />
                <i class="bhi-search"></i>
                <span class="error-text" [hidden]="!error || !multiSelectHasVisibleOptions()">{{ labels.selectFilterOptions }}</span>
              </item>
            </div>
            <div class="dropdown-list-options">
              <item
                *ngFor="let option of config.filterConfig.options"
                [hidden]="multiSelectOptionIsHidden(option)"
                (click)="toggleSelection(option)"
                [attr.data-automation-id]="'novo-data-table-filter-' + (option?.label || option)"
                [keepOpen]="true"
              >
                <span>{{ option?.label || option }}</span>
                <i
                  [class.bhi-checkbox-empty]="!isSelected(option, multiSelectedOptions)"
                  [class.bhi-checkbox-filled]="isSelected(option, multiSelectedOptions)"
                ></i>
              </item>
            </div>
            <p class="filter-null-results" [hidden]="multiSelectHasVisibleOptions()">{{ labels.pickerEmpty }}</p>
          </list>
          <list *ngSwitchCase="'custom'">
            <item class="filter-search" keepOpen="true">
              <ng-container *ngTemplateOutlet="filterTemplate; context: { $implicit: config }"></ng-container>
            </item>
          </list>
          <list *ngSwitchDefault>
            <item class="filter-search" keepOpen="true">
              <input
                [type]="config.filterConfig.type"
                [(ngModel)]="filter"
                (ngModelChange)="filterData($event)"
                #filterInput
                data-automation-id="novo-data-table-filter-input"
              />
            </item>
          </list>
        </ng-container>
        <div class="footer" *ngIf="multiSelect">
          <button theme="dialogue" color="dark" (click)="cancel()" data-automation-id="novo-data-table-multi-select-cancel">
            {{ labels.cancel }}
          </button>
          <button theme="dialogue" color="positive" (click)="filterMultiSelect()" data-automation-id="novo-data-table-multi-select-filter">
            {{ labels.filters }}
          </button>
        </div>
      </novo-dropdown>
    </div>
    <div class="spacer"></div>
    <div class="data-table-header-resizable" *ngIf="config.resizable"><span (mousedown)="startResize($event)">&nbsp;</span></div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NovoLabelService }, { type: i2.DataTableState }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i3.NovoDataTableSortFilter, decorators: [{
                type: Optional
            }] }, { type: i4.CdkColumnDef, decorators: [{
                type: Optional
            }] }]; }, { filterInput: [{
            type: ViewChild,
            args: ['filterInput']
        }], dropdown: [{
            type: ViewChild,
            args: [NovoDropdownElement]
        }], optionFilterInput: [{
            type: ViewChild,
            args: ['optionFilterInput']
        }], defaultSort: [{
            type: Input
        }], allowMultipleFilters: [{
            type: Input
        }], resized: [{
            type: Input
        }], filterTemplate: [{
            type: Input
        }], resizable: [{
            type: HostBinding,
            args: ['class.resizable']
        }], column: [{
            type: Input,
            args: ['novo-data-table-cell-config']
        }], multiSelectOptionFilterHandleKeydown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL2NlbGwtaGVhZGVycy9kYXRhLXRhYmxlLWhlYWRlci1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBR0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFTOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lBSy9ELHVCQUFpSDs7O0lBQTlHLGtFQUFzQzs7OztJQUd2QyxpQ0FVVTtJQUpSLHdMQUFnQjtJQUlqQixpQkFBUzs7O0lBSFIsMkNBQTJCO0lBSjNCLDRDQUF1QixxQkFBQTtJQU12QixzRUFBMEQ7Ozs7SUFxQnhELGtDQVFFO0lBSkEsbU5BQXVCO0lBSXZCLFlBQ0Y7SUFBQSxpQkFBUzs7O0lBRFAsZUFDRjtJQURFLG9EQUNGOzs7SUFXeUIsd0JBQW1FOzs7O0lBTnhGLGdDQU1FO0lBSEEsZ1JBQTRCO0lBRzVCLFlBQW1CO0lBQUEsa0hBQStEO0lBQ3BGLGlCQUFPOzs7O0lBTkwsdUVBQWtEO0lBR2xELGtGQUFvRTtJQUVwRSxlQUFtQjtJQUFuQixpREFBbUI7SUFBcUIsZUFBeUM7SUFBekMsb0VBQXlDOzs7SUFQckYsNkJBQ0U7SUFBQSxpSEFNRTtJQUVKLDBCQUFlOzs7SUFOWCxlQUFrRDtJQUFsRCw2REFBa0Q7OztJQWF2Qix3QkFBNkU7Ozs7SUFONUcsZ0NBTUU7SUFKQSxxT0FBbUMsSUFBSSxLQUFFO0lBSXpDLFlBQTZCO0lBQUEsbUdBQXlFO0lBQ3hHLGlCQUFPOzs7SUFOTCxxRkFBNEQ7SUFHNUQsK0JBQWlCO0lBRWpCLGVBQTZCO0lBQTdCLCtEQUE2QjtJQUFxQixlQUFtRDtJQUFuRCxrRkFBbUQ7Ozs7SUFFdkcsK0JBQ0U7SUFBQSwrQkFBZ0Q7SUFBM0MsbU9BQW1DLEtBQUssS0FBRTtJQUFDLHdCQUE0QjtJQUFBLFlBQWdDO0lBQUEsaUJBQU07SUFDbEgsNENBQXVHO0lBQXJGLGtQQUErQiw0T0FBQTtJQUFtQyxpQkFBbUI7SUFDekcsaUJBQU07OztJQUZ3RSxlQUFnQztJQUFoQyx3REFBZ0M7SUFDMUQsZUFBb0I7SUFBcEIsd0NBQW9COzs7SUFyQjFFLDRCQUNFO0lBQUEsa0hBQ0U7SUFTRixrR0FNRTtJQUVGLGdHQUNFO0lBR0osaUJBQU87OztJQXRCUyxlQUF3QjtJQUF4Qiw4Q0FBd0I7SUFhcEMsZUFBZ0U7SUFBaEUsNkZBQWdFO0lBS2xDLGVBQXVCO0lBQXZCLDZDQUF1Qjs7O0lBYXJELHdCQUE4Rzs7OztJQVBoSCxnQ0FNRTtJQUhBLGlRQUE0QjtJQUc1Qiw0QkFBTTtJQUFBLFlBQTZCO0lBQUEsaUJBQU87SUFDMUMsbUdBQTBHO0lBQzVHLGlCQUFPOzs7O0lBUEwsdURBQWtDO0lBR2xDLGdJQUFpRjtJQUUzRSxlQUE2QjtJQUE3QixrRkFBNkI7SUFDZCxlQUFvRjtJQUFwRiwrSEFBb0Y7OztJQVI3Ryw0QkFDRTtJQUFBLGtHQU1FO0lBR0osaUJBQU87OztJQVBILGVBQWtEO0lBQWxELDREQUFrRDs7OztJQXNCbEQsZ0NBT0U7SUFKQSxzUUFBaUM7SUFJakMsNEJBQU07SUFBQSxZQUE2QjtJQUFBLGlCQUFPO0lBQzFDLG9CQUdLO0lBQ1AsaUJBQU87Ozs7SUFWTCxzRUFBNEMsa0JBQUE7SUFFNUMsZ0lBQWlGO0lBRzNFLGVBQTZCO0lBQTdCLGtGQUE2QjtJQUVqQyxlQUFzRTtJQUF0RSxtR0FBc0UscUZBQUE7Ozs7SUF2QjlFLDRCQUNFO0lBQUEsK0JBQ0U7SUFEZ0MsdVBBQXdEO0lBQ3hGLGdDQUNFO0lBQUEscUNBTUE7SUFMRSw4T0FBMEIsMk9BQUE7SUFENUIsaUJBTUE7SUFBQSx3QkFBMEI7SUFDMUIsZ0NBQThFO0lBQUEsWUFBZ0M7SUFBQSxpQkFBTztJQUN2SCxpQkFBTztJQUNULGlCQUFNO0lBQ04sK0JBQ0U7SUFBQSxrR0FPRTtJQU1KLGlCQUFNO0lBQ04sOEJBQXlFO0lBQUEsYUFBd0I7SUFBQSxpQkFBSTtJQUN2RyxpQkFBTzs7O0lBekJDLGVBQTBCO0lBQTFCLDZDQUEwQjtJQU1ILGVBQW9EO0lBQXBELGdGQUFvRDtJQUFDLGVBQWdDO0lBQWhDLHVEQUFnQztJQUs5RyxlQUFrRDtJQUFsRCw0REFBa0Q7SUFhdkIsZUFBeUM7SUFBekMsOERBQXlDO0lBQUMsZUFBd0I7SUFBeEIsK0NBQXdCOzs7SUFJL0Ysd0JBQWdHOzs7O0lBRnBHLDRCQUNFO0lBQUEsZ0NBQ0U7SUFBQSxtSEFBaUY7SUFDbkYsaUJBQU87SUFDVCxpQkFBTzs7O0lBRlcsZUFBa0U7SUFBbEUseURBQWtFLHVFQUFBOzs7O0lBR3BGLDRCQUNFO0lBQUEsZ0NBQ0U7SUFBQSxxQ0FPRjtJQUxJLHlPQUFvQiwrTkFBQTtJQUZ0QixpQkFPRjtJQUFBLGlCQUFPO0lBQ1QsaUJBQU87OztJQVBELGVBQWlDO0lBQWpDLHVEQUFpQywyQkFBQTs7OztJQVN6QywrQkFDRTtJQUFBLGtDQUNFO0lBRG9DLDRNQUFrQjtJQUN0RCxZQUNGO0lBQUEsaUJBQVM7SUFDVCxrQ0FDRTtJQUR3Qyx1TkFBNkI7SUFDckUsWUFDRjtJQUFBLGlCQUFTO0lBQ1gsaUJBQU07OztJQUxGLGVBQ0Y7SUFERSxzREFDRjtJQUVFLGVBQ0Y7SUFERSx1REFDRjs7OztJQXZISix3Q0FPRTtJQUFBLGlDQVNVO0lBSlIsd01BQXNCO0lBSXZCLGlCQUFTO0lBQ1YsK0JBQ0U7SUFBQSw0QkFBTTtJQUFBLFlBQW9CO0lBQUEsaUJBQU87SUFDakMsK0ZBUUU7SUFFSixpQkFBTTtJQUNOLGlDQUNFO0lBQUEsMkZBQ0U7SUF1QkYsMkZBQ0U7SUFVRiw0RkFDRTtJQTZCRiw2RkFDRTtJQUlGLDZGQUNFO0lBVUosMEJBQWU7SUFDZiwyRkFDRTtJQU9KLGlCQUFnQjs7O0lBOUdaLGVBQTZCO0lBQTdCLDZDQUE2QjtJQUc3QiwrQ0FBMEI7SUFDMUIsd0VBQTREO0lBR3RELGVBQW9CO0lBQXBCLDJDQUFvQjtJQU14QixlQUFnRTtJQUFoRSxvR0FBZ0U7SUFNdEQsZUFBcUM7SUFBckMsMERBQXFDO0lBQzNDLGVBQXNCO0lBQXRCLHFDQUFzQjtJQXdCdEIsZUFBd0I7SUFBeEIsdUNBQXdCO0lBV3hCLGVBQThCO0lBQTlCLDZDQUE4QjtJQThCOUIsZUFBd0I7SUFBeEIsdUNBQXdCO0lBaUJaLGVBQW1CO0lBQW5CLHlDQUFtQjs7OztJQVczQywrQkFBa0U7SUFBQSxnQ0FBd0M7SUFBbEMsaU5BQWlDO0lBQUMsc0JBQU07SUFBQSxpQkFBTztJQUFBLGlCQUFNOztBQUlqSSxNQUFNLE9BQU8sdUJBQXVCO0lBeUZsQyxZQUNVLGlCQUFvQyxFQUNyQyxNQUF3QixFQUN2QixLQUF3QixFQUN4QixRQUFtQixFQUNuQixVQUFzQixFQUNYLEtBQWlDLEVBQ2pDLGFBQTJCO1FBTnRDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ1gsVUFBSyxHQUFMLEtBQUssQ0FBNEI7UUFDakMsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFwRmhELHlCQUFvQixHQUFZLEtBQUssQ0FBQztRQXFEL0IsU0FBSSxHQUFXLFVBQVUsQ0FBQztRQUsxQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBU2pDLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLHlCQUFvQixHQUFlLEVBQUUsQ0FBQztRQUNyQyxnQ0FBMkIsR0FBOEUsRUFBRSxDQUFDO1FBQzdHLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdEIsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBWXpDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQTZCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzdILENBQUM7SUE5RUQsSUFDSSxNQUFNLENBQUMsTUFBMkI7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFELElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUVsQyxJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixVQUFVLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQy9CLFNBQVMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVM7U0FDOUIsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFFdkMsTUFBTSxVQUFVLEdBQTJDLEVBQUUsQ0FBQztRQUU5RCxJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFVBQTBDLENBQUM7WUFDN0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRTtnQkFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDN0M7WUFDRCxJQUFLLE1BQU0sQ0FBQyxVQUEyQyxDQUFDLFNBQVMsRUFBRTtnQkFDakUsVUFBVSxDQUFDLE1BQU0sR0FBSSxNQUFNLENBQUMsVUFBMkMsQ0FBQyxTQUFTLENBQUM7YUFDbkY7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDN0M7UUFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDeEQsSUFBSyxNQUFNLENBQUMsUUFBdUMsQ0FBQyxTQUFTLEVBQUU7Z0JBQzdELFVBQVUsQ0FBQyxJQUFJLEdBQUksTUFBTSxDQUFDLFFBQXVDLENBQUMsU0FBUyxDQUFDO2FBQzdFO1NBQ0Y7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7WUFDakYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1NBQ3ZFO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ3RDLENBQUM7SUEwQ00sUUFBUTtRQUNiLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1NBQ25DO1FBRUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXRGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDeEksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7U0FDakU7UUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBMEIsRUFBRSxFQUFFO1lBQ3hELFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxvQkFBb0IsQ0FBQyxlQUFzQyxFQUFFLGdCQUF5QixLQUFLO1FBQ2hHLElBQUksZUFBZSxDQUFDLElBQUksSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQy9ELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUN6QjtRQUVELE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25FLE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVqRixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksYUFBYSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFJLFVBQVUsQ0FBQyxjQUFjLEVBQUU7Z0JBQzVFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQzthQUN4RjtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztTQUNoQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3hJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2hFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO2dCQUNwQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtvQkFDM0QsSUFBSSxDQUFDLDJCQUEyQixHQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBYyxFQUduRyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNuQztxQkFBTTtvQkFDTCxJQUFJLENBQUMsMkJBQTJCLEdBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBMEMsQ0FBQyxHQUFHLENBQ3pHLENBQUMsTUFBb0MsRUFBNkQsRUFBRSxDQUFDLENBQUM7d0JBQ3BHLE1BQU07d0JBQ04sTUFBTSxFQUFFLEtBQUs7cUJBQ2QsQ0FBQyxDQUNILENBQUM7aUJBQ0g7YUFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFTSxVQUFVLENBQUMsTUFBTSxFQUFFLFdBQVc7UUFDbkMsSUFBSSxXQUFXLEVBQUU7WUFDZixNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFFM0UsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3JGLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQztTQUM1QjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVNLGVBQWUsQ0FBQyxNQUFNO1FBQzNCLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUUzRSxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDOUcsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFO2dCQUM5RyxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDbEk7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsV0FBVztRQUN6QyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQztTQUNuQzthQUFNO1lBQ0wsT0FBTyxJQUFJLEtBQUssV0FBVyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVNLE1BQU07UUFDWCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLGlCQUFpQjtRQUN0QixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMxRCxJQUFJLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUNuRjthQUFNO1lBQ0wsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDekIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ3ZHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFTSx1QkFBdUIsQ0FBQyxZQUFvQjtRQUNqRCxJQUFJLENBQUMsMkJBQTJCLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDbEQsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUNqQixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FDZixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUN0RixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQzFELENBQUM7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLHlCQUF5QixDQUFDLE1BQTZDO1FBQzVFLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDNUYsQ0FBQztJQUVNLDRCQUE0QjtRQUNqQyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFTyxhQUFhLENBQUMsTUFBNkM7UUFDakUsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUIsT0FBTyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDMUI7YUFBTTtZQUNMLE1BQU0sR0FBRyxHQUFHLE1BQXNDLENBQUM7WUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQztJQUdNLG9DQUFvQyxDQUFDLEtBQW9CO1FBQzlELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLEdBQUcsRUFBRTtnQkFDN0Qsb0NBQW9DO2dCQUNwQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUM1QjtpQkFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLEtBQUssRUFBRTtnQkFDM0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDMUI7aUJBQU0sSUFDTCxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO2dCQUM1QyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDO2dCQUM3QyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEVBQzVDO2dCQUNBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDOUM7U0FDRjtJQUNILENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNsRCxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVNLFdBQVcsQ0FBQyxjQUEwQjtRQUMzQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDaEMsTUFBTSxZQUFZLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RixNQUFNLGFBQWEsR0FBVyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUMxRixNQUFNLHFCQUFxQixHQUFpQixTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxnQkFBNEIsRUFBRSxFQUFFO1lBQzdILE1BQU0sZUFBZSxHQUFXLGdCQUFnQixDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO1lBQ2xGLElBQUksS0FBSyxHQUFXLGFBQWEsR0FBRyxlQUFlLENBQUM7WUFDcEQsSUFBSSxLQUFLLEdBQUcsWUFBWSxFQUFFO2dCQUN4QixLQUFLLEdBQUcsWUFBWSxDQUFDO2FBQ3RCO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztZQUM5RixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDOUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLG1CQUFtQixHQUFpQixTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzdGLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2xDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0saUJBQWlCLENBQUMsS0FBWSxFQUFFLEtBQWM7UUFDbkQsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLCtFQUErRTtJQUM1RyxDQUFDO0lBRU0sVUFBVTtRQUNmLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRTtZQUN0RCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDN0Q7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQW9CLEVBQUUsRUFBRTtnQkFDakQsSUFBSSxDQUFDLG9DQUFvQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25ELENBQUMsQ0FBQztZQUNGLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFTSxJQUFJO1FBQ1QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbEM7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVNLFVBQVUsQ0FBQyxNQUFZO1FBQzVCLElBQUksWUFBWSxHQUFHLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNySCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFL0YsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbEM7UUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDbkMsSUFBSSxZQUFZLEtBQUssRUFBRSxFQUFFO2dCQUN2QixZQUFZLEdBQUcsU0FBUyxDQUFDO2FBQzFCO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ2YsSUFBSSxDQUFDLEVBQUUsRUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQzdCLFlBQVksRUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQzdCLElBQUksQ0FBQyxvQkFBb0IsRUFDekIsY0FBYyxDQUNmLENBQUM7WUFDRixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDeEIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU8sb0JBQW9CLENBQUMsU0FBaUI7UUFDNUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLFNBQVMsS0FBSyxLQUFLLEVBQUU7WUFDdkIsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVPLDJCQUEyQjtRQUNqQyxNQUFNLElBQUksR0FBbUM7WUFDM0MsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7WUFDaEQsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7WUFDakQsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7WUFDbkQsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7WUFDbkQsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7WUFDbkQsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO1lBQy9DLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtZQUNoRCxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7WUFDbEQsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO1lBQ2xELEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtTQUNuRCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs4RkE3WVUsdUJBQXVCOzREQUF2Qix1QkFBdUI7O3VCQUd2QixtQkFBbUI7Ozs7Ozs7OzhHQUhuQixnREFBNEM7Ozs7UUE5SXJELG9FQUE2RztRQUM3RyxnQ0FBa0Q7UUFBQSxZQUFXO1FBQUEsaUJBQVE7UUFDckUsMkJBQ0U7UUFBQSw4RUFVQztRQUNELDhGQU9FO1FBbUhKLGlCQUFNO1FBQ04seUJBQTBCO1FBQzFCLHdFQUFrRTs7UUExSXhCLG9DQUFpQjtRQUNULGVBQVc7UUFBWCwrQkFBVztRQUd6RCxlQUF1QjtRQUF2QiwwQ0FBdUI7UUFXdkIsZUFBeUI7UUFBekIsNENBQXlCO1FBMkhZLGVBQXdCO1FBQXhCLDJDQUF3Qjs7a0RBSXhELHVCQUF1QjtjQWpKbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0SVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O3NCQWdHSSxRQUFROztzQkFDUixRQUFRO3dCQTlGWCxXQUFXO2tCQURWLFNBQVM7bUJBQUMsYUFBYTtZQUd4QixRQUFRO2tCQURQLFNBQVM7bUJBQUMsbUJBQW1CO1lBRzlCLGlCQUFpQjtrQkFEaEIsU0FBUzttQkFBQyxtQkFBbUI7WUFJOUIsV0FBVztrQkFEVixLQUFLO1lBSU4sb0JBQW9CO2tCQURuQixLQUFLO1lBSU4sT0FBTztrQkFETixLQUFLO1lBR04sY0FBYztrQkFEYixLQUFLO1lBR0MsU0FBUztrQkFEZixXQUFXO21CQUFDLGlCQUFpQjtZQUkxQixNQUFNO2tCQURULEtBQUs7bUJBQUMsNkJBQTZCO1lBc083QixvQ0FBb0M7a0JBRDFDLFlBQVk7bUJBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrQ29sdW1uRGVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5pbXBvcnQgeyBOb3ZvRHJvcGRvd25FbGVtZW50IH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vRHJvcGRvd24nO1xuaW1wb3J0IHtcbiAgSURhdGFUYWJsZUNoYW5nZUV2ZW50LFxuICBJRGF0YVRhYmxlQ29sdW1uLFxuICBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnLFxuICBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uLFxuICBJRGF0YVRhYmxlQ29sdW1uU29ydENvbmZpZyxcbiAgSURhdGFUYWJsZVNvcnRGaWx0ZXIsXG59IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZUZpbHRlclV0aWxzIH0gZnJvbSAnLi4vc2VydmljZXMvZGF0YS10YWJsZS1maWx0ZXItdXRpbHMnO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZVNvcnRGaWx0ZXIgfSBmcm9tICcuLi9zb3J0LWZpbHRlci9zb3J0LWZpbHRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9kYXRhLXRhYmxlLXN0YXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbm92by1kYXRhLXRhYmxlLWNlbGwtY29uZmlnXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgY2xhc3M9XCJiaGkte3sgbGFiZWxJY29uIH19IGxhYmVsLWljb25cIiAqbmdJZj1cImxhYmVsSWNvblwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1oZWFkZXItaWNvblwiPjwvaT5cbiAgICA8bGFiZWwgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWxhYmVsXCI+e3sgbGFiZWwgfX08L2xhYmVsPlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgICpuZ0lmPVwiY29uZmlnLnNvcnRhYmxlXCJcbiAgICAgICAgdG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICBbdG9vbHRpcF09XCJsYWJlbHMuc29ydFwiXG4gICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgIFtpY29uXT1cImljb25cIlxuICAgICAgICAoY2xpY2spPVwic29ydCgpXCJcbiAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJzb3J0QWN0aXZlXCJcbiAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLXNvcnRcIlxuICAgICAgICBbYXR0ci5kYXRhLWZlYXR1cmUtaWRdPVwiJ25vdm8tZGF0YS10YWJsZS1zb3J0LScgKyB0aGlzLmlkXCJcbiAgICAgID48L2J1dHRvbj5cbiAgICAgIDxub3ZvLWRyb3Bkb3duXG4gICAgICAgICpuZ0lmPVwiY29uZmlnLmZpbHRlcmFibGVcIlxuICAgICAgICBzaWRlPVwicmlnaHRcIlxuICAgICAgICBwYXJlbnRTY3JvbGxTZWxlY3Rvcj1cIi5ub3ZvLWRhdGEtdGFibGUtY29udGFpbmVyXCJcbiAgICAgICAgY29udGFpbmVyQ2xhc3M9XCJkYXRhLXRhYmxlLWRyb3Bkb3duXCJcbiAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWZpbHRlclwiXG4gICAgICA+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB0aGVtZT1cImljb25cIlxuICAgICAgICAgIGljb249XCJmaWx0ZXJcIlxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiZmlsdGVyQWN0aXZlXCJcbiAgICAgICAgICAoY2xpY2spPVwiZm9jdXNJbnB1dCgpXCJcbiAgICAgICAgICB0b29sdGlwUG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgICAgW3Rvb2x0aXBdPVwibGFiZWxzLmZpbHRlcnNcIlxuICAgICAgICAgIFthdHRyLmRhdGEtZmVhdHVyZS1pZF09XCInbm92by1kYXRhLXRhYmxlLWZpbHRlci0nICsgdGhpcy5pZFwiXG4gICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgIDxzcGFuPnt7IGxhYmVscy5maWx0ZXJzIH19PC9zcGFuPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHRoZW1lPVwiZGlhbG9ndWVcIlxuICAgICAgICAgICAgY29sb3I9XCJuZWdhdGl2ZVwiXG4gICAgICAgICAgICBpY29uPVwidGltZXNcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImNsZWFyRmlsdGVyKClcIlxuICAgICAgICAgICAgKm5nSWY9XCJmaWx0ZXIgIT09IG51bGwgJiYgZmlsdGVyICE9PSB1bmRlZmluZWQgJiYgZmlsdGVyICE9PSAnJ1wiXG4gICAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtZmlsdGVyLWNsZWFyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBsYWJlbHMuY2xlYXIgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImNvbmZpZy5maWx0ZXJDb25maWcudHlwZVwiPlxuICAgICAgICAgIDxsaXN0ICpuZ1N3aXRjaENhc2U9XCInZGF0ZSdcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc2hvd0N1c3RvbVJhbmdlXCI+XG4gICAgICAgICAgICAgIDxpdGVtXG4gICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJhY3RpdmVEYXRlRmlsdGVyID09PSBvcHRpb24ubGFiZWxcIlxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZmlsdGVyRGF0YShvcHRpb24pXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tZGF0YS10YWJsZS1maWx0ZXItJyArIG9wdGlvbi5sYWJlbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBvcHRpb24ubGFiZWwgfX0gPGkgY2xhc3M9XCJiaGktY2hlY2tcIiAqbmdJZj1cImFjdGl2ZURhdGVGaWx0ZXIgPT09IG9wdGlvbi5sYWJlbFwiPjwvaT5cbiAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8aXRlbVxuICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImxhYmVscy5jdXN0b21EYXRlUmFuZ2UgPT09IGFjdGl2ZURhdGVGaWx0ZXJcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlQ3VzdG9tUmFuZ2UoJGV2ZW50LCB0cnVlKVwiXG4gICAgICAgICAgICAgICpuZ0lmPVwiY29uZmlnLmZpbHRlckNvbmZpZy5hbGxvd0N1c3RvbVJhbmdlICYmICFzaG93Q3VzdG9tUmFuZ2VcIlxuICAgICAgICAgICAgICBba2VlcE9wZW5dPVwidHJ1ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7IGxhYmVscy5jdXN0b21EYXRlUmFuZ2UgfX0gPGkgY2xhc3M9XCJiaGktY2hlY2tcIiAqbmdJZj1cImxhYmVscy5jdXN0b21EYXRlUmFuZ2UgPT09IGFjdGl2ZURhdGVGaWx0ZXJcIj48L2k+XG4gICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItY29udGFpbmVyXCIgKm5nSWY9XCJzaG93Q3VzdG9tUmFuZ2VcIj5cbiAgICAgICAgICAgICAgPGRpdiAoY2xpY2spPVwidG9nZ2xlQ3VzdG9tUmFuZ2UoJGV2ZW50LCBmYWxzZSlcIj48aSBjbGFzcz1cImJoaS1wcmV2aW91c1wiPjwvaT57eyBsYWJlbHMuYmFja1RvUHJlc2V0RmlsdGVycyB9fTwvZGl2PlxuICAgICAgICAgICAgICA8bm92by1kYXRlLXBpY2tlciAob25TZWxlY3QpPVwiZmlsdGVyRGF0YSgkZXZlbnQpXCIgWyhuZ01vZGVsKV09XCJmaWx0ZXJcIiByYW5nZT1cInRydWVcIj48L25vdm8tZGF0ZS1waWNrZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgPGxpc3QgKm5nU3dpdGNoQ2FzZT1cIidzZWxlY3QnXCI+XG4gICAgICAgICAgICA8aXRlbVxuICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImZpbHRlciA9PT0gb3B0aW9uXCJcbiAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiZmlsdGVyRGF0YShvcHRpb24pXCJcbiAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWRhdGEtdGFibGUtZmlsdGVyLScgKyAob3B0aW9uPy5sYWJlbCB8fCBvcHRpb24pXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4+e3sgb3B0aW9uPy5sYWJlbCB8fCBvcHRpb24gfX08L3NwYW4+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNoZWNrXCIgKm5nSWY9XCJvcHRpb24uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPyBmaWx0ZXIgPT09IG9wdGlvbi52YWx1ZSA6IGZpbHRlciA9PT0gb3B0aW9uXCI+PC9pPlxuICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICA8bGlzdCAqbmdTd2l0Y2hDYXNlPVwiJ211bHRpLXNlbGVjdCdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1saXN0LWZpbHRlclwiIChrZXlkb3duKT1cIm11bHRpU2VsZWN0T3B0aW9uRmlsdGVySGFuZGxlS2V5ZG93bigkZXZlbnQpXCI+XG4gICAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiZmlsdGVyLXNlYXJjaFwiIGtlZXBPcGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJvcHRpb25GaWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwibXVsdGlTZWxlY3RPcHRpb25GaWx0ZXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAjb3B0aW9uRmlsdGVySW5wdXRcbiAgICAgICAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1tdWx0aS1zZWxlY3Qtb3B0aW9uLWZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1zZWFyY2hcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgW2hpZGRlbl09XCIhZXJyb3IgfHwgIW11bHRpU2VsZWN0SGFzVmlzaWJsZU9wdGlvbnMoKVwiPnt7IGxhYmVscy5zZWxlY3RGaWx0ZXJPcHRpb25zIH19PC9zcGFuPlxuICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1saXN0LW9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgPGl0ZW1cbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgW2hpZGRlbl09XCJtdWx0aVNlbGVjdE9wdGlvbklzSGlkZGVuKG9wdGlvbilcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVTZWxlY3Rpb24ob3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWRhdGEtdGFibGUtZmlsdGVyLScgKyAob3B0aW9uPy5sYWJlbCB8fCBvcHRpb24pXCJcbiAgICAgICAgICAgICAgICBba2VlcE9wZW5dPVwidHJ1ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBvcHRpb24/LmxhYmVsIHx8IG9wdGlvbiB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmJoaS1jaGVja2JveC1lbXB0eV09XCIhaXNTZWxlY3RlZChvcHRpb24sIG11bHRpU2VsZWN0ZWRPcHRpb25zKVwiXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuYmhpLWNoZWNrYm94LWZpbGxlZF09XCJpc1NlbGVjdGVkKG9wdGlvbiwgbXVsdGlTZWxlY3RlZE9wdGlvbnMpXCJcbiAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZmlsdGVyLW51bGwtcmVzdWx0c1wiIFtoaWRkZW5dPVwibXVsdGlTZWxlY3RIYXNWaXNpYmxlT3B0aW9ucygpXCI+e3sgbGFiZWxzLnBpY2tlckVtcHR5IH19PC9wPlxuICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICA8bGlzdCAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbSdcIj5cbiAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiZmlsdGVyLXNlYXJjaFwiIGtlZXBPcGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZmlsdGVyVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb25maWcgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICA8bGlzdCAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgICAgICAgPGl0ZW0gY2xhc3M9XCJmaWx0ZXItc2VhcmNoXCIga2VlcE9wZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIFt0eXBlXT1cImNvbmZpZy5maWx0ZXJDb25maWcudHlwZVwiXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWx0ZXJcIlxuICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImZpbHRlckRhdGEoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgI2ZpbHRlcklucHV0XG4gICAgICAgICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgPC9saXN0PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiICpuZ0lmPVwibXVsdGlTZWxlY3RcIj5cbiAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiZGlhbG9ndWVcIiBjb2xvcj1cImRhcmtcIiAoY2xpY2spPVwiY2FuY2VsKClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtbXVsdGktc2VsZWN0LWNhbmNlbFwiPlxuICAgICAgICAgICAge3sgbGFiZWxzLmNhbmNlbCB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIGNvbG9yPVwicG9zaXRpdmVcIiAoY2xpY2spPVwiZmlsdGVyTXVsdGlTZWxlY3QoKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1tdWx0aS1zZWxlY3QtZmlsdGVyXCI+XG4gICAgICAgICAgICB7eyBsYWJlbHMuZmlsdGVycyB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbm92by1kcm9wZG93bj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic3BhY2VyXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtaGVhZGVyLXJlc2l6YWJsZVwiICpuZ0lmPVwiY29uZmlnLnJlc2l6YWJsZVwiPjxzcGFuIChtb3VzZWRvd24pPVwic3RhcnRSZXNpemUoJGV2ZW50KVwiPiZuYnNwOzwvc3Bhbj48L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGVDZWxsSGVhZGVyPFQ+IGltcGxlbWVudHMgSURhdGFUYWJsZVNvcnRGaWx0ZXIsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnZmlsdGVySW5wdXQnKVxuICBmaWx0ZXJJbnB1dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChOb3ZvRHJvcGRvd25FbGVtZW50KVxuICBkcm9wZG93bjogTm92b0Ryb3Bkb3duRWxlbWVudDtcbiAgQFZpZXdDaGlsZCgnb3B0aW9uRmlsdGVySW5wdXQnKVxuICBvcHRpb25GaWx0ZXJJbnB1dDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICBkZWZhdWx0U29ydDogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH07XG5cbiAgQElucHV0KClcbiAgYWxsb3dNdWx0aXBsZUZpbHRlcnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICByZXNpemVkOiBFdmVudEVtaXR0ZXI8SURhdGFUYWJsZUNvbHVtbjxUPj47XG4gIEBJbnB1dCgpXG4gIGZpbHRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnJlc2l6YWJsZScpXG4gIHB1YmxpYyByZXNpemFibGU6IGJvb2xlYW47XG5cbiAgQElucHV0KCdub3ZvLWRhdGEtdGFibGUtY2VsbC1jb25maWcnKVxuICBzZXQgY29sdW1uKGNvbHVtbjogSURhdGFUYWJsZUNvbHVtbjxUPikge1xuICAgIHRoaXMuX2NvbHVtbiA9IGNvbHVtbjtcbiAgICB0aGlzLmxhYmVsID0gY29sdW1uLnR5cGUgPT09ICdhY3Rpb24nID8gJycgOiBjb2x1bW4ubGFiZWw7XG4gICAgdGhpcy5sYWJlbEljb24gPSBjb2x1bW4ubGFiZWxJY29uO1xuXG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICBzb3J0YWJsZTogISFjb2x1bW4uc29ydGFibGUsXG4gICAgICBmaWx0ZXJhYmxlOiAhIWNvbHVtbi5maWx0ZXJhYmxlLFxuICAgICAgcmVzaXphYmxlOiAhIWNvbHVtbi5yZXNpemFibGUsXG4gICAgfTtcbiAgICB0aGlzLnJlc2l6YWJsZSA9IHRoaXMuY29uZmlnLnJlc2l6YWJsZTtcblxuICAgIGNvbnN0IHRyYW5zZm9ybXM6IHsgZmlsdGVyPzogRnVuY3Rpb247IHNvcnQ/OiBGdW5jdGlvbiB9ID0ge307XG5cbiAgICBpZiAoY29sdW1uLmZpbHRlcmFibGUgJiYgSGVscGVycy5pc09iamVjdChjb2x1bW4uZmlsdGVyYWJsZSkpIHtcbiAgICAgIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZyA9IGNvbHVtbi5maWx0ZXJhYmxlIGFzIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWc7XG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZyA9IHsgdHlwZTogJ3RleHQnIH07XG4gICAgICB9XG4gICAgICBpZiAoKGNvbHVtbi5maWx0ZXJhYmxlIGFzIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWcpLnRyYW5zZm9ybSkge1xuICAgICAgICB0cmFuc2Zvcm1zLmZpbHRlciA9IChjb2x1bW4uZmlsdGVyYWJsZSBhcyBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnKS50cmFuc2Zvcm07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZyA9IHsgdHlwZTogJ3RleHQnIH07XG4gICAgfVxuXG4gICAgaWYgKGNvbHVtbi5zb3J0YWJsZSAmJiBIZWxwZXJzLmlzT2JqZWN0KGNvbHVtbi5zb3J0YWJsZSkpIHtcbiAgICAgIGlmICgoY29sdW1uLnNvcnRhYmxlIGFzIElEYXRhVGFibGVDb2x1bW5Tb3J0Q29uZmlnKS50cmFuc2Zvcm0pIHtcbiAgICAgICAgdHJhbnNmb3Jtcy5zb3J0ID0gKGNvbHVtbi5zb3J0YWJsZSBhcyBJRGF0YVRhYmxlQ29sdW1uU29ydENvbmZpZykudHJhbnNmb3JtO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSA9PT0gJ2RhdGUnICYmICF0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9ucykge1xuICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnMgPSB0aGlzLmdldERlZmF1bHREYXRlRmlsdGVyT3B0aW9ucygpO1xuICAgIH1cblxuICAgIHRoaXMuY29uZmlnLnRyYW5zZm9ybXMgPSB0cmFuc2Zvcm1zO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVyZW5kZXJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBjaGFuZ2VUaW1lb3V0OiBhbnk7XG5cbiAgcHVibGljIGxhYmVsOiBzdHJpbmc7XG4gIHB1YmxpYyBpY29uOiBzdHJpbmcgPSAnc29ydGFibGUnO1xuICBwdWJsaWMgbGFiZWxJY29uOiBzdHJpbmc7XG4gIHB1YmxpYyBpZDogc3RyaW5nO1xuICBwdWJsaWMgZmlsdGVyOiBhbnk7XG4gIHB1YmxpYyBkaXJlY3Rpb246IHN0cmluZztcbiAgcHVibGljIGZpbHRlckFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc29ydEFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd0N1c3RvbVJhbmdlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBhY3RpdmVEYXRlRmlsdGVyOiBzdHJpbmc7XG4gIHB1YmxpYyBjb25maWc6IHtcbiAgICBzb3J0YWJsZTogYm9vbGVhbjtcbiAgICBmaWx0ZXJhYmxlOiBib29sZWFuO1xuICAgIHJlc2l6YWJsZTogYm9vbGVhbjtcbiAgICB0cmFuc2Zvcm1zPzogeyBmaWx0ZXI/OiBGdW5jdGlvbjsgc29ydD86IEZ1bmN0aW9uIH07XG4gICAgZmlsdGVyQ29uZmlnPzogSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZztcbiAgfTtcbiAgcHVibGljIG11bHRpU2VsZWN0OiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBtdWx0aVNlbGVjdGVkT3B0aW9uczogQXJyYXk8YW55PiA9IFtdO1xuICBwcml2YXRlIG11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbjogQXJyYXk8eyBvcHRpb246IHN0cmluZyB8IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb247IGhpZGRlbjogYm9vbGVhbiB9PiA9IFtdO1xuICBwdWJsaWMgb3B0aW9uRmlsdGVyOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGVycm9yOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBfY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdGF0ZTogRGF0YVRhYmxlU3RhdGU8VD4sXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgX3NvcnQ6IE5vdm9EYXRhVGFibGVTb3J0RmlsdGVyPFQ+LFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBfY2RrQ29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsXG4gICkge1xuICAgIHRoaXMuX3JlcmVuZGVyU3Vic2NyaXB0aW9uID0gc3RhdGUudXBkYXRlcy5zdWJzY3JpYmUoKGNoYW5nZTogSURhdGFUYWJsZUNoYW5nZUV2ZW50KSA9PiB0aGlzLmNoZWNrU29ydEZpbHRlclN0YXRlKGNoYW5nZSkpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jZGtDb2x1bW5EZWYpIHtcbiAgICAgIHRoaXMuaWQgPSB0aGlzLl9jZGtDb2x1bW5EZWYubmFtZTtcbiAgICB9XG5cbiAgICB0aGlzLmNoZWNrU29ydEZpbHRlclN0YXRlKHsgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlciwgc29ydDogdGhpcy5zdGF0ZS5zb3J0IH0sIHRydWUpO1xuXG4gICAgdGhpcy5tdWx0aVNlbGVjdCA9IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZyAmJiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSA/IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID09PSAnbXVsdGktc2VsZWN0JyA6IGZhbHNlO1xuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0KSB7XG4gICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zID0gdGhpcy5maWx0ZXIgPyBbLi4udGhpcy5maWx0ZXJdIDogW107XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVyZW5kZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaCgoc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24pID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNoZWNrU29ydEZpbHRlclN0YXRlKHNvcnRGaWx0ZXJTdGF0ZTogSURhdGFUYWJsZUNoYW5nZUV2ZW50LCBpbml0aWFsQ29uZmlnOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAoc29ydEZpbHRlclN0YXRlLnNvcnQgJiYgc29ydEZpbHRlclN0YXRlLnNvcnQuaWQgPT09IHRoaXMuaWQpIHtcbiAgICAgIHRoaXMuaWNvbiA9IGBzb3J0LSR7c29ydEZpbHRlclN0YXRlLnNvcnQudmFsdWV9YDtcbiAgICAgIHRoaXMuc29ydEFjdGl2ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaWNvbiA9ICdzb3J0YWJsZSc7XG4gICAgICB0aGlzLnNvcnRBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCB0YWJsZUZpbHRlciA9IEhlbHBlcnMuY29udmVydFRvQXJyYXkoc29ydEZpbHRlclN0YXRlLmZpbHRlcik7XG4gICAgY29uc3QgdGhpc0ZpbHRlciA9IHRhYmxlRmlsdGVyLmZpbmQoKGZpbHRlcikgPT4gZmlsdGVyICYmIGZpbHRlci5pZCA9PT0gdGhpcy5pZCk7XG5cbiAgICBpZiAodGhpc0ZpbHRlcikge1xuICAgICAgdGhpcy5maWx0ZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgaWYgKGluaXRpYWxDb25maWcgJiYgdGhpc0ZpbHRlci50eXBlID09PSAnZGF0ZScgJiYgdGhpc0ZpbHRlci5zZWxlY3RlZE9wdGlvbikge1xuICAgICAgICB0aGlzLmFjdGl2ZURhdGVGaWx0ZXIgPSB0aGlzRmlsdGVyLnNlbGVjdGVkT3B0aW9uLmxhYmVsIHx8IHRoaXMubGFiZWxzLmN1c3RvbURhdGVSYW5nZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsdGVyID0gdGhpc0ZpbHRlci52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXJBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZmlsdGVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5hY3RpdmVEYXRlRmlsdGVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgIH1cbiAgICBpZiAodGhpcy5kZWZhdWx0U29ydCAmJiB0aGlzLmlkID09PSB0aGlzLmRlZmF1bHRTb3J0LmlkKSB7XG4gICAgICB0aGlzLmljb24gPSBgc29ydC0ke3RoaXMuZGVmYXVsdFNvcnQudmFsdWV9YDtcbiAgICAgIHRoaXMuc29ydEFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMubXVsdGlTZWxlY3QgPSB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcgJiYgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUgPyB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSA9PT0gJ211bHRpLXNlbGVjdCcgOiBmYWxzZTtcbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuZmlsdGVyID8gWy4uLnRoaXMuZmlsdGVyXSA6IFtdO1xuICAgICAgaWYgKHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnNbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9uSXNIaWRkZW4gPSAodGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnMgYXMgc3RyaW5nW10pLm1hcCgob3B0aW9uOiBzdHJpbmcpOiB7XG4gICAgICAgICAgICBvcHRpb246IHN0cmluZztcbiAgICAgICAgICAgIGhpZGRlbjogYm9vbGVhbjtcbiAgICAgICAgICB9ID0+ICh7IG9wdGlvbiwgaGlkZGVuOiBmYWxzZSB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9uSXNIaWRkZW4gPSAodGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnMgYXMgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbltdKS5tYXAoXG4gICAgICAgICAgICAob3B0aW9uOiBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uKTogeyBvcHRpb246IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb247IGhpZGRlbjogYm9vbGVhbiB9ID0+ICh7XG4gICAgICAgICAgICAgIG9wdGlvbixcbiAgICAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBpc1NlbGVjdGVkKG9wdGlvbiwgb3B0aW9uc0xpc3QpIHtcbiAgICBpZiAob3B0aW9uc0xpc3QpIHtcbiAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uLmhhc093blByb3BlcnR5KCd2YWx1ZScpID8gb3B0aW9uLnZhbHVlIDogb3B0aW9uO1xuXG4gICAgICBjb25zdCBmb3VuZCA9IG9wdGlvbnNMaXN0LmZpbmQoKGl0ZW0pID0+IHRoaXMub3B0aW9uUHJlc2VudENoZWNrKGl0ZW0sIG9wdGlvblZhbHVlKSk7XG4gICAgICByZXR1cm4gZm91bmQgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZVNlbGVjdGlvbihvcHRpb24pIHtcbiAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvbi5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSA/IG9wdGlvbi52YWx1ZSA6IG9wdGlvbjtcblxuICAgIGNvbnN0IG9wdGlvbkluZGV4ID0gdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucy5maW5kSW5kZXgoKGl0ZW0pID0+IHRoaXMub3B0aW9uUHJlc2VudENoZWNrKGl0ZW0sIG9wdGlvblZhbHVlKSk7XG4gICAgdGhpcy5lcnJvciA9IGZhbHNlO1xuICAgIGlmIChvcHRpb25JbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zLnNwbGljZShvcHRpb25JbmRleCwgMSk7XG4gICAgICBpZiAodGhpcy5vcHRpb25GaWx0ZXIgJiYgIXRoaXMuZ2V0T3B0aW9uVGV4dChvcHRpb24pLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCh0aGlzLm9wdGlvbkZpbHRlci50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlblt0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbi5maW5kSW5kZXgoKHJlY29yZCkgPT4gcmVjb3JkLm9wdGlvbiA9PT0gb3B0aW9uKV0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucy5wdXNoKG9wdGlvblZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3B0aW9uUHJlc2VudENoZWNrKGl0ZW0sIG9wdGlvblZhbHVlKTogYm9vbGVhbiB7XG4gICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgIHJldHVybiBpdGVtLnZhbHVlID09PSBvcHRpb25WYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGl0ZW0gPT09IG9wdGlvblZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuZmlsdGVyID8gWy4uLnRoaXMuZmlsdGVyXSA6IFtdO1xuICAgIHRoaXMuZHJvcGRvd24uY2xvc2VQYW5lbCgpO1xuICAgIHRoaXMuY2xlYXJPcHRpb25GaWx0ZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJNdWx0aVNlbGVjdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDAgJiYgIXRoaXMuZmlsdGVyKSB7XG4gICAgICB0aGlzLm11bHRpU2VsZWN0SGFzVmlzaWJsZU9wdGlvbnMoKSAmJiB0aGlzLmRyb3Bkb3duID8gKHRoaXMuZXJyb3IgPSB0cnVlKSA6IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJPcHRpb25GaWx0ZXIoKTtcbiAgICAgIGNvbnN0IGFjdHVhbEZpbHRlciA9IHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMCA/IFsuLi50aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zXSA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZmlsdGVyRGF0YShhY3R1YWxGaWx0ZXIpO1xuICAgICAgdGhpcy5kcm9wZG93bi5jbG9zZVBhbmVsKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG11bHRpU2VsZWN0T3B0aW9uRmlsdGVyKG9wdGlvbkZpbHRlcjogc3RyaW5nKSB7XG4gICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9uSXNIaWRkZW4uZm9yRWFjaCgocmVjb3JkKSA9PiB7XG4gICAgICBpZiAocmVjb3JkLm9wdGlvbikge1xuICAgICAgICByZWNvcmQuaGlkZGVuID0gIShcbiAgICAgICAgICB0aGlzLmdldE9wdGlvblRleHQocmVjb3JkLm9wdGlvbikudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKG9wdGlvbkZpbHRlci50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIHRoaXMuaXNTZWxlY3RlZChyZWNvcmQub3B0aW9uLCB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG11bHRpU2VsZWN0T3B0aW9uSXNIaWRkZW4ob3B0aW9uOiBzdHJpbmcgfCBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuLmZpbmQoKHJlY29yZCkgPT4gcmVjb3JkLm9wdGlvbiA9PT0gb3B0aW9uKS5oaWRkZW47XG4gIH1cblxuICBwdWJsaWMgbXVsdGlTZWxlY3RIYXNWaXNpYmxlT3B0aW9ucygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9uSXNIaWRkZW4uc29tZSgocmVjb3JkKSA9PiAhcmVjb3JkLmhpZGRlbik7XG4gIH1cblxuICBwcml2YXRlIGdldE9wdGlvblRleHQob3B0aW9uOiBzdHJpbmcgfCBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbiAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBvcHRpb24udG9TdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3B0ID0gb3B0aW9uIGFzIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb247XG4gICAgICByZXR1cm4gKG9wdC5sYWJlbC5sZW5ndGggPiAwID8gb3B0LmxhYmVsIDogb3B0LnZhbHVlKS50b1N0cmluZygpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBwdWJsaWMgbXVsdGlTZWxlY3RPcHRpb25GaWx0ZXJIYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMubXVsdGlTZWxlY3QpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLmRyb3Bkb3duLnBhbmVsT3BlbiAmJiBldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FU0MpIHtcbiAgICAgICAgLy8gZXNjYXBlID0gY2xlYXIgdGV4dCBib3ggYW5kIGNsb3NlXG4gICAgICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAgICAgdGhpcy5jbGVhck9wdGlvbkZpbHRlcigpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duLmNsb3NlUGFuZWwoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRU5URVIpIHtcbiAgICAgICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgICAgICB0aGlzLmZpbHRlck11bHRpU2VsZWN0KCk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAoZXZlbnQua2V5Q29kZSA+PSA2NSAmJiBldmVudC5rZXlDb2RlIDw9IDkwKSB8fFxuICAgICAgICAoZXZlbnQua2V5Q29kZSA+PSA5NiAmJiBldmVudC5rZXlDb2RlIDw9IDEwNSkgfHxcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPj0gNDggJiYgZXZlbnQua2V5Q29kZSA8PSA1NylcbiAgICAgICkge1xuICAgICAgICB0aGlzLm9wdGlvbkZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyT3B0aW9uRmlsdGVyKCkge1xuICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5vcHRpb25GaWx0ZXIubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5vcHRpb25GaWx0ZXIgPSAnJztcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuLmZvckVhY2goKHJlY29yZCkgPT4ge1xuICAgICAgICByZWNvcmQuaGlkZGVuID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhcnRSZXNpemUobW91c2VEb3duRXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBtb3VzZURvd25FdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG1pbmltdW1XaWR0aCA9IDYwICsgKHRoaXMuY29uZmlnLmZpbHRlcmFibGUgPyAzMCA6IDApICsgKHRoaXMuY29uZmlnLnNvcnRhYmxlID8gMzAgOiAwKTtcbiAgICBjb25zdCBzdGFydGluZ1dpZHRoOiBudW1iZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICBjb25zdCBtb3VzZU1vdmVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh3aW5kb3cuZG9jdW1lbnQsICdtb3VzZW1vdmUnKS5zdWJzY3JpYmUoKG1pZGRsZU1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2VXaWR0aDogbnVtYmVyID0gbWlkZGxlTW91c2VFdmVudC5jbGllbnRYIC0gbW91c2VEb3duRXZlbnQuY2xpZW50WDtcbiAgICAgIGxldCB3aWR0aDogbnVtYmVyID0gc3RhcnRpbmdXaWR0aCArIGRpZmZlcmVuY2VXaWR0aDtcbiAgICAgIGlmICh3aWR0aCA8IG1pbmltdW1XaWR0aCkge1xuICAgICAgICB3aWR0aCA9IG1pbmltdW1XaWR0aDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbHVtbi53aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21pbi13aWR0aCcsIGAke3RoaXMuX2NvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21heC13aWR0aCcsIGAke3RoaXMuX2NvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7dGhpcy5fY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5yZXNpemVkLm5leHQodGhpcy5fY29sdW1uKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1vdXNlVXBTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh3aW5kb3cuZG9jdW1lbnQsICdtb3VzZXVwJykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIG1vdXNlVXBTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIG1vdXNlTW92ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChtb3VzZU1vdmVTdWJzY3JpcHRpb24pO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKG1vdXNlVXBTdWJzY3JpcHRpb24pO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUN1c3RvbVJhbmdlKGV2ZW50OiBFdmVudCwgdmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5zaG93Q3VzdG9tUmFuZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuZHJvcGRvd24ub3BlblBhbmVsKCk7IC8vIEVuc3VyZXMgdGhhdCB0aGUgcGFuZWwgY29ycmVjdGx5IHVwZGF0ZXMgdG8gdGhlIGR5bmFtaWMgc2l6ZSBvZiB0aGUgZHJvcGRvd25cbiAgfVxuXG4gIHB1YmxpYyBmb2N1c0lucHV0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpbHRlcklucHV0ICYmIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSwgMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0ICYmIHRoaXMuZHJvcGRvd24pIHtcbiAgICAgIHRoaXMuZHJvcGRvd24ub25LZXlEb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMubXVsdGlTZWxlY3RPcHRpb25GaWx0ZXJIYW5kbGVLZXlkb3duKGV2ZW50KTtcbiAgICAgIH07XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub3B0aW9uRmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpLCAwKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNvcnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhbmdlVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2hhbmdlVGltZW91dCk7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmdldE5leHRTb3J0RGlyZWN0aW9uKHRoaXMuZGlyZWN0aW9uKTtcbiAgICAgIHRoaXMuX3NvcnQuc29ydCh0aGlzLmlkLCB0aGlzLmRpcmVjdGlvbiwgdGhpcy5jb25maWcudHJhbnNmb3Jtcy5zb3J0KTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJEYXRhKGZpbHRlcj86IGFueSk6IHZvaWQge1xuICAgIGxldCBhY3R1YWxGaWx0ZXIgPSBOb3ZvRGF0YVRhYmxlRmlsdGVyVXRpbHMuY29uc3RydWN0RmlsdGVyKGZpbHRlciwgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUsIHRoaXMubXVsdGlTZWxlY3QpO1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUgPT09ICdkYXRlJyAmJiBmaWx0ZXIgPyBmaWx0ZXIgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAodGhpcy5jaGFuZ2VUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5jaGFuZ2VUaW1lb3V0KTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChhY3R1YWxGaWx0ZXIgPT09ICcnKSB7XG4gICAgICAgIGFjdHVhbEZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NvcnQuZmlsdGVyKFxuICAgICAgICB0aGlzLmlkLFxuICAgICAgICB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSxcbiAgICAgICAgYWN0dWFsRmlsdGVyLFxuICAgICAgICB0aGlzLmNvbmZpZy50cmFuc2Zvcm1zLmZpbHRlcixcbiAgICAgICAgdGhpcy5hbGxvd011bHRpcGxlRmlsdGVycyxcbiAgICAgICAgc2VsZWN0ZWRPcHRpb24sXG4gICAgICApO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAzMDApO1xuICB9XG5cbiAgcHVibGljIGNsZWFyRmlsdGVyKCk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICB0aGlzLmFjdGl2ZURhdGVGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWx0ZXJEYXRhKHVuZGVmaW5lZCk7XG4gICAgdGhpcy5jbGVhck9wdGlvbkZpbHRlcigpO1xuICAgIHRoaXMuZHJvcGRvd24uY2xvc2VQYW5lbCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXh0U29ydERpcmVjdGlvbihkaXJlY3Rpb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgIHJldHVybiAnYXNjJztcbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2FzYycpIHtcbiAgICAgIHJldHVybiAnZGVzYyc7XG4gICAgfVxuICAgIHJldHVybiAnYXNjJztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmYXVsdERhdGVGaWx0ZXJPcHRpb25zKCk6IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb25bXSB7XG4gICAgY29uc3Qgb3B0czogSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbltdID0gW1xuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDFEYXksIG1pbjogLTEsIG1heDogMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDdEYXlzLCBtaW46IC03LCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QzMERheXMsIG1pbjogLTMwLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3Q5MERheXMsIG1pbjogLTkwLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QxWWVhciwgbWluOiAtMzY2LCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQxRGF5LCBtaW46IDAsIG1heDogMSB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDdEYXlzLCBtaW46IDAsIG1heDogNyB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDMwRGF5cywgbWluOiAwLCBtYXg6IDMwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0OTBEYXlzLCBtaW46IDAsIG1heDogOTAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQxWWVhciwgbWluOiAwLCBtYXg6IDM2NiB9LFxuICAgIF07XG4gICAgcmV0dXJuIG9wdHM7XG4gIH1cbn1cbiJdfQ==