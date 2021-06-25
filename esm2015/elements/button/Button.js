// NG2
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export class NovoButtonElement {
    constructor() {
        this.side = 'right';
    }
    set icon(icon) {
        if (icon) {
            this._icon = `bhi-${icon}`;
        }
    }
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
            },] }
];
NovoButtonElement.propDecorators = {
    color: [{ type: Input }],
    side: [{ type: Input }],
    theme: [{ type: Input }],
    loading: [{ type: Input }],
    icon: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2J1dHRvbi9CdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBbUQxRSxNQUFNLE9BQU8saUJBQWlCO0lBakQ5QjtRQW1EVyxTQUFJLEdBQVcsT0FBTyxDQUFDO0lBY2xDLENBQUM7SUFYQyxJQUNJLElBQUksQ0FBQyxJQUFZO1FBQ25CLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7WUE5REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixJQUFJLEVBQUU7b0JBQ0osY0FBYyxFQUFFLE9BQU87b0JBQ3ZCLGNBQWMsRUFBRSxPQUFPO29CQUN2QixhQUFhLEVBQUUsTUFBTTtvQkFDckIsZ0JBQWdCLEVBQUUsU0FBUztvQkFDM0IsYUFBYSxFQUFFLE1BQU07aUJBQ3RCO2dCQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFDVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O29CQUVFLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3NCQUNMLEtBQUs7bUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uW3RoZW1lXScsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIudGhlbWVdJzogJ3RoZW1lJyxcbiAgICAnW2F0dHIuY29sb3JdJzogJ2NvbG9yJyxcbiAgICAnW2F0dHIuaWNvbl0nOiAnaWNvbicsXG4gICAgJ1thdHRyLmxvYWRpbmddJzogJ2xvYWRpbmcnLFxuICAgICdbYXR0ci5zaWRlXSc6ICdzaWRlJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZmxleC13cmFwcGVyXCI+XG4gICAgICA8IS0tTGVmdCBJY29uLS0+XG4gICAgICA8aSAqbmdJZj1cImljb24gJiYgc2lkZSA9PT0gJ2xlZnQnICYmICFsb2FkaW5nXCIgW25nQ2xhc3NdPVwiaWNvblwiPjwvaT5cbiAgICAgIDwhLS1UcmFuc2NsdWRlZCBDb250ZW50LS0+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8IS0tUmlnaHQgSWNvbi0tPlxuICAgICAgPGkgKm5nSWY9XCJpY29uICYmIHNpZGUgPT09ICdyaWdodCcgJiYgIWxvYWRpbmdcIiBbbmdDbGFzc109XCJpY29uXCI+PC9pPlxuICAgICAgPCEtLUxvYWRpbmctLT5cbiAgICAgIDxpICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwibG9hZGluZ1wiPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgICB4bWxuczphPVwiaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wL1wiXG4gICAgICAgICAgeD1cIjBweFwiXG4gICAgICAgICAgeT1cIjBweFwiXG4gICAgICAgICAgd2lkdGg9XCIxOC4ycHhcIlxuICAgICAgICAgIGhlaWdodD1cIjE4LjVweFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxOC4yIDE4LjVcIlxuICAgICAgICAgIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOC4yIDE4LjU7XCJcbiAgICAgICAgICB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+XG4gICAgICAgICAgICAuc3Bpbm5lciB7XG4gICAgICAgICAgICAgIGZpbGw6ICNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgY2xhc3M9XCJzcGlubmVyXCJcbiAgICAgICAgICAgIGQ9XCJNOS4yLDE4LjVDNC4xLDE4LjUsMCwxNC40LDAsOS4yUzQuMSwwLDkuMiwwYzAuOSwwLDEuOSwwLjEsMi43LDAuNGMwLjgsMC4yLDEuMiwxLjEsMSwxLjlcbiAgICAgICAgICAgICAgICAgICAgICAgIGMtMC4yLDAuOC0xLjEsMS4yLTEuOSwxQzEwLjUsMy4xLDkuOSwzLDkuMiwzQzUuOCwzLDMsNS44LDMsOS4yczIuOCw2LjIsNi4yLDYuMmMyLjgsMCw1LjMtMS45LDYtNC43YzAuMi0wLjgsMS0xLjMsMS44LTEuMVxuICAgICAgICAgICAgICAgICAgICAgICAgYzAuOCwwLjIsMS4zLDEsMS4xLDEuOEMxNy4xLDE1LjcsMTMuNCwxOC41LDkuMiwxOC41elwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2k+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQnV0dG9uRWxlbWVudCB7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpZGU6IHN0cmluZyA9ICdyaWdodCc7XG4gIEBJbnB1dCgpIHRoZW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNldCBpY29uKGljb246IHN0cmluZykge1xuICAgIGlmIChpY29uKSB7XG4gICAgICB0aGlzLl9pY29uID0gYGJoaS0ke2ljb259YDtcbiAgICB9XG4gIH1cbiAgZ2V0IGljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuXG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcbn1cbiJdfQ==