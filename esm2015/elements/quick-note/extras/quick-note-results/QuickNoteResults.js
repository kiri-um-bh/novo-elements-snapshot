// NG2
import { Component, ElementRef, ChangeDetectorRef } from '@angular/core';
// Vendor
import { from } from 'rxjs';
// APP
import { Helpers } from '../../../../utils/Helpers';
import { PickerResults } from '../../../picker/extras/picker-results/PickerResults';
import { NovoLabelService } from '../../../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/novo-label-service";
import * as i2 from "@angular/common";
import * as i3 from "../../../loading/Loading";
import * as i4 from "../../../list/List";
function QuickNoteResults_novo_loading_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-loading", 4);
} }
function QuickNoteResults_novo_list_1_novo_list_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 6);
    i0.ɵɵlistener("click", function QuickNoteResults_novo_list_1_novo_list_item_1_Template_novo_list_item_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.selectMatch($event); })("mouseenter", function QuickNoteResults_novo_list_1_novo_list_item_1_Template_novo_list_item_mouseenter_0_listener() { i0.ɵɵrestoreView(_r7); const match_r5 = ctx.$implicit; const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.selectActive(match_r5); });
    i0.ɵɵelementStart(1, "item-content");
    i0.ɵɵelement(2, "p", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const match_r5 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", match_r5 === ctx_r4.activeMatch);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r4.highlight(match_r5.label, ctx_r4.term), i0.ɵɵsanitizeHtml);
} }
function QuickNoteResults_novo_list_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-list");
    i0.ɵɵtemplate(1, QuickNoteResults_novo_list_1_novo_list_item_1_Template, 3, 3, "novo-list-item", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.matches);
} }
function QuickNoteResults_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.labels.quickNoteError);
} }
function QuickNoteResults_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.labels.quickNoteEmpty);
} }
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
QuickNoteResults.ɵfac = function QuickNoteResults_Factory(t) { return new (t || QuickNoteResults)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
QuickNoteResults.ɵcmp = i0.ɵɵdefineComponent({ type: QuickNoteResults, selectors: [["quick-note-results"]], hostAttrs: [1, "active"], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 4, consts: [["theme", "line", 4, "ngIf"], [4, "ngIf"], ["class", "picker-error", 4, "ngIf"], ["class", "picker-null", 4, "ngIf"], ["theme", "line"], [3, "active", "click", "mouseenter", 4, "ngFor", "ngForOf"], [3, "click", "mouseenter"], [3, "innerHtml"], [1, "picker-error"], [1, "picker-null"]], template: function QuickNoteResults_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, QuickNoteResults_novo_loading_0_Template, 1, 0, "novo-loading", 0);
        i0.ɵɵtemplate(1, QuickNoteResults_novo_list_1_Template, 2, 1, "novo-list", 1);
        i0.ɵɵtemplate(2, QuickNoteResults_p_2_Template, 2, 1, "p", 2);
        i0.ɵɵtemplate(3, QuickNoteResults_p_3_Template, 2, 1, "p", 3);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isLoading && !ctx.matches.length);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.matches.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasError);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isLoading && !ctx.matches.length && !ctx.hasError);
    } }, directives: [i2.NgIf, i3.NovoLoadingElement, i4.NovoListElement, i2.NgForOf, i4.NovoListItemElement, i4.NovoItemContentElement], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(QuickNoteResults, [{
        type: Component,
        args: [{
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
    `,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NovoLabelService }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tOb3RlUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9xdWljay1ub3RlL2V4dHJhcy9xdWljay1ub3RlLXJlc3VsdHMvUXVpY2tOb3RlUmVzdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsU0FBUztBQUNULE9BQU8sRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDeEMsTUFBTTtBQUNOLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7SUFRbkUsa0NBQStFOzs7O0lBRTNFLHlDQUtJO0lBSEEsaU9BQTZCLDJQQUFBO0lBRzdCLG9DQUNJO0lBQUEsdUJBQWtEO0lBQ3RELGlCQUFlO0lBQ25CLGlCQUFpQjs7OztJQUxiLHlEQUFvQztJQUc3QixlQUEwQztJQUExQyw0RkFBMEM7OztJQVB6RCxpQ0FDSTtJQUFBLG1HQUtJO0lBSVIsaUJBQVk7OztJQVJKLGVBQTZCO0lBQTdCLHdDQUE2Qjs7O0lBU3JDLDRCQUF5QztJQUFBLFlBQTJCO0lBQUEsaUJBQUk7OztJQUEvQixlQUEyQjtJQUEzQixrREFBMkI7OztJQUNwRSw0QkFBMEU7SUFBQSxZQUEyQjtJQUFBLGlCQUFJOzs7SUFBL0IsZUFBMkI7SUFBM0Isa0RBQTJCOztBQUc3RyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsYUFBYTtJQUlqRCxZQUFZLE9BQW1CLEVBQVMsTUFBd0IsRUFBRSxHQUFzQjtRQUN0RixLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztR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Q0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtRQUVELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbEMsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDM0I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dGQTNHVSxnQkFBZ0I7cURBQWhCLGdCQUFnQjtRQWhCckIsbUZBQWdFO1FBQ2hFLDZFQUNJO1FBVUosNkRBQXlDO1FBQ3pDLDZEQUEwRTs7UUFiL0MsMkRBQW9DO1FBQ3BELGVBQTBCO1FBQTFCLDZDQUEwQjtRQVdiLGVBQWdCO1FBQWhCLG1DQUFnQjtRQUNqQixlQUFrRDtRQUFsRCw2RUFBa0Q7O2tEQUdwRSxnQkFBZ0I7Y0F0QjVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLFFBQVE7aUJBQ2hCO2dCQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0tBZVA7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IFBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi8uLi8uLi9waWNrZXIvZXh0cmFzL3BpY2tlci1yZXN1bHRzL1BpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3F1aWNrLW5vdGUtcmVzdWx0cycsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FjdGl2ZScsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgIW1hdGNoZXMubGVuZ3RoXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgIDxub3ZvLWxpc3QgKm5nSWY9XCJtYXRjaGVzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBtYXRjaGVzXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0TWF0Y2goJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJtYXRjaD09PWFjdGl2ZU1hdGNoXCJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJzZWxlY3RBY3RpdmUobWF0Y2gpXCI+XG4gICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPHAgW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2gubGFiZWwsIHRlcm0pXCI+PC9wPlxuICAgICAgICAgICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgICAgPC9ub3ZvLWxpc3Q+XG4gICAgICAgIDxwIGNsYXNzPVwicGlja2VyLWVycm9yXCIgKm5nSWY9XCJoYXNFcnJvclwiPnt7IGxhYmVscy5xdWlja05vdGVFcnJvciB9fTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJwaWNrZXItbnVsbFwiICpuZ0lmPVwiIWlzTG9hZGluZyAmJiAhbWF0Y2hlcy5sZW5ndGggJiYgIWhhc0Vycm9yXCI+e3sgbGFiZWxzLnF1aWNrTm90ZUVtcHR5IH19PC9wPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFF1aWNrTm90ZVJlc3VsdHMgZXh0ZW5kcyBQaWNrZXJSZXN1bHRzIHtcbiAgLy8gTW9kZSB0aGF0IHRoZSBxdWljayBub3RlIGlzIGluIGZvciB0YWdnaW5nXG4gIHRhZ2dpbmdNb2RlOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgbGFiZWxzLCByZWYpO1xuICB9XG5cbiAgZ2V0IHRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rlcm07XG4gIH1cblxuICBzZXQgdGVybSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdGVybSA9IHZhbHVlLnNlYXJjaFRlcm07XG4gICAgdGhpcy50YWdnaW5nTW9kZSA9IHZhbHVlLnRhZ2dpbmdNb2RlO1xuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5zZWFyY2godmFsdWUsIHRoaXMudGFnZ2luZ01vZGUpLnN1YnNjcmliZShcbiAgICAgIChyZXN1bHRzKSA9PiB7XG4gICAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuaXNTdGF0aWMgPyB0aGlzLmZpbHRlckRhdGEocmVzdWx0cykgOiByZXN1bHRzO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBzZWFyY2godGVybTogc3RyaW5nLCB0YWdnaW5nTW9kZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3Qgc2VhcmNoQ2FsbCA9IHRoaXMuY29uZmlnLm9wdGlvbnNbdGFnZ2luZ01vZGVdO1xuICAgIHJldHVybiBmcm9tKFxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBtYXRjaCBkYXRhXG4gICAgICAgIGlmIChzZWFyY2hDYWxsKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSB0aGUgZGF0YVxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNlYXJjaENhbGwpKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RhdGljID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIEFycmF5cyBhcmUgcmV0dXJuZWQgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5zdHJ1Y3R1cmVBcnJheShzZWFyY2hDYWxsKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIChzZWFyY2hDYWxsLmhhc093blByb3BlcnR5KCdyZWplY3QnKSAmJiBzZWFyY2hDYWxsLmhhc093blByb3BlcnR5KCdyZXNvbHZlJykpIHx8XG4gICAgICAgICAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc2VhcmNoQ2FsbCkuaGFzT3duUHJvcGVydHkoJ3RoZW4nKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5pc1N0YXRpYyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gUHJvbWlzZXMgKEVTNiBvciBEZWZlcnJlZCkgYXJlIHJlc29sdmVkIHdoZW5ldmVyIHRoZXkgcmVzb2x2ZVxuICAgICAgICAgICAgc2VhcmNoQ2FsbC50aGVuKHRoaXMuc3RydWN0dXJlQXJyYXkuYmluZCh0aGlzKSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlYXJjaENhbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdGF0aWMgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIFByb21pc2VzIChFUzYgb3IgRGVmZXJyZWQpIGFyZSByZXNvbHZlZCB3aGVuZXZlciB0aGV5IHJlc29sdmVcbiAgICAgICAgICAgIHNlYXJjaENhbGwodGVybSlcbiAgICAgICAgICAgICAgLnRoZW4odGhpcy5zdHJ1Y3R1cmVBcnJheS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgICAudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBbGwgb3RoZXIga2luZHMgb2YgZGF0YSBhcmUgcmVqZWN0ZWRcbiAgICAgICAgICAgIHJlamVjdCgnVGhlIGRhdGEgcHJvdmlkZWQgaXMgbm90IGFuIGFycmF5IG9yIGEgcHJvbWlzZScpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZGF0YSBwcm92aWRlZCBpcyBub3QgYW4gYXJyYXkgb3IgYSBwcm9taXNlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5vIGRhdGEgZ2V0cyByZWplY3RlZFxuICAgICAgICAgIHJlamVjdCgnZXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzdHJ1Y3R1cmVBcnJheVxuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIHRoZSBkYXRhIG9uY2UgZ2V0RGF0YSByZXNvbHZlcyBpdFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzdHJ1Y3R1cmVzIGFuIGFycmF5IG9mIG5vZGVzIGludG8gYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIGFcbiAgICogJ25hbWUnIGZpZWxkIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBzdHJ1Y3R1cmVBcnJheShjb2xsZWN0aW9uOiBBcnJheTxhbnk+KSB7XG4gICAgaWYgKGNvbGxlY3Rpb24gJiYgKHR5cGVvZiBjb2xsZWN0aW9uWzBdID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY29sbGVjdGlvblswXSA9PT0gJ251bWJlcicpKSB7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogaXRlbSxcbiAgICAgICAgICBsYWJlbDogaXRlbSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY29sbGVjdGlvbi5tYXAoKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb25maWcuZmllbGQgPyBkYXRhW3RoaXMuY29uZmlnLmZpZWxkW3RoaXMudGFnZ2luZ01vZGVdXSA6IGRhdGEudmFsdWUgfHwgZGF0YTtcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5jb25maWcuZm9ybWF0ID8gSGVscGVycy5pbnRlcnBvbGF0ZSh0aGlzLmNvbmZpZy5mb3JtYXRbdGhpcy50YWdnaW5nTW9kZV0sIGRhdGEpIDogZGF0YS5sYWJlbCB8fCBTdHJpbmcodmFsdWUpO1xuICAgICAgcmV0dXJuIHsgdmFsdWUsIGxhYmVsLCBkYXRhIH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2VsZWN0TWF0Y2hcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKi9cbiAgc2VsZWN0TWF0Y2goZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuYWN0aXZlTWF0Y2g7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnBhcmVudC5vblNlbGVjdGVkKHRoaXMudGFnZ2luZ01vZGUsIHNlbGVjdGVkKTtcbiAgICAgIHRoaXMucGFyZW50LmhpZGVSZXN1bHRzKCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19