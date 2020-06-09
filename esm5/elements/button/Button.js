// NG2
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var _c0 = ["theme", ""];
function NovoButtonElement_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 3);
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.icon);
} }
function NovoButtonElement_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 3);
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.icon);
} }
function NovoButtonElement_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "i", 4);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 5);
    i0.ɵɵelementStart(2, "style", 6);
    i0.ɵɵtext(3, " .spinner { fill: #ffffff; } ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "path", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var _c1 = ["*"];
var NovoButtonElement = /** @class */ (function () {
    function NovoButtonElement() {
        this.side = 'right';
    }
    Object.defineProperty(NovoButtonElement.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (icon) {
            if (icon) {
                this._icon = "bhi-" + icon;
            }
        },
        enumerable: true,
        configurable: true
    });
    NovoButtonElement.ɵfac = function NovoButtonElement_Factory(t) { return new (t || NovoButtonElement)(); };
    NovoButtonElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoButtonElement, selectors: [["button", "theme", ""]], hostVars: 5, hostBindings: function NovoButtonElement_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("theme", ctx.theme)("color", ctx.color)("icon", ctx.icon)("loading", ctx.loading)("side", ctx.side);
        } }, inputs: { color: "color", side: "side", theme: "theme", loading: "loading", icon: "icon" }, attrs: _c0, ngContentSelectors: _c1, decls: 5, vars: 3, consts: [[1, "flex-wrapper"], [3, "ngClass", 4, "ngIf"], ["class", "loading", 4, "ngIf"], [3, "ngClass"], [1, "loading"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xmlns", "a", "http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/", "x", "0px", "y", "0px", "width", "18.2px", "height", "18.5px", "viewBox", "0 0 18.2 18.5", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 18.2 18.5"], ["type", "text/css"], ["d", "M9.2,18.5C4.1,18.5,0,14.4,0,9.2S4.1,0,9.2,0c0.9,0,1.9,0.1,2.7,0.4c0.8,0.2,1.2,1.1,1,1.9\n                        c-0.2,0.8-1.1,1.2-1.9,1C10.5,3.1,9.9,3,9.2,3C5.8,3,3,5.8,3,9.2s2.8,6.2,6.2,6.2c2.8,0,5.3-1.9,6-4.7c0.2-0.8,1-1.3,1.8-1.1\n                        c0.8,0.2,1.3,1,1.1,1.8C17.1,15.7,13.4,18.5,9.2,18.5z", 1, "spinner"]], template: function NovoButtonElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, NovoButtonElement_i_1_Template, 1, 1, "i", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵtemplate(3, NovoButtonElement_i_3_Template, 1, 1, "i", 1);
            i0.ɵɵtemplate(4, NovoButtonElement_i_4_Template, 5, 0, "i", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.icon && ctx.side === "left" && !ctx.loading);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.icon && ctx.side === "right" && !ctx.loading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.loading);
        } }, directives: [i1.NgIf, i1.NgClass], encapsulation: 2, changeDetection: 0 });
    return NovoButtonElement;
}());
export { NovoButtonElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoButtonElement, [{
        type: Component,
        args: [{
                selector: 'button[theme]',
                host: {
                    '[attr.theme]': 'theme',
                    '[attr.color]': 'color',
                    '[attr.icon]': 'icon',
                    '[attr.loading]': 'loading',
                    '[attr.side]': 'side',
                },
                template: "\n    <div class=\"flex-wrapper\">\n      <!--Left Icon-->\n      <i *ngIf=\"icon && side === 'left' && !loading\" [ngClass]=\"icon\"></i>\n      <!--Transcluded Content-->\n      <ng-content></ng-content>\n      <!--Right Icon-->\n      <i *ngIf=\"icon && side === 'right' && !loading\" [ngClass]=\"icon\"></i>\n      <!--Loading-->\n      <i *ngIf=\"loading\" class=\"loading\">\n        <svg\n          version=\"1.1\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n          xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n          xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n          x=\"0px\"\n          y=\"0px\"\n          width=\"18.2px\"\n          height=\"18.5px\"\n          viewBox=\"0 0 18.2 18.5\"\n          style=\"enable-background:new 0 0 18.2 18.5;\"\n          xml:space=\"preserve\"\n        >\n          <style type=\"text/css\">\n            .spinner {\n              fill: #ffffff;\n            }\n          </style>\n          <path\n            class=\"spinner\"\n            d=\"M9.2,18.5C4.1,18.5,0,14.4,0,9.2S4.1,0,9.2,0c0.9,0,1.9,0.1,2.7,0.4c0.8,0.2,1.2,1.1,1,1.9\n                        c-0.2,0.8-1.1,1.2-1.9,1C10.5,3.1,9.9,3,9.2,3C5.8,3,3,5.8,3,9.2s2.8,6.2,6.2,6.2c2.8,0,5.3-1.9,6-4.7c0.2-0.8,1-1.3,1.8-1.1\n                        c0.8,0.2,1.3,1,1.1,1.8C17.1,15.7,13.4,18.5,9.2,18.5z\"\n          />\n        </svg>\n      </i>\n    </div>\n  ",
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { color: [{
            type: Input
        }], side: [{
            type: Input
        }], theme: [{
            type: Input
        }], loading: [{
            type: Input
        }], icon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2J1dHRvbi9CdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztJQWNwRSx1QkFBb0U7OztJQUFyQixxQ0FBZ0I7OztJQUkvRCx1QkFBcUU7OztJQUFyQixxQ0FBZ0I7OztJQUVoRSw0QkFDRTtJQUFBLG1CQWFFO0lBYkYsOEJBYUU7SUFBQSxnQ0FDRTtJQUFBLDZDQUdGO0lBQUEsaUJBQVE7SUFDUiwwQkFNRjtJQUFBLGlCQUFNO0lBQ1IsaUJBQUk7OztBQTVDVjtJQUFBO1FBbURXLFNBQUksR0FBVyxPQUFPLENBQUM7S0FjakM7SUFYQyxzQkFDSSxtQ0FBSTthQUtSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7YUFSRCxVQUNTLElBQVk7WUFDbkIsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFPLElBQU0sQ0FBQzthQUM1QjtRQUNILENBQUM7OztPQUFBO3NGQVZVLGlCQUFpQjswREFBakIsaUJBQWlCOzs7O1lBdkMxQiw4QkFDRTtZQUNBLDhEQUFnRTtZQUVoRSxrQkFBWTtZQUVaLDhEQUFpRTtZQUVqRSw4REFDRTtZQTBCSixpQkFBTTs7WUFqQ0QsZUFBMkM7WUFBM0Msc0VBQTJDO1lBSTNDLGVBQTRDO1lBQTVDLHVFQUE0QztZQUU1QyxlQUFlO1lBQWYsa0NBQWU7OzRCQXJCeEI7Q0FvRUMsQUFqRUQsSUFpRUM7U0FoQlksaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FqRDdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsSUFBSSxFQUFFO29CQUNKLGNBQWMsRUFBRSxPQUFPO29CQUN2QixjQUFjLEVBQUUsT0FBTztvQkFDdkIsYUFBYSxFQUFFLE1BQU07b0JBQ3JCLGdCQUFnQixFQUFFLFNBQVM7b0JBQzNCLGFBQWEsRUFBRSxNQUFNO2lCQUN0QjtnQkFDRCxRQUFRLEVBQUUsMDNDQXFDVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uW3RoZW1lXScsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIudGhlbWVdJzogJ3RoZW1lJyxcbiAgICAnW2F0dHIuY29sb3JdJzogJ2NvbG9yJyxcbiAgICAnW2F0dHIuaWNvbl0nOiAnaWNvbicsXG4gICAgJ1thdHRyLmxvYWRpbmddJzogJ2xvYWRpbmcnLFxuICAgICdbYXR0ci5zaWRlXSc6ICdzaWRlJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZmxleC13cmFwcGVyXCI+XG4gICAgICA8IS0tTGVmdCBJY29uLS0+XG4gICAgICA8aSAqbmdJZj1cImljb24gJiYgc2lkZSA9PT0gJ2xlZnQnICYmICFsb2FkaW5nXCIgW25nQ2xhc3NdPVwiaWNvblwiPjwvaT5cbiAgICAgIDwhLS1UcmFuc2NsdWRlZCBDb250ZW50LS0+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8IS0tUmlnaHQgSWNvbi0tPlxuICAgICAgPGkgKm5nSWY9XCJpY29uICYmIHNpZGUgPT09ICdyaWdodCcgJiYgIWxvYWRpbmdcIiBbbmdDbGFzc109XCJpY29uXCI+PC9pPlxuICAgICAgPCEtLUxvYWRpbmctLT5cbiAgICAgIDxpICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwibG9hZGluZ1wiPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgICB4bWxuczphPVwiaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wL1wiXG4gICAgICAgICAgeD1cIjBweFwiXG4gICAgICAgICAgeT1cIjBweFwiXG4gICAgICAgICAgd2lkdGg9XCIxOC4ycHhcIlxuICAgICAgICAgIGhlaWdodD1cIjE4LjVweFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxOC4yIDE4LjVcIlxuICAgICAgICAgIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOC4yIDE4LjU7XCJcbiAgICAgICAgICB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+XG4gICAgICAgICAgICAuc3Bpbm5lciB7XG4gICAgICAgICAgICAgIGZpbGw6ICNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgY2xhc3M9XCJzcGlubmVyXCJcbiAgICAgICAgICAgIGQ9XCJNOS4yLDE4LjVDNC4xLDE4LjUsMCwxNC40LDAsOS4yUzQuMSwwLDkuMiwwYzAuOSwwLDEuOSwwLjEsMi43LDAuNGMwLjgsMC4yLDEuMiwxLjEsMSwxLjlcbiAgICAgICAgICAgICAgICAgICAgICAgIGMtMC4yLDAuOC0xLjEsMS4yLTEuOSwxQzEwLjUsMy4xLDkuOSwzLDkuMiwzQzUuOCwzLDMsNS44LDMsOS4yczIuOCw2LjIsNi4yLDYuMmMyLjgsMCw1LjMtMS45LDYtNC43YzAuMi0wLjgsMS0xLjMsMS44LTEuMVxuICAgICAgICAgICAgICAgICAgICAgICAgYzAuOCwwLjIsMS4zLDEsMS4xLDEuOEMxNy4xLDE1LjcsMTMuNCwxOC41LDkuMiwxOC41elwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2k+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQnV0dG9uRWxlbWVudCB7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpZGU6IHN0cmluZyA9ICdyaWdodCc7XG4gIEBJbnB1dCgpIHRoZW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNldCBpY29uKGljb246IHN0cmluZykge1xuICAgIGlmIChpY29uKSB7XG4gICAgICB0aGlzLl9pY29uID0gYGJoaS0ke2ljb259YDtcbiAgICB9XG4gIH1cbiAgZ2V0IGljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuXG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcbn1cbiJdfQ==