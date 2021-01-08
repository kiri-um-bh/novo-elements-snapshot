// NG2
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { NovoLabelService } from '../../../../services/novo-label-service';
// Vendor
// APP
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/novo-label-service";
import * as i2 from "@angular/common";
import * as i3 from "../../../list/List";
import * as i4 from "../../../loading/Loading";
function EntityPickerResult_novo_list_item_0_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 19);
    i0.ɵɵelement(1, "i", 20);
    i0.ɵɵelement(2, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r1.highlight(ctx_r1.match.data.companyName || (ctx_r1.match.data == null ? null : ctx_r1.match.data.clientCorporation == null ? null : ctx_r1.match.data.clientCorporation.name), ctx_r1.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵelement(1, "i", 22);
    i0.ɵɵelement(2, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r2.highlight(ctx_r2.match.data.clientContact.firstName + " " + ctx_r2.match.data.clientContact.lastName, ctx_r2.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵelement(1, "i", 24);
    i0.ɵɵelement(2, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r3.highlight(ctx_r3.match.data.candidate.firstName + " " + ctx_r3.match.data.candidate.lastName, ctx_r3.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵelement(1, "i", 26);
    i0.ɵɵelement(2, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r4.renderTimestamp(ctx_r4.match.data.dateBegin) + " - " + ctx_r4.renderTimestamp(ctx_r4.match.data.dateEnd), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵelement(1, "i", 26);
    i0.ɵɵelement(2, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r5.renderTimestamp(ctx_r5.match.data.startTime), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 27);
    i0.ɵɵelement(1, "i", 28);
    i0.ɵɵelement(2, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r6.renderTimeNoOffset(ctx_r6.match.data.startTime) + " - " + ctx_r6.renderTimeNoOffset(ctx_r6.match.data.endTime), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 29);
    i0.ɵɵelement(1, "i", 30);
    i0.ɵɵelement(2, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r7.highlight(ctx_r7.match.data.jobOrder.title, ctx_r7.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 31);
    i0.ɵɵelement(1, "i", 24);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind2(4, 2, ctx_r8.match.data.numAssigned * ctx_r8.match.data.fillRatio, "1.0-0"), " / ", ctx_r8.match.data.openings, "");
} }
function EntityPickerResult_novo_list_item_0_p_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵelement(1, "i", 33);
    i0.ɵɵelement(2, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r9.highlight(ctx_r9.match.data.email, ctx_r9.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 34);
    i0.ɵɵelement(1, "i", 35);
    i0.ɵɵelement(2, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r10.highlight(ctx_r10.match.data.phone, ctx_r10.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_16_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 3);
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHtml", ctx_r16.highlight(ctx_r16.match.data.address.city, ctx_r16.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_16_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, ", ");
    i0.ɵɵelementEnd();
} }
function EntityPickerResult_novo_list_item_0_p_16_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 3);
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHtml", ctx_r18.highlight(ctx_r18.match.data.address.state, ctx_r18.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 36);
    i0.ɵɵelement(1, "i", 37);
    i0.ɵɵtemplate(2, EntityPickerResult_novo_list_item_0_p_16_span_2_Template, 1, 1, "span", 38);
    i0.ɵɵtemplate(3, EntityPickerResult_novo_list_item_0_p_16_span_3_Template, 2, 0, "span", 39);
    i0.ɵɵtemplate(4, EntityPickerResult_novo_list_item_0_p_16_span_4_Template, 1, 1, "span", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r11.match.data.address.city);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r11.match.data.address.city && ctx_r11.match.data.address.state);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r11.match.data.address.state);
} }
function EntityPickerResult_novo_list_item_0_p_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 40);
    i0.ɵɵelement(1, "i", 41);
    i0.ɵɵelement(2, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r12.highlight(ctx_r12.match.data.status, ctx_r12.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 42);
    i0.ɵɵelement(1, "i", 43);
    i0.ɵɵelement(2, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r13.highlight(ctx_r13.match.data.owner.name, ctx_r13.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 44);
    i0.ɵɵelement(1, "i", 45);
    i0.ɵɵelement(2, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r14.highlight(ctx_r14.match.data.primaryDepartment.name, ctx_r14.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 46);
    i0.ɵɵelement(1, "i", 47);
    i0.ɵɵelement(2, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r15.highlight(ctx_r15.match.data.occupation, ctx_r15.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 1);
    i0.ɵɵlistener("click", function EntityPickerResult_novo_list_item_0_Template_novo_list_item_click_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.select.next(ctx_r19.match.data); });
    i0.ɵɵelementStart(1, "item-header");
    i0.ɵɵelement(2, "item-avatar", 2);
    i0.ɵɵelementStart(3, "item-title");
    i0.ɵɵelement(4, "span", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "item-content", 4);
    i0.ɵɵtemplate(6, EntityPickerResult_novo_list_item_0_p_6_Template, 3, 1, "p", 5);
    i0.ɵɵtemplate(7, EntityPickerResult_novo_list_item_0_p_7_Template, 3, 1, "p", 6);
    i0.ɵɵtemplate(8, EntityPickerResult_novo_list_item_0_p_8_Template, 3, 1, "p", 7);
    i0.ɵɵtemplate(9, EntityPickerResult_novo_list_item_0_p_9_Template, 3, 1, "p", 8);
    i0.ɵɵtemplate(10, EntityPickerResult_novo_list_item_0_p_10_Template, 3, 1, "p", 8);
    i0.ɵɵtemplate(11, EntityPickerResult_novo_list_item_0_p_11_Template, 3, 1, "p", 9);
    i0.ɵɵtemplate(12, EntityPickerResult_novo_list_item_0_p_12_Template, 3, 1, "p", 10);
    i0.ɵɵtemplate(13, EntityPickerResult_novo_list_item_0_p_13_Template, 5, 5, "p", 11);
    i0.ɵɵtemplate(14, EntityPickerResult_novo_list_item_0_p_14_Template, 3, 1, "p", 12);
    i0.ɵɵtemplate(15, EntityPickerResult_novo_list_item_0_p_15_Template, 3, 1, "p", 13);
    i0.ɵɵtemplate(16, EntityPickerResult_novo_list_item_0_p_16_Template, 5, 3, "p", 14);
    i0.ɵɵtemplate(17, EntityPickerResult_novo_list_item_0_p_17_Template, 3, 1, "p", 15);
    i0.ɵɵtemplate(18, EntityPickerResult_novo_list_item_0_p_18_Template, 3, 1, "p", 16);
    i0.ɵɵtemplate(19, EntityPickerResult_novo_list_item_0_p_19_Template, 3, 1, "p", 17);
    i0.ɵɵtemplate(20, EntityPickerResult_novo_list_item_0_p_20_Template, 3, 1, "p", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", ctx_r0.getIconForResult(ctx_r0.match.data));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r0.highlight(ctx_r0.getNameForResult(ctx_r0.match.data), ctx_r0.term), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.match.data.companyName || (ctx_r0.match.data == null ? null : ctx_r0.match.data.clientCorporation == null ? null : ctx_r0.match.data.clientCorporation.name));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.match.data == null ? null : ctx_r0.match.data.clientContact == null ? null : ctx_r0.match.data.clientContact.firstName);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.match.data.candidate && ctx_r0.match.data.searchEntity === "Placement");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.match.data.dateBegin && ctx_r0.match.data.searchEntity === "Placement");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.match.data.startTime && ctx_r0.match.data.searchEntity === "JobShift");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.match.data.startTime && ctx_r0.match.data.searchEntity === "JobShift");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.match.data.jobOrder && ctx_r0.match.data.searchEntity === "JobShift");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.match.data.openings && ctx_r0.match.data.searchEntity === "JobShift");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.match.data.email);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.match.data.phone);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.match.data.address && (ctx_r0.match.data.address.city || ctx_r0.match.data.address.state));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.match.data.status);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.match.data.owner && ctx_r0.match.data.owner.name && ctx_r0.match.data.searchEntity === "Candidate");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.match.data.primaryDepartment && ctx_r0.match.data.primaryDepartment.name && ctx_r0.match.data.searchEntity === "CorporateUser");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.match.data.occupation && ctx_r0.match.data.searchEntity === "CorporateUser");
} }
const _c0 = function (a0) { return { active: a0 }; };
function EntityPickerResults_novo_list_0_entity_picker_result_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "entity-picker-result", 6);
    i0.ɵɵlistener("mousedown", function EntityPickerResults_novo_list_0_entity_picker_result_1_Template_entity_picker_result_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r8); const match_r6 = ctx.$implicit; const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.selectMatch($event, match_r6); })("mouseenter", function EntityPickerResults_novo_list_0_entity_picker_result_1_Template_entity_picker_result_mouseenter_0_listener() { i0.ɵɵrestoreView(_r8); const match_r6 = ctx.$implicit; const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.selectActive(match_r6); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const match_r6 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("disabled", ctx_r4.preselected(match_r6));
    i0.ɵɵproperty("match", match_r6)("term", ctx_r4.term)("ngClass", i0.ɵɵpureFunction1(5, _c0, ctx_r4.isActive(match_r6)));
} }
function EntityPickerResults_novo_list_0_novo_loading_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-loading", 7);
} }
function EntityPickerResults_novo_list_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-list", 3);
    i0.ɵɵtemplate(1, EntityPickerResults_novo_list_0_entity_picker_result_1_Template, 1, 7, "entity-picker-result", 4);
    i0.ɵɵtemplate(2, EntityPickerResults_novo_list_0_novo_loading_2_Template, 1, 0, "novo-loading", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.matches);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isLoading && ctx_r0.matches.length > 0);
} }
function EntityPickerResults_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.labels.pickerError);
} }
function EntityPickerResults_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.labels.pickerEmpty);
} }
function EntityPickerResults_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.labels.pickerTextFieldEmpty);
} }
export class EntityPickerResult {
    constructor(labels) {
        this.labels = labels;
        this.select = new EventEmitter();
    }
    /**
     * @description This function captures the whole query string and replace it with the string that will be used to
     * match.
     */
    escapeRegexp(queryToEscape) {
        // Ex: if the capture is "a" the result will be \a
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }
    /**
     * @description This function should return a <strong>-tag wrapped HTML string.
     */
    highlight(match, query) {
        // Replaces the capture string with a the same string inside of a "strong" tag
        return query && match ? match.replace(new RegExp(this.escapeRegexp(query.trim()), 'gi'), '<strong>$&</strong>') : match;
    }
    getIconForResult(result) {
        if (result) {
            switch (result.searchEntity) {
                case 'ClientContact':
                    return 'person contact';
                case 'ClientCorporation':
                    return 'company';
                case 'Opportunity':
                    return 'opportunity';
                case 'Candidate':
                    return 'candidate';
                case 'Lead':
                    return 'lead';
                case 'JobOrder':
                    return 'job';
                case 'Placement':
                    return 'star placement';
                case 'CorporateUser':
                    return 'user';
                case 'CorporationDepartment':
                    return 'department';
                case 'JobShift':
                    return 'timetable contract';
                default:
                    return '';
            }
        }
        return '';
    }
    renderTimestamp(date) {
        let timestamp = '';
        if (date) {
            timestamp = this.labels.formatDateWithFormat(date, { year: 'numeric', month: 'numeric', day: 'numeric' });
        }
        return timestamp;
    }
    renderTime(dateStr) {
        let timestamp = '';
        if (dateStr) {
            timestamp = this.labels.formatTime(new Date(dateStr));
        }
        return timestamp;
    }
    renderTimeNoOffset(dateStr) {
        let timestamp = '';
        if (dateStr) {
            dateStr = dateStr.slice(0, 19);
            timestamp = this.labels.formatTime(dateStr);
        }
        return timestamp;
    }
    getNameForResult(result) {
        var _a, _b, _c;
        if (result) {
            switch (result.searchEntity) {
                case 'Lead':
                case 'CorporateUser':
                case 'ClientContact':
                case 'Candidate':
                case 'Person':
                    if ('firstName' in result) {
                        return `${result.firstName} ${result.lastName}`.trim();
                    }
                    return `${result.name || ''}`.trim();
                case 'ClientCorporation':
                    return `${result.name || ''}`.trim();
                case 'Opportunity':
                case 'JobOrder':
                    return `${result.id} | ${result.title || ''}`.trim();
                case 'Placement':
                    let label = `${result.id}`;
                    if (result.candidate || result.jobOrder) {
                        if (result.candidate && result.jobOrder) {
                            label = `${label} | ${result.candidate.firstName} ${result.candidate.lastName} - ${result.jobOrder.title}`.trim();
                        }
                        else if (result.jobOrder) {
                            label = `${label} | ${result.jobOrder.title}`.trim();
                        }
                        else {
                            label = `${label} | ${result.candidate.firstName} ${result.candidate.lastName}`.trim();
                        }
                    }
                    return label;
                case 'JobShift':
                    return `${(_a = result.jobOrder) === null || _a === void 0 ? void 0 : _a.title} @ ${((_c = (_b = result.jobOrder) === null || _b === void 0 ? void 0 : _b.clientCorporation) === null || _c === void 0 ? void 0 : _c.name) || ''}`.trim();
                default:
                    return `${result.name || ''}`.trim();
            }
        }
        return '';
    }
}
EntityPickerResult.ɵfac = function EntityPickerResult_Factory(t) { return new (t || EntityPickerResult)(i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
EntityPickerResult.ɵcmp = i0.ɵɵdefineComponent({ type: EntityPickerResult, selectors: [["entity-picker-result"]], inputs: { match: "match", term: "term" }, outputs: { select: "select" }, decls: 1, vars: 1, consts: [[3, "click", 4, "ngIf"], [3, "click"], [3, "icon"], [3, "innerHtml"], ["direction", "horizontal"], ["class", "company", 4, "ngIf"], ["class", "contact", 4, "ngIf"], ["class", "candidate", 4, "ngIf"], ["class", "start-date", 4, "ngIf"], ["class", "start-time", 4, "ngIf"], ["class", "job", 4, "ngIf"], ["class", "openings", 4, "ngIf"], ["class", "email", 4, "ngIf"], ["class", "phone", 4, "ngIf"], ["class", "location", 4, "ngIf"], ["class", "status", 4, "ngIf"], ["class", "owner", 4, "ngIf"], ["class", "primary-department", 4, "ngIf"], ["class", "occupation", 4, "ngIf"], [1, "company"], [1, "bhi-company"], [1, "contact"], [1, "bhi-person", "contact", "person"], [1, "candidate"], [1, "bhi-candidate"], [1, "start-date"], [1, "bhi-calendar"], [1, "start-time"], [1, "bhi-clock"], [1, "job"], [1, "bhi-job"], [1, "openings"], [1, "email"], [1, "bhi-email"], [1, "phone"], [1, "bhi-phone"], [1, "location"], [1, "bhi-location"], [3, "innerHtml", 4, "ngIf"], [4, "ngIf"], [1, "status"], [1, "bhi-info"], [1, "owner"], [1, "bhi-person"], [1, "primary-department"], [1, "bhi-department"], [1, "occupation"], [1, "bhi-occupation"]], template: function EntityPickerResult_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, EntityPickerResult_novo_list_item_0_Template, 21, 17, "novo-list-item", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.match.data);
    } }, directives: [i2.NgIf, i3.NovoListItemElement, i3.NovoItemHeaderElement, i3.NovoItemAvatarElement, i3.NovoItemTitleElement, i3.NovoItemContentElement], pipes: [i2.DecimalPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EntityPickerResult, [{
        type: Component,
        args: [{
                selector: 'entity-picker-result',
                template: `
    <novo-list-item *ngIf="match.data" (click)="select.next(match.data)">
      <item-header>
        <item-avatar [icon]="getIconForResult(match.data)"></item-avatar>
        <item-title> <span [innerHtml]="highlight(getNameForResult(match.data), term)"></span> </item-title>
      </item-header>
      <item-content direction="horizontal">
        <!-- COMPANY 1 -->
        <p class="company" *ngIf="match.data.companyName || match.data?.clientCorporation?.name">
          <i class="bhi-company"></i>
          <span [innerHtml]="highlight(match.data.companyName || match.data?.clientCorporation?.name, term)"></span>
        </p>
        <!-- CLIENT CONTACT -->
        <p class="contact" *ngIf="match.data?.clientContact?.firstName">
          <i class="bhi-person contact person"></i>
          <span [innerHtml]="highlight(match.data.clientContact.firstName + ' ' + match.data.clientContact.lastName, term)"></span>
        </p>
        <!-- CANDIDATE -->
        <p class="candidate" *ngIf="match.data.candidate && match.data.searchEntity === 'Placement'">
          <i class="bhi-candidate"></i>
          <span [innerHtml]="highlight(match.data.candidate.firstName + ' ' + match.data.candidate.lastName, term)"></span>
        </p>
        <!-- START & END DATE -->
        <p class="start-date" *ngIf="match.data.dateBegin && match.data.searchEntity === 'Placement'">
          <i class="bhi-calendar"></i>
          <span [innerHtml]="renderTimestamp(match.data.dateBegin) + ' - ' + renderTimestamp(match.data.dateEnd)"></span>
        </p>
        <!-- START Date -->
        <p class="start-date" *ngIf="match.data.startTime && match.data.searchEntity === 'JobShift'">
          <i class="bhi-calendar"></i>
          <span [innerHtml]="renderTimestamp(match.data.startTime)"></span>
        </p>
        <!-- START & END TIME -->
        <p class="start-time" *ngIf="match.data.startTime && match.data.searchEntity === 'JobShift'">
          <i class="bhi-clock"></i>
          <span [innerHtml]="renderTimeNoOffset(match.data.startTime) + ' - ' + renderTimeNoOffset(match.data.endTime)"></span>
        </p>
        <!-- JOBORDER -->
        <p class="job" *ngIf="match.data.jobOrder && match.data.searchEntity === 'JobShift'">
          <i class="bhi-job"></i>
          <span [innerHtml]="highlight(match.data.jobOrder.title, term)"></span>
        </p>
        <!-- OPENINGS -->
        <p class="openings" *ngIf="match.data.openings && match.data.searchEntity === 'JobShift'">
          <i class="bhi-candidate"></i>
          <span>{{ match.data.numAssigned * match.data.fillRatio | number: '1.0-0' }} / {{ match.data.openings }}</span>
        </p>
        <!-- EMAIL -->
        <p class="email" *ngIf="match.data.email">
          <i class="bhi-email"></i> <span [innerHtml]="highlight(match.data.email, term)"></span>
        </p>
        <!-- PHONE -->
        <p class="phone" *ngIf="match.data.phone">
          <i class="bhi-phone"></i> <span [innerHtml]="highlight(match.data.phone, term)"></span>
        </p>
        <!-- ADDRESS -->
        <p class="location" *ngIf="match.data.address && (match.data.address.city || match.data.address.state)">
          <i class="bhi-location"></i> <span *ngIf="match.data.address.city" [innerHtml]="highlight(match.data.address.city, term)"></span>
          <span *ngIf="match.data.address.city && match.data.address.state">, </span>
          <span *ngIf="match.data.address.state" [innerHtml]="highlight(match.data.address.state, term)"></span>
        </p>
        <!-- STATUS -->
        <p class="status" *ngIf="match.data.status">
          <i class="bhi-info"></i> <span [innerHtml]="highlight(match.data.status, term)"></span>
        </p>
        <!-- OWNER -->
        <p class="owner" *ngIf="match.data.owner && match.data.owner.name && match.data.searchEntity === 'Candidate'">
          <i class="bhi-person"></i> <span [innerHtml]="highlight(match.data.owner.name, term)"></span>
        </p>
        <!-- PRIMARY DEPARTMENT -->
        <p
          class="primary-department"
          *ngIf="match.data.primaryDepartment && match.data.primaryDepartment.name && match.data.searchEntity === 'CorporateUser'"
        >
          <i class="bhi-department"></i> <span [innerHtml]="highlight(match.data.primaryDepartment.name, term)"></span>
        </p>
        <!-- OCCUPATION -->
        <p class="occupation" *ngIf="match.data.occupation && match.data.searchEntity === 'CorporateUser'">
          <i class="bhi-occupation"></i> <span [innerHtml]="highlight(match.data.occupation, term)"></span>
        </p>
      </item-content>
    </novo-list-item>
  `,
            }]
    }], function () { return [{ type: i1.NovoLabelService }]; }, { match: [{
            type: Input
        }], term: [{
            type: Input
        }], select: [{
            type: Output
        }] }); })();
export class EntityPickerResults extends BasePickerResults {
    constructor(element, labels, ref) {
        super(element, ref);
        this.labels = labels;
        this.select = new EventEmitter();
    }
    get hasNonErrorMessage() {
        return !this.isLoading && !this.matches.length && !this.hasError;
    }
    getListElement() {
        return this.element.nativeElement.querySelector('novo-list');
    }
    selectMatch(event, item) {
        this.select.next(item);
        return super.selectMatch(event, item);
    }
}
EntityPickerResults.ɵfac = function EntityPickerResults_Factory(t) { return new (t || EntityPickerResults)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
EntityPickerResults.ɵcmp = i0.ɵɵdefineComponent({ type: EntityPickerResults, selectors: [["entity-picker-results"]], outputs: { select: "select" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 4, consts: [["direction", "vertical", 4, "ngIf"], ["class", "picker-error", 4, "ngIf"], ["class", "picker-null-results", 4, "ngIf"], ["direction", "vertical"], [3, "match", "term", "ngClass", "disabled", "mousedown", "mouseenter", 4, "ngFor", "ngForOf"], ["theme", "line", 4, "ngIf"], [3, "match", "term", "ngClass", "mousedown", "mouseenter"], ["theme", "line"], [1, "picker-error"], [1, "picker-null-results"]], template: function EntityPickerResults_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, EntityPickerResults_novo_list_0_Template, 3, 2, "novo-list", 0);
        i0.ɵɵtemplate(1, EntityPickerResults_p_1_Template, 2, 1, "p", 1);
        i0.ɵɵtemplate(2, EntityPickerResults_p_2_Template, 2, 1, "p", 2);
        i0.ɵɵtemplate(3, EntityPickerResults_p_3_Template, 2, 1, "p", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.matches.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasError);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasNonErrorMessage && ctx.term !== "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasNonErrorMessage && ctx.term === "");
    } }, directives: [i2.NgIf, i3.NovoListElement, i2.NgForOf, EntityPickerResult, i2.NgClass, i4.NovoLoadingElement], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EntityPickerResults, [{
        type: Component,
        args: [{
                selector: 'entity-picker-results',
                template: `
    <novo-list *ngIf="matches.length > 0" direction="vertical">
      <entity-picker-result
        *ngFor="let match of matches"
        [match]="match"
        [term]="term"
        [ngClass]="{ active: isActive(match) }"
        (mousedown)="selectMatch($event, match)"
        (mouseenter)="selectActive(match)"
        [class.disabled]="preselected(match)"
      >
      </entity-picker-result>
      <novo-loading theme="line" *ngIf="isLoading && matches.length > 0"></novo-loading>
    </novo-list>
    <p class="picker-error" *ngIf="hasError">{{ labels.pickerError }}</p>
    <p class="picker-null-results" *ngIf="hasNonErrorMessage && term !== ''">{{ labels.pickerEmpty }}</p>
    <p class="picker-null-results" *ngIf="hasNonErrorMessage && term === ''">{{ labels.pickerTextFieldEmpty }}</p>
  `,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NovoLabelService }, { type: i0.ChangeDetectorRef }]; }, { select: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5UGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3BpY2tlci9leHRyYXMvZW50aXR5LXBpY2tlci1yZXN1bHRzL0VudGl0eVBpY2tlclJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLFNBQVM7QUFDVCxNQUFNO0FBQ04sT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7SUFZckUsNkJBQ0U7SUFBQSx3QkFBMkI7SUFDM0IsMEJBQTBHO0lBQzVHLGlCQUFJOzs7SUFESSxlQUE0RjtJQUE1RixpUEFBNEY7OztJQUdwRyw2QkFDRTtJQUFBLHdCQUF5QztJQUN6QywwQkFBeUg7SUFDM0gsaUJBQUk7OztJQURJLGVBQTJHO0lBQTNHLHdLQUEyRzs7O0lBR25ILDZCQUNFO0lBQUEsd0JBQTZCO0lBQzdCLDBCQUFpSDtJQUNuSCxpQkFBSTs7O0lBREksZUFBbUc7SUFBbkcsZ0tBQW1HOzs7SUFHM0csNkJBQ0U7SUFBQSx3QkFBNEI7SUFDNUIsMEJBQStHO0lBQ2pILGlCQUFJOzs7SUFESSxlQUFpRztJQUFqRyw4SkFBaUc7OztJQUd6Ryw2QkFDRTtJQUFBLHdCQUE0QjtJQUM1QiwwQkFBaUU7SUFDbkUsaUJBQUk7OztJQURJLGVBQW1EO0lBQW5ELGtHQUFtRDs7O0lBRzNELDZCQUNFO0lBQUEsd0JBQXlCO0lBQ3pCLDBCQUFxSDtJQUN2SCxpQkFBSTs7O0lBREksZUFBdUc7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cnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuLy8gVmVuZG9yXG4vLyBBUFBcbmltcG9ydCB7IEJhc2VQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi4vYmFzZS1waWNrZXItcmVzdWx0cy9CYXNlUGlja2VyUmVzdWx0cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VudGl0eS1waWNrZXItcmVzdWx0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bm92by1saXN0LWl0ZW0gKm5nSWY9XCJtYXRjaC5kYXRhXCIgKGNsaWNrKT1cInNlbGVjdC5uZXh0KG1hdGNoLmRhdGEpXCI+XG4gICAgICA8aXRlbS1oZWFkZXI+XG4gICAgICAgIDxpdGVtLWF2YXRhciBbaWNvbl09XCJnZXRJY29uRm9yUmVzdWx0KG1hdGNoLmRhdGEpXCI+PC9pdGVtLWF2YXRhcj5cbiAgICAgICAgPGl0ZW0tdGl0bGU+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KGdldE5hbWVGb3JSZXN1bHQobWF0Y2guZGF0YSksIHRlcm0pXCI+PC9zcGFuPiA8L2l0ZW0tdGl0bGU+XG4gICAgICA8L2l0ZW0taGVhZGVyPlxuICAgICAgPGl0ZW0tY29udGVudCBkaXJlY3Rpb249XCJob3Jpem9udGFsXCI+XG4gICAgICAgIDwhLS0gQ09NUEFOWSAxIC0tPlxuICAgICAgICA8cCBjbGFzcz1cImNvbXBhbnlcIiAqbmdJZj1cIm1hdGNoLmRhdGEuY29tcGFueU5hbWUgfHwgbWF0Y2guZGF0YT8uY2xpZW50Q29ycG9yYXRpb24/Lm5hbWVcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jb21wYW55XCI+PC9pPlxuICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuY29tcGFueU5hbWUgfHwgbWF0Y2guZGF0YT8uY2xpZW50Q29ycG9yYXRpb24/Lm5hbWUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDwhLS0gQ0xJRU5UIENPTlRBQ1QgLS0+XG4gICAgICAgIDxwIGNsYXNzPVwiY29udGFjdFwiICpuZ0lmPVwibWF0Y2guZGF0YT8uY2xpZW50Q29udGFjdD8uZmlyc3ROYW1lXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktcGVyc29uIGNvbnRhY3QgcGVyc29uXCI+PC9pPlxuICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuY2xpZW50Q29udGFjdC5maXJzdE5hbWUgKyAnICcgKyBtYXRjaC5kYXRhLmNsaWVudENvbnRhY3QubGFzdE5hbWUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDwhLS0gQ0FORElEQVRFIC0tPlxuICAgICAgICA8cCBjbGFzcz1cImNhbmRpZGF0ZVwiICpuZ0lmPVwibWF0Y2guZGF0YS5jYW5kaWRhdGUgJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdQbGFjZW1lbnQnXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktY2FuZGlkYXRlXCI+PC9pPlxuICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuY2FuZGlkYXRlLmZpcnN0TmFtZSArICcgJyArIG1hdGNoLmRhdGEuY2FuZGlkYXRlLmxhc3ROYW1lLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIFNUQVJUICYgRU5EIERBVEUgLS0+XG4gICAgICAgIDxwIGNsYXNzPVwic3RhcnQtZGF0ZVwiICpuZ0lmPVwibWF0Y2guZGF0YS5kYXRlQmVnaW4gJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdQbGFjZW1lbnQnXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktY2FsZW5kYXJcIj48L2k+XG4gICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJyZW5kZXJUaW1lc3RhbXAobWF0Y2guZGF0YS5kYXRlQmVnaW4pICsgJyAtICcgKyByZW5kZXJUaW1lc3RhbXAobWF0Y2guZGF0YS5kYXRlRW5kKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIFNUQVJUIERhdGUgLS0+XG4gICAgICAgIDxwIGNsYXNzPVwic3RhcnQtZGF0ZVwiICpuZ0lmPVwibWF0Y2guZGF0YS5zdGFydFRpbWUgJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdKb2JTaGlmdCdcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jYWxlbmRhclwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cInJlbmRlclRpbWVzdGFtcChtYXRjaC5kYXRhLnN0YXJ0VGltZSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBTVEFSVCAmIEVORCBUSU1FIC0tPlxuICAgICAgICA8cCBjbGFzcz1cInN0YXJ0LXRpbWVcIiAqbmdJZj1cIm1hdGNoLmRhdGEuc3RhcnRUaW1lICYmIG1hdGNoLmRhdGEuc2VhcmNoRW50aXR5ID09PSAnSm9iU2hpZnQnXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktY2xvY2tcIj48L2k+XG4gICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJyZW5kZXJUaW1lTm9PZmZzZXQobWF0Y2guZGF0YS5zdGFydFRpbWUpICsgJyAtICcgKyByZW5kZXJUaW1lTm9PZmZzZXQobWF0Y2guZGF0YS5lbmRUaW1lKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIEpPQk9SREVSIC0tPlxuICAgICAgICA8cCBjbGFzcz1cImpvYlwiICpuZ0lmPVwibWF0Y2guZGF0YS5qb2JPcmRlciAmJiBtYXRjaC5kYXRhLnNlYXJjaEVudGl0eSA9PT0gJ0pvYlNoaWZ0J1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWpvYlwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmpvYk9yZGVyLnRpdGxlLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIE9QRU5JTkdTIC0tPlxuICAgICAgICA8cCBjbGFzcz1cIm9wZW5pbmdzXCIgKm5nSWY9XCJtYXRjaC5kYXRhLm9wZW5pbmdzICYmIG1hdGNoLmRhdGEuc2VhcmNoRW50aXR5ID09PSAnSm9iU2hpZnQnXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktY2FuZGlkYXRlXCI+PC9pPlxuICAgICAgICAgIDxzcGFuPnt7IG1hdGNoLmRhdGEubnVtQXNzaWduZWQgKiBtYXRjaC5kYXRhLmZpbGxSYXRpbyB8IG51bWJlcjogJzEuMC0wJyB9fSAvIHt7IG1hdGNoLmRhdGEub3BlbmluZ3MgfX08L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBFTUFJTCAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJlbWFpbFwiICpuZ0lmPVwibWF0Y2guZGF0YS5lbWFpbFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWVtYWlsXCI+PC9pPiA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmVtYWlsLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIFBIT05FIC0tPlxuICAgICAgICA8cCBjbGFzcz1cInBob25lXCIgKm5nSWY9XCJtYXRjaC5kYXRhLnBob25lXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktcGhvbmVcIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEucGhvbmUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDwhLS0gQUREUkVTUyAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJsb2NhdGlvblwiICpuZ0lmPVwibWF0Y2guZGF0YS5hZGRyZXNzICYmIChtYXRjaC5kYXRhLmFkZHJlc3MuY2l0eSB8fCBtYXRjaC5kYXRhLmFkZHJlc3Muc3RhdGUpXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktbG9jYXRpb25cIj48L2k+IDxzcGFuICpuZ0lmPVwibWF0Y2guZGF0YS5hZGRyZXNzLmNpdHlcIiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmFkZHJlc3MuY2l0eSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJtYXRjaC5kYXRhLmFkZHJlc3MuY2l0eSAmJiBtYXRjaC5kYXRhLmFkZHJlc3Muc3RhdGVcIj4sIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIm1hdGNoLmRhdGEuYWRkcmVzcy5zdGF0ZVwiIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuYWRkcmVzcy5zdGF0ZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBTVEFUVVMgLS0+XG4gICAgICAgIDxwIGNsYXNzPVwic3RhdHVzXCIgKm5nSWY9XCJtYXRjaC5kYXRhLnN0YXR1c1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWluZm9cIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuc3RhdHVzLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIE9XTkVSIC0tPlxuICAgICAgICA8cCBjbGFzcz1cIm93bmVyXCIgKm5nSWY9XCJtYXRjaC5kYXRhLm93bmVyICYmIG1hdGNoLmRhdGEub3duZXIubmFtZSAmJiBtYXRjaC5kYXRhLnNlYXJjaEVudGl0eSA9PT0gJ0NhbmRpZGF0ZSdcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1wZXJzb25cIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEub3duZXIubmFtZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBQUklNQVJZIERFUEFSVE1FTlQgLS0+XG4gICAgICAgIDxwXG4gICAgICAgICAgY2xhc3M9XCJwcmltYXJ5LWRlcGFydG1lbnRcIlxuICAgICAgICAgICpuZ0lmPVwibWF0Y2guZGF0YS5wcmltYXJ5RGVwYXJ0bWVudCAmJiBtYXRjaC5kYXRhLnByaW1hcnlEZXBhcnRtZW50Lm5hbWUgJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdDb3Jwb3JhdGVVc2VyJ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1kZXBhcnRtZW50XCI+PC9pPiA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLnByaW1hcnlEZXBhcnRtZW50Lm5hbWUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDwhLS0gT0NDVVBBVElPTiAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJvY2N1cGF0aW9uXCIgKm5nSWY9XCJtYXRjaC5kYXRhLm9jY3VwYXRpb24gJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdDb3Jwb3JhdGVVc2VyJ1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLW9jY3VwYXRpb25cIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEub2NjdXBhdGlvbiwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgIDwvbm92by1saXN0LWl0ZW0+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eVBpY2tlclJlc3VsdCB7XG4gIEBJbnB1dCgpIG1hdGNoOiBhbnk7XG4gIEBJbnB1dCgpIHRlcm06IGFueTtcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gY2FwdHVyZXMgdGhlIHdob2xlIHF1ZXJ5IHN0cmluZyBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBzdHJpbmcgdGhhdCB3aWxsIGJlIHVzZWQgdG9cbiAgICogbWF0Y2guXG4gICAqL1xuICBlc2NhcGVSZWdleHAocXVlcnlUb0VzY2FwZSkge1xuICAgIC8vIEV4OiBpZiB0aGUgY2FwdHVyZSBpcyBcImFcIiB0aGUgcmVzdWx0IHdpbGwgYmUgXFxhXG4gICAgcmV0dXJuIHF1ZXJ5VG9Fc2NhcGUucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2csICdcXFxcJDEnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgPHN0cm9uZz4tdGFnIHdyYXBwZWQgSFRNTCBzdHJpbmcuXG4gICAqL1xuICBoaWdobGlnaHQobWF0Y2gsIHF1ZXJ5KSB7XG4gICAgLy8gUmVwbGFjZXMgdGhlIGNhcHR1cmUgc3RyaW5nIHdpdGggYSB0aGUgc2FtZSBzdHJpbmcgaW5zaWRlIG9mIGEgXCJzdHJvbmdcIiB0YWdcbiAgICByZXR1cm4gcXVlcnkgJiYgbWF0Y2ggPyBtYXRjaC5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5lc2NhcGVSZWdleHAocXVlcnkudHJpbSgpKSwgJ2dpJyksICc8c3Ryb25nPiQmPC9zdHJvbmc+JykgOiBtYXRjaDtcbiAgfVxuXG4gIGdldEljb25Gb3JSZXN1bHQocmVzdWx0PzogYW55KTogc3RyaW5nIHtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBzd2l0Y2ggKHJlc3VsdC5zZWFyY2hFbnRpdHkpIHtcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdCc6XG4gICAgICAgICAgcmV0dXJuICdwZXJzb24gY29udGFjdCc7XG4gICAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uJzpcbiAgICAgICAgICByZXR1cm4gJ2NvbXBhbnknO1xuICAgICAgICBjYXNlICdPcHBvcnR1bml0eSc6XG4gICAgICAgICAgcmV0dXJuICdvcHBvcnR1bml0eSc7XG4gICAgICAgIGNhc2UgJ0NhbmRpZGF0ZSc6XG4gICAgICAgICAgcmV0dXJuICdjYW5kaWRhdGUnO1xuICAgICAgICBjYXNlICdMZWFkJzpcbiAgICAgICAgICByZXR1cm4gJ2xlYWQnO1xuICAgICAgICBjYXNlICdKb2JPcmRlcic6XG4gICAgICAgICAgcmV0dXJuICdqb2InO1xuICAgICAgICBjYXNlICdQbGFjZW1lbnQnOlxuICAgICAgICAgIHJldHVybiAnc3RhciBwbGFjZW1lbnQnO1xuICAgICAgICBjYXNlICdDb3Jwb3JhdGVVc2VyJzpcbiAgICAgICAgICByZXR1cm4gJ3VzZXInO1xuICAgICAgICBjYXNlICdDb3Jwb3JhdGlvbkRlcGFydG1lbnQnOlxuICAgICAgICAgIHJldHVybiAnZGVwYXJ0bWVudCc7XG4gICAgICAgIGNhc2UgJ0pvYlNoaWZ0JzpcbiAgICAgICAgICByZXR1cm4gJ3RpbWV0YWJsZSBjb250cmFjdCc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZW5kZXJUaW1lc3RhbXAoZGF0ZT86IGFueSkge1xuICAgIGxldCB0aW1lc3RhbXAgPSAnJztcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgdGltZXN0YW1wID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQoZGF0ZSwgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbnVtZXJpYycsIGRheTogJ251bWVyaWMnIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGltZXN0YW1wO1xuICB9XG5cbiAgcmVuZGVyVGltZShkYXRlU3RyPzogc3RyaW5nKSB7XG4gICAgbGV0IHRpbWVzdGFtcCA9ICcnO1xuICAgIGlmIChkYXRlU3RyKSB7XG4gICAgICB0aW1lc3RhbXAgPSB0aGlzLmxhYmVscy5mb3JtYXRUaW1lKG5ldyBEYXRlKGRhdGVTdHIpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRpbWVzdGFtcDtcbiAgfVxuXG4gIHJlbmRlclRpbWVOb09mZnNldChkYXRlU3RyPzogc3RyaW5nKSB7XG4gICAgbGV0IHRpbWVzdGFtcCA9ICcnO1xuICAgIGlmIChkYXRlU3RyKSB7XG4gICAgICBkYXRlU3RyID0gZGF0ZVN0ci5zbGljZSgwLCAxOSk7XG4gICAgICB0aW1lc3RhbXAgPSB0aGlzLmxhYmVscy5mb3JtYXRUaW1lKGRhdGVTdHIpO1xuICAgIH1cbiAgICByZXR1cm4gdGltZXN0YW1wO1xuICB9XG5cbiAgZ2V0TmFtZUZvclJlc3VsdChyZXN1bHQ/OiBhbnkpIHtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBzd2l0Y2ggKHJlc3VsdC5zZWFyY2hFbnRpdHkpIHtcbiAgICAgICAgY2FzZSAnTGVhZCc6XG4gICAgICAgIGNhc2UgJ0NvcnBvcmF0ZVVzZXInOlxuICAgICAgICBjYXNlICdDbGllbnRDb250YWN0JzpcbiAgICAgICAgY2FzZSAnQ2FuZGlkYXRlJzpcbiAgICAgICAgY2FzZSAnUGVyc29uJzpcbiAgICAgICAgICBpZiAoJ2ZpcnN0TmFtZScgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7cmVzdWx0LmZpcnN0TmFtZX0gJHtyZXN1bHQubGFzdE5hbWV9YC50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQubmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24nOlxuICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQubmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgICAgY2FzZSAnT3Bwb3J0dW5pdHknOlxuICAgICAgICBjYXNlICdKb2JPcmRlcic6XG4gICAgICAgICAgcmV0dXJuIGAke3Jlc3VsdC5pZH0gfCAke3Jlc3VsdC50aXRsZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgICAgY2FzZSAnUGxhY2VtZW50JzpcbiAgICAgICAgICBsZXQgbGFiZWwgPSBgJHtyZXN1bHQuaWR9YDtcbiAgICAgICAgICBpZiAocmVzdWx0LmNhbmRpZGF0ZSB8fCByZXN1bHQuam9iT3JkZXIpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY2FuZGlkYXRlICYmIHJlc3VsdC5qb2JPcmRlcikge1xuICAgICAgICAgICAgICBsYWJlbCA9IGAke2xhYmVsfSB8ICR7cmVzdWx0LmNhbmRpZGF0ZS5maXJzdE5hbWV9ICR7cmVzdWx0LmNhbmRpZGF0ZS5sYXN0TmFtZX0gLSAke3Jlc3VsdC5qb2JPcmRlci50aXRsZX1gLnRyaW0oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmpvYk9yZGVyKSB7XG4gICAgICAgICAgICAgIGxhYmVsID0gYCR7bGFiZWx9IHwgJHtyZXN1bHQuam9iT3JkZXIudGl0bGV9YC50cmltKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsYWJlbCA9IGAke2xhYmVsfSB8ICR7cmVzdWx0LmNhbmRpZGF0ZS5maXJzdE5hbWV9ICR7cmVzdWx0LmNhbmRpZGF0ZS5sYXN0TmFtZX1gLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICBjYXNlICdKb2JTaGlmdCc6XG4gICAgICAgICAgcmV0dXJuIGAke3Jlc3VsdC5qb2JPcmRlcj8udGl0bGV9IEAgJHtyZXN1bHQuam9iT3JkZXI/LmNsaWVudENvcnBvcmF0aW9uPy5uYW1lIHx8ICcnfWAudHJpbSgpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQubmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VudGl0eS1waWNrZXItcmVzdWx0cycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5vdm8tbGlzdCAqbmdJZj1cIm1hdGNoZXMubGVuZ3RoID4gMFwiIGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICA8ZW50aXR5LXBpY2tlci1yZXN1bHRcbiAgICAgICAgKm5nRm9yPVwibGV0IG1hdGNoIG9mIG1hdGNoZXNcIlxuICAgICAgICBbbWF0Y2hdPVwibWF0Y2hcIlxuICAgICAgICBbdGVybV09XCJ0ZXJtXCJcbiAgICAgICAgW25nQ2xhc3NdPVwieyBhY3RpdmU6IGlzQWN0aXZlKG1hdGNoKSB9XCJcbiAgICAgICAgKG1vdXNlZG93bik9XCJzZWxlY3RNYXRjaCgkZXZlbnQsIG1hdGNoKVwiXG4gICAgICAgIChtb3VzZWVudGVyKT1cInNlbGVjdEFjdGl2ZShtYXRjaClcIlxuICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwicHJlc2VsZWN0ZWQobWF0Y2gpXCJcbiAgICAgID5cbiAgICAgIDwvZW50aXR5LXBpY2tlci1yZXN1bHQ+XG4gICAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiICpuZ0lmPVwiaXNMb2FkaW5nICYmIG1hdGNoZXMubGVuZ3RoID4gMFwiPjwvbm92by1sb2FkaW5nPlxuICAgIDwvbm92by1saXN0PlxuICAgIDxwIGNsYXNzPVwicGlja2VyLWVycm9yXCIgKm5nSWY9XCJoYXNFcnJvclwiPnt7IGxhYmVscy5waWNrZXJFcnJvciB9fTwvcD5cbiAgICA8cCBjbGFzcz1cInBpY2tlci1udWxsLXJlc3VsdHNcIiAqbmdJZj1cImhhc05vbkVycm9yTWVzc2FnZSAmJiB0ZXJtICE9PSAnJ1wiPnt7IGxhYmVscy5waWNrZXJFbXB0eSB9fTwvcD5cbiAgICA8cCBjbGFzcz1cInBpY2tlci1udWxsLXJlc3VsdHNcIiAqbmdJZj1cImhhc05vbkVycm9yTWVzc2FnZSAmJiB0ZXJtID09PSAnJ1wiPnt7IGxhYmVscy5waWNrZXJUZXh0RmllbGRFbXB0eSB9fTwvcD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRW50aXR5UGlja2VyUmVzdWx0cyBleHRlbmRzIEJhc2VQaWNrZXJSZXN1bHRzIHtcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1lbnQsIHJlZik7XG4gIH1cblxuICBnZXQgaGFzTm9uRXJyb3JNZXNzYWdlKCkge1xuICAgIHJldHVybiAhdGhpcy5pc0xvYWRpbmcgJiYgIXRoaXMubWF0Y2hlcy5sZW5ndGggJiYgIXRoaXMuaGFzRXJyb3I7XG4gIH1cblxuICBnZXRMaXN0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignbm92by1saXN0Jyk7XG4gIH1cblxuICBzZWxlY3RNYXRjaChldmVudD86IGFueSwgaXRlbT86IGFueSkge1xuICAgIHRoaXMuc2VsZWN0Lm5leHQoaXRlbSk7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdE1hdGNoKGV2ZW50LCBpdGVtKTtcbiAgfVxufVxuIl19