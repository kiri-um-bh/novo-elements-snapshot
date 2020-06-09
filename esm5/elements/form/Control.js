import { __extends, __values } from "tslib";
// NG2
import { ChangeDetectorRef, Component, Input, Output, ElementRef, EventEmitter, Directive, HostListener, LOCALE_ID, Inject, } from '@angular/core';
// Vendor
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
// APP
import { OutsideClick } from '../../utils/outside-click/OutsideClick';
import { NovoLabelService } from '../../services/novo-label-service';
import { Helpers } from '../../utils/Helpers';
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
import { DateFormatService } from '../../services/date-format/DateFormat';
import { FieldInteractionApi } from './FieldInteractionApi';
import { NovoTemplateService } from '../../services/template/NovoTemplateService';
import * as i0 from "@angular/core";
import * as i1 from "../../services/novo-label-service";
import * as i2 from "../../services/date-format/DateFormat";
import * as i3 from "./FieldInteractionApi";
import * as i4 from "../../services/template/NovoTemplateService";
import * as i5 from "../tooltip/Tooltip.directive";
import * as i6 from "@angular/common";
import * as i7 from "../tip-well/TipWell";
var _c0 = function (a0) { return { "encrypted": a0 }; };
function NovoControlElement_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx_r0.form.controls[ctx_r0.control.key].encrypted));
    i0.ɵɵattribute("for", ctx_r0.control.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.form.controls[ctx_r0.control.key].label, " ");
} }
function NovoControlElement_label_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("novo-control-empty", !ctx_r1.hasValue)("novo-control-focused", ctx_r1.focused)("novo-control-filled", ctx_r1.hasValue)("novo-control-always-active", ctx_r1.alwaysActive || ctx_r1.form.controls[ctx_r1.control.key].placeholder)("novo-control-extra-spacing", ctx_r1.requiresExtraSpacing);
    i0.ɵɵattribute("for", ctx_r1.control.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.form.controls[ctx_r1.control.key].label, " ");
} }
var _c1 = function (a0, a1) { return { "bhi-circle": a0, "bhi-check": a1 }; };
function NovoControlElement_i_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 15);
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("required-indicator ", ctx_r2.form.controls[ctx_r2.control.key].controlType, "");
    i0.ɵɵproperty("hidden", !ctx_r2.form.controls[ctx_r2.control.key].required || ctx_r2.form.controls[ctx_r2.control.key].readOnly)("ngClass", i0.ɵɵpureFunction2(5, _c1, !ctx_r2.isValid, ctx_r2.isValid));
} }
function NovoControlElement_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NovoControlElement_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NovoControlElement_ng_container_10_ng_container_1_Template, 1, 0, "ng-container", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.templates[ctx_r3.form.controls[ctx_r3.control.key].controlType])("ngTemplateOutletContext", ctx_r3.templateContext);
} }
function NovoControlElement_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 17);
    i0.ɵɵelement(2, "input", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function NovoControlElement_div_12_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 25);
} }
function NovoControlElement_div_12_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(2, 2, ctx_r10.form.controls[ctx_r10.control.key].label), " ", ctx_r10.labels.isRequired, "");
} }
function NovoControlElement_div_12_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate3("", i0.ɵɵpipeBind1(2, 3, ctx_r11.form.controls[ctx_r11.control.key].label), " ", ctx_r11.labels.minLength, " ", ctx_r11.form.controls[ctx_r11.control.key].minlength, "");
} }
function NovoControlElement_div_12_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r12.labels.maxlengthMet(ctx_r12.form.controls[ctx_r12.control.key].maxlength));
} }
function NovoControlElement_div_12_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r13.labels.invalidMaxlength(ctx_r13.form.controls[ctx_r13.control.key].maxlength));
} }
function NovoControlElement_div_12_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r14.labels.maxRecordsReached);
} }
function NovoControlElement_div_12_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(2, 2, ctx_r15.form.controls[ctx_r15.control.key].label), " ", ctx_r15.labels.invalidEmail, "");
} }
function NovoControlElement_div_12_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(2, 2, ctx_r16.form.controls[ctx_r16.control.key].label), " ", ctx_r16.labels.isTooLarge, "");
} }
function NovoControlElement_div_12_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(2, 2, ctx_r17.form.controls[ctx_r17.control.key].label), " ", ctx_r17.labels.notValidYear, "");
} }
function NovoControlElement_div_12_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r18.errors.custom);
} }
function NovoControlElement_div_12_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r19.labels.invalidMaxlengthWithField(ctx_r19.control.config[ctx_r19.maxlengthErrorField] == null ? null : ctx_r19.control.config[ctx_r19.maxlengthErrorField].label, ctx_r19.control.config[ctx_r19.maxlengthErrorField] == null ? null : ctx_r19.control.config[ctx_r19.maxlengthErrorField].maxlength), " ");
} }
function NovoControlElement_div_12_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r20.labels.maxlengthMetWithField(ctx_r20.control.config[ctx_r20.maxlengthMetField] == null ? null : ctx_r20.control.config[ctx_r20.maxlengthMetField].label, ctx_r20.control.config[ctx_r20.maxlengthMetField] == null ? null : ctx_r20.control.config[ctx_r20.maxlengthMetField].maxlength), " ");
} }
function NovoControlElement_div_12_span_14_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var invalidAddressField_r27 = ctx.$implicit;
    var ctx_r26 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(2, 2, invalidAddressField_r27), " ", ctx_r26.labels.isRequired, " ");
} }
function NovoControlElement_div_12_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, NovoControlElement_div_12_span_14_span_1_Template, 3, 4, "span", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r21.errors == null ? null : ctx_r21.errors.invalidAddressFields);
} }
function NovoControlElement_div_12_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r22.form.controls[ctx_r22.control.key].description, " ");
} }
function NovoControlElement_div_12_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r23.form.controls[ctx_r23.control.key].warning);
} }
function NovoControlElement_div_12_span_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("error", (ctx_r24.errors == null ? null : ctx_r24.errors.maxlength) && !(ctx_r24.errors == null ? null : ctx_r24.errors.maxlengthFields) || (ctx_r24.errors == null ? null : ctx_r24.errors.maxlength) && (ctx_r24.errors == null ? null : ctx_r24.errors.maxlengthFields) && ctx_r24.errors.maxlengthFields.includes(ctx_r24.focusedField));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", ctx_r24.itemCount, "/", ctx_r24.maxLength || ctx_r24.form.controls[ctx_r24.control.key].maxlength, "");
} }
function NovoControlElement_div_12_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("zero-count", ctx_r25.itemCount === 0)("row-picker", ctx_r25.form.controls[ctx_r25.control.key].config.columns);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", ctx_r25.itemCount, "/", ctx_r25.maxLength || ctx_r25.form.controls[ctx_r25.control.key].maxlength, "");
} }
function NovoControlElement_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵtemplate(2, NovoControlElement_div_12_span_2_Template, 1, 0, "span", 20);
    i0.ɵɵtemplate(3, NovoControlElement_div_12_span_3_Template, 3, 4, "span", 20);
    i0.ɵɵtemplate(4, NovoControlElement_div_12_span_4_Template, 3, 5, "span", 20);
    i0.ɵɵtemplate(5, NovoControlElement_div_12_span_5_Template, 2, 1, "span", 20);
    i0.ɵɵtemplate(6, NovoControlElement_div_12_span_6_Template, 2, 1, "span", 20);
    i0.ɵɵtemplate(7, NovoControlElement_div_12_span_7_Template, 2, 1, "span", 20);
    i0.ɵɵtemplate(8, NovoControlElement_div_12_span_8_Template, 3, 4, "span", 20);
    i0.ɵɵtemplate(9, NovoControlElement_div_12_span_9_Template, 3, 4, "span", 20);
    i0.ɵɵtemplate(10, NovoControlElement_div_12_span_10_Template, 3, 4, "span", 9);
    i0.ɵɵtemplate(11, NovoControlElement_div_12_span_11_Template, 2, 1, "span", 20);
    i0.ɵɵtemplate(12, NovoControlElement_div_12_span_12_Template, 2, 1, "span", 20);
    i0.ɵɵtemplate(13, NovoControlElement_div_12_span_13_Template, 2, 1, "span", 20);
    i0.ɵɵtemplate(14, NovoControlElement_div_12_span_14_Template, 2, 1, "span", 9);
    i0.ɵɵtemplate(15, NovoControlElement_div_12_span_15_Template, 2, 1, "span", 21);
    i0.ɵɵtemplate(16, NovoControlElement_div_12_span_16_Template, 2, 1, "span", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(17, NovoControlElement_div_12_span_17_Template, 2, 4, "span", 23);
    i0.ɵɵtemplate(18, NovoControlElement_div_12_span_18_Template, 2, 6, "span", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("field-message ", ctx_r5.form.controls[ctx_r5.control.key].controlType, "");
    i0.ɵɵclassProp("has-tip", ctx_r5.form.controls[ctx_r5.control.key].tipWell);
    i0.ɵɵproperty("ngClass", ctx_r5.showErrorState || ctx_r5.showMaxLengthMetMessage ? "error-shown" : "error-hidden");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r5.showMessages ? "count-shown messages-shown" : "count-hidden messages-hidden");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showFieldMessage);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isDirty && (ctx_r5.errors == null ? null : ctx_r5.errors.required) && ctx_r5.form.controls[ctx_r5.control.key].controlType !== "address");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isDirty && (ctx_r5.errors == null ? null : ctx_r5.errors.minlength));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isDirty && ctx_r5.maxLengthMet && ctx_r5.focused && !(ctx_r5.errors == null ? null : ctx_r5.errors.maxlength) && ctx_r5.form.controls[ctx_r5.control.key].controlType !== "picker");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r5.errors == null ? null : ctx_r5.errors.maxlength) && ctx_r5.focused && !(ctx_r5.errors == null ? null : ctx_r5.errors.maxlengthFields));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.maxLengthMet && ctx_r5.form.controls[ctx_r5.control.key].controlType === "picker");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isDirty && (ctx_r5.errors == null ? null : ctx_r5.errors.invalidEmail));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isDirty && ((ctx_r5.errors == null ? null : ctx_r5.errors.integerTooLarge) || (ctx_r5.errors == null ? null : ctx_r5.errors.doubleTooLarge)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isDirty && (ctx_r5.errors == null ? null : ctx_r5.errors.minYear));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isDirty && (ctx_r5.errors == null ? null : ctx_r5.errors.custom));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r5.errors == null ? null : ctx_r5.errors.maxlength) && (ctx_r5.errors == null ? null : ctx_r5.errors.maxlengthFields) && ctx_r5.maxlengthErrorField && ctx_r5.focused);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isDirty && ctx_r5.maxlengthMetField && ctx_r5.focused && !(ctx_r5.errors == null ? null : ctx_r5.errors.maxlengthFields == null ? null : ctx_r5.errors.maxlengthFields.includes(ctx_r5.maxlengthMetField)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.isDirty && (ctx_r5.errors == null ? null : ctx_r5.errors.invalidAddress));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.form.controls[ctx_r5.control.key].description);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.form.controls[ctx_r5.control.key].warning);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showCount && ctx_r5.form.controls[ctx_r5.control.key].controlType !== "picker");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showCount && ctx_r5.form.controls[ctx_r5.control.key].controlType === "picker");
} }
function NovoControlElement_novo_tip_well_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-tip-well", 31);
} if (rf & 2) {
    var ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("name", ctx_r6.control.key)("tip", ctx_r6.form.controls[ctx_r6.control.key] == null ? null : ctx_r6.form.controls[ctx_r6.control.key].tipWell == null ? null : ctx_r6.form.controls[ctx_r6.control.key].tipWell.tip)("icon", ctx_r6.form.controls[ctx_r6.control.key] == null ? null : ctx_r6.form.controls[ctx_r6.control.key].tipWell == null ? null : ctx_r6.form.controls[ctx_r6.control.key].tipWell.icon)("button", ctx_r6.form.controls[ctx_r6.control.key] == null ? null : ctx_r6.form.controls[ctx_r6.control.key].tipWell == null ? null : ctx_r6.form.controls[ctx_r6.control.key].tipWell.button)("sanitize", ctx_r6.form.controls[ctx_r6.control.key] == null ? null : ctx_r6.form.controls[ctx_r6.control.key].tipWell == null ? null : ctx_r6.form.controls[ctx_r6.control.key].tipWell.sanitize);
} }
function NovoControlElement_i_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "i", 32);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 33);
    i0.ɵɵelementStart(2, "style", 34);
    i0.ɵɵtext(3, " .spinner { fill:#FFFFFF; } ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "path", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var NovoAutoSize = /** @class */ (function () {
    function NovoAutoSize(element) {
        this.element = element;
    }
    NovoAutoSize.prototype.onInput = function (textArea) {
        this.adjust();
    };
    NovoAutoSize.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.adjust();
        });
    };
    NovoAutoSize.prototype.adjust = function () {
        var nativeElement = this.element.nativeElement;
        nativeElement.style.height = nativeElement.style.minHeight;
        nativeElement.style.height = nativeElement.scrollHeight + "px";
    };
    NovoAutoSize.ɵfac = function NovoAutoSize_Factory(t) { return new (t || NovoAutoSize)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    NovoAutoSize.ɵdir = i0.ɵɵdefineDirective({ type: NovoAutoSize, selectors: [["textarea", "autosize", ""]], hostBindings: function NovoAutoSize_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("input", function NovoAutoSize_input_HostBindingHandler($event) { return ctx.onInput($event.target); });
        } } });
    return NovoAutoSize;
}());
export { NovoAutoSize };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoAutoSize, [{
        type: Directive,
        args: [{
                selector: 'textarea[autosize]',
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { onInput: [{
            type: HostListener,
            args: ['input', ['$event.target']]
        }] }); })();
// undo all template context references!
var NovoControlElement = /** @class */ (function (_super) {
    __extends(NovoControlElement, _super);
    function NovoControlElement(element, labels, dateFormatService, fieldInteractionApi, templateService, changeDetectorRef, locale) {
        if (locale === void 0) { locale = 'en-US'; }
        var _this = _super.call(this, element) || this;
        _this.labels = labels;
        _this.dateFormatService = dateFormatService;
        _this.fieldInteractionApi = fieldInteractionApi;
        _this.templateService = templateService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.locale = locale;
        _this.condensed = false;
        _this.autoFocus = false;
        _this.change = new EventEmitter();
        _this.edit = new EventEmitter();
        _this.save = new EventEmitter();
        _this.delete = new EventEmitter();
        _this.upload = new EventEmitter();
        _this.formattedValue = '';
        _this.maxLengthMet = false;
        _this.itemCount = 0;
        _this._blurEmitter = new EventEmitter();
        _this._focusEmitter = new EventEmitter();
        _this._focused = false;
        _this._enteredText = '';
        _this._showCount = false;
        _this.maxLengthMetErrorfields = [];
        _this.templates = {};
        _this.loading = false;
        return _this;
    }
    Object.defineProperty(NovoControlElement.prototype, "onBlur", {
        get: function () {
            return this._blurEmitter.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "onFocus", {
        get: function () {
            return this._focusEmitter.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "maxlengthMetField", {
        get: function () {
            var _this = this;
            if (this.maxLengthMetErrorfields && this.maxLengthMetErrorfields.length) {
                return this.maxLengthMetErrorfields.find(function (field) { return field === _this.focusedField; }) || '';
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "maxlengthErrorField", {
        get: function () {
            var _this = this;
            if (this.errors && this.errors.maxlengthFields && this.errors.maxlengthFields.length) {
                return this.errors.maxlengthFields.find(function (field) { return field === _this.focusedField; }) || '';
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "showFieldMessage", {
        get: function () {
            return !this.errors && !this.maxLengthMet && Helpers.isBlank(this.control.description);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "showMaxLengthMetMessage", {
        get: function () {
            return ((this.isDirty && this.maxLengthMet && this.focused && (!this.errors || (this.errors && !this.errors.maxlength))) ||
                (this.isDirty &&
                    this.maxlengthMetField &&
                    this.focused &&
                    (!this.errors || (this.errors && !this.errors.maxlengthFields.includes(this.maxlengthMetField)))));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "showErrorState", {
        get: function () {
            return ((this.isDirty && this.errors) ||
                (this.focused && this.errors && this.errors.maxlength && this.errors.maxlengthFields) ||
                (this.focused && this.errors && this.errors.maxlength && this.errors.maxlengthFields && this.maxlengthErrorField));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "showCount", {
        get: function () {
            var MAX_LENGTH_CONTROL_TYPES = ['textbox', 'picker', 'text-area'];
            var charCount = this.focused &&
                !!this.form.controls[this.control.key].maxlength &&
                MAX_LENGTH_CONTROL_TYPES.includes(this.form.controls[this.control.key].controlType);
            return this._showCount || charCount;
        },
        set: function (value) {
            this._showCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "showMessages", {
        get: function () {
            return (this.showCount ||
                !Helpers.isEmpty(this.form.controls[this.control.key].warning) ||
                !Helpers.isEmpty(this.form.controls[this.control.key].description));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "decimalSeparator", {
        get: function () {
            return new Intl.NumberFormat(this.locale).format(1.2)[1];
        },
        enumerable: true,
        configurable: true
    });
    NovoControlElement.prototype.ngAfterViewInit = function () {
        var _this = this;
        var DO_NOT_FOCUS_ME = ['picker', 'time', 'date', 'date-time'];
        if (this.autoFocus && !DO_NOT_FOCUS_ME.includes(this.control.controlType)) {
            setTimeout(function () {
                var input = _this.element.nativeElement.querySelector('input');
                if (input) {
                    input.focus();
                }
            });
        }
    };
    NovoControlElement.prototype.ngAfterContentInit = function () {
        var e_1, _a;
        var _this = this;
        // Subscribe to control interactions
        if (this.control.interactions && !this.form.controls[this.control.key].restrictFieldInteractions) {
            var _loop_1 = function (interaction) {
                switch (interaction.event) {
                    case 'blur':
                        this_1.valueChangeSubscription = this_1.onBlur.pipe(debounceTime(300)).subscribe(function () {
                            if (!_this.form.controls[_this.control.key].restrictFieldInteractions) {
                                _this.executeInteraction(interaction);
                            }
                        });
                        break;
                    case 'focus':
                        this_1.valueChangeSubscription = this_1.onFocus.pipe(debounceTime(300)).subscribe(function () {
                            if (!_this.form.controls[_this.control.key].restrictFieldInteractions) {
                                _this.executeInteraction(interaction);
                            }
                        });
                        break;
                    case 'change':
                        this_1.valueChangeSubscription = this_1.form.controls[this_1.control.key].valueChanges.pipe(debounceTime(300)).subscribe(function () {
                            if (!_this.form.controls[_this.control.key].restrictFieldInteractions) {
                                _this.executeInteraction(interaction);
                            }
                        });
                        break;
                    case 'init':
                        interaction.invokeOnInit = true;
                        break;
                    default:
                        break;
                }
                if (interaction.invokeOnInit) {
                    if (!this_1.form.controls[this_1.control.key].restrictFieldInteractions) {
                        this_1.executeInteraction(interaction);
                    }
                }
            };
            var this_1 = this;
            try {
                for (var _b = __values(this.control.interactions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var interaction = _c.value;
                    _loop_1(interaction);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        setTimeout(function () {
            _this.templates = _this.templateService.getAll();
            _this.loading = false;
            _this.changeDetectorRef.markForCheck();
        });
    };
    NovoControlElement.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        // Make sure to initially format the time controls
        if (this.control && this.form.controls[this.control.key].value) {
            if (this.form.controls[this.control.key].controlType === 'textbox' ||
                this.form.controls[this.control.key].controlType === 'text-area') {
                this.itemCount = this.form.controls[this.control.key].value.length;
            }
        }
        if (this.control) {
            // Listen to clear events
            this.forceClearSubscription = this.control.forceClear.subscribe(function () {
                _this.clearValue();
            });
            // For Asynchronous validations
            this.statusChangeSubscription = this.form.controls[this.control.key].statusChanges.subscribe(function (validity) {
                _this.form.controls[_this.control.key] = _this.templateContext.$implicit;
                if (validity !== 'PENDING' && _this.form.updateValueAndValidity) {
                    _this.form.updateValueAndValidity();
                }
            });
        }
        this.templateContext = {
            $implicit: this.form.controls[this.control.key],
            methods: {
                restrictKeys: this.restrictKeys.bind(this),
                emitChange: this.emitChange.bind(this),
                handleFocus: this.handleFocus.bind(this),
                handlePercentChange: this.handlePercentChange.bind(this),
                handleBlur: this.handleBlur.bind(this),
                handleTextAreaInput: this.handleTextAreaInput.bind(this),
                handleEdit: this.handleEdit.bind(this),
                handleSave: this.handleSave.bind(this),
                handleDelete: this.handleDelete.bind(this),
                handleUpload: this.handleUpload.bind(this),
                modelChange: this.modelChange.bind(this),
                modelChangeWithRaw: this.modelChangeWithRaw.bind(this),
                handleAddressChange: this.handleAddressChange.bind(this),
                handleTyping: this.handleTyping.bind(this),
                updateValidity: this.updateValidity.bind(this),
                toggleActive: this.toggleActive.bind(this),
                validateIntegerInput: this.validateIntegerInput.bind(this),
                validateNumberOnBlur: this.validateNumberOnBlur.bind(this),
            },
            form: this.form,
        };
        this.templateContext.$implicit.tooltipPosition = this.tooltipPosition;
        this.templateContext.$implicit.tooltip = this.tooltip;
        this.templateContext.$implicit.tooltipSize = this.tooltipSize;
        this.templateContext.$implicit.tooltipPreline = this.tooltipPreline;
        this.templateContext.$implicit.removeTooltipArrow = this.removeTooltipArrow;
        this.templateContext.$implicit.startupFocus = this.form.controls[this.control.key].startupFocus;
        this.templateContext.$implicit.fileBrowserImageUploadUrl = this.form.controls[this.control.key].fileBrowserImageUploadUrl;
        this.templateContext.$implicit.minimal = this.form.controls[this.control.key].minimal;
        this.templateContext.$implicit.currencyFormat = this.form.controls[this.control.key].currencyFormat;
        this.templateContext.$implicit.percentValue = this.form.controls[this.control.key].percentValue;
        this.templateContext.$implicit.config = this.form.controls[this.control.key].config;
        if (this.form.controls[this.control.key] && this.form.controls[this.control.key].subType === 'percentage') {
            if (!Helpers.isEmpty(this.form.controls[this.control.key].value)) {
                this.templateContext.$implicit.percentValue = Number((this.form.controls[this.control.key].value * 100).toFixed(6).replace(/\.?0*$/, ''));
            }
            this.percentChangeSubscription = this.form.controls[this.control.key].displayValueChanges.subscribe(function (value) {
                if (!Helpers.isEmpty(value)) {
                    _this.templateContext.$implicit.percentValue = Number((value * 100).toFixed(6).replace(/\.?0*$/, ''));
                }
            });
        }
    };
    NovoControlElement.prototype.ngOnDestroy = function () {
        // Unsubscribe from control interactions
        if (this.valueChangeSubscription) {
            this.valueChangeSubscription.unsubscribe();
        }
        // if (this.dateChangeSubscription) {
        //     this.dateChangeSubscription.unsubscribe();
        // }
        if (this.forceClearSubscription) {
            // Un-listen for clear events
            this.forceClearSubscription.unsubscribe();
        }
        if (this.percentChangeSubscription) {
            // Un-listen for clear events
            this.percentChangeSubscription.unsubscribe();
        }
        if (this.dateChangeSubscription) {
            this.dateChangeSubscription.unsubscribe();
        }
        if (this.statusChangeSubscription) {
            this.statusChangeSubscription.unsubscribe();
        }
        _super.prototype.ngOnDestroy.call(this);
    };
    Object.defineProperty(NovoControlElement.prototype, "errors", {
        get: function () {
            return this.form.controls[this.control.key].errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "isValid", {
        get: function () {
            return this.form.controls[this.control.key].valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "isDirty", {
        get: function () {
            return this.form.controls[this.control.key].dirty || this.control.dirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "hasValue", {
        get: function () {
            return !Helpers.isEmpty(this.form.value[this.control.key]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "focused", {
        get: function () {
            return this._focused;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "tooltip", {
        get: function () {
            return this.form.controls[this.control.key].tooltip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "tooltipPosition", {
        get: function () {
            if (Helpers.isBlank(this.form.controls[this.control.key].tooltipPosition)) {
                return 'right';
            }
            return this.form.controls[this.control.key].tooltipPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "tooltipSize", {
        get: function () {
            if (Helpers.isBlank(this.form.controls[this.control.key].tooltipSize)) {
                return '';
            }
            return this.form.controls[this.control.key].tooltipSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "tooltipPreline", {
        get: function () {
            if (Helpers.isBlank(this.form.controls[this.control.key].tooltipPreline)) {
                return false;
            }
            return this.form.controls[this.control.key].tooltipPreline;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "removeTooltipArrow", {
        get: function () {
            if (Helpers.isBlank(this.form.controls[this.control.key].removeTooltipArrow)) {
                return false;
            }
            return this.form.controls[this.control.key].removeTooltipArrow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "alwaysActive", {
        get: function () {
            // Controls that have the label active if there is any user entered text in the field
            if (this.form.controls[this.control.key].controlType === 'picker' && this._enteredText.length) {
                return true;
            }
            // Controls that always have the label active
            return ([
                'tiles',
                'checklist',
                'checkbox',
                'date',
                'time',
                'date-time',
                'address',
                'file',
                'editor',
                'ace-editor',
                'radio',
                'text-area',
                'quick-note',
            ].indexOf(this.form.controls[this.control.key].controlType) !== -1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlElement.prototype, "requiresExtraSpacing", {
        get: function () {
            // Chips
            if (this.form.controls[this.control.key].controlType === 'picker' && this.form.controls[this.control.key].multiple && this.hasValue) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    NovoControlElement.prototype.executeInteraction = function (interaction) {
        var _this = this;
        if (interaction.script && Helpers.isFunction(interaction.script)) {
            setTimeout(function () {
                _this.fieldInteractionApi.form = _this.form;
                _this.fieldInteractionApi.currentKey = _this.control.key;
                try {
                    interaction.script(_this.fieldInteractionApi, _this.control.key);
                }
                catch (err) {
                    console.info('Field Interaction Error!', _this.control.key); // tslint:disable-line
                    console.error(err); // tslint:disable-line
                }
            });
        }
    };
    NovoControlElement.prototype.handleTyping = function (event) {
        this._focused = event && event.length;
        this._enteredText = event;
    };
    NovoControlElement.prototype.handleFocus = function (event, field) {
        this._focused = true;
        this.focusedField = field;
        if (!Helpers.isBlank(this.characterCountField) && this.characterCountField === field) {
            this.showCount = true;
        }
        else if (this.form.controls[this.control.key].controlType === 'address' &&
            field &&
            !Helpers.isEmpty(this.form.value[this.control.key]) &&
            !Helpers.isBlank(this.form.value[this.control.key][field])) {
            this.handleAddressChange({ value: this.form.value[this.control.key][field], field: field });
        }
        this._focusEmitter.emit(event);
    };
    NovoControlElement.prototype.handleBlur = function (event) {
        this._focused = false;
        this.focusedField = '';
        this.showCount = false;
        this._blurEmitter.emit(event);
    };
    NovoControlElement.prototype.clearValue = function () {
        this.form.controls[this.control.key].setValue(null);
        this.formattedValue = null;
    };
    NovoControlElement.prototype.handleTextAreaInput = function (event) {
        this.emitChange(event);
        this.restrictKeys(event);
    };
    NovoControlElement.prototype.checkMaxLength = function (event) {
        if (this.control && this.form.controls[this.control.key].maxlength) {
            this.itemCount = event.target.value.length;
            this.maxLengthMet = event.target.value.length >= this.form.controls[this.control.key].maxlength;
        }
    };
    NovoControlElement.prototype.modelChangeWithRaw = function (event) {
        if (Helpers.isEmpty(event.value)) {
            this._focused = false;
            this._enteredText = '';
        }
        if (this.form.controls[this.control.key].controlType === 'picker' && this.form.controls[this.control.key].maxlength) {
            this.itemCount = event.value ? event.value.length : 0;
            this.maxLengthMet = this.itemCount >= this.form.controls[this.control.key].maxlength ? true : false;
        }
        this.form.controls[this.control.key].rawValue = event.rawValue;
        this.change.emit(event.value);
    };
    NovoControlElement.prototype.modelChange = function (value) {
        if (Helpers.isEmpty(value)) {
            this._focused = false;
            this._enteredText = '';
        }
        this.change.emit(value);
    };
    NovoControlElement.prototype.validateNumberOnBlur = function (event) {
        this._focused = false;
        this.focusedField = '';
        this.showCount = false;
        if (this.form.controls[this.control.key].subType === 'number') {
            this.validateIntegerInput();
        }
        this._blurEmitter.emit(event);
    };
    NovoControlElement.prototype.validateIntegerInput = function () {
        var NUMBERS_ONLY = /^[\d\-]\d*$/;
        if (this.form.controls[this.control.key].value && !NUMBERS_ONLY.test(this.form.controls[this.control.key].value)) {
            this.form.controls[this.control.key].markAsInvalid(this.labels.invalidIntegerInput + " " + this.form.controls[this.control.key].label.toUpperCase());
        }
    };
    NovoControlElement.prototype.restrictKeys = function (event) {
        var NUMBERS_ONLY = /[0-9\-]/;
        var NUMBERS_WITH_DECIMAL_DOT = /[0-9\.\-]/;
        var NUMBERS_WITH_DECIMAL_DOT_AND_COMMA = /[0-9\.\,\-]/;
        var UTILITY_KEYS = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
        var key = event.key;
        // Numbers or numbers and decimal characters only
        if (this.form.controls[this.control.key].subType === 'number' && !(NUMBERS_ONLY.test(key) || UTILITY_KEYS.includes(key))) {
            event.preventDefault();
        }
        else if (['currency', 'float', 'percentage'].includes(this.form.controls[this.control.key].subType) &&
            !((this.decimalSeparator === '.' && NUMBERS_WITH_DECIMAL_DOT.test(key)) ||
                (this.decimalSeparator === ',' && NUMBERS_WITH_DECIMAL_DOT_AND_COMMA.test(key)) ||
                UTILITY_KEYS.includes(key))) {
            event.preventDefault();
        }
        // Max Length
        if (this.form.controls[this.control.key].maxlength && event.target.value.length >= this.form.controls[this.control.key].maxlength) {
            event.preventDefault();
        }
    };
    NovoControlElement.prototype.handlePercentChange = function (event) {
        var value = event.target['value'];
        var percent = Helpers.isEmpty(value) ? null : Number((value / 100).toFixed(6).replace(/\.?0*$/, ''));
        if (!Helpers.isEmpty(percent)) {
            this.change.emit(percent);
            this.form.controls[this.control.key].setValue(percent);
        }
        else {
            this.change.emit(null);
            this.form.controls[this.control.key].setValue(null);
        }
    };
    NovoControlElement.prototype.handleTabForPickers = function (event) {
        if (this.active && event && event.keyCode) {
            if (event.keyCode === KeyCodes.ESC || event.keyCode === KeyCodes.TAB) {
                this.toggleActive(event, false);
            }
        }
    };
    NovoControlElement.prototype.emitChange = function (value) {
        this.change.emit(value);
        this.checkMaxLength(value);
    };
    NovoControlElement.prototype.handleEdit = function (value) {
        this.edit.emit(value);
    };
    NovoControlElement.prototype.handleSave = function (value) {
        this.save.emit(value);
    };
    NovoControlElement.prototype.handleDelete = function (value) {
        this.delete.emit(value);
    };
    NovoControlElement.prototype.handleUpload = function (value) {
        this.upload.emit(value);
    };
    NovoControlElement.prototype.handleAddressChange = function (data) {
        if (data &&
            !Helpers.isBlank(data.value) &&
            data.field &&
            this.control.config[data.field] &&
            !Helpers.isEmpty(this.control.config[data.field].maxlength)) {
            this.itemCount = data.value.length;
            this.characterCountField = data.field;
            this.maxLength = this.control.config[data.field].maxlength;
            this.showCount = true;
            if (this.maxLength === this.itemCount) {
                this.maxLengthMetErrorfields.push(data.field);
            }
            else {
                this.maxLengthMetErrorfields = this.maxLengthMetErrorfields.filter(function (field) { return field !== data.field; });
            }
        }
    };
    NovoControlElement.prototype.updateValidity = function (shouldEventBeEmitted) {
        var emitEvent = shouldEventBeEmitted ? true : false;
        this.form.controls[this.control.key].updateValueAndValidity({ emitEvent: emitEvent });
    };
    NovoControlElement.ɵfac = function NovoControlElement_Factory(t) { return new (t || NovoControlElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i2.DateFormatService), i0.ɵɵdirectiveInject(i3.FieldInteractionApi), i0.ɵɵdirectiveInject(i4.NovoTemplateService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(LOCALE_ID)); };
    NovoControlElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoControlElement, selectors: [["novo-control"]], hostVars: 12, hostBindings: function NovoControlElement_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("data-control-type", ctx.form.controls[ctx.control.key].controlType)("data-control-key", ctx.control.key);
            i0.ɵɵclassMap(ctx.form.controls[ctx.control.key].controlType);
            i0.ɵɵclassProp("disabled", ctx.form.controls[ctx.control.key].readOnly)("hidden", ctx.form.controls[ctx.control.key].hidden)("inline-embedded", ctx.control.isInlineEmbedded)("embedded", ctx.control.isEmbedded);
        } }, inputs: { control: "control", form: "form", condensed: "condensed", autoFocus: "autoFocus" }, outputs: { change: "change", edit: "edit", save: "save", delete: "delete", upload: "upload", onBlur: "blur", onFocus: "focus" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 15, vars: 24, consts: [[1, "novo-control-container", 3, "hidden"], [3, "tooltip", "tooltipPosition"], [1, "bhi-lock", 3, "hidden"], [3, "ngClass", 4, "ngIf"], [1, "novo-control-outer-container"], ["class", "novo-control-label", 3, "novo-control-empty", "novo-control-focused", "novo-control-filled", "novo-control-always-active", "novo-control-extra-spacing", 4, "ngIf"], [1, "novo-control-inner-container"], [1, "novo-control-inner-input-container"], [3, "hidden", "class", "ngClass", 4, "ngIf"], [4, "ngIf"], [3, "class", "has-tip", "ngClass", 4, "ngIf"], [3, "name", "tip", "icon", "button", "sanitize", 4, "ngIf"], ["class", "loading", 4, "ngIf"], [3, "ngClass"], [1, "novo-control-label"], [3, "hidden", "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "novo-control-input-container", "novo-control-input-with-label"], ["type", "text"], [1, "messages", 3, "ngClass"], ["class", "error-text", 4, "ngIf"], ["class", "description", 4, "ngIf"], ["class", "warning-text", 4, "ngIf"], ["class", "character-count", 3, "error", 4, "ngIf"], ["class", "record-count", 3, "zero-count", "row-picker", 4, "ngIf"], [1, "error-text"], ["class", "error-text", 4, "ngFor", "ngForOf"], [1, "description"], [1, "warning-text"], [1, "character-count"], [1, "record-count"], [3, "name", "tip", "icon", "button", "sanitize"], [1, "loading"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xmlns", "a", "http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/", "x", "0px", "y", "0px", "width", "18.2px", "height", "18.5px", "viewBox", "0 0 18.2 18.5", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 18.2 18.5"], ["type", "text/css"], ["d", "M9.2,18.5C4.1,18.5,0,14.4,0,9.2S4.1,0,9.2,0c0.9,0,1.9,0.1,2.7,0.4c0.8,0.2,1.2,1.1,1,1.9\n                            c-0.2,0.8-1.1,1.2-1.9,1C10.5,3.1,9.9,3,9.2,3C5.8,3,3,5.8,3,9.2s2.8,6.2,6.2,6.2c2.8,0,5.3-1.9,6-4.7c0.2-0.8,1-1.3,1.8-1.1\n                            c0.8,0.2,1.3,1,1.1,1.8C17.1,15.7,13.4,18.5,9.2,18.5z", 1, "spinner"]], template: function NovoControlElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "span", 1);
            i0.ɵɵelement(2, "i", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, NovoControlElement_label_3_Template, 2, 5, "label", 3);
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵtemplate(5, NovoControlElement_label_5_Template, 2, 12, "label", 5);
            i0.ɵɵelementStart(6, "div", 6);
            i0.ɵɵelementStart(7, "div", 7);
            i0.ɵɵtemplate(8, NovoControlElement_i_8_Template, 1, 8, "i", 8);
            i0.ɵɵelementStart(9, "div");
            i0.ɵɵtemplate(10, NovoControlElement_ng_container_10_Template, 2, 2, "ng-container", 9);
            i0.ɵɵtemplate(11, NovoControlElement_ng_container_11_Template, 3, 0, "ng-container", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, NovoControlElement_div_12_Template, 19, 24, "div", 10);
            i0.ɵɵtemplate(13, NovoControlElement_novo_tip_well_13_Template, 1, 5, "novo-tip-well", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(14, NovoControlElement_i_14_Template, 5, 0, "i", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("hidden", ctx.form.controls[ctx.control.key].hidden || ctx.form.controls[ctx.control.key].type === "hidden" || ctx.form.controls[ctx.control.key].controlType === "hidden");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("tooltip", ctx.labels.encryptedFieldTooltip)("tooltipPosition", "right");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("hidden", !ctx.form.controls[ctx.control.key].encrypted);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.form.layout !== "vertical" && ctx.form.controls[ctx.control.key].label && !ctx.condensed);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.form.layout === "vertical" && ctx.form.controls[ctx.control.key].label && !ctx.condensed);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("required", ctx.form.controls[ctx.control.key].required && !ctx.form.controls[ctx.control.key].readOnly);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("novo-control-filled", ctx.hasValue)("novo-control-empty", !ctx.hasValue);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.condensed || ctx.form.controls[ctx.control.key].required);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("novo-control-input ", ctx.form.controls[ctx.control.key].controlType, "");
            i0.ɵɵclassProp("control-disabled", ctx.form.controls[ctx.control.key].disabled);
            i0.ɵɵattribute("data-automation-id", ctx.control.key);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.templates);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.templates || ctx.loading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.condensed);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.form.controls[ctx.control.key].tipWell);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.form.controls[ctx.control.key].fieldInteractionloading);
        } }, directives: [i5.TooltipDirective, i6.NgIf, i6.NgClass, i6.NgTemplateOutlet, i6.NgForOf, i7.NovoTipWellElement], pipes: [i6.UpperCasePipe], encapsulation: 2 });
    return NovoControlElement;
}(OutsideClick));
export { NovoControlElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoControlElement, [{
        type: Component,
        args: [{
                selector: 'novo-control',
                template: "\n        <div class=\"novo-control-container\" [hidden]=\"form.controls[control.key].hidden || form.controls[control.key].type === 'hidden' || form.controls[control.key].controlType === 'hidden'\">\n            <!--Encrypted Field-->\n            <span [tooltip]=\"labels.encryptedFieldTooltip\" [tooltipPosition]=\"'right'\"><i [hidden]=\"!form.controls[control.key].encrypted\"\n            class=\"bhi-lock\"></i></span>\n            <!--Label (for horizontal)-->\n            <label [attr.for]=\"control.key\" *ngIf=\"form.layout !== 'vertical' && form.controls[control.key].label && !condensed\" [ngClass]=\"{'encrypted': form.controls[control.key].encrypted }\">\n                {{ form.controls[control.key].label }}\n            </label>\n            <div class=\"novo-control-outer-container\">\n                <!--Label (for vertical)-->\n                <label\n                    *ngIf=\"form.layout === 'vertical' && form.controls[control.key].label && !condensed\"\n                    class=\"novo-control-label\"\n                    [attr.for]=\"control.key\"\n                    [class.novo-control-empty]=\"!hasValue\"\n                    [class.novo-control-focused]=\"focused\"\n                    [class.novo-control-filled]=\"hasValue\"\n                    [class.novo-control-always-active]=\"alwaysActive || form.controls[control.key].placeholder\"\n                    [class.novo-control-extra-spacing]=\"requiresExtraSpacing\">\n                    {{ form.controls[control.key].label }}\n                </label>\n                <div class=\"novo-control-inner-container\" [class.required]=\"form.controls[control.key].required && !form.controls[control.key].readOnly\">\n                    <div class=\"novo-control-inner-input-container\" [class.novo-control-filled]=\"hasValue\" [class.novo-control-empty]=\"!hasValue\">\n                      <!--Required Indicator-->\n                        <i [hidden]=\"!form.controls[control.key].required || form.controls[control.key].readOnly\"\n                            class=\"required-indicator {{ form.controls[control.key].controlType }}\"\n                            [ngClass]=\"{'bhi-circle': !isValid, 'bhi-check': isValid}\" *ngIf=\"!condensed || form.controls[control.key].required\">\n                        </i>\n                        <!--Form Controls-->\n                        <div class=\"novo-control-input {{ form.controls[control.key].controlType }}\" [attr.data-automation-id]=\"control.key\" [class.control-disabled]=\"form.controls[control.key].disabled\">\n                            <!--TODO prefix/suffix on the control-->\n                            <ng-container *ngIf=\"templates\">\n                              <ng-container *ngTemplateOutlet=\"templates[form.controls[control.key].controlType]; context: templateContext\"></ng-container>\n                            </ng-container>\n                            <ng-container *ngIf=\"!templates || loading\">\n                                <div class=\"novo-control-input-container novo-control-input-with-label\">\n                                  <input type=\"text\"/>\n                                </div>\n                            </ng-container>\n                        </div>\n                    </div>\n                    <!--Error Message-->\n                    <div class=\"field-message {{ form.controls[control.key].controlType }}\" *ngIf=\"!condensed\" [class.has-tip]=\"form.controls[control.key].tipWell\" [ngClass]=\"showErrorState || showMaxLengthMetMessage ? 'error-shown' : 'error-hidden'\">\n                        <div class=\"messages\" [ngClass]=\"showMessages ? 'count-shown messages-shown' : 'count-hidden messages-hidden'\">\n                            <span class=\"error-text\" *ngIf=\"showFieldMessage\"></span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && errors?.required && form.controls[control.key].controlType !== 'address'\">{{ form.controls[control.key].label | uppercase }} {{ labels.isRequired }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && errors?.minlength\">{{ form.controls[control.key].label | uppercase }} {{ labels.minLength }} {{ form.controls[control.key].minlength }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && maxLengthMet && focused && !errors?.maxlength && form.controls[control.key].controlType !== 'picker'\">{{ labels.maxlengthMet(form.controls[control.key].maxlength) }}</span>\n                            <span class=\"error-text\" *ngIf=\"errors?.maxlength && focused && !errors?.maxlengthFields\">{{ labels.invalidMaxlength(form.controls[control.key].maxlength) }}</span>\n                            <span class=\"error-text\" *ngIf=\"maxLengthMet && form.controls[control.key].controlType === 'picker'\">{{ labels.maxRecordsReached }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && errors?.invalidEmail\">{{ form.controls[control.key].label | uppercase }} {{ labels.invalidEmail }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && (errors?.integerTooLarge || errors?.doubleTooLarge)\">{{ form.controls[control.key].label | uppercase }} {{ labels.isTooLarge }}</span>\n                            <span *ngIf=\"isDirty && errors?.minYear\">{{ form.controls[control.key].label | uppercase }} {{ labels.notValidYear }}</span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && (errors?.custom)\">{{ errors.custom }}</span>\n                            <span class=\"error-text\" *ngIf=\"errors?.maxlength && errors?.maxlengthFields && maxlengthErrorField && focused\">\n                                {{ labels.invalidMaxlengthWithField(control.config[maxlengthErrorField]?.label, control.config[maxlengthErrorField]?.maxlength) }}\n                            </span>\n                            <span class=\"error-text\" *ngIf=\"isDirty && maxlengthMetField && focused && !errors?.maxlengthFields?.includes(maxlengthMetField)\">\n                              {{ labels.maxlengthMetWithField(control.config[maxlengthMetField]?.label, control.config[maxlengthMetField]?.maxlength) }}\n                            </span>\n                            <span *ngIf=\"isDirty && errors?.invalidAddress\">\n                                <span class=\"error-text\" *ngFor=\"let invalidAddressField of errors?.invalidAddressFields\">{{ invalidAddressField | uppercase }} {{ labels.isRequired }} </span>\n                            </span>\n                            <!--Field Hint-->\n                            <span class=\"description\" *ngIf=\"form.controls[control.key].description\">\n                                {{ form.controls[control.key].description }}\n                            </span>\n                            <span class=\"warning-text\" *ngIf=\"form.controls[control.key].warning\">{{ form.controls[control.key].warning }}</span>\n\n                        </div>\n                        <span class=\"character-count\" [class.error]=\"((errors?.maxlength && !errors?.maxlengthFields) || (errors?.maxlength && errors?.maxlengthFields && errors.maxlengthFields.includes(focusedField)))\" *ngIf=\"showCount && form.controls[control.key].controlType !== 'picker'\">{{ itemCount }}/{{ maxLength || form.controls[control.key].maxlength }}</span>\n                        <span class=\"record-count\" [class.zero-count]=\"itemCount === 0\" [class.row-picker]=\"form.controls[this.control.key].config.columns\" *ngIf=\"showCount && form.controls[control.key].controlType === 'picker'\">{{ itemCount }}/{{ maxLength || form.controls[control.key].maxlength }}</span>\n                    </div>\n                    <!--Tip Wel-->\n                    <novo-tip-well *ngIf=\"form.controls[control.key].tipWell\" [name]=\"control.key\" [tip]=\"form.controls[control.key]?.tipWell?.tip\" [icon]=\"form.controls[control.key]?.tipWell?.icon\" [button]=\"form.controls[control.key]?.tipWell?.button\" [sanitize]=\"form.controls[control.key]?.tipWell?.sanitize\"></novo-tip-well>\n                </div>\n                <i *ngIf=\"form.controls[control.key].fieldInteractionloading\" class=\"loading\">\n                    <svg version=\"1.1\"\n                     xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n                     x=\"0px\" y=\"0px\" width=\"18.2px\" height=\"18.5px\" viewBox=\"0 0 18.2 18.5\" style=\"enable-background:new 0 0 18.2 18.5;\"\n                     xml:space=\"preserve\">\n                    <style type=\"text/css\">\n                        .spinner { fill:#FFFFFF; }\n                    </style>\n                        <path class=\"spinner\" d=\"M9.2,18.5C4.1,18.5,0,14.4,0,9.2S4.1,0,9.2,0c0.9,0,1.9,0.1,2.7,0.4c0.8,0.2,1.2,1.1,1,1.9\n                            c-0.2,0.8-1.1,1.2-1.9,1C10.5,3.1,9.9,3,9.2,3C5.8,3,3,5.8,3,9.2s2.8,6.2,6.2,6.2c2.8,0,5.3-1.9,6-4.7c0.2-0.8,1-1.3,1.8-1.1\n                            c0.8,0.2,1.3,1,1.1,1.8C17.1,15.7,13.4,18.5,9.2,18.5z\"/>\n                    </svg>\n                </i>\n            </div>\n        </div>\n    ",
                host: {
                    '[class]': 'form.controls[control.key].controlType',
                    '[attr.data-control-type]': 'form.controls[control.key].controlType',
                    '[class.disabled]': 'form.controls[control.key].readOnly',
                    '[class.hidden]': 'form.controls[control.key].hidden',
                    '[attr.data-control-key]': 'control.key',
                    '[class.inline-embedded]': 'control.isInlineEmbedded',
                    '[class.embedded]': 'control.isEmbedded',
                },
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NovoLabelService }, { type: i2.DateFormatService }, { type: i3.FieldInteractionApi }, { type: i4.NovoTemplateService }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, { control: [{
            type: Input
        }], form: [{
            type: Input
        }], condensed: [{
            type: Input
        }], autoFocus: [{
            type: Input
        }], change: [{
            type: Output
        }], edit: [{
            type: Output
        }], save: [{
            type: Output
        }], delete: [{
            type: Output
        }], upload: [{
            type: Output
        }], onBlur: [{
            type: Output,
            args: ['blur']
        }], onFocus: [{
            type: Output,
            args: ['focus']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0NvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU07QUFDTixPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixZQUFZLEVBR1osU0FBUyxFQUNULFlBQVksRUFHWixTQUFTLEVBQ1QsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLFNBQVM7QUFDVCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxNQUFNO0FBQ04sT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7Ozs7Ozs7O0lBd0N0RSxpQ0FDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBUTs7O0lBRjZHLHdHQUFnRTtJQUE5Syx5Q0FBd0I7SUFDM0IsZUFDSjtJQURJLCtFQUNKOzs7SUFHSSxpQ0FTSTtJQUFBLFlBQ0o7SUFBQSxpQkFBUTs7O0lBTkosc0RBQXNDLHdDQUFBLHdDQUFBLDJHQUFBLDJEQUFBO0lBRHRDLHlDQUF3QjtJQU14QixlQUNKO0lBREksK0VBQ0o7Ozs7SUFJUSx3QkFHSTs7O0lBRkEsMEdBQXVFO0lBRHhFLGdJQUFzRix3RUFBQTs7O0lBUW5GLHdCQUE2SDs7O0lBRC9ILDZCQUNFO0lBQUEsc0dBQThHO0lBQ2hILDBCQUFlOzs7SUFEQyxlQUErRjtJQUEvRix5R0FBK0YsbURBQUE7OztJQUUvRyw2QkFDSTtJQUFBLCtCQUNFO0lBQUEsNEJBQ0Y7SUFBQSxpQkFBTTtJQUNWLDBCQUFlOzs7SUFNZiwyQkFBeUQ7OztJQUN6RCxnQ0FBcUg7SUFBQSxZQUEwRTs7SUFBQSxpQkFBTzs7O0lBQWpGLGVBQTBFO0lBQTFFLHFJQUEwRTs7O0lBQy9MLGdDQUE4RDtJQUFBLFlBQW9IOztJQUFBLGlCQUFPOzs7SUFBM0gsZUFBb0g7SUFBcEgsK0xBQW9IOzs7SUFDbEwsZ0NBQWlKO0lBQUEsWUFBK0Q7SUFBQSxpQkFBTzs7O0lBQXRFLGVBQStEO0lBQS9ELHVHQUErRDs7O0lBQ2hOLGdDQUEwRjtJQUFBLFlBQW1FO0lBQUEsaUJBQU87OztJQUExRSxlQUFtRTtJQUFuRSwyR0FBbUU7OztJQUM3SixnQ0FBcUc7SUFBQSxZQUE4QjtJQUFBLGlCQUFPOzs7SUFBckMsZUFBOEI7SUFBOUIsc0RBQThCOzs7SUFDbkksZ0NBQWlFO0lBQUEsWUFBNEU7O0lBQUEsaUJBQU87OztJQUFuRixlQUE0RTtJQUE1RSx1SUFBNEU7OztJQUM3SSxnQ0FBZ0c7SUFBQSxZQUEwRTs7SUFBQSxpQkFBTzs7O0lBQWpGLGVBQTBFO0lBQTFFLHFJQUEwRTs7O0lBQzFLLDRCQUF5QztJQUFBLFlBQTRFOztJQUFBLGlCQUFPOzs7SUFBbkYsZUFBNEU7SUFBNUUsdUlBQTRFOzs7SUFDckgsZ0NBQTZEO0lBQUEsWUFBbUI7SUFBQSxpQkFBTzs7O0lBQTFCLGVBQW1CO0lBQW5CLDJDQUFtQjs7O0lBQ2hGLGdDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFPOzs7SUFESCxlQUNKO0lBREksNlVBQ0o7OztJQUNBLGdDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFPOzs7SUFETCxlQUNGO0lBREUsaVVBQ0Y7OztJQUVJLGdDQUEwRjtJQUFBLFlBQThEOztJQUFBLGlCQUFPOzs7O0lBQXJFLGVBQThEO0lBQTlELDZHQUE4RDs7O0lBRDVKLDRCQUNJO0lBQUEscUZBQTBGO0lBQzlGLGlCQUFPOzs7SUFEc0IsZUFBZ0U7SUFBaEUsNkZBQWdFOzs7SUFHN0YsZ0NBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQU87OztJQURILGVBQ0o7SUFESSx1RkFDSjs7O0lBQ0EsZ0NBQXNFO0lBQUEsWUFBd0M7SUFBQSxpQkFBTzs7O0lBQS9DLGVBQXdDO0lBQXhDLHdFQUF3Qzs7O0lBR2xILGdDQUE0UTtJQUFBLFlBQXVFO0lBQUEsaUJBQU87OztJQUE1VCwyVkFBb0s7SUFBMEUsZUFBdUU7SUFBdkUsZ0lBQXVFOzs7SUFDblYsZ0NBQTZNO0lBQUEsWUFBdUU7SUFBQSxpQkFBTzs7O0lBQWhRLHFEQUFvQyx5RUFBQTtJQUE4SSxlQUF1RTtJQUF2RSxnSUFBdUU7OztJQTdCeFIsK0JBQ0k7SUFBQSwrQkFDSTtJQUFBLDZFQUFrRDtJQUNsRCw2RUFBcUg7SUFDckgsNkVBQThEO0lBQzlELDZFQUFpSjtJQUNqSiw2RUFBMEY7SUFDMUYsNkVBQXFHO0lBQ3JHLDZFQUFpRTtJQUNqRSw2RUFBZ0c7SUFDaEcsOEVBQXlDO0lBQ3pDLCtFQUE2RDtJQUM3RCwrRUFDSTtJQUVKLCtFQUNFO0lBRUYsOEVBQ0k7SUFHSiwrRUFDSTtJQUVKLCtFQUFzRTtJQUUxRSxpQkFBTTtJQUNOLCtFQUE0UTtJQUM1USwrRUFBNk07SUFDak4saUJBQU07OztJQTlCRCxxR0FBa0U7SUFBb0IsMkVBQW9EO0lBQUMsa0hBQXNGO0lBQzVNLGVBQXdGO0lBQXhGLDZHQUF3RjtJQUNqRixlQUF3QjtJQUF4Qiw4Q0FBd0I7SUFDeEIsZUFBMkY7SUFBM0Ysc0tBQTJGO0lBQzNGLGVBQW9DO0lBQXBDLGlHQUFvQztJQUNwQyxlQUF1SDtJQUF2SCxnTkFBdUg7SUFDdkgsZUFBZ0U7SUFBaEUsb0tBQWdFO0lBQ2hFLGVBQTJFO0lBQTNFLCtHQUEyRTtJQUMzRSxlQUF1QztJQUF2QyxvR0FBdUM7SUFDdkMsZUFBc0U7SUFBdEUsMEtBQXNFO0lBQ3pGLGVBQWtDO0lBQWxDLCtGQUFrQztJQUNmLGVBQW1DO0lBQW5DLDhGQUFtQztJQUNuQyxlQUFzRjtJQUF0RixpTUFBc0Y7SUFHdEYsZUFBd0c7SUFBeEcsd09BQXdHO0lBRzNILGVBQXlDO0lBQXpDLHNHQUF5QztJQUlyQixlQUE4QztJQUE5QywyRUFBOEM7SUFHN0MsZUFBMEM7SUFBMUMsdUVBQTBDO0lBRzBILGVBQXdFO0lBQXhFLDRHQUF3RTtJQUN2SSxlQUF3RTtJQUF4RSw0R0FBd0U7OztJQUdoTixvQ0FBcVQ7OztJQUEzUCx5Q0FBb0IseUxBQUEsMkxBQUEsK0xBQUEsbU1BQUE7OztJQUVsRiw2QkFDSTtJQUFBLG1CQUlBO0lBSkEsK0JBSUE7SUFBQSxpQ0FDSTtJQUFBLDRDQUNKO0lBQUEsaUJBQVE7SUFDSiwyQkFHSjtJQUFBLGlCQUFNO0lBQ1YsaUJBQUk7O0FBbkhwQjtJQVNFLHNCQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQUcsQ0FBQztJQUoxQyw4QkFBTyxHQURQLFVBQ1EsUUFBNkI7UUFDbkMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFJRCx5Q0FBa0IsR0FBbEI7UUFBQSxpQkFJQztRQUhDLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQ0UsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDakQsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDM0QsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sYUFBYSxDQUFDLFlBQVksT0FBSSxDQUFDO0lBQ2pFLENBQUM7NEVBbEJVLFlBQVk7cURBQVosWUFBWTttR0FBWiwwQkFBc0I7O3VCQXRDbkM7Q0F5REMsQUF0QkQsSUFzQkM7U0FuQlksWUFBWTtrREFBWixZQUFZO2NBSHhCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COztrQkFFRSxZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQzs7QUFtQjFDLHdDQUF3QztBQUN4QztJQXlHd0Msc0NBQVk7SUFxRGxELDRCQUNFLE9BQW1CLEVBQ1osTUFBd0IsRUFDdkIsaUJBQW9DLEVBQ3BDLG1CQUF3QyxFQUN4QyxlQUFvQyxFQUNwQyxpQkFBb0MsRUFDakIsTUFBd0I7UUFBeEIsdUJBQUEsRUFBQSxnQkFBd0I7UUFQckQsWUFTRSxrQkFBTSxPQUFPLENBQUMsU0FDZjtRQVJRLFlBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3ZCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMseUJBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxxQkFBZSxHQUFmLGVBQWUsQ0FBcUI7UUFDcEMsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNqQixZQUFNLEdBQU4sTUFBTSxDQUFrQjtRQXREckQsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLFlBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvQyxVQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0MsVUFBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTdDLFlBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvQyxZQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFZL0Msb0JBQWMsR0FBVyxFQUFFLENBQUM7UUFFNUIsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUdkLGtCQUFZLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7UUFDeEUsbUJBQWEsR0FBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN6RSxjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBSzFCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCLDZCQUF1QixHQUFhLEVBQUUsQ0FBQztRQUcvQyxlQUFTLEdBQVEsRUFBRSxDQUFDO1FBRXBCLGFBQU8sR0FBWSxLQUFLLENBQUM7O0lBWXpCLENBQUM7SUE1Q0Qsc0JBQ0ksc0NBQU07YUFEVjtZQUVFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUVELHNCQUNJLHVDQUFPO2FBRFg7WUFFRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7SUFzQ0Qsc0JBQUksaURBQWlCO2FBQXJCO1lBQUEsaUJBTUM7WUFMQyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxFQUFFO2dCQUN2RSxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFhLElBQUssT0FBQSxLQUFLLEtBQUssS0FBSSxDQUFDLFlBQVksRUFBM0IsQ0FBMkIsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNoRztpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQzthQUNYO1FBQ0gsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtREFBbUI7YUFBdkI7WUFBQSxpQkFNQztZQUxDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3BGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBYSxJQUFLLE9BQUEsS0FBSyxLQUFLLEtBQUksQ0FBQyxZQUFZLEVBQTNCLENBQTJCLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDL0Y7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUM7YUFDWDtRQUNILENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0RBQWdCO2FBQXBCO1lBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVEQUF1QjthQUEzQjtZQUNFLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDaEgsQ0FBQyxJQUFJLENBQUMsT0FBTztvQkFDWCxJQUFJLENBQUMsaUJBQWlCO29CQUN0QixJQUFJLENBQUMsT0FBTztvQkFDWixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3BHLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDhDQUFjO2FBQWxCO1lBQ0UsT0FBTyxDQUNMLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUM3QixDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztnQkFDckYsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQ2xILENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFTO2FBQWI7WUFDRSxJQUFNLHdCQUF3QixHQUFhLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM5RSxJQUFNLFNBQVMsR0FDYixJQUFJLENBQUMsT0FBTztnQkFDWixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTO2dCQUNoRCx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN0RixPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDO1FBQ3RDLENBQUM7YUFFRCxVQUFjLEtBQUs7WUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSw0Q0FBWTthQUFoQjtZQUNFLE9BQU8sQ0FDTCxJQUFJLENBQUMsU0FBUztnQkFDZCxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQzlELENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUNuRSxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxnREFBZ0I7YUFBcEI7WUFDRSxPQUFPLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUM7OztPQUFBO0lBRUQsNENBQWUsR0FBZjtRQUFBLGlCQVVDO1FBVEMsSUFBTSxlQUFlLEdBQWEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMxRSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDekUsVUFBVSxDQUFDO2dCQUNULElBQU0sS0FBSyxHQUFnQixLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdFLElBQUksS0FBSyxFQUFFO29CQUNULEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDZjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsK0NBQWtCLEdBQWxCOztRQUFBLGlCQTRDQztRQTNDQyxvQ0FBb0M7UUFDcEMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMseUJBQXlCLEVBQUU7b0NBQ3JGLFdBQVc7Z0JBQ3BCLFFBQVEsV0FBVyxDQUFDLEtBQUssRUFBRTtvQkFDekIsS0FBSyxNQUFNO3dCQUNULE9BQUssdUJBQXVCLEdBQUcsT0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQzs0QkFDM0UsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMseUJBQXlCLEVBQUU7Z0NBQ25FLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQzs2QkFDdEM7d0JBQ0gsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsTUFBTTtvQkFDUixLQUFLLE9BQU87d0JBQ1YsT0FBSyx1QkFBdUIsR0FBRyxPQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDOzRCQUM1RSxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyx5QkFBeUIsRUFBRTtnQ0FDbkUsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDOzZCQUN0Qzt3QkFDSCxDQUFDLENBQUMsQ0FBQzt3QkFDSCxNQUFNO29CQUNSLEtBQUssUUFBUTt3QkFDWCxPQUFLLHVCQUF1QixHQUFHLE9BQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQzs0QkFDakgsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMseUJBQXlCLEVBQUU7Z0NBQ25FLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQzs2QkFDdEM7d0JBQ0gsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsTUFBTTtvQkFDUixLQUFLLE1BQU07d0JBQ1QsV0FBVyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7d0JBQ2hDLE1BQU07b0JBQ1I7d0JBQ0UsTUFBTTtpQkFDVDtnQkFDRCxJQUFJLFdBQVcsQ0FBQyxZQUFZLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxPQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBSyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMseUJBQXlCLEVBQUU7d0JBQ25FLE9BQUssa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7cUJBQ3RDO2lCQUNGOzs7O2dCQWpDSCxLQUEwQixJQUFBLEtBQUEsU0FBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQSxnQkFBQTtvQkFBOUMsSUFBTSxXQUFXLFdBQUE7NEJBQVgsV0FBVztpQkFrQ3JCOzs7Ozs7Ozs7U0FDRjtRQUNELFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixLQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQXdFQztRQXZFQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixrREFBa0Q7UUFDbEQsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQzlELElBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEtBQUssU0FBUztnQkFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEtBQUssV0FBVyxFQUNoRTtnQkFDQSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzthQUNwRTtTQUNGO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLHlCQUF5QjtZQUN6QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO2dCQUM5RCxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7WUFDSCwrQkFBK0I7WUFDL0IsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVE7Z0JBQ3BHLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7Z0JBQ3RFLElBQUksUUFBUSxLQUFLLFNBQVMsSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFO29CQUM5RCxLQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7aUJBQ3BDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxlQUFlLEdBQUc7WUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQy9DLE9BQU8sRUFBRTtnQkFDUCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUMxQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN0QyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN4QyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDeEQsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDdEMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3hELFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3RDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3RDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3hDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN0RCxtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDeEQsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDMUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDOUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDMUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzFELG9CQUFvQixFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzNEO1lBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCLENBQUM7UUFDRixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUN0RSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0RCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM5RCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUNwRSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDNUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2hHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMseUJBQXlCLENBQUM7UUFDMUgsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUNwRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDaEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRXBGLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sS0FBSyxZQUFZLEVBQUU7WUFDekcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDaEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FDbEQsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FDcEYsQ0FBQzthQUNIO1lBQ0QsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBSztnQkFDeEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzNCLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDdEc7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDRSx3Q0FBd0M7UUFDeEMsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVDO1FBQ0QscUNBQXFDO1FBQ3JDLGlEQUFpRDtRQUNqRCxJQUFJO1FBQ0osSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDL0IsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMzQztRQUNELElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLDZCQUE2QjtZQUM3QixJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDOUM7UUFDRCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDM0M7UUFDRCxJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtZQUNqQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDN0M7UUFDRCxpQkFBTSxXQUFXLFdBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsc0JBQUksc0NBQU07YUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDckQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzFFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQVE7YUFBWjtZQUNFLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUN0RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtDQUFlO2FBQW5CO1lBQ0UsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQ3pFLE9BQU8sT0FBTyxDQUFDO2FBQ2hCO1lBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQztRQUM5RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFXO2FBQWY7WUFDRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDckUsT0FBTyxFQUFFLENBQUM7YUFDWDtZQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDMUQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw4Q0FBYzthQUFsQjtZQUNFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUN4RSxPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtEQUFrQjthQUF0QjtZQUNFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7Z0JBQzVFLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsa0JBQWtCLENBQUM7UUFDakUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBWTthQUFoQjtZQUNFLHFGQUFxRjtZQUNyRixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtnQkFDN0YsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUVELDZDQUE2QztZQUM3QyxPQUFPLENBQ0w7Z0JBQ0UsT0FBTztnQkFDUCxXQUFXO2dCQUNYLFVBQVU7Z0JBQ1YsTUFBTTtnQkFDTixNQUFNO2dCQUNOLFdBQVc7Z0JBQ1gsU0FBUztnQkFDVCxNQUFNO2dCQUNOLFFBQVE7Z0JBQ1IsWUFBWTtnQkFDWixPQUFPO2dCQUNQLFdBQVc7Z0JBQ1gsWUFBWTthQUNiLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ25FLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG9EQUFvQjthQUF4QjtZQUNFLFFBQVE7WUFDUixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNuSSxPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDOzs7T0FBQTtJQUVELCtDQUFrQixHQUFsQixVQUFtQixXQUFXO1FBQTlCLGlCQWFDO1FBWkMsSUFBSSxXQUFXLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2hFLFVBQVUsQ0FBQztnQkFDVCxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0JBQ3ZELElBQUk7b0JBQ0YsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsbUJBQW1CLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDaEU7Z0JBQUMsT0FBTyxHQUFHLEVBQUU7b0JBQ1osT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsc0JBQXNCO29CQUNsRixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsc0JBQXNCO2lCQUMzQztZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQseUNBQVksR0FBWixVQUFhLEtBQVU7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLEtBQWlCLEVBQUUsS0FBVztRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEtBQUssS0FBSyxFQUFFO1lBQ3BGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO2FBQU0sSUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsS0FBSyxTQUFTO1lBQzlELEtBQUs7WUFDTCxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRCxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMxRDtZQUNBLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztTQUN0RjtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCx1Q0FBVSxHQUFWLFVBQVcsS0FBaUI7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELHVDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRUQsZ0RBQW1CLEdBQW5CLFVBQW9CLEtBQUs7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCwyQ0FBYyxHQUFkLFVBQWUsS0FBSztRQUNsQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDbEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7U0FDakc7SUFDSCxDQUFDO0lBRUQsK0NBQWtCLEdBQWxCLFVBQW1CLEtBQUs7UUFDdEIsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFO1lBQ25ILElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ3JHO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2YsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGlEQUFvQixHQUFwQixVQUFxQixLQUFpQjtRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUM3RCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpREFBb0IsR0FBcEI7UUFDRSxJQUFNLFlBQVksR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoSCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsU0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUksQ0FDakcsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVELHlDQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2hCLElBQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQztRQUMvQixJQUFNLHdCQUF3QixHQUFHLFdBQVcsQ0FBQztRQUM3QyxJQUFNLGtDQUFrQyxHQUFHLGFBQWEsQ0FBQztRQUN6RCxJQUFNLFlBQVksR0FBRyxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvRSxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBRXRCLGlEQUFpRDtRQUNqRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDeEgsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO2FBQU0sSUFDTCxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzFGLENBQUMsQ0FDQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxHQUFHLElBQUksd0JBQXdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNyRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxHQUFHLElBQUksa0NBQWtDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvRSxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUMzQixFQUNEO1lBQ0EsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsYUFBYTtRQUNiLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFO1lBQ2pJLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxnREFBbUIsR0FBbkIsVUFBb0IsS0FBb0I7UUFDdEMsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hEO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7SUFFRCxnREFBbUIsR0FBbkIsVUFBb0IsS0FBVTtRQUM1QixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDekMsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsR0FBRyxFQUFFO2dCQUNwRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNqQztTQUNGO0lBQ0gsQ0FBQztJQUVELHVDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLEtBQUs7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLEtBQUs7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQseUNBQVksR0FBWixVQUFhLEtBQUs7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHlDQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxnREFBbUIsR0FBbkIsVUFBb0IsSUFBSTtRQUN0QixJQUNFLElBQUk7WUFDSixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSztZQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDL0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFDM0Q7WUFDQSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ25DLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUMzRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0M7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFhLElBQUssT0FBQSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO2FBQzdHO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsMkNBQWMsR0FBZCxVQUFlLG9CQUFvQjtRQUNqQyxJQUFNLFNBQVMsR0FBWSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLFNBQVMsV0FBQSxFQUFFLENBQUMsQ0FBQztJQUM3RSxDQUFDO3dGQWpqQlUsa0JBQWtCLDJSQTREbkIsU0FBUzsyREE1RFIsa0JBQWtCOzs7OztZQXRHdkIsOEJBQ0k7WUFDQSwrQkFBMkU7WUFBQSx1QkFDdEQ7WUFBQSxpQkFBTztZQUU1Qix1RUFDSTtZQUVKLDhCQUNJO1lBQ0Esd0VBU0k7WUFFSiw4QkFDSTtZQUFBLDhCQUNFO1lBQ0UsK0RBR0E7WUFFQSwyQkFDSTtZQUNBLHVGQUNFO1lBRUYsdUZBQ0k7WUFJUixpQkFBTTtZQUNWLGlCQUFNO1lBRU4sd0VBQ0k7WUErQkosMEZBQXFTO1lBQ3pTLGlCQUFNO1lBQ04sa0VBQ0k7WUFZUixpQkFBTTtZQUNWLGlCQUFNOztZQTFGOEIseUxBQW1KO1lBRTdLLGVBQXdDO1lBQXhDLDBEQUF3Qyw0QkFBQTtZQUFnQyxlQUFnRDtZQUFoRCxzRUFBZ0Q7WUFHOUYsZUFBb0Y7WUFBcEYsbUhBQW9GO1lBTTVHLGVBQW9GO1lBQXBGLG1IQUFvRjtZQVU5QyxlQUE4RjtZQUE5Rix1SEFBOEY7WUFDcEYsZUFBc0M7WUFBdEMsbURBQXNDLHFDQUFBO1lBSW5CLGVBQXlEO1lBQXpELG9GQUF5RDtZQUduSCxlQUF1RTtZQUF2RSxvR0FBdUU7WUFBeUMsK0VBQThEO1lBQXRHLHFEQUF1QztZQUVsRyxlQUFpQjtZQUFqQixvQ0FBaUI7WUFHakIsZUFBNkI7WUFBN0Isb0RBQTZCO1lBUXFCLGVBQWtCO1lBQWxCLHFDQUFrQjtZQWdDM0UsZUFBMEM7WUFBMUMsaUVBQTBDO1lBRTFELGVBQTBEO1lBQTFELGlGQUEwRDs7NkJBMUk3RTtDQXN0QkMsQUEzcEJELENBeUd3QyxZQUFZLEdBa2pCbkQ7U0FsakJZLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBekc5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxzalNBNEZQO2dCQUNILElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsd0NBQXdDO29CQUNuRCwwQkFBMEIsRUFBRSx3Q0FBd0M7b0JBQ3BFLGtCQUFrQixFQUFFLHFDQUFxQztvQkFDekQsZ0JBQWdCLEVBQUUsbUNBQW1DO29CQUNyRCx5QkFBeUIsRUFBRSxhQUFhO29CQUN4Qyx5QkFBeUIsRUFBRSwwQkFBMEI7b0JBQ3JELGtCQUFrQixFQUFFLG9CQUFvQjtpQkFDekM7YUFDRjs7c0JBNkRJLE1BQU07dUJBQUMsU0FBUzs7a0JBM0RsQixLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxNQUFNOztrQkFFTixNQUFNOztrQkFFTixNQUFNOztrQkFFTixNQUFNOztrQkFFTixNQUFNOztrQkFFTixNQUFNO21CQUFDLE1BQU07O2tCQUtiLE1BQU07bUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgRGlyZWN0aXZlLFxuICBIb3N0TGlzdGVuZXIsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIExPQ0FMRV9JRCxcbiAgSW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLy8gQVBQXG5pbXBvcnQgeyBPdXRzaWRlQ2xpY2sgfSBmcm9tICcuLi8uLi91dGlscy9vdXRzaWRlLWNsaWNrL091dHNpZGVDbGljayc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcbmltcG9ydCB7IERhdGVGb3JtYXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0ZS1mb3JtYXQvRGF0ZUZvcm1hdCc7XG5pbXBvcnQgeyBGaWVsZEludGVyYWN0aW9uQXBpIH0gZnJvbSAnLi9GaWVsZEludGVyYWN0aW9uQXBpJztcbmltcG9ydCB7IE5vdm9UZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90ZW1wbGF0ZS9Ob3ZvVGVtcGxhdGVTZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJTWFza09wdGlvbnMge1xuICBtYXNrOiBhbnk7XG4gIGtlZXBDaGFyUG9zaXRpb25zOiBib29sZWFuO1xuICBndWlkZTogYm9vbGVhbjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndGV4dGFyZWFbYXV0b3NpemVdJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0F1dG9TaXplIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQudGFyZ2V0J10pXG4gIG9uSW5wdXQodGV4dEFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmFkanVzdCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hZGp1c3QoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkanVzdCgpOiB2b2lkIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgbmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBuYXRpdmVFbGVtZW50LnN0eWxlLm1pbkhlaWdodDtcbiAgICBuYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke25hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgfVxufVxuLy8gdW5kbyBhbGwgdGVtcGxhdGUgY29udGV4dCByZWZlcmVuY2VzIVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jb250cm9sJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1jb250YWluZXJcIiBbaGlkZGVuXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmhpZGRlbiB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS50eXBlID09PSAnaGlkZGVuJyB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ2hpZGRlbidcIj5cbiAgICAgICAgICAgIDwhLS1FbmNyeXB0ZWQgRmllbGQtLT5cbiAgICAgICAgICAgIDxzcGFuIFt0b29sdGlwXT1cImxhYmVscy5lbmNyeXB0ZWRGaWVsZFRvb2x0aXBcIiBbdG9vbHRpcFBvc2l0aW9uXT1cIidyaWdodCdcIj48aSBbaGlkZGVuXT1cIiFmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5lbmNyeXB0ZWRcIlxuICAgICAgICAgICAgY2xhc3M9XCJiaGktbG9ja1wiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICA8IS0tTGFiZWwgKGZvciBob3Jpem9udGFsKS0tPlxuICAgICAgICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJjb250cm9sLmtleVwiICpuZ0lmPVwiZm9ybS5sYXlvdXQgIT09ICd2ZXJ0aWNhbCcgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgJiYgIWNvbmRlbnNlZFwiIFtuZ0NsYXNzXT1cInsnZW5jcnlwdGVkJzogZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uZW5jcnlwdGVkIH1cIj5cbiAgICAgICAgICAgICAgICB7eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCB9fVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtb3V0ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPCEtLUxhYmVsIChmb3IgdmVydGljYWwpLS0+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZm9ybS5sYXlvdXQgPT09ICd2ZXJ0aWNhbCcgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgJiYgIWNvbmRlbnNlZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm92by1jb250cm9sLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuZm9yXT1cImNvbnRyb2wua2V5XCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLm5vdm8tY29udHJvbC1lbXB0eV09XCIhaGFzVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Mubm92by1jb250cm9sLWZvY3VzZWRdPVwiZm9jdXNlZFwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5ub3ZvLWNvbnRyb2wtZmlsbGVkXT1cImhhc1ZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLm5vdm8tY29udHJvbC1hbHdheXMtYWN0aXZlXT1cImFsd2F5c0FjdGl2ZSB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5ub3ZvLWNvbnRyb2wtZXh0cmEtc3BhY2luZ109XCJyZXF1aXJlc0V4dHJhU3BhY2luZ1wiPlxuICAgICAgICAgICAgICAgICAgICB7eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCB9fVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1pbm5lci1jb250YWluZXJcIiBbY2xhc3MucmVxdWlyZWRdPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ucmVxdWlyZWQgJiYgIWZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnJlYWRPbmx5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtaW5uZXItaW5wdXQtY29udGFpbmVyXCIgW2NsYXNzLm5vdm8tY29udHJvbC1maWxsZWRdPVwiaGFzVmFsdWVcIiBbY2xhc3Mubm92by1jb250cm9sLWVtcHR5XT1cIiFoYXNWYWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDwhLS1SZXF1aXJlZCBJbmRpY2F0b3ItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIFtoaWRkZW5dPVwiIWZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnJlcXVpcmVkIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnJlYWRPbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlcXVpcmVkLWluZGljYXRvciB7eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSB9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydiaGktY2lyY2xlJzogIWlzVmFsaWQsICdiaGktY2hlY2snOiBpc1ZhbGlkfVwiICpuZ0lmPVwiIWNvbmRlbnNlZCB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5yZXF1aXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLUZvcm0gQ29udHJvbHMtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtaW5wdXQge3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgfX1cIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY29udHJvbC5rZXlcIiBbY2xhc3MuY29udHJvbC1kaXNhYmxlZF09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1UT0RPIHByZWZpeC9zdWZmaXggb24gdGhlIGNvbnRyb2wtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGVtcGxhdGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzW2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlXTsgY29udGV4dDogdGVtcGxhdGVDb250ZXh0XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0ZW1wbGF0ZXMgfHwgbG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWlucHV0LWNvbnRhaW5lciBub3ZvLWNvbnRyb2wtaW5wdXQtd2l0aC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS1FcnJvciBNZXNzYWdlLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1tZXNzYWdlIHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlIH19XCIgKm5nSWY9XCIhY29uZGVuc2VkXCIgW2NsYXNzLmhhcy10aXBdPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0udGlwV2VsbFwiIFtuZ0NsYXNzXT1cInNob3dFcnJvclN0YXRlIHx8IHNob3dNYXhMZW5ndGhNZXRNZXNzYWdlID8gJ2Vycm9yLXNob3duJyA6ICdlcnJvci1oaWRkZW4nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZXNcIiBbbmdDbGFzc109XCJzaG93TWVzc2FnZXMgPyAnY291bnQtc2hvd24gbWVzc2FnZXMtc2hvd24nIDogJ2NvdW50LWhpZGRlbiBtZXNzYWdlcy1oaWRkZW4nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJzaG93RmllbGRNZXNzYWdlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiaXNEaXJ0eSAmJiBlcnJvcnM/LnJlcXVpcmVkICYmIGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlICE9PSAnYWRkcmVzcydcIj57eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCB8IHVwcGVyY2FzZSB9fSB7eyBsYWJlbHMuaXNSZXF1aXJlZCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImlzRGlydHkgJiYgZXJyb3JzPy5taW5sZW5ndGhcIj57eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCB8IHVwcGVyY2FzZSB9fSB7eyBsYWJlbHMubWluTGVuZ3RoIH19IHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLm1pbmxlbmd0aCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImlzRGlydHkgJiYgbWF4TGVuZ3RoTWV0ICYmIGZvY3VzZWQgJiYgIWVycm9ycz8ubWF4bGVuZ3RoICYmIGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlICE9PSAncGlja2VyJ1wiPnt7IGxhYmVscy5tYXhsZW5ndGhNZXQoZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubWF4bGVuZ3RoKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImVycm9ycz8ubWF4bGVuZ3RoICYmIGZvY3VzZWQgJiYgIWVycm9ycz8ubWF4bGVuZ3RoRmllbGRzXCI+e3sgbGFiZWxzLmludmFsaWRNYXhsZW5ndGgoZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubWF4bGVuZ3RoKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cIm1heExlbmd0aE1ldCAmJiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3BpY2tlcidcIj57eyBsYWJlbHMubWF4UmVjb3Jkc1JlYWNoZWQgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIGVycm9ycz8uaW52YWxpZEVtYWlsXCI+e3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgfCB1cHBlcmNhc2UgfX0ge3sgbGFiZWxzLmludmFsaWRFbWFpbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImlzRGlydHkgJiYgKGVycm9ycz8uaW50ZWdlclRvb0xhcmdlIHx8IGVycm9ycz8uZG91YmxlVG9vTGFyZ2UpXCI+e3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgfCB1cHBlcmNhc2UgfX0ge3sgbGFiZWxzLmlzVG9vTGFyZ2UgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJpc0RpcnR5ICYmIGVycm9ycz8ubWluWWVhclwiPnt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIHwgdXBwZXJjYXNlIH19IHt7IGxhYmVscy5ub3RWYWxpZFllYXIgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIChlcnJvcnM/LmN1c3RvbSlcIj57eyBlcnJvcnMuY3VzdG9tIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiZXJyb3JzPy5tYXhsZW5ndGggJiYgZXJyb3JzPy5tYXhsZW5ndGhGaWVsZHMgJiYgbWF4bGVuZ3RoRXJyb3JGaWVsZCAmJiBmb2N1c2VkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhYmVscy5pbnZhbGlkTWF4bGVuZ3RoV2l0aEZpZWxkKGNvbnRyb2wuY29uZmlnW21heGxlbmd0aEVycm9yRmllbGRdPy5sYWJlbCwgY29udHJvbC5jb25maWdbbWF4bGVuZ3RoRXJyb3JGaWVsZF0/Lm1heGxlbmd0aCkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIG1heGxlbmd0aE1ldEZpZWxkICYmIGZvY3VzZWQgJiYgIWVycm9ycz8ubWF4bGVuZ3RoRmllbGRzPy5pbmNsdWRlcyhtYXhsZW5ndGhNZXRGaWVsZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhYmVscy5tYXhsZW5ndGhNZXRXaXRoRmllbGQoY29udHJvbC5jb25maWdbbWF4bGVuZ3RoTWV0RmllbGRdPy5sYWJlbCwgY29udHJvbC5jb25maWdbbWF4bGVuZ3RoTWV0RmllbGRdPy5tYXhsZW5ndGgpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXNEaXJ0eSAmJiBlcnJvcnM/LmludmFsaWRBZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0Zvcj1cImxldCBpbnZhbGlkQWRkcmVzc0ZpZWxkIG9mIGVycm9ycz8uaW52YWxpZEFkZHJlc3NGaWVsZHNcIj57eyBpbnZhbGlkQWRkcmVzc0ZpZWxkIHwgdXBwZXJjYXNlIH19IHt7IGxhYmVscy5pc1JlcXVpcmVkIH19IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLUZpZWxkIEhpbnQtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5kZXNjcmlwdGlvbiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndhcm5pbmctdGV4dFwiICpuZ0lmPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ud2FybmluZ1wiPnt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLndhcm5pbmcgfX08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGFyYWN0ZXItY291bnRcIiBbY2xhc3MuZXJyb3JdPVwiKChlcnJvcnM/Lm1heGxlbmd0aCAmJiAhZXJyb3JzPy5tYXhsZW5ndGhGaWVsZHMpIHx8IChlcnJvcnM/Lm1heGxlbmd0aCAmJiBlcnJvcnM/Lm1heGxlbmd0aEZpZWxkcyAmJiBlcnJvcnMubWF4bGVuZ3RoRmllbGRzLmluY2x1ZGVzKGZvY3VzZWRGaWVsZCkpKVwiICpuZ0lmPVwic2hvd0NvdW50ICYmIGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlICE9PSAncGlja2VyJ1wiPnt7IGl0ZW1Db3VudCB9fS97eyBtYXhMZW5ndGggfHwgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubWF4bGVuZ3RoIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWNvcmQtY291bnRcIiBbY2xhc3MuemVyby1jb3VudF09XCJpdGVtQ291bnQgPT09IDBcIiBbY2xhc3Mucm93LXBpY2tlcl09XCJmb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbmZpZy5jb2x1bW5zXCIgKm5nSWY9XCJzaG93Q291bnQgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICdwaWNrZXInXCI+e3sgaXRlbUNvdW50IH19L3t7IG1heExlbmd0aCB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5tYXhsZW5ndGggfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8IS0tVGlwIFdlbC0tPlxuICAgICAgICAgICAgICAgICAgICA8bm92by10aXAtd2VsbCAqbmdJZj1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnRpcFdlbGxcIiBbbmFtZV09XCJjb250cm9sLmtleVwiIFt0aXBdPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0/LnRpcFdlbGw/LnRpcFwiIFtpY29uXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldPy50aXBXZWxsPy5pY29uXCIgW2J1dHRvbl09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XT8udGlwV2VsbD8uYnV0dG9uXCIgW3Nhbml0aXplXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldPy50aXBXZWxsPy5zYW5pdGl6ZVwiPjwvbm92by10aXAtd2VsbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aSAqbmdJZj1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmZpZWxkSW50ZXJhY3Rpb25sb2FkaW5nXCIgY2xhc3M9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeG1sbnM6YT1cImh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC9cIlxuICAgICAgICAgICAgICAgICAgICAgeD1cIjBweFwiIHk9XCIwcHhcIiB3aWR0aD1cIjE4LjJweFwiIGhlaWdodD1cIjE4LjVweFwiIHZpZXdCb3g9XCIwIDAgMTguMiAxOC41XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4LjIgMTguNTtcIlxuICAgICAgICAgICAgICAgICAgICAgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwaW5uZXIgeyBmaWxsOiNGRkZGRkY7IH1cbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwic3Bpbm5lclwiIGQ9XCJNOS4yLDE4LjVDNC4xLDE4LjUsMCwxNC40LDAsOS4yUzQuMSwwLDkuMiwwYzAuOSwwLDEuOSwwLjEsMi43LDAuNGMwLjgsMC4yLDEuMiwxLjEsMSwxLjlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLTAuMiwwLjgtMS4xLDEuMi0xLjksMUMxMC41LDMuMSw5LjksMyw5LjIsM0M1LjgsMywzLDUuOCwzLDkuMnMyLjgsNi4yLDYuMiw2LjJjMi44LDAsNS4zLTEuOSw2LTQuN2MwLjItMC44LDEtMS4zLDEuOC0xLjFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMC44LDAuMiwxLjMsMSwxLjEsMS44QzE3LjEsMTUuNywxMy40LDE4LjUsOS4yLDE4LjV6XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzogJ2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlJyxcbiAgICAnW2F0dHIuZGF0YS1jb250cm9sLXR5cGVdJzogJ2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5yZWFkT25seScsXG4gICAgJ1tjbGFzcy5oaWRkZW5dJzogJ2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmhpZGRlbicsXG4gICAgJ1thdHRyLmRhdGEtY29udHJvbC1rZXldJzogJ2NvbnRyb2wua2V5JyxcbiAgICAnW2NsYXNzLmlubGluZS1lbWJlZGRlZF0nOiAnY29udHJvbC5pc0lubGluZUVtYmVkZGVkJyxcbiAgICAnW2NsYXNzLmVtYmVkZGVkXSc6ICdjb250cm9sLmlzRW1iZWRkZWQnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ29udHJvbEVsZW1lbnQgZXh0ZW5kcyBPdXRzaWRlQ2xpY2sgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBJbnB1dCgpXG4gIGNvbnRyb2w6IGFueTtcbiAgQElucHV0KClcbiAgZm9ybTogYW55O1xuICBASW5wdXQoKVxuICBjb25kZW5zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgYXV0b0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZWRpdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBzYXZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGRlbGV0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICB1cGxvYWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCdibHVyJylcbiAgZ2V0IG9uQmx1cigpOiBPYnNlcnZhYmxlPEZvY3VzRXZlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5fYmx1ckVtaXR0ZXIuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBAT3V0cHV0KCdmb2N1cycpXG4gIGdldCBvbkZvY3VzKCk6IE9ic2VydmFibGU8Rm9jdXNFdmVudD4ge1xuICAgIHJldHVybiB0aGlzLl9mb2N1c0VtaXR0ZXIuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbiAgcHVibGljIG1heExlbmd0aDogbnVtYmVyO1xuICBwdWJsaWMgZm9jdXNlZEZpZWxkOiBzdHJpbmc7XG4gIGZvcm1hdHRlZFZhbHVlOiBzdHJpbmcgPSAnJztcbiAgcGVyY2VudFZhbHVlOiBudW1iZXI7XG4gIG1heExlbmd0aE1ldDogYm9vbGVhbiA9IGZhbHNlO1xuICBpdGVtQ291bnQ6IG51bWJlciA9IDA7XG4gIG1hc2tPcHRpb25zOiBJTWFza09wdGlvbnM7XG5cbiAgcHJpdmF0ZSBfYmx1ckVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgcHJpdmF0ZSBfZm9jdXNFbWl0dGVyOiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIHByaXZhdGUgX2ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZW50ZXJlZFRleHQ6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIGZvcmNlQ2xlYXJTdWJzY3JpcHRpb246IGFueTtcbiAgcHJpdmF0ZSBwZXJjZW50Q2hhbmdlU3Vic2NyaXB0aW9uOiBhbnk7XG4gIHByaXZhdGUgdmFsdWVDaGFuZ2VTdWJzY3JpcHRpb246IGFueTtcbiAgcHJpdmF0ZSBkYXRlQ2hhbmdlU3Vic2NyaXB0aW9uOiBhbnk7XG4gIHByaXZhdGUgX3Nob3dDb3VudDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGNoYXJhY3RlckNvdW50RmllbGQ6IHN0cmluZztcbiAgcHJpdmF0ZSBtYXhMZW5ndGhNZXRFcnJvcmZpZWxkczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBzdGF0dXNDaGFuZ2VTdWJzY3JpcHRpb246IGFueTtcblxuICB0ZW1wbGF0ZXM6IGFueSA9IHt9O1xuICB0ZW1wbGF0ZUNvbnRleHQ6IGFueTtcbiAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSxcbiAgICBwcml2YXRlIGRhdGVGb3JtYXRTZXJ2aWNlOiBEYXRlRm9ybWF0U2VydmljZSxcbiAgICBwcml2YXRlIGZpZWxkSW50ZXJhY3Rpb25BcGk6IEZpZWxkSW50ZXJhY3Rpb25BcGksXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVNlcnZpY2U6IE5vdm9UZW1wbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlOiBzdHJpbmcgPSAnZW4tVVMnLFxuICApIHtcbiAgICBzdXBlcihlbGVtZW50KTtcbiAgfVxuXG4gIGdldCBtYXhsZW5ndGhNZXRGaWVsZCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLm1heExlbmd0aE1ldEVycm9yZmllbGRzICYmIHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXhMZW5ndGhNZXRFcnJvcmZpZWxkcy5maW5kKChmaWVsZDogc3RyaW5nKSA9PiBmaWVsZCA9PT0gdGhpcy5mb2N1c2VkRmllbGQpIHx8ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1heGxlbmd0aEVycm9yRmllbGQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5lcnJvcnMgJiYgdGhpcy5lcnJvcnMubWF4bGVuZ3RoRmllbGRzICYmIHRoaXMuZXJyb3JzLm1heGxlbmd0aEZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9ycy5tYXhsZW5ndGhGaWVsZHMuZmluZCgoZmllbGQ6IHN0cmluZykgPT4gZmllbGQgPT09IHRoaXMuZm9jdXNlZEZpZWxkKSB8fCAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzaG93RmllbGRNZXNzYWdlKCkge1xuICAgIHJldHVybiAhdGhpcy5lcnJvcnMgJiYgIXRoaXMubWF4TGVuZ3RoTWV0ICYmIEhlbHBlcnMuaXNCbGFuayh0aGlzLmNvbnRyb2wuZGVzY3JpcHRpb24pO1xuICB9XG5cbiAgZ2V0IHNob3dNYXhMZW5ndGhNZXRNZXNzYWdlKCkge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5pc0RpcnR5ICYmIHRoaXMubWF4TGVuZ3RoTWV0ICYmIHRoaXMuZm9jdXNlZCAmJiAoIXRoaXMuZXJyb3JzIHx8ICh0aGlzLmVycm9ycyAmJiAhdGhpcy5lcnJvcnMubWF4bGVuZ3RoKSkpIHx8XG4gICAgICAodGhpcy5pc0RpcnR5ICYmXG4gICAgICAgIHRoaXMubWF4bGVuZ3RoTWV0RmllbGQgJiZcbiAgICAgICAgdGhpcy5mb2N1c2VkICYmXG4gICAgICAgICghdGhpcy5lcnJvcnMgfHwgKHRoaXMuZXJyb3JzICYmICF0aGlzLmVycm9ycy5tYXhsZW5ndGhGaWVsZHMuaW5jbHVkZXModGhpcy5tYXhsZW5ndGhNZXRGaWVsZCkpKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0IHNob3dFcnJvclN0YXRlKCkge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5pc0RpcnR5ICYmIHRoaXMuZXJyb3JzKSB8fFxuICAgICAgKHRoaXMuZm9jdXNlZCAmJiB0aGlzLmVycm9ycyAmJiB0aGlzLmVycm9ycy5tYXhsZW5ndGggJiYgdGhpcy5lcnJvcnMubWF4bGVuZ3RoRmllbGRzKSB8fFxuICAgICAgKHRoaXMuZm9jdXNlZCAmJiB0aGlzLmVycm9ycyAmJiB0aGlzLmVycm9ycy5tYXhsZW5ndGggJiYgdGhpcy5lcnJvcnMubWF4bGVuZ3RoRmllbGRzICYmIHRoaXMubWF4bGVuZ3RoRXJyb3JGaWVsZClcbiAgICApO1xuICB9XG5cbiAgZ2V0IHNob3dDb3VudCgpIHtcbiAgICBjb25zdCBNQVhfTEVOR1RIX0NPTlRST0xfVFlQRVM6IHN0cmluZ1tdID0gWyd0ZXh0Ym94JywgJ3BpY2tlcicsICd0ZXh0LWFyZWEnXTtcbiAgICBjb25zdCBjaGFyQ291bnQ6IGJvb2xlYW4gPVxuICAgICAgdGhpcy5mb2N1c2VkICYmXG4gICAgICAhIXRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGggJiZcbiAgICAgIE1BWF9MRU5HVEhfQ09OVFJPTF9UWVBFUy5pbmNsdWRlcyh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUpO1xuICAgIHJldHVybiB0aGlzLl9zaG93Q291bnQgfHwgY2hhckNvdW50O1xuICB9XG5cbiAgc2V0IHNob3dDb3VudCh2YWx1ZSkge1xuICAgIHRoaXMuX3Nob3dDb3VudCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNob3dNZXNzYWdlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zaG93Q291bnQgfHxcbiAgICAgICFIZWxwZXJzLmlzRW1wdHkodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLndhcm5pbmcpIHx8XG4gICAgICAhSGVscGVycy5pc0VtcHR5KHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5kZXNjcmlwdGlvbilcbiAgICApO1xuICB9XG5cbiAgZ2V0IGRlY2ltYWxTZXBhcmF0b3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KHRoaXMubG9jYWxlKS5mb3JtYXQoMS4yKVsxXTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBET19OT1RfRk9DVVNfTUU6IHN0cmluZ1tdID0gWydwaWNrZXInLCAndGltZScsICdkYXRlJywgJ2RhdGUtdGltZSddO1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyAmJiAhRE9fTk9UX0ZPQ1VTX01FLmluY2x1ZGVzKHRoaXMuY29udHJvbC5jb250cm9sVHlwZSkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gU3Vic2NyaWJlIHRvIGNvbnRyb2wgaW50ZXJhY3Rpb25zXG4gICAgaWYgKHRoaXMuY29udHJvbC5pbnRlcmFjdGlvbnMgJiYgIXRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICBmb3IgKGNvbnN0IGludGVyYWN0aW9uIG9mIHRoaXMuY29udHJvbC5pbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgc3dpdGNoIChpbnRlcmFjdGlvbi5ldmVudCkge1xuICAgICAgICAgIGNhc2UgJ2JsdXInOlxuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMub25CbHVyLnBpcGUoZGVib3VuY2VUaW1lKDMwMCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZm9jdXMnOlxuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMub25Gb2N1cy5waXBlKGRlYm91bmNlVGltZSgzMDApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NoYW5nZSc6XG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlQ2hhbmdlcy5waXBlKGRlYm91bmNlVGltZSgzMDApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2luaXQnOlxuICAgICAgICAgICAgaW50ZXJhY3Rpb24uaW52b2tlT25Jbml0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW50ZXJhY3Rpb24uaW52b2tlT25Jbml0KSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5leGVjdXRlSW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudGVtcGxhdGVzID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuZ2V0QWxsKCk7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIC8vIE1ha2Ugc3VyZSB0byBpbml0aWFsbHkgZm9ybWF0IHRoZSB0aW1lIGNvbnRyb2xzXG4gICAgaWYgKHRoaXMuY29udHJvbCAmJiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsdWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAndGV4dGJveCcgfHxcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAndGV4dC1hcmVhJ1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMuaXRlbUNvdW50ID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuY29udHJvbCkge1xuICAgICAgLy8gTGlzdGVuIHRvIGNsZWFyIGV2ZW50c1xuICAgICAgdGhpcy5mb3JjZUNsZWFyU3Vic2NyaXB0aW9uID0gdGhpcy5jb250cm9sLmZvcmNlQ2xlYXIuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jbGVhclZhbHVlKCk7XG4gICAgICB9KTtcbiAgICAgIC8vIEZvciBBc3luY2hyb25vdXMgdmFsaWRhdGlvbnNcbiAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKCh2YWxpZGl0eSkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0gPSB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQ7XG4gICAgICAgIGlmICh2YWxpZGl0eSAhPT0gJ1BFTkRJTkcnICYmIHRoaXMuZm9ybS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KSB7XG4gICAgICAgICAgdGhpcy5mb3JtLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0ID0ge1xuICAgICAgJGltcGxpY2l0OiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIHJlc3RyaWN0S2V5czogdGhpcy5yZXN0cmljdEtleXMuYmluZCh0aGlzKSxcbiAgICAgICAgZW1pdENoYW5nZTogdGhpcy5lbWl0Q2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZUZvY3VzOiB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZVBlcmNlbnRDaGFuZ2U6IHRoaXMuaGFuZGxlUGVyY2VudENoYW5nZS5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVCbHVyOiB0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlVGV4dEFyZWFJbnB1dDogdGhpcy5oYW5kbGVUZXh0QXJlYUlucHV0LmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZUVkaXQ6IHRoaXMuaGFuZGxlRWRpdC5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVTYXZlOiB0aGlzLmhhbmRsZVNhdmUuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlRGVsZXRlOiB0aGlzLmhhbmRsZURlbGV0ZS5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVVcGxvYWQ6IHRoaXMuaGFuZGxlVXBsb2FkLmJpbmQodGhpcyksXG4gICAgICAgIG1vZGVsQ2hhbmdlOiB0aGlzLm1vZGVsQ2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgIG1vZGVsQ2hhbmdlV2l0aFJhdzogdGhpcy5tb2RlbENoYW5nZVdpdGhSYXcuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlQWRkcmVzc0NoYW5nZTogdGhpcy5oYW5kbGVBZGRyZXNzQ2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZVR5cGluZzogdGhpcy5oYW5kbGVUeXBpbmcuYmluZCh0aGlzKSxcbiAgICAgICAgdXBkYXRlVmFsaWRpdHk6IHRoaXMudXBkYXRlVmFsaWRpdHkuYmluZCh0aGlzKSxcbiAgICAgICAgdG9nZ2xlQWN0aXZlOiB0aGlzLnRvZ2dsZUFjdGl2ZS5iaW5kKHRoaXMpLFxuICAgICAgICB2YWxpZGF0ZUludGVnZXJJbnB1dDogdGhpcy52YWxpZGF0ZUludGVnZXJJbnB1dC5iaW5kKHRoaXMpLFxuICAgICAgICB2YWxpZGF0ZU51bWJlck9uQmx1cjogdGhpcy52YWxpZGF0ZU51bWJlck9uQmx1ci5iaW5kKHRoaXMpLFxuICAgICAgfSxcbiAgICAgIGZvcm06IHRoaXMuZm9ybSxcbiAgICB9O1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC50b29sdGlwUG9zaXRpb24gPSB0aGlzLnRvb2x0aXBQb3NpdGlvbjtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQudG9vbHRpcCA9IHRoaXMudG9vbHRpcDtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQudG9vbHRpcFNpemUgPSB0aGlzLnRvb2x0aXBTaXplO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC50b29sdGlwUHJlbGluZSA9IHRoaXMudG9vbHRpcFByZWxpbmU7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnJlbW92ZVRvb2x0aXBBcnJvdyA9IHRoaXMucmVtb3ZlVG9vbHRpcEFycm93O1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5zdGFydHVwRm9jdXMgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc3RhcnR1cEZvY3VzO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5maWxlQnJvd3NlckltYWdlVXBsb2FkVXJsID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmw7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0Lm1pbmltYWwgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWluaW1hbDtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQuY3VycmVuY3lGb3JtYXQgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY3VycmVuY3lGb3JtYXQ7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnBlcmNlbnRWYWx1ZSA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5wZXJjZW50VmFsdWU7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LmNvbmZpZyA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb25maWc7XG5cbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldICYmIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zdWJUeXBlID09PSAncGVyY2VudGFnZScpIHtcbiAgICAgIGlmICghSGVscGVycy5pc0VtcHR5KHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWx1ZSkpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnBlcmNlbnRWYWx1ZSA9IE51bWJlcihcbiAgICAgICAgICAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlICogMTAwKS50b0ZpeGVkKDYpLnJlcGxhY2UoL1xcLj8wKiQvLCAnJyksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLnBlcmNlbnRDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uZGlzcGxheVZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICghSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5wZXJjZW50VmFsdWUgPSBOdW1iZXIoKHZhbHVlICogMTAwKS50b0ZpeGVkKDYpLnJlcGxhY2UoL1xcLj8wKiQvLCAnJykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBVbnN1YnNjcmliZSBmcm9tIGNvbnRyb2wgaW50ZXJhY3Rpb25zXG4gICAgaWYgKHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgLy8gaWYgKHRoaXMuZGF0ZUNoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgIC8vICAgICB0aGlzLmRhdGVDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAvLyB9XG4gICAgaWYgKHRoaXMuZm9yY2VDbGVhclN1YnNjcmlwdGlvbikge1xuICAgICAgLy8gVW4tbGlzdGVuIGZvciBjbGVhciBldmVudHNcbiAgICAgIHRoaXMuZm9yY2VDbGVhclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wZXJjZW50Q2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICAvLyBVbi1saXN0ZW4gZm9yIGNsZWFyIGV2ZW50c1xuICAgICAgdGhpcy5wZXJjZW50Q2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGVDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZGF0ZUNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0dXNDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gIH1cblxuICBnZXQgZXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uZXJyb3JzO1xuICB9XG5cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWxpZDtcbiAgfVxuXG4gIGdldCBpc0RpcnR5KCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uZGlydHkgfHwgdGhpcy5jb250cm9sLmRpcnR5O1xuICB9XG5cbiAgZ2V0IGhhc1ZhbHVlKCkge1xuICAgIHJldHVybiAhSGVscGVycy5pc0VtcHR5KHRoaXMuZm9ybS52YWx1ZVt0aGlzLmNvbnRyb2wua2V5XSk7XG4gIH1cblxuICBnZXQgZm9jdXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNlZDtcbiAgfVxuXG4gIGdldCB0b29sdGlwKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udG9vbHRpcDtcbiAgfVxuXG4gIGdldCB0b29sdGlwUG9zaXRpb24oKSB7XG4gICAgaWYgKEhlbHBlcnMuaXNCbGFuayh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udG9vbHRpcFBvc2l0aW9uKSkge1xuICAgICAgcmV0dXJuICdyaWdodCc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udG9vbHRpcFBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0IHRvb2x0aXBTaXplKCkge1xuICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBTaXplKSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBTaXplO1xuICB9XG5cbiAgZ2V0IHRvb2x0aXBQcmVsaW5lKCkge1xuICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBQcmVsaW5lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnRvb2x0aXBQcmVsaW5lO1xuICB9XG5cbiAgZ2V0IHJlbW92ZVRvb2x0aXBBcnJvdygpIHtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZW1vdmVUb29sdGlwQXJyb3cpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmVtb3ZlVG9vbHRpcEFycm93O1xuICB9XG5cbiAgZ2V0IGFsd2F5c0FjdGl2ZSgpIHtcbiAgICAvLyBDb250cm9scyB0aGF0IGhhdmUgdGhlIGxhYmVsIGFjdGl2ZSBpZiB0aGVyZSBpcyBhbnkgdXNlciBlbnRlcmVkIHRleHQgaW4gdGhlIGZpZWxkXG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3BpY2tlcicgJiYgdGhpcy5fZW50ZXJlZFRleHQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDb250cm9scyB0aGF0IGFsd2F5cyBoYXZlIHRoZSBsYWJlbCBhY3RpdmVcbiAgICByZXR1cm4gKFxuICAgICAgW1xuICAgICAgICAndGlsZXMnLFxuICAgICAgICAnY2hlY2tsaXN0JyxcbiAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgJ2RhdGUnLFxuICAgICAgICAndGltZScsXG4gICAgICAgICdkYXRlLXRpbWUnLFxuICAgICAgICAnYWRkcmVzcycsXG4gICAgICAgICdmaWxlJyxcbiAgICAgICAgJ2VkaXRvcicsXG4gICAgICAgICdhY2UtZWRpdG9yJyxcbiAgICAgICAgJ3JhZGlvJyxcbiAgICAgICAgJ3RleHQtYXJlYScsXG4gICAgICAgICdxdWljay1ub3RlJyxcbiAgICAgIF0uaW5kZXhPZih0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUpICE9PSAtMVxuICAgICk7XG4gIH1cblxuICBnZXQgcmVxdWlyZXNFeHRyYVNwYWNpbmcoKSB7XG4gICAgLy8gQ2hpcHNcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAncGlja2VyJyAmJiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubXVsdGlwbGUgJiYgdGhpcy5oYXNWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGV4ZWN1dGVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbikge1xuICAgIGlmIChpbnRlcmFjdGlvbi5zY3JpcHQgJiYgSGVscGVycy5pc0Z1bmN0aW9uKGludGVyYWN0aW9uLnNjcmlwdCkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpZWxkSW50ZXJhY3Rpb25BcGkuZm9ybSA9IHRoaXMuZm9ybTtcbiAgICAgICAgdGhpcy5maWVsZEludGVyYWN0aW9uQXBpLmN1cnJlbnRLZXkgPSB0aGlzLmNvbnRyb2wua2V5O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGludGVyYWN0aW9uLnNjcmlwdCh0aGlzLmZpZWxkSW50ZXJhY3Rpb25BcGksIHRoaXMuY29udHJvbC5rZXkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmluZm8oJ0ZpZWxkIEludGVyYWN0aW9uIEVycm9yIScsIHRoaXMuY29udHJvbC5rZXkpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVR5cGluZyhldmVudDogYW55KSB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IGV2ZW50ICYmIGV2ZW50Lmxlbmd0aDtcbiAgICB0aGlzLl9lbnRlcmVkVGV4dCA9IGV2ZW50O1xuICB9XG5cbiAgaGFuZGxlRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQsIGZpZWxkPzogYW55KSB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gICAgdGhpcy5mb2N1c2VkRmllbGQgPSBmaWVsZDtcbiAgICBpZiAoIUhlbHBlcnMuaXNCbGFuayh0aGlzLmNoYXJhY3RlckNvdW50RmllbGQpICYmIHRoaXMuY2hhcmFjdGVyQ291bnRGaWVsZCA9PT0gZmllbGQpIHtcbiAgICAgIHRoaXMuc2hvd0NvdW50ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAnYWRkcmVzcycgJiZcbiAgICAgIGZpZWxkICYmXG4gICAgICAhSGVscGVycy5pc0VtcHR5KHRoaXMuZm9ybS52YWx1ZVt0aGlzLmNvbnRyb2wua2V5XSkgJiZcbiAgICAgICFIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLnZhbHVlW3RoaXMuY29udHJvbC5rZXldW2ZpZWxkXSlcbiAgICApIHtcbiAgICAgIHRoaXMuaGFuZGxlQWRkcmVzc0NoYW5nZSh7IHZhbHVlOiB0aGlzLmZvcm0udmFsdWVbdGhpcy5jb250cm9sLmtleV1bZmllbGRdLCBmaWVsZCB9KTtcbiAgICB9XG4gICAgdGhpcy5fZm9jdXNFbWl0dGVyLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgaGFuZGxlQmx1cihldmVudDogRm9jdXNFdmVudCkge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvY3VzZWRGaWVsZCA9ICcnO1xuICAgIHRoaXMuc2hvd0NvdW50ID0gZmFsc2U7XG4gICAgdGhpcy5fYmx1ckVtaXR0ZXIuZW1pdChldmVudCk7XG4gIH1cblxuICBjbGVhclZhbHVlKCkge1xuICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zZXRWYWx1ZShudWxsKTtcbiAgICB0aGlzLmZvcm1hdHRlZFZhbHVlID0gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZVRleHRBcmVhSW5wdXQoZXZlbnQpIHtcbiAgICB0aGlzLmVtaXRDaGFuZ2UoZXZlbnQpO1xuICAgIHRoaXMucmVzdHJpY3RLZXlzKGV2ZW50KTtcbiAgfVxuXG4gIGNoZWNrTWF4TGVuZ3RoKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY29udHJvbCAmJiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWF4bGVuZ3RoKSB7XG4gICAgICB0aGlzLml0ZW1Db3VudCA9IGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGg7XG4gICAgICB0aGlzLm1heExlbmd0aE1ldCA9IGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPj0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aDtcbiAgICB9XG4gIH1cblxuICBtb2RlbENoYW5nZVdpdGhSYXcoZXZlbnQpIHtcbiAgICBpZiAoSGVscGVycy5pc0VtcHR5KGV2ZW50LnZhbHVlKSkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW50ZXJlZFRleHQgPSAnJztcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3BpY2tlcicgJiYgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCkge1xuICAgICAgdGhpcy5pdGVtQ291bnQgPSBldmVudC52YWx1ZSA/IGV2ZW50LnZhbHVlLmxlbmd0aCA6IDA7XG4gICAgICB0aGlzLm1heExlbmd0aE1ldCA9IHRoaXMuaXRlbUNvdW50ID49IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGggPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yYXdWYWx1ZSA9IGV2ZW50LnJhd1ZhbHVlO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQudmFsdWUpO1xuICB9XG5cbiAgbW9kZWxDaGFuZ2UodmFsdWUpIHtcbiAgICBpZiAoSGVscGVycy5pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW50ZXJlZFRleHQgPSAnJztcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICB2YWxpZGF0ZU51bWJlck9uQmx1cihldmVudDogRm9jdXNFdmVudCkge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvY3VzZWRGaWVsZCA9ICcnO1xuICAgIHRoaXMuc2hvd0NvdW50ID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zdWJUeXBlID09PSAnbnVtYmVyJykge1xuICAgICAgdGhpcy52YWxpZGF0ZUludGVnZXJJbnB1dCgpO1xuICAgIH1cbiAgICB0aGlzLl9ibHVyRW1pdHRlci5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHZhbGlkYXRlSW50ZWdlcklucHV0KCkge1xuICAgIGNvbnN0IE5VTUJFUlNfT05MWSA9IC9eW1xcZFxcLV1cXGQqJC87XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWx1ZSAmJiAhTlVNQkVSU19PTkxZLnRlc3QodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlKSkge1xuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1hcmtBc0ludmFsaWQoXG4gICAgICAgIGAke3RoaXMubGFiZWxzLmludmFsaWRJbnRlZ2VySW5wdXR9ICR7dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmxhYmVsLnRvVXBwZXJDYXNlKCl9YCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVzdHJpY3RLZXlzKGV2ZW50KSB7XG4gICAgY29uc3QgTlVNQkVSU19PTkxZID0gL1swLTlcXC1dLztcbiAgICBjb25zdCBOVU1CRVJTX1dJVEhfREVDSU1BTF9ET1QgPSAvWzAtOVxcLlxcLV0vO1xuICAgIGNvbnN0IE5VTUJFUlNfV0lUSF9ERUNJTUFMX0RPVF9BTkRfQ09NTUEgPSAvWzAtOVxcLlxcLFxcLV0vO1xuICAgIGNvbnN0IFVUSUxJVFlfS0VZUyA9IFsnQmFja3NwYWNlJywgJ0RlbGV0ZScsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICdUYWInXTtcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXk7XG5cbiAgICAvLyBOdW1iZXJzIG9yIG51bWJlcnMgYW5kIGRlY2ltYWwgY2hhcmFjdGVycyBvbmx5XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zdWJUeXBlID09PSAnbnVtYmVyJyAmJiAhKE5VTUJFUlNfT05MWS50ZXN0KGtleSkgfHwgVVRJTElUWV9LRVlTLmluY2x1ZGVzKGtleSkpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBbJ2N1cnJlbmN5JywgJ2Zsb2F0JywgJ3BlcmNlbnRhZ2UnXS5pbmNsdWRlcyh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc3ViVHlwZSkgJiZcbiAgICAgICEoXG4gICAgICAgICh0aGlzLmRlY2ltYWxTZXBhcmF0b3IgPT09ICcuJyAmJiBOVU1CRVJTX1dJVEhfREVDSU1BTF9ET1QudGVzdChrZXkpKSB8fFxuICAgICAgICAodGhpcy5kZWNpbWFsU2VwYXJhdG9yID09PSAnLCcgJiYgTlVNQkVSU19XSVRIX0RFQ0lNQUxfRE9UX0FORF9DT01NQS50ZXN0KGtleSkpIHx8XG4gICAgICAgIFVUSUxJVFlfS0VZUy5pbmNsdWRlcyhrZXkpXG4gICAgICApXG4gICAgKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICAvLyBNYXggTGVuZ3RoXG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGggJiYgZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA+PSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWF4bGVuZ3RoKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVBlcmNlbnRDaGFuZ2UoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldFsndmFsdWUnXTtcbiAgICBjb25zdCBwZXJjZW50ID0gSGVscGVycy5pc0VtcHR5KHZhbHVlKSA/IG51bGwgOiBOdW1iZXIoKHZhbHVlIC8gMTAwKS50b0ZpeGVkKDYpLnJlcGxhY2UoL1xcLj8wKiQvLCAnJykpO1xuICAgIGlmICghSGVscGVycy5pc0VtcHR5KHBlcmNlbnQpKSB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHBlcmNlbnQpO1xuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnNldFZhbHVlKHBlcmNlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KG51bGwpO1xuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnNldFZhbHVlKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVRhYkZvclBpY2tlcnMoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZSAmJiBldmVudCAmJiBldmVudC5rZXlDb2RlKSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRVNDIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlRBQikge1xuICAgICAgICB0aGlzLnRvZ2dsZUFjdGl2ZShldmVudCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtaXRDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLmNoZWNrTWF4TGVuZ3RoKHZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZUVkaXQodmFsdWUpIHtcbiAgICB0aGlzLmVkaXQuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVTYXZlKHZhbHVlKSB7XG4gICAgdGhpcy5zYXZlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlRGVsZXRlKHZhbHVlKSB7XG4gICAgdGhpcy5kZWxldGUuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVVcGxvYWQodmFsdWUpIHtcbiAgICB0aGlzLnVwbG9hZC5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZUFkZHJlc3NDaGFuZ2UoZGF0YSkge1xuICAgIGlmIChcbiAgICAgIGRhdGEgJiZcbiAgICAgICFIZWxwZXJzLmlzQmxhbmsoZGF0YS52YWx1ZSkgJiZcbiAgICAgIGRhdGEuZmllbGQgJiZcbiAgICAgIHRoaXMuY29udHJvbC5jb25maWdbZGF0YS5maWVsZF0gJiZcbiAgICAgICFIZWxwZXJzLmlzRW1wdHkodGhpcy5jb250cm9sLmNvbmZpZ1tkYXRhLmZpZWxkXS5tYXhsZW5ndGgpXG4gICAgKSB7XG4gICAgICB0aGlzLml0ZW1Db3VudCA9IGRhdGEudmFsdWUubGVuZ3RoO1xuICAgICAgdGhpcy5jaGFyYWN0ZXJDb3VudEZpZWxkID0gZGF0YS5maWVsZDtcbiAgICAgIHRoaXMubWF4TGVuZ3RoID0gdGhpcy5jb250cm9sLmNvbmZpZ1tkYXRhLmZpZWxkXS5tYXhsZW5ndGg7XG4gICAgICB0aGlzLnNob3dDb3VudCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5tYXhMZW5ndGggPT09IHRoaXMuaXRlbUNvdW50KSB7XG4gICAgICAgIHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMucHVzaChkYXRhLmZpZWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMgPSB0aGlzLm1heExlbmd0aE1ldEVycm9yZmllbGRzLmZpbHRlcigoZmllbGQ6IHN0cmluZykgPT4gZmllbGQgIT09IGRhdGEuZmllbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVZhbGlkaXR5KHNob3VsZEV2ZW50QmVFbWl0dGVkKTogdm9pZCB7XG4gICAgY29uc3QgZW1pdEV2ZW50OiBib29sZWFuID0gc2hvdWxkRXZlbnRCZUVtaXR0ZWQgPyB0cnVlIDogZmFsc2U7XG4gICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQgfSk7XG4gIH1cbn1cbiJdfQ==