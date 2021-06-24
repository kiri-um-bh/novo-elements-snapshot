// NG2
import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// Vendor
import * as dateFns from 'date-fns';
import { debounceTime } from 'rxjs/operators';
// APP
import { CollectionEvent } from '../../services/data-provider/CollectionEvent';
import { PagedArrayCollection } from '../../services/data-provider/PagedArrayCollection';
import { NovoLabelService } from '../../services/novo-label-service';
import { FormUtils } from '../../utils/form-utils/FormUtils';
import { Helpers } from '../../utils/Helpers';
import { notify } from '../../utils/notifier/notifier.util';
import { ControlFactory, ReadOnlyControl } from './../form/FormControls';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "../../utils/form-utils/FormUtils";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "./extras/pagination/Pagination";
import * as i6 from "../loading/Loading";
import * as i7 from "../toast/Toast";
import * as i8 from "../form/Form";
import * as i9 from "../button/Button";
import * as i10 from "../form/extras/checkbox/Checkbox";
import * as i11 from "../tooltip/Tooltip.directive";
import * as i12 from "./extras/th-orderable/ThOrderable";
import * as i13 from "./extras/th-sortable/ThSortable";
import * as i14 from "../dropdown/Dropdown";
import * as i15 from "./extras/keep-filter-focus/KeepFilterFocus";
import * as i16 from "./extras/table-filter/TableFilter";
import * as i17 from "../date-picker/DatePicker";
import * as i18 from "./extras/table-cell/TableCell";
import * as i19 from "../form/Control";
import * as i20 from "./extras/row-details/RowDetails";
const _c0 = ["filterInput"];
function NovoTableElement_header_0_novo_pagination_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-pagination", 6);
    i0.ɵɵlistener("pageChange", function NovoTableElement_header_0_novo_pagination_3_Template_novo_pagination_pageChange_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.dataProvider.page = $event; })("itemsPerPageChange", function NovoTableElement_header_0_novo_pagination_3_Template_novo_pagination_itemsPerPageChange_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.dataProvider.pageSize = $event; })("onPageChange", function NovoTableElement_header_0_novo_pagination_3_Template_novo_pagination_onPageChange_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.onPageChange($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("rowOptions", ctx_r4.config.paging.rowOptions)("disablePageSelection", ctx_r4.config.paging.disablePageSelection)("page", ctx_r4.dataProvider.page)("itemsPerPage", ctx_r4.dataProvider.pageSize)("totalItems", ctx_r4.dataProvider.total);
} }
function NovoTableElement_header_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "header");
    i0.ɵɵprojection(1);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵtemplate(3, NovoTableElement_header_0_novo_pagination_3_Template, 1, 5, "novo-pagination", 5);
    i0.ɵɵprojection(4, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.config.paging && !(ctx_r0.dataProvider.isEmpty() && !ctx_r0.dataProvider.isFiltered()));
} }
function NovoTableElement_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "novo-loading");
    i0.ɵɵelementEnd();
} }
function NovoTableElement_novo_toast_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-toast", 8);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("theme", ctx_r2.toast == null ? null : ctx_r2.toast.theme)("icon", ctx_r2.toast == null ? null : ctx_r2.toast.icon)("message", ctx_r2.toast == null ? null : ctx_r2.toast.message);
} }
function NovoTableElement_div_3_thead_3_th_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵlistener("click", function NovoTableElement_div_3_thead_3_th_2_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(4); return ctx_r21.expandAllOnPage(ctx_r21.config.expandAll); });
    i0.ɵɵelementEnd();
} }
function NovoTableElement_div_3_thead_3_th_2_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function NovoTableElement_div_3_thead_3_th_2_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(4); return ctx_r23.expandAllOnPage(ctx_r23.config.expandAll); });
    i0.ɵɵelementEnd();
} }
function NovoTableElement_div_3_thead_3_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 20);
    i0.ɵɵtemplate(1, NovoTableElement_div_3_thead_3_th_2_button_1_Template, 1, 0, "button", 21);
    i0.ɵɵtemplate(2, NovoTableElement_div_3_thead_3_th_2_button_2_Template, 1, 0, "button", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r16.config.expandAll);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r16.config.expandAll);
} }
function NovoTableElement_div_3_thead_3_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 25);
    i0.ɵɵelementStart(1, "novo-checkbox", 26);
    i0.ɵɵlistener("ngModelChange", function NovoTableElement_div_3_thead_3_th_3_Template_novo_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(3); return ctx_r25.master = $event; })("ngModelChange", function NovoTableElement_div_3_thead_3_th_3_Template_novo_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r27 = i0.ɵɵnextContext(3); return ctx_r27.selectPage($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r17.master)("indeterminate", ctx_r17.pageSelected.length > 0 && ctx_r17.pageSelected.length < ctx_r17.pagedData.length)("tooltip", ctx_r17.master ? ctx_r17.labels.deselectAll : ctx_r17.labels.selectAllOnPage);
} }
function NovoTableElement_div_3_thead_3_th_4_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelement(1, "i", 34);
    i0.ɵɵelement(2, "i", 35);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r28 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r30 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("tooltip", ctx_r30.labels.sort)("ngClass", column_r28.sort || "");
} }
function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_2_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 43);
    i0.ɵɵlistener("click", function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_2_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r41); const column_r28 = i0.ɵɵnextContext(4).$implicit; const ctx_r39 = i0.ɵɵnextContext(3); return ctx_r39.onFilterClear(column_r28); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r36.labels.clear);
} }
function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_2_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 44, 45);
    i0.ɵɵlistener("onFilterChange", function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_2_input_6_Template_input_onFilterChange_0_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r43 = i0.ɵɵnextContext(7); return ctx_r43.onFilterKeywords($event); })("ngModelChange", function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_2_input_6_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r44); const column_r28 = i0.ɵɵnextContext(4).$implicit; return column_r28.freetextFilter = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r28 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵproperty("novoTableFilter", column_r28)("ngModel", column_r28.freetextFilter);
    i0.ɵɵattribute("id", column_r28.name + "-input");
} }
function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_2_item_7_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 48);
} }
const _c1 = function (a0) { return { active: a0 }; };
function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_2_item_7_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "item", 46);
    i0.ɵɵlistener("click", function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_2_item_7_Template_item_click_0_listener() { i0.ɵɵrestoreView(_r52); const option_r48 = ctx.$implicit; const column_r28 = i0.ɵɵnextContext(4).$implicit; const ctx_r50 = i0.ɵɵnextContext(3); return ctx_r50.onFilterClick(column_r28, option_r48); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_2_item_7_i_3_Template, 1, 0, "i", 47);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r48 = ctx.$implicit;
    const column_r28 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r38 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c1, ctx_r38.isFilterActive(column_r28, option_r48)));
    i0.ɵɵattribute("data-automation-id", ctx_r38.getOptionDataAutomationId(option_r48));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((option_r48 == null ? null : option_r48.label) || option_r48);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r38.isFilterActive(column_r28, option_r48));
} }
function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "list");
    i0.ɵɵelementStart(1, "item", 38);
    i0.ɵɵelementStart(2, "div", 39);
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_2_button_5_Template, 2, 1, "button", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_2_input_6_Template, 2, 3, "input", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_2_item_7_Template, 4, 6, "item", 42);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r28 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r33 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r33.labels.filters);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r28.filter || column_r28.filter === false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !!column_r28.allowCustomTextOption);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", column_r28.options);
} }
function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_3_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 43);
    i0.ɵɵlistener("click", function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_3_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r59); const column_r28 = i0.ɵɵnextContext(4).$implicit; const ctx_r57 = i0.ɵɵnextContext(3); return ctx_r57.onFilterClear(column_r28); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r55 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r55.labels.clear);
} }
function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_3_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "list");
    i0.ɵɵelementStart(1, "item", 38);
    i0.ɵɵelementStart(2, "div", 39);
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_3_button_5_Template, 2, 1, "button", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "input", 44, 45);
    i0.ɵɵlistener("onFilterChange", function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_3_Template_input_onFilterChange_6_listener($event) { i0.ɵɵrestoreView(_r61); const ctx_r60 = i0.ɵɵnextContext(6); return ctx_r60.onFilterChange($event); })("ngModelChange", function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_3_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r61); const column_r28 = i0.ɵɵnextContext(3).$implicit; return column_r28.filter = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r28 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r34 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r34.labels.filters);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r28.filter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("novoTableFilter", column_r28)("ngModel", column_r28.filter);
    i0.ɵɵattribute("id", column_r28.name + "-input");
} }
function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_4_item_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r71 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 43);
    i0.ɵɵlistener("click", function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_4_item_1_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r71); const column_r28 = i0.ɵɵnextContext(5).$implicit; const ctx_r69 = i0.ɵɵnextContext(3); return ctx_r69.onFilterClear(column_r28); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r68 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r68.labels.clear);
} }
function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_4_item_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "item", 38);
    i0.ɵɵelementStart(1, "div", 39);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_4_item_1_button_4_Template, 2, 1, "button", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r28 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r65 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r65.labels.filters);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r28.filter);
} }
function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_4_item_2_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 48);
} }
function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_4_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "item", 56);
    i0.ɵɵlistener("click", function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_4_item_2_Template_item_click_0_listener() { i0.ɵɵrestoreView(_r77); const option_r73 = ctx.$implicit; const column_r28 = i0.ɵɵnextContext(4).$implicit; const ctx_r75 = i0.ɵɵnextContext(3); return ctx_r75.onFilterClick(column_r28, option_r73); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_4_item_2_i_2_Template, 1, 0, "i", 47);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r73 = ctx.$implicit;
    const column_r28 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r66 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c1, ctx_r66.isFilterActive(column_r28, option_r73)))("keepOpen", option_r73.range)("hidden", column_r28.calenderShow);
    i0.ɵɵattribute("data-automation-id", (option_r73 == null ? null : option_r73.label) || option_r73);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", (option_r73 == null ? null : option_r73.label) || option_r73, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r66.isFilterActive(column_r28, option_r73));
} }
function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_4_Template(rf, ctx) { if (rf & 1) {
    const _r81 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "list");
    i0.ɵɵtemplate(1, NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_4_item_1_Template, 5, 2, "item", 49);
    i0.ɵɵtemplate(2, NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_4_item_2_Template, 3, 8, "item", 50);
    i0.ɵɵelementStart(3, "div", 51);
    i0.ɵɵelementStart(4, "div", 52);
    i0.ɵɵlistener("click", function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_4_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r81); const column_r28 = i0.ɵɵnextContext(3).$implicit; return column_r28.calenderShow = false; });
    i0.ɵɵelement(5, "i", 53);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "novo-date-picker", 54, 55);
    i0.ɵɵlistener("onSelect", function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_4_Template_novo_date_picker_onSelect_7_listener($event) { i0.ɵɵrestoreView(_r81); const column_r28 = i0.ɵɵnextContext(3).$implicit; const ctx_r82 = i0.ɵɵnextContext(3); return ctx_r82.onCalenderSelect(column_r28, $event); })("ngModelChange", function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_4_Template_novo_date_picker_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r81); const column_r28 = i0.ɵɵnextContext(3).$implicit; return column_r28.filter = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r28 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r35 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r28.calenderShow);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", column_r28.options);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hidden", !column_r28.calenderShow);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r35.labels.backToPresetFilters);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", column_r28.filter);
} }
function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_Template(rf, ctx) { if (rf & 1) {
    const _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-dropdown", 36);
    i0.ɵɵlistener("toggled", function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_Template_novo_dropdown_toggled_0_listener($event) { i0.ɵɵrestoreView(_r88); const column_r28 = i0.ɵɵnextContext(2).$implicit; const ctx_r87 = i0.ɵɵnextContext(3); return ctx_r87.onDropdownToggled($event, column_r28.name); });
    i0.ɵɵelementStart(1, "button", 37);
    i0.ɵɵlistener("click", function NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r88); const ctx_r90 = i0.ɵɵnextContext(5); return ctx_r90.focusInput(); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_2_Template, 8, 4, "list", 0);
    i0.ɵɵtemplate(3, NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_3_Template, 8, 5, "list", 0);
    i0.ɵɵtemplate(4, NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_list_4_Template, 9, 5, "list", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r28 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r31 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("filtered", column_r28.filter || column_r28.filter === false);
    i0.ɵɵproperty("tooltip", ctx_r31.labels.filters);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((column_r28 == null ? null : column_r28.options == null ? null : column_r28.options.length) || (column_r28 == null ? null : column_r28.originalOptions == null ? null : column_r28.originalOptions.length)) && (column_r28 == null ? null : column_r28.type) !== "date" && ctx_r31.toggledDropdownMap[column_r28.name]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !((column_r28 == null ? null : column_r28.options == null ? null : column_r28.options.length) || (column_r28 == null ? null : column_r28.originalOptions == null ? null : column_r28.originalOptions.length)) && ctx_r31.toggledDropdownMap[column_r28.name]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (column_r28 == null ? null : column_r28.options == null ? null : column_r28.options.length) && (column_r28 == null ? null : column_r28.type) === "date" && ctx_r31.toggledDropdownMap[column_r28.name]);
} }
function NovoTableElement_div_3_thead_3_th_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r93 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵelementStart(1, "div", 30);
    i0.ɵɵlistener("onSortChange", function NovoTableElement_div_3_thead_3_th_4_div_1_Template_div_onSortChange_1_listener($event) { i0.ɵɵrestoreView(_r93); const ctx_r92 = i0.ɵɵnextContext(4); return ctx_r92.onSortChange($event); });
    i0.ɵɵelementStart(2, "label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, NovoTableElement_div_3_thead_3_th_4_div_1_div_4_Template, 3, 2, "div", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, NovoTableElement_div_3_thead_3_th_4_div_1_novo_dropdown_5_Template, 5, 6, "novo-dropdown", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r28 = i0.ɵɵnextContext().$implicit;
    const ctx_r29 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("data-automation-id", column_r28.id || column_r28.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r29.config.sorting !== false && column_r28.sorting !== false ? "sortable" : "")("novoThSortable", ctx_r29.config)("column", column_r28);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(column_r28.title || column_r28.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r29.config.sorting !== false && column_r28.sorting !== false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r29.config.filtering !== false && column_r28.filtering !== false);
} }
const _c2 = function (a0, a1, a2) { return { "mass-action": a0, "actions": a1, "preview": a2 }; };
function NovoTableElement_div_3_thead_3_th_4_Template(rf, ctx) { if (rf & 1) {
    const _r96 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 27);
    i0.ɵɵlistener("onOrderChange", function NovoTableElement_div_3_thead_3_th_4_Template_th_onOrderChange_0_listener($event) { i0.ɵɵrestoreView(_r96); const ctx_r95 = i0.ɵɵnextContext(3); return ctx_r95.onOrderChange($event); });
    i0.ɵɵtemplate(1, NovoTableElement_div_3_thead_3_th_4_div_1_Template, 6, 7, "div", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r28 = ctx.$implicit;
    const ctx_r18 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(4, _c2, (ctx_r18.config == null ? null : ctx_r18.config.rowSelectionStyle) === "checkbox", (column_r28 == null ? null : column_r28.actions == null ? null : column_r28.actions.items == null ? null : column_r28.actions.items.length) > 0, (column_r28 == null ? null : column_r28.name) === "preview"))("novoThOrderable", column_r28)("hidden", ctx_r18.isColumnHidden(column_r28));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r28.hideHeader);
} }
function NovoTableElement_div_3_thead_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "thead");
    i0.ɵɵelementStart(1, "tr", 16);
    i0.ɵɵtemplate(2, NovoTableElement_div_3_thead_3_th_2_Template, 3, 2, "th", 17);
    i0.ɵɵtemplate(3, NovoTableElement_div_3_thead_3_th_3_Template, 2, 3, "th", 18);
    i0.ɵɵtemplate(4, NovoTableElement_div_3_thead_3_th_4_Template, 2, 8, "th", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r9.config.hasDetails);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.config.rowSelectionStyle === "checkbox");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r9.columns);
} }
function NovoTableElement_div_3_tbody_4_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r100 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 59);
    i0.ɵɵelementStart(1, "td", 60);
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "a", 61);
    i0.ɵɵlistener("click", function NovoTableElement_div_3_tbody_4_tr_1_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r100); const ctx_r99 = i0.ɵɵnextContext(3); return ctx_r99.selectAll(true); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r97 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r97.labels.selectedRecords(ctx_r97.selected.length), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r97.labels.totalRecords(ctx_r97.dataProvider.total));
} }
function NovoTableElement_div_3_tbody_4_ng_template_2_td_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r111 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 68);
    i0.ɵɵlistener("click", function NovoTableElement_div_3_tbody_4_ng_template_2_td_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r111); const row_r101 = i0.ɵɵnextContext(2).$implicit; return row_r101._expanded = !row_r101._expanded; });
    i0.ɵɵelementEnd();
} }
function NovoTableElement_div_3_tbody_4_ng_template_2_td_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r114 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 69);
    i0.ɵɵlistener("click", function NovoTableElement_div_3_tbody_4_ng_template_2_td_1_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r114); const row_r101 = i0.ɵɵnextContext(2).$implicit; return row_r101._expanded = !row_r101._expanded; });
    i0.ɵɵelementEnd();
} }
function NovoTableElement_div_3_tbody_4_ng_template_2_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 20);
    i0.ɵɵtemplate(1, NovoTableElement_div_3_tbody_4_ng_template_2_td_1_button_1_Template, 1, 0, "button", 66);
    i0.ɵɵtemplate(2, NovoTableElement_div_3_tbody_4_ng_template_2_td_1_button_2_Template, 1, 0, "button", 67);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r101 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r101._expanded);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r101._expanded);
} }
function NovoTableElement_div_3_tbody_4_ng_template_2_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r118 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 70);
    i0.ɵɵelementStart(1, "novo-checkbox", 71);
    i0.ɵɵlistener("ngModelChange", function NovoTableElement_div_3_tbody_4_ng_template_2_td_2_Template_novo_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r118); const row_r101 = i0.ɵɵnextContext().$implicit; return row_r101._selected = $event; })("ngModelChange", function NovoTableElement_div_3_tbody_4_ng_template_2_td_2_Template_novo_checkbox_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r118); const row_r101 = i0.ɵɵnextContext().$implicit; const ctx_r119 = i0.ɵɵnextContext(3); return ctx_r119.rowSelectHandler(row_r101); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r101 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", row_r101._selected);
} }
function NovoTableElement_div_3_tbody_4_ng_template_2_td_3_novo_table_cell_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-table-cell", 75);
} if (rf & 2) {
    const column_r122 = i0.ɵɵnextContext().$implicit;
    const ctx_r126 = i0.ɵɵnextContext();
    const row_r101 = ctx_r126.$implicit;
    const i_r102 = ctx_r126.index;
    const ctx_r123 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("hasEditor", ctx_r123.editable)("column", column_r122)("row", row_r101)("form", ctx_r123.getRowControlForm(i_r102));
} }
function NovoTableElement_div_3_tbody_4_ng_template_2_td_3_novo_control_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-control", 76);
} if (rf & 2) {
    const column_r122 = i0.ɵɵnextContext().$implicit;
    const ctx_r127 = i0.ɵɵnextContext();
    const i_r102 = ctx_r127.index;
    const row_r101 = ctx_r127.$implicit;
    const ctx_r124 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("form", ctx_r124.getRowControlForm(i_r102))("control", row_r101.controls[column_r122.name]);
} }
function NovoTableElement_div_3_tbody_4_ng_template_2_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 72);
    i0.ɵɵtemplate(1, NovoTableElement_div_3_tbody_4_ng_template_2_td_3_novo_table_cell_1_Template, 1, 4, "novo-table-cell", 73);
    i0.ɵɵtemplate(2, NovoTableElement_div_3_tbody_4_ng_template_2_td_3_novo_control_2_Template, 1, 2, "novo-control", 74);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r122 = ctx.$implicit;
    const row_r101 = i0.ɵɵnextContext().$implicit;
    const ctx_r105 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("novo-form-row", ctx_r105.editable);
    i0.ɵɵproperty("hidden", ctx_r105.isColumnHidden(column_r122));
    i0.ɵɵattribute("data-automation-id", column_r122.id || column_r122.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r101._editing && !row_r101._editing[column_r122.name]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r101._editing && row_r101._editing[column_r122.name]);
} }
function NovoTableElement_div_3_tbody_4_ng_template_2_tr_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 77);
    i0.ɵɵelement(1, "td", 20);
    i0.ɵɵelementStart(2, "td");
    i0.ɵɵelement(3, "novo-row-details", 78);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r101 = i0.ɵɵnextContext().$implicit;
    const ctx_r106 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("hidden", !row_r101._expanded);
    i0.ɵɵattribute("data-automation-id", "details-row-" + row_r101.id);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("colspan", ctx_r106.config.rowSelectionStyle === "checkbox" ? ctx_r106.columns.length + 1 : ctx_r106.columns.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("data", row_r101)("renderer", ctx_r106.config.detailsRenderer);
} }
function NovoTableElement_div_3_tbody_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r132 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 62);
    i0.ɵɵlistener("click", function NovoTableElement_div_3_tbody_4_ng_template_2_Template_tr_click_0_listener() { i0.ɵɵrestoreView(_r132); const row_r101 = ctx.$implicit; const ctx_r131 = i0.ɵɵnextContext(3); return ctx_r131.rowClickHandler(row_r101); });
    i0.ɵɵtemplate(1, NovoTableElement_div_3_tbody_4_ng_template_2_td_1_Template, 3, 2, "td", 17);
    i0.ɵɵtemplate(2, NovoTableElement_div_3_tbody_4_ng_template_2_td_2_Template, 2, 1, "td", 63);
    i0.ɵɵtemplate(3, NovoTableElement_div_3_tbody_4_ng_template_2_td_3_Template, 3, 6, "td", 64);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, NovoTableElement_div_3_tbody_4_ng_template_2_tr_4_Template, 4, 5, "tr", 65);
} if (rf & 2) {
    const row_r101 = ctx.$implicit;
    const ctx_r98 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("active", row_r101.id === ctx_r98.activeId);
    i0.ɵɵproperty("ngClass", row_r101.customClass || "")("id", ctx_r98.name + "-" + row_r101[ctx_r98.rowIdentifier]);
    i0.ɵɵattribute("data-automation-id", row_r101.id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r98.config.hasDetails);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r98.config.rowSelectionStyle === "checkbox");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r98.columns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r98.config.hasDetails);
} }
function NovoTableElement_div_3_tbody_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody");
    i0.ɵɵtemplate(1, NovoTableElement_div_3_tbody_4_tr_1_Template, 5, 2, "tr", 57);
    i0.ɵɵtemplate(2, NovoTableElement_div_3_tbody_4_ng_template_2_Template, 5, 9, "ng-template", 58);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.config.rowSelectionStyle === "checkbox" && ctx_r10.showSelectAllMessage && ctx_r10.config.selectAllEnabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r10.rows);
} }
function NovoTableElement_div_3_tbody_5_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 82);
    i0.ɵɵelementStart(1, "h4");
    i0.ɵɵelement(2, "i", 83);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r134 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r134.labels.emptyTableMessage, "");
} }
function NovoTableElement_div_3_tbody_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody", 79);
    i0.ɵɵelementStart(1, "tr");
    i0.ɵɵelementStart(2, "td", 60);
    i0.ɵɵelementStart(3, "div", null, 80);
    i0.ɵɵprojection(5, 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, NovoTableElement_div_3_tbody_5_div_6_Template, 4, 1, "div", 81);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r133 = i0.ɵɵreference(4);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", _r133.childNodes.length == 0);
} }
function NovoTableElement_div_3_tbody_6_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 86);
    i0.ɵɵelementStart(1, "h4");
    i0.ɵɵelement(2, "i", 83);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r136 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r136.labels.noMatchingRecordsMessage, "");
} }
function NovoTableElement_div_3_tbody_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody", 79);
    i0.ɵɵelementStart(1, "tr");
    i0.ɵɵelementStart(2, "td", 60);
    i0.ɵɵelementStart(3, "div", null, 84);
    i0.ɵɵprojection(5, 3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, NovoTableElement_div_3_tbody_6_div_6_Template, 4, 1, "div", 85);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r135 = i0.ɵɵreference(4);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", _r135.childNodes.length == 0);
} }
function NovoTableElement_div_3_tbody_7_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 90);
    i0.ɵɵelementStart(1, "h4");
    i0.ɵɵelement(2, "i", 91);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r138 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r138.labels.erroredTableMessage, "");
} }
function NovoTableElement_div_3_tbody_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody", 87);
    i0.ɵɵelementStart(1, "tr");
    i0.ɵɵelementStart(2, "td", 60);
    i0.ɵɵelementStart(3, "div", null, 88);
    i0.ɵɵprojection(5, 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, NovoTableElement_div_3_tbody_7_div_6_Template, 4, 1, "div", 89);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r137 = i0.ɵɵreference(4);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", _r137.childNodes.length == 0);
} }
function NovoTableElement_div_3_tfoot_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tfoot", 92);
    i0.ɵɵelementStart(1, "tr");
    i0.ɵɵelementStart(2, "td", 60);
    i0.ɵɵprojection(3, 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r14.dataProvider.length % 2 == 0 ? "odd" : "even");
} }
function NovoTableElement_div_3_tfoot_9_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r142 = ctx.$implicit;
    const ctx_r143 = i0.ɵɵnextContext();
    const i_r140 = ctx_r143.index;
    const footer_r139 = ctx_r143.$implicit;
    i0.ɵɵattribute("data-automation-id", (column_r142.id || column_r142.name) + "-total-" + i_r140);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(footer_r139[column_r142.name]);
} }
function NovoTableElement_div_3_tfoot_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tfoot", 93);
    i0.ɵɵelementStart(1, "tr");
    i0.ɵɵtemplate(2, NovoTableElement_div_3_tfoot_9_td_2_Template, 2, 2, "td", 94);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r15.columns);
} }
function NovoTableElement_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "novo-form", 10);
    i0.ɵɵelementStart(2, "table", 11);
    i0.ɵɵtemplate(3, NovoTableElement_div_3_thead_3_Template, 5, 3, "thead", 0);
    i0.ɵɵtemplate(4, NovoTableElement_div_3_tbody_4_Template, 3, 2, "tbody", 0);
    i0.ɵɵtemplate(5, NovoTableElement_div_3_tbody_5_Template, 7, 1, "tbody", 12);
    i0.ɵɵtemplate(6, NovoTableElement_div_3_tbody_6_Template, 7, 1, "tbody", 12);
    i0.ɵɵtemplate(7, NovoTableElement_div_3_tbody_7_Template, 7, 1, "tbody", 13);
    i0.ɵɵtemplate(8, NovoTableElement_div_3_tfoot_8_Template, 4, 1, "tfoot", 14);
    i0.ɵɵtemplate(9, NovoTableElement_div_3_tfoot_9_Template, 3, 1, "tfoot", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("form", ctx_r3.tableForm);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("table-details", ctx_r3.config.hasDetails);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.columns.length && (!ctx_r3.dataProvider.isEmpty() || ctx_r3.dataProvider.isFiltered() || ctx_r3.skipSortAndFilterClear || ctx_r3.editing));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r3.dataProvider.isEmpty() || ctx_r3.editing);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.dataProvider.isEmpty() && !ctx_r3.dataProvider.isFiltered() && !ctx_r3.editing);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.dataProvider.isEmpty() && ctx_r3.dataProvider.isFiltered());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.dataProvider.hasErrors());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r3.config.footers);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r3.footers);
} }
const _c3 = [[["novo-table-header"]], [["novo-table-actions"]], [["", "table-empty-message", ""]], [["", "table-no-matching-records-message", ""]], [["", "table-error-message", ""]], [["novo-table-footer"]]];
const _c4 = ["novo-table-header", "novo-table-actions", "[table-empty-message]", "[table-no-matching-records-message]", "[table-error-message]", "novo-table-footer"];
// TODO - support (1) clicking cell to edit, (2) clicking row to edit, (3) button to trigger full table to edit
export var NovoTableMode;
(function (NovoTableMode) {
    NovoTableMode[NovoTableMode["VIEW"] = 1] = "VIEW";
    NovoTableMode[NovoTableMode["EDIT"] = 2] = "EDIT";
})(NovoTableMode || (NovoTableMode = {}));
export class NovoTableElement {
    constructor(labels, formUtils, builder) {
        this.labels = labels;
        this.formUtils = formUtils;
        this.builder = builder;
        this.config = {};
        this.skipSortAndFilterClear = false;
        this.mode = NovoTableMode.VIEW;
        this.editable = false;
        this.rowIdentifier = 'id';
        this.name = 'table';
        this.onRowClick = new EventEmitter();
        this.onRowSelect = new EventEmitter();
        this.onTableChange = new EventEmitter();
        this._rows = [];
        this.selected = [];
        this.activeId = 0;
        this.master = false;
        this.expandAll = false;
        this.indeterminate = false;
        this.lastPage = 0;
        this.selectedPageCount = 0;
        this.showSelectAllMessage = false;
        this.pagedData = [];
        // Map to keep track of what dropdowns are toggled
        // Used to properly *ngIf the <list> so that the keepFilterFocused Directive
        // will properly fire the ngAfterViewInit event
        this.toggledDropdownMap = {};
        this.NovoTableMode = NovoTableMode;
        this.tableForm = new FormGroup({});
        this.footers = [];
        this.grossFlagToAvoidTheTableFromBeingUglyWhenHidingTheToast = false;
        this.loading = false;
        notify('[Deprecated]: The table is deprecated. Please migrate to novo-data-tables!');
    }
    set rows(rows) {
        this.dataProvider = rows;
        if (rows && rows.length > 0) {
            this.setupColumnDefaults();
        }
        // this is a temporary/hacky fix until async dataloading is handled within the table
        if (!this.skipSortAndFilterClear) {
            this.clearAllSortAndFilters();
        }
    }
    get rows() {
        return this._rows;
    }
    set dataProvider(dp) {
        this._dataProvider = Array.isArray(dp) ? new PagedArrayCollection(dp) : dp;
        this._dataProvider.dataChange.pipe(debounceTime(100)).subscribe((event) => {
            switch (event.type) {
                case CollectionEvent.CHANGE:
                    this._rows = event.data;
                    // Setup form
                    this.tableForm = this.builder.group({
                        rows: this.builder.array([]),
                    });
                    // Remove all selection on sort change if selection is on
                    if (this.config.rowSelectionStyle === 'checkbox') {
                        this.pagedData = event.data;
                        this.pageSelected = this.pagedData.filter((r) => r._selected);
                        this.rowSelectHandler();
                    }
                    // Find that columns we might need to sum up via the footer
                    let columnsToSum = [];
                    const columnSums = {};
                    if (this.config.footers) {
                        this.config.footers.forEach((config) => {
                            columnsToSum.push(...config.columns);
                        });
                        // Only have unique columns, filter out duplicates
                        columnsToSum = columnsToSum.filter((item, index, array) => array.indexOf(item) === index);
                    }
                    // Make a form for each row
                    const tableFormRows = this.tableForm.controls['rows'];
                    this._rows.forEach((row, index) => {
                        const rowControls = [];
                        row.controls = {};
                        row._editing = {};
                        row._expanded = this.config.expandAll;
                        row.rowId = this._rows.length;
                        this.columns.forEach((column) => {
                            // Use the control passed or use a ReadOnlyControl so that the form has the values
                            const control = column.editorConfig
                                ? ControlFactory.create(column.editorType, column.editorConfig)
                                : new ReadOnlyControl({ key: column.name });
                            row.controls[column.name] = control;
                            rowControls.push(control);
                        });
                        this.formUtils.setInitialValues(rowControls, row, false);
                        tableFormRows.push(this.formUtils.toFormGroup(rowControls));
                        // Setup the total footer if configured
                        // Array of keys to total
                        if (columnsToSum.length !== 0) {
                            columnsToSum.forEach((column) => {
                                if (Helpers.isBlank(columnSums[column])) {
                                    columnSums[column] = 0;
                                }
                                columnSums[column] += row[column];
                            });
                        }
                    });
                    if (this.mode === NovoTableMode.EDIT) {
                        this.setTableEdit();
                    }
                    // Setup the footers (if any)
                    if (this.config.footers) {
                        this.footers = [];
                        this.config.footers.forEach((footerConfig, footerConfigIndex) => {
                            const footer = {};
                            footer[footerConfig.labelColumn] = footerConfig.label;
                            footerConfig.columns.forEach((column) => {
                                if (footerConfig.method === 'AVG' && this._rows.length !== 0) {
                                    footer[column] = columnSums[column] / this._rows.length;
                                }
                                else {
                                    footer[column] = columnSums[column];
                                }
                            });
                            this.footers.push(footer);
                        });
                    }
                    break;
                default:
                    break;
            }
        });
        if (this.config.paging) {
            this._dataProvider.page = this.config.paging.current;
            this._dataProvider.pageSize = this.config.paging.itemsPerPage;
        }
        else {
            // Paging turned off, return basically all of the data
            this._dataProvider.page = 1;
            this._dataProvider.pageSize = 500;
        }
        if (dp && dp.length > 0) {
            this.setupColumnDefaults();
        }
        this._dataProvider.refresh();
    }
    get dataProvider() {
        return this._dataProvider;
    }
    get editing() {
        return this.mode === NovoTableMode.EDIT;
    }
    get formValue() {
        return this.tableForm.value;
    }
    onDropdownToggled(event, column) {
        this.toggledDropdownMap[column] = event;
    }
    focusInput() {
        if (this.filterInputs && this.filterInputs.length) {
            this.filterInputs.forEach((filterInput) => {
                if (filterInput.nativeElement) {
                    setTimeout(() => filterInput.nativeElement.focus(), 0);
                }
            });
        }
    }
    onPageChange(event) {
        // this.dataProvider.page = event.page;
        // this.dataProvider.pageSize = event.itemsPerPage;
    }
    getOptionDataAutomationId(option) {
        if (!Helpers.isBlank(option.value)) {
            return option.value;
        }
        return option;
    }
    setupColumnDefaults() {
        // Check columns for cell option types
        this.columns.forEach((column) => {
            if (column && column.type) {
                switch (column.type) {
                    case 'date':
                        // Set options based on dates if there are none
                        column.options = column.options || this.getDefaultOptions(column);
                        break;
                    default:
                        break;
                }
            }
        });
    }
    ngDoCheck() {
        if (this.config.paging && this.config.paging.current !== this.lastPage) {
            this.rowSelectHandler();
            this.showSelectAllMessage = false;
        }
        this.lastPage = this.config.paging ? this.config.paging.current : 1;
    }
    getPageStart() {
        return this.config.paging ? (this.dataProvider.page - 1) * this.dataProvider.pageSize : 0;
    }
    getPageEnd() {
        return this.config.paging && this.dataProvider.pageSize > -1 ? this.getPageStart() + this.dataProvider.pageSize : this.rows.length;
    }
    getRowControlForm(i) {
        const tableFormRows = this.tableForm.controls['rows'];
        return tableFormRows.controls[i];
    }
    onFilterClick(column, filter) {
        if (filter.range && !column.calendarShow) {
            column.calenderShow = true;
            return;
        }
        if (Array.isArray(column.filter) && column.multiple) {
            if (~column.filter.indexOf(filter)) {
                // Remove filter
                column.filter.splice(column.filter.indexOf(filter), 1);
                if (filter.range) {
                    column.calenderShow = false;
                }
                if (column.filter.length === 0) {
                    column.filter = null;
                }
            }
            else {
                // Add filter
                column.filter.push(filter);
            }
        }
        else if (column.multiple) {
            column.filter = new Array();
            column.filter.push(Helpers.isBlank(filter.value) ? filter : filter.value);
        }
        else {
            column.filter = Helpers.isBlank(filter.value) ? filter : filter.value;
        }
        this.onFilterChange();
    }
    onFilterClear(column) {
        setTimeout(() => {
            column.filter = null;
            column.freetextFilter = null;
            this.onFilterChange();
            if (column.originalOptions) {
                column.options = column.originalOptions;
            }
        });
    }
    clearAllSortAndFilters() {
        if (this.config.filtering) {
            this.columns.forEach((column) => {
                column.filter = null;
                column.sort = null;
            });
        }
    }
    /**
     * @description This method updates the row data to reflect the active filters.
     */
    onFilterChange(event) {
        if (this.config.filtering) {
            // Array of filters
            const filters = this.columns.filter((col) => !Helpers.isEmpty(col.filter));
            if (filters.length) {
                let query = {};
                for (const column of filters) {
                    if (Helpers.isFunction(column.match)) {
                        query[column.name] = (value, record) => {
                            return column.match(record, column.filter);
                        };
                    }
                    else if (column.preFilter && Helpers.isFunction(column.preFilter)) {
                        query = Object.assign({}, query, column.preFilter(this.escapeCharacters(column.filter)));
                    }
                    else if (Array.isArray(column.filter)) {
                        // The filters are an array (multi-select), check value
                        let options = column.filter;
                        // We have an array of {value: '', labels: ''}
                        if (options[0].value || options[0].label) {
                            options = column.filter.map((opt) => opt.value);
                        }
                        query[column.name] = { any: options };
                    }
                    else if (column.type && column.type === 'date') {
                        if (column.filter.startDate && column.filter.endDate) {
                            query[column.name] = {
                                min: dateFns.startOfDay(column.filter.startDate),
                                max: dateFns.startOfDay(dateFns.addDays(dateFns.startOfDay(column.filter.endDate), 1)),
                            };
                        }
                        else {
                            query[column.name] = {
                                min: column.filter.min ? dateFns.addDays(dateFns.startOfToday(), column.filter.min) : dateFns.startOfToday(),
                                max: column.filter.max ? dateFns.addDays(dateFns.startOfTomorrow(), column.filter.max) : dateFns.startOfTomorrow(),
                            };
                        }
                    }
                    else {
                        query[column.name] = column.filter;
                    }
                }
                if (Helpers.isFunction(this.config.filtering)) {
                    this.config.filtering(query);
                }
                else {
                    this._dataProvider.filter = query;
                }
            }
            else {
                this._dataProvider.filter = {};
            }
            // Trickle down to keep sort
            // this.onSortChange(this.currentSortColumn);
            this.fireTableChangeEvent();
            // If paging, reset page
            if (this.config.paging) {
                this.config.paging.current = 1;
            }
            // Remove all selection on sort change if selection is on
            if (this.config.rowSelectionStyle === 'checkbox') {
                this.selectAll(false);
            }
        }
    }
    escapeCharacters(filter) {
        if (typeof filter === 'string') {
            return filter.replace(/'/g, '\'\'');
        }
        return filter;
    }
    isFilterActive(column, filter) {
        // TODO: This needs to be refactored
        let isActive = false;
        if (column && !Helpers.isBlank(column.filter) && !Helpers.isBlank(filter)) {
            if (Array.isArray(column.filter)) {
                if (typeof filter !== 'string') {
                    isActive = column.filter.some((item) => {
                        return item.label === filter.label;
                    });
                }
                else {
                    isActive = column.filter.includes(filter);
                }
            }
            else {
                if (typeof column.filter === typeof filter) {
                    isActive = column.filter === filter;
                }
                else {
                    isActive = column.filter === filter.value;
                }
            }
        }
        return isActive;
    }
    onSortChange(column) {
        this.currentSortColumn = column;
        const sortedColumns = this.columns.filter((thisColumn) => {
            return thisColumn.sort && thisColumn !== this.currentSortColumn;
        });
        for (const sortedColumn of sortedColumns) {
            sortedColumn.sort = null;
        }
        if (column) {
            if (Helpers.isFunction(this.config.sorting)) {
                this.config.sorting();
            }
            else if (Helpers.isFunction(column.preSort)) {
                this._dataProvider.sort = [].concat(column.preSort(column));
            }
            else {
                this._dataProvider.sort = [{ field: column.compare || column.name, reverse: column.sort === 'desc' }];
            }
        }
        // Fire table change event
        // this.fireTableChangeEvent();
        // If paging, reset page
        if (this.config.paging) {
            this.config.paging.current = 1;
        }
        // Remove all selection on sort change if selection is on
        if (this.config.rowSelectionStyle === 'checkbox') {
            this.selectAll(false);
        }
    }
    fireTableChangeEvent() {
        // Construct a table change object
        const onTableChange = {};
        const filters = this.columns.filter((col) => col.filter && col.filter.length);
        onTableChange.filter = filters.length ? filters : false;
        onTableChange.sort = this.currentSortColumn ? this.currentSortColumn : false;
        onTableChange.rows = this.rows;
        // Emit event
        this.onTableChange.emit(onTableChange);
    }
    findColumnIndex(value) {
        for (let i = 0; i < this.columns.length; i += 1) {
            if (this.columns[i].name === value) {
                return i;
            }
        }
        return null;
    }
    onOrderChange(event) {
        const oldIndex = this.findColumnIndex(event.first.name);
        const newIndex = this.findColumnIndex(event.second.name);
        this.columns.splice(newIndex, 0, this.columns.splice(oldIndex, 1)[0]);
        this.onSortChange(this.currentSortColumn);
    }
    expandAllOnPage(expanded) {
        this.config.expandAll = !expanded;
        for (const row of this.dataProvider.list) {
            row._expanded = this.config.expandAll;
        }
    }
    selectPage(data) {
        if (!this.master) {
            this.selectAll(false);
            // Only show the select all message when there is only one new page selected at a time
            this.selectedPageCount = this.selectedPageCount > 0 ? this.selectedPageCount - 1 : 0;
            this.showSelectAllMessage = false;
        }
        else {
            this.indeterminate = false;
            // this.pagedData = this.rows.slice(this.getPageStart(), this.getPageEnd());
            for (const row of this.pagedData) {
                row._selected = this.master;
            }
            this.selected = this.dataProvider.list.filter((r) => r._selected);
            this.pageSelected = this.pagedData.filter((r) => r._selected);
            this.emitSelected(this.selected);
            // Only show the select all message when there is only one new page selected at a time
            this.selectedPageCount++;
            this.showSelectAllMessage = this.selectedPageCount === 1 && this.selected.length !== this.dataProvider.total;
        }
    }
    selectAll(value) {
        this.master = value;
        this.indeterminate = false;
        for (const row of this.dataProvider.list) {
            row._selected = value;
        }
        this.selected = value ? this.dataProvider.list : [];
        this.showSelectAllMessage = false;
        this.selectedPageCount = this.selectedPageCount > 0 ? this.selectedPageCount - 1 : 0;
        this.rowSelectHandler();
    }
    rowSelectHandler(data) {
        // this.pagedData = this.rows.slice(this.getPageStart(), this.getPageEnd());
        this.pageSelected = this.pagedData.filter((r) => r._selected);
        this.selected = this.dataProvider.list.filter((r) => r._selected);
        if (this.pageSelected.length === 0) {
            this.master = false;
            this.indeterminate = false;
        }
        else if (this.pageSelected.length === this.pagedData.length) {
            this.master = true;
            this.indeterminate = false;
        }
        else {
            this.master = false;
            this.indeterminate = true;
            // Breaking the selected page count
            this.showSelectAllMessage = false;
            this.selectedPageCount = this.selectedPageCount > 0 ? this.selectedPageCount - 1 : 0;
        }
        this.emitSelected(this.selected);
    }
    emitSelected(selected) {
        this.onRowSelect.emit({ length: selected.length, selected });
    }
    rowClickHandler(row) {
        if (this.config.rowSelect) {
            this.activeId = row.id || 0;
            this.onRowClick.emit(row);
        }
    }
    getDefaultOptions(column) {
        // TODO - needs to come from label service - https://github.com/bullhorn/novo-elements/issues/116
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
        if (column && column.range) {
            opts.push({
                label: this.labels.customDateRange,
                range: true,
            });
        }
        return opts;
    }
    onCalenderSelect(column, event) {
        setTimeout(() => {
            if (event.startDate && event.endDate) {
                this.onFilterChange();
            }
        }, 10);
    }
    onFilterKeywords(config) {
        if (config && config.filtering && config.filtering.freetextFilter) {
            const filterKeywords = config.filtering.freetextFilter.toLowerCase();
            if (!config.filtering.originalOptions) {
                config.filtering.originalOptions = config.filtering.options;
            }
            const newOptions = config.filtering.originalOptions.filter((option) => {
                let value = option && option.label ? option.label : option;
                value = value.toLowerCase() ? value.toLowerCase() : value;
                if (value === filterKeywords) {
                    return true;
                }
                else if (~value.indexOf(filterKeywords) || ~value.indexOf(filterKeywords)) {
                    return true;
                }
                return false;
            });
            config.filtering.options = newOptions;
            config.filtering.filter = config.filtering.freetextFilter;
        }
        else {
            config.filtering.options = config.filtering.originalOptions;
        }
        this.onFilterChange();
    }
    /**
     * @description Sets the Table into EDIT mode, based on the row/column passed you can enter in a few states
     * (1) setTableEdit() - don't pass any to put the FULL table into edit mode
     * (2) setTableEdit(1) - pass only row to put that FULL row of the table into edit mode
     * (3) setTableEdit(1, 1) - pass row and column to put that column of the row of the table into edit mode
     * @memberOf NovoTableElement
     */
    setTableEdit(rowNumber, columnNumber) {
        this.mode = NovoTableMode.EDIT;
        this._dataProvider.edit();
        this._rows.forEach((row, rowIndex) => {
            row._editing = row._editing || {};
            this.columns.forEach((column, columnIndex) => {
                if (column.viewOnly) {
                    row._editing[column.name] = false;
                }
                else if (Helpers.isEmpty(rowNumber) && Helpers.isEmpty(columnNumber)) {
                    row._editing[column.name] = true;
                }
                else if (!Helpers.isEmpty(rowNumber) && rowIndex === Number(rowNumber) && Helpers.isEmpty(columnNumber)) {
                    row._editing[column.name] = true;
                }
                else if (!Helpers.isEmpty(rowNumber) &&
                    !Helpers.isEmpty(columnNumber) &&
                    rowIndex === Number(rowNumber) &&
                    columnIndex === Number(columnNumber)) {
                    row._editing[column.name] = true;
                }
                else {
                    row._editing[column.name] = false;
                }
            });
        });
    }
    /**
     * @description Leaves edit mode for the Table and puts everything back to VIEW only
     * @memberOf NovoTableElement
     * @param cancel - whether or not to save data or undo
     */
    leaveEditMode(cancel) {
        this.mode = NovoTableMode.VIEW;
        this._rows.forEach((row) => {
            row._editing = row._editing || {};
            this.columns.forEach((column) => {
                row._editing[column.name] = false;
            });
        });
        if (cancel) {
            this._dataProvider.undo();
        }
        else {
            this._dataProvider.commit();
        }
        this.hideToastMessage();
    }
    /**
     * @description Adds a new row into the table to be edited, can be called from a local reference of the table in your template
     * @memberOf NovoTableElement
     */
    addEditableRow(defaultValue = {}) {
        const tableFormRows = this.tableForm.controls['rows'];
        const row = {};
        const rowControls = [];
        row.controls = {};
        row._editing = {};
        row.rowId = this._rows.length + 1;
        this.columns.forEach((column) => {
            // Use the control passed or use a ReadOnlyControl so that the form has the values
            const control = column.editorConfig
                ? ControlFactory.create(column.editorType, column.editorConfig)
                : new ReadOnlyControl({ key: column.name });
            control.value = null; // remove copied column value
            row.controls[column.name] = control;
            row._editing[column.name] = !column.viewOnly;
            rowControls.push(control);
        });
        this.formUtils.setInitialValues(rowControls, defaultValue, false);
        tableFormRows.push(this.formUtils.toFormGroup(rowControls));
        this._rows.push(row);
    }
    /**
     * @description Validates the Form inside of the Table, if there are errors it will display/return the errors for each row.
     * If there are no errors, then it will return ONLY the changed data for each row, the data returned will be in the form:
     * { id: ID_OF_RECORD, key: value } -- data that was updated
     * { id: undefined, key: value } -- data that was added
     * @memberOf NovoTableElement
     */
    validateAndGetUpdatedData() {
        if (this.tableForm && this.tableForm.controls && this.tableForm.controls['rows']) {
            const changedRows = [];
            const errors = [];
            // Go over the FormArray's controls
            this.tableForm.controls['rows'].controls.forEach((formGroup, index) => {
                let changedRow = null;
                let error = null;
                // Go over the form group controls
                Object.keys(formGroup.controls).forEach((key) => {
                    const control = formGroup.controls[key];
                    // Handle value changing
                    if (control && control.dirty && !control.errors) {
                        if (!changedRow) {
                            // Append the ID, so we have some key to save against
                            changedRow = {};
                            if (this._rows[index].id) {
                                changedRow.id = this._rows[index].id;
                            }
                        }
                        // If dirty, grab value off the form
                        changedRow[key] = this.tableForm.value['rows'][index][key];
                        // Set value back to row (should be already done via the server call, but do it anyway)
                        this._rows[index][key] = changedRow[key];
                    }
                    else if (control && control.errors) {
                        // Handle errors
                        if (!error) {
                            error = {};
                        }
                        error[key] = control.errors;
                        control.markAsDirty();
                        control.markAsTouched();
                    }
                });
                if (changedRow) {
                    changedRows.push(changedRow);
                }
                if (error) {
                    errors.push({ errors: error, row: this._rows[index], index });
                }
            });
            // Return errors if any, otherwise return the changed rows
            if (errors.length === 0) {
                return { changed: changedRows };
            }
            return { errors };
        }
    }
    /**
     * @description Refresh the data provider and leave edit mode
     * @memberOf NovoTableElement
     */
    cancelEditing() {
        this.leaveEditMode(true);
    }
    /**
     * @description Refresh the data provider and leave edit mode
     * @memberOf NovoTableElement
     */
    saveChanges() {
        this.leaveEditMode(false);
    }
    /**
     * @description Displays a toast message inside of the table
     * @memberOf NovoTableElement
     */
    displayToastMessage(toast, hideDelay) {
        this.loading = false;
        this.toast = toast;
        if (hideDelay) {
            setTimeout(() => this.hideToastMessage(), hideDelay);
        }
    }
    /**
     * @description Force hide the toast message
     * @memberOf NovoTableElement
     */
    hideToastMessage() {
        this.toast = null;
        // Hack to make the table display properly after hiding the toast
        this.grossFlagToAvoidTheTableFromBeingUglyWhenHidingTheToast = true;
        setTimeout(() => {
            this.grossFlagToAvoidTheTableFromBeingUglyWhenHidingTheToast = false;
        });
    }
    /**
     * @description display the loading overlay on the table
     * @memberOf NovoTableElement
     */
    toggleLoading(show) {
        this.loading = show;
    }
    /**
     * @description hide a column in edit or view mode
     * @memberOf NovoTableElement
     */
    isColumnHidden(column) {
        return this.editing ? !!column.hideColumnOnEdit : !!column.hideColumnOnView;
    }
}
NovoTableElement.ɵfac = function NovoTableElement_Factory(t) { return new (t || NovoTableElement)(i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i2.FormUtils), i0.ɵɵdirectiveInject(i3.FormBuilder)); };
NovoTableElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoTableElement, selectors: [["novo-table"]], viewQuery: function NovoTableElement_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true, ElementRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.filterInputs = _t);
    } }, hostVars: 5, hostBindings: function NovoTableElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("theme", ctx.theme);
        i0.ɵɵclassProp("editing", ctx.mode === ctx.NovoTableMode.EDIT)("novo-table-loading", ctx.loading);
    } }, inputs: { config: "config", columns: "columns", theme: "theme", skipSortAndFilterClear: "skipSortAndFilterClear", mode: "mode", editable: "editable", rowIdentifier: "rowIdentifier", name: "name", rows: "rows", dataProvider: "dataProvider" }, outputs: { onRowClick: "onRowClick", onRowSelect: "onRowSelect", onTableChange: "onTableChange" }, ngContentSelectors: _c4, decls: 4, vars: 4, consts: [[4, "ngIf"], ["class", "novo-table-loading-overlay", 4, "ngIf"], [3, "theme", "icon", "message", 4, "ngIf"], ["class", "table-container", 4, "ngIf"], [1, "header-actions"], [3, "rowOptions", "disablePageSelection", "page", "itemsPerPage", "totalItems", "pageChange", "itemsPerPageChange", "onPageChange", 4, "ngIf"], [3, "rowOptions", "disablePageSelection", "page", "itemsPerPage", "totalItems", "pageChange", "itemsPerPageChange", "onPageChange"], [1, "novo-table-loading-overlay"], [3, "theme", "icon", "message"], [1, "table-container"], ["hideHeader", "true", 3, "form"], ["role", "grid", 1, "table", "table-striped", "dataTable"], ["class", "table-message", "data-automation-id", "empty-table", 4, "ngIf"], ["class", "table-message", "data-automation-id", "table-errors", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["class", "novo-table-total-footer", 4, "ngFor", "ngForOf"], ["role", "row"], ["class", "row-actions", 4, "ngIf"], ["class", "row-actions checkbox mass-action", 4, "ngIf"], [3, "ngClass", "novoThOrderable", "hidden", "onOrderChange", 4, "ngFor", "ngForOf"], [1, "row-actions"], ["theme", "icon", "icon", "next", "data-automation-id", "expand-all", 3, "click", 4, "ngIf"], ["theme", "icon", "icon", "sort-desc", "data-automation-id", "collapse-all", 3, "click", 4, "ngIf"], ["theme", "icon", "icon", "next", "data-automation-id", "expand-all", 3, "click"], ["theme", "icon", "icon", "sort-desc", "data-automation-id", "collapse-all", 3, "click"], [1, "row-actions", "checkbox", "mass-action"], ["data-automation-id", "select-all-checkbox", "tooltipPosition", "right", 3, "ngModel", "indeterminate", "tooltip", "ngModelChange"], [3, "ngClass", "novoThOrderable", "hidden", "onOrderChange"], ["class", "th-group", 4, "ngIf"], [1, "th-group"], [1, "th-title", 3, "ngClass", "novoThSortable", "column", "onSortChange"], ["class", "table-sort-icons", "tooltipPosition", "bottom", 3, "tooltip", "ngClass", 4, "ngIf"], ["side", "right", "class", "column-filters", "parentScrollSelector", ".table-container", "containerClass", "table-dropdown", 3, "toggled", 4, "ngIf"], ["tooltipPosition", "bottom", 1, "table-sort-icons", 3, "tooltip", "ngClass"], [1, "bhi-arrow-up"], [1, "bhi-arrow-down"], ["side", "right", "parentScrollSelector", ".table-container", "containerClass", "table-dropdown", 1, "column-filters", 3, "toggled"], ["type", "button", "theme", "icon", "icon", "filter", "tooltipPosition", "bottom", 3, "tooltip", "click"], [1, "filter-search"], [1, "header"], ["theme", "dialogue", "color", "negative", "icon", "times", 3, "click", 4, "ngIf"], ["type", "text", "keepFilterFocused", "", 3, "novoTableFilter", "ngModel", "onFilterChange", "ngModelChange", 4, "ngIf"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["theme", "dialogue", "color", "negative", "icon", "times", 3, "click"], ["type", "text", "keepFilterFocused", "", 3, "novoTableFilter", "ngModel", "onFilterChange", "ngModelChange"], ["filterInput", ""], [3, "ngClass", "click"], ["class", "bhi-check", 4, "ngIf"], [1, "bhi-check"], ["class", "filter-search", 4, "ngIf"], [3, "ngClass", "keepOpen", "hidden", "click", 4, "ngFor", "ngForOf"], [1, "calendar-container", 3, "hidden"], [3, "click"], [1, "bhi-previous"], ["range", "true", 3, "ngModel", "onSelect", "ngModelChange"], ["rangePicker", ""], [3, "ngClass", "keepOpen", "hidden", "click"], ["class", "table-selection-row", "data-automation-id", "table-selection-row", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["data-automation-id", "table-selection-row", 1, "table-selection-row"], ["colspan", "100%"], ["data-automation-id", "all-matching-records", 3, "click"], [1, "table-row", 3, "ngClass", "id", "click"], ["class", "row-actions checkbox", 4, "ngIf"], [3, "novo-form-row", "hidden", 4, "ngFor", "ngForOf"], ["class", "details-row", 3, "hidden", 4, "ngIf"], ["theme", "icon", "icon", "next", 3, "click", 4, "ngIf"], ["theme", "icon", "icon", "sort-desc", 3, "click", 4, "ngIf"], ["theme", "icon", "icon", "next", 3, "click"], ["theme", "icon", "icon", "sort-desc", 3, "click"], [1, "row-actions", "checkbox"], ["data-automation-id", "select-row-checkbox", 3, "ngModel", "ngModelChange"], [3, "hidden"], [3, "hasEditor", "column", "row", "form", 4, "ngIf"], ["condensed", "true", 3, "form", "control", 4, "ngIf"], [3, "hasEditor", "column", "row", "form"], ["condensed", "true", 3, "form", "control"], [1, "details-row", 3, "hidden"], [3, "data", "renderer"], ["data-automation-id", "empty-table", 1, "table-message"], ["emptymessage", ""], ["class", "table-empty-message", 4, "ngIf"], [1, "table-empty-message"], [1, "bhi-search-question"], ["nomatchmessage", ""], ["class", "no-matching-records", 4, "ngIf"], [1, "no-matching-records"], ["data-automation-id", "table-errors", 1, "table-message"], ["errormessage", ""], ["class", "table-error-message", 4, "ngIf"], [1, "table-error-message"], [1, "bhi-caution"], [3, "ngClass"], [1, "novo-table-total-footer"], [4, "ngFor", "ngForOf"]], template: function NovoTableElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c3);
        i0.ɵɵtemplate(0, NovoTableElement_header_0_Template, 5, 1, "header", 0);
        i0.ɵɵtemplate(1, NovoTableElement_div_1_Template, 2, 0, "div", 1);
        i0.ɵɵtemplate(2, NovoTableElement_novo_toast_2_Template, 1, 3, "novo-toast", 2);
        i0.ɵɵtemplate(3, NovoTableElement_div_3_Template, 10, 10, "div", 3);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.columns.length);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.loading || ctx.dataProvider.isLoading());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.toast);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.grossFlagToAvoidTheTableFromBeingUglyWhenHidingTheToast);
    } }, directives: [i4.NgIf, i5.Pagination, i6.NovoLoadingElement, i7.NovoToastElement, i8.NovoFormElement, i4.NgForOf, i9.NovoButtonElement, i10.NovoCheckboxElement, i3.NgControlStatus, i3.NgModel, i11.TooltipDirective, i4.NgClass, i12.ThOrderable, i13.ThSortable, i14.NovoDropdownElement, i14.NovoDropdownListElement, i14.NovoItemElement, i3.DefaultValueAccessor, i15.NovoTableKeepFilterFocus, i16.TableFilter, i17.NovoDatePickerElement, i18.TableCell, i19.NovoControlElement, i20.RowDetails], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTableElement, [{
        type: Component,
        args: [{
                selector: 'novo-table',
                host: {
                    '[attr.theme]': 'theme',
                    '[class.editing]': 'mode === NovoTableMode.EDIT',
                    '[class.novo-table-loading]': 'loading',
                },
                // directives: [],
                template: `
        <header *ngIf="columns.length">
            <ng-content select="novo-table-header"></ng-content>
            <div class="header-actions">
                <novo-pagination *ngIf="config.paging && !(dataProvider.isEmpty() && !dataProvider.isFiltered())"
                                 [rowOptions]="config.paging.rowOptions"
                                 [disablePageSelection]="config.paging.disablePageSelection"
                                 [(page)]="dataProvider.page"
                                 [(itemsPerPage)]="dataProvider.pageSize"
                                 [totalItems]="dataProvider.total"
                                 (onPageChange)="onPageChange($event)">
                </novo-pagination>
                <ng-content select="novo-table-actions"></ng-content>
            </div>
        </header>
        <div class="novo-table-loading-overlay" *ngIf="loading || dataProvider.isLoading()">
            <novo-loading></novo-loading>
        </div>
        <novo-toast *ngIf="toast" [theme]="toast?.theme" [icon]="toast?.icon" [message]="toast?.message"></novo-toast>
        <div class="table-container" *ngIf="!grossFlagToAvoidTheTableFromBeingUglyWhenHidingTheToast">
            <novo-form hideHeader="true" [form]="tableForm">
                <table class="table table-striped dataTable" [class.table-details]="config.hasDetails" role="grid">
                <!-- skipSortAndFilterClear is a hack right now, will be removed once Canvas is refactored -->
                <thead *ngIf="columns.length && (!dataProvider.isEmpty() || dataProvider.isFiltered() || skipSortAndFilterClear || editing)">
                    <tr role="row">
                        <!-- DETAILS -->
                        <th class="row-actions" *ngIf="config.hasDetails">
                            <button theme="icon" icon="next" (click)="expandAllOnPage(config.expandAll)" *ngIf="!config.expandAll" data-automation-id="expand-all"></button>
                            <button theme="icon" icon="sort-desc" (click)="expandAllOnPage(config.expandAll)" *ngIf="config.expandAll" data-automation-id="collapse-all"></button>
                        </th>
                        <!-- CHECKBOX -->
                        <th class="row-actions checkbox mass-action" *ngIf="config.rowSelectionStyle === 'checkbox'">
                            <novo-checkbox [(ngModel)]="master" [indeterminate]="pageSelected.length > 0 && pageSelected.length < pagedData.length" (ngModelChange)="selectPage($event)" data-automation-id="select-all-checkbox" [tooltip]="master ? labels.deselectAll : labels.selectAllOnPage" tooltipPosition="right"></novo-checkbox>
                        </th>
                        <!-- TABLE HEADERS -->
                        <th *ngFor="let column of columns" [ngClass]="{ 'mass-action': config?.rowSelectionStyle === 'checkbox', 'actions': column?.actions?.items?.length > 0, 'preview': column?.name === 'preview' }" [novoThOrderable]="column" (onOrderChange)="onOrderChange($event)" [hidden]="isColumnHidden(column)">
                            <div class="th-group" [attr.data-automation-id]="column.id || column.name" *ngIf="!column.hideHeader">
                                <!-- LABEL & SORT ARROWS -->
                                <div class="th-title" [ngClass]="(config.sorting !== false && column.sorting !== false) ? 'sortable' : ''" [novoThSortable]="config" [column]="column" (onSortChange)="onSortChange($event)">
                                    <label>{{ column.title || column.label }}</label>
                                    <div class="table-sort-icons" tooltipPosition="bottom" [tooltip]="labels.sort" [ngClass]="column.sort || ''" *ngIf="config.sorting !== false && column.sorting !== false">
                                        <i class="bhi-arrow-up"></i>
                                        <i class="bhi-arrow-down"></i>
                                    </div>
                                </div>
                                <!-- FILTER DROP-DOWN -->
                                <novo-dropdown side="right" *ngIf="config.filtering !== false && column.filtering !== false" class="column-filters" (toggled)="onDropdownToggled($event, column.name)" parentScrollSelector=".table-container" containerClass="table-dropdown">
                                    <button type="button" theme="icon" icon="filter" tooltipPosition="bottom" [tooltip]="labels.filters" [class.filtered]="column.filter || column.filter===false" (click)="focusInput()"></button>
                                    <!-- FILTER OPTIONS LIST -->
                                    <list *ngIf="(column?.options?.length || column?.originalOptions?.length) && column?.type !== 'date' && toggledDropdownMap[column.name]">
                                        <item class="filter-search">
                                            <div class="header">
                                                <span>{{ labels.filters }}</span>
                                                <button theme="dialogue" color="negative" icon="times" (click)="onFilterClear(column)" *ngIf="column.filter || column.filter===false">{{ labels.clear }}</button>
                                            </div>
                                            <input type="text" *ngIf="!!column.allowCustomTextOption" [attr.id]="column.name + '-input'" [novoTableFilter]="column" (onFilterChange)="onFilterKeywords($event)" [(ngModel)]="column.freetextFilter" keepFilterFocused #filterInput/>
                                        </item>
                                        <item [ngClass]="{ active: isFilterActive(column, option) }" *ngFor="let option of column.options" (click)="onFilterClick(column, option)" [attr.data-automation-id]="getOptionDataAutomationId(option)">
                                            <span>{{ option?.label || option }}</span> <i class="bhi-check" *ngIf="isFilterActive(column, option)"></i>
                                        </item>
                                    </list>
                                    <!-- FILTER SEARCH INPUT -->
                                    <list *ngIf="!(column?.options?.length || column?.originalOptions?.length) && toggledDropdownMap[column.name]">
                                        <item class="filter-search">
                                            <div class="header">
                                                <span>{{ labels.filters }}</span>
                                                <button theme="dialogue" color="negative" icon="times" (click)="onFilterClear(column)" *ngIf="column.filter">{{ labels.clear }}</button>
                                            </div>
                                            <input type="text" [attr.id]="column.name + '-input'" [novoTableFilter]="column" (onFilterChange)="onFilterChange($event)" [(ngModel)]="column.filter" keepFilterFocused #filterInput/>
                                        </item>
                                    </list>
                                    <!-- FILTER DATE OPTIONS -->
                                    <list *ngIf="column?.options?.length && column?.type === 'date' && toggledDropdownMap[column.name]">
                                        <item class="filter-search" *ngIf="!column.calenderShow">
                                            <div class="header">
                                                <span>{{ labels.filters }}</span>
                                                <button theme="dialogue" color="negative" icon="times" (click)="onFilterClear(column)" *ngIf="column.filter">{{ labels.clear }}</button>
                                            </div>
                                        </item>
                                        <item [ngClass]="{ active: isFilterActive(column, option) }" *ngFor="let option of column.options" (click)="onFilterClick(column, option)" [keepOpen]="option.range" [hidden]="column.calenderShow" [attr.data-automation-id]="(option?.label || option)">
                                            {{ option?.label || option }} <i class="bhi-check" *ngIf="isFilterActive(column, option)"></i>
                                        </item>
                                        <div class="calendar-container" [hidden]="!column.calenderShow">
                                            <div (click)="column.calenderShow=false"><i class="bhi-previous"></i>{{ labels.backToPresetFilters }}</div>
                                            <novo-date-picker #rangePicker (onSelect)="onCalenderSelect(column, $event)" [(ngModel)]="column.filter" range="true"></novo-date-picker>
                                        </div>
                                    </list>
                                </novo-dropdown>
                            </div>
                        </th>
                    </tr>
                </thead>
                <!-- TABLE DATA -->
                <tbody *ngIf="!dataProvider.isEmpty() || editing">
                    <tr class="table-selection-row" *ngIf="config.rowSelectionStyle === 'checkbox' && showSelectAllMessage && config.selectAllEnabled" data-automation-id="table-selection-row">
                        <td colspan="100%">
                            {{labels.selectedRecords(selected.length)}} <a (click)="selectAll(true)" data-automation-id="all-matching-records">{{labels.totalRecords(dataProvider.total)}}</a>
                        </td>
                    </tr>
                    <ng-template ngFor let-row="$implicit" let-i="index" [ngForOf]="rows">
                        <tr class="table-row" [ngClass]="row.customClass || ''" [id]="name + '-' + row[rowIdentifier]" [attr.data-automation-id]="row.id" (click)="rowClickHandler(row)" [class.active]="row.id === activeId">
                            <td class="row-actions" *ngIf="config.hasDetails">
                                <button theme="icon" icon="next" (click)="row._expanded=!row._expanded" *ngIf="!row._expanded"></button>
                                <button theme="icon" icon="sort-desc" (click)="row._expanded=!row._expanded" *ngIf="row._expanded"></button>
                            </td>
                            <td class="row-actions checkbox" *ngIf="config.rowSelectionStyle === 'checkbox'">
                                <novo-checkbox [(ngModel)]="row._selected" (ngModelChange)="rowSelectHandler(row)" data-automation-id="select-row-checkbox"></novo-checkbox>
                            </td>
                            <td *ngFor="let column of columns" [attr.data-automation-id]="column.id || column.name" [class.novo-form-row]="editable" [hidden]="isColumnHidden(column)">
                                <novo-table-cell *ngIf="row._editing && !row._editing[column.name]" [hasEditor]="editable" [column]="column" [row]="row" [form]="getRowControlForm(i)"></novo-table-cell>
                                <novo-control *ngIf="row._editing && row._editing[column.name]" condensed="true" [form]="getRowControlForm(i)" [control]="row.controls[column.name]"></novo-control>
                            </td>
                        </tr>
                        <tr class="details-row" *ngIf="config.hasDetails" [hidden]="!row._expanded" [attr.data-automation-id]="'details-row-'+row.id">
                            <td class="row-actions"></td>
                            <td [attr.colspan]="config.rowSelectionStyle === 'checkbox' ? (columns.length + 1) : columns.length">
                                <novo-row-details [data]="row" [renderer]="config.detailsRenderer"></novo-row-details>
                            </td>
                        </tr>
                    </ng-template>
                </tbody>
                <!-- NO TABLE DATA PLACEHOLDER -->
                <tbody class="table-message" *ngIf="dataProvider.isEmpty() && !dataProvider.isFiltered() && !editing" data-automation-id="empty-table">
                    <tr>
                        <td colspan="100%">
                            <div #emptymessage><ng-content select="[table-empty-message]"></ng-content></div>
                            <div class="table-empty-message" *ngIf="emptymessage.childNodes.length == 0">
                                <h4><i class="bhi-search-question"></i> {{ labels.emptyTableMessage }}</h4>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <!-- NO MATCHING RECORDS -->
                <tbody class="table-message" *ngIf="dataProvider.isEmpty() && dataProvider.isFiltered()" data-automation-id="empty-table">
                    <tr>
                        <td colspan="100%">
                            <div #nomatchmessage><ng-content select="[table-no-matching-records-message]"></ng-content></div>
                            <div class="no-matching-records" *ngIf="nomatchmessage.childNodes.length == 0">
                                <h4><i class="bhi-search-question"></i> {{ labels.noMatchingRecordsMessage }}</h4>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <!-- TABLE DATA ERROR PLACEHOLDER -->
                <tbody class="table-message" *ngIf="dataProvider.hasErrors()" data-automation-id="table-errors">
                    <tr>
                        <td colspan="100%">
                            <div #errormessage><ng-content select="[table-error-message]"></ng-content></div>
                            <div class="table-error-message" *ngIf="errormessage.childNodes.length == 0">
                                <h4><i class="bhi-caution"></i> {{ labels.erroredTableMessage }}</h4>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot *ngIf="!config.footers" [ngClass]="dataProvider.length % 2 == 0 ? 'odd' : 'even'">
                    <tr>
                        <td colspan="100%">
                            <ng-content select="novo-table-footer"></ng-content>
                        </td>
                    </tr>
                </tfoot>
                <tfoot *ngFor="let footer of footers;let i = index;" class="novo-table-total-footer">
                    <tr>
                        <td *ngFor="let column of columns" [attr.data-automation-id]="(column.id || column.name) + '-total-' + i">{{ footer[column.name] }}</td>
                    </tr>
                </tfoot>
            </table>
        </novo-form>
    </div>
    `,
            }]
    }], function () { return [{ type: i1.NovoLabelService }, { type: i2.FormUtils }, { type: i3.FormBuilder }]; }, { filterInputs: [{
            type: ViewChildren,
            args: ['filterInput', { read: ElementRef }]
        }], config: [{
            type: Input
        }], columns: [{
            type: Input
        }], theme: [{
            type: Input
        }], skipSortAndFilterClear: [{
            type: Input
        }], mode: [{
            type: Input
        }], editable: [{
            type: Input
        }], rowIdentifier: [{
            type: Input
        }], name: [{
            type: Input
        }], onRowClick: [{
            type: Output
        }], onRowSelect: [{
            type: Output
        }], onTableChange: [{
            type: Output
        }], rows: [{
            type: Input
        }], dataProvider: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvVGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQVcsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUE4QixXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEYsU0FBUztBQUNULE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxNQUFNO0FBQ04sT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpRHpELDBDQU9rQjtJQUpELGlQQUE0Qix3UEFBQSxrT0FBQTtJQUk3QyxpQkFBa0I7OztJQU5ELDREQUF1QyxtRUFBQSxrQ0FBQSw4Q0FBQSx5Q0FBQTs7O0lBSmhFLDhCQUNJO0lBQUEsa0JBQXVDO0lB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R1AsYUFBYTtrQkFEWixNQUFNO1lBNEJILElBQUk7a0JBRFAsS0FBSztZQWlCRixZQUFZO2tCQURmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRG9DaGVjaywgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQXJyYXksIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBWZW5kb3JcbmltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLy8gQVBQXG5pbXBvcnQgeyBDb2xsZWN0aW9uRXZlbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXByb3ZpZGVyL0NvbGxlY3Rpb25FdmVudCc7XG5pbXBvcnQgeyBQYWdlZEFycmF5Q29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtcHJvdmlkZXIvUGFnZWRBcnJheUNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtLXV0aWxzL0Zvcm1VdGlscyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBub3RpZnkgfSBmcm9tICcuLi8uLi91dGlscy9ub3RpZmllci9ub3RpZmllci51dGlsJztcbmltcG9ydCB7IENvbnRyb2xGYWN0b3J5LCBSZWFkT25seUNvbnRyb2wgfSBmcm9tICcuLy4uL2Zvcm0vRm9ybUNvbnRyb2xzJztcblxuZXhwb3J0IGludGVyZmFjZSBOb3ZvVGFibGVDb25maWcge1xuICAvLyBQYWdpbmcgY29uZmlnXG4gIHBhZ2luZz86IHtcbiAgICBjdXJyZW50OiBudW1iZXI7IC8vIGN1cnJlbnQgcGFnZVxuICAgIGl0ZW1zUGVyUGFnZTogbnVtYmVyOyAvLyBpdGVtcyBwZXIgcGFnZVxuICAgIG9uUGFnZUNoYW5nZTogRnVuY3Rpb247IC8vIGZ1bmN0aW9uIHRvIGhhbmRsZSBwYWdlIGNoYW5naW5nXG4gICAgcm93T3B0aW9ucz86IHsgdmFsdWU6IG51bWJlcjsgbGFiZWw6IHN0cmluZyB9W107IC8vIHBhZ2Ugb3B0aW9uc1xuICAgIGRpc2FibGVQYWdlU2VsZWN0aW9uPzogYm9vbGVhbjsgLy8gZGlzYWJsZXMgdGhlIHBhZ2VzIGZyb20gYmVpbmcgc2VsZWN0ZWRcbiAgfTtcbiAgLy8gRm9vdGVyIGNvbmZpZyAodG90YWwgZm9vdGVyKVxuICBmb290ZXJzPzogQXJyYXk8e1xuICAgIGNvbHVtbnM6IEFycmF5PHN0cmluZz47IC8vIHN0cmluZyBhcnJheSBvZiBjb2x1bW5zIHRvIHRvdGFsXG4gICAgbWV0aG9kOiBzdHJpbmc7IC8vIG1ldGhvZCB0byB1c2UgZm9yIHRoZSBmb290ZXIsIFNVTSB8IEFWRywgZGVmYXVsdHMgdG8gU1VNXG4gICAgbGFiZWxDb2x1bW46IHN0cmluZzsgLy8gY29sdW1uIHRvIHVzZSBhcyB0aGUgXCJ0b3RhbFwiIGxhYmVsXG4gICAgbGFiZWw6IHN0cmluZzsgLy8gbGFiZWwgdG8gdXNlIGluIHRoZSBcInRvdGFsXCIgbGFiZWxcbiAgfT47XG4gIC8vIFRPRE86IFdoZW4gdGhlc2UgdHlwZXMgYXJlIGVuZm9yY2VkIGFzIGBib29sZWFuIHwgRnVuY3Rpb25gLCB0aGVyZSdzIGEgbGludCBlcnJvci4gVGhhdCdzIGEgYnVnLlxuICBmaWx0ZXJpbmc/OiBib29sZWFuIHwgYW55OyAvLyBUdXJuIG9uIGZpbHRlcmluZyBmb3IgdGhlIHRhYmxlLCBib29sZWFuIG9yIGZ1bmN0aW9uIGZvciBmaWx0ZXJpbmcgY2FsbGJhY2tcbiAgc29ydGluZz86IGJvb2xlYW4gfCBhbnk7IC8vIFR1cm4gb24gc29ydGluZyBmb3IgdGhlIHRhYmxlLCBib29sZWFuIG9yIGZ1bmN0aW9uIGZvciBzb3J0aW5nIGNhbGxiYWNrXG4gIG9yZGVyaW5nPzogYm9vbGVhbiB8IEZ1bmN0aW9uOyAvLyBUdXJuIG9uIG9yZGVyaW5nIGZvciB0aGUgdGFibGUsIGJvb2xlYW4gb3IgZnVuY3Rpb24gZm9yIG9yZGVyaW5nIGNhbGxiYWNrXG4gIHJlc2l6aW5nPzogYm9vbGVhbiB8IEZ1bmN0aW9uOyAvLyBUdXJuIG9uIHJlc2l6aW5nIGZvciB0aGUgdGFibGUsIGJvb2xlYW4gb3IgZnVuY3Rpb24gZm9yIHJlc2l6aW5nIGNhbGxiYWNrXG4gIHJvd1NlbGVjdGlvblN0eWxlPzogc3RyaW5nOyAvLyBSb3cgc2VsZWN0aW9uIHN0eWxlLCBjaGVja2JveCBvciByb3dcbiAgcm93U2VsZWN0PzogYm9vbGVhbjsgLy8gVHVybiBvbiByb3cgc2VsZWN0aW9uXG4gIGhhc0RldGFpbHM/OiBib29sZWFuOyAvLyBUdXJuIG9uIGRldGFpbHMgcm93IGZvciB0aGUgdGFibGVcbiAgZGV0YWlsc1JlbmRlcmVyPzogYW55OyAvLyBSZW5kZXJlci9jb21wb25lbnQgZm9yIHRoZSBkZXRhaWxzIHJvd1xuICBleHBhbmRBbGw/OiBib29sZWFuOyAvLyBzaG91bGQgQWxsIFJvd3MgYmUgZXhwYW5kZWQgYnkgZGVmYXVsdFxuICBzZWxlY3RBbGxFbmFibGVkPzogYm9vbGVhbjsgLy8gQWxsb3dzIHRoZSB0YWJsZSwgd2hpbGUgaW4gc2VsZWN0aW9uIG1vZGUgdG8gaGF2ZSBhIHNlbGVjdCBhbGwgYXQgdGhlIHRvcFxufVxuXG4vLyBUT0RPIC0gc3VwcG9ydCAoMSkgY2xpY2tpbmcgY2VsbCB0byBlZGl0LCAoMikgY2xpY2tpbmcgcm93IHRvIGVkaXQsICgzKSBidXR0b24gdG8gdHJpZ2dlciBmdWxsIHRhYmxlIHRvIGVkaXRcbmV4cG9ydCBlbnVtIE5vdm9UYWJsZU1vZGUge1xuICBWSUVXID0gMSxcbiAgRURJVCA9IDIsXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdGFibGUnLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLnRoZW1lXSc6ICd0aGVtZScsXG4gICAgJ1tjbGFzcy5lZGl0aW5nXSc6ICdtb2RlID09PSBOb3ZvVGFibGVNb2RlLkVESVQnLFxuICAgICdbY2xhc3Mubm92by10YWJsZS1sb2FkaW5nXSc6ICdsb2FkaW5nJyxcbiAgfSxcbiAgLy8gZGlyZWN0aXZlczogW10sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoZWFkZXIgKm5nSWY9XCJjb2x1bW5zLmxlbmd0aFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibm92by10YWJsZS1oZWFkZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8bm92by1wYWdpbmF0aW9uICpuZ0lmPVwiY29uZmlnLnBhZ2luZyAmJiAhKGRhdGFQcm92aWRlci5pc0VtcHR5KCkgJiYgIWRhdGFQcm92aWRlci5pc0ZpbHRlcmVkKCkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3dPcHRpb25zXT1cImNvbmZpZy5wYWdpbmcucm93T3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZVBhZ2VTZWxlY3Rpb25dPVwiY29uZmlnLnBhZ2luZy5kaXNhYmxlUGFnZVNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKHBhZ2UpXT1cImRhdGFQcm92aWRlci5wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsoaXRlbXNQZXJQYWdlKV09XCJkYXRhUHJvdmlkZXIucGFnZVNpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RvdGFsSXRlbXNdPVwiZGF0YVByb3ZpZGVyLnRvdGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblBhZ2VDaGFuZ2UpPVwib25QYWdlQ2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8L25vdm8tcGFnaW5hdGlvbj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJub3ZvLXRhYmxlLWFjdGlvbnNcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXRhYmxlLWxvYWRpbmctb3ZlcmxheVwiICpuZ0lmPVwibG9hZGluZyB8fCBkYXRhUHJvdmlkZXIuaXNMb2FkaW5nKClcIj5cbiAgICAgICAgICAgIDxub3ZvLWxvYWRpbmc+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bm92by10b2FzdCAqbmdJZj1cInRvYXN0XCIgW3RoZW1lXT1cInRvYXN0Py50aGVtZVwiIFtpY29uXT1cInRvYXN0Py5pY29uXCIgW21lc3NhZ2VdPVwidG9hc3Q/Lm1lc3NhZ2VcIj48L25vdm8tdG9hc3Q+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1jb250YWluZXJcIiAqbmdJZj1cIiFncm9zc0ZsYWdUb0F2b2lkVGhlVGFibGVGcm9tQmVpbmdVZ2x5V2hlbkhpZGluZ1RoZVRvYXN0XCI+XG4gICAgICAgICAgICA8bm92by1mb3JtIGhpZGVIZWFkZXI9XCJ0cnVlXCIgW2Zvcm1dPVwidGFibGVGb3JtXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZCBkYXRhVGFibGVcIiBbY2xhc3MudGFibGUtZGV0YWlsc109XCJjb25maWcuaGFzRGV0YWlsc1wiIHJvbGU9XCJncmlkXCI+XG4gICAgICAgICAgICAgICAgPCEtLSBza2lwU29ydEFuZEZpbHRlckNsZWFyIGlzIGEgaGFjayByaWdodCBub3csIHdpbGwgYmUgcmVtb3ZlZCBvbmNlIENhbnZhcyBpcyByZWZhY3RvcmVkIC0tPlxuICAgICAgICAgICAgICAgIDx0aGVhZCAqbmdJZj1cImNvbHVtbnMubGVuZ3RoICYmICghZGF0YVByb3ZpZGVyLmlzRW1wdHkoKSB8fCBkYXRhUHJvdmlkZXIuaXNGaWx0ZXJlZCgpIHx8IHNraXBTb3J0QW5kRmlsdGVyQ2xlYXIgfHwgZWRpdGluZylcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIHJvbGU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gREVUQUlMUyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInJvdy1hY3Rpb25zXCIgKm5nSWY9XCJjb25maWcuaGFzRGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgaWNvbj1cIm5leHRcIiAoY2xpY2spPVwiZXhwYW5kQWxsT25QYWdlKGNvbmZpZy5leHBhbmRBbGwpXCIgKm5nSWY9XCIhY29uZmlnLmV4cGFuZEFsbFwiIGRhdGEtYXV0b21hdGlvbi1pZD1cImV4cGFuZC1hbGxcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIGljb249XCJzb3J0LWRlc2NcIiAoY2xpY2spPVwiZXhwYW5kQWxsT25QYWdlKGNvbmZpZy5leHBhbmRBbGwpXCIgKm5nSWY9XCJjb25maWcuZXhwYW5kQWxsXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiY29sbGFwc2UtYWxsXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBDSEVDS0JPWCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInJvdy1hY3Rpb25zIGNoZWNrYm94IG1hc3MtYWN0aW9uXCIgKm5nSWY9XCJjb25maWcucm93U2VsZWN0aW9uU3R5bGUgPT09ICdjaGVja2JveCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bm92by1jaGVja2JveCBbKG5nTW9kZWwpXT1cIm1hc3RlclwiIFtpbmRldGVybWluYXRlXT1cInBhZ2VTZWxlY3RlZC5sZW5ndGggPiAwICYmIHBhZ2VTZWxlY3RlZC5sZW5ndGggPCBwYWdlZERhdGEubGVuZ3RoXCIgKG5nTW9kZWxDaGFuZ2UpPVwic2VsZWN0UGFnZSgkZXZlbnQpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwic2VsZWN0LWFsbC1jaGVja2JveFwiIFt0b29sdGlwXT1cIm1hc3RlciA/IGxhYmVscy5kZXNlbGVjdEFsbCA6IGxhYmVscy5zZWxlY3RBbGxPblBhZ2VcIiB0b29sdGlwUG9zaXRpb249XCJyaWdodFwiPjwvbm92by1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFRBQkxFIEhFQURFUlMgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW25nQ2xhc3NdPVwieyAnbWFzcy1hY3Rpb24nOiBjb25maWc/LnJvd1NlbGVjdGlvblN0eWxlID09PSAnY2hlY2tib3gnLCAnYWN0aW9ucyc6IGNvbHVtbj8uYWN0aW9ucz8uaXRlbXM/Lmxlbmd0aCA+IDAsICdwcmV2aWV3JzogY29sdW1uPy5uYW1lID09PSAncHJldmlldycgfVwiIFtub3ZvVGhPcmRlcmFibGVdPVwiY29sdW1uXCIgKG9uT3JkZXJDaGFuZ2UpPVwib25PcmRlckNoYW5nZSgkZXZlbnQpXCIgW2hpZGRlbl09XCJpc0NvbHVtbkhpZGRlbihjb2x1bW4pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRoLWdyb3VwXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNvbHVtbi5pZCB8fCBjb2x1bW4ubmFtZVwiICpuZ0lmPVwiIWNvbHVtbi5oaWRlSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gTEFCRUwgJiBTT1JUIEFSUk9XUyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRoLXRpdGxlXCIgW25nQ2xhc3NdPVwiKGNvbmZpZy5zb3J0aW5nICE9PSBmYWxzZSAmJiBjb2x1bW4uc29ydGluZyAhPT0gZmFsc2UpID8gJ3NvcnRhYmxlJyA6ICcnXCIgW25vdm9UaFNvcnRhYmxlXT1cImNvbmZpZ1wiIFtjb2x1bW5dPVwiY29sdW1uXCIgKG9uU29ydENoYW5nZSk9XCJvblNvcnRDaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7IGNvbHVtbi50aXRsZSB8fCBjb2x1bW4ubGFiZWwgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXNvcnQtaWNvbnNcIiB0b29sdGlwUG9zaXRpb249XCJib3R0b21cIiBbdG9vbHRpcF09XCJsYWJlbHMuc29ydFwiIFtuZ0NsYXNzXT1cImNvbHVtbi5zb3J0IHx8ICcnXCIgKm5nSWY9XCJjb25maWcuc29ydGluZyAhPT0gZmFsc2UgJiYgY29sdW1uLnNvcnRpbmcgIT09IGZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktYXJyb3ctdXBcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktYXJyb3ctZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBGSUxURVIgRFJPUC1ET1dOIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bm92by1kcm9wZG93biBzaWRlPVwicmlnaHRcIiAqbmdJZj1cImNvbmZpZy5maWx0ZXJpbmcgIT09IGZhbHNlICYmIGNvbHVtbi5maWx0ZXJpbmcgIT09IGZhbHNlXCIgY2xhc3M9XCJjb2x1bW4tZmlsdGVyc1wiICh0b2dnbGVkKT1cIm9uRHJvcGRvd25Ub2dnbGVkKCRldmVudCwgY29sdW1uLm5hbWUpXCIgcGFyZW50U2Nyb2xsU2VsZWN0b3I9XCIudGFibGUtY29udGFpbmVyXCIgY29udGFpbmVyQ2xhc3M9XCJ0YWJsZS1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGhlbWU9XCJpY29uXCIgaWNvbj1cImZpbHRlclwiIHRvb2x0aXBQb3NpdGlvbj1cImJvdHRvbVwiIFt0b29sdGlwXT1cImxhYmVscy5maWx0ZXJzXCIgW2NsYXNzLmZpbHRlcmVkXT1cImNvbHVtbi5maWx0ZXIgfHwgY29sdW1uLmZpbHRlcj09PWZhbHNlXCIgKGNsaWNrKT1cImZvY3VzSW5wdXQoKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBGSUxURVIgT1BUSU9OUyBMSVNUIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpc3QgKm5nSWY9XCIoY29sdW1uPy5vcHRpb25zPy5sZW5ndGggfHwgY29sdW1uPy5vcmlnaW5hbE9wdGlvbnM/Lmxlbmd0aCkgJiYgY29sdW1uPy50eXBlICE9PSAnZGF0ZScgJiYgdG9nZ2xlZERyb3Bkb3duTWFwW2NvbHVtbi5uYW1lXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiZmlsdGVyLXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBsYWJlbHMuZmlsdGVycyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIGNvbG9yPVwibmVnYXRpdmVcIiBpY29uPVwidGltZXNcIiAoY2xpY2spPVwib25GaWx0ZXJDbGVhcihjb2x1bW4pXCIgKm5nSWY9XCJjb2x1bW4uZmlsdGVyIHx8IGNvbHVtbi5maWx0ZXI9PT1mYWxzZVwiPnt7IGxhYmVscy5jbGVhciB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKm5nSWY9XCIhIWNvbHVtbi5hbGxvd0N1c3RvbVRleHRPcHRpb25cIiBbYXR0ci5pZF09XCJjb2x1bW4ubmFtZSArICctaW5wdXQnXCIgW25vdm9UYWJsZUZpbHRlcl09XCJjb2x1bW5cIiAob25GaWx0ZXJDaGFuZ2UpPVwib25GaWx0ZXJLZXl3b3JkcygkZXZlbnQpXCIgWyhuZ01vZGVsKV09XCJjb2x1bW4uZnJlZXRleHRGaWx0ZXJcIiBrZWVwRmlsdGVyRm9jdXNlZCAjZmlsdGVySW5wdXQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbSBbbmdDbGFzc109XCJ7IGFjdGl2ZTogaXNGaWx0ZXJBY3RpdmUoY29sdW1uLCBvcHRpb24pIH1cIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbHVtbi5vcHRpb25zXCIgKGNsaWNrKT1cIm9uRmlsdGVyQ2xpY2soY29sdW1uLCBvcHRpb24pXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImdldE9wdGlvbkRhdGFBdXRvbWF0aW9uSWQob3B0aW9uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBvcHRpb24/LmxhYmVsIHx8IG9wdGlvbiB9fTwvc3Bhbj4gPGkgY2xhc3M9XCJiaGktY2hlY2tcIiAqbmdJZj1cImlzRmlsdGVyQWN0aXZlKGNvbHVtbiwgb3B0aW9uKVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEZJTFRFUiBTRUFSQ0ggSU5QVVQgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlzdCAqbmdJZj1cIiEoY29sdW1uPy5vcHRpb25zPy5sZW5ndGggfHwgY29sdW1uPy5vcmlnaW5hbE9wdGlvbnM/Lmxlbmd0aCkgJiYgdG9nZ2xlZERyb3Bkb3duTWFwW2NvbHVtbi5uYW1lXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiZmlsdGVyLXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBsYWJlbHMuZmlsdGVycyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIGNvbG9yPVwibmVnYXRpdmVcIiBpY29uPVwidGltZXNcIiAoY2xpY2spPVwib25GaWx0ZXJDbGVhcihjb2x1bW4pXCIgKm5nSWY9XCJjb2x1bW4uZmlsdGVyXCI+e3sgbGFiZWxzLmNsZWFyIH19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbYXR0ci5pZF09XCJjb2x1bW4ubmFtZSArICctaW5wdXQnXCIgW25vdm9UYWJsZUZpbHRlcl09XCJjb2x1bW5cIiAob25GaWx0ZXJDaGFuZ2UpPVwib25GaWx0ZXJDaGFuZ2UoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwiY29sdW1uLmZpbHRlclwiIGtlZXBGaWx0ZXJGb2N1c2VkICNmaWx0ZXJJbnB1dC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBGSUxURVIgREFURSBPUFRJT05TIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpc3QgKm5nSWY9XCJjb2x1bW4/Lm9wdGlvbnM/Lmxlbmd0aCAmJiBjb2x1bW4/LnR5cGUgPT09ICdkYXRlJyAmJiB0b2dnbGVkRHJvcGRvd25NYXBbY29sdW1uLm5hbWVdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0gY2xhc3M9XCJmaWx0ZXItc2VhcmNoXCIgKm5nSWY9XCIhY29sdW1uLmNhbGVuZGVyU2hvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBsYWJlbHMuZmlsdGVycyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJkaWFsb2d1ZVwiIGNvbG9yPVwibmVnYXRpdmVcIiBpY29uPVwidGltZXNcIiAoY2xpY2spPVwib25GaWx0ZXJDbGVhcihjb2x1bW4pXCIgKm5nSWY9XCJjb2x1bW4uZmlsdGVyXCI+e3sgbGFiZWxzLmNsZWFyIH19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbSBbbmdDbGFzc109XCJ7IGFjdGl2ZTogaXNGaWx0ZXJBY3RpdmUoY29sdW1uLCBvcHRpb24pIH1cIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbHVtbi5vcHRpb25zXCIgKGNsaWNrKT1cIm9uRmlsdGVyQ2xpY2soY29sdW1uLCBvcHRpb24pXCIgW2tlZXBPcGVuXT1cIm9wdGlvbi5yYW5nZVwiIFtoaWRkZW5dPVwiY29sdW1uLmNhbGVuZGVyU2hvd1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCIob3B0aW9uPy5sYWJlbCB8fCBvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uIH19IDxpIGNsYXNzPVwiYmhpLWNoZWNrXCIgKm5nSWY9XCJpc0ZpbHRlckFjdGl2ZShjb2x1bW4sIG9wdGlvbilcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1jb250YWluZXJcIiBbaGlkZGVuXT1cIiFjb2x1bW4uY2FsZW5kZXJTaG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKGNsaWNrKT1cImNvbHVtbi5jYWxlbmRlclNob3c9ZmFsc2VcIj48aSBjbGFzcz1cImJoaS1wcmV2aW91c1wiPjwvaT57eyBsYWJlbHMuYmFja1RvUHJlc2V0RmlsdGVycyB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bm92by1kYXRlLXBpY2tlciAjcmFuZ2VQaWNrZXIgKG9uU2VsZWN0KT1cIm9uQ2FsZW5kZXJTZWxlY3QoY29sdW1uLCAkZXZlbnQpXCIgWyhuZ01vZGVsKV09XCJjb2x1bW4uZmlsdGVyXCIgcmFuZ2U9XCJ0cnVlXCI+PC9ub3ZvLWRhdGUtcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25vdm8tZHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPCEtLSBUQUJMRSBEQVRBIC0tPlxuICAgICAgICAgICAgICAgIDx0Ym9keSAqbmdJZj1cIiFkYXRhUHJvdmlkZXIuaXNFbXB0eSgpIHx8IGVkaXRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidGFibGUtc2VsZWN0aW9uLXJvd1wiICpuZ0lmPVwiY29uZmlnLnJvd1NlbGVjdGlvblN0eWxlID09PSAnY2hlY2tib3gnICYmIHNob3dTZWxlY3RBbGxNZXNzYWdlICYmIGNvbmZpZy5zZWxlY3RBbGxFbmFibGVkXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwidGFibGUtc2VsZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsYWJlbHMuc2VsZWN0ZWRSZWNvcmRzKHNlbGVjdGVkLmxlbmd0aCl9fSA8YSAoY2xpY2spPVwic2VsZWN0QWxsKHRydWUpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiYWxsLW1hdGNoaW5nLXJlY29yZHNcIj57e2xhYmVscy50b3RhbFJlY29yZHMoZGF0YVByb3ZpZGVyLnRvdGFsKX19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1yb3c9XCIkaW1wbGljaXRcIiBsZXQtaT1cImluZGV4XCIgW25nRm9yT2ZdPVwicm93c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidGFibGUtcm93XCIgW25nQ2xhc3NdPVwicm93LmN1c3RvbUNsYXNzIHx8ICcnXCIgW2lkXT1cIm5hbWUgKyAnLScgKyByb3dbcm93SWRlbnRpZmllcl1cIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwicm93LmlkXCIgKGNsaWNrKT1cInJvd0NsaWNrSGFuZGxlcihyb3cpXCIgW2NsYXNzLmFjdGl2ZV09XCJyb3cuaWQgPT09IGFjdGl2ZUlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicm93LWFjdGlvbnNcIiAqbmdJZj1cImNvbmZpZy5oYXNEZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgaWNvbj1cIm5leHRcIiAoY2xpY2spPVwicm93Ll9leHBhbmRlZD0hcm93Ll9leHBhbmRlZFwiICpuZ0lmPVwiIXJvdy5fZXhwYW5kZWRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwic29ydC1kZXNjXCIgKGNsaWNrKT1cInJvdy5fZXhwYW5kZWQ9IXJvdy5fZXhwYW5kZWRcIiAqbmdJZj1cInJvdy5fZXhwYW5kZWRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJvdy1hY3Rpb25zIGNoZWNrYm94XCIgKm5nSWY9XCJjb25maWcucm93U2VsZWN0aW9uU3R5bGUgPT09ICdjaGVja2JveCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tY2hlY2tib3ggWyhuZ01vZGVsKV09XCJyb3cuX3NlbGVjdGVkXCIgKG5nTW9kZWxDaGFuZ2UpPVwicm93U2VsZWN0SGFuZGxlcihyb3cpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwic2VsZWN0LXJvdy1jaGVja2JveFwiPjwvbm92by1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY29sdW1uLmlkIHx8IGNvbHVtbi5uYW1lXCIgW2NsYXNzLm5vdm8tZm9ybS1yb3ddPVwiZWRpdGFibGVcIiBbaGlkZGVuXT1cImlzQ29sdW1uSGlkZGVuKGNvbHVtbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tdGFibGUtY2VsbCAqbmdJZj1cInJvdy5fZWRpdGluZyAmJiAhcm93Ll9lZGl0aW5nW2NvbHVtbi5uYW1lXVwiIFtoYXNFZGl0b3JdPVwiZWRpdGFibGVcIiBbY29sdW1uXT1cImNvbHVtblwiIFtyb3ddPVwicm93XCIgW2Zvcm1dPVwiZ2V0Um93Q29udHJvbEZvcm0oaSlcIj48L25vdm8tdGFibGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tY29udHJvbCAqbmdJZj1cInJvdy5fZWRpdGluZyAmJiByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdXCIgY29uZGVuc2VkPVwidHJ1ZVwiIFtmb3JtXT1cImdldFJvd0NvbnRyb2xGb3JtKGkpXCIgW2NvbnRyb2xdPVwicm93LmNvbnRyb2xzW2NvbHVtbi5uYW1lXVwiPjwvbm92by1jb250cm9sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwiZGV0YWlscy1yb3dcIiAqbmdJZj1cImNvbmZpZy5oYXNEZXRhaWxzXCIgW2hpZGRlbl09XCIhcm93Ll9leHBhbmRlZFwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZGV0YWlscy1yb3ctJytyb3cuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyb3ctYWN0aW9uc1wiPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIFthdHRyLmNvbHNwYW5dPVwiY29uZmlnLnJvd1NlbGVjdGlvblN0eWxlID09PSAnY2hlY2tib3gnID8gKGNvbHVtbnMubGVuZ3RoICsgMSkgOiBjb2x1bW5zLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bm92by1yb3ctZGV0YWlscyBbZGF0YV09XCJyb3dcIiBbcmVuZGVyZXJdPVwiY29uZmlnLmRldGFpbHNSZW5kZXJlclwiPjwvbm92by1yb3ctZGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwhLS0gTk8gVEFCTEUgREFUQSBQTEFDRUhPTERFUiAtLT5cbiAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3M9XCJ0YWJsZS1tZXNzYWdlXCIgKm5nSWY9XCJkYXRhUHJvdmlkZXIuaXNFbXB0eSgpICYmICFkYXRhUHJvdmlkZXIuaXNGaWx0ZXJlZCgpICYmICFlZGl0aW5nXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiZW1wdHktdGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAjZW1wdHltZXNzYWdlPjxuZy1jb250ZW50IHNlbGVjdD1cIlt0YWJsZS1lbXB0eS1tZXNzYWdlXVwiPjwvbmctY29udGVudD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtZW1wdHktbWVzc2FnZVwiICpuZ0lmPVwiZW1wdHltZXNzYWdlLmNoaWxkTm9kZXMubGVuZ3RoID09IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpIGNsYXNzPVwiYmhpLXNlYXJjaC1xdWVzdGlvblwiPjwvaT4ge3sgbGFiZWxzLmVtcHR5VGFibGVNZXNzYWdlIH19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8IS0tIE5PIE1BVENISU5HIFJFQ09SRFMgLS0+XG4gICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzPVwidGFibGUtbWVzc2FnZVwiICpuZ0lmPVwiZGF0YVByb3ZpZGVyLmlzRW1wdHkoKSAmJiBkYXRhUHJvdmlkZXIuaXNGaWx0ZXJlZCgpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiZW1wdHktdGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAjbm9tYXRjaG1lc3NhZ2U+PG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RhYmxlLW5vLW1hdGNoaW5nLXJlY29yZHMtbWVzc2FnZV1cIj48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vLW1hdGNoaW5nLXJlY29yZHNcIiAqbmdJZj1cIm5vbWF0Y2htZXNzYWdlLmNoaWxkTm9kZXMubGVuZ3RoID09IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpIGNsYXNzPVwiYmhpLXNlYXJjaC1xdWVzdGlvblwiPjwvaT4ge3sgbGFiZWxzLm5vTWF0Y2hpbmdSZWNvcmRzTWVzc2FnZSB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPCEtLSBUQUJMRSBEQVRBIEVSUk9SIFBMQUNFSE9MREVSIC0tPlxuICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cInRhYmxlLW1lc3NhZ2VcIiAqbmdJZj1cImRhdGFQcm92aWRlci5oYXNFcnJvcnMoKVwiIGRhdGEtYXV0b21hdGlvbi1pZD1cInRhYmxlLWVycm9yc1wiPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICNlcnJvcm1lc3NhZ2U+PG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RhYmxlLWVycm9yLW1lc3NhZ2VdXCI+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1lcnJvci1tZXNzYWdlXCIgKm5nSWY9XCJlcnJvcm1lc3NhZ2UuY2hpbGROb2Rlcy5sZW5ndGggPT0gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PGkgY2xhc3M9XCJiaGktY2F1dGlvblwiPjwvaT4ge3sgbGFiZWxzLmVycm9yZWRUYWJsZU1lc3NhZ2UgfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDx0Zm9vdCAqbmdJZj1cIiFjb25maWcuZm9vdGVyc1wiIFtuZ0NsYXNzXT1cImRhdGFQcm92aWRlci5sZW5ndGggJSAyID09IDAgPyAnb2RkJyA6ICdldmVuJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJub3ZvLXRhYmxlLWZvb3RlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Zm9vdD5cbiAgICAgICAgICAgICAgICA8dGZvb3QgKm5nRm9yPVwibGV0IGZvb3RlciBvZiBmb290ZXJzO2xldCBpID0gaW5kZXg7XCIgY2xhc3M9XCJub3ZvLXRhYmxlLXRvdGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIihjb2x1bW4uaWQgfHwgY29sdW1uLm5hbWUpICsgJy10b3RhbC0nICsgaVwiPnt7IGZvb3Rlcltjb2x1bW4ubmFtZV0gfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGZvb3Q+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L25vdm8tZm9ybT5cbiAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGFibGVFbGVtZW50IGltcGxlbWVudHMgRG9DaGVjayB7XG4gIEBWaWV3Q2hpbGRyZW4oJ2ZpbHRlcklucHV0JywgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIGZpbHRlcklucHV0czogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gIEBJbnB1dCgpXG4gIGNvbmZpZzogTm92b1RhYmxlQ29uZmlnID0ge307XG4gIEBJbnB1dCgpXG4gIGNvbHVtbnM6IEFycmF5PGFueT47XG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNraXBTb3J0QW5kRmlsdGVyQ2xlYXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgbW9kZTogTm92b1RhYmxlTW9kZSA9IE5vdm9UYWJsZU1vZGUuVklFVztcbiAgQElucHV0KClcbiAgZWRpdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgcm93SWRlbnRpZmllcjogc3RyaW5nID0gJ2lkJztcbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nID0gJ3RhYmxlJztcblxuICBAT3V0cHV0KClcbiAgb25Sb3dDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBvblJvd1NlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBvblRhYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBfZGF0YVByb3ZpZGVyOiBQYWdlZEFycmF5Q29sbGVjdGlvbjxhbnk+O1xuICBfcm93czogQXJyYXk8YW55PiA9IFtdO1xuICBzZWxlY3RlZDogQXJyYXk8YW55PiA9IFtdO1xuICBhY3RpdmVJZDogbnVtYmVyID0gMDtcbiAgbWFzdGVyOiBib29sZWFuID0gZmFsc2U7XG4gIGV4cGFuZEFsbDogYm9vbGVhbiA9IGZhbHNlO1xuICBpbmRldGVybWluYXRlOiBib29sZWFuID0gZmFsc2U7XG4gIGxhc3RQYWdlOiBudW1iZXIgPSAwO1xuICBzZWxlY3RlZFBhZ2VDb3VudDogbnVtYmVyID0gMDtcbiAgc2hvd1NlbGVjdEFsbE1lc3NhZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY3VycmVudFNvcnRDb2x1bW46IGFueTtcbiAgcGFnZWREYXRhOiBBcnJheTxhbnk+ID0gW107XG4gIHBhZ2VTZWxlY3RlZDogYW55O1xuICAvLyBNYXAgdG8ga2VlcCB0cmFjayBvZiB3aGF0IGRyb3Bkb3ducyBhcmUgdG9nZ2xlZFxuICAvLyBVc2VkIHRvIHByb3Blcmx5ICpuZ0lmIHRoZSA8bGlzdD4gc28gdGhhdCB0aGUga2VlcEZpbHRlckZvY3VzZWQgRGlyZWN0aXZlXG4gIC8vIHdpbGwgcHJvcGVybHkgZmlyZSB0aGUgbmdBZnRlclZpZXdJbml0IGV2ZW50XG4gIHRvZ2dsZWREcm9wZG93bk1hcDogYW55ID0ge307XG4gIHB1YmxpYyBOb3ZvVGFibGVNb2RlID0gTm92b1RhYmxlTW9kZTtcbiAgcHVibGljIHRhYmxlRm9ybTogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7fSk7XG4gIHB1YmxpYyB0b2FzdDogeyB0aGVtZTogc3RyaW5nOyBpY29uOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9O1xuICBwdWJsaWMgZm9vdGVycyA9IFtdO1xuICBwdWJsaWMgZ3Jvc3NGbGFnVG9Bdm9pZFRoZVRhYmxlRnJvbUJlaW5nVWdseVdoZW5IaWRpbmdUaGVUb2FzdDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCByb3dzKHJvd3M6IEFycmF5PGFueT4pIHtcbiAgICB0aGlzLmRhdGFQcm92aWRlciA9IHJvd3M7XG4gICAgaWYgKHJvd3MgJiYgcm93cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldHVwQ29sdW1uRGVmYXVsdHMoKTtcbiAgICB9XG4gICAgLy8gdGhpcyBpcyBhIHRlbXBvcmFyeS9oYWNreSBmaXggdW50aWwgYXN5bmMgZGF0YWxvYWRpbmcgaXMgaGFuZGxlZCB3aXRoaW4gdGhlIHRhYmxlXG4gICAgaWYgKCF0aGlzLnNraXBTb3J0QW5kRmlsdGVyQ2xlYXIpIHtcbiAgICAgIHRoaXMuY2xlYXJBbGxTb3J0QW5kRmlsdGVycygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCByb3dzKCkge1xuICAgIHJldHVybiB0aGlzLl9yb3dzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRhdGFQcm92aWRlcihkcDogYW55KSB7XG4gICAgdGhpcy5fZGF0YVByb3ZpZGVyID0gQXJyYXkuaXNBcnJheShkcCkgPyBuZXcgUGFnZWRBcnJheUNvbGxlY3Rpb248YW55PihkcCkgOiBkcDtcbiAgICB0aGlzLl9kYXRhUHJvdmlkZXIuZGF0YUNoYW5nZS5waXBlKGRlYm91bmNlVGltZSgxMDApKS5zdWJzY3JpYmUoKGV2ZW50OiBDb2xsZWN0aW9uRXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICBjYXNlIENvbGxlY3Rpb25FdmVudC5DSEFOR0U6XG4gICAgICAgICAgdGhpcy5fcm93cyA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgLy8gU2V0dXAgZm9ybVxuICAgICAgICAgIHRoaXMudGFibGVGb3JtID0gdGhpcy5idWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIHJvd3M6IHRoaXMuYnVpbGRlci5hcnJheShbXSksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gUmVtb3ZlIGFsbCBzZWxlY3Rpb24gb24gc29ydCBjaGFuZ2UgaWYgc2VsZWN0aW9uIGlzIG9uXG4gICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJvd1NlbGVjdGlvblN0eWxlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VkRGF0YSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICB0aGlzLnBhZ2VTZWxlY3RlZCA9IHRoaXMucGFnZWREYXRhLmZpbHRlcigocikgPT4gci5fc2VsZWN0ZWQpO1xuICAgICAgICAgICAgdGhpcy5yb3dTZWxlY3RIYW5kbGVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEZpbmQgdGhhdCBjb2x1bW5zIHdlIG1pZ2h0IG5lZWQgdG8gc3VtIHVwIHZpYSB0aGUgZm9vdGVyXG4gICAgICAgICAgbGV0IGNvbHVtbnNUb1N1bSA9IFtdO1xuICAgICAgICAgIGNvbnN0IGNvbHVtblN1bXMgPSB7fTtcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcuZm9vdGVycykge1xuICAgICAgICAgICAgdGhpcy5jb25maWcuZm9vdGVycy5mb3JFYWNoKChjb25maWcpID0+IHtcbiAgICAgICAgICAgICAgY29sdW1uc1RvU3VtLnB1c2goLi4uY29uZmlnLmNvbHVtbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBPbmx5IGhhdmUgdW5pcXVlIGNvbHVtbnMsIGZpbHRlciBvdXQgZHVwbGljYXRlc1xuICAgICAgICAgICAgY29sdW1uc1RvU3VtID0gY29sdW1uc1RvU3VtLmZpbHRlcigoaXRlbSwgaW5kZXgsIGFycmF5KSA9PiBhcnJheS5pbmRleE9mKGl0ZW0pID09PSBpbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIE1ha2UgYSBmb3JtIGZvciBlYWNoIHJvd1xuICAgICAgICAgIGNvbnN0IHRhYmxlRm9ybVJvd3MgPSA8Rm9ybUFycmF5PnRoaXMudGFibGVGb3JtLmNvbnRyb2xzWydyb3dzJ107XG4gICAgICAgICAgdGhpcy5fcm93cy5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250cm9scyA9IFtdO1xuICAgICAgICAgICAgcm93LmNvbnRyb2xzID0ge307XG4gICAgICAgICAgICByb3cuX2VkaXRpbmcgPSB7fTtcbiAgICAgICAgICAgIHJvdy5fZXhwYW5kZWQgPSB0aGlzLmNvbmZpZy5leHBhbmRBbGw7XG4gICAgICAgICAgICByb3cucm93SWQgPSB0aGlzLl9yb3dzLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgICAgICAgLy8gVXNlIHRoZSBjb250cm9sIHBhc3NlZCBvciB1c2UgYSBSZWFkT25seUNvbnRyb2wgc28gdGhhdCB0aGUgZm9ybSBoYXMgdGhlIHZhbHVlc1xuICAgICAgICAgICAgICBjb25zdCBjb250cm9sID0gY29sdW1uLmVkaXRvckNvbmZpZ1xuICAgICAgICAgICAgICAgID8gQ29udHJvbEZhY3RvcnkuY3JlYXRlKGNvbHVtbi5lZGl0b3JUeXBlLCBjb2x1bW4uZWRpdG9yQ29uZmlnKVxuICAgICAgICAgICAgICAgIDogbmV3IFJlYWRPbmx5Q29udHJvbCh7IGtleTogY29sdW1uLm5hbWUgfSk7XG4gICAgICAgICAgICAgIHJvdy5jb250cm9sc1tjb2x1bW4ubmFtZV0gPSBjb250cm9sO1xuICAgICAgICAgICAgICByb3dDb250cm9scy5wdXNoKGNvbnRyb2wpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmZvcm1VdGlscy5zZXRJbml0aWFsVmFsdWVzKHJvd0NvbnRyb2xzLCByb3csIGZhbHNlKTtcbiAgICAgICAgICAgIHRhYmxlRm9ybVJvd3MucHVzaCh0aGlzLmZvcm1VdGlscy50b0Zvcm1Hcm91cChyb3dDb250cm9scykpO1xuICAgICAgICAgICAgLy8gU2V0dXAgdGhlIHRvdGFsIGZvb3RlciBpZiBjb25maWd1cmVkXG4gICAgICAgICAgICAvLyBBcnJheSBvZiBrZXlzIHRvIHRvdGFsXG4gICAgICAgICAgICBpZiAoY29sdW1uc1RvU3VtLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICBjb2x1bW5zVG9TdW0uZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEhlbHBlcnMuaXNCbGFuayhjb2x1bW5TdW1zW2NvbHVtbl0pKSB7XG4gICAgICAgICAgICAgICAgICBjb2x1bW5TdW1zW2NvbHVtbl0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb2x1bW5TdW1zW2NvbHVtbl0gKz0gcm93W2NvbHVtbl07XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICh0aGlzLm1vZGUgPT09IE5vdm9UYWJsZU1vZGUuRURJVCkge1xuICAgICAgICAgICAgdGhpcy5zZXRUYWJsZUVkaXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gU2V0dXAgdGhlIGZvb3RlcnMgKGlmIGFueSlcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcuZm9vdGVycykge1xuICAgICAgICAgICAgdGhpcy5mb290ZXJzID0gW107XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5mb290ZXJzLmZvckVhY2goKGZvb3RlckNvbmZpZywgZm9vdGVyQ29uZmlnSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZm9vdGVyID0ge307XG4gICAgICAgICAgICAgIGZvb3Rlcltmb290ZXJDb25maWcubGFiZWxDb2x1bW5dID0gZm9vdGVyQ29uZmlnLmxhYmVsO1xuICAgICAgICAgICAgICBmb290ZXJDb25maWcuY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZm9vdGVyQ29uZmlnLm1ldGhvZCA9PT0gJ0FWRycgJiYgdGhpcy5fcm93cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgIGZvb3Rlcltjb2x1bW5dID0gY29sdW1uU3Vtc1tjb2x1bW5dIC8gdGhpcy5fcm93cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGZvb3Rlcltjb2x1bW5dID0gY29sdW1uU3Vtc1tjb2x1bW5dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHRoaXMuZm9vdGVycy5wdXNoKGZvb3Rlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuY29uZmlnLnBhZ2luZykge1xuICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLnBhZ2UgPSB0aGlzLmNvbmZpZy5wYWdpbmcuY3VycmVudDtcbiAgICAgIHRoaXMuX2RhdGFQcm92aWRlci5wYWdlU2l6ZSA9IHRoaXMuY29uZmlnLnBhZ2luZy5pdGVtc1BlclBhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFBhZ2luZyB0dXJuZWQgb2ZmLCByZXR1cm4gYmFzaWNhbGx5IGFsbCBvZiB0aGUgZGF0YVxuICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLnBhZ2UgPSAxO1xuICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLnBhZ2VTaXplID0gNTAwO1xuICAgIH1cbiAgICBpZiAoZHAgJiYgZHAubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXR1cENvbHVtbkRlZmF1bHRzKCk7XG4gICAgfVxuICAgIHRoaXMuX2RhdGFQcm92aWRlci5yZWZyZXNoKCk7XG4gIH1cbiAgZ2V0IGRhdGFQcm92aWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVByb3ZpZGVyO1xuICB9XG5cbiAgZ2V0IGVkaXRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gTm92b1RhYmxlTW9kZS5FRElUO1xuICB9XG5cbiAgZ2V0IGZvcm1WYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy50YWJsZUZvcm0udmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIGZvcm1VdGlsczogRm9ybVV0aWxzLCBwcml2YXRlIGJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG4gICAgbm90aWZ5KCdbRGVwcmVjYXRlZF06IFRoZSB0YWJsZSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgbWlncmF0ZSB0byBub3ZvLWRhdGEtdGFibGVzIScpO1xuICB9XG5cbiAgb25Ecm9wZG93blRvZ2dsZWQoZXZlbnQsIGNvbHVtbik6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlZERyb3Bkb3duTWFwW2NvbHVtbl0gPSBldmVudDtcbiAgfVxuXG4gIGZvY3VzSW5wdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmlsdGVySW5wdXRzICYmIHRoaXMuZmlsdGVySW5wdXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5maWx0ZXJJbnB1dHMuZm9yRWFjaCgoZmlsdGVySW5wdXQpID0+IHtcbiAgICAgICAgaWYgKGZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSwgMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uUGFnZUNoYW5nZShldmVudCkge1xuICAgIC8vIHRoaXMuZGF0YVByb3ZpZGVyLnBhZ2UgPSBldmVudC5wYWdlO1xuICAgIC8vIHRoaXMuZGF0YVByb3ZpZGVyLnBhZ2VTaXplID0gZXZlbnQuaXRlbXNQZXJQYWdlO1xuICB9XG5cbiAgZ2V0T3B0aW9uRGF0YUF1dG9tYXRpb25JZChvcHRpb24pIHtcbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayhvcHRpb24udmFsdWUpKSB7XG4gICAgICByZXR1cm4gb3B0aW9uLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uO1xuICB9XG5cbiAgc2V0dXBDb2x1bW5EZWZhdWx0cygpIHtcbiAgICAvLyBDaGVjayBjb2x1bW5zIGZvciBjZWxsIG9wdGlvbiB0eXBlc1xuICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgIGlmIChjb2x1bW4gJiYgY29sdW1uLnR5cGUpIHtcbiAgICAgICAgc3dpdGNoIChjb2x1bW4udHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgICAgLy8gU2V0IG9wdGlvbnMgYmFzZWQgb24gZGF0ZXMgaWYgdGhlcmUgYXJlIG5vbmVcbiAgICAgICAgICAgIGNvbHVtbi5vcHRpb25zID0gY29sdW1uLm9wdGlvbnMgfHwgdGhpcy5nZXREZWZhdWx0T3B0aW9ucyhjb2x1bW4pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnBhZ2luZyAmJiB0aGlzLmNvbmZpZy5wYWdpbmcuY3VycmVudCAhPT0gdGhpcy5sYXN0UGFnZSkge1xuICAgICAgdGhpcy5yb3dTZWxlY3RIYW5kbGVyKCk7XG4gICAgICB0aGlzLnNob3dTZWxlY3RBbGxNZXNzYWdlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMubGFzdFBhZ2UgPSB0aGlzLmNvbmZpZy5wYWdpbmcgPyB0aGlzLmNvbmZpZy5wYWdpbmcuY3VycmVudCA6IDE7XG4gIH1cblxuICBnZXRQYWdlU3RhcnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcucGFnaW5nID8gKHRoaXMuZGF0YVByb3ZpZGVyLnBhZ2UgLSAxKSAqIHRoaXMuZGF0YVByb3ZpZGVyLnBhZ2VTaXplIDogMDtcbiAgfVxuXG4gIGdldFBhZ2VFbmQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcucGFnaW5nICYmIHRoaXMuZGF0YVByb3ZpZGVyLnBhZ2VTaXplID4gLTEgPyB0aGlzLmdldFBhZ2VTdGFydCgpICsgdGhpcy5kYXRhUHJvdmlkZXIucGFnZVNpemUgOiB0aGlzLnJvd3MubGVuZ3RoO1xuICB9XG5cbiAgZ2V0Um93Q29udHJvbEZvcm0oaSk6IEFic3RyYWN0Q29udHJvbCB7XG4gICAgY29uc3QgdGFibGVGb3JtUm93cyA9IDxGb3JtQXJyYXk+dGhpcy50YWJsZUZvcm0uY29udHJvbHNbJ3Jvd3MnXTtcbiAgICByZXR1cm4gdGFibGVGb3JtUm93cy5jb250cm9sc1tpXTtcbiAgfVxuXG4gIG9uRmlsdGVyQ2xpY2soY29sdW1uLCBmaWx0ZXIpIHtcbiAgICBpZiAoZmlsdGVyLnJhbmdlICYmICFjb2x1bW4uY2FsZW5kYXJTaG93KSB7XG4gICAgICBjb2x1bW4uY2FsZW5kZXJTaG93ID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29sdW1uLmZpbHRlcikgJiYgY29sdW1uLm11bHRpcGxlKSB7XG4gICAgICBpZiAofmNvbHVtbi5maWx0ZXIuaW5kZXhPZihmaWx0ZXIpKSB7XG4gICAgICAgIC8vIFJlbW92ZSBmaWx0ZXJcbiAgICAgICAgY29sdW1uLmZpbHRlci5zcGxpY2UoY29sdW1uLmZpbHRlci5pbmRleE9mKGZpbHRlciksIDEpO1xuICAgICAgICBpZiAoZmlsdGVyLnJhbmdlKSB7XG4gICAgICAgICAgY29sdW1uLmNhbGVuZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29sdW1uLmZpbHRlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFkZCBmaWx0ZXJcbiAgICAgICAgY29sdW1uLmZpbHRlci5wdXNoKGZpbHRlcik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb2x1bW4ubXVsdGlwbGUpIHtcbiAgICAgIGNvbHVtbi5maWx0ZXIgPSBuZXcgQXJyYXkoKTtcbiAgICAgIGNvbHVtbi5maWx0ZXIucHVzaChIZWxwZXJzLmlzQmxhbmsoZmlsdGVyLnZhbHVlKSA/IGZpbHRlciA6IGZpbHRlci52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbHVtbi5maWx0ZXIgPSBIZWxwZXJzLmlzQmxhbmsoZmlsdGVyLnZhbHVlKSA/IGZpbHRlciA6IGZpbHRlci52YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5vbkZpbHRlckNoYW5nZSgpO1xuICB9XG5cbiAgb25GaWx0ZXJDbGVhcihjb2x1bW46IGFueSk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29sdW1uLmZpbHRlciA9IG51bGw7XG4gICAgICBjb2x1bW4uZnJlZXRleHRGaWx0ZXIgPSBudWxsO1xuICAgICAgdGhpcy5vbkZpbHRlckNoYW5nZSgpO1xuICAgICAgaWYgKGNvbHVtbi5vcmlnaW5hbE9wdGlvbnMpIHtcbiAgICAgICAgY29sdW1uLm9wdGlvbnMgPSBjb2x1bW4ub3JpZ2luYWxPcHRpb25zO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xlYXJBbGxTb3J0QW5kRmlsdGVycygpIHtcbiAgICBpZiAodGhpcy5jb25maWcuZmlsdGVyaW5nKSB7XG4gICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIGNvbHVtbi5maWx0ZXIgPSBudWxsO1xuICAgICAgICBjb2x1bW4uc29ydCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgbWV0aG9kIHVwZGF0ZXMgdGhlIHJvdyBkYXRhIHRvIHJlZmxlY3QgdGhlIGFjdGl2ZSBmaWx0ZXJzLlxuICAgKi9cbiAgb25GaWx0ZXJDaGFuZ2UoZXZlbnQ/OiBFdmVudCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXJpbmcpIHtcbiAgICAgIC8vIEFycmF5IG9mIGZpbHRlcnNcbiAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2wpID0+ICFIZWxwZXJzLmlzRW1wdHkoY29sLmZpbHRlcikpO1xuICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBxdWVyeSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBmaWx0ZXJzKSB7XG4gICAgICAgICAgaWYgKEhlbHBlcnMuaXNGdW5jdGlvbihjb2x1bW4ubWF0Y2gpKSB7XG4gICAgICAgICAgICBxdWVyeVtjb2x1bW4ubmFtZV0gPSAodmFsdWUsIHJlY29yZCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gY29sdW1uLm1hdGNoKHJlY29yZCwgY29sdW1uLmZpbHRlcik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29sdW1uLnByZUZpbHRlciAmJiBIZWxwZXJzLmlzRnVuY3Rpb24oY29sdW1uLnByZUZpbHRlcikpIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gT2JqZWN0LmFzc2lnbih7fSwgcXVlcnksIGNvbHVtbi5wcmVGaWx0ZXIodGhpcy5lc2NhcGVDaGFyYWN0ZXJzKGNvbHVtbi5maWx0ZXIpKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbHVtbi5maWx0ZXIpKSB7XG4gICAgICAgICAgICAvLyBUaGUgZmlsdGVycyBhcmUgYW4gYXJyYXkgKG11bHRpLXNlbGVjdCksIGNoZWNrIHZhbHVlXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IGNvbHVtbi5maWx0ZXI7XG4gICAgICAgICAgICAvLyBXZSBoYXZlIGFuIGFycmF5IG9mIHt2YWx1ZTogJycsIGxhYmVsczogJyd9XG4gICAgICAgICAgICBpZiAob3B0aW9uc1swXS52YWx1ZSB8fCBvcHRpb25zWzBdLmxhYmVsKSB7XG4gICAgICAgICAgICAgIG9wdGlvbnMgPSBjb2x1bW4uZmlsdGVyLm1hcCgob3B0KSA9PiBvcHQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVlcnlbY29sdW1uLm5hbWVdID0geyBhbnk6IG9wdGlvbnMgfTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbi50eXBlICYmIGNvbHVtbi50eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgIGlmIChjb2x1bW4uZmlsdGVyLnN0YXJ0RGF0ZSAmJiBjb2x1bW4uZmlsdGVyLmVuZERhdGUpIHtcbiAgICAgICAgICAgICAgcXVlcnlbY29sdW1uLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgIG1pbjogZGF0ZUZucy5zdGFydE9mRGF5KGNvbHVtbi5maWx0ZXIuc3RhcnREYXRlKSxcbiAgICAgICAgICAgICAgICBtYXg6IGRhdGVGbnMuc3RhcnRPZkRheShkYXRlRm5zLmFkZERheXMoZGF0ZUZucy5zdGFydE9mRGF5KGNvbHVtbi5maWx0ZXIuZW5kRGF0ZSksIDEpKSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHF1ZXJ5W2NvbHVtbi5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBtaW46IGNvbHVtbi5maWx0ZXIubWluID8gZGF0ZUZucy5hZGREYXlzKGRhdGVGbnMuc3RhcnRPZlRvZGF5KCksIGNvbHVtbi5maWx0ZXIubWluKSA6IGRhdGVGbnMuc3RhcnRPZlRvZGF5KCksXG4gICAgICAgICAgICAgICAgbWF4OiBjb2x1bW4uZmlsdGVyLm1heCA/IGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZUb21vcnJvdygpLCBjb2x1bW4uZmlsdGVyLm1heCkgOiBkYXRlRm5zLnN0YXJ0T2ZUb21vcnJvdygpLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeVtjb2x1bW4ubmFtZV0gPSBjb2x1bW4uZmlsdGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoSGVscGVycy5pc0Z1bmN0aW9uKHRoaXMuY29uZmlnLmZpbHRlcmluZykpIHtcbiAgICAgICAgICB0aGlzLmNvbmZpZy5maWx0ZXJpbmcocXVlcnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2RhdGFQcm92aWRlci5maWx0ZXIgPSBxdWVyeTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLmZpbHRlciA9IHt9O1xuICAgICAgfVxuICAgICAgLy8gVHJpY2tsZSBkb3duIHRvIGtlZXAgc29ydFxuICAgICAgLy8gdGhpcy5vblNvcnRDaGFuZ2UodGhpcy5jdXJyZW50U29ydENvbHVtbik7XG4gICAgICB0aGlzLmZpcmVUYWJsZUNoYW5nZUV2ZW50KCk7XG5cbiAgICAgIC8vIElmIHBhZ2luZywgcmVzZXQgcGFnZVxuICAgICAgaWYgKHRoaXMuY29uZmlnLnBhZ2luZykge1xuICAgICAgICB0aGlzLmNvbmZpZy5wYWdpbmcuY3VycmVudCA9IDE7XG4gICAgICB9XG4gICAgICAvLyBSZW1vdmUgYWxsIHNlbGVjdGlvbiBvbiBzb3J0IGNoYW5nZSBpZiBzZWxlY3Rpb24gaXMgb25cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3dTZWxlY3Rpb25TdHlsZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICB0aGlzLnNlbGVjdEFsbChmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXNjYXBlQ2hhcmFjdGVycyhmaWx0ZXIpIHtcbiAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBmaWx0ZXIucmVwbGFjZSgvJy9nLCAnXFwnXFwnJyk7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXI7XG4gIH1cblxuICBpc0ZpbHRlckFjdGl2ZShjb2x1bW4sIGZpbHRlcik6IGJvb2xlYW4ge1xuICAgIC8vIFRPRE86IFRoaXMgbmVlZHMgdG8gYmUgcmVmYWN0b3JlZFxuICAgIGxldCBpc0FjdGl2ZSA9IGZhbHNlO1xuICAgIGlmIChjb2x1bW4gJiYgIUhlbHBlcnMuaXNCbGFuayhjb2x1bW4uZmlsdGVyKSAmJiAhSGVscGVycy5pc0JsYW5rKGZpbHRlcikpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbHVtbi5maWx0ZXIpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsdGVyICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlzQWN0aXZlID0gY29sdW1uLmZpbHRlci5zb21lKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5sYWJlbCA9PT0gZmlsdGVyLmxhYmVsO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlzQWN0aXZlID0gY29sdW1uLmZpbHRlci5pbmNsdWRlcyhmaWx0ZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIGNvbHVtbi5maWx0ZXIgPT09IHR5cGVvZiBmaWx0ZXIpIHtcbiAgICAgICAgICBpc0FjdGl2ZSA9IGNvbHVtbi5maWx0ZXIgPT09IGZpbHRlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc0FjdGl2ZSA9IGNvbHVtbi5maWx0ZXIgPT09IGZpbHRlci52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNBY3RpdmU7XG4gIH1cblxuICBvblNvcnRDaGFuZ2UoY29sdW1uKSB7XG4gICAgdGhpcy5jdXJyZW50U29ydENvbHVtbiA9IGNvbHVtbjtcbiAgICBjb25zdCBzb3J0ZWRDb2x1bW5zOiBhbnkgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKCh0aGlzQ29sdW1uKSA9PiB7XG4gICAgICByZXR1cm4gdGhpc0NvbHVtbi5zb3J0ICYmIHRoaXNDb2x1bW4gIT09IHRoaXMuY3VycmVudFNvcnRDb2x1bW47XG4gICAgfSk7XG4gICAgZm9yIChjb25zdCBzb3J0ZWRDb2x1bW4gb2Ygc29ydGVkQ29sdW1ucykge1xuICAgICAgc29ydGVkQ29sdW1uLnNvcnQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChjb2x1bW4pIHtcbiAgICAgIGlmIChIZWxwZXJzLmlzRnVuY3Rpb24odGhpcy5jb25maWcuc29ydGluZykpIHtcbiAgICAgICAgdGhpcy5jb25maWcuc29ydGluZygpO1xuICAgICAgfSBlbHNlIGlmIChIZWxwZXJzLmlzRnVuY3Rpb24oY29sdW1uLnByZVNvcnQpKSB7XG4gICAgICAgIHRoaXMuX2RhdGFQcm92aWRlci5zb3J0ID0gW10uY29uY2F0KGNvbHVtbi5wcmVTb3J0KGNvbHVtbikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLnNvcnQgPSBbeyBmaWVsZDogY29sdW1uLmNvbXBhcmUgfHwgY29sdW1uLm5hbWUsIHJldmVyc2U6IGNvbHVtbi5zb3J0ID09PSAnZGVzYycgfV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRmlyZSB0YWJsZSBjaGFuZ2UgZXZlbnRcbiAgICAvLyB0aGlzLmZpcmVUYWJsZUNoYW5nZUV2ZW50KCk7XG5cbiAgICAvLyBJZiBwYWdpbmcsIHJlc2V0IHBhZ2VcbiAgICBpZiAodGhpcy5jb25maWcucGFnaW5nKSB7XG4gICAgICB0aGlzLmNvbmZpZy5wYWdpbmcuY3VycmVudCA9IDE7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBzZWxlY3Rpb24gb24gc29ydCBjaGFuZ2UgaWYgc2VsZWN0aW9uIGlzIG9uXG4gICAgaWYgKHRoaXMuY29uZmlnLnJvd1NlbGVjdGlvblN0eWxlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgZmlyZVRhYmxlQ2hhbmdlRXZlbnQoKSB7XG4gICAgLy8gQ29uc3RydWN0IGEgdGFibGUgY2hhbmdlIG9iamVjdFxuICAgIGNvbnN0IG9uVGFibGVDaGFuZ2U6IGFueSA9IHt9O1xuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2wpID0+IGNvbC5maWx0ZXIgJiYgY29sLmZpbHRlci5sZW5ndGgpO1xuICAgIG9uVGFibGVDaGFuZ2UuZmlsdGVyID0gZmlsdGVycy5sZW5ndGggPyBmaWx0ZXJzIDogZmFsc2U7XG4gICAgb25UYWJsZUNoYW5nZS5zb3J0ID0gdGhpcy5jdXJyZW50U29ydENvbHVtbiA/IHRoaXMuY3VycmVudFNvcnRDb2x1bW4gOiBmYWxzZTtcbiAgICBvblRhYmxlQ2hhbmdlLnJvd3MgPSB0aGlzLnJvd3M7XG5cbiAgICAvLyBFbWl0IGV2ZW50XG4gICAgdGhpcy5vblRhYmxlQ2hhbmdlLmVtaXQob25UYWJsZUNoYW5nZSk7XG4gIH1cblxuICBmaW5kQ29sdW1uSW5kZXgodmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMuY29sdW1uc1tpXS5uYW1lID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBvbk9yZGVyQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3Qgb2xkSW5kZXggPSB0aGlzLmZpbmRDb2x1bW5JbmRleChldmVudC5maXJzdC5uYW1lKTtcbiAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuZmluZENvbHVtbkluZGV4KGV2ZW50LnNlY29uZC5uYW1lKTtcbiAgICB0aGlzLmNvbHVtbnMuc3BsaWNlKG5ld0luZGV4LCAwLCB0aGlzLmNvbHVtbnMuc3BsaWNlKG9sZEluZGV4LCAxKVswXSk7XG4gICAgdGhpcy5vblNvcnRDaGFuZ2UodGhpcy5jdXJyZW50U29ydENvbHVtbik7XG4gIH1cblxuICBleHBhbmRBbGxPblBhZ2UoZXhwYW5kZWQpIHtcbiAgICB0aGlzLmNvbmZpZy5leHBhbmRBbGwgPSAhZXhwYW5kZWQ7XG4gICAgZm9yIChjb25zdCByb3cgb2YgdGhpcy5kYXRhUHJvdmlkZXIubGlzdCkge1xuICAgICAgcm93Ll9leHBhbmRlZCA9IHRoaXMuY29uZmlnLmV4cGFuZEFsbDtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RQYWdlKGRhdGE/OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMubWFzdGVyKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbChmYWxzZSk7XG4gICAgICAvLyBPbmx5IHNob3cgdGhlIHNlbGVjdCBhbGwgbWVzc2FnZSB3aGVuIHRoZXJlIGlzIG9ubHkgb25lIG5ldyBwYWdlIHNlbGVjdGVkIGF0IGEgdGltZVxuICAgICAgdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCA9IHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgPiAwID8gdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCAtIDEgOiAwO1xuICAgICAgdGhpcy5zaG93U2VsZWN0QWxsTWVzc2FnZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgIC8vIHRoaXMucGFnZWREYXRhID0gdGhpcy5yb3dzLnNsaWNlKHRoaXMuZ2V0UGFnZVN0YXJ0KCksIHRoaXMuZ2V0UGFnZUVuZCgpKTtcbiAgICAgIGZvciAoY29uc3Qgcm93IG9mIHRoaXMucGFnZWREYXRhKSB7XG4gICAgICAgIHJvdy5fc2VsZWN0ZWQgPSB0aGlzLm1hc3RlcjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmRhdGFQcm92aWRlci5saXN0LmZpbHRlcigocikgPT4gci5fc2VsZWN0ZWQpO1xuICAgICAgdGhpcy5wYWdlU2VsZWN0ZWQgPSB0aGlzLnBhZ2VkRGF0YS5maWx0ZXIoKHIpID0+IHIuX3NlbGVjdGVkKTtcbiAgICAgIHRoaXMuZW1pdFNlbGVjdGVkKHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgLy8gT25seSBzaG93IHRoZSBzZWxlY3QgYWxsIG1lc3NhZ2Ugd2hlbiB0aGVyZSBpcyBvbmx5IG9uZSBuZXcgcGFnZSBzZWxlY3RlZCBhdCBhIHRpbWVcbiAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQrKztcbiAgICAgIHRoaXMuc2hvd1NlbGVjdEFsbE1lc3NhZ2UgPSB0aGlzLnNlbGVjdGVkUGFnZUNvdW50ID09PSAxICYmIHRoaXMuc2VsZWN0ZWQubGVuZ3RoICE9PSB0aGlzLmRhdGFQcm92aWRlci50b3RhbDtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RBbGwodmFsdWUpIHtcbiAgICB0aGlzLm1hc3RlciA9IHZhbHVlO1xuICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIGZvciAoY29uc3Qgcm93IG9mIHRoaXMuZGF0YVByb3ZpZGVyLmxpc3QpIHtcbiAgICAgIHJvdy5fc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZCA9IHZhbHVlID8gdGhpcy5kYXRhUHJvdmlkZXIubGlzdCA6IFtdO1xuICAgIHRoaXMuc2hvd1NlbGVjdEFsbE1lc3NhZ2UgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkUGFnZUNvdW50ID0gdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCA+IDAgPyB0aGlzLnNlbGVjdGVkUGFnZUNvdW50IC0gMSA6IDA7XG4gICAgdGhpcy5yb3dTZWxlY3RIYW5kbGVyKCk7XG4gIH1cblxuICByb3dTZWxlY3RIYW5kbGVyKGRhdGE/OiBhbnkpIHtcbiAgICAvLyB0aGlzLnBhZ2VkRGF0YSA9IHRoaXMucm93cy5zbGljZSh0aGlzLmdldFBhZ2VTdGFydCgpLCB0aGlzLmdldFBhZ2VFbmQoKSk7XG4gICAgdGhpcy5wYWdlU2VsZWN0ZWQgPSB0aGlzLnBhZ2VkRGF0YS5maWx0ZXIoKHIpID0+IHIuX3NlbGVjdGVkKTtcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5kYXRhUHJvdmlkZXIubGlzdC5maWx0ZXIoKHIpID0+IHIuX3NlbGVjdGVkKTtcbiAgICBpZiAodGhpcy5wYWdlU2VsZWN0ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLm1hc3RlciA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBhZ2VTZWxlY3RlZC5sZW5ndGggPT09IHRoaXMucGFnZWREYXRhLmxlbmd0aCkge1xuICAgICAgdGhpcy5tYXN0ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFzdGVyID0gZmFsc2U7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuXG4gICAgICAvLyBCcmVha2luZyB0aGUgc2VsZWN0ZWQgcGFnZSBjb3VudFxuICAgICAgdGhpcy5zaG93U2VsZWN0QWxsTWVzc2FnZSA9IGZhbHNlO1xuICAgICAgdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCA9IHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgPiAwID8gdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCAtIDEgOiAwO1xuICAgIH1cbiAgICB0aGlzLmVtaXRTZWxlY3RlZCh0aGlzLnNlbGVjdGVkKTtcbiAgfVxuXG4gIGVtaXRTZWxlY3RlZChzZWxlY3RlZCkge1xuICAgIHRoaXMub25Sb3dTZWxlY3QuZW1pdCh7IGxlbmd0aDogc2VsZWN0ZWQubGVuZ3RoLCBzZWxlY3RlZCB9KTtcbiAgfVxuXG4gIHJvd0NsaWNrSGFuZGxlcihyb3cpIHtcbiAgICBpZiAodGhpcy5jb25maWcucm93U2VsZWN0KSB7XG4gICAgICB0aGlzLmFjdGl2ZUlkID0gcm93LmlkIHx8IDA7XG4gICAgICB0aGlzLm9uUm93Q2xpY2suZW1pdChyb3cpO1xuICAgIH1cbiAgfVxuXG4gIGdldERlZmF1bHRPcHRpb25zKGNvbHVtbikge1xuICAgIC8vIFRPRE8gLSBuZWVkcyB0byBjb21lIGZyb20gbGFiZWwgc2VydmljZSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL2lzc3Vlcy8xMTZcbiAgICBjb25zdCBvcHRzOiBhbnlbXSA9IFtcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QxRGF5LCBtaW46IC0xLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3Q3RGF5cywgbWluOiAtNywgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MzBEYXlzLCBtaW46IC0zMCwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0OTBEYXlzLCBtaW46IC05MCwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5wYXN0MVllYXIsIG1pbjogLTM2NiwgbWF4OiAwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MURheSwgbWluOiAwLCBtYXg6IDEgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQ3RGF5cywgbWluOiAwLCBtYXg6IDcgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQzMERheXMsIG1pbjogMCwgbWF4OiAzMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDkwRGF5cywgbWluOiAwLCBtYXg6IDkwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0MVllYXIsIG1pbjogMCwgbWF4OiAzNjYgfSxcbiAgICBdO1xuXG4gICAgaWYgKGNvbHVtbiAmJiBjb2x1bW4ucmFuZ2UpIHtcbiAgICAgIG9wdHMucHVzaCh7XG4gICAgICAgIGxhYmVsOiB0aGlzLmxhYmVscy5jdXN0b21EYXRlUmFuZ2UsXG4gICAgICAgIHJhbmdlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvcHRzO1xuICB9XG5cbiAgb25DYWxlbmRlclNlbGVjdChjb2x1bW4sIGV2ZW50KTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoZXZlbnQuc3RhcnREYXRlICYmIGV2ZW50LmVuZERhdGUpIHtcbiAgICAgICAgdGhpcy5vbkZpbHRlckNoYW5nZSgpO1xuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uRmlsdGVyS2V5d29yZHMoY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyAmJiBjb25maWcuZmlsdGVyaW5nICYmIGNvbmZpZy5maWx0ZXJpbmcuZnJlZXRleHRGaWx0ZXIpIHtcbiAgICAgIGNvbnN0IGZpbHRlcktleXdvcmRzID0gY29uZmlnLmZpbHRlcmluZy5mcmVldGV4dEZpbHRlci50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKCFjb25maWcuZmlsdGVyaW5nLm9yaWdpbmFsT3B0aW9ucykge1xuICAgICAgICBjb25maWcuZmlsdGVyaW5nLm9yaWdpbmFsT3B0aW9ucyA9IGNvbmZpZy5maWx0ZXJpbmcub3B0aW9ucztcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5ld09wdGlvbnMgPSBjb25maWcuZmlsdGVyaW5nLm9yaWdpbmFsT3B0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBvcHRpb24gJiYgb3B0aW9uLmxhYmVsID8gb3B0aW9uLmxhYmVsIDogb3B0aW9uO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCkgPyB2YWx1ZS50b0xvd2VyQ2FzZSgpIDogdmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmlsdGVyS2V5d29yZHMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh+dmFsdWUuaW5kZXhPZihmaWx0ZXJLZXl3b3JkcykgfHwgfnZhbHVlLmluZGV4T2YoZmlsdGVyS2V5d29yZHMpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBjb25maWcuZmlsdGVyaW5nLm9wdGlvbnMgPSBuZXdPcHRpb25zO1xuICAgICAgY29uZmlnLmZpbHRlcmluZy5maWx0ZXIgPSBjb25maWcuZmlsdGVyaW5nLmZyZWV0ZXh0RmlsdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcuZmlsdGVyaW5nLm9wdGlvbnMgPSBjb25maWcuZmlsdGVyaW5nLm9yaWdpbmFsT3B0aW9ucztcbiAgICB9XG4gICAgdGhpcy5vbkZpbHRlckNoYW5nZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBUYWJsZSBpbnRvIEVESVQgbW9kZSwgYmFzZWQgb24gdGhlIHJvdy9jb2x1bW4gcGFzc2VkIHlvdSBjYW4gZW50ZXIgaW4gYSBmZXcgc3RhdGVzXG4gICAqICgxKSBzZXRUYWJsZUVkaXQoKSAtIGRvbid0IHBhc3MgYW55IHRvIHB1dCB0aGUgRlVMTCB0YWJsZSBpbnRvIGVkaXQgbW9kZVxuICAgKiAoMikgc2V0VGFibGVFZGl0KDEpIC0gcGFzcyBvbmx5IHJvdyB0byBwdXQgdGhhdCBGVUxMIHJvdyBvZiB0aGUgdGFibGUgaW50byBlZGl0IG1vZGVcbiAgICogKDMpIHNldFRhYmxlRWRpdCgxLCAxKSAtIHBhc3Mgcm93IGFuZCBjb2x1bW4gdG8gcHV0IHRoYXQgY29sdW1uIG9mIHRoZSByb3cgb2YgdGhlIHRhYmxlIGludG8gZWRpdCBtb2RlXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICBzZXRUYWJsZUVkaXQocm93TnVtYmVyPzogbnVtYmVyLCBjb2x1bW5OdW1iZXI/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGUgPSBOb3ZvVGFibGVNb2RlLkVESVQ7XG4gICAgdGhpcy5fZGF0YVByb3ZpZGVyLmVkaXQoKTtcbiAgICB0aGlzLl9yb3dzLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgIHJvdy5fZWRpdGluZyA9IHJvdy5fZWRpdGluZyB8fCB7fTtcbiAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW4sIGNvbHVtbkluZGV4KSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4udmlld09ubHkpIHtcbiAgICAgICAgICByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoSGVscGVycy5pc0VtcHR5KHJvd051bWJlcikgJiYgSGVscGVycy5pc0VtcHR5KGNvbHVtbk51bWJlcikpIHtcbiAgICAgICAgICByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICghSGVscGVycy5pc0VtcHR5KHJvd051bWJlcikgJiYgcm93SW5kZXggPT09IE51bWJlcihyb3dOdW1iZXIpICYmIEhlbHBlcnMuaXNFbXB0eShjb2x1bW5OdW1iZXIpKSB7XG4gICAgICAgICAgcm93Ll9lZGl0aW5nW2NvbHVtbi5uYW1lXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgIUhlbHBlcnMuaXNFbXB0eShyb3dOdW1iZXIpICYmXG4gICAgICAgICAgIUhlbHBlcnMuaXNFbXB0eShjb2x1bW5OdW1iZXIpICYmXG4gICAgICAgICAgcm93SW5kZXggPT09IE51bWJlcihyb3dOdW1iZXIpICYmXG4gICAgICAgICAgY29sdW1uSW5kZXggPT09IE51bWJlcihjb2x1bW5OdW1iZXIpXG4gICAgICAgICkge1xuICAgICAgICAgIHJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIExlYXZlcyBlZGl0IG1vZGUgZm9yIHRoZSBUYWJsZSBhbmQgcHV0cyBldmVyeXRoaW5nIGJhY2sgdG8gVklFVyBvbmx5XG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqIEBwYXJhbSBjYW5jZWwgLSB3aGV0aGVyIG9yIG5vdCB0byBzYXZlIGRhdGEgb3IgdW5kb1xuICAgKi9cbiAgcHJpdmF0ZSBsZWF2ZUVkaXRNb2RlKGNhbmNlbDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubW9kZSA9IE5vdm9UYWJsZU1vZGUuVklFVztcbiAgICB0aGlzLl9yb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93Ll9lZGl0aW5nID0gcm93Ll9lZGl0aW5nIHx8IHt9O1xuICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAoY2FuY2VsKSB7XG4gICAgICB0aGlzLl9kYXRhUHJvdmlkZXIudW5kbygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhUHJvdmlkZXIuY29tbWl0KCk7XG4gICAgfVxuICAgIHRoaXMuaGlkZVRvYXN0TWVzc2FnZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBBZGRzIGEgbmV3IHJvdyBpbnRvIHRoZSB0YWJsZSB0byBiZSBlZGl0ZWQsIGNhbiBiZSBjYWxsZWQgZnJvbSBhIGxvY2FsIHJlZmVyZW5jZSBvZiB0aGUgdGFibGUgaW4geW91ciB0ZW1wbGF0ZVxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgYWRkRWRpdGFibGVSb3coZGVmYXVsdFZhbHVlOiBhbnkgPSB7fSk6IHZvaWQge1xuICAgIGNvbnN0IHRhYmxlRm9ybVJvd3MgPSA8Rm9ybUFycmF5PnRoaXMudGFibGVGb3JtLmNvbnRyb2xzWydyb3dzJ107XG4gICAgY29uc3Qgcm93OiBhbnkgPSB7fTtcbiAgICBjb25zdCByb3dDb250cm9scyA9IFtdO1xuICAgIHJvdy5jb250cm9scyA9IHt9O1xuICAgIHJvdy5fZWRpdGluZyA9IHt9O1xuICAgIHJvdy5yb3dJZCA9IHRoaXMuX3Jvd3MubGVuZ3RoICsgMTtcbiAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAvLyBVc2UgdGhlIGNvbnRyb2wgcGFzc2VkIG9yIHVzZSBhIFJlYWRPbmx5Q29udHJvbCBzbyB0aGF0IHRoZSBmb3JtIGhhcyB0aGUgdmFsdWVzXG4gICAgICBjb25zdCBjb250cm9sID0gY29sdW1uLmVkaXRvckNvbmZpZ1xuICAgICAgICA/IENvbnRyb2xGYWN0b3J5LmNyZWF0ZShjb2x1bW4uZWRpdG9yVHlwZSwgY29sdW1uLmVkaXRvckNvbmZpZylcbiAgICAgICAgOiBuZXcgUmVhZE9ubHlDb250cm9sKHsga2V5OiBjb2x1bW4ubmFtZSB9KTtcbiAgICAgIGNvbnRyb2wudmFsdWUgPSBudWxsOyAvLyByZW1vdmUgY29waWVkIGNvbHVtbiB2YWx1ZVxuICAgICAgcm93LmNvbnRyb2xzW2NvbHVtbi5uYW1lXSA9IGNvbnRyb2w7XG4gICAgICByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdID0gIWNvbHVtbi52aWV3T25seTtcbiAgICAgIHJvd0NvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gICAgfSk7XG4gICAgdGhpcy5mb3JtVXRpbHMuc2V0SW5pdGlhbFZhbHVlcyhyb3dDb250cm9scywgZGVmYXVsdFZhbHVlLCBmYWxzZSk7XG4gICAgdGFibGVGb3JtUm93cy5wdXNoKHRoaXMuZm9ybVV0aWxzLnRvRm9ybUdyb3VwKHJvd0NvbnRyb2xzKSk7XG4gICAgdGhpcy5fcm93cy5wdXNoKHJvdyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyB0aGUgRm9ybSBpbnNpZGUgb2YgdGhlIFRhYmxlLCBpZiB0aGVyZSBhcmUgZXJyb3JzIGl0IHdpbGwgZGlzcGxheS9yZXR1cm4gdGhlIGVycm9ycyBmb3IgZWFjaCByb3cuXG4gICAqIElmIHRoZXJlIGFyZSBubyBlcnJvcnMsIHRoZW4gaXQgd2lsbCByZXR1cm4gT05MWSB0aGUgY2hhbmdlZCBkYXRhIGZvciBlYWNoIHJvdywgdGhlIGRhdGEgcmV0dXJuZWQgd2lsbCBiZSBpbiB0aGUgZm9ybTpcbiAgICogeyBpZDogSURfT0ZfUkVDT1JELCBrZXk6IHZhbHVlIH0gLS0gZGF0YSB0aGF0IHdhcyB1cGRhdGVkXG4gICAqIHsgaWQ6IHVuZGVmaW5lZCwga2V5OiB2YWx1ZSB9IC0tIGRhdGEgdGhhdCB3YXMgYWRkZWRcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICovXG4gIHZhbGlkYXRlQW5kR2V0VXBkYXRlZERhdGEoKTogeyBjaGFuZ2VkPzogYW55W107IGVycm9ycz86IHsgZXJyb3JzOiBhbnk7IHJvdzogYW55OyBpbmRleDogbnVtYmVyIH1bXSB9IHtcbiAgICBpZiAodGhpcy50YWJsZUZvcm0gJiYgdGhpcy50YWJsZUZvcm0uY29udHJvbHMgJiYgdGhpcy50YWJsZUZvcm0uY29udHJvbHNbJ3Jvd3MnXSkge1xuICAgICAgY29uc3QgY2hhbmdlZFJvd3MgPSBbXTtcbiAgICAgIGNvbnN0IGVycm9ycyA9IFtdO1xuICAgICAgLy8gR28gb3ZlciB0aGUgRm9ybUFycmF5J3MgY29udHJvbHNcbiAgICAgICh0aGlzLnRhYmxlRm9ybS5jb250cm9sc1sncm93cyddIGFzIEZvcm1BcnJheSkuY29udHJvbHMuZm9yRWFjaCgoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgbGV0IGNoYW5nZWRSb3cgPSBudWxsO1xuICAgICAgICBsZXQgZXJyb3IgPSBudWxsO1xuICAgICAgICAvLyBHbyBvdmVyIHRoZSBmb3JtIGdyb3VwIGNvbnRyb2xzXG4gICAgICAgIE9iamVjdC5rZXlzKGZvcm1Hcm91cC5jb250cm9scykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250cm9sID0gZm9ybUdyb3VwLmNvbnRyb2xzW2tleV07XG4gICAgICAgICAgLy8gSGFuZGxlIHZhbHVlIGNoYW5naW5nXG4gICAgICAgICAgaWYgKGNvbnRyb2wgJiYgY29udHJvbC5kaXJ0eSAmJiAhY29udHJvbC5lcnJvcnMpIHtcbiAgICAgICAgICAgIGlmICghY2hhbmdlZFJvdykge1xuICAgICAgICAgICAgICAvLyBBcHBlbmQgdGhlIElELCBzbyB3ZSBoYXZlIHNvbWUga2V5IHRvIHNhdmUgYWdhaW5zdFxuICAgICAgICAgICAgICBjaGFuZ2VkUm93ID0ge307XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9yb3dzW2luZGV4XS5pZCkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWRSb3cuaWQgPSB0aGlzLl9yb3dzW2luZGV4XS5pZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgZGlydHksIGdyYWIgdmFsdWUgb2ZmIHRoZSBmb3JtXG4gICAgICAgICAgICBjaGFuZ2VkUm93W2tleV0gPSB0aGlzLnRhYmxlRm9ybS52YWx1ZVsncm93cyddW2luZGV4XVtrZXldO1xuICAgICAgICAgICAgLy8gU2V0IHZhbHVlIGJhY2sgdG8gcm93IChzaG91bGQgYmUgYWxyZWFkeSBkb25lIHZpYSB0aGUgc2VydmVyIGNhbGwsIGJ1dCBkbyBpdCBhbnl3YXkpXG4gICAgICAgICAgICB0aGlzLl9yb3dzW2luZGV4XVtrZXldID0gY2hhbmdlZFJvd1trZXldO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29udHJvbCAmJiBjb250cm9sLmVycm9ycykge1xuICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yc1xuICAgICAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgICBlcnJvciA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3Jba2V5XSA9IGNvbnRyb2wuZXJyb3JzO1xuICAgICAgICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNoYW5nZWRSb3cpIHtcbiAgICAgICAgICBjaGFuZ2VkUm93cy5wdXNoKGNoYW5nZWRSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHsgZXJyb3JzOiBlcnJvciwgcm93OiB0aGlzLl9yb3dzW2luZGV4XSwgaW5kZXggfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gUmV0dXJuIGVycm9ycyBpZiBhbnksIG90aGVyd2lzZSByZXR1cm4gdGhlIGNoYW5nZWQgcm93c1xuICAgICAgaWYgKGVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgY2hhbmdlZDogY2hhbmdlZFJvd3MgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGVycm9ycyB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVmcmVzaCB0aGUgZGF0YSBwcm92aWRlciBhbmQgbGVhdmUgZWRpdCBtb2RlXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICBjYW5jZWxFZGl0aW5nKCk6IHZvaWQge1xuICAgIHRoaXMubGVhdmVFZGl0TW9kZSh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVmcmVzaCB0aGUgZGF0YSBwcm92aWRlciBhbmQgbGVhdmUgZWRpdCBtb2RlXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICBzYXZlQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmxlYXZlRWRpdE1vZGUoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBEaXNwbGF5cyBhIHRvYXN0IG1lc3NhZ2UgaW5zaWRlIG9mIHRoZSB0YWJsZVxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgZGlzcGxheVRvYXN0TWVzc2FnZSh0b2FzdDogeyBpY29uOiBzdHJpbmc7IHRoZW1lOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9LCBoaWRlRGVsYXk/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnRvYXN0ID0gdG9hc3Q7XG4gICAgaWYgKGhpZGVEZWxheSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmhpZGVUb2FzdE1lc3NhZ2UoKSwgaGlkZURlbGF5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEZvcmNlIGhpZGUgdGhlIHRvYXN0IG1lc3NhZ2VcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICovXG4gIGhpZGVUb2FzdE1lc3NhZ2UoKTogdm9pZCB7XG4gICAgdGhpcy50b2FzdCA9IG51bGw7XG4gICAgLy8gSGFjayB0byBtYWtlIHRoZSB0YWJsZSBkaXNwbGF5IHByb3Blcmx5IGFmdGVyIGhpZGluZyB0aGUgdG9hc3RcbiAgICB0aGlzLmdyb3NzRmxhZ1RvQXZvaWRUaGVUYWJsZUZyb21CZWluZ1VnbHlXaGVuSGlkaW5nVGhlVG9hc3QgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5ncm9zc0ZsYWdUb0F2b2lkVGhlVGFibGVGcm9tQmVpbmdVZ2x5V2hlbkhpZGluZ1RoZVRvYXN0ID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIGRpc3BsYXkgdGhlIGxvYWRpbmcgb3ZlcmxheSBvbiB0aGUgdGFibGVcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICovXG4gIHRvZ2dsZUxvYWRpbmcoc2hvdzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyA9IHNob3c7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIGhpZGUgYSBjb2x1bW4gaW4gZWRpdCBvciB2aWV3IG1vZGVcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICovXG4gIGlzQ29sdW1uSGlkZGVuKGNvbHVtbjogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdGluZyA/ICEhY29sdW1uLmhpZGVDb2x1bW5PbkVkaXQgOiAhIWNvbHVtbi5oaWRlQ29sdW1uT25WaWV3O1xuICB9XG59XG4iXX0=