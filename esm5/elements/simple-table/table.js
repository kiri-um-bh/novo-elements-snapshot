/**
 * @fileoverview added by tsickle
 * Generated from: elements/simple-table/table.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                this.outsideFilterSubscription = this.outsideFilter.subscribe((/**
                 * @param {?} filter
                 * @return {?}
                 */
                function (filter) {
                    _this.state.outsideFilter = filter;
                    _this.state.updates.next({ globalSearch: _this.state.globalSearch, filter: _this.state.filter, sort: _this.state.sort });
                    _this.ref.markForCheck();
                }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvc2ltcGxlLXRhYmxlL3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGlCQUFpQixFQUNqQixXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBR1osaUJBQWlCLEdBR2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUk5RCxPQUFPLEVBQXdCLHVCQUF1QixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7QUFHNUQsTUFBTSxLQUFPLFVBQVUsR0FBRyxRQUFROzs7O0FBRWxDO0lBTWtDLHFDQUFhO0lBTi9DOztJQU1pRCxDQUFDOztnQkFOakQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7O0lBQ2dELGdCQUFDO0NBQUEsQUFObEQsQ0FNa0MsVUFBVSxHQUFNO1NBQXJDLFNBQVM7QUFFdEI7SUFBQTtJQUd1QyxDQUFDOztnQkFIdkMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7aUJBQ3hDOztJQUNzQywrQkFBQztDQUFBLEFBSHhDLElBR3dD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LEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7O2dCQXJNRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLDZuS0FzRVA7b0JBQ0gsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUNwQzs7OztnQkFuSFEsZ0JBQWdCO2dCQVZ2QixpQkFBaUI7Z0JBV1Ysc0JBQXNCOzs7Z0RBb0g1QixXQUFXLFNBQUMsNEJBQTRCO2tDQUd4QyxLQUFLOzBCQUVMLEtBQUs7bUNBRUwsS0FBSztnQ0FFTCxLQUFLO29DQUVMLEtBQUs7Z0NBRUwsS0FBSzs4QkFFTCxLQUFLO2dDQUVMLEtBQUs7K0JBR0wsS0FBSztrQ0FTTCxLQUFLO21DQVNMLEtBQUs7d0JBVUwsS0FBSzt3QkFjTCxXQUFXLFNBQUMsYUFBYTsrQkFLekIsV0FBVyxTQUFDLGVBQWU7O0lBc0Q5Qix3QkFBQztDQUFBLEFBdE1ELElBc01DO1NBMUhZLGlCQUFpQjs7O0lBQzVCLDBEQUMrQzs7SUFFL0MsNENBQ3lDOztJQUN6QyxvQ0FDZ0M7O0lBQ2hDLDZDQUMyQjs7SUFDM0IsMENBQzRDOztJQUM1Qyw4Q0FDZ0Q7O0lBQ2hELDBDQUN3Qzs7SUFDeEMsd0NBQzJDOztJQUMzQywwQ0FDaUM7Ozs7O0lBU2pDLDBDQUErQjs7Ozs7SUFTL0IsNkNBQWtDOzs7OztJQVVsQyw4Q0FBbUM7Ozs7O0lBU25DLG1DQUF3Qjs7SUFFeEIsdUNBQThDOztJQUM5QyxvQ0FBK0I7Ozs7O0lBRS9CLHNEQUFnRDs7SUFZcEMsbUNBQStCOzs7OztJQUFFLGdDQUE4Qjs7SUFBRSxrQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENES19UQUJMRV9URU1QTEFURSwgQ2RrVGFibGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTaW1wbGVUYWJsZUNvbHVtbiwgU2ltcGxlVGFibGVBY3Rpb25Db2x1bW4sIFNpbXBsZVRhYmxlUGFnaW5hdGlvbk9wdGlvbnMsIFNpbXBsZVRhYmxlU2VhcmNoT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBBY3Rpdml0eVRhYmxlU2VydmljZSwgQWN0aXZpdHlUYWJsZURhdGFTb3VyY2UgfSBmcm9tICcuL3RhYmxlLXNvdXJjZSc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9BY3Rpdml0eVRhYmxlU3RhdGUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IG5vdGlmeSB9IGZyb20gJy4uLy4uL3V0aWxzL25vdGlmaWVyL25vdGlmaWVyLnV0aWwnO1xuXG4vKiogV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTc4NDkgKi9cbmV4cG9ydCBjb25zdCBfTm92b1RhYmxlID0gQ2RrVGFibGU7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLXRhYmxlJyxcbiAgdGVtcGxhdGU6IENES19UQUJMRV9URU1QTEFURSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJsZTxUPiBleHRlbmRzIF9Ob3ZvVGFibGU8VD4ge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbm92by1hY3Rpdml0eS10YWJsZS1hY3Rpb25zJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0FjdGl2aXR5VGFibGVBY3Rpb25zIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tYWN0aXZpdHktdGFibGUtY3VzdG9tLWhlYWRlcicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9BY3Rpdml0eVRhYmxlQ3VzdG9tSGVhZGVyIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tYWN0aXZpdHktdGFibGUtY3VzdG9tLWZpbHRlcicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9BY3Rpdml0eVRhYmxlQ3VzdG9tRmlsdGVyIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tYWN0aXZpdHktdGFibGUtZW1wdHktbWVzc2FnZScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9BY3Rpdml0eVRhYmxlRW1wdHlNZXNzYWdlIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tYWN0aXZpdHktdGFibGUtbm8tcmVzdWx0cy1tZXNzYWdlJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0FjdGl2aXR5VGFibGVOb1Jlc3VsdHNNZXNzYWdlIHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tYWN0aXZpdHktdGFibGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZGVidWdcIj5cbiAgICAgICAgICAgIDxwPlRvdGFsOiB7eyBkYXRhU291cmNlPy50b3RhbCB9fTwvcD5cbiAgICAgICAgICAgIDxwPkN1cnJlbnQ6IHt7IGRhdGFTb3VyY2U/LmN1cnJlbnQgfX08L3A+XG4gICAgICAgICAgICA8cD5Ub3RhbGx5IEVtcHR5OiB7eyBkYXRhU291cmNlPy50b3RhbGx5RW1wdHkgfX08L3A+XG4gICAgICAgICAgICA8cD5DdXJyZW50bHkgRW1wdHk6IHt7IGRhdGFTb3VyY2U/LmN1cnJlbnRseUVtcHR5IH19PC9wPlxuICAgICAgICAgICAgPHA+TG9hZGluZyAoRGF0YVNvdXJjZSk6IHt7IGRhdGFTb3VyY2U/LmxvYWRpbmcgfX08L3A+XG4gICAgICAgICAgICA8cD5Vc2VyIEZpbHRlcmVkOiB7eyBzdGF0ZS51c2VyRmlsdGVyZWQgfX08L3A+XG4gICAgICAgICAgICA8cD5Mb2FkaW5nIChUYWJsZSk6IHt7IGxvYWRpbmcgfX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aGVhZGVyICpuZ0lmPVwiKCEoZGF0YVNvdXJjZT8udG90YWxseUVtcHR5ICYmICFzdGF0ZS51c2VyRmlsdGVyZWQpICYmICFsb2FkaW5nKSB8fCBmb3JjZVNob3dIZWFkZXJcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltub3ZvLWFjdGl2aXR5LXRhYmxlLWN1c3RvbS1oZWFkZXJdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPG5vdm8tc2VhcmNoXG4gICAgICAgICAgICAgICAgYWx3YXlzT3Blbj1cInRydWVcIlxuICAgICAgICAgICAgICAgIChzZWFyY2hDaGFuZ2VkKT1cIm9uU2VhcmNoQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic3RhdGUuZ2xvYmFsU2VhcmNoXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIiFoaWRlR2xvYmFsU2VhcmNoXCJcbiAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwic2VhcmNoT3B0aW9ucz8ucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgIFtoaW50XT1cInNlYXJjaE9wdGlvbnM/LnRvb2x0aXBcIj5cbiAgICAgICAgICAgIDwvbm92by1zZWFyY2g+XG4gICAgICAgICAgICA8bm92by1zaW1wbGUtdGFibGUtcGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICpuZ0lmPVwicGFnaW5hdGlvbk9wdGlvbnNcIlxuICAgICAgICAgICAgICAgIFtsZW5ndGhdPVwiZGF0YVNvdXJjZT8udG90YWxcIlxuICAgICAgICAgICAgICAgIFtwYWdlXT1cInBhZ2luYXRpb25PcHRpb25zLnBhZ2VcIlxuICAgICAgICAgICAgICAgIFtwYWdlU2l6ZV09XCJwYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZVwiXG4gICAgICAgICAgICAgICAgW3BhZ2VTaXplT3B0aW9uc109XCJwYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZU9wdGlvbnNcIj5cbiAgICAgICAgICAgIDwvbm92by1zaW1wbGUtdGFibGUtcGFnaW5hdGlvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbm92by1hY3Rpdml0eS10YWJsZS1hY3Rpb25zXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtbG9hZGluZy1tYXNrXCIgKm5nSWY9XCJkYXRhU291cmNlPy5sb2FkaW5nIHx8IGxvYWRpbmdcIiBkYXRhLWF1dG9tYXRpb24taWQ9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLWxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxub3ZvLWxvYWRpbmc+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1hY3Rpdml0eS10YWJsZS1maWx0ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1hY3Rpdml0eS10YWJsZS1jdXN0b20tZmlsdGVyXCIgKm5nSWY9XCJjdXN0b21GaWx0ZXJcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbm92by1hY3Rpdml0eS10YWJsZS1jdXN0b20tZmlsdGVyXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPG5vdm8tc2ltcGxlLXRhYmxlICpuZ0lmPVwiKGNvbHVtbnM/Lmxlbmd0aCA+IDApXCIgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIG5vdm9Tb3J0RmlsdGVyIG5vdm9TZWxlY3Rpb24gW2NsYXNzLmVtcHR5XT1cImRhdGFTb3VyY2U/LmN1cnJlbnRseUVtcHR5ICYmIHN0YXRlLnVzZXJGaWx0ZXJlZFwiIFtoaWRkZW5dPVwiZGF0YVNvdXJjZT8udG90YWxseUVtcHR5ICYmICFzdGF0ZS51c2VyRmlsdGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIG5vdm9TaW1wbGVDb2x1bW5EZWY9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLXNpbXBsZS1jaGVja2JveC1oZWFkZXItY2VsbCAqbm92b1NpbXBsZUhlYWRlckNlbGxEZWY+PC9ub3ZvLXNpbXBsZS1jaGVja2JveC1oZWFkZXItY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLXNpbXBsZS1jaGVja2JveC1jZWxsICpub3ZvU2ltcGxlQ2VsbERlZj1cImxldCByb3c7IGxldCBpID0gaW5kZXhcIiBbcm93XT1cInJvd1wiIFtpbmRleF09XCJpXCI+PC9ub3ZvLXNpbXBsZS1jaGVja2JveC1jZWxsPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGFjdGlvbkNvbHVtbnNcIiBbbm92b1NpbXBsZUNvbHVtbkRlZl09XCJjb2x1bW4uaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLXNpbXBsZS1lbXB0eS1oZWFkZXItY2VsbCBbY2xhc3MuYnV0dG9uLWhlYWRlci1jZWxsXT1cIiFjb2x1bW4ub3B0aW9uc1wiIFtjbGFzcy5kcm9wZG93bi1oZWFkZXItY2VsbF09XCJjb2x1bW4ub3B0aW9uc1wiICpub3ZvU2ltcGxlSGVhZGVyQ2VsbERlZj48L25vdm8tc2ltcGxlLWVtcHR5LWhlYWRlci1jZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tc2ltcGxlLWFjdGlvbi1jZWxsICpub3ZvU2ltcGxlQ2VsbERlZj1cImxldCByb3c7IGxldCBpID0gaW5kZXhcIiBbcm93XT1cInJvd1wiIFtjb2x1bW5dPVwiY29sdW1uXCI+PC9ub3ZvLXNpbXBsZS1hY3Rpb24tY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW25vdm9TaW1wbGVDb2x1bW5EZWZdPVwiY29sdW1uLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bm92by1zaW1wbGUtaGVhZGVyLWNlbGwgKm5vdm9TaW1wbGVIZWFkZXJDZWxsRGVmIFtjb2x1bW5dPVwiY29sdW1uXCIgW25vdm8tc2ltcGxlLWNlbGwtY29uZmlnXT1cImNvbHVtbi5jb25maWdcIiBbZGVmYXVsdFNvcnRdPVwiZGVmYXVsdFNvcnRcIj57eyBjb2x1bW4ubGFiZWwgfX08L25vdm8tc2ltcGxlLWhlYWRlci1jZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tc2ltcGxlLWNlbGwgKm5vdm9TaW1wbGVDZWxsRGVmPVwibGV0IHJvd1wiIFtjb2x1bW5dPVwiY29sdW1uXCIgW3Jvd109XCJyb3dcIj48L25vdm8tc2ltcGxlLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bm92by1zaW1wbGUtaGVhZGVyLXJvdyAqbm92b1NpbXBsZUhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L25vdm8tc2ltcGxlLWhlYWRlci1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLXNpbXBsZS1yb3cgKm5vdm9TaW1wbGVSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvbm92by1zaW1wbGUtcm93PlxuICAgICAgICAgICAgICAgIDwvbm92by1zaW1wbGUtdGFibGU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtbm8tcmVzdWx0cy1jb250YWluZXJcIiAqbmdJZj1cImRhdGFTb3VyY2U/LmN1cnJlbnRseUVtcHR5ICYmIHN0YXRlLnVzZXJGaWx0ZXJlZCAmJiAhZGF0YVNvdXJjZT8ubG9hZGluZyAmJiAhbG9hZGluZyAmJiAhZGF0YVNvdXJjZS5wcmlzdGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICNmaWx0ZXJlZD48bmctY29udGVudCBzZWxlY3Q9XCJbbm92by1hY3Rpdml0eS10YWJsZS1uby1yZXN1bHRzLW1lc3NhZ2VdXCI+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1hY3Rpdml0eS10YWJsZS1lbXB0eS1tZXNzYWdlXCIgKm5nSWY9XCJmaWx0ZXJlZC5jaGlsZE5vZGVzLmxlbmd0aCA9PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PGkgY2xhc3M9XCJiaGktc2VhcmNoLXF1ZXN0aW9uXCI+PC9pPiB7eyBsYWJlbHMubm9NYXRjaGluZ1JlY29yZHNNZXNzYWdlIH19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtZW1wdHktY29udGFpbmVyXCIgKm5nSWY9XCJkYXRhU291cmNlPy50b3RhbGx5RW1wdHkgJiYgIWRhdGFTb3VyY2U/LmxvYWRpbmcgJiYgIWxvYWRpbmcgJiYgIXN0YXRlLnVzZXJGaWx0ZXJlZCAmJiAhZGF0YVNvdXJjZS5wcmlzdGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICNlbXB0eT48bmctY29udGVudCBzZWxlY3Q9XCJbbm92by1hY3Rpdml0eS10YWJsZS1lbXB0eS1tZXNzYWdlXVwiPjwvbmctY29udGVudD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtZW1wdHktbWVzc2FnZVwiICpuZ0lmPVwiZW1wdHkuY2hpbGROb2Rlcy5sZW5ndGggPT0gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpIGNsYXNzPVwiYmhpLXNlYXJjaC1xdWVzdGlvblwiPjwvaT4ge3sgbGFiZWxzLmVtcHR5VGFibGVNZXNzYWdlIH19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW05vdm9BY3Rpdml0eVRhYmxlU3RhdGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWN0aXZpdHlUYWJsZTxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5nbG9iYWwtc2VhcmNoLWhpZGRlbicpXG4gIGdsb2JhbFNlYXJjaEhpZGRlbkNsYXNzVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgYWN0aXZpdHlTZXJ2aWNlOiBBY3Rpdml0eVRhYmxlU2VydmljZTxUPjtcbiAgQElucHV0KClcbiAgY29sdW1uczogU2ltcGxlVGFibGVDb2x1bW48VD5bXTtcbiAgQElucHV0KClcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW107XG4gIEBJbnB1dCgpXG4gIGFjdGlvbkNvbHVtbnM6IFNpbXBsZVRhYmxlQWN0aW9uQ29sdW1uPFQ+W107XG4gIEBJbnB1dCgpXG4gIHBhZ2luYXRpb25PcHRpb25zOiBTaW1wbGVUYWJsZVBhZ2luYXRpb25PcHRpb25zO1xuICBASW5wdXQoKVxuICBzZWFyY2hPcHRpb25zOiBTaW1wbGVUYWJsZVNlYXJjaE9wdGlvbnM7XG4gIEBJbnB1dCgpXG4gIGRlZmF1bHRTb3J0OiB7IGlkOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfTtcbiAgQElucHV0KClcbiAgb3V0c2lkZUZpbHRlcjogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgQElucHV0KClcbiAgc2V0IGN1c3RvbUZpbHRlcih2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fY3VzdG9tRmlsdGVyID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBjdXN0b21GaWx0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUZpbHRlcjtcbiAgfVxuICBwcml2YXRlIF9jdXN0b21GaWx0ZXI6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGZvcmNlU2hvd0hlYWRlcih2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZm9yY2VTaG93SGVhZGVyID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBmb3JjZVNob3dIZWFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvcmNlU2hvd0hlYWRlcjtcbiAgfVxuICBwcml2YXRlIF9mb3JjZVNob3dIZWFkZXI6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGhpZGVHbG9iYWxTZWFyY2godjogYm9vbGVhbikge1xuICAgIHRoaXMuX2hpZGVHbG9iYWxTZWFyY2ggPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gICAgdGhpcy5nbG9iYWxTZWFyY2hIaWRkZW5DbGFzc1RvZ2dsZSA9IHRoaXMuX2hpZGVHbG9iYWxTZWFyY2g7XG4gIH1cbiAgZ2V0IGhpZGVHbG9iYWxTZWFyY2goKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGVHbG9iYWxTZWFyY2g7XG4gIH1cbiAgcHJpdmF0ZSBfaGlkZUdsb2JhbFNlYXJjaDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzZXQgZGVidWcodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2RlYnVnID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBkZWJ1ZygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVidWc7XG4gIH1cbiAgcHJpdmF0ZSBfZGVidWc6IGJvb2xlYW47XG5cbiAgcHVibGljIGRhdGFTb3VyY2U6IEFjdGl2aXR5VGFibGVEYXRhU291cmNlPFQ+O1xuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHJpdmF0ZSBvdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5lbXB0eScpXG4gIGdldCBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlICYmIHRoaXMuZGF0YVNvdXJjZS50b3RhbGx5RW1wdHk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxvYWRpbmcnKVxuICBnZXQgbG9hZGluZ0NsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWRpbmcgfHwgKHRoaXMuZGF0YVNvdXJjZSAmJiB0aGlzLmRhdGFTb3VyY2UubG9hZGluZyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBzdGF0ZTogTm92b0FjdGl2aXR5VGFibGVTdGF0ZSkge1xuICAgIG5vdGlmeSgnW0RlcHJlY2F0ZWRdOiBUaGUgc2ltcGxlIHRhYmxlIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSBtaWdyYXRlIHRvIG5vdm8tZGF0YS10YWJsZXMhJyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyA9IGNoYW5nZXNbJ2FjdGl2aXR5U2VydmljZSddICYmICFjaGFuZ2VzWydhY3Rpdml0eVNlcnZpY2UnXS5jdXJyZW50VmFsdWU7XG4gICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIGlmIChjaGFuZ2VzWydhY3Rpdml0eVNlcnZpY2UnXSAmJiBjaGFuZ2VzWydhY3Rpdml0eVNlcnZpY2UnXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IEFjdGl2aXR5VGFibGVEYXRhU291cmNlPFQ+KHRoaXMuYWN0aXZpdHlTZXJ2aWNlLCB0aGlzLnN0YXRlLCB0aGlzLnJlZik7XG4gICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydvdXRzaWRlRmlsdGVyJ10gJiYgY2hhbmdlc1snb3V0c2lkZUZpbHRlciddLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgaWYgKCF0aGlzLm91dHNpZGVGaWx0ZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uID0gdGhpcy5vdXRzaWRlRmlsdGVyLnN1YnNjcmliZSgoZmlsdGVyOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLnN0YXRlLm91dHNpZGVGaWx0ZXIgPSBmaWx0ZXI7XG4gICAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBnbG9iYWxTZWFyY2g6IHRoaXMuc3RhdGUuZ2xvYmFsU2VhcmNoLCBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSk7XG4gICAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdXRzaWRlRmlsdGVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm91dHNpZGVGaWx0ZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhZ2luYXRpb25PcHRpb25zICYmICF0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2UpIHtcbiAgICAgIHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZSA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2luYXRpb25PcHRpb25zICYmICF0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplKSB7XG4gICAgICB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplID0gNTA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2luYXRpb25PcHRpb25zICYmICF0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplT3B0aW9ucykge1xuICAgICAgdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDI1LCA1MCwgMTAwXTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5wYWdlID0gdGhpcy5wYWdpbmF0aW9uT3B0aW9ucyA/IHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0YXRlLnBhZ2VTaXplID0gdGhpcy5wYWdpbmF0aW9uT3B0aW9ucyA/IHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemUgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgb25TZWFyY2hDaGFuZ2UodGVybTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZS5nbG9iYWxTZWFyY2ggPSB0ZXJtO1xuICAgIHRoaXMuc3RhdGUucmVzZXQoZmFsc2UsIHRydWUpO1xuICAgIHRoaXMuc3RhdGUudXBkYXRlcy5uZXh0KHsgZ2xvYmFsU2VhcmNoOiB0ZXJtLCBmaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyLCBzb3J0OiB0aGlzLnN0YXRlLnNvcnQgfSk7XG4gIH1cbn1cbiJdfQ==