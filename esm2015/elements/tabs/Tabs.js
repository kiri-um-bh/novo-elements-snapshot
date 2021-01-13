// NG2
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class NovoNavElement {
    constructor() {
        this.theme = '';
        this.direction = '';
        this.condensed = false;
        this.items = [];
    }
    select(item) {
        /**
         * Deactivate all other tabs
         */
        function _deactivateAllItems(items) {
            items.forEach((t) => {
                if (t.active === true) {
                    // t.deselected.next();
                }
                t.active = false;
            });
        }
        _deactivateAllItems(this.items);
        item.active = true;
        if (this.outlet) {
            this.outlet.show(this.items.indexOf(item));
        }
        // TODO - remove hack to make DOM rerender - jgodi
        const element = document.querySelector('novo-tab-link.active span.indicator');
        if (element) {
            element.style.opacity = 0.99;
            setTimeout(() => {
                element.style.opacity = 1;
            }, 10);
        }
    }
    add(item) {
        if (this.items.length === 0) {
            item.active = true;
            // item.selected.next();
        }
        this.items.push(item);
    }
}
NovoNavElement.ɵfac = function NovoNavElement_Factory(t) { return new (t || NovoNavElement)(); };
NovoNavElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoNavElement, selectors: [["novo-nav"]], hostVars: 2, hostBindings: function NovoNavElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("condensed", ctx.condensed);
    } }, inputs: { theme: "theme", direction: "direction", outlet: "outlet", router: "router", condensed: "condensed" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoNavElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoNavElement, [{
        type: Component,
        args: [{
                selector: 'novo-nav',
                template: '<ng-content></ng-content>',
            }]
    }], null, { theme: [{
            type: Input
        }], direction: [{
            type: Input
        }], outlet: [{
            type: Input
        }], router: [{
            type: Input
        }], condensed: [{
            type: HostBinding,
            args: ['class.condensed']
        }, {
            type: Input
        }] }); })();
export class NovoTabElement {
    constructor(nav) {
        this.active = false;
        this.disabled = false;
        this.activeChange = new EventEmitter();
        this.nav = nav;
        this.nav.add(this);
    }
    select() {
        if (!this.disabled) {
            this.activeChange.emit(true);
            this.nav.select(this);
        }
    }
}
NovoTabElement.ɵfac = function NovoTabElement_Factory(t) { return new (t || NovoTabElement)(i0.ɵɵdirectiveInject(NovoNavElement)); };
NovoTabElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoTabElement, selectors: [["novo-tab"]], hostVars: 4, hostBindings: function NovoTabElement_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function NovoTabElement_click_HostBindingHandler() { return ctx.select(); });
    } if (rf & 2) {
        i0.ɵɵclassProp("active", ctx.active)("disabled", ctx.disabled);
    } }, inputs: { active: "active", disabled: "disabled" }, outputs: { activeChange: "activeChange" }, ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "novo-tab-link"], [1, "indicator"]], template: function NovoTabElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(2, "span", 1);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTabElement, [{
        type: Component,
        args: [{
                selector: 'novo-tab',
                host: {
                    '(click)': 'select()',
                    '[class.active]': 'active',
                    '[class.disabled]': 'disabled',
                },
                template: `
    <div class="novo-tab-link">
      <ng-content></ng-content>
    </div>
    <span class="indicator"></span>
  `,
            }]
    }], function () { return [{ type: NovoNavElement }]; }, { active: [{
            type: Input
        }], disabled: [{
            type: Input
        }], activeChange: [{
            type: Output
        }] }); })();
export class NovoTabButtonElement {
    constructor(nav) {
        this.active = false;
        this.disabled = false;
        this.nav = nav;
        this.nav.add(this);
    }
    select() {
        if (!this.disabled) {
            this.nav.select(this);
        }
    }
}
NovoTabButtonElement.ɵfac = function NovoTabButtonElement_Factory(t) { return new (t || NovoTabButtonElement)(i0.ɵɵdirectiveInject(NovoNavElement)); };
NovoTabButtonElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoTabButtonElement, selectors: [["novo-tab-button"]], hostVars: 4, hostBindings: function NovoTabButtonElement_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function NovoTabButtonElement_click_HostBindingHandler() { return ctx.select(); });
    } if (rf & 2) {
        i0.ɵɵclassProp("active", ctx.active)("disabled", ctx.disabled);
    } }, inputs: { active: "active", disabled: "disabled" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoTabButtonElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTabButtonElement, [{
        type: Component,
        args: [{
                selector: 'novo-tab-button',
                host: {
                    '(click)': 'select()',
                    '[class.active]': 'active',
                    '[class.disabled]': 'disabled',
                },
                template: '<ng-content></ng-content>',
            }]
    }], function () { return [{ type: NovoNavElement }]; }, { active: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
export class NovoTabLinkElement {
    constructor(nav) {
        this.active = false;
        this.disabled = false;
        this.nav = nav;
        this.nav.add(this);
    }
    select() {
        if (!this.disabled) {
            this.nav.select(this);
        }
    }
}
NovoTabLinkElement.ɵfac = function NovoTabLinkElement_Factory(t) { return new (t || NovoTabLinkElement)(i0.ɵɵdirectiveInject(NovoNavElement)); };
NovoTabLinkElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoTabLinkElement, selectors: [["novo-tab-link"]], hostVars: 4, hostBindings: function NovoTabLinkElement_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function NovoTabLinkElement_click_HostBindingHandler() { return ctx.select(); });
    } if (rf & 2) {
        i0.ɵɵclassProp("active", ctx.active)("disabled", ctx.disabled);
    } }, inputs: { active: "active", disabled: "disabled" }, ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "novo-tab-link"], [1, "indicator"]], template: function NovoTabLinkElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(2, "span", 1);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTabLinkElement, [{
        type: Component,
        args: [{
                selector: 'novo-tab-link',
                host: {
                    '(click)': 'select()',
                    '[class.active]': 'active',
                    '[class.disabled]': 'disabled',
                },
                template: `
    <div class="novo-tab-link">
      <ng-content></ng-content>
    </div>
    <span class="indicator"></span>
  `,
            }]
    }], function () { return [{ type: NovoNavElement }]; }, { active: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
export class NovoNavOutletElement {
    constructor() {
        this.items = [];
    }
    show(index) {
        const item = this.items[index];
        /**
         * Deactivates other tab items
         * @param items - deactivated items
         */
        function _deactivateAllItems(items) {
            items.forEach((t) => {
                if (t.active === true) {
                    // t.deselected.next();
                }
                t.active = false;
            });
        }
        _deactivateAllItems(this.items);
        item.active = true;
    }
    add(item) {
        if (this.items.length === 0) {
            item.active = true;
        }
        this.items.push(item);
    }
}
NovoNavOutletElement.ɵfac = function NovoNavOutletElement_Factory(t) { return new (t || NovoNavOutletElement)(); };
NovoNavOutletElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoNavOutletElement, selectors: [["novo-nav-outlet"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoNavOutletElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoNavOutletElement, [{
        type: Component,
        args: [{
                selector: 'novo-nav-outlet',
                template: '<ng-content></ng-content>',
            }]
    }], null, null); })();
export class NovoNavContentElement {
    constructor(outlet) {
        this.active = false;
        outlet.add(this);
    }
}
NovoNavContentElement.ɵfac = function NovoNavContentElement_Factory(t) { return new (t || NovoNavContentElement)(i0.ɵɵdirectiveInject(NovoNavOutletElement)); };
NovoNavContentElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoNavContentElement, selectors: [["novo-nav-content"]], hostVars: 2, hostBindings: function NovoNavContentElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("active", ctx.active);
    } }, inputs: { active: "active" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoNavContentElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoNavContentElement, [{
        type: Component,
        args: [{
                selector: 'novo-nav-content',
                host: {
                    '[class.active]': 'active',
                },
                template: '<ng-content></ng-content>',
            }]
    }], function () { return [{ type: NovoNavOutletElement }]; }, { active: [{
            type: Input
        }] }); })();
export class NovoNavHeaderElement {
    constructor(outlet) {
        this.active = false;
        this.active = this.active || false;
        this.outlet = outlet;
    }
    show(event) {
        try {
            const INDEX = this.outlet.items.indexOf(this.forElement);
            if (INDEX > -1) {
                this.outlet.show(INDEX);
            }
        }
        catch (err) {
            // do nothing
        }
    }
}
NovoNavHeaderElement.ɵfac = function NovoNavHeaderElement_Factory(t) { return new (t || NovoNavHeaderElement)(i0.ɵɵdirectiveInject(NovoNavOutletElement)); };
NovoNavHeaderElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoNavHeaderElement, selectors: [["novo-nav-header"]], hostVars: 2, hostBindings: function NovoNavHeaderElement_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function NovoNavHeaderElement_click_HostBindingHandler($event) { return ctx.show($event); });
    } if (rf & 2) {
        i0.ɵɵclassProp("active", ctx.active);
    } }, inputs: { active: "active", forElement: ["for", "forElement"] }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoNavHeaderElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoNavHeaderElement, [{
        type: Component,
        args: [{
                selector: 'novo-nav-header',
                host: {
                    '[class.active]': 'active',
                    '(click)': 'show($event)',
                },
                template: '<ng-content></ng-content>',
            }]
    }], function () { return [{ type: NovoNavOutletElement }]; }, { active: [{
            type: Input
        }], forElement: [{
            type: Input,
            args: ['for']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFicy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RhYnMvVGFicy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU1wRixNQUFNLE9BQU8sY0FBYztJQUozQjtRQU1FLFVBQUssR0FBVyxFQUFFLENBQUM7UUFFbkIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQU92QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLFVBQUssR0FBZSxFQUFFLENBQUM7S0FzQ3hCO0lBcENDLE1BQU0sQ0FBQyxJQUFJO1FBQ1Q7O1dBRUc7UUFDSCxTQUFTLG1CQUFtQixDQUFDLEtBQUs7WUFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNsQixJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO29CQUNyQix1QkFBdUI7aUJBQ3hCO2dCQUNELENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzVDO1FBRUQsa0RBQWtEO1FBQ2xELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMscUNBQXFDLENBQVEsQ0FBQztRQUNyRixJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUM3QixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUM1QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDUjtJQUNILENBQUM7SUFFRCxHQUFHLENBQUMsSUFBSTtRQUNOLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLHdCQUF3QjtTQUN6QjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7OzRFQWxEVSxjQUFjO21EQUFkLGNBQWM7Ozs7UUFGZCxrQkFBWTs7a0RBRVosY0FBYztjQUoxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7Z0JBR0MsS0FBSztrQkFESixLQUFLO1lBR04sU0FBUztrQkFEUixLQUFLO1lBR04sTUFBTTtrQkFETCxLQUFLO1lBR04sTUFBTTtrQkFETCxLQUFLO1lBSU4sU0FBUztrQkFGUixXQUFXO21CQUFDLGlCQUFpQjs7a0JBQzdCLEtBQUs7O0FBeURSLE1BQU0sT0FBTyxjQUFjO0lBVXpCLFlBQVksR0FBbUI7UUFSL0IsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGlCQUFZLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFLaEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7NEVBcEJVLGNBQWMsdUJBVVIsY0FBYzttREFWcEIsY0FBYzsyRkFBZCxZQUFROzs7OztRQU5qQiw4QkFDRTtRQUFBLGtCQUFZO1FBQ2QsaUJBQU07UUFDTiwwQkFBK0I7O2tEQUd0QixjQUFjO2NBZDFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxVQUFVO29CQUNyQixnQkFBZ0IsRUFBRSxRQUFRO29CQUMxQixrQkFBa0IsRUFBRSxVQUFVO2lCQUMvQjtnQkFDRCxRQUFRLEVBQUU7Ozs7O0dBS1Q7YUFDRjtzQ0FXa0IsY0FBYyxVQVIvQixNQUFNO2tCQURMLEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUs7WUFHTixZQUFZO2tCQURYLE1BQU07O0FBMkJULE1BQU0sT0FBTyxvQkFBb0I7SUFRL0IsWUFBWSxHQUFtQjtRQU4vQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFLeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7d0ZBakJVLG9CQUFvQix1QkFRZCxjQUFjO3lEQVJwQixvQkFBb0I7aUdBQXBCLFlBQVE7Ozs7O1FBRlIsa0JBQVk7O2tEQUVaLG9CQUFvQjtjQVRoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxVQUFVO29CQUNyQixnQkFBZ0IsRUFBRSxRQUFRO29CQUMxQixrQkFBa0IsRUFBRSxVQUFVO2lCQUMvQjtnQkFDRCxRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDO3NDQVNrQixjQUFjLFVBTi9CLE1BQU07a0JBREwsS0FBSztZQUdOLFFBQVE7a0JBRFAsS0FBSzs7QUErQlIsTUFBTSxPQUFPLGtCQUFrQjtJQVE3QixZQUFZLEdBQW1CO1FBTi9CLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUt4QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOztvRkFqQlUsa0JBQWtCLHVCQVFaLGNBQWM7dURBUnBCLGtCQUFrQjsrRkFBbEIsWUFBUTs7Ozs7UUFOakIsOEJBQ0U7UUFBQSxrQkFBWTtRQUNkLGlCQUFNO1FBQ04sMEJBQStCOztrREFHdEIsa0JBQWtCO2NBZDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxVQUFVO29CQUNyQixnQkFBZ0IsRUFBRSxRQUFRO29CQUMxQixrQkFBa0IsRUFBRSxVQUFVO2lCQUMvQjtnQkFDRCxRQUFRLEVBQUU7Ozs7O0dBS1Q7YUFDRjtzQ0FTa0IsY0FBYyxVQU4vQixNQUFNO2tCQURMLEtBQUs7WUFHTixRQUFRO2tCQURQLEtBQUs7O0FBcUJSLE1BQU0sT0FBTyxvQkFBb0I7SUFKakM7UUFLRSxVQUFLLEdBQWUsRUFBRSxDQUFDO0tBNEJ4QjtJQTFCQyxJQUFJLENBQUMsS0FBSztRQUNSLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFL0I7OztXQUdHO1FBQ0gsU0FBUyxtQkFBbUIsQ0FBQyxLQUFLO1lBQ2hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtvQkFDckIsdUJBQXVCO2lCQUN4QjtnQkFDRCxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFJO1FBQ04sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDOzt3RkE1QlUsb0JBQW9CO3lEQUFwQixvQkFBb0I7O1FBRnBCLGtCQUFZOztrREFFWixvQkFBb0I7Y0FKaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7O0FBdUNELE1BQU0sT0FBTyxxQkFBcUI7SUFJaEMsWUFBWSxNQUE0QjtRQUZ4QyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBR3RCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7MEZBTlUscUJBQXFCLHVCQUlaLG9CQUFvQjswREFKN0IscUJBQXFCOzs7O1FBRnJCLGtCQUFZOztrREFFWixxQkFBcUI7Y0FQakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLElBQUksRUFBRTtvQkFDSixnQkFBZ0IsRUFBRSxRQUFRO2lCQUMzQjtnQkFDRCxRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDO3NDQUtxQixvQkFBb0IsVUFGeEMsTUFBTTtrQkFETCxLQUFLOztBQWdCUixNQUFNLE9BQU8sb0JBQW9CO0lBTy9CLFlBQVksTUFBNEI7UUFMeEMsV0FBTSxHQUFZLEtBQUssQ0FBQztRQU10QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLENBQUMsS0FBVztRQUNkLElBQUk7WUFDRixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3pELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLGFBQWE7U0FDZDtJQUNILENBQUM7O3dGQXJCVSxvQkFBb0IsdUJBT1gsb0JBQW9CO3lEQVA3QixvQkFBb0I7dUdBQXBCLGdCQUFZOzs7OztRQUZaLGtCQUFZOztrREFFWixvQkFBb0I7Y0FSaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLElBQUksRUFBRTtvQkFDSixnQkFBZ0IsRUFBRSxRQUFRO29CQUMxQixTQUFTLEVBQUUsY0FBYztpQkFDMUI7Z0JBQ0QsUUFBUSxFQUFFLDJCQUEyQjthQUN0QztzQ0FRcUIsb0JBQW9CLFVBTHhDLE1BQU07a0JBREwsS0FBSztZQUdOLFVBQVU7a0JBRFQsS0FBSzttQkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1uYXYnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTmF2RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KClcbiAgZGlyZWN0aW9uOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KClcbiAgb3V0bGV0OiBhbnk7XG4gIEBJbnB1dCgpXG4gIHJvdXRlcjogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbmRlbnNlZCcpXG4gIEBJbnB1dCgpXG4gIGNvbmRlbnNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGl0ZW1zOiBBcnJheTxhbnk+ID0gW107XG5cbiAgc2VsZWN0KGl0ZW0pIHtcbiAgICAvKipcbiAgICAgKiBEZWFjdGl2YXRlIGFsbCBvdGhlciB0YWJzXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2RlYWN0aXZhdGVBbGxJdGVtcyhpdGVtcykge1xuICAgICAgaXRlbXMuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICBpZiAodC5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgICAvLyB0LmRlc2VsZWN0ZWQubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfZGVhY3RpdmF0ZUFsbEl0ZW1zKHRoaXMuaXRlbXMpO1xuICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5vdXRsZXQpIHtcbiAgICAgIHRoaXMub3V0bGV0LnNob3codGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPIC0gcmVtb3ZlIGhhY2sgdG8gbWFrZSBET00gcmVyZW5kZXIgLSBqZ29kaVxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLXRhYi1saW5rLmFjdGl2ZSBzcGFuLmluZGljYXRvcicpIGFzIGFueTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMC45OTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIGFkZChpdGVtKSB7XG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAvLyBpdGVtLnNlbGVjdGVkLm5leHQoKTtcbiAgICB9XG4gICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdGFiJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ3NlbGVjdCgpJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tdGFiLWxpbmtcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgICA8c3BhbiBjbGFzcz1cImluZGljYXRvclwiPjwvc3Bhbj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYkVsZW1lbnQge1xuICBASW5wdXQoKVxuICBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpXG4gIGFjdGl2ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIG5hdjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKG5hdjogTm92b05hdkVsZW1lbnQpIHtcbiAgICB0aGlzLm5hdiA9IG5hdjtcbiAgICB0aGlzLm5hdi5hZGQodGhpcyk7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFjdGl2ZUNoYW5nZS5lbWl0KHRydWUpO1xuICAgICAgdGhpcy5uYXYuc2VsZWN0KHRoaXMpO1xuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRhYi1idXR0b24nLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnc2VsZWN0KCknLFxuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdhY3RpdmUnLFxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgfSxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYkJ1dHRvbkVsZW1lbnQge1xuICBASW5wdXQoKVxuICBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBuYXY6IGFueTtcblxuICBjb25zdHJ1Y3RvcihuYXY6IE5vdm9OYXZFbGVtZW50KSB7XG4gICAgdGhpcy5uYXYgPSBuYXY7XG4gICAgdGhpcy5uYXYuYWRkKHRoaXMpO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5uYXYuc2VsZWN0KHRoaXMpO1xuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRhYi1saW5rJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ3NlbGVjdCgpJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tdGFiLWxpbmtcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgICA8c3BhbiBjbGFzcz1cImluZGljYXRvclwiPjwvc3Bhbj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYkxpbmtFbGVtZW50IHtcbiAgQElucHV0KClcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmF2OiBhbnk7XG5cbiAgY29uc3RydWN0b3IobmF2OiBOb3ZvTmF2RWxlbWVudCkge1xuICAgIHRoaXMubmF2ID0gbmF2O1xuICAgIHRoaXMubmF2LmFkZCh0aGlzKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubmF2LnNlbGVjdCh0aGlzKTtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1uYXYtb3V0bGV0JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b05hdk91dGxldEVsZW1lbnQge1xuICBpdGVtczogQXJyYXk8YW55PiA9IFtdO1xuXG4gIHNob3coaW5kZXgpIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tpbmRleF07XG5cbiAgICAvKipcbiAgICAgKiBEZWFjdGl2YXRlcyBvdGhlciB0YWIgaXRlbXNcbiAgICAgKiBAcGFyYW0gaXRlbXMgLSBkZWFjdGl2YXRlZCBpdGVtc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9kZWFjdGl2YXRlQWxsSXRlbXMoaXRlbXMpIHtcbiAgICAgIGl0ZW1zLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgaWYgKHQuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gdC5kZXNlbGVjdGVkLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICB0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2RlYWN0aXZhdGVBbGxJdGVtcyh0aGlzLml0ZW1zKTtcbiAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBhZGQoaXRlbSkge1xuICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1uYXYtY29udGVudCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgfSxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b05hdkNvbnRlbnRFbGVtZW50IHtcbiAgQElucHV0KClcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3Iob3V0bGV0OiBOb3ZvTmF2T3V0bGV0RWxlbWVudCkge1xuICAgIG91dGxldC5hZGQodGhpcyk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1uYXYtaGVhZGVyJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdhY3RpdmUnLFxuICAgICcoY2xpY2spJzogJ3Nob3coJGV2ZW50KScsXG4gIH0sXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9OYXZIZWFkZXJFbGVtZW50IHtcbiAgQElucHV0KClcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgnZm9yJylcbiAgZm9yRWxlbWVudDogYW55O1xuICBvdXRsZXQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihvdXRsZXQ6IE5vdm9OYXZPdXRsZXRFbGVtZW50KSB7XG4gICAgdGhpcy5hY3RpdmUgPSB0aGlzLmFjdGl2ZSB8fCBmYWxzZTtcbiAgICB0aGlzLm91dGxldCA9IG91dGxldDtcbiAgfVxuXG4gIHNob3coZXZlbnQ/OiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgSU5ERVggPSB0aGlzLm91dGxldC5pdGVtcy5pbmRleE9mKHRoaXMuZm9yRWxlbWVudCk7XG4gICAgICBpZiAoSU5ERVggPiAtMSkge1xuICAgICAgICB0aGlzLm91dGxldC5zaG93KElOREVYKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG4gIH1cbn1cbiJdfQ==