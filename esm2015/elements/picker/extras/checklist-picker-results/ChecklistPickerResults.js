// NG2
import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
// Vendor
import { from } from 'rxjs';
import { NovoLabelService } from '../../../../services/novo-label-service';
import { Helpers } from '../../../../utils/Helpers';
// APP
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/novo-label-service";
import * as i2 from "@angular/common";
import * as i3 from "../../../loading/Loading";
function ChecklistPickerResults_novo_loading_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-loading", 4);
} }
function ChecklistPickerResults_ul_1_span_1_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const section_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(section_r5.label || section_r5.type);
} }
const _c0 = function (a0) { return { checked: a0 }; };
const _c1 = function (a0, a1, a2) { return { "bhi-checkbox-empty": a0, "bhi-checkbox-filled": a1, "bhi-checkbox-indeterminate": a2 }; };
function ChecklistPickerResults_ul_1_span_1_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 9);
    i0.ɵɵlistener("click", function ChecklistPickerResults_ul_1_span_1_li_2_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r13); const match_r10 = ctx.$implicit; const ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12.selectMatch($event, match_r10); })("mouseenter", function ChecklistPickerResults_ul_1_span_1_li_2_Template_li_mouseenter_0_listener() { i0.ɵɵrestoreView(_r13); const match_r10 = ctx.$implicit; const ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.selectActive(match_r10); });
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵelement(2, "i", 10);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const match_r10 = ctx.$implicit;
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("active", match_r10 === ctx_r8.activeMatch);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c0, match_r10.checked));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(7, _c1, !match_r10.checked, match_r10.checked, match_r10.indeterminate));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", match_r10.label, " ");
} }
function ChecklistPickerResults_ul_1_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, ChecklistPickerResults_ul_1_span_1_li_1_Template, 2, 1, "li", 6);
    i0.ɵɵtemplate(2, ChecklistPickerResults_ul_1_span_1_li_2_Template, 4, 11, "li", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const section_r5 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", section_r5.data.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", section_r5.data);
} }
function ChecklistPickerResults_ul_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul");
    i0.ɵɵtemplate(1, ChecklistPickerResults_ul_1_span_1_Template, 3, 2, "span", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.matches);
} }
function ChecklistPickerResults_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.labels.pickerError);
} }
function ChecklistPickerResults_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.labels.pickerEmpty);
} }
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
                    return ~String(match.label).toLowerCase().indexOf(this.term.toLowerCase());
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
ChecklistPickerResults.ɵfac = function ChecklistPickerResults_Factory(t) { return new (t || ChecklistPickerResults)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
ChecklistPickerResults.ɵcmp = i0.ɵɵdefineComponent({ type: ChecklistPickerResults, selectors: [["checklist-picker-results"]], hostAttrs: [1, "active", "picker-results"], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 4, consts: [["theme", "line", 4, "ngIf"], [4, "ngIf"], ["class", "picker-error", 4, "ngIf"], ["class", "picker-null-results", 4, "ngIf"], ["theme", "line"], [4, "ngFor", "ngForOf"], ["class", "header caption", 4, "ngIf"], [3, "ngClass", "active", "click", "mouseenter", 4, "ngFor", "ngForOf"], [1, "header", "caption"], [3, "ngClass", "click", "mouseenter"], [3, "ngClass"], [1, "picker-error"], [1, "picker-null-results"]], template: function ChecklistPickerResults_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ChecklistPickerResults_novo_loading_0_Template, 1, 0, "novo-loading", 0);
        i0.ɵɵtemplate(1, ChecklistPickerResults_ul_1_Template, 2, 1, "ul", 1);
        i0.ɵɵtemplate(2, ChecklistPickerResults_p_2_Template, 2, 1, "p", 2);
        i0.ɵɵtemplate(3, ChecklistPickerResults_p_3_Template, 2, 1, "p", 3);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isLoading && !ctx.matches.length);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.matches.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasError);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isLoading && !ctx.matches.length && !ctx.hasError && ctx.term !== "");
    } }, directives: [i2.NgIf, i3.NovoLoadingElement, i2.NgForOf, i2.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChecklistPickerResults, [{
        type: Component,
        args: [{
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
  `,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NovoLabelService }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tsaXN0UGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3BpY2tlci9leHRyYXMvY2hlY2tsaXN0LXBpY2tlci1yZXN1bHRzL0NoZWNrbGlzdFBpY2tlclJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLFNBQVM7QUFDVCxPQUFPLEVBQUUsSUFBSSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRCxNQUFNO0FBQ04sT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7OztJQVd6RSxrQ0FBK0U7OztJQUczRSw2QkFBMkQ7SUFBQSxZQUFtQztJQUFBLGlCQUFLOzs7SUFBeEMsZUFBbUM7SUFBbkMseURBQW1DOzs7Ozs7SUFDOUYsNkJBT0U7SUFKQSw4UEFBb0MsOE9BQUE7SUFJcEMsNkJBQ0U7SUFBQSx3QkFNSztJQUNMLFlBQ0Y7SUFBQSxpQkFBUTtJQUNWLGlCQUFLOzs7O0lBYkgsMERBQXNDO0lBRnRDLHVFQUFzQztJQU9sQyxlQUlFO0lBSkYsb0hBSUU7SUFFSixlQUNGO0lBREUsZ0RBQ0Y7OztJQWxCSiw0QkFDRTtJQUFBLGlGQUEyRDtJQUMzRCxrRkFPRTtJQVdKLGlCQUFPOzs7SUFuQnNCLGVBQStCO0lBQS9CLGlEQUErQjtJQUV4RCxlQUFpRDtJQUFqRCx5Q0FBaUQ7OztJQUp2RCwwQkFDRTtJQUFBLDhFQUNFO0lBb0JKLGlCQUFLOzs7SUFyQkcs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LElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbEMsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7NEZBekVVLHNCQUFzQjsyREFBdEIsc0JBQXNCO1FBNUIvQix5RkFBZ0U7UUFDaEUscUVBQ0U7UUFzQkYsbUVBQXlDO1FBQ3pDLG1FQUFpRzs7UUF6QnRFLDJEQUFvQztRQUMzRCxlQUEwQjtRQUExQiw2Q0FBMEI7UUF1Qk4sZUFBZ0I7UUFBaEIsbUNBQWdCO1FBQ1QsZUFBaUU7UUFBakUsZ0dBQWlFOztrREFHdkYsc0JBQXNCO2NBbENsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSx1QkFBdUI7aUJBQy9CO2dCQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJUO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG4vLyBBUFBcbmltcG9ydCB7IEJhc2VQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi4vYmFzZS1waWNrZXItcmVzdWx0cy9CYXNlUGlja2VyUmVzdWx0cyc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFRoaXMgaXMgdGhlIGFjdHVhbCBsaXN0IG9mIG1hdGNoZXMgdGhhdCBnZXRzIGluamVjdGVkIGludG8gdGhlIERPTS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hlY2tsaXN0LXBpY2tlci1yZXN1bHRzJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYWN0aXZlIHBpY2tlci1yZXN1bHRzJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiICpuZ0lmPVwiaXNMb2FkaW5nICYmICFtYXRjaGVzLmxlbmd0aFwiPjwvbm92by1sb2FkaW5nPlxuICAgIDx1bCAqbmdJZj1cIm1hdGNoZXMubGVuZ3RoID4gMFwiPlxuICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IHNlY3Rpb24gb2YgbWF0Y2hlczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJoZWFkZXIgY2FwdGlvblwiICpuZ0lmPVwic2VjdGlvbi5kYXRhLmxlbmd0aCA+IDBcIj57eyBzZWN0aW9uLmxhYmVsIHx8IHNlY3Rpb24udHlwZSB9fTwvbGk+XG4gICAgICAgIDxsaVxuICAgICAgICAgICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBzZWN0aW9uLmRhdGE7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInsgY2hlY2tlZDogbWF0Y2guY2hlY2tlZCB9XCJcbiAgICAgICAgICAoY2xpY2spPVwic2VsZWN0TWF0Y2goJGV2ZW50LCBtYXRjaClcIlxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwibWF0Y2ggPT09IGFjdGl2ZU1hdGNoXCJcbiAgICAgICAgICAobW91c2VlbnRlcik9XCJzZWxlY3RBY3RpdmUobWF0Y2gpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgICAnYmhpLWNoZWNrYm94LWVtcHR5JzogIW1hdGNoLmNoZWNrZWQsXG4gICAgICAgICAgICAgICAgJ2JoaS1jaGVja2JveC1maWxsZWQnOiBtYXRjaC5jaGVja2VkLFxuICAgICAgICAgICAgICAgICdiaGktY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSc6IG1hdGNoLmluZGV0ZXJtaW5hdGVcbiAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAge3sgbWF0Y2gubGFiZWwgfX1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2xpPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdWw+XG4gICAgPHAgY2xhc3M9XCJwaWNrZXItZXJyb3JcIiAqbmdJZj1cImhhc0Vycm9yXCI+e3sgbGFiZWxzLnBpY2tlckVycm9yIH19PC9wPlxuICAgIDxwIGNsYXNzPVwicGlja2VyLW51bGwtcmVzdWx0c1wiICpuZ0lmPVwiIWlzTG9hZGluZyAmJiAhbWF0Y2hlcy5sZW5ndGggJiYgIWhhc0Vycm9yICYmIHRlcm0gIT09ICcnXCI+e3sgbGFiZWxzLnBpY2tlckVtcHR5IH19PC9wPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2xpc3RQaWNrZXJSZXN1bHRzIGV4dGVuZHMgQmFzZVBpY2tlclJlc3VsdHMge1xuICBmaWx0ZXJlZE1hdGNoZXM6IGFueTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgcmVmKTtcbiAgfVxuXG4gIHNlYXJjaCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmNvbmZpZy5vcHRpb25zO1xuICAgIC8vIG9ubHkgc2V0IHRoaXMgdGhlIGZpcnN0IHRpbWVcbiAgICByZXR1cm4gZnJvbShcbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgbWF0Y2ggZGF0YVxuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgIC8vIFJlc29sdmUgdGhlIGRhdGFcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICAgICAgdGhpcy5pc1N0YXRpYyA9IHRydWU7XG4gICAgICAgICAgICAvLyBBcnJheXMgYXJlIHJldHVybmVkIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICByZXNvbHZlKG9wdGlvbnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBbGwgb3RoZXIga2luZHMgb2YgZGF0YSBhcmUgcmVqZWN0ZWRcbiAgICAgICAgICAgIHJlamVjdCgnVGhlIGRhdGEgcHJvdmlkZWQgaXMgbm90IGFuIGFycmF5IG9yIGEgcHJvbWlzZScpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZGF0YSBwcm92aWRlZCBpcyBub3QgYW4gYXJyYXkgb3IgYSBwcm9taXNlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5vIGRhdGEgZ2V0cyByZWplY3RlZFxuICAgICAgICAgIHJlamVjdCgnZXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gbWF0Y2hlcyAtIENvbGxlY3Rpb24gb2Ygb2JqZWN0cz1cbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gbG9vcHMgdGhyb3VnaCB0aGUgcGlja2VyIG9wdGlvbnMgYW5kIGNyZWF0ZXMgYSBmaWx0ZXJlZCBsaXN0IG9mIG9iamVjdHMgdGhhdCBjb250YWluXG4gICAqIHRoZSBuZXdTZWFyY2guXG4gICAqL1xuICBmaWx0ZXJEYXRhKG1hdGNoZXMpOiBhbnkge1xuICAgIGlmICh0aGlzLnRlcm0gJiYgbWF0Y2hlcykge1xuICAgICAgdGhpcy5maWx0ZXJlZE1hdGNoZXMgPSBtYXRjaGVzLm1hcCgoc2VjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHNlY3Rpb24ub3JpZ2luYWxEYXRhLmZpbHRlcigobWF0Y2gpID0+IHtcbiAgICAgICAgICByZXR1cm4gflN0cmluZyhtYXRjaC5sYWJlbCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMudGVybS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlY3Rpb24uZGF0YSA9IGl0ZW1zO1xuICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICAgIH0sIHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRNYXRjaGVzO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJtID09PSAnJykge1xuICAgICAgbWF0Y2hlcy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICAgIHNlY3Rpb24uZGF0YSA9IHNlY3Rpb24ub3JpZ2luYWxEYXRhO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICB9XG4gICAgLy8gU2hvdyBubyByZWNlbnQgcmVzdWx0cyB0ZW1wbGF0ZVxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc2VsZWN0TWF0Y2goZXZlbnQsIGl0ZW0pIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgaWYgKGl0ZW0uaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgaXRlbS5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICBpdGVtLmNoZWNrZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5hY3RpdmVNYXRjaDtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMucGFyZW50LnZhbHVlID0gc2VsZWN0ZWQ7XG4gICAgfVxuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19