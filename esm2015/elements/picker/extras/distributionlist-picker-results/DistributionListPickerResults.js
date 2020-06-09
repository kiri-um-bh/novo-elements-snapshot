// NG2
import { Component, ElementRef, ChangeDetectorRef, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// Vendor
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import { NovoLabelService } from '../../../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../../../../services/novo-label-service";
import * as i3 from "@angular/common";
import * as i4 from "../../../loading/Loading";
import * as i5 from "../../../list/List";
function DistributionListPickerResults_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelement(1, "novo-loading", 3);
    i0.ɵɵelementEnd();
} }
const _c0 = function () { return { year: "numeric", month: "numeric", day: "numeric" }; };
function DistributionListPickerResults_novo_list_1_novo_list_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-list-item", 7);
    i0.ɵɵlistener("click", function DistributionListPickerResults_novo_list_1_novo_list_item_1_Template_novo_list_item_click_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.selectMatch($event); })("mouseenter", function DistributionListPickerResults_novo_list_1_novo_list_item_1_Template_novo_list_item_mouseenter_0_listener() { i0.ɵɵrestoreView(_r6); const match_r4 = ctx.$implicit; const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.selectActive(match_r4); });
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
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const match_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", match_r4 === ctx_r2.activeMatch)("disabled", ctx_r2.preselected(match_r4));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHtml", ctx_r2.sanitizeHTML(match_r4.label), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r2.labels.distributionListOwner, ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(match_r4 == null ? null : match_r4.data == null ? null : match_r4.data.owner == null ? null : match_r4.data.owner.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r2.labels.dateAdded, ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.labels.formatDateWithFormat(match_r4 == null ? null : match_r4.data == null ? null : match_r4.data.dateAdded, i0.ɵɵpureFunction0(9, _c0)));
} }
function DistributionListPickerResults_novo_list_1_novo_loading_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-loading", 3);
} }
function DistributionListPickerResults_novo_list_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "novo-list", 4);
    i0.ɵɵtemplate(1, DistributionListPickerResults_novo_list_1_novo_list_item_1_Template, 15, 10, "novo-list-item", 5);
    i0.ɵɵtemplate(2, DistributionListPickerResults_novo_list_1_novo_loading_2_Template, 1, 0, "novo-loading", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.matches);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.isLoading && (ctx_r1.matches == null ? null : ctx_r1.matches.length) > 0);
} }
export class DistributionListPickerResults extends BasePickerResults {
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
    sanitizeHTML(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}
DistributionListPickerResults.ɵfac = function DistributionListPickerResults_Factory(t) { return new (t || DistributionListPickerResults)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i2.NovoLabelService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
DistributionListPickerResults.ɵcmp = i0.ɵɵdefineComponent({ type: DistributionListPickerResults, selectors: [["distribution-list-picker-results"]], hostVars: 3, hostBindings: function DistributionListPickerResults_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵhostProperty("hidden", ctx.isHidden);
        i0.ɵɵclassProp("active", ctx.active);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [["class", "picker-loading", 4, "ngIf"], ["direction", "vertical", 4, "ngIf"], [1, "picker-loading"], ["theme", "line"], ["direction", "vertical"], [3, "active", "disabled", "click", "mouseenter", 4, "ngFor", "ngForOf"], ["theme", "line", 4, "ngIf"], [3, "click", "mouseenter"], [3, "innerHtml"], ["direction", "horizontal"], [1, "label"]], template: function DistributionListPickerResults_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, DistributionListPickerResults_section_0_Template, 2, 0, "section", 0);
        i0.ɵɵtemplate(1, DistributionListPickerResults_novo_list_1_Template, 3, 2, "novo-list", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isLoading && !(ctx.matches == null ? null : ctx.matches.length));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.matches == null ? null : ctx.matches.length) > 0 && !ctx.hasError);
    } }, directives: [i3.NgIf, i4.NovoLoadingElement, i5.NovoListElement, i3.NgForOf, i5.NovoListItemElement, i5.NovoItemHeaderElement, i5.NovoItemTitleElement, i5.NovoItemContentElement], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DistributionListPickerResults, [{
        type: Component,
        args: [{
                selector: 'distribution-list-picker-results',
                template: `
        <section class="picker-loading" *ngIf="isLoading && !matches?.length">
            <novo-loading theme="line"></novo-loading>
        </section>
        <novo-list direction="vertical" *ngIf="matches?.length > 0 && !hasError">
            <novo-list-item *ngFor="let match of matches" (click)="selectMatch($event)" [class.active]="match === activeMatch" (mouseenter)="selectActive(match)" [class.disabled]="preselected(match)">
                <item-header>
                    <item-title>
                        <span [innerHtml]="sanitizeHTML(match.label)"></span>
                    </item-title>
                </item-header>
                <item-content direction="horizontal">
                    <p>
                        <span class='label'>{{ labels.distributionListOwner }}: </span><span>{{ match?.data?.owner?.name }}</span>
                    </p>
                    <p>
                        <span class='label'>{{ labels.dateAdded }}: </span><span>{{ labels.formatDateWithFormat(match?.data?.dateAdded, { year: 'numeric', month: 'numeric', day: 'numeric' }) }}</span>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzdHJpYnV0aW9uTGlzdFBpY2tlclJlc3VsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGlja2VyL2V4dHJhcy9kaXN0cmlidXRpb25saXN0LXBpY2tlci1yZXN1bHRzL0Rpc3RyaWJ1dGlvbkxpc3RQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELFNBQVM7QUFDVCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7Ozs7SUFLbkUsa0NBQ0k7SUFBQSxrQ0FBMEM7SUFDOUMsaUJBQVU7Ozs7O0lBRU4seUNBQ0k7SUFEMEMsOE9BQTZCLHdRQUFBO0lBQ3ZFLG1DQUNJO0lBQUEsa0NBQ0k7SUFBQSwwQkFBcUQ7SUFDekQsaUJBQWE7SUFDakIsaUJBQWM7SUFDZCx1Q0FDSTtJQUFBLHlCQUNJO0lBQUEsZ0NBQW9CO0lBQUEsWUFBb0M7SUFBQSxpQkFBTztJQUFBLDRCQUFNO0lBQUEsWUFBOEI7SUFBQSxpQkFBTztJQUM5RyxpQkFBSTtJQUNKLDBCQUNJO0lBQUEsaUNBQW9CO0lBQUEsYUFBd0I7SUFBQSxpQkFBTztJQUFBLDZCQUFNO0lBQUEsYUFBZ0g7SUFBQSxpQkFBTztJQUNwTCxpQkFBSTtJQUNSLGlCQUFlO0lBQ25CLGlCQUFpQjs7OztJQWQyRCx5REFBc0MsMENBQUE7SUFHaEcsZUFBdUM7SUFBdkMsa0ZBQXVDO0lBS3pCLGVBQW9DO0lBQXBDLG9FQUFvQztJQUFhLGVBQThCO0lBQTlCLDRJQUE4QjtJQUcvRSxlQUF3QjtJQUF4Qix3REFBd0I7SUFBYSxlQUFnSDtJQUFoSCxzS0FBZ0g7OztJQUlyTCxrQ0FBbUY7OztJQWhCdkYsb0NBQ0k7SUFBQSxrSEFDSTtJQWNKLDRHQUFvRTtJQUN4RSxpQkFBWTs7O0lBaEJRLGVBQTZCO0lBQTdCLHdDQUE2QjtJQWVsQixlQUF3QztJQUF4QyxzR0FBd0M7O0FBSS9FLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxpQkFBaUI7SUFRbEUsWUFBWSxPQUFtQixFQUFVLFNBQXVCLEVBQVMsTUFBd0IsRUFBRSxHQUFzQjtRQUN2SCxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRG1CLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQU5qRyxXQUFNLEdBQVksSUFBSSxDQUFDO1FBUXJCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFSRCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBT0QsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxZQUFZLENBQUMsSUFBUztRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7MEdBbkJVLDZCQUE2QjtrRUFBN0IsNkJBQTZCOzs7O1FBdkJsQyxzRkFDSTtRQUVKLDBGQUNJOztRQUo0QiwwRkFBcUM7UUFHckMsZUFBd0M7UUFBeEMsNkZBQXdDOztrREFvQm5FLDZCQUE2QjtjQTFCekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXNCUDthQUNKOztrQkFFRSxXQUFXO21CQUFDLGNBQWM7O2tCQUUxQixXQUFXO21CQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgQmFzZVBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaXN0cmlidXRpb24tbGlzdC1waWNrZXItcmVzdWx0cycsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGlja2VyLWxvYWRpbmdcIiAqbmdJZj1cImlzTG9hZGluZyAmJiAhbWF0Y2hlcz8ubGVuZ3RoXCI+XG4gICAgICAgICAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiPjwvbm92by1sb2FkaW5nPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxub3ZvLWxpc3QgZGlyZWN0aW9uPVwidmVydGljYWxcIiAqbmdJZj1cIm1hdGNoZXM/Lmxlbmd0aCA+IDAgJiYgIWhhc0Vycm9yXCI+XG4gICAgICAgICAgICA8bm92by1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IG1hdGNoIG9mIG1hdGNoZXNcIiAoY2xpY2spPVwic2VsZWN0TWF0Y2goJGV2ZW50KVwiIFtjbGFzcy5hY3RpdmVdPVwibWF0Y2ggPT09IGFjdGl2ZU1hdGNoXCIgKG1vdXNlZW50ZXIpPVwic2VsZWN0QWN0aXZlKG1hdGNoKVwiIFtjbGFzcy5kaXNhYmxlZF09XCJwcmVzZWxlY3RlZChtYXRjaClcIj5cbiAgICAgICAgICAgICAgICA8aXRlbS1oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxpdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJzYW5pdGl6ZUhUTUwobWF0Y2gubGFiZWwpXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2l0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgPC9pdGVtLWhlYWRlcj5cbiAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50IGRpcmVjdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nbGFiZWwnPnt7IGxhYmVscy5kaXN0cmlidXRpb25MaXN0T3duZXIgfX06IDwvc3Bhbj48c3Bhbj57eyBtYXRjaD8uZGF0YT8ub3duZXI/Lm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nbGFiZWwnPnt7IGxhYmVscy5kYXRlQWRkZWQgfX06IDwvc3Bhbj48c3Bhbj57eyBsYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQobWF0Y2g/LmRhdGE/LmRhdGVBZGRlZCwgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbnVtZXJpYycsIGRheTogJ251bWVyaWMnIH0pIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgICAgPG5vdm8tbG9hZGluZyB0aGVtZT1cImxpbmVcIiAqbmdJZj1cImlzTG9hZGluZyAmJiBtYXRjaGVzPy5sZW5ndGggPiAwXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgIDwvbm92by1saXN0PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIERpc3RyaWJ1dGlvbkxpc3RQaWNrZXJSZXN1bHRzIGV4dGVuZHMgQmFzZVBpY2tlclJlc3VsdHMge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIGFjdGl2ZTogYm9vbGVhbiA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnaGlkZGVuJylcbiAgZ2V0IGlzSGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1hdGNoZXMubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1lbnQsIHJlZik7XG4gICAgdGhpcy5zYW5pdGl6ZXIgPSBzYW5pdGl6ZXI7XG4gIH1cblxuICBnZXRMaXN0RWxlbWVudCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLWxpc3QnKTtcbiAgfVxuXG4gIHNhbml0aXplSFRNTChodG1sOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTtcbiAgfVxufVxuIl19