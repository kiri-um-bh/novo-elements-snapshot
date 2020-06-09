// NG
import { Component, TemplateRef, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
// App
import { NovoFormGroup } from './NovoFormGroup';
import { BaseControl } from './controls/BaseControl';
import { FormUtils } from './../../utils/form-utils/FormUtils';
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "./../../utils/form-utils/FormUtils";
import * as i2 from "@angular/forms";
import * as i3 from "../../services/novo-label-service";
function NovoControlGroup_h6_0_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 11);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r9.icon);
    i0.ɵɵattribute("data-automation-id", "novo-control-group-icon-" + ctx_r9.key);
} }
function NovoControlGroup_h6_0_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 12);
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("toggled", ctx_r10.toggled);
    i0.ɵɵattribute("data-automation-id", "novo-control-group-collapse-" + ctx_r10.key);
} }
function NovoControlGroup_h6_0_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("data-automation-id", "novo-control-group-description-" + ctx_r11.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r11.description);
} }
function NovoControlGroup_h6_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "h6", 6);
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵlistener("click", function NovoControlGroup_h6_0_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.toggle($event); });
    i0.ɵɵtemplate(2, NovoControlGroup_h6_0_i_2_Template, 1, 2, "i", 8);
    i0.ɵɵtemplate(3, NovoControlGroup_h6_0_i_3_Template, 1, 3, "i", 9);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, NovoControlGroup_h6_0_label_6_Template, 2, 2, "label", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("clickable", ctx_r0.collapsible);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.icon && !ctx_r0.collapsible);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.collapsible);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-automation-id", "novo-control-group-label-" + ctx_r0.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.description);
} }
function NovoControlGroup_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "novo-control", 19);
    i0.ɵɵlistener("change", function NovoControlGroup_ng_template_2_div_1_Template_novo_control_change_1_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.onChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r22 = ctx.$implicit;
    const ctx_r25 = i0.ɵɵnextContext();
    const form_r15 = ctx_r25.form;
    const key_r16 = ctx_r25.key;
    const index_r14 = ctx_r25.index;
    const ctx_r17 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("novo-control-container ", c_r22.key, "");
    i0.ɵɵstyleProp("max-width", c_r22.width, "px");
    i0.ɵɵclassProp("is-label", c_r22.controlType === "read-only");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("form", form_r15 == null ? null : form_r15.controls[key_r16]["controls"][index_r14])("control", c_r22)("condensed", !ctx_r17.vertical || c_r22.controlType === "read-only");
} }
function NovoControlGroup_ng_template_2_div_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function NovoControlGroup_ng_template_2_div_2_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r29); const index_r14 = i0.ɵɵnextContext(2).index; const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.editControl(index_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(2);
    const index_r14 = ctx_r30.index;
    const key_r16 = ctx_r30.key;
    const ctx_r26 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r26.disabledArray[index_r14].edit);
    i0.ɵɵattribute("data-automation-id", "novo-control-group-edit-" + key_r16);
} }
function NovoControlGroup_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_template_2_div_2_button_1_Template, 1, 2, "button", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.edit && !ctx_r18.vertical);
} }
function NovoControlGroup_ng_template_2_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function NovoControlGroup_ng_template_2_div_3_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r34); const index_r14 = i0.ɵɵnextContext(2).index; const ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.removeControl(index_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r35 = i0.ɵɵnextContext(2);
    const index_r14 = ctx_r35.index;
    const key_r16 = ctx_r35.key;
    const ctx_r31 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r31.disabledArray[index_r14].remove);
    i0.ɵɵattribute("data-automation-id", "novo-control-group-delete-" + key_r16);
} }
function NovoControlGroup_ng_template_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_template_2_div_3_button_1_Template, 1, 2, "button", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.remove && !ctx_r19.vertical);
} }
function NovoControlGroup_ng_template_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function NovoControlGroup_ng_template_2_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r38); const index_r14 = i0.ɵɵnextContext().index; const ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.editControl(index_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const index_r14 = ctx_r39.index;
    const key_r16 = ctx_r39.key;
    const ctx_r20 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r20.disabledArray[index_r14].edit);
    i0.ɵɵattribute("data-automation-id", "novo-control-group-edit-" + key_r16);
} }
function NovoControlGroup_ng_template_2_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function NovoControlGroup_ng_template_2_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r42); const index_r14 = i0.ɵɵnextContext().index; const ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.removeControl(index_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r43 = i0.ɵɵnextContext();
    const index_r14 = ctx_r43.index;
    const key_r16 = ctx_r43.key;
    const ctx_r21 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r21.disabledArray[index_r14].remove);
    i0.ɵɵattribute("data-automation-id", "novo-control-group-delete-" + key_r16);
} }
function NovoControlGroup_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_template_2_div_1_Template, 2, 10, "div", 15);
    i0.ɵɵtemplate(2, NovoControlGroup_ng_template_2_div_2_Template, 2, 1, "div", 16);
    i0.ɵɵtemplate(3, NovoControlGroup_ng_template_2_div_3_Template, 2, 1, "div", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, NovoControlGroup_ng_template_2_button_4_Template, 1, 2, "button", 17);
    i0.ɵɵtemplate(5, NovoControlGroup_ng_template_2_button_5_Template, 1, 2, "button", 18);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.controls);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.edit && !ctx_r2.vertical);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.remove && !ctx_r2.vertical);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.edit && ctx_r2.vertical);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.remove && ctx_r2.vertical);
} }
function NovoControlGroup_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const label_r49 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("novo-control-group-control-label ", label_r49.key, "");
    i0.ɵɵstyleProp("max-width", label_r49.width, "px");
    i0.ɵɵclassProp("column-required", label_r49.required);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-automation-id", "novo-control-group-label-" + label_r49.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(label_r49.value);
} }
function NovoControlGroup_ng_template_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 25);
} if (rf & 2) {
    const key_r45 = i0.ɵɵnextContext().key;
    i0.ɵɵattribute("data-automation-id", "novo-control-group-edit-" + key_r45);
} }
function NovoControlGroup_ng_template_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 25);
} if (rf & 2) {
    const key_r45 = i0.ɵɵnextContext().key;
    i0.ɵɵattribute("data-automation-id", "novo-control-group-delete-" + key_r45);
} }
function NovoControlGroup_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NovoControlGroup_ng_template_4_div_0_Template, 3, 9, "div", 23);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_template_4_div_1_Template, 1, 1, "div", 24);
    i0.ɵɵtemplate(2, NovoControlGroup_ng_template_4_div_2_Template, 1, 1, "div", 24);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngForOf", ctx_r4.controlLabels);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.edit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.remove);
} }
function NovoControlGroup_ng_container_6_div_1_ng_template_1_Template(rf, ctx) { }
const _c0 = function (a0, a1, a2) { return { form: a0, key: a1, controlLabels: a2 }; };
function NovoControlGroup_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_container_6_div_1_ng_template_1_Template, 0, 0, "ng-template", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r52 = i0.ɵɵnextContext(2);
    const _r3 = i0.ɵɵreference(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r52.columnLabelTemplate || _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c0, ctx_r52.form, ctx_r52.key, ctx_r52.controlLabels));
} }
function NovoControlGroup_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_container_6_div_1_Template, 2, 6, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.vertical && (ctx_r5.form == null ? null : ctx_r5.form.controls[ctx_r5.key]) && (ctx_r5.form == null ? null : ctx_r5.form.controls[ctx_r5.key]["controls"].length) !== 0);
} }
function NovoControlGroup_ng_container_7_div_1_ng_template_1_Template(rf, ctx) { }
const _c1 = function (a0, a1, a2, a3) { return { form: a0, index: a1, key: a2, controls: a3 }; };
function NovoControlGroup_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_container_7_div_1_ng_template_1_Template, 0, 0, "ng-template", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r56 = ctx.index;
    const ctx_r54 = i0.ɵɵnextContext(2);
    const _r1 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r54.rowTemplate || _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c1, ctx_r54.form, index_r56, ctx_r54.key, ctx_r54.controls));
} }
function NovoControlGroup_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_container_7_div_1_Template, 2, 7, "div", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.form == null ? null : ctx_r6.form.controls[ctx_r6.key]["controls"]);
} }
function NovoControlGroup_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-automation-id", "novo-control-group-empty-" + ctx_r7.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.emptyMessage, " ");
} }
function NovoControlGroup_p_9_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵelementStart(1, "button", 32);
    i0.ɵɵlistener("click", function NovoControlGroup_p_9_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r59); const ctx_r58 = i0.ɵɵnextContext(); return ctx_r58.addNewControl(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-automation-id", "novo-control-group-bottom-add-" + ctx_r8.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r8.add == null ? null : ctx_r8.add.label, " ");
} }
export class NovoControlGroup {
    constructor(formUtils, fb, ref, labels) {
        this.formUtils = formUtils;
        this.fb = fb;
        this.ref = ref;
        this.labels = labels;
        this._vertical = false;
        this._remove = false;
        this._edit = false;
        this._collapsible = false;
        this.onRemove = new EventEmitter();
        this.onEdit = new EventEmitter();
        this.onAdd = new EventEmitter();
        this.change = new EventEmitter();
        this.controlLabels = [];
        this.toggled = false;
        this.disabledArray = [];
        this.currentIndex = 0;
    }
    // Sets the display of the group to either be row (default) or vertical via flex-box
    set vertical(v) {
        this._vertical = coerceBooleanProperty(v);
    }
    get vertical() {
        return this._vertical;
    }
    // Hide/shows the remove button for removing a control
    set remove(v) {
        this._remove = coerceBooleanProperty(v);
    }
    get remove() {
        return this._remove;
    }
    // Hide/shows the edit button for editing a control
    set edit(v) {
        this._edit = coerceBooleanProperty(v);
    }
    get edit() {
        return this._edit;
    }
    // Allows the control to collapse or not
    set collapsible(v) {
        this._collapsible = coerceBooleanProperty(v);
    }
    get collapsible() {
        return this._collapsible;
    }
    // Icon of the control group (can have bhi prefix or not)
    set icon(v) {
        this._icon = v && v.indexOf('bhi') !== -1 ? v : `bhi-${v}`;
    }
    get icon() {
        return this._icon;
    }
    ngAfterContentInit() {
        if (!this.key) {
            throw new Error('novo-control-group must have the [key] attribute provided!');
        }
    }
    ngOnChanges(changes) {
        const initialValueChange = changes['initialValue'];
        // If initial value changes, clear the controls
        if (initialValueChange && initialValueChange.currentValue !== initialValueChange.previousValue && !initialValueChange.firstChange) {
            this.clearControls();
        }
        // Check for array, add a control for each value
        if (this.initialValue && Array.isArray(this.initialValue)) {
            if (this.initialValue.length !== 0) {
                this.currentIndex = 0;
                this.initialValue.forEach((value) => this.addNewControl(value));
            }
        }
        else if (this.initialValue) {
            // If value is an object, just add one control
            this.addNewControl(this.initialValue);
        }
        // If we are horizontal, grab the labels to help with layout
        if (!this.vertical) {
            this.controlLabels = (this.controls || []).map((control) => {
                return {
                    value: control.label,
                    width: control.width,
                    required: control.required,
                    key: control.key,
                };
            });
            this.ref.markForCheck();
        }
    }
    onChange(change) {
        this.change.emit(this);
    }
    resetAddRemove() {
        this.disabledArray.forEach((item, idx) => {
            item.edit = this.checkCanEdit(idx);
            item.remove = this.checkCanRemove(idx);
        });
        this.ref.markForCheck();
    }
    addNewControl(value) {
        const control = this.form.controls[this.key];
        const newCtrl = this.buildControl(value);
        if (control) {
            control.push(newCtrl);
        }
        else {
            this.form.addControl(this.key, this.fb.array([newCtrl]));
        }
        this.disabledArray.push({
            edit: true,
            remove: true,
        });
        this.resetAddRemove();
        if (!value) {
            this.onAdd.emit();
        }
        this.currentIndex++;
        this.ref.markForCheck();
    }
    buildControl(value) {
        const newControls = this.getNewControls(this.controls);
        if (value) {
            this.formUtils.setInitialValues(newControls, value);
        }
        const ctrl = this.formUtils.toFormGroup(newControls);
        return ctrl;
    }
    removeControl(index, emitEvent = true) {
        const control = this.form.controls[this.key];
        if (emitEvent) {
            this.onRemove.emit({ value: control.at(index).value, index });
        }
        control.removeAt(index);
        this.disabledArray = this.disabledArray.filter((value, idx) => idx !== index);
        this.resetAddRemove();
        this.currentIndex--;
        this.ref.markForCheck();
    }
    editControl(index) {
        const control = this.form.controls[this.key];
        this.onEdit.emit({ value: control.at(index).value, index });
    }
    toggle(event) {
        Helpers.swallowEvent(event);
        if (this.collapsible) {
            this.toggled = !this.toggled;
            this.ref.markForCheck();
        }
    }
    clearControls() {
        const control = this.form.controls[this.key];
        if (control) {
            for (let i = control.controls.length; i >= 0; i--) {
                this.removeControl(i, false);
            }
            this.currentIndex = 0;
        }
    }
    checkCanEdit(index) {
        if (this.canEdit) {
            const control = this.form.controls[this.key];
            return this.canEdit(control.at(index).value, index);
        }
        return true;
    }
    checkCanRemove(index) {
        if (this.canRemove) {
            const control = this.form.controls[this.key];
            if (control.at(index)) {
                return this.canRemove(control.at(index).value, index);
            }
            return true;
        }
        return true;
    }
    getNewControls(controls) {
        const ret = [];
        (this.controls || []).forEach((control) => {
            ret.push(new BaseControl(control.__type, control));
        });
        return ret;
    }
}
NovoControlGroup.ɵfac = function NovoControlGroup_Factory(t) { return new (t || NovoControlGroup)(i0.ɵɵdirectiveInject(i1.FormUtils), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.NovoLabelService)); };
NovoControlGroup.ɵcmp = i0.ɵɵdefineComponent({ type: NovoControlGroup, selectors: [["novo-control-group"]], inputs: { vertical: "vertical", add: "add", remove: "remove", edit: "edit", collapsible: "collapsible", form: "form", controls: "controls", key: "key", label: "label", description: "description", emptyMessage: "emptyMessage", icon: "icon", initialValue: "initialValue", canEdit: "canEdit", canRemove: "canRemove", rowTemplate: "rowTemplate", columnLabelTemplate: "columnLabelTemplate" }, outputs: { onRemove: "onRemove", onEdit: "onEdit", onAdd: "onAdd", change: "change" }, features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 11, consts: [["class", "novo-section-header", 4, "ngIf"], [1, "novo-control-group-controls"], ["defaultTemplate", ""], ["defaultColumnLabelTemplate", ""], [4, "ngIf"], ["class", "novo-control-group-empty", 4, "ngIf"], [1, "novo-section-header"], [3, "click"], [3, "ngClass", 4, "ngIf"], ["class", "bhi-next", 3, "toggled", 4, "ngIf"], ["class", "novo-control-group-description", 4, "ngIf"], [3, "ngClass"], [1, "bhi-next"], [1, "novo-control-group-description"], [1, "novo-control-group-control"], [3, "class", "is-label", "max-width", 4, "ngFor", "ngForOf"], ["class", "novo-control-container last", 4, "ngIf"], ["type", "button", "theme", "icon", "icon", "edit", "index", "-1", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "theme", "icon", "icon", "delete-o", "index", "-1", 3, "disabled", "click", 4, "ngIf"], [3, "form", "control", "condensed", "change"], [1, "novo-control-container", "last"], ["type", "button", "theme", "icon", "icon", "edit", "index", "-1", 3, "disabled", "click"], ["type", "button", "theme", "icon", "icon", "delete-o", "index", "-1", 3, "disabled", "click"], [3, "class", "max-width", "column-required", 4, "ngFor", "ngForOf"], ["class", "novo-control-group-control-label last", 4, "ngIf"], [1, "novo-control-group-control-label", "last"], ["class", "novo-control-group-labels", 4, "ngIf"], [1, "novo-control-group-labels"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "novo-control-group-row", 4, "ngFor", "ngForOf"], [1, "novo-control-group-row"], [1, "novo-control-group-empty"], ["type", "button", "theme", "dialogue", "icon", "add-thin", "index", "-1", 3, "click"]], template: function NovoControlGroup_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoControlGroup_h6_0_Template, 7, 7, "h6", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, NovoControlGroup_ng_template_2_Template, 6, 5, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, NovoControlGroup_ng_template_4_Template, 3, 3, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(6, NovoControlGroup_ng_container_6_Template, 2, 1, "ng-container", 4);
        i0.ɵɵtemplate(7, NovoControlGroup_ng_container_7_Template, 2, 1, "ng-container", 4);
        i0.ɵɵtemplate(8, NovoControlGroup_div_8_Template, 2, 2, "div", 5);
        i0.ɵɵtemplate(9, NovoControlGroup_p_9_Template, 3, 2, "p", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.label);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("vertical", ctx.vertical)("horizontal", !ctx.vertical)("hidden", ctx.collapsible && !ctx.toggled);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", !ctx.vertical && (ctx.form == null ? null : ctx.form.controls[ctx.key]) && (ctx.form == null ? null : ctx.form.controls[ctx.key]["controls"].length) !== 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.form == null ? null : ctx.form.controls[ctx.key]);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.form == null ? null : ctx.form.controls[ctx.key]) && (ctx.form == null ? null : ctx.form.controls[ctx.key]["controls"].length) === 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.add);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoControlGroup, [{
        type: Component,
        args: [{
                selector: 'novo-control-group',
                templateUrl: './ControlGroup.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.FormUtils }, { type: i2.FormBuilder }, { type: i0.ChangeDetectorRef }, { type: i3.NovoLabelService }]; }, { vertical: [{
            type: Input
        }], add: [{
            type: Input
        }], remove: [{
            type: Input
        }], edit: [{
            type: Input
        }], collapsible: [{
            type: Input
        }], form: [{
            type: Input
        }], controls: [{
            type: Input
        }], key: [{
            type: Input
        }], label: [{
            type: Input
        }], description: [{
            type: Input
        }], emptyMessage: [{
            type: Input
        }], icon: [{
            type: Input
        }], initialValue: [{
            type: Input
        }], canEdit: [{
            type: Input
        }], canRemove: [{
            type: Input
        }], rowTemplate: [{
            type: Input
        }], columnLabelTemplate: [{
            type: Input
        }], onRemove: [{
            type: Output
        }], onEdit: [{
            type: Output
        }], onAdd: [{
            type: Output
        }], change: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbEdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vQ29udHJvbEdyb3VwLnRzIiwiZWxlbWVudHMvZm9ybS9Db250cm9sR3JvdXAuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLO0FBQ0wsT0FBTyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFlBQVksR0FJYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsTUFBTTtBQUNOLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7O0lDbkJqRSx3QkFBa0g7OztJQUFsRixxQ0FBZ0I7SUFBQyw2RUFBNEQ7OztJQUM3Ryx3QkFBdUk7OztJQUEvRiwwQ0FBeUI7SUFBQyxrRkFBZ0U7OztJQUdwSSxpQ0FBc0k7SUFBQSxZQUFpQjtJQUFBLGlCQUFROzs7SUFBN0YscUZBQW1FO0lBQUMsZUFBaUI7SUFBakIseUNBQWlCOzs7O0lBTnpKLDZCQUNFO0lBQUEsK0JBQ0U7SUFESSw0TEFBd0I7SUFDNUIsa0VBQThHO0lBQzlHLGtFQUFtSTtJQUNuSSw0QkFBb0U7SUFBQSxZQUFXO0lBQUEsaUJBQU87SUFDeEYsaUJBQU87SUFDUCwyRUFBc0k7SUFDeEksaUJB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QUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOR1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBUZW1wbGF0ZVJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuLy8gQXBwXG5pbXBvcnQgeyBOb3ZvRm9ybUdyb3VwIH0gZnJvbSAnLi9Ob3ZvRm9ybUdyb3VwJztcbmltcG9ydCB7IEJhc2VDb250cm9sIH0gZnJvbSAnLi9jb250cm9scy9CYXNlQ29udHJvbCc7XG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2Zvcm0tdXRpbHMvRm9ybVV0aWxzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9Db250cm9sR3JvdXBBZGRDb25maWcge1xuICBsYWJlbDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9Db250cm9sR3JvdXBSb3dDb25maWcge1xuICBlZGl0OiBib29sZWFuO1xuICByZW1vdmU6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY29udHJvbC1ncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9Db250cm9sR3JvdXAuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ29udHJvbEdyb3VwIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcbiAgLy8gU2V0cyB0aGUgZGlzcGxheSBvZiB0aGUgZ3JvdXAgdG8gZWl0aGVyIGJlIHJvdyAoZGVmYXVsdCkgb3IgdmVydGljYWwgdmlhIGZsZXgtYm94XG4gIEBJbnB1dCgpXG4gIHNldCB2ZXJ0aWNhbCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmVydGljYWwgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IHZlcnRpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcbiAgfVxuICBwcml2YXRlIF92ZXJ0aWNhbCA9IGZhbHNlO1xuICAvLyBIaWRlcy9zaG93cyB0aGUgYWRkIGJ1dHRvbiBmb3IgYWRkaW5nIGEgbmV3IGNvbnRyb2xcbiAgQElucHV0KCkgYWRkOiBOb3ZvQ29udHJvbEdyb3VwQWRkQ29uZmlnO1xuICAvLyBIaWRlL3Nob3dzIHRoZSByZW1vdmUgYnV0dG9uIGZvciByZW1vdmluZyBhIGNvbnRyb2xcbiAgQElucHV0KClcbiAgc2V0IHJlbW92ZSh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVtb3ZlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbW92ZTtcbiAgfVxuICBwcml2YXRlIF9yZW1vdmUgPSBmYWxzZTtcbiAgLy8gSGlkZS9zaG93cyB0aGUgZWRpdCBidXR0b24gZm9yIGVkaXRpbmcgYSBjb250cm9sXG4gIEBJbnB1dCgpXG4gIHNldCBlZGl0KHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lZGl0ID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBlZGl0KCkge1xuICAgIHJldHVybiB0aGlzLl9lZGl0O1xuICB9XG4gIHByaXZhdGUgX2VkaXQgPSBmYWxzZTtcbiAgLy8gQWxsb3dzIHRoZSBjb250cm9sIHRvIGNvbGxhcHNlIG9yIG5vdFxuICBASW5wdXQoKVxuICBzZXQgY29sbGFwc2libGUodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2NvbGxhcHNpYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBjb2xsYXBzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sbGFwc2libGU7XG4gIH1cbiAgcHJpdmF0ZSBfY29sbGFwc2libGUgPSBmYWxzZTtcbiAgLy8gTWFpbiBmb3JtIGdyb3VwXG4gIEBJbnB1dCgpIGZvcm06IE5vdm9Gb3JtR3JvdXA7XG4gIC8vIENvbnRyb2xzIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGNvbnRyb2wgZ3JvdXBcbiAgQElucHV0KCkgY29udHJvbHM6IEJhc2VDb250cm9sW107XG4gIC8vIEtleSBvZiB0aGUgY29udHJvbCBncm91cCAob24gdGhlIG1haW4gZm9ybSlcbiAgQElucHV0KCkga2V5OiBzdHJpbmc7XG4gIC8vIExhYmVsIG9mIHRoZSBjb250cm9sIGdyb3VwXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIC8vIERlc2NyaXB0aW9uIG9mIHRoZSBjb250cm9sIGdyb3VwIChvbmx5IHVzZSB3aXRoIHBvc2l0aW9uOmJvdHRvbSBBZGQgYnV0dG9uISlcbiAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZztcbiAgLy8gTWVzc2FnZSB0byBkaXNwbGF5IGlmIHRoZXJlIGFyZSBubyBjb250cm9sc1xuICBASW5wdXQoKSBlbXB0eU1lc3NhZ2U6IHN0cmluZztcbiAgLy8gSWNvbiBvZiB0aGUgY29udHJvbCBncm91cCAoY2FuIGhhdmUgYmhpIHByZWZpeCBvciBub3QpXG4gIEBJbnB1dCgpXG4gIHNldCBpY29uKHY6IHN0cmluZykge1xuICAgIHRoaXMuX2ljb24gPSB2ICYmIHYuaW5kZXhPZignYmhpJykgIT09IC0xID8gdiA6IGBiaGktJHt2fWA7XG4gIH1cbiAgZ2V0IGljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xuICAvLyBUaGUgaW5pdGlhbCB2YWx1ZSBvYmplY3QsIHdpbGwgY3JlYXRlIHRoZSBmb3JtIHJvd3Mgb2ZmIG9mXG4gIEBJbnB1dCgpIGluaXRpYWxWYWx1ZToge31bXTtcbiAgLy8gQ2FsbGJhY2sgdG8gZGV0ZXJtaW5lIGlmIHRoZSB1c2VyIGNhbiBlZGl0XG4gIEBJbnB1dCgpIGNhbkVkaXQ6IEZ1bmN0aW9uO1xuICAvLyBDYWxsYmFjayB0byBkZXRlcm1pbmUgaWYgdGhlIHVzZXIgY2FuIGRlbGV0ZVxuICBASW5wdXQoKSBjYW5SZW1vdmU6IEZ1bmN0aW9uO1xuICAvLyBUZW1wbGF0ZSBmb3IgY3VzdG9tIHJvdyByZW5kZXJpbmdcbiAgQElucHV0KCkgcm93VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8vIFRlbXBsYXRlIGZvciBjdXN0b20gY29sdW1uIGxhYmVsIHJlbmRlcmluZ1xuICBASW5wdXQoKSBjb2x1bW5MYWJlbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKSBvblJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyB2YWx1ZTsgaW5kZXggfT4oKTtcbiAgQE91dHB1dCgpIG9uRWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8eyB2YWx1ZTsgaW5kZXggfT4oKTtcbiAgQE91dHB1dCgpIG9uQWRkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb250cm9sTGFiZWxzOiB7IHZhbHVlOiBzdHJpbmc7IHdpZHRoOiBudW1iZXI7IHJlcXVpcmVkOiBib29sZWFuOyBrZXk6IHN0cmluZyB9W10gPSBbXTtcbiAgdG9nZ2xlZCA9IGZhbHNlO1xuICBkaXNhYmxlZEFycmF5OiB7IGVkaXQ6IGJvb2xlYW47IHJlbW92ZTogYm9vbGVhbiB9W10gPSBbXTtcblxuICBjdXJyZW50SW5kZXggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybVV0aWxzOiBGb3JtVXRpbHMsIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAoIXRoaXMua2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdm8tY29udHJvbC1ncm91cCBtdXN0IGhhdmUgdGhlIFtrZXldIGF0dHJpYnV0ZSBwcm92aWRlZCEnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgaW5pdGlhbFZhbHVlQ2hhbmdlOiBTaW1wbGVDaGFuZ2UgPSBjaGFuZ2VzWydpbml0aWFsVmFsdWUnXTtcblxuICAgIC8vIElmIGluaXRpYWwgdmFsdWUgY2hhbmdlcywgY2xlYXIgdGhlIGNvbnRyb2xzXG4gICAgaWYgKGluaXRpYWxWYWx1ZUNoYW5nZSAmJiBpbml0aWFsVmFsdWVDaGFuZ2UuY3VycmVudFZhbHVlICE9PSBpbml0aWFsVmFsdWVDaGFuZ2UucHJldmlvdXNWYWx1ZSAmJiAhaW5pdGlhbFZhbHVlQ2hhbmdlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLmNsZWFyQ29udHJvbHMoKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgYXJyYXksIGFkZCBhIGNvbnRyb2wgZm9yIGVhY2ggdmFsdWVcbiAgICBpZiAodGhpcy5pbml0aWFsVmFsdWUgJiYgQXJyYXkuaXNBcnJheSh0aGlzLmluaXRpYWxWYWx1ZSkpIHtcbiAgICAgIGlmICh0aGlzLmluaXRpYWxWYWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZS5mb3JFYWNoKCh2YWx1ZSkgPT4gdGhpcy5hZGROZXdDb250cm9sKHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmluaXRpYWxWYWx1ZSkge1xuICAgICAgLy8gSWYgdmFsdWUgaXMgYW4gb2JqZWN0LCBqdXN0IGFkZCBvbmUgY29udHJvbFxuICAgICAgdGhpcy5hZGROZXdDb250cm9sKHRoaXMuaW5pdGlhbFZhbHVlKTtcbiAgICB9XG4gICAgLy8gSWYgd2UgYXJlIGhvcml6b250YWwsIGdyYWIgdGhlIGxhYmVscyB0byBoZWxwIHdpdGggbGF5b3V0XG4gICAgaWYgKCF0aGlzLnZlcnRpY2FsKSB7XG4gICAgICB0aGlzLmNvbnRyb2xMYWJlbHMgPSAodGhpcy5jb250cm9scyB8fCBbXSkubWFwKChjb250cm9sOiBCYXNlQ29udHJvbCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBjb250cm9sLmxhYmVsLFxuICAgICAgICAgIHdpZHRoOiBjb250cm9sLndpZHRoLFxuICAgICAgICAgIHJlcXVpcmVkOiBjb250cm9sLnJlcXVpcmVkLFxuICAgICAgICAgIGtleTogY29udHJvbC5rZXksXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZSkge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcyk7XG4gIH1cblxuICByZXNldEFkZFJlbW92ZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkQXJyYXkuZm9yRWFjaCgoaXRlbTogTm92b0NvbnRyb2xHcm91cFJvd0NvbmZpZywgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgIGl0ZW0uZWRpdCA9IHRoaXMuY2hlY2tDYW5FZGl0KGlkeCk7XG4gICAgICBpdGVtLnJlbW92ZSA9IHRoaXMuY2hlY2tDYW5SZW1vdmUoaWR4KTtcbiAgICB9KTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGFkZE5ld0NvbnRyb2wodmFsdWU/OiB7fSkge1xuICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICBjb25zdCBuZXdDdHJsOiBOb3ZvRm9ybUdyb3VwID0gdGhpcy5idWlsZENvbnRyb2wodmFsdWUpO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICBjb250cm9sLnB1c2gobmV3Q3RybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKHRoaXMua2V5LCB0aGlzLmZiLmFycmF5KFtuZXdDdHJsXSkpO1xuICAgIH1cbiAgICB0aGlzLmRpc2FibGVkQXJyYXkucHVzaCh7XG4gICAgICBlZGl0OiB0cnVlLFxuICAgICAgcmVtb3ZlOiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMucmVzZXRBZGRSZW1vdmUoKTtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLm9uQWRkLmVtaXQoKTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50SW5kZXgrKztcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGJ1aWxkQ29udHJvbCh2YWx1ZT86IHt9KTogTm92b0Zvcm1Hcm91cCB7XG4gICAgY29uc3QgbmV3Q29udHJvbHMgPSB0aGlzLmdldE5ld0NvbnRyb2xzKHRoaXMuY29udHJvbHMpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5mb3JtVXRpbHMuc2V0SW5pdGlhbFZhbHVlcyhuZXdDb250cm9scywgdmFsdWUpO1xuICAgIH1cbiAgICBjb25zdCBjdHJsOiBOb3ZvRm9ybUdyb3VwID0gdGhpcy5mb3JtVXRpbHMudG9Gb3JtR3JvdXAobmV3Q29udHJvbHMpO1xuICAgIHJldHVybiBjdHJsO1xuICB9XG5cbiAgcmVtb3ZlQ29udHJvbChpbmRleDogbnVtYmVyLCBlbWl0RXZlbnQgPSB0cnVlKSB7XG4gICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gPEZvcm1BcnJheT50aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldO1xuICAgIGlmIChlbWl0RXZlbnQpIHtcbiAgICAgIHRoaXMub25SZW1vdmUuZW1pdCh7IHZhbHVlOiBjb250cm9sLmF0KGluZGV4KS52YWx1ZSwgaW5kZXggfSk7XG4gICAgfVxuICAgIGNvbnRyb2wucmVtb3ZlQXQoaW5kZXgpO1xuICAgIHRoaXMuZGlzYWJsZWRBcnJheSA9IHRoaXMuZGlzYWJsZWRBcnJheS5maWx0ZXIoKHZhbHVlOiBOb3ZvQ29udHJvbEdyb3VwUm93Q29uZmlnLCBpZHg6IG51bWJlcikgPT4gaWR4ICE9PSBpbmRleCk7XG4gICAgdGhpcy5yZXNldEFkZFJlbW92ZSgpO1xuICAgIHRoaXMuY3VycmVudEluZGV4LS07XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBlZGl0Q29udHJvbChpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gPEZvcm1BcnJheT50aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldO1xuICAgIHRoaXMub25FZGl0LmVtaXQoeyB2YWx1ZTogY29udHJvbC5hdChpbmRleCkudmFsdWUsIGluZGV4IH0pO1xuICB9XG5cbiAgdG9nZ2xlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIGlmICh0aGlzLmNvbGxhcHNpYmxlKSB7XG4gICAgICB0aGlzLnRvZ2dsZWQgPSAhdGhpcy50b2dnbGVkO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckNvbnRyb2xzKCkge1xuICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gY29udHJvbC5jb250cm9scy5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ29udHJvbChpLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0NhbkVkaXQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNhbkVkaXQpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICAgIHJldHVybiB0aGlzLmNhbkVkaXQoY29udHJvbC5hdChpbmRleCkudmFsdWUsIGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQ2FuUmVtb3ZlKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jYW5SZW1vdmUpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICAgIGlmIChjb250cm9sLmF0KGluZGV4KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW5SZW1vdmUoY29udHJvbC5hdChpbmRleCkudmFsdWUsIGluZGV4KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV3Q29udHJvbHMoY29udHJvbHM6IEJhc2VDb250cm9sW10pIHtcbiAgICBjb25zdCByZXQ6IEJhc2VDb250cm9sW10gPSBbXTtcbiAgICAodGhpcy5jb250cm9scyB8fCBbXSkuZm9yRWFjaCgoY29udHJvbDogQmFzZUNvbnRyb2wpID0+IHtcbiAgICAgIHJldC5wdXNoKG5ldyBCYXNlQ29udHJvbChjb250cm9sLl9fdHlwZSwgY29udHJvbCkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cbiIsIjxoNiBjbGFzcz1cIm5vdm8tc2VjdGlvbi1oZWFkZXJcIiAqbmdJZj1cImxhYmVsXCI+XG4gIDxzcGFuIChjbGljayk9XCJ0b2dnbGUoJGV2ZW50KVwiIFtjbGFzcy5jbGlja2FibGVdPVwiY29sbGFwc2libGVcIj5cbiAgICA8aSAqbmdJZj1cImljb24gJiYgIWNvbGxhcHNpYmxlXCIgW25nQ2xhc3NdPVwiaWNvblwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWljb24tJyArIGtleVwiPjwvaT5cbiAgICA8aSAqbmdJZj1cImNvbGxhcHNpYmxlXCIgY2xhc3M9XCJiaGktbmV4dFwiIFtjbGFzcy50b2dnbGVkXT1cInRvZ2dsZWRcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1jb2xsYXBzZS0nICsga2V5XCI+PC9pPlxuICAgIDxzcGFuIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWxhYmVsLScgKyBrZXlcIj57eyBsYWJlbCB9fTwvc3Bhbj5cbiAgPC9zcGFuPlxuICA8bGFiZWwgY2xhc3M9XCJub3ZvLWNvbnRyb2wtZ3JvdXAtZGVzY3JpcHRpb25cIiAqbmdJZj1cImRlc2NyaXB0aW9uXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtZGVzY3JpcHRpb24tJyArIGtleVwiPnt7IGRlc2NyaXB0aW9uIH19PC9sYWJlbD5cbjwvaDY+XG48ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWNvbnRyb2xzXCIgW2NsYXNzLnZlcnRpY2FsXT1cInZlcnRpY2FsXCIgW2NsYXNzLmhvcml6b250YWxdPVwiIXZlcnRpY2FsXCIgW2NsYXNzLmhpZGRlbl09XCJjb2xsYXBzaWJsZSAmJiAhdG9nZ2xlZFwiPlxuICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUZW1wbGF0ZSBsZXQtaW5kZXg9XCJpbmRleFwiIGxldC1mb3JtPVwiZm9ybVwiIGxldC1rZXk9XCJrZXlcIj5cbiAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWNvbnRyb2xcIj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGMgb2YgY29udHJvbHNcIiBjbGFzcz1cIm5vdm8tY29udHJvbC1jb250YWluZXIge3tjLmtleX19XCIgW2NsYXNzLmlzLWxhYmVsXT1cImMuY29udHJvbFR5cGUgPT09ICdyZWFkLW9ubHknXCIgW3N0eWxlLm1heC13aWR0aC5weF09XCJjLndpZHRoXCI+XG4gICAgICAgIDxub3ZvLWNvbnRyb2wgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgW2Zvcm1dPVwiKGZvcm0/LmNvbnRyb2xzKVtrZXldWydjb250cm9scyddW2luZGV4XVwiIFtjb250cm9sXT1cImNcIiBbY29uZGVuc2VkXT1cIiF2ZXJ0aWNhbCB8fCBjLmNvbnRyb2xUeXBlID09PSAncmVhZC1vbmx5J1wiPjwvbm92by1jb250cm9sPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWNvbnRhaW5lciBsYXN0XCIgKm5nSWY9XCJlZGl0ICYmICF2ZXJ0aWNhbFwiPlxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhZGlzYWJsZWRBcnJheVtpbmRleF0uZWRpdFwiIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cImVkaXQgJiYgIXZlcnRpY2FsXCIgdGhlbWU9XCJpY29uXCIgaWNvbj1cImVkaXRcIiAoY2xpY2spPVwiZWRpdENvbnRyb2woaW5kZXgpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtZWRpdC0nICsga2V5XCIgaW5kZXg9XCItMVwiPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWNvbnRhaW5lciBsYXN0XCIgKm5nSWY9XCJyZW1vdmUgJiYgIXZlcnRpY2FsXCI+XG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFkaXNhYmxlZEFycmF5W2luZGV4XS5yZW1vdmVcIiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJyZW1vdmUgJiYgIXZlcnRpY2FsXCIgdGhlbWU9XCJpY29uXCIgaWNvbj1cImRlbGV0ZS1vXCIgKGNsaWNrKT1cInJlbW92ZUNvbnRyb2woaW5kZXgpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtZGVsZXRlLScgKyBrZXlcIiBpbmRleD1cIi0xXCI+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhZGlzYWJsZWRBcnJheVtpbmRleF0uZWRpdFwiIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cImVkaXQgJiYgdmVydGljYWxcIiB0aGVtZT1cImljb25cIiBpY29uPVwiZWRpdFwiIChjbGljayk9XCJlZGl0Q29udHJvbChpbmRleClcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1lZGl0LScgKyBrZXlcIiBpbmRleD1cIi0xXCI+PC9idXR0b24+XG4gICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiIWRpc2FibGVkQXJyYXlbaW5kZXhdLnJlbW92ZVwiIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cInJlbW92ZSAmJiB2ZXJ0aWNhbFwiIHRoZW1lPVwiaWNvblwiIGljb249XCJkZWxldGUtb1wiIChjbGljayk9XCJyZW1vdmVDb250cm9sKGluZGV4KVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWRlbGV0ZS0nICsga2V5XCIgaW5kZXg9XCItMVwiPjwvYnV0dG9uPlxuICA8L25nLXRlbXBsYXRlPlxuICA8bmctdGVtcGxhdGUgI2RlZmF1bHRDb2x1bW5MYWJlbFRlbXBsYXRlIGxldC1mb3JtPVwiZm9ybVwiIGxldC1rZXk9XCJrZXlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtZ3JvdXAtY29udHJvbC1sYWJlbCB7eyBsYWJlbC5rZXkgfX1cIiAqbmdGb3I9XCJsZXQgbGFiZWwgb2YgY29udHJvbExhYmVsc1wiIFtzdHlsZS5tYXgtd2lkdGgucHhdPVwibGFiZWwud2lkdGhcIiBbY2xhc3MuY29sdW1uLXJlcXVpcmVkXT1cImxhYmVsLnJlcXVpcmVkXCI+XG4gICAgICAgIDxzcGFuIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWxhYmVsLScgKyBsYWJlbC52YWx1ZVwiPnt7IGxhYmVsLnZhbHVlIH19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWNvbnRyb2wtbGFiZWwgbGFzdFwiICpuZ0lmPVwiZWRpdFwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWVkaXQtJyArIGtleVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1jb250cm9sLWxhYmVsIGxhc3RcIiAqbmdJZj1cInJlbW92ZVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWRlbGV0ZS0nICsga2V5XCI+PC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdmVydGljYWwgJiYgKGZvcm0/LmNvbnRyb2xzKVtrZXldICYmIChmb3JtPy5jb250cm9scylba2V5XVsnY29udHJvbHMnXS5sZW5ndGggIT09IDBcIj5cbiAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWxhYmVsc1wiICpuZ0lmPVwiIXZlcnRpY2FsICYmIChmb3JtPy5jb250cm9scylba2V5XSAmJiAoZm9ybT8uY29udHJvbHMpW2tleV1bJ2NvbnRyb2xzJ10ubGVuZ3RoICE9PSAwXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29sdW1uTGFiZWxUZW1wbGF0ZSB8fCBkZWZhdWx0Q29sdW1uTGFiZWxUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGZvcm06IGZvcm0sIGtleToga2V5LCBjb250cm9sTGFiZWxzOiBjb250cm9sTGFiZWxzIH1cIj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiKGZvcm0/LmNvbnRyb2xzKVtrZXldXCI+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1yb3dcIiAqbmdGb3I9XCJsZXQgY29udHJvbCBvZiAoZm9ybT8uY29udHJvbHMpW2tleV1bJ2NvbnRyb2xzJ107IGxldCBpbmRleCA9IGluZGV4XCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicm93VGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgZm9ybTogZm9ybSwgaW5kZXg6IGluZGV4LCBrZXk6IGtleSwgY29udHJvbHM6IGNvbnRyb2xzIH1cIj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWVtcHR5XCIgKm5nSWY9XCIoZm9ybT8uY29udHJvbHMpW2tleV0gJiYgKGZvcm0/LmNvbnRyb2xzKVtrZXldWydjb250cm9scyddLmxlbmd0aCA9PT0gMFwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWVtcHR5LScgKyBrZXlcIj5cbiAgICB7eyBlbXB0eU1lc3NhZ2UgfX1cbiAgPC9kaXY+XG4gIDxwICpuZ0lmPVwiYWRkXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGhlbWU9XCJkaWFsb2d1ZVwiIGljb249XCJhZGQtdGhpblwiIChjbGljayk9XCJhZGROZXdDb250cm9sKClcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1ib3R0b20tYWRkLScgKyBrZXlcIiBpbmRleD1cIi0xXCI+XG4gICAgICB7eyBhZGQ/LmxhYmVsIH19XG4gICAgPC9idXR0b24+XG4gIDwvcD5cbjwvZGl2PlxuIl19