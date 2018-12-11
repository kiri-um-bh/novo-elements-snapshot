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
        this._icon = `bhi-${icon}`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2J1dHRvbi9CdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXFDMUUsTUFBTSxPQUFPLGlCQUFpQjtJQW5DOUI7UUF1Q0UsU0FBSSxHQUFXLE9BQU8sQ0FBQztJQWN6QixDQUFDOzs7OztJQVRDLElBQ0ksSUFBSSxDQUFDLElBQVk7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7O1lBbERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsSUFBSSxFQUFFO29CQUNKLGNBQWMsRUFBRSxPQUFPO29CQUN2QixjQUFjLEVBQUUsT0FBTztvQkFDdkIsYUFBYSxFQUFFLE1BQU07b0JBQ3JCLGdCQUFnQixFQUFFLFNBQVM7b0JBQzNCLGFBQWEsRUFBRSxNQUFNO2lCQUN0QjtnQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBdUJQO2dCQUNILGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7b0JBRUUsS0FBSzttQkFFTCxLQUFLO29CQUVMLEtBQUs7c0JBRUwsS0FBSzttQkFFTCxLQUFLOzs7O0lBUk4sa0NBQ2M7O0lBQ2QsaUNBQ3VCOztJQUN2QixrQ0FDYzs7SUFDZCxvQ0FDaUI7Ozs7O0lBU2pCLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uW3RoZW1lXScsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIudGhlbWVdJzogJ3RoZW1lJyxcbiAgICAnW2F0dHIuY29sb3JdJzogJ2NvbG9yJyxcbiAgICAnW2F0dHIuaWNvbl0nOiAnaWNvbicsXG4gICAgJ1thdHRyLmxvYWRpbmddJzogJ2xvYWRpbmcnLFxuICAgICdbYXR0ci5zaWRlXSc6ICdzaWRlJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtd3JhcHBlclwiPlxuICAgICAgICAgICAgPCEtLUxlZnQgSWNvbi0tPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJpY29uICYmIHNpZGUgPT09ICdsZWZ0JyAmJiAhbG9hZGluZ1wiIFtuZ0NsYXNzXT1cImljb25cIj48L2k+XG4gICAgICAgICAgICA8IS0tVHJhbnNjbHVkZWQgQ29udGVudC0tPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPCEtLVJpZ2h0IEljb24tLT5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiaWNvbiAmJiBzaWRlID09PSAncmlnaHQnICYmICFsb2FkaW5nXCIgW25nQ2xhc3NdPVwiaWNvblwiPjwvaT5cbiAgICAgICAgICAgIDwhLS1Mb2FkaW5nLS0+XG4gICAgICAgICAgICA8aSAqbmdJZj1cImxvYWRpbmdcIiBjbGFzcz1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeG1sbnM6YT1cImh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC9cIlxuICAgICAgICAgICAgICAgICAgICB4PVwiMHB4XCIgeT1cIjBweFwiIHdpZHRoPVwiMTguMnB4XCIgaGVpZ2h0PVwiMTguNXB4XCIgdmlld0JveD1cIjAgMCAxOC4yIDE4LjVcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTguMiAxOC41O1wiXG4gICAgICAgICAgICAgICAgICAgIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxuICAgICAgICAgICAgICAgICAgICAuc3Bpbm5lciB7IGZpbGw6I0ZGRkZGRjsgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwic3Bpbm5lclwiIGQ9XCJNOS4yLDE4LjVDNC4xLDE4LjUsMCwxNC40LDAsOS4yUzQuMSwwLDkuMiwwYzAuOSwwLDEuOSwwLjEsMi43LDAuNGMwLjgsMC4yLDEuMiwxLjEsMSwxLjlcbiAgICAgICAgICAgICAgICAgICAgICAgIGMtMC4yLDAuOC0xLjEsMS4yLTEuOSwxQzEwLjUsMy4xLDkuOSwzLDkuMiwzQzUuOCwzLDMsNS44LDMsOS4yczIuOCw2LjIsNi4yLDYuMmMyLjgsMCw1LjMtMS45LDYtNC43YzAuMi0wLjgsMS0xLjMsMS44LTEuMVxuICAgICAgICAgICAgICAgICAgICAgICAgYzAuOCwwLjIsMS4zLDEsMS4xLDEuOEMxNy4xLDE1LjcsMTMuNCwxOC41LDkuMiwxOC41elwiLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9CdXR0b25FbGVtZW50IHtcbiAgQElucHV0KClcbiAgY29sb3I6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2lkZTogc3RyaW5nID0gJ3JpZ2h0JztcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2V0IGljb24oaWNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5faWNvbiA9IGBiaGktJHtpY29ufWA7XG4gIH1cbiAgZ2V0IGljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuXG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcbn1cbiJdfQ==