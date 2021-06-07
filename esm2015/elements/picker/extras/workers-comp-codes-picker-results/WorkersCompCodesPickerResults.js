// NG2
import { Component, ElementRef, ChangeDetectorRef, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// Vendor
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import { NovoLabelService } from '../../../../services/novo-label-service';
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
WorkersCompCodesPickerResults.decorators = [
    { type: Component, args: [{
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
  `
            },] }
];
WorkersCompCodesPickerResults.ctorParameters = () => [
    { type: ElementRef },
    { type: DomSanitizer },
    { type: NovoLabelService },
    { type: ChangeDetectorRef }
];
WorkersCompCodesPickerResults.propDecorators = {
    active: [{ type: HostBinding, args: ['class.active',] }],
    isHidden: [{ type: HostBinding, args: ['hidden',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29ya2Vyc0NvbXBDb2Rlc1BpY2tlclJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGlja2VyL2V4dHJhcy93b3JrZXJzLWNvbXAtY29kZXMtcGlja2VyLXJlc3VsdHMvV29ya2Vyc0NvbXBDb2Rlc1BpY2tlclJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsU0FBUztBQUNULE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBNEMzRSxNQUFNLE9BQU8sNkJBQThCLFNBQVEsaUJBQWlCO0lBUWxFLFlBQVksT0FBbUIsRUFBVSxTQUF1QixFQUFTLE1BQXdCLEVBQUUsR0FBc0I7UUFDdkgsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQURtQixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFOakcsV0FBTSxHQUFZLElBQUksQ0FBQztRQVFyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBUkQsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQU9ELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsWUFBWSxDQUFDLFFBQWdCLEVBQUUsSUFBWTtRQUN6QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsR0FBRyxRQUFRLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7WUE3REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQ1Q7YUFDRjs7O1lBL0NtQixVQUFVO1lBQ3JCLFlBQVk7WUFHWixnQkFBZ0I7WUFKTyxpQkFBaUI7OztxQkFpRDlDLFdBQVcsU0FBQyxjQUFjO3VCQUUxQixXQUFXLFNBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBCYXNlUGlja2VyUmVzdWx0cyB9IGZyb20gJy4uL2Jhc2UtcGlja2VyLXJlc3VsdHMvQmFzZVBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dvcmtlcnMtY29tcC1jb2Rlcy1waWNrZXItcmVzdWx0cycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJwaWNrZXItbG9hZGluZ1wiICpuZ0lmPVwiaXNMb2FkaW5nICYmICFtYXRjaGVzPy5sZW5ndGhcIj5cbiAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxub3ZvLWxpc3QgZGlyZWN0aW9uPVwidmVydGljYWxcIiAqbmdJZj1cIm1hdGNoZXM/Lmxlbmd0aCA+IDAgJiYgIWhhc0Vycm9yXCI+XG4gICAgICA8bm92by1saXN0LWl0ZW1cbiAgICAgICAgKm5nRm9yPVwibGV0IG1hdGNoIG9mIG1hdGNoZXNcIlxuICAgICAgICAoY2xpY2spPVwic2VsZWN0TWF0Y2goJGV2ZW50KVwiXG4gICAgICAgIFtjbGFzcy5hY3RpdmVdPVwibWF0Y2ggPT09IGFjdGl2ZU1hdGNoXCJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwic2VsZWN0QWN0aXZlKG1hdGNoKVwiXG4gICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJwcmVzZWxlY3RlZChtYXRjaClcIlxuICAgICAgPlxuICAgICAgICA8aXRlbS1oZWFkZXI+XG4gICAgICAgICAgPGl0ZW0tdGl0bGU+XG4gICAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cInNhbml0aXplSFRNTChtYXRjaD8uZGF0YT8uY29tcGVuc2F0aW9uPy5jb2RlLCBtYXRjaD8uZGF0YT8uY29tcGVuc2F0aW9uPy5uYW1lKVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2l0ZW0tdGl0bGU+XG4gICAgICAgIDwvaXRlbS1oZWFkZXI+XG4gICAgICAgIDxpdGVtLWNvbnRlbnQgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPnt7IGxhYmVscy5zdGF0ZSB9fTogPC9zcGFuPjxzcGFuPnt7IG1hdGNoPy5kYXRhPy5jb21wZW5zYXRpb24/LnN0YXRlIH19PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj57eyBsYWJlbHMucmF0ZSB9fTogPC9zcGFuPjxzcGFuPnt7IGxhYmVscy5mb3JtYXRDdXJyZW5jeShtYXRjaD8uZGF0YT8ucmF0ZSkgfX08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2l0ZW0tY29udGVudD5cbiAgICAgICAgPGl0ZW0tY29udGVudCBkaXJlY3Rpb249XCJob3Jpem9udGFsXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+e3sgbGFiZWxzLnN0YXJ0RGF0ZSB9fTogPC9zcGFuXG4gICAgICAgICAgICA+PHNwYW4+e3sgbGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KG1hdGNoPy5kYXRhPy5zdGFydERhdGUsIHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ251bWVyaWMnLCBkYXk6ICdudW1lcmljJyB9KSB9fTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+e3sgbGFiZWxzLmVuZERhdGUgfX06IDwvc3BhblxuICAgICAgICAgICAgPjxzcGFuPnt7IGxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdChtYXRjaD8uZGF0YT8uZW5kRGF0ZSwgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbnVtZXJpYycsIGRheTogJ251bWVyaWMnIH0pIH19PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9pdGVtLWNvbnRlbnQ+XG4gICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgPG5vdm8tbG9hZGluZyB0aGVtZT1cImxpbmVcIiAqbmdJZj1cImlzTG9hZGluZyAmJiBtYXRjaGVzPy5sZW5ndGggPiAwXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgPC9ub3ZvLWxpc3Q+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFdvcmtlcnNDb21wQ29kZXNQaWNrZXJSZXN1bHRzIGV4dGVuZHMgQmFzZVBpY2tlclJlc3VsdHMge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIGFjdGl2ZTogYm9vbGVhbiA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnaGlkZGVuJylcbiAgZ2V0IGlzSGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1hdGNoZXMubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1lbnQsIHJlZik7XG4gICAgdGhpcy5zYW5pdGl6ZXIgPSBzYW5pdGl6ZXI7XG4gIH1cblxuICBnZXRMaXN0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcignbm92by1saXN0Jyk7XG4gIH1cblxuICBzYW5pdGl6ZUhUTUwoY29tcENvZGU6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGAke2NvbXBDb2RlfSB8ICR7bmFtZX1gKTtcbiAgfVxufVxuIl19