import { __extends } from "tslib";
// NG2
import { Component, ElementRef, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
// Vendor
// APP
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import { NovoLabelService } from '../../../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/novo-label-service";
import * as i2 from "@angular/common";
import * as i3 from "../../../list/List";
import * as i4 from "../../../loading/Loading";
function EntityPickerResult_novo_list_item_0_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 15);
    i0.ɵɵelement(1, "i", 16);
    i0.ɵɵelement(2, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r1.highlight(ctx_r1.match.data.companyName || (ctx_r1.match.data == null ? null : ctx_r1.match.data.clientCorporation == null ? null : ctx_r1.match.data.clientCorporation.name), ctx_r1.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 17);
    i0.ɵɵelement(1, "i", 18);
    i0.ɵɵelement(2, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r2.highlight(ctx_r2.match.data.clientContact.firstName + " " + ctx_r2.match.data.clientContact.lastName, ctx_r2.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 19);
    i0.ɵɵelement(1, "i", 20);
    i0.ɵɵelement(2, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r3.highlight(ctx_r3.match.data.candidate.firstName + " " + ctx_r3.match.data.candidate.lastName, ctx_r3.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵelement(1, "i", 22);
    i0.ɵɵelement(2, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r4.renderTimestamp(ctx_r4.match.data.dateBegin) + " - " + ctx_r4.renderTimestamp(ctx_r4.match.data.dateEnd), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵelement(1, "i", 24);
    i0.ɵɵelement(2, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r5.highlight(ctx_r5.match.data.email, ctx_r5.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵelement(1, "i", 26);
    i0.ɵɵelement(2, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r6.highlight(ctx_r6.match.data.phone, ctx_r6.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_12_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 2);
} if (rf & 2) {
    var ctx_r12 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHtml", ctx_r12.highlight(ctx_r12.match.data.address.city, ctx_r12.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_12_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, ", ");
    i0.ɵɵelementEnd();
} }
function EntityPickerResult_novo_list_item_0_p_12_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 2);
} if (rf & 2) {
    var ctx_r14 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHtml", ctx_r14.highlight(ctx_r14.match.data.address.state, ctx_r14.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 27);
    i0.ɵɵelement(1, "i", 28);
    i0.ɵɵtemplate(2, EntityPickerResult_novo_list_item_0_p_12_span_2_Template, 1, 1, "span", 29);
    i0.ɵɵtemplate(3, EntityPickerResult_novo_list_item_0_p_12_span_3_Template, 2, 0, "span", 0);
    i0.ɵɵtemplate(4, EntityPickerResult_novo_list_item_0_p_12_span_4_Template, 1, 1, "span", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r7.match.data.address.city);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.match.data.address.city && ctx_r7.match.data.address.state);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.match.data.address.state);
} }
function EntityPickerResult_novo_list_item_0_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 30);
    i0.ɵɵelement(1, "i", 31);
    i0.ɵɵelement(2, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r8.highlight(ctx_r8.match.data.status, ctx_r8.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵelement(1, "i", 33);
    i0.ɵɵelement(2, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r9.highlight(ctx_r9.match.data.owner.name, ctx_r9.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 34);
    i0.ɵɵelement(1, "i", 35);
    i0.ɵɵelement(2, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r10.highlight(ctx_r10.match.data.primaryDepartment.name, ctx_r10.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_p_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 36);
    i0.ɵɵelement(1, "i", 37);
    i0.ɵɵelement(2, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r11.highlight(ctx_r11.match.data.occupation, ctx_r11.term), i0.ɵɵsanitizeHtml);
} }
function EntityPickerResult_novo_list_item_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-list-item");
    i0.ɵɵelementStart(1, "item-header");
    i0.ɵɵelement(2, "item-avatar", 1);
    i0.ɵɵelementStart(3, "item-title");
    i0.ɵɵelement(4, "span", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "item-content", 3);
    i0.ɵɵtemplate(6, EntityPickerResult_novo_list_item_0_p_6_Template, 3, 1, "p", 4);
    i0.ɵɵtemplate(7, EntityPickerResult_novo_list_item_0_p_7_Template, 3, 1, "p", 5);
    i0.ɵɵtemplate(8, EntityPickerResult_novo_list_item_0_p_8_Template, 3, 1, "p", 6);
    i0.ɵɵtemplate(9, EntityPickerResult_novo_list_item_0_p_9_Template, 3, 1, "p", 7);
    i0.ɵɵtemplate(10, EntityPickerResult_novo_list_item_0_p_10_Template, 3, 1, "p", 8);
    i0.ɵɵtemplate(11, EntityPickerResult_novo_list_item_0_p_11_Template, 3, 1, "p", 9);
    i0.ɵɵtemplate(12, EntityPickerResult_novo_list_item_0_p_12_Template, 5, 3, "p", 10);
    i0.ɵɵtemplate(13, EntityPickerResult_novo_list_item_0_p_13_Template, 3, 1, "p", 11);
    i0.ɵɵtemplate(14, EntityPickerResult_novo_list_item_0_p_14_Template, 3, 1, "p", 12);
    i0.ɵɵtemplate(15, EntityPickerResult_novo_list_item_0_p_15_Template, 3, 1, "p", 13);
    i0.ɵɵtemplate(16, EntityPickerResult_novo_list_item_0_p_16_Template, 3, 1, "p", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
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
var _c0 = function (a0) { return { active: a0 }; };
function EntityPickerResults_novo_list_0_entity_picker_result_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "entity-picker-result", 6);
    i0.ɵɵlistener("click", function EntityPickerResults_novo_list_0_entity_picker_result_1_Template_entity_picker_result_click_0_listener($event) { i0.ɵɵrestoreView(_r8); var match_r6 = ctx.$implicit; var ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.selectMatch($event, match_r6); })("mouseenter", function EntityPickerResults_novo_list_0_entity_picker_result_1_Template_entity_picker_result_mouseenter_0_listener() { i0.ɵɵrestoreView(_r8); var match_r6 = ctx.$implicit; var ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.selectActive(match_r6); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var match_r6 = ctx.$implicit;
    var ctx_r4 = i0.ɵɵnextContext(2);
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
    var ctx_r0 = i0.ɵɵnextContext();
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
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.labels.pickerError);
} }
function EntityPickerResults_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.labels.pickerEmpty);
} }
function EntityPickerResults_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.labels.pickerTextFieldEmpty);
} }
var EntityPickerResult = /** @class */ (function () {
    function EntityPickerResult(labels) {
        this.labels = labels;
    }
    /**
     * @description This function captures the whole query string and replace it with the string that will be used to
     * match.
     */
    EntityPickerResult.prototype.escapeRegexp = function (queryToEscape) {
        // Ex: if the capture is "a" the result will be \a
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    };
    /**
     * @description This function should return a <strong>-tag wrapped HTML string.
     */
    EntityPickerResult.prototype.highlight = function (match, query) {
        // Replaces the capture string with a the same string inside of a "strong" tag
        return query && match ? match.replace(new RegExp(this.escapeRegexp(query.trim()), 'gi'), '<strong>$&</strong>') : match;
    };
    EntityPickerResult.prototype.getIconForResult = function (result) {
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
                default:
                    return '';
            }
        }
        return '';
    };
    EntityPickerResult.prototype.renderTimestamp = function (date) {
        var timestamp = '';
        if (date) {
            timestamp = this.labels.formatDateWithFormat(date, { year: 'numeric', month: 'numeric', day: 'numeric' });
        }
        return timestamp;
    };
    EntityPickerResult.prototype.getNameForResult = function (result) {
        if (result) {
            switch (result.searchEntity) {
                case 'Lead':
                case 'CorporateUser':
                case 'ClientContact':
                case 'Candidate':
                case 'Person':
                    if ('firstName' in result) {
                        return (result.firstName + " " + result.lastName).trim();
                    }
                    return ("" + (result.name || '')).trim();
                case 'ClientCorporation':
                    return ("" + (result.name || '')).trim();
                case 'Opportunity':
                case 'JobOrder':
                    return (result.id + " | " + (result.title || '')).trim();
                case 'Placement':
                    var label = "" + result.id;
                    if (result.candidate || result.jobOrder) {
                        if (result.candidate && result.jobOrder) {
                            label = (label + " | " + result.candidate.firstName + " " + result.candidate.lastName + " - " + result.jobOrder.title).trim();
                        }
                        else if (result.jobOrder) {
                            label = (label + " | " + result.jobOrder.title).trim();
                        }
                        else {
                            label = (label + " | " + result.candidate.firstName + " " + result.candidate.lastName).trim();
                        }
                    }
                    return label;
                default:
                    return ("" + (result.name || '')).trim();
            }
        }
        return '';
    };
    EntityPickerResult.ɵfac = function EntityPickerResult_Factory(t) { return new (t || EntityPickerResult)(i0.ɵɵdirectiveInject(i1.NovoLabelService)); };
    EntityPickerResult.ɵcmp = i0.ɵɵdefineComponent({ type: EntityPickerResult, selectors: [["entity-picker-result"]], inputs: { match: "match", term: "term" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "icon"], [3, "innerHtml"], ["direction", "horizontal"], ["class", "company", 4, "ngIf"], ["class", "contact", 4, "ngIf"], ["class", "candidate", 4, "ngIf"], ["class", "start-date", 4, "ngIf"], ["class", "email", 4, "ngIf"], ["class", "phone", 4, "ngIf"], ["class", "location", 4, "ngIf"], ["class", "status", 4, "ngIf"], ["class", "owner", 4, "ngIf"], ["class", "primary-department", 4, "ngIf"], ["class", "occupation", 4, "ngIf"], [1, "company"], [1, "bhi-company"], [1, "contact"], [1, "bhi-person", "contact", "person"], [1, "candidate"], [1, "bhi-candidate"], [1, "start-date"], [1, "bhi-calendar"], [1, "email"], [1, "bhi-email"], [1, "phone"], [1, "bhi-phone"], [1, "location"], [1, "bhi-location"], [3, "innerHtml", 4, "ngIf"], [1, "status"], [1, "bhi-info"], [1, "owner"], [1, "bhi-person"], [1, "primary-department"], [1, "bhi-department"], [1, "occupation"], [1, "bhi-occupation"]], template: function EntityPickerResult_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, EntityPickerResult_novo_list_item_0_Template, 17, 13, "novo-list-item", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.match.data);
        } }, directives: [i2.NgIf, i3.NovoListItemElement, i3.NovoItemHeaderElement, i3.NovoItemAvatarElement, i3.NovoItemTitleElement, i3.NovoItemContentElement], encapsulation: 2 });
    return EntityPickerResult;
}());
export { EntityPickerResult };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EntityPickerResult, [{
        type: Component,
        args: [{
                selector: 'entity-picker-result',
                template: "\n    <novo-list-item *ngIf=\"match.data\">\n      <item-header>\n        <item-avatar [icon]=\"getIconForResult(match.data)\"></item-avatar>\n        <item-title> <span [innerHtml]=\"highlight(getNameForResult(match.data), term)\"></span> </item-title>\n      </item-header>\n      <item-content direction=\"horizontal\">\n        <!-- COMPANY 1 -->\n        <p class=\"company\" *ngIf=\"match.data.companyName || match.data?.clientCorporation?.name\">\n          <i class=\"bhi-company\"></i>\n          <span [innerHtml]=\"highlight(match.data.companyName || match.data?.clientCorporation?.name, term)\"></span>\n        </p>\n        <!-- CLIENT CONTACT -->\n        <p class=\"contact\" *ngIf=\"match.data?.clientContact?.firstName\">\n          <i class=\"bhi-person contact person\"></i>\n          <span [innerHtml]=\"highlight(match.data.clientContact.firstName + ' ' + match.data.clientContact.lastName, term)\"></span>\n        </p>\n        <!-- CANDIDATE -->\n        <p class=\"candidate\" *ngIf=\"match.data.candidate && match.data.searchEntity === 'Placement'\">\n          <i class=\"bhi-candidate\"></i>\n          <span [innerHtml]=\"highlight(match.data.candidate.firstName + ' ' + match.data.candidate.lastName, term)\"></span>\n        </p>\n        <!-- START & END DATE -->\n        <p class=\"start-date\" *ngIf=\"match.data.dateBegin && match.data.searchEntity === 'Placement'\">\n          <i class=\"bhi-calendar\"></i>\n          <span [innerHtml]=\"renderTimestamp(match.data.dateBegin) + ' - ' + renderTimestamp(match.data.dateEnd)\"></span>\n        </p>\n        <!-- EMAIL -->\n        <p class=\"email\" *ngIf=\"match.data.email\">\n          <i class=\"bhi-email\"></i> <span [innerHtml]=\"highlight(match.data.email, term)\"></span>\n        </p>\n        <!-- PHONE -->\n        <p class=\"phone\" *ngIf=\"match.data.phone\">\n          <i class=\"bhi-phone\"></i> <span [innerHtml]=\"highlight(match.data.phone, term)\"></span>\n        </p>\n        <!-- ADDRESS -->\n        <p class=\"location\" *ngIf=\"match.data.address && (match.data.address.city || match.data.address.state)\">\n          <i class=\"bhi-location\"></i> <span *ngIf=\"match.data.address.city\" [innerHtml]=\"highlight(match.data.address.city, term)\"></span>\n          <span *ngIf=\"match.data.address.city && match.data.address.state\">, </span>\n          <span *ngIf=\"match.data.address.state\" [innerHtml]=\"highlight(match.data.address.state, term)\"></span>\n        </p>\n        <!-- STATUS -->\n        <p class=\"status\" *ngIf=\"match.data.status\">\n          <i class=\"bhi-info\"></i> <span [innerHtml]=\"highlight(match.data.status, term)\"></span>\n        </p>\n        <!-- OWNER -->\n        <p class=\"owner\" *ngIf=\"match.data.owner && match.data.owner.name && match.data.searchEntity === 'Candidate'\">\n          <i class=\"bhi-person\"></i> <span [innerHtml]=\"highlight(match.data.owner.name, term)\"></span>\n        </p>\n        <!-- PRIMARY DEPARTMENT -->\n        <p\n          class=\"primary-department\"\n          *ngIf=\"match.data.primaryDepartment && match.data.primaryDepartment.name && match.data.searchEntity === 'CorporateUser'\"\n        >\n          <i class=\"bhi-department\"></i> <span [innerHtml]=\"highlight(match.data.primaryDepartment.name, term)\"></span>\n        </p>\n        <!-- OCCUPATION -->\n        <p class=\"occupation\" *ngIf=\"match.data.occupation && match.data.searchEntity === 'CorporateUser'\">\n          <i class=\"bhi-occupation\"></i> <span [innerHtml]=\"highlight(match.data.occupation, term)\"></span>\n        </p>\n      </item-content>\n    </novo-list-item>\n  ",
            }]
    }], function () { return [{ type: i1.NovoLabelService }]; }, { match: [{
            type: Input
        }], term: [{
            type: Input
        }] }); })();
var EntityPickerResults = /** @class */ (function (_super) {
    __extends(EntityPickerResults, _super);
    function EntityPickerResults(element, labels, ref) {
        var _this = _super.call(this, element, ref) || this;
        _this.labels = labels;
        _this.select = new EventEmitter();
        return _this;
    }
    Object.defineProperty(EntityPickerResults.prototype, "hasNonErrorMessage", {
        get: function () {
            return !this.isLoading && !this.matches.length && !this.hasError;
        },
        enumerable: true,
        configurable: true
    });
    EntityPickerResults.prototype.getListElement = function () {
        return this.element.nativeElement.querySelector('novo-list');
    };
    EntityPickerResults.prototype.selectMatch = function (event, item) {
        this.select.next(item);
        return _super.prototype.selectMatch.call(this, event, item);
    };
    EntityPickerResults.ɵfac = function EntityPickerResults_Factory(t) { return new (t || EntityPickerResults)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    EntityPickerResults.ɵcmp = i0.ɵɵdefineComponent({ type: EntityPickerResults, selectors: [["entity-picker-results"]], outputs: { select: "select" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 4, consts: [["direction", "vertical", 4, "ngIf"], ["class", "picker-error", 4, "ngIf"], ["class", "picker-null-results", 4, "ngIf"], ["direction", "vertical"], [3, "match", "term", "ngClass", "disabled", "click", "mouseenter", 4, "ngFor", "ngForOf"], ["theme", "line", 4, "ngIf"], [3, "match", "term", "ngClass", "click", "mouseenter"], ["theme", "line"], [1, "picker-error"], [1, "picker-null-results"]], template: function EntityPickerResults_Template(rf, ctx) { if (rf & 1) {
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
    return EntityPickerResults;
}(BasePickerResults));
export { EntityPickerResults };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EntityPickerResults, [{
        type: Component,
        args: [{
                selector: 'entity-picker-results',
                template: "\n    <novo-list *ngIf=\"matches.length > 0\" direction=\"vertical\">\n      <entity-picker-result\n        *ngFor=\"let match of matches\"\n        [match]=\"match\"\n        [term]=\"term\"\n        (click)=\"selectMatch($event, match)\"\n        [ngClass]=\"{ active: isActive(match) }\"\n        (mouseenter)=\"selectActive(match)\"\n        [class.disabled]=\"preselected(match)\"\n      >\n      </entity-picker-result>\n      <novo-loading theme=\"line\" *ngIf=\"isLoading && matches.length > 0\"></novo-loading>\n    </novo-list>\n    <p class=\"picker-error\" *ngIf=\"hasError\">{{ labels.pickerError }}</p>\n    <p class=\"picker-null-results\" *ngIf=\"hasNonErrorMessage && term !== ''\">{{ labels.pickerEmpty }}</p>\n    <p class=\"picker-null-results\" *ngIf=\"hasNonErrorMessage && term === ''\">{{ labels.pickerTextFieldEmpty }}</p>\n  ",
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NovoLabelService }, { type: i0.ChangeDetectorRef }]; }, { select: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5UGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL2VudGl0eS1waWNrZXItcmVzdWx0cy9FbnRpdHlQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsU0FBUztBQUNULE1BQU07QUFDTixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7OztJQVluRSw2QkFDRTtJQUFBLHdCQUEyQjtJQUMzQiwwQkFBMEc7SUFDNUcsaUJBQUk7OztJQURJLGVBQTRGO0lBQTVGLGlQQUE0Rjs7O0lBR3BHLDZCQUNFO0lBQUEsd0JBQXlDO0lBQ3pDLDBCQUF5SDtJQUMzSCxpQkFBSTs7O0lBREksZUFBMkc7SUFBM0csd0tBQTJHOzs7SUFHbkgsNkJBQ0U7SUFBQSx3QkFBNkI7SUFDN0IsMEJBQWlIO0lBQ25ILGlCQUFJOzs7SUFESSxlQUFtRztJQUFuRyxnS0FBbUc7OztJQUczRyw2QkFDRTtJQUFBLHdCQUE0QjtJQUM1QiwwQkFBK0c7SUFDakgsaUJBQUk7OztJQURJLGVBQWlHO0lBQWpHLDhKQUFpRzs7O0lBR3pHLDZCQUNFO0lBQUEsd0JBQXlCO0lBQUMsMEJBQTZEO0lBQ3pGLGlCQUFJOzs7SUFEOEIsZUFBK0M7SUFBL0MscUdBQStDOzs7SUFHakYsNkJBQ0U7SUFBQSx3QkFBeUI7SUFBQywwQkFBNkQ7SUFDekYsaUJBQUk7OztJQUQ4QixlQUErQztJQUEvQyxxR0FBK0M7OztJQUlsRCwwQkFBb0c7OztJQUE5RCwrR0FBc0Q7OztJQUN6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QUVELDRDQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLEtBQVcsRUFBRSxJQUFVO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8saUJBQU0sV0FBVyxZQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOzBGQWxCVSxtQkFBbUI7NERBQW5CLG1CQUFtQjtZQWxCNUIsZ0ZBQ0U7WUFZRixnRUFBeUM7WUFDekMsZ0VBQXlFO1lBQ3pFLGdFQUF5RTs7WUFmOUQsNkNBQTBCO1lBYWIsZUFBZ0I7WUFBaEIsbUNBQWdCO1lBQ1QsZUFBeUM7WUFBekMsZ0VBQXlDO1lBQ3pDLGVBQXlDO1lBQXpDLGdFQUF5QzttRUFwSC9ELGtCQUFrQjs4QkF6RS9CO0NBbU5DLEFBeENELENBcUJ5QyxpQkFBaUIsR0FtQnpEO1NBbkJZLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBckIvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFLHExQkFpQlQ7YUFDRjs7a0JBRUUsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBWZW5kb3Jcbi8vIEFQUFxuaW1wb3J0IHsgQmFzZVBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbnRpdHktcGlja2VyLXJlc3VsdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5vdm8tbGlzdC1pdGVtICpuZ0lmPVwibWF0Y2guZGF0YVwiPlxuICAgICAgPGl0ZW0taGVhZGVyPlxuICAgICAgICA8aXRlbS1hdmF0YXIgW2ljb25dPVwiZ2V0SWNvbkZvclJlc3VsdChtYXRjaC5kYXRhKVwiPjwvaXRlbS1hdmF0YXI+XG4gICAgICAgIDxpdGVtLXRpdGxlPiA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChnZXROYW1lRm9yUmVzdWx0KG1hdGNoLmRhdGEpLCB0ZXJtKVwiPjwvc3Bhbj4gPC9pdGVtLXRpdGxlPlxuICAgICAgPC9pdGVtLWhlYWRlcj5cbiAgICAgIDxpdGVtLWNvbnRlbnQgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICA8IS0tIENPTVBBTlkgMSAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJjb21wYW55XCIgKm5nSWY9XCJtYXRjaC5kYXRhLmNvbXBhbnlOYW1lIHx8IG1hdGNoLmRhdGE/LmNsaWVudENvcnBvcmF0aW9uPy5uYW1lXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktY29tcGFueVwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmNvbXBhbnlOYW1lIHx8IG1hdGNoLmRhdGE/LmNsaWVudENvcnBvcmF0aW9uPy5uYW1lLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIENMSUVOVCBDT05UQUNUIC0tPlxuICAgICAgICA8cCBjbGFzcz1cImNvbnRhY3RcIiAqbmdJZj1cIm1hdGNoLmRhdGE/LmNsaWVudENvbnRhY3Q/LmZpcnN0TmFtZVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXBlcnNvbiBjb250YWN0IHBlcnNvblwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmNsaWVudENvbnRhY3QuZmlyc3ROYW1lICsgJyAnICsgbWF0Y2guZGF0YS5jbGllbnRDb250YWN0Lmxhc3ROYW1lLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIENBTkRJREFURSAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJjYW5kaWRhdGVcIiAqbmdJZj1cIm1hdGNoLmRhdGEuY2FuZGlkYXRlICYmIG1hdGNoLmRhdGEuc2VhcmNoRW50aXR5ID09PSAnUGxhY2VtZW50J1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNhbmRpZGF0ZVwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmNhbmRpZGF0ZS5maXJzdE5hbWUgKyAnICcgKyBtYXRjaC5kYXRhLmNhbmRpZGF0ZS5sYXN0TmFtZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBTVEFSVCAmIEVORCBEQVRFIC0tPlxuICAgICAgICA8cCBjbGFzcz1cInN0YXJ0LWRhdGVcIiAqbmdJZj1cIm1hdGNoLmRhdGEuZGF0ZUJlZ2luICYmIG1hdGNoLmRhdGEuc2VhcmNoRW50aXR5ID09PSAnUGxhY2VtZW50J1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwicmVuZGVyVGltZXN0YW1wKG1hdGNoLmRhdGEuZGF0ZUJlZ2luKSArICcgLSAnICsgcmVuZGVyVGltZXN0YW1wKG1hdGNoLmRhdGEuZGF0ZUVuZClcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBFTUFJTCAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJlbWFpbFwiICpuZ0lmPVwibWF0Y2guZGF0YS5lbWFpbFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWVtYWlsXCI+PC9pPiA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmVtYWlsLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIFBIT05FIC0tPlxuICAgICAgICA8cCBjbGFzcz1cInBob25lXCIgKm5nSWY9XCJtYXRjaC5kYXRhLnBob25lXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktcGhvbmVcIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEucGhvbmUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDwhLS0gQUREUkVTUyAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJsb2NhdGlvblwiICpuZ0lmPVwibWF0Y2guZGF0YS5hZGRyZXNzICYmIChtYXRjaC5kYXRhLmFkZHJlc3MuY2l0eSB8fCBtYXRjaC5kYXRhLmFkZHJlc3Muc3RhdGUpXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktbG9jYXRpb25cIj48L2k+IDxzcGFuICpuZ0lmPVwibWF0Y2guZGF0YS5hZGRyZXNzLmNpdHlcIiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmFkZHJlc3MuY2l0eSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJtYXRjaC5kYXRhLmFkZHJlc3MuY2l0eSAmJiBtYXRjaC5kYXRhLmFkZHJlc3Muc3RhdGVcIj4sIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIm1hdGNoLmRhdGEuYWRkcmVzcy5zdGF0ZVwiIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuYWRkcmVzcy5zdGF0ZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBTVEFUVVMgLS0+XG4gICAgICAgIDxwIGNsYXNzPVwic3RhdHVzXCIgKm5nSWY9XCJtYXRjaC5kYXRhLnN0YXR1c1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWluZm9cIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuc3RhdHVzLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIE9XTkVSIC0tPlxuICAgICAgICA8cCBjbGFzcz1cIm93bmVyXCIgKm5nSWY9XCJtYXRjaC5kYXRhLm93bmVyICYmIG1hdGNoLmRhdGEub3duZXIubmFtZSAmJiBtYXRjaC5kYXRhLnNlYXJjaEVudGl0eSA9PT0gJ0NhbmRpZGF0ZSdcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1wZXJzb25cIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEub3duZXIubmFtZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBQUklNQVJZIERFUEFSVE1FTlQgLS0+XG4gICAgICAgIDxwXG4gICAgICAgICAgY2xhc3M9XCJwcmltYXJ5LWRlcGFydG1lbnRcIlxuICAgICAgICAgICpuZ0lmPVwibWF0Y2guZGF0YS5wcmltYXJ5RGVwYXJ0bWVudCAmJiBtYXRjaC5kYXRhLnByaW1hcnlEZXBhcnRtZW50Lm5hbWUgJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdDb3Jwb3JhdGVVc2VyJ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1kZXBhcnRtZW50XCI+PC9pPiA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLnByaW1hcnlEZXBhcnRtZW50Lm5hbWUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDwhLS0gT0NDVVBBVElPTiAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJvY2N1cGF0aW9uXCIgKm5nSWY9XCJtYXRjaC5kYXRhLm9jY3VwYXRpb24gJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdDb3Jwb3JhdGVVc2VyJ1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLW9jY3VwYXRpb25cIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEub2NjdXBhdGlvbiwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgIDwvbm92by1saXN0LWl0ZW0+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eVBpY2tlclJlc3VsdCB7XG4gIEBJbnB1dCgpXG4gIG1hdGNoOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHRlcm06IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBjYXB0dXJlcyB0aGUgd2hvbGUgcXVlcnkgc3RyaW5nIGFuZCByZXBsYWNlIGl0IHdpdGggdGhlIHN0cmluZyB0aGF0IHdpbGwgYmUgdXNlZCB0b1xuICAgKiBtYXRjaC5cbiAgICovXG4gIGVzY2FwZVJlZ2V4cChxdWVyeVRvRXNjYXBlKSB7XG4gICAgLy8gRXg6IGlmIHRoZSBjYXB0dXJlIGlzIFwiYVwiIHRoZSByZXN1bHQgd2lsbCBiZSBcXGFcbiAgICByZXR1cm4gcXVlcnlUb0VzY2FwZS5yZXBsYWNlKC8oWy4/KiteJFtcXF1cXFxcKCl7fXwtXSkvZywgJ1xcXFwkMScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYSA8c3Ryb25nPi10YWcgd3JhcHBlZCBIVE1MIHN0cmluZy5cbiAgICovXG4gIGhpZ2hsaWdodChtYXRjaCwgcXVlcnkpIHtcbiAgICAvLyBSZXBsYWNlcyB0aGUgY2FwdHVyZSBzdHJpbmcgd2l0aCBhIHRoZSBzYW1lIHN0cmluZyBpbnNpZGUgb2YgYSBcInN0cm9uZ1wiIHRhZ1xuICAgIHJldHVybiBxdWVyeSAmJiBtYXRjaCA/IG1hdGNoLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLmVzY2FwZVJlZ2V4cChxdWVyeS50cmltKCkpLCAnZ2knKSwgJzxzdHJvbmc+JCY8L3N0cm9uZz4nKSA6IG1hdGNoO1xuICB9XG5cbiAgZ2V0SWNvbkZvclJlc3VsdChyZXN1bHQ/OiBhbnkpOiBzdHJpbmcge1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHN3aXRjaCAocmVzdWx0LnNlYXJjaEVudGl0eSkge1xuICAgICAgICBjYXNlICdDbGllbnRDb250YWN0JzpcbiAgICAgICAgICByZXR1cm4gJ3BlcnNvbiBjb250YWN0JztcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24nOlxuICAgICAgICAgIHJldHVybiAnY29tcGFueSc7XG4gICAgICAgIGNhc2UgJ09wcG9ydHVuaXR5JzpcbiAgICAgICAgICByZXR1cm4gJ29wcG9ydHVuaXR5JztcbiAgICAgICAgY2FzZSAnQ2FuZGlkYXRlJzpcbiAgICAgICAgICByZXR1cm4gJ2NhbmRpZGF0ZSc7XG4gICAgICAgIGNhc2UgJ0xlYWQnOlxuICAgICAgICAgIHJldHVybiAnbGVhZCc7XG4gICAgICAgIGNhc2UgJ0pvYk9yZGVyJzpcbiAgICAgICAgICByZXR1cm4gJ2pvYic7XG4gICAgICAgIGNhc2UgJ1BsYWNlbWVudCc6XG4gICAgICAgICAgcmV0dXJuICdzdGFyIHBsYWNlbWVudCc7XG4gICAgICAgIGNhc2UgJ0NvcnBvcmF0ZVVzZXInOlxuICAgICAgICAgIHJldHVybiAndXNlcic7XG4gICAgICAgIGNhc2UgJ0NvcnBvcmF0aW9uRGVwYXJ0bWVudCc6XG4gICAgICAgICAgcmV0dXJuICdkZXBhcnRtZW50JztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJlbmRlclRpbWVzdGFtcChkYXRlPzogYW55KSB7XG4gICAgbGV0IHRpbWVzdGFtcCA9ICcnO1xuICAgIGlmIChkYXRlKSB7XG4gICAgICB0aW1lc3RhbXAgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdChkYXRlLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdudW1lcmljJywgZGF5OiAnbnVtZXJpYycgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aW1lc3RhbXA7XG4gIH1cblxuICBnZXROYW1lRm9yUmVzdWx0KHJlc3VsdD86IGFueSkge1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHN3aXRjaCAocmVzdWx0LnNlYXJjaEVudGl0eSkge1xuICAgICAgICBjYXNlICdMZWFkJzpcbiAgICAgICAgY2FzZSAnQ29ycG9yYXRlVXNlcic6XG4gICAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3QnOlxuICAgICAgICBjYXNlICdDYW5kaWRhdGUnOlxuICAgICAgICBjYXNlICdQZXJzb24nOlxuICAgICAgICAgIGlmICgnZmlyc3ROYW1lJyBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQuZmlyc3ROYW1lfSAke3Jlc3VsdC5sYXN0TmFtZX1gLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGAke3Jlc3VsdC5uYW1lIHx8ICcnfWAudHJpbSgpO1xuICAgICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbic6XG4gICAgICAgICAgcmV0dXJuIGAke3Jlc3VsdC5uYW1lIHx8ICcnfWAudHJpbSgpO1xuICAgICAgICBjYXNlICdPcHBvcnR1bml0eSc6XG4gICAgICAgIGNhc2UgJ0pvYk9yZGVyJzpcbiAgICAgICAgICByZXR1cm4gYCR7cmVzdWx0LmlkfSB8ICR7cmVzdWx0LnRpdGxlIHx8ICcnfWAudHJpbSgpO1xuICAgICAgICBjYXNlICdQbGFjZW1lbnQnOlxuICAgICAgICAgIGxldCBsYWJlbCA9IGAke3Jlc3VsdC5pZH1gO1xuICAgICAgICAgIGlmIChyZXN1bHQuY2FuZGlkYXRlIHx8IHJlc3VsdC5qb2JPcmRlcikge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5jYW5kaWRhdGUgJiYgcmVzdWx0LmpvYk9yZGVyKSB7XG4gICAgICAgICAgICAgIGxhYmVsID0gYCR7bGFiZWx9IHwgJHtyZXN1bHQuY2FuZGlkYXRlLmZpcnN0TmFtZX0gJHtyZXN1bHQuY2FuZGlkYXRlLmxhc3ROYW1lfSAtICR7cmVzdWx0LmpvYk9yZGVyLnRpdGxlfWAudHJpbSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuam9iT3JkZXIpIHtcbiAgICAgICAgICAgICAgbGFiZWwgPSBgJHtsYWJlbH0gfCAke3Jlc3VsdC5qb2JPcmRlci50aXRsZX1gLnRyaW0oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxhYmVsID0gYCR7bGFiZWx9IHwgJHtyZXN1bHQuY2FuZGlkYXRlLmZpcnN0TmFtZX0gJHtyZXN1bHQuY2FuZGlkYXRlLmxhc3ROYW1lfWAudHJpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGAke3Jlc3VsdC5uYW1lIHx8ICcnfWAudHJpbSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW50aXR5LXBpY2tlci1yZXN1bHRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bm92by1saXN0ICpuZ0lmPVwibWF0Y2hlcy5sZW5ndGggPiAwXCIgZGlyZWN0aW9uPVwidmVydGljYWxcIj5cbiAgICAgIDxlbnRpdHktcGlja2VyLXJlc3VsdFxuICAgICAgICAqbmdGb3I9XCJsZXQgbWF0Y2ggb2YgbWF0Y2hlc1wiXG4gICAgICAgIFttYXRjaF09XCJtYXRjaFwiXG4gICAgICAgIFt0ZXJtXT1cInRlcm1cIlxuICAgICAgICAoY2xpY2spPVwic2VsZWN0TWF0Y2goJGV2ZW50LCBtYXRjaClcIlxuICAgICAgICBbbmdDbGFzc109XCJ7IGFjdGl2ZTogaXNBY3RpdmUobWF0Y2gpIH1cIlxuICAgICAgICAobW91c2VlbnRlcik9XCJzZWxlY3RBY3RpdmUobWF0Y2gpXCJcbiAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cInByZXNlbGVjdGVkKG1hdGNoKVwiXG4gICAgICA+XG4gICAgICA8L2VudGl0eS1waWNrZXItcmVzdWx0PlxuICAgICAgPG5vdm8tbG9hZGluZyB0aGVtZT1cImxpbmVcIiAqbmdJZj1cImlzTG9hZGluZyAmJiBtYXRjaGVzLmxlbmd0aCA+IDBcIj48L25vdm8tbG9hZGluZz5cbiAgICA8L25vdm8tbGlzdD5cbiAgICA8cCBjbGFzcz1cInBpY2tlci1lcnJvclwiICpuZ0lmPVwiaGFzRXJyb3JcIj57eyBsYWJlbHMucGlja2VyRXJyb3IgfX08L3A+XG4gICAgPHAgY2xhc3M9XCJwaWNrZXItbnVsbC1yZXN1bHRzXCIgKm5nSWY9XCJoYXNOb25FcnJvck1lc3NhZ2UgJiYgdGVybSAhPT0gJydcIj57eyBsYWJlbHMucGlja2VyRW1wdHkgfX08L3A+XG4gICAgPHAgY2xhc3M9XCJwaWNrZXItbnVsbC1yZXN1bHRzXCIgKm5nSWY9XCJoYXNOb25FcnJvck1lc3NhZ2UgJiYgdGVybSA9PT0gJydcIj57eyBsYWJlbHMucGlja2VyVGV4dEZpZWxkRW1wdHkgfX08L3A+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eVBpY2tlclJlc3VsdHMgZXh0ZW5kcyBCYXNlUGlja2VyUmVzdWx0cyB7XG4gIEBPdXRwdXQoKVxuICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgcmVmKTtcbiAgfVxuXG4gIGdldCBoYXNOb25FcnJvck1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzTG9hZGluZyAmJiAhdGhpcy5tYXRjaGVzLmxlbmd0aCAmJiAhdGhpcy5oYXNFcnJvcjtcbiAgfVxuXG4gIGdldExpc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLWxpc3QnKTtcbiAgfVxuXG4gIHNlbGVjdE1hdGNoKGV2ZW50PzogYW55LCBpdGVtPzogYW55KSB7XG4gICAgdGhpcy5zZWxlY3QubmV4dChpdGVtKTtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0TWF0Y2goZXZlbnQsIGl0ZW0pO1xuICB9XG59XG4iXX0=