import { __extends } from "tslib";
import { CdkCell, CdkCellDef, CdkColumnDef, CdkHeaderCell, CdkHeaderCellDef } from '@angular/cdk/table';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, HostBinding, Input, Optional, Renderer2 } from '@angular/core';
import { NovoLabelService } from '../../services/novo-label-service';
import { Helpers } from '../../utils/Helpers';
import { NovoSelection } from './sort';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
import * as i2 from "./sort";
import * as i3 from "../form/extras/checkbox/Checkbox";
import * as i4 from "@angular/forms";
import * as i5 from "../../services/novo-label-service";
import * as i6 from "@angular/common";
import * as i7 from "../button/Button";
import * as i8 from "../dropdown/Dropdown";
function NovoSimpleActionCell_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 1);
    i0.ɵɵlistener("click", function NovoSimpleActionCell_ng_container_0_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.column.onClick(ctx_r2.row); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r0.column.icon)("disabled", ctx_r0.isDisabled(ctx_r0.column, ctx_r0.row));
} }
function NovoSimpleActionCell_ng_container_1_item_5_Template(rf, ctx) { if (rf & 1) {
    var _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "item", 5);
    i0.ɵɵlistener("action", function NovoSimpleActionCell_ng_container_1_item_5_Template_item_action_0_listener() { i0.ɵɵrestoreView(_r7); var option_r5 = ctx.$implicit; var ctx_r6 = i0.ɵɵnextContext(2); return option_r5.onClick(ctx_r6.row); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r5 = ctx.$implicit;
    var ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r4.isDisabled(option_r5, ctx_r4.row));
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-automation-id", option_r5.label);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r5.label);
} }
function NovoSimpleActionCell_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "novo-dropdown", 2);
    i0.ɵɵelementStart(2, "button", 3);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "list");
    i0.ɵɵtemplate(5, NovoSimpleActionCell_ng_container_1_item_5_Template, 3, 3, "item", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.column.label || ctx_r1.labels.actions);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.column.options);
} }
/** Workaround for https://github.com/angular/angular/issues/17849 */
export var _NovoCellDef = CdkCellDef;
export var _NovoHeaderCellDef = CdkHeaderCellDef;
export var _NovoColumnDef = CdkColumnDef;
export var _NovoHeaderCell = CdkHeaderCell;
export var _NovoCell = CdkCell;
var NovoSimpleCellDef = /** @class */ (function (_super) {
    __extends(NovoSimpleCellDef, _super);
    function NovoSimpleCellDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NovoSimpleCellDef.ɵfac = function NovoSimpleCellDef_Factory(t) { return ɵNovoSimpleCellDef_BaseFactory(t || NovoSimpleCellDef); };
    NovoSimpleCellDef.ɵdir = i0.ɵɵdefineDirective({ type: NovoSimpleCellDef, selectors: [["", "novoSimpleCellDef", ""]], features: [i0.ɵɵProvidersFeature([{ provide: CdkCellDef, useExisting: NovoSimpleCellDef }]), i0.ɵɵInheritDefinitionFeature] });
    return NovoSimpleCellDef;
}(_NovoCellDef));
export { NovoSimpleCellDef };
var ɵNovoSimpleCellDef_BaseFactory = i0.ɵɵgetInheritedFactory(NovoSimpleCellDef);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleCellDef, [{
        type: Directive,
        args: [{
                selector: '[novoSimpleCellDef]',
                providers: [{ provide: CdkCellDef, useExisting: NovoSimpleCellDef }],
            }]
    }], null, null); })();
var NovoSimpleHeaderCellDef = /** @class */ (function (_super) {
    __extends(NovoSimpleHeaderCellDef, _super);
    function NovoSimpleHeaderCellDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NovoSimpleHeaderCellDef.ɵfac = function NovoSimpleHeaderCellDef_Factory(t) { return ɵNovoSimpleHeaderCellDef_BaseFactory(t || NovoSimpleHeaderCellDef); };
    NovoSimpleHeaderCellDef.ɵdir = i0.ɵɵdefineDirective({ type: NovoSimpleHeaderCellDef, selectors: [["", "novoSimpleHeaderCellDef", ""]], features: [i0.ɵɵProvidersFeature([{ provide: CdkHeaderCellDef, useExisting: NovoSimpleHeaderCellDef }]), i0.ɵɵInheritDefinitionFeature] });
    return NovoSimpleHeaderCellDef;
}(_NovoHeaderCellDef));
export { NovoSimpleHeaderCellDef };
var ɵNovoSimpleHeaderCellDef_BaseFactory = i0.ɵɵgetInheritedFactory(NovoSimpleHeaderCellDef);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleHeaderCellDef, [{
        type: Directive,
        args: [{
                selector: '[novoSimpleHeaderCellDef]',
                providers: [{ provide: CdkHeaderCellDef, useExisting: NovoSimpleHeaderCellDef }],
            }]
    }], null, null); })();
var NovoSimpleColumnDef = /** @class */ (function (_super) {
    __extends(NovoSimpleColumnDef, _super);
    function NovoSimpleColumnDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NovoSimpleColumnDef.ɵfac = function NovoSimpleColumnDef_Factory(t) { return ɵNovoSimpleColumnDef_BaseFactory(t || NovoSimpleColumnDef); };
    NovoSimpleColumnDef.ɵdir = i0.ɵɵdefineDirective({ type: NovoSimpleColumnDef, selectors: [["", "novoSimpleColumnDef", ""]], inputs: { name: ["novoSimpleColumnDef", "name"] }, features: [i0.ɵɵProvidersFeature([{ provide: CdkColumnDef, useExisting: NovoSimpleColumnDef }]), i0.ɵɵInheritDefinitionFeature] });
    return NovoSimpleColumnDef;
}(_NovoColumnDef));
export { NovoSimpleColumnDef };
var ɵNovoSimpleColumnDef_BaseFactory = i0.ɵɵgetInheritedFactory(NovoSimpleColumnDef);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleColumnDef, [{
        type: Directive,
        args: [{
                selector: '[novoSimpleColumnDef]',
                providers: [{ provide: CdkColumnDef, useExisting: NovoSimpleColumnDef }],
            }]
    }], null, { name: [{
            type: Input,
            args: ['novoSimpleColumnDef']
        }] }); })();
var NovoSimpleHeaderCell = /** @class */ (function (_super) {
    __extends(NovoSimpleHeaderCell, _super);
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
    NovoSimpleHeaderCell.prototype.ngOnInit = function () {
        if (this.column.width) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', this.column.width + "px");
            this.renderer.setStyle(this.elementRef.nativeElement, 'max-width', this.column.width + "px");
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.column.width + "px");
        }
    };
    NovoSimpleHeaderCell.ɵfac = function NovoSimpleHeaderCell_Factory(t) { return new (t || NovoSimpleHeaderCell)(i0.ɵɵdirectiveInject(i1.CdkColumnDef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    NovoSimpleHeaderCell.ɵdir = i0.ɵɵdefineDirective({ type: NovoSimpleHeaderCell, selectors: [["novo-simple-header-cell"]], hostVars: 1, hostBindings: function NovoSimpleHeaderCell_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("role", ctx.role);
        } }, inputs: { column: "column" }, features: [i0.ɵɵInheritDefinitionFeature] });
    return NovoSimpleHeaderCell;
}(_NovoHeaderCell));
export { NovoSimpleHeaderCell };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleHeaderCell, [{
        type: Directive,
        args: [{
                selector: 'novo-simple-header-cell',
            }]
    }], function () { return [{ type: i1.CdkColumnDef }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { role: [{
            type: HostBinding,
            args: ['attr.role']
        }], column: [{
            type: Input
        }] }); })();
var NovoSimpleEmptyHeaderCell = /** @class */ (function (_super) {
    __extends(NovoSimpleEmptyHeaderCell, _super);
    function NovoSimpleEmptyHeaderCell(columnDef, elementRef, renderer) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        _this.role = 'columnheader';
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', "novo-column-header-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, "novo-column-" + columnDef.cssClassFriendlyName);
        renderer.addClass(elementRef.nativeElement, 'novo-simple-empty-header-cell');
        return _this;
    }
    NovoSimpleEmptyHeaderCell.ɵfac = function NovoSimpleEmptyHeaderCell_Factory(t) { return new (t || NovoSimpleEmptyHeaderCell)(i0.ɵɵdirectiveInject(i1.CdkColumnDef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    NovoSimpleEmptyHeaderCell.ɵdir = i0.ɵɵdefineDirective({ type: NovoSimpleEmptyHeaderCell, selectors: [["novo-simple-empty-header-cell"]], hostVars: 1, hostBindings: function NovoSimpleEmptyHeaderCell_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("role", ctx.role);
        } }, features: [i0.ɵɵInheritDefinitionFeature] });
    return NovoSimpleEmptyHeaderCell;
}(_NovoHeaderCell));
export { NovoSimpleEmptyHeaderCell };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleEmptyHeaderCell, [{
        type: Directive,
        args: [{
                selector: 'novo-simple-empty-header-cell',
            }]
    }], function () { return [{ type: i1.CdkColumnDef }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { role: [{
            type: HostBinding,
            args: ['attr.role']
        }] }); })();
var NovoSimpleCheckboxHeaderCell = /** @class */ (function (_super) {
    __extends(NovoSimpleCheckboxHeaderCell, _super);
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
    NovoSimpleCheckboxHeaderCell.prototype.ngOnDestroy = function () {
        this.selectAllSubscription.unsubscribe();
    };
    NovoSimpleCheckboxHeaderCell.prototype.toggle = function (value) {
        this._selection.selectAll(value);
    };
    NovoSimpleCheckboxHeaderCell.ɵfac = function NovoSimpleCheckboxHeaderCell_Factory(t) { return new (t || NovoSimpleCheckboxHeaderCell)(i0.ɵɵdirectiveInject(i1.CdkColumnDef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.NovoSelection, 8)); };
    NovoSimpleCheckboxHeaderCell.ɵcmp = i0.ɵɵdefineComponent({ type: NovoSimpleCheckboxHeaderCell, selectors: [["novo-simple-checkbox-header-cell"]], hostVars: 1, hostBindings: function NovoSimpleCheckboxHeaderCell_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("role", ctx.role);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "ngModel", "ngModelChange"]], template: function NovoSimpleCheckboxHeaderCell_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "novo-checkbox", 0);
            i0.ɵɵlistener("ngModelChange", function NovoSimpleCheckboxHeaderCell_Template_novo_checkbox_ngModelChange_0_listener($event) { return ctx.selectAll = $event; })("ngModelChange", function NovoSimpleCheckboxHeaderCell_Template_novo_checkbox_ngModelChange_0_listener($event) { return ctx.toggle($event); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.selectAll);
        } }, directives: [i3.NovoCheckboxElement, i4.NgControlStatus, i4.NgModel], encapsulation: 2 });
    return NovoSimpleCheckboxHeaderCell;
}(_NovoHeaderCell));
export { NovoSimpleCheckboxHeaderCell };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleCheckboxHeaderCell, [{
        type: Component,
        args: [{
                selector: 'novo-simple-checkbox-header-cell',
                template: "<novo-checkbox [(ngModel)]=\"selectAll\" (ngModelChange)=\"toggle($event)\"></novo-checkbox>",
            }]
    }], function () { return [{ type: i1.CdkColumnDef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i2.NovoSelection, decorators: [{
                type: Optional
            }] }]; }, { role: [{
            type: HostBinding,
            args: ['attr.role']
        }] }); })();
var NovoSimpleCell = /** @class */ (function (_super) {
    __extends(NovoSimpleCell, _super);
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
    NovoSimpleCell.prototype.ngOnInit = function () {
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
    NovoSimpleCell.prototype.onClick = function (event) {
        Helpers.swallowEvent(event);
        if (this.column.onClick) {
            this.column.onClick(this.row);
        }
        return;
    };
    NovoSimpleCell.ɵfac = function NovoSimpleCell_Factory(t) { return new (t || NovoSimpleCell)(i0.ɵɵdirectiveInject(i1.CdkColumnDef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    NovoSimpleCell.ɵcmp = i0.ɵɵdefineComponent({ type: NovoSimpleCell, selectors: [["novo-simple-cell"]], hostVars: 1, hostBindings: function NovoSimpleCell_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("role", ctx.role);
        } }, inputs: { row: "row", column: "column" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 3, consts: [[3, "click"], ["span", ""]], template: function NovoSimpleCell_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 0, 1);
            i0.ɵɵlistener("click", function NovoSimpleCell_Template_span_click_0_listener($event) { return ctx.onClick($event); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("clickable", !!ctx.column.onClick);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.column.renderer(ctx.row));
        } }, encapsulation: 2, changeDetection: 0 });
    return NovoSimpleCell;
}(_NovoCell));
export { NovoSimpleCell };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleCell, [{
        type: Component,
        args: [{
                selector: 'novo-simple-cell',
                template: "\n    <span [class.clickable]=\"!!column.onClick\" (click)=\"onClick($event)\" #span>{{ column.renderer(row) }}</span>\n  ",
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.CdkColumnDef }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { role: [{
            type: HostBinding,
            args: ['attr.role']
        }], row: [{
            type: Input
        }], column: [{
            type: Input
        }] }); })();
var NovoSimpleCheckboxCell = /** @class */ (function (_super) {
    __extends(NovoSimpleCheckboxCell, _super);
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
    NovoSimpleCheckboxCell.prototype.ngOnInit = function () {
        this._selection.register(this.row.id || this.index, this.row);
        this.selected = this._selection.state.selectedRows.has(this.row.id || this.index);
    };
    NovoSimpleCheckboxCell.prototype.ngOnDestroy = function () {
        this._selection.deregister(this.row.id || this.index);
        this.selectAllSubscription.unsubscribe();
    };
    NovoSimpleCheckboxCell.prototype.toggle = function (value) {
        this._selection.toggle(this.row.id || this.index, value, this.row);
    };
    NovoSimpleCheckboxCell.ɵfac = function NovoSimpleCheckboxCell_Factory(t) { return new (t || NovoSimpleCheckboxCell)(i0.ɵɵdirectiveInject(i1.CdkColumnDef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.NovoSelection, 8)); };
    NovoSimpleCheckboxCell.ɵcmp = i0.ɵɵdefineComponent({ type: NovoSimpleCheckboxCell, selectors: [["novo-simple-checkbox-cell"]], hostVars: 1, hostBindings: function NovoSimpleCheckboxCell_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("role", ctx.role);
        } }, inputs: { row: "row", index: "index" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "ngModel", "ngModelChange"]], template: function NovoSimpleCheckboxCell_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "novo-checkbox", 0);
            i0.ɵɵlistener("ngModelChange", function NovoSimpleCheckboxCell_Template_novo_checkbox_ngModelChange_0_listener($event) { return ctx.toggle($event); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.selected);
        } }, directives: [i3.NovoCheckboxElement, i4.NgControlStatus, i4.NgModel], encapsulation: 2 });
    return NovoSimpleCheckboxCell;
}(_NovoCell));
export { NovoSimpleCheckboxCell };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleCheckboxCell, [{
        type: Component,
        args: [{
                selector: 'novo-simple-checkbox-cell',
                template: "\n    <novo-checkbox [ngModel]=\"selected\" (ngModelChange)=\"toggle($event)\"></novo-checkbox>\n  ",
            }]
    }], function () { return [{ type: i1.CdkColumnDef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i2.NovoSelection, decorators: [{
                type: Optional
            }] }]; }, { role: [{
            type: HostBinding,
            args: ['attr.role']
        }], row: [{
            type: Input
        }], index: [{
            type: Input
        }] }); })();
var NovoSimpleActionCell = /** @class */ (function (_super) {
    __extends(NovoSimpleActionCell, _super);
    function NovoSimpleActionCell(columnDef, elementRef, renderer, labels) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.labels = labels;
        _this.role = 'gridcell';
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', "novo-action-column-" + columnDef.cssClassFriendlyName);
        return _this;
    }
    NovoSimpleActionCell.prototype.ngOnInit = function () {
        if (this.column.options) {
            this.renderer.addClass(this.elementRef.nativeElement, 'novo-simple-dropdown-cell');
        }
        else {
            this.renderer.addClass(this.elementRef.nativeElement, 'novo-simple-button-cell');
        }
    };
    NovoSimpleActionCell.prototype.isDisabled = function (check, row) {
        if (check.disabled === true) {
            return true;
        }
        if (check.disabledCheck) {
            return check.disabledCheck(row);
        }
        return false;
    };
    NovoSimpleActionCell.ɵfac = function NovoSimpleActionCell_Factory(t) { return new (t || NovoSimpleActionCell)(i0.ɵɵdirectiveInject(i1.CdkColumnDef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i5.NovoLabelService)); };
    NovoSimpleActionCell.ɵcmp = i0.ɵɵdefineComponent({ type: NovoSimpleActionCell, selectors: [["novo-simple-action-cell"]], hostVars: 1, hostBindings: function NovoSimpleActionCell_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("role", ctx.role);
        } }, inputs: { row: "row", column: "column" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [[4, "ngIf"], ["theme", "icon", 3, "icon", "disabled", "click"], ["parentScrollSelector", ".novo-simple-table", "containerClass", "novo-table-dropdown-cell"], ["type", "button", "theme", "dialogue", "icon", "collapse", "inverse", ""], [3, "disabled", "action", 4, "ngFor", "ngForOf"], [3, "disabled", "action"]], template: function NovoSimpleActionCell_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NovoSimpleActionCell_ng_container_0_Template, 2, 2, "ng-container", 0);
            i0.ɵɵtemplate(1, NovoSimpleActionCell_ng_container_1_Template, 6, 2, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.column.options);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.column.options);
        } }, directives: [i6.NgIf, i7.NovoButtonElement, i8.NovoDropdownElement, i8.NovoDropdownListElement, i6.NgForOf, i8.NovoItemElement], encapsulation: 2, changeDetection: 0 });
    return NovoSimpleActionCell;
}(_NovoCell));
export { NovoSimpleActionCell };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleActionCell, [{
        type: Component,
        args: [{
                selector: 'novo-simple-action-cell',
                template: "\n    <ng-container *ngIf=\"!column.options\">\n      <button theme=\"icon\" [icon]=\"column.icon\" (click)=\"column.onClick(row)\" [disabled]=\"isDisabled(column, row)\"></button>\n    </ng-container>\n    <ng-container *ngIf=\"column.options\">\n      <novo-dropdown parentScrollSelector=\".novo-simple-table\" containerClass=\"novo-table-dropdown-cell\">\n        <button type=\"button\" theme=\"dialogue\" icon=\"collapse\" inverse>{{ column.label || labels.actions }}</button>\n        <list>\n          <item *ngFor=\"let option of column.options\" (action)=\"option.onClick(row)\" [disabled]=\"isDisabled(option, row)\">\n            <span [attr.data-automation-id]=\"option.label\">{{ option.label }}</span>\n          </item>\n        </list>\n      </novo-dropdown>\n    </ng-container>\n  ",
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.CdkColumnDef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i5.NovoLabelService }]; }, { role: [{
            type: HostBinding,
            args: ['attr.role']
        }], row: [{
            type: Input
        }], column: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFxQixRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpLLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7SUFxTm5DLDZCQUNFO0lBQUEsaUNBQXNIO0lBQTVFLHdLQUFTLGlDQUFtQixJQUFDO0lBQXNDLGlCQUFTO0lBQ3hILDBCQUFlOzs7SUFEUSxlQUFvQjtJQUFwQix5Q0FBb0IsMERBQUE7Ozs7SUFNckMsK0JBQ0U7SUFEMEMsK01BQVUsNkJBQW1CLElBQUM7SUFDeEUsNEJBQStDO0lBQUEsWUFBa0I7SUFBQSxpQkFBTztJQUMxRSxpQkFBTzs7OztJQUZvRSxtRUFBb0M7SUFDdkcsZUFBd0M7SUFBeEMscURBQXdDO0lBQUMsZUFBa0I7SUFBbEIscUNBQWtCOzs7SUFMekUsNkJBQ0U7SUFBQSx3Q0FDRTtJQUFBLGlDQUErRDtJQUFBLFlBQW9DO0lBQUEsaUJBQVM7SUFDNUcsNEJBQ0U7SUFBQSxzRkFDRTtJQUVKLGlCQUFPO0lBQ1QsaUJBQWdCO0lBQ2xCLDBCQUFlOzs7SUFQb0QsZUFBb0M7SUFBcEMsa0VBQW9DO0lBRTNGLGVBQXFDO0lBQXJD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bkRlZiwgQ2RrSGVhZGVyQ2VsbCwgQ2RrSGVhZGVyQ2VsbERlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPcHRpb25hbCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgU2ltcGxlVGFibGVBY3Rpb25Db2x1bW4sIFNpbXBsZVRhYmxlQWN0aW9uQ29sdW1uT3B0aW9uLCBTaW1wbGVUYWJsZUNvbHVtbiB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOb3ZvU2VsZWN0aW9uIH0gZnJvbSAnLi9zb3J0JztcblxuLyoqIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE3ODQ5ICovXG5leHBvcnQgY29uc3QgX05vdm9DZWxsRGVmID0gQ2RrQ2VsbERlZjtcbmV4cG9ydCBjb25zdCBfTm92b0hlYWRlckNlbGxEZWYgPSBDZGtIZWFkZXJDZWxsRGVmO1xuZXhwb3J0IGNvbnN0IF9Ob3ZvQ29sdW1uRGVmID0gQ2RrQ29sdW1uRGVmO1xuZXhwb3J0IGNvbnN0IF9Ob3ZvSGVhZGVyQ2VsbCA9IENka0hlYWRlckNlbGw7XG5leHBvcnQgY29uc3QgX05vdm9DZWxsID0gQ2RrQ2VsbDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TaW1wbGVDZWxsRGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrQ2VsbERlZiwgdXNlRXhpc3Rpbmc6IE5vdm9TaW1wbGVDZWxsRGVmIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlQ2VsbERlZiBleHRlbmRzIF9Ob3ZvQ2VsbERlZiB7XG4gIC8vIFRPRE86IGFkZCBleHBsaWNpdCBjb25zdHJ1Y3RvclxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1NpbXBsZUhlYWRlckNlbGxEZWZdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtIZWFkZXJDZWxsRGVmLCB1c2VFeGlzdGluZzogTm92b1NpbXBsZUhlYWRlckNlbGxEZWYgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVIZWFkZXJDZWxsRGVmIGV4dGVuZHMgX05vdm9IZWFkZXJDZWxsRGVmIHtcbiAgLy8gVE9ETzogYWRkIGV4cGxpY2l0IGNvbnN0cnVjdG9yXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvU2ltcGxlQ29sdW1uRGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrQ29sdW1uRGVmLCB1c2VFeGlzdGluZzogTm92b1NpbXBsZUNvbHVtbkRlZiB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUNvbHVtbkRlZiBleHRlbmRzIF9Ob3ZvQ29sdW1uRGVmIHtcbiAgQElucHV0KCdub3ZvU2ltcGxlQ29sdW1uRGVmJylcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS1oZWFkZXItY2VsbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVIZWFkZXJDZWxsPFQ+IGV4dGVuZHMgX05vdm9IZWFkZXJDZWxsIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdjb2x1bW5oZWFkZXInO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb2x1bW46IFNpbXBsZVRhYmxlQ29sdW1uPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtYXV0b21hdGlvbi1pZCcsIGBub3ZvLWNvbHVtbi1oZWFkZXItJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbm92by1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1zaW1wbGUtaGVhZGVyLWNlbGwnKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2x1bW4ud2lkdGgpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtaW4td2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21heC13aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aH1weGApO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS1lbXB0eS1oZWFkZXItY2VsbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVFbXB0eUhlYWRlckNlbGwgZXh0ZW5kcyBfTm92b0hlYWRlckNlbGwge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ2NvbHVtbmhlYWRlcic7XG5cbiAgY29uc3RydWN0b3IoY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWF1dG9tYXRpb24taWQnLCBgbm92by1jb2x1bW4taGVhZGVyLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG5vdm8tY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tc2ltcGxlLWVtcHR5LWhlYWRlci1jZWxsJyk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zaW1wbGUtY2hlY2tib3gtaGVhZGVyLWNlbGwnLFxuICB0ZW1wbGF0ZTogYDxub3ZvLWNoZWNrYm94IFsobmdNb2RlbCldPVwic2VsZWN0QWxsXCIgKG5nTW9kZWxDaGFuZ2UpPVwidG9nZ2xlKCRldmVudClcIj48L25vdm8tY2hlY2tib3g+YCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUNoZWNrYm94SGVhZGVyQ2VsbCBleHRlbmRzIF9Ob3ZvSGVhZGVyQ2VsbCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAnY29sdW1uaGVhZGVyJztcblxuICBwdWJsaWMgc2VsZWN0QWxsOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgc2VsZWN0QWxsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfc2VsZWN0aW9uOiBOb3ZvU2VsZWN0aW9uLFxuICApIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWF1dG9tYXRpb24taWQnLCBgbm92by1jaGVja2JveC1jb2x1bW4taGVhZGVyLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG5vdm8tY2hlY2tib3gtY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tc2ltcGxlLWNoZWNrYm94LWhlYWRlci1jZWxsJyk7XG5cbiAgICB0aGlzLnNlbGVjdEFsbFN1YnNjcmlwdGlvbiA9IF9zZWxlY3Rpb24ubm92b1NlbGVjdEFsbFRvZ2dsZS5zdWJzY3JpYmUoKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdEFsbCA9IHZhbHVlO1xuICAgICAgcmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0QWxsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0aW9uLnNlbGVjdEFsbCh2YWx1ZSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zaW1wbGUtY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gW2NsYXNzLmNsaWNrYWJsZV09XCIhIWNvbHVtbi5vbkNsaWNrXCIgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiICNzcGFuPnt7IGNvbHVtbi5yZW5kZXJlcihyb3cpIH19PC9zcGFuPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUNlbGw8VD4gZXh0ZW5kcyBfTm92b0NlbGwgaW1wbGVtZW50cyBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ2dyaWRjZWxsJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcm93OiBhbnk7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb2x1bW46IFNpbXBsZVRhYmxlQ29sdW1uPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtYXV0b21hdGlvbi1pZCcsIGBub3ZvLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBub3ZvLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLXNpbXBsZS1jZWxsJyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sdW1uLmN1c3RvbUNsYXNzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNvbHVtbi5jdXN0b21DbGFzcyh0aGlzLnJvdykpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2x1bW4ud2lkdGgpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtaW4td2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21heC13aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aH1weGApO1xuICAgICAgLy8gVE9ETyAtIHRoaXMgaW5oaWJpdHMgcmVzaXppbmcgdGhlIHBhZ2UgYWZ0ZXIgdGhlIGluaXRpYWwgbG9hZCAtLSBidXQgZG8gd2UgY2FyZT8hPyFcbiAgICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGFuRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbWluLXdpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGggLSAyMH1weGApO1xuICAgICAgLy8gdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwYW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdtYXgtd2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aCAtIDIwfXB4YCk7XG4gICAgICAvLyB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc3BhbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGggLSAyMH1weGApO1xuICAgIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgICAgLy8gVE9ETyAtIHRoaXMgaW5oaWJpdHMgcmVzaXppbmcgdGhlIHBhZ2UgYWZ0ZXIgdGhlIGluaXRpYWwgbG9hZCAtLSBidXQgZG8gd2UgY2FyZT8hPyFcbiAgICAvLyAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwYW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdtaW4td2lkdGgnLCBgJHt0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIDIwfXB4YCk7XG4gICAgLy8gICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGFuRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbWF4LXdpZHRoJywgYCR7dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggLSAyMH1weGApO1xuICAgIC8vICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc3BhbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggLSAyMH1weGApO1xuICAgIC8vIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIGlmICh0aGlzLmNvbHVtbi5vbkNsaWNrKSB7XG4gICAgICB0aGlzLmNvbHVtbi5vbkNsaWNrKHRoaXMucm93KTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLWNoZWNrYm94LWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxub3ZvLWNoZWNrYm94IFtuZ01vZGVsXT1cInNlbGVjdGVkXCIgKG5nTW9kZWxDaGFuZ2UpPVwidG9nZ2xlKCRldmVudClcIj48L25vdm8tY2hlY2tib3g+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVDaGVja2JveENlbGwgZXh0ZW5kcyBfTm92b0NlbGwgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAnZ3JpZGNlbGwnO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByb3c6IGFueTtcbiAgQElucHV0KClcbiAgcHVibGljIGluZGV4OiBhbnk7XG5cbiAgcHVibGljIHNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgc2VsZWN0QWxsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBAT3B0aW9uYWwoKSBwdWJsaWMgX3NlbGVjdGlvbjogTm92b1NlbGVjdGlvbikge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtYXV0b21hdGlvbi1pZCcsIGBub3ZvLWNoZWNrYm94LWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBub3ZvLWNoZWNrYm94LWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLXNpbXBsZS1jaGVja2JveC1jZWxsJyk7XG5cbiAgICB0aGlzLnNlbGVjdEFsbFN1YnNjcmlwdGlvbiA9IF9zZWxlY3Rpb24ubm92b1NlbGVjdEFsbFRvZ2dsZS5zdWJzY3JpYmUoKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0aW9uLnJlZ2lzdGVyKHRoaXMucm93LmlkIHx8IHRoaXMuaW5kZXgsIHRoaXMucm93KTtcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5fc2VsZWN0aW9uLnN0YXRlLnNlbGVjdGVkUm93cy5oYXModGhpcy5yb3cuaWQgfHwgdGhpcy5pbmRleCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0aW9uLmRlcmVnaXN0ZXIodGhpcy5yb3cuaWQgfHwgdGhpcy5pbmRleCk7XG4gICAgdGhpcy5zZWxlY3RBbGxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3Rpb24udG9nZ2xlKHRoaXMucm93LmlkIHx8IHRoaXMuaW5kZXgsIHZhbHVlLCB0aGlzLnJvdyk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zaW1wbGUtYWN0aW9uLWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29sdW1uLm9wdGlvbnNcIj5cbiAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgW2ljb25dPVwiY29sdW1uLmljb25cIiAoY2xpY2spPVwiY29sdW1uLm9uQ2xpY2socm93KVwiIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkKGNvbHVtbiwgcm93KVwiPjwvYnV0dG9uPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4ub3B0aW9uc1wiPlxuICAgICAgPG5vdm8tZHJvcGRvd24gcGFyZW50U2Nyb2xsU2VsZWN0b3I9XCIubm92by1zaW1wbGUtdGFibGVcIiBjb250YWluZXJDbGFzcz1cIm5vdm8tdGFibGUtZHJvcGRvd24tY2VsbFwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aGVtZT1cImRpYWxvZ3VlXCIgaWNvbj1cImNvbGxhcHNlXCIgaW52ZXJzZT57eyBjb2x1bW4ubGFiZWwgfHwgbGFiZWxzLmFjdGlvbnMgfX08L2J1dHRvbj5cbiAgICAgICAgPGxpc3Q+XG4gICAgICAgICAgPGl0ZW0gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb2x1bW4ub3B0aW9uc1wiIChhY3Rpb24pPVwib3B0aW9uLm9uQ2xpY2socm93KVwiIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkKG9wdGlvbiwgcm93KVwiPlxuICAgICAgICAgICAgPHNwYW4gW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIm9wdGlvbi5sYWJlbFwiPnt7IG9wdGlvbi5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgIDwvbGlzdD5cbiAgICAgIDwvbm92by1kcm9wZG93bj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVBY3Rpb25DZWxsPFQ+IGV4dGVuZHMgX05vdm9DZWxsIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdncmlkY2VsbCc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHJvdzogVDtcbiAgQElucHV0KClcbiAgcHVibGljIGNvbHVtbjogU2ltcGxlVGFibGVBY3Rpb25Db2x1bW48VD47XG5cbiAgY29uc3RydWN0b3IoY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1hdXRvbWF0aW9uLWlkJywgYG5vdm8tYWN0aW9uLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2x1bW4ub3B0aW9ucykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tc2ltcGxlLWRyb3Bkb3duLWNlbGwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tc2ltcGxlLWJ1dHRvbi1jZWxsJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzRGlzYWJsZWQoY2hlY2s6IFNpbXBsZVRhYmxlQWN0aW9uQ29sdW1uPFQ+IHwgU2ltcGxlVGFibGVBY3Rpb25Db2x1bW5PcHRpb248VD4sIHJvdzogVCk6IGJvb2xlYW4ge1xuICAgIGlmIChjaGVjay5kaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChjaGVjay5kaXNhYmxlZENoZWNrKSB7XG4gICAgICByZXR1cm4gY2hlY2suZGlzYWJsZWRDaGVjayhyb3cpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==