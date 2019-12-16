/**
 * @fileoverview added by tsickle
 * Generated from: elements/picker/extras/checklist-picker-results/ChecklistPickerResults.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return from(new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
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
        })));
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
            this.filteredMatches = matches.map((/**
             * @param {?} section
             * @return {?}
             */
            (section) => {
                /** @type {?} */
                let items = section.originalData.filter((/**
                 * @param {?} match
                 * @return {?}
                 */
                (match) => {
                    return ~String(match.label)
                        .toLowerCase()
                        .indexOf(this.term.toLowerCase());
                }));
                section.data = items;
                return section;
            }), this);
            return this.filteredMatches;
        }
        else if (this.term === '') {
            matches.forEach((/**
             * @param {?} section
             * @return {?}
             */
            (section) => {
                section.data = section.originalData;
            }));
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
          *ngFor="let match of section.data; let i = index"
          [ngClass]="{ checked: match.checked }"
          (click)="selectMatch($event, match)"
          [class.active]="match === activeMatch"
          (mouseenter)="selectActive(match)"
        >
          <label>
            <i
              [ngClass]="{
                'bhi-checkbox-empty': !match.checked,
                'bhi-checkbox-filled': match.checked,
                'bhi-checkbox-indeterminate': match.indeterminate
              }"
            ></i>
            {{ match.label }}
          </label>
        </li>
      </span>
    </ul>
    <p class="picker-error" *ngIf="hasError">{{ labels.pickerError }}</p>
    <p class="picker-null-results" *ngIf="!isLoading && !matches.length && !hasError && term !== ''">{{ labels.pickerEmpty }}</p>
  `
            }] }
];
/** @nocollapse */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tsaXN0UGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL2NoZWNrbGlzdC1waWNrZXItcmVzdWx0cy9DaGVja2xpc3RQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7O0FBRTNFLE9BQU8sRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7Ozs7OztBQXlDeEMsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGlCQUFpQjs7Ozs7O0lBRzNELFlBQVksT0FBbUIsRUFBUyxNQUF3QixFQUFFLEdBQXNCO1FBQ3RGLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFEa0IsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFFaEUsQ0FBQzs7OztJQUVELE1BQU07O1lBQ0EsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNqQywrQkFBK0I7UUFDL0IsT0FBTyxJQUFJLENBQ1QsSUFBSSxPQUFPOzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzlCLCtCQUErQjtZQUMvQixJQUFJLE9BQU8sRUFBRTtnQkFDWCxtQkFBbUI7Z0JBQ25CLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3JCLGtDQUFrQztvQkFDbEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNsQjtxQkFBTTtvQkFDTCx1Q0FBdUM7b0JBQ3ZDLE1BQU0sQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO29CQUN6RCxNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7aUJBQ25FO2FBQ0Y7aUJBQU07Z0JBQ0wsd0JBQXdCO2dCQUN4QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakI7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7O0lBU0QsVUFBVSxDQUFDLE9BQU87UUFDaEIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxHQUFHOzs7O1lBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTs7b0JBQ3pDLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU07Ozs7Z0JBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDaEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO3lCQUN4QixXQUFXLEVBQUU7eUJBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztnQkFDdEMsQ0FBQyxFQUFDO2dCQUNGLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7WUFDVCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDN0I7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDMUIsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ3RDLENBQUMsRUFBQyxDQUFDO1lBQ0gsT0FBTyxPQUFPLENBQUM7U0FDaEI7UUFDRCxrQ0FBa0M7UUFDbEMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7Ozs7O0lBU0QsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJO1FBQ3JCLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUM5Qjs7WUFFRyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVc7UUFDL0IsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBckhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLHVCQUF1QjtpQkFDL0I7Z0JBQ0QsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQlQ7YUFDRjs7OztZQTlDbUIsVUFBVTtZQUlyQixnQkFBZ0I7WUFKTyxpQkFBaUI7Ozs7SUFnRC9DLGlEQUFxQjs7SUFFWSx3Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgQmFzZVBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWU6IENoZWNrbGlzdFBpY2tlclJlc3VsdHNcbiAqXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBpcyB0aGUgYWN0dWFsIGxpc3Qgb2YgbWF0Y2hlcyB0aGF0IGdldHMgaW5qZWN0ZWQgaW50byB0aGUgRE9NLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGVja2xpc3QtcGlja2VyLXJlc3VsdHMnLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhY3RpdmUgcGlja2VyLXJlc3VsdHMnLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgIW1hdGNoZXMubGVuZ3RoXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgPHVsICpuZ0lmPVwibWF0Y2hlcy5sZW5ndGggPiAwXCI+XG4gICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgc2VjdGlvbiBvZiBtYXRjaGVzOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgIDxsaSBjbGFzcz1cImhlYWRlciBjYXB0aW9uXCIgKm5nSWY9XCJzZWN0aW9uLmRhdGEubGVuZ3RoID4gMFwiPnt7IHNlY3Rpb24ubGFiZWwgfHwgc2VjdGlvbi50eXBlIH19PC9saT5cbiAgICAgICAgPGxpXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG1hdGNoIG9mIHNlY3Rpb24uZGF0YTsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwieyBjaGVja2VkOiBtYXRjaC5jaGVja2VkIH1cIlxuICAgICAgICAgIChjbGljayk9XCJzZWxlY3RNYXRjaCgkZXZlbnQsIG1hdGNoKVwiXG4gICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJtYXRjaCA9PT0gYWN0aXZlTWF0Y2hcIlxuICAgICAgICAgIChtb3VzZWVudGVyKT1cInNlbGVjdEFjdGl2ZShtYXRjaClcIlxuICAgICAgICA+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICdiaGktY2hlY2tib3gtZW1wdHknOiAhbWF0Y2guY2hlY2tlZCxcbiAgICAgICAgICAgICAgICAnYmhpLWNoZWNrYm94LWZpbGxlZCc6IG1hdGNoLmNoZWNrZWQsXG4gICAgICAgICAgICAgICAgJ2JoaS1jaGVja2JveC1pbmRldGVybWluYXRlJzogbWF0Y2guaW5kZXRlcm1pbmF0ZVxuICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICB7eyBtYXRjaC5sYWJlbCB9fVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3NwYW4+XG4gICAgPC91bD5cbiAgICA8cCBjbGFzcz1cInBpY2tlci1lcnJvclwiICpuZ0lmPVwiaGFzRXJyb3JcIj57eyBsYWJlbHMucGlja2VyRXJyb3IgfX08L3A+XG4gICAgPHAgY2xhc3M9XCJwaWNrZXItbnVsbC1yZXN1bHRzXCIgKm5nSWY9XCIhaXNMb2FkaW5nICYmICFtYXRjaGVzLmxlbmd0aCAmJiAhaGFzRXJyb3IgJiYgdGVybSAhPT0gJydcIj57eyBsYWJlbHMucGlja2VyRW1wdHkgfX08L3A+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrbGlzdFBpY2tlclJlc3VsdHMgZXh0ZW5kcyBCYXNlUGlja2VyUmVzdWx0cyB7XG4gIGZpbHRlcmVkTWF0Y2hlczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50LCByZWYpO1xuICB9XG5cbiAgc2VhcmNoKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLmNvbmZpZy5vcHRpb25zO1xuICAgIC8vIG9ubHkgc2V0IHRoaXMgdGhlIGZpcnN0IHRpbWVcbiAgICByZXR1cm4gZnJvbShcbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgbWF0Y2ggZGF0YVxuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgIC8vIFJlc29sdmUgdGhlIGRhdGFcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICAgICAgdGhpcy5pc1N0YXRpYyA9IHRydWU7XG4gICAgICAgICAgICAvLyBBcnJheXMgYXJlIHJldHVybmVkIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICByZXNvbHZlKG9wdGlvbnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBbGwgb3RoZXIga2luZHMgb2YgZGF0YSBhcmUgcmVqZWN0ZWRcbiAgICAgICAgICAgIHJlamVjdCgnVGhlIGRhdGEgcHJvdmlkZWQgaXMgbm90IGFuIGFycmF5IG9yIGEgcHJvbWlzZScpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZGF0YSBwcm92aWRlZCBpcyBub3QgYW4gYXJyYXkgb3IgYSBwcm9taXNlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5vIGRhdGEgZ2V0cyByZWplY3RlZFxuICAgICAgICAgIHJlamVjdCgnZXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBmaWx0ZXJEYXRhPVxuICAgKiBAcGFyYW0gbWF0Y2hlcyAtIENvbGxlY3Rpb24gb2Ygb2JqZWN0cz1cbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gbG9vcHMgdGhyb3VnaCB0aGUgcGlja2VyIG9wdGlvbnMgYW5kIGNyZWF0ZXMgYSBmaWx0ZXJlZCBsaXN0IG9mIG9iamVjdHMgdGhhdCBjb250YWluXG4gICAqIHRoZSBuZXdTZWFyY2guXG4gICAqL1xuICBmaWx0ZXJEYXRhKG1hdGNoZXMpOiBhbnkge1xuICAgIGlmICh0aGlzLnRlcm0gJiYgbWF0Y2hlcykge1xuICAgICAgdGhpcy5maWx0ZXJlZE1hdGNoZXMgPSBtYXRjaGVzLm1hcCgoc2VjdGlvbikgPT4ge1xuICAgICAgICBsZXQgaXRlbXMgPSBzZWN0aW9uLm9yaWdpbmFsRGF0YS5maWx0ZXIoKG1hdGNoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIH5TdHJpbmcobWF0Y2gubGFiZWwpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgLmluZGV4T2YodGhpcy50ZXJtLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VjdGlvbi5kYXRhID0gaXRlbXM7XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgICAgfSwgdGhpcyk7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJlZE1hdGNoZXM7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRlcm0gPT09ICcnKSB7XG4gICAgICBtYXRjaGVzLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgICAgc2VjdGlvbi5kYXRhID0gc2VjdGlvbi5vcmlnaW5hbERhdGE7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgIH1cbiAgICAvLyBTaG93IG5vIHJlY2VudCByZXN1bHRzIHRlbXBsYXRlXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2VsZWN0TWF0Y2hcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBwYXJhbSBpdGVtXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKi9cbiAgc2VsZWN0TWF0Y2goZXZlbnQsIGl0ZW0pIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgaWYgKGl0ZW0uaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgaXRlbS5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICBpdGVtLmNoZWNrZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkO1xuICAgIH1cblxuICAgIGxldCBzZWxlY3RlZCA9IHRoaXMuYWN0aXZlTWF0Y2g7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnBhcmVudC52YWx1ZSA9IHNlbGVjdGVkO1xuICAgIH1cbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==