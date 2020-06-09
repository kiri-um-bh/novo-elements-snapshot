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
    var ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r9.icon);
    i0.ɵɵattribute("data-automation-id", "novo-control-group-icon-" + ctx_r9.key);
} }
function NovoControlGroup_h6_0_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 12);
} if (rf & 2) {
    var ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("toggled", ctx_r10.toggled);
    i0.ɵɵattribute("data-automation-id", "novo-control-group-collapse-" + ctx_r10.key);
} }
function NovoControlGroup_h6_0_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("data-automation-id", "novo-control-group-description-" + ctx_r11.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r11.description);
} }
function NovoControlGroup_h6_0_Template(rf, ctx) { if (rf & 1) {
    var _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "h6", 6);
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵlistener("click", function NovoControlGroup_h6_0_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r13); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.toggle($event); });
    i0.ɵɵtemplate(2, NovoControlGroup_h6_0_i_2_Template, 1, 2, "i", 8);
    i0.ɵɵtemplate(3, NovoControlGroup_h6_0_i_3_Template, 1, 3, "i", 9);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, NovoControlGroup_h6_0_label_6_Template, 2, 2, "label", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
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
    var _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "novo-control", 19);
    i0.ɵɵlistener("change", function NovoControlGroup_ng_template_2_div_1_Template_novo_control_change_1_listener($event) { i0.ɵɵrestoreView(_r24); var ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.onChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var c_r22 = ctx.$implicit;
    var ctx_r25 = i0.ɵɵnextContext();
    var form_r15 = ctx_r25.form;
    var key_r16 = ctx_r25.key;
    var index_r14 = ctx_r25.index;
    var ctx_r17 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("novo-control-container ", c_r22.key, "");
    i0.ɵɵstyleProp("max-width", c_r22.width, "px");
    i0.ɵɵclassProp("is-label", c_r22.controlType === "read-only");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("form", form_r15 == null ? null : form_r15.controls[key_r16]["controls"][index_r14])("control", c_r22)("condensed", !ctx_r17.vertical || c_r22.controlType === "read-only");
} }
function NovoControlGroup_ng_template_2_div_2_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function NovoControlGroup_ng_template_2_div_2_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r29); var index_r14 = i0.ɵɵnextContext(2).index; var ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.editControl(index_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r30 = i0.ɵɵnextContext(2);
    var index_r14 = ctx_r30.index;
    var key_r16 = ctx_r30.key;
    var ctx_r26 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r26.disabledArray[index_r14].edit);
    i0.ɵɵattribute("data-automation-id", "novo-control-group-edit-" + key_r16);
} }
function NovoControlGroup_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_template_2_div_2_button_1_Template, 1, 2, "button", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.edit && !ctx_r18.vertical);
} }
function NovoControlGroup_ng_template_2_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function NovoControlGroup_ng_template_2_div_3_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r34); var index_r14 = i0.ɵɵnextContext(2).index; var ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.removeControl(index_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r35 = i0.ɵɵnextContext(2);
    var index_r14 = ctx_r35.index;
    var key_r16 = ctx_r35.key;
    var ctx_r31 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r31.disabledArray[index_r14].remove);
    i0.ɵɵattribute("data-automation-id", "novo-control-group-delete-" + key_r16);
} }
function NovoControlGroup_ng_template_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_template_2_div_3_button_1_Template, 1, 2, "button", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.remove && !ctx_r19.vertical);
} }
function NovoControlGroup_ng_template_2_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function NovoControlGroup_ng_template_2_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r38); var index_r14 = i0.ɵɵnextContext().index; var ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.editControl(index_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r39 = i0.ɵɵnextContext();
    var index_r14 = ctx_r39.index;
    var key_r16 = ctx_r39.key;
    var ctx_r20 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r20.disabledArray[index_r14].edit);
    i0.ɵɵattribute("data-automation-id", "novo-control-group-edit-" + key_r16);
} }
function NovoControlGroup_ng_template_2_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function NovoControlGroup_ng_template_2_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r42); var index_r14 = i0.ɵɵnextContext().index; var ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.removeControl(index_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r43 = i0.ɵɵnextContext();
    var index_r14 = ctx_r43.index;
    var key_r16 = ctx_r43.key;
    var ctx_r21 = i0.ɵɵnextContext();
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
    var ctx_r2 = i0.ɵɵnextContext();
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
    var label_r49 = ctx.$implicit;
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
    var key_r45 = i0.ɵɵnextContext().key;
    i0.ɵɵattribute("data-automation-id", "novo-control-group-edit-" + key_r45);
} }
function NovoControlGroup_ng_template_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 25);
} if (rf & 2) {
    var key_r45 = i0.ɵɵnextContext().key;
    i0.ɵɵattribute("data-automation-id", "novo-control-group-delete-" + key_r45);
} }
function NovoControlGroup_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NovoControlGroup_ng_template_4_div_0_Template, 3, 9, "div", 23);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_template_4_div_1_Template, 1, 1, "div", 24);
    i0.ɵɵtemplate(2, NovoControlGroup_ng_template_4_div_2_Template, 1, 1, "div", 24);
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngForOf", ctx_r4.controlLabels);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.edit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.remove);
} }
function NovoControlGroup_ng_container_6_div_1_ng_template_1_Template(rf, ctx) { }
var _c0 = function (a0, a1, a2) { return { form: a0, key: a1, controlLabels: a2 }; };
function NovoControlGroup_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_container_6_div_1_ng_template_1_Template, 0, 0, "ng-template", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r52 = i0.ɵɵnextContext(2);
    var _r3 = i0.ɵɵreference(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r52.columnLabelTemplate || _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c0, ctx_r52.form, ctx_r52.key, ctx_r52.controlLabels));
} }
function NovoControlGroup_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_container_6_div_1_Template, 2, 6, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.vertical && (ctx_r5.form == null ? null : ctx_r5.form.controls[ctx_r5.key]) && (ctx_r5.form == null ? null : ctx_r5.form.controls[ctx_r5.key]["controls"].length) !== 0);
} }
function NovoControlGroup_ng_container_7_div_1_ng_template_1_Template(rf, ctx) { }
var _c1 = function (a0, a1, a2, a3) { return { form: a0, index: a1, key: a2, controls: a3 }; };
function NovoControlGroup_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_container_7_div_1_ng_template_1_Template, 0, 0, "ng-template", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var index_r56 = ctx.index;
    var ctx_r54 = i0.ɵɵnextContext(2);
    var _r1 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r54.rowTemplate || _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c1, ctx_r54.form, index_r56, ctx_r54.key, ctx_r54.controls));
} }
function NovoControlGroup_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NovoControlGroup_ng_container_7_div_1_Template, 2, 7, "div", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.form == null ? null : ctx_r6.form.controls[ctx_r6.key]["controls"]);
} }
function NovoControlGroup_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-automation-id", "novo-control-group-empty-" + ctx_r7.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.emptyMessage, " ");
} }
function NovoControlGroup_p_9_Template(rf, ctx) { if (rf & 1) {
    var _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵelementStart(1, "button", 32);
    i0.ɵɵlistener("click", function NovoControlGroup_p_9_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r59); var ctx_r58 = i0.ɵɵnextContext(); return ctx_r58.addNewControl(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-automation-id", "novo-control-group-bottom-add-" + ctx_r8.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r8.add == null ? null : ctx_r8.add.label, " ");
} }
var NovoControlGroup = /** @class */ (function () {
    function NovoControlGroup(formUtils, fb, ref, labels) {
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
    Object.defineProperty(NovoControlGroup.prototype, "vertical", {
        get: function () {
            return this._vertical;
        },
        // Sets the display of the group to either be row (default) or vertical via flex-box
        set: function (v) {
            this._vertical = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlGroup.prototype, "remove", {
        get: function () {
            return this._remove;
        },
        // Hide/shows the remove button for removing a control
        set: function (v) {
            this._remove = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlGroup.prototype, "edit", {
        get: function () {
            return this._edit;
        },
        // Hide/shows the edit button for editing a control
        set: function (v) {
            this._edit = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlGroup.prototype, "collapsible", {
        get: function () {
            return this._collapsible;
        },
        // Allows the control to collapse or not
        set: function (v) {
            this._collapsible = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlGroup.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        // Icon of the control group (can have bhi prefix or not)
        set: function (v) {
            this._icon = v && v.indexOf('bhi') !== -1 ? v : "bhi-" + v;
        },
        enumerable: true,
        configurable: true
    });
    NovoControlGroup.prototype.ngAfterContentInit = function () {
        if (!this.key) {
            throw new Error('novo-control-group must have the [key] attribute provided!');
        }
    };
    NovoControlGroup.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var initialValueChange = changes['initialValue'];
        // If initial value changes, clear the controls
        if (initialValueChange && initialValueChange.currentValue !== initialValueChange.previousValue && !initialValueChange.firstChange) {
            this.clearControls();
        }
        // Check for array, add a control for each value
        if (this.initialValue && Array.isArray(this.initialValue)) {
            if (this.initialValue.length !== 0) {
                this.currentIndex = 0;
                this.initialValue.forEach(function (value) { return _this.addNewControl(value); });
            }
        }
        else if (this.initialValue) {
            // If value is an object, just add one control
            this.addNewControl(this.initialValue);
        }
        // If we are horizontal, grab the labels to help with layout
        if (!this.vertical) {
            this.controlLabels = (this.controls || []).map(function (control) {
                return {
                    value: control.label,
                    width: control.width,
                    required: control.required,
                    key: control.key,
                };
            });
            this.ref.markForCheck();
        }
    };
    NovoControlGroup.prototype.onChange = function (change) {
        this.change.emit(this);
    };
    NovoControlGroup.prototype.resetAddRemove = function () {
        var _this = this;
        this.disabledArray.forEach(function (item, idx) {
            item.edit = _this.checkCanEdit(idx);
            item.remove = _this.checkCanRemove(idx);
        });
        this.ref.markForCheck();
    };
    NovoControlGroup.prototype.addNewControl = function (value) {
        var control = this.form.controls[this.key];
        var newCtrl = this.buildControl(value);
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
    };
    NovoControlGroup.prototype.buildControl = function (value) {
        var newControls = this.getNewControls(this.controls);
        if (value) {
            this.formUtils.setInitialValues(newControls, value);
        }
        var ctrl = this.formUtils.toFormGroup(newControls);
        return ctrl;
    };
    NovoControlGroup.prototype.removeControl = function (index, emitEvent) {
        if (emitEvent === void 0) { emitEvent = true; }
        var control = this.form.controls[this.key];
        if (emitEvent) {
            this.onRemove.emit({ value: control.at(index).value, index: index });
        }
        control.removeAt(index);
        this.disabledArray = this.disabledArray.filter(function (value, idx) { return idx !== index; });
        this.resetAddRemove();
        this.currentIndex--;
        this.ref.markForCheck();
    };
    NovoControlGroup.prototype.editControl = function (index) {
        var control = this.form.controls[this.key];
        this.onEdit.emit({ value: control.at(index).value, index: index });
    };
    NovoControlGroup.prototype.toggle = function (event) {
        Helpers.swallowEvent(event);
        if (this.collapsible) {
            this.toggled = !this.toggled;
            this.ref.markForCheck();
        }
    };
    NovoControlGroup.prototype.clearControls = function () {
        var control = this.form.controls[this.key];
        if (control) {
            for (var i = control.controls.length; i >= 0; i--) {
                this.removeControl(i, false);
            }
            this.currentIndex = 0;
        }
    };
    NovoControlGroup.prototype.checkCanEdit = function (index) {
        if (this.canEdit) {
            var control = this.form.controls[this.key];
            return this.canEdit(control.at(index).value, index);
        }
        return true;
    };
    NovoControlGroup.prototype.checkCanRemove = function (index) {
        if (this.canRemove) {
            var control = this.form.controls[this.key];
            if (control.at(index)) {
                return this.canRemove(control.at(index).value, index);
            }
            return true;
        }
        return true;
    };
    NovoControlGroup.prototype.getNewControls = function (controls) {
        var ret = [];
        (this.controls || []).forEach(function (control) {
            ret.push(new BaseControl(control.__type, control));
        });
        return ret;
    };
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
    return NovoControlGroup;
}());
export { NovoControlGroup };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbEdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vQ29udHJvbEdyb3VwLnRzIiwiZWxlbWVudHMvZm9ybS9Db250cm9sR3JvdXAuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLO0FBQ0wsT0FBTyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFlBQVksR0FJYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsTUFBTTtBQUNOLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7O0lDbkJqRSx3QkFBa0g7OztJQUFsRixxQ0FBZ0I7SUFBQyw2RUFBNEQ7OztJQUM3Ryx3QkFBdUk7OztJQUEvRiwwQ0FBeUI7SUFBQyxrRkFBZ0U7OztJQUdwSSxpQ0FBc0k7SUFBQSxZQUFpQjtJQUFBLGlCQUFROzs7SUFBN0YscUZBQW1FO0lBQUMsZUFBaUI7SUFBakIseUNBQWlCOzs7O0lBTnpKLDZCQUNFO0lBQUEsK0JBQ0U7SUFESSwwTEFBd0I7SUFDNUIsa0VBQThHO0lBQzlHLGtFQUFtSTtJQUNuSSw0QkFBb0U7SUFBQSxZQUFXO0lBQUEsaUJBQU87SUFDeEYsaUJBQU87SUFDUCwyRUFBc0k7SUFDeEksaUJBQUs7OztJQU40QixlQUErQjtJQUEvQiwrQ0FBK0I7SUFDekQsZUFBNEI7SUFBNUIseURBQTRCO0lBQzVCLGVBQW1CO0lBQW5CLHlDQUFtQjtJQUNoQixlQUE2RDtJQUE3RCw4RUFBNkQ7SUFBQyxlQUFXO0lBQVgsa0NBQVc7SUFFbkMsZUFBbUI7SUFBbkIseUNBQW1COzs7O0lBSzdELDJCQUNFO0lBQUEsd0NBQWtMO0lBQXBLLHNOQUEyQjtJQUEwSCxpQkFBZTtJQUNwTCxpQkFBTTs7Ozs7Ozs7SUFGMEIsbUVBQXdDO0lBQWtELDhDQUE4QjtJQUEvRSw2REFBZ0Q7SUFDN0UsZUFBaUQ7SUFBakQsa0dBQWlELGtCQUFBLHFFQUFBOzs7O0lBRzNGLGtDQUErTjtJQUE5RyxpUUFBNEI7SUFBeUUsaUJBQVM7Ozs7OztJQUF2TixpRUFBdUM7SUFBK0YsMEVBQTREOzs7SUFENU0sK0JBQ0U7SUFBQSw0RkFBc047SUFDeE4saUJBQU07OztJQUQwRCxlQUF5QjtJQUF6Qix3REFBeUI7Ozs7SUFHdkYsa0NBQTJPO0lBQWxILG1RQUE4QjtJQUEyRSxpQkFBUzs7Ozs7O0lBQW5PLG1FQUF5QztJQUF1Ryw0RUFBOEQ7OztJQUR4TiwrQkFDRTtJQUFBLDRGQUFrTztJQUNwTyxpQkFBTTs7O0lBRDRELGVBQTJCO0lBQTNCLDBEQUEyQjs7OztJQUcvRixrQ0FBOE47SUFBOUcsMFBBQTRCO0lBQXlFLGlCQUFTOzs7Ozs7SUFBdE4saUVBQXVDO0lBQThGLDBFQUE0RDs7OztJQUN6TSxrQ0FBME87SUFBbEgsNFBBQThCO0lBQTJFLGlCQUFTOzs7Ozs7SUFBbE8sbUVBQXlDO0lBQXNHLDRFQUE4RDs7O0lBWnJOLCtCQUNFO0lBQUEsaUZBQ0U7SUFFRixnRkFDRTtJQUVGLGdGQUNFO0lBRUosaUJBQU07SUFDTixzRkFBcU47SUFDck4sc0ZBQWlPOzs7SUFYMU4sZUFBMEI7SUFBMUIseUNBQTBCO0lBR1UsZUFBeUI7SUFBekIsc0RBQXlCO0lBR3pCLGVBQTJCO0lBQTNCLHdEQUEyQjtJQUlSLGVBQXdCO0lBQXhCLHFEQUF3QjtJQUN0QixlQUEwQjtJQUExQix1REFBMEI7OztJQUd4RiwyQkFDRTtJQUFBLDRCQUE0RTtJQUFBLFlBQWlCO0lBQUEsaUJBQU87SUFDdEcsaUJBQU07OztJQUZELGlGQUF3RDtJQUFxQyxrREFBa0M7SUFBQyxxREFBd0M7SUFDckssZUFBcUU7SUFBckUsbUZBQXFFO0lBQUMsZUFBaUI7SUFBakIscUNBQWlCOzs7SUFFL0YsMEJBQW1JOzs7SUFBbkUsMEVBQTREOzs7SUFDNUgsMEJBQXVJOzs7SUFBckUsNEVBQThEOzs7SUFKaEksZ0ZBQ0U7SUFFRixnRkFBNkg7SUFDN0gsZ0ZBQWlJOzs7SUFKbkUsOENBQW1DO0lBRzlDLGVBQVk7SUFBWixrQ0FBWTtJQUNaLGVBQWM7SUFBZCxvQ0FBYzs7Ozs7SUFHbkUsK0JBQ0U7SUFBQSx1R0FDQTtJQUNGLGlCQUFNOzs7O0lBRlMsZUFBc0U7SUFBdEUscUVBQXNFLHlHQUFBOzs7SUFGdkYsNkJBQ0U7SUFBQSxpRkFDRTtJQUdKLDBCQUFlOzs7SUFKMEIsZUFBNEY7SUFBNUYsc01BQTRGOzs7OztJQU1uSSwrQkFDRTtJQUFBLHVHQUNBO0lBQ0YsaUJBQU07Ozs7O0lBRlMsZUFBbUQ7SUFBbkQsNkRBQW1ELCtHQUFBOzs7SUFGcEUsNkJBQ0U7SUFBQSxpRkFDRTtJQUdKLDBCQUFlOzs7SUFKdUIsZUFBNEU7SUFBNUUsbUdBQTRFOzs7SUFLbEgsK0JBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQU07OztJQUZnSCw4RUFBNkQ7SUFDakwsZUFDRjtJQURFLG9EQUNGOzs7O0lBQ0EseUJBQ0U7SUFBQSxrQ0FDRTtJQURxRCxzTEFBeUI7SUFDOUUsWUFDRjtJQUFBLGlCQUFTO0lBQ1gsaUJBQUk7OztJQUgrRSxlQUFrRTtJQUFsRSxtRkFBa0U7SUFDakosZUFDRjtJQURFLDZFQUNGOztBRGpCSjtJQXVGRSwwQkFBb0IsU0FBb0IsRUFBVSxFQUFlLEVBQVUsR0FBc0IsRUFBVSxNQUF3QjtRQUEvRyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUF6RTNILGNBQVMsR0FBRyxLQUFLLENBQUM7UUFXbEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQVNoQixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBU2QsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFpQ25CLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUNoRCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDOUMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDaEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFM0Msa0JBQWEsR0FBdUUsRUFBRSxDQUFDO1FBQ3ZGLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsa0JBQWEsR0FBeUMsRUFBRSxDQUFDO1FBRXpELGlCQUFZLEdBQUcsQ0FBQyxDQUFDO0lBRXFILENBQUM7SUFoRnZJLHNCQUNJLHNDQUFRO2FBR1o7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQztRQVBELG9GQUFvRjthQUNwRixVQUNhLENBQVU7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTtJQVFELHNCQUNJLG9DQUFNO2FBR1Y7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQztRQVBELHNEQUFzRDthQUN0RCxVQUNXLENBQVU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLGtDQUFJO2FBR1I7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQztRQVBELG1EQUFtRDthQUNuRCxVQUNTLENBQVU7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLHlDQUFXO2FBR2Y7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQztRQVBELHdDQUF3QzthQUN4QyxVQUNnQixDQUFVO1lBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFrQkQsc0JBQ0ksa0NBQUk7YUFHUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO1FBUEQseURBQXlEO2FBQ3pELFVBQ1MsQ0FBUztZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQU8sQ0FBRyxDQUFDO1FBQzdELENBQUM7OztPQUFBO0lBNkJELDZDQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO1NBQy9FO0lBQ0gsQ0FBQztJQUVELHNDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUFsQyxpQkE4QkM7UUE3QkMsSUFBTSxrQkFBa0IsR0FBaUIsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWpFLCtDQUErQztRQUMvQyxJQUFJLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLFlBQVksS0FBSyxrQkFBa0IsQ0FBQyxhQUFhLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUU7WUFDakksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO1FBRUQsZ0RBQWdEO1FBQ2hELElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN6RCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO2FBQ2pFO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDNUIsOENBQThDO1lBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsNERBQTREO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE9BQW9CO2dCQUNsRSxPQUFPO29CQUNMLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztvQkFDcEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO29CQUNwQixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7b0JBQzFCLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRztpQkFDakIsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRCxtQ0FBUSxHQUFSLFVBQVMsTUFBTTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCx5Q0FBYyxHQUFkO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQStCLEVBQUUsR0FBVztZQUN0RSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsd0NBQWEsR0FBYixVQUFjLEtBQVU7UUFDdEIsSUFBTSxPQUFPLEdBQXlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRSxJQUFNLE9BQU8sR0FBa0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUQ7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUN0QixJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxLQUFVO1FBQ3JCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFNLElBQUksR0FBa0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsd0NBQWEsR0FBYixVQUFjLEtBQWEsRUFBRSxTQUFnQjtRQUFoQiwwQkFBQSxFQUFBLGdCQUFnQjtRQUMzQyxJQUFNLE9BQU8sR0FBeUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25FLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBZ0MsRUFBRSxHQUFXLElBQUssT0FBQSxHQUFHLEtBQUssS0FBSyxFQUFiLENBQWEsQ0FBQyxDQUFDO1FBQ2pILElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFZLEtBQWE7UUFDdkIsSUFBTSxPQUFPLEdBQXlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxLQUFpQjtRQUN0QixPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVPLHdDQUFhLEdBQXJCO1FBQ0UsSUFBTSxPQUFPLEdBQXlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRSxJQUFJLE9BQU8sRUFBRTtZQUNYLEtBQUssSUFBSSxDQUFDLEdBQVcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDOUI7WUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFTyx1Q0FBWSxHQUFwQixVQUFxQixLQUFhO1FBQ2hDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFNLE9BQU8sR0FBeUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25FLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNyRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLHlDQUFjLEdBQXRCLFVBQXVCLEtBQWE7UUFDbEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQU0sT0FBTyxHQUF5QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkUsSUFBSSxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNyQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDdkQ7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8seUNBQWMsR0FBdEIsVUFBdUIsUUFBdUI7UUFDNUMsSUFBTSxHQUFHLEdBQWtCLEVBQUUsQ0FBQztRQUM5QixDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBb0I7WUFDakQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7b0ZBL05VLGdCQUFnQjt5REFBaEIsZ0JBQWdCO1lDckM3QiwrREFDRTtZQU9GLDhCQUNFO1lBQUEsa0hBQ0U7WUFjRixrSEFDSTtZQU1KLG1GQUNFO1lBS0YsbUZBQ0U7WUFLRixpRUFDRTtZQUVGLDZEQUNFO1lBSUosaUJBQU07O1lBbkQwQixnQ0FBYTtZQVFKLGVBQTJCO1lBQTNCLHdDQUEyQiw2QkFBQSwyQ0FBQTtZQXVCcEQsZUFBNEY7WUFBNUYsaUxBQTRGO1lBTTVGLGVBQTZCO1lBQTdCLDJFQUE2QjtZQU1MLGVBQStFO1lBQS9FLGdLQUErRTtZQUdsSCxlQUFXO1lBQVgsOEJBQVc7OzJCRDlDaEI7Q0FxUUMsQUFyT0QsSUFxT0M7U0FoT1ksZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0FMNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSxxQkFBcUI7Z0JBQ2xDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFHRSxLQUFLOztrQkFTTCxLQUFLOztrQkFFTCxLQUFLOztrQkFTTCxLQUFLOztrQkFTTCxLQUFLOztrQkFTTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFTTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVGVtcGxhdGVSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbi8vIEFwcFxuaW1wb3J0IHsgTm92b0Zvcm1Hcm91cCB9IGZyb20gJy4vTm92b0Zvcm1Hcm91cCc7XG5pbXBvcnQgeyBCYXNlQ29udHJvbCB9IGZyb20gJy4vY29udHJvbHMvQmFzZUNvbnRyb2wnO1xuaW1wb3J0IHsgRm9ybVV0aWxzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9mb3JtLXV0aWxzL0Zvcm1VdGlscyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBOb3ZvQ29udHJvbEdyb3VwQWRkQ29uZmlnIHtcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3ZvQ29udHJvbEdyb3VwUm93Q29uZmlnIHtcbiAgZWRpdDogYm9vbGVhbjtcbiAgcmVtb3ZlOiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNvbnRyb2wtZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vQ29udHJvbEdyb3VwLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NvbnRyb2xHcm91cCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XG4gIC8vIFNldHMgdGhlIGRpc3BsYXkgb2YgdGhlIGdyb3VwIHRvIGVpdGhlciBiZSByb3cgKGRlZmF1bHQpIG9yIHZlcnRpY2FsIHZpYSBmbGV4LWJveFxuICBASW5wdXQoKVxuICBzZXQgdmVydGljYWwodjogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZlcnRpY2FsID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCB2ZXJ0aWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cbiAgcHJpdmF0ZSBfdmVydGljYWwgPSBmYWxzZTtcbiAgLy8gSGlkZXMvc2hvd3MgdGhlIGFkZCBidXR0b24gZm9yIGFkZGluZyBhIG5ldyBjb250cm9sXG4gIEBJbnB1dCgpIGFkZDogTm92b0NvbnRyb2xHcm91cEFkZENvbmZpZztcbiAgLy8gSGlkZS9zaG93cyB0aGUgcmVtb3ZlIGJ1dHRvbiBmb3IgcmVtb3ZpbmcgYSBjb250cm9sXG4gIEBJbnB1dCgpXG4gIHNldCByZW1vdmUodjogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlbW92ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZW1vdmU7XG4gIH1cbiAgcHJpdmF0ZSBfcmVtb3ZlID0gZmFsc2U7XG4gIC8vIEhpZGUvc2hvd3MgdGhlIGVkaXQgYnV0dG9uIGZvciBlZGl0aW5nIGEgY29udHJvbFxuICBASW5wdXQoKVxuICBzZXQgZWRpdCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZWRpdCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgZWRpdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdDtcbiAgfVxuICBwcml2YXRlIF9lZGl0ID0gZmFsc2U7XG4gIC8vIEFsbG93cyB0aGUgY29udHJvbCB0byBjb2xsYXBzZSBvciBub3RcbiAgQElucHV0KClcbiAgc2V0IGNvbGxhcHNpYmxlKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jb2xsYXBzaWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgY29sbGFwc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbGxhcHNpYmxlO1xuICB9XG4gIHByaXZhdGUgX2NvbGxhcHNpYmxlID0gZmFsc2U7XG4gIC8vIE1haW4gZm9ybSBncm91cFxuICBASW5wdXQoKSBmb3JtOiBOb3ZvRm9ybUdyb3VwO1xuICAvLyBDb250cm9scyBmb3IgZWFjaCBpdGVtIGluIHRoZSBjb250cm9sIGdyb3VwXG4gIEBJbnB1dCgpIGNvbnRyb2xzOiBCYXNlQ29udHJvbFtdO1xuICAvLyBLZXkgb2YgdGhlIGNvbnRyb2wgZ3JvdXAgKG9uIHRoZSBtYWluIGZvcm0pXG4gIEBJbnB1dCgpIGtleTogc3RyaW5nO1xuICAvLyBMYWJlbCBvZiB0aGUgY29udHJvbCBncm91cFxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICAvLyBEZXNjcmlwdGlvbiBvZiB0aGUgY29udHJvbCBncm91cCAob25seSB1c2Ugd2l0aCBwb3NpdGlvbjpib3R0b20gQWRkIGJ1dHRvbiEpXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIC8vIE1lc3NhZ2UgdG8gZGlzcGxheSBpZiB0aGVyZSBhcmUgbm8gY29udHJvbHNcbiAgQElucHV0KCkgZW1wdHlNZXNzYWdlOiBzdHJpbmc7XG4gIC8vIEljb24gb2YgdGhlIGNvbnRyb2wgZ3JvdXAgKGNhbiBoYXZlIGJoaSBwcmVmaXggb3Igbm90KVxuICBASW5wdXQoKVxuICBzZXQgaWNvbih2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pY29uID0gdiAmJiB2LmluZGV4T2YoJ2JoaScpICE9PSAtMSA/IHYgOiBgYmhpLSR7dn1gO1xuICB9XG4gIGdldCBpY29uKCkge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcbiAgLy8gVGhlIGluaXRpYWwgdmFsdWUgb2JqZWN0LCB3aWxsIGNyZWF0ZSB0aGUgZm9ybSByb3dzIG9mZiBvZlxuICBASW5wdXQoKSBpbml0aWFsVmFsdWU6IHt9W107XG4gIC8vIENhbGxiYWNrIHRvIGRldGVybWluZSBpZiB0aGUgdXNlciBjYW4gZWRpdFxuICBASW5wdXQoKSBjYW5FZGl0OiBGdW5jdGlvbjtcbiAgLy8gQ2FsbGJhY2sgdG8gZGV0ZXJtaW5lIGlmIHRoZSB1c2VyIGNhbiBkZWxldGVcbiAgQElucHV0KCkgY2FuUmVtb3ZlOiBGdW5jdGlvbjtcbiAgLy8gVGVtcGxhdGUgZm9yIGN1c3RvbSByb3cgcmVuZGVyaW5nXG4gIEBJbnB1dCgpIHJvd1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvLyBUZW1wbGF0ZSBmb3IgY3VzdG9tIGNvbHVtbiBsYWJlbCByZW5kZXJpbmdcbiAgQElucHV0KCkgY29sdW1uTGFiZWxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KCkgb25SZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgdmFsdWU7IGluZGV4IH0+KCk7XG4gIEBPdXRwdXQoKSBvbkVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgdmFsdWU7IGluZGV4IH0+KCk7XG4gIEBPdXRwdXQoKSBvbkFkZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29udHJvbExhYmVsczogeyB2YWx1ZTogc3RyaW5nOyB3aWR0aDogbnVtYmVyOyByZXF1aXJlZDogYm9vbGVhbjsga2V5OiBzdHJpbmcgfVtdID0gW107XG4gIHRvZ2dsZWQgPSBmYWxzZTtcbiAgZGlzYWJsZWRBcnJheTogeyBlZGl0OiBib29sZWFuOyByZW1vdmU6IGJvb2xlYW4gfVtdID0gW107XG5cbiAgY3VycmVudEluZGV4ID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1VdGlsczogRm9ybVV0aWxzLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmtleSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3ZvLWNvbnRyb2wtZ3JvdXAgbXVzdCBoYXZlIHRoZSBba2V5XSBhdHRyaWJ1dGUgcHJvdmlkZWQhJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IGluaXRpYWxWYWx1ZUNoYW5nZTogU2ltcGxlQ2hhbmdlID0gY2hhbmdlc1snaW5pdGlhbFZhbHVlJ107XG5cbiAgICAvLyBJZiBpbml0aWFsIHZhbHVlIGNoYW5nZXMsIGNsZWFyIHRoZSBjb250cm9sc1xuICAgIGlmIChpbml0aWFsVmFsdWVDaGFuZ2UgJiYgaW5pdGlhbFZhbHVlQ2hhbmdlLmN1cnJlbnRWYWx1ZSAhPT0gaW5pdGlhbFZhbHVlQ2hhbmdlLnByZXZpb3VzVmFsdWUgJiYgIWluaXRpYWxWYWx1ZUNoYW5nZS5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5jbGVhckNvbnRyb2xzKCk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGFycmF5LCBhZGQgYSBjb250cm9sIGZvciBlYWNoIHZhbHVlXG4gICAgaWYgKHRoaXMuaW5pdGlhbFZhbHVlICYmIEFycmF5LmlzQXJyYXkodGhpcy5pbml0aWFsVmFsdWUpKSB7XG4gICAgICBpZiAodGhpcy5pbml0aWFsVmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUuZm9yRWFjaCgodmFsdWUpID0+IHRoaXMuYWRkTmV3Q29udHJvbCh2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5pbml0aWFsVmFsdWUpIHtcbiAgICAgIC8vIElmIHZhbHVlIGlzIGFuIG9iamVjdCwganVzdCBhZGQgb25lIGNvbnRyb2xcbiAgICAgIHRoaXMuYWRkTmV3Q29udHJvbCh0aGlzLmluaXRpYWxWYWx1ZSk7XG4gICAgfVxuICAgIC8vIElmIHdlIGFyZSBob3Jpem9udGFsLCBncmFiIHRoZSBsYWJlbHMgdG8gaGVscCB3aXRoIGxheW91dFxuICAgIGlmICghdGhpcy52ZXJ0aWNhbCkge1xuICAgICAgdGhpcy5jb250cm9sTGFiZWxzID0gKHRoaXMuY29udHJvbHMgfHwgW10pLm1hcCgoY29udHJvbDogQmFzZUNvbnRyb2wpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogY29udHJvbC5sYWJlbCxcbiAgICAgICAgICB3aWR0aDogY29udHJvbC53aWR0aCxcbiAgICAgICAgICByZXF1aXJlZDogY29udHJvbC5yZXF1aXJlZCxcbiAgICAgICAgICBrZXk6IGNvbnRyb2wua2V5LFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShjaGFuZ2UpIHtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMpO1xuICB9XG5cbiAgcmVzZXRBZGRSZW1vdmUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZEFycmF5LmZvckVhY2goKGl0ZW06IE5vdm9Db250cm9sR3JvdXBSb3dDb25maWcsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICBpdGVtLmVkaXQgPSB0aGlzLmNoZWNrQ2FuRWRpdChpZHgpO1xuICAgICAgaXRlbS5yZW1vdmUgPSB0aGlzLmNoZWNrQ2FuUmVtb3ZlKGlkeCk7XG4gICAgfSk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBhZGROZXdDb250cm9sKHZhbHVlPzoge30pIHtcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgY29uc3QgbmV3Q3RybDogTm92b0Zvcm1Hcm91cCA9IHRoaXMuYnVpbGRDb250cm9sKHZhbHVlKTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgY29udHJvbC5wdXNoKG5ld0N0cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm0uYWRkQ29udHJvbCh0aGlzLmtleSwgdGhpcy5mYi5hcnJheShbbmV3Q3RybF0pKTtcbiAgICB9XG4gICAgdGhpcy5kaXNhYmxlZEFycmF5LnB1c2goe1xuICAgICAgZWRpdDogdHJ1ZSxcbiAgICAgIHJlbW92ZTogdHJ1ZSxcbiAgICB9KTtcbiAgICB0aGlzLnJlc2V0QWRkUmVtb3ZlKCk7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5vbkFkZC5lbWl0KCk7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudEluZGV4Kys7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBidWlsZENvbnRyb2wodmFsdWU/OiB7fSk6IE5vdm9Gb3JtR3JvdXAge1xuICAgIGNvbnN0IG5ld0NvbnRyb2xzID0gdGhpcy5nZXROZXdDb250cm9scyh0aGlzLmNvbnRyb2xzKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZm9ybVV0aWxzLnNldEluaXRpYWxWYWx1ZXMobmV3Q29udHJvbHMsIHZhbHVlKTtcbiAgICB9XG4gICAgY29uc3QgY3RybDogTm92b0Zvcm1Hcm91cCA9IHRoaXMuZm9ybVV0aWxzLnRvRm9ybUdyb3VwKG5ld0NvbnRyb2xzKTtcbiAgICByZXR1cm4gY3RybDtcbiAgfVxuXG4gIHJlbW92ZUNvbnRyb2woaW5kZXg6IG51bWJlciwgZW1pdEV2ZW50ID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICBpZiAoZW1pdEV2ZW50KSB7XG4gICAgICB0aGlzLm9uUmVtb3ZlLmVtaXQoeyB2YWx1ZTogY29udHJvbC5hdChpbmRleCkudmFsdWUsIGluZGV4IH0pO1xuICAgIH1cbiAgICBjb250cm9sLnJlbW92ZUF0KGluZGV4KTtcbiAgICB0aGlzLmRpc2FibGVkQXJyYXkgPSB0aGlzLmRpc2FibGVkQXJyYXkuZmlsdGVyKCh2YWx1ZTogTm92b0NvbnRyb2xHcm91cFJvd0NvbmZpZywgaWR4OiBudW1iZXIpID0+IGlkeCAhPT0gaW5kZXgpO1xuICAgIHRoaXMucmVzZXRBZGRSZW1vdmUoKTtcbiAgICB0aGlzLmN1cnJlbnRJbmRleC0tO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZWRpdENvbnRyb2woaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICB0aGlzLm9uRWRpdC5lbWl0KHsgdmFsdWU6IGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleCB9KTtcbiAgfVxuXG4gIHRvZ2dsZShldmVudDogTW91c2VFdmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBpZiAodGhpcy5jb2xsYXBzaWJsZSkge1xuICAgICAgdGhpcy50b2dnbGVkID0gIXRoaXMudG9nZ2xlZDtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJDb250cm9scygpIHtcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGNvbnRyb2wuY29udHJvbHMubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgICAgICB0aGlzLnJlbW92ZUNvbnRyb2woaSwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tDYW5FZGl0KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jYW5FZGl0KSB7XG4gICAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgICByZXR1cm4gdGhpcy5jYW5FZGl0KGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0NhblJlbW92ZShpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuY2FuUmVtb3ZlKSB7XG4gICAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgICBpZiAoY29udHJvbC5hdChpbmRleCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuUmVtb3ZlKGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGdldE5ld0NvbnRyb2xzKGNvbnRyb2xzOiBCYXNlQ29udHJvbFtdKSB7XG4gICAgY29uc3QgcmV0OiBCYXNlQ29udHJvbFtdID0gW107XG4gICAgKHRoaXMuY29udHJvbHMgfHwgW10pLmZvckVhY2goKGNvbnRyb2w6IEJhc2VDb250cm9sKSA9PiB7XG4gICAgICByZXQucHVzaChuZXcgQmFzZUNvbnRyb2woY29udHJvbC5fX3R5cGUsIGNvbnRyb2wpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iLCI8aDYgY2xhc3M9XCJub3ZvLXNlY3Rpb24taGVhZGVyXCIgKm5nSWY9XCJsYWJlbFwiPlxuICA8c3BhbiAoY2xpY2spPVwidG9nZ2xlKCRldmVudClcIiBbY2xhc3MuY2xpY2thYmxlXT1cImNvbGxhcHNpYmxlXCI+XG4gICAgPGkgKm5nSWY9XCJpY29uICYmICFjb2xsYXBzaWJsZVwiIFtuZ0NsYXNzXT1cImljb25cIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1pY29uLScgKyBrZXlcIj48L2k+XG4gICAgPGkgKm5nSWY9XCJjb2xsYXBzaWJsZVwiIGNsYXNzPVwiYmhpLW5leHRcIiBbY2xhc3MudG9nZ2xlZF09XCJ0b2dnbGVkXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtY29sbGFwc2UtJyArIGtleVwiPjwvaT5cbiAgICA8c3BhbiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1sYWJlbC0nICsga2V5XCI+e3sgbGFiZWwgfX08L3NwYW4+XG4gIDwvc3Bhbj5cbiAgPGxhYmVsIGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWRlc2NyaXB0aW9uXCIgKm5nSWY9XCJkZXNjcmlwdGlvblwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWRlc2NyaXB0aW9uLScgKyBrZXlcIj57eyBkZXNjcmlwdGlvbiB9fTwvbGFiZWw+XG48L2g2PlxuPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1jb250cm9sc1wiIFtjbGFzcy52ZXJ0aWNhbF09XCJ2ZXJ0aWNhbFwiIFtjbGFzcy5ob3Jpem9udGFsXT1cIiF2ZXJ0aWNhbFwiIFtjbGFzcy5oaWRkZW5dPVwiY29sbGFwc2libGUgJiYgIXRvZ2dsZWRcIj5cbiAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGUgbGV0LWluZGV4PVwiaW5kZXhcIiBsZXQtZm9ybT1cImZvcm1cIiBsZXQta2V5PVwia2V5XCI+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1jb250cm9sXCI+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjIG9mIGNvbnRyb2xzXCIgY2xhc3M9XCJub3ZvLWNvbnRyb2wtY29udGFpbmVyIHt7Yy5rZXl9fVwiIFtjbGFzcy5pcy1sYWJlbF09XCJjLmNvbnRyb2xUeXBlID09PSAncmVhZC1vbmx5J1wiIFtzdHlsZS5tYXgtd2lkdGgucHhdPVwiYy53aWR0aFwiPlxuICAgICAgICA8bm92by1jb250cm9sIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIFtmb3JtXT1cIihmb3JtPy5jb250cm9scylba2V5XVsnY29udHJvbHMnXVtpbmRleF1cIiBbY29udHJvbF09XCJjXCIgW2NvbmRlbnNlZF09XCIhdmVydGljYWwgfHwgYy5jb250cm9sVHlwZSA9PT0gJ3JlYWQtb25seSdcIj48L25vdm8tY29udHJvbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1jb250YWluZXIgbGFzdFwiICpuZ0lmPVwiZWRpdCAmJiAhdmVydGljYWxcIj5cbiAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiIWRpc2FibGVkQXJyYXlbaW5kZXhdLmVkaXRcIiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJlZGl0ICYmICF2ZXJ0aWNhbFwiIHRoZW1lPVwiaWNvblwiIGljb249XCJlZGl0XCIgKGNsaWNrKT1cImVkaXRDb250cm9sKGluZGV4KVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWVkaXQtJyArIGtleVwiIGluZGV4PVwiLTFcIj48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1jb250YWluZXIgbGFzdFwiICpuZ0lmPVwicmVtb3ZlICYmICF2ZXJ0aWNhbFwiPlxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhZGlzYWJsZWRBcnJheVtpbmRleF0ucmVtb3ZlXCIgdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwicmVtb3ZlICYmICF2ZXJ0aWNhbFwiIHRoZW1lPVwiaWNvblwiIGljb249XCJkZWxldGUtb1wiIChjbGljayk9XCJyZW1vdmVDb250cm9sKGluZGV4KVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWRlbGV0ZS0nICsga2V5XCIgaW5kZXg9XCItMVwiPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiIWRpc2FibGVkQXJyYXlbaW5kZXhdLmVkaXRcIiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJlZGl0ICYmIHZlcnRpY2FsXCIgdGhlbWU9XCJpY29uXCIgaWNvbj1cImVkaXRcIiAoY2xpY2spPVwiZWRpdENvbnRyb2woaW5kZXgpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtZWRpdC0nICsga2V5XCIgaW5kZXg9XCItMVwiPjwvYnV0dG9uPlxuICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFkaXNhYmxlZEFycmF5W2luZGV4XS5yZW1vdmVcIiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJyZW1vdmUgJiYgdmVydGljYWxcIiB0aGVtZT1cImljb25cIiBpY29uPVwiZGVsZXRlLW9cIiAoY2xpY2spPVwicmVtb3ZlQ29udHJvbChpbmRleClcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1kZWxldGUtJyArIGtleVwiIGluZGV4PVwiLTFcIj48L2J1dHRvbj5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgPG5nLXRlbXBsYXRlICNkZWZhdWx0Q29sdW1uTGFiZWxUZW1wbGF0ZSBsZXQtZm9ybT1cImZvcm1cIiBsZXQta2V5PVwia2V5XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWNvbnRyb2wtbGFiZWwge3sgbGFiZWwua2V5IH19XCIgKm5nRm9yPVwibGV0IGxhYmVsIG9mIGNvbnRyb2xMYWJlbHNcIiBbc3R5bGUubWF4LXdpZHRoLnB4XT1cImxhYmVsLndpZHRoXCIgW2NsYXNzLmNvbHVtbi1yZXF1aXJlZF09XCJsYWJlbC5yZXF1aXJlZFwiPlxuICAgICAgICA8c3BhbiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1sYWJlbC0nICsgbGFiZWwudmFsdWVcIj57eyBsYWJlbC52YWx1ZSB9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1jb250cm9sLWxhYmVsIGxhc3RcIiAqbmdJZj1cImVkaXRcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1lZGl0LScgKyBrZXlcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtZ3JvdXAtY29udHJvbC1sYWJlbCBsYXN0XCIgKm5nSWY9XCJyZW1vdmVcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1kZWxldGUtJyArIGtleVwiPjwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXZlcnRpY2FsICYmIChmb3JtPy5jb250cm9scylba2V5XSAmJiAoZm9ybT8uY29udHJvbHMpW2tleV1bJ2NvbnRyb2xzJ10ubGVuZ3RoICE9PSAwXCI+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1sYWJlbHNcIiAqbmdJZj1cIiF2ZXJ0aWNhbCAmJiAoZm9ybT8uY29udHJvbHMpW2tleV0gJiYgKGZvcm0/LmNvbnRyb2xzKVtrZXldWydjb250cm9scyddLmxlbmd0aCAhPT0gMFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbkxhYmVsVGVtcGxhdGUgfHwgZGVmYXVsdENvbHVtbkxhYmVsVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBmb3JtOiBmb3JtLCBrZXk6IGtleSwgY29udHJvbExhYmVsczogY29udHJvbExhYmVscyB9XCI+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIihmb3JtPy5jb250cm9scylba2V5XVwiPlxuICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtZ3JvdXAtcm93XCIgKm5nRm9yPVwibGV0IGNvbnRyb2wgb2YgKGZvcm0/LmNvbnRyb2xzKVtrZXldWydjb250cm9scyddOyBsZXQgaW5kZXggPSBpbmRleFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInJvd1RlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGZvcm06IGZvcm0sIGluZGV4OiBpbmRleCwga2V5OiBrZXksIGNvbnRyb2xzOiBjb250cm9scyB9XCI+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1lbXB0eVwiICpuZ0lmPVwiKGZvcm0/LmNvbnRyb2xzKVtrZXldICYmIChmb3JtPy5jb250cm9scylba2V5XVsnY29udHJvbHMnXS5sZW5ndGggPT09IDBcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1lbXB0eS0nICsga2V5XCI+XG4gICAge3sgZW1wdHlNZXNzYWdlIH19XG4gIDwvZGl2PlxuICA8cCAqbmdJZj1cImFkZFwiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwiZGlhbG9ndWVcIiBpY29uPVwiYWRkLXRoaW5cIiAoY2xpY2spPVwiYWRkTmV3Q29udHJvbCgpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtYm90dG9tLWFkZC0nICsga2V5XCIgaW5kZXg9XCItMVwiPlxuICAgICAge3sgYWRkPy5sYWJlbCB9fVxuICAgIDwvYnV0dG9uPlxuICA8L3A+XG48L2Rpdj5cbiJdfQ==