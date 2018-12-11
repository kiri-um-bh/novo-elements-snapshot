/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
/** @nocollapse */
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
/** @nocollapse */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5UGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL2VudGl0eS1waWNrZXItcmVzdWx0cy9FbnRpdHlQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUd0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQTBFM0UsTUFBTSxPQUFPLGtCQUFrQjs7OztJQU03QixZQUFtQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7Ozs7Ozs7OztJQVMvQyxZQUFZLENBQUMsYUFBYTtRQUN4QixrREFBa0Q7UUFDbEQsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7Ozs7OztJQVNELFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSztRQUNwQiw4RUFBOEU7UUFDOUUsT0FBTyxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzFILENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsTUFBWTtRQUMzQixJQUFJLE1BQU0sRUFBRTtZQUNWLFFBQVEsTUFBTSxDQUFDLFlBQVksRUFBRTtnQkFDM0IsS0FBSyxlQUFl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QStCOztBQWdIN0MsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGlCQUFpQjs7Ozs7O0lBR3hELFlBQVksT0FBbUIsRUFBUyxNQUF3QixFQUFFLEdBQXNCO1FBQ3RGLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFEa0IsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFEaEUsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRy9DLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQVcsRUFBRSxJQUFVO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0tBY1A7YUFDSjs7OztZQW5NbUIsVUFBVTtZQUlyQixnQkFBZ0I7WUFKb0MsaUJBQWlCOzs7cUJBcU0zRSxNQUFNOzs7O0lBQVAscUNBQytDOztJQUNkLHFDQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBWZW5kb3Jcbi8vIEFQUFxuaW1wb3J0IHsgQmFzZVBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbnRpdHktcGlja2VyLXJlc3VsdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxub3ZvLWxpc3QtaXRlbSAqbmdJZj1cIm1hdGNoLmRhdGFcIj5cbiAgICAgICAgICAgIDxpdGVtLWhlYWRlcj5cbiAgICAgICAgICAgICAgICA8aXRlbS1hdmF0YXIgW2ljb25dPVwiZ2V0SWNvbkZvclJlc3VsdChtYXRjaC5kYXRhKVwiPjwvaXRlbS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgPGl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KGdldE5hbWVGb3JSZXN1bHQobWF0Y2guZGF0YSksIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaXRlbS10aXRsZT5cbiAgICAgICAgICAgIDwvaXRlbS1oZWFkZXI+XG4gICAgICAgICAgICA8aXRlbS1jb250ZW50IGRpcmVjdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICA8IS0tIENPTVBBTlkgMSAtLT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbXBhbnlcIiAqbmdJZj1cIm1hdGNoLmRhdGEuY29tcGFueU5hbWUgfHwgbWF0Y2guZGF0YT8uY2xpZW50Q29ycG9yYXRpb24/Lm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktY29tcGFueVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5jb21wYW55TmFtZSB8fCBtYXRjaC5kYXRhPy5jbGllbnRDb3Jwb3JhdGlvbj8ubmFtZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwhLS0gQ0xJRU5UIENPTlRBQ1QgLS0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250YWN0XCIgKm5nSWY9XCJtYXRjaC5kYXRhPy5jbGllbnRDb250YWN0Py5maXJzdE5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktcGVyc29uIGNvbnRhY3QgcGVyc29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmNsaWVudENvbnRhY3QuZmlyc3ROYW1lICsgJyAnICsgbWF0Y2guZGF0YS5jbGllbnRDb250YWN0Lmxhc3ROYW1lLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPCEtLSBDQU5ESURBVEUgLS0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYW5kaWRhdGVcIiAqbmdJZj1cIm1hdGNoLmRhdGEuY2FuZGlkYXRlICYmIG1hdGNoLmRhdGEuc2VhcmNoRW50aXR5ID09PSAnUGxhY2VtZW50J1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jYW5kaWRhdGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KChtYXRjaC5kYXRhLmNhbmRpZGF0ZS5maXJzdE5hbWUgKyAnICcgKyBtYXRjaC5kYXRhLmNhbmRpZGF0ZS5sYXN0TmFtZSksIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8IS0tIFNUQVJUICYgRU5EIERBVEUgLS0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdGFydC1kYXRlXCIgKm5nSWY9XCJtYXRjaC5kYXRhLmRhdGVCZWdpbiAmJiBtYXRjaC5kYXRhLnNlYXJjaEVudGl0eSA9PT0gJ1BsYWNlbWVudCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktY2FsZW5kYXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwicmVuZGVyVGltZXN0YW1wKG1hdGNoLmRhdGEuZGF0ZUJlZ2luKSArICcgLSAnICsgcmVuZGVyVGltZXN0YW1wKG1hdGNoLmRhdGEuZGF0ZUVuZClcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwhLS0gRU1BSUwgLS0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJlbWFpbFwiICpuZ0lmPVwibWF0Y2guZGF0YS5lbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1lbWFpbFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5lbWFpbCwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwhLS0gUEhPTkUgLS0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwaG9uZVwiICpuZ0lmPVwibWF0Y2guZGF0YS5waG9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1waG9uZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5waG9uZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwhLS0gQUREUkVTUyAtLT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxvY2F0aW9uXCIgKm5nSWY9XCJtYXRjaC5kYXRhLmFkZHJlc3MgJiYgKG1hdGNoLmRhdGEuYWRkcmVzcy5jaXR5IHx8IG1hdGNoLmRhdGEuYWRkcmVzcy5zdGF0ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktbG9jYXRpb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwibWF0Y2guZGF0YS5hZGRyZXNzLmNpdHlcIiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmFkZHJlc3MuY2l0eSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwibWF0Y2guZGF0YS5hZGRyZXNzLmNpdHkgJiYgbWF0Y2guZGF0YS5hZGRyZXNzLnN0YXRlXCI+LCA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwibWF0Y2guZGF0YS5hZGRyZXNzLnN0YXRlXCIgW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5hZGRyZXNzLnN0YXRlLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPCEtLSBTVEFUVVMgLS0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdGF0dXNcIiAqbmdJZj1cIm1hdGNoLmRhdGEuc3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWluZm9cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuc3RhdHVzLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPCEtLSBPV05FUiAtLT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm93bmVyXCIgKm5nSWY9XCJtYXRjaC5kYXRhLm93bmVyICYmIG1hdGNoLmRhdGEub3duZXIubmFtZSAmJiBtYXRjaC5kYXRhLnNlYXJjaEVudGl0eSA9PT0gJ0NhbmRpZGF0ZSdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktcGVyc29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLm93bmVyLm5hbWUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8IS0tIFBSSU1BUlkgREVQQVJUTUVOVCAtLT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByaW1hcnktZGVwYXJ0bWVudFwiICpuZ0lmPVwibWF0Y2guZGF0YS5wcmltYXJ5RGVwYXJ0bWVudCAmJiBtYXRjaC5kYXRhLnByaW1hcnlEZXBhcnRtZW50Lm5hbWUgJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdDb3Jwb3JhdGVVc2VyJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1kZXBhcnRtZW50XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLnByaW1hcnlEZXBhcnRtZW50Lm5hbWUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8IS0tIE9DQ1VQQVRJT04gLS0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvY2N1cGF0aW9uXCIgKm5nSWY9XCJtYXRjaC5kYXRhLm9jY3VwYXRpb24gJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdDb3Jwb3JhdGVVc2VyJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1vY2N1cGF0aW9uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLm9jY3VwYXRpb24sIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eVBpY2tlclJlc3VsdCB7XG4gIEBJbnB1dCgpXG4gIG1hdGNoOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHRlcm06IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBAbmFtZSBlc2NhcGVSZWdleHBcbiAgICogQHBhcmFtIHF1ZXJ5VG9Fc2NhcGVcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gY2FwdHVyZXMgdGhlIHdob2xlIHF1ZXJ5IHN0cmluZyBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBzdHJpbmcgdGhhdCB3aWxsIGJlIHVzZWQgdG9cbiAgICogbWF0Y2guXG4gICAqL1xuICBlc2NhcGVSZWdleHAocXVlcnlUb0VzY2FwZSkge1xuICAgIC8vIEV4OiBpZiB0aGUgY2FwdHVyZSBpcyBcImFcIiB0aGUgcmVzdWx0IHdpbGwgYmUgXFxhXG4gICAgcmV0dXJuIHF1ZXJ5VG9Fc2NhcGUucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2csICdcXFxcJDEnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBoaWdobGlnaHRcbiAgICogQHBhcmFtIG1hdGNoXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgPHN0cm9uZz4tdGFnIHdyYXBwZWQgSFRNTCBzdHJpbmcuXG4gICAqL1xuICBoaWdobGlnaHQobWF0Y2gsIHF1ZXJ5KSB7XG4gICAgLy8gUmVwbGFjZXMgdGhlIGNhcHR1cmUgc3RyaW5nIHdpdGggYSB0aGUgc2FtZSBzdHJpbmcgaW5zaWRlIG9mIGEgXCJzdHJvbmdcIiB0YWdcbiAgICByZXR1cm4gcXVlcnkgJiYgbWF0Y2ggPyBtYXRjaC5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5lc2NhcGVSZWdleHAocXVlcnkudHJpbSgpKSwgJ2dpJyksICc8c3Ryb25nPiQmPC9zdHJvbmc+JykgOiBtYXRjaDtcbiAgfVxuXG4gIGdldEljb25Gb3JSZXN1bHQocmVzdWx0PzogYW55KTogc3RyaW5nIHtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBzd2l0Y2ggKHJlc3VsdC5zZWFyY2hFbnRpdHkpIHtcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdCc6XG4gICAgICAgICAgcmV0dXJuICdwZXJzb24gY29udGFjdCc7XG4gICAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uJzpcbiAgICAgICAgICByZXR1cm4gJ2NvbXBhbnknO1xuICAgICAgICBjYXNlICdPcHBvcnR1bml0eSc6XG4gICAgICAgICAgcmV0dXJuICdvcHBvcnR1bml0eSc7XG4gICAgICAgIGNhc2UgJ0NhbmRpZGF0ZSc6XG4gICAgICAgICAgcmV0dXJuICdjYW5kaWRhdGUnO1xuICAgICAgICBjYXNlICdMZWFkJzpcbiAgICAgICAgICByZXR1cm4gJ2xlYWQnO1xuICAgICAgICBjYXNlICdKb2JPcmRlcic6XG4gICAgICAgICAgcmV0dXJuICdqb2InO1xuICAgICAgICBjYXNlICdQbGFjZW1lbnQnOlxuICAgICAgICAgIHJldHVybiAnc3RhciBwbGFjZW1lbnQnO1xuICAgICAgICBjYXNlICdDb3Jwb3JhdGVVc2VyJzpcbiAgICAgICAgICByZXR1cm4gJ3VzZXInO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmVuZGVyVGltZXN0YW1wKGRhdGU/OiBhbnkpIHtcbiAgICBsZXQgdGltZXN0YW1wID0gJyc7XG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIHRpbWVzdGFtcCA9IHRoaXMubGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KGRhdGUsIHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ251bWVyaWMnLCBkYXk6ICdudW1lcmljJyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRpbWVzdGFtcDtcbiAgfVxuXG4gIGdldE5hbWVGb3JSZXN1bHQocmVzdWx0PzogYW55KSB7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgc3dpdGNoIChyZXN1bHQuc2VhcmNoRW50aXR5KSB7XG4gICAgICAgIGNhc2UgJ0xlYWQnOlxuICAgICAgICBjYXNlICdDb3Jwb3JhdGVVc2VyJzpcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdCc6XG4gICAgICAgIGNhc2UgJ0NhbmRpZGF0ZSc6XG4gICAgICAgIGNhc2UgJ1BlcnNvbic6XG4gICAgICAgICAgaWYgKCdmaXJzdE5hbWUnIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIGAke3Jlc3VsdC5maXJzdE5hbWV9ICR7cmVzdWx0Lmxhc3ROYW1lfWAudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYCR7cmVzdWx0Lm5hbWUgfHwgJyd9YC50cmltKCk7XG4gICAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uJzpcbiAgICAgICAgICByZXR1cm4gYCR7cmVzdWx0Lm5hbWUgfHwgJyd9YC50cmltKCk7XG4gICAgICAgIGNhc2UgJ09wcG9ydHVuaXR5JzpcbiAgICAgICAgY2FzZSAnSm9iT3JkZXInOlxuICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQudGl0bGUgfHwgJyd9YC50cmltKCk7XG4gICAgICAgIGNhc2UgJ1BsYWNlbWVudCc6XG4gICAgICAgICAgbGV0IGxhYmVsID0gJyc7XG4gICAgICAgICAgaWYgKHJlc3VsdC5jYW5kaWRhdGUpIHtcbiAgICAgICAgICAgIGxhYmVsID0gYCR7cmVzdWx0LmNhbmRpZGF0ZS5maXJzdE5hbWV9ICR7cmVzdWx0LmNhbmRpZGF0ZS5sYXN0TmFtZX1gLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdC5qb2JPcmRlcikge1xuICAgICAgICAgICAgbGFiZWwgPSBgJHtsYWJlbH0gLSAke3Jlc3VsdC5qb2JPcmRlci50aXRsZX1gLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQubmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VudGl0eS1waWNrZXItcmVzdWx0cycsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxub3ZvLWxpc3QgKm5nSWY9XCJtYXRjaGVzLmxlbmd0aCA+IDBcIiBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgPGVudGl0eS1waWNrZXItcmVzdWx0ICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBtYXRjaGVzXCJcbiAgICAgICAgICAgICAgICAgICAgW21hdGNoXT1cIm1hdGNoXCJcbiAgICAgICAgICAgICAgICAgICAgW3Rlcm1dPVwidGVybVwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RNYXRjaCgkZXZlbnQsIG1hdGNoKVwiXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInthY3RpdmU6IGlzQWN0aXZlKG1hdGNoKX1cIlxuICAgICAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJzZWxlY3RBY3RpdmUobWF0Y2gpXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cInByZXNlbGVjdGVkKG1hdGNoKVwiPlxuICAgICAgICAgICAgPC9lbnRpdHktcGlja2VyLXJlc3VsdD5cbiAgICAgICAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgbWF0Y2hlcy5sZW5ndGggPiAwXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgIDwvbm92by1saXN0PlxuICAgICAgICA8cCBjbGFzcz1cInBpY2tlci1lcnJvclwiICpuZ0lmPVwiaGFzRXJyb3JcIj57eyBsYWJlbHMucGlja2VyRXJyb3IgfX08L3A+XG4gICAgICAgIDxwIGNsYXNzPVwicGlja2VyLW51bGwtcmVzdWx0c1wiICpuZ0lmPVwiIWlzTG9hZGluZyAmJiAhbWF0Y2hlcy5sZW5ndGggJiYgIWhhc0Vycm9yXCI+e3sgbGFiZWxzLnBpY2tlckVtcHR5IH19PC9wPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eVBpY2tlclJlc3VsdHMgZXh0ZW5kcyBCYXNlUGlja2VyUmVzdWx0cyB7XG4gIEBPdXRwdXQoKVxuICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgcmVmKTtcbiAgfVxuXG4gIGdldExpc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLWxpc3QnKTtcbiAgfVxuXG4gIHNlbGVjdE1hdGNoKGV2ZW50PzogYW55LCBpdGVtPzogYW55KSB7XG4gICAgdGhpcy5zZWxlY3QubmV4dChpdGVtKTtcbiAgICByZXR1cm4gc3VwZXIuc2VsZWN0TWF0Y2goZXZlbnQsIGl0ZW0pO1xuICB9XG59XG4iXX0=