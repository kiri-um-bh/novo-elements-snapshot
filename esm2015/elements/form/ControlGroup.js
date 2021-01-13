// NG
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, TemplateRef, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NovoLabelService } from '../../services/novo-label-service';
import { Helpers } from '../../utils/Helpers';
import { FormUtils } from './../../utils/form-utils/FormUtils';
import { BaseControl } from './controls/BaseControl';
// App
import { NovoFormGroup } from './NovoFormGroup';
import * as i0 from "@angular/core";
import * as i1 from "./../../utils/form-utils/FormUtils";
import * as i2 from "@angular/forms";
import * as i3 from "../../services/novo-label-service";
function NovoControlGroup_h6_0_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 12);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r9.icon);
    i0.ɵɵattribute("data-automation-id", "novo-control-group-icon-" + ctx_r9.key);
} }
function NovoControlGroup_h6_0_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 13);
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("toggled", ctx_r10.toggled);
    i0.ɵɵattribute("data-automation-id", "novo-control-group-collapse-" + ctx_r10.key);
} }
function NovoControlGroup_h6_0_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 14);
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
    i0.ɵɵelementStart(0, "h6", 7);
    i0.ɵɵelementStart(1, "span", 8);
    i0.ɵɵlistener("click", function NovoControlGroup_h6_0_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.toggle($event); });
    i0.ɵɵtemplate(2, NovoControlGroup_h6_0_i_2_Template, 1, 2, "i", 9);
    i0.ɵɵtemplate(3, NovoControlGroup_h6_0_i_3_Template, 1, 3, "i", 10);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, NovoControlGroup_h6_0_label_6_Template, 2, 2, "label", 11);
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
    i0.ɵɵelementStart(1, "novo-control", 20);
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
    i0.ɵɵelementStart(0, "button", 22);
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
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_template_2_div_2_button_1_Template, 1, 2, "button", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.edit && !ctx_r18.vertical);
} }
function NovoControlGroup_ng_template_2_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
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
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_template_2_div_3_button_1_Template, 1, 2, "button", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.remove && !ctx_r19.vertical);
} }
function NovoControlGroup_ng_template_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
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
    i0.ɵɵelementStart(0, "button", 23);
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
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_template_2_div_1_Template, 2, 10, "div", 16);
    i0.ɵɵtemplate(2, NovoControlGroup_ng_template_2_div_2_Template, 2, 1, "div", 17);
    i0.ɵɵtemplate(3, NovoControlGroup_ng_template_2_div_3_Template, 2, 1, "div", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, NovoControlGroup_ng_template_2_button_4_Template, 1, 2, "button", 18);
    i0.ɵɵtemplate(5, NovoControlGroup_ng_template_2_button_5_Template, 1, 2, "button", 19);
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
    i0.ɵɵelement(0, "div", 26);
} if (rf & 2) {
    const key_r45 = i0.ɵɵnextContext().key;
    i0.ɵɵattribute("data-automation-id", "novo-control-group-edit-" + key_r45);
} }
function NovoControlGroup_ng_template_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 26);
} if (rf & 2) {
    const key_r45 = i0.ɵɵnextContext().key;
    i0.ɵɵattribute("data-automation-id", "novo-control-group-delete-" + key_r45);
} }
function NovoControlGroup_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NovoControlGroup_ng_template_4_div_0_Template, 3, 9, "div", 24);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_template_4_div_1_Template, 1, 1, "div", 25);
    i0.ɵɵtemplate(2, NovoControlGroup_ng_template_4_div_2_Template, 1, 1, "div", 25);
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
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_container_6_div_1_ng_template_1_Template, 0, 0, "ng-template", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r52 = i0.ɵɵnextContext(2);
    const _r3 = i0.ɵɵreference(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r52.columnLabelTemplate || _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c0, ctx_r52.form, ctx_r52.key, ctx_r52.controlLabels));
} }
function NovoControlGroup_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_container_6_div_1_Template, 2, 6, "div", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.vertical && (ctx_r5.form == null ? null : ctx_r5.form.controls[ctx_r5.key]) && (ctx_r5.form == null ? null : ctx_r5.form.controls[ctx_r5.key]["controls"].length) !== 0);
} }
function NovoControlGroup_ng_container_7_div_1_ng_template_1_Template(rf, ctx) { }
const _c1 = function (a0, a1, a2, a3, a4) { return { form: a0, formGroup: a1, index: a2, key: a3, controls: a4 }; };
function NovoControlGroup_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_container_7_div_1_ng_template_1_Template, 0, 0, "ng-template", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r55 = ctx.$implicit;
    const index_r56 = ctx.index;
    const ctx_r54 = i0.ɵɵnextContext(2);
    const _r1 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r54.rowTemplate || _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction5(2, _c1, ctx_r54.form, control_r55, index_r56, ctx_r54.key, ctx_r54.controls));
} }
function NovoControlGroup_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_container_7_div_1_Template, 2, 8, "div", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.form == null ? null : ctx_r6.form.controls[ctx_r6.key]["controls"]);
} }
function NovoControlGroup_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-automation-id", "novo-control-group-empty-" + ctx_r7.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.emptyMessage, " ");
} }
function NovoControlGroup_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelementStart(1, "button", 34);
    i0.ɵɵlistener("click", function NovoControlGroup_div_9_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r59); const ctx_r58 = i0.ɵɵnextContext(); return ctx_r58.onClickAdd(); });
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
export var EditState;
(function (EditState) {
    EditState["EDITING"] = "editing";
    EditState["NOT_EDITING"] = "notediting";
})(EditState || (EditState = {}));
export class NovoControlGroup {
    constructor(formUtils, fb, ref, labels) {
        this.formUtils = formUtils;
        this.fb = fb;
        this.ref = ref;
        this.labels = labels;
        this._vertical = false;
        this._stacked = false;
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
        this.editState = EditState.NOT_EDITING;
        this.currentIndex = 0;
    }
    // Sets the display of the group to either be row (default) or vertical via flex-box
    set vertical(v) {
        this._vertical = coerceBooleanProperty(v);
    }
    get vertical() {
        return this._vertical;
    }
    set stacked(v) {
        this._stacked = coerceBooleanProperty(v);
    }
    get stacked() {
        return this._stacked;
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
        const initialValueChange = changes.initialValue;
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
    onClickAdd() {
        this.addNewControl();
        // this.editState = EditState.EDITING;
    }
    onClickCancel() {
        this.editState = EditState.NOT_EDITING;
    }
    onClickSave() {
        this.disabledArray[this.currentIndex - 1].state = EditState.NOT_EDITING;
        this.editState = EditState.NOT_EDITING;
        const control = this.form.controls[this.key];
        if (control) {
            const fg = control.at(this.currentIndex - 1);
            fg.disableAllControls();
        }
    }
    resetAddRemove() {
        this.disabledArray.forEach((item, idx) => {
            item.edit = this.checkCanEdit(idx);
            item.remove = this.checkCanRemove(idx);
            if (!item.edit) {
                item.state = EditState.NOT_EDITING;
            }
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
            state: EditState.EDITING,
            edit: true,
            remove: true,
        });
        this.resetAddRemove();
        if (!value) {
            this.onAdd.emit(newCtrl);
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
        const fg = control.at(index);
        fg.enableAllControls();
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
NovoControlGroup.ɵcmp = i0.ɵɵdefineComponent({ type: NovoControlGroup, selectors: [["novo-control-group"]], inputs: { vertical: "vertical", stacked: "stacked", add: "add", remove: "remove", edit: "edit", collapsible: "collapsible", form: "form", controls: "controls", key: "key", label: "label", description: "description", emptyMessage: "emptyMessage", icon: "icon", initialValue: "initialValue", canEdit: "canEdit", canRemove: "canRemove", rowTemplate: "rowTemplate", columnLabelTemplate: "columnLabelTemplate" }, outputs: { onRemove: "onRemove", onEdit: "onEdit", onAdd: "onAdd", change: "change" }, features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 11, consts: [["class", "novo-section-header", 4, "ngIf"], [1, "novo-control-group-controls"], ["defaultTemplate", ""], ["defaultColumnLabelTemplate", ""], [4, "ngIf"], ["class", "novo-control-group-empty", 4, "ngIf"], ["class", "novo-control-group-footer", 4, "ngIf"], [1, "novo-section-header"], [3, "click"], [3, "ngClass", 4, "ngIf"], ["class", "bhi-next", 3, "toggled", 4, "ngIf"], ["class", "novo-control-group-description", 4, "ngIf"], [3, "ngClass"], [1, "bhi-next"], [1, "novo-control-group-description"], [1, "novo-control-group-control"], [3, "class", "is-label", "max-width", 4, "ngFor", "ngForOf"], ["class", "novo-control-container last", 4, "ngIf"], ["type", "button", "theme", "icon", "icon", "edit", "index", "-1", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "theme", "icon", "icon", "delete-o", "index", "-1", 3, "disabled", "click", 4, "ngIf"], [3, "form", "control", "condensed", "change"], [1, "novo-control-container", "last"], ["type", "button", "theme", "icon", "icon", "edit", "index", "-1", 3, "disabled", "click"], ["type", "button", "theme", "icon", "icon", "delete-o", "index", "-1", 3, "disabled", "click"], [3, "class", "max-width", "column-required", 4, "ngFor", "ngForOf"], ["class", "novo-control-group-control-label last", 4, "ngIf"], [1, "novo-control-group-control-label", "last"], ["class", "novo-control-group-labels", 4, "ngIf"], [1, "novo-control-group-labels"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "novo-control-group-row", 4, "ngFor", "ngForOf"], [1, "novo-control-group-row"], [1, "novo-control-group-empty"], [1, "novo-control-group-footer"], ["type", "button", "theme", "dialogue", "icon", "add-thin", "side", "left", "index", "-1", 3, "click"]], template: function NovoControlGroup_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoControlGroup_h6_0_Template, 7, 7, "h6", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, NovoControlGroup_ng_template_2_Template, 6, 5, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, NovoControlGroup_ng_template_4_Template, 3, 3, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(6, NovoControlGroup_ng_container_6_Template, 2, 1, "ng-container", 4);
        i0.ɵɵtemplate(7, NovoControlGroup_ng_container_7_Template, 2, 1, "ng-container", 4);
        i0.ɵɵtemplate(8, NovoControlGroup_div_8_Template, 2, 2, "div", 5);
        i0.ɵɵtemplate(9, NovoControlGroup_div_9_Template, 3, 2, "div", 6);
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
        }], stacked: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbEdyb3VwLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9Db250cm9sR3JvdXAudHMiLCJlbGVtZW50cy9mb3JtL0NvbnRyb2xHcm91cC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEtBQUs7QUFDTCxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUUsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUdOLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWEsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsTUFBTTtBQUNOLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0lDbkI1Qyx3QkFBa0g7OztJQUFsRixxQ0FBZ0I7SUFBQyw2RUFBNEQ7OztJQUM3Ryx3QkFDdUU7OztJQUQvQiwwQ0FBeUI7SUFDL0Qsa0ZBQWdFOzs7SUFHcEUsaUNBQ3NFO0lBQUEsWUFBaUI7SUFBQSxpQkFBUTs7O0lBQTdGLHFGQUFtRTtJQUFDLGVBQWlCO0lBQWpCLHlDQUFpQjs7OztJQVJ6Riw2QkFDRTtJQUFBLCtCQUNFO0lBREksNExBQXdCO0lBQzVCLGtFQUE4RztJQUM5RyxtRUFDbUU7SUFDbkUsNEJBQW9FO0lB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QUFNO2FBQ2hEO3FKQUlLLFFBQVE7a0JBRFgsS0FBSztZQVNGLE9BQU87a0JBRFYsS0FBSztZQVVHLEdBQUc7a0JBQVgsS0FBSztZQUdGLE1BQU07a0JBRFQsS0FBSztZQVVGLElBQUk7a0JBRFAsS0FBSztZQVVGLFdBQVc7a0JBRGQsS0FBSztZQVNHLElBQUk7a0JBQVosS0FBSztZQUVHLFFBQVE7a0JBQWhCLEtBQUs7WUFFRyxHQUFHO2tCQUFYLEtBQUs7WUFFRyxLQUFLO2tCQUFiLEtBQUs7WUFFRyxXQUFXO2tCQUFuQixLQUFLO1lBRUcsWUFBWTtrQkFBcEIsS0FBSztZQUdGLElBQUk7a0JBRFAsS0FBSztZQVNHLFlBQVk7a0JBQXBCLEtBQUs7WUFFRyxPQUFPO2tCQUFmLEtBQUs7WUFFRyxTQUFTO2tCQUFqQixLQUFLO1lBRUcsV0FBVztrQkFBbkIsS0FBSztZQUVHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUVJLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxNQUFNO2tCQUFmLE1BQU07WUFDRyxLQUFLO2tCQUFkLE1BQU07WUFDRyxNQUFNO2tCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOR1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IEZvcm1VdGlscyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZm9ybS11dGlscy9Gb3JtVXRpbHMnO1xuaW1wb3J0IHsgQmFzZUNvbnRyb2wgfSBmcm9tICcuL2NvbnRyb2xzL0Jhc2VDb250cm9sJztcbi8vIEFwcFxuaW1wb3J0IHsgTm92b0Zvcm1Hcm91cCB9IGZyb20gJy4vTm92b0Zvcm1Hcm91cCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm92b0NvbnRyb2xHcm91cEFkZENvbmZpZyB7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIEVkaXRTdGF0ZSB7XG4gIEVESVRJTkcgPSAnZWRpdGluZycsXG4gIE5PVF9FRElUSU5HID0gJ25vdGVkaXRpbmcnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9Db250cm9sR3JvdXBSb3dDb25maWcge1xuICBlZGl0OiBib29sZWFuO1xuICByZW1vdmU6IGJvb2xlYW47XG4gIHN0YXRlOiBFZGl0U3RhdGU7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY29udHJvbC1ncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9Db250cm9sR3JvdXAuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ29udHJvbEdyb3VwIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcbiAgLy8gU2V0cyB0aGUgZGlzcGxheSBvZiB0aGUgZ3JvdXAgdG8gZWl0aGVyIGJlIHJvdyAoZGVmYXVsdCkgb3IgdmVydGljYWwgdmlhIGZsZXgtYm94XG4gIEBJbnB1dCgpXG4gIHNldCB2ZXJ0aWNhbCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmVydGljYWwgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IHZlcnRpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcbiAgfVxuICBwcml2YXRlIF92ZXJ0aWNhbCA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZXQgc3RhY2tlZCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RhY2tlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgc3RhY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhY2tlZDtcbiAgfVxuICBwcml2YXRlIF9zdGFja2VkID0gZmFsc2U7XG5cbiAgLy8gSGlkZXMvc2hvd3MgdGhlIGFkZCBidXR0b24gZm9yIGFkZGluZyBhIG5ldyBjb250cm9sXG4gIEBJbnB1dCgpIGFkZDogTm92b0NvbnRyb2xHcm91cEFkZENvbmZpZztcbiAgLy8gSGlkZS9zaG93cyB0aGUgcmVtb3ZlIGJ1dHRvbiBmb3IgcmVtb3ZpbmcgYSBjb250cm9sXG4gIEBJbnB1dCgpXG4gIHNldCByZW1vdmUodjogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlbW92ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZW1vdmU7XG4gIH1cbiAgcHJpdmF0ZSBfcmVtb3ZlID0gZmFsc2U7XG4gIC8vIEhpZGUvc2hvd3MgdGhlIGVkaXQgYnV0dG9uIGZvciBlZGl0aW5nIGEgY29udHJvbFxuICBASW5wdXQoKVxuICBzZXQgZWRpdCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZWRpdCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgZWRpdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdDtcbiAgfVxuICBwcml2YXRlIF9lZGl0ID0gZmFsc2U7XG4gIC8vIEFsbG93cyB0aGUgY29udHJvbCB0byBjb2xsYXBzZSBvciBub3RcbiAgQElucHV0KClcbiAgc2V0IGNvbGxhcHNpYmxlKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jb2xsYXBzaWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgY29sbGFwc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbGxhcHNpYmxlO1xuICB9XG4gIHByaXZhdGUgX2NvbGxhcHNpYmxlID0gZmFsc2U7XG4gIC8vIE1haW4gZm9ybSBncm91cFxuICBASW5wdXQoKSBmb3JtOiBOb3ZvRm9ybUdyb3VwO1xuICAvLyBDb250cm9scyBmb3IgZWFjaCBpdGVtIGluIHRoZSBjb250cm9sIGdyb3VwXG4gIEBJbnB1dCgpIGNvbnRyb2xzOiBCYXNlQ29udHJvbFtdO1xuICAvLyBLZXkgb2YgdGhlIGNvbnRyb2wgZ3JvdXAgKG9uIHRoZSBtYWluIGZvcm0pXG4gIEBJbnB1dCgpIGtleTogc3RyaW5nO1xuICAvLyBMYWJlbCBvZiB0aGUgY29udHJvbCBncm91cFxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICAvLyBEZXNjcmlwdGlvbiBvZiB0aGUgY29udHJvbCBncm91cCAob25seSB1c2Ugd2l0aCBwb3NpdGlvbjpib3R0b20gQWRkIGJ1dHRvbiEpXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIC8vIE1lc3NhZ2UgdG8gZGlzcGxheSBpZiB0aGVyZSBhcmUgbm8gY29udHJvbHNcbiAgQElucHV0KCkgZW1wdHlNZXNzYWdlOiBzdHJpbmc7XG4gIC8vIEljb24gb2YgdGhlIGNvbnRyb2wgZ3JvdXAgKGNhbiBoYXZlIGJoaSBwcmVmaXggb3Igbm90KVxuICBASW5wdXQoKVxuICBzZXQgaWNvbih2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pY29uID0gdiAmJiB2LmluZGV4T2YoJ2JoaScpICE9PSAtMSA/IHYgOiBgYmhpLSR7dn1gO1xuICB9XG4gIGdldCBpY29uKCkge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcbiAgLy8gVGhlIGluaXRpYWwgdmFsdWUgb2JqZWN0LCB3aWxsIGNyZWF0ZSB0aGUgZm9ybSByb3dzIG9mZiBvZlxuICBASW5wdXQoKSBpbml0aWFsVmFsdWU6IHt9W107XG4gIC8vIENhbGxiYWNrIHRvIGRldGVybWluZSBpZiB0aGUgdXNlciBjYW4gZWRpdFxuICBASW5wdXQoKSBjYW5FZGl0OiBGdW5jdGlvbjtcbiAgLy8gQ2FsbGJhY2sgdG8gZGV0ZXJtaW5lIGlmIHRoZSB1c2VyIGNhbiBkZWxldGVcbiAgQElucHV0KCkgY2FuUmVtb3ZlOiBGdW5jdGlvbjtcbiAgLy8gVGVtcGxhdGUgZm9yIGN1c3RvbSByb3cgcmVuZGVyaW5nXG4gIEBJbnB1dCgpIHJvd1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvLyBUZW1wbGF0ZSBmb3IgY3VzdG9tIGNvbHVtbiBsYWJlbCByZW5kZXJpbmdcbiAgQElucHV0KCkgY29sdW1uTGFiZWxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KCkgb25SZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgdmFsdWU7IGluZGV4IH0+KCk7XG4gIEBPdXRwdXQoKSBvbkVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgdmFsdWU7IGluZGV4IH0+KCk7XG4gIEBPdXRwdXQoKSBvbkFkZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29udHJvbExhYmVsczogeyB2YWx1ZTogc3RyaW5nOyB3aWR0aDogbnVtYmVyOyByZXF1aXJlZDogYm9vbGVhbjsga2V5OiBzdHJpbmcgfVtdID0gW107XG4gIHRvZ2dsZWQgPSBmYWxzZTtcbiAgZGlzYWJsZWRBcnJheTogTm92b0NvbnRyb2xHcm91cFJvd0NvbmZpZ1tdID0gW107XG4gIGVkaXRTdGF0ZTogRWRpdFN0YXRlID0gRWRpdFN0YXRlLk5PVF9FRElUSU5HO1xuICBjdXJyZW50SW5kZXggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybVV0aWxzOiBGb3JtVXRpbHMsIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAoIXRoaXMua2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdm8tY29udHJvbC1ncm91cCBtdXN0IGhhdmUgdGhlIFtrZXldIGF0dHJpYnV0ZSBwcm92aWRlZCEnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgaW5pdGlhbFZhbHVlQ2hhbmdlOiBTaW1wbGVDaGFuZ2UgPSBjaGFuZ2VzLmluaXRpYWxWYWx1ZTtcblxuICAgIC8vIElmIGluaXRpYWwgdmFsdWUgY2hhbmdlcywgY2xlYXIgdGhlIGNvbnRyb2xzXG4gICAgaWYgKGluaXRpYWxWYWx1ZUNoYW5nZSAmJiBpbml0aWFsVmFsdWVDaGFuZ2UuY3VycmVudFZhbHVlICE9PSBpbml0aWFsVmFsdWVDaGFuZ2UucHJldmlvdXNWYWx1ZSAmJiAhaW5pdGlhbFZhbHVlQ2hhbmdlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLmNsZWFyQ29udHJvbHMoKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgYXJyYXksIGFkZCBhIGNvbnRyb2wgZm9yIGVhY2ggdmFsdWVcbiAgICBpZiAodGhpcy5pbml0aWFsVmFsdWUgJiYgQXJyYXkuaXNBcnJheSh0aGlzLmluaXRpYWxWYWx1ZSkpIHtcbiAgICAgIGlmICh0aGlzLmluaXRpYWxWYWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZS5mb3JFYWNoKCh2YWx1ZSkgPT4gdGhpcy5hZGROZXdDb250cm9sKHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmluaXRpYWxWYWx1ZSkge1xuICAgICAgLy8gSWYgdmFsdWUgaXMgYW4gb2JqZWN0LCBqdXN0IGFkZCBvbmUgY29udHJvbFxuICAgICAgdGhpcy5hZGROZXdDb250cm9sKHRoaXMuaW5pdGlhbFZhbHVlKTtcbiAgICB9XG4gICAgLy8gSWYgd2UgYXJlIGhvcml6b250YWwsIGdyYWIgdGhlIGxhYmVscyB0byBoZWxwIHdpdGggbGF5b3V0XG4gICAgaWYgKCF0aGlzLnZlcnRpY2FsKSB7XG4gICAgICB0aGlzLmNvbnRyb2xMYWJlbHMgPSAodGhpcy5jb250cm9scyB8fCBbXSkubWFwKChjb250cm9sOiBCYXNlQ29udHJvbCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBjb250cm9sLmxhYmVsLFxuICAgICAgICAgIHdpZHRoOiBjb250cm9sLndpZHRoLFxuICAgICAgICAgIHJlcXVpcmVkOiBjb250cm9sLnJlcXVpcmVkLFxuICAgICAgICAgIGtleTogY29udHJvbC5rZXksXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZSkge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcyk7XG4gIH1cblxuICBvbkNsaWNrQWRkKCkge1xuICAgIHRoaXMuYWRkTmV3Q29udHJvbCgpO1xuICAgIC8vIHRoaXMuZWRpdFN0YXRlID0gRWRpdFN0YXRlLkVESVRJTkc7XG4gIH1cbiAgb25DbGlja0NhbmNlbCgpIHtcbiAgICB0aGlzLmVkaXRTdGF0ZSA9IEVkaXRTdGF0ZS5OT1RfRURJVElORztcbiAgfVxuICBvbkNsaWNrU2F2ZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkQXJyYXlbdGhpcy5jdXJyZW50SW5kZXggLSAxXS5zdGF0ZSA9IEVkaXRTdGF0ZS5OT1RfRURJVElORztcbiAgICB0aGlzLmVkaXRTdGF0ZSA9IEVkaXRTdGF0ZS5OT1RfRURJVElORztcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldIGFzIEZvcm1BcnJheTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgY29uc3QgZmc6IE5vdm9Gb3JtR3JvdXAgPSBjb250cm9sLmF0KHRoaXMuY3VycmVudEluZGV4IC0gMSkgYXMgTm92b0Zvcm1Hcm91cDtcbiAgICAgIGZnLmRpc2FibGVBbGxDb250cm9scygpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0QWRkUmVtb3ZlKCkge1xuICAgIHRoaXMuZGlzYWJsZWRBcnJheS5mb3JFYWNoKChpdGVtOiBOb3ZvQ29udHJvbEdyb3VwUm93Q29uZmlnLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgaXRlbS5lZGl0ID0gdGhpcy5jaGVja0NhbkVkaXQoaWR4KTtcbiAgICAgIGl0ZW0ucmVtb3ZlID0gdGhpcy5jaGVja0NhblJlbW92ZShpZHgpO1xuICAgICAgaWYgKCFpdGVtLmVkaXQpIHtcbiAgICAgICAgaXRlbS5zdGF0ZSA9IEVkaXRTdGF0ZS5OT1RfRURJVElORztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGFkZE5ld0NvbnRyb2wodmFsdWU/OiB7fSkge1xuICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV0gYXMgRm9ybUFycmF5O1xuICAgIGNvbnN0IG5ld0N0cmw6IE5vdm9Gb3JtR3JvdXAgPSB0aGlzLmJ1aWxkQ29udHJvbCh2YWx1ZSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIGNvbnRyb2wucHVzaChuZXdDdHJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtLmFkZENvbnRyb2wodGhpcy5rZXksIHRoaXMuZmIuYXJyYXkoW25ld0N0cmxdKSk7XG4gICAgfVxuICAgIHRoaXMuZGlzYWJsZWRBcnJheS5wdXNoKHtcbiAgICAgIHN0YXRlOiBFZGl0U3RhdGUuRURJVElORyxcbiAgICAgIGVkaXQ6IHRydWUsXG4gICAgICByZW1vdmU6IHRydWUsXG4gICAgfSk7XG4gICAgdGhpcy5yZXNldEFkZFJlbW92ZSgpO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMub25BZGQuZW1pdChuZXdDdHJsKTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50SW5kZXgrKztcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGJ1aWxkQ29udHJvbCh2YWx1ZT86IHt9KTogTm92b0Zvcm1Hcm91cCB7XG4gICAgY29uc3QgbmV3Q29udHJvbHMgPSB0aGlzLmdldE5ld0NvbnRyb2xzKHRoaXMuY29udHJvbHMpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5mb3JtVXRpbHMuc2V0SW5pdGlhbFZhbHVlcyhuZXdDb250cm9scywgdmFsdWUpO1xuICAgIH1cbiAgICBjb25zdCBjdHJsOiBOb3ZvRm9ybUdyb3VwID0gdGhpcy5mb3JtVXRpbHMudG9Gb3JtR3JvdXAobmV3Q29udHJvbHMpO1xuICAgIHJldHVybiBjdHJsO1xuICB9XG5cbiAgcmVtb3ZlQ29udHJvbChpbmRleDogbnVtYmVyLCBlbWl0RXZlbnQgPSB0cnVlKSB7XG4gICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XSBhcyBGb3JtQXJyYXk7XG4gICAgaWYgKGVtaXRFdmVudCkge1xuICAgICAgdGhpcy5vblJlbW92ZS5lbWl0KHsgdmFsdWU6IGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleCB9KTtcbiAgICB9XG4gICAgY29udHJvbC5yZW1vdmVBdChpbmRleCk7XG4gICAgdGhpcy5kaXNhYmxlZEFycmF5ID0gdGhpcy5kaXNhYmxlZEFycmF5LmZpbHRlcigodmFsdWU6IE5vdm9Db250cm9sR3JvdXBSb3dDb25maWcsIGlkeDogbnVtYmVyKSA9PiBpZHggIT09IGluZGV4KTtcbiAgICB0aGlzLnJlc2V0QWRkUmVtb3ZlKCk7XG4gICAgdGhpcy5jdXJyZW50SW5kZXgtLTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGVkaXRDb250cm9sKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldIGFzIEZvcm1BcnJheTtcbiAgICBjb25zdCBmZyA9IGNvbnRyb2wuYXQoaW5kZXgpIGFzIE5vdm9Gb3JtR3JvdXA7XG4gICAgZmcuZW5hYmxlQWxsQ29udHJvbHMoKTtcbiAgICB0aGlzLm9uRWRpdC5lbWl0KHsgdmFsdWU6IGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleCB9KTtcbiAgfVxuXG4gIHRvZ2dsZShldmVudDogTW91c2VFdmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBpZiAodGhpcy5jb2xsYXBzaWJsZSkge1xuICAgICAgdGhpcy50b2dnbGVkID0gIXRoaXMudG9nZ2xlZDtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJDb250cm9scygpIHtcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldIGFzIEZvcm1BcnJheTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gY29udHJvbC5jb250cm9scy5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ29udHJvbChpLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0NhbkVkaXQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNhbkVkaXQpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV0gYXMgRm9ybUFycmF5O1xuICAgICAgcmV0dXJuIHRoaXMuY2FuRWRpdChjb250cm9sLmF0KGluZGV4KS52YWx1ZSwgaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tDYW5SZW1vdmUoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNhblJlbW92ZSkge1xuICAgICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XSBhcyBGb3JtQXJyYXk7XG4gICAgICBpZiAoY29udHJvbC5hdChpbmRleCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuUmVtb3ZlKGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGdldE5ld0NvbnRyb2xzKGNvbnRyb2xzOiBCYXNlQ29udHJvbFtdKSB7XG4gICAgY29uc3QgcmV0OiBCYXNlQ29udHJvbFtdID0gW107XG4gICAgKHRoaXMuY29udHJvbHMgfHwgW10pLmZvckVhY2goKGNvbnRyb2w6IEJhc2VDb250cm9sKSA9PiB7XG4gICAgICByZXQucHVzaChuZXcgQmFzZUNvbnRyb2woY29udHJvbC5fX3R5cGUsIGNvbnRyb2wpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdGFja2VkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92ZXJ0aWNhbDogQm9vbGVhbklucHV0O1xufVxuIiwiPGg2IGNsYXNzPVwibm92by1zZWN0aW9uLWhlYWRlclwiICpuZ0lmPVwibGFiZWxcIj5cbiAgPHNwYW4gKGNsaWNrKT1cInRvZ2dsZSgkZXZlbnQpXCIgW2NsYXNzLmNsaWNrYWJsZV09XCJjb2xsYXBzaWJsZVwiPlxuICAgIDxpICpuZ0lmPVwiaWNvbiAmJiAhY29sbGFwc2libGVcIiBbbmdDbGFzc109XCJpY29uXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtaWNvbi0nICsga2V5XCI+PC9pPlxuICAgIDxpICpuZ0lmPVwiY29sbGFwc2libGVcIiBjbGFzcz1cImJoaS1uZXh0XCIgW2NsYXNzLnRvZ2dsZWRdPVwidG9nZ2xlZFwiXG4gICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1jb2xsYXBzZS0nICsga2V5XCI+PC9pPlxuICAgIDxzcGFuIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWxhYmVsLScgKyBrZXlcIj57eyBsYWJlbCB9fTwvc3Bhbj5cbiAgPC9zcGFuPlxuICA8bGFiZWwgY2xhc3M9XCJub3ZvLWNvbnRyb2wtZ3JvdXAtZGVzY3JpcHRpb25cIiAqbmdJZj1cImRlc2NyaXB0aW9uXCJcbiAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1kZXNjcmlwdGlvbi0nICsga2V5XCI+e3sgZGVzY3JpcHRpb24gfX08L2xhYmVsPlxuPC9oNj5cbjxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtZ3JvdXAtY29udHJvbHNcIiBbY2xhc3MudmVydGljYWxdPVwidmVydGljYWxcIiBbY2xhc3MuaG9yaXpvbnRhbF09XCIhdmVydGljYWxcIlxuICBbY2xhc3MuaGlkZGVuXT1cImNvbGxhcHNpYmxlICYmICF0b2dnbGVkXCI+XG5cbiAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGUgbGV0LWluZGV4PVwiaW5kZXhcIiBsZXQtZm9ybT1cImZvcm1cIiBsZXQta2V5PVwia2V5XCI+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1jb250cm9sXCI+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjIG9mIGNvbnRyb2xzXCIgY2xhc3M9XCJub3ZvLWNvbnRyb2wtY29udGFpbmVyIHt7Yy5rZXl9fVwiXG4gICAgICAgIFtjbGFzcy5pcy1sYWJlbF09XCJjLmNvbnRyb2xUeXBlID09PSAncmVhZC1vbmx5J1wiIFtzdHlsZS5tYXgtd2lkdGgucHhdPVwiYy53aWR0aFwiPlxuICAgICAgICA8bm92by1jb250cm9sIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIFtmb3JtXT1cIihmb3JtPy5jb250cm9scylba2V5XVsnY29udHJvbHMnXVtpbmRleF1cIiBbY29udHJvbF09XCJjXCJcbiAgICAgICAgICBbY29uZGVuc2VkXT1cIiF2ZXJ0aWNhbCB8fCBjLmNvbnRyb2xUeXBlID09PSAncmVhZC1vbmx5J1wiPjwvbm92by1jb250cm9sPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWNvbnRhaW5lciBsYXN0XCIgKm5nSWY9XCJlZGl0ICYmICF2ZXJ0aWNhbFwiPlxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhZGlzYWJsZWRBcnJheVtpbmRleF0uZWRpdFwiIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cImVkaXQgJiYgIXZlcnRpY2FsXCIgdGhlbWU9XCJpY29uXCIgaWNvbj1cImVkaXRcIlxuICAgICAgICAgIChjbGljayk9XCJlZGl0Q29udHJvbChpbmRleClcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1lZGl0LScgKyBrZXlcIiBpbmRleD1cIi0xXCI+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtY29udGFpbmVyIGxhc3RcIiAqbmdJZj1cInJlbW92ZSAmJiAhdmVydGljYWxcIj5cbiAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiIWRpc2FibGVkQXJyYXlbaW5kZXhdLnJlbW92ZVwiIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cInJlbW92ZSAmJiAhdmVydGljYWxcIiB0aGVtZT1cImljb25cIlxuICAgICAgICAgIGljb249XCJkZWxldGUtb1wiIChjbGljayk9XCJyZW1vdmVDb250cm9sKGluZGV4KVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWRlbGV0ZS0nICsga2V5XCJcbiAgICAgICAgICBpbmRleD1cIi0xXCI+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhZGlzYWJsZWRBcnJheVtpbmRleF0uZWRpdFwiIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cImVkaXQgJiYgdmVydGljYWxcIiB0aGVtZT1cImljb25cIiBpY29uPVwiZWRpdFwiXG4gICAgICAoY2xpY2spPVwiZWRpdENvbnRyb2woaW5kZXgpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtZWRpdC0nICsga2V5XCIgaW5kZXg9XCItMVwiPjwvYnV0dG9uPlxuICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFkaXNhYmxlZEFycmF5W2luZGV4XS5yZW1vdmVcIiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJyZW1vdmUgJiYgdmVydGljYWxcIiB0aGVtZT1cImljb25cIlxuICAgICAgaWNvbj1cImRlbGV0ZS1vXCIgKGNsaWNrKT1cInJlbW92ZUNvbnRyb2woaW5kZXgpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtZGVsZXRlLScgKyBrZXlcIlxuICAgICAgaW5kZXg9XCItMVwiPjwvYnV0dG9uPlxuICA8L25nLXRlbXBsYXRlPlxuXG4gIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdENvbHVtbkxhYmVsVGVtcGxhdGUgbGV0LWZvcm09XCJmb3JtXCIgbGV0LWtleT1cImtleVwiPlxuICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtZ3JvdXAtY29udHJvbC1sYWJlbCB7eyBsYWJlbC5rZXkgfX1cIiAqbmdGb3I9XCJsZXQgbGFiZWwgb2YgY29udHJvbExhYmVsc1wiXG4gICAgICBbc3R5bGUubWF4LXdpZHRoLnB4XT1cImxhYmVsLndpZHRoXCIgW2NsYXNzLmNvbHVtbi1yZXF1aXJlZF09XCJsYWJlbC5yZXF1aXJlZFwiPlxuICAgICAgPHNwYW4gW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtbGFiZWwtJyArIGxhYmVsLnZhbHVlXCI+e3sgbGFiZWwudmFsdWUgfX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1jb250cm9sLWxhYmVsIGxhc3RcIiAqbmdJZj1cImVkaXRcIlxuICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtZWRpdC0nICsga2V5XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1jb250cm9sLWxhYmVsIGxhc3RcIiAqbmdJZj1cInJlbW92ZVwiXG4gICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1kZWxldGUtJyArIGtleVwiPjwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdmVydGljYWwgJiYgKGZvcm0/LmNvbnRyb2xzKVtrZXldICYmIChmb3JtPy5jb250cm9scylba2V5XVsnY29udHJvbHMnXS5sZW5ndGggIT09IDBcIj5cbiAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWxhYmVsc1wiXG4gICAgICAqbmdJZj1cIiF2ZXJ0aWNhbCAmJiAoZm9ybT8uY29udHJvbHMpW2tleV0gJiYgKGZvcm0/LmNvbnRyb2xzKVtrZXldWydjb250cm9scyddLmxlbmd0aCAhPT0gMFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbkxhYmVsVGVtcGxhdGUgfHwgZGVmYXVsdENvbHVtbkxhYmVsVGVtcGxhdGVcIlxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBmb3JtOiBmb3JtLCBrZXk6IGtleSwgY29udHJvbExhYmVsczogY29udHJvbExhYmVscyB9XCI+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiKGZvcm0/LmNvbnRyb2xzKVtrZXldXCI+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1yb3dcIiAqbmdGb3I9XCJsZXQgY29udHJvbCBvZiAoZm9ybT8uY29udHJvbHMpW2tleV1bJ2NvbnRyb2xzJ107IGxldCBpbmRleCA9IGluZGV4XCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicm93VGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgZm9ybTogZm9ybSwgZm9ybUdyb3VwOiBjb250cm9sLCBpbmRleDogaW5kZXgsIGtleToga2V5LCBjb250cm9sczogY29udHJvbHMgfVwiPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1lbXB0eVwiICpuZ0lmPVwiKGZvcm0/LmNvbnRyb2xzKVtrZXldICYmIChmb3JtPy5jb250cm9scylba2V5XVsnY29udHJvbHMnXS5sZW5ndGggPT09IDBcIlxuICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWVtcHR5LScgKyBrZXlcIj5cbiAgICB7eyBlbXB0eU1lc3NhZ2UgfX1cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cImFkZFwiIGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWZvb3RlclwiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwiZGlhbG9ndWVcIiBpY29uPVwiYWRkLXRoaW5cIiBzaWRlPVwibGVmdFwiIChjbGljayk9XCJvbkNsaWNrQWRkKClcIlxuICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtYm90dG9tLWFkZC0nICsga2V5XCIgaW5kZXg9XCItMVwiPlxuICAgICAge3sgYWRkPy5sYWJlbCB9fVxuICAgIDwvYnV0dG9uPlxuICAgIDwhLS0gPGJ1dHRvbiAqbmdJZj1cImVkaXRTdGF0ZT09PSdlZGl0aW5nJ1wiIHR5cGU9XCJidXR0b25cIiB0aGVtZT1cImRpYWxvZ3VlXCIgaWNvbj1cImNsb3NlXCIgc2lkZT1cImxlZnRcIlxuICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tDYW5jZWwoKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWJvdHRvbS1jYW5jZWwtJyArIGtleVwiIGluZGV4PVwiLTFcIj5cbiAgICAgIHt7ICdjYW5jZWwnIH19XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiAqbmdJZj1cImVkaXRTdGF0ZT09PSdlZGl0aW5nJ1wiIHR5cGU9XCJidXR0b25cIiB0aGVtZT1cImRpYWxvZ3VlXCIgaWNvbj1cImNoZWNrXCIgc2lkZT1cImxlZnRcIlxuICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tTYXZlKClcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1ib3R0b20tc2F2ZS0nICsga2V5XCIgaW5kZXg9XCItMVwiPlxuICAgICAge3sgYWRkPy5sYWJlbCB9fVxuICAgIDwvYnV0dG9uPiAtLT5cbiAgPC9kaXY+XG48L2Rpdj4iXX0=