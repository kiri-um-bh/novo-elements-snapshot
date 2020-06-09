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
const ɵNovoSimpleCellDef_BaseFactory = i0.ɵɵgetInheritedFactory(NovoSimpleCellDef);
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
const ɵNovoSimpleHeaderCellDef_BaseFactory = i0.ɵɵgetInheritedFactory(NovoSimpleHeaderCellDef);
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
const ɵNovoSimpleColumnDef_BaseFactory = i0.ɵɵgetInheritedFactory(NovoSimpleColumnDef);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zaW1wbGUtdGFibGUvY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQXFCLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekssT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7Ozs7OztJQXFObkMsNkJBQ0U7SUFBQSxpQ0FBc0g7SUFBNUUsMEtBQVMsaUNBQW1CLElBQUM7SUFBc0MsaUJBQVM7SUFDeEgsMEJBQWU7OztJQURRLGVBQW9CO0lBQXBCLHlDQUFvQiwwREFBQTs7OztJQU1yQywrQkFDRTtJQUQwQyxtTkFBVSw2QkFBbUIsSUFBQztJQUN4RSw0QkFBK0M7SUFBQSxZQUFrQjtJQUFBLGlCQUFPO0lBQzFFLGlCQUFPOzs7O0lBRm9FLG1FQUFvQztJQUN2RyxlQUF3QztJQUF4QyxxREFBd0M7SUFBQyxlQUFrQjtJQUFsQixxQ0FBa0I7OztJQUx6RSw2QkFDRTtJQUFBLHdDQUNFO0lBQUEsaUNBQStEO0lBQUEsWUFBb0M7SUFBQSxpQkFBUztJQUM1Ryw0QkFDRTtJQUFBLHNGQUNFO0lBRUosaUJBQU87SUFDVCxpQkFBZ0I7SUFDbEIsMEJBQWU7OztJQVBvRCxlQUFvQztJQUFwQyxrRUFBb0M7SUFFM0YsZUFBcUM7SUFBckMs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QWEsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1NBQ2xGO0lBQ0gsQ0FBQztJQUVNLFVBQVUsQ0FBQyxLQUFvRSxFQUFFLEdBQU07UUFDNUYsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7d0ZBOUJVLG9CQUFvQjt5REFBcEIsb0JBQW9COzs7UUFoQjdCLHVGQUNFO1FBRUYsdUZBQ0U7O1FBSlksMENBQXVCO1FBR3ZCLGVBQXNCO1FBQXRCLHlDQUFzQjs7a0RBYTNCLG9CQUFvQjtjQW5CaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7R0FjVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBRUUsV0FBVzttQkFBQyxXQUFXOztrQkFHdkIsS0FBSzs7a0JBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0NlbGwsIENka0NlbGxEZWYsIENka0NvbHVtbkRlZiwgQ2RrSGVhZGVyQ2VsbCwgQ2RrSGVhZGVyQ2VsbERlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPcHRpb25hbCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgU2ltcGxlVGFibGVBY3Rpb25Db2x1bW4sIFNpbXBsZVRhYmxlQWN0aW9uQ29sdW1uT3B0aW9uLCBTaW1wbGVUYWJsZUNvbHVtbiB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOb3ZvU2VsZWN0aW9uIH0gZnJvbSAnLi9zb3J0JztcblxuLyoqIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE3ODQ5ICovXG5leHBvcnQgY29uc3QgX05vdm9DZWxsRGVmID0gQ2RrQ2VsbERlZjtcbmV4cG9ydCBjb25zdCBfTm92b0hlYWRlckNlbGxEZWYgPSBDZGtIZWFkZXJDZWxsRGVmO1xuZXhwb3J0IGNvbnN0IF9Ob3ZvQ29sdW1uRGVmID0gQ2RrQ29sdW1uRGVmO1xuZXhwb3J0IGNvbnN0IF9Ob3ZvSGVhZGVyQ2VsbCA9IENka0hlYWRlckNlbGw7XG5leHBvcnQgY29uc3QgX05vdm9DZWxsID0gQ2RrQ2VsbDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9TaW1wbGVDZWxsRGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrQ2VsbERlZiwgdXNlRXhpc3Rpbmc6IE5vdm9TaW1wbGVDZWxsRGVmIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU2ltcGxlQ2VsbERlZiBleHRlbmRzIF9Ob3ZvQ2VsbERlZiB7XG4gIC8vIFRPRE86IGFkZCBleHBsaWNpdCBjb25zdHJ1Y3RvclxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1NpbXBsZUhlYWRlckNlbGxEZWZdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtIZWFkZXJDZWxsRGVmLCB1c2VFeGlzdGluZzogTm92b1NpbXBsZUhlYWRlckNlbGxEZWYgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVIZWFkZXJDZWxsRGVmIGV4dGVuZHMgX05vdm9IZWFkZXJDZWxsRGVmIHtcbiAgLy8gVE9ETzogYWRkIGV4cGxpY2l0IGNvbnN0cnVjdG9yXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvU2ltcGxlQ29sdW1uRGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ2RrQ29sdW1uRGVmLCB1c2VFeGlzdGluZzogTm92b1NpbXBsZUNvbHVtbkRlZiB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUNvbHVtbkRlZiBleHRlbmRzIF9Ob3ZvQ29sdW1uRGVmIHtcbiAgQElucHV0KCdub3ZvU2ltcGxlQ29sdW1uRGVmJylcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS1oZWFkZXItY2VsbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVIZWFkZXJDZWxsPFQ+IGV4dGVuZHMgX05vdm9IZWFkZXJDZWxsIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdjb2x1bW5oZWFkZXInO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb2x1bW46IFNpbXBsZVRhYmxlQ29sdW1uPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtYXV0b21hdGlvbi1pZCcsIGBub3ZvLWNvbHVtbi1oZWFkZXItJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbm92by1jb2x1bW4tJHtjb2x1bW5EZWYuY3NzQ2xhc3NGcmllbmRseU5hbWV9YCk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbm92by1zaW1wbGUtaGVhZGVyLWNlbGwnKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2x1bW4ud2lkdGgpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtaW4td2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21heC13aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aH1weGApO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdub3ZvLXNpbXBsZS1lbXB0eS1oZWFkZXItY2VsbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVFbXB0eUhlYWRlckNlbGwgZXh0ZW5kcyBfTm92b0hlYWRlckNlbGwge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ2NvbHVtbmhlYWRlcic7XG5cbiAgY29uc3RydWN0b3IoY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWF1dG9tYXRpb24taWQnLCBgbm92by1jb2x1bW4taGVhZGVyLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG5vdm8tY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tc2ltcGxlLWVtcHR5LWhlYWRlci1jZWxsJyk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zaW1wbGUtY2hlY2tib3gtaGVhZGVyLWNlbGwnLFxuICB0ZW1wbGF0ZTogYDxub3ZvLWNoZWNrYm94IFsobmdNb2RlbCldPVwic2VsZWN0QWxsXCIgKG5nTW9kZWxDaGFuZ2UpPVwidG9nZ2xlKCRldmVudClcIj48L25vdm8tY2hlY2tib3g+YCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUNoZWNrYm94SGVhZGVyQ2VsbCBleHRlbmRzIF9Ob3ZvSGVhZGVyQ2VsbCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAnY29sdW1uaGVhZGVyJztcblxuICBwdWJsaWMgc2VsZWN0QWxsOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgc2VsZWN0QWxsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfc2VsZWN0aW9uOiBOb3ZvU2VsZWN0aW9uLFxuICApIHtcbiAgICBzdXBlcihjb2x1bW5EZWYsIGVsZW1lbnRSZWYpO1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWF1dG9tYXRpb24taWQnLCBgbm92by1jaGVja2JveC1jb2x1bW4taGVhZGVyLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG5vdm8tY2hlY2tib3gtY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWApO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tc2ltcGxlLWNoZWNrYm94LWhlYWRlci1jZWxsJyk7XG5cbiAgICB0aGlzLnNlbGVjdEFsbFN1YnNjcmlwdGlvbiA9IF9zZWxlY3Rpb24ubm92b1NlbGVjdEFsbFRvZ2dsZS5zdWJzY3JpYmUoKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdEFsbCA9IHZhbHVlO1xuICAgICAgcmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0QWxsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0aW9uLnNlbGVjdEFsbCh2YWx1ZSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zaW1wbGUtY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gW2NsYXNzLmNsaWNrYWJsZV09XCIhIWNvbHVtbi5vbkNsaWNrXCIgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiICNzcGFuPnt7IGNvbHVtbi5yZW5kZXJlcihyb3cpIH19PC9zcGFuPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NpbXBsZUNlbGw8VD4gZXh0ZW5kcyBfTm92b0NlbGwgaW1wbGVtZW50cyBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHB1YmxpYyByb2xlID0gJ2dyaWRjZWxsJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcm93OiBhbnk7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb2x1bW46IFNpbXBsZVRhYmxlQ29sdW1uPFQ+O1xuXG4gIGNvbnN0cnVjdG9yKGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtYXV0b21hdGlvbi1pZCcsIGBub3ZvLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBub3ZvLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLXNpbXBsZS1jZWxsJyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sdW1uLmN1c3RvbUNsYXNzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNvbHVtbi5jdXN0b21DbGFzcyh0aGlzLnJvdykpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2x1bW4ud2lkdGgpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtaW4td2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21heC13aWR0aCcsIGAke3RoaXMuY29sdW1uLndpZHRofXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aH1weGApO1xuICAgICAgLy8gVE9ETyAtIHRoaXMgaW5oaWJpdHMgcmVzaXppbmcgdGhlIHBhZ2UgYWZ0ZXIgdGhlIGluaXRpYWwgbG9hZCAtLSBidXQgZG8gd2UgY2FyZT8hPyFcbiAgICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGFuRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbWluLXdpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGggLSAyMH1weGApO1xuICAgICAgLy8gdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwYW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdtYXgtd2lkdGgnLCBgJHt0aGlzLmNvbHVtbi53aWR0aCAtIDIwfXB4YCk7XG4gICAgICAvLyB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc3BhbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7dGhpcy5jb2x1bW4ud2lkdGggLSAyMH1weGApO1xuICAgIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgICAgLy8gVE9ETyAtIHRoaXMgaW5oaWJpdHMgcmVzaXppbmcgdGhlIHBhZ2UgYWZ0ZXIgdGhlIGluaXRpYWwgbG9hZCAtLSBidXQgZG8gd2UgY2FyZT8hPyFcbiAgICAvLyAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNwYW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdtaW4td2lkdGgnLCBgJHt0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIDIwfXB4YCk7XG4gICAgLy8gICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zcGFuRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbWF4LXdpZHRoJywgYCR7dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggLSAyMH1weGApO1xuICAgIC8vICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc3BhbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggLSAyMH1weGApO1xuICAgIC8vIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIGlmICh0aGlzLmNvbHVtbi5vbkNsaWNrKSB7XG4gICAgICB0aGlzLmNvbHVtbi5vbkNsaWNrKHRoaXMucm93KTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tc2ltcGxlLWNoZWNrYm94LWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxub3ZvLWNoZWNrYm94IFtuZ01vZGVsXT1cInNlbGVjdGVkXCIgKG5nTW9kZWxDaGFuZ2UpPVwidG9nZ2xlKCRldmVudClcIj48L25vdm8tY2hlY2tib3g+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVDaGVja2JveENlbGwgZXh0ZW5kcyBfTm92b0NlbGwgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcHVibGljIHJvbGUgPSAnZ3JpZGNlbGwnO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByb3c6IGFueTtcbiAgQElucHV0KClcbiAgcHVibGljIGluZGV4OiBhbnk7XG5cbiAgcHVibGljIHNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgc2VsZWN0QWxsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBAT3B0aW9uYWwoKSBwdWJsaWMgX3NlbGVjdGlvbjogTm92b1NlbGVjdGlvbikge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtYXV0b21hdGlvbi1pZCcsIGBub3ZvLWNoZWNrYm94LWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBub3ZvLWNoZWNrYm94LWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdub3ZvLXNpbXBsZS1jaGVja2JveC1jZWxsJyk7XG5cbiAgICB0aGlzLnNlbGVjdEFsbFN1YnNjcmlwdGlvbiA9IF9zZWxlY3Rpb24ubm92b1NlbGVjdEFsbFRvZ2dsZS5zdWJzY3JpYmUoKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0aW9uLnJlZ2lzdGVyKHRoaXMucm93LmlkIHx8IHRoaXMuaW5kZXgsIHRoaXMucm93KTtcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5fc2VsZWN0aW9uLnN0YXRlLnNlbGVjdGVkUm93cy5oYXModGhpcy5yb3cuaWQgfHwgdGhpcy5pbmRleCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0aW9uLmRlcmVnaXN0ZXIodGhpcy5yb3cuaWQgfHwgdGhpcy5pbmRleCk7XG4gICAgdGhpcy5zZWxlY3RBbGxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3Rpb24udG9nZ2xlKHRoaXMucm93LmlkIHx8IHRoaXMuaW5kZXgsIHZhbHVlLCB0aGlzLnJvdyk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1zaW1wbGUtYWN0aW9uLWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29sdW1uLm9wdGlvbnNcIj5cbiAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgW2ljb25dPVwiY29sdW1uLmljb25cIiAoY2xpY2spPVwiY29sdW1uLm9uQ2xpY2socm93KVwiIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkKGNvbHVtbiwgcm93KVwiPjwvYnV0dG9uPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4ub3B0aW9uc1wiPlxuICAgICAgPG5vdm8tZHJvcGRvd24gcGFyZW50U2Nyb2xsU2VsZWN0b3I9XCIubm92by1zaW1wbGUtdGFibGVcIiBjb250YWluZXJDbGFzcz1cIm5vdm8tdGFibGUtZHJvcGRvd24tY2VsbFwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aGVtZT1cImRpYWxvZ3VlXCIgaWNvbj1cImNvbGxhcHNlXCIgaW52ZXJzZT57eyBjb2x1bW4ubGFiZWwgfHwgbGFiZWxzLmFjdGlvbnMgfX08L2J1dHRvbj5cbiAgICAgICAgPGxpc3Q+XG4gICAgICAgICAgPGl0ZW0gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb2x1bW4ub3B0aW9uc1wiIChhY3Rpb24pPVwib3B0aW9uLm9uQ2xpY2socm93KVwiIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkKG9wdGlvbiwgcm93KVwiPlxuICAgICAgICAgICAgPHNwYW4gW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIm9wdGlvbi5sYWJlbFwiPnt7IG9wdGlvbi5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2l0ZW0+XG4gICAgICAgIDwvbGlzdD5cbiAgICAgIDwvbm92by1kcm9wZG93bj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9TaW1wbGVBY3Rpb25DZWxsPFQ+IGV4dGVuZHMgX05vdm9DZWxsIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBwdWJsaWMgcm9sZSA9ICdncmlkY2VsbCc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHJvdzogVDtcbiAgQElucHV0KClcbiAgcHVibGljIGNvbHVtbjogU2ltcGxlVGFibGVBY3Rpb25Db2x1bW48VD47XG5cbiAgY29uc3RydWN0b3IoY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1hdXRvbWF0aW9uLWlkJywgYG5vdm8tYWN0aW9uLWNvbHVtbi0ke2NvbHVtbkRlZi5jc3NDbGFzc0ZyaWVuZGx5TmFtZX1gKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2x1bW4ub3B0aW9ucykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tc2ltcGxlLWRyb3Bkb3duLWNlbGwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25vdm8tc2ltcGxlLWJ1dHRvbi1jZWxsJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzRGlzYWJsZWQoY2hlY2s6IFNpbXBsZVRhYmxlQWN0aW9uQ29sdW1uPFQ+IHwgU2ltcGxlVGFibGVBY3Rpb25Db2x1bW5PcHRpb248VD4sIHJvdzogVCk6IGJvb2xlYW4ge1xuICAgIGlmIChjaGVjay5kaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChjaGVjay5kaXNhYmxlZENoZWNrKSB7XG4gICAgICByZXR1cm4gY2hlY2suZGlzYWJsZWRDaGVjayhyb3cpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==