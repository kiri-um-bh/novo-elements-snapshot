/**
 * @fileoverview added by tsickle
 * Generated from: elements/button/Button.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export class NovoButtonElement {
    constructor() {
        this.side = 'right';
    }
    /**
     * @param {?} icon
     * @return {?}
     */
    set icon(icon) {
        if (icon) {
            this._icon = `bhi-${icon}`;
        }
    }
    /**
     * @return {?}
     */
    get icon() {
        return this._icon;
    }
}
NovoButtonElement.decorators = [
    { type: Component, args: [{
                selector: 'button[theme]',
                host: {
                    '[attr.theme]': 'theme',
                    '[attr.color]': 'color',
                    '[attr.icon]': 'icon',
                    '[attr.loading]': 'loading',
                    '[attr.side]': 'side',
                },
                template: `
    <div class="flex-wrapper">
      <!--Left Icon-->
      <i *ngIf="icon && side === 'left' && !loading" [ngClass]="icon"></i>
      <!--Transcluded Content-->
      <ng-content></ng-content>
      <!--Right Icon-->
      <i *ngIf="icon && side === 'right' && !loading" [ngClass]="icon"></i>
      <!--Loading-->
      <i *ngIf="loading" class="loading">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
          x="0px"
          y="0px"
          width="18.2px"
          height="18.5px"
          viewBox="0 0 18.2 18.5"
          style="enable-background:new 0 0 18.2 18.5;"
          xml:space="preserve"
        >
          <style type="text/css">
            .spinner {
              fill: #ffffff;
            }
          </style>
          <path
            class="spinner"
            d="M9.2,18.5C4.1,18.5,0,14.4,0,9.2S4.1,0,9.2,0c0.9,0,1.9,0.1,2.7,0.4c0.8,0.2,1.2,1.1,1,1.9
                        c-0.2,0.8-1.1,1.2-1.9,1C10.5,3.1,9.9,3,9.2,3C5.8,3,3,5.8,3,9.2s2.8,6.2,6.2,6.2c2.8,0,5.3-1.9,6-4.7c0.2-0.8,1-1.3,1.8-1.1
                        c0.8,0.2,1.3,1,1.1,1.8C17.1,15.7,13.4,18.5,9.2,18.5z"
          />
        </svg>
      </i>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
NovoButtonElement.propDecorators = {
    color: [{ type: Input }],
    side: [{ type: Input }],
    theme: [{ type: Input }],
    loading: [{ type: Input }],
    icon: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoButtonElement.prototype.color;
    /** @type {?} */
    NovoButtonElement.prototype.side;
    /** @type {?} */
    NovoButtonElement.prototype.theme;
    /** @type {?} */
    NovoButtonElement.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    NovoButtonElement.prototype._icon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2J1dHRvbi9CdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFtRDFFLE1BQU0sT0FBTyxpQkFBaUI7SUFqRDlCO1FBbURXLFNBQUksR0FBVyxPQUFPLENBQUM7SUFjbEMsQ0FBQzs7Ozs7SUFYQyxJQUNJLElBQUksQ0FBQyxJQUFZO1FBQ25CLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7OztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7WUE5REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixJQUFJLEVBQUU7b0JBQ0osY0FBYyxFQUFFLE9BQU87b0JBQ3ZCLGNBQWMsRUFBRSxPQUFPO29CQUN2QixhQUFhLEVBQUUsTUFBTTtvQkFDckIsZ0JBQWdCLEVBQUUsU0FBUztvQkFDM0IsYUFBYSxFQUFFLE1BQU07aUJBQ3RCO2dCQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFDVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O29CQUVFLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3NCQUNMLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUpOLGtDQUF1Qjs7SUFDdkIsaUNBQWdDOztJQUNoQyxrQ0FBdUI7O0lBQ3ZCLG9DQUEwQjs7Ozs7SUFXMUIsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b25bdGhlbWVdJyxcbiAgaG9zdDoge1xuICAgICdbYXR0ci50aGVtZV0nOiAndGhlbWUnLFxuICAgICdbYXR0ci5jb2xvcl0nOiAnY29sb3InLFxuICAgICdbYXR0ci5pY29uXSc6ICdpY29uJyxcbiAgICAnW2F0dHIubG9hZGluZ10nOiAnbG9hZGluZycsXG4gICAgJ1thdHRyLnNpZGVdJzogJ3NpZGUnLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJmbGV4LXdyYXBwZXJcIj5cbiAgICAgIDwhLS1MZWZ0IEljb24tLT5cbiAgICAgIDxpICpuZ0lmPVwiaWNvbiAmJiBzaWRlID09PSAnbGVmdCcgJiYgIWxvYWRpbmdcIiBbbmdDbGFzc109XCJpY29uXCI+PC9pPlxuICAgICAgPCEtLVRyYW5zY2x1ZGVkIENvbnRlbnQtLT5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwhLS1SaWdodCBJY29uLS0+XG4gICAgICA8aSAqbmdJZj1cImljb24gJiYgc2lkZSA9PT0gJ3JpZ2h0JyAmJiAhbG9hZGluZ1wiIFtuZ0NsYXNzXT1cImljb25cIj48L2k+XG4gICAgICA8IS0tTG9hZGluZy0tPlxuICAgICAgPGkgKm5nSWY9XCJsb2FkaW5nXCIgY2xhc3M9XCJsb2FkaW5nXCI+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICAgIHhtbG5zOmE9XCJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvXCJcbiAgICAgICAgICB4PVwiMHB4XCJcbiAgICAgICAgICB5PVwiMHB4XCJcbiAgICAgICAgICB3aWR0aD1cIjE4LjJweFwiXG4gICAgICAgICAgaGVpZ2h0PVwiMTguNXB4XCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE4LjIgMTguNVwiXG4gICAgICAgICAgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4LjIgMTguNTtcIlxuICAgICAgICAgIHhtbDpzcGFjZT1cInByZXNlcnZlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj5cbiAgICAgICAgICAgIC5zcGlubmVyIHtcbiAgICAgICAgICAgICAgZmlsbDogI2ZmZmZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBjbGFzcz1cInNwaW5uZXJcIlxuICAgICAgICAgICAgZD1cIk05LjIsMTguNUM0LjEsMTguNSwwLDE0LjQsMCw5LjJTNC4xLDAsOS4yLDBjMC45LDAsMS45LDAuMSwyLjcsMC40YzAuOCwwLjIsMS4yLDEuMSwxLDEuOVxuICAgICAgICAgICAgICAgICAgICAgICAgYy0wLjIsMC44LTEuMSwxLjItMS45LDFDMTAuNSwzLjEsOS45LDMsOS4yLDNDNS44LDMsMyw1LjgsMyw5LjJzMi44LDYuMiw2LjIsNi4yYzIuOCwwLDUuMy0xLjksNi00LjdjMC4yLTAuOCwxLTEuMywxLjgtMS4xXG4gICAgICAgICAgICAgICAgICAgICAgICBjMC44LDAuMiwxLjMsMSwxLjEsMS44QzE3LjEsMTUuNywxMy40LDE4LjUsOS4yLDE4LjV6XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvaT5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9CdXR0b25FbGVtZW50IHtcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgc2lkZTogc3RyaW5nID0gJ3JpZ2h0JztcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZztcbiAgQElucHV0KCkgbG9hZGluZzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2V0IGljb24oaWNvbjogc3RyaW5nKSB7XG4gICAgaWYgKGljb24pIHtcbiAgICAgIHRoaXMuX2ljb24gPSBgYmhpLSR7aWNvbn1gO1xuICAgIH1cbiAgfVxuICBnZXQgaWNvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG5cbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xufVxuIl19