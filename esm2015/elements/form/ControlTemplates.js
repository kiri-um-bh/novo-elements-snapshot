import { Component, QueryList, ViewChildren } from '@angular/core';
import { NovoTemplateService } from '../../services/template/NovoTemplateService';
import { NovoTemplate } from '../common/novo-template/novo-template.directive';
import * as i0 from "@angular/core";
import * as i1 from "../../services/template/NovoTemplateService";
import * as i2 from "../common/novo-template/novo-template.directive";
import * as i3 from "@angular/forms";
import * as i4 from "../tooltip/Tooltip.directive";
import * as i5 from "@angular/common";
import * as i6 from "angular2-text-mask";
import * as i7 from "./Control";
import * as i8 from "../ckeditor/CKEditor";
import * as i9 from "../ace-editor/AceEditor";
import * as i10 from "./extras/file/FileInput";
import * as i11 from "../tiles/Tiles";
import * as i12 from "../picker/Picker";
import * as i13 from "../chips/Chips";
import * as i14 from "../chips/RowChips";
import * as i15 from "../select/Select";
import * as i16 from "../radio/Radio";
import * as i17 from "../time-picker/TimePickerInput";
import * as i18 from "../date-picker/DatePickerInput";
import * as i19 from "../date-time-picker/DateTimePickerInput";
import * as i20 from "./extras/address/Address";
import * as i21 from "./extras/checkbox/Checkbox";
import * as i22 from "./extras/checkbox/CheckList";
import * as i23 from "../quick-note/QuickNote";
function NovoControlTemplates_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const form_r18 = ctx.form;
    const control_r19 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(form_r18.value[control_r19.key]);
} }
function NovoControlTemplates_ng_template_1_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 24);
    i0.ɵɵlistener("input", function NovoControlTemplates_ng_template_1_input_1_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r31); const methods_r23 = i0.ɵɵnextContext().methods; return methods_r23.emitChange($event); })("focus", function NovoControlTemplates_ng_template_1_input_1_Template_input_focus_0_listener($event) { i0.ɵɵrestoreView(_r31); const methods_r23 = i0.ɵɵnextContext().methods; return methods_r23.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_1_input_1_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r31); const methods_r23 = i0.ɵɵnextContext().methods; return methods_r23.handleBlur($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("textMask", control_r20.maskOptions)("formControlName", control_r20.key)("id", control_r20.key)("type", control_r20 == null ? null : control_r20.type)("placeholder", control_r20 == null ? null : control_r20.placeholder);
} }
function NovoControlTemplates_ng_template_1_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 25);
    i0.ɵɵlistener("input", function NovoControlTemplates_ng_template_1_input_2_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r39); const methods_r23 = i0.ɵɵnextContext().methods; return methods_r23.emitChange($event); })("focus", function NovoControlTemplates_ng_template_1_input_2_Template_input_focus_0_listener($event) { i0.ɵɵrestoreView(_r39); const methods_r23 = i0.ɵɵnextContext().methods; return methods_r23.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_1_input_2_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r39); const methods_r23 = i0.ɵɵnextContext().methods; return methods_r23.handleBlur($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const errors_r22 = ctx_r45.errors;
    const control_r20 = ctx_r45.$implicit;
    i0.ɵɵclassProp("maxlength-error", errors_r22 == null ? null : errors_r22.maxlength);
    i0.ɵɵproperty("formControlName", control_r20.key)("id", control_r20.key)("type", control_r20 == null ? null : control_r20.type)("placeholder", control_r20 == null ? null : control_r20.placeholder)("maxlength", control_r20 == null ? null : control_r20.maxlength);
} }
function NovoControlTemplates_ng_template_1_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 26, 27);
    i0.ɵɵlistener("keydown", function NovoControlTemplates_ng_template_1_input_3_Template_input_keydown_0_listener($event) { i0.ɵɵrestoreView(_r48); const methods_r23 = i0.ɵɵnextContext().methods; return methods_r23.restrictKeys($event); })("input", function NovoControlTemplates_ng_template_1_input_3_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r48); const methods_r23 = i0.ɵɵnextContext().methods; return methods_r23.emitChange($event); })("focus", function NovoControlTemplates_ng_template_1_input_3_Template_input_focus_0_listener($event) { i0.ɵɵrestoreView(_r48); const methods_r23 = i0.ɵɵnextContext().methods; return methods_r23.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_1_input_3_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r48); const methods_r23 = i0.ɵɵnextContext().methods; return methods_r23.handleBlur($event); })("mousewheel", function NovoControlTemplates_ng_template_1_input_3_Template_input_mousewheel_0_listener() { i0.ɵɵrestoreView(_r48); const _r46 = i0.ɵɵreference(1); return _r46.blur(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r57 = i0.ɵɵnextContext();
    const errors_r22 = ctx_r57.errors;
    const control_r20 = ctx_r57.$implicit;
    i0.ɵɵclassProp("maxlength-error", errors_r22 == null ? null : errors_r22.maxlength);
    i0.ɵɵproperty("formControlName", control_r20.key)("id", control_r20.key)("type", control_r20 == null ? null : control_r20.type)("placeholder", control_r20 == null ? null : control_r20.placeholder)("maxlength", control_r20 == null ? null : control_r20.maxlength);
} }
function NovoControlTemplates_ng_template_1_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 28, 29);
    i0.ɵɵlistener("keydown", function NovoControlTemplates_ng_template_1_input_4_Template_input_keydown_0_listener($event) { i0.ɵɵrestoreView(_r60); const methods_r23 = i0.ɵɵnextContext().methods; return methods_r23.restrictKeys($event); })("input", function NovoControlTemplates_ng_template_1_input_4_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r60); const methods_r23 = i0.ɵɵnextContext().methods; return methods_r23.handlePercentChange($event); })("focus", function NovoControlTemplates_ng_template_1_input_4_Template_input_focus_0_listener($event) { i0.ɵɵrestoreView(_r60); const methods_r23 = i0.ɵɵnextContext().methods; return methods_r23.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_1_input_4_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r60); const methods_r23 = i0.ɵɵnextContext().methods; return methods_r23.handleBlur($event); })("mousewheel", function NovoControlTemplates_ng_template_1_input_4_Template_input_mousewheel_0_listener() { i0.ɵɵrestoreView(_r60); const _r58 = i0.ɵɵreference(1); return _r58.blur(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("type", control_r20 == null ? null : control_r20.type)("placeholder", control_r20 == null ? null : control_r20.placeholder)("value", control_r20 == null ? null : control_r20.percentValue);
} }
function NovoControlTemplates_ng_template_1_label_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(control_r20.currencyFormat);
} }
function NovoControlTemplates_ng_template_1_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 30);
    i0.ɵɵtext(1, "%");
    i0.ɵɵelementEnd();
} }
function NovoControlTemplates_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, NovoControlTemplates_ng_template_1_input_1_Template, 1, 5, "input", 19);
    i0.ɵɵtemplate(2, NovoControlTemplates_ng_template_1_input_2_Template, 1, 7, "input", 20);
    i0.ɵɵtemplate(3, NovoControlTemplates_ng_template_1_input_3_Template, 2, 7, "input", 21);
    i0.ɵɵtemplate(4, NovoControlTemplates_ng_template_1_input_4_Template, 2, 3, "input", 22);
    i0.ɵɵtemplate(5, NovoControlTemplates_ng_template_1_label_5_Template, 2, 1, "label", 23);
    i0.ɵɵtemplate(6, NovoControlTemplates_ng_template_1_label_6_Template, 2, 0, "label", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r20 = ctx.$implicit;
    const form_r21 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r21)("tooltip", control_r20 == null ? null : control_r20.tooltip)("tooltipPosition", control_r20 == null ? null : control_r20.tooltipPosition)("tooltipSize", control_r20 == null ? null : control_r20.tooltipSize)("tooltipPreline", control_r20 == null ? null : control_r20.tooltipPreline)("removeTooltipArrow", control_r20 == null ? null : control_r20.removeTooltipArrow)("tooltipAutoPosition", control_r20 == null ? null : control_r20.tooltipAutoPosition);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (control_r20 == null ? null : control_r20.type) !== "number" && (control_r20 == null ? null : control_r20.textMaskEnabled));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (control_r20 == null ? null : control_r20.type) !== "number" && !(control_r20 == null ? null : control_r20.textMaskEnabled));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (control_r20 == null ? null : control_r20.type) === "number" && (control_r20 == null ? null : control_r20.subType) !== "percentage");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (control_r20 == null ? null : control_r20.type) === "number" && (control_r20 == null ? null : control_r20.subType) === "percentage");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (control_r20 == null ? null : control_r20.subType) === "currency");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (control_r20 == null ? null : control_r20.subType) === "percentage");
} }
function NovoControlTemplates_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r76 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelementStart(1, "textarea", 32);
    i0.ɵɵlistener("input", function NovoControlTemplates_ng_template_2_Template_textarea_input_1_listener($event) { i0.ɵɵrestoreView(_r76); const methods_r74 = ctx.methods; return methods_r74.handleTextAreaInput($event); })("focus", function NovoControlTemplates_ng_template_2_Template_textarea_focus_1_listener($event) { i0.ɵɵrestoreView(_r76); const methods_r74 = ctx.methods; return methods_r74.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_2_Template_textarea_blur_1_listener($event) { i0.ɵɵrestoreView(_r76); const methods_r74 = ctx.methods; return methods_r74.handleBlur($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r71 = ctx.$implicit;
    const form_r72 = ctx.form;
    const errors_r73 = ctx.errors;
    i0.ɵɵproperty("formGroup", form_r72)("tooltip", control_r71 == null ? null : control_r71.tooltip)("tooltipPosition", control_r71 == null ? null : control_r71.tooltipPosition)("tooltipSize", control_r71 == null ? null : control_r71.tooltipSize)("tooltipPreline", control_r71 == null ? null : control_r71.tooltipPreline)("removeTooltipArrow", control_r71 == null ? null : control_r71.removeTooltipArrow)("tooltipAutoPosition", control_r71 == null ? null : control_r71.tooltipAutoPosition);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("maxlength-error", errors_r73 == null ? null : errors_r73.maxlength);
    i0.ɵɵproperty("name", control_r71.key)("placeholder", control_r71.placeholder)("formControlName", control_r71.key)("maxlength", control_r71 == null ? null : control_r71.maxlength);
    i0.ɵɵattribute("id", control_r71.key);
} }
function NovoControlTemplates_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r84 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelementStart(1, "novo-editor", 34);
    i0.ɵɵlistener("focus", function NovoControlTemplates_ng_template_3_Template_novo_editor_focus_1_listener($event) { i0.ɵɵrestoreView(_r84); const methods_r82 = ctx.methods; return methods_r82.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_3_Template_novo_editor_blur_1_listener($event) { i0.ɵɵrestoreView(_r84); const methods_r82 = ctx.methods; return methods_r82.handleBlur($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r79 = ctx.$implicit;
    const form_r80 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r80);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", control_r79.key)("formControlName", control_r79.key)("startupFocus", control_r79.startupFocus)("minimal", control_r79.minimal)("fileBrowserImageUploadUrl", control_r79.fileBrowserImageUploadUrl)("config", control_r79.config);
} }
function NovoControlTemplates_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r91 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelementStart(1, "novo-ace-editor", 35);
    i0.ɵɵlistener("focus", function NovoControlTemplates_ng_template_4_Template_novo_ace_editor_focus_1_listener($event) { i0.ɵɵrestoreView(_r91); const methods_r89 = ctx.methods; return methods_r89.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_4_Template_novo_ace_editor_blur_1_listener($event) { i0.ɵɵrestoreView(_r91); const methods_r89 = ctx.methods; return methods_r89.handleBlur($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r86 = ctx.$implicit;
    const form_r87 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r87);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", control_r86.key)("formControlName", control_r86.key);
} }
function NovoControlTemplates_ng_template_5_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r93 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(control_r93.placeholder);
} }
function NovoControlTemplates_ng_template_5_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r100 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r100.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(opt_r100.value);
} }
function NovoControlTemplates_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelementStart(1, "select", 36);
    i0.ɵɵtemplate(2, NovoControlTemplates_ng_template_5_option_2_Template, 2, 1, "option", 37);
    i0.ɵɵtemplate(3, NovoControlTemplates_ng_template_5_option_3_Template, 2, 2, "option", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r93 = ctx.$implicit;
    const form_r94 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r94);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", control_r93.key)("formControlName", control_r93.key)("tooltip", control_r93.tooltip)("tooltipPosition", control_r93.tooltipPosition)("tooltipSize", control_r93 == null ? null : control_r93.tooltipSize)("tooltipPreline", control_r93 == null ? null : control_r93.tooltipPreline)("removeTooltipArrow", control_r93 == null ? null : control_r93.removeTooltipArrow)("tooltipAutoPosition", control_r93 == null ? null : control_r93.tooltipAutoPosition);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", control_r93.placeholder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", control_r93.options);
} }
function NovoControlTemplates_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r106 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelementStart(1, "novo-file-input", 41);
    i0.ɵɵlistener("edit", function NovoControlTemplates_ng_template_6_Template_novo_file_input_edit_1_listener($event) { i0.ɵɵrestoreView(_r106); const methods_r104 = ctx.methods; return methods_r104.handleEdit($event); })("save", function NovoControlTemplates_ng_template_6_Template_novo_file_input_save_1_listener($event) { i0.ɵɵrestoreView(_r106); const methods_r104 = ctx.methods; return methods_r104.handleSave($event); })("delete", function NovoControlTemplates_ng_template_6_Template_novo_file_input_delete_1_listener($event) { i0.ɵɵrestoreView(_r106); const methods_r104 = ctx.methods; return methods_r104.handleDelete($event); })("upload", function NovoControlTemplates_ng_template_6_Template_novo_file_input_upload_1_listener($event) { i0.ɵɵrestoreView(_r106); const methods_r104 = ctx.methods; return methods_r104.handleUpload($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r101 = ctx.$implicit;
    const form_r102 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r102);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", control_r101.key)("id", control_r101.key)("name", control_r101.key)("placeholder", control_r101.placeholder)("value", control_r101.value)("multiple", control_r101.multiple)("layoutOptions", control_r101.layoutOptions)("tooltip", control_r101.tooltip)("tooltipPosition", control_r101.tooltipPosition)("tooltipSize", control_r101 == null ? null : control_r101.tooltipSize)("tooltipPreline", control_r101 == null ? null : control_r101.tooltipPreline)("removeTooltipArrow", control_r101 == null ? null : control_r101.removeTooltipArrow)("tooltipAutoPosition", control_r101 == null ? null : control_r101.tooltipAutoPosition);
} }
function NovoControlTemplates_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r115 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelementStart(1, "novo-tiles", 42);
    i0.ɵɵlistener("onChange", function NovoControlTemplates_ng_template_7_Template_novo_tiles_onChange_1_listener($event) { i0.ɵɵrestoreView(_r115); const methods_r113 = ctx.methods; return methods_r113.modelChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r110 = ctx.$implicit;
    const form_r111 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r111);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("options", control_r110.options)("formControlName", control_r110.key)("tooltip", control_r110.tooltip)("tooltipPosition", control_r110.tooltipPosition)("tooltipSize", control_r110 == null ? null : control_r110.tooltipSize)("tooltipPreline", control_r110 == null ? null : control_r110.tooltipPreline)("removeTooltipArrow", control_r110 == null ? null : control_r110.removeTooltipArrow)("tooltipAutoPosition", control_r110 == null ? null : control_r110.tooltipAutoPosition)("controlDisabled", control_r110.disabled);
} }
function NovoControlTemplates_ng_template_8_novo_picker_1_Template(rf, ctx) { if (rf & 1) {
    const _r124 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-picker", 47);
    i0.ɵɵlistener("select", function NovoControlTemplates_ng_template_8_novo_picker_1_Template_novo_picker_select_0_listener($event) { i0.ɵɵrestoreView(_r124); const methods_r119 = i0.ɵɵnextContext().methods; return methods_r119.modelChange($event); })("changed", function NovoControlTemplates_ng_template_8_novo_picker_1_Template_novo_picker_changed_0_listener($event) { i0.ɵɵrestoreView(_r124); const methods_r119 = i0.ɵɵnextContext().methods; return methods_r119.modelChangeWithRaw($event); })("typing", function NovoControlTemplates_ng_template_8_novo_picker_1_Template_novo_picker_typing_0_listener($event) { i0.ɵɵrestoreView(_r124); const methods_r119 = i0.ɵɵnextContext().methods; return methods_r119.handleTyping($event); })("focus", function NovoControlTemplates_ng_template_8_novo_picker_1_Template_novo_picker_focus_0_listener($event) { i0.ɵɵrestoreView(_r124); const methods_r119 = i0.ɵɵnextContext().methods; return methods_r119.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_8_novo_picker_1_Template_novo_picker_blur_0_listener($event) { i0.ɵɵrestoreView(_r124); const methods_r119 = i0.ɵɵnextContext().methods; return methods_r119.handleBlur($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r116 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("config", control_r116.config)("formControlName", control_r116.key)("placeholder", control_r116.placeholder)("parentScrollSelector", control_r116.parentScrollSelector)("tooltip", control_r116.tooltip)("tooltipPosition", control_r116.tooltipPosition)("tooltipSize", control_r116 == null ? null : control_r116.tooltipSize)("tooltipPreline", control_r116 == null ? null : control_r116.tooltipPreline)("removeTooltipArrow", control_r116 == null ? null : control_r116.removeTooltipArrow)("tooltipAutoPosition", control_r116 == null ? null : control_r116.tooltipAutoPosition);
} }
function NovoControlTemplates_ng_template_8_novo_chips_2_Template(rf, ctx) { if (rf & 1) {
    const _r136 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-chips", 48);
    i0.ɵɵlistener("changed", function NovoControlTemplates_ng_template_8_novo_chips_2_Template_novo_chips_changed_0_listener($event) { i0.ɵɵrestoreView(_r136); const methods_r119 = i0.ɵɵnextContext().methods; return methods_r119.modelChangeWithRaw($event); })("typing", function NovoControlTemplates_ng_template_8_novo_chips_2_Template_novo_chips_typing_0_listener($event) { i0.ɵɵrestoreView(_r136); const methods_r119 = i0.ɵɵnextContext().methods; return methods_r119.handleTyping($event); })("focus", function NovoControlTemplates_ng_template_8_novo_chips_2_Template_novo_chips_focus_0_listener($event) { i0.ɵɵrestoreView(_r136); const methods_r119 = i0.ɵɵnextContext().methods; return methods_r119.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_8_novo_chips_2_Template_novo_chips_blur_0_listener($event) { i0.ɵɵrestoreView(_r136); const methods_r119 = i0.ɵɵnextContext().methods; return methods_r119.handleBlur($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r116 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("source", control_r116.config)("type", control_r116.config.type)("formControlName", control_r116.key)("placeholder", control_r116.placeholder)("maxlength", control_r116 == null ? null : control_r116.maxlength)("closeOnSelect", control_r116.closeOnSelect)("tooltip", control_r116.tooltip)("tooltipPosition", control_r116.tooltipPosition)("tooltipSize", control_r116 == null ? null : control_r116.tooltipSize)("tooltipPreline", control_r116 == null ? null : control_r116.tooltipPreline)("removeTooltipArrow", control_r116 == null ? null : control_r116.removeTooltipArrow)("tooltipAutoPosition", control_r116 == null ? null : control_r116.tooltipAutoPosition);
} }
function NovoControlTemplates_ng_template_8_novo_row_chips_3_Template(rf, ctx) { if (rf & 1) {
    const _r146 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-row-chips", 49);
    i0.ɵɵlistener("changed", function NovoControlTemplates_ng_template_8_novo_row_chips_3_Template_novo_row_chips_changed_0_listener($event) { i0.ɵɵrestoreView(_r146); const methods_r119 = i0.ɵɵnextContext().methods; return methods_r119.modelChangeWithRaw($event); })("typing", function NovoControlTemplates_ng_template_8_novo_row_chips_3_Template_novo_row_chips_typing_0_listener($event) { i0.ɵɵrestoreView(_r146); const methods_r119 = i0.ɵɵnextContext().methods; return methods_r119.handleTyping($event); })("focus", function NovoControlTemplates_ng_template_8_novo_row_chips_3_Template_novo_row_chips_focus_0_listener($event) { i0.ɵɵrestoreView(_r146); const methods_r119 = i0.ɵɵnextContext().methods; return methods_r119.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_8_novo_row_chips_3_Template_novo_row_chips_blur_0_listener($event) { i0.ɵɵrestoreView(_r146); const methods_r119 = i0.ɵɵnextContext().methods; return methods_r119.handleBlur($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r116 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("source", control_r116.config)("type", control_r116.config.type)("formControlName", control_r116.key)("placeholder", control_r116.placeholder)("closeOnSelect", control_r116.closeOnSelect)("tooltip", control_r116.tooltip)("tooltipPosition", control_r116.tooltipPosition)("tooltipSize", control_r116 == null ? null : control_r116.tooltipSize)("tooltipPreline", control_r116 == null ? null : control_r116.tooltipPreline)("removeTooltipArrow", control_r116 == null ? null : control_r116.removeTooltipArrow)("tooltipAutoPosition", control_r116 == null ? null : control_r116.tooltipAutoPosition);
} }
function NovoControlTemplates_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵtemplate(1, NovoControlTemplates_ng_template_8_novo_picker_1_Template, 1, 10, "novo-picker", 44);
    i0.ɵɵtemplate(2, NovoControlTemplates_ng_template_8_novo_chips_2_Template, 1, 12, "novo-chips", 45);
    i0.ɵɵtemplate(3, NovoControlTemplates_ng_template_8_novo_row_chips_3_Template, 1, 11, "novo-row-chips", 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r116 = ctx.$implicit;
    const form_r117 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r117);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !control_r116.multiple);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", control_r116.multiple && !control_r116.config.columns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", control_r116.multiple && control_r116.config.columns);
} }
function NovoControlTemplates_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r160 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelementStart(1, "novo-select", 50);
    i0.ɵɵlistener("onSelect", function NovoControlTemplates_ng_template_9_Template_novo_select_onSelect_1_listener($event) { i0.ɵɵrestoreView(_r160); const methods_r158 = ctx.methods; return methods_r158.modelChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r155 = ctx.$implicit;
    const form_r156 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r156);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("options", control_r155.options)("headerConfig", control_r155.headerConfig)("placeholder", control_r155.placeholder)("formControlName", control_r155.key)("tooltip", control_r155.tooltip)("tooltipPosition", control_r155.tooltipPosition)("tooltipSize", control_r155 == null ? null : control_r155.tooltipSize)("tooltipPreline", control_r155 == null ? null : control_r155.tooltipPreline)("removeTooltipArrow", control_r155 == null ? null : control_r155.removeTooltipArrow)("tooltipAutoPosition", control_r155 == null ? null : control_r155.tooltipAutoPosition);
} }
function NovoControlTemplates_ng_template_10_novo_radio_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-radio", 52);
} if (rf & 2) {
    const option_r166 = ctx.$implicit;
    const ctx_r167 = i0.ɵɵnextContext();
    const control_r161 = ctx_r167.$implicit;
    const form_r162 = ctx_r167.form;
    i0.ɵɵproperty("name", control_r161.key)("formControlName", control_r161.key)("value", option_r166.value)("label", option_r166.label)("checked", option_r166.value === form_r162.value[control_r161.key] || form_r162.value[control_r161.key] && option_r166.value === form_r162.value[control_r161.key].id)("tooltip", control_r161.tooltip)("tooltipPosition", control_r161.tooltipPosition)("tooltipSize", control_r161 == null ? null : control_r161.tooltipSize)("tooltipPreline", control_r161 == null ? null : control_r161.tooltipPreline)("removeTooltipArrow", control_r161 == null ? null : control_r161.removeTooltipArrow)("tooltipAutoPosition", control_r161 == null ? null : control_r161.tooltipAutoPosition)("button", !!option_r166.icon)("icon", option_r166.icon);
    i0.ɵɵattribute("data-automation-id", control_r161.key + "-" + ((option_r166 == null ? null : option_r166.label) || (option_r166 == null ? null : option_r166.value)));
} }
function NovoControlTemplates_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵtemplate(1, NovoControlTemplates_ng_template_10_novo_radio_1_Template, 1, 14, "novo-radio", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r161 = ctx.$implicit;
    const form_r162 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r162);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", control_r161.options);
} }
function NovoControlTemplates_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵelement(1, "novo-time-picker-input", 54);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r168 = ctx.$implicit;
    const form_r169 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r169)("tooltip", control_r168 == null ? null : control_r168.tooltip)("tooltipPosition", control_r168 == null ? null : control_r168.tooltipPosition)("tooltipSize", control_r168 == null ? null : control_r168.tooltipSize)("tooltipPreline", control_r168 == null ? null : control_r168.tooltipPreline)("removeTooltipArrow", control_r168 == null ? null : control_r168.removeTooltipArrow)("tooltipAutoPosition", control_r168 == null ? null : control_r168.tooltipAutoPosition);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", control_r168.key)("formControlName", control_r168.key)("placeholder", control_r168.placeholder)("military", control_r168.military);
    i0.ɵɵattribute("id", control_r168.key);
} }
function NovoControlTemplates_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r177 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵelementStart(1, "novo-date-picker-input", 55);
    i0.ɵɵlistener("focusEvent", function NovoControlTemplates_ng_template_12_Template_novo_date_picker_input_focusEvent_1_listener($event) { i0.ɵɵrestoreView(_r177); const methods_r175 = ctx.methods; return methods_r175.handleFocus($event); })("blurEvent", function NovoControlTemplates_ng_template_12_Template_novo_date_picker_input_blurEvent_1_listener($event) { i0.ɵɵrestoreView(_r177); const methods_r175 = ctx.methods; return methods_r175.handleBlur($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r172 = ctx.$implicit;
    const form_r173 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r173)("tooltip", control_r172.tooltip)("tooltipPosition", control_r172.tooltipPosition)("tooltipSize", control_r172 == null ? null : control_r172.tooltipSize)("tooltipPreline", control_r172 == null ? null : control_r172.tooltipPreline)("removeTooltipArrow", control_r172 == null ? null : control_r172.removeTooltipArrow)("tooltipAutoPosition", control_r172 == null ? null : control_r172.tooltipAutoPosition);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", control_r172.key)("formControlName", control_r172.key)("start", control_r172.startDate)("end", control_r172.endDate)("format", control_r172.dateFormat)("allowInvalidDate", control_r172.allowInvalidDate)("textMaskEnabled", control_r172.textMaskEnabled)("placeholder", control_r172.placeholder)("weekStart", control_r172.weekStart);
    i0.ɵɵattribute("id", control_r172.key);
} }
function NovoControlTemplates_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r184 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵelementStart(1, "novo-date-time-picker-input", 56);
    i0.ɵɵlistener("focusEvent", function NovoControlTemplates_ng_template_13_Template_novo_date_time_picker_input_focusEvent_1_listener($event) { i0.ɵɵrestoreView(_r184); const methods_r182 = ctx.methods; return methods_r182.handleFocus($event); })("blurEvent", function NovoControlTemplates_ng_template_13_Template_novo_date_time_picker_input_blurEvent_1_listener($event) { i0.ɵɵrestoreView(_r184); const methods_r182 = ctx.methods; return methods_r182.handleBlur($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r179 = ctx.$implicit;
    const form_r180 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r180)("tooltip", control_r179.tooltip)("tooltipPosition", control_r179.tooltipPosition)("tooltipSize", control_r179 == null ? null : control_r179.tooltipSize)("tooltipPreline", control_r179 == null ? null : control_r179.tooltipPreline)("removeTooltipArrow", control_r179 == null ? null : control_r179.removeTooltipArrow)("tooltipAutoPosition", control_r179 == null ? null : control_r179.tooltipAutoPosition);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", control_r179.key)("formControlName", control_r179.key)("start", control_r179.startDate)("end", control_r179.endDate)("placeholder", control_r179.placeholder)("military", control_r179.military)("weekStart", control_r179.weekStart);
    i0.ɵɵattribute("id", control_r179.key);
} }
function NovoControlTemplates_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r191 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelementStart(1, "novo-address", 57);
    i0.ɵɵlistener("change", function NovoControlTemplates_ng_template_14_Template_novo_address_change_1_listener($event) { i0.ɵɵrestoreView(_r191); const methods_r189 = ctx.methods; return methods_r189.handleAddressChange($event); })("focus", function NovoControlTemplates_ng_template_14_Template_novo_address_focus_1_listener($event) { i0.ɵɵrestoreView(_r191); const methods_r189 = ctx.methods; return methods_r189.handleFocus($event.event, $event.field); })("blur", function NovoControlTemplates_ng_template_14_Template_novo_address_blur_1_listener($event) { i0.ɵɵrestoreView(_r191); const methods_r189 = ctx.methods; return methods_r189.handleBlur($event.event, $event.field); })("validityChange", function NovoControlTemplates_ng_template_14_Template_novo_address_validityChange_1_listener() { const methods_r189 = ctx.methods; return methods_r189.updateValidity(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r186 = ctx.$implicit;
    const form_r187 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r187);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", control_r186.key)("config", control_r186 == null ? null : control_r186.config)("readOnly", control_r186 == null ? null : control_r186.readOnly);
} }
function NovoControlTemplates_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelement(1, "novo-checkbox", 58);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r195 = ctx.$implicit;
    const form_r196 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r196);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", control_r195 == null ? null : control_r195.key)("name", control_r195 == null ? null : control_r195.key)("label", control_r195 == null ? null : control_r195.checkboxLabel)("tooltip", control_r195 == null ? null : control_r195.tooltip)("tooltipPosition", control_r195 == null ? null : control_r195.tooltipPosition)("tooltipSize", control_r195 == null ? null : control_r195.tooltipSize)("tooltipPreline", control_r195 == null ? null : control_r195.tooltipPreline)("removeTooltipArrow", control_r195 == null ? null : control_r195.removeTooltipArrow)("tooltipAutoPosition", control_r195 == null ? null : control_r195.tooltipAutoPosition)("layoutOptions", control_r195 == null ? null : control_r195.layoutOptions);
} }
function NovoControlTemplates_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r204 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelementStart(1, "novo-check-list", 59);
    i0.ɵɵlistener("onSelect", function NovoControlTemplates_ng_template_16_Template_novo_check_list_onSelect_1_listener($event) { i0.ɵɵrestoreView(_r204); const methods_r202 = ctx.methods; return methods_r202.modelChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r199 = ctx.$implicit;
    const form_r200 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r200);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", control_r199.key)("name", control_r199.key)("options", control_r199 == null ? null : control_r199.options)("tooltip", control_r199 == null ? null : control_r199.tooltip)("tooltipPosition", control_r199 == null ? null : control_r199.tooltipPosition)("tooltipSize", control_r199 == null ? null : control_r199.tooltipSize)("tooltipPreline", control_r199 == null ? null : control_r199.tooltipPreline)("removeTooltipArrow", control_r199 == null ? null : control_r199.removeTooltipArrow)("tooltipAutoPosition", control_r199 == null ? null : control_r199.tooltipAutoPosition);
} }
function NovoControlTemplates_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r210 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelementStart(1, "novo-quick-note", 60);
    i0.ɵɵlistener("change", function NovoControlTemplates_ng_template_17_Template_novo_quick_note_change_1_listener($event) { i0.ɵɵrestoreView(_r210); const methods_r208 = ctx.methods; return methods_r208.modelChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r205 = ctx.$implicit;
    const form_r206 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r206);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", control_r205.key)("startupFocus", control_r205 == null ? null : control_r205.startupFocus)("placeholder", control_r205 == null ? null : control_r205.placeholder)("config", control_r205 == null ? null : control_r205.config)("tooltip", control_r205 == null ? null : control_r205.tooltip)("tooltipPosition", control_r205 == null ? null : control_r205.tooltipPosition)("tooltipSize", control_r205 == null ? null : control_r205.tooltipSize)("removeTooltipArrow", control_r205 == null ? null : control_r205.removeTooltipArrow)("tooltipAutoPosition", control_r205 == null ? null : control_r205.tooltipAutoPosition)("tooltipPreline", control_r205 == null ? null : control_r205.tooltipPreline);
} }
export class NovoControlTemplates {
    constructor(templates) {
        this.templates = templates;
    }
    ngAfterViewInit() {
        if (this.defaultTemplates && this.defaultTemplates.length) {
            this.defaultTemplates.forEach((template) => {
                this.templates.addDefault(template.name, template.template);
            });
        }
    }
}
NovoControlTemplates.ɵfac = function NovoControlTemplates_Factory(t) { return new (t || NovoControlTemplates)(i0.ɵɵdirectiveInject(i1.NovoTemplateService)); };
NovoControlTemplates.ɵcmp = i0.ɵɵdefineComponent({ type: NovoControlTemplates, selectors: [["novo-control-templates"]], viewQuery: function NovoControlTemplates_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(NovoTemplate, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultTemplates = _t);
    } }, decls: 18, vars: 0, consts: [["novoTemplate", "read-only"], ["novoTemplate", "textbox"], ["novoTemplate", "text-area"], ["novoTemplate", "editor"], ["novoTemplate", "ace-editor"], ["novoTemplate", "native-select"], ["novoTemplate", "file"], ["novoTemplate", "tiles"], ["novoTemplate", "picker"], ["novoTemplate", "select"], ["novoTemplate", "radio"], ["novoTemplate", "time"], ["novoTemplate", "date"], ["novoTemplate", "date-time"], ["novoTemplate", "address"], ["novoTemplate", "checkbox"], ["novoTemplate", "checklist"], ["novoTemplate", "quick-note"], [1, "novo-control-input-container", "novo-control-input-with-label", 3, "formGroup", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition"], ["autocomplete", "", 3, "textMask", "formControlName", "id", "type", "placeholder", "input", "focus", "blur", 4, "ngIf"], ["autocomplete", "", 3, "maxlength-error", "formControlName", "id", "type", "placeholder", "maxlength", "input", "focus", "blur", 4, "ngIf"], ["step", "any", 3, "maxlength-error", "formControlName", "id", "type", "placeholder", "maxlength", "keydown", "input", "focus", "blur", "mousewheel", 4, "ngIf"], ["step", "any", 3, "type", "placeholder", "value", "keydown", "input", "focus", "blur", "mousewheel", 4, "ngIf"], ["class", "input-label", 4, "ngIf"], ["autocomplete", "", 3, "textMask", "formControlName", "id", "type", "placeholder", "input", "focus", "blur"], ["autocomplete", "", 3, "formControlName", "id", "type", "placeholder", "maxlength", "input", "focus", "blur"], ["step", "any", 3, "formControlName", "id", "type", "placeholder", "maxlength", "keydown", "input", "focus", "blur", "mousewheel"], ["numberInput", ""], ["step", "any", 3, "type", "placeholder", "value", "keydown", "input", "focus", "blur", "mousewheel"], ["percentInput", ""], [1, "input-label"], [1, "textarea-container", 3, "formGroup", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition"], ["autosize", "", 3, "name", "placeholder", "formControlName", "maxlength", "input", "focus", "blur"], [3, "formGroup"], [3, "name", "formControlName", "startupFocus", "minimal", "fileBrowserImageUploadUrl", "config", "focus", "blur"], [3, "name", "formControlName", "focus", "blur"], [3, "id", "formControlName", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition"], ["value", "", "disabled", "", "selected", "", "hidden", "", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "", "disabled", "", "selected", "", "hidden", ""], [3, "value"], [3, "formControlName", "id", "name", "placeholder", "value", "multiple", "layoutOptions", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "edit", "save", "delete", "upload"], [3, "options", "formControlName", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "controlDisabled", "onChange"], [1, "novo-control-input-container", 3, "formGroup"], [3, "config", "formControlName", "placeholder", "parentScrollSelector", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "select", "changed", "typing", "focus", "blur", 4, "ngIf"], [3, "source", "type", "formControlName", "placeholder", "maxlength", "closeOnSelect", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "changed", "typing", "focus", "blur", 4, "ngIf"], [3, "source", "type", "formControlName", "placeholder", "closeOnSelect", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "changed", "typing", "focus", "blur", 4, "ngIf"], [3, "config", "formControlName", "placeholder", "parentScrollSelector", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "select", "changed", "typing", "focus", "blur"], [3, "source", "type", "formControlName", "placeholder", "maxlength", "closeOnSelect", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "changed", "typing", "focus", "blur"], [3, "source", "type", "formControlName", "placeholder", "closeOnSelect", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "changed", "typing", "focus", "blur"], [3, "options", "headerConfig", "placeholder", "formControlName", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "onSelect"], [3, "name", "formControlName", "value", "label", "checked", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "button", "icon", 4, "ngFor", "ngForOf"], [3, "name", "formControlName", "value", "label", "checked", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "button", "icon"], [1, "novo-control-input-container", 3, "formGroup", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition"], [3, "name", "formControlName", "placeholder", "military"], [3, "name", "formControlName", "start", "end", "format", "allowInvalidDate", "textMaskEnabled", "placeholder", "weekStart", "focusEvent", "blurEvent"], [3, "name", "formControlName", "start", "end", "placeholder", "military", "weekStart", "focusEvent", "blurEvent"], [3, "formControlName", "config", "readOnly", "change", "focus", "blur", "validityChange"], [3, "formControlName", "name", "label", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "layoutOptions"], [3, "formControlName", "name", "options", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "onSelect"], [3, "formControlName", "startupFocus", "placeholder", "config", "tooltip", "tooltipPosition", "tooltipSize", "removeTooltipArrow", "tooltipAutoPosition", "tooltipPreline", "change"]], template: function NovoControlTemplates_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoControlTemplates_ng_template_0_Template, 2, 1, "ng-template", 0);
        i0.ɵɵtemplate(1, NovoControlTemplates_ng_template_1_Template, 7, 13, "ng-template", 1);
        i0.ɵɵtemplate(2, NovoControlTemplates_ng_template_2_Template, 2, 14, "ng-template", 2);
        i0.ɵɵtemplate(3, NovoControlTemplates_ng_template_3_Template, 2, 7, "ng-template", 3);
        i0.ɵɵtemplate(4, NovoControlTemplates_ng_template_4_Template, 2, 3, "ng-template", 4);
        i0.ɵɵtemplate(5, NovoControlTemplates_ng_template_5_Template, 4, 11, "ng-template", 5);
        i0.ɵɵtemplate(6, NovoControlTemplates_ng_template_6_Template, 2, 14, "ng-template", 6);
        i0.ɵɵtemplate(7, NovoControlTemplates_ng_template_7_Template, 2, 10, "ng-template", 7);
        i0.ɵɵtemplate(8, NovoControlTemplates_ng_template_8_Template, 4, 4, "ng-template", 8);
        i0.ɵɵtemplate(9, NovoControlTemplates_ng_template_9_Template, 2, 11, "ng-template", 9);
        i0.ɵɵtemplate(10, NovoControlTemplates_ng_template_10_Template, 2, 2, "ng-template", 10);
        i0.ɵɵtemplate(11, NovoControlTemplates_ng_template_11_Template, 2, 12, "ng-template", 11);
        i0.ɵɵtemplate(12, NovoControlTemplates_ng_template_12_Template, 2, 17, "ng-template", 12);
        i0.ɵɵtemplate(13, NovoControlTemplates_ng_template_13_Template, 2, 15, "ng-template", 13);
        i0.ɵɵtemplate(14, NovoControlTemplates_ng_template_14_Template, 2, 4, "ng-template", 14);
        i0.ɵɵtemplate(15, NovoControlTemplates_ng_template_15_Template, 2, 11, "ng-template", 15);
        i0.ɵɵtemplate(16, NovoControlTemplates_ng_template_16_Template, 2, 10, "ng-template", 16);
        i0.ɵɵtemplate(17, NovoControlTemplates_ng_template_17_Template, 2, 11, "ng-template", 17);
    } }, directives: [i2.NovoTemplate, i3.NgControlStatusGroup, i3.FormGroupDirective, i4.TooltipDirective, i5.NgIf, i3.DefaultValueAccessor, i6.MaskedInputDirective, i3.NgControlStatus, i3.FormControlName, i3.MaxLengthValidator, i7.NovoAutoSize, i8.NovoCKEditorElement, i9.NovoAceEditor, i3.SelectControlValueAccessor, i5.NgForOf, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i10.NovoFileInputElement, i11.NovoTilesElement, i12.NovoPickerElement, i13.NovoChipsElement, i14.NovoRowChipsElement, i15.NovoSelectElement, i16.NovoRadioElement, i17.NovoTimePickerInputElement, i18.NovoDatePickerInputElement, i19.NovoDateTimePickerInputElement, i20.NovoAddressElement, i21.NovoCheckboxElement, i22.NovoCheckListElement, i23.QuickNoteElement], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoControlTemplates, [{
        type: Component,
        args: [{
                selector: 'novo-control-templates',
                template: `
        <!---Readonly--->
        <ng-template novoTemplate="read-only" let-form="form" let-control>
          <div>{{ form.value[control.key] }}</div>
        </ng-template>
        <!--Textbox--->
        <ng-template novoTemplate="textbox" let-control let-form="form" let-errors="errors" let-methods="methods">
          <div [formGroup]="form" class="novo-control-input-container novo-control-input-with-label" [tooltip]="control?.tooltip" [tooltipPosition]="control?.tooltipPosition"  [tooltipSize]="control?.tooltipSize" [tooltipPreline]="control?.tooltipPreline" [removeTooltipArrow]="control?.removeTooltipArrow" [tooltipAutoPosition]="control?.tooltipAutoPosition">
            <input *ngIf="control?.type !== 'number' && control?.textMaskEnabled" [textMask]="control.maskOptions" [formControlName]="control.key" [id]="control.key" [type]="control?.type" [placeholder]="control?.placeholder" (input)="methods.emitChange($event)" (focus)="methods.handleFocus($event)" (blur)="methods.handleBlur($event)" autocomplete>
            <input *ngIf="control?.type !== 'number' && !control?.textMaskEnabled" [class.maxlength-error]="errors?.maxlength" [formControlName]="control.key" [id]="control.key" [type]="control?.type" [placeholder]="control?.placeholder" (input)="methods.emitChange($event)" [maxlength]="control?.maxlength" (focus)="methods.handleFocus($event)" (blur)="methods.handleBlur($event)" autocomplete>
            <input *ngIf="control?.type === 'number' && control?.subType !== 'percentage'" [class.maxlength-error]="errors?.maxlength" [formControlName]="control.key" [id]="control.key" [type]="control?.type" [placeholder]="control?.placeholder" (keydown)="methods.restrictKeys($event)" (input)="methods.emitChange($event)" [maxlength]="control?.maxlength" (focus)="methods.handleFocus($event)" (blur)="methods.handleBlur($event)" step="any" (mousewheel)="numberInput.blur()" #numberInput>
            <input *ngIf="control?.type === 'number' && control?.subType === 'percentage'" [type]="control?.type" [placeholder]="control?.placeholder" (keydown)="methods.restrictKeys($event)" [value]="control?.percentValue" (input)="methods.handlePercentChange($event)" (focus)="methods.handleFocus($event)" (blur)="methods.handleBlur($event)" step="any" (mousewheel)="percentInput.blur()" #percentInput>
            <label class="input-label" *ngIf="control?.subType === 'currency'">{{ control.currencyFormat }}</label>
            <label class="input-label" *ngIf="control?.subType === 'percentage'">%</label>
          </div>
        </ng-template>

        <!--Textarea--->
        <ng-template novoTemplate="text-area" let-control let-form="form" let-errors="errors" let-methods="methods">
          <div class="textarea-container" [formGroup]="form" [tooltip]="control?.tooltip" [tooltipPosition]="control?.tooltipPosition"  [tooltipSize]="control?.tooltipSize" [tooltipPreline]="control?.tooltipPreline" [removeTooltipArrow]="control?.removeTooltipArrow" [tooltipAutoPosition]="control?.tooltipAutoPosition">
            <textarea [class.maxlength-error]="errors?.maxlength" [name]="control.key" [attr.id]="control.key" [placeholder]="control.placeholder" [formControlName]="control.key" autosize (input)="methods.handleTextAreaInput($event)" (focus)="methods.handleFocus($event)" (blur)="methods.handleBlur($event)" [maxlength]="control?.maxlength"></textarea>
          </div>
        </ng-template>

        <!--Editor-->
        <ng-template novoTemplate="editor" let-control let-form="form" let-errors="errors" let-methods="methods">
          <div [formGroup]="form">
            <novo-editor [name]="control.key" [formControlName]="control.key" [startupFocus]="control.startupFocus" [minimal]="control.minimal" [fileBrowserImageUploadUrl]="control.fileBrowserImageUploadUrl" (focus)="methods.handleFocus($event)" (blur)="methods.handleBlur($event)" [config]="control.config"></novo-editor>
          </div>
        </ng-template>

        <!--AceEditor-->
        <ng-template novoTemplate="ace-editor" let-control let-form="form" let-errors="errors" let-methods="methods">
          <div [formGroup]="form">
            <novo-ace-editor [name]="control.key" [formControlName]="control.key" (focus)="methods.handleFocus($event)" (blur)="methods.handleBlur($event)"></novo-ace-editor>
          </div>
        </ng-template>

        <!--HTML5 Select-->
        <ng-template novoTemplate="native-select" let-control let-form="form" let-errors="errors" let-methods="methods">
          <div [formGroup]="form">
            <select [id]="control.key" [formControlName]="control.key" [tooltip]="control.tooltip" [tooltipPosition]="control.tooltipPosition"  [tooltipSize]="control?.tooltipSize" [tooltipPreline]="control?.tooltipPreline" [removeTooltipArrow]="control?.removeTooltipArrow" [tooltipAutoPosition]="control?.tooltipAutoPosition">
                <option *ngIf="control.placeholder" value="" disabled selected hidden>{{ control.placeholder }}</option>
                <option *ngFor="let opt of control.options" [value]="opt.key">{{opt.value}}</option>
            </select>
          </div>
        </ng-template>

        <!--File-->
        <ng-template novoTemplate="file" let-control let-form="form" let-errors="errors" let-methods="methods">
          <div [formGroup]="form">
            <novo-file-input [formControlName]="control.key" [id]="control.key" [name]="control.key" [placeholder]="control.placeholder" [value]="control.value" [multiple]="control.multiple" [layoutOptions]="control.layoutOptions" [tooltip]="control.tooltip" [tooltipPosition]="control.tooltipPosition"  [tooltipSize]="control?.tooltipSize" [tooltipPreline]="control?.tooltipPreline" [removeTooltipArrow]="control?.removeTooltipArrow" [tooltipAutoPosition]="control?.tooltipAutoPosition" (edit)="methods.handleEdit($event)" (save)="methods.handleSave($event)" (delete)="methods.handleDelete($event)" (upload)="methods.handleUpload($event)"></novo-file-input>
          </div>
        </ng-template>

        <!--Tiles-->
        <ng-template novoTemplate="tiles" let-control let-form="form" let-errors="errors" let-methods="methods">
          <div [formGroup]="form">
            <novo-tiles [options]="control.options" [formControlName]="control.key" (onChange)="methods.modelChange($event)" [tooltip]="control.tooltip" [tooltipPosition]="control.tooltipPosition"  [tooltipSize]="control?.tooltipSize" [tooltipPreline]="control?.tooltipPreline" [removeTooltipArrow]="control?.removeTooltipArrow" [tooltipAutoPosition]="control?.tooltipAutoPosition" [controlDisabled]="control.disabled"></novo-tiles>
          </div>
        </ng-template>

        <!--Picker-->
        <ng-template novoTemplate="picker" let-control let-form="form" let-errors="errors" let-methods="methods">
          <div [formGroup]="form" class="novo-control-input-container">
            <novo-picker [config]="control.config" [formControlName]="control.key" [placeholder]="control.placeholder" [parentScrollSelector]="control.parentScrollSelector" *ngIf="!control.multiple" (select)="methods.modelChange($event);" (changed)="methods.modelChangeWithRaw($event)" (typing)="methods.handleTyping($event)" (focus)="methods.handleFocus($event)" (blur)="methods.handleBlur($event)" [tooltip]="control.tooltip" [tooltipPosition]="control.tooltipPosition" [tooltipSize]="control?.tooltipSize" [tooltipPreline]="control?.tooltipPreline" [removeTooltipArrow]="control?.removeTooltipArrow" [tooltipAutoPosition]="control?.tooltipAutoPosition"></novo-picker>
            <novo-chips [source]="control.config" [type]="control.config.type" [formControlName]="control.key" [placeholder]="control.placeholder" [maxlength]="control?.maxlength" *ngIf="control.multiple && !control.config.columns" [closeOnSelect]="control.closeOnSelect" (changed)="methods.modelChangeWithRaw($event)" (typing)="methods.handleTyping($event)" (focus)="methods.handleFocus($event)" (blur)="methods.handleBlur($event)" [tooltip]="control.tooltip" [tooltipPosition]="control.tooltipPosition" [tooltipSize]="control?.tooltipSize" [tooltipPreline]="control?.tooltipPreline" [removeTooltipArrow]="control?.removeTooltipArrow" [tooltipAutoPosition]="control?.tooltipAutoPosition"></novo-chips>
            <novo-row-chips [source]="control.config" [type]="control.config.type" [formControlName]="control.key" [placeholder]="control.placeholder" *ngIf="control.multiple && control.config.columns" [closeOnSelect]="control.closeOnSelect" (changed)="methods.modelChangeWithRaw($event)" (typing)="methods.handleTyping($event)" (focus)="methods.handleFocus($event)" (blur)="methods.handleBlur($event)" [tooltip]="control.tooltip" [tooltipPosition]="control.tooltipPosition" [tooltipSize]="control?.tooltipSize" [tooltipPreline]="control?.tooltipPreline" [removeTooltipArrow]="control?.removeTooltipArrow" [tooltipAutoPosition]="control?.tooltipAutoPosition"></novo-row-chips>
          </div>
        </ng-template>

        <!--Novo Select-->
        <ng-template novoTemplate="select" let-control let-form="form" let-errors="errors" let-methods="methods">
          <div [formGroup]="form">
            <novo-select [options]="control.options" [headerConfig]="control.headerConfig" [placeholder]="control.placeholder" [formControlName]="control.key" [tooltip]="control.tooltip" [tooltipPosition]="control.tooltipPosition" [tooltipSize]="control?.tooltipSize" [tooltipPreline]="control?.tooltipPreline" [removeTooltipArrow]="control?.removeTooltipArrow" [tooltipAutoPosition]="control?.tooltipAutoPosition" (onSelect)="methods.modelChange($event)"></novo-select>
          </div>
        </ng-template>

        <!--Radio-->
        <ng-template novoTemplate="radio" let-control let-form="form" let-errors="errors" let-methods="methods">
          <div [formGroup]="form" class="novo-control-input-container">
            <novo-radio [name]="control.key" [formControlName]="control.key" *ngFor="let option of control.options" [value]="option.value" [label]="option.label" [checked]="option.value === form.value[control.key] || (form.value[control.key] && option.value === form.value[control.key].id)" [tooltip]="control.tooltip" [tooltipPosition]="control.tooltipPosition" [tooltipSize]="control?.tooltipSize" [tooltipPreline]="control?.tooltipPreline" [removeTooltipArrow]="control?.removeTooltipArrow" [tooltipAutoPosition]="control?.tooltipAutoPosition" [button]="!!option.icon" [icon]="option.icon" [attr.data-automation-id]="control.key + '-' + (option?.label || option?.value)"></novo-radio>
          </div>
        </ng-template>

        <!--Time-->
        <ng-template novoTemplate="time" let-control let-form="form" let-errors="errors" let-methods="methods">
          <div [formGroup]="form" class="novo-control-input-container" [tooltip]="control?.tooltip" [tooltipPosition]="control?.tooltipPosition" [tooltipSize]="control?.tooltipSize" [tooltipPreline]="control?.tooltipPreline" [removeTooltipArrow]="control?.removeTooltipArrow" [tooltipAutoPosition]="control?.tooltipAutoPosition">
            <novo-time-picker-input [attr.id]="control.key" [name]="control.key" [formControlName]="control.key" [placeholder]="control.placeholder" [military]="control.military"></novo-time-picker-input>
          </div>
        </ng-template>

        <!--Date-->
        <ng-template novoTemplate="date" let-control let-form="form" let-errors="errors" let-methods="methods">
          <div [formGroup]="form" class="novo-control-input-container" [tooltip]="control.tooltip" [tooltipPosition]="control.tooltipPosition" [tooltipSize]="control?.tooltipSize" [tooltipPreline]="control?.tooltipPreline" [removeTooltipArrow]="control?.removeTooltipArrow" [tooltipAutoPosition]="control?.tooltipAutoPosition">
            <novo-date-picker-input [attr.id]="control.key" [name]="control.key" [formControlName]="control.key" [start]="control.startDate" [end]="control.endDate" [format]="control.dateFormat" [allowInvalidDate]="control.allowInvalidDate" [textMaskEnabled]="control.textMaskEnabled" [placeholder]="control.placeholder" [weekStart]="control.weekStart" (focusEvent)="methods.handleFocus($event)" (blurEvent)="methods.handleBlur($event)"></novo-date-picker-input>
          </div>
        </ng-template>


        <!--Date and Time-->
        <ng-template novoTemplate="date-time" let-control let-form="form" let-errors="errors" let-methods="methods">
          <div [formGroup]="form" class="novo-control-input-container" [tooltip]="control.tooltip" [tooltipPosition]="control.tooltipPosition" [tooltipSize]="control?.tooltipSize" [tooltipPreline]="control?.tooltipPreline" [removeTooltipArrow]="control?.removeTooltipArrow" [tooltipAutoPosition]="control?.tooltipAutoPosition">
            <novo-date-time-picker-input [attr.id]="control.key" [name]="control.key" [formControlName]="control.key" [start]="control.startDate" [end]="control.endDate" [placeholder]="control.placeholder" [military]="control.military" [weekStart]="control.weekStart" (focusEvent)="methods.handleFocus($event)" (blurEvent)="methods.handleBlur($event)"></novo-date-time-picker-input>
          </div>
        </ng-template>

        <!--Address-->
        <ng-template novoTemplate="address" let-control let-form="form" let-errors="errors" let-methods="methods">
          <div [formGroup]="form">
            <novo-address [formControlName]="control.key" [config]="control?.config" [readOnly]="control?.readOnly" (change)="methods.handleAddressChange($event)" (focus)="methods.handleFocus($event.event, $event.field)" (blur)="methods.handleBlur($event.event, $event.field)"  (validityChange)="methods.updateValidity()"></novo-address>
          </div>
        </ng-template>

        <!--Checkbox-->
        <ng-template novoTemplate="checkbox" let-control let-form="form" let-errors="errors" let-methods="methods">
          <div [formGroup]="form">
            <novo-checkbox [formControlName]="control?.key" [name]="control?.key" [label]="control?.checkboxLabel" [tooltip]="control?.tooltip" [tooltipPosition]="control?.tooltipPosition" [tooltipSize]="control?.tooltipSize" [tooltipPreline]="control?.tooltipPreline" [removeTooltipArrow]="control?.removeTooltipArrow" [tooltipAutoPosition]="control?.tooltipAutoPosition" [layoutOptions]="control?.layoutOptions"></novo-checkbox>
          </div>
        </ng-template>

        <!--Checklist-->
        <ng-template novoTemplate="checklist" let-control let-form="form" let-errors="errors" let-methods="methods">
          <div [formGroup]="form">
            <novo-check-list [formControlName]="control.key" [name]="control.key" [options]="control?.options" [tooltip]="control?.tooltip" [tooltipPosition]="control?.tooltipPosition" [tooltipSize]="control?.tooltipSize" [tooltipPreline]="control?.tooltipPreline" [removeTooltipArrow]="control?.removeTooltipArrow" [tooltipAutoPosition]="control?.tooltipAutoPosition" (onSelect)="methods.modelChange($event)"></novo-check-list>
          </div>
        </ng-template>

        <!--QuickNote-->
        <ng-template novoTemplate="quick-note" let-control let-form="form" let-errors="errors" let-methods="methods">
          <div [formGroup]="form">
            <novo-quick-note [formControlName]="control.key" [startupFocus]="control?.startupFocus" [placeholder]="control?.placeholder" [config]="control?.config" (change)="methods.modelChange($event)" [tooltip]="control?.tooltip" [tooltipPosition]="control?.tooltipPosition" [tooltipSize]="control?.tooltipSize" [removeTooltipArrow]="control?.removeTooltipArrow" [tooltipAutoPosition]="control?.tooltipAutoPosition" [tooltipPreline]="control?.tooltipPreline"></novo-quick-note>
          </div>
        </ng-template>
    `,
            }]
    }], function () { return [{ type: i1.NovoTemplateService }]; }, { defaultTemplates: [{
            type: ViewChildren,
            args: [NovoTemplate]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbFRlbXBsYXRlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0NvbnRyb2xUZW1wbGF0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saURBQWlELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBT3JFLDJCQUFLO0lBQUEsWUFBNkI7SUFBQSxpQkFBTTs7OztJQUFuQyxlQUE2QjtJQUE3QixxREFBNkI7Ozs7SUFLaEMsaUNBQ0E7SUFEc04sb01BQVMsOEJBQTBCLElBQUMsdUxBQVUsK0JBQTJCLElBQXJDLHFMQUErQyw4QkFBMEIsSUFBekU7SUFBMVAsaUJBQ0E7OztJQURzRSxrREFBZ0Msb0NBQUEsdUJBQUEsdURBQUEscUVBQUE7Ozs7SUFDdEcsaUNBQ0E7SUFEa08sb01BQVMsOEJBQTBCLElBQUMsdUxBQTJDLCtCQUEyQixJQUF0RSxxTEFBZ0YsOEJBQTBCLElBQTFHO0lBQXRRLGlCQUNBOzs7OztJQUR1RSxtRkFBMkM7SUFBQyxpREFBK0IsdUJBQUEsdURBQUEscUVBQUEsaUVBQUE7Ozs7SUFDbEoscUNBQ0E7SUFEME8sd01BQVcsZ0NBQTRCLElBQUMsdUxBQVUsOEJBQTBCLElBQXBDLHVMQUFnRiwrQkFBMkIsSUFBM0cscUxBQXFILDhCQUEwQixJQUEvSSwyS0FBMEssV0FBa0IsSUFBNUw7SUFBbFIsaUJBQ0E7Ozs7O0lBRCtFLG1GQUEyQztJQUFDLGlEQUErQix1QkFBQSx1REFBQSxxRUFBQSxpRUFBQTs7OztJQUMxSixxQ0FDQTtJQUQySSx3TUFBVyxnQ0FBNEIsSUFBQyx1TEFBMEMsdUNBQW1DLElBQTdFLHVMQUF3RiwrQkFBMkIsSUFBbkgscUxBQTZILDhCQUEwQixJQUF2SiwyS0FBa0wsV0FBbUIsSUFBck07SUFBbkwsaUJBQ0E7OztJQUQrRSxvRUFBc0IscUVBQUEsZ0VBQUE7OztJQUNyRyxpQ0FBbUU7SUFBQSxZQUE0QjtJQUFBLGlCQUFROzs7SUFBcEMsZUFBNEI7SUFBNUIsZ0RBQTRCOzs7SUFDL0YsaUNBQXFFO0lBQUEsaUJBQUM7SUFBQSxpQkFBUTs7O0lBTmhGLCtCQUNFO0lBQUEsd0ZBQ0E7SUFBQSx3RkFDQTtJQUFBLHdGQUNBO0lBQUEsd0ZBQ0E7SUFBQSx3RkFBbUU7SUFDbkUsd0ZBQXFFO0lBQ3ZFLGlCQUFNOzs7O0lBUEQsb0NBQWtCLDZEQUFBLDZFQUFBLHFFQUFBLDJFQUFBLG1GQUFBLHFGQUFBO0lBQ2QsZUFBOEQ7SUFBOUQsaUpBQThEO0lBQzlELGVBQStEO0lBQS9ELGtKQUErRDtJQUMvRCxlQUF1RTtJQUF2RSwwSkFBdUU7SUFDdkUsZUFBdUU7SUFBdkUsMEpBQXVFO0lBQ25ELGVBQXVDO0lBQXZDLHdGQUF1QztJQUN2QyxlQUF5QztJQUF6QywwRkFBeUM7Ozs7SUFNdEUsK0JBQ0U7SUFBQSxvQ0FBb1Y7SUFBcEssZ0xBQVMsdUNBQW1DLElBQUMsbUtBQVUsK0JBQTJCLElBQXJDLGlLQUErQyw4QkFBMEIsSUFBekU7SUFBNEcsaUJBQVc7SUFDdFYsaUJBQU07Ozs7O0lBRjBCLG9DQUFrQiw2REFBQSw2RUFBQSxxRUFBQSwyRUFBQSxtRkFBQSxxRkFBQTtJQUN0QyxlQUEyQztJQUEzQyxtRkFBMkM7SUFBQyxzQ0FBb0Isd0NBQUEsb0NBQUEsaUVBQUE7SUFBQyxxQ0FBdUI7Ozs7SUFNcEcsK0JBQ0U7SUFBQSx1Q0FBc1Q7SUFBbEgsbUxBQVMsK0JBQTJCLElBQUMsb0tBQVMsOEJBQTBCLElBQW5DO0lBQStELGlCQUFjO0lBQ3hULGlCQUFNOzs7O0lBRkQsb0NBQWtCO0lBQ1IsZUFBb0I7SUFBcEIsc0NBQW9CLG9DQUFBLDBDQUFBLGdDQUFBLG9FQUFBLDhCQUFBOzs7O0lBTW5DLCtCQUNFO0lBQUEsMkNBQWtLO0lBQTVGLHVMQUFTLCtCQUEyQixJQUFDLHdLQUFTLDhCQUEwQixJQUFuQztJQUFxQyxpQkFBa0I7SUFDcEssaUJBQU07Ozs7SUFGRCxvQ0FBa0I7SUFDSixlQUFvQjtJQUFwQixzQ0FBb0Isb0NBQUE7OztJQVFqQyxrQ0FBc0U7SUFBQSxZQUF5QjtJQUFBLGlCQUFTOzs7SUFBbEMsZUFBeUI7SUFBekIsNkNBQXlCOzs7SUFDL0Ysa0NBQThEO0lBQUEsWUFBYTtJQUFBLGlCQUFTOzs7SUFBeEMsb0NBQWlCO0lBQUMsZUFBYTtJQUFiLG9DQUFhOzs7SUFIakYsK0JBQ0U7SUFBQSxrQ0FDSTtJQUFBLDBGQUFzRTtJQUN0RSwwRkFBOEQ7SUFDbEUsaUJBQVM7SUFDWCxpQkFBTTs7OztJQUxELG9DQUFrQjtJQUNiLGVBQWtCO0lBQWxCLG9DQUFrQixvQ0FBQSxnQ0FBQSxnREFBQSxxRUFBQSwyRUFBQSxtRkFBQSxxRkFBQTtJQUNkLGVBQTJCO0lBQTNCLDhDQUEyQjtJQUMzQixlQUFtQztJQUFuQyw2Q0FBbUM7Ozs7SUFPakQsK0JBQ0U7SUFBQSwyQ0FBc29CO0lBQTFLLHVMQUFRLCtCQUEwQixJQUFDLDBLQUFTLCtCQUEwQixJQUFuQyw4S0FBK0MsaUNBQTRCLElBQTNFLDhLQUF1RixpQ0FBNEIsSUFBbkg7SUFBcUgsaUJBQWtCO0lBQ3hvQixpQkFBTTs7OztJQUZELHFDQUFrQjtJQUNKLGVBQStCO0lBQS9CLGtEQUErQix3QkFBQSwwQkFBQSx5Q0FBQSw2QkFBQSxtQ0FBQSw2Q0FBQSxpQ0FBQSxpREFBQSx1RUFBQSw2RUFBQSxxRkFBQSx1RkFBQTs7OztJQU1sRCwrQkFDRTtJQUFBLHNDQUFvYTtJQUE1ViwwTEFBWSxnQ0FBMkIsSUFBQztJQUF1UyxpQkFBYTtJQUN0YSxpQkFBTTs7OztJQUZELHFDQUFrQjtJQUNULGVBQTJCO0lBQTNCLDhDQUEyQixxQ0FBQSxpQ0FBQSxpREFBQSx1RUFBQSw2RUFBQSxxRkFBQSx1RkFBQSwwQ0FBQTs7OztJQU92Qyx1Q0FBa3BCO0lBQXZkLG9OQUFVLGdDQUEyQixJQUFFLHlNQUFZLHVDQUFrQyxJQUE5Qyx1TUFBMEQsaUNBQTRCLElBQXRGLHFNQUFpRyxnQ0FBMkIsSUFBNUgsbU1BQXNJLCtCQUEwQixJQUFoSztJQUFrYSxpQkFBYzs7O0lBQXJvQiw0Q0FBeUIscUNBQUEseUNBQUEsMkRBQUEsaUNBQUEsaURBQUEsdUVBQUEsNkVBQUEscUZBQUEsdUZBQUE7Ozs7SUFDdEMsc0NBQWtyQjtJQUE5YSxvTkFBVyx1Q0FBa0MsSUFBQyxxTUFBVyxpQ0FBNEIsSUFBdkMsbU1BQWtELGdDQUEyQixJQUE3RSxpTUFBdUYsK0JBQTBCLElBQWpIO0lBQW1YLGlCQUFhOzs7SUFBdHFCLDRDQUF5QixrQ0FBQSxxQ0FBQSx5Q0FBQSxtRUFBQSw2Q0FBQSxpQ0FBQSxpREFBQSx1RUFBQSw2RUFBQSxxRkFBQSx1RkFBQTs7OztJQUNyQywwQ0FBd3BCO0lBQWxiLDROQUFXLHVDQUFrQyxJQUFDLDZNQUFXLGlDQUE0QixJQUF2QywyTUFBa0QsZ0NBQTJCLElBQTdFLHlNQUF1RiwrQkFBMEIsSUFBakg7SUFBbVgsaUJBQWlCOzs7SUFBeG9CLDRDQUF5QixrQ0FBQSxxQ0FBQSx5Q0FBQSw2Q0FBQSxpQ0FBQSxpREFBQSx1RUFBQSw2RUFBQSxxRkFBQSx1RkFBQTs7O0lBSDNDLCtCQUNFO0lBQUEscUdBQW9vQjtJQUNwb0IsbUdBQXFxQjtJQUNycUIsMkdBQXVvQjtJQUN6b0IsaUJBQU07Ozs7SUFKRCxxQ0FBa0I7SUFDNEksZUFBeUI7SUFBekIsNkNBQXlCO0lBQ2xCLGVBQW1EO0lBQW5ELDRFQUFtRDtJQUNoRixlQUFrRDtJQUFsRCwyRUFBa0Q7Ozs7SUFNL0wsK0JBQ0U7SUFBQSx1Q0FBMGM7SUFBdkQsMkxBQVksZ0NBQTJCLElBQUM7SUFBQyxpQkFBYztJQUM1YyxpQkFBTTs7OztJQUZELHFDQUFrQjtJQUNSLGVBQTJCO0lBQTNCLDhDQUEyQiwyQ0FBQSx5Q0FBQSxxQ0FBQSxpQ0FBQSxpREFBQSx1RUFBQSw2RUFBQSxxRkFBQSx1RkFBQTs7O0lBT3hDLGlDQUFtcUI7Ozs7OztJQUF2cEIsdUNBQW9CLHFDQUFBLDRCQUFBLDRCQUFBLHVLQUFBLGlDQUFBLGlEQUFBLHVFQUFBLDZFQUFBLHFGQUFBLHVGQUFBLDhCQUFBLDBCQUFBO0lBQXFpQixxS0FBZ0Y7OztJQUR2cEIsK0JBQ0U7SUFBQSxvR0FBc3BCO0lBQ3hwQixpQkFBTTs7OztJQUZELHFDQUFrQjtJQUM0QyxlQUFzQztJQUF0Qyw4Q0FBc0M7OztJQU16RywrQkFDRTtJQUFBLDZDQUFnTTtJQUNsTSxpQkFBTTs7OztJQUZELHFDQUFrQiwrREFBQSwrRUFBQSx1RUFBQSw2RUFBQSxxRkFBQSx1RkFBQTtJQUMyQixlQUFvQjtJQUFwQix1Q0FBb0IscUNBQUEseUNBQUEsbUNBQUE7SUFBNUMsc0NBQXVCOzs7O0lBTWpELCtCQUNFO0lBQUEsa0RBQWtjO0lBQTdHLDJNQUFjLGdDQUEyQixJQUFDLDRMQUFjLCtCQUEwQixJQUF4QztJQUEwQyxpQkFBeUI7SUFDcGMsaUJBQU07Ozs7SUFGRCxxQ0FBa0IsaUNBQUEsaURBQUEsdUVBQUEsNkVBQUEscUZBQUEsdUZBQUE7SUFDMkIsZUFBb0I7SUFBcEIsdUNBQW9CLHFDQUFBLGlDQUFBLDZCQUFBLG1DQUFBLG1EQUFBLGlEQUFBLHlDQUFBLHFDQUFBO0lBQTVDLHNDQUF1Qjs7OztJQU9qRCwrQkFDRTtJQUFBLHVEQUFrWDtJQUFsSCxnTkFBYyxnQ0FBMkIsSUFBQyxpTUFBYywrQkFBMEIsSUFBeEM7SUFBMEMsaUJBQThCO0lBQ3BYLGlCQUFNOzs7O0lBRkQscUNBQWtCLGlDQUFBLGlEQUFBLHVFQUFBLDZFQUFBLHFGQUFBLHVGQUFBO0lBQ2dDLGVBQW9CO0lBQXBCLHVDQUFvQixxQ0FBQSxpQ0FBQSw2QkFBQSx5Q0FBQSxtQ0FBQSxxQ0FBQTtJQUE1QyxzQ0FBdUI7Ozs7SUFNdEQsK0JBQ0U7SUFBQSx3Q0FBcVU7SUFBN04seUxBQVUsd0NBQW1DLElBQUMsMEtBQVUsb0RBQStDLElBQXpELHdLQUFtRSxtREFBOEMsSUFBakgsNkpBQXNJLDZCQUF3QixJQUE5SjtJQUFnSyxpQkFBZTtJQUN2VSxpQkFBTTs7OztJQUZELHFDQUFrQjtJQUNQLGVBQStCO0lBQS9CLGtEQUErQiw2REFBQSxpRUFBQTs7O0lBTS9DLCtCQUNFO0lBQUEsb0NBQWthO0lBQ3BhLGlCQUFNOzs7O0lBRkQscUNBQWtCO0lBQ04sZUFBZ0M7SUFBaEMsZ0ZBQWdDLHdEQUFBLG1FQUFBLCtEQUFBLCtFQUFBLHVFQUFBLDZFQUFBLHFGQUFBLHVGQUFBLDJFQUFBOzs7O0lBTWpELCtCQUNFO0lBQUEsMkNBQWdhO0lBQTNELGdNQUFZLGdDQUEyQixJQUFDO0lBQUMsaUJBQWtCO0lBQ2xhLGlCQUFNOzs7O0lBRkQscUNBQWtCO0lBQ0osZUFBK0I7SUFBL0Isa0RBQStCLDBCQUFBLCtEQUFBLCtEQUFBLCtFQUFBLHVFQUFBLDZFQUFBLHFGQUFBLHVGQUFBOzs7O0lBTWxELCtCQUNFO0lBQUEsMkNBQW1kO0lBQTNULDRMQUFVLGdDQUEyQixJQUFDO0lBQW1RLGlCQUFrQjtJQUNyZCxpQkFBTTs7OztJQUZELHFDQUFrQjtJQUNKLGVBQStCO0lBQS9CLGtEQUErQix5RUFBQSx1RUFBQSw2REFBQSwrREFBQSwrRUFBQSx1RUFBQSxxRkFBQSx1RkFBQSw2RUFBQTs7QUFLNUQsTUFBTSxPQUFPLG9CQUFvQjtJQUcvQixZQUFvQixTQUE4QjtRQUE5QixjQUFTLEdBQVQsU0FBUyxDQUFxQjtJQUFJLENBQUM7SUFFdkQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7WUFDekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQWEsRUFBRSxFQUFFO2dCQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5RCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7d0ZBWFUsb0JBQW9CO3lEQUFwQixvQkFBb0I7dUJBQ2pCLFlBQVk7Ozs7O1FBdklwQixxRkFDRTtRQUdGLHNGQUNFO1FBV0Ysc0ZBQ0U7UUFNRixxRkFDRTtRQU1GLHFGQUNFO1FBTUYsc0ZBQ0U7UUFTRixzRkFDRTtRQU1GLHNGQUNFO1FBTUYscUZBQ0U7UUFRRixzRkFDRTtRQU1GLHdGQUNFO1FBTUYseUZBQ0U7UUFNRix5RkFDRTtRQU9GLHlGQUNFO1FBTUYsd0ZBQ0U7UUFNRix5RkFDRTtRQU1GLHlGQUNFO1FBTUYseUZBQ0U7O2tEQU1HLG9CQUFvQjtjQTFJaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FzSVA7YUFDSjs7a0JBRUUsWUFBWTttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b1RlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlL05vdm9UZW1wbGF0ZVNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b1RlbXBsYXRlIH0gZnJvbSAnLi4vY29tbW9uL25vdm8tdGVtcGxhdGUvbm92by10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNvbnRyb2wtdGVtcGxhdGVzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPCEtLS1SZWFkb25seS0tLT5cbiAgICAgICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cInJlYWQtb25seVwiIGxldC1mb3JtPVwiZm9ybVwiIGxldC1jb250cm9sPlxuICAgICAgICAgIDxkaXY+e3sgZm9ybS52YWx1ZVtjb250cm9sLmtleV0gfX08L2Rpdj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPCEtLVRleHRib3gtLS0+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJ0ZXh0Ym94XCIgbGV0LWNvbnRyb2wgbGV0LWZvcm09XCJmb3JtXCIgbGV0LWVycm9ycz1cImVycm9yc1wiIGxldC1tZXRob2RzPVwibWV0aG9kc1wiPlxuICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCIgY2xhc3M9XCJub3ZvLWNvbnRyb2wtaW5wdXQtY29udGFpbmVyIG5vdm8tY29udHJvbC1pbnB1dC13aXRoLWxhYmVsXCIgW3Rvb2x0aXBdPVwiY29udHJvbD8udG9vbHRpcFwiIFt0b29sdGlwUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcFBvc2l0aW9uXCIgIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiIFt0b29sdGlwUHJlbGluZV09XCJjb250cm9sPy50b29sdGlwUHJlbGluZVwiIFtyZW1vdmVUb29sdGlwQXJyb3ddPVwiY29udHJvbD8ucmVtb3ZlVG9vbHRpcEFycm93XCIgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiPlxuICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiY29udHJvbD8udHlwZSAhPT0gJ251bWJlcicgJiYgY29udHJvbD8udGV4dE1hc2tFbmFibGVkXCIgW3RleHRNYXNrXT1cImNvbnRyb2wubWFza09wdGlvbnNcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2wua2V5XCIgW2lkXT1cImNvbnRyb2wua2V5XCIgW3R5cGVdPVwiY29udHJvbD8udHlwZVwiIFtwbGFjZWhvbGRlcl09XCJjb250cm9sPy5wbGFjZWhvbGRlclwiIChpbnB1dCk9XCJtZXRob2RzLmVtaXRDaGFuZ2UoJGV2ZW50KVwiIChmb2N1cyk9XCJtZXRob2RzLmhhbmRsZUZvY3VzKCRldmVudClcIiAoYmx1cik9XCJtZXRob2RzLmhhbmRsZUJsdXIoJGV2ZW50KVwiIGF1dG9jb21wbGV0ZT5cbiAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cImNvbnRyb2w/LnR5cGUgIT09ICdudW1iZXInICYmICFjb250cm9sPy50ZXh0TWFza0VuYWJsZWRcIiBbY2xhc3MubWF4bGVuZ3RoLWVycm9yXT1cImVycm9ycz8ubWF4bGVuZ3RoXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiIFtpZF09XCJjb250cm9sLmtleVwiIFt0eXBlXT1cImNvbnRyb2w/LnR5cGVcIiBbcGxhY2Vob2xkZXJdPVwiY29udHJvbD8ucGxhY2Vob2xkZXJcIiAoaW5wdXQpPVwibWV0aG9kcy5lbWl0Q2hhbmdlKCRldmVudClcIiBbbWF4bGVuZ3RoXT1cImNvbnRyb2w/Lm1heGxlbmd0aFwiIChmb2N1cyk9XCJtZXRob2RzLmhhbmRsZUZvY3VzKCRldmVudClcIiAoYmx1cik9XCJtZXRob2RzLmhhbmRsZUJsdXIoJGV2ZW50KVwiIGF1dG9jb21wbGV0ZT5cbiAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cImNvbnRyb2w/LnR5cGUgPT09ICdudW1iZXInICYmIGNvbnRyb2w/LnN1YlR5cGUgIT09ICdwZXJjZW50YWdlJ1wiIFtjbGFzcy5tYXhsZW5ndGgtZXJyb3JdPVwiZXJyb3JzPy5tYXhsZW5ndGhcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2wua2V5XCIgW2lkXT1cImNvbnRyb2wua2V5XCIgW3R5cGVdPVwiY29udHJvbD8udHlwZVwiIFtwbGFjZWhvbGRlcl09XCJjb250cm9sPy5wbGFjZWhvbGRlclwiIChrZXlkb3duKT1cIm1ldGhvZHMucmVzdHJpY3RLZXlzKCRldmVudClcIiAoaW5wdXQpPVwibWV0aG9kcy5lbWl0Q2hhbmdlKCRldmVudClcIiBbbWF4bGVuZ3RoXT1cImNvbnRyb2w/Lm1heGxlbmd0aFwiIChmb2N1cyk9XCJtZXRob2RzLmhhbmRsZUZvY3VzKCRldmVudClcIiAoYmx1cik9XCJtZXRob2RzLmhhbmRsZUJsdXIoJGV2ZW50KVwiIHN0ZXA9XCJhbnlcIiAobW91c2V3aGVlbCk9XCJudW1iZXJJbnB1dC5ibHVyKClcIiAjbnVtYmVySW5wdXQ+XG4gICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCJjb250cm9sPy50eXBlID09PSAnbnVtYmVyJyAmJiBjb250cm9sPy5zdWJUeXBlID09PSAncGVyY2VudGFnZSdcIiBbdHlwZV09XCJjb250cm9sPy50eXBlXCIgW3BsYWNlaG9sZGVyXT1cImNvbnRyb2w/LnBsYWNlaG9sZGVyXCIgKGtleWRvd24pPVwibWV0aG9kcy5yZXN0cmljdEtleXMoJGV2ZW50KVwiIFt2YWx1ZV09XCJjb250cm9sPy5wZXJjZW50VmFsdWVcIiAoaW5wdXQpPVwibWV0aG9kcy5oYW5kbGVQZXJjZW50Q2hhbmdlKCRldmVudClcIiAoZm9jdXMpPVwibWV0aG9kcy5oYW5kbGVGb2N1cygkZXZlbnQpXCIgKGJsdXIpPVwibWV0aG9kcy5oYW5kbGVCbHVyKCRldmVudClcIiBzdGVwPVwiYW55XCIgKG1vdXNld2hlZWwpPVwicGVyY2VudElucHV0LmJsdXIoKVwiICNwZXJjZW50SW5wdXQ+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dC1sYWJlbFwiICpuZ0lmPVwiY29udHJvbD8uc3ViVHlwZSA9PT0gJ2N1cnJlbmN5J1wiPnt7IGNvbnRyb2wuY3VycmVuY3lGb3JtYXQgfX08L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXQtbGFiZWxcIiAqbmdJZj1cImNvbnRyb2w/LnN1YlR5cGUgPT09ICdwZXJjZW50YWdlJ1wiPiU8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICAgIDwhLS1UZXh0YXJlYS0tLT5cbiAgICAgICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cInRleHQtYXJlYVwiIGxldC1jb250cm9sIGxldC1mb3JtPVwiZm9ybVwiIGxldC1lcnJvcnM9XCJlcnJvcnNcIiBsZXQtbWV0aG9kcz1cIm1ldGhvZHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dGFyZWEtY29udGFpbmVyXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCIgW3Rvb2x0aXBdPVwiY29udHJvbD8udG9vbHRpcFwiIFt0b29sdGlwUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcFBvc2l0aW9uXCIgIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiIFt0b29sdGlwUHJlbGluZV09XCJjb250cm9sPy50b29sdGlwUHJlbGluZVwiIFtyZW1vdmVUb29sdGlwQXJyb3ddPVwiY29udHJvbD8ucmVtb3ZlVG9vbHRpcEFycm93XCIgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiPlxuICAgICAgICAgICAgPHRleHRhcmVhIFtjbGFzcy5tYXhsZW5ndGgtZXJyb3JdPVwiZXJyb3JzPy5tYXhsZW5ndGhcIiBbbmFtZV09XCJjb250cm9sLmtleVwiIFthdHRyLmlkXT1cImNvbnRyb2wua2V5XCIgW3BsYWNlaG9sZGVyXT1cImNvbnRyb2wucGxhY2Vob2xkZXJcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2wua2V5XCIgYXV0b3NpemUgKGlucHV0KT1cIm1ldGhvZHMuaGFuZGxlVGV4dEFyZWFJbnB1dCgkZXZlbnQpXCIgKGZvY3VzKT1cIm1ldGhvZHMuaGFuZGxlRm9jdXMoJGV2ZW50KVwiIChibHVyKT1cIm1ldGhvZHMuaGFuZGxlQmx1cigkZXZlbnQpXCIgW21heGxlbmd0aF09XCJjb250cm9sPy5tYXhsZW5ndGhcIj48L3RleHRhcmVhPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICAgIDwhLS1FZGl0b3ItLT5cbiAgICAgICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImVkaXRvclwiIGxldC1jb250cm9sIGxldC1mb3JtPVwiZm9ybVwiIGxldC1lcnJvcnM9XCJlcnJvcnNcIiBsZXQtbWV0aG9kcz1cIm1ldGhvZHNcIj5cbiAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICAgICAgPG5vdm8tZWRpdG9yIFtuYW1lXT1cImNvbnRyb2wua2V5XCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiIFtzdGFydHVwRm9jdXNdPVwiY29udHJvbC5zdGFydHVwRm9jdXNcIiBbbWluaW1hbF09XCJjb250cm9sLm1pbmltYWxcIiBbZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybF09XCJjb250cm9sLmZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmxcIiAoZm9jdXMpPVwibWV0aG9kcy5oYW5kbGVGb2N1cygkZXZlbnQpXCIgKGJsdXIpPVwibWV0aG9kcy5oYW5kbGVCbHVyKCRldmVudClcIiBbY29uZmlnXT1cImNvbnRyb2wuY29uZmlnXCI+PC9ub3ZvLWVkaXRvcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgICA8IS0tQWNlRWRpdG9yLS0+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJhY2UtZWRpdG9yXCIgbGV0LWNvbnRyb2wgbGV0LWZvcm09XCJmb3JtXCIgbGV0LWVycm9ycz1cImVycm9yc1wiIGxldC1tZXRob2RzPVwibWV0aG9kc1wiPlxuICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICAgICAgICA8bm92by1hY2UtZWRpdG9yIFtuYW1lXT1cImNvbnRyb2wua2V5XCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiIChmb2N1cyk9XCJtZXRob2RzLmhhbmRsZUZvY3VzKCRldmVudClcIiAoYmx1cik9XCJtZXRob2RzLmhhbmRsZUJsdXIoJGV2ZW50KVwiPjwvbm92by1hY2UtZWRpdG9yPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICAgIDwhLS1IVE1MNSBTZWxlY3QtLT5cbiAgICAgICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cIm5hdGl2ZS1zZWxlY3RcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgICAgICAgIDxzZWxlY3QgW2lkXT1cImNvbnRyb2wua2V5XCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiIFt0b29sdGlwXT1cImNvbnRyb2wudG9vbHRpcFwiIFt0b29sdGlwUG9zaXRpb25dPVwiY29udHJvbC50b29sdGlwUG9zaXRpb25cIiAgW3Rvb2x0aXBTaXplXT1cImNvbnRyb2w/LnRvb2x0aXBTaXplXCIgW3Rvb2x0aXBQcmVsaW5lXT1cImNvbnRyb2w/LnRvb2x0aXBQcmVsaW5lXCIgW3JlbW92ZVRvb2x0aXBBcnJvd109XCJjb250cm9sPy5yZW1vdmVUb29sdGlwQXJyb3dcIiBbdG9vbHRpcEF1dG9Qb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwQXV0b1Bvc2l0aW9uXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdJZj1cImNvbnRyb2wucGxhY2Vob2xkZXJcIiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkIGhpZGRlbj57eyBjb250cm9sLnBsYWNlaG9sZGVyIH19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGNvbnRyb2wub3B0aW9uc1wiIFt2YWx1ZV09XCJvcHQua2V5XCI+e3tvcHQudmFsdWV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgPCEtLUZpbGUtLT5cbiAgICAgICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImZpbGVcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgICAgICAgIDxub3ZvLWZpbGUtaW5wdXQgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiIFtpZF09XCJjb250cm9sLmtleVwiIFtuYW1lXT1cImNvbnRyb2wua2V5XCIgW3BsYWNlaG9sZGVyXT1cImNvbnRyb2wucGxhY2Vob2xkZXJcIiBbdmFsdWVdPVwiY29udHJvbC52YWx1ZVwiIFttdWx0aXBsZV09XCJjb250cm9sLm11bHRpcGxlXCIgW2xheW91dE9wdGlvbnNdPVwiY29udHJvbC5sYXlvdXRPcHRpb25zXCIgW3Rvb2x0aXBdPVwiY29udHJvbC50b29sdGlwXCIgW3Rvb2x0aXBQb3NpdGlvbl09XCJjb250cm9sLnRvb2x0aXBQb3NpdGlvblwiICBbdG9vbHRpcFNpemVdPVwiY29udHJvbD8udG9vbHRpcFNpemVcIiBbdG9vbHRpcFByZWxpbmVdPVwiY29udHJvbD8udG9vbHRpcFByZWxpbmVcIiBbcmVtb3ZlVG9vbHRpcEFycm93XT1cImNvbnRyb2w/LnJlbW92ZVRvb2x0aXBBcnJvd1wiIFt0b29sdGlwQXV0b1Bvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBBdXRvUG9zaXRpb25cIiAoZWRpdCk9XCJtZXRob2RzLmhhbmRsZUVkaXQoJGV2ZW50KVwiIChzYXZlKT1cIm1ldGhvZHMuaGFuZGxlU2F2ZSgkZXZlbnQpXCIgKGRlbGV0ZSk9XCJtZXRob2RzLmhhbmRsZURlbGV0ZSgkZXZlbnQpXCIgKHVwbG9hZCk9XCJtZXRob2RzLmhhbmRsZVVwbG9hZCgkZXZlbnQpXCI+PC9ub3ZvLWZpbGUtaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgPCEtLVRpbGVzLS0+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJ0aWxlc1wiIGxldC1jb250cm9sIGxldC1mb3JtPVwiZm9ybVwiIGxldC1lcnJvcnM9XCJlcnJvcnNcIiBsZXQtbWV0aG9kcz1cIm1ldGhvZHNcIj5cbiAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICAgICAgPG5vdm8tdGlsZXMgW29wdGlvbnNdPVwiY29udHJvbC5vcHRpb25zXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiIChvbkNoYW5nZSk9XCJtZXRob2RzLm1vZGVsQ2hhbmdlKCRldmVudClcIiBbdG9vbHRpcF09XCJjb250cm9sLnRvb2x0aXBcIiBbdG9vbHRpcFBvc2l0aW9uXT1cImNvbnRyb2wudG9vbHRpcFBvc2l0aW9uXCIgIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiIFt0b29sdGlwUHJlbGluZV09XCJjb250cm9sPy50b29sdGlwUHJlbGluZVwiIFtyZW1vdmVUb29sdGlwQXJyb3ddPVwiY29udHJvbD8ucmVtb3ZlVG9vbHRpcEFycm93XCIgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiIFtjb250cm9sRGlzYWJsZWRdPVwiY29udHJvbC5kaXNhYmxlZFwiPjwvbm92by10aWxlcz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgICA8IS0tUGlja2VyLS0+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJwaWNrZXJcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIiBjbGFzcz1cIm5vdm8tY29udHJvbC1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxub3ZvLXBpY2tlciBbY29uZmlnXT1cImNvbnRyb2wuY29uZmlnXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiIFtwbGFjZWhvbGRlcl09XCJjb250cm9sLnBsYWNlaG9sZGVyXCIgW3BhcmVudFNjcm9sbFNlbGVjdG9yXT1cImNvbnRyb2wucGFyZW50U2Nyb2xsU2VsZWN0b3JcIiAqbmdJZj1cIiFjb250cm9sLm11bHRpcGxlXCIgKHNlbGVjdCk9XCJtZXRob2RzLm1vZGVsQ2hhbmdlKCRldmVudCk7XCIgKGNoYW5nZWQpPVwibWV0aG9kcy5tb2RlbENoYW5nZVdpdGhSYXcoJGV2ZW50KVwiICh0eXBpbmcpPVwibWV0aG9kcy5oYW5kbGVUeXBpbmcoJGV2ZW50KVwiIChmb2N1cyk9XCJtZXRob2RzLmhhbmRsZUZvY3VzKCRldmVudClcIiAoYmx1cik9XCJtZXRob2RzLmhhbmRsZUJsdXIoJGV2ZW50KVwiIFt0b29sdGlwXT1cImNvbnRyb2wudG9vbHRpcFwiIFt0b29sdGlwUG9zaXRpb25dPVwiY29udHJvbC50b29sdGlwUG9zaXRpb25cIiBbdG9vbHRpcFNpemVdPVwiY29udHJvbD8udG9vbHRpcFNpemVcIiBbdG9vbHRpcFByZWxpbmVdPVwiY29udHJvbD8udG9vbHRpcFByZWxpbmVcIiBbcmVtb3ZlVG9vbHRpcEFycm93XT1cImNvbnRyb2w/LnJlbW92ZVRvb2x0aXBBcnJvd1wiIFt0b29sdGlwQXV0b1Bvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBBdXRvUG9zaXRpb25cIj48L25vdm8tcGlja2VyPlxuICAgICAgICAgICAgPG5vdm8tY2hpcHMgW3NvdXJjZV09XCJjb250cm9sLmNvbmZpZ1wiIFt0eXBlXT1cImNvbnRyb2wuY29uZmlnLnR5cGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2wua2V5XCIgW3BsYWNlaG9sZGVyXT1cImNvbnRyb2wucGxhY2Vob2xkZXJcIiBbbWF4bGVuZ3RoXT1cImNvbnRyb2w/Lm1heGxlbmd0aFwiICpuZ0lmPVwiY29udHJvbC5tdWx0aXBsZSAmJiAhY29udHJvbC5jb25maWcuY29sdW1uc1wiIFtjbG9zZU9uU2VsZWN0XT1cImNvbnRyb2wuY2xvc2VPblNlbGVjdFwiIChjaGFuZ2VkKT1cIm1ldGhvZHMubW9kZWxDaGFuZ2VXaXRoUmF3KCRldmVudClcIiAodHlwaW5nKT1cIm1ldGhvZHMuaGFuZGxlVHlwaW5nKCRldmVudClcIiAoZm9jdXMpPVwibWV0aG9kcy5oYW5kbGVGb2N1cygkZXZlbnQpXCIgKGJsdXIpPVwibWV0aG9kcy5oYW5kbGVCbHVyKCRldmVudClcIiBbdG9vbHRpcF09XCJjb250cm9sLnRvb2x0aXBcIiBbdG9vbHRpcFBvc2l0aW9uXT1cImNvbnRyb2wudG9vbHRpcFBvc2l0aW9uXCIgW3Rvb2x0aXBTaXplXT1cImNvbnRyb2w/LnRvb2x0aXBTaXplXCIgW3Rvb2x0aXBQcmVsaW5lXT1cImNvbnRyb2w/LnRvb2x0aXBQcmVsaW5lXCIgW3JlbW92ZVRvb2x0aXBBcnJvd109XCJjb250cm9sPy5yZW1vdmVUb29sdGlwQXJyb3dcIiBbdG9vbHRpcEF1dG9Qb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwQXV0b1Bvc2l0aW9uXCI+PC9ub3ZvLWNoaXBzPlxuICAgICAgICAgICAgPG5vdm8tcm93LWNoaXBzIFtzb3VyY2VdPVwiY29udHJvbC5jb25maWdcIiBbdHlwZV09XCJjb250cm9sLmNvbmZpZy50eXBlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiIFtwbGFjZWhvbGRlcl09XCJjb250cm9sLnBsYWNlaG9sZGVyXCIgKm5nSWY9XCJjb250cm9sLm11bHRpcGxlICYmIGNvbnRyb2wuY29uZmlnLmNvbHVtbnNcIiBbY2xvc2VPblNlbGVjdF09XCJjb250cm9sLmNsb3NlT25TZWxlY3RcIiAoY2hhbmdlZCk9XCJtZXRob2RzLm1vZGVsQ2hhbmdlV2l0aFJhdygkZXZlbnQpXCIgKHR5cGluZyk9XCJtZXRob2RzLmhhbmRsZVR5cGluZygkZXZlbnQpXCIgKGZvY3VzKT1cIm1ldGhvZHMuaGFuZGxlRm9jdXMoJGV2ZW50KVwiIChibHVyKT1cIm1ldGhvZHMuaGFuZGxlQmx1cigkZXZlbnQpXCIgW3Rvb2x0aXBdPVwiY29udHJvbC50b29sdGlwXCIgW3Rvb2x0aXBQb3NpdGlvbl09XCJjb250cm9sLnRvb2x0aXBQb3NpdGlvblwiIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiIFt0b29sdGlwUHJlbGluZV09XCJjb250cm9sPy50b29sdGlwUHJlbGluZVwiIFtyZW1vdmVUb29sdGlwQXJyb3ddPVwiY29udHJvbD8ucmVtb3ZlVG9vbHRpcEFycm93XCIgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiPjwvbm92by1yb3ctY2hpcHM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgPCEtLU5vdm8gU2VsZWN0LS0+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJzZWxlY3RcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgICAgICAgIDxub3ZvLXNlbGVjdCBbb3B0aW9uc109XCJjb250cm9sLm9wdGlvbnNcIiBbaGVhZGVyQ29uZmlnXT1cImNvbnRyb2wuaGVhZGVyQ29uZmlnXCIgW3BsYWNlaG9sZGVyXT1cImNvbnRyb2wucGxhY2Vob2xkZXJcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2wua2V5XCIgW3Rvb2x0aXBdPVwiY29udHJvbC50b29sdGlwXCIgW3Rvb2x0aXBQb3NpdGlvbl09XCJjb250cm9sLnRvb2x0aXBQb3NpdGlvblwiIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiIFt0b29sdGlwUHJlbGluZV09XCJjb250cm9sPy50b29sdGlwUHJlbGluZVwiIFtyZW1vdmVUb29sdGlwQXJyb3ddPVwiY29udHJvbD8ucmVtb3ZlVG9vbHRpcEFycm93XCIgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiIChvblNlbGVjdCk9XCJtZXRob2RzLm1vZGVsQ2hhbmdlKCRldmVudClcIj48L25vdm8tc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICAgIDwhLS1SYWRpby0tPlxuICAgICAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwicmFkaW9cIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIiBjbGFzcz1cIm5vdm8tY29udHJvbC1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxub3ZvLXJhZGlvIFtuYW1lXT1cImNvbnRyb2wua2V5XCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29udHJvbC5vcHRpb25zXCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiIFtsYWJlbF09XCJvcHRpb24ubGFiZWxcIiBbY2hlY2tlZF09XCJvcHRpb24udmFsdWUgPT09IGZvcm0udmFsdWVbY29udHJvbC5rZXldIHx8IChmb3JtLnZhbHVlW2NvbnRyb2wua2V5XSAmJiBvcHRpb24udmFsdWUgPT09IGZvcm0udmFsdWVbY29udHJvbC5rZXldLmlkKVwiIFt0b29sdGlwXT1cImNvbnRyb2wudG9vbHRpcFwiIFt0b29sdGlwUG9zaXRpb25dPVwiY29udHJvbC50b29sdGlwUG9zaXRpb25cIiBbdG9vbHRpcFNpemVdPVwiY29udHJvbD8udG9vbHRpcFNpemVcIiBbdG9vbHRpcFByZWxpbmVdPVwiY29udHJvbD8udG9vbHRpcFByZWxpbmVcIiBbcmVtb3ZlVG9vbHRpcEFycm93XT1cImNvbnRyb2w/LnJlbW92ZVRvb2x0aXBBcnJvd1wiIFt0b29sdGlwQXV0b1Bvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBBdXRvUG9zaXRpb25cIiBbYnV0dG9uXT1cIiEhb3B0aW9uLmljb25cIiBbaWNvbl09XCJvcHRpb24uaWNvblwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjb250cm9sLmtleSArICctJyArIChvcHRpb24/LmxhYmVsIHx8IG9wdGlvbj8udmFsdWUpXCI+PC9ub3ZvLXJhZGlvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICAgIDwhLS1UaW1lLS0+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJ0aW1lXCIgbGV0LWNvbnRyb2wgbGV0LWZvcm09XCJmb3JtXCIgbGV0LWVycm9ycz1cImVycm9yc1wiIGxldC1tZXRob2RzPVwibWV0aG9kc1wiPlxuICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCIgY2xhc3M9XCJub3ZvLWNvbnRyb2wtaW5wdXQtY29udGFpbmVyXCIgW3Rvb2x0aXBdPVwiY29udHJvbD8udG9vbHRpcFwiIFt0b29sdGlwUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcFBvc2l0aW9uXCIgW3Rvb2x0aXBTaXplXT1cImNvbnRyb2w/LnRvb2x0aXBTaXplXCIgW3Rvb2x0aXBQcmVsaW5lXT1cImNvbnRyb2w/LnRvb2x0aXBQcmVsaW5lXCIgW3JlbW92ZVRvb2x0aXBBcnJvd109XCJjb250cm9sPy5yZW1vdmVUb29sdGlwQXJyb3dcIiBbdG9vbHRpcEF1dG9Qb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwQXV0b1Bvc2l0aW9uXCI+XG4gICAgICAgICAgICA8bm92by10aW1lLXBpY2tlci1pbnB1dCBbYXR0ci5pZF09XCJjb250cm9sLmtleVwiIFtuYW1lXT1cImNvbnRyb2wua2V5XCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiIFtwbGFjZWhvbGRlcl09XCJjb250cm9sLnBsYWNlaG9sZGVyXCIgW21pbGl0YXJ5XT1cImNvbnRyb2wubWlsaXRhcnlcIj48L25vdm8tdGltZS1waWNrZXItaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgPCEtLURhdGUtLT5cbiAgICAgICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImRhdGVcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIiBjbGFzcz1cIm5vdm8tY29udHJvbC1pbnB1dC1jb250YWluZXJcIiBbdG9vbHRpcF09XCJjb250cm9sLnRvb2x0aXBcIiBbdG9vbHRpcFBvc2l0aW9uXT1cImNvbnRyb2wudG9vbHRpcFBvc2l0aW9uXCIgW3Rvb2x0aXBTaXplXT1cImNvbnRyb2w/LnRvb2x0aXBTaXplXCIgW3Rvb2x0aXBQcmVsaW5lXT1cImNvbnRyb2w/LnRvb2x0aXBQcmVsaW5lXCIgW3JlbW92ZVRvb2x0aXBBcnJvd109XCJjb250cm9sPy5yZW1vdmVUb29sdGlwQXJyb3dcIiBbdG9vbHRpcEF1dG9Qb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwQXV0b1Bvc2l0aW9uXCI+XG4gICAgICAgICAgICA8bm92by1kYXRlLXBpY2tlci1pbnB1dCBbYXR0ci5pZF09XCJjb250cm9sLmtleVwiIFtuYW1lXT1cImNvbnRyb2wua2V5XCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiIFtzdGFydF09XCJjb250cm9sLnN0YXJ0RGF0ZVwiIFtlbmRdPVwiY29udHJvbC5lbmREYXRlXCIgW2Zvcm1hdF09XCJjb250cm9sLmRhdGVGb3JtYXRcIiBbYWxsb3dJbnZhbGlkRGF0ZV09XCJjb250cm9sLmFsbG93SW52YWxpZERhdGVcIiBbdGV4dE1hc2tFbmFibGVkXT1cImNvbnRyb2wudGV4dE1hc2tFbmFibGVkXCIgW3BsYWNlaG9sZGVyXT1cImNvbnRyb2wucGxhY2Vob2xkZXJcIiBbd2Vla1N0YXJ0XT1cImNvbnRyb2wud2Vla1N0YXJ0XCIgKGZvY3VzRXZlbnQpPVwibWV0aG9kcy5oYW5kbGVGb2N1cygkZXZlbnQpXCIgKGJsdXJFdmVudCk9XCJtZXRob2RzLmhhbmRsZUJsdXIoJGV2ZW50KVwiPjwvbm92by1kYXRlLXBpY2tlci1pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuXG4gICAgICAgIDwhLS1EYXRlIGFuZCBUaW1lLS0+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJkYXRlLXRpbWVcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIiBjbGFzcz1cIm5vdm8tY29udHJvbC1pbnB1dC1jb250YWluZXJcIiBbdG9vbHRpcF09XCJjb250cm9sLnRvb2x0aXBcIiBbdG9vbHRpcFBvc2l0aW9uXT1cImNvbnRyb2wudG9vbHRpcFBvc2l0aW9uXCIgW3Rvb2x0aXBTaXplXT1cImNvbnRyb2w/LnRvb2x0aXBTaXplXCIgW3Rvb2x0aXBQcmVsaW5lXT1cImNvbnRyb2w/LnRvb2x0aXBQcmVsaW5lXCIgW3JlbW92ZVRvb2x0aXBBcnJvd109XCJjb250cm9sPy5yZW1vdmVUb29sdGlwQXJyb3dcIiBbdG9vbHRpcEF1dG9Qb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwQXV0b1Bvc2l0aW9uXCI+XG4gICAgICAgICAgICA8bm92by1kYXRlLXRpbWUtcGlja2VyLWlucHV0IFthdHRyLmlkXT1cImNvbnRyb2wua2V5XCIgW25hbWVdPVwiY29udHJvbC5rZXlcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2wua2V5XCIgW3N0YXJ0XT1cImNvbnRyb2wuc3RhcnREYXRlXCIgW2VuZF09XCJjb250cm9sLmVuZERhdGVcIiBbcGxhY2Vob2xkZXJdPVwiY29udHJvbC5wbGFjZWhvbGRlclwiIFttaWxpdGFyeV09XCJjb250cm9sLm1pbGl0YXJ5XCIgW3dlZWtTdGFydF09XCJjb250cm9sLndlZWtTdGFydFwiIChmb2N1c0V2ZW50KT1cIm1ldGhvZHMuaGFuZGxlRm9jdXMoJGV2ZW50KVwiIChibHVyRXZlbnQpPVwibWV0aG9kcy5oYW5kbGVCbHVyKCRldmVudClcIj48L25vdm8tZGF0ZS10aW1lLXBpY2tlci1pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgICA8IS0tQWRkcmVzcy0tPlxuICAgICAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiYWRkcmVzc1wiIGxldC1jb250cm9sIGxldC1mb3JtPVwiZm9ybVwiIGxldC1lcnJvcnM9XCJlcnJvcnNcIiBsZXQtbWV0aG9kcz1cIm1ldGhvZHNcIj5cbiAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICAgICAgPG5vdm8tYWRkcmVzcyBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2wua2V5XCIgW2NvbmZpZ109XCJjb250cm9sPy5jb25maWdcIiBbcmVhZE9ubHldPVwiY29udHJvbD8ucmVhZE9ubHlcIiAoY2hhbmdlKT1cIm1ldGhvZHMuaGFuZGxlQWRkcmVzc0NoYW5nZSgkZXZlbnQpXCIgKGZvY3VzKT1cIm1ldGhvZHMuaGFuZGxlRm9jdXMoJGV2ZW50LmV2ZW50LCAkZXZlbnQuZmllbGQpXCIgKGJsdXIpPVwibWV0aG9kcy5oYW5kbGVCbHVyKCRldmVudC5ldmVudCwgJGV2ZW50LmZpZWxkKVwiICAodmFsaWRpdHlDaGFuZ2UpPVwibWV0aG9kcy51cGRhdGVWYWxpZGl0eSgpXCI+PC9ub3ZvLWFkZHJlc3M+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgPCEtLUNoZWNrYm94LS0+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJjaGVja2JveFwiIGxldC1jb250cm9sIGxldC1mb3JtPVwiZm9ybVwiIGxldC1lcnJvcnM9XCJlcnJvcnNcIiBsZXQtbWV0aG9kcz1cIm1ldGhvZHNcIj5cbiAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICAgICAgPG5vdm8tY2hlY2tib3ggW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sPy5rZXlcIiBbbmFtZV09XCJjb250cm9sPy5rZXlcIiBbbGFiZWxdPVwiY29udHJvbD8uY2hlY2tib3hMYWJlbFwiIFt0b29sdGlwXT1cImNvbnRyb2w/LnRvb2x0aXBcIiBbdG9vbHRpcFBvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBQb3NpdGlvblwiIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiIFt0b29sdGlwUHJlbGluZV09XCJjb250cm9sPy50b29sdGlwUHJlbGluZVwiIFtyZW1vdmVUb29sdGlwQXJyb3ddPVwiY29udHJvbD8ucmVtb3ZlVG9vbHRpcEFycm93XCIgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiIFtsYXlvdXRPcHRpb25zXT1cImNvbnRyb2w/LmxheW91dE9wdGlvbnNcIj48L25vdm8tY2hlY2tib3g+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgPCEtLUNoZWNrbGlzdC0tPlxuICAgICAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiY2hlY2tsaXN0XCIgbGV0LWNvbnRyb2wgbGV0LWZvcm09XCJmb3JtXCIgbGV0LWVycm9ycz1cImVycm9yc1wiIGxldC1tZXRob2RzPVwibWV0aG9kc1wiPlxuICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICAgICAgICA8bm92by1jaGVjay1saXN0IFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbC5rZXlcIiBbbmFtZV09XCJjb250cm9sLmtleVwiIFtvcHRpb25zXT1cImNvbnRyb2w/Lm9wdGlvbnNcIiBbdG9vbHRpcF09XCJjb250cm9sPy50b29sdGlwXCIgW3Rvb2x0aXBQb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwUG9zaXRpb25cIiBbdG9vbHRpcFNpemVdPVwiY29udHJvbD8udG9vbHRpcFNpemVcIiBbdG9vbHRpcFByZWxpbmVdPVwiY29udHJvbD8udG9vbHRpcFByZWxpbmVcIiBbcmVtb3ZlVG9vbHRpcEFycm93XT1cImNvbnRyb2w/LnJlbW92ZVRvb2x0aXBBcnJvd1wiIFt0b29sdGlwQXV0b1Bvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBBdXRvUG9zaXRpb25cIiAob25TZWxlY3QpPVwibWV0aG9kcy5tb2RlbENoYW5nZSgkZXZlbnQpXCI+PC9ub3ZvLWNoZWNrLWxpc3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgPCEtLVF1aWNrTm90ZS0tPlxuICAgICAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwicXVpY2stbm90ZVwiIGxldC1jb250cm9sIGxldC1mb3JtPVwiZm9ybVwiIGxldC1lcnJvcnM9XCJlcnJvcnNcIiBsZXQtbWV0aG9kcz1cIm1ldGhvZHNcIj5cbiAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICAgICAgPG5vdm8tcXVpY2stbm90ZSBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2wua2V5XCIgW3N0YXJ0dXBGb2N1c109XCJjb250cm9sPy5zdGFydHVwRm9jdXNcIiBbcGxhY2Vob2xkZXJdPVwiY29udHJvbD8ucGxhY2Vob2xkZXJcIiBbY29uZmlnXT1cImNvbnRyb2w/LmNvbmZpZ1wiIChjaGFuZ2UpPVwibWV0aG9kcy5tb2RlbENoYW5nZSgkZXZlbnQpXCIgW3Rvb2x0aXBdPVwiY29udHJvbD8udG9vbHRpcFwiIFt0b29sdGlwUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcFBvc2l0aW9uXCIgW3Rvb2x0aXBTaXplXT1cImNvbnRyb2w/LnRvb2x0aXBTaXplXCIgW3JlbW92ZVRvb2x0aXBBcnJvd109XCJjb250cm9sPy5yZW1vdmVUb29sdGlwQXJyb3dcIiBbdG9vbHRpcEF1dG9Qb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwQXV0b1Bvc2l0aW9uXCIgW3Rvb2x0aXBQcmVsaW5lXT1cImNvbnRyb2w/LnRvb2x0aXBQcmVsaW5lXCI+PC9ub3ZvLXF1aWNrLW5vdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NvbnRyb2xUZW1wbGF0ZXMgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZHJlbihOb3ZvVGVtcGxhdGUpXG4gIGRlZmF1bHRUZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOb3ZvVGVtcGxhdGU+O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRlbXBsYXRlczogTm92b1RlbXBsYXRlU2VydmljZSkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlZmF1bHRUZW1wbGF0ZXMgJiYgdGhpcy5kZWZhdWx0VGVtcGxhdGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kZWZhdWx0VGVtcGxhdGVzLmZvckVhY2goKHRlbXBsYXRlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuYWRkRGVmYXVsdCh0ZW1wbGF0ZS5uYW1lLCB0ZW1wbGF0ZS50ZW1wbGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==