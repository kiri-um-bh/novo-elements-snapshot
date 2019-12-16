/**
 * @fileoverview added by tsickle
 * Generated from: elements/picker/extras/distributionlist-picker-results/DistributionListPickerResults.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, ElementRef, ChangeDetectorRef, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// Vendor
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import { NovoLabelService } from '../../../../services/novo-label-service';
export class DistributionListPickerResults extends BasePickerResults {
    /**
     * @param {?} element
     * @param {?} sanitizer
     * @param {?} labels
     * @param {?} ref
     */
    constructor(element, sanitizer, labels, ref) {
        super(element, ref);
        this.sanitizer = sanitizer;
        this.labels = labels;
        this.active = true;
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    get isHidden() {
        return this.matches.length === 0;
    }
    /**
     * @return {?}
     */
    getListElement() {
        return this.element.nativeElement.querySelector('novo-list');
    }
    /**
     * @param {?} html
     * @return {?}
     */
    sanitizeHTML(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}
DistributionListPickerResults.decorators = [
    { type: Component, args: [{
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
    `
            }] }
];
/** @nocollapse */
DistributionListPickerResults.ctorParameters = () => [
    { type: ElementRef },
    { type: DomSanitizer },
    { type: NovoLabelService },
    { type: ChangeDetectorRef }
];
DistributionListPickerResults.propDecorators = {
    active: [{ type: HostBinding, args: ['class.active',] }],
    isHidden: [{ type: HostBinding, args: ['hidden',] }]
};
if (false) {
    /** @type {?} */
    DistributionListPickerResults.prototype.active;
    /**
     * @type {?}
     * @private
     */
    DistributionListPickerResults.prototype.sanitizer;
    /** @type {?} */
    DistributionListPickerResults.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzdHJpYnV0aW9uTGlzdFBpY2tlclJlc3VsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGlja2VyL2V4dHJhcy9kaXN0cmlidXRpb25saXN0LXBpY2tlci1yZXN1bHRzL0Rpc3RyaWJ1dGlvbkxpc3RQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBRXpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBNEIzRSxNQUFNLE9BQU8sNkJBQThCLFNBQVEsaUJBQWlCOzs7Ozs7O0lBUWxFLFlBQVksT0FBbUIsRUFBVSxTQUF1QixFQUFTLE1BQXdCLEVBQUUsR0FBc0I7UUFDdkgsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQURtQixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFOakcsV0FBTSxHQUFZLElBQUksQ0FBQztRQVFyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDOzs7O0lBUkQsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQU9ELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxJQUFTO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7WUE3Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXNCUDthQUNKOzs7O1lBL0JtQixVQUFVO1lBQ3JCLFlBQVk7WUFHWixnQkFBZ0I7WUFKTyxpQkFBaUI7OztxQkFpQzlDLFdBQVcsU0FBQyxjQUFjO3VCQUUxQixXQUFXLFNBQUMsUUFBUTs7OztJQUZyQiwrQ0FDdUI7Ozs7O0lBTVUsa0RBQStCOztJQUFFLCtDQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBCYXNlUGlja2VyUmVzdWx0cyB9IGZyb20gJy4uL2Jhc2UtcGlja2VyLXJlc3VsdHMvQmFzZVBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Rpc3RyaWJ1dGlvbi1saXN0LXBpY2tlci1yZXN1bHRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwaWNrZXItbG9hZGluZ1wiICpuZ0lmPVwiaXNMb2FkaW5nICYmICFtYXRjaGVzPy5sZW5ndGhcIj5cbiAgICAgICAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPG5vdm8tbGlzdCBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiICpuZ0lmPVwibWF0Y2hlcz8ubGVuZ3RoID4gMCAmJiAhaGFzRXJyb3JcIj5cbiAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgbWF0Y2ggb2YgbWF0Y2hlc1wiIChjbGljayk9XCJzZWxlY3RNYXRjaCgkZXZlbnQpXCIgW2NsYXNzLmFjdGl2ZV09XCJtYXRjaCA9PT0gYWN0aXZlTWF0Y2hcIiAobW91c2VlbnRlcik9XCJzZWxlY3RBY3RpdmUobWF0Y2gpXCIgW2NsYXNzLmRpc2FibGVkXT1cInByZXNlbGVjdGVkKG1hdGNoKVwiPlxuICAgICAgICAgICAgICAgIDxpdGVtLWhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cInNhbml0aXplSFRNTChtYXRjaC5sYWJlbClcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICA8L2l0ZW0taGVhZGVyPlxuICAgICAgICAgICAgICAgIDxpdGVtLWNvbnRlbnQgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdsYWJlbCc+e3sgbGFiZWxzLmRpc3RyaWJ1dGlvbkxpc3RPd25lciB9fTogPC9zcGFuPjxzcGFuPnt7IG1hdGNoPy5kYXRhPy5vd25lcj8ubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdsYWJlbCc+e3sgbGFiZWxzLmRhdGVBZGRlZCB9fTogPC9zcGFuPjxzcGFuPnt7IGxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdChtYXRjaD8uZGF0YT8uZGF0ZUFkZGVkLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdudW1lcmljJywgZGF5OiAnbnVtZXJpYycgfSkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2l0ZW0tY29udGVudD5cbiAgICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiICpuZ0lmPVwiaXNMb2FkaW5nICYmIG1hdGNoZXM/Lmxlbmd0aCA+IDBcIj48L25vdm8tbG9hZGluZz5cbiAgICAgICAgPC9ub3ZvLWxpc3Q+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRGlzdHJpYnV0aW9uTGlzdFBpY2tlclJlc3VsdHMgZXh0ZW5kcyBCYXNlUGlja2VyUmVzdWx0cyB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgYWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdoaWRkZW4nKVxuICBnZXQgaXNIaWRkZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWF0Y2hlcy5sZW5ndGggPT09IDA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgcmVmKTtcbiAgICB0aGlzLnNhbml0aXplciA9IHNhbml0aXplcjtcbiAgfVxuXG4gIGdldExpc3RFbGVtZW50KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ25vdm8tbGlzdCcpO1xuICB9XG5cbiAgc2FuaXRpemVIVE1MKGh0bWw6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xuICB9XG59XG4iXX0=