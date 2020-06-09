import { __extends } from "tslib";
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
var _c0 = [[["caption"]]];
var _c1 = ["caption"];
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
    var ctx_r0 = i0.ɵɵnextContext();
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
    var _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-search", 11);
    i0.ɵɵlistener("searchChanged", function NovoActivityTable_header_1_novo_search_2_Template_novo_search_searchChanged_0_listener($event) { i0.ɵɵrestoreView(_r10); var ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.onSearchChange($event); })("ngModelChange", function NovoActivityTable_header_1_novo_search_2_Template_novo_search_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r10); var ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.state.globalSearch = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r7.state.globalSearch)("placeholder", ctx_r7.searchOptions == null ? null : ctx_r7.searchOptions.placeholder)("hint", ctx_r7.searchOptions == null ? null : ctx_r7.searchOptions.tooltip);
} }
function NovoActivityTable_header_1_novo_simple_table_pagination_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-simple-table-pagination", 12);
} if (rf & 2) {
    var ctx_r8 = i0.ɵɵnextContext(2);
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
    var ctx_r1 = i0.ɵɵnextContext();
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
    var row_r18 = ctx.$implicit;
    var i_r19 = ctx.index;
    i0.ɵɵproperty("row", row_r18)("index", i_r19);
} }
function NovoActivityTable_novo_simple_table_6_ng_container_5_novo_simple_empty_header_cell_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-simple-empty-header-cell");
} if (rf & 2) {
    var column_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassProp("button-header-cell", !column_r20.options)("dropdown-header-cell", column_r20.options);
} }
function NovoActivityTable_novo_simple_table_6_ng_container_5_novo_simple_action_cell_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-simple-action-cell", 26);
} if (rf & 2) {
    var row_r24 = ctx.$implicit;
    var column_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("row", row_r24)("column", column_r20);
} }
function NovoActivityTable_novo_simple_table_6_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 23);
    i0.ɵɵtemplate(1, NovoActivityTable_novo_simple_table_6_ng_container_5_novo_simple_empty_header_cell_1_Template, 1, 4, "novo-simple-empty-header-cell", 24);
    i0.ɵɵtemplate(2, NovoActivityTable_novo_simple_table_6_ng_container_5_novo_simple_action_cell_2_Template, 1, 2, "novo-simple-action-cell", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var column_r20 = ctx.$implicit;
    i0.ɵɵproperty("novoSimpleColumnDef", column_r20.id);
} }
function NovoActivityTable_novo_simple_table_6_ng_container_6_novo_simple_header_cell_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-simple-header-cell", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r27 = i0.ɵɵnextContext().$implicit;
    var ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("column", column_r27)("novo-simple-cell-config", column_r27.config)("defaultSort", ctx_r28.defaultSort);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(column_r27.label);
} }
function NovoActivityTable_novo_simple_table_6_ng_container_6_novo_simple_cell_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-simple-cell", 30);
} if (rf & 2) {
    var row_r31 = ctx.$implicit;
    var column_r27 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("column", column_r27)("row", row_r31);
} }
function NovoActivityTable_novo_simple_table_6_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 23);
    i0.ɵɵtemplate(1, NovoActivityTable_novo_simple_table_6_ng_container_6_novo_simple_header_cell_1_Template, 2, 4, "novo-simple-header-cell", 27);
    i0.ɵɵtemplate(2, NovoActivityTable_novo_simple_table_6_ng_container_6_novo_simple_cell_2_Template, 1, 2, "novo-simple-cell", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var column_r27 = ctx.$implicit;
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
    var ctx_r4 = i0.ɵɵnextContext();
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
    var ctx_r35 = i0.ɵɵnextContext(2);
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
    var _r34 = i0.ɵɵreference(2);
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
    var ctx_r37 = i0.ɵɵnextContext(2);
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
    var _r36 = i0.ɵɵreference(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", _r36.childNodes.length == 0);
} }
var _c2 = [[["", "novo-activity-table-custom-header", ""]], [["", "novo-activity-table-actions", ""]], [["", "novo-activity-table-custom-filter", ""]], "*", [["", "novo-activity-table-no-results-message", ""]], [["", "novo-activity-table-empty-message", ""]]];
var _c3 = ["[novo-activity-table-custom-header]", "[novo-activity-table-actions]", "[novo-activity-table-custom-filter]", "*", "[novo-activity-table-no-results-message]", "[novo-activity-table-empty-message]"];
/** Workaround for https://github.com/angular/angular/issues/17849 */
export var _NovoTable = CdkTable;
var NovoTable = /** @class */ (function (_super) {
    __extends(NovoTable, _super);
    function NovoTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NovoTable.ɵfac = function NovoTable_Factory(t) { return ɵNovoTable_BaseFactory(t || NovoTable); };
    NovoTable.ɵcmp = i0.ɵɵdefineComponent({ type: NovoTable, selectors: [["novo-simple-table"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 4, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["footerRowOutlet", ""]], template: function NovoTable_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵprojection(0);
            i0.ɵɵelementContainer(1, 0);
            i0.ɵɵelementContainer(2, 1);
            i0.ɵɵelementContainer(3, 2);
        } }, directives: [i1.HeaderRowOutlet, i1.DataRowOutlet, i1.FooterRowOutlet], encapsulation: 2, changeDetection: 0 });
    return NovoTable;
}(_NovoTable));
export { NovoTable };
var ɵNovoTable_BaseFactory = i0.ɵɵgetInheritedFactory(NovoTable);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTable, [{
        type: Component,
        args: [{
                selector: 'novo-simple-table',
                template: CDK_TABLE_TEMPLATE,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
var NovoActivityTableActions = /** @class */ (function () {
    function NovoActivityTableActions() {
    }
    NovoActivityTableActions.ɵfac = function NovoActivityTableActions_Factory(t) { return new (t || NovoActivityTableActions)(); };
    NovoActivityTableActions.ɵdir = i0.ɵɵdefineDirective({ type: NovoActivityTableActions, selectors: [["novo-activity-table-actions"]] });
    return NovoActivityTableActions;
}());
export { NovoActivityTableActions };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoActivityTableActions, [{
        type: Directive,
        args: [{
                selector: 'novo-activity-table-actions',
            }]
    }], null, null); })();
var NovoActivityTableCustomHeader = /** @class */ (function () {
    function NovoActivityTableCustomHeader() {
    }
    NovoActivityTableCustomHeader.ɵfac = function NovoActivityTableCustomHeader_Factory(t) { return new (t || NovoActivityTableCustomHeader)(); };
    NovoActivityTableCustomHeader.ɵdir = i0.ɵɵdefineDirective({ type: NovoActivityTableCustomHeader, selectors: [["novo-activity-table-custom-header"]] });
    return NovoActivityTableCustomHeader;
}());
export { NovoActivityTableCustomHeader };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoActivityTableCustomHeader, [{
        type: Directive,
        args: [{
                selector: 'novo-activity-table-custom-header',
            }]
    }], null, null); })();
var NovoActivityTableCustomFilter = /** @class */ (function () {
    function NovoActivityTableCustomFilter() {
    }
    NovoActivityTableCustomFilter.ɵfac = function NovoActivityTableCustomFilter_Factory(t) { return new (t || NovoActivityTableCustomFilter)(); };
    NovoActivityTableCustomFilter.ɵdir = i0.ɵɵdefineDirective({ type: NovoActivityTableCustomFilter, selectors: [["novo-activity-table-custom-filter"]] });
    return NovoActivityTableCustomFilter;
}());
export { NovoActivityTableCustomFilter };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoActivityTableCustomFilter, [{
        type: Directive,
        args: [{
                selector: 'novo-activity-table-custom-filter',
            }]
    }], null, null); })();
var NovoActivityTableEmptyMessage = /** @class */ (function () {
    function NovoActivityTableEmptyMessage() {
    }
    NovoActivityTableEmptyMessage.ɵfac = function NovoActivityTableEmptyMessage_Factory(t) { return new (t || NovoActivityTableEmptyMessage)(); };
    NovoActivityTableEmptyMessage.ɵdir = i0.ɵɵdefineDirective({ type: NovoActivityTableEmptyMessage, selectors: [["novo-activity-table-empty-message"]] });
    return NovoActivityTableEmptyMessage;
}());
export { NovoActivityTableEmptyMessage };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoActivityTableEmptyMessage, [{
        type: Directive,
        args: [{
                selector: 'novo-activity-table-empty-message',
            }]
    }], null, null); })();
var NovoActivityTableNoResultsMessage = /** @class */ (function () {
    function NovoActivityTableNoResultsMessage() {
    }
    NovoActivityTableNoResultsMessage.ɵfac = function NovoActivityTableNoResultsMessage_Factory(t) { return new (t || NovoActivityTableNoResultsMessage)(); };
    NovoActivityTableNoResultsMessage.ɵdir = i0.ɵɵdefineDirective({ type: NovoActivityTableNoResultsMessage, selectors: [["novo-activity-table-no-results-message"]] });
    return NovoActivityTableNoResultsMessage;
}());
export { NovoActivityTableNoResultsMessage };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoActivityTableNoResultsMessage, [{
        type: Directive,
        args: [{
                selector: 'novo-activity-table-no-results-message',
            }]
    }], null, null); })();
var NovoActivityTable = /** @class */ (function () {
    function NovoActivityTable(labels, ref, state) {
        this.labels = labels;
        this.ref = ref;
        this.state = state;
        this.globalSearchHiddenClassToggle = false;
        this.loading = true;
        notify('[Deprecated]: The simple table is deprecated. Please migrate to novo-data-tables!');
    }
    Object.defineProperty(NovoActivityTable.prototype, "customFilter", {
        get: function () {
            return this._customFilter;
        },
        set: function (v) {
            this._customFilter = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoActivityTable.prototype, "forceShowHeader", {
        get: function () {
            return this._forceShowHeader;
        },
        set: function (v) {
            this._forceShowHeader = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoActivityTable.prototype, "hideGlobalSearch", {
        get: function () {
            return this._hideGlobalSearch;
        },
        set: function (v) {
            this._hideGlobalSearch = coerceBooleanProperty(v);
            this.globalSearchHiddenClassToggle = this._hideGlobalSearch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoActivityTable.prototype, "debug", {
        get: function () {
            return this._debug;
        },
        set: function (v) {
            this._debug = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoActivityTable.prototype, "empty", {
        get: function () {
            return this.dataSource && this.dataSource.totallyEmpty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoActivityTable.prototype, "loadingClass", {
        get: function () {
            return this.loading || (this.dataSource && this.dataSource.loading);
        },
        enumerable: true,
        configurable: true
    });
    NovoActivityTable.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.loading = changes['activityService'] && !changes['activityService'].currentValue;
        this.ref.detectChanges();
        if (changes['activityService'] && changes['activityService'].currentValue) {
            this.loading = false;
            this.dataSource = new ActivityTableDataSource(this.activityService, this.state, this.ref);
            this.ref.detectChanges();
        }
        if (changes['outsideFilter'] && changes['outsideFilter'].currentValue) {
            if (!this.outsideFilterSubscription) {
                this.outsideFilterSubscription = this.outsideFilter.subscribe(function (filter) {
                    _this.state.outsideFilter = filter;
                    _this.state.updates.next({ globalSearch: _this.state.globalSearch, filter: _this.state.filter, sort: _this.state.sort });
                    _this.ref.markForCheck();
                });
            }
        }
    };
    NovoActivityTable.prototype.ngOnDestroy = function () {
        if (this.outsideFilterSubscription) {
            this.outsideFilterSubscription.unsubscribe();
        }
    };
    NovoActivityTable.prototype.ngAfterContentInit = function () {
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
    };
    NovoActivityTable.prototype.onSearchChange = function (term) {
        this.state.globalSearch = term;
        this.state.reset(false, true);
        this.state.updates.next({ globalSearch: term, filter: this.state.filter, sort: this.state.sort });
    };
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
    return NovoActivityTable;
}());
export { NovoActivityTable };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoActivityTable, [{
        type: Component,
        args: [{
                selector: 'novo-activity-table',
                template: "\n        <div *ngIf=\"debug\">\n            <p>Total: {{ dataSource?.total }}</p>\n            <p>Current: {{ dataSource?.current }}</p>\n            <p>Totally Empty: {{ dataSource?.totallyEmpty }}</p>\n            <p>Currently Empty: {{ dataSource?.currentlyEmpty }}</p>\n            <p>Loading (DataSource): {{ dataSource?.loading }}</p>\n            <p>User Filtered: {{ state.userFiltered }}</p>\n            <p>Loading (Table): {{ loading }}</p>\n        </div>\n        <header *ngIf=\"(!(dataSource?.totallyEmpty && !state.userFiltered) && !loading) || forceShowHeader\">\n            <ng-content select=\"[novo-activity-table-custom-header]\"></ng-content>\n            <novo-search\n                alwaysOpen=\"true\"\n                (searchChanged)=\"onSearchChange($event)\"\n                [(ngModel)]=\"state.globalSearch\"\n                *ngIf=\"!hideGlobalSearch\"\n                [placeholder]=\"searchOptions?.placeholder\"\n                [hint]=\"searchOptions?.tooltip\">\n            </novo-search>\n            <novo-simple-table-pagination\n                *ngIf=\"paginationOptions\"\n                [length]=\"dataSource?.total\"\n                [page]=\"paginationOptions.page\"\n                [pageSize]=\"paginationOptions.pageSize\"\n                [pageSizeOptions]=\"paginationOptions.pageSizeOptions\">\n            </novo-simple-table-pagination>\n            <div class=\"novo-activity-table-actions\">\n                <ng-content select=\"[novo-activity-table-actions]\"></ng-content>\n            </div>\n        </header>\n        <div class=\"novo-activity-table-loading-mask\" *ngIf=\"dataSource?.loading || loading\" data-automation-id=\"novo-activity-table-loading\">\n            <novo-loading></novo-loading>\n        </div>\n        <div class=\"novo-activity-table-filter-container\">\n            <div class=\"novo-activity-table-custom-filter\" *ngIf=\"customFilter\">\n                <ng-content select=\"[novo-activity-table-custom-filter]\"></ng-content>\n            </div>\n            <div class=\"novo-activity-table-container\">\n                <novo-simple-table *ngIf=\"(columns?.length > 0)\" [dataSource]=\"dataSource\" novoSortFilter novoSelection [class.empty]=\"dataSource?.currentlyEmpty && state.userFiltered\" [hidden]=\"dataSource?.totallyEmpty && !state.userFiltered\">\n                    <ng-content></ng-content>\n                    <ng-container novoSimpleColumnDef=\"selection\">\n                        <novo-simple-checkbox-header-cell *novoSimpleHeaderCellDef></novo-simple-checkbox-header-cell>\n                        <novo-simple-checkbox-cell *novoSimpleCellDef=\"let row; let i = index\" [row]=\"row\" [index]=\"i\"></novo-simple-checkbox-cell>\n                    </ng-container>\n                    <ng-container *ngFor=\"let column of actionColumns\" [novoSimpleColumnDef]=\"column.id\">\n                        <novo-simple-empty-header-cell [class.button-header-cell]=\"!column.options\" [class.dropdown-header-cell]=\"column.options\" *novoSimpleHeaderCellDef></novo-simple-empty-header-cell>\n                        <novo-simple-action-cell *novoSimpleCellDef=\"let row; let i = index\" [row]=\"row\" [column]=\"column\"></novo-simple-action-cell>\n                    </ng-container>\n                    <ng-container *ngFor=\"let column of columns\" [novoSimpleColumnDef]=\"column.id\">\n                        <novo-simple-header-cell *novoSimpleHeaderCellDef [column]=\"column\" [novo-simple-cell-config]=\"column.config\" [defaultSort]=\"defaultSort\">{{ column.label }}</novo-simple-header-cell>\n                        <novo-simple-cell *novoSimpleCellDef=\"let row\" [column]=\"column\" [row]=\"row\"></novo-simple-cell>\n                    </ng-container>\n                    <novo-simple-header-row *novoSimpleHeaderRowDef=\"displayedColumns\"></novo-simple-header-row>\n                    <novo-simple-row *novoSimpleRowDef=\"let row; columns: displayedColumns;\"></novo-simple-row>\n                </novo-simple-table>\n                <div class=\"novo-activity-table-no-results-container\" *ngIf=\"dataSource?.currentlyEmpty && state.userFiltered && !dataSource?.loading && !loading && !dataSource.pristine\">\n                    <div #filtered><ng-content select=\"[novo-activity-table-no-results-message]\"></ng-content></div>\n                    <div class=\"novo-activity-table-empty-message\" *ngIf=\"filtered.childNodes.length == 0\">\n                        <h4><i class=\"bhi-search-question\"></i> {{ labels.noMatchingRecordsMessage }}</h4>\n                    </div>\n                </div>\n                <div class=\"novo-activity-table-empty-container\" *ngIf=\"dataSource?.totallyEmpty && !dataSource?.loading && !loading && !state.userFiltered && !dataSource.pristine\">\n                    <div #empty><ng-content select=\"[novo-activity-table-empty-message]\"></ng-content></div>\n                    <div class=\"novo-activity-table-empty-message\" *ngIf=\"empty.childNodes.length == 0\">\n                        <h4><i class=\"bhi-search-question\"></i> {{ labels.emptyTableMessage }}</h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvc2ltcGxlLXRhYmxlL3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUdaLGlCQUFpQixHQUdsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJOUQsT0FBTyxFQUF3Qix1QkFBdUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMkNwRCwyQkFDSTtJQUFBLHlCQUFHO0lBQUEsWUFBOEI7SUFBQSxpQkFBSTtJQUNyQyx5QkFBRztJQUFBLFlBQWtDO0lBQUEsaUJBQUk7SUFDekMseUJBQUc7SUFBQSxZQUE2QztJQUFBLGlCQUFJO0lBQ3BELHlCQUFHO0lBQUEsWUFBaUQ7SUFBQSxpQkFBSTtJQUN4RCx5QkFBRztJQUFBLGFBQStDO0lBQUEsaUJBQUk7SUFDdEQsMEJBQUc7SUFBQSxhQUF1QztJQUFBLGlCQUFJO0lBQzlDLDBCQUFHO0lBQUEsYUFBOEI7SUFBQSxpQkFBSTtJQUN6QyxpQkFBTTs7O0lBUEMsZUFBOEI7SUFBOUIsZ0dBQThCO0lBQzlCLGVBQWtDO0lBQWxDLG9HQUFrQztJQUNsQyxlQUE2QztJQUE3QywrR0FBNkM7SUFDN0MsZUFBaUQ7SUFB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eEMsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBR0wsS0FBSzs7a0JBU0wsS0FBSzs7a0JBU0wsS0FBSzs7a0JBVUwsS0FBSzs7a0JBY0wsV0FBVzttQkFBQyxhQUFhOztrQkFLekIsV0FBVzttQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDREtfVEFCTEVfVEVNUExBVEUsIENka1RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU2ltcGxlVGFibGVDb2x1bW4sIFNpbXBsZVRhYmxlQWN0aW9uQ29sdW1uLCBTaW1wbGVUYWJsZVBhZ2luYXRpb25PcHRpb25zLCBTaW1wbGVUYWJsZVNlYXJjaE9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQWN0aXZpdHlUYWJsZVNlcnZpY2UsIEFjdGl2aXR5VGFibGVEYXRhU291cmNlIH0gZnJvbSAnLi90YWJsZS1zb3VyY2UnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvQWN0aXZpdHlUYWJsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBub3RpZnkgfSBmcm9tICcuLi8uLi91dGlscy9ub3RpZmllci9ub3RpZmllci51dGlsJztcblxuLyoqIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE3ODQ5ICovXG5leHBvcnQgY29uc3QgX05vdm9UYWJsZSA9IENka1RhYmxlO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS10YWJsZScsXG4gIHRlbXBsYXRlOiBDREtfVEFCTEVfVEVNUExBVEUsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGFibGU8VD4gZXh0ZW5kcyBfTm92b1RhYmxlPFQ+IHtcbiAgLy8gVE9ETzogYWRkIGV4cGxpY2l0IGNvbnN0cnVjdG9yXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tYWN0aXZpdHktdGFibGUtYWN0aW9ucycsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9BY3Rpdml0eVRhYmxlQWN0aW9ucyB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjdGl2aXR5LXRhYmxlLWN1c3RvbS1oZWFkZXInLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWN0aXZpdHlUYWJsZUN1c3RvbUhlYWRlciB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjdGl2aXR5LXRhYmxlLWN1c3RvbS1maWx0ZXInLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWN0aXZpdHlUYWJsZUN1c3RvbUZpbHRlciB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjdGl2aXR5LXRhYmxlLWVtcHR5LW1lc3NhZ2UnLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWN0aXZpdHlUYWJsZUVtcHR5TWVzc2FnZSB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjdGl2aXR5LXRhYmxlLW5vLXJlc3VsdHMtbWVzc2FnZScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9BY3Rpdml0eVRhYmxlTm9SZXN1bHRzTWVzc2FnZSB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjdGl2aXR5LXRhYmxlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAqbmdJZj1cImRlYnVnXCI+XG4gICAgICAgICAgICA8cD5Ub3RhbDoge3sgZGF0YVNvdXJjZT8udG90YWwgfX08L3A+XG4gICAgICAgICAgICA8cD5DdXJyZW50OiB7eyBkYXRhU291cmNlPy5jdXJyZW50IH19PC9wPlxuICAgICAgICAgICAgPHA+VG90YWxseSBFbXB0eToge3sgZGF0YVNvdXJjZT8udG90YWxseUVtcHR5IH19PC9wPlxuICAgICAgICAgICAgPHA+Q3VycmVudGx5IEVtcHR5OiB7eyBkYXRhU291cmNlPy5jdXJyZW50bHlFbXB0eSB9fTwvcD5cbiAgICAgICAgICAgIDxwPkxvYWRpbmcgKERhdGFTb3VyY2UpOiB7eyBkYXRhU291cmNlPy5sb2FkaW5nIH19PC9wPlxuICAgICAgICAgICAgPHA+VXNlciBGaWx0ZXJlZDoge3sgc3RhdGUudXNlckZpbHRlcmVkIH19PC9wPlxuICAgICAgICAgICAgPHA+TG9hZGluZyAoVGFibGUpOiB7eyBsb2FkaW5nIH19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGhlYWRlciAqbmdJZj1cIighKGRhdGFTb3VyY2U/LnRvdGFsbHlFbXB0eSAmJiAhc3RhdGUudXNlckZpbHRlcmVkKSAmJiAhbG9hZGluZykgfHwgZm9yY2VTaG93SGVhZGVyXCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbm92by1hY3Rpdml0eS10YWJsZS1jdXN0b20taGVhZGVyXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxub3ZvLXNlYXJjaFxuICAgICAgICAgICAgICAgIGFsd2F5c09wZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAoc2VhcmNoQ2hhbmdlZCk9XCJvblNlYXJjaENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInN0YXRlLmdsb2JhbFNlYXJjaFwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIhaGlkZUdsb2JhbFNlYXJjaFwiXG4gICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInNlYXJjaE9wdGlvbnM/LnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICBbaGludF09XCJzZWFyY2hPcHRpb25zPy50b29sdGlwXCI+XG4gICAgICAgICAgICA8L25vdm8tc2VhcmNoPlxuICAgICAgICAgICAgPG5vdm8tc2ltcGxlLXRhYmxlLXBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICAqbmdJZj1cInBhZ2luYXRpb25PcHRpb25zXCJcbiAgICAgICAgICAgICAgICBbbGVuZ3RoXT1cImRhdGFTb3VyY2U/LnRvdGFsXCJcbiAgICAgICAgICAgICAgICBbcGFnZV09XCJwYWdpbmF0aW9uT3B0aW9ucy5wYWdlXCJcbiAgICAgICAgICAgICAgICBbcGFnZVNpemVdPVwicGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemVcIlxuICAgICAgICAgICAgICAgIFtwYWdlU2l6ZU9wdGlvbnNdPVwicGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemVPcHRpb25zXCI+XG4gICAgICAgICAgICA8L25vdm8tc2ltcGxlLXRhYmxlLXBhZ2luYXRpb24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1hY3Rpdml0eS10YWJsZS1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW25vdm8tYWN0aXZpdHktdGFibGUtYWN0aW9uc11cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLWxvYWRpbmctbWFza1wiICpuZ0lmPVwiZGF0YVNvdXJjZT8ubG9hZGluZyB8fCBsb2FkaW5nXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1hY3Rpdml0eS10YWJsZS1sb2FkaW5nXCI+XG4gICAgICAgICAgICA8bm92by1sb2FkaW5nPjwvbm92by1sb2FkaW5nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtZmlsdGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtY3VzdG9tLWZpbHRlclwiICpuZ0lmPVwiY3VzdG9tRmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW25vdm8tYWN0aXZpdHktdGFibGUtY3VzdG9tLWZpbHRlcl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxub3ZvLXNpbXBsZS10YWJsZSAqbmdJZj1cIihjb2x1bW5zPy5sZW5ndGggPiAwKVwiIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBub3ZvU29ydEZpbHRlciBub3ZvU2VsZWN0aW9uIFtjbGFzcy5lbXB0eV09XCJkYXRhU291cmNlPy5jdXJyZW50bHlFbXB0eSAmJiBzdGF0ZS51c2VyRmlsdGVyZWRcIiBbaGlkZGVuXT1cImRhdGFTb3VyY2U/LnRvdGFsbHlFbXB0eSAmJiAhc3RhdGUudXNlckZpbHRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBub3ZvU2ltcGxlQ29sdW1uRGVmPVwic2VsZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bm92by1zaW1wbGUtY2hlY2tib3gtaGVhZGVyLWNlbGwgKm5vdm9TaW1wbGVIZWFkZXJDZWxsRGVmPjwvbm92by1zaW1wbGUtY2hlY2tib3gtaGVhZGVyLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bm92by1zaW1wbGUtY2hlY2tib3gtY2VsbCAqbm92b1NpbXBsZUNlbGxEZWY9XCJsZXQgcm93OyBsZXQgaSA9IGluZGV4XCIgW3Jvd109XCJyb3dcIiBbaW5kZXhdPVwiaVwiPjwvbm92by1zaW1wbGUtY2hlY2tib3gtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBhY3Rpb25Db2x1bW5zXCIgW25vdm9TaW1wbGVDb2x1bW5EZWZdPVwiY29sdW1uLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bm92by1zaW1wbGUtZW1wdHktaGVhZGVyLWNlbGwgW2NsYXNzLmJ1dHRvbi1oZWFkZXItY2VsbF09XCIhY29sdW1uLm9wdGlvbnNcIiBbY2xhc3MuZHJvcGRvd24taGVhZGVyLWNlbGxdPVwiY29sdW1uLm9wdGlvbnNcIiAqbm92b1NpbXBsZUhlYWRlckNlbGxEZWY+PC9ub3ZvLXNpbXBsZS1lbXB0eS1oZWFkZXItY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLXNpbXBsZS1hY3Rpb24tY2VsbCAqbm92b1NpbXBsZUNlbGxEZWY9XCJsZXQgcm93OyBsZXQgaSA9IGluZGV4XCIgW3Jvd109XCJyb3dcIiBbY29sdW1uXT1cImNvbHVtblwiPjwvbm92by1zaW1wbGUtYWN0aW9uLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiIFtub3ZvU2ltcGxlQ29sdW1uRGVmXT1cImNvbHVtbi5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tc2ltcGxlLWhlYWRlci1jZWxsICpub3ZvU2ltcGxlSGVhZGVyQ2VsbERlZiBbY29sdW1uXT1cImNvbHVtblwiIFtub3ZvLXNpbXBsZS1jZWxsLWNvbmZpZ109XCJjb2x1bW4uY29uZmlnXCIgW2RlZmF1bHRTb3J0XT1cImRlZmF1bHRTb3J0XCI+e3sgY29sdW1uLmxhYmVsIH19PC9ub3ZvLXNpbXBsZS1oZWFkZXItY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLXNpbXBsZS1jZWxsICpub3ZvU2ltcGxlQ2VsbERlZj1cImxldCByb3dcIiBbY29sdW1uXT1cImNvbHVtblwiIFtyb3ddPVwicm93XCI+PC9ub3ZvLXNpbXBsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPG5vdm8tc2ltcGxlLWhlYWRlci1yb3cgKm5vdm9TaW1wbGVIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC9ub3ZvLXNpbXBsZS1oZWFkZXItcm93PlxuICAgICAgICAgICAgICAgICAgICA8bm92by1zaW1wbGUtcm93ICpub3ZvU2ltcGxlUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L25vdm8tc2ltcGxlLXJvdz5cbiAgICAgICAgICAgICAgICA8L25vdm8tc2ltcGxlLXRhYmxlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLW5vLXJlc3VsdHMtY29udGFpbmVyXCIgKm5nSWY9XCJkYXRhU291cmNlPy5jdXJyZW50bHlFbXB0eSAmJiBzdGF0ZS51c2VyRmlsdGVyZWQgJiYgIWRhdGFTb3VyY2U/LmxvYWRpbmcgJiYgIWxvYWRpbmcgJiYgIWRhdGFTb3VyY2UucHJpc3RpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAjZmlsdGVyZWQ+PG5nLWNvbnRlbnQgc2VsZWN0PVwiW25vdm8tYWN0aXZpdHktdGFibGUtbm8tcmVzdWx0cy1tZXNzYWdlXVwiPjwvbmctY29udGVudD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtZW1wdHktbWVzc2FnZVwiICpuZ0lmPVwiZmlsdGVyZWQuY2hpbGROb2Rlcy5sZW5ndGggPT0gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpIGNsYXNzPVwiYmhpLXNlYXJjaC1xdWVzdGlvblwiPjwvaT4ge3sgbGFiZWxzLm5vTWF0Y2hpbmdSZWNvcmRzTWVzc2FnZSB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLWVtcHR5LWNvbnRhaW5lclwiICpuZ0lmPVwiZGF0YVNvdXJjZT8udG90YWxseUVtcHR5ICYmICFkYXRhU291cmNlPy5sb2FkaW5nICYmICFsb2FkaW5nICYmICFzdGF0ZS51c2VyRmlsdGVyZWQgJiYgIWRhdGFTb3VyY2UucHJpc3RpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAjZW1wdHk+PG5nLWNvbnRlbnQgc2VsZWN0PVwiW25vdm8tYWN0aXZpdHktdGFibGUtZW1wdHktbWVzc2FnZV1cIj48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLWVtcHR5LW1lc3NhZ2VcIiAqbmdJZj1cImVtcHR5LmNoaWxkTm9kZXMubGVuZ3RoID09IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND48aSBjbGFzcz1cImJoaS1zZWFyY2gtcXVlc3Rpb25cIj48L2k+IHt7IGxhYmVscy5lbXB0eVRhYmxlTWVzc2FnZSB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtOb3ZvQWN0aXZpdHlUYWJsZVN0YXRlXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0FjdGl2aXR5VGFibGU8VD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZ2xvYmFsLXNlYXJjaC1oaWRkZW4nKVxuICBnbG9iYWxTZWFyY2hIaWRkZW5DbGFzc1RvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGFjdGl2aXR5U2VydmljZTogQWN0aXZpdHlUYWJsZVNlcnZpY2U8VD47XG4gIEBJbnB1dCgpXG4gIGNvbHVtbnM6IFNpbXBsZVRhYmxlQ29sdW1uPFQ+W107XG4gIEBJbnB1dCgpXG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdO1xuICBASW5wdXQoKVxuICBhY3Rpb25Db2x1bW5zOiBTaW1wbGVUYWJsZUFjdGlvbkNvbHVtbjxUPltdO1xuICBASW5wdXQoKVxuICBwYWdpbmF0aW9uT3B0aW9uczogU2ltcGxlVGFibGVQYWdpbmF0aW9uT3B0aW9ucztcbiAgQElucHV0KClcbiAgc2VhcmNoT3B0aW9uczogU2ltcGxlVGFibGVTZWFyY2hPcHRpb25zO1xuICBASW5wdXQoKVxuICBkZWZhdWx0U29ydDogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH07XG4gIEBJbnB1dCgpXG4gIG91dHNpZGVGaWx0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjdXN0b21GaWx0ZXIodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2N1c3RvbUZpbHRlciA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgY3VzdG9tRmlsdGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21GaWx0ZXI7XG4gIH1cbiAgcHJpdmF0ZSBfY3VzdG9tRmlsdGVyOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmb3JjZVNob3dIZWFkZXIodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2ZvcmNlU2hvd0hlYWRlciA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgZm9yY2VTaG93SGVhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JjZVNob3dIZWFkZXI7XG4gIH1cbiAgcHJpdmF0ZSBfZm9yY2VTaG93SGVhZGVyOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBoaWRlR2xvYmFsU2VhcmNoKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWRlR2xvYmFsU2VhcmNoID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICAgIHRoaXMuZ2xvYmFsU2VhcmNoSGlkZGVuQ2xhc3NUb2dnbGUgPSB0aGlzLl9oaWRlR2xvYmFsU2VhcmNoO1xuICB9XG4gIGdldCBoaWRlR2xvYmFsU2VhcmNoKCkge1xuICAgIHJldHVybiB0aGlzLl9oaWRlR2xvYmFsU2VhcmNoO1xuICB9XG4gIHByaXZhdGUgX2hpZGVHbG9iYWxTZWFyY2g6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGRlYnVnKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kZWJ1ZyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgZGVidWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlYnVnO1xuICB9XG4gIHByaXZhdGUgX2RlYnVnOiBib29sZWFuO1xuXG4gIHB1YmxpYyBkYXRhU291cmNlOiBBY3Rpdml0eVRhYmxlRGF0YVNvdXJjZTxUPjtcbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHByaXZhdGUgb3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZW1wdHknKVxuICBnZXQgZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZSAmJiB0aGlzLmRhdGFTb3VyY2UudG90YWxseUVtcHR5O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sb2FkaW5nJylcbiAgZ2V0IGxvYWRpbmdDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nIHx8ICh0aGlzLmRhdGFTb3VyY2UgJiYgdGhpcy5kYXRhU291cmNlLmxvYWRpbmcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgc3RhdGU6IE5vdm9BY3Rpdml0eVRhYmxlU3RhdGUpIHtcbiAgICBub3RpZnkoJ1tEZXByZWNhdGVkXTogVGhlIHNpbXBsZSB0YWJsZSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgbWlncmF0ZSB0byBub3ZvLWRhdGEtdGFibGVzIScpO1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBjaGFuZ2VzWydhY3Rpdml0eVNlcnZpY2UnXSAmJiAhY2hhbmdlc1snYWN0aXZpdHlTZXJ2aWNlJ10uY3VycmVudFZhbHVlO1xuICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICBpZiAoY2hhbmdlc1snYWN0aXZpdHlTZXJ2aWNlJ10gJiYgY2hhbmdlc1snYWN0aXZpdHlTZXJ2aWNlJ10uY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBBY3Rpdml0eVRhYmxlRGF0YVNvdXJjZTxUPih0aGlzLmFjdGl2aXR5U2VydmljZSwgdGhpcy5zdGF0ZSwgdGhpcy5yZWYpO1xuICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snb3V0c2lkZUZpbHRlciddICYmIGNoYW5nZXNbJ291dHNpZGVGaWx0ZXInXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgIGlmICghdGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMub3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbiA9IHRoaXMub3V0c2lkZUZpbHRlci5zdWJzY3JpYmUoKGZpbHRlcjogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5vdXRzaWRlRmlsdGVyID0gZmlsdGVyO1xuICAgICAgICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KHsgZ2xvYmFsU2VhcmNoOiB0aGlzLnN0YXRlLmdsb2JhbFNlYXJjaCwgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlciwgc29ydDogdGhpcy5zdGF0ZS5zb3J0IH0pO1xuICAgICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uT3B0aW9ucyAmJiAhdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlKSB7XG4gICAgICB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2UgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uT3B0aW9ucyAmJiAhdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZSkge1xuICAgICAgdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZSA9IDUwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uT3B0aW9ucyAmJiAhdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZU9wdGlvbnMpIHtcbiAgICAgIHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemVPcHRpb25zID0gWzEwLCAyNSwgNTAsIDEwMF07XG4gICAgfVxuICAgIHRoaXMuc3RhdGUucGFnZSA9IHRoaXMucGFnaW5hdGlvbk9wdGlvbnMgPyB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2UgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGF0ZS5wYWdlU2l6ZSA9IHRoaXMucGFnaW5hdGlvbk9wdGlvbnMgPyB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIG9uU2VhcmNoQ2hhbmdlKHRlcm06IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUuZ2xvYmFsU2VhcmNoID0gdGVybTtcbiAgICB0aGlzLnN0YXRlLnJlc2V0KGZhbHNlLCB0cnVlKTtcbiAgICB0aGlzLnN0YXRlLnVwZGF0ZXMubmV4dCh7IGdsb2JhbFNlYXJjaDogdGVybSwgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlciwgc29ydDogdGhpcy5zdGF0ZS5zb3J0IH0pO1xuICB9XG59XG4iXX0=