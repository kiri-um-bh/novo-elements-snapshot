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
const _c0 = function (a0) { return { "encrypted": a0 }; };
function NovoControlElement_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
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
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("novo-control-empty", !ctx_r1.hasValue)("novo-control-focused", ctx_r1.focused)("novo-control-filled", ctx_r1.hasValue)("novo-control-always-active", ctx_r1.alwaysActive || ctx_r1.form.controls[ctx_r1.control.key].placeholder)("novo-control-extra-spacing", ctx_r1.requiresExtraSpacing);
    i0.ɵɵattribute("for", ctx_r1.control.key);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.form.controls[ctx_r1.control.key].label, " ");
} }
const _c1 = function (a0, a1) { return { "bhi-circle": a0, "bhi-check": a1 }; };
function NovoControlElement_i_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 15);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
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
    const ctx_r3 = i0.ɵɵnextContext();
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
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(2, 2, ctx_r10.form.controls[ctx_r10.control.key].label), " ", ctx_r10.labels.isRequired, "");
} }
function NovoControlElement_div_12_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate3("", i0.ɵɵpipeBind1(2, 3, ctx_r11.form.controls[ctx_r11.control.key].label), " ", ctx_r11.labels.minLength, " ", ctx_r11.form.controls[ctx_r11.control.key].minlength, "");
} }
function NovoControlElement_div_12_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r12.labels.maxlengthMet(ctx_r12.form.controls[ctx_r12.control.key].maxlength));
} }
function NovoControlElement_div_12_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r13.labels.invalidMaxlength(ctx_r13.form.controls[ctx_r13.control.key].maxlength));
} }
function NovoControlElement_div_12_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r14.labels.maxRecordsReached);
} }
function NovoControlElement_div_12_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(2, 2, ctx_r15.form.controls[ctx_r15.control.key].label), " ", ctx_r15.labels.invalidEmail, "");
} }
function NovoControlElement_div_12_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(2, 2, ctx_r16.form.controls[ctx_r16.control.key].label), " ", ctx_r16.labels.isTooLarge, "");
} }
function NovoControlElement_div_12_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(2, 2, ctx_r17.form.controls[ctx_r17.control.key].label), " ", ctx_r17.labels.notValidYear, "");
} }
function NovoControlElement_div_12_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r18.errors.custom);
} }
function NovoControlElement_div_12_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r19.labels.invalidMaxlengthWithField(ctx_r19.control.config[ctx_r19.maxlengthErrorField] == null ? null : ctx_r19.control.config[ctx_r19.maxlengthErrorField].label, ctx_r19.control.config[ctx_r19.maxlengthErrorField] == null ? null : ctx_r19.control.config[ctx_r19.maxlengthErrorField].maxlength), " ");
} }
function NovoControlElement_div_12_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r20.labels.maxlengthMetWithField(ctx_r20.control.config[ctx_r20.maxlengthMetField] == null ? null : ctx_r20.control.config[ctx_r20.maxlengthMetField].label, ctx_r20.control.config[ctx_r20.maxlengthMetField] == null ? null : ctx_r20.control.config[ctx_r20.maxlengthMetField].maxlength), " ");
} }
function NovoControlElement_div_12_span_14_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const invalidAddressField_r27 = ctx.$implicit;
    const ctx_r26 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(2, 2, invalidAddressField_r27), " ", ctx_r26.labels.isRequired, " ");
} }
function NovoControlElement_div_12_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, NovoControlElement_div_12_span_14_span_1_Template, 3, 4, "span", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r21.errors == null ? null : ctx_r21.errors.invalidAddressFields);
} }
function NovoControlElement_div_12_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r22.form.controls[ctx_r22.control.key].description, " ");
} }
function NovoControlElement_div_12_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r23.form.controls[ctx_r23.control.key].warning);
} }
function NovoControlElement_div_12_span_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("error", (ctx_r24.errors == null ? null : ctx_r24.errors.maxlength) && !(ctx_r24.errors == null ? null : ctx_r24.errors.maxlengthFields) || (ctx_r24.errors == null ? null : ctx_r24.errors.maxlength) && (ctx_r24.errors == null ? null : ctx_r24.errors.maxlengthFields) && ctx_r24.errors.maxlengthFields.includes(ctx_r24.focusedField));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", ctx_r24.itemCount, "/", ctx_r24.maxLength || ctx_r24.form.controls[ctx_r24.control.key].maxlength, "");
} }
function NovoControlElement_div_12_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext(2);
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
    const ctx_r5 = i0.ɵɵnextContext();
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
    const ctx_r6 = i0.ɵɵnextContext();
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
export class NovoAutoSize {
    constructor(element) {
        this.element = element;
    }
    onInput(textArea) {
        this.adjust();
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.adjust();
        });
    }
    adjust() {
        const nativeElement = this.element.nativeElement;
        nativeElement.style.height = nativeElement.style.minHeight;
        nativeElement.style.height = `${nativeElement.scrollHeight}px`;
    }
}
NovoAutoSize.ɵfac = function NovoAutoSize_Factory(t) { return new (t || NovoAutoSize)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
NovoAutoSize.ɵdir = i0.ɵɵdefineDirective({ type: NovoAutoSize, selectors: [["textarea", "autosize", ""]], hostBindings: function NovoAutoSize_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("input", function NovoAutoSize_input_HostBindingHandler($event) { return ctx.onInput($event.target); });
    } } });
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
export class NovoControlElement extends OutsideClick {
    constructor(element, labels, dateFormatService, fieldInteractionApi, templateService, changeDetectorRef, locale = 'en-US') {
        super(element);
        this.labels = labels;
        this.dateFormatService = dateFormatService;
        this.fieldInteractionApi = fieldInteractionApi;
        this.templateService = templateService;
        this.changeDetectorRef = changeDetectorRef;
        this.locale = locale;
        this.condensed = false;
        this.autoFocus = false;
        this.change = new EventEmitter();
        this.edit = new EventEmitter();
        this.save = new EventEmitter();
        this.delete = new EventEmitter();
        this.upload = new EventEmitter();
        this.formattedValue = '';
        this.maxLengthMet = false;
        this.itemCount = 0;
        this._blurEmitter = new EventEmitter();
        this._focusEmitter = new EventEmitter();
        this._focused = false;
        this._enteredText = '';
        this._showCount = false;
        this.maxLengthMetErrorfields = [];
        this.templates = {};
        this.loading = false;
    }
    get onBlur() {
        return this._blurEmitter.asObservable();
    }
    get onFocus() {
        return this._focusEmitter.asObservable();
    }
    get maxlengthMetField() {
        if (this.maxLengthMetErrorfields && this.maxLengthMetErrorfields.length) {
            return this.maxLengthMetErrorfields.find((field) => field === this.focusedField) || '';
        }
        else {
            return '';
        }
    }
    get maxlengthErrorField() {
        if (this.errors && this.errors.maxlengthFields && this.errors.maxlengthFields.length) {
            return this.errors.maxlengthFields.find((field) => field === this.focusedField) || '';
        }
        else {
            return '';
        }
    }
    get showFieldMessage() {
        return !this.errors && !this.maxLengthMet && Helpers.isBlank(this.control.description);
    }
    get showMaxLengthMetMessage() {
        return ((this.isDirty && this.maxLengthMet && this.focused && (!this.errors || (this.errors && !this.errors.maxlength))) ||
            (this.isDirty &&
                this.maxlengthMetField &&
                this.focused &&
                (!this.errors || (this.errors && !this.errors.maxlengthFields.includes(this.maxlengthMetField)))));
    }
    get showErrorState() {
        return ((this.isDirty && this.errors) ||
            (this.focused && this.errors && this.errors.maxlength && this.errors.maxlengthFields) ||
            (this.focused && this.errors && this.errors.maxlength && this.errors.maxlengthFields && this.maxlengthErrorField));
    }
    get showCount() {
        const MAX_LENGTH_CONTROL_TYPES = ['textbox', 'picker', 'text-area'];
        const charCount = this.focused &&
            !!this.form.controls[this.control.key].maxlength &&
            MAX_LENGTH_CONTROL_TYPES.includes(this.form.controls[this.control.key].controlType);
        return this._showCount || charCount;
    }
    set showCount(value) {
        this._showCount = value;
    }
    get showMessages() {
        return (this.showCount ||
            !Helpers.isEmpty(this.form.controls[this.control.key].warning) ||
            !Helpers.isEmpty(this.form.controls[this.control.key].description));
    }
    get decimalSeparator() {
        return new Intl.NumberFormat(this.locale).format(1.2)[1];
    }
    ngAfterViewInit() {
        const DO_NOT_FOCUS_ME = ['picker', 'time', 'date', 'date-time'];
        if (this.autoFocus && !DO_NOT_FOCUS_ME.includes(this.control.controlType)) {
            setTimeout(() => {
                const input = this.element.nativeElement.querySelector('input');
                if (input) {
                    input.focus();
                }
            });
        }
    }
    ngAfterContentInit() {
        // Subscribe to control interactions
        if (this.control.interactions && !this.form.controls[this.control.key].restrictFieldInteractions) {
            for (const interaction of this.control.interactions) {
                switch (interaction.event) {
                    case 'blur':
                        this.valueChangeSubscription = this.onBlur.pipe(debounceTime(300)).subscribe(() => {
                            if (!this.form.controls[this.control.key].restrictFieldInteractions) {
                                this.executeInteraction(interaction);
                            }
                        });
                        break;
                    case 'focus':
                        this.valueChangeSubscription = this.onFocus.pipe(debounceTime(300)).subscribe(() => {
                            if (!this.form.controls[this.control.key].restrictFieldInteractions) {
                                this.executeInteraction(interaction);
                            }
                        });
                        break;
                    case 'change':
                        this.valueChangeSubscription = this.form.controls[this.control.key].valueChanges.pipe(debounceTime(300)).subscribe(() => {
                            if (!this.form.controls[this.control.key].restrictFieldInteractions) {
                                this.executeInteraction(interaction);
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
                    if (!this.form.controls[this.control.key].restrictFieldInteractions) {
                        this.executeInteraction(interaction);
                    }
                }
            }
        }
        setTimeout(() => {
            this.templates = this.templateService.getAll();
            this.loading = false;
            this.changeDetectorRef.markForCheck();
        });
    }
    ngOnInit() {
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
            this.forceClearSubscription = this.control.forceClear.subscribe(() => {
                this.clearValue();
            });
            // For Asynchronous validations
            this.statusChangeSubscription = this.form.controls[this.control.key].statusChanges.subscribe((validity) => {
                this.form.controls[this.control.key] = this.templateContext.$implicit;
                if (validity !== 'PENDING' && this.form.updateValueAndValidity) {
                    this.form.updateValueAndValidity();
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
            this.percentChangeSubscription = this.form.controls[this.control.key].displayValueChanges.subscribe((value) => {
                if (!Helpers.isEmpty(value)) {
                    this.templateContext.$implicit.percentValue = Number((value * 100).toFixed(6).replace(/\.?0*$/, ''));
                }
            });
        }
    }
    ngOnDestroy() {
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
        super.ngOnDestroy();
    }
    get errors() {
        return this.form.controls[this.control.key].errors;
    }
    get isValid() {
        return this.form.controls[this.control.key].valid;
    }
    get isDirty() {
        return this.form.controls[this.control.key].dirty || this.control.dirty;
    }
    get hasValue() {
        return !Helpers.isEmpty(this.form.value[this.control.key]);
    }
    get focused() {
        return this._focused;
    }
    get tooltip() {
        return this.form.controls[this.control.key].tooltip;
    }
    get tooltipPosition() {
        if (Helpers.isBlank(this.form.controls[this.control.key].tooltipPosition)) {
            return 'right';
        }
        return this.form.controls[this.control.key].tooltipPosition;
    }
    get tooltipSize() {
        if (Helpers.isBlank(this.form.controls[this.control.key].tooltipSize)) {
            return '';
        }
        return this.form.controls[this.control.key].tooltipSize;
    }
    get tooltipPreline() {
        if (Helpers.isBlank(this.form.controls[this.control.key].tooltipPreline)) {
            return false;
        }
        return this.form.controls[this.control.key].tooltipPreline;
    }
    get removeTooltipArrow() {
        if (Helpers.isBlank(this.form.controls[this.control.key].removeTooltipArrow)) {
            return false;
        }
        return this.form.controls[this.control.key].removeTooltipArrow;
    }
    get alwaysActive() {
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
    }
    get requiresExtraSpacing() {
        // Chips
        if (this.form.controls[this.control.key].controlType === 'picker' && this.form.controls[this.control.key].multiple && this.hasValue) {
            return true;
        }
        return false;
    }
    executeInteraction(interaction) {
        if (interaction.script && Helpers.isFunction(interaction.script)) {
            setTimeout(() => {
                this.fieldInteractionApi.form = this.form;
                this.fieldInteractionApi.currentKey = this.control.key;
                try {
                    interaction.script(this.fieldInteractionApi, this.control.key);
                }
                catch (err) {
                    console.info('Field Interaction Error!', this.control.key); // tslint:disable-line
                    console.error(err); // tslint:disable-line
                }
            });
        }
    }
    handleTyping(event) {
        this._focused = event && event.length;
        this._enteredText = event;
    }
    handleFocus(event, field) {
        this._focused = true;
        this.focusedField = field;
        if (!Helpers.isBlank(this.characterCountField) && this.characterCountField === field) {
            this.showCount = true;
        }
        else if (this.form.controls[this.control.key].controlType === 'address' &&
            field &&
            !Helpers.isEmpty(this.form.value[this.control.key]) &&
            !Helpers.isBlank(this.form.value[this.control.key][field])) {
            this.handleAddressChange({ value: this.form.value[this.control.key][field], field });
        }
        this._focusEmitter.emit(event);
    }
    handleBlur(event) {
        this._focused = false;
        this.focusedField = '';
        this.showCount = false;
        this._blurEmitter.emit(event);
    }
    clearValue() {
        this.form.controls[this.control.key].setValue(null);
        this.formattedValue = null;
    }
    handleTextAreaInput(event) {
        this.emitChange(event);
        this.restrictKeys(event);
    }
    checkMaxLength(event) {
        if (this.control && this.form.controls[this.control.key].maxlength) {
            this.itemCount = event.target.value.length;
            this.maxLengthMet = event.target.value.length >= this.form.controls[this.control.key].maxlength;
        }
    }
    modelChangeWithRaw(event) {
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
    }
    modelChange(value) {
        if (Helpers.isEmpty(value)) {
            this._focused = false;
            this._enteredText = '';
        }
        this.change.emit(value);
    }
    validateNumberOnBlur(event) {
        this._focused = false;
        this.focusedField = '';
        this.showCount = false;
        if (this.form.controls[this.control.key].subType === 'number') {
            this.validateIntegerInput();
        }
        this._blurEmitter.emit(event);
    }
    validateIntegerInput() {
        const NUMBERS_ONLY = /^[\d\-]\d*$/;
        if (this.form.controls[this.control.key].value && !NUMBERS_ONLY.test(this.form.controls[this.control.key].value)) {
            this.form.controls[this.control.key].markAsInvalid(`${this.labels.invalidIntegerInput} ${this.form.controls[this.control.key].label.toUpperCase()}`);
        }
    }
    restrictKeys(event) {
        const NUMBERS_ONLY = /[0-9\-]/;
        const NUMBERS_WITH_DECIMAL_DOT = /[0-9\.\-]/;
        const NUMBERS_WITH_DECIMAL_DOT_AND_COMMA = /[0-9\.\,\-]/;
        const UTILITY_KEYS = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
        const key = event.key;
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
    }
    handlePercentChange(event) {
        const value = event.target['value'];
        const percent = Helpers.isEmpty(value) ? null : Number((value / 100).toFixed(6).replace(/\.?0*$/, ''));
        if (!Helpers.isEmpty(percent)) {
            this.change.emit(percent);
            this.form.controls[this.control.key].setValue(percent);
        }
        else {
            this.change.emit(null);
            this.form.controls[this.control.key].setValue(null);
        }
    }
    handleTabForPickers(event) {
        if (this.active && event && event.keyCode) {
            if (event.keyCode === KeyCodes.ESC || event.keyCode === KeyCodes.TAB) {
                this.toggleActive(event, false);
            }
        }
    }
    emitChange(value) {
        this.change.emit(value);
        this.checkMaxLength(value);
    }
    handleEdit(value) {
        this.edit.emit(value);
    }
    handleSave(value) {
        this.save.emit(value);
    }
    handleDelete(value) {
        this.delete.emit(value);
    }
    handleUpload(value) {
        this.upload.emit(value);
    }
    handleAddressChange(data) {
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
                this.maxLengthMetErrorfields = this.maxLengthMetErrorfields.filter((field) => field !== data.field);
            }
        }
    }
    updateValidity(shouldEventBeEmitted) {
        const emitEvent = shouldEventBeEmitted ? true : false;
        this.form.controls[this.control.key].updateValueAndValidity({ emitEvent });
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoControlElement, [{
        type: Component,
        args: [{
                selector: 'novo-control',
                template: `
        <div class="novo-control-container" [hidden]="form.controls[control.key].hidden || form.controls[control.key].type === 'hidden' || form.controls[control.key].controlType === 'hidden'">
            <!--Encrypted Field-->
            <span [tooltip]="labels.encryptedFieldTooltip" [tooltipPosition]="'right'"><i [hidden]="!form.controls[control.key].encrypted"
            class="bhi-lock"></i></span>
            <!--Label (for horizontal)-->
            <label [attr.for]="control.key" *ngIf="form.layout !== 'vertical' && form.controls[control.key].label && !condensed" [ngClass]="{'encrypted': form.controls[control.key].encrypted }">
                {{ form.controls[control.key].label }}
            </label>
            <div class="novo-control-outer-container">
                <!--Label (for vertical)-->
                <label
                    *ngIf="form.layout === 'vertical' && form.controls[control.key].label && !condensed"
                    class="novo-control-label"
                    [attr.for]="control.key"
                    [class.novo-control-empty]="!hasValue"
                    [class.novo-control-focused]="focused"
                    [class.novo-control-filled]="hasValue"
                    [class.novo-control-always-active]="alwaysActive || form.controls[control.key].placeholder"
                    [class.novo-control-extra-spacing]="requiresExtraSpacing">
                    {{ form.controls[control.key].label }}
                </label>
                <div class="novo-control-inner-container" [class.required]="form.controls[control.key].required && !form.controls[control.key].readOnly">
                    <div class="novo-control-inner-input-container" [class.novo-control-filled]="hasValue" [class.novo-control-empty]="!hasValue">
                      <!--Required Indicator-->
                        <i [hidden]="!form.controls[control.key].required || form.controls[control.key].readOnly"
                            class="required-indicator {{ form.controls[control.key].controlType }}"
                            [ngClass]="{'bhi-circle': !isValid, 'bhi-check': isValid}" *ngIf="!condensed || form.controls[control.key].required">
                        </i>
                        <!--Form Controls-->
                        <div class="novo-control-input {{ form.controls[control.key].controlType }}" [attr.data-automation-id]="control.key" [class.control-disabled]="form.controls[control.key].disabled">
                            <!--TODO prefix/suffix on the control-->
                            <ng-container *ngIf="templates">
                              <ng-container *ngTemplateOutlet="templates[form.controls[control.key].controlType]; context: templateContext"></ng-container>
                            </ng-container>
                            <ng-container *ngIf="!templates || loading">
                                <div class="novo-control-input-container novo-control-input-with-label">
                                  <input type="text"/>
                                </div>
                            </ng-container>
                        </div>
                    </div>
                    <!--Error Message-->
                    <div class="field-message {{ form.controls[control.key].controlType }}" *ngIf="!condensed" [class.has-tip]="form.controls[control.key].tipWell" [ngClass]="showErrorState || showMaxLengthMetMessage ? 'error-shown' : 'error-hidden'">
                        <div class="messages" [ngClass]="showMessages ? 'count-shown messages-shown' : 'count-hidden messages-hidden'">
                            <span class="error-text" *ngIf="showFieldMessage"></span>
                            <span class="error-text" *ngIf="isDirty && errors?.required && form.controls[control.key].controlType !== 'address'">{{ form.controls[control.key].label | uppercase }} {{ labels.isRequired }}</span>
                            <span class="error-text" *ngIf="isDirty && errors?.minlength">{{ form.controls[control.key].label | uppercase }} {{ labels.minLength }} {{ form.controls[control.key].minlength }}</span>
                            <span class="error-text" *ngIf="isDirty && maxLengthMet && focused && !errors?.maxlength && form.controls[control.key].controlType !== 'picker'">{{ labels.maxlengthMet(form.controls[control.key].maxlength) }}</span>
                            <span class="error-text" *ngIf="errors?.maxlength && focused && !errors?.maxlengthFields">{{ labels.invalidMaxlength(form.controls[control.key].maxlength) }}</span>
                            <span class="error-text" *ngIf="maxLengthMet && form.controls[control.key].controlType === 'picker'">{{ labels.maxRecordsReached }}</span>
                            <span class="error-text" *ngIf="isDirty && errors?.invalidEmail">{{ form.controls[control.key].label | uppercase }} {{ labels.invalidEmail }}</span>
                            <span class="error-text" *ngIf="isDirty && (errors?.integerTooLarge || errors?.doubleTooLarge)">{{ form.controls[control.key].label | uppercase }} {{ labels.isTooLarge }}</span>
                            <span *ngIf="isDirty && errors?.minYear">{{ form.controls[control.key].label | uppercase }} {{ labels.notValidYear }}</span>
                            <span class="error-text" *ngIf="isDirty && (errors?.custom)">{{ errors.custom }}</span>
                            <span class="error-text" *ngIf="errors?.maxlength && errors?.maxlengthFields && maxlengthErrorField && focused">
                                {{ labels.invalidMaxlengthWithField(control.config[maxlengthErrorField]?.label, control.config[maxlengthErrorField]?.maxlength) }}
                            </span>
                            <span class="error-text" *ngIf="isDirty && maxlengthMetField && focused && !errors?.maxlengthFields?.includes(maxlengthMetField)">
                              {{ labels.maxlengthMetWithField(control.config[maxlengthMetField]?.label, control.config[maxlengthMetField]?.maxlength) }}
                            </span>
                            <span *ngIf="isDirty && errors?.invalidAddress">
                                <span class="error-text" *ngFor="let invalidAddressField of errors?.invalidAddressFields">{{ invalidAddressField | uppercase }} {{ labels.isRequired }} </span>
                            </span>
                            <!--Field Hint-->
                            <span class="description" *ngIf="form.controls[control.key].description">
                                {{ form.controls[control.key].description }}
                            </span>
                            <span class="warning-text" *ngIf="form.controls[control.key].warning">{{ form.controls[control.key].warning }}</span>

                        </div>
                        <span class="character-count" [class.error]="((errors?.maxlength && !errors?.maxlengthFields) || (errors?.maxlength && errors?.maxlengthFields && errors.maxlengthFields.includes(focusedField)))" *ngIf="showCount && form.controls[control.key].controlType !== 'picker'">{{ itemCount }}/{{ maxLength || form.controls[control.key].maxlength }}</span>
                        <span class="record-count" [class.zero-count]="itemCount === 0" [class.row-picker]="form.controls[this.control.key].config.columns" *ngIf="showCount && form.controls[control.key].controlType === 'picker'">{{ itemCount }}/{{ maxLength || form.controls[control.key].maxlength }}</span>
                    </div>
                    <!--Tip Wel-->
                    <novo-tip-well *ngIf="form.controls[control.key].tipWell" [name]="control.key" [tip]="form.controls[control.key]?.tipWell?.tip" [icon]="form.controls[control.key]?.tipWell?.icon" [button]="form.controls[control.key]?.tipWell?.button" [sanitize]="form.controls[control.key]?.tipWell?.sanitize"></novo-tip-well>
                </div>
                <i *ngIf="form.controls[control.key].fieldInteractionloading" class="loading">
                    <svg version="1.1"
                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                     x="0px" y="0px" width="18.2px" height="18.5px" viewBox="0 0 18.2 18.5" style="enable-background:new 0 0 18.2 18.5;"
                     xml:space="preserve">
                    <style type="text/css">
                        .spinner { fill:#FFFFFF; }
                    </style>
                        <path class="spinner" d="M9.2,18.5C4.1,18.5,0,14.4,0,9.2S4.1,0,9.2,0c0.9,0,1.9,0.1,2.7,0.4c0.8,0.2,1.2,1.1,1,1.9
                            c-0.2,0.8-1.1,1.2-1.9,1C10.5,3.1,9.9,3,9.2,3C5.8,3,3,5.8,3,9.2s2.8,6.2,6.2,6.2c2.8,0,5.3-1.9,6-4.7c0.2-0.8,1-1.3,1.8-1.1
                            c0.8,0.2,1.3,1,1.1,1.8C17.1,15.7,13.4,18.5,9.2,18.5z"/>
                    </svg>
                </i>
            </div>
        </div>
    `,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0NvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sVUFBVSxFQUNWLFlBQVksRUFHWixTQUFTLEVBQ1QsWUFBWSxFQUdaLFNBQVMsRUFDVCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsU0FBUztBQUNULE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE1BQU07QUFDTixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7Ozs7Ozs7SUF3Q3RFLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFROzs7SUFGNkcsd0dBQWdFO0lBQTlLLHlDQUF3QjtJQUMzQixlQUNKO0lBREksK0VBQ0o7OztJQUdJLGlDQVNJO0lBQUEsWUFDSjtJQUFBLGlCQUFROzs7SUFOSixzREFBc0Msd0NBQUEsd0NBQUEsMkdBQUEsMkRBQUE7SUFEdEMseUNBQXdCO0lBTXhCLGVBQ0o7SUFESSwrRUFDSjs7OztJQUlRLHdCQUdJ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QTBCaEUsa0JBQWtCO2NBekc5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E0RlA7Z0JBQ0gsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSx3Q0FBd0M7b0JBQ25ELDBCQUEwQixFQUFFLHdDQUF3QztvQkFDcEUsa0JBQWtCLEVBQUUscUNBQXFDO29CQUN6RCxnQkFBZ0IsRUFBRSxtQ0FBbUM7b0JBQ3JELHlCQUF5QixFQUFFLGFBQWE7b0JBQ3hDLHlCQUF5QixFQUFFLDBCQUEwQjtvQkFDckQsa0JBQWtCLEVBQUUsb0JBQW9CO2lCQUN6QzthQUNGOztzQkE2REksTUFBTTt1QkFBQyxTQUFTOztrQkEzRGxCLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUVOLE1BQU07O2tCQUVOLE1BQU07O2tCQUVOLE1BQU07O2tCQUVOLE1BQU07O2tCQUVOLE1BQU07bUJBQUMsTUFBTTs7a0JBS2IsTUFBTTttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBEaXJlY3RpdmUsXG4gIEhvc3RMaXN0ZW5lcixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgTE9DQUxFX0lELFxuICBJbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4vLyBBUFBcbmltcG9ydCB7IE91dHNpZGVDbGljayB9IGZyb20gJy4uLy4uL3V0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRlLWZvcm1hdC9EYXRlRm9ybWF0JztcbmltcG9ydCB7IEZpZWxkSW50ZXJhY3Rpb25BcGkgfSBmcm9tICcuL0ZpZWxkSW50ZXJhY3Rpb25BcGknO1xuaW1wb3J0IHsgTm92b1RlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlL05vdm9UZW1wbGF0ZVNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNYXNrT3B0aW9ucyB7XG4gIG1hc2s6IGFueTtcbiAga2VlcENoYXJQb3NpdGlvbnM6IGJvb2xlYW47XG4gIGd1aWRlOiBib29sZWFuO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd0ZXh0YXJlYVthdXRvc2l6ZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQXV0b1NpemUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudC50YXJnZXQnXSlcbiAgb25JbnB1dCh0ZXh0QXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuYWRqdXN0KCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFkanVzdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRqdXN0KCk6IHZvaWQge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBuYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IG5hdGl2ZUVsZW1lbnQuc3R5bGUubWluSGVpZ2h0O1xuICAgIG5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7bmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHR9cHhgO1xuICB9XG59XG4vLyB1bmRvIGFsbCB0ZW1wbGF0ZSBjb250ZXh0IHJlZmVyZW5jZXMhXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWNvbnRhaW5lclwiIFtoaWRkZW5dPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uaGlkZGVuIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnR5cGUgPT09ICdoaWRkZW4nIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAnaGlkZGVuJ1wiPlxuICAgICAgICAgICAgPCEtLUVuY3J5cHRlZCBGaWVsZC0tPlxuICAgICAgICAgICAgPHNwYW4gW3Rvb2x0aXBdPVwibGFiZWxzLmVuY3J5cHRlZEZpZWxkVG9vbHRpcFwiIFt0b29sdGlwUG9zaXRpb25dPVwiJ3JpZ2h0J1wiPjxpIFtoaWRkZW5dPVwiIWZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmVuY3J5cHRlZFwiXG4gICAgICAgICAgICBjbGFzcz1cImJoaS1sb2NrXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgIDwhLS1MYWJlbCAoZm9yIGhvcml6b250YWwpLS0+XG4gICAgICAgICAgICA8bGFiZWwgW2F0dHIuZm9yXT1cImNvbnRyb2wua2V5XCIgKm5nSWY9XCJmb3JtLmxheW91dCAhPT0gJ3ZlcnRpY2FsJyAmJiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCAmJiAhY29uZGVuc2VkXCIgW25nQ2xhc3NdPVwieydlbmNyeXB0ZWQnOiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5lbmNyeXB0ZWQgfVwiPlxuICAgICAgICAgICAgICAgIHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIH19XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1vdXRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8IS0tTGFiZWwgKGZvciB2ZXJ0aWNhbCktLT5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmb3JtLmxheW91dCA9PT0gJ3ZlcnRpY2FsJyAmJiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCAmJiAhY29uZGVuc2VkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJub3ZvLWNvbnRyb2wtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5mb3JdPVwiY29udHJvbC5rZXlcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Mubm92by1jb250cm9sLWVtcHR5XT1cIiFoYXNWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5ub3ZvLWNvbnRyb2wtZm9jdXNlZF09XCJmb2N1c2VkXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLm5vdm8tY29udHJvbC1maWxsZWRdPVwiaGFzVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Mubm92by1jb250cm9sLWFsd2F5cy1hY3RpdmVdPVwiYWx3YXlzQWN0aXZlIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLm5vdm8tY29udHJvbC1leHRyYS1zcGFjaW5nXT1cInJlcXVpcmVzRXh0cmFTcGFjaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIH19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWlubmVyLWNvbnRhaW5lclwiIFtjbGFzcy5yZXF1aXJlZF09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5yZXF1aXJlZCAmJiAhZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ucmVhZE9ubHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1pbm5lci1pbnB1dC1jb250YWluZXJcIiBbY2xhc3Mubm92by1jb250cm9sLWZpbGxlZF09XCJoYXNWYWx1ZVwiIFtjbGFzcy5ub3ZvLWNvbnRyb2wtZW1wdHldPVwiIWhhc1ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLVJlcXVpcmVkIEluZGljYXRvci0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgW2hpZGRlbl09XCIhZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ucmVxdWlyZWQgfHwgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ucmVhZE9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmVxdWlyZWQtaW5kaWNhdG9yIHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlIH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2JoaS1jaXJjbGUnOiAhaXNWYWxpZCwgJ2JoaS1jaGVjayc6IGlzVmFsaWR9XCIgKm5nSWY9XCIhY29uZGVuc2VkIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnJlcXVpcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tRm9ybSBDb250cm9scy0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1pbnB1dCB7eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSB9fVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjb250cm9sLmtleVwiIFtjbGFzcy5jb250cm9sLWRpc2FibGVkXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVRPRE8gcHJlZml4L3N1ZmZpeCBvbiB0aGUgY29udHJvbC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0ZW1wbGF0ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGVdOyBjb250ZXh0OiB0ZW1wbGF0ZUNvbnRleHRcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXRlbXBsYXRlcyB8fCBsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtaW5wdXQtY29udGFpbmVyIG5vdm8tY29udHJvbC1pbnB1dC13aXRoLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLUVycm9yIE1lc3NhZ2UtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLW1lc3NhZ2Uge3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgfX1cIiAqbmdJZj1cIiFjb25kZW5zZWRcIiBbY2xhc3MuaGFzLXRpcF09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS50aXBXZWxsXCIgW25nQ2xhc3NdPVwic2hvd0Vycm9yU3RhdGUgfHwgc2hvd01heExlbmd0aE1ldE1lc3NhZ2UgPyAnZXJyb3Itc2hvd24nIDogJ2Vycm9yLWhpZGRlbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlc1wiIFtuZ0NsYXNzXT1cInNob3dNZXNzYWdlcyA/ICdjb3VudC1zaG93biBtZXNzYWdlcy1zaG93bicgOiAnY291bnQtaGlkZGVuIG1lc3NhZ2VzLWhpZGRlbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cInNob3dGaWVsZE1lc3NhZ2VcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJpc0RpcnR5ICYmIGVycm9ycz8ucmVxdWlyZWQgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgIT09ICdhZGRyZXNzJ1wiPnt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIHwgdXBwZXJjYXNlIH19IHt7IGxhYmVscy5pc1JlcXVpcmVkIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiaXNEaXJ0eSAmJiBlcnJvcnM/Lm1pbmxlbmd0aFwiPnt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmxhYmVsIHwgdXBwZXJjYXNlIH19IHt7IGxhYmVscy5taW5MZW5ndGggfX0ge3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubWlubGVuZ3RoIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiaXNEaXJ0eSAmJiBtYXhMZW5ndGhNZXQgJiYgZm9jdXNlZCAmJiAhZXJyb3JzPy5tYXhsZW5ndGggJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgIT09ICdwaWNrZXInXCI+e3sgbGFiZWxzLm1heGxlbmd0aE1ldChmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5tYXhsZW5ndGgpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiZXJyb3JzPy5tYXhsZW5ndGggJiYgZm9jdXNlZCAmJiAhZXJyb3JzPy5tYXhsZW5ndGhGaWVsZHNcIj57eyBsYWJlbHMuaW52YWxpZE1heGxlbmd0aChmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5tYXhsZW5ndGgpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwibWF4TGVuZ3RoTWV0ICYmIGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAncGlja2VyJ1wiPnt7IGxhYmVscy5tYXhSZWNvcmRzUmVhY2hlZCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImlzRGlydHkgJiYgZXJyb3JzPy5pbnZhbGlkRW1haWxcIj57eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCB8IHVwcGVyY2FzZSB9fSB7eyBsYWJlbHMuaW52YWxpZEVtYWlsIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3ItdGV4dFwiICpuZ0lmPVwiaXNEaXJ0eSAmJiAoZXJyb3JzPy5pbnRlZ2VyVG9vTGFyZ2UgfHwgZXJyb3JzPy5kb3VibGVUb29MYXJnZSlcIj57eyBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5sYWJlbCB8IHVwcGVyY2FzZSB9fSB7eyBsYWJlbHMuaXNUb29MYXJnZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzRGlydHkgJiYgZXJyb3JzPy5taW5ZZWFyXCI+e3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ubGFiZWwgfCB1cHBlcmNhc2UgfX0ge3sgbGFiZWxzLm5vdFZhbGlkWWVhciB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImlzRGlydHkgJiYgKGVycm9ycz8uY3VzdG9tKVwiPnt7IGVycm9ycy5jdXN0b20gfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nSWY9XCJlcnJvcnM/Lm1heGxlbmd0aCAmJiBlcnJvcnM/Lm1heGxlbmd0aEZpZWxkcyAmJiBtYXhsZW5ndGhFcnJvckZpZWxkICYmIGZvY3VzZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFiZWxzLmludmFsaWRNYXhsZW5ndGhXaXRoRmllbGQoY29udHJvbC5jb25maWdbbWF4bGVuZ3RoRXJyb3JGaWVsZF0/LmxhYmVsLCBjb250cm9sLmNvbmZpZ1ttYXhsZW5ndGhFcnJvckZpZWxkXT8ubWF4bGVuZ3RoKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yLXRleHRcIiAqbmdJZj1cImlzRGlydHkgJiYgbWF4bGVuZ3RoTWV0RmllbGQgJiYgZm9jdXNlZCAmJiAhZXJyb3JzPy5tYXhsZW5ndGhGaWVsZHM/LmluY2x1ZGVzKG1heGxlbmd0aE1ldEZpZWxkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFiZWxzLm1heGxlbmd0aE1ldFdpdGhGaWVsZChjb250cm9sLmNvbmZpZ1ttYXhsZW5ndGhNZXRGaWVsZF0/LmxhYmVsLCBjb250cm9sLmNvbmZpZ1ttYXhsZW5ndGhNZXRGaWVsZF0/Lm1heGxlbmd0aCkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJpc0RpcnR5ICYmIGVycm9ycz8uaW52YWxpZEFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvci10ZXh0XCIgKm5nRm9yPVwibGV0IGludmFsaWRBZGRyZXNzRmllbGQgb2YgZXJyb3JzPy5pbnZhbGlkQWRkcmVzc0ZpZWxkc1wiPnt7IGludmFsaWRBZGRyZXNzRmllbGQgfCB1cHBlcmNhc2UgfX0ge3sgbGFiZWxzLmlzUmVxdWlyZWQgfX0gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tRmllbGQgSGludC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb25cIiAqbmdJZj1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwid2FybmluZy10ZXh0XCIgKm5nSWY9XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS53YXJuaW5nXCI+e3sgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0ud2FybmluZyB9fTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoYXJhY3Rlci1jb3VudFwiIFtjbGFzcy5lcnJvcl09XCIoKGVycm9ycz8ubWF4bGVuZ3RoICYmICFlcnJvcnM/Lm1heGxlbmd0aEZpZWxkcykgfHwgKGVycm9ycz8ubWF4bGVuZ3RoICYmIGVycm9ycz8ubWF4bGVuZ3RoRmllbGRzICYmIGVycm9ycy5tYXhsZW5ndGhGaWVsZHMuaW5jbHVkZXMoZm9jdXNlZEZpZWxkKSkpXCIgKm5nSWY9XCJzaG93Q291bnQgJiYgZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUgIT09ICdwaWNrZXInXCI+e3sgaXRlbUNvdW50IH19L3t7IG1heExlbmd0aCB8fCBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5tYXhsZW5ndGggfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlY29yZC1jb3VudFwiIFtjbGFzcy56ZXJvLWNvdW50XT1cIml0ZW1Db3VudCA9PT0gMFwiIFtjbGFzcy5yb3ctcGlja2VyXT1cImZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29uZmlnLmNvbHVtbnNcIiAqbmdJZj1cInNob3dDb3VudCAmJiBmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XS5jb250cm9sVHlwZSA9PT0gJ3BpY2tlcidcIj57eyBpdGVtQ291bnQgfX0ve3sgbWF4TGVuZ3RoIHx8IGZvcm0uY29udHJvbHNbY29udHJvbC5rZXldLm1heGxlbmd0aCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS1UaXAgV2VsLS0+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLXRpcC13ZWxsICpuZ0lmPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0udGlwV2VsbFwiIFtuYW1lXT1cImNvbnRyb2wua2V5XCIgW3RpcF09XCJmb3JtLmNvbnRyb2xzW2NvbnRyb2wua2V5XT8udGlwV2VsbD8udGlwXCIgW2ljb25dPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0/LnRpcFdlbGw/Lmljb25cIiBbYnV0dG9uXT1cImZvcm0uY29udHJvbHNbY29udHJvbC5rZXldPy50aXBXZWxsPy5idXR0b25cIiBbc2FuaXRpemVdPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0/LnRpcFdlbGw/LnNhbml0aXplXCI+PC9ub3ZvLXRpcC13ZWxsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpICpuZ0lmPVwiZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uZmllbGRJbnRlcmFjdGlvbmxvYWRpbmdcIiBjbGFzcz1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4bWxuczphPVwiaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wL1wiXG4gICAgICAgICAgICAgICAgICAgICB4PVwiMHB4XCIgeT1cIjBweFwiIHdpZHRoPVwiMTguMnB4XCIgaGVpZ2h0PVwiMTguNXB4XCIgdmlld0JveD1cIjAgMCAxOC4yIDE4LjVcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTguMiAxOC41O1wiXG4gICAgICAgICAgICAgICAgICAgICB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Bpbm5lciB7IGZpbGw6I0ZGRkZGRjsgfVxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJzcGlubmVyXCIgZD1cIk05LjIsMTguNUM0LjEsMTguNSwwLDE0LjQsMCw5LjJTNC4xLDAsOS4yLDBjMC45LDAsMS45LDAuMSwyLjcsMC40YzAuOCwwLjIsMS4yLDEuMSwxLDEuOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMtMC4yLDAuOC0xLjEsMS4yLTEuOSwxQzEwLjUsMy4xLDkuOSwzLDkuMiwzQzUuOCwzLDMsNS44LDMsOS4yczIuOCw2LjIsNi4yLDYuMmMyLjgsMCw1LjMtMS45LDYtNC43YzAuMi0wLjgsMS0xLjMsMS44LTEuMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMwLjgsMC4yLDEuMywxLDEuMSwxLjhDMTcuMSwxNS43LDEzLjQsMTguNSw5LjIsMTguNXpcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzc10nOiAnZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUnLFxuICAgICdbYXR0ci5kYXRhLWNvbnRyb2wtdHlwZV0nOiAnZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uY29udHJvbFR5cGUnLFxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Zvcm0uY29udHJvbHNbY29udHJvbC5rZXldLnJlYWRPbmx5JyxcbiAgICAnW2NsYXNzLmhpZGRlbl0nOiAnZm9ybS5jb250cm9sc1tjb250cm9sLmtleV0uaGlkZGVuJyxcbiAgICAnW2F0dHIuZGF0YS1jb250cm9sLWtleV0nOiAnY29udHJvbC5rZXknLFxuICAgICdbY2xhc3MuaW5saW5lLWVtYmVkZGVkXSc6ICdjb250cm9sLmlzSW5saW5lRW1iZWRkZWQnLFxuICAgICdbY2xhc3MuZW1iZWRkZWRdJzogJ2NvbnRyb2wuaXNFbWJlZGRlZCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Db250cm9sRWxlbWVudCBleHRlbmRzIE91dHNpZGVDbGljayBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KClcbiAgY29udHJvbDogYW55O1xuICBASW5wdXQoKVxuICBmb3JtOiBhbnk7XG4gIEBJbnB1dCgpXG4gIGNvbmRlbnNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBhdXRvRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpXG4gIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBlZGl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHNhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZGVsZXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHVwbG9hZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoJ2JsdXInKVxuICBnZXQgb25CbHVyKCk6IE9ic2VydmFibGU8Rm9jdXNFdmVudD4ge1xuICAgIHJldHVybiB0aGlzLl9ibHVyRW1pdHRlci5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIEBPdXRwdXQoJ2ZvY3VzJylcbiAgZ2V0IG9uRm9jdXMoKTogT2JzZXJ2YWJsZTxGb2N1c0V2ZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzRW1pdHRlci5hc09ic2VydmFibGUoKTtcbiAgfVxuICBwdWJsaWMgbWF4TGVuZ3RoOiBudW1iZXI7XG4gIHB1YmxpYyBmb2N1c2VkRmllbGQ6IHN0cmluZztcbiAgZm9ybWF0dGVkVmFsdWU6IHN0cmluZyA9ICcnO1xuICBwZXJjZW50VmFsdWU6IG51bWJlcjtcbiAgbWF4TGVuZ3RoTWV0OiBib29sZWFuID0gZmFsc2U7XG4gIGl0ZW1Db3VudDogbnVtYmVyID0gMDtcbiAgbWFza09wdGlvbnM6IElNYXNrT3B0aW9ucztcblxuICBwcml2YXRlIF9ibHVyRW1pdHRlcjogRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuICBwcml2YXRlIF9mb2N1c0VtaXR0ZXI6IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgcHJpdmF0ZSBfZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9lbnRlcmVkVGV4dDogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgZm9yY2VDbGVhclN1YnNjcmlwdGlvbjogYW55O1xuICBwcml2YXRlIHBlcmNlbnRDaGFuZ2VTdWJzY3JpcHRpb246IGFueTtcbiAgcHJpdmF0ZSB2YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbjogYW55O1xuICBwcml2YXRlIGRhdGVDaGFuZ2VTdWJzY3JpcHRpb246IGFueTtcbiAgcHJpdmF0ZSBfc2hvd0NvdW50OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgY2hhcmFjdGVyQ291bnRGaWVsZDogc3RyaW5nO1xuICBwcml2YXRlIG1heExlbmd0aE1ldEVycm9yZmllbGRzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIHN0YXR1c0NoYW5nZVN1YnNjcmlwdGlvbjogYW55O1xuXG4gIHRlbXBsYXRlczogYW55ID0ge307XG4gIHRlbXBsYXRlQ29udGV4dDogYW55O1xuICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGF0ZUZvcm1hdFNlcnZpY2U6IERhdGVGb3JtYXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmllbGRJbnRlcmFjdGlvbkFwaTogRmllbGRJbnRlcmFjdGlvbkFwaSxcbiAgICBwcml2YXRlIHRlbXBsYXRlU2VydmljZTogTm92b1RlbXBsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZyA9ICdlbi1VUycsXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnQpO1xuICB9XG5cbiAgZ2V0IG1heGxlbmd0aE1ldEZpZWxkKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMgJiYgdGhpcy5tYXhMZW5ndGhNZXRFcnJvcmZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1heExlbmd0aE1ldEVycm9yZmllbGRzLmZpbmQoKGZpZWxkOiBzdHJpbmcpID0+IGZpZWxkID09PSB0aGlzLmZvY3VzZWRGaWVsZCkgfHwgJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICBnZXQgbWF4bGVuZ3RoRXJyb3JGaWVsZCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmVycm9ycyAmJiB0aGlzLmVycm9ycy5tYXhsZW5ndGhGaWVsZHMgJiYgdGhpcy5lcnJvcnMubWF4bGVuZ3RoRmllbGRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLm1heGxlbmd0aEZpZWxkcy5maW5kKChmaWVsZDogc3RyaW5nKSA9PiBmaWVsZCA9PT0gdGhpcy5mb2N1c2VkRmllbGQpIHx8ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNob3dGaWVsZE1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuICF0aGlzLmVycm9ycyAmJiAhdGhpcy5tYXhMZW5ndGhNZXQgJiYgSGVscGVycy5pc0JsYW5rKHRoaXMuY29udHJvbC5kZXNjcmlwdGlvbik7XG4gIH1cblxuICBnZXQgc2hvd01heExlbmd0aE1ldE1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmlzRGlydHkgJiYgdGhpcy5tYXhMZW5ndGhNZXQgJiYgdGhpcy5mb2N1c2VkICYmICghdGhpcy5lcnJvcnMgfHwgKHRoaXMuZXJyb3JzICYmICF0aGlzLmVycm9ycy5tYXhsZW5ndGgpKSkgfHxcbiAgICAgICh0aGlzLmlzRGlydHkgJiZcbiAgICAgICAgdGhpcy5tYXhsZW5ndGhNZXRGaWVsZCAmJlxuICAgICAgICB0aGlzLmZvY3VzZWQgJiZcbiAgICAgICAgKCF0aGlzLmVycm9ycyB8fCAodGhpcy5lcnJvcnMgJiYgIXRoaXMuZXJyb3JzLm1heGxlbmd0aEZpZWxkcy5pbmNsdWRlcyh0aGlzLm1heGxlbmd0aE1ldEZpZWxkKSkpKVxuICAgICk7XG4gIH1cblxuICBnZXQgc2hvd0Vycm9yU3RhdGUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmlzRGlydHkgJiYgdGhpcy5lcnJvcnMpIHx8XG4gICAgICAodGhpcy5mb2N1c2VkICYmIHRoaXMuZXJyb3JzICYmIHRoaXMuZXJyb3JzLm1heGxlbmd0aCAmJiB0aGlzLmVycm9ycy5tYXhsZW5ndGhGaWVsZHMpIHx8XG4gICAgICAodGhpcy5mb2N1c2VkICYmIHRoaXMuZXJyb3JzICYmIHRoaXMuZXJyb3JzLm1heGxlbmd0aCAmJiB0aGlzLmVycm9ycy5tYXhsZW5ndGhGaWVsZHMgJiYgdGhpcy5tYXhsZW5ndGhFcnJvckZpZWxkKVxuICAgICk7XG4gIH1cblxuICBnZXQgc2hvd0NvdW50KCkge1xuICAgIGNvbnN0IE1BWF9MRU5HVEhfQ09OVFJPTF9UWVBFUzogc3RyaW5nW10gPSBbJ3RleHRib3gnLCAncGlja2VyJywgJ3RleHQtYXJlYSddO1xuICAgIGNvbnN0IGNoYXJDb3VudDogYm9vbGVhbiA9XG4gICAgICB0aGlzLmZvY3VzZWQgJiZcbiAgICAgICEhdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCAmJlxuICAgICAgTUFYX0xFTkdUSF9DT05UUk9MX1RZUEVTLmluY2x1ZGVzKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSk7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dDb3VudCB8fCBjaGFyQ291bnQ7XG4gIH1cblxuICBzZXQgc2hvd0NvdW50KHZhbHVlKSB7XG4gICAgdGhpcy5fc2hvd0NvdW50ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgc2hvd01lc3NhZ2VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnNob3dDb3VudCB8fFxuICAgICAgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ud2FybmluZykgfHxcbiAgICAgICFIZWxwZXJzLmlzRW1wdHkodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmRlc2NyaXB0aW9uKVxuICAgICk7XG4gIH1cblxuICBnZXQgZGVjaW1hbFNlcGFyYXRvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5sb2NhbGUpLmZvcm1hdCgxLjIpWzFdO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IERPX05PVF9GT0NVU19NRTogc3RyaW5nW10gPSBbJ3BpY2tlcicsICd0aW1lJywgJ2RhdGUnLCAnZGF0ZS10aW1lJ107XG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzICYmICFET19OT1RfRk9DVVNfTUUuaW5jbHVkZXModGhpcy5jb250cm9sLmNvbnRyb2xUeXBlKSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0OiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAvLyBTdWJzY3JpYmUgdG8gY29udHJvbCBpbnRlcmFjdGlvbnNcbiAgICBpZiAodGhpcy5jb250cm9sLmludGVyYWN0aW9ucyAmJiAhdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgIGZvciAoY29uc3QgaW50ZXJhY3Rpb24gb2YgdGhpcy5jb250cm9sLmludGVyYWN0aW9ucykge1xuICAgICAgICBzd2l0Y2ggKGludGVyYWN0aW9uLmV2ZW50KSB7XG4gICAgICAgICAgY2FzZSAnYmx1cic6XG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5vbkJsdXIucGlwZShkZWJvdW5jZVRpbWUoMzAwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ucmVzdHJpY3RGaWVsZEludGVyYWN0aW9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdmb2N1cyc6XG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5vbkZvY3VzLnBpcGUoZGVib3VuY2VUaW1lKDMwMCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2hhbmdlJzpcbiAgICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsdWVDaGFuZ2VzLnBpcGUoZGVib3VuY2VUaW1lKDMwMCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJlc3RyaWN0RmllbGRJbnRlcmFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaW5pdCc6XG4gICAgICAgICAgICBpbnRlcmFjdGlvbi5pbnZva2VPbkluaXQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnRlcmFjdGlvbi5pbnZva2VPbkluaXQpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZXN0cmljdEZpZWxkSW50ZXJhY3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy50ZW1wbGF0ZXMgPSB0aGlzLnRlbXBsYXRlU2VydmljZS5nZXRBbGwoKTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgLy8gTWFrZSBzdXJlIHRvIGluaXRpYWxseSBmb3JtYXQgdGhlIHRpbWUgY29udHJvbHNcbiAgICBpZiAodGhpcy5jb250cm9sICYmIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS52YWx1ZSkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICd0ZXh0Ym94JyB8fFxuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICd0ZXh0LWFyZWEnXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5pdGVtQ291bnQgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsdWUubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5jb250cm9sKSB7XG4gICAgICAvLyBMaXN0ZW4gdG8gY2xlYXIgZXZlbnRzXG4gICAgICB0aGlzLmZvcmNlQ2xlYXJTdWJzY3JpcHRpb24gPSB0aGlzLmNvbnRyb2wuZm9yY2VDbGVhci5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNsZWFyVmFsdWUoKTtcbiAgICAgIH0pO1xuICAgICAgLy8gRm9yIEFzeW5jaHJvbm91cyB2YWxpZGF0aW9uc1xuICAgICAgdGhpcy5zdGF0dXNDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbGlkaXR5KSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XSA9IHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdDtcbiAgICAgICAgaWYgKHZhbGlkaXR5ICE9PSAnUEVORElORycgJiYgdGhpcy5mb3JtLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkpIHtcbiAgICAgICAgICB0aGlzLmZvcm0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQgPSB7XG4gICAgICAkaW1wbGljaXQ6IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgcmVzdHJpY3RLZXlzOiB0aGlzLnJlc3RyaWN0S2V5cy5iaW5kKHRoaXMpLFxuICAgICAgICBlbWl0Q2hhbmdlOiB0aGlzLmVtaXRDaGFuZ2UuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlRm9jdXM6IHRoaXMuaGFuZGxlRm9jdXMuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlUGVyY2VudENoYW5nZTogdGhpcy5oYW5kbGVQZXJjZW50Q2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZUJsdXI6IHRoaXMuaGFuZGxlQmx1ci5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVUZXh0QXJlYUlucHV0OiB0aGlzLmhhbmRsZVRleHRBcmVhSW5wdXQuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlRWRpdDogdGhpcy5oYW5kbGVFZGl0LmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZVNhdmU6IHRoaXMuaGFuZGxlU2F2ZS5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVEZWxldGU6IHRoaXMuaGFuZGxlRGVsZXRlLmJpbmQodGhpcyksXG4gICAgICAgIGhhbmRsZVVwbG9hZDogdGhpcy5oYW5kbGVVcGxvYWQuYmluZCh0aGlzKSxcbiAgICAgICAgbW9kZWxDaGFuZ2U6IHRoaXMubW9kZWxDaGFuZ2UuYmluZCh0aGlzKSxcbiAgICAgICAgbW9kZWxDaGFuZ2VXaXRoUmF3OiB0aGlzLm1vZGVsQ2hhbmdlV2l0aFJhdy5iaW5kKHRoaXMpLFxuICAgICAgICBoYW5kbGVBZGRyZXNzQ2hhbmdlOiB0aGlzLmhhbmRsZUFkZHJlc3NDaGFuZ2UuYmluZCh0aGlzKSxcbiAgICAgICAgaGFuZGxlVHlwaW5nOiB0aGlzLmhhbmRsZVR5cGluZy5iaW5kKHRoaXMpLFxuICAgICAgICB1cGRhdGVWYWxpZGl0eTogdGhpcy51cGRhdGVWYWxpZGl0eS5iaW5kKHRoaXMpLFxuICAgICAgICB0b2dnbGVBY3RpdmU6IHRoaXMudG9nZ2xlQWN0aXZlLmJpbmQodGhpcyksXG4gICAgICAgIHZhbGlkYXRlSW50ZWdlcklucHV0OiB0aGlzLnZhbGlkYXRlSW50ZWdlcklucHV0LmJpbmQodGhpcyksXG4gICAgICAgIHZhbGlkYXRlTnVtYmVyT25CbHVyOiB0aGlzLnZhbGlkYXRlTnVtYmVyT25CbHVyLmJpbmQodGhpcyksXG4gICAgICB9LFxuICAgICAgZm9ybTogdGhpcy5mb3JtLFxuICAgIH07XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnRvb2x0aXBQb3NpdGlvbiA9IHRoaXMudG9vbHRpcFBvc2l0aW9uO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC50b29sdGlwID0gdGhpcy50b29sdGlwO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC50b29sdGlwU2l6ZSA9IHRoaXMudG9vbHRpcFNpemU7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnRvb2x0aXBQcmVsaW5lID0gdGhpcy50b29sdGlwUHJlbGluZTtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQucmVtb3ZlVG9vbHRpcEFycm93ID0gdGhpcy5yZW1vdmVUb29sdGlwQXJyb3c7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnN0YXJ0dXBGb2N1cyA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zdGFydHVwRm9jdXM7XG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LmZpbGVCcm93c2VySW1hZ2VVcGxvYWRVcmwgPSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybDtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQubWluaW1hbCA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5taW5pbWFsO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0LiRpbXBsaWNpdC5jdXJyZW5jeUZvcm1hdCA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jdXJyZW5jeUZvcm1hdDtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQucGVyY2VudFZhbHVlID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnBlcmNlbnRWYWx1ZTtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQuY29uZmlnID0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbmZpZztcblxuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0gJiYgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnN1YlR5cGUgPT09ICdwZXJjZW50YWdlJykge1xuICAgICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlKSkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlQ29udGV4dC4kaW1wbGljaXQucGVyY2VudFZhbHVlID0gTnVtYmVyKFxuICAgICAgICAgICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsdWUgKiAxMDApLnRvRml4ZWQoNikucmVwbGFjZSgvXFwuPzAqJC8sICcnKSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGVyY2VudENoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5kaXNwbGF5VmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQuJGltcGxpY2l0LnBlcmNlbnRWYWx1ZSA9IE51bWJlcigodmFsdWUgKiAxMDApLnRvRml4ZWQoNikucmVwbGFjZSgvXFwuPzAqJC8sICcnKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIFVuc3Vic2NyaWJlIGZyb20gY29udHJvbCBpbnRlcmFjdGlvbnNcbiAgICBpZiAodGhpcy52YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICAvLyBpZiAodGhpcy5kYXRlQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgLy8gICAgIHRoaXMuZGF0ZUNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIC8vIH1cbiAgICBpZiAodGhpcy5mb3JjZUNsZWFyU3Vic2NyaXB0aW9uKSB7XG4gICAgICAvLyBVbi1saXN0ZW4gZm9yIGNsZWFyIGV2ZW50c1xuICAgICAgdGhpcy5mb3JjZUNsZWFyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnBlcmNlbnRDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIC8vIFVuLWxpc3RlbiBmb3IgY2xlYXIgZXZlbnRzXG4gICAgICB0aGlzLnBlcmNlbnRDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0ZUNoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5kYXRlQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXR1c0NoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdGF0dXNDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgfVxuXG4gIGdldCBlcnJvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5lcnJvcnM7XG4gIH1cblxuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbGlkO1xuICB9XG5cbiAgZ2V0IGlzRGlydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5kaXJ0eSB8fCB0aGlzLmNvbnRyb2wuZGlydHk7XG4gIH1cblxuICBnZXQgaGFzVmFsdWUoKSB7XG4gICAgcmV0dXJuICFIZWxwZXJzLmlzRW1wdHkodGhpcy5mb3JtLnZhbHVlW3RoaXMuY29udHJvbC5rZXldKTtcbiAgfVxuXG4gIGdldCBmb2N1c2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9mb2N1c2VkO1xuICB9XG5cbiAgZ2V0IHRvb2x0aXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS50b29sdGlwO1xuICB9XG5cbiAgZ2V0IHRvb2x0aXBQb3NpdGlvbigpIHtcbiAgICBpZiAoSGVscGVycy5pc0JsYW5rKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS50b29sdGlwUG9zaXRpb24pKSB7XG4gICAgICByZXR1cm4gJ3JpZ2h0JztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS50b29sdGlwUG9zaXRpb247XG4gIH1cblxuICBnZXQgdG9vbHRpcFNpemUoKSB7XG4gICAgaWYgKEhlbHBlcnMuaXNCbGFuayh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udG9vbHRpcFNpemUpKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udG9vbHRpcFNpemU7XG4gIH1cblxuICBnZXQgdG9vbHRpcFByZWxpbmUoKSB7XG4gICAgaWYgKEhlbHBlcnMuaXNCbGFuayh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udG9vbHRpcFByZWxpbmUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udG9vbHRpcFByZWxpbmU7XG4gIH1cblxuICBnZXQgcmVtb3ZlVG9vbHRpcEFycm93KCkge1xuICAgIGlmIChIZWxwZXJzLmlzQmxhbmsodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJlbW92ZVRvb2x0aXBBcnJvdykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5yZW1vdmVUb29sdGlwQXJyb3c7XG4gIH1cblxuICBnZXQgYWx3YXlzQWN0aXZlKCkge1xuICAgIC8vIENvbnRyb2xzIHRoYXQgaGF2ZSB0aGUgbGFiZWwgYWN0aXZlIGlmIHRoZXJlIGlzIGFueSB1c2VyIGVudGVyZWQgdGV4dCBpbiB0aGUgZmllbGRcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAncGlja2VyJyAmJiB0aGlzLl9lbnRlcmVkVGV4dC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIENvbnRyb2xzIHRoYXQgYWx3YXlzIGhhdmUgdGhlIGxhYmVsIGFjdGl2ZVxuICAgIHJldHVybiAoXG4gICAgICBbXG4gICAgICAgICd0aWxlcycsXG4gICAgICAgICdjaGVja2xpc3QnLFxuICAgICAgICAnY2hlY2tib3gnLFxuICAgICAgICAnZGF0ZScsXG4gICAgICAgICd0aW1lJyxcbiAgICAgICAgJ2RhdGUtdGltZScsXG4gICAgICAgICdhZGRyZXNzJyxcbiAgICAgICAgJ2ZpbGUnLFxuICAgICAgICAnZWRpdG9yJyxcbiAgICAgICAgJ2FjZS1lZGl0b3InLFxuICAgICAgICAncmFkaW8nLFxuICAgICAgICAndGV4dC1hcmVhJyxcbiAgICAgICAgJ3F1aWNrLW5vdGUnLFxuICAgICAgXS5pbmRleE9mKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5jb250cm9sVHlwZSkgIT09IC0xXG4gICAgKTtcbiAgfVxuXG4gIGdldCByZXF1aXJlc0V4dHJhU3BhY2luZygpIHtcbiAgICAvLyBDaGlwc1xuICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICdwaWNrZXInICYmIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tdWx0aXBsZSAmJiB0aGlzLmhhc1ZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZXhlY3V0ZUludGVyYWN0aW9uKGludGVyYWN0aW9uKSB7XG4gICAgaWYgKGludGVyYWN0aW9uLnNjcmlwdCAmJiBIZWxwZXJzLmlzRnVuY3Rpb24oaW50ZXJhY3Rpb24uc2NyaXB0KSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmllbGRJbnRlcmFjdGlvbkFwaS5mb3JtID0gdGhpcy5mb3JtO1xuICAgICAgICB0aGlzLmZpZWxkSW50ZXJhY3Rpb25BcGkuY3VycmVudEtleSA9IHRoaXMuY29udHJvbC5rZXk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaW50ZXJhY3Rpb24uc2NyaXB0KHRoaXMuZmllbGRJbnRlcmFjdGlvbkFwaSwgdGhpcy5jb250cm9sLmtleSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuaW5mbygnRmllbGQgSW50ZXJhY3Rpb24gRXJyb3IhJywgdGhpcy5jb250cm9sLmtleSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlVHlwaW5nKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLl9mb2N1c2VkID0gZXZlbnQgJiYgZXZlbnQubGVuZ3RoO1xuICAgIHRoaXMuX2VudGVyZWRUZXh0ID0gZXZlbnQ7XG4gIH1cblxuICBoYW5kbGVGb2N1cyhldmVudDogRm9jdXNFdmVudCwgZmllbGQ/OiBhbnkpIHtcbiAgICB0aGlzLl9mb2N1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLmZvY3VzZWRGaWVsZCA9IGZpZWxkO1xuICAgIGlmICghSGVscGVycy5pc0JsYW5rKHRoaXMuY2hhcmFjdGVyQ291bnRGaWVsZCkgJiYgdGhpcy5jaGFyYWN0ZXJDb3VudEZpZWxkID09PSBmaWVsZCkge1xuICAgICAgdGhpcy5zaG93Q291bnQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uY29udHJvbFR5cGUgPT09ICdhZGRyZXNzJyAmJlxuICAgICAgZmllbGQgJiZcbiAgICAgICFIZWxwZXJzLmlzRW1wdHkodGhpcy5mb3JtLnZhbHVlW3RoaXMuY29udHJvbC5rZXldKSAmJlxuICAgICAgIUhlbHBlcnMuaXNCbGFuayh0aGlzLmZvcm0udmFsdWVbdGhpcy5jb250cm9sLmtleV1bZmllbGRdKVxuICAgICkge1xuICAgICAgdGhpcy5oYW5kbGVBZGRyZXNzQ2hhbmdlKHsgdmFsdWU6IHRoaXMuZm9ybS52YWx1ZVt0aGlzLmNvbnRyb2wua2V5XVtmaWVsZF0sIGZpZWxkIH0pO1xuICAgIH1cbiAgICB0aGlzLl9mb2N1c0VtaXR0ZXIuZW1pdChldmVudCk7XG4gIH1cblxuICBoYW5kbGVCbHVyKGV2ZW50OiBGb2N1c0V2ZW50KSB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9jdXNlZEZpZWxkID0gJyc7XG4gICAgdGhpcy5zaG93Q291bnQgPSBmYWxzZTtcbiAgICB0aGlzLl9ibHVyRW1pdHRlci5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIGNsZWFyVmFsdWUoKSB7XG4gICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnNldFZhbHVlKG51bGwpO1xuICAgIHRoaXMuZm9ybWF0dGVkVmFsdWUgPSBudWxsO1xuICB9XG5cbiAgaGFuZGxlVGV4dEFyZWFJbnB1dChldmVudCkge1xuICAgIHRoaXMuZW1pdENoYW5nZShldmVudCk7XG4gICAgdGhpcy5yZXN0cmljdEtleXMoZXZlbnQpO1xuICB9XG5cbiAgY2hlY2tNYXhMZW5ndGgoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5jb250cm9sICYmIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGgpIHtcbiAgICAgIHRoaXMuaXRlbUNvdW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aDtcbiAgICAgIHRoaXMubWF4TGVuZ3RoTWV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA+PSB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWF4bGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIG1vZGVsQ2hhbmdlV2l0aFJhdyhldmVudCkge1xuICAgIGlmIChIZWxwZXJzLmlzRW1wdHkoZXZlbnQudmFsdWUpKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbnRlcmVkVGV4dCA9ICcnO1xuICAgIH1cbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLmNvbnRyb2xUeXBlID09PSAncGlja2VyJyAmJiB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWF4bGVuZ3RoKSB7XG4gICAgICB0aGlzLml0ZW1Db3VudCA9IGV2ZW50LnZhbHVlID8gZXZlbnQudmFsdWUubGVuZ3RoIDogMDtcbiAgICAgIHRoaXMubWF4TGVuZ3RoTWV0ID0gdGhpcy5pdGVtQ291bnQgPj0gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnJhd1ZhbHVlID0gZXZlbnQucmF3VmFsdWU7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChldmVudC52YWx1ZSk7XG4gIH1cblxuICBtb2RlbENoYW5nZSh2YWx1ZSkge1xuICAgIGlmIChIZWxwZXJzLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbnRlcmVkVGV4dCA9ICcnO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIHZhbGlkYXRlTnVtYmVyT25CbHVyKGV2ZW50OiBGb2N1c0V2ZW50KSB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9jdXNlZEZpZWxkID0gJyc7XG4gICAgdGhpcy5zaG93Q291bnQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnN1YlR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlSW50ZWdlcklucHV0KCk7XG4gICAgfVxuICAgIHRoaXMuX2JsdXJFbWl0dGVyLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgdmFsaWRhdGVJbnRlZ2VySW5wdXQoKSB7XG4gICAgY29uc3QgTlVNQkVSU19PTkxZID0gL15bXFxkXFwtXVxcZCokLztcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnZhbHVlICYmICFOVU1CRVJTX09OTFkudGVzdCh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udmFsdWUpKSB7XG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubWFya0FzSW52YWxpZChcbiAgICAgICAgYCR7dGhpcy5sYWJlbHMuaW52YWxpZEludGVnZXJJbnB1dH0gJHt0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0ubGFiZWwudG9VcHBlckNhc2UoKX1gLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXN0cmljdEtleXMoZXZlbnQpIHtcbiAgICBjb25zdCBOVU1CRVJTX09OTFkgPSAvWzAtOVxcLV0vO1xuICAgIGNvbnN0IE5VTUJFUlNfV0lUSF9ERUNJTUFMX0RPVCA9IC9bMC05XFwuXFwtXS87XG4gICAgY29uc3QgTlVNQkVSU19XSVRIX0RFQ0lNQUxfRE9UX0FORF9DT01NQSA9IC9bMC05XFwuXFwsXFwtXS87XG4gICAgY29uc3QgVVRJTElUWV9LRVlTID0gWydCYWNrc3BhY2UnLCAnRGVsZXRlJywgJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0JywgJ1RhYiddO1xuICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleTtcblxuICAgIC8vIE51bWJlcnMgb3IgbnVtYmVycyBhbmQgZGVjaW1hbCBjaGFyYWN0ZXJzIG9ubHlcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLnN1YlR5cGUgPT09ICdudW1iZXInICYmICEoTlVNQkVSU19PTkxZLnRlc3Qoa2V5KSB8fCBVVElMSVRZX0tFWVMuaW5jbHVkZXMoa2V5KSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIFsnY3VycmVuY3knLCAnZmxvYXQnLCAncGVyY2VudGFnZSddLmluY2x1ZGVzKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5zdWJUeXBlKSAmJlxuICAgICAgIShcbiAgICAgICAgKHRoaXMuZGVjaW1hbFNlcGFyYXRvciA9PT0gJy4nICYmIE5VTUJFUlNfV0lUSF9ERUNJTUFMX0RPVC50ZXN0KGtleSkpIHx8XG4gICAgICAgICh0aGlzLmRlY2ltYWxTZXBhcmF0b3IgPT09ICcsJyAmJiBOVU1CRVJTX1dJVEhfREVDSU1BTF9ET1RfQU5EX0NPTU1BLnRlc3Qoa2V5KSkgfHxcbiAgICAgICAgVVRJTElUWV9LRVlTLmluY2x1ZGVzKGtleSlcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIC8vIE1heCBMZW5ndGhcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuY29udHJvbC5rZXldLm1heGxlbmd0aCAmJiBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID49IHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2wua2V5XS5tYXhsZW5ndGgpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUGVyY2VudENoYW5nZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0Wyd2YWx1ZSddO1xuICAgIGNvbnN0IHBlcmNlbnQgPSBIZWxwZXJzLmlzRW1wdHkodmFsdWUpID8gbnVsbCA6IE51bWJlcigodmFsdWUgLyAxMDApLnRvRml4ZWQoNikucmVwbGFjZSgvXFwuPzAqJC8sICcnKSk7XG4gICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkocGVyY2VudCkpIHtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQocGVyY2VudCk7XG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc2V0VmFsdWUocGVyY2VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQobnVsbCk7XG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0uc2V0VmFsdWUobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlVGFiRm9yUGlja2VycyhldmVudDogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aXZlICYmIGV2ZW50ICYmIGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FU0MgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuVEFCKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlQWN0aXZlKGV2ZW50LCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZW1pdENoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIHRoaXMuY2hlY2tNYXhMZW5ndGgodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlRWRpdCh2YWx1ZSkge1xuICAgIHRoaXMuZWRpdC5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZVNhdmUodmFsdWUpIHtcbiAgICB0aGlzLnNhdmUuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVEZWxldGUodmFsdWUpIHtcbiAgICB0aGlzLmRlbGV0ZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZVVwbG9hZCh2YWx1ZSkge1xuICAgIHRoaXMudXBsb2FkLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlQWRkcmVzc0NoYW5nZShkYXRhKSB7XG4gICAgaWYgKFxuICAgICAgZGF0YSAmJlxuICAgICAgIUhlbHBlcnMuaXNCbGFuayhkYXRhLnZhbHVlKSAmJlxuICAgICAgZGF0YS5maWVsZCAmJlxuICAgICAgdGhpcy5jb250cm9sLmNvbmZpZ1tkYXRhLmZpZWxkXSAmJlxuICAgICAgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmNvbnRyb2wuY29uZmlnW2RhdGEuZmllbGRdLm1heGxlbmd0aClcbiAgICApIHtcbiAgICAgIHRoaXMuaXRlbUNvdW50ID0gZGF0YS52YWx1ZS5sZW5ndGg7XG4gICAgICB0aGlzLmNoYXJhY3RlckNvdW50RmllbGQgPSBkYXRhLmZpZWxkO1xuICAgICAgdGhpcy5tYXhMZW5ndGggPSB0aGlzLmNvbnRyb2wuY29uZmlnW2RhdGEuZmllbGRdLm1heGxlbmd0aDtcbiAgICAgIHRoaXMuc2hvd0NvdW50ID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLm1heExlbmd0aCA9PT0gdGhpcy5pdGVtQ291bnQpIHtcbiAgICAgICAgdGhpcy5tYXhMZW5ndGhNZXRFcnJvcmZpZWxkcy5wdXNoKGRhdGEuZmllbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXhMZW5ndGhNZXRFcnJvcmZpZWxkcyA9IHRoaXMubWF4TGVuZ3RoTWV0RXJyb3JmaWVsZHMuZmlsdGVyKChmaWVsZDogc3RyaW5nKSA9PiBmaWVsZCAhPT0gZGF0YS5maWVsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVmFsaWRpdHkoc2hvdWxkRXZlbnRCZUVtaXR0ZWQpOiB2b2lkIHtcbiAgICBjb25zdCBlbWl0RXZlbnQ6IGJvb2xlYW4gPSBzaG91bGRFdmVudEJlRW1pdHRlZCA/IHRydWUgOiBmYWxzZTtcbiAgICB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5jb250cm9sLmtleV0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudCB9KTtcbiAgfVxufVxuIl19