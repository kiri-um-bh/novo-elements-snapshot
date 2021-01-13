import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CdkTable, CDK_TABLE_TEMPLATE } from '@angular/cdk/table';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, EventEmitter, HostBinding, Input, ViewEncapsulation, } from '@angular/core';
import { NovoLabelService } from '../../services/novo-label-service';
import { notify } from '../../utils/notifier/notifier.util';
import { NovoActivityTableState } from './state';
import { ActivityTableDataSource } from './table-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
import * as i2 from "../../services/novo-label-service";
import * as i3 from "./state";
import * as i4 from "@angular/common";
import * as i5 from "../search/SearchBox";
import * as i6 from "@angular/forms";
import * as i7 from "./pagination";
import * as i8 from "../loading/Loading";
import * as i9 from "./sort";
import * as i10 from "./cell";
import * as i11 from "./row";
import * as i12 from "./cell-header";
const _c0 = [[["caption"]], [["colgroup"], ["col"]]];
const _c1 = ["caption", "colgroup, col"];
function NovoActivityTable_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Total: ", ctx_r0.dataSource == null ? null : ctx_r0.dataSource.total, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Current: ", ctx_r0.dataSource == null ? null : ctx_r0.dataSource.current, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Totally Empty: ", ctx_r0.dataSource == null ? null : ctx_r0.dataSource.totallyEmpty, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Currently Empty: ", ctx_r0.dataSource == null ? null : ctx_r0.dataSource.currentlyEmpty, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Loading (DataSource): ", ctx_r0.dataSource == null ? null : ctx_r0.dataSource.loading, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("User Filtered: ", ctx_r0.state.userFiltered, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Loading (Table): ", ctx_r0.loading, "");
} }
function NovoActivityTable_header_1_novo_search_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-search", 11);
    i0.ɵɵlistener("searchChanged", function NovoActivityTable_header_1_novo_search_2_Template_novo_search_searchChanged_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.onSearchChange($event); })("ngModelChange", function NovoActivityTable_header_1_novo_search_2_Template_novo_search_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.state.globalSearch = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r7.state.globalSearch)("placeholder", ctx_r7.searchOptions == null ? null : ctx_r7.searchOptions.placeholder)("hint", ctx_r7.searchOptions == null ? null : ctx_r7.searchOptions.tooltip);
} }
function NovoActivityTable_header_1_novo_simple_table_pagination_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-simple-table-pagination", 12);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("length", ctx_r8.dataSource == null ? null : ctx_r8.dataSource.total)("page", ctx_r8.paginationOptions.page)("pageSize", ctx_r8.paginationOptions.pageSize)("pageSizeOptions", ctx_r8.paginationOptions.pageSizeOptions);
} }
function NovoActivityTable_header_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "header");
    i0.ɵɵprojection(1);
    i0.ɵɵtemplate(2, NovoActivityTable_header_1_novo_search_2_Template, 1, 3, "novo-search", 8);
    i0.ɵɵtemplate(3, NovoActivityTable_header_1_novo_simple_table_pagination_3_Template, 1, 4, "novo-simple-table-pagination", 9);
    i0.ɵɵelementStart(4, "div", 10);
    i0.ɵɵprojection(5, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.hideGlobalSearch);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.paginationOptions);
} }
function NovoActivityTable_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "novo-loading");
    i0.ɵɵelementEnd();
} }
function NovoActivityTable_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵprojection(1, 2);
    i0.ɵɵelementEnd();
} }
function NovoActivityTable_novo_simple_table_6_novo_simple_checkbox_header_cell_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-simple-checkbox-header-cell");
} }
function NovoActivityTable_novo_simple_table_6_novo_simple_checkbox_cell_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-simple-checkbox-cell", 22);
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    i0.ɵɵproperty("row", row_r18)("index", i_r19);
} }
function NovoActivityTable_novo_simple_table_6_ng_container_5_novo_simple_empty_header_cell_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-simple-empty-header-cell");
} if (rf & 2) {
    const column_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassProp("button-header-cell", !column_r20.options)("dropdown-header-cell", column_r20.options);
} }
function NovoActivityTable_novo_simple_table_6_ng_container_5_novo_simple_action_cell_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-simple-action-cell", 26);
} if (rf & 2) {
    const row_r24 = ctx.$implicit;
    const column_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("row", row_r24)("column", column_r20);
} }
function NovoActivityTable_novo_simple_table_6_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 23);
    i0.ɵɵtemplate(1, NovoActivityTable_novo_simple_table_6_ng_container_5_novo_simple_empty_header_cell_1_Template, 1, 4, "novo-simple-empty-header-cell", 24);
    i0.ɵɵtemplate(2, NovoActivityTable_novo_simple_table_6_ng_container_5_novo_simple_action_cell_2_Template, 1, 2, "novo-simple-action-cell", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r20 = ctx.$implicit;
    i0.ɵɵproperty("novoSimpleColumnDef", column_r20.id);
} }
function NovoActivityTable_novo_simple_table_6_ng_container_6_novo_simple_header_cell_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-simple-header-cell", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r27 = i0.ɵɵnextContext().$implicit;
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("column", column_r27)("novo-simple-cell-config", column_r27.config)("defaultSort", ctx_r28.defaultSort);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(column_r27.label);
} }
function NovoActivityTable_novo_simple_table_6_ng_container_6_novo_simple_cell_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-simple-cell", 30);
} if (rf & 2) {
    const row_r31 = ctx.$implicit;
    const column_r27 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("column", column_r27)("row", row_r31);
} }
function NovoActivityTable_novo_simple_table_6_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 23);
    i0.ɵɵtemplate(1, NovoActivityTable_novo_simple_table_6_ng_container_6_novo_simple_header_cell_1_Template, 2, 4, "novo-simple-header-cell", 27);
    i0.ɵɵtemplate(2, NovoActivityTable_novo_simple_table_6_ng_container_6_novo_simple_cell_2_Template, 1, 2, "novo-simple-cell", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r27 = ctx.$implicit;
    i0.ɵɵproperty("novoSimpleColumnDef", column_r27.id);
} }
function NovoActivityTable_novo_simple_table_6_novo_simple_header_row_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-simple-header-row");
} }
function NovoActivityTable_novo_simple_table_6_novo_simple_row_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-simple-row");
} }
function NovoActivityTable_novo_simple_table_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-simple-table", 15);
    i0.ɵɵprojection(1, 3);
    i0.ɵɵelementContainerStart(2, 16);
    i0.ɵɵtemplate(3, NovoActivityTable_novo_simple_table_6_novo_simple_checkbox_header_cell_3_Template, 1, 0, "novo-simple-checkbox-header-cell", 17);
    i0.ɵɵtemplate(4, NovoActivityTable_novo_simple_table_6_novo_simple_checkbox_cell_4_Template, 1, 2, "novo-simple-checkbox-cell", 18);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(5, NovoActivityTable_novo_simple_table_6_ng_container_5_Template, 3, 1, "ng-container", 19);
    i0.ɵɵtemplate(6, NovoActivityTable_novo_simple_table_6_ng_container_6_Template, 3, 1, "ng-container", 19);
    i0.ɵɵtemplate(7, NovoActivityTable_novo_simple_table_6_novo_simple_header_row_7_Template, 1, 0, "novo-simple-header-row", 20);
    i0.ɵɵtemplate(8, NovoActivityTable_novo_simple_table_6_novo_simple_row_8_Template, 1, 0, "novo-simple-row", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("empty", (ctx_r4.dataSource == null ? null : ctx_r4.dataSource.currentlyEmpty) && ctx_r4.state.userFiltered);
    i0.ɵɵproperty("dataSource", ctx_r4.dataSource)("hidden", (ctx_r4.dataSource == null ? null : ctx_r4.dataSource.totallyEmpty) && !ctx_r4.state.userFiltered);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r4.actionColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.columns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("novoSimpleHeaderRowDef", ctx_r4.displayedColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("novoSimpleRowDefColumns", ctx_r4.displayedColumns);
} }
function NovoActivityTable_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵelementStart(1, "h4");
    i0.ɵɵelement(2, "i", 35);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r35 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r35.labels.noMatchingRecordsMessage, "");
} }
function NovoActivityTable_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelementStart(1, "div", null, 32);
    i0.ɵɵprojection(3, 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, NovoActivityTable_div_7_div_4_Template, 4, 1, "div", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r34 = i0.ɵɵreference(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", _r34.childNodes.length == 0);
} }
function NovoActivityTable_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵelementStart(1, "h4");
    i0.ɵɵelement(2, "i", 35);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r37 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r37.labels.emptyTableMessage, "");
} }
function NovoActivityTable_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36);
    i0.ɵɵelementStart(1, "div", null, 37);
    i0.ɵɵprojection(3, 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, NovoActivityTable_div_8_div_4_Template, 4, 1, "div", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r36 = i0.ɵɵreference(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", _r36.childNodes.length == 0);
} }
const _c2 = [[["", "novo-activity-table-custom-header", ""]], [["", "novo-activity-table-actions", ""]], [["", "novo-activity-table-custom-filter", ""]], "*", [["", "novo-activity-table-no-results-message", ""]], [["", "novo-activity-table-empty-message", ""]]];
const _c3 = ["[novo-activity-table-custom-header]", "[novo-activity-table-actions]", "[novo-activity-table-custom-filter]", "*", "[novo-activity-table-no-results-message]", "[novo-activity-table-empty-message]"];
/** Workaround for https://github.com/angular/angular/issues/17849 */
export const _NovoTable = CdkTable;
export class NovoTable extends _NovoTable {
}
NovoTable.ɵfac = function NovoTable_Factory(t) { return ɵNovoTable_BaseFactory(t || NovoTable); };
NovoTable.ɵcmp = i0.ɵɵdefineComponent({ type: NovoTable, selectors: [["novo-simple-table"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 6, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]], template: function NovoTable_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵprojection(0);
        i0.ɵɵprojection(1, 1);
        i0.ɵɵelementContainer(2, 0);
        i0.ɵɵelementContainer(3, 1);
        i0.ɵɵelementContainer(4, 2);
        i0.ɵɵelementContainer(5, 3);
    } }, directives: [i1.HeaderRowOutlet, i1.DataRowOutlet, i1.NoDataRowOutlet, i1.FooterRowOutlet], encapsulation: 2, changeDetection: 0 });
const ɵNovoTable_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(NovoTable);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTable, [{
        type: Component,
        args: [{
                selector: 'novo-simple-table',
                template: CDK_TABLE_TEMPLATE,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
export class NovoActivityTableActions {
}
NovoActivityTableActions.ɵfac = function NovoActivityTableActions_Factory(t) { return new (t || NovoActivityTableActions)(); };
NovoActivityTableActions.ɵdir = i0.ɵɵdefineDirective({ type: NovoActivityTableActions, selectors: [["novo-activity-table-actions"]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoActivityTableActions, [{
        type: Directive,
        args: [{
                selector: 'novo-activity-table-actions',
            }]
    }], null, null); })();
export class NovoActivityTableCustomHeader {
}
NovoActivityTableCustomHeader.ɵfac = function NovoActivityTableCustomHeader_Factory(t) { return new (t || NovoActivityTableCustomHeader)(); };
NovoActivityTableCustomHeader.ɵdir = i0.ɵɵdefineDirective({ type: NovoActivityTableCustomHeader, selectors: [["novo-activity-table-custom-header"]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoActivityTableCustomHeader, [{
        type: Directive,
        args: [{
                selector: 'novo-activity-table-custom-header',
            }]
    }], null, null); })();
export class NovoActivityTableCustomFilter {
}
NovoActivityTableCustomFilter.ɵfac = function NovoActivityTableCustomFilter_Factory(t) { return new (t || NovoActivityTableCustomFilter)(); };
NovoActivityTableCustomFilter.ɵdir = i0.ɵɵdefineDirective({ type: NovoActivityTableCustomFilter, selectors: [["novo-activity-table-custom-filter"]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoActivityTableCustomFilter, [{
        type: Directive,
        args: [{
                selector: 'novo-activity-table-custom-filter',
            }]
    }], null, null); })();
export class NovoActivityTableEmptyMessage {
}
NovoActivityTableEmptyMessage.ɵfac = function NovoActivityTableEmptyMessage_Factory(t) { return new (t || NovoActivityTableEmptyMessage)(); };
NovoActivityTableEmptyMessage.ɵdir = i0.ɵɵdefineDirective({ type: NovoActivityTableEmptyMessage, selectors: [["novo-activity-table-empty-message"]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoActivityTableEmptyMessage, [{
        type: Directive,
        args: [{
                selector: 'novo-activity-table-empty-message',
            }]
    }], null, null); })();
export class NovoActivityTableNoResultsMessage {
}
NovoActivityTableNoResultsMessage.ɵfac = function NovoActivityTableNoResultsMessage_Factory(t) { return new (t || NovoActivityTableNoResultsMessage)(); };
NovoActivityTableNoResultsMessage.ɵdir = i0.ɵɵdefineDirective({ type: NovoActivityTableNoResultsMessage, selectors: [["novo-activity-table-no-results-message"]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoActivityTableNoResultsMessage, [{
        type: Directive,
        args: [{
                selector: 'novo-activity-table-no-results-message',
            }]
    }], null, null); })();
export class NovoActivityTable {
    constructor(labels, ref, state) {
        this.labels = labels;
        this.ref = ref;
        this.state = state;
        this.globalSearchHiddenClassToggle = false;
        this.loading = true;
        notify('[Deprecated]: The simple table is deprecated. Please migrate to novo-data-tables!');
    }
    set customFilter(v) {
        this._customFilter = coerceBooleanProperty(v);
    }
    get customFilter() {
        return this._customFilter;
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
    set debug(v) {
        this._debug = coerceBooleanProperty(v);
    }
    get debug() {
        return this._debug;
    }
    get empty() {
        return this.dataSource && this.dataSource.totallyEmpty;
    }
    get loadingClass() {
        return this.loading || (this.dataSource && this.dataSource.loading);
    }
    ngOnChanges(changes) {
        this.loading = changes.activityService && !changes.activityService.currentValue;
        this.ref.detectChanges();
        if (changes.activityService && changes.activityService.currentValue) {
            this.loading = false;
            this.dataSource = new ActivityTableDataSource(this.activityService, this.state, this.ref);
            this.ref.detectChanges();
        }
        if (changes.outsideFilter && changes.outsideFilter.currentValue) {
            if (!this.outsideFilterSubscription) {
                this.outsideFilterSubscription = this.outsideFilter.subscribe((filter) => {
                    this.state.outsideFilter = filter;
                    this.state.updates.next({ globalSearch: this.state.globalSearch, filter: this.state.filter, sort: this.state.sort });
                    this.ref.markForCheck();
                });
            }
        }
    }
    ngOnDestroy() {
        if (this.outsideFilterSubscription) {
            this.outsideFilterSubscription.unsubscribe();
        }
    }
    ngAfterContentInit() {
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
        this.ref.markForCheck();
    }
    onSearchChange(term) {
        this.state.globalSearch = term;
        this.state.reset(false, true);
        this.state.updates.next({ globalSearch: term, filter: this.state.filter, sort: this.state.sort });
    }
}
NovoActivityTable.ɵfac = function NovoActivityTable_Factory(t) { return new (t || NovoActivityTable)(i0.ɵɵdirectiveInject(i2.NovoLabelService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.NovoActivityTableState)); };
NovoActivityTable.ɵcmp = i0.ɵɵdefineComponent({ type: NovoActivityTable, selectors: [["novo-activity-table"]], hostVars: 6, hostBindings: function NovoActivityTable_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("global-search-hidden", ctx.globalSearchHiddenClassToggle)("empty", ctx.empty)("loading", ctx.loadingClass);
    } }, inputs: { activityService: "activityService", columns: "columns", displayedColumns: "displayedColumns", actionColumns: "actionColumns", paginationOptions: "paginationOptions", searchOptions: "searchOptions", defaultSort: "defaultSort", outsideFilter: "outsideFilter", customFilter: "customFilter", forceShowHeader: "forceShowHeader", hideGlobalSearch: "hideGlobalSearch", debug: "debug" }, features: [i0.ɵɵProvidersFeature([NovoActivityTableState]), i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 9, vars: 7, consts: [[4, "ngIf"], ["class", "novo-activity-table-loading-mask", "data-automation-id", "novo-activity-table-loading", 4, "ngIf"], [1, "novo-activity-table-filter-container"], ["class", "novo-activity-table-custom-filter", 4, "ngIf"], [1, "novo-activity-table-container"], ["novoSortFilter", "", "novoSelection", "", 3, "dataSource", "empty", "hidden", 4, "ngIf"], ["class", "novo-activity-table-no-results-container", 4, "ngIf"], ["class", "novo-activity-table-empty-container", 4, "ngIf"], ["alwaysOpen", "true", 3, "ngModel", "placeholder", "hint", "searchChanged", "ngModelChange", 4, "ngIf"], [3, "length", "page", "pageSize", "pageSizeOptions", 4, "ngIf"], [1, "novo-activity-table-actions"], ["alwaysOpen", "true", 3, "ngModel", "placeholder", "hint", "searchChanged", "ngModelChange"], [3, "length", "page", "pageSize", "pageSizeOptions"], ["data-automation-id", "novo-activity-table-loading", 1, "novo-activity-table-loading-mask"], [1, "novo-activity-table-custom-filter"], ["novoSortFilter", "", "novoSelection", "", 3, "dataSource", "hidden"], ["novoSimpleColumnDef", "selection"], [4, "novoSimpleHeaderCellDef"], [3, "row", "index", 4, "novoSimpleCellDef"], [3, "novoSimpleColumnDef", 4, "ngFor", "ngForOf"], [4, "novoSimpleHeaderRowDef"], [4, "novoSimpleRowDef", "novoSimpleRowDefColumns"], [3, "row", "index"], [3, "novoSimpleColumnDef"], [3, "button-header-cell", "dropdown-header-cell", 4, "novoSimpleHeaderCellDef"], [3, "row", "column", 4, "novoSimpleCellDef"], [3, "row", "column"], [3, "column", "novo-simple-cell-config", "defaultSort", 4, "novoSimpleHeaderCellDef"], [3, "column", "row", 4, "novoSimpleCellDef"], [3, "column", "novo-simple-cell-config", "defaultSort"], [3, "column", "row"], [1, "novo-activity-table-no-results-container"], ["filtered", ""], ["class", "novo-activity-table-empty-message", 4, "ngIf"], [1, "novo-activity-table-empty-message"], [1, "bhi-search-question"], [1, "novo-activity-table-empty-container"], ["empty", ""]], template: function NovoActivityTable_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c2);
        i0.ɵɵtemplate(0, NovoActivityTable_div_0_Template, 15, 7, "div", 0);
        i0.ɵɵtemplate(1, NovoActivityTable_header_1_Template, 6, 2, "header", 0);
        i0.ɵɵtemplate(2, NovoActivityTable_div_2_Template, 2, 0, "div", 1);
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵtemplate(4, NovoActivityTable_div_4_Template, 2, 0, "div", 3);
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵtemplate(6, NovoActivityTable_novo_simple_table_6_Template, 9, 8, "novo-simple-table", 5);
        i0.ɵɵtemplate(7, NovoActivityTable_div_7_Template, 5, 1, "div", 6);
        i0.ɵɵtemplate(8, NovoActivityTable_div_8_Template, 5, 1, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.debug);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !((ctx.dataSource == null ? null : ctx.dataSource.totallyEmpty) && !ctx.state.userFiltered) && !ctx.loading || ctx.forceShowHeader);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.dataSource == null ? null : ctx.dataSource.loading) || ctx.loading);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.customFilter);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", (ctx.columns == null ? null : ctx.columns.length) > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.dataSource == null ? null : ctx.dataSource.currentlyEmpty) && ctx.state.userFiltered && !(ctx.dataSource == null ? null : ctx.dataSource.loading) && !ctx.loading && !ctx.dataSource.pristine);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.dataSource == null ? null : ctx.dataSource.totallyEmpty) && !(ctx.dataSource == null ? null : ctx.dataSource.loading) && !ctx.loading && !ctx.state.userFiltered && !ctx.dataSource.pristine);
    } }, directives: [i4.NgIf, i5.NovoSearchBoxElement, i6.NgControlStatus, i6.NgModel, i7.NovoSimpleTablePagination, i8.NovoLoadingElement, NovoTable, i9.NovoSortFilter, i9.NovoSelection, i10.NovoSimpleColumnDef, i10.NovoSimpleHeaderCellDef, i10.NovoSimpleCellDef, i4.NgForOf, i11.NovoSimpleHeaderRowDef, i11.NovoSimpleRowDef, i10.NovoSimpleCheckboxHeaderCell, i10.NovoSimpleCheckboxCell, i10.NovoSimpleEmptyHeaderCell, i10.NovoSimpleActionCell, i10.NovoSimpleHeaderCell, i12.NovoSimpleCellHeader, i10.NovoSimpleCell, i11.NovoSimpleHeaderRow, i11.NovoSimpleRow], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoActivityTable, [{
        type: Component,
        args: [{
                selector: 'novo-activity-table',
                template: `
    <div *ngIf="debug">
      <p>Total: {{ dataSource?.total }}</p>
      <p>Current: {{ dataSource?.current }}</p>
      <p>Totally Empty: {{ dataSource?.totallyEmpty }}</p>
      <p>Currently Empty: {{ dataSource?.currentlyEmpty }}</p>
      <p>Loading (DataSource): {{ dataSource?.loading }}</p>
      <p>User Filtered: {{ state.userFiltered }}</p>
      <p>Loading (Table): {{ loading }}</p>
    </div>
    <header *ngIf="(!(dataSource?.totallyEmpty && !state.userFiltered) && !loading) || forceShowHeader">
      <ng-content select="[novo-activity-table-custom-header]"></ng-content>
      <novo-search
        alwaysOpen="true"
        (searchChanged)="onSearchChange($event)"
        [(ngModel)]="state.globalSearch"
        *ngIf="!hideGlobalSearch"
        [placeholder]="searchOptions?.placeholder"
        [hint]="searchOptions?.tooltip"
      >
      </novo-search>
      <novo-simple-table-pagination
        *ngIf="paginationOptions"
        [length]="dataSource?.total"
        [page]="paginationOptions.page"
        [pageSize]="paginationOptions.pageSize"
        [pageSizeOptions]="paginationOptions.pageSizeOptions"
      >
      </novo-simple-table-pagination>
      <div class="novo-activity-table-actions">
        <ng-content select="[novo-activity-table-actions]"></ng-content>
      </div>
    </header>
    <div class="novo-activity-table-loading-mask" *ngIf="dataSource?.loading || loading" data-automation-id="novo-activity-table-loading">
      <novo-loading></novo-loading>
    </div>
    <div class="novo-activity-table-filter-container">
      <div class="novo-activity-table-custom-filter" *ngIf="customFilter">
        <ng-content select="[novo-activity-table-custom-filter]"></ng-content>
      </div>
      <div class="novo-activity-table-container">
        <novo-simple-table
          *ngIf="columns?.length > 0"
          [dataSource]="dataSource"
          novoSortFilter
          novoSelection
          [class.empty]="dataSource?.currentlyEmpty && state.userFiltered"
          [hidden]="dataSource?.totallyEmpty && !state.userFiltered"
        >
          <ng-content></ng-content>
          <ng-container novoSimpleColumnDef="selection">
            <novo-simple-checkbox-header-cell *novoSimpleHeaderCellDef></novo-simple-checkbox-header-cell>
            <novo-simple-checkbox-cell *novoSimpleCellDef="let row; let i = index" [row]="row" [index]="i"></novo-simple-checkbox-cell>
          </ng-container>
          <ng-container *ngFor="let column of actionColumns" [novoSimpleColumnDef]="column.id">
            <novo-simple-empty-header-cell
              [class.button-header-cell]="!column.options"
              [class.dropdown-header-cell]="column.options"
              *novoSimpleHeaderCellDef
            ></novo-simple-empty-header-cell>
            <novo-simple-action-cell *novoSimpleCellDef="let row; let i = index" [row]="row" [column]="column"></novo-simple-action-cell>
          </ng-container>
          <ng-container *ngFor="let column of columns" [novoSimpleColumnDef]="column.id">
            <novo-simple-header-cell
              *novoSimpleHeaderCellDef
              [column]="column"
              [novo-simple-cell-config]="column.config"
              [defaultSort]="defaultSort"
              >{{ column.label }}</novo-simple-header-cell
            >
            <novo-simple-cell *novoSimpleCellDef="let row" [column]="column" [row]="row"></novo-simple-cell>
          </ng-container>
          <novo-simple-header-row *novoSimpleHeaderRowDef="displayedColumns"></novo-simple-header-row>
          <novo-simple-row *novoSimpleRowDef="let row; columns: displayedColumns"></novo-simple-row>
        </novo-simple-table>
        <div
          class="novo-activity-table-no-results-container"
          *ngIf="dataSource?.currentlyEmpty && state.userFiltered && !dataSource?.loading && !loading && !dataSource.pristine"
        >
          <div #filtered><ng-content select="[novo-activity-table-no-results-message]"></ng-content></div>
          <div class="novo-activity-table-empty-message" *ngIf="filtered.childNodes.length == 0">
            <h4><i class="bhi-search-question"></i> {{ labels.noMatchingRecordsMessage }}</h4>
          </div>
        </div>
        <div
          class="novo-activity-table-empty-container"
          *ngIf="dataSource?.totallyEmpty && !dataSource?.loading && !loading && !state.userFiltered && !dataSource.pristine"
        >
          <div #empty><ng-content select="[novo-activity-table-empty-message]"></ng-content></div>
          <div class="novo-activity-table-empty-message" *ngIf="empty.childNodes.length == 0">
            <h4><i class="bhi-search-question"></i> {{ labels.emptyTableMessage }}</h4>
          </div>
        </div>
      </div>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NovoActivityTableState],
            }]
    }], function () { return [{ type: i2.NovoLabelService }, { type: i0.ChangeDetectorRef }, { type: i3.NovoActivityTableState }]; }, { globalSearchHiddenClassToggle: [{
            type: HostBinding,
            args: ['class.global-search-hidden']
        }], activityService: [{
            type: Input
        }], columns: [{
            type: Input
        }], displayedColumns: [{
            type: Input
        }], actionColumns: [{
            type: Input
        }], paginationOptions: [{
            type: Input
        }], searchOptions: [{
            type: Input
        }], defaultSort: [{
            type: Input
        }], outsideFilter: [{
            type: Input
        }], customFilter: [{
            type: Input
        }], forceShowHeader: [{
            type: Input
        }], hideGlobalSearch: [{
            type: Input
        }], debug: [{
            type: Input
        }], empty: [{
            type: HostBinding,
            args: ['class.empty']
        }], loadingClass: [{
            type: HostBinding,
            args: ['class.loading']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xFLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBSUwsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUU1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDakQsT0FBTyxFQUFFLHVCQUF1QixFQUF3QixNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztJQTJDM0UsMkJBQ0U7SUFBQSx5QkFBRztJQUFBLFlBQThCO0lBQUEsaUJBQUk7SUFDckMseUJBQUc7SUFBQSxZQUFrQztJQUFBLGlCQUFJO0lBQ3pDLHlCQUFHO0lBQUEsWUFBNkM7SUFBQSxpQkFBSTtJQUNwRCx5QkFBRztJQUFBLFlBQWlEO0lBQUEsaUJBQUk7SUFDeEQseUJBQUc7SUFBQSxhQUErQztJQUFBLGlCQUFJO0lBQ3RELDBCQUFHO0lBQUEsYUFBdUM7SUFBQSxpQkFBSTtJQUM5QywwQkFBRztJQUFBLGFBQThCO0lBQUEsaUJBQUk7SUFDdkMsaUJBQU07OztJQVBELGVBQThCO0lBQTlCLGdHQUE4QjtJQUM5QixlQUFrQztJQUFs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WUFVRixlQUFlO2tCQURsQixLQUFLO1lBVUYsZ0JBQWdCO2tCQURuQixLQUFLO1lBV0YsS0FBSztrQkFEUixLQUFLO1lBZUYsS0FBSztrQkFEUixXQUFXO21CQUFDLGFBQWE7WUFNdEIsWUFBWTtrQkFEZixXQUFXO21CQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgQ2RrVGFibGUsIENES19UQUJMRV9URU1QTEFURSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBub3RpZnkgfSBmcm9tICcuLi8uLi91dGlscy9ub3RpZmllci9ub3RpZmllci51dGlsJztcbmltcG9ydCB7IFNpbXBsZVRhYmxlQWN0aW9uQ29sdW1uLCBTaW1wbGVUYWJsZUNvbHVtbiwgU2ltcGxlVGFibGVQYWdpbmF0aW9uT3B0aW9ucywgU2ltcGxlVGFibGVTZWFyY2hPcHRpb25zIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IE5vdm9BY3Rpdml0eVRhYmxlU3RhdGUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IEFjdGl2aXR5VGFibGVEYXRhU291cmNlLCBBY3Rpdml0eVRhYmxlU2VydmljZSB9IGZyb20gJy4vdGFibGUtc291cmNlJztcblxuLyoqIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE3ODQ5ICovXG5leHBvcnQgY29uc3QgX05vdm9UYWJsZSA9IENka1RhYmxlO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS10YWJsZScsXG4gIHRlbXBsYXRlOiBDREtfVEFCTEVfVEVNUExBVEUsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGFibGU8VD4gZXh0ZW5kcyBfTm92b1RhYmxlPFQ+IHtcbiAgLy8gVE9ETzogYWRkIGV4cGxpY2l0IGNvbnN0cnVjdG9yXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tYWN0aXZpdHktdGFibGUtYWN0aW9ucycsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9BY3Rpdml0eVRhYmxlQWN0aW9ucyB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjdGl2aXR5LXRhYmxlLWN1c3RvbS1oZWFkZXInLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWN0aXZpdHlUYWJsZUN1c3RvbUhlYWRlciB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjdGl2aXR5LXRhYmxlLWN1c3RvbS1maWx0ZXInLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWN0aXZpdHlUYWJsZUN1c3RvbUZpbHRlciB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjdGl2aXR5LXRhYmxlLWVtcHR5LW1lc3NhZ2UnLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWN0aXZpdHlUYWJsZUVtcHR5TWVzc2FnZSB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjdGl2aXR5LXRhYmxlLW5vLXJlc3VsdHMtbWVzc2FnZScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9BY3Rpdml0eVRhYmxlTm9SZXN1bHRzTWVzc2FnZSB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjdGl2aXR5LXRhYmxlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICpuZ0lmPVwiZGVidWdcIj5cbiAgICAgIDxwPlRvdGFsOiB7eyBkYXRhU291cmNlPy50b3RhbCB9fTwvcD5cbiAgICAgIDxwPkN1cnJlbnQ6IHt7IGRhdGFTb3VyY2U/LmN1cnJlbnQgfX08L3A+XG4gICAgICA8cD5Ub3RhbGx5IEVtcHR5OiB7eyBkYXRhU291cmNlPy50b3RhbGx5RW1wdHkgfX08L3A+XG4gICAgICA8cD5DdXJyZW50bHkgRW1wdHk6IHt7IGRhdGFTb3VyY2U/LmN1cnJlbnRseUVtcHR5IH19PC9wPlxuICAgICAgPHA+TG9hZGluZyAoRGF0YVNvdXJjZSk6IHt7IGRhdGFTb3VyY2U/LmxvYWRpbmcgfX08L3A+XG4gICAgICA8cD5Vc2VyIEZpbHRlcmVkOiB7eyBzdGF0ZS51c2VyRmlsdGVyZWQgfX08L3A+XG4gICAgICA8cD5Mb2FkaW5nIChUYWJsZSk6IHt7IGxvYWRpbmcgfX08L3A+XG4gICAgPC9kaXY+XG4gICAgPGhlYWRlciAqbmdJZj1cIighKGRhdGFTb3VyY2U/LnRvdGFsbHlFbXB0eSAmJiAhc3RhdGUudXNlckZpbHRlcmVkKSAmJiAhbG9hZGluZykgfHwgZm9yY2VTaG93SGVhZGVyXCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbm92by1hY3Rpdml0eS10YWJsZS1jdXN0b20taGVhZGVyXVwiPjwvbmctY29udGVudD5cbiAgICAgIDxub3ZvLXNlYXJjaFxuICAgICAgICBhbHdheXNPcGVuPVwidHJ1ZVwiXG4gICAgICAgIChzZWFyY2hDaGFuZ2VkKT1cIm9uU2VhcmNoQ2hhbmdlKCRldmVudClcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cInN0YXRlLmdsb2JhbFNlYXJjaFwiXG4gICAgICAgICpuZ0lmPVwiIWhpZGVHbG9iYWxTZWFyY2hcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwic2VhcmNoT3B0aW9ucz8ucGxhY2Vob2xkZXJcIlxuICAgICAgICBbaGludF09XCJzZWFyY2hPcHRpb25zPy50b29sdGlwXCJcbiAgICAgID5cbiAgICAgIDwvbm92by1zZWFyY2g+XG4gICAgICA8bm92by1zaW1wbGUtdGFibGUtcGFnaW5hdGlvblxuICAgICAgICAqbmdJZj1cInBhZ2luYXRpb25PcHRpb25zXCJcbiAgICAgICAgW2xlbmd0aF09XCJkYXRhU291cmNlPy50b3RhbFwiXG4gICAgICAgIFtwYWdlXT1cInBhZ2luYXRpb25PcHRpb25zLnBhZ2VcIlxuICAgICAgICBbcGFnZVNpemVdPVwicGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemVcIlxuICAgICAgICBbcGFnZVNpemVPcHRpb25zXT1cInBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplT3B0aW9uc1wiXG4gICAgICA+XG4gICAgICA8L25vdm8tc2ltcGxlLXRhYmxlLXBhZ2luYXRpb24+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1hY3Rpdml0eS10YWJsZS1hY3Rpb25zXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltub3ZvLWFjdGl2aXR5LXRhYmxlLWFjdGlvbnNdXCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtbG9hZGluZy1tYXNrXCIgKm5nSWY9XCJkYXRhU291cmNlPy5sb2FkaW5nIHx8IGxvYWRpbmdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLWxvYWRpbmdcIj5cbiAgICAgIDxub3ZvLWxvYWRpbmc+PC9ub3ZvLWxvYWRpbmc+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtZmlsdGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtY3VzdG9tLWZpbHRlclwiICpuZ0lmPVwiY3VzdG9tRmlsdGVyXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltub3ZvLWFjdGl2aXR5LXRhYmxlLWN1c3RvbS1maWx0ZXJdXCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1hY3Rpdml0eS10YWJsZS1jb250YWluZXJcIj5cbiAgICAgICAgPG5vdm8tc2ltcGxlLXRhYmxlXG4gICAgICAgICAgKm5nSWY9XCJjb2x1bW5zPy5sZW5ndGggPiAwXCJcbiAgICAgICAgICBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCJcbiAgICAgICAgICBub3ZvU29ydEZpbHRlclxuICAgICAgICAgIG5vdm9TZWxlY3Rpb25cbiAgICAgICAgICBbY2xhc3MuZW1wdHldPVwiZGF0YVNvdXJjZT8uY3VycmVudGx5RW1wdHkgJiYgc3RhdGUudXNlckZpbHRlcmVkXCJcbiAgICAgICAgICBbaGlkZGVuXT1cImRhdGFTb3VyY2U/LnRvdGFsbHlFbXB0eSAmJiAhc3RhdGUudXNlckZpbHRlcmVkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICA8bmctY29udGFpbmVyIG5vdm9TaW1wbGVDb2x1bW5EZWY9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICAgIDxub3ZvLXNpbXBsZS1jaGVja2JveC1oZWFkZXItY2VsbCAqbm92b1NpbXBsZUhlYWRlckNlbGxEZWY+PC9ub3ZvLXNpbXBsZS1jaGVja2JveC1oZWFkZXItY2VsbD5cbiAgICAgICAgICAgIDxub3ZvLXNpbXBsZS1jaGVja2JveC1jZWxsICpub3ZvU2ltcGxlQ2VsbERlZj1cImxldCByb3c7IGxldCBpID0gaW5kZXhcIiBbcm93XT1cInJvd1wiIFtpbmRleF09XCJpXCI+PC9ub3ZvLXNpbXBsZS1jaGVja2JveC1jZWxsPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBhY3Rpb25Db2x1bW5zXCIgW25vdm9TaW1wbGVDb2x1bW5EZWZdPVwiY29sdW1uLmlkXCI+XG4gICAgICAgICAgICA8bm92by1zaW1wbGUtZW1wdHktaGVhZGVyLWNlbGxcbiAgICAgICAgICAgICAgW2NsYXNzLmJ1dHRvbi1oZWFkZXItY2VsbF09XCIhY29sdW1uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICBbY2xhc3MuZHJvcGRvd24taGVhZGVyLWNlbGxdPVwiY29sdW1uLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAqbm92b1NpbXBsZUhlYWRlckNlbGxEZWZcbiAgICAgICAgICAgID48L25vdm8tc2ltcGxlLWVtcHR5LWhlYWRlci1jZWxsPlxuICAgICAgICAgICAgPG5vdm8tc2ltcGxlLWFjdGlvbi1jZWxsICpub3ZvU2ltcGxlQ2VsbERlZj1cImxldCByb3c7IGxldCBpID0gaW5kZXhcIiBbcm93XT1cInJvd1wiIFtjb2x1bW5dPVwiY29sdW1uXCI+PC9ub3ZvLXNpbXBsZS1hY3Rpb24tY2VsbD5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiIFtub3ZvU2ltcGxlQ29sdW1uRGVmXT1cImNvbHVtbi5pZFwiPlxuICAgICAgICAgICAgPG5vdm8tc2ltcGxlLWhlYWRlci1jZWxsXG4gICAgICAgICAgICAgICpub3ZvU2ltcGxlSGVhZGVyQ2VsbERlZlxuICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAgICAgICAgIFtub3ZvLXNpbXBsZS1jZWxsLWNvbmZpZ109XCJjb2x1bW4uY29uZmlnXCJcbiAgICAgICAgICAgICAgW2RlZmF1bHRTb3J0XT1cImRlZmF1bHRTb3J0XCJcbiAgICAgICAgICAgICAgPnt7IGNvbHVtbi5sYWJlbCB9fTwvbm92by1zaW1wbGUtaGVhZGVyLWNlbGxcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxub3ZvLXNpbXBsZS1jZWxsICpub3ZvU2ltcGxlQ2VsbERlZj1cImxldCByb3dcIiBbY29sdW1uXT1cImNvbHVtblwiIFtyb3ddPVwicm93XCI+PC9ub3ZvLXNpbXBsZS1jZWxsPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxub3ZvLXNpbXBsZS1oZWFkZXItcm93ICpub3ZvU2ltcGxlSGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvbm92by1zaW1wbGUtaGVhZGVyLXJvdz5cbiAgICAgICAgICA8bm92by1zaW1wbGUtcm93ICpub3ZvU2ltcGxlUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1uc1wiPjwvbm92by1zaW1wbGUtcm93PlxuICAgICAgICA8L25vdm8tc2ltcGxlLXRhYmxlPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLW5vLXJlc3VsdHMtY29udGFpbmVyXCJcbiAgICAgICAgICAqbmdJZj1cImRhdGFTb3VyY2U/LmN1cnJlbnRseUVtcHR5ICYmIHN0YXRlLnVzZXJGaWx0ZXJlZCAmJiAhZGF0YVNvdXJjZT8ubG9hZGluZyAmJiAhbG9hZGluZyAmJiAhZGF0YVNvdXJjZS5wcmlzdGluZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2ICNmaWx0ZXJlZD48bmctY29udGVudCBzZWxlY3Q9XCJbbm92by1hY3Rpdml0eS10YWJsZS1uby1yZXN1bHRzLW1lc3NhZ2VdXCI+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLWVtcHR5LW1lc3NhZ2VcIiAqbmdJZj1cImZpbHRlcmVkLmNoaWxkTm9kZXMubGVuZ3RoID09IDBcIj5cbiAgICAgICAgICAgIDxoND48aSBjbGFzcz1cImJoaS1zZWFyY2gtcXVlc3Rpb25cIj48L2k+IHt7IGxhYmVscy5ub01hdGNoaW5nUmVjb3Jkc01lc3NhZ2UgfX08L2g0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwibm92by1hY3Rpdml0eS10YWJsZS1lbXB0eS1jb250YWluZXJcIlxuICAgICAgICAgICpuZ0lmPVwiZGF0YVNvdXJjZT8udG90YWxseUVtcHR5ICYmICFkYXRhU291cmNlPy5sb2FkaW5nICYmICFsb2FkaW5nICYmICFzdGF0ZS51c2VyRmlsdGVyZWQgJiYgIWRhdGFTb3VyY2UucHJpc3RpbmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiAjZW1wdHk+PG5nLWNvbnRlbnQgc2VsZWN0PVwiW25vdm8tYWN0aXZpdHktdGFibGUtZW1wdHktbWVzc2FnZV1cIj48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtZW1wdHktbWVzc2FnZVwiICpuZ0lmPVwiZW1wdHkuY2hpbGROb2Rlcy5sZW5ndGggPT0gMFwiPlxuICAgICAgICAgICAgPGg0PjxpIGNsYXNzPVwiYmhpLXNlYXJjaC1xdWVzdGlvblwiPjwvaT4ge3sgbGFiZWxzLmVtcHR5VGFibGVNZXNzYWdlIH19PC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW05vdm9BY3Rpdml0eVRhYmxlU3RhdGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWN0aXZpdHlUYWJsZTxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5nbG9iYWwtc2VhcmNoLWhpZGRlbicpXG4gIGdsb2JhbFNlYXJjaEhpZGRlbkNsYXNzVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgYWN0aXZpdHlTZXJ2aWNlOiBBY3Rpdml0eVRhYmxlU2VydmljZTxUPjtcbiAgQElucHV0KClcbiAgY29sdW1uczogU2ltcGxlVGFibGVDb2x1bW48VD5bXTtcbiAgQElucHV0KClcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW107XG4gIEBJbnB1dCgpXG4gIGFjdGlvbkNvbHVtbnM6IFNpbXBsZVRhYmxlQWN0aW9uQ29sdW1uPFQ+W107XG4gIEBJbnB1dCgpXG4gIHBhZ2luYXRpb25PcHRpb25zOiBTaW1wbGVUYWJsZVBhZ2luYXRpb25PcHRpb25zO1xuICBASW5wdXQoKVxuICBzZWFyY2hPcHRpb25zOiBTaW1wbGVUYWJsZVNlYXJjaE9wdGlvbnM7XG4gIEBJbnB1dCgpXG4gIGRlZmF1bHRTb3J0OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfTtcbiAgQElucHV0KClcbiAgb3V0c2lkZUZpbHRlcjogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgQElucHV0KClcbiAgc2V0IGN1c3RvbUZpbHRlcih2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fY3VzdG9tRmlsdGVyID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBjdXN0b21GaWx0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUZpbHRlcjtcbiAgfVxuICBwcml2YXRlIF9jdXN0b21GaWx0ZXI6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGZvcmNlU2hvd0hlYWRlcih2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZm9yY2VTaG93SGVhZGVyID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBmb3JjZVNob3dIZWFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvcmNlU2hvd0hlYWRlcjtcbiAgfVxuICBwcml2YXRlIF9mb3JjZVNob3dIZWFkZXI6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGhpZGVHbG9iYWxTZWFyY2godjogYm9vbGVhbikge1xuICAgIHRoaXMuX2hpZGVHbG9iYWxTZWFyY2ggPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gICAgdGhpcy5nbG9iYWxTZWFyY2hIaWRkZW5DbGFzc1RvZ2dsZSA9IHRoaXMuX2hpZGVHbG9iYWxTZWFyY2g7XG4gIH1cbiAgZ2V0IGhpZGVHbG9iYWxTZWFyY2goKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGVHbG9iYWxTZWFyY2g7XG4gIH1cbiAgcHJpdmF0ZSBfaGlkZUdsb2JhbFNlYXJjaDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzZXQgZGVidWcodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2RlYnVnID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBkZWJ1ZygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVidWc7XG4gIH1cbiAgcHJpdmF0ZSBfZGVidWc6IGJvb2xlYW47XG5cbiAgcHVibGljIGRhdGFTb3VyY2U6IEFjdGl2aXR5VGFibGVEYXRhU291cmNlPFQ+O1xuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHJpdmF0ZSBvdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5lbXB0eScpXG4gIGdldCBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlICYmIHRoaXMuZGF0YVNvdXJjZS50b3RhbGx5RW1wdHk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxvYWRpbmcnKVxuICBnZXQgbG9hZGluZ0NsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWRpbmcgfHwgKHRoaXMuZGF0YVNvdXJjZSAmJiB0aGlzLmRhdGFTb3VyY2UubG9hZGluZyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBzdGF0ZTogTm92b0FjdGl2aXR5VGFibGVTdGF0ZSkge1xuICAgIG5vdGlmeSgnW0RlcHJlY2F0ZWRdOiBUaGUgc2ltcGxlIHRhYmxlIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSBtaWdyYXRlIHRvIG5vdm8tZGF0YS10YWJsZXMhJyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyA9IGNoYW5nZXMuYWN0aXZpdHlTZXJ2aWNlICYmICFjaGFuZ2VzLmFjdGl2aXR5U2VydmljZS5jdXJyZW50VmFsdWU7XG4gICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIGlmIChjaGFuZ2VzLmFjdGl2aXR5U2VydmljZSAmJiBjaGFuZ2VzLmFjdGl2aXR5U2VydmljZS5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IEFjdGl2aXR5VGFibGVEYXRhU291cmNlPFQ+KHRoaXMuYWN0aXZpdHlTZXJ2aWNlLCB0aGlzLnN0YXRlLCB0aGlzLnJlZik7XG4gICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm91dHNpZGVGaWx0ZXIgJiYgY2hhbmdlcy5vdXRzaWRlRmlsdGVyLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgaWYgKCF0aGlzLm91dHNpZGVGaWx0ZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uID0gdGhpcy5vdXRzaWRlRmlsdGVyLnN1YnNjcmliZSgoZmlsdGVyOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLnN0YXRlLm91dHNpZGVGaWx0ZXIgPSBmaWx0ZXI7XG4gICAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBnbG9iYWxTZWFyY2g6IHRoaXMuc3RhdGUuZ2xvYmFsU2VhcmNoLCBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSk7XG4gICAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm91dHNpZGVGaWx0ZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhZ2luYXRpb25PcHRpb25zICYmICF0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2UpIHtcbiAgICAgIHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZSA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2luYXRpb25PcHRpb25zICYmICF0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplKSB7XG4gICAgICB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplID0gNTA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2luYXRpb25PcHRpb25zICYmICF0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplT3B0aW9ucykge1xuICAgICAgdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDI1LCA1MCwgMTAwXTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5wYWdlID0gdGhpcy5wYWdpbmF0aW9uT3B0aW9ucyA/IHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0YXRlLnBhZ2VTaXplID0gdGhpcy5wYWdpbmF0aW9uT3B0aW9ucyA/IHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemUgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgb25TZWFyY2hDaGFuZ2UodGVybTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZS5nbG9iYWxTZWFyY2ggPSB0ZXJtO1xuICAgIHRoaXMuc3RhdGUucmVzZXQoZmFsc2UsIHRydWUpO1xuICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KHsgZ2xvYmFsU2VhcmNoOiB0ZXJtLCBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSk7XG4gIH1cbn1cbiJdfQ==