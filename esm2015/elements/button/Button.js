/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2J1dHRvbi9CdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQW1EMUUsTUFBTSxPQUFPLGlCQUFpQjtJQWpEOUI7UUFtRFcsU0FBSSxHQUFXLE9BQU8sQ0FBQztJQWNsQyxDQUFDOzs7OztJQVhDLElBQ0ksSUFBSSxDQUFDLElBQVk7UUFDbkIsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7O0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7OztZQTlERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLElBQUksRUFBRTtvQkFDSixjQUFjLEVBQUUsT0FBTztvQkFDdkIsY0FBYyxFQUFFLE9BQU87b0JBQ3ZCLGFBQWEsRUFBRSxNQUFNO29CQUNyQixnQkFBZ0IsRUFBRSxTQUFTO29CQUMzQixhQUFhLEVBQUUsTUFBTTtpQkFDdEI7Z0JBQ0QsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUNUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7b0JBRUUsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLOzs7O0lBSk4sa0NBQXVCOztJQUN2QixpQ0FBZ0M7O0lBQ2hDLGtDQUF1Qjs7SUFDdkIsb0NBQTBCOzs7OztJQVcxQixrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvblt0aGVtZV0nLFxuICBob3N0OiB7XG4gICAgJ1thdHRyLnRoZW1lXSc6ICd0aGVtZScsXG4gICAgJ1thdHRyLmNvbG9yXSc6ICdjb2xvcicsXG4gICAgJ1thdHRyLmljb25dJzogJ2ljb24nLFxuICAgICdbYXR0ci5sb2FkaW5nXSc6ICdsb2FkaW5nJyxcbiAgICAnW2F0dHIuc2lkZV0nOiAnc2lkZScsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImZsZXgtd3JhcHBlclwiPlxuICAgICAgPCEtLUxlZnQgSWNvbi0tPlxuICAgICAgPGkgKm5nSWY9XCJpY29uICYmIHNpZGUgPT09ICdsZWZ0JyAmJiAhbG9hZGluZ1wiIFtuZ0NsYXNzXT1cImljb25cIj48L2k+XG4gICAgICA8IS0tVHJhbnNjbHVkZWQgQ29udGVudC0tPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPCEtLVJpZ2h0IEljb24tLT5cbiAgICAgIDxpICpuZ0lmPVwiaWNvbiAmJiBzaWRlID09PSAncmlnaHQnICYmICFsb2FkaW5nXCIgW25nQ2xhc3NdPVwiaWNvblwiPjwvaT5cbiAgICAgIDwhLS1Mb2FkaW5nLS0+XG4gICAgICA8aSAqbmdJZj1cImxvYWRpbmdcIiBjbGFzcz1cImxvYWRpbmdcIj5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgeG1sbnM6YT1cImh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC9cIlxuICAgICAgICAgIHg9XCIwcHhcIlxuICAgICAgICAgIHk9XCIwcHhcIlxuICAgICAgICAgIHdpZHRoPVwiMTguMnB4XCJcbiAgICAgICAgICBoZWlnaHQ9XCIxOC41cHhcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTguMiAxOC41XCJcbiAgICAgICAgICBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTguMiAxOC41O1wiXG4gICAgICAgICAgeG1sOnNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxuICAgICAgICAgICAgLnNwaW5uZXIge1xuICAgICAgICAgICAgICBmaWxsOiAjZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGNsYXNzPVwic3Bpbm5lclwiXG4gICAgICAgICAgICBkPVwiTTkuMiwxOC41QzQuMSwxOC41LDAsMTQuNCwwLDkuMlM0LjEsMCw5LjIsMGMwLjksMCwxLjksMC4xLDIuNywwLjRjMC44LDAuMiwxLjIsMS4xLDEsMS45XG4gICAgICAgICAgICAgICAgICAgICAgICBjLTAuMiwwLjgtMS4xLDEuMi0xLjksMUMxMC41LDMuMSw5LjksMyw5LjIsM0M1LjgsMywzLDUuOCwzLDkuMnMyLjgsNi4yLDYuMiw2LjJjMi44LDAsNS4zLTEuOSw2LTQuN2MwLjItMC44LDEtMS4zLDEuOC0xLjFcbiAgICAgICAgICAgICAgICAgICAgICAgIGMwLjgsMC4yLDEuMywxLDEuMSwxLjhDMTcuMSwxNS43LDEzLjQsMTguNSw5LjIsMTguNXpcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9pPlxuICAgIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0J1dHRvbkVsZW1lbnQge1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBzaWRlOiBzdHJpbmcgPSAncmlnaHQnO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nO1xuICBASW5wdXQoKSBsb2FkaW5nOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzZXQgaWNvbihpY29uOiBzdHJpbmcpIHtcbiAgICBpZiAoaWNvbikge1xuICAgICAgdGhpcy5faWNvbiA9IGBiaGktJHtpY29ufWA7XG4gICAgfVxuICB9XG4gIGdldCBpY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cblxuICBwcml2YXRlIF9pY29uOiBzdHJpbmc7XG59XG4iXX0=