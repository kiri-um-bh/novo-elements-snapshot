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
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 1);
    i0.ɵɵlistener("click", function NovoSimpleActionCell_ng_container_0_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.column.onClick(ctx_r2.row); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r0.column.icon)("disabled", ctx_r0.isDisabled(ctx_r0.column, ctx_r0.row));
} }
function NovoSimpleActionCell_ng_container_1_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "item", 5);
    i0.ɵɵlistener("action", function NovoSimpleActionCell_ng_container_1_item_5_Template_item_action_0_listener() { i0.ɵɵrestoreView(_r7); const option_r5 = ctx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return option_r5.onClick(ctx_r6.row); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
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
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.column.label || ctx_r1.labels.actions);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.column.options);
} }
/** Workaround for https://github.com/angular/angular/issues/17849 */
export const _NovoCellDef = CdkCellDef;
export const _NovoHeaderCellDef = CdkHeaderCellDef;
export const _NovoColumnDef = CdkColumnDef;
export const _NovoHeaderCell = CdkHeaderCell;
export const _NovoCell = CdkCell;
export class NovoSimpleCellDef extends _NovoCellDef {
}
NovoSimpleCellDef.ɵfac = function NovoSimpleCellDef_Factory(t) { return ɵNovoSimpleCellDef_BaseFactory(t || NovoSimpleCellDef); };
NovoSimpleCellDef.ɵdir = i0.ɵɵdefineDirective({ type: NovoSimpleCellDef, selectors: [["", "novoSimpleCellDef", ""]], features: [i0.ɵɵProvidersFeature([{ provide: CdkCellDef, useExisting: NovoSimpleCellDef }]), i0.ɵɵInheritDefinitionFeature] });
const ɵNovoSimpleCellDef_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(NovoSimpleCellDef);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleCellDef, [{
        type: Directive,
        args: [{
                selector: '[novoSimpleCellDef]',
                providers: [{ provide: CdkCellDef, useExisting: NovoSimpleCellDef }],
            }]
    }], null, null); })();
export class NovoSimpleHeaderCellDef extends _NovoHeaderCellDef {
}
NovoSimpleHeaderCellDef.ɵfac = function NovoSimpleHeaderCellDef_Factory(t) { return ɵNovoSimpleHeaderCellDef_BaseFactory(t || NovoSimpleHeaderCellDef); };
NovoSimpleHeaderCellDef.ɵdir = i0.ɵɵdefineDirective({ type: NovoSimpleHeaderCellDef, selectors: [["", "novoSimpleHeaderCellDef", ""]], features: [i0.ɵɵProvidersFeature([{ provide: CdkHeaderCellDef, useExisting: NovoSimpleHeaderCellDef }]), i0.ɵɵInheritDefinitionFeature] });
const ɵNovoSimpleHeaderCellDef_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(NovoSimpleHeaderCellDef);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleHeaderCellDef, [{
        type: Directive,
        args: [{
                selector: '[novoSimpleHeaderCellDef]',
                providers: [{ provide: CdkHeaderCellDef, useExisting: NovoSimpleHeaderCellDef }],
            }]
    }], null, null); })();
export class NovoSimpleColumnDef extends _NovoColumnDef {
}
NovoSimpleColumnDef.ɵfac = function NovoSimpleColumnDef_Factory(t) { return ɵNovoSimpleColumnDef_BaseFactory(t || NovoSimpleColumnDef); };
NovoSimpleColumnDef.ɵdir = i0.ɵɵdefineDirective({ type: NovoSimpleColumnDef, selectors: [["", "novoSimpleColumnDef", ""]], inputs: { name: ["novoSimpleColumnDef", "name"] }, features: [i0.ɵɵProvidersFeature([{ provide: CdkColumnDef, useExisting: NovoSimpleColumnDef }]), i0.ɵɵInheritDefinitionFeature] });
const ɵNovoSimpleColumnDef_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(NovoSimpleColumnDef);
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
export class NovoSimpleHeaderCell extends _NovoHeaderCell {
    constructor(columnDef, elementRef, renderer) {
        super(columnDef, elementRef);
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.role = 'columnheader';
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', `novo-column-header-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, `novo-column-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, 'novo-simple-header-cell');
    }
    ngOnInit() {
        if (this.column.width) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'min-width', `${this.column.width}px`);
            this.renderer.setStyle(this.elementRef.nativeElement, 'max-width', `${this.column.width}px`);
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${this.column.width}px`);
        }
    }
}
NovoSimpleHeaderCell.ɵfac = function NovoSimpleHeaderCell_Factory(t) { return new (t || NovoSimpleHeaderCell)(i0.ɵɵdirectiveInject(i1.CdkColumnDef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
NovoSimpleHeaderCell.ɵdir = i0.ɵɵdefineDirective({ type: NovoSimpleHeaderCell, selectors: [["novo-simple-header-cell"]], hostVars: 1, hostBindings: function NovoSimpleHeaderCell_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("role", ctx.role);
    } }, inputs: { column: "column" }, features: [i0.ɵɵInheritDefinitionFeature] });
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
export class NovoSimpleEmptyHeaderCell extends _NovoHeaderCell {
    constructor(columnDef, elementRef, renderer) {
        super(columnDef, elementRef);
        this.role = 'columnheader';
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', `novo-column-header-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, `novo-column-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, 'novo-simple-empty-header-cell');
    }
}
NovoSimpleEmptyHeaderCell.ɵfac = function NovoSimpleEmptyHeaderCell_Factory(t) { return new (t || NovoSimpleEmptyHeaderCell)(i0.ɵɵdirectiveInject(i1.CdkColumnDef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
NovoSimpleEmptyHeaderCell.ɵdir = i0.ɵɵdefineDirective({ type: NovoSimpleEmptyHeaderCell, selectors: [["novo-simple-empty-header-cell"]], hostVars: 1, hostBindings: function NovoSimpleEmptyHeaderCell_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("role", ctx.role);
    } }, features: [i0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleEmptyHeaderCell, [{
        type: Directive,
        args: [{
                selector: 'novo-simple-empty-header-cell',
            }]
    }], function () { return [{ type: i1.CdkColumnDef }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { role: [{
            type: HostBinding,
            args: ['attr.role']
        }] }); })();
export class NovoSimpleCheckboxHeaderCell extends _NovoHeaderCell {
    constructor(columnDef, elementRef, renderer, ref, _selection) {
        super(columnDef, elementRef);
        this._selection = _selection;
        this.role = 'columnheader';
        this.selectAll = false;
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', `novo-checkbox-column-header-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, `novo-checkbox-column-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, 'novo-simple-checkbox-header-cell');
        this.selectAllSubscription = _selection.novoSelectAllToggle.subscribe((value) => {
            this.selectAll = value;
            ref.markForCheck();
        });
    }
    ngOnDestroy() {
        this.selectAllSubscription.unsubscribe();
    }
    toggle(value) {
        this._selection.selectAll(value);
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleCheckboxHeaderCell, [{
        type: Component,
        args: [{
                selector: 'novo-simple-checkbox-header-cell',
                template: `<novo-checkbox [(ngModel)]="selectAll" (ngModelChange)="toggle($event)"></novo-checkbox>`,
            }]
    }], function () { return [{ type: i1.CdkColumnDef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i2.NovoSelection, decorators: [{
                type: Optional
            }] }]; }, { role: [{
            type: HostBinding,
            args: ['attr.role']
        }] }); })();
export class NovoSimpleCell extends _NovoCell {
    constructor(columnDef, elementRef, renderer) {
        super(columnDef, elementRef);
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.role = 'gridcell';
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', `novo-column-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, `novo-column-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, 'novo-simple-cell');
    }
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
    onClick(event) {
        Helpers.swallowEvent(event);
        if (this.column.onClick) {
            this.column.onClick(this.row);
        }
        return;
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleCell, [{
        type: Component,
        args: [{
                selector: 'novo-simple-cell',
                template: `
    <span [class.clickable]="!!column.onClick" (click)="onClick($event)" #span>{{ column.renderer(row) }}</span>
  `,
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
export class NovoSimpleCheckboxCell extends _NovoCell {
    constructor(columnDef, elementRef, renderer, _selection) {
        super(columnDef, elementRef);
        this.columnDef = columnDef;
        this._selection = _selection;
        this.role = 'gridcell';
        this.selected = false;
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', `novo-checkbox-column-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, `novo-checkbox-column-${columnDef.cssClassFriendlyName}`);
        renderer.addClass(elementRef.nativeElement, 'novo-simple-checkbox-cell');
        this.selectAllSubscription = _selection.novoSelectAllToggle.subscribe((value) => {
            this.selected = value;
        });
    }
    ngOnInit() {
        this._selection.register(this.row.id || this.index, this.row);
        this.selected = this._selection.state.selectedRows.has(this.row.id || this.index);
    }
    ngOnDestroy() {
        this._selection.deregister(this.row.id || this.index);
        this.selectAllSubscription.unsubscribe();
    }
    toggle(value) {
        this._selection.toggle(this.row.id || this.index, value, this.row);
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleCheckboxCell, [{
        type: Component,
        args: [{
                selector: 'novo-simple-checkbox-cell',
                template: `
    <novo-checkbox [ngModel]="selected" (ngModelChange)="toggle($event)"></novo-checkbox>
  `,
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
export class NovoSimpleActionCell extends _NovoCell {
    constructor(columnDef, elementRef, renderer, labels) {
        super(columnDef, elementRef);
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.labels = labels;
        this.role = 'gridcell';
        renderer.setAttribute(elementRef.nativeElement, 'data-automation-id', `novo-action-column-${columnDef.cssClassFriendlyName}`);
    }
    ngOnInit() {
        if (this.column.options) {
            this.renderer.addClass(this.elementRef.nativeElement, 'novo-simple-dropdown-cell');
        }
        else {
            this.renderer.addClass(this.elementRef.nativeElement, 'novo-simple-button-cell');
        }
    }
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSimpleActionCell, [{
        type: Component,
        args: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQXFCLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekssT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7Ozs7OztJQXNObkMsNkJBQ0U7SUFBQSxpQ0FBc0g7SUFBNUUsMEtBQVMsaUNBQW1CLElBQUM7SUFBc0MsaUJBQVM7SUFDeEgsMEJBQWU7OztJQURRLGVBQW9CO0lBQXBCLHlDQUFvQiwwREFBQTs7OztJQU1yQywrQkFDRTtJQUQwQyxtTkFBVSw2QkFBbUIsSUFBQztJQUN4RSw0QkFBK0M7SUFBQSxZQUFrQjtJQUFBLGlCQUFPO0lBQzFFLGlCQUFPOzs7O0lBRm9FLG1FQUFvQztJQUN2RyxlQUF3QztJQUF4QyxxREFBd0M7SUFBQyxlQUFrQjtJQUFsQixxQ0FBa0I7OztJQUx6RSw2QkFDRTtJQUFBLHdDQUNFO0lBQUEsaUNBQStEO0lBQUEsWUFBb0M7SUFBQSxpQkFBUztJQUM1Ryw0QkFDRTtJQUFBLHNGQUNFO0lBRUosaUJBQU87SUFDVCxpQkFBZ0I7SUFD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QU8sRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO1NBQ3BGO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1NBQ2xGO0lBQ0gsQ0FBQztJQUVNLFVBQVUsQ0FBQyxLQUFvRSxFQUFFLEdBQU07UUFDNUYsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7d0ZBOUJVLG9CQUFvQjt5REFBcEIsb0JBQW9COzs7UUFoQjdCLHVGQUNFO1FBRUYsdUZBQ0U7O1FBSlksMENBQXVCO1FBR3ZCLGVBQXNCO1FBQXRCLHlDQUFzQjs7a0RBYTNCLG9CQUFvQjtjQW5CaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7R0FjVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDsrSUFHUSxJQUFJO2tCQURWLFdBQVc7bUJBQUMsV0FBVztZQUlqQixHQUFHO2tCQURULEtBQUs7WUFHQyxNQUFNO2tCQURaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtDZWxsLCBDZGtDZWxsRGVmLCBDZGtDb2x1bW5EZWYsIENka0hlYWRlckNlbGwsIENka0hlYWRlckNlbGxEZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IFNpbXBsZVRhYmxlQWN0aW9uQ29sdW1uLCBTaW1wbGVUYWJsZUFjdGlvbkNvbHVtbk9wdGlvbiwgU2ltcGxlVGFibGVDb2x1bW4gfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTm92b1NlbGVjdGlvbiB9IGZyb20gJy4vc29ydCc7XG5cblxuLyoqIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE3ODQ5ICovXG5leHBvcnQgY29uc3QgX05vdm9DZWxsRGVmID0gQ2RrQ2VsbERlZjtcbmV4cG9ydCBjb25zdCBfTm92b0hlYWRlckNlbGxEZWYgPSBDZGtIZWFkZXJDZWxsRGVmO1xuZXhwb3J0IGNvbnN0IF9Ob3ZvQ29sdW1uRGVmID0gQ2RrQ29sdW1uRGVmO1xuZXhwb3J0IGNvbnN0IF9Ob3ZvSGVhZGVyQ2VsbCA9IENka0hlYWRlckNlbGw7XG5leHBvcnQgY29uc3QgX05vdm9DZWxsID0gQ2RrQ2VsbDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TaW1wbGVDZWxsRGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrQ2VsbERlZiwgdXNlRXhpc3Rpbmc6IE5vdm9TaW1wbGVDZWxsRGVmIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlQ2VsbERlZiBleHRlbmRzIF9Ob3ZvQ2VsbERlZiB7XG4gIC8vIFRPRE86IGFkZCBleHBsaWNpdCBjb25zdHJ1Y3RvclxuIH1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TaW1wbGVIZWFkZXJDZWxsRGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrSGVhZGVyQ2VsbERlZiwgdXNlRXhpc3Rpbmc6IE5vdm9TaW1wbGVIZWFkZXJDZWxsRGVmIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlSGVhZGVyQ2VsbERlZiBleHRlbmRzIF9Ob3ZvSGVhZGVyQ2VsbERlZiB7XG4gIC8vIFRPRE86IGFkZCBleHBsaWNpdCBjb25zdHJ1Y3RvclxuIH1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TaW1wbGVDb2x1bW5EZWZdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtDb2x1bW5EZWYsIHVzZUV4aXN0aW5nOiBOb3ZvU2ltcGxlQ29sdW1uRGVmIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlQ29sdW1uRGVmIGV4dGVuZHMgX05vdm9Db2x1bW5EZWYge1xuICBASW5wdXQoJ25vdm9TaW1wbGVDb2x1bW5EZWYnKVxuICBuYW1lOiBzdHJpbmc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLWhlYWRlci1jZWxsJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUhlYWRlckNlbGw8VD4gZXh0ZW5kcyBfTm92b0hlYWRlckNlbGwgaW1wbGVtZW50cyBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ2NvbHVtbmhlYWRlcic7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGNvbHVtbjogU2ltcGxlVGFibGVDb2x1bW48VD47XG5cbiAgY29uc3RydWN0b3IoY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1hdXRvbWF0aW9uLWlkJywgYG5vdm8tY29sdW1uLWhlYWRlci0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBub3ZvLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLXNpbXBsZS1oZWFkZXItY2VsbCcpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbHVtbi53aWR0aCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21pbi13aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF4LXdpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRofXB4YCk7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLWVtcHR5LWhlYWRlci1jZWxsJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUVtcHR5SGVhZGVyQ2VsbCBleHRlbmRzIF9Ob3ZvSGVhZGVyQ2VsbCB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAnY29sdW1uaGVhZGVyJztcblxuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtYXV0b21hdGlvbi1pZCcsIGBub3ZvLWNvbHVtbi1oZWFkZXItJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbm92by1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1zaW1wbGUtZW1wdHktaGVhZGVyLWNlbGwnKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS1jaGVja2JveC1oZWFkZXItY2VsbCcsXG4gIHRlbXBsYXRlOiBgPG5vdm8tY2hlY2tib3ggWyhuZ01vZGVsKV09XCJzZWxlY3RBbGxcIiAobmdNb2RlbENoYW5nZSk9XCJ0b2dnbGUoJGV2ZW50KVwiPjwvbm92by1jaGVja2JveD5gLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlQ2hlY2tib3hIZWFkZXJDZWxsIGV4dGVuZHMgX05vdm9IZWFkZXJDZWxsIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdjb2x1bW5oZWFkZXInO1xuXG4gIHB1YmxpYyBzZWxlY3RBbGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzZWxlY3RBbGxTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb2x1bW5EZWY6IENka0NvbHVtbkRlZixcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9zZWxlY3Rpb246IE5vdm9TZWxlY3Rpb24sXG4gICkge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtYXV0b21hdGlvbi1pZCcsIGBub3ZvLWNoZWNrYm94LWNvbHVtbi1oZWFkZXItJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbm92by1jaGVja2JveC1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1zaW1wbGUtY2hlY2tib3gtaGVhZGVyLWNlbGwnKTtcblxuICAgIHRoaXMuc2VsZWN0QWxsU3Vic2NyaXB0aW9uID0gX3NlbGVjdGlvbi5ub3ZvU2VsZWN0QWxsVG9nZ2xlLnN1YnNjcmliZSgodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsID0gdmFsdWU7XG4gICAgICByZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RBbGxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3Rpb24uc2VsZWN0QWxsKHZhbHVlKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBbY2xhc3MuY2xpY2thYmxlXT1cIiEhY29sdW1uLm9uQ2xpY2tcIiAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCIgI3NwYW4+e3sgY29sdW1uLnJlbmRlcmVyKHJvdykgfX08L3NwYW4+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlQ2VsbDxUPiBleHRlbmRzIF9Ob3ZvQ2VsbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAnZ3JpZGNlbGwnO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByb3c6IGFueTtcbiAgQElucHV0KClcbiAgcHVibGljIGNvbHVtbjogU2ltcGxlVGFibGVDb2x1bW48VD47XG5cbiAgY29uc3RydWN0b3IoY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1hdXRvbWF0aW9uLWlkJywgYG5vdm8tY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG5vdm8tY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tc2ltcGxlLWNlbGwnKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2x1bW4uY3VzdG9tQ2xhc3MpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY29sdW1uLmN1c3RvbUNsYXNzKHRoaXMucm93KSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbHVtbi53aWR0aCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21pbi13aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbWF4LXdpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGh9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRofXB4YCk7XG4gICAgICAvLyBUT0RPIC0gdGhpcyBpbmhpYml0cyByZXNpemluZyB0aGUgcGFnZSBhZnRlciB0aGUgaW5pdGlhbCBsb2FkIC0tIGJ1dCBkbyB3ZSBjYXJlPyE/IVxuICAgICAgLy8gdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwYW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdtaW4td2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aCAtIDIwfXB4YCk7XG4gICAgICAvLyB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc3BhbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ21heC13aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRoIC0gMjB9cHhgKTtcbiAgICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGFuRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aCAtIDIwfXB4YCk7XG4gICAgfVxuICAgIC8vIGVsc2Uge1xuICAgIC8vICAgICAvLyBUT0RPIC0gdGhpcyBpbmhpYml0cyByZXNpemluZyB0aGUgcGFnZSBhZnRlciB0aGUgaW5pdGlhbCBsb2FkIC0tIGJ1dCBkbyB3ZSBjYXJlPyE/IVxuICAgIC8vICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc3BhbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ21pbi13aWR0aCcsIGAke3RoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC0gMjB9cHhgKTtcbiAgICAvLyAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwYW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdtYXgtd2lkdGgnLCBgJHt0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIDIwfXB4YCk7XG4gICAgLy8gICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGFuRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIDIwfXB4YCk7XG4gICAgLy8gfVxuICB9XG5cbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgaWYgKHRoaXMuY29sdW1uLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMuY29sdW1uLm9uQ2xpY2sodGhpcy5yb3cpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zaW1wbGUtY2hlY2tib3gtY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5vdm8tY2hlY2tib3ggW25nTW9kZWxdPVwic2VsZWN0ZWRcIiAobmdNb2RlbENoYW5nZSk9XCJ0b2dnbGUoJGV2ZW50KVwiPjwvbm92by1jaGVja2JveD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUNoZWNrYm94Q2VsbCBleHRlbmRzIF9Ob3ZvQ2VsbCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdncmlkY2VsbCc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHJvdzogYW55O1xuICBASW5wdXQoKVxuICBwdWJsaWMgaW5kZXg6IGFueTtcblxuICBwdWJsaWMgc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzZWxlY3RBbGxTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIEBPcHRpb25hbCgpIHB1YmxpYyBfc2VsZWN0aW9uOiBOb3ZvU2VsZWN0aW9uKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1hdXRvbWF0aW9uLWlkJywgYG5vdm8tY2hlY2tib3gtY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG5vdm8tY2hlY2tib3gtY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tc2ltcGxlLWNoZWNrYm94LWNlbGwnKTtcblxuICAgIHRoaXMuc2VsZWN0QWxsU3Vic2NyaXB0aW9uID0gX3NlbGVjdGlvbi5ub3ZvU2VsZWN0QWxsVG9nZ2xlLnN1YnNjcmliZSgodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3Rpb24ucmVnaXN0ZXIodGhpcy5yb3cuaWQgfHwgdGhpcy5pbmRleCwgdGhpcy5yb3cpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3Rpb24uc3RhdGUuc2VsZWN0ZWRSb3dzLmhhcyh0aGlzLnJvdy5pZCB8fCB0aGlzLmluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3Rpb24uZGVyZWdpc3Rlcih0aGlzLnJvdy5pZCB8fCB0aGlzLmluZGV4KTtcbiAgICB0aGlzLnNlbGVjdEFsbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGlvbi50b2dnbGUodGhpcy5yb3cuaWQgfHwgdGhpcy5pbmRleCwgdmFsdWUsIHRoaXMucm93KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS1hY3Rpb24tY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2x1bW4ub3B0aW9uc1wiPlxuICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBbaWNvbl09XCJjb2x1bW4uaWNvblwiIChjbGljayk9XCJjb2x1bW4ub25DbGljayhyb3cpXCIgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWQoY29sdW1uLCByb3cpXCI+PC9idXR0b24+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbi5vcHRpb25zXCI+XG4gICAgICA8bm92by1kcm9wZG93biBwYXJlbnRTY3JvbGxTZWxlY3Rvcj1cIi5ub3ZvLXNpbXBsZS10YWJsZVwiIGNvbnRhaW5lckNsYXNzPVwibm92by10YWJsZS1kcm9wZG93bi1jZWxsXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwiZGlhbG9ndWVcIiBpY29uPVwiY29sbGFwc2VcIiBpbnZlcnNlPnt7IGNvbHVtbi5sYWJlbCB8fCBsYWJlbHMuYWN0aW9ucyB9fTwvYnV0dG9uPlxuICAgICAgICA8bGlzdD5cbiAgICAgICAgICA8aXRlbSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbHVtbi5vcHRpb25zXCIgKGFjdGlvbik9XCJvcHRpb24ub25DbGljayhyb3cpXCIgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWQob3B0aW9uLCByb3cpXCI+XG4gICAgICAgICAgICA8c3BhbiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwib3B0aW9uLmxhYmVsXCI+e3sgb3B0aW9uLmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgIDwvaXRlbT5cbiAgICAgICAgPC9saXN0PlxuICAgICAgPC9ub3ZvLWRyb3Bkb3duPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUFjdGlvbkNlbGw8VD4gZXh0ZW5kcyBfTm92b0NlbGwgaW1wbGVtZW50cyBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ2dyaWRjZWxsJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcm93OiBUO1xuICBASW5wdXQoKVxuICBwdWJsaWMgY29sdW1uOiBTaW1wbGVUYWJsZUFjdGlvbkNvbHVtbjxUPjtcblxuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWF1dG9tYXRpb24taWQnLCBgbm92by1hY3Rpb24tY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbHVtbi5vcHRpb25zKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1zaW1wbGUtZHJvcGRvd24tY2VsbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1zaW1wbGUtYnV0dG9uLWNlbGwnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNEaXNhYmxlZChjaGVjazogU2ltcGxlVGFibGVBY3Rpb25Db2x1bW48VD4gfCBTaW1wbGVUYWJsZUFjdGlvbkNvbHVtbk9wdGlvbjxUPiwgcm93OiBUKTogYm9vbGVhbiB7XG4gICAgaWYgKGNoZWNrLmRpc2FibGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNoZWNrLmRpc2FibGVkQ2hlY2spIHtcbiAgICAgIHJldHVybiBjaGVjay5kaXNhYmxlZENoZWNrKHJvdyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19