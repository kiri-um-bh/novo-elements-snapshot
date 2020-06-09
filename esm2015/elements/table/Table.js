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
            const ret = {};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvVGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQVcsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUE4QixXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEYsU0FBUztBQUNULE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxNQUFNO0FBQ04sT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpRHpELDBDQU9rQjtJQUpELGlQQUE0Qix3UEFBQSxrT0FBQTtJQUk3QyxpQkFBa0I7OztJQU5ELDREQUF1QyxtRUFBQSxrQ0FBQSw4Q0FBQSx5Q0FBQTs7O0lBSmhFLDhCQUNJO0lBQUEsa0JBQXVDO0lBQ3ZDLDhCQUNJO0lBQUEsa0dBT0E7SUFDQSxxQkFBd0M7SUFDNUMsaUJBQU07SUFDVixpQkFB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Q0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5RSxDQUFDOztnRkEzdkJVLGdCQUFnQjtxREFBaEIsZ0JBQWdCO2tDQUNVLFVBQVU7Ozs7Ozs7OztRQTNLekMsdUVBQ0k7UUFhSixpRUFDSTtRQUVKLCtFQUFpRztRQUNqRyxtRUFDSTs7UUFuQkkseUNBQXNCO1FBY1UsZUFBMkM7UUFBM0Msa0VBQTJDO1FBR3ZFLGVBQWE7UUFBYixnQ0FBYTtRQUNJLGVBQWdFO1FBQWhFLG1GQUFnRTs7a0RBd0p4RixnQkFBZ0I7Y0FuTDVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsSUFBSSxFQUFFO29CQUNKLGNBQWMsRUFBRSxPQUFPO29CQUN2QixpQkFBaUIsRUFBRSw2QkFBNkI7b0JBQ2hELDRCQUE0QixFQUFFLFNBQVM7aUJBQ3hDO2dCQUNELGtCQUFrQjtnQkFDbEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBeUtQO2FBQ0o7O2tCQUVFLFlBQVk7bUJBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTs7a0JBR2hELEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUdMLE1BQU07O2tCQUVOLE1BQU07O2tCQUVOLE1BQU07O2tCQTJCTixLQUFLOztrQkFnQkwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBEb0NoZWNrLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIFZlbmRvclxuaW1wb3J0ICogYXMgZGF0ZUZucyBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4vLyBBUFBcbmltcG9ydCB7IENvbGxlY3Rpb25FdmVudCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtcHJvdmlkZXIvQ29sbGVjdGlvbkV2ZW50JztcbmltcG9ydCB7IFBhZ2VkQXJyYXlDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS1wcm92aWRlci9QYWdlZEFycmF5Q29sbGVjdGlvbic7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1VdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm0tdXRpbHMvRm9ybVV0aWxzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IG5vdGlmeSB9IGZyb20gJy4uLy4uL3V0aWxzL25vdGlmaWVyL25vdGlmaWVyLnV0aWwnO1xuaW1wb3J0IHsgQ29udHJvbEZhY3RvcnksIFJlYWRPbmx5Q29udHJvbCB9IGZyb20gJy4vLi4vZm9ybS9Gb3JtQ29udHJvbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9UYWJsZUNvbmZpZyB7XG4gIC8vIFBhZ2luZyBjb25maWdcbiAgcGFnaW5nPzoge1xuICAgIGN1cnJlbnQ6IG51bWJlcjsgLy8gY3VycmVudCBwYWdlXG4gICAgaXRlbXNQZXJQYWdlOiBudW1iZXI7IC8vIGl0ZW1zIHBlciBwYWdlXG4gICAgb25QYWdlQ2hhbmdlOiBGdW5jdGlvbjsgLy8gZnVuY3Rpb24gdG8gaGFuZGxlIHBhZ2UgY2hhbmdpbmdcbiAgICByb3dPcHRpb25zPzogeyB2YWx1ZTogbnVtYmVyOyBsYWJlbDogc3RyaW5nIH1bXTsgLy8gcGFnZSBvcHRpb25zXG4gICAgZGlzYWJsZVBhZ2VTZWxlY3Rpb24/OiBib29sZWFuOyAvLyBkaXNhYmxlcyB0aGUgcGFnZXMgZnJvbSBiZWluZyBzZWxlY3RlZFxuICB9O1xuICAvLyBGb290ZXIgY29uZmlnICh0b3RhbCBmb290ZXIpXG4gIGZvb3RlcnM/OiBBcnJheTx7XG4gICAgY29sdW1uczogQXJyYXk8c3RyaW5nPjsgLy8gc3RyaW5nIGFycmF5IG9mIGNvbHVtbnMgdG8gdG90YWxcbiAgICBtZXRob2Q6IHN0cmluZzsgLy8gbWV0aG9kIHRvIHVzZSBmb3IgdGhlIGZvb3RlciwgU1VNIHwgQVZHLCBkZWZhdWx0cyB0byBTVU1cbiAgICBsYWJlbENvbHVtbjogc3RyaW5nOyAvLyBjb2x1bW4gdG8gdXNlIGFzIHRoZSBcInRvdGFsXCIgbGFiZWxcbiAgICBsYWJlbDogc3RyaW5nOyAvLyBsYWJlbCB0byB1c2UgaW4gdGhlIFwidG90YWxcIiBsYWJlbFxuICB9PjtcbiAgLy8gVE9ETzogV2hlbiB0aGVzZSB0eXBlcyBhcmUgZW5mb3JjZWQgYXMgYGJvb2xlYW4gfCBGdW5jdGlvbmAsIHRoZXJlJ3MgYSBsaW50IGVycm9yLiBUaGF0J3MgYSBidWcuXG4gIGZpbHRlcmluZz86IGJvb2xlYW4gfCBhbnk7IC8vIFR1cm4gb24gZmlsdGVyaW5nIGZvciB0aGUgdGFibGUsIGJvb2xlYW4gb3IgZnVuY3Rpb24gZm9yIGZpbHRlcmluZyBjYWxsYmFja1xuICBzb3J0aW5nPzogYm9vbGVhbiB8IGFueTsgLy8gVHVybiBvbiBzb3J0aW5nIGZvciB0aGUgdGFibGUsIGJvb2xlYW4gb3IgZnVuY3Rpb24gZm9yIHNvcnRpbmcgY2FsbGJhY2tcbiAgb3JkZXJpbmc/OiBib29sZWFuIHwgRnVuY3Rpb247IC8vIFR1cm4gb24gb3JkZXJpbmcgZm9yIHRoZSB0YWJsZSwgYm9vbGVhbiBvciBmdW5jdGlvbiBmb3Igb3JkZXJpbmcgY2FsbGJhY2tcbiAgcmVzaXppbmc/OiBib29sZWFuIHwgRnVuY3Rpb247IC8vIFR1cm4gb24gcmVzaXppbmcgZm9yIHRoZSB0YWJsZSwgYm9vbGVhbiBvciBmdW5jdGlvbiBmb3IgcmVzaXppbmcgY2FsbGJhY2tcbiAgcm93U2VsZWN0aW9uU3R5bGU/OiBzdHJpbmc7IC8vIFJvdyBzZWxlY3Rpb24gc3R5bGUsIGNoZWNrYm94IG9yIHJvd1xuICByb3dTZWxlY3Q/OiBib29sZWFuOyAvLyBUdXJuIG9uIHJvdyBzZWxlY3Rpb25cbiAgaGFzRGV0YWlscz86IGJvb2xlYW47IC8vIFR1cm4gb24gZGV0YWlscyByb3cgZm9yIHRoZSB0YWJsZVxuICBkZXRhaWxzUmVuZGVyZXI/OiBhbnk7IC8vIFJlbmRlcmVyL2NvbXBvbmVudCBmb3IgdGhlIGRldGFpbHMgcm93XG4gIGV4cGFuZEFsbD86IGJvb2xlYW47IC8vIHNob3VsZCBBbGwgUm93cyBiZSBleHBhbmRlZCBieSBkZWZhdWx0XG4gIHNlbGVjdEFsbEVuYWJsZWQ/OiBib29sZWFuOyAvLyBBbGxvd3MgdGhlIHRhYmxlLCB3aGlsZSBpbiBzZWxlY3Rpb24gbW9kZSB0byBoYXZlIGEgc2VsZWN0IGFsbCBhdCB0aGUgdG9wXG59XG5cbi8vIFRPRE8gLSBzdXBwb3J0ICgxKSBjbGlja2luZyBjZWxsIHRvIGVkaXQsICgyKSBjbGlja2luZyByb3cgdG8gZWRpdCwgKDMpIGJ1dHRvbiB0byB0cmlnZ2VyIGZ1bGwgdGFibGUgdG8gZWRpdFxuZXhwb3J0IGVudW0gTm92b1RhYmxlTW9kZSB7XG4gIFZJRVcgPSAxLFxuICBFRElUID0gMixcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10YWJsZScsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIudGhlbWVdJzogJ3RoZW1lJyxcbiAgICAnW2NsYXNzLmVkaXRpbmddJzogJ21vZGUgPT09IE5vdm9UYWJsZU1vZGUuRURJVCcsXG4gICAgJ1tjbGFzcy5ub3ZvLXRhYmxlLWxvYWRpbmddJzogJ2xvYWRpbmcnLFxuICB9LFxuICAvLyBkaXJlY3RpdmVzOiBbXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGhlYWRlciAqbmdJZj1cImNvbHVtbnMubGVuZ3RoXCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJub3ZvLXRhYmxlLWhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxub3ZvLXBhZ2luYXRpb24gKm5nSWY9XCJjb25maWcucGFnaW5nICYmICEoZGF0YVByb3ZpZGVyLmlzRW1wdHkoKSAmJiAhZGF0YVByb3ZpZGVyLmlzRmlsdGVyZWQoKSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd09wdGlvbnNdPVwiY29uZmlnLnBhZ2luZy5yb3dPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlUGFnZVNlbGVjdGlvbl09XCJjb25maWcucGFnaW5nLmRpc2FibGVQYWdlU2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsocGFnZSldPVwiZGF0YVByb3ZpZGVyLnBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhpdGVtc1BlclBhZ2UpXT1cImRhdGFQcm92aWRlci5wYWdlU2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdG90YWxJdGVtc109XCJkYXRhUHJvdmlkZXIudG90YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUGFnZUNoYW5nZSk9XCJvblBhZ2VDaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgIDwvbm92by1wYWdpbmF0aW9uPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8tdGFibGUtYWN0aW9uc1wiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tdGFibGUtbG9hZGluZy1vdmVybGF5XCIgKm5nSWY9XCJsb2FkaW5nIHx8IGRhdGFQcm92aWRlci5pc0xvYWRpbmcoKVwiPlxuICAgICAgICAgICAgPG5vdm8tbG9hZGluZz48L25vdm8tbG9hZGluZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxub3ZvLXRvYXN0ICpuZ0lmPVwidG9hc3RcIiBbdGhlbWVdPVwidG9hc3Q/LnRoZW1lXCIgW2ljb25dPVwidG9hc3Q/Lmljb25cIiBbbWVzc2FnZV09XCJ0b2FzdD8ubWVzc2FnZVwiPjwvbm92by10b2FzdD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLWNvbnRhaW5lclwiICpuZ0lmPVwiIWdyb3NzRmxhZ1RvQXZvaWRUaGVUYWJsZUZyb21CZWluZ1VnbHlXaGVuSGlkaW5nVGhlVG9hc3RcIj5cbiAgICAgICAgICAgIDxub3ZvLWZvcm0gaGlkZUhlYWRlcj1cInRydWVcIiBbZm9ybV09XCJ0YWJsZUZvcm1cIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIGRhdGFUYWJsZVwiIFtjbGFzcy50YWJsZS1kZXRhaWxzXT1cImNvbmZpZy5oYXNEZXRhaWxzXCIgcm9sZT1cImdyaWRcIj5cbiAgICAgICAgICAgICAgICA8IS0tIHNraXBTb3J0QW5kRmlsdGVyQ2xlYXIgaXMgYSBoYWNrIHJpZ2h0IG5vdywgd2lsbCBiZSByZW1vdmVkIG9uY2UgQ2FudmFzIGlzIHJlZmFjdG9yZWQgLS0+XG4gICAgICAgICAgICAgICAgPHRoZWFkICpuZ0lmPVwiY29sdW1ucy5sZW5ndGggJiYgKCFkYXRhUHJvdmlkZXIuaXNFbXB0eSgpIHx8IGRhdGFQcm92aWRlci5pc0ZpbHRlcmVkKCkgfHwgc2tpcFNvcnRBbmRGaWx0ZXJDbGVhciB8fCBlZGl0aW5nKVwiPlxuICAgICAgICAgICAgICAgICAgICA8dHIgcm9sZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBERVRBSUxTIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicm93LWFjdGlvbnNcIiAqbmdJZj1cImNvbmZpZy5oYXNEZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwibmV4dFwiIChjbGljayk9XCJleHBhbmRBbGxPblBhZ2UoY29uZmlnLmV4cGFuZEFsbClcIiAqbmdJZj1cIiFjb25maWcuZXhwYW5kQWxsXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwiZXhwYW5kLWFsbFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgaWNvbj1cInNvcnQtZGVzY1wiIChjbGljayk9XCJleHBhbmRBbGxPblBhZ2UoY29uZmlnLmV4cGFuZEFsbClcIiAqbmdJZj1cImNvbmZpZy5leHBhbmRBbGxcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJjb2xsYXBzZS1hbGxcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIENIRUNLQk9YIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicm93LWFjdGlvbnMgY2hlY2tib3ggbWFzcy1hY3Rpb25cIiAqbmdJZj1cImNvbmZpZy5yb3dTZWxlY3Rpb25TdHlsZSA9PT0gJ2NoZWNrYm94J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLWNoZWNrYm94IFsobmdNb2RlbCldPVwibWFzdGVyXCIgW2luZGV0ZXJtaW5hdGVdPVwicGFnZVNlbGVjdGVkLmxlbmd0aCA+IDAgJiYgcGFnZVNlbGVjdGVkLmxlbmd0aCA8IHBhZ2VkRGF0YS5sZW5ndGhcIiAobmdNb2RlbENoYW5nZSk9XCJzZWxlY3RQYWdlKCRldmVudClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJzZWxlY3QtYWxsLWNoZWNrYm94XCIgW3Rvb2x0aXBdPVwibWFzdGVyID8gbGFiZWxzLmRlc2VsZWN0QWxsIDogbGFiZWxzLnNlbGVjdEFsbE9uUGFnZVwiIHRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCI+PC9ub3ZvLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gVEFCTEUgSEVBREVSUyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBbbmdDbGFzc109XCJ7ICdtYXNzLWFjdGlvbic6IGNvbmZpZz8ucm93U2VsZWN0aW9uU3R5bGUgPT09ICdjaGVja2JveCcsICdhY3Rpb25zJzogY29sdW1uPy5hY3Rpb25zPy5pdGVtcz8ubGVuZ3RoID4gMCwgJ3ByZXZpZXcnOiBjb2x1bW4/Lm5hbWUgPT09ICdwcmV2aWV3JyB9XCIgW25vdm9UaE9yZGVyYWJsZV09XCJjb2x1bW5cIiAob25PcmRlckNoYW5nZSk9XCJvbk9yZGVyQ2hhbmdlKCRldmVudClcIiBbaGlkZGVuXT1cImlzQ29sdW1uSGlkZGVuKGNvbHVtbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGgtZ3JvdXBcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY29sdW1uLmlkIHx8IGNvbHVtbi5uYW1lXCIgKm5nSWY9XCIhY29sdW1uLmhpZGVIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBMQUJFTCAmIFNPUlQgQVJST1dTIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGgtdGl0bGVcIiBbbmdDbGFzc109XCIoY29uZmlnLnNvcnRpbmcgIT09IGZhbHNlICYmIGNvbHVtbi5zb3J0aW5nICE9PSBmYWxzZSkgPyAnc29ydGFibGUnIDogJydcIiBbbm92b1RoU29ydGFibGVdPVwiY29uZmlnXCIgW2NvbHVtbl09XCJjb2x1bW5cIiAob25Tb3J0Q2hhbmdlKT1cIm9uU29ydENoYW5nZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3sgY29sdW1uLnRpdGxlIHx8IGNvbHVtbi5sYWJlbCB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtc29ydC1pY29uc1wiIHRvb2x0aXBQb3NpdGlvbj1cImJvdHRvbVwiIFt0b29sdGlwXT1cImxhYmVscy5zb3J0XCIgW25nQ2xhc3NdPVwiY29sdW1uLnNvcnQgfHwgJydcIiAqbmdJZj1cImNvbmZpZy5zb3J0aW5nICE9PSBmYWxzZSAmJiBjb2x1bW4uc29ydGluZyAhPT0gZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1hcnJvdy11cFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1hcnJvdy1kb3duXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEZJTFRFUiBEUk9QLURPV04gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLWRyb3Bkb3duIHNpZGU9XCJyaWdodFwiICpuZ0lmPVwiY29uZmlnLmZpbHRlcmluZyAhPT0gZmFsc2UgJiYgY29sdW1uLmZpbHRlcmluZyAhPT0gZmFsc2VcIiBjbGFzcz1cImNvbHVtbi1maWx0ZXJzXCIgKHRvZ2dsZWQpPVwib25Ecm9wZG93blRvZ2dsZWQoJGV2ZW50LCBjb2x1bW4ubmFtZSlcIiBwYXJlbnRTY3JvbGxTZWxlY3Rvcj1cIi50YWJsZS1jb250YWluZXJcIiBjb250YWluZXJDbGFzcz1cInRhYmxlLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aGVtZT1cImljb25cIiBpY29uPVwiZmlsdGVyXCIgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tXCIgW3Rvb2x0aXBdPVwibGFiZWxzLmZpbHRlcnNcIiBbY2xhc3MuZmlsdGVyZWRdPVwiY29sdW1uLmZpbHRlciB8fCBjb2x1bW4uZmlsdGVyPT09ZmFsc2VcIiAoY2xpY2spPVwiZm9jdXNJbnB1dCgpXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEZJTFRFUiBPUFRJT05TIExJU1QgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlzdCAqbmdJZj1cIihjb2x1bW4/Lm9wdGlvbnM/Lmxlbmd0aCB8fCBjb2x1bW4/Lm9yaWdpbmFsT3B0aW9ucz8ubGVuZ3RoKSAmJiBjb2x1bW4/LnR5cGUgIT09ICdkYXRlJyAmJiB0b2dnbGVkRHJvcGRvd25NYXBbY29sdW1uLm5hbWVdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0gY2xhc3M9XCJmaWx0ZXItc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGxhYmVscy5maWx0ZXJzIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImRpYWxvZ3VlXCIgY29sb3I9XCJuZWdhdGl2ZVwiIGljb249XCJ0aW1lc1wiIChjbGljayk9XCJvbkZpbHRlckNsZWFyKGNvbHVtbilcIiAqbmdJZj1cImNvbHVtbi5maWx0ZXIgfHwgY29sdW1uLmZpbHRlcj09PWZhbHNlXCI+e3sgbGFiZWxzLmNsZWFyIH19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAqbmdJZj1cIiEhY29sdW1uLmFsbG93Q3VzdG9tVGV4dE9wdGlvblwiIFthdHRyLmlkXT1cImNvbHVtbi5uYW1lICsgJy1pbnB1dCdcIiBbbm92b1RhYmxlRmlsdGVyXT1cImNvbHVtblwiIChvbkZpbHRlckNoYW5nZSk9XCJvbkZpbHRlcktleXdvcmRzKCRldmVudClcIiBbKG5nTW9kZWwpXT1cImNvbHVtbi5mcmVldGV4dEZpbHRlclwiIGtlZXBGaWx0ZXJGb2N1c2VkICNmaWx0ZXJJbnB1dC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtIFtuZ0NsYXNzXT1cInsgYWN0aXZlOiBpc0ZpbHRlckFjdGl2ZShjb2x1bW4sIG9wdGlvbikgfVwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29sdW1uLm9wdGlvbnNcIiAoY2xpY2spPVwib25GaWx0ZXJDbGljayhjb2x1bW4sIG9wdGlvbilcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiZ2V0T3B0aW9uRGF0YUF1dG9tYXRpb25JZChvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IG9wdGlvbj8ubGFiZWwgfHwgb3B0aW9uIH19PC9zcGFuPiA8aSBjbGFzcz1cImJoaS1jaGVja1wiICpuZ0lmPVwiaXNGaWx0ZXJBY3RpdmUoY29sdW1uLCBvcHRpb24pXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRklMVEVSIFNFQVJDSCBJTlBVVCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaXN0ICpuZ0lmPVwiIShjb2x1bW4/Lm9wdGlvbnM/Lmxlbmd0aCB8fCBjb2x1bW4/Lm9yaWdpbmFsT3B0aW9ucz8ubGVuZ3RoKSAmJiB0b2dnbGVkRHJvcGRvd25NYXBbY29sdW1uLm5hbWVdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0gY2xhc3M9XCJmaWx0ZXItc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGxhYmVscy5maWx0ZXJzIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImRpYWxvZ3VlXCIgY29sb3I9XCJuZWdhdGl2ZVwiIGljb249XCJ0aW1lc1wiIChjbGljayk9XCJvbkZpbHRlckNsZWFyKGNvbHVtbilcIiAqbmdJZj1cImNvbHVtbi5maWx0ZXJcIj57eyBsYWJlbHMuY2xlYXIgfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFthdHRyLmlkXT1cImNvbHVtbi5uYW1lICsgJy1pbnB1dCdcIiBbbm92b1RhYmxlRmlsdGVyXT1cImNvbHVtblwiIChvbkZpbHRlckNoYW5nZSk9XCJvbkZpbHRlckNoYW5nZSgkZXZlbnQpXCIgWyhuZ01vZGVsKV09XCJjb2x1bW4uZmlsdGVyXCIga2VlcEZpbHRlckZvY3VzZWQgI2ZpbHRlcklucHV0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEZJTFRFUiBEQVRFIE9QVElPTlMgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlzdCAqbmdJZj1cImNvbHVtbj8ub3B0aW9ucz8ubGVuZ3RoICYmIGNvbHVtbj8udHlwZSA9PT0gJ2RhdGUnICYmIHRvZ2dsZWREcm9wZG93bk1hcFtjb2x1bW4ubmFtZV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbSBjbGFzcz1cImZpbHRlci1zZWFyY2hcIiAqbmdJZj1cIiFjb2x1bW4uY2FsZW5kZXJTaG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGxhYmVscy5maWx0ZXJzIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImRpYWxvZ3VlXCIgY29sb3I9XCJuZWdhdGl2ZVwiIGljb249XCJ0aW1lc1wiIChjbGljayk9XCJvbkZpbHRlckNsZWFyKGNvbHVtbilcIiAqbmdJZj1cImNvbHVtbi5maWx0ZXJcIj57eyBsYWJlbHMuY2xlYXIgfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtIFtuZ0NsYXNzXT1cInsgYWN0aXZlOiBpc0ZpbHRlckFjdGl2ZShjb2x1bW4sIG9wdGlvbikgfVwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29sdW1uLm9wdGlvbnNcIiAoY2xpY2spPVwib25GaWx0ZXJDbGljayhjb2x1bW4sIG9wdGlvbilcIiBba2VlcE9wZW5dPVwib3B0aW9uLnJhbmdlXCIgW2hpZGRlbl09XCJjb2x1bW4uY2FsZW5kZXJTaG93XCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIihvcHRpb24/LmxhYmVsIHx8IG9wdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgb3B0aW9uPy5sYWJlbCB8fCBvcHRpb24gfX0gPGkgY2xhc3M9XCJiaGktY2hlY2tcIiAqbmdJZj1cImlzRmlsdGVyQWN0aXZlKGNvbHVtbiwgb3B0aW9uKVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWNvbnRhaW5lclwiIFtoaWRkZW5dPVwiIWNvbHVtbi5jYWxlbmRlclNob3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAoY2xpY2spPVwiY29sdW1uLmNhbGVuZGVyU2hvdz1mYWxzZVwiPjxpIGNsYXNzPVwiYmhpLXByZXZpb3VzXCI+PC9pPnt7IGxhYmVscy5iYWNrVG9QcmVzZXRGaWx0ZXJzIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLWRhdGUtcGlja2VyICNyYW5nZVBpY2tlciAob25TZWxlY3QpPVwib25DYWxlbmRlclNlbGVjdChjb2x1bW4sICRldmVudClcIiBbKG5nTW9kZWwpXT1cImNvbHVtbi5maWx0ZXJcIiByYW5nZT1cInRydWVcIj48L25vdm8tZGF0ZS1waWNrZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbm92by1kcm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8IS0tIFRBQkxFIERBVEEgLS0+XG4gICAgICAgICAgICAgICAgPHRib2R5ICpuZ0lmPVwiIWRhdGFQcm92aWRlci5pc0VtcHR5KCkgfHwgZWRpdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ0YWJsZS1zZWxlY3Rpb24tcm93XCIgKm5nSWY9XCJjb25maWcucm93U2VsZWN0aW9uU3R5bGUgPT09ICdjaGVja2JveCcgJiYgc2hvd1NlbGVjdEFsbE1lc3NhZ2UgJiYgY29uZmlnLnNlbGVjdEFsbEVuYWJsZWRcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJ0YWJsZS1zZWxlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xhYmVscy5zZWxlY3RlZFJlY29yZHMoc2VsZWN0ZWQubGVuZ3RoKX19IDxhIChjbGljayk9XCJzZWxlY3RBbGwodHJ1ZSlcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJhbGwtbWF0Y2hpbmctcmVjb3Jkc1wiPnt7bGFiZWxzLnRvdGFsUmVjb3JkcyhkYXRhUHJvdmlkZXIudG90YWwpfX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LXJvdz1cIiRpbXBsaWNpdFwiIGxldC1pPVwiaW5kZXhcIiBbbmdGb3JPZl09XCJyb3dzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ0YWJsZS1yb3dcIiBbbmdDbGFzc109XCJyb3cuY3VzdG9tQ2xhc3MgfHwgJydcIiBbaWRdPVwibmFtZSArICctJyArIHJvd1tyb3dJZGVudGlmaWVyXVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJyb3cuaWRcIiAoY2xpY2spPVwicm93Q2xpY2tIYW5kbGVyKHJvdylcIiBbY2xhc3MuYWN0aXZlXT1cInJvdy5pZCA9PT0gYWN0aXZlSWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyb3ctYWN0aW9uc1wiICpuZ0lmPVwiY29uZmlnLmhhc0RldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwibmV4dFwiIChjbGljayk9XCJyb3cuX2V4cGFuZGVkPSFyb3cuX2V4cGFuZGVkXCIgKm5nSWY9XCIhcm93Ll9leHBhbmRlZFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIGljb249XCJzb3J0LWRlc2NcIiAoY2xpY2spPVwicm93Ll9leHBhbmRlZD0hcm93Ll9leHBhbmRlZFwiICpuZ0lmPVwicm93Ll9leHBhbmRlZFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicm93LWFjdGlvbnMgY2hlY2tib3hcIiAqbmdJZj1cImNvbmZpZy5yb3dTZWxlY3Rpb25TdHlsZSA9PT0gJ2NoZWNrYm94J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bm92by1jaGVja2JveCBbKG5nTW9kZWwpXT1cInJvdy5fc2VsZWN0ZWRcIiAobmdNb2RlbENoYW5nZSk9XCJyb3dTZWxlY3RIYW5kbGVyKHJvdylcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJzZWxlY3Qtcm93LWNoZWNrYm94XCI+PC9ub3ZvLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjb2x1bW4uaWQgfHwgY29sdW1uLm5hbWVcIiBbY2xhc3Mubm92by1mb3JtLXJvd109XCJlZGl0YWJsZVwiIFtoaWRkZW5dPVwiaXNDb2x1bW5IaWRkZW4oY29sdW1uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bm92by10YWJsZS1jZWxsICpuZ0lmPVwicm93Ll9lZGl0aW5nICYmICFyb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdXCIgW2hhc0VkaXRvcl09XCJlZGl0YWJsZVwiIFtjb2x1bW5dPVwiY29sdW1uXCIgW3Jvd109XCJyb3dcIiBbZm9ybV09XCJnZXRSb3dDb250cm9sRm9ybShpKVwiPjwvbm92by10YWJsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bm92by1jb250cm9sICpuZ0lmPVwicm93Ll9lZGl0aW5nICYmIHJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV1cIiBjb25kZW5zZWQ9XCJ0cnVlXCIgW2Zvcm1dPVwiZ2V0Um93Q29udHJvbEZvcm0oaSlcIiBbY29udHJvbF09XCJyb3cuY29udHJvbHNbY29sdW1uLm5hbWVdXCI+PC9ub3ZvLWNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJkZXRhaWxzLXJvd1wiICpuZ0lmPVwiY29uZmlnLmhhc0RldGFpbHNcIiBbaGlkZGVuXT1cIiFyb3cuX2V4cGFuZGVkXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidkZXRhaWxzLXJvdy0nK3Jvdy5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJvdy1hY3Rpb25zXCI+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgW2F0dHIuY29sc3Bhbl09XCJjb25maWcucm93U2VsZWN0aW9uU3R5bGUgPT09ICdjaGVja2JveCcgPyAoY29sdW1ucy5sZW5ndGggKyAxKSA6IGNvbHVtbnMubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLXJvdy1kZXRhaWxzIFtkYXRhXT1cInJvd1wiIFtyZW5kZXJlcl09XCJjb25maWcuZGV0YWlsc1JlbmRlcmVyXCI+PC9ub3ZvLXJvdy1kZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPCEtLSBOTyBUQUJMRSBEQVRBIFBMQUNFSE9MREVSIC0tPlxuICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cInRhYmxlLW1lc3NhZ2VcIiAqbmdJZj1cImRhdGFQcm92aWRlci5pc0VtcHR5KCkgJiYgIWRhdGFQcm92aWRlci5pc0ZpbHRlcmVkKCkgJiYgIWVkaXRpbmdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJlbXB0eS10YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICNlbXB0eW1lc3NhZ2U+PG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RhYmxlLWVtcHR5LW1lc3NhZ2VdXCI+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1lbXB0eS1tZXNzYWdlXCIgKm5nSWY9XCJlbXB0eW1lc3NhZ2UuY2hpbGROb2Rlcy5sZW5ndGggPT0gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PGkgY2xhc3M9XCJiaGktc2VhcmNoLXF1ZXN0aW9uXCI+PC9pPiB7eyBsYWJlbHMuZW1wdHlUYWJsZU1lc3NhZ2UgfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwhLS0gTk8gTUFUQ0hJTkcgUkVDT1JEUyAtLT5cbiAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3M9XCJ0YWJsZS1tZXNzYWdlXCIgKm5nSWY9XCJkYXRhUHJvdmlkZXIuaXNFbXB0eSgpICYmIGRhdGFQcm92aWRlci5pc0ZpbHRlcmVkKClcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJlbXB0eS10YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICNub21hdGNobWVzc2FnZT48bmctY29udGVudCBzZWxlY3Q9XCJbdGFibGUtbm8tbWF0Y2hpbmctcmVjb3Jkcy1tZXNzYWdlXVwiPjwvbmctY29udGVudD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm8tbWF0Y2hpbmctcmVjb3Jkc1wiICpuZ0lmPVwibm9tYXRjaG1lc3NhZ2UuY2hpbGROb2Rlcy5sZW5ndGggPT0gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PGkgY2xhc3M9XCJiaGktc2VhcmNoLXF1ZXN0aW9uXCI+PC9pPiB7eyBsYWJlbHMubm9NYXRjaGluZ1JlY29yZHNNZXNzYWdlIH19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8IS0tIFRBQkxFIERBVEEgRVJST1IgUExBQ0VIT0xERVIgLS0+XG4gICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzPVwidGFibGUtbWVzc2FnZVwiICpuZ0lmPVwiZGF0YVByb3ZpZGVyLmhhc0Vycm9ycygpXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwidGFibGUtZXJyb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgI2Vycm9ybWVzc2FnZT48bmctY29udGVudCBzZWxlY3Q9XCJbdGFibGUtZXJyb3ItbWVzc2FnZV1cIj48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLWVycm9yLW1lc3NhZ2VcIiAqbmdJZj1cImVycm9ybWVzc2FnZS5jaGlsZE5vZGVzLmxlbmd0aCA9PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND48aSBjbGFzcz1cImJoaS1jYXV0aW9uXCI+PC9pPiB7eyBsYWJlbHMuZXJyb3JlZFRhYmxlTWVzc2FnZSB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPHRmb290ICpuZ0lmPVwiIWNvbmZpZy5mb290ZXJzXCIgW25nQ2xhc3NdPVwiZGF0YVByb3ZpZGVyLmxlbmd0aCAlIDIgPT0gMCA/ICdvZGQnIDogJ2V2ZW4nXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8tdGFibGUtZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rmb290PlxuICAgICAgICAgICAgICAgIDx0Zm9vdCAqbmdGb3I9XCJsZXQgZm9vdGVyIG9mIGZvb3RlcnM7bGV0IGkgPSBpbmRleDtcIiBjbGFzcz1cIm5vdm8tdGFibGUtdG90YWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiKGNvbHVtbi5pZCB8fCBjb2x1bW4ubmFtZSkgKyAnLXRvdGFsLScgKyBpXCI+e3sgZm9vdGVyW2NvbHVtbi5uYW1lXSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Zm9vdD5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvbm92by1mb3JtPlxuICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJsZUVsZW1lbnQgaW1wbGVtZW50cyBEb0NoZWNrIHtcbiAgQFZpZXdDaGlsZHJlbignZmlsdGVySW5wdXQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgZmlsdGVySW5wdXRzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cbiAgQElucHV0KClcbiAgY29uZmlnOiBOb3ZvVGFibGVDb25maWcgPSB7fTtcbiAgQElucHV0KClcbiAgY29sdW1uczogQXJyYXk8YW55PjtcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2tpcFNvcnRBbmRGaWx0ZXJDbGVhcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBtb2RlOiBOb3ZvVGFibGVNb2RlID0gTm92b1RhYmxlTW9kZS5WSUVXO1xuICBASW5wdXQoKVxuICBlZGl0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICByb3dJZGVudGlmaWVyOiBzdHJpbmcgPSAnaWQnO1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmcgPSAndGFibGUnO1xuXG4gIEBPdXRwdXQoKVxuICBvblJvd0NsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIG9uUm93U2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIG9uVGFibGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIF9kYXRhUHJvdmlkZXI6IFBhZ2VkQXJyYXlDb2xsZWN0aW9uPGFueT47XG4gIF9yb3dzOiBBcnJheTxhbnk+ID0gW107XG4gIHNlbGVjdGVkOiBBcnJheTxhbnk+ID0gW107XG4gIGFjdGl2ZUlkOiBudW1iZXIgPSAwO1xuICBtYXN0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZXhwYW5kQWxsOiBib29sZWFuID0gZmFsc2U7XG4gIGluZGV0ZXJtaW5hdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbGFzdFBhZ2U6IG51bWJlciA9IDA7XG4gIHNlbGVjdGVkUGFnZUNvdW50OiBudW1iZXIgPSAwO1xuICBzaG93U2VsZWN0QWxsTWVzc2FnZTogYm9vbGVhbiA9IGZhbHNlO1xuICBjdXJyZW50U29ydENvbHVtbjogYW55O1xuICBwYWdlZERhdGE6IEFycmF5PGFueT4gPSBbXTtcbiAgcGFnZVNlbGVjdGVkOiBhbnk7XG4gIC8vIE1hcCB0byBrZWVwIHRyYWNrIG9mIHdoYXQgZHJvcGRvd25zIGFyZSB0b2dnbGVkXG4gIC8vIFVzZWQgdG8gcHJvcGVybHkgKm5nSWYgdGhlIDxsaXN0PiBzbyB0aGF0IHRoZSBrZWVwRmlsdGVyRm9jdXNlZCBEaXJlY3RpdmVcbiAgLy8gd2lsbCBwcm9wZXJseSBmaXJlIHRoZSBuZ0FmdGVyVmlld0luaXQgZXZlbnRcbiAgdG9nZ2xlZERyb3Bkb3duTWFwOiBhbnkgPSB7fTtcbiAgcHVibGljIE5vdm9UYWJsZU1vZGUgPSBOb3ZvVGFibGVNb2RlO1xuICBwdWJsaWMgdGFibGVGb3JtOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcbiAgcHVibGljIHRvYXN0OiB7IHRoZW1lOiBzdHJpbmc7IGljb246IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nIH07XG4gIHB1YmxpYyBmb290ZXJzID0gW107XG4gIHB1YmxpYyBncm9zc0ZsYWdUb0F2b2lkVGhlVGFibGVGcm9tQmVpbmdVZ2x5V2hlbkhpZGluZ1RoZVRvYXN0OiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IHJvd3Mocm93czogQXJyYXk8YW55Pikge1xuICAgIHRoaXMuZGF0YVByb3ZpZGVyID0gcm93cztcbiAgICBpZiAocm93cyAmJiByb3dzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0dXBDb2x1bW5EZWZhdWx0cygpO1xuICAgIH1cbiAgICAvLyB0aGlzIGlzIGEgdGVtcG9yYXJ5L2hhY2t5IGZpeCB1bnRpbCBhc3luYyBkYXRhbG9hZGluZyBpcyBoYW5kbGVkIHdpdGhpbiB0aGUgdGFibGVcbiAgICBpZiAoIXRoaXMuc2tpcFNvcnRBbmRGaWx0ZXJDbGVhcikge1xuICAgICAgdGhpcy5jbGVhckFsbFNvcnRBbmRGaWx0ZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvd3M7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGF0YVByb3ZpZGVyKGRwOiBhbnkpIHtcbiAgICB0aGlzLl9kYXRhUHJvdmlkZXIgPSBBcnJheS5pc0FycmF5KGRwKSA/IG5ldyBQYWdlZEFycmF5Q29sbGVjdGlvbjxhbnk+KGRwKSA6IGRwO1xuICAgIHRoaXMuX2RhdGFQcm92aWRlci5kYXRhQ2hhbmdlLnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpLnN1YnNjcmliZSgoZXZlbnQ6IENvbGxlY3Rpb25FdmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgQ29sbGVjdGlvbkV2ZW50LkNIQU5HRTpcbiAgICAgICAgICB0aGlzLl9yb3dzID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAvLyBTZXR1cCBmb3JtXG4gICAgICAgICAgdGhpcy50YWJsZUZvcm0gPSB0aGlzLmJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgcm93czogdGhpcy5idWlsZGVyLmFycmF5KFtdKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBSZW1vdmUgYWxsIHNlbGVjdGlvbiBvbiBzb3J0IGNoYW5nZSBpZiBzZWxlY3Rpb24gaXMgb25cbiAgICAgICAgICBpZiAodGhpcy5jb25maWcucm93U2VsZWN0aW9uU3R5bGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZWREYXRhID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHRoaXMucGFnZVNlbGVjdGVkID0gdGhpcy5wYWdlZERhdGEuZmlsdGVyKChyKSA9PiByLl9zZWxlY3RlZCk7XG4gICAgICAgICAgICB0aGlzLnJvd1NlbGVjdEhhbmRsZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRmluZCB0aGF0IGNvbHVtbnMgd2UgbWlnaHQgbmVlZCB0byBzdW0gdXAgdmlhIHRoZSBmb290ZXJcbiAgICAgICAgICBsZXQgY29sdW1uc1RvU3VtID0gW107XG4gICAgICAgICAgY29uc3QgY29sdW1uU3VtcyA9IHt9O1xuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5mb290ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5mb290ZXJzLmZvckVhY2goKGNvbmZpZykgPT4ge1xuICAgICAgICAgICAgICBjb2x1bW5zVG9TdW0ucHVzaCguLi5jb25maWcuY29sdW1ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIE9ubHkgaGF2ZSB1bmlxdWUgY29sdW1ucywgZmlsdGVyIG91dCBkdXBsaWNhdGVzXG4gICAgICAgICAgICBjb2x1bW5zVG9TdW0gPSBjb2x1bW5zVG9TdW0uZmlsdGVyKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IGFycmF5LmluZGV4T2YoaXRlbSkgPT09IGluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gTWFrZSBhIGZvcm0gZm9yIGVhY2ggcm93XG4gICAgICAgICAgY29uc3QgdGFibGVGb3JtUm93cyA9IDxGb3JtQXJyYXk+dGhpcy50YWJsZUZvcm0uY29udHJvbHNbJ3Jvd3MnXTtcbiAgICAgICAgICB0aGlzLl9yb3dzLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRyb2xzID0gW107XG4gICAgICAgICAgICByb3cuY29udHJvbHMgPSB7fTtcbiAgICAgICAgICAgIHJvdy5fZWRpdGluZyA9IHt9O1xuICAgICAgICAgICAgcm93Ll9leHBhbmRlZCA9IHRoaXMuY29uZmlnLmV4cGFuZEFsbDtcbiAgICAgICAgICAgIHJvdy5yb3dJZCA9IHRoaXMuX3Jvd3MubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAvLyBVc2UgdGhlIGNvbnRyb2wgcGFzc2VkIG9yIHVzZSBhIFJlYWRPbmx5Q29udHJvbCBzbyB0aGF0IHRoZSBmb3JtIGhhcyB0aGUgdmFsdWVzXG4gICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2wgPSBjb2x1bW4uZWRpdG9yQ29uZmlnXG4gICAgICAgICAgICAgICAgPyBDb250cm9sRmFjdG9yeS5jcmVhdGUoY29sdW1uLmVkaXRvclR5cGUsIGNvbHVtbi5lZGl0b3JDb25maWcpXG4gICAgICAgICAgICAgICAgOiBuZXcgUmVhZE9ubHlDb250cm9sKHsga2V5OiBjb2x1bW4ubmFtZSB9KTtcbiAgICAgICAgICAgICAgcm93LmNvbnRyb2xzW2NvbHVtbi5uYW1lXSA9IGNvbnRyb2w7XG4gICAgICAgICAgICAgIHJvd0NvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZm9ybVV0aWxzLnNldEluaXRpYWxWYWx1ZXMocm93Q29udHJvbHMsIHJvdywgZmFsc2UpO1xuICAgICAgICAgICAgdGFibGVGb3JtUm93cy5wdXNoKHRoaXMuZm9ybVV0aWxzLnRvRm9ybUdyb3VwKHJvd0NvbnRyb2xzKSk7XG4gICAgICAgICAgICAvLyBTZXR1cCB0aGUgdG90YWwgZm9vdGVyIGlmIGNvbmZpZ3VyZWRcbiAgICAgICAgICAgIC8vIEFycmF5IG9mIGtleXMgdG8gdG90YWxcbiAgICAgICAgICAgIGlmIChjb2x1bW5zVG9TdW0ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgIGNvbHVtbnNUb1N1bS5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoSGVscGVycy5pc0JsYW5rKGNvbHVtblN1bXNbY29sdW1uXSkpIHtcbiAgICAgICAgICAgICAgICAgIGNvbHVtblN1bXNbY29sdW1uXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbHVtblN1bXNbY29sdW1uXSArPSByb3dbY29sdW1uXTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gTm92b1RhYmxlTW9kZS5FRElUKSB7XG4gICAgICAgICAgICB0aGlzLnNldFRhYmxlRWRpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBTZXR1cCB0aGUgZm9vdGVycyAoaWYgYW55KVxuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5mb290ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmZvb3RlcnMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmZvb3RlcnMuZm9yRWFjaCgoZm9vdGVyQ29uZmlnLCBmb290ZXJDb25maWdJbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBmb290ZXIgPSB7fTtcbiAgICAgICAgICAgICAgZm9vdGVyW2Zvb3RlckNvbmZpZy5sYWJlbENvbHVtbl0gPSBmb290ZXJDb25maWcubGFiZWw7XG4gICAgICAgICAgICAgIGZvb3RlckNvbmZpZy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmb290ZXJDb25maWcubWV0aG9kID09PSAnQVZHJyAmJiB0aGlzLl9yb3dzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgZm9vdGVyW2NvbHVtbl0gPSBjb2x1bW5TdW1zW2NvbHVtbl0gLyB0aGlzLl9yb3dzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZm9vdGVyW2NvbHVtbl0gPSBjb2x1bW5TdW1zW2NvbHVtbl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy5mb290ZXJzLnB1c2goZm9vdGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGhpcy5jb25maWcucGFnaW5nKSB7XG4gICAgICB0aGlzLl9kYXRhUHJvdmlkZXIucGFnZSA9IHRoaXMuY29uZmlnLnBhZ2luZy5jdXJyZW50O1xuICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLnBhZ2VTaXplID0gdGhpcy5jb25maWcucGFnaW5nLml0ZW1zUGVyUGFnZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUGFnaW5nIHR1cm5lZCBvZmYsIHJldHVybiBiYXNpY2FsbHkgYWxsIG9mIHRoZSBkYXRhXG4gICAgICB0aGlzLl9kYXRhUHJvdmlkZXIucGFnZSA9IDE7XG4gICAgICB0aGlzLl9kYXRhUHJvdmlkZXIucGFnZVNpemUgPSA1MDA7XG4gICAgfVxuICAgIGlmIChkcCAmJiBkcC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldHVwQ29sdW1uRGVmYXVsdHMoKTtcbiAgICB9XG4gICAgdGhpcy5fZGF0YVByb3ZpZGVyLnJlZnJlc2goKTtcbiAgfVxuICBnZXQgZGF0YVByb3ZpZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhUHJvdmlkZXI7XG4gIH1cblxuICBnZXQgZWRpdGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSBOb3ZvVGFibGVNb2RlLkVESVQ7XG4gIH1cblxuICBnZXQgZm9ybVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnRhYmxlRm9ybS52YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHByaXZhdGUgZm9ybVV0aWxzOiBGb3JtVXRpbHMsIHByaXZhdGUgYnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICBub3RpZnkoJ1tEZXByZWNhdGVkXTogVGhlIHRhYmxlIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSBtaWdyYXRlIHRvIG5vdm8tZGF0YS10YWJsZXMhJyk7XG4gIH1cblxuICBvbkRyb3Bkb3duVG9nZ2xlZChldmVudCwgY29sdW1uKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGVkRHJvcGRvd25NYXBbY29sdW1uXSA9IGV2ZW50O1xuICB9XG5cbiAgZm9jdXNJbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maWx0ZXJJbnB1dHMgJiYgdGhpcy5maWx0ZXJJbnB1dHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmZpbHRlcklucHV0cy5mb3JFYWNoKChmaWx0ZXJJbnB1dCkgPT4ge1xuICAgICAgICBpZiAoZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpLCAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25QYWdlQ2hhbmdlKGV2ZW50KSB7XG4gICAgLy8gdGhpcy5kYXRhUHJvdmlkZXIucGFnZSA9IGV2ZW50LnBhZ2U7XG4gICAgLy8gdGhpcy5kYXRhUHJvdmlkZXIucGFnZVNpemUgPSBldmVudC5pdGVtc1BlclBhZ2U7XG4gIH1cblxuICBnZXRPcHRpb25EYXRhQXV0b21hdGlvbklkKG9wdGlvbikge1xuICAgIGlmICghSGVscGVycy5pc0JsYW5rKG9wdGlvbi52YWx1ZSkpIHtcbiAgICAgIHJldHVybiBvcHRpb24udmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb247XG4gIH1cblxuICBzZXR1cENvbHVtbkRlZmF1bHRzKCkge1xuICAgIC8vIENoZWNrIGNvbHVtbnMgZm9yIGNlbGwgb3B0aW9uIHR5cGVzXG4gICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xuICAgICAgaWYgKGNvbHVtbiAmJiBjb2x1bW4udHlwZSkge1xuICAgICAgICBzd2l0Y2ggKGNvbHVtbi50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICAvLyBTZXQgb3B0aW9ucyBiYXNlZCBvbiBkYXRlcyBpZiB0aGVyZSBhcmUgbm9uZVxuICAgICAgICAgICAgY29sdW1uLm9wdGlvbnMgPSBjb2x1bW4ub3B0aW9ucyB8fCB0aGlzLmdldERlZmF1bHRPcHRpb25zKGNvbHVtbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBpZiAodGhpcy5jb25maWcucGFnaW5nICYmIHRoaXMuY29uZmlnLnBhZ2luZy5jdXJyZW50ICE9PSB0aGlzLmxhc3RQYWdlKSB7XG4gICAgICB0aGlzLnJvd1NlbGVjdEhhbmRsZXIoKTtcbiAgICAgIHRoaXMuc2hvd1NlbGVjdEFsbE1lc3NhZ2UgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5sYXN0UGFnZSA9IHRoaXMuY29uZmlnLnBhZ2luZyA/IHRoaXMuY29uZmlnLnBhZ2luZy5jdXJyZW50IDogMTtcbiAgfVxuXG4gIGdldFBhZ2VTdGFydCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5wYWdpbmcgPyAodGhpcy5kYXRhUHJvdmlkZXIucGFnZSAtIDEpICogdGhpcy5kYXRhUHJvdmlkZXIucGFnZVNpemUgOiAwO1xuICB9XG5cbiAgZ2V0UGFnZUVuZCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5wYWdpbmcgJiYgdGhpcy5kYXRhUHJvdmlkZXIucGFnZVNpemUgPiAtMSA/IHRoaXMuZ2V0UGFnZVN0YXJ0KCkgKyB0aGlzLmRhdGFQcm92aWRlci5wYWdlU2l6ZSA6IHRoaXMucm93cy5sZW5ndGg7XG4gIH1cblxuICBnZXRSb3dDb250cm9sRm9ybShpKTogQWJzdHJhY3RDb250cm9sIHtcbiAgICBjb25zdCB0YWJsZUZvcm1Sb3dzID0gPEZvcm1BcnJheT50aGlzLnRhYmxlRm9ybS5jb250cm9sc1sncm93cyddO1xuICAgIHJldHVybiB0YWJsZUZvcm1Sb3dzLmNvbnRyb2xzW2ldO1xuICB9XG5cbiAgb25GaWx0ZXJDbGljayhjb2x1bW4sIGZpbHRlcikge1xuICAgIGlmIChmaWx0ZXIucmFuZ2UgJiYgIWNvbHVtbi5jYWxlbmRhclNob3cpIHtcbiAgICAgIGNvbHVtbi5jYWxlbmRlclNob3cgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb2x1bW4uZmlsdGVyKSAmJiBjb2x1bW4ubXVsdGlwbGUpIHtcbiAgICAgIGlmICh+Y29sdW1uLmZpbHRlci5pbmRleE9mKGZpbHRlcikpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGZpbHRlclxuICAgICAgICBjb2x1bW4uZmlsdGVyLnNwbGljZShjb2x1bW4uZmlsdGVyLmluZGV4T2YoZmlsdGVyKSwgMSk7XG4gICAgICAgIGlmIChmaWx0ZXIucmFuZ2UpIHtcbiAgICAgICAgICBjb2x1bW4uY2FsZW5kZXJTaG93ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29sdW1uLmZpbHRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb2x1bW4uZmlsdGVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQWRkIGZpbHRlclxuICAgICAgICBjb2x1bW4uZmlsdGVyLnB1c2goZmlsdGVyKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbHVtbi5tdWx0aXBsZSkge1xuICAgICAgY29sdW1uLmZpbHRlciA9IG5ldyBBcnJheSgpO1xuICAgICAgY29sdW1uLmZpbHRlci5wdXNoKEhlbHBlcnMuaXNCbGFuayhmaWx0ZXIudmFsdWUpID8gZmlsdGVyIDogZmlsdGVyLnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sdW1uLmZpbHRlciA9IEhlbHBlcnMuaXNCbGFuayhmaWx0ZXIudmFsdWUpID8gZmlsdGVyIDogZmlsdGVyLnZhbHVlO1xuICAgIH1cbiAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlKCk7XG4gIH1cblxuICBvbkZpbHRlckNsZWFyKGNvbHVtbjogYW55KTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb2x1bW4uZmlsdGVyID0gbnVsbDtcbiAgICAgIGNvbHVtbi5mcmVldGV4dEZpbHRlciA9IG51bGw7XG4gICAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlKCk7XG4gICAgICBpZiAoY29sdW1uLm9yaWdpbmFsT3B0aW9ucykge1xuICAgICAgICBjb2x1bW4ub3B0aW9ucyA9IGNvbHVtbi5vcmlnaW5hbE9wdGlvbnM7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjbGVhckFsbFNvcnRBbmRGaWx0ZXJzKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXJpbmcpIHtcbiAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgICAgY29sdW1uLmZpbHRlciA9IG51bGw7XG4gICAgICAgIGNvbHVtbi5zb3J0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBtZXRob2QgdXBkYXRlcyB0aGUgcm93IGRhdGEgdG8gcmVmbGVjdCB0aGUgYWN0aXZlIGZpbHRlcnMuXG4gICAqL1xuICBvbkZpbHRlckNoYW5nZShldmVudD86IEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmZpbHRlcmluZykge1xuICAgICAgLy8gQXJyYXkgb2YgZmlsdGVyc1xuICAgICAgY29uc3QgZmlsdGVycyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbCkgPT4gIUhlbHBlcnMuaXNFbXB0eShjb2wuZmlsdGVyKSk7XG4gICAgICBpZiAoZmlsdGVycy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHF1ZXJ5ID0ge307XG4gICAgICAgIGZvciAoY29uc3QgY29sdW1uIG9mIGZpbHRlcnMpIHtcbiAgICAgICAgICBpZiAoSGVscGVycy5pc0Z1bmN0aW9uKGNvbHVtbi5tYXRjaCkpIHtcbiAgICAgICAgICAgIHF1ZXJ5W2NvbHVtbi5uYW1lXSA9ICh2YWx1ZSwgcmVjb3JkKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBjb2x1bW4ubWF0Y2gocmVjb3JkLCBjb2x1bW4uZmlsdGVyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4ucHJlRmlsdGVyICYmIEhlbHBlcnMuaXNGdW5jdGlvbihjb2x1bW4ucHJlRmlsdGVyKSkge1xuICAgICAgICAgICAgcXVlcnkgPSBPYmplY3QuYXNzaWduKHt9LCBxdWVyeSwgY29sdW1uLnByZUZpbHRlcih0aGlzLmVzY2FwZUNoYXJhY3RlcnMoY29sdW1uLmZpbHRlcikpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY29sdW1uLmZpbHRlcikpIHtcbiAgICAgICAgICAgIC8vIFRoZSBmaWx0ZXJzIGFyZSBhbiBhcnJheSAobXVsdGktc2VsZWN0KSwgY2hlY2sgdmFsdWVcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0gY29sdW1uLmZpbHRlcjtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgYW4gYXJyYXkgb2Yge3ZhbHVlOiAnJywgbGFiZWxzOiAnJ31cbiAgICAgICAgICAgIGlmIChvcHRpb25zWzBdLnZhbHVlIHx8IG9wdGlvbnNbMF0ubGFiZWwpIHtcbiAgICAgICAgICAgICAgb3B0aW9ucyA9IGNvbHVtbi5maWx0ZXIubWFwKChvcHQpID0+IG9wdC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWVyeVtjb2x1bW4ubmFtZV0gPSB7IGFueTogb3B0aW9ucyB9O1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29sdW1uLnR5cGUgJiYgY29sdW1uLnR5cGUgPT09ICdkYXRlJykge1xuICAgICAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXIuc3RhcnREYXRlICYmIGNvbHVtbi5maWx0ZXIuZW5kRGF0ZSkge1xuICAgICAgICAgICAgICBxdWVyeVtjb2x1bW4ubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgbWluOiBkYXRlRm5zLnN0YXJ0T2ZEYXkoY29sdW1uLmZpbHRlci5zdGFydERhdGUpLFxuICAgICAgICAgICAgICAgIG1heDogZGF0ZUZucy5zdGFydE9mRGF5KGRhdGVGbnMuYWRkRGF5cyhkYXRlRm5zLnN0YXJ0T2ZEYXkoY29sdW1uLmZpbHRlci5lbmREYXRlKSwgMSkpLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcXVlcnlbY29sdW1uLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgIG1pbjogY29sdW1uLmZpbHRlci5taW4gPyBkYXRlRm5zLmFkZERheXMoZGF0ZUZucy5zdGFydE9mVG9kYXkoKSwgY29sdW1uLmZpbHRlci5taW4pIDogZGF0ZUZucy5zdGFydE9mVG9kYXkoKSxcbiAgICAgICAgICAgICAgICBtYXg6IGNvbHVtbi5maWx0ZXIubWF4ID8gZGF0ZUZucy5hZGREYXlzKGRhdGVGbnMuc3RhcnRPZlRvbW9ycm93KCksIGNvbHVtbi5maWx0ZXIubWF4KSA6IGRhdGVGbnMuc3RhcnRPZlRvbW9ycm93KCksXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXJ5W2NvbHVtbi5uYW1lXSA9IGNvbHVtbi5maWx0ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChIZWxwZXJzLmlzRnVuY3Rpb24odGhpcy5jb25maWcuZmlsdGVyaW5nKSkge1xuICAgICAgICAgIHRoaXMuY29uZmlnLmZpbHRlcmluZyhxdWVyeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLmZpbHRlciA9IHF1ZXJ5O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9kYXRhUHJvdmlkZXIuZmlsdGVyID0ge307XG4gICAgICB9XG4gICAgICAvLyBUcmlja2xlIGRvd24gdG8ga2VlcCBzb3J0XG4gICAgICAvLyB0aGlzLm9uU29ydENoYW5nZSh0aGlzLmN1cnJlbnRTb3J0Q29sdW1uKTtcbiAgICAgIHRoaXMuZmlyZVRhYmxlQ2hhbmdlRXZlbnQoKTtcblxuICAgICAgLy8gSWYgcGFnaW5nLCByZXNldCBwYWdlXG4gICAgICBpZiAodGhpcy5jb25maWcucGFnaW5nKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLnBhZ2luZy5jdXJyZW50ID0gMTtcbiAgICAgIH1cbiAgICAgIC8vIFJlbW92ZSBhbGwgc2VsZWN0aW9uIG9uIHNvcnQgY2hhbmdlIGlmIHNlbGVjdGlvbiBpcyBvblxuICAgICAgaWYgKHRoaXMuY29uZmlnLnJvd1NlbGVjdGlvblN0eWxlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlc2NhcGVDaGFyYWN0ZXJzKGZpbHRlcikge1xuICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGZpbHRlci5yZXBsYWNlKC8nL2csICdcXCdcXCcnKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlcjtcbiAgfVxuXG4gIGlzRmlsdGVyQWN0aXZlKGNvbHVtbiwgZmlsdGVyKTogYm9vbGVhbiB7XG4gICAgLy8gVE9ETzogVGhpcyBuZWVkcyB0byBiZSByZWZhY3RvcmVkXG4gICAgbGV0IGlzQWN0aXZlID0gZmFsc2U7XG4gICAgaWYgKGNvbHVtbiAmJiAhSGVscGVycy5pc0JsYW5rKGNvbHVtbi5maWx0ZXIpICYmICFIZWxwZXJzLmlzQmxhbmsoZmlsdGVyKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29sdW1uLmZpbHRlcikpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWx0ZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaXNBY3RpdmUgPSBjb2x1bW4uZmlsdGVyLnNvbWUoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmxhYmVsID09PSBmaWx0ZXIubGFiZWw7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNBY3RpdmUgPSBjb2x1bW4uZmlsdGVyLmluY2x1ZGVzKGZpbHRlcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29sdW1uLmZpbHRlciA9PT0gdHlwZW9mIGZpbHRlcikge1xuICAgICAgICAgIGlzQWN0aXZlID0gY29sdW1uLmZpbHRlciA9PT0gZmlsdGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlzQWN0aXZlID0gY29sdW1uLmZpbHRlciA9PT0gZmlsdGVyLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc0FjdGl2ZTtcbiAgfVxuXG4gIG9uU29ydENoYW5nZShjb2x1bW4pIHtcbiAgICB0aGlzLmN1cnJlbnRTb3J0Q29sdW1uID0gY29sdW1uO1xuICAgIGNvbnN0IHNvcnRlZENvbHVtbnM6IGFueSA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKHRoaXNDb2x1bW4pID0+IHtcbiAgICAgIHJldHVybiB0aGlzQ29sdW1uLnNvcnQgJiYgdGhpc0NvbHVtbiAhPT0gdGhpcy5jdXJyZW50U29ydENvbHVtbjtcbiAgICB9KTtcbiAgICBmb3IgKGNvbnN0IHNvcnRlZENvbHVtbiBvZiBzb3J0ZWRDb2x1bW5zKSB7XG4gICAgICBzb3J0ZWRDb2x1bW4uc29ydCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGNvbHVtbikge1xuICAgICAgaWYgKEhlbHBlcnMuaXNGdW5jdGlvbih0aGlzLmNvbmZpZy5zb3J0aW5nKSkge1xuICAgICAgICB0aGlzLmNvbmZpZy5zb3J0aW5nKCk7XG4gICAgICB9IGVsc2UgaWYgKEhlbHBlcnMuaXNGdW5jdGlvbihjb2x1bW4ucHJlU29ydCkpIHtcbiAgICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyLnNvcnQgPSBbXS5jb25jYXQoY29sdW1uLnByZVNvcnQoY29sdW1uKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9kYXRhUHJvdmlkZXIuc29ydCA9IFt7IGZpZWxkOiBjb2x1bW4uY29tcGFyZSB8fCBjb2x1bW4ubmFtZSwgcmV2ZXJzZTogY29sdW1uLnNvcnQgPT09ICdkZXNjJyB9XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGaXJlIHRhYmxlIGNoYW5nZSBldmVudFxuICAgIC8vIHRoaXMuZmlyZVRhYmxlQ2hhbmdlRXZlbnQoKTtcblxuICAgIC8vIElmIHBhZ2luZywgcmVzZXQgcGFnZVxuICAgIGlmICh0aGlzLmNvbmZpZy5wYWdpbmcpIHtcbiAgICAgIHRoaXMuY29uZmlnLnBhZ2luZy5jdXJyZW50ID0gMTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWxsIHNlbGVjdGlvbiBvbiBzb3J0IGNoYW5nZSBpZiBzZWxlY3Rpb24gaXMgb25cbiAgICBpZiAodGhpcy5jb25maWcucm93U2VsZWN0aW9uU3R5bGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBmaXJlVGFibGVDaGFuZ2VFdmVudCgpIHtcbiAgICAvLyBDb25zdHJ1Y3QgYSB0YWJsZSBjaGFuZ2Ugb2JqZWN0XG4gICAgY29uc3Qgb25UYWJsZUNoYW5nZTogYW55ID0ge307XG4gICAgY29uc3QgZmlsdGVycyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoKGNvbCkgPT4gY29sLmZpbHRlciAmJiBjb2wuZmlsdGVyLmxlbmd0aCk7XG4gICAgb25UYWJsZUNoYW5nZS5maWx0ZXIgPSBmaWx0ZXJzLmxlbmd0aCA/IGZpbHRlcnMgOiBmYWxzZTtcbiAgICBvblRhYmxlQ2hhbmdlLnNvcnQgPSB0aGlzLmN1cnJlbnRTb3J0Q29sdW1uID8gdGhpcy5jdXJyZW50U29ydENvbHVtbiA6IGZhbHNlO1xuICAgIG9uVGFibGVDaGFuZ2Uucm93cyA9IHRoaXMucm93cztcblxuICAgIC8vIEVtaXQgZXZlbnRcbiAgICB0aGlzLm9uVGFibGVDaGFuZ2UuZW1pdChvblRhYmxlQ2hhbmdlKTtcbiAgfVxuXG4gIGZpbmRDb2x1bW5JbmRleCh2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5jb2x1bW5zW2ldLm5hbWUgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIG9uT3JkZXJDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBvbGRJbmRleCA9IHRoaXMuZmluZENvbHVtbkluZGV4KGV2ZW50LmZpcnN0Lm5hbWUpO1xuICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5maW5kQ29sdW1uSW5kZXgoZXZlbnQuc2Vjb25kLm5hbWUpO1xuICAgIHRoaXMuY29sdW1ucy5zcGxpY2UobmV3SW5kZXgsIDAsIHRoaXMuY29sdW1ucy5zcGxpY2Uob2xkSW5kZXgsIDEpWzBdKTtcbiAgICB0aGlzLm9uU29ydENoYW5nZSh0aGlzLmN1cnJlbnRTb3J0Q29sdW1uKTtcbiAgfVxuXG4gIGV4cGFuZEFsbE9uUGFnZShleHBhbmRlZCkge1xuICAgIHRoaXMuY29uZmlnLmV4cGFuZEFsbCA9ICFleHBhbmRlZDtcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiB0aGlzLmRhdGFQcm92aWRlci5saXN0KSB7XG4gICAgICByb3cuX2V4cGFuZGVkID0gdGhpcy5jb25maWcuZXhwYW5kQWxsO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdFBhZ2UoZGF0YT86IGFueSkge1xuICAgIGlmICghdGhpcy5tYXN0ZXIpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsKGZhbHNlKTtcbiAgICAgIC8vIE9ubHkgc2hvdyB0aGUgc2VsZWN0IGFsbCBtZXNzYWdlIHdoZW4gdGhlcmUgaXMgb25seSBvbmUgbmV3IHBhZ2Ugc2VsZWN0ZWQgYXQgYSB0aW1lXG4gICAgICB0aGlzLnNlbGVjdGVkUGFnZUNvdW50ID0gdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCA+IDAgPyB0aGlzLnNlbGVjdGVkUGFnZUNvdW50IC0gMSA6IDA7XG4gICAgICB0aGlzLnNob3dTZWxlY3RBbGxNZXNzYWdlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgLy8gdGhpcy5wYWdlZERhdGEgPSB0aGlzLnJvd3Muc2xpY2UodGhpcy5nZXRQYWdlU3RhcnQoKSwgdGhpcy5nZXRQYWdlRW5kKCkpO1xuICAgICAgZm9yIChjb25zdCByb3cgb2YgdGhpcy5wYWdlZERhdGEpIHtcbiAgICAgICAgcm93Ll9zZWxlY3RlZCA9IHRoaXMubWFzdGVyO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuZGF0YVByb3ZpZGVyLmxpc3QuZmlsdGVyKChyKSA9PiByLl9zZWxlY3RlZCk7XG4gICAgICB0aGlzLnBhZ2VTZWxlY3RlZCA9IHRoaXMucGFnZWREYXRhLmZpbHRlcigocikgPT4gci5fc2VsZWN0ZWQpO1xuICAgICAgdGhpcy5lbWl0U2VsZWN0ZWQodGhpcy5zZWxlY3RlZCk7XG4gICAgICAvLyBPbmx5IHNob3cgdGhlIHNlbGVjdCBhbGwgbWVzc2FnZSB3aGVuIHRoZXJlIGlzIG9ubHkgb25lIG5ldyBwYWdlIHNlbGVjdGVkIGF0IGEgdGltZVxuICAgICAgdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCsrO1xuICAgICAgdGhpcy5zaG93U2VsZWN0QWxsTWVzc2FnZSA9IHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgPT09IDEgJiYgdGhpcy5zZWxlY3RlZC5sZW5ndGggIT09IHRoaXMuZGF0YVByb3ZpZGVyLnRvdGFsO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEFsbCh2YWx1ZSkge1xuICAgIHRoaXMubWFzdGVyID0gdmFsdWU7XG4gICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCByb3cgb2YgdGhpcy5kYXRhUHJvdmlkZXIubGlzdCkge1xuICAgICAgcm93Ll9zZWxlY3RlZCA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWUgPyB0aGlzLmRhdGFQcm92aWRlci5saXN0IDogW107XG4gICAgdGhpcy5zaG93U2VsZWN0QWxsTWVzc2FnZSA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgPSB0aGlzLnNlbGVjdGVkUGFnZUNvdW50ID4gMCA/IHRoaXMuc2VsZWN0ZWRQYWdlQ291bnQgLSAxIDogMDtcbiAgICB0aGlzLnJvd1NlbGVjdEhhbmRsZXIoKTtcbiAgfVxuXG4gIHJvd1NlbGVjdEhhbmRsZXIoZGF0YT86IGFueSkge1xuICAgIC8vIHRoaXMucGFnZWREYXRhID0gdGhpcy5yb3dzLnNsaWNlKHRoaXMuZ2V0UGFnZVN0YXJ0KCksIHRoaXMuZ2V0UGFnZUVuZCgpKTtcbiAgICB0aGlzLnBhZ2VTZWxlY3RlZCA9IHRoaXMucGFnZWREYXRhLmZpbHRlcigocikgPT4gci5fc2VsZWN0ZWQpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmRhdGFQcm92aWRlci5saXN0LmZpbHRlcigocikgPT4gci5fc2VsZWN0ZWQpO1xuICAgIGlmICh0aGlzLnBhZ2VTZWxlY3RlZC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMubWFzdGVyID0gZmFsc2U7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGFnZVNlbGVjdGVkLmxlbmd0aCA9PT0gdGhpcy5wYWdlZERhdGEubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1hc3RlciA9IHRydWU7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXN0ZXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IHRydWU7XG5cbiAgICAgIC8vIEJyZWFraW5nIHRoZSBzZWxlY3RlZCBwYWdlIGNvdW50XG4gICAgICB0aGlzLnNob3dTZWxlY3RBbGxNZXNzYWdlID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbGVjdGVkUGFnZUNvdW50ID0gdGhpcy5zZWxlY3RlZFBhZ2VDb3VudCA+IDAgPyB0aGlzLnNlbGVjdGVkUGFnZUNvdW50IC0gMSA6IDA7XG4gICAgfVxuICAgIHRoaXMuZW1pdFNlbGVjdGVkKHRoaXMuc2VsZWN0ZWQpO1xuICB9XG5cbiAgZW1pdFNlbGVjdGVkKHNlbGVjdGVkKSB7XG4gICAgdGhpcy5vblJvd1NlbGVjdC5lbWl0KHsgbGVuZ3RoOiBzZWxlY3RlZC5sZW5ndGgsIHNlbGVjdGVkIH0pO1xuICB9XG5cbiAgcm93Q2xpY2tIYW5kbGVyKHJvdykge1xuICAgIGlmICh0aGlzLmNvbmZpZy5yb3dTZWxlY3QpIHtcbiAgICAgIHRoaXMuYWN0aXZlSWQgPSByb3cuaWQgfHwgMDtcbiAgICAgIHRoaXMub25Sb3dDbGljay5lbWl0KHJvdyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGVmYXVsdE9wdGlvbnMoY29sdW1uKSB7XG4gICAgLy8gVE9ETyAtIG5lZWRzIHRvIGNvbWUgZnJvbSBsYWJlbCBzZXJ2aWNlIC0gaHR0cHM6Ly9naXRodWIuY29tL2J1bGxob3JuL25vdm8tZWxlbWVudHMvaXNzdWVzLzExNlxuICAgIGNvbnN0IG9wdHM6IGFueVtdID0gW1xuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDFEYXksIG1pbjogLTEsIG1heDogMCB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMucGFzdDdEYXlzLCBtaW46IC03LCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QzMERheXMsIG1pbjogLTMwLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3Q5MERheXMsIG1pbjogLTkwLCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLnBhc3QxWWVhciwgbWluOiAtMzY2LCBtYXg6IDAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQxRGF5LCBtaW46IDAsIG1heDogMSB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDdEYXlzLCBtaW46IDAsIG1heDogNyB9LFxuICAgICAgeyBsYWJlbDogdGhpcy5sYWJlbHMubmV4dDMwRGF5cywgbWluOiAwLCBtYXg6IDMwIH0sXG4gICAgICB7IGxhYmVsOiB0aGlzLmxhYmVscy5uZXh0OTBEYXlzLCBtaW46IDAsIG1heDogOTAgfSxcbiAgICAgIHsgbGFiZWw6IHRoaXMubGFiZWxzLm5leHQxWWVhciwgbWluOiAwLCBtYXg6IDM2NiB9LFxuICAgIF07XG5cbiAgICBpZiAoY29sdW1uICYmIGNvbHVtbi5yYW5nZSkge1xuICAgICAgb3B0cy5wdXNoKHtcbiAgICAgICAgbGFiZWw6IHRoaXMubGFiZWxzLmN1c3RvbURhdGVSYW5nZSxcbiAgICAgICAgcmFuZ2U6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdHM7XG4gIH1cblxuICBvbkNhbGVuZGVyU2VsZWN0KGNvbHVtbiwgZXZlbnQpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChldmVudC5zdGFydERhdGUgJiYgZXZlbnQuZW5kRGF0ZSkge1xuICAgICAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlKCk7XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25GaWx0ZXJLZXl3b3Jkcyhjb25maWcpIHtcbiAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5maWx0ZXJpbmcgJiYgY29uZmlnLmZpbHRlcmluZy5mcmVldGV4dEZpbHRlcikge1xuICAgICAgY29uc3QgZmlsdGVyS2V5d29yZHMgPSBjb25maWcuZmlsdGVyaW5nLmZyZWV0ZXh0RmlsdGVyLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoIWNvbmZpZy5maWx0ZXJpbmcub3JpZ2luYWxPcHRpb25zKSB7XG4gICAgICAgIGNvbmZpZy5maWx0ZXJpbmcub3JpZ2luYWxPcHRpb25zID0gY29uZmlnLmZpbHRlcmluZy5vcHRpb25zO1xuICAgICAgfVxuICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IGNvbmZpZy5maWx0ZXJpbmcub3JpZ2luYWxPcHRpb25zLmZpbHRlcigob3B0aW9uKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG9wdGlvbiAmJiBvcHRpb24ubGFiZWwgPyBvcHRpb24ubGFiZWwgOiBvcHRpb247XG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKSA/IHZhbHVlLnRvTG93ZXJDYXNlKCkgOiB2YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBmaWx0ZXJLZXl3b3Jkcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKH52YWx1ZS5pbmRleE9mKGZpbHRlcktleXdvcmRzKSB8fCB+dmFsdWUuaW5kZXhPZihmaWx0ZXJLZXl3b3JkcykpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIGNvbmZpZy5maWx0ZXJpbmcub3B0aW9ucyA9IG5ld09wdGlvbnM7XG4gICAgICBjb25maWcuZmlsdGVyaW5nLmZpbHRlciA9IGNvbmZpZy5maWx0ZXJpbmcuZnJlZXRleHRGaWx0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy5maWx0ZXJpbmcub3B0aW9ucyA9IGNvbmZpZy5maWx0ZXJpbmcub3JpZ2luYWxPcHRpb25zO1xuICAgIH1cbiAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFNldHMgdGhlIFRhYmxlIGludG8gRURJVCBtb2RlLCBiYXNlZCBvbiB0aGUgcm93L2NvbHVtbiBwYXNzZWQgeW91IGNhbiBlbnRlciBpbiBhIGZldyBzdGF0ZXNcbiAgICogKDEpIHNldFRhYmxlRWRpdCgpIC0gZG9uJ3QgcGFzcyBhbnkgdG8gcHV0IHRoZSBGVUxMIHRhYmxlIGludG8gZWRpdCBtb2RlXG4gICAqICgyKSBzZXRUYWJsZUVkaXQoMSkgLSBwYXNzIG9ubHkgcm93IHRvIHB1dCB0aGF0IEZVTEwgcm93IG9mIHRoZSB0YWJsZSBpbnRvIGVkaXQgbW9kZVxuICAgKiAoMykgc2V0VGFibGVFZGl0KDEsIDEpIC0gcGFzcyByb3cgYW5kIGNvbHVtbiB0byBwdXQgdGhhdCBjb2x1bW4gb2YgdGhlIHJvdyBvZiB0aGUgdGFibGUgaW50byBlZGl0IG1vZGVcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICovXG4gIHNldFRhYmxlRWRpdChyb3dOdW1iZXI/OiBudW1iZXIsIGNvbHVtbk51bWJlcj86IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubW9kZSA9IE5vdm9UYWJsZU1vZGUuRURJVDtcbiAgICB0aGlzLl9kYXRhUHJvdmlkZXIuZWRpdCgpO1xuICAgIHRoaXMuX3Jvd3MuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgcm93Ll9lZGl0aW5nID0gcm93Ll9lZGl0aW5nIHx8IHt9O1xuICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbiwgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi52aWV3T25seSkge1xuICAgICAgICAgIHJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV0gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChIZWxwZXJzLmlzRW1wdHkocm93TnVtYmVyKSAmJiBIZWxwZXJzLmlzRW1wdHkoY29sdW1uTnVtYmVyKSkge1xuICAgICAgICAgIHJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV0gPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCFIZWxwZXJzLmlzRW1wdHkocm93TnVtYmVyKSAmJiByb3dJbmRleCA9PT0gTnVtYmVyKHJvd051bWJlcikgJiYgSGVscGVycy5pc0VtcHR5KGNvbHVtbk51bWJlcikpIHtcbiAgICAgICAgICByb3cuX2VkaXRpbmdbY29sdW1uLm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAhSGVscGVycy5pc0VtcHR5KHJvd051bWJlcikgJiZcbiAgICAgICAgICAhSGVscGVycy5pc0VtcHR5KGNvbHVtbk51bWJlcikgJiZcbiAgICAgICAgICByb3dJbmRleCA9PT0gTnVtYmVyKHJvd051bWJlcikgJiZcbiAgICAgICAgICBjb2x1bW5JbmRleCA9PT0gTnVtYmVyKGNvbHVtbk51bWJlcilcbiAgICAgICAgKSB7XG4gICAgICAgICAgcm93Ll9lZGl0aW5nW2NvbHVtbi5uYW1lXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm93Ll9lZGl0aW5nW2NvbHVtbi5uYW1lXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gTGVhdmVzIGVkaXQgbW9kZSBmb3IgdGhlIFRhYmxlIGFuZCBwdXRzIGV2ZXJ5dGhpbmcgYmFjayB0byBWSUVXIG9ubHlcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICogQHBhcmFtIGNhbmNlbCAtIHdoZXRoZXIgb3Igbm90IHRvIHNhdmUgZGF0YSBvciB1bmRvXG4gICAqL1xuICBwcml2YXRlIGxlYXZlRWRpdE1vZGUoY2FuY2VsOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5tb2RlID0gTm92b1RhYmxlTW9kZS5WSUVXO1xuICAgIHRoaXMuX3Jvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICByb3cuX2VkaXRpbmcgPSByb3cuX2VkaXRpbmcgfHwge307XG4gICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgICAgIHJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV0gPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChjYW5jZWwpIHtcbiAgICAgIHRoaXMuX2RhdGFQcm92aWRlci51bmRvKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGFQcm92aWRlci5jb21taXQoKTtcbiAgICB9XG4gICAgdGhpcy5oaWRlVG9hc3RNZXNzYWdlKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEFkZHMgYSBuZXcgcm93IGludG8gdGhlIHRhYmxlIHRvIGJlIGVkaXRlZCwgY2FuIGJlIGNhbGxlZCBmcm9tIGEgbG9jYWwgcmVmZXJlbmNlIG9mIHRoZSB0YWJsZSBpbiB5b3VyIHRlbXBsYXRlXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICBhZGRFZGl0YWJsZVJvdyhkZWZhdWx0VmFsdWU6IGFueSA9IHt9KTogdm9pZCB7XG4gICAgY29uc3QgdGFibGVGb3JtUm93cyA9IDxGb3JtQXJyYXk+dGhpcy50YWJsZUZvcm0uY29udHJvbHNbJ3Jvd3MnXTtcbiAgICBjb25zdCByb3c6IGFueSA9IHt9O1xuICAgIGNvbnN0IHJvd0NvbnRyb2xzID0gW107XG4gICAgcm93LmNvbnRyb2xzID0ge307XG4gICAgcm93Ll9lZGl0aW5nID0ge307XG4gICAgcm93LnJvd0lkID0gdGhpcy5fcm93cy5sZW5ndGggKyAxO1xuICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcbiAgICAgIC8vIFVzZSB0aGUgY29udHJvbCBwYXNzZWQgb3IgdXNlIGEgUmVhZE9ubHlDb250cm9sIHNvIHRoYXQgdGhlIGZvcm0gaGFzIHRoZSB2YWx1ZXNcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBjb2x1bW4uZWRpdG9yQ29uZmlnXG4gICAgICAgID8gQ29udHJvbEZhY3RvcnkuY3JlYXRlKGNvbHVtbi5lZGl0b3JUeXBlLCBjb2x1bW4uZWRpdG9yQ29uZmlnKVxuICAgICAgICA6IG5ldyBSZWFkT25seUNvbnRyb2woeyBrZXk6IGNvbHVtbi5uYW1lIH0pO1xuICAgICAgY29udHJvbC52YWx1ZSA9IG51bGw7IC8vIHJlbW92ZSBjb3BpZWQgY29sdW1uIHZhbHVlXG4gICAgICByb3cuY29udHJvbHNbY29sdW1uLm5hbWVdID0gY29udHJvbDtcbiAgICAgIHJvdy5fZWRpdGluZ1tjb2x1bW4ubmFtZV0gPSAhY29sdW1uLnZpZXdPbmx5O1xuICAgICAgcm93Q29udHJvbHMucHVzaChjb250cm9sKTtcbiAgICB9KTtcbiAgICB0aGlzLmZvcm1VdGlscy5zZXRJbml0aWFsVmFsdWVzKHJvd0NvbnRyb2xzLCBkZWZhdWx0VmFsdWUsIGZhbHNlKTtcbiAgICB0YWJsZUZvcm1Sb3dzLnB1c2godGhpcy5mb3JtVXRpbHMudG9Gb3JtR3JvdXAocm93Q29udHJvbHMpKTtcbiAgICB0aGlzLl9yb3dzLnB1c2gocm93KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVmFsaWRhdGVzIHRoZSBGb3JtIGluc2lkZSBvZiB0aGUgVGFibGUsIGlmIHRoZXJlIGFyZSBlcnJvcnMgaXQgd2lsbCBkaXNwbGF5L3JldHVybiB0aGUgZXJyb3JzIGZvciBlYWNoIHJvdy5cbiAgICogSWYgdGhlcmUgYXJlIG5vIGVycm9ycywgdGhlbiBpdCB3aWxsIHJldHVybiBPTkxZIHRoZSBjaGFuZ2VkIGRhdGEgZm9yIGVhY2ggcm93LCB0aGUgZGF0YSByZXR1cm5lZCB3aWxsIGJlIGluIHRoZSBmb3JtOlxuICAgKiB7IGlkOiBJRF9PRl9SRUNPUkQsIGtleTogdmFsdWUgfSAtLSBkYXRhIHRoYXQgd2FzIHVwZGF0ZWRcbiAgICogeyBpZDogdW5kZWZpbmVkLCBrZXk6IHZhbHVlIH0gLS0gZGF0YSB0aGF0IHdhcyBhZGRlZFxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgdmFsaWRhdGVBbmRHZXRVcGRhdGVkRGF0YSgpOiB7IGNoYW5nZWQ/OiBhbnlbXTsgZXJyb3JzPzogeyBlcnJvcnM6IGFueTsgcm93OiBhbnk7IGluZGV4OiBudW1iZXIgfVtdIH0ge1xuICAgIGlmICh0aGlzLnRhYmxlRm9ybSAmJiB0aGlzLnRhYmxlRm9ybS5jb250cm9scyAmJiB0aGlzLnRhYmxlRm9ybS5jb250cm9sc1sncm93cyddKSB7XG4gICAgICBjb25zdCBjaGFuZ2VkUm93cyA9IFtdO1xuICAgICAgY29uc3QgZXJyb3JzID0gW107XG4gICAgICAvLyBHbyBvdmVyIHRoZSBGb3JtQXJyYXkncyBjb250cm9sc1xuICAgICAgKHRoaXMudGFibGVGb3JtLmNvbnRyb2xzWydyb3dzJ10gYXMgRm9ybUFycmF5KS5jb250cm9scy5mb3JFYWNoKChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBsZXQgY2hhbmdlZFJvdyA9IG51bGw7XG4gICAgICAgIGxldCBlcnJvciA9IG51bGw7XG4gICAgICAgIC8vIEdvIG92ZXIgdGhlIGZvcm0gZ3JvdXAgY29udHJvbHNcbiAgICAgICAgT2JqZWN0LmtleXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtR3JvdXAuY29udHJvbHNba2V5XTtcbiAgICAgICAgICAvLyBIYW5kbGUgdmFsdWUgY2hhbmdpbmdcbiAgICAgICAgICBpZiAoY29udHJvbCAmJiBjb250cm9sLmRpcnR5ICYmICFjb250cm9sLmVycm9ycykge1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2VkUm93KSB7XG4gICAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgSUQsIHNvIHdlIGhhdmUgc29tZSBrZXkgdG8gc2F2ZSBhZ2FpbnN0XG4gICAgICAgICAgICAgIGNoYW5nZWRSb3cgPSB7fTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jvd3NbaW5kZXhdLmlkKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZFJvdy5pZCA9IHRoaXMuX3Jvd3NbaW5kZXhdLmlkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBkaXJ0eSwgZ3JhYiB2YWx1ZSBvZmYgdGhlIGZvcm1cbiAgICAgICAgICAgIGNoYW5nZWRSb3dba2V5XSA9IHRoaXMudGFibGVGb3JtLnZhbHVlWydyb3dzJ11baW5kZXhdW2tleV07XG4gICAgICAgICAgICAvLyBTZXQgdmFsdWUgYmFjayB0byByb3cgKHNob3VsZCBiZSBhbHJlYWR5IGRvbmUgdmlhIHRoZSBzZXJ2ZXIgY2FsbCwgYnV0IGRvIGl0IGFueXdheSlcbiAgICAgICAgICAgIHRoaXMuX3Jvd3NbaW5kZXhdW2tleV0gPSBjaGFuZ2VkUm93W2tleV07XG4gICAgICAgICAgfSBlbHNlIGlmIChjb250cm9sICYmIGNvbnRyb2wuZXJyb3JzKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JzXG4gICAgICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICAgIGVycm9yID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvcltrZXldID0gY29udHJvbC5lcnJvcnM7XG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY2hhbmdlZFJvdykge1xuICAgICAgICAgIGNoYW5nZWRSb3dzLnB1c2goY2hhbmdlZFJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goeyBlcnJvcnM6IGVycm9yLCByb3c6IHRoaXMuX3Jvd3NbaW5kZXhdLCBpbmRleCB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXQgPSB7fTtcbiAgICAgIC8vIFJldHVybiBlcnJvcnMgaWYgYW55LCBvdGhlcndpc2UgcmV0dXJuIHRoZSBjaGFuZ2VkIHJvd3NcbiAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB7IGNoYW5nZWQ6IGNoYW5nZWRSb3dzIH07XG4gICAgICB9XG4gICAgICByZXR1cm4geyBlcnJvcnMgfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJlZnJlc2ggdGhlIGRhdGEgcHJvdmlkZXIgYW5kIGxlYXZlIGVkaXQgbW9kZVxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgY2FuY2VsRWRpdGluZygpOiB2b2lkIHtcbiAgICB0aGlzLmxlYXZlRWRpdE1vZGUodHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJlZnJlc2ggdGhlIGRhdGEgcHJvdmlkZXIgYW5kIGxlYXZlIGVkaXQgbW9kZVxuICAgKiBAbWVtYmVyT2YgTm92b1RhYmxlRWxlbWVudFxuICAgKi9cbiAgc2F2ZUNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5sZWF2ZUVkaXRNb2RlKGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRGlzcGxheXMgYSB0b2FzdCBtZXNzYWdlIGluc2lkZSBvZiB0aGUgdGFibGVcbiAgICogQG1lbWJlck9mIE5vdm9UYWJsZUVsZW1lbnRcbiAgICovXG4gIGRpc3BsYXlUb2FzdE1lc3NhZ2UodG9hc3Q6IHsgaWNvbjogc3RyaW5nOyB0aGVtZTogc3RyaW5nOyBtZXNzYWdlOiBzdHJpbmcgfSwgaGlkZURlbGF5PzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy50b2FzdCA9IHRvYXN0O1xuICAgIGlmIChoaWRlRGVsYXkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oaWRlVG9hc3RNZXNzYWdlKCksIGhpZGVEZWxheSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBGb3JjZSBoaWRlIHRoZSB0b2FzdCBtZXNzYWdlXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICBoaWRlVG9hc3RNZXNzYWdlKCk6IHZvaWQge1xuICAgIHRoaXMudG9hc3QgPSBudWxsO1xuICAgIC8vIEhhY2sgdG8gbWFrZSB0aGUgdGFibGUgZGlzcGxheSBwcm9wZXJseSBhZnRlciBoaWRpbmcgdGhlIHRvYXN0XG4gICAgdGhpcy5ncm9zc0ZsYWdUb0F2b2lkVGhlVGFibGVGcm9tQmVpbmdVZ2x5V2hlbkhpZGluZ1RoZVRvYXN0ID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZ3Jvc3NGbGFnVG9Bdm9pZFRoZVRhYmxlRnJvbUJlaW5nVWdseVdoZW5IaWRpbmdUaGVUb2FzdCA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBkaXNwbGF5IHRoZSBsb2FkaW5nIG92ZXJsYXkgb24gdGhlIHRhYmxlXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICB0b2dnbGVMb2FkaW5nKHNob3c6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBzaG93O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBoaWRlIGEgY29sdW1uIGluIGVkaXQgb3IgdmlldyBtb2RlXG4gICAqIEBtZW1iZXJPZiBOb3ZvVGFibGVFbGVtZW50XG4gICAqL1xuICBpc0NvbHVtbkhpZGRlbihjb2x1bW46IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVkaXRpbmcgPyAhIWNvbHVtbi5oaWRlQ29sdW1uT25FZGl0IDogISFjb2x1bW4uaGlkZUNvbHVtbk9uVmlldztcbiAgfVxufVxuIl19