// NG2
import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class NovoFlexElement {
    constructor() {
        this.direction = 'row';
        this.align = 'center';
        this.justify = 'flex-start';
        this.wrap = 'nowrap';
        this.gap = 'nowrap';
    }
    get display() {
        return 'flex';
    }
}
NovoFlexElement.ɵfac = function NovoFlexElement_Factory(t) { return new (t || NovoFlexElement)(); };
NovoFlexElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoFlexElement, selectors: [["novo-flex"]], hostVars: 12, hostBindings: function NovoFlexElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("display", ctx.display)("flex-direction", ctx.direction)("align-items", ctx.align)("justify-content", ctx.justify)("flex-wrap", ctx.wrap)("gap", ctx.gap);
    } }, inputs: { direction: "direction", align: "align", justify: "justify", wrap: "wrap", gap: "gap" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoFlexElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoFlexElement, [{
        type: Component,
        args: [{
                selector: 'novo-flex',
                template: ` <ng-content></ng-content> `,
            }]
    }], null, { display: [{
            type: HostBinding,
            args: ['style.display']
        }], direction: [{
            type: HostBinding,
            args: ['style.flex-direction']
        }, {
            type: Input
        }], align: [{
            type: HostBinding,
            args: ['style.align-items']
        }, {
            type: Input
        }], justify: [{
            type: HostBinding,
            args: ['style.justify-content']
        }, {
            type: Input
        }], wrap: [{
            type: HostBinding,
            args: ['style.flex-wrap']
        }, {
            type: Input
        }], gap: [{
            type: HostBinding,
            args: ['style.gap']
        }, {
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxleC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2ZsZXgvRmxleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNOUQsTUFBTSxPQUFPLGVBQWU7SUFKNUI7UUFZRSxjQUFTLEdBQVcsS0FBSyxDQUFDO1FBSTFCLFVBQUssR0FBVyxRQUFRLENBQUM7UUFJekIsWUFBTyxHQUFXLFlBQVksQ0FBQztRQUkvQixTQUFJLEdBQVcsUUFBUSxDQUFDO1FBSXhCLFFBQUcsR0FBVyxRQUFRLENBQUM7S0FLeEI7SUE1QkMsSUFDSSxPQUFPO1FBQ1QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7OEVBSlUsZUFBZTtvREFBZixlQUFlOzs7O1FBRmQsa0JBQVk7O2tEQUViLGVBQWU7Y0FKM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDO2dCQUdLLE9BQU87a0JBRFYsV0FBVzttQkFBQyxlQUFlO1lBTzVCLFNBQVM7a0JBRlIsV0FBVzttQkFBQyxzQkFBc0I7O2tCQUNsQyxLQUFLO1lBS04sS0FBSztrQkFGSixXQUFXO21CQUFDLG1CQUFtQjs7a0JBQy9CLEtBQUs7WUFLTixPQUFPO2tCQUZOLFdBQVc7bUJBQUMsdUJBQXVCOztrQkFDbkMsS0FBSztZQUtOLElBQUk7a0JBRkgsV0FBVzttQkFBQyxpQkFBaUI7O2tCQUM3QixLQUFLO1lBS04sR0FBRztrQkFGRixXQUFXO21CQUFDLFdBQVc7O2tCQUN2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWZsZXgnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9GbGV4RWxlbWVudCB7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpXG4gIGdldCBkaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdmbGV4JztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZmxleC1kaXJlY3Rpb24nKVxuICBASW5wdXQoKVxuICBkaXJlY3Rpb246IHN0cmluZyA9ICdyb3cnO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuYWxpZ24taXRlbXMnKVxuICBASW5wdXQoKVxuICBhbGlnbjogc3RyaW5nID0gJ2NlbnRlcic7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5qdXN0aWZ5LWNvbnRlbnQnKVxuICBASW5wdXQoKVxuICBqdXN0aWZ5OiBzdHJpbmcgPSAnZmxleC1zdGFydCc7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5mbGV4LXdyYXAnKVxuICBASW5wdXQoKVxuICB3cmFwOiBzdHJpbmcgPSAnbm93cmFwJztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmdhcCcpXG4gIEBJbnB1dCgpXG4gIGdhcDogc3RyaW5nID0gJ25vd3JhcCc7XG5cbiAgLy8gZ2V0IGhiX2dyaWRDb2xzKCkge1xuICAvLyAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGByZXBlYXQoJHt0aGlzLmNvbHVtbnN9LCAke1Jlc291cmNlU2V0dGluZ3MuZXZlbnRXaWR0aH0pYCk7XG4gIC8vIH1cbn1cbiJdfQ==