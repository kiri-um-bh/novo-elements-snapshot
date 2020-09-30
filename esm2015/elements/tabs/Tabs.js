/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, Input, EventEmitter, Output, HostBinding } from '@angular/core';
export class NovoNavElement {
    constructor() {
        this.theme = '';
        this.direction = '';
        this.condensed = false;
        this.items = [];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    select(item) {
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
            (t) => {
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
        let element = (/** @type {?} */ (document.querySelector('novo-tab-link.active span.indicator')));
        if (element) {
            element.style.opacity = 0.99;
            setTimeout((/**
             * @return {?}
             */
            () => {
                element.style.opacity = 1;
            }), 10);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    add(item) {
        if (this.items.length === 0) {
            item.active = true;
            // item.selected.next();
        }
        this.items.push(item);
    }
}
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
export class NovoTabElement {
    /**
     * @param {?} nav
     */
    constructor(nav) {
        this.active = false;
        this.disabled = false;
        this.activeChange = new EventEmitter();
        this.nav = nav;
        this.nav.add(this);
    }
    /**
     * @return {?}
     */
    select() {
        if (!this.disabled) {
            this.activeChange.emit(true);
            this.nav.select(this);
        }
    }
}
NovoTabElement.decorators = [
    { type: Component, args: [{
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
   `
            }] }
];
/** @nocollapse */
NovoTabElement.ctorParameters = () => [
    { type: NovoNavElement }
];
NovoTabElement.propDecorators = {
    active: [{ type: Input }],
    disabled: [{ type: Input }],
    activeChange: [{ type: Output }]
};
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
export class NovoTabButtonElement {
    /**
     * @param {?} nav
     */
    constructor(nav) {
        this.active = false;
        this.disabled = false;
        this.nav = nav;
        this.nav.add(this);
    }
    /**
     * @return {?}
     */
    select() {
        if (!this.disabled) {
            this.nav.select(this);
        }
    }
}
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
NovoTabButtonElement.ctorParameters = () => [
    { type: NovoNavElement }
];
NovoTabButtonElement.propDecorators = {
    active: [{ type: Input }],
    disabled: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoTabButtonElement.prototype.active;
    /** @type {?} */
    NovoTabButtonElement.prototype.disabled;
    /** @type {?} */
    NovoTabButtonElement.prototype.nav;
}
export class NovoTabLinkElement {
    /**
     * @param {?} nav
     */
    constructor(nav) {
        this.active = false;
        this.disabled = false;
        this.nav = nav;
        this.nav.add(this);
    }
    /**
     * @return {?}
     */
    select() {
        if (!this.disabled) {
            this.nav.select(this);
        }
    }
}
NovoTabLinkElement.decorators = [
    { type: Component, args: [{
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
    `
            }] }
];
/** @nocollapse */
NovoTabLinkElement.ctorParameters = () => [
    { type: NovoNavElement }
];
NovoTabLinkElement.propDecorators = {
    active: [{ type: Input }],
    disabled: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoTabLinkElement.prototype.active;
    /** @type {?} */
    NovoTabLinkElement.prototype.disabled;
    /** @type {?} */
    NovoTabLinkElement.prototype.nav;
}
export class NovoNavOutletElement {
    constructor() {
        this.items = [];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    show(index) {
        /** @type {?} */
        let item = this.items[index];
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
            (t) => {
                if (t.active === true) {
                    // t.deselected.next();
                }
                t.active = false;
            }));
        }
        _deactivateAllItems(this.items);
        item.active = true;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    add(item) {
        if (this.items.length === 0) {
            item.active = true;
        }
        this.items.push(item);
    }
}
NovoNavOutletElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-nav-outlet',
                template: '<ng-content></ng-content>'
            }] }
];
if (false) {
    /** @type {?} */
    NovoNavOutletElement.prototype.items;
}
export class NovoNavContentElement {
    /**
     * @param {?} outlet
     */
    constructor(outlet) {
        this.active = false;
        outlet.add(this);
    }
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
NovoNavContentElement.ctorParameters = () => [
    { type: NovoNavOutletElement }
];
NovoNavContentElement.propDecorators = {
    active: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoNavContentElement.prototype.active;
}
export class NovoNavHeaderElement {
    /**
     * @param {?} outlet
     */
    constructor(outlet) {
        this.active = false;
        this.active = this.active || false;
        this.outlet = outlet;
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    show(event) {
        try {
            /** @type {?} */
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
NovoNavHeaderElement.ctorParameters = () => [
    { type: NovoNavOutletElement }
];
NovoNavHeaderElement.propDecorators = {
    active: [{ type: Input }],
    forElement: [{ type: Input, args: ['for',] }]
};
if (false) {
    /** @type {?} */
    NovoNavHeaderElement.prototype.active;
    /** @type {?} */
    NovoNavHeaderElement.prototype.forElement;
    /** @type {?} */
    NovoNavHeaderElement.prototype.outlet;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFicy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy90YWJzL1RhYnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1wRixNQUFNLE9BQU8sY0FBYztJQUozQjtRQU1FLFVBQUssR0FBVyxFQUFFLENBQUM7UUFFbkIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQU92QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLFVBQUssR0FBZSxFQUFFLENBQUM7SUFzQ3pCLENBQUM7Ozs7O0lBcENDLE1BQU0sQ0FBQyxJQUFJOzs7Ozs7UUFJVCxTQUFTLG1CQUFtQixDQUFDLEtBQUs7WUFDaEMsS0FBSyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNsQixJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO29CQUNyQix1QkFBdUI7aUJBQ3hCO2dCQUNELENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ25CLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzVDOzs7WUFHRyxPQUFPLEdBQUcsbUJBQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQ0FBcUMsQ0FBQyxFQUFPO1FBQ2xGLElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdB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LEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6QjtTQUNGO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixhQUFhO1NBQ2Q7SUFDSCxDQUFDOzs7WUE3QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLElBQUksRUFBRTtvQkFDSixnQkFBZ0IsRUFBRSxRQUFRO29CQUMxQixTQUFTLEVBQUUsY0FBYztpQkFDMUI7Z0JBQ0QsUUFBUSxFQUFFLDJCQUEyQjthQUN0Qzs7OztZQVFxQixvQkFBb0I7OztxQkFOdkMsS0FBSzt5QkFFTCxLQUFLLFNBQUMsS0FBSzs7OztJQUZaLHNDQUN3Qjs7SUFDeEIsMENBQ2dCOztJQUNoQixzQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbmF2JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b05hdkVsZW1lbnQge1xuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpXG4gIGRpcmVjdGlvbjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpXG4gIG91dGxldDogYW55O1xuICBASW5wdXQoKVxuICByb3V0ZXI6IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb25kZW5zZWQnKVxuICBASW5wdXQoKVxuICBjb25kZW5zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBpdGVtczogQXJyYXk8YW55PiA9IFtdO1xuXG4gIHNlbGVjdChpdGVtKSB7XG4gICAgLyoqXG4gICAgICogRGVhY3RpdmF0ZSBhbGwgb3RoZXIgdGFic1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9kZWFjdGl2YXRlQWxsSXRlbXMoaXRlbXMpIHtcbiAgICAgIGl0ZW1zLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgaWYgKHQuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gdC5kZXNlbGVjdGVkLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICB0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2RlYWN0aXZhdGVBbGxJdGVtcyh0aGlzLml0ZW1zKTtcbiAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgaWYgKHRoaXMub3V0bGV0KSB7XG4gICAgICB0aGlzLm91dGxldC5zaG93KHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gICAgfVxuXG4gICAgLy8gVE9ETyAtIHJlbW92ZSBoYWNrIHRvIG1ha2UgRE9NIHJlcmVuZGVyIC0gamdvZGlcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25vdm8tdGFiLWxpbmsuYWN0aXZlIHNwYW4uaW5kaWNhdG9yJykgYXMgYW55O1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwLjk5O1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICB9XG5cbiAgYWRkKGl0ZW0pIHtcbiAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIC8vIGl0ZW0uc2VsZWN0ZWQubmV4dCgpO1xuICAgIH1cbiAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by10YWInLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnc2VsZWN0KCknLFxuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdhY3RpdmUnLFxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tdGFiLWxpbmtcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9zcGFuPlxuICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYkVsZW1lbnQge1xuICBASW5wdXQoKVxuICBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpXG4gIGFjdGl2ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIG5hdjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKG5hdjogTm92b05hdkVsZW1lbnQpIHtcbiAgICB0aGlzLm5hdiA9IG5hdjtcbiAgICB0aGlzLm5hdi5hZGQodGhpcyk7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFjdGl2ZUNoYW5nZS5lbWl0KHRydWUpO1xuICAgICAgdGhpcy5uYXYuc2VsZWN0KHRoaXMpO1xuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRhYi1idXR0b24nLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnc2VsZWN0KCknLFxuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdhY3RpdmUnLFxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgfSxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RhYkJ1dHRvbkVsZW1lbnQge1xuICBASW5wdXQoKVxuICBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBuYXY6IGFueTtcblxuICBjb25zdHJ1Y3RvcihuYXY6IE5vdm9OYXZFbGVtZW50KSB7XG4gICAgdGhpcy5uYXYgPSBuYXY7XG4gICAgdGhpcy5uYXYuYWRkKHRoaXMpO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5uYXYuc2VsZWN0KHRoaXMpO1xuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXRhYi1saW5rJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ3NlbGVjdCgpJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXRhYi1saW5rXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImluZGljYXRvclwiPjwvc3Bhbj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGFiTGlua0VsZW1lbnQge1xuICBASW5wdXQoKVxuICBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBuYXY6IGFueTtcblxuICBjb25zdHJ1Y3RvcihuYXY6IE5vdm9OYXZFbGVtZW50KSB7XG4gICAgdGhpcy5uYXYgPSBuYXY7XG4gICAgdGhpcy5uYXYuYWRkKHRoaXMpO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5uYXYuc2VsZWN0KHRoaXMpO1xuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLW5hdi1vdXRsZXQnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTmF2T3V0bGV0RWxlbWVudCB7XG4gIGl0ZW1zOiBBcnJheTxhbnk+ID0gW107XG5cbiAgc2hvdyhpbmRleCkge1xuICAgIGxldCBpdGVtID0gdGhpcy5pdGVtc1tpbmRleF07XG5cbiAgICAvKipcbiAgICAgKiBEZWFjdGl2YXRlcyBvdGhlciB0YWIgaXRlbXNcbiAgICAgKiBAcGFyYW0gaXRlbXMgLSBkZWFjdGl2YXRlZCBpdGVtc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9kZWFjdGl2YXRlQWxsSXRlbXMoaXRlbXMpIHtcbiAgICAgIGl0ZW1zLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgaWYgKHQuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gdC5kZXNlbGVjdGVkLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICB0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2RlYWN0aXZhdGVBbGxJdGVtcyh0aGlzLml0ZW1zKTtcbiAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBhZGQoaXRlbSkge1xuICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1uYXYtY29udGVudCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnYWN0aXZlJyxcbiAgfSxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b05hdkNvbnRlbnRFbGVtZW50IHtcbiAgQElucHV0KClcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3Iob3V0bGV0OiBOb3ZvTmF2T3V0bGV0RWxlbWVudCkge1xuICAgIG91dGxldC5hZGQodGhpcyk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1uYXYtaGVhZGVyJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdhY3RpdmUnLFxuICAgICcoY2xpY2spJzogJ3Nob3coJGV2ZW50KScsXG4gIH0sXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9OYXZIZWFkZXJFbGVtZW50IHtcbiAgQElucHV0KClcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgnZm9yJylcbiAgZm9yRWxlbWVudDogYW55O1xuICBvdXRsZXQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihvdXRsZXQ6IE5vdm9OYXZPdXRsZXRFbGVtZW50KSB7XG4gICAgdGhpcy5hY3RpdmUgPSB0aGlzLmFjdGl2ZSB8fCBmYWxzZTtcbiAgICB0aGlzLm91dGxldCA9IG91dGxldDtcbiAgfVxuXG4gIHNob3coZXZlbnQ/OiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgSU5ERVggPSB0aGlzLm91dGxldC5pdGVtcy5pbmRleE9mKHRoaXMuZm9yRWxlbWVudCk7XG4gICAgICBpZiAoSU5ERVggPiAtMSkge1xuICAgICAgICB0aGlzLm91dGxldC5zaG93KElOREVYKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG4gIH1cbn1cbiJdfQ==