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
    i0.ɵɵclassProp("novo-control-group-control-hidden", label_r49.hidden)("column-required", label_r49.required);
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
    i0.ɵɵtemplate(0, NovoControlGroup_ng_template_4_div_0_Template, 3, 11, "div", 24);
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
                    hidden: control.hidden,
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
NovoControlGroup.ɵcmp = i0.ɵɵdefineComponent({ type: NovoControlGroup, selectors: [["novo-control-group"]], inputs: { vertical: "vertical", stacked: "stacked", add: "add", remove: "remove", edit: "edit", collapsible: "collapsible", form: "form", controls: "controls", key: "key", label: "label", description: "description", emptyMessage: "emptyMessage", icon: "icon", initialValue: "initialValue", canEdit: "canEdit", canRemove: "canRemove", rowTemplate: "rowTemplate", columnLabelTemplate: "columnLabelTemplate" }, outputs: { onRemove: "onRemove", onEdit: "onEdit", onAdd: "onAdd", change: "change" }, features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 11, consts: [["class", "novo-section-header", 4, "ngIf"], [1, "novo-control-group-controls"], ["defaultTemplate", ""], ["defaultColumnLabelTemplate", ""], [4, "ngIf"], ["class", "novo-control-group-empty", 4, "ngIf"], ["class", "novo-control-group-footer", 4, "ngIf"], [1, "novo-section-header"], [3, "click"], [3, "ngClass", 4, "ngIf"], ["class", "bhi-next", 3, "toggled", 4, "ngIf"], ["class", "novo-control-group-description", 4, "ngIf"], [3, "ngClass"], [1, "bhi-next"], [1, "novo-control-group-description"], [1, "novo-control-group-control"], [3, "class", "is-label", "max-width", 4, "ngFor", "ngForOf"], ["class", "novo-control-container last", 4, "ngIf"], ["class", "control-group-action", "type", "button", "theme", "icon", "icon", "edit", "index", "-1", 3, "disabled", "click", 4, "ngIf"], ["class", "control-group-action", "type", "button", "theme", "icon", "icon", "delete-o", "index", "-1", 3, "disabled", "click", 4, "ngIf"], [3, "form", "control", "condensed", "change"], [1, "novo-control-container", "last"], ["type", "button", "theme", "icon", "icon", "edit", "index", "-1", 1, "control-group-action", 3, "disabled", "click"], ["type", "button", "theme", "icon", "icon", "delete-o", "index", "-1", 1, "control-group-action", 3, "disabled", "click"], [3, "class", "novo-control-group-control-hidden", "max-width", "column-required", 4, "ngFor", "ngForOf"], ["class", "novo-control-group-control-label last", 4, "ngIf"], [1, "novo-control-group-control-label", "last"], ["class", "novo-control-group-labels", 4, "ngIf"], [1, "novo-control-group-labels"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "novo-control-group-row", 4, "ngFor", "ngForOf"], [1, "novo-control-group-row"], [1, "novo-control-group-empty"], [1, "novo-control-group-footer"], ["type", "button", "theme", "dialogue", "icon", "add-thin", "side", "left", "index", "-1", 3, "click"]], template: function NovoControlGroup_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbEdyb3VwLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9Db250cm9sR3JvdXAudHMiLCJlbGVtZW50cy9mb3JtL0NvbnRyb2xHcm91cC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEtBQUs7QUFDTCxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUUsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUdOLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWEsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsTUFBTTtBQUNOLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0lDbkI1Qyx3QkFBa0g7OztJQUFsRixxQ0FBZ0I7SUFBQyw2RUFBNEQ7OztJQUM3Ryx3QkFDdUU7OztJQUQvQiwwQ0FBeUI7SUFDL0Qsa0ZBQWdFOzs7SUFHcEUsaUNBQ3NFO0lBQUEsWUFBaUI7SUFBQSxpQkFBUTs7O0lBQTdGLHFGQUFtRTtJQUFDLGVBQWlCO0lBQWpCLHlDQUFpQjs7OztJQVJ6Riw2QkFDRTtJQUFBLCtCQUNFO0lBREksNExBQXdCO0lBQzVCLGtFQUE4RztJQUM5RyxtRUFDbUU7SUFDbkUsNEJBQW9FO0lB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QUUscUJBQXFCO2dCQUNsQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtxSkFJSyxRQUFRO2tCQURYLEtBQUs7WUFTRixPQUFPO2tCQURWLEtBQUs7WUFVRyxHQUFHO2tCQUFYLEtBQUs7WUFHRixNQUFNO2tCQURULEtBQUs7WUFVRixJQUFJO2tCQURQLEtBQUs7WUFVRixXQUFXO2tCQURkLEtBQUs7WUFTRyxJQUFJO2tCQUFaLEtBQUs7WUFFRyxRQUFRO2tCQUFoQixLQUFLO1lBRUcsR0FBRztrQkFBWCxLQUFLO1lBRUcsS0FBSztrQkFBYixLQUFLO1lBRUcsV0FBVztrQkFBbkIsS0FBSztZQUVHLFlBQVk7a0JBQXBCLEtBQUs7WUFHRixJQUFJO2tCQURQLEtBQUs7WUFTRyxZQUFZO2tCQUFwQixLQUFLO1lBRUcsT0FBTztrQkFBZixLQUFLO1lBRUcsU0FBUztrQkFBakIsS0FBSztZQUVHLFdBQVc7a0JBQW5CLEtBQUs7WUFFRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFFSSxRQUFRO2tCQUFqQixNQUFNO1lBQ0csTUFBTTtrQkFBZixNQUFNO1lBQ0csS0FBSztrQkFBZCxNQUFNO1lBQ0csTUFBTTtrQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQXJyYXksIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2Zvcm0tdXRpbHMvRm9ybVV0aWxzJztcbmltcG9ydCB7IEJhc2VDb250cm9sIH0gZnJvbSAnLi9jb250cm9scy9CYXNlQ29udHJvbCc7XG4vLyBBcHBcbmltcG9ydCB7IE5vdm9Gb3JtR3JvdXAgfSBmcm9tICcuL05vdm9Gb3JtR3JvdXAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9Db250cm9sR3JvdXBBZGRDb25maWcge1xuICBsYWJlbDogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBFZGl0U3RhdGUge1xuICBFRElUSU5HID0gJ2VkaXRpbmcnLFxuICBOT1RfRURJVElORyA9ICdub3RlZGl0aW5nJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3ZvQ29udHJvbEdyb3VwUm93Q29uZmlnIHtcbiAgZWRpdDogYm9vbGVhbjtcbiAgcmVtb3ZlOiBib29sZWFuO1xuICBzdGF0ZTogRWRpdFN0YXRlO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNvbnRyb2wtZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vQ29udHJvbEdyb3VwLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NvbnRyb2xHcm91cCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XG4gIC8vIFNldHMgdGhlIGRpc3BsYXkgb2YgdGhlIGdyb3VwIHRvIGVpdGhlciBiZSByb3cgKGRlZmF1bHQpIG9yIHZlcnRpY2FsIHZpYSBmbGV4LWJveFxuICBASW5wdXQoKVxuICBzZXQgdmVydGljYWwodjogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZlcnRpY2FsID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCB2ZXJ0aWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cbiAgcHJpdmF0ZSBfdmVydGljYWwgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc2V0IHN0YWNrZWQodjogYm9vbGVhbikge1xuICAgIHRoaXMuX3N0YWNrZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IHN0YWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YWNrZWQ7XG4gIH1cbiAgcHJpdmF0ZSBfc3RhY2tlZCA9IGZhbHNlO1xuXG4gIC8vIEhpZGVzL3Nob3dzIHRoZSBhZGQgYnV0dG9uIGZvciBhZGRpbmcgYSBuZXcgY29udHJvbFxuICBASW5wdXQoKSBhZGQ6IE5vdm9Db250cm9sR3JvdXBBZGRDb25maWc7XG4gIC8vIEhpZGUvc2hvd3MgdGhlIHJlbW92ZSBidXR0b24gZm9yIHJlbW92aW5nIGEgY29udHJvbFxuICBASW5wdXQoKVxuICBzZXQgcmVtb3ZlKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZW1vdmUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IHJlbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVtb3ZlO1xuICB9XG4gIHByaXZhdGUgX3JlbW92ZSA9IGZhbHNlO1xuICAvLyBIaWRlL3Nob3dzIHRoZSBlZGl0IGJ1dHRvbiBmb3IgZWRpdGluZyBhIGNvbnRyb2xcbiAgQElucHV0KClcbiAgc2V0IGVkaXQodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2VkaXQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IGVkaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VkaXQ7XG4gIH1cbiAgcHJpdmF0ZSBfZWRpdCA9IGZhbHNlO1xuICAvLyBBbGxvd3MgdGhlIGNvbnRyb2wgdG8gY29sbGFwc2Ugb3Igbm90XG4gIEBJbnB1dCgpXG4gIHNldCBjb2xsYXBzaWJsZSh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fY29sbGFwc2libGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IGNvbGxhcHNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xsYXBzaWJsZTtcbiAgfVxuICBwcml2YXRlIF9jb2xsYXBzaWJsZSA9IGZhbHNlO1xuICAvLyBNYWluIGZvcm0gZ3JvdXBcbiAgQElucHV0KCkgZm9ybTogTm92b0Zvcm1Hcm91cDtcbiAgLy8gQ29udHJvbHMgZm9yIGVhY2ggaXRlbSBpbiB0aGUgY29udHJvbCBncm91cFxuICBASW5wdXQoKSBjb250cm9sczogQmFzZUNvbnRyb2xbXTtcbiAgLy8gS2V5IG9mIHRoZSBjb250cm9sIGdyb3VwIChvbiB0aGUgbWFpbiBmb3JtKVxuICBASW5wdXQoKSBrZXk6IHN0cmluZztcbiAgLy8gTGFiZWwgb2YgdGhlIGNvbnRyb2wgZ3JvdXBcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgLy8gRGVzY3JpcHRpb24gb2YgdGhlIGNvbnRyb2wgZ3JvdXAgKG9ubHkgdXNlIHdpdGggcG9zaXRpb246Ym90dG9tIEFkZCBidXR0b24hKVxuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAvLyBNZXNzYWdlIHRvIGRpc3BsYXkgaWYgdGhlcmUgYXJlIG5vIGNvbnRyb2xzXG4gIEBJbnB1dCgpIGVtcHR5TWVzc2FnZTogc3RyaW5nO1xuICAvLyBJY29uIG9mIHRoZSBjb250cm9sIGdyb3VwIChjYW4gaGF2ZSBiaGkgcHJlZml4IG9yIG5vdClcbiAgQElucHV0KClcbiAgc2V0IGljb24odjogc3RyaW5nKSB7XG4gICAgdGhpcy5faWNvbiA9IHYgJiYgdi5pbmRleE9mKCdiaGknKSAhPT0gLTEgPyB2IDogYGJoaS0ke3Z9YDtcbiAgfVxuICBnZXQgaWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuICBwcml2YXRlIF9pY29uOiBzdHJpbmc7XG4gIC8vIFRoZSBpbml0aWFsIHZhbHVlIG9iamVjdCwgd2lsbCBjcmVhdGUgdGhlIGZvcm0gcm93cyBvZmYgb2ZcbiAgQElucHV0KCkgaW5pdGlhbFZhbHVlOiB7fVtdO1xuICAvLyBDYWxsYmFjayB0byBkZXRlcm1pbmUgaWYgdGhlIHVzZXIgY2FuIGVkaXRcbiAgQElucHV0KCkgY2FuRWRpdDogRnVuY3Rpb247XG4gIC8vIENhbGxiYWNrIHRvIGRldGVybWluZSBpZiB0aGUgdXNlciBjYW4gZGVsZXRlXG4gIEBJbnB1dCgpIGNhblJlbW92ZTogRnVuY3Rpb247XG4gIC8vIFRlbXBsYXRlIGZvciBjdXN0b20gcm93IHJlbmRlcmluZ1xuICBASW5wdXQoKSByb3dUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgLy8gVGVtcGxhdGUgZm9yIGN1c3RvbSBjb2x1bW4gbGFiZWwgcmVuZGVyaW5nXG4gIEBJbnB1dCgpIGNvbHVtbkxhYmVsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpIG9uUmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjx7IHZhbHVlOyBpbmRleCB9PigpO1xuICBAT3V0cHV0KCkgb25FZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjx7IHZhbHVlOyBpbmRleCB9PigpO1xuICBAT3V0cHV0KCkgb25BZGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnRyb2xMYWJlbHM6IHsgdmFsdWU6IHN0cmluZzsgd2lkdGg6IG51bWJlcjsgcmVxdWlyZWQ6IGJvb2xlYW47IGhpZGRlbj86IGJvb2xlYW47IGtleTogc3RyaW5nIH1bXSA9IFtdO1xuICB0b2dnbGVkID0gZmFsc2U7XG4gIGRpc2FibGVkQXJyYXk6IE5vdm9Db250cm9sR3JvdXBSb3dDb25maWdbXSA9IFtdO1xuICBlZGl0U3RhdGU6IEVkaXRTdGF0ZSA9IEVkaXRTdGF0ZS5OT1RfRURJVElORztcbiAgY3VycmVudEluZGV4ID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1VdGlsczogRm9ybVV0aWxzLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmtleSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3ZvLWNvbnRyb2wtZ3JvdXAgbXVzdCBoYXZlIHRoZSBba2V5XSBhdHRyaWJ1dGUgcHJvdmlkZWQhJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IGluaXRpYWxWYWx1ZUNoYW5nZTogU2ltcGxlQ2hhbmdlID0gY2hhbmdlcy5pbml0aWFsVmFsdWU7XG5cbiAgICAvLyBJZiBpbml0aWFsIHZhbHVlIGNoYW5nZXMsIGNsZWFyIHRoZSBjb250cm9sc1xuICAgIGlmIChpbml0aWFsVmFsdWVDaGFuZ2UgJiYgaW5pdGlhbFZhbHVlQ2hhbmdlLmN1cnJlbnRWYWx1ZSAhPT0gaW5pdGlhbFZhbHVlQ2hhbmdlLnByZXZpb3VzVmFsdWUgJiYgIWluaXRpYWxWYWx1ZUNoYW5nZS5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5jbGVhckNvbnRyb2xzKCk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGFycmF5LCBhZGQgYSBjb250cm9sIGZvciBlYWNoIHZhbHVlXG4gICAgaWYgKHRoaXMuaW5pdGlhbFZhbHVlICYmIEFycmF5LmlzQXJyYXkodGhpcy5pbml0aWFsVmFsdWUpKSB7XG4gICAgICBpZiAodGhpcy5pbml0aWFsVmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUuZm9yRWFjaCgodmFsdWUpID0+IHRoaXMuYWRkTmV3Q29udHJvbCh2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5pbml0aWFsVmFsdWUpIHtcbiAgICAgIC8vIElmIHZhbHVlIGlzIGFuIG9iamVjdCwganVzdCBhZGQgb25lIGNvbnRyb2xcbiAgICAgIHRoaXMuYWRkTmV3Q29udHJvbCh0aGlzLmluaXRpYWxWYWx1ZSk7XG4gICAgfVxuICAgIC8vIElmIHdlIGFyZSBob3Jpem9udGFsLCBncmFiIHRoZSBsYWJlbHMgdG8gaGVscCB3aXRoIGxheW91dFxuICAgIGlmICghdGhpcy52ZXJ0aWNhbCkge1xuICAgICAgdGhpcy5jb250cm9sTGFiZWxzID0gKHRoaXMuY29udHJvbHMgfHwgW10pLm1hcCgoY29udHJvbDogQmFzZUNvbnRyb2wpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogY29udHJvbC5sYWJlbCxcbiAgICAgICAgICB3aWR0aDogY29udHJvbC53aWR0aCxcbiAgICAgICAgICByZXF1aXJlZDogY29udHJvbC5yZXF1aXJlZCxcbiAgICAgICAgICBrZXk6IGNvbnRyb2wua2V5LFxuICAgICAgICAgIGhpZGRlbjogY29udHJvbC5oaWRkZW4sXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZSkge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcyk7XG4gIH1cblxuICBvbkNsaWNrQWRkKCkge1xuICAgIHRoaXMuYWRkTmV3Q29udHJvbCgpO1xuICAgIC8vIHRoaXMuZWRpdFN0YXRlID0gRWRpdFN0YXRlLkVESVRJTkc7XG4gIH1cbiAgb25DbGlja0NhbmNlbCgpIHtcbiAgICB0aGlzLmVkaXRTdGF0ZSA9IEVkaXRTdGF0ZS5OT1RfRURJVElORztcbiAgfVxuICBvbkNsaWNrU2F2ZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkQXJyYXlbdGhpcy5jdXJyZW50SW5kZXggLSAxXS5zdGF0ZSA9IEVkaXRTdGF0ZS5OT1RfRURJVElORztcbiAgICB0aGlzLmVkaXRTdGF0ZSA9IEVkaXRTdGF0ZS5OT1RfRURJVElORztcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldIGFzIEZvcm1BcnJheTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgY29uc3QgZmc6IE5vdm9Gb3JtR3JvdXAgPSBjb250cm9sLmF0KHRoaXMuY3VycmVudEluZGV4IC0gMSkgYXMgTm92b0Zvcm1Hcm91cDtcbiAgICAgIGZnLmRpc2FibGVBbGxDb250cm9scygpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0QWRkUmVtb3ZlKCkge1xuICAgIHRoaXMuZGlzYWJsZWRBcnJheS5mb3JFYWNoKChpdGVtOiBOb3ZvQ29udHJvbEdyb3VwUm93Q29uZmlnLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgaXRlbS5lZGl0ID0gdGhpcy5jaGVja0NhbkVkaXQoaWR4KTtcbiAgICAgIGl0ZW0ucmVtb3ZlID0gdGhpcy5jaGVja0NhblJlbW92ZShpZHgpO1xuICAgICAgaWYgKCFpdGVtLmVkaXQpIHtcbiAgICAgICAgaXRlbS5zdGF0ZSA9IEVkaXRTdGF0ZS5OT1RfRURJVElORztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGFkZE5ld0NvbnRyb2wodmFsdWU/OiB7fSkge1xuICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV0gYXMgRm9ybUFycmF5O1xuICAgIGNvbnN0IG5ld0N0cmw6IE5vdm9Gb3JtR3JvdXAgPSB0aGlzLmJ1aWxkQ29udHJvbCh2YWx1ZSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIGNvbnRyb2wucHVzaChuZXdDdHJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtLmFkZENvbnRyb2wodGhpcy5rZXksIHRoaXMuZmIuYXJyYXkoW25ld0N0cmxdKSk7XG4gICAgfVxuICAgIHRoaXMuZGlzYWJsZWRBcnJheS5wdXNoKHtcbiAgICAgIHN0YXRlOiBFZGl0U3RhdGUuRURJVElORyxcbiAgICAgIGVkaXQ6IHRydWUsXG4gICAgICByZW1vdmU6IHRydWUsXG4gICAgfSk7XG4gICAgdGhpcy5yZXNldEFkZFJlbW92ZSgpO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMub25BZGQuZW1pdChuZXdDdHJsKTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50SW5kZXgrKztcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGJ1aWxkQ29udHJvbCh2YWx1ZT86IHt9KTogTm92b0Zvcm1Hcm91cCB7XG4gICAgY29uc3QgbmV3Q29udHJvbHMgPSB0aGlzLmdldE5ld0NvbnRyb2xzKHRoaXMuY29udHJvbHMpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5mb3JtVXRpbHMuc2V0SW5pdGlhbFZhbHVlcyhuZXdDb250cm9scywgdmFsdWUpO1xuICAgIH1cbiAgICBjb25zdCBjdHJsOiBOb3ZvRm9ybUdyb3VwID0gdGhpcy5mb3JtVXRpbHMudG9Gb3JtR3JvdXAobmV3Q29udHJvbHMpO1xuICAgIHJldHVybiBjdHJsO1xuICB9XG5cbiAgcmVtb3ZlQ29udHJvbChpbmRleDogbnVtYmVyLCBlbWl0RXZlbnQgPSB0cnVlKSB7XG4gICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XSBhcyBGb3JtQXJyYXk7XG4gICAgaWYgKGVtaXRFdmVudCkge1xuICAgICAgdGhpcy5vblJlbW92ZS5lbWl0KHsgdmFsdWU6IGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleCB9KTtcbiAgICB9XG4gICAgY29udHJvbC5yZW1vdmVBdChpbmRleCk7XG4gICAgdGhpcy5kaXNhYmxlZEFycmF5ID0gdGhpcy5kaXNhYmxlZEFycmF5LmZpbHRlcigodmFsdWU6IE5vdm9Db250cm9sR3JvdXBSb3dDb25maWcsIGlkeDogbnVtYmVyKSA9PiBpZHggIT09IGluZGV4KTtcbiAgICB0aGlzLnJlc2V0QWRkUmVtb3ZlKCk7XG4gICAgdGhpcy5jdXJyZW50SW5kZXgtLTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGVkaXRDb250cm9sKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldIGFzIEZvcm1BcnJheTtcbiAgICBjb25zdCBmZyA9IGNvbnRyb2wuYXQoaW5kZXgpIGFzIE5vdm9Gb3JtR3JvdXA7XG4gICAgZmcuZW5hYmxlQWxsQ29udHJvbHMoKTtcbiAgICB0aGlzLm9uRWRpdC5lbWl0KHsgdmFsdWU6IGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleCB9KTtcbiAgfVxuXG4gIHRvZ2dsZShldmVudDogTW91c2VFdmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBpZiAodGhpcy5jb2xsYXBzaWJsZSkge1xuICAgICAgdGhpcy50b2dnbGVkID0gIXRoaXMudG9nZ2xlZDtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJDb250cm9scygpIHtcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldIGFzIEZvcm1BcnJheTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gY29udHJvbC5jb250cm9scy5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ29udHJvbChpLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0NhbkVkaXQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNhbkVkaXQpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV0gYXMgRm9ybUFycmF5O1xuICAgICAgcmV0dXJuIHRoaXMuY2FuRWRpdChjb250cm9sLmF0KGluZGV4KS52YWx1ZSwgaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tDYW5SZW1vdmUoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNhblJlbW92ZSkge1xuICAgICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XSBhcyBGb3JtQXJyYXk7XG4gICAgICBpZiAoY29udHJvbC5hdChpbmRleCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuUmVtb3ZlKGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGdldE5ld0NvbnRyb2xzKGNvbnRyb2xzOiBCYXNlQ29udHJvbFtdKSB7XG4gICAgY29uc3QgcmV0OiBCYXNlQ29udHJvbFtdID0gW107XG4gICAgKHRoaXMuY29udHJvbHMgfHwgW10pLmZvckVhY2goKGNvbnRyb2w6IEJhc2VDb250cm9sKSA9PiB7XG4gICAgICByZXQucHVzaChuZXcgQmFzZUNvbnRyb2woY29udHJvbC5fX3R5cGUsIGNvbnRyb2wpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdGFja2VkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92ZXJ0aWNhbDogQm9vbGVhbklucHV0O1xufVxuIiwiPGg2IGNsYXNzPVwibm92by1zZWN0aW9uLWhlYWRlclwiICpuZ0lmPVwibGFiZWxcIj5cbiAgPHNwYW4gKGNsaWNrKT1cInRvZ2dsZSgkZXZlbnQpXCIgW2NsYXNzLmNsaWNrYWJsZV09XCJjb2xsYXBzaWJsZVwiPlxuICAgIDxpICpuZ0lmPVwiaWNvbiAmJiAhY29sbGFwc2libGVcIiBbbmdDbGFzc109XCJpY29uXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtaWNvbi0nICsga2V5XCI+PC9pPlxuICAgIDxpICpuZ0lmPVwiY29sbGFwc2libGVcIiBjbGFzcz1cImJoaS1uZXh0XCIgW2NsYXNzLnRvZ2dsZWRdPVwidG9nZ2xlZFwiXG4gICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1jb2xsYXBzZS0nICsga2V5XCI+PC9pPlxuICAgIDxzcGFuIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWxhYmVsLScgKyBrZXlcIj57eyBsYWJlbCB9fTwvc3Bhbj5cbiAgPC9zcGFuPlxuICA8bGFiZWwgY2xhc3M9XCJub3ZvLWNvbnRyb2wtZ3JvdXAtZGVzY3JpcHRpb25cIiAqbmdJZj1cImRlc2NyaXB0aW9uXCJcbiAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1kZXNjcmlwdGlvbi0nICsga2V5XCI+e3sgZGVzY3JpcHRpb24gfX08L2xhYmVsPlxuPC9oNj5cbjxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtZ3JvdXAtY29udHJvbHNcIiBbY2xhc3MudmVydGljYWxdPVwidmVydGljYWxcIiBbY2xhc3MuaG9yaXpvbnRhbF09XCIhdmVydGljYWxcIlxuICBbY2xhc3MuaGlkZGVuXT1cImNvbGxhcHNpYmxlICYmICF0b2dnbGVkXCI+XG5cbiAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGUgbGV0LWluZGV4PVwiaW5kZXhcIiBsZXQtZm9ybT1cImZvcm1cIiBsZXQta2V5PVwia2V5XCI+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1jb250cm9sXCI+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjIG9mIGNvbnRyb2xzXCIgY2xhc3M9XCJub3ZvLWNvbnRyb2wtY29udGFpbmVyIHt7Yy5rZXl9fVwiXG4gICAgICAgIFtjbGFzcy5pcy1sYWJlbF09XCJjLmNvbnRyb2xUeXBlID09PSAncmVhZC1vbmx5J1wiIFtzdHlsZS5tYXgtd2lkdGgucHhdPVwiYy53aWR0aFwiPlxuICAgICAgICA8bm92by1jb250cm9sIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIFtmb3JtXT1cIihmb3JtPy5jb250cm9scylba2V5XVsnY29udHJvbHMnXVtpbmRleF1cIiBbY29udHJvbF09XCJjXCJcbiAgICAgICAgICBbY29uZGVuc2VkXT1cIiF2ZXJ0aWNhbCB8fCBjLmNvbnRyb2xUeXBlID09PSAncmVhZC1vbmx5J1wiPjwvbm92by1jb250cm9sPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWNvbnRhaW5lciBsYXN0XCIgKm5nSWY9XCJlZGl0ICYmICF2ZXJ0aWNhbFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29udHJvbC1ncm91cC1hY3Rpb25cIiBbZGlzYWJsZWRdPVwiIWRpc2FibGVkQXJyYXlbaW5kZXhdLmVkaXRcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAqbmdJZj1cImVkaXQgJiYgIXZlcnRpY2FsXCIgdGhlbWU9XCJpY29uXCIgaWNvbj1cImVkaXRcIlxuICAgICAgICAgIChjbGljayk9XCJlZGl0Q29udHJvbChpbmRleClcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1lZGl0LScgKyBrZXlcIiBpbmRleD1cIi0xXCI+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtY29udGFpbmVyIGxhc3RcIiAqbmdJZj1cInJlbW92ZSAmJiAhdmVydGljYWxcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbnRyb2wtZ3JvdXAtYWN0aW9uXCIgW2Rpc2FibGVkXT1cIiFkaXNhYmxlZEFycmF5W2luZGV4XS5yZW1vdmVcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAqbmdJZj1cInJlbW92ZSAmJiAhdmVydGljYWxcIiB0aGVtZT1cImljb25cIlxuICAgICAgICAgIGljb249XCJkZWxldGUtb1wiIChjbGljayk9XCJyZW1vdmVDb250cm9sKGluZGV4KVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWRlbGV0ZS0nICsga2V5XCJcbiAgICAgICAgICBpbmRleD1cIi0xXCI+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiY29udHJvbC1ncm91cC1hY3Rpb25cIiBbZGlzYWJsZWRdPVwiIWRpc2FibGVkQXJyYXlbaW5kZXhdLmVkaXRcIiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJlZGl0ICYmIHZlcnRpY2FsXCJcbiAgICAgIHRoZW1lPVwiaWNvblwiIGljb249XCJlZGl0XCJcbiAgICAgIChjbGljayk9XCJlZGl0Q29udHJvbChpbmRleClcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1lZGl0LScgKyBrZXlcIiBpbmRleD1cIi0xXCI+PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImNvbnRyb2wtZ3JvdXAtYWN0aW9uXCIgW2Rpc2FibGVkXT1cIiFkaXNhYmxlZEFycmF5W2luZGV4XS5yZW1vdmVcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICpuZ0lmPVwicmVtb3ZlICYmIHZlcnRpY2FsXCIgdGhlbWU9XCJpY29uXCJcbiAgICAgIGljb249XCJkZWxldGUtb1wiIChjbGljayk9XCJyZW1vdmVDb250cm9sKGluZGV4KVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWRlbGV0ZS0nICsga2V5XCJcbiAgICAgIGluZGV4PVwiLTFcIj48L2J1dHRvbj5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuICA8bmctdGVtcGxhdGUgI2RlZmF1bHRDb2x1bW5MYWJlbFRlbXBsYXRlIGxldC1mb3JtPVwiZm9ybVwiIGxldC1rZXk9XCJrZXlcIj5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBsYWJlbCBvZiBjb250cm9sTGFiZWxzXCJcbiAgICAgIGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWNvbnRyb2wtbGFiZWwge3sgbGFiZWwua2V5IH19XCJcbiAgICAgIFtjbGFzcy5ub3ZvLWNvbnRyb2wtZ3JvdXAtY29udHJvbC1oaWRkZW5dPVwibGFiZWwuaGlkZGVuXCJcbiAgICAgIFtzdHlsZS5tYXgtd2lkdGgucHhdPVwibGFiZWwud2lkdGhcIiBbY2xhc3MuY29sdW1uLXJlcXVpcmVkXT1cImxhYmVsLnJlcXVpcmVkXCI+XG4gICAgICA8c3BhbiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1sYWJlbC0nICsgbGFiZWwudmFsdWVcIj57eyBsYWJlbC52YWx1ZSB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWNvbnRyb2wtbGFiZWwgbGFzdFwiICpuZ0lmPVwiZWRpdFwiXG4gICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1lZGl0LScgKyBrZXlcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWNvbnRyb2wtbGFiZWwgbGFzdFwiICpuZ0lmPVwicmVtb3ZlXCJcbiAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWRlbGV0ZS0nICsga2V5XCI+PC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF2ZXJ0aWNhbCAmJiAoZm9ybT8uY29udHJvbHMpW2tleV0gJiYgKGZvcm0/LmNvbnRyb2xzKVtrZXldWydjb250cm9scyddLmxlbmd0aCAhPT0gMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtZ3JvdXAtbGFiZWxzXCJcbiAgICAgICpuZ0lmPVwiIXZlcnRpY2FsICYmIChmb3JtPy5jb250cm9scylba2V5XSAmJiAoZm9ybT8uY29udHJvbHMpW2tleV1bJ2NvbnRyb2xzJ10ubGVuZ3RoICE9PSAwXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29sdW1uTGFiZWxUZW1wbGF0ZSB8fCBkZWZhdWx0Q29sdW1uTGFiZWxUZW1wbGF0ZVwiXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGZvcm06IGZvcm0sIGtleToga2V5LCBjb250cm9sTGFiZWxzOiBjb250cm9sTGFiZWxzIH1cIj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIoZm9ybT8uY29udHJvbHMpW2tleV1cIj5cbiAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLXJvd1wiICpuZ0Zvcj1cImxldCBjb250cm9sIG9mIChmb3JtPy5jb250cm9scylba2V5XVsnY29udHJvbHMnXTsgbGV0IGluZGV4ID0gaW5kZXhcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJyb3dUZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBmb3JtOiBmb3JtLCBmb3JtR3JvdXA6IGNvbnRyb2wsIGluZGV4OiBpbmRleCwga2V5OiBrZXksIGNvbnRyb2xzOiBjb250cm9scyB9XCI+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWVtcHR5XCIgKm5nSWY9XCIoZm9ybT8uY29udHJvbHMpW2tleV0gJiYgKGZvcm0/LmNvbnRyb2xzKVtrZXldWydjb250cm9scyddLmxlbmd0aCA9PT0gMFwiXG4gICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtZW1wdHktJyArIGtleVwiPlxuICAgIHt7IGVtcHR5TWVzc2FnZSB9fVxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwiYWRkXCIgY2xhc3M9XCJub3ZvLWNvbnRyb2wtZ3JvdXAtZm9vdGVyXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGhlbWU9XCJkaWFsb2d1ZVwiIGljb249XCJhZGQtdGhpblwiIHNpZGU9XCJsZWZ0XCIgKGNsaWNrKT1cIm9uQ2xpY2tBZGQoKVwiXG4gICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1ib3R0b20tYWRkLScgKyBrZXlcIiBpbmRleD1cIi0xXCI+XG4gICAgICB7eyBhZGQ/LmxhYmVsIH19XG4gICAgPC9idXR0b24+XG4gICAgPCEtLSA8YnV0dG9uICpuZ0lmPVwiZWRpdFN0YXRlPT09J2VkaXRpbmcnXCIgdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwiZGlhbG9ndWVcIiBpY29uPVwiY2xvc2VcIiBzaWRlPVwibGVmdFwiXG4gICAgICAoY2xpY2spPVwib25DbGlja0NhbmNlbCgpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtYm90dG9tLWNhbmNlbC0nICsga2V5XCIgaW5kZXg9XCItMVwiPlxuICAgICAge3sgJ2NhbmNlbCcgfX1cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uICpuZ0lmPVwiZWRpdFN0YXRlPT09J2VkaXRpbmcnXCIgdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwiZGlhbG9ndWVcIiBpY29uPVwiY2hlY2tcIiBzaWRlPVwibGVmdFwiXG4gICAgICAoY2xpY2spPVwib25DbGlja1NhdmUoKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWJvdHRvbS1zYXZlLScgKyBrZXlcIiBpbmRleD1cIi0xXCI+XG4gICAgICB7eyBhZGQ/LmxhYmVsIH19XG4gICAgPC9idXR0b24+IC0tPlxuICA8L2Rpdj5cbjwvZGl2PiJdfQ==