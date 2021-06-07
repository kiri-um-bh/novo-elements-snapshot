import { CdkColumnDef } from '@angular/cdk/table';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Optional, Renderer2, TemplateRef, ViewChild, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { NovoLabelService } from '../../../services/novo-label-service';
import { Helpers } from '../../../utils/Helpers';
import { NovoDropdownElement } from '../../dropdown/Dropdown';
import { NovoDataTableFilterUtils } from '../services/data-table-filter-utils';
import { SortDirection } from '../sort-filter';
import { NovoDataTableSortFilter } from '../sort-filter/sort-filter.directive';
import { DataTableState } from '../state/data-table-state.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/novo-label-service";
import * as i2 from "../state/data-table-state.service";
import * as i3 from "../sort-filter/sort-filter.directive";
import * as i4 from "@angular/cdk/table";
import * as i5 from "@angular/common";
import * as i6 from "../sort-filter/sort-button.component";
import * as i7 from "../../tooltip/Tooltip.directive";
import * as i8 from "../../dropdown/Dropdown";
import * as i9 from "../../button/Button";
import * as i10 from "../../icon/Icon";
import * as i11 from "../../common/typography/label/label.component";
import * as i12 from "../../date-picker/DatePicker";
import * as i13 from "@angular/forms";
const _c0 = ["filterInput"];
const _c1 = ["optionFilterInput"];
const _c2 = ["novo-data-table-cell-config", ""];
function NovoDataTableCellHeader_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 6);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("bhi-", ctx_r0.labelIcon, " label-icon");
} }
function NovoDataTableCellHeader_novo_sort_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-sort-button", 7);
    i0.ɵɵlistener("sortChange", function NovoDataTableCellHeader_novo_sort_button_4_Template_novo_sort_button_sortChange_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.sort(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("tooltip", ctx_r1.labels.sort)("value", ctx_r1.sortValue);
    i0.ɵɵattribute("data-feature-id", "novo-data-table-sort-" + ctx_r1.id);
} }
function NovoDataTableCellHeader_novo_dropdown_5_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function NovoDataTableCellHeader_novo_dropdown_5_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.clearFilter(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.labels.clear, " ");
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_9_ng_container_1_item_1_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 23);
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_9_ng_container_1_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "item", 21);
    i0.ɵɵlistener("click", function NovoDataTableCellHeader_novo_dropdown_5_list_9_ng_container_1_item_1_Template_item_click_0_listener() { i0.ɵɵrestoreView(_r22); const option_r19 = ctx.$implicit; const ctx_r21 = i0.ɵɵnextContext(4); return ctx_r21.filterData(option_r19); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, NovoDataTableCellHeader_novo_dropdown_5_list_9_ng_container_1_item_1_i_2_Template, 1, 0, "i", 22);
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
function NovoDataTableCellHeader_novo_dropdown_5_list_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NovoDataTableCellHeader_novo_dropdown_5_list_9_ng_container_1_item_1_Template, 3, 5, "item", 20);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r15.config.filterConfig.options);
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_9_item_2_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 23);
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_9_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "item", 24);
    i0.ɵɵlistener("click", function NovoDataTableCellHeader_novo_dropdown_5_list_9_item_2_Template_item_click_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(3); return ctx_r24.toggleCustomRange($event, true); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, NovoDataTableCellHeader_novo_dropdown_5_list_9_item_2_i_2_Template, 1, 0, "i", 22);
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
function NovoDataTableCellHeader_novo_dropdown_5_list_9_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelementStart(1, "div", 21);
    i0.ɵɵlistener("click", function NovoDataTableCellHeader_novo_dropdown_5_list_9_div_3_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(3); return ctx_r26.toggleCustomRange($event, false); });
    i0.ɵɵelement(2, "i", 26);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "novo-date-picker", 27);
    i0.ɵɵlistener("onSelect", function NovoDataTableCellHeader_novo_dropdown_5_list_9_div_3_Template_novo_date_picker_onSelect_4_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r28 = i0.ɵɵnextContext(3); return ctx_r28.filterData($event); })("ngModelChange", function NovoDataTableCellHeader_novo_dropdown_5_list_9_div_3_Template_novo_date_picker_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r29 = i0.ɵɵnextContext(3); return ctx_r29.filter = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r17.labels.backToPresetFilters);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r17.filter);
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "list");
    i0.ɵɵtemplate(1, NovoDataTableCellHeader_novo_dropdown_5_list_9_ng_container_1_Template, 2, 1, "ng-container", 17);
    i0.ɵɵtemplate(2, NovoDataTableCellHeader_novo_dropdown_5_list_9_item_2_Template, 3, 5, "item", 18);
    i0.ɵɵtemplate(3, NovoDataTableCellHeader_novo_dropdown_5_list_9_div_3_Template, 5, 2, "div", 19);
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
function NovoDataTableCellHeader_novo_dropdown_5_list_10_item_1_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 23);
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_10_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "item", 21);
    i0.ɵɵlistener("click", function NovoDataTableCellHeader_novo_dropdown_5_list_10_item_1_Template_item_click_0_listener() { i0.ɵɵrestoreView(_r34); const option_r31 = ctx.$implicit; const ctx_r33 = i0.ɵɵnextContext(3); return ctx_r33.filterData(option_r31); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, NovoDataTableCellHeader_novo_dropdown_5_list_10_item_1_i_3_Template, 1, 0, "i", 22);
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
function NovoDataTableCellHeader_novo_dropdown_5_list_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "list");
    i0.ɵɵtemplate(1, NovoDataTableCellHeader_novo_dropdown_5_list_10_item_1_Template, 4, 5, "item", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r8.config.filterConfig.options);
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_11_item_9_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "item", 37);
    i0.ɵɵlistener("click", function NovoDataTableCellHeader_novo_dropdown_5_list_11_item_9_Template_item_click_0_listener() { i0.ɵɵrestoreView(_r39); const option_r37 = ctx.$implicit; const ctx_r38 = i0.ɵɵnextContext(3); return ctx_r38.toggleSelection(option_r37); });
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
function NovoDataTableCellHeader_novo_dropdown_5_list_11_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "list");
    i0.ɵɵelementStart(1, "div", 28);
    i0.ɵɵlistener("keydown", function NovoDataTableCellHeader_novo_dropdown_5_list_11_Template_div_keydown_1_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(2); return ctx_r40.multiSelectOptionFilterHandleKeydown($event); });
    i0.ɵɵelementStart(2, "item", 29);
    i0.ɵɵelementStart(3, "input", 30, 31);
    i0.ɵɵlistener("ngModelChange", function NovoDataTableCellHeader_novo_dropdown_5_list_11_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r42 = i0.ɵɵnextContext(2); return ctx_r42.optionFilter = $event; })("ngModelChange", function NovoDataTableCellHeader_novo_dropdown_5_list_11_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r43 = i0.ɵɵnextContext(2); return ctx_r43.multiSelectOptionFilter($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "i", 32);
    i0.ɵɵelementStart(6, "span", 33);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 34);
    i0.ɵɵtemplate(9, NovoDataTableCellHeader_novo_dropdown_5_list_11_item_9_Template, 4, 8, "item", 35);
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
function NovoDataTableCellHeader_novo_dropdown_5_list_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c3 = function (a0) { return { $implicit: a0 }; };
function NovoDataTableCellHeader_novo_dropdown_5_list_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "list");
    i0.ɵɵelementStart(1, "item", 29);
    i0.ɵɵtemplate(2, NovoDataTableCellHeader_novo_dropdown_5_list_12_ng_container_2_Template, 1, 0, "ng-container", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r10.filterTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c3, ctx_r10.config));
} }
function NovoDataTableCellHeader_novo_dropdown_5_list_13_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "list");
    i0.ɵɵelementStart(1, "item", 29);
    i0.ɵɵelementStart(2, "input", 39, 40);
    i0.ɵɵlistener("ngModelChange", function NovoDataTableCellHeader_novo_dropdown_5_list_13_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r47); const ctx_r46 = i0.ɵɵnextContext(2); return ctx_r46.filter = $event; })("ngModelChange", function NovoDataTableCellHeader_novo_dropdown_5_list_13_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r47); const ctx_r48 = i0.ɵɵnextContext(2); return ctx_r48.filterData($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("type", ctx_r11.config.filterConfig.type)("ngModel", ctx_r11.filter);
} }
function NovoDataTableCellHeader_novo_dropdown_5_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵelementStart(1, "button", 42);
    i0.ɵɵlistener("click", function NovoDataTableCellHeader_novo_dropdown_5_div_14_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r50); const ctx_r49 = i0.ɵɵnextContext(2); return ctx_r49.cancel(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 43);
    i0.ɵɵlistener("click", function NovoDataTableCellHeader_novo_dropdown_5_div_14_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r50); const ctx_r51 = i0.ɵɵnextContext(2); return ctx_r51.filterMultiSelect(); });
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
    i0.ɵɵelementStart(2, "novo-icon");
    i0.ɵɵtext(3, "filter");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 10);
    i0.ɵɵelementStart(5, "novo-label");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, NovoDataTableCellHeader_novo_dropdown_5_button_7_Template, 2, 1, "button", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerStart(8, 12);
    i0.ɵɵtemplate(9, NovoDataTableCellHeader_novo_dropdown_5_list_9_Template, 4, 3, "list", 13);
    i0.ɵɵtemplate(10, NovoDataTableCellHeader_novo_dropdown_5_list_10_Template, 2, 1, "list", 13);
    i0.ɵɵtemplate(11, NovoDataTableCellHeader_novo_dropdown_5_list_11_Template, 12, 6, "list", 13);
    i0.ɵɵtemplate(12, NovoDataTableCellHeader_novo_dropdown_5_list_12_Template, 3, 4, "list", 13);
    i0.ɵɵtemplate(13, NovoDataTableCellHeader_novo_dropdown_5_list_13_Template, 4, 2, "list", 14);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(14, NovoDataTableCellHeader_novo_dropdown_5_div_14_Template, 5, 2, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("tooltip", ctx_r2.labels.filters);
    i0.ɵɵattribute("data-feature-id", "novo-data-table-filter-" + ctx_r2.id);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("filter-active", ctx_r2.filterActive);
    i0.ɵɵadvance(4);
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
        this.sortValue = SortDirection.NONE;
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
            this.sortValue = sortFilterState.sort.value === 'asc' ? SortDirection.ASC : SortDirection.DESC;
            this.sortActive = true;
        }
        else {
            this.icon = 'sortable';
            this.sortValue = SortDirection.NONE;
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
            if (this.dropdown.panelOpen && event.key === "Escape" /* Escape */) {
                // escape = clear text box and close
                Helpers.swallowEvent(event);
                this.clearOptionFilter();
                this.dropdown.closePanel();
            }
            else if (event.key === "Enter" /* Enter */) {
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
            this.dropdown._handleKeydown = (event) => {
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
    } }, inputs: { defaultSort: "defaultSort", allowMultipleFilters: "allowMultipleFilters", resized: "resized", filterTemplate: "filterTemplate", column: ["novo-data-table-cell-config", "column"] }, attrs: _c2, decls: 8, vars: 5, consts: [["data-automation-id", "novo-data-table-header-icon", 3, "class", 4, "ngIf"], ["data-automation-id", "novo-data-table-label"], ["data-automation-id", "novo-data-table-sort", "tooltipPosition", "right", 3, "tooltip", "value", "sortChange", 4, "ngIf"], ["side", "right", "parentScrollSelector", ".novo-data-table-container", "containerClass", "data-table-dropdown", "data-automation-id", "novo-data-table-filter", 4, "ngIf"], [1, "spacer"], ["class", "data-table-header-resizable", 4, "ngIf"], ["data-automation-id", "novo-data-table-header-icon"], ["data-automation-id", "novo-data-table-sort", "tooltipPosition", "right", 3, "tooltip", "value", "sortChange"], ["side", "right", "parentScrollSelector", ".novo-data-table-container", "containerClass", "data-table-dropdown", "data-automation-id", "novo-data-table-filter"], ["type", "button", "theme", "icon", "tooltipPosition", "right", 1, "filter-button", 3, "tooltip", "click"], [1, "header"], ["theme", "dialogue", "color", "negative", "size", "small", "icon", "times", "data-automation-id", "novo-data-table-filter-clear", 3, "click", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["class", "footer", 4, "ngIf"], ["theme", "dialogue", "color", "negative", "size", "small", "icon", "times", "data-automation-id", "novo-data-table-filter-clear", 3, "click"], [4, "ngIf"], [3, "active", "keepOpen", "click", 4, "ngIf"], ["class", "calendar-container", 4, "ngIf"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["class", "bhi-check", 4, "ngIf"], [1, "bhi-check"], [3, "keepOpen", "click"], [1, "calendar-container"], [1, "bhi-previous"], ["range", "true", 3, "ngModel", "onSelect", "ngModelChange"], [1, "dropdown-list-filter", 3, "keydown"], ["keepOpen", "true", 1, "filter-search"], ["data-automation-id", "novo-data-table-multi-select-option-filter-input", 3, "ngModel", "ngModelChange"], ["optionFilterInput", ""], [1, "bhi-search"], [1, "error-text", 3, "hidden"], [1, "dropdown-list-options"], [3, "hidden", "keepOpen", "click", 4, "ngFor", "ngForOf"], [1, "filter-null-results", 3, "hidden"], [3, "hidden", "keepOpen", "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-automation-id", "novo-data-table-filter-input", 3, "type", "ngModel", "ngModelChange"], ["filterInput", ""], [1, "footer"], ["theme", "dialogue", "color", "dark", "data-automation-id", "novo-data-table-multi-select-cancel", 3, "click"], ["theme", "dialogue", "color", "positive", "data-automation-id", "novo-data-table-multi-select-filter", 3, "click"], [1, "data-table-header-resizable"], [3, "mousedown"]], template: function NovoDataTableCellHeader_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoDataTableCellHeader_i_0_Template, 1, 3, "i", 0);
        i0.ɵɵelementStart(1, "label", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div");
        i0.ɵɵtemplate(4, NovoDataTableCellHeader_novo_sort_button_4_Template, 1, 3, "novo-sort-button", 2);
        i0.ɵɵtemplate(5, NovoDataTableCellHeader_novo_dropdown_5_Template, 15, 12, "novo-dropdown", 3);
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
    } }, directives: [i5.NgIf, i6.NovoDataTableSortButton, i7.TooltipDirective, i8.NovoDropdownElement, i9.NovoButtonElement, i10.NovoIconComponent, i11.NovoLabel, i5.NgSwitch, i5.NgSwitchCase, i5.NgSwitchDefault, i8.NovoDropdownListElement, i5.NgForOf, i8.NovoItemElement, i12.NovoDatePickerElement, i13.NgControlStatus, i13.NgModel, i13.DefaultValueAccessor, i5.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDataTableCellHeader, [{
        type: Component,
        args: [{
                selector: '[novo-data-table-cell-config]',
                template: `
    <i class="bhi-{{ labelIcon }} label-icon" *ngIf="labelIcon" data-automation-id="novo-data-table-header-icon"></i>
    <label data-automation-id="novo-data-table-label">{{ label }}</label>
    <div>
      <novo-sort-button
        *ngIf="config.sortable"
        data-automation-id="novo-data-table-sort"
        tooltipPosition="right"
        [tooltip]="labels.sort"
        [attr.data-feature-id]="'novo-data-table-sort-' + this.id"
        (sortChange)="sort()"
        [value]="sortValue"
      ></novo-sort-button>

      <novo-dropdown
        *ngIf="config.filterable"
        side="right"
        parentScrollSelector=".novo-data-table-container"
        containerClass="data-table-dropdown"
        data-automation-id="novo-data-table-filter"
      >
        <button
          class="filter-button"
          type="button"
          theme="icon"
          (click)="focusInput()"
          tooltipPosition="right"
          [tooltip]="labels.filters"
          [attr.data-feature-id]="'novo-data-table-filter-' + this.id"
        >
          <novo-icon [class.filter-active]="filterActive">filter</novo-icon>
        </button>
        <div class="header">
          <novo-label>{{ labels.filters }}</novo-label>
          <button
            theme="dialogue"
            color="negative"
            size="small"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9jZWxsLWhlYWRlcnMvZGF0YS10YWJsZS1oZWFkZXItY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUdMLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFTOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUsvRCx1QkFBaUg7OztJQUE5RyxrRUFBc0M7Ozs7SUFHdkMsMkNBUW9CO0lBRmxCLHNOQUFxQjtJQUV0QixpQkFBbUI7OztJQUpsQiw0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QyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtDb2x1bW5EZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEtleSB9IGZyb20gJ3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjL3V0aWxzJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9Ecm9wZG93bkVsZW1lbnQgfSBmcm9tICcuLi8uLi9kcm9wZG93bi9Ecm9wZG93bic7XG5pbXBvcnQge1xuICBJRGF0YVRhYmxlQ2hhbmdlRXZlbnQsXG4gIElEYXRhVGFibGVDb2x1bW4sXG4gIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWcsXG4gIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb24sXG4gIElEYXRhVGFibGVDb2x1bW5Tb3J0Q29uZmlnLFxuICBJRGF0YVRhYmxlU29ydEZpbHRlcixcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOb3ZvRGF0YVRhYmxlRmlsdGVyVXRpbHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9kYXRhLXRhYmxlLWZpbHRlci11dGlscyc7XG5pbXBvcnQgeyBTb3J0RGlyZWN0aW9uIH0gZnJvbSAnLi4vc29ydC1maWx0ZXInO1xuaW1wb3J0IHsgTm92b0RhdGFUYWJsZVNvcnRGaWx0ZXIgfSBmcm9tICcuLi9zb3J0LWZpbHRlci9zb3J0LWZpbHRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9kYXRhLXRhYmxlLXN0YXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbm92by1kYXRhLXRhYmxlLWNlbGwtY29uZmlnXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgY2xhc3M9XCJiaGkte3sgbGFiZWxJY29uIH19IGxhYmVsLWljb25cIiAqbmdJZj1cImxhYmVsSWNvblwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1oZWFkZXItaWNvblwiPjwvaT5cbiAgICA8bGFiZWwgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWxhYmVsXCI+e3sgbGFiZWwgfX08L2xhYmVsPlxuICAgIDxkaXY+XG4gICAgICA8bm92by1zb3J0LWJ1dHRvblxuICAgICAgICAqbmdJZj1cImNvbmZpZy5zb3J0YWJsZVwiXG4gICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1zb3J0XCJcbiAgICAgICAgdG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICBbdG9vbHRpcF09XCJsYWJlbHMuc29ydFwiXG4gICAgICAgIFthdHRyLmRhdGEtZmVhdHVyZS1pZF09XCInbm92by1kYXRhLXRhYmxlLXNvcnQtJyArIHRoaXMuaWRcIlxuICAgICAgICAoc29ydENoYW5nZSk9XCJzb3J0KClcIlxuICAgICAgICBbdmFsdWVdPVwic29ydFZhbHVlXCJcbiAgICAgID48L25vdm8tc29ydC1idXR0b24+XG5cbiAgICAgIDxub3ZvLWRyb3Bkb3duXG4gICAgICAgICpuZ0lmPVwiY29uZmlnLmZpbHRlcmFibGVcIlxuICAgICAgICBzaWRlPVwicmlnaHRcIlxuICAgICAgICBwYXJlbnRTY3JvbGxTZWxlY3Rvcj1cIi5ub3ZvLWRhdGEtdGFibGUtY29udGFpbmVyXCJcbiAgICAgICAgY29udGFpbmVyQ2xhc3M9XCJkYXRhLXRhYmxlLWRyb3Bkb3duXCJcbiAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWZpbHRlclwiXG4gICAgICA+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cImZpbHRlci1idXR0b25cIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgICAgKGNsaWNrKT1cImZvY3VzSW5wdXQoKVwiXG4gICAgICAgICAgdG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgIFt0b29sdGlwXT1cImxhYmVscy5maWx0ZXJzXCJcbiAgICAgICAgICBbYXR0ci5kYXRhLWZlYXR1cmUtaWRdPVwiJ25vdm8tZGF0YS10YWJsZS1maWx0ZXItJyArIHRoaXMuaWRcIlxuICAgICAgICA+XG4gICAgICAgICAgPG5vdm8taWNvbiBbY2xhc3MuZmlsdGVyLWFjdGl2ZV09XCJmaWx0ZXJBY3RpdmVcIj5maWx0ZXI8L25vdm8taWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8bm92by1sYWJlbD57eyBsYWJlbHMuZmlsdGVycyB9fTwvbm92by1sYWJlbD5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0aGVtZT1cImRpYWxvZ3VlXCJcbiAgICAgICAgICAgIGNvbG9yPVwibmVnYXRpdmVcIlxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIGljb249XCJ0aW1lc1wiXG4gICAgICAgICAgICAoY2xpY2spPVwiY2xlYXJGaWx0ZXIoKVwiXG4gICAgICAgICAgICAqbmdJZj1cImZpbHRlciAhPT0gbnVsbCAmJiBmaWx0ZXIgIT09IHVuZGVmaW5lZCAmJiBmaWx0ZXIgIT09ICcnXCJcbiAgICAgICAgICAgIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1maWx0ZXItY2xlYXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGxhYmVscy5jbGVhciB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiY29uZmlnLmZpbHRlckNvbmZpZy50eXBlXCI+XG4gICAgICAgICAgPGxpc3QgKm5nU3dpdGNoQ2FzZT1cIidkYXRlJ1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzaG93Q3VzdG9tUmFuZ2VcIj5cbiAgICAgICAgICAgICAgPGl0ZW1cbiAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZURhdGVGaWx0ZXIgPT09IG9wdGlvbi5sYWJlbFwiXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJmaWx0ZXJEYXRhKG9wdGlvbilcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1kYXRhLXRhYmxlLWZpbHRlci0nICsgb3B0aW9uLmxhYmVsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IG9wdGlvbi5sYWJlbCB9fSA8aSBjbGFzcz1cImJoaS1jaGVja1wiICpuZ0lmPVwiYWN0aXZlRGF0ZUZpbHRlciA9PT0gb3B0aW9uLmxhYmVsXCI+PC9pPlxuICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxpdGVtXG4gICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwibGFiZWxzLmN1c3RvbURhdGVSYW5nZSA9PT0gYWN0aXZlRGF0ZUZpbHRlclwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVDdXN0b21SYW5nZSgkZXZlbnQsIHRydWUpXCJcbiAgICAgICAgICAgICAgKm5nSWY9XCJjb25maWcuZmlsdGVyQ29uZmlnLmFsbG93Q3VzdG9tUmFuZ2UgJiYgIXNob3dDdXN0b21SYW5nZVwiXG4gICAgICAgICAgICAgIFtrZWVwT3Blbl09XCJ0cnVlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3sgbGFiZWxzLmN1c3RvbURhdGVSYW5nZSB9fSA8aSBjbGFzcz1cImJoaS1jaGVja1wiICpuZ0lmPVwibGFiZWxzLmN1c3RvbURhdGVSYW5nZSA9PT0gYWN0aXZlRGF0ZUZpbHRlclwiPjwvaT5cbiAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1jb250YWluZXJcIiAqbmdJZj1cInNob3dDdXN0b21SYW5nZVwiPlxuICAgICAgICAgICAgICA8ZGl2IChjbGljayk9XCJ0b2dnbGVDdXN0b21SYW5nZSgkZXZlbnQsIGZhbHNlKVwiPjxpIGNsYXNzPVwiYmhpLXByZXZpb3VzXCI+PC9pPnt7IGxhYmVscy5iYWNrVG9QcmVzZXRGaWx0ZXJzIH19PC9kaXY+XG4gICAgICAgICAgICAgIDxub3ZvLWRhdGUtcGlja2VyIChvblNlbGVjdCk9XCJmaWx0ZXJEYXRhKCRldmVudClcIiBbKG5nTW9kZWwpXT1cImZpbHRlclwiIHJhbmdlPVwidHJ1ZVwiPjwvbm92by1kYXRlLXBpY2tlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICA8bGlzdCAqbmdTd2l0Y2hDYXNlPVwiJ3NlbGVjdCdcIj5cbiAgICAgICAgICAgIDxpdGVtXG4gICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiZmlsdGVyID09PSBvcHRpb25cIlxuICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9uc1wiXG4gICAgICAgICAgICAgIChjbGljayk9XCJmaWx0ZXJEYXRhKG9wdGlvbilcIlxuICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tZGF0YS10YWJsZS1maWx0ZXItJyArIChvcHRpb24/LmxhYmVsIHx8IG9wdGlvbilcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3Bhbj57eyBvcHRpb24/LmxhYmVsIHx8IG9wdGlvbiB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktY2hlY2tcIiAqbmdJZj1cIm9wdGlvbi5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSA/IGZpbHRlciA9PT0gb3B0aW9uLnZhbHVlIDogZmlsdGVyID09PSBvcHRpb25cIj48L2k+XG4gICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgPC9saXN0PlxuICAgICAgICAgIDxsaXN0ICpuZ1N3aXRjaENhc2U9XCInbXVsdGktc2VsZWN0J1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWxpc3QtZmlsdGVyXCIgKGtleWRvd24pPVwibXVsdGlTZWxlY3RPcHRpb25GaWx0ZXJIYW5kbGVLZXlkb3duKCRldmVudClcIj5cbiAgICAgICAgICAgICAgPGl0ZW0gY2xhc3M9XCJmaWx0ZXItc2VhcmNoXCIga2VlcE9wZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm9wdGlvbkZpbHRlclwiXG4gICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJtdWx0aVNlbGVjdE9wdGlvbkZpbHRlcigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICNvcHRpb25GaWx0ZXJJbnB1dFxuICAgICAgICAgICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLW11bHRpLXNlbGVjdC1vcHRpb24tZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiBbaGlkZGVuXT1cIiFlcnJvciB8fCAhbXVsdGlTZWxlY3RIYXNWaXNpYmxlT3B0aW9ucygpXCI+e3sgbGFiZWxzLnNlbGVjdEZpbHRlck9wdGlvbnMgfX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWxpc3Qtb3B0aW9uc1wiPlxuICAgICAgICAgICAgICA8aXRlbVxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zXCJcbiAgICAgICAgICAgICAgICBbaGlkZGVuXT1cIm11bHRpU2VsZWN0T3B0aW9uSXNIaWRkZW4ob3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZVNlbGVjdGlvbihvcHRpb24pXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tZGF0YS10YWJsZS1maWx0ZXItJyArIChvcHRpb24/LmxhYmVsIHx8IG9wdGlvbilcIlxuICAgICAgICAgICAgICAgIFtrZWVwT3Blbl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuYmhpLWNoZWNrYm94LWVtcHR5XT1cIiFpc1NlbGVjdGVkKG9wdGlvbiwgbXVsdGlTZWxlY3RlZE9wdGlvbnMpXCJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5iaGktY2hlY2tib3gtZmlsbGVkXT1cImlzU2VsZWN0ZWQob3B0aW9uLCBtdWx0aVNlbGVjdGVkT3B0aW9ucylcIlxuICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJmaWx0ZXItbnVsbC1yZXN1bHRzXCIgW2hpZGRlbl09XCJtdWx0aVNlbGVjdEhhc1Zpc2libGVPcHRpb25zKClcIj57eyBsYWJlbHMucGlja2VyRW1wdHkgfX08L3A+XG4gICAgICAgICAgPC9saXN0PlxuICAgICAgICAgIDxsaXN0ICpuZ1N3aXRjaENhc2U9XCInY3VzdG9tJ1wiPlxuICAgICAgICAgICAgPGl0ZW0gY2xhc3M9XCJmaWx0ZXItc2VhcmNoXCIga2VlcE9wZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmaWx0ZXJUZW1wbGF0ZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNvbmZpZyB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgPC9saXN0PlxuICAgICAgICAgIDxsaXN0ICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgICA8aXRlbSBjbGFzcz1cImZpbHRlci1zZWFyY2hcIiBrZWVwT3Blbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgW3R5cGVdPVwiY29uZmlnLmZpbHRlckNvbmZpZy50eXBlXCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpbHRlclwiXG4gICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiZmlsdGVyRGF0YSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAjZmlsdGVySW5wdXRcbiAgICAgICAgICAgICAgICBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWRhdGEtdGFibGUtZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCIgKm5nSWY9XCJtdWx0aVNlbGVjdFwiPlxuICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIGNvbG9yPVwiZGFya1wiIChjbGljayk9XCJjYW5jZWwoKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1tdWx0aS1zZWxlY3QtY2FuY2VsXCI+XG4gICAgICAgICAgICB7eyBsYWJlbHMuY2FuY2VsIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImRpYWxvZ3VlXCIgY29sb3I9XCJwb3NpdGl2ZVwiIChjbGljayk9XCJmaWx0ZXJNdWx0aVNlbGVjdCgpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLW11bHRpLXNlbGVjdC1maWx0ZXJcIj5cbiAgICAgICAgICAgIHt7IGxhYmVscy5maWx0ZXJzIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9ub3ZvLWRyb3Bkb3duPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzcGFjZXJcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZGF0YS10YWJsZS1oZWFkZXItcmVzaXphYmxlXCIgKm5nSWY9XCJjb25maWcucmVzaXphYmxlXCI+PHNwYW4gKG1vdXNlZG93bik9XCJzdGFydFJlc2l6ZSgkZXZlbnQpXCI+Jm5ic3A7PC9zcGFuPjwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZUNlbGxIZWFkZXI8VD4gaW1wbGVtZW50cyBJRGF0YVRhYmxlU29ydEZpbHRlciwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdmaWx0ZXJJbnB1dCcpXG4gIGZpbHRlcklucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKE5vdm9Ecm9wZG93bkVsZW1lbnQpXG4gIGRyb3Bkb3duOiBOb3ZvRHJvcGRvd25FbGVtZW50O1xuICBAVmlld0NoaWxkKCdvcHRpb25GaWx0ZXJJbnB1dCcpXG4gIG9wdGlvbkZpbHRlcklucHV0OiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIGRlZmF1bHRTb3J0OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfTtcblxuICBASW5wdXQoKVxuICBhbGxvd011bHRpcGxlRmlsdGVyczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHJlc2l6ZWQ6IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlQ29sdW1uPFQ+PjtcbiAgQElucHV0KClcbiAgZmlsdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBIb3N0QmluZGluZygnY2xhc3MucmVzaXphYmxlJylcbiAgcHVibGljIHJlc2l6YWJsZTogYm9vbGVhbjtcblxuICBASW5wdXQoJ25vdm8tZGF0YS10YWJsZS1jZWxsLWNvbmZpZycpXG4gIHNldCBjb2x1bW4oY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KSB7XG4gICAgdGhpcy5fY29sdW1uID0gY29sdW1uO1xuICAgIHRoaXMubGFiZWwgPSBjb2x1bW4udHlwZSA9PT0gJ2FjdGlvbicgPyAnJyA6IGNvbHVtbi5sYWJlbDtcbiAgICB0aGlzLmxhYmVsSWNvbiA9IGNvbHVtbi5sYWJlbEljb247XG5cbiAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgIHNvcnRhYmxlOiAhIWNvbHVtbi5zb3J0YWJsZSxcbiAgICAgIGZpbHRlcmFibGU6ICEhY29sdW1uLmZpbHRlcmFibGUsXG4gICAgICByZXNpemFibGU6ICEhY29sdW1uLnJlc2l6YWJsZSxcbiAgICB9O1xuICAgIHRoaXMucmVzaXphYmxlID0gdGhpcy5jb25maWcucmVzaXphYmxlO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtczogeyBmaWx0ZXI/OiBGdW5jdGlvbjsgc29ydD86IEZ1bmN0aW9uIH0gPSB7fTtcblxuICAgIGlmIChjb2x1bW4uZmlsdGVyYWJsZSAmJiBIZWxwZXJzLmlzT2JqZWN0KGNvbHVtbi5maWx0ZXJhYmxlKSkge1xuICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnID0gY29sdW1uLmZpbHRlcmFibGUgYXMgSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZztcbiAgICAgIGlmICghdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUpIHtcbiAgICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnID0geyB0eXBlOiAndGV4dCcgfTtcbiAgICAgIH1cbiAgICAgIGlmICgoY29sdW1uLmZpbHRlcmFibGUgYXMgSURhdGFUYWJsZUNvbHVtbkZpbHRlckNvbmZpZykudHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybXMuZmlsdGVyID0gKGNvbHVtbi5maWx0ZXJhYmxlIGFzIElEYXRhVGFibGVDb2x1bW5GaWx0ZXJDb25maWcpLnRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnID0geyB0eXBlOiAndGV4dCcgfTtcbiAgICB9XG5cbiAgICBpZiAoY29sdW1uLnNvcnRhYmxlICYmIEhlbHBlcnMuaXNPYmplY3QoY29sdW1uLnNvcnRhYmxlKSkge1xuICAgICAgaWYgKChjb2x1bW4uc29ydGFibGUgYXMgSURhdGFUYWJsZUNvbHVtblNvcnRDb25maWcpLnRyYW5zZm9ybSkge1xuICAgICAgICB0cmFuc2Zvcm1zLnNvcnQgPSAoY29sdW1uLnNvcnRhYmxlIGFzIElEYXRhVGFibGVDb2x1bW5Tb3J0Q29uZmlnKS50cmFuc2Zvcm07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID09PSAnZGF0ZScgJiYgIXRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy5vcHRpb25zKSB7XG4gICAgICB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9ucyA9IHRoaXMuZ2V0RGVmYXVsdERhdGVGaWx0ZXJPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWcudHJhbnNmb3JtcyA9IHRyYW5zZm9ybXM7XG4gIH1cblxuICBwcml2YXRlIF9yZXJlbmRlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGNoYW5nZVRpbWVvdXQ6IGFueTtcblxuICBwdWJsaWMgbGFiZWw6IHN0cmluZztcbiAgcHVibGljIGljb246IHN0cmluZyA9ICdzb3J0YWJsZSc7XG4gIHB1YmxpYyBsYWJlbEljb246IHN0cmluZztcbiAgcHVibGljIGlkOiBzdHJpbmc7XG4gIHB1YmxpYyBmaWx0ZXI6IGFueTtcbiAgcHVibGljIGRpcmVjdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgZmlsdGVyQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzb3J0QWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzb3J0VmFsdWU6IFNvcnREaXJlY3Rpb24gPSBTb3J0RGlyZWN0aW9uLk5PTkU7XG4gIHB1YmxpYyBzaG93Q3VzdG9tUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGFjdGl2ZURhdGVGaWx0ZXI6IHN0cmluZztcbiAgcHVibGljIGNvbmZpZzoge1xuICAgIHNvcnRhYmxlOiBib29sZWFuO1xuICAgIGZpbHRlcmFibGU6IGJvb2xlYW47XG4gICAgcmVzaXphYmxlOiBib29sZWFuO1xuICAgIHRyYW5zZm9ybXM/OiB7IGZpbHRlcj86IEZ1bmN0aW9uOyBzb3J0PzogRnVuY3Rpb24gfTtcbiAgICBmaWx0ZXJDb25maWc/OiBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyQ29uZmlnO1xuICB9O1xuICBwdWJsaWMgbXVsdGlTZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIG11bHRpU2VsZWN0ZWRPcHRpb25zOiBBcnJheTxhbnk+ID0gW107XG4gIHByaXZhdGUgbXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuOiBBcnJheTx7IG9wdGlvbjogc3RyaW5nIHwgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbjsgaGlkZGVuOiBib29sZWFuIH0+ID0gW107XG4gIHB1YmxpYyBvcHRpb25GaWx0ZXI6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgZXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIF9jb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSxcbiAgICBwcml2YXRlIHN0YXRlOiBEYXRhVGFibGVTdGF0ZTxUPixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBfc29ydDogTm92b0RhdGFUYWJsZVNvcnRGaWx0ZXI8VD4sXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIF9jZGtDb2x1bW5EZWY6IENka0NvbHVtbkRlZixcbiAgKSB7XG4gICAgdGhpcy5fcmVyZW5kZXJTdWJzY3JpcHRpb24gPSBzdGF0ZS51cGRhdGVzLnN1YnNjcmliZSgoY2hhbmdlOiBJRGF0YVRhYmxlQ2hhbmdlRXZlbnQpID0+IHRoaXMuY2hlY2tTb3J0RmlsdGVyU3RhdGUoY2hhbmdlKSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2Nka0NvbHVtbkRlZikge1xuICAgICAgdGhpcy5pZCA9IHRoaXMuX2Nka0NvbHVtbkRlZi5uYW1lO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2tTb3J0RmlsdGVyU3RhdGUoeyBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSwgdHJ1ZSk7XG5cbiAgICB0aGlzLm11bHRpU2VsZWN0ID0gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnICYmIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID8gdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUgPT09ICdtdWx0aS1zZWxlY3QnIDogZmFsc2U7XG4gICAgaWYgKHRoaXMubXVsdGlTZWxlY3QpIHtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmZpbHRlciA/IFsuLi50aGlzLmZpbHRlcl0gOiBbXTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXJlbmRlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbikgPT4ge1xuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2hlY2tTb3J0RmlsdGVyU3RhdGUoc29ydEZpbHRlclN0YXRlOiBJRGF0YVRhYmxlQ2hhbmdlRXZlbnQsIGluaXRpYWxDb25maWc6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmIChzb3J0RmlsdGVyU3RhdGUuc29ydCAmJiBzb3J0RmlsdGVyU3RhdGUuc29ydC5pZCA9PT0gdGhpcy5pZCkge1xuICAgICAgdGhpcy5pY29uID0gYHNvcnQtJHtzb3J0RmlsdGVyU3RhdGUuc29ydC52YWx1ZX1gO1xuICAgICAgdGhpcy5zb3J0VmFsdWUgPSBzb3J0RmlsdGVyU3RhdGUuc29ydC52YWx1ZSA9PT0gJ2FzYycgPyBTb3J0RGlyZWN0aW9uLkFTQyA6IFNvcnREaXJlY3Rpb24uREVTQztcbiAgICAgIHRoaXMuc29ydEFjdGl2ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaWNvbiA9ICdzb3J0YWJsZSc7XG4gICAgICB0aGlzLnNvcnRWYWx1ZSA9IFNvcnREaXJlY3Rpb24uTk9ORTtcbiAgICAgIHRoaXMuc29ydEFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHRhYmxlRmlsdGVyID0gSGVscGVycy5jb252ZXJ0VG9BcnJheShzb3J0RmlsdGVyU3RhdGUuZmlsdGVyKTtcbiAgICBjb25zdCB0aGlzRmlsdGVyID0gdGFibGVGaWx0ZXIuZmluZCgoZmlsdGVyKSA9PiBmaWx0ZXIgJiYgZmlsdGVyLmlkID09PSB0aGlzLmlkKTtcblxuICAgIGlmICh0aGlzRmlsdGVyKSB7XG4gICAgICB0aGlzLmZpbHRlckFjdGl2ZSA9IHRydWU7XG4gICAgICBpZiAoaW5pdGlhbENvbmZpZyAmJiB0aGlzRmlsdGVyLnR5cGUgPT09ICdkYXRlJyAmJiB0aGlzRmlsdGVyLnNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZUZpbHRlciA9IHRoaXNGaWx0ZXIuc2VsZWN0ZWRPcHRpb24ubGFiZWwgfHwgdGhpcy5sYWJlbHMuY3VzdG9tRGF0ZVJhbmdlO1xuICAgICAgfVxuICAgICAgdGhpcy5maWx0ZXIgPSB0aGlzRmlsdGVyLnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlckFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5maWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmFjdGl2ZURhdGVGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgfVxuICAgIGlmICh0aGlzLmRlZmF1bHRTb3J0ICYmIHRoaXMuaWQgPT09IHRoaXMuZGVmYXVsdFNvcnQuaWQpIHtcbiAgICAgIHRoaXMuaWNvbiA9IGBzb3J0LSR7dGhpcy5kZWZhdWx0U29ydC52YWx1ZX1gO1xuICAgICAgdGhpcy5zb3J0QWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5tdWx0aVNlbGVjdCA9IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZyAmJiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcudHlwZSA/IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID09PSAnbXVsdGktc2VsZWN0JyA6IGZhbHNlO1xuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0KSB7XG4gICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zID0gdGhpcy5maWx0ZXIgPyBbLi4udGhpcy5maWx0ZXJdIDogW107XG4gICAgICBpZiAodGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLm9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9uc1swXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbiA9ICh0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9ucyBhcyBzdHJpbmdbXSkubWFwKChvcHRpb246IHN0cmluZyk6IHtcbiAgICAgICAgICAgIG9wdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgaGlkZGVuOiBib29sZWFuO1xuICAgICAgICAgIH0gPT4gKHsgb3B0aW9uLCBoaWRkZW46IGZhbHNlIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbiA9ICh0aGlzLmNvbmZpZy5maWx0ZXJDb25maWcub3B0aW9ucyBhcyBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uW10pLm1hcChcbiAgICAgICAgICAgIChvcHRpb246IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb24pOiB7IG9wdGlvbjogSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbjsgaGlkZGVuOiBib29sZWFuIH0gPT4gKHtcbiAgICAgICAgICAgICAgb3B0aW9uLFxuICAgICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIGlzU2VsZWN0ZWQob3B0aW9uLCBvcHRpb25zTGlzdCkge1xuICAgIGlmIChvcHRpb25zTGlzdCkge1xuICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBvcHRpb24uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPyBvcHRpb24udmFsdWUgOiBvcHRpb247XG5cbiAgICAgIGNvbnN0IGZvdW5kID0gb3B0aW9uc0xpc3QuZmluZCgoaXRlbSkgPT4gdGhpcy5vcHRpb25QcmVzZW50Q2hlY2soaXRlbSwgb3B0aW9uVmFsdWUpKTtcbiAgICAgIHJldHVybiBmb3VuZCAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VsZWN0aW9uKG9wdGlvbikge1xuICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uLmhhc093blByb3BlcnR5KCd2YWx1ZScpID8gb3B0aW9uLnZhbHVlIDogb3B0aW9uO1xuXG4gICAgY29uc3Qgb3B0aW9uSW5kZXggPSB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zLmZpbmRJbmRleCgoaXRlbSkgPT4gdGhpcy5vcHRpb25QcmVzZW50Q2hlY2soaXRlbSwgb3B0aW9uVmFsdWUpKTtcbiAgICB0aGlzLmVycm9yID0gZmFsc2U7XG4gICAgaWYgKG9wdGlvbkluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMuc3BsaWNlKG9wdGlvbkluZGV4LCAxKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbkZpbHRlciAmJiAhdGhpcy5nZXRPcHRpb25UZXh0KG9wdGlvbikudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHRoaXMub3B0aW9uRmlsdGVyLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuW3RoaXMubXVsdGlTZWxlY3RlZE9wdGlvbklzSGlkZGVuLmZpbmRJbmRleCgocmVjb3JkKSA9PiByZWNvcmQub3B0aW9uID09PSBvcHRpb24pXS5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zLnB1c2gob3B0aW9uVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvcHRpb25QcmVzZW50Q2hlY2soaXRlbSwgb3B0aW9uVmFsdWUpOiBib29sZWFuIHtcbiAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgcmV0dXJuIGl0ZW0udmFsdWUgPT09IG9wdGlvblZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXRlbSA9PT0gb3B0aW9uVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zID0gdGhpcy5maWx0ZXIgPyBbLi4udGhpcy5maWx0ZXJdIDogW107XG4gICAgdGhpcy5kcm9wZG93bi5jbG9zZVBhbmVsKCk7XG4gICAgdGhpcy5jbGVhck9wdGlvbkZpbHRlcigpO1xuICB9XG5cbiAgcHVibGljIGZpbHRlck11bHRpU2VsZWN0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCAmJiAhdGhpcy5maWx0ZXIpIHtcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RIYXNWaXNpYmxlT3B0aW9ucygpICYmIHRoaXMuZHJvcGRvd24gPyAodGhpcy5lcnJvciA9IHRydWUpIDogbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhck9wdGlvbkZpbHRlcigpO1xuICAgICAgY29uc3QgYWN0dWFsRmlsdGVyID0gdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwID8gWy4uLnRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnNdIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5maWx0ZXJEYXRhKGFjdHVhbEZpbHRlcik7XG4gICAgICB0aGlzLmRyb3Bkb3duLmNsb3NlUGFuZWwoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbXVsdGlTZWxlY3RPcHRpb25GaWx0ZXIob3B0aW9uRmlsdGVyOiBzdHJpbmcpIHtcbiAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbi5mb3JFYWNoKChyZWNvcmQpID0+IHtcbiAgICAgIGlmIChyZWNvcmQub3B0aW9uKSB7XG4gICAgICAgIHJlY29yZC5oaWRkZW4gPSAhKFxuICAgICAgICAgIHRoaXMuZ2V0T3B0aW9uVGV4dChyZWNvcmQub3B0aW9uKS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgob3B0aW9uRmlsdGVyLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgICAgdGhpcy5pc1NlbGVjdGVkKHJlY29yZC5vcHRpb24sIHRoaXMubXVsdGlTZWxlY3RlZE9wdGlvbnMpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbXVsdGlTZWxlY3RPcHRpb25Jc0hpZGRlbihvcHRpb246IHN0cmluZyB8IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9uSXNIaWRkZW4uZmluZCgocmVjb3JkKSA9PiByZWNvcmQub3B0aW9uID09PSBvcHRpb24pLmhpZGRlbjtcbiAgfVxuXG4gIHB1YmxpYyBtdWx0aVNlbGVjdEhhc1Zpc2libGVPcHRpb25zKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25Jc0hpZGRlbi5zb21lKChyZWNvcmQpID0+ICFyZWNvcmQuaGlkZGVuKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3B0aW9uVGV4dChvcHRpb246IHN0cmluZyB8IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb24pOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9uICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG9wdGlvbi50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvcHQgPSBvcHRpb24gYXMgSURhdGFUYWJsZUNvbHVtbkZpbHRlck9wdGlvbjtcbiAgICAgIHJldHVybiAob3B0LmxhYmVsLmxlbmd0aCA+IDAgPyBvcHQubGFiZWwgOiBvcHQudmFsdWUpLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBtdWx0aVNlbGVjdE9wdGlvbkZpbHRlckhhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgdGhpcy5lcnJvciA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuZHJvcGRvd24ucGFuZWxPcGVuICYmIGV2ZW50LmtleSA9PT0gS2V5LkVzY2FwZSkge1xuICAgICAgICAvLyBlc2NhcGUgPSBjbGVhciB0ZXh0IGJveCBhbmQgY2xvc2VcbiAgICAgICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgICAgICB0aGlzLmNsZWFyT3B0aW9uRmlsdGVyKCk7XG4gICAgICAgIHRoaXMuZHJvcGRvd24uY2xvc2VQYW5lbCgpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09IEtleS5FbnRlcikge1xuICAgICAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICAgIHRoaXMuZmlsdGVyTXVsdGlTZWxlY3QoKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIChldmVudC5rZXlDb2RlID49IDY1ICYmIGV2ZW50LmtleUNvZGUgPD0gOTApIHx8XG4gICAgICAgIChldmVudC5rZXlDb2RlID49IDk2ICYmIGV2ZW50LmtleUNvZGUgPD0gMTA1KSB8fFxuICAgICAgICAoZXZlbnQua2V5Q29kZSA+PSA0OCAmJiBldmVudC5rZXlDb2RlIDw9IDU3KVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMub3B0aW9uRmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJPcHRpb25GaWx0ZXIoKSB7XG4gICAgdGhpcy5lcnJvciA9IGZhbHNlO1xuICAgIGlmICh0aGlzLm9wdGlvbkZpbHRlci5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLm9wdGlvbkZpbHRlciA9ICcnO1xuICAgICAgdGhpcy5tdWx0aVNlbGVjdGVkT3B0aW9uSXNIaWRkZW4uZm9yRWFjaCgocmVjb3JkKSA9PiB7XG4gICAgICAgIHJlY29yZC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGFydFJlc2l6ZShtb3VzZURvd25FdmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIG1vdXNlRG93bkV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbWluaW11bVdpZHRoID0gNjAgKyAodGhpcy5jb25maWcuZmlsdGVyYWJsZSA/IDMwIDogMCkgKyAodGhpcy5jb25maWcuc29ydGFibGUgPyAzMCA6IDApO1xuICAgIGNvbnN0IHN0YXJ0aW5nV2lkdGg6IG51bWJlciA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIGNvbnN0IG1vdXNlTW92ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KHdpbmRvdy5kb2N1bWVudCwgJ21vdXNlbW92ZScpLnN1YnNjcmliZSgobWlkZGxlTW91c2VFdmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgY29uc3QgZGlmZmVyZW5jZVdpZHRoOiBudW1iZXIgPSBtaWRkbGVNb3VzZUV2ZW50LmNsaWVudFggLSBtb3VzZURvd25FdmVudC5jbGllbnRYO1xuICAgICAgbGV0IHdpZHRoOiBudW1iZXIgPSBzdGFydGluZ1dpZHRoICsgZGlmZmVyZW5jZVdpZHRoO1xuICAgICAgaWYgKHdpZHRoIDwgbWluaW11bVdpZHRoKSB7XG4gICAgICAgIHdpZHRoID0gbWluaW11bVdpZHRoO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29sdW1uLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWluLXdpZHRoJywgYCR7dGhpcy5fY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF4LXdpZHRoJywgYCR7dGhpcy5fY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLl9jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLnJlc2l6ZWQubmV4dCh0aGlzLl9jb2x1bW4pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbW91c2VVcFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KHdpbmRvdy5kb2N1bWVudCwgJ21vdXNldXAnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgbW91c2VVcFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgbW91c2VNb3ZlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKG1vdXNlTW92ZVN1YnNjcmlwdGlvbik7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2gobW91c2VVcFN1YnNjcmlwdGlvbik7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlQ3VzdG9tUmFuZ2UoZXZlbnQ6IEV2ZW50LCB2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLnNob3dDdXN0b21SYW5nZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5kcm9wZG93bi5vcGVuUGFuZWwoKTsgLy8gRW5zdXJlcyB0aGF0IHRoZSBwYW5lbCBjb3JyZWN0bHkgdXBkYXRlcyB0byB0aGUgZHluYW1pYyBzaXplIG9mIHRoZSBkcm9wZG93blxuICB9XG5cbiAgcHVibGljIGZvY3VzSW5wdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmlsdGVySW5wdXQgJiYgdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpLCAwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubXVsdGlTZWxlY3QgJiYgdGhpcy5kcm9wZG93bikge1xuICAgICAgdGhpcy5kcm9wZG93bi5faGFuZGxlS2V5ZG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLm11bHRpU2VsZWN0T3B0aW9uRmlsdGVySGFuZGxlS2V5ZG93bihldmVudCk7XG4gICAgICB9O1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9wdGlvbkZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSwgMCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzb3J0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYW5nZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNoYW5nZVRpbWVvdXQpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5nZXROZXh0U29ydERpcmVjdGlvbih0aGlzLmRpcmVjdGlvbik7XG4gICAgICB0aGlzLl9zb3J0LnNvcnQodGhpcy5pZCwgdGhpcy5kaXJlY3Rpb24sIHRoaXMuY29uZmlnLnRyYW5zZm9ybXMuc29ydCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyRGF0YShmaWx0ZXI/OiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgYWN0dWFsRmlsdGVyID0gTm92b0RhdGFUYWJsZUZpbHRlclV0aWxzLmNvbnN0cnVjdEZpbHRlcihmaWx0ZXIsIHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlLCB0aGlzLm11bHRpU2VsZWN0KTtcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZy50eXBlID09PSAnZGF0ZScgJiYgZmlsdGVyID8gZmlsdGVyIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKHRoaXMuY2hhbmdlVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2hhbmdlVGltZW91dCk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoYWN0dWFsRmlsdGVyID09PSAnJykge1xuICAgICAgICBhY3R1YWxGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLl9zb3J0LmZpbHRlcihcbiAgICAgICAgdGhpcy5pZCxcbiAgICAgICAgdGhpcy5jb25maWcuZmlsdGVyQ29uZmlnLnR5cGUsXG4gICAgICAgIGFjdHVhbEZpbHRlcixcbiAgICAgICAgdGhpcy5jb25maWcudHJhbnNmb3Jtcy5maWx0ZXIsXG4gICAgICAgIHRoaXMuYWxsb3dNdWx0aXBsZUZpbHRlcnMsXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uLFxuICAgICAgKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckZpbHRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm11bHRpU2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgdGhpcy5hY3RpdmVEYXRlRmlsdGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZmlsdGVyRGF0YSh1bmRlZmluZWQpO1xuICAgIHRoaXMuY2xlYXJPcHRpb25GaWx0ZXIoKTtcbiAgICB0aGlzLmRyb3Bkb3duLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV4dFNvcnREaXJlY3Rpb24oZGlyZWN0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm4gJ2FzYyc7XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdhc2MnKSB7XG4gICAgICByZXR1cm4gJ2Rlc2MnO1xuICAgIH1cbiAgICByZXR1cm4gJ2FzYyc7XG4gIH1cblxuICBwcml2YXRlIGdldERlZmF1bHREYXRlRmlsdGVyT3B0aW9ucygpOiBJRGF0YVRhYmxlQ29sdW1uRmlsdGVyT3B0aW9uW10ge1xuICAgIGNvbnN0IG9wdHM6IElEYXRhVGFibGVDb2x1bW5GaWx0ZXJPcHRpb25bXSA9IFtcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QxRGF5LCBtaW46IC0xLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3Q3RGF5cywgbWluOiAtNywgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MzBEYXlzLCBtaW46IC0zMCwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0OTBEYXlzLCBtaW46IC05MCwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MVllYXIsIG1pbjogLTM2NiwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MURheSwgbWluOiAwLCBtYXg6IDEgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQ3RGF5cywgbWluOiAwLCBtYXg6IDcgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQzMERheXMsIG1pbjogMCwgbWF4OiAzMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDkwRGF5cywgbWluOiAwLCBtYXg6IDkwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MVllYXIsIG1pbjogMCwgbWF4OiAzNjYgfSxcbiAgICBdO1xuICAgIHJldHVybiBvcHRzO1xuICB9XG59XG4iXX0=