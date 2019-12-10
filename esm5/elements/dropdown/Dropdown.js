/**
 * @fileoverview added by tsickle
 * Generated from: elements/dropdown/Dropdown.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, HostListener, Input, Output, QueryList, ViewChild, } from '@angular/core';
// APP
import { NovoOverlayTemplateComponent } from '../overlay/Overlay';
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
import { Helpers } from '../../utils/Helpers';
import { notify } from '../../utils/notifier/notifier.util';
var NovoDropdownElement = /** @class */ (function () {
    function NovoDropdownElement(element, ref) {
        this.element = element;
        this.ref = ref;
        this.parentScrollAction = 'close';
        this.side = 'default';
        this.scrollStrategy = 'reposition';
        this.width = -1; // Defaults to dynamic width (no hardcoded width value and no host width lookup)
        // Defaults to dynamic width (no hardcoded width value and no host width lookup)
        this.appendToBody = false; // Deprecated
        // Deprecated
        this.toggled = new EventEmitter();
        this.activeIndex = -1;
        this.filterTerm = '';
        this.clickHandler = this.togglePanel.bind(this);
        this.closeHandler = this.closePanel.bind(this);
    }
    /**
     * @return {?}
     */
    NovoDropdownElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.appendToBody) {
            notify("'appendToBody' has been deprecated. Please remove this attribute.");
        }
        // Add a click handler to the button to toggle the menu
        /** @type {?} */
        var button = this.element.nativeElement.querySelector('button');
        button.addEventListener('click', this.clickHandler);
        if (this.parentScrollSelector) {
            this.parentScrollElement = Helpers.findAncestor(this.element.nativeElement, this.parentScrollSelector);
        }
    };
    /**
     * @return {?}
     */
    NovoDropdownElement.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // Remove listener
        /** @type {?} */
        var button = this.element.nativeElement.querySelector('button');
        if (button) {
            button.removeEventListener('click', this.clickHandler);
        }
        if (this.parentScrollElement && this.parentScrollAction === 'close') {
            this.parentScrollElement.removeEventListener('scroll', this.closeHandler);
        }
    };
    Object.defineProperty(NovoDropdownElement.prototype, "items", {
        set: /**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            this._items = items;
            // Get the innerText of all the items to allow for searching
            this._textItems = items.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return item.element.nativeElement.innerText;
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoDropdownElement.prototype, "panelOpen", {
        /** BEGIN: Convenient Panel Methods. */
        get: /**
         * BEGIN: Convenient Panel Methods.
         * @return {?}
         */
        function () {
            return this.overlay && this.overlay.panelOpen;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoDropdownElement.prototype.openPanel = /**
     * @return {?}
     */
    function () {
        this.overlay.openPanel();
        if (this.parentScrollElement && this.parentScrollAction === 'close') {
            this.parentScrollElement.addEventListener('scroll', this.closeHandler);
        }
        this.toggled.emit(true);
    };
    /**
     * @return {?}
     */
    NovoDropdownElement.prototype.closePanel = /**
     * @return {?}
     */
    function () {
        this.overlay.closePanel();
        if (this.parentScrollElement && this.parentScrollAction === 'close') {
            this.parentScrollElement.removeEventListener('scroll', this.closeHandler);
        }
        // Clear active index
        if (this.activeIndex !== -1) {
            this._items.toArray()[this.activeIndex].active = false;
        }
        this.activeIndex = -1;
        this.ref.markForCheck();
        this.toggled.emit(false);
    };
    /**
     * @return {?}
     */
    NovoDropdownElement.prototype.togglePanel = /**
     * @return {?}
     */
    function () {
        this.panelOpen ? this.closePanel() : this.openPanel();
    };
    /** END: Convenient Panel Methods. */
    /**
     * END: Convenient Panel Methods.
     * @param {?} event
     * @return {?}
     */
    NovoDropdownElement.prototype.onKeyDown = /**
     * END: Convenient Panel Methods.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (this.panelOpen && event.keyCode === KeyCodes.ESC) {
            Helpers.swallowEvent(event);
            // active & esc hit -- close
            this.closePanel();
        }
        else if (event.keyCode === KeyCodes.ENTER) {
            Helpers.swallowEvent(event);
            // enter -- perform the "click"
            this._items.toArray()[this.activeIndex].onClick(event);
        }
        else if (event.keyCode === KeyCodes.DOWN) {
            Helpers.swallowEvent(event);
            // down - navigate through the list ignoring disabled ones
            if (this.activeIndex !== -1) {
                this._items.toArray()[this.activeIndex].active = false;
            }
            this.activeIndex++;
            if (this.activeIndex === this._items.length) {
                this.activeIndex = 0;
            }
            while (this._items.toArray()[this.activeIndex].disabled) {
                this.activeIndex++;
                if (this.activeIndex === this._items.length) {
                    this.activeIndex = 0;
                }
            }
            this._items.toArray()[this.activeIndex].active = true;
            this.scrollToActive();
        }
        else if (event.keyCode === KeyCodes.UP) {
            Helpers.swallowEvent(event);
            // up -- navigate through the list ignoring disabled ones
            if (this.activeIndex !== -1) {
                this._items.toArray()[this.activeIndex].active = false;
            }
            this.activeIndex--;
            if (this.activeIndex < 0) {
                this.activeIndex = this._items.length - 1;
            }
            while (this._items.toArray()[this.activeIndex].disabled) {
                this.activeIndex--;
                if (this.activeIndex < 0) {
                    this.activeIndex = this._items.length - 1;
                }
            }
            this._items.toArray()[this.activeIndex].active = true;
            this.scrollToActive();
        }
        else if ((event.keyCode >= 65 && event.keyCode <= 90) ||
            (event.keyCode >= 96 && event.keyCode <= 105) ||
            (event.keyCode >= 48 && event.keyCode <= 57) ||
            event.keyCode === KeyCodes.SPACE) {
            Helpers.swallowEvent(event);
            // A-Z, 0-9, space -- filter the list and scroll to active filter
            // filter has hard reset after 2s
            clearTimeout(this.filterTermTimeout);
            this.filterTermTimeout = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.filterTerm = '';
            }), 2000);
            /** @type {?} */
            var char = String.fromCharCode(event.keyCode);
            this.filterTerm = this.filterTerm.concat(char);
            /** @type {?} */
            var index = this._textItems.findIndex((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                return new RegExp("^" + _this.filterTerm.toLowerCase()).test(value.trim().toLowerCase());
            }));
            if (index !== -1) {
                if (this.activeIndex !== -1) {
                    this._items.toArray()[this.activeIndex].active = false;
                }
                this.activeIndex = index;
                this._items.toArray()[this.activeIndex].active = true;
                this.scrollToActive();
            }
        }
        else if ([KeyCodes.BACKSPACE, KeyCodes.DELETE].includes(event.keyCode)) {
            Helpers.swallowEvent(event);
            // backspace, delete -- remove partial filters
            clearTimeout(this.filterTermTimeout);
            this.filterTermTimeout = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.filterTerm = '';
            }), 2000);
            this.filterTerm = this.filterTerm.slice(0, -1);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoDropdownElement.prototype.onOverlayKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === KeyCodes.ESC || event.keyCode === KeyCodes.ENTER) {
            Helpers.swallowEvent(event);
            this.closePanel();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NovoDropdownElement.prototype.scrollToActive = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var container = this.overlay.overlayRef.overlayElement.querySelector('.dropdown-container');
        /** @type {?} */
        var item = this._items.toArray()[this.activeIndex];
        if (container && item) {
            container.scrollTop = item.element.nativeElement.offsetTop;
        }
    };
    NovoDropdownElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-dropdown',
                    template: "\n    <ng-content select=\"button\" #trigger></ng-content>\n    <novo-overlay-template [parent]=\"element\" [width]=\"width\" [position]=\"side\" [scrollStrategy]=\"scrollStrategy\">\n      <div class=\"dropdown-container {{ containerClass }}\" [style.height.px]=\"height\" [class.has-height]=\"!!height\" (keydown)=\"onOverlayKeyDown($event)\">\n        <ng-content></ng-content>\n      </div>\n    </novo-overlay-template>\n  "
                }] }
    ];
    /** @nocollapse */
    NovoDropdownElement.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    NovoDropdownElement.propDecorators = {
        parentScrollSelector: [{ type: Input }],
        parentScrollAction: [{ type: Input }],
        containerClass: [{ type: Input }],
        side: [{ type: Input }],
        scrollStrategy: [{ type: Input }],
        height: [{ type: Input }],
        width: [{ type: Input }],
        appendToBody: [{ type: Input }],
        toggled: [{ type: Output }],
        overlay: [{ type: ViewChild, args: [NovoOverlayTemplateComponent, { static: false },] }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return NovoDropdownElement;
}());
export { NovoDropdownElement };
if (false) {
    /** @type {?} */
    NovoDropdownElement.prototype.parentScrollSelector;
    /** @type {?} */
    NovoDropdownElement.prototype.parentScrollAction;
    /** @type {?} */
    NovoDropdownElement.prototype.containerClass;
    /** @type {?} */
    NovoDropdownElement.prototype.side;
    /** @type {?} */
    NovoDropdownElement.prototype.scrollStrategy;
    /** @type {?} */
    NovoDropdownElement.prototype.height;
    /** @type {?} */
    NovoDropdownElement.prototype.width;
    /** @type {?} */
    NovoDropdownElement.prototype.appendToBody;
    /** @type {?} */
    NovoDropdownElement.prototype.toggled;
    /** @type {?} */
    NovoDropdownElement.prototype.overlay;
    /** @type {?} */
    NovoDropdownElement.prototype.clickHandler;
    /** @type {?} */
    NovoDropdownElement.prototype.closeHandler;
    /** @type {?} */
    NovoDropdownElement.prototype.parentScrollElement;
    /**
     * @type {?}
     * @private
     */
    NovoDropdownElement.prototype._items;
    /**
     * @type {?}
     * @private
     */
    NovoDropdownElement.prototype._textItems;
    /**
     * @type {?}
     * @private
     */
    NovoDropdownElement.prototype.activeIndex;
    /**
     * @type {?}
     * @private
     */
    NovoDropdownElement.prototype.filterTerm;
    /**
     * @type {?}
     * @private
     */
    NovoDropdownElement.prototype.filterTermTimeout;
    /** @type {?} */
    NovoDropdownElement.prototype.element;
    /**
     * @type {?}
     * @private
     */
    NovoDropdownElement.prototype.ref;
}
var NovoItemElement = /** @class */ (function () {
    function NovoItemElement(dropdown, element) {
        this.dropdown = dropdown;
        this.element = element;
        this.keepOpen = false;
        this.action = new EventEmitter();
        this.active = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NovoItemElement.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Poor man's disable
        if (!this.disabled) {
            // Close if keepOpen is false
            if (!this.keepOpen) {
                this.dropdown.closePanel();
            }
            // Emit the action
            this.action.emit({ originalEvent: event });
        }
    };
    NovoItemElement.decorators = [
        { type: Component, args: [{
                    selector: 'item',
                    template: '<ng-content></ng-content>',
                    host: {
                        '[class.disabled]': 'disabled',
                        '[class.active]': 'active',
                    }
                }] }
    ];
    /** @nocollapse */
    NovoItemElement.ctorParameters = function () { return [
        { type: NovoDropdownElement },
        { type: ElementRef }
    ]; };
    NovoItemElement.propDecorators = {
        disabled: [{ type: Input }],
        keepOpen: [{ type: Input }],
        action: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return NovoItemElement;
}());
export { NovoItemElement };
if (false) {
    /** @type {?} */
    NovoItemElement.prototype.disabled;
    /** @type {?} */
    NovoItemElement.prototype.keepOpen;
    /** @type {?} */
    NovoItemElement.prototype.action;
    /** @type {?} */
    NovoItemElement.prototype.active;
    /**
     * @type {?}
     * @private
     */
    NovoItemElement.prototype.dropdown;
    /** @type {?} */
    NovoItemElement.prototype.element;
}
var NovoListElement = /** @class */ (function () {
    function NovoListElement(dropdown) {
        this.dropdown = dropdown;
    }
    /**
     * @return {?}
     */
    NovoListElement.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.dropdown.items = this.items;
    };
    NovoListElement.decorators = [
        { type: Component, args: [{
                    selector: 'list',
                    template: '<ng-content></ng-content>'
                }] }
    ];
    /** @nocollapse */
    NovoListElement.ctorParameters = function () { return [
        { type: NovoDropdownElement }
    ]; };
    NovoListElement.propDecorators = {
        items: [{ type: ContentChildren, args: [NovoItemElement,] }]
    };
    return NovoListElement;
}());
export { NovoListElement };
if (false) {
    /** @type {?} */
    NovoListElement.prototype.items;
    /**
     * @type {?}
     * @private
     */
    NovoListElement.prototype.dropdown;
}
var NovoItemHeaderElement = /** @class */ (function () {
    function NovoItemHeaderElement() {
    }
    NovoItemHeaderElement.decorators = [
        { type: Component, args: [{
                    selector: 'dropdown-item-header',
                    template: '<ng-content></ng-content>'
                }] }
    ];
    return NovoItemHeaderElement;
}());
export { NovoItemHeaderElement };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZHJvcGRvd24vRHJvcGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFNUQ7SUFzREUsNkJBQW1CLE9BQW1CLEVBQVUsR0FBc0I7UUFBbkQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBdkN0RSx1QkFBa0IsR0FBVyxPQUFPLENBQUM7UUFJckMsU0FBSSxHQVVjLFNBQVMsQ0FBQztRQUU1QixtQkFBYyxHQUFxQyxZQUFZLENBQUM7UUFJaEUsVUFBSyxHQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0ZBQWdGOztRQUVwRyxpQkFBWSxHQUFZLEtBQUssQ0FBQyxDQUFDLGFBQWE7O1FBRzVDLFlBQU8sR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQVVyRCxnQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFJOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUks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aUJBQ0Y7Ozs7Z0JBVytCLG1CQUFtQjtnQkFoUWpELFVBQVU7OzsyQkF1UFQsS0FBSzsyQkFFTCxLQUFLO3lCQUVMLE1BQU07MEJBT04sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFZbkMsc0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQXhCWSxlQUFlOzs7SUFDMUIsbUNBQ3lCOztJQUN6QixtQ0FDaUM7O0lBQ2pDLGlDQUNzRDs7SUFFdEQsaUNBQStCOzs7OztJQUVuQixtQ0FBcUM7O0lBQUUsa0NBQTBCOztBQWdCL0U7SUFRRSx5QkFBb0IsUUFBNkI7UUFBN0IsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7SUFBRyxDQUFDOzs7O0lBRTlDLDRDQUFrQjs7O0lBQXpCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQyxDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLFFBQVEsRUFBRSwyQkFBMkI7aUJBQ3RDOzs7O2dCQUsrQixtQkFBbUI7Ozt3QkFIaEQsZUFBZSxTQUFDLGVBQWU7O0lBUWxDLHNCQUFDO0NBQUEsQUFiRCxJQWFDO1NBVFksZUFBZTs7O0lBQzFCLGdDQUN5Qzs7Ozs7SUFFN0IsbUNBQXFDOztBQU9uRDtJQUFBO0lBSW9DLENBQUM7O2dCQUpwQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7O0lBQ21DLDRCQUFDO0NBQUEsQUFKckMsSUFJcUM7U0FBeEIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vb3ZlcmxheS9PdmVybGF5JztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMva2V5LWNvZGVzL0tleUNvZGVzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IG5vdGlmeSB9IGZyb20gJy4uLy4uL3V0aWxzL25vdGlmaWVyL25vdGlmaWVyLnV0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRyb3Bkb3duJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJidXR0b25cIiAjdHJpZ2dlcj48L25nLWNvbnRlbnQ+XG4gICAgPG5vdm8tb3ZlcmxheS10ZW1wbGF0ZSBbcGFyZW50XT1cImVsZW1lbnRcIiBbd2lkdGhdPVwid2lkdGhcIiBbcG9zaXRpb25dPVwic2lkZVwiIFtzY3JvbGxTdHJhdGVneV09XCJzY3JvbGxTdHJhdGVneVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRhaW5lciB7eyBjb250YWluZXJDbGFzcyB9fVwiIFtzdHlsZS5oZWlnaHQucHhdPVwiaGVpZ2h0XCIgW2NsYXNzLmhhcy1oZWlnaHRdPVwiISFoZWlnaHRcIiAoa2V5ZG93bik9XCJvbk92ZXJsYXlLZXlEb3duKCRldmVudClcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9ub3ZvLW92ZXJsYXktdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Ecm9wZG93bkVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIHBhcmVudFNjcm9sbFNlbGVjdG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHBhcmVudFNjcm9sbEFjdGlvbjogc3RyaW5nID0gJ2Nsb3NlJztcbiAgQElucHV0KClcbiAgY29udGFpbmVyQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2lkZTpcbiAgICB8ICdkZWZhdWx0J1xuICAgIHwgJ3JpZ2h0J1xuICAgIHwgJ2Fib3ZlLWJlbG93J1xuICAgIHwgJ3JpZ2h0LWFib3ZlLWJlbG93J1xuICAgIHwgJ2NlbnRlcidcbiAgICB8ICdib3R0b20nXG4gICAgfCAnYm90dG9tLWxlZnQnXG4gICAgfCAnYm90dG9tLXJpZ2h0J1xuICAgIHwgJ3RvcC1sZWZ0J1xuICAgIHwgJ3RvcC1yaWdodCcgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpXG4gIHNjcm9sbFN0cmF0ZWd5OiAncmVwb3NpdGlvbicgfCAnYmxvY2snIHwgJ2Nsb3NlJyA9ICdyZXBvc2l0aW9uJztcbiAgQElucHV0KClcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHdpZHRoOiBudW1iZXIgPSAtMTsgLy8gRGVmYXVsdHMgdG8gZHluYW1pYyB3aWR0aCAobm8gaGFyZGNvZGVkIHdpZHRoIHZhbHVlIGFuZCBubyBob3N0IHdpZHRoIGxvb2t1cClcbiAgQElucHV0KClcbiAgYXBwZW5kVG9Cb2R5OiBib29sZWFuID0gZmFsc2U7IC8vIERlcHJlY2F0ZWRcblxuICBAT3V0cHV0KClcbiAgdG9nZ2xlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBWaWV3Q2hpbGQoTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIG92ZXJsYXk6IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQ7XG5cbiAgY2xpY2tIYW5kbGVyOiBhbnk7XG4gIGNsb3NlSGFuZGxlcjogYW55O1xuICBwYXJlbnRTY3JvbGxFbGVtZW50OiBFbGVtZW50O1xuICBwcml2YXRlIF9pdGVtczogUXVlcnlMaXN0PE5vdm9JdGVtRWxlbWVudD47XG4gIHByaXZhdGUgX3RleHRJdGVtczogc3RyaW5nW107XG4gIHByaXZhdGUgYWN0aXZlSW5kZXg6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIGZpbHRlclRlcm06IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIGZpbHRlclRlcm1UaW1lb3V0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gdGhpcy50b2dnbGVQYW5lbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VIYW5kbGVyID0gdGhpcy5jbG9zZVBhbmVsLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICBub3RpZnkoYCdhcHBlbmRUb0JvZHknIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSByZW1vdmUgdGhpcyBhdHRyaWJ1dGUuYCk7XG4gICAgfVxuICAgIC8vIEFkZCBhIGNsaWNrIGhhbmRsZXIgdG8gdGhlIGJ1dHRvbiB0byB0b2dnbGUgdGhlIG1lbnVcbiAgICBsZXQgYnV0dG9uID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuICAgIGlmICh0aGlzLnBhcmVudFNjcm9sbFNlbGVjdG9yKSB7XG4gICAgICB0aGlzLnBhcmVudFNjcm9sbEVsZW1lbnQgPSBIZWxwZXJzLmZpbmRBbmNlc3Rvcih0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5wYXJlbnRTY3JvbGxTZWxlY3Rvcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vIFJlbW92ZSBsaXN0ZW5lclxuICAgIGxldCBidXR0b24gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICBpZiAoYnV0dG9uKSB7XG4gICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcik7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhcmVudFNjcm9sbEVsZW1lbnQgJiYgdGhpcy5wYXJlbnRTY3JvbGxBY3Rpb24gPT09ICdjbG9zZScpIHtcbiAgICAgIHRoaXMucGFyZW50U2Nyb2xsRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNsb3NlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldCBpdGVtcyhpdGVtczogUXVlcnlMaXN0PE5vdm9JdGVtRWxlbWVudD4pIHtcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIC8vIEdldCB0aGUgaW5uZXJUZXh0IG9mIGFsbCB0aGUgaXRlbXMgdG8gYWxsb3cgZm9yIHNlYXJjaGluZ1xuICAgIHRoaXMuX3RleHRJdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbTogTm92b0l0ZW1FbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEJFR0lOOiBDb252ZW5pZW50IFBhbmVsIE1ldGhvZHMuICovXG4gIHB1YmxpYyBnZXQgcGFuZWxPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5LnBhbmVsT3BlbjtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5Lm9wZW5QYW5lbCgpO1xuICAgIGlmICh0aGlzLnBhcmVudFNjcm9sbEVsZW1lbnQgJiYgdGhpcy5wYXJlbnRTY3JvbGxBY3Rpb24gPT09ICdjbG9zZScpIHtcbiAgICAgIHRoaXMucGFyZW50U2Nyb2xsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNsb3NlSGFuZGxlcik7XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlZC5lbWl0KHRydWUpO1xuICB9XG5cbiAgcHVibGljIGNsb3NlUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5LmNsb3NlUGFuZWwoKTtcbiAgICBpZiAodGhpcy5wYXJlbnRTY3JvbGxFbGVtZW50ICYmIHRoaXMucGFyZW50U2Nyb2xsQWN0aW9uID09PSAnY2xvc2UnKSB7XG4gICAgICB0aGlzLnBhcmVudFNjcm9sbEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jbG9zZUhhbmRsZXIpO1xuICAgIH1cbiAgICAvLyBDbGVhciBhY3RpdmUgaW5kZXhcbiAgICBpZiAodGhpcy5hY3RpdmVJbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuX2l0ZW1zLnRvQXJyYXkoKVt0aGlzLmFjdGl2ZUluZGV4XS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IC0xO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMudG9nZ2xlZC5lbWl0KGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVQYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhbmVsT3BlbiA/IHRoaXMuY2xvc2VQYW5lbCgpIDogdGhpcy5vcGVuUGFuZWwoKTtcbiAgfVxuXG4gIC8qKiBFTkQ6IENvbnZlbmllbnQgUGFuZWwgTWV0aG9kcy4gKi9cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhbmVsT3BlbiAmJiBldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FU0MpIHtcbiAgICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAgIC8vIGFjdGl2ZSAmIGVzYyBoaXQgLS0gY2xvc2VcbiAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRU5URVIpIHtcbiAgICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAgIC8vIGVudGVyIC0tIHBlcmZvcm0gdGhlIFwiY2xpY2tcIlxuICAgICAgdGhpcy5faXRlbXMudG9BcnJheSgpW3RoaXMuYWN0aXZlSW5kZXhdLm9uQ2xpY2soZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRE9XTikge1xuICAgICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgICAgLy8gZG93biAtIG5hdmlnYXRlIHRocm91Z2ggdGhlIGxpc3QgaWdub3JpbmcgZGlzYWJsZWQgb25lc1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zLnRvQXJyYXkoKVt0aGlzLmFjdGl2ZUluZGV4XS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWN0aXZlSW5kZXgrKztcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ID09PSB0aGlzLl9pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IDA7XG4gICAgICB9XG4gICAgICB3aGlsZSAodGhpcy5faXRlbXMudG9BcnJheSgpW3RoaXMuYWN0aXZlSW5kZXhdLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXgrKztcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggPT09IHRoaXMuX2l0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9pdGVtcy50b0FycmF5KClbdGhpcy5hY3RpdmVJbmRleF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2Nyb2xsVG9BY3RpdmUoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlVQKSB7XG4gICAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICAvLyB1cCAtLSBuYXZpZ2F0ZSB0aHJvdWdoIHRoZSBsaXN0IGlnbm9yaW5nIGRpc2FibGVkIG9uZXNcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLl9pdGVtcy50b0FycmF5KClbdGhpcy5hY3RpdmVJbmRleF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLmFjdGl2ZUluZGV4LS07XG4gICAgICBpZiAodGhpcy5hY3RpdmVJbmRleCA8IDApIHtcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgICB3aGlsZSAodGhpcy5faXRlbXMudG9BcnJheSgpW3RoaXMuYWN0aXZlSW5kZXhdLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXgtLTtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggPCAwKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2l0ZW1zLnRvQXJyYXkoKVt0aGlzLmFjdGl2ZUluZGV4XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5zY3JvbGxUb0FjdGl2ZSgpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAoZXZlbnQua2V5Q29kZSA+PSA2NSAmJiBldmVudC5rZXlDb2RlIDw9IDkwKSB8fFxuICAgICAgKGV2ZW50LmtleUNvZGUgPj0gOTYgJiYgZXZlbnQua2V5Q29kZSA8PSAxMDUpIHx8XG4gICAgICAoZXZlbnQua2V5Q29kZSA+PSA0OCAmJiBldmVudC5rZXlDb2RlIDw9IDU3KSB8fFxuICAgICAgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuU1BBQ0VcbiAgICApIHtcbiAgICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAgIC8vIEEtWiwgMC05LCBzcGFjZSAtLSBmaWx0ZXIgdGhlIGxpc3QgYW5kIHNjcm9sbCB0byBhY3RpdmUgZmlsdGVyXG4gICAgICAvLyBmaWx0ZXIgaGFzIGhhcmQgcmVzZXQgYWZ0ZXIgMnNcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZpbHRlclRlcm1UaW1lb3V0KTtcbiAgICAgIHRoaXMuZmlsdGVyVGVybVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJUZXJtID0gJyc7XG4gICAgICB9LCAyMDAwKTtcbiAgICAgIGxldCBjaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5rZXlDb2RlKTtcbiAgICAgIHRoaXMuZmlsdGVyVGVybSA9IHRoaXMuZmlsdGVyVGVybS5jb25jYXQoY2hhcik7XG4gICAgICBsZXQgaW5kZXggPSB0aGlzLl90ZXh0SXRlbXMuZmluZEluZGV4KCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKGBeJHt0aGlzLmZpbHRlclRlcm0udG9Mb3dlckNhc2UoKX1gKS50ZXN0KHZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLl9pdGVtcy50b0FycmF5KClbdGhpcy5hY3RpdmVJbmRleF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLl9pdGVtcy50b0FycmF5KClbdGhpcy5hY3RpdmVJbmRleF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0FjdGl2ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoW0tleUNvZGVzLkJBQ0tTUEFDRSwgS2V5Q29kZXMuREVMRVRFXS5pbmNsdWRlcyhldmVudC5rZXlDb2RlKSkge1xuICAgICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgICAgLy8gYmFja3NwYWNlLCBkZWxldGUgLS0gcmVtb3ZlIHBhcnRpYWwgZmlsdGVyc1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmlsdGVyVGVybVRpbWVvdXQpO1xuICAgICAgdGhpcy5maWx0ZXJUZXJtVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlclRlcm0gPSAnJztcbiAgICAgIH0sIDIwMDApO1xuICAgICAgdGhpcy5maWx0ZXJUZXJtID0gdGhpcy5maWx0ZXJUZXJtLnNsaWNlKDAsIC0xKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25PdmVybGF5S2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FU0MgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRU5URVIpIHtcbiAgICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsVG9BY3RpdmUoKTogdm9pZCB7XG4gICAgbGV0IGNvbnRhaW5lciA9IHRoaXMub3ZlcmxheS5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1jb250YWluZXInKTtcbiAgICBsZXQgaXRlbSA9IHRoaXMuX2l0ZW1zLnRvQXJyYXkoKVt0aGlzLmFjdGl2ZUluZGV4XTtcbiAgICBpZiAoY29udGFpbmVyICYmIGl0ZW0pIHtcbiAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBpdGVtLmVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2l0ZW0nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdhY3RpdmUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSXRlbUVsZW1lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBrZWVwT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KClcbiAgcHVibGljIGFjdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZHJvcGRvd246IE5vdm9Ecm9wZG93bkVsZW1lbnQsIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgLy8gUG9vciBtYW4ncyBkaXNhYmxlXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAvLyBDbG9zZSBpZiBrZWVwT3BlbiBpcyBmYWxzZVxuICAgICAgaWYgKCF0aGlzLmtlZXBPcGVuKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd24uY2xvc2VQYW5lbCgpO1xuICAgICAgfVxuICAgICAgLy8gRW1pdCB0aGUgYWN0aW9uXG4gICAgICB0aGlzLmFjdGlvbi5lbWl0KHsgb3JpZ2luYWxFdmVudDogZXZlbnQgfSk7XG4gICAgfVxuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpc3QnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTGlzdEVsZW1lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihOb3ZvSXRlbUVsZW1lbnQpXG4gIHB1YmxpYyBpdGVtczogUXVlcnlMaXN0PE5vdm9JdGVtRWxlbWVudD47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkcm9wZG93bjogTm92b0Ryb3Bkb3duRWxlbWVudCkge31cblxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZHJvcGRvd24uaXRlbXMgPSB0aGlzLml0ZW1zO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Ryb3Bkb3duLWl0ZW0taGVhZGVyJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0l0ZW1IZWFkZXJFbGVtZW50IHt9XG4iXX0=