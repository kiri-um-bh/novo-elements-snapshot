// NG2
import { Component, ElementRef, ChangeDetectorRef } from '@angular/core';
// Vendor
import { from } from 'rxjs';
// APP
import { Helpers } from '../../../../utils/Helpers';
import { PickerResults } from '../../../picker/extras/picker-results/PickerResults';
import { NovoLabelService } from '../../../../services/novo-label-service';
export class QuickNoteResults extends PickerResults {
    constructor(element, labels, ref) {
        super(element, labels, ref);
        this.labels = labels;
        // Mode that the quick note is in for tagging
        this.taggingMode = '';
    }
    get term() {
        return this._term;
    }
    set term(value) {
        this._term = value.searchTerm;
        this.taggingMode = value.taggingMode;
        this.hasError = false;
        this.isLoading = true;
        this.search(value, this.taggingMode).subscribe((results) => {
            this.matches = this.isStatic ? this.filterData(results) : results;
            this.isLoading = false;
        }, () => {
            this.hasError = true;
            this.isLoading = false;
        });
    }
    search(term, taggingMode) {
        const searchCall = this.config.options[taggingMode];
        return from(new Promise((resolve, reject) => {
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
        }));
    }
    /**
     * @name structureArray
     * @param collection - the data once getData resolves it
     *
     * @description This function structures an array of nodes into an array of objects with a
     * 'name' field by default.
     */
    structureArray(collection) {
        if (collection && (typeof collection[0] === 'string' || typeof collection[0] === 'number')) {
            return collection.map((item) => {
                return {
                    value: item,
                    label: item,
                };
            });
        }
        return collection.map((data) => {
            const value = this.config.field ? data[this.config.field[this.taggingMode]] : data.value || data;
            const label = this.config.format ? Helpers.interpolate(this.config.format[this.taggingMode], data) : data.label || String(value);
            return { value, label, data };
        });
    }
    /**
     * @name selectMatch
     * @param event
     *
     * @description
     */
    selectMatch(event) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
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
            },] }
];
QuickNoteResults.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoLabelService },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tOb3RlUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9xdWljay1ub3RlL2V4dHJhcy9xdWljay1ub3RlLXJlc3VsdHMvUXVpY2tOb3RlUmVzdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsU0FBUztBQUNULE9BQU8sRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDeEMsTUFBTTtBQUNOLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUF3QjNFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxhQUFhO0lBSWpELFlBQVksT0FBbUIsRUFBUyxNQUF3QixFQUFFLEdBQXNCO1FBQ3RGLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRFUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFIaEUsNkNBQTZDO1FBQzdDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO0lBSXpCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDLEtBQVU7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtB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QUM5QixJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLFFBQVE7aUJBQ2hCO2dCQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0tBZVA7YUFDSjs7O1lBN0JtQixVQUFVO1lBTXJCLGdCQUFnQjtZQU5PLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IFBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi8uLi8uLi9waWNrZXIvZXh0cmFzL3BpY2tlci1yZXN1bHRzL1BpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3F1aWNrLW5vdGUtcmVzdWx0cycsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FjdGl2ZScsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgIW1hdGNoZXMubGVuZ3RoXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgIDxub3ZvLWxpc3QgKm5nSWY9XCJtYXRjaGVzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBtYXRjaGVzXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0TWF0Y2goJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJtYXRjaD09PWFjdGl2ZU1hdGNoXCJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJzZWxlY3RBY3RpdmUobWF0Y2gpXCI+XG4gICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPHAgW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2gubGFiZWwsIHRlcm0pXCI+PC9wPlxuICAgICAgICAgICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgICAgPC9ub3ZvLWxpc3Q+XG4gICAgICAgIDxwIGNsYXNzPVwicGlja2VyLWVycm9yXCIgKm5nSWY9XCJoYXNFcnJvclwiPnt7IGxhYmVscy5xdWlja05vdGVFcnJvciB9fTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJwaWNrZXItbnVsbFwiICpuZ0lmPVwiIWlzTG9hZGluZyAmJiAhbWF0Y2hlcy5sZW5ndGggJiYgIWhhc0Vycm9yXCI+e3sgbGFiZWxzLnF1aWNrTm90ZUVtcHR5IH19PC9wPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFF1aWNrTm90ZVJlc3VsdHMgZXh0ZW5kcyBQaWNrZXJSZXN1bHRzIHtcbiAgLy8gTW9kZSB0aGF0IHRoZSBxdWljayBub3RlIGlzIGluIGZvciB0YWdnaW5nXG4gIHRhZ2dpbmdNb2RlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgbGFiZWxzLCByZWYpO1xuICB9XG5cbiAgZ2V0IHRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rlcm07XG4gIH1cblxuICBzZXQgdGVybSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdGVybSA9IHZhbHVlLnNlYXJjaFRlcm07XG4gICAgdGhpcy50YWdnaW5nTW9kZSA9IHZhbHVlLnRhZ2dpbmdNb2RlO1xuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5zZWFyY2godmFsdWUsIHRoaXMudGFnZ2luZ01vZGUpLnN1YnNjcmliZShcbiAgICAgIChyZXN1bHRzKSA9PiB7XG4gICAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuaXNTdGF0aWMgPyB0aGlzLmZpbHRlckRhdGEocmVzdWx0cykgOiByZXN1bHRzO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBzZWFyY2godGVybTogc3RyaW5nLCB0YWdnaW5nTW9kZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3Qgc2VhcmNoQ2FsbCA9IHRoaXMuY29uZmlnLm9wdGlvbnNbdGFnZ2luZ01vZGVdO1xuICAgIHJldHVybiBmcm9tKFxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBtYXRjaCBkYXRhXG4gICAgICAgIGlmIChzZWFyY2hDYWxsKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSB0aGUgZGF0YVxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNlYXJjaENhbGwpKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RhdGljID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIEFycmF5cyBhcmUgcmV0dXJuZWQgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5zdHJ1Y3R1cmVBcnJheShzZWFyY2hDYWxsKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIChzZWFyY2hDYWxsLmhhc093blByb3BlcnR5KCdyZWplY3QnKSAmJiBzZWFyY2hDYWxsLmhhc093blByb3BlcnR5KCdyZXNvbHZlJykpIHx8XG4gICAgICAgICAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc2VhcmNoQ2FsbCkuaGFzT3duUHJvcGVydHkoJ3RoZW4nKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5pc1N0YXRpYyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gUHJvbWlzZXMgKEVTNiBvciBEZWZlcnJlZCkgYXJlIHJlc29sdmVkIHdoZW5ldmVyIHRoZXkgcmVzb2x2ZVxuICAgICAgICAgICAgc2VhcmNoQ2FsbC50aGVuKHRoaXMuc3RydWN0dXJlQXJyYXkuYmluZCh0aGlzKSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlYXJjaENhbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdGF0aWMgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIFByb21pc2VzIChFUzYgb3IgRGVmZXJyZWQpIGFyZSByZXNvbHZlZCB3aGVuZXZlciB0aGV5IHJlc29sdmVcbiAgICAgICAgICAgIHNlYXJjaENhbGwodGVybSlcbiAgICAgICAgICAgICAgLnRoZW4odGhpcy5zdHJ1Y3R1cmVBcnJheS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgICAudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBbGwgb3RoZXIga2luZHMgb2YgZGF0YSBhcmUgcmVqZWN0ZWRcbiAgICAgICAgICAgIHJlamVjdCgnVGhlIGRhdGEgcHJvdmlkZWQgaXMgbm90IGFuIGFycmF5IG9yIGEgcHJvbWlzZScpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZGF0YSBwcm92aWRlZCBpcyBub3QgYW4gYXJyYXkgb3IgYSBwcm9taXNlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5vIGRhdGEgZ2V0cyByZWplY3RlZFxuICAgICAgICAgIHJlamVjdCgnZXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzdHJ1Y3R1cmVBcnJheVxuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIHRoZSBkYXRhIG9uY2UgZ2V0RGF0YSByZXNvbHZlcyBpdFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzdHJ1Y3R1cmVzIGFuIGFycmF5IG9mIG5vZGVzIGludG8gYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIGFcbiAgICogJ25hbWUnIGZpZWxkIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBzdHJ1Y3R1cmVBcnJheShjb2xsZWN0aW9uOiBBcnJheTxhbnk+KSB7XG4gICAgaWYgKGNvbGxlY3Rpb24gJiYgKHR5cGVvZiBjb2xsZWN0aW9uWzBdID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY29sbGVjdGlvblswXSA9PT0gJ251bWJlcicpKSB7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogaXRlbSxcbiAgICAgICAgICBsYWJlbDogaXRlbSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY29sbGVjdGlvbi5tYXAoKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb25maWcuZmllbGQgPyBkYXRhW3RoaXMuY29uZmlnLmZpZWxkW3RoaXMudGFnZ2luZ01vZGVdXSA6IGRhdGEudmFsdWUgfHwgZGF0YTtcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5jb25maWcuZm9ybWF0ID8gSGVscGVycy5pbnRlcnBvbGF0ZSh0aGlzLmNvbmZpZy5mb3JtYXRbdGhpcy50YWdnaW5nTW9kZV0sIGRhdGEpIDogZGF0YS5sYWJlbCB8fCBTdHJpbmcodmFsdWUpO1xuICAgICAgcmV0dXJuIHsgdmFsdWUsIGxhYmVsLCBkYXRhIH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2VsZWN0TWF0Y2hcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKi9cbiAgc2VsZWN0TWF0Y2goZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuYWN0aXZlTWF0Y2g7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnBhcmVudC5vblNlbGVjdGVkKHRoaXMudGFnZ2luZ01vZGUsIHNlbGVjdGVkKTtcbiAgICAgIHRoaXMucGFyZW50LmhpZGVSZXN1bHRzKCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19