/**
 * @fileoverview added by tsickle
 * Generated from: elements/picker/extras/entity-picker-results/EntityPickerResults.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5UGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL2VudGl0eS1waWNrZXItcmVzdWx0cy9FbnRpdHlQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBR3RHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTNFO0lBd0VFLDRCQUFtQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7SUFFL0M7Ozs7OztPQU1HOzs7Ozs7Ozs7SUFDSCx5Q0FBWTs7Ozs7Ozs7SUFBWixVQUFhLGFBQWE7UUFDeEIsa0RBQWtEO1FBQ2xELE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7Ozs7SUFDSCxzQ0FBUzs7Ozs7Ozs7SUFBVCxVQUFVLEtBQUssRUFBRSxLQUFLO1FBQ3BCLDhFQUE4RTtRQUM5RSxPQUFPLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDMUgsQ0FBQzs7Ozs7SUFFRCw2Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsTUFBWTtRQUMzQixJQUFJLE1BQU0sRUFB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Q0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixPQUFPLGlCQUFNLFdBQVcsWUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUscTFCQWlCVDtpQkFDRjs7OztnQkFyTW1CLFVBQVU7Z0JBSXJCLGdCQUFnQjtnQkFKb0MsaUJBQWlCOzs7eUJBdU0zRSxNQUFNOztJQWtCVCwwQkFBQztDQUFBLEFBeENELENBcUJ5QyxpQkFBaUIsR0FtQnpEO1NBbkJZLG1CQUFtQjs7O0lBQzlCLHFDQUMrQzs7SUFDZCxxQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gVmVuZG9yXG4vLyBBUFBcbmltcG9ydCB7IEJhc2VQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi4vYmFzZS1waWNrZXItcmVzdWx0cy9CYXNlUGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW50aXR5LXBpY2tlci1yZXN1bHQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxub3ZvLWxpc3QtaXRlbSAqbmdJZj1cIm1hdGNoLmRhdGFcIj5cbiAgICAgIDxpdGVtLWhlYWRlcj5cbiAgICAgICAgPGl0ZW0tYXZhdGFyIFtpY29uXT1cImdldEljb25Gb3JSZXN1bHQobWF0Y2guZGF0YSlcIj48L2l0ZW0tYXZhdGFyPlxuICAgICAgICA8aXRlbS10aXRsZT4gPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQoZ2V0TmFtZUZvclJlc3VsdChtYXRjaC5kYXRhKSwgdGVybSlcIj48L3NwYW4+IDwvaXRlbS10aXRsZT5cbiAgICAgIDwvaXRlbS1oZWFkZXI+XG4gICAgICA8aXRlbS1jb250ZW50IGRpcmVjdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgICAgPCEtLSBDT01QQU5ZIDEgLS0+XG4gICAgICAgIDxwIGNsYXNzPVwiY29tcGFueVwiICpuZ0lmPVwibWF0Y2guZGF0YS5jb21wYW55TmFtZSB8fCBtYXRjaC5kYXRhPy5jbGllbnRDb3Jwb3JhdGlvbj8ubmFtZVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNvbXBhbnlcIj48L2k+XG4gICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5jb21wYW55TmFtZSB8fCBtYXRjaC5kYXRhPy5jbGllbnRDb3Jwb3JhdGlvbj8ubmFtZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBDTElFTlQgQ09OVEFDVCAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJjb250YWN0XCIgKm5nSWY9XCJtYXRjaC5kYXRhPy5jbGllbnRDb250YWN0Py5maXJzdE5hbWVcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1wZXJzb24gY29udGFjdCBwZXJzb25cIj48L2k+XG4gICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5jbGllbnRDb250YWN0LmZpcnN0TmFtZSArICcgJyArIG1hdGNoLmRhdGEuY2xpZW50Q29udGFjdC5sYXN0TmFtZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBDQU5ESURBVEUgLS0+XG4gICAgICAgIDxwIGNsYXNzPVwiY2FuZGlkYXRlXCIgKm5nSWY9XCJtYXRjaC5kYXRhLmNhbmRpZGF0ZSAmJiBtYXRjaC5kYXRhLnNlYXJjaEVudGl0eSA9PT0gJ1BsYWNlbWVudCdcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jYW5kaWRhdGVcIj48L2k+XG4gICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5jYW5kaWRhdGUuZmlyc3ROYW1lICsgJyAnICsgbWF0Y2guZGF0YS5jYW5kaWRhdGUubGFzdE5hbWUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDwhLS0gU1RBUlQgJiBFTkQgREFURSAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJzdGFydC1kYXRlXCIgKm5nSWY9XCJtYXRjaC5kYXRhLmRhdGVCZWdpbiAmJiBtYXRjaC5kYXRhLnNlYXJjaEVudGl0eSA9PT0gJ1BsYWNlbWVudCdcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jYWxlbmRhclwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cInJlbmRlclRpbWVzdGFtcChtYXRjaC5kYXRhLmRhdGVCZWdpbikgKyAnIC0gJyArIHJlbmRlclRpbWVzdGFtcChtYXRjaC5kYXRhLmRhdGVFbmQpXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDwhLS0gRU1BSUwgLS0+XG4gICAgICAgIDxwIGNsYXNzPVwiZW1haWxcIiAqbmdJZj1cIm1hdGNoLmRhdGEuZW1haWxcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1lbWFpbFwiPjwvaT4gPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5lbWFpbCwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBQSE9ORSAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJwaG9uZVwiICpuZ0lmPVwibWF0Y2guZGF0YS5waG9uZVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXBob25lXCI+PC9pPiA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLnBob25lLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIEFERFJFU1MgLS0+XG4gICAgICAgIDxwIGNsYXNzPVwibG9jYXRpb25cIiAqbmdJZj1cIm1hdGNoLmRhdGEuYWRkcmVzcyAmJiAobWF0Y2guZGF0YS5hZGRyZXNzLmNpdHkgfHwgbWF0Y2guZGF0YS5hZGRyZXNzLnN0YXRlKVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWxvY2F0aW9uXCI+PC9pPiA8c3BhbiAqbmdJZj1cIm1hdGNoLmRhdGEuYWRkcmVzcy5jaXR5XCIgW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5hZGRyZXNzLmNpdHksIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwibWF0Y2guZGF0YS5hZGRyZXNzLmNpdHkgJiYgbWF0Y2guZGF0YS5hZGRyZXNzLnN0YXRlXCI+LCA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJtYXRjaC5kYXRhLmFkZHJlc3Muc3RhdGVcIiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmFkZHJlc3Muc3RhdGUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDwhLS0gU1RBVFVTIC0tPlxuICAgICAgICA8cCBjbGFzcz1cInN0YXR1c1wiICpuZ0lmPVwibWF0Y2guZGF0YS5zdGF0dXNcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1pbmZvXCI+PC9pPiA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLnN0YXR1cywgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBPV05FUiAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJvd25lclwiICpuZ0lmPVwibWF0Y2guZGF0YS5vd25lciAmJiBtYXRjaC5kYXRhLm93bmVyLm5hbWUgJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdDYW5kaWRhdGUnXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktcGVyc29uXCI+PC9pPiA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLm93bmVyLm5hbWUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDwhLS0gUFJJTUFSWSBERVBBUlRNRU5UIC0tPlxuICAgICAgICA8cFxuICAgICAgICAgIGNsYXNzPVwicHJpbWFyeS1kZXBhcnRtZW50XCJcbiAgICAgICAgICAqbmdJZj1cIm1hdGNoLmRhdGEucHJpbWFyeURlcGFydG1lbnQgJiYgbWF0Y2guZGF0YS5wcmltYXJ5RGVwYXJ0bWVudC5uYW1lICYmIG1hdGNoLmRhdGEuc2VhcmNoRW50aXR5ID09PSAnQ29ycG9yYXRlVXNlcidcIlxuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktZGVwYXJ0bWVudFwiPjwvaT4gPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5wcmltYXJ5RGVwYXJ0bWVudC5uYW1lLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIE9DQ1VQQVRJT04gLS0+XG4gICAgICAgIDxwIGNsYXNzPVwib2NjdXBhdGlvblwiICpuZ0lmPVwibWF0Y2guZGF0YS5vY2N1cGF0aW9uICYmIG1hdGNoLmRhdGEuc2VhcmNoRW50aXR5ID09PSAnQ29ycG9yYXRlVXNlcidcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1vY2N1cGF0aW9uXCI+PC9pPiA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLm9jY3VwYXRpb24sIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICA8L2l0ZW0tY29udGVudD5cbiAgICA8L25vdm8tbGlzdC1pdGVtPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlQaWNrZXJSZXN1bHQge1xuICBASW5wdXQoKVxuICBtYXRjaDogYW55O1xuICBASW5wdXQoKVxuICB0ZXJtOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cblxuICAvKipcbiAgICogQG5hbWUgZXNjYXBlUmVnZXhwXG4gICAqIEBwYXJhbSBxdWVyeVRvRXNjYXBlXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIGNhcHR1cmVzIHRoZSB3aG9sZSBxdWVyeSBzdHJpbmcgYW5kIHJlcGxhY2UgaXQgd2l0aCB0aGUgc3RyaW5nIHRoYXQgd2lsbCBiZSB1c2VkIHRvXG4gICAqIG1hdGNoLlxuICAgKi9cbiAgZXNjYXBlUmVnZXhwKHF1ZXJ5VG9Fc2NhcGUpIHtcbiAgICAvLyBFeDogaWYgdGhlIGNhcHR1cmUgaXMgXCJhXCIgdGhlIHJlc3VsdCB3aWxsIGJlIFxcYVxuICAgIHJldHVybiBxdWVyeVRvRXNjYXBlLnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9nLCAnXFxcXCQxJyk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaGlnaGxpZ2h0XG4gICAqIEBwYXJhbSBtYXRjaFxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gc2hvdWxkIHJldHVybiBhIDxzdHJvbmc+LXRhZyB3cmFwcGVkIEhUTUwgc3RyaW5nLlxuICAgKi9cbiAgaGlnaGxpZ2h0KG1hdGNoLCBxdWVyeSkge1xuICAgIC8vIFJlcGxhY2VzIHRoZSBjYXB0dXJlIHN0cmluZyB3aXRoIGEgdGhlIHNhbWUgc3RyaW5nIGluc2lkZSBvZiBhIFwic3Ryb25nXCIgdGFnXG4gICAgcmV0dXJuIHF1ZXJ5ICYmIG1hdGNoID8gbWF0Y2gucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMuZXNjYXBlUmVnZXhwKHF1ZXJ5LnRyaW0oKSksICdnaScpLCAnPHN0cm9uZz4kJjwvc3Ryb25nPicpIDogbWF0Y2g7XG4gIH1cblxuICBnZXRJY29uRm9yUmVzdWx0KHJlc3VsdD86IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgc3dpdGNoIChyZXN1bHQuc2VhcmNoRW50aXR5KSB7XG4gICAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3QnOlxuICAgICAgICAgIHJldHVybiAncGVyc29uIGNvbnRhY3QnO1xuICAgICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbic6XG4gICAgICAgICAgcmV0dXJuICdjb21wYW55JztcbiAgICAgICAgY2FzZSAnT3Bwb3J0dW5pdHknOlxuICAgICAgICAgIHJldHVybiAnb3Bwb3J0dW5pdHknO1xuICAgICAgICBjYXNlICdDYW5kaWRhdGUnOlxuICAgICAgICAgIHJldHVybiAnY2FuZGlkYXRlJztcbiAgICAgICAgY2FzZSAnTGVhZCc6XG4gICAgICAgICAgcmV0dXJuICdsZWFkJztcbiAgICAgICAgY2FzZSAnSm9iT3JkZXInOlxuICAgICAgICAgIHJldHVybiAnam9iJztcbiAgICAgICAgY2FzZSAnUGxhY2VtZW50JzpcbiAgICAgICAgICByZXR1cm4gJ3N0YXIgcGxhY2VtZW50JztcbiAgICAgICAgY2FzZSAnQ29ycG9yYXRlVXNlcic6XG4gICAgICAgICAgcmV0dXJuICd1c2VyJztcbiAgICAgICAgY2FzZSAnQ29ycG9yYXRpb25EZXBhcnRtZW50JzpcbiAgICAgICAgICByZXR1cm4gJ2RlcGFydG1lbnQnO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmVuZGVyVGltZXN0YW1wKGRhdGU/OiBhbnkpIHtcbiAgICBsZXQgdGltZXN0YW1wID0gJyc7XG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIHRpbWVzdGFtcCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KGRhdGUsIHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ251bWVyaWMnLCBkYXk6ICdudW1lcmljJyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRpbWVzdGFtcDtcbiAgfVxuXG4gIGdldE5hbWVGb3JSZXN1bHQocmVzdWx0PzogYW55KSB7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgc3dpdGNoIChyZXN1bHQuc2VhcmNoRW50aXR5KSB7XG4gICAgICAgIGNhc2UgJ0xlYWQnOlxuICAgICAgICBjYXNlICdDb3Jwb3JhdGVVc2VyJzpcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdCc6XG4gICAgICAgIGNhc2UgJ0NhbmRpZGF0ZSc6XG4gICAgICAgIGNhc2UgJ1BlcnNvbic6XG4gICAgICAgICAgaWYgKCdmaXJzdE5hbWUnIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIGAke3Jlc3VsdC5maXJzdE5hbWV9ICR7cmVzdWx0Lmxhc3ROYW1lfWAudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYCR7cmVzdWx0Lm5hbWUgfHwgJyd9YC50cmltKCk7XG4gICAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uJzpcbiAgICAgICAgICByZXR1cm4gYCR7cmVzdWx0Lm5hbWUgfHwgJyd9YC50cmltKCk7XG4gICAgICAgIGNhc2UgJ09wcG9ydHVuaXR5JzpcbiAgICAgICAgY2FzZSAnSm9iT3JkZXInOlxuICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQuaWR9IHwgJHtyZXN1bHQudGl0bGUgfHwgJyd9YC50cmltKCk7XG4gICAgICAgIGNhc2UgJ1BsYWNlbWVudCc6XG4gICAgICAgICAgbGV0IGxhYmVsID0gYCR7cmVzdWx0LmlkfWA7XG4gICAgICAgICAgaWYgKHJlc3VsdC5jYW5kaWRhdGUgfHwgcmVzdWx0LmpvYk9yZGVyKSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmNhbmRpZGF0ZSAmJiByZXN1bHQuam9iT3JkZXIpIHtcbiAgICAgICAgICAgICAgbGFiZWwgPSBgJHtsYWJlbH0gfCAke3Jlc3VsdC5jYW5kaWRhdGUuZmlyc3ROYW1lfSAke3Jlc3VsdC5jYW5kaWRhdGUubGFzdE5hbWV9IC0gJHtyZXN1bHQuam9iT3JkZXIudGl0bGV9YC50cmltKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5qb2JPcmRlcikge1xuICAgICAgICAgICAgICBsYWJlbCA9IGAke2xhYmVsfSB8ICR7cmVzdWx0LmpvYk9yZGVyLnRpdGxlfWAudHJpbSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGFiZWwgPSBgJHtsYWJlbH0gfCAke3Jlc3VsdC5jYW5kaWRhdGUuZmlyc3ROYW1lfSAke3Jlc3VsdC5jYW5kaWRhdGUubGFzdE5hbWV9YC50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gYCR7cmVzdWx0Lm5hbWUgfHwgJyd9YC50cmltKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbnRpdHktcGlja2VyLXJlc3VsdHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxub3ZvLWxpc3QgKm5nSWY9XCJtYXRjaGVzLmxlbmd0aCA+IDBcIiBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgPGVudGl0eS1waWNrZXItcmVzdWx0XG4gICAgICAgICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBtYXRjaGVzXCJcbiAgICAgICAgW21hdGNoXT1cIm1hdGNoXCJcbiAgICAgICAgW3Rlcm1dPVwidGVybVwiXG4gICAgICAgIChjbGljayk9XCJzZWxlY3RNYXRjaCgkZXZlbnQsIG1hdGNoKVwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsgYWN0aXZlOiBpc0FjdGl2ZShtYXRjaCkgfVwiXG4gICAgICAgIChtb3VzZWVudGVyKT1cInNlbGVjdEFjdGl2ZShtYXRjaClcIlxuICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwicHJlc2VsZWN0ZWQobWF0Y2gpXCJcbiAgICAgID5cbiAgICAgIDwvZW50aXR5LXBpY2tlci1yZXN1bHQ+XG4gICAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiICpuZ0lmPVwiaXNMb2FkaW5nICYmIG1hdGNoZXMubGVuZ3RoID4gMFwiPjwvbm92by1sb2FkaW5nPlxuICAgIDwvbm92by1saXN0PlxuICAgIDxwIGNsYXNzPVwicGlja2VyLWVycm9yXCIgKm5nSWY9XCJoYXNFcnJvclwiPnt7IGxhYmVscy5waWNrZXJFcnJvciB9fTwvcD5cbiAgICA8cCBjbGFzcz1cInBpY2tlci1udWxsLXJlc3VsdHNcIiAqbmdJZj1cImhhc05vbkVycm9yTWVzc2FnZSAmJiB0ZXJtICE9PSAnJ1wiPnt7IGxhYmVscy5waWNrZXJFbXB0eSB9fTwvcD5cbiAgICA8cCBjbGFzcz1cInBpY2tlci1udWxsLXJlc3VsdHNcIiAqbmdJZj1cImhhc05vbkVycm9yTWVzc2FnZSAmJiB0ZXJtID09PSAnJ1wiPnt7IGxhYmVscy5waWNrZXJUZXh0RmllbGRFbXB0eSB9fTwvcD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRW50aXR5UGlja2VyUmVzdWx0cyBleHRlbmRzIEJhc2VQaWNrZXJSZXN1bHRzIHtcbiAgQE91dHB1dCgpXG4gIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50LCByZWYpO1xuICB9XG5cbiAgZ2V0IGhhc05vbkVycm9yTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNMb2FkaW5nICYmICF0aGlzLm1hdGNoZXMubGVuZ3RoICYmICF0aGlzLmhhc0Vycm9yO1xuICB9XG5cbiAgZ2V0TGlzdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ25vdm8tbGlzdCcpO1xuICB9XG5cbiAgc2VsZWN0TWF0Y2goZXZlbnQ/OiBhbnksIGl0ZW0/OiBhbnkpIHtcbiAgICB0aGlzLnNlbGVjdC5uZXh0KGl0ZW0pO1xuICAgIHJldHVybiBzdXBlci5zZWxlY3RNYXRjaChldmVudCwgaXRlbSk7XG4gIH1cbn1cbiJdfQ==