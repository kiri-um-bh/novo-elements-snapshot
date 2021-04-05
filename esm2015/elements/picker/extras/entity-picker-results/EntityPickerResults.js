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
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r8.match.data.numAssigned, " / ", ctx_r8.match.data.openings, "");
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
    i0.ɵɵtemplate(13, EntityPickerResult_novo_list_item_0_p_13_Template, 4, 2, "p", 11);
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
    } }, directives: [i2.NgIf, i3.NovoListItemElement, i3.NovoItemHeaderElement, i3.NovoItemAvatarElement, i3.NovoItemTitleElement, i3.NovoItemContentElement], encapsulation: 2 });
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
          <span>{{ match.data.numAssigned }} / {{ match.data.openings }}</span>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5UGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3BpY2tlci9leHRyYXMvZW50aXR5LXBpY2tlci1yZXN1bHRzL0VudGl0eVBpY2tlclJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLFNBQVM7QUFDVCxNQUFNO0FBQ04sT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7SUFZckUsNkJBQ0U7SUFBQSx3QkFBMkI7SUFDM0IsMEJBQTBHO0lBQzVHLGlCQUFJOzs7SUFESSxlQUE0RjtJQUE1RixpUEFBNEY7OztJQUdwRyw2QkFDRTtJQUFBLHdCQUF5QztJQUN6QywwQkFBeUg7SUFDM0gsaUJBQUk7OztJQURJLGVBQTJHO0lBQTNHLHdLQUEyRzs7O0lBR25ILDZCQUNFO0lBQUEsd0JBQTZCO0lBQzdCLDBCQUFpSDtJQUNuSCxpQkFBSTs7O0lBREksZUFBbUc7SUFBbkcsZ0tBQW1HOzs7SUFHM0csNkJBQ0U7SUFBQSx3QkFBNEI7SUFDNUIsMEJBQStHO0lBQ2pILGlCQUFJOzs7SUFESSxlQUFpRztJQUFqRyw4SkFBaUc7OztJQUd6Ryw2QkFDRTtJQUFBLHdCQUE0QjtJQUM1QiwwQkFBaUU7SUFDbkUsaUJBQUk7OztJQURJLGVBQW1EO0lBQW5ELGtHQUFtRDs7O0lBRzNELDZCQUNFO0lBQUEsd0JBQXlCO0lBQ3pCLDBCQUFxSDtJQUN2SCxpQkFBSTs7O0lBREksZUFBdUc7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dCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG4vLyBWZW5kb3Jcbi8vIEFQUFxuaW1wb3J0IHsgQmFzZVBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW50aXR5LXBpY2tlci1yZXN1bHQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxub3ZvLWxpc3QtaXRlbSAqbmdJZj1cIm1hdGNoLmRhdGFcIiAoY2xpY2spPVwic2VsZWN0Lm5leHQobWF0Y2guZGF0YSlcIj5cbiAgICAgIDxpdGVtLWhlYWRlcj5cbiAgICAgICAgPGl0ZW0tYXZhdGFyIFtpY29uXT1cImdldEljb25Gb3JSZXN1bHQobWF0Y2guZGF0YSlcIj48L2l0ZW0tYXZhdGFyPlxuICAgICAgICA8aXRlbS10aXRsZT4gPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQoZ2V0TmFtZUZvclJlc3VsdChtYXRjaC5kYXRhKSwgdGVybSlcIj48L3NwYW4+IDwvaXRlbS10aXRsZT5cbiAgICAgIDwvaXRlbS1oZWFkZXI+XG4gICAgICA8aXRlbS1jb250ZW50IGRpcmVjdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgICAgPCEtLSBDT01QQU5ZIDEgLS0+XG4gICAgICAgIDxwIGNsYXNzPVwiY29tcGFueVwiICpuZ0lmPVwibWF0Y2guZGF0YS5jb21wYW55TmFtZSB8fCBtYXRjaC5kYXRhPy5jbGllbnRDb3Jwb3JhdGlvbj8ubmFtZVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNvbXBhbnlcIj48L2k+XG4gICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5jb21wYW55TmFtZSB8fCBtYXRjaC5kYXRhPy5jbGllbnRDb3Jwb3JhdGlvbj8ubmFtZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBDTElFTlQgQ09OVEFDVCAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJjb250YWN0XCIgKm5nSWY9XCJtYXRjaC5kYXRhPy5jbGllbnRDb250YWN0Py5maXJzdE5hbWVcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1wZXJzb24gY29udGFjdCBwZXJzb25cIj48L2k+XG4gICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5jbGllbnRDb250YWN0LmZpcnN0TmFtZSArICcgJyArIG1hdGNoLmRhdGEuY2xpZW50Q29udGFjdC5sYXN0TmFtZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBDQU5ESURBVEUgLS0+XG4gICAgICAgIDxwIGNsYXNzPVwiY2FuZGlkYXRlXCIgKm5nSWY9XCJtYXRjaC5kYXRhLmNhbmRpZGF0ZSAmJiBtYXRjaC5kYXRhLnNlYXJjaEVudGl0eSA9PT0gJ1BsYWNlbWVudCdcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jYW5kaWRhdGVcIj48L2k+XG4gICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5jYW5kaWRhdGUuZmlyc3ROYW1lICsgJyAnICsgbWF0Y2guZGF0YS5jYW5kaWRhdGUubGFzdE5hbWUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDwhLS0gU1RBUlQgJiBFTkQgREFURSAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJzdGFydC1kYXRlXCIgKm5nSWY9XCJtYXRjaC5kYXRhLmRhdGVCZWdpbiAmJiBtYXRjaC5kYXRhLnNlYXJjaEVudGl0eSA9PT0gJ1BsYWNlbWVudCdcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jYWxlbmRhclwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cInJlbmRlclRpbWVzdGFtcChtYXRjaC5kYXRhLmRhdGVCZWdpbikgKyAnIC0gJyArIHJlbmRlclRpbWVzdGFtcChtYXRjaC5kYXRhLmRhdGVFbmQpXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDwhLS0gU1RBUlQgRGF0ZSAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJzdGFydC1kYXRlXCIgKm5nSWY9XCJtYXRjaC5kYXRhLnN0YXJ0VGltZSAmJiBtYXRjaC5kYXRhLnNlYXJjaEVudGl0eSA9PT0gJ0pvYlNoaWZ0J1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwicmVuZGVyVGltZXN0YW1wKG1hdGNoLmRhdGEuc3RhcnRUaW1lKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIFNUQVJUICYgRU5EIFRJTUUgLS0+XG4gICAgICAgIDxwIGNsYXNzPVwic3RhcnQtdGltZVwiICpuZ0lmPVwibWF0Y2guZGF0YS5zdGFydFRpbWUgJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdKb2JTaGlmdCdcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jbG9ja1wiPjwvaT5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cInJlbmRlclRpbWVOb09mZnNldChtYXRjaC5kYXRhLnN0YXJ0VGltZSkgKyAnIC0gJyArIHJlbmRlclRpbWVOb09mZnNldChtYXRjaC5kYXRhLmVuZFRpbWUpXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDwhLS0gSk9CT1JERVIgLS0+XG4gICAgICAgIDxwIGNsYXNzPVwiam9iXCIgKm5nSWY9XCJtYXRjaC5kYXRhLmpvYk9yZGVyICYmIG1hdGNoLmRhdGEuc2VhcmNoRW50aXR5ID09PSAnSm9iU2hpZnQnXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktam9iXCI+PC9pPlxuICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuam9iT3JkZXIudGl0bGUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDwhLS0gT1BFTklOR1MgLS0+XG4gICAgICAgIDxwIGNsYXNzPVwib3BlbmluZ3NcIiAqbmdJZj1cIm1hdGNoLmRhdGEub3BlbmluZ3MgJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdKb2JTaGlmdCdcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jYW5kaWRhdGVcIj48L2k+XG4gICAgICAgICAgPHNwYW4+e3sgbWF0Y2guZGF0YS5udW1Bc3NpZ25lZCB9fSAvIHt7IG1hdGNoLmRhdGEub3BlbmluZ3MgfX08L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBFTUFJTCAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJlbWFpbFwiICpuZ0lmPVwibWF0Y2guZGF0YS5lbWFpbFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWVtYWlsXCI+PC9pPiA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmVtYWlsLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIFBIT05FIC0tPlxuICAgICAgICA8cCBjbGFzcz1cInBob25lXCIgKm5nSWY9XCJtYXRjaC5kYXRhLnBob25lXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktcGhvbmVcIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEucGhvbmUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDwhLS0gQUREUkVTUyAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJsb2NhdGlvblwiICpuZ0lmPVwibWF0Y2guZGF0YS5hZGRyZXNzICYmIChtYXRjaC5kYXRhLmFkZHJlc3MuY2l0eSB8fCBtYXRjaC5kYXRhLmFkZHJlc3Muc3RhdGUpXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktbG9jYXRpb25cIj48L2k+IDxzcGFuICpuZ0lmPVwibWF0Y2guZGF0YS5hZGRyZXNzLmNpdHlcIiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmFkZHJlc3MuY2l0eSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJtYXRjaC5kYXRhLmFkZHJlc3MuY2l0eSAmJiBtYXRjaC5kYXRhLmFkZHJlc3Muc3RhdGVcIj4sIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIm1hdGNoLmRhdGEuYWRkcmVzcy5zdGF0ZVwiIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuYWRkcmVzcy5zdGF0ZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBTVEFUVVMgLS0+XG4gICAgICAgIDxwIGNsYXNzPVwic3RhdHVzXCIgKm5nSWY9XCJtYXRjaC5kYXRhLnN0YXR1c1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWluZm9cIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuc3RhdHVzLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIE9XTkVSIC0tPlxuICAgICAgICA8cCBjbGFzcz1cIm93bmVyXCIgKm5nSWY9XCJtYXRjaC5kYXRhLm93bmVyICYmIG1hdGNoLmRhdGEub3duZXIubmFtZSAmJiBtYXRjaC5kYXRhLnNlYXJjaEVudGl0eSA9PT0gJ0NhbmRpZGF0ZSdcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1wZXJzb25cIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEub3duZXIubmFtZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBQUklNQVJZIERFUEFSVE1FTlQgLS0+XG4gICAgICAgIDxwXG4gICAgICAgICAgY2xhc3M9XCJwcmltYXJ5LWRlcGFydG1lbnRcIlxuICAgICAgICAgICpuZ0lmPVwibWF0Y2guZGF0YS5wcmltYXJ5RGVwYXJ0bWVudCAmJiBtYXRjaC5kYXRhLnByaW1hcnlEZXBhcnRtZW50Lm5hbWUgJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdDb3Jwb3JhdGVVc2VyJ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1kZXBhcnRtZW50XCI+PC9pPiA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLnByaW1hcnlEZXBhcnRtZW50Lm5hbWUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDwhLS0gT0NDVVBBVElPTiAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJvY2N1cGF0aW9uXCIgKm5nSWY9XCJtYXRjaC5kYXRhLm9jY3VwYXRpb24gJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdDb3Jwb3JhdGVVc2VyJ1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLW9jY3VwYXRpb25cIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEub2NjdXBhdGlvbiwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgIDwvbm92by1saXN0LWl0ZW0+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eVBpY2tlclJlc3VsdCB7XG4gIEBJbnB1dCgpIG1hdGNoOiBhbnk7XG4gIEBJbnB1dCgpIHRlcm06IGFueTtcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gY2FwdHVyZXMgdGhlIHdob2xlIHF1ZXJ5IHN0cmluZyBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBzdHJpbmcgdGhhdCB3aWxsIGJlIHVzZWQgdG9cbiAgICogbWF0Y2guXG4gICAqL1xuICBlc2NhcGVSZWdleHAocXVlcnlUb0VzY2FwZSkge1xuICAgIC8vIEV4OiBpZiB0aGUgY2FwdHVyZSBpcyBcImFcIiB0aGUgcmVzdWx0IHdpbGwgYmUgXFxhXG4gICAgcmV0dXJuIHF1ZXJ5VG9Fc2NhcGUucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2csICdcXFxcJDEnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgPHN0cm9uZz4tdGFnIHdyYXBwZWQgSFRNTCBzdHJpbmcuXG4gICAqL1xuICBoaWdobGlnaHQobWF0Y2gsIHF1ZXJ5KSB7XG4gICAgLy8gUmVwbGFjZXMgdGhlIGNhcHR1cmUgc3RyaW5nIHdpdGggYSB0aGUgc2FtZSBzdHJpbmcgaW5zaWRlIG9mIGEgXCJzdHJvbmdcIiB0YWdcbiAgICByZXR1cm4gcXVlcnkgJiYgbWF0Y2ggPyBtYXRjaC5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5lc2NhcGVSZWdleHAocXVlcnkudHJpbSgpKSwgJ2dpJyksICc8c3Ryb25nPiQmPC9zdHJvbmc+JykgOiBtYXRjaDtcbiAgfVxuXG4gIGdldEljb25Gb3JSZXN1bHQocmVzdWx0PzogYW55KTogc3RyaW5nIHtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBzd2l0Y2ggKHJlc3VsdC5zZWFyY2hFbnRpdHkpIHtcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdCc6XG4gICAgICAgICAgcmV0dXJuICdwZXJzb24gY29udGFjdCc7XG4gICAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uJzpcbiAgICAgICAgICByZXR1cm4gJ2NvbXBhbnknO1xuICAgICAgICBjYXNlICdPcHBvcnR1bml0eSc6XG4gICAgICAgICAgcmV0dXJuICdvcHBvcnR1bml0eSc7XG4gICAgICAgIGNhc2UgJ0NhbmRpZGF0ZSc6XG4gICAgICAgICAgcmV0dXJuICdjYW5kaWRhdGUnO1xuICAgICAgICBjYXNlICdMZWFkJzpcbiAgICAgICAgICByZXR1cm4gJ2xlYWQnO1xuICAgICAgICBjYXNlICdKb2JPcmRlcic6XG4gICAgICAgICAgcmV0dXJuICdqb2InO1xuICAgICAgICBjYXNlICdQbGFjZW1lbnQnOlxuICAgICAgICAgIHJldHVybiAnc3RhciBwbGFjZW1lbnQnO1xuICAgICAgICBjYXNlICdDb3Jwb3JhdGVVc2VyJzpcbiAgICAgICAgICByZXR1cm4gJ3VzZXInO1xuICAgICAgICBjYXNlICdDb3Jwb3JhdGlvbkRlcGFydG1lbnQnOlxuICAgICAgICAgIHJldHVybiAnZGVwYXJ0bWVudCc7XG4gICAgICAgIGNhc2UgJ0pvYlNoaWZ0JzpcbiAgICAgICAgICByZXR1cm4gJ3RpbWV0YWJsZSBjb250cmFjdCc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZW5kZXJUaW1lc3RhbXAoZGF0ZT86IGFueSkge1xuICAgIGxldCB0aW1lc3RhbXAgPSAnJztcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgdGltZXN0YW1wID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQoZGF0ZSwgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbnVtZXJpYycsIGRheTogJ251bWVyaWMnIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGltZXN0YW1wO1xuICB9XG5cbiAgcmVuZGVyVGltZShkYXRlU3RyPzogc3RyaW5nKSB7XG4gICAgbGV0IHRpbWVzdGFtcCA9ICcnO1xuICAgIGlmIChkYXRlU3RyKSB7XG4gICAgICB0aW1lc3RhbXAgPSB0aGlzLmxhYmVscy5mb3JtYXRUaW1lKG5ldyBEYXRlKGRhdGVTdHIpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRpbWVzdGFtcDtcbiAgfVxuXG4gIHJlbmRlclRpbWVOb09mZnNldChkYXRlU3RyPzogc3RyaW5nKSB7XG4gICAgbGV0IHRpbWVzdGFtcCA9ICcnO1xuICAgIGlmIChkYXRlU3RyKSB7XG4gICAgICBkYXRlU3RyID0gZGF0ZVN0ci5zbGljZSgwLCAxOSk7XG4gICAgICB0aW1lc3RhbXAgPSB0aGlzLmxhYmVscy5mb3JtYXRUaW1lKGRhdGVTdHIpO1xuICAgIH1cbiAgICByZXR1cm4gdGltZXN0YW1wO1xuICB9XG5cbiAgZ2V0TmFtZUZvclJlc3VsdChyZXN1bHQ/OiBhbnkpIHtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBzd2l0Y2ggKHJlc3VsdC5zZWFyY2hFbnRpdHkpIHtcbiAgICAgICAgY2FzZSAnTGVhZCc6XG4gICAgICAgIGNhc2UgJ0NvcnBvcmF0ZVVzZXInOlxuICAgICAgICBjYXNlICdDbGllbnRDb250YWN0JzpcbiAgICAgICAgY2FzZSAnQ2FuZGlkYXRlJzpcbiAgICAgICAgY2FzZSAnUGVyc29uJzpcbiAgICAgICAgICBpZiAoJ2ZpcnN0TmFtZScgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7cmVzdWx0LmZpcnN0TmFtZX0gJHtyZXN1bHQubGFzdE5hbWV9YC50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQubmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24nOlxuICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQubmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgICAgY2FzZSAnT3Bwb3J0dW5pdHknOlxuICAgICAgICBjYXNlICdKb2JPcmRlcic6XG4gICAgICAgICAgcmV0dXJuIGAke3Jlc3VsdC5pZH0gfCAke3Jlc3VsdC50aXRsZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgICAgY2FzZSAnUGxhY2VtZW50JzpcbiAgICAgICAgICBsZXQgbGFiZWwgPSBgJHtyZXN1bHQuaWR9YDtcbiAgICAgICAgICBpZiAocmVzdWx0LmNhbmRpZGF0ZSB8fCByZXN1bHQuam9iT3JkZXIpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY2FuZGlkYXRlICYmIHJlc3VsdC5qb2JPcmRlcikge1xuICAgICAgICAgICAgICBsYWJlbCA9IGAke2xhYmVsfSB8ICR7cmVzdWx0LmNhbmRpZGF0ZS5maXJzdE5hbWV9ICR7cmVzdWx0LmNhbmRpZGF0ZS5sYXN0TmFtZX0gLSAke3Jlc3VsdC5qb2JPcmRlci50aXRsZX1gLnRyaW0oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmpvYk9yZGVyKSB7XG4gICAgICAgICAgICAgIGxhYmVsID0gYCR7bGFiZWx9IHwgJHtyZXN1bHQuam9iT3JkZXIudGl0bGV9YC50cmltKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsYWJlbCA9IGAke2xhYmVsfSB8ICR7cmVzdWx0LmNhbmRpZGF0ZS5maXJzdE5hbWV9ICR7cmVzdWx0LmNhbmRpZGF0ZS5sYXN0TmFtZX1gLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICBjYXNlICdKb2JTaGlmdCc6XG4gICAgICAgICAgcmV0dXJuIGAke3Jlc3VsdC5qb2JPcmRlcj8udGl0bGV9IEAgJHtyZXN1bHQuam9iT3JkZXI/LmNsaWVudENvcnBvcmF0aW9uPy5uYW1lIHx8ICcnfWAudHJpbSgpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQubmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VudGl0eS1waWNrZXItcmVzdWx0cycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5vdm8tbGlzdCAqbmdJZj1cIm1hdGNoZXMubGVuZ3RoID4gMFwiIGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICA8ZW50aXR5LXBpY2tlci1yZXN1bHRcbiAgICAgICAgKm5nRm9yPVwibGV0IG1hdGNoIG9mIG1hdGNoZXNcIlxuICAgICAgICBbbWF0Y2hdPVwibWF0Y2hcIlxuICAgICAgICBbdGVybV09XCJ0ZXJtXCJcbiAgICAgICAgW25nQ2xhc3NdPVwieyBhY3RpdmU6IGlzQWN0aXZlKG1hdGNoKSB9XCJcbiAgICAgICAgKG1vdXNlZG93bik9XCJzZWxlY3RNYXRjaCgkZXZlbnQsIG1hdGNoKVwiXG4gICAgICAgIChtb3VzZWVudGVyKT1cInNlbGVjdEFjdGl2ZShtYXRjaClcIlxuICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwicHJlc2VsZWN0ZWQobWF0Y2gpXCJcbiAgICAgID5cbiAgICAgIDwvZW50aXR5LXBpY2tlci1yZXN1bHQ+XG4gICAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiICpuZ0lmPVwiaXNMb2FkaW5nICYmIG1hdGNoZXMubGVuZ3RoID4gMFwiPjwvbm92by1sb2FkaW5nPlxuICAgIDwvbm92by1saXN0PlxuICAgIDxwIGNsYXNzPVwicGlja2VyLWVycm9yXCIgKm5nSWY9XCJoYXNFcnJvclwiPnt7IGxhYmVscy5waWNrZXJFcnJvciB9fTwvcD5cbiAgICA8cCBjbGFzcz1cInBpY2tlci1udWxsLXJlc3VsdHNcIiAqbmdJZj1cImhhc05vbkVycm9yTWVzc2FnZSAmJiB0ZXJtICE9PSAnJ1wiPnt7IGxhYmVscy5waWNrZXJFbXB0eSB9fTwvcD5cbiAgICA8cCBjbGFzcz1cInBpY2tlci1udWxsLXJlc3VsdHNcIiAqbmdJZj1cImhhc05vbkVycm9yTWVzc2FnZSAmJiB0ZXJtID09PSAnJ1wiPnt7IGxhYmVscy5waWNrZXJUZXh0RmllbGRFbXB0eSB9fTwvcD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRW50aXR5UGlja2VyUmVzdWx0cyBleHRlbmRzIEJhc2VQaWNrZXJSZXN1bHRzIHtcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1lbnQsIHJlZik7XG4gIH1cblxuICBnZXQgaGFzTm9uRXJyb3JNZXNzYWdlKCkge1xuICAgIHJldHVybiAhdGhpcy5pc0xvYWRpbmcgJiYgIXRoaXMubWF0Y2hlcy5sZW5ndGggJiYgIXRoaXMuaGFzRXJyb3I7XG4gIH1cblxuICBnZXRMaXN0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignbm92by1saXN0Jyk7XG4gIH1cblxuICBzZWxlY3RNYXRjaChldmVudD86IGFueSwgaXRlbT86IGFueSkge1xuICAgIHRoaXMuc2VsZWN0Lm5leHQoaXRlbSk7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdE1hdGNoKGV2ZW50LCBpdGVtKTtcbiAgfVxufVxuIl19