// NG2
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { NovoFieldElement } from './field';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class NovoFieldsElement {
    constructor() {
        this._appearance = 'horizontal';
    }
    get appearance() {
        return this._appearance;
    }
    set appearance(value) {
        if (this._appearance !== value) {
            this._appearance = value;
            this._updateFieldAppearance();
        }
    }
    ngAfterContentInit() {
        this._updateFieldAppearance();
    }
    _updateFieldAppearance() {
        if (this._fields) {
            this._fields.forEach((field) => {
                field.appearance = this.appearance;
            });
        }
    }
}
NovoFieldsElement.ɵfac = function NovoFieldsElement_Factory(t) { return new (t || NovoFieldsElement)(); };
NovoFieldsElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoFieldsElement, selectors: [["novo-fields"]], contentQueries: function NovoFieldsElement_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NovoFieldElement, false);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._fields = _t);
    } }, hostAttrs: [1, "novo-field"], inputs: { appearance: "appearance" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoFieldsElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}[_nghost-%COMP%]{display:grid;grid-gap:1.2rem}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoFieldsElement, [{
        type: Component,
        args: [{
                selector: 'novo-fields',
                templateUrl: './fieldset.html',
                styleUrls: ['./fieldset.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'novo-field',
                },
            }]
    }], null, { _fields: [{
            type: ContentChildren,
            args: [NovoFieldElement]
        }], appearance: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzZXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9maWVsZC9maWVsZHNldC50cyIsImVsZW1lbnRzL2ZpZWxkL2ZpZWxkc2V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBb0IsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7O0FBYTNDLE1BQU0sT0FBTyxpQkFBaUI7SUFYOUI7UUFlRSxnQkFBVyxHQUE4QixZQUFZLENBQUM7S0F3QnZEO0lBdEJDLElBQWEsVUFBVTtRQUNyQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksVUFBVSxDQUFDLEtBQUs7UUFDbEIsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtZQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVPLHNCQUFzQjtRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDN0IsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztrRkEzQlUsaUJBQWlCO3NEQUFqQixpQkFBaUI7b0NBQ1gsZ0JBQWdCOzs7Ozs7UUNoQm5DLGtCQUFZOztrRERlQyxpQkFBaUI7Y0FYN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsaUJBQWlCO2dCQUM5QixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDOUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsWUFBWTtpQkFHcEI7YUFDRjtnQkFHQyxPQUFPO2tCQUROLGVBQWU7bUJBQUMsZ0JBQWdCO1lBS3BCLFVBQVU7a0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b0ZpZWxkRWxlbWVudCB9IGZyb20gJy4vZmllbGQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWZpZWxkcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWVsZHNldC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmllbGRzZXQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbm92by1maWVsZCcsXG4gICAgLy8gJ1tjbGFzcy5ub3ZvLWZpZWxkLWFwcGVhcmFuY2UtaG9yaXpvbnRhbF0nOiAnYXBwZWFyYW5jZT09XCJob3Jpem9udGFsXCInLFxuICAgIC8vICdbY2xhc3Mubm92by1maWVsZC1hcHBlYXJhbmNlLXZlcnRpY2FsXSc6ICdhcHBlYXJhbmNlPT1cInZlcnRpY2FsXCInLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRmllbGRzRWxlbWVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKE5vdm9GaWVsZEVsZW1lbnQpXG4gIF9maWVsZHM6IFF1ZXJ5TGlzdDxOb3ZvRmllbGRFbGVtZW50PjtcblxuICBfYXBwZWFyYW5jZTogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICdob3Jpem9udGFsJztcblxuICBASW5wdXQoKSBnZXQgYXBwZWFyYW5jZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9hcHBlYXJhbmNlO1xuICB9XG5cbiAgc2V0IGFwcGVhcmFuY2UodmFsdWUpIHtcbiAgICBpZiAodGhpcy5fYXBwZWFyYW5jZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX2FwcGVhcmFuY2UgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX3VwZGF0ZUZpZWxkQXBwZWFyYW5jZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiBhbnkge1xuICAgIHRoaXMuX3VwZGF0ZUZpZWxkQXBwZWFyYW5jZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRmllbGRBcHBlYXJhbmNlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9maWVsZHMpIHtcbiAgICAgIHRoaXMuX2ZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBmaWVsZC5hcHBlYXJhbmNlID0gdGhpcy5hcHBlYXJhbmNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+Il19