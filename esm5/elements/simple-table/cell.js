/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, HostBinding, Input, Optional, Renderer2, ViewChild, } from '@angular/core';
import { CdkCell, CdkCellDef, CdkColumnDef, CdkHeaderCell, CdkHeaderCellDef } from '@angular/cdk/table';
import { NovoSelection } from './sort';
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
/**
 * Workaround for https://github.com/angular/angular/issues/17849
 * @type {?}
 */
export var _NovoCellDef = CdkCellDef;
/** @type {?} */
export var _NovoHeaderCellDef = CdkHeaderCellDef;
/** @type {?} */
export var _NovoColumnDef = CdkColumnDef;
/** @type {?} */
export var _NovoHeaderCell = CdkHeaderCell;
/** @type {?} */
export var _NovoCell = CdkCell;
var NovoSimpleCellDef = /** @class */ (function (_super) {
    tslib_1.__extends(NovoSimpleCellDef, _super);
    function NovoSimpleCellDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NovoSimpleCellDef.decorators = [
        { type: Directive, args: [{
                    selector: '[novoSimpleCellDef]',
                    providers: [{ provide: CdkCellDef, useExisting: NovoSimpleCellDef }],
                },] }
    ];
    return NovoSimpleCellDef;
}(_NovoCellDef));
export { NovoSimpleCellDef };
var NovoSimpleHeaderCellDef = /** @class */ (function (_super) {
    tslib_1.__extends(NovoSimpleHeaderCellDef, _super);
    function NovoSimpleHeaderCellDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NovoSimpleHeaderCellDef.decorators = [
        { type: Directive, args: [{
                    selector: '[novoSimpleHeaderCellDef]',
                    providers: [{ provide: CdkHeaderCellDef, useExisting: NovoSimpleHeaderCellDef }],
                },] }
    ];
    return NovoSimpleHeaderCellDef;
}(_NovoHeaderCellDef));
export { NovoSimpleHeaderCellDef };
var NovoSimpleColumnDef = /** @class */ (function (_super) {
    tslib_1.__extends(NovoSimpleColumnDef, _super);
    function NovoSimpleColumnDef() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    return NovoSimpleColumnDef;
}(_NovoColumnDef));
export { NovoSimpleColumnDef };
if (false) {
    /** @type {?} */
    NovoSimpleColumnDef.prototype.name;
}
/**
 * @template T
 */
var NovoSimpleHeaderCell = /** @class */ (function (_super) {
    tslib_1.__extends(NovoSimpleHeaderCell, _super);
    function NovoSimpleHeaderCell(columnDef, elementRef, renderer) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.role = 'columnheader';
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', "novo-column-header-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, "novo-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, 'novo-simple-header-cell');
        return _this;
    }
    /**
     * @return {?}
     */
    NovoSimpleHeaderCell.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.column.width) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', this.column.width + "px");
            this.renderer.setStyle(this.elementRef.nativeElement, 'max-width', this.column.width + "px");
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.column.width + "px");
        }
    };
    NovoSimpleHeaderCell.decorators = [
        { type: Directive, args: [{
                    selector: 'novo-simple-header-cell',
                },] }
    ];
    /** @nocollapse */
    NovoSimpleHeaderCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NovoSimpleHeaderCell.propDecorators = {
        role: [{ type: HostBinding, args: ['attr.role',] }],
        column: [{ type: Input }]
    };
    return NovoSimpleHeaderCell;
}(_NovoHeaderCell));
export { NovoSimpleHeaderCell };
if (false) {
    /** @type {?} */
    NovoSimpleHeaderCell.prototype.role;
    /** @type {?} */
    NovoSimpleHeaderCell.prototype.column;
    /** @type {?} */
    NovoSimpleHeaderCell.prototype.elementRef;
    /** @type {?} */
    NovoSimpleHeaderCell.prototype.renderer;
}
var NovoSimpleEmptyHeaderCell = /** @class */ (function (_super) {
    tslib_1.__extends(NovoSimpleEmptyHeaderCell, _super);
    function NovoSimpleEmptyHeaderCell(columnDef, elementRef, renderer) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        _this.role = 'columnheader';
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', "novo-column-header-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, "novo-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, 'novo-simple-empty-header-cell');
        return _this;
    }
    NovoSimpleEmptyHeaderCell.decorators = [
        { type: Directive, args: [{
                    selector: 'novo-simple-empty-header-cell',
                },] }
    ];
    /** @nocollapse */
    NovoSimpleEmptyHeaderCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NovoSimpleEmptyHeaderCell.propDecorators = {
        role: [{ type: HostBinding, args: ['attr.role',] }]
    };
    return NovoSimpleEmptyHeaderCell;
}(_NovoHeaderCell));
export { NovoSimpleEmptyHeaderCell };
if (false) {
    /** @type {?} */
    NovoSimpleEmptyHeaderCell.prototype.role;
}
var NovoSimpleCheckboxHeaderCell = /** @class */ (function (_super) {
    tslib_1.__extends(NovoSimpleCheckboxHeaderCell, _super);
    function NovoSimpleCheckboxHeaderCell(columnDef, elementRef, renderer, ref, _selection) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        _this._selection = _selection;
        _this.role = 'columnheader';
        _this.selectAll = false;
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', "novo-checkbox-column-header-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, "novo-checkbox-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, 'novo-simple-checkbox-header-cell');
        _this.selectAllSubscription = _selection.novoSelectAllToggle.subscribe(function (value) {
            _this.selectAll = value;
            ref.markForCheck();
        });
        return _this;
    }
    /**
     * @return {?}
     */
    NovoSimpleCheckboxHeaderCell.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.selectAllSubscription.unsubscribe();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoSimpleCheckboxHeaderCell.prototype.toggle = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._selection.selectAll(value);
    };
    NovoSimpleCheckboxHeaderCell.decorators = [
        { type: Component, args: [{
                    selector: 'novo-simple-checkbox-header-cell',
                    template: "<novo-checkbox [(ngModel)]=\"selectAll\" (ngModelChange)=\"toggle($event)\"></novo-checkbox>"
                }] }
    ];
    /** @nocollapse */
    NovoSimpleCheckboxHeaderCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: NovoSelection, decorators: [{ type: Optional }] }
    ]; };
    NovoSimpleCheckboxHeaderCell.propDecorators = {
        role: [{ type: HostBinding, args: ['attr.role',] }]
    };
    return NovoSimpleCheckboxHeaderCell;
}(_NovoHeaderCell));
export { NovoSimpleCheckboxHeaderCell };
if (false) {
    /** @type {?} */
    NovoSimpleCheckboxHeaderCell.prototype.role;
    /** @type {?} */
    NovoSimpleCheckboxHeaderCell.prototype.selectAll;
    /** @type {?} */
    NovoSimpleCheckboxHeaderCell.prototype.selectAllSubscription;
    /** @type {?} */
    NovoSimpleCheckboxHeaderCell.prototype._selection;
}
/**
 * @template T
 */
var NovoSimpleCell = /** @class */ (function (_super) {
    tslib_1.__extends(NovoSimpleCell, _super);
    function NovoSimpleCell(columnDef, elementRef, renderer) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.role = 'gridcell';
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', "novo-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, "novo-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, 'novo-simple-cell');
        return _this;
    }
    /**
     * @return {?}
     */
    NovoSimpleCell.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.column.customClass) {
            this.renderer.addClass(this.elementRef.nativeElement, this.column.customClass(this.row));
        }
        if (this.column.width) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', this.column.width + "px");
            this.renderer.setStyle(this.elementRef.nativeElement, 'max-width', this.column.width + "px");
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.column.width + "px");
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoSimpleCell.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        Helpers.swallowEvent(event);
        if (this.column.onClick) {
            this.column.onClick(this.row);
        }
        return;
    };
    NovoSimpleCell.decorators = [
        { type: Component, args: [{
                    selector: 'novo-simple-cell',
                    template: "\n    <span [class.clickable]=\"!!column.onClick\" (click)=\"onClick($event)\" #span>{{ column.renderer(row) }}</span>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NovoSimpleCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NovoSimpleCell.propDecorators = {
        role: [{ type: HostBinding, args: ['attr.role',] }],
        row: [{ type: Input }],
        column: [{ type: Input }],
        spanElement: [{ type: ViewChild, args: ['span',] }]
    };
    return NovoSimpleCell;
}(_NovoCell));
export { NovoSimpleCell };
if (false) {
    /** @type {?} */
    NovoSimpleCell.prototype.role;
    /** @type {?} */
    NovoSimpleCell.prototype.row;
    /** @type {?} */
    NovoSimpleCell.prototype.column;
    /** @type {?} */
    NovoSimpleCell.prototype.spanElement;
    /** @type {?} */
    NovoSimpleCell.prototype.elementRef;
    /** @type {?} */
    NovoSimpleCell.prototype.renderer;
}
var NovoSimpleCheckboxCell = /** @class */ (function (_super) {
    tslib_1.__extends(NovoSimpleCheckboxCell, _super);
    function NovoSimpleCheckboxCell(columnDef, elementRef, renderer, _selection) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        _this.columnDef = columnDef;
        _this._selection = _selection;
        _this.role = 'gridcell';
        _this.selected = false;
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', "novo-checkbox-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, "novo-checkbox-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, 'novo-simple-checkbox-cell');
        _this.selectAllSubscription = _selection.novoSelectAllToggle.subscribe(function (value) {
            _this.selected = value;
        });
        return _this;
    }
    /**
     * @return {?}
     */
    NovoSimpleCheckboxCell.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._selection.register(this.row.id || this.index, this.row);
        this.selected = this._selection.state.selectedRows.has(this.row.id || this.index);
    };
    /**
     * @return {?}
     */
    NovoSimpleCheckboxCell.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._selection.deregister(this.row.id || this.index);
        this.selectAllSubscription.unsubscribe();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NovoSimpleCheckboxCell.prototype.toggle = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._selection.toggle(this.row.id || this.index, value, this.row);
    };
    NovoSimpleCheckboxCell.decorators = [
        { type: Component, args: [{
                    selector: 'novo-simple-checkbox-cell',
                    template: "\n    <novo-checkbox [ngModel]=\"selected\" (ngModelChange)=\"toggle($event)\"></novo-checkbox>\n  "
                }] }
    ];
    /** @nocollapse */
    NovoSimpleCheckboxCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NovoSelection, decorators: [{ type: Optional }] }
    ]; };
    NovoSimpleCheckboxCell.propDecorators = {
        role: [{ type: HostBinding, args: ['attr.role',] }],
        row: [{ type: Input }],
        index: [{ type: Input }]
    };
    return NovoSimpleCheckboxCell;
}(_NovoCell));
export { NovoSimpleCheckboxCell };
if (false) {
    /** @type {?} */
    NovoSimpleCheckboxCell.prototype.role;
    /** @type {?} */
    NovoSimpleCheckboxCell.prototype.row;
    /** @type {?} */
    NovoSimpleCheckboxCell.prototype.index;
    /** @type {?} */
    NovoSimpleCheckboxCell.prototype.selected;
    /** @type {?} */
    NovoSimpleCheckboxCell.prototype.selectAllSubscription;
    /** @type {?} */
    NovoSimpleCheckboxCell.prototype.columnDef;
    /** @type {?} */
    NovoSimpleCheckboxCell.prototype._selection;
}
/**
 * @template T
 */
var NovoSimpleActionCell = /** @class */ (function (_super) {
    tslib_1.__extends(NovoSimpleActionCell, _super);
    function NovoSimpleActionCell(columnDef, elementRef, renderer, labels) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.labels = labels;
        _this.role = 'gridcell';
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', "novo-action-column-" + columnDef.cssClassFriendlyName);
        return _this;
    }
    /**
     * @return {?}
     */
    NovoSimpleActionCell.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.column.options) {
            this.renderer.addClass(this.elementRef.nativeElement, 'novo-simple-dropdown-cell');
        }
        else {
            this.renderer.addClass(this.elementRef.nativeElement, 'novo-simple-button-cell');
        }
    };
    /**
     * @param {?} check
     * @param {?} row
     * @return {?}
     */
    NovoSimpleActionCell.prototype.isDisabled = /**
     * @param {?} check
     * @param {?} row
     * @return {?}
     */
    function (check, row) {
        if (check.disabled === true) {
            return true;
        }
        if (check.disabledCheck) {
            return check.disabledCheck(row);
        }
        return false;
    };
    NovoSimpleActionCell.decorators = [
        { type: Component, args: [{
                    selector: 'novo-simple-action-cell',
                    template: "\n    <ng-container *ngIf=\"!column.options\">\n      <button theme=\"icon\" [icon]=\"column.icon\" (click)=\"column.onClick(row)\" [disabled]=\"isDisabled(column, row)\"></button>\n    </ng-container>\n    <ng-container *ngIf=\"column.options\">\n      <novo-dropdown parentScrollSelector=\".novo-simple-table\" containerClass=\"novo-table-dropdown-cell\">\n        <button type=\"button\" theme=\"dialogue\" icon=\"collapse\" inverse>{{ column.label || labels.actions }}</button>\n        <list>\n          <item *ngFor=\"let option of column.options\" (action)=\"option.onClick(row)\" [disabled]=\"isDisabled(option, row)\">\n            <span [attr.data-automation-id]=\"option.label\">{{ option.label }}</span>\n          </item>\n        </list>\n      </novo-dropdown>\n    </ng-container>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NovoSimpleActionCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NovoLabelService }
    ]; };
    NovoSimpleActionCell.propDecorators = {
        role: [{ type: HostBinding, args: ['attr.role',] }],
        row: [{ type: Input }],
        column: [{ type: Input }]
    };
    return NovoSimpleActionCell;
}(_NovoCell));
export { NovoSimpleActionCell };
if (false) {
    /** @type {?} */
    NovoSimpleActionCell.prototype.role;
    /** @type {?} */
    NovoSimpleActionCell.prototype.row;
    /** @type {?} */
    NovoSimpleActionCell.prototype.column;
    /** @type {?} */
    NovoSimpleActionCell.prototype.elementRef;
    /** @type {?} */
    NovoSimpleActionCell.prototype.renderer;
    /** @type {?} */
    NovoSimpleActionCell.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBR0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3hHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFdkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7OztBQUdyRSxNQUFNLEtBQU8sWUFBWSxHQUFHLFVBQVU7O0FBQ3RDLE1BQU0sS0FBTyxrQkFBa0IsR0FBRyxnQkFBZ0I7O0FBQ2xELE1BQU0sS0FBTyxjQUFjLEdBQUcsWUFBWTs7QUFDMUMsTUFBTSxLQUFPLGVBQWUsR0FBRyxhQUFhOztBQUM1QyxNQUFNLEtBQU8sU0FBUyxHQUFHLE9BQU87QUFFaEM7SUFJdUMsNkNBQVk7SUFKbkQ7O0lBSXFELENBQUM7O2dCQUpyRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxDQUFDO2lCQUNyRTs7SUFDb0Qsd0JBQUM7Q0FBQSxBQUp0RCxDQUl1QyxZQUFZLEdBQUc7U0FBekMsaUJBQWlCO0FBRTlCO0lBSTZDLG1EQUFrQjtJQUovRDs7SUFJaUUsQ0FBQzs7Z0JBSmpFLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQztpQkFDakY7O0lBQ2dFLDhCQUFDO0NBQUEsQUFKbEUsQ0FJNkMsa0JBQWtCLEdBQUc7U0FBckQsdUJBQXVCO0FBRXBDO0lBSXlDLCtDQUFjO0lBSnZEOztJQU9BLENBQUM7O2dCQVBBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLENBQUM7aUJBQ3pFOzs7dUJBRUUsS0FBSyxTQUFDLHFCQUFxQjs7SUFFOUIsMEJBQUM7Q0FBQSxBQVBELENBSXlDLGNBQWMsR0FHdEQ7U0FIWSxtQkFBbUI7OztJQUM5QixtQ0FDYTs7Ozs7QUFHZjtJQUc2QyxnREFBZTtJQU8xRCw4QkFBWSxTQUF1QixFQUFVLFVBQXNCLEVBQVUsUUFBbUI7UUFBaEcsWUFDRSxrQkFBTSxTQUFTLEVBQUUsVUFBVSxDQUFDLFNBSTdCO1FBTDRDLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQUx6RixVQUFJLEdBQUcsY0FBYyxDQUFDO1FBTzNCLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSx3QkFBc0IsU0FBUyxDQUFDLG9CQUFzQixDQUFDLENBQUM7UUFDOUgsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGlCQUFlLFNBQVMsQ0FBQyxvQkFBc0IsQ0FBQyxDQUFDO1FBQzdGLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDOztJQUN6RSxDQUFDOzs7O0lBRU0sdUNBQVE7OztJQUFmO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE9BQUksQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBSyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssT0FBSSxDQUFDLENBQUM7WUFDN0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxPQUFJLENBQUMsQ0FBQztTQUMxRjtJQUNILENBQUM7O2dCQXZCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtpQkFDcEM7Ozs7Z0JBdEM2QixZQUFZO2dCQVR4QyxVQUFVO2dCQU1WLFNBQVM7Ozt1QkEyQ1IsV0FBVyxTQUFDLFdBQVc7eUJBR3ZCLEtBQUs7O0lBaUJSLDJCQUFDO0NBQUEsQUF4QkQsQ0FHNkMsZUFBZSxHQXFCM0Q7U0FyQlksb0JBQW9COzs7SUFDL0Isb0NBQzZCOztJQUU3QixzQ0FDb0M7O0lBRUMsMENBQThCOztJQUFFLHdDQUEyQjs7QUFnQmxHO0lBRytDLHFEQUFlO0lBSTVELG1DQUFZLFNBQXVCLEVBQUUsVUFBc0IsRUFBRSxRQUFtQjtRQUFoRixZQUNFLGtCQUFNLFNBQVMsRUFBRSxVQUFVLENBQUMsU0FJN0I7UUFQTSxVQUFJLEdBQUcsY0FBYyxDQUFDO1FBSTNCLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSx3QkFBc0IsU0FBUyxDQUFDLG9CQUFzQixDQUFDLENBQUM7UUFDOUgsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGlCQUFlLFNBQVMsQ0FBQyxvQkFBc0IsQ0FBQyxDQUFDO1FBQzdGLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDOztJQUMvRSxDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtpQkFDMUM7Ozs7Z0JBaEU2QixZQUFZO2dCQVR4QyxVQUFVO2dCQU1WLFNBQVM7Ozt1QkFxRVIsV0FBVyxTQUFDLFdBQVc7O0lBUzFCLGdDQUFDO0NBQUEsQUFiRCxDQUcrQyxlQUFlLEdBVTdEO1NBVlkseUJBQXlCOzs7SUFDcEMseUNBQzZCOztBQVUvQjtJQUlrRCx3REFBZTtJQU8vRCxzQ0FDRSxTQUF1QixFQUN2QixVQUFzQixFQUN0QixRQUFtQixFQUNuQixHQUFzQixFQUNGLFVBQXlCO1FBTC9DLFlBT0Usa0JBQU0sU0FBUyxFQUFFLFVBQVUsQ0FBQyxTQVM3QjtRQVhxQixnQkFBVSxHQUFWLFVBQVUsQ0FBZTtRQVZ4QyxVQUFJLEdBQUcsY0FBYyxDQUFDO1FBRXRCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFXaEMsUUFBUSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLG9CQUFvQixFQUFFLGlDQUErQixTQUFTLENBQUMsb0JBQXNCLENBQUMsQ0FBQztRQUN2SSxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsMEJBQXdCLFNBQVMsQ0FBQyxvQkFBc0IsQ0FBQyxDQUFDO1FBQ3RHLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO1FBRWhGLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxVQUFVLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBYztZQUNuRixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7O0lBQ0wsQ0FBQzs7OztJQUVNLGtEQUFXOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFTSw2Q0FBTTs7OztJQUFiLFVBQWMsS0FBYztRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOztnQkFuQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQ0FBa0M7b0JBQzVDLFFBQVEsRUFBRSw4RkFBMEY7aUJBQ3JHOzs7O2dCQWhGNkIsWUFBWTtnQkFUeEMsVUFBVTtnQkFNVixTQUFTO2dCQVRULGlCQUFpQjtnQkFlVixhQUFhLHVCQTBGakIsUUFBUTs7O3VCQVhWLFdBQVcsU0FBQyxXQUFXOztJQStCMUIsbUNBQUM7Q0FBQSxBQXBDRCxDQUlrRCxlQUFlLEdBZ0NoRTtTQWhDWSw0QkFBNEI7OztJQUN2Qyw0Q0FDNkI7O0lBRTdCLGlEQUFrQzs7SUFDbEMsNkRBQTRDOztJQU8xQyxrREFBNkM7Ozs7O0FBc0JqRDtJQU91QywwQ0FBUztJQVk5Qyx3QkFBWSxTQUF1QixFQUFVLFVBQXNCLEVBQVUsUUFBbUI7UUFBaEcsWUFDRSxrQkFBTSxTQUFTLEVBQUUsVUFBVSxDQUFDLFNBSTdCO1FBTDRDLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQVZ6RixVQUFJLEdBQUcsVUFBVSxDQUFDO1FBWXZCLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxpQkFBZSxTQUFTLENBQUMsb0JBQXNCLENBQUMsQ0FBQztRQUN2SCxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsaUJBQWUsU0FBUyxDQUFDLG9CQUFzQixDQUFDLENBQUM7UUFDN0YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDLENBQUM7O0lBQ2xFLENBQUM7Ozs7SUFFTSxpQ0FBUTs7O0lBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzFGO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE9BQUksQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBSyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssT0FBSSxDQUFDLENBQUM7WUFDN0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxPQUFJLENBQUMsQ0FBQztZQUN6RixzRkFBc0Y7WUFDdEYsc0dBQXNHO1lBQ3RHLHNHQUFzRztZQUN0RyxrR0FBa0c7U0FDbkc7UUFDRCxTQUFTO1FBQ1QsNkZBQTZGO1FBQzdGLGtJQUFrSTtRQUNsSSxrSUFBa0k7UUFDbEksOEhBQThIO1FBQzlILElBQUk7SUFDTixDQUFDOzs7OztJQUVNLGdDQUFPOzs7O0lBQWQsVUFBZSxLQUFpQjtRQUM5QixPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsT0FBTztJQUNULENBQUM7O2dCQXJERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLDRIQUVUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkF6SDZCLFlBQVk7Z0JBVHhDLFVBQVU7Z0JBTVYsU0FBUzs7O3VCQThIUixXQUFXLFNBQUMsV0FBVztzQkFHdkIsS0FBSzt5QkFFTCxLQUFLOzhCQUdMLFNBQVMsU0FBQyxNQUFNOztJQXNDbkIscUJBQUM7Q0FBQSxBQXRERCxDQU91QyxTQUFTLEdBK0MvQztTQS9DWSxjQUFjOzs7SUFDekIsOEJBQ3lCOztJQUV6Qiw2QkFDZ0I7O0lBQ2hCLGdDQUNvQzs7SUFFcEMscUNBQ2dDOztJQUVLLG9DQUE4Qjs7SUFBRSxrQ0FBMkI7O0FBcUNsRztJQU00QyxrREFBUztJQVluRCxnQ0FBbUIsU0FBdUIsRUFBRSxVQUFzQixFQUFFLFFBQW1CLEVBQXFCLFVBQXlCO1FBQXJJLFlBQ0Usa0JBQU0sU0FBUyxFQUFFLFVBQVUsQ0FBQyxTQVE3QjtRQVRrQixlQUFTLEdBQVQsU0FBUyxDQUFjO1FBQWtFLGdCQUFVLEdBQVYsVUFBVSxDQUFlO1FBVjlILFVBQUksR0FBRyxVQUFVLENBQUM7UUFPbEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUsvQixRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsMEJBQXdCLFNBQVMsQ0FBQyxvQkFBc0IsQ0FBQyxDQUFDO1FBQ2hJLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSwwQkFBd0IsU0FBUyxDQUFDLG9CQUFzQixDQUFDLENBQUM7UUFDdEcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFFekUsS0FBSSxDQUFDLHFCQUFxQixHQUFHLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFjO1lBQ25GLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDOztJQUNMLENBQUM7Ozs7SUFFTSx5Q0FBUTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BGLENBQUM7Ozs7SUFFTSw0Q0FBVzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVNLHVDQUFNOzs7O0lBQWIsVUFBYyxLQUFjO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyRSxDQUFDOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSxxR0FFVDtpQkFDRjs7OztnQkFoTDZCLFlBQVk7Z0JBVHhDLFVBQVU7Z0JBTVYsU0FBUztnQkFNRixhQUFhLHVCQTBMc0UsUUFBUTs7O3VCQVhqRyxXQUFXLFNBQUMsV0FBVztzQkFHdkIsS0FBSzt3QkFFTCxLQUFLOztJQThCUiw2QkFBQztDQUFBLEFBMUNELENBTTRDLFNBQVMsR0FvQ3BEO1NBcENZLHNCQUFzQjs7O0lBQ2pDLHNDQUN5Qjs7SUFFekIscUNBQ2dCOztJQUNoQix1Q0FDa0I7O0lBRWxCLDBDQUFpQzs7SUFDakMsdURBQTRDOztJQUVoQywyQ0FBOEI7O0lBQStDLDRDQUE0Qzs7Ozs7QUEwQnZJO0lBbUI2QyxnREFBUztJQVNwRCw4QkFBWSxTQUF1QixFQUFVLFVBQXNCLEVBQVUsUUFBbUIsRUFBUyxNQUF3QjtRQUFqSSxZQUNFLGtCQUFNLFNBQVMsRUFBRSxVQUFVLENBQUMsU0FFN0I7UUFINEMsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxjQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVMsWUFBTSxHQUFOLE1BQU0sQ0FBa0I7UUFQMUgsVUFBSSxHQUFHLFVBQVUsQ0FBQztRQVN2QixRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsd0JBQXNCLFNBQVMsQ0FBQyxvQkFBc0IsQ0FBQyxDQUFDOztJQUNoSSxDQUFDOzs7O0lBRU0sdUNBQVE7OztJQUFmO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO1NBQ3BGO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1NBQ2xGO0lBQ0gsQ0FBQzs7Ozs7O0lBRU0seUNBQVU7Ozs7O0lBQWpCLFVBQWtCLEtBQW9FLEVBQUUsR0FBTTtRQUM1RixJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDdkIsT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkFqREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSxreUJBY1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQXpPNkIsWUFBWTtnQkFUeEMsVUFBVTtnQkFNVixTQUFTO2dCQVNGLGdCQUFnQjs7O3VCQXFPdEIsV0FBVyxTQUFDLFdBQVc7c0JBR3ZCLEtBQUs7eUJBRUwsS0FBSzs7SUF5QlIsMkJBQUM7Q0FBQSxBQWxERCxDQW1CNkMsU0FBUyxHQStCckQ7U0EvQlksb0JBQW9COzs7SUFDL0Isb0NBQ3lCOztJQUV6QixtQ0FDYzs7SUFDZCxzQ0FDMEM7O0lBRUwsMENBQThCOztJQUFFLHdDQUEyQjs7SUFBRSxzQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrQ2VsbCwgQ2RrQ2VsbERlZiwgQ2RrQ29sdW1uRGVmLCBDZGtIZWFkZXJDZWxsLCBDZGtIZWFkZXJDZWxsRGVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOb3ZvU2VsZWN0aW9uIH0gZnJvbSAnLi9zb3J0JztcbmltcG9ydCB7IFNpbXBsZVRhYmxlQWN0aW9uQ29sdW1uLCBTaW1wbGVUYWJsZUFjdGlvbkNvbHVtbk9wdGlvbiwgU2ltcGxlVGFibGVDb2x1bW4gfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbi8qKiBXb3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNzg0OSAqL1xuZXhwb3J0IGNvbnN0IF9Ob3ZvQ2VsbERlZiA9IENka0NlbGxEZWY7XG5leHBvcnQgY29uc3QgX05vdm9IZWFkZXJDZWxsRGVmID0gQ2RrSGVhZGVyQ2VsbERlZjtcbmV4cG9ydCBjb25zdCBfTm92b0NvbHVtbkRlZiA9IENka0NvbHVtbkRlZjtcbmV4cG9ydCBjb25zdCBfTm92b0hlYWRlckNlbGwgPSBDZGtIZWFkZXJDZWxsO1xuZXhwb3J0IGNvbnN0IF9Ob3ZvQ2VsbCA9IENka0NlbGw7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvU2ltcGxlQ2VsbERlZl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka0NlbGxEZWYsIHVzZUV4aXN0aW5nOiBOb3ZvU2ltcGxlQ2VsbERlZiB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUNlbGxEZWYgZXh0ZW5kcyBfTm92b0NlbGxEZWYge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TaW1wbGVIZWFkZXJDZWxsRGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrSGVhZGVyQ2VsbERlZiwgdXNlRXhpc3Rpbmc6IE5vdm9TaW1wbGVIZWFkZXJDZWxsRGVmIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlSGVhZGVyQ2VsbERlZiBleHRlbmRzIF9Ob3ZvSGVhZGVyQ2VsbERlZiB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1NpbXBsZUNvbHVtbkRlZl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka0NvbHVtbkRlZiwgdXNlRXhpc3Rpbmc6IE5vdm9TaW1wbGVDb2x1bW5EZWYgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVDb2x1bW5EZWYgZXh0ZW5kcyBfTm92b0NvbHVtbkRlZiB7XG4gIEBJbnB1dCgnbm92b1NpbXBsZUNvbHVtbkRlZicpXG4gIG5hbWU6IHN0cmluZztcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbm92by1zaW1wbGUtaGVhZGVyLWNlbGwnLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlSGVhZGVyQ2VsbDxUPiBleHRlbmRzIF9Ob3ZvSGVhZGVyQ2VsbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAnY29sdW1uaGVhZGVyJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY29sdW1uOiBTaW1wbGVUYWJsZUNvbHVtbjxUPjtcblxuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWF1dG9tYXRpb24taWQnLCBgbm92by1jb2x1bW4taGVhZGVyLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG5vdm8tY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tc2ltcGxlLWhlYWRlci1jZWxsJyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sdW1uLndpZHRoKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWluLXdpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXgtd2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbm92by1zaW1wbGUtZW1wdHktaGVhZGVyLWNlbGwnLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlRW1wdHlIZWFkZXJDZWxsIGV4dGVuZHMgX05vdm9IZWFkZXJDZWxsIHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdjb2x1bW5oZWFkZXInO1xuXG4gIGNvbnN0cnVjdG9yKGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1hdXRvbWF0aW9uLWlkJywgYG5vdm8tY29sdW1uLWhlYWRlci0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBub3ZvLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLXNpbXBsZS1lbXB0eS1oZWFkZXItY2VsbCcpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLWNoZWNrYm94LWhlYWRlci1jZWxsJyxcbiAgdGVtcGxhdGU6IGA8bm92by1jaGVja2JveCBbKG5nTW9kZWwpXT1cInNlbGVjdEFsbFwiIChuZ01vZGVsQ2hhbmdlKT1cInRvZ2dsZSgkZXZlbnQpXCI+PC9ub3ZvLWNoZWNrYm94PmAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVDaGVja2JveEhlYWRlckNlbGwgZXh0ZW5kcyBfTm92b0hlYWRlckNlbGwgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ2NvbHVtbmhlYWRlcic7XG5cbiAgcHVibGljIHNlbGVjdEFsbDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHNlbGVjdEFsbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICByZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3NlbGVjdGlvbjogTm92b1NlbGVjdGlvbixcbiAgKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1hdXRvbWF0aW9uLWlkJywgYG5vdm8tY2hlY2tib3gtY29sdW1uLWhlYWRlci0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBub3ZvLWNoZWNrYm94LWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLXNpbXBsZS1jaGVja2JveC1oZWFkZXItY2VsbCcpO1xuXG4gICAgdGhpcy5zZWxlY3RBbGxTdWJzY3JpcHRpb24gPSBfc2VsZWN0aW9uLm5vdm9TZWxlY3RBbGxUb2dnbGUuc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RBbGwgPSB2YWx1ZTtcbiAgICAgIHJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdEFsbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGlvbi5zZWxlY3RBbGwodmFsdWUpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuIFtjbGFzcy5jbGlja2FibGVdPVwiISFjb2x1bW4ub25DbGlja1wiIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIiAjc3Bhbj57eyBjb2x1bW4ucmVuZGVyZXIocm93KSB9fTwvc3Bhbj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVDZWxsPFQ+IGV4dGVuZHMgX05vdm9DZWxsIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdncmlkY2VsbCc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHJvdzogYW55O1xuICBASW5wdXQoKVxuICBwdWJsaWMgY29sdW1uOiBTaW1wbGVUYWJsZUNvbHVtbjxUPjtcblxuICBAVmlld0NoaWxkKCdzcGFuJylcbiAgcHJpdmF0ZSBzcGFuRWxlbWVudDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWF1dG9tYXRpb24taWQnLCBgbm92by1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbm92by1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1zaW1wbGUtY2VsbCcpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbHVtbi5jdXN0b21DbGFzcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jb2x1bW4uY3VzdG9tQ2xhc3ModGhpcy5yb3cpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sdW1uLndpZHRoKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWluLXdpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXgtd2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIC8vIFRPRE8gLSB0aGlzIGluaGliaXRzIHJlc2l6aW5nIHRoZSBwYWdlIGFmdGVyIHRoZSBpbml0aWFsIGxvYWQgLS0gYnV0IGRvIHdlIGNhcmU/IT8hXG4gICAgICAvLyB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc3BhbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ21pbi13aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRoIC0gMjB9cHhgKTtcbiAgICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGFuRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbWF4LXdpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGggLSAyMH1weGApO1xuICAgICAgLy8gdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwYW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRoIC0gMjB9cHhgKTtcbiAgICB9XG4gICAgLy8gZWxzZSB7XG4gICAgLy8gICAgIC8vIFRPRE8gLSB0aGlzIGluaGliaXRzIHJlc2l6aW5nIHRoZSBwYWdlIGFmdGVyIHRoZSBpbml0aWFsIGxvYWQgLS0gYnV0IGRvIHdlIGNhcmU/IT8hXG4gICAgLy8gICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGFuRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbWluLXdpZHRoJywgYCR7dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggLSAyMH1weGApO1xuICAgIC8vICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc3BhbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ21heC13aWR0aCcsIGAke3RoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC0gMjB9cHhgKTtcbiAgICAvLyAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwYW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC0gMjB9cHhgKTtcbiAgICAvLyB9XG4gIH1cblxuICBwdWJsaWMgb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBpZiAodGhpcy5jb2x1bW4ub25DbGljaykge1xuICAgICAgdGhpcy5jb2x1bW4ub25DbGljayh0aGlzLnJvdyk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS1jaGVja2JveC1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bm92by1jaGVja2JveCBbbmdNb2RlbF09XCJzZWxlY3RlZFwiIChuZ01vZGVsQ2hhbmdlKT1cInRvZ2dsZSgkZXZlbnQpXCI+PC9ub3ZvLWNoZWNrYm94PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlQ2hlY2tib3hDZWxsIGV4dGVuZHMgX05vdm9DZWxsIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ2dyaWRjZWxsJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcm93OiBhbnk7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpbmRleDogYW55O1xuXG4gIHB1YmxpYyBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHNlbGVjdEFsbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgQE9wdGlvbmFsKCkgcHVibGljIF9zZWxlY3Rpb246IE5vdm9TZWxlY3Rpb24pIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWF1dG9tYXRpb24taWQnLCBgbm92by1jaGVja2JveC1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbm92by1jaGVja2JveC1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1zaW1wbGUtY2hlY2tib3gtY2VsbCcpO1xuXG4gICAgdGhpcy5zZWxlY3RBbGxTdWJzY3JpcHRpb24gPSBfc2VsZWN0aW9uLm5vdm9TZWxlY3RBbGxUb2dnbGUuc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGlvbi5yZWdpc3Rlcih0aGlzLnJvdy5pZCB8fCB0aGlzLmluZGV4LCB0aGlzLnJvdyk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuX3NlbGVjdGlvbi5zdGF0ZS5zZWxlY3RlZFJvd3MuaGFzKHRoaXMucm93LmlkIHx8IHRoaXMuaW5kZXgpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGlvbi5kZXJlZ2lzdGVyKHRoaXMucm93LmlkIHx8IHRoaXMuaW5kZXgpO1xuICAgIHRoaXMuc2VsZWN0QWxsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0aW9uLnRvZ2dsZSh0aGlzLnJvdy5pZCB8fCB0aGlzLmluZGV4LCB2YWx1ZSwgdGhpcy5yb3cpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLWFjdGlvbi1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5vcHRpb25zXCI+XG4gICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIFtpY29uXT1cImNvbHVtbi5pY29uXCIgKGNsaWNrKT1cImNvbHVtbi5vbkNsaWNrKHJvdylcIiBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZChjb2x1bW4sIHJvdylcIj48L2J1dHRvbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLm9wdGlvbnNcIj5cbiAgICAgIDxub3ZvLWRyb3Bkb3duIHBhcmVudFNjcm9sbFNlbGVjdG9yPVwiLm5vdm8tc2ltcGxlLXRhYmxlXCIgY29udGFpbmVyQ2xhc3M9XCJub3ZvLXRhYmxlLWRyb3Bkb3duLWNlbGxcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGhlbWU9XCJkaWFsb2d1ZVwiIGljb249XCJjb2xsYXBzZVwiIGludmVyc2U+e3sgY29sdW1uLmxhYmVsIHx8IGxhYmVscy5hY3Rpb25zIH19PC9idXR0b24+XG4gICAgICAgIDxsaXN0PlxuICAgICAgICAgIDxpdGVtICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29sdW1uLm9wdGlvbnNcIiAoYWN0aW9uKT1cIm9wdGlvbi5vbkNsaWNrKHJvdylcIiBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZChvcHRpb24sIHJvdylcIj5cbiAgICAgICAgICAgIDxzcGFuIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJvcHRpb24ubGFiZWxcIj57eyBvcHRpb24ubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgPC9pdGVtPlxuICAgICAgICA8L2xpc3Q+XG4gICAgICA8L25vdm8tZHJvcGRvd24+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlQWN0aW9uQ2VsbDxUPiBleHRlbmRzIF9Ob3ZvQ2VsbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAnZ3JpZGNlbGwnO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByb3c6IFQ7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb2x1bW46IFNpbXBsZVRhYmxlQWN0aW9uQ29sdW1uPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtYXV0b21hdGlvbi1pZCcsIGBub3ZvLWFjdGlvbi1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sdW1uLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLXNpbXBsZS1kcm9wZG93bi1jZWxsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLXNpbXBsZS1idXR0b24tY2VsbCcpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc0Rpc2FibGVkKGNoZWNrOiBTaW1wbGVUYWJsZUFjdGlvbkNvbHVtbjxUPiB8IFNpbXBsZVRhYmxlQWN0aW9uQ29sdW1uT3B0aW9uPFQ+LCByb3c6IFQpOiBib29sZWFuIHtcbiAgICBpZiAoY2hlY2suZGlzYWJsZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoY2hlY2suZGlzYWJsZWRDaGVjaykge1xuICAgICAgcmV0dXJuIGNoZWNrLmRpc2FibGVkQ2hlY2socm93KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=