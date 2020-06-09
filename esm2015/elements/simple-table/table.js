import { ChangeDetectionStrategy, Component, ViewEncapsulation, HostBinding, Input, Directive, EventEmitter, ChangeDetectorRef, } from '@angular/core';
import { CDK_TABLE_TEMPLATE, CdkTable } from '@angular/cdk/table';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ActivityTableDataSource } from './table-source';
import { NovoLabelService } from '../../services/novo-label-service';
import { NovoActivityTableState } from './state';
import { notify } from '../../utils/notifier/notifier.util';
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
const _c0 = [[["caption"]]];
const _c1 = ["caption"];
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
NovoTable.ɵcmp = i0.ɵɵdefineComponent({ type: NovoTable, selectors: [["novo-simple-table"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 4, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["footerRowOutlet", ""]], template: function NovoTable_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵprojection(0);
        i0.ɵɵelementContainer(1, 0);
        i0.ɵɵelementContainer(2, 1);
        i0.ɵɵelementContainer(3, 2);
    } }, directives: [i1.HeaderRowOutlet, i1.DataRowOutlet, i1.FooterRowOutlet], encapsulation: 2, changeDetection: 0 });
const ɵNovoTable_BaseFactory = i0.ɵɵgetInheritedFactory(NovoTable);
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
        this.loading = changes['activityService'] && !changes['activityService'].currentValue;
        this.ref.detectChanges();
        if (changes['activityService'] && changes['activityService'].currentValue) {
            this.loading = false;
            this.dataSource = new ActivityTableDataSource(this.activityService, this.state, this.ref);
            this.ref.detectChanges();
        }
        if (changes['outsideFilter'] && changes['outsideFilter'].currentValue) {
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
                [hint]="searchOptions?.tooltip">
            </novo-search>
            <novo-simple-table-pagination
                *ngIf="paginationOptions"
                [length]="dataSource?.total"
                [page]="paginationOptions.page"
                [pageSize]="paginationOptions.pageSize"
                [pageSizeOptions]="paginationOptions.pageSizeOptions">
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
                <novo-simple-table *ngIf="(columns?.length > 0)" [dataSource]="dataSource" novoSortFilter novoSelection [class.empty]="dataSource?.currentlyEmpty && state.userFiltered" [hidden]="dataSource?.totallyEmpty && !state.userFiltered">
                    <ng-content></ng-content>
                    <ng-container novoSimpleColumnDef="selection">
                        <novo-simple-checkbox-header-cell *novoSimpleHeaderCellDef></novo-simple-checkbox-header-cell>
                        <novo-simple-checkbox-cell *novoSimpleCellDef="let row; let i = index" [row]="row" [index]="i"></novo-simple-checkbox-cell>
                    </ng-container>
                    <ng-container *ngFor="let column of actionColumns" [novoSimpleColumnDef]="column.id">
                        <novo-simple-empty-header-cell [class.button-header-cell]="!column.options" [class.dropdown-header-cell]="column.options" *novoSimpleHeaderCellDef></novo-simple-empty-header-cell>
                        <novo-simple-action-cell *novoSimpleCellDef="let row; let i = index" [row]="row" [column]="column"></novo-simple-action-cell>
                    </ng-container>
                    <ng-container *ngFor="let column of columns" [novoSimpleColumnDef]="column.id">
                        <novo-simple-header-cell *novoSimpleHeaderCellDef [column]="column" [novo-simple-cell-config]="column.config" [defaultSort]="defaultSort">{{ column.label }}</novo-simple-header-cell>
                        <novo-simple-cell *novoSimpleCellDef="let row" [column]="column" [row]="row"></novo-simple-cell>
                    </ng-container>
                    <novo-simple-header-row *novoSimpleHeaderRowDef="displayedColumns"></novo-simple-header-row>
                    <novo-simple-row *novoSimpleRowDef="let row; columns: displayedColumns;"></novo-simple-row>
                </novo-simple-table>
                <div class="novo-activity-table-no-results-container" *ngIf="dataSource?.currentlyEmpty && state.userFiltered && !dataSource?.loading && !loading && !dataSource.pristine">
                    <div #filtered><ng-content select="[novo-activity-table-no-results-message]"></ng-content></div>
                    <div class="novo-activity-table-empty-message" *ngIf="filtered.childNodes.length == 0">
                        <h4><i class="bhi-search-question"></i> {{ labels.noMatchingRecordsMessage }}</h4>
                    </div>
                </div>
                <div class="novo-activity-table-empty-container" *ngIf="dataSource?.totallyEmpty && !dataSource?.loading && !loading && !state.userFiltered && !dataSource.pristine">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvc2ltcGxlLXRhYmxlL3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGlCQUFpQixFQUNqQixXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBR1osaUJBQWlCLEdBR2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUk5RCxPQUFPLEVBQXdCLHVCQUF1QixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEyQ3BELDJCQUNJO0lBQUEseUJBQUc7SUFBQSxZQUE4QjtJQUFBLGlCQUFJO0lBQ3JDLHlCQUFHO0lBQUEsWUFBa0M7SUFBQSxpQkFBSTtJQUN6Qyx5QkFBRztJQUFBLFlBQTZDO0lBQUEsaUJBQUk7SUFDcEQseUJBQUc7SUFBQSxZQUFpRDtJQUFBLGlCQUFJO0lBQ3hELHlCQUFHO0lBQUEsYUFBK0M7SUFBQSxpQkFBSTtJQUN0RCwwQkFBRztJQUFBLGFBQXVDO0lBQUEsaUJBQUk7SUFDOUMsMEJBQUc7SUFBQSxhQUE4QjtJQUFBLGlCQUFJO0lBQ3pDLGlCQUFNOzs7SUFQQyxlQUE4QjtJQUE5QixnR0FBOEI7SUFDOUIsZUFBa0M7SUFBbEMsb0dBQWtDO0lBQ2xDLGVBQTZDO0lBQTdDLCtHQUE2QztJQUM3QyxlQUFpRDtJQUFq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dGVneSxcbiAgQ29tcG9uZW50LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENES19UQUJMRV9URU1QTEFURSwgQ2RrVGFibGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTaW1wbGVUYWJsZUNvbHVtbiwgU2ltcGxlVGFibGVBY3Rpb25Db2x1bW4sIFNpbXBsZVRhYmxlUGFnaW5hdGlvbk9wdGlvbnMsIFNpbXBsZVRhYmxlU2VhcmNoT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBY3Rpdml0eVRhYmxlU2VydmljZSwgQWN0aXZpdHlUYWJsZURhdGFTb3VyY2UgfSBmcm9tICcuL3RhYmxlLXNvdXJjZSc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9BY3Rpdml0eVRhYmxlU3RhdGUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IG5vdGlmeSB9IGZyb20gJy4uLy4uL3V0aWxzL25vdGlmaWVyL25vdGlmaWVyLnV0aWwnO1xuXG4vKiogV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTc4NDkgKi9cbmV4cG9ydCBjb25zdCBfTm92b1RhYmxlID0gQ2RrVGFibGU7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLXRhYmxlJyxcbiAgdGVtcGxhdGU6IENES19UQUJMRV9URU1QTEFURSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJsZTxUPiBleHRlbmRzIF9Ob3ZvVGFibGU8VD4ge1xuICAvLyBUT0RPOiBhZGQgZXhwbGljaXQgY29uc3RydWN0b3Jcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbm92by1hY3Rpdml0eS10YWJsZS1hY3Rpb25zJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0FjdGl2aXR5VGFibGVBY3Rpb25zIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tYWN0aXZpdHktdGFibGUtY3VzdG9tLWhlYWRlcicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9BY3Rpdml0eVRhYmxlQ3VzdG9tSGVhZGVyIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tYWN0aXZpdHktdGFibGUtY3VzdG9tLWZpbHRlcicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9BY3Rpdml0eVRhYmxlQ3VzdG9tRmlsdGVyIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tYWN0aXZpdHktdGFibGUtZW1wdHktbWVzc2FnZScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9BY3Rpdml0eVRhYmxlRW1wdHlNZXNzYWdlIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tYWN0aXZpdHktdGFibGUtbm8tcmVzdWx0cy1tZXNzYWdlJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0FjdGl2aXR5VGFibGVOb1Jlc3VsdHNNZXNzYWdlIHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tYWN0aXZpdHktdGFibGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZGVidWdcIj5cbiAgICAgICAgICAgIDxwPlRvdGFsOiB7eyBkYXRhU291cmNlPy50b3RhbCB9fTwvcD5cbiAgICAgICAgICAgIDxwPkN1cnJlbnQ6IHt7IGRhdGFTb3VyY2U/LmN1cnJlbnQgfX08L3A+XG4gICAgICAgICAgICA8cD5Ub3RhbGx5IEVtcHR5OiB7eyBkYXRhU291cmNlPy50b3RhbGx5RW1wdHkgfX08L3A+XG4gICAgICAgICAgICA8cD5DdXJyZW50bHkgRW1wdHk6IHt7IGRhdGFTb3VyY2U/LmN1cnJlbnRseUVtcHR5IH19PC9wPlxuICAgICAgICAgICAgPHA+TG9hZGluZyAoRGF0YVNvdXJjZSk6IHt7IGRhdGFTb3VyY2U/LmxvYWRpbmcgfX08L3A+XG4gICAgICAgICAgICA8cD5Vc2VyIEZpbHRlcmVkOiB7eyBzdGF0ZS51c2VyRmlsdGVyZWQgfX08L3A+XG4gICAgICAgICAgICA8cD5Mb2FkaW5nIChUYWJsZSk6IHt7IGxvYWRpbmcgfX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aGVhZGVyICpuZ0lmPVwiKCEoZGF0YVNvdXJjZT8udG90YWxseUVtcHR5ICYmICFzdGF0ZS51c2VyRmlsdGVyZWQpICYmICFsb2FkaW5nKSB8fCBmb3JjZVNob3dIZWFkZXJcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltub3ZvLWFjdGl2aXR5LXRhYmxlLWN1c3RvbS1oZWFkZXJdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPG5vdm8tc2VhcmNoXG4gICAgICAgICAgICAgICAgYWx3YXlzT3Blbj1cInRydWVcIlxuICAgICAgICAgICAgICAgIChzZWFyY2hDaGFuZ2VkKT1cIm9uU2VhcmNoQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic3RhdGUuZ2xvYmFsU2VhcmNoXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIiFoaWRlR2xvYmFsU2VhcmNoXCJcbiAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwic2VhcmNoT3B0aW9ucz8ucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgIFtoaW50XT1cInNlYXJjaE9wdGlvbnM/LnRvb2x0aXBcIj5cbiAgICAgICAgICAgIDwvbm92by1zZWFyY2g+XG4gICAgICAgICAgICA8bm92by1zaW1wbGUtdGFibGUtcGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICpuZ0lmPVwicGFnaW5hdGlvbk9wdGlvbnNcIlxuICAgICAgICAgICAgICAgIFtsZW5ndGhdPVwiZGF0YVNvdXJjZT8udG90YWxcIlxuICAgICAgICAgICAgICAgIFtwYWdlXT1cInBhZ2luYXRpb25PcHRpb25zLnBhZ2VcIlxuICAgICAgICAgICAgICAgIFtwYWdlU2l6ZV09XCJwYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZVwiXG4gICAgICAgICAgICAgICAgW3BhZ2VTaXplT3B0aW9uc109XCJwYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZU9wdGlvbnNcIj5cbiAgICAgICAgICAgIDwvbm92by1zaW1wbGUtdGFibGUtcGFnaW5hdGlvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbm92by1hY3Rpdml0eS10YWJsZS1hY3Rpb25zXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtbG9hZGluZy1tYXNrXCIgKm5nSWY9XCJkYXRhU291cmNlPy5sb2FkaW5nIHx8IGxvYWRpbmdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLWxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxub3ZvLWxvYWRpbmc+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1hY3Rpdml0eS10YWJsZS1maWx0ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1hY3Rpdml0eS10YWJsZS1jdXN0b20tZmlsdGVyXCIgKm5nSWY9XCJjdXN0b21GaWx0ZXJcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbm92by1hY3Rpdml0eS10YWJsZS1jdXN0b20tZmlsdGVyXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPG5vdm8tc2ltcGxlLXRhYmxlICpuZ0lmPVwiKGNvbHVtbnM/Lmxlbmd0aCA+IDApXCIgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIG5vdm9Tb3J0RmlsdGVyIG5vdm9TZWxlY3Rpb24gW2NsYXNzLmVtcHR5XT1cImRhdGFTb3VyY2U/LmN1cnJlbnRseUVtcHR5ICYmIHN0YXRlLnVzZXJGaWx0ZXJlZFwiIFtoaWRkZW5dPVwiZGF0YVNvdXJjZT8udG90YWxseUVtcHR5ICYmICFzdGF0ZS51c2VyRmlsdGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIG5vdm9TaW1wbGVDb2x1bW5EZWY9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLXNpbXBsZS1jaGVja2JveC1oZWFkZXItY2VsbCAqbm92b1NpbXBsZUhlYWRlckNlbGxEZWY+PC9ub3ZvLXNpbXBsZS1jaGVja2JveC1oZWFkZXItY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLXNpbXBsZS1jaGVja2JveC1jZWxsICpub3ZvU2ltcGxlQ2VsbERlZj1cImxldCByb3c7IGxldCBpID0gaW5kZXhcIiBbcm93XT1cInJvd1wiIFtpbmRleF09XCJpXCI+PC9ub3ZvLXNpbXBsZS1jaGVja2JveC1jZWxsPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGFjdGlvbkNvbHVtbnNcIiBbbm92b1NpbXBsZUNvbHVtbkRlZl09XCJjb2x1bW4uaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLXNpbXBsZS1lbXB0eS1oZWFkZXItY2VsbCBbY2xhc3MuYnV0dG9uLWhlYWRlci1jZWxsXT1cIiFjb2x1bW4ub3B0aW9uc1wiIFtjbGFzcy5kcm9wZG93bi1oZWFkZXItY2VsbF09XCJjb2x1bW4ub3B0aW9uc1wiICpub3ZvU2ltcGxlSGVhZGVyQ2VsbERlZj48L25vdm8tc2ltcGxlLWVtcHR5LWhlYWRlci1jZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tc2ltcGxlLWFjdGlvbi1jZWxsICpub3ZvU2ltcGxlQ2VsbERlZj1cImxldCByb3c7IGxldCBpID0gaW5kZXhcIiBbcm93XT1cInJvd1wiIFtjb2x1bW5dPVwiY29sdW1uXCI+PC9ub3ZvLXNpbXBsZS1hY3Rpb24tY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW25vdm9TaW1wbGVDb2x1bW5EZWZdPVwiY29sdW1uLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bm92by1zaW1wbGUtaGVhZGVyLWNlbGwgKm5vdm9TaW1wbGVIZWFkZXJDZWxsRGVmIFtjb2x1bW5dPVwiY29sdW1uXCIgW25vdm8tc2ltcGxlLWNlbGwtY29uZmlnXT1cImNvbHVtbi5jb25maWdcIiBbZGVmYXVsdFNvcnRdPVwiZGVmYXVsdFNvcnRcIj57eyBjb2x1bW4ubGFiZWwgfX08L25vdm8tc2ltcGxlLWhlYWRlci1jZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tc2ltcGxlLWNlbGwgKm5vdm9TaW1wbGVDZWxsRGVmPVwibGV0IHJvd1wiIFtjb2x1bW5dPVwiY29sdW1uXCIgW3Jvd109XCJyb3dcIj48L25vdm8tc2ltcGxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bm92by1zaW1wbGUtaGVhZGVyLXJvdyAqbm92b1NpbXBsZUhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L25vdm8tc2ltcGxlLWhlYWRlci1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLXNpbXBsZS1yb3cgKm5vdm9TaW1wbGVSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvbm92by1zaW1wbGUtcm93PlxuICAgICAgICAgICAgICAgIDwvbm92by1zaW1wbGUtdGFibGU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtbm8tcmVzdWx0cy1jb250YWluZXJcIiAqbmdJZj1cImRhdGFTb3VyY2U/LmN1cnJlbnRseUVtcHR5ICYmIHN0YXRlLnVzZXJGaWx0ZXJlZCAmJiAhZGF0YVNvdXJjZT8ubG9hZGluZyAmJiAhbG9hZGluZyAmJiAhZGF0YVNvdXJjZS5wcmlzdGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICNmaWx0ZXJlZD48bmctY29udGVudCBzZWxlY3Q9XCJbbm92by1hY3Rpdml0eS10YWJsZS1uby1yZXN1bHRzLW1lc3NhZ2VdXCI+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1hY3Rpdml0eS10YWJsZS1lbXB0eS1tZXNzYWdlXCIgKm5nSWY9XCJmaWx0ZXJlZC5jaGlsZE5vZGVzLmxlbmd0aCA9PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PGkgY2xhc3M9XCJiaGktc2VhcmNoLXF1ZXN0aW9uXCI+PC9pPiB7eyBsYWJlbHMubm9NYXRjaGluZ1JlY29yZHNNZXNzYWdlIH19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtZW1wdHktY29udGFpbmVyXCIgKm5nSWY9XCJkYXRhU291cmNlPy50b3RhbGx5RW1wdHkgJiYgIWRhdGFTb3VyY2U/LmxvYWRpbmcgJiYgIWxvYWRpbmcgJiYgIXN0YXRlLnVzZXJGaWx0ZXJlZCAmJiAhZGF0YVNvdXJjZS5wcmlzdGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICNlbXB0eT48bmctY29udGVudCBzZWxlY3Q9XCJbbm92by1hY3Rpdml0eS10YWJsZS1lbXB0eS1tZXNzYWdlXVwiPjwvbmctY29udGVudD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtZW1wdHktbWVzc2FnZVwiICpuZ0lmPVwiZW1wdHkuY2hpbGROb2Rlcy5sZW5ndGggPT0gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpIGNsYXNzPVwiYmhpLXNlYXJjaC1xdWVzdGlvblwiPjwvaT4ge3sgbGFiZWxzLmVtcHR5VGFibGVNZXNzYWdlIH19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW05vdm9BY3Rpdml0eVRhYmxlU3RhdGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWN0aXZpdHlUYWJsZTxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5nbG9iYWwtc2VhcmNoLWhpZGRlbicpXG4gIGdsb2JhbFNlYXJjaEhpZGRlbkNsYXNzVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgYWN0aXZpdHlTZXJ2aWNlOiBBY3Rpdml0eVRhYmxlU2VydmljZTxUPjtcbiAgQElucHV0KClcbiAgY29sdW1uczogU2ltcGxlVGFibGVDb2x1bW48VD5bXTtcbiAgQElucHV0KClcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW107XG4gIEBJbnB1dCgpXG4gIGFjdGlvbkNvbHVtbnM6IFNpbXBsZVRhYmxlQWN0aW9uQ29sdW1uPFQ+W107XG4gIEBJbnB1dCgpXG4gIHBhZ2luYXRpb25PcHRpb25zOiBTaW1wbGVUYWJsZVBhZ2luYXRpb25PcHRpb25zO1xuICBASW5wdXQoKVxuICBzZWFyY2hPcHRpb25zOiBTaW1wbGVUYWJsZVNlYXJjaE9wdGlvbnM7XG4gIEBJbnB1dCgpXG4gIGRlZmF1bHRTb3J0OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfTtcbiAgQElucHV0KClcbiAgb3V0c2lkZUZpbHRlcjogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgQElucHV0KClcbiAgc2V0IGN1c3RvbUZpbHRlcih2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fY3VzdG9tRmlsdGVyID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBjdXN0b21GaWx0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUZpbHRlcjtcbiAgfVxuICBwcml2YXRlIF9jdXN0b21GaWx0ZXI6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGZvcmNlU2hvd0hlYWRlcih2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZm9yY2VTaG93SGVhZGVyID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBmb3JjZVNob3dIZWFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvcmNlU2hvd0hlYWRlcjtcbiAgfVxuICBwcml2YXRlIF9mb3JjZVNob3dIZWFkZXI6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGhpZGVHbG9iYWxTZWFyY2godjogYm9vbGVhbikge1xuICAgIHRoaXMuX2hpZGVHbG9iYWxTZWFyY2ggPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gICAgdGhpcy5nbG9iYWxTZWFyY2hIaWRkZW5DbGFzc1RvZ2dsZSA9IHRoaXMuX2hpZGVHbG9iYWxTZWFyY2g7XG4gIH1cbiAgZ2V0IGhpZGVHbG9iYWxTZWFyY2goKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGVHbG9iYWxTZWFyY2g7XG4gIH1cbiAgcHJpdmF0ZSBfaGlkZUdsb2JhbFNlYXJjaDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzZXQgZGVidWcodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2RlYnVnID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBkZWJ1ZygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVidWc7XG4gIH1cbiAgcHJpdmF0ZSBfZGVidWc6IGJvb2xlYW47XG5cbiAgcHVibGljIGRhdGFTb3VyY2U6IEFjdGl2aXR5VGFibGVEYXRhU291cmNlPFQ+O1xuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHJpdmF0ZSBvdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5lbXB0eScpXG4gIGdldCBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlICYmIHRoaXMuZGF0YVNvdXJjZS50b3RhbGx5RW1wdHk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxvYWRpbmcnKVxuICBnZXQgbG9hZGluZ0NsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWRpbmcgfHwgKHRoaXMuZGF0YVNvdXJjZSAmJiB0aGlzLmRhdGFTb3VyY2UubG9hZGluZyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBzdGF0ZTogTm92b0FjdGl2aXR5VGFibGVTdGF0ZSkge1xuICAgIG5vdGlmeSgnW0RlcHJlY2F0ZWRdOiBUaGUgc2ltcGxlIHRhYmxlIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSBtaWdyYXRlIHRvIG5vdm8tZGF0YS10YWJsZXMhJyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyA9IGNoYW5nZXNbJ2FjdGl2aXR5U2VydmljZSddICYmICFjaGFuZ2VzWydhY3Rpdml0eVNlcnZpY2UnXS5jdXJyZW50VmFsdWU7XG4gICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIGlmIChjaGFuZ2VzWydhY3Rpdml0eVNlcnZpY2UnXSAmJiBjaGFuZ2VzWydhY3Rpdml0eVNlcnZpY2UnXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IEFjdGl2aXR5VGFibGVEYXRhU291cmNlPFQ+KHRoaXMuYWN0aXZpdHlTZXJ2aWNlLCB0aGlzLnN0YXRlLCB0aGlzLnJlZik7XG4gICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydvdXRzaWRlRmlsdGVyJ10gJiYgY2hhbmdlc1snb3V0c2lkZUZpbHRlciddLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgaWYgKCF0aGlzLm91dHNpZGVGaWx0ZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uID0gdGhpcy5vdXRzaWRlRmlsdGVyLnN1YnNjcmliZSgoZmlsdGVyOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLnN0YXRlLm91dHNpZGVGaWx0ZXIgPSBmaWx0ZXI7XG4gICAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBnbG9iYWxTZWFyY2g6IHRoaXMuc3RhdGUuZ2xvYmFsU2VhcmNoLCBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSk7XG4gICAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm91dHNpZGVGaWx0ZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhZ2luYXRpb25PcHRpb25zICYmICF0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2UpIHtcbiAgICAgIHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZSA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2luYXRpb25PcHRpb25zICYmICF0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplKSB7XG4gICAgICB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplID0gNTA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2luYXRpb25PcHRpb25zICYmICF0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplT3B0aW9ucykge1xuICAgICAgdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDI1LCA1MCwgMTAwXTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5wYWdlID0gdGhpcy5wYWdpbmF0aW9uT3B0aW9ucyA/IHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0YXRlLnBhZ2VTaXplID0gdGhpcy5wYWdpbmF0aW9uT3B0aW9ucyA/IHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemUgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgb25TZWFyY2hDaGFuZ2UodGVybTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZS5nbG9iYWxTZWFyY2ggPSB0ZXJtO1xuICAgIHRoaXMuc3RhdGUucmVzZXQoZmFsc2UsIHRydWUpO1xuICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KHsgZ2xvYmFsU2VhcmNoOiB0ZXJtLCBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSk7XG4gIH1cbn1cbiJdfQ==