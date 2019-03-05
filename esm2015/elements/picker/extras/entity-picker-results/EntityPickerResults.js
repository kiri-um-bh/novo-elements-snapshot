/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Component, ElementRef, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
// Vendor
// APP
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import { NovoLabelService } from '../../../../services/novo-label-service';
export class EntityPickerResult {
    /**
     * @param {?} labels
     */
    constructor(labels) {
        this.labels = labels;
    }
    /**
     * \@name escapeRegexp
     * \@description This function captures the whole query string and replace it with the string that will be used to
     * match.
     * @param {?} queryToEscape
     *
     * @return {?}
     */
    escapeRegexp(queryToEscape) {
        // Ex: if the capture is "a" the result will be \a
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }
    /**
     * \@name highlight
     * \@description This function should return a <strong>-tag wrapped HTML string.
     * @param {?} match
     * @param {?} query
     *
     * @return {?}
     */
    highlight(match, query) {
        // Replaces the capture string with a the same string inside of a "strong" tag
        return query && match ? match.replace(new RegExp(this.escapeRegexp(query.trim()), 'gi'), '<strong>$&</strong>') : match;
    }
    /**
     * @param {?=} result
     * @return {?}
     */
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
                default:
                    return '';
            }
        }
        return '';
    }
    /**
     * @param {?=} date
     * @return {?}
     */
    renderTimestamp(date) {
        /** @type {?} */
        let timestamp = '';
        if (date) {
            timestamp = this.labels.formatDateWithFormat(date, { year: 'numeric', month: 'numeric', day: 'numeric' });
        }
        return timestamp;
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    getNameForResult(result) {
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
                    return `${result.title || ''}`.trim();
                case 'Placement':
                    /** @type {?} */
                    let label = '';
                    if (result.candidate) {
                        label = `${result.candidate.firstName} ${result.candidate.lastName}`.trim();
                    }
                    if (result.jobOrder) {
                        label = `${label} - ${result.jobOrder.title}`.trim();
                    }
                    return label;
                default:
                    return `${result.name || ''}`.trim();
            }
        }
        return '';
    }
}
EntityPickerResult.decorators = [
    { type: Component, args: [{
                selector: 'entity-picker-result',
                template: `
        <novo-list-item *ngIf="match.data">
            <item-header>
                <item-avatar [icon]="getIconForResult(match.data)"></item-avatar>
                <item-title>
                    <span [innerHtml]="highlight(getNameForResult(match.data), term)"></span>
                </item-title>
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
                    <span [innerHtml]="highlight((match.data.candidate.firstName + ' ' + match.data.candidate.lastName), term)"></span>
                </p>
                <!-- START & END DATE -->
                <p class="start-date" *ngIf="match.data.dateBegin && match.data.searchEntity === 'Placement'">
                    <i class="bhi-calendar"></i>
                    <span [innerHtml]="renderTimestamp(match.data.dateBegin) + ' - ' + renderTimestamp(match.data.dateEnd)"></span>
                </p>
                <!-- EMAIL -->
                <p class="email" *ngIf="match.data.email">
                    <i class="bhi-email"></i>
                    <span [innerHtml]="highlight(match.data.email, term)"></span>
                </p>
                <!-- PHONE -->
                <p class="phone" *ngIf="match.data.phone">
                    <i class="bhi-phone"></i>
                    <span [innerHtml]="highlight(match.data.phone, term)"></span>
                </p>
                <!-- ADDRESS -->
                <p class="location" *ngIf="match.data.address && (match.data.address.city || match.data.address.state)">
                    <i class="bhi-location"></i>
                    <span *ngIf="match.data.address.city" [innerHtml]="highlight(match.data.address.city, term)"></span>
                    <span *ngIf="match.data.address.city && match.data.address.state">, </span>
                    <span *ngIf="match.data.address.state" [innerHtml]="highlight(match.data.address.state, term)"></span>
                </p>
                <!-- STATUS -->
                <p class="status" *ngIf="match.data.status">
                    <i class="bhi-info"></i>
                    <span [innerHtml]="highlight(match.data.status, term)"></span>
                </p>
                <!-- OWNER -->
                <p class="owner" *ngIf="match.data.owner && match.data.owner.name && match.data.searchEntity === 'Candidate'">
                    <i class="bhi-person"></i>
                    <span [innerHtml]="highlight(match.data.owner.name, term)"></span>
                </p>
                <!-- PRIMARY DEPARTMENT -->
                <p class="primary-department" *ngIf="match.data.primaryDepartment && match.data.primaryDepartment.name && match.data.searchEntity === 'CorporateUser'">
                    <i class="bhi-department"></i>
                    <span [innerHtml]="highlight(match.data.primaryDepartment.name, term)"></span>
                </p>
                <!-- OCCUPATION -->
                <p class="occupation" *ngIf="match.data.occupation && match.data.searchEntity === 'CorporateUser'">
                    <i class="bhi-occupation"></i>
                    <span [innerHtml]="highlight(match.data.occupation, term)"></span>
                </p>
            </item-content>
        </novo-list-item>
    `
            }] }
];
EntityPickerResult.ctorParameters = () => [
    { type: NovoLabelService }
];
EntityPickerResult.propDecorators = {
    match: [{ type: Input }],
    term: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    EntityPickerResult.prototype.match;
    /** @type {?} */
    EntityPickerResult.prototype.term;
    /** @type {?} */
    EntityPickerResult.prototype.labels;
}
export class EntityPickerResults extends BasePickerResults {
    /**
     * @param {?} element
     * @param {?} labels
     * @param {?} ref
     */
    constructor(element, labels, ref) {
        super(element, ref);
        this.labels = labels;
        this.select = new EventEmitter();
    }
    /**
     * @return {?}
     */
    getListElement() {
        return this.element.nativeElement.querySelector('novo-list');
    }
    /**
     * @param {?=} event
     * @param {?=} item
     * @return {?}
     */
    selectMatch(event, item) {
        this.select.next(item);
        return super.selectMatch(event, item);
    }
}
EntityPickerResults.decorators = [
    { type: Component, args: [{
                selector: 'entity-picker-results',
                template: `
        <novo-list *ngIf="matches.length > 0" direction="vertical">
            <entity-picker-result *ngFor="let match of matches"
                    [match]="match"
                    [term]="term"
                    (click)="selectMatch($event, match)"
                    [ngClass]="{active: isActive(match)}"
                    (mouseenter)="selectActive(match)"
                    [class.disabled]="preselected(match)">
            </entity-picker-result>
            <novo-loading theme="line" *ngIf="isLoading && matches.length > 0"></novo-loading>
        </novo-list>
        <p class="picker-error" *ngIf="hasError">{{ labels.pickerError }}</p>
        <p class="picker-null-results" *ngIf="!isLoading && !matches.length && !hasError">{{ labels.pickerEmpty }}</p>
    `
            }] }
];
EntityPickerResults.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoLabelService },
    { type: ChangeDetectorRef }
];
EntityPickerResults.propDecorators = {
    select: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    EntityPickerResults.prototype.select;
    /** @type {?} */
    EntityPickerResults.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5UGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL2VudGl0eS1waWNrZXItcmVzdWx0cy9FbnRpdHlQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUd0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQTBFM0UsTUFBTTs7OztJQU1KLFlBQW1CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQzs7Ozs7Ozs7O0lBUy9DLFlBQVksQ0FBQyxhQUFhO1FBQ3hCLGtEQUFrRDtRQUNsRCxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7Ozs7O0lBU0QsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLO1FBQ3BCLDhFQUE4RTtRQUM5RSxPQUFPLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDMUgsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFZO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQ1YsUUFBUSxNQUFNLENBQUMsWUFBWSxFQUFFO2dCQUMzQixLQUFLLGVBQWU7b0JBQ2xCLE9BQU8s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QU0sMEJBQTJCLFNBQVEsaUJBQWlCOzs7Ozs7SUFHeEQsWUFBWSxPQUFtQixFQUFTLE1BQXdCLEVBQUUsR0FBc0I7UUFDdEYsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQURrQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQURoRSxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFHL0MsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBVyxFQUFFLElBQVU7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7S0FjUDthQUNKOzs7WUFuTW1CLFVBQVU7WUFJckIsZ0JBQWdCO1lBSm9DLGlCQUFpQjs7O3FCQXFNM0UsTUFBTTs7OztJQUFQLHFDQUMrQzs7SUFDZCxxQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gVmVuZG9yXG4vLyBBUFBcbmltcG9ydCB7IEJhc2VQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi4vYmFzZS1waWNrZXItcmVzdWx0cy9CYXNlUGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW50aXR5LXBpY2tlci1yZXN1bHQnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bm92by1saXN0LWl0ZW0gKm5nSWY9XCJtYXRjaC5kYXRhXCI+XG4gICAgICAgICAgICA8aXRlbS1oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGl0ZW0tYXZhdGFyIFtpY29uXT1cImdldEljb25Gb3JSZXN1bHQobWF0Y2guZGF0YSlcIj48L2l0ZW0tYXZhdGFyPlxuICAgICAgICAgICAgICAgIDxpdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChnZXROYW1lRm9yUmVzdWx0KG1hdGNoLmRhdGEpLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2l0ZW0tdGl0bGU+XG4gICAgICAgICAgICA8L2l0ZW0taGVhZGVyPlxuICAgICAgICAgICAgPGl0ZW0tY29udGVudCBkaXJlY3Rpb249XCJob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgICAgPCEtLSBDT01QQU5ZIDEgLS0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb21wYW55XCIgKm5nSWY9XCJtYXRjaC5kYXRhLmNvbXBhbnlOYW1lIHx8IG1hdGNoLmRhdGE/LmNsaWVudENvcnBvcmF0aW9uPy5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNvbXBhbnlcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuY29tcGFueU5hbWUgfHwgbWF0Y2guZGF0YT8uY2xpZW50Q29ycG9yYXRpb24/Lm5hbWUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8IS0tIENMSUVOVCBDT05UQUNUIC0tPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udGFjdFwiICpuZ0lmPVwibWF0Y2guZGF0YT8uY2xpZW50Q29udGFjdD8uZmlyc3ROYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXBlcnNvbiBjb250YWN0IHBlcnNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5jbGllbnRDb250YWN0LmZpcnN0TmFtZSArICcgJyArIG1hdGNoLmRhdGEuY2xpZW50Q29udGFjdC5sYXN0TmFtZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwhLS0gQ0FORElEQVRFIC0tPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FuZGlkYXRlXCIgKm5nSWY9XCJtYXRjaC5kYXRhLmNhbmRpZGF0ZSAmJiBtYXRjaC5kYXRhLnNlYXJjaEVudGl0eSA9PT0gJ1BsYWNlbWVudCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktY2FuZGlkYXRlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodCgobWF0Y2guZGF0YS5jYW5kaWRhdGUuZmlyc3ROYW1lICsgJyAnICsgbWF0Y2guZGF0YS5jYW5kaWRhdGUubGFzdE5hbWUpLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPCEtLSBTVEFSVCAmIEVORCBEQVRFIC0tPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3RhcnQtZGF0ZVwiICpuZ0lmPVwibWF0Y2guZGF0YS5kYXRlQmVnaW4gJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdQbGFjZW1lbnQnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cInJlbmRlclRpbWVzdGFtcChtYXRjaC5kYXRhLmRhdGVCZWdpbikgKyAnIC0gJyArIHJlbmRlclRpbWVzdGFtcChtYXRjaC5kYXRhLmRhdGVFbmQpXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8IS0tIEVNQUlMIC0tPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZW1haWxcIiAqbmdJZj1cIm1hdGNoLmRhdGEuZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktZW1haWxcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuZW1haWwsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8IS0tIFBIT05FIC0tPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGhvbmVcIiAqbmdJZj1cIm1hdGNoLmRhdGEucGhvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktcGhvbmVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEucGhvbmUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8IS0tIEFERFJFU1MgLS0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsb2NhdGlvblwiICpuZ0lmPVwibWF0Y2guZGF0YS5hZGRyZXNzICYmIChtYXRjaC5kYXRhLmFkZHJlc3MuY2l0eSB8fCBtYXRjaC5kYXRhLmFkZHJlc3Muc3RhdGUpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWxvY2F0aW9uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm1hdGNoLmRhdGEuYWRkcmVzcy5jaXR5XCIgW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5hZGRyZXNzLmNpdHksIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm1hdGNoLmRhdGEuYWRkcmVzcy5jaXR5ICYmIG1hdGNoLmRhdGEuYWRkcmVzcy5zdGF0ZVwiPiwgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm1hdGNoLmRhdGEuYWRkcmVzcy5zdGF0ZVwiIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuYWRkcmVzcy5zdGF0ZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwhLS0gU1RBVFVTIC0tPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3RhdHVzXCIgKm5nSWY9XCJtYXRjaC5kYXRhLnN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1pbmZvXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLnN0YXR1cywgdGVybSlcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwhLS0gT1dORVIgLS0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvd25lclwiICpuZ0lmPVwibWF0Y2guZGF0YS5vd25lciAmJiBtYXRjaC5kYXRhLm93bmVyLm5hbWUgJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdDYW5kaWRhdGUnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXBlcnNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5vd25lci5uYW1lLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPCEtLSBQUklNQVJZIERFUEFSVE1FTlQgLS0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmltYXJ5LWRlcGFydG1lbnRcIiAqbmdJZj1cIm1hdGNoLmRhdGEucHJpbWFyeURlcGFydG1lbnQgJiYgbWF0Y2guZGF0YS5wcmltYXJ5RGVwYXJ0bWVudC5uYW1lICYmIG1hdGNoLmRhdGEuc2VhcmNoRW50aXR5ID09PSAnQ29ycG9yYXRlVXNlcidcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktZGVwYXJ0bWVudFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5wcmltYXJ5RGVwYXJ0bWVudC5uYW1lLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPCEtLSBPQ0NVUEFUSU9OIC0tPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib2NjdXBhdGlvblwiICpuZ0lmPVwibWF0Y2guZGF0YS5vY2N1cGF0aW9uICYmIG1hdGNoLmRhdGEuc2VhcmNoRW50aXR5ID09PSAnQ29ycG9yYXRlVXNlcidcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktb2NjdXBhdGlvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5vY2N1cGF0aW9uLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2l0ZW0tY29udGVudD5cbiAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlQaWNrZXJSZXN1bHQge1xuICBASW5wdXQoKVxuICBtYXRjaDogYW55O1xuICBASW5wdXQoKVxuICB0ZXJtOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cblxuICAvKipcbiAgICogQG5hbWUgZXNjYXBlUmVnZXhwXG4gICAqIEBwYXJhbSBxdWVyeVRvRXNjYXBlXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIGNhcHR1cmVzIHRoZSB3aG9sZSBxdWVyeSBzdHJpbmcgYW5kIHJlcGxhY2UgaXQgd2l0aCB0aGUgc3RyaW5nIHRoYXQgd2lsbCBiZSB1c2VkIHRvXG4gICAqIG1hdGNoLlxuICAgKi9cbiAgZXNjYXBlUmVnZXhwKHF1ZXJ5VG9Fc2NhcGUpIHtcbiAgICAvLyBFeDogaWYgdGhlIGNhcHR1cmUgaXMgXCJhXCIgdGhlIHJlc3VsdCB3aWxsIGJlIFxcYVxuICAgIHJldHVybiBxdWVyeVRvRXNjYXBlLnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9nLCAnXFxcXCQxJyk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaGlnaGxpZ2h0XG4gICAqIEBwYXJhbSBtYXRjaFxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gc2hvdWxkIHJldHVybiBhIDxzdHJvbmc+LXRhZyB3cmFwcGVkIEhUTUwgc3RyaW5nLlxuICAgKi9cbiAgaGlnaGxpZ2h0KG1hdGNoLCBxdWVyeSkge1xuICAgIC8vIFJlcGxhY2VzIHRoZSBjYXB0dXJlIHN0cmluZyB3aXRoIGEgdGhlIHNhbWUgc3RyaW5nIGluc2lkZSBvZiBhIFwic3Ryb25nXCIgdGFnXG4gICAgcmV0dXJuIHF1ZXJ5ICYmIG1hdGNoID8gbWF0Y2gucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMuZXNjYXBlUmVnZXhwKHF1ZXJ5LnRyaW0oKSksICdnaScpLCAnPHN0cm9uZz4kJjwvc3Ryb25nPicpIDogbWF0Y2g7XG4gIH1cblxuICBnZXRJY29uRm9yUmVzdWx0KHJlc3VsdD86IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgc3dpdGNoIChyZXN1bHQuc2VhcmNoRW50aXR5KSB7XG4gICAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3QnOlxuICAgICAgICAgIHJldHVybiAncGVyc29uIGNvbnRhY3QnO1xuICAgICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbic6XG4gICAgICAgICAgcmV0dXJuICdjb21wYW55JztcbiAgICAgICAgY2FzZSAnT3Bwb3J0dW5pdHknOlxuICAgICAgICAgIHJldHVybiAnb3Bwb3J0dW5pdHknO1xuICAgICAgICBjYXNlICdDYW5kaWRhdGUnOlxuICAgICAgICAgIHJldHVybiAnY2FuZGlkYXRlJztcbiAgICAgICAgY2FzZSAnTGVhZCc6XG4gICAgICAgICAgcmV0dXJuICdsZWFkJztcbiAgICAgICAgY2FzZSAnSm9iT3JkZXInOlxuICAgICAgICAgIHJldHVybiAnam9iJztcbiAgICAgICAgY2FzZSAnUGxhY2VtZW50JzpcbiAgICAgICAgICByZXR1cm4gJ3N0YXIgcGxhY2VtZW50JztcbiAgICAgICAgY2FzZSAnQ29ycG9yYXRlVXNlcic6XG4gICAgICAgICAgcmV0dXJuICd1c2VyJztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJlbmRlclRpbWVzdGFtcChkYXRlPzogYW55KSB7XG4gICAgbGV0IHRpbWVzdGFtcCA9ICcnO1xuICAgIGlmIChkYXRlKSB7XG4gICAgICB0aW1lc3RhbXAgPSB0aGlzLmxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdChkYXRlLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdudW1lcmljJywgZGF5OiAnbnVtZXJpYycgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aW1lc3RhbXA7XG4gIH1cblxuICBnZXROYW1lRm9yUmVzdWx0KHJlc3VsdD86IGFueSkge1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHN3aXRjaCAocmVzdWx0LnNlYXJjaEVudGl0eSkge1xuICAgICAgICBjYXNlICdMZWFkJzpcbiAgICAgICAgY2FzZSAnQ29ycG9yYXRlVXNlcic6XG4gICAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3QnOlxuICAgICAgICBjYXNlICdDYW5kaWRhdGUnOlxuICAgICAgICBjYXNlICdQZXJzb24nOlxuICAgICAgICAgIGlmICgnZmlyc3ROYW1lJyBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQuZmlyc3ROYW1lfSAke3Jlc3VsdC5sYXN0TmFtZX1gLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGAke3Jlc3VsdC5uYW1lIHx8ICcnfWAudHJpbSgpO1xuICAgICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbic6XG4gICAgICAgICAgcmV0dXJuIGAke3Jlc3VsdC5uYW1lIHx8ICcnfWAudHJpbSgpO1xuICAgICAgICBjYXNlICdPcHBvcnR1bml0eSc6XG4gICAgICAgIGNhc2UgJ0pvYk9yZGVyJzpcbiAgICAgICAgICByZXR1cm4gYCR7cmVzdWx0LnRpdGxlIHx8ICcnfWAudHJpbSgpO1xuICAgICAgICBjYXNlICdQbGFjZW1lbnQnOlxuICAgICAgICAgIGxldCBsYWJlbCA9ICcnO1xuICAgICAgICAgIGlmIChyZXN1bHQuY2FuZGlkYXRlKSB7XG4gICAgICAgICAgICBsYWJlbCA9IGAke3Jlc3VsdC5jYW5kaWRhdGUuZmlyc3ROYW1lfSAke3Jlc3VsdC5jYW5kaWRhdGUubGFzdE5hbWV9YC50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQuam9iT3JkZXIpIHtcbiAgICAgICAgICAgIGxhYmVsID0gYCR7bGFiZWx9IC0gJHtyZXN1bHQuam9iT3JkZXIudGl0bGV9YC50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gYCR7cmVzdWx0Lm5hbWUgfHwgJyd9YC50cmltKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbnRpdHktcGlja2VyLXJlc3VsdHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bm92by1saXN0ICpuZ0lmPVwibWF0Y2hlcy5sZW5ndGggPiAwXCIgZGlyZWN0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgIDxlbnRpdHktcGlja2VyLXJlc3VsdCAqbmdGb3I9XCJsZXQgbWF0Y2ggb2YgbWF0Y2hlc1wiXG4gICAgICAgICAgICAgICAgICAgIFttYXRjaF09XCJtYXRjaFwiXG4gICAgICAgICAgICAgICAgICAgIFt0ZXJtXT1cInRlcm1cIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0TWF0Y2goJGV2ZW50LCBtYXRjaClcIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7YWN0aXZlOiBpc0FjdGl2ZShtYXRjaCl9XCJcbiAgICAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwic2VsZWN0QWN0aXZlKG1hdGNoKVwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJwcmVzZWxlY3RlZChtYXRjaClcIj5cbiAgICAgICAgICAgIDwvZW50aXR5LXBpY2tlci1yZXN1bHQ+XG4gICAgICAgICAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiICpuZ0lmPVwiaXNMb2FkaW5nICYmIG1hdGNoZXMubGVuZ3RoID4gMFwiPjwvbm92by1sb2FkaW5nPlxuICAgICAgICA8L25vdm8tbGlzdD5cbiAgICAgICAgPHAgY2xhc3M9XCJwaWNrZXItZXJyb3JcIiAqbmdJZj1cImhhc0Vycm9yXCI+e3sgbGFiZWxzLnBpY2tlckVycm9yIH19PC9wPlxuICAgICAgICA8cCBjbGFzcz1cInBpY2tlci1udWxsLXJlc3VsdHNcIiAqbmdJZj1cIiFpc0xvYWRpbmcgJiYgIW1hdGNoZXMubGVuZ3RoICYmICFoYXNFcnJvclwiPnt7IGxhYmVscy5waWNrZXJFbXB0eSB9fTwvcD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlQaWNrZXJSZXN1bHRzIGV4dGVuZHMgQmFzZVBpY2tlclJlc3VsdHMge1xuICBAT3V0cHV0KClcbiAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1lbnQsIHJlZik7XG4gIH1cblxuICBnZXRMaXN0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignbm92by1saXN0Jyk7XG4gIH1cblxuICBzZWxlY3RNYXRjaChldmVudD86IGFueSwgaXRlbT86IGFueSkge1xuICAgIHRoaXMuc2VsZWN0Lm5leHQoaXRlbSk7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdE1hdGNoKGV2ZW50LCBpdGVtKTtcbiAgfVxufVxuIl19