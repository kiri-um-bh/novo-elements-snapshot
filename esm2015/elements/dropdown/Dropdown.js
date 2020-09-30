/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, HostListener, Input, Output, QueryList, ViewChild, } from '@angular/core';
// APP
import { NovoOverlayTemplateComponent } from '../overlay/Overlay';
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
import { Helpers } from '../../utils/Helpers';
import { notify } from '../../utils/notifier/notifier.util';
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
        let button = this.element.nativeElement.querySelector('button');
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
        let button = this.element.nativeElement.querySelector('button');
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
            let char = String.fromCharCode(event.keyCode);
            this.filterTerm = this.filterTerm.concat(char);
            /** @type {?} */
            let index = this._textItems.findIndex((/**
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
        let container = this.overlay.overlayRef.overlayElement.querySelector('.dropdown-container');
        /** @type {?} */
        let item = this._items.toArray()[this.activeIndex];
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
      <div class="dropdown-container {{ containerClass }}" [style.height.px]="height" [class.has-height]="!!height" (keydown)="onOverlayKeyDown($event)">
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
    overlay: [{ type: ViewChild, args: [NovoOverlayTemplateComponent,] }],
    button: [{ type: ViewChild, args: ['trigger',] }],
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
    NovoDropdownElement.prototype.button;
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
export class NovoListElement {
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
    }
}
NovoListElement.decorators = [
    { type: Component, args: [{
                selector: 'list',
                template: '<ng-content></ng-content>'
            }] }
];
/** @nocollapse */
NovoListElement.ctorParameters = () => [
    { type: NovoDropdownElement }
];
NovoListElement.propDecorators = {
    items: [{ type: ContentChildren, args: [NovoItemElement,] }]
};
if (false) {
    /** @type {?} */
    NovoListElement.prototype.items;
    /**
     * @type {?}
     * @private
     */
    NovoListElement.prototype.dropdown;
}
export class NovoItemHeaderElement {
}
NovoItemHeaderElement.decorators = [
    { type: Component, args: [{
                selector: 'dropdown-item-header',
                template: '<ng-content></ng-content>'
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZHJvcGRvd24vRHJvcGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDOztBQUV2QixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQWE1RCxNQUFNLE9BQU8sbUJBQW1COzs7OztJQTZDOUIsWUFBbUIsT0FBbUIsRUFBVSxHQUFzQjtRQUFuRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUF6Q3RFLHVCQUFrQixHQUFXLE9BQU8sQ0FBQztRQUlyQyxTQUFJLEdBVWMsU0FBUyxDQUFDO1FBRTVCLG1CQUFjLEdBQXFDLFlBQVksQ0FBQztRQUloRSxVQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnRkFBZ0Y7O1FBRXBHLGlCQUFZLEdBQVksS0FBSyxDQUFDLENBQUMsYUFBYTs7UUFHNUMsWUFBTyxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBWXJELGdCQUFXLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDekIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUk5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUks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QUFDOzs7O0lBWGpDLG1DQUN5Qjs7SUFDekIsbUNBQ2lDOztJQUNqQyxpQ0FDc0Q7O0lBRXRELGlDQUErQjs7Ozs7SUFFbkIsbUNBQXFDOztJQUFFLGtDQUEwQjs7QUFvQi9FLE1BQU0sT0FBTyxlQUFlOzs7O0lBSTFCLFlBQW9CLFFBQTZCO1FBQTdCLGFBQVEsR0FBUixRQUFRLENBQXFCO0lBQUcsQ0FBQzs7OztJQUU5QyxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQyxDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7Ozs7WUFLK0IsbUJBQW1COzs7b0JBSGhELGVBQWUsU0FBQyxlQUFlOzs7O0lBQWhDLGdDQUN5Qzs7Ozs7SUFFN0IsbUNBQXFDOztBQVduRCxNQUFNLE9BQU8scUJBQXFCOzs7WUFKakMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9PdmVybGF5VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuLi9vdmVybGF5L092ZXJsYXknO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvbm90aWZpZXIvbm90aWZpZXIudXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZHJvcGRvd24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJ1dHRvblwiICN0cmlnZ2VyPjwvbmctY29udGVudD5cbiAgICA8bm92by1vdmVybGF5LXRlbXBsYXRlIFtwYXJlbnRdPVwiZWxlbWVudFwiIFt3aWR0aF09XCJ3aWR0aFwiIFtwb3NpdGlvbl09XCJzaWRlXCIgW3Njcm9sbFN0cmF0ZWd5XT1cInNjcm9sbFN0cmF0ZWd5XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGFpbmVyIHt7IGNvbnRhaW5lckNsYXNzIH19XCIgW3N0eWxlLmhlaWdodC5weF09XCJoZWlnaHRcIiBbY2xhc3MuaGFzLWhlaWdodF09XCIhIWhlaWdodFwiIChrZXlkb3duKT1cIm9uT3ZlcmxheUtleURvd24oJGV2ZW50KVwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L25vdm8tb3ZlcmxheS10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0Ryb3Bkb3duRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgcGFyZW50U2Nyb2xsU2VsZWN0b3I6IHN0cmluZztcbiAgQElucHV0KClcbiAgcGFyZW50U2Nyb2xsQWN0aW9uOiBzdHJpbmcgPSAnY2xvc2UnO1xuICBASW5wdXQoKVxuICBjb250YWluZXJDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzaWRlOlxuICAgIHwgJ2RlZmF1bHQnXG4gICAgfCAncmlnaHQnXG4gICAgfCAnYWJvdmUtYmVsb3cnXG4gICAgfCAncmlnaHQtYWJvdmUtYmVsb3cnXG4gICAgfCAnY2VudGVyJ1xuICAgIHwgJ2JvdHRvbSdcbiAgICB8ICdib3R0b20tbGVmdCdcbiAgICB8ICdib3R0b20tcmlnaHQnXG4gICAgfCAndG9wLWxlZnQnXG4gICAgfCAndG9wLXJpZ2h0JyA9ICdkZWZhdWx0JztcbiAgQElucHV0KClcbiAgc2Nyb2xsU3RyYXRlZ3k6ICdyZXBvc2l0aW9uJyB8ICdibG9jaycgfCAnY2xvc2UnID0gJ3JlcG9zaXRpb24nO1xuICBASW5wdXQoKVxuICBoZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KClcbiAgd2lkdGg6IG51bWJlciA9IC0xOyAvLyBEZWZhdWx0cyB0byBkeW5hbWljIHdpZHRoIChubyBoYXJkY29kZWQgd2lkdGggdmFsdWUgYW5kIG5vIGhvc3Qgd2lkdGggbG9va3VwKVxuICBASW5wdXQoKVxuICBhcHBlbmRUb0JvZHk6IGJvb2xlYW4gPSBmYWxzZTsgLy8gRGVwcmVjYXRlZFxuXG4gIEBPdXRwdXQoKVxuICB0b2dnbGVkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQFZpZXdDaGlsZChOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50KVxuICBvdmVybGF5OiBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCd0cmlnZ2VyJylcbiAgcHVibGljIGJ1dHRvbjtcblxuICBjbGlja0hhbmRsZXI6IGFueTtcbiAgY2xvc2VIYW5kbGVyOiBhbnk7XG4gIHBhcmVudFNjcm9sbEVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHByaXZhdGUgX2l0ZW1zOiBRdWVyeUxpc3Q8Tm92b0l0ZW1FbGVtZW50PjtcbiAgcHJpdmF0ZSBfdGV4dEl0ZW1zOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBhY3RpdmVJbmRleDogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgZmlsdGVyVGVybTogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgZmlsdGVyVGVybVRpbWVvdXQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLnRvZ2dsZVBhbmVsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZUhhbmRsZXIgPSB0aGlzLmNsb3NlUGFuZWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgIG5vdGlmeShgJ2FwcGVuZFRvQm9keScgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIHJlbW92ZSB0aGlzIGF0dHJpYnV0ZS5gKTtcbiAgICB9XG4gICAgLy8gQWRkIGEgY2xpY2sgaGFuZGxlciB0byB0aGUgYnV0dG9uIHRvIHRvZ2dsZSB0aGUgbWVudVxuICAgIGxldCBidXR0b24gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcik7XG4gICAgaWYgKHRoaXMucGFyZW50U2Nyb2xsU2VsZWN0b3IpIHtcbiAgICAgIHRoaXMucGFyZW50U2Nyb2xsRWxlbWVudCA9IEhlbHBlcnMuZmluZEFuY2VzdG9yKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnBhcmVudFNjcm9sbFNlbGVjdG9yKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gUmVtb3ZlIGxpc3RlbmVyXG4gICAgbGV0IGJ1dHRvbiA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgIGlmIChidXR0b24pIHtcbiAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFyZW50U2Nyb2xsRWxlbWVudCAmJiB0aGlzLnBhcmVudFNjcm9sbEFjdGlvbiA9PT0gJ2Nsb3NlJykge1xuICAgICAgdGhpcy5wYXJlbnRTY3JvbGxFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY2xvc2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0IGl0ZW1zKGl0ZW1zOiBRdWVyeUxpc3Q8Tm92b0l0ZW1FbGVtZW50Pikge1xuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgLy8gR2V0IHRoZSBpbm5lclRleHQgb2YgYWxsIHRoZSBpdGVtcyB0byBhbGxvdyBmb3Igc2VhcmNoaW5nXG4gICAgdGhpcy5fdGV4dEl0ZW1zID0gaXRlbXMubWFwKChpdGVtOiBOb3ZvSXRlbUVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBpdGVtLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lclRleHQ7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQkVHSU46IENvbnZlbmllbnQgUGFuZWwgTWV0aG9kcy4gKi9cbiAgcHVibGljIGdldCBwYW5lbE9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkucGFuZWxPcGVuO1xuICB9XG5cbiAgcHVibGljIG9wZW5QYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXkub3BlblBhbmVsKCk7XG4gICAgaWYgKHRoaXMucGFyZW50U2Nyb2xsRWxlbWVudCAmJiB0aGlzLnBhcmVudFNjcm9sbEFjdGlvbiA9PT0gJ2Nsb3NlJykge1xuICAgICAgdGhpcy5wYXJlbnRTY3JvbGxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY2xvc2VIYW5kbGVyKTtcbiAgICB9XG4gICAgdGhpcy50b2dnbGVkLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VQYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXkuY2xvc2VQYW5lbCgpO1xuICAgIGlmICh0aGlzLnBhcmVudFNjcm9sbEVsZW1lbnQgJiYgdGhpcy5wYXJlbnRTY3JvbGxBY3Rpb24gPT09ICdjbG9zZScpIHtcbiAgICAgIHRoaXMucGFyZW50U2Nyb2xsRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNsb3NlSGFuZGxlcik7XG4gICAgfVxuICAgIC8vIENsZWFyIGFjdGl2ZSBpbmRleFxuICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5faXRlbXMudG9BcnJheSgpW3RoaXMuYWN0aXZlSW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gLTE7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy50b2dnbGVkLmVtaXQoZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZVBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMucGFuZWxPcGVuID8gdGhpcy5jbG9zZVBhbmVsKCkgOiB0aGlzLm9wZW5QYW5lbCgpO1xuICB9XG5cbiAgLyoqIEVORDogQ29udmVuaWVudCBQYW5lbCBNZXRob2RzLiAqL1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGFuZWxPcGVuICYmIGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVTQykge1xuICAgICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgICAgLy8gYWN0aXZlICYgZXNjIGhpdCAtLSBjbG9zZVxuICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FTlRFUikge1xuICAgICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgICAgLy8gZW50ZXIgLS0gcGVyZm9ybSB0aGUgXCJjbGlja1wiXG4gICAgICB0aGlzLl9pdGVtcy50b0FycmF5KClbdGhpcy5hY3RpdmVJbmRleF0ub25DbGljayhldmVudCk7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5ET1dOKSB7XG4gICAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICAvLyBkb3duIC0gbmF2aWdhdGUgdGhyb3VnaCB0aGUgbGlzdCBpZ25vcmluZyBkaXNhYmxlZCBvbmVzXG4gICAgICBpZiAodGhpcy5hY3RpdmVJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5faXRlbXMudG9BcnJheSgpW3RoaXMuYWN0aXZlSW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5hY3RpdmVJbmRleCsrO1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggPT09IHRoaXMuX2l0ZW1zLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIHdoaWxlICh0aGlzLl9pdGVtcy50b0FycmF5KClbdGhpcy5hY3RpdmVJbmRleF0uZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCsrO1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVJbmRleCA9PT0gdGhpcy5faXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2l0ZW1zLnRvQXJyYXkoKVt0aGlzLmFjdGl2ZUluZGV4XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5zY3JvbGxUb0FjdGl2ZSgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuVVApIHtcbiAgICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAgIC8vIHVwIC0tIG5hdmlnYXRlIHRocm91Z2ggdGhlIGxpc3QgaWdub3JpbmcgZGlzYWJsZWQgb25lc1xuICAgICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zLnRvQXJyYXkoKVt0aGlzLmFjdGl2ZUluZGV4XS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWN0aXZlSW5kZXgtLTtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4IDwgMCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gdGhpcy5faXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIHdoaWxlICh0aGlzLl9pdGVtcy50b0FycmF5KClbdGhpcy5hY3RpdmVJbmRleF0uZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleC0tO1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVJbmRleCA8IDApIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gdGhpcy5faXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5faXRlbXMudG9BcnJheSgpW3RoaXMuYWN0aXZlSW5kZXhdLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnNjcm9sbFRvQWN0aXZlKCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIChldmVudC5rZXlDb2RlID49IDY1ICYmIGV2ZW50LmtleUNvZGUgPD0gOTApIHx8XG4gICAgICAoZXZlbnQua2V5Q29kZSA+PSA5NiAmJiBldmVudC5rZXlDb2RlIDw9IDEwNSkgfHxcbiAgICAgIChldmVudC5rZXlDb2RlID49IDQ4ICYmIGV2ZW50LmtleUNvZGUgPD0gNTcpIHx8XG4gICAgICBldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5TUEFDRVxuICAgICkge1xuICAgICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgICAgLy8gQS1aLCAwLTksIHNwYWNlIC0tIGZpbHRlciB0aGUgbGlzdCBhbmQgc2Nyb2xsIHRvIGFjdGl2ZSBmaWx0ZXJcbiAgICAgIC8vIGZpbHRlciBoYXMgaGFyZCByZXNldCBhZnRlciAyc1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmlsdGVyVGVybVRpbWVvdXQpO1xuICAgICAgdGhpcy5maWx0ZXJUZXJtVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlclRlcm0gPSAnJztcbiAgICAgIH0sIDIwMDApO1xuICAgICAgbGV0IGNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmtleUNvZGUpO1xuICAgICAgdGhpcy5maWx0ZXJUZXJtID0gdGhpcy5maWx0ZXJUZXJtLmNvbmNhdChjaGFyKTtcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuX3RleHRJdGVtcy5maW5kSW5kZXgoKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke3RoaXMuZmlsdGVyVGVybS50b0xvd2VyQ2FzZSgpfWApLnRlc3QodmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuX2l0ZW1zLnRvQXJyYXkoKVt0aGlzLmFjdGl2ZUluZGV4XS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuX2l0ZW1zLnRvQXJyYXkoKVt0aGlzLmFjdGl2ZUluZGV4XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjcm9sbFRvQWN0aXZlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChbS2V5Q29kZXMuQkFDS1NQQUNFLCBLZXlDb2Rlcy5ERUxFVEVdLmluY2x1ZGVzKGV2ZW50LmtleUNvZGUpKSB7XG4gICAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgICAvLyBiYWNrc3BhY2UsIGRlbGV0ZSAtLSByZW1vdmUgcGFydGlhbCBmaWx0ZXJzXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5maWx0ZXJUZXJtVGltZW91dCk7XG4gICAgICB0aGlzLmZpbHRlclRlcm1UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyVGVybSA9ICcnO1xuICAgICAgfSwgMjAwMCk7XG4gICAgICB0aGlzLmZpbHRlclRlcm0gPSB0aGlzLmZpbHRlclRlcm0uc2xpY2UoMCwgLTEpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbk92ZXJsYXlLZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVTQyB8fCBldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FTlRFUikge1xuICAgICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxUb0FjdGl2ZSgpOiB2b2lkIHtcbiAgICBsZXQgY29udGFpbmVyID0gdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWNvbnRhaW5lcicpO1xuICAgIGxldCBpdGVtID0gdGhpcy5faXRlbXMudG9BcnJheSgpW3RoaXMuYWN0aXZlSW5kZXhdO1xuICAgIGlmIChjb250YWluZXIgJiYgaXRlbSkge1xuICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IGl0ZW0uZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXRlbScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9JdGVtRWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcHVibGljIGtlZXBPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgYWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkcm9wZG93bjogTm92b0Ryb3Bkb3duRWxlbWVudCwgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBQb29yIG1hbidzIGRpc2FibGVcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIC8vIENsb3NlIGlmIGtlZXBPcGVuIGlzIGZhbHNlXG4gICAgICBpZiAoIXRoaXMua2VlcE9wZW4pIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5jbG9zZVBhbmVsKCk7XG4gICAgICB9XG4gICAgICAvLyBFbWl0IHRoZSBhY3Rpb25cbiAgICAgIHRoaXMuYWN0aW9uLmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCB9KTtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGlzdCcsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9MaXN0RWxlbWVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKE5vdm9JdGVtRWxlbWVudClcbiAgcHVibGljIGl0ZW1zOiBRdWVyeUxpc3Q8Tm92b0l0ZW1FbGVtZW50PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRyb3Bkb3duOiBOb3ZvRHJvcGRvd25FbGVtZW50KSB7fVxuXG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kcm9wZG93bi5pdGVtcyA9IHRoaXMuaXRlbXM7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHJvcGRvd24taXRlbS1oZWFkZXInLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSXRlbUhlYWRlckVsZW1lbnQge31cbiJdfQ==