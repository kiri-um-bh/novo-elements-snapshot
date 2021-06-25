// NG2
import { Component, ElementRef, ChangeDetectorRef } from '@angular/core';
// APP
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import { Helpers } from '../../../../utils/Helpers';
import { NovoLabelService } from '../../../../services/novo-label-service';
// Vendor
import { from } from 'rxjs';
/**
 * @description This is the actual list of matches that gets injected into the DOM.
 */
export class ChecklistPickerResults extends BasePickerResults {
    constructor(element, labels, ref) {
        super(element, ref);
        this.labels = labels;
    }
    search() {
        const options = this.config.options;
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
     * @param matches - Collection of objects=
     *
     * @description This function loops through the picker options and creates a filtered list of objects that contain
     * the newSearch.
     */
    filterData(matches) {
        if (this.term && matches) {
            this.filteredMatches = matches.map((section) => {
                const items = section.originalData.filter((match) => {
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
    selectMatch(event, item) {
        Helpers.swallowEvent(event);
        if (item.indeterminate) {
            item.indeterminate = false;
            item.checked = true;
        }
        else {
            item.checked = !item.checked;
        }
        const selected = this.activeMatch;
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
            },] }
];
ChecklistPickerResults.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoLabelService },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tsaXN0UGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL2NoZWNrbGlzdC1waWNrZXItcmVzdWx0cy9DaGVja2xpc3RQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxNQUFNO0FBQ04sT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLFNBQVM7QUFDVCxPQUFPLEVBQUUsSUFBSSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRXhDOztHQUVHO0FBbUNILE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxpQkFBaUI7SUFHM0QsWUFBWSxPQUFtQixFQUFTLE1BQXdCLEVBQUUsR0FBc0I7UUFDdEYsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQURrQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUVoRSxDQUFDO0lBRUQsTUFBTTtRQUNKLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3BDLCtCQUErQjtRQUMvQixPQUFPLElBQUksQ0FDVCxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUM5QiwrQkFBK0I7WUFDL0IsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsbUJBQW1CO2dCQUNuQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNyQixrQ0FBa0M7b0JBQ2xDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDbEI7cUJBQU07b0JBQ0wsdUNBQXVDO29CQUN2QyxNQUFNLENBQUMsZ0RBQWdELENBQUMsQ0FBQztvQkFDekQsTUFBTSxJQUFJLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO2lCQUNuRTthQUNGO2lCQUFNO2dCQUNMLHdCQUF3QjtnQkFDeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2pCO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFVBQVUsQ0FBQyxPQUFPO1FBQ2hCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQzdDLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ2xELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzt5QkFDeEIsV0FBVyxFQUFFO3lCQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDVCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDN0I7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDMUIsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxPQUFPLENBQUM7U0FDaEI7UUFDRCxrQ0FBa0M7UUFDbEMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSTtRQUNyQixPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDOUI7UUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2xDLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQTdHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSx1QkFBdUI7aUJBQy9CO2dCQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJUO2FBQ0Y7OztZQTVDbUIsVUFBVTtZQUlyQixnQkFBZ0I7WUFKTyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgQmFzZVBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFRoaXMgaXMgdGhlIGFjdHVhbCBsaXN0IG9mIG1hdGNoZXMgdGhhdCBnZXRzIGluamVjdGVkIGludG8gdGhlIERPTS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hlY2tsaXN0LXBpY2tlci1yZXN1bHRzJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYWN0aXZlIHBpY2tlci1yZXN1bHRzJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiICpuZ0lmPVwiaXNMb2FkaW5nICYmICFtYXRjaGVzLmxlbmd0aFwiPjwvbm92by1sb2FkaW5nPlxuICAgIDx1bCAqbmdJZj1cIm1hdGNoZXMubGVuZ3RoID4gMFwiPlxuICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IHNlY3Rpb24gb2YgbWF0Y2hlczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJoZWFkZXIgY2FwdGlvblwiICpuZ0lmPVwic2VjdGlvbi5kYXRhLmxlbmd0aCA+IDBcIj57eyBzZWN0aW9uLmxhYmVsIHx8IHNlY3Rpb24udHlwZSB9fTwvbGk+XG4gICAgICAgIDxsaVxuICAgICAgICAgICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBzZWN0aW9uLmRhdGE7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInsgY2hlY2tlZDogbWF0Y2guY2hlY2tlZCB9XCJcbiAgICAgICAgICAoY2xpY2spPVwic2VsZWN0TWF0Y2goJGV2ZW50LCBtYXRjaClcIlxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwibWF0Y2ggPT09IGFjdGl2ZU1hdGNoXCJcbiAgICAgICAgICAobW91c2VlbnRlcik9XCJzZWxlY3RBY3RpdmUobWF0Y2gpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgICAnYmhpLWNoZWNrYm94LWVtcHR5JzogIW1hdGNoLmNoZWNrZWQsXG4gICAgICAgICAgICAgICAgJ2JoaS1jaGVja2JveC1maWxsZWQnOiBtYXRjaC5jaGVja2VkLFxuICAgICAgICAgICAgICAgICdiaGktY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSc6IG1hdGNoLmluZGV0ZXJtaW5hdGVcbiAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAge3sgbWF0Y2gubGFiZWwgfX1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2xpPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdWw+XG4gICAgPHAgY2xhc3M9XCJwaWNrZXItZXJyb3JcIiAqbmdJZj1cImhhc0Vycm9yXCI+e3sgbGFiZWxzLnBpY2tlckVycm9yIH19PC9wPlxuICAgIDxwIGNsYXNzPVwicGlja2VyLW51bGwtcmVzdWx0c1wiICpuZ0lmPVwiIWlzTG9hZGluZyAmJiAhbWF0Y2hlcy5sZW5ndGggJiYgIWhhc0Vycm9yICYmIHRlcm0gIT09ICcnXCI+e3sgbGFiZWxzLnBpY2tlckVtcHR5IH19PC9wPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2xpc3RQaWNrZXJSZXN1bHRzIGV4dGVuZHMgQmFzZVBpY2tlclJlc3VsdHMge1xuICBmaWx0ZXJlZE1hdGNoZXM6IGFueTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgcmVmKTtcbiAgfVxuXG4gIHNlYXJjaCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmNvbmZpZy5vcHRpb25zO1xuICAgIC8vIG9ubHkgc2V0IHRoaXMgdGhlIGZpcnN0IHRpbWVcbiAgICByZXR1cm4gZnJvbShcbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgbWF0Y2ggZGF0YVxuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgIC8vIFJlc29sdmUgdGhlIGRhdGFcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICAgICAgdGhpcy5pc1N0YXRpYyA9IHRydWU7XG4gICAgICAgICAgICAvLyBBcnJheXMgYXJlIHJldHVybmVkIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICByZXNvbHZlKG9wdGlvbnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBbGwgb3RoZXIga2luZHMgb2YgZGF0YSBhcmUgcmVqZWN0ZWRcbiAgICAgICAgICAgIHJlamVjdCgnVGhlIGRhdGEgcHJvdmlkZWQgaXMgbm90IGFuIGFycmF5IG9yIGEgcHJvbWlzZScpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZGF0YSBwcm92aWRlZCBpcyBub3QgYW4gYXJyYXkgb3IgYSBwcm9taXNlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5vIGRhdGEgZ2V0cyByZWplY3RlZFxuICAgICAgICAgIHJlamVjdCgnZXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gbWF0Y2hlcyAtIENvbGxlY3Rpb24gb2Ygb2JqZWN0cz1cbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gbG9vcHMgdGhyb3VnaCB0aGUgcGlja2VyIG9wdGlvbnMgYW5kIGNyZWF0ZXMgYSBmaWx0ZXJlZCBsaXN0IG9mIG9iamVjdHMgdGhhdCBjb250YWluXG4gICAqIHRoZSBuZXdTZWFyY2guXG4gICAqL1xuICBmaWx0ZXJEYXRhKG1hdGNoZXMpOiBhbnkge1xuICAgIGlmICh0aGlzLnRlcm0gJiYgbWF0Y2hlcykge1xuICAgICAgdGhpcy5maWx0ZXJlZE1hdGNoZXMgPSBtYXRjaGVzLm1hcCgoc2VjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHNlY3Rpb24ub3JpZ2luYWxEYXRhLmZpbHRlcigobWF0Y2gpID0+IHtcbiAgICAgICAgICByZXR1cm4gflN0cmluZyhtYXRjaC5sYWJlbClcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAuaW5kZXhPZih0aGlzLnRlcm0udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWN0aW9uLmRhdGEgPSBpdGVtcztcbiAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgICB9LCB0aGlzKTtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlcmVkTWF0Y2hlcztcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybSA9PT0gJycpIHtcbiAgICAgIG1hdGNoZXMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgICBzZWN0aW9uLmRhdGEgPSBzZWN0aW9uLm9yaWdpbmFsRGF0YTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1hdGNoZXM7XG4gICAgfVxuICAgIC8vIFNob3cgbm8gcmVjZW50IHJlc3VsdHMgdGVtcGxhdGVcbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHNlbGVjdE1hdGNoKGV2ZW50LCBpdGVtKSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIGlmIChpdGVtLmluZGV0ZXJtaW5hdGUpIHtcbiAgICAgIGl0ZW0uaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgaXRlbS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuYWN0aXZlTWF0Y2g7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnBhcmVudC52YWx1ZSA9IHNlbGVjdGVkO1xuICAgIH1cbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==