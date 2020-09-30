/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
// APP
import { OutsideClick } from '../../utils/outside-click/OutsideClick';
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
export class NovoCategoryDropdownElement extends OutsideClick {
    /**
     * @param {?} element
     * @param {?} labels
     */
    constructor(element, labels) {
        super(element);
        this.labels = labels;
        this._query = '';
        this._categoryMap = {};
        this._categories = [];
        // Boolean to keep the selection persist when closing the dropdown
        this.persistSelection = false;
        // Boolean to close the dropdown on selection
        this.closeOnSelect = false;
        // Event that is emitted whenever an item is selected
        this._select = new EventEmitter();
        // Event that is emitted whenever a category is selected
        this.categorySelected = new EventEmitter();
        this.clickHandler = this.toggleActive.bind(this);
    }
    /**
     * @param {?} categories
     * @return {?}
     */
    set categories(categories) {
        this._masterCategoryMap = Object.assign({}, categories);
        this._categoryMap = Object.assign({}, categories);
        this._categories = Object.keys(categories);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let button = this.element.nativeElement.querySelector('button');
        button.addEventListener('click', this.clickHandler);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        let button = this.element.nativeElement.querySelector('button');
        if (button) {
            button.removeEventListener('click', this.clickHandler);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        if (this.active && (event.keyCode === KeyCodes.ESC || event.keyCode === KeyCodes.ENTER)) {
            this.toggleActive();
        }
    }
    /**
     * @return {?}
     */
    clearSelection() {
        this._categories.forEach((/**
         * @param {?} category
         * @return {?}
         */
        (category) => {
            this._categoryMap[category].forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                item.selected = false;
            }));
        }));
    }
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    select(event, item) {
        Helpers.swallowEvent(event);
        // If we persist the selection, clear and show a check
        if (this.persistSelection) {
            this.clearSelection();
            item.selected = true;
        }
        // Emit the item
        this._select.emit(item);
        // Close, if input is set
        if (this.closeOnSelect) {
            this.toggleActive();
        }
    }
    /**
     * @param {?} category
     * @return {?}
     */
    onCategorySelected(category) {
        this.categorySelected.emit(category);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clearQuery(event) {
        Helpers.swallowEvent(event);
        this._query = '';
        // Reset the categories
        this._categories.forEach((/**
         * @param {?} category
         * @return {?}
         */
        (category) => {
            this._categoryMap[category] = this._masterCategoryMap[category];
        }));
    }
    /**
     * @param {?} query
     * @return {?}
     */
    queryCategories(query) {
        // Save the query
        this._query = query;
        // Check timeout
        if (this._queryTimeout) {
            clearTimeout(this._queryTimeout);
        }
        // Store a timeout, to debounce user input
        this._queryTimeout = setTimeout((/**
         * @return {?}
         */
        () => {
            this._categories.forEach((/**
             * @param {?} category
             * @return {?}
             */
            (category) => {
                if (this.search.compare) {
                    this._categoryMap[category] = this._masterCategoryMap[category].filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    (item) => this.search.compare(query, item)));
                }
                else {
                    this._categoryMap[category] = this._masterCategoryMap[category].filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    (item) => ~item.label.toLowerCase().indexOf(query.toLowerCase())));
                }
            }));
        }), this.search.debounce || 300);
    }
    /**
     * @param {?} event
     * @param {?} link
     * @return {?}
     */
    executeClickCallback(event, link) {
        link.callback(event);
        // Close, if input is set
        if (this.closeOnSelect) {
            this.toggleActive();
        }
    }
}
NovoCategoryDropdownElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-category-dropdown',
                template: `
        <ng-content select="button"></ng-content>
        <div class="dropdown-container" *ngIf="active">
            <div class="novo-category-dropdown-search" *ngIf="search" data-automation-id="novo-category-dropdown-search">
                <input type="text" [placeholder]="search.placeholder || labels.search" [value]="_query" (input)="queryCategories($event.target.value)"/>
                <i class="bhi-search" *ngIf="!_query"></i>
                <i class="bhi-times" *ngIf="_query" (click)="clearQuery($event)"></i>
            </div>
            <novo-nav theme="white" [outlet]="novoCategoryDropdownOutlet" direction="vertical">
                <novo-tab *ngFor="let category of _categories" [attr.data-automation-id]="category" (activeChange)="onCategorySelected(category)">
                    <span>{{ category }} ({{ _categoryMap[category].length }})</span>
                </novo-tab>
            </novo-nav>
            <novo-nav-outlet #novoCategoryDropdownOutlet>
                <novo-nav-content *ngFor="let category of _categories">
                    <novo-list direction="vertical">
                        <novo-list-item *ngFor="let item of _categoryMap[category]" (click)="select($event, item)" [attr.data-automation-id]="item.label">
                            <item-content>{{ item.label }}</item-content>
                            <item-end class="novo-category-dropdown-hover" *ngIf="item.hoverText && !item.selected">{{ item.hoverText }}</item-end>
                            <item-end class="novo-category-dropdown-hover" *ngIf="item.hoverIcon && !item.selected"><i class="bhi-{{ item.hoverIcon }}"></i></item-end>
                            <item-end *ngIf="item.selected"><i class="bhi-check"></i></item-end>
                        </novo-list-item>
                        <novo-list-item *ngIf="_categoryMap[category].length === 0 && search" class="novo-category-dropdown-empty-item">
                            <item-content>{{ search.emptyMessage || labels.noItems }}</item-content>
                        </novo-list-item>
                    </novo-list>
                </novo-nav-content>
            </novo-nav-outlet>
            <footer *ngIf="footer" class="novo-category-dropdown-footer-align-{{ footer.align || 'right' }}">
                <a *ngFor="let link of footer.links" (click)="executeClickCallback($event, link)">{{ link.label }}</a>
            </footer>
        </div>
    `,
                host: {
                    '(keydown)': 'onKeyDown($event)',
                    '[class.active]': 'active',
                }
            }] }
];
/** @nocollapse */
NovoCategoryDropdownElement.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoLabelService }
];
NovoCategoryDropdownElement.propDecorators = {
    persistSelection: [{ type: Input }],
    closeOnSelect: [{ type: Input }],
    search: [{ type: Input }],
    footer: [{ type: Input }],
    _select: [{ type: Output, args: ['itemSelected',] }],
    categorySelected: [{ type: Output }],
    categories: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoCategoryDropdownElement.prototype._query;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype._categoryMap;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype._categories;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype.clickHandler;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype._masterCategoryMap;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype._queryTimeout;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype.persistSelection;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype.closeOnSelect;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype.search;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype.footer;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype._select;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype.categorySelected;
    /** @type {?} */
    NovoCategoryDropdownElement.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlEcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYXRlZ29yeS1kcm9wZG93bi9DYXRlZ29yeURyb3Bkb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztBQUV0RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQTBDckUsTUFBTSxPQUFPLDJCQUE0QixTQUFRLFlBQVk7Ozs7O0lBMkMzRCxZQUFZLE9BQW1CLEVBQVMsTUFBd0I7UUFDOUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRHVCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBMUNoRSxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQWEsRUFBRSxDQUFDOztRQU0zQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7O1FBR2xDLGtCQUFhLEdBQVksS0FBSyxDQUFDOztRQW1CL0IsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOztRQUdoRCxxQkFBZ0IsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQVc1RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBVkQsSUFDSSxVQUFVLENBQUMsVUFBZTtRQUM1QixJQUFJLENBQUMsa0JBQWtCLEdB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UUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdDUDtnQkFDSCxJQUFJLEVBQUU7b0JBQ0osV0FBVyxFQUFFLG1CQUFtQjtvQkFDaEMsZ0JBQWdCLEVBQUUsUUFBUTtpQkFDM0I7YUFDRjs7OztZQTlDbUIsVUFBVTtZQUtyQixnQkFBZ0I7OzsrQkFrRHRCLEtBQUs7NEJBR0wsS0FBSztxQkFTTCxLQUFLO3FCQU9MLEtBQUs7c0JBR0wsTUFBTSxTQUFDLGNBQWM7K0JBR3JCLE1BQU07eUJBR04sS0FBSzs7OztJQW5DTiw2Q0FBb0I7O0lBQ3BCLG1EQUF1Qjs7SUFDdkIsa0RBQTJCOztJQUMzQixtREFBdUI7O0lBQ3ZCLHlEQUF3Qjs7SUFDeEIsb0RBQW1COztJQUVuQix1REFDa0M7O0lBRWxDLG9EQUMrQjs7SUFRL0IsNkNBQ1k7O0lBTVosNkNBQ1k7O0lBRVosOENBQ2dEOztJQUVoRCx1REFDOEQ7O0lBUzdCLDZDQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE91dHNpZGVDbGljayB9IGZyb20gJy4uLy4uL3V0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhdGVnb3J5LWRyb3Bkb3duJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiYnV0dG9uXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGFpbmVyXCIgKm5nSWY9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNhdGVnb3J5LWRyb3Bkb3duLXNlYXJjaFwiICpuZ0lmPVwic2VhcmNoXCIgZGF0YS1hdXRvbWF0aW9uLWlkPVwibm92by1jYXRlZ29yeS1kcm9wZG93bi1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbcGxhY2Vob2xkZXJdPVwic2VhcmNoLnBsYWNlaG9sZGVyIHx8IGxhYmVscy5zZWFyY2hcIiBbdmFsdWVdPVwiX3F1ZXJ5XCIgKGlucHV0KT1cInF1ZXJ5Q2F0ZWdvcmllcygkZXZlbnQudGFyZ2V0LnZhbHVlKVwiLz5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1zZWFyY2hcIiAqbmdJZj1cIiFfcXVlcnlcIj48L2k+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktdGltZXNcIiAqbmdJZj1cIl9xdWVyeVwiIChjbGljayk9XCJjbGVhclF1ZXJ5KCRldmVudClcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxub3ZvLW5hdiB0aGVtZT1cIndoaXRlXCIgW291dGxldF09XCJub3ZvQ2F0ZWdvcnlEcm9wZG93bk91dGxldFwiIGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgPG5vdm8tdGFiICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBfY2F0ZWdvcmllc1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXRlZ29yeVwiIChhY3RpdmVDaGFuZ2UpPVwib25DYXRlZ29yeVNlbGVjdGVkKGNhdGVnb3J5KVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBjYXRlZ29yeSB9fSAoe3sgX2NhdGVnb3J5TWFwW2NhdGVnb3J5XS5sZW5ndGggfX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbm92by10YWI+XG4gICAgICAgICAgICA8L25vdm8tbmF2PlxuICAgICAgICAgICAgPG5vdm8tbmF2LW91dGxldCAjbm92b0NhdGVnb3J5RHJvcGRvd25PdXRsZXQ+XG4gICAgICAgICAgICAgICAgPG5vdm8tbmF2LWNvbnRlbnQgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIF9jYXRlZ29yaWVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QgZGlyZWN0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfY2F0ZWdvcnlNYXBbY2F0ZWdvcnldXCIgKGNsaWNrKT1cInNlbGVjdCgkZXZlbnQsIGl0ZW0pXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIml0ZW0ubGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50Pnt7IGl0ZW0ubGFiZWwgfX08L2l0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS1lbmQgY2xhc3M9XCJub3ZvLWNhdGVnb3J5LWRyb3Bkb3duLWhvdmVyXCIgKm5nSWY9XCJpdGVtLmhvdmVyVGV4dCAmJiAhaXRlbS5zZWxlY3RlZFwiPnt7IGl0ZW0uaG92ZXJUZXh0IH19PC9pdGVtLWVuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS1lbmQgY2xhc3M9XCJub3ZvLWNhdGVnb3J5LWRyb3Bkb3duLWhvdmVyXCIgKm5nSWY9XCJpdGVtLmhvdmVySWNvbiAmJiAhaXRlbS5zZWxlY3RlZFwiPjxpIGNsYXNzPVwiYmhpLXt7IGl0ZW0uaG92ZXJJY29uIH19XCI+PC9pPjwvaXRlbS1lbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGl0ZW0tZW5kICpuZ0lmPVwiaXRlbS5zZWxlY3RlZFwiPjxpIGNsYXNzPVwiYmhpLWNoZWNrXCI+PC9pPjwvaXRlbS1lbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5vdm8tbGlzdC1pdGVtICpuZ0lmPVwiX2NhdGVnb3J5TWFwW2NhdGVnb3J5XS5sZW5ndGggPT09IDAgJiYgc2VhcmNoXCIgY2xhc3M9XCJub3ZvLWNhdGVnb3J5LWRyb3Bkb3duLWVtcHR5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50Pnt7IHNlYXJjaC5lbXB0eU1lc3NhZ2UgfHwgbGFiZWxzLm5vSXRlbXMgfX08L2l0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvbm92by1saXN0PlxuICAgICAgICAgICAgICAgIDwvbm92by1uYXYtY29udGVudD5cbiAgICAgICAgICAgIDwvbm92by1uYXYtb3V0bGV0PlxuICAgICAgICAgICAgPGZvb3RlciAqbmdJZj1cImZvb3RlclwiIGNsYXNzPVwibm92by1jYXRlZ29yeS1kcm9wZG93bi1mb290ZXItYWxpZ24te3sgZm9vdGVyLmFsaWduIHx8ICdyaWdodCcgfX1cIj5cbiAgICAgICAgICAgICAgICA8YSAqbmdGb3I9XCJsZXQgbGluayBvZiBmb290ZXIubGlua3NcIiAoY2xpY2spPVwiZXhlY3V0ZUNsaWNrQ2FsbGJhY2soJGV2ZW50LCBsaW5rKVwiPnt7IGxpbmsubGFiZWwgfX08L2E+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgaG9zdDoge1xuICAgICcoa2V5ZG93biknOiAnb25LZXlEb3duKCRldmVudCknLFxuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdhY3RpdmUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ2F0ZWdvcnlEcm9wZG93bkVsZW1lbnQgZXh0ZW5kcyBPdXRzaWRlQ2xpY2sgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIF9xdWVyeTogc3RyaW5nID0gJyc7XG4gIF9jYXRlZ29yeU1hcDogYW55ID0ge307XG4gIF9jYXRlZ29yaWVzOiBzdHJpbmdbXSA9IFtdO1xuICBjbGlja0hhbmRsZXI6IEZ1bmN0aW9uO1xuICBfbWFzdGVyQ2F0ZWdvcnlNYXA6IGFueTtcbiAgX3F1ZXJ5VGltZW91dDogYW55O1xuICAvLyBCb29sZWFuIHRvIGtlZXAgdGhlIHNlbGVjdGlvbiBwZXJzaXN0IHdoZW4gY2xvc2luZyB0aGUgZHJvcGRvd25cbiAgQElucHV0KClcbiAgcGVyc2lzdFNlbGVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBCb29sZWFuIHRvIGNsb3NlIHRoZSBkcm9wZG93biBvbiBzZWxlY3Rpb25cbiAgQElucHV0KClcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBTZWFyY2ggQ29uZmlnXG4gIC8vIHtcbiAgLy8gICBwbGFjZWhvbGRlcjogJ1NUUklORycgLy8gZGVmYXVsdHMgdG8gXCJTRUFSQ0hcIiAtIHBsYWNlaG9sZGVyIGZvciBzZWFyY2ggaW5wdXRcbiAgLy8gICBlbXB0eU1lc3NhZ2U6ICdTVFJJTkcnIC8vIGRlZmF1bHRzIHRvIFwiVGhlcmUgYXJlIG5vIGl0ZW1zLlwiIC0gZW1wdHkgbWVzc2FnZSB3aGVuIHRoZXJlIGFyZSBubyBpdGVtcyBpbiB0aGUgY2F0ZWdvcnlcbiAgLy8gICBkZWJvdW5jZTogJ05VTUJFUiAoaW4gTVMpJyAvLyBkZWZhdWx0cyB0byAzMDBtcyAtIGRlYm91bmNlIHRpbWUgZm9yIHRoZSBzZWFyY2hcbiAgLy8gICBjb21wYXJlOiAnRlVOQ1RJT04nIC8vIGRlZmF1bHQgdG8gc2ltcGxlIGluZGV4T2YgLSBjb21wYXJlIGZ1bmN0aW9uIGZvciBjYXRlZ29yeSBzZWFyY2gsIHNob3VsZCBhY2NlcHQgKHF1ZXJ5LCBpdGVtKSBhbmQgcmV0dXJuIHRydWUvZmFsc2VcbiAgLy8gfVxuICBASW5wdXQoKVxuICBzZWFyY2g6IGFueTtcbiAgLy8gRm9vdGVyIGNvbmZpZ1xuICAvLyB7XG4gIC8vICAgYWxpZ246ICdTVFJJTkcnIC8vIGRlZmF1bHRzIHRvIFwicmlnaHRcIiAtIGFsaWdubWVudCBvZiB0aGUgbGlua3NcbiAgLy8gICBsaW5rczogJ0FSUkFZJyAvLyBhcnJheSBvZiBsaW5rcyB0byBnbyBpbnRvIHRoZSBmb290ZXIsIGJlIGF3YXkgb2Ygc3BhY2luZyAtIHsgbGFiZWwsIGNhbGxiYWNrIH0gZm9yIHRoZSBvYmplY3QgaW5zaWRlXG4gIC8vIH1cbiAgQElucHV0KClcbiAgZm9vdGVyOiBhbnk7XG4gIC8vIEV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuZXZlciBhbiBpdGVtIGlzIHNlbGVjdGVkXG4gIEBPdXRwdXQoJ2l0ZW1TZWxlY3RlZCcpXG4gIF9zZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyBFdmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbmV2ZXIgYSBjYXRlZ29yeSBpcyBzZWxlY3RlZFxuICBAT3V0cHV0KClcbiAgY2F0ZWdvcnlTZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgY2F0ZWdvcmllcyhjYXRlZ29yaWVzOiBhbnkpIHtcbiAgICB0aGlzLl9tYXN0ZXJDYXRlZ29yeU1hcCA9IE9iamVjdC5hc3NpZ24oe30sIGNhdGVnb3JpZXMpO1xuICAgIHRoaXMuX2NhdGVnb3J5TWFwID0gT2JqZWN0LmFzc2lnbih7fSwgY2F0ZWdvcmllcyk7XG4gICAgdGhpcy5fY2F0ZWdvcmllcyA9IE9iamVjdC5rZXlzKGNhdGVnb3JpZXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gdGhpcy50b2dnbGVBY3RpdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBidXR0b24gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBsZXQgYnV0dG9uID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gICAgaWYgKGJ1dHRvbikge1xuICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZSAmJiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRVNDIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVOVEVSKSkge1xuICAgICAgdGhpcy50b2dnbGVBY3RpdmUoKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclNlbGVjdGlvbigpIHtcbiAgICB0aGlzLl9jYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICB0aGlzLl9jYXRlZ29yeU1hcFtjYXRlZ29yeV0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdChldmVudCwgaXRlbSkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAvLyBJZiB3ZSBwZXJzaXN0IHRoZSBzZWxlY3Rpb24sIGNsZWFyIGFuZCBzaG93IGEgY2hlY2tcbiAgICBpZiAodGhpcy5wZXJzaXN0U2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICBpdGVtLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gRW1pdCB0aGUgaXRlbVxuICAgIHRoaXMuX3NlbGVjdC5lbWl0KGl0ZW0pO1xuICAgIC8vIENsb3NlLCBpZiBpbnB1dCBpcyBzZXRcbiAgICBpZiAodGhpcy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnRvZ2dsZUFjdGl2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2F0ZWdvcnlTZWxlY3RlZChjYXRlZ29yeSkge1xuICAgIHRoaXMuY2F0ZWdvcnlTZWxlY3RlZC5lbWl0KGNhdGVnb3J5KTtcbiAgfVxuXG4gIGNsZWFyUXVlcnkoZXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5fcXVlcnkgPSAnJztcbiAgICAvLyBSZXNldCB0aGUgY2F0ZWdvcmllc1xuICAgIHRoaXMuX2NhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgIHRoaXMuX2NhdGVnb3J5TWFwW2NhdGVnb3J5XSA9IHRoaXMuX21hc3RlckNhdGVnb3J5TWFwW2NhdGVnb3J5XTtcbiAgICB9KTtcbiAgfVxuXG4gIHF1ZXJ5Q2F0ZWdvcmllcyhxdWVyeSkge1xuICAgIC8vIFNhdmUgdGhlIHF1ZXJ5XG4gICAgdGhpcy5fcXVlcnkgPSBxdWVyeTtcbiAgICAvLyBDaGVjayB0aW1lb3V0XG4gICAgaWYgKHRoaXMuX3F1ZXJ5VGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3F1ZXJ5VGltZW91dCk7XG4gICAgfVxuICAgIC8vIFN0b3JlIGEgdGltZW91dCwgdG8gZGVib3VuY2UgdXNlciBpbnB1dFxuICAgIHRoaXMuX3F1ZXJ5VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zZWFyY2guY29tcGFyZSkge1xuICAgICAgICAgIHRoaXMuX2NhdGVnb3J5TWFwW2NhdGVnb3J5XSA9IHRoaXMuX21hc3RlckNhdGVnb3J5TWFwW2NhdGVnb3J5XS5maWx0ZXIoKGl0ZW0pID0+IHRoaXMuc2VhcmNoLmNvbXBhcmUocXVlcnksIGl0ZW0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9jYXRlZ29yeU1hcFtjYXRlZ29yeV0gPSB0aGlzLl9tYXN0ZXJDYXRlZ29yeU1hcFtjYXRlZ29yeV0uZmlsdGVyKFxuICAgICAgICAgICAgKGl0ZW0pID0+IH5pdGVtLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeS50b0xvd2VyQ2FzZSgpKSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCB0aGlzLnNlYXJjaC5kZWJvdW5jZSB8fCAzMDApO1xuICB9XG5cbiAgZXhlY3V0ZUNsaWNrQ2FsbGJhY2soZXZlbnQsIGxpbmspIHtcbiAgICBsaW5rLmNhbGxiYWNrKGV2ZW50KTtcbiAgICAvLyBDbG9zZSwgaWYgaW5wdXQgaXMgc2V0XG4gICAgaWYgKHRoaXMuY2xvc2VPblNlbGVjdCkge1xuICAgICAgdGhpcy50b2dnbGVBY3RpdmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==