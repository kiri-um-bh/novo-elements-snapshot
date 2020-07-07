/**
 * @fileoverview added by tsickle
 * Generated from: elements/picker/extras/entity-picker-results/EntityPickerResults.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                case 'CorporationDepartment':
                    return 'department';
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
                    return `${result.id} | ${result.title || ''}`.trim();
                case 'Placement':
                    /** @type {?} */
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
    get hasNonErrorMessage() {
        return !this.isLoading && !this.matches.length && !this.hasError;
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
      <entity-picker-result
        *ngFor="let match of matches"
        [match]="match"
        [term]="term"
        (click)="selectMatch($event, match)"
        [ngClass]="{ active: isActive(match) }"
        (mouseenter)="selectActive(match)"
        [class.disabled]="preselected(match)"
      >
      </entity-picker-result>
      <novo-loading theme="line" *ngIf="isLoading && matches.length > 0"></novo-loading>
    </novo-list>
    <p class="picker-error" *ngIf="hasError">{{ labels.pickerError }}</p>
    <p class="picker-null-results" *ngIf="hasNonErrorMessage && term !== ''">{{ labels.pickerEmpty }}</p>
    <p class="picker-null-results" *ngIf="hasNonErrorMessage && term === ''">{{ labels.pickerTextFieldEmpty }}</p>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5UGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL2VudGl0eS1waWNrZXItcmVzdWx0cy9FbnRpdHlQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFHdEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFvRTNFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFNN0IsWUFBbUIsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDOzs7Ozs7Ozs7SUFTL0MsWUFBWSxDQUFDLGFBQWE7UUFDeEIsa0RBQWtEO1FBQ2xELE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7Ozs7Ozs7SUFTRCxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUs7UUFDcEIsOEVBQThFO1FBQzlFLE9BQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMxSCxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLE1BQVk7UUFDM0IsSUFBSSxNQUFNLEVBQUU7WUFDVixRQUFRLE1BQU0sQ0FBQyxZQUFZLEVBQUU7Z0JBQzNCLEtBQUssZUFBZTtvQkFDbEIsT0FBTyxnQkFBZ0IsQ0FBQztnQkFDMUIsS0FBSyxtQkFBbUI7b0JBQ3RCLE9BQU8sU0FBUyxDQUFDO2dCQUNuQixLQUFLLGFBQWE7b0JBQ2hCLE9BQU8sYUFBYSxDQUFDO2dCQUN2QixLQUFLLFdBQVc7b0JBQ2QsT0FBTyxXQUFXLENBQUM7Z0JBQ3JCLEtBQUssTUFBTTtvQkFDVCxPQUFPLE1BQU0sQ0FBQztnQkFDaEIsS0FBSyxVQUFVO29CQUNiLE9BQU8sS0FBSyxDQUFDO2dCQUNmLEtBQUssV0FBVztvQkFDZCxPQUFPLGdCQUFnQixDQUFDO2dCQUMxQixLQUFLLGVBQWU7b0JBQ2xCLE9BQU8sTUFBTSxDQUFDO2dCQUNoQixLQUFLLHVCQUF1QjtvQkFDMUIsT0FBTyxZQUFZLENBQUM7Z0JBQ3RCO29CQUNFLE9BQU8sRUFBRSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsSUFBVTs7WUFDcEIsU0FBUyxHQUFHLEVBQUU7UUFDbEIsSUFBSSxJQUFJLEVBQUU7WUFDUixTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDM0c7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLE1BQVk7UUFDM0IsSUFBSSxNQUFNLEVBQUU7WUFDVixRQUFRLE1BQU0sQ0FBQyxZQUFZLEVBQUU7Z0JBQzNCLEtBQUssTUFBTSxDQUFDO2dCQUNaLEtBQUssZUFBZSxDQUFDO2dCQUNyQixLQUFLLGVBQWUsQ0FBQztnQkFDckIsS0FBSyxXQUFXLENBQUM7Z0JBQ2pCLEtBQUssUUFBUTtvQkFDWCxJQUFJLFdBQVcsSUFBSSxNQUFNLEVBQUU7d0JBQ3pCLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDeEQ7b0JBQ0QsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3ZDLEtBQUssbUJBQW1CO29CQUN0QixPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdkMsS0FBSyxhQUFhLENBQUM7Z0JBQ25CLEtBQUssVUFBVTtvQkFDYixPQUFPLEdBQUcsTUFBTSxDQUFDLEVBQUUsTUFBTSxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN2RCxLQUFLLFdBQVc7O3dCQUNWLEtBQUssR0FBRyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUU7b0JBQzFCLElBQUksTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO3dCQUN2QyxJQUFJLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTs0QkFDdkMsS0FBSyxHQUFHLEdBQUcsS0FBSyxNQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxNQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7eUJBQ25IOzZCQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTs0QkFDMUIsS0FBSyxHQUFHLEdBQUcsS0FBSyxNQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7eUJBQ3REOzZCQUFNOzRCQUNMLEtBQUssR0FBRyxHQUFHLEtBQUssTUFBTSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO3lCQUN4RjtxQkFDRjtvQkFDRCxPQUFPLEtBQUssQ0FBQztnQkFDZjtvQkFDRSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN4QztTQUNGO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7WUF4S0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4RFQ7YUFDRjs7OztZQW5FUSxnQkFBZ0I7OztvQkFxRXRCLEtBQUs7bUJBRUwsS0FBSzs7OztJQUZOLG1DQUNXOztJQUNYLGtDQUNVOztJQUVFLG9DQUErQjs7QUF3SDdDLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxpQkFBaUI7Ozs7OztJQUd4RCxZQUFZLE9BQW1CLEVBQVMsTUFBd0IsRUFBRSxHQUFzQjtRQUN0RixLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRGtCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBRGhFLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUcvQyxDQUFDOzs7O0lBRUQsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbkUsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBVyxFQUFFLElBQVU7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQlQ7YUFDRjs7OztZQXJNbUIsVUFBVTtZQUlyQixnQkFBZ0I7WUFKb0MsaUJBQWlCOzs7cUJBdU0zRSxNQUFNOzs7O0lBQVAscUNBQytDOztJQUNkLHFDQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBWZW5kb3Jcbi8vIEFQUFxuaW1wb3J0IHsgQmFzZVBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbnRpdHktcGlja2VyLXJlc3VsdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5vdm8tbGlzdC1pdGVtICpuZ0lmPVwibWF0Y2guZGF0YVwiPlxuICAgICAgPGl0ZW0taGVhZGVyPlxuICAgICAgICA8aXRlbS1hdmF0YXIgW2ljb25dPVwiZ2V0SWNvbkZvclJlc3VsdChtYXRjaC5kYXRhKVwiPjwvaXRlbS1hdmF0YXI+XG4gICAgICAgIDxpdGVtLXRpdGxlPiA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChnZXROYW1lRm9yUmVzdWx0KG1hdGNoLmRhdGEpLCB0ZXJtKVwiPjwvc3Bhbj4gPC9pdGVtLXRpdGxlPlxuICAgICAgPC9pdGVtLWhlYWRlcj5cbiAgICAgIDxpdGVtLWNvbnRlbnQgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICA8IS0tIENPTVBBTlkgMSAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJjb21wYW55XCIgKm5nSWY9XCJtYXRjaC5kYXRhLmNvbXBhbnlOYW1lIHx8IG1hdGNoLmRhdGE/LmNsaWVudENvcnBvcmF0aW9uPy5uYW1lXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktY29tcGFueVwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmNvbXBhbnlOYW1lIHx8IG1hdGNoLmRhdGE/LmNsaWVudENvcnBvcmF0aW9uPy5uYW1lLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIENMSUVOVCBDT05UQUNUIC0tPlxuICAgICAgICA8cCBjbGFzcz1cImNvbnRhY3RcIiAqbmdJZj1cIm1hdGNoLmRhdGE/LmNsaWVudENvbnRhY3Q/LmZpcnN0TmFtZVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLXBlcnNvbiBjb250YWN0IHBlcnNvblwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmNsaWVudENvbnRhY3QuZmlyc3ROYW1lICsgJyAnICsgbWF0Y2guZGF0YS5jbGllbnRDb250YWN0Lmxhc3ROYW1lLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIENBTkRJREFURSAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJjYW5kaWRhdGVcIiAqbmdJZj1cIm1hdGNoLmRhdGEuY2FuZGlkYXRlICYmIG1hdGNoLmRhdGEuc2VhcmNoRW50aXR5ID09PSAnUGxhY2VtZW50J1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNhbmRpZGF0ZVwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmNhbmRpZGF0ZS5maXJzdE5hbWUgKyAnICcgKyBtYXRjaC5kYXRhLmNhbmRpZGF0ZS5sYXN0TmFtZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBTVEFSVCAmIEVORCBEQVRFIC0tPlxuICAgICAgICA8cCBjbGFzcz1cInN0YXJ0LWRhdGVcIiAqbmdJZj1cIm1hdGNoLmRhdGEuZGF0ZUJlZ2luICYmIG1hdGNoLmRhdGEuc2VhcmNoRW50aXR5ID09PSAnUGxhY2VtZW50J1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwicmVuZGVyVGltZXN0YW1wKG1hdGNoLmRhdGEuZGF0ZUJlZ2luKSArICcgLSAnICsgcmVuZGVyVGltZXN0YW1wKG1hdGNoLmRhdGEuZGF0ZUVuZClcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBFTUFJTCAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJlbWFpbFwiICpuZ0lmPVwibWF0Y2guZGF0YS5lbWFpbFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWVtYWlsXCI+PC9pPiA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmVtYWlsLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIFBIT05FIC0tPlxuICAgICAgICA8cCBjbGFzcz1cInBob25lXCIgKm5nSWY9XCJtYXRjaC5kYXRhLnBob25lXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktcGhvbmVcIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEucGhvbmUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDwhLS0gQUREUkVTUyAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJsb2NhdGlvblwiICpuZ0lmPVwibWF0Y2guZGF0YS5hZGRyZXNzICYmIChtYXRjaC5kYXRhLmFkZHJlc3MuY2l0eSB8fCBtYXRjaC5kYXRhLmFkZHJlc3Muc3RhdGUpXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaGktbG9jYXRpb25cIj48L2k+IDxzcGFuICpuZ0lmPVwibWF0Y2guZGF0YS5hZGRyZXNzLmNpdHlcIiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmFkZHJlc3MuY2l0eSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJtYXRjaC5kYXRhLmFkZHJlc3MuY2l0eSAmJiBtYXRjaC5kYXRhLmFkZHJlc3Muc3RhdGVcIj4sIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cIm1hdGNoLmRhdGEuYWRkcmVzcy5zdGF0ZVwiIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuYWRkcmVzcy5zdGF0ZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBTVEFUVVMgLS0+XG4gICAgICAgIDxwIGNsYXNzPVwic3RhdHVzXCIgKm5nSWY9XCJtYXRjaC5kYXRhLnN0YXR1c1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWluZm9cIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuc3RhdHVzLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8IS0tIE9XTkVSIC0tPlxuICAgICAgICA8cCBjbGFzcz1cIm93bmVyXCIgKm5nSWY9XCJtYXRjaC5kYXRhLm93bmVyICYmIG1hdGNoLmRhdGEub3duZXIubmFtZSAmJiBtYXRjaC5kYXRhLnNlYXJjaEVudGl0eSA9PT0gJ0NhbmRpZGF0ZSdcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1wZXJzb25cIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEub3duZXIubmFtZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPCEtLSBQUklNQVJZIERFUEFSVE1FTlQgLS0+XG4gICAgICAgIDxwXG4gICAgICAgICAgY2xhc3M9XCJwcmltYXJ5LWRlcGFydG1lbnRcIlxuICAgICAgICAgICpuZ0lmPVwibWF0Y2guZGF0YS5wcmltYXJ5RGVwYXJ0bWVudCAmJiBtYXRjaC5kYXRhLnByaW1hcnlEZXBhcnRtZW50Lm5hbWUgJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdDb3Jwb3JhdGVVc2VyJ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8aSBjbGFzcz1cImJoaS1kZXBhcnRtZW50XCI+PC9pPiA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLnByaW1hcnlEZXBhcnRtZW50Lm5hbWUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDwhLS0gT0NDVVBBVElPTiAtLT5cbiAgICAgICAgPHAgY2xhc3M9XCJvY2N1cGF0aW9uXCIgKm5nSWY9XCJtYXRjaC5kYXRhLm9jY3VwYXRpb24gJiYgbWF0Y2guZGF0YS5zZWFyY2hFbnRpdHkgPT09ICdDb3Jwb3JhdGVVc2VyJ1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLW9jY3VwYXRpb25cIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEub2NjdXBhdGlvbiwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgIDwvbm92by1saXN0LWl0ZW0+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eVBpY2tlclJlc3VsdCB7XG4gIEBJbnB1dCgpXG4gIG1hdGNoOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHRlcm06IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBAbmFtZSBlc2NhcGVSZWdleHBcbiAgICogQHBhcmFtIHF1ZXJ5VG9Fc2NhcGVcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gY2FwdHVyZXMgdGhlIHdob2xlIHF1ZXJ5IHN0cmluZyBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBzdHJpbmcgdGhhdCB3aWxsIGJlIHVzZWQgdG9cbiAgICogbWF0Y2guXG4gICAqL1xuICBlc2NhcGVSZWdleHAocXVlcnlUb0VzY2FwZSkge1xuICAgIC8vIEV4OiBpZiB0aGUgY2FwdHVyZSBpcyBcImFcIiB0aGUgcmVzdWx0IHdpbGwgYmUgXFxhXG4gICAgcmV0dXJuIHF1ZXJ5VG9Fc2NhcGUucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2csICdcXFxcJDEnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBoaWdobGlnaHRcbiAgICogQHBhcmFtIG1hdGNoXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgPHN0cm9uZz4tdGFnIHdyYXBwZWQgSFRNTCBzdHJpbmcuXG4gICAqL1xuICBoaWdobGlnaHQobWF0Y2gsIHF1ZXJ5KSB7XG4gICAgLy8gUmVwbGFjZXMgdGhlIGNhcHR1cmUgc3RyaW5nIHdpdGggYSB0aGUgc2FtZSBzdHJpbmcgaW5zaWRlIG9mIGEgXCJzdHJvbmdcIiB0YWdcbiAgICByZXR1cm4gcXVlcnkgJiYgbWF0Y2ggPyBtYXRjaC5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5lc2NhcGVSZWdleHAocXVlcnkudHJpbSgpKSwgJ2dpJyksICc8c3Ryb25nPiQmPC9zdHJvbmc+JykgOiBtYXRjaDtcbiAgfVxuXG4gIGdldEljb25Gb3JSZXN1bHQocmVzdWx0PzogYW55KTogc3RyaW5nIHtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBzd2l0Y2ggKHJlc3VsdC5zZWFyY2hFbnRpdHkpIHtcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdCc6XG4gICAgICAgICAgcmV0dXJuICdwZXJzb24gY29udGFjdCc7XG4gICAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uJzpcbiAgICAgICAgICByZXR1cm4gJ2NvbXBhbnknO1xuICAgICAgICBjYXNlICdPcHBvcnR1bml0eSc6XG4gICAgICAgICAgcmV0dXJuICdvcHBvcnR1bml0eSc7XG4gICAgICAgIGNhc2UgJ0NhbmRpZGF0ZSc6XG4gICAgICAgICAgcmV0dXJuICdjYW5kaWRhdGUnO1xuICAgICAgICBjYXNlICdMZWFkJzpcbiAgICAgICAgICByZXR1cm4gJ2xlYWQnO1xuICAgICAgICBjYXNlICdKb2JPcmRlcic6XG4gICAgICAgICAgcmV0dXJuICdqb2InO1xuICAgICAgICBjYXNlICdQbGFjZW1lbnQnOlxuICAgICAgICAgIHJldHVybiAnc3RhciBwbGFjZW1lbnQnO1xuICAgICAgICBjYXNlICdDb3Jwb3JhdGVVc2VyJzpcbiAgICAgICAgICByZXR1cm4gJ3VzZXInO1xuICAgICAgICBjYXNlICdDb3Jwb3JhdGlvbkRlcGFydG1lbnQnOlxuICAgICAgICAgIHJldHVybiAnZGVwYXJ0bWVudCc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZW5kZXJUaW1lc3RhbXAoZGF0ZT86IGFueSkge1xuICAgIGxldCB0aW1lc3RhbXAgPSAnJztcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgdGltZXN0YW1wID0gdGhpcy5sYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQoZGF0ZSwgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbnVtZXJpYycsIGRheTogJ251bWVyaWMnIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGltZXN0YW1wO1xuICB9XG5cbiAgZ2V0TmFtZUZvclJlc3VsdChyZXN1bHQ/OiBhbnkpIHtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBzd2l0Y2ggKHJlc3VsdC5zZWFyY2hFbnRpdHkpIHtcbiAgICAgICAgY2FzZSAnTGVhZCc6XG4gICAgICAgIGNhc2UgJ0NvcnBvcmF0ZVVzZXInOlxuICAgICAgICBjYXNlICdDbGllbnRDb250YWN0JzpcbiAgICAgICAgY2FzZSAnQ2FuZGlkYXRlJzpcbiAgICAgICAgY2FzZSAnUGVyc29uJzpcbiAgICAgICAgICBpZiAoJ2ZpcnN0TmFtZScgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7cmVzdWx0LmZpcnN0TmFtZX0gJHtyZXN1bHQubGFzdE5hbWV9YC50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQubmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24nOlxuICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQubmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgICAgY2FzZSAnT3Bwb3J0dW5pdHknOlxuICAgICAgICBjYXNlICdKb2JPcmRlcic6XG4gICAgICAgICAgcmV0dXJuIGAke3Jlc3VsdC5pZH0gfCAke3Jlc3VsdC50aXRsZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgICAgY2FzZSAnUGxhY2VtZW50JzpcbiAgICAgICAgICBsZXQgbGFiZWwgPSBgJHtyZXN1bHQuaWR9YDtcbiAgICAgICAgICBpZiAocmVzdWx0LmNhbmRpZGF0ZSB8fCByZXN1bHQuam9iT3JkZXIpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY2FuZGlkYXRlICYmIHJlc3VsdC5qb2JPcmRlcikge1xuICAgICAgICAgICAgICBsYWJlbCA9IGAke2xhYmVsfSB8ICR7cmVzdWx0LmNhbmRpZGF0ZS5maXJzdE5hbWV9ICR7cmVzdWx0LmNhbmRpZGF0ZS5sYXN0TmFtZX0gLSAke3Jlc3VsdC5qb2JPcmRlci50aXRsZX1gLnRyaW0oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmpvYk9yZGVyKSB7XG4gICAgICAgICAgICAgIGxhYmVsID0gYCR7bGFiZWx9IHwgJHtyZXN1bHQuam9iT3JkZXIudGl0bGV9YC50cmltKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsYWJlbCA9IGAke2xhYmVsfSB8ICR7cmVzdWx0LmNhbmRpZGF0ZS5maXJzdE5hbWV9ICR7cmVzdWx0LmNhbmRpZGF0ZS5sYXN0TmFtZX1gLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBgJHtyZXN1bHQubmFtZSB8fCAnJ31gLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VudGl0eS1waWNrZXItcmVzdWx0cycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5vdm8tbGlzdCAqbmdJZj1cIm1hdGNoZXMubGVuZ3RoID4gMFwiIGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICA8ZW50aXR5LXBpY2tlci1yZXN1bHRcbiAgICAgICAgKm5nRm9yPVwibGV0IG1hdGNoIG9mIG1hdGNoZXNcIlxuICAgICAgICBbbWF0Y2hdPVwibWF0Y2hcIlxuICAgICAgICBbdGVybV09XCJ0ZXJtXCJcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdE1hdGNoKCRldmVudCwgbWF0Y2gpXCJcbiAgICAgICAgW25nQ2xhc3NdPVwieyBhY3RpdmU6IGlzQWN0aXZlKG1hdGNoKSB9XCJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwic2VsZWN0QWN0aXZlKG1hdGNoKVwiXG4gICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJwcmVzZWxlY3RlZChtYXRjaClcIlxuICAgICAgPlxuICAgICAgPC9lbnRpdHktcGlja2VyLXJlc3VsdD5cbiAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgbWF0Y2hlcy5sZW5ndGggPiAwXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgPC9ub3ZvLWxpc3Q+XG4gICAgPHAgY2xhc3M9XCJwaWNrZXItZXJyb3JcIiAqbmdJZj1cImhhc0Vycm9yXCI+e3sgbGFiZWxzLnBpY2tlckVycm9yIH19PC9wPlxuICAgIDxwIGNsYXNzPVwicGlja2VyLW51bGwtcmVzdWx0c1wiICpuZ0lmPVwiaGFzTm9uRXJyb3JNZXNzYWdlICYmIHRlcm0gIT09ICcnXCI+e3sgbGFiZWxzLnBpY2tlckVtcHR5IH19PC9wPlxuICAgIDxwIGNsYXNzPVwicGlja2VyLW51bGwtcmVzdWx0c1wiICpuZ0lmPVwiaGFzTm9uRXJyb3JNZXNzYWdlICYmIHRlcm0gPT09ICcnXCI+e3sgbGFiZWxzLnBpY2tlclRleHRGaWVsZEVtcHR5IH19PC9wPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlQaWNrZXJSZXN1bHRzIGV4dGVuZHMgQmFzZVBpY2tlclJlc3VsdHMge1xuICBAT3V0cHV0KClcbiAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1lbnQsIHJlZik7XG4gIH1cblxuICBnZXQgaGFzTm9uRXJyb3JNZXNzYWdlKCkge1xuICAgIHJldHVybiAhdGhpcy5pc0xvYWRpbmcgJiYgIXRoaXMubWF0Y2hlcy5sZW5ndGggJiYgIXRoaXMuaGFzRXJyb3I7XG4gIH1cblxuICBnZXRMaXN0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignbm92by1saXN0Jyk7XG4gIH1cblxuICBzZWxlY3RNYXRjaChldmVudD86IGFueSwgaXRlbT86IGFueSkge1xuICAgIHRoaXMuc2VsZWN0Lm5leHQoaXRlbSk7XG4gICAgcmV0dXJuIHN1cGVyLnNlbGVjdE1hdGNoKGV2ZW50LCBpdGVtKTtcbiAgfVxufVxuIl19