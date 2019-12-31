/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation, HostBinding, Input, Directive, EventEmitter, ChangeDetectorRef, } from '@angular/core';
import { CDK_TABLE_TEMPLATE, CdkTable } from '@angular/cdk/table';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ActivityTableDataSource } from './table-source';
import { NovoLabelService } from '../../services/novo-label-service';
import { NovoActivityTableState } from './state';
import { notify } from '../../utils/notifier/notifier.util';
/**
 * Workaround for https://github.com/angular/angular/issues/17849
 * @type {?}
 */
export var _NovoTable = CdkTable;
/**
 * @template T
 */
var NovoTable = /** @class */ (function (_super) {
    tslib_1.__extends(NovoTable, _super);
    function NovoTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NovoTable.decorators = [
        { type: Component, args: [{
                    selector: 'novo-simple-table',
                    template: CDK_TABLE_TEMPLATE,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    return NovoTable;
}(_NovoTable));
export { NovoTable };
var NovoActivityTableActions = /** @class */ (function () {
    function NovoActivityTableActions() {
    }
    NovoActivityTableActions.decorators = [
        { type: Directive, args: [{
                    selector: 'novo-activity-table-actions',
                },] }
    ];
    return NovoActivityTableActions;
}());
export { NovoActivityTableActions };
var NovoActivityTableCustomHeader = /** @class */ (function () {
    function NovoActivityTableCustomHeader() {
    }
    NovoActivityTableCustomHeader.decorators = [
        { type: Directive, args: [{
                    selector: 'novo-activity-table-custom-header',
                },] }
    ];
    return NovoActivityTableCustomHeader;
}());
export { NovoActivityTableCustomHeader };
var NovoActivityTableCustomFilter = /** @class */ (function () {
    function NovoActivityTableCustomFilter() {
    }
    NovoActivityTableCustomFilter.decorators = [
        { type: Directive, args: [{
                    selector: 'novo-activity-table-custom-filter',
                },] }
    ];
    return NovoActivityTableCustomFilter;
}());
export { NovoActivityTableCustomFilter };
var NovoActivityTableEmptyMessage = /** @class */ (function () {
    function NovoActivityTableEmptyMessage() {
    }
    NovoActivityTableEmptyMessage.decorators = [
        { type: Directive, args: [{
                    selector: 'novo-activity-table-empty-message',
                },] }
    ];
    return NovoActivityTableEmptyMessage;
}());
export { NovoActivityTableEmptyMessage };
var NovoActivityTableNoResultsMessage = /** @class */ (function () {
    function NovoActivityTableNoResultsMessage() {
    }
    NovoActivityTableNoResultsMessage.decorators = [
        { type: Directive, args: [{
                    selector: 'novo-activity-table-no-results-message',
                },] }
    ];
    return NovoActivityTableNoResultsMessage;
}());
export { NovoActivityTableNoResultsMessage };
/**
 * @template T
 */
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
        get: /**
         * @return {?}
         */
        function () {
            return this._customFilter;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._customFilter = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoActivityTable.prototype, "forceShowHeader", {
        get: /**
         * @return {?}
         */
        function () {
            return this._forceShowHeader;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._forceShowHeader = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoActivityTable.prototype, "hideGlobalSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hideGlobalSearch;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._hideGlobalSearch = coerceBooleanProperty(v);
            this.globalSearchHiddenClassToggle = this._hideGlobalSearch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoActivityTable.prototype, "debug", {
        get: /**
         * @return {?}
         */
        function () {
            return this._debug;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._debug = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoActivityTable.prototype, "empty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dataSource && this.dataSource.totallyEmpty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoActivityTable.prototype, "loadingClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.loading || (this.dataSource && this.dataSource.loading);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NovoActivityTable.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
    /**
     * @return {?}
     */
    NovoActivityTable.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.outsideFilterSubscription) {
            this.outsideFilterSubscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    NovoActivityTable.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
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
    /**
     * @param {?} term
     * @return {?}
     */
    NovoActivityTable.prototype.onSearchChange = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        this.state.globalSearch = term;
        this.state.reset(false, true);
        this.state.updates.next({ globalSearch: term, filter: this.state.filter, sort: this.state.sort });
    };
    NovoActivityTable.decorators = [
        { type: Component, args: [{
                    selector: 'novo-activity-table',
                    template: "\n        <div *ngIf=\"debug\">\n            <p>Total: {{ dataSource?.total }}</p>\n            <p>Current: {{ dataSource?.current }}</p>\n            <p>Totally Empty: {{ dataSource?.totallyEmpty }}</p>\n            <p>Currently Empty: {{ dataSource?.currentlyEmpty }}</p>\n            <p>Loading (DataSource): {{ dataSource?.loading }}</p>\n            <p>User Filtered: {{ state.userFiltered }}</p>\n            <p>Loading (Table): {{ loading }}</p>\n        </div>\n        <header *ngIf=\"(!(dataSource?.totallyEmpty && !state.userFiltered) && !loading) || forceShowHeader\">\n            <ng-content select=\"[novo-activity-table-custom-header]\"></ng-content>\n            <novo-search\n                alwaysOpen=\"true\"\n                (searchChanged)=\"onSearchChange($event)\"\n                [(ngModel)]=\"state.globalSearch\"\n                *ngIf=\"!hideGlobalSearch\"\n                [placeholder]=\"searchOptions?.placeholder\"\n                [hint]=\"searchOptions?.tooltip\">\n            </novo-search>\n            <novo-simple-table-pagination\n                *ngIf=\"paginationOptions\"\n                [length]=\"dataSource?.total\"\n                [page]=\"paginationOptions.page\"\n                [pageSize]=\"paginationOptions.pageSize\"\n                [pageSizeOptions]=\"paginationOptions.pageSizeOptions\">\n            </novo-simple-table-pagination>\n            <div class=\"novo-activity-table-actions\">\n                <ng-content select=\"[novo-activity-table-actions]\"></ng-content>\n            </div>\n        </header>\n        <div class=\"novo-activity-table-loading-mask\" *ngIf=\"dataSource?.loading || loading\" data-automation-id=\"novo-activity-table-loading\">\n            <novo-loading></novo-loading>\n        </div>\n        <div class=\"novo-activity-table-filter-container\">\n            <div class=\"novo-activity-table-custom-filter\" *ngIf=\"customFilter\">\n                <ng-content select=\"[novo-activity-table-custom-filter]\"></ng-content>\n            </div>\n            <div class=\"novo-activity-table-container\">\n                <novo-simple-table *ngIf=\"(columns?.length > 0)\" [dataSource]=\"dataSource\" novoSortFilter novoSelection [class.empty]=\"dataSource?.currentlyEmpty && state.userFiltered\" [hidden]=\"dataSource?.totallyEmpty && !state.userFiltered\">\n                    <ng-content></ng-content>\n                    <ng-container novoSimpleColumnDef=\"selection\">\n                        <novo-simple-checkbox-header-cell *novoSimpleHeaderCellDef></novo-simple-checkbox-header-cell>\n                        <novo-simple-checkbox-cell *novoSimpleCellDef=\"let row; let i = index\" [row]=\"row\" [index]=\"i\"></novo-simple-checkbox-cell>\n                    </ng-container>\n                    <ng-container *ngFor=\"let column of actionColumns\" [novoSimpleColumnDef]=\"column.id\">\n                        <novo-simple-empty-header-cell [class.button-header-cell]=\"!column.options\" [class.dropdown-header-cell]=\"column.options\" *novoSimpleHeaderCellDef></novo-simple-empty-header-cell>\n                        <novo-simple-action-cell *novoSimpleCellDef=\"let row; let i = index\" [row]=\"row\" [column]=\"column\"></novo-simple-action-cell>\n                    </ng-container>\n                    <ng-container *ngFor=\"let column of columns\" [novoSimpleColumnDef]=\"column.id\">\n                        <novo-simple-header-cell *novoSimpleHeaderCellDef [column]=\"column\" [novo-simple-cell-config]=\"column.config\" [defaultSort]=\"defaultSort\">{{ column.label }}</novo-simple-header-cell>\n                        <novo-simple-cell *novoSimpleCellDef=\"let row\" [column]=\"column\" [row]=\"row\"></novo-simple-cell>\n                    </ng-container>\n                    <novo-simple-header-row *novoSimpleHeaderRowDef=\"displayedColumns\"></novo-simple-header-row>\n                    <novo-simple-row *novoSimpleRowDef=\"let row; columns: displayedColumns;\"></novo-simple-row>\n                </novo-simple-table>\n                <div class=\"novo-activity-table-no-results-container\" *ngIf=\"dataSource?.currentlyEmpty && state.userFiltered && !dataSource?.loading && !loading && !dataSource.pristine\">\n                    <div #filtered><ng-content select=\"[novo-activity-table-no-results-message]\"></ng-content></div>\n                    <div class=\"novo-activity-table-empty-message\" *ngIf=\"filtered.childNodes.length == 0\">\n                        <h4><i class=\"bhi-search-question\"></i> {{ labels.noMatchingRecordsMessage }}</h4>\n                    </div>\n                </div>\n                <div class=\"novo-activity-table-empty-container\" *ngIf=\"dataSource?.totallyEmpty && !dataSource?.loading && !loading && !state.userFiltered && !dataSource.pristine\">\n                    <div #empty><ng-content select=\"[novo-activity-table-empty-message]\"></ng-content></div>\n                    <div class=\"novo-activity-table-empty-message\" *ngIf=\"empty.childNodes.length == 0\">\n                        <h4><i class=\"bhi-search-question\"></i> {{ labels.emptyTableMessage }}</h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NovoActivityTableState]
                }] }
    ];
    /** @nocollapse */
    NovoActivityTable.ctorParameters = function () { return [
        { type: NovoLabelService },
        { type: ChangeDetectorRef },
        { type: NovoActivityTableState }
    ]; };
    NovoActivityTable.propDecorators = {
        globalSearchHiddenClassToggle: [{ type: HostBinding, args: ['class.global-search-hidden',] }],
        activityService: [{ type: Input }],
        columns: [{ type: Input }],
        displayedColumns: [{ type: Input }],
        actionColumns: [{ type: Input }],
        paginationOptions: [{ type: Input }],
        searchOptions: [{ type: Input }],
        defaultSort: [{ type: Input }],
        outsideFilter: [{ type: Input }],
        customFilter: [{ type: Input }],
        forceShowHeader: [{ type: Input }],
        hideGlobalSearch: [{ type: Input }],
        debug: [{ type: Input }],
        empty: [{ type: HostBinding, args: ['class.empty',] }],
        loadingClass: [{ type: HostBinding, args: ['class.loading',] }]
    };
    return NovoActivityTable;
}());
export { NovoActivityTable };
if (false) {
    /** @type {?} */
    NovoActivityTable.prototype.globalSearchHiddenClassToggle;
    /** @type {?} */
    NovoActivityTable.prototype.activityService;
    /** @type {?} */
    NovoActivityTable.prototype.columns;
    /** @type {?} */
    NovoActivityTable.prototype.displayedColumns;
    /** @type {?} */
    NovoActivityTable.prototype.actionColumns;
    /** @type {?} */
    NovoActivityTable.prototype.paginationOptions;
    /** @type {?} */
    NovoActivityTable.prototype.searchOptions;
    /** @type {?} */
    NovoActivityTable.prototype.defaultSort;
    /** @type {?} */
    NovoActivityTable.prototype.outsideFilter;
    /**
     * @type {?}
     * @private
     */
    NovoActivityTable.prototype._customFilter;
    /**
     * @type {?}
     * @private
     */
    NovoActivityTable.prototype._forceShowHeader;
    /**
     * @type {?}
     * @private
     */
    NovoActivityTable.prototype._hideGlobalSearch;
    /**
     * @type {?}
     * @private
     */
    NovoActivityTable.prototype._debug;
    /** @type {?} */
    NovoActivityTable.prototype.dataSource;
    /** @type {?} */
    NovoActivityTable.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    NovoActivityTable.prototype.outsideFilterSubscription;
    /** @type {?} */
    NovoActivityTable.prototype.labels;
    /**
     * @type {?}
     * @private
     */
    NovoActivityTable.prototype.ref;
    /** @type {?} */
    NovoActivityTable.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvc2ltcGxlLXRhYmxlL3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFdBQVcsRUFDWCxLQUFLLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFHWixpQkFBaUIsR0FHbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSTlELE9BQU8sRUFBd0IsdUJBQXVCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7OztBQUc1RCxNQUFNLEtBQU8sVUFBVSxHQUFHLFFBQVE7Ozs7QUFFbEM7SUFNa0MscUNBQWE7SUFOL0M7O0lBTWlELENBQUM7O2dCQU5qRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7SUFDZ0QsZ0JBQUM7Q0FBQSxBQU5sRCxDQU1rQyxVQUFVLEdBQU07U0FBckMsU0FBUztBQUV0QjtJQUFBO0lBR3VDLENBQUM7O2dCQUh2QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtpQkFDeEM7O0lBQ3NDLCtCQUFDO0NBQUEsQUFIeEMsSUFHd0M7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LElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNwRyxDQUFDOztnQkFyTUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSw2bktBc0VQO29CQUNILGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDcEM7Ozs7Z0JBbkhRLGdCQUFnQjtnQkFWdkIsaUJBQWlCO2dCQVdWLHNCQUFzQjs7O2dEQW9INUIsV0FBVyxTQUFDLDRCQUE0QjtrQ0FHeEMsS0FBSzswQkFFTCxLQUFLO21DQUVMLEtBQUs7Z0NBRUwsS0FBSztvQ0FFTCxLQUFLO2dDQUVMLEtBQUs7OEJBRUwsS0FBSztnQ0FFTCxLQUFLOytCQUdMLEtBQUs7a0NBU0wsS0FBSzttQ0FTTCxLQUFLO3dCQVVMLEtBQUs7d0JBY0wsV0FBVyxTQUFDLGFBQWE7K0JBS3pCLFdBQVcsU0FBQyxlQUFlOztJQXNEOUIsd0JBQUM7Q0FBQSxBQXRNRCxJQXNNQztTQTFIWSxpQkFBaUI7OztJQUM1QiwwREFDK0M7O0lBRS9DLDRDQUN5Qzs7SUFDekMsb0NBQ2dDOztJQUNoQyw2Q0FDMkI7O0lBQzNCLDBDQUM0Qzs7SUFDNUMsOENBQ2dEOztJQUNoRCwwQ0FDd0M7O0lBQ3hDLHdDQUMyQzs7SUFDM0MsMENBQ2lDOzs7OztJQVNqQywwQ0FBK0I7Ozs7O0lBUy9CLDZDQUFrQzs7Ozs7SUFVbEMsOENBQW1DOzs7OztJQVNuQyxtQ0FBd0I7O0lBRXhCLHVDQUE4Qzs7SUFDOUMsb0NBQStCOzs7OztJQUUvQixzREFBZ0Q7O0lBWXBDLG1DQUErQjs7Ozs7SUFBRSxnQ0FBOEI7O0lBQUUsa0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDREtfVEFCTEVfVEVNUExBVEUsIENka1RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU2ltcGxlVGFibGVDb2x1bW4sIFNpbXBsZVRhYmxlQWN0aW9uQ29sdW1uLCBTaW1wbGVUYWJsZVBhZ2luYXRpb25PcHRpb25zLCBTaW1wbGVUYWJsZVNlYXJjaE9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQWN0aXZpdHlUYWJsZVNlcnZpY2UsIEFjdGl2aXR5VGFibGVEYXRhU291cmNlIH0gZnJvbSAnLi90YWJsZS1zb3VyY2UnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvQWN0aXZpdHlUYWJsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBub3RpZnkgfSBmcm9tICcuLi8uLi91dGlscy9ub3RpZmllci9ub3RpZmllci51dGlsJztcblxuLyoqIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE3ODQ5ICovXG5leHBvcnQgY29uc3QgX05vdm9UYWJsZSA9IENka1RhYmxlO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS10YWJsZScsXG4gIHRlbXBsYXRlOiBDREtfVEFCTEVfVEVNUExBVEUsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGFibGU8VD4gZXh0ZW5kcyBfTm92b1RhYmxlPFQ+IHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tYWN0aXZpdHktdGFibGUtYWN0aW9ucycsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9BY3Rpdml0eVRhYmxlQWN0aW9ucyB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjdGl2aXR5LXRhYmxlLWN1c3RvbS1oZWFkZXInLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWN0aXZpdHlUYWJsZUN1c3RvbUhlYWRlciB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjdGl2aXR5LXRhYmxlLWN1c3RvbS1maWx0ZXInLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWN0aXZpdHlUYWJsZUN1c3RvbUZpbHRlciB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjdGl2aXR5LXRhYmxlLWVtcHR5LW1lc3NhZ2UnLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWN0aXZpdHlUYWJsZUVtcHR5TWVzc2FnZSB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjdGl2aXR5LXRhYmxlLW5vLXJlc3VsdHMtbWVzc2FnZScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9BY3Rpdml0eVRhYmxlTm9SZXN1bHRzTWVzc2FnZSB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjdGl2aXR5LXRhYmxlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAqbmdJZj1cImRlYnVnXCI+XG4gICAgICAgICAgICA8cD5Ub3RhbDoge3sgZGF0YVNvdXJjZT8udG90YWwgfX08L3A+XG4gICAgICAgICAgICA8cD5DdXJyZW50OiB7eyBkYXRhU291cmNlPy5jdXJyZW50IH19PC9wPlxuICAgICAgICAgICAgPHA+VG90YWxseSBFbXB0eToge3sgZGF0YVNvdXJjZT8udG90YWxseUVtcHR5IH19PC9wPlxuICAgICAgICAgICAgPHA+Q3VycmVudGx5IEVtcHR5OiB7eyBkYXRhU291cmNlPy5jdXJyZW50bHlFbXB0eSB9fTwvcD5cbiAgICAgICAgICAgIDxwPkxvYWRpbmcgKERhdGFTb3VyY2UpOiB7eyBkYXRhU291cmNlPy5sb2FkaW5nIH19PC9wPlxuICAgICAgICAgICAgPHA+VXNlciBGaWx0ZXJlZDoge3sgc3RhdGUudXNlckZpbHRlcmVkIH19PC9wPlxuICAgICAgICAgICAgPHA+TG9hZGluZyAoVGFibGUpOiB7eyBsb2FkaW5nIH19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGhlYWRlciAqbmdJZj1cIighKGRhdGFTb3VyY2U/LnRvdGFsbHlFbXB0eSAmJiAhc3RhdGUudXNlckZpbHRlcmVkKSAmJiAhbG9hZGluZykgfHwgZm9yY2VTaG93SGVhZGVyXCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbm92by1hY3Rpdml0eS10YWJsZS1jdXN0b20taGVhZGVyXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxub3ZvLXNlYXJjaFxuICAgICAgICAgICAgICAgIGFsd2F5c09wZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAoc2VhcmNoQ2hhbmdlZCk9XCJvblNlYXJjaENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInN0YXRlLmdsb2JhbFNlYXJjaFwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIhaGlkZUdsb2JhbFNlYXJjaFwiXG4gICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInNlYXJjaE9wdGlvbnM/LnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICBbaGludF09XCJzZWFyY2hPcHRpb25zPy50b29sdGlwXCI+XG4gICAgICAgICAgICA8L25vdm8tc2VhcmNoPlxuICAgICAgICAgICAgPG5vdm8tc2ltcGxlLXRhYmxlLXBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICAqbmdJZj1cInBhZ2luYXRpb25PcHRpb25zXCJcbiAgICAgICAgICAgICAgICBbbGVuZ3RoXT1cImRhdGFTb3VyY2U/LnRvdGFsXCJcbiAgICAgICAgICAgICAgICBbcGFnZV09XCJwYWdpbmF0aW9uT3B0aW9ucy5wYWdlXCJcbiAgICAgICAgICAgICAgICBbcGFnZVNpemVdPVwicGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemVcIlxuICAgICAgICAgICAgICAgIFtwYWdlU2l6ZU9wdGlvbnNdPVwicGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemVPcHRpb25zXCI+XG4gICAgICAgICAgICA8L25vdm8tc2ltcGxlLXRhYmxlLXBhZ2luYXRpb24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1hY3Rpdml0eS10YWJsZS1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW25vdm8tYWN0aXZpdHktdGFibGUtYWN0aW9uc11cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLWxvYWRpbmctbWFza1wiICpuZ0lmPVwiZGF0YVNvdXJjZT8ubG9hZGluZyB8fCBsb2FkaW5nXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1hY3Rpdml0eS10YWJsZS1sb2FkaW5nXCI+XG4gICAgICAgICAgICA8bm92by1sb2FkaW5nPjwvbm92by1sb2FkaW5nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtZmlsdGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtY3VzdG9tLWZpbHRlclwiICpuZ0lmPVwiY3VzdG9tRmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW25vdm8tYWN0aXZpdHktdGFibGUtY3VzdG9tLWZpbHRlcl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxub3ZvLXNpbXBsZS10YWJsZSAqbmdJZj1cIihjb2x1bW5zPy5sZW5ndGggPiAwKVwiIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBub3ZvU29ydEZpbHRlciBub3ZvU2VsZWN0aW9uIFtjbGFzcy5lbXB0eV09XCJkYXRhU291cmNlPy5jdXJyZW50bHlFbXB0eSAmJiBzdGF0ZS51c2VyRmlsdGVyZWRcIiBbaGlkZGVuXT1cImRhdGFTb3VyY2U/LnRvdGFsbHlFbXB0eSAmJiAhc3RhdGUudXNlckZpbHRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBub3ZvU2ltcGxlQ29sdW1uRGVmPVwic2VsZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bm92by1zaW1wbGUtY2hlY2tib3gtaGVhZGVyLWNlbGwgKm5vdm9TaW1wbGVIZWFkZXJDZWxsRGVmPjwvbm92by1zaW1wbGUtY2hlY2tib3gtaGVhZGVyLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bm92by1zaW1wbGUtY2hlY2tib3gtY2VsbCAqbm92b1NpbXBsZUNlbGxEZWY9XCJsZXQgcm93OyBsZXQgaSA9IGluZGV4XCIgW3Jvd109XCJyb3dcIiBbaW5kZXhdPVwiaVwiPjwvbm92by1zaW1wbGUtY2hlY2tib3gtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBhY3Rpb25Db2x1bW5zXCIgW25vdm9TaW1wbGVDb2x1bW5EZWZdPVwiY29sdW1uLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bm92by1zaW1wbGUtZW1wdHktaGVhZGVyLWNlbGwgW2NsYXNzLmJ1dHRvbi1oZWFkZXItY2VsbF09XCIhY29sdW1uLm9wdGlvbnNcIiBbY2xhc3MuZHJvcGRvd24taGVhZGVyLWNlbGxdPVwiY29sdW1uLm9wdGlvbnNcIiAqbm92b1NpbXBsZUhlYWRlckNlbGxEZWY+PC9ub3ZvLXNpbXBsZS1lbXB0eS1oZWFkZXItY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLXNpbXBsZS1hY3Rpb24tY2VsbCAqbm92b1NpbXBsZUNlbGxEZWY9XCJsZXQgcm93OyBsZXQgaSA9IGluZGV4XCIgW3Jvd109XCJyb3dcIiBbY29sdW1uXT1cImNvbHVtblwiPjwvbm92by1zaW1wbGUtYWN0aW9uLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiIFtub3ZvU2ltcGxlQ29sdW1uRGVmXT1cImNvbHVtbi5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tc2ltcGxlLWhlYWRlci1jZWxsICpub3ZvU2ltcGxlSGVhZGVyQ2VsbERlZiBbY29sdW1uXT1cImNvbHVtblwiIFtub3ZvLXNpbXBsZS1jZWxsLWNvbmZpZ109XCJjb2x1bW4uY29uZmlnXCIgW2RlZmF1bHRTb3J0XT1cImRlZmF1bHRTb3J0XCI+e3sgY29sdW1uLmxhYmVsIH19PC9ub3ZvLXNpbXBsZS1oZWFkZXItY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLXNpbXBsZS1jZWxsICpub3ZvU2ltcGxlQ2VsbERlZj1cImxldCByb3dcIiBbY29sdW1uXT1cImNvbHVtblwiIFtyb3ddPVwicm93XCI+PC9ub3ZvLXNpbXBsZS1jZWxsPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPG5vdm8tc2ltcGxlLWhlYWRlci1yb3cgKm5vdm9TaW1wbGVIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC9ub3ZvLXNpbXBsZS1oZWFkZXItcm93PlxuICAgICAgICAgICAgICAgICAgICA8bm92by1zaW1wbGUtcm93ICpub3ZvU2ltcGxlUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L25vdm8tc2ltcGxlLXJvdz5cbiAgICAgICAgICAgICAgICA8L25vdm8tc2ltcGxlLXRhYmxlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLW5vLXJlc3VsdHMtY29udGFpbmVyXCIgKm5nSWY9XCJkYXRhU291cmNlPy5jdXJyZW50bHlFbXB0eSAmJiBzdGF0ZS51c2VyRmlsdGVyZWQgJiYgIWRhdGFTb3VyY2U/LmxvYWRpbmcgJiYgIWxvYWRpbmcgJiYgIWRhdGFTb3VyY2UucHJpc3RpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAjZmlsdGVyZWQ+PG5nLWNvbnRlbnQgc2VsZWN0PVwiW25vdm8tYWN0aXZpdHktdGFibGUtbm8tcmVzdWx0cy1tZXNzYWdlXVwiPjwvbmctY29udGVudD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtZW1wdHktbWVzc2FnZVwiICpuZ0lmPVwiZmlsdGVyZWQuY2hpbGROb2Rlcy5sZW5ndGggPT0gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpIGNsYXNzPVwiYmhpLXNlYXJjaC1xdWVzdGlvblwiPjwvaT4ge3sgbGFiZWxzLm5vTWF0Y2hpbmdSZWNvcmRzTWVzc2FnZSB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLWVtcHR5LWNvbnRhaW5lclwiICpuZ0lmPVwiZGF0YVNvdXJjZT8udG90YWxseUVtcHR5ICYmICFkYXRhU291cmNlPy5sb2FkaW5nICYmICFsb2FkaW5nICYmICFzdGF0ZS51c2VyRmlsdGVyZWQgJiYgIWRhdGFTb3VyY2UucHJpc3RpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAjZW1wdHk+PG5nLWNvbnRlbnQgc2VsZWN0PVwiW25vdm8tYWN0aXZpdHktdGFibGUtZW1wdHktbWVzc2FnZV1cIj48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLWVtcHR5LW1lc3NhZ2VcIiAqbmdJZj1cImVtcHR5LmNoaWxkTm9kZXMubGVuZ3RoID09IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND48aSBjbGFzcz1cImJoaS1zZWFyY2gtcXVlc3Rpb25cIj48L2k+IHt7IGxhYmVscy5lbXB0eVRhYmxlTWVzc2FnZSB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtOb3ZvQWN0aXZpdHlUYWJsZVN0YXRlXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0FjdGl2aXR5VGFibGU8VD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZ2xvYmFsLXNlYXJjaC1oaWRkZW4nKVxuICBnbG9iYWxTZWFyY2hIaWRkZW5DbGFzc1RvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGFjdGl2aXR5U2VydmljZTogQWN0aXZpdHlUYWJsZVNlcnZpY2U8VD47XG4gIEBJbnB1dCgpXG4gIGNvbHVtbnM6IFNpbXBsZVRhYmxlQ29sdW1uPFQ+W107XG4gIEBJbnB1dCgpXG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdO1xuICBASW5wdXQoKVxuICBhY3Rpb25Db2x1bW5zOiBTaW1wbGVUYWJsZUFjdGlvbkNvbHVtbjxUPltdO1xuICBASW5wdXQoKVxuICBwYWdpbmF0aW9uT3B0aW9uczogU2ltcGxlVGFibGVQYWdpbmF0aW9uT3B0aW9ucztcbiAgQElucHV0KClcbiAgc2VhcmNoT3B0aW9uczogU2ltcGxlVGFibGVTZWFyY2hPcHRpb25zO1xuICBASW5wdXQoKVxuICBkZWZhdWx0U29ydDogeyBpZDogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH07XG4gIEBJbnB1dCgpXG4gIG91dHNpZGVGaWx0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjdXN0b21GaWx0ZXIodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2N1c3RvbUZpbHRlciA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgY3VzdG9tRmlsdGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21GaWx0ZXI7XG4gIH1cbiAgcHJpdmF0ZSBfY3VzdG9tRmlsdGVyOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmb3JjZVNob3dIZWFkZXIodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2ZvcmNlU2hvd0hlYWRlciA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgZm9yY2VTaG93SGVhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JjZVNob3dIZWFkZXI7XG4gIH1cbiAgcHJpdmF0ZSBfZm9yY2VTaG93SGVhZGVyOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBoaWRlR2xvYmFsU2VhcmNoKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWRlR2xvYmFsU2VhcmNoID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICAgIHRoaXMuZ2xvYmFsU2VhcmNoSGlkZGVuQ2xhc3NUb2dnbGUgPSB0aGlzLl9oaWRlR2xvYmFsU2VhcmNoO1xuICB9XG4gIGdldCBoaWRlR2xvYmFsU2VhcmNoKCkge1xuICAgIHJldHVybiB0aGlzLl9oaWRlR2xvYmFsU2VhcmNoO1xuICB9XG4gIHByaXZhdGUgX2hpZGVHbG9iYWxTZWFyY2g6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGRlYnVnKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kZWJ1ZyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgZGVidWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlYnVnO1xuICB9XG4gIHByaXZhdGUgX2RlYnVnOiBib29sZWFuO1xuXG4gIHB1YmxpYyBkYXRhU291cmNlOiBBY3Rpdml0eVRhYmxlRGF0YVNvdXJjZTxUPjtcbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHByaXZhdGUgb3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZW1wdHknKVxuICBnZXQgZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZSAmJiB0aGlzLmRhdGFTb3VyY2UudG90YWxseUVtcHR5O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sb2FkaW5nJylcbiAgZ2V0IGxvYWRpbmdDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nIHx8ICh0aGlzLmRhdGFTb3VyY2UgJiYgdGhpcy5kYXRhU291cmNlLmxvYWRpbmcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgc3RhdGU6IE5vdm9BY3Rpdml0eVRhYmxlU3RhdGUpIHtcbiAgICBub3RpZnkoJ1tEZXByZWNhdGVkXTogVGhlIHNpbXBsZSB0YWJsZSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgbWlncmF0ZSB0byBub3ZvLWRhdGEtdGFibGVzIScpO1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBjaGFuZ2VzWydhY3Rpdml0eVNlcnZpY2UnXSAmJiAhY2hhbmdlc1snYWN0aXZpdHlTZXJ2aWNlJ10uY3VycmVudFZhbHVlO1xuICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICBpZiAoY2hhbmdlc1snYWN0aXZpdHlTZXJ2aWNlJ10gJiYgY2hhbmdlc1snYWN0aXZpdHlTZXJ2aWNlJ10uY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBBY3Rpdml0eVRhYmxlRGF0YVNvdXJjZTxUPih0aGlzLmFjdGl2aXR5U2VydmljZSwgdGhpcy5zdGF0ZSwgdGhpcy5yZWYpO1xuICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snb3V0c2lkZUZpbHRlciddICYmIGNoYW5nZXNbJ291dHNpZGVGaWx0ZXInXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgIGlmICghdGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMub3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbiA9IHRoaXMub3V0c2lkZUZpbHRlci5zdWJzY3JpYmUoKGZpbHRlcjogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5vdXRzaWRlRmlsdGVyID0gZmlsdGVyO1xuICAgICAgICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KHsgZ2xvYmFsU2VhcmNoOiB0aGlzLnN0YXRlLmdsb2JhbFNlYXJjaCwgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlciwgc29ydDogdGhpcy5zdGF0ZS5zb3J0IH0pO1xuICAgICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uT3B0aW9ucyAmJiAhdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlKSB7XG4gICAgICB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2UgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uT3B0aW9ucyAmJiAhdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZSkge1xuICAgICAgdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZSA9IDUwO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uT3B0aW9ucyAmJiAhdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZU9wdGlvbnMpIHtcbiAgICAgIHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemVPcHRpb25zID0gWzEwLCAyNSwgNTAsIDEwMF07XG4gICAgfVxuICAgIHRoaXMuc3RhdGUucGFnZSA9IHRoaXMucGFnaW5hdGlvbk9wdGlvbnMgPyB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2UgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGF0ZS5wYWdlU2l6ZSA9IHRoaXMucGFnaW5hdGlvbk9wdGlvbnMgPyB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplIDogdW5kZWZpbmVkO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIG9uU2VhcmNoQ2hhbmdlKHRlcm06IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUuZ2xvYmFsU2VhcmNoID0gdGVybTtcbiAgICB0aGlzLnN0YXRlLnJlc2V0KGZhbHNlLCB0cnVlKTtcbiAgICB0aGlzLnN0YXRlLnVwZGF0ZXMubmV4dCh7IGdsb2JhbFNlYXJjaDogdGVybSwgZmlsdGVyOiB0aGlzLnN0YXRlLmZpbHRlciwgc29ydDogdGhpcy5zdGF0ZS5zb3J0IH0pO1xuICB9XG59XG4iXX0=