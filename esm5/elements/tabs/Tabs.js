/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFicy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJzL1RhYnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRjtJQUFBO1FBTUUsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUVuQixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBT3ZCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFFM0IsVUFBSyxHQUFlLEVBQUUsQ0FBQztJQXNDekIsQ0FBQzs7Ozs7SUFwQ0MsK0JBQU07Ozs7SUFBTixVQUFPLElBQUk7Ozs7OztRQUlULFNBQVMsbUJBQW1CLENBQUMsS0FBSztZQUNoQyxLQUFLLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsQ0FBQztnQkFDZCxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO29CQUNyQix1QkFBdUI7aUJBQ3hCO2dCQUNELENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ25CLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzVDOzs7WUFHRyxPQUFPLEdBQUcsbUJBQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQ0FBcUMsQ0FBQyxFQUFPO1FBQ2xGLElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQzdCLFVBQVU7OztZQUFDO2dCQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUM1QixDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7U0FDUjtJQUNILENBQUM7Ozs7O0lBRUQsNEJBQUc7Ozs7SUFBSCxVQUFJLElBQUk7UUFDTixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQix3QkFBd0I7U0FDekI7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDOztnQkF0REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsMkJBQTJCO2lCQUN0Qzs7O3dCQUVFLEtBQUs7NEJBRUwsS0FBSzt5QkFFTCxLQUFLO3lCQUVMLEtBQUs7NEJBRUwsV0FBVyxTQUFDLGlCQUFpQixjQUM3QixLQUFLOztJQXlDUixxQkFBQztDQUFBLEFBdkRELElBdURDO1NBbkRZLGNBQWM7OztJQUN6QiwrQkFDbUI7O0lBQ25CLG1DQUN1Qjs7SUFDdkIsZ0NBQ1k7O0lBQ1osZ0NBQ2U7O0lBQ2YsbUNBRTJCOztJQUUzQiwrQkFBdUI7O0FBd0N6QjtJQXdCRSx3QkFBWSxHQUFtQjtRQVIvQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsaUJBQVksR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUtoRSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCwrQkFBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsVUFBVTt3QkFDckIsZ0JBQWdCLEVBQUUsUUFBUTt3QkFDMUIsa0JBQWtCLEVBQUUsVUFBVTtxQkFDL0I7b0JBQ0QsUUFBUSxFQUFFLGdKQUtSO2lCQUNIOzs7O2dCQVdrQixjQUFjOzs7eUJBVDlCLEtBQUs7MkJBRUwsS0FBSzsrQkFFTCxNQUFNOztJQWdCVCxxQkFBQztDQUFBLEFBbkNELElBbUNDO1NBckJZLGNBQWM7OztJQUN6QixnQ0FDd0I7O0lBQ3hCLGtDQUMwQjs7SUFDMUIsc0NBQ2tFOztJQUVsRSw2QkFBUzs7QUFlWDtJQWlCRSw4QkFBWSxHQUFtQjtRQU4vQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFLeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQscUNBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOztnQkExQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsVUFBVTt3QkFDckIsZ0JBQWdCLEVBQUUsUUFBUTt3QkFDMUIsa0JBQWtCLEVBQUUsVUFBVTtxQkFDL0I7b0JBQ0QsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7Ozs7Z0JBU2tCLGNBQWM7Ozt5QkFQOUIsS0FBSzsyQkFFTCxLQUFLOztJQWVSLDJCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0FsQlksb0JBQW9COzs7SUFDL0Isc0NBQ3dCOztJQUN4Qix3Q0FDMEI7O0lBRTFCLG1DQUFTOztBQWNYO0lBc0JFLDRCQUFZLEdBQW1CO1FBTi9CLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUt4QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxtQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsVUFBVTt3QkFDckIsZ0JBQWdCLEVBQUUsUUFBUTt3QkFDMUIsa0JBQWtCLEVBQUUsVUFBVTtxQkFDL0I7b0JBQ0QsUUFBUSxFQUFFLGlKQUtQO2lCQUNKOzs7O2dCQVNrQixjQUFjOzs7eUJBUDlCLEtBQUs7MkJBRUwsS0FBSzs7SUFlUix5QkFBQztDQUFBLEFBaENELElBZ0NDO1NBbEJZLGtCQUFrQjs7O0lBQzdCLG9DQUN3Qjs7SUFDeEIsc0NBQzBCOztJQUUxQixpQ0FBUzs7QUFjWDtJQUFBO1FBS0UsVUFBSyxHQUFlLEVBQUUsQ0FBQztJQTRCekIsQ0FBQzs7Ozs7SUExQkMsbUNBQUk7Ozs7SUFBSixVQUFLLEtBQUs7O1lBQ0osSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDOzs7Ozs7UUFNNUIsU0FBUyxtQkFBbUIsQ0FBQyxLQUFLO1lBQ2hDLEtBQUssQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7b0JBQ3JCLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbkIsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsa0NBQUc7Ozs7SUFBSCxVQUFJLElBQUk7UUFDTixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7O2dCQWhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7O0lBOEJELDJCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0E3Qlksb0JBQW9COzs7SUFDL0IscUNBQXVCOztBQThCekI7SUFXRSwrQkFBWSxNQUE0QjtRQUZ4QyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBR3RCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLElBQUksRUFBRTt3QkFDSixnQkFBZ0IsRUFBRSxRQUFRO3FCQUMzQjtvQkFDRCxRQUFRLEVBQUUsMkJBQTJCO2lCQUN0Qzs7OztnQkFLcUIsb0JBQW9COzs7eUJBSHZDLEtBQUs7O0lBTVIsNEJBQUM7Q0FBQSxBQWRELElBY0M7U0FQWSxxQkFBcUI7OztJQUNoQyx1Q0FDd0I7O0FBTzFCO0lBZUUsOEJBQVksTUFBNEI7UUFMeEMsV0FBTSxHQUFZLEtBQUssQ0FBQztRQU10QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsbUNBQUk7Ozs7SUFBSixVQUFLLEtBQVc7UUFDZCxJQUFJOztnQkFDSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDeEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekI7U0FDRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osYUFBYTtTQUNkO0lBQ0gsQ0FBQzs7Z0JBN0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixJQUFJLEVBQUU7d0JBQ0osZ0JBQWdCLEVBQUUsUUFBUTt3QkFDMUIsU0FBUyxFQUFFLGNBQWM7cUJBQzFCO29CQUNELFFBQVEsRUFBRSwyQkFBMkI7aUJBQ3RDOzs7O2dCQVFxQixvQkFBb0I7Ozt5QkFOdkMsS0FBSzs2QkFFTCxLQUFLLFNBQUMsS0FBSzs7SUFtQmQsMkJBQUM7Q0FBQSxBQTlCRCxJQThCQztTQXRCWSxvQkFBb0I7OztJQUMvQixzQ0FDd0I7O0lBQ3hCLDBDQUNnQjs7SUFDaEIsc0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLW5hdicsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9OYXZFbGVtZW50IHtcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKVxuICBkaXJlY3Rpb246IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKVxuICBvdXRsZXQ6IGFueTtcbiAgQElucHV0KClcbiAgcm91dGVyOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29uZGVuc2VkJylcbiAgQElucHV0KClcbiAgY29uZGVuc2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgaXRlbXM6IEFycmF5PGFueT4gPSBbXTtcblxuICBzZWxlY3QoaXRlbSkge1xuICAgIC8qKlxuICAgICAqIERlYWN0aXZhdGUgYWxsIG90aGVyIHRhYnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZGVhY3RpdmF0ZUFsbEl0ZW1zKGl0ZW1zKSB7XG4gICAgICBpdGVtcy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgIGlmICh0LmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIHQuZGVzZWxlY3RlZC5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIF9kZWFjdGl2YXRlQWxsSXRlbXModGhpcy5pdGVtcyk7XG4gICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgIGlmICh0aGlzLm91dGxldCkge1xuICAgICAgdGhpcy5vdXRsZXQuc2hvdyh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSkpO1xuICAgIH1cblxuICAgIC8vIFRPRE8gLSByZW1vdmUgaGFjayB0byBtYWtlIERPTSByZXJlbmRlciAtIGpnb2RpXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLXRhYi1saW5rLmFjdGl2ZSBzcGFuLmluZGljYXRvcicpIGFzIGFueTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMC45OTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIGFkZChpdGVtKSB7XG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAvLyBpdGVtLnNlbGVjdGVkLm5leHQoKTtcbiAgICB9XG4gICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdGFiJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ3NlbGVjdCgpJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXRhYi1saW5rXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImluZGljYXRvclwiPjwvc3Bhbj5cbiAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJFbGVtZW50IHtcbiAgQElucHV0KClcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBhY3RpdmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBuYXY6IGFueTtcblxuICBjb25zdHJ1Y3RvcihuYXY6IE5vdm9OYXZFbGVtZW50KSB7XG4gICAgdGhpcy5uYXYgPSBuYXY7XG4gICAgdGhpcy5uYXYuYWRkKHRoaXMpO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5hY3RpdmVDaGFuZ2UuZW1pdCh0cnVlKTtcbiAgICAgIHRoaXMubmF2LnNlbGVjdCh0aGlzKTtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10YWItYnV0dG9uJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ3NlbGVjdCgpJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gIH0sXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJCdXR0b25FbGVtZW50IHtcbiAgQElucHV0KClcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmF2OiBhbnk7XG5cbiAgY29uc3RydWN0b3IobmF2OiBOb3ZvTmF2RWxlbWVudCkge1xuICAgIHRoaXMubmF2ID0gbmF2O1xuICAgIHRoaXMubmF2LmFkZCh0aGlzKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubmF2LnNlbGVjdCh0aGlzKTtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10YWItbGluaycsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdzZWxlY3QoKScsXG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZScsXG4gICAgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by10YWItbGlua1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmRpY2F0b3JcIj48L3NwYW4+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYkxpbmtFbGVtZW50IHtcbiAgQElucHV0KClcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmF2OiBhbnk7XG5cbiAgY29uc3RydWN0b3IobmF2OiBOb3ZvTmF2RWxlbWVudCkge1xuICAgIHRoaXMubmF2ID0gbmF2O1xuICAgIHRoaXMubmF2LmFkZCh0aGlzKTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubmF2LnNlbGVjdCh0aGlzKTtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1uYXYtb3V0bGV0JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b05hdk91dGxldEVsZW1lbnQge1xuICBpdGVtczogQXJyYXk8YW55PiA9IFtdO1xuXG4gIHNob3coaW5kZXgpIHtcbiAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbXNbaW5kZXhdO1xuXG4gICAgLyoqXG4gICAgICogRGVhY3RpdmF0ZXMgb3RoZXIgdGFiIGl0ZW1zXG4gICAgICogQHBhcmFtIGl0ZW1zIC0gZGVhY3RpdmF0ZWQgaXRlbXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZGVhY3RpdmF0ZUFsbEl0ZW1zKGl0ZW1zKSB7XG4gICAgICBpdGVtcy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgIGlmICh0LmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIHQuZGVzZWxlY3RlZC5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIF9kZWFjdGl2YXRlQWxsSXRlbXModGhpcy5pdGVtcyk7XG4gICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgYWRkKGl0ZW0pIHtcbiAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbmF2LWNvbnRlbnQnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZScsXG4gIH0sXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9OYXZDb250ZW50RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKG91dGxldDogTm92b05hdk91dGxldEVsZW1lbnQpIHtcbiAgICBvdXRsZXQuYWRkKHRoaXMpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbmF2LWhlYWRlcicsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgICAnKGNsaWNrKSc6ICdzaG93KCRldmVudCknLFxuICB9LFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTmF2SGVhZGVyRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ2ZvcicpXG4gIGZvckVsZW1lbnQ6IGFueTtcbiAgb3V0bGV0OiBhbnk7XG5cbiAgY29uc3RydWN0b3Iob3V0bGV0OiBOb3ZvTmF2T3V0bGV0RWxlbWVudCkge1xuICAgIHRoaXMuYWN0aXZlID0gdGhpcy5hY3RpdmUgfHwgZmFsc2U7XG4gICAgdGhpcy5vdXRsZXQgPSBvdXRsZXQ7XG4gIH1cblxuICBzaG93KGV2ZW50PzogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IElOREVYID0gdGhpcy5vdXRsZXQuaXRlbXMuaW5kZXhPZih0aGlzLmZvckVsZW1lbnQpO1xuICAgICAgaWYgKElOREVYID4gLTEpIHtcbiAgICAgICAgdGhpcy5vdXRsZXQuc2hvdyhJTkRFWCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxuICB9XG59XG4iXX0=