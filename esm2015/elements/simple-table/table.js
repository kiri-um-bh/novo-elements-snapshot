/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export const _NovoTable = CdkTable;
/**
 * @template T
 */
export class NovoTable extends _NovoTable {
}
NovoTable.decorators = [
    { type: Component, args: [{
                selector: 'novo-simple-table',
                template: CDK_TABLE_TEMPLATE,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
export class NovoActivityTableActions {
}
NovoActivityTableActions.decorators = [
    { type: Directive, args: [{
                selector: 'novo-activity-table-actions',
            },] }
];
export class NovoActivityTableCustomHeader {
}
NovoActivityTableCustomHeader.decorators = [
    { type: Directive, args: [{
                selector: 'novo-activity-table-custom-header',
            },] }
];
export class NovoActivityTableCustomFilter {
}
NovoActivityTableCustomFilter.decorators = [
    { type: Directive, args: [{
                selector: 'novo-activity-table-custom-filter',
            },] }
];
export class NovoActivityTableEmptyMessage {
}
NovoActivityTableEmptyMessage.decorators = [
    { type: Directive, args: [{
                selector: 'novo-activity-table-empty-message',
            },] }
];
export class NovoActivityTableNoResultsMessage {
}
NovoActivityTableNoResultsMessage.decorators = [
    { type: Directive, args: [{
                selector: 'novo-activity-table-no-results-message',
            },] }
];
/**
 * @template T
 */
export class NovoActivityTable {
    /**
     * @param {?} labels
     * @param {?} ref
     * @param {?} state
     */
    constructor(labels, ref, state) {
        this.labels = labels;
        this.ref = ref;
        this.state = state;
        this.globalSearchHiddenClassToggle = false;
        this.loading = true;
        notify('[Deprecated]: The simple table is deprecated. Please migrate to novo-data-tables!');
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set customFilter(v) {
        this._customFilter = coerceBooleanProperty(v);
    }
    /**
     * @return {?}
     */
    get customFilter() {
        return this._customFilter;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set forceShowHeader(v) {
        this._forceShowHeader = coerceBooleanProperty(v);
    }
    /**
     * @return {?}
     */
    get forceShowHeader() {
        return this._forceShowHeader;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set hideGlobalSearch(v) {
        this._hideGlobalSearch = coerceBooleanProperty(v);
        this.globalSearchHiddenClassToggle = this._hideGlobalSearch;
    }
    /**
     * @return {?}
     */
    get hideGlobalSearch() {
        return this._hideGlobalSearch;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set debug(v) {
        this._debug = coerceBooleanProperty(v);
    }
    /**
     * @return {?}
     */
    get debug() {
        return this._debug;
    }
    /**
     * @return {?}
     */
    get empty() {
        return this.dataSource && this.dataSource.totallyEmpty;
    }
    /**
     * @return {?}
     */
    get loadingClass() {
        return this.loading || (this.dataSource && this.dataSource.loading);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
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
                this.outsideFilterSubscription = this.outsideFilter.subscribe((/**
                 * @param {?} filter
                 * @return {?}
                 */
                (filter) => {
                    this.state.outsideFilter = filter;
                    this.state.updates.next({ globalSearch: this.state.globalSearch, filter: this.state.filter, sort: this.state.sort });
                    this.ref.markForCheck();
                }));
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.outsideFilterSubscription) {
            this.outsideFilterSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
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
    /**
     * @param {?} term
     * @return {?}
     */
    onSearchChange(term) {
        this.state.globalSearch = term;
        this.state.reset(false, true);
        this.state.updates.next({ globalSearch: term, filter: this.state.filter, sort: this.state.sort });
    }
}
NovoActivityTable.decorators = [
    { type: Component, args: [{
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
                providers: [NovoActivityTableState]
            }] }
];
/** @nocollapse */
NovoActivityTable.ctorParameters = () => [
    { type: NovoLabelService },
    { type: ChangeDetectorRef },
    { type: NovoActivityTableState }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvc2ltcGxlLXRhYmxlL3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUdaLGlCQUFpQixHQUdsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJOUQsT0FBTyxFQUF3Qix1QkFBdUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7O0FBRzVELE1BQU0sT0FBTyxVQUFVLEdBQUcsUUFBUTs7OztBQVFsQyxNQUFNLE9BQU8sU0FBYSxTQUFRLFVBQWE7OztZQU45QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztBQU1ELE1BQU0sT0FBTyx3QkFBd0I7OztZQUhwQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjthQUN4Qzs7QUFNRCxNQUFNLE9BQU8sNkJBQTZCOzs7WUFIekMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7YUFDOUM7O0FBTUQsTUFBTSxPQUFPLDZC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QjtZQVZ2QixpQkFBaUI7WUFXVixzQkFBc0I7Ozs0Q0FvSDVCLFdBQVcsU0FBQyw0QkFBNEI7OEJBR3hDLEtBQUs7c0JBRUwsS0FBSzsrQkFFTCxLQUFLOzRCQUVMLEtBQUs7Z0NBRUwsS0FBSzs0QkFFTCxLQUFLOzBCQUVMLEtBQUs7NEJBRUwsS0FBSzsyQkFHTCxLQUFLOzhCQVNMLEtBQUs7K0JBU0wsS0FBSztvQkFVTCxLQUFLO29CQWNMLFdBQVcsU0FBQyxhQUFhOzJCQUt6QixXQUFXLFNBQUMsZUFBZTs7OztJQW5FNUIsMERBQytDOztJQUUvQyw0Q0FDeUM7O0lBQ3pDLG9DQUNnQzs7SUFDaEMsNkNBQzJCOztJQUMzQiwwQ0FDNEM7O0lBQzVDLDhDQUNnRDs7SUFDaEQsMENBQ3dDOztJQUN4Qyx3Q0FDMkM7O0lBQzNDLDBDQUNpQzs7Ozs7SUFTakMsMENBQStCOzs7OztJQVMvQiw2Q0FBa0M7Ozs7O0lBVWxDLDhDQUFtQzs7Ozs7SUFTbkMsbUNBQXdCOztJQUV4Qix1Q0FBOEM7O0lBQzlDLG9DQUErQjs7Ozs7SUFFL0Isc0RBQWdEOztJQVlwQyxtQ0FBK0I7Ozs7O0lBQUUsZ0NBQThCOztJQUFFLGtDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ0RLX1RBQkxFX1RFTVBMQVRFLCBDZGtUYWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNpbXBsZVRhYmxlQ29sdW1uLCBTaW1wbGVUYWJsZUFjdGlvbkNvbHVtbiwgU2ltcGxlVGFibGVQYWdpbmF0aW9uT3B0aW9ucywgU2ltcGxlVGFibGVTZWFyY2hPcHRpb25zIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFjdGl2aXR5VGFibGVTZXJ2aWNlLCBBY3Rpdml0eVRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJy4vdGFibGUtc291cmNlJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b0FjdGl2aXR5VGFibGVTdGF0ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG5cbi8qKiBXb3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNzg0OSAqL1xuZXhwb3J0IGNvbnN0IF9Ob3ZvVGFibGUgPSBDZGtUYWJsZTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zaW1wbGUtdGFibGUnLFxuICB0ZW1wbGF0ZTogQ0RLX1RBQkxFX1RFTVBMQVRFLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYmxlPFQ+IGV4dGVuZHMgX05vdm9UYWJsZTxUPiB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLWFjdGl2aXR5LXRhYmxlLWFjdGlvbnMnLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWN0aXZpdHlUYWJsZUFjdGlvbnMge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbm92by1hY3Rpdml0eS10YWJsZS1jdXN0b20taGVhZGVyJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0FjdGl2aXR5VGFibGVDdXN0b21IZWFkZXIge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbm92by1hY3Rpdml0eS10YWJsZS1jdXN0b20tZmlsdGVyJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0FjdGl2aXR5VGFibGVDdXN0b21GaWx0ZXIge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbm92by1hY3Rpdml0eS10YWJsZS1lbXB0eS1tZXNzYWdlJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0FjdGl2aXR5VGFibGVFbXB0eU1lc3NhZ2Uge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbm92by1hY3Rpdml0eS10YWJsZS1uby1yZXN1bHRzLW1lc3NhZ2UnLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQWN0aXZpdHlUYWJsZU5vUmVzdWx0c01lc3NhZ2Uge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1hY3Rpdml0eS10YWJsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgKm5nSWY9XCJkZWJ1Z1wiPlxuICAgICAgICAgICAgPHA+VG90YWw6IHt7IGRhdGFTb3VyY2U/LnRvdGFsIH19PC9wPlxuICAgICAgICAgICAgPHA+Q3VycmVudDoge3sgZGF0YVNvdXJjZT8uY3VycmVudCB9fTwvcD5cbiAgICAgICAgICAgIDxwPlRvdGFsbHkgRW1wdHk6IHt7IGRhdGFTb3VyY2U/LnRvdGFsbHlFbXB0eSB9fTwvcD5cbiAgICAgICAgICAgIDxwPkN1cnJlbnRseSBFbXB0eToge3sgZGF0YVNvdXJjZT8uY3VycmVudGx5RW1wdHkgfX08L3A+XG4gICAgICAgICAgICA8cD5Mb2FkaW5nIChEYXRhU291cmNlKToge3sgZGF0YVNvdXJjZT8ubG9hZGluZyB9fTwvcD5cbiAgICAgICAgICAgIDxwPlVzZXIgRmlsdGVyZWQ6IHt7IHN0YXRlLnVzZXJGaWx0ZXJlZCB9fTwvcD5cbiAgICAgICAgICAgIDxwPkxvYWRpbmcgKFRhYmxlKToge3sgbG9hZGluZyB9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoZWFkZXIgKm5nSWY9XCIoIShkYXRhU291cmNlPy50b3RhbGx5RW1wdHkgJiYgIXN0YXRlLnVzZXJGaWx0ZXJlZCkgJiYgIWxvYWRpbmcpIHx8IGZvcmNlU2hvd0hlYWRlclwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW25vdm8tYWN0aXZpdHktdGFibGUtY3VzdG9tLWhlYWRlcl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8bm92by1zZWFyY2hcbiAgICAgICAgICAgICAgICBhbHdheXNPcGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgKHNlYXJjaENoYW5nZWQpPVwib25TZWFyY2hDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzdGF0ZS5nbG9iYWxTZWFyY2hcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiIWhpZGVHbG9iYWxTZWFyY2hcIlxuICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJzZWFyY2hPcHRpb25zPy5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgW2hpbnRdPVwic2VhcmNoT3B0aW9ucz8udG9vbHRpcFwiPlxuICAgICAgICAgICAgPC9ub3ZvLXNlYXJjaD5cbiAgICAgICAgICAgIDxub3ZvLXNpbXBsZS10YWJsZS1wYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJwYWdpbmF0aW9uT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgW2xlbmd0aF09XCJkYXRhU291cmNlPy50b3RhbFwiXG4gICAgICAgICAgICAgICAgW3BhZ2VdPVwicGFnaW5hdGlvbk9wdGlvbnMucGFnZVwiXG4gICAgICAgICAgICAgICAgW3BhZ2VTaXplXT1cInBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplXCJcbiAgICAgICAgICAgICAgICBbcGFnZVNpemVPcHRpb25zXT1cInBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplT3B0aW9uc1wiPlxuICAgICAgICAgICAgPC9ub3ZvLXNpbXBsZS10YWJsZS1wYWdpbmF0aW9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tYWN0aXZpdHktdGFibGUtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltub3ZvLWFjdGl2aXR5LXRhYmxlLWFjdGlvbnNdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1hY3Rpdml0eS10YWJsZS1sb2FkaW5nLW1hc2tcIiAqbmdJZj1cImRhdGFTb3VyY2U/LmxvYWRpbmcgfHwgbG9hZGluZ1wiIGRhdGEtYXV0b21hdGlvbi1pZD1cIm5vdm8tYWN0aXZpdHktdGFibGUtbG9hZGluZ1wiPlxuICAgICAgICAgICAgPG5vdm8tbG9hZGluZz48L25vdm8tbG9hZGluZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLWZpbHRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLWN1c3RvbS1maWx0ZXJcIiAqbmdJZj1cImN1c3RvbUZpbHRlclwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltub3ZvLWFjdGl2aXR5LXRhYmxlLWN1c3RvbS1maWx0ZXJdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1hY3Rpdml0eS10YWJsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8bm92by1zaW1wbGUtdGFibGUgKm5nSWY9XCIoY29sdW1ucz8ubGVuZ3RoID4gMClcIiBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgbm92b1NvcnRGaWx0ZXIgbm92b1NlbGVjdGlvbiBbY2xhc3MuZW1wdHldPVwiZGF0YVNvdXJjZT8uY3VycmVudGx5RW1wdHkgJiYgc3RhdGUudXNlckZpbHRlcmVkXCIgW2hpZGRlbl09XCJkYXRhU291cmNlPy50b3RhbGx5RW1wdHkgJiYgIXN0YXRlLnVzZXJGaWx0ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgbm92b1NpbXBsZUNvbHVtbkRlZj1cInNlbGVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tc2ltcGxlLWNoZWNrYm94LWhlYWRlci1jZWxsICpub3ZvU2ltcGxlSGVhZGVyQ2VsbERlZj48L25vdm8tc2ltcGxlLWNoZWNrYm94LWhlYWRlci1jZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tc2ltcGxlLWNoZWNrYm94LWNlbGwgKm5vdm9TaW1wbGVDZWxsRGVmPVwibGV0IHJvdzsgbGV0IGkgPSBpbmRleFwiIFtyb3ddPVwicm93XCIgW2luZGV4XT1cImlcIj48L25vdm8tc2ltcGxlLWNoZWNrYm94LWNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgYWN0aW9uQ29sdW1uc1wiIFtub3ZvU2ltcGxlQ29sdW1uRGVmXT1cImNvbHVtbi5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tc2ltcGxlLWVtcHR5LWhlYWRlci1jZWxsIFtjbGFzcy5idXR0b24taGVhZGVyLWNlbGxdPVwiIWNvbHVtbi5vcHRpb25zXCIgW2NsYXNzLmRyb3Bkb3duLWhlYWRlci1jZWxsXT1cImNvbHVtbi5vcHRpb25zXCIgKm5vdm9TaW1wbGVIZWFkZXJDZWxsRGVmPjwvbm92by1zaW1wbGUtZW1wdHktaGVhZGVyLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bm92by1zaW1wbGUtYWN0aW9uLWNlbGwgKm5vdm9TaW1wbGVDZWxsRGVmPVwibGV0IHJvdzsgbGV0IGkgPSBpbmRleFwiIFtyb3ddPVwicm93XCIgW2NvbHVtbl09XCJjb2x1bW5cIj48L25vdm8tc2ltcGxlLWFjdGlvbi1jZWxsPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNcIiBbbm92b1NpbXBsZUNvbHVtbkRlZl09XCJjb2x1bW4uaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLXNpbXBsZS1oZWFkZXItY2VsbCAqbm92b1NpbXBsZUhlYWRlckNlbGxEZWYgW2NvbHVtbl09XCJjb2x1bW5cIiBbbm92by1zaW1wbGUtY2VsbC1jb25maWddPVwiY29sdW1uLmNvbmZpZ1wiIFtkZWZhdWx0U29ydF09XCJkZWZhdWx0U29ydFwiPnt7IGNvbHVtbi5sYWJlbCB9fTwvbm92by1zaW1wbGUtaGVhZGVyLWNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bm92by1zaW1wbGUtY2VsbCAqbm92b1NpbXBsZUNlbGxEZWY9XCJsZXQgcm93XCIgW2NvbHVtbl09XCJjb2x1bW5cIiBbcm93XT1cInJvd1wiPjwvbm92by1zaW1wbGUtY2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLXNpbXBsZS1oZWFkZXItcm93ICpub3ZvU2ltcGxlSGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvbm92by1zaW1wbGUtaGVhZGVyLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPG5vdm8tc2ltcGxlLXJvdyAqbm92b1NpbXBsZVJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC9ub3ZvLXNpbXBsZS1yb3c+XG4gICAgICAgICAgICAgICAgPC9ub3ZvLXNpbXBsZS10YWJsZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1hY3Rpdml0eS10YWJsZS1uby1yZXN1bHRzLWNvbnRhaW5lclwiICpuZ0lmPVwiZGF0YVNvdXJjZT8uY3VycmVudGx5RW1wdHkgJiYgc3RhdGUudXNlckZpbHRlcmVkICYmICFkYXRhU291cmNlPy5sb2FkaW5nICYmICFsb2FkaW5nICYmICFkYXRhU291cmNlLnByaXN0aW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgI2ZpbHRlcmVkPjxuZy1jb250ZW50IHNlbGVjdD1cIltub3ZvLWFjdGl2aXR5LXRhYmxlLW5vLXJlc3VsdHMtbWVzc2FnZV1cIj48L25nLWNvbnRlbnQ+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWFjdGl2aXR5LXRhYmxlLWVtcHR5LW1lc3NhZ2VcIiAqbmdJZj1cImZpbHRlcmVkLmNoaWxkTm9kZXMubGVuZ3RoID09IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND48aSBjbGFzcz1cImJoaS1zZWFyY2gtcXVlc3Rpb25cIj48L2k+IHt7IGxhYmVscy5ub01hdGNoaW5nUmVjb3Jkc01lc3NhZ2UgfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1hY3Rpdml0eS10YWJsZS1lbXB0eS1jb250YWluZXJcIiAqbmdJZj1cImRhdGFTb3VyY2U/LnRvdGFsbHlFbXB0eSAmJiAhZGF0YVNvdXJjZT8ubG9hZGluZyAmJiAhbG9hZGluZyAmJiAhc3RhdGUudXNlckZpbHRlcmVkICYmICFkYXRhU291cmNlLnByaXN0aW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgI2VtcHR5PjxuZy1jb250ZW50IHNlbGVjdD1cIltub3ZvLWFjdGl2aXR5LXRhYmxlLWVtcHR5LW1lc3NhZ2VdXCI+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1hY3Rpdml0eS10YWJsZS1lbXB0eS1tZXNzYWdlXCIgKm5nSWY9XCJlbXB0eS5jaGlsZE5vZGVzLmxlbmd0aCA9PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PGkgY2xhc3M9XCJiaGktc2VhcmNoLXF1ZXN0aW9uXCI+PC9pPiB7eyBsYWJlbHMuZW1wdHlUYWJsZU1lc3NhZ2UgfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbTm92b0FjdGl2aXR5VGFibGVTdGF0ZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9BY3Rpdml0eVRhYmxlPFQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmdsb2JhbC1zZWFyY2gtaGlkZGVuJylcbiAgZ2xvYmFsU2VhcmNoSGlkZGVuQ2xhc3NUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBhY3Rpdml0eVNlcnZpY2U6IEFjdGl2aXR5VGFibGVTZXJ2aWNlPFQ+O1xuICBASW5wdXQoKVxuICBjb2x1bW5zOiBTaW1wbGVUYWJsZUNvbHVtbjxUPltdO1xuICBASW5wdXQoKVxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXTtcbiAgQElucHV0KClcbiAgYWN0aW9uQ29sdW1uczogU2ltcGxlVGFibGVBY3Rpb25Db2x1bW48VD5bXTtcbiAgQElucHV0KClcbiAgcGFnaW5hdGlvbk9wdGlvbnM6IFNpbXBsZVRhYmxlUGFnaW5hdGlvbk9wdGlvbnM7XG4gIEBJbnB1dCgpXG4gIHNlYXJjaE9wdGlvbnM6IFNpbXBsZVRhYmxlU2VhcmNoT3B0aW9ucztcbiAgQElucHV0KClcbiAgZGVmYXVsdFNvcnQ6IHsgaWQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9O1xuICBASW5wdXQoKVxuICBvdXRzaWRlRmlsdGVyOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBASW5wdXQoKVxuICBzZXQgY3VzdG9tRmlsdGVyKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jdXN0b21GaWx0ZXIgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IGN1c3RvbUZpbHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tRmlsdGVyO1xuICB9XG4gIHByaXZhdGUgX2N1c3RvbUZpbHRlcjogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzZXQgZm9yY2VTaG93SGVhZGVyKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9mb3JjZVNob3dIZWFkZXIgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IGZvcmNlU2hvd0hlYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9yY2VTaG93SGVhZGVyO1xuICB9XG4gIHByaXZhdGUgX2ZvcmNlU2hvd0hlYWRlcjogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzZXQgaGlkZUdsb2JhbFNlYXJjaCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZUdsb2JhbFNlYXJjaCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgICB0aGlzLmdsb2JhbFNlYXJjaEhpZGRlbkNsYXNzVG9nZ2xlID0gdGhpcy5faGlkZUdsb2JhbFNlYXJjaDtcbiAgfVxuICBnZXQgaGlkZUdsb2JhbFNlYXJjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZUdsb2JhbFNlYXJjaDtcbiAgfVxuICBwcml2YXRlIF9oaWRlR2xvYmFsU2VhcmNoOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkZWJ1Zyh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGVidWcgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IGRlYnVnKCkge1xuICAgIHJldHVybiB0aGlzLl9kZWJ1ZztcbiAgfVxuICBwcml2YXRlIF9kZWJ1ZzogYm9vbGVhbjtcblxuICBwdWJsaWMgZGF0YVNvdXJjZTogQWN0aXZpdHlUYWJsZURhdGFTb3VyY2U8VD47XG4gIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcblxuICBwcml2YXRlIG91dHNpZGVGaWx0ZXJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmVtcHR5JylcbiAgZ2V0IGVtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UgJiYgdGhpcy5kYXRhU291cmNlLnRvdGFsbHlFbXB0eTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubG9hZGluZycpXG4gIGdldCBsb2FkaW5nQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZGluZyB8fCAodGhpcy5kYXRhU291cmNlICYmIHRoaXMuZGF0YVNvdXJjZS5sb2FkaW5nKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIHN0YXRlOiBOb3ZvQWN0aXZpdHlUYWJsZVN0YXRlKSB7XG4gICAgbm90aWZ5KCdbRGVwcmVjYXRlZF06IFRoZSBzaW1wbGUgdGFibGUgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIG1pZ3JhdGUgdG8gbm92by1kYXRhLXRhYmxlcyEnKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nID0gY2hhbmdlc1snYWN0aXZpdHlTZXJ2aWNlJ10gJiYgIWNoYW5nZXNbJ2FjdGl2aXR5U2VydmljZSddLmN1cnJlbnRWYWx1ZTtcbiAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgaWYgKGNoYW5nZXNbJ2FjdGl2aXR5U2VydmljZSddICYmIGNoYW5nZXNbJ2FjdGl2aXR5U2VydmljZSddLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgQWN0aXZpdHlUYWJsZURhdGFTb3VyY2U8VD4odGhpcy5hY3Rpdml0eVNlcnZpY2UsIHRoaXMuc3RhdGUsIHRoaXMucmVmKTtcbiAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ291dHNpZGVGaWx0ZXInXSAmJiBjaGFuZ2VzWydvdXRzaWRlRmlsdGVyJ10uY3VycmVudFZhbHVlKSB7XG4gICAgICBpZiAoIXRoaXMub3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLm91dHNpZGVGaWx0ZXJTdWJzY3JpcHRpb24gPSB0aGlzLm91dHNpZGVGaWx0ZXIuc3Vic2NyaWJlKChmaWx0ZXI6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RhdGUub3V0c2lkZUZpbHRlciA9IGZpbHRlcjtcbiAgICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZXMubmV4dCh7IGdsb2JhbFNlYXJjaDogdGhpcy5zdGF0ZS5nbG9iYWxTZWFyY2gsIGZpbHRlcjogdGhpcy5zdGF0ZS5maWx0ZXIsIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCB9KTtcbiAgICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm91dHNpZGVGaWx0ZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMub3V0c2lkZUZpbHRlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbk9wdGlvbnMgJiYgIXRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZSkge1xuICAgICAgdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbk9wdGlvbnMgJiYgIXRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemUpIHtcbiAgICAgIHRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemUgPSA1MDtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbk9wdGlvbnMgJiYgIXRoaXMucGFnaW5hdGlvbk9wdGlvbnMucGFnZVNpemVPcHRpb25zKSB7XG4gICAgICB0aGlzLnBhZ2luYXRpb25PcHRpb25zLnBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjUsIDUwLCAxMDBdO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlLnBhZ2UgPSB0aGlzLnBhZ2luYXRpb25PcHRpb25zID8gdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RhdGUucGFnZVNpemUgPSB0aGlzLnBhZ2luYXRpb25PcHRpb25zID8gdGhpcy5wYWdpbmF0aW9uT3B0aW9ucy5wYWdlU2l6ZSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBvblNlYXJjaENoYW5nZSh0ZXJtOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlLmdsb2JhbFNlYXJjaCA9IHRlcm07XG4gICAgdGhpcy5zdGF0ZS5yZXNldChmYWxzZSwgdHJ1ZSk7XG4gICAgdGhpcy5zdGF0ZS51cGRhdGVzLm5leHQoeyBnbG9iYWxTZWFyY2g6IHRlcm0sIGZpbHRlcjogdGhpcy5zdGF0ZS5maWx0ZXIsIHNvcnQ6IHRoaXMuc3RhdGUuc29ydCB9KTtcbiAgfVxufVxuIl19