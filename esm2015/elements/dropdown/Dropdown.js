/**
 * @fileoverview added by tsickle
 * Generated from: elements/dropdown/Dropdown.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, HostListener, Input, Output, QueryList, ViewChild, } from '@angular/core';
import { Helpers } from '../../utils/Helpers';
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
import { notify } from '../../utils/notifier/notifier.util';
// APP
import { NovoOverlayTemplateComponent } from '../overlay/Overlay';
export class NovoDropdownElement {
    /**
     * @param {?} element
     * @param {?} ref
     */
    constructor(element, ref) {
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
    ngOnInit() {
        if (this.appendToBody) {
            notify(`'appendToBody' has been deprecated. Please remove this attribute.`);
        }
        // Add a click handler to the button to toggle the menu
        /** @type {?} */
        const button = this.element.nativeElement.querySelector('button');
        button.addEventListener('click', this.clickHandler);
        if (this.parentScrollSelector) {
            this.parentScrollElement = Helpers.findAncestor(this.element.nativeElement, this.parentScrollSelector);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // Remove listener
        /** @type {?} */
        const button = this.element.nativeElement.querySelector('button');
        if (button) {
            button.removeEventListener('click', this.clickHandler);
        }
        if (this.parentScrollElement && this.parentScrollAction === 'close') {
            this.parentScrollElement.removeEventListener('scroll', this.closeHandler);
        }
    }
    /**
     * @param {?} items
     * @return {?}
     */
    set items(items) {
        this._items = items;
        this.activeIndex = -1;
        // Get the innerText of all the items to allow for searching
        this._textItems = items.map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            return item.element.nativeElement.innerText;
        }));
    }
    /**
     * BEGIN: Convenient Panel Methods.
     * @return {?}
     */
    get panelOpen() {
        return this.overlay && this.overlay.panelOpen;
    }
    /**
     * @return {?}
     */
    openPanel() {
        this.overlay.openPanel();
        if (this.parentScrollElement && this.parentScrollAction === 'close') {
            this.parentScrollElement.addEventListener('scroll', this.closeHandler);
        }
        this.toggled.emit(true);
    }
    /**
     * @return {?}
     */
    closePanel() {
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
    }
    /**
     * @return {?}
     */
    togglePanel() {
        this.panelOpen ? this.closePanel() : this.openPanel();
    }
    /**
     * END: Convenient Panel Methods.
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
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
            () => {
                this.filterTerm = '';
            }), 2000);
            /** @type {?} */
            const char = event.key;
            this.filterTerm = this.filterTerm.concat(char);
            /** @type {?} */
            const index = this._textItems.findIndex((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                return new RegExp(`^${this.filterTerm.toLowerCase()}`).test(value.trim().toLowerCase());
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
            () => {
                this.filterTerm = '';
            }), 2000);
            this.filterTerm = this.filterTerm.slice(0, -1);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onOverlayKeyDown(event) {
        if (event.keyCode === KeyCodes.ESC || event.keyCode === KeyCodes.ENTER) {
            Helpers.swallowEvent(event);
            this.closePanel();
        }
    }
    /**
     * @private
     * @return {?}
     */
    scrollToActive() {
        /** @type {?} */
        const container = this.overlay.overlayRef.overlayElement.querySelector('.dropdown-container');
        /** @type {?} */
        const item = this._items.toArray()[this.activeIndex];
        if (container && item) {
            container.scrollTop = item.element.nativeElement.offsetTop;
        }
    }
}
NovoDropdownElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-dropdown',
                template: `
    <ng-content select="button" #trigger></ng-content>
    <novo-overlay-template [parent]="element" [width]="width" [position]="side" [scrollStrategy]="scrollStrategy">
      <div
        class="dropdown-container {{ containerClass }}"
        [style.height.px]="height"
        [class.has-height]="!!height"
        (keydown)="onOverlayKeyDown($event)"
      >
        <ng-content></ng-content>
      </div>
    </novo-overlay-template>
  `
            }] }
];
/** @nocollapse */
NovoDropdownElement.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
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
export class NovoItemElement {
    /**
     * @param {?} dropdown
     * @param {?} element
     */
    constructor(dropdown, element) {
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
    onClick(event) {
        // Poor man's disable
        if (!this.disabled) {
            // Close if keepOpen is false
            if (!this.keepOpen) {
                this.dropdown.closePanel();
            }
            // Emit the action
            this.action.emit({ originalEvent: event });
        }
    }
}
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
NovoItemElement.ctorParameters = () => [
    { type: NovoDropdownElement },
    { type: ElementRef }
];
NovoItemElement.propDecorators = {
    disabled: [{ type: Input }],
    keepOpen: [{ type: Input }],
    action: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
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
export class NovoDropdownListElement {
    /**
     * @param {?} dropdown
     */
    constructor(dropdown) {
        this.dropdown = dropdown;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.dropdown.items = this.items;
        this.items.changes.subscribe((/**
         * @return {?}
         */
        () => {
            this.dropdown.items = this.items;
        }));
    }
}
NovoDropdownListElement.decorators = [
    { type: Component, args: [{
                selector: 'list',
                template: '<ng-content></ng-content>'
            }] }
];
/** @nocollapse */
NovoDropdownListElement.ctorParameters = () => [
    { type: NovoDropdownElement }
];
NovoDropdownListElement.propDecorators = {
    items: [{ type: ContentChildren, args: [NovoItemElement,] }]
};
if (false) {
    /** @type {?} */
    NovoDropdownListElement.prototype.items;
    /**
     * @type {?}
     * @private
     */
    NovoDropdownListElement.prototype.dropdown;
}
export class NovoDropDownItemHeaderElement {
}
NovoDropDownItemHeaderElement.decorators = [
    { type: Component, args: [{
                selector: 'dropdown-item-header',
                template: '<ng-content></ng-content>'
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZHJvcGRvd24vRHJvcGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFFNUQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFrQmxFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBMkM5QixZQUFtQixPQUFtQixFQUFVLEdBQXNCO1FBQW5ELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXZDdEUsdUJBQWtCLEdBQVcsT0FBTyxDQUFDO1FBSXJDLFNBQUksR0FVYyxTQUFTLENBQUM7UUFFNUIsbUJBQWMsR0FBcUMsWUFBWSxDQUFDO1FBSWhFLFVBQUssR0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdGQUFnRjs7UUFFcEcsaUJBQVksR0FBWSxLQUFLLENBQUMsQ0FBQyxhQUFhOztRQUc1QyxZQUFPLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFVckQsZ0JBQVcsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUN6QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBSTlCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFB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TyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBWGpDLG1DQUN5Qjs7SUFDekIsbUNBQ2lDOztJQUNqQyxpQ0FDc0Q7O0lBRXRELGlDQUErQjs7Ozs7SUFFbkIsbUNBQXFDOztJQUFFLGtDQUEwQjs7QUFvQi9FLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFJbEMsWUFBb0IsUUFBNkI7UUFBN0IsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7SUFBRyxDQUFDOzs7O0lBRTlDLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ25DLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxNQUFNO2dCQUNoQixRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDOzs7O1lBSytCLG1CQUFtQjs7O29CQUhoRCxlQUFlLFNBQUMsZUFBZTs7OztJQUFoQyx3Q0FDeUM7Ozs7O0lBRTdCLDJDQUFxQzs7QUFjbkQsTUFBTSxPQUFPLDZCQUE2Qjs7O1lBSnpDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9vdmVybGF5L092ZXJsYXknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWRyb3Bkb3duJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJidXR0b25cIiAjdHJpZ2dlcj48L25nLWNvbnRlbnQ+XG4gICAgPG5vdm8tb3ZlcmxheS10ZW1wbGF0ZSBbcGFyZW50XT1cImVsZW1lbnRcIiBbd2lkdGhdPVwid2lkdGhcIiBbcG9zaXRpb25dPVwic2lkZVwiIFtzY3JvbGxTdHJhdGVneV09XCJzY3JvbGxTdHJhdGVneVwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImRyb3Bkb3duLWNvbnRhaW5lciB7eyBjb250YWluZXJDbGFzcyB9fVwiXG4gICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwiaGVpZ2h0XCJcbiAgICAgICAgW2NsYXNzLmhhcy1oZWlnaHRdPVwiISFoZWlnaHRcIlxuICAgICAgICAoa2V5ZG93bik9XCJvbk92ZXJsYXlLZXlEb3duKCRldmVudClcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L25vdm8tb3ZlcmxheS10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0Ryb3Bkb3duRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgcGFyZW50U2Nyb2xsU2VsZWN0b3I6IHN0cmluZztcbiAgQElucHV0KClcbiAgcGFyZW50U2Nyb2xsQWN0aW9uOiBzdHJpbmcgPSAnY2xvc2UnO1xuICBASW5wdXQoKVxuICBjb250YWluZXJDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzaWRlOlxuICAgIHwgJ2RlZmF1bHQnXG4gICAgfCAncmlnaHQnXG4gICAgfCAnYWJvdmUtYmVsb3cnXG4gICAgfCAncmlnaHQtYWJvdmUtYmVsb3cnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2JvdHRvbSdcbiAgICB8ICdib3R0b20tbGVmdCdcbiAgICB8ICdib3R0b20tcmlnaHQnXG4gICAgfCAndG9wLWxlZnQnXG4gICAgfCAndG9wLXJpZ2h0JyA9ICdkZWZhdWx0JztcbiAgQElucHV0KClcbiAgc2Nyb2xsU3RyYXRlZ3k6ICdyZXBvc2l0aW9uJyB8ICdibG9jaycgfCAnY2xvc2UnID0gJ3JlcG9zaXRpb24nO1xuICBASW5wdXQoKVxuICBoZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KClcbiAgd2lkdGg6IG51bWJlciA9IC0xOyAvLyBEZWZhdWx0cyB0byBkeW5hbWljIHdpZHRoIChubyBoYXJkY29kZWQgd2lkdGggdmFsdWUgYW5kIG5vIGhvc3Qgd2lkdGggbG9va3VwKVxuICBASW5wdXQoKVxuICBhcHBlbmRUb0JvZHk6IGJvb2xlYW4gPSBmYWxzZTsgLy8gRGVwcmVjYXRlZFxuXG4gIEBPdXRwdXQoKVxuICB0b2dnbGVkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQFZpZXdDaGlsZChOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgb3ZlcmxheTogTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudDtcblxuICBjbGlja0hhbmRsZXI6IGFueTtcbiAgY2xvc2VIYW5kbGVyOiBhbnk7XG4gIHBhcmVudFNjcm9sbEVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHByaXZhdGUgX2l0ZW1zOiBRdWVyeUxpc3Q8Tm92b0l0ZW1FbGVtZW50PjtcbiAgcHJpdmF0ZSBfdGV4dEl0ZW1zOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBhY3RpdmVJbmRleDogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgZmlsdGVyVGVybTogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgZmlsdGVyVGVybVRpbWVvdXQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLnRvZ2dsZVBhbmVsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZUhhbmRsZXIgPSB0aGlzLmNsb3NlUGFuZWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgIG5vdGlmeShgJ2FwcGVuZFRvQm9keScgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIHJlbW92ZSB0aGlzIGF0dHJpYnV0ZS5gKTtcbiAgICB9XG4gICAgLy8gQWRkIGEgY2xpY2sgaGFuZGxlciB0byB0aGUgYnV0dG9uIHRvIHRvZ2dsZSB0aGUgbWVudVxuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyKTtcbiAgICBpZiAodGhpcy5wYXJlbnRTY3JvbGxTZWxlY3Rvcikge1xuICAgICAgdGhpcy5wYXJlbnRTY3JvbGxFbGVtZW50ID0gSGVscGVycy5maW5kQW5jZXN0b3IodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMucGFyZW50U2Nyb2xsU2VsZWN0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAvLyBSZW1vdmUgbGlzdGVuZXJcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICBpZiAoYnV0dG9uKSB7XG4gICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcik7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhcmVudFNjcm9sbEVsZW1lbnQgJiYgdGhpcy5wYXJlbnRTY3JvbGxBY3Rpb24gPT09ICdjbG9zZScpIHtcbiAgICAgIHRoaXMucGFyZW50U2Nyb2xsRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNsb3NlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldCBpdGVtcyhpdGVtczogUXVlcnlMaXN0PE5vdm9JdGVtRWxlbWVudD4pIHtcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIHRoaXMuYWN0aXZlSW5kZXggPSAtMTtcbiAgICAvLyBHZXQgdGhlIGlubmVyVGV4dCBvZiBhbGwgdGhlIGl0ZW1zIHRvIGFsbG93IGZvciBzZWFyY2hpbmdcbiAgICB0aGlzLl90ZXh0SXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW06IE5vdm9JdGVtRWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0uZWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVyVGV4dDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBCRUdJTjogQ29udmVuaWVudCBQYW5lbCBNZXRob2RzLiAqL1xuICBwdWJsaWMgZ2V0IHBhbmVsT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5wYW5lbE9wZW47XG4gIH1cblxuICBwdWJsaWMgb3BlblBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheS5vcGVuUGFuZWwoKTtcbiAgICBpZiAodGhpcy5wYXJlbnRTY3JvbGxFbGVtZW50ICYmIHRoaXMucGFyZW50U2Nyb2xsQWN0aW9uID09PSAnY2xvc2UnKSB7XG4gICAgICB0aGlzLnBhcmVudFNjcm9sbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jbG9zZUhhbmRsZXIpO1xuICAgIH1cbiAgICB0aGlzLnRvZ2dsZWQuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZVBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheS5jbG9zZVBhbmVsKCk7XG4gICAgaWYgKHRoaXMucGFyZW50U2Nyb2xsRWxlbWVudCAmJiB0aGlzLnBhcmVudFNjcm9sbEFjdGlvbiA9PT0gJ2Nsb3NlJykge1xuICAgICAgdGhpcy5wYXJlbnRTY3JvbGxFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY2xvc2VIYW5kbGVyKTtcbiAgICB9XG4gICAgLy8gQ2xlYXIgYWN0aXZlIGluZGV4XG4gICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLl9pdGVtcy50b0FycmF5KClbdGhpcy5hY3RpdmVJbmRleF0uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlSW5kZXggPSAtMTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLnRvZ2dsZWQuZW1pdChmYWxzZSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy5wYW5lbE9wZW4gPyB0aGlzLmNsb3NlUGFuZWwoKSA6IHRoaXMub3BlblBhbmVsKCk7XG4gIH1cblxuICAvKiogRU5EOiBDb252ZW5pZW50IFBhbmVsIE1ldGhvZHMuICovXG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wYW5lbE9wZW4gJiYgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRVNDKSB7XG4gICAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICAvLyBhY3RpdmUgJiBlc2MgaGl0IC0tIGNsb3NlXG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVOVEVSKSB7XG4gICAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICAvLyBlbnRlciAtLSBwZXJmb3JtIHRoZSBcImNsaWNrXCJcbiAgICAgIHRoaXMuX2l0ZW1zLnRvQXJyYXkoKVt0aGlzLmFjdGl2ZUluZGV4XS5vbkNsaWNrKGV2ZW50KTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkRPV04pIHtcbiAgICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAgIC8vIGRvd24gLSBuYXZpZ2F0ZSB0aHJvdWdoIHRoZSBsaXN0IGlnbm9yaW5nIGRpc2FibGVkIG9uZXNcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLl9pdGVtcy50b0FycmF5KClbdGhpcy5hY3RpdmVJbmRleF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLmFjdGl2ZUluZGV4Kys7XG4gICAgICBpZiAodGhpcy5hY3RpdmVJbmRleCA9PT0gdGhpcy5faXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHRoaXMuX2l0ZW1zLnRvQXJyYXkoKVt0aGlzLmFjdGl2ZUluZGV4XS5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUluZGV4Kys7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ID09PSB0aGlzLl9pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5faXRlbXMudG9BcnJheSgpW3RoaXMuYWN0aXZlSW5kZXhdLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnNjcm9sbFRvQWN0aXZlKCk7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5VUCkge1xuICAgICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgICAgLy8gdXAgLS0gbmF2aWdhdGUgdGhyb3VnaCB0aGUgbGlzdCBpZ25vcmluZyBkaXNhYmxlZCBvbmVzXG4gICAgICBpZiAodGhpcy5hY3RpdmVJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5faXRlbXMudG9BcnJheSgpW3RoaXMuYWN0aXZlSW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5hY3RpdmVJbmRleC0tO1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggPCAwKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSB0aGlzLl9pdGVtcy5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHRoaXMuX2l0ZW1zLnRvQXJyYXkoKVt0aGlzLmFjdGl2ZUluZGV4XS5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUluZGV4LS07XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4IDwgMCkge1xuICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSB0aGlzLl9pdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9pdGVtcy50b0FycmF5KClbdGhpcy5hY3RpdmVJbmRleF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2Nyb2xsVG9BY3RpdmUoKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgKGV2ZW50LmtleUNvZGUgPj0gNjUgJiYgZXZlbnQua2V5Q29kZSA8PSA5MCkgfHxcbiAgICAgIChldmVudC5rZXlDb2RlID49IDk2ICYmIGV2ZW50LmtleUNvZGUgPD0gMTA1KSB8fFxuICAgICAgKGV2ZW50LmtleUNvZGUgPj0gNDggJiYgZXZlbnQua2V5Q29kZSA8PSA1NykgfHxcbiAgICAgIGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlNQQUNFXG4gICAgKSB7XG4gICAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICAvLyBBLVosIDAtOSwgc3BhY2UgLS0gZmlsdGVyIHRoZSBsaXN0IGFuZCBzY3JvbGwgdG8gYWN0aXZlIGZpbHRlclxuICAgICAgLy8gZmlsdGVyIGhhcyBoYXJkIHJlc2V0IGFmdGVyIDJzXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5maWx0ZXJUZXJtVGltZW91dCk7XG4gICAgICB0aGlzLmZpbHRlclRlcm1UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyVGVybSA9ICcnO1xuICAgICAgfSwgMjAwMCk7XG4gICAgICBjb25zdCBjaGFyID0gZXZlbnQua2V5O1xuICAgICAgdGhpcy5maWx0ZXJUZXJtID0gdGhpcy5maWx0ZXJUZXJtLmNvbmNhdChjaGFyKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fdGV4dEl0ZW1zLmZpbmRJbmRleCgodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7dGhpcy5maWx0ZXJUZXJtLnRvTG93ZXJDYXNlKCl9YCkudGVzdCh2YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9KTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5faXRlbXMudG9BcnJheSgpW3RoaXMuYWN0aXZlSW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5faXRlbXMudG9BcnJheSgpW3RoaXMuYWN0aXZlSW5kZXhdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9BY3RpdmUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFtLZXlDb2Rlcy5CQUNLU1BBQ0UsIEtleUNvZGVzLkRFTEVURV0uaW5jbHVkZXMoZXZlbnQua2V5Q29kZSkpIHtcbiAgICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAgIC8vIGJhY2tzcGFjZSwgZGVsZXRlIC0tIHJlbW92ZSBwYXJ0aWFsIGZpbHRlcnNcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZpbHRlclRlcm1UaW1lb3V0KTtcbiAgICAgIHRoaXMuZmlsdGVyVGVybVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJUZXJtID0gJyc7XG4gICAgICB9LCAyMDAwKTtcbiAgICAgIHRoaXMuZmlsdGVyVGVybSA9IHRoaXMuZmlsdGVyVGVybS5zbGljZSgwLCAtMSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uT3ZlcmxheUtleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRVNDIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVOVEVSKSB7XG4gICAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNjcm9sbFRvQWN0aXZlKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMub3ZlcmxheS5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1jb250YWluZXInKTtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5faXRlbXMudG9BcnJheSgpW3RoaXMuYWN0aXZlSW5kZXhdO1xuICAgIGlmIChjb250YWluZXIgJiYgaXRlbSkge1xuICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IGl0ZW0uZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXRlbScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9JdGVtRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcHVibGljIGtlZXBPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgYWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkcm9wZG93bjogTm92b0Ryb3Bkb3duRWxlbWVudCwgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBQb29yIG1hbidzIGRpc2FibGVcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIC8vIENsb3NlIGlmIGtlZXBPcGVuIGlzIGZhbHNlXG4gICAgICBpZiAoIXRoaXMua2VlcE9wZW4pIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5jbG9zZVBhbmVsKCk7XG4gICAgICB9XG4gICAgICAvLyBFbWl0IHRoZSBhY3Rpb25cbiAgICAgIHRoaXMuYWN0aW9uLmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCB9KTtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGlzdCcsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Ecm9wZG93bkxpc3RFbGVtZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oTm92b0l0ZW1FbGVtZW50KVxuICBwdWJsaWMgaXRlbXM6IFF1ZXJ5TGlzdDxOb3ZvSXRlbUVsZW1lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZHJvcGRvd246IE5vdm9Ecm9wZG93bkVsZW1lbnQpIHt9XG5cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRyb3Bkb3duLml0ZW1zID0gdGhpcy5pdGVtcztcbiAgICB0aGlzLml0ZW1zLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZHJvcGRvd24uaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIH0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Ryb3Bkb3duLWl0ZW0taGVhZGVyJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0Ryb3BEb3duSXRlbUhlYWRlckVsZW1lbnQge31cbiJdfQ==