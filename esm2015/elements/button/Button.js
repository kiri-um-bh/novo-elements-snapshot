/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                <svg version="1.1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                    x="0px" y="0px" width="18.2px" height="18.5px" viewBox="0 0 18.2 18.5" style="enable-background:new 0 0 18.2 18.5;"
                    xml:space="preserve">
                <style type="text/css">
                    .spinner { fill:#FFFFFF; }
                </style>
                    <path class="spinner" d="M9.2,18.5C4.1,18.5,0,14.4,0,9.2S4.1,0,9.2,0c0.9,0,1.9,0.1,2.7,0.4c0.8,0.2,1.2,1.1,1,1.9
                        c-0.2,0.8-1.1,1.2-1.9,1C10.5,3.1,9.9,3,9.2,3C5.8,3,3,5.8,3,9.2s2.8,6.2,6.2,6.2c2.8,0,5.3-1.9,6-4.7c0.2-0.8,1-1.3,1.8-1.1
                        c0.8,0.2,1.3,1,1.1,1.8C17.1,15.7,13.4,18.5,9.2,18.5z"/>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2J1dHRvbi9CdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXFDMUUsTUFBTSxPQUFPLGlCQUFpQjtJQW5DOUI7UUFxQ1csU0FBSSxHQUFXLE9BQU8sQ0FBQztJQWNsQyxDQUFDOzs7OztJQVhDLElBQ0ksSUFBSSxDQUFDLElBQVk7UUFDbkIsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7O0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLElBQUksRUFBRTtvQkFDSixjQUFjLEVBQUUsT0FBTztvQkFDdkIsY0FBYyxFQUFFLE9BQU87b0JBQ3ZCLGFBQWEsRUFBRSxNQUFNO29CQUNyQixnQkFBZ0IsRUFBRSxTQUFTO29CQUMzQixhQUFhLEVBQUUsTUFBTTtpQkFDdEI7Z0JBQ0QsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXVCUDtnQkFDSCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O29CQUVFLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3NCQUNMLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUpOLGtDQUF1Qjs7SUFDdkIsaUNBQWdDOztJQUNoQyxrQ0FBdUI7O0lBQ3ZCLG9DQUEwQjs7Ozs7SUFXMUIsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b25bdGhlbWVdJyxcbiAgaG9zdDoge1xuICAgICdbYXR0ci50aGVtZV0nOiAndGhlbWUnLFxuICAgICdbYXR0ci5jb2xvcl0nOiAnY29sb3InLFxuICAgICdbYXR0ci5pY29uXSc6ICdpY29uJyxcbiAgICAnW2F0dHIubG9hZGluZ10nOiAnbG9hZGluZycsXG4gICAgJ1thdHRyLnNpZGVdJzogJ3NpZGUnLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8IS0tTGVmdCBJY29uLS0+XG4gICAgICAgICAgICA8aSAqbmdJZj1cImljb24gJiYgc2lkZSA9PT0gJ2xlZnQnICYmICFsb2FkaW5nXCIgW25nQ2xhc3NdPVwiaWNvblwiPjwvaT5cbiAgICAgICAgICAgIDwhLS1UcmFuc2NsdWRlZCBDb250ZW50LS0+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8IS0tUmlnaHQgSWNvbi0tPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJpY29uICYmIHNpZGUgPT09ICdyaWdodCcgJiYgIWxvYWRpbmdcIiBbbmdDbGFzc109XCJpY29uXCI+PC9pPlxuICAgICAgICAgICAgPCEtLUxvYWRpbmctLT5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4bWxuczphPVwiaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wL1wiXG4gICAgICAgICAgICAgICAgICAgIHg9XCIwcHhcIiB5PVwiMHB4XCIgd2lkdGg9XCIxOC4ycHhcIiBoZWlnaHQ9XCIxOC41cHhcIiB2aWV3Qm94PVwiMCAwIDE4LjIgMTguNVwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOC4yIDE4LjU7XCJcbiAgICAgICAgICAgICAgICAgICAgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+XG4gICAgICAgICAgICAgICAgICAgIC5zcGlubmVyIHsgZmlsbDojRkZGRkZGOyB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJzcGlubmVyXCIgZD1cIk05LjIsMTguNUM0LjEsMTguNSwwLDE0LjQsMCw5LjJTNC4xLDAsOS4yLDBjMC45LDAsMS45LDAuMSwyLjcsMC40YzAuOCwwLjIsMS4yLDEuMSwxLDEuOVxuICAgICAgICAgICAgICAgICAgICAgICAgYy0wLjIsMC44LTEuMSwxLjItMS45LDFDMTAuNSwzLjEsOS45LDMsOS4yLDNDNS44LDMsMyw1LjgsMyw5LjJzMi44LDYuMiw2LjIsNi4yYzIuOCwwLDUuMy0xLjksNi00LjdjMC4yLTAuOCwxLTEuMywxLjgtMS4xXG4gICAgICAgICAgICAgICAgICAgICAgICBjMC44LDAuMiwxLjMsMSwxLjEsMS44QzE3LjEsMTUuNywxMy40LDE4LjUsOS4yLDE4LjV6XCIvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0J1dHRvbkVsZW1lbnQge1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBzaWRlOiBzdHJpbmcgPSAncmlnaHQnO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nO1xuICBASW5wdXQoKSBsb2FkaW5nOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzZXQgaWNvbihpY29uOiBzdHJpbmcpIHtcbiAgICBpZiAoaWNvbikge1xuICAgICAgdGhpcy5faWNvbiA9IGBiaGktJHtpY29ufWA7XG4gICAgfVxuICB9XG4gIGdldCBpY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cblxuICBwcml2YXRlIF9pY29uOiBzdHJpbmc7XG59XG4iXX0=