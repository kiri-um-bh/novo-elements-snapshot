// NG2
import { ChangeDetectorRef, Component, ElementRef, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NovoLabelService } from '../../../../services/novo-label-service';
// Vendor
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../../../../services/novo-label-service";
import * as i3 from "@angular/common";
import * as i4 from "../../../loading/Loading";
import * as i5 from "../../../list/List";
function WorkersCompCodesPickerResults_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelement(1, "novo-loading", 3);
    i0.ɵɵelementEnd();
} }
const _c0 = function () { return { year: "numeric", month: "numeric", day: "numeric" }; };
function WorkersCompCodesPickerResults_novo_list_1_novo_list_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 7);
    i0.ɵɵlistener("click", function WorkersCompCodesPickerResults_novo_list_1_novo_list_item_1_Template_novo_list_item_click_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.selectMatch($event); })("mouseenter", function WorkersCompCodesPickerResults_novo_list_1_novo_list_item_1_Template_novo_list_item_mouseenter_0_listener() { i0.ɵɵrestoreView(_r6); const match_r4 = ctx.$implicit; const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.selectActive(match_r4); });
    i0.ɵɵelementStart(1, "item-header");
    i0.ɵɵelementStart(2, "item-title");
    i0.ɵɵelement(3, "span", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "item-content", 9);
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵelementStart(6, "span", 10);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵelementStart(11, "span", 10);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "item-content", 9);
    i0.ɵɵelementStart(16, "p");
    i0.ɵɵelementStart(17, "span", 10);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "p");
    i0.ɵɵelementStart(22, "span", 10);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const match_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", match_r4 === ctx_r2.activeMatch)("disabled", ctx_r2.preselected(match_r4));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHtml", ctx_r2.sanitizeHTML(match_r4 == null ? null : match_r4.data == null ? null : match_r4.data.compensation == null ? null : match_r4.data.compensation.code, match_r4 == null ? null : match_r4.data == null ? null : match_r4.data.compensation == null ? null : match_r4.data.compensation.name), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r2.labels.state, ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(match_r4 == null ? null : match_r4.data == null ? null : match_r4.data.compensation == null ? null : match_r4.data.compensation.state);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r2.labels.rate, ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.labels.formatCurrency(match_r4 == null ? null : match_r4.data == null ? null : match_r4.data.rate));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r2.labels.startDate, ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.labels.formatDateWithFormat(match_r4 == null ? null : match_r4.data == null ? null : match_r4.data.startDate, i0.ɵɵpureFunction0(13, _c0)));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r2.labels.endDate, ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.labels.formatDateWithFormat(match_r4 == null ? null : match_r4.data == null ? null : match_r4.data.endDate, i0.ɵɵpureFunction0(14, _c0)));
} }
function WorkersCompCodesPickerResults_novo_list_1_novo_loading_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-loading", 3);
} }
function WorkersCompCodesPickerResults_novo_list_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-list", 4);
    i0.ɵɵtemplate(1, WorkersCompCodesPickerResults_novo_list_1_novo_list_item_1_Template, 26, 15, "novo-list-item", 5);
    i0.ɵɵtemplate(2, WorkersCompCodesPickerResults_novo_list_1_novo_loading_2_Template, 1, 0, "novo-loading", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.matches);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.isLoading && (ctx_r1.matches == null ? null : ctx_r1.matches.length) > 0);
} }
export class WorkersCompCodesPickerResults extends BasePickerResults {
    constructor(element, sanitizer, labels, ref) {
        super(element, ref);
        this.sanitizer = sanitizer;
        this.labels = labels;
        this.active = true;
        this.sanitizer = sanitizer;
    }
    get isHidden() {
        return this.matches.length === 0;
    }
    getListElement() {
        return this.element.nativeElement.querySelector('novo-list');
    }
    sanitizeHTML(compCode, name) {
        return this.sanitizer.bypassSecurityTrustHtml(`${compCode} | ${name}`);
    }
}
WorkersCompCodesPickerResults.ɵfac = function WorkersCompCodesPickerResults_Factory(t) { return new (t || WorkersCompCodesPickerResults)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i2.NovoLabelService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
WorkersCompCodesPickerResults.ɵcmp = i0.ɵɵdefineComponent({ type: WorkersCompCodesPickerResults, selectors: [["workers-comp-codes-picker-results"]], hostVars: 3, hostBindings: function WorkersCompCodesPickerResults_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵhostProperty("hidden", ctx.isHidden);
        i0.ɵɵclassProp("active", ctx.active);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [["class", "picker-loading", 4, "ngIf"], ["direction", "vertical", 4, "ngIf"], [1, "picker-loading"], ["theme", "line"], ["direction", "vertical"], [3, "active", "disabled", "click", "mouseenter", 4, "ngFor", "ngForOf"], ["theme", "line", 4, "ngIf"], [3, "click", "mouseenter"], [3, "innerHtml"], ["direction", "horizontal"], [1, "label"]], template: function WorkersCompCodesPickerResults_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, WorkersCompCodesPickerResults_section_0_Template, 2, 0, "section", 0);
        i0.ɵɵtemplate(1, WorkersCompCodesPickerResults_novo_list_1_Template, 3, 2, "novo-list", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isLoading && !(ctx.matches == null ? null : ctx.matches.length));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.matches == null ? null : ctx.matches.length) > 0 && !ctx.hasError);
    } }, directives: [i3.NgIf, i4.NovoLoadingElement, i5.NovoListElement, i3.NgForOf, i5.NovoListItemElement, i5.NovoItemHeaderElement, i5.NovoItemTitleElement, i5.NovoItemContentElement], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WorkersCompCodesPickerResults, [{
        type: Component,
        args: [{
                selector: 'workers-comp-codes-picker-results',
                template: `
    <section class="picker-loading" *ngIf="isLoading && !matches?.length">
      <novo-loading theme="line"></novo-loading>
    </section>
    <novo-list direction="vertical" *ngIf="matches?.length > 0 && !hasError">
      <novo-list-item
        *ngFor="let match of matches"
        (click)="selectMatch($event)"
        [class.active]="match === activeMatch"
        (mouseenter)="selectActive(match)"
        [class.disabled]="preselected(match)"
      >
        <item-header>
          <item-title>
            <span [innerHtml]="sanitizeHTML(match?.data?.compensation?.code, match?.data?.compensation?.name)"></span>
          </item-title>
        </item-header>
        <item-content direction="horizontal">
          <p>
            <span class="label">{{ labels.state }}: </span><span>{{ match?.data?.compensation?.state }}</span>
          </p>
          <p>
            <span class="label">{{ labels.rate }}: </span><span>{{ labels.formatCurrency(match?.data?.rate) }}</span>
          </p>
        </item-content>
        <item-content direction="horizontal">
          <p>
            <span class="label">{{ labels.startDate }}: </span
            ><span>{{ labels.formatDateWithFormat(match?.data?.startDate, { year: 'numeric', month: 'numeric', day: 'numeric' }) }}</span>
          </p>
          <p>
            <span class="label">{{ labels.endDate }}: </span
            ><span>{{ labels.formatDateWithFormat(match?.data?.endDate, { year: 'numeric', month: 'numeric', day: 'numeric' }) }}</span>
          </p>
        </item-content>
      </novo-list-item>
      <novo-loading theme="line" *ngIf="isLoading && matches?.length > 0"></novo-loading>
    </novo-list>
  `,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.DomSanitizer }, { type: i2.NovoLabelService }, { type: i0.ChangeDetectorRef }]; }, { active: [{
            type: HostBinding,
            args: ['class.active']
        }], isHidden: [{
            type: HostBinding,
            args: ['hidden']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29ya2Vyc0NvbXBDb2Rlc1BpY2tlclJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL3dvcmtlcnMtY29tcC1jb2Rlcy1waWNrZXItcmVzdWx0cy9Xb3JrZXJzQ29tcENvZGVzUGlja2VyUmVzdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRSxTQUFTO0FBQ1QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7O0lBS3pFLGtDQUNFO0lBQUEsa0NBQTBDO0lBQzVDLGlCQUFVOzs7OztJQUVSLHlDQU9FO0lBTEEsOE9BQTZCLHdRQUFBO0lBSzdCLG1DQUNFO0lBQUEsa0NBQ0U7SUFBQSwwQkFBMEc7SUFDNUcsaUJBQWE7SUFDZixpQkFBYztJQUNkLHVDQUNFO0lBQUEseUJBQ0U7SUFBQSxnQ0FBb0I7SUFBQSxZQUFvQjtJQUFBLGlCQUFPO0lBQUEsNEJBQU07SUFBQSxZQUFzQztJQUFBLGlCQUFPO0lBQ3BHLGlCQUFJO0lBQ0osMEJBQ0U7SUFBQSxpQ0FBb0I7SUFBQSxhQUFtQjtJQUFBLGlCQUFPO0lBQUEsNkJBQU07SUFBQSxhQUE4QztJQUFBLGlCQUFPO0lBQzNHLGlCQUFJO0lBQ04saUJBQWU7SUFDZix3Q0FDRTtJQUFBLDBCQUNFO0lBQUEsaUNBQW9CO0lBQUEsYUFBd0I7SUFBQSxpQkFDM0M7SUFBQSw2QkFBTTtJQUFBLGFBQWdIO0lBQUEsaUJBQU87SUFDaEksaUJBQUk7SUFDSiwwQkFDRTtJQUFBLGlDQUFvQjtJQUFBLGFBQXNCO0lBQUEsaUJBQ3pDO0lBQUEsNkJBQU07SUFBQSxhQUE4RztJQUFBLGlCQUFPO0lBQzlILGlCQUFJO0lBQ04saUJBQWU7SUFDakIsaUJBQWlCOzs7O0lBM0JmLHlEQUFzQywwQ0FBQTtJQU01QixlQUE0RjtJQUE1Riw4VUFBNEY7SUFLOUUsZUFBb0I7SUFBcEIsb0RBQW9CO0lBQWEsZUFBc0M7SUFBdEMsMkpBQXNDO0lBR3ZFLGVBQW1CO0lBQW5CLG1EQUFtQjtJQUFhLGVBQThDO0lBQTlDLCtIQUE4QztJQUs5RSxlQUF3QjtJQUF4Qix3REFBd0I7SUFDckMsZUFBZ0g7SUFBaEgsdUtBQWdIO0lBR25HLGVBQXNCO0lBQXRCLHNEQUFzQjtJQUNuQyxlQUE4RztJQUE5RyxxS0FBOEc7OztJQUkzSCxrQ0FBbUY7OztJQWhDckYsb0NBQ0U7SUFBQSxrSEFPRTtJQXdCRiw0R0FBb0U7SUFDdEUsaUJBQVk7OztJQS9CUixlQUE2QjtJQUE3Qix3Q0FBNkI7SUE4QkosZUFBd0M7SUFBeEMsc0dBQXdDOztBQUl6RSxNQUFNLE9BQU8sNkJBQThCLFNBQVEsaUJBQWlCO0lBUWxFLFlBQVksT0FBbUIsRUFBVSxTQUF1QixFQUFTLE1BQXdCLEVBQUUsR0FBc0I7UUFDdkgsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQURtQixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFOakcsV0FBTSxHQUFZLElBQUksQ0FBQztRQVFyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBUkQsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQU9ELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsWUFBWSxDQUFDLFFBQWdCLEVBQUUsSUFBWTtRQUN6QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsR0FBRyxRQUFRLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDOzswR0FuQlUsNkJBQTZCO2tFQUE3Qiw2QkFBNkI7Ozs7UUF2Q3RDLHNGQUNFO1FBRUYsMEZBQ0U7O1FBSjhCLDBGQUFxQztRQUdyQyxlQUF3QztRQUF4Qyw2RkFBd0M7O2tEQW9DL0QsNkJBQTZCO2NBMUN6QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNDVDthQUNGO3VKQUdDLE1BQU07a0JBREwsV0FBVzttQkFBQyxjQUFjO1lBR3ZCLFFBQVE7a0JBRFgsV0FBVzttQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgQmFzZVBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd29ya2Vycy1jb21wLWNvZGVzLXBpY2tlci1yZXN1bHRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2VjdGlvbiBjbGFzcz1cInBpY2tlci1sb2FkaW5nXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgIW1hdGNoZXM/Lmxlbmd0aFwiPlxuICAgICAgPG5vdm8tbG9hZGluZyB0aGVtZT1cImxpbmVcIj48L25vdm8tbG9hZGluZz5cbiAgICA8L3NlY3Rpb24+XG4gICAgPG5vdm8tbGlzdCBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiICpuZ0lmPVwibWF0Y2hlcz8ubGVuZ3RoID4gMCAmJiAhaGFzRXJyb3JcIj5cbiAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAqbmdGb3I9XCJsZXQgbWF0Y2ggb2YgbWF0Y2hlc1wiXG4gICAgICAgIChjbGljayk9XCJzZWxlY3RNYXRjaCgkZXZlbnQpXCJcbiAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJtYXRjaCA9PT0gYWN0aXZlTWF0Y2hcIlxuICAgICAgICAobW91c2VlbnRlcik9XCJzZWxlY3RBY3RpdmUobWF0Y2gpXCJcbiAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cInByZXNlbGVjdGVkKG1hdGNoKVwiXG4gICAgICA+XG4gICAgICAgIDxpdGVtLWhlYWRlcj5cbiAgICAgICAgICA8aXRlbS10aXRsZT5cbiAgICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwic2FuaXRpemVIVE1MKG1hdGNoPy5kYXRhPy5jb21wZW5zYXRpb24/LmNvZGUsIG1hdGNoPy5kYXRhPy5jb21wZW5zYXRpb24/Lm5hbWUpXCI+PC9zcGFuPlxuICAgICAgICAgIDwvaXRlbS10aXRsZT5cbiAgICAgICAgPC9pdGVtLWhlYWRlcj5cbiAgICAgICAgPGl0ZW0tY29udGVudCBkaXJlY3Rpb249XCJob3Jpem9udGFsXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+e3sgbGFiZWxzLnN0YXRlIH19OiA8L3NwYW4+PHNwYW4+e3sgbWF0Y2g/LmRhdGE/LmNvbXBlbnNhdGlvbj8uc3RhdGUgfX08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPnt7IGxhYmVscy5yYXRlIH19OiA8L3NwYW4+PHNwYW4+e3sgbGFiZWxzLmZvcm1hdEN1cnJlbmN5KG1hdGNoPy5kYXRhPy5yYXRlKSB9fTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICA8aXRlbS1jb250ZW50IGRpcmVjdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj57eyBsYWJlbHMuc3RhcnREYXRlIH19OiA8L3NwYW5cbiAgICAgICAgICAgID48c3Bhbj57eyBsYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQobWF0Y2g/LmRhdGE/LnN0YXJ0RGF0ZSwgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbnVtZXJpYycsIGRheTogJ251bWVyaWMnIH0pIH19PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj57eyBsYWJlbHMuZW5kRGF0ZSB9fTogPC9zcGFuXG4gICAgICAgICAgICA+PHNwYW4+e3sgbGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KG1hdGNoPy5kYXRhPy5lbmREYXRlLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdudW1lcmljJywgZGF5OiAnbnVtZXJpYycgfSkgfX08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2l0ZW0tY29udGVudD5cbiAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiICpuZ0lmPVwiaXNMb2FkaW5nICYmIG1hdGNoZXM/Lmxlbmd0aCA+IDBcIj48L25vdm8tbG9hZGluZz5cbiAgICA8L25vdm8tbGlzdD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgV29ya2Vyc0NvbXBDb2Rlc1BpY2tlclJlc3VsdHMgZXh0ZW5kcyBCYXNlUGlja2VyUmVzdWx0cyB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgYWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdoaWRkZW4nKVxuICBnZXQgaXNIaWRkZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWF0Y2hlcy5sZW5ndGggPT09IDA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgcmVmKTtcbiAgICB0aGlzLnNhbml0aXplciA9IHNhbml0aXplcjtcbiAgfVxuXG4gIGdldExpc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLWxpc3QnKTtcbiAgfVxuXG4gIHNhbml0aXplSFRNTChjb21wQ29kZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoYCR7Y29tcENvZGV9IHwgJHtuYW1lfWApO1xuICB9XG59XG4iXX0=