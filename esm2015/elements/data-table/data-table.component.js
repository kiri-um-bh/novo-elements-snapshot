import { animate, state as animState, style, transition, trigger } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, HostBinding, Input, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NovoLabelService } from '../../services/novo-label-service';
import { notify } from '../../utils/notifier/notifier.util';
import { NovoTemplate } from '../common/novo-template/novo-template.directive';
import { DataTableSource } from './data-table.source';
import { StaticDataTableService } from './services/static-data-table.service';
import { DataTableState } from './state/data-table-state.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "./state/data-table-state.service";
const _c0 = ["novoDataTableContainer"];
function NovoDataTable_header_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NovoDataTable_header_0_novo_search_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-search", 31);
    i0.ɵɵlistener("searchChanged", function NovoDataTable_header_0_novo_search_2_Template_novo_search_searchChanged_0_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(2); return ctx_r30.onSearchChange($event); })("ngModelChange", function NovoDataTable_header_0_novo_search_2_Template_novo_search_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.state.globalSearch = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r27.state.globalSearch)("placeholder", ctx_r27.searchOptions == null ? null : ctx_r27.searchOptions.placeholder)("hint", ctx_r27.searchOptions == null ? null : ctx_r27.searchOptions.tooltip);
} }
function NovoDataTable_header_0_novo_data_table_pagination_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-data-table-pagination", 32);
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("theme", ctx_r28.paginationOptions.theme)("length", ctx_r28.dataSource == null ? null : ctx_r28.dataSource.currentTotal)("page", ctx_r28.paginationOptions.page)("pageSize", ctx_r28.paginationOptions.pageSize)("pageSizeOptions", ctx_r28.paginationOptions.pageSizeOptions)("dataFeatureId", ctx_r28.paginatorDataFeatureId);
} }
function NovoDataTable_header_0_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NovoDataTable_header_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵtemplate(1, NovoDataTable_header_0_div_4_ng_container_1_Template, 1, 0, "ng-container", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r29.templates["customActions"]);
} }
function NovoDataTable_header_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "header");
    i0.ɵɵtemplate(1, NovoDataTable_header_0_ng_container_1_Template, 1, 0, "ng-container", 27);
    i0.ɵɵtemplate(2, NovoDataTable_header_0_novo_search_2_Template, 1, 3, "novo-search", 28);
    i0.ɵɵtemplate(3, NovoDataTable_header_0_novo_data_table_pagination_3_Template, 1, 6, "novo-data-table-pagination", 29);
    i0.ɵɵtemplate(4, NovoDataTable_header_0_div_4_Template, 2, 1, "div", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("empty", ctx_r0.hideGlobalSearch && !ctx_r0.paginationOptions && !ctx_r0.templates["customActions"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.templates["customHeader"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.hideGlobalSearch);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.paginationOptions);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.templates["customActions"]);
} }
function NovoDataTable_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵelement(1, "novo-loading");
    i0.ɵɵelementEnd();
} }
function NovoDataTable_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NovoDataTable_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtemplate(1, NovoDataTable_div_3_ng_container_1_Template, 1, 0, "ng-container", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.templates["customFilter"]);
} }
function NovoDataTable_cdk_table_6_novo_data_table_checkbox_header_cell_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-data-table-checkbox-header-cell");
} }
function NovoDataTable_cdk_table_6_novo_data_table_checkbox_cell_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-data-table-checkbox-cell", 44);
} if (rf & 2) {
    const row_r42 = ctx.$implicit;
    i0.ɵɵproperty("row", row_r42);
} }
function NovoDataTable_cdk_table_6_novo_data_table_expand_header_cell_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-data-table-expand-header-cell");
} }
function NovoDataTable_cdk_table_6_novo_data_table_expand_cell_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-data-table-expand-cell", 44);
} if (rf & 2) {
    const row_r44 = ctx.$implicit;
    i0.ɵɵproperty("row", row_r44);
} }
function NovoDataTable_cdk_table_6_ng_container_7_novo_data_table_header_cell_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-data-table-header-cell", 48);
} if (rf & 2) {
    const column_r46 = i0.ɵɵnextContext().$implicit;
    const ctx_r47 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("empty", (column_r46 == null ? null : column_r46.type) === "action" && !(column_r46 == null ? null : column_r46.label))("button-header-cell", (column_r46 == null ? null : column_r46.type) === "expand" || (column_r46 == null ? null : column_r46.type) === "action" && !(column_r46 == null ? null : column_r46.action == null ? null : column_r46.action.options))("dropdown-header-cell", (column_r46 == null ? null : column_r46.type) === "action" && (column_r46 == null ? null : column_r46.action == null ? null : column_r46.action.options))("fixed-header", ctx_r47.fixedHeader);
    i0.ɵɵproperty("column", column_r46)("filterTemplate", ctx_r47.templates["column-filter-" + column_r46.id])("novo-data-table-cell-config", column_r46)("resized", ctx_r47.resized)("defaultSort", ctx_r47.defaultSort)("allowMultipleFilters", ctx_r47.allowMultipleFilters);
} }
function NovoDataTable_cdk_table_6_ng_container_7_novo_data_table_cell_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-data-table-cell", 49);
} if (rf & 2) {
    const row_r50 = ctx.$implicit;
    const column_r46 = i0.ɵɵnextContext().$implicit;
    const ctx_r48 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("empty", (column_r46 == null ? null : column_r46.type) === "action" && !(column_r46 == null ? null : column_r46.label))("button-cell", (column_r46 == null ? null : column_r46.type) === "expand" || (column_r46 == null ? null : column_r46.type) === "action" && !(column_r46 == null ? null : column_r46.action == null ? null : column_r46.action.options))("dropdown-cell", (column_r46 == null ? null : column_r46.type) === "action" && (column_r46 == null ? null : column_r46.action == null ? null : column_r46.action.options));
    i0.ɵɵproperty("resized", ctx_r48.resized)("column", column_r46)("row", row_r50)("template", ctx_r48.columnToTemplate[column_r46.id]);
} }
function NovoDataTable_cdk_table_6_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 45);
    i0.ɵɵtemplate(1, NovoDataTable_cdk_table_6_ng_container_7_novo_data_table_header_cell_1_Template, 1, 14, "novo-data-table-header-cell", 46);
    i0.ɵɵtemplate(2, NovoDataTable_cdk_table_6_ng_container_7_novo_data_table_cell_2_Template, 1, 10, "novo-data-table-cell", 47);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r46 = ctx.$implicit;
    i0.ɵɵproperty("cdkColumnDef", column_r46.id);
} }
function NovoDataTable_cdk_table_6_novo_data_table_header_row_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-data-table-header-row", 50);
} if (rf & 2) {
    const ctx_r40 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("fixedHeader", ctx_r40.fixedHeader);
} }
const _c1 = function (a0) { return { active: a0 }; };
function NovoDataTable_cdk_table_6_novo_data_table_row_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-data-table-row", 51);
} if (rf & 2) {
    const row_r52 = ctx.$implicit;
    const ctx_r41 = i0.ɵɵnextContext(2);
    const _r24 = i0.ɵɵreference(27);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c1, row_r52[ctx_r41.rowIdentifier] == ctx_r41.activeRowIdentifier))("novoDataTableExpand", _r24)("row", row_r52)("id", ctx_r41.name + "-" + row_r52[ctx_r41.rowIdentifier])("dataAutomationId", row_r52[ctx_r41.rowIdentifier]);
} }
function NovoDataTable_cdk_table_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cdk-table", 36);
    i0.ɵɵelementContainerStart(1, 37);
    i0.ɵɵtemplate(2, NovoDataTable_cdk_table_6_novo_data_table_checkbox_header_cell_2_Template, 1, 0, "novo-data-table-checkbox-header-cell", 38);
    i0.ɵɵtemplate(3, NovoDataTable_cdk_table_6_novo_data_table_checkbox_cell_3_Template, 1, 1, "novo-data-table-checkbox-cell", 39);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(4, 40);
    i0.ɵɵtemplate(5, NovoDataTable_cdk_table_6_novo_data_table_expand_header_cell_5_Template, 1, 0, "novo-data-table-expand-header-cell", 38);
    i0.ɵɵtemplate(6, NovoDataTable_cdk_table_6_novo_data_table_expand_cell_6_Template, 1, 1, "novo-data-table-expand-cell", 39);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(7, NovoDataTable_cdk_table_6_ng_container_7_Template, 3, 1, "ng-container", 41);
    i0.ɵɵtemplate(8, NovoDataTable_cdk_table_6_novo_data_table_header_row_8_Template, 1, 1, "novo-data-table-header-row", 42);
    i0.ɵɵtemplate(9, NovoDataTable_cdk_table_6_novo_data_table_row_9_Template, 1, 7, "novo-data-table-row", 43);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("expandable", ctx_r4.expandable)("empty", (ctx_r4.dataSource == null ? null : ctx_r4.dataSource.currentlyEmpty) && ctx_r4.state.userFiltered);
    i0.ɵɵproperty("dataSource", ctx_r4.dataSource)("trackBy", ctx_r4.trackByFn)("hidden", (ctx_r4.dataSource == null ? null : ctx_r4.dataSource.totallyEmpty) && !ctx_r4.state.userFiltered);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r4.columns)("ngForTrackBy", ctx_r4.trackColumnsBy);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkHeaderRowDef", ctx_r4.displayedColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkRowDefColumns", ctx_r4.displayedColumns);
} }
function NovoDataTable_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c2 = function (a0, a1) { return { $implicit: a0, data: a1 }; };
function NovoDataTable_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52);
    i0.ɵɵtemplate(1, NovoDataTable_div_7_ng_container_1_Template, 1, 0, "ng-container", 53);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r5.templates["footer"])("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c2, ctx_r5.columns, ctx_r5.dataSource.data));
} }
function NovoDataTable_div_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NovoDataTable_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54);
    i0.ɵɵelementStart(1, "div", 55);
    i0.ɵɵtemplate(2, NovoDataTable_div_8_ng_container_2_Template, 1, 0, "ng-container", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("left", ctx_r6.scrollLeft, "px");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r6.templates["noResultsMessage"] || ctx_r6.templates["defaultNoResultsMessage"]);
} }
function NovoDataTable_div_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NovoDataTable_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵelementStart(1, "div", 55);
    i0.ɵɵtemplate(2, NovoDataTable_div_9_ng_container_2_Template, 1, 0, "ng-container", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r7.templates["emptyMessage"] || ctx_r7.templates["defaultNoResultsMessage"]);
} }
function NovoDataTable_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "dataTableInterpolate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r56 = ctx.$implicit;
    const col_r57 = ctx.col;
    i0.ɵɵstyleProp("width", col_r57 == null ? null : col_r57.width, "px")("min-width", col_r57 == null ? null : col_r57.width, "px")("max-width", col_r57 == null ? null : col_r57.width, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 7, row_r56[col_r57.id], col_r57));
} }
function NovoDataTable_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "dataTableDateRenderer");
    i0.ɵɵpipe(3, "dataTableInterpolate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r58 = ctx.$implicit;
    const col_r59 = ctx.col;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, i0.ɵɵpipeBind2(3, 4, row_r58[col_r59.id], col_r59), col_r59));
} }
function NovoDataTable_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "dataTableDateTimeRenderer");
    i0.ɵɵpipe(3, "dataTableInterpolate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r60 = ctx.$implicit;
    const col_r61 = ctx.col;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, i0.ɵɵpipeBind2(3, 4, row_r60[col_r61.id], col_r61), col_r61));
} }
function NovoDataTable_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "dataTableTimeRenderer");
    i0.ɵɵpipe(3, "dataTableInterpolate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r62 = ctx.$implicit;
    const col_r63 = ctx.col;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, i0.ɵɵpipeBind2(3, 4, row_r62[col_r63.id], col_r63), col_r63));
} }
function NovoDataTable_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "dataTableCurrencyRenderer");
    i0.ɵɵpipe(3, "dataTableInterpolate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r64 = ctx.$implicit;
    const col_r65 = ctx.col;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, i0.ɵɵpipeBind2(3, 4, row_r64[col_r65.id], col_r65), col_r65));
} }
function NovoDataTable_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "dataTableBigDecimalRenderer");
    i0.ɵɵpipe(3, "dataTableInterpolate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r66 = ctx.$implicit;
    const col_r67 = ctx.col;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, i0.ɵɵpipeBind2(3, 4, row_r66[col_r67.id], col_r67), col_r67));
} }
function NovoDataTable_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "dataTableNumberRenderer");
    i0.ɵɵpipe(3, "dataTableInterpolate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r68 = ctx.$implicit;
    const col_r69 = ctx.col;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, i0.ɵɵpipeBind2(3, 4, row_r68[col_r69.id], col_r69), col_r69));
} }
function NovoDataTable_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "dataTableNumberRenderer");
    i0.ɵɵpipe(3, "dataTableInterpolate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r70 = ctx.$implicit;
    const col_r71 = ctx.col;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(2, 1, i0.ɵɵpipeBind2(3, 5, row_r70[col_r71.id], col_r71), col_r71, true));
} }
function NovoDataTable_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 57);
    i0.ɵɵlistener("click", function NovoDataTable_ng_template_18_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r75); const col_r73 = ctx.col; const row_r72 = ctx.$implicit; return col_r73.handlers == null ? null : col_r73.handlers.click({ originalEvent: $event, row: row_r72 }); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "dataTableInterpolate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r72 = ctx.$implicit;
    const col_r73 = ctx.col;
    i0.ɵɵstyleProp("width", col_r73 == null ? null : col_r73.width, "px")("min-width", col_r73 == null ? null : col_r73.width, "px")("max-width", col_r73 == null ? null : col_r73.width, "px");
    i0.ɵɵattribute("data-feature-id", col_r73 == null ? null : col_r73.attributes == null ? null : col_r73.attributes.dataFeatureId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 8, row_r72[col_r73.id], col_r73));
} }
function NovoDataTable_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 58);
    i0.ɵɵpipe(1, "dataTableInterpolate");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "dataTableInterpolate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r76 = ctx.$implicit;
    const col_r77 = ctx.col;
    i0.ɵɵpropertyInterpolate1("href", "tel:", i0.ɵɵpipeBind2(1, 3, row_r76[col_r77.id], col_r77), "", i0.ɵɵsanitizeUrl);
    i0.ɵɵproperty("target", col_r77 == null ? null : col_r77.attributes == null ? null : col_r77.attributes.target);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 6, row_r76[col_r77.id], col_r77));
} }
function NovoDataTable_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 58);
    i0.ɵɵpipe(1, "dataTableInterpolate");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "dataTableInterpolate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r78 = ctx.$implicit;
    const col_r79 = ctx.col;
    i0.ɵɵpropertyInterpolate1("href", "mailto:", i0.ɵɵpipeBind2(1, 3, row_r78[col_r79.id], col_r79), "", i0.ɵɵsanitizeUrl);
    i0.ɵɵproperty("target", col_r79 == null ? null : col_r79.attributes == null ? null : col_r79.attributes.target);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 6, row_r78[col_r79.id], col_r79));
} }
function NovoDataTable_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r83 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "p", 59);
    i0.ɵɵelementStart(1, "i", 57);
    i0.ɵɵlistener("click", function NovoDataTable_ng_template_21_Template_i_click_1_listener($event) { i0.ɵɵrestoreView(_r83); const col_r81 = ctx.col; const row_r80 = ctx.$implicit; return col_r81.handlers == null ? null : col_r81.handlers.click({ originalEvent: $event, row: row_r80 }); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r80 = ctx.$implicit;
    const col_r81 = ctx.col;
    const ctx_r19 = i0.ɵɵnextContext();
    i0.ɵɵproperty("tooltip", col_r81 == null ? null : col_r81.action == null ? null : col_r81.action.tooltip);
    i0.ɵɵattribute("data-feature-id", col_r81 == null ? null : col_r81.attributes == null ? null : col_r81.attributes.dataFeatureId);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("bhi-", col_r81 == null ? null : col_r81.action == null ? null : col_r81.action.icon, " data-table-icon");
    i0.ɵɵclassProp("disabled", ctx_r19.isDisabled(col_r81, row_r80));
} }
function NovoDataTable_ng_template_22_item_4_Template(rf, ctx) { if (rf & 1) {
    const _r89 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "item", 63);
    i0.ɵɵlistener("action", function NovoDataTable_ng_template_22_item_4_Template_item_action_0_listener($event) { i0.ɵɵrestoreView(_r89); const option_r87 = ctx.$implicit; const row_r84 = i0.ɵɵnextContext().$implicit; return option_r87.handlers.click({ originalEvent: $event == null ? null : $event.originalEvent, row: row_r84 }); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r87 = ctx.$implicit;
    const row_r84 = i0.ɵɵnextContext().$implicit;
    const ctx_r86 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r86.isDisabled(option_r87, row_r84));
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-automation-id", option_r87.label);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r87.label);
} }
function NovoDataTable_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-dropdown", 60);
    i0.ɵɵelementStart(1, "button", 61);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "list");
    i0.ɵɵtemplate(4, NovoDataTable_ng_template_22_item_4_Template, 3, 3, "item", 62);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r85 = ctx.col;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", col_r85.action.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(col_r85.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", col_r85 == null ? null : col_r85.action == null ? null : col_r85.action.options);
} }
function NovoDataTable_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵelement(1, "i", 64);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r21.labels.noMatchingRecordsMessage, "");
} }
function NovoDataTable_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵelement(1, "i", 64);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r22.labels.emptyTableMessage, "");
} }
function NovoDataTable_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " You did not provide an \"expandedRow\" template! ");
} }
function NovoDataTable_ng_template_26_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c3 = function (a0) { return { $implicit: a0 }; };
function NovoDataTable_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65);
    i0.ɵɵtemplate(1, NovoDataTable_ng_template_26_ng_container_1_Template, 1, 0, "ng-container", 53);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r92 = ctx.$implicit;
    const ctx_r25 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@expand", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r25.templates["expandedRow"])("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c3, row_r92));
} }
const _c4 = function (a0) { return { "novo-data-table-outside-container-fixed": a0 }; };
const _c5 = function (a0) { return { "novo-data-table-container-fixed": a0 }; };
const _c6 = ["*"];
export class NovoDataTable {
    constructor(labels, ref, state) {
        this.labels = labels;
        this.ref = ref;
        this.state = state;
        this.globalSearchHiddenClassToggle = false;
        this.resized = new EventEmitter();
        this.name = 'novo-data-table';
        this.allowMultipleFilters = false;
        this.rowIdentifier = 'id';
        this.activeRowIdentifier = '';
        // prettier-ignore
        this.trackByFn = (index, item) => item.id;
        this.templates = {};
        this.fixedHeader = false;
        this._hideGlobalSearch = true;
        this.preferencesChanged = new EventEmitter();
        this.loading = true;
        this.columnToTemplate = {};
        this.columnsLoaded = false;
        this.selection = new Set();
        this.scrollLeft = 0;
        this.expandable = false;
        this.initialized = false;
        this.scrollListenerHandler = this.scrollListener.bind(this);
        this.sortFilterSubscription = this.state.sortFilterSource.subscribe((event) => {
            if (this.name !== 'novo-data-table') {
                this.preferencesChanged.emit({ name: this.name, sort: event.sort, filter: event.filter, globalSearch: event.globalSearch });
            }
            else {
                notify('Must have [name] set on data-table to use preferences!');
            }
        });
        this.paginationSubscription = this.state.paginationSource.subscribe((event) => {
            if (this.name !== 'novo-data-table') {
                if (event.isPageSizeChange) {
                    this.preferencesChanged.emit({ name: this.name, pageSize: event.pageSize });
                }
            }
            else {
                notify('Must have [name] set on data-table to use preferences!');
            }
        });
        this.resetSubscription = this.state.resetSource.subscribe(() => {
            setTimeout(() => {
                this.ref.detectChanges();
            }, 300);
        });
    }
    set displayedColumns(displayedColumns) {
        if (this.displayedColumns && this.displayedColumns.length !== 0) {
            if (this.name !== 'novo-data-table') {
                this.preferencesChanged.emit({
                    name: this.name,
                    displayedColumns,
                });
            }
            else {
                notify('Must have [name] set on data-table to use preferences!');
            }
        }
        this._disabledColumns = displayedColumns;
        this.configureLastDisplayedColumn();
        if (this.initialized) {
            setTimeout(() => {
                this.scrollListener();
            });
        }
    }
    get displayedColumns() {
        return this._disabledColumns;
    }
    set dataTableService(service) {
        this.loading = false;
        if (!service) {
            service = new StaticDataTableService([]);
        }
        this.dataSource = new DataTableSource(service, this.state, this.ref);
        this.ref.detectChanges();
    }
    set rows(rows) {
        this.loading = false;
        const service = new StaticDataTableService(rows);
        this.dataSource = new DataTableSource(service, this.state, this.ref);
        this.ref.detectChanges();
    }
    set outsideFilter(outsideFilter) {
        // Unsubscribe
        if (this.outsideFilterSubscription) {
            this.outsideFilterSubscription.unsubscribe();
        }
        if (outsideFilter) {
            // Re-subscribe
            this.outsideFilterSubscription = outsideFilter.subscribe((filter) => {
                this.state.outsideFilter = filter;
                this.state.updates.next({ globalSearch: this.state.globalSearch, filter: this.state.filter, sort: this.state.sort });
                this.ref.markForCheck();
            });
        }
    }
    set refreshSubject(refreshSubject) {
        // Unsubscribe
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
        if (refreshSubject) {
            // Re-subscribe
            this.refreshSubscription = refreshSubject.subscribe((filter) => {
                this.state.isForceRefresh = true;
                this.state.updates.next({ globalSearch: this.state.globalSearch, filter: this.state.filter, sort: this.state.sort });
                this.ref.markForCheck();
            });
        }
    }
    set columns(columns) {
        this._columns = columns;
        this.configureColumns();
    }
    get columns() {
        return this._columns;
    }
    set customFilter(v) {
        this._customFilter = coerceBooleanProperty(v);
    }
    get customFilter() {
        return this._customFilter;
    }
    set hasExandedRows(v) {
        this._hasExandedRows = coerceBooleanProperty(v);
    }
    get hasExandedRows() {
        return this._hasExandedRows;
    }
    set forceShowHeader(v) {
        this._forceShowHeader = coerceBooleanProperty(v);
    }
    get forceShowHeader() {
        return this._forceShowHeader;
    }
    set hideGlobalSearch(v) {
        this._hideGlobalSearch = coerceBooleanProperty(v);
        this.globalSearchHiddenClassToggle = this._hideGlobalSearch;
    }
    get hideGlobalSearch() {
        return this._hideGlobalSearch;
    }
    get empty() {
        return this.dataSource && this.dataSource.totallyEmpty;
    }
    get loadingClass() {
        return this.loading || (this.dataSource && this.dataSource.loading);
    }
    ngOnDestroy() {
        if (this.outsideFilterSubscription) {
            this.outsideFilterSubscription.unsubscribe();
        }
        if (this.novoDataTableContainer) {
            this.novoDataTableContainer.nativeElement.removeEventListener('scroll', this.scrollListenerHandler);
        }
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
        if (this.resetSubscription) {
            this.resetSubscription.unsubscribe();
        }
        if (this.sortFilterSubscription) {
            this.sortFilterSubscription.unsubscribe();
        }
    }
    ngAfterContentInit() {
        if (this.displayedColumns && this.displayedColumns.length) {
            this.expandable = this.displayedColumns.includes('expand');
        }
        // Default templates defined here
        this.defaultTemplates.forEach((item) => {
            // Only override if it doesn't already exist
            if (!this.templates[item.getType()]) {
                this.templates[item.getType()] = item.template;
            }
        });
        // Custom templates passed in
        this.customTemplates.forEach((item) => {
            // Override anything that is custom and in HTML
            this.templates[item.getType()] = item.template;
        });
        // Load columns
        this.configureColumns();
        // State
        if (this.paginationOptions && !this.paginationOptions.page) {
            this.paginationOptions.page = 0;
        }
        if (this.paginationOptions && !this.paginationOptions.pageSize) {
            this.paginationOptions.pageSize = 50;
        }
        if (this.paginationOptions && !this.paginationOptions.pageSizeOptions) {
            this.paginationOptions.pageSizeOptions = [10, 25, 50, 100];
        }
        this.state.page = this.paginationOptions ? this.paginationOptions.page : undefined;
        this.state.pageSize = this.paginationOptions ? this.paginationOptions.pageSize : undefined;
        // Scrolling inside table
        this.novoDataTableContainer.nativeElement.addEventListener('scroll', this.scrollListenerHandler);
        this.initialized = true;
        this.ref.markForCheck();
    }
    onSearchChange(term) {
        this.state.globalSearch = term;
        this.state.reset(false, true);
        this.state.updates.next({ globalSearch: term, filter: this.state.filter, sort: this.state.sort });
    }
    trackColumnsBy(index, item) {
        return item.id;
    }
    isDisabled(check, row) {
        if (check.disabled === true) {
            return true;
        }
        if (check.disabledFunc) {
            return check.disabledFunc(row);
        }
        return false;
    }
    isExpanded(row) {
        if (!row) {
            return false;
        }
        return this.state.expandedRows.has(`${row[this.rowIdentifier]}`);
    }
    expandRow(row) {
        const expanded = this.isExpanded(row);
        if (expanded) {
            this.state.expandedRows.delete(`${row[this.rowIdentifier]}`);
        }
        else {
            this.state.expandedRows.add(`${row[this.rowIdentifier]}`);
        }
        this.state.onExpandChange(row.id);
    }
    expandRows(expand) {
        (this.dataSource.data || []).forEach((row) => {
            if (!expand) {
                this.state.expandedRows.delete(`${row[this.rowIdentifier]}`);
            }
            else {
                this.state.expandedRows.add(`${row[this.rowIdentifier]}`);
            }
        });
        this.state.onExpandChange();
    }
    allCurrentRowsExpanded() {
        for (let i = 0; i < (this.dataSource.data || []).length; i++) {
            if (!this.isExpanded((this.dataSource.data || [])[i])) {
                return false;
            }
        }
        return true;
    }
    isSelected(row) {
        if (!row) {
            return false;
        }
        return this.state.selectedRows.has(`${row[this.rowIdentifier]}`);
    }
    selectRow(row) {
        const selected = this.isSelected(row);
        if (selected) {
            this.state.selectedRows.delete(`${row[this.rowIdentifier]}`);
        }
        else {
            this.state.selectedRows.set(`${row[this.rowIdentifier]}`, row);
        }
        this.state.onSelectionChange();
    }
    selectRows(selected) {
        (this.dataSource.data || []).forEach((row) => {
            if (!selected) {
                this.state.selectedRows.delete(`${row[this.rowIdentifier]}`);
            }
            else {
                this.state.selectedRows.set(`${row[this.rowIdentifier]}`, row);
            }
        });
        this.state.onSelectionChange();
    }
    allCurrentRowsSelected() {
        for (let i = 0; i < (this.dataSource.data || []).length; i++) {
            if (!this.isSelected((this.dataSource.data || [])[i])) {
                return false;
            }
        }
        return true;
    }
    configureLastDisplayedColumn() {
        if (this.columns && this.displayedColumns && 0 !== this.columns.length && 0 !== this.displayedColumns.length) {
            this.columns.forEach((column) => {
                if (column.initialResizable) {
                    column.resizable = column.initialResizable.resizable;
                    column.width = column.initialResizable.width;
                    column.initialResizable = undefined;
                }
            });
            const resizableColumns = this.displayedColumns.filter((name) => {
                return (this.columns.findIndex((column) => {
                    return column.resizable && column.id === name;
                }) !== -1);
            });
            if (resizableColumns && resizableColumns.length > 0) {
                const lastResizableColumn = this.columns.find((column) => {
                    return column.id === resizableColumns[resizableColumns.length - 1];
                });
                lastResizableColumn.initialResizable = {
                    resizable: lastResizableColumn.resizable,
                    width: lastResizableColumn.width,
                };
                lastResizableColumn.width = undefined;
                lastResizableColumn.resizable = false;
            }
        }
    }
    configureColumns() {
        if (this.columns && this.columns.length !== 0 && Object.keys(this.templates).length !== 0) {
            // Figure the column templates
            this.columns.forEach((column) => {
                // Figure the template
                let templateName;
                if (column.template) {
                    // Pass it in as template
                    templateName = column.template;
                }
                else if (!!this.templates[column.id]) {
                    // Custom template for the column id
                    templateName = column.id;
                }
                else {
                    // Default to the defaulCellTemplate
                    if (column.type === 'action') {
                        if (column.action && column.action.options) {
                            if (!column.action.icon) {
                                column.action.icon = 'collapse';
                            }
                            templateName = 'dropdownCellTemplate';
                        }
                        else {
                            templateName = 'buttonCellTemplate';
                        }
                    }
                    else {
                        if (column.type === 'link:tel' || column.type === 'link:mailto') {
                            templateName = `${column.type.split(':')[1]}CellTemplate`;
                        }
                        else {
                            templateName = `${column.type}CellTemplate`;
                        }
                    }
                }
                this.columnToTemplate[column.id] = this.templates[templateName];
            });
            this.configureLastDisplayedColumn();
            this.columnsLoaded = true;
        }
    }
    scrollListener() {
        const target = this.novoDataTableContainer.nativeElement;
        const left = target.scrollLeft;
        if (left !== this.scrollLeft) {
            this.scrollLeft = target.scrollLeft;
        }
        this.ref.markForCheck();
    }
}
NovoDataTable.ɵfac = function NovoDataTable_Factory(t) { return new (t || NovoDataTable)(i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.DataTableState)); };
NovoDataTable.ɵcmp = i0.ɵɵdefineComponent({ type: NovoDataTable, selectors: [["novo-data-table"]], contentQueries: function NovoDataTable_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NovoTemplate, false);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.customTemplates = _t);
    } }, viewQuery: function NovoDataTable_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(NovoTemplate, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.novoDataTableContainer = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultTemplates = _t);
    } }, hostVars: 6, hostBindings: function NovoDataTable_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("global-search-hidden", ctx.globalSearchHiddenClassToggle)("empty", ctx.empty)("loading", ctx.loadingClass);
    } }, inputs: { displayedColumns: "displayedColumns", paginationOptions: "paginationOptions", searchOptions: "searchOptions", defaultSort: "defaultSort", name: "name", allowMultipleFilters: "allowMultipleFilters", rowIdentifier: "rowIdentifier", activeRowIdentifier: "activeRowIdentifier", trackByFn: "trackByFn", templates: "templates", fixedHeader: "fixedHeader", paginatorDataFeatureId: "paginatorDataFeatureId", dataTableService: "dataTableService", rows: "rows", outsideFilter: "outsideFilter", refreshSubject: "refreshSubject", columns: "columns", customFilter: "customFilter", hasExandedRows: "hasExandedRows", forceShowHeader: "forceShowHeader", hideGlobalSearch: "hideGlobalSearch" }, outputs: { resized: "resized", preferencesChanged: "preferencesChanged" }, features: [i0.ɵɵProvidersFeature([DataTableState])], ngContentSelectors: _c6, decls: 29, vars: 17, consts: [[3, "empty", 4, "ngIf"], ["class", "novo-data-table-loading-mask", "data-automation-id", "novo-data-table-loading", 4, "ngIf"], [1, "novo-data-table-outside-container", 3, "ngClass"], ["class", "novo-data-table-custom-filter", 4, "ngIf"], [1, "novo-data-table-container", 3, "ngClass"], ["novoDataTableContainer", ""], ["novoDataTableSortFilter", "", 3, "dataSource", "trackBy", "expandable", "empty", "hidden", 4, "ngIf"], ["class", "novo-data-table-footer", 4, "ngIf"], ["class", "novo-data-table-no-results-container", 3, "left", 4, "ngIf"], ["class", "novo-data-table-empty-container", 4, "ngIf"], ["novoTemplate", "textCellTemplate"], ["novoTemplate", "dateCellTemplate"], ["novoTemplate", "datetimeCellTemplate"], ["novoTemplate", "timeCellTemplate"], ["novoTemplate", "currencyCellTemplate"], ["novoTemplate", "bigdecimalCellTemplate"], ["novoTemplate", "numberCellTemplate"], ["novoTemplate", "percentCellTemplate"], ["novoTemplate", "linkCellTemplate"], ["novoTemplate", "telCellTemplate"], ["novoTemplate", "mailtoCellTemplate"], ["novoTemplate", "buttonCellTemplate"], ["novoTemplate", "dropdownCellTemplate"], ["novoTemplate", "defaultNoResultsMessage"], ["novoTemplate", "defaultEmptyMessage"], ["novoTemplate", "expandedRow"], ["detailRowTemplate", ""], [4, "ngTemplateOutlet"], ["alwaysOpen", "true", 3, "ngModel", "placeholder", "hint", "searchChanged", "ngModelChange", 4, "ngIf"], [3, "theme", "length", "page", "pageSize", "pageSizeOptions", "dataFeatureId", 4, "ngIf"], ["class", "novo-data-table-actions", 4, "ngIf"], ["alwaysOpen", "true", 3, "ngModel", "placeholder", "hint", "searchChanged", "ngModelChange"], [3, "theme", "length", "page", "pageSize", "pageSizeOptions", "dataFeatureId"], [1, "novo-data-table-actions"], ["data-automation-id", "novo-data-table-loading", 1, "novo-data-table-loading-mask"], [1, "novo-data-table-custom-filter"], ["novoDataTableSortFilter", "", 3, "dataSource", "trackBy", "hidden"], ["cdkColumnDef", "selection"], [4, "cdkHeaderCellDef"], [3, "row", 4, "cdkCellDef"], ["cdkColumnDef", "expand"], [3, "cdkColumnDef", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["data-automation-id", "novo-data-table-header-row", 3, "fixedHeader", 4, "cdkHeaderRowDef"], [3, "ngClass", "novoDataTableExpand", "row", "id", "dataAutomationId", 4, "cdkRowDef", "cdkRowDefColumns"], [3, "row"], [3, "cdkColumnDef"], [3, "column", "filterTemplate", "novo-data-table-cell-config", "resized", "defaultSort", "allowMultipleFilters", "empty", "button-header-cell", "dropdown-header-cell", "fixed-header", 4, "cdkHeaderCellDef"], [3, "resized", "column", "row", "template", "empty", "button-cell", "dropdown-cell", 4, "cdkCellDef"], [3, "column", "filterTemplate", "novo-data-table-cell-config", "resized", "defaultSort", "allowMultipleFilters"], [3, "resized", "column", "row", "template"], ["data-automation-id", "novo-data-table-header-row", 3, "fixedHeader"], [3, "ngClass", "novoDataTableExpand", "row", "id", "dataAutomationId"], [1, "novo-data-table-footer"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "novo-data-table-no-results-container"], [1, "novo-data-table-empty-message"], [1, "novo-data-table-empty-container"], [3, "click"], [3, "href", "target"], ["tooltipPosition", "right", 3, "tooltip"], ["parentScrollSelector", ".novo-data-table-container", "containerClass", "novo-data-table-dropdown"], ["type", "button", "theme", "dialogue", "inverse", "", 3, "icon"], [3, "disabled", "action", 4, "ngFor", "ngForOf"], [3, "disabled", "action"], [1, "bhi-search-question"], [1, "novo-data-table-detail-row", 2, "overflow", "hidden"]], template: function NovoDataTable_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, NovoDataTable_header_0_Template, 5, 6, "header", 0);
        i0.ɵɵtemplate(1, NovoDataTable_div_1_Template, 2, 0, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, NovoDataTable_div_3_Template, 2, 1, "div", 3);
        i0.ɵɵelementStart(4, "div", 4, 5);
        i0.ɵɵtemplate(6, NovoDataTable_cdk_table_6_Template, 10, 11, "cdk-table", 6);
        i0.ɵɵtemplate(7, NovoDataTable_div_7_Template, 2, 5, "div", 7);
        i0.ɵɵtemplate(8, NovoDataTable_div_8_Template, 3, 3, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, NovoDataTable_div_9_Template, 3, 1, "div", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, NovoDataTable_ng_template_10_Template, 3, 10, "ng-template", 10);
        i0.ɵɵtemplate(11, NovoDataTable_ng_template_11_Template, 4, 7, "ng-template", 11);
        i0.ɵɵtemplate(12, NovoDataTable_ng_template_12_Template, 4, 7, "ng-template", 12);
        i0.ɵɵtemplate(13, NovoDataTable_ng_template_13_Template, 4, 7, "ng-template", 13);
        i0.ɵɵtemplate(14, NovoDataTable_ng_template_14_Template, 4, 7, "ng-template", 14);
        i0.ɵɵtemplate(15, NovoDataTable_ng_template_15_Template, 4, 7, "ng-template", 15);
        i0.ɵɵtemplate(16, NovoDataTable_ng_template_16_Template, 4, 7, "ng-template", 16);
        i0.ɵɵtemplate(17, NovoDataTable_ng_template_17_Template, 4, 8, "ng-template", 17);
        i0.ɵɵtemplate(18, NovoDataTable_ng_template_18_Template, 3, 11, "ng-template", 18);
        i0.ɵɵtemplate(19, NovoDataTable_ng_template_19_Template, 4, 9, "ng-template", 19);
        i0.ɵɵtemplate(20, NovoDataTable_ng_template_20_Template, 4, 9, "ng-template", 20);
        i0.ɵɵtemplate(21, NovoDataTable_ng_template_21_Template, 2, 7, "ng-template", 21);
        i0.ɵɵtemplate(22, NovoDataTable_ng_template_22_Template, 5, 3, "ng-template", 22);
        i0.ɵɵtemplate(23, NovoDataTable_ng_template_23_Template, 3, 1, "ng-template", 23);
        i0.ɵɵtemplate(24, NovoDataTable_ng_template_24_Template, 3, 1, "ng-template", 24);
        i0.ɵɵtemplate(25, NovoDataTable_ng_template_25_Template, 1, 0, "ng-template", 25);
        i0.ɵɵtemplate(26, NovoDataTable_ng_template_26_Template, 2, 5, "ng-template", null, 26, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵprojection(28);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !((ctx.dataSource == null ? null : ctx.dataSource.totallyEmpty) && !ctx.state.userFiltered) && !ctx.loading || ctx.forceShowHeader);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.dataSource == null ? null : ctx.dataSource.loading) || ctx.loading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(13, _c4, ctx.fixedHeader));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.customFilter);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("empty-user-filtered", (ctx.dataSource == null ? null : ctx.dataSource.currentlyEmpty) && ctx.state.userFiltered)("empty", (ctx.dataSource == null ? null : ctx.dataSource.totallyEmpty) && !(ctx.dataSource == null ? null : ctx.dataSource.loading) && !ctx.loading && !ctx.state.userFiltered && !ctx.dataSource.pristine);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c5, ctx.fixedHeader));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", (ctx.columns == null ? null : ctx.columns.length) > 0 && ctx.columnsLoaded && ctx.dataSource);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.templates["footer"]);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.dataSource == null ? null : ctx.dataSource.currentlyEmpty) && ctx.state.userFiltered && !(ctx.dataSource == null ? null : ctx.dataSource.loading) && !ctx.loading && !ctx.dataSource.pristine);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.dataSource == null ? null : ctx.dataSource.totallyEmpty) && !(ctx.dataSource == null ? null : ctx.dataSource.loading) && !ctx.loading && !ctx.state.userFiltered && !ctx.dataSource.pristine);
    } }, encapsulation: 2, data: { animation: [
            trigger('expand', [
                animState('void', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
                animState('*', style({ height: '*', visibility: 'visible' })),
                transition('void <=> *', animate('70ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDataTable, [{
        type: Component,
        args: [{
                selector: 'novo-data-table',
                animations: [
                    trigger('expand', [
                        animState('void', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
                        animState('*', style({ height: '*', visibility: 'visible' })),
                        transition('void <=> *', animate('70ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ],
                template: `
    <header
      *ngIf="(!(dataSource?.totallyEmpty && !state.userFiltered) && !loading) || forceShowHeader"
      [class.empty]="hideGlobalSearch && !paginationOptions && !templates['customActions']"
    >
      <ng-container *ngTemplateOutlet="templates['customHeader']"></ng-container>
      <novo-search
        alwaysOpen="true"
        (searchChanged)="onSearchChange($event)"
        [(ngModel)]="state.globalSearch"
        *ngIf="!hideGlobalSearch"
        [placeholder]="searchOptions?.placeholder"
        [hint]="searchOptions?.tooltip"
      >
      </novo-search>
      <novo-data-table-pagination
        *ngIf="paginationOptions"
        [theme]="paginationOptions.theme"
        [length]="dataSource?.currentTotal"
        [page]="paginationOptions.page"
        [pageSize]="paginationOptions.pageSize"
        [pageSizeOptions]="paginationOptions.pageSizeOptions"
        [dataFeatureId]="paginatorDataFeatureId"
      >
      </novo-data-table-pagination>
      <div class="novo-data-table-actions" *ngIf="templates['customActions']">
        <ng-container *ngTemplateOutlet="templates['customActions']"></ng-container>
      </div>
    </header>
    <div class="novo-data-table-loading-mask" *ngIf="dataSource?.loading || loading" data-automation-id="novo-data-table-loading">
      <novo-loading></novo-loading>
    </div>
    <div class="novo-data-table-outside-container" [ngClass]="{ 'novo-data-table-outside-container-fixed': fixedHeader }">
      <div class="novo-data-table-custom-filter" *ngIf="customFilter">
        <ng-container *ngTemplateOutlet="templates['customFilter']"></ng-container>
      </div>
      <div
        #novoDataTableContainer
        class="novo-data-table-container"
        [ngClass]="{ 'novo-data-table-container-fixed': fixedHeader }"
        [class.empty-user-filtered]="dataSource?.currentlyEmpty && state.userFiltered"
        [class.empty]="dataSource?.totallyEmpty && !dataSource?.loading && !loading && !state.userFiltered && !dataSource.pristine"
      >
        <cdk-table
          *ngIf="columns?.length > 0 && columnsLoaded && dataSource"
          [dataSource]="dataSource"
          [trackBy]="trackByFn"
          novoDataTableSortFilter
          [class.expandable]="expandable"
          [class.empty]="dataSource?.currentlyEmpty && state.userFiltered"
          [hidden]="dataSource?.totallyEmpty && !state.userFiltered"
        >
          <ng-container cdkColumnDef="selection">
            <novo-data-table-checkbox-header-cell *cdkHeaderCellDef></novo-data-table-checkbox-header-cell>
            <novo-data-table-checkbox-cell *cdkCellDef="let row; let i = index" [row]="row"></novo-data-table-checkbox-cell>
          </ng-container>
          <ng-container cdkColumnDef="expand">
            <novo-data-table-expand-header-cell *cdkHeaderCellDef></novo-data-table-expand-header-cell>
            <novo-data-table-expand-cell *cdkCellDef="let row; let i = index" [row]="row"></novo-data-table-expand-cell>
          </ng-container>
          <ng-container *ngFor="let column of columns; trackBy: trackColumnsBy" [cdkColumnDef]="column.id">
            <novo-data-table-header-cell
              *cdkHeaderCellDef
              [column]="column"
              [filterTemplate]="templates['column-filter-' + column.id]"
              [novo-data-table-cell-config]="column"
              [resized]="resized"
              [defaultSort]="defaultSort"
              [allowMultipleFilters]="allowMultipleFilters"
              [class.empty]="column?.type === 'action' && !column?.label"
              [class.button-header-cell]="column?.type === 'expand' || (column?.type === 'action' && !column?.action?.options)"
              [class.dropdown-header-cell]="column?.type === 'action' && column?.action?.options"
              [class.fixed-header]="fixedHeader"
            ></novo-data-table-header-cell>
            <novo-data-table-cell
              *cdkCellDef="let row"
              [resized]="resized"
              [column]="column"
              [row]="row"
              [template]="columnToTemplate[column.id]"
              [class.empty]="column?.type === 'action' && !column?.label"
              [class.button-cell]="column?.type === 'expand' || (column?.type === 'action' && !column?.action?.options)"
              [class.dropdown-cell]="column?.type === 'action' && column?.action?.options"
            ></novo-data-table-cell>
          </ng-container>
          <novo-data-table-header-row
            *cdkHeaderRowDef="displayedColumns"
            [fixedHeader]="fixedHeader"
            data-automation-id="novo-data-table-header-row"
          ></novo-data-table-header-row>
          <novo-data-table-row
            *cdkRowDef="let row; columns: displayedColumns"
            [ngClass]="{ active: row[rowIdentifier] == activeRowIdentifier }"
            [novoDataTableExpand]="detailRowTemplate"
            [row]="row"
            [id]="name + '-' + row[rowIdentifier]"
            [dataAutomationId]="row[rowIdentifier]"
          ></novo-data-table-row>
        </cdk-table>
        <div class="novo-data-table-footer" *ngIf="templates['footer']">
          <ng-container *ngTemplateOutlet="templates['footer']; context: { $implicit: columns, data: dataSource.data }"></ng-container>
        </div>
        <div
          class="novo-data-table-no-results-container"
          [style.left.px]="scrollLeft"
          *ngIf="dataSource?.currentlyEmpty && state.userFiltered && !dataSource?.loading && !loading && !dataSource.pristine"
        >
          <div class="novo-data-table-empty-message">
            <ng-container *ngTemplateOutlet="templates['noResultsMessage'] || templates['defaultNoResultsMessage']"></ng-container>
          </div>
        </div>
      </div>
      <div
        class="novo-data-table-empty-container"
        *ngIf="dataSource?.totallyEmpty && !dataSource?.loading && !loading && !state.userFiltered && !dataSource.pristine"
      >
        <div class="novo-data-table-empty-message">
          <ng-container *ngTemplateOutlet="templates['emptyMessage'] || templates['defaultNoResultsMessage']"></ng-container>
        </div>
      </div>
    </div>
    <!-- DEFAULT CELL TEMPLATE -->
    <ng-template novoTemplate="textCellTemplate" let-row let-col="col">
      <span [style.width.px]="col?.width" [style.min-width.px]="col?.width" [style.max-width.px]="col?.width">{{
        row[col.id] | dataTableInterpolate: col
      }}</span>
    </ng-template>
    <ng-template novoTemplate="dateCellTemplate" let-row let-col="col">
      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableDateRenderer: col }}</span>
    </ng-template>
    <ng-template novoTemplate="datetimeCellTemplate" let-row let-col="col">
      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableDateTimeRenderer: col }}</span>
    </ng-template>
    <ng-template novoTemplate="timeCellTemplate" let-row let-col="col">
      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableTimeRenderer: col }}</span>
    </ng-template>
    <ng-template novoTemplate="currencyCellTemplate" let-row let-col="col">
      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableCurrencyRenderer: col }}</span>
    </ng-template>
    <ng-template novoTemplate="bigdecimalCellTemplate" let-row let-col="col">
      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableBigDecimalRenderer: col }}</span>
    </ng-template>
    <ng-template novoTemplate="numberCellTemplate" let-row let-col="col">
      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableNumberRenderer: col }}</span>
    </ng-template>
    <ng-template novoTemplate="percentCellTemplate" let-row let-col="col">
      <span>{{ row[col.id] | dataTableInterpolate: col | dataTableNumberRenderer: col:true }}</span>
    </ng-template>
    <ng-template novoTemplate="linkCellTemplate" let-row let-col="col">
      <a
        [attr.data-feature-id]="col?.attributes?.dataFeatureId"
        (click)="col.handlers?.click({ originalEvent: $event, row: row })"
        [style.width.px]="col?.width"
        [style.min-width.px]="col?.width"
        [style.max-width.px]="col?.width"
        >{{ row[col.id] | dataTableInterpolate: col }}</a
      >
    </ng-template>
    <ng-template novoTemplate="telCellTemplate" let-row let-col="col">
      <a href="tel:{{ row[col.id] | dataTableInterpolate: col }}" [target]="col?.attributes?.target">{{
        row[col.id] | dataTableInterpolate: col
      }}</a>
    </ng-template>
    <ng-template novoTemplate="mailtoCellTemplate" let-row let-col="col">
      <a href="mailto:{{ row[col.id] | dataTableInterpolate: col }}" [target]="col?.attributes?.target">{{
        row[col.id] | dataTableInterpolate: col
      }}</a>
    </ng-template>
    <ng-template novoTemplate="buttonCellTemplate" let-row let-col="col">
      <p [tooltip]="col?.action?.tooltip" tooltipPosition="right" [attr.data-feature-id]="col?.attributes?.dataFeatureId">
        <i
          class="bhi-{{ col?.action?.icon }} data-table-icon"
          (click)="col.handlers?.click({ originalEvent: $event, row: row })"
          [class.disabled]="isDisabled(col, row)"
        ></i>
      </p>
    </ng-template>
    <ng-template novoTemplate="dropdownCellTemplate" let-row let-col="col">
      <novo-dropdown parentScrollSelector=".novo-data-table-container" containerClass="novo-data-table-dropdown">
        <button type="button" theme="dialogue" [icon]="col.action.icon" inverse>{{ col.label }}</button>
        <list>
          <item
            *ngFor="let option of col?.action?.options"
            (action)="option.handlers.click({ originalEvent: $event?.originalEvent, row: row })"
            [disabled]="isDisabled(option, row)"
          >
            <span [attr.data-automation-id]="option.label">{{ option.label }}</span>
          </item>
        </list>
      </novo-dropdown>
    </ng-template>
    <ng-template novoTemplate="defaultNoResultsMessage">
      <h4><i class="bhi-search-question"></i> {{ labels.noMatchingRecordsMessage }}</h4>
    </ng-template>
    <ng-template novoTemplate="defaultEmptyMessage">
      <h4><i class="bhi-search-question"></i> {{ labels.emptyTableMessage }}</h4>
    </ng-template>
    <ng-template novoTemplate="expandedRow"> You did not provide an "expandedRow" template! </ng-template>
    <ng-template #detailRowTemplate let-row>
      <div class="novo-data-table-detail-row" [@expand] style="overflow: hidden">
        <ng-container *ngTemplateOutlet="templates['expandedRow']; context: { $implicit: row }"></ng-container>
      </div>
    </ng-template>
    <!-- CUSTOM CELLS PASSED IN -->
    <ng-content></ng-content>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [DataTableState],
            }]
    }], function () { return [{ type: i1.NovoLabelService }, { type: i0.ChangeDetectorRef }, { type: i2.DataTableState }]; }, { globalSearchHiddenClassToggle: [{
            type: HostBinding,
            args: ['class.global-search-hidden']
        }], customTemplates: [{
            type: ContentChildren,
            args: [NovoTemplate]
        }], defaultTemplates: [{
            type: ViewChildren,
            args: [NovoTemplate]
        }], novoDataTableContainer: [{
            type: ViewChild,
            args: ['novoDataTableContainer']
        }], resized: [{
            type: Output
        }], displayedColumns: [{
            type: Input
        }], paginationOptions: [{
            type: Input
        }], searchOptions: [{
            type: Input
        }], defaultSort: [{
            type: Input
        }], name: [{
            type: Input
        }], allowMultipleFilters: [{
            type: Input
        }], rowIdentifier: [{
            type: Input
        }], activeRowIdentifier: [{
            type: Input
        }], trackByFn: [{
            type: Input
        }], templates: [{
            type: Input
        }], fixedHeader: [{
            type: Input
        }], paginatorDataFeatureId: [{
            type: Input
        }], dataTableService: [{
            type: Input
        }], rows: [{
            type: Input
        }], outsideFilter: [{
            type: Input
        }], refreshSubject: [{
            type: Input
        }], columns: [{
            type: Input
        }], customFilter: [{
            type: Input
        }], hasExandedRows: [{
            type: Input
        }], forceShowHeader: [{
            type: Input
        }], hideGlobalSearch: [{
            type: Input
        }], preferencesChanged: [{
            type: Output
        }], empty: [{
            type: HostBinding,
            args: ['class.empty']
        }], loadingClass: [{
            type: HostBinding,
            args: ['class.loading']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssSUFBSSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQW9CLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxTQUFTLEVBQWUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzTyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7OztJQWdCNUQsd0JBQTJFOzs7O0lBQzNFLHVDQVFjO0lBTlosMk9BQXdDLG1PQUFBO0lBTTFDLGlCQUFjOzs7SUFMWixvREFBZ0MseUZBQUEsOEVBQUE7OztJQU1sQyxpREFTNkI7OztJQVAzQix1REFBaUMsK0VBQUEsd0NBQUEsZ0RBQUEsOERBQUEsaURBQUE7OztJQVNqQyx3QkFBNEU7OztJQUQ5RSwrQkFDRTtJQUFB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QUM7YUFDNUI7O2tCQUVFLFdBQVc7bUJBQUMsNEJBQTRCOztrQkFFeEMsZUFBZTttQkFBQyxZQUFZOztrQkFDNUIsWUFBWTttQkFBQyxZQUFZOztrQkFDekIsU0FBUzttQkFBQyx3QkFBd0I7O2tCQUNsQyxNQUFNOztrQkFFTixLQUFLOztrQkEwQkwsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBVUwsS0FBSzs7a0JBUUwsS0FBSzs7a0JBZ0JMLEtBQUs7O2tCQWdCTCxLQUFLOztrQkFTTCxLQUFLOztrQkFTTCxLQUFLOztrQkFTTCxLQUFLOztrQkFTTCxLQUFLOztrQkFVTCxNQUFNOztrQkFtQk4sV0FBVzttQkFBQyxhQUFhOztrQkFLekIsV0FBVzttQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUgYXMgYW5pbVN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgUXVlcnlMaXN0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBWaWV3Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBub3RpZnkgfSBmcm9tICcuLi8uLi91dGlscy9ub3RpZmllci9ub3RpZmllci51dGlsJztcbmltcG9ydCB7IE5vdm9UZW1wbGF0ZSB9IGZyb20gJy4uL2NvbW1vbi9ub3ZvLXRlbXBsYXRlL25vdm8tdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGFUYWJsZVNvdXJjZSB9IGZyb20gJy4vZGF0YS10YWJsZS5zb3VyY2UnO1xuaW1wb3J0IHsgSURhdGFUYWJsZUNvbHVtbiwgSURhdGFUYWJsZUZpbHRlciwgSURhdGFUYWJsZVBhZ2luYXRpb25PcHRpb25zLCBJRGF0YVRhYmxlUHJlZmVyZW5jZXMsIElEYXRhVGFibGVTZWFyY2hPcHRpb25zLCBJRGF0YVRhYmxlU2VydmljZSwgSURhdGFUYWJsZVNvcnQgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgU3RhdGljRGF0YVRhYmxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc3RhdGljLWRhdGEtdGFibGUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVTdGF0ZSB9IGZyb20gJy4vc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1kYXRhLXRhYmxlJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2V4cGFuZCcsIFtcbiAgICAgIGFuaW1TdGF0ZSgndm9pZCcsIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JywgbWluSGVpZ2h0OiAnMCcsIHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pKSxcbiAgICAgIGFuaW1TdGF0ZSgnKicsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIHZpc2liaWxpdHk6ICd2aXNpYmxlJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkIDw9PiAqJywgYW5pbWF0ZSgnNzBtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSknKSksXG4gICAgXSksXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGhlYWRlclxuICAgICAgKm5nSWY9XCIoIShkYXRhU291cmNlPy50b3RhbGx5RW1wdHkgJiYgIXN0YXRlLnVzZXJGaWx0ZXJlZCkgJiYgIWxvYWRpbmcpIHx8IGZvcmNlU2hvd0hlYWRlclwiXG4gICAgICBbY2xhc3MuZW1wdHldPVwiaGlkZUdsb2JhbFNlYXJjaCAmJiAhcGFnaW5hdGlvbk9wdGlvbnMgJiYgIXRlbXBsYXRlc1snY3VzdG9tQWN0aW9ucyddXCJcbiAgICA+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydjdXN0b21IZWFkZXInXVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPG5vdm8tc2VhcmNoXG4gICAgICAgIGFsd2F5c09wZW49XCJ0cnVlXCJcbiAgICAgICAgKHNlYXJjaENoYW5nZWQpPVwib25TZWFyY2hDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwic3RhdGUuZ2xvYmFsU2VhcmNoXCJcbiAgICAgICAgKm5nSWY9XCIhaGlkZUdsb2JhbFNlYXJjaFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJzZWFyY2hPcHRpb25zPy5wbGFjZWhvbGRlclwiXG4gICAgICAgIFtoaW50XT1cInNlYXJjaE9wdGlvbnM/LnRvb2x0aXBcIlxuICAgICAgPlxuICAgICAgPC9ub3ZvLXNlYXJjaD5cbiAgICAgIDxub3ZvLWRhdGEtdGFibGUtcGFnaW5hdGlvblxuICAgICAgICAqbmdJZj1cInBhZ2luYXRpb25PcHRpb25zXCJcbiAgICAgICAgW3RoZW1lXT1cInBhZ2luYXRpb25PcHRpb25zLnRoZW1lXCJcbiAgICAgICAgW2xlbmd0aF09XCJkYXRhU291cmNlPy5jdXJyZW50VG90YWxcIlxuICAgICAgICBbcGFnZV09XCJwYWdpbmF0aW9uT3B0aW9ucy5wYWdlXCJcbiAgICAgICAgW3BhZ2VTaXplXT1cInBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplXCJcbiAgICAgICAgW3BhZ2VTaXplT3B0aW9uc109XCJwYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZU9wdGlvbnNcIlxuICAgICAgICBbZGF0YUZlYXR1cmVJZF09XCJwYWdpbmF0b3JEYXRhRmVhdHVyZUlkXCJcbiAgICAgID5cbiAgICAgIDwvbm92by1kYXRhLXRhYmxlLXBhZ2luYXRpb24+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWFjdGlvbnNcIiAqbmdJZj1cInRlbXBsYXRlc1snY3VzdG9tQWN0aW9ucyddXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbJ2N1c3RvbUFjdGlvbnMnXVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1sb2FkaW5nLW1hc2tcIiAqbmdJZj1cImRhdGFTb3VyY2U/LmxvYWRpbmcgfHwgbG9hZGluZ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tZGF0YS10YWJsZS1sb2FkaW5nXCI+XG4gICAgICA8bm92by1sb2FkaW5nPjwvbm92by1sb2FkaW5nPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtb3V0c2lkZS1jb250YWluZXJcIiBbbmdDbGFzc109XCJ7ICdub3ZvLWRhdGEtdGFibGUtb3V0c2lkZS1jb250YWluZXItZml4ZWQnOiBmaXhlZEhlYWRlciB9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWN1c3RvbS1maWx0ZXJcIiAqbmdJZj1cImN1c3RvbUZpbHRlclwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydjdXN0b21GaWx0ZXInXVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgICNub3ZvRGF0YVRhYmxlQ29udGFpbmVyXG4gICAgICAgIGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWNvbnRhaW5lclwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsgJ25vdm8tZGF0YS10YWJsZS1jb250YWluZXItZml4ZWQnOiBmaXhlZEhlYWRlciB9XCJcbiAgICAgICAgW2NsYXNzLmVtcHR5LXVzZXItZmlsdGVyZWRdPVwiZGF0YVNvdXJjZT8uY3VycmVudGx5RW1wdHkgJiYgc3RhdGUudXNlckZpbHRlcmVkXCJcbiAgICAgICAgW2NsYXNzLmVtcHR5XT1cImRhdGFTb3VyY2U/LnRvdGFsbHlFbXB0eSAmJiAhZGF0YVNvdXJjZT8ubG9hZGluZyAmJiAhbG9hZGluZyAmJiAhc3RhdGUudXNlckZpbHRlcmVkICYmICFkYXRhU291cmNlLnByaXN0aW5lXCJcbiAgICAgID5cbiAgICAgICAgPGNkay10YWJsZVxuICAgICAgICAgICpuZ0lmPVwiY29sdW1ucz8ubGVuZ3RoID4gMCAmJiBjb2x1bW5zTG9hZGVkICYmIGRhdGFTb3VyY2VcIlxuICAgICAgICAgIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIlxuICAgICAgICAgIFt0cmFja0J5XT1cInRyYWNrQnlGblwiXG4gICAgICAgICAgbm92b0RhdGFUYWJsZVNvcnRGaWx0ZXJcbiAgICAgICAgICBbY2xhc3MuZXhwYW5kYWJsZV09XCJleHBhbmRhYmxlXCJcbiAgICAgICAgICBbY2xhc3MuZW1wdHldPVwiZGF0YVNvdXJjZT8uY3VycmVudGx5RW1wdHkgJiYgc3RhdGUudXNlckZpbHRlcmVkXCJcbiAgICAgICAgICBbaGlkZGVuXT1cImRhdGFTb3VyY2U/LnRvdGFsbHlFbXB0eSAmJiAhc3RhdGUudXNlckZpbHRlcmVkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwic2VsZWN0aW9uXCI+XG4gICAgICAgICAgICA8bm92by1kYXRhLXRhYmxlLWNoZWNrYm94LWhlYWRlci1jZWxsICpjZGtIZWFkZXJDZWxsRGVmPjwvbm92by1kYXRhLXRhYmxlLWNoZWNrYm94LWhlYWRlci1jZWxsPlxuICAgICAgICAgICAgPG5vdm8tZGF0YS10YWJsZS1jaGVja2JveC1jZWxsICpjZGtDZWxsRGVmPVwibGV0IHJvdzsgbGV0IGkgPSBpbmRleFwiIFtyb3ddPVwicm93XCI+PC9ub3ZvLWRhdGEtdGFibGUtY2hlY2tib3gtY2VsbD5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cImV4cGFuZFwiPlxuICAgICAgICAgICAgPG5vdm8tZGF0YS10YWJsZS1leHBhbmQtaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+PC9ub3ZvLWRhdGEtdGFibGUtZXhwYW5kLWhlYWRlci1jZWxsPlxuICAgICAgICAgICAgPG5vdm8tZGF0YS10YWJsZS1leHBhbmQtY2VsbCAqY2RrQ2VsbERlZj1cImxldCByb3c7IGxldCBpID0gaW5kZXhcIiBbcm93XT1cInJvd1wiPjwvbm92by1kYXRhLXRhYmxlLWV4cGFuZC1jZWxsPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zOyB0cmFja0J5OiB0cmFja0NvbHVtbnNCeVwiIFtjZGtDb2x1bW5EZWZdPVwiY29sdW1uLmlkXCI+XG4gICAgICAgICAgICA8bm92by1kYXRhLXRhYmxlLWhlYWRlci1jZWxsXG4gICAgICAgICAgICAgICpjZGtIZWFkZXJDZWxsRGVmXG4gICAgICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgW2ZpbHRlclRlbXBsYXRlXT1cInRlbXBsYXRlc1snY29sdW1uLWZpbHRlci0nICsgY29sdW1uLmlkXVwiXG4gICAgICAgICAgICAgIFtub3ZvLWRhdGEtdGFibGUtY2VsbC1jb25maWddPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgW3Jlc2l6ZWRdPVwicmVzaXplZFwiXG4gICAgICAgICAgICAgIFtkZWZhdWx0U29ydF09XCJkZWZhdWx0U29ydFwiXG4gICAgICAgICAgICAgIFthbGxvd011bHRpcGxlRmlsdGVyc109XCJhbGxvd011bHRpcGxlRmlsdGVyc1wiXG4gICAgICAgICAgICAgIFtjbGFzcy5lbXB0eV09XCJjb2x1bW4/LnR5cGUgPT09ICdhY3Rpb24nICYmICFjb2x1bW4/LmxhYmVsXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmJ1dHRvbi1oZWFkZXItY2VsbF09XCJjb2x1bW4/LnR5cGUgPT09ICdleHBhbmQnIHx8IChjb2x1bW4/LnR5cGUgPT09ICdhY3Rpb24nICYmICFjb2x1bW4/LmFjdGlvbj8ub3B0aW9ucylcIlxuICAgICAgICAgICAgICBbY2xhc3MuZHJvcGRvd24taGVhZGVyLWNlbGxdPVwiY29sdW1uPy50eXBlID09PSAnYWN0aW9uJyAmJiBjb2x1bW4/LmFjdGlvbj8ub3B0aW9uc1wiXG4gICAgICAgICAgICAgIFtjbGFzcy5maXhlZC1oZWFkZXJdPVwiZml4ZWRIZWFkZXJcIlxuICAgICAgICAgICAgPjwvbm92by1kYXRhLXRhYmxlLWhlYWRlci1jZWxsPlxuICAgICAgICAgICAgPG5vdm8tZGF0YS10YWJsZS1jZWxsXG4gICAgICAgICAgICAgICpjZGtDZWxsRGVmPVwibGV0IHJvd1wiXG4gICAgICAgICAgICAgIFtyZXNpemVkXT1cInJlc2l6ZWRcIlxuICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAgICAgICAgIFtyb3ddPVwicm93XCJcbiAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cImNvbHVtblRvVGVtcGxhdGVbY29sdW1uLmlkXVwiXG4gICAgICAgICAgICAgIFtjbGFzcy5lbXB0eV09XCJjb2x1bW4/LnR5cGUgPT09ICdhY3Rpb24nICYmICFjb2x1bW4/LmxhYmVsXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmJ1dHRvbi1jZWxsXT1cImNvbHVtbj8udHlwZSA9PT0gJ2V4cGFuZCcgfHwgKGNvbHVtbj8udHlwZSA9PT0gJ2FjdGlvbicgJiYgIWNvbHVtbj8uYWN0aW9uPy5vcHRpb25zKVwiXG4gICAgICAgICAgICAgIFtjbGFzcy5kcm9wZG93bi1jZWxsXT1cImNvbHVtbj8udHlwZSA9PT0gJ2FjdGlvbicgJiYgY29sdW1uPy5hY3Rpb24/Lm9wdGlvbnNcIlxuICAgICAgICAgICAgPjwvbm92by1kYXRhLXRhYmxlLWNlbGw+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5vdm8tZGF0YS10YWJsZS1oZWFkZXItcm93XG4gICAgICAgICAgICAqY2RrSGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiXG4gICAgICAgICAgICBbZml4ZWRIZWFkZXJdPVwiZml4ZWRIZWFkZXJcIlxuICAgICAgICAgICAgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1kYXRhLXRhYmxlLWhlYWRlci1yb3dcIlxuICAgICAgICAgID48L25vdm8tZGF0YS10YWJsZS1oZWFkZXItcm93PlxuICAgICAgICAgIDxub3ZvLWRhdGEtdGFibGUtcm93XG4gICAgICAgICAgICAqY2RrUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1uc1wiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7IGFjdGl2ZTogcm93W3Jvd0lkZW50aWZpZXJdID09IGFjdGl2ZVJvd0lkZW50aWZpZXIgfVwiXG4gICAgICAgICAgICBbbm92b0RhdGFUYWJsZUV4cGFuZF09XCJkZXRhaWxSb3dUZW1wbGF0ZVwiXG4gICAgICAgICAgICBbcm93XT1cInJvd1wiXG4gICAgICAgICAgICBbaWRdPVwibmFtZSArICctJyArIHJvd1tyb3dJZGVudGlmaWVyXVwiXG4gICAgICAgICAgICBbZGF0YUF1dG9tYXRpb25JZF09XCJyb3dbcm93SWRlbnRpZmllcl1cIlxuICAgICAgICAgID48L25vdm8tZGF0YS10YWJsZS1yb3c+XG4gICAgICAgIDwvY2RrLXRhYmxlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWZvb3RlclwiICpuZ0lmPVwidGVtcGxhdGVzWydmb290ZXInXVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbJ2Zvb3RlciddOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29sdW1ucywgZGF0YTogZGF0YVNvdXJjZS5kYXRhIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1uby1yZXN1bHRzLWNvbnRhaW5lclwiXG4gICAgICAgICAgW3N0eWxlLmxlZnQucHhdPVwic2Nyb2xsTGVmdFwiXG4gICAgICAgICAgKm5nSWY9XCJkYXRhU291cmNlPy5jdXJyZW50bHlFbXB0eSAmJiBzdGF0ZS51c2VyRmlsdGVyZWQgJiYgIWRhdGFTb3VyY2U/LmxvYWRpbmcgJiYgIWxvYWRpbmcgJiYgIWRhdGFTb3VyY2UucHJpc3RpbmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZGF0YS10YWJsZS1lbXB0eS1tZXNzYWdlXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydub1Jlc3VsdHNNZXNzYWdlJ10gfHwgdGVtcGxhdGVzWydkZWZhdWx0Tm9SZXN1bHRzTWVzc2FnZSddXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWVtcHR5LWNvbnRhaW5lclwiXG4gICAgICAgICpuZ0lmPVwiZGF0YVNvdXJjZT8udG90YWxseUVtcHR5ICYmICFkYXRhU291cmNlPy5sb2FkaW5nICYmICFsb2FkaW5nICYmICFzdGF0ZS51c2VyRmlsdGVyZWQgJiYgIWRhdGFTb3VyY2UucHJpc3RpbmVcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1kYXRhLXRhYmxlLWVtcHR5LW1lc3NhZ2VcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydlbXB0eU1lc3NhZ2UnXSB8fCB0ZW1wbGF0ZXNbJ2RlZmF1bHROb1Jlc3VsdHNNZXNzYWdlJ11cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8IS0tIERFRkFVTFQgQ0VMTCBURU1QTEFURSAtLT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwidGV4dENlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHNwYW4gW3N0eWxlLndpZHRoLnB4XT1cImNvbD8ud2lkdGhcIiBbc3R5bGUubWluLXdpZHRoLnB4XT1cImNvbD8ud2lkdGhcIiBbc3R5bGUubWF4LXdpZHRoLnB4XT1cImNvbD8ud2lkdGhcIj57e1xuICAgICAgICByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2xcbiAgICAgIH19PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImRhdGVDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxzcGFuPnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbCB8IGRhdGFUYWJsZURhdGVSZW5kZXJlcjogY29sIH19PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImRhdGV0aW1lQ2VsbFRlbXBsYXRlXCIgbGV0LXJvdyBsZXQtY29sPVwiY29sXCI+XG4gICAgICA8c3Bhbj57eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2wgfCBkYXRhVGFibGVEYXRlVGltZVJlbmRlcmVyOiBjb2wgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwidGltZUNlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHNwYW4+e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTogY29sIHwgZGF0YVRhYmxlVGltZVJlbmRlcmVyOiBjb2wgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiY3VycmVuY3lDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxzcGFuPnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbCB8IGRhdGFUYWJsZUN1cnJlbmN5UmVuZGVyZXI6IGNvbCB9fTwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJiaWdkZWNpbWFsQ2VsbFRlbXBsYXRlXCIgbGV0LXJvdyBsZXQtY29sPVwiY29sXCI+XG4gICAgICA8c3Bhbj57eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2wgfCBkYXRhVGFibGVCaWdEZWNpbWFsUmVuZGVyZXI6IGNvbCB9fTwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJudW1iZXJDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxzcGFuPnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbCB8IGRhdGFUYWJsZU51bWJlclJlbmRlcmVyOiBjb2wgfX08L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwicGVyY2VudENlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHNwYW4+e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTogY29sIHwgZGF0YVRhYmxlTnVtYmVyUmVuZGVyZXI6IGNvbDp0cnVlIH19PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImxpbmtDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxhXG4gICAgICAgIFthdHRyLmRhdGEtZmVhdHVyZS1pZF09XCJjb2w/LmF0dHJpYnV0ZXM/LmRhdGFGZWF0dXJlSWRcIlxuICAgICAgICAoY2xpY2spPVwiY29sLmhhbmRsZXJzPy5jbGljayh7IG9yaWdpbmFsRXZlbnQ6ICRldmVudCwgcm93OiByb3cgfSlcIlxuICAgICAgICBbc3R5bGUud2lkdGgucHhdPVwiY29sPy53aWR0aFwiXG4gICAgICAgIFtzdHlsZS5taW4td2lkdGgucHhdPVwiY29sPy53aWR0aFwiXG4gICAgICAgIFtzdHlsZS5tYXgtd2lkdGgucHhdPVwiY29sPy53aWR0aFwiXG4gICAgICAgID57eyByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2wgfX08L2FcbiAgICAgID5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJ0ZWxDZWxsVGVtcGxhdGVcIiBsZXQtcm93IGxldC1jb2w9XCJjb2xcIj5cbiAgICAgIDxhIGhyZWY9XCJ0ZWw6e3sgcm93W2NvbC5pZF0gfCBkYXRhVGFibGVJbnRlcnBvbGF0ZTogY29sIH19XCIgW3RhcmdldF09XCJjb2w/LmF0dHJpYnV0ZXM/LnRhcmdldFwiPnt7XG4gICAgICAgIHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbFxuICAgICAgfX08L2E+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwibWFpbHRvQ2VsbFRlbXBsYXRlXCIgbGV0LXJvdyBsZXQtY29sPVwiY29sXCI+XG4gICAgICA8YSBocmVmPVwibWFpbHRvOnt7IHJvd1tjb2wuaWRdIHwgZGF0YVRhYmxlSW50ZXJwb2xhdGU6IGNvbCB9fVwiIFt0YXJnZXRdPVwiY29sPy5hdHRyaWJ1dGVzPy50YXJnZXRcIj57e1xuICAgICAgICByb3dbY29sLmlkXSB8IGRhdGFUYWJsZUludGVycG9sYXRlOiBjb2xcbiAgICAgIH19PC9hPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImJ1dHRvbkNlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPHAgW3Rvb2x0aXBdPVwiY29sPy5hY3Rpb24/LnRvb2x0aXBcIiB0b29sdGlwUG9zaXRpb249XCJyaWdodFwiIFthdHRyLmRhdGEtZmVhdHVyZS1pZF09XCJjb2w/LmF0dHJpYnV0ZXM/LmRhdGFGZWF0dXJlSWRcIj5cbiAgICAgICAgPGlcbiAgICAgICAgICBjbGFzcz1cImJoaS17eyBjb2w/LmFjdGlvbj8uaWNvbiB9fSBkYXRhLXRhYmxlLWljb25cIlxuICAgICAgICAgIChjbGljayk9XCJjb2wuaGFuZGxlcnM/LmNsaWNrKHsgb3JpZ2luYWxFdmVudDogJGV2ZW50LCByb3c6IHJvdyB9KVwiXG4gICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImlzRGlzYWJsZWQoY29sLCByb3cpXCJcbiAgICAgICAgPjwvaT5cbiAgICAgIDwvcD5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJkcm9wZG93bkNlbGxUZW1wbGF0ZVwiIGxldC1yb3cgbGV0LWNvbD1cImNvbFwiPlxuICAgICAgPG5vdm8tZHJvcGRvd24gcGFyZW50U2Nyb2xsU2VsZWN0b3I9XCIubm92by1kYXRhLXRhYmxlLWNvbnRhaW5lclwiIGNvbnRhaW5lckNsYXNzPVwibm92by1kYXRhLXRhYmxlLWRyb3Bkb3duXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwiZGlhbG9ndWVcIiBbaWNvbl09XCJjb2wuYWN0aW9uLmljb25cIiBpbnZlcnNlPnt7IGNvbC5sYWJlbCB9fTwvYnV0dG9uPlxuICAgICAgICA8bGlzdD5cbiAgICAgICAgICA8aXRlbVxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb2w/LmFjdGlvbj8ub3B0aW9uc1wiXG4gICAgICAgICAgICAoYWN0aW9uKT1cIm9wdGlvbi5oYW5kbGVycy5jbGljayh7IG9yaWdpbmFsRXZlbnQ6ICRldmVudD8ub3JpZ2luYWxFdmVudCwgcm93OiByb3cgfSlcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWQob3B0aW9uLCByb3cpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwib3B0aW9uLmxhYmVsXCI+e3sgb3B0aW9uLmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgPC9saXN0PlxuICAgICAgPC9ub3ZvLWRyb3Bkb3duPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImRlZmF1bHROb1Jlc3VsdHNNZXNzYWdlXCI+XG4gICAgICA8aDQ+PGkgY2xhc3M9XCJiaGktc2VhcmNoLXF1ZXN0aW9uXCI+PC9pPiB7eyBsYWJlbHMubm9NYXRjaGluZ1JlY29yZHNNZXNzYWdlIH19PC9oND5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJkZWZhdWx0RW1wdHlNZXNzYWdlXCI+XG4gICAgICA8aDQ+PGkgY2xhc3M9XCJiaGktc2VhcmNoLXF1ZXN0aW9uXCI+PC9pPiB7eyBsYWJlbHMuZW1wdHlUYWJsZU1lc3NhZ2UgfX08L2g0PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImV4cGFuZGVkUm93XCI+IFlvdSBkaWQgbm90IHByb3ZpZGUgYW4gXCJleHBhbmRlZFJvd1wiIHRlbXBsYXRlISA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjZGV0YWlsUm93VGVtcGxhdGUgbGV0LXJvdz5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWRhdGEtdGFibGUtZGV0YWlsLXJvd1wiIFtAZXhwYW5kXSBzdHlsZT1cIm92ZXJmbG93OiBoaWRkZW5cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlc1snZXhwYW5kZWRSb3cnXTsgY29udGV4dDogeyAkaW1wbGljaXQ6IHJvdyB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwhLS0gQ1VTVE9NIENFTExTIFBBU1NFRCBJTiAtLT5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtEYXRhVGFibGVTdGF0ZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9EYXRhVGFibGU8VD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmdsb2JhbC1zZWFyY2gtaGlkZGVuJykgZ2xvYmFsU2VhcmNoSGlkZGVuQ2xhc3NUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAQ29udGVudENoaWxkcmVuKE5vdm9UZW1wbGF0ZSkgY3VzdG9tVGVtcGxhdGVzOiBRdWVyeUxpc3Q8Tm92b1RlbXBsYXRlPjtcbiAgQFZpZXdDaGlsZHJlbihOb3ZvVGVtcGxhdGUpIGRlZmF1bHRUZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOb3ZvVGVtcGxhdGU+O1xuICBAVmlld0NoaWxkKCdub3ZvRGF0YVRhYmxlQ29udGFpbmVyJykgbm92b0RhdGFUYWJsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQE91dHB1dCgpIHJlc2l6ZWQ6IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlQ29sdW1uPFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKVxuICBzZXQgZGlzcGxheWVkQ29sdW1ucyhkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSkge1xuICAgIGlmICh0aGlzLmRpc3BsYXllZENvbHVtbnMgJiYgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgaWYgKHRoaXMubmFtZSAhPT0gJ25vdm8tZGF0YS10YWJsZScpIHtcbiAgICAgICAgdGhpcy5wcmVmZXJlbmNlc0NoYW5nZWQuZW1pdCh7XG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIGRpc3BsYXllZENvbHVtbnMsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm90aWZ5KCdNdXN0IGhhdmUgW25hbWVdIHNldCBvbiBkYXRhLXRhYmxlIHRvIHVzZSBwcmVmZXJlbmNlcyEnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fZGlzYWJsZWRDb2x1bW5zID0gZGlzcGxheWVkQ29sdW1ucztcbiAgICB0aGlzLmNvbmZpZ3VyZUxhc3REaXNwbGF5ZWRDb2x1bW4oKTtcbiAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkaXNwbGF5ZWRDb2x1bW5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWRDb2x1bW5zO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkQ29sdW1uczogc3RyaW5nW107XG5cbiAgQElucHV0KCkgcGFnaW5hdGlvbk9wdGlvbnM6IElEYXRhVGFibGVQYWdpbmF0aW9uT3B0aW9ucztcbiAgQElucHV0KCkgc2VhcmNoT3B0aW9uczogSURhdGFUYWJsZVNlYXJjaE9wdGlvbnM7XG4gIEBJbnB1dCgpIGRlZmF1bHRTb3J0OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfTtcbiAgQElucHV0KCkgbmFtZSA9ICdub3ZvLWRhdGEtdGFibGUnO1xuICBASW5wdXQoKSBhbGxvd011bHRpcGxlRmlsdGVycyA9IGZhbHNlO1xuICBASW5wdXQoKSByb3dJZGVudGlmaWVyID0gJ2lkJztcbiAgQElucHV0KCkgYWN0aXZlUm93SWRlbnRpZmllciA9ICcnO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQElucHV0KCkgdHJhY2tCeUZuID0gKGluZGV4LCBpdGVtKSA9PiBpdGVtLmlkO1xuICBASW5wdXQoKSB0ZW1wbGF0ZXM6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8YW55PiB9ID0ge307XG4gIEBJbnB1dCgpIGZpeGVkSGVhZGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBhZ2luYXRvckRhdGFGZWF0dXJlSWQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgZGF0YVRhYmxlU2VydmljZShzZXJ2aWNlOiBJRGF0YVRhYmxlU2VydmljZTxUPikge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIGlmICghc2VydmljZSkge1xuICAgICAgc2VydmljZSA9IG5ldyBTdGF0aWNEYXRhVGFibGVTZXJ2aWNlKFtdKTtcbiAgICB9XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IERhdGFUYWJsZVNvdXJjZTxUPihzZXJ2aWNlLCB0aGlzLnN0YXRlLCB0aGlzLnJlZik7XG4gICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHJvd3Mocm93czogVFtdKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgY29uc3Qgc2VydmljZSA9IG5ldyBTdGF0aWNEYXRhVGFibGVTZXJ2aWNlKHJvd3MpO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBEYXRhVGFibGVTb3VyY2U8VD4oc2VydmljZSwgdGhpcy5zdGF0ZSwgdGhpcy5yZWYpO1xuICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBvdXRzaWRlRmlsdGVyKG91dHNpZGVGaWx0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+KSB7XG4gICAgLy8gVW5zdWJzY3JpYmVcbiAgICBpZiAodGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm91dHNpZGVGaWx0ZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKG91dHNpZGVGaWx0ZXIpIHtcbiAgICAgIC8vIFJlLXN1YnNjcmliZVxuICAgICAgdGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uID0gb3V0c2lkZUZpbHRlci5zdWJzY3JpYmUoKGZpbHRlcjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUub3V0c2lkZUZpbHRlciA9IGZpbHRlcjtcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBnbG9iYWxTZWFyY2g6IHRoaXMuc3RhdGUuZ2xvYmFsU2VhcmNoLCBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSk7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHJlZnJlc2hTdWJqZWN0KHJlZnJlc2hTdWJqZWN0OiBFdmVudEVtaXR0ZXI8YW55Pikge1xuICAgIC8vIFVuc3Vic2NyaWJlXG4gICAgaWYgKHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmIChyZWZyZXNoU3ViamVjdCkge1xuICAgICAgLy8gUmUtc3Vic2NyaWJlXG4gICAgICB0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24gPSByZWZyZXNoU3ViamVjdC5zdWJzY3JpYmUoKGZpbHRlcjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUuaXNGb3JjZVJlZnJlc2ggPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZXMubmV4dCh7IGdsb2JhbFNlYXJjaDogdGhpcy5zdGF0ZS5nbG9iYWxTZWFyY2gsIGZpbHRlcjogdGhpcy5zdGF0ZS5maWx0ZXIsIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCB9KTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgY29sdW1ucyhjb2x1bW5zOiBJRGF0YVRhYmxlQ29sdW1uPFQ+W10pIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gY29sdW1ucztcbiAgICB0aGlzLmNvbmZpZ3VyZUNvbHVtbnMoKTtcbiAgfVxuICBnZXQgY29sdW1ucygpOiBJRGF0YVRhYmxlQ29sdW1uPFQ+W10ge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGN1c3RvbUZpbHRlcih2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fY3VzdG9tRmlsdGVyID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBjdXN0b21GaWx0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUZpbHRlcjtcbiAgfVxuICBwcml2YXRlIF9jdXN0b21GaWx0ZXI6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGhhc0V4YW5kZWRSb3dzKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oYXNFeGFuZGVkUm93cyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgaGFzRXhhbmRlZFJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0V4YW5kZWRSb3dzO1xuICB9XG4gIHByaXZhdGUgX2hhc0V4YW5kZWRSb3dzOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmb3JjZVNob3dIZWFkZXIodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2ZvcmNlU2hvd0hlYWRlciA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgZm9yY2VTaG93SGVhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JjZVNob3dIZWFkZXI7XG4gIH1cbiAgcHJpdmF0ZSBfZm9yY2VTaG93SGVhZGVyOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBoaWRlR2xvYmFsU2VhcmNoKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWRlR2xvYmFsU2VhcmNoID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICAgIHRoaXMuZ2xvYmFsU2VhcmNoSGlkZGVuQ2xhc3NUb2dnbGUgPSB0aGlzLl9oaWRlR2xvYmFsU2VhcmNoO1xuICB9XG4gIGdldCBoaWRlR2xvYmFsU2VhcmNoKCkge1xuICAgIHJldHVybiB0aGlzLl9oaWRlR2xvYmFsU2VhcmNoO1xuICB9XG4gIHByaXZhdGUgX2hpZGVHbG9iYWxTZWFyY2g6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBwcmVmZXJlbmNlc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlUHJlZmVyZW5jZXM+ID0gbmV3IEV2ZW50RW1pdHRlcjxJRGF0YVRhYmxlUHJlZmVyZW5jZXM+KCk7XG5cbiAgcHVibGljIGRhdGFTb3VyY2U6IERhdGFUYWJsZVNvdXJjZTxUPjtcbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgY29sdW1uVG9UZW1wbGF0ZTogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxhbnk+IH0gPSB7fTtcbiAgcHVibGljIGNvbHVtbnNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNlbGVjdGlvbjogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG4gIHB1YmxpYyBzY3JvbGxMZWZ0OiBudW1iZXIgPSAwO1xuICBwdWJsaWMgZXhwYW5kYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgb3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHJlZnJlc2hTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSByZXNldFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHBhZ2luYXRpb25TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBzb3J0RmlsdGVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2NvbHVtbnM6IElEYXRhVGFibGVDb2x1bW48VD5bXTtcbiAgcHJpdmF0ZSBzY3JvbGxMaXN0ZW5lckhhbmRsZXI6IGFueTtcbiAgcHJpdmF0ZSBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZW1wdHknKVxuICBnZXQgZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZSAmJiB0aGlzLmRhdGFTb3VyY2UudG90YWxseUVtcHR5O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sb2FkaW5nJylcbiAgZ2V0IGxvYWRpbmdDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nIHx8ICh0aGlzLmRhdGFTb3VyY2UgJiYgdGhpcy5kYXRhU291cmNlLmxvYWRpbmcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgc3RhdGU6IERhdGFUYWJsZVN0YXRlPFQ+KSB7XG4gICAgdGhpcy5zY3JvbGxMaXN0ZW5lckhhbmRsZXIgPSB0aGlzLnNjcm9sbExpc3RlbmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zb3J0RmlsdGVyU3Vic2NyaXB0aW9uID0gdGhpcy5zdGF0ZS5zb3J0RmlsdGVyU291cmNlLnN1YnNjcmliZShcbiAgICAgIChldmVudDoge1xuICAgICAgICBzb3J0OiBJRGF0YVRhYmxlU29ydDtcbiAgICAgICAgZmlsdGVyOiBJRGF0YVRhYmxlRmlsdGVyIHwgSURhdGFUYWJsZUZpbHRlcltdO1xuICAgICAgICBnbG9iYWxTZWFyY2g6IHN0cmluZztcbiAgICAgIH0pID0+IHtcbiAgICAgICAgaWYgKHRoaXMubmFtZSAhPT0gJ25vdm8tZGF0YS10YWJsZScpIHtcbiAgICAgICAgICB0aGlzLnByZWZlcmVuY2VzQ2hhbmdlZC5lbWl0KHsgbmFtZTogdGhpcy5uYW1lLCBzb3J0OiBldmVudC5zb3J0LCBmaWx0ZXI6IGV2ZW50LmZpbHRlciwgZ2xvYmFsU2VhcmNoOiBldmVudC5nbG9iYWxTZWFyY2ggfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm90aWZ5KCdNdXN0IGhhdmUgW25hbWVdIHNldCBvbiBkYXRhLXRhYmxlIHRvIHVzZSBwcmVmZXJlbmNlcyEnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMucGFnaW5hdGlvblN1YnNjcmlwdGlvbiA9IHRoaXMuc3RhdGUucGFnaW5hdGlvblNvdXJjZS5zdWJzY3JpYmUoKGV2ZW50OiB7IGlzUGFnZVNpemVDaGFuZ2U6IGJvb2xlYW47IHBhZ2VTaXplOiBudW1iZXIgfSkgPT4ge1xuICAgICAgaWYgKHRoaXMubmFtZSAhPT0gJ25vdm8tZGF0YS10YWJsZScpIHtcbiAgICAgICAgaWYgKGV2ZW50LmlzUGFnZVNpemVDaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLnByZWZlcmVuY2VzQ2hhbmdlZC5lbWl0KHsgbmFtZTogdGhpcy5uYW1lLCBwYWdlU2l6ZTogZXZlbnQucGFnZVNpemUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vdGlmeSgnTXVzdCBoYXZlIFtuYW1lXSBzZXQgb24gZGF0YS10YWJsZSB0byB1c2UgcHJlZmVyZW5jZXMhJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5yZXNldFN1YnNjcmlwdGlvbiA9IHRoaXMuc3RhdGUucmVzZXRTb3VyY2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9LCAzMDApO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm91dHNpZGVGaWx0ZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMub3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5ub3ZvRGF0YVRhYmxlQ29udGFpbmVyKSB7XG4gICAgICAodGhpcy5ub3ZvRGF0YVRhYmxlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudCkucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxMaXN0ZW5lckhhbmRsZXIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVzZXRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucmVzZXRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc29ydEZpbHRlclN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zb3J0RmlsdGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNwbGF5ZWRDb2x1bW5zICYmIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZXhwYW5kYWJsZSA9IHRoaXMuZGlzcGxheWVkQ29sdW1ucy5pbmNsdWRlcygnZXhwYW5kJyk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0ZW1wbGF0ZXMgZGVmaW5lZCBoZXJlXG4gICAgdGhpcy5kZWZhdWx0VGVtcGxhdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIC8vIE9ubHkgb3ZlcnJpZGUgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0XG4gICAgICBpZiAoIXRoaXMudGVtcGxhdGVzW2l0ZW0uZ2V0VHlwZSgpXSkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlc1tpdGVtLmdldFR5cGUoKV0gPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEN1c3RvbSB0ZW1wbGF0ZXMgcGFzc2VkIGluXG4gICAgdGhpcy5jdXN0b21UZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgLy8gT3ZlcnJpZGUgYW55dGhpbmcgdGhhdCBpcyBjdXN0b20gYW5kIGluIEhUTUxcbiAgICAgIHRoaXMudGVtcGxhdGVzW2l0ZW0uZ2V0VHlwZSgpXSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgfSk7XG4gICAgLy8gTG9hZCBjb2x1bW5zXG4gICAgdGhpcy5jb25maWd1cmVDb2x1bW5zKCk7XG5cbiAgICAvLyBTdGF0ZVxuICAgIGlmICh0aGlzLnBhZ2luYXRpb25PcHRpb25zICYmICF0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2UpIHtcbiAgICAgIHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZSA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2luYXRpb25PcHRpb25zICYmICF0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplKSB7XG4gICAgICB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplID0gNTA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2luYXRpb25PcHRpb25zICYmICF0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplT3B0aW9ucykge1xuICAgICAgdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDI1LCA1MCwgMTAwXTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5wYWdlID0gdGhpcy5wYWdpbmF0aW9uT3B0aW9ucyA/IHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0YXRlLnBhZ2VTaXplID0gdGhpcy5wYWdpbmF0aW9uT3B0aW9ucyA/IHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemUgOiB1bmRlZmluZWQ7XG5cbiAgICAvLyBTY3JvbGxpbmcgaW5zaWRlIHRhYmxlXG4gICAgKHRoaXMubm92b0RhdGFUYWJsZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQpLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsTGlzdGVuZXJIYW5kbGVyKTtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIG9uU2VhcmNoQ2hhbmdlKHRlcm06IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUuZ2xvYmFsU2VhcmNoID0gdGVybTtcbiAgICB0aGlzLnN0YXRlLnJlc2V0KGZhbHNlLCB0cnVlKTtcbiAgICB0aGlzLnN0YXRlLnVwZGF0ZXMubmV4dCh7IGdsb2JhbFNlYXJjaDogdGVybSwgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlciwgc29ydDogdGhpcy5zdGF0ZS5zb3J0IH0pO1xuICB9XG5cbiAgcHVibGljIHRyYWNrQ29sdW1uc0J5KGluZGV4OiBudW1iZXIsIGl0ZW06IElEYXRhVGFibGVDb2x1bW48VD4pIHtcbiAgICByZXR1cm4gaXRlbS5pZDtcbiAgfVxuXG4gIHB1YmxpYyBpc0Rpc2FibGVkKGNoZWNrOiBhbnksIHJvdzogVCk6IGJvb2xlYW4ge1xuICAgIGlmIChjaGVjay5kaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChjaGVjay5kaXNhYmxlZEZ1bmMpIHtcbiAgICAgIHJldHVybiBjaGVjay5kaXNhYmxlZEZ1bmMocm93KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzRXhwYW5kZWQocm93OiBUKTogYm9vbGVhbiB7XG4gICAgaWYgKCFyb3cpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZXhwYW5kZWRSb3dzLmhhcyhgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgfVxuXG4gIHB1YmxpYyBleHBhbmRSb3cocm93OiBUKTogdm9pZCB7XG4gICAgY29uc3QgZXhwYW5kZWQgPSB0aGlzLmlzRXhwYW5kZWQocm93KTtcblxuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgdGhpcy5zdGF0ZS5leHBhbmRlZFJvd3MuZGVsZXRlKGAke3Jvd1t0aGlzLnJvd0lkZW50aWZpZXJdfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLmV4cGFuZGVkUm93cy5hZGQoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCk7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUub25FeHBhbmRDaGFuZ2UoKChyb3cgYXMgdW5rbm93bikgYXMgeyBpZDogbnVtYmVyIH0pLmlkKTtcbiAgfVxuXG4gIHB1YmxpYyBleHBhbmRSb3dzKGV4cGFuZDogYm9vbGVhbik6IHZvaWQge1xuICAgICh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSkuZm9yRWFjaCgocm93OiBUKSA9PiB7XG4gICAgICBpZiAoIWV4cGFuZCkge1xuICAgICAgICB0aGlzLnN0YXRlLmV4cGFuZGVkUm93cy5kZWxldGUoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlLmV4cGFuZGVkUm93cy5hZGQoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zdGF0ZS5vbkV4cGFuZENoYW5nZSgpO1xuICB9XG5cbiAgcHVibGljIGFsbEN1cnJlbnRSb3dzRXhwYW5kZWQoKTogYm9vbGVhbiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAodGhpcy5kYXRhU291cmNlLmRhdGEgfHwgW10pLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXRoaXMuaXNFeHBhbmRlZCgodGhpcy5kYXRhU291cmNlLmRhdGEgfHwgW10pW2ldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHVibGljIGlzU2VsZWN0ZWQocm93OiBUKTogYm9vbGVhbiB7XG4gICAgaWYgKCFyb3cpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VsZWN0ZWRSb3dzLmhhcyhgJHtyb3dbdGhpcy5yb3dJZGVudGlmaWVyXX1gKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RSb3cocm93OiBUKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQocm93KTtcblxuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZFJvd3MuZGVsZXRlKGAke3Jvd1t0aGlzLnJvd0lkZW50aWZpZXJdfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5zZXQoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCwgcm93KTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5vblNlbGVjdGlvbkNoYW5nZSgpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdFJvd3Moc2VsZWN0ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAodGhpcy5kYXRhU291cmNlLmRhdGEgfHwgW10pLmZvckVhY2goKHJvdzogVCkgPT4ge1xuICAgICAgaWYgKCFzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5kZWxldGUoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUm93cy5zZXQoYCR7cm93W3RoaXMucm93SWRlbnRpZmllcl19YCwgcm93KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnN0YXRlLm9uU2VsZWN0aW9uQ2hhbmdlKCk7XG4gIH1cblxuICBwdWJsaWMgYWxsQ3VycmVudFJvd3NTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5pc1NlbGVjdGVkKCh0aGlzLmRhdGFTb3VyY2UuZGF0YSB8fCBbXSlbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZUxhc3REaXNwbGF5ZWRDb2x1bW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sdW1ucyAmJiB0aGlzLmRpc3BsYXllZENvbHVtbnMgJiYgMCAhPT0gdGhpcy5jb2x1bW5zLmxlbmd0aCAmJiAwICE9PSB0aGlzLmRpc3BsYXllZENvbHVtbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4uaW5pdGlhbFJlc2l6YWJsZSkge1xuICAgICAgICAgIGNvbHVtbi5yZXNpemFibGUgPSBjb2x1bW4uaW5pdGlhbFJlc2l6YWJsZS5yZXNpemFibGU7XG4gICAgICAgICAgY29sdW1uLndpZHRoID0gY29sdW1uLmluaXRpYWxSZXNpemFibGUud2lkdGg7XG4gICAgICAgICAgY29sdW1uLmluaXRpYWxSZXNpemFibGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVzaXphYmxlQ29sdW1uczogc3RyaW5nW10gPSB0aGlzLmRpc3BsYXllZENvbHVtbnMuZmlsdGVyKFxuICAgICAgICAobmFtZTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5maW5kSW5kZXgoXG4gICAgICAgICAgICAgIChjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sdW1uLnJlc2l6YWJsZSAmJiBjb2x1bW4uaWQgPT09IG5hbWU7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApICE9PSAtMVxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgICAgaWYgKHJlc2l6YWJsZUNvbHVtbnMgJiYgcmVzaXphYmxlQ29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGxhc3RSZXNpemFibGVDb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4gPSB0aGlzLmNvbHVtbnMuZmluZCgoY29sdW1uOiBJRGF0YVRhYmxlQ29sdW1uPFQ+KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvbHVtbi5pZCA9PT0gcmVzaXphYmxlQ29sdW1uc1tyZXNpemFibGVDb2x1bW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB9KTtcbiAgICAgICAgbGFzdFJlc2l6YWJsZUNvbHVtbi5pbml0aWFsUmVzaXphYmxlID0ge1xuICAgICAgICAgIHJlc2l6YWJsZTogbGFzdFJlc2l6YWJsZUNvbHVtbi5yZXNpemFibGUsXG4gICAgICAgICAgd2lkdGg6IGxhc3RSZXNpemFibGVDb2x1bW4ud2lkdGgsXG4gICAgICAgIH07XG4gICAgICAgIGxhc3RSZXNpemFibGVDb2x1bW4ud2lkdGggPSB1bmRlZmluZWQ7XG4gICAgICAgIGxhc3RSZXNpemFibGVDb2x1bW4ucmVzaXphYmxlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb25maWd1cmVDb2x1bW5zKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbHVtbnMgJiYgdGhpcy5jb2x1bW5zLmxlbmd0aCAhPT0gMCAmJiBPYmplY3Qua2V5cyh0aGlzLnRlbXBsYXRlcykubGVuZ3RoICE9PSAwKSB7XG4gICAgICAvLyBGaWd1cmUgdGhlIGNvbHVtbiB0ZW1wbGF0ZXNcbiAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW46IElEYXRhVGFibGVDb2x1bW48VD4pID0+IHtcbiAgICAgICAgLy8gRmlndXJlIHRoZSB0ZW1wbGF0ZVxuICAgICAgICBsZXQgdGVtcGxhdGVOYW1lOiBzdHJpbmc7XG4gICAgICAgIGlmIChjb2x1bW4udGVtcGxhdGUpIHtcbiAgICAgICAgICAvLyBQYXNzIGl0IGluIGFzIHRlbXBsYXRlXG4gICAgICAgICAgdGVtcGxhdGVOYW1lID0gY29sdW1uLnRlbXBsYXRlO1xuICAgICAgICB9IGVsc2UgaWYgKCEhdGhpcy50ZW1wbGF0ZXNbY29sdW1uLmlkXSkge1xuICAgICAgICAgIC8vIEN1c3RvbSB0ZW1wbGF0ZSBmb3IgdGhlIGNvbHVtbiBpZFxuICAgICAgICAgIHRlbXBsYXRlTmFtZSA9IGNvbHVtbi5pZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBEZWZhdWx0IHRvIHRoZSBkZWZhdWxDZWxsVGVtcGxhdGVcbiAgICAgICAgICBpZiAoY29sdW1uLnR5cGUgPT09ICdhY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoY29sdW1uLmFjdGlvbiAmJiBjb2x1bW4uYWN0aW9uLm9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgaWYgKCFjb2x1bW4uYWN0aW9uLmljb24pIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4uYWN0aW9uLmljb24gPSAnY29sbGFwc2UnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRlbXBsYXRlTmFtZSA9ICdkcm9wZG93bkNlbGxUZW1wbGF0ZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0ZW1wbGF0ZU5hbWUgPSAnYnV0dG9uQ2VsbFRlbXBsYXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNvbHVtbi50eXBlID09PSAnbGluazp0ZWwnIHx8IGNvbHVtbi50eXBlID09PSAnbGluazptYWlsdG8nKSB7XG4gICAgICAgICAgICAgIHRlbXBsYXRlTmFtZSA9IGAke2NvbHVtbi50eXBlLnNwbGl0KCc6JylbMV19Q2VsbFRlbXBsYXRlYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRlbXBsYXRlTmFtZSA9IGAke2NvbHVtbi50eXBlfUNlbGxUZW1wbGF0ZWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sdW1uVG9UZW1wbGF0ZVtjb2x1bW4uaWRdID0gdGhpcy50ZW1wbGF0ZXNbdGVtcGxhdGVOYW1lXTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jb25maWd1cmVMYXN0RGlzcGxheWVkQ29sdW1uKCk7XG4gICAgICB0aGlzLmNvbHVtbnNMb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0OiBFbGVtZW50ID0gdGhpcy5ub3ZvRGF0YVRhYmxlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQgYXMgRWxlbWVudDtcbiAgICBjb25zdCBsZWZ0OiBudW1iZXIgPSB0YXJnZXQuc2Nyb2xsTGVmdDtcbiAgICBpZiAobGVmdCAhPT0gdGhpcy5zY3JvbGxMZWZ0KSB7XG4gICAgICB0aGlzLnNjcm9sbExlZnQgPSB0YXJnZXQuc2Nyb2xsTGVmdDtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==