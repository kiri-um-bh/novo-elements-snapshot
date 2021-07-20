import { __decorate, __metadata } from "tslib";
// NG2
import { Component, EventEmitter, HostBinding, Input, Output, ViewChild } from '@angular/core';
import { BooleanInput } from '../../utils';
import * as i0 from "@angular/core";
const _c0 = ["*"];
const _c1 = ["tablink"];
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
NovoNavElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoNavElement, selectors: [["novo-nav"]], hostVars: 3, hostBindings: function NovoNavElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("role", ctx.tablist);
        i0.ɵɵclassProp("condensed", ctx.condensed);
    } }, inputs: { theme: "theme", direction: "direction", outlet: "outlet", router: "router", condensed: "condensed" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoNavElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
__decorate([
    BooleanInput(),
    __metadata("design:type", Boolean)
], NovoNavElement.prototype, "condensed", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoNavElement, [{
        type: Component,
        args: [{
                selector: 'novo-nav',
                template: '<ng-content></ng-content>',
                host: {
                    '[attr.role]': 'tablist',
                },
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
        this.onlyText = true;
        this.nav = nav;
        this.nav.add(this);
    }
    get hb_textOnly() {
        return this.onlyText;
    }
    ngAfterViewInit() {
        const nodes = this.tablink.nativeElement.childNodes;
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].nodeType !== Node.TEXT_NODE)
                this.onlyText = false;
        }
    }
    select() {
        if (!this.disabled) {
            this.activeChange.emit(true);
            this.nav.select(this);
        }
    }
}
NovoTabElement.ɵfac = function NovoTabElement_Factory(t) { return new (t || NovoTabElement)(i0.ɵɵdirectiveInject(NovoNavElement)); };
NovoTabElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoTabElement, selectors: [["novo-tab"]], viewQuery: function NovoTabElement_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tablink = _t.first);
    } }, hostVars: 7, hostBindings: function NovoTabElement_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function NovoTabElement_click_HostBindingHandler() { return ctx.select(); });
    } if (rf & 2) {
        i0.ɵɵattribute("role", ctx.tab);
        i0.ɵɵclassProp("active", ctx.active)("disabled", ctx.disabled)("text-only", ctx.hb_textOnly);
    } }, inputs: { active: "active", color: "color", disabled: "disabled" }, outputs: { activeChange: "activeChange" }, ngContentSelectors: _c0, decls: 4, vars: 0, consts: [[1, "novo-tab-link"], ["tablink", ""], [1, "indicator"]], template: function NovoTabElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "span", 2);
    } }, encapsulation: 2 });
__decorate([
    BooleanInput(),
    __metadata("design:type", Boolean)
], NovoTabElement.prototype, "disabled", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTabElement, [{
        type: Component,
        args: [{
                selector: 'novo-tab',
                host: {
                    '(click)': 'select()',
                    '[class.active]': 'active',
                    '[class.disabled]': 'disabled',
                    '[attr.role]': 'tab',
                },
                template: `
    <div #tablink class="novo-tab-link">
      <ng-content></ng-content>
    </div>
    <span class="indicator"></span>
  `,
            }]
    }], function () { return [{ type: NovoNavElement }]; }, { active: [{
            type: Input
        }], color: [{
            type: Input
        }], disabled: [{
            type: Input
        }], activeChange: [{
            type: Output
        }], hb_textOnly: [{
            type: HostBinding,
            args: ['class.text-only']
        }], tablink: [{
            type: ViewChild,
            args: ['tablink']
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
NovoTabButtonElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoTabButtonElement, selectors: [["novo-tab-button"]], hostVars: 5, hostBindings: function NovoTabButtonElement_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function NovoTabButtonElement_click_HostBindingHandler() { return ctx.select(); });
    } if (rf & 2) {
        i0.ɵɵattribute("role", ctx.tab);
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
                    '[attr.role]': 'tab',
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
            if (this.spy) {
                const el = document.querySelector(`#${this.spy}`);
                el === null || el === void 0 ? void 0 : el.scrollIntoView(true);
            }
        }
    }
}
NovoTabLinkElement.ɵfac = function NovoTabLinkElement_Factory(t) { return new (t || NovoTabLinkElement)(i0.ɵɵdirectiveInject(NovoNavElement)); };
NovoTabLinkElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoTabLinkElement, selectors: [["novo-tab-link"]], hostVars: 5, hostBindings: function NovoTabLinkElement_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function NovoTabLinkElement_click_HostBindingHandler() { return ctx.select(); });
    } if (rf & 2) {
        i0.ɵɵattribute("role", ctx.tab);
        i0.ɵɵclassProp("active", ctx.active)("disabled", ctx.disabled);
    } }, inputs: { active: "active", disabled: "disabled", spy: "spy" }, ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "novo-tab-link"], [1, "indicator"]], template: function NovoTabLinkElement_Template(rf, ctx) { if (rf & 1) {
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
                    '[attr.role]': 'tab',
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
        }], spy: [{
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
NovoNavContentElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoNavContentElement, selectors: [["novo-nav-content"]], hostVars: 3, hostBindings: function NovoNavContentElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("role", ctx.tabpanel);
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
                    '[attr.role]': 'tabpanel',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFicy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJzL1RhYnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU07QUFDTixPQUFPLEVBQWlCLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFTM0MsTUFBTSxPQUFPLGNBQWM7SUFQM0I7UUFTRSxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBRW5CLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFRdkIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixVQUFLLEdBQWUsRUFBRSxDQUFDO0tBc0N4QjtJQXBDQyxNQUFNLENBQUMsSUFBSTtRQUNUOztXQUVHO1FBQ0gsU0FBUyxtQkFBbUIsQ0FBQyxLQUFLO1lBQ2hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtvQkFDckIsdUJBQXVCO2lCQUN4QjtnQkFDRCxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM1QztRQUVE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QkFDRCxRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDO3NDQUtxQixvQkFBb0IsVUFGeEMsTUFBTTtrQkFETCxLQUFLOztBQWdCUixNQUFNLE9BQU8sb0JBQW9CO0lBTy9CLFlBQVksTUFBNEI7UUFMeEMsV0FBTSxHQUFZLEtBQUssQ0FBQztRQU10QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLENBQUMsS0FBVztRQUNkLElBQUk7WUFDRixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3pELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLGFBQWE7U0FDZDtJQUNILENBQUM7O3dGQXJCVSxvQkFBb0IsdUJBT1gsb0JBQW9CO3lEQVA3QixvQkFBb0I7dUdBQXBCLGdCQUFZOzs7OztRQUZaLGtCQUFZOztrREFFWixvQkFBb0I7Y0FSaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLElBQUksRUFBRTtvQkFDSixnQkFBZ0IsRUFBRSxRQUFRO29CQUMxQixTQUFTLEVBQUUsY0FBYztpQkFDMUI7Z0JBQ0QsUUFBUSxFQUFFLDJCQUEyQjthQUN0QztzQ0FRcUIsb0JBQW9CLFVBTHhDLE1BQU07a0JBREwsS0FBSztZQUdOLFVBQVU7a0JBRFQsS0FBSzttQkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLW5hdicsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIucm9sZV0nOiAndGFibGlzdCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9OYXZFbGVtZW50IHtcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKVxuICBkaXJlY3Rpb246IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKVxuICBvdXRsZXQ6IGFueTtcbiAgQElucHV0KClcbiAgcm91dGVyOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29uZGVuc2VkJylcbiAgQElucHV0KClcbiAgQEJvb2xlYW5JbnB1dCgpXG4gIGNvbmRlbnNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGl0ZW1zOiBBcnJheTxhbnk+ID0gW107XG5cbiAgc2VsZWN0KGl0ZW0pIHtcbiAgICAvKipcbiAgICAgKiBEZWFjdGl2YXRlIGFsbCBvdGhlciB0YWJzXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2RlYWN0aXZhdGVBbGxJdGVtcyhpdGVtcykge1xuICAgICAgaXRlbXMuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICBpZiAodC5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgICAvLyB0LmRlc2VsZWN0ZWQubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfZGVhY3RpdmF0ZUFsbEl0ZW1zKHRoaXMuaXRlbXMpO1xuICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5vdXRsZXQpIHtcbiAgICAgIHRoaXMub3V0bGV0LnNob3codGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPIC0gcmVtb3ZlIGhhY2sgdG8gbWFrZSBET00gcmVyZW5kZXIgLSBqZ29kaVxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLXRhYi1saW5rLmFjdGl2ZSBzcGFuLmluZGljYXRvcicpIGFzIGFueTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMC45OTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIGFkZChpdGVtKSB7XG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAvLyBpdGVtLnNlbGVjdGVkLm5leHQoKTtcbiAgICB9XG4gICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdGFiJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ3NlbGVjdCgpJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJ1thdHRyLnJvbGVdJzogJ3RhYicsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAjdGFibGluayBjbGFzcz1cIm5vdm8tdGFiLWxpbmtcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgICA8c3BhbiBjbGFzcz1cImluZGljYXRvclwiPjwvc3Bhbj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYkVsZW1lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KClcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgY29sb3I6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBAQm9vbGVhbklucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgYWN0aXZlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgb25seVRleHQgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRleHQtb25seScpXG4gIGdldCBoYl90ZXh0T25seSgpIHtcbiAgICByZXR1cm4gdGhpcy5vbmx5VGV4dDtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ3RhYmxpbmsnKVxuICB0YWJsaW5rO1xuXG4gIG5hdjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKG5hdjogTm92b05hdkVsZW1lbnQpIHtcbiAgICB0aGlzLm5hdiA9IG5hdjtcbiAgICB0aGlzLm5hdi5hZGQodGhpcyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLnRhYmxpbmsubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChub2Rlc1tpXS5ub2RlVHlwZSAhPT0gTm9kZS5URVhUX05PREUpIHRoaXMub25seVRleHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFjdGl2ZUNoYW5nZS5lbWl0KHRydWUpO1xuICAgICAgdGhpcy5uYXYuc2VsZWN0KHRoaXMpO1xuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRhYi1idXR0b24nLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnc2VsZWN0KCknLFxuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdhY3RpdmUnLFxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAnW2F0dHIucm9sZV0nOiAndGFiJyxcbiAgfSxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYkJ1dHRvbkVsZW1lbnQge1xuICBASW5wdXQoKVxuICBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBuYXY6IGFueTtcblxuICBjb25zdHJ1Y3RvcihuYXY6IE5vdm9OYXZFbGVtZW50KSB7XG4gICAgdGhpcy5uYXYgPSBuYXY7XG4gICAgdGhpcy5uYXYuYWRkKHRoaXMpO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5uYXYuc2VsZWN0KHRoaXMpO1xuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRhYi1saW5rJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ3NlbGVjdCgpJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJ1thdHRyLnJvbGVdJzogJ3RhYicsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tdGFiLWxpbmtcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgICA8c3BhbiBjbGFzcz1cImluZGljYXRvclwiPjwvc3Bhbj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYkxpbmtFbGVtZW50IHtcbiAgQElucHV0KClcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNweTogc3RyaW5nO1xuXG4gIG5hdjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKG5hdjogTm92b05hdkVsZW1lbnQpIHtcbiAgICB0aGlzLm5hdiA9IG5hdjtcbiAgICB0aGlzLm5hdi5hZGQodGhpcyk7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm5hdi5zZWxlY3QodGhpcyk7XG4gICAgICBpZiAodGhpcy5zcHkpIHtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLnNweX1gKTtcbiAgICAgICAgZWw/LnNjcm9sbEludG9WaWV3KHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLW5hdi1vdXRsZXQnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTmF2T3V0bGV0RWxlbWVudCB7XG4gIGl0ZW1zOiBBcnJheTxhbnk+ID0gW107XG5cbiAgc2hvdyhpbmRleCkge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW2luZGV4XTtcblxuICAgIC8qKlxuICAgICAqIERlYWN0aXZhdGVzIG90aGVyIHRhYiBpdGVtc1xuICAgICAqIEBwYXJhbSBpdGVtcyAtIGRlYWN0aXZhdGVkIGl0ZW1zXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2RlYWN0aXZhdGVBbGxJdGVtcyhpdGVtcykge1xuICAgICAgaXRlbXMuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICBpZiAodC5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgICAvLyB0LmRlc2VsZWN0ZWQubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfZGVhY3RpdmF0ZUFsbEl0ZW1zKHRoaXMuaXRlbXMpO1xuICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGFkZChpdGVtKSB7XG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLW5hdi1jb250ZW50JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdhY3RpdmUnLFxuICAgICdbYXR0ci5yb2xlXSc6ICd0YWJwYW5lbCcsXG4gIH0sXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9OYXZDb250ZW50RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKG91dGxldDogTm92b05hdk91dGxldEVsZW1lbnQpIHtcbiAgICBvdXRsZXQuYWRkKHRoaXMpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbmF2LWhlYWRlcicsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgICAnKGNsaWNrKSc6ICdzaG93KCRldmVudCknLFxuICB9LFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTmF2SGVhZGVyRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ2ZvcicpXG4gIGZvckVsZW1lbnQ6IGFueTtcbiAgb3V0bGV0OiBhbnk7XG5cbiAgY29uc3RydWN0b3Iob3V0bGV0OiBOb3ZvTmF2T3V0bGV0RWxlbWVudCkge1xuICAgIHRoaXMuYWN0aXZlID0gdGhpcy5hY3RpdmUgfHwgZmFsc2U7XG4gICAgdGhpcy5vdXRsZXQgPSBvdXRsZXQ7XG4gIH1cblxuICBzaG93KGV2ZW50PzogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IElOREVYID0gdGhpcy5vdXRsZXQuaXRlbXMuaW5kZXhPZih0aGlzLmZvckVsZW1lbnQpO1xuICAgICAgaWYgKElOREVYID4gLTEpIHtcbiAgICAgICAgdGhpcy5vdXRsZXQuc2hvdyhJTkRFWCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxuICB9XG59XG4iXX0=