/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                    return ("" + (result.title || '')).trim();
                case 'Placement':
                    /** @type {?} */
                    var label = '';
                    if (result.candidate) {
                        label = (result.candidate.firstName + " " + result.candidate.lastName).trim();
                    }
                    if (result.jobOrder) {
                        label = (label + " - " + result.jobOrder.title).trim();
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
                    template: "\n        <novo-list-item *ngIf=\"match.data\">\n            <item-header>\n                <item-avatar [icon]=\"getIconForResult(match.data)\"></item-avatar>\n                <item-title>\n                    <span [innerHtml]=\"highlight(getNameForResult(match.data), term)\"></span>\n                </item-title>\n            </item-header>\n            <item-content direction=\"horizontal\">\n                <!-- COMPANY 1 -->\n                <p class=\"company\" *ngIf=\"match.data.companyName || match.data?.clientCorporation?.name\">\n                    <i class=\"bhi-company\"></i>\n                    <span [innerHtml]=\"highlight(match.data.companyName || match.data?.clientCorporation?.name, term)\"></span>\n                </p>\n                <!-- CLIENT CONTACT -->\n                <p class=\"contact\" *ngIf=\"match.data?.clientContact?.firstName\">\n                    <i class=\"bhi-person contact person\"></i>\n                    <span [innerHtml]=\"highlight(match.data.clientContact.firstName + ' ' + match.data.clientContact.lastName, term)\"></span>\n                </p>\n                <!-- CANDIDATE -->\n                <p class=\"candidate\" *ngIf=\"match.data.candidate && match.data.searchEntity === 'Placement'\">\n                    <i class=\"bhi-candidate\"></i>\n                    <span [innerHtml]=\"highlight((match.data.candidate.firstName + ' ' + match.data.candidate.lastName), term)\"></span>\n                </p>\n                <!-- START & END DATE -->\n                <p class=\"start-date\" *ngIf=\"match.data.dateBegin && match.data.searchEntity === 'Placement'\">\n                    <i class=\"bhi-calendar\"></i>\n                    <span [innerHtml]=\"renderTimestamp(match.data.dateBegin) + ' - ' + renderTimestamp(match.data.dateEnd)\"></span>\n                </p>\n                <!-- EMAIL -->\n                <p class=\"email\" *ngIf=\"match.data.email\">\n                    <i class=\"bhi-email\"></i>\n                    <span [innerHtml]=\"highlight(match.data.email, term)\"></span>\n                </p>\n                <!-- PHONE -->\n                <p class=\"phone\" *ngIf=\"match.data.phone\">\n                    <i class=\"bhi-phone\"></i>\n                    <span [innerHtml]=\"highlight(match.data.phone, term)\"></span>\n                </p>\n                <!-- ADDRESS -->\n                <p class=\"location\" *ngIf=\"match.data.address && (match.data.address.city || match.data.address.state)\">\n                    <i class=\"bhi-location\"></i>\n                    <span *ngIf=\"match.data.address.city\" [innerHtml]=\"highlight(match.data.address.city, term)\"></span>\n                    <span *ngIf=\"match.data.address.city && match.data.address.state\">, </span>\n                    <span *ngIf=\"match.data.address.state\" [innerHtml]=\"highlight(match.data.address.state, term)\"></span>\n                </p>\n                <!-- STATUS -->\n                <p class=\"status\" *ngIf=\"match.data.status\">\n                    <i class=\"bhi-info\"></i>\n                    <span [innerHtml]=\"highlight(match.data.status, term)\"></span>\n                </p>\n                <!-- OWNER -->\n                <p class=\"owner\" *ngIf=\"match.data.owner && match.data.owner.name && match.data.searchEntity === 'Candidate'\">\n                    <i class=\"bhi-person\"></i>\n                    <span [innerHtml]=\"highlight(match.data.owner.name, term)\"></span>\n                </p>\n                <!-- PRIMARY DEPARTMENT -->\n                <p class=\"primary-department\" *ngIf=\"match.data.primaryDepartment && match.data.primaryDepartment.name && match.data.searchEntity === 'CorporateUser'\">\n                    <i class=\"bhi-department\"></i>\n                    <span [innerHtml]=\"highlight(match.data.primaryDepartment.name, term)\"></span>\n                </p>\n                <!-- OCCUPATION -->\n                <p class=\"occupation\" *ngIf=\"match.data.occupation && match.data.searchEntity === 'CorporateUser'\">\n                    <i class=\"bhi-occupation\"></i>\n                    <span [innerHtml]=\"highlight(match.data.occupation, term)\"></span>\n                </p>\n            </item-content>\n        </novo-list-item>\n    "
                }] }
    ];
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
                    template: "\n        <novo-list *ngIf=\"matches.length > 0\" direction=\"vertical\">\n            <entity-picker-result *ngFor=\"let match of matches\"\n                    [match]=\"match\"\n                    [term]=\"term\"\n                    (click)=\"selectMatch($event, match)\"\n                    [ngClass]=\"{active: isActive(match)}\"\n                    (mouseenter)=\"selectActive(match)\"\n                    [class.disabled]=\"preselected(match)\">\n            </entity-picker-result>\n            <novo-loading theme=\"line\" *ngIf=\"isLoading && matches.length > 0\"></novo-loading>\n        </novo-list>\n        <p class=\"picker-error\" *ngIf=\"hasError\">{{ labels.pickerError }}</p>\n        <p class=\"picker-null-results\" *ngIf=\"!isLoading && !matches.length && !hasError\">{{ labels.pickerEmpty }}</p>\n    "
                }] }
    ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5UGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL2VudGl0eS1waWNrZXItcmVzdWx0cy9FbnRpdHlQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFHdEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFM0U7SUE4RUUsNEJBQW1CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQztJQUUvQzs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNILHlDQUFZOzs7Ozs7OztJQUFaLFVBQWEsYUFBYTtRQUN4QixrREFBa0Q7UUFDbEQsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNILHNDQUFTOzs7Ozs7OztJQUFULFVBQVUsS0FBSyxFQUFFLEtBQUs7UUFDcEIsOEVBQThFO1FBQzlFLE9BQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMxSCxDQUFDOzs7OztJQUVELDZDQUFnQjs7OztJQUFoQixVQUFpQixNQUFZO1FBQzNCLElBQUksTUFBTSxFQUFF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RUwsS0FBSzs7SUErRlIseUJBQUM7Q0FBQSxBQTFLRCxJQTBLQztTQWxHWSxrQkFBa0I7OztJQUM3QixtQ0FDVzs7SUFDWCxrQ0FDVTs7SUFFRSxvQ0FBK0I7O0FBOEY3QztJQWtCeUMsK0NBQWlCO0lBR3hELDZCQUFZLE9BQW1CLEVBQVMsTUFBd0IsRUFBRSxHQUFzQjtRQUF4RixZQUNFLGtCQUFNLE9BQU8sRUFBRSxHQUFHLENBQUMsU0FDcEI7UUFGdUMsWUFBTSxHQUFOLE1BQU0sQ0FBa0I7UUFEaEUsWUFBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOztJQUcvQyxDQUFDOzs7O0lBRUQsNENBQWM7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7O0lBRUQseUNBQVc7Ozs7O0lBQVgsVUFBWSxLQUFXLEVBQUUsSUFBVTtRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixPQUFPLGlCQUFNLFdBQVcsWUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsK3pCQWNQO2lCQUNKOzs7Z0JBbk1tQixVQUFVO2dCQUlyQixnQkFBZ0I7Z0JBSm9DLGlCQUFpQjs7O3lCQXFNM0UsTUFBTTs7SUFjVCwwQkFBQztDQUFBLEFBakNELENBa0J5QyxpQkFBaUIsR0FlekQ7U0FmWSxtQkFBbUI7OztJQUM5QixxQ0FDK0M7O0lBQ2QscUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIFZlbmRvclxuLy8gQVBQXG5pbXBvcnQgeyBCYXNlUGlja2VyUmVzdWx0cyB9IGZyb20gJy4uL2Jhc2UtcGlja2VyLXJlc3VsdHMvQmFzZVBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VudGl0eS1waWNrZXItcmVzdWx0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5vdm8tbGlzdC1pdGVtICpuZ0lmPVwibWF0Y2guZGF0YVwiPlxuICAgICAgICAgICAgPGl0ZW0taGVhZGVyPlxuICAgICAgICAgICAgICAgIDxpdGVtLWF2YXRhciBbaWNvbl09XCJnZXRJY29uRm9yUmVzdWx0KG1hdGNoLmRhdGEpXCI+PC9pdGVtLWF2YXRhcj5cbiAgICAgICAgICAgICAgICA8aXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQoZ2V0TmFtZUZvclJlc3VsdChtYXRjaC5kYXRhKSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9pdGVtLXRpdGxlPlxuICAgICAgICAgICAgPC9pdGVtLWhlYWRlcj5cbiAgICAgICAgICAgIDxpdGVtLWNvbnRlbnQgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgIDwhLS0gQ09NUEFOWSAxIC0tPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29tcGFueVwiICpuZ0lmPVwibWF0Y2guZGF0YS5jb21wYW55TmFtZSB8fCBtYXRjaC5kYXRhPy5jbGllbnRDb3Jwb3JhdGlvbj8ubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jb21wYW55XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmNvbXBhbnlOYW1lIHx8IG1hdGNoLmRhdGE/LmNsaWVudENvcnBvcmF0aW9uPy5uYW1lLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPCEtLSBDTElFTlQgQ09OVEFDVCAtLT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRhY3RcIiAqbmdJZj1cIm1hdGNoLmRhdGE/LmNsaWVudENvbnRhY3Q/LmZpcnN0TmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1wZXJzb24gY29udGFjdCBwZXJzb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuY2xpZW50Q29udGFjdC5maXJzdE5hbWUgKyAnICcgKyBtYXRjaC5kYXRhLmNsaWVudENvbnRhY3QubGFzdE5hbWUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8IS0tIENBTkRJREFURSAtLT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhbmRpZGF0ZVwiICpuZ0lmPVwibWF0Y2guZGF0YS5jYW5kaWRhdGUgJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdQbGFjZW1lbnQnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNhbmRpZGF0ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQoKG1hdGNoLmRhdGEuY2FuZGlkYXRlLmZpcnN0TmFtZSArICcgJyArIG1hdGNoLmRhdGEuY2FuZGlkYXRlLmxhc3ROYW1lKSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwhLS0gU1RBUlQgJiBFTkQgREFURSAtLT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN0YXJ0LWRhdGVcIiAqbmdJZj1cIm1hdGNoLmRhdGEuZGF0ZUJlZ2luICYmIG1hdGNoLmRhdGEuc2VhcmNoRW50aXR5ID09PSAnUGxhY2VtZW50J1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jYWxlbmRhclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJyZW5kZXJUaW1lc3RhbXAobWF0Y2guZGF0YS5kYXRlQmVnaW4pICsgJyAtICcgKyByZW5kZXJUaW1lc3RhbXAobWF0Y2guZGF0YS5kYXRlRW5kKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPCEtLSBFTUFJTCAtLT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImVtYWlsXCIgKm5nSWY9XCJtYXRjaC5kYXRhLmVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWVtYWlsXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmVtYWlsLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPCEtLSBQSE9ORSAtLT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBob25lXCIgKm5nSWY9XCJtYXRjaC5kYXRhLnBob25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXBob25lXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLnBob25lLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPCEtLSBBRERSRVNTIC0tPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibG9jYXRpb25cIiAqbmdJZj1cIm1hdGNoLmRhdGEuYWRkcmVzcyAmJiAobWF0Y2guZGF0YS5hZGRyZXNzLmNpdHkgfHwgbWF0Y2guZGF0YS5hZGRyZXNzLnN0YXRlKVwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1sb2NhdGlvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJtYXRjaC5kYXRhLmFkZHJlc3MuY2l0eVwiIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuYWRkcmVzcy5jaXR5LCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJtYXRjaC5kYXRhLmFkZHJlc3MuY2l0eSAmJiBtYXRjaC5kYXRhLmFkZHJlc3Muc3RhdGVcIj4sIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJtYXRjaC5kYXRhLmFkZHJlc3Muc3RhdGVcIiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmFkZHJlc3Muc3RhdGUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8IS0tIFNUQVRVUyAtLT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN0YXR1c1wiICpuZ0lmPVwibWF0Y2guZGF0YS5zdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktaW5mb1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5zdGF0dXMsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8IS0tIE9XTkVSIC0tPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3duZXJcIiAqbmdJZj1cIm1hdGNoLmRhdGEub3duZXIgJiYgbWF0Y2guZGF0YS5vd25lci5uYW1lICYmIG1hdGNoLmRhdGEuc2VhcmNoRW50aXR5ID09PSAnQ2FuZGlkYXRlJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1wZXJzb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEub3duZXIubmFtZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwhLS0gUFJJTUFSWSBERVBBUlRNRU5UIC0tPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpbWFyeS1kZXBhcnRtZW50XCIgKm5nSWY9XCJtYXRjaC5kYXRhLnByaW1hcnlEZXBhcnRtZW50ICYmIG1hdGNoLmRhdGEucHJpbWFyeURlcGFydG1lbnQubmFtZSAmJiBtYXRjaC5kYXRhLnNlYXJjaEVudGl0eSA9PT0gJ0NvcnBvcmF0ZVVzZXInXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWRlcGFydG1lbnRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEucHJpbWFyeURlcGFydG1lbnQubmFtZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwhLS0gT0NDVVBBVElPTiAtLT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9jY3VwYXRpb25cIiAqbmdJZj1cIm1hdGNoLmRhdGEub2NjdXBhdGlvbiAmJiBtYXRjaC5kYXRhLnNlYXJjaEVudGl0eSA9PT0gJ0NvcnBvcmF0ZVVzZXInXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLW9jY3VwYXRpb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEub2NjdXBhdGlvbiwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRW50aXR5UGlja2VyUmVzdWx0IHtcbiAgQElucHV0KClcbiAgbWF0Y2g6IGFueTtcbiAgQElucHV0KClcbiAgdGVybTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGVzY2FwZVJlZ2V4cFxuICAgKiBAcGFyYW0gcXVlcnlUb0VzY2FwZVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBjYXB0dXJlcyB0aGUgd2hvbGUgcXVlcnkgc3RyaW5nIGFuZCByZXBsYWNlIGl0IHdpdGggdGhlIHN0cmluZyB0aGF0IHdpbGwgYmUgdXNlZCB0b1xuICAgKiBtYXRjaC5cbiAgICovXG4gIGVzY2FwZVJlZ2V4cChxdWVyeVRvRXNjYXBlKSB7XG4gICAgLy8gRXg6IGlmIHRoZSBjYXB0dXJlIGlzIFwiYVwiIHRoZSByZXN1bHQgd2lsbCBiZSBcXGFcbiAgICByZXR1cm4gcXVlcnlUb0VzY2FwZS5yZXBsYWNlKC8oWy4/KiteJFtcXF1cXFxcKCl7fXwtXSkvZywgJ1xcXFwkMScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGhpZ2hsaWdodFxuICAgKiBAcGFyYW0gbWF0Y2hcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYSA8c3Ryb25nPi10YWcgd3JhcHBlZCBIVE1MIHN0cmluZy5cbiAgICovXG4gIGhpZ2hsaWdodChtYXRjaCwgcXVlcnkpIHtcbiAgICAvLyBSZXBsYWNlcyB0aGUgY2FwdHVyZSBzdHJpbmcgd2l0aCBhIHRoZSBzYW1lIHN0cmluZyBpbnNpZGUgb2YgYSBcInN0cm9uZ1wiIHRhZ1xuICAgIHJldHVybiBxdWVyeSAmJiBtYXRjaCA/IG1hdGNoLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLmVzY2FwZVJlZ2V4cChxdWVyeS50cmltKCkpLCAnZ2knKSwgJzxzdHJvbmc+JCY8L3N0cm9uZz4nKSA6IG1hdGNoO1xuICB9XG5cbiAgZ2V0SWNvbkZvclJlc3VsdChyZXN1bHQ/OiBhbnkpOiBzdHJpbmcge1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHN3aXRjaCAocmVzdWx0LnNlYXJjaEVudGl0eSkge1xuICAgICAgICBjYXNlICdDbGllbnRDb250YWN0JzpcbiAgICAgICAgICByZXR1cm4gJ3BlcnNvbiBjb250YWN0JztcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24nOlxuICAgICAgICAgIHJldHVybiAnY29tcGFueSc7XG4gICAgICAgIGNhc2UgJ09wcG9ydHVuaXR5JzpcbiAgICAgICAgICByZXR1cm4gJ29wcG9ydHVuaXR5JztcbiAgICAgICAgY2FzZSAnQ2FuZGlkYXRlJzpcbiAgICAgICAgICByZXR1cm4gJ2NhbmRpZGF0ZSc7XG4gICAgICAgIGNhc2UgJ0xlYWQnOlxuICAgICAgICAgIHJldHVybiAnbGVhZCc7XG4gICAgICAgIGNhc2UgJ0pvYk9yZGVyJzpcbiAgICAgICAgICByZXR1cm4gJ2pvYic7XG4gICAgICAgIGNhc2UgJ1BsYWNlbWVudCc6XG4gICAgICAgICAgcmV0dXJuICdzdGFyIHBsYWNlbWVudCc7XG4gICAgICAgIGNhc2UgJ0NvcnBvcmF0ZVVzZXInOlxuICAgICAgICAgIHJldHVybiAndXNlcic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZW5kZXJUaW1lc3RhbXAoZGF0ZT86IGFueSkge1xuICAgIGxldCB0aW1lc3RhbXAgPSAnJztcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgdGltZXN0YW1wID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQoZGF0ZSwgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbnVtZXJpYycsIGRheTogJ251bWVyaWMnIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGltZXN0YW1wO1xuICB9XG5cbiAgZ2V0TmFtZUZvclJlc3VsdChyZXN1bHQ/OiBhbnkpIHtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBzd2l0Y2ggKHJlc3VsdC5zZWFyY2hFbnRpdHkpIHtcbiAgICAgICAgY2FzZSAnTGVhZCc6XG4gICAgICAgIGNhc2UgJ0NvcnBvcmF0ZVVzZXInOlxuICAgICAgICBjYXNlICdDbGllbnRDb250YWN0JzpcbiAgICAgICAgY2FzZSAnQ2FuZGlkYXRlJzpcbiAgICAgICAgY2FzZSAnUGVyc29uJzpcbiAgICAgICAgICBpZiAoJ2ZpcnN0TmFtZScgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7cmVzdWx0LmZpcnN0TmFtZX0gJHtyZXN1bHQubGFzdE5hbWV9YC50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQubmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24nOlxuICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQubmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgICAgY2FzZSAnT3Bwb3J0dW5pdHknOlxuICAgICAgICBjYXNlICdKb2JPcmRlcic6XG4gICAgICAgICAgcmV0dXJuIGAke3Jlc3VsdC50aXRsZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgICAgY2FzZSAnUGxhY2VtZW50JzpcbiAgICAgICAgICBsZXQgbGFiZWwgPSAnJztcbiAgICAgICAgICBpZiAocmVzdWx0LmNhbmRpZGF0ZSkge1xuICAgICAgICAgICAgbGFiZWwgPSBgJHtyZXN1bHQuY2FuZGlkYXRlLmZpcnN0TmFtZX0gJHtyZXN1bHQuY2FuZGlkYXRlLmxhc3ROYW1lfWAudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0LmpvYk9yZGVyKSB7XG4gICAgICAgICAgICBsYWJlbCA9IGAke2xhYmVsfSAtICR7cmVzdWx0LmpvYk9yZGVyLnRpdGxlfWAudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGAke3Jlc3VsdC5uYW1lIHx8ICcnfWAudHJpbSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW50aXR5LXBpY2tlci1yZXN1bHRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5vdm8tbGlzdCAqbmdJZj1cIm1hdGNoZXMubGVuZ3RoID4gMFwiIGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICA8ZW50aXR5LXBpY2tlci1yZXN1bHQgKm5nRm9yPVwibGV0IG1hdGNoIG9mIG1hdGNoZXNcIlxuICAgICAgICAgICAgICAgICAgICBbbWF0Y2hdPVwibWF0Y2hcIlxuICAgICAgICAgICAgICAgICAgICBbdGVybV09XCJ0ZXJtXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdE1hdGNoKCRldmVudCwgbWF0Y2gpXCJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie2FjdGl2ZTogaXNBY3RpdmUobWF0Y2gpfVwiXG4gICAgICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cInNlbGVjdEFjdGl2ZShtYXRjaClcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwicHJlc2VsZWN0ZWQobWF0Y2gpXCI+XG4gICAgICAgICAgICA8L2VudGl0eS1waWNrZXItcmVzdWx0PlxuICAgICAgICAgICAgPG5vdm8tbG9hZGluZyB0aGVtZT1cImxpbmVcIiAqbmdJZj1cImlzTG9hZGluZyAmJiBtYXRjaGVzLmxlbmd0aCA+IDBcIj48L25vdm8tbG9hZGluZz5cbiAgICAgICAgPC9ub3ZvLWxpc3Q+XG4gICAgICAgIDxwIGNsYXNzPVwicGlja2VyLWVycm9yXCIgKm5nSWY9XCJoYXNFcnJvclwiPnt7IGxhYmVscy5waWNrZXJFcnJvciB9fTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJwaWNrZXItbnVsbC1yZXN1bHRzXCIgKm5nSWY9XCIhaXNMb2FkaW5nICYmICFtYXRjaGVzLmxlbmd0aCAmJiAhaGFzRXJyb3JcIj57eyBsYWJlbHMucGlja2VyRW1wdHkgfX08L3A+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRW50aXR5UGlja2VyUmVzdWx0cyBleHRlbmRzIEJhc2VQaWNrZXJSZXN1bHRzIHtcbiAgQE91dHB1dCgpXG4gIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50LCByZWYpO1xuICB9XG5cbiAgZ2V0TGlzdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ25vdm8tbGlzdCcpO1xuICB9XG5cbiAgc2VsZWN0TWF0Y2goZXZlbnQ/OiBhbnksIGl0ZW0/OiBhbnkpIHtcbiAgICB0aGlzLnNlbGVjdC5uZXh0KGl0ZW0pO1xuICAgIHJldHVybiBzdXBlci5zZWxlY3RNYXRjaChldmVudCwgaXRlbSk7XG4gIH1cbn1cbiJdfQ==