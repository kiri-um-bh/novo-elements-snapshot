// NG2
import { Component, ElementRef, ChangeDetectorRef, HostBinding } from '@angular/core';
// App
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import { NovoLabelService } from '../../../../services/novo-label-service';
export class SkillsSpecialtyPickerResults extends BasePickerResults {
    constructor(element, labels, ref) {
        super(element, ref);
        this.element = element;
        this.labels = labels;
        this.active = true;
        this.limitedTo = false;
        this.limit = 200;
    }
    getListElement() {
        return this.element.nativeElement.querySelector('novo-list');
    }
    /**
     * @name structureArray
     * @param collection - the data once getData resolves it
     *
     * @description This function structures an array of nodes into an array of objects with a
     * 'name' field by default.
     */
    structureArray(collection) {
        let data = collection;
        if (collection.hasOwnProperty('data')) {
            this.limitedTo = collection.limitedTo200;
            this.total = collection.total;
            data = collection.data;
        }
        else if (data.length > this.limit) {
            this.limitedTo = true;
            this.total = data.length;
            data = data.slice(0, this.limit);
        }
        return super.structureArray(data);
    }
}
SkillsSpecialtyPickerResults.decorators = [
    { type: Component, args: [{
                selector: 'skill-specialty-picker-results',
                template: `
    <section class="picker-loading" *ngIf="isLoading && !matches?.length"><novo-loading theme="line"></novo-loading></section>
    <novo-list *ngIf="matches.length > 0" direction="vertical">
      <novo-list-item
        *ngFor="let match of matches"
        (click)="selectMatch($event)"
        [class.active]="match === activeMatch"
        (mouseenter)="selectActive(match)"
        [class.disabled]="preselected(match)"
      >
        <item-content>
          <h6><span [innerHtml]="highlight(match.label, term)"></span></h6>
          <div class="category">
            <i class="bhi-category-tags"></i
            ><span [innerHtml]="highlight(match.data.categories || match.data.parentCategory.name, term)"></span>
          </div>
        </item-content>
      </novo-list-item>
      <novo-list-item *ngIf="limitedTo"
        ><div>{{ labels.showingXofXResults(limit, total) }}</div></novo-list-item
      >
      <novo-loading theme="line" *ngIf="isLoading && matches.length > 0"></novo-loading>
    </novo-list>
    <p class="picker-error" *ngIf="hasError">{{ labels.pickerError }}</p>
    <p class="picker-null" *ngIf="!isLoading && !matches.length && !hasError">{{ labels.pickerEmpty }}</p>
  `
            },] }
];
SkillsSpecialtyPickerResults.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoLabelService },
    { type: ChangeDetectorRef }
];
SkillsSpecialtyPickerResults.propDecorators = {
    active: [{ type: HostBinding, args: ['class.active',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2tpbGxzU3BlY2lhbHR5UGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL3NraWxscy1waWNrZXItcmVzdWx0cy9Ta2lsbHNTcGVjaWFsdHlQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEYsTUFBTTtBQUNOLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBK0IzRSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsaUJBQWlCO0lBT2pFLFlBQW1CLE9BQW1CLEVBQVMsTUFBd0IsRUFBRSxHQUFzQjtRQUM3RixLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBREgsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBTHZFLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixVQUFLLEdBQVcsR0FBRyxDQUFDO0lBS3BCLENBQUM7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGNBQWMsQ0FBQyxVQUFlO1FBQzVCLElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUN0QixJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUM5QixJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztTQUN4QjthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7OztZQS9ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJUO2FBQ0Y7OztZQWpDbUIsVUFBVTtZQUdyQixnQkFBZ0I7WUFITyxpQkFBaUI7OztxQkFtQzlDLFdBQVcsU0FBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQXBwXG5pbXBvcnQgeyBCYXNlUGlja2VyUmVzdWx0cyB9IGZyb20gJy4uL2Jhc2UtcGlja2VyLXJlc3VsdHMvQmFzZVBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NraWxsLXNwZWNpYWx0eS1waWNrZXItcmVzdWx0cycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJwaWNrZXItbG9hZGluZ1wiICpuZ0lmPVwiaXNMb2FkaW5nICYmICFtYXRjaGVzPy5sZW5ndGhcIj48bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiPjwvbm92by1sb2FkaW5nPjwvc2VjdGlvbj5cbiAgICA8bm92by1saXN0ICpuZ0lmPVwibWF0Y2hlcy5sZW5ndGggPiAwXCIgZGlyZWN0aW9uPVwidmVydGljYWxcIj5cbiAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAqbmdGb3I9XCJsZXQgbWF0Y2ggb2YgbWF0Y2hlc1wiXG4gICAgICAgIChjbGljayk9XCJzZWxlY3RNYXRjaCgkZXZlbnQpXCJcbiAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJtYXRjaCA9PT0gYWN0aXZlTWF0Y2hcIlxuICAgICAgICAobW91c2VlbnRlcik9XCJzZWxlY3RBY3RpdmUobWF0Y2gpXCJcbiAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cInByZXNlbGVjdGVkKG1hdGNoKVwiXG4gICAgICA+XG4gICAgICAgIDxpdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgPGg2PjxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmxhYmVsLCB0ZXJtKVwiPjwvc3Bhbj48L2g2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktY2F0ZWdvcnktdGFnc1wiPjwvaVxuICAgICAgICAgICAgPjxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmRhdGEuY2F0ZWdvcmllcyB8fCBtYXRjaC5kYXRhLnBhcmVudENhdGVnb3J5Lm5hbWUsIHRlcm0pXCI+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2l0ZW0tY29udGVudD5cbiAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICA8bm92by1saXN0LWl0ZW0gKm5nSWY9XCJsaW1pdGVkVG9cIlxuICAgICAgICA+PGRpdj57eyBsYWJlbHMuc2hvd2luZ1hvZlhSZXN1bHRzKGxpbWl0LCB0b3RhbCkgfX08L2Rpdj48L25vdm8tbGlzdC1pdGVtXG4gICAgICA+XG4gICAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiICpuZ0lmPVwiaXNMb2FkaW5nICYmIG1hdGNoZXMubGVuZ3RoID4gMFwiPjwvbm92by1sb2FkaW5nPlxuICAgIDwvbm92by1saXN0PlxuICAgIDxwIGNsYXNzPVwicGlja2VyLWVycm9yXCIgKm5nSWY9XCJoYXNFcnJvclwiPnt7IGxhYmVscy5waWNrZXJFcnJvciB9fTwvcD5cbiAgICA8cCBjbGFzcz1cInBpY2tlci1udWxsXCIgKm5nSWY9XCIhaXNMb2FkaW5nICYmICFtYXRjaGVzLmxlbmd0aCAmJiAhaGFzRXJyb3JcIj57eyBsYWJlbHMucGlja2VyRW1wdHkgfX08L3A+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFNraWxsc1NwZWNpYWx0eVBpY2tlclJlc3VsdHMgZXh0ZW5kcyBCYXNlUGlja2VyUmVzdWx0cyB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgYWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcbiAgbGltaXRlZFRvOiBib29sZWFuID0gZmFsc2U7XG4gIGxpbWl0OiBudW1iZXIgPSAyMDA7XG4gIHRvdGFsOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50LCByZWYpO1xuICB9XG5cbiAgZ2V0TGlzdEVsZW1lbnQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignbm92by1saXN0Jyk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc3RydWN0dXJlQXJyYXlcbiAgICogQHBhcmFtIGNvbGxlY3Rpb24gLSB0aGUgZGF0YSBvbmNlIGdldERhdGEgcmVzb2x2ZXMgaXRcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gc3RydWN0dXJlcyBhbiBhcnJheSBvZiBub2RlcyBpbnRvIGFuIGFycmF5IG9mIG9iamVjdHMgd2l0aCBhXG4gICAqICduYW1lJyBmaWVsZCBieSBkZWZhdWx0LlxuICAgKi9cbiAgc3RydWN0dXJlQXJyYXkoY29sbGVjdGlvbjogYW55KTogYW55IHtcbiAgICBsZXQgZGF0YSA9IGNvbGxlY3Rpb247XG4gICAgaWYgKGNvbGxlY3Rpb24uaGFzT3duUHJvcGVydHkoJ2RhdGEnKSkge1xuICAgICAgdGhpcy5saW1pdGVkVG8gPSBjb2xsZWN0aW9uLmxpbWl0ZWRUbzIwMDtcbiAgICAgIHRoaXMudG90YWwgPSBjb2xsZWN0aW9uLnRvdGFsO1xuICAgICAgZGF0YSA9IGNvbGxlY3Rpb24uZGF0YTtcbiAgICB9IGVsc2UgaWYgKGRhdGEubGVuZ3RoID4gdGhpcy5saW1pdCkge1xuICAgICAgdGhpcy5saW1pdGVkVG8gPSB0cnVlO1xuICAgICAgdGhpcy50b3RhbCA9IGRhdGEubGVuZ3RoO1xuICAgICAgZGF0YSA9IGRhdGEuc2xpY2UoMCwgdGhpcy5saW1pdCk7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5zdHJ1Y3R1cmVBcnJheShkYXRhKTtcbiAgfVxufVxuIl19