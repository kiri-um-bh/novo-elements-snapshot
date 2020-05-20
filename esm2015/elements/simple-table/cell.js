/**
 * @fileoverview added by tsickle
 * Generated from: elements/simple-table/cell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CdkCell, CdkCellDef, CdkColumnDef, CdkHeaderCell, CdkHeaderCellDef } from '@angular/cdk/table';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, HostBinding, Input, Optional, Renderer2 } from '@angular/core';
import { NovoLabelService } from '../../services/novo-label-service';
import { Helpers } from '../../utils/Helpers';
import { NovoSelection } from './sort';
/**
 * Workaround for https://github.com/angular/angular/issues/17849
 * @type {?}
 */
export const _NovoCellDef = CdkCellDef;
/** @type {?} */
export const _NovoHeaderCellDef = CdkHeaderCellDef;
/** @type {?} */
export const _NovoColumnDef = CdkColumnDef;
/** @type {?} */
export const _NovoHeaderCell = CdkHeaderCell;
/** @type {?} */
export const _NovoCell = CdkCell;
export class NovoSimpleCellDef extends _NovoCellDef {
}
NovoSimpleCellDef.decorators = [
    { type: Directive, args: [{
                selector: '[novoSimpleCellDef]',
                providers: [{ provide: CdkCellDef, useExisting: NovoSimpleCellDef }],
            },] }
];
export class NovoSimpleHeaderCellDef extends _NovoHeaderCellDef {
}
NovoSimpleHeaderCellDef.decorators = [
    { type: Directive, args: [{
                selector: '[novoSimpleHeaderCellDef]',
                providers: [{ provide: CdkHeaderCellDef, useExisting: NovoSimpleHeaderCellDef }],
            },] }
];
export class NovoSimpleColumnDef extends _NovoColumnDef {
}
NovoSimpleColumnDef.decorators = [
    { type: Directive, args: [{
                selector: '[novoSimpleColumnDef]',
                providers: [{ provide: CdkColumnDef, useExisting: NovoSimpleColumnDef }],
            },] }
];
NovoSimpleColumnDef.propDecorators = {
    name: [{ type: Input, args: ['novoSimpleColumnDef',] }]
};
if (false) {
    /** @type {?} */
    NovoSimpleColumnDef.prototype.name;
}
/**
 * @template T
 */
export class NovoSimpleHeaderCell extends _NovoHeaderCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(columnDef, elementRef, renderer) {
        super(columnDef, elementRef);
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.role = 'columnheader';
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', `novo-column-header-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, `novo-column-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, 'novo-simple-header-cell');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.column.width) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', `${this.column.width}px`);
            this.renderer.setStyle(this.elementRef.nativeElement, 'max-width', `${this.column.width}px`);
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${this.column.width}px`);
        }
    }
}
NovoSimpleHeaderCell.decorators = [
    { type: Directive, args: [{
                selector: 'novo-simple-header-cell',
            },] }
];
/** @nocollapse */
NovoSimpleHeaderCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef },
    { type: Renderer2 }
];
NovoSimpleHeaderCell.propDecorators = {
    role: [{ type: HostBinding, args: ['attr.role',] }],
    column: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoSimpleHeaderCell.prototype.role;
    /** @type {?} */
    NovoSimpleHeaderCell.prototype.column;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleHeaderCell.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleHeaderCell.prototype.renderer;
}
export class NovoSimpleEmptyHeaderCell extends _NovoHeaderCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(columnDef, elementRef, renderer) {
        super(columnDef, elementRef);
        this.role = 'columnheader';
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', `novo-column-header-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, `novo-column-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, 'novo-simple-empty-header-cell');
    }
}
NovoSimpleEmptyHeaderCell.decorators = [
    { type: Directive, args: [{
                selector: 'novo-simple-empty-header-cell',
            },] }
];
/** @nocollapse */
NovoSimpleEmptyHeaderCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef },
    { type: Renderer2 }
];
NovoSimpleEmptyHeaderCell.propDecorators = {
    role: [{ type: HostBinding, args: ['attr.role',] }]
};
if (false) {
    /** @type {?} */
    NovoSimpleEmptyHeaderCell.prototype.role;
}
export class NovoSimpleCheckboxHeaderCell extends _NovoHeaderCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} ref
     * @param {?} _selection
     */
    constructor(columnDef, elementRef, renderer, ref, _selection) {
        super(columnDef, elementRef);
        this._selection = _selection;
        this.role = 'columnheader';
        this.selectAll = false;
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', `novo-checkbox-column-header-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, `novo-checkbox-column-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, 'novo-simple-checkbox-header-cell');
        this.selectAllSubscription = _selection.novoSelectAllToggle.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.selectAll = value;
            ref.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.selectAllSubscription.unsubscribe();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    toggle(value) {
        this._selection.selectAll(value);
    }
}
NovoSimpleCheckboxHeaderCell.decorators = [
    { type: Component, args: [{
                selector: 'novo-simple-checkbox-header-cell',
                template: `<novo-checkbox [(ngModel)]="selectAll" (ngModelChange)="toggle($event)"></novo-checkbox>`
            }] }
];
/** @nocollapse */
NovoSimpleCheckboxHeaderCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: NovoSelection, decorators: [{ type: Optional }] }
];
NovoSimpleCheckboxHeaderCell.propDecorators = {
    role: [{ type: HostBinding, args: ['attr.role',] }]
};
if (false) {
    /** @type {?} */
    NovoSimpleCheckboxHeaderCell.prototype.role;
    /** @type {?} */
    NovoSimpleCheckboxHeaderCell.prototype.selectAll;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleCheckboxHeaderCell.prototype.selectAllSubscription;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleCheckboxHeaderCell.prototype._selection;
}
/**
 * @template T
 */
export class NovoSimpleCell extends _NovoCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(columnDef, elementRef, renderer) {
        super(columnDef, elementRef);
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.role = 'gridcell';
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', `novo-column-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, `novo-column-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, 'novo-simple-cell');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.column.customClass) {
            this.renderer.addClass(this.elementRef.nativeElement, this.column.customClass(this.row));
        }
        if (this.column.width) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', `${this.column.width}px`);
            this.renderer.setStyle(this.elementRef.nativeElement, 'max-width', `${this.column.width}px`);
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${this.column.width}px`);
            // TODO - this inhibits resizing the page after the initial load -- but do we care?!?!
            // this.renderer.setStyle(this.spanElement.nativeElement, 'min-width', `${this.column.width - 20}px`);
            // this.renderer.setStyle(this.spanElement.nativeElement, 'max-width', `${this.column.width - 20}px`);
            // this.renderer.setStyle(this.spanElement.nativeElement, 'width', `${this.column.width - 20}px`);
        }
        // else {
        //     // TODO - this inhibits resizing the page after the initial load -- but do we care?!?!
        //     this.renderer.setStyle(this.spanElement.nativeElement, 'min-width', `${this.elementRef.nativeElement.offsetWidth - 20}px`);
        //     this.renderer.setStyle(this.spanElement.nativeElement, 'max-width', `${this.elementRef.nativeElement.offsetWidth - 20}px`);
        //     this.renderer.setStyle(this.spanElement.nativeElement, 'width', `${this.elementRef.nativeElement.offsetWidth - 20}px`);
        // }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        Helpers.swallowEvent(event);
        if (this.column.onClick) {
            this.column.onClick(this.row);
        }
        return;
    }
}
NovoSimpleCell.decorators = [
    { type: Component, args: [{
                selector: 'novo-simple-cell',
                template: `
    <span [class.clickable]="!!column.onClick" (click)="onClick($event)" #span>{{ column.renderer(row) }}</span>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NovoSimpleCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef },
    { type: Renderer2 }
];
NovoSimpleCell.propDecorators = {
    role: [{ type: HostBinding, args: ['attr.role',] }],
    row: [{ type: Input }],
    column: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoSimpleCell.prototype.role;
    /** @type {?} */
    NovoSimpleCell.prototype.row;
    /** @type {?} */
    NovoSimpleCell.prototype.column;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleCell.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleCell.prototype.renderer;
}
export class NovoSimpleCheckboxCell extends _NovoCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} _selection
     */
    constructor(columnDef, elementRef, renderer, _selection) {
        super(columnDef, elementRef);
        this.columnDef = columnDef;
        this._selection = _selection;
        this.role = 'gridcell';
        this.selected = false;
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', `novo-checkbox-column-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, `novo-checkbox-column-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, 'novo-simple-checkbox-cell');
        this.selectAllSubscription = _selection.novoSelectAllToggle.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.selected = value;
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._selection.register(this.row.id || this.index, this.row);
        this.selected = this._selection.state.selectedRows.has(this.row.id || this.index);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._selection.deregister(this.row.id || this.index);
        this.selectAllSubscription.unsubscribe();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    toggle(value) {
        this._selection.toggle(this.row.id || this.index, value, this.row);
    }
}
NovoSimpleCheckboxCell.decorators = [
    { type: Component, args: [{
                selector: 'novo-simple-checkbox-cell',
                template: `
    <novo-checkbox [ngModel]="selected" (ngModelChange)="toggle($event)"></novo-checkbox>
  `
            }] }
];
/** @nocollapse */
NovoSimpleCheckboxCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef },
    { type: Renderer2 },
    { type: NovoSelection, decorators: [{ type: Optional }] }
];
NovoSimpleCheckboxCell.propDecorators = {
    role: [{ type: HostBinding, args: ['attr.role',] }],
    row: [{ type: Input }],
    index: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoSimpleCheckboxCell.prototype.role;
    /** @type {?} */
    NovoSimpleCheckboxCell.prototype.row;
    /** @type {?} */
    NovoSimpleCheckboxCell.prototype.index;
    /** @type {?} */
    NovoSimpleCheckboxCell.prototype.selected;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleCheckboxCell.prototype.selectAllSubscription;
    /** @type {?} */
    NovoSimpleCheckboxCell.prototype.columnDef;
    /** @type {?} */
    NovoSimpleCheckboxCell.prototype._selection;
}
/**
 * @template T
 */
export class NovoSimpleActionCell extends _NovoCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} labels
     */
    constructor(columnDef, elementRef, renderer, labels) {
        super(columnDef, elementRef);
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.labels = labels;
        this.role = 'gridcell';
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', `novo-action-column-${columnDef.cssClassFriendlyName}`);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.column.options) {
            this.renderer.addClass(this.elementRef.nativeElement, 'novo-simple-dropdown-cell');
        }
        else {
            this.renderer.addClass(this.elementRef.nativeElement, 'novo-simple-button-cell');
        }
    }
    /**
     * @param {?} check
     * @param {?} row
     * @return {?}
     */
    isDisabled(check, row) {
        if (check.disabled === true) {
            return true;
        }
        if (check.disabledCheck) {
            return check.disabledCheck(row);
        }
        return false;
    }
}
NovoSimpleActionCell.decorators = [
    { type: Component, args: [{
                selector: 'novo-simple-action-cell',
                template: `
    <ng-container *ngIf="!column.options">
      <button theme="icon" [icon]="column.icon" (click)="column.onClick(row)" [disabled]="isDisabled(column, row)"></button>
    </ng-container>
    <ng-container *ngIf="column.options">
      <novo-dropdown parentScrollSelector=".novo-simple-table" containerClass="novo-table-dropdown-cell">
        <button type="button" theme="dialogue" icon="collapse" inverse>{{ column.label || labels.actions }}</button>
        <list>
          <item *ngFor="let option of column.options" (action)="option.onClick(row)" [disabled]="isDisabled(option, row)">
            <span [attr.data-automation-id]="option.label">{{ option.label }}</span>
          </item>
        </list>
      </novo-dropdown>
    </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NovoSimpleActionCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef },
    { type: Renderer2 },
    { type: NovoLabelService }
];
NovoSimpleActionCell.propDecorators = {
    role: [{ type: HostBinding, args: ['attr.role',] }],
    row: [{ type: Input }],
    column: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoSimpleActionCell.prototype.role;
    /** @type {?} */
    NovoSimpleActionCell.prototype.row;
    /** @type {?} */
    NovoSimpleActionCell.prototype.column;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleActionCell.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NovoSimpleActionCell.prototype.renderer;
    /** @type {?} */
    NovoSimpleActionCell.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBcUIsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6SyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7Ozs7QUFJdkMsTUFBTSxPQUFPLFlBQVksR0FBRyxVQUFVOztBQUN0QyxNQUFNLE9BQU8sa0JBQWtCLEdBQUcsZ0JBQWdCOztBQUNsRCxNQUFNLE9BQU8sY0FBYyxHQUFHLFlBQVk7O0FBQzFDLE1BQU0sT0FBTyxlQUFlLEdBQUcsYUFBYTs7QUFDNUMsTUFBTSxPQUFPLFNBQVMsR0FBRyxPQUFPO0FBTWhDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxZQUFZOzs7WUFKbEQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQzthQUNyRTs7QUFPRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsa0JBQWtCOzs7WUFKOUQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLEVBQUUs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QUFTLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO0lBQ2hJLENBQUM7Ozs7SUFFTSxRQUFRO1FBQ2IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO1NBQ3BGO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1NBQ2xGO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0sVUFBVSxDQUFDLEtBQW9FLEVBQUUsR0FBTTtRQUM1RixJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDdkIsT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7R0FjVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQXZPNkIsWUFBWTtZQUNpQyxVQUFVO1lBQW1ELFNBQVM7WUFFeEksZ0JBQWdCOzs7bUJBc090QixXQUFXLFNBQUMsV0FBVztrQkFHdkIsS0FBSztxQkFFTCxLQUFLOzs7O0lBTE4sb0NBQ3lCOztJQUV6QixtQ0FDYzs7SUFDZCxzQ0FDMEM7Ozs7O0lBRUwsMENBQThCOzs7OztJQUFFLHdDQUEyQjs7SUFBRSxzQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtDZWxsLCBDZGtDZWxsRGVmLCBDZGtDb2x1bW5EZWYsIENka0hlYWRlckNlbGwsIENka0hlYWRlckNlbGxEZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IFNpbXBsZVRhYmxlQWN0aW9uQ29sdW1uLCBTaW1wbGVUYWJsZUFjdGlvbkNvbHVtbk9wdGlvbiwgU2ltcGxlVGFibGVDb2x1bW4gfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm92b1NlbGVjdGlvbiB9IGZyb20gJy4vc29ydCc7XG5cblxuLyoqIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE3ODQ5ICovXG5leHBvcnQgY29uc3QgX05vdm9DZWxsRGVmID0gQ2RrQ2VsbERlZjtcbmV4cG9ydCBjb25zdCBfTm92b0hlYWRlckNlbGxEZWYgPSBDZGtIZWFkZXJDZWxsRGVmO1xuZXhwb3J0IGNvbnN0IF9Ob3ZvQ29sdW1uRGVmID0gQ2RrQ29sdW1uRGVmO1xuZXhwb3J0IGNvbnN0IF9Ob3ZvSGVhZGVyQ2VsbCA9IENka0hlYWRlckNlbGw7XG5leHBvcnQgY29uc3QgX05vdm9DZWxsID0gQ2RrQ2VsbDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TaW1wbGVDZWxsRGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrQ2VsbERlZiwgdXNlRXhpc3Rpbmc6IE5vdm9TaW1wbGVDZWxsRGVmIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlQ2VsbERlZiBleHRlbmRzIF9Ob3ZvQ2VsbERlZiB7IH1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TaW1wbGVIZWFkZXJDZWxsRGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrSGVhZGVyQ2VsbERlZiwgdXNlRXhpc3Rpbmc6IE5vdm9TaW1wbGVIZWFkZXJDZWxsRGVmIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlSGVhZGVyQ2VsbERlZiBleHRlbmRzIF9Ob3ZvSGVhZGVyQ2VsbERlZiB7IH1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TaW1wbGVDb2x1bW5EZWZdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtDb2x1bW5EZWYsIHVzZUV4aXN0aW5nOiBOb3ZvU2ltcGxlQ29sdW1uRGVmIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlQ29sdW1uRGVmIGV4dGVuZHMgX05vdm9Db2x1bW5EZWYge1xuICBASW5wdXQoJ25vdm9TaW1wbGVDb2x1bW5EZWYnKVxuICBuYW1lOiBzdHJpbmc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLWhlYWRlci1jZWxsJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUhlYWRlckNlbGw8VD4gZXh0ZW5kcyBfTm92b0hlYWRlckNlbGwgaW1wbGVtZW50cyBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ2NvbHVtbmhlYWRlcic7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGNvbHVtbjogU2ltcGxlVGFibGVDb2x1bW48VD47XG5cbiAgY29uc3RydWN0b3IoY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1hdXRvbWF0aW9uLWlkJywgYG5vdm8tY29sdW1uLWhlYWRlci0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBub3ZvLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLXNpbXBsZS1oZWFkZXItY2VsbCcpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbHVtbi53aWR0aCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21pbi13aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF4LXdpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRofXB4YCk7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLWVtcHR5LWhlYWRlci1jZWxsJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUVtcHR5SGVhZGVyQ2VsbCBleHRlbmRzIF9Ob3ZvSGVhZGVyQ2VsbCB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAnY29sdW1uaGVhZGVyJztcblxuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtYXV0b21hdGlvbi1pZCcsIGBub3ZvLWNvbHVtbi1oZWFkZXItJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbm92by1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1zaW1wbGUtZW1wdHktaGVhZGVyLWNlbGwnKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS1jaGVja2JveC1oZWFkZXItY2VsbCcsXG4gIHRlbXBsYXRlOiBgPG5vdm8tY2hlY2tib3ggWyhuZ01vZGVsKV09XCJzZWxlY3RBbGxcIiAobmdNb2RlbENoYW5nZSk9XCJ0b2dnbGUoJGV2ZW50KVwiPjwvbm92by1jaGVja2JveD5gLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlQ2hlY2tib3hIZWFkZXJDZWxsIGV4dGVuZHMgX05vdm9IZWFkZXJDZWxsIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdjb2x1bW5oZWFkZXInO1xuXG4gIHB1YmxpYyBzZWxlY3RBbGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzZWxlY3RBbGxTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb2x1bW5EZWY6IENka0NvbHVtbkRlZixcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9zZWxlY3Rpb246IE5vdm9TZWxlY3Rpb24sXG4gICkge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtYXV0b21hdGlvbi1pZCcsIGBub3ZvLWNoZWNrYm94LWNvbHVtbi1oZWFkZXItJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbm92by1jaGVja2JveC1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1zaW1wbGUtY2hlY2tib3gtaGVhZGVyLWNlbGwnKTtcblxuICAgIHRoaXMuc2VsZWN0QWxsU3Vic2NyaXB0aW9uID0gX3NlbGVjdGlvbi5ub3ZvU2VsZWN0QWxsVG9nZ2xlLnN1YnNjcmliZSgodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsID0gdmFsdWU7XG4gICAgICByZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RBbGxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3Rpb24uc2VsZWN0QWxsKHZhbHVlKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBbY2xhc3MuY2xpY2thYmxlXT1cIiEhY29sdW1uLm9uQ2xpY2tcIiAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCIgI3NwYW4+e3sgY29sdW1uLnJlbmRlcmVyKHJvdykgfX08L3NwYW4+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlQ2VsbDxUPiBleHRlbmRzIF9Ob3ZvQ2VsbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAnZ3JpZGNlbGwnO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByb3c6IGFueTtcbiAgQElucHV0KClcbiAgcHVibGljIGNvbHVtbjogU2ltcGxlVGFibGVDb2x1bW48VD47XG5cbiAgY29uc3RydWN0b3IoY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1hdXRvbWF0aW9uLWlkJywgYG5vdm8tY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG5vdm8tY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tc2ltcGxlLWNlbGwnKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2x1bW4uY3VzdG9tQ2xhc3MpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY29sdW1uLmN1c3RvbUNsYXNzKHRoaXMucm93KSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbHVtbi53aWR0aCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21pbi13aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF4LXdpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRofXB4YCk7XG4gICAgICAvLyBUT0RPIC0gdGhpcyBpbmhpYml0cyByZXNpemluZyB0aGUgcGFnZSBhZnRlciB0aGUgaW5pdGlhbCBsb2FkIC0tIGJ1dCBkbyB3ZSBjYXJlPyE/IVxuICAgICAgLy8gdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwYW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdtaW4td2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aCAtIDIwfXB4YCk7XG4gICAgICAvLyB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc3BhbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ21heC13aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRoIC0gMjB9cHhgKTtcbiAgICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGFuRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aCAtIDIwfXB4YCk7XG4gICAgfVxuICAgIC8vIGVsc2Uge1xuICAgIC8vICAgICAvLyBUT0RPIC0gdGhpcyBpbmhpYml0cyByZXNpemluZyB0aGUgcGFnZSBhZnRlciB0aGUgaW5pdGlhbCBsb2FkIC0tIGJ1dCBkbyB3ZSBjYXJlPyE/IVxuICAgIC8vICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc3BhbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ21pbi13aWR0aCcsIGAke3RoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC0gMjB9cHhgKTtcbiAgICAvLyAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwYW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdtYXgtd2lkdGgnLCBgJHt0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIDIwfXB4YCk7XG4gICAgLy8gICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGFuRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIDIwfXB4YCk7XG4gICAgLy8gfVxuICB9XG5cbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgaWYgKHRoaXMuY29sdW1uLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMuY29sdW1uLm9uQ2xpY2sodGhpcy5yb3cpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zaW1wbGUtY2hlY2tib3gtY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5vdm8tY2hlY2tib3ggW25nTW9kZWxdPVwic2VsZWN0ZWRcIiAobmdNb2RlbENoYW5nZSk9XCJ0b2dnbGUoJGV2ZW50KVwiPjwvbm92by1jaGVja2JveD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUNoZWNrYm94Q2VsbCBleHRlbmRzIF9Ob3ZvQ2VsbCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdncmlkY2VsbCc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHJvdzogYW55O1xuICBASW5wdXQoKVxuICBwdWJsaWMgaW5kZXg6IGFueTtcblxuICBwdWJsaWMgc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzZWxlY3RBbGxTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIEBPcHRpb25hbCgpIHB1YmxpYyBfc2VsZWN0aW9uOiBOb3ZvU2VsZWN0aW9uKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1hdXRvbWF0aW9uLWlkJywgYG5vdm8tY2hlY2tib3gtY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG5vdm8tY2hlY2tib3gtY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tc2ltcGxlLWNoZWNrYm94LWNlbGwnKTtcblxuICAgIHRoaXMuc2VsZWN0QWxsU3Vic2NyaXB0aW9uID0gX3NlbGVjdGlvbi5ub3ZvU2VsZWN0QWxsVG9nZ2xlLnN1YnNjcmliZSgodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3Rpb24ucmVnaXN0ZXIodGhpcy5yb3cuaWQgfHwgdGhpcy5pbmRleCwgdGhpcy5yb3cpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3Rpb24uc3RhdGUuc2VsZWN0ZWRSb3dzLmhhcyh0aGlzLnJvdy5pZCB8fCB0aGlzLmluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3Rpb24uZGVyZWdpc3Rlcih0aGlzLnJvdy5pZCB8fCB0aGlzLmluZGV4KTtcbiAgICB0aGlzLnNlbGVjdEFsbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGlvbi50b2dnbGUodGhpcy5yb3cuaWQgfHwgdGhpcy5pbmRleCwgdmFsdWUsIHRoaXMucm93KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS1hY3Rpb24tY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2x1bW4ub3B0aW9uc1wiPlxuICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBbaWNvbl09XCJjb2x1bW4uaWNvblwiIChjbGljayk9XCJjb2x1bW4ub25DbGljayhyb3cpXCIgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWQoY29sdW1uLCByb3cpXCI+PC9idXR0b24+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbi5vcHRpb25zXCI+XG4gICAgICA8bm92by1kcm9wZG93biBwYXJlbnRTY3JvbGxTZWxlY3Rvcj1cIi5ub3ZvLXNpbXBsZS10YWJsZVwiIGNvbnRhaW5lckNsYXNzPVwibm92by10YWJsZS1kcm9wZG93bi1jZWxsXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwiZGlhbG9ndWVcIiBpY29uPVwiY29sbGFwc2VcIiBpbnZlcnNlPnt7IGNvbHVtbi5sYWJlbCB8fCBsYWJlbHMuYWN0aW9ucyB9fTwvYnV0dG9uPlxuICAgICAgICA8bGlzdD5cbiAgICAgICAgICA8aXRlbSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbHVtbi5vcHRpb25zXCIgKGFjdGlvbik9XCJvcHRpb24ub25DbGljayhyb3cpXCIgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWQob3B0aW9uLCByb3cpXCI+XG4gICAgICAgICAgICA8c3BhbiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwib3B0aW9uLmxhYmVsXCI+e3sgb3B0aW9uLmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgPC9saXN0PlxuICAgICAgPC9ub3ZvLWRyb3Bkb3duPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUFjdGlvbkNlbGw8VD4gZXh0ZW5kcyBfTm92b0NlbGwgaW1wbGVtZW50cyBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ2dyaWRjZWxsJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcm93OiBUO1xuICBASW5wdXQoKVxuICBwdWJsaWMgY29sdW1uOiBTaW1wbGVUYWJsZUFjdGlvbkNvbHVtbjxUPjtcblxuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWF1dG9tYXRpb24taWQnLCBgbm92by1hY3Rpb24tY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbHVtbi5vcHRpb25zKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1zaW1wbGUtZHJvcGRvd24tY2VsbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1zaW1wbGUtYnV0dG9uLWNlbGwnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNEaXNhYmxlZChjaGVjazogU2ltcGxlVGFibGVBY3Rpb25Db2x1bW48VD4gfCBTaW1wbGVUYWJsZUFjdGlvbkNvbHVtbk9wdGlvbjxUPiwgcm93OiBUKTogYm9vbGVhbiB7XG4gICAgaWYgKGNoZWNrLmRpc2FibGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNoZWNrLmRpc2FibGVkQ2hlY2spIHtcbiAgICAgIHJldHVybiBjaGVjay5kaXNhYmxlZENoZWNrKHJvdyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19