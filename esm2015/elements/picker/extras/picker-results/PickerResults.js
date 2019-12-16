/**
 * @fileoverview added by tsickle
 * Generated from: elements/picker/extras/picker-results/PickerResults.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, ElementRef, ChangeDetectorRef } from '@angular/core';
// APP
import { NovoLabelService } from '../../../../services/novo-label-service';
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
export class PickerResults extends BasePickerResults {
    /**
     * @param {?} element
     * @param {?} labels
     * @param {?} ref
     */
    constructor(element, labels, ref) {
        super(element, ref);
        this.labels = labels;
    }
    /**
     * @return {?}
     */
    get hasNonErrorMessage() {
        return !this.isLoading && !this.matches.length && !this.hasError;
    }
    /**
     * @return {?}
     */
    getEmptyMessage() {
        if (this.shouldShowMessageForZeroLengthSearch()) {
            // this property comes from Field Interactions
            return this.config.emptyPickerMessage;
        }
        else {
            return this.term === '' ? this.labels.pickerTextFieldEmpty : this.labels.pickerEmpty;
        }
    }
    /**
     * @return {?}
     */
    shouldShowMessageForZeroLengthSearch() {
        return this.config && this.config.minSearchLength === 0 && this.term === '' && this.config.emptyPickerMessage;
    }
    /**
     * @return {?}
     */
    getListElement() {
        return this.element.nativeElement.querySelector('novo-list');
    }
}
PickerResults.decorators = [
    { type: Component, args: [{
                selector: 'picker-results',
                host: {
                    class: 'active',
                },
                template: `
    <novo-list *ngIf="matches.length > 0" direction="vertical">
      <novo-list-item
        *ngFor="let match of matches"
        (click)="selectMatch($event)"
        [class.active]="match === activeMatch"
        (mouseenter)="selectActive(match)"
        [class.disabled]="preselected(match)"
      >
        <item-content> <span [innerHtml]="highlight(match.label, term)"></span> </item-content>
      </novo-list-item>
      <novo-loading *ngIf="isLoading && matches.length > 0" theme="line"></novo-loading>
    </novo-list>
    <div class="picker-loader" *ngIf="isLoading && matches.length === 0"><novo-loading theme="line"></novo-loading></div>
    <p class="picker-error" *ngIf="hasError">{{ labels.pickerError }}</p>
    <p class="picker-null-results" *ngIf="hasNonErrorMessage">{{ getEmptyMessage() }}</p>
  `
            }] }
];
/** @nocollapse */
PickerResults.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoLabelService },
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    PickerResults.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL3BpY2tlci1yZXN1bHRzL1BpY2tlclJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRXpFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBeUI3RSxNQUFNLE9BQU8sYUFBYyxTQUFRLGlCQUFpQjs7Ozs7O0lBQ2xELFlBQVksT0FBbUIsRUFBUyxNQUF3QixFQUFFLEdBQXNCO1FBQ3RGLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFEa0IsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFFaEUsQ0FBQzs7OztJQUVELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsb0NBQW9DLEVBQUUsRUFBRTtZQUM3Qyw4Q0FBOEM7WUFDOUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1NBQ3pDO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztTQUN0RjtJQUNILENBQUM7Ozs7SUFFRCxvQ0FBb0M7UUFDbEMsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDO0lBQ2hILENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7O1lBL0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLFFBQVE7aUJBQ2hCO2dCQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztHQWdCVDthQUNGOzs7O1lBM0JtQixVQUFVO1lBRXJCLGdCQUFnQjtZQUZPLGlCQUFpQjs7OztJQTZCZCwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBCYXNlUGlja2VyUmVzdWx0cyB9IGZyb20gJy4uL2Jhc2UtcGlja2VyLXJlc3VsdHMvQmFzZVBpY2tlclJlc3VsdHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwaWNrZXItcmVzdWx0cycsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FjdGl2ZScsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5vdm8tbGlzdCAqbmdJZj1cIm1hdGNoZXMubGVuZ3RoID4gMFwiIGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICA8bm92by1saXN0LWl0ZW1cbiAgICAgICAgKm5nRm9yPVwibGV0IG1hdGNoIG9mIG1hdGNoZXNcIlxuICAgICAgICAoY2xpY2spPVwic2VsZWN0TWF0Y2goJGV2ZW50KVwiXG4gICAgICAgIFtjbGFzcy5hY3RpdmVdPVwibWF0Y2ggPT09IGFjdGl2ZU1hdGNoXCJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwic2VsZWN0QWN0aXZlKG1hdGNoKVwiXG4gICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJwcmVzZWxlY3RlZChtYXRjaClcIlxuICAgICAgPlxuICAgICAgICA8aXRlbS1jb250ZW50PiA8c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5sYWJlbCwgdGVybSlcIj48L3NwYW4+IDwvaXRlbS1jb250ZW50PlxuICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgIDxub3ZvLWxvYWRpbmcgKm5nSWY9XCJpc0xvYWRpbmcgJiYgbWF0Y2hlcy5sZW5ndGggPiAwXCIgdGhlbWU9XCJsaW5lXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgPC9ub3ZvLWxpc3Q+XG4gICAgPGRpdiBjbGFzcz1cInBpY2tlci1sb2FkZXJcIiAqbmdJZj1cImlzTG9hZGluZyAmJiBtYXRjaGVzLmxlbmd0aCA9PT0gMFwiPjxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCI+PC9ub3ZvLWxvYWRpbmc+PC9kaXY+XG4gICAgPHAgY2xhc3M9XCJwaWNrZXItZXJyb3JcIiAqbmdJZj1cImhhc0Vycm9yXCI+e3sgbGFiZWxzLnBpY2tlckVycm9yIH19PC9wPlxuICAgIDxwIGNsYXNzPVwicGlja2VyLW51bGwtcmVzdWx0c1wiICpuZ0lmPVwiaGFzTm9uRXJyb3JNZXNzYWdlXCI+e3sgZ2V0RW1wdHlNZXNzYWdlKCkgfX08L3A+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFBpY2tlclJlc3VsdHMgZXh0ZW5kcyBCYXNlUGlja2VyUmVzdWx0cyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50LCByZWYpO1xuICB9XG5cbiAgZ2V0IGhhc05vbkVycm9yTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNMb2FkaW5nICYmICF0aGlzLm1hdGNoZXMubGVuZ3RoICYmICF0aGlzLmhhc0Vycm9yO1xuICB9XG5cbiAgZ2V0RW1wdHlNZXNzYWdlKCkge1xuICAgIGlmICh0aGlzLnNob3VsZFNob3dNZXNzYWdlRm9yWmVyb0xlbmd0aFNlYXJjaCgpKSB7XG4gICAgICAgIC8vIHRoaXMgcHJvcGVydHkgY29tZXMgZnJvbSBGaWVsZCBJbnRlcmFjdGlvbnNcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmVtcHR5UGlja2VyTWVzc2FnZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudGVybSA9PT0gJycgPyB0aGlzLmxhYmVscy5waWNrZXJUZXh0RmllbGRFbXB0eSA6IHRoaXMubGFiZWxzLnBpY2tlckVtcHR5O1xuICAgIH1cbiAgfVxuXG4gIHNob3VsZFNob3dNZXNzYWdlRm9yWmVyb0xlbmd0aFNlYXJjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcubWluU2VhcmNoTGVuZ3RoID09PSAwICYmIHRoaXMudGVybSA9PT0gJycgJiYgdGhpcy5jb25maWcuZW1wdHlQaWNrZXJNZXNzYWdlO1xuICB9XG5cbiAgZ2V0TGlzdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ25vdm8tbGlzdCcpO1xuICB9XG59XG4iXX0=