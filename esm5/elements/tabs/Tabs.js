/**
 * @fileoverview added by tsickle
 * Generated from: elements/tabs/Tabs.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            items.forEach((/**
             * @param {?} t
             * @return {?}
             */
            function (t) {
                if (t.active === true) {
                    // t.deselected.next();
                }
                t.active = false;
            }));
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
            setTimeout((/**
             * @return {?}
             */
            function () {
                element.style.opacity = 1;
            }), 10);
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
    /** @nocollapse */
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
    /** @nocollapse */
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
    /** @nocollapse */
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
            items.forEach((/**
             * @param {?} t
             * @return {?}
             */
            function (t) {
                if (t.active === true) {
                    // t.deselected.next();
                }
                t.active = false;
            }));
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
    /** @nocollapse */
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
    /** @nocollapse */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFicy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJzL1RhYnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEY7SUFBQTtRQU1FLFVBQUssR0FBVyxFQUFFLENBQUM7UUFFbkIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQU92QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLFVBQUssR0FBZSxFQUFFLENBQUM7SUFzQ3pCLENBQUM7Ozs7O0lBcENDLCtCQUFNOzs7O0lBQU4sVUFBTyxJQUFJOzs7Ozs7UUFJVCxTQUFTLG1CQUFtQixDQUFDLEtBQUs7WUFDaEMsS0FBSyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtvQkFDckIsdUJBQXVCO2lCQUN4QjtnQkFDRCxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNuQixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM1Qzs7O1lBR0ssT0FBTyxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMscUNBQXFDLENBQUMsRUFBTztRQUNwRixJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUM3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TSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELG1DQUFJOzs7O0lBQUosVUFBSyxLQUFXO1FBQ2QsSUFBSTs7Z0JBQ0ksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3hELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLGFBQWE7U0FDZDtJQUNILENBQUM7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsSUFBSSxFQUFFO3dCQUNKLGdCQUFnQixFQUFFLFFBQVE7d0JBQzFCLFNBQVMsRUFBRSxjQUFjO3FCQUMxQjtvQkFDRCxRQUFRLEVBQUUsMkJBQTJCO2lCQUN0Qzs7OztnQkFRcUIsb0JBQW9COzs7eUJBTnZDLEtBQUs7NkJBRUwsS0FBSyxTQUFDLEtBQUs7O0lBbUJkLDJCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0F0Qlksb0JBQW9COzs7SUFDL0Isc0NBQ3dCOztJQUN4QiwwQ0FDZ0I7O0lBQ2hCLHNDQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1uYXYnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTmF2RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KClcbiAgZGlyZWN0aW9uOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KClcbiAgb3V0bGV0OiBhbnk7XG4gIEBJbnB1dCgpXG4gIHJvdXRlcjogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbmRlbnNlZCcpXG4gIEBJbnB1dCgpXG4gIGNvbmRlbnNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGl0ZW1zOiBBcnJheTxhbnk+ID0gW107XG5cbiAgc2VsZWN0KGl0ZW0pIHtcbiAgICAvKipcbiAgICAgKiBEZWFjdGl2YXRlIGFsbCBvdGhlciB0YWJzXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2RlYWN0aXZhdGVBbGxJdGVtcyhpdGVtcykge1xuICAgICAgaXRlbXMuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICBpZiAodC5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgICAvLyB0LmRlc2VsZWN0ZWQubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfZGVhY3RpdmF0ZUFsbEl0ZW1zKHRoaXMuaXRlbXMpO1xuICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5vdXRsZXQpIHtcbiAgICAgIHRoaXMub3V0bGV0LnNob3codGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPIC0gcmVtb3ZlIGhhY2sgdG8gbWFrZSBET00gcmVyZW5kZXIgLSBqZ29kaVxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLXRhYi1saW5rLmFjdGl2ZSBzcGFuLmluZGljYXRvcicpIGFzIGFueTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMC45OTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIGFkZChpdGVtKSB7XG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAvLyBpdGVtLnNlbGVjdGVkLm5leHQoKTtcbiAgICB9XG4gICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdGFiJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ3NlbGVjdCgpJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXRhYi1saW5rXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImluZGljYXRvclwiPjwvc3Bhbj5cbiAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJFbGVtZW50IHtcbiAgQElucHV0KClcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBhY3RpdmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBuYXY6IGFueTtcblxuICBjb25zdHJ1Y3RvcihuYXY6IE5vdm9OYXZFbGVtZW50KSB7XG4gICAgdGhpcy5uYXYgPSBuYXY7XG4gICAgdGhpcy5uYXYuYWRkKHRoaXMpO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5hY3RpdmVDaGFuZ2UuZW1pdCh0cnVlKTtcbiAgICAgIHRoaXMubmF2LnNlbGVjdCh0aGlzKTtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10YWItYnV0dG9uJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ3NlbGVjdCgpJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gIH0sXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJCdXR0b25FbGVtZW50IHtcbiAgQElucHV0KClcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmF2OiBhbnk7XG5cbiAgY29uc3RydWN0b3IobmF2OiBOb3ZvTmF2RWxlbWVudCkge1xuICAgIHRoaXMubmF2ID0gbmF2O1xuICAgIHRoaXMubmF2LmFkZCh0aGlzKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubmF2LnNlbGVjdCh0aGlzKTtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10YWItbGluaycsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdzZWxlY3QoKScsXG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZScsXG4gICAgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by10YWItbGlua1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmRpY2F0b3JcIj48L3NwYW4+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYkxpbmtFbGVtZW50IHtcbiAgQElucHV0KClcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmF2OiBhbnk7XG5cbiAgY29uc3RydWN0b3IobmF2OiBOb3ZvTmF2RWxlbWVudCkge1xuICAgIHRoaXMubmF2ID0gbmF2O1xuICAgIHRoaXMubmF2LmFkZCh0aGlzKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubmF2LnNlbGVjdCh0aGlzKTtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1uYXYtb3V0bGV0JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b05hdk91dGxldEVsZW1lbnQge1xuICBpdGVtczogQXJyYXk8YW55PiA9IFtdO1xuXG4gIHNob3coaW5kZXgpIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tpbmRleF07XG5cbiAgICAvKipcbiAgICAgKiBEZWFjdGl2YXRlcyBvdGhlciB0YWIgaXRlbXNcbiAgICAgKiBAcGFyYW0gaXRlbXMgLSBkZWFjdGl2YXRlZCBpdGVtc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9kZWFjdGl2YXRlQWxsSXRlbXMoaXRlbXMpIHtcbiAgICAgIGl0ZW1zLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgaWYgKHQuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gdC5kZXNlbGVjdGVkLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICB0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2RlYWN0aXZhdGVBbGxJdGVtcyh0aGlzLml0ZW1zKTtcbiAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBhZGQoaXRlbSkge1xuICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1uYXYtY29udGVudCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgfSxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b05hdkNvbnRlbnRFbGVtZW50IHtcbiAgQElucHV0KClcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3Iob3V0bGV0OiBOb3ZvTmF2T3V0bGV0RWxlbWVudCkge1xuICAgIG91dGxldC5hZGQodGhpcyk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1uYXYtaGVhZGVyJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdhY3RpdmUnLFxuICAgICcoY2xpY2spJzogJ3Nob3coJGV2ZW50KScsXG4gIH0sXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9OYXZIZWFkZXJFbGVtZW50IHtcbiAgQElucHV0KClcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgnZm9yJylcbiAgZm9yRWxlbWVudDogYW55O1xuICBvdXRsZXQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihvdXRsZXQ6IE5vdm9OYXZPdXRsZXRFbGVtZW50KSB7XG4gICAgdGhpcy5hY3RpdmUgPSB0aGlzLmFjdGl2ZSB8fCBmYWxzZTtcbiAgICB0aGlzLm91dGxldCA9IG91dGxldDtcbiAgfVxuXG4gIHNob3coZXZlbnQ/OiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgSU5ERVggPSB0aGlzLm91dGxldC5pdGVtcy5pbmRleE9mKHRoaXMuZm9yRWxlbWVudCk7XG4gICAgICBpZiAoSU5ERVggPiAtMSkge1xuICAgICAgICB0aGlzLm91dGxldC5zaG93KElOREVYKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG4gIH1cbn1cbiJdfQ==