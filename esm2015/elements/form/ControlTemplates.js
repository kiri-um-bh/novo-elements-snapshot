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
import * as i16 from "../radio/RadioGroup";
import * as i17 from "../radio/Radio";
import * as i18 from "../time-picker/TimePickerInput";
import * as i19 from "../date-picker/DatePickerInput";
import * as i20 from "../date-time-picker/DateTimePickerInput";
import * as i21 from "./extras/address/Address";
import * as i22 from "./extras/checkbox/Checkbox";
import * as i23 from "./extras/checkbox/CheckList";
import * as i24 from "../quick-note/QuickNote";
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
function NovoControlTemplates_ng_template_11_novo_radio_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-radio", 56);
} if (rf & 2) {
    const option_r174 = ctx.$implicit;
    const ctx_r175 = i0.ɵɵnextContext();
    const form_r170 = ctx_r175.form;
    const control_r169 = ctx_r175.$implicit;
    i0.ɵɵproperty("value", option_r174.value)("label", option_r174.label)("checked", option_r174.value === form_r170.value[control_r169.key] || form_r170.value[control_r169.key] && option_r174.value === form_r170.value[control_r169.key].id)("tooltip", control_r169.tooltip)("tooltipPosition", control_r169.tooltipPosition)("tooltipSize", control_r169 == null ? null : control_r169.tooltipSize)("tooltipPreline", control_r169 == null ? null : control_r169.tooltipPreline)("removeTooltipArrow", control_r169 == null ? null : control_r169.removeTooltipArrow)("tooltipAutoPosition", control_r169 == null ? null : control_r169.tooltipAutoPosition)("button", !!option_r174.icon)("icon", option_r174.icon)("color", option_r174.color)("theme", !!option_r174.icon && !option_r174.label ? "icon" : null);
    i0.ɵɵattribute("data-automation-id", control_r169.key + "-" + ((option_r174 == null ? null : option_r174.label) || (option_r174 == null ? null : option_r174.value)));
} }
function NovoControlTemplates_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵelementStart(1, "novo-radio-group", 54);
    i0.ɵɵtemplate(2, NovoControlTemplates_ng_template_11_novo_radio_2_Template, 1, 14, "novo-radio", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r169 = ctx.$implicit;
    const form_r170 = ctx.form;
    i0.ɵɵproperty("formGroup", form_r170);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", control_r169.key)("formControlName", control_r169.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", control_r169.options);
} }
function NovoControlTemplates_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵelement(1, "novo-time-picker-input", 58);
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
    i0.ɵɵelementStart(1, "input", 59);
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
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵelementStart(1, "novo-date-picker-input", 60);
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
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵelementStart(1, "novo-date-time-picker-input", 61);
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
    i0.ɵɵelementStart(1, "novo-address", 62);
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
    i0.ɵɵelement(1, "novo-checkbox", 63);
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
    i0.ɵɵelementStart(1, "novo-check-list", 64);
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
    i0.ɵɵelementStart(1, "novo-quick-note", 65);
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
    } }, decls: 20, vars: 0, consts: [["novoTemplate", "read-only"], ["novoTemplate", "textbox"], ["novoTemplate", "text-area"], ["novoTemplate", "editor"], ["novoTemplate", "ace-editor"], ["novoTemplate", "native-select"], ["novoTemplate", "file"], ["novoTemplate", "tiles"], ["novoTemplate", "picker"], ["novoTemplate", "select"], ["novoTemplate", "timezone"], ["novoTemplate", "radio"], ["novoTemplate", "time"], ["novoTemplate", "native-input"], ["novoTemplate", "date"], ["novoTemplate", "date-time"], ["novoTemplate", "address"], ["novoTemplate", "checkbox"], ["novoTemplate", "checklist"], ["novoTemplate", "quick-note"], [1, "novo-control-input-container", "novo-control-input-with-label", 3, "formGroup", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition"], ["autocomplete", "", 3, "textMask", "formControlName", "id", "type", "placeholder", "input", "focus", "blur", 4, "ngIf"], ["autocomplete", "", 3, "maxlength-error", "formControlName", "id", "type", "placeholder", "maxlength", "input", "focus", "blur", 4, "ngIf"], ["step", "any", 3, "maxlength-error", "formControlName", "id", "type", "placeholder", "maxlength", "keydown", "input", "focus", "blur", "mousewheel", 4, "ngIf"], ["step", "any", 3, "type", "placeholder", "value", "keydown", "input", "focus", "blur", "mousewheel", 4, "ngIf"], ["class", "input-label", 4, "ngIf"], ["autocomplete", "", 3, "textMask", "formControlName", "id", "type", "placeholder", "input", "focus", "blur"], ["autocomplete", "", 3, "formControlName", "id", "type", "placeholder", "maxlength", "input", "focus", "blur"], ["step", "any", 3, "formControlName", "id", "type", "placeholder", "maxlength", "keydown", "input", "focus", "blur", "mousewheel"], ["numberInput", ""], ["step", "any", 3, "type", "placeholder", "value", "keydown", "input", "focus", "blur", "mousewheel"], ["percentInput", ""], [1, "input-label"], [1, "textarea-container", 3, "formGroup", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition"], ["autosize", "", 3, "name", "placeholder", "formControlName", "maxlength", "input", "focus", "blur"], [3, "formGroup"], [3, "name", "formControlName", "startupFocus", "minimal", "fileBrowserImageUploadUrl", "config", "focus", "blur"], [3, "name", "formControlName", "focus", "blur"], [3, "id", "formControlName", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition"], ["value", "", "disabled", "", "selected", "", "hidden", "", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "", "disabled", "", "selected", "", "hidden", ""], [3, "value"], [3, "formControlName", "id", "name", "placeholder", "value", "multiple", "layoutOptions", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "edit", "save", "delete", "upload"], [3, "options", "formControlName", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "controlDisabled", "onChange"], [1, "novo-control-input-container", 3, "formGroup"], [3, "config", "formControlName", "placeholder", "parentScrollSelector", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "select", "changed", "typing", "focus", "blur", 4, "ngIf"], [3, "source", "type", "formControlName", "placeholder", "maxlength", "closeOnSelect", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "changed", "typing", "focus", "blur", 4, "ngIf"], [3, "source", "type", "formControlName", "placeholder", "closeOnSelect", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "changed", "typing", "focus", "blur", 4, "ngIf"], [3, "config", "formControlName", "placeholder", "parentScrollSelector", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "select", "changed", "typing", "focus", "blur"], [3, "source", "type", "formControlName", "placeholder", "maxlength", "closeOnSelect", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "changed", "typing", "focus", "blur"], [3, "source", "type", "formControlName", "placeholder", "closeOnSelect", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "changed", "typing", "focus", "blur"], [3, "options", "headerConfig", "placeholder", "formControlName", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "onSelect"], ["position", "bottom", 3, "options", "headerConfig", "placeholder", "formControlName", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "onSelect"], [3, "name", "formControlName"], [3, "value", "label", "checked", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "button", "icon", "color", "theme", 4, "ngFor", "ngForOf"], [3, "value", "label", "checked", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "button", "icon", "color", "theme"], [1, "novo-control-input-container", 3, "formGroup", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition"], [3, "name", "formControlName", "placeholder", "military"], [3, "formControlName", "id", "type", "placeholder", "input", "focus", "blur"], [3, "name", "formControlName", "start", "end", "format", "allowInvalidDate", "textMaskEnabled", "placeholder", "weekStart", "focusEvent", "blurEvent"], [3, "name", "formControlName", "start", "end", "placeholder", "military", "weekStart", "focusEvent", "blurEvent"], [3, "formControlName", "config", "readOnly", "change", "focus", "blur", "validityChange"], [3, "formControlName", "name", "label", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "layoutOptions"], [3, "formControlName", "name", "options", "tooltip", "tooltipPosition", "tooltipSize", "tooltipPreline", "removeTooltipArrow", "tooltipAutoPosition", "onSelect"], [3, "formControlName", "startupFocus", "placeholder", "config", "tooltip", "tooltipPosition", "tooltipSize", "removeTooltipArrow", "tooltipAutoPosition", "tooltipPreline", "change"]], template: function NovoControlTemplates_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵtemplate(11, NovoControlTemplates_ng_template_11_Template, 3, 4, "ng-template", 11);
        i0.ɵɵtemplate(12, NovoControlTemplates_ng_template_12_Template, 2, 12, "ng-template", 12);
        i0.ɵɵtemplate(13, NovoControlTemplates_ng_template_13_Template, 2, 11, "ng-template", 13);
        i0.ɵɵtemplate(14, NovoControlTemplates_ng_template_14_Template, 2, 17, "ng-template", 14);
        i0.ɵɵtemplate(15, NovoControlTemplates_ng_template_15_Template, 2, 15, "ng-template", 15);
        i0.ɵɵtemplate(16, NovoControlTemplates_ng_template_16_Template, 2, 4, "ng-template", 16);
        i0.ɵɵtemplate(17, NovoControlTemplates_ng_template_17_Template, 2, 11, "ng-template", 17);
        i0.ɵɵtemplate(18, NovoControlTemplates_ng_template_18_Template, 2, 10, "ng-template", 18);
        i0.ɵɵtemplate(19, NovoControlTemplates_ng_template_19_Template, 2, 11, "ng-template", 19);
    } }, directives: [i2.NovoTemplate, i3.NgControlStatusGroup, i3.FormGroupDirective, i4.TooltipDirective, i5.NgIf, i3.DefaultValueAccessor, i6.MaskedInputDirective, i3.NgControlStatus, i3.FormControlName, i3.MaxLengthValidator, i7.NovoAutoSize, i8.NovoCKEditorElement, i9.NovoAceEditor, i3.SelectControlValueAccessor, i5.NgForOf, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i10.NovoFileInputElement, i11.NovoTilesElement, i12.NovoPickerElement, i13.NovoChipsElement, i14.NovoRowChipsElement, i15.NovoSelectElement, i16.NovoRadioGroup, i17.NovoRadioElement, i18.NovoTimePickerInputElement, i19.NovoDatePickerInputElement, i20.NovoDateTimePickerInputElement, i21.NovoAddressElement, i22.NovoCheckboxElement, i23.NovoCheckListElement, i24.QuickNoteElement], encapsulation: 2 });
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
        <novo-radio-group [name]="control.key" [formControlName]="control.key">
          <novo-radio
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
            [color]="option.color"
            [theme]="!!option.icon && !option.label ? 'icon' : null"
            [attr.data-automation-id]="control.key + '-' + (option?.label || option?.value)"
          ></novo-radio>
        </novo-radio-group>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbFRlbXBsYXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vQ29udHJvbFRlbXBsYXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTXpFLDJCQUFLO0lBQUEsWUFBNkI7SUFBQSxpQkFBTTs7OztJQUFuQyxlQUE2QjtJQUE3QixxREFBNkI7Ozs7SUFjaEMsaUNBWUE7SUFMRSxvTUFBUyw4QkFBMEIsSUFBQyx1TEFDM0IsK0JBQTJCLElBREEscUxBRTVCLDhCQUEwQixJQUZFO0lBUHRDLGlCQVlBOzs7SUFWRSxrREFBZ0Msb0NBQUEsdUJBQUEsdURBQUEscUVBQUE7Ozs7SUFVbEMsaUNBYUE7SUFORSxvTUFBUyw4QkFBMEIsSUFBQyx1TEFFM0IsK0JBQTJCLElBRkEscUxBRzVCLDhCQUEwQixJQUhFO0lBUHRDLGlCQWFBOzs7OztJQVhFLG1GQUEyQztJQUMzQyxpREFBK0IsdUJBQUEsdURBQUEscUVBQUEsaUVBQUE7Ozs7SUFVakMscUNBZ0JBO0lBVEUsd01BQVcsZ0NBQTRCLElBQUMsdUxBQy9CLDhCQUEwQixJQURLLHVMQUcvQiwrQkFBMkIsSUFISSxxTEFJaEMsOEJBQTBCLElBSk0sMktBTTFCLFdBQWtCLElBTlE7SUFQMUMsaUJBZ0JBOzs7OztJQWRFLG1GQUEyQztJQUMzQyxpREFBK0IsdUJBQUEsdURBQUEscUVBQUEsaUVBQUE7Ozs7SUFhakMscUNBYUE7SUFU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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeWVUO2FBQ0Y7c0VBR0MsZ0JBQWdCO2tCQURmLFlBQVk7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9UZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9UZW1wbGF0ZSB9IGZyb20gJy4uL2NvbW1vbi9ub3ZvLXRlbXBsYXRlL25vdm8tdGVtcGxhdGUuZGlyZWN0aXZlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY29udHJvbC10ZW1wbGF0ZXMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDwhLS0tUmVhZG9ubHktLS0+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cInJlYWQtb25seVwiIGxldC1mb3JtPVwiZm9ybVwiIGxldC1jb250cm9sPlxuICAgICAgPGRpdj57eyBmb3JtLnZhbHVlW2NvbnRyb2wua2V5XSB9fTwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPCEtLVRleHRib3gtLS0+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cInRleHRib3hcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIFtmb3JtR3JvdXBdPVwiZm9ybVwiXG4gICAgICAgIGNsYXNzPVwibm92by1jb250cm9sLWlucHV0LWNvbnRhaW5lciBub3ZvLWNvbnRyb2wtaW5wdXQtd2l0aC1sYWJlbFwiXG4gICAgICAgIFt0b29sdGlwXT1cImNvbnRyb2w/LnRvb2x0aXBcIlxuICAgICAgICBbdG9vbHRpcFBvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBQb3NpdGlvblwiXG4gICAgICAgIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiXG4gICAgICAgIFt0b29sdGlwUHJlbGluZV09XCJjb250cm9sPy50b29sdGlwUHJlbGluZVwiXG4gICAgICAgIFtyZW1vdmVUb29sdGlwQXJyb3ddPVwiY29udHJvbD8ucmVtb3ZlVG9vbHRpcEFycm93XCJcbiAgICAgICAgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiXG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICpuZ0lmPVwiY29udHJvbD8udHlwZSAhPT0gJ251bWJlcicgJiYgY29udHJvbD8udGV4dE1hc2tFbmFibGVkXCJcbiAgICAgICAgICBbdGV4dE1hc2tdPVwiY29udHJvbC5tYXNrT3B0aW9uc1wiXG4gICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW2lkXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbdHlwZV09XCJjb250cm9sPy50eXBlXCJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29udHJvbD8ucGxhY2Vob2xkZXJcIlxuICAgICAgICAgIChpbnB1dCk9XCJtZXRob2RzLmVtaXRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgKGZvY3VzKT1cIm1ldGhvZHMuaGFuZGxlRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgKGJsdXIpPVwibWV0aG9kcy5oYW5kbGVCbHVyKCRldmVudClcIlxuICAgICAgICAgIGF1dG9jb21wbGV0ZVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAqbmdJZj1cImNvbnRyb2w/LnR5cGUgIT09ICdudW1iZXInICYmICFjb250cm9sPy50ZXh0TWFza0VuYWJsZWRcIlxuICAgICAgICAgIFtjbGFzcy5tYXhsZW5ndGgtZXJyb3JdPVwiZXJyb3JzPy5tYXhsZW5ndGhcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFtpZF09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW3R5cGVdPVwiY29udHJvbD8udHlwZVwiXG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbnRyb2w/LnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAoaW5wdXQpPVwibWV0aG9kcy5lbWl0Q2hhbmdlKCRldmVudClcIlxuICAgICAgICAgIFttYXhsZW5ndGhdPVwiY29udHJvbD8ubWF4bGVuZ3RoXCJcbiAgICAgICAgICAoZm9jdXMpPVwibWV0aG9kcy5oYW5kbGVGb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAoYmx1cik9XCJtZXRob2RzLmhhbmRsZUJsdXIoJGV2ZW50KVwiXG4gICAgICAgICAgYXV0b2NvbXBsZXRlXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICpuZ0lmPVwiY29udHJvbD8udHlwZSA9PT0gJ251bWJlcicgJiYgY29udHJvbD8uc3ViVHlwZSAhPT0gJ3BlcmNlbnRhZ2UnXCJcbiAgICAgICAgICBbY2xhc3MubWF4bGVuZ3RoLWVycm9yXT1cImVycm9ycz8ubWF4bGVuZ3RoXCJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbaWRdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFt0eXBlXT1cImNvbnRyb2w/LnR5cGVcIlxuICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb250cm9sPy5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgKGtleWRvd24pPVwibWV0aG9kcy5yZXN0cmljdEtleXMoJGV2ZW50KVwiXG4gICAgICAgICAgKGlucHV0KT1cIm1ldGhvZHMuZW1pdENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICBbbWF4bGVuZ3RoXT1cImNvbnRyb2w/Lm1heGxlbmd0aFwiXG4gICAgICAgICAgKGZvY3VzKT1cIm1ldGhvZHMuaGFuZGxlRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgKGJsdXIpPVwibWV0aG9kcy5oYW5kbGVCbHVyKCRldmVudClcIlxuICAgICAgICAgIHN0ZXA9XCJhbnlcIlxuICAgICAgICAgIChtb3VzZXdoZWVsKT1cIm51bWJlcklucHV0LmJsdXIoKVwiXG4gICAgICAgICAgI251bWJlcklucHV0XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICpuZ0lmPVwiY29udHJvbD8udHlwZSA9PT0gJ251bWJlcicgJiYgY29udHJvbD8uc3ViVHlwZSA9PT0gJ3BlcmNlbnRhZ2UnXCJcbiAgICAgICAgICBbdHlwZV09XCJjb250cm9sPy50eXBlXCJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29udHJvbD8ucGxhY2Vob2xkZXJcIlxuICAgICAgICAgIChrZXlkb3duKT1cIm1ldGhvZHMucmVzdHJpY3RLZXlzKCRldmVudClcIlxuICAgICAgICAgIFt2YWx1ZV09XCJjb250cm9sPy5wZXJjZW50VmFsdWVcIlxuICAgICAgICAgIChpbnB1dCk9XCJtZXRob2RzLmhhbmRsZVBlcmNlbnRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgKGZvY3VzKT1cIm1ldGhvZHMuaGFuZGxlRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgKGJsdXIpPVwibWV0aG9kcy5oYW5kbGVCbHVyKCRldmVudClcIlxuICAgICAgICAgIHN0ZXA9XCJhbnlcIlxuICAgICAgICAgIChtb3VzZXdoZWVsKT1cInBlcmNlbnRJbnB1dC5ibHVyKClcIlxuICAgICAgICAgICNwZXJjZW50SW5wdXRcbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXQtbGFiZWxcIiAqbmdJZj1cImNvbnRyb2w/LnN1YlR5cGUgPT09ICdjdXJyZW5jeSdcIj57eyBjb250cm9sLmN1cnJlbmN5Rm9ybWF0IH19PC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5wdXQtbGFiZWxcIiAqbmdJZj1cImNvbnRyb2w/LnN1YlR5cGUgPT09ICdwZXJjZW50YWdlJ1wiPiU8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDwhLS1UZXh0YXJlYS0tLT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwidGV4dC1hcmVhXCIgbGV0LWNvbnRyb2wgbGV0LWZvcm09XCJmb3JtXCIgbGV0LWVycm9ycz1cImVycm9yc1wiIGxldC1tZXRob2RzPVwibWV0aG9kc1wiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInRleHRhcmVhLWNvbnRhaW5lclwiXG4gICAgICAgIFtmb3JtR3JvdXBdPVwiZm9ybVwiXG4gICAgICAgIFt0b29sdGlwXT1cImNvbnRyb2w/LnRvb2x0aXBcIlxuICAgICAgICBbdG9vbHRpcFBvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBQb3NpdGlvblwiXG4gICAgICAgIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiXG4gICAgICAgIFt0b29sdGlwUHJlbGluZV09XCJjb250cm9sPy50b29sdGlwUHJlbGluZVwiXG4gICAgICAgIFtyZW1vdmVUb29sdGlwQXJyb3ddPVwiY29udHJvbD8ucmVtb3ZlVG9vbHRpcEFycm93XCJcbiAgICAgICAgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiXG4gICAgICA+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIFtjbGFzcy5tYXhsZW5ndGgtZXJyb3JdPVwiZXJyb3JzPy5tYXhsZW5ndGhcIlxuICAgICAgICAgIFtuYW1lXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbYXR0ci5pZF09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbnRyb2wucGxhY2Vob2xkZXJcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIGF1dG9zaXplXG4gICAgICAgICAgKGlucHV0KT1cIm1ldGhvZHMuaGFuZGxlVGV4dEFyZWFJbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgICAoZm9jdXMpPVwibWV0aG9kcy5oYW5kbGVGb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAoYmx1cik9XCJtZXRob2RzLmhhbmRsZUJsdXIoJGV2ZW50KVwiXG4gICAgICAgICAgW21heGxlbmd0aF09XCJjb250cm9sPy5tYXhsZW5ndGhcIlxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8IS0tRWRpdG9yLS0+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImVkaXRvclwiIGxldC1jb250cm9sIGxldC1mb3JtPVwiZm9ybVwiIGxldC1lcnJvcnM9XCJlcnJvcnNcIiBsZXQtbWV0aG9kcz1cIm1ldGhvZHNcIj5cbiAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICAgIDxub3ZvLWVkaXRvclxuICAgICAgICAgIFtuYW1lXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbc3RhcnR1cEZvY3VzXT1cImNvbnRyb2wuc3RhcnR1cEZvY3VzXCJcbiAgICAgICAgICBbbWluaW1hbF09XCJjb250cm9sLm1pbmltYWxcIlxuICAgICAgICAgIFtmaWxlQnJvd3NlckltYWdlVXBsb2FkVXJsXT1cImNvbnRyb2wuZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybFwiXG4gICAgICAgICAgKGZvY3VzKT1cIm1ldGhvZHMuaGFuZGxlRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgKGJsdXIpPVwibWV0aG9kcy5oYW5kbGVCbHVyKCRldmVudClcIlxuICAgICAgICAgIFtjb25maWddPVwiY29udHJvbC5jb25maWdcIlxuICAgICAgICA+PC9ub3ZvLWVkaXRvcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8IS0tQWNlRWRpdG9yLS0+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImFjZS1lZGl0b3JcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICA8bm92by1hY2UtZWRpdG9yXG4gICAgICAgICAgW25hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIChmb2N1cyk9XCJtZXRob2RzLmhhbmRsZUZvY3VzKCRldmVudClcIlxuICAgICAgICAgIChibHVyKT1cIm1ldGhvZHMuaGFuZGxlQmx1cigkZXZlbnQpXCJcbiAgICAgICAgPjwvbm92by1hY2UtZWRpdG9yPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDwhLS1IVE1MNSBTZWxlY3QtLT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwibmF0aXZlLXNlbGVjdFwiIGxldC1jb250cm9sIGxldC1mb3JtPVwiZm9ybVwiIGxldC1lcnJvcnM9XCJlcnJvcnNcIiBsZXQtbWV0aG9kcz1cIm1ldGhvZHNcIj5cbiAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBbaWRdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFt0b29sdGlwXT1cImNvbnRyb2wudG9vbHRpcFwiXG4gICAgICAgICAgW3Rvb2x0aXBQb3NpdGlvbl09XCJjb250cm9sLnRvb2x0aXBQb3NpdGlvblwiXG4gICAgICAgICAgW3Rvb2x0aXBTaXplXT1cImNvbnRyb2w/LnRvb2x0aXBTaXplXCJcbiAgICAgICAgICBbdG9vbHRpcFByZWxpbmVdPVwiY29udHJvbD8udG9vbHRpcFByZWxpbmVcIlxuICAgICAgICAgIFtyZW1vdmVUb29sdGlwQXJyb3ddPVwiY29udHJvbD8ucmVtb3ZlVG9vbHRpcEFycm93XCJcbiAgICAgICAgICBbdG9vbHRpcEF1dG9Qb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwQXV0b1Bvc2l0aW9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gKm5nSWY9XCJjb250cm9sLnBsYWNlaG9sZGVyXCIgdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZCBoaWRkZW4+e3sgY29udHJvbC5wbGFjZWhvbGRlciB9fTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdCBvZiBjb250cm9sLm9wdGlvbnNcIiBbdmFsdWVdPVwib3B0LmtleVwiPnt7IG9wdC52YWx1ZSB9fTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8IS0tRmlsZS0tPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJmaWxlXCIgbGV0LWNvbnRyb2wgbGV0LWZvcm09XCJmb3JtXCIgbGV0LWVycm9ycz1cImVycm9yc1wiIGxldC1tZXRob2RzPVwibWV0aG9kc1wiPlxuICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgICAgPG5vdm8tZmlsZS1pbnB1dFxuICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFtpZF09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW25hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb250cm9sLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICBbdmFsdWVdPVwiY29udHJvbC52YWx1ZVwiXG4gICAgICAgICAgW211bHRpcGxlXT1cImNvbnRyb2wubXVsdGlwbGVcIlxuICAgICAgICAgIFtsYXlvdXRPcHRpb25zXT1cImNvbnRyb2wubGF5b3V0T3B0aW9uc1wiXG4gICAgICAgICAgW3Rvb2x0aXBdPVwiY29udHJvbC50b29sdGlwXCJcbiAgICAgICAgICBbdG9vbHRpcFBvc2l0aW9uXT1cImNvbnRyb2wudG9vbHRpcFBvc2l0aW9uXCJcbiAgICAgICAgICBbdG9vbHRpcFNpemVdPVwiY29udHJvbD8udG9vbHRpcFNpemVcIlxuICAgICAgICAgIFt0b29sdGlwUHJlbGluZV09XCJjb250cm9sPy50b29sdGlwUHJlbGluZVwiXG4gICAgICAgICAgW3JlbW92ZVRvb2x0aXBBcnJvd109XCJjb250cm9sPy5yZW1vdmVUb29sdGlwQXJyb3dcIlxuICAgICAgICAgIFt0b29sdGlwQXV0b1Bvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBBdXRvUG9zaXRpb25cIlxuICAgICAgICAgIChlZGl0KT1cIm1ldGhvZHMuaGFuZGxlRWRpdCgkZXZlbnQpXCJcbiAgICAgICAgICAoc2F2ZSk9XCJtZXRob2RzLmhhbmRsZVNhdmUoJGV2ZW50KVwiXG4gICAgICAgICAgKGRlbGV0ZSk9XCJtZXRob2RzLmhhbmRsZURlbGV0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAodXBsb2FkKT1cIm1ldGhvZHMuaGFuZGxlVXBsb2FkKCRldmVudClcIlxuICAgICAgICA+PC9ub3ZvLWZpbGUtaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPCEtLVRpbGVzLS0+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cInRpbGVzXCIgbGV0LWNvbnRyb2wgbGV0LWZvcm09XCJmb3JtXCIgbGV0LWVycm9ycz1cImVycm9yc1wiIGxldC1tZXRob2RzPVwibWV0aG9kc1wiPlxuICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgICAgPG5vdm8tdGlsZXNcbiAgICAgICAgICBbb3B0aW9uc109XCJjb250cm9sLm9wdGlvbnNcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIChvbkNoYW5nZSk9XCJtZXRob2RzLm1vZGVsQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgIFt0b29sdGlwXT1cImNvbnRyb2wudG9vbHRpcFwiXG4gICAgICAgICAgW3Rvb2x0aXBQb3NpdGlvbl09XCJjb250cm9sLnRvb2x0aXBQb3NpdGlvblwiXG4gICAgICAgICAgW3Rvb2x0aXBTaXplXT1cImNvbnRyb2w/LnRvb2x0aXBTaXplXCJcbiAgICAgICAgICBbdG9vbHRpcFByZWxpbmVdPVwiY29udHJvbD8udG9vbHRpcFByZWxpbmVcIlxuICAgICAgICAgIFtyZW1vdmVUb29sdGlwQXJyb3ddPVwiY29udHJvbD8ucmVtb3ZlVG9vbHRpcEFycm93XCJcbiAgICAgICAgICBbdG9vbHRpcEF1dG9Qb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwQXV0b1Bvc2l0aW9uXCJcbiAgICAgICAgICBbY29udHJvbERpc2FibGVkXT1cImNvbnRyb2wuZGlzYWJsZWRcIlxuICAgICAgICA+PC9ub3ZvLXRpbGVzPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDwhLS1QaWNrZXItLT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwicGlja2VyXCIgbGV0LWNvbnRyb2wgbGV0LWZvcm09XCJmb3JtXCIgbGV0LWVycm9ycz1cImVycm9yc1wiIGxldC1tZXRob2RzPVwibWV0aG9kc1wiPlxuICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIiBjbGFzcz1cIm5vdm8tY29udHJvbC1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgPG5vdm8tcGlja2VyXG4gICAgICAgICAgW2NvbmZpZ109XCJjb250cm9sLmNvbmZpZ1wiXG4gICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbnRyb2wucGxhY2Vob2xkZXJcIlxuICAgICAgICAgIFtwYXJlbnRTY3JvbGxTZWxlY3Rvcl09XCJjb250cm9sLnBhcmVudFNjcm9sbFNlbGVjdG9yXCJcbiAgICAgICAgICAqbmdJZj1cIiFjb250cm9sLm11bHRpcGxlXCJcbiAgICAgICAgICAoc2VsZWN0KT1cIm1ldGhvZHMubW9kZWxDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgKGNoYW5nZWQpPVwibWV0aG9kcy5tb2RlbENoYW5nZVdpdGhSYXcoJGV2ZW50KVwiXG4gICAgICAgICAgKHR5cGluZyk9XCJtZXRob2RzLmhhbmRsZVR5cGluZygkZXZlbnQpXCJcbiAgICAgICAgICAoZm9jdXMpPVwibWV0aG9kcy5oYW5kbGVGb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAoYmx1cik9XCJtZXRob2RzLmhhbmRsZUJsdXIoJGV2ZW50KVwiXG4gICAgICAgICAgW3Rvb2x0aXBdPVwiY29udHJvbC50b29sdGlwXCJcbiAgICAgICAgICBbdG9vbHRpcFBvc2l0aW9uXT1cImNvbnRyb2wudG9vbHRpcFBvc2l0aW9uXCJcbiAgICAgICAgICBbdG9vbHRpcFNpemVdPVwiY29udHJvbD8udG9vbHRpcFNpemVcIlxuICAgICAgICAgIFt0b29sdGlwUHJlbGluZV09XCJjb250cm9sPy50b29sdGlwUHJlbGluZVwiXG4gICAgICAgICAgW3JlbW92ZVRvb2x0aXBBcnJvd109XCJjb250cm9sPy5yZW1vdmVUb29sdGlwQXJyb3dcIlxuICAgICAgICAgIFt0b29sdGlwQXV0b1Bvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBBdXRvUG9zaXRpb25cIlxuICAgICAgICA+PC9ub3ZvLXBpY2tlcj5cbiAgICAgICAgPG5vdm8tY2hpcHNcbiAgICAgICAgICBbc291cmNlXT1cImNvbnRyb2wuY29uZmlnXCJcbiAgICAgICAgICBbdHlwZV09XCJjb250cm9sLmNvbmZpZy50eXBlXCJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29udHJvbC5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgW21heGxlbmd0aF09XCJjb250cm9sPy5tYXhsZW5ndGhcIlxuICAgICAgICAgICpuZ0lmPVwiY29udHJvbC5tdWx0aXBsZSAmJiAhY29udHJvbC5jb25maWcuY29sdW1uc1wiXG4gICAgICAgICAgW2Nsb3NlT25TZWxlY3RdPVwiY29udHJvbC5jbG9zZU9uU2VsZWN0XCJcbiAgICAgICAgICAoY2hhbmdlZCk9XCJtZXRob2RzLm1vZGVsQ2hhbmdlV2l0aFJhdygkZXZlbnQpXCJcbiAgICAgICAgICAodHlwaW5nKT1cIm1ldGhvZHMuaGFuZGxlVHlwaW5nKCRldmVudClcIlxuICAgICAgICAgIChmb2N1cyk9XCJtZXRob2RzLmhhbmRsZUZvY3VzKCRldmVudClcIlxuICAgICAgICAgIChibHVyKT1cIm1ldGhvZHMuaGFuZGxlQmx1cigkZXZlbnQpXCJcbiAgICAgICAgICBbdG9vbHRpcF09XCJjb250cm9sLnRvb2x0aXBcIlxuICAgICAgICAgIFt0b29sdGlwUG9zaXRpb25dPVwiY29udHJvbC50b29sdGlwUG9zaXRpb25cIlxuICAgICAgICAgIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiXG4gICAgICAgICAgW3Rvb2x0aXBQcmVsaW5lXT1cImNvbnRyb2w/LnRvb2x0aXBQcmVsaW5lXCJcbiAgICAgICAgICBbcmVtb3ZlVG9vbHRpcEFycm93XT1cImNvbnRyb2w/LnJlbW92ZVRvb2x0aXBBcnJvd1wiXG4gICAgICAgICAgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiXG4gICAgICAgID48L25vdm8tY2hpcHM+XG4gICAgICAgIDxub3ZvLXJvdy1jaGlwc1xuICAgICAgICAgIFtzb3VyY2VdPVwiY29udHJvbC5jb25maWdcIlxuICAgICAgICAgIFt0eXBlXT1cImNvbnRyb2wuY29uZmlnLnR5cGVcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb250cm9sLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAqbmdJZj1cImNvbnRyb2wubXVsdGlwbGUgJiYgY29udHJvbC5jb25maWcuY29sdW1uc1wiXG4gICAgICAgICAgW2Nsb3NlT25TZWxlY3RdPVwiY29udHJvbC5jbG9zZU9uU2VsZWN0XCJcbiAgICAgICAgICAoY2hhbmdlZCk9XCJtZXRob2RzLm1vZGVsQ2hhbmdlV2l0aFJhdygkZXZlbnQpXCJcbiAgICAgICAgICAodHlwaW5nKT1cIm1ldGhvZHMuaGFuZGxlVHlwaW5nKCRldmVudClcIlxuICAgICAgICAgIChmb2N1cyk9XCJtZXRob2RzLmhhbmRsZUZvY3VzKCRldmVudClcIlxuICAgICAgICAgIChibHVyKT1cIm1ldGhvZHMuaGFuZGxlQmx1cigkZXZlbnQpXCJcbiAgICAgICAgICBbdG9vbHRpcF09XCJjb250cm9sLnRvb2x0aXBcIlxuICAgICAgICAgIFt0b29sdGlwUG9zaXRpb25dPVwiY29udHJvbC50b29sdGlwUG9zaXRpb25cIlxuICAgICAgICAgIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiXG4gICAgICAgICAgW3Rvb2x0aXBQcmVsaW5lXT1cImNvbnRyb2w/LnRvb2x0aXBQcmVsaW5lXCJcbiAgICAgICAgICBbcmVtb3ZlVG9vbHRpcEFycm93XT1cImNvbnRyb2w/LnJlbW92ZVRvb2x0aXBBcnJvd1wiXG4gICAgICAgICAgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiXG4gICAgICAgID48L25vdm8tcm93LWNoaXBzPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDwhLS1Ob3ZvIFNlbGVjdC0tPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJzZWxlY3RcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICA8bm92by1zZWxlY3RcbiAgICAgICAgICBbb3B0aW9uc109XCJjb250cm9sLm9wdGlvbnNcIlxuICAgICAgICAgIFtoZWFkZXJDb25maWddPVwiY29udHJvbC5oZWFkZXJDb25maWdcIlxuICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb250cm9sLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbdG9vbHRpcF09XCJjb250cm9sLnRvb2x0aXBcIlxuICAgICAgICAgIFt0b29sdGlwUG9zaXRpb25dPVwiY29udHJvbC50b29sdGlwUG9zaXRpb25cIlxuICAgICAgICAgIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiXG4gICAgICAgICAgW3Rvb2x0aXBQcmVsaW5lXT1cImNvbnRyb2w/LnRvb2x0aXBQcmVsaW5lXCJcbiAgICAgICAgICBbcmVtb3ZlVG9vbHRpcEFycm93XT1cImNvbnRyb2w/LnJlbW92ZVRvb2x0aXBBcnJvd1wiXG4gICAgICAgICAgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiXG4gICAgICAgICAgKG9uU2VsZWN0KT1cIm1ldGhvZHMubW9kZWxDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgID48L25vdm8tc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDwhLS1UaW1lem9uZSAtLT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwidGltZXpvbmVcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICA8bm92by1zZWxlY3RcbiAgICAgICAgICBbb3B0aW9uc109XCJjb250cm9sLm9wdGlvbnNcIlxuICAgICAgICAgIFtoZWFkZXJDb25maWddPVwiY29udHJvbC5oZWFkZXJDb25maWdcIlxuICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb250cm9sLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbdG9vbHRpcF09XCJjb250cm9sLnRvb2x0aXBcIlxuICAgICAgICAgIFt0b29sdGlwUG9zaXRpb25dPVwiY29udHJvbC50b29sdGlwUG9zaXRpb25cIlxuICAgICAgICAgIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiXG4gICAgICAgICAgW3Rvb2x0aXBQcmVsaW5lXT1cImNvbnRyb2w/LnRvb2x0aXBQcmVsaW5lXCJcbiAgICAgICAgICBbcmVtb3ZlVG9vbHRpcEFycm93XT1cImNvbnRyb2w/LnJlbW92ZVRvb2x0aXBBcnJvd1wiXG4gICAgICAgICAgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiXG4gICAgICAgICAgcG9zaXRpb249XCJib3R0b21cIlxuICAgICAgICAgIChvblNlbGVjdCk9XCJtZXRob2RzLm1vZGVsQ2hhbmdlKCRldmVudClcIlxuICAgICAgICA+PC9ub3ZvLXNlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8IS0tUmFkaW8tLT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwicmFkaW9cIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiIGNsYXNzPVwibm92by1jb250cm9sLWlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICA8bm92by1yYWRpby1ncm91cCBbbmFtZV09XCJjb250cm9sLmtleVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbC5rZXlcIj5cbiAgICAgICAgICA8bm92by1yYWRpb1xuICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb250cm9sLm9wdGlvbnNcIlxuICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICAgICAgICBbbGFiZWxdPVwib3B0aW9uLmxhYmVsXCJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cIm9wdGlvbi52YWx1ZSA9PT0gZm9ybS52YWx1ZVtjb250cm9sLmtleV0gfHwgKGZvcm0udmFsdWVbY29udHJvbC5rZXldICYmIG9wdGlvbi52YWx1ZSA9PT0gZm9ybS52YWx1ZVtjb250cm9sLmtleV0uaWQpXCJcbiAgICAgICAgICAgIFt0b29sdGlwXT1cImNvbnRyb2wudG9vbHRpcFwiXG4gICAgICAgICAgICBbdG9vbHRpcFBvc2l0aW9uXT1cImNvbnRyb2wudG9vbHRpcFBvc2l0aW9uXCJcbiAgICAgICAgICAgIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiXG4gICAgICAgICAgICBbdG9vbHRpcFByZWxpbmVdPVwiY29udHJvbD8udG9vbHRpcFByZWxpbmVcIlxuICAgICAgICAgICAgW3JlbW92ZVRvb2x0aXBBcnJvd109XCJjb250cm9sPy5yZW1vdmVUb29sdGlwQXJyb3dcIlxuICAgICAgICAgICAgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiXG4gICAgICAgICAgICBbYnV0dG9uXT1cIiEhb3B0aW9uLmljb25cIlxuICAgICAgICAgICAgW2ljb25dPVwib3B0aW9uLmljb25cIlxuICAgICAgICAgICAgW2NvbG9yXT1cIm9wdGlvbi5jb2xvclwiXG4gICAgICAgICAgICBbdGhlbWVdPVwiISFvcHRpb24uaWNvbiAmJiAhb3B0aW9uLmxhYmVsID8gJ2ljb24nIDogbnVsbFwiXG4gICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY29udHJvbC5rZXkgKyAnLScgKyAob3B0aW9uPy5sYWJlbCB8fCBvcHRpb24/LnZhbHVlKVwiXG4gICAgICAgICAgPjwvbm92by1yYWRpbz5cbiAgICAgICAgPC9ub3ZvLXJhZGlvLWdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDwhLS1UaW1lLS0+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cInRpbWVcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIFtmb3JtR3JvdXBdPVwiZm9ybVwiXG4gICAgICAgIGNsYXNzPVwibm92by1jb250cm9sLWlucHV0LWNvbnRhaW5lclwiXG4gICAgICAgIFt0b29sdGlwXT1cImNvbnRyb2w/LnRvb2x0aXBcIlxuICAgICAgICBbdG9vbHRpcFBvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBQb3NpdGlvblwiXG4gICAgICAgIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiXG4gICAgICAgIFt0b29sdGlwUHJlbGluZV09XCJjb250cm9sPy50b29sdGlwUHJlbGluZVwiXG4gICAgICAgIFtyZW1vdmVUb29sdGlwQXJyb3ddPVwiY29udHJvbD8ucmVtb3ZlVG9vbHRpcEFycm93XCJcbiAgICAgICAgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiXG4gICAgICA+XG4gICAgICAgIDxub3ZvLXRpbWUtcGlja2VyLWlucHV0XG4gICAgICAgICAgW2F0dHIuaWRdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFtuYW1lXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29udHJvbC5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgW21pbGl0YXJ5XT1cImNvbnRyb2wubWlsaXRhcnlcIlxuICAgICAgICA+PC9ub3ZvLXRpbWUtcGlja2VyLWlucHV0PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDwhLS1OYXRpdmUgSW5wdXQtLS0+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cIm5hdGl2ZS1pbnB1dFwiIGxldC1jb250cm9sIGxldC1mb3JtPVwiZm9ybVwiIGxldC1lcnJvcnM9XCJlcnJvcnNcIiBsZXQtbWV0aG9kcz1cIm1ldGhvZHNcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgW2Zvcm1Hcm91cF09XCJmb3JtXCJcbiAgICAgICAgY2xhc3M9XCJub3ZvLWNvbnRyb2wtaW5wdXQtY29udGFpbmVyIG5vdm8tY29udHJvbC1pbnB1dC13aXRoLWxhYmVsXCJcbiAgICAgICAgW3Rvb2x0aXBdPVwiY29udHJvbD8udG9vbHRpcFwiXG4gICAgICAgIFt0b29sdGlwUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcFBvc2l0aW9uXCJcbiAgICAgICAgW3Rvb2x0aXBTaXplXT1cImNvbnRyb2w/LnRvb2x0aXBTaXplXCJcbiAgICAgICAgW3Rvb2x0aXBQcmVsaW5lXT1cImNvbnRyb2w/LnRvb2x0aXBQcmVsaW5lXCJcbiAgICAgICAgW3JlbW92ZVRvb2x0aXBBcnJvd109XCJjb250cm9sPy5yZW1vdmVUb29sdGlwQXJyb3dcIlxuICAgICAgICBbdG9vbHRpcEF1dG9Qb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwQXV0b1Bvc2l0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW2lkXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbdHlwZV09XCJjb250cm9sLnR5cGVcIlxuICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb250cm9sPy5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgKGlucHV0KT1cIm1ldGhvZHMuZW1pdENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAoZm9jdXMpPVwibWV0aG9kcy5oYW5kbGVGb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAoYmx1cik9XCJtZXRob2RzLmhhbmRsZUJsdXIoJGV2ZW50KVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPCEtLURhdGUtLT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiZGF0ZVwiIGxldC1jb250cm9sIGxldC1mb3JtPVwiZm9ybVwiIGxldC1lcnJvcnM9XCJlcnJvcnNcIiBsZXQtbWV0aG9kcz1cIm1ldGhvZHNcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgW2Zvcm1Hcm91cF09XCJmb3JtXCJcbiAgICAgICAgY2xhc3M9XCJub3ZvLWNvbnRyb2wtaW5wdXQtY29udGFpbmVyXCJcbiAgICAgICAgW3Rvb2x0aXBdPVwiY29udHJvbC50b29sdGlwXCJcbiAgICAgICAgW3Rvb2x0aXBQb3NpdGlvbl09XCJjb250cm9sLnRvb2x0aXBQb3NpdGlvblwiXG4gICAgICAgIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiXG4gICAgICAgIFt0b29sdGlwUHJlbGluZV09XCJjb250cm9sPy50b29sdGlwUHJlbGluZVwiXG4gICAgICAgIFtyZW1vdmVUb29sdGlwQXJyb3ddPVwiY29udHJvbD8ucmVtb3ZlVG9vbHRpcEFycm93XCJcbiAgICAgICAgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiXG4gICAgICA+XG4gICAgICAgIDxub3ZvLWRhdGUtcGlja2VyLWlucHV0XG4gICAgICAgICAgW2F0dHIuaWRdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFtuYW1lXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbc3RhcnRdPVwiY29udHJvbC5zdGFydERhdGVcIlxuICAgICAgICAgIFtlbmRdPVwiY29udHJvbC5lbmREYXRlXCJcbiAgICAgICAgICBbZm9ybWF0XT1cImNvbnRyb2wuZGF0ZUZvcm1hdFwiXG4gICAgICAgICAgW2FsbG93SW52YWxpZERhdGVdPVwiY29udHJvbC5hbGxvd0ludmFsaWREYXRlXCJcbiAgICAgICAgICBbdGV4dE1hc2tFbmFibGVkXT1cImNvbnRyb2wudGV4dE1hc2tFbmFibGVkXCJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29udHJvbC5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgW3dlZWtTdGFydF09XCJjb250cm9sLndlZWtTdGFydFwiXG4gICAgICAgICAgKGZvY3VzRXZlbnQpPVwibWV0aG9kcy5oYW5kbGVGb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAoYmx1ckV2ZW50KT1cIm1ldGhvZHMuaGFuZGxlQmx1cigkZXZlbnQpXCJcbiAgICAgICAgPjwvbm92by1kYXRlLXBpY2tlci1pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8IS0tRGF0ZSBhbmQgVGltZS0tPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJkYXRlLXRpbWVcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIFtmb3JtR3JvdXBdPVwiZm9ybVwiXG4gICAgICAgIGNsYXNzPVwibm92by1jb250cm9sLWlucHV0LWNvbnRhaW5lclwiXG4gICAgICAgIFt0b29sdGlwXT1cImNvbnRyb2wudG9vbHRpcFwiXG4gICAgICAgIFt0b29sdGlwUG9zaXRpb25dPVwiY29udHJvbC50b29sdGlwUG9zaXRpb25cIlxuICAgICAgICBbdG9vbHRpcFNpemVdPVwiY29udHJvbD8udG9vbHRpcFNpemVcIlxuICAgICAgICBbdG9vbHRpcFByZWxpbmVdPVwiY29udHJvbD8udG9vbHRpcFByZWxpbmVcIlxuICAgICAgICBbcmVtb3ZlVG9vbHRpcEFycm93XT1cImNvbnRyb2w/LnJlbW92ZVRvb2x0aXBBcnJvd1wiXG4gICAgICAgIFt0b29sdGlwQXV0b1Bvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBBdXRvUG9zaXRpb25cIlxuICAgICAgPlxuICAgICAgICA8bm92by1kYXRlLXRpbWUtcGlja2VyLWlucHV0XG4gICAgICAgICAgW2F0dHIuaWRdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFtuYW1lXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbc3RhcnRdPVwiY29udHJvbC5zdGFydERhdGVcIlxuICAgICAgICAgIFtlbmRdPVwiY29udHJvbC5lbmREYXRlXCJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29udHJvbC5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgW21pbGl0YXJ5XT1cImNvbnRyb2wubWlsaXRhcnlcIlxuICAgICAgICAgIFt3ZWVrU3RhcnRdPVwiY29udHJvbC53ZWVrU3RhcnRcIlxuICAgICAgICAgIChmb2N1c0V2ZW50KT1cIm1ldGhvZHMuaGFuZGxlRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgKGJsdXJFdmVudCk9XCJtZXRob2RzLmhhbmRsZUJsdXIoJGV2ZW50KVwiXG4gICAgICAgID48L25vdm8tZGF0ZS10aW1lLXBpY2tlci1pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8IS0tQWRkcmVzcy0tPlxuICAgIDxuZy10ZW1wbGF0ZSBub3ZvVGVtcGxhdGU9XCJhZGRyZXNzXCIgbGV0LWNvbnRyb2wgbGV0LWZvcm09XCJmb3JtXCIgbGV0LWVycm9ycz1cImVycm9yc1wiIGxldC1tZXRob2RzPVwibWV0aG9kc1wiPlxuICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICAgICAgPG5vdm8tYWRkcmVzc1xuICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgIFtjb25maWddPVwiY29udHJvbD8uY29uZmlnXCJcbiAgICAgICAgICBbcmVhZE9ubHldPVwiY29udHJvbD8ucmVhZE9ubHlcIlxuICAgICAgICAgIChjaGFuZ2UpPVwibWV0aG9kcy5oYW5kbGVBZGRyZXNzQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgIChmb2N1cyk9XCJtZXRob2RzLmhhbmRsZUZvY3VzKCRldmVudC5ldmVudCwgJGV2ZW50LmZpZWxkKVwiXG4gICAgICAgICAgKGJsdXIpPVwibWV0aG9kcy5oYW5kbGVCbHVyKCRldmVudC5ldmVudCwgJGV2ZW50LmZpZWxkKVwiXG4gICAgICAgICAgKHZhbGlkaXR5Q2hhbmdlKT1cIm1ldGhvZHMudXBkYXRlVmFsaWRpdHkoKVwiXG4gICAgICAgID48L25vdm8tYWRkcmVzcz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8IS0tQ2hlY2tib3gtLT5cbiAgICA8bmctdGVtcGxhdGUgbm92b1RlbXBsYXRlPVwiY2hlY2tib3hcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICA8bm92by1jaGVja2JveFxuICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbD8ua2V5XCJcbiAgICAgICAgICBbbmFtZV09XCJjb250cm9sPy5rZXlcIlxuICAgICAgICAgIFtsYWJlbF09XCJjb250cm9sPy5jaGVja2JveExhYmVsXCJcbiAgICAgICAgICBbdG9vbHRpcF09XCJjb250cm9sPy50b29sdGlwXCJcbiAgICAgICAgICBbdG9vbHRpcFBvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBQb3NpdGlvblwiXG4gICAgICAgICAgW3Rvb2x0aXBTaXplXT1cImNvbnRyb2w/LnRvb2x0aXBTaXplXCJcbiAgICAgICAgICBbdG9vbHRpcFByZWxpbmVdPVwiY29udHJvbD8udG9vbHRpcFByZWxpbmVcIlxuICAgICAgICAgIFtyZW1vdmVUb29sdGlwQXJyb3ddPVwiY29udHJvbD8ucmVtb3ZlVG9vbHRpcEFycm93XCJcbiAgICAgICAgICBbdG9vbHRpcEF1dG9Qb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwQXV0b1Bvc2l0aW9uXCJcbiAgICAgICAgICBbbGF5b3V0T3B0aW9uc109XCJjb250cm9sPy5sYXlvdXRPcHRpb25zXCJcbiAgICAgICAgPjwvbm92by1jaGVja2JveD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8IS0tQ2hlY2tsaXN0LS0+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cImNoZWNrbGlzdFwiIGxldC1jb250cm9sIGxldC1mb3JtPVwiZm9ybVwiIGxldC1lcnJvcnM9XCJlcnJvcnNcIiBsZXQtbWV0aG9kcz1cIm1ldGhvZHNcIj5cbiAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICAgIDxub3ZvLWNoZWNrLWxpc3RcbiAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICBbbmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW29wdGlvbnNdPVwiY29udHJvbD8ub3B0aW9uc1wiXG4gICAgICAgICAgW3Rvb2x0aXBdPVwiY29udHJvbD8udG9vbHRpcFwiXG4gICAgICAgICAgW3Rvb2x0aXBQb3NpdGlvbl09XCJjb250cm9sPy50b29sdGlwUG9zaXRpb25cIlxuICAgICAgICAgIFt0b29sdGlwU2l6ZV09XCJjb250cm9sPy50b29sdGlwU2l6ZVwiXG4gICAgICAgICAgW3Rvb2x0aXBQcmVsaW5lXT1cImNvbnRyb2w/LnRvb2x0aXBQcmVsaW5lXCJcbiAgICAgICAgICBbcmVtb3ZlVG9vbHRpcEFycm93XT1cImNvbnRyb2w/LnJlbW92ZVRvb2x0aXBBcnJvd1wiXG4gICAgICAgICAgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiXG4gICAgICAgICAgKG9uU2VsZWN0KT1cIm1ldGhvZHMubW9kZWxDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgID48L25vdm8tY2hlY2stbGlzdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8IS0tUXVpY2tOb3RlLS0+XG4gICAgPG5nLXRlbXBsYXRlIG5vdm9UZW1wbGF0ZT1cInF1aWNrLW5vdGVcIiBsZXQtY29udHJvbCBsZXQtZm9ybT1cImZvcm1cIiBsZXQtZXJyb3JzPVwiZXJyb3JzXCIgbGV0LW1ldGhvZHM9XCJtZXRob2RzXCI+XG4gICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICA8bm92by1xdWljay1ub3RlXG4gICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sLmtleVwiXG4gICAgICAgICAgW3N0YXJ0dXBGb2N1c109XCJjb250cm9sPy5zdGFydHVwRm9jdXNcIlxuICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb250cm9sPy5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgW2NvbmZpZ109XCJjb250cm9sPy5jb25maWdcIlxuICAgICAgICAgIChjaGFuZ2UpPVwibWV0aG9kcy5tb2RlbENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICBbdG9vbHRpcF09XCJjb250cm9sPy50b29sdGlwXCJcbiAgICAgICAgICBbdG9vbHRpcFBvc2l0aW9uXT1cImNvbnRyb2w/LnRvb2x0aXBQb3NpdGlvblwiXG4gICAgICAgICAgW3Rvb2x0aXBTaXplXT1cImNvbnRyb2w/LnRvb2x0aXBTaXplXCJcbiAgICAgICAgICBbcmVtb3ZlVG9vbHRpcEFycm93XT1cImNvbnRyb2w/LnJlbW92ZVRvb2x0aXBBcnJvd1wiXG4gICAgICAgICAgW3Rvb2x0aXBBdXRvUG9zaXRpb25dPVwiY29udHJvbD8udG9vbHRpcEF1dG9Qb3NpdGlvblwiXG4gICAgICAgICAgW3Rvb2x0aXBQcmVsaW5lXT1cImNvbnRyb2w/LnRvb2x0aXBQcmVsaW5lXCJcbiAgICAgICAgPjwvbm92by1xdWljay1ub3RlPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NvbnRyb2xUZW1wbGF0ZXMgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZHJlbihOb3ZvVGVtcGxhdGUpXG4gIGRlZmF1bHRUZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxOb3ZvVGVtcGxhdGU+O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRlbXBsYXRlczogTm92b1RlbXBsYXRlU2VydmljZSkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVmYXVsdFRlbXBsYXRlcyAmJiB0aGlzLmRlZmF1bHRUZW1wbGF0ZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRlZmF1bHRUZW1wbGF0ZXMuZm9yRWFjaCgodGVtcGxhdGU6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnRlbXBsYXRlcy5hZGREZWZhdWx0KHRlbXBsYXRlLm5hbWUsIHRlbXBsYXRlLnRlbXBsYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19