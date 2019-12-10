/**
 * @fileoverview added by tsickle
 * Generated from: elements/simple-table/cell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, HostBinding, Input, Optional, Renderer2, } from '@angular/core';
import { CdkCell, CdkCellDef, CdkColumnDef, CdkHeaderCell, CdkHeaderCellDef } from '@angular/cdk/table';
import { NovoSelection } from './sort';
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBR0wsUUFBUSxFQUNSLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHeEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUV2QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7O0FBR3JFLE1BQU0sT0FBTyxZQUFZLEdBQUcsVUFBVTs7QUFDdEMsTUFBTSxPQUFPLGtCQUFrQixHQUFHLGdCQUFnQjs7QUFDbEQsTUFBTSxPQUFPLGNBQWMsR0FBRyxZQUFZOztBQUMxQyxNQUFNLE9BQU8sZUFBZSxHQUFHLGFBQWE7O0FBQzVDLE1BQU0sT0FBTyxTQUFTLEdBQUcsT0FBTztBQU1oQyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsWUFBWTs7O1lBSmxELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLENBQUM7YUFDckU7O0FBT0QsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGtCQUFrQjs7O1lBSjlELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyxFQUFF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QkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDaEksQ0FBQzs7OztJQUVNLFFBQVE7UUFDYixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLDJCQUEyQixDQUFDLENBQUM7U0FDcEY7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHlCQUF5QixDQUFDLENBQUM7U0FDbEY7SUFDSCxDQUFDOzs7Ozs7SUFFTSxVQUFVLENBQUMsS0FBb0UsRUFBRSxHQUFNO1FBQzVGLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksS0FBSyxDQUFDLGFBQWEsRUFBRTtZQUN2QixPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQWpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OztHQWNUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBdE82QixZQUFZO1lBVHhDLFVBQVU7WUFNVixTQUFTO1lBU0YsZ0JBQWdCOzs7bUJBa090QixXQUFXLFNBQUMsV0FBVztrQkFHdkIsS0FBSztxQkFFTCxLQUFLOzs7O0lBTE4sb0NBQ3lCOztJQUV6QixtQ0FDYzs7SUFDZCxzQ0FDMEM7Ozs7O0lBRUwsMENBQThCOzs7OztJQUFFLHdDQUEyQjs7SUFBRSxzQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrQ2VsbCwgQ2RrQ2VsbERlZiwgQ2RrQ29sdW1uRGVmLCBDZGtIZWFkZXJDZWxsLCBDZGtIZWFkZXJDZWxsRGVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOb3ZvU2VsZWN0aW9uIH0gZnJvbSAnLi9zb3J0JztcbmltcG9ydCB7IFNpbXBsZVRhYmxlQWN0aW9uQ29sdW1uLCBTaW1wbGVUYWJsZUFjdGlvbkNvbHVtbk9wdGlvbiwgU2ltcGxlVGFibGVDb2x1bW4gfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbi8qKiBXb3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNzg0OSAqL1xuZXhwb3J0IGNvbnN0IF9Ob3ZvQ2VsbERlZiA9IENka0NlbGxEZWY7XG5leHBvcnQgY29uc3QgX05vdm9IZWFkZXJDZWxsRGVmID0gQ2RrSGVhZGVyQ2VsbERlZjtcbmV4cG9ydCBjb25zdCBfTm92b0NvbHVtbkRlZiA9IENka0NvbHVtbkRlZjtcbmV4cG9ydCBjb25zdCBfTm92b0hlYWRlckNlbGwgPSBDZGtIZWFkZXJDZWxsO1xuZXhwb3J0IGNvbnN0IF9Ob3ZvQ2VsbCA9IENka0NlbGw7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvU2ltcGxlQ2VsbERlZl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka0NlbGxEZWYsIHVzZUV4aXN0aW5nOiBOb3ZvU2ltcGxlQ2VsbERlZiB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUNlbGxEZWYgZXh0ZW5kcyBfTm92b0NlbGxEZWYge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TaW1wbGVIZWFkZXJDZWxsRGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrSGVhZGVyQ2VsbERlZiwgdXNlRXhpc3Rpbmc6IE5vdm9TaW1wbGVIZWFkZXJDZWxsRGVmIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlSGVhZGVyQ2VsbERlZiBleHRlbmRzIF9Ob3ZvSGVhZGVyQ2VsbERlZiB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1NpbXBsZUNvbHVtbkRlZl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka0NvbHVtbkRlZiwgdXNlRXhpc3Rpbmc6IE5vdm9TaW1wbGVDb2x1bW5EZWYgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVDb2x1bW5EZWYgZXh0ZW5kcyBfTm92b0NvbHVtbkRlZiB7XG4gIEBJbnB1dCgnbm92b1NpbXBsZUNvbHVtbkRlZicpXG4gIG5hbWU6IHN0cmluZztcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbm92by1zaW1wbGUtaGVhZGVyLWNlbGwnLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlSGVhZGVyQ2VsbDxUPiBleHRlbmRzIF9Ob3ZvSGVhZGVyQ2VsbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAnY29sdW1uaGVhZGVyJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY29sdW1uOiBTaW1wbGVUYWJsZUNvbHVtbjxUPjtcblxuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWF1dG9tYXRpb24taWQnLCBgbm92by1jb2x1bW4taGVhZGVyLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG5vdm8tY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tc2ltcGxlLWhlYWRlci1jZWxsJyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sdW1uLndpZHRoKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWluLXdpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXgtd2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbm92by1zaW1wbGUtZW1wdHktaGVhZGVyLWNlbGwnLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlRW1wdHlIZWFkZXJDZWxsIGV4dGVuZHMgX05vdm9IZWFkZXJDZWxsIHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdjb2x1bW5oZWFkZXInO1xuXG4gIGNvbnN0cnVjdG9yKGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1hdXRvbWF0aW9uLWlkJywgYG5vdm8tY29sdW1uLWhlYWRlci0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBub3ZvLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLXNpbXBsZS1lbXB0eS1oZWFkZXItY2VsbCcpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLWNoZWNrYm94LWhlYWRlci1jZWxsJyxcbiAgdGVtcGxhdGU6IGA8bm92by1jaGVja2JveCBbKG5nTW9kZWwpXT1cInNlbGVjdEFsbFwiIChuZ01vZGVsQ2hhbmdlKT1cInRvZ2dsZSgkZXZlbnQpXCI+PC9ub3ZvLWNoZWNrYm94PmAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVDaGVja2JveEhlYWRlckNlbGwgZXh0ZW5kcyBfTm92b0hlYWRlckNlbGwgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ2NvbHVtbmhlYWRlcic7XG5cbiAgcHVibGljIHNlbGVjdEFsbDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHNlbGVjdEFsbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICByZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3NlbGVjdGlvbjogTm92b1NlbGVjdGlvbixcbiAgKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1hdXRvbWF0aW9uLWlkJywgYG5vdm8tY2hlY2tib3gtY29sdW1uLWhlYWRlci0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBub3ZvLWNoZWNrYm94LWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLXNpbXBsZS1jaGVja2JveC1oZWFkZXItY2VsbCcpO1xuXG4gICAgdGhpcy5zZWxlY3RBbGxTdWJzY3JpcHRpb24gPSBfc2VsZWN0aW9uLm5vdm9TZWxlY3RBbGxUb2dnbGUuc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RBbGwgPSB2YWx1ZTtcbiAgICAgIHJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdEFsbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGlvbi5zZWxlY3RBbGwodmFsdWUpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuIFtjbGFzcy5jbGlja2FibGVdPVwiISFjb2x1bW4ub25DbGlja1wiIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIiAjc3Bhbj57eyBjb2x1bW4ucmVuZGVyZXIocm93KSB9fTwvc3Bhbj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVDZWxsPFQ+IGV4dGVuZHMgX05vdm9DZWxsIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdncmlkY2VsbCc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHJvdzogYW55O1xuICBASW5wdXQoKVxuICBwdWJsaWMgY29sdW1uOiBTaW1wbGVUYWJsZUNvbHVtbjxUPjtcblxuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWF1dG9tYXRpb24taWQnLCBgbm92by1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbm92by1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1zaW1wbGUtY2VsbCcpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbHVtbi5jdXN0b21DbGFzcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jb2x1bW4uY3VzdG9tQ2xhc3ModGhpcy5yb3cpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sdW1uLndpZHRoKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWluLXdpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXgtd2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIC8vIFRPRE8gLSB0aGlzIGluaGliaXRzIHJlc2l6aW5nIHRoZSBwYWdlIGFmdGVyIHRoZSBpbml0aWFsIGxvYWQgLS0gYnV0IGRvIHdlIGNhcmU/IT8hXG4gICAgICAvLyB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc3BhbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ21pbi13aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRoIC0gMjB9cHhgKTtcbiAgICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGFuRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbWF4LXdpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGggLSAyMH1weGApO1xuICAgICAgLy8gdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwYW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRoIC0gMjB9cHhgKTtcbiAgICB9XG4gICAgLy8gZWxzZSB7XG4gICAgLy8gICAgIC8vIFRPRE8gLSB0aGlzIGluaGliaXRzIHJlc2l6aW5nIHRoZSBwYWdlIGFmdGVyIHRoZSBpbml0aWFsIGxvYWQgLS0gYnV0IGRvIHdlIGNhcmU/IT8hXG4gICAgLy8gICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGFuRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbWluLXdpZHRoJywgYCR7dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggLSAyMH1weGApO1xuICAgIC8vICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc3BhbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ21heC13aWR0aCcsIGAke3RoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC0gMjB9cHhgKTtcbiAgICAvLyAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwYW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC0gMjB9cHhgKTtcbiAgICAvLyB9XG4gIH1cblxuICBwdWJsaWMgb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBpZiAodGhpcy5jb2x1bW4ub25DbGljaykge1xuICAgICAgdGhpcy5jb2x1bW4ub25DbGljayh0aGlzLnJvdyk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS1jaGVja2JveC1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bm92by1jaGVja2JveCBbbmdNb2RlbF09XCJzZWxlY3RlZFwiIChuZ01vZGVsQ2hhbmdlKT1cInRvZ2dsZSgkZXZlbnQpXCI+PC9ub3ZvLWNoZWNrYm94PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlQ2hlY2tib3hDZWxsIGV4dGVuZHMgX05vdm9DZWxsIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ2dyaWRjZWxsJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcm93OiBhbnk7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpbmRleDogYW55O1xuXG4gIHB1YmxpYyBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHNlbGVjdEFsbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgQE9wdGlvbmFsKCkgcHVibGljIF9zZWxlY3Rpb246IE5vdm9TZWxlY3Rpb24pIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWF1dG9tYXRpb24taWQnLCBgbm92by1jaGVja2JveC1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbm92by1jaGVja2JveC1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1zaW1wbGUtY2hlY2tib3gtY2VsbCcpO1xuXG4gICAgdGhpcy5zZWxlY3RBbGxTdWJzY3JpcHRpb24gPSBfc2VsZWN0aW9uLm5vdm9TZWxlY3RBbGxUb2dnbGUuc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGlvbi5yZWdpc3Rlcih0aGlzLnJvdy5pZCB8fCB0aGlzLmluZGV4LCB0aGlzLnJvdyk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuX3NlbGVjdGlvbi5zdGF0ZS5zZWxlY3RlZFJvd3MuaGFzKHRoaXMucm93LmlkIHx8IHRoaXMuaW5kZXgpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGlvbi5kZXJlZ2lzdGVyKHRoaXMucm93LmlkIHx8IHRoaXMuaW5kZXgpO1xuICAgIHRoaXMuc2VsZWN0QWxsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0aW9uLnRvZ2dsZSh0aGlzLnJvdy5pZCB8fCB0aGlzLmluZGV4LCB2YWx1ZSwgdGhpcy5yb3cpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLWFjdGlvbi1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5vcHRpb25zXCI+XG4gICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIFtpY29uXT1cImNvbHVtbi5pY29uXCIgKGNsaWNrKT1cImNvbHVtbi5vbkNsaWNrKHJvdylcIiBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZChjb2x1bW4sIHJvdylcIj48L2J1dHRvbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLm9wdGlvbnNcIj5cbiAgICAgIDxub3ZvLWRyb3Bkb3duIHBhcmVudFNjcm9sbFNlbGVjdG9yPVwiLm5vdm8tc2ltcGxlLXRhYmxlXCIgY29udGFpbmVyQ2xhc3M9XCJub3ZvLXRhYmxlLWRyb3Bkb3duLWNlbGxcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGhlbWU9XCJkaWFsb2d1ZVwiIGljb249XCJjb2xsYXBzZVwiIGludmVyc2U+e3sgY29sdW1uLmxhYmVsIHx8IGxhYmVscy5hY3Rpb25zIH19PC9idXR0b24+XG4gICAgICAgIDxsaXN0PlxuICAgICAgICAgIDxpdGVtICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29sdW1uLm9wdGlvbnNcIiAoYWN0aW9uKT1cIm9wdGlvbi5vbkNsaWNrKHJvdylcIiBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZChvcHRpb24sIHJvdylcIj5cbiAgICAgICAgICAgIDxzcGFuIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJvcHRpb24ubGFiZWxcIj57eyBvcHRpb24ubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgPC9pdGVtPlxuICAgICAgICA8L2xpc3Q+XG4gICAgICA8L25vdm8tZHJvcGRvd24+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlQWN0aW9uQ2VsbDxUPiBleHRlbmRzIF9Ob3ZvQ2VsbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAnZ3JpZGNlbGwnO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByb3c6IFQ7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb2x1bW46IFNpbXBsZVRhYmxlQWN0aW9uQ29sdW1uPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtYXV0b21hdGlvbi1pZCcsIGBub3ZvLWFjdGlvbi1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sdW1uLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLXNpbXBsZS1kcm9wZG93bi1jZWxsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLXNpbXBsZS1idXR0b24tY2VsbCcpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc0Rpc2FibGVkKGNoZWNrOiBTaW1wbGVUYWJsZUFjdGlvbkNvbHVtbjxUPiB8IFNpbXBsZVRhYmxlQWN0aW9uQ29sdW1uT3B0aW9uPFQ+LCByb3c6IFQpOiBib29sZWFuIHtcbiAgICBpZiAoY2hlY2suZGlzYWJsZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoY2hlY2suZGlzYWJsZWRDaGVjaykge1xuICAgICAgcmV0dXJuIGNoZWNrLmRpc2FibGVkQ2hlY2socm93KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=