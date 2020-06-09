// NG2
import { Component, Input, EventEmitter, Output, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
var _c0 = ["*"];
var NovoNavElement = /** @class */ (function () {
    function NovoNavElement() {
        this.theme = '';
        this.direction = '';
        this.condensed = false;
        this.items = [];
    }
    NovoNavElement.prototype.select = function (item) {
        /**
         * Deactivate all other tabs
         */
        function _deactivateAllItems(items) {
            items.forEach(function (t) {
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
        var element = document.querySelector('novo-tab-link.active span.indicator');
        if (element) {
            element.style.opacity = 0.99;
            setTimeout(function () {
                element.style.opacity = 1;
            }, 10);
        }
    };
    NovoNavElement.prototype.add = function (item) {
        if (this.items.length === 0) {
            item.active = true;
            // item.selected.next();
        }
        this.items.push(item);
    };
    NovoNavElement.ɵfac = function NovoNavElement_Factory(t) { return new (t || NovoNavElement)(); };
    NovoNavElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoNavElement, selectors: [["novo-nav"]], hostVars: 2, hostBindings: function NovoNavElement_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("condensed", ctx.condensed);
        } }, inputs: { theme: "theme", direction: "direction", outlet: "outlet", router: "router", condensed: "condensed" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoNavElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return NovoNavElement;
}());
export { NovoNavElement };
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
var NovoTabElement = /** @class */ (function () {
    function NovoTabElement(nav) {
        this.active = false;
        this.disabled = false;
        this.activeChange = new EventEmitter();
        this.nav = nav;
        this.nav.add(this);
    }
    NovoTabElement.prototype.select = function () {
        if (!this.disabled) {
            this.activeChange.emit(true);
            this.nav.select(this);
        }
    };
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
    return NovoTabElement;
}());
export { NovoTabElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTabElement, [{
        type: Component,
        args: [{
                selector: 'novo-tab',
                host: {
                    '(click)': 'select()',
                    '[class.active]': 'active',
                    '[class.disabled]': 'disabled',
                },
                template: "\n        <div class=\"novo-tab-link\">\n            <ng-content></ng-content>\n        </div>\n        <span class=\"indicator\"></span>\n   ",
            }]
    }], function () { return [{ type: NovoNavElement }]; }, { active: [{
            type: Input
        }], disabled: [{
            type: Input
        }], activeChange: [{
            type: Output
        }] }); })();
var NovoTabButtonElement = /** @class */ (function () {
    function NovoTabButtonElement(nav) {
        this.active = false;
        this.disabled = false;
        this.nav = nav;
        this.nav.add(this);
    }
    NovoTabButtonElement.prototype.select = function () {
        if (!this.disabled) {
            this.nav.select(this);
        }
    };
    NovoTabButtonElement.ɵfac = function NovoTabButtonElement_Factory(t) { return new (t || NovoTabButtonElement)(i0.ɵɵdirectiveInject(NovoNavElement)); };
    NovoTabButtonElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoTabButtonElement, selectors: [["novo-tab-button"]], hostVars: 4, hostBindings: function NovoTabButtonElement_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function NovoTabButtonElement_click_HostBindingHandler() { return ctx.select(); });
        } if (rf & 2) {
            i0.ɵɵclassProp("active", ctx.active)("disabled", ctx.disabled);
        } }, inputs: { active: "active", disabled: "disabled" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoTabButtonElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return NovoTabButtonElement;
}());
export { NovoTabButtonElement };
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
var NovoTabLinkElement = /** @class */ (function () {
    function NovoTabLinkElement(nav) {
        this.active = false;
        this.disabled = false;
        this.nav = nav;
        this.nav.add(this);
    }
    NovoTabLinkElement.prototype.select = function () {
        if (!this.disabled) {
            this.nav.select(this);
        }
    };
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
    return NovoTabLinkElement;
}());
export { NovoTabLinkElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTabLinkElement, [{
        type: Component,
        args: [{
                selector: 'novo-tab-link',
                host: {
                    '(click)': 'select()',
                    '[class.active]': 'active',
                    '[class.disabled]': 'disabled',
                },
                template: "\n        <div class=\"novo-tab-link\">\n            <ng-content></ng-content>\n        </div>\n        <span class=\"indicator\"></span>\n    ",
            }]
    }], function () { return [{ type: NovoNavElement }]; }, { active: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
var NovoNavOutletElement = /** @class */ (function () {
    function NovoNavOutletElement() {
        this.items = [];
    }
    NovoNavOutletElement.prototype.show = function (index) {
        var item = this.items[index];
        /**
         * Deactivates other tab items
         * @param items - deactivated items
         */
        function _deactivateAllItems(items) {
            items.forEach(function (t) {
                if (t.active === true) {
                    // t.deselected.next();
                }
                t.active = false;
            });
        }
        _deactivateAllItems(this.items);
        item.active = true;
    };
    NovoNavOutletElement.prototype.add = function (item) {
        if (this.items.length === 0) {
            item.active = true;
        }
        this.items.push(item);
    };
    NovoNavOutletElement.ɵfac = function NovoNavOutletElement_Factory(t) { return new (t || NovoNavOutletElement)(); };
    NovoNavOutletElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoNavOutletElement, selectors: [["novo-nav-outlet"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoNavOutletElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return NovoNavOutletElement;
}());
export { NovoNavOutletElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoNavOutletElement, [{
        type: Component,
        args: [{
                selector: 'novo-nav-outlet',
                template: '<ng-content></ng-content>',
            }]
    }], null, null); })();
var NovoNavContentElement = /** @class */ (function () {
    function NovoNavContentElement(outlet) {
        this.active = false;
        outlet.add(this);
    }
    NovoNavContentElement.ɵfac = function NovoNavContentElement_Factory(t) { return new (t || NovoNavContentElement)(i0.ɵɵdirectiveInject(NovoNavOutletElement)); };
    NovoNavContentElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoNavContentElement, selectors: [["novo-nav-content"]], hostVars: 2, hostBindings: function NovoNavContentElement_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("active", ctx.active);
        } }, inputs: { active: "active" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoNavContentElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return NovoNavContentElement;
}());
export { NovoNavContentElement };
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
var NovoNavHeaderElement = /** @class */ (function () {
    function NovoNavHeaderElement(outlet) {
        this.active = false;
        this.active = this.active || false;
        this.outlet = outlet;
    }
    NovoNavHeaderElement.prototype.show = function (event) {
        try {
            var INDEX = this.outlet.items.indexOf(this.forElement);
            if (INDEX > -1) {
                this.outlet.show(INDEX);
            }
        }
        catch (err) {
            // do nothing
        }
    };
    NovoNavHeaderElement.ɵfac = function NovoNavHeaderElement_Factory(t) { return new (t || NovoNavHeaderElement)(i0.ɵɵdirectiveInject(NovoNavOutletElement)); };
    NovoNavHeaderElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoNavHeaderElement, selectors: [["novo-nav-header"]], hostVars: 2, hostBindings: function NovoNavHeaderElement_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function NovoNavHeaderElement_click_HostBindingHandler($event) { return ctx.show($event); });
        } if (rf & 2) {
            i0.ɵɵclassProp("active", ctx.active);
        } }, inputs: { active: "active", forElement: ["for", "forElement"] }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoNavHeaderElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return NovoNavHeaderElement;
}());
export { NovoNavHeaderElement };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFicy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJzL1RhYnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFFcEY7SUFBQTtRQU1FLFVBQUssR0FBVyxFQUFFLENBQUM7UUFFbkIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQU92QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLFVBQUssR0FBZSxFQUFFLENBQUM7S0FzQ3hCO0lBcENDLCtCQUFNLEdBQU4sVUFBTyxJQUFJO1FBQ1Q7O1dBRUc7UUFDSCxTQUFTLG1CQUFtQixDQUFDLEtBQUs7WUFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtvQkFDckIsdUJBQXVCO2lCQUN4QjtnQkFDRCxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM1QztRQUVELGtEQUFrRDtRQUNsRCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHFDQUFxQyxDQUFRLENBQUM7UUFDckYsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENB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O2FBQ3RDO3NDQUtxQixvQkFBb0I7a0JBSHZDLEtBQUs7O0FBUVI7SUFlRSw4QkFBWSxNQUE0QjtRQUx4QyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBTXRCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELG1DQUFJLEdBQUosVUFBSyxLQUFXO1FBQ2QsSUFBSTtZQUNGLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDekQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekI7U0FDRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osYUFBYTtTQUNkO0lBQ0gsQ0FBQzs0RkFyQlUsb0JBQW9CLHVCQU9YLG9CQUFvQjs2REFQN0Isb0JBQW9COzJHQUFwQixnQkFBWTs7Ozs7WUFGWixrQkFBWTs7K0JBek56QjtDQWlQQyxBQTlCRCxJQThCQztTQXRCWSxvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQVJoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsSUFBSSxFQUFFO29CQUNKLGdCQUFnQixFQUFFLFFBQVE7b0JBQzFCLFNBQVMsRUFBRSxjQUFjO2lCQUMxQjtnQkFDRCxRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDO3NDQVFxQixvQkFBb0I7a0JBTnZDLEtBQUs7O2tCQUVMLEtBQUs7bUJBQUMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbmF2JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b05hdkVsZW1lbnQge1xuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpXG4gIGRpcmVjdGlvbjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpXG4gIG91dGxldDogYW55O1xuICBASW5wdXQoKVxuICByb3V0ZXI6IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb25kZW5zZWQnKVxuICBASW5wdXQoKVxuICBjb25kZW5zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBpdGVtczogQXJyYXk8YW55PiA9IFtdO1xuXG4gIHNlbGVjdChpdGVtKSB7XG4gICAgLyoqXG4gICAgICogRGVhY3RpdmF0ZSBhbGwgb3RoZXIgdGFic1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9kZWFjdGl2YXRlQWxsSXRlbXMoaXRlbXMpIHtcbiAgICAgIGl0ZW1zLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgaWYgKHQuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gdC5kZXNlbGVjdGVkLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICB0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2RlYWN0aXZhdGVBbGxJdGVtcyh0aGlzLml0ZW1zKTtcbiAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgaWYgKHRoaXMub3V0bGV0KSB7XG4gICAgICB0aGlzLm91dGxldC5zaG93KHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gICAgfVxuXG4gICAgLy8gVE9ETyAtIHJlbW92ZSBoYWNrIHRvIG1ha2UgRE9NIHJlcmVuZGVyIC0gamdvZGlcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignbm92by10YWItbGluay5hY3RpdmUgc3Bhbi5pbmRpY2F0b3InKSBhcyBhbnk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDAuOTk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH1cblxuICBhZGQoaXRlbSkge1xuICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgLy8gaXRlbS5zZWxlY3RlZC5uZXh0KCk7XG4gICAgfVxuICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRhYicsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdzZWxlY3QoKScsXG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZScsXG4gICAgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by10YWItbGlua1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmRpY2F0b3JcIj48L3NwYW4+XG4gICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGFiRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KClcbiAgYWN0aXZlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgbmF2OiBhbnk7XG5cbiAgY29uc3RydWN0b3IobmF2OiBOb3ZvTmF2RWxlbWVudCkge1xuICAgIHRoaXMubmF2ID0gbmF2O1xuICAgIHRoaXMubmF2LmFkZCh0aGlzKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuYWN0aXZlQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gICAgICB0aGlzLm5hdi5zZWxlY3QodGhpcyk7XG4gICAgfVxuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdGFiLWJ1dHRvbicsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdzZWxlY3QoKScsXG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZScsXG4gICAgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICB9LFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGFiQnV0dG9uRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG5hdjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKG5hdjogTm92b05hdkVsZW1lbnQpIHtcbiAgICB0aGlzLm5hdiA9IG5hdjtcbiAgICB0aGlzLm5hdi5hZGQodGhpcyk7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm5hdi5zZWxlY3QodGhpcyk7XG4gICAgfVxuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdGFiLWxpbmsnLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnc2VsZWN0KCknLFxuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdhY3RpdmUnLFxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tdGFiLWxpbmtcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9zcGFuPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJMaW5rRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG5hdjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKG5hdjogTm92b05hdkVsZW1lbnQpIHtcbiAgICB0aGlzLm5hdiA9IG5hdjtcbiAgICB0aGlzLm5hdi5hZGQodGhpcyk7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm5hdi5zZWxlY3QodGhpcyk7XG4gICAgfVxuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbmF2LW91dGxldCcsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9OYXZPdXRsZXRFbGVtZW50IHtcbiAgaXRlbXM6IEFycmF5PGFueT4gPSBbXTtcblxuICBzaG93KGluZGV4KSB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbaW5kZXhdO1xuXG4gICAgLyoqXG4gICAgICogRGVhY3RpdmF0ZXMgb3RoZXIgdGFiIGl0ZW1zXG4gICAgICogQHBhcmFtIGl0ZW1zIC0gZGVhY3RpdmF0ZWQgaXRlbXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZGVhY3RpdmF0ZUFsbEl0ZW1zKGl0ZW1zKSB7XG4gICAgICBpdGVtcy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgIGlmICh0LmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIHQuZGVzZWxlY3RlZC5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIF9kZWFjdGl2YXRlQWxsSXRlbXModGhpcy5pdGVtcyk7XG4gICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgYWRkKGl0ZW0pIHtcbiAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbmF2LWNvbnRlbnQnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZScsXG4gIH0sXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9OYXZDb250ZW50RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKG91dGxldDogTm92b05hdk91dGxldEVsZW1lbnQpIHtcbiAgICBvdXRsZXQuYWRkKHRoaXMpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbmF2LWhlYWRlcicsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgICAnKGNsaWNrKSc6ICdzaG93KCRldmVudCknLFxuICB9LFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTmF2SGVhZGVyRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ2ZvcicpXG4gIGZvckVsZW1lbnQ6IGFueTtcbiAgb3V0bGV0OiBhbnk7XG5cbiAgY29uc3RydWN0b3Iob3V0bGV0OiBOb3ZvTmF2T3V0bGV0RWxlbWVudCkge1xuICAgIHRoaXMuYWN0aXZlID0gdGhpcy5hY3RpdmUgfHwgZmFsc2U7XG4gICAgdGhpcy5vdXRsZXQgPSBvdXRsZXQ7XG4gIH1cblxuICBzaG93KGV2ZW50PzogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IElOREVYID0gdGhpcy5vdXRsZXQuaXRlbXMuaW5kZXhPZih0aGlzLmZvckVsZW1lbnQpO1xuICAgICAgaWYgKElOREVYID4gLTEpIHtcbiAgICAgICAgdGhpcy5vdXRsZXQuc2hvdyhJTkRFWCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxuICB9XG59XG4iXX0=