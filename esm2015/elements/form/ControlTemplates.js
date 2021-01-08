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
    const form_r20 = ctx.form;
    const control_r21 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(form_r20.value[control_r21.key]);
} }
function NovoControlTemplates_ng_template_1_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 26);
    i0.ɵɵlistener("input", function NovoControlTemplates_ng_template_1_input_1_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r33); const methods_r25 = i0.ɵɵnextContext().methods; return methods_r25.emitChange($event); })("focus", function NovoControlTemplates_ng_template_1_input_1_Template_input_focus_0_listener($event) { i0.ɵɵrestoreView(_r33); const methods_r25 = i0.ɵɵnextContext().methods; return methods_r25.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_1_input_1_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r33); const methods_r25 = i0.ɵɵnextContext().methods; return methods_r25.handleBlur($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r22 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("textMask", control_r22.maskOptions)("formControlName", control_r22.key)("id", control_r22.key)("type", control_r22 == null ? null : control_r22.type)("placeholder", control_r22 == null ? null : control_r22.placeholder);
} }
function NovoControlTemplates_ng_template_1_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 27);
    i0.ɵɵlistener("input", function NovoControlTemplates_ng_template_1_input_2_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r41); const methods_r25 = i0.ɵɵnextContext().methods; return methods_r25.emitChange($event); })("focus", function NovoControlTemplates_ng_template_1_input_2_Template_input_focus_0_listener($event) { i0.ɵɵrestoreView(_r41); const methods_r25 = i0.ɵɵnextContext().methods; return methods_r25.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_1_input_2_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r41); const methods_r25 = i0.ɵɵnextContext().methods; return methods_r25.handleBlur($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r47 = i0.ɵɵnextContext();
    const errors_r24 = ctx_r47.errors;
    const control_r22 = ctx_r47.$implicit;
    i0.ɵɵclassProp("maxlength-error", errors_r24 == null ? null : errors_r24.maxlength);
    i0.ɵɵproperty("formControlName", control_r22.key)("id", control_r22.key)("type", control_r22 == null ? null : control_r22.type)("placeholder", control_r22 == null ? null : control_r22.placeholder)("maxlength", control_r22 == null ? null : control_r22.maxlength);
} }
function NovoControlTemplates_ng_template_1_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 28, 29);
    i0.ɵɵlistener("keydown", function NovoControlTemplates_ng_template_1_input_3_Template_input_keydown_0_listener($event) { i0.ɵɵrestoreView(_r50); const methods_r25 = i0.ɵɵnextContext().methods; return methods_r25.restrictKeys($event); })("input", function NovoControlTemplates_ng_template_1_input_3_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r50); const methods_r25 = i0.ɵɵnextContext().methods; return methods_r25.emitChange($event); })("focus", function NovoControlTemplates_ng_template_1_input_3_Template_input_focus_0_listener($event) { i0.ɵɵrestoreView(_r50); const methods_r25 = i0.ɵɵnextContext().methods; return methods_r25.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_1_input_3_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r50); const methods_r25 = i0.ɵɵnextContext().methods; return methods_r25.handleBlur($event); })("mousewheel", function NovoControlTemplates_ng_template_1_input_3_Template_input_mousewheel_0_listener() { i0.ɵɵrestoreView(_r50); const _r48 = i0.ɵɵreference(1); return _r48.blur(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r59 = i0.ɵɵnextContext();
    const errors_r24 = ctx_r59.errors;
    const control_r22 = ctx_r59.$implicit;
    i0.ɵɵclassProp("maxlength-error", errors_r24 == null ? null : errors_r24.maxlength);
    i0.ɵɵproperty("formControlName", control_r22.key)("id", control_r22.key)("type", control_r22 == null ? null : control_r22.type)("placeholder", control_r22 == null ? null : control_r22.placeholder)("maxlength", control_r22 == null ? null : control_r22.maxlength);
} }
function NovoControlTemplates_ng_template_1_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 30, 31);
    i0.ɵɵlistener("keydown", function NovoControlTemplates_ng_template_1_input_4_Template_input_keydown_0_listener($event) { i0.ɵɵrestoreView(_r62); const methods_r25 = i0.ɵɵnextContext().methods; return methods_r25.restrictKeys($event); })("input", function NovoControlTemplates_ng_template_1_input_4_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r62); const methods_r25 = i0.ɵɵnextContext().methods; return methods_r25.handlePercentChange($event); })("focus", function NovoControlTemplates_ng_template_1_input_4_Template_input_focus_0_listener($event) { i0.ɵɵrestoreView(_r62); const methods_r25 = i0.ɵɵnextContext().methods; return methods_r25.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_1_input_4_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r62); const methods_r25 = i0.ɵɵnextContext().methods; return methods_r25.handleBlur($event); })("mousewheel", function NovoControlTemplates_ng_template_1_input_4_Template_input_mousewheel_0_listener() { i0.ɵɵrestoreView(_r62); const _r60 = i0.ɵɵreference(1); return _r60.blur(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r22 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("type", control_r22 == null ? null : control_r22.type)("placeholder", control_r22 == null ? null : control_r22.placeholder)("value", control_r22 == null ? null : control_r22.percentValue);
} }
function NovoControlTemplates_ng_template_1_label_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r22 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(control_r22.currencyFormat);
} }
function NovoControlTemplates_ng_template_1_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 32);
    i0.ɵɵtext(1, "%");
    i0.ɵɵelementEnd();
} }
function NovoControlTemplates_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, NovoControlTemplates_ng_template_1_input_1_Template, 1, 5, "input", 21);
    i0.ɵɵtemplate(2, NovoControlTemplates_ng_template_1_input_2_Template, 1, 7, "input", 22);
    i0.ɵɵtemplate(3, NovoControlTemplates_ng_template_1_input_3_Template, 2, 7, "input", 23);
    i0.ɵɵtemplate(4, NovoControlTemplates_ng_template_1_input_4_Template, 2, 3, "input", 24);
    i0.ɵɵtemplate(5, NovoControlTemplates_ng_template_1_label_5_Template, 2, 1, "label", 25);
    i0.ɵɵtemplate(6, NovoControlTemplates_ng_template_1_label_6_Template, 2, 0, "label", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r22 = ctx.$implicit;
    const form_r23 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r23)("tooltip", control_r22 == null ? null : control_r22.tooltip)("tooltipPosition", control_r22 == null ? null : control_r22.tooltipPosition)("tooltipSize", control_r22 == null ? null : control_r22.tooltipSize)("tooltipPreline", control_r22 == null ? null : control_r22.tooltipPreline)("removeTooltipArrow", control_r22 == null ? null : control_r22.removeTooltipArrow)("tooltipAutoPosition", control_r22 == null ? null : control_r22.tooltipAutoPosition);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (control_r22 == null ? null : control_r22.type) !== "number" && (control_r22 == null ? null : control_r22.textMaskEnabled));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (control_r22 == null ? null : control_r22.type) !== "number" && !(control_r22 == null ? null : control_r22.textMaskEnabled));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (control_r22 == null ? null : control_r22.type) === "number" && (control_r22 == null ? null : control_r22.subType) !== "percentage");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (control_r22 == null ? null : control_r22.type) === "number" && (control_r22 == null ? null : control_r22.subType) === "percentage");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (control_r22 == null ? null : control_r22.subType) === "currency");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (control_r22 == null ? null : control_r22.subType) === "percentage");
} }
function NovoControlTemplates_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r78 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelementStart(1, "textarea", 34);
    i0.ɵɵlistener("input", function NovoControlTemplates_ng_template_2_Template_textarea_input_1_listener($event) { i0.ɵɵrestoreView(_r78); const methods_r76 = ctx.methods; return methods_r76.handleTextAreaInput($event); })("focus", function NovoControlTemplates_ng_template_2_Template_textarea_focus_1_listener($event) { i0.ɵɵrestoreView(_r78); const methods_r76 = ctx.methods; return methods_r76.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_2_Template_textarea_blur_1_listener($event) { i0.ɵɵrestoreView(_r78); const methods_r76 = ctx.methods; return methods_r76.handleBlur($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r73 = ctx.$implicit;
    const form_r74 = ctx.form;
    const errors_r75 = ctx.errors;
    i0.ɵɵproperty("formGroup", form_r74)("tooltip", control_r73 == null ? null : control_r73.tooltip)("tooltipPosition", control_r73 == null ? null : control_r73.tooltipPosition)("tooltipSize", control_r73 == null ? null : control_r73.tooltipSize)("tooltipPreline", control_r73 == null ? null : control_r73.tooltipPreline)("removeTooltipArrow", control_r73 == null ? null : control_r73.removeTooltipArrow)("tooltipAutoPosition", control_r73 == null ? null : control_r73.tooltipAutoPosition);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("maxlength-error", errors_r75 == null ? null : errors_r75.maxlength);
    i0.ɵɵproperty("name", control_r73.key)("placeholder", control_r73.placeholder)("formControlName", control_r73.key)("maxlength", control_r73 == null ? null : control_r73.maxlength);
    i0.ɵɵattribute("id", control_r73.key);
} }
function NovoControlTemplates_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r86 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelementStart(1, "novo-editor", 36);
    i0.ɵɵlistener("focus", function NovoControlTemplates_ng_template_3_Template_novo_editor_focus_1_listener($event) { i0.ɵɵrestoreView(_r86); const methods_r84 = ctx.methods; return methods_r84.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_3_Template_novo_editor_blur_1_listener($event) { i0.ɵɵrestoreView(_r86); const methods_r84 = ctx.methods; return methods_r84.handleBlur($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r81 = ctx.$implicit;
    const form_r82 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r82);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", control_r81.key)("formControlName", control_r81.key)("startupFocus", control_r81.startupFocus)("minimal", control_r81.minimal)("fileBrowserImageUploadUrl", control_r81.fileBrowserImageUploadUrl)("config", control_r81.config);
} }
function NovoControlTemplates_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r93 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelementStart(1, "novo-ace-editor", 37);
    i0.ɵɵlistener("focus", function NovoControlTemplates_ng_template_4_Template_novo_ace_editor_focus_1_listener($event) { i0.ɵɵrestoreView(_r93); const methods_r91 = ctx.methods; return methods_r91.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_4_Template_novo_ace_editor_blur_1_listener($event) { i0.ɵɵrestoreView(_r93); const methods_r91 = ctx.methods; return methods_r91.handleBlur($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r88 = ctx.$implicit;
    const form_r89 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r89);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", control_r88.key)("formControlName", control_r88.key);
} }
function NovoControlTemplates_ng_template_5_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 41);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r95 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(control_r95.placeholder);
} }
function NovoControlTemplates_ng_template_5_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 42);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r102 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r102.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(opt_r102.value);
} }
function NovoControlTemplates_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelementStart(1, "select", 38);
    i0.ɵɵtemplate(2, NovoControlTemplates_ng_template_5_option_2_Template, 2, 1, "option", 39);
    i0.ɵɵtemplate(3, NovoControlTemplates_ng_template_5_option_3_Template, 2, 2, "option", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r95 = ctx.$implicit;
    const form_r96 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r96);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", control_r95.key)("formControlName", control_r95.key)("tooltip", control_r95.tooltip)("tooltipPosition", control_r95.tooltipPosition)("tooltipSize", control_r95 == null ? null : control_r95.tooltipSize)("tooltipPreline", control_r95 == null ? null : control_r95.tooltipPreline)("removeTooltipArrow", control_r95 == null ? null : control_r95.removeTooltipArrow)("tooltipAutoPosition", control_r95 == null ? null : control_r95.tooltipAutoPosition);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", control_r95.placeholder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", control_r95.options);
} }
function NovoControlTemplates_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r108 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelementStart(1, "novo-file-input", 43);
    i0.ɵɵlistener("edit", function NovoControlTemplates_ng_template_6_Template_novo_file_input_edit_1_listener($event) { i0.ɵɵrestoreView(_r108); const methods_r106 = ctx.methods; return methods_r106.handleEdit($event); })("save", function NovoControlTemplates_ng_template_6_Template_novo_file_input_save_1_listener($event) { i0.ɵɵrestoreView(_r108); const methods_r106 = ctx.methods; return methods_r106.handleSave($event); })("delete", function NovoControlTemplates_ng_template_6_Template_novo_file_input_delete_1_listener($event) { i0.ɵɵrestoreView(_r108); const methods_r106 = ctx.methods; return methods_r106.handleDelete($event); })("upload", function NovoControlTemplates_ng_template_6_Template_novo_file_input_upload_1_listener($event) { i0.ɵɵrestoreView(_r108); const methods_r106 = ctx.methods; return methods_r106.handleUpload($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r103 = ctx.$implicit;
    const form_r104 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r104);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", control_r103.key)("id", control_r103.key)("name", control_r103.key)("placeholder", control_r103.placeholder)("value", control_r103.value)("multiple", control_r103.multiple)("layoutOptions", control_r103.layoutOptions)("tooltip", control_r103.tooltip)("tooltipPosition", control_r103.tooltipPosition)("tooltipSize", control_r103 == null ? null : control_r103.tooltipSize)("tooltipPreline", control_r103 == null ? null : control_r103.tooltipPreline)("removeTooltipArrow", control_r103 == null ? null : control_r103.removeTooltipArrow)("tooltipAutoPosition", control_r103 == null ? null : control_r103.tooltipAutoPosition);
} }
function NovoControlTemplates_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r117 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelementStart(1, "novo-tiles", 44);
    i0.ɵɵlistener("onChange", function NovoControlTemplates_ng_template_7_Template_novo_tiles_onChange_1_listener($event) { i0.ɵɵrestoreView(_r117); const methods_r115 = ctx.methods; return methods_r115.modelChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r112 = ctx.$implicit;
    const form_r113 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r113);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("options", control_r112.options)("formControlName", control_r112.key)("tooltip", control_r112.tooltip)("tooltipPosition", control_r112.tooltipPosition)("tooltipSize", control_r112 == null ? null : control_r112.tooltipSize)("tooltipPreline", control_r112 == null ? null : control_r112.tooltipPreline)("removeTooltipArrow", control_r112 == null ? null : control_r112.removeTooltipArrow)("tooltipAutoPosition", control_r112 == null ? null : control_r112.tooltipAutoPosition)("controlDisabled", control_r112.disabled);
} }
function NovoControlTemplates_ng_template_8_novo_picker_1_Template(rf, ctx) { if (rf & 1) {
    const _r126 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-picker", 49);
    i0.ɵɵlistener("select", function NovoControlTemplates_ng_template_8_novo_picker_1_Template_novo_picker_select_0_listener($event) { i0.ɵɵrestoreView(_r126); const methods_r121 = i0.ɵɵnextContext().methods; return methods_r121.modelChange($event); })("changed", function NovoControlTemplates_ng_template_8_novo_picker_1_Template_novo_picker_changed_0_listener($event) { i0.ɵɵrestoreView(_r126); const methods_r121 = i0.ɵɵnextContext().methods; return methods_r121.modelChangeWithRaw($event); })("typing", function NovoControlTemplates_ng_template_8_novo_picker_1_Template_novo_picker_typing_0_listener($event) { i0.ɵɵrestoreView(_r126); const methods_r121 = i0.ɵɵnextContext().methods; return methods_r121.handleTyping($event); })("focus", function NovoControlTemplates_ng_template_8_novo_picker_1_Template_novo_picker_focus_0_listener($event) { i0.ɵɵrestoreView(_r126); const methods_r121 = i0.ɵɵnextContext().methods; return methods_r121.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_8_novo_picker_1_Template_novo_picker_blur_0_listener($event) { i0.ɵɵrestoreView(_r126); const methods_r121 = i0.ɵɵnextContext().methods; return methods_r121.handleBlur($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r118 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("config", control_r118.config)("formControlName", control_r118.key)("placeholder", control_r118.placeholder)("parentScrollSelector", control_r118.parentScrollSelector)("tooltip", control_r118.tooltip)("tooltipPosition", control_r118.tooltipPosition)("tooltipSize", control_r118 == null ? null : control_r118.tooltipSize)("tooltipPreline", control_r118 == null ? null : control_r118.tooltipPreline)("removeTooltipArrow", control_r118 == null ? null : control_r118.removeTooltipArrow)("tooltipAutoPosition", control_r118 == null ? null : control_r118.tooltipAutoPosition);
} }
function NovoControlTemplates_ng_template_8_novo_chips_2_Template(rf, ctx) { if (rf & 1) {
    const _r138 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-chips", 50);
    i0.ɵɵlistener("changed", function NovoControlTemplates_ng_template_8_novo_chips_2_Template_novo_chips_changed_0_listener($event) { i0.ɵɵrestoreView(_r138); const methods_r121 = i0.ɵɵnextContext().methods; return methods_r121.modelChangeWithRaw($event); })("typing", function NovoControlTemplates_ng_template_8_novo_chips_2_Template_novo_chips_typing_0_listener($event) { i0.ɵɵrestoreView(_r138); const methods_r121 = i0.ɵɵnextContext().methods; return methods_r121.handleTyping($event); })("focus", function NovoControlTemplates_ng_template_8_novo_chips_2_Template_novo_chips_focus_0_listener($event) { i0.ɵɵrestoreView(_r138); const methods_r121 = i0.ɵɵnextContext().methods; return methods_r121.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_8_novo_chips_2_Template_novo_chips_blur_0_listener($event) { i0.ɵɵrestoreView(_r138); const methods_r121 = i0.ɵɵnextContext().methods; return methods_r121.handleBlur($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r118 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("source", control_r118.config)("type", control_r118.config.type)("formControlName", control_r118.key)("placeholder", control_r118.placeholder)("maxlength", control_r118 == null ? null : control_r118.maxlength)("closeOnSelect", control_r118.closeOnSelect)("tooltip", control_r118.tooltip)("tooltipPosition", control_r118.tooltipPosition)("tooltipSize", control_r118 == null ? null : control_r118.tooltipSize)("tooltipPreline", control_r118 == null ? null : control_r118.tooltipPreline)("removeTooltipArrow", control_r118 == null ? null : control_r118.removeTooltipArrow)("tooltipAutoPosition", control_r118 == null ? null : control_r118.tooltipAutoPosition);
} }
function NovoControlTemplates_ng_template_8_novo_row_chips_3_Template(rf, ctx) { if (rf & 1) {
    const _r148 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-row-chips", 51);
    i0.ɵɵlistener("changed", function NovoControlTemplates_ng_template_8_novo_row_chips_3_Template_novo_row_chips_changed_0_listener($event) { i0.ɵɵrestoreView(_r148); const methods_r121 = i0.ɵɵnextContext().methods; return methods_r121.modelChangeWithRaw($event); })("typing", function NovoControlTemplates_ng_template_8_novo_row_chips_3_Template_novo_row_chips_typing_0_listener($event) { i0.ɵɵrestoreView(_r148); const methods_r121 = i0.ɵɵnextContext().methods; return methods_r121.handleTyping($event); })("focus", function NovoControlTemplates_ng_template_8_novo_row_chips_3_Template_novo_row_chips_focus_0_listener($event) { i0.ɵɵrestoreView(_r148); const methods_r121 = i0.ɵɵnextContext().methods; return methods_r121.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_8_novo_row_chips_3_Template_novo_row_chips_blur_0_listener($event) { i0.ɵɵrestoreView(_r148); const methods_r121 = i0.ɵɵnextContext().methods; return methods_r121.handleBlur($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r118 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("source", control_r118.config)("type", control_r118.config.type)("formControlName", control_r118.key)("placeholder", control_r118.placeholder)("closeOnSelect", control_r118.closeOnSelect)("tooltip", control_r118.tooltip)("tooltipPosition", control_r118.tooltipPosition)("tooltipSize", control_r118 == null ? null : control_r118.tooltipSize)("tooltipPreline", control_r118 == null ? null : control_r118.tooltipPreline)("removeTooltipArrow", control_r118 == null ? null : control_r118.removeTooltipArrow)("tooltipAutoPosition", control_r118 == null ? null : control_r118.tooltipAutoPosition);
} }
function NovoControlTemplates_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵtemplate(1, NovoControlTemplates_ng_template_8_novo_picker_1_Template, 1, 10, "novo-picker", 46);
    i0.ɵɵtemplate(2, NovoControlTemplates_ng_template_8_novo_chips_2_Template, 1, 12, "novo-chips", 47);
    i0.ɵɵtemplate(3, NovoControlTemplates_ng_template_8_novo_row_chips_3_Template, 1, 11, "novo-row-chips", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r118 = ctx.$implicit;
    const form_r119 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r119);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !control_r118.multiple);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", control_r118.multiple && !control_r118.config.columns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", control_r118.multiple && control_r118.config.columns);
} }
function NovoControlTemplates_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r162 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelementStart(1, "novo-select", 52);
    i0.ɵɵlistener("onSelect", function NovoControlTemplates_ng_template_9_Template_novo_select_onSelect_1_listener($event) { i0.ɵɵrestoreView(_r162); const methods_r160 = ctx.methods; return methods_r160.modelChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r157 = ctx.$implicit;
    const form_r158 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r158);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("options", control_r157.options)("headerConfig", control_r157.headerConfig)("placeholder", control_r157.placeholder)("formControlName", control_r157.key)("tooltip", control_r157.tooltip)("tooltipPosition", control_r157.tooltipPosition)("tooltipSize", control_r157 == null ? null : control_r157.tooltipSize)("tooltipPreline", control_r157 == null ? null : control_r157.tooltipPreline)("removeTooltipArrow", control_r157 == null ? null : control_r157.removeTooltipArrow)("tooltipAutoPosition", control_r157 == null ? null : control_r157.tooltipAutoPosition);
} }
function NovoControlTemplates_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r168 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelementStart(1, "novo-select", 53);
    i0.ɵɵlistener("onSelect", function NovoControlTemplates_ng_template_10_Template_novo_select_onSelect_1_listener($event) { i0.ɵɵrestoreView(_r168); const methods_r166 = ctx.methods; return methods_r166.modelChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r163 = ctx.$implicit;
    const form_r164 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r164);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("options", control_r163.options)("headerConfig", control_r163.headerConfig)("placeholder", control_r163.placeholder)("formControlName", control_r163.key)("tooltip", control_r163.tooltip)("tooltipPosition", control_r163.tooltipPosition)("tooltipSize", control_r163 == null ? null : control_r163.tooltipSize)("tooltipPreline", control_r163 == null ? null : control_r163.tooltipPreline)("removeTooltipArrow", control_r163 == null ? null : control_r163.removeTooltipArrow)("tooltipAutoPosition", control_r163 == null ? null : control_r163.tooltipAutoPosition);
} }
function NovoControlTemplates_ng_template_11_novo_radio_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-radio", 55);
} if (rf & 2) {
    const option_r174 = ctx.$implicit;
    const ctx_r175 = i0.ɵɵnextContext();
    const control_r169 = ctx_r175.$implicit;
    const form_r170 = ctx_r175.form;
    i0.ɵɵproperty("name", control_r169.key)("formControlName", control_r169.key)("value", option_r174.value)("label", option_r174.label)("checked", option_r174.value === form_r170.value[control_r169.key] || form_r170.value[control_r169.key] && option_r174.value === form_r170.value[control_r169.key].id)("tooltip", control_r169.tooltip)("tooltipPosition", control_r169.tooltipPosition)("tooltipSize", control_r169 == null ? null : control_r169.tooltipSize)("tooltipPreline", control_r169 == null ? null : control_r169.tooltipPreline)("removeTooltipArrow", control_r169 == null ? null : control_r169.removeTooltipArrow)("tooltipAutoPosition", control_r169 == null ? null : control_r169.tooltipAutoPosition)("button", !!option_r174.icon)("icon", option_r174.icon);
    i0.ɵɵattribute("data-automation-id", control_r169.key + "-" + ((option_r174 == null ? null : option_r174.label) || (option_r174 == null ? null : option_r174.value)));
} }
function NovoControlTemplates_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵtemplate(1, NovoControlTemplates_ng_template_11_novo_radio_1_Template, 1, 14, "novo-radio", 54);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r169 = ctx.$implicit;
    const form_r170 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r170);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", control_r169.options);
} }
function NovoControlTemplates_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵelement(1, "novo-time-picker-input", 57);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r176 = ctx.$implicit;
    const form_r177 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r177)("tooltip", control_r176 == null ? null : control_r176.tooltip)("tooltipPosition", control_r176 == null ? null : control_r176.tooltipPosition)("tooltipSize", control_r176 == null ? null : control_r176.tooltipSize)("tooltipPreline", control_r176 == null ? null : control_r176.tooltipPreline)("removeTooltipArrow", control_r176 == null ? null : control_r176.removeTooltipArrow)("tooltipAutoPosition", control_r176 == null ? null : control_r176.tooltipAutoPosition);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", control_r176.key)("formControlName", control_r176.key)("placeholder", control_r176.placeholder)("military", control_r176.military);
    i0.ɵɵattribute("id", control_r176.key);
} }
function NovoControlTemplates_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r185 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "input", 58);
    i0.ɵɵlistener("input", function NovoControlTemplates_ng_template_13_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r185); const methods_r183 = ctx.methods; return methods_r183.emitChange($event); })("focus", function NovoControlTemplates_ng_template_13_Template_input_focus_1_listener($event) { i0.ɵɵrestoreView(_r185); const methods_r183 = ctx.methods; return methods_r183.handleFocus($event); })("blur", function NovoControlTemplates_ng_template_13_Template_input_blur_1_listener($event) { i0.ɵɵrestoreView(_r185); const methods_r183 = ctx.methods; return methods_r183.handleBlur($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r180 = ctx.$implicit;
    const form_r181 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r181)("tooltip", control_r180 == null ? null : control_r180.tooltip)("tooltipPosition", control_r180 == null ? null : control_r180.tooltipPosition)("tooltipSize", control_r180 == null ? null : control_r180.tooltipSize)("tooltipPreline", control_r180 == null ? null : control_r180.tooltipPreline)("removeTooltipArrow", control_r180 == null ? null : control_r180.removeTooltipArrow)("tooltipAutoPosition", control_r180 == null ? null : control_r180.tooltipAutoPosition);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", control_r180.key)("id", control_r180.key)("type", control_r180.type)("placeholder", control_r180 == null ? null : control_r180.placeholder);
} }
function NovoControlTemplates_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r193 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵelementStart(1, "novo-date-picker-input", 59);
    i0.ɵɵlistener("focusEvent", function NovoControlTemplates_ng_template_14_Template_novo_date_picker_input_focusEvent_1_listener($event) { i0.ɵɵrestoreView(_r193); const methods_r191 = ctx.methods; return methods_r191.handleFocus($event); })("blurEvent", function NovoControlTemplates_ng_template_14_Template_novo_date_picker_input_blurEvent_1_listener($event) { i0.ɵɵrestoreView(_r193); const methods_r191 = ctx.methods; return methods_r191.handleBlur($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r188 = ctx.$implicit;
    const form_r189 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r189)("tooltip", control_r188.tooltip)("tooltipPosition", control_r188.tooltipPosition)("tooltipSize", control_r188 == null ? null : control_r188.tooltipSize)("tooltipPreline", control_r188 == null ? null : control_r188.tooltipPreline)("removeTooltipArrow", control_r188 == null ? null : control_r188.removeTooltipArrow)("tooltipAutoPosition", control_r188 == null ? null : control_r188.tooltipAutoPosition);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", control_r188.key)("formControlName", control_r188.key)("start", control_r188.startDate)("end", control_r188.endDate)("format", control_r188.dateFormat)("allowInvalidDate", control_r188.allowInvalidDate)("textMaskEnabled", control_r188.textMaskEnabled)("placeholder", control_r188.placeholder)("weekStart", control_r188.weekStart);
    i0.ɵɵattribute("id", control_r188.key);
} }
function NovoControlTemplates_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r200 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵelementStart(1, "novo-date-time-picker-input", 60);
    i0.ɵɵlistener("focusEvent", function NovoControlTemplates_ng_template_15_Template_novo_date_time_picker_input_focusEvent_1_listener($event) { i0.ɵɵrestoreView(_r200); const methods_r198 = ctx.methods; return methods_r198.handleFocus($event); })("blurEvent", function NovoControlTemplates_ng_template_15_Template_novo_date_time_picker_input_blurEvent_1_listener($event) { i0.ɵɵrestoreView(_r200); const methods_r198 = ctx.methods; return methods_r198.handleBlur($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r195 = ctx.$implicit;
    const form_r196 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r196)("tooltip", control_r195.tooltip)("tooltipPosition", control_r195.tooltipPosition)("tooltipSize", control_r195 == null ? null : control_r195.tooltipSize)("tooltipPreline", control_r195 == null ? null : control_r195.tooltipPreline)("removeTooltipArrow", control_r195 == null ? null : control_r195.removeTooltipArrow)("tooltipAutoPosition", control_r195 == null ? null : control_r195.tooltipAutoPosition);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", control_r195.key)("formControlName", control_r195.key)("start", control_r195.startDate)("end", control_r195.endDate)("placeholder", control_r195.placeholder)("military", control_r195.military)("weekStart", control_r195.weekStart);
    i0.ɵɵattribute("id", control_r195.key);
} }
function NovoControlTemplates_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r207 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelementStart(1, "novo-address", 61);
    i0.ɵɵlistener("change", function NovoControlTemplates_ng_template_16_Template_novo_address_change_1_listener($event) { i0.ɵɵrestoreView(_r207); const methods_r205 = ctx.methods; return methods_r205.handleAddressChange($event); })("focus", function NovoControlTemplates_ng_template_16_Template_novo_address_focus_1_listener($event) { i0.ɵɵrestoreView(_r207); const methods_r205 = ctx.methods; return methods_r205.handleFocus($event.event, $event.field); })("blur", function NovoControlTemplates_ng_template_16_Template_novo_address_blur_1_listener($event) { i0.ɵɵrestoreView(_r207); const methods_r205 = ctx.methods; return methods_r205.handleBlur($event.event, $event.field); })("validityChange", function NovoControlTemplates_ng_template_16_Template_novo_address_validityChange_1_listener() { const methods_r205 = ctx.methods; return methods_r205.updateValidity(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r202 = ctx.$implicit;
    const form_r203 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r203);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", control_r202.key)("config", control_r202 == null ? null : control_r202.config)("readOnly", control_r202 == null ? null : control_r202.readOnly);
} }
function NovoControlTemplates_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelement(1, "novo-checkbox", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r211 = ctx.$implicit;
    const form_r212 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r212);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", control_r211 == null ? null : control_r211.key)("name", control_r211 == null ? null : control_r211.key)("label", control_r211 == null ? null : control_r211.checkboxLabel)("tooltip", control_r211 == null ? null : control_r211.tooltip)("tooltipPosition", control_r211 == null ? null : control_r211.tooltipPosition)("tooltipSize", control_r211 == null ? null : control_r211.tooltipSize)("tooltipPreline", control_r211 == null ? null : control_r211.tooltipPreline)("removeTooltipArrow", control_r211 == null ? null : control_r211.removeTooltipArrow)("tooltipAutoPosition", control_r211 == null ? null : control_r211.tooltipAutoPosition)("layoutOptions", control_r211 == null ? null : control_r211.layoutOptions);
} }
function NovoControlTemplates_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r220 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelementStart(1, "novo-check-list", 63);
    i0.ɵɵlistener("onSelect", function NovoControlTemplates_ng_template_18_Template_novo_check_list_onSelect_1_listener($event) { i0.ɵɵrestoreView(_r220); const methods_r218 = ctx.methods; return methods_r218.modelChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r215 = ctx.$implicit;
    const form_r216 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r216);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", control_r215.key)("name", control_r215.key)("options", control_r215 == null ? null : control_r215.options)("tooltip", control_r215 == null ? null : control_r215.tooltip)("tooltipPosition", control_r215 == null ? null : control_r215.tooltipPosition)("tooltipSize", control_r215 == null ? null : control_r215.tooltipSize)("tooltipPreline", control_r215 == null ? null : control_r215.tooltipPreline)("removeTooltipArrow", control_r215 == null ? null : control_r215.removeTooltipArrow)("tooltipAutoPosition", control_r215 == null ? null : control_r215.tooltipAutoPosition);
} }
function NovoControlTemplates_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r226 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelementStart(1, "novo-quick-note", 64);
    i0.ɵɵlistener("change", function NovoControlTemplates_ng_template_19_Template_novo_quick_note_change_1_listener($event) { i0.ɵɵrestoreView(_r226); const methods_r224 = ctx.methods; return methods_r224.modelChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r221 = ctx.$implicit;
    const form_r222 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r222);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", control_r221.key)("startupFocus", control_r221 == null ? null : control_r221.startupFocus)("placeholder", control_r221 == null ? null : control_r221.placeholder)("config", control_r221 == null ? null : control_r221.config)("tooltip", control_r221 == null ? null : control_r221.tooltip)("tooltipPosition", control_r221 == null ? null : control_r221.tooltipPosition)("tooltipSize", control_r221 == null ? null : control_r221.tooltipSize)("removeTooltipArrow", control_r221 == null ? null : control_r221.removeTooltipArrow)("tooltipAutoPosition", control_r221 == null ? null : control_r221.tooltipAutoPosition)("tooltipPreline", control_r221 == null ? null : control_r221.tooltipPreline);
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
    } }, decls: 20, vars: 0, consts: [["novoTemplate", "read-only"], ["novoTemplate", "textbox"], ["novoTemplate", "text-area"], ["novoTemplate", "editor"], ["novoTemplate", "ace-editor"], ["novoTemplate", "native-select"], ["novoTemplate", "file"], ["novoTemplate", "tiles"], ["novoTemplate", "picker"], ["novoTemplate", "select"], ["novoTemplate", "timezone"], ["novoTemplate", "radio"], ["novoTemplate", "time"], ["novoTemplate", "native-input"], ["novoTemplate", "date"], ["novoTemplate", "date-time"], ["novoTemplate", "address"], ["novoTemplate", "checkbox"], ["novoTemplate", "checklist"], ["novoTemplate", "quick-note"], [1, "novo-control-input-container", "novo-control-input-with-label", 3, "formGroup", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition"], ["autocomplete", "", 3, "textMask", "formControlName", "id", "type", "placeholder", "input", "focus", "blur", 4, "ngIf"], ["autocomplete", "", 3, "maxlength-error", "formControlName", "id", "type", "placeholder", "maxlength", "input", "focus", "blur", 4, "ngIf"], ["step", "any", 3, "maxlength-error", "formControlName", "id", "type", "placeholder", "maxlength", "keydown", "input", "focus", "blur", "mousewheel", 4, "ngIf"], ["step", "any", 3, "type", "placeholder", "value", "keydown", "input", "focus", "blur", "mousewheel", 4, "ngIf"], ["class", "input-label", 4, "ngIf"], ["autocomplete", "", 3, "textMask", "formControlName", "id", "type", "placeholder", "input", "focus", "blur"], ["autocomplete", "", 3, "formControlName", "id", "type", "placeholder", "maxlength", "input", "focus", "blur"], ["step", "any", 3, "formControlName", "id", "type", "placeholder", "maxlength", "keydown", "input", "focus", "blur", "mousewheel"], ["numberInput", ""], ["step", "any", 3, "type", "placeholder", "value", "keydown", "input", "focus", "blur", "mousewheel"], ["percentInput", ""], [1, "input-label"], [1, "textarea-container", 3, "formGroup", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition"], ["autosize", "", 3, "name", "placeholder", "formControlName", "maxlength", "input", "focus", "blur"], [3, "formGroup"], [3, "name", "formControlName", "startupFocus", "minimal", "fileBrowserImageUploadUrl", "config", "focus", "blur"], [3, "name", "formControlName", "focus", "blur"], [3, "id", "formControlName", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition"], ["value", "", "disabled", "", "selected", "", "hidden", "", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "", "disabled", "", "selected", "", "hidden", ""], [3, "value"], [3, "formControlName", "id", "name", "placeholder", "value", "multiple", "layoutOptions", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "edit", "save", "delete", "upload"], [3, "options", "formControlName", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "controlDisabled", "onChange"], [1, "novo-control-input-container", 3, "formGroup"], [3, "config", "formControlName", "placeholder", "parentScrollSelector", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "select", "changed", "typing", "focus", "blur", 4, "ngIf"], [3, "source", "type", "formControlName", "placeholder", "maxlength", "closeOnSelect", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "changed", "typing", "focus", "blur", 4, "ngIf"], [3, "source", "type", "formControlName", "placeholder", "closeOnSelect", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "changed", "typing", "focus", "blur", 4, "ngIf"], [3, "config", "formControlName", "placeholder", "parentScrollSelector", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "select", "changed", "typing", "focus", "blur"], [3, "source", "type", "formControlName", "placeholder", "maxlength", "closeOnSelect", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "changed", "typing", "focus", "blur"], [3, "source", "type", "formControlName", "placeholder", "closeOnSelect", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "changed", "typing", "focus", "blur"], [3, "options", "headerConfig", "placeholder", "formControlName", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "onSelect"], ["position", "bottom", 3, "options", "headerConfig", "placeholder", "formControlName", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "onSelect"], [3, "name", "formControlName", "value", "label", "checked", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "button", "icon", 4, "ngFor", "ngForOf"], [3, "name", "formControlName", "value", "label", "checked", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "button", "icon"], [1, "novo-control-input-container", 3, "formGroup", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition"], [3, "name", "formControlName", "placeholder", "military"], [3, "formControlName", "id", "type", "placeholder", "input", "focus", "blur"], [3, "name", "formControlName", "start", "end", "format", "allowInvalidDate", "textMaskEnabled", "placeholder", "weekStart", "focusEvent", "blurEvent"], [3, "name", "formControlName", "start", "end", "placeholder", "military", "weekStart", "focusEvent", "blurEvent"], [3, "formControlName", "config", "readOnly", "change", "focus", "blur", "validityChange"], [3, "formControlName", "name", "label", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "layoutOptions"], [3, "formControlName", "name", "options", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "onSelect"], [3, "formControlName", "startupFocus", "placeholder", "config", "tooltip", "tooltipPosition", "tooltipSize", "removeTooltipArrow", "tooltipAutoPosition", "tooltipPreline", "change"]], template: function NovoControlTemplates_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵtemplate(10, NovoControlTemplates_ng_template_10_Template, 2, 11, "ng-template", 10);
        i0.ɵɵtemplate(11, NovoControlTemplates_ng_template_11_Template, 2, 2, "ng-template", 11);
        i0.ɵɵtemplate(12, NovoControlTemplates_ng_template_12_Template, 2, 12, "ng-template", 12);
        i0.ɵɵtemplate(13, NovoControlTemplates_ng_template_13_Template, 2, 11, "ng-template", 13);
        i0.ɵɵtemplate(14, NovoControlTemplates_ng_template_14_Template, 2, 17, "ng-template", 14);
        i0.ɵɵtemplate(15, NovoControlTemplates_ng_template_15_Template, 2, 15, "ng-template", 15);
        i0.ɵɵtemplate(16, NovoControlTemplates_ng_template_16_Template, 2, 4, "ng-template", 16);
        i0.ɵɵtemplate(17, NovoControlTemplates_ng_template_17_Template, 2, 11, "ng-template", 17);
        i0.ɵɵtemplate(18, NovoControlTemplates_ng_template_18_Template, 2, 10, "ng-template", 18);
        i0.ɵɵtemplate(19, NovoControlTemplates_ng_template_19_Template, 2, 11, "ng-template", 19);
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
      <div
        [formGroup]="form"
        class="novo-control-input-container novo-control-input-with-label"
        [tooltip]="control?.tooltip"
        [tooltipPosition]="control?.tooltipPosition"
        [tooltipSize]="control?.tooltipSize"
        [tooltipPreline]="control?.tooltipPreline"
        [removeTooltipArrow]="control?.removeTooltipArrow"
        [tooltipAutoPosition]="control?.tooltipAutoPosition"
      >
        <input
          *ngIf="control?.type !== 'number' && control?.textMaskEnabled"
          [textMask]="control.maskOptions"
          [formControlName]="control.key"
          [id]="control.key"
          [type]="control?.type"
          [placeholder]="control?.placeholder"
          (input)="methods.emitChange($event)"
          (focus)="methods.handleFocus($event)"
          (blur)="methods.handleBlur($event)"
          autocomplete
        />
        <input
          *ngIf="control?.type !== 'number' && !control?.textMaskEnabled"
          [class.maxlength-error]="errors?.maxlength"
          [formControlName]="control.key"
          [id]="control.key"
          [type]="control?.type"
          [placeholder]="control?.placeholder"
          (input)="methods.emitChange($event)"
          [maxlength]="control?.maxlength"
          (focus)="methods.handleFocus($event)"
          (blur)="methods.handleBlur($event)"
          autocomplete
        />
        <input
          *ngIf="control?.type === 'number' && control?.subType !== 'percentage'"
          [class.maxlength-error]="errors?.maxlength"
          [formControlName]="control.key"
          [id]="control.key"
          [type]="control?.type"
          [placeholder]="control?.placeholder"
          (keydown)="methods.restrictKeys($event)"
          (input)="methods.emitChange($event)"
          [maxlength]="control?.maxlength"
          (focus)="methods.handleFocus($event)"
          (blur)="methods.handleBlur($event)"
          step="any"
          (mousewheel)="numberInput.blur()"
          #numberInput
        />
        <input
          *ngIf="control?.type === 'number' && control?.subType === 'percentage'"
          [type]="control?.type"
          [placeholder]="control?.placeholder"
          (keydown)="methods.restrictKeys($event)"
          [value]="control?.percentValue"
          (input)="methods.handlePercentChange($event)"
          (focus)="methods.handleFocus($event)"
          (blur)="methods.handleBlur($event)"
          step="any"
          (mousewheel)="percentInput.blur()"
          #percentInput
        />
        <label class="input-label" *ngIf="control?.subType === 'currency'">{{ control.currencyFormat }}</label>
        <label class="input-label" *ngIf="control?.subType === 'percentage'">%</label>
      </div>
    </ng-template>

    <!--Textarea--->
    <ng-template novoTemplate="text-area" let-control let-form="form" let-errors="errors" let-methods="methods">
      <div
        class="textarea-container"
        [formGroup]="form"
        [tooltip]="control?.tooltip"
        [tooltipPosition]="control?.tooltipPosition"
        [tooltipSize]="control?.tooltipSize"
        [tooltipPreline]="control?.tooltipPreline"
        [removeTooltipArrow]="control?.removeTooltipArrow"
        [tooltipAutoPosition]="control?.tooltipAutoPosition"
      >
        <textarea
          [class.maxlength-error]="errors?.maxlength"
          [name]="control.key"
          [attr.id]="control.key"
          [placeholder]="control.placeholder"
          [formControlName]="control.key"
          autosize
          (input)="methods.handleTextAreaInput($event)"
          (focus)="methods.handleFocus($event)"
          (blur)="methods.handleBlur($event)"
          [maxlength]="control?.maxlength"
        ></textarea>
      </div>
    </ng-template>

    <!--Editor-->
    <ng-template novoTemplate="editor" let-control let-form="form" let-errors="errors" let-methods="methods">
      <div [formGroup]="form">
        <novo-editor
          [name]="control.key"
          [formControlName]="control.key"
          [startupFocus]="control.startupFocus"
          [minimal]="control.minimal"
          [fileBrowserImageUploadUrl]="control.fileBrowserImageUploadUrl"
          (focus)="methods.handleFocus($event)"
          (blur)="methods.handleBlur($event)"
          [config]="control.config"
        ></novo-editor>
      </div>
    </ng-template>

    <!--AceEditor-->
    <ng-template novoTemplate="ace-editor" let-control let-form="form" let-errors="errors" let-methods="methods">
      <div [formGroup]="form">
        <novo-ace-editor
          [name]="control.key"
          [formControlName]="control.key"
          (focus)="methods.handleFocus($event)"
          (blur)="methods.handleBlur($event)"
        ></novo-ace-editor>
      </div>
    </ng-template>

    <!--HTML5 Select-->
    <ng-template novoTemplate="native-select" let-control let-form="form" let-errors="errors" let-methods="methods">
      <div [formGroup]="form">
        <select
          [id]="control.key"
          [formControlName]="control.key"
          [tooltip]="control.tooltip"
          [tooltipPosition]="control.tooltipPosition"
          [tooltipSize]="control?.tooltipSize"
          [tooltipPreline]="control?.tooltipPreline"
          [removeTooltipArrow]="control?.removeTooltipArrow"
          [tooltipAutoPosition]="control?.tooltipAutoPosition"
        >
          <option *ngIf="control.placeholder" value="" disabled selected hidden>{{ control.placeholder }}</option>
          <option *ngFor="let opt of control.options" [value]="opt.key">{{ opt.value }}</option>
        </select>
      </div>
    </ng-template>

    <!--File-->
    <ng-template novoTemplate="file" let-control let-form="form" let-errors="errors" let-methods="methods">
      <div [formGroup]="form">
        <novo-file-input
          [formControlName]="control.key"
          [id]="control.key"
          [name]="control.key"
          [placeholder]="control.placeholder"
          [value]="control.value"
          [multiple]="control.multiple"
          [layoutOptions]="control.layoutOptions"
          [tooltip]="control.tooltip"
          [tooltipPosition]="control.tooltipPosition"
          [tooltipSize]="control?.tooltipSize"
          [tooltipPreline]="control?.tooltipPreline"
          [removeTooltipArrow]="control?.removeTooltipArrow"
          [tooltipAutoPosition]="control?.tooltipAutoPosition"
          (edit)="methods.handleEdit($event)"
          (save)="methods.handleSave($event)"
          (delete)="methods.handleDelete($event)"
          (upload)="methods.handleUpload($event)"
        ></novo-file-input>
      </div>
    </ng-template>

    <!--Tiles-->
    <ng-template novoTemplate="tiles" let-control let-form="form" let-errors="errors" let-methods="methods">
      <div [formGroup]="form">
        <novo-tiles
          [options]="control.options"
          [formControlName]="control.key"
          (onChange)="methods.modelChange($event)"
          [tooltip]="control.tooltip"
          [tooltipPosition]="control.tooltipPosition"
          [tooltipSize]="control?.tooltipSize"
          [tooltipPreline]="control?.tooltipPreline"
          [removeTooltipArrow]="control?.removeTooltipArrow"
          [tooltipAutoPosition]="control?.tooltipAutoPosition"
          [controlDisabled]="control.disabled"
        ></novo-tiles>
      </div>
    </ng-template>

    <!--Picker-->
    <ng-template novoTemplate="picker" let-control let-form="form" let-errors="errors" let-methods="methods">
      <div [formGroup]="form" class="novo-control-input-container">
        <novo-picker
          [config]="control.config"
          [formControlName]="control.key"
          [placeholder]="control.placeholder"
          [parentScrollSelector]="control.parentScrollSelector"
          *ngIf="!control.multiple"
          (select)="methods.modelChange($event)"
          (changed)="methods.modelChangeWithRaw($event)"
          (typing)="methods.handleTyping($event)"
          (focus)="methods.handleFocus($event)"
          (blur)="methods.handleBlur($event)"
          [tooltip]="control.tooltip"
          [tooltipPosition]="control.tooltipPosition"
          [tooltipSize]="control?.tooltipSize"
          [tooltipPreline]="control?.tooltipPreline"
          [removeTooltipArrow]="control?.removeTooltipArrow"
          [tooltipAutoPosition]="control?.tooltipAutoPosition"
        ></novo-picker>
        <novo-chips
          [source]="control.config"
          [type]="control.config.type"
          [formControlName]="control.key"
          [placeholder]="control.placeholder"
          [maxlength]="control?.maxlength"
          *ngIf="control.multiple && !control.config.columns"
          [closeOnSelect]="control.closeOnSelect"
          (changed)="methods.modelChangeWithRaw($event)"
          (typing)="methods.handleTyping($event)"
          (focus)="methods.handleFocus($event)"
          (blur)="methods.handleBlur($event)"
          [tooltip]="control.tooltip"
          [tooltipPosition]="control.tooltipPosition"
          [tooltipSize]="control?.tooltipSize"
          [tooltipPreline]="control?.tooltipPreline"
          [removeTooltipArrow]="control?.removeTooltipArrow"
          [tooltipAutoPosition]="control?.tooltipAutoPosition"
        ></novo-chips>
        <novo-row-chips
          [source]="control.config"
          [type]="control.config.type"
          [formControlName]="control.key"
          [placeholder]="control.placeholder"
          *ngIf="control.multiple && control.config.columns"
          [closeOnSelect]="control.closeOnSelect"
          (changed)="methods.modelChangeWithRaw($event)"
          (typing)="methods.handleTyping($event)"
          (focus)="methods.handleFocus($event)"
          (blur)="methods.handleBlur($event)"
          [tooltip]="control.tooltip"
          [tooltipPosition]="control.tooltipPosition"
          [tooltipSize]="control?.tooltipSize"
          [tooltipPreline]="control?.tooltipPreline"
          [removeTooltipArrow]="control?.removeTooltipArrow"
          [tooltipAutoPosition]="control?.tooltipAutoPosition"
        ></novo-row-chips>
      </div>
    </ng-template>

    <!--Novo Select-->
    <ng-template novoTemplate="select" let-control let-form="form" let-errors="errors" let-methods="methods">
      <div [formGroup]="form">
        <novo-select
          [options]="control.options"
          [headerConfig]="control.headerConfig"
          [placeholder]="control.placeholder"
          [formControlName]="control.key"
          [tooltip]="control.tooltip"
          [tooltipPosition]="control.tooltipPosition"
          [tooltipSize]="control?.tooltipSize"
          [tooltipPreline]="control?.tooltipPreline"
          [removeTooltipArrow]="control?.removeTooltipArrow"
          [tooltipAutoPosition]="control?.tooltipAutoPosition"
          (onSelect)="methods.modelChange($event)"
        ></novo-select>
      </div>
    </ng-template>

    <!--Timezone -->
    <ng-template novoTemplate="timezone" let-control let-form="form" let-errors="errors" let-methods="methods">
      <div [formGroup]="form">
        <novo-select
          [options]="control.options"
          [headerConfig]="control.headerConfig"
          [placeholder]="control.placeholder"
          [formControlName]="control.key"
          [tooltip]="control.tooltip"
          [tooltipPosition]="control.tooltipPosition"
          [tooltipSize]="control?.tooltipSize"
          [tooltipPreline]="control?.tooltipPreline"
          [removeTooltipArrow]="control?.removeTooltipArrow"
          [tooltipAutoPosition]="control?.tooltipAutoPosition"
          position="bottom"
          (onSelect)="methods.modelChange($event)"
        ></novo-select>
      </div>
    </ng-template>

    <!--Radio-->
    <ng-template novoTemplate="radio" let-control let-form="form" let-errors="errors" let-methods="methods">
      <div [formGroup]="form" class="novo-control-input-container">
        <novo-radio
          [name]="control.key"
          [formControlName]="control.key"
          *ngFor="let option of control.options"
          [value]="option.value"
          [label]="option.label"
          [checked]="option.value === form.value[control.key] || (form.value[control.key] && option.value === form.value[control.key].id)"
          [tooltip]="control.tooltip"
          [tooltipPosition]="control.tooltipPosition"
          [tooltipSize]="control?.tooltipSize"
          [tooltipPreline]="control?.tooltipPreline"
          [removeTooltipArrow]="control?.removeTooltipArrow"
          [tooltipAutoPosition]="control?.tooltipAutoPosition"
          [button]="!!option.icon"
          [icon]="option.icon"
          [attr.data-automation-id]="control.key + '-' + (option?.label || option?.value)"
        ></novo-radio>
      </div>
    </ng-template>

    <!--Time-->
    <ng-template novoTemplate="time" let-control let-form="form" let-errors="errors" let-methods="methods">
      <div
        [formGroup]="form"
        class="novo-control-input-container"
        [tooltip]="control?.tooltip"
        [tooltipPosition]="control?.tooltipPosition"
        [tooltipSize]="control?.tooltipSize"
        [tooltipPreline]="control?.tooltipPreline"
        [removeTooltipArrow]="control?.removeTooltipArrow"
        [tooltipAutoPosition]="control?.tooltipAutoPosition"
      >
        <novo-time-picker-input
          [attr.id]="control.key"
          [name]="control.key"
          [formControlName]="control.key"
          [placeholder]="control.placeholder"
          [military]="control.military"
        ></novo-time-picker-input>
      </div>
    </ng-template>

    <!--Native Input--->
    <ng-template novoTemplate="native-input" let-control let-form="form" let-errors="errors" let-methods="methods">
      <div
        [formGroup]="form"
        class="novo-control-input-container novo-control-input-with-label"
        [tooltip]="control?.tooltip"
        [tooltipPosition]="control?.tooltipPosition"
        [tooltipSize]="control?.tooltipSize"
        [tooltipPreline]="control?.tooltipPreline"
        [removeTooltipArrow]="control?.removeTooltipArrow"
        [tooltipAutoPosition]="control?.tooltipAutoPosition"
      >
        <input
          [formControlName]="control.key"
          [id]="control.key"
          [type]="control.type"
          [placeholder]="control?.placeholder"
          (input)="methods.emitChange($event)"
          (focus)="methods.handleFocus($event)"
          (blur)="methods.handleBlur($event)"
        />
      </div>
    </ng-template>

    <!--Date-->
    <ng-template novoTemplate="date" let-control let-form="form" let-errors="errors" let-methods="methods">
      <div
        [formGroup]="form"
        class="novo-control-input-container"
        [tooltip]="control.tooltip"
        [tooltipPosition]="control.tooltipPosition"
        [tooltipSize]="control?.tooltipSize"
        [tooltipPreline]="control?.tooltipPreline"
        [removeTooltipArrow]="control?.removeTooltipArrow"
        [tooltipAutoPosition]="control?.tooltipAutoPosition"
      >
        <novo-date-picker-input
          [attr.id]="control.key"
          [name]="control.key"
          [formControlName]="control.key"
          [start]="control.startDate"
          [end]="control.endDate"
          [format]="control.dateFormat"
          [allowInvalidDate]="control.allowInvalidDate"
          [textMaskEnabled]="control.textMaskEnabled"
          [placeholder]="control.placeholder"
          [weekStart]="control.weekStart"
          (focusEvent)="methods.handleFocus($event)"
          (blurEvent)="methods.handleBlur($event)"
        ></novo-date-picker-input>
      </div>
    </ng-template>

    <!--Date and Time-->
    <ng-template novoTemplate="date-time" let-control let-form="form" let-errors="errors" let-methods="methods">
      <div
        [formGroup]="form"
        class="novo-control-input-container"
        [tooltip]="control.tooltip"
        [tooltipPosition]="control.tooltipPosition"
        [tooltipSize]="control?.tooltipSize"
        [tooltipPreline]="control?.tooltipPreline"
        [removeTooltipArrow]="control?.removeTooltipArrow"
        [tooltipAutoPosition]="control?.tooltipAutoPosition"
      >
        <novo-date-time-picker-input
          [attr.id]="control.key"
          [name]="control.key"
          [formControlName]="control.key"
          [start]="control.startDate"
          [end]="control.endDate"
          [placeholder]="control.placeholder"
          [military]="control.military"
          [weekStart]="control.weekStart"
          (focusEvent)="methods.handleFocus($event)"
          (blurEvent)="methods.handleBlur($event)"
        ></novo-date-time-picker-input>
      </div>
    </ng-template>

    <!--Address-->
    <ng-template novoTemplate="address" let-control let-form="form" let-errors="errors" let-methods="methods">
      <div [formGroup]="form">
        <novo-address
          [formControlName]="control.key"
          [config]="control?.config"
          [readOnly]="control?.readOnly"
          (change)="methods.handleAddressChange($event)"
          (focus)="methods.handleFocus($event.event, $event.field)"
          (blur)="methods.handleBlur($event.event, $event.field)"
          (validityChange)="methods.updateValidity()"
        ></novo-address>
      </div>
    </ng-template>

    <!--Checkbox-->
    <ng-template novoTemplate="checkbox" let-control let-form="form" let-errors="errors" let-methods="methods">
      <div [formGroup]="form">
        <novo-checkbox
          [formControlName]="control?.key"
          [name]="control?.key"
          [label]="control?.checkboxLabel"
          [tooltip]="control?.tooltip"
          [tooltipPosition]="control?.tooltipPosition"
          [tooltipSize]="control?.tooltipSize"
          [tooltipPreline]="control?.tooltipPreline"
          [removeTooltipArrow]="control?.removeTooltipArrow"
          [tooltipAutoPosition]="control?.tooltipAutoPosition"
          [layoutOptions]="control?.layoutOptions"
        ></novo-checkbox>
      </div>
    </ng-template>

    <!--Checklist-->
    <ng-template novoTemplate="checklist" let-control let-form="form" let-errors="errors" let-methods="methods">
      <div [formGroup]="form">
        <novo-check-list
          [formControlName]="control.key"
          [name]="control.key"
          [options]="control?.options"
          [tooltip]="control?.tooltip"
          [tooltipPosition]="control?.tooltipPosition"
          [tooltipSize]="control?.tooltipSize"
          [tooltipPreline]="control?.tooltipPreline"
          [removeTooltipArrow]="control?.removeTooltipArrow"
          [tooltipAutoPosition]="control?.tooltipAutoPosition"
          (onSelect)="methods.modelChange($event)"
        ></novo-check-list>
      </div>
    </ng-template>

    <!--QuickNote-->
    <ng-template novoTemplate="quick-note" let-control let-form="form" let-errors="errors" let-methods="methods">
      <div [formGroup]="form">
        <novo-quick-note
          [formControlName]="control.key"
          [startupFocus]="control?.startupFocus"
          [placeholder]="control?.placeholder"
          [config]="control?.config"
          (change)="methods.modelChange($event)"
          [tooltip]="control?.tooltip"
          [tooltipPosition]="control?.tooltipPosition"
          [tooltipSize]="control?.tooltipSize"
          [removeTooltipArrow]="control?.removeTooltipArrow"
          [tooltipAutoPosition]="control?.tooltipAutoPosition"
          [tooltipPreline]="control?.tooltipPreline"
        ></novo-quick-note>
      </div>
    </ng-template>
  `,
            }]
    }], function () { return [{ type: i1.NovoTemplateService }]; }, { defaultTemplates: [{
            type: ViewChildren,
            args: [NovoTemplate]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbFRlbXBsYXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vQ29udHJvbFRlbXBsYXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPekUsMkJBQUs7SUFBQSxZQUE2QjtJQUFBLGlCQUFNOzs7O0lBQW5DLGVBQTZCO0lBQTdCLHFEQUE2Qjs7OztJQWNoQyxpQ0FZQTtJQUxFLG9NQUFTLDhCQUEwQixJQUFDLHVMQUMzQiwrQkFBMkIsSUFEQSxxTEFFNUIsOEJBQTBCLElBRkU7SUFQdEMsaUJBWUE7OztJQVZFLGtEQUFnQyxvQ0FBQSx1QkFBQSx1REFBQSxxRUFBQTs7OztJQVVsQyxpQ0FhQTtJQU5FLG9NQUFTLDhCQUEwQixJQUFDLHVMQUUzQiwrQkFBMkIsSUFGQSxxTEFHNUIsOEJBQTBCLElBSEU7SUFQdEMsaUJBYUE7Ozs7O0lBWEUsbUZBQTJDO0lBQzNDLGlEQUErQix1QkFBQSx1REFBQSxxRUFBQSxpRUFBQTs7OztJQVVqQyxxQ0FnQkE7SUFURSx3TUFBVyxnQ0FBNEIsSUFBQyx1TEFDL0IsOEJBQTBCLElBREssdUxBRy9CLCtCQUEyQixJQUhJLHFMQUloQyw4QkFBMEIsSUFKTSwyS0FNMUIsV0FBa0IsSUFOUTtJQVAxQyxpQkFnQkE7Ozs7O0lBZEUsbUZBQTJDO0lBQzNDLGlEQUErQix1QkFBQSx1REFBQSxxRUFBQSxpRUFBQTs7OztJQWFqQyxxQ0FhQTtJQVRF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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdWVUO2FBQ0Y7c0VBR0MsZ0JBQWdCO2tCQURmLFlBQVk7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9UZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9UZW1wbGF0ZSB9IGZyb20gJy4uL2NvbW1vbi9ub3ZvLXRlbXBsYXRlL25vdm8tdGVtcGxhdGUuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jb250cm9sLXRlbXBsYXRlcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLS1SZWFkb25seS0tLT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwicmVhZC1vbmx5XCIgbGV0LWZvcm09XCJmb3JtXCIgbGV0LWNvbnRyb2w+XG4gICAgICA8ZGl2Pnt7IGZvcm0udmFsdWVbY29udHJvbC5rZXldIH19PC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8IS0tVGV4dGJveC0tLT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwidGV4dGJveFwiIGxldC1jb250cm9sIGxldC1mb3JtPVwiZm9ybVwiIGxldC1lcnJvcnM9XCJlcnJvcnNcIiBsZXQtbWV0aG9kcz1cIm1ldGhvZHNcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgW2Zvcm1Hcm91cF09XCJmb3JtXCJcbiAgICAgICAgY2xhc3M9XCJub3ZvLWNvbnRyb2wtaW5wdXQtY29udGFpbmVyIG5vdm8tY29udHJvbC1pbnB1dC13aXRoLWxhYmVsXCJcbiAgICAgICAgW3Rvb2x0aXBdPVwiY29udHJvbD8udG9vbHRpcFwiXG4gICAgICAgIFt0b29sdGlwUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcFBvc2l0aW9uXCJcbiAgICAgICAgW3Rvb2x0aXBTaXplXT1cImNvbnRyb2w/LnRvb2x0aXBTaXplXCJcbiAgICAgICAgW3Rvb2x0aXBQcmVsaW5lXT1cImNvbnRyb2w/LnRvb2x0aXBQcmVsaW5lXCJcbiAgICAgICAgW3JlbW92ZVRvb2x0aXBBcnJvd109XCJjb250cm9sPy5yZW1vdmVUb29sdGlwQXJyb3dcIlxuICAgICAgICBbdG9vbHRpcEF1dG9Qb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwQXV0b1Bvc2l0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgKm5nSWY9XCJjb250cm9sPy50eXBlICE9PSAnbnVtYmVyJyAmJiBjb250cm9sPy50ZXh0TWFza0VuYWJsZWRcIlxuICAgICAgICAgIFt0ZXh0TWFza109XCJjb250cm9sLm1hc2tPcHRpb25zXCJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbaWRdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFt0eXBlXT1cImNvbnRyb2w/LnR5cGVcIlxuICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb250cm9sPy5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgKGlucHV0KT1cIm1ldGhvZHMuZW1pdENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAoZm9jdXMpPVwibWV0aG9kcy5oYW5kbGVGb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAoYmx1cik9XCJtZXRob2RzLmhhbmRsZUJsdXIoJGV2ZW50KVwiXG4gICAgICAgICAgYXV0b2NvbXBsZXRlXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICpuZ0lmPVwiY29udHJvbD8udHlwZSAhPT0gJ251bWJlcicgJiYgIWNvbnRyb2w/LnRleHRNYXNrRW5hYmxlZFwiXG4gICAgICAgICAgW2NsYXNzLm1heGxlbmd0aC1lcnJvcl09XCJlcnJvcnM/Lm1heGxlbmd0aFwiXG4gICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW2lkXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbdHlwZV09XCJjb250cm9sPy50eXBlXCJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29udHJvbD8ucGxhY2Vob2xkZXJcIlxuICAgICAgICAgIChpbnB1dCk9XCJtZXRob2RzLmVtaXRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgW21heGxlbmd0aF09XCJjb250cm9sPy5tYXhsZW5ndGhcIlxuICAgICAgICAgIChmb2N1cyk9XCJtZXRob2RzLmhhbmRsZUZvY3VzKCRldmVudClcIlxuICAgICAgICAgIChibHVyKT1cIm1ldGhvZHMuaGFuZGxlQmx1cigkZXZlbnQpXCJcbiAgICAgICAgICBhdXRvY29tcGxldGVcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgKm5nSWY9XCJjb250cm9sPy50eXBlID09PSAnbnVtYmVyJyAmJiBjb250cm9sPy5zdWJUeXBlICE9PSAncGVyY2VudGFnZSdcIlxuICAgICAgICAgIFtjbGFzcy5tYXhsZW5ndGgtZXJyb3JdPVwiZXJyb3JzPy5tYXhsZW5ndGhcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFtpZF09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW3R5cGVdPVwiY29udHJvbD8udHlwZVwiXG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbnRyb2w/LnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAoa2V5ZG93bik9XCJtZXRob2RzLnJlc3RyaWN0S2V5cygkZXZlbnQpXCJcbiAgICAgICAgICAoaW5wdXQpPVwibWV0aG9kcy5lbWl0Q2hhbmdlKCRldmVudClcIlxuICAgICAgICAgIFttYXhsZW5ndGhdPVwiY29udHJvbD8ubWF4bGVuZ3RoXCJcbiAgICAgICAgICAoZm9jdXMpPVwibWV0aG9kcy5oYW5kbGVGb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAoYmx1cik9XCJtZXRob2RzLmhhbmRsZUJsdXIoJGV2ZW50KVwiXG4gICAgICAgICAgc3RlcD1cImFueVwiXG4gICAgICAgICAgKG1vdXNld2hlZWwpPVwibnVtYmVySW5wdXQuYmx1cigpXCJcbiAgICAgICAgICAjbnVtYmVySW5wdXRcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgKm5nSWY9XCJjb250cm9sPy50eXBlID09PSAnbnVtYmVyJyAmJiBjb250cm9sPy5zdWJUeXBlID09PSAncGVyY2VudGFnZSdcIlxuICAgICAgICAgIFt0eXBlXT1cImNvbnRyb2w/LnR5cGVcIlxuICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb250cm9sPy5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgKGtleWRvd24pPVwibWV0aG9kcy5yZXN0cmljdEtleXMoJGV2ZW50KVwiXG4gICAgICAgICAgW3ZhbHVlXT1cImNvbnRyb2w/LnBlcmNlbnRWYWx1ZVwiXG4gICAgICAgICAgKGlucHV0KT1cIm1ldGhvZHMuaGFuZGxlUGVyY2VudENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAoZm9jdXMpPVwibWV0aG9kcy5oYW5kbGVGb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAoYmx1cik9XCJtZXRob2RzLmhhbmRsZUJsdXIoJGV2ZW50KVwiXG4gICAgICAgICAgc3RlcD1cImFueVwiXG4gICAgICAgICAgKG1vdXNld2hlZWwpPVwicGVyY2VudElucHV0LmJsdXIoKVwiXG4gICAgICAgICAgI3BlcmNlbnRJbnB1dFxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dC1sYWJlbFwiICpuZ0lmPVwiY29udHJvbD8uc3ViVHlwZSA9PT0gJ2N1cnJlbmN5J1wiPnt7IGNvbnRyb2wuY3VycmVuY3lGb3JtYXQgfX08L2xhYmVsPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbnB1dC1sYWJlbFwiICpuZ0lmPVwiY29udHJvbD8uc3ViVHlwZSA9PT0gJ3BlcmNlbnRhZ2UnXCI+JTwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPCEtLVRleHRhcmVhLS0tPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJ0ZXh0LWFyZWFcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwidGV4dGFyZWEtY29udGFpbmVyXCJcbiAgICAgICAgW2Zvcm1Hcm91cF09XCJmb3JtXCJcbiAgICAgICAgW3Rvb2x0aXBdPVwiY29udHJvbD8udG9vbHRpcFwiXG4gICAgICAgIFt0b29sdGlwUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcFBvc2l0aW9uXCJcbiAgICAgICAgW3Rvb2x0aXBTaXplXT1cImNvbnRyb2w/LnRvb2x0aXBTaXplXCJcbiAgICAgICAgW3Rvb2x0aXBQcmVsaW5lXT1cImNvbnRyb2w/LnRvb2x0aXBQcmVsaW5lXCJcbiAgICAgICAgW3JlbW92ZVRvb2x0aXBBcnJvd109XCJjb250cm9sPy5yZW1vdmVUb29sdGlwQXJyb3dcIlxuICAgICAgICBbdG9vbHRpcEF1dG9Qb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwQXV0b1Bvc2l0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgW2NsYXNzLm1heGxlbmd0aC1lcnJvcl09XCJlcnJvcnM/Lm1heGxlbmd0aFwiXG4gICAgICAgICAgW25hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFthdHRyLmlkXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29udHJvbC5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgYXV0b3NpemVcbiAgICAgICAgICAoaW5wdXQpPVwibWV0aG9kcy5oYW5kbGVUZXh0QXJlYUlucHV0KCRldmVudClcIlxuICAgICAgICAgIChmb2N1cyk9XCJtZXRob2RzLmhhbmRsZUZvY3VzKCRldmVudClcIlxuICAgICAgICAgIChibHVyKT1cIm1ldGhvZHMuaGFuZGxlQmx1cigkZXZlbnQpXCJcbiAgICAgICAgICBbbWF4bGVuZ3RoXT1cImNvbnRyb2w/Lm1heGxlbmd0aFwiXG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDwhLS1FZGl0b3ItLT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiZWRpdG9yXCIgbGV0LWNvbnRyb2wgbGV0LWZvcm09XCJmb3JtXCIgbGV0LWVycm9ycz1cImVycm9yc1wiIGxldC1tZXRob2RzPVwibWV0aG9kc1wiPlxuICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgICAgPG5vdm8tZWRpdG9yXG4gICAgICAgICAgW25hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFtzdGFydHVwRm9jdXNdPVwiY29udHJvbC5zdGFydHVwRm9jdXNcIlxuICAgICAgICAgIFttaW5pbWFsXT1cImNvbnRyb2wubWluaW1hbFwiXG4gICAgICAgICAgW2ZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmxdPVwiY29udHJvbC5maWxlQnJvd3NlckltYWdlVXBsb2FkVXJsXCJcbiAgICAgICAgICAoZm9jdXMpPVwibWV0aG9kcy5oYW5kbGVGb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAoYmx1cik9XCJtZXRob2RzLmhhbmRsZUJsdXIoJGV2ZW50KVwiXG4gICAgICAgICAgW2NvbmZpZ109XCJjb250cm9sLmNvbmZpZ1wiXG4gICAgICAgID48L25vdm8tZWRpdG9yPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDwhLS1BY2VFZGl0b3ItLT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiYWNlLWVkaXRvclwiIGxldC1jb250cm9sIGxldC1mb3JtPVwiZm9ybVwiIGxldC1lcnJvcnM9XCJlcnJvcnNcIiBsZXQtbWV0aG9kcz1cIm1ldGhvZHNcIj5cbiAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICAgIDxub3ZvLWFjZS1lZGl0b3JcbiAgICAgICAgICBbbmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgKGZvY3VzKT1cIm1ldGhvZHMuaGFuZGxlRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgKGJsdXIpPVwibWV0aG9kcy5oYW5kbGVCbHVyKCRldmVudClcIlxuICAgICAgICA+PC9ub3ZvLWFjZS1lZGl0b3I+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPCEtLUhUTUw1IFNlbGVjdC0tPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJuYXRpdmUtc2VsZWN0XCIgbGV0LWNvbnRyb2wgbGV0LWZvcm09XCJmb3JtXCIgbGV0LWVycm9ycz1cImVycm9yc1wiIGxldC1tZXRob2RzPVwibWV0aG9kc1wiPlxuICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIFtpZF09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW3Rvb2x0aXBdPVwiY29udHJvbC50b29sdGlwXCJcbiAgICAgICAgICBbdG9vbHRpcFBvc2l0aW9uXT1cImNvbnRyb2wudG9vbHRpcFBvc2l0aW9uXCJcbiAgICAgICAgICBbdG9vbHRpcFNpemVdPVwiY29udHJvbD8udG9vbHRpcFNpemVcIlxuICAgICAgICAgIFt0b29sdGlwUHJlbGluZV09XCJjb250cm9sPy50b29sdGlwUHJlbGluZVwiXG4gICAgICAgICAgW3JlbW92ZVRvb2x0aXBBcnJvd109XCJjb250cm9sPy5yZW1vdmVUb29sdGlwQXJyb3dcIlxuICAgICAgICAgIFt0b29sdGlwQXV0b1Bvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBBdXRvUG9zaXRpb25cIlxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiAqbmdJZj1cImNvbnRyb2wucGxhY2Vob2xkZXJcIiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkIGhpZGRlbj57eyBjb250cm9sLnBsYWNlaG9sZGVyIH19PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGNvbnRyb2wub3B0aW9uc1wiIFt2YWx1ZV09XCJvcHQua2V5XCI+e3sgb3B0LnZhbHVlIH19PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDwhLS1GaWxlLS0+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImZpbGVcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICA8bm92by1maWxlLWlucHV0XG4gICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW2lkXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbbmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbnRyb2wucGxhY2Vob2xkZXJcIlxuICAgICAgICAgIFt2YWx1ZV09XCJjb250cm9sLnZhbHVlXCJcbiAgICAgICAgICBbbXVsdGlwbGVdPVwiY29udHJvbC5tdWx0aXBsZVwiXG4gICAgICAgICAgW2xheW91dE9wdGlvbnNdPVwiY29udHJvbC5sYXlvdXRPcHRpb25zXCJcbiAgICAgICAgICBbdG9vbHRpcF09XCJjb250cm9sLnRvb2x0aXBcIlxuICAgICAgICAgIFt0b29sdGlwUG9zaXRpb25dPVwiY29udHJvbC50b29sdGlwUG9zaXRpb25cIlxuICAgICAgICAgIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiXG4gICAgICAgICAgW3Rvb2x0aXBQcmVsaW5lXT1cImNvbnRyb2w/LnRvb2x0aXBQcmVsaW5lXCJcbiAgICAgICAgICBbcmVtb3ZlVG9vbHRpcEFycm93XT1cImNvbnRyb2w/LnJlbW92ZVRvb2x0aXBBcnJvd1wiXG4gICAgICAgICAgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiXG4gICAgICAgICAgKGVkaXQpPVwibWV0aG9kcy5oYW5kbGVFZGl0KCRldmVudClcIlxuICAgICAgICAgIChzYXZlKT1cIm1ldGhvZHMuaGFuZGxlU2F2ZSgkZXZlbnQpXCJcbiAgICAgICAgICAoZGVsZXRlKT1cIm1ldGhvZHMuaGFuZGxlRGVsZXRlKCRldmVudClcIlxuICAgICAgICAgICh1cGxvYWQpPVwibWV0aG9kcy5oYW5kbGVVcGxvYWQoJGV2ZW50KVwiXG4gICAgICAgID48L25vdm8tZmlsZS1pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8IS0tVGlsZXMtLT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwidGlsZXNcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICA8bm92by10aWxlc1xuICAgICAgICAgIFtvcHRpb25zXT1cImNvbnRyb2wub3B0aW9uc1wiXG4gICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgKG9uQ2hhbmdlKT1cIm1ldGhvZHMubW9kZWxDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgW3Rvb2x0aXBdPVwiY29udHJvbC50b29sdGlwXCJcbiAgICAgICAgICBbdG9vbHRpcFBvc2l0aW9uXT1cImNvbnRyb2wudG9vbHRpcFBvc2l0aW9uXCJcbiAgICAgICAgICBbdG9vbHRpcFNpemVdPVwiY29udHJvbD8udG9vbHRpcFNpemVcIlxuICAgICAgICAgIFt0b29sdGlwUHJlbGluZV09XCJjb250cm9sPy50b29sdGlwUHJlbGluZVwiXG4gICAgICAgICAgW3JlbW92ZVRvb2x0aXBBcnJvd109XCJjb250cm9sPy5yZW1vdmVUb29sdGlwQXJyb3dcIlxuICAgICAgICAgIFt0b29sdGlwQXV0b1Bvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBBdXRvUG9zaXRpb25cIlxuICAgICAgICAgIFtjb250cm9sRGlzYWJsZWRdPVwiY29udHJvbC5kaXNhYmxlZFwiXG4gICAgICAgID48L25vdm8tdGlsZXM+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPCEtLVBpY2tlci0tPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJwaWNrZXJcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiIGNsYXNzPVwibm92by1jb250cm9sLWlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICA8bm92by1waWNrZXJcbiAgICAgICAgICBbY29uZmlnXT1cImNvbnRyb2wuY29uZmlnXCJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29udHJvbC5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgW3BhcmVudFNjcm9sbFNlbGVjdG9yXT1cImNvbnRyb2wucGFyZW50U2Nyb2xsU2VsZWN0b3JcIlxuICAgICAgICAgICpuZ0lmPVwiIWNvbnRyb2wubXVsdGlwbGVcIlxuICAgICAgICAgIChzZWxlY3QpPVwibWV0aG9kcy5tb2RlbENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAoY2hhbmdlZCk9XCJtZXRob2RzLm1vZGVsQ2hhbmdlV2l0aFJhdygkZXZlbnQpXCJcbiAgICAgICAgICAodHlwaW5nKT1cIm1ldGhvZHMuaGFuZGxlVHlwaW5nKCRldmVudClcIlxuICAgICAgICAgIChmb2N1cyk9XCJtZXRob2RzLmhhbmRsZUZvY3VzKCRldmVudClcIlxuICAgICAgICAgIChibHVyKT1cIm1ldGhvZHMuaGFuZGxlQmx1cigkZXZlbnQpXCJcbiAgICAgICAgICBbdG9vbHRpcF09XCJjb250cm9sLnRvb2x0aXBcIlxuICAgICAgICAgIFt0b29sdGlwUG9zaXRpb25dPVwiY29udHJvbC50b29sdGlwUG9zaXRpb25cIlxuICAgICAgICAgIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiXG4gICAgICAgICAgW3Rvb2x0aXBQcmVsaW5lXT1cImNvbnRyb2w/LnRvb2x0aXBQcmVsaW5lXCJcbiAgICAgICAgICBbcmVtb3ZlVG9vbHRpcEFycm93XT1cImNvbnRyb2w/LnJlbW92ZVRvb2x0aXBBcnJvd1wiXG4gICAgICAgICAgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiXG4gICAgICAgID48L25vdm8tcGlja2VyPlxuICAgICAgICA8bm92by1jaGlwc1xuICAgICAgICAgIFtzb3VyY2VdPVwiY29udHJvbC5jb25maWdcIlxuICAgICAgICAgIFt0eXBlXT1cImNvbnRyb2wuY29uZmlnLnR5cGVcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb250cm9sLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICBbbWF4bGVuZ3RoXT1cImNvbnRyb2w/Lm1heGxlbmd0aFwiXG4gICAgICAgICAgKm5nSWY9XCJjb250cm9sLm11bHRpcGxlICYmICFjb250cm9sLmNvbmZpZy5jb2x1bW5zXCJcbiAgICAgICAgICBbY2xvc2VPblNlbGVjdF09XCJjb250cm9sLmNsb3NlT25TZWxlY3RcIlxuICAgICAgICAgIChjaGFuZ2VkKT1cIm1ldGhvZHMubW9kZWxDaGFuZ2VXaXRoUmF3KCRldmVudClcIlxuICAgICAgICAgICh0eXBpbmcpPVwibWV0aG9kcy5oYW5kbGVUeXBpbmcoJGV2ZW50KVwiXG4gICAgICAgICAgKGZvY3VzKT1cIm1ldGhvZHMuaGFuZGxlRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgKGJsdXIpPVwibWV0aG9kcy5oYW5kbGVCbHVyKCRldmVudClcIlxuICAgICAgICAgIFt0b29sdGlwXT1cImNvbnRyb2wudG9vbHRpcFwiXG4gICAgICAgICAgW3Rvb2x0aXBQb3NpdGlvbl09XCJjb250cm9sLnRvb2x0aXBQb3NpdGlvblwiXG4gICAgICAgICAgW3Rvb2x0aXBTaXplXT1cImNvbnRyb2w/LnRvb2x0aXBTaXplXCJcbiAgICAgICAgICBbdG9vbHRpcFByZWxpbmVdPVwiY29udHJvbD8udG9vbHRpcFByZWxpbmVcIlxuICAgICAgICAgIFtyZW1vdmVUb29sdGlwQXJyb3ddPVwiY29udHJvbD8ucmVtb3ZlVG9vbHRpcEFycm93XCJcbiAgICAgICAgICBbdG9vbHRpcEF1dG9Qb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwQXV0b1Bvc2l0aW9uXCJcbiAgICAgICAgPjwvbm92by1jaGlwcz5cbiAgICAgICAgPG5vdm8tcm93LWNoaXBzXG4gICAgICAgICAgW3NvdXJjZV09XCJjb250cm9sLmNvbmZpZ1wiXG4gICAgICAgICAgW3R5cGVdPVwiY29udHJvbC5jb25maWcudHlwZVwiXG4gICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbnRyb2wucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICpuZ0lmPVwiY29udHJvbC5tdWx0aXBsZSAmJiBjb250cm9sLmNvbmZpZy5jb2x1bW5zXCJcbiAgICAgICAgICBbY2xvc2VPblNlbGVjdF09XCJjb250cm9sLmNsb3NlT25TZWxlY3RcIlxuICAgICAgICAgIChjaGFuZ2VkKT1cIm1ldGhvZHMubW9kZWxDaGFuZ2VXaXRoUmF3KCRldmVudClcIlxuICAgICAgICAgICh0eXBpbmcpPVwibWV0aG9kcy5oYW5kbGVUeXBpbmcoJGV2ZW50KVwiXG4gICAgICAgICAgKGZvY3VzKT1cIm1ldGhvZHMuaGFuZGxlRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgKGJsdXIpPVwibWV0aG9kcy5oYW5kbGVCbHVyKCRldmVudClcIlxuICAgICAgICAgIFt0b29sdGlwXT1cImNvbnRyb2wudG9vbHRpcFwiXG4gICAgICAgICAgW3Rvb2x0aXBQb3NpdGlvbl09XCJjb250cm9sLnRvb2x0aXBQb3NpdGlvblwiXG4gICAgICAgICAgW3Rvb2x0aXBTaXplXT1cImNvbnRyb2w/LnRvb2x0aXBTaXplXCJcbiAgICAgICAgICBbdG9vbHRpcFByZWxpbmVdPVwiY29udHJvbD8udG9vbHRpcFByZWxpbmVcIlxuICAgICAgICAgIFtyZW1vdmVUb29sdGlwQXJyb3ddPVwiY29udHJvbD8ucmVtb3ZlVG9vbHRpcEFycm93XCJcbiAgICAgICAgICBbdG9vbHRpcEF1dG9Qb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwQXV0b1Bvc2l0aW9uXCJcbiAgICAgICAgPjwvbm92by1yb3ctY2hpcHM+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPCEtLU5vdm8gU2VsZWN0LS0+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cInNlbGVjdFwiIGxldC1jb250cm9sIGxldC1mb3JtPVwiZm9ybVwiIGxldC1lcnJvcnM9XCJlcnJvcnNcIiBsZXQtbWV0aG9kcz1cIm1ldGhvZHNcIj5cbiAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICAgIDxub3ZvLXNlbGVjdFxuICAgICAgICAgIFtvcHRpb25zXT1cImNvbnRyb2wub3B0aW9uc1wiXG4gICAgICAgICAgW2hlYWRlckNvbmZpZ109XCJjb250cm9sLmhlYWRlckNvbmZpZ1wiXG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbnRyb2wucGxhY2Vob2xkZXJcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFt0b29sdGlwXT1cImNvbnRyb2wudG9vbHRpcFwiXG4gICAgICAgICAgW3Rvb2x0aXBQb3NpdGlvbl09XCJjb250cm9sLnRvb2x0aXBQb3NpdGlvblwiXG4gICAgICAgICAgW3Rvb2x0aXBTaXplXT1cImNvbnRyb2w/LnRvb2x0aXBTaXplXCJcbiAgICAgICAgICBbdG9vbHRpcFByZWxpbmVdPVwiY29udHJvbD8udG9vbHRpcFByZWxpbmVcIlxuICAgICAgICAgIFtyZW1vdmVUb29sdGlwQXJyb3ddPVwiY29udHJvbD8ucmVtb3ZlVG9vbHRpcEFycm93XCJcbiAgICAgICAgICBbdG9vbHRpcEF1dG9Qb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwQXV0b1Bvc2l0aW9uXCJcbiAgICAgICAgICAob25TZWxlY3QpPVwibWV0aG9kcy5tb2RlbENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgPjwvbm92by1zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPCEtLVRpbWV6b25lIC0tPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJ0aW1lem9uZVwiIGxldC1jb250cm9sIGxldC1mb3JtPVwiZm9ybVwiIGxldC1lcnJvcnM9XCJlcnJvcnNcIiBsZXQtbWV0aG9kcz1cIm1ldGhvZHNcIj5cbiAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICAgIDxub3ZvLXNlbGVjdFxuICAgICAgICAgIFtvcHRpb25zXT1cImNvbnRyb2wub3B0aW9uc1wiXG4gICAgICAgICAgW2hlYWRlckNvbmZpZ109XCJjb250cm9sLmhlYWRlckNvbmZpZ1wiXG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbnRyb2wucGxhY2Vob2xkZXJcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFt0b29sdGlwXT1cImNvbnRyb2wudG9vbHRpcFwiXG4gICAgICAgICAgW3Rvb2x0aXBQb3NpdGlvbl09XCJjb250cm9sLnRvb2x0aXBQb3NpdGlvblwiXG4gICAgICAgICAgW3Rvb2x0aXBTaXplXT1cImNvbnRyb2w/LnRvb2x0aXBTaXplXCJcbiAgICAgICAgICBbdG9vbHRpcFByZWxpbmVdPVwiY29udHJvbD8udG9vbHRpcFByZWxpbmVcIlxuICAgICAgICAgIFtyZW1vdmVUb29sdGlwQXJyb3ddPVwiY29udHJvbD8ucmVtb3ZlVG9vbHRpcEFycm93XCJcbiAgICAgICAgICBbdG9vbHRpcEF1dG9Qb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwQXV0b1Bvc2l0aW9uXCJcbiAgICAgICAgICBwb3NpdGlvbj1cImJvdHRvbVwiXG4gICAgICAgICAgKG9uU2VsZWN0KT1cIm1ldGhvZHMubW9kZWxDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgID48L25vdm8tc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDwhLS1SYWRpby0tPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJyYWRpb1wiIGxldC1jb250cm9sIGxldC1mb3JtPVwiZm9ybVwiIGxldC1lcnJvcnM9XCJlcnJvcnNcIiBsZXQtbWV0aG9kcz1cIm1ldGhvZHNcIj5cbiAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCIgY2xhc3M9XCJub3ZvLWNvbnRyb2wtaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgIDxub3ZvLXJhZGlvXG4gICAgICAgICAgW25hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29udHJvbC5vcHRpb25zXCJcbiAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgICAgICBbbGFiZWxdPVwib3B0aW9uLmxhYmVsXCJcbiAgICAgICAgICBbY2hlY2tlZF09XCJvcHRpb24udmFsdWUgPT09IGZvcm0udmFsdWVbY29udHJvbC5rZXldIHx8IChmb3JtLnZhbHVlW2NvbnRyb2wua2V5XSAmJiBvcHRpb24udmFsdWUgPT09IGZvcm0udmFsdWVbY29udHJvbC5rZXldLmlkKVwiXG4gICAgICAgICAgW3Rvb2x0aXBdPVwiY29udHJvbC50b29sdGlwXCJcbiAgICAgICAgICBbdG9vbHRpcFBvc2l0aW9uXT1cImNvbnRyb2wudG9vbHRpcFBvc2l0aW9uXCJcbiAgICAgICAgICBbdG9vbHRpcFNpemVdPVwiY29udHJvbD8udG9vbHRpcFNpemVcIlxuICAgICAgICAgIFt0b29sdGlwUHJlbGluZV09XCJjb250cm9sPy50b29sdGlwUHJlbGluZVwiXG4gICAgICAgICAgW3JlbW92ZVRvb2x0aXBBcnJvd109XCJjb250cm9sPy5yZW1vdmVUb29sdGlwQXJyb3dcIlxuICAgICAgICAgIFt0b29sdGlwQXV0b1Bvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBBdXRvUG9zaXRpb25cIlxuICAgICAgICAgIFtidXR0b25dPVwiISFvcHRpb24uaWNvblwiXG4gICAgICAgICAgW2ljb25dPVwib3B0aW9uLmljb25cIlxuICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjb250cm9sLmtleSArICctJyArIChvcHRpb24/LmxhYmVsIHx8IG9wdGlvbj8udmFsdWUpXCJcbiAgICAgICAgPjwvbm92by1yYWRpbz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8IS0tVGltZS0tPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJ0aW1lXCIgbGV0LWNvbnRyb2wgbGV0LWZvcm09XCJmb3JtXCIgbGV0LWVycm9ycz1cImVycm9yc1wiIGxldC1tZXRob2RzPVwibWV0aG9kc1wiPlxuICAgICAgPGRpdlxuICAgICAgICBbZm9ybUdyb3VwXT1cImZvcm1cIlxuICAgICAgICBjbGFzcz1cIm5vdm8tY29udHJvbC1pbnB1dC1jb250YWluZXJcIlxuICAgICAgICBbdG9vbHRpcF09XCJjb250cm9sPy50b29sdGlwXCJcbiAgICAgICAgW3Rvb2x0aXBQb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwUG9zaXRpb25cIlxuICAgICAgICBbdG9vbHRpcFNpemVdPVwiY29udHJvbD8udG9vbHRpcFNpemVcIlxuICAgICAgICBbdG9vbHRpcFByZWxpbmVdPVwiY29udHJvbD8udG9vbHRpcFByZWxpbmVcIlxuICAgICAgICBbcmVtb3ZlVG9vbHRpcEFycm93XT1cImNvbnRyb2w/LnJlbW92ZVRvb2x0aXBBcnJvd1wiXG4gICAgICAgIFt0b29sdGlwQXV0b1Bvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBBdXRvUG9zaXRpb25cIlxuICAgICAgPlxuICAgICAgICA8bm92by10aW1lLXBpY2tlci1pbnB1dFxuICAgICAgICAgIFthdHRyLmlkXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbbmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbnRyb2wucGxhY2Vob2xkZXJcIlxuICAgICAgICAgIFttaWxpdGFyeV09XCJjb250cm9sLm1pbGl0YXJ5XCJcbiAgICAgICAgPjwvbm92by10aW1lLXBpY2tlci1pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8IS0tTmF0aXZlIElucHV0LS0tPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJuYXRpdmUtaW5wdXRcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIFtmb3JtR3JvdXBdPVwiZm9ybVwiXG4gICAgICAgIGNsYXNzPVwibm92by1jb250cm9sLWlucHV0LWNvbnRhaW5lciBub3ZvLWNvbnRyb2wtaW5wdXQtd2l0aC1sYWJlbFwiXG4gICAgICAgIFt0b29sdGlwXT1cImNvbnRyb2w/LnRvb2x0aXBcIlxuICAgICAgICBbdG9vbHRpcFBvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBQb3NpdGlvblwiXG4gICAgICAgIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiXG4gICAgICAgIFt0b29sdGlwUHJlbGluZV09XCJjb250cm9sPy50b29sdGlwUHJlbGluZVwiXG4gICAgICAgIFtyZW1vdmVUb29sdGlwQXJyb3ddPVwiY29udHJvbD8ucmVtb3ZlVG9vbHRpcEFycm93XCJcbiAgICAgICAgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiXG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFtpZF09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW3R5cGVdPVwiY29udHJvbC50eXBlXCJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29udHJvbD8ucGxhY2Vob2xkZXJcIlxuICAgICAgICAgIChpbnB1dCk9XCJtZXRob2RzLmVtaXRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgKGZvY3VzKT1cIm1ldGhvZHMuaGFuZGxlRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgKGJsdXIpPVwibWV0aG9kcy5oYW5kbGVCbHVyKCRldmVudClcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDwhLS1EYXRlLS0+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImRhdGVcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIFtmb3JtR3JvdXBdPVwiZm9ybVwiXG4gICAgICAgIGNsYXNzPVwibm92by1jb250cm9sLWlucHV0LWNvbnRhaW5lclwiXG4gICAgICAgIFt0b29sdGlwXT1cImNvbnRyb2wudG9vbHRpcFwiXG4gICAgICAgIFt0b29sdGlwUG9zaXRpb25dPVwiY29udHJvbC50b29sdGlwUG9zaXRpb25cIlxuICAgICAgICBbdG9vbHRpcFNpemVdPVwiY29udHJvbD8udG9vbHRpcFNpemVcIlxuICAgICAgICBbdG9vbHRpcFByZWxpbmVdPVwiY29udHJvbD8udG9vbHRpcFByZWxpbmVcIlxuICAgICAgICBbcmVtb3ZlVG9vbHRpcEFycm93XT1cImNvbnRyb2w/LnJlbW92ZVRvb2x0aXBBcnJvd1wiXG4gICAgICAgIFt0b29sdGlwQXV0b1Bvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBBdXRvUG9zaXRpb25cIlxuICAgICAgPlxuICAgICAgICA8bm92by1kYXRlLXBpY2tlci1pbnB1dFxuICAgICAgICAgIFthdHRyLmlkXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbbmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW3N0YXJ0XT1cImNvbnRyb2wuc3RhcnREYXRlXCJcbiAgICAgICAgICBbZW5kXT1cImNvbnRyb2wuZW5kRGF0ZVwiXG4gICAgICAgICAgW2Zvcm1hdF09XCJjb250cm9sLmRhdGVGb3JtYXRcIlxuICAgICAgICAgIFthbGxvd0ludmFsaWREYXRlXT1cImNvbnRyb2wuYWxsb3dJbnZhbGlkRGF0ZVwiXG4gICAgICAgICAgW3RleHRNYXNrRW5hYmxlZF09XCJjb250cm9sLnRleHRNYXNrRW5hYmxlZFwiXG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbnRyb2wucGxhY2Vob2xkZXJcIlxuICAgICAgICAgIFt3ZWVrU3RhcnRdPVwiY29udHJvbC53ZWVrU3RhcnRcIlxuICAgICAgICAgIChmb2N1c0V2ZW50KT1cIm1ldGhvZHMuaGFuZGxlRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgKGJsdXJFdmVudCk9XCJtZXRob2RzLmhhbmRsZUJsdXIoJGV2ZW50KVwiXG4gICAgICAgID48L25vdm8tZGF0ZS1waWNrZXItaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPCEtLURhdGUgYW5kIFRpbWUtLT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiZGF0ZS10aW1lXCIgbGV0LWNvbnRyb2wgbGV0LWZvcm09XCJmb3JtXCIgbGV0LWVycm9ycz1cImVycm9yc1wiIGxldC1tZXRob2RzPVwibWV0aG9kc1wiPlxuICAgICAgPGRpdlxuICAgICAgICBbZm9ybUdyb3VwXT1cImZvcm1cIlxuICAgICAgICBjbGFzcz1cIm5vdm8tY29udHJvbC1pbnB1dC1jb250YWluZXJcIlxuICAgICAgICBbdG9vbHRpcF09XCJjb250cm9sLnRvb2x0aXBcIlxuICAgICAgICBbdG9vbHRpcFBvc2l0aW9uXT1cImNvbnRyb2wudG9vbHRpcFBvc2l0aW9uXCJcbiAgICAgICAgW3Rvb2x0aXBTaXplXT1cImNvbnRyb2w/LnRvb2x0aXBTaXplXCJcbiAgICAgICAgW3Rvb2x0aXBQcmVsaW5lXT1cImNvbnRyb2w/LnRvb2x0aXBQcmVsaW5lXCJcbiAgICAgICAgW3JlbW92ZVRvb2x0aXBBcnJvd109XCJjb250cm9sPy5yZW1vdmVUb29sdGlwQXJyb3dcIlxuICAgICAgICBbdG9vbHRpcEF1dG9Qb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwQXV0b1Bvc2l0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPG5vdm8tZGF0ZS10aW1lLXBpY2tlci1pbnB1dFxuICAgICAgICAgIFthdHRyLmlkXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbbmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW3N0YXJ0XT1cImNvbnRyb2wuc3RhcnREYXRlXCJcbiAgICAgICAgICBbZW5kXT1cImNvbnRyb2wuZW5kRGF0ZVwiXG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbnRyb2wucGxhY2Vob2xkZXJcIlxuICAgICAgICAgIFttaWxpdGFyeV09XCJjb250cm9sLm1pbGl0YXJ5XCJcbiAgICAgICAgICBbd2Vla1N0YXJ0XT1cImNvbnRyb2wud2Vla1N0YXJ0XCJcbiAgICAgICAgICAoZm9jdXNFdmVudCk9XCJtZXRob2RzLmhhbmRsZUZvY3VzKCRldmVudClcIlxuICAgICAgICAgIChibHVyRXZlbnQpPVwibWV0aG9kcy5oYW5kbGVCbHVyKCRldmVudClcIlxuICAgICAgICA+PC9ub3ZvLWRhdGUtdGltZS1waWNrZXItaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPCEtLUFkZHJlc3MtLT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiYWRkcmVzc1wiIGxldC1jb250cm9sIGxldC1mb3JtPVwiZm9ybVwiIGxldC1lcnJvcnM9XCJlcnJvcnNcIiBsZXQtbWV0aG9kcz1cIm1ldGhvZHNcIj5cbiAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICAgIDxub3ZvLWFkZHJlc3NcbiAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbY29uZmlnXT1cImNvbnRyb2w/LmNvbmZpZ1wiXG4gICAgICAgICAgW3JlYWRPbmx5XT1cImNvbnRyb2w/LnJlYWRPbmx5XCJcbiAgICAgICAgICAoY2hhbmdlKT1cIm1ldGhvZHMuaGFuZGxlQWRkcmVzc0NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAoZm9jdXMpPVwibWV0aG9kcy5oYW5kbGVGb2N1cygkZXZlbnQuZXZlbnQsICRldmVudC5maWVsZClcIlxuICAgICAgICAgIChibHVyKT1cIm1ldGhvZHMuaGFuZGxlQmx1cigkZXZlbnQuZXZlbnQsICRldmVudC5maWVsZClcIlxuICAgICAgICAgICh2YWxpZGl0eUNoYW5nZSk9XCJtZXRob2RzLnVwZGF0ZVZhbGlkaXR5KClcIlxuICAgICAgICA+PC9ub3ZvLWFkZHJlc3M+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPCEtLUNoZWNrYm94LS0+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImNoZWNrYm94XCIgbGV0LWNvbnRyb2wgbGV0LWZvcm09XCJmb3JtXCIgbGV0LWVycm9ycz1cImVycm9yc1wiIGxldC1tZXRob2RzPVwibWV0aG9kc1wiPlxuICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgICAgPG5vdm8tY2hlY2tib3hcbiAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2w/LmtleVwiXG4gICAgICAgICAgW25hbWVdPVwiY29udHJvbD8ua2V5XCJcbiAgICAgICAgICBbbGFiZWxdPVwiY29udHJvbD8uY2hlY2tib3hMYWJlbFwiXG4gICAgICAgICAgW3Rvb2x0aXBdPVwiY29udHJvbD8udG9vbHRpcFwiXG4gICAgICAgICAgW3Rvb2x0aXBQb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwUG9zaXRpb25cIlxuICAgICAgICAgIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiXG4gICAgICAgICAgW3Rvb2x0aXBQcmVsaW5lXT1cImNvbnRyb2w/LnRvb2x0aXBQcmVsaW5lXCJcbiAgICAgICAgICBbcmVtb3ZlVG9vbHRpcEFycm93XT1cImNvbnRyb2w/LnJlbW92ZVRvb2x0aXBBcnJvd1wiXG4gICAgICAgICAgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiXG4gICAgICAgICAgW2xheW91dE9wdGlvbnNdPVwiY29udHJvbD8ubGF5b3V0T3B0aW9uc1wiXG4gICAgICAgID48L25vdm8tY2hlY2tib3g+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPCEtLUNoZWNrbGlzdC0tPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJjaGVja2xpc3RcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICA8bm92by1jaGVjay1saXN0XG4gICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW25hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFtvcHRpb25zXT1cImNvbnRyb2w/Lm9wdGlvbnNcIlxuICAgICAgICAgIFt0b29sdGlwXT1cImNvbnRyb2w/LnRvb2x0aXBcIlxuICAgICAgICAgIFt0b29sdGlwUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcFBvc2l0aW9uXCJcbiAgICAgICAgICBbdG9vbHRpcFNpemVdPVwiY29udHJvbD8udG9vbHRpcFNpemVcIlxuICAgICAgICAgIFt0b29sdGlwUHJlbGluZV09XCJjb250cm9sPy50b29sdGlwUHJlbGluZVwiXG4gICAgICAgICAgW3JlbW92ZVRvb2x0aXBBcnJvd109XCJjb250cm9sPy5yZW1vdmVUb29sdGlwQXJyb3dcIlxuICAgICAgICAgIFt0b29sdGlwQXV0b1Bvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBBdXRvUG9zaXRpb25cIlxuICAgICAgICAgIChvblNlbGVjdCk9XCJtZXRob2RzLm1vZGVsQ2hhbmdlKCRldmVudClcIlxuICAgICAgICA+PC9ub3ZvLWNoZWNrLWxpc3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPCEtLVF1aWNrTm90ZS0tPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJxdWljay1ub3RlXCIgbGV0LWNvbnRyb2wgbGV0LWZvcm09XCJmb3JtXCIgbGV0LWVycm9ycz1cImVycm9yc1wiIGxldC1tZXRob2RzPVwibWV0aG9kc1wiPlxuICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgICAgPG5vdm8tcXVpY2stbm90ZVxuICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFtzdGFydHVwRm9jdXNdPVwiY29udHJvbD8uc3RhcnR1cEZvY3VzXCJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29udHJvbD8ucGxhY2Vob2xkZXJcIlxuICAgICAgICAgIFtjb25maWddPVwiY29udHJvbD8uY29uZmlnXCJcbiAgICAgICAgICAoY2hhbmdlKT1cIm1ldGhvZHMubW9kZWxDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgW3Rvb2x0aXBdPVwiY29udHJvbD8udG9vbHRpcFwiXG4gICAgICAgICAgW3Rvb2x0aXBQb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwUG9zaXRpb25cIlxuICAgICAgICAgIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiXG4gICAgICAgICAgW3JlbW92ZVRvb2x0aXBBcnJvd109XCJjb250cm9sPy5yZW1vdmVUb29sdGlwQXJyb3dcIlxuICAgICAgICAgIFt0b29sdGlwQXV0b1Bvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBBdXRvUG9zaXRpb25cIlxuICAgICAgICAgIFt0b29sdGlwUHJlbGluZV09XCJjb250cm9sPy50b29sdGlwUHJlbGluZVwiXG4gICAgICAgID48L25vdm8tcXVpY2stbm90ZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Db250cm9sVGVtcGxhdGVzIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGRyZW4oTm92b1RlbXBsYXRlKVxuICBkZWZhdWx0VGVtcGxhdGVzOiBRdWVyeUxpc3Q8Tm92b1RlbXBsYXRlPjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0ZW1wbGF0ZXM6IE5vdm9UZW1wbGF0ZVNlcnZpY2UpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlZmF1bHRUZW1wbGF0ZXMgJiYgdGhpcy5kZWZhdWx0VGVtcGxhdGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kZWZhdWx0VGVtcGxhdGVzLmZvckVhY2goKHRlbXBsYXRlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXMuYWRkRGVmYXVsdCh0ZW1wbGF0ZS5uYW1lLCB0ZW1wbGF0ZS50ZW1wbGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==