/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, ElementRef, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
// Vendor
// APP
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import { NovoLabelService } from '../../../../services/novo-label-service';
var EntityPickerResult = /** @class */ (function () {
    function EntityPickerResult(labels) {
        this.labels = labels;
    }
    /**
     * @name escapeRegexp
     * @param queryToEscape
     *
     * @description This function captures the whole query string and replace it with the string that will be used to
     * match.
     */
    /**
     * \@name escapeRegexp
     * \@description This function captures the whole query string and replace it with the string that will be used to
     * match.
     * @param {?} queryToEscape
     *
     * @return {?}
     */
    EntityPickerResult.prototype.escapeRegexp = /**
     * \@name escapeRegexp
     * \@description This function captures the whole query string and replace it with the string that will be used to
     * match.
     * @param {?} queryToEscape
     *
     * @return {?}
     */
    function (queryToEscape) {
        // Ex: if the capture is "a" the result will be \a
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    };
    /**
     * @name highlight
     * @param match
     * @param query
     *
     * @description This function should return a <strong>-tag wrapped HTML string.
     */
    /**
     * \@name highlight
     * \@description This function should return a <strong>-tag wrapped HTML string.
     * @param {?} match
     * @param {?} query
     *
     * @return {?}
     */
    EntityPickerResult.prototype.highlight = /**
     * \@name highlight
     * \@description This function should return a <strong>-tag wrapped HTML string.
     * @param {?} match
     * @param {?} query
     *
     * @return {?}
     */
    function (match, query) {
        // Replaces the capture string with a the same string inside of a "strong" tag
        return query && match ? match.replace(new RegExp(this.escapeRegexp(query.trim()), 'gi'), '<strong>$&</strong>') : match;
    };
    /**
     * @param {?=} result
     * @return {?}
     */
    EntityPickerResult.prototype.getIconForResult = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
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
    /**
     * @param {?=} date
     * @return {?}
     */
    EntityPickerResult.prototype.renderTimestamp = /**
     * @param {?=} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var timestamp = '';
        if (date) {
            timestamp = this.labels.formatDateWithFormat(date, { year: 'numeric', month: 'numeric', day: 'numeric' });
        }
        return timestamp;
    };
    /**
     * @param {?=} result
     * @return {?}
     */
    EntityPickerResult.prototype.getNameForResult = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
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
                    /** @type {?} */
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
    EntityPickerResult.decorators = [
        { type: Component, args: [{
                    selector: 'entity-picker-result',
                    template: "\n    <novo-list-item *ngIf=\"match.data\">\n      <item-header>\n        <item-avatar [icon]=\"getIconForResult(match.data)\"></item-avatar>\n        <item-title> <span [innerHtml]=\"highlight(getNameForResult(match.data), term)\"></span> </item-title>\n      </item-header>\n      <item-content direction=\"horizontal\">\n        <!-- COMPANY 1 -->\n        <p class=\"company\" *ngIf=\"match.data.companyName || match.data?.clientCorporation?.name\">\n          <i class=\"bhi-company\"></i>\n          <span [innerHtml]=\"highlight(match.data.companyName || match.data?.clientCorporation?.name, term)\"></span>\n        </p>\n        <!-- CLIENT CONTACT -->\n        <p class=\"contact\" *ngIf=\"match.data?.clientContact?.firstName\">\n          <i class=\"bhi-person contact person\"></i>\n          <span [innerHtml]=\"highlight(match.data.clientContact.firstName + ' ' + match.data.clientContact.lastName, term)\"></span>\n        </p>\n        <!-- CANDIDATE -->\n        <p class=\"candidate\" *ngIf=\"match.data.candidate && match.data.searchEntity === 'Placement'\">\n          <i class=\"bhi-candidate\"></i>\n          <span [innerHtml]=\"highlight(match.data.candidate.firstName + ' ' + match.data.candidate.lastName, term)\"></span>\n        </p>\n        <!-- START & END DATE -->\n        <p class=\"start-date\" *ngIf=\"match.data.dateBegin && match.data.searchEntity === 'Placement'\">\n          <i class=\"bhi-calendar\"></i>\n          <span [innerHtml]=\"renderTimestamp(match.data.dateBegin) + ' - ' + renderTimestamp(match.data.dateEnd)\"></span>\n        </p>\n        <!-- EMAIL -->\n        <p class=\"email\" *ngIf=\"match.data.email\">\n          <i class=\"bhi-email\"></i> <span [innerHtml]=\"highlight(match.data.email, term)\"></span>\n        </p>\n        <!-- PHONE -->\n        <p class=\"phone\" *ngIf=\"match.data.phone\">\n          <i class=\"bhi-phone\"></i> <span [innerHtml]=\"highlight(match.data.phone, term)\"></span>\n        </p>\n        <!-- ADDRESS -->\n        <p class=\"location\" *ngIf=\"match.data.address && (match.data.address.city || match.data.address.state)\">\n          <i class=\"bhi-location\"></i> <span *ngIf=\"match.data.address.city\" [innerHtml]=\"highlight(match.data.address.city, term)\"></span>\n          <span *ngIf=\"match.data.address.city && match.data.address.state\">, </span>\n          <span *ngIf=\"match.data.address.state\" [innerHtml]=\"highlight(match.data.address.state, term)\"></span>\n        </p>\n        <!-- STATUS -->\n        <p class=\"status\" *ngIf=\"match.data.status\">\n          <i class=\"bhi-info\"></i> <span [innerHtml]=\"highlight(match.data.status, term)\"></span>\n        </p>\n        <!-- OWNER -->\n        <p class=\"owner\" *ngIf=\"match.data.owner && match.data.owner.name && match.data.searchEntity === 'Candidate'\">\n          <i class=\"bhi-person\"></i> <span [innerHtml]=\"highlight(match.data.owner.name, term)\"></span>\n        </p>\n        <!-- PRIMARY DEPARTMENT -->\n        <p\n          class=\"primary-department\"\n          *ngIf=\"match.data.primaryDepartment && match.data.primaryDepartment.name && match.data.searchEntity === 'CorporateUser'\"\n        >\n          <i class=\"bhi-department\"></i> <span [innerHtml]=\"highlight(match.data.primaryDepartment.name, term)\"></span>\n        </p>\n        <!-- OCCUPATION -->\n        <p class=\"occupation\" *ngIf=\"match.data.occupation && match.data.searchEntity === 'CorporateUser'\">\n          <i class=\"bhi-occupation\"></i> <span [innerHtml]=\"highlight(match.data.occupation, term)\"></span>\n        </p>\n      </item-content>\n    </novo-list-item>\n  "
                }] }
    ];
    /** @nocollapse */
    EntityPickerResult.ctorParameters = function () { return [
        { type: NovoLabelService }
    ]; };
    EntityPickerResult.propDecorators = {
        match: [{ type: Input }],
        term: [{ type: Input }]
    };
    return EntityPickerResult;
}());
export { EntityPickerResult };
if (false) {
    /** @type {?} */
    EntityPickerResult.prototype.match;
    /** @type {?} */
    EntityPickerResult.prototype.term;
    /** @type {?} */
    EntityPickerResult.prototype.labels;
}
var EntityPickerResults = /** @class */ (function (_super) {
    tslib_1.__extends(EntityPickerResults, _super);
    function EntityPickerResults(element, labels, ref) {
        var _this = _super.call(this, element, ref) || this;
        _this.labels = labels;
        _this.select = new EventEmitter();
        return _this;
    }
    Object.defineProperty(EntityPickerResults.prototype, "hasNonErrorMessage", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.isLoading && !this.matches.length && !this.hasError;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    EntityPickerResults.prototype.getListElement = /**
     * @return {?}
     */
    function () {
        return this.element.nativeElement.querySelector('novo-list');
    };
    /**
     * @param {?=} event
     * @param {?=} item
     * @return {?}
     */
    EntityPickerResults.prototype.selectMatch = /**
     * @param {?=} event
     * @param {?=} item
     * @return {?}
     */
    function (event, item) {
        this.select.next(item);
        return _super.prototype.selectMatch.call(this, event, item);
    };
    EntityPickerResults.decorators = [
        { type: Component, args: [{
                    selector: 'entity-picker-results',
                    template: "\n    <novo-list *ngIf=\"matches.length > 0\" direction=\"vertical\">\n      <entity-picker-result\n        *ngFor=\"let match of matches\"\n        [match]=\"match\"\n        [term]=\"term\"\n        (click)=\"selectMatch($event, match)\"\n        [ngClass]=\"{ active: isActive(match) }\"\n        (mouseenter)=\"selectActive(match)\"\n        [class.disabled]=\"preselected(match)\"\n      >\n      </entity-picker-result>\n      <novo-loading theme=\"line\" *ngIf=\"isLoading && matches.length > 0\"></novo-loading>\n    </novo-list>\n    <p class=\"picker-error\" *ngIf=\"hasError\">{{ labels.pickerError }}</p>\n    <p class=\"picker-null-results\" *ngIf=\"hasNonErrorMessage && term !== ''\">{{ labels.pickerEmpty }}</p>\n    <p class=\"picker-null-results\" *ngIf=\"hasNonErrorMessage && term === ''\">{{ labels.pickerTextFieldEmpty }}</p>\n  "
                }] }
    ];
    /** @nocollapse */
    EntityPickerResults.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NovoLabelService },
        { type: ChangeDetectorRef }
    ]; };
    EntityPickerResults.propDecorators = {
        select: [{ type: Output }]
    };
    return EntityPickerResults;
}(BasePickerResults));
export { EntityPickerResults };
if (false) {
    /** @type {?} */
    EntityPickerResults.prototype.select;
    /** @type {?} */
    EntityPickerResults.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5UGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL2VudGl0eS1waWNrZXItcmVzdWx0cy9FbnRpdHlQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFHdEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFM0U7SUF3RUUsNEJBQW1CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQztJQUUvQzs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNILHlDQUFZOzs7Ozs7OztJQUFaLFVBQWEsYUFBYTtRQUN4QixrREFBa0Q7UUFDbEQsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNILHNDQUFTOzs7Ozs7OztJQUFULFVBQVUsS0FBSyxFQUFFLEtBQUs7UUFDcEIsOEVBQThFO1FBQzlFLE9BQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMxSCxDQUFDOzs7OztJQUVELDZDQUFnQjs7OztJQUFoQixVQUFpQixNQUFZO1FBQzNCLElBQUksTUFBTSxFQUFF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QUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8saUJBQU0sV0FBVyxZQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOztnQkF2Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSxxMUJBaUJUO2lCQUNGOzs7O2dCQXJNbUIsVUFBVTtnQkFJckIsZ0JBQWdCO2dCQUpvQyxpQkFBaUI7Ozt5QkF1TTNFLE1BQU07O0lBa0JULDBCQUFDO0NBQUEsQUF4Q0QsQ0FxQnlDLGlCQUFpQixHQW1CekQ7U0FuQlksbUJBQW1COzs7SUFDOUIscUNBQytDOztJQUNkLHFDQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBWZW5kb3Jcbi8vIEFQUFxuaW1wb3J0IHsgQmFzZVBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbnRpdHktcGlja2VyLXJlc3VsdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5vdm8tbGlzdC1pdGVtICpuZ0lmPVwibWF0Y2guZGF0YVwiPlxuICAgICAgPGl0ZW0taGVhZGVyPlxuICAgICAgICA8aXRlbS1hdmF0YXIgW2ljb25dPVwiZ2V0SWNvbkZvclJlc3VsdChtYXRjaC5kYXRhKVwiPjwvaXRlbS1hdmF0YXI+XG4gICAgICAgIDxpdGVtLXRpdGxlPiA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChnZXROYW1lRm9yUmVzdWx0KG1hdGNoLmRhdGEpLCB0ZXJtKVwiPjwvc3Bhbj4gPC9pdGVtLXRpdGxlPlxuICAgICAgPC9pdGVtLWhlYWRlcj5cbiAgICAgIDxpdGVtLWNvbnRlbnQgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICA8IS0tIENPTVBBTlkgMSAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJjb21wYW55XCIgKm5nSWY9XCJtYXRjaC5kYXRhLmNvbXBhbnlOYW1lIHx8IG1hdGNoLmRhdGE/LmNsaWVudENvcnBvcmF0aW9uPy5uYW1lXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktY29tcGFueVwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmNvbXBhbnlOYW1lIHx8IG1hdGNoLmRhdGE/LmNsaWVudENvcnBvcmF0aW9uPy5uYW1lLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIENMSUVOVCBDT05UQUNUIC0tPlxuICAgICAgICA8cCBjbGFzcz1cImNvbnRhY3RcIiAqbmdJZj1cIm1hdGNoLmRhdGE/LmNsaWVudENvbnRhY3Q/LmZpcnN0TmFtZVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXBlcnNvbiBjb250YWN0IHBlcnNvblwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmNsaWVudENvbnRhY3QuZmlyc3ROYW1lICsgJyAnICsgbWF0Y2guZGF0YS5jbGllbnRDb250YWN0Lmxhc3ROYW1lLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIENBTkRJREFURSAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJjYW5kaWRhdGVcIiAqbmdJZj1cIm1hdGNoLmRhdGEuY2FuZGlkYXRlICYmIG1hdGNoLmRhdGEuc2VhcmNoRW50aXR5ID09PSAnUGxhY2VtZW50J1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNhbmRpZGF0ZVwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmNhbmRpZGF0ZS5maXJzdE5hbWUgKyAnICcgKyBtYXRjaC5kYXRhLmNhbmRpZGF0ZS5sYXN0TmFtZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBTVEFSVCAmIEVORCBEQVRFIC0tPlxuICAgICAgICA8cCBjbGFzcz1cInN0YXJ0LWRhdGVcIiAqbmdJZj1cIm1hdGNoLmRhdGEuZGF0ZUJlZ2luICYmIG1hdGNoLmRhdGEuc2VhcmNoRW50aXR5ID09PSAnUGxhY2VtZW50J1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwicmVuZGVyVGltZXN0YW1wKG1hdGNoLmRhdGEuZGF0ZUJlZ2luKSArICcgLSAnICsgcmVuZGVyVGltZXN0YW1wKG1hdGNoLmRhdGEuZGF0ZUVuZClcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBFTUFJTCAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJlbWFpbFwiICpuZ0lmPVwibWF0Y2guZGF0YS5lbWFpbFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWVtYWlsXCI+PC9pPiA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmVtYWlsLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIFBIT05FIC0tPlxuICAgICAgICA8cCBjbGFzcz1cInBob25lXCIgKm5nSWY9XCJtYXRjaC5kYXRhLnBob25lXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktcGhvbmVcIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEucGhvbmUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDwhLS0gQUREUkVTUyAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJsb2NhdGlvblwiICpuZ0lmPVwibWF0Y2guZGF0YS5hZGRyZXNzICYmIChtYXRjaC5kYXRhLmFkZHJlc3MuY2l0eSB8fCBtYXRjaC5kYXRhLmFkZHJlc3Muc3RhdGUpXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktbG9jYXRpb25cIj48L2k+IDxzcGFuICpuZ0lmPVwibWF0Y2guZGF0YS5hZGRyZXNzLmNpdHlcIiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmFkZHJlc3MuY2l0eSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJtYXRjaC5kYXRhLmFkZHJlc3MuY2l0eSAmJiBtYXRjaC5kYXRhLmFkZHJlc3Muc3RhdGVcIj4sIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIm1hdGNoLmRhdGEuYWRkcmVzcy5zdGF0ZVwiIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuYWRkcmVzcy5zdGF0ZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBTVEFUVVMgLS0+XG4gICAgICAgIDxwIGNsYXNzPVwic3RhdHVzXCIgKm5nSWY9XCJtYXRjaC5kYXRhLnN0YXR1c1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWluZm9cIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuc3RhdHVzLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIE9XTkVSIC0tPlxuICAgICAgICA8cCBjbGFzcz1cIm93bmVyXCIgKm5nSWY9XCJtYXRjaC5kYXRhLm93bmVyICYmIG1hdGNoLmRhdGEub3duZXIubmFtZSAmJiBtYXRjaC5kYXRhLnNlYXJjaEVudGl0eSA9PT0gJ0NhbmRpZGF0ZSdcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1wZXJzb25cIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEub3duZXIubmFtZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBQUklNQVJZIERFUEFSVE1FTlQgLS0+XG4gICAgICAgIDxwXG4gICAgICAgICAgY2xhc3M9XCJwcmltYXJ5LWRlcGFydG1lbnRcIlxuICAgICAgICAgICpuZ0lmPVwibWF0Y2guZGF0YS5wcmltYXJ5RGVwYXJ0bWVudCAmJiBtYXRjaC5kYXRhLnByaW1hcnlEZXBhcnRtZW50Lm5hbWUgJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdDb3Jwb3JhdGVVc2VyJ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1kZXBhcnRtZW50XCI+PC9pPiA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLnByaW1hcnlEZXBhcnRtZW50Lm5hbWUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDwhLS0gT0NDVVBBVElPTiAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJvY2N1cGF0aW9uXCIgKm5nSWY9XCJtYXRjaC5kYXRhLm9jY3VwYXRpb24gJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdDb3Jwb3JhdGVVc2VyJ1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLW9jY3VwYXRpb25cIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEub2NjdXBhdGlvbiwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgIDwvbm92by1saXN0LWl0ZW0+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eVBpY2tlclJlc3VsdCB7XG4gIEBJbnB1dCgpXG4gIG1hdGNoOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHRlcm06IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBAbmFtZSBlc2NhcGVSZWdleHBcbiAgICogQHBhcmFtIHF1ZXJ5VG9Fc2NhcGVcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gY2FwdHVyZXMgdGhlIHdob2xlIHF1ZXJ5IHN0cmluZyBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBzdHJpbmcgdGhhdCB3aWxsIGJlIHVzZWQgdG9cbiAgICogbWF0Y2guXG4gICAqL1xuICBlc2NhcGVSZWdleHAocXVlcnlUb0VzY2FwZSkge1xuICAgIC8vIEV4OiBpZiB0aGUgY2FwdHVyZSBpcyBcImFcIiB0aGUgcmVzdWx0IHdpbGwgYmUgXFxhXG4gICAgcmV0dXJuIHF1ZXJ5VG9Fc2NhcGUucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2csICdcXFxcJDEnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBoaWdobGlnaHRcbiAgICogQHBhcmFtIG1hdGNoXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgPHN0cm9uZz4tdGFnIHdyYXBwZWQgSFRNTCBzdHJpbmcuXG4gICAqL1xuICBoaWdobGlnaHQobWF0Y2gsIHF1ZXJ5KSB7XG4gICAgLy8gUmVwbGFjZXMgdGhlIGNhcHR1cmUgc3RyaW5nIHdpdGggYSB0aGUgc2FtZSBzdHJpbmcgaW5zaWRlIG9mIGEgXCJzdHJvbmdcIiB0YWdcbiAgICByZXR1cm4gcXVlcnkgJiYgbWF0Y2ggPyBtYXRjaC5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5lc2NhcGVSZWdleHAocXVlcnkudHJpbSgpKSwgJ2dpJyksICc8c3Ryb25nPiQmPC9zdHJvbmc+JykgOiBtYXRjaDtcbiAgfVxuXG4gIGdldEljb25Gb3JSZXN1bHQocmVzdWx0PzogYW55KTogc3RyaW5nIHtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBzd2l0Y2ggKHJlc3VsdC5zZWFyY2hFbnRpdHkpIHtcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdCc6XG4gICAgICAgICAgcmV0dXJuICdwZXJzb24gY29udGFjdCc7XG4gICAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uJzpcbiAgICAgICAgICByZXR1cm4gJ2NvbXBhbnknO1xuICAgICAgICBjYXNlICdPcHBvcnR1bml0eSc6XG4gICAgICAgICAgcmV0dXJuICdvcHBvcnR1bml0eSc7XG4gICAgICAgIGNhc2UgJ0NhbmRpZGF0ZSc6XG4gICAgICAgICAgcmV0dXJuICdjYW5kaWRhdGUnO1xuICAgICAgICBjYXNlICdMZWFkJzpcbiAgICAgICAgICByZXR1cm4gJ2xlYWQnO1xuICAgICAgICBjYXNlICdKb2JPcmRlcic6XG4gICAgICAgICAgcmV0dXJuICdqb2InO1xuICAgICAgICBjYXNlICdQbGFjZW1lbnQnOlxuICAgICAgICAgIHJldHVybiAnc3RhciBwbGFjZW1lbnQnO1xuICAgICAgICBjYXNlICdDb3Jwb3JhdGVVc2VyJzpcbiAgICAgICAgICByZXR1cm4gJ3VzZXInO1xuICAgICAgICBjYXNlICdDb3Jwb3JhdGlvbkRlcGFydG1lbnQnOlxuICAgICAgICAgIHJldHVybiAnZGVwYXJ0bWVudCc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZW5kZXJUaW1lc3RhbXAoZGF0ZT86IGFueSkge1xuICAgIGxldCB0aW1lc3RhbXAgPSAnJztcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgdGltZXN0YW1wID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQoZGF0ZSwgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbnVtZXJpYycsIGRheTogJ251bWVyaWMnIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGltZXN0YW1wO1xuICB9XG5cbiAgZ2V0TmFtZUZvclJlc3VsdChyZXN1bHQ/OiBhbnkpIHtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBzd2l0Y2ggKHJlc3VsdC5zZWFyY2hFbnRpdHkpIHtcbiAgICAgICAgY2FzZSAnTGVhZCc6XG4gICAgICAgIGNhc2UgJ0NvcnBvcmF0ZVVzZXInOlxuICAgICAgICBjYXNlICdDbGllbnRDb250YWN0JzpcbiAgICAgICAgY2FzZSAnQ2FuZGlkYXRlJzpcbiAgICAgICAgY2FzZSAnUGVyc29uJzpcbiAgICAgICAgICBpZiAoJ2ZpcnN0TmFtZScgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7cmVzdWx0LmZpcnN0TmFtZX0gJHtyZXN1bHQubGFzdE5hbWV9YC50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQubmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24nOlxuICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQubmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgICAgY2FzZSAnT3Bwb3J0dW5pdHknOlxuICAgICAgICBjYXNlICdKb2JPcmRlcic6XG4gICAgICAgICAgcmV0dXJuIGAke3Jlc3VsdC5pZH0gfCAke3Jlc3VsdC50aXRsZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgICAgY2FzZSAnUGxhY2VtZW50JzpcbiAgICAgICAgICBsZXQgbGFiZWwgPSBgJHtyZXN1bHQuaWR9YDtcbiAgICAgICAgICBpZiAocmVzdWx0LmNhbmRpZGF0ZSB8fCByZXN1bHQuam9iT3JkZXIpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY2FuZGlkYXRlICYmIHJlc3VsdC5qb2JPcmRlcikge1xuICAgICAgICAgICAgICBsYWJlbCA9IGAke2xhYmVsfSB8ICR7cmVzdWx0LmNhbmRpZGF0ZS5maXJzdE5hbWV9ICR7cmVzdWx0LmNhbmRpZGF0ZS5sYXN0TmFtZX0gLSAke3Jlc3VsdC5qb2JPcmRlci50aXRsZX1gLnRyaW0oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmpvYk9yZGVyKSB7XG4gICAgICAgICAgICAgIGxhYmVsID0gYCR7bGFiZWx9IHwgJHtyZXN1bHQuam9iT3JkZXIudGl0bGV9YC50cmltKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsYWJlbCA9IGAke2xhYmVsfSB8ICR7cmVzdWx0LmNhbmRpZGF0ZS5maXJzdE5hbWV9ICR7cmVzdWx0LmNhbmRpZGF0ZS5sYXN0TmFtZX1gLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQubmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VudGl0eS1waWNrZXItcmVzdWx0cycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5vdm8tbGlzdCAqbmdJZj1cIm1hdGNoZXMubGVuZ3RoID4gMFwiIGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICA8ZW50aXR5LXBpY2tlci1yZXN1bHRcbiAgICAgICAgKm5nRm9yPVwibGV0IG1hdGNoIG9mIG1hdGNoZXNcIlxuICAgICAgICBbbWF0Y2hdPVwibWF0Y2hcIlxuICAgICAgICBbdGVybV09XCJ0ZXJtXCJcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdE1hdGNoKCRldmVudCwgbWF0Y2gpXCJcbiAgICAgICAgW25nQ2xhc3NdPVwieyBhY3RpdmU6IGlzQWN0aXZlKG1hdGNoKSB9XCJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwic2VsZWN0QWN0aXZlKG1hdGNoKVwiXG4gICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJwcmVzZWxlY3RlZChtYXRjaClcIlxuICAgICAgPlxuICAgICAgPC9lbnRpdHktcGlja2VyLXJlc3VsdD5cbiAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgbWF0Y2hlcy5sZW5ndGggPiAwXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgPC9ub3ZvLWxpc3Q+XG4gICAgPHAgY2xhc3M9XCJwaWNrZXItZXJyb3JcIiAqbmdJZj1cImhhc0Vycm9yXCI+e3sgbGFiZWxzLnBpY2tlckVycm9yIH19PC9wPlxuICAgIDxwIGNsYXNzPVwicGlja2VyLW51bGwtcmVzdWx0c1wiICpuZ0lmPVwiaGFzTm9uRXJyb3JNZXNzYWdlICYmIHRlcm0gIT09ICcnXCI+e3sgbGFiZWxzLnBpY2tlckVtcHR5IH19PC9wPlxuICAgIDxwIGNsYXNzPVwicGlja2VyLW51bGwtcmVzdWx0c1wiICpuZ0lmPVwiaGFzTm9uRXJyb3JNZXNzYWdlICYmIHRlcm0gPT09ICcnXCI+e3sgbGFiZWxzLnBpY2tlclRleHRGaWVsZEVtcHR5IH19PC9wPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlQaWNrZXJSZXN1bHRzIGV4dGVuZHMgQmFzZVBpY2tlclJlc3VsdHMge1xuICBAT3V0cHV0KClcbiAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1lbnQsIHJlZik7XG4gIH1cblxuICBnZXQgaGFzTm9uRXJyb3JNZXNzYWdlKCkge1xuICAgIHJldHVybiAhdGhpcy5pc0xvYWRpbmcgJiYgIXRoaXMubWF0Y2hlcy5sZW5ndGggJiYgIXRoaXMuaGFzRXJyb3I7XG4gIH1cblxuICBnZXRMaXN0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignbm92by1saXN0Jyk7XG4gIH1cblxuICBzZWxlY3RNYXRjaChldmVudD86IGFueSwgaXRlbT86IGFueSkge1xuICAgIHRoaXMuc2VsZWN0Lm5leHQoaXRlbSk7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdE1hdGNoKGV2ZW50LCBpdGVtKTtcbiAgfVxufVxuIl19