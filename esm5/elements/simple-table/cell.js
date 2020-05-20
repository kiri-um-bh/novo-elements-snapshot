/**
 * @fileoverview added by tsickle
 * Generated from: elements/simple-table/cell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CdkCell, CdkCellDef, CdkColumnDef, CdkHeaderCell, CdkHeaderCellDef } from '@angular/cdk/table';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, HostBinding, Input, Optional, Renderer2 } from '@angular/core';
import { NovoLabelService } from '../../services/novo-label-service';
import { Helpers } from '../../utils/Helpers';
import { NovoSelection } from './sort';
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
        _this.selectAllSubscription = _selection.novoSelectAllToggle.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.selectAll = value;
            ref.markForCheck();
        }));
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
        column: [{ type: Input }]
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
        _this.selectAllSubscription = _selection.novoSelectAllToggle.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.selected = value;
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQXFCLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekssT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7O0FBSXZDLE1BQU0sS0FBTyxZQUFZLEdBQUcsVUFBVTs7QUFDdEMsTUFBTSxLQUFPLGtCQUFrQixHQUFHLGdCQUFnQjs7QUFDbEQsTUFBTSxLQUFPLGNBQWMsR0FBRyxZQUFZOztBQUMxQyxNQUFNLEtBQU8sZUFBZSxHQUFHLGFBQWE7O0FBQzVDLE1BQU0sS0FBTyxTQUFTLEdBQUcsT0FBTztBQUVoQztJQUl1Qyw2Q0FBWTtJQUpuRDs7SUFJc0QsQ0FBQzs7Z0JBSnRELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLENBQUM7aUJBQ3JFOztJQUNxRCx3QkFBQztDQUFBLEFBSnZELENBSXVDLFlBQVksR0FBSTtTQUExQyxpQkFBaUI7QUFFOUI7SUFJNkMsbURBQWtCO0lBSi9EOztJQUlrRSxDQUFDOztnQkFKbEUs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O29CQUNuQyxRQUFRLEVBQUUsa3lCQWNUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkF2TzZCLFlBQVk7Z0JBQ2lDLFVBQVU7Z0JBQW1ELFNBQVM7Z0JBRXhJLGdCQUFnQjs7O3VCQXNPdEIsV0FBVyxTQUFDLFdBQVc7c0JBR3ZCLEtBQUs7eUJBRUwsS0FBSzs7SUF5QlIsMkJBQUM7Q0FBQSxBQWxERCxDQW1CNkMsU0FBUyxHQStCckQ7U0EvQlksb0JBQW9COzs7SUFDL0Isb0NBQ3lCOztJQUV6QixtQ0FDYzs7SUFDZCxzQ0FDMEM7Ozs7O0lBRUwsMENBQThCOzs7OztJQUFFLHdDQUEyQjs7SUFBRSxzQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtDZWxsLCBDZGtDZWxsRGVmLCBDZGtDb2x1bW5EZWYsIENka0hlYWRlckNlbGwsIENka0hlYWRlckNlbGxEZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IFNpbXBsZVRhYmxlQWN0aW9uQ29sdW1uLCBTaW1wbGVUYWJsZUFjdGlvbkNvbHVtbk9wdGlvbiwgU2ltcGxlVGFibGVDb2x1bW4gfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm92b1NlbGVjdGlvbiB9IGZyb20gJy4vc29ydCc7XG5cblxuLyoqIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE3ODQ5ICovXG5leHBvcnQgY29uc3QgX05vdm9DZWxsRGVmID0gQ2RrQ2VsbERlZjtcbmV4cG9ydCBjb25zdCBfTm92b0hlYWRlckNlbGxEZWYgPSBDZGtIZWFkZXJDZWxsRGVmO1xuZXhwb3J0IGNvbnN0IF9Ob3ZvQ29sdW1uRGVmID0gQ2RrQ29sdW1uRGVmO1xuZXhwb3J0IGNvbnN0IF9Ob3ZvSGVhZGVyQ2VsbCA9IENka0hlYWRlckNlbGw7XG5leHBvcnQgY29uc3QgX05vdm9DZWxsID0gQ2RrQ2VsbDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TaW1wbGVDZWxsRGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrQ2VsbERlZiwgdXNlRXhpc3Rpbmc6IE5vdm9TaW1wbGVDZWxsRGVmIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlQ2VsbERlZiBleHRlbmRzIF9Ob3ZvQ2VsbERlZiB7IH1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TaW1wbGVIZWFkZXJDZWxsRGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrSGVhZGVyQ2VsbERlZiwgdXNlRXhpc3Rpbmc6IE5vdm9TaW1wbGVIZWFkZXJDZWxsRGVmIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlSGVhZGVyQ2VsbERlZiBleHRlbmRzIF9Ob3ZvSGVhZGVyQ2VsbERlZiB7IH1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TaW1wbGVDb2x1bW5EZWZdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtDb2x1bW5EZWYsIHVzZUV4aXN0aW5nOiBOb3ZvU2ltcGxlQ29sdW1uRGVmIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlQ29sdW1uRGVmIGV4dGVuZHMgX05vdm9Db2x1bW5EZWYge1xuICBASW5wdXQoJ25vdm9TaW1wbGVDb2x1bW5EZWYnKVxuICBuYW1lOiBzdHJpbmc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLWhlYWRlci1jZWxsJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUhlYWRlckNlbGw8VD4gZXh0ZW5kcyBfTm92b0hlYWRlckNlbGwgaW1wbGVtZW50cyBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ2NvbHVtbmhlYWRlcic7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGNvbHVtbjogU2ltcGxlVGFibGVDb2x1bW48VD47XG5cbiAgY29uc3RydWN0b3IoY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1hdXRvbWF0aW9uLWlkJywgYG5vdm8tY29sdW1uLWhlYWRlci0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBub3ZvLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLXNpbXBsZS1oZWFkZXItY2VsbCcpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbHVtbi53aWR0aCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21pbi13aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF4LXdpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRofXB4YCk7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLWVtcHR5LWhlYWRlci1jZWxsJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUVtcHR5SGVhZGVyQ2VsbCBleHRlbmRzIF9Ob3ZvSGVhZGVyQ2VsbCB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAnY29sdW1uaGVhZGVyJztcblxuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtYXV0b21hdGlvbi1pZCcsIGBub3ZvLWNvbHVtbi1oZWFkZXItJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbm92by1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1zaW1wbGUtZW1wdHktaGVhZGVyLWNlbGwnKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS1jaGVja2JveC1oZWFkZXItY2VsbCcsXG4gIHRlbXBsYXRlOiBgPG5vdm8tY2hlY2tib3ggWyhuZ01vZGVsKV09XCJzZWxlY3RBbGxcIiAobmdNb2RlbENoYW5nZSk9XCJ0b2dnbGUoJGV2ZW50KVwiPjwvbm92by1jaGVja2JveD5gLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlQ2hlY2tib3hIZWFkZXJDZWxsIGV4dGVuZHMgX05vdm9IZWFkZXJDZWxsIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdjb2x1bW5oZWFkZXInO1xuXG4gIHB1YmxpYyBzZWxlY3RBbGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzZWxlY3RBbGxTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb2x1bW5EZWY6IENka0NvbHVtbkRlZixcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9zZWxlY3Rpb246IE5vdm9TZWxlY3Rpb24sXG4gICkge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtYXV0b21hdGlvbi1pZCcsIGBub3ZvLWNoZWNrYm94LWNvbHVtbi1oZWFkZXItJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbm92by1jaGVja2JveC1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1zaW1wbGUtY2hlY2tib3gtaGVhZGVyLWNlbGwnKTtcblxuICAgIHRoaXMuc2VsZWN0QWxsU3Vic2NyaXB0aW9uID0gX3NlbGVjdGlvbi5ub3ZvU2VsZWN0QWxsVG9nZ2xlLnN1YnNjcmliZSgodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsID0gdmFsdWU7XG4gICAgICByZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RBbGxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3Rpb24uc2VsZWN0QWxsKHZhbHVlKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBbY2xhc3MuY2xpY2thYmxlXT1cIiEhY29sdW1uLm9uQ2xpY2tcIiAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCIgI3NwYW4+e3sgY29sdW1uLnJlbmRlcmVyKHJvdykgfX08L3NwYW4+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlQ2VsbDxUPiBleHRlbmRzIF9Ob3ZvQ2VsbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAnZ3JpZGNlbGwnO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByb3c6IGFueTtcbiAgQElucHV0KClcbiAgcHVibGljIGNvbHVtbjogU2ltcGxlVGFibGVDb2x1bW48VD47XG5cbiAgY29uc3RydWN0b3IoY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1hdXRvbWF0aW9uLWlkJywgYG5vdm8tY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG5vdm8tY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tc2ltcGxlLWNlbGwnKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2x1bW4uY3VzdG9tQ2xhc3MpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY29sdW1uLmN1c3RvbUNsYXNzKHRoaXMucm93KSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbHVtbi53aWR0aCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21pbi13aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF4LXdpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRofXB4YCk7XG4gICAgICAvLyBUT0RPIC0gdGhpcyBpbmhpYml0cyByZXNpemluZyB0aGUgcGFnZSBhZnRlciB0aGUgaW5pdGlhbCBsb2FkIC0tIGJ1dCBkbyB3ZSBjYXJlPyE/IVxuICAgICAgLy8gdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwYW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdtaW4td2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aCAtIDIwfXB4YCk7XG4gICAgICAvLyB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc3BhbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ21heC13aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRoIC0gMjB9cHhgKTtcbiAgICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGFuRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aCAtIDIwfXB4YCk7XG4gICAgfVxuICAgIC8vIGVsc2Uge1xuICAgIC8vICAgICAvLyBUT0RPIC0gdGhpcyBpbmhpYml0cyByZXNpemluZyB0aGUgcGFnZSBhZnRlciB0aGUgaW5pdGlhbCBsb2FkIC0tIGJ1dCBkbyB3ZSBjYXJlPyE/IVxuICAgIC8vICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc3BhbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ21pbi13aWR0aCcsIGAke3RoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC0gMjB9cHhgKTtcbiAgICAvLyAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwYW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdtYXgtd2lkdGgnLCBgJHt0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIDIwfXB4YCk7XG4gICAgLy8gICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGFuRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIDIwfXB4YCk7XG4gICAgLy8gfVxuICB9XG5cbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgaWYgKHRoaXMuY29sdW1uLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMuY29sdW1uLm9uQ2xpY2sodGhpcy5yb3cpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zaW1wbGUtY2hlY2tib3gtY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5vdm8tY2hlY2tib3ggW25nTW9kZWxdPVwic2VsZWN0ZWRcIiAobmdNb2RlbENoYW5nZSk9XCJ0b2dnbGUoJGV2ZW50KVwiPjwvbm92by1jaGVja2JveD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUNoZWNrYm94Q2VsbCBleHRlbmRzIF9Ob3ZvQ2VsbCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdncmlkY2VsbCc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHJvdzogYW55O1xuICBASW5wdXQoKVxuICBwdWJsaWMgaW5kZXg6IGFueTtcblxuICBwdWJsaWMgc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzZWxlY3RBbGxTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIEBPcHRpb25hbCgpIHB1YmxpYyBfc2VsZWN0aW9uOiBOb3ZvU2VsZWN0aW9uKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1hdXRvbWF0aW9uLWlkJywgYG5vdm8tY2hlY2tib3gtY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG5vdm8tY2hlY2tib3gtY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tc2ltcGxlLWNoZWNrYm94LWNlbGwnKTtcblxuICAgIHRoaXMuc2VsZWN0QWxsU3Vic2NyaXB0aW9uID0gX3NlbGVjdGlvbi5ub3ZvU2VsZWN0QWxsVG9nZ2xlLnN1YnNjcmliZSgodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3Rpb24ucmVnaXN0ZXIodGhpcy5yb3cuaWQgfHwgdGhpcy5pbmRleCwgdGhpcy5yb3cpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3Rpb24uc3RhdGUuc2VsZWN0ZWRSb3dzLmhhcyh0aGlzLnJvdy5pZCB8fCB0aGlzLmluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3Rpb24uZGVyZWdpc3Rlcih0aGlzLnJvdy5pZCB8fCB0aGlzLmluZGV4KTtcbiAgICB0aGlzLnNlbGVjdEFsbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGlvbi50b2dnbGUodGhpcy5yb3cuaWQgfHwgdGhpcy5pbmRleCwgdmFsdWUsIHRoaXMucm93KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS1hY3Rpb24tY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2x1bW4ub3B0aW9uc1wiPlxuICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBbaWNvbl09XCJjb2x1bW4uaWNvblwiIChjbGljayk9XCJjb2x1bW4ub25DbGljayhyb3cpXCIgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWQoY29sdW1uLCByb3cpXCI+PC9idXR0b24+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbi5vcHRpb25zXCI+XG4gICAgICA8bm92by1kcm9wZG93biBwYXJlbnRTY3JvbGxTZWxlY3Rvcj1cIi5ub3ZvLXNpbXBsZS10YWJsZVwiIGNvbnRhaW5lckNsYXNzPVwibm92by10YWJsZS1kcm9wZG93bi1jZWxsXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwiZGlhbG9ndWVcIiBpY29uPVwiY29sbGFwc2VcIiBpbnZlcnNlPnt7IGNvbHVtbi5sYWJlbCB8fCBsYWJlbHMuYWN0aW9ucyB9fTwvYnV0dG9uPlxuICAgICAgICA8bGlzdD5cbiAgICAgICAgICA8aXRlbSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbHVtbi5vcHRpb25zXCIgKGFjdGlvbik9XCJvcHRpb24ub25DbGljayhyb3cpXCIgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWQob3B0aW9uLCByb3cpXCI+XG4gICAgICAgICAgICA8c3BhbiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwib3B0aW9uLmxhYmVsXCI+e3sgb3B0aW9uLmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgPC9saXN0PlxuICAgICAgPC9ub3ZvLWRyb3Bkb3duPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUFjdGlvbkNlbGw8VD4gZXh0ZW5kcyBfTm92b0NlbGwgaW1wbGVtZW50cyBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ2dyaWRjZWxsJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcm93OiBUO1xuICBASW5wdXQoKVxuICBwdWJsaWMgY29sdW1uOiBTaW1wbGVUYWJsZUFjdGlvbkNvbHVtbjxUPjtcblxuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWF1dG9tYXRpb24taWQnLCBgbm92by1hY3Rpb24tY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbHVtbi5vcHRpb25zKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1zaW1wbGUtZHJvcGRvd24tY2VsbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1zaW1wbGUtYnV0dG9uLWNlbGwnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNEaXNhYmxlZChjaGVjazogU2ltcGxlVGFibGVBY3Rpb25Db2x1bW48VD4gfCBTaW1wbGVUYWJsZUFjdGlvbkNvbHVtbk9wdGlvbjxUPiwgcm93OiBUKTogYm9vbGVhbiB7XG4gICAgaWYgKGNoZWNrLmRpc2FibGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNoZWNrLmRpc2FibGVkQ2hlY2spIHtcbiAgICAgIHJldHVybiBjaGVjay5kaXNhYmxlZENoZWNrKHJvdyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19