/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Component, ElementRef, ChangeDetectorRef } from '@angular/core';
// APP
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import { Helpers } from '../../../../utils/Helpers';
import { NovoLabelService } from '../../../../services/novo-label-service';
// Vendor
import { from } from 'rxjs';
/**
 * \@name: ChecklistPickerResults
 *
 * \@description This is the actual list of matches that gets injected into the DOM.
 */
export class ChecklistPickerResults extends BasePickerResults {
    /**
     * @param {?} element
     * @param {?} labels
     * @param {?} ref
     */
    constructor(element, labels, ref) {
        super(element, ref);
        this.labels = labels;
    }
    /**
     * @return {?}
     */
    search() {
        /** @type {?} */
        let options = this.config.options;
        // only set this the first time
        return from(new Promise((resolve, reject) => {
            // Check if there is match data
            if (options) {
                // Resolve the data
                if (Array.isArray(options)) {
                    this.isStatic = true;
                    // Arrays are returned immediately
                    resolve(options);
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
        }));
    }
    /**
     * \@name filterData=
     * \@description This function loops through the picker options and creates a filtered list of objects that contain
     * the newSearch.
     * @param {?} matches - Collection of objects=
     *
     * @return {?}
     */
    filterData(matches) {
        if (this.term && matches) {
            this.filteredMatches = matches.map((section) => {
                /** @type {?} */
                let items = section.originalData.filter((match) => {
                    return ~String(match.label)
                        .toLowerCase()
                        .indexOf(this.term.toLowerCase());
                });
                section.data = items;
                return section;
            }, this);
            return this.filteredMatches;
        }
        else if (this.term === '') {
            matches.forEach((section) => {
                section.data = section.originalData;
            });
            return matches;
        }
        // Show no recent results template
        return matches;
    }
    /**
     * \@name selectMatch
     * \@description
     * @param {?} event
     * @param {?} item
     *
     * @return {?}
     */
    selectMatch(event, item) {
        Helpers.swallowEvent(event);
        if (item.indeterminate) {
            item.indeterminate = false;
            item.checked = true;
        }
        else {
            item.checked = !item.checked;
        }
        /** @type {?} */
        let selected = this.activeMatch;
        if (selected) {
            this.parent.value = selected;
        }
        this.ref.markForCheck();
        return false;
    }
}
ChecklistPickerResults.decorators = [
    { type: Component, args: [{
                selector: 'checklist-picker-results',
                host: {
                    class: 'active picker-results',
                },
                template: `
        <novo-loading theme="line" *ngIf="isLoading && !matches.length"></novo-loading>
        <ul *ngIf="matches.length > 0">
            <span *ngFor="let section of matches; let i = index">
                <li class="header caption" *ngIf="section.data.length > 0">{{ section.label || section.type }}</li>
                <li
                    *ngFor="let match of section.data; let i = index" [ngClass]="{checked: match.checked}"
                    (click)="selectMatch($event, match)"
                    [class.active]="match === activeMatch"
                    (mouseenter)="selectActive(match)">
                    <label>
                        <i [ngClass]="{'bhi-checkbox-empty': !match.checked, 'bhi-checkbox-filled': match.checked, 'bhi-checkbox-indeterminate': match.indeterminate }"></i>
                        {{match.label}}
                    </label>
                </li>
            </span>
        </ul>
        <p class="picker-error" *ngIf="hasError">{{ labels.pickerError }}</p>
        <p class="picker-null-results" *ngIf="!isLoading && !matches.length && !hasError">{{ labels.pickerEmpty }}</p>
    `
            }] }
];
ChecklistPickerResults.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoLabelService },
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    ChecklistPickerResults.prototype.filteredMatches;
    /** @type {?} */
    ChecklistPickerResults.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tsaXN0UGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL2NoZWNrbGlzdC1waWNrZXItcmVzdWx0cy9DaGVja2xpc3RQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRXpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7QUFFM0UsT0FBTyxFQUFFLElBQUksRUFBYyxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0FBaUN4QyxNQUFNLDZCQUE4QixTQUFRLGlCQUFpQjs7Ozs7O0lBRzNELFlBQVksT0FBbUIsRUFBUyxNQUF3QixFQUFFLEdBQXNCO1FBQ3RGLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFEa0IsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFFaEUsQ0FBQzs7OztJQUVELE1BQU07O1lBQ0EsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNqQywrQkFBK0I7UUFDL0IsT0FBTyxJQUFJLENBQ1QsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDOUIsK0JBQStCO1lBQy9CLElBQUksT0FBTyxFQUFFO2dCQUNYLG1CQUFtQjtnQkFDbkIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDckIsa0NBQWtDO29CQUNsQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ2xCO3FCQUFNO29CQUNMLHVDQUF1QztvQkFDdkMsTUFBTSxDQUFDLGdEQUFnRCxDQUFDLENBQUM7b0JBQ3pELE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQztpQkFDbkU7YUFDRjtpQkFBTTtnQkFDTCx3QkFBd0I7Z0JBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqQjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7Ozs7SUFTRCxVQUFVLENBQUMsT0FBTztRQUNoQixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFOztvQkFDekMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ2hELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzt5QkFDeEIsV0FBVyxFQUFFO3lCQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQztnQkFDRixPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDckIsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQzdCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUMzQixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQzFCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sT0FBTyxDQUFDO1NBQ2hCO1FBQ0Qsa0NBQWtDO1FBQ2xDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7Ozs7OztJQVNELFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSTtRQUNyQixPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDOUI7O1lBRUcsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXO1FBQy9CLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQTdHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSx1QkFBdUI7aUJBQy9CO2dCQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1CUDthQUNKOzs7WUF0Q21CLFVBQVU7WUFJckIsZ0JBQWdCO1lBSk8saUJBQWlCOzs7O0lBd0MvQyxpREFBcUI7O0lBRVksd0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEJhc2VQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi4vYmFzZS1waWNrZXItcmVzdWx0cy9CYXNlUGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBuYW1lOiBDaGVja2xpc3RQaWNrZXJSZXN1bHRzXG4gKlxuICogQGRlc2NyaXB0aW9uIFRoaXMgaXMgdGhlIGFjdHVhbCBsaXN0IG9mIG1hdGNoZXMgdGhhdCBnZXRzIGluamVjdGVkIGludG8gdGhlIERPTS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hlY2tsaXN0LXBpY2tlci1yZXN1bHRzJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYWN0aXZlIHBpY2tlci1yZXN1bHRzJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5vdm8tbG9hZGluZyB0aGVtZT1cImxpbmVcIiAqbmdJZj1cImlzTG9hZGluZyAmJiAhbWF0Y2hlcy5sZW5ndGhcIj48L25vdm8tbG9hZGluZz5cbiAgICAgICAgPHVsICpuZ0lmPVwibWF0Y2hlcy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgc2VjdGlvbiBvZiBtYXRjaGVzOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGVyIGNhcHRpb25cIiAqbmdJZj1cInNlY3Rpb24uZGF0YS5sZW5ndGggPiAwXCI+e3sgc2VjdGlvbi5sYWJlbCB8fCBzZWN0aW9uLnR5cGUgfX08L2xpPlxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgbWF0Y2ggb2Ygc2VjdGlvbi5kYXRhOyBsZXQgaSA9IGluZGV4XCIgW25nQ2xhc3NdPVwie2NoZWNrZWQ6IG1hdGNoLmNoZWNrZWR9XCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdE1hdGNoKCRldmVudCwgbWF0Y2gpXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJtYXRjaCA9PT0gYWN0aXZlTWF0Y2hcIlxuICAgICAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJzZWxlY3RBY3RpdmUobWF0Y2gpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIFtuZ0NsYXNzXT1cInsnYmhpLWNoZWNrYm94LWVtcHR5JzogIW1hdGNoLmNoZWNrZWQsICdiaGktY2hlY2tib3gtZmlsbGVkJzogbWF0Y2guY2hlY2tlZCwgJ2JoaS1jaGVja2JveC1pbmRldGVybWluYXRlJzogbWF0Y2guaW5kZXRlcm1pbmF0ZSB9XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAge3ttYXRjaC5sYWJlbH19XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHAgY2xhc3M9XCJwaWNrZXItZXJyb3JcIiAqbmdJZj1cImhhc0Vycm9yXCI+e3sgbGFiZWxzLnBpY2tlckVycm9yIH19PC9wPlxuICAgICAgICA8cCBjbGFzcz1cInBpY2tlci1udWxsLXJlc3VsdHNcIiAqbmdJZj1cIiFpc0xvYWRpbmcgJiYgIW1hdGNoZXMubGVuZ3RoICYmICFoYXNFcnJvclwiPnt7IGxhYmVscy5waWNrZXJFbXB0eSB9fTwvcD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2xpc3RQaWNrZXJSZXN1bHRzIGV4dGVuZHMgQmFzZVBpY2tlclJlc3VsdHMge1xuICBmaWx0ZXJlZE1hdGNoZXM6IGFueTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgcmVmKTtcbiAgfVxuXG4gIHNlYXJjaCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBvcHRpb25zID0gdGhpcy5jb25maWcub3B0aW9ucztcbiAgICAvLyBvbmx5IHNldCB0aGlzIHRoZSBmaXJzdCB0aW1lXG4gICAgcmV0dXJuIGZyb20oXG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIG1hdGNoIGRhdGFcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIHRoZSBkYXRhXG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdGF0aWMgPSB0cnVlO1xuICAgICAgICAgICAgLy8gQXJyYXlzIGFyZSByZXR1cm5lZCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgcmVzb2x2ZShvcHRpb25zKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQWxsIG90aGVyIGtpbmRzIG9mIGRhdGEgYXJlIHJlamVjdGVkXG4gICAgICAgICAgICByZWplY3QoJ1RoZSBkYXRhIHByb3ZpZGVkIGlzIG5vdCBhbiBhcnJheSBvciBhIHByb21pc2UnKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGRhdGEgcHJvdmlkZWQgaXMgbm90IGFuIGFycmF5IG9yIGEgcHJvbWlzZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBObyBkYXRhIGdldHMgcmVqZWN0ZWRcbiAgICAgICAgICByZWplY3QoJ2Vycm9yJyk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZmlsdGVyRGF0YT1cbiAgICogQHBhcmFtIG1hdGNoZXMgLSBDb2xsZWN0aW9uIG9mIG9iamVjdHM9XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIGxvb3BzIHRocm91Z2ggdGhlIHBpY2tlciBvcHRpb25zIGFuZCBjcmVhdGVzIGEgZmlsdGVyZWQgbGlzdCBvZiBvYmplY3RzIHRoYXQgY29udGFpblxuICAgKiB0aGUgbmV3U2VhcmNoLlxuICAgKi9cbiAgZmlsdGVyRGF0YShtYXRjaGVzKTogYW55IHtcbiAgICBpZiAodGhpcy50ZXJtICYmIG1hdGNoZXMpIHtcbiAgICAgIHRoaXMuZmlsdGVyZWRNYXRjaGVzID0gbWF0Y2hlcy5tYXAoKHNlY3Rpb24pID0+IHtcbiAgICAgICAgbGV0IGl0ZW1zID0gc2VjdGlvbi5vcmlnaW5hbERhdGEuZmlsdGVyKChtYXRjaCkgPT4ge1xuICAgICAgICAgIHJldHVybiB+U3RyaW5nKG1hdGNoLmxhYmVsKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5pbmRleE9mKHRoaXMudGVybS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlY3Rpb24uZGF0YSA9IGl0ZW1zO1xuICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICAgIH0sIHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRNYXRjaGVzO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJtID09PSAnJykge1xuICAgICAgbWF0Y2hlcy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICAgIHNlY3Rpb24uZGF0YSA9IHNlY3Rpb24ub3JpZ2luYWxEYXRhO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICB9XG4gICAgLy8gU2hvdyBubyByZWNlbnQgcmVzdWx0cyB0ZW1wbGF0ZVxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNlbGVjdE1hdGNoXG4gICAqIEBwYXJhbSBldmVudFxuICAgKiBAcGFyYW0gaXRlbVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICovXG4gIHNlbGVjdE1hdGNoKGV2ZW50LCBpdGVtKSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIGlmIChpdGVtLmluZGV0ZXJtaW5hdGUpIHtcbiAgICAgIGl0ZW0uaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgaXRlbS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDtcbiAgICB9XG5cbiAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLmFjdGl2ZU1hdGNoO1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdGhpcy5wYXJlbnQudmFsdWUgPSBzZWxlY3RlZDtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=