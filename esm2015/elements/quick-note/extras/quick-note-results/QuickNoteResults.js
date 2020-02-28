/**
 * @fileoverview added by tsickle
 * Generated from: elements/quick-note/extras/quick-note-results/QuickNoteResults.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, ElementRef, ChangeDetectorRef } from '@angular/core';
// Vendor
import { from } from 'rxjs';
// APP
import { Helpers } from '../../../../utils/Helpers';
import { PickerResults } from '../../../picker/extras/picker-results/PickerResults';
import { NovoLabelService } from '../../../../services/novo-label-service';
export class QuickNoteResults extends PickerResults {
    /**
     * @param {?} element
     * @param {?} labels
     * @param {?} ref
     */
    constructor(element, labels, ref) {
        super(element, labels, ref);
        this.labels = labels;
        // Mode that the quick note is in for tagging
        this.taggingMode = '';
    }
    /**
     * @return {?}
     */
    get term() {
        return this._term;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set term(value) {
        this._term = value.searchTerm;
        this.taggingMode = value.taggingMode;
        this.hasError = false;
        this.isLoading = true;
        this.search(value, this.taggingMode).subscribe((/**
         * @param {?} results
         * @return {?}
         */
        (results) => {
            this.matches = this.isStatic ? this.filterData(results) : results;
            this.isLoading = false;
        }), (/**
         * @return {?}
         */
        () => {
            this.hasError = true;
            this.isLoading = false;
        }));
    }
    /**
     * @param {?} term
     * @param {?} taggingMode
     * @return {?}
     */
    search(term, taggingMode) {
        /** @type {?} */
        const searchCall = this.config.options[taggingMode];
        return from(new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            // Check if there is match data
            if (searchCall) {
                // Resolve the data
                if (Array.isArray(searchCall)) {
                    this.isStatic = true;
                    // Arrays are returned immediately
                    resolve(this.structureArray(searchCall));
                }
                else if ((searchCall.hasOwnProperty('reject') && searchCall.hasOwnProperty('resolve')) ||
                    Object.getPrototypeOf(searchCall).hasOwnProperty('then')) {
                    this.isStatic = false;
                    // Promises (ES6 or Deferred) are resolved whenever they resolve
                    searchCall.then(this.structureArray.bind(this)).then(resolve, reject);
                }
                else if (typeof searchCall === 'function') {
                    this.isStatic = false;
                    // Promises (ES6 or Deferred) are resolved whenever they resolve
                    searchCall(term)
                        .then(this.structureArray.bind(this))
                        .then(resolve, reject);
                }
                else {
                    // All other kinds of data are rejected
                    reject('The data provided is not an array or a promise');
                    throw new Error('The data provided is not an array or a promise');
                }
            }
            else {
                // No data gets rejected
                reject('error');
            }
        })));
    }
    /**
     * \@name structureArray
     * \@description This function structures an array of nodes into an array of objects with a
     * 'name' field by default.
     * @param {?} collection - the data once getData resolves it
     *
     * @return {?}
     */
    structureArray(collection) {
        if (collection && (typeof collection[0] === 'string' || typeof collection[0] === 'number')) {
            return collection.map((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                return {
                    value: item,
                    label: item,
                };
            }));
        }
        return collection.map((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            /** @type {?} */
            const value = this.config.field ? data[this.config.field[this.taggingMode]] : data.value || data;
            /** @type {?} */
            const label = this.config.format ? Helpers.interpolate(this.config.format[this.taggingMode], data) : data.label || String(value);
            return { value, label, data };
        }));
    }
    /**
     * \@name selectMatch
     * \@description
     * @param {?} event
     *
     * @return {?}
     */
    selectMatch(event) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        /** @type {?} */
        const selected = this.activeMatch;
        if (selected) {
            this.parent.onSelected(this.taggingMode, selected);
            this.parent.hideResults();
        }
        return false;
    }
}
QuickNoteResults.decorators = [
    { type: Component, args: [{
                selector: 'quick-note-results',
                host: {
                    class: 'active',
                },
                template: `
        <novo-loading theme="line" *ngIf="isLoading && !matches.length"></novo-loading>
        <novo-list *ngIf="matches.length > 0">
            <novo-list-item
                *ngFor="let match of matches"
                (click)="selectMatch($event)"
                [class.active]="match===activeMatch"
                (mouseenter)="selectActive(match)">
                <item-content>
                    <p [innerHtml]="highlight(match.label, term)"></p>
                </item-content>
            </novo-list-item>
        </novo-list>
        <p class="picker-error" *ngIf="hasError">{{ labels.quickNoteError }}</p>
        <p class="picker-null" *ngIf="!isLoading && !matches.length && !hasError">{{ labels.quickNoteEmpty }}</p>
    `
            }] }
];
/** @nocollapse */
QuickNoteResults.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoLabelService },
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    QuickNoteResults.prototype.taggingMode;
    /** @type {?} */
    QuickNoteResults.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tOb3RlUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9xdWljay1ub3RlL2V4dHJhcy9xdWljay1ub3RlLXJlc3VsdHMvUXVpY2tOb3RlUmVzdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFekUsT0FBTyxFQUFFLElBQUksRUFBYyxNQUFNLE1BQU0sQ0FBQzs7QUFFeEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQXdCM0UsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGFBQWE7Ozs7OztJQUlqRCxZQUFZLE9BQW1CLEVBQVMsTUFBd0IsRUFBRSxHQUFzQjtRQUN0RixLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQURVLFdBQU0sR0FBTixNQUFNLENBQWtCOztRQUZoRSxnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUl6QixDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsSUFBSSxJQUFJLENBQUMsS0FBVTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxF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Z0JBQWdCO1lBTk8saUJBQWlCOzs7O0lBZ0MvQyx1Q0FBeUI7O0lBRVEsa0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBWZW5kb3JcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgUGlja2VyUmVzdWx0cyB9IGZyb20gJy4uLy4uLy4uL3BpY2tlci9leHRyYXMvcGlja2VyLXJlc3VsdHMvUGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncXVpY2stbm90ZS1yZXN1bHRzJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYWN0aXZlJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5vdm8tbG9hZGluZyB0aGVtZT1cImxpbmVcIiAqbmdJZj1cImlzTG9hZGluZyAmJiAhbWF0Y2hlcy5sZW5ndGhcIj48L25vdm8tbG9hZGluZz5cbiAgICAgICAgPG5vdm8tbGlzdCAqbmdJZj1cIm1hdGNoZXMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgPG5vdm8tbGlzdC1pdGVtXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG1hdGNoIG9mIG1hdGNoZXNcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RNYXRjaCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIm1hdGNoPT09YWN0aXZlTWF0Y2hcIlxuICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cInNlbGVjdEFjdGl2ZShtYXRjaClcIj5cbiAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8cCBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5sYWJlbCwgdGVybSlcIj48L3A+XG4gICAgICAgICAgICAgICAgPC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICA8L25vdm8tbGlzdD5cbiAgICAgICAgPHAgY2xhc3M9XCJwaWNrZXItZXJyb3JcIiAqbmdJZj1cImhhc0Vycm9yXCI+e3sgbGFiZWxzLnF1aWNrTm90ZUVycm9yIH19PC9wPlxuICAgICAgICA8cCBjbGFzcz1cInBpY2tlci1udWxsXCIgKm5nSWY9XCIhaXNMb2FkaW5nICYmICFtYXRjaGVzLmxlbmd0aCAmJiAhaGFzRXJyb3JcIj57eyBsYWJlbHMucXVpY2tOb3RlRW1wdHkgfX08L3A+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUXVpY2tOb3RlUmVzdWx0cyBleHRlbmRzIFBpY2tlclJlc3VsdHMge1xuICAvLyBNb2RlIHRoYXQgdGhlIHF1aWNrIG5vdGUgaXMgaW4gZm9yIHRhZ2dpbmdcbiAgdGFnZ2luZ01vZGU6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50LCBsYWJlbHMsIHJlZik7XG4gIH1cblxuICBnZXQgdGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVybTtcbiAgfVxuXG4gIHNldCB0ZXJtKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl90ZXJtID0gdmFsdWUuc2VhcmNoVGVybTtcbiAgICB0aGlzLnRhZ2dpbmdNb2RlID0gdmFsdWUudGFnZ2luZ01vZGU7XG4gICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnNlYXJjaCh2YWx1ZSwgdGhpcy50YWdnaW5nTW9kZSkuc3Vic2NyaWJlKFxuICAgICAgKHJlc3VsdHMpID0+IHtcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5pc1N0YXRpYyA/IHRoaXMuZmlsdGVyRGF0YShyZXN1bHRzKSA6IHJlc3VsdHM7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHNlYXJjaCh0ZXJtOiBzdHJpbmcsIHRhZ2dpbmdNb2RlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBzZWFyY2hDYWxsID0gdGhpcy5jb25maWcub3B0aW9uc1t0YWdnaW5nTW9kZV07XG4gICAgcmV0dXJuIGZyb20oXG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIG1hdGNoIGRhdGFcbiAgICAgICAgaWYgKHNlYXJjaENhbGwpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIHRoZSBkYXRhXG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2VhcmNoQ2FsbCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdGF0aWMgPSB0cnVlO1xuICAgICAgICAgICAgLy8gQXJyYXlzIGFyZSByZXR1cm5lZCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnN0cnVjdHVyZUFycmF5KHNlYXJjaENhbGwpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgKHNlYXJjaENhbGwuaGFzT3duUHJvcGVydHkoJ3JlamVjdCcpICYmIHNlYXJjaENhbGwuaGFzT3duUHJvcGVydHkoJ3Jlc29sdmUnKSkgfHxcbiAgICAgICAgICAgIE9iamVjdC5nZXRQcm90b3R5cGVPZihzZWFyY2hDYWxsKS5oYXNPd25Qcm9wZXJ0eSgndGhlbicpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RhdGljID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBQcm9taXNlcyAoRVM2IG9yIERlZmVycmVkKSBhcmUgcmVzb2x2ZWQgd2hlbmV2ZXIgdGhleSByZXNvbHZlXG4gICAgICAgICAgICBzZWFyY2hDYWxsLnRoZW4odGhpcy5zdHJ1Y3R1cmVBcnJheS5iaW5kKHRoaXMpKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VhcmNoQ2FsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5pc1N0YXRpYyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gUHJvbWlzZXMgKEVTNiBvciBEZWZlcnJlZCkgYXJlIHJlc29sdmVkIHdoZW5ldmVyIHRoZXkgcmVzb2x2ZVxuICAgICAgICAgICAgc2VhcmNoQ2FsbCh0ZXJtKVxuICAgICAgICAgICAgICAudGhlbih0aGlzLnN0cnVjdHVyZUFycmF5LmJpbmQodGhpcykpXG4gICAgICAgICAgICAgIC50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFsbCBvdGhlciBraW5kcyBvZiBkYXRhIGFyZSByZWplY3RlZFxuICAgICAgICAgICAgcmVqZWN0KCdUaGUgZGF0YSBwcm92aWRlZCBpcyBub3QgYW4gYXJyYXkgb3IgYSBwcm9taXNlJyk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBkYXRhIHByb3ZpZGVkIGlzIG5vdCBhbiBhcnJheSBvciBhIHByb21pc2UnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTm8gZGF0YSBnZXRzIHJlamVjdGVkXG4gICAgICAgICAgcmVqZWN0KCdlcnJvcicpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHN0cnVjdHVyZUFycmF5XG4gICAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gdGhlIGRhdGEgb25jZSBnZXREYXRhIHJlc29sdmVzIGl0XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIHN0cnVjdHVyZXMgYW4gYXJyYXkgb2Ygbm9kZXMgaW50byBhbiBhcnJheSBvZiBvYmplY3RzIHdpdGggYVxuICAgKiAnbmFtZScgZmllbGQgYnkgZGVmYXVsdC5cbiAgICovXG4gIHN0cnVjdHVyZUFycmF5KGNvbGxlY3Rpb246IEFycmF5PGFueT4pIHtcbiAgICBpZiAoY29sbGVjdGlvbiAmJiAodHlwZW9mIGNvbGxlY3Rpb25bMF0gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjb2xsZWN0aW9uWzBdID09PSAnbnVtYmVyJykpIHtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBpdGVtLFxuICAgICAgICAgIGxhYmVsOiBpdGVtLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjb2xsZWN0aW9uLm1hcCgoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbmZpZy5maWVsZCA/IGRhdGFbdGhpcy5jb25maWcuZmllbGRbdGhpcy50YWdnaW5nTW9kZV1dIDogZGF0YS52YWx1ZSB8fCBkYXRhO1xuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmNvbmZpZy5mb3JtYXQgPyBIZWxwZXJzLmludGVycG9sYXRlKHRoaXMuY29uZmlnLmZvcm1hdFt0aGlzLnRhZ2dpbmdNb2RlXSwgZGF0YSkgOiBkYXRhLmxhYmVsIHx8IFN0cmluZyh2YWx1ZSk7XG4gICAgICByZXR1cm4geyB2YWx1ZSwgbGFiZWwsIGRhdGEgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZWxlY3RNYXRjaFxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqL1xuICBzZWxlY3RNYXRjaChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5hY3RpdmVNYXRjaDtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMucGFyZW50Lm9uU2VsZWN0ZWQodGhpcy50YWdnaW5nTW9kZSwgc2VsZWN0ZWQpO1xuICAgICAgdGhpcy5wYXJlbnQuaGlkZVJlc3VsdHMoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=