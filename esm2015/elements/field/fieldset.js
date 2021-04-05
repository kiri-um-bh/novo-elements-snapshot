import { __decorate, __metadata } from "tslib";
// NG2
import { ChangeDetectionStrategy, Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { BooleanInput } from '../../utils';
import { NovoFieldElement } from './field';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class NovoFieldsElement {
    constructor() {
        this._appearance = 'horizontal';
        this.fullWidth = false;
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
    } }, hostAttrs: [1, "novo-field"], hostVars: 2, hostBindings: function NovoFieldsElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("full-width", ctx.fullWidth);
    } }, inputs: { appearance: "appearance", fullWidth: "fullWidth" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoFieldsElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}[_nghost-%COMP%]{display:grid;grid-gap:1.2rem}.full-width[_nghost-%COMP%]  novo-field.novo-field-appearance-vertical{grid-template-columns:minmax(300px,450px)}.full-width[_nghost-%COMP%]  novo-field.novo-field-appearance-vertical .novo-input-element{width:100%}.full-width[_nghost-%COMP%]  novo-field.novo-field-appearance-horizontal{grid-template-columns:150px minmax(150px,450px)}.full-width[_nghost-%COMP%]  novo-field.novo-field-appearance-horizontal .novo-input-element{width:100%}"], changeDetection: 0 });
__decorate([
    BooleanInput(),
    __metadata("design:type", Boolean)
], NovoFieldsElement.prototype, "fullWidth", void 0);
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
        }], fullWidth: [{
            type: HostBinding,
            args: ['class.full-width']
        }, {
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzZXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9maWVsZC9maWVsZHNldC50cyIsImVsZW1lbnRzL2ZpZWxkL2ZpZWxkc2V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU07QUFDTixPQUFPLEVBQW9CLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxTQUFTLENBQUM7OztBQWEzQyxNQUFNLE9BQU8saUJBQWlCO0lBWDlCO1FBZUUsZ0JBQVcsR0FBOEIsWUFBWSxDQUFDO1FBZ0J0RCxjQUFTLEdBQVksS0FBSyxDQUFDO0tBYTVCO0lBM0JDLElBQWEsVUFBVTtRQUNyQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksVUFBVSxDQUFDLEtBQUs7UUFDbEIsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtZQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFPRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVPLHNCQUFzQjtRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDN0IsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztrRkFoQ1UsaUJBQWlCO3NEQUFqQixpQkFBaUI7b0NBQ1gsZ0JBQWdCOzs7Ozs7OztRQ2pCbkMsa0JBQVk7O0FEb0NWO0lBREMsWUFBWSxFQUFFOztvREFDWTtrREFwQmhCLGlCQUFpQjtjQVg3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSxpQkFBaUI7Z0JBQzlCLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUM5QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxZQUFZO2lCQUdwQjthQUNGO2dCQUdDLE9BQU87a0JBRE4sZUFBZTttQkFBQyxnQkFBZ0I7WUFLcEIsVUFBVTtrQkFBdEIsS0FBSztZQWNOLFNBQVM7a0JBSFIsV0FBVzttQkFBQyxrQkFBa0I7O2tCQUM5QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEhvc3RCaW5kaW5nLCBJbnB1dCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBOb3ZvRmllbGRFbGVtZW50IH0gZnJvbSAnLi9maWVsZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZmllbGRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpZWxkc2V0Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWVsZHNldC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdub3ZvLWZpZWxkJyxcbiAgICAvLyAnW2NsYXNzLm5vdm8tZmllbGQtYXBwZWFyYW5jZS1ob3Jpem9udGFsXSc6ICdhcHBlYXJhbmNlPT1cImhvcml6b250YWxcIicsXG4gICAgLy8gJ1tjbGFzcy5ub3ZvLWZpZWxkLWFwcGVhcmFuY2UtdmVydGljYWxdJzogJ2FwcGVhcmFuY2U9PVwidmVydGljYWxcIicsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9GaWVsZHNFbGVtZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oTm92b0ZpZWxkRWxlbWVudClcbiAgX2ZpZWxkczogUXVlcnlMaXN0PE5vdm9GaWVsZEVsZW1lbnQ+O1xuXG4gIF9hcHBlYXJhbmNlOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ2hvcml6b250YWwnO1xuXG4gIEBJbnB1dCgpIGdldCBhcHBlYXJhbmNlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7XG4gIH1cblxuICBzZXQgYXBwZWFyYW5jZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9hcHBlYXJhbmNlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fYXBwZWFyYW5jZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fdXBkYXRlRmllbGRBcHBlYXJhbmNlKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mdWxsLXdpZHRoJylcbiAgQElucHV0KClcbiAgQEJvb2xlYW5JbnB1dCgpXG4gIGZ1bGxXaWR0aDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiBhbnkge1xuICAgIHRoaXMuX3VwZGF0ZUZpZWxkQXBwZWFyYW5jZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRmllbGRBcHBlYXJhbmNlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9maWVsZHMpIHtcbiAgICAgIHRoaXMuX2ZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBmaWVsZC5hcHBlYXJhbmNlID0gdGhpcy5hcHBlYXJhbmNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+Il19