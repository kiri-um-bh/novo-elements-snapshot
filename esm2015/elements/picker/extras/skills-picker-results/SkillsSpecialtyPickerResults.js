/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, ElementRef, ChangeDetectorRef, HostBinding } from '@angular/core';
// App
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import { NovoLabelService } from '../../../../services/novo-label-service';
export class SkillsSpecialtyPickerResults extends BasePickerResults {
    /**
     * @param {?} element
     * @param {?} labels
     * @param {?} ref
     */
    constructor(element, labels, ref) {
        super(element, ref);
        this.element = element;
        this.labels = labels;
        this.active = true;
        this.limitedTo = false;
        this.limit = 200;
    }
    /**
     * @return {?}
     */
    getListElement() {
        return this.element.nativeElement.querySelector('novo-list');
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
        /** @type {?} */
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
            }] }
];
/** @nocollapse */
SkillsSpecialtyPickerResults.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoLabelService },
    { type: ChangeDetectorRef }
];
SkillsSpecialtyPickerResults.propDecorators = {
    active: [{ type: HostBinding, args: ['class.active',] }]
};
if (false) {
    /** @type {?} */
    SkillsSpecialtyPickerResults.prototype.active;
    /** @type {?} */
    SkillsSpecialtyPickerResults.prototype.limitedTo;
    /** @type {?} */
    SkillsSpecialtyPickerResults.prototype.limit;
    /** @type {?} */
    SkillsSpecialtyPickerResults.prototype.total;
    /** @type {?} */
    SkillsSpecialtyPickerResults.prototype.element;
    /** @type {?} */
    SkillsSpecialtyPickerResults.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2tpbGxzU3BlY2lhbHR5UGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL3NraWxscy1waWNrZXItcmVzdWx0cy9Ta2lsbHNTcGVjaWFsdHlQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV0RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQStCM0UsTUFBTSxPQUFPLDRCQUE2QixTQUFRLGlCQUFpQjs7Ozs7O0lBT2pFLFlBQW1CLE9BQW1CLEVBQVMsTUFBd0IsRUFBRSxHQUFzQjtRQUM3RixLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBREgsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBTHZFLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixVQUFLLEdBQVcsR0FBRyxDQUFDO0lBS3BCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7Ozs7O0lBU0QsY0FBYyxDQUFDLFVBQWU7O1lBQ3hCLElBQUksR0FBRyxVQUFVO1FBQ3JCLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUM7WUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7UUFDRCxPQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBL0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5QlQ7YUFDRjs7OztZQWpDbUIsVUFBVTtZQUdyQixnQkFBZ0I7WUFITyxpQkFBaUI7OztxQkFtQzlDLFdBQVcsU0FBQyxjQUFjOzs7O0lBQTNCLDhDQUN1Qjs7SUFDdkIsaURBQTJCOztJQUMzQiw2Q0FBb0I7O0lBQ3BCLDZDQUFjOztJQUVGLCtDQUEwQjs7SUFBRSw4Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBcHBcbmltcG9ydCB7IEJhc2VQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi4vYmFzZS1waWNrZXItcmVzdWx0cy9CYXNlUGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2tpbGwtc3BlY2lhbHR5LXBpY2tlci1yZXN1bHRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2VjdGlvbiBjbGFzcz1cInBpY2tlci1sb2FkaW5nXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgIW1hdGNoZXM/Lmxlbmd0aFwiPjxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCI+PC9ub3ZvLWxvYWRpbmc+PC9zZWN0aW9uPlxuICAgIDxub3ZvLWxpc3QgKm5nSWY9XCJtYXRjaGVzLmxlbmd0aCA+IDBcIiBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgPG5vdm8tbGlzdC1pdGVtXG4gICAgICAgICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBtYXRjaGVzXCJcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdE1hdGNoKCRldmVudClcIlxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIm1hdGNoID09PSBhY3RpdmVNYXRjaFwiXG4gICAgICAgIChtb3VzZWVudGVyKT1cInNlbGVjdEFjdGl2ZShtYXRjaClcIlxuICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwicHJlc2VsZWN0ZWQobWF0Y2gpXCJcbiAgICAgID5cbiAgICAgICAgPGl0ZW0tY29udGVudD5cbiAgICAgICAgICA8aDY+PHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2gubGFiZWwsIHRlcm0pXCI+PC9zcGFuPjwvaDY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jYXRlZ29yeS10YWdzXCI+PC9pXG4gICAgICAgICAgICA+PHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5jYXRlZ29yaWVzIHx8IG1hdGNoLmRhdGEucGFyZW50Q2F0ZWdvcnkubmFtZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgIDxub3ZvLWxpc3QtaXRlbSAqbmdJZj1cImxpbWl0ZWRUb1wiXG4gICAgICAgID48ZGl2Pnt7IGxhYmVscy5zaG93aW5nWG9mWFJlc3VsdHMobGltaXQsIHRvdGFsKSB9fTwvZGl2Pjwvbm92by1saXN0LWl0ZW1cbiAgICAgID5cbiAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgbWF0Y2hlcy5sZW5ndGggPiAwXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgPC9ub3ZvLWxpc3Q+XG4gICAgPHAgY2xhc3M9XCJwaWNrZXItZXJyb3JcIiAqbmdJZj1cImhhc0Vycm9yXCI+e3sgbGFiZWxzLnBpY2tlckVycm9yIH19PC9wPlxuICAgIDxwIGNsYXNzPVwicGlja2VyLW51bGxcIiAqbmdJZj1cIiFpc0xvYWRpbmcgJiYgIW1hdGNoZXMubGVuZ3RoICYmICFoYXNFcnJvclwiPnt7IGxhYmVscy5waWNrZXJFbXB0eSB9fTwvcD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgU2tpbGxzU3BlY2lhbHR5UGlja2VyUmVzdWx0cyBleHRlbmRzIEJhc2VQaWNrZXJSZXN1bHRzIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBhY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xuICBsaW1pdGVkVG86IGJvb2xlYW4gPSBmYWxzZTtcbiAgbGltaXQ6IG51bWJlciA9IDIwMDtcbiAgdG90YWw6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1lbnQsIHJlZik7XG4gIH1cblxuICBnZXRMaXN0RWxlbWVudCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLWxpc3QnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzdHJ1Y3R1cmVBcnJheVxuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIHRoZSBkYXRhIG9uY2UgZ2V0RGF0YSByZXNvbHZlcyBpdFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzdHJ1Y3R1cmVzIGFuIGFycmF5IG9mIG5vZGVzIGludG8gYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIGFcbiAgICogJ25hbWUnIGZpZWxkIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBzdHJ1Y3R1cmVBcnJheShjb2xsZWN0aW9uOiBhbnkpOiBhbnkge1xuICAgIGxldCBkYXRhID0gY29sbGVjdGlvbjtcbiAgICBpZiAoY29sbGVjdGlvbi5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpKSB7XG4gICAgICB0aGlzLmxpbWl0ZWRUbyA9IGNvbGxlY3Rpb24ubGltaXRlZFRvMjAwO1xuICAgICAgdGhpcy50b3RhbCA9IGNvbGxlY3Rpb24udG90YWw7XG4gICAgICBkYXRhID0gY29sbGVjdGlvbi5kYXRhO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5sZW5ndGggPiB0aGlzLmxpbWl0KSB7XG4gICAgICB0aGlzLmxpbWl0ZWRUbyA9IHRydWU7XG4gICAgICB0aGlzLnRvdGFsID0gZGF0YS5sZW5ndGg7XG4gICAgICBkYXRhID0gZGF0YS5zbGljZSgwLCB0aGlzLmxpbWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLnN0cnVjdHVyZUFycmF5KGRhdGEpO1xuICB9XG59XG4iXX0=