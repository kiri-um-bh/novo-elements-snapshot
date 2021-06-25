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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzdHJpYnV0aW9uTGlzdFBpY2tlclJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGlja2VyL2V4dHJhcy9kaXN0cmlidXRpb25saXN0LXBpY2tlci1yZXN1bHRzL0Rpc3RyaWJ1dGlvbkxpc3RQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELFNBQVM7QUFDVCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7Ozs7SUFLbkUsa0NBQ0k7SUFBQSxrQ0FBMEM7SUFDOUMsaUJBQVU7Ozs7O0lBRU4seUNBQ0k7SUFEMEMsOE9BQTZCLHdRQUFBO0lBQ3ZFLG1DQUNJO0lBQUEsa0NBQ0k7SUFBQSwwQkFBcUQ7SUFDekQsaUJBQWE7SUFDakIsaUJBQWM7SUFDZCx1Q0FDSTtJQUFBLHlCQUNJO0lBQUEsZ0NBQW9CO0lBQUEsWUFBb0M7SUFBQSxpQkFBTztJQUFBLDRCQUFNO0lBQUEsWUFBOEI7SUFBQSxpQkFBTztJQUM5RyxpQkFBSTtJQUNKLDBCQUNJO0lBQUEsaUNBQW9CO0lBQUEsYUFBd0I7SUFBQSxpQkFBTztJQUFBLDZCQUFNO0lBQUEsYUFBZ0g7SUFBQSxpQkFBTztJQUNwTCxpQkFBSTtJQUNSLGlCQUFlO0lBQ25CLGlCQUFpQjs7OztJQWQyRCx5REFBc0MsMENBQUE7SUFHaEcsZUFBdUM7SUFBdkMsa0ZBQXVDO0lBS3pCLGVBQW9DO0lBQXBDLG9FQUFvQztJQUFhLGVBQThCO0lBQTlCLDRJQUE4QjtJQUcvRSxlQUF3QjtJQUF4Qix3REFBd0I7SUFBYSxlQUFnSDtJQUFoSCxzS0FBZ0g7OztJQUlyTCxrQ0FBbUY7OztJQWhCdkYsb0NBQ0k7SUFBQSxrSEFDSTtJQWNKLDRHQUFvRTtJQUN4RSxpQkFBWTs7O0lBaEJRLGVBQTZCO0lBQTdCLHdDQUE2QjtJQWVsQixlQUF3QztJQUF4QyxzR0FBd0M7O0FBSS9FLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxpQkFBaUI7SUFRbEUsWUFBWSxPQUFtQixFQUFVLFNBQXVCLEVBQVMsTUFBd0IsRUFBRSxHQUFzQjtRQUN2SCxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRG1CLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQU5qRyxXQUFNLEdBQVksSUFBSSxDQUFDO1FBUXJCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFSRCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBT0QsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxZQUFZLENBQUMsSUFBUztRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7MEdBbkJVLDZCQUE2QjtrRUFBN0IsNkJBQTZCOzs7O1FBdkJsQyxzRkFDSTtRQUVKLDBGQUNJOztRQUo0QiwwRkFBcUM7UUFHckMsZUFBd0M7UUFBeEMsNkZBQXdDOztrREFvQm5FLDZCQUE2QjtjQTFCekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXNCUDthQUNKO3VKQUdDLE1BQU07a0JBREwsV0FBVzttQkFBQyxjQUFjO1lBR3ZCLFFBQVE7a0JBRFgsV0FBVzttQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG4vLyBWZW5kb3JcbmltcG9ydCB7IEJhc2VQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi4vYmFzZS1waWNrZXItcmVzdWx0cy9CYXNlUGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlzdHJpYnV0aW9uLWxpc3QtcGlja2VyLXJlc3VsdHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBpY2tlci1sb2FkaW5nXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgIW1hdGNoZXM/Lmxlbmd0aFwiPlxuICAgICAgICAgICAgPG5vdm8tbG9hZGluZyB0aGVtZT1cImxpbmVcIj48L25vdm8tbG9hZGluZz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8bm92by1saXN0IGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgKm5nSWY9XCJtYXRjaGVzPy5sZW5ndGggPiAwICYmICFoYXNFcnJvclwiPlxuICAgICAgICAgICAgPG5vdm8tbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBtYXRjaGVzXCIgKGNsaWNrKT1cInNlbGVjdE1hdGNoKCRldmVudClcIiBbY2xhc3MuYWN0aXZlXT1cIm1hdGNoID09PSBhY3RpdmVNYXRjaFwiIChtb3VzZWVudGVyKT1cInNlbGVjdEFjdGl2ZShtYXRjaClcIiBbY2xhc3MuZGlzYWJsZWRdPVwicHJlc2VsZWN0ZWQobWF0Y2gpXCI+XG4gICAgICAgICAgICAgICAgPGl0ZW0taGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwic2FuaXRpemVIVE1MKG1hdGNoLmxhYmVsKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgIDwvaXRlbS1oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudCBkaXJlY3Rpb249XCJob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2xhYmVsJz57eyBsYWJlbHMuZGlzdHJpYnV0aW9uTGlzdE93bmVyIH19OiA8L3NwYW4+PHNwYW4+e3sgbWF0Y2g/LmRhdGE/Lm93bmVyPy5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2xhYmVsJz57eyBsYWJlbHMuZGF0ZUFkZGVkIH19OiA8L3NwYW4+PHNwYW4+e3sgbGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KG1hdGNoPy5kYXRhPy5kYXRlQWRkZWQsIHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ251bWVyaWMnLCBkYXk6ICdudW1lcmljJyB9KSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgbWF0Y2hlcz8ubGVuZ3RoID4gMFwiPjwvbm92by1sb2FkaW5nPlxuICAgICAgICA8L25vdm8tbGlzdD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBEaXN0cmlidXRpb25MaXN0UGlja2VyUmVzdWx0cyBleHRlbmRzIEJhc2VQaWNrZXJSZXN1bHRzIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBhY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2hpZGRlbicpXG4gIGdldCBpc0hpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tYXRjaGVzLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50LCByZWYpO1xuICAgIHRoaXMuc2FuaXRpemVyID0gc2FuaXRpemVyO1xuICB9XG5cbiAgZ2V0TGlzdEVsZW1lbnQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignbm92by1saXN0Jyk7XG4gIH1cblxuICBzYW5pdGl6ZUhUTUwoaHRtbDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XG4gIH1cbn1cbiJdfQ==