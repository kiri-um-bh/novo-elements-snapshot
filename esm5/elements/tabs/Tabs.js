/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Component, Input, EventEmitter, Output, HostBinding } from '@angular/core';
var NovoNavElement = /** @class */ (function () {
    function NovoNavElement() {
        this.theme = '';
        this.direction = '';
        this.condensed = false;
        this.items = [];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    NovoNavElement.prototype.select = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /**
         * Deactivate all other tabs
         * @param {?} items
         * @return {?}
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
        /** @type {?} */
        var element = (/** @type {?} */ (document.querySelector('novo-tab-link.active span.indicator')));
        if (element) {
            element.style.opacity = 0.99;
            setTimeout(function () {
                element.style.opacity = 1;
            }, 10);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NovoNavElement.prototype.add = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.items.length === 0) {
            item.active = true;
            // item.selected.next();
        }
        this.items.push(item);
    };
    NovoNavElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-nav',
                    template: '<ng-content></ng-content>'
                }] }
    ];
    NovoNavElement.propDecorators = {
        theme: [{ type: Input }],
        direction: [{ type: Input }],
        outlet: [{ type: Input }],
        router: [{ type: Input }],
        condensed: [{ type: HostBinding, args: ['class.condensed',] }, { type: Input }]
    };
    return NovoNavElement;
}());
export { NovoNavElement };
if (false) {
    /** @type {?} */
    NovoNavElement.prototype.theme;
    /** @type {?} */
    NovoNavElement.prototype.direction;
    /** @type {?} */
    NovoNavElement.prototype.outlet;
    /** @type {?} */
    NovoNavElement.prototype.router;
    /** @type {?} */
    NovoNavElement.prototype.condensed;
    /** @type {?} */
    NovoNavElement.prototype.items;
}
var NovoTabElement = /** @class */ (function () {
    function NovoTabElement(nav) {
        this.active = false;
        this.disabled = false;
        this.activeChange = new EventEmitter();
        this.nav = nav;
        this.nav.add(this);
    }
    /**
     * @return {?}
     */
    NovoTabElement.prototype.select = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.activeChange.emit(true);
            this.nav.select(this);
        }
    };
    NovoTabElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-tab',
                    host: {
                        '(click)': 'select()',
                        '[class.active]': 'active',
                        '[class.disabled]': 'disabled',
                    },
                    template: "\n        <div class=\"novo-tab-link\">\n            <ng-content></ng-content>\n        </div>\n        <span class=\"indicator\"></span>\n   "
                }] }
    ];
    NovoTabElement.ctorParameters = function () { return [
        { type: NovoNavElement }
    ]; };
    NovoTabElement.propDecorators = {
        active: [{ type: Input }],
        disabled: [{ type: Input }],
        activeChange: [{ type: Output }]
    };
    return NovoTabElement;
}());
export { NovoTabElement };
if (false) {
    /** @type {?} */
    NovoTabElement.prototype.active;
    /** @type {?} */
    NovoTabElement.prototype.disabled;
    /** @type {?} */
    NovoTabElement.prototype.activeChange;
    /** @type {?} */
    NovoTabElement.prototype.nav;
}
var NovoTabButtonElement = /** @class */ (function () {
    function NovoTabButtonElement(nav) {
        this.active = false;
        this.disabled = false;
        this.nav = nav;
        this.nav.add(this);
    }
    /**
     * @return {?}
     */
    NovoTabButtonElement.prototype.select = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.nav.select(this);
        }
    };
    NovoTabButtonElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-tab-button',
                    host: {
                        '(click)': 'select()',
                        '[class.active]': 'active',
                        '[class.disabled]': 'disabled',
                    },
                    template: '<ng-content></ng-content>'
                }] }
    ];
    NovoTabButtonElement.ctorParameters = function () { return [
        { type: NovoNavElement }
    ]; };
    NovoTabButtonElement.propDecorators = {
        active: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return NovoTabButtonElement;
}());
export { NovoTabButtonElement };
if (false) {
    /** @type {?} */
    NovoTabButtonElement.prototype.active;
    /** @type {?} */
    NovoTabButtonElement.prototype.disabled;
    /** @type {?} */
    NovoTabButtonElement.prototype.nav;
}
var NovoTabLinkElement = /** @class */ (function () {
    function NovoTabLinkElement(nav) {
        this.active = false;
        this.disabled = false;
        this.nav = nav;
        this.nav.add(this);
    }
    /**
     * @return {?}
     */
    NovoTabLinkElement.prototype.select = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.nav.select(this);
        }
    };
    NovoTabLinkElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-tab-link',
                    host: {
                        '(click)': 'select()',
                        '[class.active]': 'active',
                        '[class.disabled]': 'disabled',
                    },
                    template: "\n        <div class=\"novo-tab-link\">\n            <ng-content></ng-content>\n        </div>\n        <span class=\"indicator\"></span>\n    "
                }] }
    ];
    NovoTabLinkElement.ctorParameters = function () { return [
        { type: NovoNavElement }
    ]; };
    NovoTabLinkElement.propDecorators = {
        active: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return NovoTabLinkElement;
}());
export { NovoTabLinkElement };
if (false) {
    /** @type {?} */
    NovoTabLinkElement.prototype.active;
    /** @type {?} */
    NovoTabLinkElement.prototype.disabled;
    /** @type {?} */
    NovoTabLinkElement.prototype.nav;
}
var NovoNavOutletElement = /** @class */ (function () {
    function NovoNavOutletElement() {
        this.items = [];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    NovoNavOutletElement.prototype.show = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var item = this.items[index];
        /**
         * Deactivates other tab items
         * @param {?} items - deactivated items
         * @return {?}
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
    /**
     * @param {?} item
     * @return {?}
     */
    NovoNavOutletElement.prototype.add = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.items.length === 0) {
            item.active = true;
        }
        this.items.push(item);
    };
    NovoNavOutletElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-nav-outlet',
                    template: '<ng-content></ng-content>'
                }] }
    ];
    return NovoNavOutletElement;
}());
export { NovoNavOutletElement };
if (false) {
    /** @type {?} */
    NovoNavOutletElement.prototype.items;
}
var NovoNavContentElement = /** @class */ (function () {
    function NovoNavContentElement(outlet) {
        this.active = false;
        outlet.add(this);
    }
    NovoNavContentElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-nav-content',
                    host: {
                        '[class.active]': 'active',
                    },
                    template: '<ng-content></ng-content>'
                }] }
    ];
    NovoNavContentElement.ctorParameters = function () { return [
        { type: NovoNavOutletElement }
    ]; };
    NovoNavContentElement.propDecorators = {
        active: [{ type: Input }]
    };
    return NovoNavContentElement;
}());
export { NovoNavContentElement };
if (false) {
    /** @type {?} */
    NovoNavContentElement.prototype.active;
}
var NovoNavHeaderElement = /** @class */ (function () {
    function NovoNavHeaderElement(outlet) {
        this.active = false;
        this.active = this.active || false;
        this.outlet = outlet;
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    NovoNavHeaderElement.prototype.show = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        try {
            /** @type {?} */
            var INDEX = this.outlet.items.indexOf(this.forElement);
            if (INDEX > -1) {
                this.outlet.show(INDEX);
            }
        }
        catch (err) {
            // do nothing
        }
    };
    NovoNavHeaderElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-nav-header',
                    host: {
                        '[class.active]': 'active',
                        '(click)': 'show($event)',
                    },
                    template: '<ng-content></ng-content>'
                }] }
    ];
    NovoNavHeaderElement.ctorParameters = function () { return [
        { type: NovoNavOutletElement }
    ]; };
    NovoNavHeaderElement.propDecorators = {
        active: [{ type: Input }],
        forElement: [{ type: Input, args: ['for',] }]
    };
    return NovoNavHeaderElement;
}());
export { NovoNavHeaderElement };
if (false) {
    /** @type {?} */
    NovoNavHeaderElement.prototype.active;
    /** @type {?} */
    NovoNavHeaderElement.prototype.forElement;
    /** @type {?} */
    NovoNavHeaderElement.prototype.outlet;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFicy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJzL1RhYnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRjtJQUFBO1FBTUUsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUVuQixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBT3ZCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFFM0IsVUFBSyxHQUFlLEVBQUUsQ0FBQztJQXNDekIsQ0FBQzs7Ozs7SUFwQ0MsK0JBQU07Ozs7SUFBTixVQUFPLElBQUk7Ozs7OztRQUlULDZCQUE2QixLQUFLO1lBQ2hDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7b0JBQ3JCLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDNUM7OztZQUdHLE9BQU8sR0FBRyxtQkFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLHFDQUFxQyxDQUFDLEVBQU87UUFDbEYsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDN0IsVUFBVSxDQUFDO2dC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QUVELG1DQUFJOzs7O0lBQUosVUFBSyxLQUFXO1FBQ2QsSUFBSTs7Z0JBQ0ksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3hELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLGFBQWE7U0FDZDtJQUNILENBQUM7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsSUFBSSxFQUFFO3dCQUNKLGdCQUFnQixFQUFFLFFBQVE7d0JBQzFCLFNBQVMsRUFBRSxjQUFjO3FCQUMxQjtvQkFDRCxRQUFRLEVBQUUsMkJBQTJCO2lCQUN0Qzs7O2dCQVFxQixvQkFBb0I7Ozt5QkFOdkMsS0FBSzs2QkFFTCxLQUFLLFNBQUMsS0FBSzs7SUFtQmQsMkJBQUM7Q0FBQSxBQTlCRCxJQThCQztTQXRCWSxvQkFBb0I7OztJQUMvQixzQ0FDd0I7O0lBQ3hCLDBDQUNnQjs7SUFDaEIsc0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLW5hdicsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9OYXZFbGVtZW50IHtcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKVxuICBkaXJlY3Rpb246IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKVxuICBvdXRsZXQ6IGFueTtcbiAgQElucHV0KClcbiAgcm91dGVyOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29uZGVuc2VkJylcbiAgQElucHV0KClcbiAgY29uZGVuc2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgaXRlbXM6IEFycmF5PGFueT4gPSBbXTtcblxuICBzZWxlY3QoaXRlbSkge1xuICAgIC8qKlxuICAgICAqIERlYWN0aXZhdGUgYWxsIG90aGVyIHRhYnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZGVhY3RpdmF0ZUFsbEl0ZW1zKGl0ZW1zKSB7XG4gICAgICBpdGVtcy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgIGlmICh0LmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIHQuZGVzZWxlY3RlZC5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIF9kZWFjdGl2YXRlQWxsSXRlbXModGhpcy5pdGVtcyk7XG4gICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgIGlmICh0aGlzLm91dGxldCkge1xuICAgICAgdGhpcy5vdXRsZXQuc2hvdyh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSkpO1xuICAgIH1cblxuICAgIC8vIFRPRE8gLSByZW1vdmUgaGFjayB0byBtYWtlIERPTSByZXJlbmRlciAtIGpnb2RpXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLXRhYi1saW5rLmFjdGl2ZSBzcGFuLmluZGljYXRvcicpIGFzIGFueTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMC45OTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIGFkZChpdGVtKSB7XG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAvLyBpdGVtLnNlbGVjdGVkLm5leHQoKTtcbiAgICB9XG4gICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdGFiJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ3NlbGVjdCgpJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXRhYi1saW5rXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImluZGljYXRvclwiPjwvc3Bhbj5cbiAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJFbGVtZW50IHtcbiAgQElucHV0KClcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBhY3RpdmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBuYXY6IGFueTtcblxuICBjb25zdHJ1Y3RvcihuYXY6IE5vdm9OYXZFbGVtZW50KSB7XG4gICAgdGhpcy5uYXYgPSBuYXY7XG4gICAgdGhpcy5uYXYuYWRkKHRoaXMpO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5hY3RpdmVDaGFuZ2UuZW1pdCh0cnVlKTtcbiAgICAgIHRoaXMubmF2LnNlbGVjdCh0aGlzKTtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10YWItYnV0dG9uJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ3NlbGVjdCgpJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gIH0sXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJCdXR0b25FbGVtZW50IHtcbiAgQElucHV0KClcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmF2OiBhbnk7XG5cbiAgY29uc3RydWN0b3IobmF2OiBOb3ZvTmF2RWxlbWVudCkge1xuICAgIHRoaXMubmF2ID0gbmF2O1xuICAgIHRoaXMubmF2LmFkZCh0aGlzKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubmF2LnNlbGVjdCh0aGlzKTtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10YWItbGluaycsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdzZWxlY3QoKScsXG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZScsXG4gICAgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by10YWItbGlua1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmRpY2F0b3JcIj48L3NwYW4+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYkxpbmtFbGVtZW50IHtcbiAgQElucHV0KClcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmF2OiBhbnk7XG5cbiAgY29uc3RydWN0b3IobmF2OiBOb3ZvTmF2RWxlbWVudCkge1xuICAgIHRoaXMubmF2ID0gbmF2O1xuICAgIHRoaXMubmF2LmFkZCh0aGlzKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubmF2LnNlbGVjdCh0aGlzKTtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1uYXYtb3V0bGV0JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b05hdk91dGxldEVsZW1lbnQge1xuICBpdGVtczogQXJyYXk8YW55PiA9IFtdO1xuXG4gIHNob3coaW5kZXgpIHtcbiAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbXNbaW5kZXhdO1xuXG4gICAgLyoqXG4gICAgICogRGVhY3RpdmF0ZXMgb3RoZXIgdGFiIGl0ZW1zXG4gICAgICogQHBhcmFtIGl0ZW1zIC0gZGVhY3RpdmF0ZWQgaXRlbXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZGVhY3RpdmF0ZUFsbEl0ZW1zKGl0ZW1zKSB7XG4gICAgICBpdGVtcy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgIGlmICh0LmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIHQuZGVzZWxlY3RlZC5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIF9kZWFjdGl2YXRlQWxsSXRlbXModGhpcy5pdGVtcyk7XG4gICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgYWRkKGl0ZW0pIHtcbiAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbmF2LWNvbnRlbnQnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZScsXG4gIH0sXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9OYXZDb250ZW50RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKG91dGxldDogTm92b05hdk91dGxldEVsZW1lbnQpIHtcbiAgICBvdXRsZXQuYWRkKHRoaXMpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbmF2LWhlYWRlcicsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgICAnKGNsaWNrKSc6ICdzaG93KCRldmVudCknLFxuICB9LFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTmF2SGVhZGVyRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ2ZvcicpXG4gIGZvckVsZW1lbnQ6IGFueTtcbiAgb3V0bGV0OiBhbnk7XG5cbiAgY29uc3RydWN0b3Iob3V0bGV0OiBOb3ZvTmF2T3V0bGV0RWxlbWVudCkge1xuICAgIHRoaXMuYWN0aXZlID0gdGhpcy5hY3RpdmUgfHwgZmFsc2U7XG4gICAgdGhpcy5vdXRsZXQgPSBvdXRsZXQ7XG4gIH1cblxuICBzaG93KGV2ZW50PzogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IElOREVYID0gdGhpcy5vdXRsZXQuaXRlbXMuaW5kZXhPZih0aGlzLmZvckVsZW1lbnQpO1xuICAgICAgaWYgKElOREVYID4gLTEpIHtcbiAgICAgICAgdGhpcy5vdXRsZXQuc2hvdyhJTkRFWCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxuICB9XG59XG4iXX0=